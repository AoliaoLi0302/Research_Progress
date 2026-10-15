# 期货短周期研究当前结果

发布版本：`a5e90652d5ad4accbb87cd08c7ea190e4378237a48bbd64cd0c30b94a300f1a4`；指标快照时间：2026-10-15T10:26:32.614242+00:00。

[交互门户](https://aoliaoli0302.github.io/Research_Progress/portal/) · [研究来源索引](RESEARCH_INDEX.md)

由同一 H1 result_catalog 白名单投影生成；本页与门户绑定同一发布版本。覆盖已登记路线，未登记实验不自动接入。主参考、最新运行、技术验收与人工复核分别管理。

动态策略、固定 2s 探针和 Maker 共同 H MTM 不可混用；Maker MTM 不等于完整策略 Net。窗口样本不等于完整日；小时 IC 平均不等于 pooled IC，小时 RankIC 不合成为区间 RankIC。

| 结果 | 角色 | 日期范围（实际日期数） | 技术状态 | 人工复核 |
| --- | --- | --- | --- | --- |
| AU 可见五档组合：已归档，未替换F2基线 | archive | 20260507–20260709（45） | passed | approved |
| AU 去2bps消融：已归档，未替换F2基线 | archive | 20260507–20260709（45） | passed | approved |
| AU 当前研究基线：F2（已确认工作对照） | control | 20260507–20260709（45） | passed | approved |
| AU阶段2：五档合同三日验收通过，模型增量尚未验证 | candidate | 20260507–20260709（3） | passed | pending |
| AU阶段3：支持域恢复，五档小幅预测增量待动态验证 | candidate | 20260507–20260709（45） | passed | pending |
| AU阶段4：连续动态执行与经济性 | candidate | 20260507–20260709（45） | passed | pending |
| AU阶段5：证据结项，独立确认待新样本 | archive | 20260428–20260709（49） | passed | pending |
| AU阶段1支持域审计：尺度与历史压缩C1，额外掩码损失为零 | reference_with_gaps | 20260507–20260709（45） | gaps | pending |
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
| AG B1 sample validity / frozen-path economics audit v2 | reference_with_gaps | 20260507–20260709（45） | gaps | pending |
| AG C1_COMBO_FULL_O aligned taker 2s | reference_with_gaps | 20260507–20260709（45） | gaps | pending |
| AG C1_COMBO_FULL_O sample validity / frozen-path economics audit v2 | reference_with_gaps | 20260507–20260709（45） | gaps | pending |
| AG F2_current aligned taker 2s | reference_with_gaps | 20260507–20260709（45） | gaps | pending |
| AG F2_current sample validity / frozen-path economics audit v2 | reference_with_gaps | 20260507–20260709（45） | gaps | pending |
| AU B1 aligned taker 2s | candidate | 20260507–20260709（45） | passed | pending |
| AU B1 sample validity / frozen-path economics audit v2 | reference_with_gaps | 20260507–20260709（45） | passed | pending |
| AU C1_COMBO_FULL_O aligned taker 2s | candidate | 20260507–20260709（45） | passed | pending |
| AU C1_COMBO_FULL_O sample validity / frozen-path economics audit v2 | reference_with_gaps | 20260507–20260709（45） | gaps | pending |
| AU F2_current aligned taker 2s | candidate | 20260507–20260709（45） | passed | pending |
| AU F2_current sample validity / frozen-path economics audit v2 | reference_with_gaps | 20260507–20260709（45） | passed | pending |
| D1B full38_existing_reference | reference_with_gaps | 20260507–20260630（38） | blocked | pending |
| D1B maker_remaining_fills_and_HOLD | candidate | 20260507–20260603（2） | passed | pending |
| D1B target_to_execution | candidate | 20260507–20260603（2） | passed | pending |
| Maker来源对账与时钟缺口诊断 | reference_with_gaps | 20260507–20260630（38） | gaps | pending |
| AG F2 current BUY upper10 H5s dynamic path | reference_with_gaps | 20260507–20260709（45） | gaps | pending |
| AG/XAG BUY A80 dynamic path | reference_with_gaps | 20260507–20260709（45） | gaps | pending |
| AG/XAG BUY A85 dynamic path | reference_with_gaps | 20260507–20260709（45） | gaps | pending |
| AG/XAG BUY L dynamic path | reference_with_gaps | 20260507–20260709（45） | gaps | pending |
| AG F2 BUY Q99 fixed H5s dynamic path | reference_with_gaps | 20260507–20260709（45） | gaps | pending |
| Taker P1入场归因：扩量未增现金，独立H5归因仍缺对照 | reference_with_gaps | 20260507–20260709（45） | gaps | pending |

## AU 可见五档组合：已归档，未替换F2基线

评价：au_G5_20261015_C1_AU_visible_L5；来源运行：run-59e38f0740e647da92791a6577008a02。

实际日期：20260507, 20260508, 20260511, 20260512, 20260513, 20260514, 20260515, 20260518, 20260519, 20260520, 20260521, 20260522, 20260525, 20260526, 20260527, 20260528, 20260529, 20260601, 20260602, 20260603, 20260604, 20260605, 20260608, 20260609, 20260610, 20260611, 20260612, 20260615, 20260616, 20260617, 20260618, 20260622, 20260623, 20260624, 20260625, 20260626, 20260629, 20260630, 20260701, 20260702, 20260703, 20260706, 20260707, 20260708, 20260709

| 原生指标 | 值 | 单位 | 分母 | 汇总 | 状态 |
| --- | --- | --- | --- | --- | --- |
| completed_trades | 6273 | trades | 6273 completed trades; full45 dates and terminal flat | inherited_frozen_S4_count | known |
| mean_net_bps | -0.18539451872093096 | bps | 6273 completed trades; full45 dates and terminal flat | inherited_frozen_S4_mean | known |
| net_bps_sum | -1162.9798159364 | bps | 6273 completed trades; full45 dates and terminal flat | inherited_frozen_S4_sum | known |
| gross_mid_bps_sum | 6542.073340265267 | bps | 6273 completed trades; full45 dates and terminal flat | inherited_frozen_S4_sum | known |
| crossing_bps_sum | 177.4017697768739 | bps | 6273 completed trades; full45 dates and terminal flat | inherited_frozen_S4_sum | known |
| fee_bps_sum | 7527.651386424794 | bps | 6273 completed trades; full45 dates and terminal flat | inherited_frozen_S4_sum | known |
| win_rate | 0.3983739837398374 | ratio | 6273 completed trades; full45 dates and terminal flat | inherited_frozen_S4_ratio | known |
| terminal_unknown_inventory | 0 | positions | full45-date continuous path terminal | count | known |
| confirmed_independent_dates | 0 | dates | 49 registered same-source input dates inspected in S5 | count | known |

限制：AU当前研究基线为F2，仅作研究工作对照，非生产或盈利策略。；F2均笔Net -0.1732bps；五档组合-0.1854bps；消融-0.1946bps，全部为负。；独立确认尚未完成；本次登记同源范围没有已确认独立日期，其他数据情况未知。；五档与消融归档，不替换F2。74列F2＋仅五档模型及AU BUY/H5筛选未测试。；本视图只公开已验收聚合摘要；不生成新小时IC或动态收益序列。；原阶段报告保留当时待复核的历史快照；本视图为用户确认后的状态。；20260507–20260709共45日，全部已查看；49个同源输入日期均已训练或评价。G5结项及F2工作对照选择已获用户确认，本视图不代表新回测。；G5已接受结项。未授权新研究、主参考晋级或真实交易。；evaluation has no readable pinned parquet facts

- PnL_path：missing_facts；no equity or account-value source is projected
- cancel_attribution：missing_facts；cancel attribution facts unavailable
- cost_breakdown：missing_facts；native crossing/fee facts unavailable
- daily_metrics：missing_facts；no timestamped daily facts
- fill_markout：missing_facts；registered fill markout/entry-edge fact is unavailable
- hourly_IC：missing_facts；no finite prediction/label pairs in pinned assets
- hourly_RankIC：missing_facts；no finite non-constant prediction/label pairs in pinned assets
- maker_fill：missing_facts；maker order/fill facts unavailable
- signal_bins：missing_facts；no registered source training-bin column

## AU 去2bps消融：已归档，未替换F2基线

评价：au_G5_20261015_C1_without_2bps_ablation；来源运行：run-59e38f0740e647da92791a6577008a02。

实际日期：20260507, 20260508, 20260511, 20260512, 20260513, 20260514, 20260515, 20260518, 20260519, 20260520, 20260521, 20260522, 20260525, 20260526, 20260527, 20260528, 20260529, 20260601, 20260602, 20260603, 20260604, 20260605, 20260608, 20260609, 20260610, 20260611, 20260612, 20260615, 20260616, 20260617, 20260618, 20260622, 20260623, 20260624, 20260625, 20260626, 20260629, 20260630, 20260701, 20260702, 20260703, 20260706, 20260707, 20260708, 20260709

| 原生指标 | 值 | 单位 | 分母 | 汇总 | 状态 |
| --- | --- | --- | --- | --- | --- |
| completed_trades | 6251 | trades | 6251 completed trades; full45 dates and terminal flat | inherited_frozen_S4_count | known |
| mean_net_bps | -0.19456015340370056 | bps | 6251 completed trades; full45 dates and terminal flat | inherited_frozen_S4_mean | known |
| net_bps_sum | -1216.1955189265323 | bps | 6251 completed trades; full45 dates and terminal flat | inherited_frozen_S4_sum | known |
| gross_mid_bps_sum | 6460.104465696456 | bps | 6251 completed trades; full45 dates and terminal flat | inherited_frozen_S4_sum | known |
| crossing_bps_sum | 175.04745553948823 | bps | 6251 completed trades; full45 dates and terminal flat | inherited_frozen_S4_sum | known |
| fee_bps_sum | 7501.2525290835 | bps | 6251 completed trades; full45 dates and terminal flat | inherited_frozen_S4_sum | known |
| win_rate | 0.3940169572868341 | ratio | 6251 completed trades; full45 dates and terminal flat | inherited_frozen_S4_ratio | known |
| terminal_unknown_inventory | 0 | positions | full45-date continuous path terminal | count | known |
| confirmed_independent_dates | 0 | dates | 49 registered same-source input dates inspected in S5 | count | known |

限制：AU当前研究基线为F2，仅作研究工作对照，非生产或盈利策略。；F2均笔Net -0.1732bps；五档组合-0.1854bps；消融-0.1946bps，全部为负。；独立确认尚未完成；本次登记同源范围没有已确认独立日期，其他数据情况未知。；五档与消融归档，不替换F2。74列F2＋仅五档模型及AU BUY/H5筛选未测试。；本视图只公开已验收聚合摘要；不生成新小时IC或动态收益序列。；原阶段报告保留当时待复核的历史快照；本视图为用户确认后的状态。；20260507–20260709共45日，全部已查看；49个同源输入日期均已训练或评价。G5结项及F2工作对照选择已获用户确认，本视图不代表新回测。；G5已接受结项。未授权新研究、主参考晋级或真实交易。；evaluation has no readable pinned parquet facts

- PnL_path：missing_facts；no equity or account-value source is projected
- cancel_attribution：missing_facts；cancel attribution facts unavailable
- cost_breakdown：missing_facts；native crossing/fee facts unavailable
- daily_metrics：missing_facts；no timestamped daily facts
- fill_markout：missing_facts；registered fill markout/entry-edge fact is unavailable
- hourly_IC：missing_facts；no finite prediction/label pairs in pinned assets
- hourly_RankIC：missing_facts；no finite non-constant prediction/label pairs in pinned assets
- maker_fill：missing_facts；maker order/fill facts unavailable
- signal_bins：missing_facts；no registered source training-bin column

## AU 当前研究基线：F2（已确认工作对照）

评价：au_G5_20261015_F2_current；来源运行：run-59e38f0740e647da92791a6577008a02。

实际日期：20260507, 20260508, 20260511, 20260512, 20260513, 20260514, 20260515, 20260518, 20260519, 20260520, 20260521, 20260522, 20260525, 20260526, 20260527, 20260528, 20260529, 20260601, 20260602, 20260603, 20260604, 20260605, 20260608, 20260609, 20260610, 20260611, 20260612, 20260615, 20260616, 20260617, 20260618, 20260622, 20260623, 20260624, 20260625, 20260626, 20260629, 20260630, 20260701, 20260702, 20260703, 20260706, 20260707, 20260708, 20260709

| 原生指标 | 值 | 单位 | 分母 | 汇总 | 状态 |
| --- | --- | --- | --- | --- | --- |
| completed_trades | 6187 | trades | 6187 completed trades; full45 dates and terminal flat | inherited_frozen_S4_count | known |
| mean_net_bps | -0.17316956443387618 | bps | 6187 completed trades; full45 dates and terminal flat | inherited_frozen_S4_mean | known |
| net_bps_sum | -1071.400095152392 | bps | 6187 completed trades; full45 dates and terminal flat | inherited_frozen_S4_sum | known |
| gross_mid_bps_sum | 6529.856683429207 | bps | 6187 completed trades; full45 dates and terminal flat | inherited_frozen_S4_sum | known |
| crossing_bps_sum | 176.8441225182528 | bps | 6187 completed trades; full45 dates and terminal flat | inherited_frozen_S4_sum | known |
| fee_bps_sum | 7424.412656063347 | bps | 6187 completed trades; full45 dates and terminal flat | inherited_frozen_S4_sum | known |
| win_rate | 0.387263617262001 | ratio | 6187 completed trades; full45 dates and terminal flat | inherited_frozen_S4_ratio | known |
| terminal_unknown_inventory | 0 | positions | full45-date continuous path terminal | count | known |
| confirmed_independent_dates | 0 | dates | 49 registered same-source input dates inspected in S5 | count | known |

限制：AU当前研究基线为F2，仅作研究工作对照，非生产或盈利策略。；F2均笔Net -0.1732bps；五档组合-0.1854bps；消融-0.1946bps，全部为负。；独立确认尚未完成；本次登记同源范围没有已确认独立日期，其他数据情况未知。；五档与消融归档，不替换F2。74列F2＋仅五档模型及AU BUY/H5筛选未测试。；本视图只公开已验收聚合摘要；不生成新小时IC或动态收益序列。；原阶段报告保留当时待复核的历史快照；本视图为用户确认后的状态。；20260507–20260709共45日，全部已查看；49个同源输入日期均已训练或评价。G5结项及F2工作对照选择已获用户确认，本视图不代表新回测。；G5已接受结项。未授权新研究、主参考晋级或真实交易。；evaluation has no readable pinned parquet facts

- PnL_path：missing_facts；no equity or account-value source is projected
- cancel_attribution：missing_facts；cancel attribution facts unavailable
- cost_breakdown：missing_facts；native crossing/fee facts unavailable
- daily_metrics：missing_facts；no timestamped daily facts
- fill_markout：missing_facts；registered fill markout/entry-edge fact is unavailable
- hourly_IC：missing_facts；no finite prediction/label pairs in pinned assets
- hourly_RankIC：missing_facts；no finite non-constant prediction/label pairs in pinned assets
- maker_fill：missing_facts；maker order/fill facts unavailable
- signal_bins：missing_facts；no registered source training-bin column

## AU阶段2：五档合同三日验收通过，模型增量尚未验证

评价：au_support_domain_S2_5392c5c72b1c；来源运行：run-c712afe5ecff4c4dbf69a7380f5c5d89。

实际日期：20260507, 20260603, 20260709

| 原生指标 | 值 | 单位 | 分母 | 汇总 | 状态 |
| --- | --- | --- | --- | --- | --- |
| 20260507_native_rows | 60260 | rows | AU native decisions on specified date; both new candidate masks identical | count | known |
| 20260507_input_eligible | 27920 | rows | AU native decisions on specified date; both new candidate masks identical | count | known |
| 20260507_old_C1_input_eligible | 0 | rows | AU native decisions on specified date; both new candidate masks identical | count | known |
| 20260507_target_observable_posthoc | 27912 | rows | AU native decisions on specified date; both new candidate masks identical | count | known |
| 20260603_native_rows | 59877 | rows | AU native decisions on specified date; both new candidate masks identical | count | known |
| 20260603_input_eligible | 24309 | rows | AU native decisions on specified date; both new candidate masks identical | count | known |
| 20260603_old_C1_input_eligible | 0 | rows | AU native decisions on specified date; both new candidate masks identical | count | known |
| 20260603_target_observable_posthoc | 24305 | rows | AU native decisions on specified date; both new candidate masks identical | count | known |
| 20260709_native_rows | 63974 | rows | AU native decisions on specified date; both new candidate masks identical | count | known |
| 20260709_input_eligible | 39194 | rows | AU native decisions on specified date; both new candidate masks identical | count | known |
| 20260709_old_C1_input_eligible | 13 | rows | AU native decisions on specified date; both new candidate masks identical | count | known |
| 20260709_target_observable_posthoc | 39182 | rows | AU native decisions on specified date; both new candidate masks identical | count | known |
| new_fits | 0 | operations | S2 registered canary | count | known |
| new_replays | 0 | operations | S2 registered canary | count | known |
| new_raw_decodes | 0 | operations | S2 registered canary | count | known |
| candidate_training_gate_full45 | unknown | not_evaluated | No new candidate fits or strategy replay in S2 | unavailable | unavailable |
| candidate_q995_support | unknown | not_evaluated | No new candidate fits or strategy replay in S2 | unavailable | unavailable |
| prediction_IC_increment | unknown | not_evaluated | No new candidate fits or strategy replay in S2 | unavailable | unavailable |
| dynamic_net_increment | unknown | not_evaluated | No new candidate fits or strategy replay in S2 | unavailable | unavailable |

限制：Three dates only; full49 source bytes/feature quality and full45 train/q995 gates pending；No new fit/prediction/replay; IC/net null, not zero；Historical tick chain and receive clock limitations remain; no independent dates；G1 approved S2 only; G2 and external report publication pending；20260507/20260603/20260709三日特征canary。两个候选各输入有效91423行，四模型掩码逐行一致。不是新模型预测或动态策略结果；49源日期仅为下一阶段元数据盘点。；Reuse completed identities. S3 must have explicit G2 authorization and new pinned implementation/config; retry export alone if publication fails.；evaluation has no readable pinned parquet facts；Structured inputs details remain in the private source bound by contract_hash.

- PnL_path：missing_facts；no equity or account-value source is projected
- cancel_attribution：missing_facts；cancel attribution facts unavailable
- cost_breakdown：missing_facts；native crossing/fee facts unavailable
- daily_metrics：missing_facts；no timestamped daily facts
- fill_markout：missing_facts；registered fill markout/entry-edge fact is unavailable
- hourly_IC：missing_facts；no finite prediction/label pairs in pinned assets
- hourly_RankIC：missing_facts；no finite non-constant prediction/label pairs in pinned assets
- maker_fill：missing_facts；maker order/fill facts unavailable
- signal_bins：missing_facts；no registered source training-bin column

## AU阶段3：支持域恢复，五档小幅预测增量待动态验证

评价：au_support_domain_S3_56dc4e008be5；来源运行：run-22e6c5efc4ee472ebce19d63e12b9fb5。

实际日期：20260507, 20260508, 20260511, 20260512, 20260513, 20260514, 20260515, 20260518, 20260519, 20260520, 20260521, 20260522, 20260525, 20260526, 20260527, 20260528, 20260529, 20260601, 20260602, 20260603, 20260604, 20260605, 20260608, 20260609, 20260610, 20260611, 20260612, 20260615, 20260616, 20260617, 20260618, 20260622, 20260623, 20260624, 20260625, 20260626, 20260629, 20260630, 20260701, 20260702, 20260703, 20260706, 20260707, 20260708, 20260709

| 原生指标 | 值 | 单位 | 分母 | 汇总 | 状态 |
| --- | --- | --- | --- | --- | --- |
| development38_B1_rows | 1301846 | rows | development38: own finite prediction and posthoc label pool; q995 counts retain missing labels separately | count | known |
| development38_B1_finite_predictions | 1302172 | rows | development38: own finite prediction and posthoc label pool; q995 counts retain missing labels separately | count | known |
| development38_B1_daily_mean_pearson | 0.24557053609622423 | correlation | development38: own finite prediction and posthoc label pool; q995 counts retain missing labels separately | equal_weight_daily | known |
| development38_B1_daily_mean_rank_ic | 0.29538275658460555 | correlation | development38: own finite prediction and posthoc label pool; q995 counts retain missing labels separately | equal_weight_daily | known |
| development38_B1_q995_signal_rows | 7672 | rows | development38: own finite prediction and posthoc label pool; q995 counts retain missing labels separately | count | known |
| development38_B1_q995_observed_rows | 7665 | rows | development38: own finite prediction and posthoc label pool; q995 counts retain missing labels separately | count | known |
| development38_B1_q995_missing_label_rows | 7 | rows | development38: own finite prediction and posthoc label pool; q995 counts retain missing labels separately | count | known |
| development38_B1_daily_mean_directional_markout_bps | 0.7468189128070477 | bps | development38: own finite prediction and posthoc label pool; q995 counts retain missing labels separately | equal_weight_daily | known |
| development38_F2_current_rows | 1301846 | rows | development38: own finite prediction and posthoc label pool; q995 counts retain missing labels separately | count | known |
| development38_F2_current_finite_predictions | 1302172 | rows | development38: own finite prediction and posthoc label pool; q995 counts retain missing labels separately | count | known |
| development38_F2_current_daily_mean_pearson | 0.24672562178694593 | correlation | development38: own finite prediction and posthoc label pool; q995 counts retain missing labels separately | equal_weight_daily | known |
| development38_F2_current_daily_mean_rank_ic | 0.29645986709717553 | correlation | development38: own finite prediction and posthoc label pool; q995 counts retain missing labels separately | equal_weight_daily | known |
| development38_F2_current_q995_signal_rows | 7701 | rows | development38: own finite prediction and posthoc label pool; q995 counts retain missing labels separately | count | known |
| development38_F2_current_q995_observed_rows | 7694 | rows | development38: own finite prediction and posthoc label pool; q995 counts retain missing labels separately | count | known |
| development38_F2_current_q995_missing_label_rows | 7 | rows | development38: own finite prediction and posthoc label pool; q995 counts retain missing labels separately | count | known |
| development38_F2_current_daily_mean_directional_markout_bps | 0.7430447694607392 | bps | development38: own finite prediction and posthoc label pool; q995 counts retain missing labels separately | equal_weight_daily | known |
| development38_C1_without_2bps_ablation_rows | 1301846 | rows | development38: own finite prediction and posthoc label pool; q995 counts retain missing labels separately | count | known |
| development38_C1_without_2bps_ablation_finite_predictions | 1302172 | rows | development38: own finite prediction and posthoc label pool; q995 counts retain missing labels separately | count | known |
| development38_C1_without_2bps_ablation_daily_mean_pearson | 0.248626146738892 | correlation | development38: own finite prediction and posthoc label pool; q995 counts retain missing labels separately | equal_weight_daily | known |
| development38_C1_without_2bps_ablation_daily_mean_rank_ic | 0.2988284940382824 | correlation | development38: own finite prediction and posthoc label pool; q995 counts retain missing labels separately | equal_weight_daily | known |
| development38_C1_without_2bps_ablation_q995_signal_rows | 7921 | rows | development38: own finite prediction and posthoc label pool; q995 counts retain missing labels separately | count | known |
| development38_C1_without_2bps_ablation_q995_observed_rows | 7915 | rows | development38: own finite prediction and posthoc label pool; q995 counts retain missing labels separately | count | known |
| development38_C1_without_2bps_ablation_q995_missing_label_rows | 6 | rows | development38: own finite prediction and posthoc label pool; q995 counts retain missing labels separately | count | known |
| development38_C1_without_2bps_ablation_daily_mean_directional_markout_bps | 0.7536680466004926 | bps | development38: own finite prediction and posthoc label pool; q995 counts retain missing labels separately | equal_weight_daily | known |
| development38_C1_AU_visible_L5_rows | 1301846 | rows | development38: own finite prediction and posthoc label pool; q995 counts retain missing labels separately | count | known |
| development38_C1_AU_visible_L5_finite_predictions | 1302172 | rows | development38: own finite prediction and posthoc label pool; q995 counts retain missing labels separately | count | known |
| development38_C1_AU_visible_L5_daily_mean_pearson | 0.24965217744699295 | correlation | development38: own finite prediction and posthoc label pool; q995 counts retain missing labels separately | equal_weight_daily | known |
| development38_C1_AU_visible_L5_daily_mean_rank_ic | 0.29944769337719923 | correlation | development38: own finite prediction and posthoc label pool; q995 counts retain missing labels separately | equal_weight_daily | known |
| development38_C1_AU_visible_L5_q995_signal_rows | 7895 | rows | development38: own finite prediction and posthoc label pool; q995 counts retain missing labels separately | count | known |
| development38_C1_AU_visible_L5_q995_observed_rows | 7888 | rows | development38: own finite prediction and posthoc label pool; q995 counts retain missing labels separately | count | known |
| development38_C1_AU_visible_L5_q995_missing_label_rows | 7 | rows | development38: own finite prediction and posthoc label pool; q995 counts retain missing labels separately | count | known |
| development38_C1_AU_visible_L5_daily_mean_directional_markout_bps | 0.7636672475533867 | bps | development38: own finite prediction and posthoc label pool; q995 counts retain missing labels separately | equal_weight_daily | known |
| development38_B1__vs__F2_current_daily_mean_delta_pearson | -0.001155085690721662 | correlation_delta_left_minus_right | development38: finite predictions for both and observable posthoc label | equal_weight_daily | known |
| development38_B1__vs__F2_current_daily_mean_delta_rank_ic | -0.0010771105125700182 | correlation_delta_left_minus_right | development38: finite predictions for both and observable posthoc label | equal_weight_daily | known |
| development38_B1__vs__C1_without_2bps_ablation_daily_mean_delta_pearson | -0.0030556106426677066 | correlation_delta_left_minus_right | development38: finite predictions for both and observable posthoc label | equal_weight_daily | known |
| development38_B1__vs__C1_without_2bps_ablation_daily_mean_delta_rank_ic | -0.003445737453676753 | correlation_delta_left_minus_right | development38: finite predictions for both and observable posthoc label | equal_weight_daily | known |
| development38_B1__vs__C1_AU_visible_L5_daily_mean_delta_pearson | -0.0040816413507686776 | correlation_delta_left_minus_right | development38: finite predictions for both and observable posthoc label | equal_weight_daily | known |
| development38_B1__vs__C1_AU_visible_L5_daily_mean_delta_rank_ic | -0.004064936792593719 | correlation_delta_left_minus_right | development38: finite predictions for both and observable posthoc label | equal_weight_daily | known |
| development38_F2_current__vs__C1_without_2bps_ablation_daily_mean_delta_pearson | -0.0019005249519460446 | correlation_delta_left_minus_right | development38: finite predictions for both and observable posthoc label | equal_weight_daily | known |
| development38_F2_current__vs__C1_without_2bps_ablation_daily_mean_delta_rank_ic | -0.002368626941106735 | correlation_delta_left_minus_right | development38: finite predictions for both and observable posthoc label | equal_weight_daily | known |
| development38_F2_current__vs__C1_AU_visible_L5_daily_mean_delta_pearson | -0.0029265556600470157 | correlation_delta_left_minus_right | development38: finite predictions for both and observable posthoc label | equal_weight_daily | known |
| development38_F2_current__vs__C1_AU_visible_L5_daily_mean_delta_rank_ic | -0.0029878262800237007 | correlation_delta_left_minus_right | development38: finite predictions for both and observable posthoc label | equal_weight_daily | known |
| development38_C1_without_2bps_ablation__vs__C1_AU_visible_L5_daily_mean_delta_pearson | -0.0010260307081009713 | correlation_delta_left_minus_right | development38: finite predictions for both and observable posthoc label | equal_weight_daily | known |
| development38_C1_without_2bps_ablation__vs__C1_AU_visible_L5_daily_mean_delta_rank_ic | -0.0006191993389169655 | correlation_delta_left_minus_right | development38: finite predictions for both and observable posthoc label | equal_weight_daily | known |
| July7_exploratory_B1_rows | 225782 | rows | July7_exploratory: own finite prediction and posthoc label pool; q995 counts retain missing labels separately | count | known |
| July7_exploratory_B1_finite_predictions | 225864 | rows | July7_exploratory: own finite prediction and posthoc label pool; q995 counts retain missing labels separately | count | known |
| July7_exploratory_B1_daily_mean_pearson | 0.2701085357890557 | correlation | July7_exploratory: own finite prediction and posthoc label pool; q995 counts retain missing labels separately | equal_weight_daily | known |
| July7_exploratory_B1_daily_mean_rank_ic | 0.3172836936221568 | correlation | July7_exploratory: own finite prediction and posthoc label pool; q995 counts retain missing labels separately | equal_weight_daily | known |
| July7_exploratory_B1_q995_signal_rows | 694 | rows | July7_exploratory: own finite prediction and posthoc label pool; q995 counts retain missing labels separately | count | known |
| July7_exploratory_B1_q995_observed_rows | 692 | rows | July7_exploratory: own finite prediction and posthoc label pool; q995 counts retain missing labels separately | count | known |
| July7_exploratory_B1_q995_missing_label_rows | 2 | rows | July7_exploratory: own finite prediction and posthoc label pool; q995 counts retain missing labels separately | count | known |
| July7_exploratory_B1_daily_mean_directional_markout_bps | 0.8901779872737768 | bps | July7_exploratory: own finite prediction and posthoc label pool; q995 counts retain missing labels separately | equal_weight_daily | known |
| July7_exploratory_F2_current_rows | 225782 | rows | July7_exploratory: own finite prediction and posthoc label pool; q995 counts retain missing labels separately | count | known |
| July7_exploratory_F2_current_finite_predictions | 225864 | rows | July7_exploratory: own finite prediction and posthoc label pool; q995 counts retain missing labels separately | count | known |
| July7_exploratory_F2_current_daily_mean_pearson | 0.2721274473053909 | correlation | July7_exploratory: own finite prediction and posthoc label pool; q995 counts retain missing labels separately | equal_weight_daily | known |
| July7_exploratory_F2_current_daily_mean_rank_ic | 0.31967930829964414 | correlation | July7_exploratory: own finite prediction and posthoc label pool; q995 counts retain missing labels separately | equal_weight_daily | known |
| July7_exploratory_F2_current_q995_signal_rows | 728 | rows | July7_exploratory: own finite prediction and posthoc label pool; q995 counts retain missing labels separately | count | known |
| July7_exploratory_F2_current_q995_observed_rows | 726 | rows | July7_exploratory: own finite prediction and posthoc label pool; q995 counts retain missing labels separately | count | known |
| July7_exploratory_F2_current_q995_missing_label_rows | 2 | rows | July7_exploratory: own finite prediction and posthoc label pool; q995 counts retain missing labels separately | count | known |
| July7_exploratory_F2_current_daily_mean_directional_markout_bps | 0.9108732486350647 | bps | July7_exploratory: own finite prediction and posthoc label pool; q995 counts retain missing labels separately | equal_weight_daily | known |
| July7_exploratory_C1_without_2bps_ablation_rows | 225782 | rows | July7_exploratory: own finite prediction and posthoc label pool; q995 counts retain missing labels separately | count | known |
| July7_exploratory_C1_without_2bps_ablation_finite_predictions | 225864 | rows | July7_exploratory: own finite prediction and posthoc label pool; q995 counts retain missing labels separately | count | known |
| July7_exploratory_C1_without_2bps_ablation_daily_mean_pearson | 0.2740971454119993 | correlation | July7_exploratory: own finite prediction and posthoc label pool; q995 counts retain missing labels separately | equal_weight_daily | known |
| July7_exploratory_C1_without_2bps_ablation_daily_mean_rank_ic | 0.3220588421639578 | correlation | July7_exploratory: own finite prediction and posthoc label pool; q995 counts retain missing labels separately | equal_weight_daily | known |
| July7_exploratory_C1_without_2bps_ablation_q995_signal_rows | 742 | rows | July7_exploratory: own finite prediction and posthoc label pool; q995 counts retain missing labels separately | count | known |
| July7_exploratory_C1_without_2bps_ablation_q995_observed_rows | 741 | rows | July7_exploratory: own finite prediction and posthoc label pool; q995 counts retain missing labels separately | count | known |
| July7_exploratory_C1_without_2bps_ablation_q995_missing_label_rows | 1 | rows | July7_exploratory: own finite prediction and posthoc label pool; q995 counts retain missing labels separately | count | known |
| July7_exploratory_C1_without_2bps_ablation_daily_mean_directional_markout_bps | 0.9255790411752746 | bps | July7_exploratory: own finite prediction and posthoc label pool; q995 counts retain missing labels separately | equal_weight_daily | known |
| July7_exploratory_C1_AU_visible_L5_rows | 225782 | rows | July7_exploratory: own finite prediction and posthoc label pool; q995 counts retain missing labels separately | count | known |
| July7_exploratory_C1_AU_visible_L5_finite_predictions | 225864 | rows | July7_exploratory: own finite prediction and posthoc label pool; q995 counts retain missing labels separately | count | known |
| July7_exploratory_C1_AU_visible_L5_daily_mean_pearson | 0.27535496544291604 | correlation | July7_exploratory: own finite prediction and posthoc label pool; q995 counts retain missing labels separately | equal_weight_daily | known |
| July7_exploratory_C1_AU_visible_L5_daily_mean_rank_ic | 0.3230008913087668 | correlation | July7_exploratory: own finite prediction and posthoc label pool; q995 counts retain missing labels separately | equal_weight_daily | known |
| July7_exploratory_C1_AU_visible_L5_q995_signal_rows | 752 | rows | July7_exploratory: own finite prediction and posthoc label pool; q995 counts retain missing labels separately | count | known |
| July7_exploratory_C1_AU_visible_L5_q995_observed_rows | 751 | rows | July7_exploratory: own finite prediction and posthoc label pool; q995 counts retain missing labels separately | count | known |
| July7_exploratory_C1_AU_visible_L5_q995_missing_label_rows | 1 | rows | July7_exploratory: own finite prediction and posthoc label pool; q995 counts retain missing labels separately | count | known |
| July7_exploratory_C1_AU_visible_L5_daily_mean_directional_markout_bps | 0.919198366710071 | bps | July7_exploratory: own finite prediction and posthoc label pool; q995 counts retain missing labels separately | equal_weight_daily | known |
| July7_exploratory_B1__vs__F2_current_daily_mean_delta_pearson | -0.0020189115163351734 | correlation_delta_left_minus_right | July7_exploratory: finite predictions for both and observable posthoc label | equal_weight_daily | known |
| July7_exploratory_B1__vs__F2_current_daily_mean_delta_rank_ic | -0.002395614677487271 | correlation_delta_left_minus_right | July7_exploratory: finite predictions for both and observable posthoc label | equal_weight_daily | known |
| July7_exploratory_B1__vs__C1_without_2bps_ablation_daily_mean_delta_pearson | -0.003988609622943585 | correlation_delta_left_minus_right | July7_exploratory: finite predictions for both and observable posthoc label | equal_weight_daily | known |
| July7_exploratory_B1__vs__C1_without_2bps_ablation_daily_mean_delta_rank_ic | -0.004775148541800984 | correlation_delta_left_minus_right | July7_exploratory: finite predictions for both and observable posthoc label | equal_weight_daily | known |
| July7_exploratory_B1__vs__C1_AU_visible_L5_daily_mean_delta_pearson | -0.005246429653860312 | correlation_delta_left_minus_right | July7_exploratory: finite predictions for both and observable posthoc label | equal_weight_daily | known |
| July7_exploratory_B1__vs__C1_AU_visible_L5_daily_mean_delta_rank_ic | -0.005717197686609983 | correlation_delta_left_minus_right | July7_exploratory: finite predictions for both and observable posthoc label | equal_weight_daily | known |
| July7_exploratory_F2_current__vs__C1_without_2bps_ablation_daily_mean_delta_pearson | -0.0019696981066084124 | correlation_delta_left_minus_right | July7_exploratory: finite predictions for both and observable posthoc label | equal_weight_daily | known |
| July7_exploratory_F2_current__vs__C1_without_2bps_ablation_daily_mean_delta_rank_ic | -0.002379533864313713 | correlation_delta_left_minus_right | July7_exploratory: finite predictions for both and observable posthoc label | equal_weight_daily | known |
| July7_exploratory_F2_current__vs__C1_AU_visible_L5_daily_mean_delta_pearson | -0.003227518137525139 | correlation_delta_left_minus_right | July7_exploratory: finite predictions for both and observable posthoc label | equal_weight_daily | known |
| July7_exploratory_F2_current__vs__C1_AU_visible_L5_daily_mean_delta_rank_ic | -0.0033215830091227116 | correlation_delta_left_minus_right | July7_exploratory: finite predictions for both and observable posthoc label | equal_weight_daily | known |
| July7_exploratory_C1_without_2bps_ablation__vs__C1_AU_visible_L5_daily_mean_delta_pearson | -0.0012578200309167262 | correlation_delta_left_minus_right | July7_exploratory: finite predictions for both and observable posthoc label | equal_weight_daily | known |
| July7_exploratory_C1_without_2bps_ablation__vs__C1_AU_visible_L5_daily_mean_delta_rank_ic | -0.0009420491448089985 | correlation_delta_left_minus_right | July7_exploratory: finite predictions for both and observable posthoc label | equal_weight_daily | known |
| combined45_B1_rows | 1527628 | rows | combined45: own finite prediction and posthoc label pool; q995 counts retain missing labels separately | count | known |
| combined45_B1_finite_predictions | 1528036 | rows | combined45: own finite prediction and posthoc label pool; q995 counts retain missing labels separately | count | known |
| combined45_B1_daily_mean_pearson | 0.24938755827066472 | correlation | combined45: own finite prediction and posthoc label pool; q995 counts retain missing labels separately | equal_weight_daily | known |
| combined45_B1_daily_mean_rank_ic | 0.2987895690126691 | correlation | combined45: own finite prediction and posthoc label pool; q995 counts retain missing labels separately | equal_weight_daily | known |
| combined45_B1_q995_signal_rows | 8366 | rows | combined45: own finite prediction and posthoc label pool; q995 counts retain missing labels separately | count | known |
| combined45_B1_q995_observed_rows | 8357 | rows | combined45: own finite prediction and posthoc label pool; q995 counts retain missing labels separately | count | known |
| combined45_B1_q995_missing_label_rows | 9 | rows | combined45: own finite prediction and posthoc label pool; q995 counts retain missing labels separately | count | known |
| combined45_B1_daily_mean_directional_markout_bps | 0.7691192132796502 | bps | combined45: own finite prediction and posthoc label pool; q995 counts retain missing labels separately | equal_weight_daily | known |
| combined45_F2_current_rows | 1527628 | rows | combined45: own finite prediction and posthoc label pool; q995 counts retain missing labels separately | count | known |
| combined45_F2_current_finite_predictions | 1528036 | rows | combined45: own finite prediction and posthoc label pool; q995 counts retain missing labels separately | count | known |
| combined45_F2_current_daily_mean_pearson | 0.2506770168675929 | correlation | combined45: own finite prediction and posthoc label pool; q995 counts retain missing labels separately | equal_weight_daily | known |
| combined45_F2_current_daily_mean_rank_ic | 0.30007178017311514 | correlation | combined45: own finite prediction and posthoc label pool; q995 counts retain missing labels separately | equal_weight_daily | known |
| combined45_F2_current_q995_signal_rows | 8429 | rows | combined45: own finite prediction and posthoc label pool; q995 counts retain missing labels separately | count | known |
| combined45_F2_current_q995_observed_rows | 8420 | rows | combined45: own finite prediction and posthoc label pool; q995 counts retain missing labels separately | count | known |
| combined45_F2_current_q995_missing_label_rows | 9 | rows | combined45: own finite prediction and posthoc label pool; q995 counts retain missing labels separately | count | known |
| combined45_F2_current_daily_mean_directional_markout_bps | 0.7691514217767453 | bps | combined45: own finite prediction and posthoc label pool; q995 counts retain missing labels separately | equal_weight_daily | known |
| combined45_C1_without_2bps_ablation_rows | 1527628 | rows | combined45: own finite prediction and posthoc label pool; q995 counts retain missing labels separately | count | known |
| combined45_C1_without_2bps_ablation_finite_predictions | 1528036 | rows | combined45: own finite prediction and posthoc label pool; q995 counts retain missing labels separately | count | known |
| combined45_C1_without_2bps_ablation_daily_mean_pearson | 0.25258830208804195 | correlation | combined45: own finite prediction and posthoc label pool; q995 counts retain missing labels separately | equal_weight_daily | known |
| combined45_C1_without_2bps_ablation_daily_mean_rank_ic | 0.3024421037467207 | correlation | combined45: own finite prediction and posthoc label pool; q995 counts retain missing labels separately | equal_weight_daily | known |
| combined45_C1_without_2bps_ablation_q995_signal_rows | 8663 | rows | combined45: own finite prediction and posthoc label pool; q995 counts retain missing labels separately | count | known |
| combined45_C1_without_2bps_ablation_q995_observed_rows | 8656 | rows | combined45: own finite prediction and posthoc label pool; q995 counts retain missing labels separately | count | known |
| combined45_C1_without_2bps_ablation_q995_missing_label_rows | 7 | rows | combined45: own finite prediction and posthoc label pool; q995 counts retain missing labels separately | count | known |
| combined45_C1_without_2bps_ablation_daily_mean_directional_markout_bps | 0.7804097568676808 | bps | combined45: own finite prediction and posthoc label pool; q995 counts retain missing labels separately | equal_weight_daily | known |
| combined45_C1_AU_visible_L5_rows | 1527628 | rows | combined45: own finite prediction and posthoc label pool; q995 counts retain missing labels separately | count | known |
| combined45_C1_AU_visible_L5_finite_predictions | 1528036 | rows | combined45: own finite prediction and posthoc label pool; q995 counts retain missing labels separately | count | known |
| combined45_C1_AU_visible_L5_daily_mean_pearson | 0.25365038891302544 | correlation | combined45: own finite prediction and posthoc label pool; q995 counts retain missing labels separately | equal_weight_daily | known |
| combined45_C1_AU_visible_L5_daily_mean_rank_ic | 0.3031115241665542 | correlation | combined45: own finite prediction and posthoc label pool; q995 counts retain missing labels separately | equal_weight_daily | known |
| combined45_C1_AU_visible_L5_q995_signal_rows | 8647 | rows | combined45: own finite prediction and posthoc label pool; q995 counts retain missing labels separately | count | known |
| combined45_C1_AU_visible_L5_q995_observed_rows | 8639 | rows | combined45: own finite prediction and posthoc label pool; q995 counts retain missing labels separately | count | known |
| combined45_C1_AU_visible_L5_q995_missing_label_rows | 8 | rows | combined45: own finite prediction and posthoc label pool; q995 counts retain missing labels separately | count | known |
| combined45_C1_AU_visible_L5_daily_mean_directional_markout_bps | 0.7878609771999822 | bps | combined45: own finite prediction and posthoc label pool; q995 counts retain missing labels separately | equal_weight_daily | known |
| combined45_B1__vs__F2_current_daily_mean_delta_pearson | -0.0012894585969282083 | correlation_delta_left_minus_right | combined45: finite predictions for both and observable posthoc label | equal_weight_daily | known |
| combined45_B1__vs__F2_current_daily_mean_delta_rank_ic | -0.0012822111604460353 | correlation_delta_left_minus_right | combined45: finite predictions for both and observable posthoc label | equal_weight_daily | known |
| combined45_B1__vs__C1_without_2bps_ablation_daily_mean_delta_pearson | -0.0032007438173772876 | correlation_delta_left_minus_right | combined45: finite predictions for both and observable posthoc label | equal_weight_daily | known |
| combined45_B1__vs__C1_without_2bps_ablation_daily_mean_delta_rank_ic | -0.0036525347340516335 | correlation_delta_left_minus_right | combined45: finite predictions for both and observable posthoc label | equal_weight_daily | known |
| combined45_B1__vs__C1_AU_visible_L5_daily_mean_delta_pearson | -0.00426283064236071 | correlation_delta_left_minus_right | combined45: finite predictions for both and observable posthoc label | equal_weight_daily | known |
| combined45_B1__vs__C1_AU_visible_L5_daily_mean_delta_rank_ic | -0.004321955153885138 | correlation_delta_left_minus_right | combined45: finite predictions for both and observable posthoc label | equal_weight_daily | known |
| combined45_F2_current__vs__C1_without_2bps_ablation_daily_mean_delta_pearson | -0.0019112852204490795 | correlation_delta_left_minus_right | combined45: finite predictions for both and observable posthoc label | equal_weight_daily | known |
| combined45_F2_current__vs__C1_without_2bps_ablation_daily_mean_delta_rank_ic | -0.0023703235736055985 | correlation_delta_left_minus_right | combined45: finite predictions for both and observable posthoc label | equal_weight_daily | known |
| combined45_F2_current__vs__C1_AU_visible_L5_daily_mean_delta_pearson | -0.0029733720454325017 | correlation_delta_left_minus_right | combined45: finite predictions for both and observable posthoc label | equal_weight_daily | known |
| combined45_F2_current__vs__C1_AU_visible_L5_daily_mean_delta_rank_ic | -0.0030397439934391024 | correlation_delta_left_minus_right | combined45: finite predictions for both and observable posthoc label | equal_weight_daily | known |
| combined45_C1_without_2bps_ablation__vs__C1_AU_visible_L5_daily_mean_delta_pearson | -0.0010620868249834221 | correlation_delta_left_minus_right | combined45: finite predictions for both and observable posthoc label | equal_weight_daily | known |
| combined45_C1_without_2bps_ablation__vs__C1_AU_visible_L5_daily_mean_delta_rank_ic | -0.000669420419833504 | correlation_delta_left_minus_right | combined45: finite predictions for both and observable posthoc label | equal_weight_daily | known |
| new_dynamic_net_bps | unknown | bps | No S3 strategy replay | unavailable | unavailable |

限制：Small predictive effect; q995 fixed2s response is not dynamic trades or PnL；All dates previously used; no independent confirmation；Receive clock and historical tick identity limitations remain；Original computation process exit receipt unknown; successful separately registered read-only acceptance does not rewrite it；S4/external publication not authorized；45个已用OOS日期（38开发+7七月探索），49训练/输入日期；四模型各1528036有限预测、1527628同池可评价。无新策略或独立确认。原计算退出回执缺失，当前run为只读恢复验收及报告成功。；Reuse all completed models/features/predictions. G3 explicit approval required for new dynamic work; export failures never trigger research recomputation.；evaluation has no readable pinned parquet facts；Structured inputs details remain in the private source bound by contract_hash.

- PnL_path：missing_facts；no equity or account-value source is projected
- cancel_attribution：missing_facts；cancel attribution facts unavailable
- cost_breakdown：missing_facts；native crossing/fee facts unavailable
- daily_metrics：missing_facts；no timestamped daily facts
- fill_markout：missing_facts；registered fill markout/entry-edge fact is unavailable
- hourly_IC：missing_facts；no finite prediction/label pairs in pinned assets
- hourly_RankIC：missing_facts；no finite non-constant prediction/label pairs in pinned assets
- maker_fill：missing_facts；maker order/fill facts unavailable
- signal_bins：missing_facts；no registered source training-bin column

## AU阶段4：连续动态执行与经济性

评价：au_support_domain_S4_d5a73cd6aaf3；来源运行：run-92651ae5c6a6431b8037491457c25ac6。

实际日期：20260507, 20260508, 20260511, 20260512, 20260513, 20260514, 20260515, 20260518, 20260519, 20260520, 20260521, 20260522, 20260525, 20260526, 20260527, 20260528, 20260529, 20260601, 20260602, 20260603, 20260604, 20260605, 20260608, 20260609, 20260610, 20260611, 20260612, 20260615, 20260616, 20260617, 20260618, 20260622, 20260623, 20260624, 20260625, 20260626, 20260629, 20260630, 20260701, 20260702, 20260703, 20260706, 20260707, 20260708, 20260709

| 原生指标 | 值 | 单位 | 分母 | 汇总 | 状态 |
| --- | --- | --- | --- | --- | --- |
| B1_completed_trades | 6145 | trades | 6145 completed trades on full45 continuous path; flat terminal | descriptive | known |
| B1_mean_net_bps | -0.1903902385938704 | bps | 6145 completed trades on full45 continuous path; flat terminal | mean | known |
| B1_win_rate | 0.38991049633848657 | ratio | 6145 completed trades on full45 continuous path; flat terminal | descriptive | known |
| B1_gross_mid_bps_sum | 6380.44286857292 | bps | 6145 completed trades on full45 continuous path; flat terminal | sum | known |
| B1_crossing_bps_sum | 176.3713135084322 | bps | 6145 completed trades on full45 continuous path; flat terminal | sum | known |
| B1_fee_bps_sum | 7374.01957122382 | bps | 6145 completed trades on full45 continuous path; flat terminal | sum | known |
| B1_net_bps_sum | -1169.9480161593335 | bps | 6145 completed trades on full45 continuous path; flat terminal | sum | known |
| B1_net_cash_sum | -513.0084834000447 | price_currency_units | 6145 completed trades on full45 continuous path; flat terminal | sum | known |
| B1_max_drawdown_bps | -1335.0209066936445 | bps | 6145 completed trades on full45 continuous path; flat terminal | descriptive | known |
| B1_holding_seconds_mean | 108.59352318958503 | seconds | 6145 completed trades on full45 continuous path; flat terminal | descriptive | known |
| B1_holding_seconds_max | 196248.486 | seconds | 6145 completed trades on full45 continuous path; flat terminal | descriptive | known |
| B1_net_bps_min | -239.23903056982184 | bps | 6145 completed trades on full45 continuous path; flat terminal | descriptive | known |
| B1_net_bps_max | 118.8456502862891 | bps | 6145 completed trades on full45 continuous path; flat terminal | descriptive | known |
| B1_fullperiod_unit_cash_net | -513.0084834001746 | price_currency_units | 1 unit quantity, multiplier1, all45 dates and terminal flat | net_cash_sum | known |
| F2_current_completed_trades | 6187 | trades | 6187 completed trades on full45 continuous path; flat terminal | descriptive | known |
| F2_current_mean_net_bps | -0.17316956443387618 | bps | 6187 completed trades on full45 continuous path; flat terminal | mean | known |
| F2_current_win_rate | 0.387263617262001 | ratio | 6187 completed trades on full45 continuous path; flat terminal | descriptive | known |
| F2_current_gross_mid_bps_sum | 6529.856683429207 | bps | 6187 completed trades on full45 continuous path; flat terminal | sum | known |
| F2_current_crossing_bps_sum | 176.8441225182528 | bps | 6187 completed trades on full45 continuous path; flat terminal | sum | known |
| F2_current_fee_bps_sum | 7424.412656063347 | bps | 6187 completed trades on full45 continuous path; flat terminal | sum | known |
| F2_current_net_bps_sum | -1071.400095152392 | bps | 6187 completed trades on full45 continuous path; flat terminal | sum | known |
| F2_current_net_cash_sum | -470.4406120000268 | price_currency_units | 6187 completed trades on full45 continuous path; flat terminal | sum | known |
| F2_current_max_drawdown_bps | -1343.2920178415436 | bps | 6187 completed trades on full45 continuous path; flat terminal | descriptive | known |
| F2_current_holding_seconds_mean | 106.63892532729916 | seconds | 6187 completed trades on full45 continuous path; flat terminal | descriptive | known |
| F2_current_holding_seconds_max | 196226.518 | seconds | 6187 completed trades on full45 continuous path; flat terminal | descriptive | known |
| F2_current_net_bps_min | -239.23903056982184 | bps | 6187 completed trades on full45 continuous path; flat terminal | descriptive | known |
| F2_current_net_bps_max | 118.8456502862891 | bps | 6187 completed trades on full45 continuous path; flat terminal | descriptive | known |
| F2_current_fullperiod_unit_cash_net | -470.4406120001654 | price_currency_units | 1 unit quantity, multiplier1, all45 dates and terminal flat | net_cash_sum | known |
| C1_without_2bps_ablation_completed_trades | 6251 | trades | 6251 completed trades on full45 continuous path; flat terminal | descriptive | known |
| C1_without_2bps_ablation_mean_net_bps | -0.19456015340370056 | bps | 6251 completed trades on full45 continuous path; flat terminal | mean | known |
| C1_without_2bps_ablation_win_rate | 0.3940169572868341 | ratio | 6251 completed trades on full45 continuous path; flat terminal | descriptive | known |
| C1_without_2bps_ablation_gross_mid_bps_sum | 6460.104465696456 | bps | 6251 completed trades on full45 continuous path; flat terminal | sum | known |
| C1_without_2bps_ablation_crossing_bps_sum | 175.04745553948823 | bps | 6251 completed trades on full45 continuous path; flat terminal | sum | known |
| C1_without_2bps_ablation_fee_bps_sum | 7501.2525290835 | bps | 6251 completed trades on full45 continuous path; flat terminal | sum | known |
| C1_without_2bps_ablation_net_bps_sum | -1216.1955189265323 | bps | 6251 completed trades on full45 continuous path; flat terminal | sum | known |
| C1_without_2bps_ablation_net_cash_sum | -531.1041848000455 | price_currency_units | 6251 completed trades on full45 continuous path; flat terminal | sum | known |
| C1_without_2bps_ablation_max_drawdown_bps | -1508.6335128538308 | bps | 6251 completed trades on full45 continuous path; flat terminal | descriptive | known |
| C1_without_2bps_ablation_holding_seconds_mean | 101.72991633338667 | seconds | 6251 completed trades on full45 continuous path; flat terminal | descriptive | known |
| C1_without_2bps_ablation_holding_seconds_max | 196226.518 | seconds | 6251 completed trades on full45 continuous path; flat terminal | descriptive | known |
| C1_without_2bps_ablation_net_bps_min | -239.23903056982184 | bps | 6251 completed trades on full45 continuous path; flat terminal | descriptive | known |
| C1_without_2bps_ablation_net_bps_max | 118.8456502862891 | bps | 6251 completed trades on full45 continuous path; flat terminal | descriptive | known |
| C1_without_2bps_ablation_fullperiod_unit_cash_net | -531.1041848001305 | price_currency_units | 1 unit quantity, multiplier1, all45 dates and terminal flat | net_cash_sum | known |
| C1_AU_visible_L5_completed_trades | 6273 | trades | 6273 completed trades on full45 continuous path; flat terminal | descriptive | known |
| C1_AU_visible_L5_mean_net_bps | -0.18539451872093096 | bps | 6273 completed trades on full45 continuous path; flat terminal | mean | known |
| C1_AU_visible_L5_win_rate | 0.3983739837398374 | ratio | 6273 completed trades on full45 continuous path; flat terminal | descriptive | known |
| C1_AU_visible_L5_gross_mid_bps_sum | 6542.073340265267 | bps | 6273 completed trades on full45 continuous path; flat terminal | sum | known |
| C1_AU_visible_L5_crossing_bps_sum | 177.4017697768739 | bps | 6273 completed trades on full45 continuous path; flat terminal | sum | known |
| C1_AU_visible_L5_fee_bps_sum | 7527.651386424794 | bps | 6273 completed trades on full45 continuous path; flat terminal | sum | known |
| C1_AU_visible_L5_net_bps_sum | -1162.9798159364 | bps | 6273 completed trades on full45 continuous path; flat terminal | sum | known |
| C1_AU_visible_L5_net_cash_sum | -506.7009748000134 | price_currency_units | 6273 completed trades on full45 continuous path; flat terminal | sum | known |
| C1_AU_visible_L5_max_drawdown_bps | -1384.5827463035841 | bps | 6273 completed trades on full45 continuous path; flat terminal | descriptive | known |
| C1_AU_visible_L5_holding_seconds_mean | 98.16330352303522 | seconds | 6273 completed trades on full45 continuous path; flat terminal | descriptive | known |
| C1_AU_visible_L5_holding_seconds_max | 196226.518 | seconds | 6273 completed trades on full45 continuous path; flat terminal | descriptive | known |
| C1_AU_visible_L5_net_bps_min | -239.23903056982184 | bps | 6273 completed trades on full45 continuous path; flat terminal | descriptive | known |
| C1_AU_visible_L5_net_bps_max | 105.06903052966655 | bps | 6273 completed trades on full45 continuous path; flat terminal | descriptive | known |
| C1_AU_visible_L5_fullperiod_unit_cash_net | -506.70097480003597 | price_currency_units | 1 unit quantity, multiplier1, all45 dates and terminal flat | net_cash_sum | known |

限制：No independent dates; all45 previously used；Unit-quantity cash and sum trade bps are not compounded account equity；Physical receive latency and complete historical tick identity unknown；Original0915 bridge not certified; inherited AU evidence assessed within this contract；Research review and main-reference selection pending; no automatic S5/external publication；原45个已使用日期；两个新候选90分区连续路径和6个checkpoint恢复验证；B1/F2账本身份复用。完整决策、实际成交费用、期末库存与完成子集分开，无独立确认。；Reuse completed ledger/checkpoint identities. Only G4 user authorization permits next stage; output publication failures never trigger replay.；evaluation has no readable pinned parquet facts；Structured inputs details remain in the private source bound by contract_hash.；Structured execution details remain in the private source bound by contract_hash.

- PnL_path：missing_facts；no equity or account-value source is projected
- cancel_attribution：missing_facts；cancel attribution facts unavailable
- cost_breakdown：missing_facts；native crossing/fee facts unavailable
- daily_metrics：missing_facts；no timestamped daily facts
- fill_markout：missing_facts；registered fill markout/entry-edge fact is unavailable
- hourly_IC：missing_facts；no finite prediction/label pairs in pinned assets
- hourly_RankIC：missing_facts；no finite non-constant prediction/label pairs in pinned assets
- maker_fill：missing_facts；maker order/fill facts unavailable
- signal_bins：missing_facts；no registered source training-bin column

## AU阶段5：证据结项，独立确认待新样本

评价：au_support_domain_S5_fe8736593bdb；来源运行：run-4466e10d81bd4f5a92b5105386df460d。

实际日期：20260428, 20260429, 20260430, 20260506, 20260507, 20260508, 20260511, 20260512, 20260513, 20260514, 20260515, 20260518, 20260519, 20260520, 20260521, 20260522, 20260525, 20260526, 20260527, 20260528, 20260529, 20260601, 20260602, 20260603, 20260604, 20260605, 20260608, 20260609, 20260610, 20260611, 20260612, 20260615, 20260616, 20260617, 20260618, 20260622, 20260623, 20260624, 20260625, 20260626, 20260629, 20260630, 20260701, 20260702, 20260703, 20260706, 20260707, 20260708, 20260709

| 原生指标 | 值 | 单位 | 分母 | 汇总 | 状态 |
| --- | --- | --- | --- | --- | --- |
| registered_same_source_dates | 49 | dates | registered AU model-input dates | count | known |
| used_evaluation_dates | 45 | dates | all viewed AU evaluation dates | count | known |
| training_only_dates | 4 | dates | input dates outside evaluation | count | known |
| confirmed_independent_dates | 0 | dates | within inspected registered same-source metadata | count | known |
| B1_completed_trades | 6145 | trades | 6145 completed trades; full45 dates and terminal flat | inherited_S4_count | known |
| B1_mean_net_bps | -0.1903902385938704 | bps | 6145 completed trades; full45 dates and terminal flat | inherited_S4_mean | known |
| F2_current_completed_trades | 6187 | trades | 6187 completed trades; full45 dates and terminal flat | inherited_S4_count | known |
| F2_current_mean_net_bps | -0.17316956443387618 | bps | 6187 completed trades; full45 dates and terminal flat | inherited_S4_mean | known |
| C1_without_2bps_ablation_completed_trades | 6251 | trades | 6251 completed trades; full45 dates and terminal flat | inherited_S4_count | known |
| C1_without_2bps_ablation_mean_net_bps | -0.19456015340370056 | bps | 6251 completed trades; full45 dates and terminal flat | inherited_S4_mean | known |
| C1_AU_visible_L5_completed_trades | 6273 | trades | 6273 completed trades; full45 dates and terminal flat | inherited_S4_count | known |
| C1_AU_visible_L5_mean_net_bps | -0.18539451872093096 | bps | 6273 completed trades; full45 dates and terminal flat | inherited_S4_mean | known |

限制：No independent confirmation; readiness blocked；F2 is a negative-return research control, not a promoted strategy；No new predictive/dynamic computation；G4 choice accepted; G5 final review pending；Other date availability and use unknown; no raw scan；49个已登记同源日期：45日已评价，其余4日已训练；未发现合格独立日期，不代表全盘不存在数据。S4指标原样继承，本次仅元数据与报告。；Read preserved evidence; new data or model/filter/confirmation execution needs a separately approved exact plan.；evaluation has no readable pinned parquet facts；Structured inputs details remain in the private source bound by contract_hash.

- PnL_path：missing_facts；no equity or account-value source is projected
- cancel_attribution：missing_facts；cancel attribution facts unavailable
- cost_breakdown：missing_facts；native crossing/fee facts unavailable
- daily_metrics：missing_facts；no timestamped daily facts
- fill_markout：missing_facts；registered fill markout/entry-edge fact is unavailable
- hourly_IC：missing_facts；no finite prediction/label pairs in pinned assets
- hourly_RankIC：missing_facts；no finite non-constant prediction/label pairs in pinned assets
- maker_fill：missing_facts；maker order/fill facts unavailable
- signal_bins：missing_facts；no registered source training-bin column

## AU阶段1支持域审计：尺度与历史压缩C1，额外掩码损失为零

评价：au_support_domain_s1_8c668ebc2586；来源运行：run-1b90848ce0544fd387ab8f18c2b245ff。

实际日期：20260507, 20260508, 20260511, 20260512, 20260513, 20260514, 20260515, 20260518, 20260519, 20260520, 20260521, 20260522, 20260525, 20260526, 20260527, 20260528, 20260529, 20260601, 20260602, 20260603, 20260604, 20260605, 20260608, 20260609, 20260610, 20260611, 20260612, 20260615, 20260616, 20260617, 20260618, 20260622, 20260623, 20260624, 20260625, 20260626, 20260629, 20260630, 20260701, 20260702, 20260703, 20260706, 20260707, 20260708, 20260709

| 原生指标 | 值 | 单位 | 分母 | 汇总 | 状态 |
| --- | --- | --- | --- | --- | --- |
| OOS_B1_rows | 2742760 | rows | 45 AU folds; overlaps across training folds are repeated occurrences | sum | known |
| OOS_B1_old_valid | 1528036 | rows | 45 AU folds; overlaps across training folds are repeated occurrences | sum | known |
| OOS_B1_own_valid | 1528036 | rows | 45 AU folds; overlaps across training folds are repeated occurrences | sum | known |
| OOS_B1_extra_mask_loss | 0 | rows | 45 AU folds; overlaps across training folds are repeated occurrences | sum | known |
| OOS_B1_target_valid_after_old | 1527628 | rows | 45 AU folds; overlaps across training folds are repeated occurrences | sum | known |
| OOS_C1_COMBO_FULL_O_rows | 2742760 | rows | 45 AU folds; overlaps across training folds are repeated occurrences | sum | known |
| OOS_C1_COMBO_FULL_O_old_valid | 1475 | rows | 45 AU folds; overlaps across training folds are repeated occurrences | sum | known |
| OOS_C1_COMBO_FULL_O_own_valid | 1475 | rows | 45 AU folds; overlaps across training folds are repeated occurrences | sum | known |
| OOS_C1_COMBO_FULL_O_extra_mask_loss | 0 | rows | 45 AU folds; overlaps across training folds are repeated occurrences | sum | known |
| OOS_C1_COMBO_FULL_O_target_valid_after_old | 1412 | rows | 45 AU folds; overlaps across training folds are repeated occurrences | sum | known |
| OOS_F2_current_rows | 2742760 | rows | 45 AU folds; overlaps across training folds are repeated occurrences | sum | known |
| OOS_F2_current_old_valid | 1528036 | rows | 45 AU folds; overlaps across training folds are repeated occurrences | sum | known |
| OOS_F2_current_own_valid | 1528036 | rows | 45 AU folds; overlaps across training folds are repeated occurrences | sum | known |
| OOS_F2_current_extra_mask_loss | 0 | rows | 45 AU folds; overlaps across training folds are repeated occurrences | sum | known |
| OOS_F2_current_target_valid_after_old | 1527628 | rows | 45 AU folds; overlaps across training folds are repeated occurrences | sum | known |
| sampled_outer_train_B1_rows | 5400000 | row_occurrences | 45 AU folds; overlaps across training folds are repeated occurrences | sum | known |
| sampled_outer_train_B1_old_valid | 2843121 | row_occurrences | 45 AU folds; overlaps across training folds are repeated occurrences | sum | known |
| sampled_outer_train_B1_own_valid | 2843121 | row_occurrences | 45 AU folds; overlaps across training folds are repeated occurrences | sum | known |
| sampled_outer_train_B1_extra_mask_loss | 0 | row_occurrences | 45 AU folds; overlaps across training folds are repeated occurrences | sum | known |
| sampled_outer_train_B1_target_valid_after_old | 2842327 | row_occurrences | 45 AU folds; overlaps across training folds are repeated occurrences | sum | known |
| sampled_outer_train_C1_COMBO_FULL_O_rows | 5400000 | row_occurrences | 45 AU folds; overlaps across training folds are repeated occurrences | sum | known |
| sampled_outer_train_C1_COMBO_FULL_O_old_valid | 2206 | row_occurrences | 45 AU folds; overlaps across training folds are repeated occurrences | sum | known |
| sampled_outer_train_C1_COMBO_FULL_O_own_valid | 2206 | row_occurrences | 45 AU folds; overlaps across training folds are repeated occurrences | sum | known |
| sampled_outer_train_C1_COMBO_FULL_O_extra_mask_loss | 0 | row_occurrences | 45 AU folds; overlaps across training folds are repeated occurrences | sum | known |
| sampled_outer_train_C1_COMBO_FULL_O_target_valid_after_old | 2072 | row_occurrences | 45 AU folds; overlaps across training folds are repeated occurrences | sum | known |
| sampled_outer_train_F2_current_rows | 5400000 | row_occurrences | 45 AU folds; overlaps across training folds are repeated occurrences | sum | known |
| sampled_outer_train_F2_current_old_valid | 2843121 | row_occurrences | 45 AU folds; overlaps across training folds are repeated occurrences | sum | known |
| sampled_outer_train_F2_current_own_valid | 2843121 | row_occurrences | 45 AU folds; overlaps across training folds are repeated occurrences | sum | known |
| sampled_outer_train_F2_current_extra_mask_loss | 0 | row_occurrences | 45 AU folds; overlaps across training folds are repeated occurrences | sum | known |
| sampled_outer_train_F2_current_target_valid_after_old | 2842327 | row_occurrences | 45 AU folds; overlaps across training folds are repeated occurrences | sum | known |
| SHFE/AG_20260507_tick_bps_median | 0.521498787515319 | bps | 64121 saved valid L1 quote rows | median | known |
| SHFE/AG_20260507_two_bps_ticks_approx_median | 3.8351 | ticks | 64121 saved valid L1 quote rows | median | known |
| SHFE/AG_20260507_price_median | 19175.5 | CNY/kg | 64121 saved valid L1 quote rows | median | known |
| SHFE/AG_20260507_2bps_observable | 1.0 | ratio | 64121 saved valid L1 rows; Binance deeper book unavailable | count_ratio | known |
| Binance/XAGUSDT_20260507_tick_bps_median | 1.2909055702575356 | bps | 644371 saved valid L1 quote rows | median | known |
| Binance/XAGUSDT_20260507_two_bps_ticks_approx_median | 1.5493000000000001 | ticks | 644371 saved valid L1 quote rows | median | known |
| Binance/XAGUSDT_20260507_price_median | 77.465 | USDT/troy_ounce | 644371 saved valid L1 quote rows | median | known |
| Binance/XAGUSDT_20260507_2bps_observable | unknown | ratio | 644371 saved valid L1 rows; Binance deeper book unavailable | count_ratio | unavailable |
| SHFE/AU_20260507_tick_bps_median | 0.19330395113276116 | bps | 60264 saved valid L1 quote rows | median | known |
| SHFE/AU_20260507_two_bps_ticks_approx_median | 10.3464 | ticks | 60264 saved valid L1 quote rows | median | known |
| SHFE/AU_20260507_price_median | 1034.6399999999999 | CNY/g | 60264 saved valid L1 quote rows | median | known |
| SHFE/AU_20260507_2bps_observable | 0.014768352581972654 | ratio | 60264 saved valid L1 rows; Binance deeper book unavailable | count_ratio | known |
| Binance/XAUUSDT_20260507_tick_bps_median | 0.02126607582419335 | bps | 794849 saved valid L1 quote rows | median | known |
| Binance/XAUUSDT_20260507_two_bps_ticks_approx_median | 94.0465 | ticks | 794849 saved valid L1 quote rows | median | known |
| Binance/XAUUSDT_20260507_price_median | 4702.325 | USDT/troy_ounce | 794849 saved valid L1 quote rows | median | known |
| Binance/XAUUSDT_20260507_2bps_observable | unknown | ratio | 794849 saved valid L1 rows; Binance deeper book unavailable | count_ratio | unavailable |
| SHFE/AG_20260603_tick_bps_median | 0.5488323591558958 | bps | 65194 saved valid L1 quote rows | median | known |
| SHFE/AG_20260603_two_bps_ticks_approx_median | 3.6441000000000003 | ticks | 65194 saved valid L1 quote rows | median | known |
| SHFE/AG_20260603_price_median | 18220.5 | CNY/kg | 65194 saved valid L1 quote rows | median | known |
| SHFE/AG_20260603_2bps_observable | 1.0 | ratio | 65194 saved valid L1 rows; Binance deeper book unavailable | count_ratio | known |
| Binance/XAGUSDT_20260603_tick_bps_median | 1.3270519540840027 | bps | 687988 saved valid L1 quote rows | median | known |
| Binance/XAGUSDT_20260603_two_bps_ticks_approx_median | 1.5070999999999997 | ticks | 687988 saved valid L1 quote rows | median | known |
| Binance/XAGUSDT_20260603_price_median | 75.35499999999999 | USDT/troy_ounce | 687988 saved valid L1 quote rows | median | known |
| Binance/XAGUSDT_20260603_2bps_observable | unknown | ratio | 687988 saved valid L1 rows; Binance deeper book unavailable | count_ratio | unavailable |
| SHFE/AU_20260603_tick_bps_median | 0.20384866275277233 | bps | 59880 saved valid L1 quote rows | median | known |
| SHFE/AU_20260603_two_bps_ticks_approx_median | 9.811200000000001 | ticks | 59880 saved valid L1 quote rows | median | known |
| SHFE/AU_20260603_price_median | 981.12 | CNY/g | 59880 saved valid L1 quote rows | median | known |
| SHFE/AU_20260603_2bps_observable | 0.030410821643286574 | ratio | 59880 saved valid L1 rows; Binance deeper book unavailable | count_ratio | known |
| Binance/XAUUSDT_20260603_tick_bps_median | 0.022271690120612336 | bps | 977296 saved valid L1 quote rows | median | known |
| Binance/XAUUSDT_20260603_two_bps_ticks_approx_median | 89.8001 | ticks | 977296 saved valid L1 quote rows | median | known |
| Binance/XAUUSDT_20260603_price_median | 4490.005 | USDT/troy_ounce | 977296 saved valid L1 quote rows | median | known |
| Binance/XAUUSDT_20260603_2bps_observable | unknown | ratio | 977296 saved valid L1 rows; Binance deeper book unavailable | count_ratio | unavailable |
| SHFE/AG_20260709_tick_bps_median | 0.703309069170447 | bps | 66162 saved valid L1 quote rows | median | known |
| SHFE/AG_20260709_two_bps_ticks_approx_median | 2.8436999999999997 | ticks | 66162 saved valid L1 quote rows | median | known |
| SHFE/AG_20260709_price_median | 14218.5 | CNY/kg | 66162 saved valid L1 quote rows | median | known |
| SHFE/AG_20260709_2bps_observable | 1.0 | ratio | 66162 saved valid L1 rows; Binance deeper book unavailable | count_ratio | known |
| Binance/XAGUSDT_20260709_tick_bps_median | 1.7183606839075523 | bps | 936613 saved valid L1 quote rows | median | known |
| Binance/XAGUSDT_20260709_two_bps_ticks_approx_median | 1.1639 | ticks | 936613 saved valid L1 quote rows | median | known |
| Binance/XAGUSDT_20260709_price_median | 58.195 | USDT/troy_ounce | 936613 saved valid L1 quote rows | median | known |
| Binance/XAGUSDT_20260709_2bps_observable | unknown | ratio | 936613 saved valid L1 rows; Binance deeper book unavailable | count_ratio | unavailable |
| SHFE/AU_20260709_tick_bps_median | 0.224278104850014 | bps | 63978 saved valid L1 quote rows | median | known |
| SHFE/AU_20260709_two_bps_ticks_approx_median | 8.9175 | ticks | 63978 saved valid L1 quote rows | median | known |
| SHFE/AU_20260709_price_median | 891.75 | CNY/g | 63978 saved valid L1 quote rows | median | known |
| SHFE/AU_20260709_2bps_observable | 0.09381349839007158 | ratio | 63978 saved valid L1 rows; Binance deeper book unavailable | count_ratio | known |
| Binance/XAUUSDT_20260709_tick_bps_median | 0.024563295313446074 | bps | 886776 saved valid L1 quote rows | median | known |
| Binance/XAUUSDT_20260709_two_bps_ticks_approx_median | 81.42229999999999 | ticks | 886776 saved valid L1 quote rows | median | known |
| Binance/XAUUSDT_20260709_price_median | 4071.115 | USDT/troy_ounce | 886776 saved valid L1 quote rows | median | known |
| Binance/XAUUSDT_20260709_2bps_observable | unknown | ratio | 886776 saved valid L1 rows; Binance deeper book unavailable | count_ratio | unavailable |
| AG_B1_legal_train_min | 68279.0 | rows | 45 sampled outer-train folds | fold_min | known |
| AG_B1_legal_train_median | 105551.0 | rows | 45 sampled outer-train folds | fold_median | known |
| AG_B1_legal_train_max | 107566.0 | rows | 45 sampled outer-train folds | fold_max | known |
| AG_C1_COMBO_FULL_O_legal_train_min | 66943.0 | rows | 45 sampled outer-train folds | fold_min | known |
| AG_C1_COMBO_FULL_O_legal_train_median | 99417.0 | rows | 45 sampled outer-train folds | fold_median | known |
| AG_C1_COMBO_FULL_O_legal_train_max | 103729.0 | rows | 45 sampled outer-train folds | fold_max | known |
| AG_F2_current_legal_train_min | 68279.0 | rows | 45 sampled outer-train folds | fold_min | known |
| AG_F2_current_legal_train_median | 105551.0 | rows | 45 sampled outer-train folds | fold_median | known |
| AG_F2_current_legal_train_max | 107566.0 | rows | 45 sampled outer-train folds | fold_max | known |
| AU_B1_legal_train_min | 46479.0 | rows | 45 sampled outer-train folds | fold_min | known |
| AU_B1_legal_train_median | 61081.0 | rows | 45 sampled outer-train folds | fold_median | known |
| AU_B1_legal_train_max | 75749.0 | rows | 45 sampled outer-train folds | fold_max | known |
| AU_C1_COMBO_FULL_O_legal_train_min | 4.0 | rows | 45 sampled outer-train folds | fold_min | known |
| AU_C1_COMBO_FULL_O_legal_train_median | 21.0 | rows | 45 sampled outer-train folds | fold_median | known |
| AU_C1_COMBO_FULL_O_legal_train_max | 128.0 | rows | 45 sampled outer-train folds | fold_max | known |
| AU_F2_current_legal_train_min | 46479.0 | rows | 45 sampled outer-train folds | fold_min | known |
| AU_F2_current_legal_train_median | 61081.0 | rows | 45 sampled outer-train folds | fold_median | known |
| AU_F2_current_legal_train_max | 75749.0 | rows | 45 sampled outer-train folds | fold_max | known |
| new_fits | 0 | fits | S1 entire execution | count | known |
| new_strategy_replays | 0 | replays | S1 entire execution | count | known |

限制：S1 audit only; research review and S2 permission pending；Historical tick change chain incomplete; three quote dates agree with dated official rules；Exchange-time proxy cannot distinguish transport gaps; no reset relaxation；Column degeneration and q995 reconstructed for three representative AU folds, not all 45；Binance saved L1 cannot establish L5 coverage；Original 38 and July seven dates already used; no independent confirmation; AU0915 and execution gaps unchanged；45个AU OOS日期及采样训练逐fold掩码；270模型身份。五档与重置仅20260507/20260603/20260709双产品；q995复算仅这三个AU fold。不是新策略收益结果。；G1 pending. S2 worker not implemented; no queued work. Reuse succeeded audit evidence; retry only export on publication failure.；evaluation has no readable pinned parquet facts；Structured inputs details remain in the private source bound by contract_hash.

- PnL_path：missing_facts；no equity or account-value source is projected
- cancel_attribution：missing_facts；cancel attribution facts unavailable
- cost_breakdown：missing_facts；native crossing/fee facts unavailable
- daily_metrics：missing_facts；no timestamped daily facts
- fill_markout：missing_facts；registered fill markout/entry-edge fact is unavailable
- hourly_IC：missing_facts；no finite prediction/label pairs in pinned assets
- hourly_RankIC：missing_facts；no finite non-constant prediction/label pairs in pinned assets
- maker_fill：missing_facts；maker order/fill facts unavailable
- signal_bins：missing_facts；no registered source training-bin column

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

## AG B1 sample validity / frozen-path economics audit v2

评价：exp_20260930_d1a_taker_fullperiod_entry_economics_v1/AG_B1_validity_static_v2/run-c45df22c8a9b485fa98de96ccd6d599f；来源运行：run-c45df22c8a9b485fa98de96ccd6d599f。

实际日期：20260507, 20260508, 20260511, 20260512, 20260513, 20260514, 20260515, 20260518, 20260519, 20260520, 20260521, 20260522, 20260525, 20260526, 20260527, 20260528, 20260529, 20260601, 20260602, 20260603, 20260604, 20260605, 20260608, 20260609, 20260610, 20260611, 20260612, 20260615, 20260616, 20260617, 20260618, 20260622, 20260623, 20260624, 20260625, 20260626, 20260629, 20260630, 20260701, 20260702, 20260703, 20260706, 20260707, 20260708, 20260709

| 原生指标 | 值 | 单位 | 分母 | 汇总 | 状态 |
| --- | --- | --- | --- | --- | --- |
| audit_native_decisions | 2924929 | rows or actions | 45 saved trading dates; full native decision/action flow | sum_rows_or_actions | known |
| audit_required_feature_valid | 2554293 | rows or actions | 45 saved trading dates; full native decision/action flow | sum_rows_or_actions | known |
| audit_finite_predictions | 2554293 | rows or actions | 45 saved trading dates; full native decision/action flow | sum_rows_or_actions | known |
| audit_native_evaluation | 2553582 | rows or actions | 45 saved trading dates; full native decision/action flow | sum_rows_or_actions | known |
| audit_common_evaluation | 2437036 | rows or actions | 45 saved trading dates; full native decision/action flow | sum_rows_or_actions | known |
| audit_q995_native | 15067 | rows or actions | 45 saved trading dates; full native decision/action flow | sum_rows_or_actions | known |
| audit_actual_entry_requests | 10724 | rows or actions | 45 saved trading dates; full native decision/action flow | sum_rows_or_actions | known |
| audit_actual_entry_fills | 10722 | rows or actions | 45 saved trading dates; full native decision/action flow | sum_rows_or_actions | known |
| audit_native_pooled_IC | 0.2353982749608038 | correlation | native finite score and 2s label rows; N=2553582 | pooled_rows | known |
| audit_native_pooled_RankIC | 0.26529695677482806 | correlation | native finite score and 2s label rows; N=2553582 | pooled_reranked_rows | known |
| audit_common_3_pooled_IC | 0.24063612648847696 | correlation | common_3 finite score and 2s label rows; N=2437036 | pooled_rows | known |
| audit_common_3_pooled_RankIC | 0.2697839731757202 | correlation | common_3 finite score and 2s label rows; N=2437036 | pooled_reranked_rows | known |
| audit_completed_trade_K | 10721 | trades | original completed subset | count | known |
| audit_UNKNOWN_inventory | 1 | positions | original terminal checkpoint | count | known |
| audit_completed_mean_Net | -0.29907063197736905 | bps | original completed subset K | arithmetic_mean | known |
| audit_fullperiod_resolved_Net | unknown | bps | only defined with flat final inventory; no missing outcomes filled zero | sum_completed_bps | unavailable |
| audit_static_common_anchor_source_move_bps_upper_q10_mean_increment | 0.5965530692745471 | bps | static missing-exclude diagnostic; K=10721, retained n=974; exact-n uniform random baseline | difference_of_completed_subset_means | known |
| audit_static_prediction_mean_deviation_H5s_upper_q10_mean_increment | 0.7640486863597227 | bps | static missing-exclude diagnostic; K=10721, retained n=998; exact-n uniform random baseline | difference_of_completed_subset_means | known |
| audit_static_prediction_mean_deviation_H5s_lower_q10_mean_increment | 0.5995457968074234 | bps | static missing-exclude diagnostic; K=10721, retained n=1041; exact-n uniform random baseline | difference_of_completed_subset_means | known |

限制：Audit technical checks passed; saved45 dates=development38+July exploratory7, no independent test. Original D1A remains partial/pending; AG each UNKNOWN1; AU C1 coverage1475, common1412, legal-train median21, completed9. Static selection is not a new dynamic strategy.；evaluation has no readable pinned parquet facts

- PnL_path：missing_facts；no equity or account-value source is projected
- cancel_attribution：missing_facts；cancel attribution facts unavailable
- cost_breakdown：missing_facts；native crossing/fee facts unavailable
- daily_metrics：missing_facts；no timestamped daily facts
- fill_markout：missing_facts；registered fill markout/entry-edge fact is unavailable
- hourly_IC：missing_facts；no finite prediction/label pairs in pinned assets
- hourly_RankIC：missing_facts；no finite non-constant prediction/label pairs in pinned assets
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

## AG C1_COMBO_FULL_O sample validity / frozen-path economics audit v2

评价：exp_20260930_d1a_taker_fullperiod_entry_economics_v1/AG_C1_COMBO_FULL_O_validity_static_v2/run-c45df22c8a9b485fa98de96ccd6d599f；来源运行：run-c45df22c8a9b485fa98de96ccd6d599f。

实际日期：20260507, 20260508, 20260511, 20260512, 20260513, 20260514, 20260515, 20260518, 20260519, 20260520, 20260521, 20260522, 20260525, 20260526, 20260527, 20260528, 20260529, 20260601, 20260602, 20260603, 20260604, 20260605, 20260608, 20260609, 20260610, 20260611, 20260612, 20260615, 20260616, 20260617, 20260618, 20260622, 20260623, 20260624, 20260625, 20260626, 20260629, 20260630, 20260701, 20260702, 20260703, 20260706, 20260707, 20260708, 20260709

| 原生指标 | 值 | 单位 | 分母 | 汇总 | 状态 |
| --- | --- | --- | --- | --- | --- |
| audit_native_decisions | 2924929 | rows or actions | 45 saved trading dates; full native decision/action flow | sum_rows_or_actions | known |
| audit_required_feature_valid | 2437560 | rows or actions | 45 saved trading dates; full native decision/action flow | sum_rows_or_actions | known |
| audit_finite_predictions | 2437560 | rows or actions | 45 saved trading dates; full native decision/action flow | sum_rows_or_actions | known |
| audit_native_evaluation | 2437036 | rows or actions | 45 saved trading dates; full native decision/action flow | sum_rows_or_actions | known |
| audit_common_evaluation | 2437036 | rows or actions | 45 saved trading dates; full native decision/action flow | sum_rows_or_actions | known |
| audit_q995_native | 13954 | rows or actions | 45 saved trading dates; full native decision/action flow | sum_rows_or_actions | known |
| audit_actual_entry_requests | 10964 | rows or actions | 45 saved trading dates; full native decision/action flow | sum_rows_or_actions | known |
| audit_actual_entry_fills | 10963 | rows or actions | 45 saved trading dates; full native decision/action flow | sum_rows_or_actions | known |
| audit_native_pooled_IC | 0.2518038488320095 | correlation | native finite score and 2s label rows; N=2437036 | pooled_rows | known |
| audit_native_pooled_RankIC | 0.2811234489076498 | correlation | native finite score and 2s label rows; N=2437036 | pooled_reranked_rows | known |
| audit_common_3_pooled_IC | 0.2518038488320095 | correlation | common_3 finite score and 2s label rows; N=2437036 | pooled_rows | known |
| audit_common_3_pooled_RankIC | 0.2811234489076498 | correlation | common_3 finite score and 2s label rows; N=2437036 | pooled_reranked_rows | known |
| audit_completed_trade_K | 10962 | trades | original completed subset | count | known |
| audit_UNKNOWN_inventory | 1 | positions | original terminal checkpoint | count | known |
| audit_completed_mean_Net | -0.25015268067361685 | bps | original completed subset K | arithmetic_mean | known |
| audit_fullperiod_resolved_Net | unknown | bps | only defined with flat final inventory; no missing outcomes filled zero | sum_completed_bps | unavailable |
| audit_static_common_anchor_source_move_bps_upper_q10_mean_increment | 0.6770523019402758 | bps | static missing-exclude diagnostic; K=10962, retained n=1014; exact-n uniform random baseline | difference_of_completed_subset_means | known |
| audit_static_prediction_mean_deviation_H5s_upper_q10_mean_increment | 0.8052795456835736 | bps | static missing-exclude diagnostic; K=10962, retained n=1002; exact-n uniform random baseline | difference_of_completed_subset_means | known |
| audit_static_prediction_mean_deviation_H5s_lower_q10_mean_increment | 0.15076259759102445 | bps | static missing-exclude diagnostic; K=10962, retained n=1059; exact-n uniform random baseline | difference_of_completed_subset_means | known |

限制：Audit technical checks passed; saved45 dates=development38+July exploratory7, no independent test. Original D1A remains partial/pending; AG each UNKNOWN1; AU C1 coverage1475, common1412, legal-train median21, completed9. Static selection is not a new dynamic strategy.；evaluation has no readable pinned parquet facts

- PnL_path：missing_facts；no equity or account-value source is projected
- cancel_attribution：missing_facts；cancel attribution facts unavailable
- cost_breakdown：missing_facts；native crossing/fee facts unavailable
- daily_metrics：missing_facts；no timestamped daily facts
- fill_markout：missing_facts；registered fill markout/entry-edge fact is unavailable
- hourly_IC：missing_facts；no finite prediction/label pairs in pinned assets
- hourly_RankIC：missing_facts；no finite non-constant prediction/label pairs in pinned assets
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

## AG F2_current sample validity / frozen-path economics audit v2

评价：exp_20260930_d1a_taker_fullperiod_entry_economics_v1/AG_F2_current_validity_static_v2/run-c45df22c8a9b485fa98de96ccd6d599f；来源运行：run-c45df22c8a9b485fa98de96ccd6d599f。

实际日期：20260507, 20260508, 20260511, 20260512, 20260513, 20260514, 20260515, 20260518, 20260519, 20260520, 20260521, 20260522, 20260525, 20260526, 20260527, 20260528, 20260529, 20260601, 20260602, 20260603, 20260604, 20260605, 20260608, 20260609, 20260610, 20260611, 20260612, 20260615, 20260616, 20260617, 20260618, 20260622, 20260623, 20260624, 20260625, 20260626, 20260629, 20260630, 20260701, 20260702, 20260703, 20260706, 20260707, 20260708, 20260709

| 原生指标 | 值 | 单位 | 分母 | 汇总 | 状态 |
| --- | --- | --- | --- | --- | --- |
| audit_native_decisions | 2924929 | rows or actions | 45 saved trading dates; full native decision/action flow | sum_rows_or_actions | known |
| audit_required_feature_valid | 2554293 | rows or actions | 45 saved trading dates; full native decision/action flow | sum_rows_or_actions | known |
| audit_finite_predictions | 2554293 | rows or actions | 45 saved trading dates; full native decision/action flow | sum_rows_or_actions | known |
| audit_native_evaluation | 2553582 | rows or actions | 45 saved trading dates; full native decision/action flow | sum_rows_or_actions | known |
| audit_common_evaluation | 2437036 | rows or actions | 45 saved trading dates; full native decision/action flow | sum_rows_or_actions | known |
| audit_q995_native | 15059 | rows or actions | 45 saved trading dates; full native decision/action flow | sum_rows_or_actions | known |
| audit_actual_entry_requests | 10972 | rows or actions | 45 saved trading dates; full native decision/action flow | sum_rows_or_actions | known |
| audit_actual_entry_fills | 10969 | rows or actions | 45 saved trading dates; full native decision/action flow | sum_rows_or_actions | known |
| audit_native_pooled_IC | 0.23711268297540428 | correlation | native finite score and 2s label rows; N=2553582 | pooled_rows | known |
| audit_native_pooled_RankIC | 0.266839223524464 | correlation | native finite score and 2s label rows; N=2553582 | pooled_reranked_rows | known |
| audit_common_3_pooled_IC | 0.24255184209306857 | correlation | common_3 finite score and 2s label rows; N=2437036 | pooled_rows | known |
| audit_common_3_pooled_RankIC | 0.2714385931639001 | correlation | common_3 finite score and 2s label rows; N=2437036 | pooled_reranked_rows | known |
| audit_completed_trade_K | 10968 | trades | original completed subset | count | known |
| audit_UNKNOWN_inventory | 1 | positions | original terminal checkpoint | count | known |
| audit_completed_mean_Net | -0.2860729098649459 | bps | original completed subset K | arithmetic_mean | known |
| audit_fullperiod_resolved_Net | unknown | bps | only defined with flat final inventory; no missing outcomes filled zero | sum_completed_bps | unavailable |
| audit_static_common_anchor_source_move_bps_upper_q10_mean_increment | 0.5645077255655377 | bps | static missing-exclude diagnostic; K=10968, retained n=969; exact-n uniform random baseline | difference_of_completed_subset_means | known |
| audit_static_prediction_mean_deviation_H5s_upper_q10_mean_increment | 0.7957422441708919 | bps | static missing-exclude diagnostic; K=10968, retained n=1019; exact-n uniform random baseline | difference_of_completed_subset_means | known |
| audit_static_prediction_mean_deviation_H5s_lower_q10_mean_increment | 0.6465394314558848 | bps | static missing-exclude diagnostic; K=10968, retained n=1068; exact-n uniform random baseline | difference_of_completed_subset_means | known |

限制：Audit technical checks passed; saved45 dates=development38+July exploratory7, no independent test. Original D1A remains partial/pending; AG each UNKNOWN1; AU C1 coverage1475, common1412, legal-train median21, completed9. Static selection is not a new dynamic strategy.；evaluation has no readable pinned parquet facts

- PnL_path：missing_facts；no equity or account-value source is projected
- cancel_attribution：missing_facts；cancel attribution facts unavailable
- cost_breakdown：missing_facts；native crossing/fee facts unavailable
- daily_metrics：missing_facts；no timestamped daily facts
- fill_markout：missing_facts；registered fill markout/entry-edge fact is unavailable
- hourly_IC：missing_facts；no finite prediction/label pairs in pinned assets
- hourly_RankIC：missing_facts；no finite non-constant prediction/label pairs in pinned assets
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

## AU B1 sample validity / frozen-path economics audit v2

评价：exp_20260930_d1a_taker_fullperiod_entry_economics_v1/AU_B1_validity_static_v2/run-c45df22c8a9b485fa98de96ccd6d599f；来源运行：run-c45df22c8a9b485fa98de96ccd6d599f。

实际日期：20260507, 20260508, 20260511, 20260512, 20260513, 20260514, 20260515, 20260518, 20260519, 20260520, 20260521, 20260522, 20260525, 20260526, 20260527, 20260528, 20260529, 20260601, 20260602, 20260603, 20260604, 20260605, 20260608, 20260609, 20260610, 20260611, 20260612, 20260615, 20260616, 20260617, 20260618, 20260622, 20260623, 20260624, 20260625, 20260626, 20260629, 20260630, 20260701, 20260702, 20260703, 20260706, 20260707, 20260708, 20260709

| 原生指标 | 值 | 单位 | 分母 | 汇总 | 状态 |
| --- | --- | --- | --- | --- | --- |
| audit_native_decisions | 2742760 | rows or actions | 45 saved trading dates; full native decision/action flow | sum_rows_or_actions | known |
| audit_required_feature_valid | 1528036 | rows or actions | 45 saved trading dates; full native decision/action flow | sum_rows_or_actions | known |
| audit_finite_predictions | 1528036 | rows or actions | 45 saved trading dates; full native decision/action flow | sum_rows_or_actions | known |
| audit_native_evaluation | 1527628 | rows or actions | 45 saved trading dates; full native decision/action flow | sum_rows_or_actions | known |
| audit_common_evaluation | 1412 | rows or actions | 45 saved trading dates; full native decision/action flow | sum_rows_or_actions | known |
| audit_q995_native | 8366 | rows or actions | 45 saved trading dates; full native decision/action flow | sum_rows_or_actions | known |
| audit_actual_entry_requests | 6147 | rows or actions | 45 saved trading dates; full native decision/action flow | sum_rows_or_actions | known |
| audit_actual_entry_fills | 6145 | rows or actions | 45 saved trading dates; full native decision/action flow | sum_rows_or_actions | known |
| audit_native_pooled_IC | 0.23788137792673344 | correlation | native finite score and 2s label rows; N=1527628 | pooled_rows | known |
| audit_native_pooled_RankIC | 0.2889986399297727 | correlation | native finite score and 2s label rows; N=1527628 | pooled_reranked_rows | known |
| audit_common_3_pooled_IC | 0.1875829059907955 | correlation | common_3 finite score and 2s label rows; N=1412 | pooled_rows | known |
| audit_common_3_pooled_RankIC | 0.2081814920739837 | correlation | common_3 finite score and 2s label rows; N=1412 | pooled_reranked_rows | known |
| audit_completed_trade_K | 6145 | trades | original completed subset | count | known |
| audit_UNKNOWN_inventory | 0 | positions | original terminal checkpoint | count | known |
| audit_completed_mean_Net | -0.1903902385938704 | bps | original completed subset K | arithmetic_mean | known |
| audit_fullperiod_resolved_Net | -1169.9480161593335 | bps | only defined with flat final inventory; no missing outcomes filled zero | sum_completed_bps | known |
| audit_static_common_anchor_source_move_bps_upper_q10_mean_increment | 0.09486039921298593 | bps | static missing-exclude diagnostic; K=6145, retained n=609; exact-n uniform random baseline | difference_of_completed_subset_means | known |
| audit_static_prediction_mean_deviation_H5s_upper_q10_mean_increment | 0.36016212740185455 | bps | static missing-exclude diagnostic; K=6145, retained n=590; exact-n uniform random baseline | difference_of_completed_subset_means | known |
| audit_static_prediction_mean_deviation_H5s_lower_q10_mean_increment | 0.16752768176731492 | bps | static missing-exclude diagnostic; K=6145, retained n=564; exact-n uniform random baseline | difference_of_completed_subset_means | known |

限制：Audit technical checks passed; saved45 dates=development38+July exploratory7, no independent test. Original D1A remains partial/pending; AG each UNKNOWN1; AU C1 coverage1475, common1412, legal-train median21, completed9. Static selection is not a new dynamic strategy.；evaluation has no readable pinned parquet facts

- PnL_path：missing_facts；no equity or account-value source is projected
- cancel_attribution：missing_facts；cancel attribution facts unavailable
- cost_breakdown：missing_facts；native crossing/fee facts unavailable
- daily_metrics：missing_facts；no timestamped daily facts
- fill_markout：missing_facts；registered fill markout/entry-edge fact is unavailable
- hourly_IC：missing_facts；no finite prediction/label pairs in pinned assets
- hourly_RankIC：missing_facts；no finite non-constant prediction/label pairs in pinned assets
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

## AU C1_COMBO_FULL_O sample validity / frozen-path economics audit v2

评价：exp_20260930_d1a_taker_fullperiod_entry_economics_v1/AU_C1_COMBO_FULL_O_validity_static_v2/run-c45df22c8a9b485fa98de96ccd6d599f；来源运行：run-c45df22c8a9b485fa98de96ccd6d599f。

实际日期：20260507, 20260508, 20260511, 20260512, 20260513, 20260514, 20260515, 20260518, 20260519, 20260520, 20260521, 20260522, 20260525, 20260526, 20260527, 20260528, 20260529, 20260601, 20260602, 20260603, 20260604, 20260605, 20260608, 20260609, 20260610, 20260611, 20260612, 20260615, 20260616, 20260617, 20260618, 20260622, 20260623, 20260624, 20260625, 20260626, 20260629, 20260630, 20260701, 20260702, 20260703, 20260706, 20260707, 20260708, 20260709

| 原生指标 | 值 | 单位 | 分母 | 汇总 | 状态 |
| --- | --- | --- | --- | --- | --- |
| audit_native_decisions | 2742760 | rows or actions | 45 saved trading dates; full native decision/action flow | sum_rows_or_actions | known |
| audit_required_feature_valid | 1475 | rows or actions | 45 saved trading dates; full native decision/action flow | sum_rows_or_actions | known |
| audit_finite_predictions | 1475 | rows or actions | 45 saved trading dates; full native decision/action flow | sum_rows_or_actions | known |
| audit_native_evaluation | 1412 | rows or actions | 45 saved trading dates; full native decision/action flow | sum_rows_or_actions | known |
| audit_common_evaluation | 1412 | rows or actions | 45 saved trading dates; full native decision/action flow | sum_rows_or_actions | known |
| audit_q995_native | 15 | rows or actions | 45 saved trading dates; full native decision/action flow | sum_rows_or_actions | known |
| audit_actual_entry_requests | 9 | rows or actions | 45 saved trading dates; full native decision/action flow | sum_rows_or_actions | known |
| audit_actual_entry_fills | 9 | rows or actions | 45 saved trading dates; full native decision/action flow | sum_rows_or_actions | known |
| audit_native_pooled_IC | 0.02617057337043451 | correlation | native finite score and 2s label rows; N=1412 | pooled_rows | known |
| audit_native_pooled_RankIC | 0.021258494475218877 | correlation | native finite score and 2s label rows; N=1412 | pooled_reranked_rows | known |
| audit_common_3_pooled_IC | 0.02617057337043451 | correlation | common_3 finite score and 2s label rows; N=1412 | pooled_rows | known |
| audit_common_3_pooled_RankIC | 0.021258494475218877 | correlation | common_3 finite score and 2s label rows; N=1412 | pooled_reranked_rows | known |
| audit_completed_trade_K | 9 | trades | original completed subset | count | known |
| audit_UNKNOWN_inventory | 0 | positions | original terminal checkpoint | count | known |
| audit_completed_mean_Net | -91.36890785806028 | bps | original completed subset K | arithmetic_mean | known |
| audit_fullperiod_resolved_Net | -822.3201707225426 | bps | only defined with flat final inventory; no missing outcomes filled zero | sum_completed_bps | known |
| audit_static_common_anchor_source_move_bps_upper_q10_mean_increment | 102.90635167604805 | bps | static missing-exclude diagnostic; K=9, retained n=1; exact-n uniform random baseline | difference_of_completed_subset_means | known |
| audit_static_prediction_mean_deviation_H5s_upper_q10_mean_increment | 95.26953254076226 | bps | static missing-exclude diagnostic; K=9, retained n=1; exact-n uniform random baseline | difference_of_completed_subset_means | known |
| audit_static_prediction_mean_deviation_H5s_lower_q10_mean_increment | 95.83424626337394 | bps | static missing-exclude diagnostic; K=9, retained n=1; exact-n uniform random baseline | difference_of_completed_subset_means | known |

限制：Audit technical checks passed; saved45 dates=development38+July exploratory7, no independent test. Original D1A remains partial/pending; AG each UNKNOWN1; AU C1 coverage1475, common1412, legal-train median21, completed9. Static selection is not a new dynamic strategy.；evaluation has no readable pinned parquet facts

- PnL_path：missing_facts；no equity or account-value source is projected
- cancel_attribution：missing_facts；cancel attribution facts unavailable
- cost_breakdown：missing_facts；native crossing/fee facts unavailable
- daily_metrics：missing_facts；no timestamped daily facts
- fill_markout：missing_facts；registered fill markout/entry-edge fact is unavailable
- hourly_IC：missing_facts；no finite prediction/label pairs in pinned assets
- hourly_RankIC：missing_facts；no finite non-constant prediction/label pairs in pinned assets
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

## AU F2_current sample validity / frozen-path economics audit v2

评价：exp_20260930_d1a_taker_fullperiod_entry_economics_v1/AU_F2_current_validity_static_v2/run-c45df22c8a9b485fa98de96ccd6d599f；来源运行：run-c45df22c8a9b485fa98de96ccd6d599f。

实际日期：20260507, 20260508, 20260511, 20260512, 20260513, 20260514, 20260515, 20260518, 20260519, 20260520, 20260521, 20260522, 20260525, 20260526, 20260527, 20260528, 20260529, 20260601, 20260602, 20260603, 20260604, 20260605, 20260608, 20260609, 20260610, 20260611, 20260612, 20260615, 20260616, 20260617, 20260618, 20260622, 20260623, 20260624, 20260625, 20260626, 20260629, 20260630, 20260701, 20260702, 20260703, 20260706, 20260707, 20260708, 20260709

| 原生指标 | 值 | 单位 | 分母 | 汇总 | 状态 |
| --- | --- | --- | --- | --- | --- |
| audit_native_decisions | 2742760 | rows or actions | 45 saved trading dates; full native decision/action flow | sum_rows_or_actions | known |
| audit_required_feature_valid | 1528036 | rows or actions | 45 saved trading dates; full native decision/action flow | sum_rows_or_actions | known |
| audit_finite_predictions | 1528036 | rows or actions | 45 saved trading dates; full native decision/action flow | sum_rows_or_actions | known |
| audit_native_evaluation | 1527628 | rows or actions | 45 saved trading dates; full native decision/action flow | sum_rows_or_actions | known |
| audit_common_evaluation | 1412 | rows or actions | 45 saved trading dates; full native decision/action flow | sum_rows_or_actions | known |
| audit_q995_native | 8429 | rows or actions | 45 saved trading dates; full native decision/action flow | sum_rows_or_actions | known |
| audit_actual_entry_requests | 6189 | rows or actions | 45 saved trading dates; full native decision/action flow | sum_rows_or_actions | known |
| audit_actual_entry_fills | 6187 | rows or actions | 45 saved trading dates; full native decision/action flow | sum_rows_or_actions | known |
| audit_native_pooled_IC | 0.2391357053882935 | correlation | native finite score and 2s label rows; N=1527628 | pooled_rows | known |
| audit_native_pooled_RankIC | 0.2902646835930563 | correlation | native finite score and 2s label rows; N=1527628 | pooled_reranked_rows | known |
| audit_common_3_pooled_IC | 0.19127927714545362 | correlation | common_3 finite score and 2s label rows; N=1412 | pooled_rows | known |
| audit_common_3_pooled_RankIC | 0.21133264159933565 | correlation | common_3 finite score and 2s label rows; N=1412 | pooled_reranked_rows | known |
| audit_completed_trade_K | 6187 | trades | original completed subset | count | known |
| audit_UNKNOWN_inventory | 0 | positions | original terminal checkpoint | count | known |
| audit_completed_mean_Net | -0.17316956443387618 | bps | original completed subset K | arithmetic_mean | known |
| audit_fullperiod_resolved_Net | -1071.400095152392 | bps | only defined with flat final inventory; no missing outcomes filled zero | sum_completed_bps | known |
| audit_static_common_anchor_source_move_bps_upper_q10_mean_increment | 0.06484791660047295 | bps | static missing-exclude diagnostic; K=6187, retained n=609; exact-n uniform random baseline | difference_of_completed_subset_means | known |
| audit_static_prediction_mean_deviation_H5s_upper_q10_mean_increment | 0.2602594916918315 | bps | static missing-exclude diagnostic; K=6187, retained n=585; exact-n uniform random baseline | difference_of_completed_subset_means | known |
| audit_static_prediction_mean_deviation_H5s_lower_q10_mean_increment | 0.0004265552948285456 | bps | static missing-exclude diagnostic; K=6187, retained n=568; exact-n uniform random baseline | difference_of_completed_subset_means | known |

限制：Audit technical checks passed; saved45 dates=development38+July exploratory7, no independent test. Original D1A remains partial/pending; AG each UNKNOWN1; AU C1 coverage1475, common1412, legal-train median21, completed9. Static selection is not a new dynamic strategy.；evaluation has no readable pinned parquet facts

- PnL_path：missing_facts；no equity or account-value source is projected
- cancel_attribution：missing_facts；cancel attribution facts unavailable
- cost_breakdown：missing_facts；native crossing/fee facts unavailable
- daily_metrics：missing_facts；no timestamped daily facts
- fill_markout：missing_facts；registered fill markout/entry-edge fact is unavailable
- hourly_IC：missing_facts；no finite prediction/label pairs in pinned assets
- hourly_RankIC：missing_facts；no finite non-constant prediction/label pairs in pinned assets
- maker_fill：missing_facts；maker order/fill facts unavailable
- signal_bins：missing_facts；no registered source training-bin column

## D1B full38_existing_reference

评价：exp_20260930_d1b_event_maker_economics_diagnostic_v1/full38_existing_reference/run-1d32a4dc6d3a44a08f9c34e51dc07481；来源运行：run-1d32a4dc6d3a44a08f9c34e51dc07481。

实际日期：20260507, 20260508, 20260511, 20260512, 20260513, 20260514, 20260515, 20260518, 20260519, 20260520, 20260521, 20260522, 20260525, 20260526, 20260527, 20260528, 20260529, 20260601, 20260602, 20260603, 20260604, 20260605, 20260608, 20260609, 20260610, 20260611, 20260612, 20260615, 20260616, 20260617, 20260618, 20260622, 20260623, 20260624, 20260625, 20260626, 20260629, 20260630

| 原生指标 | 值 | 单位 | 分母 | 汇总 | 状态 |
| --- | --- | --- | --- | --- | --- |
| EVENT_SIG1000/common_H_bps_per_K3 | -0.015861655143011126 | bp | original full38 known native denominator; no HOLD | pooled_from_native_facts_not_hourly_average | known |
| EVENT_SIG1000/common_H_notional_weighted_bps | -1.3140554141978387 | bp | original full38 known native denominator; no HOLD | pooled_from_native_facts_not_hourly_average | known |
| FIX500/common_H_bps_per_K3 | -0.03228323660757763 | bp | original full38 known native denominator; no HOLD | pooled_from_native_facts_not_hourly_average | known |
| FIX500/common_H_notional_weighted_bps | -1.298523538029245 | bp | original full38 known native denominator; no HOLD | pooled_from_native_facts_not_hourly_average | known |
| LF_SIG1000/common_H_bps_per_K3 | -0.04928646483579029 | bp | original full38 known native denominator; no HOLD | pooled_from_native_facts_not_hourly_average | known |
| LF_SIG1000/common_H_notional_weighted_bps | -1.317485906692849 | bp | original full38 known native denominator; no HOLD | pooled_from_native_facts_not_hourly_average | known |

限制：not independent holdout；saved state inference does not re-prove transition semantics；Maker mixed clocks not deployment-equivalent；fullperiod HOLD missing；full38 STATE/retention/independent acceptance gaps retained；38 original dates, original TTL/three-arm contract; no full38 HOLD/shadow; acceptance/retention gaps retained；No new date inference/replay or D2 authorized; see fullperiod confirmation plan；Source stale or incomplete; no computation.

- PnL_path：blocked；Source identity stale or partition incomplete; derived facts withheld.
- cancel_attribution：blocked；Source identity stale or partition incomplete; derived facts withheld.
- cost_breakdown：blocked；Source identity stale or partition incomplete; derived facts withheld.
- daily_metrics：blocked；Source identity stale or partition incomplete; derived facts withheld.
- fill_markout：blocked；Source identity stale or partition incomplete; derived facts withheld.
- hourly_IC：blocked；Source identity stale or partition incomplete; derived facts withheld.
- hourly_RankIC：blocked；Source identity stale or partition incomplete; derived facts withheld.
- maker_fill：blocked；Source identity stale or partition incomplete; derived facts withheld.
- signal_bins：blocked；Source identity stale or partition incomplete; derived facts withheld.

## D1B maker_remaining_fills_and_HOLD

评价：exp_20260930_d1b_event_maker_economics_diagnostic_v1/maker_remaining_fills_and_HOLD/run-1d32a4dc6d3a44a08f9c34e51dc07481；来源运行：run-1d32a4dc6d3a44a08f9c34e51dc07481。

实际日期：20260507, 20260603

| 原生指标 | 值 | 单位 | 分母 | 汇总 | 状态 |
| --- | --- | --- | --- | --- | --- |
| EVENT/每K3共同H_bp | -0.031267483308717176 | bp | K3_submit_support_original_orders | pooled_from_native_facts_not_hourly_average | known |
| EVENT/成交名义金额加权共同H_bp | -2.1531101872090255 | bp | known_K3_fill_notional | pooled_from_native_facts_not_hourly_average | known |
| EVENT/共同已知成交数量 | 25.318999999999814 | quantity | known_K3_original_orders | pooled_from_native_facts_not_hourly_average | known |
| HOLD/每K3共同H_bp | -0.22813356649634078 | bp | K3_submit_support_original_orders | pooled_from_native_facts_not_hourly_average | known |
| HOLD/成交名义金额加权共同H_bp | -1.571759980417928 | bp | known_K3_fill_notional | pooled_from_native_facts_not_hourly_average | known |
| HOLD/共同已知成交数量 | 253.803 | quantity | known_K3_original_orders | pooled_from_native_facts_not_hourly_average | known |
| LF/每K3共同H_bp | -0.07666992282796857 | bp | K3_submit_support_original_orders | pooled_from_native_facts_not_hourly_average | known |
| LF/成交名义金额加权共同H_bp | -1.502720485425325 | bp | known_K3_fill_notional | pooled_from_native_facts_not_hourly_average | known |
| LF/共同已知成交数量 | 89.312 | quantity | known_K3_original_orders | pooled_from_native_facts_not_hourly_average | known |
| EVENT_support_fill_orders | 27 | count | submit_support original L1 TTL2 orders | pooled_from_native_facts_not_hourly_average | known |
| EVENT_support_signal_cancels | 1583 | count | submit_support original L1 TTL2 orders | pooled_from_native_facts_not_hourly_average | known |
| HOLD_extra_cancel_value_bps | 1.5072532840397395 | bp | actual HOLD incremental fill notional; frozen mixed clocks | pooled_from_native_facts_not_hourly_average | known |
| roundtrip_net_bps | unknown | bp | no actual Maker exit; unavailable | pooled_from_native_facts_not_hourly_average | unavailable |

限制：not independent holdout；saved state inference does not re-prove transition semantics；Maker mixed clocks not deployment-equivalent；fullperiod HOLD missing；full38 STATE/retention/independent acceptance gaps retained；Four discovery windows on two used dates; full38 old three-arm reference separate; target through20260930 unconfirmed；No new date inference/replay or D2 authorized; see fullperiod confirmation plan；evaluation has no readable pinned parquet facts

- PnL_path：missing_facts；no equity or account-value source is projected
- cancel_attribution：missing_facts；cancel attribution facts unavailable
- cost_breakdown：missing_facts；native crossing/fee facts unavailable
- daily_metrics：missing_facts；no timestamped daily facts
- fill_markout：missing_facts；registered fill markout/entry-edge fact is unavailable
- hourly_IC：missing_facts；no finite prediction/label pairs in pinned assets
- hourly_RankIC：missing_facts；no finite non-constant prediction/label pairs in pinned assets
- maker_fill：missing_facts；maker order/fill facts unavailable
- signal_bins：missing_facts；no registered source training-bin column

## D1B target_to_execution

评价：exp_20260930_d1b_event_maker_economics_diagnostic_v1/target_to_execution/run-1d32a4dc6d3a44a08f9c34e51dc07481；来源运行：run-1d32a4dc6d3a44a08f9c34e51dc07481。

实际日期：20260507, 20260603

| 原生指标 | 值 | 单位 | 分母 | 汇总 | 状态 |
| --- | --- | --- | --- | --- | --- |
| held_prediction_bps/R_label_linear_bps_mean | 0.3275794812700763 | bp | common_completed_identified_same_event_same_entry_P | pooled_from_native_facts_not_hourly_average | known |
| held_prediction_bps/G_exec_mid_bps_same_P_mean | 0.2040513715163645 | bp | common_completed_identified_same_event_same_entry_P | pooled_from_native_facts_not_hourly_average | known |
| held_prediction_bps/start_price_offset_bps_same_P_mean | -0.12674661375483096 | bp | common_completed_identified_same_event_same_entry_P | pooled_from_native_facts_not_hourly_average | known |
| held_prediction_bps/end_price_offset_bps_same_P_mean | 0.0032185040011192823 | bp | common_completed_identified_same_event_same_entry_P | pooled_from_native_facts_not_hourly_average | known |
| held_prediction_bps/log_to_linear_label_delta_bps_mean | 7.935170555216274e-06 | bp | common_completed_identified_same_event_same_entry_P | pooled_from_native_facts_not_hourly_average | known |
| held_prediction_bps/identified_n | 106846 | count | all scheduled opportunities | pooled_from_native_facts_not_hourly_average | known |
| prediction_bps/R_label_linear_bps_mean | 0.4666576698245354 | bp | common_completed_identified_same_event_same_entry_P | pooled_from_native_facts_not_hourly_average | known |
| prediction_bps/G_exec_mid_bps_same_P_mean | 0.2243337374246421 | bp | common_completed_identified_same_event_same_entry_P | pooled_from_native_facts_not_hourly_average | known |
| prediction_bps/start_price_offset_bps_same_P_mean | -0.24265821869855492 | bp | common_completed_identified_same_event_same_entry_P | pooled_from_native_facts_not_hourly_average | known |
| prediction_bps/end_price_offset_bps_same_P_mean | 0.000334286298661533 | bp | common_completed_identified_same_event_same_entry_P | pooled_from_native_facts_not_hourly_average | known |
| prediction_bps/log_to_linear_label_delta_bps_mean | -1.7397404855165038e-05 | bp | common_completed_identified_same_event_same_entry_P | pooled_from_native_facts_not_hourly_average | known |
| prediction_bps/identified_n | 106846 | count | all scheduled opportunities | pooled_from_native_facts_not_hourly_average | known |
| b2/held_prediction_bps/IC | 0.14451246621137362 | correlation | common finite event prediction/label pairs | pooled_from_native_facts_not_hourly_average | known |
| b2/held_prediction_bps/RankIC | 0.16847375099171447 | correlation | common finite event prediction/label pairs | pooled_from_native_facts_not_hourly_average | known |
| b2/prediction_bps/IC | 0.21070639593344417 | correlation | common finite event prediction/label pairs | pooled_from_native_facts_not_hourly_average | known |
| b2/prediction_bps/RankIC | 0.24920727555938402 | correlation | common finite event prediction/label pairs | pooled_from_native_facts_not_hourly_average | known |
| b1/historical_prediction_bps/IC | 0.23429129809046134 | correlation | common finite event prediction/label pairs | pooled_from_native_facts_not_hourly_average | known |
| b1/historical_prediction_bps/RankIC | 0.2616017447963556 | correlation | common finite event prediction/label pairs | pooled_from_native_facts_not_hourly_average | known |
| b1/prediction_bps/IC | 0.23456426090794366 | correlation | common finite event prediction/label pairs | pooled_from_native_facts_not_hourly_average | known |
| b1/prediction_bps/RankIC | 0.26180295113312385 | correlation | common finite event prediction/label pairs | pooled_from_native_facts_not_hourly_average | known |

限制：not independent holdout；saved state inference does not re-prove transition semantics；Maker mixed clocks not deployment-equivalent；fullperiod HOLD missing；full38 STATE/retention/independent acceptance gaps retained；Four discovery windows on two used dates; full38 old three-arm reference separate; target through20260930 unconfirmed；No new date inference/replay or D2 authorized; see fullperiod confirmation plan；evaluation has no readable pinned parquet facts

- PnL_path：missing_facts；no equity or account-value source is projected
- cancel_attribution：missing_facts；cancel attribution facts unavailable
- cost_breakdown：missing_facts；native crossing/fee facts unavailable
- daily_metrics：missing_facts；no timestamped daily facts
- fill_markout：missing_facts；registered fill markout/entry-edge fact is unavailable
- hourly_IC：missing_facts；no finite prediction/label pairs in pinned assets
- hourly_RankIC：missing_facts；no finite non-constant prediction/label pairs in pinned assets
- maker_fill：missing_facts；maker order/fill facts unavailable
- signal_bins：missing_facts；no registered source training-bin column

## Maker来源对账与时钟缺口诊断

评价：exp_20261013_xag_maker_clock_entry_cancel_fullperiod_v1/source_clock_inventory/run-5209b853c9f34d23bb2aca473ebf4470；来源运行：run-5209b853c9f34d23bb2aca473ebf4470。

实际日期：20260507, 20260508, 20260511, 20260512, 20260513, 20260514, 20260515, 20260518, 20260519, 20260520, 20260521, 20260522, 20260525, 20260526, 20260527, 20260528, 20260529, 20260601, 20260602, 20260603, 20260604, 20260605, 20260608, 20260609, 20260610, 20260611, 20260612, 20260615, 20260616, 20260617, 20260618, 20260622, 20260623, 20260624, 20260625, 20260626, 20260629, 20260630

| 原生指标 | 值 | 单位 | 分母 | 汇总 | 状态 |
| --- | --- | --- | --- | --- | --- |
| audited_segments | 1230 | count | planned_segments | count | known |
| reusable_original_orders | 1140920 | count | legacy_original_orders | count | known |
| inventoried_sessions | 410 | count | expected_sessions | count | known |
| strategy_net_bps | unknown | bps | not_executed | count | unavailable |

限制：时钟诊断不等于model/order replay验收；全期HOLD与新入场比较未执行；UNKNOWN未补零；人工研究复核pending；38日1230精确分段来源核验；1个15分钟时钟前缀；103日410会话仅依赖盘点，未全期回放；evaluation has no readable pinned parquet facts

- PnL_path：missing_facts；no equity or account-value source is projected
- cancel_attribution：missing_facts；cancel attribution facts unavailable
- cost_breakdown：missing_facts；native crossing/fee facts unavailable
- daily_metrics：missing_facts；no timestamped daily facts
- fill_markout：missing_facts；registered fill markout/entry-edge fact is unavailable
- hourly_IC：missing_facts；no finite prediction/label pairs in pinned assets
- hourly_RankIC：missing_facts；no finite non-constant prediction/label pairs in pinned assets
- maker_fill：missing_facts；maker order/fill facts unavailable
- signal_bins：missing_facts；no registered source training-bin column

## AG F2 current BUY upper10 H5s dynamic path

评价：exp_20261013_xag_taker_prediction_deviation_entry_v1/AG_F2_buy_upper10_H5s/run-89dd1254667c405591f356294cb89723；来源运行：run-89dd1254667c405591f356294cb89723。

实际日期：20260507, 20260508, 20260511, 20260512, 20260513, 20260514, 20260515, 20260518, 20260519, 20260520, 20260521, 20260522, 20260525, 20260526, 20260527, 20260528, 20260529, 20260601, 20260602, 20260603, 20260604, 20260605, 20260608, 20260609, 20260610, 20260611, 20260612, 20260615, 20260616, 20260617, 20260618, 20260622, 20260623, 20260624, 20260625, 20260626, 20260629, 20260630, 20260701, 20260702, 20260703, 20260706, 20260707, 20260708, 20260709

| 原生指标 | 值 | 单位 | 分母 | 汇总 | 状态 |
| --- | --- | --- | --- | --- | --- |
| completed_trades | 1383 | count | accepted completed trades; inventory MTM unavailable; fullperiod cash only if flat | count | known |
| completed_subset_net_bps_sum | 758.5023717183789 | bps | accepted completed trades; inventory MTM unavailable; fullperiod cash only if flat | sum_trade_bps | known |
| completed_subset_mean_net_bps | 0.548447123440621 | bps | accepted completed trades; inventory MTM unavailable; fullperiod cash only if flat | mean | known |
| fullperiod_net_unit_cash | 4.978629200000155 | unit cash | accepted completed trades; inventory MTM unavailable; fullperiod cash only if flat | sum_cash | known |
| gross_mid_bps_sum | 4539.636704178351 | bps | accepted completed trades; inventory MTM unavailable; fullperiod cash only if flat | sum_trade_bps | known |
| crossing_bps_sum | 2121.3892376119775 | bps | accepted completed trades; inventory MTM unavailable; fullperiod cash only if flat | sum_trade_bps | known |
| fee_bps_sum | 1659.745094847994 | bps | accepted completed trades; inventory MTM unavailable; fullperiod cash only if flat | sum_trade_bps | known |
| UNKNOWN_inventory | 0 | count | accepted completed trades; inventory MTM unavailable; fullperiod cash only if flat | count | known |

限制：45 previously viewed dates; independent confirmation missing; complete decisions retained; completed subset and UNKNOWN inventory reported separately；Structured execution details remain in the private source bound by contract_hash.

- PnL_path：missing_facts；no equity or account-value source is projected
- cancel_attribution：missing_facts；cancel attribution facts unavailable
- fill_markout：missing_facts；registered fill markout/entry-edge fact is unavailable
- hourly_IC：missing_facts；no finite prediction/label pairs in pinned assets
- hourly_RankIC：missing_facts；no finite non-constant prediction/label pairs in pinned assets
- maker_fill：missing_facts；maker order/fill facts unavailable
- signal_bins：missing_facts；no registered source training-bin column

## AG/XAG BUY A80 dynamic path

评价：exp_20261014_xag_taker_deviation_relaxation_v1/A80/run-a0800789d0834bc39c7b472f174a8ce3；来源运行：run-a0800789d0834bc39c7b472f174a8ce3。

实际日期：20260507, 20260508, 20260511, 20260512, 20260513, 20260514, 20260515, 20260518, 20260519, 20260520, 20260521, 20260522, 20260525, 20260526, 20260527, 20260528, 20260529, 20260601, 20260602, 20260603, 20260604, 20260605, 20260608, 20260609, 20260610, 20260611, 20260612, 20260615, 20260616, 20260617, 20260618, 20260622, 20260623, 20260624, 20260625, 20260626, 20260629, 20260630, 20260701, 20260702, 20260703, 20260706, 20260707, 20260708, 20260709

| 原生指标 | 值 | 单位 | 分母 | 汇总 | 状态 |
| --- | --- | --- | --- | --- | --- |
| completed_trades | 2721 | count | completed trades; fullperiod cash only if flat, no inventory MTM | count | known |
| completed_subset_net_bps_sum | 69.44177110965983 | bps | completed trades; fullperiod cash only if flat, no inventory MTM | sum_trade_bps | known |
| completed_subset_mean_net_bps | 0.025520680304909896 | bps | completed trades; fullperiod cash only if flat, no inventory MTM | mean | known |
| completed_subset_unit_cash_net | 0.47937020000026953 | unit cash | completed trades; fullperiod cash only if flat, no inventory MTM | sum_cash | known |
| fullperiod_net_unit_cash | 0.47937020000026953 | unit cash | completed trades; fullperiod cash only if flat, no inventory MTM | sum_cash | known |
| UNKNOWN_inventory | 0 | count | completed trades; fullperiod cash only if flat, no inventory MTM | count | known |

限制：45 viewed dates; independent confirmation missing; complete decisions retained; inventory disclosed separately；Structured execution details remain in the private source bound by contract_hash.

- PnL_path：missing_facts；no equity or account-value source is projected
- cancel_attribution：missing_facts；cancel attribution facts unavailable
- fill_markout：missing_facts；registered fill markout/entry-edge fact is unavailable
- hourly_IC：missing_facts；no finite prediction/label pairs in pinned assets
- hourly_RankIC：missing_facts；no finite non-constant prediction/label pairs in pinned assets
- maker_fill：missing_facts；maker order/fill facts unavailable
- signal_bins：missing_facts；no registered source training-bin column

## AG/XAG BUY A85 dynamic path

评价：exp_20261014_xag_taker_deviation_relaxation_v1/A85/run-a0800789d0834bc39c7b472f174a8ce3；来源运行：run-a0800789d0834bc39c7b472f174a8ce3。

实际日期：20260507, 20260508, 20260511, 20260512, 20260513, 20260514, 20260515, 20260518, 20260519, 20260520, 20260521, 20260522, 20260525, 20260526, 20260527, 20260528, 20260529, 20260601, 20260602, 20260603, 20260604, 20260605, 20260608, 20260609, 20260610, 20260611, 20260612, 20260615, 20260616, 20260617, 20260618, 20260622, 20260623, 20260624, 20260625, 20260626, 20260629, 20260630, 20260701, 20260702, 20260703, 20260706, 20260707, 20260708, 20260709

| 原生指标 | 值 | 单位 | 分母 | 汇总 | 状态 |
| --- | --- | --- | --- | --- | --- |
| completed_trades | 2064 | count | completed trades; fullperiod cash only if flat, no inventory MTM | count | known |
| completed_subset_net_bps_sum | 589.6477288025247 | bps | completed trades; fullperiod cash only if flat, no inventory MTM | sum_trade_bps | known |
| completed_subset_mean_net_bps | 0.28568203914851004 | bps | completed trades; fullperiod cash only if flat, no inventory MTM | mean | known |
| completed_subset_unit_cash_net | 3.819104200000145 | unit cash | completed trades; fullperiod cash only if flat, no inventory MTM | sum_cash | known |
| fullperiod_net_unit_cash | 3.819104200000145 | unit cash | completed trades; fullperiod cash only if flat, no inventory MTM | sum_cash | known |
| UNKNOWN_inventory | 0 | count | completed trades; fullperiod cash only if flat, no inventory MTM | count | known |

限制：45 viewed dates; independent confirmation missing; complete decisions retained; inventory disclosed separately；Structured execution details remain in the private source bound by contract_hash.

- PnL_path：missing_facts；no equity or account-value source is projected
- cancel_attribution：missing_facts；cancel attribution facts unavailable
- fill_markout：missing_facts；registered fill markout/entry-edge fact is unavailable
- hourly_IC：missing_facts；no finite prediction/label pairs in pinned assets
- hourly_RankIC：missing_facts；no finite non-constant prediction/label pairs in pinned assets
- maker_fill：missing_facts；maker order/fill facts unavailable
- signal_bins：missing_facts；no registered source training-bin column

## AG/XAG BUY L dynamic path

评价：exp_20261014_xag_taker_deviation_relaxation_v1/L/run-a0800789d0834bc39c7b472f174a8ce3；来源运行：run-a0800789d0834bc39c7b472f174a8ce3。

实际日期：20260507, 20260508, 20260511, 20260512, 20260513, 20260514, 20260515, 20260518, 20260519, 20260520, 20260521, 20260522, 20260525, 20260526, 20260527, 20260528, 20260529, 20260601, 20260602, 20260603, 20260604, 20260605, 20260608, 20260609, 20260610, 20260611, 20260612, 20260615, 20260616, 20260617, 20260618, 20260622, 20260623, 20260624, 20260625, 20260626, 20260629, 20260630, 20260701, 20260702, 20260703, 20260706, 20260707, 20260708, 20260709

| 原生指标 | 值 | 单位 | 分母 | 汇总 | 状态 |
| --- | --- | --- | --- | --- | --- |
| completed_trades | 6219 | count | completed trades; fullperiod cash only if flat, no inventory MTM | count | known |
| completed_subset_net_bps_sum | -1731.4638802271425 | bps | completed trades; fullperiod cash only if flat, no inventory MTM | sum_trade_bps | known |
| completed_subset_mean_net_bps | -0.27841516003009203 | bps | completed trades; fullperiod cash only if flat, no inventory MTM | mean | known |
| completed_subset_unit_cash_net | -12.082650999999785 | unit cash | completed trades; fullperiod cash only if flat, no inventory MTM | sum_cash | known |
| fullperiod_net_unit_cash | -12.082650999999785 | unit cash | completed trades; fullperiod cash only if flat, no inventory MTM | sum_cash | known |
| UNKNOWN_inventory | 0 | count | completed trades; fullperiod cash only if flat, no inventory MTM | count | known |

限制：45 viewed dates; independent confirmation missing; complete decisions retained; inventory disclosed separately；Structured execution details remain in the private source bound by contract_hash.

- PnL_path：missing_facts；no equity or account-value source is projected
- cancel_attribution：missing_facts；cancel attribution facts unavailable
- fill_markout：missing_facts；registered fill markout/entry-edge fact is unavailable
- hourly_IC：missing_facts；no finite prediction/label pairs in pinned assets
- hourly_RankIC：missing_facts；no finite non-constant prediction/label pairs in pinned assets
- maker_fill：missing_facts；maker order/fill facts unavailable
- signal_bins：missing_facts；no registered source training-bin column

## AG F2 BUY Q99 fixed H5s dynamic path

评价：exp_20261014_xag_taker_signal_threshold_relaxation_v1/AG_F2_B99_fixed_H5s/run-8d5f2189376c40908fe62839af8de959；来源运行：run-8d5f2189376c40908fe62839af8de959。

实际日期：20260507, 20260508, 20260511, 20260512, 20260513, 20260514, 20260515, 20260518, 20260519, 20260520, 20260521, 20260522, 20260525, 20260526, 20260527, 20260528, 20260529, 20260601, 20260602, 20260603, 20260604, 20260605, 20260608, 20260609, 20260610, 20260611, 20260612, 20260615, 20260616, 20260617, 20260618, 20260622, 20260623, 20260624, 20260625, 20260626, 20260629, 20260630, 20260701, 20260702, 20260703, 20260706, 20260707, 20260708, 20260709

| 原生指标 | 值 | 单位 | 分母 | 汇总 | 状态 |
| --- | --- | --- | --- | --- | --- |
| completed_trades | 1438 | count | accepted completed trades; inventory MTM unavailable; fullperiod cash only if flat | count | known |
| completed_subset_net_bps_sum | 752.5277233540244 | bps | accepted completed trades; inventory MTM unavailable; fullperiod cash only if flat | sum_trade_bps | known |
| completed_subset_mean_net_bps | 0.5233155238901421 | bps | accepted completed trades; inventory MTM unavailable; fullperiod cash only if flat | mean | known |
| fullperiod_net_unit_cash | 4.966121600000093 | unit cash | accepted completed trades; inventory MTM unavailable; fullperiod cash only if flat | sum_cash | known |
| gross_mid_bps_sum | 4684.555873855445 | bps | accepted completed trades; inventory MTM unavailable; fullperiod cash only if flat | sum_trade_bps | known |
| crossing_bps_sum | 2206.2794539162237 | bps | accepted completed trades; inventory MTM unavailable; fullperiod cash only if flat | sum_trade_bps | known |
| fee_bps_sum | 1725.7486965851963 | bps | accepted completed trades; inventory MTM unavailable; fullperiod cash only if flat | sum_trade_bps | known |
| UNKNOWN_inventory | 0 | count | accepted completed trades; inventory MTM unavailable; fullperiod cash only if flat | count | known |

限制：45 previously viewed dates; independent confirmation missing; complete decisions retained; completed subset and UNKNOWN inventory reported separately；Structured execution details remain in the private source bound by contract_hash.

- PnL_path：missing_facts；no equity or account-value source is projected
- cancel_attribution：missing_facts；cancel attribution facts unavailable
- fill_markout：missing_facts；registered fill markout/entry-edge fact is unavailable
- hourly_IC：missing_facts；no finite prediction/label pairs in pinned assets
- hourly_RankIC：missing_facts；no finite non-constant prediction/label pairs in pinned assets
- maker_fill：missing_facts；maker order/fill facts unavailable
- signal_bins：missing_facts；no registered source training-bin column

## Taker P1入场归因：扩量未增现金，独立H5归因仍缺对照

评价：exp_20261015_taker_p1_entry_attribution_v1/P1/run-19b13027b7934b37b8cbd564bd04d0cb；来源运行：run-19b13027b7934b37b8cbd564bd04d0cb。

实际日期：20260507, 20260508, 20260511, 20260512, 20260513, 20260514, 20260515, 20260518, 20260519, 20260520, 20260521, 20260522, 20260525, 20260526, 20260527, 20260528, 20260529, 20260601, 20260602, 20260603, 20260604, 20260605, 20260608, 20260609, 20260610, 20260611, 20260612, 20260615, 20260616, 20260617, 20260618, 20260622, 20260623, 20260624, 20260625, 20260626, 20260629, 20260630, 20260701, 20260702, 20260703, 20260706, 20260707, 20260708, 20260709

| 原生指标 | 值 | 单位 | 分母 | 汇总 | 状态 |
| --- | --- | --- | --- | --- | --- |
| R1_net_cash | -12.082650999999785 | unit_cash | 45 viewed trading dates, unit1 | continuous ledger realized net cash, terminal flat | known |
| R1F_net_cash | -12.958141999999796 | unit_cash | 45 viewed trading dates, unit1 | continuous ledger realized net cash, terminal flat | known |
| R3_net_cash | 4.978629200000155 | unit_cash | 45 viewed trading dates, unit1 | continuous ledger realized net cash, terminal flat | known |
| A85_net_cash | 3.819104200000145 | unit_cash | 45 viewed trading dates, unit1 | continuous ledger realized net cash, terminal flat | known |
| A80_net_cash | 0.47937020000026953 | unit_cash | 45 viewed trading dates, unit1 | continuous ledger realized net cash, terminal flat | known |
| B99_net_cash | 4.966121600000093 | unit_cash | 45 viewed trading dates, unit1 | continuous ledger realized net cash, terminal flat | known |

限制：R0 UNKNOWN full account not comparable；R2 missing: H5 independent numeric value not established；fixed 2s label is descriptive and never gates entry；45 viewed days are exploratory; no independent confirmation；no new L3-L6 action；45 viewed days; R1F full continuous path; R2 absent; independent confirmation absent；No new stage authorized. Preserve current accepted reference; review decision card.；evaluation has no readable pinned parquet facts；Structured inputs details remain in the private source bound by contract_hash.；Structured execution details remain in the private source bound by contract_hash.

- PnL_path：missing_facts；no equity or account-value source is projected
- cancel_attribution：missing_facts；cancel attribution facts unavailable
- cost_breakdown：missing_facts；native crossing/fee facts unavailable
- daily_metrics：missing_facts；no timestamped daily facts
- fill_markout：missing_facts；registered fill markout/entry-edge fact is unavailable
- hourly_IC：missing_facts；no finite prediction/label pairs in pinned assets
- hourly_RankIC：missing_facts；no finite non-constant prediction/label pairs in pinned assets
- maker_fill：missing_facts；maker order/fill facts unavailable
- signal_bins：missing_facts；no registered source training-bin column
