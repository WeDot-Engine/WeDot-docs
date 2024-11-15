# 合并请求工作流

## 概述

所谓“合并请求工作流”在许多使用 Git 的项目中都很常见，有经验的自由软件贡献者应该都很熟悉。
其基本思想是：如果有只有少量的更改，就直接提交到 `master` 分支（WeDot 的主要分支是 `main` 分支）。若并非只有少量的更改，贡献者就应该 `fork` 项目（即创建一个可以随意修改副本），然后通过 GitHub 界面请求从他们 fork 的一个分支拉取到原始仓库（通常称为*上游*）的一个分支。

生成的合并请求（pull request）可以被其他贡献者审核，可能会批准、拒绝或最常见的是请求进行修改。一旦获得批准，核心开发人员之一可以合并合并请求，其提交将成为目标分支（通常是 `master` 分支，对于 WeDot 是 `main` 分支）的一部分。

我们将通过一个示例来展示典型的流程和相关的 Git 命令。但首先，让我们快速了解一下 WeDot 的 Git 仓库组织结构。

## Git 源代码仓库

[WeDot 的 GitHub 仓库](https://github.com/Wedot-Engine/WeDot)是一个包含嵌入式问题跟踪器和合并请求系统的 Git 代码仓库。

> 如果你打算贡献文档，可访问[文档仓库](https://github.com/Wedot-Engine/WeDot-docs)。

Git 版本控制系统是用于跟踪源代码连续编辑的工具。
因此为了高效地贡献 WeDot，学习 Git 命令行的基本知识是非常推荐的。
虽然存在一些 Git 的图形界面的客户端，但它们通常会导致用户养成关于 Git 和合并请求工作流的坏习惯，我们建议不要使用它们。
我们尤其不建议使用 GitHub 的在线编辑器进行代码贡献（尽管对小的修复或文档更改不会有什么问题），因为它强制每个文件和每次修改都生成一个提交，这很快会导致合并请求的 Git 历史难以阅读（尤其是在审核后）。

> Git 之书的前几节是了解该工具哲学和日常工作中需要掌握的各种命令的好介绍。可在 [Git SCM](https://git-scm.com/book/en/v2) 网站上在线阅读这些内容。[GitHub 的交互式指南](https://try.github.io/)也不错的。

WeDot 的 Git 仓库中的分支组织如下：

- **main** 分支是下一个主要版本的开发分支。作为一个开发分支，它可能是不稳定的，不适用于生产环境。这是优先提交合并请求的地方。
- **稳定分支**以版本号命名，例如 `3.1` 和 `2.1`。它们用于从 `main` 分支回传错误修复和增强功能到当前维护的稳定版本（例如 `3.1.2` 或 `2.1.6`）。通常情况下，最后一个稳定分支会一直维护到下一个次要版本的发布（例如，`3.0` 分支会维护到 WeDot 3.1 的发布）。如果你希望对维护的稳定分支进行合并请求，请首先检查这些更改是否也适用于 `main` 分支，如果是，请优先为 `main` 分支提交合并请求。发布管理人员可以将修复程序 cherry-pick 到稳定分支。
- 偶尔会有特性分支，通常计划在某个时间点合并到 `main` 分支。

## Fork 和 Clone

第一步是 *fork* [Wedot-Engine/WeDot](https://github.com/Wedot-Engine/WeDot) 仓库。首先 ，你需要有一个 GitHub 账户并登录。在 WeDot 仓库的 GitHub 页面右上角，你应该会看到“Fork”按钮。
点击它，稍后你会被重定向到你自己的 WeDot 仓库的 fork，带有你的 GitHub 用户名作为命名空间，如 `Username/WeDot`。

然后你可以 *clone* 你的fork，即创建在线仓库（在 Git 术语中称为*远端仓库*（*origin*））的本地副本。如果你还没有安装 Git，可以从[它的官网](https://git-scm.com)下载（如果你使用 Windows 或 macOS），或者通过包管理器安装（如果你使用 Linux）。

> **请注意**：如果你使用 Windows，打开 Git Bash 输入命令。macOS 和 Linux 用户可以使用各自的终端。

要从 GitHub 克隆你的 fork，使用以下命令：

```shell
git clone https://github.com/USERNAME/WeDot
```

稍后，你应该会在当前工作目录下看到一个`WeDot`目录。使用`cd`命令进入该目录：

```shell
cd WeDot
```

我们将开始设置一个指向原始仓库的引用：

```shell
git remote add upstream https://github.com/Wedot-Engine/WeDot
git fetch upstream
```

这将创建一个名为 `upstream` 的引用，指向原始的 `Wedot-Engine/WeDot` 仓库。当你想从其 `main` 分支拉取新提交以更新你的fork 时，这将非常有用。你还有一个名为 `origin` 的远程引用，指向你的 fork（`USERNAME/WeDot`）。

你只需要做一次上述步骤，只要你保留该本地 `WeDot` 文件夹（你可以移动它，相关元数据隐藏在其`.git`子文件夹中）。

> ”啥玩意啊？为什么运行网上教程复制的命令报错了？“
> 由于每台计算机的环境和所处环境的不同，这种情况常常发生，不妨去问问搜索引擎和 AI 吧。

接下来我要举一个例子，请假设你要在 WeDot 的项目管理器中实现一个功能，该功能位于 `editor/project_manager.cpp` 文件中。

## 分支

默认情况下，`git clone` 应该会将你放在你的 fork（`origin`）的 `main` 分支上。
开始你自己的功能开发时，需要创建一个功能分支：

```shell
# 基于当前分支（main）创建分支
git branch better-project-manager

# 切换到新分支
git checkout better-project-manager
```

这个命令是等效的：

```shell
# 切换到基于当前分支的新命名分支
git checkout -b better-project-manager
```

如果你想切换回 `main` 分支，可以使用：

```shell
git checkout main
```

你可以使用`git branch`命令查看当前所在的分支：

```shell
# 星号表示当前所在分支
git branch
  2.1
* better-project-manager
  main
```

确保每一次在创建新分支之前回到 `main` 分支，因为你的新分支会基于当前分支将创建。
除非你在运行命令时在新分支名称后指定基础分支名称：

```shell
git checkout -b my-new-feature main
```

## 更新你的分支

第一次（刚 fork 上游仓库后）不需要这样做。然而，下次你想工作时，你会发现你的 fork 的 `main` 分支比上游 `main` 分支落后几个提交：其他贡献者的合并请求已经被合并。

为了确保你开发的功能与当前上游 `main` 分支之间不会发生冲突，你需要通过*拉取*（*pull*）上游分支来更新你的分支。

```shell
git pull --rebase upstream main
```

`--rebase` 参数确保你提交的任何本地更改都会被重新应用到拉取的分支的*顶部*，这是我们合并请求工作流中明确需要的。这样，当你打开一个合并请求时，你的提交将是与上游 `main` 分支唯一的差异。

在变基（rebase）过程中，如果你的提交修改了同时在上游分支中被修改的代码，可能会出现冲突。
如果这种情况发生了，Git 会在冲突的提交上停止，并要求你解决冲突。你可以使用任何文本编辑器解决冲突，然后提交更改（下文详细介绍），并继续执行 `git rebase --continue`。如果有多个后续提交也有冲突，重复此操作，直到变基操作完成。

如果你不确定变基过程中发生了什么并且感到恐慌（莫担心，我们刚开始时都会这样），你可以使用 `git rebase --abort` 中止变基。你将回到调用 `git pull --rebase` 之前的原始状态。

> **注意**：如果你省略了 `--rebase` 参数，你将创建一个合并提交，告诉 Git 如何处理两个不同的分支。如果有冲突，它们将通过这个合并提交一次性解决。
>
> 虽然这是有效的工作流，也是 `git pull` 的默认行为，但在我们的合并请求工作流中，我们不接受合并请求内的合并提交。我们只在将合并请求合并到上游分支时使用它。
>
> 我们的理念是，合并请求应该代表代码库更改的最终阶段，我们不需要记录在合并前的中间阶段所做的错误和修复。Git 用来“覆写历史”是极好的，让提交看起来像是我们一开始就做对了，以确保更改在合并后易于审核和理解。

如果你已经创建了一个没有使用 `rebase` 的合并提交，或者由于其他原因导致历史记录出现问题，最好的选择是在上游分支上使用*交互式变基*。请参阅[《关于交互式变基》](#交互式变基)。

> 如果你任何时候想*重置*一个本地分支到给定的提交或分支，可以使用 `git reset --hard <commit ID>` 或 `git reset --hard <remote>/<branch>`（例如 `git reset --hard upstream/main`）。
>
> 请**注意**，这将删除你在该分支中提交的所有更改。如果你把提交搞没了，可以使用 `git reflog` 命令找到你想要恢复的先前状态的提交 ID，然后将其作为 `git reset --hard` 的参数使用，以返回到该状态。

## 进行更改

你可以使用常用的开发环境（文本编辑器、IDE 等）对示例中的 `editor/project_manager.cpp` 文件进行更改。

默认情况下，这些更改是*未暂存*的。暂存区是一个介于你的工作目录（你进行修改的地方）和本地 Git 仓库（提交和所有元数据在 `.git` 文件夹中）之间的层。要将更改从工作目录带到 Git 仓库，需要使用 `git add` 命令*暂存*它们，然后使用 `git commit` 命令提交它们。

有一些命令可以帮助你审核当前的工作，包括暂存前、暂存中和提交后的更改。

- `git diff` 将显示当前未暂存的更改，即工作目录和暂存区之间的差异。
- `git checkout -- <files>` 将撤销给定文件的未暂存更改。
- `git add <files>` 将*暂存*列出的文件的更改。
- `git diff --staged` 将显示当前暂存的更改，即暂存区和上次提交之间的差异。
- `git reset HEAD <files>` 将*取消暂存*列出文件的更改。
- `git status` 将显示当前已暂存和未暂存的更改。
- `git commit` 将提交暂存的文件。它将打开一个文本编辑器（你可以通过`GIT_EDITOR`环境变量或`core.editor`设置在Git配置中定义你想要使用的编辑器），让你编写提交信息。你可以使用`git commit -m "【类型，范围】摘要"`直接编写信息。需要注意的是，我们的提交信息格式需要遵守 [PJ568 提交说明规范](https://github.com/PJ-568/git-commit-regulation)。
- `git commit --amend` 允许你修改最近的提交，添加你当前暂存的更改（使用`git add`）。这是修复最近提交中的错误（bug、拼写错误、风格问题等）的最佳选项。
- `git log` 将显示当前分支的最近提交。如果你进行了本地提交，它们应该显示在顶部。
- `git show` 将显示最近的提交更改。你还可以指定一个提交哈希值，以查看该提交的更改。

有很多需要记住的内容！不用担心，当你需要进行更改时，可以随时到这里查看，并通过实践学习。

以下是示例中的 Shell 历史记录可能的样子：

```shell
# 了解你从哪里开始
git log

# 使用 nano 文本编辑器对项目管理器进行更改
nano editor/project_manager.cpp

# 在 Control 中发现一个无关的 bug 并修复
nano scene/gui/control.cpp

# 审核更改
git status
git diff

# 我们将对不相关的更改进行两次提交，
# 从 Control 中必要的更改开始，这些更改对PM增强功能至关重要
git add scene/gui/control.cpp
git commit -m "【修复】修复 Control 的边距"

# 检查我们做得是否正确
git log
git show
git status

# 进行第二次提交
git add editor/project_manager.cpp
git commit -m "【新增】给合并请求oject Manager 更美观的横幅"
git log
```

通过这些操作，我们应该在 `better-project-manager` 分支中有两个新的提交，这些提交不在 `main` 分支中。不过，这些提交仍然只是本地的，远程 fork 不知道它们，上游仓库也不知道。

## 推送更改到远程

这时就需要使用 `git push` 了。在Git中，提交总是在本地仓库中完成（与 Subversion 不同，Subversion 中的提交会直接修改远程仓库）。你需要*推送*新的提交到远程分支，以与世界分享。语法如下：

```shell
git push <remote> <local branch>[:<remote branch>]
```

如果远程分支名称与本地分支相同，可以省略远程分支部分，这是我们示例中的情况，所以我们执行：

```shell
git push origin better-project-manager
```

Git 会要求你输入用户名和密码。不过输入密码时，需要输入你的 GitHub 个人访问令牌（PAT）。如果没有 GitHub 个人访问令牌，或者没有具有新 fork 仓库正确权限的个人访问令牌，就需要创建一个。请按照此链接创建个人访问令牌：[创建个人访问令牌](https://docs.github.com/zh/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token)。

成功验证账户后，更改将发送到远程仓库。如果你在 GitHub 上查看 fork 的页面，应该会看到一个新的分支，其中包含你添加的提交。

## 发起拉取请求

当你在 GitHub 上加载你的 fork 分支时，你应该会看到一行写着“此分支比 WeDotengine:main 领先 2 个提交。”（并且可能落后一些提交，如果你的 `main` 分支与上游 `main` 分支不同步）。

在这行上有一个“Pull request”链接。点击它将打开一个表单，让你在 `Wedot-Engine/WeDot` 上游仓库上发起一个拉取请求。它应该会显示你的两个提交，并显示“Able to merge”。如果不是（例如，它有更多的提交，或说有合并冲突），请不要创建合并请求，这是出问题了。去我们的 [QQ 群组](https://qm.qq.com/cgi-bin/qm/qr?authKey=G%2BR%2FKlLQBeH71b1Mhe4t2gM%2B8rLXndOEPhPtDgWgTudLUtGUgpMrNAWD87x%2F64ta&k=IPTGQ3zH_W8IAzaFrnLLGF2kplhv-EeM&noverify=0&group_code=670915303)寻求支持吧。

在合并请求标题中使用明确的标题，并在评论区域中填写必要的详细信息。你可以拖放截图、GIF 或压缩的项目，以展示你的工作实现了什么。点击“Create a pull request”，大功告成！

## 修改拉取请求

当其他贡献者审核你的尚未合并的合并请求时，你经常需要对其进行修改，无论是因为贡献者请求的修改，还是因为你自己在测试时发现了问题。

此时，你可以通过操作生成合并请求的分支来修改拉取请求。例如，你可以在该分支上创建一个新提交，推送到你的 fork，合并请求将自动更新：

```shell
# 如果你在此期间切换了分支，请再次检出你的分支
git checkout better-project-manager

# 修复错误
nano editor/project_manager.cpp
git add editor/project_manager.cpp
git commit -m "【修复】修复横幅标题的拼写错误"
git push origin better-project-manager
```

但是，需要注意的是，在我们的合并请求工作流中，我们倾向于提交能够将代码库从一个功能状态带到另一个功能状态的提交，而不是包含修复你自己代码或风格问题的中间提交。大多数情况下，我们希望在一个给定的合并请求中只有一个提交（除非有充分的理由将更改分开）。与其创建一个新的提交，不如考虑使用`git commit --amend`将更改合并到上一个提交中。上述示例将变为：

```shell
# 如果你在此期间切换了分支，请再次检出你的分支
git checkout better-project-manager

# 修复错误
nano editor/project_manager.cpp
git add editor/project_manager.cpp
# --amend 将更改上一个提交，因此你有机会编辑其提交消息（如果相关）。
git commit --amend
# 由于我们修改了最后一个提交，它不再与远程分支匹配，因此我们需要强制推送以覆盖该分支。
git push --force origin better-project-manager
```

## 交互式变基

如果未严格按照上述步骤将更改合并到提交中，而是创建了修复提交，或者在不了解我们的工作流程和 Git 使用技巧的情况下编写了代码，审查者可能会要求你对分支进行*变基*以*压缩*某些或所有提交。

确实，如果某些提交是在审查后为了修复原始提交中的错误、拼写错误等而创建的，那么这些提交对于未来的变更信息读者来说并不相关，他们可能想知道 WeDot 代码库中发生了什么，或者某个文件最后一次被修改的时间和方式。

为了将这些额外的提交压缩到主提交中，我们将不得不*重写历史*。你或许听说这样做不好，这在上游仓库的分支上确实是这样。但在你的 fork 中，你可以随意操作，一切都可以为了获得整洁的合并请求而允许。

我们将使用*交互式变基* `git rebase -i` 来完成这一点。此命令接受一个提交 ID 或分支名称作为参数，并允许你修改从该提交或分支到工作分支最后一个提交（即所谓的 `HEAD`）之间的所有提交。

虽然你可以给 `git rebase -i` 提供任何提交 ID 并查看两者之间的所有内容，但最常见和方便的工作流涉及基于上游 `main` 分支进行变基，这可以通过以下命令完成：

```bash
git rebase -i upstream/main
```

> **注意**：在 Git 中引用分支有点棘手，因为存在远程分支和本地分支的区别。这里，`upstream/main`（带 `/`）是一个从 `upstream` 远程的 `main` 分支拉取的本地分支。
>
> 交互式变基只能在本地分支上进行，因此 `/` 在这里很重要。由于上游远程经常变化，你的本地 `upstream/main` 分支可能会过时，所以要用 `git fetch upstream main` 更新。与 `git pull --rebase upstream main` 不同，后者会更新当前检出的分支，`fetch` 只会更新 `upstream/main` 引用（这与你的本地 `main` 分支不同……有点怪吧，但你会慢慢熟悉这些概念）。

这将打开一个文本编辑器（默认是 `vi`，参见 [Git 文档](https://git-scm.com/book/en/v2/Customizing-Git-Git-Configuration#_core_editor)配置你喜欢的编辑器），其中可能显示如下内容：

```text
pick 1b4aad7 【新增】给合并请求oject Manager 更美观的横幅
pick e07077e 【修复】修复横幅标题的拼写错误
```

编辑器还会显示有关如何处理这些提交的说明。它应该会告诉你“pick”意味着保持提交（不做任何操作），而“squash”和“fixup”可用于将提交*合并*到其父提交中。“fixup”和“squash”的区别在于“fixup”会丢弃被压缩提交的信息。在我们的示例中，我们不希望保留“【修复】修复横幅标题的拼写错误”提交的信息，因此我们修改成：

```text
pick 1b4aad7 【新增】给合并请求oject Manager 更美观的横幅
fixup e07077e 【修复】修复横幅标题的拼写错误
```

保存并退出编辑器后，变基会自动处理。第二个提交会被合并到第一个提交中，`git log` 和 `git show` 应该确认你现在只有一个包含两个先前提交更改的提交。

但是！你重写了历史记录，现在你的本地和远程分支已经分叉了。确实，上面示例中的提交 1b4aad7 将发生变化，并更新了提交哈希。如果此时尝试推送远程分支，就会报错：

```bash
git push origin better-project-manager
To https://github.com/UserName/WeDot
 ! [rejected]        better-project-manager -> better-project-manager (non-fast-forward)
error: failed to push some refs to 'https://UserName@github.com/UserName/WeDot'
hint: Updates were rejected because the tip of your current branch is behind
hint: its remote counterpart.
```

一般情况下这符合预期，Git 不会让你推送会覆盖远程内容的更改。但这并非我们想要做的，因此我们需要*强制*推送：

```bash
git push --force origin better-project-manager
```

就这样！Git 将愉快地*替换*掉你的远程分支，使其与你本地的内容一致（因此请确保这就是你想要的，使用 `git log` 确认）。这也将相应地更新合并请求。

## 基于另一个分支进行变基

如果你不小心在错误的分支上打开了合并请求，或者出于某种原因需要针对另一个分支，你可能需要过滤掉旧分支（例如 `4.2`）和新分支（例如 `main`）之间的许多不同提交。这会使变基变得困难和繁琐。幸运的是，`git` 有一个专门用于这种情况的命令，`git rebase --onto`。

如果你的合并请求是从 `4.2` 分支创建的，而你希望将其更新为从 `main` 开始，以下步骤*应该*在一步中解决这个问题：

```text
git rebase -i --onto master 4.2
```

这将获取你分支*后*的所有提交，并将它们拼接到 `main` 之上，忽略 `4.2` 分支中不在 `main` 分支上的提交。你可能仍然需要进行一些修复，但此命令应为你节省大量繁琐的工作，避免删除提交。

就像上面的交互式变基一样，你需要强制推送你的分支以处理不同的更改：

```bash
git push --force origin better-project-manager
```

## 删除分支

在你的拉取请求被合并后，还有一件最后的事情要做：删除你的合并请求分支。不删除分支不会出现问题，但这样做是最符合标准流程。你需要删两次，一次删除本地分支，另一次删除 GitHub 上的远程分支。

要删除我们更好的项目管理器分支本地，使用以下命令：

```bash
git branch -d better-project-manager
```

如果分支尚未合并且你无论如何都想删除它，请使用 `-D` 而非 `-d`。

接下来，要删除 GitHub 上的远程分支，使用以下命令：

```bash
git push origin -d better-project-manager
```

你也可以从 GitHub 合并请求本身删除远程分支，一旦合并请求被合并或关闭，应该会出现一个“安全地删除分支”的按钮。
