<!-- ⚠ 请勿编辑本文件 ⚠ -->
<!-- 本文档使用脚本从 WeDot 引擎源码仓库生成。 -->
<!-- 生成脚本：https://github.com/WeDot-Engine/WeDot/tree/4.3/doc/tools/make_md.py； -->
<!-- 原文件：https://github.com/WeDot-Engine/WeDot/tree/4.3/doc/classes/GraphNode.xml。 -->

<div id="_class_graphnode"></div>

# GraphNode

**实验性：** This class may be changed or removed in future versions.

**继承：** [`GraphElement`](class_graphelement.md) **<** [`Container`](class_container.md) **<** [`Control`](class_control.md) **<** [`CanvasItem`](class_canvasitem.md) **<** [`Node`](class_node.md) **<** [`Object`](class_object.md)

A container with connection ports, representing a node in a [`GraphEdit`](class_graphedit.md).

## 描述

**GraphNode** allows to create nodes for a [`GraphEdit`](class_graphedit.md) graph with customizable content based on its child controls. **GraphNode** is derived from [`Container`](class_container.md) and it is responsible for placing its children on screen. This works similar to [`VBoxContainer`](class_vboxcontainer.md). Children, in turn, provide **GraphNode** with so-called slots, each of which can have a connection port on either side.

Each **GraphNode** slot is defined by its index and can provide the node with up to two ports: one on the left, and one on the right. By convention the left port is also referred to as the **input port** and the right port is referred to as the **output port**. Each port can be enabled and configured individually, using different type and color. The type is an arbitrary value that you can define using your own considerations. The parent [`GraphEdit`](class_graphedit.md) will receive this information on each connect and disconnect request.

