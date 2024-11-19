# 测试拉取请求

许多人在 GitHub 上开发新功能或修复错误。
为了帮助引擎开发，我们可能会要求您用相关拉取请求代码编译的 WeDot 来测试这些拉取请求。

得益于 GitHub Actions，所有[拉取请求](https://github.com/WeDot-Engine/WeDot/pulls)都有持续构建可用。这些构建让您无需从源代码编译即可尝试拉取请求。

## 下载已编译的构建

您可以通过 GitHub Actions 下载拉取请求构建。由于只有已登录用户可以直接从 GitHub Actions 下载构建，因此具体步骤会因您是否有 GitHub 账户而异。

> **注意**:
> 由于 GitHub Actions 的限制，构建仅在拉取请求最后一次更新后的 90 天内可用。如果您仍然希望本地尝试拉取请求，可以 [从源代码编译拉取请求分支](#从源代码编译拉取请求分支)。

### 如果您有 GitHub 账户

- 打开拉取请求页面。点击页面顶部附近的 **Checks** 标签：

<!-- ![访问 Checks](img/testing_pull_requests_access_checks.webp) -->

- 点击页面右侧的 **Artifacts** 下拉菜单：

<!-- ![Checks Artifacts](img/testing_pull_requests_checks_artifacts.webp) -->

- 在下拉菜单中，点击工件的名称以下载它。如果看不到您要找的平台名称，请滚动查找：

<!-- ![Artifacts 列表](img/testing_pull_requests_checks_artifacts_list.webp) -->

- 解压 ZIP 文件然后运行可执行文件。
  注意，Windows 和 macOS 二进制文件 **未签名**。
  这意味着您可能需要绕过安全警告才能运行可执行文件。
  在 Windows 上，如果您经常测试拉取请求构建，最好在 Windows 安全设置中永久禁用 Windows SmartScreen。
  <!-- TODO：在 macOS 上，请参阅[在 macOS 上运行](doc_running_on_macos)以了解如何绕过 Gatekeeper。 -->

### 如果您没有 GitHub 账户

如果您没有 GitHub 账户且无法注册，可以使用第三方 [nightly.link](https://nightly.link) 服务生成通用下载链接。

- 打开拉取请求页面。点击页面顶部附近的 *fork* 分支名称：

<!-- ![访问 fork](img/testing_pull_requests_access_fork.png) -->

- 现在您在 fork 的分支页面上，点击文件列表顶部的 `.github` 文件夹。
  然后，点击 `.github` 文件夹内的 `workflows` 文件夹。
  点击您希望下载工件的平台的工作流文件。
  *点击文件后*，复制浏览器地址栏中的页面 URL。

- 打开 [nightly.link](https://nightly.link) 网站并将刚刚复制的 URL 粘贴到标题下方的文本字段中 **Paste a GitHub link, get a nightly.link!**。
  粘贴 URL 后，点击右侧的 **Get links**。
  <!-- 如果您粘贴的 URL 格式正确，您应该会看到类似以下页面的内容： -->

<!-- ![nightly.link 页面](img/testing_pull_requests_nightly_link.png) -->

- 点击您希望下载的工件的 URL。

- 解压 ZIP 文件然后运行可执行文件。
  注意，Windows 和 macOS 二进制文件未签名。
  这意味着您可能需要绕过安全警告才能运行可执行文件。
  如果您经常测试拉取请求构建，最好永久禁用 Windows SmartScreen 或 [macOS Gatekeeper](https://disable-gatekeeper.github.io/)。

## 从源代码编译拉取请求分支

对于超过 90 天未更新的拉取请求，或者测试不受 WeDot 的 GitHub Actions 设置支持的平台和配置，可能需要采用此方法。

### 下载压缩的拉取请求分支

- 打开拉取请求页面。点击页面顶部附近的 *fork* 分支名称：

<!-- ![访问 fork](img/testing_pull_requests_access_fork.png) -->

- 现在您在 fork 的分支页面上，点击页面右侧的绿色 **Code** 按钮，然后在下拉菜单中选择 **Download ZIP**：

<!-- ![下载 ZIP](img/testing_pull_requests_fork_zip.png) -->

- 解压 ZIP 文件并按照您操作系统的 [编译](toc-devel-compiling) 指南进行操作。

### 使用 git 检出拉取请求分支

或者，您可以直接使用 git 检出拉取请求：

- 打开拉取请求页面。记下拉取请求*编号*（`PR_NUMBER`和*分支名称*（`BRANCH_NAME`），但不包括用户名。

<!-- ![命令行检出](img/testing_pull_requests_command_line_checkout.webp) -->

- 使用以下模式构造命令：

```sh
git fetch upstream pull/PR_NUMBER/head:BRANCH_NAME
```

<!-- 所以对于上面的拉取请求，实际命令将是：

```sh
# 获取 PR 分支
git fetch upstream pull/48734/head:editor_file_dialog_filter_sort
``` -->

- 一旦拉取请求下载完成，检出其分支：

```sh
git checkout BRANCH_NAME
```

- 并按照您操作系统的[编译]()指南进行操作。
<!-- TODO：https://docs.godotengine.org/en/latest/contributing/development/compiling/index.html -->
