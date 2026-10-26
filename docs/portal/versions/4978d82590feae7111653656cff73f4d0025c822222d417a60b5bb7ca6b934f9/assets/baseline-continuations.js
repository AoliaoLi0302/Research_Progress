/* Explicitly approved F2 date continuation. Source evaluations remain immutable. */
(function (root) {
  'use strict';
  const parent = 'exp_20260930_d1a_taker_fullperiod_entry_economics_v1/';
  const extension = 'exp_20261019_ag_au_f2_baseline_extension_v1/';
  const links = {
    [parent + 'AG_F2_current_D1A_actual_fill_2s/run-c1f3438f320d41bf9c568c709e0bbaac']: extension + 'AG_F2_current_full82_publication_v2',
    [parent + 'AU_F2_current_D1A_actual_fill_2s/run-c1f3438f320d41bf9c568c709e0bbaac']: extension + 'AU_F2_current_full82_publication_v2',
    [extension + 'AG_F2_current_full82']: extension + 'AG_F2_current_full82_publication_v2',
    [extension + 'AU_F2_current_full82']: extension + 'AU_F2_current_full82_publication_v2',
    'au_G5_20261015_F2_current': extension + 'AU_F2_current_full82_publication_v2'
  };
  function target(id, evaluations) {
    const before = evaluations.find(e => e.evaluation_id === id);
    const after = evaluations.find(e => e.evaluation_id === links[id]);
    if (!before || !after || !['passed', 'gaps'].includes(after.status)) return id;
    // Navigation is authorized for these exact identities only. Other models,
    // costs, dates and experiments are never chosen by maximum date or "latest".
    const dates = new Set(after.dates || []);
    if (!(before.dates || []).every(d => dates.has(d)) || dates.size !== 82 || !dates.has('20260831')) return id;
    if ((id.startsWith(parent) || id.startsWith(extension)) && (before.config_id !== after.config_id || before.contract_hash !== after.contract_hash)) return id;
    return after.evaluation_id;
  }
  function active(evaluations) { return evaluations.filter(e => target(e.evaluation_id, evaluations) === e.evaluation_id); }
  const api = {target, active};
  if (typeof module !== 'undefined' && module.exports) module.exports = api;
  else root.ResearchBaselineContinuations = api;
}(typeof window === 'undefined' ? globalThis : window));
