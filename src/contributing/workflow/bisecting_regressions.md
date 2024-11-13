# 定位回归

## 什么是定位回归？

在软件中，定位回归（bisecting regressions）是一种找到引入问题的特定提交的方法。当你在一个 GitHub 仓库（如 WeDot）报告了一个 bug 后，贡献者可能会要求你进行*定位*。通过定位，贡献者可以更快地修复 bug，因为他们可以提前知道哪个提交导致了问题。当然，你的努力会得到广泛的认可。`:-)`

下面会解释如何通过定位（bisecting）来找到一个回归（regression）。

## 什么是定位（bisecting）

WeDot 开发者使用 [Git](https://git-scm.com) 版本控制系统。在 Git 的上下文中，定位是指通过手动执行二分法查找（binary search）来确定回归出现的时间。虽然它通常用带处理 bug，但也可以用于其他类型的意外变化，例如性能倒退。

## 使用官方构建加速定位

在使用 Git 的 `bisect` 命令之前，我们强烈建议尝试使用旧版本（或新版本）的官方发布版来重现 bug。这大大减少了可能需要从源代码编译和测试的提交范围。你可以在[这里](https://github.com/WeDot-Engine/WeDot/releases)找到官方发布的二进制文件，以及 alpha、beta 和候选版本。

> 项目文件在不同版本的 WeDot 之间可能不兼容。**在开始定位过程之前备份你的项目**。
>
> 从最旧的版本到最新的版本通常可以减少项目无法成功在编辑器中打开的风险，这得益于向后兼容性。尽量将项目简化为最小的可重复示例。项目越简单，越有可能在新版本的引擎中打开而不会遇到兼容性问题。

## Git 的 bisect 命令

如果你已经找到了一个没有表现出 bug 的构建，现在可以开始定位回归了。Git 版本控制系统提供了一个内置命令来实现这一点：`git bisect`。这个命令使过程半自动化，因为只需要编译引擎、运行它并尝试重现 bug。

> 在定位回归之前，你需要设置一个编译环境来从源代码编译 WeDot。为此，请阅读目标平台的[编译](../development/compiling/index.md)页面。（从源代码编译 WeDot 不需要 C++ 编程知识）
>
> 注意，编译 WeDot 在慢硬件上可能需要很长时间（在慢双核 CPU 上每次完整重新编译可能需要一个小时）。这意味着整个过程可能需要几个小时。如果你的硬件太慢，你可以就此打住，并在 WeDot 问题中报告你的“预定位”结果，以便其他贡献者从那里继续定位。

### 确定提交哈希

要开始定位，你必须首先确定“坏家伙”和“好家伙”构建的提交哈希（标识符）。“坏家伙”指的是表现出 bug 的构建，而“好家伙”指的是没有表现出 bug 的版本。如果你使用的是预发布版作为“好家伙”或“坏家伙”构建，浏览[下载](https://github.com/WeDot-Engine/WeDot/releases)，进入包含你下载的预发布版的文件夹，并查找 `README.txt` 文件。提交哈希写在该文件中。

如果你使用的是稳定版作为“好家伙”或“坏家伙”构建，根据版本使用以下提交哈希之一：

```text
4.1.1-stable
4.1-stable
4.0.3-stable
4.0.2-stable
4.0.1-stable
4.0-stable
3.5.2-stable
3.5.1-stable
3.5-stable
3.4.5-stable
3.4.4-stable
3.4.3-stable
3.4.2-stable
3.4.1-stable
3.4-stable
3.3.4-stable
3.3.3-stable
3.3.2-stable
3.3.1-stable
3.3-stable
3.2-stable
3.1-stable
3.0-stable
```

<!-- 你还可以使用这个 Bash 函数来获取预发布版的 Git 提交哈希（将其添加到你的 `~/.bashrc` 或类似文件中）：

```bash
gd_snapshot_commit() {
    curl -s https://downloads.tuxfamily.org/wedotengine/$1/$2/README.txt \
        | grep 'from commit' \
        | sed 's/^Built from commit \(.*\)\.$/\1/'
}
``` -->

示例用法：

```bash
gd_snapshot_commit 4.0 beta4
```

要引用 main 分支的最新状态，可以使用 `main` 而不是提交哈希。请注意，与标记的发布版或快照提交哈希不同，`main` 是一个不断移动的目标。

### 编译引擎

[使用 Git 获取 WeDot 的源代码](../development/compiling/getting_source.md)。完成后，在终端窗口中使用 `cd` 进入 WeDot 仓库文件夹，并输入以下命令：

```shell
# <good commit hash> 是预期正常工作的构建的哈希值。
# <bad commit hash> 是表现出 bug 的构建的哈希值。
git bisect start
git bisect good <good commit hash>
git bisect bad <bad commit hash>
```

编译 WeDot。假设你已经设置了编译环境：

```shell
scons
```

### 运行引擎

运行位于 `bin/` 文件夹中的二进制文件并尝试重现 bug。

> [检查 `bin/` 文件夹中的输出文件名](../development/compiling/introduction_to_the_buildsystem.md#doc-introduction-to-the-buildsystem-resulting-binary)，以确保你实际运行的是刚刚编译的二进制文件。不同的 WeDot 版本会输出不同名称的二进制文件。

如果构建 **仍然** 表现出 bug，运行以下命令：

```shell
git bisect bad
```

如果构建 **没有** 表现出 bug，运行以下命令：

```shell
git bisect good
```

输入上述命令之一后，Git 将切换到不同的提交。你应该再次编译 WeDot，尝试重现 bug，然后根据结果输入 `git bisect good` 或 `git bisect bad`。你需要重复这个过程几次。提交范围越长，所需步骤越多。通常 5 到 10 步足以找到大多数回归；Git 会提醒你剩余的步骤数（最坏情况下）。

完成足够多的步骤后，Git 将显示回归出现的提交哈希。将此提交哈希作为评论写入你定位的 GitHub 问题中。这将有助于解决问题。再次感谢你对 WeDot 的贡献。`:-)`

> 你可以阅读 `git bisect` 的完整文档：[git-bisect](https://git-scm.com/docs/git-bisect)。
