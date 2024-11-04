<!-- ⚠ 请勿编辑本文件 ⚠ -->
<!-- 本文档使用脚本从 WeDot 引擎源码仓库生成。 -->
<!-- 生成脚本：https://github.com/WeDot-Engine/WeDot/tree/4.3/doc/tools/make_md.py； -->
<!-- 原文件：https://github.com/WeDot-Engine/WeDot/tree/4.3/doc/classes/ItemList.xml。 -->

<div id="_class_itemlist"></div>

# ItemList

**继承：** [`Control`](class_control.md) **<** [`CanvasItem`](class_canvasitem.md) **<** [`Node`](class_node.md) **<** [`Object`](class_object.md)

A vertical list of selectable items with one or multiple columns.

## 描述

This control provides a vertical list of selectable items that may be in a single or in multiple columns, with each item having options for text and an icon. Tooltips are supported and may be different for every item in the list.

Selectable items in the list may be selected or deselected and multiple selection may be enabled. Selection with right mouse button may also be enabled to allow use of popup context menus. Items may also be "activated" by double-clicking them or by pressing <i class="fa fa-gamepad"></i>`Enter`.

Item text only supports single-line strings. Newline characters (e.g. `\n`) in the string won't produce a newline. Text wrapping is enabled in [`ICON_MODE_TOP`](#class_itemlist_constant_icon_mode_top) mode, but the column's width is adjusted to fully fit its content by default. You need to set [`fixed_column_width`](#class_itemlist_property_fixed_column_width) greater than zero to wrap the text.

All `set_*` methods allow negative item indices, i.e. `-1` to access the last item, `-2` to select the second-to-last item, and so on.

 **Incremental search:** Like [`PopupMenu`](class_popupmenu.md) and [`Tree`](class_tree.md), **ItemList** supports searching within the list while the control is focused. Press a key that matches the first letter of an item's name to select the first item starting with the given letter. After that point, there are two ways to perform incremental search: 1) Press the same key again before the timeout duration to select the next item starting with the same letter. 2) Press letter keys that match the rest of the word before the timeout duration to match to select the item in question directly. Both of these actions will be reset to the beginning of the list if the timeout duration has passed since the last keystroke was registered. You can adjust the timeout duration by changing [`ProjectSettings.gui/timers/incremental_search_max_interval_msec`](#class_projectsettings_property_gui/timers/incremental_search_max_interval_msec).

## 属性

| [`bool`](class_bool.md)                             | [`allow_reselect`](#class_itemlist_property_allow_reselect)               | ``false``                                                               |
| [`bool`](class_bool.md)                             | [`allow_rmb_select`](#class_itemlist_property_allow_rmb_select)           | ``false``                                                               |
| [`bool`](class_bool.md)                             | [`allow_search`](#class_itemlist_property_allow_search)                   | ``true``                                                                |
| [`bool`](class_bool.md)                             | [`auto_height`](#class_itemlist_property_auto_height)                     | ``false``                                                               |
| [`bool`](class_bool.md)                             | clip_contents                                                             | ``true`` (overrides [`Control`](#class_control_property_clip_contents)) |
| [`int`](class_int.md)                               | [`fixed_column_width`](#class_itemlist_property_fixed_column_width)       | ``0``                                                                   |
| [`Vector2i`](class_vector2i.md)                     | [`fixed_icon_size`](#class_itemlist_property_fixed_icon_size)             | ``Vector2i(0, 0)``                                                      |
| [FocusMode](#enum_control_focusmode)                | focus_mode                                                                | ``2`` (overrides [`Control`](#class_control_property_focus_mode))       |
| [IconMode](#enum_itemlist_iconmode)                 | [`icon_mode`](#class_itemlist_property_icon_mode)                         | ``1``                                                                   |
| [`float`](class_float.md)                           | [`icon_scale`](#class_itemlist_property_icon_scale)                       | ``1.0``                                                                 |
| [`int`](class_int.md)                               | [`item_count`](#class_itemlist_property_item_count)                       | ``0``                                                                   |
| [`int`](class_int.md)                               | [`max_columns`](#class_itemlist_property_max_columns)                     | ``1``                                                                   |
| [`int`](class_int.md)                               | [`max_text_lines`](#class_itemlist_property_max_text_lines)               | ``1``                                                                   |
| [`bool`](class_bool.md)                             | [`same_column_width`](#class_itemlist_property_same_column_width)         | ``false``                                                               |
| [SelectMode](#enum_itemlist_selectmode)             | [`select_mode`](#class_itemlist_property_select_mode)                     | ``0``                                                                   |
| [OverrunBehavior](#enum_textserver_overrunbehavior) | [`text_overrun_behavior`](#class_itemlist_property_text_overrun_behavior) | ``3``                                                                   |

## 方法

| [`int`](class_int.md)                           | [`add_icon_item`](#class_itemlist_method_add_icon_item) ( icon: [`Texture2D`](class_texture2d.md), selectable: [`bool`](class_bool.md) = true )                                 |
| [`int`](class_int.md)                           | [`add_item`](#class_itemlist_method_add_item) ( text: [`String`](class_string.md), icon: [`Texture2D`](class_texture2d.md) = null, selectable: [`bool`](class_bool.md) = true ) |
| `void`                                          | [`clear`](#class_itemlist_method_clear) ( )                                                                                                                                     |
| `void`                                          | [`deselect`](#class_itemlist_method_deselect) ( idx: [`int`](class_int.md) )                                                                                                    |
| `void`                                          | [`deselect_all`](#class_itemlist_method_deselect_all) ( )                                                                                                                       |
| `void`                                          | [`ensure_current_is_visible`](#class_itemlist_method_ensure_current_is_visible) ( )                                                                                             |
| `void`                                          | [`force_update_list_size`](#class_itemlist_method_force_update_list_size) ( )                                                                                                   |
| [`int`](class_int.md)                           | [`get_item_at_position`](#class_itemlist_method_get_item_at_position) ( position: [`Vector2`](class_vector2.md), exact: [`bool`](class_bool.md) = false ) const[^const]         |
| [`Color`](class_color.md)                       | [`get_item_custom_bg_color`](#class_itemlist_method_get_item_custom_bg_color) ( idx: [`int`](class_int.md) ) const[^const]                                                      |
| [`Color`](class_color.md)                       | [`get_item_custom_fg_color`](#class_itemlist_method_get_item_custom_fg_color) ( idx: [`int`](class_int.md) ) const[^const]                                                      |
| [`Texture2D`](class_texture2d.md)               | [`get_item_icon`](#class_itemlist_method_get_item_icon) ( idx: [`int`](class_int.md) ) const[^const]                                                                            |
| [`Color`](class_color.md)                       | [`get_item_icon_modulate`](#class_itemlist_method_get_item_icon_modulate) ( idx: [`int`](class_int.md) ) const[^const]                                                          |
| [`Rect2`](class_rect2.md)                       | [`get_item_icon_region`](#class_itemlist_method_get_item_icon_region) ( idx: [`int`](class_int.md) ) const[^const]                                                              |
| [`String`](class_string.md)                     | [`get_item_language`](#class_itemlist_method_get_item_language) ( idx: [`int`](class_int.md) ) const[^const]                                                                    |
| [`Variant`](class_variant.md)                   | [`get_item_metadata`](#class_itemlist_method_get_item_metadata) ( idx: [`int`](class_int.md) ) const[^const]                                                                    |
| [`Rect2`](class_rect2.md)                       | [`get_item_rect`](#class_itemlist_method_get_item_rect) ( idx: [`int`](class_int.md), expand: [`bool`](class_bool.md) = true ) const[^const]                                    |
| [`String`](class_string.md)                     | [`get_item_text`](#class_itemlist_method_get_item_text) ( idx: [`int`](class_int.md) ) const[^const]                                                                            |
| [TextDirection](#enum_control_textdirection)    | [`get_item_text_direction`](#class_itemlist_method_get_item_text_direction) ( idx: [`int`](class_int.md) ) const[^const]                                                        |
| [`String`](class_string.md)                     | [`get_item_tooltip`](#class_itemlist_method_get_item_tooltip) ( idx: [`int`](class_int.md) ) const[^const]                                                                      |
| [`PackedInt32Array`](class_packedint32array.md) | [`get_selected_items`](#class_itemlist_method_get_selected_items) ( )                                                                                                           |
| [`VScrollBar`](class_vscrollbar.md)             | [`get_v_scroll_bar`](#class_itemlist_method_get_v_scroll_bar) ( )                                                                                                               |
| [`bool`](class_bool.md)                         | [`is_anything_selected`](#class_itemlist_method_is_anything_selected) ( )                                                                                                       |
| [`bool`](class_bool.md)                         | [`is_item_disabled`](#class_itemlist_method_is_item_disabled) ( idx: [`int`](class_int.md) ) const[^const]                                                                      |
| [`bool`](class_bool.md)                         | [`is_item_icon_transposed`](#class_itemlist_method_is_item_icon_transposed) ( idx: [`int`](class_int.md) ) const[^const]                                                        |
| [`bool`](class_bool.md)                         | [`is_item_selectable`](#class_itemlist_method_is_item_selectable) ( idx: [`int`](class_int.md) ) const[^const]                                                                  |
| [`bool`](class_bool.md)                         | [`is_item_tooltip_enabled`](#class_itemlist_method_is_item_tooltip_enabled) ( idx: [`int`](class_int.md) ) const[^const]                                                        |
| [`bool`](class_bool.md)                         | [`is_selected`](#class_itemlist_method_is_selected) ( idx: [`int`](class_int.md) ) const[^const]                                                                                |
| `void`                                          | [`move_item`](#class_itemlist_method_move_item) ( from_idx: [`int`](class_int.md), to_idx: [`int`](class_int.md) )                                                              |
| `void`                                          | [`remove_item`](#class_itemlist_method_remove_item) ( idx: [`int`](class_int.md) )                                                                                              |
| `void`                                          | [`select`](#class_itemlist_method_select) ( idx: [`int`](class_int.md), single: [`bool`](class_bool.md) = true )                                                                |
| `void`                                          | [`set_item_custom_bg_color`](#class_itemlist_method_set_item_custom_bg_color) ( idx: [`int`](class_int.md), custom_bg_color: [`Color`](class_color.md) )                        |
| `void`                                          | [`set_item_custom_fg_color`](#class_itemlist_method_set_item_custom_fg_color) ( idx: [`int`](class_int.md), custom_fg_color: [`Color`](class_color.md) )                        |
| `void`                                          | [`set_item_disabled`](#class_itemlist_method_set_item_disabled) ( idx: [`int`](class_int.md), disabled: [`bool`](class_bool.md) )                                               |
| `void`                                          | [`set_item_icon`](#class_itemlist_method_set_item_icon) ( idx: [`int`](class_int.md), icon: [`Texture2D`](class_texture2d.md) )                                                 |
| `void`                                          | [`set_item_icon_modulate`](#class_itemlist_method_set_item_icon_modulate) ( idx: [`int`](class_int.md), modulate: [`Color`](class_color.md) )                                   |
| `void`                                          | [`set_item_icon_region`](#class_itemlist_method_set_item_icon_region) ( idx: [`int`](class_int.md), rect: [`Rect2`](class_rect2.md) )                                           |
| `void`                                          | [`set_item_icon_transposed`](#class_itemlist_method_set_item_icon_transposed) ( idx: [`int`](class_int.md), transposed: [`bool`](class_bool.md) )                               |
| `void`                                          | [`set_item_language`](#class_itemlist_method_set_item_language) ( idx: [`int`](class_int.md), language: [`String`](class_string.md) )                                           |
| `void`                                          | [`set_item_metadata`](#class_itemlist_method_set_item_metadata) ( idx: [`int`](class_int.md), metadata: [`Variant`](class_variant.md) )                                         |
| `void`                                          | [`set_item_selectable`](#class_itemlist_method_set_item_selectable) ( idx: [`int`](class_int.md), selectable: [`bool`](class_bool.md) )                                         |
| `void`                                          | [`set_item_text`](#class_itemlist_method_set_item_text) ( idx: [`int`](class_int.md), text: [`String`](class_string.md) )                                                       |
| `void`                                          | [`set_item_text_direction`](#class_itemlist_method_set_item_text_direction) ( idx: [`int`](class_int.md), direction: [TextDirection](#enum_control_textdirection) )             |
| `void`                                          | [`set_item_tooltip`](#class_itemlist_method_set_item_tooltip) ( idx: [`int`](class_int.md), tooltip: [`String`](class_string.md) )                                              |
| `void`                                          | [`set_item_tooltip_enabled`](#class_itemlist_method_set_item_tooltip_enabled) ( idx: [`int`](class_int.md), enable: [`bool`](class_bool.md) )                                   |
| `void`                                          | [`sort_items_by_text`](#class_itemlist_method_sort_items_by_text) ( )                                                                                                           |

## 主题属性

| [`Color`](class_color.md)       | [`font_color`](#class_itemlist_theme_color_font_color)                   | ``Color(0.65, 0.65, 0.65, 1)`` |
| [`Color`](class_color.md)       | [`font_hovered_color`](#class_itemlist_theme_color_font_hovered_color)   | ``Color(0.95, 0.95, 0.95, 1)`` |
| [`Color`](class_color.md)       | [`font_outline_color`](#class_itemlist_theme_color_font_outline_color)   | ``Color(0, 0, 0, 1)``          |
| [`Color`](class_color.md)       | [`font_selected_color`](#class_itemlist_theme_color_font_selected_color) | ``Color(1, 1, 1, 1)``          |
| [`Color`](class_color.md)       | [`guide_color`](#class_itemlist_theme_color_guide_color)                 | ``Color(0.7, 0.7, 0.7, 0.25)`` |
| [`int`](class_int.md)           | [`h_separation`](#class_itemlist_theme_constant_h_separation)            | ``4``                          |
| [`int`](class_int.md)           | [`icon_margin`](#class_itemlist_theme_constant_icon_margin)              | ``4``                          |
| [`int`](class_int.md)           | [`line_separation`](#class_itemlist_theme_constant_line_separation)      | ``2``                          |
| [`int`](class_int.md)           | [`outline_size`](#class_itemlist_theme_constant_outline_size)            | ``0``                          |
| [`int`](class_int.md)           | [`v_separation`](#class_itemlist_theme_constant_v_separation)            | ``4``                          |
| [`Font`](class_font.md)         | [`font`](#class_itemlist_theme_font_font)                                |                                |
| [`int`](class_int.md)           | [`font_size`](#class_itemlist_theme_font_size_font_size)                 |                                |
| [`StyleBox`](class_stylebox.md) | [`cursor`](#class_itemlist_theme_style_cursor)                           |                                |
| [`StyleBox`](class_stylebox.md) | [`cursor_unfocused`](#class_itemlist_theme_style_cursor_unfocused)       |                                |
| [`StyleBox`](class_stylebox.md) | [`focus`](#class_itemlist_theme_style_focus)                             |                                |
| [`StyleBox`](class_stylebox.md) | [`hovered`](#class_itemlist_theme_style_hovered)                         |                                |
| [`StyleBox`](class_stylebox.md) | [`panel`](#class_itemlist_theme_style_panel)                             |                                |
| [`StyleBox`](class_stylebox.md) | [`selected`](#class_itemlist_theme_style_selected)                       |                                |
| [`StyleBox`](class_stylebox.md) | [`selected_focus`](#class_itemlist_theme_style_selected_focus)           |                                |

<!-- rst-class:: classref-section-separator -->

---

## 信号

<div id="_class_class_itemlist_signal_empty_clicked"></div>

**empty_clicked** ( at_position: [`Vector2`](class_vector2.md), mouse_button_index: [`int`](class_int.md) ) <div id="class_itemlist_signal_empty_clicked"></div>

Triggered when any mouse click is issued within the rect of the list but on empty space.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_class_itemlist_signal_item_activated"></div>

**item_activated** ( index: [`int`](class_int.md) ) <div id="class_itemlist_signal_item_activated"></div>

Triggered when specified list item is activated via double-clicking or by pressing <i class="fa fa-gamepad"></i>`Enter`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_class_itemlist_signal_item_clicked"></div>

**item_clicked** ( index: [`int`](class_int.md), at_position: [`Vector2`](class_vector2.md), mouse_button_index: [`int`](class_int.md) ) <div id="class_itemlist_signal_item_clicked"></div>

Triggered when specified list item has been clicked with any mouse button.

The click position is also provided to allow appropriate popup of context menus at the correct location.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_class_itemlist_signal_item_selected"></div>

**item_selected** ( index: [`int`](class_int.md) ) <div id="class_itemlist_signal_item_selected"></div>

Triggered when specified item has been selected.

 [`allow_reselect`](#class_itemlist_property_allow_reselect) must be enabled to reselect an item.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_class_itemlist_signal_multi_selected"></div>

**multi_selected** ( index: [`int`](class_int.md), selected: [`bool`](class_bool.md) ) <div id="class_itemlist_signal_multi_selected"></div>

Triggered when a multiple selection is altered on a list allowing multiple selection.

<!-- rst-class:: classref-section-separator -->

---

## 枚举

<div id="_class_enum_itemlist_iconmode"></div>

enum **IconMode**: <div id="enum_itemlist_iconmode"></div>

<div id="_class_itemlist_constant_icon_mode_top"></div>

[IconMode](#enum_itemlist_iconmode) **ICON_MODE_TOP** = ``0``

Icon is drawn above the text.

<div id="_class_itemlist_constant_icon_mode_left"></div>

[IconMode](#enum_itemlist_iconmode) **ICON_MODE_LEFT** = ``1``

Icon is drawn to the left of the text.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_enum_itemlist_selectmode"></div>

enum **SelectMode**: <div id="enum_itemlist_selectmode"></div>

<div id="_class_itemlist_constant_select_single"></div>

[SelectMode](#enum_itemlist_selectmode) **SELECT_SINGLE** = ``0``

Only allow selecting a single item.

<div id="_class_itemlist_constant_select_multi"></div>

[SelectMode](#enum_itemlist_selectmode) **SELECT_MULTI** = ``1``

Allows selecting multiple items by holding <i class="fa fa-gamepad"></i>`Ctrl` or <i class="fa fa-gamepad"></i>`Shift`.

<!-- rst-class:: classref-section-separator -->

---

## 属性说明

<div id="_class_itemlist_property_allow_reselect"></div>

[`bool`](class_bool.md) **allow_reselect** = ``false`` <div id="class_itemlist_property_allow_reselect"></div>

- `void` **set_allow_reselect** ( value: [`bool`](class_bool.md) )
- [`bool`](class_bool.md) **get_allow_reselect** ( )

If `true`, the currently selected item can be selected again.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_itemlist_property_allow_rmb_select"></div>

[`bool`](class_bool.md) **allow_rmb_select** = ``false`` <div id="class_itemlist_property_allow_rmb_select"></div>

- `void` **set_allow_rmb_select** ( value: [`bool`](class_bool.md) )
- [`bool`](class_bool.md) **get_allow_rmb_select** ( )

If `true`, right mouse button click can select items.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_itemlist_property_allow_search"></div>

[`bool`](class_bool.md) **allow_search** = ``true`` <div id="class_itemlist_property_allow_search"></div>

- `void` **set_allow_search** ( value: [`bool`](class_bool.md) )
- [`bool`](class_bool.md) **get_allow_search** ( )

If `true`, allows navigating the **ItemList** with letter keys through incremental search.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_itemlist_property_auto_height"></div>

[`bool`](class_bool.md) **auto_height** = ``false`` <div id="class_itemlist_property_auto_height"></div>

- `void` **set_auto_height** ( value: [`bool`](class_bool.md) )
- [`bool`](class_bool.md) **has_auto_height** ( )

If `true`, the control will automatically resize the height to fit its content.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_itemlist_property_fixed_column_width"></div>

[`int`](class_int.md) **fixed_column_width** = ``0`` <div id="class_itemlist_property_fixed_column_width"></div>

- `void` **set_fixed_column_width** ( value: [`int`](class_int.md) )
- [`int`](class_int.md) **get_fixed_column_width** ( )

The width all columns will be adjusted to.

A value of zero disables the adjustment, each item will have a width equal to the width of its content and the columns will have an uneven width.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_itemlist_property_fixed_icon_size"></div>

[`Vector2i`](class_vector2i.md) **fixed_icon_size** = ``Vector2i(0, 0)`` <div id="class_itemlist_property_fixed_icon_size"></div>

- `void` **set_fixed_icon_size** ( value: [`Vector2i`](class_vector2i.md) )
- [`Vector2i`](class_vector2i.md) **get_fixed_icon_size** ( )

The size all icons will be adjusted to.

If either X or Y component is not greater than zero, icon size won't be affected.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_itemlist_property_icon_mode"></div>

[IconMode](#enum_itemlist_iconmode) **icon_mode** = ``1`` <div id="class_itemlist_property_icon_mode"></div>

- `void` **set_icon_mode** ( value: [IconMode](#enum_itemlist_iconmode) )
- [IconMode](#enum_itemlist_iconmode) **get_icon_mode** ( )

The icon position, whether above or to the left of the text. See the [IconMode](#enum_itemlist_iconmode) constants.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_itemlist_property_icon_scale"></div>

[`float`](class_float.md) **icon_scale** = ``1.0`` <div id="class_itemlist_property_icon_scale"></div>

- `void` **set_icon_scale** ( value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_icon_scale** ( )

The scale of icon applied after [`fixed_icon_size`](#class_itemlist_property_fixed_icon_size) and transposing takes effect.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_itemlist_property_item_count"></div>

[`int`](class_int.md) **item_count** = ``0`` <div id="class_itemlist_property_item_count"></div>

- `void` **set_item_count** ( value: [`int`](class_int.md) )
- [`int`](class_int.md) **get_item_count** ( )

The number of items currently in the list.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_itemlist_property_max_columns"></div>

[`int`](class_int.md) **max_columns** = ``1`` <div id="class_itemlist_property_max_columns"></div>

- `void` **set_max_columns** ( value: [`int`](class_int.md) )
- [`int`](class_int.md) **get_max_columns** ( )

Maximum columns the list will have.

If greater than zero, the content will be split among the specified columns.

A value of zero means unlimited columns, i.e. all items will be put in the same row.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_itemlist_property_max_text_lines"></div>

[`int`](class_int.md) **max_text_lines** = ``1`` <div id="class_itemlist_property_max_text_lines"></div>

- `void` **set_max_text_lines** ( value: [`int`](class_int.md) )
- [`int`](class_int.md) **get_max_text_lines** ( )

Maximum lines of text allowed in each item. Space will be reserved even when there is not enough lines of text to display.

 **Note:** This property takes effect only when [`icon_mode`](#class_itemlist_property_icon_mode) is [`ICON_MODE_TOP`](#class_itemlist_constant_icon_mode_top). To make the text wrap, [`fixed_column_width`](#class_itemlist_property_fixed_column_width) should be greater than zero.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_itemlist_property_same_column_width"></div>

[`bool`](class_bool.md) **same_column_width** = ``false`` <div id="class_itemlist_property_same_column_width"></div>

- `void` **set_same_column_width** ( value: [`bool`](class_bool.md) )
- [`bool`](class_bool.md) **is_same_column_width** ( )

Whether all columns will have the same width.

If `true`, the width is equal to the largest column width of all columns.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_itemlist_property_select_mode"></div>

[SelectMode](#enum_itemlist_selectmode) **select_mode** = ``0`` <div id="class_itemlist_property_select_mode"></div>

- `void` **set_select_mode** ( value: [SelectMode](#enum_itemlist_selectmode) )
- [SelectMode](#enum_itemlist_selectmode) **get_select_mode** ( )

Allows single or multiple item selection. See the [SelectMode](#enum_itemlist_selectmode) constants.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_itemlist_property_text_overrun_behavior"></div>

[OverrunBehavior](#enum_textserver_overrunbehavior) **text_overrun_behavior** = ``3`` <div id="class_itemlist_property_text_overrun_behavior"></div>

- `void` **set_text_overrun_behavior** ( value: [OverrunBehavior](#enum_textserver_overrunbehavior) )
- [OverrunBehavior](#enum_textserver_overrunbehavior) **get_text_overrun_behavior** ( )

Sets the clipping behavior when the text exceeds an item's bounding rectangle. See [OverrunBehavior](#enum_textserver_overrunbehavior) for a description of all modes.

<!-- rst-class:: classref-section-separator -->

---

## 方法说明

<div id="_class_itemlist_method_add_icon_item"></div>

[`int`](class_int.md) **add_icon_item** ( icon: [`Texture2D`](class_texture2d.md), selectable: [`bool`](class_bool.md) = true )<div id="class_itemlist_method_add_icon_item"></div>

Adds an item to the item list with no text, only an icon. Returns the index of an added item.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_itemlist_method_add_item"></div>

[`int`](class_int.md) **add_item** ( text: [`String`](class_string.md), icon: [`Texture2D`](class_texture2d.md) = null, selectable: [`bool`](class_bool.md) = true )<div id="class_itemlist_method_add_item"></div>

Adds an item to the item list with specified text. Returns the index of an added item.

Specify an `icon`, or use `null` as the `icon` for a list item with no icon.

If selectable is `true`, the list item will be selectable.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_itemlist_method_clear"></div>

`void` **clear** ( )<div id="class_itemlist_method_clear"></div>

Removes all items from the list.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_itemlist_method_deselect"></div>

`void` **deselect** ( idx: [`int`](class_int.md) )<div id="class_itemlist_method_deselect"></div>

Ensures the item associated with the specified index is not selected.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_itemlist_method_deselect_all"></div>

`void` **deselect_all** ( )<div id="class_itemlist_method_deselect_all"></div>

Ensures there are no items selected.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_itemlist_method_ensure_current_is_visible"></div>

`void` **ensure_current_is_visible** ( )<div id="class_itemlist_method_ensure_current_is_visible"></div>

Ensure current selection is visible, adjusting the scroll position as necessary.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_itemlist_method_force_update_list_size"></div>

`void` **force_update_list_size** ( )<div id="class_itemlist_method_force_update_list_size"></div>

Forces an update to the list size based on its items. This happens automatically whenever size of the items, or other relevant settings like [`auto_height`](#class_itemlist_property_auto_height), change. The method can be used to trigger the update ahead of next drawing pass.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_itemlist_method_get_item_at_position"></div>

[`int`](class_int.md) **get_item_at_position** ( position: [`Vector2`](class_vector2.md), exact: [`bool`](class_bool.md) = false ) const[^const]<div id="class_itemlist_method_get_item_at_position"></div>

Returns the item index at the given `position`.

When there is no item at that point, -1 will be returned if `exact` is `true`, and the closest item index will be returned otherwise.

 **Note:** The returned value is unreliable if called right after modifying the **ItemList**, before it redraws in the next frame.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_itemlist_method_get_item_custom_bg_color"></div>

[`Color`](class_color.md) **get_item_custom_bg_color** ( idx: [`int`](class_int.md) ) const[^const]<div id="class_itemlist_method_get_item_custom_bg_color"></div>

Returns the custom background color of the item specified by `idx` index.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_itemlist_method_get_item_custom_fg_color"></div>

[`Color`](class_color.md) **get_item_custom_fg_color** ( idx: [`int`](class_int.md) ) const[^const]<div id="class_itemlist_method_get_item_custom_fg_color"></div>

Returns the custom foreground color of the item specified by `idx` index.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_itemlist_method_get_item_icon"></div>

[`Texture2D`](class_texture2d.md) **get_item_icon** ( idx: [`int`](class_int.md) ) const[^const]<div id="class_itemlist_method_get_item_icon"></div>

Returns the icon associated with the specified index.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_itemlist_method_get_item_icon_modulate"></div>

[`Color`](class_color.md) **get_item_icon_modulate** ( idx: [`int`](class_int.md) ) const[^const]<div id="class_itemlist_method_get_item_icon_modulate"></div>

Returns a [`Color`](class_color.md) modulating item's icon at the specified index.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_itemlist_method_get_item_icon_region"></div>

[`Rect2`](class_rect2.md) **get_item_icon_region** ( idx: [`int`](class_int.md) ) const[^const]<div id="class_itemlist_method_get_item_icon_region"></div>

Returns the region of item's icon used. The whole icon will be used if the region has no area.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_itemlist_method_get_item_language"></div>

[`String`](class_string.md) **get_item_language** ( idx: [`int`](class_int.md) ) const[^const]<div id="class_itemlist_method_get_item_language"></div>

Returns item's text language code.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_itemlist_method_get_item_metadata"></div>

[`Variant`](class_variant.md) **get_item_metadata** ( idx: [`int`](class_int.md) ) const[^const]<div id="class_itemlist_method_get_item_metadata"></div>

Returns the metadata value of the specified index.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_itemlist_method_get_item_rect"></div>

[`Rect2`](class_rect2.md) **get_item_rect** ( idx: [`int`](class_int.md), expand: [`bool`](class_bool.md) = true ) const[^const]<div id="class_itemlist_method_get_item_rect"></div>

Returns the position and size of the item with the specified index, in the coordinate system of the **ItemList** node. If `expand` is `true` the last column expands to fill the rest of the row.

 **Note:** The returned value is unreliable if called right after modifying the **ItemList**, before it redraws in the next frame.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_itemlist_method_get_item_text"></div>

[`String`](class_string.md) **get_item_text** ( idx: [`int`](class_int.md) ) const[^const]<div id="class_itemlist_method_get_item_text"></div>

Returns the text associated with the specified index.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_itemlist_method_get_item_text_direction"></div>

[TextDirection](#enum_control_textdirection) **get_item_text_direction** ( idx: [`int`](class_int.md) ) const[^const]<div id="class_itemlist_method_get_item_text_direction"></div>

Returns item's text base writing direction.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_itemlist_method_get_item_tooltip"></div>

[`String`](class_string.md) **get_item_tooltip** ( idx: [`int`](class_int.md) ) const[^const]<div id="class_itemlist_method_get_item_tooltip"></div>

Returns the tooltip hint associated with the specified index.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_itemlist_method_get_selected_items"></div>

[`PackedInt32Array`](class_packedint32array.md) **get_selected_items** ( )<div id="class_itemlist_method_get_selected_items"></div>

Returns an array with the indexes of the selected items.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_itemlist_method_get_v_scroll_bar"></div>

[`VScrollBar`](class_vscrollbar.md) **get_v_scroll_bar** ( )<div id="class_itemlist_method_get_v_scroll_bar"></div>

Returns the vertical scrollbar.

 **Warning:** This is a required internal node, removing and freeing it may cause a crash. If you wish to hide it or any of its children, use their [`CanvasItem.visible`](#class_canvasitem_property_visible) property.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_itemlist_method_is_anything_selected"></div>

[`bool`](class_bool.md) **is_anything_selected** ( )<div id="class_itemlist_method_is_anything_selected"></div>

Returns `true` if one or more items are selected.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_itemlist_method_is_item_disabled"></div>

[`bool`](class_bool.md) **is_item_disabled** ( idx: [`int`](class_int.md) ) const[^const]<div id="class_itemlist_method_is_item_disabled"></div>

Returns `true` if the item at the specified index is disabled.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_itemlist_method_is_item_icon_transposed"></div>

[`bool`](class_bool.md) **is_item_icon_transposed** ( idx: [`int`](class_int.md) ) const[^const]<div id="class_itemlist_method_is_item_icon_transposed"></div>

Returns `true` if the item icon will be drawn transposed, i.e. the X and Y axes are swapped.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_itemlist_method_is_item_selectable"></div>

[`bool`](class_bool.md) **is_item_selectable** ( idx: [`int`](class_int.md) ) const[^const]<div id="class_itemlist_method_is_item_selectable"></div>

Returns `true` if the item at the specified index is selectable.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_itemlist_method_is_item_tooltip_enabled"></div>

[`bool`](class_bool.md) **is_item_tooltip_enabled** ( idx: [`int`](class_int.md) ) const[^const]<div id="class_itemlist_method_is_item_tooltip_enabled"></div>

Returns `true` if the tooltip is enabled for specified item index.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_itemlist_method_is_selected"></div>

[`bool`](class_bool.md) **is_selected** ( idx: [`int`](class_int.md) ) const[^const]<div id="class_itemlist_method_is_selected"></div>

Returns `true` if the item at the specified index is currently selected.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_itemlist_method_move_item"></div>

`void` **move_item** ( from_idx: [`int`](class_int.md), to_idx: [`int`](class_int.md) )<div id="class_itemlist_method_move_item"></div>

Moves item from index `from_idx` to `to_idx`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_itemlist_method_remove_item"></div>

`void` **remove_item** ( idx: [`int`](class_int.md) )<div id="class_itemlist_method_remove_item"></div>

Removes the item specified by `idx` index from the list.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_itemlist_method_select"></div>

`void` **select** ( idx: [`int`](class_int.md), single: [`bool`](class_bool.md) = true )<div id="class_itemlist_method_select"></div>

Select the item at the specified index.

 **Note:** This method does not trigger the item selection signal.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_itemlist_method_set_item_custom_bg_color"></div>

`void` **set_item_custom_bg_color** ( idx: [`int`](class_int.md), custom_bg_color: [`Color`](class_color.md) )<div id="class_itemlist_method_set_item_custom_bg_color"></div>

Sets the background color of the item specified by `idx` index to the specified [`Color`](class_color.md).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_itemlist_method_set_item_custom_fg_color"></div>

`void` **set_item_custom_fg_color** ( idx: [`int`](class_int.md), custom_fg_color: [`Color`](class_color.md) )<div id="class_itemlist_method_set_item_custom_fg_color"></div>

Sets the foreground color of the item specified by `idx` index to the specified [`Color`](class_color.md).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_itemlist_method_set_item_disabled"></div>

`void` **set_item_disabled** ( idx: [`int`](class_int.md), disabled: [`bool`](class_bool.md) )<div id="class_itemlist_method_set_item_disabled"></div>

Disables (or enables) the item at the specified index.

Disabled items cannot be selected and do not trigger activation signals (when double-clicking or pressing <i class="fa fa-gamepad"></i>`Enter`).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_itemlist_method_set_item_icon"></div>

`void` **set_item_icon** ( idx: [`int`](class_int.md), icon: [`Texture2D`](class_texture2d.md) )<div id="class_itemlist_method_set_item_icon"></div>

Sets (or replaces) the icon's [`Texture2D`](class_texture2d.md) associated with the specified index.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_itemlist_method_set_item_icon_modulate"></div>

`void` **set_item_icon_modulate** ( idx: [`int`](class_int.md), modulate: [`Color`](class_color.md) )<div id="class_itemlist_method_set_item_icon_modulate"></div>

Sets a modulating [`Color`](class_color.md) of the item associated with the specified index.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_itemlist_method_set_item_icon_region"></div>

`void` **set_item_icon_region** ( idx: [`int`](class_int.md), rect: [`Rect2`](class_rect2.md) )<div id="class_itemlist_method_set_item_icon_region"></div>

Sets the region of item's icon used. The whole icon will be used if the region has no area.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_itemlist_method_set_item_icon_transposed"></div>

`void` **set_item_icon_transposed** ( idx: [`int`](class_int.md), transposed: [`bool`](class_bool.md) )<div id="class_itemlist_method_set_item_icon_transposed"></div>

Sets whether the item icon will be drawn transposed.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_itemlist_method_set_item_language"></div>

`void` **set_item_language** ( idx: [`int`](class_int.md), language: [`String`](class_string.md) )<div id="class_itemlist_method_set_item_language"></div>

Sets language code of item's text used for line-breaking and text shaping algorithms, if left empty current locale is used instead.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_itemlist_method_set_item_metadata"></div>

`void` **set_item_metadata** ( idx: [`int`](class_int.md), metadata: [`Variant`](class_variant.md) )<div id="class_itemlist_method_set_item_metadata"></div>

Sets a value (of any type) to be stored with the item associated with the specified index.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_itemlist_method_set_item_selectable"></div>

`void` **set_item_selectable** ( idx: [`int`](class_int.md), selectable: [`bool`](class_bool.md) )<div id="class_itemlist_method_set_item_selectable"></div>

Allows or disallows selection of the item associated with the specified index.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_itemlist_method_set_item_text"></div>

`void` **set_item_text** ( idx: [`int`](class_int.md), text: [`String`](class_string.md) )<div id="class_itemlist_method_set_item_text"></div>

Sets text of the item associated with the specified index.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_itemlist_method_set_item_text_direction"></div>

`void` **set_item_text_direction** ( idx: [`int`](class_int.md), direction: [TextDirection](#enum_control_textdirection) )<div id="class_itemlist_method_set_item_text_direction"></div>

Sets item's text base writing direction.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_itemlist_method_set_item_tooltip"></div>

`void` **set_item_tooltip** ( idx: [`int`](class_int.md), tooltip: [`String`](class_string.md) )<div id="class_itemlist_method_set_item_tooltip"></div>

Sets the tooltip hint for the item associated with the specified index.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_itemlist_method_set_item_tooltip_enabled"></div>

`void` **set_item_tooltip_enabled** ( idx: [`int`](class_int.md), enable: [`bool`](class_bool.md) )<div id="class_itemlist_method_set_item_tooltip_enabled"></div>

Sets whether the tooltip hint is enabled for specified item index.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_itemlist_method_sort_items_by_text"></div>

`void` **sort_items_by_text** ( )<div id="class_itemlist_method_sort_items_by_text"></div>

Sorts items in the list by their text.

<!-- rst-class:: classref-section-separator -->

---

## 主题属性说明

<div id="_class_itemlist_theme_color_font_color"></div>

[`Color`](class_color.md) **font_color** = ``Color(0.65, 0.65, 0.65, 1)`` <div id="class_itemlist_theme_color_font_color"></div>

Default text [`Color`](class_color.md) of the item.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_itemlist_theme_color_font_hovered_color"></div>

[`Color`](class_color.md) **font_hovered_color** = ``Color(0.95, 0.95, 0.95, 1)`` <div id="class_itemlist_theme_color_font_hovered_color"></div>

Text [`Color`](class_color.md) used when the item is hovered and not selected yet.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_itemlist_theme_color_font_outline_color"></div>

[`Color`](class_color.md) **font_outline_color** = ``Color(0, 0, 0, 1)`` <div id="class_itemlist_theme_color_font_outline_color"></div>

The tint of text outline of the item.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_itemlist_theme_color_font_selected_color"></div>

[`Color`](class_color.md) **font_selected_color** = ``Color(1, 1, 1, 1)`` <div id="class_itemlist_theme_color_font_selected_color"></div>

Text [`Color`](class_color.md) used when the item is selected.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_itemlist_theme_color_guide_color"></div>

[`Color`](class_color.md) **guide_color** = ``Color(0.7, 0.7, 0.7, 0.25)`` <div id="class_itemlist_theme_color_guide_color"></div>

[`Color`](class_color.md) of the guideline. The guideline is a line drawn between each row of items.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_itemlist_theme_constant_h_separation"></div>

[`int`](class_int.md) **h_separation** = ``4`` <div id="class_itemlist_theme_constant_h_separation"></div>

The horizontal spacing between items.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_itemlist_theme_constant_icon_margin"></div>

[`int`](class_int.md) **icon_margin** = ``4`` <div id="class_itemlist_theme_constant_icon_margin"></div>

The spacing between item's icon and text.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_itemlist_theme_constant_line_separation"></div>

[`int`](class_int.md) **line_separation** = ``2`` <div id="class_itemlist_theme_constant_line_separation"></div>

The vertical spacing between each line of text.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_itemlist_theme_constant_outline_size"></div>

[`int`](class_int.md) **outline_size** = ``0`` <div id="class_itemlist_theme_constant_outline_size"></div>

The size of the item text outline.

 **Note:** If using a font with [`FontFile.multichannel_signed_distance_field`](#class_fontfile_property_multichannel_signed_distance_field) enabled, its [`FontFile.msdf_pixel_range`](#class_fontfile_property_msdf_pixel_range) must be set to at least *twice* the value of [`outline_size`](#class_itemlist_theme_constant_outline_size) for outline rendering to look correct. Otherwise, the outline may appear to be cut off earlier than intended.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_itemlist_theme_constant_v_separation"></div>

[`int`](class_int.md) **v_separation** = ``4`` <div id="class_itemlist_theme_constant_v_separation"></div>

The vertical spacing between items.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_itemlist_theme_font_font"></div>

[`Font`](class_font.md) **font** <div id="class_itemlist_theme_font_font"></div>

[`Font`](class_font.md) of the item's text.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_itemlist_theme_font_size_font_size"></div>

[`int`](class_int.md) **font_size** <div id="class_itemlist_theme_font_size_font_size"></div>

Font size of the item's text.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_itemlist_theme_style_cursor"></div>

[`StyleBox`](class_stylebox.md) **cursor** <div id="class_itemlist_theme_style_cursor"></div>

[`StyleBox`](class_stylebox.md) used for the cursor, when the **ItemList** is being focused.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_itemlist_theme_style_cursor_unfocused"></div>

[`StyleBox`](class_stylebox.md) **cursor_unfocused** <div id="class_itemlist_theme_style_cursor_unfocused"></div>

[`StyleBox`](class_stylebox.md) used for the cursor, when the **ItemList** is not being focused.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_itemlist_theme_style_focus"></div>

[`StyleBox`](class_stylebox.md) **focus** <div id="class_itemlist_theme_style_focus"></div>

The focused style for the **ItemList**, drawn on top of the background, but below everything else.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_itemlist_theme_style_hovered"></div>

[`StyleBox`](class_stylebox.md) **hovered** <div id="class_itemlist_theme_style_hovered"></div>

[`StyleBox`](class_stylebox.md) for the hovered, but not selected items.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_itemlist_theme_style_panel"></div>

[`StyleBox`](class_stylebox.md) **panel** <div id="class_itemlist_theme_style_panel"></div>

The background style for the **ItemList**.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_itemlist_theme_style_selected"></div>

[`StyleBox`](class_stylebox.md) **selected** <div id="class_itemlist_theme_style_selected"></div>

[`StyleBox`](class_stylebox.md) for the selected items, used when the **ItemList** is not being focused.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_itemlist_theme_style_selected_focus"></div>

[`StyleBox`](class_stylebox.md) **selected_focus** <div id="class_itemlist_theme_style_selected_focus"></div>

[`StyleBox`](class_stylebox.md) for the selected items, used when the **ItemList** is being focused.

[^virtual]: 本方法通常需要用户覆盖才能生效。
[^const]: 本方法无副作用，不会修改该实例的任何成员变量。
[^vararg]: 本方法除了能接受在此处描述的参数外，还能够继续接受任意数量的参数。
[^constructor]: 本方法用于构造某个类型。
[^static]: 调用本方法无需实例，可直接使用类名进行调用。
[^operator]: 本方法描述的是使用本类型作为左操作数的有效运算符。
[^bitfield]: 这个值是由下列位标志构成位掩码的整数。
[^void]: 无返回值。
