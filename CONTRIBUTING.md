# 贡献指北

## 目录结构

`/assets/`: 存放附加的 javascript 和 CSS 文件。
`/home/`: 存放 WeDot 文档网页主页。
`/override/`: 存放文档编译后用来覆盖已编译文件的文件。
`/scripts/`: 实用脚本。
`/src/`: 文档源文件。WeDot 文档网页中的所有内容都在这里。
`/theme/`: 网页的主题相关文件。
`/book.toml`: 配置文件。
`/build.bash`: 构建总脚本。

## 项目版本管理

本仓库版本跟随 [WeDot 引擎](https://github.com/WeDot-Engine/WeDot)提升。

## 提交信息格式

提交信息应遵循 [PJ568 提交说明规范](https://github.com/PJ-568/git-commit-regulation)。

<!-- ### 范围

|内容|描述|
|:-:|:--|
|部署|当维护或更改部署方案时。|
|提案|当在 `src/` 添加一条 To-Do 项时。|
|信息|当更改自述文件、贡献指北等描述本仓库项目信息时。| -->

## 提交更改

> **暂定**：以下参考尚未完善。

1. 确保您已安装 [mdbook](https://github.com/rust-lang/mdBook)；
2. Fork 此仓库，对文档或代码进行更改，并检查语法是否存在任何问题；
3. 在仓库下执行 `mdbook build && mdbook test`、`mdbook serve` 命令，检查生成的 HTML 是否存在任何问题；
4. 将更改推送到您的分支，并向我们的仓库提交拉取请求；
5. 我们将定期审查拉取请求，并告知您我们的问题以及在合并您的拉取请求之前需要进行的任何更改；
6. 请您在 15 日内作出回应，之后若没有活动，您的拉取请求可能会被关闭；
