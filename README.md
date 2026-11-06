# Grok 4.7 国内使用指南（2026 年 11 月更新）

本项目提供 Grok 4.7 的中文介绍、国内访问入口和多语言 GitHub Pages 页面。根据 xAI 官方模型文档，旗舰模型为 **Grok 4.7**，API 模型 ID 为 `grok-4.7`。

官方信息显示，Grok 4.7 面向代码、智能体任务与知识工作（“code and everything else”），是比 Grok 4.6 更大的基座；强调更强的自校验与长上下文表现，并具备对原生 Grok Bot harness 的理解。上下文窗口为 **500K tokens**，知识截止日期为 **2026 年 5 月**；支持文本与图片输入、文本输出（无文本输出上限）。推理力度可选 low / medium / **high（默认）** / xhigh。工具能力包括函数调用、网页搜索、X 搜索与代码执行。价格、限额和可用区域可能继续调整，使用前请以 [xAI 官方文档](https://docs.x.ai/developers/models) 为准。

**Grok 4.7 免费体验通道：https://kelaode.maynorai.top/list/#/home**

## Grok 4.7 最新状态

- **官方模型 ID**：`grok-4.7`
- **输入**：文本、图片
- **输出**：文本（无文本输出上限）
- **上下文窗口**：500K tokens
- **知识截止**：May 2026（2026 年 5 月）
- **推理力度**：low / medium / high（默认） / xhigh
- **官方定位**：代码、智能体与知识工作旗舰；更大基座、更好自校验与长上下文；原生 Grok Bot harness 理解
- **工具**：function calling、web search、X search、code execution
- **API 价格（标准档）**：
  - 提示词 **< 200k**：输入 $2 / 缓存输入 $0.50 / 输出 $6（每 1M tokens）
  - 提示词 **≥ 200k**：输入 $4 / 缓存输入 $1 / 输出 $12（每 1M tokens）
- **Fast 变体**：标准 token 价约 2×（长上下文约 1.5×）；**仅**在 Cursor / Grok Build 提供，**不在**公开 xAI API
- **同目录仍列出**：`grok-4.6`、`grok-4.5`（4.6/4.7 价位同档量级）

官方来源：

- [xAI 模型目录](https://docs.x.ai/developers/models)
- [Grok 4.7 模型页](https://docs.x.ai/developers/grok-4-7)
- [xAI Grok 4.7 发布页](https://x.ai/news/grok-4-7)（约 2026-09-21 宣布）

![Grok 4.1 Header](https://mmbiz.qpic.cn/sz_mmbiz_png/1ibrBHWruibROdQAHQbvk5WQlic3wn2tD2ggiaLvzQhB20VvD4tibZqHHmF2kG3lNynEbZkaw0fyIW30uzicXcdEDzxg/640?wx_fmt=png\&from=appmsg\&watermark=1\&tp=wxpic\&wxfrom=5\&wx_lazy=1#imgIndex=0)

> 上图及下方历史截图来自此前 Grok 4.1 等内容，按项目要求保留用于版本演进参考；**非** Grok 4.7 实时界面。Grok 4.7 的实时参数、跑分与能力表请以官方文档与公告为准（以官方文档为准）。

## 国内访问方式

以下原有入口继续保留（第三方 ≠ xAI 官方；进入后请自行核对站内模型列表）：

- **[https://kelaode.maynorai.top/list/#/home](https://kelaode.maynorai.top/list/#/home)** - Grok 4.7 免费体验主入口，进入后请核对实际可用模型与服务条款。
- **[https://trygrokai.asia/](https://trygrokai.asia/)** - Grok 体验入口，进入后请核对实际可用模型与服务条款。
- **[https://trygpt.asia/list/#/home](https://trygpt.asia/list/#/home)** - 支持 Grok 与多种 AI 模型，实际可用模型请以站内列表为准。
- **福利：限时免费授权码 `grok1108`（请在设置或充值处尝试兑换）**

![体验通道](https://mmbiz.qpic.cn/sz_mmbiz_png/1ibrBHWruibROdQAHQbvk5WQlic3wn2tD2giaesKM5DTibuVMYWBicMEqM3icAibTHIyV5f7tRgJq1jeYwmmmvAzQGTAUw/640?wx_fmt=png\&from=appmsg\&watermark=1\&tp=wxpic\&wxfrom=5\&wx_lazy=1#imgIndex=2)

使用第三方镜像或聚合服务时，请先确认模型名称、价格、隐私政策和数据保留方式。第三方入口不等同于 xAI 官方服务，本项目也不对第三方服务的稳定性、账号状态或数据安全作绝对保证。

## Grok 4.7 的核心变化

### 1. 代码与通用任务合并到同一旗舰模型

xAI 将 Grok 4.7 描述为适用于“code and everything else”的旗舰模型，面向 coding、agentic tasks 与 knowledge work。对于开发者，这意味着代码生成、聊天、工具调用和多步智能体流程可以围绕同一模型 ID `grok-4.7` 设计。相对前代，官方强调更大基座、更强自校验与长上下文，以及对原生 Grok Bot harness 的理解。

![LMArena排行榜](https://mmbiz.qpic.cn/sz_mmbiz_png/1ibrBHWruibROdQAHQbvk5WQlic3wn2tD2gJTLvyGCtSfClB1TVxAtk9VDRy0QUm3PIVq6FsK9RkechM8tpEKSEbA/640?wx_fmt=png\&from=appmsg\&watermark=1\&tp=wxpic\&wxfrom=5\&wx_lazy=1#imgIndex=1)

![盲测数据](https://mmbiz.qpic.cn/sz_mmbiz_png/1ibrBHWruibROdQAHQbvk5WQlic3wn2tD2g8atyj2ypPEMDZaBCv5CrJick1DSTVZsyQcW3fcPaMnFkNbiaRsoqmPMg/640?wx_fmt=png\&from=appmsg\&watermark=1\&tp=wxpic\&wxfrom=5\&wx_lazy=1#imgIndex=3)

以上榜单图为历史版本材料。README **不**把旧版跑分直接套用到 Grok 4.7；若需引用 CursorBench 等数字，请直接查阅 [官方发布页](https://x.ai/news/grok-4-7) 并标明为公告数据，评测结论以官方文档为准。

### 2. 500K 上下文与图文输入

官方模型目录列出 500K tokens 上下文，并标注文本与图片输入、文本输出（无文本输出上限）；知识截止为 May 2026。长上下文适合大型代码库、长文档和多轮智能体任务，但超过 200K tokens 后价格会上调，应在生产环境中控制上下文长度与缓存策略（官方建议合理设置 `prompt_cache_key` 等以提升缓存命中）。

![EQ排行榜](https://mmbiz.qpic.cn/sz_mmbiz_png/1ibrBHWruibROdQAHQbvk5WQlic3wn2tD2gOjJLpK2YSj8EDMjQSQRZkFA1XWJibrcSrAYbBfH2iaOr8ol1kvXy5akQ/640?wx_fmt=png\&from=appmsg\&watermark=1\&tp=wxpic\&wxfrom=5\&wx_lazy=1#imgIndex=4)

![情商对话截图](https://mmbiz.qpic.cn/sz_mmbiz_png/1ibrBHWruibROdQAHQbvk5WQlic3wn2tD2gW9jkzWvMmnuyuf1iabLz8woziaNSyicLYEnvzDCkFvf3D3JR5BqyQhpng/640?wx_fmt=png\&from=appmsg\&watermark=1\&tp=wxpic\&wxfrom=5\&wx_lazy=1#imgIndex=5)

### 3. 可配置推理与智能体工具调用

Grok 4.7 支持 reasoning effort：`low` / `medium` / `high`（默认） / `xhigh`，以及 function calling、web search、X search、code execution。实际接入时应使用官方 SDK/API 返回的模型能力，不要依赖页面宣传词推断参数名或兼容性。

![幻觉率对比](https://mmbiz.qpic.cn/sz_mmbiz_png/1ibrBHWruibROdQAHQbvk5WQlic3wn2tD2gNTt7JQibQD34fZT2mBz5AGBXGziaa1SL7C062bq4DDTHppJQWMh3rUJw/640?wx_fmt=png\&from=appmsg\&watermark=1\&tp=wxpic\&wxfrom=5\&wx_lazy=1#imgIndex=6)

官方强调更好的自校验，但这不是零幻觉保证。涉及事实、金融、医疗、法律或生产操作时，仍需外部检索、引用校验和人工确认。

### 4. API 成本更容易预估

按官方当前标准价：提示词低于 200k 时，输入约 $2、缓存输入约 $0.50、输出约 $6 / 1M tokens；≥200k 时分别为 $4 / $1 / $12。Grok 4.7 Fast 为 Cursor / Grok Build 专属加速档，公开 API 不含 Fast。成本估算时应区分标准档、长上下文档与平台专属 Fast。

![创意写作1](https://mmbiz.qpic.cn/sz_mmbiz_png/1ibrBHWruibROdQAHQbvk5WQlic3wn2tD2gFA4SJoomV5w4j9PlqsibJxzvIWhiccb19tDQqvP9maZKV8e10alxrVGQ/640?wx_fmt=png\&from=appmsg\&watermark=1\&tp=wxpic\&wxfrom=5\&wx_lazy=1#imgIndex=7)

![创意写作2](https://mmbiz.qpic.cn/sz_mmbiz_png/1ibrBHWruibROdQAHQbvk5WQlic3wn2tD2gkp0MWZVsqS7PhDOkDBc4eMoeGf3vdNr0Tura4OlO8DOg7KyWia6NVuw/640?wx_fmt=png\&from=appmsg\&watermark=1\&tp=wxpic\&wxfrom=5\&wx_lazy=1#imgIndex=8)

## 常见问题

### Grok 4.7 已经发布了吗？

是。xAI 约于 2026-09-21 发布公告，官方模型目录已将 `grok-4.7` 列为面向代码与通用任务的旗舰模型。详见 [发布页](https://x.ai/news/grok-4-7) 与 [模型页](https://docs.x.ai/developers/grok-4-7)。

### Grok 4.7 支持图片吗？

官方模型数据标注输入支持文本和图片，输出为文本，且无文本输出上限。

### Grok 4.7 的价格是多少？

标准档：<200k 提示词为输入 $2 / 缓存 $0.50 / 输出 $6（每 1M tokens）；≥200k 为 $4 / $1 / $12。Fast 变体价更高且仅 Cursor / Grok Build。请在使用前复核官方价格页。

### 第三方入口一定提供 Grok 4.7 吗？

不一定。进入第三方站点后应核对实际模型列表，不要只凭页面标题判断底层模型。第三方 ≠ 官方 xAI。

### Grok 4.7 会完全避免幻觉吗？

不会。官方强调自校验与减少错误，但所有大模型都需要事实核验和风险控制。

### 还有 Grok 4.6 / 4.5 吗？

有。官方目录仍列出 `grok-4.6`、`grok-4.5` 等；当前推荐旗舰为 `grok-4.7`，具体以文档为准。

---

**Grok 4.7 页面已更新，原有体验入口与历史图片继续保留。**

**立即体验 Grok 4.7 中文版：https://kelaode.maynorai.top/list/#/home**

![Footer Banner](https://mmbiz.qpic.cn/sz_mmbiz_png/1ibrBHWruibROdQAHQbvk5WQlic3wn2tD2giaesKM5DTibuVMYWBicMEqM3icAibTHIyV5f7tRgJq1jeYwmmmvAzQGTAUw/640?wx_fmt=png\&from=appmsg\&watermark=1\&tp=wxpic\&wxfrom=5\&wx_lazy=1#imgIndex=9)

---

⭐ **如果本指南对您有帮助，请帮忙点亮 Star~**
