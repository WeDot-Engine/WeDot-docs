<!-- ⚠ 请勿编辑本文件 ⚠ -->
<!-- 本文档使用脚本从 WeDot 引擎源码仓库生成。 -->
<!-- 生成脚本：https://github.com/WeDot-Engine/WeDot/tree/master/doc/tools/make_md.py； -->
<!-- 原文件：https://github.com/WeDot-Engine/WeDot/tree/master/doc/classes/StyleBox.xml。 -->

<div id="_class_stylebox"></div>

# StyleBox

**继承：** [`Resource`](class_resource.md) **<** [`RefCounted`](class_refcounted.md) **<** [`Object`](class_object.md)

**派生：** [`StyleBoxEmpty`](class_styleboxempty.md), [`StyleBoxFlat`](class_styleboxflat.md), [`StyleBoxLine`](class_styleboxline.md), [`StyleBoxTexture`](class_styleboxtexture.md)

Abstract base class for defining stylized boxes for UI elements.

## 描述

**StyleBox** is an abstract base class for drawing stylized boxes for UI elements. It is used for panels, buttons, [`LineEdit`](class_lineedit.md) backgrounds, [`Tree`](class_tree.md) backgrounds, etc. and also for testing a transparency mask for pointer signals. If mask test fails on a **StyleBox** assigned as mask to a control, clicks and motion signals will go through it to the one below.

 **Note:** For control nodes that have *Theme Properties*, the `focus` **StyleBox** is displayed over the `normal`, `hover` or `pressed` **StyleBox**. This makes the `focus` **StyleBox** more reusable across different nodes.

## 属性

