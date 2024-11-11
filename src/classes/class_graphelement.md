<!-- ⚠ 请勿编辑本文件 ⚠ -->
<!-- 本文档使用脚本从 WeDot 引擎源码仓库生成。 -->
<!-- 生成脚本：https://github.com/WeDot-Engine/WeDot/tree/master/doc/tools/make_md.py； -->
<!-- 原文件：https://github.com/WeDot-Engine/WeDot/tree/master/doc/classes/GraphElement.xml。 -->

<div id="_class_graphelement"></div>

# GraphElement

**实验性：** This class may be changed or removed in future versions.

**继承：** [`Container`](class_container.md) **<** [`Control`](class_control.md) **<** [`CanvasItem`](class_canvasitem.md) **<** [`Node`](class_node.md) **<** [`Object`](class_object.md)

**派生：** [`GraphFrame`](class_graphframe.md), [`GraphNode`](class_graphnode.md)

A container that represents a basic element that can be placed inside a [`GraphEdit`](class_graphedit.md) control.

## 描述

**GraphElement** allows to create custom elements for a [`GraphEdit`](class_graphedit.md) graph. By default such elements can be selected, resized, and repositioned, but they cannot be connected. For a graph element that allows for connections see [`GraphNode`](class_graphnode.md).

## 属性

|||
|:-:|:--|
| [`bool`](class_bool.md)       | [`draggable`](class_graphelement.md#class_graphelement_property_draggable)             | ``true``          |
| [`Vector2`](class_vector2.md) | [`position_offset`](class_graphelement.md#class_graphelement_property_position_offset) | ``Vector2(0, 0)`` |
| [`bool`](class_bool.md)       | [`resizable`](class_graphelement.md#class_graphelement_property_resizable)             | ``false``         |
| [`bool`](class_bool.md)       | [`selectable`](class_graphelement.md#class_graphelement_property_selectable)           | ``true``          |
| [`bool`](class_bool.md)       | [`selected`](class_graphelement.md#class_graphelement_property_selected)               | ``false``         |

## 主题属性

|||
|:-:|:--|
| [`Texture2D`](class_texture2d.md) | [`resizer`](class_graphelement.md#class_graphelement_theme_icon_resizer) |

<!-- rst-class:: classref-section-separator -->

---

## 信号

<div id="_class_class_graphelement_signal_delete_request"></div>

**delete_request** ( ) <div id="class_graphelement_signal_delete_request"></div>

Emitted when removing the GraphElement is requested.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_class_graphelement_signal_dragged"></div>

**dragged** ( from: [`Vector2`](class_vector2.md), to: [`Vector2`](class_vector2.md) ) <div id="class_graphelement_signal_dragged"></div>

Emitted when the GraphElement is dragged.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_class_graphelement_signal_node_deselected"></div>

**node_deselected** ( ) <div id="class_graphelement_signal_node_deselected"></div>

Emitted when the GraphElement is deselected.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_class_graphelement_signal_node_selected"></div>

**node_selected** ( ) <div id="class_graphelement_signal_node_selected"></div>

Emitted when the GraphElement is selected.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_class_graphelement_signal_position_offset_changed"></div>

**position_offset_changed** ( ) <div id="class_graphelement_signal_position_offset_changed"></div>

Emitted when the GraphElement is moved.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_class_graphelement_signal_raise_request"></div>

**raise_request** ( ) <div id="class_graphelement_signal_raise_request"></div>

Emitted when displaying the GraphElement over other ones is requested. Happens on focusing (clicking into) the GraphElement.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_class_graphelement_signal_resize_end"></div>

**resize_end** ( new_size: [`Vector2`](class_vector2.md) ) <div id="class_graphelement_signal_resize_end"></div>

Emitted when releasing the mouse button after dragging the resizer handle (see [`resizable`](class_graphelement.md#class_graphelement_property_resizable)).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_class_graphelement_signal_resize_request"></div>

**resize_request** ( new_size: [`Vector2`](class_vector2.md) ) <div id="class_graphelement_signal_resize_request"></div>

Emitted when resizing the GraphElement is requested. Happens on dragging the resizer handle (see [`resizable`](class_graphelement.md#class_graphelement_property_resizable)).

<!-- rst-class:: classref-section-separator -->

---

## 属性说明

<div id="_class_graphelement_property_draggable"></div>

[`bool`](class_bool.md) **draggable** = ``true`` <div id="class_graphelement_property_draggable"></div>

- `void` **set_draggable** ( value: [`bool`](class_bool.md) )
- [`bool`](class_bool.md) **is_draggable** ( )

If `true`, the user can drag the GraphElement.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_graphelement_property_position_offset"></div>

[`Vector2`](class_vector2.md) **position_offset** = ``Vector2(0, 0)`` <div id="class_graphelement_property_position_offset"></div>

- `void` **set_position_offset** ( value: [`Vector2`](class_vector2.md) )
- [`Vector2`](class_vector2.md) **get_position_offset** ( )

The offset of the GraphElement, relative to the scroll offset of the [`GraphEdit`](class_graphedit.md).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_graphelement_property_resizable"></div>

[`bool`](class_bool.md) **resizable** = ``false`` <div id="class_graphelement_property_resizable"></div>

- `void` **set_resizable** ( value: [`bool`](class_bool.md) )
- [`bool`](class_bool.md) **is_resizable** ( )

If `true`, the user can resize the GraphElement.

 **Note:** Dragging the handle will only emit the [`resize_request`](class_graphelement.md#class_graphelement_signal_resize_request) and [`resize_end`](class_graphelement.md#class_graphelement_signal_resize_end) signals, the GraphElement needs to be resized manually.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_graphelement_property_selectable"></div>

[`bool`](class_bool.md) **selectable** = ``true`` <div id="class_graphelement_property_selectable"></div>

- `void` **set_selectable** ( value: [`bool`](class_bool.md) )
- [`bool`](class_bool.md) **is_selectable** ( )

If `true`, the user can select the GraphElement.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_graphelement_property_selected"></div>

[`bool`](class_bool.md) **selected** = ``false`` <div id="class_graphelement_property_selected"></div>

- `void` **set_selected** ( value: [`bool`](class_bool.md) )
- [`bool`](class_bool.md) **is_selected** ( )

If `true`, the GraphElement is selected.

<!-- rst-class:: classref-section-separator -->

---

## 主题属性说明

<div id="_class_graphelement_theme_icon_resizer"></div>

[`Texture2D`](class_texture2d.md) **resizer** <div id="class_graphelement_theme_icon_resizer"></div>

The icon used for the resizer, visible when [`resizable`](class_graphelement.md#class_graphelement_property_resizable) is enabled.

[^virtual]: 本方法通常需要用户覆盖才能生效。
[^const]: 本方法无副作用，不会修改该实例的任何成员变量。
[^vararg]: 本方法除了能接受在此处描述的参数外，还能够继续接受任意数量的参数。
[^constructor]: 本方法用于构造某个类型。
[^static]: 调用本方法无需实例，可直接使用类名进行调用。
[^operator]: 本方法描述的是使用本类型作为左操作数的有效运算符。
[^bitfield]: 这个值是由下列位标志构成位掩码的整数。
[^void]: 无返回值。
