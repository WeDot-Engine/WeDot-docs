# 更新类参考文档

## 贡献于类参考文档

[类参考](../../classes/index.md)是一组描述引擎公共 API 的文章。这包括对各种类、方法、属性和全局对象的描述，这些对象可用于脚本编写。类参考文档可以在网上、文档侧边栏以及 WeDot 编辑器的帮助菜单中找到。

随着引擎的发展和功能的添加或修改，类参考文档的某些部分会过时，需要添加新的描述和示例。虽然我们欢迎开发人员在提交合并请求时在类参考文档中记录他们的所有努力，但我们无法确保每个人都能写出高质量的文档，因此我们需要像您这样的贡献者来完善现有文档并创建缺失的参考材料。

### 类参考文档的来源

由于类参考文档要在两个地方（在线网页和编辑器）使用，我们需要确保两者保持同步。为此，我们选择[WeDot 主仓库](https://github.com/WeDot-Engine/WeDot/)作为唯一真实来源，类参考文档的文档在此修改并同步到[文档仓库](https://github.com/WeDot-Engine/WeDot-docs/)。

> 不要在[文档仓库](https://github.com/WeDot-Engine/WeDot-docs/)的 `classes/` 文件夹中编辑 `.md` 文件。这些文件是自动生成的，并由项目维护者手动同步。请继续阅读以了解如何正确编辑类参考文档。

在主仓库中，类参考文档存储在 XML 文件中，每个暴露的类或全局对象一个文件。大多数这些文件位于 [`doc/classes/`](https://github.com/WeDot-Engine/WeDot/tree/main/doc/classes)，但一些模块也包含自己的文档。您可以在 `modules/<module_name>/doc_classes/` 目录中找到它们。有关编辑 XML 文件的更多信息，请参阅[类参考文档入门](class_reference_primer.md)。

> 有关 Git 使用和合并请求工作流程的详细信息，请参阅[合并请求工作流](../workflow/pr_workflow.md)页面。
>
<!-- TODO：> 如果您想将类参考文档从汉语翻译成其他语言，请参阅 [编辑器和文档本地化](doc_editor_and_docs_localization)。此指南也可作为 [YouTube 上的视频教程](https://www.youtube.com/watch?v=5jeHXxeX-JY)。 -->
> 当前所有的文档暂未支持本地化翻译，还请使用网页机器翻译。

**重要提示：** 如果您计划进行大量更改，应在[文档仓库](https://github.com/WeDot-Engine/WeDot-docs/)中创建一个问题（issue）或评论现有问题。这样做可以让其他人知道您已经在处理某个类。

## 可以贡献什么

开始贡献的自然起点是你最熟悉的类。这确保了添加的描述基于经验和必要的知识，而不仅是方法或属性的名称。我们建议不要添加低质量的描述，无论它看起来多么有趣、吸引人。这样的描述掩盖了文档的需求，并且难以自动识别。

<!-- TODO：> 遵循这一原则非常重要，因为它让我们能够为贡献者创建工具。例如，类参考文档的 [完成状态追踪器](https://WeDot-Engine.github.io/doc-status/)。您可以使用它快速找到缺少描述的文档页面。 -->

如果您决定记录一个类，但不知道某个特定方法（函数）的作用，请暂时跳过它，并在您的合并请求描述中列出您跳过的方法。另一位贡献者会处理它的。

您仍然可以在 GitHub 上查看 WeDot 源代码中的方法实现。如果您有疑问，欢迎在 [Discord](https://discord.com/invite/MDDHEQNJaY) 或 [QQ 群组](https://qm.qq.com/cgi-bin/qm/qr?authKey=G%2BR%2FKlLQBeH71b1Mhe4t2gM%2B8rLXndOEPhPtDgWgTudLUtGUgpMrNAWD87x%2F64ta&k=IPTGQ3zH_W8IAzaFrnLLGF2kplhv-EeM&noverify=0&group_code=670915303)中提问。

> 除非是小更改，如修正拼写错误，否则不推荐使用 GitHub 网页编辑器编辑类参考文档的 XML 文件。它缺乏良好的 XML 编辑功能，如保持缩进一致，并且不支持根据审查进行提交修正。
>
> 它也不支持您在引擎中或使用验证脚本测试您的更改，如[编辑 XML 文件]() 中所述。
<!-- TODO -->

## 在引擎开发过程中更新类参考文档

当您创建一个新类或修改现有的引擎 API 时，需要重新生成 `doc/classes/` 目录中的 XML 文件。

<!-- TODO -->
为此，您首先需要编译 WeDot。请参阅[构建系统简介]()页面了解如何操作。然后，从 WeDot 根目录执行编译后的 WeDot 二进制文件，并使用 `--doctool` 选项。例如，如果您在 64 位 Linux 上，命令可能是：

```sh
./bin/wedot.linuxbsd.editor.x86_64 --doctool
```
