# 期货短周期研究当前结果

发布版本：`4978d82590feae7111653656cff73f4d0025c822222d417a60b5bb7ca6b934f9`；指标快照时间：2026-10-21T08:05:47.124760+00:00。

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
| 纯score与原H5的单一路径比较：inconclusive | reference_with_gaps | 20260507–20260709（45） | gaps | pending |
| R2历史支持已盘点；校准数字合同待确认 | reference_with_gaps | 20260507–20260709（45） | pending | pending |
| AG F2 baseline · 延伸至2026-08-31 | candidate | 20260507–20260831（82） | stale | pending |
| AG F2 baseline · 延伸至2026-08-31 | candidate | 20260507–20260831（82） | passed | pending |
| AU F2 baseline · 延伸至2026-08-31 | candidate | 20260507–20260831（82） | stale | pending |
| AU F2 baseline · 延伸至2026-08-31 | candidate | 20260507–20260831（82） | passed | pending |
| H5空头与共享库存多空：inconclusive | reference_with_gaps | 20260507–20260709（45） | gaps | pending |
| AU A80 both：完整动态净贡献 | reference_with_gaps | 20260507–20260709（45） | gaps | pending |
| AU A80 long：完整动态净贡献 | reference_with_gaps | 20260507–20260709（45） | gaps | pending |
| AU A80 short：完整动态净贡献 | reference_with_gaps | 20260507–20260709（45） | gaps | pending |
| AU A85 both：完整动态净贡献 | reference_with_gaps | 20260507–20260709（45） | gaps | pending |
| AU A85 long：完整动态净贡献 | reference_with_gaps | 20260507–20260709（45） | gaps | pending |
| AU A85 short：完整动态净贡献 | reference_with_gaps | 20260507–20260709（45） | gaps | pending |
| AU B99 both：完整动态净贡献 | reference_with_gaps | 20260507–20260709（45） | gaps | pending |
| AU B99 long：完整动态净贡献 | reference_with_gaps | 20260507–20260709（45） | gaps | pending |
| AU B99 short：完整动态净贡献 | reference_with_gaps | 20260507–20260709（45） | gaps | pending |
| AU L both：完整动态净贡献 | reference_with_gaps | 20260507–20260709（45） | gaps | pending |
| AU L long：完整动态净贡献 | reference_with_gaps | 20260507–20260709（45） | gaps | pending |
| AU L short：完整动态净贡献 | reference_with_gaps | 20260507–20260709（45） | gaps | pending |
| AU R3 both：完整动态净贡献 | reference_with_gaps | 20260507–20260709（45） | gaps | pending |
| AU R3 long：完整动态净贡献 | reference_with_gaps | 20260507–20260709（45） | gaps | pending |
| AU R3 short：完整动态净贡献 | reference_with_gaps | 20260507–20260709（45） | gaps | pending |
| AG/AU R3差距：收益尺度、预测支持与风险诊断 | reference_with_gaps | 20260507–20260709（45） | gaps | pending |
| AG LS_F 完整独立路径（档案v1，样本说明已更正） | candidate | 20260507–20260831（82） | gaps | pending |
| AG LS_F 完整独立路径（说明修订v2） | candidate | 20260507–20260831（82） | gaps | pending |
| AG LS_raw 完整独立路径（档案v1，样本说明已更正） | candidate | 20260507–20260831（82） | gaps | pending |
| AG LS_raw 完整独立路径（说明修订v2） | candidate | 20260507–20260831（82） | gaps | pending |
| AG L_F 完整独立路径（档案v1，样本说明已更正） | candidate | 20260507–20260831（82） | gaps | pending |
| AG L_F 完整独立路径（说明修订v2） | candidate | 20260507–20260831（82） | gaps | pending |
| AG L_H5 完整独立路径（档案v1，样本说明已更正） | candidate | 20260507–20260831（82） | gaps | pending |
| AG L_H5 完整独立路径（说明修订v2） | candidate | 20260507–20260831（82） | gaps | pending |
| AG L_raw 完整独立路径（档案v1，样本说明已更正） | candidate | 20260507–20260831（82） | gaps | pending |
| AG L_raw 完整独立路径（说明修订v2） | candidate | 20260507–20260831（82） | gaps | pending |
| AG S_F 完整独立路径（档案v1，样本说明已更正） | candidate | 20260507–20260831（82） | gaps | pending |
| AG S_F 完整独立路径（说明修订v2） | candidate | 20260507–20260831（82） | gaps | pending |
| AG S_H5 完整独立路径（档案v1，样本说明已更正） | candidate | 20260507–20260831（82） | gaps | pending |
| AG S_H5 完整独立路径（说明修订v2） | candidate | 20260507–20260831（82） | gaps | pending |
| AG S_raw 完整独立路径（档案v1，样本说明已更正） | candidate | 20260507–20260831（82） | gaps | pending |
| AG S_raw 完整独立路径（说明修订v2） | candidate | 20260507–20260831（82） | gaps | pending |
| AU LS_F 完整独立路径（档案v1，样本说明已更正） | candidate | 20260507–20260831（82） | gaps | pending |
| AU LS_F 完整独立路径（说明修订v2） | candidate | 20260507–20260831（82） | gaps | pending |
| AU LS_raw 完整独立路径（档案v1，样本说明已更正） | candidate | 20260507–20260831（82） | gaps | pending |
| AU LS_raw 完整独立路径（说明修订v2） | candidate | 20260507–20260831（82） | gaps | pending |
| AU L_F 完整独立路径（档案v1，样本说明已更正） | candidate | 20260507–20260831（82） | gaps | pending |
| AU L_F 完整独立路径（说明修订v2） | candidate | 20260507–20260831（82） | gaps | pending |
| AU L_H5 完整独立路径（档案v1，样本说明已更正） | candidate | 20260507–20260831（82） | gaps | pending |
| AU L_H5 完整独立路径（说明修订v2） | candidate | 20260507–20260831（82） | gaps | pending |
| AU L_raw 完整独立路径（档案v1，样本说明已更正） | candidate | 20260507–20260831（82） | gaps | pending |
| AU L_raw 完整独立路径（说明修订v2） | candidate | 20260507–20260831（82） | gaps | pending |
| AU S_F 完整独立路径（档案v1，样本说明已更正） | candidate | 20260507–20260831（82） | gaps | pending |
| AU S_F 完整独立路径（说明修订v2） | candidate | 20260507–20260831（82） | gaps | pending |
| AU S_H5 完整独立路径（档案v1，样本说明已更正） | candidate | 20260507–20260831（82） | gaps | pending |
| AU S_H5 完整独立路径（说明修订v2） | candidate | 20260507–20260831（82） | gaps | pending |
| AU S_raw 完整独立路径（档案v1，样本说明已更正） | candidate | 20260507–20260831（82） | gaps | pending |
| AU S_raw 完整独立路径（说明修订v2） | candidate | 20260507–20260831（82） | gaps | pending |
| AG H5多空暂定工作基线（档案v1，样本说明已更正） | reference_with_gaps | 20260507–20260831（82） | gaps | pending |
| AG H5多空暂定工作基线（说明修订v2） | reference_with_gaps | 20260507–20260831（82） | gaps | pending |
| AG LS_H5内实际多头贡献（档案v1，样本说明已更正） | candidate | 20260507–20260831（82） | gaps | pending |
| AG LS_H5内实际多头贡献（说明修订v2） | candidate | 20260507–20260831（82） | gaps | pending |
| AG LS_H5内实际空头贡献（档案v1，样本说明已更正） | candidate | 20260507–20260831（82） | gaps | pending |
| AG LS_H5内实际空头贡献（说明修订v2） | candidate | 20260507–20260831（82） | gaps | pending |
| AU H5多空暂定工作基线（档案v1，样本说明已更正） | reference_with_gaps | 20260507–20260831（82） | gaps | pending |
| AU H5多空暂定工作基线（说明修订v2） | reference_with_gaps | 20260507–20260831（82） | gaps | pending |
| AU LS_H5内实际多头贡献（档案v1，样本说明已更正） | candidate | 20260507–20260831（82） | gaps | pending |
| AU LS_H5内实际多头贡献（说明修订v2） | candidate | 20260507–20260831（82） | gaps | pending |
| AU LS_H5内实际空头贡献（档案v1，样本说明已更正） | candidate | 20260507–20260831（82） | gaps | pending |
| AU LS_H5内实际空头贡献（说明修订v2） | candidate | 20260507–20260831（82） | gaps | pending |

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

## 纯score与原H5的单一路径比较：inconclusive

评价：exp_20261018_taker_r2_score_control_v1/R2/run-1523b94d568641a3b0dec799b13cd73c；来源运行：run-1523b94d568641a3b0dec799b13cd73c。

实际日期：20260507, 20260508, 20260511, 20260512, 20260513, 20260514, 20260515, 20260518, 20260519, 20260520, 20260521, 20260522, 20260525, 20260526, 20260527, 20260528, 20260529, 20260601, 20260602, 20260603, 20260604, 20260605, 20260608, 20260609, 20260610, 20260611, 20260612, 20260615, 20260616, 20260617, 20260618, 20260622, 20260623, 20260624, 20260625, 20260626, 20260629, 20260630, 20260701, 20260702, 20260703, 20260706, 20260707, 20260708, 20260709

| 原生指标 | 值 | 单位 | 分母 | 汇总 | 状态 |
| --- | --- | --- | --- | --- | --- |
| R2_net_cash | 3.458660199999952 | unit_cash | 45complete_trading_dates | frozen45date_comparison | known |
| R3_net_cash | 4.978629200000155 | unit_cash | 45complete_trading_dates | frozen45date_comparison | known |
| R3_minus_R2_cash | 1.519969000000203 | unit_cash | 45complete_trading_dates | frozen45date_comparison | known |
| R2_completed_trades | 1289 | trades | 45complete_trading_dates | frozen45date_comparison | known |
| R2_mean_net_bps | 0.4281187474052707 | bps_per_trade | R2completed_trades | frozen45date_comparison | known |

限制：45 dates already viewed; July7 not independent holdout；H5 threshold selected on development38；historical fitted calibration not live historical OOS；exchange+60ms modeled availability; observed deployment/latency unknown；no daily inventory MTM; daily sums attributed to exits；native proxy execution, unit quantity1 and multiplier1；interval/economic margin or stability conditions do not establish equivalence/advantage；45previously viewed dates=38development+7July; historical fitted calibration; complete native exit flow; no independent technical/research acceptance；evaluation has no readable pinned parquet facts

- PnL_path：missing_facts；no equity or account-value source is projected
- cancel_attribution：missing_facts；cancel attribution facts unavailable
- cost_breakdown：missing_facts；native crossing/fee facts unavailable
- daily_metrics：missing_facts；no timestamped daily facts
- fill_markout：missing_facts；registered fill markout/entry-edge fact is unavailable
- hourly_IC：missing_facts；no finite prediction/label pairs in pinned assets
- hourly_RankIC：missing_facts；no finite non-constant prediction/label pairs in pinned assets
- maker_fill：missing_facts；maker order/fill facts unavailable
- signal_bins：missing_facts；no registered source training-bin column

## R2历史支持已盘点；校准数字合同待确认

评价：exp_20261018_taker_r2_score_control_v1/support/run-a0dc7c5ae2a24e1794b9e5370d32f889；来源运行：run-a0dc7c5ae2a24e1794b9e5370d32f889。

实际日期：20260507, 20260508, 20260511, 20260512, 20260513, 20260514, 20260515, 20260518, 20260519, 20260520, 20260521, 20260522, 20260525, 20260526, 20260527, 20260528, 20260529, 20260601, 20260602, 20260603, 20260604, 20260605, 20260608, 20260609, 20260610, 20260611, 20260612, 20260615, 20260616, 20260617, 20260618, 20260622, 20260623, 20260624, 20260625, 20260626, 20260629, 20260630, 20260701, 20260702, 20260703, 20260706, 20260707, 20260708, 20260709

| 原生指标 | 值 | 单位 | 分母 | 汇总 | 状态 |
| --- | --- | --- | --- | --- | --- |
| folds_inventory_complete | 45 | folds | expected45 | support_inventory | known |
| first_fold_common_candidates | 331 | events | first_fold_common_candidate_pool | support_inventory | known |
| first_fold_h5_selected | 35 | events | first_fold_common331 | support_inventory | known |
| R2_net_cash | unknown | unit_cash | R2_not_run | support_inventory | unavailable |

限制：Historical fitted calibration; not live historical OOS；Model input and label-endpoint availability uses frozen proxy timestamps; observed model deployment time unknown；Numeric support/economic contract not approved；Independent technical review pending；45-fold return-blind support only; no R2 path/thresholds; no independent review or confirmation；evaluation has no readable pinned parquet facts

- PnL_path：missing_facts；no equity or account-value source is projected
- cancel_attribution：missing_facts；cancel attribution facts unavailable
- cost_breakdown：missing_facts；native crossing/fee facts unavailable
- daily_metrics：missing_facts；no timestamped daily facts
- fill_markout：missing_facts；registered fill markout/entry-edge fact is unavailable
- hourly_IC：missing_facts；no finite prediction/label pairs in pinned assets
- hourly_RankIC：missing_facts；no finite non-constant prediction/label pairs in pinned assets
- maker_fill：missing_facts；maker order/fill facts unavailable
- signal_bins：missing_facts；no registered source training-bin column

## AG F2 baseline · 延伸至2026-08-31

评价：exp_20261019_ag_au_f2_baseline_extension_v1/AG_F2_current_full82；来源运行：run-6785643239ef496db77b0bc4d26794ac。

实际日期：20260507, 20260508, 20260511, 20260512, 20260513, 20260514, 20260515, 20260518, 20260519, 20260520, 20260521, 20260522, 20260525, 20260526, 20260527, 20260528, 20260529, 20260601, 20260602, 20260603, 20260604, 20260605, 20260608, 20260609, 20260610, 20260611, 20260612, 20260615, 20260616, 20260617, 20260618, 20260622, 20260623, 20260624, 20260625, 20260626, 20260629, 20260630, 20260701, 20260702, 20260703, 20260706, 20260707, 20260708, 20260709, 20260710, 20260713, 20260714, 20260715, 20260716, 20260717, 20260720, 20260721, 20260722, 20260723, 20260724, 20260727, 20260728, 20260729, 20260730, 20260731, 20260803, 20260804, 20260805, 20260806, 20260807, 20260810, 20260811, 20260812, 20260813, 20260814, 20260817, 20260818, 20260819, 20260820, 20260821, 20260824, 20260825, 20260826, 20260827, 20260828, 20260831

| 原生指标 | 值 | 单位 | 分母 | 汇总 | 状态 |
| --- | --- | --- | --- | --- | --- |
| full82_completed_trades | 18485 | trades | full82 completed trades; unresolved inventory excluded | count | known |
| full82_mean_net_bps | -0.3788194978034555 | bps | full82 completed trades; unresolved inventory excluded | mean | known |
| full82_net_bps_sum | -7002.4784168968745 | bps | full82 completed trades; unresolved inventory excluded | sum_trade_bps | known |
| full82_gross_bps_sum | 42995.76647669842 | bps | full82 completed trades; unresolved inventory excluded | sum_trade_bps | known |
| full82_fee_bps_sum | 22182.008458565822 | bps | full82 completed trades; unresolved inventory excluded | sum_trade_bps | known |
| full82_crossing_bps_sum | 27816.236435029474 | bps | full82 completed trades; unresolved inventory excluded | sum_trade_bps | known |
| full82_win_rate | 0.4354341357857722 | ratio | full82 completed trades; unresolved inventory excluded | mean | known |
| full82_worst_1pct_trade_net_mean | -23.480521894234446 | bps | full82 completed trades; unresolved inventory excluded | mean | known |
| extension37_completed_trades | 7517 | trades | extension37 completed trades; unresolved inventory excluded | count | known |
| extension37_mean_net_bps | -0.5141453693625313 | bps | extension37 completed trades; unresolved inventory excluded | mean | known |
| extension37_net_bps_sum | -3864.830741498148 | bps | extension37 completed trades; unresolved inventory excluded | sum_trade_bps | known |
| extension37_gross_bps_sum | 16971.524934564823 | bps | extension37 completed trades; unresolved inventory excluded | sum_trade_bps | known |
| extension37_fee_bps_sum | 9020.388100391117 | bps | extension37 completed trades; unresolved inventory excluded | sum_trade_bps | known |
| extension37_crossing_bps_sum | 11815.967575671853 | bps | extension37 completed trades; unresolved inventory excluded | sum_trade_bps | known |
| extension37_win_rate | 0.4247705201543169 | ratio | extension37 completed trades; unresolved inventory excluded | mean | known |
| extension37_worst_1pct_trade_net_mean | -22.422514031317522 | bps | extension37 completed trades; unresolved inventory excluded | mean | known |
| fullperiod_net_unit_cash | -45.936595399996605 | unit cash | unit quantity1, multiplier1; only known when final inventory flat | continuous_checkpoint_cash | known |

限制：追加边界为2026-07-10；之前45日原事实与结果身份保留，新增37日沿原规则逐日拟合。；动态收益按真实完成交易统计；未解决库存不填零、不强平；完整区间现金收益仅期末flat时定义。；Binance exchange+60ms为模型可用时钟，SHFE Time为决策代理；没有新增执行延迟仿真。；旧开发样本、新日期扩展与人工研究复核分别管理；本次技术验收不代表盈利或生产晋级。；新增37日只扩展F2 native信号诊断，不补造多模型common评价池；common面板维持原历史覆盖。；82 SHFE dates 20260507–20260831; original45 immutable; append37 starts20260710; inherited inventory; new results research review pending；Source stale or incomplete; no computation.；Structured execution details remain in the private source bound by contract_hash.

- PnL_path：stale；Source identity stale or partition incomplete; derived facts withheld.
- cancel_attribution：stale；Source identity stale or partition incomplete; derived facts withheld.
- cost_breakdown：stale；Source identity stale or partition incomplete; derived facts withheld.
- daily_metrics：stale；Source identity stale or partition incomplete; derived facts withheld.
- fill_markout：stale；Source identity stale or partition incomplete; derived facts withheld.
- hourly_IC：stale；Source identity stale or partition incomplete; derived facts withheld.
- hourly_RankIC：stale；Source identity stale or partition incomplete; derived facts withheld.
- maker_fill：stale；Source identity stale or partition incomplete; derived facts withheld.
- signal_bins：stale；Source identity stale or partition incomplete; derived facts withheld.

## AG F2 baseline · 延伸至2026-08-31

评价：exp_20261019_ag_au_f2_baseline_extension_v1/AG_F2_current_full82_publication_v2；来源运行：run-6785643239ef496db77b0bc4d26794ac。

实际日期：20260507, 20260508, 20260511, 20260512, 20260513, 20260514, 20260515, 20260518, 20260519, 20260520, 20260521, 20260522, 20260525, 20260526, 20260527, 20260528, 20260529, 20260601, 20260602, 20260603, 20260604, 20260605, 20260608, 20260609, 20260610, 20260611, 20260612, 20260615, 20260616, 20260617, 20260618, 20260622, 20260623, 20260624, 20260625, 20260626, 20260629, 20260630, 20260701, 20260702, 20260703, 20260706, 20260707, 20260708, 20260709, 20260710, 20260713, 20260714, 20260715, 20260716, 20260717, 20260720, 20260721, 20260722, 20260723, 20260724, 20260727, 20260728, 20260729, 20260730, 20260731, 20260803, 20260804, 20260805, 20260806, 20260807, 20260810, 20260811, 20260812, 20260813, 20260814, 20260817, 20260818, 20260819, 20260820, 20260821, 20260824, 20260825, 20260826, 20260827, 20260828, 20260831

| 原生指标 | 值 | 单位 | 分母 | 汇总 | 状态 |
| --- | --- | --- | --- | --- | --- |
| full82_completed_trades | 18485 | trades | full82 completed trades; unresolved inventory excluded | count | known |
| full82_mean_net_bps | -0.3788194978034555 | bps | full82 completed trades; unresolved inventory excluded | mean | known |
| full82_net_bps_sum | -7002.4784168968745 | bps | full82 completed trades; unresolved inventory excluded | sum_trade_bps | known |
| full82_gross_bps_sum | 42995.76647669842 | bps | full82 completed trades; unresolved inventory excluded | sum_trade_bps | known |
| full82_fee_bps_sum | 22182.008458565822 | bps | full82 completed trades; unresolved inventory excluded | sum_trade_bps | known |
| full82_crossing_bps_sum | 27816.236435029474 | bps | full82 completed trades; unresolved inventory excluded | sum_trade_bps | known |
| full82_win_rate | 0.4354341357857722 | ratio | full82 completed trades; unresolved inventory excluded | mean | known |
| full82_worst_1pct_trade_net_mean | -23.480521894234446 | bps | full82 completed trades; unresolved inventory excluded | mean | known |
| extension37_completed_trades | 7517 | trades | extension37 completed trades; unresolved inventory excluded | count | known |
| extension37_mean_net_bps | -0.5141453693625313 | bps | extension37 completed trades; unresolved inventory excluded | mean | known |
| extension37_net_bps_sum | -3864.830741498148 | bps | extension37 completed trades; unresolved inventory excluded | sum_trade_bps | known |
| extension37_gross_bps_sum | 16971.524934564823 | bps | extension37 completed trades; unresolved inventory excluded | sum_trade_bps | known |
| extension37_fee_bps_sum | 9020.388100391117 | bps | extension37 completed trades; unresolved inventory excluded | sum_trade_bps | known |
| extension37_crossing_bps_sum | 11815.967575671853 | bps | extension37 completed trades; unresolved inventory excluded | sum_trade_bps | known |
| extension37_win_rate | 0.4247705201543169 | ratio | extension37 completed trades; unresolved inventory excluded | mean | known |
| extension37_worst_1pct_trade_net_mean | -22.422514031317522 | bps | extension37 completed trades; unresolved inventory excluded | mean | known |
| fullperiod_net_unit_cash | -45.936595399996605 | unit cash | unit quantity1, multiplier1; only known when final inventory flat | continuous_checkpoint_cash | known |

限制：追加边界为2026-07-10；之前45日原事实与结果身份保留，新增37日沿原规则逐日拟合。；动态收益按真实完成交易统计；未解决库存不填零、不强平；完整区间现金收益仅期末flat时定义。；Binance exchange+60ms为模型可用时钟，SHFE Time为决策代理；没有新增执行延迟仿真。；旧开发样本、新日期扩展与人工研究复核分别管理；本次技术验收不代表盈利或生产晋级。；新增37日只扩展F2 native信号诊断，不补造多模型common评价池；common面板维持原历史覆盖。；82 SHFE dates 20260507–20260831; original45 immutable; append37 starts20260710; inherited inventory; new results research review pending；Structured execution details remain in the private source bound by contract_hash.

- PnL_path：missing_facts；no equity or account-value source is projected
- cancel_attribution：missing_facts；cancel attribution facts unavailable
- fill_markout：missing_facts；registered fill markout/entry-edge fact is unavailable
- maker_fill：missing_facts；maker order/fill facts unavailable
- signal_bins：missing_facts；no registered source training-bin column

## AU F2 baseline · 延伸至2026-08-31

评价：exp_20261019_ag_au_f2_baseline_extension_v1/AU_F2_current_full82；来源运行：run-6785643239ef496db77b0bc4d26794ac。

实际日期：20260507, 20260508, 20260511, 20260512, 20260513, 20260514, 20260515, 20260518, 20260519, 20260520, 20260521, 20260522, 20260525, 20260526, 20260527, 20260528, 20260529, 20260601, 20260602, 20260603, 20260604, 20260605, 20260608, 20260609, 20260610, 20260611, 20260612, 20260615, 20260616, 20260617, 20260618, 20260622, 20260623, 20260624, 20260625, 20260626, 20260629, 20260630, 20260701, 20260702, 20260703, 20260706, 20260707, 20260708, 20260709, 20260710, 20260713, 20260714, 20260715, 20260716, 20260717, 20260720, 20260721, 20260722, 20260723, 20260724, 20260727, 20260728, 20260729, 20260730, 20260731, 20260803, 20260804, 20260805, 20260806, 20260807, 20260810, 20260811, 20260812, 20260813, 20260814, 20260817, 20260818, 20260819, 20260820, 20260821, 20260824, 20260825, 20260826, 20260827, 20260828, 20260831

| 原生指标 | 值 | 单位 | 分母 | 汇总 | 状态 |
| --- | --- | --- | --- | --- | --- |
| full82_completed_trades | 11247 | trades | full82 completed trades; unresolved inventory excluded | count | known |
| full82_mean_net_bps | -0.18081519410411867 | bps | full82 completed trades; unresolved inventory excluded | mean | known |
| full82_net_bps_sum | -2033.6284880890228 | bps | full82 completed trades; unresolved inventory excluded | sum_trade_bps | known |
| full82_gross_bps_sum | 11780.913774830855 | bps | full82 completed trades; unresolved inventory excluded | sum_trade_bps | known |
| full82_fee_bps_sum | 13496.439056132032 | bps | full82 completed trades; unresolved inventory excluded | sum_trade_bps | known |
| full82_crossing_bps_sum | 318.1032067878423 | bps | full82 completed trades; unresolved inventory excluded | sum_trade_bps | known |
| full82_win_rate | 0.383302213923713 | ratio | full82 completed trades; unresolved inventory excluded | mean | known |
| full82_worst_1pct_trade_net_mean | -18.104534674509843 | bps | full82 completed trades; unresolved inventory excluded | mean | known |
| extension37_completed_trades | 5060 | trades | extension37 completed trades; unresolved inventory excluded | count | known |
| extension37_mean_net_bps | -0.19016371401909707 | bps | extension37 completed trades; unresolved inventory excluded | mean | known |
| extension37_net_bps_sum | -962.2283929366312 | bps | extension37 completed trades; unresolved inventory excluded | sum_trade_bps | known |
| extension37_gross_bps_sum | 5251.057091401648 | bps | extension37 completed trades; unresolved inventory excluded | sum_trade_bps | known |
| extension37_fee_bps_sum | 6072.026400068689 | bps | extension37 completed trades; unresolved inventory excluded | sum_trade_bps | known |
| extension37_crossing_bps_sum | 141.25908426958955 | bps | extension37 completed trades; unresolved inventory excluded | sum_trade_bps | known |
| extension37_win_rate | 0.3784584980237154 | ratio | extension37 completed trades; unresolved inventory excluded | mean | known |
| extension37_worst_1pct_trade_net_mean | -20.26948871702598 | bps | extension37 completed trades; unresolved inventory excluded | mean | known |
| fullperiod_net_unit_cash | -889.5126362000874 | unit cash | unit quantity1, multiplier1; only known when final inventory flat | continuous_checkpoint_cash | known |

限制：追加边界为2026-07-10；之前45日原事实与结果身份保留，新增37日沿原规则逐日拟合。；动态收益按真实完成交易统计；未解决库存不填零、不强平；完整区间现金收益仅期末flat时定义。；Binance exchange+60ms为模型可用时钟，SHFE Time为决策代理；没有新增执行延迟仿真。；旧开发样本、新日期扩展与人工研究复核分别管理；本次技术验收不代表盈利或生产晋级。；新增37日只扩展F2 native信号诊断，不补造多模型common评价池；common面板维持原历史覆盖。；82 SHFE dates 20260507–20260831; original45 immutable; append37 starts20260710; inherited inventory; new results research review pending；Source stale or incomplete; no computation.；Structured execution details remain in the private source bound by contract_hash.

- PnL_path：stale；Source identity stale or partition incomplete; derived facts withheld.
- cancel_attribution：stale；Source identity stale or partition incomplete; derived facts withheld.
- cost_breakdown：stale；Source identity stale or partition incomplete; derived facts withheld.
- daily_metrics：stale；Source identity stale or partition incomplete; derived facts withheld.
- fill_markout：stale；Source identity stale or partition incomplete; derived facts withheld.
- hourly_IC：stale；Source identity stale or partition incomplete; derived facts withheld.
- hourly_RankIC：stale；Source identity stale or partition incomplete; derived facts withheld.
- maker_fill：stale；Source identity stale or partition incomplete; derived facts withheld.
- signal_bins：stale；Source identity stale or partition incomplete; derived facts withheld.

## AU F2 baseline · 延伸至2026-08-31

评价：exp_20261019_ag_au_f2_baseline_extension_v1/AU_F2_current_full82_publication_v2；来源运行：run-6785643239ef496db77b0bc4d26794ac。

实际日期：20260507, 20260508, 20260511, 20260512, 20260513, 20260514, 20260515, 20260518, 20260519, 20260520, 20260521, 20260522, 20260525, 20260526, 20260527, 20260528, 20260529, 20260601, 20260602, 20260603, 20260604, 20260605, 20260608, 20260609, 20260610, 20260611, 20260612, 20260615, 20260616, 20260617, 20260618, 20260622, 20260623, 20260624, 20260625, 20260626, 20260629, 20260630, 20260701, 20260702, 20260703, 20260706, 20260707, 20260708, 20260709, 20260710, 20260713, 20260714, 20260715, 20260716, 20260717, 20260720, 20260721, 20260722, 20260723, 20260724, 20260727, 20260728, 20260729, 20260730, 20260731, 20260803, 20260804, 20260805, 20260806, 20260807, 20260810, 20260811, 20260812, 20260813, 20260814, 20260817, 20260818, 20260819, 20260820, 20260821, 20260824, 20260825, 20260826, 20260827, 20260828, 20260831

| 原生指标 | 值 | 单位 | 分母 | 汇总 | 状态 |
| --- | --- | --- | --- | --- | --- |
| full82_completed_trades | 11247 | trades | full82 completed trades; unresolved inventory excluded | count | known |
| full82_mean_net_bps | -0.18081519410411867 | bps | full82 completed trades; unresolved inventory excluded | mean | known |
| full82_net_bps_sum | -2033.6284880890228 | bps | full82 completed trades; unresolved inventory excluded | sum_trade_bps | known |
| full82_gross_bps_sum | 11780.913774830855 | bps | full82 completed trades; unresolved inventory excluded | sum_trade_bps | known |
| full82_fee_bps_sum | 13496.439056132032 | bps | full82 completed trades; unresolved inventory excluded | sum_trade_bps | known |
| full82_crossing_bps_sum | 318.1032067878423 | bps | full82 completed trades; unresolved inventory excluded | sum_trade_bps | known |
| full82_win_rate | 0.383302213923713 | ratio | full82 completed trades; unresolved inventory excluded | mean | known |
| full82_worst_1pct_trade_net_mean | -18.104534674509843 | bps | full82 completed trades; unresolved inventory excluded | mean | known |
| extension37_completed_trades | 5060 | trades | extension37 completed trades; unresolved inventory excluded | count | known |
| extension37_mean_net_bps | -0.19016371401909707 | bps | extension37 completed trades; unresolved inventory excluded | mean | known |
| extension37_net_bps_sum | -962.2283929366312 | bps | extension37 completed trades; unresolved inventory excluded | sum_trade_bps | known |
| extension37_gross_bps_sum | 5251.057091401648 | bps | extension37 completed trades; unresolved inventory excluded | sum_trade_bps | known |
| extension37_fee_bps_sum | 6072.026400068689 | bps | extension37 completed trades; unresolved inventory excluded | sum_trade_bps | known |
| extension37_crossing_bps_sum | 141.25908426958955 | bps | extension37 completed trades; unresolved inventory excluded | sum_trade_bps | known |
| extension37_win_rate | 0.3784584980237154 | ratio | extension37 completed trades; unresolved inventory excluded | mean | known |
| extension37_worst_1pct_trade_net_mean | -20.26948871702598 | bps | extension37 completed trades; unresolved inventory excluded | mean | known |
| fullperiod_net_unit_cash | -889.5126362000874 | unit cash | unit quantity1, multiplier1; only known when final inventory flat | continuous_checkpoint_cash | known |

限制：追加边界为2026-07-10；之前45日原事实与结果身份保留，新增37日沿原规则逐日拟合。；动态收益按真实完成交易统计；未解决库存不填零、不强平；完整区间现金收益仅期末flat时定义。；Binance exchange+60ms为模型可用时钟，SHFE Time为决策代理；没有新增执行延迟仿真。；旧开发样本、新日期扩展与人工研究复核分别管理；本次技术验收不代表盈利或生产晋级。；新增37日只扩展F2 native信号诊断，不补造多模型common评价池；common面板维持原历史覆盖。；82 SHFE dates 20260507–20260831; original45 immutable; append37 starts20260710; inherited inventory; new results research review pending；Structured execution details remain in the private source bound by contract_hash.

- PnL_path：missing_facts；no equity or account-value source is projected
- cancel_attribution：missing_facts；cancel attribution facts unavailable
- fill_markout：missing_facts；registered fill markout/entry-edge fact is unavailable
- maker_fill：missing_facts；maker order/fill facts unavailable
- signal_bins：missing_facts；no registered source training-bin column

## H5空头与共享库存多空：inconclusive

评价：exp_20261019_ag_taker_h5_direction_extension_v1/direction/run-8046177de43245b2a0c6b1fcc5f8fdd6；来源运行：run-8046177de43245b2a0c6b1fcc5f8fdd6。

实际日期：20260507, 20260508, 20260511, 20260512, 20260513, 20260514, 20260515, 20260518, 20260519, 20260520, 20260521, 20260522, 20260525, 20260526, 20260527, 20260528, 20260529, 20260601, 20260602, 20260603, 20260604, 20260605, 20260608, 20260609, 20260610, 20260611, 20260612, 20260615, 20260616, 20260617, 20260618, 20260622, 20260623, 20260624, 20260625, 20260626, 20260629, 20260630, 20260701, 20260702, 20260703, 20260706, 20260707, 20260708, 20260709

| 原生指标 | 值 | 单位 | 分母 | 汇总 | 状态 |
| --- | --- | --- | --- | --- | --- |
| L_H5_fullperiod_net_cash | 4.978629200000155 | unit_cash | 45dates_final_inventory_disclosed | frozen45date_comparison | known |
| L_H5_completed_trades | 1383 | trades | 45dates | frozen45date_comparison | known |
| L_H5_mean_net_bps | 0.548447123440621 | bps_per_trade | completed_trades_only | frozen45date_comparison | known |
| S_F_fullperiod_net_cash | unknown | unit_cash | 45dates_final_inventory_disclosed | frozen45date_comparison | unavailable |
| S_F_completed_trades | 5484 | trades | 45dates | frozen45date_comparison | known |
| S_F_mean_net_bps | -0.2540164584460975 | bps_per_trade | completed_trades_only | frozen45date_comparison | known |
| S_H5_fullperiod_net_cash | 3.290634399999898 | unit_cash | 45dates_final_inventory_disclosed | frozen45date_comparison | known |
| S_H5_completed_trades | 1442 | trades | 45dates | frozen45date_comparison | known |
| S_H5_mean_net_bps | 0.31814056521152134 | bps_per_trade | completed_trades_only | frozen45date_comparison | known |
| LS_H5_fullperiod_net_cash | 6.5569894000000275 | unit_cash | 45dates_final_inventory_disclosed | frozen45date_comparison | known |
| LS_H5_completed_trades | 2609 | trades | 45dates | frozen45date_comparison | known |
| LS_H5_mean_net_bps | 0.3656786578912257 | bps_per_trade | completed_trades_only | frozen45date_comparison | known |
| LS_H5_minus_L_H5_cash | 1.5783601999998729 | unit_cash | paired45dates | frozen45date_comparison | known |

限制：45日期均已查看；H5开发38日上下尾已选择；无独立样本确认；区间为5日连续块2000次，未作多重比较校正；主比较预定LS_H5-L_H5；日现金按退出日归因，非每日库存盯市净值；Binance exchange+60ms为建模可用时间，实际端到端延迟未知；无额外下单延迟；费用只沿用原crossing和每边0.00006，未新增资金费、滑点或容量模型；S_F对照未匹配纯score强度和资格率，不能据此证明H5独立于score的因果增量；固定2秒响应仅为事后诊断，缺失标签单列且从未影响交易动作；S_F terminal inventory open; completed subset is not fullperiod result；Independent technical review and human research review pending；45previously viewed dates; three full decision paths; S_F final open, S_H5 and LS_H5 flat; no independent confirmation；evaluation has no readable pinned parquet facts

- PnL_path：missing_facts；no equity or account-value source is projected
- cancel_attribution：missing_facts；cancel attribution facts unavailable
- cost_breakdown：missing_facts；native crossing/fee facts unavailable
- daily_metrics：missing_facts；no timestamped daily facts
- fill_markout：missing_facts；registered fill markout/entry-edge fact is unavailable
- hourly_IC：missing_facts；no finite prediction/label pairs in pinned assets
- hourly_RankIC：missing_facts；no finite non-constant prediction/label pairs in pinned assets
- maker_fill：missing_facts；maker order/fill facts unavailable
- signal_bins：missing_facts；no registered source training-bin column

## AU A80 both：完整动态净贡献

评价：exp_20261019_au_taker_r3_direction_ab_v1/A80_AU_both/run-31387b6000ca45d5bd84dba0be22d4a8；来源运行：run-31387b6000ca45d5bd84dba0be22d4a8。

实际日期：20260507, 20260508, 20260511, 20260512, 20260513, 20260514, 20260515, 20260518, 20260519, 20260520, 20260521, 20260522, 20260525, 20260526, 20260527, 20260528, 20260529, 20260601, 20260602, 20260603, 20260604, 20260605, 20260608, 20260609, 20260610, 20260611, 20260612, 20260615, 20260616, 20260617, 20260618, 20260622, 20260623, 20260624, 20260625, 20260626, 20260629, 20260630, 20260701, 20260702, 20260703, 20260706, 20260707, 20260708, 20260709

| 原生指标 | 值 | 单位 | 分母 | 汇总 | 状态 |
| --- | --- | --- | --- | --- | --- |
| fullperiod_net_cash | 20.07213939997375 | unit_cash | full 45-day continuous inventory-resolved path | sum | known |
| daily_net_cash | 0.4460475422216389 | unit_cash/day | 45 expected trading dates | mean | known |
| mean_net_bps | 0.016695433909149567 | bp/trade | completed unit round trips | mean | known |
| completed_trades | 2770 | trades | full expected dates | count | known |
| active_days | 45 | days | expected exit-attribution dates | count | known |
| UNKNOWN | 0 | positions | terminal inventory | count | known |

限制：45日均已查看；开发38日同时用于H5定标和评价，仅探索；15路径及预定比较未经多重比较校正；区间跨零不等于等效；每日净贡献按完成退出日归属；不是持仓MTM净值；真实资金费/容量/计算部署延迟未验证；原AU prompt单独聊天不可得，合同以本轮用户明确重述及源AU分布冻结；不能声称核对未提供的旧聊天原文；AG H5 short/both未验证；未替换AU F2工作基线；45已查看日；15路径完整披露；AU自身技术自查通过，独立技术审查/人工研究复核待完成；evaluation has no readable pinned parquet facts；Structured clock details remain in the private source bound by contract_hash.；Structured inputs details remain in the private source bound by contract_hash.；Structured model_policy details remain in the private source bound by contract_hash.；Structured label details remain in the private source bound by contract_hash.；Structured execution details remain in the private source bound by contract_hash.；Structured fee_scenario details remain in the private source bound by contract_hash.；Structured denominator details remain in the private source bound by contract_hash.

- PnL_path：missing_facts；no equity or account-value source is projected
- cancel_attribution：missing_facts；cancel attribution facts unavailable
- cost_breakdown：missing_facts；native crossing/fee facts unavailable
- daily_metrics：missing_facts；no timestamped daily facts
- fill_markout：missing_facts；registered fill markout/entry-edge fact is unavailable
- hourly_IC：missing_facts；no finite prediction/label pairs in pinned assets
- hourly_RankIC：missing_facts；no finite non-constant prediction/label pairs in pinned assets
- maker_fill：missing_facts；maker order/fill facts unavailable
- signal_bins：missing_facts；no registered source training-bin column

## AU A80 long：完整动态净贡献

评价：exp_20261019_au_taker_r3_direction_ab_v1/A80_AU_long/run-31387b6000ca45d5bd84dba0be22d4a8；来源运行：run-31387b6000ca45d5bd84dba0be22d4a8。

实际日期：20260507, 20260508, 20260511, 20260512, 20260513, 20260514, 20260515, 20260518, 20260519, 20260520, 20260521, 20260522, 20260525, 20260526, 20260527, 20260528, 20260529, 20260601, 20260602, 20260603, 20260604, 20260605, 20260608, 20260609, 20260610, 20260611, 20260612, 20260615, 20260616, 20260617, 20260618, 20260622, 20260623, 20260624, 20260625, 20260626, 20260629, 20260630, 20260701, 20260702, 20260703, 20260706, 20260707, 20260708, 20260709

| 原生指标 | 值 | 单位 | 分母 | 汇总 | 状态 |
| --- | --- | --- | --- | --- | --- |
| fullperiod_net_cash | 0.1647075999818206 | unit_cash | full 45-day continuous inventory-resolved path | sum | known |
| daily_net_cash | 0.0036601688884849025 | unit_cash/day | 45 expected trading dates | mean | known |
| mean_net_bps | 0.00344147846158171 | bp/trade | completed unit round trips | mean | known |
| completed_trades | 1486 | trades | full expected dates | count | known |
| active_days | 45 | days | expected exit-attribution dates | count | known |
| UNKNOWN | 0 | positions | terminal inventory | count | known |

限制：45日均已查看；开发38日同时用于H5定标和评价，仅探索；15路径及预定比较未经多重比较校正；区间跨零不等于等效；每日净贡献按完成退出日归属；不是持仓MTM净值；真实资金费/容量/计算部署延迟未验证；原AU prompt单独聊天不可得，合同以本轮用户明确重述及源AU分布冻结；不能声称核对未提供的旧聊天原文；AG H5 short/both未验证；未替换AU F2工作基线；45已查看日；15路径完整披露；AU自身技术自查通过，独立技术审查/人工研究复核待完成；evaluation has no readable pinned parquet facts；Structured clock details remain in the private source bound by contract_hash.；Structured inputs details remain in the private source bound by contract_hash.；Structured model_policy details remain in the private source bound by contract_hash.；Structured label details remain in the private source bound by contract_hash.；Structured execution details remain in the private source bound by contract_hash.；Structured fee_scenario details remain in the private source bound by contract_hash.；Structured denominator details remain in the private source bound by contract_hash.

- PnL_path：missing_facts；no equity or account-value source is projected
- cancel_attribution：missing_facts；cancel attribution facts unavailable
- cost_breakdown：missing_facts；native crossing/fee facts unavailable
- daily_metrics：missing_facts；no timestamped daily facts
- fill_markout：missing_facts；registered fill markout/entry-edge fact is unavailable
- hourly_IC：missing_facts；no finite prediction/label pairs in pinned assets
- hourly_RankIC：missing_facts；no finite non-constant prediction/label pairs in pinned assets
- maker_fill：missing_facts；maker order/fill facts unavailable
- signal_bins：missing_facts；no registered source training-bin column

## AU A80 short：完整动态净贡献

评价：exp_20261019_au_taker_r3_direction_ab_v1/A80_AU_short/run-31387b6000ca45d5bd84dba0be22d4a8；来源运行：run-31387b6000ca45d5bd84dba0be22d4a8。

实际日期：20260507, 20260508, 20260511, 20260512, 20260513, 20260514, 20260515, 20260518, 20260519, 20260520, 20260521, 20260522, 20260525, 20260526, 20260527, 20260528, 20260529, 20260601, 20260602, 20260603, 20260604, 20260605, 20260608, 20260609, 20260610, 20260611, 20260612, 20260615, 20260616, 20260617, 20260618, 20260622, 20260623, 20260624, 20260625, 20260626, 20260629, 20260630, 20260701, 20260702, 20260703, 20260706, 20260707, 20260708, 20260709

| 原生指标 | 值 | 单位 | 分母 | 汇总 | 状态 |
| --- | --- | --- | --- | --- | --- |
| fullperiod_net_cash | -11.464414800010008 | unit_cash | full 45-day continuous inventory-resolved path | sum | known |
| daily_net_cash | -0.25476477333355574 | unit_cash/day | 45 expected trading dates | mean | known |
| mean_net_bps | -0.021709177995779406 | bp/trade | completed unit round trips | mean | known |
| completed_trades | 1482 | trades | full expected dates | count | known |
| active_days | 45 | days | expected exit-attribution dates | count | known |
| UNKNOWN | 0 | positions | terminal inventory | count | known |

限制：45日均已查看；开发38日同时用于H5定标和评价，仅探索；15路径及预定比较未经多重比较校正；区间跨零不等于等效；每日净贡献按完成退出日归属；不是持仓MTM净值；真实资金费/容量/计算部署延迟未验证；原AU prompt单独聊天不可得，合同以本轮用户明确重述及源AU分布冻结；不能声称核对未提供的旧聊天原文；AG H5 short/both未验证；未替换AU F2工作基线；45已查看日；15路径完整披露；AU自身技术自查通过，独立技术审查/人工研究复核待完成；evaluation has no readable pinned parquet facts；Structured clock details remain in the private source bound by contract_hash.；Structured inputs details remain in the private source bound by contract_hash.；Structured model_policy details remain in the private source bound by contract_hash.；Structured label details remain in the private source bound by contract_hash.；Structured execution details remain in the private source bound by contract_hash.；Structured fee_scenario details remain in the private source bound by contract_hash.；Structured denominator details remain in the private source bound by contract_hash.

- PnL_path：missing_facts；no equity or account-value source is projected
- cancel_attribution：missing_facts；cancel attribution facts unavailable
- cost_breakdown：missing_facts；native crossing/fee facts unavailable
- daily_metrics：missing_facts；no timestamped daily facts
- fill_markout：missing_facts；registered fill markout/entry-edge fact is unavailable
- hourly_IC：missing_facts；no finite prediction/label pairs in pinned assets
- hourly_RankIC：missing_facts；no finite non-constant prediction/label pairs in pinned assets
- maker_fill：missing_facts；maker order/fill facts unavailable
- signal_bins：missing_facts；no registered source training-bin column

## AU A85 both：完整动态净贡献

评价：exp_20261019_au_taker_r3_direction_ab_v1/A85_AU_both/run-31387b6000ca45d5bd84dba0be22d4a8；来源运行：run-31387b6000ca45d5bd84dba0be22d4a8。

实际日期：20260507, 20260508, 20260511, 20260512, 20260513, 20260514, 20260515, 20260518, 20260519, 20260520, 20260521, 20260522, 20260525, 20260526, 20260527, 20260528, 20260529, 20260601, 20260602, 20260603, 20260604, 20260605, 20260608, 20260609, 20260610, 20260611, 20260612, 20260615, 20260616, 20260617, 20260618, 20260622, 20260623, 20260624, 20260625, 20260626, 20260629, 20260630, 20260701, 20260702, 20260703, 20260706, 20260707, 20260708, 20260709

| 原生指标 | 值 | 单位 | 分母 | 汇总 | 状态 |
| --- | --- | --- | --- | --- | --- |
| fullperiod_net_cash | -59.19475780002838 | unit_cash | full 45-day continuous inventory-resolved path | sum | known |
| daily_net_cash | -1.315439062222853 | unit_cash/day | 45 expected trading dates | mean | known |
| mean_net_bps | -0.059627065087875006 | bp/trade | completed unit round trips | mean | known |
| completed_trades | 2107 | trades | full expected dates | count | known |
| active_days | 45 | days | expected exit-attribution dates | count | known |
| UNKNOWN | 0 | positions | terminal inventory | count | known |

限制：45日均已查看；开发38日同时用于H5定标和评价，仅探索；15路径及预定比较未经多重比较校正；区间跨零不等于等效；每日净贡献按完成退出日归属；不是持仓MTM净值；真实资金费/容量/计算部署延迟未验证；原AU prompt单独聊天不可得，合同以本轮用户明确重述及源AU分布冻结；不能声称核对未提供的旧聊天原文；AG H5 short/both未验证；未替换AU F2工作基线；45已查看日；15路径完整披露；AU自身技术自查通过，独立技术审查/人工研究复核待完成；evaluation has no readable pinned parquet facts；Structured clock details remain in the private source bound by contract_hash.；Structured inputs details remain in the private source bound by contract_hash.；Structured model_policy details remain in the private source bound by contract_hash.；Structured label details remain in the private source bound by contract_hash.；Structured execution details remain in the private source bound by contract_hash.；Structured fee_scenario details remain in the private source bound by contract_hash.；Structured denominator details remain in the private source bound by contract_hash.

- PnL_path：missing_facts；no equity or account-value source is projected
- cancel_attribution：missing_facts；cancel attribution facts unavailable
- cost_breakdown：missing_facts；native crossing/fee facts unavailable
- daily_metrics：missing_facts；no timestamped daily facts
- fill_markout：missing_facts；registered fill markout/entry-edge fact is unavailable
- hourly_IC：missing_facts；no finite prediction/label pairs in pinned assets
- hourly_RankIC：missing_facts；no finite non-constant prediction/label pairs in pinned assets
- maker_fill：missing_facts；maker order/fill facts unavailable
- signal_bins：missing_facts；no registered source training-bin column

## AU A85 long：完整动态净贡献

评价：exp_20261019_au_taker_r3_direction_ab_v1/A85_AU_long/run-31387b6000ca45d5bd84dba0be22d4a8；来源运行：run-31387b6000ca45d5bd84dba0be22d4a8。

实际日期：20260507, 20260508, 20260511, 20260512, 20260513, 20260514, 20260515, 20260518, 20260519, 20260520, 20260521, 20260522, 20260525, 20260526, 20260527, 20260528, 20260529, 20260601, 20260602, 20260603, 20260604, 20260605, 20260608, 20260609, 20260610, 20260611, 20260612, 20260615, 20260616, 20260617, 20260618, 20260622, 20260623, 20260624, 20260625, 20260626, 20260629, 20260630, 20260701, 20260702, 20260703, 20260706, 20260707, 20260708, 20260709

| 原生指标 | 值 | 单位 | 分母 | 汇总 | 状态 |
| --- | --- | --- | --- | --- | --- |
| fullperiod_net_cash | -23.14577720001843 | unit_cash | full 45-day continuous inventory-resolved path | sum | known |
| daily_net_cash | -0.514350604444854 | unit_cash/day | 45 expected trading dates | mean | known |
| mean_net_bps | -0.043888914004672035 | bp/trade | completed unit round trips | mean | known |
| completed_trades | 1130 | trades | full expected dates | count | known |
| active_days | 45 | days | expected exit-attribution dates | count | known |
| UNKNOWN | 0 | positions | terminal inventory | count | known |

限制：45日均已查看；开发38日同时用于H5定标和评价，仅探索；15路径及预定比较未经多重比较校正；区间跨零不等于等效；每日净贡献按完成退出日归属；不是持仓MTM净值；真实资金费/容量/计算部署延迟未验证；原AU prompt单独聊天不可得，合同以本轮用户明确重述及源AU分布冻结；不能声称核对未提供的旧聊天原文；AG H5 short/both未验证；未替换AU F2工作基线；45已查看日；15路径完整披露；AU自身技术自查通过，独立技术审查/人工研究复核待完成；evaluation has no readable pinned parquet facts；Structured clock details remain in the private source bound by contract_hash.；Structured inputs details remain in the private source bound by contract_hash.；Structured model_policy details remain in the private source bound by contract_hash.；Structured label details remain in the private source bound by contract_hash.；Structured execution details remain in the private source bound by contract_hash.；Structured fee_scenario details remain in the private source bound by contract_hash.；Structured denominator details remain in the private source bound by contract_hash.

- PnL_path：missing_facts；no equity or account-value source is projected
- cancel_attribution：missing_facts；cancel attribution facts unavailable
- cost_breakdown：missing_facts；native crossing/fee facts unavailable
- daily_metrics：missing_facts；no timestamped daily facts
- fill_markout：missing_facts；registered fill markout/entry-edge fact is unavailable
- hourly_IC：missing_facts；no finite prediction/label pairs in pinned assets
- hourly_RankIC：missing_facts；no finite non-constant prediction/label pairs in pinned assets
- maker_fill：missing_facts；maker order/fill facts unavailable
- signal_bins：missing_facts；no registered source training-bin column

## AU A85 short：完整动态净贡献

评价：exp_20261019_au_taker_r3_direction_ab_v1/A85_AU_short/run-31387b6000ca45d5bd84dba0be22d4a8；来源运行：run-31387b6000ca45d5bd84dba0be22d4a8。

实际日期：20260507, 20260508, 20260511, 20260512, 20260513, 20260514, 20260515, 20260518, 20260519, 20260520, 20260521, 20260522, 20260525, 20260526, 20260527, 20260528, 20260529, 20260601, 20260602, 20260603, 20260604, 20260605, 20260608, 20260609, 20260610, 20260611, 20260612, 20260615, 20260616, 20260617, 20260618, 20260622, 20260623, 20260624, 20260625, 20260626, 20260629, 20260630, 20260701, 20260702, 20260703, 20260706, 20260707, 20260708, 20260709

| 原生指标 | 值 | 单位 | 分母 | 汇总 | 状态 |
| --- | --- | --- | --- | --- | --- |
| fullperiod_net_cash | -66.7904028000111 | unit_cash | full 45-day continuous inventory-resolved path | sum | known |
| daily_net_cash | -1.4842311733335798 | unit_cash/day | 45 expected trading dates | mean | known |
| mean_net_bps | -0.13157809087159927 | bp/trade | completed unit round trips | mean | known |
| completed_trades | 1127 | trades | full expected dates | count | known |
| active_days | 45 | days | expected exit-attribution dates | count | known |
| UNKNOWN | 0 | positions | terminal inventory | count | known |

限制：45日均已查看；开发38日同时用于H5定标和评价，仅探索；15路径及预定比较未经多重比较校正；区间跨零不等于等效；每日净贡献按完成退出日归属；不是持仓MTM净值；真实资金费/容量/计算部署延迟未验证；原AU prompt单独聊天不可得，合同以本轮用户明确重述及源AU分布冻结；不能声称核对未提供的旧聊天原文；AG H5 short/both未验证；未替换AU F2工作基线；45已查看日；15路径完整披露；AU自身技术自查通过，独立技术审查/人工研究复核待完成；evaluation has no readable pinned parquet facts；Structured clock details remain in the private source bound by contract_hash.；Structured inputs details remain in the private source bound by contract_hash.；Structured model_policy details remain in the private source bound by contract_hash.；Structured label details remain in the private source bound by contract_hash.；Structured execution details remain in the private source bound by contract_hash.；Structured fee_scenario details remain in the private source bound by contract_hash.；Structured denominator details remain in the private source bound by contract_hash.

- PnL_path：missing_facts；no equity or account-value source is projected
- cancel_attribution：missing_facts；cancel attribution facts unavailable
- cost_breakdown：missing_facts；native crossing/fee facts unavailable
- daily_metrics：missing_facts；no timestamped daily facts
- fill_markout：missing_facts；registered fill markout/entry-edge fact is unavailable
- hourly_IC：missing_facts；no finite prediction/label pairs in pinned assets
- hourly_RankIC：missing_facts；no finite non-constant prediction/label pairs in pinned assets
- maker_fill：missing_facts；maker order/fill facts unavailable
- signal_bins：missing_facts；no registered source training-bin column

## AU B99 both：完整动态净贡献

评价：exp_20261019_au_taker_r3_direction_ab_v1/B99_AU_both/run-31387b6000ca45d5bd84dba0be22d4a8；来源运行：run-31387b6000ca45d5bd84dba0be22d4a8。

实际日期：20260507, 20260508, 20260511, 20260512, 20260513, 20260514, 20260515, 20260518, 20260519, 20260520, 20260521, 20260522, 20260525, 20260526, 20260527, 20260528, 20260529, 20260601, 20260602, 20260603, 20260604, 20260605, 20260608, 20260609, 20260610, 20260611, 20260612, 20260615, 20260616, 20260617, 20260618, 20260622, 20260623, 20260624, 20260625, 20260626, 20260629, 20260630, 20260701, 20260702, 20260703, 20260706, 20260707, 20260708, 20260709

| 原生指标 | 值 | 单位 | 分母 | 汇总 | 状态 |
| --- | --- | --- | --- | --- | --- |
| fullperiod_net_cash | 5.826018999994865 | unit_cash | full 45-day continuous inventory-resolved path | sum | known |
| daily_net_cash | 0.12946708888877478 | unit_cash/day | 45 expected trading dates | mean | known |
| mean_net_bps | 0.016094936075800034 | bp/trade | completed unit round trips | mean | known |
| completed_trades | 1513 | trades | full expected dates | count | known |
| active_days | 45 | days | expected exit-attribution dates | count | known |
| UNKNOWN | 0 | positions | terminal inventory | count | known |

限制：45日均已查看；开发38日同时用于H5定标和评价，仅探索；15路径及预定比较未经多重比较校正；区间跨零不等于等效；每日净贡献按完成退出日归属；不是持仓MTM净值；真实资金费/容量/计算部署延迟未验证；原AU prompt单独聊天不可得，合同以本轮用户明确重述及源AU分布冻结；不能声称核对未提供的旧聊天原文；AG H5 short/both未验证；未替换AU F2工作基线；45已查看日；15路径完整披露；AU自身技术自查通过，独立技术审查/人工研究复核待完成；evaluation has no readable pinned parquet facts；Structured clock details remain in the private source bound by contract_hash.；Structured inputs details remain in the private source bound by contract_hash.；Structured model_policy details remain in the private source bound by contract_hash.；Structured label details remain in the private source bound by contract_hash.；Structured execution details remain in the private source bound by contract_hash.；Structured fee_scenario details remain in the private source bound by contract_hash.；Structured denominator details remain in the private source bound by contract_hash.

- PnL_path：missing_facts；no equity or account-value source is projected
- cancel_attribution：missing_facts；cancel attribution facts unavailable
- cost_breakdown：missing_facts；native crossing/fee facts unavailable
- daily_metrics：missing_facts；no timestamped daily facts
- fill_markout：missing_facts；registered fill markout/entry-edge fact is unavailable
- hourly_IC：missing_facts；no finite prediction/label pairs in pinned assets
- hourly_RankIC：missing_facts；no finite non-constant prediction/label pairs in pinned assets
- maker_fill：missing_facts；maker order/fill facts unavailable
- signal_bins：missing_facts；no registered source training-bin column

## AU B99 long：完整动态净贡献

评价：exp_20261019_au_taker_r3_direction_ab_v1/B99_AU_long/run-31387b6000ca45d5bd84dba0be22d4a8；来源运行：run-31387b6000ca45d5bd84dba0be22d4a8。

实际日期：20260507, 20260508, 20260511, 20260512, 20260513, 20260514, 20260515, 20260518, 20260519, 20260520, 20260521, 20260522, 20260525, 20260526, 20260527, 20260528, 20260529, 20260601, 20260602, 20260603, 20260604, 20260605, 20260608, 20260609, 20260610, 20260611, 20260612, 20260615, 20260616, 20260617, 20260618, 20260622, 20260623, 20260624, 20260625, 20260626, 20260629, 20260630, 20260701, 20260702, 20260703, 20260706, 20260707, 20260708, 20260709

| 原生指标 | 值 | 单位 | 分母 | 汇总 | 状态 |
| --- | --- | --- | --- | --- | --- |
| fullperiod_net_cash | 23.04808219999785 | unit_cash | full 45-day continuous inventory-resolved path | sum | known |
| daily_net_cash | 0.5121796044443967 | unit_cash/day | 45 expected trading dates | mean | known |
| mean_net_bps | 0.07306484832498268 | bp/trade | completed unit round trips | mean | known |
| completed_trades | 802 | trades | full expected dates | count | known |
| active_days | 45 | days | expected exit-attribution dates | count | known |
| UNKNOWN | 0 | positions | terminal inventory | count | known |

限制：45日均已查看；开发38日同时用于H5定标和评价，仅探索；15路径及预定比较未经多重比较校正；区间跨零不等于等效；每日净贡献按完成退出日归属；不是持仓MTM净值；真实资金费/容量/计算部署延迟未验证；原AU prompt单独聊天不可得，合同以本轮用户明确重述及源AU分布冻结；不能声称核对未提供的旧聊天原文；AG H5 short/both未验证；未替换AU F2工作基线；45已查看日；15路径完整披露；AU自身技术自查通过，独立技术审查/人工研究复核待完成；evaluation has no readable pinned parquet facts；Structured clock details remain in the private source bound by contract_hash.；Structured inputs details remain in the private source bound by contract_hash.；Structured model_policy details remain in the private source bound by contract_hash.；Structured label details remain in the private source bound by contract_hash.；Structured execution details remain in the private source bound by contract_hash.；Structured fee_scenario details remain in the private source bound by contract_hash.；Structured denominator details remain in the private source bound by contract_hash.

- PnL_path：missing_facts；no equity or account-value source is projected
- cancel_attribution：missing_facts；cancel attribution facts unavailable
- cost_breakdown：missing_facts；native crossing/fee facts unavailable
- daily_metrics：missing_facts；no timestamped daily facts
- fill_markout：missing_facts；registered fill markout/entry-edge fact is unavailable
- hourly_IC：missing_facts；no finite prediction/label pairs in pinned assets
- hourly_RankIC：missing_facts；no finite non-constant prediction/label pairs in pinned assets
- maker_fill：missing_facts；maker order/fill facts unavailable
- signal_bins：missing_facts；no registered source training-bin column

## AU B99 short：完整动态净贡献

评价：exp_20261019_au_taker_r3_direction_ab_v1/B99_AU_short/run-31387b6000ca45d5bd84dba0be22d4a8；来源运行：run-31387b6000ca45d5bd84dba0be22d4a8。

实际日期：20260507, 20260508, 20260511, 20260512, 20260513, 20260514, 20260515, 20260518, 20260519, 20260520, 20260521, 20260522, 20260525, 20260526, 20260527, 20260528, 20260529, 20260601, 20260602, 20260603, 20260604, 20260605, 20260608, 20260609, 20260610, 20260611, 20260612, 20260615, 20260616, 20260617, 20260618, 20260622, 20260623, 20260624, 20260625, 20260626, 20260629, 20260630, 20260701, 20260702, 20260703, 20260706, 20260707, 20260708, 20260709

| 原生指标 | 值 | 单位 | 分母 | 汇总 | 状态 |
| --- | --- | --- | --- | --- | --- |
| fullperiod_net_cash | -40.53638780000683 | unit_cash | full 45-day continuous inventory-resolved path | sum | known |
| daily_net_cash | -0.9008086177779295 | unit_cash/day | 45 expected trading dates | mean | known |
| mean_net_bps | -0.10834570333631663 | bp/trade | completed unit round trips | mean | known |
| completed_trades | 823 | trades | full expected dates | count | known |
| active_days | 44 | days | expected exit-attribution dates | count | known |
| UNKNOWN | 0 | positions | terminal inventory | count | known |

限制：45日均已查看；开发38日同时用于H5定标和评价，仅探索；15路径及预定比较未经多重比较校正；区间跨零不等于等效；每日净贡献按完成退出日归属；不是持仓MTM净值；真实资金费/容量/计算部署延迟未验证；原AU prompt单独聊天不可得，合同以本轮用户明确重述及源AU分布冻结；不能声称核对未提供的旧聊天原文；AG H5 short/both未验证；未替换AU F2工作基线；45已查看日；15路径完整披露；AU自身技术自查通过，独立技术审查/人工研究复核待完成；evaluation has no readable pinned parquet facts；Structured clock details remain in the private source bound by contract_hash.；Structured inputs details remain in the private source bound by contract_hash.；Structured model_policy details remain in the private source bound by contract_hash.；Structured label details remain in the private source bound by contract_hash.；Structured execution details remain in the private source bound by contract_hash.；Structured fee_scenario details remain in the private source bound by contract_hash.；Structured denominator details remain in the private source bound by contract_hash.

- PnL_path：missing_facts；no equity or account-value source is projected
- cancel_attribution：missing_facts；cancel attribution facts unavailable
- cost_breakdown：missing_facts；native crossing/fee facts unavailable
- daily_metrics：missing_facts；no timestamped daily facts
- fill_markout：missing_facts；registered fill markout/entry-edge fact is unavailable
- hourly_IC：missing_facts；no finite prediction/label pairs in pinned assets
- hourly_RankIC：missing_facts；no finite non-constant prediction/label pairs in pinned assets
- maker_fill：missing_facts；maker order/fill facts unavailable
- signal_bins：missing_facts；no registered source training-bin column

## AU L both：完整动态净贡献

评价：exp_20261019_au_taker_r3_direction_ab_v1/L_AU_both/run-31387b6000ca45d5bd84dba0be22d4a8；来源运行：run-31387b6000ca45d5bd84dba0be22d4a8。

实际日期：20260507, 20260508, 20260511, 20260512, 20260513, 20260514, 20260515, 20260518, 20260519, 20260520, 20260521, 20260522, 20260525, 20260526, 20260527, 20260528, 20260529, 20260601, 20260602, 20260603, 20260604, 20260605, 20260608, 20260609, 20260610, 20260611, 20260612, 20260615, 20260616, 20260617, 20260618, 20260622, 20260623, 20260624, 20260625, 20260626, 20260629, 20260630, 20260701, 20260702, 20260703, 20260706, 20260707, 20260708, 20260709

| 原生指标 | 值 | 单位 | 分母 | 汇总 | 状态 |
| --- | --- | --- | --- | --- | --- |
| fullperiod_net_cash | -470.4406120000268 | unit_cash | full 45-day continuous inventory-resolved path | sum | known |
| daily_net_cash | -10.454235822222818 | unit_cash/day | 45 expected trading dates | mean | known |
| mean_net_bps | -0.17316956443387618 | bp/trade | completed unit round trips | mean | known |
| completed_trades | 6187 | trades | full expected dates | count | known |
| active_days | 45 | days | expected exit-attribution dates | count | known |
| UNKNOWN | 0 | positions | terminal inventory | count | known |

限制：45日均已查看；开发38日同时用于H5定标和评价，仅探索；15路径及预定比较未经多重比较校正；区间跨零不等于等效；每日净贡献按完成退出日归属；不是持仓MTM净值；真实资金费/容量/计算部署延迟未验证；原AU prompt单独聊天不可得，合同以本轮用户明确重述及源AU分布冻结；不能声称核对未提供的旧聊天原文；AG H5 short/both未验证；未替换AU F2工作基线；45已查看日；15路径完整披露；AU自身技术自查通过，独立技术审查/人工研究复核待完成；evaluation has no readable pinned parquet facts；Structured clock details remain in the private source bound by contract_hash.；Structured inputs details remain in the private source bound by contract_hash.；Structured model_policy details remain in the private source bound by contract_hash.；Structured label details remain in the private source bound by contract_hash.；Structured execution details remain in the private source bound by contract_hash.；Structured fee_scenario details remain in the private source bound by contract_hash.；Structured denominator details remain in the private source bound by contract_hash.

- PnL_path：missing_facts；no equity or account-value source is projected
- cancel_attribution：missing_facts；cancel attribution facts unavailable
- cost_breakdown：missing_facts；native crossing/fee facts unavailable
- daily_metrics：missing_facts；no timestamped daily facts
- fill_markout：missing_facts；registered fill markout/entry-edge fact is unavailable
- hourly_IC：missing_facts；no finite prediction/label pairs in pinned assets
- hourly_RankIC：missing_facts；no finite non-constant prediction/label pairs in pinned assets
- maker_fill：missing_facts；maker order/fill facts unavailable
- signal_bins：missing_facts；no registered source training-bin column

## AU L long：完整动态净贡献

评价：exp_20261019_au_taker_r3_direction_ab_v1/L_AU_long/run-31387b6000ca45d5bd84dba0be22d4a8；来源运行：run-31387b6000ca45d5bd84dba0be22d4a8。

实际日期：20260507, 20260508, 20260511, 20260512, 20260513, 20260514, 20260515, 20260518, 20260519, 20260520, 20260521, 20260522, 20260525, 20260526, 20260527, 20260528, 20260529, 20260601, 20260602, 20260603, 20260604, 20260605, 20260608, 20260609, 20260610, 20260611, 20260612, 20260615, 20260616, 20260617, 20260618, 20260622, 20260623, 20260624, 20260625, 20260626, 20260629, 20260630, 20260701, 20260702, 20260703, 20260706, 20260707, 20260708, 20260709

| 原生指标 | 值 | 单位 | 分母 | 汇总 | 状态 |
| --- | --- | --- | --- | --- | --- |
| fullperiod_net_cash | -233.4407478000094 | unit_cash | full 45-day continuous inventory-resolved path | sum | known |
| daily_net_cash | -5.1875721733335425 | unit_cash/day | 45 expected trading dates | mean | known |
| mean_net_bps | -0.15529848519925193 | bp/trade | completed unit round trips | mean | known |
| completed_trades | 3404 | trades | full expected dates | count | known |
| active_days | 45 | days | expected exit-attribution dates | count | known |
| UNKNOWN | 0 | positions | terminal inventory | count | known |

限制：45日均已查看；开发38日同时用于H5定标和评价，仅探索；15路径及预定比较未经多重比较校正；区间跨零不等于等效；每日净贡献按完成退出日归属；不是持仓MTM净值；真实资金费/容量/计算部署延迟未验证；原AU prompt单独聊天不可得，合同以本轮用户明确重述及源AU分布冻结；不能声称核对未提供的旧聊天原文；AG H5 short/both未验证；未替换AU F2工作基线；45已查看日；15路径完整披露；AU自身技术自查通过，独立技术审查/人工研究复核待完成；evaluation has no readable pinned parquet facts；Structured clock details remain in the private source bound by contract_hash.；Structured inputs details remain in the private source bound by contract_hash.；Structured model_policy details remain in the private source bound by contract_hash.；Structured label details remain in the private source bound by contract_hash.；Structured execution details remain in the private source bound by contract_hash.；Structured fee_scenario details remain in the private source bound by contract_hash.；Structured denominator details remain in the private source bound by contract_hash.

- PnL_path：missing_facts；no equity or account-value source is projected
- cancel_attribution：missing_facts；cancel attribution facts unavailable
- cost_breakdown：missing_facts；native crossing/fee facts unavailable
- daily_metrics：missing_facts；no timestamped daily facts
- fill_markout：missing_facts；registered fill markout/entry-edge fact is unavailable
- hourly_IC：missing_facts；no finite prediction/label pairs in pinned assets
- hourly_RankIC：missing_facts；no finite non-constant prediction/label pairs in pinned assets
- maker_fill：missing_facts；maker order/fill facts unavailable
- signal_bins：missing_facts；no registered source training-bin column

## AU L short：完整动态净贡献

评价：exp_20261019_au_taker_r3_direction_ab_v1/L_AU_short/run-31387b6000ca45d5bd84dba0be22d4a8；来源运行：run-31387b6000ca45d5bd84dba0be22d4a8。

实际日期：20260507, 20260508, 20260511, 20260512, 20260513, 20260514, 20260515, 20260518, 20260519, 20260520, 20260521, 20260522, 20260525, 20260526, 20260527, 20260528, 20260529, 20260601, 20260602, 20260603, 20260604, 20260605, 20260608, 20260609, 20260610, 20260611, 20260612, 20260615, 20260616, 20260617, 20260618, 20260622, 20260623, 20260624, 20260625, 20260626, 20260629, 20260630, 20260701, 20260702, 20260703, 20260706, 20260707, 20260708, 20260709

| 原生指标 | 值 | 单位 | 分母 | 汇总 | 状态 |
| --- | --- | --- | --- | --- | --- |
| fullperiod_net_cash | -239.8800416000252 | unit_cash | full 45-day continuous inventory-resolved path | sum | known |
| daily_net_cash | -5.330667591111672 | unit_cash/day | 45 expected trading dates | mean | known |
| mean_net_bps | -0.16886468190643913 | bp/trade | completed unit round trips | mean | known |
| completed_trades | 3225 | trades | full expected dates | count | known |
| active_days | 45 | days | expected exit-attribution dates | count | known |
| UNKNOWN | 0 | positions | terminal inventory | count | known |

限制：45日均已查看；开发38日同时用于H5定标和评价，仅探索；15路径及预定比较未经多重比较校正；区间跨零不等于等效；每日净贡献按完成退出日归属；不是持仓MTM净值；真实资金费/容量/计算部署延迟未验证；原AU prompt单独聊天不可得，合同以本轮用户明确重述及源AU分布冻结；不能声称核对未提供的旧聊天原文；AG H5 short/both未验证；未替换AU F2工作基线；45已查看日；15路径完整披露；AU自身技术自查通过，独立技术审查/人工研究复核待完成；evaluation has no readable pinned parquet facts；Structured clock details remain in the private source bound by contract_hash.；Structured inputs details remain in the private source bound by contract_hash.；Structured model_policy details remain in the private source bound by contract_hash.；Structured label details remain in the private source bound by contract_hash.；Structured execution details remain in the private source bound by contract_hash.；Structured fee_scenario details remain in the private source bound by contract_hash.；Structured denominator details remain in the private source bound by contract_hash.

- PnL_path：missing_facts；no equity or account-value source is projected
- cancel_attribution：missing_facts；cancel attribution facts unavailable
- cost_breakdown：missing_facts；native crossing/fee facts unavailable
- daily_metrics：missing_facts；no timestamped daily facts
- fill_markout：missing_facts；registered fill markout/entry-edge fact is unavailable
- hourly_IC：missing_facts；no finite prediction/label pairs in pinned assets
- hourly_RankIC：missing_facts；no finite non-constant prediction/label pairs in pinned assets
- maker_fill：missing_facts；maker order/fill facts unavailable
- signal_bins：missing_facts；no registered source training-bin column

## AU R3 both：完整动态净贡献

评价：exp_20261019_au_taker_r3_direction_ab_v1/R3_AU_both/run-31387b6000ca45d5bd84dba0be22d4a8；来源运行：run-31387b6000ca45d5bd84dba0be22d4a8。

实际日期：20260507, 20260508, 20260511, 20260512, 20260513, 20260514, 20260515, 20260518, 20260519, 20260520, 20260521, 20260522, 20260525, 20260526, 20260527, 20260528, 20260529, 20260601, 20260602, 20260603, 20260604, 20260605, 20260608, 20260609, 20260610, 20260611, 20260612, 20260615, 20260616, 20260617, 20260618, 20260622, 20260623, 20260624, 20260625, 20260626, 20260629, 20260630, 20260701, 20260702, 20260703, 20260706, 20260707, 20260708, 20260709

| 原生指标 | 值 | 单位 | 分母 | 汇总 | 状态 |
| --- | --- | --- | --- | --- | --- |
| fullperiod_net_cash | 7.9621419999950955 | unit_cash | full 45-day continuous inventory-resolved path | sum | known |
| daily_net_cash | 0.1769364888887799 | unit_cash/day | 45 expected trading dates | mean | known |
| mean_net_bps | 0.021195348290140553 | bp/trade | completed unit round trips | mean | known |
| completed_trades | 1434 | trades | full expected dates | count | known |
| active_days | 45 | days | expected exit-attribution dates | count | known |
| UNKNOWN | 0 | positions | terminal inventory | count | known |

限制：45日均已查看；开发38日同时用于H5定标和评价，仅探索；15路径及预定比较未经多重比较校正；区间跨零不等于等效；每日净贡献按完成退出日归属；不是持仓MTM净值；真实资金费/容量/计算部署延迟未验证；原AU prompt单独聊天不可得，合同以本轮用户明确重述及源AU分布冻结；不能声称核对未提供的旧聊天原文；AG H5 short/both未验证；未替换AU F2工作基线；45已查看日；15路径完整披露；AU自身技术自查通过，独立技术审查/人工研究复核待完成；evaluation has no readable pinned parquet facts；Structured clock details remain in the private source bound by contract_hash.；Structured inputs details remain in the private source bound by contract_hash.；Structured model_policy details remain in the private source bound by contract_hash.；Structured label details remain in the private source bound by contract_hash.；Structured execution details remain in the private source bound by contract_hash.；Structured fee_scenario details remain in the private source bound by contract_hash.；Structured denominator details remain in the private source bound by contract_hash.

- PnL_path：missing_facts；no equity or account-value source is projected
- cancel_attribution：missing_facts；cancel attribution facts unavailable
- cost_breakdown：missing_facts；native crossing/fee facts unavailable
- daily_metrics：missing_facts；no timestamped daily facts
- fill_markout：missing_facts；registered fill markout/entry-edge fact is unavailable
- hourly_IC：missing_facts；no finite prediction/label pairs in pinned assets
- hourly_RankIC：missing_facts；no finite non-constant prediction/label pairs in pinned assets
- maker_fill：missing_facts；maker order/fill facts unavailable
- signal_bins：missing_facts；no registered source training-bin column

## AU R3 long：完整动态净贡献

评价：exp_20261019_au_taker_r3_direction_ab_v1/R3_AU_long/run-31387b6000ca45d5bd84dba0be22d4a8；来源运行：run-31387b6000ca45d5bd84dba0be22d4a8。

实际日期：20260507, 20260508, 20260511, 20260512, 20260513, 20260514, 20260515, 20260518, 20260519, 20260520, 20260521, 20260522, 20260525, 20260526, 20260527, 20260528, 20260529, 20260601, 20260602, 20260603, 20260604, 20260605, 20260608, 20260609, 20260610, 20260611, 20260612, 20260615, 20260616, 20260617, 20260618, 20260622, 20260623, 20260624, 20260625, 20260626, 20260629, 20260630, 20260701, 20260702, 20260703, 20260706, 20260707, 20260708, 20260709

| 原生指标 | 值 | 单位 | 分母 | 汇总 | 状态 |
| --- | --- | --- | --- | --- | --- |
| fullperiod_net_cash | 21.95988159999623 | unit_cash | full 45-day continuous inventory-resolved path | sum | known |
| daily_net_cash | 0.4879973688888051 | unit_cash/day | 45 expected trading dates | mean | known |
| mean_net_bps | 0.07386836773419449 | bp/trade | completed unit round trips | mean | known |
| completed_trades | 766 | trades | full expected dates | count | known |
| active_days | 45 | days | expected exit-attribution dates | count | known |
| UNKNOWN | 0 | positions | terminal inventory | count | known |

限制：45日均已查看；开发38日同时用于H5定标和评价，仅探索；15路径及预定比较未经多重比较校正；区间跨零不等于等效；每日净贡献按完成退出日归属；不是持仓MTM净值；真实资金费/容量/计算部署延迟未验证；原AU prompt单独聊天不可得，合同以本轮用户明确重述及源AU分布冻结；不能声称核对未提供的旧聊天原文；AG H5 short/both未验证；未替换AU F2工作基线；45已查看日；15路径完整披露；AU自身技术自查通过，独立技术审查/人工研究复核待完成；evaluation has no readable pinned parquet facts；Structured clock details remain in the private source bound by contract_hash.；Structured inputs details remain in the private source bound by contract_hash.；Structured model_policy details remain in the private source bound by contract_hash.；Structured label details remain in the private source bound by contract_hash.；Structured execution details remain in the private source bound by contract_hash.；Structured fee_scenario details remain in the private source bound by contract_hash.；Structured denominator details remain in the private source bound by contract_hash.

- PnL_path：missing_facts；no equity or account-value source is projected
- cancel_attribution：missing_facts；cancel attribution facts unavailable
- cost_breakdown：missing_facts；native crossing/fee facts unavailable
- daily_metrics：missing_facts；no timestamped daily facts
- fill_markout：missing_facts；registered fill markout/entry-edge fact is unavailable
- hourly_IC：missing_facts；no finite prediction/label pairs in pinned assets
- hourly_RankIC：missing_facts；no finite non-constant prediction/label pairs in pinned assets
- maker_fill：missing_facts；maker order/fill facts unavailable
- signal_bins：missing_facts；no registered source training-bin column

## AU R3 short：完整动态净贡献

评价：exp_20261019_au_taker_r3_direction_ab_v1/R3_AU_short/run-31387b6000ca45d5bd84dba0be22d4a8；来源运行：run-31387b6000ca45d5bd84dba0be22d4a8。

实际日期：20260507, 20260508, 20260511, 20260512, 20260513, 20260514, 20260515, 20260518, 20260519, 20260520, 20260521, 20260522, 20260525, 20260526, 20260527, 20260528, 20260529, 20260601, 20260602, 20260603, 20260604, 20260605, 20260608, 20260609, 20260610, 20260611, 20260612, 20260615, 20260616, 20260617, 20260618, 20260622, 20260623, 20260624, 20260625, 20260626, 20260629, 20260630, 20260701, 20260702, 20260703, 20260706, 20260707, 20260708, 20260709

| 原生指标 | 值 | 单位 | 分母 | 汇总 | 状态 |
| --- | --- | --- | --- | --- | --- |
| fullperiod_net_cash | -38.725669600003044 | unit_cash | full 45-day continuous inventory-resolved path | sum | known |
| daily_net_cash | -0.8605704355556232 | unit_cash/day | 45 expected trading dates | mean | known |
| mean_net_bps | -0.11047274439055328 | bp/trade | completed unit round trips | mean | known |
| completed_trades | 766 | trades | full expected dates | count | known |
| active_days | 44 | days | expected exit-attribution dates | count | known |
| UNKNOWN | 0 | positions | terminal inventory | count | known |

限制：45日均已查看；开发38日同时用于H5定标和评价，仅探索；15路径及预定比较未经多重比较校正；区间跨零不等于等效；每日净贡献按完成退出日归属；不是持仓MTM净值；真实资金费/容量/计算部署延迟未验证；原AU prompt单独聊天不可得，合同以本轮用户明确重述及源AU分布冻结；不能声称核对未提供的旧聊天原文；AG H5 short/both未验证；未替换AU F2工作基线；45已查看日；15路径完整披露；AU自身技术自查通过，独立技术审查/人工研究复核待完成；evaluation has no readable pinned parquet facts；Structured clock details remain in the private source bound by contract_hash.；Structured inputs details remain in the private source bound by contract_hash.；Structured model_policy details remain in the private source bound by contract_hash.；Structured label details remain in the private source bound by contract_hash.；Structured execution details remain in the private source bound by contract_hash.；Structured fee_scenario details remain in the private source bound by contract_hash.；Structured denominator details remain in the private source bound by contract_hash.

- PnL_path：missing_facts；no equity or account-value source is projected
- cancel_attribution：missing_facts；cancel attribution facts unavailable
- cost_breakdown：missing_facts；native crossing/fee facts unavailable
- daily_metrics：missing_facts；no timestamped daily facts
- fill_markout：missing_facts；registered fill markout/entry-edge fact is unavailable
- hourly_IC：missing_facts；no finite prediction/label pairs in pinned assets
- hourly_RankIC：missing_facts；no finite non-constant prediction/label pairs in pinned assets
- maker_fill：missing_facts；maker order/fill facts unavailable
- signal_bins：missing_facts；no registered source training-bin column

## AG/AU R3差距：收益尺度、预测支持与风险诊断

评价：exp_20261020_ag_au_r3_gap_diagnosis_v1/comparison/run-e3ea12a8d46545658e7a3e97f34987a6；来源运行：run-e3ea12a8d46545658e7a3e97f34987a6。

实际日期：20260507, 20260508, 20260511, 20260512, 20260513, 20260514, 20260515, 20260518, 20260519, 20260520, 20260521, 20260522, 20260525, 20260526, 20260527, 20260528, 20260529, 20260601, 20260602, 20260603, 20260604, 20260605, 20260608, 20260609, 20260610, 20260611, 20260612, 20260615, 20260616, 20260617, 20260618, 20260622, 20260623, 20260624, 20260625, 20260626, 20260629, 20260630, 20260701, 20260702, 20260703, 20260706, 20260707, 20260708, 20260709

| 原生指标 | 值 | 单位 | 分母 | 汇总 | 状态 |
| --- | --- | --- | --- | --- | --- |
| AG_R3_net_bp | 0.548447123440621 | bp/trade | completed R3 long trades | mean | known |
| AG_R3_n | 1383 | trades | 45 dates | count | known |
| AU_R3_net_bp | 0.07386836773419449 | bp/trade | completed R3 long trades | mean | known |
| AU_R3_n | 766 | trades | 45 dates | count | known |

限制：无法唯一分离symbol与因子因果效应；IC、固定2秒label与动态执行收益分别报告；独立技术审查和人工复核pending；两产品45已查看日；缓存诊断，无新训练/回放；因果归因与独立确认不充分；evaluation has no readable pinned parquet facts；Structured inputs details remain in the private source bound by contract_hash.；Structured model_policy details remain in the private source bound by contract_hash.；Structured label details remain in the private source bound by contract_hash.；Structured execution details remain in the private source bound by contract_hash.；Structured fee_scenario details remain in the private source bound by contract_hash.

- PnL_path：missing_facts；no equity or account-value source is projected
- cancel_attribution：missing_facts；cancel attribution facts unavailable
- cost_breakdown：missing_facts；native crossing/fee facts unavailable
- daily_metrics：missing_facts；no timestamped daily facts
- fill_markout：missing_facts；registered fill markout/entry-edge fact is unavailable
- hourly_IC：missing_facts；no finite prediction/label pairs in pinned assets
- hourly_RankIC：missing_facts；no finite non-constant prediction/label pairs in pinned assets
- maker_fill：missing_facts；maker order/fill facts unavailable
- signal_bins：missing_facts；no registered source training-bin column

## AG LS_F 完整独立路径（档案v1，样本说明已更正）

评价：exp_20261021_ag_au_h5_extension_20260831_v1/AG_LS_F_full82/full82_v1；来源运行：run-27b913988332403fa8565619a651fafd。

实际日期：20260507, 20260508, 20260511, 20260512, 20260513, 20260514, 20260515, 20260518, 20260519, 20260520, 20260521, 20260522, 20260525, 20260526, 20260527, 20260528, 20260529, 20260601, 20260602, 20260603, 20260604, 20260605, 20260608, 20260609, 20260610, 20260611, 20260612, 20260615, 20260616, 20260617, 20260618, 20260622, 20260623, 20260624, 20260625, 20260626, 20260629, 20260630, 20260701, 20260702, 20260703, 20260706, 20260707, 20260708, 20260709, 20260710, 20260713, 20260714, 20260715, 20260716, 20260717, 20260720, 20260721, 20260722, 20260723, 20260724, 20260727, 20260728, 20260729, 20260730, 20260731, 20260803, 20260804, 20260805, 20260806, 20260807, 20260810, 20260811, 20260812, 20260813, 20260814, 20260817, 20260818, 20260819, 20260820, 20260821, 20260824, 20260825, 20260826, 20260827, 20260828, 20260831

| 原生指标 | 值 | 单位 | 分母 | 汇总 | 状态 |
| --- | --- | --- | --- | --- | --- |
| full82_net_cash | -46.0725819999989 | unit_cash | 82 verified dates, flat terminal path only | sum | known |
| full82_mean_net_bps | -0.38681680870831114 | bp/trade | completed unit round trips | mean | known |
| completed_trades | 18079 | trades | 82 verified expected dates | count | known |
| terminal_unknown_inventory | 0 | positions | parent path terminal inventory | count | known |
| original45_completed_subset_cash | -22.156732399999548 | unit_cash | completed exits in original45 | sum | known |
| original45_mean_net_bps | -0.29948924370897345 | bp/trade | completed exits in original45 | mean | known |
| original45_completed_trades | 10737 | trades | completed exits in original45 | count | known |
| original45_fill_cashflow | 36.88972459999932 | unit_cash | actual fills during original45; cashflow with inventory, not MTM or completed profit | sum | known |
| original45_daily_cash_ci_low | -0.7675984016666578 | unit_cash/day | 5-day blocks 2000 seed20261013 | bootstrap_2.5pct | known |
| original45_daily_cash_ci_high | -0.20394598033332764 | unit_cash/day | 5-day blocks 2000 seed20261013 | bootstrap_97.5pct | known |
| extension37_completed_subset_cash | -23.915849599999348 | unit_cash | completed exits in extension37 | sum | known |
| extension37_mean_net_bps | -0.5145253439027935 | bp/trade | completed exits in extension37 | mean | known |
| extension37_completed_trades | 7342 | trades | completed exits in extension37 | count | known |
| extension37_fill_cashflow | -82.9623065999999 | unit_cash | actual fills during extension37; cashflow with inventory, not MTM or completed profit | sum | known |
| extension37_daily_cash_ci_low | -0.8761726622972631 | unit_cash/day | 5-day blocks 2000 seed20261013 | bootstrap_2.5pct | known |
| extension37_daily_cash_ci_high | -0.32501432405403885 | unit_cash/day | 5-day blocks 2000 seed20261013 | bootstrap_97.5pct | known |
| full82_completed_subset_cash | -46.0725819999989 | unit_cash | completed exits in full82 | sum | known |
| full82_mean_net_bps | -0.38681680870831114 | bp/trade | completed exits in full82 | mean | known |
| full82_completed_trades | 18079 | trades | completed exits in full82 | count | known |
| full82_fill_cashflow | -46.072582000000885 | unit_cash | actual fills during full82; cashflow with inventory, not MTM or completed profit | sum | known |
| full82_daily_cash_ci_low | -0.7287234986585204 | unit_cash/day | 5-day blocks 2000 seed20261013 | bootstrap_2.5pct | known |
| full82_daily_cash_ci_high | -0.32871704560974335 | unit_cash/day | 5-day blocks 2000 seed20261013 | bootstrap_97.5pct | known |
| development38_completed_subset_cash | -20.95684059999968 | unit_cash | completed exits in development38 | sum | known |
| development38_mean_net_bps | -0.3079881126808004 | bp/trade | completed exits in development38 | mean | known |
| development38_completed_trades | 9792 | trades | completed exits in development38 | count | known |
| development38_fill_cashflow | -20.956840600001478 | unit_cash | actual fills during development38; cashflow with inventory, not MTM or completed profit | sum | known |
| development38_daily_cash_ci_low | -0.8090566827631359 | unit_cash/day | 5-day blocks 2000 seed20261013 | bootstrap_2.5pct | known |
| development38_daily_cash_ci_high | -0.17998305802631384 | unit_cash/day | 5-day blocks 2000 seed20261013 | bootstrap_97.5pct | known |
| viewedJuly7_completed_subset_cash | -1.1998917999998697 | unit_cash | completed exits in viewedJuly7 | sum | known |
| viewedJuly7_mean_net_bps | -0.21142477283899486 | bp/trade | completed exits in viewedJuly7 | mean | known |
| viewedJuly7_completed_trades | 945 | trades | completed exits in viewedJuly7 | count | known |
| viewedJuly7_fill_cashflow | 57.84656520000056 | unit_cash | actual fills during viewedJuly7; cashflow with inventory, not MTM or completed profit | sum | known |
| viewedJuly7_daily_cash_ci_low | -0.2287136857142669 | unit_cash/day | 5-day blocks 2000 seed20261013 | bootstrap_2.5pct | known |
| viewedJuly7_daily_cash_ci_high | -0.10494439999998566 | unit_cash/day | 5-day blocks 2000 seed20261013 | bootstrap_97.5pct | known |
| July_extension_completed_subset_cash | -7.185478799999881 | unit_cash | completed exits in July_extension | sum | known |
| July_extension_mean_net_bps | -0.6720293454277759 | bp/trade | completed exits in July_extension | mean | known |
| July_extension_completed_trades | 1841 | trades | completed exits in July_extension | count | known |
| July_extension_fill_cashflow | -66.23193579999895 | unit_cash | actual fills during July_extension; cashflow with inventory, not MTM or completed profit | sum | known |
| July_extension_daily_cash_ci_low | -0.6835859543749875 | unit_cash/day | 5-day blocks 2000 seed20261013 | bootstrap_2.5pct | known |
| July_extension_daily_cash_ci_high | -0.22166732187499394 | unit_cash/day | 5-day blocks 2000 seed20261013 | bootstrap_97.5pct | known |
| August_completed_subset_cash | -16.730370799999466 | unit_cash | completed exits in August | sum | known |
| August_mean_net_bps | -0.4618140429016132 | bp/trade | completed exits in August | mean | known |
| August_completed_trades | 5501 | trades | completed exits in August | count | known |
| August_fill_cashflow | -16.730370799999257 | unit_cash | actual fills during August; cashflow with inventory, not MTM or completed profit | sum | known |
| August_daily_cash_ci_low | -1.151295824523779 | unit_cash/day | 5-day blocks 2000 seed20261013 | bootstrap_2.5pct | known |
| August_daily_cash_ci_high | -0.4092036188095064 | unit_cash/day | 5-day blocks 2000 seed20261013 | bootstrap_97.5pct | known |
| cross_date_trades | 6 | trades | completed unit round trips | count | known |
| holding_occupancy_seconds | 1215621.4139999999 | s | sum of completed inventory holding times | sum | known |
| remove_best_day_cash | -46.97366459999899 | unit_cash | 82-day completed subset less best exit day | sum | known |
| remove_best_trade_cash | -47.26463559999889 | unit_cash | completed subset less best trade | sum | known |

限制：原45日已查看；新增37日已在F2扩展研究中查看，不是独立holdout；差距诊断仅覆盖原45日；现金按退出日归因；成交现金流另列，均不是账户MTM；未作多重比较校正；区间跨零不等于等效；固定费用和proxy时钟，不包含资金费和真实执行容量验证；暂定工作基线是用户指定比较对象，不代表收益优越或人工研究接受；入场筛选后信号统计单列，不冒充完整F2信号统计；实际fill后固定2秒响应未恢复时明确缺口，不新增策略条件；独立完整路径对照。；期末状态 flat；未知库存 0；原45日AU空头亏损、多空低于多头及利润集中事实保留于原报告。；技术自查通过；独立技术审查pending，人工研究复核pending。；82 verified expected dates, 45 original +37 extension; exploratory viewed data; unknown inventory separately disclosed

- PnL_path：missing_facts；no equity or account-value source is projected
- cancel_attribution：missing_facts；cancel attribution facts unavailable
- fill_markout：missing_facts；registered fill markout/entry-edge fact is unavailable
- maker_fill：missing_facts；maker order/fill facts unavailable
- signal_bins：missing_facts；no registered source training-bin column

## AG LS_F 完整独立路径（说明修订v2）

评价：exp_20261021_ag_au_h5_extension_20260831_v1/AG_LS_F_full82/full82_v2；来源运行：run-27b913988332403fa8565619a651fafd。

实际日期：20260507, 20260508, 20260511, 20260512, 20260513, 20260514, 20260515, 20260518, 20260519, 20260520, 20260521, 20260522, 20260525, 20260526, 20260527, 20260528, 20260529, 20260601, 20260602, 20260603, 20260604, 20260605, 20260608, 20260609, 20260610, 20260611, 20260612, 20260615, 20260616, 20260617, 20260618, 20260622, 20260623, 20260624, 20260625, 20260626, 20260629, 20260630, 20260701, 20260702, 20260703, 20260706, 20260707, 20260708, 20260709, 20260710, 20260713, 20260714, 20260715, 20260716, 20260717, 20260720, 20260721, 20260722, 20260723, 20260724, 20260727, 20260728, 20260729, 20260730, 20260731, 20260803, 20260804, 20260805, 20260806, 20260807, 20260810, 20260811, 20260812, 20260813, 20260814, 20260817, 20260818, 20260819, 20260820, 20260821, 20260824, 20260825, 20260826, 20260827, 20260828, 20260831

| 原生指标 | 值 | 单位 | 分母 | 汇总 | 状态 |
| --- | --- | --- | --- | --- | --- |
| full82_net_cash | -46.0725819999989 | unit_cash | 82 verified dates, flat terminal path only | sum | known |
| full82_mean_net_bps | -0.38681680870831114 | bp/trade | completed unit round trips | mean | known |
| completed_trades | 18079 | trades | 82 verified expected dates | count | known |
| terminal_unknown_inventory | 0 | positions | parent path terminal inventory | count | known |
| original45_completed_subset_cash | -22.156732399999548 | unit_cash | completed exits in original45 | sum | known |
| original45_mean_net_bps | -0.29948924370897345 | bp/trade | completed exits in original45 | mean | known |
| original45_completed_trades | 10737 | trades | completed exits in original45 | count | known |
| original45_fill_cashflow | 36.88972459999932 | unit_cash | actual fills during original45; cashflow with inventory, not MTM or completed profit | sum | known |
| original45_daily_cash_ci_low | -0.7675984016666578 | unit_cash/day | 5-day blocks 2000 seed20261013 | bootstrap_2.5pct | known |
| original45_daily_cash_ci_high | -0.20394598033332764 | unit_cash/day | 5-day blocks 2000 seed20261013 | bootstrap_97.5pct | known |
| extension37_completed_subset_cash | -23.915849599999348 | unit_cash | completed exits in extension37 | sum | known |
| extension37_mean_net_bps | -0.5145253439027935 | bp/trade | completed exits in extension37 | mean | known |
| extension37_completed_trades | 7342 | trades | completed exits in extension37 | count | known |
| extension37_fill_cashflow | -82.9623065999999 | unit_cash | actual fills during extension37; cashflow with inventory, not MTM or completed profit | sum | known |
| extension37_daily_cash_ci_low | -0.8761726622972631 | unit_cash/day | 5-day blocks 2000 seed20261013 | bootstrap_2.5pct | known |
| extension37_daily_cash_ci_high | -0.32501432405403885 | unit_cash/day | 5-day blocks 2000 seed20261013 | bootstrap_97.5pct | known |
| full82_completed_subset_cash | -46.0725819999989 | unit_cash | completed exits in full82 | sum | known |
| full82_mean_net_bps | -0.38681680870831114 | bp/trade | completed exits in full82 | mean | known |
| full82_completed_trades | 18079 | trades | completed exits in full82 | count | known |
| full82_fill_cashflow | -46.072582000000885 | unit_cash | actual fills during full82; cashflow with inventory, not MTM or completed profit | sum | known |
| full82_daily_cash_ci_low | -0.7287234986585204 | unit_cash/day | 5-day blocks 2000 seed20261013 | bootstrap_2.5pct | known |
| full82_daily_cash_ci_high | -0.32871704560974335 | unit_cash/day | 5-day blocks 2000 seed20261013 | bootstrap_97.5pct | known |
| development38_completed_subset_cash | -20.95684059999968 | unit_cash | completed exits in development38 | sum | known |
| development38_mean_net_bps | -0.3079881126808004 | bp/trade | completed exits in development38 | mean | known |
| development38_completed_trades | 9792 | trades | completed exits in development38 | count | known |
| development38_fill_cashflow | -20.956840600001478 | unit_cash | actual fills during development38; cashflow with inventory, not MTM or completed profit | sum | known |
| development38_daily_cash_ci_low | -0.8090566827631359 | unit_cash/day | 5-day blocks 2000 seed20261013 | bootstrap_2.5pct | known |
| development38_daily_cash_ci_high | -0.17998305802631384 | unit_cash/day | 5-day blocks 2000 seed20261013 | bootstrap_97.5pct | known |
| viewedJuly7_completed_subset_cash | -1.1998917999998697 | unit_cash | completed exits in viewedJuly7 | sum | known |
| viewedJuly7_mean_net_bps | -0.21142477283899486 | bp/trade | completed exits in viewedJuly7 | mean | known |
| viewedJuly7_completed_trades | 945 | trades | completed exits in viewedJuly7 | count | known |
| viewedJuly7_fill_cashflow | 57.84656520000056 | unit_cash | actual fills during viewedJuly7; cashflow with inventory, not MTM or completed profit | sum | known |
| viewedJuly7_daily_cash_ci_low | -0.2287136857142669 | unit_cash/day | 5-day blocks 2000 seed20261013 | bootstrap_2.5pct | known |
| viewedJuly7_daily_cash_ci_high | -0.10494439999998566 | unit_cash/day | 5-day blocks 2000 seed20261013 | bootstrap_97.5pct | known |
| July_extension_completed_subset_cash | -7.185478799999881 | unit_cash | completed exits in July_extension | sum | known |
| July_extension_mean_net_bps | -0.6720293454277759 | bp/trade | completed exits in July_extension | mean | known |
| July_extension_completed_trades | 1841 | trades | completed exits in July_extension | count | known |
| July_extension_fill_cashflow | -66.23193579999895 | unit_cash | actual fills during July_extension; cashflow with inventory, not MTM or completed profit | sum | known |
| July_extension_daily_cash_ci_low | -0.6835859543749875 | unit_cash/day | 5-day blocks 2000 seed20261013 | bootstrap_2.5pct | known |
| July_extension_daily_cash_ci_high | -0.22166732187499394 | unit_cash/day | 5-day blocks 2000 seed20261013 | bootstrap_97.5pct | known |
| August_completed_subset_cash | -16.730370799999466 | unit_cash | completed exits in August | sum | known |
| August_mean_net_bps | -0.4618140429016132 | bp/trade | completed exits in August | mean | known |
| August_completed_trades | 5501 | trades | completed exits in August | count | known |
| August_fill_cashflow | -16.730370799999257 | unit_cash | actual fills during August; cashflow with inventory, not MTM or completed profit | sum | known |
| August_daily_cash_ci_low | -1.151295824523779 | unit_cash/day | 5-day blocks 2000 seed20261013 | bootstrap_2.5pct | known |
| August_daily_cash_ci_high | -0.4092036188095064 | unit_cash/day | 5-day blocks 2000 seed20261013 | bootstrap_97.5pct | known |
| cross_date_trades | 6 | trades | completed unit round trips | count | known |
| holding_occupancy_seconds | 1215621.4139999999 | s | sum of completed inventory holding times | sum | known |
| remove_best_day_cash | -46.97366459999899 | unit_cash | 82-day completed subset less best exit day | sum | known |
| remove_best_trade_cash | -47.26463559999889 | unit_cash | completed subset less best trade | sum | known |

限制：原45日已查看；新增37日已在F2扩展研究中查看，不是独立holdout；差距诊断仅覆盖原45日；现金按退出日归因；成交现金流另列，均不是账户MTM；未作多重比较校正；区间跨零不等于等效；固定费用和proxy时钟，不包含资金费和真实执行容量验证；暂定工作基线是用户指定比较对象，不代表收益优越或人工研究接受；入场筛选后信号统计单列，不冒充完整F2信号统计；实际fill后固定2秒响应未恢复时明确缺口，不新增策略条件；独立完整路径对照。；期末状态 flat；未知库存 0；原45日AU空头亏损、多空低于多头及利润集中事实保留于原报告。；技术自查通过；独立技术审查pending，人工研究复核pending。；本版仅修正已查看样本的来源说明；原v1保留档案，所有策略与数值指标相同。；82 verified expected dates, 45 original +37 extension; exploratory viewed data; unknown inventory separately disclosed

- PnL_path：missing_facts；no equity or account-value source is projected
- cancel_attribution：missing_facts；cancel attribution facts unavailable
- fill_markout：missing_facts；registered fill markout/entry-edge fact is unavailable
- maker_fill：missing_facts；maker order/fill facts unavailable
- signal_bins：missing_facts；no registered source training-bin column

## AG LS_raw 完整独立路径（档案v1，样本说明已更正）

评价：exp_20261021_ag_au_h5_extension_20260831_v1/AG_LS_raw_full82/full82_v1；来源运行：run-27b913988332403fa8565619a651fafd。

实际日期：20260507, 20260508, 20260511, 20260512, 20260513, 20260514, 20260515, 20260518, 20260519, 20260520, 20260521, 20260522, 20260525, 20260526, 20260527, 20260528, 20260529, 20260601, 20260602, 20260603, 20260604, 20260605, 20260608, 20260609, 20260610, 20260611, 20260612, 20260615, 20260616, 20260617, 20260618, 20260622, 20260623, 20260624, 20260625, 20260626, 20260629, 20260630, 20260701, 20260702, 20260703, 20260706, 20260707, 20260708, 20260709, 20260710, 20260713, 20260714, 20260715, 20260716, 20260717, 20260720, 20260721, 20260722, 20260723, 20260724, 20260727, 20260728, 20260729, 20260730, 20260731, 20260803, 20260804, 20260805, 20260806, 20260807, 20260810, 20260811, 20260812, 20260813, 20260814, 20260817, 20260818, 20260819, 20260820, 20260821, 20260824, 20260825, 20260826, 20260827, 20260828, 20260831

| 原生指标 | 值 | 单位 | 分母 | 汇总 | 状态 |
| --- | --- | --- | --- | --- | --- |
| full82_net_cash | -45.93659539999908 | unit_cash | 82 verified dates, flat terminal path only | sum | known |
| full82_mean_net_bps | -0.3788194978034555 | bp/trade | completed unit round trips | mean | known |
| completed_trades | 18485 | trades | 82 verified expected dates | count | known |
| terminal_unknown_inventory | 0 | positions | parent path terminal inventory | count | known |
| original45_completed_subset_cash | -21.516603399999532 | unit_cash | completed exits in original45 | sum | known |
| original45_mean_net_bps | -0.2860729098649459 | bp/trade | completed exits in original45 | mean | known |
| original45_completed_trades | 10968 | trades | completed exits in original45 | count | known |
| original45_fill_cashflow | 37.52985359999994 | unit_cash | actual fills during original45; cashflow with inventory, not MTM or completed profit | sum | known |
| original45_daily_cash_ci_low | -0.725657160999995 | unit_cash/day | 5-day blocks 2000 seed20261013 | bootstrap_2.5pct | known |
| original45_daily_cash_ci_high | -0.1906378759999921 | unit_cash/day | 5-day blocks 2000 seed20261013 | bootstrap_97.5pct | known |
| extension37_completed_subset_cash | -24.41999199999955 | unit_cash | completed exits in extension37 | sum | known |
| extension37_mean_net_bps | -0.5141453693625313 | bp/trade | completed exits in extension37 | mean | known |
| extension37_completed_trades | 7517 | trades | completed exits in extension37 | count | known |
| extension37_fill_cashflow | -83.46644899999845 | unit_cash | actual fills during extension37; cashflow with inventory, not MTM or completed profit | sum | known |
| extension37_daily_cash_ci_low | -0.8868313441891611 | unit_cash/day | 5-day blocks 2000 seed20261013 | bootstrap_2.5pct | known |
| extension37_daily_cash_ci_high | -0.3352062090540494 | unit_cash/day | 5-day blocks 2000 seed20261013 | bootstrap_97.5pct | known |
| full82_completed_subset_cash | -45.93659539999908 | unit_cash | completed exits in full82 | sum | known |
| full82_mean_net_bps | -0.3788194978034555 | bp/trade | completed exits in full82 | mean | known |
| full82_completed_trades | 18485 | trades | completed exits in full82 | count | known |
| full82_fill_cashflow | -45.936595400000456 | unit_cash | actual fills during full82; cashflow with inventory, not MTM or completed profit | sum | known |
| full82_daily_cash_ci_low | -0.7151129414024268 | unit_cash/day | 5-day blocks 2000 seed20261013 | bootstrap_2.5pct | known |
| full82_daily_cash_ci_high | -0.33208430036583747 | unit_cash/day | 5-day blocks 2000 seed20261013 | bootstrap_97.5pct | known |
| development38_completed_subset_cash | -19.693260199999674 | unit_cash | completed exits in development38 | sum | known |
| development38_mean_net_bps | -0.28386603992846476 | bp/trade | completed exits in development38 | mean | known |
| development38_completed_trades | 9988 | trades | completed exits in development38 | count | known |
| development38_fill_cashflow | -19.693260200000203 | unit_cash | actual fills during development38; cashflow with inventory, not MTM or completed profit | sum | known |
| development38_daily_cash_ci_low | -0.7443770635526147 | unit_cash/day | 5-day blocks 2000 seed20261013 | bootstrap_2.5pct | known |
| development38_daily_cash_ci_high | -0.14954933855262847 | unit_cash/day | 5-day blocks 2000 seed20261013 | bootstrap_97.5pct | known |
| viewedJuly7_completed_subset_cash | -1.8233431999998602 | unit_cash | completed exits in viewedJuly7 | sum | known |
| viewedJuly7_mean_net_bps | -0.30856496795226596 | bp/trade | completed exits in viewedJuly7 | mean | known |
| viewedJuly7_completed_trades | 980 | trades | completed exits in viewedJuly7 | count | known |
| viewedJuly7_fill_cashflow | 57.22311380000128 | unit_cash | actual fills during viewedJuly7; cashflow with inventory, not MTM or completed profit | sum | known |
| viewedJuly7_daily_cash_ci_low | -0.3001898571428377 | unit_cash/day | 5-day blocks 2000 seed20261013 | bootstrap_2.5pct | known |
| viewedJuly7_daily_cash_ci_high | -0.19734728571426827 | unit_cash/day | 5-day blocks 2000 seed20261013 | bootstrap_97.5pct | known |
| July_extension_completed_subset_cash | -7.713752599999918 | unit_cash | completed exits in July_extension | sum | known |
| July_extension_mean_net_bps | -0.699030841413328 | bp/trade | completed exits in July_extension | mean | known |
| July_extension_completed_trades | 1901 | trades | completed exits in July_extension | count | known |
| July_extension_fill_cashflow | -66.7602095999996 | unit_cash | actual fills during July_extension; cashflow with inventory, not MTM or completed profit | sum | known |
| July_extension_daily_cash_ci_low | -0.7377989721874979 | unit_cash/day | 5-day blocks 2000 seed20261013 | bootstrap_2.5pct | known |
| July_extension_daily_cash_ci_high | -0.23222113343749182 | unit_cash/day | 5-day blocks 2000 seed20261013 | bootstrap_97.5pct | known |
| August_completed_subset_cash | -16.70623939999963 | unit_cash | completed exits in August | sum | known |
| August_mean_net_bps | -0.4515621638125733 | bp/trade | completed exits in August | mean | known |
| August_completed_trades | 5616 | trades | completed exits in August | count | known |
| August_fill_cashflow | -16.70623940000018 | unit_cash | actual fills during August; cashflow with inventory, not MTM or completed profit | sum | known |
| August_daily_cash_ci_low | -1.1587753495237796 | unit_cash/day | 5-day blocks 2000 seed20261013 | bootstrap_2.5pct | known |
| August_daily_cash_ci_high | -0.40399522238092705 | unit_cash/day | 5-day blocks 2000 seed20261013 | bootstrap_97.5pct | known |
| cross_date_trades | 6 | trades | completed unit round trips | count | known |
| holding_occupancy_seconds | 1426631.74 | s | sum of completed inventory holding times | sum | known |
| remove_best_day_cash | -46.849639399999155 | unit_cash | 82-day completed subset less best exit day | sum | known |
| remove_best_trade_cash | -47.128648999999065 | unit_cash | completed subset less best trade | sum | known |

限制：原45日已查看；新增37日已在F2扩展研究中查看，不是独立holdout；差距诊断仅覆盖原45日；现金按退出日归因；成交现金流另列，均不是账户MTM；未作多重比较校正；区间跨零不等于等效；固定费用和proxy时钟，不包含资金费和真实执行容量验证；暂定工作基线是用户指定比较对象，不代表收益优越或人工研究接受；入场筛选后信号统计单列，不冒充完整F2信号统计；实际fill后固定2秒响应未恢复时明确缺口，不新增策略条件；独立完整路径对照。；期末状态 flat；未知库存 0；原45日AU空头亏损、多空低于多头及利润集中事实保留于原报告。；技术自查通过；独立技术审查pending，人工研究复核pending。；82 verified expected dates, 45 original +37 extension; exploratory viewed data; unknown inventory separately disclosed

- PnL_path：missing_facts；no equity or account-value source is projected
- cancel_attribution：missing_facts；cancel attribution facts unavailable
- fill_markout：missing_facts；registered fill markout/entry-edge fact is unavailable
- maker_fill：missing_facts；maker order/fill facts unavailable
- signal_bins：missing_facts；no registered source training-bin column

## AG LS_raw 完整独立路径（说明修订v2）

评价：exp_20261021_ag_au_h5_extension_20260831_v1/AG_LS_raw_full82/full82_v2；来源运行：run-27b913988332403fa8565619a651fafd。

实际日期：20260507, 20260508, 20260511, 20260512, 20260513, 20260514, 20260515, 20260518, 20260519, 20260520, 20260521, 20260522, 20260525, 20260526, 20260527, 20260528, 20260529, 20260601, 20260602, 20260603, 20260604, 20260605, 20260608, 20260609, 20260610, 20260611, 20260612, 20260615, 20260616, 20260617, 20260618, 20260622, 20260623, 20260624, 20260625, 20260626, 20260629, 20260630, 20260701, 20260702, 20260703, 20260706, 20260707, 20260708, 20260709, 20260710, 20260713, 20260714, 20260715, 20260716, 20260717, 20260720, 20260721, 20260722, 20260723, 20260724, 20260727, 20260728, 20260729, 20260730, 20260731, 20260803, 20260804, 20260805, 20260806, 20260807, 20260810, 20260811, 20260812, 20260813, 20260814, 20260817, 20260818, 20260819, 20260820, 20260821, 20260824, 20260825, 20260826, 20260827, 20260828, 20260831

| 原生指标 | 值 | 单位 | 分母 | 汇总 | 状态 |
| --- | --- | --- | --- | --- | --- |
| full82_net_cash | -45.93659539999908 | unit_cash | 82 verified dates, flat terminal path only | sum | known |
| full82_mean_net_bps | -0.3788194978034555 | bp/trade | completed unit round trips | mean | known |
| completed_trades | 18485 | trades | 82 verified expected dates | count | known |
| terminal_unknown_inventory | 0 | positions | parent path terminal inventory | count | known |
| original45_completed_subset_cash | -21.516603399999532 | unit_cash | completed exits in original45 | sum | known |
| original45_mean_net_bps | -0.2860729098649459 | bp/trade | completed exits in original45 | mean | known |
| original45_completed_trades | 10968 | trades | completed exits in original45 | count | known |
| original45_fill_cashflow | 37.52985359999994 | unit_cash | actual fills during original45; cashflow with inventory, not MTM or completed profit | sum | known |
| original45_daily_cash_ci_low | -0.725657160999995 | unit_cash/day | 5-day blocks 2000 seed20261013 | bootstrap_2.5pct | known |
| original45_daily_cash_ci_high | -0.1906378759999921 | unit_cash/day | 5-day blocks 2000 seed20261013 | bootstrap_97.5pct | known |
| extension37_completed_subset_cash | -24.41999199999955 | unit_cash | completed exits in extension37 | sum | known |
| extension37_mean_net_bps | -0.5141453693625313 | bp/trade | completed exits in extension37 | mean | known |
| extension37_completed_trades | 7517 | trades | completed exits in extension37 | count | known |
| extension37_fill_cashflow | -83.46644899999845 | unit_cash | actual fills during extension37; cashflow with inventory, not MTM or completed profit | sum | known |
| extension37_daily_cash_ci_low | -0.8868313441891611 | unit_cash/day | 5-day blocks 2000 seed20261013 | bootstrap_2.5pct | known |
| extension37_daily_cash_ci_high | -0.3352062090540494 | unit_cash/day | 5-day blocks 2000 seed20261013 | bootstrap_97.5pct | known |
| full82_completed_subset_cash | -45.93659539999908 | unit_cash | completed exits in full82 | sum | known |
| full82_mean_net_bps | -0.3788194978034555 | bp/trade | completed exits in full82 | mean | known |
| full82_completed_trades | 18485 | trades | completed exits in full82 | count | known |
| full82_fill_cashflow | -45.936595400000456 | unit_cash | actual fills during full82; cashflow with inventory, not MTM or completed profit | sum | known |
| full82_daily_cash_ci_low | -0.7151129414024268 | unit_cash/day | 5-day blocks 2000 seed20261013 | bootstrap_2.5pct | known |
| full82_daily_cash_ci_high | -0.33208430036583747 | unit_cash/day | 5-day blocks 2000 seed20261013 | bootstrap_97.5pct | known |
| development38_completed_subset_cash | -19.693260199999674 | unit_cash | completed exits in development38 | sum | known |
| development38_mean_net_bps | -0.28386603992846476 | bp/trade | completed exits in development38 | mean | known |
| development38_completed_trades | 9988 | trades | completed exits in development38 | count | known |
| development38_fill_cashflow | -19.693260200000203 | unit_cash | actual fills during development38; cashflow with inventory, not MTM or completed profit | sum | known |
| development38_daily_cash_ci_low | -0.7443770635526147 | unit_cash/day | 5-day blocks 2000 seed20261013 | bootstrap_2.5pct | known |
| development38_daily_cash_ci_high | -0.14954933855262847 | unit_cash/day | 5-day blocks 2000 seed20261013 | bootstrap_97.5pct | known |
| viewedJuly7_completed_subset_cash | -1.8233431999998602 | unit_cash | completed exits in viewedJuly7 | sum | known |
| viewedJuly7_mean_net_bps | -0.30856496795226596 | bp/trade | completed exits in viewedJuly7 | mean | known |
| viewedJuly7_completed_trades | 980 | trades | completed exits in viewedJuly7 | count | known |
| viewedJuly7_fill_cashflow | 57.22311380000128 | unit_cash | actual fills during viewedJuly7; cashflow with inventory, not MTM or completed profit | sum | known |
| viewedJuly7_daily_cash_ci_low | -0.3001898571428377 | unit_cash/day | 5-day blocks 2000 seed20261013 | bootstrap_2.5pct | known |
| viewedJuly7_daily_cash_ci_high | -0.19734728571426827 | unit_cash/day | 5-day blocks 2000 seed20261013 | bootstrap_97.5pct | known |
| July_extension_completed_subset_cash | -7.713752599999918 | unit_cash | completed exits in July_extension | sum | known |
| July_extension_mean_net_bps | -0.699030841413328 | bp/trade | completed exits in July_extension | mean | known |
| July_extension_completed_trades | 1901 | trades | completed exits in July_extension | count | known |
| July_extension_fill_cashflow | -66.7602095999996 | unit_cash | actual fills during July_extension; cashflow with inventory, not MTM or completed profit | sum | known |
| July_extension_daily_cash_ci_low | -0.7377989721874979 | unit_cash/day | 5-day blocks 2000 seed20261013 | bootstrap_2.5pct | known |
| July_extension_daily_cash_ci_high | -0.23222113343749182 | unit_cash/day | 5-day blocks 2000 seed20261013 | bootstrap_97.5pct | known |
| August_completed_subset_cash | -16.70623939999963 | unit_cash | completed exits in August | sum | known |
| August_mean_net_bps | -0.4515621638125733 | bp/trade | completed exits in August | mean | known |
| August_completed_trades | 5616 | trades | completed exits in August | count | known |
| August_fill_cashflow | -16.70623940000018 | unit_cash | actual fills during August; cashflow with inventory, not MTM or completed profit | sum | known |
| August_daily_cash_ci_low | -1.1587753495237796 | unit_cash/day | 5-day blocks 2000 seed20261013 | bootstrap_2.5pct | known |
| August_daily_cash_ci_high | -0.40399522238092705 | unit_cash/day | 5-day blocks 2000 seed20261013 | bootstrap_97.5pct | known |
| cross_date_trades | 6 | trades | completed unit round trips | count | known |
| holding_occupancy_seconds | 1426631.74 | s | sum of completed inventory holding times | sum | known |
| remove_best_day_cash | -46.849639399999155 | unit_cash | 82-day completed subset less best exit day | sum | known |
| remove_best_trade_cash | -47.128648999999065 | unit_cash | completed subset less best trade | sum | known |

限制：原45日已查看；新增37日已在F2扩展研究中查看，不是独立holdout；差距诊断仅覆盖原45日；现金按退出日归因；成交现金流另列，均不是账户MTM；未作多重比较校正；区间跨零不等于等效；固定费用和proxy时钟，不包含资金费和真实执行容量验证；暂定工作基线是用户指定比较对象，不代表收益优越或人工研究接受；入场筛选后信号统计单列，不冒充完整F2信号统计；实际fill后固定2秒响应未恢复时明确缺口，不新增策略条件；独立完整路径对照。；期末状态 flat；未知库存 0；原45日AU空头亏损、多空低于多头及利润集中事实保留于原报告。；技术自查通过；独立技术审查pending，人工研究复核pending。；本版仅修正已查看样本的来源说明；原v1保留档案，所有策略与数值指标相同。；82 verified expected dates, 45 original +37 extension; exploratory viewed data; unknown inventory separately disclosed

- PnL_path：missing_facts；no equity or account-value source is projected
- cancel_attribution：missing_facts；cancel attribution facts unavailable
- fill_markout：missing_facts；registered fill markout/entry-edge fact is unavailable
- maker_fill：missing_facts；maker order/fill facts unavailable
- signal_bins：missing_facts；no registered source training-bin column

## AG L_F 完整独立路径（档案v1，样本说明已更正）

评价：exp_20261021_ag_au_h5_extension_20260831_v1/AG_L_F_full82/full82_v1；来源运行：run-27b913988332403fa8565619a651fafd。

实际日期：20260507, 20260508, 20260511, 20260512, 20260513, 20260514, 20260515, 20260518, 20260519, 20260520, 20260521, 20260522, 20260525, 20260526, 20260527, 20260528, 20260529, 20260601, 20260602, 20260603, 20260604, 20260605, 20260608, 20260609, 20260610, 20260611, 20260612, 20260615, 20260616, 20260617, 20260618, 20260622, 20260623, 20260624, 20260625, 20260626, 20260629, 20260630, 20260701, 20260702, 20260703, 20260706, 20260707, 20260708, 20260709, 20260710, 20260713, 20260714, 20260715, 20260716, 20260717, 20260720, 20260721, 20260722, 20260723, 20260724, 20260727, 20260728, 20260729, 20260730, 20260731, 20260803, 20260804, 20260805, 20260806, 20260807, 20260810, 20260811, 20260812, 20260813, 20260814, 20260817, 20260818, 20260819, 20260820, 20260821, 20260824, 20260825, 20260826, 20260827, 20260828, 20260831

| 原生指标 | 值 | 单位 | 分母 | 汇总 | 状态 |
| --- | --- | --- | --- | --- | --- |
| full82_net_cash | -28.195563599999574 | unit_cash | 82 verified dates, flat terminal path only | sum | known |
| full82_mean_net_bps | -0.4195566031293096 | bp/trade | completed unit round trips | mean | known |
| completed_trades | 10184 | trades | 82 verified expected dates | count | known |
| terminal_unknown_inventory | 0 | positions | parent path terminal inventory | count | known |
| original45_completed_subset_cash | -12.958141999999796 | unit_cash | completed exits in original45 | sum | known |
| original45_mean_net_bps | -0.30538476485616745 | bp/trade | completed exits in original45 | mean | known |
| original45_completed_trades | 6089 | trades | completed exits in original45 | count | known |
| original45_fill_cashflow | -12.958142000004656 | unit_cash | actual fills during original45; cashflow with inventory, not MTM or completed profit | sum | known |
| original45_daily_cash_ci_low | -0.527106914333328 | unit_cash/day | 5-day blocks 2000 seed20261013 | bootstrap_2.5pct | known |
| original45_daily_cash_ci_high | -0.06808913444444308 | unit_cash/day | 5-day blocks 2000 seed20261013 | bootstrap_97.5pct | known |
| extension37_completed_subset_cash | -15.237421599999774 | unit_cash | completed exits in extension37 | sum | known |
| extension37_mean_net_bps | -0.5893227382319133 | bp/trade | completed exits in extension37 | mean | known |
| extension37_completed_trades | 4095 | trades | completed exits in extension37 | count | known |
| extension37_fill_cashflow | -15.23742159999739 | unit_cash | actual fills during extension37; cashflow with inventory, not MTM or completed profit | sum | known |
| extension37_daily_cash_ci_low | -0.5284747304054017 | unit_cash/day | 5-day blocks 2000 seed20261013 | bootstrap_2.5pct | known |
| extension37_daily_cash_ci_high | -0.17495939324323745 | unit_cash/day | 5-day blocks 2000 seed20261013 | bootstrap_97.5pct | known |
| full82_completed_subset_cash | -28.195563599999574 | unit_cash | completed exits in full82 | sum | known |
| full82_mean_net_bps | -0.4195566031293096 | bp/trade | completed exits in full82 | mean | known |
| full82_completed_trades | 10184 | trades | completed exits in full82 | count | known |
| full82_fill_cashflow | -28.19556360000547 | unit_cash | actual fills during full82; cashflow with inventory, not MTM or completed profit | sum | known |
| full82_daily_cash_ci_low | -0.4667812571951127 | unit_cash/day | 5-day blocks 2000 seed20261013 | bootstrap_2.5pct | known |
| full82_daily_cash_ci_high | -0.16974001591463322 | unit_cash/day | 5-day blocks 2000 seed20261013 | bootstrap_97.5pct | known |
| development38_completed_subset_cash | -12.281303799999822 | unit_cash | completed exits in development38 | sum | known |
| development38_mean_net_bps | -0.3126232584388878 | bp/trade | completed exits in development38 | mean | known |
| development38_completed_trades | 5599 | trades | completed exits in development38 | count | known |
| development38_fill_cashflow | -12.281303800003705 | unit_cash | actual fills during development38; cashflow with inventory, not MTM or completed profit | sum | known |
| development38_daily_cash_ci_low | -0.5797015221052503 | unit_cash/day | 5-day blocks 2000 seed20261013 | bootstrap_2.5pct | known |
| development38_daily_cash_ci_high | -0.036851152631585234 | unit_cash/day | 5-day blocks 2000 seed20261013 | bootstrap_97.5pct | known |
| viewedJuly7_completed_subset_cash | -0.6768381999999744 | unit_cash | completed exits in viewedJuly7 | sum | known |
| viewedJuly7_mean_net_bps | -0.22267389634667495 | bp/trade | completed exits in viewedJuly7 | mean | known |
| viewedJuly7_completed_trades | 490 | trades | completed exits in viewedJuly7 | count | known |
| viewedJuly7_fill_cashflow | -0.676838199999203 | unit_cash | actual fills during viewedJuly7; cashflow with inventory, not MTM or completed profit | sum | known |
| viewedJuly7_daily_cash_ci_low | -0.1586292857142706 | unit_cash/day | 5-day blocks 2000 seed20261013 | bootstrap_2.5pct | known |
| viewedJuly7_daily_cash_ci_high | -0.01742622857142124 | unit_cash/day | 5-day blocks 2000 seed20261013 | bootstrap_97.5pct | known |
| July_extension_completed_subset_cash | -5.32223139999995 | unit_cash | completed exits in July_extension | sum | known |
| July_extension_mean_net_bps | -0.8623590852390299 | bp/trade | completed exits in July_extension | mean | known |
| July_extension_completed_trades | 1059 | trades | completed exits in July_extension | count | known |
| July_extension_fill_cashflow | -5.322231400000028 | unit_cash | actual fills during July_extension; cashflow with inventory, not MTM or completed profit | sum | known |
| July_extension_daily_cash_ci_low | -0.6259781125000072 | unit_cash/day | 5-day blocks 2000 seed20261013 | bootstrap_2.5pct | known |
| July_extension_daily_cash_ci_high | -0.10170006250000155 | unit_cash/day | 5-day blocks 2000 seed20261013 | bootstrap_97.5pct | known |
| August_completed_subset_cash | -9.915190199999826 | unit_cash | completed exits in August | sum | known |
| August_mean_net_bps | -0.49408377529366004 | bp/trade | completed exits in August | mean | known |
| August_completed_trades | 3036 | trades | completed exits in August | count | known |
| August_fill_cashflow | -9.915190199999756 | unit_cash | actual fills during August; cashflow with inventory, not MTM or completed profit | sum | known |
| August_daily_cash_ci_low | -0.6578188221428443 | unit_cash/day | 5-day blocks 2000 seed20261013 | bootstrap_2.5pct | known |
| August_daily_cash_ci_high | -0.20063476690474227 | unit_cash/day | 5-day blocks 2000 seed20261013 | bootstrap_97.5pct | known |
| cross_date_trades | 3 | trades | completed unit round trips | count | known |
| holding_occupancy_seconds | 732665.7279999999 | s | sum of completed inventory holding times | sum | known |
| remove_best_day_cash | -28.910641799999567 | unit_cash | 82-day completed subset less best exit day | sum | known |
| remove_best_trade_cash | -29.38761719999956 | unit_cash | completed subset less best trade | sum | known |

限制：原45日已查看；新增37日已在F2扩展研究中查看，不是独立holdout；差距诊断仅覆盖原45日；现金按退出日归因；成交现金流另列，均不是账户MTM；未作多重比较校正；区间跨零不等于等效；固定费用和proxy时钟，不包含资金费和真实执行容量验证；暂定工作基线是用户指定比较对象，不代表收益优越或人工研究接受；入场筛选后信号统计单列，不冒充完整F2信号统计；实际fill后固定2秒响应未恢复时明确缺口，不新增策略条件；独立完整路径对照。；期末状态 flat；未知库存 0；原45日AU空头亏损、多空低于多头及利润集中事实保留于原报告。；技术自查通过；独立技术审查pending，人工研究复核pending。；82 verified expected dates, 45 original +37 extension; exploratory viewed data; unknown inventory separately disclosed

- PnL_path：missing_facts；no equity or account-value source is projected
- cancel_attribution：missing_facts；cancel attribution facts unavailable
- fill_markout：missing_facts；registered fill markout/entry-edge fact is unavailable
- maker_fill：missing_facts；maker order/fill facts unavailable
- signal_bins：missing_facts；no registered source training-bin column

## AG L_F 完整独立路径（说明修订v2）

评价：exp_20261021_ag_au_h5_extension_20260831_v1/AG_L_F_full82/full82_v2；来源运行：run-27b913988332403fa8565619a651fafd。

实际日期：20260507, 20260508, 20260511, 20260512, 20260513, 20260514, 20260515, 20260518, 20260519, 20260520, 20260521, 20260522, 20260525, 20260526, 20260527, 20260528, 20260529, 20260601, 20260602, 20260603, 20260604, 20260605, 20260608, 20260609, 20260610, 20260611, 20260612, 20260615, 20260616, 20260617, 20260618, 20260622, 20260623, 20260624, 20260625, 20260626, 20260629, 20260630, 20260701, 20260702, 20260703, 20260706, 20260707, 20260708, 20260709, 20260710, 20260713, 20260714, 20260715, 20260716, 20260717, 20260720, 20260721, 20260722, 20260723, 20260724, 20260727, 20260728, 20260729, 20260730, 20260731, 20260803, 20260804, 20260805, 20260806, 20260807, 20260810, 20260811, 20260812, 20260813, 20260814, 20260817, 20260818, 20260819, 20260820, 20260821, 20260824, 20260825, 20260826, 20260827, 20260828, 20260831

| 原生指标 | 值 | 单位 | 分母 | 汇总 | 状态 |
| --- | --- | --- | --- | --- | --- |
| full82_net_cash | -28.195563599999574 | unit_cash | 82 verified dates, flat terminal path only | sum | known |
| full82_mean_net_bps | -0.4195566031293096 | bp/trade | completed unit round trips | mean | known |
| completed_trades | 10184 | trades | 82 verified expected dates | count | known |
| terminal_unknown_inventory | 0 | positions | parent path terminal inventory | count | known |
| original45_completed_subset_cash | -12.958141999999796 | unit_cash | completed exits in original45 | sum | known |
| original45_mean_net_bps | -0.30538476485616745 | bp/trade | completed exits in original45 | mean | known |
| original45_completed_trades | 6089 | trades | completed exits in original45 | count | known |
| original45_fill_cashflow | -12.958142000004656 | unit_cash | actual fills during original45; cashflow with inventory, not MTM or completed profit | sum | known |
| original45_daily_cash_ci_low | -0.527106914333328 | unit_cash/day | 5-day blocks 2000 seed20261013 | bootstrap_2.5pct | known |
| original45_daily_cash_ci_high | -0.06808913444444308 | unit_cash/day | 5-day blocks 2000 seed20261013 | bootstrap_97.5pct | known |
| extension37_completed_subset_cash | -15.237421599999774 | unit_cash | completed exits in extension37 | sum | known |
| extension37_mean_net_bps | -0.5893227382319133 | bp/trade | completed exits in extension37 | mean | known |
| extension37_completed_trades | 4095 | trades | completed exits in extension37 | count | known |
| extension37_fill_cashflow | -15.23742159999739 | unit_cash | actual fills during extension37; cashflow with inventory, not MTM or completed profit | sum | known |
| extension37_daily_cash_ci_low | -0.5284747304054017 | unit_cash/day | 5-day blocks 2000 seed20261013 | bootstrap_2.5pct | known |
| extension37_daily_cash_ci_high | -0.17495939324323745 | unit_cash/day | 5-day blocks 2000 seed20261013 | bootstrap_97.5pct | known |
| full82_completed_subset_cash | -28.195563599999574 | unit_cash | completed exits in full82 | sum | known |
| full82_mean_net_bps | -0.4195566031293096 | bp/trade | completed exits in full82 | mean | known |
| full82_completed_trades | 10184 | trades | completed exits in full82 | count | known |
| full82_fill_cashflow | -28.19556360000547 | unit_cash | actual fills during full82; cashflow with inventory, not MTM or completed profit | sum | known |
| full82_daily_cash_ci_low | -0.4667812571951127 | unit_cash/day | 5-day blocks 2000 seed20261013 | bootstrap_2.5pct | known |
| full82_daily_cash_ci_high | -0.16974001591463322 | unit_cash/day | 5-day blocks 2000 seed20261013 | bootstrap_97.5pct | known |
| development38_completed_subset_cash | -12.281303799999822 | unit_cash | completed exits in development38 | sum | known |
| development38_mean_net_bps | -0.3126232584388878 | bp/trade | completed exits in development38 | mean | known |
| development38_completed_trades | 5599 | trades | completed exits in development38 | count | known |
| development38_fill_cashflow | -12.281303800003705 | unit_cash | actual fills during development38; cashflow with inventory, not MTM or completed profit | sum | known |
| development38_daily_cash_ci_low | -0.5797015221052503 | unit_cash/day | 5-day blocks 2000 seed20261013 | bootstrap_2.5pct | known |
| development38_daily_cash_ci_high | -0.036851152631585234 | unit_cash/day | 5-day blocks 2000 seed20261013 | bootstrap_97.5pct | known |
| viewedJuly7_completed_subset_cash | -0.6768381999999744 | unit_cash | completed exits in viewedJuly7 | sum | known |
| viewedJuly7_mean_net_bps | -0.22267389634667495 | bp/trade | completed exits in viewedJuly7 | mean | known |
| viewedJuly7_completed_trades | 490 | trades | completed exits in viewedJuly7 | count | known |
| viewedJuly7_fill_cashflow | -0.676838199999203 | unit_cash | actual fills during viewedJuly7; cashflow with inventory, not MTM or completed profit | sum | known |
| viewedJuly7_daily_cash_ci_low | -0.1586292857142706 | unit_cash/day | 5-day blocks 2000 seed20261013 | bootstrap_2.5pct | known |
| viewedJuly7_daily_cash_ci_high | -0.01742622857142124 | unit_cash/day | 5-day blocks 2000 seed20261013 | bootstrap_97.5pct | known |
| July_extension_completed_subset_cash | -5.32223139999995 | unit_cash | completed exits in July_extension | sum | known |
| July_extension_mean_net_bps | -0.8623590852390299 | bp/trade | completed exits in July_extension | mean | known |
| July_extension_completed_trades | 1059 | trades | completed exits in July_extension | count | known |
| July_extension_fill_cashflow | -5.322231400000028 | unit_cash | actual fills during July_extension; cashflow with inventory, not MTM or completed profit | sum | known |
| July_extension_daily_cash_ci_low | -0.6259781125000072 | unit_cash/day | 5-day blocks 2000 seed20261013 | bootstrap_2.5pct | known |
| July_extension_daily_cash_ci_high | -0.10170006250000155 | unit_cash/day | 5-day blocks 2000 seed20261013 | bootstrap_97.5pct | known |
| August_completed_subset_cash | -9.915190199999826 | unit_cash | completed exits in August | sum | known |
| August_mean_net_bps | -0.49408377529366004 | bp/trade | completed exits in August | mean | known |
| August_completed_trades | 3036 | trades | completed exits in August | count | known |
| August_fill_cashflow | -9.915190199999756 | unit_cash | actual fills during August; cashflow with inventory, not MTM or completed profit | sum | known |
| August_daily_cash_ci_low | -0.6578188221428443 | unit_cash/day | 5-day blocks 2000 seed20261013 | bootstrap_2.5pct | known |
| August_daily_cash_ci_high | -0.20063476690474227 | unit_cash/day | 5-day blocks 2000 seed20261013 | bootstrap_97.5pct | known |
| cross_date_trades | 3 | trades | completed unit round trips | count | known |
| holding_occupancy_seconds | 732665.7279999999 | s | sum of completed inventory holding times | sum | known |
| remove_best_day_cash | -28.910641799999567 | unit_cash | 82-day completed subset less best exit day | sum | known |
| remove_best_trade_cash | -29.38761719999956 | unit_cash | completed subset less best trade | sum | known |

限制：原45日已查看；新增37日已在F2扩展研究中查看，不是独立holdout；差距诊断仅覆盖原45日；现金按退出日归因；成交现金流另列，均不是账户MTM；未作多重比较校正；区间跨零不等于等效；固定费用和proxy时钟，不包含资金费和真实执行容量验证；暂定工作基线是用户指定比较对象，不代表收益优越或人工研究接受；入场筛选后信号统计单列，不冒充完整F2信号统计；实际fill后固定2秒响应未恢复时明确缺口，不新增策略条件；独立完整路径对照。；期末状态 flat；未知库存 0；原45日AU空头亏损、多空低于多头及利润集中事实保留于原报告。；技术自查通过；独立技术审查pending，人工研究复核pending。；本版仅修正已查看样本的来源说明；原v1保留档案，所有策略与数值指标相同。；82 verified expected dates, 45 original +37 extension; exploratory viewed data; unknown inventory separately disclosed

- PnL_path：missing_facts；no equity or account-value source is projected
- cancel_attribution：missing_facts；cancel attribution facts unavailable
- fill_markout：missing_facts；registered fill markout/entry-edge fact is unavailable
- maker_fill：missing_facts；maker order/fill facts unavailable
- signal_bins：missing_facts；no registered source training-bin column

## AG L_H5 完整独立路径（档案v1，样本说明已更正）

评价：exp_20261021_ag_au_h5_extension_20260831_v1/AG_L_H5_full82/full82_v1；来源运行：run-27b913988332403fa8565619a651fafd。

实际日期：20260507, 20260508, 20260511, 20260512, 20260513, 20260514, 20260515, 20260518, 20260519, 20260520, 20260521, 20260522, 20260525, 20260526, 20260527, 20260528, 20260529, 20260601, 20260602, 20260603, 20260604, 20260605, 20260608, 20260609, 20260610, 20260611, 20260612, 20260615, 20260616, 20260617, 20260618, 20260622, 20260623, 20260624, 20260625, 20260626, 20260629, 20260630, 20260701, 20260702, 20260703, 20260706, 20260707, 20260708, 20260709, 20260710, 20260713, 20260714, 20260715, 20260716, 20260717, 20260720, 20260721, 20260722, 20260723, 20260724, 20260727, 20260728, 20260729, 20260730, 20260731, 20260803, 20260804, 20260805, 20260806, 20260807, 20260810, 20260811, 20260812, 20260813, 20260814, 20260817, 20260818, 20260819, 20260820, 20260821, 20260824, 20260825, 20260826, 20260827, 20260828, 20260831

| 原生指标 | 值 | 单位 | 分母 | 汇总 | 状态 |
| --- | --- | --- | --- | --- | --- |
| full82_net_cash | 1.6352954000002073 | unit_cash | 82 verified dates, flat terminal path only | sum | known |
| full82_mean_net_bps | 0.10556539476832288 | bp/trade | completed unit round trips | mean | known |
| completed_trades | 2077 | trades | 82 verified expected dates | count | known |
| terminal_unknown_inventory | 0 | positions | parent path terminal inventory | count | known |
| original45_completed_subset_cash | 4.978629200000155 | unit_cash | completed exits in original45 | sum | known |
| original45_mean_net_bps | 0.548447123440621 | bp/trade | completed exits in original45 | mean | known |
| original45_completed_trades | 1383 | trades | completed exits in original45 | count | known |
| original45_fill_cashflow | 4.978629200001386 | unit_cash | actual fills during original45; cashflow with inventory, not MTM or completed profit | sum | known |
| original45_daily_cash_ci_low | 0.0607287313333366 | unit_cash/day | 5-day blocks 2000 seed20261013 | bootstrap_2.5pct | known |
| original45_daily_cash_ci_high | 0.210047753111116 | unit_cash/day | 5-day blocks 2000 seed20261013 | bootstrap_97.5pct | known |
| extension37_completed_subset_cash | -3.343333799999947 | unit_cash | completed exits in extension37 | sum | known |
| extension37_mean_net_bps | -0.7770072720238789 | bp/trade | completed exits in extension37 | mean | known |
| extension37_completed_trades | 694 | trades | completed exits in extension37 | count | known |
| extension37_fill_cashflow | -3.3433338000000106 | unit_cash | actual fills during extension37; cashflow with inventory, not MTM or completed profit | sum | known |
| extension37_daily_cash_ci_low | -0.19055214162161727 | unit_cash/day | 5-day blocks 2000 seed20261013 | bootstrap_2.5pct | known |
| extension37_daily_cash_ci_high | 0.09270059162161987 | unit_cash/day | 5-day blocks 2000 seed20261013 | bootstrap_97.5pct | known |
| full82_completed_subset_cash | 1.6352954000002073 | unit_cash | completed exits in full82 | sum | known |
| full82_mean_net_bps | 0.10556539476832288 | bp/trade | completed exits in full82 | mean | known |
| full82_completed_trades | 2077 | trades | completed exits in full82 | count | known |
| full82_fill_cashflow | 1.635295399998654 | unit_cash | actual fills during full82; cashflow with inventory, not MTM or completed profit | sum | known |
| full82_daily_cash_ci_low | -0.06224760012194877 | unit_cash/day | 5-day blocks 2000 seed20261013 | bootstrap_2.5pct | known |
| full82_daily_cash_ci_high | 0.12479203969512535 | unit_cash/day | 5-day blocks 2000 seed20261013 | bootstrap_97.5pct | known |
| development38_completed_subset_cash | 4.698037000000152 | unit_cash | completed exits in development38 | sum | known |
| development38_mean_net_bps | 0.5839228125816888 | bp/trade | completed exits in development38 | mean | known |
| development38_completed_trades | 1221 | trades | completed exits in development38 | count | known |
| development38_fill_cashflow | 4.698036999999147 | unit_cash | actual fills during development38; cashflow with inventory, not MTM or completed profit | sum | known |
| development38_daily_cash_ci_low | 0.052162268157897734 | unit_cash/day | 5-day blocks 2000 seed20261013 | bootstrap_2.5pct | known |
| development38_daily_cash_ci_high | 0.22207996065788804 | unit_cash/day | 5-day blocks 2000 seed20261013 | bootstrap_97.5pct | known |
| viewedJuly7_completed_subset_cash | 0.28059220000000284 | unit_cash | completed exits in viewedJuly7 | sum | known |
| viewedJuly7_mean_net_bps | 0.28106554046998056 | bp/trade | completed exits in viewedJuly7 | mean | known |
| viewedJuly7_completed_trades | 162 | trades | completed exits in viewedJuly7 | count | known |
| viewedJuly7_fill_cashflow | 0.28059220000038465 | unit_cash | actual fills during viewedJuly7; cashflow with inventory, not MTM or completed profit | sum | known |
| viewedJuly7_daily_cash_ci_low | 0.040084600000000394 | unit_cash/day | 5-day blocks 2000 seed20261013 | bootstrap_2.5pct | known |
| viewedJuly7_daily_cash_ci_high | 0.1606415428571455 | unit_cash/day | 5-day blocks 2000 seed20261013 | bootstrap_97.5pct | known |
| July_extension_completed_subset_cash | -2.252531999999999 | unit_cash | completed exits in July_extension | sum | known |
| July_extension_mean_net_bps | -1.5492161248672658 | bp/trade | completed exits in July_extension | mean | known |
| July_extension_completed_trades | 247 | trades | completed exits in July_extension | count | known |
| July_extension_fill_cashflow | -2.252531999999867 | unit_cash | actual fills during July_extension; cashflow with inventory, not MTM or completed profit | sum | known |
| July_extension_daily_cash_ci_low | -0.4145652249999935 | unit_cash/day | 5-day blocks 2000 seed20261013 | bootstrap_2.5pct | known |
| July_extension_daily_cash_ci_high | 0.046272624999994 | unit_cash/day | 5-day blocks 2000 seed20261013 | bootstrap_97.5pct | known |
| August_completed_subset_cash | -1.0908017999999484 | unit_cash | completed exits in August | sum | known |
| August_mean_net_bps | -0.3503057358889424 | bp/trade | completed exits in August | mean | known |
| August_completed_trades | 447 | trades | completed exits in August | count | known |
| August_fill_cashflow | -1.0908017999992978 | unit_cash | actual fills during August; cashflow with inventory, not MTM or completed profit | sum | known |
| August_daily_cash_ci_low | -0.14397884523809093 | unit_cash/day | 5-day blocks 2000 seed20261013 | bootstrap_2.5pct | known |
| August_daily_cash_ci_high | 0.14622505071429026 | unit_cash/day | 5-day blocks 2000 seed20261013 | bootstrap_97.5pct | known |
| cross_date_trades | 0 | trades | completed unit round trips | count | known |
| holding_occupancy_seconds | 311670.8709999999 | s | sum of completed inventory holding times | sum | known |
| remove_best_day_cash | 0.45151200000016156 | unit_cash | 82-day completed subset less best exit day | sum | known |
| remove_best_trade_cash | 0.4632430000002148 | unit_cash | completed subset less best trade | sum | known |

限制：原45日已查看；新增37日已在F2扩展研究中查看，不是独立holdout；差距诊断仅覆盖原45日；现金按退出日归因；成交现金流另列，均不是账户MTM；未作多重比较校正；区间跨零不等于等效；固定费用和proxy时钟，不包含资金费和真实执行容量验证；暂定工作基线是用户指定比较对象，不代表收益优越或人工研究接受；入场筛选后信号统计单列，不冒充完整F2信号统计；实际fill后固定2秒响应未恢复时明确缺口，不新增策略条件；独立完整路径对照。；期末状态 flat；未知库存 0；原45日AU空头亏损、多空低于多头及利润集中事实保留于原报告。；技术自查通过；独立技术审查pending，人工研究复核pending。；82 verified expected dates, 45 original +37 extension; exploratory viewed data; unknown inventory separately disclosed

- PnL_path：missing_facts；no equity or account-value source is projected
- cancel_attribution：missing_facts；cancel attribution facts unavailable
- fill_markout：missing_facts；registered fill markout/entry-edge fact is unavailable
- maker_fill：missing_facts；maker order/fill facts unavailable
- signal_bins：missing_facts；no registered source training-bin column

## AG L_H5 完整独立路径（说明修订v2）

评价：exp_20261021_ag_au_h5_extension_20260831_v1/AG_L_H5_full82/full82_v2；来源运行：run-27b913988332403fa8565619a651fafd。

实际日期：20260507, 20260508, 20260511, 20260512, 20260513, 20260514, 20260515, 20260518, 20260519, 20260520, 20260521, 20260522, 20260525, 20260526, 20260527, 20260528, 20260529, 20260601, 20260602, 20260603, 20260604, 20260605, 20260608, 20260609, 20260610, 20260611, 20260612, 20260615, 20260616, 20260617, 20260618, 20260622, 20260623, 20260624, 20260625, 20260626, 20260629, 20260630, 20260701, 20260702, 20260703, 20260706, 20260707, 20260708, 20260709, 20260710, 20260713, 20260714, 20260715, 20260716, 20260717, 20260720, 20260721, 20260722, 20260723, 20260724, 20260727, 20260728, 20260729, 20260730, 20260731, 20260803, 20260804, 20260805, 20260806, 20260807, 20260810, 20260811, 20260812, 20260813, 20260814, 20260817, 20260818, 20260819, 20260820, 20260821, 20260824, 20260825, 20260826, 20260827, 20260828, 20260831

| 原生指标 | 值 | 单位 | 分母 | 汇总 | 状态 |
| --- | --- | --- | --- | --- | --- |
| full82_net_cash | 1.6352954000002073 | unit_cash | 82 verified dates, flat terminal path only | sum | known |
| full82_mean_net_bps | 0.10556539476832288 | bp/trade | completed unit round trips | mean | known |
| completed_trades | 2077 | trades | 82 verified expected dates | count | known |
| terminal_unknown_inventory | 0 | positions | parent path terminal inventory | count | known |
| original45_completed_subset_cash | 4.978629200000155 | unit_cash | completed exits in original45 | sum | known |
| original45_mean_net_bps | 0.548447123440621 | bp/trade | completed exits in original45 | mean | known |
| original45_completed_trades | 1383 | trades | completed exits in original45 | count | known |
| original45_fill_cashflow | 4.978629200001386 | unit_cash | actual fills during original45; cashflow with inventory, not MTM or completed profit | sum | known |
| original45_daily_cash_ci_low | 0.0607287313333366 | unit_cash/day | 5-day blocks 2000 seed20261013 | bootstrap_2.5pct | known |
| original45_daily_cash_ci_high | 0.210047753111116 | unit_cash/day | 5-day blocks 2000 seed20261013 | bootstrap_97.5pct | known |
| extension37_completed_subset_cash | -3.343333799999947 | unit_cash | completed exits in extension37 | sum | known |
| extension37_mean_net_bps | -0.7770072720238789 | bp/trade | completed exits in extension37 | mean | known |
| extension37_completed_trades | 694 | trades | completed exits in extension37 | count | known |
| extension37_fill_cashflow | -3.3433338000000106 | unit_cash | actual fills during extension37; cashflow with inventory, not MTM or completed profit | sum | known |
| extension37_daily_cash_ci_low | -0.19055214162161727 | unit_cash/day | 5-day blocks 2000 seed20261013 | bootstrap_2.5pct | known |
| extension37_daily_cash_ci_high | 0.09270059162161987 | unit_cash/day | 5-day blocks 2000 seed20261013 | bootstrap_97.5pct | known |
| full82_completed_subset_cash | 1.6352954000002073 | unit_cash | completed exits in full82 | sum | known |
| full82_mean_net_bps | 0.10556539476832288 | bp/trade | completed exits in full82 | mean | known |
| full82_completed_trades | 2077 | trades | completed exits in full82 | count | known |
| full82_fill_cashflow | 1.635295399998654 | unit_cash | actual fills during full82; cashflow with inventory, not MTM or completed profit | sum | known |
| full82_daily_cash_ci_low | -0.06224760012194877 | unit_cash/day | 5-day blocks 2000 seed20261013 | bootstrap_2.5pct | known |
| full82_daily_cash_ci_high | 0.12479203969512535 | unit_cash/day | 5-day blocks 2000 seed20261013 | bootstrap_97.5pct | known |
| development38_completed_subset_cash | 4.698037000000152 | unit_cash | completed exits in development38 | sum | known |
| development38_mean_net_bps | 0.5839228125816888 | bp/trade | completed exits in development38 | mean | known |
| development38_completed_trades | 1221 | trades | completed exits in development38 | count | known |
| development38_fill_cashflow | 4.698036999999147 | unit_cash | actual fills during development38; cashflow with inventory, not MTM or completed profit | sum | known |
| development38_daily_cash_ci_low | 0.052162268157897734 | unit_cash/day | 5-day blocks 2000 seed20261013 | bootstrap_2.5pct | known |
| development38_daily_cash_ci_high | 0.22207996065788804 | unit_cash/day | 5-day blocks 2000 seed20261013 | bootstrap_97.5pct | known |
| viewedJuly7_completed_subset_cash | 0.28059220000000284 | unit_cash | completed exits in viewedJuly7 | sum | known |
| viewedJuly7_mean_net_bps | 0.28106554046998056 | bp/trade | completed exits in viewedJuly7 | mean | known |
| viewedJuly7_completed_trades | 162 | trades | completed exits in viewedJuly7 | count | known |
| viewedJuly7_fill_cashflow | 0.28059220000038465 | unit_cash | actual fills during viewedJuly7; cashflow with inventory, not MTM or completed profit | sum | known |
| viewedJuly7_daily_cash_ci_low | 0.040084600000000394 | unit_cash/day | 5-day blocks 2000 seed20261013 | bootstrap_2.5pct | known |
| viewedJuly7_daily_cash_ci_high | 0.1606415428571455 | unit_cash/day | 5-day blocks 2000 seed20261013 | bootstrap_97.5pct | known |
| July_extension_completed_subset_cash | -2.252531999999999 | unit_cash | completed exits in July_extension | sum | known |
| July_extension_mean_net_bps | -1.5492161248672658 | bp/trade | completed exits in July_extension | mean | known |
| July_extension_completed_trades | 247 | trades | completed exits in July_extension | count | known |
| July_extension_fill_cashflow | -2.252531999999867 | unit_cash | actual fills during July_extension; cashflow with inventory, not MTM or completed profit | sum | known |
| July_extension_daily_cash_ci_low | -0.4145652249999935 | unit_cash/day | 5-day blocks 2000 seed20261013 | bootstrap_2.5pct | known |
| July_extension_daily_cash_ci_high | 0.046272624999994 | unit_cash/day | 5-day blocks 2000 seed20261013 | bootstrap_97.5pct | known |
| August_completed_subset_cash | -1.0908017999999484 | unit_cash | completed exits in August | sum | known |
| August_mean_net_bps | -0.3503057358889424 | bp/trade | completed exits in August | mean | known |
| August_completed_trades | 447 | trades | completed exits in August | count | known |
| August_fill_cashflow | -1.0908017999992978 | unit_cash | actual fills during August; cashflow with inventory, not MTM or completed profit | sum | known |
| August_daily_cash_ci_low | -0.14397884523809093 | unit_cash/day | 5-day blocks 2000 seed20261013 | bootstrap_2.5pct | known |
| August_daily_cash_ci_high | 0.14622505071429026 | unit_cash/day | 5-day blocks 2000 seed20261013 | bootstrap_97.5pct | known |
| cross_date_trades | 0 | trades | completed unit round trips | count | known |
| holding_occupancy_seconds | 311670.8709999999 | s | sum of completed inventory holding times | sum | known |
| remove_best_day_cash | 0.45151200000016156 | unit_cash | 82-day completed subset less best exit day | sum | known |
| remove_best_trade_cash | 0.4632430000002148 | unit_cash | completed subset less best trade | sum | known |

限制：原45日已查看；新增37日已在F2扩展研究中查看，不是独立holdout；差距诊断仅覆盖原45日；现金按退出日归因；成交现金流另列，均不是账户MTM；未作多重比较校正；区间跨零不等于等效；固定费用和proxy时钟，不包含资金费和真实执行容量验证；暂定工作基线是用户指定比较对象，不代表收益优越或人工研究接受；入场筛选后信号统计单列，不冒充完整F2信号统计；实际fill后固定2秒响应未恢复时明确缺口，不新增策略条件；独立完整路径对照。；期末状态 flat；未知库存 0；原45日AU空头亏损、多空低于多头及利润集中事实保留于原报告。；技术自查通过；独立技术审查pending，人工研究复核pending。；本版仅修正已查看样本的来源说明；原v1保留档案，所有策略与数值指标相同。；82 verified expected dates, 45 original +37 extension; exploratory viewed data; unknown inventory separately disclosed

- PnL_path：missing_facts；no equity or account-value source is projected
- cancel_attribution：missing_facts；cancel attribution facts unavailable
- fill_markout：missing_facts；registered fill markout/entry-edge fact is unavailable
- maker_fill：missing_facts；maker order/fill facts unavailable
- signal_bins：missing_facts；no registered source training-bin column

## AG L_raw 完整独立路径（档案v1，样本说明已更正）

评价：exp_20261021_ag_au_h5_extension_20260831_v1/AG_L_raw_full82/full82_v1；来源运行：run-27b913988332403fa8565619a651fafd。

实际日期：20260507, 20260508, 20260511, 20260512, 20260513, 20260514, 20260515, 20260518, 20260519, 20260520, 20260521, 20260522, 20260525, 20260526, 20260527, 20260528, 20260529, 20260601, 20260602, 20260603, 20260604, 20260605, 20260608, 20260609, 20260610, 20260611, 20260612, 20260615, 20260616, 20260617, 20260618, 20260622, 20260623, 20260624, 20260625, 20260626, 20260629, 20260630, 20260701, 20260702, 20260703, 20260706, 20260707, 20260708, 20260709, 20260710, 20260713, 20260714, 20260715, 20260716, 20260717, 20260720, 20260721, 20260722, 20260723, 20260724, 20260727, 20260728, 20260729, 20260730, 20260731, 20260803, 20260804, 20260805, 20260806, 20260807, 20260810, 20260811, 20260812, 20260813, 20260814, 20260817, 20260818, 20260819, 20260820, 20260821, 20260824, 20260825, 20260826, 20260827, 20260828, 20260831

| 原生指标 | 值 | 单位 | 分母 | 汇总 | 状态 |
| --- | --- | --- | --- | --- | --- |
| full82_net_cash | -27.705670599999713 | unit_cash | 82 verified dates, flat terminal path only | sum | known |
| full82_mean_net_bps | -0.4041832947270832 | bp/trade | completed unit round trips | mean | known |
| completed_trades | 10418 | trades | 82 verified expected dates | count | known |
| terminal_unknown_inventory | 0 | positions | parent path terminal inventory | count | known |
| original45_completed_subset_cash | -12.082650999999785 | unit_cash | completed exits in original45 | sum | known |
| original45_mean_net_bps | -0.27841516003009203 | bp/trade | completed exits in original45 | mean | known |
| original45_completed_trades | 6219 | trades | completed exits in original45 | count | known |
| original45_fill_cashflow | -12.082651000001299 | unit_cash | actual fills during original45; cashflow with inventory, not MTM or completed profit | sum | known |
| original45_daily_cash_ci_low | -0.49362361877776273 | unit_cash/day | 5-day blocks 2000 seed20261013 | bootstrap_2.5pct | known |
| original45_daily_cash_ci_high | -0.047743746777774224 | unit_cash/day | 5-day blocks 2000 seed20261013 | bootstrap_97.5pct | known |
| extension37_completed_subset_cash | -15.623019599999925 | unit_cash | completed exits in extension37 | sum | known |
| extension37_mean_net_bps | -0.5904543187043605 | bp/trade | completed exits in extension37 | mean | known |
| extension37_completed_trades | 4199 | trades | completed exits in extension37 | count | known |
| extension37_fill_cashflow | -15.623019599995075 | unit_cash | actual fills during extension37; cashflow with inventory, not MTM or completed profit | sum | known |
| extension37_daily_cash_ci_low | -0.5392727071621564 | unit_cash/day | 5-day blocks 2000 seed20261013 | bootstrap_2.5pct | known |
| extension37_daily_cash_ci_high | -0.18542600135135523 | unit_cash/day | 5-day blocks 2000 seed20261013 | bootstrap_97.5pct | known |
| full82_completed_subset_cash | -27.705670599999713 | unit_cash | completed exits in full82 | sum | known |
| full82_mean_net_bps | -0.4041832947270832 | bp/trade | completed exits in full82 | mean | known |
| full82_completed_trades | 10418 | trades | completed exits in full82 | count | known |
| full82_fill_cashflow | -27.705670600001966 | unit_cash | actual fills during full82; cashflow with inventory, not MTM or completed profit | sum | known |
| full82_daily_cash_ci_low | -0.4587799888414601 | unit_cash/day | 5-day blocks 2000 seed20261013 | bootstrap_2.5pct | known |
| full82_daily_cash_ci_high | -0.1612028218902525 | unit_cash/day | 5-day blocks 2000 seed20261013 | bootstrap_97.5pct | known |
| development38_completed_subset_cash | -11.419422999999837 | unit_cash | completed exits in development38 | sum | known |
| development38_mean_net_bps | -0.28438797076177136 | bp/trade | completed exits in development38 | mean | known |
| development38_completed_trades | 5713 | trades | completed exits in development38 | count | known |
| development38_fill_cashflow | -11.419423000000847 | unit_cash | actual fills during development38; cashflow with inventory, not MTM or completed profit | sum | known |
| development38_daily_cash_ci_low | -0.549495388552624 | unit_cash/day | 5-day blocks 2000 seed20261013 | bootstrap_2.5pct | known |
| development38_daily_cash_ci_high | -0.006727897894744966 | unit_cash/day | 5-day blocks 2000 seed20261013 | bootstrap_97.5pct | known |
| viewedJuly7_completed_subset_cash | -0.6632279999999504 | unit_cash | completed exits in viewedJuly7 | sum | known |
| viewedJuly7_mean_net_bps | -0.2109790578362498 | bp/trade | completed exits in viewedJuly7 | mean | known |
| viewedJuly7_completed_trades | 506 | trades | completed exits in viewedJuly7 | count | known |
| viewedJuly7_fill_cashflow | -0.6632279999994708 | unit_cash | actual fills during viewedJuly7; cashflow with inventory, not MTM or completed profit | sum | known |
| viewedJuly7_daily_cash_ci_low | -0.16039311428569544 | unit_cash/day | 5-day blocks 2000 seed20261013 | bootstrap_2.5pct | known |
| viewedJuly7_daily_cash_ci_high | -0.01786302857141551 | unit_cash/day | 5-day blocks 2000 seed20261013 | bootstrap_97.5pct | known |
| July_extension_completed_subset_cash | -5.616089999999968 | unit_cash | completed exits in July_extension | sum | known |
| July_extension_mean_net_bps | -0.8816500108929044 | bp/trade | completed exits in July_extension | mean | known |
| July_extension_completed_trades | 1094 | trades | completed exits in July_extension | count | known |
| July_extension_fill_cashflow | -5.616089999999041 | unit_cash | actual fills during July_extension; cashflow with inventory, not MTM or completed profit | sum | known |
| July_extension_daily_cash_ci_low | -0.6574351837500094 | unit_cash/day | 5-day blocks 2000 seed20261013 | bootstrap_2.5pct | known |
| July_extension_daily_cash_ci_high | -0.10978853281249835 | unit_cash/day | 5-day blocks 2000 seed20261013 | bootstrap_97.5pct | known |
| August_completed_subset_cash | -10.006929599999959 | unit_cash | completed exits in August | sum | known |
| August_mean_net_bps | -0.4878559009091055 | bp/trade | completed exits in August | mean | known |
| August_completed_trades | 3105 | trades | completed exits in August | count | known |
| August_fill_cashflow | -10.00692959999894 | unit_cash | actual fills during August; cashflow with inventory, not MTM or completed profit | sum | known |
| August_daily_cash_ci_low | -0.6678482169047545 | unit_cash/day | 5-day blocks 2000 seed20261013 | bootstrap_2.5pct | known |
| August_daily_cash_ci_high | -0.2071169761904908 | unit_cash/day | 5-day blocks 2000 seed20261013 | bootstrap_97.5pct | known |
| cross_date_trades | 3 | trades | completed unit round trips | count | known |
| holding_occupancy_seconds | 736130.707 | s | sum of completed inventory holding times | sum | known |
| remove_best_day_cash | -28.4750737999997 | unit_cash | 82-day completed subset less best exit day | sum | known |
| remove_best_trade_cash | -28.8977241999997 | unit_cash | completed subset less best trade | sum | known |

限制：原45日已查看；新增37日已在F2扩展研究中查看，不是独立holdout；差距诊断仅覆盖原45日；现金按退出日归因；成交现金流另列，均不是账户MTM；未作多重比较校正；区间跨零不等于等效；固定费用和proxy时钟，不包含资金费和真实执行容量验证；暂定工作基线是用户指定比较对象，不代表收益优越或人工研究接受；入场筛选后信号统计单列，不冒充完整F2信号统计；实际fill后固定2秒响应未恢复时明确缺口，不新增策略条件；独立完整路径对照。；期末状态 flat；未知库存 0；原45日AU空头亏损、多空低于多头及利润集中事实保留于原报告。；技术自查通过；独立技术审查pending，人工研究复核pending。；82 verified expected dates, 45 original +37 extension; exploratory viewed data; unknown inventory separately disclosed

- PnL_path：missing_facts；no equity or account-value source is projected
- cancel_attribution：missing_facts；cancel attribution facts unavailable
- fill_markout：missing_facts；registered fill markout/entry-edge fact is unavailable
- maker_fill：missing_facts；maker order/fill facts unavailable
- signal_bins：missing_facts；no registered source training-bin column

## AG L_raw 完整独立路径（说明修订v2）

评价：exp_20261021_ag_au_h5_extension_20260831_v1/AG_L_raw_full82/full82_v2；来源运行：run-27b913988332403fa8565619a651fafd。

实际日期：20260507, 20260508, 20260511, 20260512, 20260513, 20260514, 20260515, 20260518, 20260519, 20260520, 20260521, 20260522, 20260525, 20260526, 20260527, 20260528, 20260529, 20260601, 20260602, 20260603, 20260604, 20260605, 20260608, 20260609, 20260610, 20260611, 20260612, 20260615, 20260616, 20260617, 20260618, 20260622, 20260623, 20260624, 20260625, 20260626, 20260629, 20260630, 20260701, 20260702, 20260703, 20260706, 20260707, 20260708, 20260709, 20260710, 20260713, 20260714, 20260715, 20260716, 20260717, 20260720, 20260721, 20260722, 20260723, 20260724, 20260727, 20260728, 20260729, 20260730, 20260731, 20260803, 20260804, 20260805, 20260806, 20260807, 20260810, 20260811, 20260812, 20260813, 20260814, 20260817, 20260818, 20260819, 20260820, 20260821, 20260824, 20260825, 20260826, 20260827, 20260828, 20260831

| 原生指标 | 值 | 单位 | 分母 | 汇总 | 状态 |
| --- | --- | --- | --- | --- | --- |
| full82_net_cash | -27.705670599999713 | unit_cash | 82 verified dates, flat terminal path only | sum | known |
| full82_mean_net_bps | -0.4041832947270832 | bp/trade | completed unit round trips | mean | known |
| completed_trades | 10418 | trades | 82 verified expected dates | count | known |
| terminal_unknown_inventory | 0 | positions | parent path terminal inventory | count | known |
| original45_completed_subset_cash | -12.082650999999785 | unit_cash | completed exits in original45 | sum | known |
| original45_mean_net_bps | -0.27841516003009203 | bp/trade | completed exits in original45 | mean | known |
| original45_completed_trades | 6219 | trades | completed exits in original45 | count | known |
| original45_fill_cashflow | -12.082651000001299 | unit_cash | actual fills during original45; cashflow with inventory, not MTM or completed profit | sum | known |
| original45_daily_cash_ci_low | -0.49362361877776273 | unit_cash/day | 5-day blocks 2000 seed20261013 | bootstrap_2.5pct | known |
| original45_daily_cash_ci_high | -0.047743746777774224 | unit_cash/day | 5-day blocks 2000 seed20261013 | bootstrap_97.5pct | known |
| extension37_completed_subset_cash | -15.623019599999925 | unit_cash | completed exits in extension37 | sum | known |
| extension37_mean_net_bps | -0.5904543187043605 | bp/trade | completed exits in extension37 | mean | known |
| extension37_completed_trades | 4199 | trades | completed exits in extension37 | count | known |
| extension37_fill_cashflow | -15.623019599995075 | unit_cash | actual fills during extension37; cashflow with inventory, not MTM or completed profit | sum | known |
| extension37_daily_cash_ci_low | -0.5392727071621564 | unit_cash/day | 5-day blocks 2000 seed20261013 | bootstrap_2.5pct | known |
| extension37_daily_cash_ci_high | -0.18542600135135523 | unit_cash/day | 5-day blocks 2000 seed20261013 | bootstrap_97.5pct | known |
| full82_completed_subset_cash | -27.705670599999713 | unit_cash | completed exits in full82 | sum | known |
| full82_mean_net_bps | -0.4041832947270832 | bp/trade | completed exits in full82 | mean | known |
| full82_completed_trades | 10418 | trades | completed exits in full82 | count | known |
| full82_fill_cashflow | -27.705670600001966 | unit_cash | actual fills during full82; cashflow with inventory, not MTM or completed profit | sum | known |
| full82_daily_cash_ci_low | -0.4587799888414601 | unit_cash/day | 5-day blocks 2000 seed20261013 | bootstrap_2.5pct | known |
| full82_daily_cash_ci_high | -0.1612028218902525 | unit_cash/day | 5-day blocks 2000 seed20261013 | bootstrap_97.5pct | known |
| development38_completed_subset_cash | -11.419422999999837 | unit_cash | completed exits in development38 | sum | known |
| development38_mean_net_bps | -0.28438797076177136 | bp/trade | completed exits in development38 | mean | known |
| development38_completed_trades | 5713 | trades | completed exits in development38 | count | known |
| development38_fill_cashflow | -11.419423000000847 | unit_cash | actual fills during development38; cashflow with inventory, not MTM or completed profit | sum | known |
| development38_daily_cash_ci_low | -0.549495388552624 | unit_cash/day | 5-day blocks 2000 seed20261013 | bootstrap_2.5pct | known |
| development38_daily_cash_ci_high | -0.006727897894744966 | unit_cash/day | 5-day blocks 2000 seed20261013 | bootstrap_97.5pct | known |
| viewedJuly7_completed_subset_cash | -0.6632279999999504 | unit_cash | completed exits in viewedJuly7 | sum | known |
| viewedJuly7_mean_net_bps | -0.2109790578362498 | bp/trade | completed exits in viewedJuly7 | mean | known |
| viewedJuly7_completed_trades | 506 | trades | completed exits in viewedJuly7 | count | known |
| viewedJuly7_fill_cashflow | -0.6632279999994708 | unit_cash | actual fills during viewedJuly7; cashflow with inventory, not MTM or completed profit | sum | known |
| viewedJuly7_daily_cash_ci_low | -0.16039311428569544 | unit_cash/day | 5-day blocks 2000 seed20261013 | bootstrap_2.5pct | known |
| viewedJuly7_daily_cash_ci_high | -0.01786302857141551 | unit_cash/day | 5-day blocks 2000 seed20261013 | bootstrap_97.5pct | known |
| July_extension_completed_subset_cash | -5.616089999999968 | unit_cash | completed exits in July_extension | sum | known |
| July_extension_mean_net_bps | -0.8816500108929044 | bp/trade | completed exits in July_extension | mean | known |
| July_extension_completed_trades | 1094 | trades | completed exits in July_extension | count | known |
| July_extension_fill_cashflow | -5.616089999999041 | unit_cash | actual fills during July_extension; cashflow with inventory, not MTM or completed profit | sum | known |
| July_extension_daily_cash_ci_low | -0.6574351837500094 | unit_cash/day | 5-day blocks 2000 seed20261013 | bootstrap_2.5pct | known |
| July_extension_daily_cash_ci_high | -0.10978853281249835 | unit_cash/day | 5-day blocks 2000 seed20261013 | bootstrap_97.5pct | known |
| August_completed_subset_cash | -10.006929599999959 | unit_cash | completed exits in August | sum | known |
| August_mean_net_bps | -0.4878559009091055 | bp/trade | completed exits in August | mean | known |
| August_completed_trades | 3105 | trades | completed exits in August | count | known |
| August_fill_cashflow | -10.00692959999894 | unit_cash | actual fills during August; cashflow with inventory, not MTM or completed profit | sum | known |
| August_daily_cash_ci_low | -0.6678482169047545 | unit_cash/day | 5-day blocks 2000 seed20261013 | bootstrap_2.5pct | known |
| August_daily_cash_ci_high | -0.2071169761904908 | unit_cash/day | 5-day blocks 2000 seed20261013 | bootstrap_97.5pct | known |
| cross_date_trades | 3 | trades | completed unit round trips | count | known |
| holding_occupancy_seconds | 736130.707 | s | sum of completed inventory holding times | sum | known |
| remove_best_day_cash | -28.4750737999997 | unit_cash | 82-day completed subset less best exit day | sum | known |
| remove_best_trade_cash | -28.8977241999997 | unit_cash | completed subset less best trade | sum | known |

限制：原45日已查看；新增37日已在F2扩展研究中查看，不是独立holdout；差距诊断仅覆盖原45日；现金按退出日归因；成交现金流另列，均不是账户MTM；未作多重比较校正；区间跨零不等于等效；固定费用和proxy时钟，不包含资金费和真实执行容量验证；暂定工作基线是用户指定比较对象，不代表收益优越或人工研究接受；入场筛选后信号统计单列，不冒充完整F2信号统计；实际fill后固定2秒响应未恢复时明确缺口，不新增策略条件；独立完整路径对照。；期末状态 flat；未知库存 0；原45日AU空头亏损、多空低于多头及利润集中事实保留于原报告。；技术自查通过；独立技术审查pending，人工研究复核pending。；本版仅修正已查看样本的来源说明；原v1保留档案，所有策略与数值指标相同。；82 verified expected dates, 45 original +37 extension; exploratory viewed data; unknown inventory separately disclosed

- PnL_path：missing_facts；no equity or account-value source is projected
- cancel_attribution：missing_facts；cancel attribution facts unavailable
- fill_markout：missing_facts；registered fill markout/entry-edge fact is unavailable
- maker_fill：missing_facts；maker order/fill facts unavailable
- signal_bins：missing_facts；no registered source training-bin column

## AG S_F 完整独立路径（档案v1，样本说明已更正）

评价：exp_20261021_ag_au_h5_extension_20260831_v1/AG_S_F_full82/full82_v1；来源运行：run-27b913988332403fa8565619a651fafd。

实际日期：20260507, 20260508, 20260511, 20260512, 20260513, 20260514, 20260515, 20260518, 20260519, 20260520, 20260521, 20260522, 20260525, 20260526, 20260527, 20260528, 20260529, 20260601, 20260602, 20260603, 20260604, 20260605, 20260608, 20260609, 20260610, 20260611, 20260612, 20260615, 20260616, 20260617, 20260618, 20260622, 20260623, 20260624, 20260625, 20260626, 20260629, 20260630, 20260701, 20260702, 20260703, 20260706, 20260707, 20260708, 20260709, 20260710, 20260713, 20260714, 20260715, 20260716, 20260717, 20260720, 20260721, 20260722, 20260723, 20260724, 20260727, 20260728, 20260729, 20260730, 20260731, 20260803, 20260804, 20260805, 20260806, 20260807, 20260810, 20260811, 20260812, 20260813, 20260814, 20260817, 20260818, 20260819, 20260820, 20260821, 20260824, 20260825, 20260826, 20260827, 20260828, 20260831

| 原生指标 | 值 | 单位 | 分母 | 汇总 | 状态 |
| --- | --- | --- | --- | --- | --- |
| full82_net_cash | -21.652506799999482 | unit_cash | 82 verified dates, flat terminal path only | sum | known |
| full82_mean_net_bps | -0.35493684009757165 | bp/trade | completed unit round trips | mean | known |
| completed_trades | 9290 | trades | 82 verified expected dates | count | known |
| terminal_unknown_inventory | 0 | positions | parent path terminal inventory | count | known |
| original45_completed_subset_cash | -9.598050399999812 | unit_cash | completed exits in original45 | sum | known |
| original45_mean_net_bps | -0.2540164584460975 | bp/trade | completed exits in original45 | mean | known |
| original45_completed_trades | 5484 | trades | completed exits in original45 | count | known |
| original45_fill_cashflow | 49.44840659999792 | unit_cash | actual fills during original45; cashflow with inventory, not MTM or completed profit | sum | known |
| original45_daily_cash_ci_low | -0.37187084999999914 | unit_cash/day | 5-day blocks 2000 seed20261013 | bootstrap_2.5pct | known |
| original45_daily_cash_ci_high | -0.06017431077776775 | unit_cash/day | 5-day blocks 2000 seed20261013 | bootstrap_97.5pct | known |
| extension37_completed_subset_cash | -12.05445639999967 | unit_cash | completed exits in extension37 | sum | known |
| extension37_mean_net_bps | -0.5003512838644356 | bp/trade | completed exits in extension37 | mean | known |
| extension37_completed_trades | 3806 | trades | completed exits in extension37 | count | known |
| extension37_fill_cashflow | -71.10091339999862 | unit_cash | actual fills during extension37; cashflow with inventory, not MTM or completed profit | sum | known |
| extension37_daily_cash_ci_low | -0.52616306824323 | unit_cash/day | 5-day blocks 2000 seed20261013 | bootstrap_2.5pct | known |
| extension37_daily_cash_ci_high | -0.1659524117567421 | unit_cash/day | 5-day blocks 2000 seed20261013 | bootstrap_97.5pct | known |
| full82_completed_subset_cash | -21.652506799999482 | unit_cash | completed exits in full82 | sum | known |
| full82_mean_net_bps | -0.35493684009757165 | bp/trade | completed exits in full82 | mean | known |
| full82_completed_trades | 9290 | trades | completed exits in full82 | count | known |
| full82_fill_cashflow | -21.652506799995848 | unit_cash | actual fills during full82; cashflow with inventory, not MTM or completed profit | sum | known |
| full82_daily_cash_ci_low | -0.3850272979268134 | unit_cash/day | 5-day blocks 2000 seed20261013 | bootstrap_2.5pct | known |
| full82_daily_cash_ci_high | -0.14044079957315567 | unit_cash/day | 5-day blocks 2000 seed20261013 | bootstrap_97.5pct | known |
| development38_completed_subset_cash | -9.295152999999878 | unit_cash | completed exits in development38 | sum | known |
| development38_mean_net_bps | -0.26979389720317004 | bp/trade | completed exits in development38 | mean | known |
| development38_completed_trades | 4964 | trades | completed exits in development38 | count | known |
| development38_fill_cashflow | -9.295153000001505 | unit_cash | actual fills during development38; cashflow with inventory, not MTM or completed profit | sum | known |
| development38_daily_cash_ci_low | -0.39118572118420464 | unit_cash/day | 5-day blocks 2000 seed20261013 | bootstrap_2.5pct | known |
| development38_daily_cash_ci_high | -0.032946698026304545 | unit_cash/day | 5-day blocks 2000 seed20261013 | bootstrap_97.5pct | known |
| viewedJuly7_completed_subset_cash | -0.30289739999993326 | unit_cash | completed exits in viewedJuly7 | sum | known |
| viewedJuly7_mean_net_bps | -0.10340260077281363 | bp/trade | completed exits in viewedJuly7 | mean | known |
| viewedJuly7_completed_trades | 520 | trades | completed exits in viewedJuly7 | count | known |
| viewedJuly7_fill_cashflow | 58.743559599999706 | unit_cash | actual fills during viewedJuly7; cashflow with inventory, not MTM or completed profit | sum | known |
| viewedJuly7_daily_cash_ci_low | -0.06898102857142621 | unit_cash/day | 5-day blocks 2000 seed20261013 | bootstrap_2.5pct | known |
| viewedJuly7_daily_cash_ci_high | -0.0361759142857041 | unit_cash/day | 5-day blocks 2000 seed20261013 | bootstrap_97.5pct | known |
| July_extension_completed_subset_cash | -3.34021739999989 | unit_cash | completed exits in July_extension | sum | known |
| July_extension_mean_net_bps | -0.639712895802816 | bp/trade | completed exits in July_extension | mean | known |
| July_extension_completed_trades | 903 | trades | completed exits in July_extension | count | known |
| July_extension_fill_cashflow | -62.38667440000146 | unit_cash | actual fills during July_extension; cashflow with inventory, not MTM or completed profit | sum | known |
| July_extension_daily_cash_ci_low | -0.2825792537499937 | unit_cash/day | 5-day blocks 2000 seed20261013 | bootstrap_2.5pct | known |
| July_extension_daily_cash_ci_high | -0.13830759562499476 | unit_cash/day | 5-day blocks 2000 seed20261013 | bootstrap_97.5pct | known |
| August_completed_subset_cash | -8.71423899999978 | unit_cash | completed exits in August | sum | known |
| August_mean_net_bps | -0.45700180553844255 | bp/trade | completed exits in August | mean | known |
| August_completed_trades | 2903 | trades | completed exits in August | count | known |
| August_fill_cashflow | -8.714239000002848 | unit_cash | actual fills during August; cashflow with inventory, not MTM or completed profit | sum | known |
| August_daily_cash_ci_low | -0.7296805366666401 | unit_cash/day | 5-day blocks 2000 seed20261013 | bootstrap_2.5pct | known |
| August_daily_cash_ci_high | -0.23017445523809812 | unit_cash/day | 5-day blocks 2000 seed20261013 | bootstrap_97.5pct | known |
| cross_date_trades | 3 | trades | completed unit round trips | count | known |
| holding_occupancy_seconds | 540481.686 | s | sum of completed inventory holding times | sum | known |
| remove_best_day_cash | -22.76838739999953 | unit_cash | 82-day completed subset less best exit day | sum | known |
| remove_best_trade_cash | -22.743156399999478 | unit_cash | completed subset less best trade | sum | known |

限制：原45日已查看；新增37日已在F2扩展研究中查看，不是独立holdout；差距诊断仅覆盖原45日；现金按退出日归因；成交现金流另列，均不是账户MTM；未作多重比较校正；区间跨零不等于等效；固定费用和proxy时钟，不包含资金费和真实执行容量验证；暂定工作基线是用户指定比较对象，不代表收益优越或人工研究接受；入场筛选后信号统计单列，不冒充完整F2信号统计；实际fill后固定2秒响应未恢复时明确缺口，不新增策略条件；独立完整路径对照。；期末状态 flat；未知库存 0；原45日AU空头亏损、多空低于多头及利润集中事实保留于原报告。；技术自查通过；独立技术审查pending，人工研究复核pending。；82 verified expected dates, 45 original +37 extension; exploratory viewed data; unknown inventory separately disclosed

- PnL_path：missing_facts；no equity or account-value source is projected
- cancel_attribution：missing_facts；cancel attribution facts unavailable
- fill_markout：missing_facts；registered fill markout/entry-edge fact is unavailable
- maker_fill：missing_facts；maker order/fill facts unavailable
- signal_bins：missing_facts；no registered source training-bin column

## AG S_F 完整独立路径（说明修订v2）

评价：exp_20261021_ag_au_h5_extension_20260831_v1/AG_S_F_full82/full82_v2；来源运行：run-27b913988332403fa8565619a651fafd。

实际日期：20260507, 20260508, 20260511, 20260512, 20260513, 20260514, 20260515, 20260518, 20260519, 20260520, 20260521, 20260522, 20260525, 20260526, 20260527, 20260528, 20260529, 20260601, 20260602, 20260603, 20260604, 20260605, 20260608, 20260609, 20260610, 20260611, 20260612, 20260615, 20260616, 20260617, 20260618, 20260622, 20260623, 20260624, 20260625, 20260626, 20260629, 20260630, 20260701, 20260702, 20260703, 20260706, 20260707, 20260708, 20260709, 20260710, 20260713, 20260714, 20260715, 20260716, 20260717, 20260720, 20260721, 20260722, 20260723, 20260724, 20260727, 20260728, 20260729, 20260730, 20260731, 20260803, 20260804, 20260805, 20260806, 20260807, 20260810, 20260811, 20260812, 20260813, 20260814, 20260817, 20260818, 20260819, 20260820, 20260821, 20260824, 20260825, 20260826, 20260827, 20260828, 20260831

| 原生指标 | 值 | 单位 | 分母 | 汇总 | 状态 |
| --- | --- | --- | --- | --- | --- |
| full82_net_cash | -21.652506799999482 | unit_cash | 82 verified dates, flat terminal path only | sum | known |
| full82_mean_net_bps | -0.35493684009757165 | bp/trade | completed unit round trips | mean | known |
| completed_trades | 9290 | trades | 82 verified expected dates | count | known |
| terminal_unknown_inventory | 0 | positions | parent path terminal inventory | count | known |
| original45_completed_subset_cash | -9.598050399999812 | unit_cash | completed exits in original45 | sum | known |
| original45_mean_net_bps | -0.2540164584460975 | bp/trade | completed exits in original45 | mean | known |
| original45_completed_trades | 5484 | trades | completed exits in original45 | count | known |
| original45_fill_cashflow | 49.44840659999792 | unit_cash | actual fills during original45; cashflow with inventory, not MTM or completed profit | sum | known |
| original45_daily_cash_ci_low | -0.37187084999999914 | unit_cash/day | 5-day blocks 2000 seed20261013 | bootstrap_2.5pct | known |
| original45_daily_cash_ci_high | -0.06017431077776775 | unit_cash/day | 5-day blocks 2000 seed20261013 | bootstrap_97.5pct | known |
| extension37_completed_subset_cash | -12.05445639999967 | unit_cash | completed exits in extension37 | sum | known |
| extension37_mean_net_bps | -0.5003512838644356 | bp/trade | completed exits in extension37 | mean | known |
| extension37_completed_trades | 3806 | trades | completed exits in extension37 | count | known |
| extension37_fill_cashflow | -71.10091339999862 | unit_cash | actual fills during extension37; cashflow with inventory, not MTM or completed profit | sum | known |
| extension37_daily_cash_ci_low | -0.52616306824323 | unit_cash/day | 5-day blocks 2000 seed20261013 | bootstrap_2.5pct | known |
| extension37_daily_cash_ci_high | -0.1659524117567421 | unit_cash/day | 5-day blocks 2000 seed20261013 | bootstrap_97.5pct | known |
| full82_completed_subset_cash | -21.652506799999482 | unit_cash | completed exits in full82 | sum | known |
| full82_mean_net_bps | -0.35493684009757165 | bp/trade | completed exits in full82 | mean | known |
| full82_completed_trades | 9290 | trades | completed exits in full82 | count | known |
| full82_fill_cashflow | -21.652506799995848 | unit_cash | actual fills during full82; cashflow with inventory, not MTM or completed profit | sum | known |
| full82_daily_cash_ci_low | -0.3850272979268134 | unit_cash/day | 5-day blocks 2000 seed20261013 | bootstrap_2.5pct | known |
| full82_daily_cash_ci_high | -0.14044079957315567 | unit_cash/day | 5-day blocks 2000 seed20261013 | bootstrap_97.5pct | known |
| development38_completed_subset_cash | -9.295152999999878 | unit_cash | completed exits in development38 | sum | known |
| development38_mean_net_bps | -0.26979389720317004 | bp/trade | completed exits in development38 | mean | known |
| development38_completed_trades | 4964 | trades | completed exits in development38 | count | known |
| development38_fill_cashflow | -9.295153000001505 | unit_cash | actual fills during development38; cashflow with inventory, not MTM or completed profit | sum | known |
| development38_daily_cash_ci_low | -0.39118572118420464 | unit_cash/day | 5-day blocks 2000 seed20261013 | bootstrap_2.5pct | known |
| development38_daily_cash_ci_high | -0.032946698026304545 | unit_cash/day | 5-day blocks 2000 seed20261013 | bootstrap_97.5pct | known |
| viewedJuly7_completed_subset_cash | -0.30289739999993326 | unit_cash | completed exits in viewedJuly7 | sum | known |
| viewedJuly7_mean_net_bps | -0.10340260077281363 | bp/trade | completed exits in viewedJuly7 | mean | known |
| viewedJuly7_completed_trades | 520 | trades | completed exits in viewedJuly7 | count | known |
| viewedJuly7_fill_cashflow | 58.743559599999706 | unit_cash | actual fills during viewedJuly7; cashflow with inventory, not MTM or completed profit | sum | known |
| viewedJuly7_daily_cash_ci_low | -0.06898102857142621 | unit_cash/day | 5-day blocks 2000 seed20261013 | bootstrap_2.5pct | known |
| viewedJuly7_daily_cash_ci_high | -0.0361759142857041 | unit_cash/day | 5-day blocks 2000 seed20261013 | bootstrap_97.5pct | known |
| July_extension_completed_subset_cash | -3.34021739999989 | unit_cash | completed exits in July_extension | sum | known |
| July_extension_mean_net_bps | -0.639712895802816 | bp/trade | completed exits in July_extension | mean | known |
| July_extension_completed_trades | 903 | trades | completed exits in July_extension | count | known |
| July_extension_fill_cashflow | -62.38667440000146 | unit_cash | actual fills during July_extension; cashflow with inventory, not MTM or completed profit | sum | known |
| July_extension_daily_cash_ci_low | -0.2825792537499937 | unit_cash/day | 5-day blocks 2000 seed20261013 | bootstrap_2.5pct | known |
| July_extension_daily_cash_ci_high | -0.13830759562499476 | unit_cash/day | 5-day blocks 2000 seed20261013 | bootstrap_97.5pct | known |
| August_completed_subset_cash | -8.71423899999978 | unit_cash | completed exits in August | sum | known |
| August_mean_net_bps | -0.45700180553844255 | bp/trade | completed exits in August | mean | known |
| August_completed_trades | 2903 | trades | completed exits in August | count | known |
| August_fill_cashflow | -8.714239000002848 | unit_cash | actual fills during August; cashflow with inventory, not MTM or completed profit | sum | known |
| August_daily_cash_ci_low | -0.7296805366666401 | unit_cash/day | 5-day blocks 2000 seed20261013 | bootstrap_2.5pct | known |
| August_daily_cash_ci_high | -0.23017445523809812 | unit_cash/day | 5-day blocks 2000 seed20261013 | bootstrap_97.5pct | known |
| cross_date_trades | 3 | trades | completed unit round trips | count | known |
| holding_occupancy_seconds | 540481.686 | s | sum of completed inventory holding times | sum | known |
| remove_best_day_cash | -22.76838739999953 | unit_cash | 82-day completed subset less best exit day | sum | known |
| remove_best_trade_cash | -22.743156399999478 | unit_cash | completed subset less best trade | sum | known |

限制：原45日已查看；新增37日已在F2扩展研究中查看，不是独立holdout；差距诊断仅覆盖原45日；现金按退出日归因；成交现金流另列，均不是账户MTM；未作多重比较校正；区间跨零不等于等效；固定费用和proxy时钟，不包含资金费和真实执行容量验证；暂定工作基线是用户指定比较对象，不代表收益优越或人工研究接受；入场筛选后信号统计单列，不冒充完整F2信号统计；实际fill后固定2秒响应未恢复时明确缺口，不新增策略条件；独立完整路径对照。；期末状态 flat；未知库存 0；原45日AU空头亏损、多空低于多头及利润集中事实保留于原报告。；技术自查通过；独立技术审查pending，人工研究复核pending。；本版仅修正已查看样本的来源说明；原v1保留档案，所有策略与数值指标相同。；82 verified expected dates, 45 original +37 extension; exploratory viewed data; unknown inventory separately disclosed

- PnL_path：missing_facts；no equity or account-value source is projected
- cancel_attribution：missing_facts；cancel attribution facts unavailable
- fill_markout：missing_facts；registered fill markout/entry-edge fact is unavailable
- maker_fill：missing_facts；maker order/fill facts unavailable
- signal_bins：missing_facts；no registered source training-bin column

## AG S_H5 完整独立路径（档案v1，样本说明已更正）

评价：exp_20261021_ag_au_h5_extension_20260831_v1/AG_S_H5_full82/full82_v1；来源运行：run-27b913988332403fa8565619a651fafd。

实际日期：20260507, 20260508, 20260511, 20260512, 20260513, 20260514, 20260515, 20260518, 20260519, 20260520, 20260521, 20260522, 20260525, 20260526, 20260527, 20260528, 20260529, 20260601, 20260602, 20260603, 20260604, 20260605, 20260608, 20260609, 20260610, 20260611, 20260612, 20260615, 20260616, 20260617, 20260618, 20260622, 20260623, 20260624, 20260625, 20260626, 20260629, 20260630, 20260701, 20260702, 20260703, 20260706, 20260707, 20260708, 20260709, 20260710, 20260713, 20260714, 20260715, 20260716, 20260717, 20260720, 20260721, 20260722, 20260723, 20260724, 20260727, 20260728, 20260729, 20260730, 20260731, 20260803, 20260804, 20260805, 20260806, 20260807, 20260810, 20260811, 20260812, 20260813, 20260814, 20260817, 20260818, 20260819, 20260820, 20260821, 20260824, 20260825, 20260826, 20260827, 20260828, 20260831

| 原生指标 | 值 | 单位 | 分母 | 汇总 | 状态 |
| --- | --- | --- | --- | --- | --- |
| full82_net_cash | 2.29686940000005 | unit_cash | 82 verified dates, flat terminal path only | sum | known |
| full82_mean_net_bps | 0.13183004832207246 | bp/trade | completed unit round trips | mean | known |
| completed_trades | 2154 | trades | 82 verified expected dates | count | known |
| terminal_unknown_inventory | 0 | positions | parent path terminal inventory | count | known |
| original45_completed_subset_cash | 3.290634399999898 | unit_cash | completed exits in original45 | sum | known |
| original45_mean_net_bps | 0.31814056521152134 | bp/trade | completed exits in original45 | mean | known |
| original45_completed_trades | 1442 | trades | completed exits in original45 | count | known |
| original45_fill_cashflow | 3.2906344000025527 | unit_cash | actual fills during original45; cashflow with inventory, not MTM or completed profit | sum | known |
| original45_daily_cash_ci_low | -0.0054216176666734015 | unit_cash/day | 5-day blocks 2000 seed20261013 | bootstrap_2.5pct | known |
| original45_daily_cash_ci_high | 0.16674616622222915 | unit_cash/day | 5-day blocks 2000 seed20261013 | bootstrap_97.5pct | known |
| extension37_completed_subset_cash | -0.9937649999998474 | unit_cash | completed exits in extension37 | sum | known |
| extension37_mean_net_bps | -0.24550108279391816 | bp/trade | completed exits in extension37 | mean | known |
| extension37_completed_trades | 712 | trades | completed exits in extension37 | count | known |
| extension37_fill_cashflow | -0.993764999999371 | unit_cash | actual fills during extension37; cashflow with inventory, not MTM or completed profit | sum | known |
| extension37_daily_cash_ci_low | -0.06665891256756289 | unit_cash/day | 5-day blocks 2000 seed20261013 | bootstrap_2.5pct | known |
| extension37_daily_cash_ci_high | 0.002572906351353221 | unit_cash/day | 5-day blocks 2000 seed20261013 | bootstrap_97.5pct | known |
| full82_completed_subset_cash | 2.29686940000005 | unit_cash | completed exits in full82 | sum | known |
| full82_mean_net_bps | 0.13183004832207246 | bp/trade | completed exits in full82 | mean | known |
| full82_completed_trades | 2154 | trades | completed exits in full82 | count | known |
| full82_fill_cashflow | 2.2968694000011993 | unit_cash | actual fills during full82; cashflow with inventory, not MTM or completed profit | sum | known |
| full82_daily_cash_ci_low | -0.022638378536588094 | unit_cash/day | 5-day blocks 2000 seed20261013 | bootstrap_2.5pct | known |
| full82_daily_cash_ci_high | 0.08437651042683124 | unit_cash/day | 5-day blocks 2000 seed20261013 | bootstrap_97.5pct | known |
| development38_completed_subset_cash | 2.9042695999998576 | unit_cash | completed exits in development38 | sum | known |
| development38_mean_net_bps | 0.32355784375129987 | bp/trade | completed exits in development38 | mean | known |
| development38_completed_trades | 1227 | trades | completed exits in development38 | count | known |
| development38_fill_cashflow | 2.904269599998891 | unit_cash | actual fills during development38; cashflow with inventory, not MTM or completed profit | sum | known |
| development38_daily_cash_ci_low | -0.021135588947377305 | unit_cash/day | 5-day blocks 2000 seed20261013 | bootstrap_2.5pct | known |
| development38_daily_cash_ci_high | 0.1808354515789438 | unit_cash/day | 5-day blocks 2000 seed20261013 | bootstrap_97.5pct | known |
| viewedJuly7_completed_subset_cash | 0.38636480000004025 | unit_cash | completed exits in viewedJuly7 | sum | known |
| viewedJuly7_mean_net_bps | 0.2872242825682269 | bp/trade | completed exits in viewedJuly7 | mean | known |
| viewedJuly7_completed_trades | 215 | trades | completed exits in viewedJuly7 | count | known |
| viewedJuly7_fill_cashflow | 0.3863647999999813 | unit_cash | actual fills during viewedJuly7; cashflow with inventory, not MTM or completed profit | sum | known |
| viewedJuly7_daily_cash_ci_low | 0.03755711428572366 | unit_cash/day | 5-day blocks 2000 seed20261013 | bootstrap_2.5pct | known |
| viewedJuly7_daily_cash_ci_high | 0.09630048571428458 | unit_cash/day | 5-day blocks 2000 seed20261013 | bootstrap_97.5pct | known |
| July_extension_completed_subset_cash | -1.026354799999964 | unit_cash | completed exits in July_extension | sum | known |
| July_extension_mean_net_bps | -0.6645722509975049 | bp/trade | completed exits in July_extension | mean | known |
| July_extension_completed_trades | 267 | trades | completed exits in July_extension | count | known |
| July_extension_fill_cashflow | -1.0263548000007674 | unit_cash | actual fills during July_extension; cashflow with inventory, not MTM or completed profit | sum | known |
| July_extension_daily_cash_ci_low | -0.09995683656249205 | unit_cash/day | 5-day blocks 2000 seed20261013 | bootstrap_2.5pct | known |
| July_extension_daily_cash_ci_high | -0.03879608749999796 | unit_cash/day | 5-day blocks 2000 seed20261013 | bootstrap_97.5pct | known |
| August_completed_subset_cash | 0.0325898000001166 | unit_cash | completed exits in August | sum | known |
| August_mean_net_bps | 0.0059416181282339635 | bp/trade | completed exits in August | mean | known |
| August_completed_trades | 445 | trades | completed exits in August | count | known |
| August_fill_cashflow | 0.03258980000066458 | unit_cash | actual fills during August; cashflow with inventory, not MTM or completed profit | sum | known |
| August_daily_cash_ci_low | -0.06403375404761444 | unit_cash/day | 5-day blocks 2000 seed20261013 | bootstrap_2.5pct | known |
| August_daily_cash_ci_high | 0.03840920500000042 | unit_cash/day | 5-day blocks 2000 seed20261013 | bootstrap_97.5pct | known |
| cross_date_trades | 1 | trades | completed unit round trips | count | known |
| holding_occupancy_seconds | 66532.933 | s | sum of completed inventory holding times | sum | known |
| remove_best_day_cash | 1.5552078000000793 | unit_cash | 82-day completed subset less best exit day | sum | known |
| remove_best_trade_cash | 1.6038522000000541 | unit_cash | completed subset less best trade | sum | known |

限制：原45日已查看；新增37日已在F2扩展研究中查看，不是独立holdout；差距诊断仅覆盖原45日；现金按退出日归因；成交现金流另列，均不是账户MTM；未作多重比较校正；区间跨零不等于等效；固定费用和proxy时钟，不包含资金费和真实执行容量验证；暂定工作基线是用户指定比较对象，不代表收益优越或人工研究接受；入场筛选后信号统计单列，不冒充完整F2信号统计；实际fill后固定2秒响应未恢复时明确缺口，不新增策略条件；独立完整路径对照。；期末状态 flat；未知库存 0；原45日AU空头亏损、多空低于多头及利润集中事实保留于原报告。；技术自查通过；独立技术审查pending，人工研究复核pending。；82 verified expected dates, 45 original +37 extension; exploratory viewed data; unknown inventory separately disclosed

- PnL_path：missing_facts；no equity or account-value source is projected
- cancel_attribution：missing_facts；cancel attribution facts unavailable
- fill_markout：missing_facts；registered fill markout/entry-edge fact is unavailable
- maker_fill：missing_facts；maker order/fill facts unavailable
- signal_bins：missing_facts；no registered source training-bin column

## AG S_H5 完整独立路径（说明修订v2）

评价：exp_20261021_ag_au_h5_extension_20260831_v1/AG_S_H5_full82/full82_v2；来源运行：run-27b913988332403fa8565619a651fafd。

实际日期：20260507, 20260508, 20260511, 20260512, 20260513, 20260514, 20260515, 20260518, 20260519, 20260520, 20260521, 20260522, 20260525, 20260526, 20260527, 20260528, 20260529, 20260601, 20260602, 20260603, 20260604, 20260605, 20260608, 20260609, 20260610, 20260611, 20260612, 20260615, 20260616, 20260617, 20260618, 20260622, 20260623, 20260624, 20260625, 20260626, 20260629, 20260630, 20260701, 20260702, 20260703, 20260706, 20260707, 20260708, 20260709, 20260710, 20260713, 20260714, 20260715, 20260716, 20260717, 20260720, 20260721, 20260722, 20260723, 20260724, 20260727, 20260728, 20260729, 20260730, 20260731, 20260803, 20260804, 20260805, 20260806, 20260807, 20260810, 20260811, 20260812, 20260813, 20260814, 20260817, 20260818, 20260819, 20260820, 20260821, 20260824, 20260825, 20260826, 20260827, 20260828, 20260831

| 原生指标 | 值 | 单位 | 分母 | 汇总 | 状态 |
| --- | --- | --- | --- | --- | --- |
| full82_net_cash | 2.29686940000005 | unit_cash | 82 verified dates, flat terminal path only | sum | known |
| full82_mean_net_bps | 0.13183004832207246 | bp/trade | completed unit round trips | mean | known |
| completed_trades | 2154 | trades | 82 verified expected dates | count | known |
| terminal_unknown_inventory | 0 | positions | parent path terminal inventory | count | known |
| original45_completed_subset_cash | 3.290634399999898 | unit_cash | completed exits in original45 | sum | known |
| original45_mean_net_bps | 0.31814056521152134 | bp/trade | completed exits in original45 | mean | known |
| original45_completed_trades | 1442 | trades | completed exits in original45 | count | known |
| original45_fill_cashflow | 3.2906344000025527 | unit_cash | actual fills during original45; cashflow with inventory, not MTM or completed profit | sum | known |
| original45_daily_cash_ci_low | -0.0054216176666734015 | unit_cash/day | 5-day blocks 2000 seed20261013 | bootstrap_2.5pct | known |
| original45_daily_cash_ci_high | 0.16674616622222915 | unit_cash/day | 5-day blocks 2000 seed20261013 | bootstrap_97.5pct | known |
| extension37_completed_subset_cash | -0.9937649999998474 | unit_cash | completed exits in extension37 | sum | known |
| extension37_mean_net_bps | -0.24550108279391816 | bp/trade | completed exits in extension37 | mean | known |
| extension37_completed_trades | 712 | trades | completed exits in extension37 | count | known |
| extension37_fill_cashflow | -0.993764999999371 | unit_cash | actual fills during extension37; cashflow with inventory, not MTM or completed profit | sum | known |
| extension37_daily_cash_ci_low | -0.06665891256756289 | unit_cash/day | 5-day blocks 2000 seed20261013 | bootstrap_2.5pct | known |
| extension37_daily_cash_ci_high | 0.002572906351353221 | unit_cash/day | 5-day blocks 2000 seed20261013 | bootstrap_97.5pct | known |
| full82_completed_subset_cash | 2.29686940000005 | unit_cash | completed exits in full82 | sum | known |
| full82_mean_net_bps | 0.13183004832207246 | bp/trade | completed exits in full82 | mean | known |
| full82_completed_trades | 2154 | trades | completed exits in full82 | count | known |
| full82_fill_cashflow | 2.2968694000011993 | unit_cash | actual fills during full82; cashflow with inventory, not MTM or completed profit | sum | known |
| full82_daily_cash_ci_low | -0.022638378536588094 | unit_cash/day | 5-day blocks 2000 seed20261013 | bootstrap_2.5pct | known |
| full82_daily_cash_ci_high | 0.08437651042683124 | unit_cash/day | 5-day blocks 2000 seed20261013 | bootstrap_97.5pct | known |
| development38_completed_subset_cash | 2.9042695999998576 | unit_cash | completed exits in development38 | sum | known |
| development38_mean_net_bps | 0.32355784375129987 | bp/trade | completed exits in development38 | mean | known |
| development38_completed_trades | 1227 | trades | completed exits in development38 | count | known |
| development38_fill_cashflow | 2.904269599998891 | unit_cash | actual fills during development38; cashflow with inventory, not MTM or completed profit | sum | known |
| development38_daily_cash_ci_low | -0.021135588947377305 | unit_cash/day | 5-day blocks 2000 seed20261013 | bootstrap_2.5pct | known |
| development38_daily_cash_ci_high | 0.1808354515789438 | unit_cash/day | 5-day blocks 2000 seed20261013 | bootstrap_97.5pct | known |
| viewedJuly7_completed_subset_cash | 0.38636480000004025 | unit_cash | completed exits in viewedJuly7 | sum | known |
| viewedJuly7_mean_net_bps | 0.2872242825682269 | bp/trade | completed exits in viewedJuly7 | mean | known |
| viewedJuly7_completed_trades | 215 | trades | completed exits in viewedJuly7 | count | known |
| viewedJuly7_fill_cashflow | 0.3863647999999813 | unit_cash | actual fills during viewedJuly7; cashflow with inventory, not MTM or completed profit | sum | known |
| viewedJuly7_daily_cash_ci_low | 0.03755711428572366 | unit_cash/day | 5-day blocks 2000 seed20261013 | bootstrap_2.5pct | known |
| viewedJuly7_daily_cash_ci_high | 0.09630048571428458 | unit_cash/day | 5-day blocks 2000 seed20261013 | bootstrap_97.5pct | known |
| July_extension_completed_subset_cash | -1.026354799999964 | unit_cash | completed exits in July_extension | sum | known |
| July_extension_mean_net_bps | -0.6645722509975049 | bp/trade | completed exits in July_extension | mean | known |
| July_extension_completed_trades | 267 | trades | completed exits in July_extension | count | known |
| July_extension_fill_cashflow | -1.0263548000007674 | unit_cash | actual fills during July_extension; cashflow with inventory, not MTM or completed profit | sum | known |
| July_extension_daily_cash_ci_low | -0.09995683656249205 | unit_cash/day | 5-day blocks 2000 seed20261013 | bootstrap_2.5pct | known |
| July_extension_daily_cash_ci_high | -0.03879608749999796 | unit_cash/day | 5-day blocks 2000 seed20261013 | bootstrap_97.5pct | known |
| August_completed_subset_cash | 0.0325898000001166 | unit_cash | completed exits in August | sum | known |
| August_mean_net_bps | 0.0059416181282339635 | bp/trade | completed exits in August | mean | known |
| August_completed_trades | 445 | trades | completed exits in August | count | known |
| August_fill_cashflow | 0.03258980000066458 | unit_cash | actual fills during August; cashflow with inventory, not MTM or completed profit | sum | known |
| August_daily_cash_ci_low | -0.06403375404761444 | unit_cash/day | 5-day blocks 2000 seed20261013 | bootstrap_2.5pct | known |
| August_daily_cash_ci_high | 0.03840920500000042 | unit_cash/day | 5-day blocks 2000 seed20261013 | bootstrap_97.5pct | known |
| cross_date_trades | 1 | trades | completed unit round trips | count | known |
| holding_occupancy_seconds | 66532.933 | s | sum of completed inventory holding times | sum | known |
| remove_best_day_cash | 1.5552078000000793 | unit_cash | 82-day completed subset less best exit day | sum | known |
| remove_best_trade_cash | 1.6038522000000541 | unit_cash | completed subset less best trade | sum | known |

限制：原45日已查看；新增37日已在F2扩展研究中查看，不是独立holdout；差距诊断仅覆盖原45日；现金按退出日归因；成交现金流另列，均不是账户MTM；未作多重比较校正；区间跨零不等于等效；固定费用和proxy时钟，不包含资金费和真实执行容量验证；暂定工作基线是用户指定比较对象，不代表收益优越或人工研究接受；入场筛选后信号统计单列，不冒充完整F2信号统计；实际fill后固定2秒响应未恢复时明确缺口，不新增策略条件；独立完整路径对照。；期末状态 flat；未知库存 0；原45日AU空头亏损、多空低于多头及利润集中事实保留于原报告。；技术自查通过；独立技术审查pending，人工研究复核pending。；本版仅修正已查看样本的来源说明；原v1保留档案，所有策略与数值指标相同。；82 verified expected dates, 45 original +37 extension; exploratory viewed data; unknown inventory separately disclosed

- PnL_path：missing_facts；no equity or account-value source is projected
- cancel_attribution：missing_facts；cancel attribution facts unavailable
- fill_markout：missing_facts；registered fill markout/entry-edge fact is unavailable
- maker_fill：missing_facts；maker order/fill facts unavailable
- signal_bins：missing_facts；no registered source training-bin column

## AG S_raw 完整独立路径（档案v1，样本说明已更正）

评价：exp_20261021_ag_au_h5_extension_20260831_v1/AG_S_raw_full82/full82_v1；来源运行：run-27b913988332403fa8565619a651fafd。

实际日期：20260507, 20260508, 20260511, 20260512, 20260513, 20260514, 20260515, 20260518, 20260519, 20260520, 20260521, 20260522, 20260525, 20260526, 20260527, 20260528, 20260529, 20260601, 20260602, 20260603, 20260604, 20260605, 20260608, 20260609, 20260610, 20260611, 20260612, 20260615, 20260616, 20260617, 20260618, 20260622, 20260623, 20260624, 20260625, 20260626, 20260629, 20260630, 20260701, 20260702, 20260703, 20260706, 20260707, 20260708, 20260709, 20260710, 20260713, 20260714, 20260715, 20260716, 20260717, 20260720, 20260721, 20260722, 20260723, 20260724, 20260727, 20260728, 20260729, 20260730, 20260731, 20260803, 20260804, 20260805, 20260806, 20260807, 20260810, 20260811, 20260812, 20260813, 20260814, 20260817, 20260818, 20260819, 20260820, 20260821, 20260824, 20260825, 20260826, 20260827, 20260828, 20260831

| 原生指标 | 值 | 单位 | 分母 | 汇总 | 状态 |
| --- | --- | --- | --- | --- | --- |
| full82_net_cash | -21.935849999999547 | unit_cash | 82 verified dates, flat terminal path only | sum | known |
| full82_mean_net_bps | -0.3531494790523316 | bp/trade | completed unit round trips | mean | known |
| completed_trades | 9499 | trades | 82 verified expected dates | count | known |
| terminal_unknown_inventory | 0 | positions | parent path terminal inventory | count | known |
| original45_completed_subset_cash | -9.767495799999779 | unit_cash | completed exits in original45 | sum | known |
| original45_mean_net_bps | -0.25487205274076 | bp/trade | completed exits in original45 | mean | known |
| original45_completed_trades | 5608 | trades | completed exits in original45 | count | known |
| original45_fill_cashflow | 49.278961200001014 | unit_cash | actual fills during original45; cashflow with inventory, not MTM or completed profit | sum | known |
| original45_daily_cash_ci_low | -0.35639104555554807 | unit_cash/day | 5-day blocks 2000 seed20261013 | bootstrap_2.5pct | known |
| original45_daily_cash_ci_high | -0.06415427133331958 | unit_cash/day | 5-day blocks 2000 seed20261013 | bootstrap_97.5pct | known |
| extension37_completed_subset_cash | -12.16835419999977 | unit_cash | completed exits in extension37 | sum | known |
| extension37_mean_net_bps | -0.4947942507704744 | bp/trade | completed exits in extension37 | mean | known |
| extension37_completed_trades | 3891 | trades | completed exits in extension37 | count | known |
| extension37_fill_cashflow | -71.21481120000036 | unit_cash | actual fills during extension37; cashflow with inventory, not MTM or completed profit | sum | known |
| extension37_daily_cash_ci_low | -0.5289523994594436 | unit_cash/day | 5-day blocks 2000 seed20261013 | bootstrap_2.5pct | known |
| extension37_daily_cash_ci_high | -0.16353159594593017 | unit_cash/day | 5-day blocks 2000 seed20261013 | bootstrap_97.5pct | known |
| full82_completed_subset_cash | -21.935849999999547 | unit_cash | completed exits in full82 | sum | known |
| full82_mean_net_bps | -0.3531494790523316 | bp/trade | completed exits in full82 | mean | known |
| full82_completed_trades | 9499 | trades | completed exits in full82 | count | known |
| full82_fill_cashflow | -21.93584999999665 | unit_cash | actual fills during full82; cashflow with inventory, not MTM or completed profit | sum | known |
| full82_daily_cash_ci_low | -0.38341287353657805 | unit_cash/day | 5-day blocks 2000 seed20261013 | bootstrap_2.5pct | known |
| full82_daily_cash_ci_high | -0.14366442353657724 | unit_cash/day | 5-day blocks 2000 seed20261013 | bootstrap_97.5pct | known |
| development38_completed_subset_cash | -8.820465199999838 | unit_cash | completed exits in development38 | sum | known |
| development38_mean_net_bps | -0.25047609790298125 | bp/trade | completed exits in development38 | mean | known |
| development38_completed_trades | 5068 | trades | completed exits in development38 | count | known |
| development38_fill_cashflow | -8.820465199998921 | unit_cash | actual fills during development38; cashflow with inventory, not MTM or completed profit | sum | known |
| development38_daily_cash_ci_low | -0.3712814227631565 | unit_cash/day | 5-day blocks 2000 seed20261013 | bootstrap_2.5pct | known |
| development38_daily_cash_ci_high | -0.029012726578936096 | unit_cash/day | 5-day blocks 2000 seed20261013 | bootstrap_97.5pct | known |
| viewedJuly7_completed_subset_cash | -0.9470305999999404 | unit_cash | completed exits in viewedJuly7 | sum | known |
| viewedJuly7_mean_net_bps | -0.296128902959025 | bp/trade | completed exits in viewedJuly7 | mean | known |
| viewedJuly7_completed_trades | 540 | trades | completed exits in viewedJuly7 | count | known |
| viewedJuly7_fill_cashflow | 58.09942640000096 | unit_cash | actual fills during viewedJuly7; cashflow with inventory, not MTM or completed profit | sum | known |
| viewedJuly7_daily_cash_ci_low | -0.17161057142856737 | unit_cash/day | 5-day blocks 2000 seed20261013 | bootstrap_2.5pct | known |
| viewedJuly7_daily_cash_ci_high | -0.11178405714285759 | unit_cash/day | 5-day blocks 2000 seed20261013 | bootstrap_97.5pct | known |
| July_extension_completed_subset_cash | -3.552072399999909 | unit_cash | completed exits in July_extension | sum | known |
| July_extension_mean_net_bps | -0.6591288478348216 | bp/trade | completed exits in July_extension | mean | known |
| July_extension_completed_trades | 932 | trades | completed exits in July_extension | count | known |
| July_extension_fill_cashflow | -62.598529400002434 | unit_cash | actual fills during July_extension; cashflow with inventory, not MTM or completed profit | sum | known |
| July_extension_daily_cash_ci_low | -0.30489653749999523 | unit_cash/day | 5-day blocks 2000 seed20261013 | bootstrap_2.5pct | known |
| July_extension_daily_cash_ci_high | -0.14156731187498894 | unit_cash/day | 5-day blocks 2000 seed20261013 | bootstrap_97.5pct | known |
| August_completed_subset_cash | -8.61628179999986 | unit_cash | completed exits in August | sum | known |
| August_mean_net_bps | -0.44303357335784455 | bp/trade | completed exits in August | mean | known |
| August_completed_trades | 2959 | trades | completed exits in August | count | known |
| August_fill_cashflow | -8.616281799997282 | unit_cash | actual fills during August; cashflow with inventory, not MTM or completed profit | sum | known |
| August_daily_cash_ci_low | -0.7316589040475963 | unit_cash/day | 5-day blocks 2000 seed20261013 | bootstrap_2.5pct | known |
| August_daily_cash_ci_high | -0.21840036190476297 | unit_cash/day | 5-day blocks 2000 seed20261013 | bootstrap_97.5pct | known |
| cross_date_trades | 3 | trades | completed unit round trips | count | known |
| holding_occupancy_seconds | 748202.4730000001 | s | sum of completed inventory holding times | sum | known |
| remove_best_day_cash | -22.974746999999592 | unit_cash | 82-day completed subset less best exit day | sum | known |
| remove_best_trade_cash | -23.026499599999543 | unit_cash | completed subset less best trade | sum | known |

限制：原45日已查看；新增37日已在F2扩展研究中查看，不是独立holdout；差距诊断仅覆盖原45日；现金按退出日归因；成交现金流另列，均不是账户MTM；未作多重比较校正；区间跨零不等于等效；固定费用和proxy时钟，不包含资金费和真实执行容量验证；暂定工作基线是用户指定比较对象，不代表收益优越或人工研究接受；入场筛选后信号统计单列，不冒充完整F2信号统计；实际fill后固定2秒响应未恢复时明确缺口，不新增策略条件；独立完整路径对照。；期末状态 flat；未知库存 0；原45日AU空头亏损、多空低于多头及利润集中事实保留于原报告。；技术自查通过；独立技术审查pending，人工研究复核pending。；82 verified expected dates, 45 original +37 extension; exploratory viewed data; unknown inventory separately disclosed

- PnL_path：missing_facts；no equity or account-value source is projected
- cancel_attribution：missing_facts；cancel attribution facts unavailable
- fill_markout：missing_facts；registered fill markout/entry-edge fact is unavailable
- maker_fill：missing_facts；maker order/fill facts unavailable
- signal_bins：missing_facts；no registered source training-bin column

## AG S_raw 完整独立路径（说明修订v2）

评价：exp_20261021_ag_au_h5_extension_20260831_v1/AG_S_raw_full82/full82_v2；来源运行：run-27b913988332403fa8565619a651fafd。

实际日期：20260507, 20260508, 20260511, 20260512, 20260513, 20260514, 20260515, 20260518, 20260519, 20260520, 20260521, 20260522, 20260525, 20260526, 20260527, 20260528, 20260529, 20260601, 20260602, 20260603, 20260604, 20260605, 20260608, 20260609, 20260610, 20260611, 20260612, 20260615, 20260616, 20260617, 20260618, 20260622, 20260623, 20260624, 20260625, 20260626, 20260629, 20260630, 20260701, 20260702, 20260703, 20260706, 20260707, 20260708, 20260709, 20260710, 20260713, 20260714, 20260715, 20260716, 20260717, 20260720, 20260721, 20260722, 20260723, 20260724, 20260727, 20260728, 20260729, 20260730, 20260731, 20260803, 20260804, 20260805, 20260806, 20260807, 20260810, 20260811, 20260812, 20260813, 20260814, 20260817, 20260818, 20260819, 20260820, 20260821, 20260824, 20260825, 20260826, 20260827, 20260828, 20260831

| 原生指标 | 值 | 单位 | 分母 | 汇总 | 状态 |
| --- | --- | --- | --- | --- | --- |
| full82_net_cash | -21.935849999999547 | unit_cash | 82 verified dates, flat terminal path only | sum | known |
| full82_mean_net_bps | -0.3531494790523316 | bp/trade | completed unit round trips | mean | known |
| completed_trades | 9499 | trades | 82 verified expected dates | count | known |
| terminal_unknown_inventory | 0 | positions | parent path terminal inventory | count | known |
| original45_completed_subset_cash | -9.767495799999779 | unit_cash | completed exits in original45 | sum | known |
| original45_mean_net_bps | -0.25487205274076 | bp/trade | completed exits in original45 | mean | known |
| original45_completed_trades | 5608 | trades | completed exits in original45 | count | known |
| original45_fill_cashflow | 49.278961200001014 | unit_cash | actual fills during original45; cashflow with inventory, not MTM or completed profit | sum | known |
| original45_daily_cash_ci_low | -0.35639104555554807 | unit_cash/day | 5-day blocks 2000 seed20261013 | bootstrap_2.5pct | known |
| original45_daily_cash_ci_high | -0.06415427133331958 | unit_cash/day | 5-day blocks 2000 seed20261013 | bootstrap_97.5pct | known |
| extension37_completed_subset_cash | -12.16835419999977 | unit_cash | completed exits in extension37 | sum | known |
| extension37_mean_net_bps | -0.4947942507704744 | bp/trade | completed exits in extension37 | mean | known |
| extension37_completed_trades | 3891 | trades | completed exits in extension37 | count | known |
| extension37_fill_cashflow | -71.21481120000036 | unit_cash | actual fills during extension37; cashflow with inventory, not MTM or completed profit | sum | known |
| extension37_daily_cash_ci_low | -0.5289523994594436 | unit_cash/day | 5-day blocks 2000 seed20261013 | bootstrap_2.5pct | known |
| extension37_daily_cash_ci_high | -0.16353159594593017 | unit_cash/day | 5-day blocks 2000 seed20261013 | bootstrap_97.5pct | known |
| full82_completed_subset_cash | -21.935849999999547 | unit_cash | completed exits in full82 | sum | known |
| full82_mean_net_bps | -0.3531494790523316 | bp/trade | completed exits in full82 | mean | known |
| full82_completed_trades | 9499 | trades | completed exits in full82 | count | known |
| full82_fill_cashflow | -21.93584999999665 | unit_cash | actual fills during full82; cashflow with inventory, not MTM or completed profit | sum | known |
| full82_daily_cash_ci_low | -0.38341287353657805 | unit_cash/day | 5-day blocks 2000 seed20261013 | bootstrap_2.5pct | known |
| full82_daily_cash_ci_high | -0.14366442353657724 | unit_cash/day | 5-day blocks 2000 seed20261013 | bootstrap_97.5pct | known |
| development38_completed_subset_cash | -8.820465199999838 | unit_cash | completed exits in development38 | sum | known |
| development38_mean_net_bps | -0.25047609790298125 | bp/trade | completed exits in development38 | mean | known |
| development38_completed_trades | 5068 | trades | completed exits in development38 | count | known |
| development38_fill_cashflow | -8.820465199998921 | unit_cash | actual fills during development38; cashflow with inventory, not MTM or completed profit | sum | known |
| development38_daily_cash_ci_low | -0.3712814227631565 | unit_cash/day | 5-day blocks 2000 seed20261013 | bootstrap_2.5pct | known |
| development38_daily_cash_ci_high | -0.029012726578936096 | unit_cash/day | 5-day blocks 2000 seed20261013 | bootstrap_97.5pct | known |
| viewedJuly7_completed_subset_cash | -0.9470305999999404 | unit_cash | completed exits in viewedJuly7 | sum | known |
| viewedJuly7_mean_net_bps | -0.296128902959025 | bp/trade | completed exits in viewedJuly7 | mean | known |
| viewedJuly7_completed_trades | 540 | trades | completed exits in viewedJuly7 | count | known |
| viewedJuly7_fill_cashflow | 58.09942640000096 | unit_cash | actual fills during viewedJuly7; cashflow with inventory, not MTM or completed profit | sum | known |
| viewedJuly7_daily_cash_ci_low | -0.17161057142856737 | unit_cash/day | 5-day blocks 2000 seed20261013 | bootstrap_2.5pct | known |
| viewedJuly7_daily_cash_ci_high | -0.11178405714285759 | unit_cash/day | 5-day blocks 2000 seed20261013 | bootstrap_97.5pct | known |
| July_extension_completed_subset_cash | -3.552072399999909 | unit_cash | completed exits in July_extension | sum | known |
| July_extension_mean_net_bps | -0.6591288478348216 | bp/trade | completed exits in July_extension | mean | known |
| July_extension_completed_trades | 932 | trades | completed exits in July_extension | count | known |
| July_extension_fill_cashflow | -62.598529400002434 | unit_cash | actual fills during July_extension; cashflow with inventory, not MTM or completed profit | sum | known |
| July_extension_daily_cash_ci_low | -0.30489653749999523 | unit_cash/day | 5-day blocks 2000 seed20261013 | bootstrap_2.5pct | known |
| July_extension_daily_cash_ci_high | -0.14156731187498894 | unit_cash/day | 5-day blocks 2000 seed20261013 | bootstrap_97.5pct | known |
| August_completed_subset_cash | -8.61628179999986 | unit_cash | completed exits in August | sum | known |
| August_mean_net_bps | -0.44303357335784455 | bp/trade | completed exits in August | mean | known |
| August_completed_trades | 2959 | trades | completed exits in August | count | known |
| August_fill_cashflow | -8.616281799997282 | unit_cash | actual fills during August; cashflow with inventory, not MTM or completed profit | sum | known |
| August_daily_cash_ci_low | -0.7316589040475963 | unit_cash/day | 5-day blocks 2000 seed20261013 | bootstrap_2.5pct | known |
| August_daily_cash_ci_high | -0.21840036190476297 | unit_cash/day | 5-day blocks 2000 seed20261013 | bootstrap_97.5pct | known |
| cross_date_trades | 3 | trades | completed unit round trips | count | known |
| holding_occupancy_seconds | 748202.4730000001 | s | sum of completed inventory holding times | sum | known |
| remove_best_day_cash | -22.974746999999592 | unit_cash | 82-day completed subset less best exit day | sum | known |
| remove_best_trade_cash | -23.026499599999543 | unit_cash | completed subset less best trade | sum | known |

限制：原45日已查看；新增37日已在F2扩展研究中查看，不是独立holdout；差距诊断仅覆盖原45日；现金按退出日归因；成交现金流另列，均不是账户MTM；未作多重比较校正；区间跨零不等于等效；固定费用和proxy时钟，不包含资金费和真实执行容量验证；暂定工作基线是用户指定比较对象，不代表收益优越或人工研究接受；入场筛选后信号统计单列，不冒充完整F2信号统计；实际fill后固定2秒响应未恢复时明确缺口，不新增策略条件；独立完整路径对照。；期末状态 flat；未知库存 0；原45日AU空头亏损、多空低于多头及利润集中事实保留于原报告。；技术自查通过；独立技术审查pending，人工研究复核pending。；本版仅修正已查看样本的来源说明；原v1保留档案，所有策略与数值指标相同。；82 verified expected dates, 45 original +37 extension; exploratory viewed data; unknown inventory separately disclosed

- PnL_path：missing_facts；no equity or account-value source is projected
- cancel_attribution：missing_facts；cancel attribution facts unavailable
- fill_markout：missing_facts；registered fill markout/entry-edge fact is unavailable
- maker_fill：missing_facts；maker order/fill facts unavailable
- signal_bins：missing_facts；no registered source training-bin column

## AU LS_F 完整独立路径（档案v1，样本说明已更正）

评价：exp_20261021_ag_au_h5_extension_20260831_v1/AU_LS_F_full82/full82_v1；来源运行：run-27b913988332403fa8565619a651fafd。

实际日期：20260507, 20260508, 20260511, 20260512, 20260513, 20260514, 20260515, 20260518, 20260519, 20260520, 20260521, 20260522, 20260525, 20260526, 20260527, 20260528, 20260529, 20260601, 20260602, 20260603, 20260604, 20260605, 20260608, 20260609, 20260610, 20260611, 20260612, 20260615, 20260616, 20260617, 20260618, 20260622, 20260623, 20260624, 20260625, 20260626, 20260629, 20260630, 20260701, 20260702, 20260703, 20260706, 20260707, 20260708, 20260709, 20260710, 20260713, 20260714, 20260715, 20260716, 20260717, 20260720, 20260721, 20260722, 20260723, 20260724, 20260727, 20260728, 20260729, 20260730, 20260731, 20260803, 20260804, 20260805, 20260806, 20260807, 20260810, 20260811, 20260812, 20260813, 20260814, 20260817, 20260818, 20260819, 20260820, 20260821, 20260824, 20260825, 20260826, 20260827, 20260828, 20260831

| 原生指标 | 值 | 单位 | 分母 | 汇总 | 状态 |
| --- | --- | --- | --- | --- | --- |
| full82_net_cash | -814.4574309999953 | unit_cash | 82 verified dates, flat terminal path only | sum | known |
| full82_mean_net_bps | -0.1785347118364802 | bp/trade | completed unit round trips | mean | known |
| completed_trades | 10533 | trades | 82 verified expected dates | count | known |
| terminal_unknown_inventory | 0 | positions | parent path terminal inventory | count | known |
| original45_completed_subset_cash | -401.3626408000209 | unit_cash | completed exits in original45 | sum | known |
| original45_mean_net_bps | -0.15991500367568576 | bp/trade | completed exits in original45 | mean | known |
| original45_completed_trades | 5772 | trades | completed exits in original45 | count | known |
| original45_fill_cashflow | -401.3626408000846 | unit_cash | actual fills during original45; cashflow with inventory, not MTM or completed profit | sum | known |
| original45_daily_cash_ci_low | -18.18950805211155 | unit_cash/day | 5-day blocks 2000 seed20261013 | bootstrap_2.5pct | known |
| original45_daily_cash_ci_high | -1.4999977126675272 | unit_cash/day | 5-day blocks 2000 seed20261013 | bootstrap_97.5pct | known |
| extension37_completed_subset_cash | -413.0947901999743 | unit_cash | completed exits in extension37 | sum | known |
| extension37_mean_net_bps | -0.20110832147817423 | bp/trade | completed exits in extension37 | mean | known |
| extension37_completed_trades | 4761 | trades | completed exits in extension37 | count | known |
| extension37_fill_cashflow | -413.09479019995024 | unit_cash | actual fills during extension37; cashflow with inventory, not MTM or completed profit | sum | known |
| extension37_daily_cash_ci_low | -21.018959425945635 | unit_cash/day | 5-day blocks 2000 seed20261013 | bootstrap_2.5pct | known |
| extension37_daily_cash_ci_high | -3.275811939999106 | unit_cash/day | 5-day blocks 2000 seed20261013 | bootstrap_97.5pct | known |
| full82_completed_subset_cash | -814.4574309999953 | unit_cash | completed exits in full82 | sum | known |
| full82_mean_net_bps | -0.1785347118364802 | bp/trade | completed exits in full82 | mean | known |
| full82_completed_trades | 10533 | trades | completed exits in full82 | count | known |
| full82_fill_cashflow | -814.4574310001276 | unit_cash | actual fills during full82; cashflow with inventory, not MTM or completed profit | sum | known |
| full82_daily_cash_ci_low | -16.440489238292372 | unit_cash/day | 5-day blocks 2000 seed20261013 | bootstrap_2.5pct | known |
| full82_daily_cash_ci_high | -4.089197435609536 | unit_cash/day | 5-day blocks 2000 seed20261013 | bootstrap_97.5pct | known |
| development38_completed_subset_cash | -463.8157630000125 | unit_cash | completed exits in development38 | sum | known |
| development38_mean_net_bps | -0.206571193674755 | bp/trade | completed exits in development38 | mean | known |
| development38_completed_trades | 5228 | trades | completed exits in development38 | count | known |
| development38_fill_cashflow | -463.8157630001574 | unit_cash | actual fills during development38; cashflow with inventory, not MTM or completed profit | sum | known |
| development38_daily_cash_ci_low | -20.49693766355309 | unit_cash/day | 5-day blocks 2000 seed20261013 | bootstrap_2.5pct | known |
| development38_daily_cash_ci_high | -5.97284796789568 | unit_cash/day | 5-day blocks 2000 seed20261013 | bootstrap_97.5pct | known |
| viewedJuly7_completed_subset_cash | 62.45312219999166 | unit_cash | completed exits in viewedJuly7 | sum | known |
| viewedJuly7_mean_net_bps | 0.2884647046241927 | bp/trade | completed exits in viewedJuly7 | mean | known |
| viewedJuly7_completed_trades | 544 | trades | completed exits in viewedJuly7 | count | known |
| viewedJuly7_fill_cashflow | 62.453122200014604 | unit_cash | actual fills during viewedJuly7; cashflow with inventory, not MTM or completed profit | sum | known |
| viewedJuly7_daily_cash_ci_low | 3.403049371427527 | unit_cash/day | 5-day blocks 2000 seed20261013 | bootstrap_2.5pct | known |
| viewedJuly7_daily_cash_ci_high | 21.607708428569996 | unit_cash/day | 5-day blocks 2000 seed20261013 | bootstrap_97.5pct | known |
| July_extension_completed_subset_cash | -64.33615339999642 | unit_cash | completed exits in July_extension | sum | known |
| July_extension_mean_net_bps | -0.13590430536200265 | bp/trade | completed exits in July_extension | mean | known |
| July_extension_completed_trades | 1181 | trades | completed exits in July_extension | count | known |
| July_extension_fill_cashflow | -4149.011219200013 | unit_cash | actual fills during July_extension; cashflow with inventory, not MTM or completed profit | sum | known |
| July_extension_daily_cash_ci_low | -7.825517494375399 | unit_cash/day | 5-day blocks 2000 seed20261013 | bootstrap_2.5pct | known |
| July_extension_daily_cash_ci_high | 3.5613779428132193 | unit_cash/day | 5-day blocks 2000 seed20261013 | bootstrap_97.5pct | known |
| August_completed_subset_cash | -348.7586367999779 | unit_cash | completed exits in August | sum | known |
| August_mean_net_bps | -0.22261836143158165 | bp/trade | completed exits in August | mean | known |
| August_completed_trades | 3580 | trades | completed exits in August | count | known |
| August_fill_cashflow | 3735.9164290000062 | unit_cash | actual fills during August; cashflow with inventory, not MTM or completed profit | sum | known |
| August_daily_cash_ci_low | -31.119030812617517 | unit_cash/day | 5-day blocks 2000 seed20261013 | bootstrap_2.5pct | known |
| August_daily_cash_ci_high | -5.780303779045298 | unit_cash/day | 5-day blocks 2000 seed20261013 | bootstrap_97.5pct | known |
| cross_date_trades | 13 | trades | completed unit round trips | count | known |
| holding_occupancy_seconds | 1189823.272 | s | sum of completed inventory holding times | sum | known |
| remove_best_day_cash | -874.9244965999959 | unit_cash | 82-day completed subset less best exit day | sum | known |
| remove_best_trade_cash | -869.516096399995 | unit_cash | completed subset less best trade | sum | known |

限制：原45日已查看；新增37日已在F2扩展研究中查看，不是独立holdout；差距诊断仅覆盖原45日；现金按退出日归因；成交现金流另列，均不是账户MTM；未作多重比较校正；区间跨零不等于等效；固定费用和proxy时钟，不包含资金费和真实执行容量验证；暂定工作基线是用户指定比较对象，不代表收益优越或人工研究接受；入场筛选后信号统计单列，不冒充完整F2信号统计；实际fill后固定2秒响应未恢复时明确缺口，不新增策略条件；独立完整路径对照。；期末状态 flat；未知库存 0；原45日AU空头亏损、多空低于多头及利润集中事实保留于原报告。；技术自查通过；独立技术审查pending，人工研究复核pending。；82 verified expected dates, 45 original +37 extension; exploratory viewed data; unknown inventory separately disclosed

- PnL_path：missing_facts；no equity or account-value source is projected
- cancel_attribution：missing_facts；cancel attribution facts unavailable
- fill_markout：missing_facts；registered fill markout/entry-edge fact is unavailable
- maker_fill：missing_facts；maker order/fill facts unavailable
- signal_bins：missing_facts；no registered source training-bin column

## AU LS_F 完整独立路径（说明修订v2）

评价：exp_20261021_ag_au_h5_extension_20260831_v1/AU_LS_F_full82/full82_v2；来源运行：run-27b913988332403fa8565619a651fafd。

实际日期：20260507, 20260508, 20260511, 20260512, 20260513, 20260514, 20260515, 20260518, 20260519, 20260520, 20260521, 20260522, 20260525, 20260526, 20260527, 20260528, 20260529, 20260601, 20260602, 20260603, 20260604, 20260605, 20260608, 20260609, 20260610, 20260611, 20260612, 20260615, 20260616, 20260617, 20260618, 20260622, 20260623, 20260624, 20260625, 20260626, 20260629, 20260630, 20260701, 20260702, 20260703, 20260706, 20260707, 20260708, 20260709, 20260710, 20260713, 20260714, 20260715, 20260716, 20260717, 20260720, 20260721, 20260722, 20260723, 20260724, 20260727, 20260728, 20260729, 20260730, 20260731, 20260803, 20260804, 20260805, 20260806, 20260807, 20260810, 20260811, 20260812, 20260813, 20260814, 20260817, 20260818, 20260819, 20260820, 20260821, 20260824, 20260825, 20260826, 20260827, 20260828, 20260831

| 原生指标 | 值 | 单位 | 分母 | 汇总 | 状态 |
| --- | --- | --- | --- | --- | --- |
| full82_net_cash | -814.4574309999953 | unit_cash | 82 verified dates, flat terminal path only | sum | known |
| full82_mean_net_bps | -0.1785347118364802 | bp/trade | completed unit round trips | mean | known |
| completed_trades | 10533 | trades | 82 verified expected dates | count | known |
| terminal_unknown_inventory | 0 | positions | parent path terminal inventory | count | known |
| original45_completed_subset_cash | -401.3626408000209 | unit_cash | completed exits in original45 | sum | known |
| original45_mean_net_bps | -0.15991500367568576 | bp/trade | completed exits in original45 | mean | known |
| original45_completed_trades | 5772 | trades | completed exits in original45 | count | known |
| original45_fill_cashflow | -401.3626408000846 | unit_cash | actual fills during original45; cashflow with inventory, not MTM or completed profit | sum | known |
| original45_daily_cash_ci_low | -18.18950805211155 | unit_cash/day | 5-day blocks 2000 seed20261013 | bootstrap_2.5pct | known |
| original45_daily_cash_ci_high | -1.4999977126675272 | unit_cash/day | 5-day blocks 2000 seed20261013 | bootstrap_97.5pct | known |
| extension37_completed_subset_cash | -413.0947901999743 | unit_cash | completed exits in extension37 | sum | known |
| extension37_mean_net_bps | -0.20110832147817423 | bp/trade | completed exits in extension37 | mean | known |
| extension37_completed_trades | 4761 | trades | completed exits in extension37 | count | known |
| extension37_fill_cashflow | -413.09479019995024 | unit_cash | actual fills during extension37; cashflow with inventory, not MTM or completed profit | sum | known |
| extension37_daily_cash_ci_low | -21.018959425945635 | unit_cash/day | 5-day blocks 2000 seed20261013 | bootstrap_2.5pct | known |
| extension37_daily_cash_ci_high | -3.275811939999106 | unit_cash/day | 5-day blocks 2000 seed20261013 | bootstrap_97.5pct | known |
| full82_completed_subset_cash | -814.4574309999953 | unit_cash | completed exits in full82 | sum | known |
| full82_mean_net_bps | -0.1785347118364802 | bp/trade | completed exits in full82 | mean | known |
| full82_completed_trades | 10533 | trades | completed exits in full82 | count | known |
| full82_fill_cashflow | -814.4574310001276 | unit_cash | actual fills during full82; cashflow with inventory, not MTM or completed profit | sum | known |
| full82_daily_cash_ci_low | -16.440489238292372 | unit_cash/day | 5-day blocks 2000 seed20261013 | bootstrap_2.5pct | known |
| full82_daily_cash_ci_high | -4.089197435609536 | unit_cash/day | 5-day blocks 2000 seed20261013 | bootstrap_97.5pct | known |
| development38_completed_subset_cash | -463.8157630000125 | unit_cash | completed exits in development38 | sum | known |
| development38_mean_net_bps | -0.206571193674755 | bp/trade | completed exits in development38 | mean | known |
| development38_completed_trades | 5228 | trades | completed exits in development38 | count | known |
| development38_fill_cashflow | -463.8157630001574 | unit_cash | actual fills during development38; cashflow with inventory, not MTM or completed profit | sum | known |
| development38_daily_cash_ci_low | -20.49693766355309 | unit_cash/day | 5-day blocks 2000 seed20261013 | bootstrap_2.5pct | known |
| development38_daily_cash_ci_high | -5.97284796789568 | unit_cash/day | 5-day blocks 2000 seed20261013 | bootstrap_97.5pct | known |
| viewedJuly7_completed_subset_cash | 62.45312219999166 | unit_cash | completed exits in viewedJuly7 | sum | known |
| viewedJuly7_mean_net_bps | 0.2884647046241927 | bp/trade | completed exits in viewedJuly7 | mean | known |
| viewedJuly7_completed_trades | 544 | trades | completed exits in viewedJuly7 | count | known |
| viewedJuly7_fill_cashflow | 62.453122200014604 | unit_cash | actual fills during viewedJuly7; cashflow with inventory, not MTM or completed profit | sum | known |
| viewedJuly7_daily_cash_ci_low | 3.403049371427527 | unit_cash/day | 5-day blocks 2000 seed20261013 | bootstrap_2.5pct | known |
| viewedJuly7_daily_cash_ci_high | 21.607708428569996 | unit_cash/day | 5-day blocks 2000 seed20261013 | bootstrap_97.5pct | known |
| July_extension_completed_subset_cash | -64.33615339999642 | unit_cash | completed exits in July_extension | sum | known |
| July_extension_mean_net_bps | -0.13590430536200265 | bp/trade | completed exits in July_extension | mean | known |
| July_extension_completed_trades | 1181 | trades | completed exits in July_extension | count | known |
| July_extension_fill_cashflow | -4149.011219200013 | unit_cash | actual fills during July_extension; cashflow with inventory, not MTM or completed profit | sum | known |
| July_extension_daily_cash_ci_low | -7.825517494375399 | unit_cash/day | 5-day blocks 2000 seed20261013 | bootstrap_2.5pct | known |
| July_extension_daily_cash_ci_high | 3.5613779428132193 | unit_cash/day | 5-day blocks 2000 seed20261013 | bootstrap_97.5pct | known |
| August_completed_subset_cash | -348.7586367999779 | unit_cash | completed exits in August | sum | known |
| August_mean_net_bps | -0.22261836143158165 | bp/trade | completed exits in August | mean | known |
| August_completed_trades | 3580 | trades | completed exits in August | count | known |
| August_fill_cashflow | 3735.9164290000062 | unit_cash | actual fills during August; cashflow with inventory, not MTM or completed profit | sum | known |
| August_daily_cash_ci_low | -31.119030812617517 | unit_cash/day | 5-day blocks 2000 seed20261013 | bootstrap_2.5pct | known |
| August_daily_cash_ci_high | -5.780303779045298 | unit_cash/day | 5-day blocks 2000 seed20261013 | bootstrap_97.5pct | known |
| cross_date_trades | 13 | trades | completed unit round trips | count | known |
| holding_occupancy_seconds | 1189823.272 | s | sum of completed inventory holding times | sum | known |
| remove_best_day_cash | -874.9244965999959 | unit_cash | 82-day completed subset less best exit day | sum | known |
| remove_best_trade_cash | -869.516096399995 | unit_cash | completed subset less best trade | sum | known |

限制：原45日已查看；新增37日已在F2扩展研究中查看，不是独立holdout；差距诊断仅覆盖原45日；现金按退出日归因；成交现金流另列，均不是账户MTM；未作多重比较校正；区间跨零不等于等效；固定费用和proxy时钟，不包含资金费和真实执行容量验证；暂定工作基线是用户指定比较对象，不代表收益优越或人工研究接受；入场筛选后信号统计单列，不冒充完整F2信号统计；实际fill后固定2秒响应未恢复时明确缺口，不新增策略条件；独立完整路径对照。；期末状态 flat；未知库存 0；原45日AU空头亏损、多空低于多头及利润集中事实保留于原报告。；技术自查通过；独立技术审查pending，人工研究复核pending。；本版仅修正已查看样本的来源说明；原v1保留档案，所有策略与数值指标相同。；82 verified expected dates, 45 original +37 extension; exploratory viewed data; unknown inventory separately disclosed

- PnL_path：missing_facts；no equity or account-value source is projected
- cancel_attribution：missing_facts；cancel attribution facts unavailable
- fill_markout：missing_facts；registered fill markout/entry-edge fact is unavailable
- maker_fill：missing_facts；maker order/fill facts unavailable
- signal_bins：missing_facts；no registered source training-bin column

## AU LS_raw 完整独立路径（档案v1，样本说明已更正）

评价：exp_20261021_ag_au_h5_extension_20260831_v1/AU_LS_raw_full82/full82_v1；来源运行：run-27b913988332403fa8565619a651fafd。

实际日期：20260507, 20260508, 20260511, 20260512, 20260513, 20260514, 20260515, 20260518, 20260519, 20260520, 20260521, 20260522, 20260525, 20260526, 20260527, 20260528, 20260529, 20260601, 20260602, 20260603, 20260604, 20260605, 20260608, 20260609, 20260610, 20260611, 20260612, 20260615, 20260616, 20260617, 20260618, 20260622, 20260623, 20260624, 20260625, 20260626, 20260629, 20260630, 20260701, 20260702, 20260703, 20260706, 20260707, 20260708, 20260709, 20260710, 20260713, 20260714, 20260715, 20260716, 20260717, 20260720, 20260721, 20260722, 20260723, 20260724, 20260727, 20260728, 20260729, 20260730, 20260731, 20260803, 20260804, 20260805, 20260806, 20260807, 20260810, 20260811, 20260812, 20260813, 20260814, 20260817, 20260818, 20260819, 20260820, 20260821, 20260824, 20260825, 20260826, 20260827, 20260828, 20260831

| 原生指标 | 值 | 单位 | 分母 | 汇总 | 状态 |
| --- | --- | --- | --- | --- | --- |
| full82_net_cash | -889.5126362000049 | unit_cash | 82 verified dates, flat terminal path only | sum | known |
| full82_mean_net_bps | -0.18081519410411867 | bp/trade | completed unit round trips | mean | known |
| completed_trades | 11247 | trades | 82 verified expected dates | count | known |
| terminal_unknown_inventory | 0 | positions | parent path terminal inventory | count | known |
| original45_completed_subset_cash | -470.4406120000268 | unit_cash | completed exits in original45 | sum | known |
| original45_mean_net_bps | -0.17316956443387618 | bp/trade | completed exits in original45 | mean | known |
| original45_completed_trades | 6187 | trades | completed exits in original45 | count | known |
| original45_fill_cashflow | -470.4406120001654 | unit_cash | actual fills during original45; cashflow with inventory, not MTM or completed profit | sum | known |
| original45_daily_cash_ci_low | -19.93391627677855 | unit_cash/day | 5-day blocks 2000 seed20261013 | bootstrap_2.5pct | known |
| original45_daily_cash_ci_high | -1.553702153221365 | unit_cash/day | 5-day blocks 2000 seed20261013 | bootstrap_97.5pct | known |
| extension37_completed_subset_cash | -419.07202419997805 | unit_cash | completed exits in extension37 | sum | known |
| extension37_mean_net_bps | -0.19016371401909707 | bp/trade | completed exits in extension37 | mean | known |
| extension37_completed_trades | 5060 | trades | completed exits in extension37 | count | known |
| extension37_fill_cashflow | -419.07202420008707 | unit_cash | actual fills during extension37; cashflow with inventory, not MTM or completed profit | sum | known |
| extension37_daily_cash_ci_low | -22.62311746418913 | unit_cash/day | 5-day blocks 2000 seed20261013 | bootstrap_2.5pct | known |
| extension37_daily_cash_ci_high | -1.4923851020265364 | unit_cash/day | 5-day blocks 2000 seed20261013 | bootstrap_97.5pct | known |
| full82_completed_subset_cash | -889.5126362000049 | unit_cash | completed exits in full82 | sum | known |
| full82_mean_net_bps | -0.18081519410411867 | bp/trade | completed exits in full82 | mean | known |
| full82_completed_trades | 11247 | trades | completed exits in full82 | count | known |
| full82_fill_cashflow | -889.5126362002088 | unit_cash | actual fills during full82; cashflow with inventory, not MTM or completed profit | sum | known |
| full82_daily_cash_ci_low | -17.810535755975433 | unit_cash/day | 5-day blocks 2000 seed20261013 | bootstrap_2.5pct | known |
| full82_daily_cash_ci_high | -4.478373048048493 | unit_cash/day | 5-day blocks 2000 seed20261013 | bootstrap_97.5pct | known |
| development38_completed_subset_cash | -562.6314940000158 | unit_cash | completed exits in development38 | sum | known |
| development38_mean_net_bps | -0.23318747182471022 | bp/trade | completed exits in development38 | mean | known |
| development38_completed_trades | 5583 | trades | completed exits in development38 | count | known |
| development38_fill_cashflow | -562.6314940001607 | unit_cash | actual fills during development38; cashflow with inventory, not MTM or completed profit | sum | known |
| development38_daily_cash_ci_low | -22.31136307921161 | unit_cash/day | 5-day blocks 2000 seed20261013 | bootstrap_2.5pct | known |
| development38_daily_cash_ci_high | -8.987311887762647 | unit_cash/day | 5-day blocks 2000 seed20261013 | bootstrap_97.5pct | known |
| viewedJuly7_completed_subset_cash | 92.19088199998895 | unit_cash | completed exits in viewedJuly7 | sum | known |
| viewedJuly7_mean_net_bps | 0.3815986093459694 | bp/trade | completed exits in viewedJuly7 | mean | known |
| viewedJuly7_completed_trades | 604 | trades | completed exits in viewedJuly7 | count | known |
| viewedJuly7_fill_cashflow | 92.19088200001897 | unit_cash | actual fills during viewedJuly7; cashflow with inventory, not MTM or completed profit | sum | known |
| viewedJuly7_daily_cash_ci_low | 3.3456714571412793 | unit_cash/day | 5-day blocks 2000 seed20261013 | bootstrap_2.5pct | known |
| viewedJuly7_daily_cash_ci_high | 28.014243685712326 | unit_cash/day | 5-day blocks 2000 seed20261013 | bootstrap_97.5pct | known |
| July_extension_completed_subset_cash | -50.313023199992074 | unit_cash | completed exits in July_extension | sum | known |
| July_extension_mean_net_bps | -0.09622942196019975 | bp/trade | completed exits in July_extension | mean | known |
| July_extension_completed_trades | 1301 | trades | completed exits in July_extension | count | known |
| July_extension_fill_cashflow | -4134.988089000052 | unit_cash | actual fills during July_extension; cashflow with inventory, not MTM or completed profit | sum | known |
| July_extension_daily_cash_ci_low | -5.931677385312402 | unit_cash/day | 5-day blocks 2000 seed20261013 | bootstrap_2.5pct | known |
| July_extension_daily_cash_ci_high | 4.760224325000652 | unit_cash/day | 5-day blocks 2000 seed20261013 | bootstrap_97.5pct | known |
| August_completed_subset_cash | -368.7590009999859 | unit_cash | completed exits in August | sum | known |
| August_mean_net_bps | -0.22267462489130385 | bp/trade | completed exits in August | mean | known |
| August_completed_trades | 3759 | trades | completed exits in August | count | known |
| August_fill_cashflow | 3715.916064799985 | unit_cash | actual fills during August; cashflow with inventory, not MTM or completed profit | sum | known |
| August_daily_cash_ci_low | -34.82619199357085 | unit_cash/day | 5-day blocks 2000 seed20261013 | bootstrap_2.5pct | known |
| August_daily_cash_ci_high | -4.657544380237134 | unit_cash/day | 5-day blocks 2000 seed20261013 | bootstrap_97.5pct | known |
| cross_date_trades | 14 | trades | completed unit round trips | count | known |
| holding_occupancy_seconds | 1507713.23 | s | sum of completed inventory holding times | sum | known |
| remove_best_day_cash | -951.6210684000034 | unit_cash | 82-day completed subset less best exit day | sum | known |
| remove_best_trade_cash | -944.5713016000046 | unit_cash | completed subset less best trade | sum | known |

限制：原45日已查看；新增37日已在F2扩展研究中查看，不是独立holdout；差距诊断仅覆盖原45日；现金按退出日归因；成交现金流另列，均不是账户MTM；未作多重比较校正；区间跨零不等于等效；固定费用和proxy时钟，不包含资金费和真实执行容量验证；暂定工作基线是用户指定比较对象，不代表收益优越或人工研究接受；入场筛选后信号统计单列，不冒充完整F2信号统计；实际fill后固定2秒响应未恢复时明确缺口，不新增策略条件；独立完整路径对照。；期末状态 flat；未知库存 0；原45日AU空头亏损、多空低于多头及利润集中事实保留于原报告。；技术自查通过；独立技术审查pending，人工研究复核pending。；82 verified expected dates, 45 original +37 extension; exploratory viewed data; unknown inventory separately disclosed

- PnL_path：missing_facts；no equity or account-value source is projected
- cancel_attribution：missing_facts；cancel attribution facts unavailable
- fill_markout：missing_facts；registered fill markout/entry-edge fact is unavailable
- maker_fill：missing_facts；maker order/fill facts unavailable
- signal_bins：missing_facts；no registered source training-bin column

## AU LS_raw 完整独立路径（说明修订v2）

评价：exp_20261021_ag_au_h5_extension_20260831_v1/AU_LS_raw_full82/full82_v2；来源运行：run-27b913988332403fa8565619a651fafd。

实际日期：20260507, 20260508, 20260511, 20260512, 20260513, 20260514, 20260515, 20260518, 20260519, 20260520, 20260521, 20260522, 20260525, 20260526, 20260527, 20260528, 20260529, 20260601, 20260602, 20260603, 20260604, 20260605, 20260608, 20260609, 20260610, 20260611, 20260612, 20260615, 20260616, 20260617, 20260618, 20260622, 20260623, 20260624, 20260625, 20260626, 20260629, 20260630, 20260701, 20260702, 20260703, 20260706, 20260707, 20260708, 20260709, 20260710, 20260713, 20260714, 20260715, 20260716, 20260717, 20260720, 20260721, 20260722, 20260723, 20260724, 20260727, 20260728, 20260729, 20260730, 20260731, 20260803, 20260804, 20260805, 20260806, 20260807, 20260810, 20260811, 20260812, 20260813, 20260814, 20260817, 20260818, 20260819, 20260820, 20260821, 20260824, 20260825, 20260826, 20260827, 20260828, 20260831

| 原生指标 | 值 | 单位 | 分母 | 汇总 | 状态 |
| --- | --- | --- | --- | --- | --- |
| full82_net_cash | -889.5126362000049 | unit_cash | 82 verified dates, flat terminal path only | sum | known |
| full82_mean_net_bps | -0.18081519410411867 | bp/trade | completed unit round trips | mean | known |
| completed_trades | 11247 | trades | 82 verified expected dates | count | known |
| terminal_unknown_inventory | 0 | positions | parent path terminal inventory | count | known |
| original45_completed_subset_cash | -470.4406120000268 | unit_cash | completed exits in original45 | sum | known |
| original45_mean_net_bps | -0.17316956443387618 | bp/trade | completed exits in original45 | mean | known |
| original45_completed_trades | 6187 | trades | completed exits in original45 | count | known |
| original45_fill_cashflow | -470.4406120001654 | unit_cash | actual fills during original45; cashflow with inventory, not MTM or completed profit | sum | known |
| original45_daily_cash_ci_low | -19.93391627677855 | unit_cash/day | 5-day blocks 2000 seed20261013 | bootstrap_2.5pct | known |
| original45_daily_cash_ci_high | -1.553702153221365 | unit_cash/day | 5-day blocks 2000 seed20261013 | bootstrap_97.5pct | known |
| extension37_completed_subset_cash | -419.07202419997805 | unit_cash | completed exits in extension37 | sum | known |
| extension37_mean_net_bps | -0.19016371401909707 | bp/trade | completed exits in extension37 | mean | known |
| extension37_completed_trades | 5060 | trades | completed exits in extension37 | count | known |
| extension37_fill_cashflow | -419.07202420008707 | unit_cash | actual fills during extension37; cashflow with inventory, not MTM or completed profit | sum | known |
| extension37_daily_cash_ci_low | -22.62311746418913 | unit_cash/day | 5-day blocks 2000 seed20261013 | bootstrap_2.5pct | known |
| extension37_daily_cash_ci_high | -1.4923851020265364 | unit_cash/day | 5-day blocks 2000 seed20261013 | bootstrap_97.5pct | known |
| full82_completed_subset_cash | -889.5126362000049 | unit_cash | completed exits in full82 | sum | known |
| full82_mean_net_bps | -0.18081519410411867 | bp/trade | completed exits in full82 | mean | known |
| full82_completed_trades | 11247 | trades | completed exits in full82 | count | known |
| full82_fill_cashflow | -889.5126362002088 | unit_cash | actual fills during full82; cashflow with inventory, not MTM or completed profit | sum | known |
| full82_daily_cash_ci_low | -17.810535755975433 | unit_cash/day | 5-day blocks 2000 seed20261013 | bootstrap_2.5pct | known |
| full82_daily_cash_ci_high | -4.478373048048493 | unit_cash/day | 5-day blocks 2000 seed20261013 | bootstrap_97.5pct | known |
| development38_completed_subset_cash | -562.6314940000158 | unit_cash | completed exits in development38 | sum | known |
| development38_mean_net_bps | -0.23318747182471022 | bp/trade | completed exits in development38 | mean | known |
| development38_completed_trades | 5583 | trades | completed exits in development38 | count | known |
| development38_fill_cashflow | -562.6314940001607 | unit_cash | actual fills during development38; cashflow with inventory, not MTM or completed profit | sum | known |
| development38_daily_cash_ci_low | -22.31136307921161 | unit_cash/day | 5-day blocks 2000 seed20261013 | bootstrap_2.5pct | known |
| development38_daily_cash_ci_high | -8.987311887762647 | unit_cash/day | 5-day blocks 2000 seed20261013 | bootstrap_97.5pct | known |
| viewedJuly7_completed_subset_cash | 92.19088199998895 | unit_cash | completed exits in viewedJuly7 | sum | known |
| viewedJuly7_mean_net_bps | 0.3815986093459694 | bp/trade | completed exits in viewedJuly7 | mean | known |
| viewedJuly7_completed_trades | 604 | trades | completed exits in viewedJuly7 | count | known |
| viewedJuly7_fill_cashflow | 92.19088200001897 | unit_cash | actual fills during viewedJuly7; cashflow with inventory, not MTM or completed profit | sum | known |
| viewedJuly7_daily_cash_ci_low | 3.3456714571412793 | unit_cash/day | 5-day blocks 2000 seed20261013 | bootstrap_2.5pct | known |
| viewedJuly7_daily_cash_ci_high | 28.014243685712326 | unit_cash/day | 5-day blocks 2000 seed20261013 | bootstrap_97.5pct | known |
| July_extension_completed_subset_cash | -50.313023199992074 | unit_cash | completed exits in July_extension | sum | known |
| July_extension_mean_net_bps | -0.09622942196019975 | bp/trade | completed exits in July_extension | mean | known |
| July_extension_completed_trades | 1301 | trades | completed exits in July_extension | count | known |
| July_extension_fill_cashflow | -4134.988089000052 | unit_cash | actual fills during July_extension; cashflow with inventory, not MTM or completed profit | sum | known |
| July_extension_daily_cash_ci_low | -5.931677385312402 | unit_cash/day | 5-day blocks 2000 seed20261013 | bootstrap_2.5pct | known |
| July_extension_daily_cash_ci_high | 4.760224325000652 | unit_cash/day | 5-day blocks 2000 seed20261013 | bootstrap_97.5pct | known |
| August_completed_subset_cash | -368.7590009999859 | unit_cash | completed exits in August | sum | known |
| August_mean_net_bps | -0.22267462489130385 | bp/trade | completed exits in August | mean | known |
| August_completed_trades | 3759 | trades | completed exits in August | count | known |
| August_fill_cashflow | 3715.916064799985 | unit_cash | actual fills during August; cashflow with inventory, not MTM or completed profit | sum | known |
| August_daily_cash_ci_low | -34.82619199357085 | unit_cash/day | 5-day blocks 2000 seed20261013 | bootstrap_2.5pct | known |
| August_daily_cash_ci_high | -4.657544380237134 | unit_cash/day | 5-day blocks 2000 seed20261013 | bootstrap_97.5pct | known |
| cross_date_trades | 14 | trades | completed unit round trips | count | known |
| holding_occupancy_seconds | 1507713.23 | s | sum of completed inventory holding times | sum | known |
| remove_best_day_cash | -951.6210684000034 | unit_cash | 82-day completed subset less best exit day | sum | known |
| remove_best_trade_cash | -944.5713016000046 | unit_cash | completed subset less best trade | sum | known |

限制：原45日已查看；新增37日已在F2扩展研究中查看，不是独立holdout；差距诊断仅覆盖原45日；现金按退出日归因；成交现金流另列，均不是账户MTM；未作多重比较校正；区间跨零不等于等效；固定费用和proxy时钟，不包含资金费和真实执行容量验证；暂定工作基线是用户指定比较对象，不代表收益优越或人工研究接受；入场筛选后信号统计单列，不冒充完整F2信号统计；实际fill后固定2秒响应未恢复时明确缺口，不新增策略条件；独立完整路径对照。；期末状态 flat；未知库存 0；原45日AU空头亏损、多空低于多头及利润集中事实保留于原报告。；技术自查通过；独立技术审查pending，人工研究复核pending。；本版仅修正已查看样本的来源说明；原v1保留档案，所有策略与数值指标相同。；82 verified expected dates, 45 original +37 extension; exploratory viewed data; unknown inventory separately disclosed

- PnL_path：missing_facts；no equity or account-value source is projected
- cancel_attribution：missing_facts；cancel attribution facts unavailable
- fill_markout：missing_facts；registered fill markout/entry-edge fact is unavailable
- maker_fill：missing_facts；maker order/fill facts unavailable
- signal_bins：missing_facts；no registered source training-bin column

## AU L_F 完整独立路径（档案v1，样本说明已更正）

评价：exp_20261021_ag_au_h5_extension_20260831_v1/AU_L_F_full82/full82_v1；来源运行：run-27b913988332403fa8565619a651fafd。

实际日期：20260507, 20260508, 20260511, 20260512, 20260513, 20260514, 20260515, 20260518, 20260519, 20260520, 20260521, 20260522, 20260525, 20260526, 20260527, 20260528, 20260529, 20260601, 20260602, 20260603, 20260604, 20260605, 20260608, 20260609, 20260610, 20260611, 20260612, 20260615, 20260616, 20260617, 20260618, 20260622, 20260623, 20260624, 20260625, 20260626, 20260629, 20260630, 20260701, 20260702, 20260703, 20260706, 20260707, 20260708, 20260709, 20260710, 20260713, 20260714, 20260715, 20260716, 20260717, 20260720, 20260721, 20260722, 20260723, 20260724, 20260727, 20260728, 20260729, 20260730, 20260731, 20260803, 20260804, 20260805, 20260806, 20260807, 20260810, 20260811, 20260812, 20260813, 20260814, 20260817, 20260818, 20260819, 20260820, 20260821, 20260824, 20260825, 20260826, 20260827, 20260828, 20260831

| 原生指标 | 值 | 单位 | 分母 | 汇总 | 状态 |
| --- | --- | --- | --- | --- | --- |
| full82_net_cash | -398.7595669999902 | unit_cash | 82 verified dates, flat terminal path only | sum | known |
| full82_mean_net_bps | -0.15637307701913658 | bp/trade | completed unit round trips | mean | known |
| completed_trades | 5880 | trades | 82 verified expected dates | count | known |
| terminal_unknown_inventory | 0 | positions | parent path terminal inventory | count | known |
| original45_completed_subset_cash | -191.55858380000006 | unit_cash | completed exits in original45 | sum | known |
| original45_mean_net_bps | -0.13531250349712395 | bp/trade | completed exits in original45 | mean | known |
| original45_completed_trades | 3181 | trades | completed exits in original45 | count | known |
| original45_fill_cashflow | -191.5585837997387 | unit_cash | actual fills during original45; cashflow with inventory, not MTM or completed profit | sum | known |
| original45_daily_cash_ci_low | -12.29285241888938 | unit_cash/day | 5-day blocks 2000 seed20261013 | bootstrap_2.5pct | known |
| original45_daily_cash_ci_high | 3.6907576347769635 | unit_cash/day | 5-day blocks 2000 seed20261013 | bootstrap_97.5pct | known |
| extension37_completed_subset_cash | -207.20098319999016 | unit_cash | completed exits in extension37 | sum | known |
| extension37_mean_net_bps | -0.1811947459237391 | bp/trade | completed exits in extension37 | mean | known |
| extension37_completed_trades | 2699 | trades | completed exits in extension37 | count | known |
| extension37_fill_cashflow | -207.2009832000149 | unit_cash | actual fills during extension37; cashflow with inventory, not MTM or completed profit | sum | known |
| extension37_daily_cash_ci_low | -9.01125480851335 | unit_cash/day | 5-day blocks 2000 seed20261013 | bootstrap_2.5pct | known |
| extension37_daily_cash_ci_high | 0.2102359586491682 | unit_cash/day | 5-day blocks 2000 seed20261013 | bootstrap_97.5pct | known |
| full82_completed_subset_cash | -398.7595669999902 | unit_cash | completed exits in full82 | sum | known |
| full82_mean_net_bps | -0.15637307701913658 | bp/trade | completed exits in full82 | mean | known |
| full82_completed_trades | 5880 | trades | completed exits in full82 | count | known |
| full82_fill_cashflow | -398.75956699995004 | unit_cash | actual fills during full82; cashflow with inventory, not MTM or completed profit | sum | known |
| full82_daily_cash_ci_low | -9.27556538152424 | unit_cash/day | 5-day blocks 2000 seed20261013 | bootstrap_2.5pct | known |
| full82_daily_cash_ci_high | -0.05114295609764539 | unit_cash/day | 5-day blocks 2000 seed20261013 | bootstrap_97.5pct | known |
| development38_completed_subset_cash | -278.86771819999336 | unit_cash | completed exits in development38 | sum | known |
| development38_mean_net_bps | -0.22433028576430547 | bp/trade | completed exits in development38 | mean | known |
| development38_completed_trades | 2884 | trades | completed exits in development38 | count | known |
| development38_fill_cashflow | -278.86771820012655 | unit_cash | actual fills during development38; cashflow with inventory, not MTM or completed profit | sum | known |
| development38_daily_cash_ci_low | -14.027223970790637 | unit_cash/day | 5-day blocks 2000 seed20261013 | bootstrap_2.5pct | known |
| development38_daily_cash_ci_high | -2.0326466409221955 | unit_cash/day | 5-day blocks 2000 seed20261013 | bootstrap_97.5pct | known |
| viewedJuly7_completed_subset_cash | 87.30913439999334 | unit_cash | completed exits in viewedJuly7 | sum | known |
| viewedJuly7_mean_net_bps | 0.7290891263296488 | bp/trade | completed exits in viewedJuly7 | mean | known |
| viewedJuly7_completed_trades | 297 | trades | completed exits in viewedJuly7 | count | known |
| viewedJuly7_fill_cashflow | 87.30913439995129 | unit_cash | actual fills during viewedJuly7; cashflow with inventory, not MTM or completed profit | sum | known |
| viewedJuly7_daily_cash_ci_low | 7.160442885712858 | unit_cash/day | 5-day blocks 2000 seed20261013 | bootstrap_2.5pct | known |
| viewedJuly7_daily_cash_ci_high | 26.918191685713275 | unit_cash/day | 5-day blocks 2000 seed20261013 | bootstrap_97.5pct | known |
| July_extension_completed_subset_cash | -87.22835340000447 | unit_cash | completed exits in July_extension | sum | known |
| July_extension_mean_net_bps | -0.333359145603122 | bp/trade | completed exits in July_extension | mean | known |
| July_extension_completed_trades | 641 | trades | completed exits in July_extension | count | known |
| July_extension_fill_cashflow | -4171.903419199984 | unit_cash | actual fills during July_extension; cashflow with inventory, not MTM or completed profit | sum | known |
| July_extension_daily_cash_ci_low | -12.582562895937752 | unit_cash/day | 5-day blocks 2000 seed20261013 | bootstrap_2.5pct | known |
| July_extension_daily_cash_ci_high | 1.188019224999742 | unit_cash/day | 5-day blocks 2000 seed20261013 | bootstrap_97.5pct | known |
| August_completed_subset_cash | -119.9726297999857 | unit_cash | completed exits in August | sum | known |
| August_mean_net_bps | -0.13380048926947063 | bp/trade | completed exits in August | mean | known |
| August_completed_trades | 2058 | trades | completed exits in August | count | known |
| August_fill_cashflow | 3964.7024360000514 | unit_cash | actual fills during August; cashflow with inventory, not MTM or completed profit | sum | known |
| August_daily_cash_ci_low | -10.649220729524037 | unit_cash/day | 5-day blocks 2000 seed20261013 | bootstrap_2.5pct | known |
| August_daily_cash_ci_high | 3.447748741905867 | unit_cash/day | 5-day blocks 2000 seed20261013 | bootstrap_97.5pct | known |
| cross_date_trades | 6 | trades | completed unit round trips | count | known |
| holding_occupancy_seconds | 760159.377 | s | sum of completed inventory holding times | sum | known |
| remove_best_day_cash | -468.84919599998847 | unit_cash | 82-day completed subset less best exit day | sum | known |
| remove_best_trade_cash | -445.97991499999006 | unit_cash | completed subset less best trade | sum | known |

限制：原45日已查看；新增37日已在F2扩展研究中查看，不是独立holdout；差距诊断仅覆盖原45日；现金按退出日归因；成交现金流另列，均不是账户MTM；未作多重比较校正；区间跨零不等于等效；固定费用和proxy时钟，不包含资金费和真实执行容量验证；暂定工作基线是用户指定比较对象，不代表收益优越或人工研究接受；入场筛选后信号统计单列，不冒充完整F2信号统计；实际fill后固定2秒响应未恢复时明确缺口，不新增策略条件；独立完整路径对照。；期末状态 flat；未知库存 0；原45日AU空头亏损、多空低于多头及利润集中事实保留于原报告。；技术自查通过；独立技术审查pending，人工研究复核pending。；82 verified expected dates, 45 original +37 extension; exploratory viewed data; unknown inventory separately disclosed

- PnL_path：missing_facts；no equity or account-value source is projected
- cancel_attribution：missing_facts；cancel attribution facts unavailable
- fill_markout：missing_facts；registered fill markout/entry-edge fact is unavailable
- maker_fill：missing_facts；maker order/fill facts unavailable
- signal_bins：missing_facts；no registered source training-bin column

## AU L_F 完整独立路径（说明修订v2）

评价：exp_20261021_ag_au_h5_extension_20260831_v1/AU_L_F_full82/full82_v2；来源运行：run-27b913988332403fa8565619a651fafd。

实际日期：20260507, 20260508, 20260511, 20260512, 20260513, 20260514, 20260515, 20260518, 20260519, 20260520, 20260521, 20260522, 20260525, 20260526, 20260527, 20260528, 20260529, 20260601, 20260602, 20260603, 20260604, 20260605, 20260608, 20260609, 20260610, 20260611, 20260612, 20260615, 20260616, 20260617, 20260618, 20260622, 20260623, 20260624, 20260625, 20260626, 20260629, 20260630, 20260701, 20260702, 20260703, 20260706, 20260707, 20260708, 20260709, 20260710, 20260713, 20260714, 20260715, 20260716, 20260717, 20260720, 20260721, 20260722, 20260723, 20260724, 20260727, 20260728, 20260729, 20260730, 20260731, 20260803, 20260804, 20260805, 20260806, 20260807, 20260810, 20260811, 20260812, 20260813, 20260814, 20260817, 20260818, 20260819, 20260820, 20260821, 20260824, 20260825, 20260826, 20260827, 20260828, 20260831

| 原生指标 | 值 | 单位 | 分母 | 汇总 | 状态 |
| --- | --- | --- | --- | --- | --- |
| full82_net_cash | -398.7595669999902 | unit_cash | 82 verified dates, flat terminal path only | sum | known |
| full82_mean_net_bps | -0.15637307701913658 | bp/trade | completed unit round trips | mean | known |
| completed_trades | 5880 | trades | 82 verified expected dates | count | known |
| terminal_unknown_inventory | 0 | positions | parent path terminal inventory | count | known |
| original45_completed_subset_cash | -191.55858380000006 | unit_cash | completed exits in original45 | sum | known |
| original45_mean_net_bps | -0.13531250349712395 | bp/trade | completed exits in original45 | mean | known |
| original45_completed_trades | 3181 | trades | completed exits in original45 | count | known |
| original45_fill_cashflow | -191.5585837997387 | unit_cash | actual fills during original45; cashflow with inventory, not MTM or completed profit | sum | known |
| original45_daily_cash_ci_low | -12.29285241888938 | unit_cash/day | 5-day blocks 2000 seed20261013 | bootstrap_2.5pct | known |
| original45_daily_cash_ci_high | 3.6907576347769635 | unit_cash/day | 5-day blocks 2000 seed20261013 | bootstrap_97.5pct | known |
| extension37_completed_subset_cash | -207.20098319999016 | unit_cash | completed exits in extension37 | sum | known |
| extension37_mean_net_bps | -0.1811947459237391 | bp/trade | completed exits in extension37 | mean | known |
| extension37_completed_trades | 2699 | trades | completed exits in extension37 | count | known |
| extension37_fill_cashflow | -207.2009832000149 | unit_cash | actual fills during extension37; cashflow with inventory, not MTM or completed profit | sum | known |
| extension37_daily_cash_ci_low | -9.01125480851335 | unit_cash/day | 5-day blocks 2000 seed20261013 | bootstrap_2.5pct | known |
| extension37_daily_cash_ci_high | 0.2102359586491682 | unit_cash/day | 5-day blocks 2000 seed20261013 | bootstrap_97.5pct | known |
| full82_completed_subset_cash | -398.7595669999902 | unit_cash | completed exits in full82 | sum | known |
| full82_mean_net_bps | -0.15637307701913658 | bp/trade | completed exits in full82 | mean | known |
| full82_completed_trades | 5880 | trades | completed exits in full82 | count | known |
| full82_fill_cashflow | -398.75956699995004 | unit_cash | actual fills during full82; cashflow with inventory, not MTM or completed profit | sum | known |
| full82_daily_cash_ci_low | -9.27556538152424 | unit_cash/day | 5-day blocks 2000 seed20261013 | bootstrap_2.5pct | known |
| full82_daily_cash_ci_high | -0.05114295609764539 | unit_cash/day | 5-day blocks 2000 seed20261013 | bootstrap_97.5pct | known |
| development38_completed_subset_cash | -278.86771819999336 | unit_cash | completed exits in development38 | sum | known |
| development38_mean_net_bps | -0.22433028576430547 | bp/trade | completed exits in development38 | mean | known |
| development38_completed_trades | 2884 | trades | completed exits in development38 | count | known |
| development38_fill_cashflow | -278.86771820012655 | unit_cash | actual fills during development38; cashflow with inventory, not MTM or completed profit | sum | known |
| development38_daily_cash_ci_low | -14.027223970790637 | unit_cash/day | 5-day blocks 2000 seed20261013 | bootstrap_2.5pct | known |
| development38_daily_cash_ci_high | -2.0326466409221955 | unit_cash/day | 5-day blocks 2000 seed20261013 | bootstrap_97.5pct | known |
| viewedJuly7_completed_subset_cash | 87.30913439999334 | unit_cash | completed exits in viewedJuly7 | sum | known |
| viewedJuly7_mean_net_bps | 0.7290891263296488 | bp/trade | completed exits in viewedJuly7 | mean | known |
| viewedJuly7_completed_trades | 297 | trades | completed exits in viewedJuly7 | count | known |
| viewedJuly7_fill_cashflow | 87.30913439995129 | unit_cash | actual fills during viewedJuly7; cashflow with inventory, not MTM or completed profit | sum | known |
| viewedJuly7_daily_cash_ci_low | 7.160442885712858 | unit_cash/day | 5-day blocks 2000 seed20261013 | bootstrap_2.5pct | known |
| viewedJuly7_daily_cash_ci_high | 26.918191685713275 | unit_cash/day | 5-day blocks 2000 seed20261013 | bootstrap_97.5pct | known |
| July_extension_completed_subset_cash | -87.22835340000447 | unit_cash | completed exits in July_extension | sum | known |
| July_extension_mean_net_bps | -0.333359145603122 | bp/trade | completed exits in July_extension | mean | known |
| July_extension_completed_trades | 641 | trades | completed exits in July_extension | count | known |
| July_extension_fill_cashflow | -4171.903419199984 | unit_cash | actual fills during July_extension; cashflow with inventory, not MTM or completed profit | sum | known |
| July_extension_daily_cash_ci_low | -12.582562895937752 | unit_cash/day | 5-day blocks 2000 seed20261013 | bootstrap_2.5pct | known |
| July_extension_daily_cash_ci_high | 1.188019224999742 | unit_cash/day | 5-day blocks 2000 seed20261013 | bootstrap_97.5pct | known |
| August_completed_subset_cash | -119.9726297999857 | unit_cash | completed exits in August | sum | known |
| August_mean_net_bps | -0.13380048926947063 | bp/trade | completed exits in August | mean | known |
| August_completed_trades | 2058 | trades | completed exits in August | count | known |
| August_fill_cashflow | 3964.7024360000514 | unit_cash | actual fills during August; cashflow with inventory, not MTM or completed profit | sum | known |
| August_daily_cash_ci_low | -10.649220729524037 | unit_cash/day | 5-day blocks 2000 seed20261013 | bootstrap_2.5pct | known |
| August_daily_cash_ci_high | 3.447748741905867 | unit_cash/day | 5-day blocks 2000 seed20261013 | bootstrap_97.5pct | known |
| cross_date_trades | 6 | trades | completed unit round trips | count | known |
| holding_occupancy_seconds | 760159.377 | s | sum of completed inventory holding times | sum | known |
| remove_best_day_cash | -468.84919599998847 | unit_cash | 82-day completed subset less best exit day | sum | known |
| remove_best_trade_cash | -445.97991499999006 | unit_cash | completed subset less best trade | sum | known |

限制：原45日已查看；新增37日已在F2扩展研究中查看，不是独立holdout；差距诊断仅覆盖原45日；现金按退出日归因；成交现金流另列，均不是账户MTM；未作多重比较校正；区间跨零不等于等效；固定费用和proxy时钟，不包含资金费和真实执行容量验证；暂定工作基线是用户指定比较对象，不代表收益优越或人工研究接受；入场筛选后信号统计单列，不冒充完整F2信号统计；实际fill后固定2秒响应未恢复时明确缺口，不新增策略条件；独立完整路径对照。；期末状态 flat；未知库存 0；原45日AU空头亏损、多空低于多头及利润集中事实保留于原报告。；技术自查通过；独立技术审查pending，人工研究复核pending。；本版仅修正已查看样本的来源说明；原v1保留档案，所有策略与数值指标相同。；82 verified expected dates, 45 original +37 extension; exploratory viewed data; unknown inventory separately disclosed

- PnL_path：missing_facts；no equity or account-value source is projected
- cancel_attribution：missing_facts；cancel attribution facts unavailable
- fill_markout：missing_facts；registered fill markout/entry-edge fact is unavailable
- maker_fill：missing_facts；maker order/fill facts unavailable
- signal_bins：missing_facts；no registered source training-bin column

## AU L_H5 完整独立路径（档案v1，样本说明已更正）

评价：exp_20261021_ag_au_h5_extension_20260831_v1/AU_L_H5_full82/full82_v1；来源运行：run-27b913988332403fa8565619a651fafd。

实际日期：20260507, 20260508, 20260511, 20260512, 20260513, 20260514, 20260515, 20260518, 20260519, 20260520, 20260521, 20260522, 20260525, 20260526, 20260527, 20260528, 20260529, 20260601, 20260602, 20260603, 20260604, 20260605, 20260608, 20260609, 20260610, 20260611, 20260612, 20260615, 20260616, 20260617, 20260618, 20260622, 20260623, 20260624, 20260625, 20260626, 20260629, 20260630, 20260701, 20260702, 20260703, 20260706, 20260707, 20260708, 20260709, 20260710, 20260713, 20260714, 20260715, 20260716, 20260717, 20260720, 20260721, 20260722, 20260723, 20260724, 20260727, 20260728, 20260729, 20260730, 20260731, 20260803, 20260804, 20260805, 20260806, 20260807, 20260810, 20260811, 20260812, 20260813, 20260814, 20260817, 20260818, 20260819, 20260820, 20260821, 20260824, 20260825, 20260826, 20260827, 20260828, 20260831

| 原生指标 | 值 | 单位 | 分母 | 汇总 | 状态 |
| --- | --- | --- | --- | --- | --- |
| full82_net_cash | 43.73066739998627 | unit_cash | 82 verified dates, flat terminal path only | sum | known |
| full82_mean_net_bps | 0.07548607450907423 | bp/trade | completed unit round trips | mean | known |
| completed_trades | 1449 | trades | 82 verified expected dates | count | known |
| terminal_unknown_inventory | 0 | positions | parent path terminal inventory | count | known |
| original45_completed_subset_cash | 21.95988159999623 | unit_cash | completed exits in original45 | sum | known |
| original45_mean_net_bps | 0.07386836773419449 | bp/trade | completed exits in original45 | mean | known |
| original45_completed_trades | 766 | trades | completed exits in original45 | count | known |
| original45_fill_cashflow | 21.959881599956134 | unit_cash | actual fills during original45; cashflow with inventory, not MTM or completed profit | sum | known |
| original45_daily_cash_ci_low | -1.031716004111627 | unit_cash/day | 5-day blocks 2000 seed20261013 | bootstrap_2.5pct | known |
| original45_daily_cash_ci_high | 2.289128793332927 | unit_cash/day | 5-day blocks 2000 seed20261013 | bootstrap_97.5pct | known |
| extension37_completed_subset_cash | 21.770785799990044 | unit_cash | completed exits in extension37 | sum | known |
| extension37_mean_net_bps | 0.07730036936933463 | bp/trade | completed exits in extension37 | mean | known |
| extension37_completed_trades | 683 | trades | completed exits in extension37 | count | known |
| extension37_fill_cashflow | 21.77078580005673 | unit_cash | actual fills during extension37; cashflow with inventory, not MTM or completed profit | sum | known |
| extension37_daily_cash_ci_low | -1.8044617290544238 | unit_cash/day | 5-day blocks 2000 seed20261013 | bootstrap_2.5pct | known |
| extension37_daily_cash_ci_high | 2.5170458170270127 | unit_cash/day | 5-day blocks 2000 seed20261013 | bootstrap_97.5pct | known |
| full82_completed_subset_cash | 43.73066739998627 | unit_cash | completed exits in full82 | sum | known |
| full82_mean_net_bps | 0.07548607450907423 | bp/trade | completed exits in full82 | mean | known |
| full82_completed_trades | 1449 | trades | completed exits in full82 | count | known |
| full82_fill_cashflow | 43.730667399990125 | unit_cash | actual fills during full82; cashflow with inventory, not MTM or completed profit | sum | known |
| full82_daily_cash_ci_low | -0.9749918423171497 | unit_cash/day | 5-day blocks 2000 seed20261013 | bootstrap_2.5pct | known |
| full82_daily_cash_ci_high | 1.7038599413410145 | unit_cash/day | 5-day blocks 2000 seed20261013 | bootstrap_97.5pct | known |
| development38_completed_subset_cash | 13.64657739999545 | unit_cash | completed exits in development38 | sum | known |
| development38_mean_net_bps | 0.054418179000403195 | bp/trade | completed exits in development38 | mean | known |
| development38_completed_trades | 661 | trades | completed exits in development38 | count | known |
| development38_fill_cashflow | 13.646577399978014 | unit_cash | actual fills during development38; cashflow with inventory, not MTM or completed profit | sum | known |
| development38_daily_cash_ci_low | -1.615844425263577 | unit_cash/day | 5-day blocks 2000 seed20261013 | bootstrap_2.5pct | known |
| development38_daily_cash_ci_high | 2.090717939210266 | unit_cash/day | 5-day blocks 2000 seed20261013 | bootstrap_97.5pct | known |
| viewedJuly7_completed_subset_cash | 8.313304200000761 | unit_cash | completed exits in viewedJuly7 | sum | known |
| viewedJuly7_mean_net_bps | 0.19631193681072848 | bp/trade | completed exits in viewedJuly7 | mean | known |
| viewedJuly7_completed_trades | 105 | trades | completed exits in viewedJuly7 | count | known |
| viewedJuly7_fill_cashflow | 8.313304200003586 | unit_cash | actual fills during viewedJuly7; cashflow with inventory, not MTM or completed profit | sum | known |
| viewedJuly7_daily_cash_ci_low | 0.2772616857143088 | unit_cash/day | 5-day blocks 2000 seed20261013 | bootstrap_2.5pct | known |
| viewedJuly7_daily_cash_ci_high | 3.4214576571429403 | unit_cash/day | 5-day blocks 2000 seed20261013 | bootstrap_97.5pct | known |
| July_extension_completed_subset_cash | 24.75413260000247 | unit_cash | completed exits in July_extension | sum | known |
| July_extension_mean_net_bps | 0.2843077024297279 | bp/trade | completed exits in July_extension | mean | known |
| July_extension_completed_trades | 216 | trades | completed exits in July_extension | count | known |
| July_extension_fill_cashflow | 24.754132600020966 | unit_cash | actual fills during July_extension; cashflow with inventory, not MTM or completed profit | sum | known |
| July_extension_daily_cash_ci_low | -0.6338776625000193 | unit_cash/day | 5-day blocks 2000 seed20261013 | bootstrap_2.5pct | known |
| July_extension_daily_cash_ci_high | 3.517658562500062 | unit_cash/day | 5-day blocks 2000 seed20261013 | bootstrap_97.5pct | known |
| August_completed_subset_cash | -2.983346800012427 | unit_cash | completed exits in August | sum | known |
| August_mean_net_bps | -0.018446063052603236 | bp/trade | completed exits in August | mean | known |
| August_completed_trades | 467 | trades | completed exits in August | count | known |
| August_fill_cashflow | -2.983346799971514 | unit_cash | actual fills during August; cashflow with inventory, not MTM or completed profit | sum | known |
| August_daily_cash_ci_low | -4.042123715476655 | unit_cash/day | 5-day blocks 2000 seed20261013 | bootstrap_2.5pct | known |
| August_daily_cash_ci_high | 1.6246899461903355 | unit_cash/day | 5-day blocks 2000 seed20261013 | bootstrap_97.5pct | known |
| cross_date_trades | 1 | trades | completed unit round trips | count | known |
| holding_occupancy_seconds | 43197.59599999999 | s | sum of completed inventory holding times | sum | known |
| remove_best_day_cash | 15.756145199986523 | unit_cash | 82-day completed subset less best exit day | sum | known |
| remove_best_trade_cash | 14.61880519998616 | unit_cash | completed subset less best trade | sum | known |

限制：原45日已查看；新增37日已在F2扩展研究中查看，不是独立holdout；差距诊断仅覆盖原45日；现金按退出日归因；成交现金流另列，均不是账户MTM；未作多重比较校正；区间跨零不等于等效；固定费用和proxy时钟，不包含资金费和真实执行容量验证；暂定工作基线是用户指定比较对象，不代表收益优越或人工研究接受；入场筛选后信号统计单列，不冒充完整F2信号统计；实际fill后固定2秒响应未恢复时明确缺口，不新增策略条件；独立完整路径对照。；期末状态 flat；未知库存 0；原45日AU空头亏损、多空低于多头及利润集中事实保留于原报告。；技术自查通过；独立技术审查pending，人工研究复核pending。；82 verified expected dates, 45 original +37 extension; exploratory viewed data; unknown inventory separately disclosed

- PnL_path：missing_facts；no equity or account-value source is projected
- cancel_attribution：missing_facts；cancel attribution facts unavailable
- fill_markout：missing_facts；registered fill markout/entry-edge fact is unavailable
- maker_fill：missing_facts；maker order/fill facts unavailable
- signal_bins：missing_facts；no registered source training-bin column

## AU L_H5 完整独立路径（说明修订v2）

评价：exp_20261021_ag_au_h5_extension_20260831_v1/AU_L_H5_full82/full82_v2；来源运行：run-27b913988332403fa8565619a651fafd。

实际日期：20260507, 20260508, 20260511, 20260512, 20260513, 20260514, 20260515, 20260518, 20260519, 20260520, 20260521, 20260522, 20260525, 20260526, 20260527, 20260528, 20260529, 20260601, 20260602, 20260603, 20260604, 20260605, 20260608, 20260609, 20260610, 20260611, 20260612, 20260615, 20260616, 20260617, 20260618, 20260622, 20260623, 20260624, 20260625, 20260626, 20260629, 20260630, 20260701, 20260702, 20260703, 20260706, 20260707, 20260708, 20260709, 20260710, 20260713, 20260714, 20260715, 20260716, 20260717, 20260720, 20260721, 20260722, 20260723, 20260724, 20260727, 20260728, 20260729, 20260730, 20260731, 20260803, 20260804, 20260805, 20260806, 20260807, 20260810, 20260811, 20260812, 20260813, 20260814, 20260817, 20260818, 20260819, 20260820, 20260821, 20260824, 20260825, 20260826, 20260827, 20260828, 20260831

| 原生指标 | 值 | 单位 | 分母 | 汇总 | 状态 |
| --- | --- | --- | --- | --- | --- |
| full82_net_cash | 43.73066739998627 | unit_cash | 82 verified dates, flat terminal path only | sum | known |
| full82_mean_net_bps | 0.07548607450907423 | bp/trade | completed unit round trips | mean | known |
| completed_trades | 1449 | trades | 82 verified expected dates | count | known |
| terminal_unknown_inventory | 0 | positions | parent path terminal inventory | count | known |
| original45_completed_subset_cash | 21.95988159999623 | unit_cash | completed exits in original45 | sum | known |
| original45_mean_net_bps | 0.07386836773419449 | bp/trade | completed exits in original45 | mean | known |
| original45_completed_trades | 766 | trades | completed exits in original45 | count | known |
| original45_fill_cashflow | 21.959881599956134 | unit_cash | actual fills during original45; cashflow with inventory, not MTM or completed profit | sum | known |
| original45_daily_cash_ci_low | -1.031716004111627 | unit_cash/day | 5-day blocks 2000 seed20261013 | bootstrap_2.5pct | known |
| original45_daily_cash_ci_high | 2.289128793332927 | unit_cash/day | 5-day blocks 2000 seed20261013 | bootstrap_97.5pct | known |
| extension37_completed_subset_cash | 21.770785799990044 | unit_cash | completed exits in extension37 | sum | known |
| extension37_mean_net_bps | 0.07730036936933463 | bp/trade | completed exits in extension37 | mean | known |
| extension37_completed_trades | 683 | trades | completed exits in extension37 | count | known |
| extension37_fill_cashflow | 21.77078580005673 | unit_cash | actual fills during extension37; cashflow with inventory, not MTM or completed profit | sum | known |
| extension37_daily_cash_ci_low | -1.8044617290544238 | unit_cash/day | 5-day blocks 2000 seed20261013 | bootstrap_2.5pct | known |
| extension37_daily_cash_ci_high | 2.5170458170270127 | unit_cash/day | 5-day blocks 2000 seed20261013 | bootstrap_97.5pct | known |
| full82_completed_subset_cash | 43.73066739998627 | unit_cash | completed exits in full82 | sum | known |
| full82_mean_net_bps | 0.07548607450907423 | bp/trade | completed exits in full82 | mean | known |
| full82_completed_trades | 1449 | trades | completed exits in full82 | count | known |
| full82_fill_cashflow | 43.730667399990125 | unit_cash | actual fills during full82; cashflow with inventory, not MTM or completed profit | sum | known |
| full82_daily_cash_ci_low | -0.9749918423171497 | unit_cash/day | 5-day blocks 2000 seed20261013 | bootstrap_2.5pct | known |
| full82_daily_cash_ci_high | 1.7038599413410145 | unit_cash/day | 5-day blocks 2000 seed20261013 | bootstrap_97.5pct | known |
| development38_completed_subset_cash | 13.64657739999545 | unit_cash | completed exits in development38 | sum | known |
| development38_mean_net_bps | 0.054418179000403195 | bp/trade | completed exits in development38 | mean | known |
| development38_completed_trades | 661 | trades | completed exits in development38 | count | known |
| development38_fill_cashflow | 13.646577399978014 | unit_cash | actual fills during development38; cashflow with inventory, not MTM or completed profit | sum | known |
| development38_daily_cash_ci_low | -1.615844425263577 | unit_cash/day | 5-day blocks 2000 seed20261013 | bootstrap_2.5pct | known |
| development38_daily_cash_ci_high | 2.090717939210266 | unit_cash/day | 5-day blocks 2000 seed20261013 | bootstrap_97.5pct | known |
| viewedJuly7_completed_subset_cash | 8.313304200000761 | unit_cash | completed exits in viewedJuly7 | sum | known |
| viewedJuly7_mean_net_bps | 0.19631193681072848 | bp/trade | completed exits in viewedJuly7 | mean | known |
| viewedJuly7_completed_trades | 105 | trades | completed exits in viewedJuly7 | count | known |
| viewedJuly7_fill_cashflow | 8.313304200003586 | unit_cash | actual fills during viewedJuly7; cashflow with inventory, not MTM or completed profit | sum | known |
| viewedJuly7_daily_cash_ci_low | 0.2772616857143088 | unit_cash/day | 5-day blocks 2000 seed20261013 | bootstrap_2.5pct | known |
| viewedJuly7_daily_cash_ci_high | 3.4214576571429403 | unit_cash/day | 5-day blocks 2000 seed20261013 | bootstrap_97.5pct | known |
| July_extension_completed_subset_cash | 24.75413260000247 | unit_cash | completed exits in July_extension | sum | known |
| July_extension_mean_net_bps | 0.2843077024297279 | bp/trade | completed exits in July_extension | mean | known |
| July_extension_completed_trades | 216 | trades | completed exits in July_extension | count | known |
| July_extension_fill_cashflow | 24.754132600020966 | unit_cash | actual fills during July_extension; cashflow with inventory, not MTM or completed profit | sum | known |
| July_extension_daily_cash_ci_low | -0.6338776625000193 | unit_cash/day | 5-day blocks 2000 seed20261013 | bootstrap_2.5pct | known |
| July_extension_daily_cash_ci_high | 3.517658562500062 | unit_cash/day | 5-day blocks 2000 seed20261013 | bootstrap_97.5pct | known |
| August_completed_subset_cash | -2.983346800012427 | unit_cash | completed exits in August | sum | known |
| August_mean_net_bps | -0.018446063052603236 | bp/trade | completed exits in August | mean | known |
| August_completed_trades | 467 | trades | completed exits in August | count | known |
| August_fill_cashflow | -2.983346799971514 | unit_cash | actual fills during August; cashflow with inventory, not MTM or completed profit | sum | known |
| August_daily_cash_ci_low | -4.042123715476655 | unit_cash/day | 5-day blocks 2000 seed20261013 | bootstrap_2.5pct | known |
| August_daily_cash_ci_high | 1.6246899461903355 | unit_cash/day | 5-day blocks 2000 seed20261013 | bootstrap_97.5pct | known |
| cross_date_trades | 1 | trades | completed unit round trips | count | known |
| holding_occupancy_seconds | 43197.59599999999 | s | sum of completed inventory holding times | sum | known |
| remove_best_day_cash | 15.756145199986523 | unit_cash | 82-day completed subset less best exit day | sum | known |
| remove_best_trade_cash | 14.61880519998616 | unit_cash | completed subset less best trade | sum | known |

限制：原45日已查看；新增37日已在F2扩展研究中查看，不是独立holdout；差距诊断仅覆盖原45日；现金按退出日归因；成交现金流另列，均不是账户MTM；未作多重比较校正；区间跨零不等于等效；固定费用和proxy时钟，不包含资金费和真实执行容量验证；暂定工作基线是用户指定比较对象，不代表收益优越或人工研究接受；入场筛选后信号统计单列，不冒充完整F2信号统计；实际fill后固定2秒响应未恢复时明确缺口，不新增策略条件；独立完整路径对照。；期末状态 flat；未知库存 0；原45日AU空头亏损、多空低于多头及利润集中事实保留于原报告。；技术自查通过；独立技术审查pending，人工研究复核pending。；本版仅修正已查看样本的来源说明；原v1保留档案，所有策略与数值指标相同。；82 verified expected dates, 45 original +37 extension; exploratory viewed data; unknown inventory separately disclosed

- PnL_path：missing_facts；no equity or account-value source is projected
- cancel_attribution：missing_facts；cancel attribution facts unavailable
- fill_markout：missing_facts；registered fill markout/entry-edge fact is unavailable
- maker_fill：missing_facts；maker order/fill facts unavailable
- signal_bins：missing_facts；no registered source training-bin column

## AU L_raw 完整独立路径（档案v1，样本说明已更正）

评价：exp_20261021_ag_au_h5_extension_20260831_v1/AU_L_raw_full82/full82_v1；来源运行：run-27b913988332403fa8565619a651fafd。

实际日期：20260507, 20260508, 20260511, 20260512, 20260513, 20260514, 20260515, 20260518, 20260519, 20260520, 20260521, 20260522, 20260525, 20260526, 20260527, 20260528, 20260529, 20260601, 20260602, 20260603, 20260604, 20260605, 20260608, 20260609, 20260610, 20260611, 20260612, 20260615, 20260616, 20260617, 20260618, 20260622, 20260623, 20260624, 20260625, 20260626, 20260629, 20260630, 20260701, 20260702, 20260703, 20260706, 20260707, 20260708, 20260709, 20260710, 20260713, 20260714, 20260715, 20260716, 20260717, 20260720, 20260721, 20260722, 20260723, 20260724, 20260727, 20260728, 20260729, 20260730, 20260731, 20260803, 20260804, 20260805, 20260806, 20260807, 20260810, 20260811, 20260812, 20260813, 20260814, 20260817, 20260818, 20260819, 20260820, 20260821, 20260824, 20260825, 20260826, 20260827, 20260828, 20260831

| 原生指标 | 值 | 单位 | 分母 | 汇总 | 状态 |
| --- | --- | --- | --- | --- | --- |
| full82_net_cash | -426.94787120000024 | unit_cash | 82 verified dates, flat terminal path only | sum | known |
| full82_mean_net_bps | -0.15594654413106795 | bp/trade | completed unit round trips | mean | known |
| completed_trades | 6256 | trades | 82 verified expected dates | count | known |
| terminal_unknown_inventory | 0 | positions | parent path terminal inventory | count | known |
| original45_completed_subset_cash | -233.4407478000094 | unit_cash | completed exits in original45 | sum | known |
| original45_mean_net_bps | -0.15529848519925193 | bp/trade | completed exits in original45 | mean | known |
| original45_completed_trades | 3404 | trades | completed exits in original45 | count | known |
| original45_fill_cashflow | -233.44074780013034 | unit_cash | actual fills during original45; cashflow with inventory, not MTM or completed profit | sum | known |
| original45_daily_cash_ci_low | -13.672164032555704 | unit_cash/day | 5-day blocks 2000 seed20261013 | bootstrap_2.5pct | known |
| original45_daily_cash_ci_high | 3.0067364543326263 | unit_cash/day | 5-day blocks 2000 seed20261013 | bootstrap_97.5pct | known |
| extension37_completed_subset_cash | -193.50712339999083 | unit_cash | completed exits in extension37 | sum | known |
| extension37_mean_net_bps | -0.1567200338238807 | bp/trade | completed exits in extension37 | mean | known |
| extension37_completed_trades | 2852 | trades | completed exits in extension37 | count | known |
| extension37_fill_cashflow | -193.50712340007158 | unit_cash | actual fills during extension37; cashflow with inventory, not MTM or completed profit | sum | known |
| extension37_daily_cash_ci_low | -8.62342522540558 | unit_cash/day | 5-day blocks 2000 seed20261013 | bootstrap_2.5pct | known |
| extension37_daily_cash_ci_high | 1.3159298118917928 | unit_cash/day | 5-day blocks 2000 seed20261013 | bootstrap_97.5pct | known |
| full82_completed_subset_cash | -426.94787120000024 | unit_cash | completed exits in full82 | sum | known |
| full82_mean_net_bps | -0.15594654413106795 | bp/trade | completed exits in full82 | mean | known |
| full82_completed_trades | 6256 | trades | completed exits in full82 | count | known |
| full82_fill_cashflow | -426.9478711997108 | unit_cash | actual fills during full82; cashflow with inventory, not MTM or completed profit | sum | known |
| full82_daily_cash_ci_low | -9.736043835426482 | unit_cash/day | 5-day blocks 2000 seed20261013 | bootstrap_2.5pct | known |
| full82_daily_cash_ci_high | 0.04207479524364562 | unit_cash/day | 5-day blocks 2000 seed20261013 | bootstrap_97.5pct | known |
| development38_completed_subset_cash | -326.95444659999964 | unit_cash | completed exits in development38 | sum | known |
| development38_mean_net_bps | -0.2473363677883188 | bp/trade | completed exits in development38 | mean | known |
| development38_completed_trades | 3073 | trades | completed exits in development38 | count | known |
| development38_fill_cashflow | -326.9544466000166 | unit_cash | actual fills during development38; cashflow with inventory, not MTM or completed profit | sum | known |
| development38_daily_cash_ci_low | -15.315480865658431 | unit_cash/day | 5-day blocks 2000 seed20261013 | bootstrap_2.5pct | known |
| development38_daily_cash_ci_high | -2.885055592894615 | unit_cash/day | 5-day blocks 2000 seed20261013 | bootstrap_97.5pct | known |
| viewedJuly7_completed_subset_cash | 93.51369879999018 | unit_cash | completed exits in viewedJuly7 | sum | known |
| viewedJuly7_mean_net_bps | 0.6991801045173724 | bp/trade | completed exits in viewedJuly7 | mean | known |
| viewedJuly7_completed_trades | 331 | trades | completed exits in viewedJuly7 | count | known |
| viewedJuly7_fill_cashflow | 93.51369880003585 | unit_cash | actual fills during viewedJuly7; cashflow with inventory, not MTM or completed profit | sum | known |
| viewedJuly7_daily_cash_ci_low | 8.651820885712363 | unit_cash/day | 5-day blocks 2000 seed20261013 | bootstrap_2.5pct | known |
| viewedJuly7_daily_cash_ci_high | 27.572451257141378 | unit_cash/day | 5-day blocks 2000 seed20261013 | bootstrap_97.5pct | known |
| July_extension_completed_subset_cash | -57.10995420000247 | unit_cash | completed exits in July_extension | sum | known |
| July_extension_mean_net_bps | -0.1972138066577457 | bp/trade | completed exits in July_extension | mean | known |
| July_extension_completed_trades | 703 | trades | completed exits in July_extension | count | known |
| July_extension_fill_cashflow | -4141.785020000045 | unit_cash | actual fills during July_extension; cashflow with inventory, not MTM or completed profit | sum | known |
| July_extension_daily_cash_ci_low | -7.492283220312468 | unit_cash/day | 5-day blocks 2000 seed20261013 | bootstrap_2.5pct | known |
| July_extension_daily_cash_ci_high | 2.087707331562188 | unit_cash/day | 5-day blocks 2000 seed20261013 | bootstrap_97.5pct | known |
| August_completed_subset_cash | -136.39716919998835 | unit_cash | completed exits in August | sum | known |
| August_mean_net_bps | -0.14347335057483135 | bp/trade | completed exits in August | mean | known |
| August_completed_trades | 2149 | trades | completed exits in August | count | known |
| August_fill_cashflow | 3948.2778965999914 | unit_cash | actual fills during August; cashflow with inventory, not MTM or completed profit | sum | known |
| August_daily_cash_ci_low | -12.280406613333398 | unit_cash/day | 5-day blocks 2000 seed20261013 | bootstrap_2.5pct | known |
| August_daily_cash_ci_high | 3.9690848757146178 | unit_cash/day | 5-day blocks 2000 seed20261013 | bootstrap_97.5pct | known |
| cross_date_trades | 7 | trades | completed unit round trips | count | known |
| holding_occupancy_seconds | 826199.499 | s | sum of completed inventory holding times | sum | known |
| remove_best_day_cash | -499.23250019999796 | unit_cash | 82-day completed subset less best exit day | sum | known |
| remove_best_trade_cash | -474.16821920000007 | unit_cash | completed subset less best trade | sum | known |

限制：原45日已查看；新增37日已在F2扩展研究中查看，不是独立holdout；差距诊断仅覆盖原45日；现金按退出日归因；成交现金流另列，均不是账户MTM；未作多重比较校正；区间跨零不等于等效；固定费用和proxy时钟，不包含资金费和真实执行容量验证；暂定工作基线是用户指定比较对象，不代表收益优越或人工研究接受；入场筛选后信号统计单列，不冒充完整F2信号统计；实际fill后固定2秒响应未恢复时明确缺口，不新增策略条件；独立完整路径对照。；期末状态 flat；未知库存 0；原45日AU空头亏损、多空低于多头及利润集中事实保留于原报告。；技术自查通过；独立技术审查pending，人工研究复核pending。；82 verified expected dates, 45 original +37 extension; exploratory viewed data; unknown inventory separately disclosed

- PnL_path：missing_facts；no equity or account-value source is projected
- cancel_attribution：missing_facts；cancel attribution facts unavailable
- fill_markout：missing_facts；registered fill markout/entry-edge fact is unavailable
- maker_fill：missing_facts；maker order/fill facts unavailable
- signal_bins：missing_facts；no registered source training-bin column

## AU L_raw 完整独立路径（说明修订v2）

评价：exp_20261021_ag_au_h5_extension_20260831_v1/AU_L_raw_full82/full82_v2；来源运行：run-27b913988332403fa8565619a651fafd。

实际日期：20260507, 20260508, 20260511, 20260512, 20260513, 20260514, 20260515, 20260518, 20260519, 20260520, 20260521, 20260522, 20260525, 20260526, 20260527, 20260528, 20260529, 20260601, 20260602, 20260603, 20260604, 20260605, 20260608, 20260609, 20260610, 20260611, 20260612, 20260615, 20260616, 20260617, 20260618, 20260622, 20260623, 20260624, 20260625, 20260626, 20260629, 20260630, 20260701, 20260702, 20260703, 20260706, 20260707, 20260708, 20260709, 20260710, 20260713, 20260714, 20260715, 20260716, 20260717, 20260720, 20260721, 20260722, 20260723, 20260724, 20260727, 20260728, 20260729, 20260730, 20260731, 20260803, 20260804, 20260805, 20260806, 20260807, 20260810, 20260811, 20260812, 20260813, 20260814, 20260817, 20260818, 20260819, 20260820, 20260821, 20260824, 20260825, 20260826, 20260827, 20260828, 20260831

| 原生指标 | 值 | 单位 | 分母 | 汇总 | 状态 |
| --- | --- | --- | --- | --- | --- |
| full82_net_cash | -426.94787120000024 | unit_cash | 82 verified dates, flat terminal path only | sum | known |
| full82_mean_net_bps | -0.15594654413106795 | bp/trade | completed unit round trips | mean | known |
| completed_trades | 6256 | trades | 82 verified expected dates | count | known |
| terminal_unknown_inventory | 0 | positions | parent path terminal inventory | count | known |
| original45_completed_subset_cash | -233.4407478000094 | unit_cash | completed exits in original45 | sum | known |
| original45_mean_net_bps | -0.15529848519925193 | bp/trade | completed exits in original45 | mean | known |
| original45_completed_trades | 3404 | trades | completed exits in original45 | count | known |
| original45_fill_cashflow | -233.44074780013034 | unit_cash | actual fills during original45; cashflow with inventory, not MTM or completed profit | sum | known |
| original45_daily_cash_ci_low | -13.672164032555704 | unit_cash/day | 5-day blocks 2000 seed20261013 | bootstrap_2.5pct | known |
| original45_daily_cash_ci_high | 3.0067364543326263 | unit_cash/day | 5-day blocks 2000 seed20261013 | bootstrap_97.5pct | known |
| extension37_completed_subset_cash | -193.50712339999083 | unit_cash | completed exits in extension37 | sum | known |
| extension37_mean_net_bps | -0.1567200338238807 | bp/trade | completed exits in extension37 | mean | known |
| extension37_completed_trades | 2852 | trades | completed exits in extension37 | count | known |
| extension37_fill_cashflow | -193.50712340007158 | unit_cash | actual fills during extension37; cashflow with inventory, not MTM or completed profit | sum | known |
| extension37_daily_cash_ci_low | -8.62342522540558 | unit_cash/day | 5-day blocks 2000 seed20261013 | bootstrap_2.5pct | known |
| extension37_daily_cash_ci_high | 1.3159298118917928 | unit_cash/day | 5-day blocks 2000 seed20261013 | bootstrap_97.5pct | known |
| full82_completed_subset_cash | -426.94787120000024 | unit_cash | completed exits in full82 | sum | known |
| full82_mean_net_bps | -0.15594654413106795 | bp/trade | completed exits in full82 | mean | known |
| full82_completed_trades | 6256 | trades | completed exits in full82 | count | known |
| full82_fill_cashflow | -426.9478711997108 | unit_cash | actual fills during full82; cashflow with inventory, not MTM or completed profit | sum | known |
| full82_daily_cash_ci_low | -9.736043835426482 | unit_cash/day | 5-day blocks 2000 seed20261013 | bootstrap_2.5pct | known |
| full82_daily_cash_ci_high | 0.04207479524364562 | unit_cash/day | 5-day blocks 2000 seed20261013 | bootstrap_97.5pct | known |
| development38_completed_subset_cash | -326.95444659999964 | unit_cash | completed exits in development38 | sum | known |
| development38_mean_net_bps | -0.2473363677883188 | bp/trade | completed exits in development38 | mean | known |
| development38_completed_trades | 3073 | trades | completed exits in development38 | count | known |
| development38_fill_cashflow | -326.9544466000166 | unit_cash | actual fills during development38; cashflow with inventory, not MTM or completed profit | sum | known |
| development38_daily_cash_ci_low | -15.315480865658431 | unit_cash/day | 5-day blocks 2000 seed20261013 | bootstrap_2.5pct | known |
| development38_daily_cash_ci_high | -2.885055592894615 | unit_cash/day | 5-day blocks 2000 seed20261013 | bootstrap_97.5pct | known |
| viewedJuly7_completed_subset_cash | 93.51369879999018 | unit_cash | completed exits in viewedJuly7 | sum | known |
| viewedJuly7_mean_net_bps | 0.6991801045173724 | bp/trade | completed exits in viewedJuly7 | mean | known |
| viewedJuly7_completed_trades | 331 | trades | completed exits in viewedJuly7 | count | known |
| viewedJuly7_fill_cashflow | 93.51369880003585 | unit_cash | actual fills during viewedJuly7; cashflow with inventory, not MTM or completed profit | sum | known |
| viewedJuly7_daily_cash_ci_low | 8.651820885712363 | unit_cash/day | 5-day blocks 2000 seed20261013 | bootstrap_2.5pct | known |
| viewedJuly7_daily_cash_ci_high | 27.572451257141378 | unit_cash/day | 5-day blocks 2000 seed20261013 | bootstrap_97.5pct | known |
| July_extension_completed_subset_cash | -57.10995420000247 | unit_cash | completed exits in July_extension | sum | known |
| July_extension_mean_net_bps | -0.1972138066577457 | bp/trade | completed exits in July_extension | mean | known |
| July_extension_completed_trades | 703 | trades | completed exits in July_extension | count | known |
| July_extension_fill_cashflow | -4141.785020000045 | unit_cash | actual fills during July_extension; cashflow with inventory, not MTM or completed profit | sum | known |
| July_extension_daily_cash_ci_low | -7.492283220312468 | unit_cash/day | 5-day blocks 2000 seed20261013 | bootstrap_2.5pct | known |
| July_extension_daily_cash_ci_high | 2.087707331562188 | unit_cash/day | 5-day blocks 2000 seed20261013 | bootstrap_97.5pct | known |
| August_completed_subset_cash | -136.39716919998835 | unit_cash | completed exits in August | sum | known |
| August_mean_net_bps | -0.14347335057483135 | bp/trade | completed exits in August | mean | known |
| August_completed_trades | 2149 | trades | completed exits in August | count | known |
| August_fill_cashflow | 3948.2778965999914 | unit_cash | actual fills during August; cashflow with inventory, not MTM or completed profit | sum | known |
| August_daily_cash_ci_low | -12.280406613333398 | unit_cash/day | 5-day blocks 2000 seed20261013 | bootstrap_2.5pct | known |
| August_daily_cash_ci_high | 3.9690848757146178 | unit_cash/day | 5-day blocks 2000 seed20261013 | bootstrap_97.5pct | known |
| cross_date_trades | 7 | trades | completed unit round trips | count | known |
| holding_occupancy_seconds | 826199.499 | s | sum of completed inventory holding times | sum | known |
| remove_best_day_cash | -499.23250019999796 | unit_cash | 82-day completed subset less best exit day | sum | known |
| remove_best_trade_cash | -474.16821920000007 | unit_cash | completed subset less best trade | sum | known |

限制：原45日已查看；新增37日已在F2扩展研究中查看，不是独立holdout；差距诊断仅覆盖原45日；现金按退出日归因；成交现金流另列，均不是账户MTM；未作多重比较校正；区间跨零不等于等效；固定费用和proxy时钟，不包含资金费和真实执行容量验证；暂定工作基线是用户指定比较对象，不代表收益优越或人工研究接受；入场筛选后信号统计单列，不冒充完整F2信号统计；实际fill后固定2秒响应未恢复时明确缺口，不新增策略条件；独立完整路径对照。；期末状态 flat；未知库存 0；原45日AU空头亏损、多空低于多头及利润集中事实保留于原报告。；技术自查通过；独立技术审查pending，人工研究复核pending。；本版仅修正已查看样本的来源说明；原v1保留档案，所有策略与数值指标相同。；82 verified expected dates, 45 original +37 extension; exploratory viewed data; unknown inventory separately disclosed

- PnL_path：missing_facts；no equity or account-value source is projected
- cancel_attribution：missing_facts；cancel attribution facts unavailable
- fill_markout：missing_facts；registered fill markout/entry-edge fact is unavailable
- maker_fill：missing_facts；maker order/fill facts unavailable
- signal_bins：missing_facts；no registered source training-bin column

## AU S_F 完整独立路径（档案v1，样本说明已更正）

评价：exp_20261021_ag_au_h5_extension_20260831_v1/AU_S_F_full82/full82_v1；来源运行：run-27b913988332403fa8565619a651fafd。

实际日期：20260507, 20260508, 20260511, 20260512, 20260513, 20260514, 20260515, 20260518, 20260519, 20260520, 20260521, 20260522, 20260525, 20260526, 20260527, 20260528, 20260529, 20260601, 20260602, 20260603, 20260604, 20260605, 20260608, 20260609, 20260610, 20260611, 20260612, 20260615, 20260616, 20260617, 20260618, 20260622, 20260623, 20260624, 20260625, 20260626, 20260629, 20260630, 20260701, 20260702, 20260703, 20260706, 20260707, 20260708, 20260709, 20260710, 20260713, 20260714, 20260715, 20260716, 20260717, 20260720, 20260721, 20260722, 20260723, 20260724, 20260727, 20260728, 20260729, 20260730, 20260731, 20260803, 20260804, 20260805, 20260806, 20260807, 20260810, 20260811, 20260812, 20260813, 20260814, 20260817, 20260818, 20260819, 20260820, 20260821, 20260824, 20260825, 20260826, 20260827, 20260828, 20260831

| 原生指标 | 值 | 单位 | 分母 | 汇总 | 状态 |
| --- | --- | --- | --- | --- | --- |
| full82_net_cash | -445.31770040001567 | unit_cash | 82 verified dates, flat terminal path only | sum | known |
| full82_mean_net_bps | -0.18917406282173618 | bp/trade | completed unit round trips | mean | known |
| completed_trades | 5406 | trades | 82 verified expected dates | count | known |
| terminal_unknown_inventory | 0 | positions | parent path terminal inventory | count | known |
| original45_completed_subset_cash | -209.51097740002885 | unit_cash | completed exits in original45 | sum | known |
| original45_mean_net_bps | -0.16333165221898188 | bp/trade | completed exits in original45 | mean | known |
| original45_completed_trades | 2997 | trades | completed exits in original45 | count | known |
| original45_fill_cashflow | -209.51097740006935 | unit_cash | actual fills during original45; cashflow with inventory, not MTM or completed profit | sum | known |
| original45_daily_cash_ci_low | -7.6813015888903085 | unit_cash/day | 5-day blocks 2000 seed20261013 | bootstrap_2.5pct | known |
| original45_daily_cash_ci_high | -1.766021752666123 | unit_cash/day | 5-day blocks 2000 seed20261013 | bootstrap_97.5pct | known |
| extension37_completed_subset_cash | -235.80672299998685 | unit_cash | completed exits in extension37 | sum | known |
| extension37_mean_net_bps | -0.2213242100099697 | bp/trade | completed exits in extension37 | mean | known |
| extension37_completed_trades | 2409 | trades | completed exits in extension37 | count | known |
| extension37_fill_cashflow | -235.80672300014612 | unit_cash | actual fills during extension37; cashflow with inventory, not MTM or completed profit | sum | known |
| extension37_daily_cash_ci_low | -19.74434405540457 | unit_cash/day | 5-day blocks 2000 seed20261013 | bootstrap_2.5pct | known |
| extension37_daily_cash_ci_high | 1.0866327925683512 | unit_cash/day | 5-day blocks 2000 seed20261013 | bootstrap_97.5pct | known |
| full82_completed_subset_cash | -445.31770040001567 | unit_cash | completed exits in full82 | sum | known |
| full82_mean_net_bps | -0.18917406282173618 | bp/trade | completed exits in full82 | mean | known |
| full82_completed_trades | 5406 | trades | completed exits in full82 | count | known |
| full82_fill_cashflow | -445.3177004002482 | unit_cash | actual fills during full82; cashflow with inventory, not MTM or completed profit | sum | known |
| full82_daily_cash_ci_low | -11.380356068353915 | unit_cash/day | 5-day blocks 2000 seed20261013 | bootstrap_2.5pct | known |
| full82_daily_cash_ci_high | -1.534930320304742 | unit_cash/day | 5-day blocks 2000 seed20261013 | bootstrap_97.5pct | known |
| development38_completed_subset_cash | -185.7570288000246 | unit_cash | completed exits in development38 | sum | known |
| development38_mean_net_bps | -0.15947788207427482 | bp/trade | completed exits in development38 | mean | known |
| development38_completed_trades | 2716 | trades | completed exits in development38 | count | known |
| development38_fill_cashflow | -185.75702880016615 | unit_cash | actual fills during development38; cashflow with inventory, not MTM or completed profit | sum | known |
| development38_daily_cash_ci_low | -8.325248033291004 | unit_cash/day | 5-day blocks 2000 seed20261013 | bootstrap_2.5pct | known |
| development38_daily_cash_ci_high | -1.1942451764481694 | unit_cash/day | 5-day blocks 2000 seed20261013 | bootstrap_97.5pct | known |
| viewedJuly7_completed_subset_cash | -23.753948600004207 | unit_cash | completed exits in viewedJuly7 | sum | known |
| viewedJuly7_mean_net_bps | -0.2005801921229833 | bp/trade | completed exits in viewedJuly7 | mean | known |
| viewedJuly7_completed_trades | 281 | trades | completed exits in viewedJuly7 | count | known |
| viewedJuly7_fill_cashflow | -23.753948600001422 | unit_cash | actual fills during viewedJuly7; cashflow with inventory, not MTM or completed profit | sum | known |
| viewedJuly7_daily_cash_ci_low | -8.883111485715261 | unit_cash/day | 5-day blocks 2000 seed20261013 | bootstrap_2.5pct | known |
| viewedJuly7_daily_cash_ci_high | -2.4435829428587534 | unit_cash/day | 5-day blocks 2000 seed20261013 | bootstrap_97.5pct | known |
| July_extension_completed_subset_cash | 38.94985180000603 | unit_cash | completed exits in July_extension | sum | known |
| July_extension_mean_net_bps | 0.14708100884606498 | bp/trade | completed exits in July_extension | mean | known |
| July_extension_completed_trades | 627 | trades | completed exits in July_extension | count | known |
| July_extension_fill_cashflow | 38.94985180006961 | unit_cash | actual fills during July_extension; cashflow with inventory, not MTM or completed profit | sum | known |
| July_extension_daily_cash_ci_low | -4.242261814375155 | unit_cash/day | 5-day blocks 2000 seed20261013 | bootstrap_2.5pct | known |
| July_extension_daily_cash_ci_high | 10.040263039688307 | unit_cash/day | 5-day blocks 2000 seed20261013 | bootstrap_97.5pct | known |
| August_completed_subset_cash | -274.7565747999929 | unit_cash | completed exits in August | sum | known |
| August_mean_net_bps | -0.3509482684963523 | bp/trade | completed exits in August | mean | known |
| August_completed_trades | 1782 | trades | completed exits in August | count | known |
| August_fill_cashflow | -274.75657480013433 | unit_cash | actual fills during August; cashflow with inventory, not MTM or completed profit | sum | known |
| August_daily_cash_ci_low | -31.523404387855848 | unit_cash/day | 5-day blocks 2000 seed20261013 | bootstrap_2.5pct | known |
| August_daily_cash_ci_high | -7.382184501190105 | unit_cash/day | 5-day blocks 2000 seed20261013 | bootstrap_97.5pct | known |
| cross_date_trades | 7 | trades | completed unit round trips | count | known |
| holding_occupancy_seconds | 474280.055 | s | sum of completed inventory holding times | sum | known |
| remove_best_day_cash | -503.65086840001635 | unit_cash | 82-day completed subset less best exit day | sum | known |
| remove_best_trade_cash | -500.3763658000154 | unit_cash | completed subset less best trade | sum | known |

限制：原45日已查看；新增37日已在F2扩展研究中查看，不是独立holdout；差距诊断仅覆盖原45日；现金按退出日归因；成交现金流另列，均不是账户MTM；未作多重比较校正；区间跨零不等于等效；固定费用和proxy时钟，不包含资金费和真实执行容量验证；暂定工作基线是用户指定比较对象，不代表收益优越或人工研究接受；入场筛选后信号统计单列，不冒充完整F2信号统计；实际fill后固定2秒响应未恢复时明确缺口，不新增策略条件；独立完整路径对照。；期末状态 flat；未知库存 0；原45日AU空头亏损、多空低于多头及利润集中事实保留于原报告。；技术自查通过；独立技术审查pending，人工研究复核pending。；82 verified expected dates, 45 original +37 extension; exploratory viewed data; unknown inventory separately disclosed

- PnL_path：missing_facts；no equity or account-value source is projected
- cancel_attribution：missing_facts；cancel attribution facts unavailable
- fill_markout：missing_facts；registered fill markout/entry-edge fact is unavailable
- maker_fill：missing_facts；maker order/fill facts unavailable
- signal_bins：missing_facts；no registered source training-bin column

## AU S_F 完整独立路径（说明修订v2）

评价：exp_20261021_ag_au_h5_extension_20260831_v1/AU_S_F_full82/full82_v2；来源运行：run-27b913988332403fa8565619a651fafd。

实际日期：20260507, 20260508, 20260511, 20260512, 20260513, 20260514, 20260515, 20260518, 20260519, 20260520, 20260521, 20260522, 20260525, 20260526, 20260527, 20260528, 20260529, 20260601, 20260602, 20260603, 20260604, 20260605, 20260608, 20260609, 20260610, 20260611, 20260612, 20260615, 20260616, 20260617, 20260618, 20260622, 20260623, 20260624, 20260625, 20260626, 20260629, 20260630, 20260701, 20260702, 20260703, 20260706, 20260707, 20260708, 20260709, 20260710, 20260713, 20260714, 20260715, 20260716, 20260717, 20260720, 20260721, 20260722, 20260723, 20260724, 20260727, 20260728, 20260729, 20260730, 20260731, 20260803, 20260804, 20260805, 20260806, 20260807, 20260810, 20260811, 20260812, 20260813, 20260814, 20260817, 20260818, 20260819, 20260820, 20260821, 20260824, 20260825, 20260826, 20260827, 20260828, 20260831

| 原生指标 | 值 | 单位 | 分母 | 汇总 | 状态 |
| --- | --- | --- | --- | --- | --- |
| full82_net_cash | -445.31770040001567 | unit_cash | 82 verified dates, flat terminal path only | sum | known |
| full82_mean_net_bps | -0.18917406282173618 | bp/trade | completed unit round trips | mean | known |
| completed_trades | 5406 | trades | 82 verified expected dates | count | known |
| terminal_unknown_inventory | 0 | positions | parent path terminal inventory | count | known |
| original45_completed_subset_cash | -209.51097740002885 | unit_cash | completed exits in original45 | sum | known |
| original45_mean_net_bps | -0.16333165221898188 | bp/trade | completed exits in original45 | mean | known |
| original45_completed_trades | 2997 | trades | completed exits in original45 | count | known |
| original45_fill_cashflow | -209.51097740006935 | unit_cash | actual fills during original45; cashflow with inventory, not MTM or completed profit | sum | known |
| original45_daily_cash_ci_low | -7.6813015888903085 | unit_cash/day | 5-day blocks 2000 seed20261013 | bootstrap_2.5pct | known |
| original45_daily_cash_ci_high | -1.766021752666123 | unit_cash/day | 5-day blocks 2000 seed20261013 | bootstrap_97.5pct | known |
| extension37_completed_subset_cash | -235.80672299998685 | unit_cash | completed exits in extension37 | sum | known |
| extension37_mean_net_bps | -0.2213242100099697 | bp/trade | completed exits in extension37 | mean | known |
| extension37_completed_trades | 2409 | trades | completed exits in extension37 | count | known |
| extension37_fill_cashflow | -235.80672300014612 | unit_cash | actual fills during extension37; cashflow with inventory, not MTM or completed profit | sum | known |
| extension37_daily_cash_ci_low | -19.74434405540457 | unit_cash/day | 5-day blocks 2000 seed20261013 | bootstrap_2.5pct | known |
| extension37_daily_cash_ci_high | 1.0866327925683512 | unit_cash/day | 5-day blocks 2000 seed20261013 | bootstrap_97.5pct | known |
| full82_completed_subset_cash | -445.31770040001567 | unit_cash | completed exits in full82 | sum | known |
| full82_mean_net_bps | -0.18917406282173618 | bp/trade | completed exits in full82 | mean | known |
| full82_completed_trades | 5406 | trades | completed exits in full82 | count | known |
| full82_fill_cashflow | -445.3177004002482 | unit_cash | actual fills during full82; cashflow with inventory, not MTM or completed profit | sum | known |
| full82_daily_cash_ci_low | -11.380356068353915 | unit_cash/day | 5-day blocks 2000 seed20261013 | bootstrap_2.5pct | known |
| full82_daily_cash_ci_high | -1.534930320304742 | unit_cash/day | 5-day blocks 2000 seed20261013 | bootstrap_97.5pct | known |
| development38_completed_subset_cash | -185.7570288000246 | unit_cash | completed exits in development38 | sum | known |
| development38_mean_net_bps | -0.15947788207427482 | bp/trade | completed exits in development38 | mean | known |
| development38_completed_trades | 2716 | trades | completed exits in development38 | count | known |
| development38_fill_cashflow | -185.75702880016615 | unit_cash | actual fills during development38; cashflow with inventory, not MTM or completed profit | sum | known |
| development38_daily_cash_ci_low | -8.325248033291004 | unit_cash/day | 5-day blocks 2000 seed20261013 | bootstrap_2.5pct | known |
| development38_daily_cash_ci_high | -1.1942451764481694 | unit_cash/day | 5-day blocks 2000 seed20261013 | bootstrap_97.5pct | known |
| viewedJuly7_completed_subset_cash | -23.753948600004207 | unit_cash | completed exits in viewedJuly7 | sum | known |
| viewedJuly7_mean_net_bps | -0.2005801921229833 | bp/trade | completed exits in viewedJuly7 | mean | known |
| viewedJuly7_completed_trades | 281 | trades | completed exits in viewedJuly7 | count | known |
| viewedJuly7_fill_cashflow | -23.753948600001422 | unit_cash | actual fills during viewedJuly7; cashflow with inventory, not MTM or completed profit | sum | known |
| viewedJuly7_daily_cash_ci_low | -8.883111485715261 | unit_cash/day | 5-day blocks 2000 seed20261013 | bootstrap_2.5pct | known |
| viewedJuly7_daily_cash_ci_high | -2.4435829428587534 | unit_cash/day | 5-day blocks 2000 seed20261013 | bootstrap_97.5pct | known |
| July_extension_completed_subset_cash | 38.94985180000603 | unit_cash | completed exits in July_extension | sum | known |
| July_extension_mean_net_bps | 0.14708100884606498 | bp/trade | completed exits in July_extension | mean | known |
| July_extension_completed_trades | 627 | trades | completed exits in July_extension | count | known |
| July_extension_fill_cashflow | 38.94985180006961 | unit_cash | actual fills during July_extension; cashflow with inventory, not MTM or completed profit | sum | known |
| July_extension_daily_cash_ci_low | -4.242261814375155 | unit_cash/day | 5-day blocks 2000 seed20261013 | bootstrap_2.5pct | known |
| July_extension_daily_cash_ci_high | 10.040263039688307 | unit_cash/day | 5-day blocks 2000 seed20261013 | bootstrap_97.5pct | known |
| August_completed_subset_cash | -274.7565747999929 | unit_cash | completed exits in August | sum | known |
| August_mean_net_bps | -0.3509482684963523 | bp/trade | completed exits in August | mean | known |
| August_completed_trades | 1782 | trades | completed exits in August | count | known |
| August_fill_cashflow | -274.75657480013433 | unit_cash | actual fills during August; cashflow with inventory, not MTM or completed profit | sum | known |
| August_daily_cash_ci_low | -31.523404387855848 | unit_cash/day | 5-day blocks 2000 seed20261013 | bootstrap_2.5pct | known |
| August_daily_cash_ci_high | -7.382184501190105 | unit_cash/day | 5-day blocks 2000 seed20261013 | bootstrap_97.5pct | known |
| cross_date_trades | 7 | trades | completed unit round trips | count | known |
| holding_occupancy_seconds | 474280.055 | s | sum of completed inventory holding times | sum | known |
| remove_best_day_cash | -503.65086840001635 | unit_cash | 82-day completed subset less best exit day | sum | known |
| remove_best_trade_cash | -500.3763658000154 | unit_cash | completed subset less best trade | sum | known |

限制：原45日已查看；新增37日已在F2扩展研究中查看，不是独立holdout；差距诊断仅覆盖原45日；现金按退出日归因；成交现金流另列，均不是账户MTM；未作多重比较校正；区间跨零不等于等效；固定费用和proxy时钟，不包含资金费和真实执行容量验证；暂定工作基线是用户指定比较对象，不代表收益优越或人工研究接受；入场筛选后信号统计单列，不冒充完整F2信号统计；实际fill后固定2秒响应未恢复时明确缺口，不新增策略条件；独立完整路径对照。；期末状态 flat；未知库存 0；原45日AU空头亏损、多空低于多头及利润集中事实保留于原报告。；技术自查通过；独立技术审查pending，人工研究复核pending。；本版仅修正已查看样本的来源说明；原v1保留档案，所有策略与数值指标相同。；82 verified expected dates, 45 original +37 extension; exploratory viewed data; unknown inventory separately disclosed

- PnL_path：missing_facts；no equity or account-value source is projected
- cancel_attribution：missing_facts；cancel attribution facts unavailable
- fill_markout：missing_facts；registered fill markout/entry-edge fact is unavailable
- maker_fill：missing_facts；maker order/fill facts unavailable
- signal_bins：missing_facts；no registered source training-bin column

## AU S_H5 完整独立路径（档案v1，样本说明已更正）

评价：exp_20261021_ag_au_h5_extension_20260831_v1/AU_S_H5_full82/full82_v1；来源运行：run-27b913988332403fa8565619a651fafd。

实际日期：20260507, 20260508, 20260511, 20260512, 20260513, 20260514, 20260515, 20260518, 20260519, 20260520, 20260521, 20260522, 20260525, 20260526, 20260527, 20260528, 20260529, 20260601, 20260602, 20260603, 20260604, 20260605, 20260608, 20260609, 20260610, 20260611, 20260612, 20260615, 20260616, 20260617, 20260618, 20260622, 20260623, 20260624, 20260625, 20260626, 20260629, 20260630, 20260701, 20260702, 20260703, 20260706, 20260707, 20260708, 20260709, 20260710, 20260713, 20260714, 20260715, 20260716, 20260717, 20260720, 20260721, 20260722, 20260723, 20260724, 20260727, 20260728, 20260729, 20260730, 20260731, 20260803, 20260804, 20260805, 20260806, 20260807, 20260810, 20260811, 20260812, 20260813, 20260814, 20260817, 20260818, 20260819, 20260820, 20260821, 20260824, 20260825, 20260826, 20260827, 20260828, 20260831

| 原生指标 | 值 | 单位 | 分母 | 汇总 | 状态 |
| --- | --- | --- | --- | --- | --- |
| full82_net_cash | 68.25650260000324 | unit_cash | 82 verified dates, flat terminal path only | sum | known |
| full82_mean_net_bps | 0.12369468633072293 | bp/trade | completed unit round trips | mean | known |
| completed_trades | 1381 | trades | 82 verified expected dates | count | known |
| terminal_unknown_inventory | 0 | positions | parent path terminal inventory | count | known |
| original45_completed_subset_cash | -38.725669600003044 | unit_cash | completed exits in original45 | sum | known |
| original45_mean_net_bps | -0.11047274439055328 | bp/trade | completed exits in original45 | mean | known |
| original45_completed_trades | 766 | trades | completed exits in original45 | count | known |
| original45_fill_cashflow | -38.725669600045876 | unit_cash | actual fills during original45; cashflow with inventory, not MTM or completed profit | sum | known |
| original45_daily_cash_ci_low | -2.599014723222341 | unit_cash/day | 5-day blocks 2000 seed20261013 | bootstrap_2.5pct | known |
| original45_daily_cash_ci_high | 1.0666451398887382 | unit_cash/day | 5-day blocks 2000 seed20261013 | bootstrap_97.5pct | known |
| extension37_completed_subset_cash | 106.98217220000626 | unit_cash | completed exits in extension37 | sum | known |
| extension37_mean_net_bps | 0.4153568845949466 | bp/trade | completed exits in extension37 | mean | known |
| extension37_completed_trades | 615 | trades | completed exits in extension37 | count | known |
| extension37_fill_cashflow | 106.98217219995422 | unit_cash | actual fills during extension37; cashflow with inventory, not MTM or completed profit | sum | known |
| extension37_daily_cash_ci_low | -1.3515403158106343 | unit_cash/day | 5-day blocks 2000 seed20261013 | bootstrap_2.5pct | known |
| extension37_daily_cash_ci_high | 5.888762427162451 | unit_cash/day | 5-day blocks 2000 seed20261013 | bootstrap_97.5pct | known |
| full82_completed_subset_cash | 68.25650260000324 | unit_cash | completed exits in full82 | sum | known |
| full82_mean_net_bps | 0.12369468633072293 | bp/trade | completed exits in full82 | mean | known |
| full82_completed_trades | 1381 | trades | completed exits in full82 | count | known |
| full82_fill_cashflow | 68.25650260005295 | unit_cash | actual fills during full82; cashflow with inventory, not MTM or completed profit | sum | known |
| full82_daily_cash_ci_low | -1.355684409756208 | unit_cash/day | 5-day blocks 2000 seed20261013 | bootstrap_2.5pct | known |
| full82_daily_cash_ci_high | 2.842729932987814 | unit_cash/day | 5-day blocks 2000 seed20261013 | bootstrap_97.5pct | known |
| development38_completed_subset_cash | -28.01990240000133 | unit_cash | completed exits in development38 | sum | known |
| development38_mean_net_bps | -0.0913982693425525 | bp/trade | completed exits in development38 | mean | known |
| development38_completed_trades | 654 | trades | completed exits in development38 | count | known |
| development38_fill_cashflow | -28.019902400012597 | unit_cash | actual fills during development38; cashflow with inventory, not MTM or completed profit | sum | known |
| development38_daily_cash_ci_low | -2.7137566986842563 | unit_cash/day | 5-day blocks 2000 seed20261013 | bootstrap_2.5pct | known |
| development38_daily_cash_ci_high | 1.4677085539473267 | unit_cash/day | 5-day blocks 2000 seed20261013 | bootstrap_97.5pct | known |
| viewedJuly7_completed_subset_cash | -10.705767200001711 | unit_cash | completed exits in viewedJuly7 | sum | known |
| viewedJuly7_mean_net_bps | -0.2218540540458433 | bp/trade | completed exits in viewedJuly7 | mean | known |
| viewedJuly7_completed_trades | 112 | trades | completed exits in viewedJuly7 | count | known |
| viewedJuly7_fill_cashflow | -10.705767199964612 | unit_cash | actual fills during viewedJuly7; cashflow with inventory, not MTM or completed profit | sum | known |
| viewedJuly7_daily_cash_ci_low | -3.8453499428577556 | unit_cash/day | 5-day blocks 2000 seed20261013 | bootstrap_2.5pct | known |
| viewedJuly7_daily_cash_ci_high | 0.06999945714173972 | unit_cash/day | 5-day blocks 2000 seed20261013 | bootstrap_97.5pct | known |
| July_extension_completed_subset_cash | 95.1689332000017 | unit_cash | completed exits in July_extension | sum | known |
| July_extension_mean_net_bps | 1.0228160800801067 | bp/trade | completed exits in July_extension | mean | known |
| July_extension_completed_trades | 228 | trades | completed exits in July_extension | count | known |
| July_extension_fill_cashflow | 95.16893319997325 | unit_cash | actual fills during July_extension; cashflow with inventory, not MTM or completed profit | sum | known |
| July_extension_daily_cash_ci_low | 0.916147514375365 | unit_cash/day | 5-day blocks 2000 seed20261013 | bootstrap_2.5pct | known |
| July_extension_daily_cash_ci_high | 12.63302865500029 | unit_cash/day | 5-day blocks 2000 seed20261013 | bootstrap_97.5pct | known |
| August_completed_subset_cash | 11.813239000004593 | unit_cash | completed exits in August | sum | known |
| August_mean_net_bps | 0.057473947719968436 | bp/trade | completed exits in August | mean | known |
| August_completed_trades | 387 | trades | completed exits in August | count | known |
| August_fill_cashflow | 11.813239000046451 | unit_cash | actual fills during August; cashflow with inventory, not MTM or completed profit | sum | known |
| August_daily_cash_ci_low | -2.9422000290469983 | unit_cash/day | 5-day blocks 2000 seed20261013 | bootstrap_2.5pct | known |
| August_daily_cash_ci_high | 2.355132108333498 | unit_cash/day | 5-day blocks 2000 seed20261013 | bootstrap_97.5pct | known |
| cross_date_trades | 1 | trades | completed unit round trips | count | known |
| holding_occupancy_seconds | 78614.716 | s | sum of completed inventory holding times | sum | known |
| remove_best_day_cash | 38.602932000003044 | unit_cash | 82-day completed subset less best exit day | sum | known |
| remove_best_trade_cash | 38.30418620000319 | unit_cash | completed subset less best trade | sum | known |

限制：原45日已查看；新增37日已在F2扩展研究中查看，不是独立holdout；差距诊断仅覆盖原45日；现金按退出日归因；成交现金流另列，均不是账户MTM；未作多重比较校正；区间跨零不等于等效；固定费用和proxy时钟，不包含资金费和真实执行容量验证；暂定工作基线是用户指定比较对象，不代表收益优越或人工研究接受；入场筛选后信号统计单列，不冒充完整F2信号统计；实际fill后固定2秒响应未恢复时明确缺口，不新增策略条件；独立完整路径对照。；期末状态 flat；未知库存 0；原45日AU空头亏损、多空低于多头及利润集中事实保留于原报告。；技术自查通过；独立技术审查pending，人工研究复核pending。；82 verified expected dates, 45 original +37 extension; exploratory viewed data; unknown inventory separately disclosed

- PnL_path：missing_facts；no equity or account-value source is projected
- cancel_attribution：missing_facts；cancel attribution facts unavailable
- fill_markout：missing_facts；registered fill markout/entry-edge fact is unavailable
- maker_fill：missing_facts；maker order/fill facts unavailable
- signal_bins：missing_facts；no registered source training-bin column

## AU S_H5 完整独立路径（说明修订v2）

评价：exp_20261021_ag_au_h5_extension_20260831_v1/AU_S_H5_full82/full82_v2；来源运行：run-27b913988332403fa8565619a651fafd。

实际日期：20260507, 20260508, 20260511, 20260512, 20260513, 20260514, 20260515, 20260518, 20260519, 20260520, 20260521, 20260522, 20260525, 20260526, 20260527, 20260528, 20260529, 20260601, 20260602, 20260603, 20260604, 20260605, 20260608, 20260609, 20260610, 20260611, 20260612, 20260615, 20260616, 20260617, 20260618, 20260622, 20260623, 20260624, 20260625, 20260626, 20260629, 20260630, 20260701, 20260702, 20260703, 20260706, 20260707, 20260708, 20260709, 20260710, 20260713, 20260714, 20260715, 20260716, 20260717, 20260720, 20260721, 20260722, 20260723, 20260724, 20260727, 20260728, 20260729, 20260730, 20260731, 20260803, 20260804, 20260805, 20260806, 20260807, 20260810, 20260811, 20260812, 20260813, 20260814, 20260817, 20260818, 20260819, 20260820, 20260821, 20260824, 20260825, 20260826, 20260827, 20260828, 20260831

| 原生指标 | 值 | 单位 | 分母 | 汇总 | 状态 |
| --- | --- | --- | --- | --- | --- |
| full82_net_cash | 68.25650260000324 | unit_cash | 82 verified dates, flat terminal path only | sum | known |
| full82_mean_net_bps | 0.12369468633072293 | bp/trade | completed unit round trips | mean | known |
| completed_trades | 1381 | trades | 82 verified expected dates | count | known |
| terminal_unknown_inventory | 0 | positions | parent path terminal inventory | count | known |
| original45_completed_subset_cash | -38.725669600003044 | unit_cash | completed exits in original45 | sum | known |
| original45_mean_net_bps | -0.11047274439055328 | bp/trade | completed exits in original45 | mean | known |
| original45_completed_trades | 766 | trades | completed exits in original45 | count | known |
| original45_fill_cashflow | -38.725669600045876 | unit_cash | actual fills during original45; cashflow with inventory, not MTM or completed profit | sum | known |
| original45_daily_cash_ci_low | -2.599014723222341 | unit_cash/day | 5-day blocks 2000 seed20261013 | bootstrap_2.5pct | known |
| original45_daily_cash_ci_high | 1.0666451398887382 | unit_cash/day | 5-day blocks 2000 seed20261013 | bootstrap_97.5pct | known |
| extension37_completed_subset_cash | 106.98217220000626 | unit_cash | completed exits in extension37 | sum | known |
| extension37_mean_net_bps | 0.4153568845949466 | bp/trade | completed exits in extension37 | mean | known |
| extension37_completed_trades | 615 | trades | completed exits in extension37 | count | known |
| extension37_fill_cashflow | 106.98217219995422 | unit_cash | actual fills during extension37; cashflow with inventory, not MTM or completed profit | sum | known |
| extension37_daily_cash_ci_low | -1.3515403158106343 | unit_cash/day | 5-day blocks 2000 seed20261013 | bootstrap_2.5pct | known |
| extension37_daily_cash_ci_high | 5.888762427162451 | unit_cash/day | 5-day blocks 2000 seed20261013 | bootstrap_97.5pct | known |
| full82_completed_subset_cash | 68.25650260000324 | unit_cash | completed exits in full82 | sum | known |
| full82_mean_net_bps | 0.12369468633072293 | bp/trade | completed exits in full82 | mean | known |
| full82_completed_trades | 1381 | trades | completed exits in full82 | count | known |
| full82_fill_cashflow | 68.25650260005295 | unit_cash | actual fills during full82; cashflow with inventory, not MTM or completed profit | sum | known |
| full82_daily_cash_ci_low | -1.355684409756208 | unit_cash/day | 5-day blocks 2000 seed20261013 | bootstrap_2.5pct | known |
| full82_daily_cash_ci_high | 2.842729932987814 | unit_cash/day | 5-day blocks 2000 seed20261013 | bootstrap_97.5pct | known |
| development38_completed_subset_cash | -28.01990240000133 | unit_cash | completed exits in development38 | sum | known |
| development38_mean_net_bps | -0.0913982693425525 | bp/trade | completed exits in development38 | mean | known |
| development38_completed_trades | 654 | trades | completed exits in development38 | count | known |
| development38_fill_cashflow | -28.019902400012597 | unit_cash | actual fills during development38; cashflow with inventory, not MTM or completed profit | sum | known |
| development38_daily_cash_ci_low | -2.7137566986842563 | unit_cash/day | 5-day blocks 2000 seed20261013 | bootstrap_2.5pct | known |
| development38_daily_cash_ci_high | 1.4677085539473267 | unit_cash/day | 5-day blocks 2000 seed20261013 | bootstrap_97.5pct | known |
| viewedJuly7_completed_subset_cash | -10.705767200001711 | unit_cash | completed exits in viewedJuly7 | sum | known |
| viewedJuly7_mean_net_bps | -0.2218540540458433 | bp/trade | completed exits in viewedJuly7 | mean | known |
| viewedJuly7_completed_trades | 112 | trades | completed exits in viewedJuly7 | count | known |
| viewedJuly7_fill_cashflow | -10.705767199964612 | unit_cash | actual fills during viewedJuly7; cashflow with inventory, not MTM or completed profit | sum | known |
| viewedJuly7_daily_cash_ci_low | -3.8453499428577556 | unit_cash/day | 5-day blocks 2000 seed20261013 | bootstrap_2.5pct | known |
| viewedJuly7_daily_cash_ci_high | 0.06999945714173972 | unit_cash/day | 5-day blocks 2000 seed20261013 | bootstrap_97.5pct | known |
| July_extension_completed_subset_cash | 95.1689332000017 | unit_cash | completed exits in July_extension | sum | known |
| July_extension_mean_net_bps | 1.0228160800801067 | bp/trade | completed exits in July_extension | mean | known |
| July_extension_completed_trades | 228 | trades | completed exits in July_extension | count | known |
| July_extension_fill_cashflow | 95.16893319997325 | unit_cash | actual fills during July_extension; cashflow with inventory, not MTM or completed profit | sum | known |
| July_extension_daily_cash_ci_low | 0.916147514375365 | unit_cash/day | 5-day blocks 2000 seed20261013 | bootstrap_2.5pct | known |
| July_extension_daily_cash_ci_high | 12.63302865500029 | unit_cash/day | 5-day blocks 2000 seed20261013 | bootstrap_97.5pct | known |
| August_completed_subset_cash | 11.813239000004593 | unit_cash | completed exits in August | sum | known |
| August_mean_net_bps | 0.057473947719968436 | bp/trade | completed exits in August | mean | known |
| August_completed_trades | 387 | trades | completed exits in August | count | known |
| August_fill_cashflow | 11.813239000046451 | unit_cash | actual fills during August; cashflow with inventory, not MTM or completed profit | sum | known |
| August_daily_cash_ci_low | -2.9422000290469983 | unit_cash/day | 5-day blocks 2000 seed20261013 | bootstrap_2.5pct | known |
| August_daily_cash_ci_high | 2.355132108333498 | unit_cash/day | 5-day blocks 2000 seed20261013 | bootstrap_97.5pct | known |
| cross_date_trades | 1 | trades | completed unit round trips | count | known |
| holding_occupancy_seconds | 78614.716 | s | sum of completed inventory holding times | sum | known |
| remove_best_day_cash | 38.602932000003044 | unit_cash | 82-day completed subset less best exit day | sum | known |
| remove_best_trade_cash | 38.30418620000319 | unit_cash | completed subset less best trade | sum | known |

限制：原45日已查看；新增37日已在F2扩展研究中查看，不是独立holdout；差距诊断仅覆盖原45日；现金按退出日归因；成交现金流另列，均不是账户MTM；未作多重比较校正；区间跨零不等于等效；固定费用和proxy时钟，不包含资金费和真实执行容量验证；暂定工作基线是用户指定比较对象，不代表收益优越或人工研究接受；入场筛选后信号统计单列，不冒充完整F2信号统计；实际fill后固定2秒响应未恢复时明确缺口，不新增策略条件；独立完整路径对照。；期末状态 flat；未知库存 0；原45日AU空头亏损、多空低于多头及利润集中事实保留于原报告。；技术自查通过；独立技术审查pending，人工研究复核pending。；本版仅修正已查看样本的来源说明；原v1保留档案，所有策略与数值指标相同。；82 verified expected dates, 45 original +37 extension; exploratory viewed data; unknown inventory separately disclosed

- PnL_path：missing_facts；no equity or account-value source is projected
- cancel_attribution：missing_facts；cancel attribution facts unavailable
- fill_markout：missing_facts；registered fill markout/entry-edge fact is unavailable
- maker_fill：missing_facts；maker order/fill facts unavailable
- signal_bins：missing_facts；no registered source training-bin column

## AU S_raw 完整独立路径（档案v1，样本说明已更正）

评价：exp_20261021_ag_au_h5_extension_20260831_v1/AU_S_raw_full82/full82_v1；来源运行：run-27b913988332403fa8565619a651fafd。

实际日期：20260507, 20260508, 20260511, 20260512, 20260513, 20260514, 20260515, 20260518, 20260519, 20260520, 20260521, 20260522, 20260525, 20260526, 20260527, 20260528, 20260529, 20260601, 20260602, 20260603, 20260604, 20260605, 20260608, 20260609, 20260610, 20260611, 20260612, 20260615, 20260616, 20260617, 20260618, 20260622, 20260623, 20260624, 20260625, 20260626, 20260629, 20260630, 20260701, 20260702, 20260703, 20260706, 20260707, 20260708, 20260709, 20260710, 20260713, 20260714, 20260715, 20260716, 20260717, 20260720, 20260721, 20260722, 20260723, 20260724, 20260727, 20260728, 20260729, 20260730, 20260731, 20260803, 20260804, 20260805, 20260806, 20260807, 20260810, 20260811, 20260812, 20260813, 20260814, 20260817, 20260818, 20260819, 20260820, 20260821, 20260824, 20260825, 20260826, 20260827, 20260828, 20260831

| 原生指标 | 值 | 单位 | 分母 | 汇总 | 状态 |
| --- | --- | --- | --- | --- | --- |
| full82_net_cash | -499.1195764000148 | unit_cash | 82 verified dates, flat terminal path only | sum | known |
| full82_mean_net_bps | -0.19558843509505858 | bp/trade | completed unit round trips | mean | known |
| completed_trades | 5795 | trades | 82 verified expected dates | count | known |
| terminal_unknown_inventory | 0 | positions | parent path terminal inventory | count | known |
| original45_completed_subset_cash | -239.8800416000252 | unit_cash | completed exits in original45 | sum | known |
| original45_mean_net_bps | -0.16886468190643913 | bp/trade | completed exits in original45 | mean | known |
| original45_completed_trades | 3225 | trades | completed exits in original45 | count | known |
| original45_fill_cashflow | -239.88004159974935 | unit_cash | actual fills during original45; cashflow with inventory, not MTM or completed profit | sum | known |
| original45_daily_cash_ci_low | -10.494949268555136 | unit_cash/day | 5-day blocks 2000 seed20261013 | bootstrap_2.5pct | known |
| original45_daily_cash_ci_high | -0.9140533532231707 | unit_cash/day | 5-day blocks 2000 seed20261013 | bootstrap_97.5pct | known |
| extension37_completed_subset_cash | -259.23953479998966 | unit_cash | completed exits in extension37 | sum | known |
| extension37_mean_net_bps | -0.22912310592513538 | bp/trade | completed exits in extension37 | mean | known |
| extension37_completed_trades | 2570 | trades | completed exits in extension37 | count | known |
| extension37_fill_cashflow | -259.2395348000846 | unit_cash | actual fills during extension37; cashflow with inventory, not MTM or completed profit | sum | known |
| extension37_daily_cash_ci_low | -20.699965243918214 | unit_cash/day | 5-day blocks 2000 seed20261013 | bootstrap_2.5pct | known |
| extension37_daily_cash_ci_high | 0.11844983162230119 | unit_cash/day | 5-day blocks 2000 seed20261013 | bootstrap_97.5pct | known |
| full82_completed_subset_cash | -499.1195764000148 | unit_cash | completed exits in full82 | sum | known |
| full82_mean_net_bps | -0.19558843509505858 | bp/trade | completed exits in full82 | mean | known |
| full82_completed_trades | 5795 | trades | completed exits in full82 | count | known |
| full82_fill_cashflow | -499.11957640033415 | unit_cash | actual fills during full82; cashflow with inventory, not MTM or completed profit | sum | known |
| full82_daily_cash_ci_low | -12.521257748658504 | unit_cash/day | 5-day blocks 2000 seed20261013 | bootstrap_2.5pct | known |
| full82_daily_cash_ci_high | -1.8115441115249558 | unit_cash/day | 5-day blocks 2000 seed20261013 | bootstrap_97.5pct | known |
| development38_completed_subset_cash | -246.2654768000213 | unit_cash | completed exits in development38 | sum | known |
| development38_mean_net_bps | -0.19326179247774936 | bp/trade | completed exits in development38 | mean | known |
| development38_completed_trades | 2914 | trades | completed exits in development38 | count | known |
| development38_fill_cashflow | -246.26547680013573 | unit_cash | actual fills during development38; cashflow with inventory, not MTM or completed profit | sum | known |
| development38_daily_cash_ci_low | -12.093018769211023 | unit_cash/day | 5-day blocks 2000 seed20261013 | bootstrap_2.5pct | known |
| development38_daily_cash_ci_high | -1.8894258421057168 | unit_cash/day | 5-day blocks 2000 seed20261013 | bootstrap_97.5pct | known |
| viewedJuly7_completed_subset_cash | 6.385435199996142 | unit_cash | completed exits in viewedJuly7 | sum | known |
| viewedJuly7_mean_net_bps | 0.059730752835676346 | bp/trade | completed exits in viewedJuly7 | mean | known |
| viewedJuly7_completed_trades | 311 | trades | completed exits in viewedJuly7 | count | known |
| viewedJuly7_fill_cashflow | 6.385435199996664 | unit_cash | actual fills during viewedJuly7; cashflow with inventory, not MTM or completed profit | sum | known |
| viewedJuly7_daily_cash_ci_low | -8.45623125714374 | unit_cash/day | 5-day blocks 2000 seed20261013 | bootstrap_2.5pct | known |
| viewedJuly7_daily_cash_ci_high | 7.588433514284248 | unit_cash/day | 5-day blocks 2000 seed20261013 | bootstrap_97.5pct | known |
| July_extension_completed_subset_cash | 22.158399600008156 | unit_cash | completed exits in July_extension | sum | known |
| July_extension_mean_net_bps | 0.07338957261268707 | bp/trade | completed exits in July_extension | mean | known |
| July_extension_completed_trades | 690 | trades | completed exits in July_extension | count | known |
| July_extension_fill_cashflow | 22.158399599971744 | unit_cash | actual fills during July_extension; cashflow with inventory, not MTM or completed profit | sum | known |
| July_extension_daily_cash_ci_low | -4.4586279374997595 | unit_cash/day | 5-day blocks 2000 seed20261013 | bootstrap_2.5pct | known |
| July_extension_daily_cash_ci_high | 8.081567983438697 | unit_cash/day | 5-day blocks 2000 seed20261013 | bootstrap_97.5pct | known |
| August_completed_subset_cash | -281.39793439999784 | unit_cash | completed exits in August | sum | known |
| August_mean_net_bps | -0.34015169538848516 | bp/trade | completed exits in August | mean | known |
| August_completed_trades | 1880 | trades | completed exits in August | count | known |
| August_fill_cashflow | -281.39793440007634 | unit_cash | actual fills during August; cashflow with inventory, not MTM or completed profit | sum | known |
| August_daily_cash_ci_low | -32.83457728690343 | unit_cash/day | 5-day blocks 2000 seed20261013 | bootstrap_2.5pct | known |
| August_daily_cash_ci_high | -7.36866496166644 | unit_cash/day | 5-day blocks 2000 seed20261013 | bootstrap_97.5pct | known |
| cross_date_trades | 7 | trades | completed unit round trips | count | known |
| holding_occupancy_seconds | 750309.055 | s | sum of completed inventory holding times | sum | known |
| remove_best_day_cash | -560.1624566000128 | unit_cash | 82-day completed subset less best exit day | sum | known |
| remove_best_trade_cash | -554.1782418000146 | unit_cash | completed subset less best trade | sum | known |

限制：原45日已查看；新增37日已在F2扩展研究中查看，不是独立holdout；差距诊断仅覆盖原45日；现金按退出日归因；成交现金流另列，均不是账户MTM；未作多重比较校正；区间跨零不等于等效；固定费用和proxy时钟，不包含资金费和真实执行容量验证；暂定工作基线是用户指定比较对象，不代表收益优越或人工研究接受；入场筛选后信号统计单列，不冒充完整F2信号统计；实际fill后固定2秒响应未恢复时明确缺口，不新增策略条件；独立完整路径对照。；期末状态 flat；未知库存 0；原45日AU空头亏损、多空低于多头及利润集中事实保留于原报告。；技术自查通过；独立技术审查pending，人工研究复核pending。；82 verified expected dates, 45 original +37 extension; exploratory viewed data; unknown inventory separately disclosed

- PnL_path：missing_facts；no equity or account-value source is projected
- cancel_attribution：missing_facts；cancel attribution facts unavailable
- fill_markout：missing_facts；registered fill markout/entry-edge fact is unavailable
- maker_fill：missing_facts；maker order/fill facts unavailable
- signal_bins：missing_facts；no registered source training-bin column

## AU S_raw 完整独立路径（说明修订v2）

评价：exp_20261021_ag_au_h5_extension_20260831_v1/AU_S_raw_full82/full82_v2；来源运行：run-27b913988332403fa8565619a651fafd。

实际日期：20260507, 20260508, 20260511, 20260512, 20260513, 20260514, 20260515, 20260518, 20260519, 20260520, 20260521, 20260522, 20260525, 20260526, 20260527, 20260528, 20260529, 20260601, 20260602, 20260603, 20260604, 20260605, 20260608, 20260609, 20260610, 20260611, 20260612, 20260615, 20260616, 20260617, 20260618, 20260622, 20260623, 20260624, 20260625, 20260626, 20260629, 20260630, 20260701, 20260702, 20260703, 20260706, 20260707, 20260708, 20260709, 20260710, 20260713, 20260714, 20260715, 20260716, 20260717, 20260720, 20260721, 20260722, 20260723, 20260724, 20260727, 20260728, 20260729, 20260730, 20260731, 20260803, 20260804, 20260805, 20260806, 20260807, 20260810, 20260811, 20260812, 20260813, 20260814, 20260817, 20260818, 20260819, 20260820, 20260821, 20260824, 20260825, 20260826, 20260827, 20260828, 20260831

| 原生指标 | 值 | 单位 | 分母 | 汇总 | 状态 |
| --- | --- | --- | --- | --- | --- |
| full82_net_cash | -499.1195764000148 | unit_cash | 82 verified dates, flat terminal path only | sum | known |
| full82_mean_net_bps | -0.19558843509505858 | bp/trade | completed unit round trips | mean | known |
| completed_trades | 5795 | trades | 82 verified expected dates | count | known |
| terminal_unknown_inventory | 0 | positions | parent path terminal inventory | count | known |
| original45_completed_subset_cash | -239.8800416000252 | unit_cash | completed exits in original45 | sum | known |
| original45_mean_net_bps | -0.16886468190643913 | bp/trade | completed exits in original45 | mean | known |
| original45_completed_trades | 3225 | trades | completed exits in original45 | count | known |
| original45_fill_cashflow | -239.88004159974935 | unit_cash | actual fills during original45; cashflow with inventory, not MTM or completed profit | sum | known |
| original45_daily_cash_ci_low | -10.494949268555136 | unit_cash/day | 5-day blocks 2000 seed20261013 | bootstrap_2.5pct | known |
| original45_daily_cash_ci_high | -0.9140533532231707 | unit_cash/day | 5-day blocks 2000 seed20261013 | bootstrap_97.5pct | known |
| extension37_completed_subset_cash | -259.23953479998966 | unit_cash | completed exits in extension37 | sum | known |
| extension37_mean_net_bps | -0.22912310592513538 | bp/trade | completed exits in extension37 | mean | known |
| extension37_completed_trades | 2570 | trades | completed exits in extension37 | count | known |
| extension37_fill_cashflow | -259.2395348000846 | unit_cash | actual fills during extension37; cashflow with inventory, not MTM or completed profit | sum | known |
| extension37_daily_cash_ci_low | -20.699965243918214 | unit_cash/day | 5-day blocks 2000 seed20261013 | bootstrap_2.5pct | known |
| extension37_daily_cash_ci_high | 0.11844983162230119 | unit_cash/day | 5-day blocks 2000 seed20261013 | bootstrap_97.5pct | known |
| full82_completed_subset_cash | -499.1195764000148 | unit_cash | completed exits in full82 | sum | known |
| full82_mean_net_bps | -0.19558843509505858 | bp/trade | completed exits in full82 | mean | known |
| full82_completed_trades | 5795 | trades | completed exits in full82 | count | known |
| full82_fill_cashflow | -499.11957640033415 | unit_cash | actual fills during full82; cashflow with inventory, not MTM or completed profit | sum | known |
| full82_daily_cash_ci_low | -12.521257748658504 | unit_cash/day | 5-day blocks 2000 seed20261013 | bootstrap_2.5pct | known |
| full82_daily_cash_ci_high | -1.8115441115249558 | unit_cash/day | 5-day blocks 2000 seed20261013 | bootstrap_97.5pct | known |
| development38_completed_subset_cash | -246.2654768000213 | unit_cash | completed exits in development38 | sum | known |
| development38_mean_net_bps | -0.19326179247774936 | bp/trade | completed exits in development38 | mean | known |
| development38_completed_trades | 2914 | trades | completed exits in development38 | count | known |
| development38_fill_cashflow | -246.26547680013573 | unit_cash | actual fills during development38; cashflow with inventory, not MTM or completed profit | sum | known |
| development38_daily_cash_ci_low | -12.093018769211023 | unit_cash/day | 5-day blocks 2000 seed20261013 | bootstrap_2.5pct | known |
| development38_daily_cash_ci_high | -1.8894258421057168 | unit_cash/day | 5-day blocks 2000 seed20261013 | bootstrap_97.5pct | known |
| viewedJuly7_completed_subset_cash | 6.385435199996142 | unit_cash | completed exits in viewedJuly7 | sum | known |
| viewedJuly7_mean_net_bps | 0.059730752835676346 | bp/trade | completed exits in viewedJuly7 | mean | known |
| viewedJuly7_completed_trades | 311 | trades | completed exits in viewedJuly7 | count | known |
| viewedJuly7_fill_cashflow | 6.385435199996664 | unit_cash | actual fills during viewedJuly7; cashflow with inventory, not MTM or completed profit | sum | known |
| viewedJuly7_daily_cash_ci_low | -8.45623125714374 | unit_cash/day | 5-day blocks 2000 seed20261013 | bootstrap_2.5pct | known |
| viewedJuly7_daily_cash_ci_high | 7.588433514284248 | unit_cash/day | 5-day blocks 2000 seed20261013 | bootstrap_97.5pct | known |
| July_extension_completed_subset_cash | 22.158399600008156 | unit_cash | completed exits in July_extension | sum | known |
| July_extension_mean_net_bps | 0.07338957261268707 | bp/trade | completed exits in July_extension | mean | known |
| July_extension_completed_trades | 690 | trades | completed exits in July_extension | count | known |
| July_extension_fill_cashflow | 22.158399599971744 | unit_cash | actual fills during July_extension; cashflow with inventory, not MTM or completed profit | sum | known |
| July_extension_daily_cash_ci_low | -4.4586279374997595 | unit_cash/day | 5-day blocks 2000 seed20261013 | bootstrap_2.5pct | known |
| July_extension_daily_cash_ci_high | 8.081567983438697 | unit_cash/day | 5-day blocks 2000 seed20261013 | bootstrap_97.5pct | known |
| August_completed_subset_cash | -281.39793439999784 | unit_cash | completed exits in August | sum | known |
| August_mean_net_bps | -0.34015169538848516 | bp/trade | completed exits in August | mean | known |
| August_completed_trades | 1880 | trades | completed exits in August | count | known |
| August_fill_cashflow | -281.39793440007634 | unit_cash | actual fills during August; cashflow with inventory, not MTM or completed profit | sum | known |
| August_daily_cash_ci_low | -32.83457728690343 | unit_cash/day | 5-day blocks 2000 seed20261013 | bootstrap_2.5pct | known |
| August_daily_cash_ci_high | -7.36866496166644 | unit_cash/day | 5-day blocks 2000 seed20261013 | bootstrap_97.5pct | known |
| cross_date_trades | 7 | trades | completed unit round trips | count | known |
| holding_occupancy_seconds | 750309.055 | s | sum of completed inventory holding times | sum | known |
| remove_best_day_cash | -560.1624566000128 | unit_cash | 82-day completed subset less best exit day | sum | known |
| remove_best_trade_cash | -554.1782418000146 | unit_cash | completed subset less best trade | sum | known |

限制：原45日已查看；新增37日已在F2扩展研究中查看，不是独立holdout；差距诊断仅覆盖原45日；现金按退出日归因；成交现金流另列，均不是账户MTM；未作多重比较校正；区间跨零不等于等效；固定费用和proxy时钟，不包含资金费和真实执行容量验证；暂定工作基线是用户指定比较对象，不代表收益优越或人工研究接受；入场筛选后信号统计单列，不冒充完整F2信号统计；实际fill后固定2秒响应未恢复时明确缺口，不新增策略条件；独立完整路径对照。；期末状态 flat；未知库存 0；原45日AU空头亏损、多空低于多头及利润集中事实保留于原报告。；技术自查通过；独立技术审查pending，人工研究复核pending。；本版仅修正已查看样本的来源说明；原v1保留档案，所有策略与数值指标相同。；82 verified expected dates, 45 original +37 extension; exploratory viewed data; unknown inventory separately disclosed

- PnL_path：missing_facts；no equity or account-value source is projected
- cancel_attribution：missing_facts；cancel attribution facts unavailable
- fill_markout：missing_facts；registered fill markout/entry-edge fact is unavailable
- maker_fill：missing_facts；maker order/fill facts unavailable
- signal_bins：missing_facts；no registered source training-bin column

## AG H5多空暂定工作基线（档案v1，样本说明已更正）

评价：exp_20261021_ag_au_h5_extension_20260831_v1/R3_H5_both_AG/full82_v1；来源运行：run-27b913988332403fa8565619a651fafd。

实际日期：20260507, 20260508, 20260511, 20260512, 20260513, 20260514, 20260515, 20260518, 20260519, 20260520, 20260521, 20260522, 20260525, 20260526, 20260527, 20260528, 20260529, 20260601, 20260602, 20260603, 20260604, 20260605, 20260608, 20260609, 20260610, 20260611, 20260612, 20260615, 20260616, 20260617, 20260618, 20260622, 20260623, 20260624, 20260625, 20260626, 20260629, 20260630, 20260701, 20260702, 20260703, 20260706, 20260707, 20260708, 20260709, 20260710, 20260713, 20260714, 20260715, 20260716, 20260717, 20260720, 20260721, 20260722, 20260723, 20260724, 20260727, 20260728, 20260729, 20260730, 20260731, 20260803, 20260804, 20260805, 20260806, 20260807, 20260810, 20260811, 20260812, 20260813, 20260814, 20260817, 20260818, 20260819, 20260820, 20260821, 20260824, 20260825, 20260826, 20260827, 20260828, 20260831

| 原生指标 | 值 | 单位 | 分母 | 汇总 | 状态 |
| --- | --- | --- | --- | --- | --- |
| full82_net_cash | 3.755492200000225 | unit_cash | 82 verified dates, flat terminal path only | sum | known |
| full82_mean_net_bps | 0.12482746226557469 | bp/trade | completed unit round trips | mean | known |
| completed_trades | 3918 | trades | 82 verified expected dates | count | known |
| terminal_unknown_inventory | 0 | positions | parent path terminal inventory | count | known |
| original45_completed_subset_cash | 6.5569894000000275 | unit_cash | completed exits in original45 | sum | known |
| original45_mean_net_bps | 0.3656786578912257 | bp/trade | completed exits in original45 | mean | known |
| original45_completed_trades | 2609 | trades | completed exits in original45 | count | known |
| original45_fill_cashflow | 6.5569893999996225 | unit_cash | actual fills during original45; cashflow with inventory, not MTM or completed profit | sum | known |
| original45_daily_cash_ci_low | 0.08640860400000613 | unit_cash/day | 5-day blocks 2000 seed20261013 | bootstrap_2.5pct | known |
| original45_daily_cash_ci_high | 0.2508831287777725 | unit_cash/day | 5-day blocks 2000 seed20261013 | bootstrap_97.5pct | known |
| extension37_completed_subset_cash | -2.801497199999801 | unit_cash | completed exits in extension37 | sum | known |
| extension37_mean_net_bps | -0.355218962018095 | bp/trade | completed exits in extension37 | mean | known |
| extension37_completed_trades | 1309 | trades | completed exits in extension37 | count | known |
| extension37_fill_cashflow | -2.8014972000001848 | unit_cash | actual fills during extension37; cashflow with inventory, not MTM or completed profit | sum | known |
| extension37_daily_cash_ci_low | -0.16043947783783355 | unit_cash/day | 5-day blocks 2000 seed20261013 | bootstrap_2.5pct | known |
| extension37_daily_cash_ci_high | 0.08127524229729942 | unit_cash/day | 5-day blocks 2000 seed20261013 | bootstrap_97.5pct | known |
| full82_completed_subset_cash | 3.755492200000225 | unit_cash | completed exits in full82 | sum | known |
| full82_mean_net_bps | 0.12482746226557469 | bp/trade | completed exits in full82 | mean | known |
| full82_completed_trades | 3918 | trades | completed exits in full82 | count | known |
| full82_fill_cashflow | 3.7554921999995585 | unit_cash | actual fills during full82; cashflow with inventory, not MTM or completed profit | sum | known |
| full82_daily_cash_ci_low | -0.03950111768292571 | unit_cash/day | 5-day blocks 2000 seed20261013 | bootstrap_2.5pct | known |
| full82_daily_cash_ci_high | 0.14997395329267713 | unit_cash/day | 5-day blocks 2000 seed20261013 | bootstrap_97.5pct | known |
| development38_completed_subset_cash | 6.180815399999984 | unit_cash | completed exits in development38 | sum | known |
| development38_mean_net_bps | 0.39649554518541497 | bp/trade | completed exits in development38 | mean | known |
| development38_completed_trades | 2257 | trades | completed exits in development38 | count | known |
| development38_fill_cashflow | 6.180815400000398 | unit_cash | actual fills during development38; cashflow with inventory, not MTM or completed profit | sum | known |
| development38_daily_cash_ci_low | 0.08093529407894386 | unit_cash/day | 5-day blocks 2000 seed20261013 | bootstrap_2.5pct | known |
| development38_daily_cash_ci_high | 0.26830390605264054 | unit_cash/day | 5-day blocks 2000 seed20261013 | bootstrap_97.5pct | known |
| viewedJuly7_completed_subset_cash | 0.3761740000000443 | unit_cash | completed exits in viewedJuly7 | sum | known |
| viewedJuly7_mean_net_bps | 0.1680828777122909 | bp/trade | completed exits in viewedJuly7 | mean | known |
| viewedJuly7_completed_trades | 352 | trades | completed exits in viewedJuly7 | count | known |
| viewedJuly7_fill_cashflow | 0.3761739999997289 | unit_cash | actual fills during viewedJuly7; cashflow with inventory, not MTM or completed profit | sum | known |
| viewedJuly7_daily_cash_ci_low | 0.05373914285714918 | unit_cash/day | 5-day blocks 2000 seed20261013 | bootstrap_2.5pct | known |
| viewedJuly7_daily_cash_ci_high | 0.18556497142857345 | unit_cash/day | 5-day blocks 2000 seed20261013 | bootstrap_97.5pct | known |
| July_extension_completed_subset_cash | -2.341906999999985 | unit_cash | completed exits in July_extension | sum | known |
| July_extension_mean_net_bps | -0.8198730490335349 | bp/trade | completed exits in July_extension | mean | known |
| July_extension_completed_trades | 487 | trades | completed exits in July_extension | count | known |
| July_extension_fill_cashflow | -2.3419069999998925 | unit_cash | actual fills during July_extension; cashflow with inventory, not MTM or completed profit | sum | known |
| July_extension_daily_cash_ci_low | -0.3389558749999919 | unit_cash/day | 5-day blocks 2000 seed20261013 | bootstrap_2.5pct | known |
| July_extension_daily_cash_ci_high | 0.003062043125000866 | unit_cash/day | 5-day blocks 2000 seed20261013 | bootstrap_97.5pct | known |
| August_completed_subset_cash | -0.45959019999981543 | unit_cash | completed exits in August | sum | known |
| August_mean_net_bps | -0.07993120000286487 | bp/trade | completed exits in August | mean | known |
| August_completed_trades | 822 | trades | completed exits in August | count | known |
| August_fill_cashflow | -0.4595901999995178 | unit_cash | actual fills during August; cashflow with inventory, not MTM or completed profit | sum | known |
| August_daily_cash_ci_low | -0.10545417333331589 | unit_cash/day | 5-day blocks 2000 seed20261013 | bootstrap_2.5pct | known |
| August_daily_cash_ci_high | 0.14120749880952127 | unit_cash/day | 5-day blocks 2000 seed20261013 | bootstrap_97.5pct | known |
| cross_date_trades | 1 | trades | completed unit round trips | count | known |
| holding_occupancy_seconds | 353148.163 | s | sum of completed inventory holding times | sum | known |
| remove_best_day_cash | 2.349129200000151 | unit_cash | 82-day completed subset less best exit day | sum | known |
| remove_best_trade_cash | 2.5834398000002325 | unit_cash | completed subset less best trade | sum | known |

限制：原45日已查看；新增37日已在F2扩展研究中查看，不是独立holdout；差距诊断仅覆盖原45日；现金按退出日归因；成交现金流另列，均不是账户MTM；未作多重比较校正；区间跨零不等于等效；固定费用和proxy时钟，不包含资金费和真实执行容量验证；暂定工作基线是用户指定比较对象，不代表收益优越或人工研究接受；入场筛选后信号统计单列，不冒充完整F2信号统计；实际fill后固定2秒响应未恢复时明确缺口，不新增策略条件；用户指定暂定工作基线，2026-10-20 Prompt，本轮2026-10-21执行；current_reference与人工复核未升级。；期末状态 flat；未知库存 0；原45日AU空头亏损、多空低于多头及利润集中事实保留于原报告。；技术自查通过；独立技术审查pending，人工研究复核pending。；82 verified expected dates, 45 original +37 extension; exploratory viewed data; unknown inventory separately disclosed

- PnL_path：missing_facts；no equity or account-value source is projected
- cancel_attribution：missing_facts；cancel attribution facts unavailable
- fill_markout：missing_facts；registered fill markout/entry-edge fact is unavailable
- maker_fill：missing_facts；maker order/fill facts unavailable
- signal_bins：missing_facts；no registered source training-bin column

## AG H5多空暂定工作基线（说明修订v2）

评价：exp_20261021_ag_au_h5_extension_20260831_v1/R3_H5_both_AG/full82_v2；来源运行：run-27b913988332403fa8565619a651fafd。

实际日期：20260507, 20260508, 20260511, 20260512, 20260513, 20260514, 20260515, 20260518, 20260519, 20260520, 20260521, 20260522, 20260525, 20260526, 20260527, 20260528, 20260529, 20260601, 20260602, 20260603, 20260604, 20260605, 20260608, 20260609, 20260610, 20260611, 20260612, 20260615, 20260616, 20260617, 20260618, 20260622, 20260623, 20260624, 20260625, 20260626, 20260629, 20260630, 20260701, 20260702, 20260703, 20260706, 20260707, 20260708, 20260709, 20260710, 20260713, 20260714, 20260715, 20260716, 20260717, 20260720, 20260721, 20260722, 20260723, 20260724, 20260727, 20260728, 20260729, 20260730, 20260731, 20260803, 20260804, 20260805, 20260806, 20260807, 20260810, 20260811, 20260812, 20260813, 20260814, 20260817, 20260818, 20260819, 20260820, 20260821, 20260824, 20260825, 20260826, 20260827, 20260828, 20260831

| 原生指标 | 值 | 单位 | 分母 | 汇总 | 状态 |
| --- | --- | --- | --- | --- | --- |
| full82_net_cash | 3.755492200000225 | unit_cash | 82 verified dates, flat terminal path only | sum | known |
| full82_mean_net_bps | 0.12482746226557469 | bp/trade | completed unit round trips | mean | known |
| completed_trades | 3918 | trades | 82 verified expected dates | count | known |
| terminal_unknown_inventory | 0 | positions | parent path terminal inventory | count | known |
| original45_completed_subset_cash | 6.5569894000000275 | unit_cash | completed exits in original45 | sum | known |
| original45_mean_net_bps | 0.3656786578912257 | bp/trade | completed exits in original45 | mean | known |
| original45_completed_trades | 2609 | trades | completed exits in original45 | count | known |
| original45_fill_cashflow | 6.5569893999996225 | unit_cash | actual fills during original45; cashflow with inventory, not MTM or completed profit | sum | known |
| original45_daily_cash_ci_low | 0.08640860400000613 | unit_cash/day | 5-day blocks 2000 seed20261013 | bootstrap_2.5pct | known |
| original45_daily_cash_ci_high | 0.2508831287777725 | unit_cash/day | 5-day blocks 2000 seed20261013 | bootstrap_97.5pct | known |
| extension37_completed_subset_cash | -2.801497199999801 | unit_cash | completed exits in extension37 | sum | known |
| extension37_mean_net_bps | -0.355218962018095 | bp/trade | completed exits in extension37 | mean | known |
| extension37_completed_trades | 1309 | trades | completed exits in extension37 | count | known |
| extension37_fill_cashflow | -2.8014972000001848 | unit_cash | actual fills during extension37; cashflow with inventory, not MTM or completed profit | sum | known |
| extension37_daily_cash_ci_low | -0.16043947783783355 | unit_cash/day | 5-day blocks 2000 seed20261013 | bootstrap_2.5pct | known |
| extension37_daily_cash_ci_high | 0.08127524229729942 | unit_cash/day | 5-day blocks 2000 seed20261013 | bootstrap_97.5pct | known |
| full82_completed_subset_cash | 3.755492200000225 | unit_cash | completed exits in full82 | sum | known |
| full82_mean_net_bps | 0.12482746226557469 | bp/trade | completed exits in full82 | mean | known |
| full82_completed_trades | 3918 | trades | completed exits in full82 | count | known |
| full82_fill_cashflow | 3.7554921999995585 | unit_cash | actual fills during full82; cashflow with inventory, not MTM or completed profit | sum | known |
| full82_daily_cash_ci_low | -0.03950111768292571 | unit_cash/day | 5-day blocks 2000 seed20261013 | bootstrap_2.5pct | known |
| full82_daily_cash_ci_high | 0.14997395329267713 | unit_cash/day | 5-day blocks 2000 seed20261013 | bootstrap_97.5pct | known |
| development38_completed_subset_cash | 6.180815399999984 | unit_cash | completed exits in development38 | sum | known |
| development38_mean_net_bps | 0.39649554518541497 | bp/trade | completed exits in development38 | mean | known |
| development38_completed_trades | 2257 | trades | completed exits in development38 | count | known |
| development38_fill_cashflow | 6.180815400000398 | unit_cash | actual fills during development38; cashflow with inventory, not MTM or completed profit | sum | known |
| development38_daily_cash_ci_low | 0.08093529407894386 | unit_cash/day | 5-day blocks 2000 seed20261013 | bootstrap_2.5pct | known |
| development38_daily_cash_ci_high | 0.26830390605264054 | unit_cash/day | 5-day blocks 2000 seed20261013 | bootstrap_97.5pct | known |
| viewedJuly7_completed_subset_cash | 0.3761740000000443 | unit_cash | completed exits in viewedJuly7 | sum | known |
| viewedJuly7_mean_net_bps | 0.1680828777122909 | bp/trade | completed exits in viewedJuly7 | mean | known |
| viewedJuly7_completed_trades | 352 | trades | completed exits in viewedJuly7 | count | known |
| viewedJuly7_fill_cashflow | 0.3761739999997289 | unit_cash | actual fills during viewedJuly7; cashflow with inventory, not MTM or completed profit | sum | known |
| viewedJuly7_daily_cash_ci_low | 0.05373914285714918 | unit_cash/day | 5-day blocks 2000 seed20261013 | bootstrap_2.5pct | known |
| viewedJuly7_daily_cash_ci_high | 0.18556497142857345 | unit_cash/day | 5-day blocks 2000 seed20261013 | bootstrap_97.5pct | known |
| July_extension_completed_subset_cash | -2.341906999999985 | unit_cash | completed exits in July_extension | sum | known |
| July_extension_mean_net_bps | -0.8198730490335349 | bp/trade | completed exits in July_extension | mean | known |
| July_extension_completed_trades | 487 | trades | completed exits in July_extension | count | known |
| July_extension_fill_cashflow | -2.3419069999998925 | unit_cash | actual fills during July_extension; cashflow with inventory, not MTM or completed profit | sum | known |
| July_extension_daily_cash_ci_low | -0.3389558749999919 | unit_cash/day | 5-day blocks 2000 seed20261013 | bootstrap_2.5pct | known |
| July_extension_daily_cash_ci_high | 0.003062043125000866 | unit_cash/day | 5-day blocks 2000 seed20261013 | bootstrap_97.5pct | known |
| August_completed_subset_cash | -0.45959019999981543 | unit_cash | completed exits in August | sum | known |
| August_mean_net_bps | -0.07993120000286487 | bp/trade | completed exits in August | mean | known |
| August_completed_trades | 822 | trades | completed exits in August | count | known |
| August_fill_cashflow | -0.4595901999995178 | unit_cash | actual fills during August; cashflow with inventory, not MTM or completed profit | sum | known |
| August_daily_cash_ci_low | -0.10545417333331589 | unit_cash/day | 5-day blocks 2000 seed20261013 | bootstrap_2.5pct | known |
| August_daily_cash_ci_high | 0.14120749880952127 | unit_cash/day | 5-day blocks 2000 seed20261013 | bootstrap_97.5pct | known |
| cross_date_trades | 1 | trades | completed unit round trips | count | known |
| holding_occupancy_seconds | 353148.163 | s | sum of completed inventory holding times | sum | known |
| remove_best_day_cash | 2.349129200000151 | unit_cash | 82-day completed subset less best exit day | sum | known |
| remove_best_trade_cash | 2.5834398000002325 | unit_cash | completed subset less best trade | sum | known |

限制：原45日已查看；新增37日已在F2扩展研究中查看，不是独立holdout；差距诊断仅覆盖原45日；现金按退出日归因；成交现金流另列，均不是账户MTM；未作多重比较校正；区间跨零不等于等效；固定费用和proxy时钟，不包含资金费和真实执行容量验证；暂定工作基线是用户指定比较对象，不代表收益优越或人工研究接受；入场筛选后信号统计单列，不冒充完整F2信号统计；实际fill后固定2秒响应未恢复时明确缺口，不新增策略条件；用户指定暂定工作基线，2026-10-20 Prompt，本轮2026-10-21执行；current_reference与人工复核未升级。；期末状态 flat；未知库存 0；原45日AU空头亏损、多空低于多头及利润集中事实保留于原报告。；技术自查通过；独立技术审查pending，人工研究复核pending。；本版仅修正已查看样本的来源说明；原v1保留档案，所有策略与数值指标相同。；82 verified expected dates, 45 original +37 extension; exploratory viewed data; unknown inventory separately disclosed

- PnL_path：missing_facts；no equity or account-value source is projected
- cancel_attribution：missing_facts；cancel attribution facts unavailable
- fill_markout：missing_facts；registered fill markout/entry-edge fact is unavailable
- maker_fill：missing_facts；maker order/fill facts unavailable
- signal_bins：missing_facts；no registered source training-bin column

## AG LS_H5内实际多头贡献（档案v1，样本说明已更正）

评价：exp_20261021_ag_au_h5_extension_20260831_v1/R3_H5_both_AG__actual_long/full82_v1；来源运行：run-27b913988332403fa8565619a651fafd。

实际日期：20260507, 20260508, 20260511, 20260512, 20260513, 20260514, 20260515, 20260518, 20260519, 20260520, 20260521, 20260522, 20260525, 20260526, 20260527, 20260528, 20260529, 20260601, 20260602, 20260603, 20260604, 20260605, 20260608, 20260609, 20260610, 20260611, 20260612, 20260615, 20260616, 20260617, 20260618, 20260622, 20260623, 20260624, 20260625, 20260626, 20260629, 20260630, 20260701, 20260702, 20260703, 20260706, 20260707, 20260708, 20260709, 20260710, 20260713, 20260714, 20260715, 20260716, 20260717, 20260720, 20260721, 20260722, 20260723, 20260724, 20260727, 20260728, 20260729, 20260730, 20260731, 20260803, 20260804, 20260805, 20260806, 20260807, 20260810, 20260811, 20260812, 20260813, 20260814, 20260817, 20260818, 20260819, 20260820, 20260821, 20260824, 20260825, 20260826, 20260827, 20260828, 20260831

| 原生指标 | 值 | 单位 | 分母 | 汇总 | 状态 |
| --- | --- | --- | --- | --- | --- |
| full82_net_cash | 1.1319796000001627 | unit_cash | 82 verified dates, flat terminal path only | sum | known |
| full82_mean_net_bps | 0.08299320409255558 | bp/trade | completed unit round trips | mean | known |
| completed_trades | 1934 | trades | 82 verified expected dates | count | known |
| terminal_unknown_inventory | 0 | positions | parent path terminal inventory | count | known |
| cross_date_trades | 0 | trades | completed unit round trips | count | known |
| holding_occupancy_seconds | 287474.68 | s | sum of completed inventory holding times | sum | known |
| remove_best_day_cash | 0.03247740000016908 | unit_cash | 82-day completed subset less best exit day | sum | known |
| remove_best_trade_cash | -0.04007279999982982 | unit_cash | completed subset less best trade | sum | known |

限制：原45日已查看；新增37日已在F2扩展研究中查看，不是独立holdout；差距诊断仅覆盖原45日；现金按退出日归因；成交现金流另列，均不是账户MTM；未作多重比较校正；区间跨零不等于等效；固定费用和proxy时钟，不包含资金费和真实执行容量验证；暂定工作基线是用户指定比较对象，不代表收益优越或人工研究接受；入场筛选后信号统计单列，不冒充完整F2信号统计；实际fill后固定2秒响应未恢复时明确缺口，不新增策略条件；LS_H5实际方向贡献，不能当作独立方向策略或与LS总账重复相加。；期末状态 flat；未知库存 0；原45日AU空头亏损、多空低于多头及利润集中事实保留于原报告。；技术自查通过；独立技术审查pending，人工研究复核pending。；82 verified expected dates, 45 original +37 extension; exploratory viewed data; unknown inventory separately disclosed

- PnL_path：missing_facts；no equity or account-value source is projected
- cancel_attribution：missing_facts；cancel attribution facts unavailable
- fill_markout：missing_facts；registered fill markout/entry-edge fact is unavailable
- maker_fill：missing_facts；maker order/fill facts unavailable
- signal_bins：missing_facts；no registered source training-bin column

## AG LS_H5内实际多头贡献（说明修订v2）

评价：exp_20261021_ag_au_h5_extension_20260831_v1/R3_H5_both_AG__actual_long/full82_v2；来源运行：run-27b913988332403fa8565619a651fafd。

实际日期：20260507, 20260508, 20260511, 20260512, 20260513, 20260514, 20260515, 20260518, 20260519, 20260520, 20260521, 20260522, 20260525, 20260526, 20260527, 20260528, 20260529, 20260601, 20260602, 20260603, 20260604, 20260605, 20260608, 20260609, 20260610, 20260611, 20260612, 20260615, 20260616, 20260617, 20260618, 20260622, 20260623, 20260624, 20260625, 20260626, 20260629, 20260630, 20260701, 20260702, 20260703, 20260706, 20260707, 20260708, 20260709, 20260710, 20260713, 20260714, 20260715, 20260716, 20260717, 20260720, 20260721, 20260722, 20260723, 20260724, 20260727, 20260728, 20260729, 20260730, 20260731, 20260803, 20260804, 20260805, 20260806, 20260807, 20260810, 20260811, 20260812, 20260813, 20260814, 20260817, 20260818, 20260819, 20260820, 20260821, 20260824, 20260825, 20260826, 20260827, 20260828, 20260831

| 原生指标 | 值 | 单位 | 分母 | 汇总 | 状态 |
| --- | --- | --- | --- | --- | --- |
| full82_net_cash | 1.1319796000001627 | unit_cash | 82 verified dates, flat terminal path only | sum | known |
| full82_mean_net_bps | 0.08299320409255558 | bp/trade | completed unit round trips | mean | known |
| completed_trades | 1934 | trades | 82 verified expected dates | count | known |
| terminal_unknown_inventory | 0 | positions | parent path terminal inventory | count | known |
| cross_date_trades | 0 | trades | completed unit round trips | count | known |
| holding_occupancy_seconds | 287474.68 | s | sum of completed inventory holding times | sum | known |
| remove_best_day_cash | 0.03247740000016908 | unit_cash | 82-day completed subset less best exit day | sum | known |
| remove_best_trade_cash | -0.04007279999982982 | unit_cash | completed subset less best trade | sum | known |

限制：原45日已查看；新增37日已在F2扩展研究中查看，不是独立holdout；差距诊断仅覆盖原45日；现金按退出日归因；成交现金流另列，均不是账户MTM；未作多重比较校正；区间跨零不等于等效；固定费用和proxy时钟，不包含资金费和真实执行容量验证；暂定工作基线是用户指定比较对象，不代表收益优越或人工研究接受；入场筛选后信号统计单列，不冒充完整F2信号统计；实际fill后固定2秒响应未恢复时明确缺口，不新增策略条件；LS_H5实际方向贡献，不能当作独立方向策略或与LS总账重复相加。；期末状态 flat；未知库存 0；原45日AU空头亏损、多空低于多头及利润集中事实保留于原报告。；技术自查通过；独立技术审查pending，人工研究复核pending。；本版仅修正已查看样本的来源说明；原v1保留档案，所有策略与数值指标相同。；82 verified expected dates, 45 original +37 extension; exploratory viewed data; unknown inventory separately disclosed

- PnL_path：missing_facts；no equity or account-value source is projected
- cancel_attribution：missing_facts；cancel attribution facts unavailable
- fill_markout：missing_facts；registered fill markout/entry-edge fact is unavailable
- maker_fill：missing_facts；maker order/fill facts unavailable
- signal_bins：missing_facts；no registered source training-bin column

## AG LS_H5内实际空头贡献（档案v1，样本说明已更正）

评价：exp_20261021_ag_au_h5_extension_20260831_v1/R3_H5_both_AG__actual_short/full82_v1；来源运行：run-27b913988332403fa8565619a651fafd。

实际日期：20260507, 20260508, 20260511, 20260512, 20260513, 20260514, 20260515, 20260518, 20260519, 20260520, 20260521, 20260522, 20260525, 20260526, 20260527, 20260528, 20260529, 20260601, 20260602, 20260603, 20260604, 20260605, 20260608, 20260609, 20260610, 20260611, 20260612, 20260615, 20260616, 20260617, 20260618, 20260622, 20260623, 20260624, 20260625, 20260626, 20260629, 20260630, 20260701, 20260702, 20260703, 20260706, 20260707, 20260708, 20260709, 20260710, 20260713, 20260714, 20260715, 20260716, 20260717, 20260720, 20260721, 20260722, 20260723, 20260724, 20260727, 20260728, 20260729, 20260730, 20260731, 20260803, 20260804, 20260805, 20260806, 20260807, 20260810, 20260811, 20260812, 20260813, 20260814, 20260817, 20260818, 20260819, 20260820, 20260821, 20260824, 20260825, 20260826, 20260827, 20260828, 20260831

| 原生指标 | 值 | 单位 | 分母 | 汇总 | 状态 |
| --- | --- | --- | --- | --- | --- |
| full82_net_cash | 2.623512600000064 | unit_cash | 82 verified dates, flat terminal path only | sum | known |
| full82_mean_net_bps | 0.16560742965802372 | bp/trade | completed unit round trips | mean | known |
| completed_trades | 1984 | trades | 82 verified expected dates | count | known |
| terminal_unknown_inventory | 0 | positions | parent path terminal inventory | count | known |
| cross_date_trades | 1 | trades | completed unit round trips | count | known |
| holding_occupancy_seconds | 65673.48300000001 | s | sum of completed inventory holding times | sum | known |
| remove_best_day_cash | 1.881851000000093 | unit_cash | 82-day completed subset less best exit day | sum | known |
| remove_best_trade_cash | 1.9304954000000683 | unit_cash | completed subset less best trade | sum | known |

限制：原45日已查看；新增37日已在F2扩展研究中查看，不是独立holdout；差距诊断仅覆盖原45日；现金按退出日归因；成交现金流另列，均不是账户MTM；未作多重比较校正；区间跨零不等于等效；固定费用和proxy时钟，不包含资金费和真实执行容量验证；暂定工作基线是用户指定比较对象，不代表收益优越或人工研究接受；入场筛选后信号统计单列，不冒充完整F2信号统计；实际fill后固定2秒响应未恢复时明确缺口，不新增策略条件；LS_H5实际方向贡献，不能当作独立方向策略或与LS总账重复相加。；期末状态 flat；未知库存 0；原45日AU空头亏损、多空低于多头及利润集中事实保留于原报告。；技术自查通过；独立技术审查pending，人工研究复核pending。；82 verified expected dates, 45 original +37 extension; exploratory viewed data; unknown inventory separately disclosed

- PnL_path：missing_facts；no equity or account-value source is projected
- cancel_attribution：missing_facts；cancel attribution facts unavailable
- fill_markout：missing_facts；registered fill markout/entry-edge fact is unavailable
- maker_fill：missing_facts；maker order/fill facts unavailable
- signal_bins：missing_facts；no registered source training-bin column

## AG LS_H5内实际空头贡献（说明修订v2）

评价：exp_20261021_ag_au_h5_extension_20260831_v1/R3_H5_both_AG__actual_short/full82_v2；来源运行：run-27b913988332403fa8565619a651fafd。

实际日期：20260507, 20260508, 20260511, 20260512, 20260513, 20260514, 20260515, 20260518, 20260519, 20260520, 20260521, 20260522, 20260525, 20260526, 20260527, 20260528, 20260529, 20260601, 20260602, 20260603, 20260604, 20260605, 20260608, 20260609, 20260610, 20260611, 20260612, 20260615, 20260616, 20260617, 20260618, 20260622, 20260623, 20260624, 20260625, 20260626, 20260629, 20260630, 20260701, 20260702, 20260703, 20260706, 20260707, 20260708, 20260709, 20260710, 20260713, 20260714, 20260715, 20260716, 20260717, 20260720, 20260721, 20260722, 20260723, 20260724, 20260727, 20260728, 20260729, 20260730, 20260731, 20260803, 20260804, 20260805, 20260806, 20260807, 20260810, 20260811, 20260812, 20260813, 20260814, 20260817, 20260818, 20260819, 20260820, 20260821, 20260824, 20260825, 20260826, 20260827, 20260828, 20260831

| 原生指标 | 值 | 单位 | 分母 | 汇总 | 状态 |
| --- | --- | --- | --- | --- | --- |
| full82_net_cash | 2.623512600000064 | unit_cash | 82 verified dates, flat terminal path only | sum | known |
| full82_mean_net_bps | 0.16560742965802372 | bp/trade | completed unit round trips | mean | known |
| completed_trades | 1984 | trades | 82 verified expected dates | count | known |
| terminal_unknown_inventory | 0 | positions | parent path terminal inventory | count | known |
| cross_date_trades | 1 | trades | completed unit round trips | count | known |
| holding_occupancy_seconds | 65673.48300000001 | s | sum of completed inventory holding times | sum | known |
| remove_best_day_cash | 1.881851000000093 | unit_cash | 82-day completed subset less best exit day | sum | known |
| remove_best_trade_cash | 1.9304954000000683 | unit_cash | completed subset less best trade | sum | known |

限制：原45日已查看；新增37日已在F2扩展研究中查看，不是独立holdout；差距诊断仅覆盖原45日；现金按退出日归因；成交现金流另列，均不是账户MTM；未作多重比较校正；区间跨零不等于等效；固定费用和proxy时钟，不包含资金费和真实执行容量验证；暂定工作基线是用户指定比较对象，不代表收益优越或人工研究接受；入场筛选后信号统计单列，不冒充完整F2信号统计；实际fill后固定2秒响应未恢复时明确缺口，不新增策略条件；LS_H5实际方向贡献，不能当作独立方向策略或与LS总账重复相加。；期末状态 flat；未知库存 0；原45日AU空头亏损、多空低于多头及利润集中事实保留于原报告。；技术自查通过；独立技术审查pending，人工研究复核pending。；本版仅修正已查看样本的来源说明；原v1保留档案，所有策略与数值指标相同。；82 verified expected dates, 45 original +37 extension; exploratory viewed data; unknown inventory separately disclosed

- PnL_path：missing_facts；no equity or account-value source is projected
- cancel_attribution：missing_facts；cancel attribution facts unavailable
- fill_markout：missing_facts；registered fill markout/entry-edge fact is unavailable
- maker_fill：missing_facts；maker order/fill facts unavailable
- signal_bins：missing_facts；no registered source training-bin column

## AU H5多空暂定工作基线（档案v1，样本说明已更正）

评价：exp_20261021_ag_au_h5_extension_20260831_v1/R3_H5_both_AU/full82_v1；来源运行：run-27b913988332403fa8565619a651fafd。

实际日期：20260507, 20260508, 20260511, 20260512, 20260513, 20260514, 20260515, 20260518, 20260519, 20260520, 20260521, 20260522, 20260525, 20260526, 20260527, 20260528, 20260529, 20260601, 20260602, 20260603, 20260604, 20260605, 20260608, 20260609, 20260610, 20260611, 20260612, 20260615, 20260616, 20260617, 20260618, 20260622, 20260623, 20260624, 20260625, 20260626, 20260629, 20260630, 20260701, 20260702, 20260703, 20260706, 20260707, 20260708, 20260709, 20260710, 20260713, 20260714, 20260715, 20260716, 20260717, 20260720, 20260721, 20260722, 20260723, 20260724, 20260727, 20260728, 20260729, 20260730, 20260731, 20260803, 20260804, 20260805, 20260806, 20260807, 20260810, 20260811, 20260812, 20260813, 20260814, 20260817, 20260818, 20260819, 20260820, 20260821, 20260824, 20260825, 20260826, 20260827, 20260828, 20260831

| 原生指标 | 值 | 单位 | 分母 | 汇总 | 状态 |
| --- | --- | --- | --- | --- | --- |
| full82_net_cash | 112.75441239999147 | unit_cash | 82 verified dates, flat terminal path only | sum | known |
| full82_mean_net_bps | 0.10812174659124299 | bp/trade | completed unit round trips | mean | known |
| completed_trades | 2662 | trades | 82 verified expected dates | count | known |
| terminal_unknown_inventory | 0 | positions | parent path terminal inventory | count | known |
| original45_completed_subset_cash | 7.9621419999950955 | unit_cash | completed exits in original45 | sum | known |
| original45_mean_net_bps | 0.021195348290140553 | bp/trade | completed exits in original45 | mean | known |
| original45_completed_trades | 1434 | trades | completed exits in original45 | count | known |
| original45_fill_cashflow | 7.96214199990618 | unit_cash | actual fills during original45; cashflow with inventory, not MTM or completed profit | sum | known |
| original45_daily_cash_ci_low | -2.3796415258885943 | unit_cash/day | 5-day blocks 2000 seed20261013 | bootstrap_2.5pct | known |
| original45_daily_cash_ci_high | 2.8243759163330675 | unit_cash/day | 5-day blocks 2000 seed20261013 | bootstrap_97.5pct | known |
| extension37_completed_subset_cash | 104.7922703999964 | unit_cash | completed exits in extension37 | sum | known |
| extension37_mean_net_bps | 0.20963026056826325 | bp/trade | completed exits in extension37 | mean | known |
| extension37_completed_trades | 1228 | trades | completed exits in extension37 | count | known |
| extension37_fill_cashflow | 104.7922703999593 | unit_cash | actual fills during extension37; cashflow with inventory, not MTM or completed profit | sum | known |
| extension37_daily_cash_ci_low | -2.0465635839192413 | unit_cash/day | 5-day blocks 2000 seed20261013 | bootstrap_2.5pct | known |
| extension37_daily_cash_ci_high | 6.770544926892064 | unit_cash/day | 5-day blocks 2000 seed20261013 | bootstrap_97.5pct | known |
| full82_completed_subset_cash | 112.75441239999147 | unit_cash | completed exits in full82 | sum | known |
| full82_mean_net_bps | 0.10812174659124299 | bp/trade | completed exits in full82 | mean | known |
| full82_completed_trades | 2662 | trades | completed exits in full82 | count | known |
| full82_fill_cashflow | 112.75441239987185 | unit_cash | actual fills during full82; cashflow with inventory, not MTM or completed profit | sum | known |
| full82_daily_cash_ci_low | -1.204041200731824 | unit_cash/day | 5-day blocks 2000 seed20261013 | bootstrap_2.5pct | known |
| full82_daily_cash_ci_high | 3.7757692679876786 | unit_cash/day | 5-day blocks 2000 seed20261013 | bootstrap_97.5pct | known |
| development38_completed_subset_cash | 9.167177399995875 | unit_cash | completed exits in development38 | sum | known |
| development38_mean_net_bps | 0.02577901448344691 | bp/trade | completed exits in development38 | mean | known |
| development38_completed_trades | 1232 | trades | completed exits in development38 | count | known |
| development38_fill_cashflow | 9.16717739993328 | unit_cash | actual fills during development38; cashflow with inventory, not MTM or completed profit | sum | known |
| development38_daily_cash_ci_low | -2.6236608997366195 | unit_cash/day | 5-day blocks 2000 seed20261013 | bootstrap_2.5pct | known |
| development38_daily_cash_ci_high | 3.0965470615781787 | unit_cash/day | 5-day blocks 2000 seed20261013 | bootstrap_97.5pct | known |
| viewedJuly7_completed_subset_cash | -1.2050354000007886 | unit_cash | completed exits in viewedJuly7 | sum | known |
| viewedJuly7_mean_net_bps | -0.006760477205668653 | bp/trade | completed exits in viewedJuly7 | mean | known |
| viewedJuly7_completed_trades | 202 | trades | completed exits in viewedJuly7 | count | known |
| viewedJuly7_fill_cashflow | -1.2050354000111838 | unit_cash | actual fills during viewedJuly7; cashflow with inventory, not MTM or completed profit | sum | known |
| viewedJuly7_daily_cash_ci_low | -2.9468583142855684 | unit_cash/day | 5-day blocks 2000 seed20261013 | bootstrap_2.5pct | known |
| viewedJuly7_daily_cash_ci_high | 2.25486908571348 | unit_cash/day | 5-day blocks 2000 seed20261013 | bootstrap_97.5pct | known |
| July_extension_completed_subset_cash | 123.03983700000425 | unit_cash | completed exits in July_extension | sum | known |
| July_extension_mean_net_bps | 0.7204020218726477 | bp/trade | completed exits in July_extension | mean | known |
| July_extension_completed_trades | 420 | trades | completed exits in July_extension | count | known |
| July_extension_fill_cashflow | 123.0398369999898 | unit_cash | actual fills during July_extension; cashflow with inventory, not MTM or completed profit | sum | known |
| July_extension_daily_cash_ci_low | 3.280345762812489 | unit_cash/day | 5-day blocks 2000 seed20261013 | bootstrap_2.5pct | known |
| July_extension_daily_cash_ci_high | 13.958147977812589 | unit_cash/day | 5-day blocks 2000 seed20261013 | bootstrap_97.5pct | known |
| August_completed_subset_cash | -18.247566600007865 | unit_cash | completed exits in August | sum | known |
| August_mean_net_bps | -0.055869912386986034 | bp/trade | completed exits in August | mean | known |
| August_completed_trades | 808 | trades | completed exits in August | count | known |
| August_fill_cashflow | -18.247566600043683 | unit_cash | actual fills during August; cashflow with inventory, not MTM or completed profit | sum | known |
| August_daily_cash_ci_low | -5.438341536667559 | unit_cash/day | 5-day blocks 2000 seed20261013 | bootstrap_2.5pct | known |
| August_daily_cash_ci_high | 1.27778602476189 | unit_cash/day | 5-day blocks 2000 seed20261013 | bootstrap_97.5pct | known |
| cross_date_trades | 2 | trades | completed unit round trips | count | known |
| holding_occupancy_seconds | 120623.00099999999 | s | sum of completed inventory holding times | sum | known |
| remove_best_day_cash | 79.24211939999199 | unit_cash | 82-day completed subset less best exit day | sum | known |
| remove_best_trade_cash | 82.80209599999141 | unit_cash | completed subset less best trade | sum | known |

限制：原45日已查看；新增37日已在F2扩展研究中查看，不是独立holdout；差距诊断仅覆盖原45日；现金按退出日归因；成交现金流另列，均不是账户MTM；未作多重比较校正；区间跨零不等于等效；固定费用和proxy时钟，不包含资金费和真实执行容量验证；暂定工作基线是用户指定比较对象，不代表收益优越或人工研究接受；入场筛选后信号统计单列，不冒充完整F2信号统计；实际fill后固定2秒响应未恢复时明确缺口，不新增策略条件；用户指定暂定工作基线，2026-10-20 Prompt，本轮2026-10-21执行；current_reference与人工复核未升级。；期末状态 flat；未知库存 0；原45日AU空头亏损、多空低于多头及利润集中事实保留于原报告。；技术自查通过；独立技术审查pending，人工研究复核pending。；82 verified expected dates, 45 original +37 extension; exploratory viewed data; unknown inventory separately disclosed

- PnL_path：missing_facts；no equity or account-value source is projected
- cancel_attribution：missing_facts；cancel attribution facts unavailable
- fill_markout：missing_facts；registered fill markout/entry-edge fact is unavailable
- maker_fill：missing_facts；maker order/fill facts unavailable
- signal_bins：missing_facts；no registered source training-bin column

## AU H5多空暂定工作基线（说明修订v2）

评价：exp_20261021_ag_au_h5_extension_20260831_v1/R3_H5_both_AU/full82_v2；来源运行：run-27b913988332403fa8565619a651fafd。

实际日期：20260507, 20260508, 20260511, 20260512, 20260513, 20260514, 20260515, 20260518, 20260519, 20260520, 20260521, 20260522, 20260525, 20260526, 20260527, 20260528, 20260529, 20260601, 20260602, 20260603, 20260604, 20260605, 20260608, 20260609, 20260610, 20260611, 20260612, 20260615, 20260616, 20260617, 20260618, 20260622, 20260623, 20260624, 20260625, 20260626, 20260629, 20260630, 20260701, 20260702, 20260703, 20260706, 20260707, 20260708, 20260709, 20260710, 20260713, 20260714, 20260715, 20260716, 20260717, 20260720, 20260721, 20260722, 20260723, 20260724, 20260727, 20260728, 20260729, 20260730, 20260731, 20260803, 20260804, 20260805, 20260806, 20260807, 20260810, 20260811, 20260812, 20260813, 20260814, 20260817, 20260818, 20260819, 20260820, 20260821, 20260824, 20260825, 20260826, 20260827, 20260828, 20260831

| 原生指标 | 值 | 单位 | 分母 | 汇总 | 状态 |
| --- | --- | --- | --- | --- | --- |
| full82_net_cash | 112.75441239999147 | unit_cash | 82 verified dates, flat terminal path only | sum | known |
| full82_mean_net_bps | 0.10812174659124299 | bp/trade | completed unit round trips | mean | known |
| completed_trades | 2662 | trades | 82 verified expected dates | count | known |
| terminal_unknown_inventory | 0 | positions | parent path terminal inventory | count | known |
| original45_completed_subset_cash | 7.9621419999950955 | unit_cash | completed exits in original45 | sum | known |
| original45_mean_net_bps | 0.021195348290140553 | bp/trade | completed exits in original45 | mean | known |
| original45_completed_trades | 1434 | trades | completed exits in original45 | count | known |
| original45_fill_cashflow | 7.96214199990618 | unit_cash | actual fills during original45; cashflow with inventory, not MTM or completed profit | sum | known |
| original45_daily_cash_ci_low | -2.3796415258885943 | unit_cash/day | 5-day blocks 2000 seed20261013 | bootstrap_2.5pct | known |
| original45_daily_cash_ci_high | 2.8243759163330675 | unit_cash/day | 5-day blocks 2000 seed20261013 | bootstrap_97.5pct | known |
| extension37_completed_subset_cash | 104.7922703999964 | unit_cash | completed exits in extension37 | sum | known |
| extension37_mean_net_bps | 0.20963026056826325 | bp/trade | completed exits in extension37 | mean | known |
| extension37_completed_trades | 1228 | trades | completed exits in extension37 | count | known |
| extension37_fill_cashflow | 104.7922703999593 | unit_cash | actual fills during extension37; cashflow with inventory, not MTM or completed profit | sum | known |
| extension37_daily_cash_ci_low | -2.0465635839192413 | unit_cash/day | 5-day blocks 2000 seed20261013 | bootstrap_2.5pct | known |
| extension37_daily_cash_ci_high | 6.770544926892064 | unit_cash/day | 5-day blocks 2000 seed20261013 | bootstrap_97.5pct | known |
| full82_completed_subset_cash | 112.75441239999147 | unit_cash | completed exits in full82 | sum | known |
| full82_mean_net_bps | 0.10812174659124299 | bp/trade | completed exits in full82 | mean | known |
| full82_completed_trades | 2662 | trades | completed exits in full82 | count | known |
| full82_fill_cashflow | 112.75441239987185 | unit_cash | actual fills during full82; cashflow with inventory, not MTM or completed profit | sum | known |
| full82_daily_cash_ci_low | -1.204041200731824 | unit_cash/day | 5-day blocks 2000 seed20261013 | bootstrap_2.5pct | known |
| full82_daily_cash_ci_high | 3.7757692679876786 | unit_cash/day | 5-day blocks 2000 seed20261013 | bootstrap_97.5pct | known |
| development38_completed_subset_cash | 9.167177399995875 | unit_cash | completed exits in development38 | sum | known |
| development38_mean_net_bps | 0.02577901448344691 | bp/trade | completed exits in development38 | mean | known |
| development38_completed_trades | 1232 | trades | completed exits in development38 | count | known |
| development38_fill_cashflow | 9.16717739993328 | unit_cash | actual fills during development38; cashflow with inventory, not MTM or completed profit | sum | known |
| development38_daily_cash_ci_low | -2.6236608997366195 | unit_cash/day | 5-day blocks 2000 seed20261013 | bootstrap_2.5pct | known |
| development38_daily_cash_ci_high | 3.0965470615781787 | unit_cash/day | 5-day blocks 2000 seed20261013 | bootstrap_97.5pct | known |
| viewedJuly7_completed_subset_cash | -1.2050354000007886 | unit_cash | completed exits in viewedJuly7 | sum | known |
| viewedJuly7_mean_net_bps | -0.006760477205668653 | bp/trade | completed exits in viewedJuly7 | mean | known |
| viewedJuly7_completed_trades | 202 | trades | completed exits in viewedJuly7 | count | known |
| viewedJuly7_fill_cashflow | -1.2050354000111838 | unit_cash | actual fills during viewedJuly7; cashflow with inventory, not MTM or completed profit | sum | known |
| viewedJuly7_daily_cash_ci_low | -2.9468583142855684 | unit_cash/day | 5-day blocks 2000 seed20261013 | bootstrap_2.5pct | known |
| viewedJuly7_daily_cash_ci_high | 2.25486908571348 | unit_cash/day | 5-day blocks 2000 seed20261013 | bootstrap_97.5pct | known |
| July_extension_completed_subset_cash | 123.03983700000425 | unit_cash | completed exits in July_extension | sum | known |
| July_extension_mean_net_bps | 0.7204020218726477 | bp/trade | completed exits in July_extension | mean | known |
| July_extension_completed_trades | 420 | trades | completed exits in July_extension | count | known |
| July_extension_fill_cashflow | 123.0398369999898 | unit_cash | actual fills during July_extension; cashflow with inventory, not MTM or completed profit | sum | known |
| July_extension_daily_cash_ci_low | 3.280345762812489 | unit_cash/day | 5-day blocks 2000 seed20261013 | bootstrap_2.5pct | known |
| July_extension_daily_cash_ci_high | 13.958147977812589 | unit_cash/day | 5-day blocks 2000 seed20261013 | bootstrap_97.5pct | known |
| August_completed_subset_cash | -18.247566600007865 | unit_cash | completed exits in August | sum | known |
| August_mean_net_bps | -0.055869912386986034 | bp/trade | completed exits in August | mean | known |
| August_completed_trades | 808 | trades | completed exits in August | count | known |
| August_fill_cashflow | -18.247566600043683 | unit_cash | actual fills during August; cashflow with inventory, not MTM or completed profit | sum | known |
| August_daily_cash_ci_low | -5.438341536667559 | unit_cash/day | 5-day blocks 2000 seed20261013 | bootstrap_2.5pct | known |
| August_daily_cash_ci_high | 1.27778602476189 | unit_cash/day | 5-day blocks 2000 seed20261013 | bootstrap_97.5pct | known |
| cross_date_trades | 2 | trades | completed unit round trips | count | known |
| holding_occupancy_seconds | 120623.00099999999 | s | sum of completed inventory holding times | sum | known |
| remove_best_day_cash | 79.24211939999199 | unit_cash | 82-day completed subset less best exit day | sum | known |
| remove_best_trade_cash | 82.80209599999141 | unit_cash | completed subset less best trade | sum | known |

限制：原45日已查看；新增37日已在F2扩展研究中查看，不是独立holdout；差距诊断仅覆盖原45日；现金按退出日归因；成交现金流另列，均不是账户MTM；未作多重比较校正；区间跨零不等于等效；固定费用和proxy时钟，不包含资金费和真实执行容量验证；暂定工作基线是用户指定比较对象，不代表收益优越或人工研究接受；入场筛选后信号统计单列，不冒充完整F2信号统计；实际fill后固定2秒响应未恢复时明确缺口，不新增策略条件；用户指定暂定工作基线，2026-10-20 Prompt，本轮2026-10-21执行；current_reference与人工复核未升级。；期末状态 flat；未知库存 0；原45日AU空头亏损、多空低于多头及利润集中事实保留于原报告。；技术自查通过；独立技术审查pending，人工研究复核pending。；本版仅修正已查看样本的来源说明；原v1保留档案，所有策略与数值指标相同。；82 verified expected dates, 45 original +37 extension; exploratory viewed data; unknown inventory separately disclosed

- PnL_path：missing_facts；no equity or account-value source is projected
- cancel_attribution：missing_facts；cancel attribution facts unavailable
- fill_markout：missing_facts；registered fill markout/entry-edge fact is unavailable
- maker_fill：missing_facts；maker order/fill facts unavailable
- signal_bins：missing_facts；no registered source training-bin column

## AU LS_H5内实际多头贡献（档案v1，样本说明已更正）

评价：exp_20261021_ag_au_h5_extension_20260831_v1/R3_H5_both_AU__actual_long/full82_v1；来源运行：run-27b913988332403fa8565619a651fafd。

实际日期：20260507, 20260508, 20260511, 20260512, 20260513, 20260514, 20260515, 20260518, 20260519, 20260520, 20260521, 20260522, 20260525, 20260526, 20260527, 20260528, 20260529, 20260601, 20260602, 20260603, 20260604, 20260605, 20260608, 20260609, 20260610, 20260611, 20260612, 20260615, 20260616, 20260617, 20260618, 20260622, 20260623, 20260624, 20260625, 20260626, 20260629, 20260630, 20260701, 20260702, 20260703, 20260706, 20260707, 20260708, 20260709, 20260710, 20260713, 20260714, 20260715, 20260716, 20260717, 20260720, 20260721, 20260722, 20260723, 20260724, 20260727, 20260728, 20260729, 20260730, 20260731, 20260803, 20260804, 20260805, 20260806, 20260807, 20260810, 20260811, 20260812, 20260813, 20260814, 20260817, 20260818, 20260819, 20260820, 20260821, 20260824, 20260825, 20260826, 20260827, 20260828, 20260831

| 原生指标 | 值 | 单位 | 分母 | 汇总 | 状态 |
| --- | --- | --- | --- | --- | --- |
| full82_net_cash | 44.27774599998853 | unit_cash | 82 verified dates, flat terminal path only | sum | known |
| full82_mean_net_bps | 0.08097312236849011 | bp/trade | completed unit round trips | mean | known |
| completed_trades | 1381 | trades | 82 verified expected dates | count | known |
| terminal_unknown_inventory | 0 | positions | parent path terminal inventory | count | known |
| cross_date_trades | 1 | trades | completed unit round trips | count | known |
| holding_occupancy_seconds | 42666.753 | s | sum of completed inventory holding times | sum | known |
| remove_best_day_cash | 16.303223799988796 | unit_cash | 82-day completed subset less best exit day | sum | known |
| remove_best_trade_cash | 15.165883799988425 | unit_cash | completed subset less best trade | sum | known |

限制：原45日已查看；新增37日已在F2扩展研究中查看，不是独立holdout；差距诊断仅覆盖原45日；现金按退出日归因；成交现金流另列，均不是账户MTM；未作多重比较校正；区间跨零不等于等效；固定费用和proxy时钟，不包含资金费和真实执行容量验证；暂定工作基线是用户指定比较对象，不代表收益优越或人工研究接受；入场筛选后信号统计单列，不冒充完整F2信号统计；实际fill后固定2秒响应未恢复时明确缺口，不新增策略条件；LS_H5实际方向贡献，不能当作独立方向策略或与LS总账重复相加。；期末状态 flat；未知库存 0；原45日AU空头亏损、多空低于多头及利润集中事实保留于原报告。；技术自查通过；独立技术审查pending，人工研究复核pending。；82 verified expected dates, 45 original +37 extension; exploratory viewed data; unknown inventory separately disclosed

- PnL_path：missing_facts；no equity or account-value source is projected
- cancel_attribution：missing_facts；cancel attribution facts unavailable
- fill_markout：missing_facts；registered fill markout/entry-edge fact is unavailable
- maker_fill：missing_facts；maker order/fill facts unavailable
- signal_bins：missing_facts；no registered source training-bin column

## AU LS_H5内实际多头贡献（说明修订v2）

评价：exp_20261021_ag_au_h5_extension_20260831_v1/R3_H5_both_AU__actual_long/full82_v2；来源运行：run-27b913988332403fa8565619a651fafd。

实际日期：20260507, 20260508, 20260511, 20260512, 20260513, 20260514, 20260515, 20260518, 20260519, 20260520, 20260521, 20260522, 20260525, 20260526, 20260527, 20260528, 20260529, 20260601, 20260602, 20260603, 20260604, 20260605, 20260608, 20260609, 20260610, 20260611, 20260612, 20260615, 20260616, 20260617, 20260618, 20260622, 20260623, 20260624, 20260625, 20260626, 20260629, 20260630, 20260701, 20260702, 20260703, 20260706, 20260707, 20260708, 20260709, 20260710, 20260713, 20260714, 20260715, 20260716, 20260717, 20260720, 20260721, 20260722, 20260723, 20260724, 20260727, 20260728, 20260729, 20260730, 20260731, 20260803, 20260804, 20260805, 20260806, 20260807, 20260810, 20260811, 20260812, 20260813, 20260814, 20260817, 20260818, 20260819, 20260820, 20260821, 20260824, 20260825, 20260826, 20260827, 20260828, 20260831

| 原生指标 | 值 | 单位 | 分母 | 汇总 | 状态 |
| --- | --- | --- | --- | --- | --- |
| full82_net_cash | 44.27774599998853 | unit_cash | 82 verified dates, flat terminal path only | sum | known |
| full82_mean_net_bps | 0.08097312236849011 | bp/trade | completed unit round trips | mean | known |
| completed_trades | 1381 | trades | 82 verified expected dates | count | known |
| terminal_unknown_inventory | 0 | positions | parent path terminal inventory | count | known |
| cross_date_trades | 1 | trades | completed unit round trips | count | known |
| holding_occupancy_seconds | 42666.753 | s | sum of completed inventory holding times | sum | known |
| remove_best_day_cash | 16.303223799988796 | unit_cash | 82-day completed subset less best exit day | sum | known |
| remove_best_trade_cash | 15.165883799988425 | unit_cash | completed subset less best trade | sum | known |

限制：原45日已查看；新增37日已在F2扩展研究中查看，不是独立holdout；差距诊断仅覆盖原45日；现金按退出日归因；成交现金流另列，均不是账户MTM；未作多重比较校正；区间跨零不等于等效；固定费用和proxy时钟，不包含资金费和真实执行容量验证；暂定工作基线是用户指定比较对象，不代表收益优越或人工研究接受；入场筛选后信号统计单列，不冒充完整F2信号统计；实际fill后固定2秒响应未恢复时明确缺口，不新增策略条件；LS_H5实际方向贡献，不能当作独立方向策略或与LS总账重复相加。；期末状态 flat；未知库存 0；原45日AU空头亏损、多空低于多头及利润集中事实保留于原报告。；技术自查通过；独立技术审查pending，人工研究复核pending。；本版仅修正已查看样本的来源说明；原v1保留档案，所有策略与数值指标相同。；82 verified expected dates, 45 original +37 extension; exploratory viewed data; unknown inventory separately disclosed

- PnL_path：missing_facts；no equity or account-value source is projected
- cancel_attribution：missing_facts；cancel attribution facts unavailable
- fill_markout：missing_facts；registered fill markout/entry-edge fact is unavailable
- maker_fill：missing_facts；maker order/fill facts unavailable
- signal_bins：missing_facts；no registered source training-bin column

## AU LS_H5内实际空头贡献（档案v1，样本说明已更正）

评价：exp_20261021_ag_au_h5_extension_20260831_v1/R3_H5_both_AU__actual_short/full82_v1；来源运行：run-27b913988332403fa8565619a651fafd。

实际日期：20260507, 20260508, 20260511, 20260512, 20260513, 20260514, 20260515, 20260518, 20260519, 20260520, 20260521, 20260522, 20260525, 20260526, 20260527, 20260528, 20260529, 20260601, 20260602, 20260603, 20260604, 20260605, 20260608, 20260609, 20260610, 20260611, 20260612, 20260615, 20260616, 20260617, 20260618, 20260622, 20260623, 20260624, 20260625, 20260626, 20260629, 20260630, 20260701, 20260702, 20260703, 20260706, 20260707, 20260708, 20260709, 20260710, 20260713, 20260714, 20260715, 20260716, 20260717, 20260720, 20260721, 20260722, 20260723, 20260724, 20260727, 20260728, 20260729, 20260730, 20260731, 20260803, 20260804, 20260805, 20260806, 20260807, 20260810, 20260811, 20260812, 20260813, 20260814, 20260817, 20260818, 20260819, 20260820, 20260821, 20260824, 20260825, 20260826, 20260827, 20260828, 20260831

| 原生指标 | 值 | 单位 | 分母 | 汇总 | 状态 |
| --- | --- | --- | --- | --- | --- |
| full82_net_cash | 68.47666640000296 | unit_cash | 82 verified dates, flat terminal path only | sum | known |
| full82_mean_net_bps | 0.1373897013544137 | bp/trade | completed unit round trips | mean | known |
| completed_trades | 1281 | trades | 82 verified expected dates | count | known |
| terminal_unknown_inventory | 0 | positions | parent path terminal inventory | count | known |
| cross_date_trades | 1 | trades | completed unit round trips | count | known |
| holding_occupancy_seconds | 77956.24799999999 | s | sum of completed inventory holding times | sum | known |
| remove_best_day_cash | 38.376873800002706 | unit_cash | 82-day completed subset less best exit day | sum | known |
| remove_best_trade_cash | 38.5243500000029 | unit_cash | completed subset less best trade | sum | known |

限制：原45日已查看；新增37日已在F2扩展研究中查看，不是独立holdout；差距诊断仅覆盖原45日；现金按退出日归因；成交现金流另列，均不是账户MTM；未作多重比较校正；区间跨零不等于等效；固定费用和proxy时钟，不包含资金费和真实执行容量验证；暂定工作基线是用户指定比较对象，不代表收益优越或人工研究接受；入场筛选后信号统计单列，不冒充完整F2信号统计；实际fill后固定2秒响应未恢复时明确缺口，不新增策略条件；LS_H5实际方向贡献，不能当作独立方向策略或与LS总账重复相加。；期末状态 flat；未知库存 0；原45日AU空头亏损、多空低于多头及利润集中事实保留于原报告。；技术自查通过；独立技术审查pending，人工研究复核pending。；82 verified expected dates, 45 original +37 extension; exploratory viewed data; unknown inventory separately disclosed

- PnL_path：missing_facts；no equity or account-value source is projected
- cancel_attribution：missing_facts；cancel attribution facts unavailable
- fill_markout：missing_facts；registered fill markout/entry-edge fact is unavailable
- maker_fill：missing_facts；maker order/fill facts unavailable
- signal_bins：missing_facts；no registered source training-bin column

## AU LS_H5内实际空头贡献（说明修订v2）

评价：exp_20261021_ag_au_h5_extension_20260831_v1/R3_H5_both_AU__actual_short/full82_v2；来源运行：run-27b913988332403fa8565619a651fafd。

实际日期：20260507, 20260508, 20260511, 20260512, 20260513, 20260514, 20260515, 20260518, 20260519, 20260520, 20260521, 20260522, 20260525, 20260526, 20260527, 20260528, 20260529, 20260601, 20260602, 20260603, 20260604, 20260605, 20260608, 20260609, 20260610, 20260611, 20260612, 20260615, 20260616, 20260617, 20260618, 20260622, 20260623, 20260624, 20260625, 20260626, 20260629, 20260630, 20260701, 20260702, 20260703, 20260706, 20260707, 20260708, 20260709, 20260710, 20260713, 20260714, 20260715, 20260716, 20260717, 20260720, 20260721, 20260722, 20260723, 20260724, 20260727, 20260728, 20260729, 20260730, 20260731, 20260803, 20260804, 20260805, 20260806, 20260807, 20260810, 20260811, 20260812, 20260813, 20260814, 20260817, 20260818, 20260819, 20260820, 20260821, 20260824, 20260825, 20260826, 20260827, 20260828, 20260831

| 原生指标 | 值 | 单位 | 分母 | 汇总 | 状态 |
| --- | --- | --- | --- | --- | --- |
| full82_net_cash | 68.47666640000296 | unit_cash | 82 verified dates, flat terminal path only | sum | known |
| full82_mean_net_bps | 0.1373897013544137 | bp/trade | completed unit round trips | mean | known |
| completed_trades | 1281 | trades | 82 verified expected dates | count | known |
| terminal_unknown_inventory | 0 | positions | parent path terminal inventory | count | known |
| cross_date_trades | 1 | trades | completed unit round trips | count | known |
| holding_occupancy_seconds | 77956.24799999999 | s | sum of completed inventory holding times | sum | known |
| remove_best_day_cash | 38.376873800002706 | unit_cash | 82-day completed subset less best exit day | sum | known |
| remove_best_trade_cash | 38.5243500000029 | unit_cash | completed subset less best trade | sum | known |

限制：原45日已查看；新增37日已在F2扩展研究中查看，不是独立holdout；差距诊断仅覆盖原45日；现金按退出日归因；成交现金流另列，均不是账户MTM；未作多重比较校正；区间跨零不等于等效；固定费用和proxy时钟，不包含资金费和真实执行容量验证；暂定工作基线是用户指定比较对象，不代表收益优越或人工研究接受；入场筛选后信号统计单列，不冒充完整F2信号统计；实际fill后固定2秒响应未恢复时明确缺口，不新增策略条件；LS_H5实际方向贡献，不能当作独立方向策略或与LS总账重复相加。；期末状态 flat；未知库存 0；原45日AU空头亏损、多空低于多头及利润集中事实保留于原报告。；技术自查通过；独立技术审查pending，人工研究复核pending。；本版仅修正已查看样本的来源说明；原v1保留档案，所有策略与数值指标相同。；82 verified expected dates, 45 original +37 extension; exploratory viewed data; unknown inventory separately disclosed

- PnL_path：missing_facts；no equity or account-value source is projected
- cancel_attribution：missing_facts；cancel attribution facts unavailable
- fill_markout：missing_facts；registered fill markout/entry-edge fact is unavailable
- maker_fill：missing_facts；maker order/fill facts unavailable
- signal_bins：missing_facts；no registered source training-bin column
