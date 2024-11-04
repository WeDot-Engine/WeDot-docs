<!-- ⚠ 请勿编辑本文件 ⚠ -->
<!-- 本文档使用脚本从 WeDot 引擎源码仓库生成。 -->
<!-- 生成脚本：https://github.com/WeDot-Engine/WeDot/tree/4.3/doc/tools/make_md.py； -->
<!-- 原文件：https://github.com/WeDot-Engine/WeDot/tree/4.3/platform/windows/doc_classes/EditorExportPlatformWindows.xml。 -->

<div id="_class_editorexportplatformwindows"></div>

# EditorExportPlatformWindows

**继承：** [`EditorExportPlatformPC`](class_editorexportplatformpc.md) **<** [`EditorExportPlatform`](class_editorexportplatform.md) **<** [`RefCounted`](class_refcounted.md) **<** [`Object`](class_object.md)

Exporter for Windows.

## 描述

The Windows exporter customizes how a Windows build is handled. In the editor's "Export" window, it is created when adding a new "Windows" preset.

## 属性

| [`String`](class_string.md)                       | [`application/company_name`](#class_editorexportplatformwindows_property_application/company_name)                               |
| [`String`](class_string.md)                       | [`application/console_wrapper_icon`](#class_editorexportplatformwindows_property_application/console_wrapper_icon)               |
| [`String`](class_string.md)                       | [`application/copyright`](#class_editorexportplatformwindows_property_application/copyright)                                     |
| [`bool`](class_bool.md)                           | [`application/d3d12_agility_sdk_multiarch`](#class_editorexportplatformwindows_property_application/d3d12_agility_sdk_multiarch) |
| [`int`](class_int.md)                             | [`application/export_angle`](#class_editorexportplatformwindows_property_application/export_angle)                               |
| [`int`](class_int.md)                             | [`application/export_d3d12`](#class_editorexportplatformwindows_property_application/export_d3d12)                               |
| [`String`](class_string.md)                       | [`application/file_description`](#class_editorexportplatformwindows_property_application/file_description)                       |
| [`String`](class_string.md)                       | [`application/file_version`](#class_editorexportplatformwindows_property_application/file_version)                               |
| [`String`](class_string.md)                       | [`application/icon`](#class_editorexportplatformwindows_property_application/icon)                                               |
| [`int`](class_int.md)                             | [`application/icon_interpolation`](#class_editorexportplatformwindows_property_application/icon_interpolation)                   |
| [`bool`](class_bool.md)                           | [`application/modify_resources`](#class_editorexportplatformwindows_property_application/modify_resources)                       |
| [`String`](class_string.md)                       | [`application/product_name`](#class_editorexportplatformwindows_property_application/product_name)                               |
| [`String`](class_string.md)                       | [`application/product_version`](#class_editorexportplatformwindows_property_application/product_version)                         |
| [`String`](class_string.md)                       | [`application/trademarks`](#class_editorexportplatformwindows_property_application/trademarks)                                   |
| [`String`](class_string.md)                       | [`binary_format/architecture`](#class_editorexportplatformwindows_property_binary_format/architecture)                           |
| [`bool`](class_bool.md)                           | [`binary_format/embed_pck`](#class_editorexportplatformwindows_property_binary_format/embed_pck)                                 |
| [`PackedStringArray`](class_packedstringarray.md) | [`codesign/custom_options`](#class_editorexportplatformwindows_property_codesign/custom_options)                                 |
| [`String`](class_string.md)                       | [`codesign/description`](#class_editorexportplatformwindows_property_codesign/description)                                       |
| [`int`](class_int.md)                             | [`codesign/digest_algorithm`](#class_editorexportplatformwindows_property_codesign/digest_algorithm)                             |
| [`bool`](class_bool.md)                           | [`codesign/enable`](#class_editorexportplatformwindows_property_codesign/enable)                                                 |
| [`String`](class_string.md)                       | [`codesign/identity`](#class_editorexportplatformwindows_property_codesign/identity)                                             |
| [`int`](class_int.md)                             | [`codesign/identity_type`](#class_editorexportplatformwindows_property_codesign/identity_type)                                   |
| [`String`](class_string.md)                       | [`codesign/password`](#class_editorexportplatformwindows_property_codesign/password)                                             |
| [`bool`](class_bool.md)                           | [`codesign/timestamp`](#class_editorexportplatformwindows_property_codesign/timestamp)                                           |
| [`String`](class_string.md)                       | [`codesign/timestamp_server_url`](#class_editorexportplatformwindows_property_codesign/timestamp_server_url)                     |
| [`String`](class_string.md)                       | [`custom_template/debug`](#class_editorexportplatformwindows_property_custom_template/debug)                                     |
| [`String`](class_string.md)                       | [`custom_template/release`](#class_editorexportplatformwindows_property_custom_template/release)                                 |
| [`int`](class_int.md)                             | [`debug/export_console_wrapper`](#class_editorexportplatformwindows_property_debug/export_console_wrapper)                       |
| [`String`](class_string.md)                       | [`ssh_remote_deploy/cleanup_script`](#class_editorexportplatformwindows_property_ssh_remote_deploy/cleanup_script)               |
| [`bool`](class_bool.md)                           | [`ssh_remote_deploy/enabled`](#class_editorexportplatformwindows_property_ssh_remote_deploy/enabled)                             |
| [`String`](class_string.md)                       | [`ssh_remote_deploy/extra_args_scp`](#class_editorexportplatformwindows_property_ssh_remote_deploy/extra_args_scp)               |
| [`String`](class_string.md)                       | [`ssh_remote_deploy/extra_args_ssh`](#class_editorexportplatformwindows_property_ssh_remote_deploy/extra_args_ssh)               |
| [`String`](class_string.md)                       | [`ssh_remote_deploy/host`](#class_editorexportplatformwindows_property_ssh_remote_deploy/host)                                   |
| [`String`](class_string.md)                       | [`ssh_remote_deploy/port`](#class_editorexportplatformwindows_property_ssh_remote_deploy/port)                                   |
| [`String`](class_string.md)                       | [`ssh_remote_deploy/run_script`](#class_editorexportplatformwindows_property_ssh_remote_deploy/run_script)                       |
| [`bool`](class_bool.md)                           | [`texture_format/etc2_astc`](#class_editorexportplatformwindows_property_texture_format/etc2_astc)                               |
| [`bool`](class_bool.md)                           | [`texture_format/s3tc_bptc`](#class_editorexportplatformwindows_property_texture_format/s3tc_bptc)                               |

<!-- rst-class:: classref-section-separator -->

---

## 属性说明

<div id="_class_editorexportplatformwindows_property_application/company_name"></div>

[`String`](class_string.md) **application/company_name** <div id="class_editorexportplatformwindows_property_application/company_name"></div>

Company that produced the application. Required. See [*StringFileInfo*](https://learn.microsoft.com/en-us/windows/win32/menurc/stringfileinfo-block).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatformwindows_property_application/console_wrapper_icon"></div>

[`String`](class_string.md) **application/console_wrapper_icon** <div id="class_editorexportplatformwindows_property_application/console_wrapper_icon"></div>

Console wrapper icon file. If left empty, it will fallback to [`application/icon`](#class_editorexportplatformwindows_property_application/icon), then to [`ProjectSettings.application/config/windows_native_icon`](#class_projectsettings_property_application/config/windows_native_icon), and lastly, [`ProjectSettings.application/config/icon`](#class_projectsettings_property_application/config/icon).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatformwindows_property_application/copyright"></div>

[`String`](class_string.md) **application/copyright** <div id="class_editorexportplatformwindows_property_application/copyright"></div>

Copyright notice for the bundle visible to the user. Optional. See [*StringFileInfo*](https://learn.microsoft.com/en-us/windows/win32/menurc/stringfileinfo-block).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatformwindows_property_application/d3d12_agility_sdk_multiarch"></div>

[`bool`](class_bool.md) **application/d3d12_agility_sdk_multiarch** <div id="class_editorexportplatformwindows_property_application/d3d12_agility_sdk_multiarch"></div>

If `true`, and [`application/export_d3d12`](#class_editorexportplatformwindows_property_application/export_d3d12) is set, the Agility SDK DLLs will be stored in arch-specific subdirectories.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatformwindows_property_application/export_angle"></div>

[`int`](class_int.md) **application/export_angle** <div id="class_editorexportplatformwindows_property_application/export_angle"></div>

If set to `1`, ANGLE libraries are exported with the exported application. If set to `0`, ANGLE libraries are exported only if [`ProjectSettings.rendering/gl_compatibility/driver`](#class_projectsettings_property_rendering/gl_compatibility/driver) is set to `"opengl3_angle"`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatformwindows_property_application/export_d3d12"></div>

[`int`](class_int.md) **application/export_d3d12** <div id="class_editorexportplatformwindows_property_application/export_d3d12"></div>

If set to `1`, the Direct3D 12 runtime libraries (Agility SDK, PIX) are exported with the exported application. If set to `0`, Direct3D 12 libraries are exported only if [`ProjectSettings.rendering/rendering_device/driver`](#class_projectsettings_property_rendering/rendering_device/driver) is set to `"d3d12"`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatformwindows_property_application/file_description"></div>

[`String`](class_string.md) **application/file_description** <div id="class_editorexportplatformwindows_property_application/file_description"></div>

File description to be presented to users. Required. See [*StringFileInfo*](https://learn.microsoft.com/en-us/windows/win32/menurc/stringfileinfo-block).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatformwindows_property_application/file_version"></div>

[`String`](class_string.md) **application/file_version** <div id="class_editorexportplatformwindows_property_application/file_version"></div>

Version number of the file. Falls back to [`ProjectSettings.application/config/version`](#class_projectsettings_property_application/config/version) if left empty. See [*StringFileInfo*](https://learn.microsoft.com/en-us/windows/win32/menurc/stringfileinfo-block).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatformwindows_property_application/icon"></div>

[`String`](class_string.md) **application/icon** <div id="class_editorexportplatformwindows_property_application/icon"></div>

Application icon file. If left empty, it will fallback to [`ProjectSettings.application/config/windows_native_icon`](#class_projectsettings_property_application/config/windows_native_icon), and then to [`ProjectSettings.application/config/icon`](#class_projectsettings_property_application/config/icon).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatformwindows_property_application/icon_interpolation"></div>

[`int`](class_int.md) **application/icon_interpolation** <div id="class_editorexportplatformwindows_property_application/icon_interpolation"></div>

Interpolation method used to resize application icon.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatformwindows_property_application/modify_resources"></div>

[`bool`](class_bool.md) **application/modify_resources** <div id="class_editorexportplatformwindows_property_application/modify_resources"></div>

If enabled, icon and metadata of the exported executable is set according to the other `application/*` values.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatformwindows_property_application/product_name"></div>

[`String`](class_string.md) **application/product_name** <div id="class_editorexportplatformwindows_property_application/product_name"></div>

Name of the application. Required. See [*StringFileInfo*](https://learn.microsoft.com/en-us/windows/win32/menurc/stringfileinfo-block).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatformwindows_property_application/product_version"></div>

[`String`](class_string.md) **application/product_version** <div id="class_editorexportplatformwindows_property_application/product_version"></div>

Application version visible to the user. Falls back to [`ProjectSettings.application/config/version`](#class_projectsettings_property_application/config/version) if left empty. See [*StringFileInfo*](https://learn.microsoft.com/en-us/windows/win32/menurc/stringfileinfo-block).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatformwindows_property_application/trademarks"></div>

[`String`](class_string.md) **application/trademarks** <div id="class_editorexportplatformwindows_property_application/trademarks"></div>

Trademarks and registered trademarks that apply to the file. Optional. See [*StringFileInfo*](https://learn.microsoft.com/en-us/windows/win32/menurc/stringfileinfo-block).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatformwindows_property_binary_format/architecture"></div>

[`String`](class_string.md) **binary_format/architecture** <div id="class_editorexportplatformwindows_property_binary_format/architecture"></div>

Application executable architecture.

Supported architectures: `x86_32`, `x86_64`, and `arm64`.

Official export templates include `x86_32` and `x86_64` binaries only.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatformwindows_property_binary_format/embed_pck"></div>

[`bool`](class_bool.md) **binary_format/embed_pck** <div id="class_editorexportplatformwindows_property_binary_format/embed_pck"></div>

If `true`, project resources are embedded into the executable.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatformwindows_property_codesign/custom_options"></div>

[`PackedStringArray`](class_packedstringarray.md) **codesign/custom_options** <div id="class_editorexportplatformwindows_property_codesign/custom_options"></div>

Array of the additional command line arguments passed to the code signing tool. See [*Sign Tool*](https://learn.microsoft.com/en-us/dotnet/framework/tools/signtool-exe).

**Note:** The returned array is *copied* and any changes to it will not update the original property value. See [`PackedStringArray`](class_packedstringarray.md) for more details.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatformwindows_property_codesign/description"></div>

[`String`](class_string.md) **codesign/description** <div id="class_editorexportplatformwindows_property_codesign/description"></div>

Description of the signed content. See [*Sign Tool*](https://learn.microsoft.com/en-us/dotnet/framework/tools/signtool-exe).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatformwindows_property_codesign/digest_algorithm"></div>

[`int`](class_int.md) **codesign/digest_algorithm** <div id="class_editorexportplatformwindows_property_codesign/digest_algorithm"></div>

Digest algorithm to use for creating signature. See [*Sign Tool*](https://learn.microsoft.com/en-us/dotnet/framework/tools/signtool-exe).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatformwindows_property_codesign/enable"></div>

[`bool`](class_bool.md) **codesign/enable** <div id="class_editorexportplatformwindows_property_codesign/enable"></div>

If `true`, executable signing is enabled.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatformwindows_property_codesign/identity"></div>

[`String`](class_string.md) **codesign/identity** <div id="class_editorexportplatformwindows_property_codesign/identity"></div>

PKCS #12 certificate file used to sign executable or certificate SHA-1 hash (if [`codesign/identity_type`](#class_editorexportplatformwindows_property_codesign/identity_type) is set to "Use certificate store"). See [*Sign Tool*](https://learn.microsoft.com/en-us/dotnet/framework/tools/signtool-exe).

Can be overridden with the environment variable `GODOT_WINDOWS_CODESIGN_IDENTITY`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatformwindows_property_codesign/identity_type"></div>

[`int`](class_int.md) **codesign/identity_type** <div id="class_editorexportplatformwindows_property_codesign/identity_type"></div>

Type of identity to use. See [*Sign Tool*](https://learn.microsoft.com/en-us/dotnet/framework/tools/signtool-exe).

Can be overridden with the environment variable `GODOT_WINDOWS_CODESIGN_IDENTITY_TYPE`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatformwindows_property_codesign/password"></div>

[`String`](class_string.md) **codesign/password** <div id="class_editorexportplatformwindows_property_codesign/password"></div>

Password for the certificate file used to sign executable. See [*Sign Tool*](https://learn.microsoft.com/en-us/dotnet/framework/tools/signtool-exe).

Can be overridden with the environment variable `GODOT_WINDOWS_CODESIGN_PASSWORD`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatformwindows_property_codesign/timestamp"></div>

[`bool`](class_bool.md) **codesign/timestamp** <div id="class_editorexportplatformwindows_property_codesign/timestamp"></div>

If `true`, time-stamp is added to the signature. See [*Sign Tool*](https://learn.microsoft.com/en-us/dotnet/framework/tools/signtool-exe).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatformwindows_property_codesign/timestamp_server_url"></div>

[`String`](class_string.md) **codesign/timestamp_server_url** <div id="class_editorexportplatformwindows_property_codesign/timestamp_server_url"></div>

URL of the time stamp server. If left empty, the default server is used. See [*Sign Tool*](https://learn.microsoft.com/en-us/dotnet/framework/tools/signtool-exe).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatformwindows_property_custom_template/debug"></div>

[`String`](class_string.md) **custom_template/debug** <div id="class_editorexportplatformwindows_property_custom_template/debug"></div>

Path to the custom export template. If left empty, default template is used.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatformwindows_property_custom_template/release"></div>

[`String`](class_string.md) **custom_template/release** <div id="class_editorexportplatformwindows_property_custom_template/release"></div>

Path to the custom export template. If left empty, default template is used.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatformwindows_property_debug/export_console_wrapper"></div>

[`int`](class_int.md) **debug/export_console_wrapper** <div id="class_editorexportplatformwindows_property_debug/export_console_wrapper"></div>

If `true`, a console wrapper executable is exported alongside the main executable, which allows running the project with enabled console output.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatformwindows_property_ssh_remote_deploy/cleanup_script"></div>

[`String`](class_string.md) **ssh_remote_deploy/cleanup_script** <div id="class_editorexportplatformwindows_property_ssh_remote_deploy/cleanup_script"></div>

Script code to execute on the remote host when app is finished.

The following variables can be used in the script:

- `{temp_dir}` - Path of temporary folder on the remote, used to upload app and scripts to.

- `{archive_name}` - Name of the ZIP containing uploaded application.

- `{exe_name}` - Name of application executable.

- `{cmd_args}` - Array of the command line argument for the application.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatformwindows_property_ssh_remote_deploy/enabled"></div>

[`bool`](class_bool.md) **ssh_remote_deploy/enabled** <div id="class_editorexportplatformwindows_property_ssh_remote_deploy/enabled"></div>

Enables remote deploy using SSH/SCP.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatformwindows_property_ssh_remote_deploy/extra_args_scp"></div>

[`String`](class_string.md) **ssh_remote_deploy/extra_args_scp** <div id="class_editorexportplatformwindows_property_ssh_remote_deploy/extra_args_scp"></div>

Array of the additional command line arguments passed to the SCP.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatformwindows_property_ssh_remote_deploy/extra_args_ssh"></div>

[`String`](class_string.md) **ssh_remote_deploy/extra_args_ssh** <div id="class_editorexportplatformwindows_property_ssh_remote_deploy/extra_args_ssh"></div>

Array of the additional command line arguments passed to the SSH.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatformwindows_property_ssh_remote_deploy/host"></div>

[`String`](class_string.md) **ssh_remote_deploy/host** <div id="class_editorexportplatformwindows_property_ssh_remote_deploy/host"></div>

Remote host SSH user name and address, in `user@address` format.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatformwindows_property_ssh_remote_deploy/port"></div>

[`String`](class_string.md) **ssh_remote_deploy/port** <div id="class_editorexportplatformwindows_property_ssh_remote_deploy/port"></div>

Remote host SSH port number.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatformwindows_property_ssh_remote_deploy/run_script"></div>

[`String`](class_string.md) **ssh_remote_deploy/run_script** <div id="class_editorexportplatformwindows_property_ssh_remote_deploy/run_script"></div>

Script code to execute on the remote host when running the app.

The following variables can be used in the script:

- `{temp_dir}` - Path of temporary folder on the remote, used to upload app and scripts to.

- `{archive_name}` - Name of the ZIP containing uploaded application.

- `{exe_name}` - Name of application executable.

- `{cmd_args}` - Array of the command line argument for the application.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatformwindows_property_texture_format/etc2_astc"></div>

[`bool`](class_bool.md) **texture_format/etc2_astc** <div id="class_editorexportplatformwindows_property_texture_format/etc2_astc"></div>

If `true`, project textures are exported in the ETC2/ASTC format.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatformwindows_property_texture_format/s3tc_bptc"></div>

[`bool`](class_bool.md) **texture_format/s3tc_bptc** <div id="class_editorexportplatformwindows_property_texture_format/s3tc_bptc"></div>

If `true`, project textures are exported in the S3TC/BPTC format.

[^virtual]: 本方法通常需要用户覆盖才能生效。
[^const]: 本方法无副作用，不会修改该实例的任何成员变量。
[^vararg]: 本方法除了能接受在此处描述的参数外，还能够继续接受任意数量的参数。
[^constructor]: 本方法用于构造某个类型。
[^static]: 调用本方法无需实例，可直接使用类名进行调用。
[^operator]: 本方法描述的是使用本类型作为左操作数的有效运算符。
[^bitfield]: 这个值是由下列位标志构成位掩码的整数。
[^void]: 无返回值。
