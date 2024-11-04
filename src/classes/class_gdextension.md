<!-- ⚠ 请勿编辑本文件 ⚠ -->
<!-- 本文档使用脚本从 WeDot 引擎源码仓库生成。 -->
<!-- 生成脚本：https://github.com/WeDot-Engine/WeDot/tree/4.3/doc/tools/make_md.py； -->
<!-- 原文件：https://github.com/WeDot-Engine/WeDot/tree/4.3/doc/classes/GDExtension.xml。 -->

<div id="_class_gdextension"></div>

# GDExtension

**继承：** [`Resource`](class_resource.md) **<** [`RefCounted`](class_refcounted.md) **<** [`Object`](class_object.md)

A native library for GDExtension.

## 描述

The **GDExtension** resource type represents a [*shared library*](https://en.wikipedia.org/wiki/Shared_library) which can expand the functionality of the engine. The [`GDExtensionManager`](class_gdextensionmanager.md) singleton is responsible for loading, reloading, and unloading **GDExtension** resources.

 **Note:** GDExtension itself is not a scripting language and has no relation to [`GDScript`](class_gdscript.md) resources.

## 方法

| [InitializationLevel](#enum_gdextension_initializationlevel) | [`get_minimum_library_initialization_level`](#class_gdextension_method_get_minimum_library_initialization_level) ( ) const[^const] |
| [`bool`](class_bool.md)                                      | [`is_library_open`](#class_gdextension_method_is_library_open) ( ) const[^const]                                                   |

<!-- rst-class:: classref-section-separator -->

---

## 枚举

<div id="_class_enum_gdextension_initializationlevel"></div>

enum **InitializationLevel**: <div id="enum_gdextension_initializationlevel"></div>

<div id="_class_gdextension_constant_initialization_level_core"></div>

[InitializationLevel](#enum_gdextension_initializationlevel) **INITIALIZATION_LEVEL_CORE** = ``0``

The library is initialized at the same time as the core features of the engine.

<div id="_class_gdextension_constant_initialization_level_servers"></div>

[InitializationLevel](#enum_gdextension_initializationlevel) **INITIALIZATION_LEVEL_SERVERS** = ``1``

The library is initialized at the same time as the engine's servers (such as [`RenderingServer`](class_renderingserver.md) or [`PhysicsServer3D`](class_physicsserver3d.md)).

<div id="_class_gdextension_constant_initialization_level_scene"></div>

[InitializationLevel](#enum_gdextension_initializationlevel) **INITIALIZATION_LEVEL_SCENE** = ``2``

The library is initialized at the same time as the engine's scene-related classes.

<div id="_class_gdextension_constant_initialization_level_editor"></div>

[InitializationLevel](#enum_gdextension_initializationlevel) **INITIALIZATION_LEVEL_EDITOR** = ``3``

The library is initialized at the same time as the engine's editor classes. Only happens when loading the GDExtension in the editor.

<!-- rst-class:: classref-section-separator -->

---

## 方法说明

<div id="_class_gdextension_method_get_minimum_library_initialization_level"></div>

[InitializationLevel](#enum_gdextension_initializationlevel) **get_minimum_library_initialization_level** ( ) const[^const]<div id="class_gdextension_method_get_minimum_library_initialization_level"></div>

Returns the lowest level required for this extension to be properly initialized (see the [InitializationLevel](#enum_gdextension_initializationlevel) enum).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_gdextension_method_is_library_open"></div>

[`bool`](class_bool.md) **is_library_open** ( ) const[^const]<div id="class_gdextension_method_is_library_open"></div>

Returns `true` if this extension's library has been opened.

[^virtual]: 本方法通常需要用户覆盖才能生效。
[^const]: 本方法无副作用，不会修改该实例的任何成员变量。
[^vararg]: 本方法除了能接受在此处描述的参数外，还能够继续接受任意数量的参数。
[^constructor]: 本方法用于构造某个类型。
[^static]: 调用本方法无需实例，可直接使用类名进行调用。
[^operator]: 本方法描述的是使用本类型作为左操作数的有效运算符。
[^bitfield]: 这个值是由下列位标志构成位掩码的整数。
[^void]: 无返回值。
