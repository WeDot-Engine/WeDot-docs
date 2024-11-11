<!-- ⚠ 请勿编辑本文件 ⚠ -->
<!-- 本文档使用脚本从 WeDot 引擎源码仓库生成。 -->
<!-- 生成脚本：https://github.com/WeDot-Engine/WeDot/tree/master/doc/tools/make_md.py； -->
<!-- 原文件：https://github.com/WeDot-Engine/WeDot/tree/master/platform/linuxbsd/doc_classes/EditorExportPlatformLinuxBSD.xml。 -->

<div id="_class_editorexportplatformlinuxbsd"></div>

# EditorExportPlatformLinuxBSD

**继承：** [`EditorExportPlatformPC`](class_editorexportplatformpc.md) **<** [`EditorExportPlatform`](class_editorexportplatform.md) **<** [`RefCounted`](class_refcounted.md) **<** [`Object`](class_object.md)

Exporter for Linux/BSD.

## 属性

|||
|:-:|:--|
| [`String`](class_string.md) | [`binary_format/architecture`](class_editorexportplatformlinuxbsd.md#class_editorexportplatformlinuxbsd_property_binary_format/architecture)             |
| [`bool`](class_bool.md)     | [`binary_format/embed_pck`](class_editorexportplatformlinuxbsd.md#class_editorexportplatformlinuxbsd_property_binary_format/embed_pck)                   |
| [`String`](class_string.md) | [`custom_template/debug`](class_editorexportplatformlinuxbsd.md#class_editorexportplatformlinuxbsd_property_custom_template/debug)                       |
| [`String`](class_string.md) | [`custom_template/release`](class_editorexportplatformlinuxbsd.md#class_editorexportplatformlinuxbsd_property_custom_template/release)                   |
| [`int`](class_int.md)       | [`debug/export_console_wrapper`](class_editorexportplatformlinuxbsd.md#class_editorexportplatformlinuxbsd_property_debug/export_console_wrapper)         |
| [`String`](class_string.md) | [`ssh_remote_deploy/cleanup_script`](class_editorexportplatformlinuxbsd.md#class_editorexportplatformlinuxbsd_property_ssh_remote_deploy/cleanup_script) |
| [`bool`](class_bool.md)     | [`ssh_remote_deploy/enabled`](class_editorexportplatformlinuxbsd.md#class_editorexportplatformlinuxbsd_property_ssh_remote_deploy/enabled)               |
| [`String`](class_string.md) | [`ssh_remote_deploy/extra_args_scp`](class_editorexportplatformlinuxbsd.md#class_editorexportplatformlinuxbsd_property_ssh_remote_deploy/extra_args_scp) |
| [`String`](class_string.md) | [`ssh_remote_deploy/extra_args_ssh`](class_editorexportplatformlinuxbsd.md#class_editorexportplatformlinuxbsd_property_ssh_remote_deploy/extra_args_ssh) |
| [`String`](class_string.md) | [`ssh_remote_deploy/host`](class_editorexportplatformlinuxbsd.md#class_editorexportplatformlinuxbsd_property_ssh_remote_deploy/host)                     |
| [`String`](class_string.md) | [`ssh_remote_deploy/port`](class_editorexportplatformlinuxbsd.md#class_editorexportplatformlinuxbsd_property_ssh_remote_deploy/port)                     |
| [`String`](class_string.md) | [`ssh_remote_deploy/run_script`](class_editorexportplatformlinuxbsd.md#class_editorexportplatformlinuxbsd_property_ssh_remote_deploy/run_script)         |
| [`bool`](class_bool.md)     | [`texture_format/etc2_astc`](class_editorexportplatformlinuxbsd.md#class_editorexportplatformlinuxbsd_property_texture_format/etc2_astc)                 |
| [`bool`](class_bool.md)     | [`texture_format/s3tc_bptc`](class_editorexportplatformlinuxbsd.md#class_editorexportplatformlinuxbsd_property_texture_format/s3tc_bptc)                 |

<!-- rst-class:: classref-section-separator -->

---

## 属性说明

<div id="_class_editorexportplatformlinuxbsd_property_binary_format/architecture"></div>

[`String`](class_string.md) **binary_format/architecture** <div id="class_editorexportplatformlinuxbsd_property_binary_format/architecture"></div>

Application executable architecture.

Supported architectures: `x86_32`, `x86_64`, `arm64`, `arm32`, `rv64`, `ppc64`, and `ppc32`.

Official export templates include `x86_32` and `x86_64` binaries only.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatformlinuxbsd_property_binary_format/embed_pck"></div>

[`bool`](class_bool.md) **binary_format/embed_pck** <div id="class_editorexportplatformlinuxbsd_property_binary_format/embed_pck"></div>

If `true`, project resources are embedded into the executable.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatformlinuxbsd_property_custom_template/debug"></div>

[`String`](class_string.md) **custom_template/debug** <div id="class_editorexportplatformlinuxbsd_property_custom_template/debug"></div>

Path to the custom export template. If left empty, default template is used.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatformlinuxbsd_property_custom_template/release"></div>

[`String`](class_string.md) **custom_template/release** <div id="class_editorexportplatformlinuxbsd_property_custom_template/release"></div>

Path to the custom export template. If left empty, default template is used.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatformlinuxbsd_property_debug/export_console_wrapper"></div>

[`int`](class_int.md) **debug/export_console_wrapper** <div id="class_editorexportplatformlinuxbsd_property_debug/export_console_wrapper"></div>

If `true`, a console wrapper is exported alongside the main executable, which allows running the project with enabled console output.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatformlinuxbsd_property_ssh_remote_deploy/cleanup_script"></div>

[`String`](class_string.md) **ssh_remote_deploy/cleanup_script** <div id="class_editorexportplatformlinuxbsd_property_ssh_remote_deploy/cleanup_script"></div>

Script code to execute on the remote host when app is finished.

The following variables can be used in the script:

- `{temp_dir}` - Path of temporary folder on the remote, used to upload app and scripts to.

- `{archive_name}` - Name of the ZIP containing uploaded application.

- `{exe_name}` - Name of application executable.

- `{cmd_args}` - Array of the command line argument for the application.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatformlinuxbsd_property_ssh_remote_deploy/enabled"></div>

[`bool`](class_bool.md) **ssh_remote_deploy/enabled** <div id="class_editorexportplatformlinuxbsd_property_ssh_remote_deploy/enabled"></div>

Enables remote deploy using SSH/SCP.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatformlinuxbsd_property_ssh_remote_deploy/extra_args_scp"></div>

[`String`](class_string.md) **ssh_remote_deploy/extra_args_scp** <div id="class_editorexportplatformlinuxbsd_property_ssh_remote_deploy/extra_args_scp"></div>

Array of the additional command line arguments passed to the SCP.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatformlinuxbsd_property_ssh_remote_deploy/extra_args_ssh"></div>

[`String`](class_string.md) **ssh_remote_deploy/extra_args_ssh** <div id="class_editorexportplatformlinuxbsd_property_ssh_remote_deploy/extra_args_ssh"></div>

Array of the additional command line arguments passed to the SSH.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatformlinuxbsd_property_ssh_remote_deploy/host"></div>

[`String`](class_string.md) **ssh_remote_deploy/host** <div id="class_editorexportplatformlinuxbsd_property_ssh_remote_deploy/host"></div>

Remote host SSH user name and address, in `user@address` format.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatformlinuxbsd_property_ssh_remote_deploy/port"></div>

[`String`](class_string.md) **ssh_remote_deploy/port** <div id="class_editorexportplatformlinuxbsd_property_ssh_remote_deploy/port"></div>

Remote host SSH port number.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatformlinuxbsd_property_ssh_remote_deploy/run_script"></div>

[`String`](class_string.md) **ssh_remote_deploy/run_script** <div id="class_editorexportplatformlinuxbsd_property_ssh_remote_deploy/run_script"></div>

Script code to execute on the remote host when running the app.

The following variables can be used in the script:

- `{temp_dir}` - Path of temporary folder on the remote, used to upload app and scripts to.

- `{archive_name}` - Name of the ZIP containing uploaded application.

- `{exe_name}` - Name of application executable.

- `{cmd_args}` - Array of the command line argument for the application.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatformlinuxbsd_property_texture_format/etc2_astc"></div>

[`bool`](class_bool.md) **texture_format/etc2_astc** <div id="class_editorexportplatformlinuxbsd_property_texture_format/etc2_astc"></div>

If `true`, project textures are exported in the ETC2/ASTC format.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatformlinuxbsd_property_texture_format/s3tc_bptc"></div>

[`bool`](class_bool.md) **texture_format/s3tc_bptc** <div id="class_editorexportplatformlinuxbsd_property_texture_format/s3tc_bptc"></div>

If `true`, project textures are exported in the S3TC/BPTC format.

[^virtual]: 本方法通常需要用户覆盖才能生效。
[^const]: 本方法无副作用，不会修改该实例的任何成员变量。
[^vararg]: 本方法除了能接受在此处描述的参数外，还能够继续接受任意数量的参数。
[^constructor]: 本方法用于构造某个类型。
[^static]: 调用本方法无需实例，可直接使用类名进行调用。
[^operator]: 本方法描述的是使用本类型作为左操作数的有效运算符。
[^bitfield]: 这个值是由下列位标志构成位掩码的整数。
[^void]: 无返回值。
