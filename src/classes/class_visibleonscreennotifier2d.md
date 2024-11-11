<!-- ⚠ 请勿编辑本文件 ⚠ -->
<!-- 本文档使用脚本从 WeDot 引擎源码仓库生成。 -->
<!-- 生成脚本：https://github.com/WeDot-Engine/WeDot/tree/master/doc/tools/make_md.py； -->
<!-- 原文件：https://github.com/WeDot-Engine/WeDot/tree/master/doc/classes/VisibleOnScreenNotifier2D.xml。 -->

<div id="_class_visibleonscreennotifier2d"></div>

# VisibleOnScreenNotifier2D

**继承：** [`Node2D`](class_node2d.md) **<** [`CanvasItem`](class_canvasitem.md) **<** [`Node`](class_node.md) **<** [`Object`](class_object.md)

**派生：** [`VisibleOnScreenEnabler2D`](class_visibleonscreenenabler2d.md)

A rectangular region of 2D space that detects whether it is visible on screen.

## 描述

**VisibleOnScreenNotifier2D** represents a rectangular region of 2D space. When any part of this region becomes visible on screen or in a viewport, it will emit a [`screen_entered`](class_visibleonscreennotifier2d.md#class_visibleonscreennotifier2d_signal_screen_entered) signal, and likewise it will emit a [`screen_exited`](class_visibleonscreennotifier2d.md#class_visibleonscreennotifier2d_signal_screen_exited) signal when no part of it remains visible.

If you want a node to be enabled automatically when this region is visible on screen, use [`VisibleOnScreenEnabler2D`](class_visibleonscreenenabler2d.md).

 **Note:** **VisibleOnScreenNotifier2D** uses the render culling code to determine whether it's visible on screen, so it won't function unless [`CanvasItem.visible`](class_canvasitem.md#class_canvasitem_property_visible) is set to `true`.

## 属性

|||
|:-:|:--|
| [`Rect2`](class_rect2.md) | [`rect`](class_visibleonscreennotifier2d.md#class_visibleonscreennotifier2d_property_rect) | ``Rect2(-10, -10, 20, 20)`` |

## 方法

|||
|:-:|:--|
| [`bool`](class_bool.md) | [`is_on_screen`](class_visibleonscreennotifier2d.md#class_visibleonscreennotifier2d_method_is_on_screen) ( ) const[^const] |

<!-- rst-class:: classref-section-separator -->

---

## 信号

<div id="_class_class_visibleonscreennotifier2d_signal_screen_entered"></div>

**screen_entered** ( ) <div id="class_visibleonscreennotifier2d_signal_screen_entered"></div>

Emitted when the VisibleOnScreenNotifier2D enters the screen.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_class_visibleonscreennotifier2d_signal_screen_exited"></div>

**screen_exited** ( ) <div id="class_visibleonscreennotifier2d_signal_screen_exited"></div>

Emitted when the VisibleOnScreenNotifier2D exits the screen.

<!-- rst-class:: classref-section-separator -->

---

## 属性说明

<div id="_class_visibleonscreennotifier2d_property_rect"></div>

[`Rect2`](class_rect2.md) **rect** = ``Rect2(-10, -10, 20, 20)`` <div id="class_visibleonscreennotifier2d_property_rect"></div>

- `void` **set_rect** ( value: [`Rect2`](class_rect2.md) )
- [`Rect2`](class_rect2.md) **get_rect** ( )

The VisibleOnScreenNotifier2D's bounding rectangle.

<!-- rst-class:: classref-section-separator -->

---

## 方法说明

<div id="_class_visibleonscreennotifier2d_method_is_on_screen"></div>

[`bool`](class_bool.md) **is_on_screen** ( ) const[^const]<div id="class_visibleonscreennotifier2d_method_is_on_screen"></div>

If `true`, the bounding rectangle is on the screen.

 **Note:** It takes one frame for the **VisibleOnScreenNotifier2D**'s visibility to be determined once added to the scene tree, so this method will always return `false` right after it is instantiated, before the draw pass.

[^virtual]: 本方法通常需要用户覆盖才能生效。
[^const]: 本方法无副作用，不会修改该实例的任何成员变量。
[^vararg]: 本方法除了能接受在此处描述的参数外，还能够继续接受任意数量的参数。
[^constructor]: 本方法用于构造某个类型。
[^static]: 调用本方法无需实例，可直接使用类名进行调用。
[^operator]: 本方法描述的是使用本类型作为左操作数的有效运算符。
[^bitfield]: 这个值是由下列位标志构成位掩码的整数。
[^void]: 无返回值。
