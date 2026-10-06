/* H2 research portal.  This file is deliberately vanilla JS: the published
 * release is a static snapshot and the browser must not know about private
 * catalog or research paths. */
(function () {
  "use strict";

  var state = {
    release: null,
    catalog: null,
    evaluations: [],
    route: "overview",
    timezone: "Asia/Shanghai",
    appliedStart: "",
    appliedEnd: "",
    scopeApplied: false,
    makerMetric: "",
    makerScope: "",
    makerArm: "",
    makerLevel: "",
    makerPage: 0,
    initialising: true
  };

  var $ = function (id) { return document.getElementById(id); };
  var text = function (value) {
    return value === null || value === undefined || value === "" ? "—" : String(value);
  };
  var finite = function (value) { return typeof value === "number" && Number.isFinite(value); };
  var array = function (value) { return Array.isArray(value) ? value : []; };
  var number = function (value, digits) {
    return finite(value) ? value.toLocaleString(undefined, { maximumFractionDigits: digits === undefined ? 3 : digits }) : "—";
  };
  var signed = function (value, digits) {
    return finite(value) ? (value > 0 ? "+" : "") + number(value, digits) : "—";
  };
  var clear = function (node) { while (node && node.firstChild) node.removeChild(node.firstChild); };
  var node = function (tag, className, content) {
    var el = document.createElement(tag);
    if (className) el.className = className;
    if (content instanceof Node) el.appendChild(content);
    else if (content !== undefined && content !== null) el.textContent = String(content);
    return el;
  };
  var append = function (parent) {
    Array.prototype.slice.call(arguments, 1).forEach(function (child) { if (child) parent.appendChild(child); });
    return parent;
  };
  var finiteOrNull = function (value) { return finite(value) ? value : null; };

  function normalizeDateString(value) {
    if (value === null || value === undefined) return "";
    var raw = String(value).trim();
    var compact = raw.match(/^(\d{4})(\d{2})(\d{2})$/);
    if (compact) raw = compact[1] + "-" + compact[2] + "-" + compact[3];
    var iso = raw.match(/^(\d{4})-(\d{2})-(\d{2})(?:$|T|\s)/);
    if (!iso) return "";
    var y = Number(iso[1]), m = Number(iso[2]), d = Number(iso[3]);
    var check = new Date(Date.UTC(y, m - 1, d));
    return check.getUTCFullYear() === y && check.getUTCMonth() === m - 1 && check.getUTCDate() === d
      ? raw.slice(0, 10) : "";
  }

  function localDateFromMs(value, timezone) {
    if (!finite(value)) return "";
    try {
      var parts = new Intl.DateTimeFormat("en-CA", { timeZone: timezone, year: "numeric", month: "2-digit", day: "2-digit" }).formatToParts(new Date(value));
      var byType = {}; parts.forEach(function (p) { byType[p.type] = p.value; });
      return byType.year + "-" + byType.month + "-" + byType.day;
    } catch (error) {
      return new Date(value).toISOString().slice(0, 10);
    }
  }

  function statusClass(value) {
    var s = String(value || "unknown").toLowerCase().replace(/[^a-z0-9]+/g, "-");
    if (["completed", "complete", "accepted", "promote", "current", "passed"].indexOf(s) >= 0) return "good";
    if (["stale", "failed", "blocked", "invalid"].indexOf(s) >= 0) return "bad";
    if (["pending", "candidate", "archive", "archived", "awaiting-review"].indexOf(s) >= 0) return "warn";
    return "";
  }

  function statusPill(value) {
    return node("span", "status " + statusClass(value), text(value || "unknown"));
  }

  function setLoad(message, error) {
    var load = $("load-state");
    load.textContent = message;
    load.className = "notice" + (error ? " error" : "");
  }

  function selected(select) {
    if (!select) return [];
    return Array.prototype.slice.call(select.options).filter(function (o) { return o.selected; }).map(function (o) { return o.value; });
  }

  function setSelect(select, values, selectedValues) {
    if (!select) return;
    var old = selectedValues || selected(select);
    clear(select);
    values.forEach(function (value) {
      var option = node("option", "", value.label === undefined ? value : value.label);
      option.value = value.value === undefined ? value : value.value;
      option.selected = old.indexOf(option.value) >= 0;
      select.appendChild(option);
    });
    if (!old.length && values.length && select.multiple) Array.prototype.forEach.call(select.options, function (o) { o.selected = true; });
  }

  function allDates() {
    var dates = [];
    state.evaluations.forEach(function (ev) {
      array(ev.dates).forEach(function (d) { var normalized = normalizeDateString(d); if (normalized) dates.push(normalized); });
      ["signals", "economics", "maker"].forEach(function (kind) {
        array(ev[kind]).forEach(function (row) {
          var d = String(row.anchor || "").toLowerCase() === "entry_trading_date" ? normalizeDateString(row.trading_date) : (finite(row.start_ms) ? localDateFromMs(row.start_ms, state.timezone) : normalizeDateString(row.trading_date));
          if (d) dates.push(d);
        });
      });
    });
    return Array.from(new Set(dates)).sort();
  }

  function refreshEvaluationOptions() {
    var products = selected($("product-filter"));
    var tracks = selected($("track-filter"));
    var fee = $("fee-filter") ? $("fee-filter").value : "";
    var eligible = state.evaluations.filter(function (ev) {
      return (!products.length || products.indexOf(String(ev.product || "")) >= 0) &&
        (!tracks.length || tracks.indexOf(String(ev.research_track_id || "")) >= 0) && (!fee || ((ev.contract || {}).fee_scenario === fee));
    });
    var eligibleIds = eligible.map(function (ev) { return String(ev.evaluation_id || ""); });
    var selectedIds = selected($("evaluation-filter")).filter(function (id) { return eligibleIds.indexOf(id) >= 0; });
    setSelect($("evaluation-filter"), eligible.map(function (ev) { return { value: String(ev.evaluation_id || ""), label: String(ev.title || ev.evaluation_id || "Unnamed evaluation") }; }), selectedIds);
    if (!selectedIds.length && eligible.length) Array.prototype.forEach.call($("evaluation-filter").options, function (o) { o.selected = true; });
  }

  function selectedEvaluations() {
    var ids = selected($("evaluation-filter"));
    var products = selected($("product-filter"));
    var tracks = selected($("track-filter"));
    var fee = $("fee-filter") ? $("fee-filter").value : "";
    return state.evaluations.filter(function (ev) {
      return (!ids.length || ids.indexOf(String(ev.evaluation_id || "")) >= 0) &&
        (!products.length || products.indexOf(String(ev.product || "")) >= 0) &&
        (!tracks.length || tracks.indexOf(String(ev.research_track_id || "")) >= 0) && (!fee || ((ev.contract || {}).fee_scenario === fee));
    });
  }

  function dateToMs(value, timezone) {
    var normalized = normalizeDateString(value);
    if (!normalized) return null;
    var parts = normalized.split("-").map(Number);
    if (parts.length !== 3 || parts.some(function (p) { return !Number.isFinite(p); })) return null;
    var utc = Date.UTC(parts[0], parts[1] - 1, parts[2]);
    return timezone === "Asia/Shanghai" ? utc - 8 * 60 * 60 * 1000 : utc;
  }

  function nextDate(value) {
    var normalized = normalizeDateString(value), parts;
    if (!normalized) return "";
    parts = normalized.split("-").map(Number);
    return new Date(Date.UTC(parts[0], parts[1] - 1, parts[2] + 1)).toISOString().slice(0, 10);
  }

  function inScope(row) {
    if (!state.scopeApplied) return true;
    if (!state.appliedStart && !state.appliedEnd) return false;
    var anchor = String(row.anchor || "").toLowerCase();
    var d = anchor === "entry_trading_date" ? normalizeDateString(row.trading_date) : (finite(row.start_ms) ? localDateFromMs(row.start_ms, state.timezone) : normalizeDateString(row.trading_date));
    if (!d) return false;
    return (!state.appliedStart || d >= state.appliedStart) && (!state.appliedEnd || d < state.appliedEnd);
  }

  function rowsFor(ev, kind) { return array(ev[kind]).filter(inScope); }

  function bucketRows(ev, kind, allowedBuckets, includeAllWhenUnfiltered) {
    return rowsFor(ev, kind).filter(function (row) {
      var bucket = String(row.bucket || "").toLowerCase();
      if (bucket === "all") return includeAllWhenUnfiltered && !state.scopeApplied;
      return allowedBuckets.indexOf(bucket) >= 0;
    });
  }

  function rangeText() {
    if (!state.scopeApplied) return "Full published range";
    if (!state.appliedStart && !state.appliedEnd) return "Applied statistical range: empty (no temporal rows; native full-range values remain separate)";
    return "Applied statistical range: [" + text(state.appliedStart) + ", " + text(state.appliedEnd) + ") (aligned dates; partial windows and gaps remain visible; chart zoom is independent)";
  }

  function metricValue(ev, name) {
    var match = array(ev.native_metrics).find(function (m) { return String(m.name || "") === name; });
    return match || null;
  }

  function metricCard(metric, heading) {
    var card = node("article", "card");
    append(card, node("h3", "", heading || metric.name), node("div", "metric-value", metric.value === null ? "—" : number(metric.value)), node("div", "metric-label", [metric.unit, metric.denominator, metric.aggregation].filter(Boolean).join(" · ") || "Published native metric"));
    if (metric.sample_n !== null && metric.sample_n !== undefined) card.appendChild(node("p", "small muted", "n = " + number(metric.sample_n, 0)));
    return card;
  }

  function contractLines(contract) {
    var list = node("ul", "list-clean small");
    Object.keys(contract || {}).slice(0, 12).forEach(function (key) {
      var value = contract[key];
      if (value !== null && value !== undefined && typeof value !== "object") list.appendChild(node("li", "", key + ": " + value));
    });
    return list;
  }

  function comparisonLabel(evals) {
    if (!evals.length) return "No evaluations selected";
    if (evals.length < 2) return "Single evaluation selected";
    var groups = evals.map(function (ev) { return ev.comparison_group || ""; });
    var identities = evals.map(function (ev) {
      return ev.contract_hash || JSON.stringify(ev.contract || {});
    });
    var sameGroup = groups.every(function (value) { return value === groups[0]; });
    var sameContract = identities.every(function (value) { return value === identities[0]; });
    if (sameGroup && sameContract) return "Comparison class: same comparison_group and contract";
    if (sameGroup) return "Comparison class: same comparison_group; contract hashes differ (input/model differences disclosed)";
    return "Comparison class: different comparison_group values (differences are contextual, not a like-for-like delta)";
  }

  function sourceIdentityLines(ev) {
    var list = node("ul", "list-clean small");
    [["experiment_id", ev.experiment_id], ["run_id", ev.run_id], ["comparison_group", ev.comparison_group]].forEach(function (item) {
      if (item[1] !== null && item[1] !== undefined && item[1] !== "") list.appendChild(node("li", "", item[0] + ": " + item[1]));
    });
    var revisions = array(ev.asset_revisions).map(function (asset) {
      if (typeof asset === "string") return asset;
      if (!asset || typeof asset !== "object") return "";
      var id = asset.asset_id || asset.id || "";
      var revision = asset.revision || asset.asset_revision || "";
      return id && revision ? String(id) + "@" + String(revision) : id ? String(id) : "";
    }).filter(Boolean);
    if (revisions.length) list.appendChild(node("li", "", "asset revisions: " + revisions.join(", ")));
    return list;
  }

  function selectionMeta(evals) {
    var wrap = node("div", "callout " + (evals.some(function (ev) { return ["stale", "blocked", "failed"].indexOf(String(ev.status || "").toLowerCase()) >= 0; }) ? "warn" : ""));
    wrap.appendChild(node("strong", "", comparisonLabel(evals)));
    if (evals.length) {
      var statuses = node("div", "small muted");
      statuses.textContent = evals.map(function (ev) { return (ev.title || ev.evaluation_id || "evaluation") + ": " + (ev.status || "unknown"); }).join(" · ");
      wrap.appendChild(statuses);
      var limitations = Array.from(new Set(evals.reduce(function (out, ev) { return out.concat(array(ev.limitations)); }, [])));
      if (limitations.length) wrap.appendChild(node("div", "small muted", "Limitations: " + limitations.join(" · ")));
    }
    return wrap;
  }

  function addRouteLink(parent, route, label) {
    var link = node("a", "small", label);
    link.href = "#" + route;
    parent.appendChild(link);
  }

  function renderOverview() {
    var root = $("app");
    clear(root);
    var evals = selectedEvaluations();
    var heading = node("div", "page-heading");
    append(heading, node("div", "", append(node("div"), node("h2", "", "Research overview"), node("p", "", state.catalog && state.catalog.program ? text(state.catalog.program.title || state.catalog.program.id) : "Published program snapshot"))), node("span", "small muted", rangeText()));
    root.appendChild(heading);
    root.appendChild(selectionMeta(evals));
    var grid = node("div", "grid");
    if (!evals.length) grid.appendChild(node("div", "panel wide", "No evaluations match the current filters."));
    evals.forEach(function (ev) {
      var card = node("article", "card");
      var title = node("h3");
      append(title, node("span", "", text(ev.title || ev.evaluation_id)), document.createTextNode(" "), statusPill(ev.status));
      append(card, title, node("p", "small muted", [ev.product, ev.research_track_id, ev.role].filter(Boolean).join(" · ")));
      if (ev.review_status) append(card, node("p", "small", "Review: "), statusPill(ev.review_status));
      append(card, node("p", "small", "Dates: " + (array(ev.dates).map(normalizeDateString).filter(Boolean).join(", ") || "not published")), node("p", "small", "Contract: " + text(ev.contract_hash || "unavailable")));
      var tags = node("div", "tag-list");
      ["signals", "economics", "maker"].forEach(function (kind) { tags.appendChild(node("span", "tag", kind + " " + array(ev[kind]).length)); });
      card.appendChild(tags);
      if (array(ev.limitations).length) card.appendChild(node("p", "small muted", "Limitation: " + ev.limitations[0]));
      var details = node("details", "small");
      details.appendChild(node("summary", "", "Contract and navigation"));
      details.appendChild(sourceIdentityLines(ev));
      details.appendChild(contractLines(ev.contract));
      var links = node("p", "small");
      addRouteLink(links, "signals", "Signals"); links.appendChild(document.createTextNode(" · ")); addRouteLink(links, "economics", "Economics"); links.appendChild(document.createTextNode(" · ")); addRouteLink(links, "maker", "Maker");
      details.appendChild(links); card.appendChild(details);
      grid.appendChild(card);
    });
    root.appendChild(grid);
    var native = node("section", "panel wide");
    native.appendChild(node("h3", "", "Native full-range metrics"));
    native.appendChild(node("p", "small muted", "These values are published by each evaluation. They are shown separately from the aligned range applied to derived tables."));
    var nativeGrid = node("div", "grid");
    evals.forEach(function (ev) {
      array(ev.native_metrics).slice(0, 4).forEach(function (m) { nativeGrid.appendChild(metricCard(m, (ev.title || ev.evaluation_id) + " · " + m.name)); });
    });
    native.appendChild(nativeGrid);
    root.appendChild(native);
  }

  function rowX(row, index) {
    if (finite(row.start_ms)) return row.start_ms;
    if (finite(row.end_ms)) return row.end_ms;
    var tradingDate = normalizeDateString(row.trading_date);
    if (tradingDate) return dateToMs(tradingDate, state.timezone);
    return row.bucket || index;
  }
  function coverageText(rows) {
    var stamps = rows.map(function (row, index) { return rowX(row, index); }).filter(finite).sort(function (a, b) { return a - b; });
    var actualStarts = rows.map(function (row) { return row.coverage_start_ms; }).filter(finite);
    var actualEnds = rows.map(function (row) { return row.coverage_end_ms; }).filter(finite);
    var actual = actualStarts.length && actualEnds.length ? " Actual source bounds: " + xLabel(Math.min.apply(Math, actualStarts)) + " → " + xLabel(Math.max.apply(Math, actualEnds)) + "." : " Actual source bounds are not published.";
    if (!stamps.length) return "Displayed bucket coverage is unavailable; the published date scope is retained." + actual;
    return "Displayed bucket coverage: " + xLabel(stamps[0]) + " → " + xLabel(stamps[stamps.length - 1]) + "; missing buckets remain gaps and are not filled." + actual;
  }
  function xLabel(value) {
    if (typeof value === "string") return value;
    if (!finite(value)) return "";
    return new Intl.DateTimeFormat(undefined, { timeZone: state.timezone, month: "short", day: "2-digit", hour: "2-digit", minute: "2-digit" }).format(new Date(value));
  }
  function tickValues(values) {
    var nums = values.filter(finite);
    if (!nums.length) return undefined;
    var min = Math.min.apply(Math, nums), max = Math.max.apply(Math, nums);
    var ticks = [min, max];
    if (min < 0 && max > 0) ticks.push(0);
    if (min !== max) ticks.push((min + max) / 2);
    return Array.from(new Set(ticks)).sort(function (a, b) { return a - b; });
  }
  function axisTicks(traces) {
    var values = [];
    traces.forEach(function (trace) { trace.x.forEach(function (v) { if (finite(v)) values.push(v); }); });
    if (!values.length) return {};
    var min = Math.min.apply(Math, values), max = Math.max.apply(Math, values);
    var ticks = Array.from(new Set([min, max, min + (max - min) / 2])).sort(function (a, b) { return a - b; });
    return { tickvals: ticks, ticktext: ticks.map(xLabel) };
  }
  function plot(nodeEl, traces, yTitle, unit) {
    if (!traces.length || !window.Plotly || typeof window.Plotly.newPlot !== "function") {
      clear(nodeEl);
      nodeEl.className = "chart-empty";
      nodeEl.textContent = traces.length ? "Interactive chart library is unavailable; the complete table remains available below." : "No published rows support this chart in the selected scope.";
      return;
    }
    nodeEl.className = "chart";
    var values = [];
    traces.forEach(function (trace) { trace.y.forEach(function (v) { if (finite(v)) values.push(v); }); });
    var min = values.length ? Math.min.apply(Math, values) : 0;
    var max = values.length ? Math.max.apply(Math, values) : 0;
    var pad = min === max ? Math.max(Math.abs(min) * .1, 1) : (max - min) * .08;
    var yRange = [Math.min(0, min - pad), Math.max(0, max + pad)];
    var xTicks = axisTicks(traces);
    window.Plotly.newPlot(nodeEl, traces, {
      margin: { l: 58, r: 18, t: 16, b: 78 },
      paper_bgcolor: "transparent", plot_bgcolor: "#ffffff", hovermode: "x unified",
      legend: { orientation: "h", y: -0.22 },
      xaxis: Object.assign({ title: { text: "Published bucket (" + state.timezone + ")" }, type: "date", rangeslider: { visible: true }, showline: true, ticks: "outside" }, xTicks),
      yaxis: { title: { text: yTitle + (unit ? " (" + unit + ")" : "") }, range: yRange, tickmode: "array", tickvals: tickValues(values), showline: true, ticks: "outside", zeroline: false },
      shapes: [{ type: "line", xref: "paper", yref: "y", x0: 0, x1: 1, y0: 0, y1: 0, line: { color: "#7c8792", width: 1, dash: "dash" } }],
      annotations: [{ xref: "paper", yref: "paper", x: 0, y: 1.08, text: "zero reference", showarrow: false, font: { size: 10, color: "#66727f" } }]
    }, { responsive: true, displaylogo: false, showTips: false, scrollZoom: true, modeBarButtonsToAdd: ["resetScale2d"] });
  }

  function table(headers, rows) {
    var wrap = node("div", "table-wrap");
    var t = node("table"), thead = node("thead"), tr = node("tr");
    headers.forEach(function (h) { tr.appendChild(node("th", "", h)); });
    thead.appendChild(tr); t.appendChild(thead);
    var body = node("tbody");
    rows.forEach(function (values) {
      var row = node("tr");
      values.forEach(function (value, i) { row.appendChild(node("td", i > 0 && typeof value === "number" ? "number" : "", value === null || value === undefined ? "—" : value)); });
      body.appendChild(row);
    });
    t.appendChild(body); wrap.appendChild(t); return wrap;
  }

  function seriesNames(evals, kind) {
    var names = [];
    evals.forEach(function (ev) { array(ev[kind]).forEach(function (r) { if (r.series && names.indexOf(String(r.series)) < 0) names.push(String(r.series)); }); });
    return names.sort();
  }

  function signalRowsFor(ev) {
    return rowsFor(ev, "signals").filter(function (row) { return String(row.bucket || "hour").toLowerCase() === "hour"; });
  }

  function binnedSignalRowsFor(ev) {
    return rowsFor(ev, "bins").filter(function (row) { return String(row.bucket || "hour").toLowerCase() === "hour"; });
  }

  function hourlyPoints(rows, valueKey) {
    var ordered = rows.slice().sort(function (a, b) { return rowX(a, 0) - rowX(b, 0); });
    var points = [];
    ordered.forEach(function (row, index) {
      var x = rowX(row, index), previous = points.length ? points[points.length - 1].x : null;
      if (finite(x) && finite(previous)) {
        for (var missing = previous + 3600000; missing < x; missing += 3600000) points.push({ x: missing, y: null, text: "No published hourly row" });
      }
      points.push({ x: x, y: finite(row[valueKey]) ? row[valueKey] : null, text: "n=" + text(row.n) + " · " + xLabel(x) });
    });
    return points;
  }

  function makeSignalTraces(evals, valueKey) {
    var grouped = {};
    evals.forEach(function (ev) {
      signalRowsFor(ev).forEach(function (row) {
        var sampleSet = String(row.sample_set || "native");
        var key = String(ev.evaluation_id || ev.title || "evaluation") + "\u0000" + String(row.series || "default") + "\u0000" + sampleSet;
        if (!grouped[key]) grouped[key] = { ev: ev, series: row.series || "default", sampleSet: sampleSet, rows: [] };
        grouped[key].rows.push(row);
      });
    });
    return Object.keys(grouped).map(function (key) {
      var group = grouped[key], points = hourlyPoints(group.rows, valueKey);
      return { x: points.map(function (p) { return p.x; }), y: points.map(function (p) { return p.y; }), text: points.map(function (p) { return p.text; }), mode: "lines+markers", name: (group.ev.title || group.ev.evaluation_id || "evaluation") + " · " + group.series + " · " + group.sampleSet, connectgaps: false };
    });
  }

  function renderSignals() {
    var root = $("app"); clear(root);
    var evals = selectedEvaluations();
    var heading = node("div", "page-heading");
    append(heading, append(node("div"), node("h2", "", "Signals"), node("p", "", "Hourly IC, RankIC and published strength bins. Pearson range statistics use mergeable moments; RankIC is only shown where the exact published range is available.")), node("span", "small muted", rangeText()));
    root.appendChild(heading);
    root.appendChild(selectionMeta(evals));
    if (!evals.length) { root.appendChild(node("div", "panel wide", "No evaluations match the current filters.")); return; }
    var native = node("section", "panel wide"); append(native, node("h3", "", "Native full-range signal metrics"), node("p", "small muted", "Native values remain separate from the hour-only applied summary."));
    var nativeCards = node("div", "grid"); evals.forEach(function (ev) { array(ev.native_metrics).filter(function (m) { return /ic|signal|edge|correlation/i.test(String(m.name)); }).forEach(function (m) { nativeCards.appendChild(metricCard(m, (ev.title || ev.evaluation_id) + " · " + m.name)); }); }); native.appendChild(nativeCards); root.appendChild(native);
    var panel = node("section", "panel wide");
    var signalCoverageRows = []; evals.forEach(function (ev) { signalCoverageRows = signalCoverageRows.concat(signalRowsFor(ev)); });
    append(panel, node("h3", "", "Hourly signal diagnostics"), node("p", "small muted", "Unit and denominator follow each row's published contract. Missing, constant, or unsupported values remain null."), node("p", "small muted", coverageText(signalCoverageRows)));
    var chartEl = node("div", "chart"), rankChartEl = node("div", "chart");
    var signalRows = [];
    evals.forEach(function (ev) {
      signalRowsFor(ev).forEach(function (r) {
        signalRows.push({ ev: ev, row: r });
      });
    });
    panel.appendChild(node("h4", "", "Pearson IC")); panel.appendChild(chartEl); panel.appendChild(node("h4", "", "RankIC")); panel.appendChild(rankChartEl); root.appendChild(panel);
    plot(chartEl, makeSignalTraces(evals, "ic"), "Pearson IC", "IC"); plot(rankChartEl, makeSignalTraces(evals, "rank_ic"), "RankIC", "RankIC");
    var allRows = signalRows.map(function (item) { var r = item.row; return [item.ev.title || item.ev.evaluation_id, r.series || "—", r.sample_set || "native", "hour", normalizeDateString(r.trading_date) || "—", xLabel(rowX(r)), r.n, r.missing_n, finiteOrNull(r.ic), finiteOrNull(r.rank_ic), finiteOrNull(r.signed_edge_bps)]; });
    var tablePanel = node("section", "panel wide");
    append(tablePanel, node("h3", "", "Hourly rows in applied scope"), node("p", "small muted", "Only bucket=hour rows are included. Native and common sample sets remain separate. Trading date is shown separately from the timezone-local timestamp."), table(["Evaluation", "Series", "Sample set", "Bucket", "Trading date", "Local hour (" + state.timezone + ")", "n", "Missing", "IC", "RankIC", "Signed edge (bps)"], allRows));
    root.appendChild(tablePanel);
    var bins = [];
    evals.forEach(function (ev) { binnedSignalRowsFor(ev).forEach(function (r) { bins.push([ev.title || ev.evaluation_id, r.series || "—", r.sample_set || "native", "hour", r.bin || "—", r.n, finiteOrNull(r.ic), finiteOrNull(r.rank_ic), finiteOrNull(r.signed_edge_bps)]); }); });
    var binsPanel = node("section", "panel wide");
    append(binsPanel, node("h3", "", "Published signal bins"), node("p", "small muted", "Only hour bins present in the catalog are displayed; no current OOS quantiles are inferred."), table(["Evaluation", "Series", "Sample set", "Bucket", "Bin", "n", "IC", "RankIC", "Signed edge (bps)"], bins));
    root.appendChild(binsPanel);
    renderSignalScopeSummary(root, evals, signalRows);
  }

  function mergeMoments(rows) {
    var out = { n: 0, missing_n: 0, mean_x: null, mean_y: null, m2_x: 0, m2_y: 0, c_xy: 0, signed_edge_bps: null, rank_ic: null, reason: null };
    rows.forEach(function (r) {
      if (finite(r.missing_n)) out.missing_n += r.missing_n;
      if (!finite(r.n) || !finite(r.mean_x) || !finite(r.mean_y) || !finite(r.m2_x) || !finite(r.m2_y) || !finite(r.c_xy)) return;
      var n2 = r.n;
      if (!out.n) { out.n = n2; out.mean_x = r.mean_x; out.mean_y = r.mean_y; out.m2_x = r.m2_x; out.m2_y = r.m2_y; out.c_xy = r.c_xy; }
      else {
        var n1 = out.n, total = n1 + n2, dx = r.mean_x - out.mean_x, dy = r.mean_y - out.mean_y;
        out.c_xy += r.c_xy + dx * dy * n1 * n2 / total;
        out.m2_x += r.m2_x + dx * dx * n1 * n2 / total;
        out.m2_y += r.m2_y + dy * dy * n1 * n2 / total;
        out.mean_x += dx * n2 / total; out.mean_y += dy * n2 / total; out.n = total;
      }
      if (finite(r.signed_edge_bps)) out.signed_edge_bps = out.signed_edge_bps === null ? r.signed_edge_bps : out.signed_edge_bps;
    });
    out.ic = out.n > 1 && out.m2_x > 0 && out.m2_y > 0 ? out.c_xy / Math.sqrt(out.m2_x * out.m2_y) : null;
    if (out.ic === null && out.n) out.reason = "constant or insufficient finite observations";
    if (out.n === 0) out.reason = "mergeable moments are unavailable for this scope";
    return out;
  }

  function renderSignalScopeSummary(root, evals, signalRows) {
    var panel = node("section", "panel wide");
    append(panel, node("h3", "", "Applied-range summary (hour rows only)"), node("p", "small muted", "Pooled Pearson is merged from n, means, M2 and covariance. Equal-hour mean IC, n-weighted hour IC, and pooled Pearson are separate statistics. Pooled RankIC is unavailable unless an exact precomputed range matches."));
    var rows = [];
    evals.forEach(function (ev) {
      var own = signalRows.filter(function (x) { return x.ev === ev; });
      var groups = {};
      own.forEach(function (x) { var key = (x.row.series || "default") + "\u0000" + (x.row.sample_set || "native"); (groups[key] = groups[key] || []).push(x.row); });
      Object.keys(groups).forEach(function (key) {
        var parts = key.split("\u0000"), groupRows = groups[key], merged = mergeMoments(groupRows);
        var validIC = groupRows.filter(function (r) { return finite(r.ic); });
        var sumN = validIC.reduce(function (sum, r) { return sum + (finite(r.n) ? r.n : 0); }, 0);
        var meanIC = validIC.length ? validIC.reduce(function (sum, r) { return sum + r.ic; }, 0) / validIC.length : null;
        var weightedIC = sumN ? validIC.reduce(function (sum, r) { return sum + r.ic * r.n; }, 0) / sumN : null;
        var exactRank = groupRows.length === 1 && finite(groupRows[0].range_start_ms) && finite(groupRows[0].range_end_ms) && dateToMs(state.appliedStart, state.timezone) === groupRows[0].range_start_ms && dateToMs(state.appliedEnd, state.timezone) === groupRows[0].range_end_ms ? finiteOrNull(groupRows[0].rank_ic) : null;
        rows.push([ev.title || ev.evaluation_id, parts[0], parts[1], merged.n || null, merged.missing_n || 0, finiteOrNull(meanIC), finiteOrNull(weightedIC), finiteOrNull(merged.ic), exactRank, exactRank === null ? "exact pooled RankIC unavailable" : "exact precomputed range"]);
      });
    });
    panel.appendChild(table(["Evaluation", "Series", "Sample set", "n", "Missing", "Mean hourly IC", "n-weighted hourly IC", "Pooled Pearson IC", "Pooled RankIC", "RankIC status"], rows)); root.appendChild(panel);
  }

  function economicsRowsFor(ev, panelName) {
    var wanted = panelName === "dynamic" ? "day" : "hour";
    return rowsFor(ev, "economics").filter(function (row) {
      return String(row.panel || "").toLowerCase() === panelName && String(row.bucket || "").toLowerCase() === wanted;
    });
  }

  function weightedEconomics(rows) {
    var fields = ["gross_bps", "crossing_bps", "fee_bps", "net_bps"];
    var out = { n: 0, unknown_n: 0, anchor: "—", denominator: "—" };
    fields.forEach(function (field) { out[field] = null; });
    rows.forEach(function (row) {
      var n = finite(row.n) && row.n > 0 ? row.n : 0;
      out.n += n; if (finite(row.unknown_n)) out.unknown_n += row.unknown_n;
      if (row.anchor) out.anchor = row.anchor; if (row.denominator) out.denominator = row.denominator;
      fields.forEach(function (field) {
        if (!finite(row[field]) || !n) return;
        out[field] = (out[field] === null ? 0 : out[field]) + row[field] * n;
      });
    });
    fields.forEach(function (field) { if (out[field] !== null && out.n) out[field] /= out.n; });
    var tradeSums = rows.filter(function (row) { return finite(row.net_sum_trade_bps); }).map(function (row) { return row.net_sum_trade_bps; });
    out.net_sum_trade_bps = tradeSums.length ? tradeSums.reduce(function (a, b) { return a + b; }, 0) : null;
    return out;
  }

  function makerRowsFor(ev) {
    return makerGroups(ev, true).reduce(function (out, group) {
      out.rows = out.rows.concat(group.rows.map(function (row) { return { row: row, bucket: String(row.bucket || group.bucket).toLowerCase(), fullRangeOnly: String(row.bucket || group.bucket).toLowerCase() === "all", key: group.key }; }));
      return out;
    }, { rows: [], groups: [] });
  }

  function makerField(row, field, fallback) {
    var aliases = { arm: ["arm", "side", "direction", "initial_support"], level: ["level", "tier", "quote_level"] };
    if (row[field] !== undefined && row[field] !== null && row[field] !== "") return String(row[field]);
    var candidates = aliases[field] || [];
    for (var i = 0; i < candidates.length; i += 1) if (row[candidates[i]] !== undefined && row[candidates[i]] !== null && row[candidates[i]] !== "") return String(row[candidates[i]]);
    return fallback || "";
  }

  function makerGroups(ev, applyScope) {
    var grouped = {};
    array(ev.maker).forEach(function (row) {
      var keyParts = [row.metric || "", row.series || "default", makerField(row, "scope", "native"), row.anchor || "", row.unit || ""];
      var key = keyParts.join("\u0000");
      if (!grouped[key]) grouped[key] = { key: key, rows: [], rawRows: [], bucket: "", fullRangeOnly: false };
      grouped[key].rawRows.push(row);
    });
    Object.keys(grouped).forEach(function (key) {
      var group = grouped[key], raw = group.rawRows;
      var hours = raw.filter(function (row) { return String(row.bucket || "").toLowerCase() === "hour"; });
      var days = raw.filter(function (row) { return String(row.bucket || "").toLowerCase() === "day"; });
      var all = raw.filter(function (row) { return String(row.bucket || "").toLowerCase() === "all"; });
      if (hours.length) { group.bucket = "hour"; group.fullRangeOnly = false; group.rows = (applyScope ? hours.filter(inScope) : hours).concat(all); }
      else if (days.length) { group.bucket = "day"; group.fullRangeOnly = false; group.rows = (applyScope ? days.filter(inScope) : days).concat(all); }
      else { group.bucket = "all"; group.fullRangeOnly = true; group.rows = all; }
    });
    return Object.keys(grouped).map(function (key) { return grouped[key]; });
  }

  function makerAvailableRows(ev) {
    return makerGroups(ev, false).reduce(function (out, group) {
      return out.concat(group.rows.map(function (row) { return { row: row, bucket: String(row.bucket || group.bucket).toLowerCase(), fullRangeOnly: String(row.bucket || group.bucket).toLowerCase() === "all", key: group.key }; }));
    }, []);
  }

  function makerRowMatches(row) {
    return (!state.makerMetric || row.metric === state.makerMetric) &&
      (!state.makerScope || makerField(row, "scope", "native") === state.makerScope) &&
      (!state.makerArm || makerField(row, "arm") === state.makerArm) &&
      (!state.makerLevel || makerField(row, "level") === state.makerLevel);
  }

  function economicsPanel(evals, panelName) {
    var panel = node("section", "panel wide");
    var bucketName = panelName === "dynamic" ? "day" : "hour";
    var economicsCoverageRows = []; evals.forEach(function (ev) { economicsCoverageRows = economicsCoverageRows.concat(economicsRowsFor(ev, panelName)); });
    append(panel, node("h3", "", panelName === "dynamic" ? "Dynamic taker strategy" : "Fixed 2s signal diagnostic"), node("p", "small muted", panelName === "dynamic" ? "Native dynamic strategy economics remain separate from fixed-horizon probes." : "Independent fixed-horizon diagnostic; it is not an executable strategy account."), node("p", "small muted", "Applied rows: bucket=" + bucketName + "; all-range native rows are excluded from filtered statistics."), node("p", "small muted", panelName === "dynamic" ? "Dynamic day rows without start_ms are grouped by entry trading date; timestamped rows use the selected timezone-local date." : "Fixed 2s hour rows use timestamp-derived timezone-local dates; trading date remains a separate displayed field."), node("p", "small muted", coverageText(economicsCoverageRows)));
    var chart = node("div", "chart"); panel.appendChild(chart);
    var traces = [], rows = [];
    evals.forEach(function (ev) {
      var own = economicsRowsFor(ev, panelName);
      own.forEach(function (r, i) {
        var sampleSet = r.sample_set || "native";
        rows.push([ev.title || ev.evaluation_id, r.series || "—", sampleSet, bucketName, normalizeDateString(r.trading_date) || "—", xLabel(rowX(r, i)), r.n, r.unknown_n, r.gross_bps, r.crossing_bps, r.fee_bps, r.net_bps, r.anchor || "—", r.denominator || "—"]);
        if (finite(r.net_bps)) {
          var label = (ev.title || ev.evaluation_id) + (r.series ? " · " + r.series : "") + " · " + sampleSet;
          var trace = traces.find(function (t) { return t.name === label; });
          if (!trace) { trace = { x: [], y: [], mode: "lines+markers", name: label, connectgaps: false }; traces.push(trace); }
          trace.x.push(rowX(r, i)); trace.y.push(r.net_bps);
        }
      });
    });
    panel.appendChild(node("p", "small muted", "Applied scope: " + rangeText()));
    var summaries = [];
    evals.forEach(function (ev) {
      var groups = {};
      economicsRowsFor(ev, panelName).forEach(function (r) { var key = (r.series || "default") + "\u0000" + (r.sample_set || "native"); (groups[key] = groups[key] || []).push(r); });
      Object.keys(groups).forEach(function (key) {
        var parts = key.split("\u0000"), summary = weightedEconomics(groups[key]);
        if (summary.n || summary.net_sum_trade_bps !== null) summaries.push([ev.title || ev.evaluation_id, parts[0], parts[1], summary.n || null, summary.unknown_n || 0, summary.gross_bps, summary.crossing_bps, summary.fee_bps, summary.net_bps, summary.net_sum_trade_bps, summary.anchor, summary.denominator]);
      });
    });
    panel.appendChild(node("h4", "", "Applied-range weighted summary"));
    panel.appendChild(table(["Evaluation", "Series", "Sample set", "n", "Unknown", "Gross bps (n-weighted)", "Crossing bps (n-weighted)", "Fee bps (n-weighted)", "Net bps (n-weighted)", "Net sum trade-bps", "Anchor", "Denominator"], summaries));
    panel.appendChild(table(["Evaluation", "Series", "Sample set", "Bucket", "Trading date", bucketName === "day" ? "Bucket date/time (" + state.timezone + ")" : "Local hour (" + state.timezone + ")", "n", "Unknown", "Gross bps", "Crossing bps", "Fee bps", "Net bps", "Anchor", "Denominator"], rows));
    panel._portalChart = chart;
    panel._portalTraces = traces;
    return panel;
  }

  function renderEconomics() {
    var root = $("app"); clear(root); var evals = selectedEvaluations();
    var heading = node("div", "page-heading"); append(heading, append(node("div"), node("h2", "", "Economics"), node("p", "", "Dynamic strategy costs and fixed 2s diagnostics are separate contracts.")), node("span", "small muted", rangeText())); root.appendChild(heading);
    root.appendChild(selectionMeta(evals));
    var native = node("section", "panel wide"); append(native, node("h3", "", "Native full-range economics"), node("p", "small muted", "Native metrics are not rewritten when a date scope is applied."));
    var cards = node("div", "grid"); evals.forEach(function (ev) { array(ev.native_metrics).filter(function (m) { return /gross|cross|fee|net|turnover|pnl/i.test(String(m.name)); }).forEach(function (m) { cards.appendChild(metricCard(m, (ev.title || ev.evaluation_id) + " · " + m.name)); }); }); native.appendChild(cards); root.appendChild(native);
    var dynamicPanel = economicsPanel(evals, "dynamic"); root.appendChild(dynamicPanel); plot(dynamicPanel._portalChart, dynamicPanel._portalTraces, "Net", "bps");
    var fixedPanel = economicsPanel(evals, "fixed_2s"); root.appendChild(fixedPanel); plot(fixedPanel._portalChart, fixedPanel._portalTraces, "Net", "bps");
  }

  function renderMaker() {
    var root = $("app"); clear(root); var evals = selectedEvaluations();
    var heading = node("div", "page-heading"); append(heading, append(node("div"), node("h2", "", "Maker execution quality"), node("p", "", "Fill, markout and cancellation metrics retain their source time anchors and denominators.")), node("span", "small muted", rangeText())); root.appendChild(heading);
    root.appendChild(selectionMeta(evals));
    var native = node("section", "panel wide"); append(native, node("h3", "", "Native full-range maker metrics"), node("p", "small muted", "Maker MTM is displayed as execution quality, never as strategy Net."));
    var cards = node("div", "grid"); evals.forEach(function (ev) { array(ev.native_metrics).filter(function (m) { return /maker|fill|markout|cancel|mtm/i.test(String(m.name)); }).forEach(function (m) { cards.appendChild(metricCard(m, (ev.title || ev.evaluation_id) + " · " + m.name)); }); }); native.appendChild(cards); root.appendChild(native);
    var available = [];
    evals.forEach(function (ev) { makerAvailableRows(ev).forEach(function (item) { available.push({ ev: ev, row: item.row, bucket: item.bucket, fullRangeOnly: item.fullRangeOnly, key: item.key }); }); });
    var metricNames = Array.from(new Set(available.map(function (item) { return item.row.metric; }).filter(Boolean))).sort();
    var scopeNames = Array.from(new Set(available.map(function (item) { return makerField(item.row, "scope", "native"); }))).sort();
    var armNames = Array.from(new Set(available.map(function (item) { return makerField(item.row, "arm"); }).filter(Boolean))).sort();
    var levelNames = Array.from(new Set(available.map(function (item) { return makerField(item.row, "level"); }).filter(Boolean))).sort();
    if (!state.makerMetric && metricNames.length) state.makerMetric = metricNames[0];
    var controls = node("div", "filters");
    function addMakerSelect(id, label, values, current) {
      var group = node("div", "filter-group"); group.appendChild(node("label", "", label)); var select = node("select"); select.id = id; var options = [""].concat(values); options.forEach(function (value) { var option = node("option", "", value || "All"); option.value = value; option.selected = value === current; select.appendChild(option); });
      var stateKey = { "maker-metric": "makerMetric", "maker-scope": "makerScope", "maker-arm": "makerArm", "maker-level": "makerLevel" }[id];
      select.addEventListener("change", function (event) { state[stateKey] = event.target.value; state.makerPage = 0; renderMaker(); }); group.appendChild(select); controls.appendChild(group);
    }
    if (metricNames.length) addMakerSelect("maker-metric", "Maker metric", metricNames, state.makerMetric);
    if (scopeNames.length) addMakerSelect("maker-scope", "Scope", scopeNames, state.makerScope);
    if (armNames.length) addMakerSelect("maker-arm", "Arm / side", armNames, state.makerArm);
    if (levelNames.length) addMakerSelect("maker-level", "Level", levelNames, state.makerLevel);
    if (controls.childNodes.length) root.appendChild(controls);
    var filtered = [];
    evals.forEach(function (ev) { makerRowsFor(ev).rows.forEach(function (item) { if (makerRowMatches(item.row)) filtered.push({ ev: ev, row: item.row, bucket: item.bucket, fullRangeOnly: item.fullRangeOnly, key: item.key }); }); });
    var chart = node("div", "chart"), traces = [], traceGroups = {};
    filtered.forEach(function (item) {
      if (item.fullRangeOnly || !finite(item.row.value)) return;
      var key = (item.ev.evaluation_id || item.ev.title || "evaluation") + "\u0000" + (item.row.metric || "metric") + "\u0000" + (item.row.series || "default") + "\u0000" + makerField(item.row, "scope", "native") + "\u0000" + (item.row.anchor || "") + "\u0000" + (item.row.unit || "") + "\u0000" + makerField(item.row, "arm") + "\u0000" + makerField(item.row, "level");
      if (!traceGroups[key]) traceGroups[key] = { ev: item.ev, row: item.row, rows: [] };
      traceGroups[key].rows.push(item.row);
    });
    Object.keys(traceGroups).forEach(function (key) {
      var group = traceGroups[key], ordered = group.rows.slice().sort(function (a, b) { return rowX(a, 0) - rowX(b, 0); });
      traces.push({ x: ordered.map(function (r) { return rowX(r, 0); }), y: ordered.map(function (r) { return finite(r.value) ? r.value : null; }), mode: "lines+markers", name: (group.ev.title || group.ev.evaluation_id) + " · " + (group.row.metric || "metric") + " · " + (group.row.series || "default") + " · " + makerField(group.row, "scope", "native") + " · " + (group.row.anchor || "anchor") + " · " + makerField(group.row, "arm") + " · " + makerField(group.row, "level"), connectgaps: false });
    });
    var makerUnit = filtered.length && filtered[0].row.unit ? filtered[0].row.unit : "published unit";
    var panel = node("section", "panel wide"); append(panel, node("h3", "", "Maker rows in applied scope"), node("p", "small muted", "Unknown values remain visible. A cancel markout is not a counterfactual filled-order PnL. Full-range bucket=all rows are labeled full range and are never date-filtered or charted."), node("p", "small muted", coverageText(filtered.map(function (item) { return item.row; }))), chart); root.appendChild(panel); plot(chart, traces, state.makerMetric || "Maker metric", makerUnit);
    var pageSize = 250, total = filtered.length, pageCount = Math.max(1, Math.ceil(total / pageSize)); state.makerPage = Math.min(state.makerPage, pageCount - 1); var pageRows = filtered.slice(state.makerPage * pageSize, (state.makerPage + 1) * pageSize);
    var countNote = node("p", "small muted", "Showing " + (total ? state.makerPage * pageSize + 1 : 0) + "–" + Math.min((state.makerPage + 1) * pageSize, total) + " of " + total + " filtered row(s). All selector choices come from the unfiltered published rows.");
    var rows = pageRows.map(function (item) { var r = item.row; return [item.ev.title || item.ev.evaluation_id, r.series || "—", item.bucket, normalizeDateString(r.trading_date) || "—", xLabel(rowX(r)), r.metric || "—", r.value, r.unit || "—", r.denominator || "—", r.anchor || "—", item.fullRangeOnly ? "full range (native)" : (makerField(r, "scope", "native") + " / filtered")]; });
    panel.appendChild(countNote); panel.appendChild(table(["Evaluation", "Series", "Bucket", "Trading date", "Bucket date/time (" + state.timezone + ")", "Metric", "Value", "Unit", "Denominator", "Anchor", "Scope"], rows));
    var pager = node("div", "filter-actions"); var previous = node("button", "button", "Previous"); previous.type = "button"; previous.disabled = state.makerPage <= 0; previous.addEventListener("click", function () { state.makerPage -= 1; renderMaker(); }); var next = node("button", "button", "Next"); next.type = "button"; next.disabled = state.makerPage >= pageCount - 1; next.addEventListener("click", function () { state.makerPage += 1; renderMaker(); }); append(pager, previous, node("span", "small muted", "Page " + (state.makerPage + 1) + " / " + pageCount), next); panel.appendChild(pager);
  }

  function renderStatus() {
    var root = $("app"); clear(root); var evals = selectedEvaluations();
    var heading = node("div", "page-heading"); append(heading, append(node("div"), node("h2", "", "Release and status"), node("p", "", "Unknown, stale, blocked and incomplete capabilities remain explicit."))); root.appendChild(heading);
    var grid = node("div", "grid");
    evals.forEach(function (ev) {
      var card = node("article", "card"); var h = node("h3"); append(h, node("span", "", ev.title || ev.evaluation_id), document.createTextNode(" "), statusPill(ev.status)); append(card, h, node("p", "small", "Role: " + text(ev.role)), node("p", "small", "Review: " + text(ev.review_status)), node("p", "small", "Contract hash: " + text(ev.contract_hash)), sourceIdentityLines(ev), node("p", "small", "Dates: " + (array(ev.dates).map(normalizeDateString).filter(Boolean).join(", ") || "not published")));
      var caps = ev.capabilities || {}; var list = node("ul", "list-clean small"); Object.keys(caps).forEach(function (key) { var cap = caps[key] || {}; list.appendChild(node("li", "", key + ": " + text(cap.status) + (cap.reason ? " — " + cap.reason : ""))); }); card.appendChild(list);
      if (array(ev.limitations).length) { var ul = node("ul", "list-clean small"); array(ev.limitations).forEach(function (lim) { ul.appendChild(node("li", "", lim)); }); card.appendChild(ul); }
      grid.appendChild(card);
    });
    if (!evals.length) grid.appendChild(node("div", "panel wide", "No evaluations match the current filters."));
    root.appendChild(grid);
    var release = node("section", "panel wide"); append(release, node("h3", "", "Release identity"), node("p", "small", "release_id: " + text(state.release && state.release.release_id)), node("p", "small", "generated_at: " + text(state.release && state.release.generated_at)), node("p", "small", "catalog path: resolved relative to release.json"), node("p", "small", "All displayed fields originate from the published catalog; arbitrary HTML is never rendered.")); root.appendChild(release);
  }

  function render() {
    document.querySelectorAll(".main-nav a").forEach(function (a) { a.classList.toggle("active", a.getAttribute("data-route") === state.route); });
    if (state.route === "signals") renderSignals();
    else if (state.route === "economics") renderEconomics();
    else if (state.route === "maker") renderMaker();
    else if (state.route === "status") renderStatus();
    else renderOverview();
  }

  function updateFilterNote() {
    $("filter-note").textContent = "Timezone: " + state.timezone + ". " + rangeText() + ". Plot zoom and range slider change only the view; Apply aligned range changes supported table/card statistics.";
  }

  function initialiseFilters() {
    var products = Array.from(new Set(state.evaluations.map(function (e) { return e.product; }).filter(Boolean))).sort();
    var tracks = Array.from(new Set(state.evaluations.map(function (e) { return e.research_track_id; }).filter(Boolean))).sort();
    var fees=Array.from(new Set(state.evaluations.map(function(e){return (e.contract || {}).fee_scenario;}).filter(Boolean))).sort();
    setSelect($("fee-filter"), [{value:"",label:"All registered scenarios"}].concat(fees));
    $("fee-filter").addEventListener("change",function(){refreshEvaluationOptions();render();});
    setSelect($("product-filter"), products);
    setSelect($("track-filter"), tracks);
    refreshEvaluationOptions();
    var dates = allDates();
    if (dates.length) { $("start-date").value = dates[0]; $("end-date").value = nextDate(dates[dates.length - 1]); }
    state.appliedStart = ""; state.appliedEnd = ""; state.scopeApplied = false; updateFilterNote(); $("filters").hidden = false;
    ["product-filter", "track-filter"].forEach(function (id) { $(id).addEventListener("change", function () { refreshEvaluationOptions(); render(); }); });
    $("evaluation-filter").addEventListener("change", render);
    $("timezone-filter").addEventListener("change", function (event) { state.timezone = event.target.value; updateFilterNote(); render(); });
    $("apply-filter").addEventListener("click", function () { var start = $("start-date").value, end = $("end-date").value; if (start && end && start >= end) { $("filter-note").textContent = "End must be after start; the previous applied range remains active."; return; } state.appliedStart = start; state.appliedEnd = end; state.scopeApplied = true; state.makerPage = 0; updateFilterNote(); render(); });
    $("clear-filter").addEventListener("click",function(){state.appliedStart="";state.appliedEnd="";state.scopeApplied=false;$("start-date").value="";$("end-date").value="";updateFilterNote();render();});
    $("reset-filter").addEventListener("click", function () { state.appliedStart = ""; state.appliedEnd = ""; state.scopeApplied = false; state.makerPage = 0; var dates2 = allDates(); if (dates2.length) { $("start-date").value = dates2[0]; $("end-date").value = nextDate(dates2[dates2.length - 1]); } updateFilterNote(); render(); });
  }

  function routeChanged() { state.route = (location.hash || "#overview").slice(1).split("?")[0] || "overview"; if (["overview", "signals", "economics", "maker", "status"].indexOf(state.route) < 0) state.route = "overview"; if (!state.initialising) render(); }

  /* Small pure helpers are exposed only for synthetic contract tests.  They do
   * not contain or load catalog facts. */
  if (typeof window !== "undefined") {
    window.__researchPortalTest = {
      normalizeDateString: normalizeDateString,
      dateToMs: dateToMs,
      rowX: rowX,
      mergeMoments: mergeMoments,
      hourlyPoints: hourlyPoints,
      weightedEconomics: weightedEconomics,
      makerGroups: makerGroups
    };
  }

  function load() {
    var releaseUrl = new URL("release.json", document.baseURI);
    fetch(releaseUrl.toString(), { cache: "no-store" }).then(function (res) { if (!res.ok) throw new Error("release.json returned HTTP " + res.status); return res.json(); }).then(function (release) {
      if (!release || typeof release.data !== "string" || !release.release_id) throw new Error("release.json is missing release_id or data");
      state.release = release; $("release-id").textContent = "Release " + release.release_id; $("generated-at").textContent = release.generated_at ? "Generated " + release.generated_at : "";
      var catalogUrl = new URL(release.data, releaseUrl);
      if (catalogUrl.origin !== releaseUrl.origin) throw new Error("catalog path must be relative to release.json");
      return fetch(catalogUrl.toString(), { cache: "no-store" }).then(function (res) { if (!res.ok) throw new Error("catalog returned HTTP " + res.status); return res.json(); });
    }).then(function (catalog) {
      if (!catalog || !Array.isArray(catalog.evaluations)) throw new Error("catalog.evaluations is missing or invalid");
      if (String(catalog.release_id || "") !== String(state.release.release_id)) throw new Error("release/catalog identity mismatch");
      state.catalog = catalog; state.evaluations = catalog.evaluations; $("program-title").textContent = catalog.program && catalog.program.title ? catalog.program.title : "Research portal"; $("footer-contract").textContent = "Schema v" + text(catalog.schema_version || 1); setLoad("Snapshot catalog loaded. " + state.evaluations.length + " evaluation(s).", false); initialiseFilters(); var requested = new URLSearchParams(location.search).get("evaluation");
      if (requested && state.evaluations.some(function(e){return e.evaluation_id===requested;})) {
        Array.from($("evaluation-filter").options).forEach(function(o){o.selected=o.value===requested;});
      }
      state.initialising = false; routeChanged();
    }).catch(function (error) { console.error(error); setLoad("Unable to load the published release: " + error.message + ". Check release.json and the catalog path.", true); $("filters").hidden = true; });
  }

  window.addEventListener("hashchange", routeChanged);
  load();
}());
