<!-- ⚠ 请勿编辑本文件 ⚠ -->
<!-- 本文档使用脚本从 WeDot 引擎源码仓库生成。 -->
<!-- 生成脚本：https://github.com/WeDot-Engine/WeDot/tree/4.3/doc/tools/make_md.py； -->
<!-- 原文件：https://github.com/WeDot-Engine/WeDot/tree/4.3/doc/classes/ResourceFormatSaver.xml。 -->

<div id="_class_resourceformatsaver"></div>

# ResourceFormatSaver

**继承：** [`RefCounted`](class_refcounted.md) **<** [`Object`](class_object.md)

Saves a specific resource type to a file.

## 描述

The engine can save resources when you do it from the editor, or when you use the [`ResourceSaver`](class_resourcesaver.md) singleton. This is accomplished thanks to multiple **ResourceFormatSaver** s, each handling its own format and called automatically by the engine.

By default, Godot saves resources as `.tres` (text-based), `.res` (binary) or another built-in format, but you can choose to create your own format by extending this class. Be sure to respect the documented return types and values. You should give it a global class name with `class_name` for it to be registered. Like built-in ResourceFormatSavers, it will be called automatically when saving resources of its recognized type(s). You may also implement a [`ResourceFormatLoader`](class_resourceformatloader.md).

## 方法

| [`PackedStringArray`](class_packedstringarray.md) | [`_get_recognized_extensions`](#class_resourceformatsaver_private_method__get_recognized_extensions) ( resource: [`Resource`](class_resource.md) ) virtual[^virtual] const[^const]              |
| [`bool`](class_bool.md)                           | [`_recognize`](#class_resourceformatsaver_private_method__recognize) ( resource: [`Resource`](class_resource.md) ) virtual[^virtual] const[^const]                                              |
| [`bool`](class_bool.md)                           | [`_recognize_path`](#class_resourceformatsaver_private_method__recognize_path) ( resource: [`Resource`](class_resource.md), path: [`String`](class_string.md) ) virtual[^virtual] const[^const] |
| [Error](#enum_@globalscope_error)                 | [`_save`](#class_resourceformatsaver_private_method__save) ( resource: [`Resource`](class_resource.md), path: [`String`](class_string.md), flags: [`int`](class_int.md) ) virtual[^virtual]     |
| [Error](#enum_@globalscope_error)                 | [`_set_uid`](#class_resourceformatsaver_private_method__set_uid) ( path: [`String`](class_string.md), uid: [`int`](class_int.md) ) virtual[^virtual]                                            |

<!-- rst-class:: classref-section-separator -->

---

## 方法说明

<div id="_class_resourceformatsaver_private_method__get_recognized_extensions"></div>

[`PackedStringArray`](class_packedstringarray.md) **_get_recognized_extensions** ( resource: [`Resource`](class_resource.md) ) virtual[^virtual] const[^const]<div id="class_resourceformatsaver_private_method__get_recognized_extensions"></div>

Returns the list of extensions available for saving the resource object, provided it is recognized (see [`_recognize`](#class_resourceformatsaver_private_method__recognize)).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_resourceformatsaver_private_method__recognize"></div>

[`bool`](class_bool.md) **_recognize** ( resource: [`Resource`](class_resource.md) ) virtual[^virtual] const[^const]<div id="class_resourceformatsaver_private_method__recognize"></div>

Returns whether the given resource object can be saved by this saver.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_resourceformatsaver_private_method__recognize_path"></div>

[`bool`](class_bool.md) **_recognize_path** ( resource: [`Resource`](class_resource.md), path: [`String`](class_string.md) ) virtual[^virtual] const[^const]<div id="class_resourceformatsaver_private_method__recognize_path"></div>

Returns `true` if this saver handles a given save path and `false` otherwise.

If this method is not implemented, the default behavior returns whether the path's extension is within the ones provided by [`_get_recognized_extensions`](#class_resourceformatsaver_private_method__get_recognized_extensions).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_resourceformatsaver_private_method__save"></div>

[Error](#enum_@globalscope_error) **_save** ( resource: [`Resource`](class_resource.md), path: [`String`](class_string.md), flags: [`int`](class_int.md) ) virtual[^virtual]<div id="class_resourceformatsaver_private_method__save"></div>

Saves the given resource object to a file at the target `path`. `flags` is a bitmask composed with [SaverFlags](#enum_resourcesaver_saverflags) constants.

Returns [`@GlobalScope.OK`](#class_@globalscope_constant_ok) on success, or an [Error](#enum_@globalscope_error) constant in case of failure.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_resourceformatsaver_private_method__set_uid"></div>

[Error](#enum_@globalscope_error) **_set_uid** ( path: [`String`](class_string.md), uid: [`int`](class_int.md) ) virtual[^virtual]<div id="class_resourceformatsaver_private_method__set_uid"></div>

Sets a new UID for the resource at the given `path`. Returns [`@GlobalScope.OK`](#class_@globalscope_constant_ok) on success, or an [Error](#enum_@globalscope_error) constant in case of failure.

[^virtual]: 本方法通常需要用户覆盖才能生效。
[^const]: 本方法无副作用，不会修改该实例的任何成员变量。
[^vararg]: 本方法除了能接受在此处描述的参数外，还能够继续接受任意数量的参数。
[^constructor]: 本方法用于构造某个类型。
[^static]: 调用本方法无需实例，可直接使用类名进行调用。
[^operator]: 本方法描述的是使用本类型作为左操作数的有效运算符。
[^bitfield]: 这个值是由下列位标志构成位掩码的整数。
[^void]: 无返回值。
