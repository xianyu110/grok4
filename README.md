# Grok 4.5 国内使用指南（2026 年 7 月更新）

本项目提供 Grok 4.5 的中文介绍、国内访问入口和多语言 GitHub Pages 页面。根据 xAI 官方模型文档，`grok-4.5` 已进入公开模型目录，并提供 `grok-4.5-latest` 别名。

官方信息显示，Grok 4.5 面向代码、聊天和智能体工具调用，支持可配置推理、函数调用与结构化输出；上下文窗口为 500K tokens。官方标价为输入 $2 / 1M tokens、输出 $6 / 1M tokens，超过 200K tokens 的长上下文价格更高。价格、限额和可用区域可能继续调整，使用前请以 xAI 文档为准。

**Grok 4.5 免费体验通道：https://kelaode.maynorai.top/list/#/home**

## Grok 4.5 最新状态

- **官方模型 ID**：`grok-4.5`
- **滚动别名**：`grok-4.5-latest`
- **输入**：文本、图片
- **输出**：文本
- **上下文窗口**：500K tokens
- **官方定位**：代码与通用任务旗舰模型，强调 agentic tool calling、低幻觉和可配置推理
- **API 价格**：输入 $2 / 1M tokens，输出 $6 / 1M tokens；长上下文另计
- **Playground 状态**：官方模型页当前标注为 coming soon，具体以 xAI 页面为准

官方来源：