Slots can be configured in the Inspector dock once you add at least one child [`Control`](class_control.md). The properties are grouped by each slot's index in the "Slot" section.

 **Note:** While GraphNode is set up using slots and slot indices, connections are made between the ports which are enabled. Because of that [`GraphEdit`](class_graphedit.md) uses the port's index and not the slot's index. You can use [`get_input_port_slot`](#class_graphnode_method_get_input_port_slot) and [`get_output_port_slot`](#class_graphnode_method_get_output_port_slot) to get the slot index from the port index.

## 属性

| [`bool`](class_bool.md)                  | [`ignore_invalid_connection_type`](#class_graphnode_property_ignore_invalid_connection_type) | ``false``                                                           |
| [MouseFilter](#enum_control_mousefilter) | mouse_filter                                                                                 | ``0`` (overrides [`Control`](#class_control_property_mouse_filter)) |
| [`String`](class_string.md)              | [`title`](#class_graphnode_property_title)                                                   | ``""``                                                              |

## 方法

| `void`                                    | [`_draw_port`](#class_graphnode_private_method__draw_port) ( slot_index: [`int`](class_int.md), position: [`Vector2i`](class_vector2i.md), left: [`bool`](class_bool.md), color: [`Color`](class_color.md) ) virtual[^virtual]                                                                                                                                                                                                                                                                          |
| `void`                                    | [`clear_all_slots`](#class_graphnode_method_clear_all_slots) ( )                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| `void`                                    | [`clear_slot`](#class_graphnode_method_clear_slot) ( slot_index: [`int`](class_int.md) )                                                                                                                                                                                                                                                                                                                                                                                                                |
| [`Color`](class_color.md)                 | [`get_input_port_color`](#class_graphnode_method_get_input_port_color) ( port_idx: [`int`](class_int.md) )                                                                                                                                                                                                                                                                                                                                                                                              |
| [`int`](class_int.md)                     | [`get_input_port_count`](#class_graphnode_method_get_input_port_count) ( )                                                                                                                                                                                                                                                                                                                                                                                                                              |
| [`Vector2`](class_vector2.md)             | [`get_input_port_position`](#class_graphnode_method_get_input_port_position) ( port_idx: [`int`](class_int.md) )                                                                                                                                                                                                                                                                                                                                                                                        |
| [`int`](class_int.md)                     | [`get_input_port_slot`](#class_graphnode_method_get_input_port_slot) ( port_idx: [`int`](class_int.md) )                                                                                                                                                                                                                                                                                                                                                                                                |
| [`int`](class_int.md)                     | [`get_input_port_type`](#class_graphnode_method_get_input_port_type) ( port_idx: [`int`](class_int.md) )                                                                                                                                                                                                                                                                                                                                                                                                |
| [`Color`](class_color.md)                 | [`get_output_port_color`](#class_graphnode_method_get_output_port_color) ( port_idx: [`int`](class_int.md) )                                                                                                                                                                                                                                                                                                                                                                                            |
| [`int`](class_int.md)                     | [`get_output_port_count`](#class_graphnode_method_get_output_port_count) ( )                                                                                                                                                                                                                                                                                                                                                                                                                            |
| [`Vector2`](class_vector2.md)             | [`get_output_port_position`](#class_graphnode_method_get_output_port_position) ( port_idx: [`int`](class_int.md) )                                                                                                                                                                                                                                                                                                                                                                                      |
| [`int`](class_int.md)                     | [`get_output_port_slot`](#class_graphnode_method_get_output_port_slot) ( port_idx: [`int`](class_int.md) )                                                                                                                                                                                                                                                                                                                                                                                              |
| [`int`](class_int.md)                     | [`get_output_port_type`](#class_graphnode_method_get_output_port_type) ( port_idx: [`int`](class_int.md) )                                                                                                                                                                                                                                                                                                                                                                                              |
| [`Color`](class_color.md)                 | [`get_slot_color_left`](#class_graphnode_method_get_slot_color_left) ( slot_index: [`int`](class_int.md) ) const[^const]                                                                                                                                                                                                                                                                                                                                                                                |
| [`Color`](class_color.md)                 | [`get_slot_color_right`](#class_graphnode_method_get_slot_color_right) ( slot_index: [`int`](class_int.md) ) const[^const]                                                                                                                                                                                                                                                                                                                                                                              |
| [`Texture2D`](class_texture2d.md)         | [`get_slot_custom_icon_left`](#class_graphnode_method_get_slot_custom_icon_left) ( slot_index: [`int`](class_int.md) ) const[^const]                                                                                                                                                                                                                                                                                                                                                                    |
| [`Texture2D`](class_texture2d.md)         | [`get_slot_custom_icon_right`](#class_graphnode_method_get_slot_custom_icon_right) ( slot_index: [`int`](class_int.md) ) const[^const]                                                                                                                                                                                                                                                                                                                                                                  |
| [`int`](class_int.md)                     | [`get_slot_type_left`](#class_graphnode_method_get_slot_type_left) ( slot_index: [`int`](class_int.md) ) const[^const]                                                                                                                                                                                                                                                                                                                                                                                  |
| [`int`](class_int.md)                     | [`get_slot_type_right`](#class_graphnode_method_get_slot_type_right) ( slot_index: [`int`](class_int.md) ) const[^const]                                                                                                                                                                                                                                                                                                                                                                                |
| [`HBoxContainer`](class_hboxcontainer.md) | [`get_titlebar_hbox`](#class_graphnode_method_get_titlebar_hbox) ( )                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| [`bool`](class_bool.md)                   | [`is_slot_draw_stylebox`](#class_graphnode_method_is_slot_draw_stylebox) ( slot_index: [`int`](class_int.md) ) const[^const]                                                                                                                                                                                                                                                                                                                                                                            |
| [`bool`](class_bool.md)                   | [`is_slot_enabled_left`](#class_graphnode_method_is_slot_enabled_left) ( slot_index: [`int`](class_int.md) ) const[^const]                                                                                                                                                                                                                                                                                                                                                                              |
| [`bool`](class_bool.md)                   | [`is_slot_enabled_right`](#class_graphnode_method_is_slot_enabled_right) ( slot_index: [`int`](class_int.md) ) const[^const]                                                                                                                                                                                                                                                                                                                                                                            |
| `void`                                    | [`set_slot`](#class_graphnode_method_set_slot) ( slot_index: [`int`](class_int.md), enable_left_port: [`bool`](class_bool.md), type_left: [`int`](class_int.md), color_left: [`Color`](class_color.md), enable_right_port: [`bool`](class_bool.md), type_right: [`int`](class_int.md), color_right: [`Color`](class_color.md), custom_icon_left: [`Texture2D`](class_texture2d.md) = null, custom_icon_right: [`Texture2D`](class_texture2d.md) = null, draw_stylebox: [`bool`](class_bool.md) = true ) |
| `void`                                    | [`set_slot_color_left`](#class_graphnode_method_set_slot_color_left) ( slot_index: [`int`](class_int.md), color: [`Color`](class_color.md) )                                                                                                                                                                                                                                                                                                                                                            |
| `void`                                    | [`set_slot_color_right`](#class_graphnode_method_set_slot_color_right) ( slot_index: [`int`](class_int.md), color: [`Color`](class_color.md) )                                                                                                                                                                                                                                                                                                                                                          |
| `void`                                    | [`set_slot_custom_icon_left`](#class_graphnode_method_set_slot_custom_icon_left) ( slot_index: [`int`](class_int.md), custom_icon: [`Texture2D`](class_texture2d.md) )                                                                                                                                                                                                                                                                                                                                  |
| `void`                                    | [`set_slot_custom_icon_right`](#class_graphnode_method_set_slot_custom_icon_right) ( slot_index: [`int`](class_int.md), custom_icon: [`Texture2D`](class_texture2d.md) )                                                                                                                                                                                                                                                                                                                                |
| `void`                                    | [`set_slot_draw_stylebox`](#class_graphnode_method_set_slot_draw_stylebox) ( slot_index: [`int`](class_int.md), enable: [`bool`](class_bool.md) )                                                                                                                                                                                                                                                                                                                                                       |
| `void`                                    | [`set_slot_enabled_left`](#class_graphnode_method_set_slot_enabled_left) ( slot_index: [`int`](class_int.md), enable: [`bool`](class_bool.md) )                                                                                                                                                                                                                                                                                                                                                         |
| `void`                                    | [`set_slot_enabled_right`](#class_graphnode_method_set_slot_enabled_right) ( slot_index: [`int`](class_int.md), enable: [`bool`](class_bool.md) )                                                                                                                                                                                                                                                                                                                                                       |
| `void`                                    | [`set_slot_type_left`](#class_graphnode_method_set_slot_type_left) ( slot_index: [`int`](class_int.md), type: [`int`](class_int.md) )                                                                                                                                                                                                                                                                                                                                                                   |
| `void`                                    | [`set_slot_type_right`](#class_graphnode_method_set_slot_type_right) ( slot_index: [`int`](class_int.md), type: [`int`](class_int.md) )                                                                                                                                                                                                                                                                                                                                                                 |

## 主题属性

| [`Color`](class_color.md)         | [`resizer_color`](#class_graphnode_theme_color_resizer_color)         | ``Color(0.875, 0.875, 0.875, 1)`` |
| [`int`](class_int.md)             | [`port_h_offset`](#class_graphnode_theme_constant_port_h_offset)      | ``0``                             |
| [`int`](class_int.md)             | [`separation`](#class_graphnode_theme_constant_separation)            | ``2``                             |
| [`Texture2D`](class_texture2d.md) | [`port`](#class_graphnode_theme_icon_port)                            |                                   |
| [`StyleBox`](class_stylebox.md)   | [`panel`](#class_graphnode_theme_style_panel)                         |                                   |
| [`StyleBox`](class_stylebox.md)   | [`panel_selected`](#class_graphnode_theme_style_panel_selected)       |                                   |
| [`StyleBox`](class_stylebox.md)   | [`slot`](#class_graphnode_theme_style_slot)                           |                                   |
| [`StyleBox`](class_stylebox.md)   | [`titlebar`](#class_graphnode_theme_style_titlebar)                   |                                   |
| [`StyleBox`](class_stylebox.md)   | [`titlebar_selected`](#class_graphnode_theme_style_titlebar_selected) |                                   |

<!-- rst-class:: classref-section-separator -->

---

## 信号

<div id="_class_class_graphnode_signal_slot_updated"></div>

**slot_updated** ( slot_index: [`int`](class_int.md) ) <div id="class_graphnode_signal_slot_updated"></div>

Emitted when any GraphNode's slot is updated.

<!-- rst-class:: classref-section-separator -->

---

## 属性说明

<div id="_class_graphnode_property_ignore_invalid_connection_type"></div>

[`bool`](class_bool.md) **ignore_invalid_connection_type** = ``false`` <div id="class_graphnode_property_ignore_invalid_connection_type"></div>

- `void` **set_ignore_invalid_connection_type** ( value: [`bool`](class_bool.md) )
- [`bool`](class_bool.md) **is_ignoring_valid_connection_type** ( )

If `true`, you can connect ports with different types, even if the connection was not explicitly allowed in the parent [`GraphEdit`](class_graphedit.md).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_graphnode_property_title"></div>

[`String`](class_string.md) **title** = ``""`` <div id="class_graphnode_property_title"></div>

- `void` **set_title** ( value: [`String`](class_string.md) )
- [`String`](class_string.md) **get_title** ( )

The text displayed in the GraphNode's title bar.

<!-- rst-class:: classref-section-separator -->

---

## 方法说明

<div id="_class_graphnode_private_method__draw_port"></div>

`void` **_draw_port** ( slot_index: [`int`](class_int.md), position: [`Vector2i`](class_vector2i.md), left: [`bool`](class_bool.md), color: [`Color`](class_color.md) ) virtual[^virtual]<div id="class_graphnode_private_method__draw_port"></div>

该方法目前没有描述，请帮我们\ :ref:`贡献一个 <doc_updating_the_class_reference>`\ 吧！

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_graphnode_method_clear_all_slots"></div>

`void` **clear_all_slots** ( )<div id="class_graphnode_method_clear_all_slots"></div>

Disables all slots of the GraphNode. This will remove all input/output ports from the GraphNode.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_graphnode_method_clear_slot"></div>

`void` **clear_slot** ( slot_index: [`int`](class_int.md) )<div id="class_graphnode_method_clear_slot"></div>

Disables the slot with the given `slot_index`. This will remove the corresponding input and output port from the GraphNode.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_graphnode_method_get_input_port_color"></div>

[`Color`](class_color.md) **get_input_port_color** ( port_idx: [`int`](class_int.md) )<div id="class_graphnode_method_get_input_port_color"></div>

Returns the [`Color`](class_color.md) of the input port with the given `port_idx`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_graphnode_method_get_input_port_count"></div>

[`int`](class_int.md) **get_input_port_count** ( )<div id="class_graphnode_method_get_input_port_count"></div>

Returns the number of slots with an enabled input port.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_graphnode_method_get_input_port_position"></div>

[`Vector2`](class_vector2.md) **get_input_port_position** ( port_idx: [`int`](class_int.md) )<div id="class_graphnode_method_get_input_port_position"></div>

Returns the position of the input port with the given `port_idx`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_graphnode_method_get_input_port_slot"></div>

[`int`](class_int.md) **get_input_port_slot** ( port_idx: [`int`](class_int.md) )<div id="class_graphnode_method_get_input_port_slot"></div>

Returns the corresponding slot index of the input port with the given `port_idx`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_graphnode_method_get_input_port_type"></div>

[`int`](class_int.md) **get_input_port_type** ( port_idx: [`int`](class_int.md) )<div id="class_graphnode_method_get_input_port_type"></div>

Returns the type of the input port with the given `port_idx`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_graphnode_method_get_output_port_color"></div>

[`Color`](class_color.md) **get_output_port_color** ( port_idx: [`int`](class_int.md) )<div id="class_graphnode_method_get_output_port_color"></div>

Returns the [`Color`](class_color.md) of the output port with the given `port_idx`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_graphnode_method_get_output_port_count"></div>

[`int`](class_int.md) **get_output_port_count** ( )<div id="class_graphnode_method_get_output_port_count"></div>

Returns the number of slots with an enabled output port.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_graphnode_method_get_output_port_position"></div>

[`Vector2`](class_vector2.md) **get_output_port_position** ( port_idx: [`int`](class_int.md) )<div id="class_graphnode_method_get_output_port_position"></div>

Returns the position of the output port with the given `port_idx`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_graphnode_method_get_output_port_slot"></div>

[`int`](class_int.md) **get_output_port_slot** ( port_idx: [`int`](class_int.md) )<div id="class_graphnode_method_get_output_port_slot"></div>

Returns the corresponding slot index of the output port with the given `port_idx`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_graphnode_method_get_output_port_type"></div>

[`int`](class_int.md) **get_output_port_type** ( port_idx: [`int`](class_int.md) )<div id="class_graphnode_method_get_output_port_type"></div>

Returns the type of the output port with the given `port_idx`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_graphnode_method_get_slot_color_left"></div>

[`Color`](class_color.md) **get_slot_color_left** ( slot_index: [`int`](class_int.md) ) const[^const]<div id="class_graphnode_method_get_slot_color_left"></div>

Returns the left (input) [`Color`](class_color.md) of the slot with the given `slot_index`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_graphnode_method_get_slot_color_right"></div>

[`Color`](class_color.md) **get_slot_color_right** ( slot_index: [`int`](class_int.md) ) const[^const]<div id="class_graphnode_method_get_slot_color_right"></div>

Returns the right (output) [`Color`](class_color.md) of the slot with the given `slot_index`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_graphnode_method_get_slot_custom_icon_left"></div>

[`Texture2D`](class_texture2d.md) **get_slot_custom_icon_left** ( slot_index: [`int`](class_int.md) ) const[^const]<div id="class_graphnode_method_get_slot_custom_icon_left"></div>

Returns the left (input) custom [`Texture2D`](class_texture2d.md) of the slot with the given `slot_index`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_graphnode_method_get_slot_custom_icon_right"></div>

[`Texture2D`](class_texture2d.md) **get_slot_custom_icon_right** ( slot_index: [`int`](class_int.md) ) const[^const]<div id="class_graphnode_method_get_slot_custom_icon_right"></div>

Returns the right (output) custom [`Texture2D`](class_texture2d.md) of the slot with the given `slot_index`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_graphnode_method_get_slot_type_left"></div>

[`int`](class_int.md) **get_slot_type_left** ( slot_index: [`int`](class_int.md) ) const[^const]<div id="class_graphnode_method_get_slot_type_left"></div>

Returns the left (input) type of the slot with the given `slot_index`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_graphnode_method_get_slot_type_right"></div>

[`int`](class_int.md) **get_slot_type_right** ( slot_index: [`int`](class_int.md) ) const[^const]<div id="class_graphnode_method_get_slot_type_right"></div>

Returns the right (output) type of the slot with the given `slot_index`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_graphnode_method_get_titlebar_hbox"></div>

[`HBoxContainer`](class_hboxcontainer.md) **get_titlebar_hbox** ( )<div id="class_graphnode_method_get_titlebar_hbox"></div>

Returns the [`HBoxContainer`](class_hboxcontainer.md) used for the title bar, only containing a [`Label`](class_label.md) for displaying the title by default. This can be used to add custom controls to the title bar such as option or close buttons.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_graphnode_method_is_slot_draw_stylebox"></div>

[`bool`](class_bool.md) **is_slot_draw_stylebox** ( slot_index: [`int`](class_int.md) ) const[^const]<div id="class_graphnode_method_is_slot_draw_stylebox"></div>

Returns true if the background [`StyleBox`](class_stylebox.md) of the slot with the given `slot_index` is drawn.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_graphnode_method_is_slot_enabled_left"></div>

[`bool`](class_bool.md) **is_slot_enabled_left** ( slot_index: [`int`](class_int.md) ) const[^const]<div id="class_graphnode_method_is_slot_enabled_left"></div>

Returns `true` if left (input) side of the slot with the given `slot_index` is enabled.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_graphnode_method_is_slot_enabled_right"></div>

[`bool`](class_bool.md) **is_slot_enabled_right** ( slot_index: [`int`](class_int.md) ) const[^const]<div id="class_graphnode_method_is_slot_enabled_right"></div>

Returns `true` if right (output) side of the slot with the given `slot_index` is enabled.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_graphnode_method_set_slot"></div>

`void` **set_slot** ( slot_index: [`int`](class_int.md), enable_left_port: [`bool`](class_bool.md), type_left: [`int`](class_int.md), color_left: [`Color`](class_color.md), enable_right_port: [`bool`](class_bool.md), type_right: [`int`](class_int.md), color_right: [`Color`](class_color.md), custom_icon_left: [`Texture2D`](class_texture2d.md) = null, custom_icon_right: [`Texture2D`](class_texture2d.md) = null, draw_stylebox: [`bool`](class_bool.md) = true )<div id="class_graphnode_method_set_slot"></div>

Sets properties of the slot with the given `slot_index`.

If `enable_left_port`/`enable_right_port` is `true`, a port will appear and the slot will be able to be connected from this side.

With `type_left`/`type_right` an arbitrary type can be assigned to each port. Two ports can be connected if they share the same type, or if the connection between their types is allowed in the parent [`GraphEdit`](class_graphedit.md) (see [`GraphEdit.add_valid_connection_type`](#class_graphedit_method_add_valid_connection_type)). Keep in mind that the [`GraphEdit`](class_graphedit.md) has the final say in accepting the connection. Type compatibility simply allows the [`GraphEdit.connection_request`](#class_graphedit_signal_connection_request) signal to be emitted.

Ports can be further customized using `color_left`/`color_right` and `custom_icon_left`/`custom_icon_right`. The color parameter adds a tint to the icon. The custom icon can be used to override the default port dot.

Additionally, `draw_stylebox` can be used to enable or disable drawing of the background stylebox for each slot. See [`slot`](#class_graphnode_theme_style_slot).

Individual properties can also be set using one of the `set_slot_*` methods.

 **Note:** This method only sets properties of the slot. To create the slot itself, add a [`Control`](class_control.md)-derived child to the GraphNode.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_graphnode_method_set_slot_color_left"></div>

`void` **set_slot_color_left** ( slot_index: [`int`](class_int.md), color: [`Color`](class_color.md) )<div id="class_graphnode_method_set_slot_color_left"></div>

Sets the [`Color`](class_color.md) of the left (input) side of the slot with the given `slot_index` to `color`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_graphnode_method_set_slot_color_right"></div>

`void` **set_slot_color_right** ( slot_index: [`int`](class_int.md), color: [`Color`](class_color.md) )<div id="class_graphnode_method_set_slot_color_right"></div>

Sets the [`Color`](class_color.md) of the right (output) side of the slot with the given `slot_index` to `color`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_graphnode_method_set_slot_custom_icon_left"></div>

`void` **set_slot_custom_icon_left** ( slot_index: [`int`](class_int.md), custom_icon: [`Texture2D`](class_texture2d.md) )<div id="class_graphnode_method_set_slot_custom_icon_left"></div>

Sets the custom [`Texture2D`](class_texture2d.md) of the left (input) side of the slot with the given `slot_index` to `custom_icon`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_graphnode_method_set_slot_custom_icon_right"></div>

`void` **set_slot_custom_icon_right** ( slot_index: [`int`](class_int.md), custom_icon: [`Texture2D`](class_texture2d.md) )<div id="class_graphnode_method_set_slot_custom_icon_right"></div>

Sets the custom [`Texture2D`](class_texture2d.md) of the right (output) side of the slot with the given `slot_index` to `custom_icon`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_graphnode_method_set_slot_draw_stylebox"></div>

`void` **set_slot_draw_stylebox** ( slot_index: [`int`](class_int.md), enable: [`bool`](class_bool.md) )<div id="class_graphnode_method_set_slot_draw_stylebox"></div>

Toggles the background [`StyleBox`](class_stylebox.md) of the slot with the given `slot_index`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_graphnode_method_set_slot_enabled_left"></div>

`void` **set_slot_enabled_left** ( slot_index: [`int`](class_int.md), enable: [`bool`](class_bool.md) )<div id="class_graphnode_method_set_slot_enabled_left"></div>

Toggles the left (input) side of the slot with the given `slot_index`. If `enable` is `true`, a port will appear on the left side and the slot will be able to be connected from this side.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_graphnode_method_set_slot_enabled_right"></div>

`void` **set_slot_enabled_right** ( slot_index: [`int`](class_int.md), enable: [`bool`](class_bool.md) )<div id="class_graphnode_method_set_slot_enabled_right"></div>

Toggles the right (output) side of the slot with the given `slot_index`. If `enable` is `true`, a port will appear on the right side and the slot will be able to be connected from this side.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_graphnode_method_set_slot_type_left"></div>

`void` **set_slot_type_left** ( slot_index: [`int`](class_int.md), type: [`int`](class_int.md) )<div id="class_graphnode_method_set_slot_type_left"></div>

Sets the left (input) type of the slot with the given `slot_index` to `type`. If the value is negative, all connections will be disallowed to be created via user inputs.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_graphnode_method_set_slot_type_right"></div>

`void` **set_slot_type_right** ( slot_index: [`int`](class_int.md), type: [`int`](class_int.md) )<div id="class_graphnode_method_set_slot_type_right"></div>

Sets the right (output) type of the slot with the given `slot_index` to `type`. If the value is negative, all connections will be disallowed to be created via user inputs.

<!-- rst-class:: classref-section-separator -->

---

## 主题属性说明

<div id="_class_graphnode_theme_color_resizer_color"></div>

[`Color`](class_color.md) **resizer_color** = ``Color(0.875, 0.875, 0.875, 1)`` <div id="class_graphnode_theme_color_resizer_color"></div>

The color modulation applied to the resizer icon.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_graphnode_theme_constant_port_h_offset"></div>

[`int`](class_int.md) **port_h_offset** = ``0`` <div id="class_graphnode_theme_constant_port_h_offset"></div>

Horizontal offset for the ports.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_graphnode_theme_constant_separation"></div>

[`int`](class_int.md) **separation** = ``2`` <div id="class_graphnode_theme_constant_separation"></div>

The vertical distance between ports.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_graphnode_theme_icon_port"></div>

[`Texture2D`](class_texture2d.md) **port** <div id="class_graphnode_theme_icon_port"></div>

The icon used for representing ports.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_graphnode_theme_style_panel"></div>

[`StyleBox`](class_stylebox.md) **panel** <div id="class_graphnode_theme_style_panel"></div>

The default background for the slot area of the **GraphNode**.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_graphnode_theme_style_panel_selected"></div>

[`StyleBox`](class_stylebox.md) **panel_selected** <div id="class_graphnode_theme_style_panel_selected"></div>

The [`StyleBox`](class_stylebox.md) used for the slot area when selected.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_graphnode_theme_style_slot"></div>

[`StyleBox`](class_stylebox.md) **slot** <div id="class_graphnode_theme_style_slot"></div>

The [`StyleBox`](class_stylebox.md) used for each slot of the **GraphNode**.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_graphnode_theme_style_titlebar"></div>

[`StyleBox`](class_stylebox.md) **titlebar** <div id="class_graphnode_theme_style_titlebar"></div>

The [`StyleBox`](class_stylebox.md) used for the title bar of the **GraphNode**.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_graphnode_theme_style_titlebar_selected"></div>

[`StyleBox`](class_stylebox.md) **titlebar_selected** <div id="class_graphnode_theme_style_titlebar_selected"></div>

The [`StyleBox`](class_stylebox.md) used for the title bar of the **GraphNode** when it is selected.

[^virtual]: 本方法通常需要用户覆盖才能生效。
[^const]: 本方法无副作用，不会修改该实例的任何成员变量。
[^vararg]: 本方法除了能接受在此处描述的参数外，还能够继续接受任意数量的参数。
[^constructor]: 本方法用于构造某个类型。
[^static]: 调用本方法无需实例，可直接使用类名进行调用。
[^operator]: 本方法描述的是使用本类型作为左操作数的有效运算符。
[^bitfield]: 这个值是由下列位标志构成位掩码的整数。
[^void]: 无返回值。
