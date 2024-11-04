<!-- ⚠ 请勿编辑本文件 ⚠ -->
<!-- 本文档使用脚本从 WeDot 引擎源码仓库生成。 -->
<!-- 生成脚本：https://github.com/WeDot-Engine/WeDot/tree/4.3/doc/tools/make_md.py； -->
<!-- 原文件：https://github.com/WeDot-Engine/WeDot/tree/4.3/doc/classes/TabBar.xml。 -->

<div id="_class_tabbar"></div>

# TabBar

**继承：** [`Control`](class_control.md) **<** [`CanvasItem`](class_canvasitem.md) **<** [`Node`](class_node.md) **<** [`Object`](class_object.md)

A control that provides a horizontal bar with tabs.

## 描述

A control that provides a horizontal bar with tabs. Similar to [`TabContainer`](class_tabcontainer.md) but is only in charge of drawing tabs, not interacting with children.

## 属性

| [`bool`](class_bool.md)                                           | [`clip_tabs`](#class_tabbar_property_clip_tabs)                                 | ``true``                                                          |
| [`int`](class_int.md)                                             | [`current_tab`](#class_tabbar_property_current_tab)                             | ``-1``                                                            |
| [`bool`](class_bool.md)                                           | [`deselect_enabled`](#class_tabbar_property_deselect_enabled)                   | ``false``                                                         |
| [`bool`](class_bool.md)                                           | [`drag_to_rearrange_enabled`](#class_tabbar_property_drag_to_rearrange_enabled) | ``false``                                                         |
| [FocusMode](#enum_control_focusmode)                              | focus_mode                                                                      | ``2`` (overrides [`Control`](#class_control_property_focus_mode)) |
| [`int`](class_int.md)                                             | [`max_tab_width`](#class_tabbar_property_max_tab_width)                         | ``0``                                                             |
| [`bool`](class_bool.md)                                           | [`scroll_to_selected`](#class_tabbar_property_scroll_to_selected)               | ``true``                                                          |
| [`bool`](class_bool.md)                                           | [`scrolling_enabled`](#class_tabbar_property_scrolling_enabled)                 | ``true``                                                          |
| [`bool`](class_bool.md)                                           | [`select_with_rmb`](#class_tabbar_property_select_with_rmb)                     | ``false``                                                         |
| [AlignmentMode](#enum_tabbar_alignmentmode)                       | [`tab_alignment`](#class_tabbar_property_tab_alignment)                         | ``0``                                                             |
| [CloseButtonDisplayPolicy](#enum_tabbar_closebuttondisplaypolicy) | [`tab_close_display_policy`](#class_tabbar_property_tab_close_display_policy)   | ``0``                                                             |
| [`int`](class_int.md)                                             | [`tab_count`](#class_tabbar_property_tab_count)                                 | ``0``                                                             |
| [`int`](class_int.md)                                             | [`tabs_rearrange_group`](#class_tabbar_property_tabs_rearrange_group)           | ``-1``                                                            |

## 方法

| `void`                                       | [`add_tab`](#class_tabbar_method_add_tab) ( title: [`String`](class_string.md) = "", icon: [`Texture2D`](class_texture2d.md) = null )                               |
| `void`                                       | [`clear_tabs`](#class_tabbar_method_clear_tabs) ( )                                                                                                                 |
| `void`                                       | [`ensure_tab_visible`](#class_tabbar_method_ensure_tab_visible) ( idx: [`int`](class_int.md) )                                                                      |
| [`bool`](class_bool.md)                      | [`get_offset_buttons_visible`](#class_tabbar_method_get_offset_buttons_visible) ( ) const[^const]                                                                   |
| [`int`](class_int.md)                        | [`get_previous_tab`](#class_tabbar_method_get_previous_tab) ( ) const[^const]                                                                                       |
| [`Texture2D`](class_texture2d.md)            | [`get_tab_button_icon`](#class_tabbar_method_get_tab_button_icon) ( tab_idx: [`int`](class_int.md) ) const[^const]                                                  |
| [`Texture2D`](class_texture2d.md)            | [`get_tab_icon`](#class_tabbar_method_get_tab_icon) ( tab_idx: [`int`](class_int.md) ) const[^const]                                                                |
| [`int`](class_int.md)                        | [`get_tab_icon_max_width`](#class_tabbar_method_get_tab_icon_max_width) ( tab_idx: [`int`](class_int.md) ) const[^const]                                            |
| [`int`](class_int.md)                        | [`get_tab_idx_at_point`](#class_tabbar_method_get_tab_idx_at_point) ( point: [`Vector2`](class_vector2.md) ) const[^const]                                          |
| [`String`](class_string.md)                  | [`get_tab_language`](#class_tabbar_method_get_tab_language) ( tab_idx: [`int`](class_int.md) ) const[^const]                                                        |
| [`Variant`](class_variant.md)                | [`get_tab_metadata`](#class_tabbar_method_get_tab_metadata) ( tab_idx: [`int`](class_int.md) ) const[^const]                                                        |
| [`int`](class_int.md)                        | [`get_tab_offset`](#class_tabbar_method_get_tab_offset) ( ) const[^const]                                                                                           |
| [`Rect2`](class_rect2.md)                    | [`get_tab_rect`](#class_tabbar_method_get_tab_rect) ( tab_idx: [`int`](class_int.md) ) const[^const]                                                                |
| [TextDirection](#enum_control_textdirection) | [`get_tab_text_direction`](#class_tabbar_method_get_tab_text_direction) ( tab_idx: [`int`](class_int.md) ) const[^const]                                            |
| [`String`](class_string.md)                  | [`get_tab_title`](#class_tabbar_method_get_tab_title) ( tab_idx: [`int`](class_int.md) ) const[^const]                                                              |
| [`String`](class_string.md)                  | [`get_tab_tooltip`](#class_tabbar_method_get_tab_tooltip) ( tab_idx: [`int`](class_int.md) ) const[^const]                                                          |
| [`bool`](class_bool.md)                      | [`is_tab_disabled`](#class_tabbar_method_is_tab_disabled) ( tab_idx: [`int`](class_int.md) ) const[^const]                                                          |
| [`bool`](class_bool.md)                      | [`is_tab_hidden`](#class_tabbar_method_is_tab_hidden) ( tab_idx: [`int`](class_int.md) ) const[^const]                                                              |
| `void`                                       | [`move_tab`](#class_tabbar_method_move_tab) ( from: [`int`](class_int.md), to: [`int`](class_int.md) )                                                              |
| `void`                                       | [`remove_tab`](#class_tabbar_method_remove_tab) ( tab_idx: [`int`](class_int.md) )                                                                                  |
| [`bool`](class_bool.md)                      | [`select_next_available`](#class_tabbar_method_select_next_available) ( )                                                                                           |
| [`bool`](class_bool.md)                      | [`select_previous_available`](#class_tabbar_method_select_previous_available) ( )                                                                                   |
| `void`                                       | [`set_tab_button_icon`](#class_tabbar_method_set_tab_button_icon) ( tab_idx: [`int`](class_int.md), icon: [`Texture2D`](class_texture2d.md) )                       |
| `void`                                       | [`set_tab_disabled`](#class_tabbar_method_set_tab_disabled) ( tab_idx: [`int`](class_int.md), disabled: [`bool`](class_bool.md) )                                   |
| `void`                                       | [`set_tab_hidden`](#class_tabbar_method_set_tab_hidden) ( tab_idx: [`int`](class_int.md), hidden: [`bool`](class_bool.md) )                                         |
| `void`                                       | [`set_tab_icon`](#class_tabbar_method_set_tab_icon) ( tab_idx: [`int`](class_int.md), icon: [`Texture2D`](class_texture2d.md) )                                     |
| `void`                                       | [`set_tab_icon_max_width`](#class_tabbar_method_set_tab_icon_max_width) ( tab_idx: [`int`](class_int.md), width: [`int`](class_int.md) )                            |
| `void`                                       | [`set_tab_language`](#class_tabbar_method_set_tab_language) ( tab_idx: [`int`](class_int.md), language: [`String`](class_string.md) )                               |
| `void`                                       | [`set_tab_metadata`](#class_tabbar_method_set_tab_metadata) ( tab_idx: [`int`](class_int.md), metadata: [`Variant`](class_variant.md) )                             |
| `void`                                       | [`set_tab_text_direction`](#class_tabbar_method_set_tab_text_direction) ( tab_idx: [`int`](class_int.md), direction: [TextDirection](#enum_control_textdirection) ) |
| `void`                                       | [`set_tab_title`](#class_tabbar_method_set_tab_title) ( tab_idx: [`int`](class_int.md), title: [`String`](class_string.md) )                                        |
| `void`                                       | [`set_tab_tooltip`](#class_tabbar_method_set_tab_tooltip) ( tab_idx: [`int`](class_int.md), tooltip: [`String`](class_string.md) )                                  |

## 主题属性

| [`Color`](class_color.md)         | [`drop_mark_color`](#class_tabbar_theme_color_drop_mark_color)             | ``Color(1, 1, 1, 1)``               |
| [`Color`](class_color.md)         | [`font_disabled_color`](#class_tabbar_theme_color_font_disabled_color)     | ``Color(0.875, 0.875, 0.875, 0.5)`` |
| [`Color`](class_color.md)         | [`font_hovered_color`](#class_tabbar_theme_color_font_hovered_color)       | ``Color(0.95, 0.95, 0.95, 1)``      |
| [`Color`](class_color.md)         | [`font_outline_color`](#class_tabbar_theme_color_font_outline_color)       | ``Color(0, 0, 0, 1)``               |
| [`Color`](class_color.md)         | [`font_selected_color`](#class_tabbar_theme_color_font_selected_color)     | ``Color(0.95, 0.95, 0.95, 1)``      |
| [`Color`](class_color.md)         | [`font_unselected_color`](#class_tabbar_theme_color_font_unselected_color) | ``Color(0.7, 0.7, 0.7, 1)``         |
| [`int`](class_int.md)             | [`h_separation`](#class_tabbar_theme_constant_h_separation)                | ``4``                               |
| [`int`](class_int.md)             | [`icon_max_width`](#class_tabbar_theme_constant_icon_max_width)            | ``0``                               |
| [`int`](class_int.md)             | [`outline_size`](#class_tabbar_theme_constant_outline_size)                | ``0``                               |
| [`Font`](class_font.md)           | [`font`](#class_tabbar_theme_font_font)                                    |                                     |
| [`int`](class_int.md)             | [`font_size`](#class_tabbar_theme_font_size_font_size)                     |                                     |
| [`Texture2D`](class_texture2d.md) | [`close`](#class_tabbar_theme_icon_close)                                  |                                     |
| [`Texture2D`](class_texture2d.md) | [`decrement`](#class_tabbar_theme_icon_decrement)                          |                                     |
| [`Texture2D`](class_texture2d.md) | [`decrement_highlight`](#class_tabbar_theme_icon_decrement_highlight)      |                                     |
| [`Texture2D`](class_texture2d.md) | [`drop_mark`](#class_tabbar_theme_icon_drop_mark)                          |                                     |
| [`Texture2D`](class_texture2d.md) | [`increment`](#class_tabbar_theme_icon_increment)                          |                                     |
| [`Texture2D`](class_texture2d.md) | [`increment_highlight`](#class_tabbar_theme_icon_increment_highlight)      |                                     |
| [`StyleBox`](class_stylebox.md)   | [`button_highlight`](#class_tabbar_theme_style_button_highlight)           |                                     |
| [`StyleBox`](class_stylebox.md)   | [`button_pressed`](#class_tabbar_theme_style_button_pressed)               |                                     |
| [`StyleBox`](class_stylebox.md)   | [`tab_disabled`](#class_tabbar_theme_style_tab_disabled)                   |                                     |
| [`StyleBox`](class_stylebox.md)   | [`tab_focus`](#class_tabbar_theme_style_tab_focus)                         |                                     |
| [`StyleBox`](class_stylebox.md)   | [`tab_hovered`](#class_tabbar_theme_style_tab_hovered)                     |                                     |
| [`StyleBox`](class_stylebox.md)   | [`tab_selected`](#class_tabbar_theme_style_tab_selected)                   |                                     |
| [`StyleBox`](class_stylebox.md)   | [`tab_unselected`](#class_tabbar_theme_style_tab_unselected)               |                                     |

<!-- rst-class:: classref-section-separator -->

---

## 信号

<div id="_class_class_tabbar_signal_active_tab_rearranged"></div>

**active_tab_rearranged** ( idx_to: [`int`](class_int.md) ) <div id="class_tabbar_signal_active_tab_rearranged"></div>

Emitted when the active tab is rearranged via mouse drag. See [`drag_to_rearrange_enabled`](#class_tabbar_property_drag_to_rearrange_enabled).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_class_tabbar_signal_tab_button_pressed"></div>

**tab_button_pressed** ( tab: [`int`](class_int.md) ) <div id="class_tabbar_signal_tab_button_pressed"></div>

Emitted when a tab's right button is pressed. See [`set_tab_button_icon`](#class_tabbar_method_set_tab_button_icon).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_class_tabbar_signal_tab_changed"></div>

**tab_changed** ( tab: [`int`](class_int.md) ) <div id="class_tabbar_signal_tab_changed"></div>

Emitted when switching to another tab.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_class_tabbar_signal_tab_clicked"></div>

**tab_clicked** ( tab: [`int`](class_int.md) ) <div id="class_tabbar_signal_tab_clicked"></div>

Emitted when a tab is clicked, even if it is the current tab.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_class_tabbar_signal_tab_close_pressed"></div>

**tab_close_pressed** ( tab: [`int`](class_int.md) ) <div id="class_tabbar_signal_tab_close_pressed"></div>

Emitted when a tab's close button is pressed.

 **Note:** Tabs are not removed automatically once the close button is pressed, this behavior needs to be programmed manually. For example:



```gdscript

    $TabBar.tab_close_pressed.connect($TabBar.remove_tab)
```

```csharp

    GetNode<TabBar>("TabBar").TabClosePressed += GetNode<TabBar>("TabBar").RemoveTab;
```







<!-- rst-class:: classref-item-separator -->

---

<div id="_class_class_tabbar_signal_tab_hovered"></div>

**tab_hovered** ( tab: [`int`](class_int.md) ) <div id="class_tabbar_signal_tab_hovered"></div>

Emitted when a tab is hovered by the mouse.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_class_tabbar_signal_tab_rmb_clicked"></div>

**tab_rmb_clicked** ( tab: [`int`](class_int.md) ) <div id="class_tabbar_signal_tab_rmb_clicked"></div>

Emitted when a tab is right-clicked. [`select_with_rmb`](#class_tabbar_property_select_with_rmb) must be enabled.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_class_tabbar_signal_tab_selected"></div>

**tab_selected** ( tab: [`int`](class_int.md) ) <div id="class_tabbar_signal_tab_selected"></div>

Emitted when a tab is selected via click, directional input, or script, even if it is the current tab.

<!-- rst-class:: classref-section-separator -->

---

## 枚举

<div id="_class_enum_tabbar_alignmentmode"></div>

enum **AlignmentMode**: <div id="enum_tabbar_alignmentmode"></div>

<div id="_class_tabbar_constant_alignment_left"></div>

[AlignmentMode](#enum_tabbar_alignmentmode) **ALIGNMENT_LEFT** = ``0``

Places tabs to the left.

<div id="_class_tabbar_constant_alignment_center"></div>

[AlignmentMode](#enum_tabbar_alignmentmode) **ALIGNMENT_CENTER** = ``1``

Places tabs in the middle.

<div id="_class_tabbar_constant_alignment_right"></div>

[AlignmentMode](#enum_tabbar_alignmentmode) **ALIGNMENT_RIGHT** = ``2``

Places tabs to the right.

<div id="_class_tabbar_constant_alignment_max"></div>

[AlignmentMode](#enum_tabbar_alignmentmode) **ALIGNMENT_MAX** = ``3``

Represents the size of the [AlignmentMode](#enum_tabbar_alignmentmode) enum.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_enum_tabbar_closebuttondisplaypolicy"></div>

enum **CloseButtonDisplayPolicy**: <div id="enum_tabbar_closebuttondisplaypolicy"></div>

<div id="_class_tabbar_constant_close_button_show_never"></div>

[CloseButtonDisplayPolicy](#enum_tabbar_closebuttondisplaypolicy) **CLOSE_BUTTON_SHOW_NEVER** = ``0``

Never show the close buttons.

<div id="_class_tabbar_constant_close_button_show_active_only"></div>

[CloseButtonDisplayPolicy](#enum_tabbar_closebuttondisplaypolicy) **CLOSE_BUTTON_SHOW_ACTIVE_ONLY** = ``1``

Only show the close button on the currently active tab.

<div id="_class_tabbar_constant_close_button_show_always"></div>

[CloseButtonDisplayPolicy](#enum_tabbar_closebuttondisplaypolicy) **CLOSE_BUTTON_SHOW_ALWAYS** = ``2``

Show the close button on all tabs.

<div id="_class_tabbar_constant_close_button_max"></div>

[CloseButtonDisplayPolicy](#enum_tabbar_closebuttondisplaypolicy) **CLOSE_BUTTON_MAX** = ``3``

Represents the size of the [CloseButtonDisplayPolicy](#enum_tabbar_closebuttondisplaypolicy) enum.

<!-- rst-class:: classref-section-separator -->

---

## 属性说明

<div id="_class_tabbar_property_clip_tabs"></div>

[`bool`](class_bool.md) **clip_tabs** = ``true`` <div id="class_tabbar_property_clip_tabs"></div>

- `void` **set_clip_tabs** ( value: [`bool`](class_bool.md) )
- [`bool`](class_bool.md) **get_clip_tabs** ( )

If `true`, tabs overflowing this node's width will be hidden, displaying two navigation buttons instead. Otherwise, this node's minimum size is updated so that all tabs are visible.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_tabbar_property_current_tab"></div>

[`int`](class_int.md) **current_tab** = ``-1`` <div id="class_tabbar_property_current_tab"></div>

- `void` **set_current_tab** ( value: [`int`](class_int.md) )
- [`int`](class_int.md) **get_current_tab** ( )

The index of the current selected tab. A value of `-1` means that no tab is selected and can only be set when [`deselect_enabled`](#class_tabbar_property_deselect_enabled) is `true` or if all tabs are hidden or disabled.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_tabbar_property_deselect_enabled"></div>

[`bool`](class_bool.md) **deselect_enabled** = ``false`` <div id="class_tabbar_property_deselect_enabled"></div>

- `void` **set_deselect_enabled** ( value: [`bool`](class_bool.md) )
- [`bool`](class_bool.md) **get_deselect_enabled** ( )

If `true`, all tabs can be deselected so that no tab is selected. Click on the current tab to deselect it.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_tabbar_property_drag_to_rearrange_enabled"></div>

[`bool`](class_bool.md) **drag_to_rearrange_enabled** = ``false`` <div id="class_tabbar_property_drag_to_rearrange_enabled"></div>

- `void` **set_drag_to_rearrange_enabled** ( value: [`bool`](class_bool.md) )
- [`bool`](class_bool.md) **get_drag_to_rearrange_enabled** ( )

If `true`, tabs can be rearranged with mouse drag.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_tabbar_property_max_tab_width"></div>

[`int`](class_int.md) **max_tab_width** = ``0`` <div id="class_tabbar_property_max_tab_width"></div>

- `void` **set_max_tab_width** ( value: [`int`](class_int.md) )
- [`int`](class_int.md) **get_max_tab_width** ( )

Sets the maximum width which all tabs should be limited to. Unlimited if set to `0`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_tabbar_property_scroll_to_selected"></div>

[`bool`](class_bool.md) **scroll_to_selected** = ``true`` <div id="class_tabbar_property_scroll_to_selected"></div>

- `void` **set_scroll_to_selected** ( value: [`bool`](class_bool.md) )
- [`bool`](class_bool.md) **get_scroll_to_selected** ( )

If `true`, the tab offset will be changed to keep the currently selected tab visible.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_tabbar_property_scrolling_enabled"></div>

[`bool`](class_bool.md) **scrolling_enabled** = ``true`` <div id="class_tabbar_property_scrolling_enabled"></div>

- `void` **set_scrolling_enabled** ( value: [`bool`](class_bool.md) )
- [`bool`](class_bool.md) **get_scrolling_enabled** ( )

if `true`, the mouse's scroll wheel can be used to navigate the scroll view.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_tabbar_property_select_with_rmb"></div>

[`bool`](class_bool.md) **select_with_rmb** = ``false`` <div id="class_tabbar_property_select_with_rmb"></div>

- `void` **set_select_with_rmb** ( value: [`bool`](class_bool.md) )
- [`bool`](class_bool.md) **get_select_with_rmb** ( )

If `true`, enables selecting a tab with the right mouse button.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_tabbar_property_tab_alignment"></div>

[AlignmentMode](#enum_tabbar_alignmentmode) **tab_alignment** = ``0`` <div id="class_tabbar_property_tab_alignment"></div>

- `void` **set_tab_alignment** ( value: [AlignmentMode](#enum_tabbar_alignmentmode) )
- [AlignmentMode](#enum_tabbar_alignmentmode) **get_tab_alignment** ( )

Sets the position at which tabs will be placed. See [AlignmentMode](#enum_tabbar_alignmentmode) for details.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_tabbar_property_tab_close_display_policy"></div>

[CloseButtonDisplayPolicy](#enum_tabbar_closebuttondisplaypolicy) **tab_close_display_policy** = ``0`` <div id="class_tabbar_property_tab_close_display_policy"></div>

- `void` **set_tab_close_display_policy** ( value: [CloseButtonDisplayPolicy](#enum_tabbar_closebuttondisplaypolicy) )
- [CloseButtonDisplayPolicy](#enum_tabbar_closebuttondisplaypolicy) **get_tab_close_display_policy** ( )

Sets when the close button will appear on the tabs. See [CloseButtonDisplayPolicy](#enum_tabbar_closebuttondisplaypolicy) for details.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_tabbar_property_tab_count"></div>

[`int`](class_int.md) **tab_count** = ``0`` <div id="class_tabbar_property_tab_count"></div>

- `void` **set_tab_count** ( value: [`int`](class_int.md) )
- [`int`](class_int.md) **get_tab_count** ( )

The number of tabs currently in the bar.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_tabbar_property_tabs_rearrange_group"></div>

[`int`](class_int.md) **tabs_rearrange_group** = ``-1`` <div id="class_tabbar_property_tabs_rearrange_group"></div>

- `void` **set_tabs_rearrange_group** ( value: [`int`](class_int.md) )
- [`int`](class_int.md) **get_tabs_rearrange_group** ( )

**TabBar** s with the same rearrange group ID will allow dragging the tabs between them. Enable drag with [`drag_to_rearrange_enabled`](#class_tabbar_property_drag_to_rearrange_enabled).

Setting this to `-1` will disable rearranging between **TabBar** s.

<!-- rst-class:: classref-section-separator -->

---

## 方法说明

<div id="_class_tabbar_method_add_tab"></div>

`void` **add_tab** ( title: [`String`](class_string.md) = "", icon: [`Texture2D`](class_texture2d.md) = null )<div id="class_tabbar_method_add_tab"></div>

Adds a new tab.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_tabbar_method_clear_tabs"></div>

`void` **clear_tabs** ( )<div id="class_tabbar_method_clear_tabs"></div>

Clears all tabs.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_tabbar_method_ensure_tab_visible"></div>

`void` **ensure_tab_visible** ( idx: [`int`](class_int.md) )<div id="class_tabbar_method_ensure_tab_visible"></div>

Moves the scroll view to make the tab visible.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_tabbar_method_get_offset_buttons_visible"></div>

[`bool`](class_bool.md) **get_offset_buttons_visible** ( ) const[^const]<div id="class_tabbar_method_get_offset_buttons_visible"></div>

Returns `true` if the offset buttons (the ones that appear when there's not enough space for all tabs) are visible.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_tabbar_method_get_previous_tab"></div>

[`int`](class_int.md) **get_previous_tab** ( ) const[^const]<div id="class_tabbar_method_get_previous_tab"></div>

Returns the previously active tab index.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_tabbar_method_get_tab_button_icon"></div>

[`Texture2D`](class_texture2d.md) **get_tab_button_icon** ( tab_idx: [`int`](class_int.md) ) const[^const]<div id="class_tabbar_method_get_tab_button_icon"></div>

Returns the icon for the right button of the tab at index `tab_idx` or `null` if the right button has no icon.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_tabbar_method_get_tab_icon"></div>

[`Texture2D`](class_texture2d.md) **get_tab_icon** ( tab_idx: [`int`](class_int.md) ) const[^const]<div id="class_tabbar_method_get_tab_icon"></div>

Returns the icon for the tab at index `tab_idx` or `null` if the tab has no icon.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_tabbar_method_get_tab_icon_max_width"></div>

[`int`](class_int.md) **get_tab_icon_max_width** ( tab_idx: [`int`](class_int.md) ) const[^const]<div id="class_tabbar_method_get_tab_icon_max_width"></div>

Returns the maximum allowed width of the icon for the tab at index `tab_idx`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_tabbar_method_get_tab_idx_at_point"></div>

[`int`](class_int.md) **get_tab_idx_at_point** ( point: [`Vector2`](class_vector2.md) ) const[^const]<div id="class_tabbar_method_get_tab_idx_at_point"></div>

Returns the index of the tab at local coordinates `point`. Returns `-1` if the point is outside the control boundaries or if there's no tab at the queried position.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_tabbar_method_get_tab_language"></div>

[`String`](class_string.md) **get_tab_language** ( tab_idx: [`int`](class_int.md) ) const[^const]<div id="class_tabbar_method_get_tab_language"></div>

Returns tab title language code.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_tabbar_method_get_tab_metadata"></div>

[`Variant`](class_variant.md) **get_tab_metadata** ( tab_idx: [`int`](class_int.md) ) const[^const]<div id="class_tabbar_method_get_tab_metadata"></div>

Returns the metadata value set to the tab at index `tab_idx` using [`set_tab_metadata`](#class_tabbar_method_set_tab_metadata). If no metadata was previously set, returns `null` by default.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_tabbar_method_get_tab_offset"></div>

[`int`](class_int.md) **get_tab_offset** ( ) const[^const]<div id="class_tabbar_method_get_tab_offset"></div>

Returns the number of hidden tabs offsetted to the left.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_tabbar_method_get_tab_rect"></div>

[`Rect2`](class_rect2.md) **get_tab_rect** ( tab_idx: [`int`](class_int.md) ) const[^const]<div id="class_tabbar_method_get_tab_rect"></div>

Returns tab [`Rect2`](class_rect2.md) with local position and size.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_tabbar_method_get_tab_text_direction"></div>

[TextDirection](#enum_control_textdirection) **get_tab_text_direction** ( tab_idx: [`int`](class_int.md) ) const[^const]<div id="class_tabbar_method_get_tab_text_direction"></div>

Returns tab title text base writing direction.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_tabbar_method_get_tab_title"></div>

[`String`](class_string.md) **get_tab_title** ( tab_idx: [`int`](class_int.md) ) const[^const]<div id="class_tabbar_method_get_tab_title"></div>

Returns the title of the tab at index `tab_idx`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_tabbar_method_get_tab_tooltip"></div>

[`String`](class_string.md) **get_tab_tooltip** ( tab_idx: [`int`](class_int.md) ) const[^const]<div id="class_tabbar_method_get_tab_tooltip"></div>

Returns the tooltip text of the tab at index `tab_idx`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_tabbar_method_is_tab_disabled"></div>

[`bool`](class_bool.md) **is_tab_disabled** ( tab_idx: [`int`](class_int.md) ) const[^const]<div id="class_tabbar_method_is_tab_disabled"></div>

Returns `true` if the tab at index `tab_idx` is disabled.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_tabbar_method_is_tab_hidden"></div>

[`bool`](class_bool.md) **is_tab_hidden** ( tab_idx: [`int`](class_int.md) ) const[^const]<div id="class_tabbar_method_is_tab_hidden"></div>

Returns `true` if the tab at index `tab_idx` is hidden.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_tabbar_method_move_tab"></div>

`void` **move_tab** ( from: [`int`](class_int.md), to: [`int`](class_int.md) )<div id="class_tabbar_method_move_tab"></div>

Moves a tab from `from` to `to`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_tabbar_method_remove_tab"></div>

`void` **remove_tab** ( tab_idx: [`int`](class_int.md) )<div id="class_tabbar_method_remove_tab"></div>

Removes the tab at index `tab_idx`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_tabbar_method_select_next_available"></div>

[`bool`](class_bool.md) **select_next_available** ( )<div id="class_tabbar_method_select_next_available"></div>

Selects the first available tab with greater index than the currently selected. Returns `true` if tab selection changed.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_tabbar_method_select_previous_available"></div>

[`bool`](class_bool.md) **select_previous_available** ( )<div id="class_tabbar_method_select_previous_available"></div>

Selects the first available tab with lower index than the currently selected. Returns `true` if tab selection changed.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_tabbar_method_set_tab_button_icon"></div>

`void` **set_tab_button_icon** ( tab_idx: [`int`](class_int.md), icon: [`Texture2D`](class_texture2d.md) )<div id="class_tabbar_method_set_tab_button_icon"></div>

Sets an `icon` for the button of the tab at index `tab_idx` (located to the right, before the close button), making it visible and clickable (See [`tab_button_pressed`](#class_tabbar_signal_tab_button_pressed)). Giving it a `null` value will hide the button.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_tabbar_method_set_tab_disabled"></div>

`void` **set_tab_disabled** ( tab_idx: [`int`](class_int.md), disabled: [`bool`](class_bool.md) )<div id="class_tabbar_method_set_tab_disabled"></div>

If `disabled` is `true`, disables the tab at index `tab_idx`, making it non-interactable.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_tabbar_method_set_tab_hidden"></div>

`void` **set_tab_hidden** ( tab_idx: [`int`](class_int.md), hidden: [`bool`](class_bool.md) )<div id="class_tabbar_method_set_tab_hidden"></div>

If `hidden` is `true`, hides the tab at index `tab_idx`, making it disappear from the tab area.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_tabbar_method_set_tab_icon"></div>

`void` **set_tab_icon** ( tab_idx: [`int`](class_int.md), icon: [`Texture2D`](class_texture2d.md) )<div id="class_tabbar_method_set_tab_icon"></div>

Sets an `icon` for the tab at index `tab_idx`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_tabbar_method_set_tab_icon_max_width"></div>

`void` **set_tab_icon_max_width** ( tab_idx: [`int`](class_int.md), width: [`int`](class_int.md) )<div id="class_tabbar_method_set_tab_icon_max_width"></div>

Sets the maximum allowed width of the icon for the tab at index `tab_idx`. This limit is applied on top of the default size of the icon and on top of [`icon_max_width`](#class_tabbar_theme_constant_icon_max_width). The height is adjusted according to the icon's ratio.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_tabbar_method_set_tab_language"></div>

`void` **set_tab_language** ( tab_idx: [`int`](class_int.md), language: [`String`](class_string.md) )<div id="class_tabbar_method_set_tab_language"></div>

Sets language code of tab title used for line-breaking and text shaping algorithms, if left empty current locale is used instead.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_tabbar_method_set_tab_metadata"></div>

`void` **set_tab_metadata** ( tab_idx: [`int`](class_int.md), metadata: [`Variant`](class_variant.md) )<div id="class_tabbar_method_set_tab_metadata"></div>

Sets the metadata value for the tab at index `tab_idx`, which can be retrieved later using [`get_tab_metadata`](#class_tabbar_method_get_tab_metadata).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_tabbar_method_set_tab_text_direction"></div>

`void` **set_tab_text_direction** ( tab_idx: [`int`](class_int.md), direction: [TextDirection](#enum_control_textdirection) )<div id="class_tabbar_method_set_tab_text_direction"></div>

Sets tab title base writing direction.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_tabbar_method_set_tab_title"></div>

`void` **set_tab_title** ( tab_idx: [`int`](class_int.md), title: [`String`](class_string.md) )<div id="class_tabbar_method_set_tab_title"></div>

Sets a `title` for the tab at index `tab_idx`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_tabbar_method_set_tab_tooltip"></div>

`void` **set_tab_tooltip** ( tab_idx: [`int`](class_int.md), tooltip: [`String`](class_string.md) )<div id="class_tabbar_method_set_tab_tooltip"></div>

Sets a `tooltip` for tab at index `tab_idx`.

 **Note:** By default, if the `tooltip` is empty and the tab text is truncated (not all characters fit into the tab), the title will be displayed as a tooltip. To hide the tooltip, assign `" "` as the `tooltip` text.

<!-- rst-class:: classref-section-separator -->

---

## 主题属性说明

<div id="_class_tabbar_theme_color_drop_mark_color"></div>

[`Color`](class_color.md) **drop_mark_color** = ``Color(1, 1, 1, 1)`` <div id="class_tabbar_theme_color_drop_mark_color"></div>

Modulation color for the [`drop_mark`](#class_tabbar_theme_icon_drop_mark) icon.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_tabbar_theme_color_font_disabled_color"></div>

[`Color`](class_color.md) **font_disabled_color** = ``Color(0.875, 0.875, 0.875, 0.5)`` <div id="class_tabbar_theme_color_font_disabled_color"></div>

Font color of disabled tabs.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_tabbar_theme_color_font_hovered_color"></div>

[`Color`](class_color.md) **font_hovered_color** = ``Color(0.95, 0.95, 0.95, 1)`` <div id="class_tabbar_theme_color_font_hovered_color"></div>

Font color of the currently hovered tab. Does not apply to the selected tab.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_tabbar_theme_color_font_outline_color"></div>

[`Color`](class_color.md) **font_outline_color** = ``Color(0, 0, 0, 1)`` <div id="class_tabbar_theme_color_font_outline_color"></div>

The tint of text outline of the tab name.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_tabbar_theme_color_font_selected_color"></div>

[`Color`](class_color.md) **font_selected_color** = ``Color(0.95, 0.95, 0.95, 1)`` <div id="class_tabbar_theme_color_font_selected_color"></div>

Font color of the currently selected tab.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_tabbar_theme_color_font_unselected_color"></div>

[`Color`](class_color.md) **font_unselected_color** = ``Color(0.7, 0.7, 0.7, 1)`` <div id="class_tabbar_theme_color_font_unselected_color"></div>

Font color of the other, unselected tabs.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_tabbar_theme_constant_h_separation"></div>

[`int`](class_int.md) **h_separation** = ``4`` <div id="class_tabbar_theme_constant_h_separation"></div>

The horizontal separation between the elements inside tabs.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_tabbar_theme_constant_icon_max_width"></div>

[`int`](class_int.md) **icon_max_width** = ``0`` <div id="class_tabbar_theme_constant_icon_max_width"></div>

The maximum allowed width of the tab's icon. This limit is applied on top of the default size of the icon, but before the value set with [`set_tab_icon_max_width`](#class_tabbar_method_set_tab_icon_max_width). The height is adjusted according to the icon's ratio.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_tabbar_theme_constant_outline_size"></div>

[`int`](class_int.md) **outline_size** = ``0`` <div id="class_tabbar_theme_constant_outline_size"></div>

The size of the tab text outline.

 **Note:** If using a font with [`FontFile.multichannel_signed_distance_field`](#class_fontfile_property_multichannel_signed_distance_field) enabled, its [`FontFile.msdf_pixel_range`](#class_fontfile_property_msdf_pixel_range) must be set to at least *twice* the value of [`outline_size`](#class_tabbar_theme_constant_outline_size) for outline rendering to look correct. Otherwise, the outline may appear to be cut off earlier than intended.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_tabbar_theme_font_font"></div>

[`Font`](class_font.md) **font** <div id="class_tabbar_theme_font_font"></div>

The font used to draw tab names.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_tabbar_theme_font_size_font_size"></div>

[`int`](class_int.md) **font_size** <div id="class_tabbar_theme_font_size_font_size"></div>

Font size of the tab names.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_tabbar_theme_icon_close"></div>

[`Texture2D`](class_texture2d.md) **close** <div id="class_tabbar_theme_icon_close"></div>

The icon for the close button (see [`tab_close_display_policy`](#class_tabbar_property_tab_close_display_policy)).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_tabbar_theme_icon_decrement"></div>

[`Texture2D`](class_texture2d.md) **decrement** <div id="class_tabbar_theme_icon_decrement"></div>

Icon for the left arrow button that appears when there are too many tabs to fit in the container width. When the button is disabled (i.e. the first tab is visible), it appears semi-transparent.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_tabbar_theme_icon_decrement_highlight"></div>

[`Texture2D`](class_texture2d.md) **decrement_highlight** <div id="class_tabbar_theme_icon_decrement_highlight"></div>

Icon for the left arrow button that appears when there are too many tabs to fit in the container width. Used when the button is being hovered with the cursor.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_tabbar_theme_icon_drop_mark"></div>

[`Texture2D`](class_texture2d.md) **drop_mark** <div id="class_tabbar_theme_icon_drop_mark"></div>

Icon shown to indicate where a dragged tab is gonna be dropped (see [`drag_to_rearrange_enabled`](#class_tabbar_property_drag_to_rearrange_enabled)).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_tabbar_theme_icon_increment"></div>

[`Texture2D`](class_texture2d.md) **increment** <div id="class_tabbar_theme_icon_increment"></div>

Icon for the right arrow button that appears when there are too many tabs to fit in the container width. When the button is disabled (i.e. the last tab is visible) it appears semi-transparent.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_tabbar_theme_icon_increment_highlight"></div>

[`Texture2D`](class_texture2d.md) **increment_highlight** <div id="class_tabbar_theme_icon_increment_highlight"></div>

Icon for the right arrow button that appears when there are too many tabs to fit in the container width. Used when the button is being hovered with the cursor.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_tabbar_theme_style_button_highlight"></div>

[`StyleBox`](class_stylebox.md) **button_highlight** <div id="class_tabbar_theme_style_button_highlight"></div>

Background of the tab and close buttons when they're being hovered with the cursor.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_tabbar_theme_style_button_pressed"></div>

[`StyleBox`](class_stylebox.md) **button_pressed** <div id="class_tabbar_theme_style_button_pressed"></div>

Background of the tab and close buttons when it's being pressed.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_tabbar_theme_style_tab_disabled"></div>

[`StyleBox`](class_stylebox.md) **tab_disabled** <div id="class_tabbar_theme_style_tab_disabled"></div>

The style of disabled tabs.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_tabbar_theme_style_tab_focus"></div>

[`StyleBox`](class_stylebox.md) **tab_focus** <div id="class_tabbar_theme_style_tab_focus"></div>

[`StyleBox`](class_stylebox.md) used when the **TabBar** is focused. The [`tab_focus`](#class_tabbar_theme_style_tab_focus) [`StyleBox`](class_stylebox.md) is displayed *over* the base [`StyleBox`](class_stylebox.md) of the selected tab, so a partially transparent [`StyleBox`](class_stylebox.md) should be used to ensure the base [`StyleBox`](class_stylebox.md) remains visible. A [`StyleBox`](class_stylebox.md) that represents an outline or an underline works well for this purpose. To disable the focus visual effect, assign a [`StyleBoxEmpty`](class_styleboxempty.md) resource. Note that disabling the focus visual effect will harm keyboard/controller navigation usability, so this is not recommended for accessibility reasons.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_tabbar_theme_style_tab_hovered"></div>

[`StyleBox`](class_stylebox.md) **tab_hovered** <div id="class_tabbar_theme_style_tab_hovered"></div>

The style of the currently hovered tab. Does not apply to the selected tab.

 **Note:** This style will be drawn with the same width as [`tab_unselected`](#class_tabbar_theme_style_tab_unselected) at minimum.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_tabbar_theme_style_tab_selected"></div>

[`StyleBox`](class_stylebox.md) **tab_selected** <div id="class_tabbar_theme_style_tab_selected"></div>

The style of the currently selected tab.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_tabbar_theme_style_tab_unselected"></div>

[`StyleBox`](class_stylebox.md) **tab_unselected** <div id="class_tabbar_theme_style_tab_unselected"></div>

The style of the other, unselected tabs.

[^virtual]: 本方法通常需要用户覆盖才能生效。
[^const]: 本方法无副作用，不会修改该实例的任何成员变量。
[^vararg]: 本方法除了能接受在此处描述的参数外，还能够继续接受任意数量的参数。
[^constructor]: 本方法用于构造某个类型。
[^static]: 调用本方法无需实例，可直接使用类名进行调用。
[^operator]: 本方法描述的是使用本类型作为左操作数的有效运算符。
[^bitfield]: 这个值是由下列位标志构成位掩码的整数。
[^void]: 无返回值。