- [xAI 模型目录](https://docs.x.ai/developers/models)
- [Grok 4.5 模型页](https://docs.x.ai/developers/models/grok-4.5)
- [xAI Grok 4.5 发布页](https://x.ai/news/grok-4-5)

![Grok 4.1 Header](https://mmbiz.qpic.cn/sz_mmbiz_png/1ibrBHWruibROdQAHQbvk5WQlic3wn2tD2ggiaLvzQhB20VvD4tibZqHHmF2kG3lNynEbZkaw0fyIW30uzicXcdEDzxg/640?wx_fmt=png\&from=appmsg\&watermark=1\&tp=wxpic\&wxfrom=5\&wx_lazy=1#imgIndex=0)

> 上图及下方历史截图来自此前 Grok 4.1 内容，按项目要求保留用于版本演进参考；Grok 4.5 的实时参数以官方文档为准。

## 国内访问方式

以下原有入口继续保留：

- **[https://trygrokai.asia/](https://trygrokai.asia/)** - 新增 Grok 体验入口，进入后请核对实际可用模型与服务条款。
- **[https://maynorai.top/list/#/home](https://maynorai.top/list/#/home)** - 支持 Grok 与多种 AI 模型，实际可用模型请以站内列表为准。
- **福利：限时免费授权码 `grok1108`（请在设置或充值处尝试兑换）**

![体验通道](https://mmbiz.qpic.cn/sz_mmbiz_png/1ibrBHWruibROdQAHQbvk5WQlic3wn2tD2giaesKM5DTibuVMYWBicMEqM3icAibTHIyV5f7tRgJq1jeYwmmmvAzQGTAUw/640?wx_fmt=png\&from=appmsg\&watermark=1\&tp=wxpic\&wxfrom=5\&wx_lazy=1#imgIndex=2)

使用第三方镜像或聚合服务时，请先确认模型名称、价格、隐私政策和数据保留方式。第三方入口不等同于 xAI 官方服务，本项目也不对第三方服务的稳定性、账号状态或数据安全作绝对保证。

## Grok 4.5 的核心变化

### 1. 代码与通用任务合并到同一旗舰模型

xAI 将 Grok 4.5 描述为适用于“code and everything else”的旗舰模型。对于开发者，这意味着代码生成、聊天、工具调用和结构化输出可以围绕同一模型 ID 设计，不必依赖未经确认的模型名称。

![LMArena排行榜](https://mmbiz.qpic.cn/sz_mmbiz_png/1ibrBHWruibROdQAHQbvk5WQlic3wn2tD2gJTLvyGCtSfClB1TVxAtk9VDRy0QUm3PIVq6FsK9RkechM8tpEKSEbA/640?wx_fmt=png\&from=appmsg\&watermark=1\&tp=wxpic\&wxfrom=5\&wx_lazy=1#imgIndex=1)

![盲测数据](https://mmbiz.qpic.cn/sz_mmbiz_png/1ibrBHWruibROdQAHQbvk5WQlic3wn2tD2g8atyj2ypPEMDZaBCv5CrJick1DSTVZsyQcW3fcPaMnFkNbiaRsoqmPMg/640?wx_fmt=png\&from=appmsg\&watermark=1\&tp=wxpic\&wxfrom=5\&wx_lazy=1#imgIndex=3)

以上榜单图为历史版本材料。README 不再把旧版跑分直接套用到 Grok 4.5；新的横向结论应等待公开模型卡、统一测试条件和可复现评测。

### 2. 500K 上下文与图文输入

官方模型目录列出 500K tokens 上下文，并标注文本与图片输入、文本输出。长上下文适合大型代码库、长文档和多轮智能体任务，但超过 200K tokens 后价格会上调，应在生产环境中控制上下文长度与缓存策略。

![EQ排行榜](https://mmbiz.qpic.cn/sz_mmbiz_png/1ibrBHWruibROdQAHQbvk5WQlic3wn2tD2gOjJLpK2YSj8EDMjQSQRZkFA1XWJibrcSrAYbBfH2iaOr8ol1kvXy5akQ/640?wx_fmt=png\&from=appmsg\&watermark=1\&tp=wxpic\&wxfrom=5\&wx_lazy=1#imgIndex=4)

![情商对话截图](https://mmbiz.qpic.cn/sz_mmbiz_png/1ibrBHWruibROdQAHQbvk5WQlic3wn2tD2gW9jkzWvMmnuyuf1iabLz8woziaNSyicLYEnvzDCkFvf3D3JR5BqyQhpng/640?wx_fmt=png\&from=appmsg\&watermark=1\&tp=wxpic\&wxfrom=5\&wx_lazy=1#imgIndex=5)

### 3. 可配置推理与智能体工具调用

Grok 4.5 官方能力表包含 reasoning、function calling 与 structured outputs。实际接入时应使用官方 SDK/API 返回的模型能力，不要依赖页面宣传词推断参数名或兼容性。

![幻觉率对比](https://mmbiz.qpic.cn/sz_mmbiz_png/1ibrBHWruibROdQAHQbvk5WQlic3wn2tD2gNTt7JQibQD34fZT2mBz5AGBXGziaa1SL7C062bq4DDTHppJQWMh3rUJw/640?wx_fmt=png\&from=appmsg\&watermark=1\&tp=wxpic\&wxfrom=5\&wx_lazy=1#imgIndex=6)

xAI 使用“minimal hallucinations”描述模型方向，但这不是零幻觉保证。涉及事实、金融、医疗、法律或生产操作时，仍需外部检索、引用校验和人工确认。

### 4. API 成本更容易预估

按官方当前标价，100 万输入 tokens 约 $2，100 万输出 tokens 约 $6；缓存输入与批处理可能有不同计费。超过 200K tokens 的请求会进入长上下文价格档，成本估算时应单独计算。

![创意写作1](https://mmbiz.qpic.cn/sz_mmbiz_png/1ibrBHWruibROdQAHQbvk5WQlic3wn2tD2gFA4SJoomV5w4j9PlqsibJxzvIWhiccb19tDQqvP9maZKV8e10alxrVGQ/640?wx_fmt=png\&from=appmsg\&watermark=1\&tp=wxpic\&wxfrom=5\&wx_lazy=1#imgIndex=7)

![创意写作2](https://mmbiz.qpic.cn/sz_mmbiz_png/1ibrBHWruibROdQAHQbvk5WQlic3wn2tD2gkp0MWZVsqS7PhDOkDBc4eMoeGf3vdNr0Tura4OlO8DOg7KyWia6NVuw/640?wx_fmt=png\&from=appmsg\&watermark=1\&tp=wxpic\&wxfrom=5\&wx_lazy=1#imgIndex=8)

## 常见问题

### Grok 4.5 已经发布了吗？

是。xAI 官方模型目录已列出 `grok-4.5`，并提供 `grok-4.5-latest` 别名。

### Grok 4.5 支持图片吗？

官方模型数据标注输入支持文本和图片，输出为文本。

### Grok 4.5 的价格是多少？

官方目录当前显示输入 $2 / 1M tokens、输出 $6 / 1M tokens；超过 200K tokens 的长上下文请求价格更高。请在使用前复核官方价格页。

### 第三方入口一定提供 Grok 4.5 吗？

不一定。进入第三方站点后应核对实际模型列表，不要只凭页面标题判断底层模型。

### Grok 4.5 会完全避免幻觉吗？

不会。官方强调减少幻觉，但所有大模型都需要事实核验和风险控制。

---

**Grok 4.5 页面已更新，原有体验入口与历史图片继续保留。**

**立即体验 Grok 4.5 中文版：https://kelaode.maynorai.top/list/#/home**

![Footer Banner](https://mmbiz.qpic.cn/sz_mmbiz_png/1ibrBHWruibROdQAHQbvk5WQlic3wn2tD2giaesKM5DTibuVMYWBicMEqM3icAibTHIyV5f7tRgJq1jeYwmmmvAzQGTAUw/640?wx_fmt=png\&from=appmsg\&watermark=1\&tp=wxpic\&wxfrom=5\&wx_lazy=1#imgIndex=9)

---

⭐ **如果本指南对您有帮助，请帮忙点亮 Star~**
