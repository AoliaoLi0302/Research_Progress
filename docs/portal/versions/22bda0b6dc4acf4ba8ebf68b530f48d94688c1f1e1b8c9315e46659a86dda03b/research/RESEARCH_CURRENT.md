# 期货短周期研究当前结果

发布版本：`22bda0b6dc4acf4ba8ebf68b530f48d94688c1f1e1b8c9315e46659a86dda03b`；指标快照时间：2026-10-05T07:14:16.445995+00:00。

[交互门户](https://aoliaoli0302.github.io/Research_Progress/portal/) · [研究来源索引](RESEARCH_INDEX.md)

由同一 H1 result_catalog 白名单投影生成；本页与门户绑定同一发布版本。覆盖已登记路线，未登记实验不自动接入。主参考、最新运行、技术验收与人工复核分别管理。

动态策略、固定 2s 探针和 Maker 共同 H MTM 不可混用；Maker MTM 不等于完整策略 Net。窗口样本不等于完整日；小时 IC 平均不等于 pooled IC，小时 RankIC 不合成为区间 RankIC。

| 结果 | 角色 | 日期范围（实际日期数） | 技术状态 | 人工复核 |
| --- | --- | --- | --- | --- |
| XAG_B1 | control | 20260507–20260630（38） | passed | pending |
| XAG_F2_current | current_reference | 20260507–20260630（38） | passed | pending |
| XAU_archive_O | archive | 20260507–20260630（38） | passed | pending |
| XAU_archive_O+G | archive | 20260507–20260630（38） | passed | pending |
| route-B B1 | candidate | 20260507–20260603（2） | passed | pending |
| route-B B2 | candidate | 20260507–20260603（2） | passed | pending |
| route-B B3 | candidate | 20260507–20260603（2） | passed | pending |
| Maker38日 有缺口参考 | reference_with_gaps | 20260507–20260630（38） | gaps | pending |
| Maker 四窗 L1 TTL2s HOLD/LF/EVENT | candidate | 20260507–20260603（2） | passed | pending |
| AG B1 aligned taker 2s | reference_with_gaps | 20260507–20260709（45） | gaps | pending |
| AG C1_COMBO_FULL_O aligned taker 2s | reference_with_gaps | 20260507–20260709（45） | gaps | pending |
| AG F2_current aligned taker 2s | reference_with_gaps | 20260507–20260709（45） | gaps | pending |
| AU B1 aligned taker 2s | candidate | 20260507–20260709（45） | passed | pending |
| AU C1_COMBO_FULL_O aligned taker 2s | candidate | 20260507–20260709（45） | passed | pending |
| AU F2_current aligned taker 2s | candidate | 20260507–20260709（45） | passed | pending |

## XAG_B1

评价：d0/XAG_B1；来源运行：run-298cb2a311524a7099cffc2a5ee5d06c。

实际日期：20260507, 20260508, 20260511, 20260512, 20260513, 20260514, 20260515, 20260518, 20260519, 20260520, 20260521, 20260522, 20260525, 20260526, 20260527, 20260528, 20260529, 20260601, 20260602, 20260603, 20260604, 20260605, 20260608, 20260609, 20260610, 20260611, 20260612, 20260615, 20260616, 20260617, 20260618, 20260622, 20260623, 20260624, 20260625, 20260626, 20260629, 20260630

| 原生指标 | 值 | 单位 | 分母 | 汇总 | 状态 |
| --- | --- | --- | --- | --- | --- |
| gross_bps | 2.4385613491092935 | bp/trade | completed_trade | source_pooled | known |
| crossing_bps | 1.4414600311288088 | bp/trade | completed_trade | source_pooled | known |
| fee_new_bps | 1.2 | bp/trade | completed_trade | source_pooled | known |
| net_new_bps | -0.20289868201951472 | bp/trade | completed_trade | source_pooled | known |
| linear_net_new_bps | -0.20335146250343653 | bp/trade | completed_trade | source_pooled | known |
| completed_trades | 8885.0 | count | completed_trade | count | known |

限制：精确数量/合约现金流未建立；线性单位数量估计与原生log-bps分开；保留pre-fill简化；38个原生交易日；按entry trading date归属的完成交易。费用重计价不改变路径，日指标不是账户时段PnL。；blocked_resume：未登记连续策略边界checkpoint；终态库存0不代替可恢复状态。

- PnL_path：missing_facts；no equity or account-value source is projected
- cancel_attribution：missing_facts；cancel attribution facts unavailable
- fill_markout：missing_facts；registered fill markout/entry-edge fact is unavailable
- hourly_IC：missing_facts；no finite prediction/label pairs in pinned assets
- hourly_RankIC：missing_facts；no finite non-constant prediction/label pairs in pinned assets
- maker_fill：missing_facts；maker order/fill facts unavailable
- signal_bins：missing_facts；no registered source training-bin column

## XAG_F2_current

评价：d0/XAG_F2_current；来源运行：run-298cb2a311524a7099cffc2a5ee5d06c。

实际日期：20260507, 20260508, 20260511, 20260512, 20260513, 20260514, 20260515, 20260518, 20260519, 20260520, 20260521, 20260522, 20260525, 20260526, 20260527, 20260528, 20260529, 20260601, 20260602, 20260603, 20260604, 20260605, 20260608, 20260609, 20260610, 20260611, 20260612, 20260615, 20260616, 20260617, 20260618, 20260622, 20260623, 20260624, 20260625, 20260626, 20260629, 20260630

| 原生指标 | 值 | 单位 | 分母 | 汇总 | 状态 |
| --- | --- | --- | --- | --- | --- |
| gross_bps | 2.4441094804924934 | bp/trade | completed_trade | source_pooled | known |
| crossing_bps | 1.4410017290444543 | bp/trade | completed_trade | source_pooled | known |
| fee_new_bps | 1.2 | bp/trade | completed_trade | source_pooled | known |
| net_new_bps | -0.1968922485519612 | bp/trade | completed_trade | source_pooled | known |
| linear_net_new_bps | -0.19757167189536026 | bp/trade | completed_trade | source_pooled | known |
| completed_trades | 8978.0 | count | completed_trade | count | known |

限制：精确数量/合约现金流未建立；线性单位数量估计与原生log-bps分开；保留pre-fill简化；38个原生交易日；按entry trading date归属的完成交易。费用重计价不改变路径，日指标不是账户时段PnL。；blocked_resume：未登记连续策略边界checkpoint；终态库存0不代替可恢复状态。

- PnL_path：missing_facts；no equity or account-value source is projected
- cancel_attribution：missing_facts；cancel attribution facts unavailable
- fill_markout：missing_facts；registered fill markout/entry-edge fact is unavailable
- hourly_IC：missing_facts；no finite prediction/label pairs in pinned assets
- hourly_RankIC：missing_facts；no finite non-constant prediction/label pairs in pinned assets
- maker_fill：missing_facts；maker order/fill facts unavailable
- signal_bins：missing_facts；no registered source training-bin column

## XAU_archive_O

评价：d0/XAU_archive_O；来源运行：run-298cb2a311524a7099cffc2a5ee5d06c。

实际日期：20260507, 20260508, 20260511, 20260512, 20260513, 20260514, 20260515, 20260518, 20260519, 20260520, 20260521, 20260522, 20260525, 20260526, 20260527, 20260528, 20260529, 20260601, 20260602, 20260603, 20260604, 20260605, 20260608, 20260609, 20260610, 20260611, 20260612, 20260615, 20260616, 20260617, 20260618, 20260622, 20260623, 20260624, 20260625, 20260626, 20260629, 20260630

| 原生指标 | 值 | 单位 | 分母 | 汇总 | 状态 |
| --- | --- | --- | --- | --- | --- |
| gross_bps | 0.8116275122507058 | bp/trade | completed_trade | source_pooled | known |
| crossing_bps | 0.02822200172189499 | bp/trade | completed_trade | source_pooled | known |
| fee_new_bps | 1.2 | bp/trade | completed_trade | source_pooled | known |
| net_new_bps | -0.41659448947118904 | bp/trade | completed_trade | source_pooled | known |
| linear_net_new_bps | -0.416573002194743 | bp/trade | completed_trade | source_pooled | known |
| completed_trades | 10175.0 | count | completed_trade | count | known |

限制：精确数量/合约现金流未建立；线性单位数量估计与原生log-bps分开；archive future-gate及0ms信息上界；新AU桥回执缺失；38个原生交易日；按entry trading date归属的完成交易。费用重计价不改变路径，日指标不是账户时段PnL。；blocked_resume：未登记连续策略边界checkpoint；终态库存0不代替可恢复状态。

- PnL_path：missing_facts；no equity or account-value source is projected
- cancel_attribution：missing_facts；cancel attribution facts unavailable
- fill_markout：missing_facts；registered fill markout/entry-edge fact is unavailable
- hourly_IC：missing_facts；no finite prediction/label pairs in pinned assets
- hourly_RankIC：missing_facts；no finite non-constant prediction/label pairs in pinned assets
- maker_fill：missing_facts；maker order/fill facts unavailable
- signal_bins：missing_facts；no registered source training-bin column

## XAU_archive_O+G

评价：d0/XAU_archive_O+G；来源运行：run-298cb2a311524a7099cffc2a5ee5d06c。

实际日期：20260507, 20260508, 20260511, 20260512, 20260513, 20260514, 20260515, 20260518, 20260519, 20260520, 20260521, 20260522, 20260525, 20260526, 20260527, 20260528, 20260529, 20260601, 20260602, 20260603, 20260604, 20260605, 20260608, 20260609, 20260610, 20260611, 20260612, 20260615, 20260616, 20260617, 20260618, 20260622, 20260623, 20260624, 20260625, 20260626, 20260629, 20260630

| 原生指标 | 值 | 单位 | 分母 | 汇总 | 状态 |
| --- | --- | --- | --- | --- | --- |
| gross_bps | 0.8511109684240649 | bp/trade | completed_trade | source_pooled | known |
| crossing_bps | 0.028412870728309718 | bp/trade | completed_trade | source_pooled | known |
| fee_new_bps | 1.2 | bp/trade | completed_trade | source_pooled | known |
| net_new_bps | -0.37730190230424504 | bp/trade | completed_trade | source_pooled | known |
| linear_net_new_bps | -0.3775434656366236 | bp/trade | completed_trade | source_pooled | known |
| completed_trades | 10012.0 | count | completed_trade | count | known |

限制：精确数量/合约现金流未建立；线性单位数量估计与原生log-bps分开；archive future-gate及0ms信息上界；新AU桥回执缺失；38个原生交易日；按entry trading date归属的完成交易。费用重计价不改变路径，日指标不是账户时段PnL。；blocked_resume：未登记连续策略边界checkpoint；终态库存0不代替可恢复状态。

- PnL_path：missing_facts；no equity or account-value source is projected
- cancel_attribution：missing_facts；cancel attribution facts unavailable
- fill_markout：missing_facts；registered fill markout/entry-edge fact is unavailable
- hourly_IC：missing_facts；no finite prediction/label pairs in pinned assets
- hourly_RankIC：missing_facts；no finite non-constant prediction/label pairs in pinned assets
- maker_fill：missing_facts；maker order/fill facts unavailable
- signal_bins：missing_facts；no registered source training-bin column

## route-B B1

评价：d0/b1；来源运行：run-298cb2a311524a7099cffc2a5ee5d06c。

实际日期：20260507, 20260603

| 原生指标 | 值 | 单位 | 分母 | 汇总 | 状态 |
| --- | --- | --- | --- | --- | --- |
| b1/historical_prediction_bps/IC | 0.23429129809046134 | correlation | common_finite_prediction_label_samples | source_pooled_not_hourly_average | known |
| b1/historical_prediction_bps/RankIC | 0.2616017447963556 | correlation | common_finite_prediction_label_samples | source_pooled_not_hourly_average | known |
| b1/historical_prediction_bps/signed_edge_bps | 0.40974228334196133 | bp | common_finite_prediction_label_samples | source_pooled_not_hourly_average | known |
| b1/prediction_bps/IC | 0.23456426090794366 | correlation | common_finite_prediction_label_samples | source_pooled_not_hourly_average | known |
| b1/prediction_bps/RankIC | 0.26180295113312385 | correlation | common_finite_prediction_label_samples | source_pooled_not_hourly_average | known |
| b1/prediction_bps/signed_edge_bps | 0.40702903232421966 | bp | common_finite_prediction_label_samples | source_pooled_not_hourly_average | known |

限制：历史输入receive/cutoff证据不足；不是部署等价性证明；重叠事件/trial不是独立账户收益；UNKNOWN不补零；20260507及20260603，active/normal四个15分钟窗口；窗口边界为UTC ns [start,end)。不是完整日覆盖。；新增日期先核对依赖；没有登记新日期可用输入。

- PnL_path：missing_facts；no equity or account-value source is projected
- cancel_attribution：missing_facts；cancel attribution facts unavailable
- cost_breakdown：missing_facts；native crossing/fee facts unavailable
- fill_markout：missing_facts；registered fill markout/entry-edge fact is unavailable
- maker_fill：missing_facts；maker order/fill facts unavailable

## route-B B2

评价：d0/b2；来源运行：run-298cb2a311524a7099cffc2a5ee5d06c。

实际日期：20260507, 20260603

| 原生指标 | 值 | 单位 | 分母 | 汇总 | 状态 |
| --- | --- | --- | --- | --- | --- |
| b2/held_prediction_bps/IC | 0.14451246621137362 | correlation | common_finite_prediction_label_samples | source_pooled_not_hourly_average | known |
| b2/held_prediction_bps/RankIC | 0.16847375099171447 | correlation | common_finite_prediction_label_samples | source_pooled_not_hourly_average | known |
| b2/held_prediction_bps/signed_edge_bps | 0.32741086873457115 | bp | common_finite_prediction_label_samples | source_pooled_not_hourly_average | known |
| b2/prediction_bps/IC | 0.21070639593344417 | correlation | common_finite_prediction_label_samples | source_pooled_not_hourly_average | known |
| b2/prediction_bps/RankIC | 0.24920727555938402 | correlation | common_finite_prediction_label_samples | source_pooled_not_hourly_average | known |
| b2/prediction_bps/signed_edge_bps | 0.46654303036930694 | bp | common_finite_prediction_label_samples | source_pooled_not_hourly_average | known |

限制：历史输入receive/cutoff证据不足；不是部署等价性证明；重叠事件/trial不是独立账户收益；UNKNOWN不补零；20260507及20260603，active/normal四个15分钟窗口；窗口边界为UTC ns [start,end)。不是完整日覆盖。；新增日期先核对依赖；没有登记新日期可用输入。

- PnL_path：missing_facts；no equity or account-value source is projected
- cancel_attribution：missing_facts；cancel attribution facts unavailable
- cost_breakdown：missing_facts；native crossing/fee facts unavailable
- fill_markout：missing_facts；registered fill markout/entry-edge fact is unavailable
- maker_fill：missing_facts；maker order/fill facts unavailable

## route-B B3

评价：d0/b3；来源运行：run-298cb2a311524a7099cffc2a5ee5d06c。

实际日期：20260507, 20260603

| 原生指标 | 值 | 单位 | 分母 | 汇总 | 状态 |
| --- | --- | --- | --- | --- | --- |
| b1/historical_prediction_bps/gross_bps | 0.38201679776635805 | bp | completed_common_trials | source_pooled_not_hourly_average | known |
| b1/historical_prediction_bps/fee_bps | 1.2000011711119207 | bp | completed_common_trials | source_pooled_not_hourly_average | known |
| b1/historical_prediction_bps/net_bps | -2.136968205267834 | bp | completed_common_trials | source_pooled_not_hourly_average | known |
| b1/historical_prediction_bps/entered_exit_unknown_n | 5.0 | count | entered_trials | source_pooled_not_hourly_average | known |
| b1/prediction_bps/gross_bps | 0.3811321193212573 | bp | completed_common_trials | source_pooled_not_hourly_average | known |
| b1/prediction_bps/fee_bps | 1.2000008721816606 | bp | completed_common_trials | source_pooled_not_hourly_average | known |
| b1/prediction_bps/net_bps | -2.1378522547512837 | bp | completed_common_trials | source_pooled_not_hourly_average | known |
| b1/prediction_bps/entered_exit_unknown_n | 5.0 | count | entered_trials | source_pooled_not_hourly_average | known |
| b2/held_prediction_bps/gross_bps | 0.2040513715163644 | bp | completed_common_trials | source_pooled_not_hourly_average | known |
| b2/held_prediction_bps/fee_bps | 1.199997627683357 | bp | completed_common_trials | source_pooled_not_hourly_average | known |
| b2/held_prediction_bps/net_bps | -2.3220399733224215 | bp | completed_common_trials | source_pooled_not_hourly_average | known |
| b2/held_prediction_bps/entered_exit_unknown_n | 66.0 | count | entered_trials | source_pooled_not_hourly_average | known |
| b2/prediction_bps/gross_bps | 0.22433373742464213 | bp | completed_common_trials | source_pooled_not_hourly_average | known |
| b2/prediction_bps/fee_bps | 1.1999962207147927 | bp | completed_common_trials | source_pooled_not_hourly_average | known |
| b2/prediction_bps/net_bps | -2.30175457450245 | bp | completed_common_trials | source_pooled_not_hourly_average | known |
| b2/prediction_bps/entered_exit_unknown_n | 66.0 | count | entered_trials | source_pooled_not_hourly_average | known |

限制：历史输入receive/cutoff证据不足；不是部署等价性证明；重叠事件/trial不是独立账户收益；UNKNOWN不补零；20260507及20260603，active/normal四个15分钟窗口；窗口边界为UTC ns [start,end)。不是完整日覆盖。；新增日期先核对依赖；没有登记新日期可用输入。

- PnL_path：missing_facts；no equity or account-value source is projected
- cancel_attribution：missing_facts；cancel attribution facts unavailable
- fill_markout：missing_facts；registered fill markout/entry-edge fact is unavailable
- hourly_IC：missing_facts；no finite prediction/label pairs in pinned assets
- hourly_RankIC：missing_facts；no finite non-constant prediction/label pairs in pinned assets
- maker_fill：missing_facts；maker order/fill facts unavailable
- signal_bins：missing_facts；no registered source training-bin column

## Maker38日 有缺口参考

评价：d0/maker38_reference；来源运行：run-298cb2a311524a7099cffc2a5ee5d06c。

实际日期：20260507, 20260508, 20260511, 20260512, 20260513, 20260514, 20260515, 20260518, 20260519, 20260520, 20260521, 20260522, 20260525, 20260526, 20260527, 20260528, 20260529, 20260601, 20260602, 20260603, 20260604, 20260605, 20260608, 20260609, 20260610, 20260611, 20260612, 20260615, 20260616, 20260617, 20260618, 20260622, 20260623, 20260624, 20260625, 20260626, 20260629, 20260630

| 原生指标 | 值 | 单位 | 分母 | 汇总 | 状态 |
| --- | --- | --- | --- | --- | --- |
| EVENT_SIG1000/common_H_bps_per_K3 | -0.015861655143011126 | bp | common_known_K3_original_orders | source_pooled | known |
| EVENT_SIG1000/UNKNOWN | 41.0 | count | submit_support_orders | source_pooled | known |
| FIX500/common_H_bps_per_K3 | -0.03228323660757763 | bp | common_known_K3_original_orders | source_pooled | known |
| FIX500/UNKNOWN | 41.0 | count | submit_support_orders | source_pooled | known |
| LF_SIG1000/common_H_bps_per_K3 | -0.04928646483579029 | bp | common_known_K3_original_orders | source_pooled | known |
| LF_SIG1000/UNKNOWN | 41.0 | count | submit_support_orders | source_pooled | known |
| round_trip_net | unknown | bp | not_applicable_no_exit | source_pooled | unavailable |

限制：独立验收链缺失；STATE.completed_dates矛盾未解决；源账本仍引用tmp；只登记参考，不自动晋级或声明已持久化；38个原生交易日；提交支持侧N=570460，K3=570419，UNKNOWN=41。；新增日期先核对依赖；没有登记新日期可用输入。；Maker display scope: whole-population and original submit-support/opposition strata; other frozen exploratory splits remain in source summaries.

- PnL_path：missing_facts；no equity or account-value source is projected
- cost_breakdown：missing_facts；native crossing/fee facts unavailable
- fill_markout：missing_facts；registered fill markout/entry-edge fact is unavailable
- hourly_IC：missing_facts；no finite prediction/label pairs in pinned assets
- hourly_RankIC：missing_facts；no finite non-constant prediction/label pairs in pinned assets
- signal_bins：missing_facts；no registered source training-bin column

## Maker 四窗 L1 TTL2s HOLD/LF/EVENT

评价：d0/maker_four；来源运行：run-298cb2a311524a7099cffc2a5ee5d06c。

实际日期：20260507, 20260603

| 原生指标 | 值 | 单位 | 分母 | 汇总 | 状态 |
| --- | --- | --- | --- | --- | --- |
| EVENT/common_H_bps_per_K3 | -0.031267483308717176 | bp | common_known_K3_original_orders | source_pooled | known |
| EVENT/common_H_notional_weighted_bps | -2.1531101872090255 | bp | filled_notional | source_pooled | known |
| EVENT/UNKNOWN | 1.0 | count | submit_support_orders | source_pooled | known |
| EVENT/K3 | 1752.0 | count | submit_support_orders | source_pooled | known |
| EVENT/filled_qty | 25.31899999999981 | quantity | submit_support_orders | source_pooled | known |
| HOLD/common_H_bps_per_K3 | -0.2281335664963408 | bp | common_known_K3_original_orders | source_pooled | known |
| HOLD/common_H_notional_weighted_bps | -1.571759980417928 | bp | filled_notional | source_pooled | known |
| HOLD/UNKNOWN | 1.0 | count | submit_support_orders | source_pooled | known |
| HOLD/K3 | 1752.0 | count | submit_support_orders | source_pooled | known |
| HOLD/filled_qty | 253.803 | quantity | submit_support_orders | source_pooled | known |
| LF/common_H_bps_per_K3 | -0.07666992282796856 | bp | common_known_K3_original_orders | source_pooled | known |
| LF/common_H_notional_weighted_bps | -1.5027204854253249 | bp | filled_notional | source_pooled | known |
| LF/UNKNOWN | 1.0 | count | submit_support_orders | source_pooled | known |
| LF/K3 | 1752.0 | count | submit_support_orders | source_pooled | known |
| LF/filled_qty | 89.312 | quantity | submit_support_orders | source_pooled | known |
| round_trip_net | unknown | bp | not_applicable_no_exit | source_pooled | unavailable |

限制：decision+2s MTM，没有实际退出；round-trip Net不可得；四窗HOLD不是38日HOLD结论；四个15分钟窗口；提交支持侧 N=1753，K3=1752，UNKNOWN=1。；新增日期先核对依赖；没有登记新日期可用输入。；Maker display scope: whole-population and original submit-support/opposition strata; other frozen exploratory splits remain in source summaries.

- PnL_path：missing_facts；no equity or account-value source is projected
- cost_breakdown：missing_facts；native crossing/fee facts unavailable
- fill_markout：blocked；Existing fill+2s and cancel-mid/quote files await supplemental H1 source registration; common-H MTM is not a substitute.
- hourly_IC：missing_facts；no finite prediction/label pairs in pinned assets
- hourly_RankIC：missing_facts；no finite non-constant prediction/label pairs in pinned assets
- signal_bins：missing_facts；no registered source training-bin column

## AG B1 aligned taker 2s

评价：exp_20260930_d1a_taker_fullperiod_entry_economics_v1/AG_B1_D1A_actual_fill_2s/run-c1f3438f320d41bf9c568c709e0bbaac；来源运行：run-c1f3438f320d41bf9c568c709e0bbaac。

实际日期：20260507, 20260508, 20260511, 20260512, 20260513, 20260514, 20260515, 20260518, 20260519, 20260520, 20260521, 20260522, 20260525, 20260526, 20260527, 20260528, 20260529, 20260601, 20260602, 20260603, 20260604, 20260605, 20260608, 20260609, 20260610, 20260611, 20260612, 20260615, 20260616, 20260617, 20260618, 20260622, 20260623, 20260624, 20260625, 20260626, 20260629, 20260630, 20260701, 20260702, 20260703, 20260706, 20260707, 20260708, 20260709

| 原生指标 | 值 | 单位 | 分母 | 汇总 | 状态 |
| --- | --- | --- | --- | --- | --- |
| completed_trades | 10721 | count | accepted completed trades | count | known |
| completed_subset_net_bps_sum | -3206.336245429374 | bps | sum of per-trade entry-notional returns; unresolved inventory excluded | sum_trade_bps | known |
| completed_subset_mean_net_bps | -0.29907063197736905 | bps | accepted completed trades | mean | known |
| fullperiod_net_unit_cash | unknown | unit cash | unit quantity1, multiplier1; only defined if final inventory flat | sum_cash | unavailable |
| pooled_prediction_IC | 0.24063612648847696 | correlation | common finite model/2s-label rows | pooled_rows | known |
| pooled_prediction_RankIC | 0.2697839731757202 | correlation | common finite model/2s-label rows | pooled_reranked_rows | known |

限制：45 dates/179 sessions, 20260507-20260709; historical development38/newdates7; independent confirmation missing; complete decisions retained; completed subset distinct from unresolved final inventory；Structured execution details remain in the private source bound by contract_hash.

- PnL_path：missing_facts；no equity or account-value source is projected
- cancel_attribution：missing_facts；cancel attribution facts unavailable
- fill_markout：missing_facts；registered fill markout/entry-edge fact is unavailable
- maker_fill：missing_facts；maker order/fill facts unavailable
- signal_bins：missing_facts；no registered source training-bin column

## AG C1_COMBO_FULL_O aligned taker 2s

评价：exp_20260930_d1a_taker_fullperiod_entry_economics_v1/AG_C1_COMBO_FULL_O_D1A_actual_fill_2s/run-c1f3438f320d41bf9c568c709e0bbaac；来源运行：run-c1f3438f320d41bf9c568c709e0bbaac。

实际日期：20260507, 20260508, 20260511, 20260512, 20260513, 20260514, 20260515, 20260518, 20260519, 20260520, 20260521, 20260522, 20260525, 20260526, 20260527, 20260528, 20260529, 20260601, 20260602, 20260603, 20260604, 20260605, 20260608, 20260609, 20260610, 20260611, 20260612, 20260615, 20260616, 20260617, 20260618, 20260622, 20260623, 20260624, 20260625, 20260626, 20260629, 20260630, 20260701, 20260702, 20260703, 20260706, 20260707, 20260708, 20260709

| 原生指标 | 值 | 单位 | 分母 | 汇总 | 状态 |
| --- | --- | --- | --- | --- | --- |
| completed_trades | 10962 | count | accepted completed trades | count | known |
| completed_subset_net_bps_sum | -2742.1736855441877 | bps | sum of per-trade entry-notional returns; unresolved inventory excluded | sum_trade_bps | known |
| completed_subset_mean_net_bps | -0.25015268067361685 | bps | accepted completed trades | mean | known |
| fullperiod_net_unit_cash | unknown | unit cash | unit quantity1, multiplier1; only defined if final inventory flat | sum_cash | unavailable |
| pooled_prediction_IC | 0.2518038488320095 | correlation | common finite model/2s-label rows | pooled_rows | known |
| pooled_prediction_RankIC | 0.2811234489076498 | correlation | common finite model/2s-label rows | pooled_reranked_rows | known |

限制：45 dates/179 sessions, 20260507-20260709; historical development38/newdates7; independent confirmation missing; complete decisions retained; completed subset distinct from unresolved final inventory；Structured execution details remain in the private source bound by contract_hash.

- PnL_path：missing_facts；no equity or account-value source is projected
- cancel_attribution：missing_facts；cancel attribution facts unavailable
- fill_markout：missing_facts；registered fill markout/entry-edge fact is unavailable
- maker_fill：missing_facts；maker order/fill facts unavailable
- signal_bins：missing_facts；no registered source training-bin column

## AG F2_current aligned taker 2s

评价：exp_20260930_d1a_taker_fullperiod_entry_economics_v1/AG_F2_current_D1A_actual_fill_2s/run-c1f3438f320d41bf9c568c709e0bbaac；来源运行：run-c1f3438f320d41bf9c568c709e0bbaac。

实际日期：20260507, 20260508, 20260511, 20260512, 20260513, 20260514, 20260515, 20260518, 20260519, 20260520, 20260521, 20260522, 20260525, 20260526, 20260527, 20260528, 20260529, 20260601, 20260602, 20260603, 20260604, 20260605, 20260608, 20260609, 20260610, 20260611, 20260612, 20260615, 20260616, 20260617, 20260618, 20260622, 20260623, 20260624, 20260625, 20260626, 20260629, 20260630, 20260701, 20260702, 20260703, 20260706, 20260707, 20260708, 20260709

| 原生指标 | 值 | 单位 | 分母 | 汇总 | 状态 |
| --- | --- | --- | --- | --- | --- |
| completed_trades | 10968 | count | accepted completed trades | count | known |
| completed_subset_net_bps_sum | -3137.6476753987263 | bps | sum of per-trade entry-notional returns; unresolved inventory excluded | sum_trade_bps | known |
| completed_subset_mean_net_bps | -0.2860729098649459 | bps | accepted completed trades | mean | known |
| fullperiod_net_unit_cash | unknown | unit cash | unit quantity1, multiplier1; only defined if final inventory flat | sum_cash | unavailable |
| pooled_prediction_IC | 0.24255184209306857 | correlation | common finite model/2s-label rows | pooled_rows | known |
| pooled_prediction_RankIC | 0.2714385931639001 | correlation | common finite model/2s-label rows | pooled_reranked_rows | known |

限制：45 dates/179 sessions, 20260507-20260709; historical development38/newdates7; independent confirmation missing; complete decisions retained; completed subset distinct from unresolved final inventory；Structured execution details remain in the private source bound by contract_hash.

- PnL_path：missing_facts；no equity or account-value source is projected
- cancel_attribution：missing_facts；cancel attribution facts unavailable
- fill_markout：missing_facts；registered fill markout/entry-edge fact is unavailable
- maker_fill：missing_facts；maker order/fill facts unavailable
- signal_bins：missing_facts；no registered source training-bin column

## AU B1 aligned taker 2s

评价：exp_20260930_d1a_taker_fullperiod_entry_economics_v1/AU_B1_D1A_actual_fill_2s/run-c1f3438f320d41bf9c568c709e0bbaac；来源运行：run-c1f3438f320d41bf9c568c709e0bbaac。

实际日期：20260507, 20260508, 20260511, 20260512, 20260513, 20260514, 20260515, 20260518, 20260519, 20260520, 20260521, 20260522, 20260525, 20260526, 20260527, 20260528, 20260529, 20260601, 20260602, 20260603, 20260604, 20260605, 20260608, 20260609, 20260610, 20260611, 20260612, 20260615, 20260616, 20260617, 20260618, 20260622, 20260623, 20260624, 20260625, 20260626, 20260629, 20260630, 20260701, 20260702, 20260703, 20260706, 20260707, 20260708, 20260709

| 原生指标 | 值 | 单位 | 分母 | 汇总 | 状态 |
| --- | --- | --- | --- | --- | --- |
| completed_trades | 6145 | count | accepted completed trades | count | known |
| completed_subset_net_bps_sum | -1169.9480161593335 | bps | sum of per-trade entry-notional returns; unresolved inventory excluded | sum_trade_bps | known |
| completed_subset_mean_net_bps | -0.1903902385938704 | bps | accepted completed trades | mean | known |
| fullperiod_net_unit_cash | -513.0084834000447 | unit cash | unit quantity1, multiplier1; only defined if final inventory flat | sum_cash | known |
| pooled_prediction_IC | 0.1875829059907955 | correlation | common finite model/2s-label rows | pooled_rows | known |
| pooled_prediction_RankIC | 0.2081814920739837 | correlation | common finite model/2s-label rows | pooled_reranked_rows | known |

限制：45 dates/179 sessions, 20260507-20260709; historical development38/newdates7; independent confirmation missing; complete decisions retained; completed subset distinct from unresolved final inventory；Structured execution details remain in the private source bound by contract_hash.

- PnL_path：missing_facts；no equity or account-value source is projected
- cancel_attribution：missing_facts；cancel attribution facts unavailable
- fill_markout：missing_facts；registered fill markout/entry-edge fact is unavailable
- maker_fill：missing_facts；maker order/fill facts unavailable
- signal_bins：missing_facts；no registered source training-bin column

## AU C1_COMBO_FULL_O aligned taker 2s

评价：exp_20260930_d1a_taker_fullperiod_entry_economics_v1/AU_C1_COMBO_FULL_O_D1A_actual_fill_2s/run-c1f3438f320d41bf9c568c709e0bbaac；来源运行：run-c1f3438f320d41bf9c568c709e0bbaac。

实际日期：20260507, 20260508, 20260511, 20260512, 20260513, 20260514, 20260515, 20260518, 20260519, 20260520, 20260521, 20260522, 20260525, 20260526, 20260527, 20260528, 20260529, 20260601, 20260602, 20260603, 20260604, 20260605, 20260608, 20260609, 20260610, 20260611, 20260612, 20260615, 20260616, 20260617, 20260618, 20260622, 20260623, 20260624, 20260625, 20260626, 20260629, 20260630, 20260701, 20260702, 20260703, 20260706, 20260707, 20260708, 20260709

| 原生指标 | 值 | 单位 | 分母 | 汇总 | 状态 |
| --- | --- | --- | --- | --- | --- |
| completed_trades | 9 | count | accepted completed trades | count | known |
| completed_subset_net_bps_sum | -822.3201707225426 | bps | sum of per-trade entry-notional returns; unresolved inventory excluded | sum_trade_bps | known |
| completed_subset_mean_net_bps | -91.36890785806028 | bps | accepted completed trades | mean | known |
| fullperiod_net_unit_cash | -380.4903628000015 | unit cash | unit quantity1, multiplier1; only defined if final inventory flat | sum_cash | known |
| pooled_prediction_IC | 0.02617057337043451 | correlation | common finite model/2s-label rows | pooled_rows | known |
| pooled_prediction_RankIC | 0.021258494475218877 | correlation | common finite model/2s-label rows | pooled_reranked_rows | known |

限制：45 dates/179 sessions, 20260507-20260709; historical development38/newdates7; independent confirmation missing; complete decisions retained; completed subset distinct from unresolved final inventory；Structured execution details remain in the private source bound by contract_hash.

- PnL_path：missing_facts；no equity or account-value source is projected
- cancel_attribution：missing_facts；cancel attribution facts unavailable
- fill_markout：missing_facts；registered fill markout/entry-edge fact is unavailable
- maker_fill：missing_facts；maker order/fill facts unavailable
- signal_bins：missing_facts；no registered source training-bin column

## AU F2_current aligned taker 2s

评价：exp_20260930_d1a_taker_fullperiod_entry_economics_v1/AU_F2_current_D1A_actual_fill_2s/run-c1f3438f320d41bf9c568c709e0bbaac；来源运行：run-c1f3438f320d41bf9c568c709e0bbaac。

实际日期：20260507, 20260508, 20260511, 20260512, 20260513, 20260514, 20260515, 20260518, 20260519, 20260520, 20260521, 20260522, 20260525, 20260526, 20260527, 20260528, 20260529, 20260601, 20260602, 20260603, 20260604, 20260605, 20260608, 20260609, 20260610, 20260611, 20260612, 20260615, 20260616, 20260617, 20260618, 20260622, 20260623, 20260624, 20260625, 20260626, 20260629, 20260630, 20260701, 20260702, 20260703, 20260706, 20260707, 20260708, 20260709

| 原生指标 | 值 | 单位 | 分母 | 汇总 | 状态 |
| --- | --- | --- | --- | --- | --- |
| completed_trades | 6187 | count | accepted completed trades | count | known |
| completed_subset_net_bps_sum | -1071.400095152392 | bps | sum of per-trade entry-notional returns; unresolved inventory excluded | sum_trade_bps | known |
| completed_subset_mean_net_bps | -0.17316956443387618 | bps | accepted completed trades | mean | known |
| fullperiod_net_unit_cash | -470.4406120000268 | unit cash | unit quantity1, multiplier1; only defined if final inventory flat | sum_cash | known |
| pooled_prediction_IC | 0.19127927714545362 | correlation | common finite model/2s-label rows | pooled_rows | known |
| pooled_prediction_RankIC | 0.21133264159933565 | correlation | common finite model/2s-label rows | pooled_reranked_rows | known |

限制：45 dates/179 sessions, 20260507-20260709; historical development38/newdates7; independent confirmation missing; complete decisions retained; completed subset distinct from unresolved final inventory；Structured execution details remain in the private source bound by contract_hash.

- PnL_path：missing_facts；no equity or account-value source is projected
- cancel_attribution：missing_facts；cancel attribution facts unavailable
- fill_markout：missing_facts；registered fill markout/entry-edge fact is unavailable
- maker_fill：missing_facts；maker order/fill facts unavailable
- signal_bins：missing_facts；no registered source training-bin column
