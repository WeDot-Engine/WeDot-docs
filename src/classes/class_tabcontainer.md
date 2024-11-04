<!-- ⚠ 请勿编辑本文件 ⚠ -->
<!-- 本文档使用脚本从 WeDot 引擎源码仓库生成。 -->
<!-- 生成脚本：https://github.com/WeDot-Engine/WeDot/tree/4.3/doc/tools/make_md.py； -->
<!-- 原文件：https://github.com/WeDot-Engine/WeDot/tree/4.3/doc/classes/TabContainer.xml。 -->

<div id="_class_tabcontainer"></div>

# TabContainer

**继承：** [`Container`](class_container.md) **<** [`Control`](class_control.md) **<** [`CanvasItem`](class_canvasitem.md) **<** [`Node`](class_node.md) **<** [`Object`](class_object.md)

A container that creates a tab for each child control, displaying only the active tab's control.

## 描述

Arranges child controls into a tabbed view, creating a tab for each one. The active tab's corresponding control is made visible, while all other child controls are hidden. Ignores non-control children.

 **Note:** The drawing of the clickable tabs is handled by this node; [`TabBar`](class_tabbar.md) is not needed.

## 属性

| [`bool`](class_bool.md)                       | [`all_tabs_in_front`](#class_tabcontainer_property_all_tabs_in_front)                       | ``false`` |
| [`bool`](class_bool.md)                       | [`clip_tabs`](#class_tabcontainer_property_clip_tabs)                                       | ``true``  |
| [`int`](class_int.md)                         | [`current_tab`](#class_tabcontainer_property_current_tab)                                   | ``-1``    |
| [`bool`](class_bool.md)                       | [`deselect_enabled`](#class_tabcontainer_property_deselect_enabled)                         | ``false`` |
| [`bool`](class_bool.md)                       | [`drag_to_rearrange_enabled`](#class_tabcontainer_property_drag_to_rearrange_enabled)       | ``false`` |
| [AlignmentMode](#enum_tabbar_alignmentmode)   | [`tab_alignment`](#class_tabcontainer_property_tab_alignment)                               | ``0``     |
| [FocusMode](#enum_control_focusmode)          | [`tab_focus_mode`](#class_tabcontainer_property_tab_focus_mode)                             | ``2``     |
| [TabPosition](#enum_tabcontainer_tabposition) | [`tabs_position`](#class_tabcontainer_property_tabs_position)                               | ``0``     |
| [`int`](class_int.md)                         | [`tabs_rearrange_group`](#class_tabcontainer_property_tabs_rearrange_group)                 | ``-1``    |
| [`bool`](class_bool.md)                       | [`tabs_visible`](#class_tabcontainer_property_tabs_visible)                                 | ``true``  |
| [`bool`](class_bool.md)                       | [`use_hidden_tabs_for_min_size`](#class_tabcontainer_property_use_hidden_tabs_for_min_size) | ``false`` |

## 方法

| [`Control`](class_control.md)     | [`get_current_tab_control`](#class_tabcontainer_method_get_current_tab_control) ( ) const[^const]                                                   |
| [`Popup`](class_popup.md)         | [`get_popup`](#class_tabcontainer_method_get_popup) ( ) const[^const]                                                                               |
| [`int`](class_int.md)             | [`get_previous_tab`](#class_tabcontainer_method_get_previous_tab) ( ) const[^const]                                                                 |
| [`TabBar`](class_tabbar.md)       | [`get_tab_bar`](#class_tabcontainer_method_get_tab_bar) ( ) const[^const]                                                                           |
| [`Texture2D`](class_texture2d.md) | [`get_tab_button_icon`](#class_tabcontainer_method_get_tab_button_icon) ( tab_idx: [`int`](class_int.md) ) const[^const]                            |
| [`Control`](class_control.md)     | [`get_tab_control`](#class_tabcontainer_method_get_tab_control) ( tab_idx: [`int`](class_int.md) ) const[^const]                                    |
| [`int`](class_int.md)             | [`get_tab_count`](#class_tabcontainer_method_get_tab_count) ( ) const[^const]                                                                       |
| [`Texture2D`](class_texture2d.md) | [`get_tab_icon`](#class_tabcontainer_method_get_tab_icon) ( tab_idx: [`int`](class_int.md) ) const[^const]                                          |
| [`int`](class_int.md)             | [`get_tab_icon_max_width`](#class_tabcontainer_method_get_tab_icon_max_width) ( tab_idx: [`int`](class_int.md) ) const[^const]                      |
| [`int`](class_int.md)             | [`get_tab_idx_at_point`](#class_tabcontainer_method_get_tab_idx_at_point) ( point: [`Vector2`](class_vector2.md) ) const[^const]                    |
| [`int`](class_int.md)             | [`get_tab_idx_from_control`](#class_tabcontainer_method_get_tab_idx_from_control) ( control: [`Control`](class_control.md) ) const[^const]          |
| [`Variant`](class_variant.md)     | [`get_tab_metadata`](#class_tabcontainer_method_get_tab_metadata) ( tab_idx: [`int`](class_int.md) ) const[^const]                                  |
| [`String`](class_string.md)       | [`get_tab_title`](#class_tabcontainer_method_get_tab_title) ( tab_idx: [`int`](class_int.md) ) const[^const]                                        |
| [`String`](class_string.md)       | [`get_tab_tooltip`](#class_tabcontainer_method_get_tab_tooltip) ( tab_idx: [`int`](class_int.md) ) const[^const]                                    |
| [`bool`](class_bool.md)           | [`is_tab_disabled`](#class_tabcontainer_method_is_tab_disabled) ( tab_idx: [`int`](class_int.md) ) const[^const]                                    |
| [`bool`](class_bool.md)           | [`is_tab_hidden`](#class_tabcontainer_method_is_tab_hidden) ( tab_idx: [`int`](class_int.md) ) const[^const]                                        |
| [`bool`](class_bool.md)           | [`select_next_available`](#class_tabcontainer_method_select_next_available) ( )                                                                     |
| [`bool`](class_bool.md)           | [`select_previous_available`](#class_tabcontainer_method_select_previous_available) ( )                                                             |
| `void`                            | [`set_popup`](#class_tabcontainer_method_set_popup) ( popup: [`Node`](class_node.md) )                                                              |
| `void`                            | [`set_tab_button_icon`](#class_tabcontainer_method_set_tab_button_icon) ( tab_idx: [`int`](class_int.md), icon: [`Texture2D`](class_texture2d.md) ) |
| `void`                            | [`set_tab_disabled`](#class_tabcontainer_method_set_tab_disabled) ( tab_idx: [`int`](class_int.md), disabled: [`bool`](class_bool.md) )             |
| `void`                            | [`set_tab_hidden`](#class_tabcontainer_method_set_tab_hidden) ( tab_idx: [`int`](class_int.md), hidden: [`bool`](class_bool.md) )                   |
| `void`                            | [`set_tab_icon`](#class_tabcontainer_method_set_tab_icon) ( tab_idx: [`int`](class_int.md), icon: [`Texture2D`](class_texture2d.md) )               |
| `void`                            | [`set_tab_icon_max_width`](#class_tabcontainer_method_set_tab_icon_max_width) ( tab_idx: [`int`](class_int.md), width: [`int`](class_int.md) )      |
| `void`                            | [`set_tab_metadata`](#class_tabcontainer_method_set_tab_metadata) ( tab_idx: [`int`](class_int.md), metadata: [`Variant`](class_variant.md) )       |
| `void`                            | [`set_tab_title`](#class_tabcontainer_method_set_tab_title) ( tab_idx: [`int`](class_int.md), title: [`String`](class_string.md) )                  |
| `void`                            | [`set_tab_tooltip`](#class_tabcontainer_method_set_tab_tooltip) ( tab_idx: [`int`](class_int.md), tooltip: [`String`](class_string.md) )            |

## 主题属性

| [`Color`](class_color.md)         | [`drop_mark_color`](#class_tabcontainer_theme_color_drop_mark_color)             | ``Color(1, 1, 1, 1)``               |
| [`Color`](class_color.md)         | [`font_disabled_color`](#class_tabcontainer_theme_color_font_disabled_color)     | ``Color(0.875, 0.875, 0.875, 0.5)`` |
| [`Color`](class_color.md)         | [`font_hovered_color`](#class_tabcontainer_theme_color_font_hovered_color)       | ``Color(0.95, 0.95, 0.95, 1)``      |
| [`Color`](class_color.md)         | [`font_outline_color`](#class_tabcontainer_theme_color_font_outline_color)       | ``Color(0, 0, 0, 1)``               |
| [`Color`](class_color.md)         | [`font_selected_color`](#class_tabcontainer_theme_color_font_selected_color)     | ``Color(0.95, 0.95, 0.95, 1)``      |
| [`Color`](class_color.md)         | [`font_unselected_color`](#class_tabcontainer_theme_color_font_unselected_color) | ``Color(0.7, 0.7, 0.7, 1)``         |
| [`int`](class_int.md)             | [`icon_max_width`](#class_tabcontainer_theme_constant_icon_max_width)            | ``0``                               |
| [`int`](class_int.md)             | [`icon_separation`](#class_tabcontainer_theme_constant_icon_separation)          | ``4``                               |
| [`int`](class_int.md)             | [`outline_size`](#class_tabcontainer_theme_constant_outline_size)                | ``0``                               |
| [`int`](class_int.md)             | [`side_margin`](#class_tabcontainer_theme_constant_side_margin)                  | ``8``                               |
| [`Font`](class_font.md)           | [`font`](#class_tabcontainer_theme_font_font)                                    |                                     |
| [`int`](class_int.md)             | [`font_size`](#class_tabcontainer_theme_font_size_font_size)                     |                                     |
| [`Texture2D`](class_texture2d.md) | [`decrement`](#class_tabcontainer_theme_icon_decrement)                          |                                     |
| [`Texture2D`](class_texture2d.md) | [`decrement_highlight`](#class_tabcontainer_theme_icon_decrement_highlight)      |                                     |
| [`Texture2D`](class_texture2d.md) | [`drop_mark`](#class_tabcontainer_theme_icon_drop_mark)                          |                                     |
| [`Texture2D`](class_texture2d.md) | [`increment`](#class_tabcontainer_theme_icon_increment)                          |                                     |
| [`Texture2D`](class_texture2d.md) | [`increment_highlight`](#class_tabcontainer_theme_icon_increment_highlight)      |                                     |
| [`Texture2D`](class_texture2d.md) | [`menu`](#class_tabcontainer_theme_icon_menu)                                    |                                     |
| [`Texture2D`](class_texture2d.md) | [`menu_highlight`](#class_tabcontainer_theme_icon_menu_highlight)                |                                     |
| [`StyleBox`](class_stylebox.md)   | [`panel`](#class_tabcontainer_theme_style_panel)                                 |                                     |
| [`StyleBox`](class_stylebox.md)   | [`tab_disabled`](#class_tabcontainer_theme_style_tab_disabled)                   |                                     |
| [`StyleBox`](class_stylebox.md)   | [`tab_focus`](#class_tabcontainer_theme_style_tab_focus)                         |                                     |
| [`StyleBox`](class_stylebox.md)   | [`tab_hovered`](#class_tabcontainer_theme_style_tab_hovered)                     |                                     |
| [`StyleBox`](class_stylebox.md)   | [`tab_selected`](#class_tabcontainer_theme_style_tab_selected)                   |                                     |
| [`StyleBox`](class_stylebox.md)   | [`tab_unselected`](#class_tabcontainer_theme_style_tab_unselected)               |                                     |
| [`StyleBox`](class_stylebox.md)   | [`tabbar_background`](#class_tabcontainer_theme_style_tabbar_background)         |                                     |

<!-- rst-class:: classref-section-separator -->

---

## 信号

<div id="_class_class_tabcontainer_signal_active_tab_rearranged"></div>

**active_tab_rearranged** ( idx_to: [`int`](class_int.md) ) <div id="class_tabcontainer_signal_active_tab_rearranged"></div>

Emitted when the active tab is rearranged via mouse drag. See [`drag_to_rearrange_enabled`](#class_tabcontainer_property_drag_to_rearrange_enabled).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_class_tabcontainer_signal_pre_popup_pressed"></div>

**pre_popup_pressed** ( ) <div id="class_tabcontainer_signal_pre_popup_pressed"></div>

Emitted when the **TabContainer**'s [`Popup`](class_popup.md) button is clicked. See [`set_popup`](#class_tabcontainer_method_set_popup) for details.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_class_tabcontainer_signal_tab_button_pressed"></div>

**tab_button_pressed** ( tab: [`int`](class_int.md) ) <div id="class_tabcontainer_signal_tab_button_pressed"></div>

Emitted when the user clicks on the button icon on this tab.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_class_tabcontainer_signal_tab_changed"></div>

**tab_changed** ( tab: [`int`](class_int.md) ) <div id="class_tabcontainer_signal_tab_changed"></div>

Emitted when switching to another tab.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_class_tabcontainer_signal_tab_clicked"></div>

**tab_clicked** ( tab: [`int`](class_int.md) ) <div id="class_tabcontainer_signal_tab_clicked"></div>

Emitted when a tab is clicked, even if it is the current tab.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_class_tabcontainer_signal_tab_hovered"></div>

**tab_hovered** ( tab: [`int`](class_int.md) ) <div id="class_tabcontainer_signal_tab_hovered"></div>

Emitted when a tab is hovered by the mouse.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_class_tabcontainer_signal_tab_selected"></div>

**tab_selected** ( tab: [`int`](class_int.md) ) <div id="class_tabcontainer_signal_tab_selected"></div>

Emitted when a tab is selected via click, directional input, or script, even if it is the current tab.

<!-- rst-class:: classref-section-separator -->

---

## 枚举

<div id="_class_enum_tabcontainer_tabposition"></div>

enum **TabPosition**: <div id="enum_tabcontainer_tabposition"></div>

<div id="_class_tabcontainer_constant_position_top"></div>

[TabPosition](#enum_tabcontainer_tabposition) **POSITION_TOP** = ``0``

Places the tab bar at the top.

<div id="_class_tabcontainer_constant_position_bottom"></div>

[TabPosition](#enum_tabcontainer_tabposition) **POSITION_BOTTOM** = ``1``

Places the tab bar at the bottom. The tab bar's [`StyleBox`](class_stylebox.md) will be flipped vertically.

<div id="_class_tabcontainer_constant_position_max"></div>

[TabPosition](#enum_tabcontainer_tabposition) **POSITION_MAX** = ``2``

Represents the size of the [TabPosition](#enum_tabcontainer_tabposition) enum.

<!-- rst-class:: classref-section-separator -->

---

## 属性说明

<div id="_class_tabcontainer_property_all_tabs_in_front"></div>

[`bool`](class_bool.md) **all_tabs_in_front** = ``false`` <div id="class_tabcontainer_property_all_tabs_in_front"></div>

- `void` **set_all_tabs_in_front** ( value: [`bool`](class_bool.md) )
- [`bool`](class_bool.md) **is_all_tabs_in_front** ( )

If `true`, all tabs are drawn in front of the panel. If `false`, inactive tabs are drawn behind the panel.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_tabcontainer_property_clip_tabs"></div>

[`bool`](class_bool.md) **clip_tabs** = ``true`` <div id="class_tabcontainer_property_clip_tabs"></div>

- `void` **set_clip_tabs** ( value: [`bool`](class_bool.md) )
- [`bool`](class_bool.md) **get_clip_tabs** ( )

If `true`, tabs overflowing this node's width will be hidden, displaying two navigation buttons instead. Otherwise, this node's minimum size is updated so that all tabs are visible.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_tabcontainer_property_current_tab"></div>

[`int`](class_int.md) **current_tab** = ``-1`` <div id="class_tabcontainer_property_current_tab"></div>

- `void` **set_current_tab** ( value: [`int`](class_int.md) )
- [`int`](class_int.md) **get_current_tab** ( )

The current tab index. When set, this index's [`Control`](class_control.md) node's `visible` property is set to `true` and all others are set to `false`.

A value of `-1` means that no tab is selected.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_tabcontainer_property_deselect_enabled"></div>

[`bool`](class_bool.md) **deselect_enabled** = ``false`` <div id="class_tabcontainer_property_deselect_enabled"></div>

- `void` **set_deselect_enabled** ( value: [`bool`](class_bool.md) )
- [`bool`](class_bool.md) **get_deselect_enabled** ( )

If `true`, all tabs can be deselected so that no tab is selected. Click on the [`current_tab`](#class_tabcontainer_property_current_tab) to deselect it.

Only the tab header will be shown if no tabs are selected.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_tabcontainer_property_drag_to_rearrange_enabled"></div>

[`bool`](class_bool.md) **drag_to_rearrange_enabled** = ``false`` <div id="class_tabcontainer_property_drag_to_rearrange_enabled"></div>

- `void` **set_drag_to_rearrange_enabled** ( value: [`bool`](class_bool.md) )
- [`bool`](class_bool.md) **get_drag_to_rearrange_enabled** ( )

If `true`, tabs can be rearranged with mouse drag.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_tabcontainer_property_tab_alignment"></div>

[AlignmentMode](#enum_tabbar_alignmentmode) **tab_alignment** = ``0`` <div id="class_tabcontainer_property_tab_alignment"></div>

- `void` **set_tab_alignment** ( value: [AlignmentMode](#enum_tabbar_alignmentmode) )
- [AlignmentMode](#enum_tabbar_alignmentmode) **get_tab_alignment** ( )

Sets the position at which tabs will be placed. See [AlignmentMode](#enum_tabbar_alignmentmode) for details.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_tabcontainer_property_tab_focus_mode"></div>

[FocusMode](#enum_control_focusmode) **tab_focus_mode** = ``2`` <div id="class_tabcontainer_property_tab_focus_mode"></div>

- `void` **set_tab_focus_mode** ( value: [FocusMode](#enum_control_focusmode) )
- [FocusMode](#enum_control_focusmode) **get_tab_focus_mode** ( )

The focus access mode for the internal [`TabBar`](class_tabbar.md) node.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_tabcontainer_property_tabs_position"></div>

[TabPosition](#enum_tabcontainer_tabposition) **tabs_position** = ``0`` <div id="class_tabcontainer_property_tabs_position"></div>

- `void` **set_tabs_position** ( value: [TabPosition](#enum_tabcontainer_tabposition) )
- [TabPosition](#enum_tabcontainer_tabposition) **get_tabs_position** ( )

Sets the position of the tab bar. See [TabPosition](#enum_tabcontainer_tabposition) for details.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_tabcontainer_property_tabs_rearrange_group"></div>

[`int`](class_int.md) **tabs_rearrange_group** = ``-1`` <div id="class_tabcontainer_property_tabs_rearrange_group"></div>

- `void` **set_tabs_rearrange_group** ( value: [`int`](class_int.md) )
- [`int`](class_int.md) **get_tabs_rearrange_group** ( )

**TabContainer** s with the same rearrange group ID will allow dragging the tabs between them. Enable drag with [`drag_to_rearrange_enabled`](#class_tabcontainer_property_drag_to_rearrange_enabled).

Setting this to `-1` will disable rearranging between **TabContainer** s.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_tabcontainer_property_tabs_visible"></div>

[`bool`](class_bool.md) **tabs_visible** = ``true`` <div id="class_tabcontainer_property_tabs_visible"></div>

- `void` **set_tabs_visible** ( value: [`bool`](class_bool.md) )
- [`bool`](class_bool.md) **are_tabs_visible** ( )

If `true`, tabs are visible. If `false`, tabs' content and titles are hidden.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_tabcontainer_property_use_hidden_tabs_for_min_size"></div>

[`bool`](class_bool.md) **use_hidden_tabs_for_min_size** = ``false`` <div id="class_tabcontainer_property_use_hidden_tabs_for_min_size"></div>

- `void` **set_use_hidden_tabs_for_min_size** ( value: [`bool`](class_bool.md) )
- [`bool`](class_bool.md) **get_use_hidden_tabs_for_min_size** ( )

If `true`, child [`Control`](class_control.md) nodes that are hidden have their minimum size take into account in the total, instead of only the currently visible one.

<!-- rst-class:: classref-section-separator -->

---

## 方法说明

<div id="_class_tabcontainer_method_get_current_tab_control"></div>

[`Control`](class_control.md) **get_current_tab_control** ( ) const[^const]<div id="class_tabcontainer_method_get_current_tab_control"></div>

Returns the child [`Control`](class_control.md) node located at the active tab index.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_tabcontainer_method_get_popup"></div>

[`Popup`](class_popup.md) **get_popup** ( ) const[^const]<div id="class_tabcontainer_method_get_popup"></div>

Returns the [`Popup`](class_popup.md) node instance if one has been set already with [`set_popup`](#class_tabcontainer_method_set_popup).

 **Warning:** This is a required internal node, removing and freeing it may cause a crash. If you wish to hide it or any of its children, use their [`Window.visible`](#class_window_property_visible) property.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_tabcontainer_method_get_previous_tab"></div>

[`int`](class_int.md) **get_previous_tab** ( ) const[^const]<div id="class_tabcontainer_method_get_previous_tab"></div>

Returns the previously active tab index.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_tabcontainer_method_get_tab_bar"></div>

[`TabBar`](class_tabbar.md) **get_tab_bar** ( ) const[^const]<div id="class_tabcontainer_method_get_tab_bar"></div>

Returns the [`TabBar`](class_tabbar.md) contained in this container.

 **Warning:** This is a required internal node, removing and freeing it or editing its tabs may cause a crash. If you wish to edit the tabs, use the methods provided in **TabContainer**.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_tabcontainer_method_get_tab_button_icon"></div>

[`Texture2D`](class_texture2d.md) **get_tab_button_icon** ( tab_idx: [`int`](class_int.md) ) const[^const]<div id="class_tabcontainer_method_get_tab_button_icon"></div>

Returns the button icon from the tab at index `tab_idx`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_tabcontainer_method_get_tab_control"></div>

[`Control`](class_control.md) **get_tab_control** ( tab_idx: [`int`](class_int.md) ) const[^const]<div id="class_tabcontainer_method_get_tab_control"></div>

Returns the [`Control`](class_control.md) node from the tab at index `tab_idx`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_tabcontainer_method_get_tab_count"></div>

[`int`](class_int.md) **get_tab_count** ( ) const[^const]<div id="class_tabcontainer_method_get_tab_count"></div>

Returns the number of tabs.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_tabcontainer_method_get_tab_icon"></div>

[`Texture2D`](class_texture2d.md) **get_tab_icon** ( tab_idx: [`int`](class_int.md) ) const[^const]<div id="class_tabcontainer_method_get_tab_icon"></div>

Returns the [`Texture2D`](class_texture2d.md) for the tab at index `tab_idx` or `null` if the tab has no [`Texture2D`](class_texture2d.md).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_tabcontainer_method_get_tab_icon_max_width"></div>

[`int`](class_int.md) **get_tab_icon_max_width** ( tab_idx: [`int`](class_int.md) ) const[^const]<div id="class_tabcontainer_method_get_tab_icon_max_width"></div>

Returns the maximum allowed width of the icon for the tab at index `tab_idx`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_tabcontainer_method_get_tab_idx_at_point"></div>

[`int`](class_int.md) **get_tab_idx_at_point** ( point: [`Vector2`](class_vector2.md) ) const[^const]<div id="class_tabcontainer_method_get_tab_idx_at_point"></div>

Returns the index of the tab at local coordinates `point`. Returns `-1` if the point is outside the control boundaries or if there's no tab at the queried position.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_tabcontainer_method_get_tab_idx_from_control"></div>

[`int`](class_int.md) **get_tab_idx_from_control** ( control: [`Control`](class_control.md) ) const[^const]<div id="class_tabcontainer_method_get_tab_idx_from_control"></div>

Returns the index of the tab tied to the given `control`. The control must be a child of the **TabContainer**.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_tabcontainer_method_get_tab_metadata"></div>

[`Variant`](class_variant.md) **get_tab_metadata** ( tab_idx: [`int`](class_int.md) ) const[^const]<div id="class_tabcontainer_method_get_tab_metadata"></div>

Returns the metadata value set to the tab at index `tab_idx` using [`set_tab_metadata`](#class_tabcontainer_method_set_tab_metadata). If no metadata was previously set, returns `null` by default.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_tabcontainer_method_get_tab_title"></div>

[`String`](class_string.md) **get_tab_title** ( tab_idx: [`int`](class_int.md) ) const[^const]<div id="class_tabcontainer_method_get_tab_title"></div>

Returns the title of the tab at index `tab_idx`. Tab titles default to the name of the indexed child node, but this can be overridden with [`set_tab_title`](#class_tabcontainer_method_set_tab_title).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_tabcontainer_method_get_tab_tooltip"></div>

[`String`](class_string.md) **get_tab_tooltip** ( tab_idx: [`int`](class_int.md) ) const[^const]<div id="class_tabcontainer_method_get_tab_tooltip"></div>

Returns the tooltip text of the tab at index `tab_idx`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_tabcontainer_method_is_tab_disabled"></div>

[`bool`](class_bool.md) **is_tab_disabled** ( tab_idx: [`int`](class_int.md) ) const[^const]<div id="class_tabcontainer_method_is_tab_disabled"></div>

Returns `true` if the tab at index `tab_idx` is disabled.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_tabcontainer_method_is_tab_hidden"></div>

[`bool`](class_bool.md) **is_tab_hidden** ( tab_idx: [`int`](class_int.md) ) const[^const]<div id="class_tabcontainer_method_is_tab_hidden"></div>

Returns `true` if the tab at index `tab_idx` is hidden.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_tabcontainer_method_select_next_available"></div>

[`bool`](class_bool.md) **select_next_available** ( )<div id="class_tabcontainer_method_select_next_available"></div>

Selects the first available tab with greater index than the currently selected. Returns `true` if tab selection changed.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_tabcontainer_method_select_previous_available"></div>

[`bool`](class_bool.md) **select_previous_available** ( )<div id="class_tabcontainer_method_select_previous_available"></div>

Selects the first available tab with lower index than the currently selected. Returns `true` if tab selection changed.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_tabcontainer_method_set_popup"></div>

`void` **set_popup** ( popup: [`Node`](class_node.md) )<div id="class_tabcontainer_method_set_popup"></div>

If set on a [`Popup`](class_popup.md) node instance, a popup menu icon appears in the top-right corner of the **TabContainer** (setting it to `null` will make it go away). Clicking it will expand the [`Popup`](class_popup.md) node.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_tabcontainer_method_set_tab_button_icon"></div>

`void` **set_tab_button_icon** ( tab_idx: [`int`](class_int.md), icon: [`Texture2D`](class_texture2d.md) )<div id="class_tabcontainer_method_set_tab_button_icon"></div>

Sets the button icon from the tab at index `tab_idx`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_tabcontainer_method_set_tab_disabled"></div>

`void` **set_tab_disabled** ( tab_idx: [`int`](class_int.md), disabled: [`bool`](class_bool.md) )<div id="class_tabcontainer_method_set_tab_disabled"></div>

If `disabled` is `true`, disables the tab at index `tab_idx`, making it non-interactable.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_tabcontainer_method_set_tab_hidden"></div>

`void` **set_tab_hidden** ( tab_idx: [`int`](class_int.md), hidden: [`bool`](class_bool.md) )<div id="class_tabcontainer_method_set_tab_hidden"></div>

If `hidden` is `true`, hides the tab at index `tab_idx`, making it disappear from the tab area.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_tabcontainer_method_set_tab_icon"></div>

`void` **set_tab_icon** ( tab_idx: [`int`](class_int.md), icon: [`Texture2D`](class_texture2d.md) )<div id="class_tabcontainer_method_set_tab_icon"></div>

Sets an icon for the tab at index `tab_idx`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_tabcontainer_method_set_tab_icon_max_width"></div>

`void` **set_tab_icon_max_width** ( tab_idx: [`int`](class_int.md), width: [`int`](class_int.md) )<div id="class_tabcontainer_method_set_tab_icon_max_width"></div>

Sets the maximum allowed width of the icon for the tab at index `tab_idx`. This limit is applied on top of the default size of the icon and on top of [`icon_max_width`](#class_tabcontainer_theme_constant_icon_max_width). The height is adjusted according to the icon's ratio.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_tabcontainer_method_set_tab_metadata"></div>

`void` **set_tab_metadata** ( tab_idx: [`int`](class_int.md), metadata: [`Variant`](class_variant.md) )<div id="class_tabcontainer_method_set_tab_metadata"></div>

Sets the metadata value for the tab at index `tab_idx`, which can be retrieved later using [`get_tab_metadata`](#class_tabcontainer_method_get_tab_metadata).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_tabcontainer_method_set_tab_title"></div>

`void` **set_tab_title** ( tab_idx: [`int`](class_int.md), title: [`String`](class_string.md) )<div id="class_tabcontainer_method_set_tab_title"></div>

Sets a custom title for the tab at index `tab_idx` (tab titles default to the name of the indexed child node). Set it back to the child's name to make the tab default to it again.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_tabcontainer_method_set_tab_tooltip"></div>

`void` **set_tab_tooltip** ( tab_idx: [`int`](class_int.md), tooltip: [`String`](class_string.md) )<div id="class_tabcontainer_method_set_tab_tooltip"></div>

Sets a custom tooltip text for tab at index `tab_idx`.

 **Note:** By default, if the `tooltip` is empty and the tab text is truncated (not all characters fit into the tab), the title will be displayed as a tooltip. To hide the tooltip, assign `" "` as the `tooltip` text.

<!-- rst-class:: classref-section-separator -->

---

## 主题属性说明

<div id="_class_tabcontainer_theme_color_drop_mark_color"></div>

[`Color`](class_color.md) **drop_mark_color** = ``Color(1, 1, 1, 1)`` <div id="class_tabcontainer_theme_color_drop_mark_color"></div>

Modulation color for the [`drop_mark`](#class_tabcontainer_theme_icon_drop_mark) icon.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_tabcontainer_theme_color_font_disabled_color"></div>

[`Color`](class_color.md) **font_disabled_color** = ``Color(0.875, 0.875, 0.875, 0.5)`` <div id="class_tabcontainer_theme_color_font_disabled_color"></div>

Font color of disabled tabs.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_tabcontainer_theme_color_font_hovered_color"></div>

[`Color`](class_color.md) **font_hovered_color** = ``Color(0.95, 0.95, 0.95, 1)`` <div id="class_tabcontainer_theme_color_font_hovered_color"></div>

Font color of the currently hovered tab.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_tabcontainer_theme_color_font_outline_color"></div>

[`Color`](class_color.md) **font_outline_color** = ``Color(0, 0, 0, 1)`` <div id="class_tabcontainer_theme_color_font_outline_color"></div>

The tint of text outline of the tab name.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_tabcontainer_theme_color_font_selected_color"></div>

[`Color`](class_color.md) **font_selected_color** = ``Color(0.95, 0.95, 0.95, 1)`` <div id="class_tabcontainer_theme_color_font_selected_color"></div>

Font color of the currently selected tab.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_tabcontainer_theme_color_font_unselected_color"></div>

[`Color`](class_color.md) **font_unselected_color** = ``Color(0.7, 0.7, 0.7, 1)`` <div id="class_tabcontainer_theme_color_font_unselected_color"></div>

Font color of the other, unselected tabs.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_tabcontainer_theme_constant_icon_max_width"></div>

[`int`](class_int.md) **icon_max_width** = ``0`` <div id="class_tabcontainer_theme_constant_icon_max_width"></div>

The maximum allowed width of the tab's icon. This limit is applied on top of the default size of the icon, but before the value set with [`TabBar.set_tab_icon_max_width`](#class_tabbar_method_set_tab_icon_max_width). The height is adjusted according to the icon's ratio.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_tabcontainer_theme_constant_icon_separation"></div>

[`int`](class_int.md) **icon_separation** = ``4`` <div id="class_tabcontainer_theme_constant_icon_separation"></div>

Space between tab's name and its icon.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_tabcontainer_theme_constant_outline_size"></div>

[`int`](class_int.md) **outline_size** = ``0`` <div id="class_tabcontainer_theme_constant_outline_size"></div>

The size of the tab text outline.

 **Note:** If using a font with [`FontFile.multichannel_signed_distance_field`](#class_fontfile_property_multichannel_signed_distance_field) enabled, its [`FontFile.msdf_pixel_range`](#class_fontfile_property_msdf_pixel_range) must be set to at least *twice* the value of [`outline_size`](#class_tabcontainer_theme_constant_outline_size) for outline rendering to look correct. Otherwise, the outline may appear to be cut off earlier than intended.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_tabcontainer_theme_constant_side_margin"></div>

[`int`](class_int.md) **side_margin** = ``8`` <div id="class_tabcontainer_theme_constant_side_margin"></div>

The space at the left or right edges of the tab bar, accordingly with the current [`tab_alignment`](#class_tabcontainer_property_tab_alignment).

The margin is ignored with [`TabBar.ALIGNMENT_RIGHT`](#class_tabbar_constant_alignment_right) if the tabs are clipped (see [`clip_tabs`](#class_tabcontainer_property_clip_tabs)) or a popup has been set (see [`set_popup`](#class_tabcontainer_method_set_popup)). The margin is always ignored with [`TabBar.ALIGNMENT_CENTER`](#class_tabbar_constant_alignment_center).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_tabcontainer_theme_font_font"></div>

[`Font`](class_font.md) **font** <div id="class_tabcontainer_theme_font_font"></div>

The font used to draw tab names.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_tabcontainer_theme_font_size_font_size"></div>

[`int`](class_int.md) **font_size** <div id="class_tabcontainer_theme_font_size_font_size"></div>

Font size of the tab names.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_tabcontainer_theme_icon_decrement"></div>

[`Texture2D`](class_texture2d.md) **decrement** <div id="class_tabcontainer_theme_icon_decrement"></div>

Icon for the left arrow button that appears when there are too many tabs to fit in the container width. When the button is disabled (i.e. the first tab is visible), it appears semi-transparent.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_tabcontainer_theme_icon_decrement_highlight"></div>

[`Texture2D`](class_texture2d.md) **decrement_highlight** <div id="class_tabcontainer_theme_icon_decrement_highlight"></div>

Icon for the left arrow button that appears when there are too many tabs to fit in the container width. Used when the button is being hovered with the cursor.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_tabcontainer_theme_icon_drop_mark"></div>

[`Texture2D`](class_texture2d.md) **drop_mark** <div id="class_tabcontainer_theme_icon_drop_mark"></div>

Icon shown to indicate where a dragged tab is gonna be dropped (see [`drag_to_rearrange_enabled`](#class_tabcontainer_property_drag_to_rearrange_enabled)).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_tabcontainer_theme_icon_increment"></div>

[`Texture2D`](class_texture2d.md) **increment** <div id="class_tabcontainer_theme_icon_increment"></div>

Icon for the right arrow button that appears when there are too many tabs to fit in the container width. When the button is disabled (i.e. the last tab is visible) it appears semi-transparent.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_tabcontainer_theme_icon_increment_highlight"></div>

[`Texture2D`](class_texture2d.md) **increment_highlight** <div id="class_tabcontainer_theme_icon_increment_highlight"></div>

Icon for the right arrow button that appears when there are too many tabs to fit in the container width. Used when the button is being hovered with the cursor.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_tabcontainer_theme_icon_menu"></div>

[`Texture2D`](class_texture2d.md) **menu** <div id="class_tabcontainer_theme_icon_menu"></div>

The icon for the menu button (see [`set_popup`](#class_tabcontainer_method_set_popup)).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_tabcontainer_theme_icon_menu_highlight"></div>

[`Texture2D`](class_texture2d.md) **menu_highlight** <div id="class_tabcontainer_theme_icon_menu_highlight"></div>

The icon for the menu button (see [`set_popup`](#class_tabcontainer_method_set_popup)) when it's being hovered with the cursor.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_tabcontainer_theme_style_panel"></div>

[`StyleBox`](class_stylebox.md) **panel** <div id="class_tabcontainer_theme_style_panel"></div>

The style for the background fill.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_tabcontainer_theme_style_tab_disabled"></div>

[`StyleBox`](class_stylebox.md) **tab_disabled** <div id="class_tabcontainer_theme_style_tab_disabled"></div>

The style of disabled tabs.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_tabcontainer_theme_style_tab_focus"></div>

[`StyleBox`](class_stylebox.md) **tab_focus** <div id="class_tabcontainer_theme_style_tab_focus"></div>

[`StyleBox`](class_stylebox.md) used when the [`TabBar`](class_tabbar.md) is focused. The [`tab_focus`](#class_tabcontainer_theme_style_tab_focus) [`StyleBox`](class_stylebox.md) is displayed *over* the base [`StyleBox`](class_stylebox.md) of the selected tab, so a partially transparent [`StyleBox`](class_stylebox.md) should be used to ensure the base [`StyleBox`](class_stylebox.md) remains visible. A [`StyleBox`](class_stylebox.md) that represents an outline or an underline works well for this purpose. To disable the focus visual effect, assign a [`StyleBoxEmpty`](class_styleboxempty.md) resource. Note that disabling the focus visual effect will harm keyboard/controller navigation usability, so this is not recommended for accessibility reasons.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_tabcontainer_theme_style_tab_hovered"></div>

[`StyleBox`](class_stylebox.md) **tab_hovered** <div id="class_tabcontainer_theme_style_tab_hovered"></div>

The style of the currently hovered tab.

 **Note:** This style will be drawn with the same width as [`tab_unselected`](#class_tabcontainer_theme_style_tab_unselected) at minimum.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_tabcontainer_theme_style_tab_selected"></div>

[`StyleBox`](class_stylebox.md) **tab_selected** <div id="class_tabcontainer_theme_style_tab_selected"></div>

The style of the currently selected tab.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_tabcontainer_theme_style_tab_unselected"></div>

[`StyleBox`](class_stylebox.md) **tab_unselected** <div id="class_tabcontainer_theme_style_tab_unselected"></div>

The style of the other, unselected tabs.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_tabcontainer_theme_style_tabbar_background"></div>

[`StyleBox`](class_stylebox.md) **tabbar_background** <div id="class_tabcontainer_theme_style_tabbar_background"></div>

The style for the background fill of the [`TabBar`](class_tabbar.md) area.

[^virtual]: 本方法通常需要用户覆盖才能生效。
[^const]: 本方法无副作用，不会修改该实例的任何成员变量。
[^vararg]: 本方法除了能接受在此处描述的参数外，还能够继续接受任意数量的参数。
[^constructor]: 本方法用于构造某个类型。
[^static]: 调用本方法无需实例，可直接使用类名进行调用。
[^operator]: 本方法描述的是使用本类型作为左操作数的有效运算符。
[^bitfield]: 这个值是由下列位标志构成位掩码的整数。
[^void]: 无返回值。
