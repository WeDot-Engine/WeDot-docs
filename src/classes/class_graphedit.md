<!-- ⚠ 请勿编辑本文件 ⚠ -->
<!-- 本文档使用脚本从 WeDot 引擎源码仓库生成。 -->
<!-- 生成脚本：https://github.com/WeDot-Engine/WeDot/tree/4.3/doc/tools/make_md.py； -->
<!-- 原文件：https://github.com/WeDot-Engine/WeDot/tree/4.3/doc/classes/GraphEdit.xml。 -->

<div id="_class_graphedit"></div>

# GraphEdit

**实验性：** This class may be changed or removed in future versions.

**继承：** [`Control`](class_control.md) **<** [`CanvasItem`](class_canvasitem.md) **<** [`Node`](class_node.md) **<** [`Object`](class_object.md)

An editor for graph-like structures, using [`GraphNode`](class_graphnode.md) s.

## 描述

**GraphEdit** provides tools for creation, manipulation, and display of various graphs. Its main purpose in the engine is to power the visual programming systems, such as visual shaders, but it is also available for use in user projects.

 **GraphEdit** by itself is only an empty container, representing an infinite grid where [`GraphNode`](class_graphnode.md) s can be placed. Each [`GraphNode`](class_graphnode.md) represents a node in the graph, a single unit of data in the connected scheme. **GraphEdit**, in turn, helps to control various interactions with nodes and between nodes. When the user attempts to connect, disconnect, or delete a [`GraphNode`](class_graphnode.md), a signal is emitted in the **GraphEdit**, but no action is taken by default. It is the responsibility of the programmer utilizing this control to implement the necessary logic to determine how each request should be handled.

 **Performance:** It is greatly advised to enable low-processor usage mode (see [`OS.low_processor_usage_mode`](#class_os_property_low_processor_usage_mode)) when using GraphEdits.

 **Note:** Keep in mind that [`Node.get_children`](#class_node_method_get_children) will also return the connection layer node named `_connection_layer` due to technical limitations. This behavior may change in future releases.

## 属性

| [`bool`](class_bool.md)                        | clip_contents                                                                            | ``true`` (overrides [`Control`](#class_control_property_clip_contents)) |
| [`bool`](class_bool.md)                        | [`connection_lines_antialiased`](#class_graphedit_property_connection_lines_antialiased) | ``true``                                                                |
| [`float`](class_float.md)                      | [`connection_lines_curvature`](#class_graphedit_property_connection_lines_curvature)     | ``0.5``                                                                 |
| [`float`](class_float.md)                      | [`connection_lines_thickness`](#class_graphedit_property_connection_lines_thickness)     | ``4.0``                                                                 |
| [FocusMode](#enum_control_focusmode)           | focus_mode                                                                               | ``2`` (overrides [`Control`](#class_control_property_focus_mode))       |
| [GridPattern](#enum_graphedit_gridpattern)     | [`grid_pattern`](#class_graphedit_property_grid_pattern)                                 | ``0``                                                                   |
| [`bool`](class_bool.md)                        | [`minimap_enabled`](#class_graphedit_property_minimap_enabled)                           | ``true``                                                                |
| [`float`](class_float.md)                      | [`minimap_opacity`](#class_graphedit_property_minimap_opacity)                           | ``0.65``                                                                |
| [`Vector2`](class_vector2.md)                  | [`minimap_size`](#class_graphedit_property_minimap_size)                                 | ``Vector2(240, 160)``                                                   |
| [PanningScheme](#enum_graphedit_panningscheme) | [`panning_scheme`](#class_graphedit_property_panning_scheme)                             | ``0``                                                                   |
| [`bool`](class_bool.md)                        | [`right_disconnects`](#class_graphedit_property_right_disconnects)                       | ``false``                                                               |
| [`Vector2`](class_vector2.md)                  | [`scroll_offset`](#class_graphedit_property_scroll_offset)                               | ``Vector2(0, 0)``                                                       |
| [`bool`](class_bool.md)                        | [`show_arrange_button`](#class_graphedit_property_show_arrange_button)                   | ``true``                                                                |
| [`bool`](class_bool.md)                        | [`show_grid`](#class_graphedit_property_show_grid)                                       | ``true``                                                                |
| [`bool`](class_bool.md)                        | [`show_grid_buttons`](#class_graphedit_property_show_grid_buttons)                       | ``true``                                                                |
| [`bool`](class_bool.md)                        | [`show_menu`](#class_graphedit_property_show_menu)                                       | ``true``                                                                |
| [`bool`](class_bool.md)                        | [`show_minimap_button`](#class_graphedit_property_show_minimap_button)                   | ``true``                                                                |
| [`bool`](class_bool.md)                        | [`show_zoom_buttons`](#class_graphedit_property_show_zoom_buttons)                       | ``true``                                                                |
| [`bool`](class_bool.md)                        | [`show_zoom_label`](#class_graphedit_property_show_zoom_label)                           | ``false``                                                               |
| [`int`](class_int.md)                          | [`snapping_distance`](#class_graphedit_property_snapping_distance)                       | ``20``                                                                  |
| [`bool`](class_bool.md)                        | [`snapping_enabled`](#class_graphedit_property_snapping_enabled)                         | ``true``                                                                |
| [`float`](class_float.md)                      | [`zoom`](#class_graphedit_property_zoom)                                                 | ``1.0``                                                                 |
| [`float`](class_float.md)                      | [`zoom_max`](#class_graphedit_property_zoom_max)                                         | ``2.0736``                                                              |
| [`float`](class_float.md)                      | [`zoom_min`](#class_graphedit_property_zoom_min)                                         | ``0.232568``                                                            |
| [`float`](class_float.md)                      | [`zoom_step`](#class_graphedit_property_zoom_step)                                       | ``1.2``                                                                 |

## 方法

| [`PackedVector2Array`](class_packedvector2array.md)         | [`_get_connection_line`](#class_graphedit_private_method__get_connection_line) ( from_position: [`Vector2`](class_vector2.md), to_position: [`Vector2`](class_vector2.md) ) virtual[^virtual] const[^const]                                                                        |
| [`bool`](class_bool.md)                                     | [`_is_in_input_hotzone`](#class_graphedit_private_method__is_in_input_hotzone) ( in_node: [`Object`](class_object.md), in_port: [`int`](class_int.md), mouse_position: [`Vector2`](class_vector2.md) ) virtual[^virtual]                                                           |
| [`bool`](class_bool.md)                                     | [`_is_in_output_hotzone`](#class_graphedit_private_method__is_in_output_hotzone) ( in_node: [`Object`](class_object.md), in_port: [`int`](class_int.md), mouse_position: [`Vector2`](class_vector2.md) ) virtual[^virtual]                                                         |
| [`bool`](class_bool.md)                                     | [`_is_node_hover_valid`](#class_graphedit_private_method__is_node_hover_valid) ( from_node: [`StringName`](class_stringname.md), from_port: [`int`](class_int.md), to_node: [`StringName`](class_stringname.md), to_port: [`int`](class_int.md) ) virtual[^virtual]                |
| `void`                                                      | [`add_valid_connection_type`](#class_graphedit_method_add_valid_connection_type) ( from_type: [`int`](class_int.md), to_type: [`int`](class_int.md) )                                                                                                                              |
| `void`                                                      | [`add_valid_left_disconnect_type`](#class_graphedit_method_add_valid_left_disconnect_type) ( type: [`int`](class_int.md) )                                                                                                                                                         |
| `void`                                                      | [`add_valid_right_disconnect_type`](#class_graphedit_method_add_valid_right_disconnect_type) ( type: [`int`](class_int.md) )                                                                                                                                                       |
| `void`                                                      | [`arrange_nodes`](#class_graphedit_method_arrange_nodes) ( )                                                                                                                                                                                                                       |
| `void`                                                      | [`attach_graph_element_to_frame`](#class_graphedit_method_attach_graph_element_to_frame) ( element: [`StringName`](class_stringname.md), frame: [`StringName`](class_stringname.md) )                                                                                              |
| `void`                                                      | [`clear_connections`](#class_graphedit_method_clear_connections) ( )                                                                                                                                                                                                               |
| [Error](#enum_@globalscope_error)                           | [`connect_node`](#class_graphedit_method_connect_node) ( from_node: [`StringName`](class_stringname.md), from_port: [`int`](class_int.md), to_node: [`StringName`](class_stringname.md), to_port: [`int`](class_int.md) )                                                          |
| `void`                                                      | [`detach_graph_element_from_frame`](#class_graphedit_method_detach_graph_element_from_frame) ( element: [`StringName`](class_stringname.md) )                                                                                                                                      |
| `void`                                                      | [`disconnect_node`](#class_graphedit_method_disconnect_node) ( from_node: [`StringName`](class_stringname.md), from_port: [`int`](class_int.md), to_node: [`StringName`](class_stringname.md), to_port: [`int`](class_int.md) )                                                    |
| `void`                                                      | [`force_connection_drag_end`](#class_graphedit_method_force_connection_drag_end) ( )                                                                                                                                                                                               |
| [Array](class_array.md) [`StringName`](class_stringname.md) | [`get_attached_nodes_of_frame`](#class_graphedit_method_get_attached_nodes_of_frame) ( frame: [`StringName`](class_stringname.md) )                                                                                                                                                |
| [`Dictionary`](class_dictionary.md)                         | [`get_closest_connection_at_point`](#class_graphedit_method_get_closest_connection_at_point) ( point: [`Vector2`](class_vector2.md), max_distance: [`float`](class_float.md) = 4.0 ) const[^const]                                                                                 |
| [`PackedVector2Array`](class_packedvector2array.md)         | [`get_connection_line`](#class_graphedit_method_get_connection_line) ( from_node: [`Vector2`](class_vector2.md), to_node: [`Vector2`](class_vector2.md) ) const[^const]                                                                                                            |
| [Array](class_array.md) [`Dictionary`](class_dictionary.md) | [`get_connection_list`](#class_graphedit_method_get_connection_list) ( ) const[^const]                                                                                                                                                                                             |
| [Array](class_array.md) [`Dictionary`](class_dictionary.md) | [`get_connections_intersecting_with_rect`](#class_graphedit_method_get_connections_intersecting_with_rect) ( rect: [`Rect2`](class_rect2.md) ) const[^const]                                                                                                                       |
| [`GraphFrame`](class_graphframe.md)                         | [`get_element_frame`](#class_graphedit_method_get_element_frame) ( element: [`StringName`](class_stringname.md) )                                                                                                                                                                  |
| [`HBoxContainer`](class_hboxcontainer.md)                   | [`get_menu_hbox`](#class_graphedit_method_get_menu_hbox) ( )                                                                                                                                                                                                                       |
| [`bool`](class_bool.md)                                     | [`is_node_connected`](#class_graphedit_method_is_node_connected) ( from_node: [`StringName`](class_stringname.md), from_port: [`int`](class_int.md), to_node: [`StringName`](class_stringname.md), to_port: [`int`](class_int.md) )                                                |
| [`bool`](class_bool.md)                                     | [`is_valid_connection_type`](#class_graphedit_method_is_valid_connection_type) ( from_type: [`int`](class_int.md), to_type: [`int`](class_int.md) ) const[^const]                                                                                                                  |
| `void`                                                      | [`remove_valid_connection_type`](#class_graphedit_method_remove_valid_connection_type) ( from_type: [`int`](class_int.md), to_type: [`int`](class_int.md) )                                                                                                                        |
| `void`                                                      | [`remove_valid_left_disconnect_type`](#class_graphedit_method_remove_valid_left_disconnect_type) ( type: [`int`](class_int.md) )                                                                                                                                                   |
| `void`                                                      | [`remove_valid_right_disconnect_type`](#class_graphedit_method_remove_valid_right_disconnect_type) ( type: [`int`](class_int.md) )                                                                                                                                                 |
| `void`                                                      | [`set_connection_activity`](#class_graphedit_method_set_connection_activity) ( from_node: [`StringName`](class_stringname.md), from_port: [`int`](class_int.md), to_node: [`StringName`](class_stringname.md), to_port: [`int`](class_int.md), amount: [`float`](class_float.md) ) |
| `void`                                                      | [`set_selected`](#class_graphedit_method_set_selected) ( node: [`Node`](class_node.md) )                                                                                                                                                                                           |

## 主题属性

| [`Color`](class_color.md)         | [`activity`](#class_graphedit_theme_color_activity)                                                     | ``Color(1, 1, 1, 1)``         |
| [`Color`](class_color.md)         | [`connection_hover_tint_color`](#class_graphedit_theme_color_connection_hover_tint_color)               | ``Color(0, 0, 0, 0.3)``       |
| [`Color`](class_color.md)         | [`connection_rim_color`](#class_graphedit_theme_color_connection_rim_color)                             | ``Color(0.1, 0.1, 0.1, 0.6)`` |
| [`Color`](class_color.md)         | [`connection_valid_target_tint_color`](#class_graphedit_theme_color_connection_valid_target_tint_color) | ``Color(1, 1, 1, 0.4)``       |
| [`Color`](class_color.md)         | [`grid_major`](#class_graphedit_theme_color_grid_major)                                                 | ``Color(1, 1, 1, 0.2)``       |
| [`Color`](class_color.md)         | [`grid_minor`](#class_graphedit_theme_color_grid_minor)                                                 | ``Color(1, 1, 1, 0.05)``      |
| [`Color`](class_color.md)         | [`selection_fill`](#class_graphedit_theme_color_selection_fill)                                         | ``Color(1, 1, 1, 0.3)``       |
| [`Color`](class_color.md)         | [`selection_stroke`](#class_graphedit_theme_color_selection_stroke)                                     | ``Color(1, 1, 1, 0.8)``       |
| [`int`](class_int.md)             | [`port_hotzone_inner_extent`](#class_graphedit_theme_constant_port_hotzone_inner_extent)                | ``22``                        |
| [`int`](class_int.md)             | [`port_hotzone_outer_extent`](#class_graphedit_theme_constant_port_hotzone_outer_extent)                | ``26``                        |
| [`Texture2D`](class_texture2d.md) | [`grid_toggle`](#class_graphedit_theme_icon_grid_toggle)                                                |                               |
| [`Texture2D`](class_texture2d.md) | [`layout`](#class_graphedit_theme_icon_layout)                                                          |                               |
| [`Texture2D`](class_texture2d.md) | [`minimap_toggle`](#class_graphedit_theme_icon_minimap_toggle)                                          |                               |
| [`Texture2D`](class_texture2d.md) | [`snapping_toggle`](#class_graphedit_theme_icon_snapping_toggle)                                        |                               |
| [`Texture2D`](class_texture2d.md) | [`zoom_in`](#class_graphedit_theme_icon_zoom_in)                                                        |                               |
| [`Texture2D`](class_texture2d.md) | [`zoom_out`](#class_graphedit_theme_icon_zoom_out)                                                      |                               |
| [`Texture2D`](class_texture2d.md) | [`zoom_reset`](#class_graphedit_theme_icon_zoom_reset)                                                  |                               |
| [`StyleBox`](class_stylebox.md)   | [`menu_panel`](#class_graphedit_theme_style_menu_panel)                                                 |                               |
| [`StyleBox`](class_stylebox.md)   | [`panel`](#class_graphedit_theme_style_panel)                                                           |                               |

<!-- rst-class:: classref-section-separator -->

---

## 信号

<div id="_class_class_graphedit_signal_begin_node_move"></div>

**begin_node_move** ( ) <div id="class_graphedit_signal_begin_node_move"></div>

Emitted at the beginning of a [`GraphElement`](class_graphelement.md)'s movement.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_class_graphedit_signal_connection_drag_ended"></div>

**connection_drag_ended** ( ) <div id="class_graphedit_signal_connection_drag_ended"></div>

Emitted at the end of a connection drag.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_class_graphedit_signal_connection_drag_started"></div>

**connection_drag_started** ( from_node: [`StringName`](class_stringname.md), from_port: [`int`](class_int.md), is_output: [`bool`](class_bool.md) ) <div id="class_graphedit_signal_connection_drag_started"></div>

Emitted at the beginning of a connection drag.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_class_graphedit_signal_connection_from_empty"></div>

**connection_from_empty** ( to_node: [`StringName`](class_stringname.md), to_port: [`int`](class_int.md), release_position: [`Vector2`](class_vector2.md) ) <div id="class_graphedit_signal_connection_from_empty"></div>

Emitted when user drags a connection from an input port into the empty space of the graph.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_class_graphedit_signal_connection_request"></div>

**connection_request** ( from_node: [`StringName`](class_stringname.md), from_port: [`int`](class_int.md), to_node: [`StringName`](class_stringname.md), to_port: [`int`](class_int.md) ) <div id="class_graphedit_signal_connection_request"></div>

Emitted to the GraphEdit when the connection between the `from_port` of the `from_node` [`GraphNode`](class_graphnode.md) and the `to_port` of the `to_node` [`GraphNode`](class_graphnode.md) is attempted to be created.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_class_graphedit_signal_connection_to_empty"></div>

**connection_to_empty** ( from_node: [`StringName`](class_stringname.md), from_port: [`int`](class_int.md), release_position: [`Vector2`](class_vector2.md) ) <div id="class_graphedit_signal_connection_to_empty"></div>

Emitted when user drags a connection from an output port into the empty space of the graph.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_class_graphedit_signal_copy_nodes_request"></div>

**copy_nodes_request** ( ) <div id="class_graphedit_signal_copy_nodes_request"></div>

Emitted when this **GraphEdit** captures a `ui_copy` action (<i class="fa fa-gamepad"></i>`Ctrl + C` by default). In general, this signal indicates that the selected [`GraphElement`](class_graphelement.md) s should be copied.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_class_graphedit_signal_delete_nodes_request"></div>

**delete_nodes_request** ( nodes: [Array](class_array.md) [`StringName`](class_stringname.md) ) <div id="class_graphedit_signal_delete_nodes_request"></div>

Emitted when this **GraphEdit** captures a `ui_graph_delete` action (<i class="fa fa-gamepad"></i>`Delete` by default).

 `nodes` is an array of node names that should be removed. These usually include all selected nodes.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_class_graphedit_signal_disconnection_request"></div>

**disconnection_request** ( from_node: [`StringName`](class_stringname.md), from_port: [`int`](class_int.md), to_node: [`StringName`](class_stringname.md), to_port: [`int`](class_int.md) ) <div id="class_graphedit_signal_disconnection_request"></div>

Emitted to the GraphEdit when the connection between `from_port` of `from_node` [`GraphNode`](class_graphnode.md) and `to_port` of `to_node` [`GraphNode`](class_graphnode.md) is attempted to be removed.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_class_graphedit_signal_duplicate_nodes_request"></div>

**duplicate_nodes_request** ( ) <div id="class_graphedit_signal_duplicate_nodes_request"></div>

Emitted when this **GraphEdit** captures a `ui_graph_duplicate` action (<i class="fa fa-gamepad"></i>`Ctrl + D` by default). In general, this signal indicates that the selected [`GraphElement`](class_graphelement.md) s should be duplicated.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_class_graphedit_signal_end_node_move"></div>

**end_node_move** ( ) <div id="class_graphedit_signal_end_node_move"></div>

Emitted at the end of a [`GraphElement`](class_graphelement.md)'s movement.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_class_graphedit_signal_frame_rect_changed"></div>

**frame_rect_changed** ( frame: [`GraphFrame`](class_graphframe.md), new_rect: [`Vector2`](class_vector2.md) ) <div id="class_graphedit_signal_frame_rect_changed"></div>

Emitted when the [`GraphFrame`](class_graphframe.md) `frame` is resized to `new_rect`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_class_graphedit_signal_graph_elements_linked_to_frame_request"></div>

**graph_elements_linked_to_frame_request** ( elements: [`Array`](class_array.md), frame: [`StringName`](class_stringname.md) ) <div id="class_graphedit_signal_graph_elements_linked_to_frame_request"></div>

Emitted when one or more [`GraphElement`](class_graphelement.md) s are dropped onto the [`GraphFrame`](class_graphframe.md) named `frame`, when they were not previously attached to any other one.

 `elements` is an array of [`GraphElement`](class_graphelement.md) s to be attached.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_class_graphedit_signal_node_deselected"></div>

**node_deselected** ( node: [`Node`](class_node.md) ) <div id="class_graphedit_signal_node_deselected"></div>

Emitted when the given [`GraphElement`](class_graphelement.md) node is deselected.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_class_graphedit_signal_node_selected"></div>

**node_selected** ( node: [`Node`](class_node.md) ) <div id="class_graphedit_signal_node_selected"></div>

Emitted when the given [`GraphElement`](class_graphelement.md) node is selected.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_class_graphedit_signal_paste_nodes_request"></div>

**paste_nodes_request** ( ) <div id="class_graphedit_signal_paste_nodes_request"></div>

Emitted when this **GraphEdit** captures a `ui_paste` action (<i class="fa fa-gamepad"></i>`Ctrl + V` by default). In general, this signal indicates that previously copied [`GraphElement`](class_graphelement.md) s should be pasted.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_class_graphedit_signal_popup_request"></div>

**popup_request** ( at_position: [`Vector2`](class_vector2.md) ) <div id="class_graphedit_signal_popup_request"></div>

Emitted when a popup is requested. Happens on right-clicking in the GraphEdit. `at_position` is the position of the mouse pointer when the signal is sent.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_class_graphedit_signal_scroll_offset_changed"></div>

**scroll_offset_changed** ( offset: [`Vector2`](class_vector2.md) ) <div id="class_graphedit_signal_scroll_offset_changed"></div>

Emitted when the scroll offset is changed by the user. It will not be emitted when changed in code.

<!-- rst-class:: classref-section-separator -->

---

## 枚举

<div id="_class_enum_graphedit_panningscheme"></div>

enum **PanningScheme**: <div id="enum_graphedit_panningscheme"></div>

<div id="_class_graphedit_constant_scroll_zooms"></div>

[PanningScheme](#enum_graphedit_panningscheme) **SCROLL_ZOOMS** = ``0``

<i class="fa fa-gamepad"></i>`Mouse Wheel` will zoom, <i class="fa fa-gamepad"></i>`Ctrl + Mouse Wheel` will move the view.

<div id="_class_graphedit_constant_scroll_pans"></div>

[PanningScheme](#enum_graphedit_panningscheme) **SCROLL_PANS** = ``1``

<i class="fa fa-gamepad"></i>`Mouse Wheel` will move the view, <i class="fa fa-gamepad"></i>`Ctrl + Mouse Wheel` will zoom.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_enum_graphedit_gridpattern"></div>

enum **GridPattern**: <div id="enum_graphedit_gridpattern"></div>

<div id="_class_graphedit_constant_grid_pattern_lines"></div>

[GridPattern](#enum_graphedit_gridpattern) **GRID_PATTERN_LINES** = ``0``

Draw the grid using solid lines.

<div id="_class_graphedit_constant_grid_pattern_dots"></div>

[GridPattern](#enum_graphedit_gridpattern) **GRID_PATTERN_DOTS** = ``1``

Draw the grid using dots.

<!-- rst-class:: classref-section-separator -->

---

## 属性说明

<div id="_class_graphedit_property_connection_lines_antialiased"></div>

[`bool`](class_bool.md) **connection_lines_antialiased** = ``true`` <div id="class_graphedit_property_connection_lines_antialiased"></div>

- `void` **set_connection_lines_antialiased** ( value: [`bool`](class_bool.md) )
- [`bool`](class_bool.md) **is_connection_lines_antialiased** ( )

If `true`, the lines between nodes will use antialiasing.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_graphedit_property_connection_lines_curvature"></div>

[`float`](class_float.md) **connection_lines_curvature** = ``0.5`` <div id="class_graphedit_property_connection_lines_curvature"></div>

- `void` **set_connection_lines_curvature** ( value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_connection_lines_curvature** ( )

The curvature of the lines between the nodes. 0 results in straight lines.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_graphedit_property_connection_lines_thickness"></div>

[`float`](class_float.md) **connection_lines_thickness** = ``4.0`` <div id="class_graphedit_property_connection_lines_thickness"></div>

- `void` **set_connection_lines_thickness** ( value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_connection_lines_thickness** ( )

The thickness of the lines between the nodes.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_graphedit_property_grid_pattern"></div>

[GridPattern](#enum_graphedit_gridpattern) **grid_pattern** = ``0`` <div id="class_graphedit_property_grid_pattern"></div>

- `void` **set_grid_pattern** ( value: [GridPattern](#enum_graphedit_gridpattern) )
- [GridPattern](#enum_graphedit_gridpattern) **get_grid_pattern** ( )

The pattern used for drawing the grid.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_graphedit_property_minimap_enabled"></div>

[`bool`](class_bool.md) **minimap_enabled** = ``true`` <div id="class_graphedit_property_minimap_enabled"></div>

- `void` **set_minimap_enabled** ( value: [`bool`](class_bool.md) )
- [`bool`](class_bool.md) **is_minimap_enabled** ( )

If `true`, the minimap is visible.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_graphedit_property_minimap_opacity"></div>

[`float`](class_float.md) **minimap_opacity** = ``0.65`` <div id="class_graphedit_property_minimap_opacity"></div>

- `void` **set_minimap_opacity** ( value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_minimap_opacity** ( )

The opacity of the minimap rectangle.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_graphedit_property_minimap_size"></div>

[`Vector2`](class_vector2.md) **minimap_size** = ``Vector2(240, 160)`` <div id="class_graphedit_property_minimap_size"></div>

- `void` **set_minimap_size** ( value: [`Vector2`](class_vector2.md) )
- [`Vector2`](class_vector2.md) **get_minimap_size** ( )

The size of the minimap rectangle. The map itself is based on the size of the grid area and is scaled to fit this rectangle.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_graphedit_property_panning_scheme"></div>

[PanningScheme](#enum_graphedit_panningscheme) **panning_scheme** = ``0`` <div id="class_graphedit_property_panning_scheme"></div>

- `void` **set_panning_scheme** ( value: [PanningScheme](#enum_graphedit_panningscheme) )
- [PanningScheme](#enum_graphedit_panningscheme) **get_panning_scheme** ( )

Defines the control scheme for panning with mouse wheel.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_graphedit_property_right_disconnects"></div>

[`bool`](class_bool.md) **right_disconnects** = ``false`` <div id="class_graphedit_property_right_disconnects"></div>

- `void` **set_right_disconnects** ( value: [`bool`](class_bool.md) )
- [`bool`](class_bool.md) **is_right_disconnects_enabled** ( )

If `true`, enables disconnection of existing connections in the GraphEdit by dragging the right end.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_graphedit_property_scroll_offset"></div>

[`Vector2`](class_vector2.md) **scroll_offset** = ``Vector2(0, 0)`` <div id="class_graphedit_property_scroll_offset"></div>

- `void` **set_scroll_offset** ( value: [`Vector2`](class_vector2.md) )
- [`Vector2`](class_vector2.md) **get_scroll_offset** ( )

The scroll offset.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_graphedit_property_show_arrange_button"></div>

[`bool`](class_bool.md) **show_arrange_button** = ``true`` <div id="class_graphedit_property_show_arrange_button"></div>

- `void` **set_show_arrange_button** ( value: [`bool`](class_bool.md) )
- [`bool`](class_bool.md) **is_showing_arrange_button** ( )

If `true`, the button to automatically arrange graph nodes is visible.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_graphedit_property_show_grid"></div>

[`bool`](class_bool.md) **show_grid** = ``true`` <div id="class_graphedit_property_show_grid"></div>

- `void` **set_show_grid** ( value: [`bool`](class_bool.md) )
- [`bool`](class_bool.md) **is_showing_grid** ( )

If `true`, the grid is visible.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_graphedit_property_show_grid_buttons"></div>

[`bool`](class_bool.md) **show_grid_buttons** = ``true`` <div id="class_graphedit_property_show_grid_buttons"></div>

- `void` **set_show_grid_buttons** ( value: [`bool`](class_bool.md) )
- [`bool`](class_bool.md) **is_showing_grid_buttons** ( )

If `true`, buttons that allow to configure grid and snapping options are visible.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_graphedit_property_show_menu"></div>

[`bool`](class_bool.md) **show_menu** = ``true`` <div id="class_graphedit_property_show_menu"></div>

- `void` **set_show_menu** ( value: [`bool`](class_bool.md) )
- [`bool`](class_bool.md) **is_showing_menu** ( )

If `true`, the menu toolbar is visible.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_graphedit_property_show_minimap_button"></div>

[`bool`](class_bool.md) **show_minimap_button** = ``true`` <div id="class_graphedit_property_show_minimap_button"></div>

- `void` **set_show_minimap_button** ( value: [`bool`](class_bool.md) )
- [`bool`](class_bool.md) **is_showing_minimap_button** ( )

If `true`, the button to toggle the minimap is visible.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_graphedit_property_show_zoom_buttons"></div>

[`bool`](class_bool.md) **show_zoom_buttons** = ``true`` <div id="class_graphedit_property_show_zoom_buttons"></div>

- `void` **set_show_zoom_buttons** ( value: [`bool`](class_bool.md) )
- [`bool`](class_bool.md) **is_showing_zoom_buttons** ( )

If `true`, buttons that allow to change and reset the zoom level are visible.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_graphedit_property_show_zoom_label"></div>

[`bool`](class_bool.md) **show_zoom_label** = ``false`` <div id="class_graphedit_property_show_zoom_label"></div>

- `void` **set_show_zoom_label** ( value: [`bool`](class_bool.md) )
- [`bool`](class_bool.md) **is_showing_zoom_label** ( )

If `true`, the label with the current zoom level is visible. The zoom level is displayed in percents.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_graphedit_property_snapping_distance"></div>

[`int`](class_int.md) **snapping_distance** = ``20`` <div id="class_graphedit_property_snapping_distance"></div>

- `void` **set_snapping_distance** ( value: [`int`](class_int.md) )
- [`int`](class_int.md) **get_snapping_distance** ( )

The snapping distance in pixels, also determines the grid line distance.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_graphedit_property_snapping_enabled"></div>

[`bool`](class_bool.md) **snapping_enabled** = ``true`` <div id="class_graphedit_property_snapping_enabled"></div>

- `void` **set_snapping_enabled** ( value: [`bool`](class_bool.md) )
- [`bool`](class_bool.md) **is_snapping_enabled** ( )

If `true`, enables snapping.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_graphedit_property_zoom"></div>

[`float`](class_float.md) **zoom** = ``1.0`` <div id="class_graphedit_property_zoom"></div>

- `void` **set_zoom** ( value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_zoom** ( )

The current zoom value.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_graphedit_property_zoom_max"></div>

[`float`](class_float.md) **zoom_max** = ``2.0736`` <div id="class_graphedit_property_zoom_max"></div>

- `void` **set_zoom_max** ( value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_zoom_max** ( )

The upper zoom limit.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_graphedit_property_zoom_min"></div>

[`float`](class_float.md) **zoom_min** = ``0.232568`` <div id="class_graphedit_property_zoom_min"></div>

- `void` **set_zoom_min** ( value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_zoom_min** ( )

The lower zoom limit.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_graphedit_property_zoom_step"></div>

[`float`](class_float.md) **zoom_step** = ``1.2`` <div id="class_graphedit_property_zoom_step"></div>

- `void` **set_zoom_step** ( value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_zoom_step** ( )

The step of each zoom level.

<!-- rst-class:: classref-section-separator -->

---

## 方法说明

<div id="_class_graphedit_private_method__get_connection_line"></div>

[`PackedVector2Array`](class_packedvector2array.md) **_get_connection_line** ( from_position: [`Vector2`](class_vector2.md), to_position: [`Vector2`](class_vector2.md) ) virtual[^virtual] const[^const]<div id="class_graphedit_private_method__get_connection_line"></div>

Virtual method which can be overridden to customize how connections are drawn.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_graphedit_private_method__is_in_input_hotzone"></div>

[`bool`](class_bool.md) **_is_in_input_hotzone** ( in_node: [`Object`](class_object.md), in_port: [`int`](class_int.md), mouse_position: [`Vector2`](class_vector2.md) ) virtual[^virtual]<div id="class_graphedit_private_method__is_in_input_hotzone"></div>

Returns whether the `mouse_position` is in the input hot zone.

By default, a hot zone is a [`Rect2`](class_rect2.md) positioned such that its center is at `in_node`. [`GraphNode.get_input_port_position`](#class_graphnode_method_get_input_port_position) (`in_port`) (For output's case, call [`GraphNode.get_output_port_position`](#class_graphnode_method_get_output_port_position) instead). The hot zone's width is twice the Theme Property `port_grab_distance_horizontal`, and its height is twice the `port_grab_distance_vertical`.

Below is a sample code to help get started:

```

    func _is_in_input_hotzone(in_node, in_port, mouse_position):
        var port_size: Vector2 = Vector2(get_theme_constant("port_grab_distance_horizontal"), get_theme_constant("port_grab_distance_vertical"))
        var port_pos: Vector2 = in_node.get_position() + in_node.get_input_port_position(in_port) - port_size / 2
        var rect = Rect2(port_pos, port_size)
    
        return rect.has_point(mouse_position)
```



<!-- rst-class:: classref-item-separator -->

---

<div id="_class_graphedit_private_method__is_in_output_hotzone"></div>

[`bool`](class_bool.md) **_is_in_output_hotzone** ( in_node: [`Object`](class_object.md), in_port: [`int`](class_int.md), mouse_position: [`Vector2`](class_vector2.md) ) virtual[^virtual]<div id="class_graphedit_private_method__is_in_output_hotzone"></div>

Returns whether the `mouse_position` is in the output hot zone. For more information on hot zones, see [`_is_in_input_hotzone`](#class_graphedit_private_method__is_in_input_hotzone).

Below is a sample code to help get started:

```

    func _is_in_output_hotzone(in_node, in_port, mouse_position):
        var port_size: Vector2 = Vector2(get_theme_constant("port_grab_distance_horizontal"), get_theme_constant("port_grab_distance_vertical"))
        var port_pos: Vector2 = in_node.get_position() + in_node.get_output_port_position(in_port) - port_size / 2
        var rect = Rect2(port_pos, port_size)
    
        return rect.has_point(mouse_position)
```



<!-- rst-class:: classref-item-separator -->

---

<div id="_class_graphedit_private_method__is_node_hover_valid"></div>

[`bool`](class_bool.md) **_is_node_hover_valid** ( from_node: [`StringName`](class_stringname.md), from_port: [`int`](class_int.md), to_node: [`StringName`](class_stringname.md), to_port: [`int`](class_int.md) ) virtual[^virtual]<div id="class_graphedit_private_method__is_node_hover_valid"></div>

This virtual method can be used to insert additional error detection while the user is dragging a connection over a valid port.

Return `true` if the connection is indeed valid or return `false` if the connection is impossible. If the connection is impossible, no snapping to the port and thus no connection request to that port will happen.

In this example a connection to same node is suppressed:



```gdscript

    func _is_node_hover_valid(from, from_port, to, to_port):
        return from != to
```

```csharp

    public override bool _IsNodeHoverValid(StringName fromNode, int fromPort, StringName toNode, int toPort)
    {
        return fromNode != toNode;
    }
```







<!-- rst-class:: classref-item-separator -->

---

<div id="_class_graphedit_method_add_valid_connection_type"></div>

`void` **add_valid_connection_type** ( from_type: [`int`](class_int.md), to_type: [`int`](class_int.md) )<div id="class_graphedit_method_add_valid_connection_type"></div>

Allows the connection between two different port types. The port type is defined individually for the left and the right port of each slot with the [`GraphNode.set_slot`](#class_graphnode_method_set_slot) method.

See also [`is_valid_connection_type`](#class_graphedit_method_is_valid_connection_type) and [`remove_valid_connection_type`](#class_graphedit_method_remove_valid_connection_type).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_graphedit_method_add_valid_left_disconnect_type"></div>

`void` **add_valid_left_disconnect_type** ( type: [`int`](class_int.md) )<div id="class_graphedit_method_add_valid_left_disconnect_type"></div>

Allows to disconnect nodes when dragging from the left port of the [`GraphNode`](class_graphnode.md)'s slot if it has the specified type. See also [`remove_valid_left_disconnect_type`](#class_graphedit_method_remove_valid_left_disconnect_type).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_graphedit_method_add_valid_right_disconnect_type"></div>

`void` **add_valid_right_disconnect_type** ( type: [`int`](class_int.md) )<div id="class_graphedit_method_add_valid_right_disconnect_type"></div>

Allows to disconnect nodes when dragging from the right port of the [`GraphNode`](class_graphnode.md)'s slot if it has the specified type. See also [`remove_valid_right_disconnect_type`](#class_graphedit_method_remove_valid_right_disconnect_type).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_graphedit_method_arrange_nodes"></div>

`void` **arrange_nodes** ( )<div id="class_graphedit_method_arrange_nodes"></div>

Rearranges selected nodes in a layout with minimum crossings between connections and uniform horizontal and vertical gap between nodes.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_graphedit_method_attach_graph_element_to_frame"></div>

`void` **attach_graph_element_to_frame** ( element: [`StringName`](class_stringname.md), frame: [`StringName`](class_stringname.md) )<div id="class_graphedit_method_attach_graph_element_to_frame"></div>

Attaches the `element` [`GraphElement`](class_graphelement.md) to the `frame` [`GraphFrame`](class_graphframe.md).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_graphedit_method_clear_connections"></div>

`void` **clear_connections** ( )<div id="class_graphedit_method_clear_connections"></div>

Removes all connections between nodes.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_graphedit_method_connect_node"></div>

[Error](#enum_@globalscope_error) **connect_node** ( from_node: [`StringName`](class_stringname.md), from_port: [`int`](class_int.md), to_node: [`StringName`](class_stringname.md), to_port: [`int`](class_int.md) )<div id="class_graphedit_method_connect_node"></div>

Create a connection between the `from_port` of the `from_node` [`GraphNode`](class_graphnode.md) and the `to_port` of the `to_node` [`GraphNode`](class_graphnode.md). If the connection already exists, no connection is created.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_graphedit_method_detach_graph_element_from_frame"></div>

`void` **detach_graph_element_from_frame** ( element: [`StringName`](class_stringname.md) )<div id="class_graphedit_method_detach_graph_element_from_frame"></div>

Detaches the `element` [`GraphElement`](class_graphelement.md) from the [`GraphFrame`](class_graphframe.md) it is currently attached to.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_graphedit_method_disconnect_node"></div>

`void` **disconnect_node** ( from_node: [`StringName`](class_stringname.md), from_port: [`int`](class_int.md), to_node: [`StringName`](class_stringname.md), to_port: [`int`](class_int.md) )<div id="class_graphedit_method_disconnect_node"></div>

Removes the connection between the `from_port` of the `from_node` [`GraphNode`](class_graphnode.md) and the `to_port` of the `to_node` [`GraphNode`](class_graphnode.md). If the connection does not exist, no connection is removed.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_graphedit_method_force_connection_drag_end"></div>

`void` **force_connection_drag_end** ( )<div id="class_graphedit_method_force_connection_drag_end"></div>

Ends the creation of the current connection. In other words, if you are dragging a connection you can use this method to abort the process and remove the line that followed your cursor.

This is best used together with [`connection_drag_started`](#class_graphedit_signal_connection_drag_started) and [`connection_drag_ended`](#class_graphedit_signal_connection_drag_ended) to add custom behavior like node addition through shortcuts.

 **Note:** This method suppresses any other connection request signals apart from [`connection_drag_ended`](#class_graphedit_signal_connection_drag_ended).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_graphedit_method_get_attached_nodes_of_frame"></div>

[Array](class_array.md) [`StringName`](class_stringname.md) **get_attached_nodes_of_frame** ( frame: [`StringName`](class_stringname.md) )<div id="class_graphedit_method_get_attached_nodes_of_frame"></div>

Returns an array of node names that are attached to the [`GraphFrame`](class_graphframe.md) with the given name.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_graphedit_method_get_closest_connection_at_point"></div>

[`Dictionary`](class_dictionary.md) **get_closest_connection_at_point** ( point: [`Vector2`](class_vector2.md), max_distance: [`float`](class_float.md) = 4.0 ) const[^const]<div id="class_graphedit_method_get_closest_connection_at_point"></div>

Returns the closest connection to the given point in screen space. If no connection is found within `max_distance` pixels, an empty [`Dictionary`](class_dictionary.md) is returned.

A connection consists in a structure of the form `{ from_port: 0, from_node: "GraphNode name 0", to_port: 1, to_node: "GraphNode name 1" }`.

For example, getting a connection at a given mouse position can be achieved like this:



```gdscript

    var connection = get_closest_connection_at_point(mouse_event.get_position())
```





<!-- rst-class:: classref-item-separator -->

---

<div id="_class_graphedit_method_get_connection_line"></div>

[`PackedVector2Array`](class_packedvector2array.md) **get_connection_line** ( from_node: [`Vector2`](class_vector2.md), to_node: [`Vector2`](class_vector2.md) ) const[^const]<div id="class_graphedit_method_get_connection_line"></div>

Returns the points which would make up a connection between `from_node` and `to_node`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_graphedit_method_get_connection_list"></div>

[Array](class_array.md) [`Dictionary`](class_dictionary.md) **get_connection_list** ( ) const[^const]<div id="class_graphedit_method_get_connection_list"></div>

Returns an [`Array`](class_array.md) containing the list of connections. A connection consists in a structure of the form `{ from_port: 0, from_node: "GraphNode name 0", to_port: 1, to_node: "GraphNode name 1" }`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_graphedit_method_get_connections_intersecting_with_rect"></div>

[Array](class_array.md) [`Dictionary`](class_dictionary.md) **get_connections_intersecting_with_rect** ( rect: [`Rect2`](class_rect2.md) ) const[^const]<div id="class_graphedit_method_get_connections_intersecting_with_rect"></div>

Returns an [`Array`](class_array.md) containing the list of connections that intersect with the given [`Rect2`](class_rect2.md). A connection consists in a structure of the form `{ from_port: 0, from_node: "GraphNode name 0", to_port: 1, to_node: "GraphNode name 1" }`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_graphedit_method_get_element_frame"></div>

[`GraphFrame`](class_graphframe.md) **get_element_frame** ( element: [`StringName`](class_stringname.md) )<div id="class_graphedit_method_get_element_frame"></div>

Returns the [`GraphFrame`](class_graphframe.md) that contains the [`GraphElement`](class_graphelement.md) with the given name.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_graphedit_method_get_menu_hbox"></div>

[`HBoxContainer`](class_hboxcontainer.md) **get_menu_hbox** ( )<div id="class_graphedit_method_get_menu_hbox"></div>

Gets the [`HBoxContainer`](class_hboxcontainer.md) that contains the zooming and grid snap controls in the top left of the graph. You can use this method to reposition the toolbar or to add your own custom controls to it.

 **Warning:** This is a required internal node, removing and freeing it may cause a crash. If you wish to hide it or any of its children, use their [`CanvasItem.visible`](#class_canvasitem_property_visible) property.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_graphedit_method_is_node_connected"></div>

[`bool`](class_bool.md) **is_node_connected** ( from_node: [`StringName`](class_stringname.md), from_port: [`int`](class_int.md), to_node: [`StringName`](class_stringname.md), to_port: [`int`](class_int.md) )<div id="class_graphedit_method_is_node_connected"></div>

Returns `true` if the `from_port` of the `from_node` [`GraphNode`](class_graphnode.md) is connected to the `to_port` of the `to_node` [`GraphNode`](class_graphnode.md).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_graphedit_method_is_valid_connection_type"></div>

[`bool`](class_bool.md) **is_valid_connection_type** ( from_type: [`int`](class_int.md), to_type: [`int`](class_int.md) ) const[^const]<div id="class_graphedit_method_is_valid_connection_type"></div>

Returns whether it's possible to make a connection between two different port types. The port type is defined individually for the left and the right port of each slot with the [`GraphNode.set_slot`](#class_graphnode_method_set_slot) method.

See also [`add_valid_connection_type`](#class_graphedit_method_add_valid_connection_type) and [`remove_valid_connection_type`](#class_graphedit_method_remove_valid_connection_type).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_graphedit_method_remove_valid_connection_type"></div>

`void` **remove_valid_connection_type** ( from_type: [`int`](class_int.md), to_type: [`int`](class_int.md) )<div id="class_graphedit_method_remove_valid_connection_type"></div>

Disallows the connection between two different port types previously allowed by [`add_valid_connection_type`](#class_graphedit_method_add_valid_connection_type). The port type is defined individually for the left and the right port of each slot with the [`GraphNode.set_slot`](#class_graphnode_method_set_slot) method.

See also [`is_valid_connection_type`](#class_graphedit_method_is_valid_connection_type).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_graphedit_method_remove_valid_left_disconnect_type"></div>

`void` **remove_valid_left_disconnect_type** ( type: [`int`](class_int.md) )<div id="class_graphedit_method_remove_valid_left_disconnect_type"></div>

Disallows to disconnect nodes when dragging from the left port of the [`GraphNode`](class_graphnode.md)'s slot if it has the specified type. Use this to disable disconnection previously allowed with [`add_valid_left_disconnect_type`](#class_graphedit_method_add_valid_left_disconnect_type).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_graphedit_method_remove_valid_right_disconnect_type"></div>

`void` **remove_valid_right_disconnect_type** ( type: [`int`](class_int.md) )<div id="class_graphedit_method_remove_valid_right_disconnect_type"></div>

Disallows to disconnect nodes when dragging from the right port of the [`GraphNode`](class_graphnode.md)'s slot if it has the specified type. Use this to disable disconnection previously allowed with [`add_valid_right_disconnect_type`](#class_graphedit_method_add_valid_right_disconnect_type).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_graphedit_method_set_connection_activity"></div>

`void` **set_connection_activity** ( from_node: [`StringName`](class_stringname.md), from_port: [`int`](class_int.md), to_node: [`StringName`](class_stringname.md), to_port: [`int`](class_int.md), amount: [`float`](class_float.md) )<div id="class_graphedit_method_set_connection_activity"></div>

Sets the coloration of the connection between `from_node`'s `from_port` and `to_node`'s `to_port` with the color provided in the [`activity`](#class_graphedit_theme_color_activity) theme property. The color is linearly interpolated between the connection color and the activity color using `amount` as weight.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_graphedit_method_set_selected"></div>

`void` **set_selected** ( node: [`Node`](class_node.md) )<div id="class_graphedit_method_set_selected"></div>

Sets the specified `node` as the one selected.

<!-- rst-class:: classref-section-separator -->

---

## 主题属性说明

<div id="_class_graphedit_theme_color_activity"></div>

[`Color`](class_color.md) **activity** = ``Color(1, 1, 1, 1)`` <div id="class_graphedit_theme_color_activity"></div>

Color the connection line is interpolated to based on the activity value of a connection (see [`set_connection_activity`](#class_graphedit_method_set_connection_activity)).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_graphedit_theme_color_connection_hover_tint_color"></div>

[`Color`](class_color.md) **connection_hover_tint_color** = ``Color(0, 0, 0, 0.3)`` <div id="class_graphedit_theme_color_connection_hover_tint_color"></div>

Color which is blended with the connection line when the mouse is hovering over it.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_graphedit_theme_color_connection_rim_color"></div>

[`Color`](class_color.md) **connection_rim_color** = ``Color(0.1, 0.1, 0.1, 0.6)`` <div id="class_graphedit_theme_color_connection_rim_color"></div>

Color of the rim around each connection line used for making intersecting lines more distinguishable.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_graphedit_theme_color_connection_valid_target_tint_color"></div>

[`Color`](class_color.md) **connection_valid_target_tint_color** = ``Color(1, 1, 1, 0.4)`` <div id="class_graphedit_theme_color_connection_valid_target_tint_color"></div>

Color which is blended with the connection line when the currently dragged connection is hovering over a valid target port.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_graphedit_theme_color_grid_major"></div>

[`Color`](class_color.md) **grid_major** = ``Color(1, 1, 1, 0.2)`` <div id="class_graphedit_theme_color_grid_major"></div>

Color of major grid lines/dots.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_graphedit_theme_color_grid_minor"></div>

[`Color`](class_color.md) **grid_minor** = ``Color(1, 1, 1, 0.05)`` <div id="class_graphedit_theme_color_grid_minor"></div>

Color of minor grid lines/dots.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_graphedit_theme_color_selection_fill"></div>

[`Color`](class_color.md) **selection_fill** = ``Color(1, 1, 1, 0.3)`` <div id="class_graphedit_theme_color_selection_fill"></div>

The fill color of the selection rectangle.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_graphedit_theme_color_selection_stroke"></div>

[`Color`](class_color.md) **selection_stroke** = ``Color(1, 1, 1, 0.8)`` <div id="class_graphedit_theme_color_selection_stroke"></div>

The outline color of the selection rectangle.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_graphedit_theme_constant_port_hotzone_inner_extent"></div>

[`int`](class_int.md) **port_hotzone_inner_extent** = ``22`` <div id="class_graphedit_theme_constant_port_hotzone_inner_extent"></div>

The horizontal range within which a port can be grabbed (inner side).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_graphedit_theme_constant_port_hotzone_outer_extent"></div>

[`int`](class_int.md) **port_hotzone_outer_extent** = ``26`` <div id="class_graphedit_theme_constant_port_hotzone_outer_extent"></div>

The horizontal range within which a port can be grabbed (outer side).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_graphedit_theme_icon_grid_toggle"></div>

[`Texture2D`](class_texture2d.md) **grid_toggle** <div id="class_graphedit_theme_icon_grid_toggle"></div>

The icon for the grid toggle button.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_graphedit_theme_icon_layout"></div>

[`Texture2D`](class_texture2d.md) **layout** <div id="class_graphedit_theme_icon_layout"></div>

The icon for the layout button for auto-arranging the graph.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_graphedit_theme_icon_minimap_toggle"></div>

[`Texture2D`](class_texture2d.md) **minimap_toggle** <div id="class_graphedit_theme_icon_minimap_toggle"></div>

The icon for the minimap toggle button.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_graphedit_theme_icon_snapping_toggle"></div>

[`Texture2D`](class_texture2d.md) **snapping_toggle** <div id="class_graphedit_theme_icon_snapping_toggle"></div>

The icon for the snapping toggle button.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_graphedit_theme_icon_zoom_in"></div>

[`Texture2D`](class_texture2d.md) **zoom_in** <div id="class_graphedit_theme_icon_zoom_in"></div>

The icon for the zoom in button.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_graphedit_theme_icon_zoom_out"></div>

[`Texture2D`](class_texture2d.md) **zoom_out** <div id="class_graphedit_theme_icon_zoom_out"></div>

The icon for the zoom out button.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_graphedit_theme_icon_zoom_reset"></div>

[`Texture2D`](class_texture2d.md) **zoom_reset** <div id="class_graphedit_theme_icon_zoom_reset"></div>

The icon for the zoom reset button.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_graphedit_theme_style_menu_panel"></div>

[`StyleBox`](class_stylebox.md) **menu_panel** <div id="class_graphedit_theme_style_menu_panel"></div>

该主题属性目前没有描述，请帮我们\ :ref:`贡献一个 <doc_updating_the_class_reference>`\ 吧！

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_graphedit_theme_style_panel"></div>

[`StyleBox`](class_stylebox.md) **panel** <div id="class_graphedit_theme_style_panel"></div>

The background drawn under the grid.

[^virtual]: 本方法通常需要用户覆盖才能生效。
[^const]: 本方法无副作用，不会修改该实例的任何成员变量。
[^vararg]: 本方法除了能接受在此处描述的参数外，还能够继续接受任意数量的参数。
[^constructor]: 本方法用于构造某个类型。
[^static]: 调用本方法无需实例，可直接使用类名进行调用。
[^operator]: 本方法描述的是使用本类型作为左操作数的有效运算符。
[^bitfield]: 这个值是由下列位标志构成位掩码的整数。
[^void]: 无返回值。