|||
|:-:|:--|
| [`float`](class_float.md) | [`content_margin_bottom`](class_stylebox.md#class_stylebox_property_content_margin_bottom) | ``-1.0`` |
| [`float`](class_float.md) | [`content_margin_left`](class_stylebox.md#class_stylebox_property_content_margin_left)     | ``-1.0`` |
| [`float`](class_float.md) | [`content_margin_right`](class_stylebox.md#class_stylebox_property_content_margin_right)   | ``-1.0`` |
| [`float`](class_float.md) | [`content_margin_top`](class_stylebox.md#class_stylebox_property_content_margin_top)       | ``-1.0`` |

## 方法

|||
|:-:|:--|
| `void`                              | [`_draw`](class_stylebox.md#class_stylebox_private_method__draw) ( to_canvas_item: [`RID`](class_rid.md), rect: [`Rect2`](class_rect2.md) ) virtual[^virtual] const[^const]          |
| [`Rect2`](class_rect2.md)           | [`_get_draw_rect`](class_stylebox.md#class_stylebox_private_method__get_draw_rect) ( rect: [`Rect2`](class_rect2.md) ) virtual[^virtual] const[^const]                               |
| [`Vector2`](class_vector2.md)       | [`_get_minimum_size`](class_stylebox.md#class_stylebox_private_method__get_minimum_size) ( ) virtual[^virtual] const[^const]                                                         |
| [`bool`](class_bool.md)             | [`_test_mask`](class_stylebox.md#class_stylebox_private_method__test_mask) ( point: [`Vector2`](class_vector2.md), rect: [`Rect2`](class_rect2.md) ) virtual[^virtual] const[^const] |
| `void`                              | [`draw`](class_stylebox.md#class_stylebox_method_draw) ( canvas_item: [`RID`](class_rid.md), rect: [`Rect2`](class_rect2.md) ) const[^const]                                         |
| [`float`](class_float.md)           | [`get_content_margin`](class_stylebox.md#class_stylebox_method_get_content_margin) ( margin: [Side](#enum_@globalscope_side) ) const[^const]                                         |
| [`CanvasItem`](class_canvasitem.md) | [`get_current_item_drawn`](class_stylebox.md#class_stylebox_method_get_current_item_drawn) ( ) const[^const]                                                                         |
| [`float`](class_float.md)           | [`get_margin`](class_stylebox.md#class_stylebox_method_get_margin) ( margin: [Side](#enum_@globalscope_side) ) const[^const]                                                         |
| [`Vector2`](class_vector2.md)       | [`get_minimum_size`](class_stylebox.md#class_stylebox_method_get_minimum_size) ( ) const[^const]                                                                                     |
| [`Vector2`](class_vector2.md)       | [`get_offset`](class_stylebox.md#class_stylebox_method_get_offset) ( ) const[^const]                                                                                                 |
| `void`                              | [`set_content_margin`](class_stylebox.md#class_stylebox_method_set_content_margin) ( margin: [Side](#enum_@globalscope_side), offset: [`float`](class_float.md) )                    |
| `void`                              | [`set_content_margin_all`](class_stylebox.md#class_stylebox_method_set_content_margin_all) ( offset: [`float`](class_float.md) )                                                     |
| [`bool`](class_bool.md)             | [`test_mask`](class_stylebox.md#class_stylebox_method_test_mask) ( point: [`Vector2`](class_vector2.md), rect: [`Rect2`](class_rect2.md) ) const[^const]                             |

<!-- rst-class:: classref-section-separator -->

---

## 属性说明

<div id="_class_stylebox_property_content_margin_bottom"></div>

[`float`](class_float.md) **content_margin_bottom** = ``-1.0`` <div id="class_stylebox_property_content_margin_bottom"></div>

- `void` **set_content_margin** ( margin: [Side](#enum_@globalscope_side), offset: [`float`](class_float.md) )
- [`float`](class_float.md) **get_content_margin** ( margin: [Side](#enum_@globalscope_side) ) const[^const]

The bottom margin for the contents of this style box. Increasing this value reduces the space available to the contents from the bottom.

If this value is negative, it is ignored and a child-specific margin is used instead. For example, for [`StyleBoxFlat`](class_styleboxflat.md), the border thickness (if any) is used instead.

It is up to the code using this style box to decide what these contents are: for example, a [`Button`](class_button.md) respects this content margin for the textual contents of the button.

 [`get_margin`](class_stylebox.md#class_stylebox_method_get_margin) should be used to fetch this value as consumer instead of reading these properties directly. This is because it correctly respects negative values and the fallback mentioned above.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_stylebox_property_content_margin_left"></div>

[`float`](class_float.md) **content_margin_left** = ``-1.0`` <div id="class_stylebox_property_content_margin_left"></div>

- `void` **set_content_margin** ( margin: [Side](#enum_@globalscope_side), offset: [`float`](class_float.md) )
- [`float`](class_float.md) **get_content_margin** ( margin: [Side](#enum_@globalscope_side) ) const[^const]

The left margin for the contents of this style box. Increasing this value reduces the space available to the contents from the left.

Refer to [`content_margin_bottom`](class_stylebox.md#class_stylebox_property_content_margin_bottom) for extra considerations.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_stylebox_property_content_margin_right"></div>

[`float`](class_float.md) **content_margin_right** = ``-1.0`` <div id="class_stylebox_property_content_margin_right"></div>

- `void` **set_content_margin** ( margin: [Side](#enum_@globalscope_side), offset: [`float`](class_float.md) )
- [`float`](class_float.md) **get_content_margin** ( margin: [Side](#enum_@globalscope_side) ) const[^const]

The right margin for the contents of this style box. Increasing this value reduces the space available to the contents from the right.

Refer to [`content_margin_bottom`](class_stylebox.md#class_stylebox_property_content_margin_bottom) for extra considerations.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_stylebox_property_content_margin_top"></div>

[`float`](class_float.md) **content_margin_top** = ``-1.0`` <div id="class_stylebox_property_content_margin_top"></div>

- `void` **set_content_margin** ( margin: [Side](#enum_@globalscope_side), offset: [`float`](class_float.md) )
- [`float`](class_float.md) **get_content_margin** ( margin: [Side](#enum_@globalscope_side) ) const[^const]

The top margin for the contents of this style box. Increasing this value reduces the space available to the contents from the top.

Refer to [`content_margin_bottom`](class_stylebox.md#class_stylebox_property_content_margin_bottom) for extra considerations.

<!-- rst-class:: classref-section-separator -->

---

## 方法说明

<div id="_class_stylebox_private_method__draw"></div>

`void` **_draw** ( to_canvas_item: [`RID`](class_rid.md), rect: [`Rect2`](class_rect2.md) ) virtual[^virtual] const[^const]<div id="class_stylebox_private_method__draw"></div>

该方法目前没有描述，请帮我们\ :ref:`贡献一个 <doc_updating_the_class_reference>`\ 吧！

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_stylebox_private_method__get_draw_rect"></div>

[`Rect2`](class_rect2.md) **_get_draw_rect** ( rect: [`Rect2`](class_rect2.md) ) virtual[^virtual] const[^const]<div id="class_stylebox_private_method__get_draw_rect"></div>

该方法目前没有描述，请帮我们\ :ref:`贡献一个 <doc_updating_the_class_reference>`\ 吧！

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_stylebox_private_method__get_minimum_size"></div>

[`Vector2`](class_vector2.md) **_get_minimum_size** ( ) virtual[^virtual] const[^const]<div id="class_stylebox_private_method__get_minimum_size"></div>

Virtual method to be implemented by the user. Returns a custom minimum size that the stylebox must respect when drawing. By default [`get_minimum_size`](class_stylebox.md#class_stylebox_method_get_minimum_size) only takes content margins into account. This method can be overridden to add another size restriction. A combination of the default behavior and the output of this method will be used, to account for both sizes.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_stylebox_private_method__test_mask"></div>

[`bool`](class_bool.md) **_test_mask** ( point: [`Vector2`](class_vector2.md), rect: [`Rect2`](class_rect2.md) ) virtual[^virtual] const[^const]<div id="class_stylebox_private_method__test_mask"></div>

该方法目前没有描述，请帮我们\ :ref:`贡献一个 <doc_updating_the_class_reference>`\ 吧！

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_stylebox_method_draw"></div>

`void` **draw** ( canvas_item: [`RID`](class_rid.md), rect: [`Rect2`](class_rect2.md) ) const[^const]<div id="class_stylebox_method_draw"></div>

Draws this stylebox using a canvas item identified by the given [`RID`](class_rid.md).

The [`RID`](class_rid.md) value can either be the result of [`CanvasItem.get_canvas_item`](class_canvasitem.md#class_canvasitem_method_get_canvas_item) called on an existing [`CanvasItem`](class_canvasitem.md)-derived node, or directly from creating a canvas item in the [`RenderingServer`](class_renderingserver.md) with [`RenderingServer.canvas_item_create`](class_renderingserver.md#class_renderingserver_method_canvas_item_create).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_stylebox_method_get_content_margin"></div>

[`float`](class_float.md) **get_content_margin** ( margin: [Side](#enum_@globalscope_side) ) const[^const]<div id="class_stylebox_method_get_content_margin"></div>

Returns the default margin of the specified [Side](#enum_@globalscope_side).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_stylebox_method_get_current_item_drawn"></div>

[`CanvasItem`](class_canvasitem.md) **get_current_item_drawn** ( ) const[^const]<div id="class_stylebox_method_get_current_item_drawn"></div>

Returns the [`CanvasItem`](class_canvasitem.md) that handles its [`CanvasItem.NOTIFICATION_DRAW`](class_canvasitem.md#class_canvasitem_constant_notification_draw) or [`CanvasItem._draw`](class_canvasitem.md#class_canvasitem_private_method__draw) callback at this moment.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_stylebox_method_get_margin"></div>

[`float`](class_float.md) **get_margin** ( margin: [Side](#enum_@globalscope_side) ) const[^const]<div id="class_stylebox_method_get_margin"></div>

Returns the content margin offset for the specified [Side](#enum_@globalscope_side).

Positive values reduce size inwards, unlike [`Control`](class_control.md)'s margin values.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_stylebox_method_get_minimum_size"></div>

[`Vector2`](class_vector2.md) **get_minimum_size** ( ) const[^const]<div id="class_stylebox_method_get_minimum_size"></div>

Returns the minimum size that this stylebox can be shrunk to.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_stylebox_method_get_offset"></div>

[`Vector2`](class_vector2.md) **get_offset** ( ) const[^const]<div id="class_stylebox_method_get_offset"></div>

Returns the "offset" of a stylebox. This helper function returns a value equivalent to `Vector2(style.get_margin(MARGIN_LEFT), style.get_margin(MARGIN_TOP))`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_stylebox_method_set_content_margin"></div>

`void` **set_content_margin** ( margin: [Side](#enum_@globalscope_side), offset: [`float`](class_float.md) )<div id="class_stylebox_method_set_content_margin"></div>

Sets the default value of the specified [Side](#enum_@globalscope_side) to `offset` pixels.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_stylebox_method_set_content_margin_all"></div>

`void` **set_content_margin_all** ( offset: [`float`](class_float.md) )<div id="class_stylebox_method_set_content_margin_all"></div>

Sets the default margin to `offset` pixels for all sides.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_stylebox_method_test_mask"></div>

[`bool`](class_bool.md) **test_mask** ( point: [`Vector2`](class_vector2.md), rect: [`Rect2`](class_rect2.md) ) const[^const]<div id="class_stylebox_method_test_mask"></div>

Test a position in a rectangle, return whether it passes the mask test.

[^virtual]: 本方法通常需要用户覆盖才能生效。
[^const]: 本方法无副作用，不会修改该实例的任何成员变量。
[^vararg]: 本方法除了能接受在此处描述的参数外，还能够继续接受任意数量的参数。
[^constructor]: 本方法用于构造某个类型。
[^static]: 调用本方法无需实例，可直接使用类名进行调用。
[^operator]: 本方法描述的是使用本类型作为左操作数的有效运算符。
[^bitfield]: 这个值是由下列位标志构成位掩码的整数。
[^void]: 无返回值。
