<!-- ⚠ 请勿编辑本文件 ⚠ -->
<!-- 本文档使用脚本从 WeDot 引擎源码仓库生成。 -->
<!-- 生成脚本：https://github.com/WeDot-Engine/WeDot/tree/master/doc/tools/make_md.py； -->
<!-- 原文件：https://github.com/WeDot-Engine/WeDot/tree/master/doc/classes/EditorFileSystem.xml。 -->

<div id="_class_editorfilesystem"></div>

# EditorFileSystem

**继承：** [`Node`](class_node.md) **<** [`Object`](class_object.md)

Resource filesystem, as the editor sees it.

## 描述

This object holds information of all resources in the filesystem, their types, etc.

 **Note:** This class shouldn't be instantiated directly. Instead, access the singleton using [`EditorInterface.get_resource_filesystem`](class_editorinterface.md#class_editorinterface_method_get_resource_filesystem).

## 方法

|||
|:-:|:--|
| [`String`](class_string.md)                                       | [`get_file_type`](class_editorfilesystem.md#class_editorfilesystem_method_get_file_type) ( path: [`String`](class_string.md) ) const[^const]            |
| [`EditorFileSystemDirectory`](class_editorfilesystemdirectory.md) | [`get_filesystem`](class_editorfilesystem.md#class_editorfilesystem_method_get_filesystem) ( )                                                          |
| [`EditorFileSystemDirectory`](class_editorfilesystemdirectory.md) | [`get_filesystem_path`](class_editorfilesystem.md#class_editorfilesystem_method_get_filesystem_path) ( path: [`String`](class_string.md) )              |
| [`float`](class_float.md)                                         | [`get_scanning_progress`](class_editorfilesystem.md#class_editorfilesystem_method_get_scanning_progress) ( ) const[^const]                              |
| [`bool`](class_bool.md)                                           | [`is_scanning`](class_editorfilesystem.md#class_editorfilesystem_method_is_scanning) ( ) const[^const]                                                  |
| `void`                                                            | [`reimport_files`](class_editorfilesystem.md#class_editorfilesystem_method_reimport_files) ( files: [`PackedStringArray`](class_packedstringarray.md) ) |
| `void`                                                            | [`scan`](class_editorfilesystem.md#class_editorfilesystem_method_scan) ( )                                                                              |
| `void`                                                            | [`scan_sources`](class_editorfilesystem.md#class_editorfilesystem_method_scan_sources) ( )                                                              |
| `void`                                                            | [`update_file`](class_editorfilesystem.md#class_editorfilesystem_method_update_file) ( path: [`String`](class_string.md) )                              |

<!-- rst-class:: classref-section-separator -->

---

## 信号

<div id="_class_class_editorfilesystem_signal_filesystem_changed"></div>

**filesystem_changed** ( ) <div id="class_editorfilesystem_signal_filesystem_changed"></div>

Emitted if the filesystem changed.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_class_editorfilesystem_signal_resources_reimported"></div>

**resources_reimported** ( resources: [`PackedStringArray`](class_packedstringarray.md) ) <div id="class_editorfilesystem_signal_resources_reimported"></div>

Emitted if a resource is reimported.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_class_editorfilesystem_signal_resources_reimporting"></div>

**resources_reimporting** ( resources: [`PackedStringArray`](class_packedstringarray.md) ) <div id="class_editorfilesystem_signal_resources_reimporting"></div>

Emitted before a resource is reimported.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_class_editorfilesystem_signal_resources_reload"></div>

**resources_reload** ( resources: [`PackedStringArray`](class_packedstringarray.md) ) <div id="class_editorfilesystem_signal_resources_reload"></div>

Emitted if at least one resource is reloaded when the filesystem is scanned.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_class_editorfilesystem_signal_script_classes_updated"></div>

**script_classes_updated** ( ) <div id="class_editorfilesystem_signal_script_classes_updated"></div>

Emitted when the list of global script classes gets updated.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_class_editorfilesystem_signal_sources_changed"></div>

**sources_changed** ( exist: [`bool`](class_bool.md) ) <div id="class_editorfilesystem_signal_sources_changed"></div>

Emitted if the source of any imported file changed.

<!-- rst-class:: classref-section-separator -->

---

## 方法说明

<div id="_class_editorfilesystem_method_get_file_type"></div>

[`String`](class_string.md) **get_file_type** ( path: [`String`](class_string.md) ) const[^const]<div id="class_editorfilesystem_method_get_file_type"></div>

Returns the resource type of the file, given the full path. This returns a string such as `"Resource"` or `"GDScript"`, *not* a file extension such as `".gd"`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorfilesystem_method_get_filesystem"></div>

[`EditorFileSystemDirectory`](class_editorfilesystemdirectory.md) **get_filesystem** ( )<div id="class_editorfilesystem_method_get_filesystem"></div>

Gets the root directory object.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorfilesystem_method_get_filesystem_path"></div>

[`EditorFileSystemDirectory`](class_editorfilesystemdirectory.md) **get_filesystem_path** ( path: [`String`](class_string.md) )<div id="class_editorfilesystem_method_get_filesystem_path"></div>

Returns a view into the filesystem at `path`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorfilesystem_method_get_scanning_progress"></div>

[`float`](class_float.md) **get_scanning_progress** ( ) const[^const]<div id="class_editorfilesystem_method_get_scanning_progress"></div>

Returns the scan progress for 0 to 1 if the FS is being scanned.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorfilesystem_method_is_scanning"></div>

[`bool`](class_bool.md) **is_scanning** ( ) const[^const]<div id="class_editorfilesystem_method_is_scanning"></div>

Returns `true` if the filesystem is being scanned.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorfilesystem_method_reimport_files"></div>

`void` **reimport_files** ( files: [`PackedStringArray`](class_packedstringarray.md) )<div id="class_editorfilesystem_method_reimport_files"></div>

Reimports a set of files. Call this if these files or their `.import` files were directly edited by script or an external program.

If the file type changed or the file was newly created, use [`update_file`](class_editorfilesystem.md#class_editorfilesystem_method_update_file) or [`scan`](class_editorfilesystem.md#class_editorfilesystem_method_scan).

 **Note:** This function blocks until the import is finished. However, the main loop iteration, including timers and [`Node._process`](class_node.md#class_node_private_method__process), will occur during the import process due to progress bar updates. Avoid calls to [`reimport_files`](class_editorfilesystem.md#class_editorfilesystem_method_reimport_files) or [`scan`](class_editorfilesystem.md#class_editorfilesystem_method_scan) while an import is in progress.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorfilesystem_method_scan"></div>

`void` **scan** ( )<div id="class_editorfilesystem_method_scan"></div>

Scan the filesystem for changes.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorfilesystem_method_scan_sources"></div>

`void` **scan_sources** ( )<div id="class_editorfilesystem_method_scan_sources"></div>

Check if the source of any imported resource changed.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorfilesystem_method_update_file"></div>

`void` **update_file** ( path: [`String`](class_string.md) )<div id="class_editorfilesystem_method_update_file"></div>

Add a file in an existing directory, or schedule file information to be updated on editor restart. Can be used to update text files saved by an external program.

This will not import the file. To reimport, call [`reimport_files`](class_editorfilesystem.md#class_editorfilesystem_method_reimport_files) or [`scan`](class_editorfilesystem.md#class_editorfilesystem_method_scan) methods.

[^virtual]: 本方法通常需要用户覆盖才能生效。
[^const]: 本方法无副作用，不会修改该实例的任何成员变量。
[^vararg]: 本方法除了能接受在此处描述的参数外，还能够继续接受任意数量的参数。
[^constructor]: 本方法用于构造某个类型。
[^static]: 调用本方法无需实例，可直接使用类名进行调用。
[^operator]: 本方法描述的是使用本类型作为左操作数的有效运算符。
[^bitfield]: 这个值是由下列位标志构成位掩码的整数。
[^void]: 无返回值。
