<!-- ⚠ 请勿编辑本文件 ⚠ -->
<!-- 本文档使用脚本从 WeDot 引擎源码仓库生成。 -->
<!-- 生成脚本：https://github.com/WeDot-Engine/WeDot/tree/master/doc/tools/make_md.py； -->
<!-- 原文件：https://github.com/WeDot-Engine/WeDot/tree/master/doc/classes/InputEventFromWindow.xml。 -->

<div id="_class_inputeventfromwindow"></div>

# InputEventFromWindow

**继承：** [`InputEvent`](class_inputevent.md) **<** [`Resource`](class_resource.md) **<** [`RefCounted`](class_refcounted.md) **<** [`Object`](class_object.md)

**派生：** [`InputEventScreenDrag`](class_inputeventscreendrag.md), [`InputEventScreenTouch`](class_inputeventscreentouch.md), [`InputEventWithModifiers`](class_inputeventwithmodifiers.md)

Abstract base class for [`Viewport`](class_viewport.md)-based input events.

## 描述

InputEventFromWindow represents events specifically received by windows. This includes mouse events, keyboard events in focused windows or touch screen actions.

## 属性

|||
|:-:|:--|
| [`int`](class_int.md) | [`window_id`](class_inputeventfromwindow.md#class_inputeventfromwindow_property_window_id) | ``0`` |

<!-- rst-class:: classref-section-separator -->

---

## 属性说明

<div id="_class_inputeventfromwindow_property_window_id"></div>

[`int`](class_int.md) **window_id** = ``0`` <div id="class_inputeventfromwindow_property_window_id"></div>

- `void` **set_window_id** ( value: [`int`](class_int.md) )
- [`int`](class_int.md) **get_window_id** ( )

The ID of a [`Window`](class_window.md) that received this event.

[^virtual]: 本方法通常需要用户覆盖才能生效。
[^const]: 本方法无副作用，不会修改该实例的任何成员变量。
[^vararg]: 本方法除了能接受在此处描述的参数外，还能够继续接受任意数量的参数。
[^constructor]: 本方法用于构造某个类型。
[^static]: 调用本方法无需实例，可直接使用类名进行调用。
[^operator]: 本方法描述的是使用本类型作为左操作数的有效运算符。
[^bitfield]: 这个值是由下列位标志构成位掩码的整数。
[^void]: 无返回值。
