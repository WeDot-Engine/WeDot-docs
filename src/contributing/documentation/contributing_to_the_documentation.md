# 为文档贡献

本指南解释了如何贡献 WeDot 的文档，无论是编写还是审阅页面。

## 入门

要修改或创建参考手册中的页面，你需要编辑 [`WeDot-docs GitHub 仓库`](https://github.com/WeDot-Engine/WeDot-docs)中的 `.md` 文件。在拉取请求合并后，会触发在线文档的重新构建。

### 注意事项

<!-- TODO：- 如果你想将页面或类引用从汉语翻译成其他语言，请阅读 [文档本地化](#doc_editor_and_docs_localization)。 -->
- 类引用的源文件在 [`WeDot 引擎仓库`](https://github.com/WeDot-Engine/WeDot)中。我们从这些文件生成[类引用](../../classes/index.md)部分。如果你想要更新类的描述、方法或属性，请阅读[《更新类引用文档》](./updating_the_class_reference.md)。

## 文档概述

WeDot 文档旨在作为 WeDot 游戏引擎的综合参考手册。它不包含在入门部分中的两个游戏创建教程之外的逐步教程。

我们努力用简洁易懂的语言撰写事实内容。要贡献文档，你还应阅读：

1. [文档写作指南]()：阅读规则和建议，以确保每个人都能理解。
2. [内容指南]()：其解释我们编写文档的原则和接受的内容类型。
<!-- TODO -->

## 贡献更改

**默认情况下，拉取请求应使用 `latest` 分支。** 只有当更改仅适用于特定版本的 WeDot 时，才应针对其他分支（例如 `3.6` 或 `4.2`）提出拉取请求。拉取请求合并到 `latest` 后，通常会由文档维护者将其 cherry-pick 到当前的稳定分支。

虽然编辑起来不如维基方便，但这个 Git 仓库是我们编写文档的地方。直接访问源文件并使用版本控制系统有助于确保文档质量。

### 编辑现有页面

要编辑现有页面，请找到其 `.md` 源文件并用你喜欢的文本编辑器打开。然后提交更改，推送到你的 fork，并提出拉取请求。**注意：不要编辑 `classes/` 目录下的页面。** 它们是从 WeDot 的 [XML 类引用](https://github.com/WeDot-Engine/WeDot/tree/main/doc/classes) 自动生成的。详情请参阅[《更新类引用文档》](./updating_the_class_reference.md)。

### 在线编辑页面

你可以通过点击每页右上角的 **Edit on GitHub** 链接在线编辑文档。

这样做会带你进入 GitHub 文本编辑器。你需要有一个 GitHub 账户并登录才能使用它。登录后，你可以按照以下步骤提出更改：

1. 点击页面右上角的 **<i class="fa fa-edit"></i> 本页源码**按钮。
2. 在你被带到的 GitHub 页面上，确保当前分支是“latest”。点击右上角的铅笔图标（靠近 **Raw**、**Blame** 和 **Delete** 按钮），提示为“Fork this project and edit the file”。
3. 在文本编辑器中编辑文本。
4. 点击“Commit changes...”，总结你所做的更改，并确保将占位符 "Update file.md" 替换为遵循 [PJ568 提交说明规范](https://github.com/PJ-568/git-commit-regulation)的简短且清晰的一行描述，这是提交标题。点击 **Propose changes** 按钮。
5. 在接下来的屏幕上，点击 **Create pull request** 按钮，直到看到类似 *Username wants to merge 1 commit into WeDot-Engine:latest from Username:patch-1* 的消息。

### 添加新页面

在添加新页面之前，请确保它适合文档：

1. 查找 [现有问题](https://github.com/WeDot-Engine/WeDot-docs/issues) 或打开一个新问题，以确认页面是否必要。
2. 确保没有已经涵盖该主题的页面。
3. 阅读我们的[内容指南]()。
<!-- TODO -->

要添加新页面，请在 `src/` 中的你希望添加文件的目录中创建一个有意义名称的 `.md` 文件，例如 `src/tutorials/3d/light_baking.md`。

然后将你的页面添加到目录文件（`src/SUMMARY.md`）的相关位置。在新行中添加你的新文件名，使用相对路径，例如`- [烘焙光照](tutorials/3d/light_baking.md)`。

每一个页面 `.md` 文件必须在目录文件中提及。

### 标题

```markdown
## 插入你的标题
```

引用允许使用 `#` 格式链接到此页面，例如 `#你的标题`会链接到上述示例页面。

编写标题时，像普通句子一样，不要每个单词都大写：

- 好：理解 WeDot 中的信号
- 孬：理解 Signals In WeDot

只有专有名词、项目、人物和节点类名的首字母应大写。

### mdBook 和 Markdown 语法

有关详细语法，请查阅 [mdBook 文档](https://rust-lang.github.io/mdBook/format/markdown.html)和 [CommonMark 官方参考](https://commonmark.org/)。

### 添加图像和附件

要添加图像，请将它们放在 `.md` 文件旁边的 `img/` 文件夹中，并使用有意义的名称，然后在页面中包含它们：

```markdown
![image_name](img/image_name.webp)
```

或者，你可以使用 HTML 嵌入，使其居中：

```HTML
<p style="text-align: center;">
  <img src="img/image_name.webp" alt="image_name">
</p>
```

你还可以将附件作为教程的支持材料，将它们放在 `.md` 文件旁边的 `files/` 文件夹中，并使用以下内联标记：

```markdown
[下载文件](files/file_name.zip)
```

请考虑使用 [Assets](https://github.com/WeDot-Engine/Assets) 仓库托管支持材料，如项目模板和资源包。你可以使用该仓库生成的归档文件的直接链接，使用常规链接标记：

```markdown
[下载文件](https://github.com/WeDot-Engine/Assets/releases/download/latest-4.x/file_name.zip)
```

## 许可证

本文档及其所有页面均根据 [Creative Commons Attribution 3.0 许可（CC BY 3.0）](https://creativecommons.org/licenses/by/3.0/)发布，以“Juan Linietsky, Ariel Manzur、Godot 社区和 WeDot 社区”署名。

在 GitHub 仓库中贡献文档，即代表你同意你的更改根据此许可分发。
