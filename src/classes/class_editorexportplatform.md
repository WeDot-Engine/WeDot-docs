<!-- ⚠ 请勿编辑本文件 ⚠ -->
<!-- 本文档使用脚本从 WeDot 引擎源码仓库生成。 -->
<!-- 生成脚本：https://github.com/WeDot-Engine/WeDot/tree/4.3/doc/tools/make_md.py； -->
<!-- 原文件：https://github.com/WeDot-Engine/WeDot/tree/4.3/doc/classes/EditorExportPlatform.xml。 -->

<div id="_class_editorexportplatform"></div>

# EditorExportPlatform

**继承：** [`RefCounted`](class_refcounted.md) **<** [`Object`](class_object.md)

**派生：** [`EditorExportPlatformAndroid`](class_editorexportplatformandroid.md), [`EditorExportPlatformIOS`](class_editorexportplatformios.md), [`EditorExportPlatformMacOS`](class_editorexportplatformmacos.md), [`EditorExportPlatformPC`](class_editorexportplatformpc.md), [`EditorExportPlatformWeb`](class_editorexportplatformweb.md)

Identifies a supported export platform, and internally provides the functionality of exporting to that platform.

## 描述

Base resource that provides the functionality of exporting a release build of a project to a platform, from the editor. Stores platform-specific metadata such as the name and supported features of the platform, and performs the exporting of projects, PCK files, and ZIP files. Uses an export template for the platform provided at the time of project exporting.

Used in scripting by [`EditorExportPlugin`](class_editorexportplugin.md) to configure platform-specific customization of scenes and resources. See [`EditorExportPlugin._begin_customize_scenes`](#class_editorexportplugin_private_method__begin_customize_scenes) and [`EditorExportPlugin._begin_customize_resources`](#class_editorexportplugin_private_method__begin_customize_resources) for more details.

## 方法

| [`String`](class_string.md) | [`get_os_name`](#class_editorexportplatform_method_get_os_name) ( ) const[^const] |

<!-- rst-class:: classref-section-separator -->

---

## 方法说明

<div id="_class_editorexportplatform_method_get_os_name"></div>

[`String`](class_string.md) **get_os_name** ( ) const[^const]<div id="class_editorexportplatform_method_get_os_name"></div>

Returns the name of the export operating system handled by this **EditorExportPlatform** class, as a friendly string. Possible return values are `Windows`, `Linux`, `macOS`, `Android`, `iOS`, and `Web`.

[^virtual]: 本方法通常需要用户覆盖才能生效。
[^const]: 本方法无副作用，不会修改该实例的任何成员变量。
[^vararg]: 本方法除了能接受在此处描述的参数外，还能够继续接受任意数量的参数。
[^constructor]: 本方法用于构造某个类型。
[^static]: 调用本方法无需实例，可直接使用类名进行调用。
[^operator]: 本方法描述的是使用本类型作为左操作数的有效运算符。
[^bitfield]: 这个值是由下列位标志构成位掩码的整数。
[^void]: 无返回值。
