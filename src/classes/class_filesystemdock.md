<!-- ⚠ 请勿编辑本文件 ⚠ -->
<!-- 本文档使用脚本从 WeDot 引擎源码仓库生成。 -->
<!-- 生成脚本：https://github.com/WeDot-Engine/WeDot/tree/master/doc/tools/make_md.py； -->
<!-- 原文件：https://github.com/WeDot-Engine/WeDot/tree/master/doc/classes/FileSystemDock.xml。 -->

<div id="_class_filesystemdock"></div>

# FileSystemDock

**继承：** [`VBoxContainer`](class_vboxcontainer.md) **<** [`BoxContainer`](class_boxcontainer.md) **<** [`Container`](class_container.md) **<** [`Control`](class_control.md) **<** [`CanvasItem`](class_canvasitem.md) **<** [`Node`](class_node.md) **<** [`Object`](class_object.md)

Godot editor's dock for managing files in the project.

## 描述

This class is available only in [`EditorPlugin`](class_editorplugin.md) s and can't be instantiated. You can access it using [`EditorInterface.get_file_system_dock`](class_editorinterface.md#class_editorinterface_method_get_file_system_dock).

While **FileSystemDock** doesn't expose any methods for file manipulation, it can listen for various file-related signals.

## 方法

|||
|:-:|:--|
| `void` | [`add_resource_tooltip_plugin`](class_filesystemdock.md#class_filesystemdock_method_add_resource_tooltip_plugin) ( plugin: [`EditorResourceTooltipPlugin`](class_editorresourcetooltipplugin.md) )       |
| `void` | [`navigate_to_path`](class_filesystemdock.md#class_filesystemdock_method_navigate_to_path) ( path: [`String`](class_string.md) )                                                                         |
| `void` | [`remove_resource_tooltip_plugin`](class_filesystemdock.md#class_filesystemdock_method_remove_resource_tooltip_plugin) ( plugin: [`EditorResourceTooltipPlugin`](class_editorresourcetooltipplugin.md) ) |

<!-- rst-class:: classref-section-separator -->

---

## 信号

<div id="_class_class_filesystemdock_signal_display_mode_changed"></div>

**display_mode_changed** ( ) <div id="class_filesystemdock_signal_display_mode_changed"></div>

Emitted when the user switches file display mode or split mode.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_class_filesystemdock_signal_file_removed"></div>

**file_removed** ( file: [`String`](class_string.md) ) <div id="class_filesystemdock_signal_file_removed"></div>

Emitted when the given `file` was removed.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_class_filesystemdock_signal_files_moved"></div>

**files_moved** ( old_file: [`String`](class_string.md), new_file: [`String`](class_string.md) ) <div id="class_filesystemdock_signal_files_moved"></div>

Emitted when a file is moved from `old_file` path to `new_file` path.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_class_filesystemdock_signal_folder_color_changed"></div>

**folder_color_changed** ( ) <div id="class_filesystemdock_signal_folder_color_changed"></div>

Emitted when folders change color.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_class_filesystemdock_signal_folder_moved"></div>

**folder_moved** ( old_folder: [`String`](class_string.md), new_folder: [`String`](class_string.md) ) <div id="class_filesystemdock_signal_folder_moved"></div>

Emitted when a folder is moved from `old_folder` path to `new_folder` path.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_class_filesystemdock_signal_folder_removed"></div>

**folder_removed** ( folder: [`String`](class_string.md) ) <div id="class_filesystemdock_signal_folder_removed"></div>

Emitted when the given `folder` was removed.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_class_filesystemdock_signal_inherit"></div>

**inherit** ( file: [`String`](class_string.md) ) <div id="class_filesystemdock_signal_inherit"></div>

Emitted when a new scene is created that inherits the scene at `file` path.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_class_filesystemdock_signal_instantiate"></div>

**instantiate** ( files: [`PackedStringArray`](class_packedstringarray.md) ) <div id="class_filesystemdock_signal_instantiate"></div>

Emitted when the given scenes are being instantiated in the editor.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_class_filesystemdock_signal_resource_removed"></div>

**resource_removed** ( resource: [`Resource`](class_resource.md) ) <div id="class_filesystemdock_signal_resource_removed"></div>

Emitted when an external `resource` had its file removed.

<!-- rst-class:: classref-section-separator -->

---

## 方法说明

<div id="_class_filesystemdock_method_add_resource_tooltip_plugin"></div>

`void` **add_resource_tooltip_plugin** ( plugin: [`EditorResourceTooltipPlugin`](class_editorresourcetooltipplugin.md) )<div id="class_filesystemdock_method_add_resource_tooltip_plugin"></div>

Registers a new [`EditorResourceTooltipPlugin`](class_editorresourcetooltipplugin.md).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_filesystemdock_method_navigate_to_path"></div>

`void` **navigate_to_path** ( path: [`String`](class_string.md) )<div id="class_filesystemdock_method_navigate_to_path"></div>

Sets the given `path` as currently selected, ensuring that the selected file/directory is visible.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_filesystemdock_method_remove_resource_tooltip_plugin"></div>

`void` **remove_resource_tooltip_plugin** ( plugin: [`EditorResourceTooltipPlugin`](class_editorresourcetooltipplugin.md) )<div id="class_filesystemdock_method_remove_resource_tooltip_plugin"></div>

Removes an [`EditorResourceTooltipPlugin`](class_editorresourcetooltipplugin.md). Fails if the plugin wasn't previously added.

[^virtual]: 本方法通常需要用户覆盖才能生效。
[^const]: 本方法无副作用，不会修改该实例的任何成员变量。
[^vararg]: 本方法除了能接受在此处描述的参数外，还能够继续接受任意数量的参数。
[^constructor]: 本方法用于构造某个类型。
[^static]: 调用本方法无需实例，可直接使用类名进行调用。
[^operator]: 本方法描述的是使用本类型作为左操作数的有效运算符。
[^bitfield]: 这个值是由下列位标志构成位掩码的整数。
[^void]: 无返回值。
