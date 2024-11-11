<!-- ⚠ 请勿编辑本文件 ⚠ -->
<!-- 本文档使用脚本从 WeDot 引擎源码仓库生成。 -->
<!-- 生成脚本：https://github.com/WeDot-Engine/WeDot/tree/master/doc/tools/make_md.py； -->
<!-- 原文件：https://github.com/WeDot-Engine/WeDot/tree/master/doc/classes/GDExtensionManager.xml。 -->

<div id="_class_gdextensionmanager"></div>

# GDExtensionManager

**继承：** [`Object`](class_object.md)

Provides access to GDExtension functionality.

## 描述

The GDExtensionManager loads, initializes, and keeps track of all available [`GDExtension`](class_gdextension.md) libraries in the project.

 **Note:** Do not worry about GDExtension unless you know what you are doing.

## 方法

|||
|:-:|:--|
| [`GDExtension`](class_gdextension.md)             | [`get_extension`](class_gdextensionmanager.md#class_gdextensionmanager_method_get_extension) ( path: [`String`](class_string.md) )                           |
| [`PackedStringArray`](class_packedstringarray.md) | [`get_loaded_extensions`](class_gdextensionmanager.md#class_gdextensionmanager_method_get_loaded_extensions) ( ) const[^const]                               |
| [`bool`](class_bool.md)                           | [`is_extension_loaded`](class_gdextensionmanager.md#class_gdextensionmanager_method_is_extension_loaded) ( path: [`String`](class_string.md) ) const[^const] |
| [LoadStatus](#enum_gdextensionmanager_loadstatus) | [`load_extension`](class_gdextensionmanager.md#class_gdextensionmanager_method_load_extension) ( path: [`String`](class_string.md) )                         |
| [LoadStatus](#enum_gdextensionmanager_loadstatus) | [`reload_extension`](class_gdextensionmanager.md#class_gdextensionmanager_method_reload_extension) ( path: [`String`](class_string.md) )                     |
| [LoadStatus](#enum_gdextensionmanager_loadstatus) | [`unload_extension`](class_gdextensionmanager.md#class_gdextensionmanager_method_unload_extension) ( path: [`String`](class_string.md) )                     |

<!-- rst-class:: classref-section-separator -->

---

## 信号

<div id="_class_class_gdextensionmanager_signal_extension_loaded"></div>

**extension_loaded** ( extension: [`GDExtension`](class_gdextension.md) ) <div id="class_gdextensionmanager_signal_extension_loaded"></div>

Emitted after the editor has finished loading a new extension.

 **Note:** This signal is only emitted in editor builds.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_class_gdextensionmanager_signal_extension_unloading"></div>

**extension_unloading** ( extension: [`GDExtension`](class_gdextension.md) ) <div id="class_gdextensionmanager_signal_extension_unloading"></div>

Emitted before the editor starts unloading an extension.

 **Note:** This signal is only emitted in editor builds.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_class_gdextensionmanager_signal_extensions_reloaded"></div>

**extensions_reloaded** ( ) <div id="class_gdextensionmanager_signal_extensions_reloaded"></div>

Emitted after the editor has finished reloading one or more extensions.

<!-- rst-class:: classref-section-separator -->

---

## 枚举

<div id="_class_enum_gdextensionmanager_loadstatus"></div>

enum **LoadStatus**: <div id="enum_gdextensionmanager_loadstatus"></div>

<div id="_class_gdextensionmanager_constant_load_status_ok"></div>

[LoadStatus](#enum_gdextensionmanager_loadstatus) **LOAD_STATUS_OK** = ``0``

The extension has loaded successfully.

<div id="_class_gdextensionmanager_constant_load_status_failed"></div>

[LoadStatus](#enum_gdextensionmanager_loadstatus) **LOAD_STATUS_FAILED** = ``1``

The extension has failed to load, possibly because it does not exist or has missing dependencies.

<div id="_class_gdextensionmanager_constant_load_status_already_loaded"></div>

[LoadStatus](#enum_gdextensionmanager_loadstatus) **LOAD_STATUS_ALREADY_LOADED** = ``2``

The extension has already been loaded.

<div id="_class_gdextensionmanager_constant_load_status_not_loaded"></div>

[LoadStatus](#enum_gdextensionmanager_loadstatus) **LOAD_STATUS_NOT_LOADED** = ``3``

The extension has not been loaded.

<div id="_class_gdextensionmanager_constant_load_status_needs_restart"></div>

[LoadStatus](#enum_gdextensionmanager_loadstatus) **LOAD_STATUS_NEEDS_RESTART** = ``4``

The extension requires the application to restart to fully load.

<!-- rst-class:: classref-section-separator -->

---

## 方法说明

<div id="_class_gdextensionmanager_method_get_extension"></div>

[`GDExtension`](class_gdextension.md) **get_extension** ( path: [`String`](class_string.md) )<div id="class_gdextensionmanager_method_get_extension"></div>

Returns the [`GDExtension`](class_gdextension.md) at the given file `path`, or `null` if it has not been loaded or does not exist.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_gdextensionmanager_method_get_loaded_extensions"></div>

[`PackedStringArray`](class_packedstringarray.md) **get_loaded_extensions** ( ) const[^const]<div id="class_gdextensionmanager_method_get_loaded_extensions"></div>

Returns the file paths of all currently loaded extensions.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_gdextensionmanager_method_is_extension_loaded"></div>

[`bool`](class_bool.md) **is_extension_loaded** ( path: [`String`](class_string.md) ) const[^const]<div id="class_gdextensionmanager_method_is_extension_loaded"></div>

Returns `true` if the extension at the given file `path` has already been loaded successfully. See also [`get_loaded_extensions`](class_gdextensionmanager.md#class_gdextensionmanager_method_get_loaded_extensions).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_gdextensionmanager_method_load_extension"></div>

[LoadStatus](#enum_gdextensionmanager_loadstatus) **load_extension** ( path: [`String`](class_string.md) )<div id="class_gdextensionmanager_method_load_extension"></div>

Loads an extension by absolute file path. The `path` needs to point to a valid [`GDExtension`](class_gdextension.md). Returns [`LOAD_STATUS_OK`](class_gdextensionmanager.md#class_gdextensionmanager_constant_load_status_ok) if successful.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_gdextensionmanager_method_reload_extension"></div>

[LoadStatus](#enum_gdextensionmanager_loadstatus) **reload_extension** ( path: [`String`](class_string.md) )<div id="class_gdextensionmanager_method_reload_extension"></div>

Reloads the extension at the given file path. The `path` needs to point to a valid [`GDExtension`](class_gdextension.md), otherwise this method may return either [`LOAD_STATUS_NOT_LOADED`](class_gdextensionmanager.md#class_gdextensionmanager_constant_load_status_not_loaded) or [`LOAD_STATUS_FAILED`](class_gdextensionmanager.md#class_gdextensionmanager_constant_load_status_failed).

 **Note:** You can only reload extensions in the editor. In release builds, this method always fails and returns [`LOAD_STATUS_FAILED`](class_gdextensionmanager.md#class_gdextensionmanager_constant_load_status_failed).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_gdextensionmanager_method_unload_extension"></div>

[LoadStatus](#enum_gdextensionmanager_loadstatus) **unload_extension** ( path: [`String`](class_string.md) )<div id="class_gdextensionmanager_method_unload_extension"></div>

Unloads an extension by file path. The `path` needs to point to an already loaded [`GDExtension`](class_gdextension.md), otherwise this method returns [`LOAD_STATUS_NOT_LOADED`](class_gdextensionmanager.md#class_gdextensionmanager_constant_load_status_not_loaded).

[^virtual]: 本方法通常需要用户覆盖才能生效。
[^const]: 本方法无副作用，不会修改该实例的任何成员变量。
[^vararg]: 本方法除了能接受在此处描述的参数外，还能够继续接受任意数量的参数。
[^constructor]: 本方法用于构造某个类型。
[^static]: 调用本方法无需实例，可直接使用类名进行调用。
[^operator]: 本方法描述的是使用本类型作为左操作数的有效运算符。
[^bitfield]: 这个值是由下列位标志构成位掩码的整数。
[^void]: 无返回值。
