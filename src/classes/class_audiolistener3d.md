<!-- ⚠ 请勿编辑本文件 ⚠ -->
<!-- 本文档使用脚本从 WeDot 引擎源码仓库生成。 -->
<!-- 生成脚本：https://github.com/WeDot-Engine/WeDot/tree/4.3/doc/tools/make_md.py； -->
<!-- 原文件：https://github.com/WeDot-Engine/WeDot/tree/4.3/doc/classes/AudioListener3D.xml。 -->

<div id="_class_audiolistener3d"></div>

# AudioListener3D

**继承：** [`Node3D`](class_node3d.md) **<** [`Node`](class_node.md) **<** [`Object`](class_object.md)

Overrides the location sounds are heard from.

## 描述

Once added to the scene tree and enabled using [`make_current`](#class_audiolistener3d_method_make_current), this node will override the location sounds are heard from. This can be used to listen from a location different from the [`Camera3D`](class_camera3d.md).

## 方法

| `void`                                | [`clear_current`](#class_audiolistener3d_method_clear_current) ( )                                 |
| [`Transform3D`](class_transform3d.md) | [`get_listener_transform`](#class_audiolistener3d_method_get_listener_transform) ( ) const[^const] |
| [`bool`](class_bool.md)               | [`is_current`](#class_audiolistener3d_method_is_current) ( ) const[^const]                         |
| `void`                                | [`make_current`](#class_audiolistener3d_method_make_current) ( )                                   |

<!-- rst-class:: classref-section-separator -->

---

## 方法说明

<div id="_class_audiolistener3d_method_clear_current"></div>

`void` **clear_current** ( )<div id="class_audiolistener3d_method_clear_current"></div>

Disables the listener to use the current camera's listener instead.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_audiolistener3d_method_get_listener_transform"></div>

[`Transform3D`](class_transform3d.md) **get_listener_transform** ( ) const[^const]<div id="class_audiolistener3d_method_get_listener_transform"></div>

Returns the listener's global orthonormalized [`Transform3D`](class_transform3d.md).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_audiolistener3d_method_is_current"></div>

[`bool`](class_bool.md) **is_current** ( ) const[^const]<div id="class_audiolistener3d_method_is_current"></div>

Returns `true` if the listener was made current using [`make_current`](#class_audiolistener3d_method_make_current), `false` otherwise.

 **Note:** There may be more than one AudioListener3D marked as "current" in the scene tree, but only the one that was made current last will be used.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_audiolistener3d_method_make_current"></div>

`void` **make_current** ( )<div id="class_audiolistener3d_method_make_current"></div>

Enables the listener. This will override the current camera's listener.

[^virtual]: 本方法通常需要用户覆盖才能生效。
[^const]: 本方法无副作用，不会修改该实例的任何成员变量。
[^vararg]: 本方法除了能接受在此处描述的参数外，还能够继续接受任意数量的参数。
[^constructor]: 本方法用于构造某个类型。
[^static]: 调用本方法无需实例，可直接使用类名进行调用。
[^operator]: 本方法描述的是使用本类型作为左操作数的有效运算符。
[^bitfield]: 这个值是由下列位标志构成位掩码的整数。
[^void]: 无返回值。
