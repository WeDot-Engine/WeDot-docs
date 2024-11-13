# 代码贡献

WeDot 遵循 [MIT 许可协议](https://tldrlegal.com/license/mit-license)。
因此，每个人都有权学习、使用、修改和再分发 [WeDot 引擎的源代码](https://github.com/WeDot-Engine/WeDot)，并以补丁（描述预定更改的文本文件）的形式将这些修改发送回上游项目，或者——用现代的工作流程——通过所谓“合并请求”（Pull Request），直接请求将一个或多个 Git commits（补丁）合并到主开发分支。

贡献代码更改到上游有两大优势:

- 你的代码将由其他开发人员审核和改进，并将直接在上游项目中进一步维护，因此你不必在每次迁移到新版本时重新应用自己的更改。另一方面，它也是一种责任，因为你所做的更改必须足够通用才能对所有用户有益，而不仅仅是对你的项目有益。
- 整个社区都会从您的工作中受益，其他贡献者也会以同样的方式贡献对您有益的代码。在撰写本文时，已有超过 2000 名开发人员为引擎贡献了代码更改！

为了确保良好的合作和整体质量，WeDot 的开发者对代码贡献实行一些规则，例如关于 C++ 代码的风格（缩进，括号等）或 Git 和合并请求工作流程。

解决 Github 中标记为[`【首次】good first issue`](https://github.com/WeDot-Engine/WeDot/issues?q=is:issue+is:open+label:%22%E3%80%90%E9%A6%96%E6%AC%A1%E3%80%91good+first+issue%22) 的问题是个不错的开始。

> 有关合并请求工作流程的技术细节在特定章节[《合并请求工作流程》](pr_workflow.md)中概述。
>
> 有关代码样式规范和用于实施它们的 `clang-format` 工具的详细信息，详见[《代码风格规范》](development/code_style_guidelines.md)。

所有的合并请求在被接受之前必须经过一个审核过程。取决于修改的范围，负责引擎修改部分的维护者可能需要一些时间来提供他们的审核。我们重视所有贡献者，请在此期间保持耐心。

为了确保你的时间和精力不被浪费，建议在实施该想法并将其作为合并请求进行审核之前，先对其进行审核。WeDot 有一个[提案系统](https://github.com/WeDot-Engine/To-Do)。我们推荐使用该系统来提前规划更改并与社区讨论。实施细节也可以在 [QQ 群组](https://qm.qq.com/cgi-bin/qm/qr?authKey=G%2BR%2FKlLQBeH71b1Mhe4t2gM%2B8rLXndOEPhPtDgWgTudLUtGUgpMrNAWD87x%2F64ta&k=IPTGQ3zH_W8IAzaFrnLLGF2kplhv-EeM&noverify=0&group_code=670915303)中与其他贡献者讨论。

> **注意**：只有在进行增强或新功能的工作时，才需要提出建议。若要提交错误，请使用[错误报告](https://github.com/WeDot-Engine/WeDot/issues)。
