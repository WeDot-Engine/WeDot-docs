<!-- ⚠ 请勿编辑本文件 ⚠ -->
<!-- 本文档使用脚本从 WeDot 引擎源码仓库生成。 -->
<!-- 生成脚本：https://github.com/WeDot-Engine/WeDot/tree/4.3/doc/tools/make_md.py； -->
<!-- 原文件：https://github.com/WeDot-Engine/WeDot/tree/4.3/doc/classes/AudioListener2D.xml。 -->

<div id="_class_audiolistener2d"></div>

# AudioListener2D

**继承：** [`Node2D`](class_node2d.md) **<** [`CanvasItem`](class_canvasitem.md) **<** [`Node`](class_node.md) **<** [`Object`](class_object.md)

Overrides the location sounds are heard from.

## 描述

Once added to the scene tree and enabled using [`make_current`](#class_audiolistener2d_method_make_current), this node will override the location sounds are heard from. Only one **AudioListener2D** can be current. Using [`make_current`](#class_audiolistener2d_method_make_current) will disable the previous **AudioListener2D**.

If there is no active **AudioListener2D** in the current [`Viewport`](class_viewport.md), center of the screen will be used as a hearing point for the audio. **AudioListener2D** needs to be inside [`SceneTree`](class_scenetree.md) to function.

## 方法

| `void`                  | [`clear_current`](#class_audiolistener2d_method_clear_current) ( )         |
| [`bool`](class_bool.md) | [`is_current`](#class_audiolistener2d_method_is_current) ( ) const[^const] |
| `void`                  | [`make_current`](#class_audiolistener2d_method_make_current) ( )           |

<!-- rst-class:: classref-section-separator -->

---

## 方法说明

<div id="_class_audiolistener2d_method_clear_current"></div>

`void` **clear_current** ( )<div id="class_audiolistener2d_method_clear_current"></div>

Disables the **AudioListener2D**. If it's not set as current, this method will have no effect.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_audiolistener2d_method_is_current"></div>

[`bool`](class_bool.md) **is_current** ( ) const[^const]<div id="class_audiolistener2d_method_is_current"></div>

Returns `true` if this **AudioListener2D** is currently active.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_audiolistener2d_method_make_current"></div>

`void` **make_current** ( )<div id="class_audiolistener2d_method_make_current"></div>

Makes the **AudioListener2D** active, setting it as the hearing point for the sounds. If there is already another active **AudioListener2D**, it will be disabled.

This method will have no effect if the **AudioListener2D** is not added to [`SceneTree`](class_scenetree.md).

[^virtual]: 本方法通常需要用户覆盖才能生效。
[^const]: 本方法无副作用，不会修改该实例的任何成员变量。
[^vararg]: 本方法除了能接受在此处描述的参数外，还能够继续接受任意数量的参数。
[^constructor]: 本方法用于构造某个类型。
[^static]: 调用本方法无需实例，可直接使用类名进行调用。
[^operator]: 本方法描述的是使用本类型作为左操作数的有效运算符。
[^bitfield]: 这个值是由下列位标志构成位掩码的整数。
[^void]: 无返回值。
