<!-- ⚠ 请勿编辑本文件 ⚠ -->
<!-- 本文档使用脚本从 WeDot 引擎源码仓库生成。 -->
<!-- 生成脚本：https://github.com/WeDot-Engine/WeDot/tree/master/doc/tools/make_md.py； -->
<!-- 原文件：https://github.com/WeDot-Engine/WeDot/tree/master/doc/classes/PopupMenu.xml。 -->

<div id="_class_popupmenu"></div>

# PopupMenu

**继承：** [`Popup`](class_popup.md) **<** [`Window`](class_window.md) **<** [`Viewport`](class_viewport.md) **<** [`Node`](class_node.md) **<** [`Object`](class_object.md)

A modal window used to display a list of options.

## 描述

**PopupMenu** is a modal window used to display a list of options. Useful for toolbars and context menus.

The size of a **PopupMenu** can be limited by using [`Window.max_size`](class_window.md#class_window_property_max_size). If the height of the list of items is larger than the maximum height of the **PopupMenu**, a [`ScrollContainer`](class_scrollcontainer.md) within the popup will allow the user to scroll the contents. If no maximum size is set, or if it is set to `0`, the **PopupMenu** height will be limited by its parent rect.

All `set_*` methods allow negative item indices, i.e. `-1` to access the last item, `-2` to select the second-to-last item, and so on.

 **Incremental search:** Like [`ItemList`](class_itemlist.md) and [`Tree`](class_tree.md), **PopupMenu** supports searching within the list while the control is focused. Press a key that matches the first letter of an item's name to select the first item starting with the given letter. After that point, there are two ways to perform incremental search: 1) Press the same key again before the timeout duration to select the next item starting with the same letter. 2) Press letter keys that match the rest of the word before the timeout duration to match to select the item in question directly. Both of these actions will be reset to the beginning of the list if the timeout duration has passed since the last keystroke was registered. You can adjust the timeout duration by changing [`ProjectSettings.gui/timers/incremental_search_max_interval_msec`](class_projectsettings.md#class_projectsettings_property_gui/timers/incremental_search_max_interval_msec).

 **Note:** The ID values used for items are limited to 32 bits, not full 64 bits of [`int`](class_int.md). This has a range of `-2^32` to `2^32 - 1`, i.e. `-2147483648` to `2147483647`.

## 属性

|||
|:-:|:--|
| [`bool`](class_bool.md)                     | [`allow_search`](class_popupmenu.md#class_popupmenu_property_allow_search)                                         | ``true``  |
| [`bool`](class_bool.md)                     | [`hide_on_checkable_item_selection`](class_popupmenu.md#class_popupmenu_property_hide_on_checkable_item_selection) | ``true``  |
| [`bool`](class_bool.md)                     | [`hide_on_item_selection`](class_popupmenu.md#class_popupmenu_property_hide_on_item_selection)                     | ``true``  |
| [`bool`](class_bool.md)                     | [`hide_on_state_item_selection`](class_popupmenu.md#class_popupmenu_property_hide_on_state_item_selection)         | ``false`` |
| [`int`](class_int.md)                       | [`item_count`](class_popupmenu.md#class_popupmenu_property_item_count)                                             | ``0``     |
| [`bool`](class_bool.md)                     | [`prefer_native_menu`](class_popupmenu.md#class_popupmenu_property_prefer_native_menu)                             | ``false`` |
| [`float`](class_float.md)                   | [`submenu_popup_delay`](class_popupmenu.md#class_popupmenu_property_submenu_popup_delay)                           | ``0.3``   |
| [SystemMenus](#enum_nativemenu_systemmenus) | [`system_menu_id`](class_popupmenu.md#class_popupmenu_property_system_menu_id)                                     | ``0``     |

## 方法

|||
|:-:|:--|
| [`bool`](class_bool.md)                      | [`activate_item_by_event`](class_popupmenu.md#class_popupmenu_method_activate_item_by_event) ( event: [`InputEvent`](class_inputevent.md), for_global_only: [`bool`](class_bool.md) = false )                                                                                                      |
| `void`                                       | [`add_check_item`](class_popupmenu.md#class_popupmenu_method_add_check_item) ( label: [`String`](class_string.md), id: [`int`](class_int.md) = -1, accel: [Key](#enum_@globalscope_key) = 0 )                                                                                                      |
| `void`                                       | [`add_check_shortcut`](class_popupmenu.md#class_popupmenu_method_add_check_shortcut) ( shortcut: [`Shortcut`](class_shortcut.md), id: [`int`](class_int.md) = -1, global: [`bool`](class_bool.md) = false )                                                                                        |
| `void`                                       | [`add_icon_check_item`](class_popupmenu.md#class_popupmenu_method_add_icon_check_item) ( texture: [`Texture2D`](class_texture2d.md), label: [`String`](class_string.md), id: [`int`](class_int.md) = -1, accel: [Key](#enum_@globalscope_key) = 0 )                                                |
| `void`                                       | [`add_icon_check_shortcut`](class_popupmenu.md#class_popupmenu_method_add_icon_check_shortcut) ( texture: [`Texture2D`](class_texture2d.md), shortcut: [`Shortcut`](class_shortcut.md), id: [`int`](class_int.md) = -1, global: [`bool`](class_bool.md) = false )                                  |
| `void`                                       | [`add_icon_item`](class_popupmenu.md#class_popupmenu_method_add_icon_item) ( texture: [`Texture2D`](class_texture2d.md), label: [`String`](class_string.md), id: [`int`](class_int.md) = -1, accel: [Key](#enum_@globalscope_key) = 0 )                                                            |
| `void`                                       | [`add_icon_radio_check_item`](class_popupmenu.md#class_popupmenu_method_add_icon_radio_check_item) ( texture: [`Texture2D`](class_texture2d.md), label: [`String`](class_string.md), id: [`int`](class_int.md) = -1, accel: [Key](#enum_@globalscope_key) = 0 )                                    |
| `void`                                       | [`add_icon_radio_check_shortcut`](class_popupmenu.md#class_popupmenu_method_add_icon_radio_check_shortcut) ( texture: [`Texture2D`](class_texture2d.md), shortcut: [`Shortcut`](class_shortcut.md), id: [`int`](class_int.md) = -1, global: [`bool`](class_bool.md) = false )                      |
| `void`                                       | [`add_icon_shortcut`](class_popupmenu.md#class_popupmenu_method_add_icon_shortcut) ( texture: [`Texture2D`](class_texture2d.md), shortcut: [`Shortcut`](class_shortcut.md), id: [`int`](class_int.md) = -1, global: [`bool`](class_bool.md) = false, allow_echo: [`bool`](class_bool.md) = false ) |
| `void`                                       | [`add_item`](class_popupmenu.md#class_popupmenu_method_add_item) ( label: [`String`](class_string.md), id: [`int`](class_int.md) = -1, accel: [Key](#enum_@globalscope_key) = 0 )                                                                                                                  |
| `void`                                       | [`add_multistate_item`](class_popupmenu.md#class_popupmenu_method_add_multistate_item) ( label: [`String`](class_string.md), max_states: [`int`](class_int.md), default_state: [`int`](class_int.md) = 0, id: [`int`](class_int.md) = -1, accel: [Key](#enum_@globalscope_key) = 0 )               |
| `void`                                       | [`add_radio_check_item`](class_popupmenu.md#class_popupmenu_method_add_radio_check_item) ( label: [`String`](class_string.md), id: [`int`](class_int.md) = -1, accel: [Key](#enum_@globalscope_key) = 0 )                                                                                          |
| `void`                                       | [`add_radio_check_shortcut`](class_popupmenu.md#class_popupmenu_method_add_radio_check_shortcut) ( shortcut: [`Shortcut`](class_shortcut.md), id: [`int`](class_int.md) = -1, global: [`bool`](class_bool.md) = false )                                                                            |
| `void`                                       | [`add_separator`](class_popupmenu.md#class_popupmenu_method_add_separator) ( label: [`String`](class_string.md) = "", id: [`int`](class_int.md) = -1 )                                                                                                                                             |
| `void`                                       | [`add_shortcut`](class_popupmenu.md#class_popupmenu_method_add_shortcut) ( shortcut: [`Shortcut`](class_shortcut.md), id: [`int`](class_int.md) = -1, global: [`bool`](class_bool.md) = false, allow_echo: [`bool`](class_bool.md) = false )                                                       |
| `void`                                       | [`add_submenu_item`](class_popupmenu.md#class_popupmenu_method_add_submenu_item) ( label: [`String`](class_string.md), submenu: [`String`](class_string.md), id: [`int`](class_int.md) = -1 )                                                                                                      |
| `void`                                       | [`add_submenu_node_item`](class_popupmenu.md#class_popupmenu_method_add_submenu_node_item) ( label: [`String`](class_string.md), submenu: [`PopupMenu`](class_popupmenu.md), id: [`int`](class_int.md) = -1 )                                                                                      |
| `void`                                       | [`clear`](class_popupmenu.md#class_popupmenu_method_clear) ( free_submenus: [`bool`](class_bool.md) = false )                                                                                                                                                                                      |
| [`int`](class_int.md)                        | [`get_focused_item`](class_popupmenu.md#class_popupmenu_method_get_focused_item) ( ) const[^const]                                                                                                                                                                                                 |
| [Key](#enum_@globalscope_key)                | [`get_item_accelerator`](class_popupmenu.md#class_popupmenu_method_get_item_accelerator) ( index: [`int`](class_int.md) ) const[^const]                                                                                                                                                            |
| [`Texture2D`](class_texture2d.md)            | [`get_item_icon`](class_popupmenu.md#class_popupmenu_method_get_item_icon) ( index: [`int`](class_int.md) ) const[^const]                                                                                                                                                                          |
| [`int`](class_int.md)                        | [`get_item_icon_max_width`](class_popupmenu.md#class_popupmenu_method_get_item_icon_max_width) ( index: [`int`](class_int.md) ) const[^const]                                                                                                                                                      |
| [`Color`](class_color.md)                    | [`get_item_icon_modulate`](class_popupmenu.md#class_popupmenu_method_get_item_icon_modulate) ( index: [`int`](class_int.md) ) const[^const]                                                                                                                                                        |
| [`int`](class_int.md)                        | [`get_item_id`](class_popupmenu.md#class_popupmenu_method_get_item_id) ( index: [`int`](class_int.md) ) const[^const]                                                                                                                                                                              |
| [`int`](class_int.md)                        | [`get_item_indent`](class_popupmenu.md#class_popupmenu_method_get_item_indent) ( index: [`int`](class_int.md) ) const[^const]                                                                                                                                                                      |
| [`int`](class_int.md)                        | [`get_item_index`](class_popupmenu.md#class_popupmenu_method_get_item_index) ( id: [`int`](class_int.md) ) const[^const]                                                                                                                                                                           |
| [`String`](class_string.md)                  | [`get_item_language`](class_popupmenu.md#class_popupmenu_method_get_item_language) ( index: [`int`](class_int.md) ) const[^const]                                                                                                                                                                  |
| [`Variant`](class_variant.md)                | [`get_item_metadata`](class_popupmenu.md#class_popupmenu_method_get_item_metadata) ( index: [`int`](class_int.md) ) const[^const]                                                                                                                                                                  |
| [`int`](class_int.md)                        | [`get_item_multistate`](class_popupmenu.md#class_popupmenu_method_get_item_multistate) ( index: [`int`](class_int.md) ) const[^const]                                                                                                                                                              |
| [`int`](class_int.md)                        | [`get_item_multistate_max`](class_popupmenu.md#class_popupmenu_method_get_item_multistate_max) ( index: [`int`](class_int.md) ) const[^const]                                                                                                                                                      |
| [`Shortcut`](class_shortcut.md)              | [`get_item_shortcut`](class_popupmenu.md#class_popupmenu_method_get_item_shortcut) ( index: [`int`](class_int.md) ) const[^const]                                                                                                                                                                  |
| [`String`](class_string.md)                  | [`get_item_submenu`](class_popupmenu.md#class_popupmenu_method_get_item_submenu) ( index: [`int`](class_int.md) ) const[^const]                                                                                                                                                                    |
| [`PopupMenu`](class_popupmenu.md)            | [`get_item_submenu_node`](class_popupmenu.md#class_popupmenu_method_get_item_submenu_node) ( index: [`int`](class_int.md) ) const[^const]                                                                                                                                                          |
| [`String`](class_string.md)                  | [`get_item_text`](class_popupmenu.md#class_popupmenu_method_get_item_text) ( index: [`int`](class_int.md) ) const[^const]                                                                                                                                                                          |
| [TextDirection](#enum_control_textdirection) | [`get_item_text_direction`](class_popupmenu.md#class_popupmenu_method_get_item_text_direction) ( index: [`int`](class_int.md) ) const[^const]                                                                                                                                                      |
| [`String`](class_string.md)                  | [`get_item_tooltip`](class_popupmenu.md#class_popupmenu_method_get_item_tooltip) ( index: [`int`](class_int.md) ) const[^const]                                                                                                                                                                    |
| [`bool`](class_bool.md)                      | [`is_item_checkable`](class_popupmenu.md#class_popupmenu_method_is_item_checkable) ( index: [`int`](class_int.md) ) const[^const]                                                                                                                                                                  |
| [`bool`](class_bool.md)                      | [`is_item_checked`](class_popupmenu.md#class_popupmenu_method_is_item_checked) ( index: [`int`](class_int.md) ) const[^const]                                                                                                                                                                      |
| [`bool`](class_bool.md)                      | [`is_item_disabled`](class_popupmenu.md#class_popupmenu_method_is_item_disabled) ( index: [`int`](class_int.md) ) const[^const]                                                                                                                                                                    |
| [`bool`](class_bool.md)                      | [`is_item_radio_checkable`](class_popupmenu.md#class_popupmenu_method_is_item_radio_checkable) ( index: [`int`](class_int.md) ) const[^const]                                                                                                                                                      |
| [`bool`](class_bool.md)                      | [`is_item_separator`](class_popupmenu.md#class_popupmenu_method_is_item_separator) ( index: [`int`](class_int.md) ) const[^const]                                                                                                                                                                  |
| [`bool`](class_bool.md)                      | [`is_item_shortcut_disabled`](class_popupmenu.md#class_popupmenu_method_is_item_shortcut_disabled) ( index: [`int`](class_int.md) ) const[^const]                                                                                                                                                  |
| [`bool`](class_bool.md)                      | [`is_native_menu`](class_popupmenu.md#class_popupmenu_method_is_native_menu) ( ) const[^const]                                                                                                                                                                                                     |
| [`bool`](class_bool.md)                      | [`is_system_menu`](class_popupmenu.md#class_popupmenu_method_is_system_menu) ( ) const[^const]                                                                                                                                                                                                     |
| `void`                                       | [`remove_item`](class_popupmenu.md#class_popupmenu_method_remove_item) ( index: [`int`](class_int.md) )                                                                                                                                                                                            |
| `void`                                       | [`scroll_to_item`](class_popupmenu.md#class_popupmenu_method_scroll_to_item) ( index: [`int`](class_int.md) )                                                                                                                                                                                      |
| `void`                                       | [`set_focused_item`](class_popupmenu.md#class_popupmenu_method_set_focused_item) ( index: [`int`](class_int.md) )                                                                                                                                                                                  |
| `void`                                       | [`set_item_accelerator`](class_popupmenu.md#class_popupmenu_method_set_item_accelerator) ( index: [`int`](class_int.md), accel: [Key](#enum_@globalscope_key) )                                                                                                                                    |
| `void`                                       | [`set_item_as_checkable`](class_popupmenu.md#class_popupmenu_method_set_item_as_checkable) ( index: [`int`](class_int.md), enable: [`bool`](class_bool.md) )                                                                                                                                       |
| `void`                                       | [`set_item_as_radio_checkable`](class_popupmenu.md#class_popupmenu_method_set_item_as_radio_checkable) ( index: [`int`](class_int.md), enable: [`bool`](class_bool.md) )                                                                                                                           |
| `void`                                       | [`set_item_as_separator`](class_popupmenu.md#class_popupmenu_method_set_item_as_separator) ( index: [`int`](class_int.md), enable: [`bool`](class_bool.md) )                                                                                                                                       |
| `void`                                       | [`set_item_checked`](class_popupmenu.md#class_popupmenu_method_set_item_checked) ( index: [`int`](class_int.md), checked: [`bool`](class_bool.md) )                                                                                                                                                |
| `void`                                       | [`set_item_disabled`](class_popupmenu.md#class_popupmenu_method_set_item_disabled) ( index: [`int`](class_int.md), disabled: [`bool`](class_bool.md) )                                                                                                                                             |
| `void`                                       | [`set_item_icon`](class_popupmenu.md#class_popupmenu_method_set_item_icon) ( index: [`int`](class_int.md), icon: [`Texture2D`](class_texture2d.md) )                                                                                                                                               |
| `void`                                       | [`set_item_icon_max_width`](class_popupmenu.md#class_popupmenu_method_set_item_icon_max_width) ( index: [`int`](class_int.md), width: [`int`](class_int.md) )                                                                                                                                      |
| `void`                                       | [`set_item_icon_modulate`](class_popupmenu.md#class_popupmenu_method_set_item_icon_modulate) ( index: [`int`](class_int.md), modulate: [`Color`](class_color.md) )                                                                                                                                 |
| `void`                                       | [`set_item_id`](class_popupmenu.md#class_popupmenu_method_set_item_id) ( index: [`int`](class_int.md), id: [`int`](class_int.md) )                                                                                                                                                                 |
| `void`                                       | [`set_item_indent`](class_popupmenu.md#class_popupmenu_method_set_item_indent) ( index: [`int`](class_int.md), indent: [`int`](class_int.md) )                                                                                                                                                     |
| `void`                                       | [`set_item_language`](class_popupmenu.md#class_popupmenu_method_set_item_language) ( index: [`int`](class_int.md), language: [`String`](class_string.md) )                                                                                                                                         |
| `void`                                       | [`set_item_metadata`](class_popupmenu.md#class_popupmenu_method_set_item_metadata) ( index: [`int`](class_int.md), metadata: [`Variant`](class_variant.md) )                                                                                                                                       |
| `void`                                       | [`set_item_multistate`](class_popupmenu.md#class_popupmenu_method_set_item_multistate) ( index: [`int`](class_int.md), state: [`int`](class_int.md) )                                                                                                                                              |
| `void`                                       | [`set_item_multistate_max`](class_popupmenu.md#class_popupmenu_method_set_item_multistate_max) ( index: [`int`](class_int.md), max_states: [`int`](class_int.md) )                                                                                                                                 |
| `void`                                       | [`set_item_shortcut`](class_popupmenu.md#class_popupmenu_method_set_item_shortcut) ( index: [`int`](class_int.md), shortcut: [`Shortcut`](class_shortcut.md), global: [`bool`](class_bool.md) = false )                                                                                            |
| `void`                                       | [`set_item_shortcut_disabled`](class_popupmenu.md#class_popupmenu_method_set_item_shortcut_disabled) ( index: [`int`](class_int.md), disabled: [`bool`](class_bool.md) )                                                                                                                           |
| `void`                                       | [`set_item_submenu`](class_popupmenu.md#class_popupmenu_method_set_item_submenu) ( index: [`int`](class_int.md), submenu: [`String`](class_string.md) )                                                                                                                                            |
| `void`                                       | [`set_item_submenu_node`](class_popupmenu.md#class_popupmenu_method_set_item_submenu_node) ( index: [`int`](class_int.md), submenu: [`PopupMenu`](class_popupmenu.md) )                                                                                                                            |
| `void`                                       | [`set_item_text`](class_popupmenu.md#class_popupmenu_method_set_item_text) ( index: [`int`](class_int.md), text: [`String`](class_string.md) )                                                                                                                                                     |
| `void`                                       | [`set_item_text_direction`](class_popupmenu.md#class_popupmenu_method_set_item_text_direction) ( index: [`int`](class_int.md), direction: [TextDirection](#enum_control_textdirection) )                                                                                                           |
| `void`                                       | [`set_item_tooltip`](class_popupmenu.md#class_popupmenu_method_set_item_tooltip) ( index: [`int`](class_int.md), tooltip: [`String`](class_string.md) )                                                                                                                                            |
| `void`                                       | [`toggle_item_checked`](class_popupmenu.md#class_popupmenu_method_toggle_item_checked) ( index: [`int`](class_int.md) )                                                                                                                                                                            |
| `void`                                       | [`toggle_item_multistate`](class_popupmenu.md#class_popupmenu_method_toggle_item_multistate) ( index: [`int`](class_int.md) )                                                                                                                                                                      |

## 主题属性

|||
|:-:|:--|
| [`Color`](class_color.md)         | [`font_accelerator_color`](class_popupmenu.md#class_popupmenu_theme_color_font_accelerator_color)             | ``Color(0.7, 0.7, 0.7, 0.8)``     |
| [`Color`](class_color.md)         | [`font_color`](class_popupmenu.md#class_popupmenu_theme_color_font_color)                                     | ``Color(0.875, 0.875, 0.875, 1)`` |
| [`Color`](class_color.md)         | [`font_disabled_color`](class_popupmenu.md#class_popupmenu_theme_color_font_disabled_color)                   | ``Color(0.4, 0.4, 0.4, 0.8)``     |
| [`Color`](class_color.md)         | [`font_hover_color`](class_popupmenu.md#class_popupmenu_theme_color_font_hover_color)                         | ``Color(0.875, 0.875, 0.875, 1)`` |
| [`Color`](class_color.md)         | [`font_outline_color`](class_popupmenu.md#class_popupmenu_theme_color_font_outline_color)                     | ``Color(0, 0, 0, 1)``             |
| [`Color`](class_color.md)         | [`font_separator_color`](class_popupmenu.md#class_popupmenu_theme_color_font_separator_color)                 | ``Color(0.875, 0.875, 0.875, 1)`` |
| [`Color`](class_color.md)         | [`font_separator_outline_color`](class_popupmenu.md#class_popupmenu_theme_color_font_separator_outline_color) | ``Color(0, 0, 0, 1)``             |
| [`int`](class_int.md)             | [`h_separation`](class_popupmenu.md#class_popupmenu_theme_constant_h_separation)                              | ``4``                             |
| [`int`](class_int.md)             | [`icon_max_width`](class_popupmenu.md#class_popupmenu_theme_constant_icon_max_width)                          | ``0``                             |
| [`int`](class_int.md)             | [`indent`](class_popupmenu.md#class_popupmenu_theme_constant_indent)                                          | ``10``                            |
| [`int`](class_int.md)             | [`item_end_padding`](class_popupmenu.md#class_popupmenu_theme_constant_item_end_padding)                      | ``2``                             |
| [`int`](class_int.md)             | [`item_start_padding`](class_popupmenu.md#class_popupmenu_theme_constant_item_start_padding)                  | ``2``                             |
| [`int`](class_int.md)             | [`outline_size`](class_popupmenu.md#class_popupmenu_theme_constant_outline_size)                              | ``0``                             |
| [`int`](class_int.md)             | [`separator_outline_size`](class_popupmenu.md#class_popupmenu_theme_constant_separator_outline_size)          | ``0``                             |
| [`int`](class_int.md)             | [`v_separation`](class_popupmenu.md#class_popupmenu_theme_constant_v_separation)                              | ``4``                             |
| [`Font`](class_font.md)           | [`font`](class_popupmenu.md#class_popupmenu_theme_font_font)                                                  |                                   |
| [`Font`](class_font.md)           | [`font_separator`](class_popupmenu.md#class_popupmenu_theme_font_font_separator)                              |                                   |
| [`int`](class_int.md)             | [`font_separator_size`](class_popupmenu.md#class_popupmenu_theme_font_size_font_separator_size)               |                                   |
| [`int`](class_int.md)             | [`font_size`](class_popupmenu.md#class_popupmenu_theme_font_size_font_size)                                   |                                   |
| [`Texture2D`](class_texture2d.md) | [`checked`](class_popupmenu.md#class_popupmenu_theme_icon_checked)                                            |                                   |
| [`Texture2D`](class_texture2d.md) | [`checked_disabled`](class_popupmenu.md#class_popupmenu_theme_icon_checked_disabled)                          |                                   |
| [`Texture2D`](class_texture2d.md) | [`radio_checked`](class_popupmenu.md#class_popupmenu_theme_icon_radio_checked)                                |                                   |
| [`Texture2D`](class_texture2d.md) | [`radio_checked_disabled`](class_popupmenu.md#class_popupmenu_theme_icon_radio_checked_disabled)              |                                   |
| [`Texture2D`](class_texture2d.md) | [`radio_unchecked`](class_popupmenu.md#class_popupmenu_theme_icon_radio_unchecked)                            |                                   |
| [`Texture2D`](class_texture2d.md) | [`radio_unchecked_disabled`](class_popupmenu.md#class_popupmenu_theme_icon_radio_unchecked_disabled)          |                                   |
| [`Texture2D`](class_texture2d.md) | [`submenu`](class_popupmenu.md#class_popupmenu_theme_icon_submenu)                                            |                                   |
| [`Texture2D`](class_texture2d.md) | [`submenu_mirrored`](class_popupmenu.md#class_popupmenu_theme_icon_submenu_mirrored)                          |                                   |
| [`Texture2D`](class_texture2d.md) | [`unchecked`](class_popupmenu.md#class_popupmenu_theme_icon_unchecked)                                        |                                   |
| [`Texture2D`](class_texture2d.md) | [`unchecked_disabled`](class_popupmenu.md#class_popupmenu_theme_icon_unchecked_disabled)                      |                                   |
| [`StyleBox`](class_stylebox.md)   | [`hover`](class_popupmenu.md#class_popupmenu_theme_style_hover)                                               |                                   |
| [`StyleBox`](class_stylebox.md)   | [`labeled_separator_left`](class_popupmenu.md#class_popupmenu_theme_style_labeled_separator_left)             |                                   |
| [`StyleBox`](class_stylebox.md)   | [`labeled_separator_right`](class_popupmenu.md#class_popupmenu_theme_style_labeled_separator_right)           |                                   |
| [`StyleBox`](class_stylebox.md)   | [`panel`](class_popupmenu.md#class_popupmenu_theme_style_panel)                                               |                                   |
| [`StyleBox`](class_stylebox.md)   | [`separator`](class_popupmenu.md#class_popupmenu_theme_style_separator)                                       |                                   |

<!-- rst-class:: classref-section-separator -->

---

## 信号

<div id="_class_class_popupmenu_signal_id_focused"></div>

**id_focused** ( id: [`int`](class_int.md) ) <div id="class_popupmenu_signal_id_focused"></div>

Emitted when the user navigated to an item of some `id` using the [`ProjectSettings.input/ui_up`](class_projectsettings.md#class_projectsettings_property_input/ui_up) or [`ProjectSettings.input/ui_down`](class_projectsettings.md#class_projectsettings_property_input/ui_down) input action.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_class_popupmenu_signal_id_pressed"></div>

**id_pressed** ( id: [`int`](class_int.md) ) <div id="class_popupmenu_signal_id_pressed"></div>

Emitted when an item of some `id` is pressed or its accelerator is activated.

 **Note:** If `id` is negative (either explicitly or due to overflow), this will return the corresponding index instead.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_class_popupmenu_signal_index_pressed"></div>

**index_pressed** ( index: [`int`](class_int.md) ) <div id="class_popupmenu_signal_index_pressed"></div>

Emitted when an item of some `index` is pressed or its accelerator is activated.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_class_popupmenu_signal_menu_changed"></div>

**menu_changed** ( ) <div id="class_popupmenu_signal_menu_changed"></div>

Emitted when any item is added, modified or removed.

<!-- rst-class:: classref-section-separator -->

---

## 属性说明

<div id="_class_popupmenu_property_allow_search"></div>

[`bool`](class_bool.md) **allow_search** = ``true`` <div id="class_popupmenu_property_allow_search"></div>

- `void` **set_allow_search** ( value: [`bool`](class_bool.md) )
- [`bool`](class_bool.md) **get_allow_search** ( )

If `true`, allows navigating **PopupMenu** with letter keys.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_popupmenu_property_hide_on_checkable_item_selection"></div>

[`bool`](class_bool.md) **hide_on_checkable_item_selection** = ``true`` <div id="class_popupmenu_property_hide_on_checkable_item_selection"></div>

- `void` **set_hide_on_checkable_item_selection** ( value: [`bool`](class_bool.md) )
- [`bool`](class_bool.md) **is_hide_on_checkable_item_selection** ( )

If `true`, hides the **PopupMenu** when a checkbox or radio button is selected.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_popupmenu_property_hide_on_item_selection"></div>

[`bool`](class_bool.md) **hide_on_item_selection** = ``true`` <div id="class_popupmenu_property_hide_on_item_selection"></div>

- `void` **set_hide_on_item_selection** ( value: [`bool`](class_bool.md) )
- [`bool`](class_bool.md) **is_hide_on_item_selection** ( )

If `true`, hides the **PopupMenu** when an item is selected.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_popupmenu_property_hide_on_state_item_selection"></div>

[`bool`](class_bool.md) **hide_on_state_item_selection** = ``false`` <div id="class_popupmenu_property_hide_on_state_item_selection"></div>

- `void` **set_hide_on_state_item_selection** ( value: [`bool`](class_bool.md) )
- [`bool`](class_bool.md) **is_hide_on_state_item_selection** ( )

If `true`, hides the **PopupMenu** when a state item is selected.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_popupmenu_property_item_count"></div>

[`int`](class_int.md) **item_count** = ``0`` <div id="class_popupmenu_property_item_count"></div>

- `void` **set_item_count** ( value: [`int`](class_int.md) )
- [`int`](class_int.md) **get_item_count** ( )

The number of items currently in the list.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_popupmenu_property_prefer_native_menu"></div>

[`bool`](class_bool.md) **prefer_native_menu** = ``false`` <div id="class_popupmenu_property_prefer_native_menu"></div>

- `void` **set_prefer_native_menu** ( value: [`bool`](class_bool.md) )
- [`bool`](class_bool.md) **is_prefer_native_menu** ( )

If `true`, [`MenuBar`](class_menubar.md) will use native menu when supported.

 **Note:** If **PopupMenu** is linked to [`StatusIndicator`](class_statusindicator.md), [`MenuBar`](class_menubar.md), or another **PopupMenu** item it can use native menu regardless of this property, use [`is_native_menu`](class_popupmenu.md#class_popupmenu_method_is_native_menu) to check it.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_popupmenu_property_submenu_popup_delay"></div>

[`float`](class_float.md) **submenu_popup_delay** = ``0.3`` <div id="class_popupmenu_property_submenu_popup_delay"></div>

- `void` **set_submenu_popup_delay** ( value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_submenu_popup_delay** ( )

Sets the delay time in seconds for the submenu item to popup on mouse hovering. If the popup menu is added as a child of another (acting as a submenu), it will inherit the delay time of the parent menu item.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_popupmenu_property_system_menu_id"></div>

[SystemMenus](#enum_nativemenu_systemmenus) **system_menu_id** = ``0`` <div id="class_popupmenu_property_system_menu_id"></div>

- `void` **set_system_menu** ( value: [SystemMenus](#enum_nativemenu_systemmenus) )
- [SystemMenus](#enum_nativemenu_systemmenus) **get_system_menu** ( )

If set to one of the values of [SystemMenus](#enum_nativemenu_systemmenus), this **PopupMenu** is bound to the special system menu. Only one **PopupMenu** can be bound to each special menu at a time.

<!-- rst-class:: classref-section-separator -->

---

## 方法说明

<div id="_class_popupmenu_method_activate_item_by_event"></div>

[`bool`](class_bool.md) **activate_item_by_event** ( event: [`InputEvent`](class_inputevent.md), for_global_only: [`bool`](class_bool.md) = false )<div id="class_popupmenu_method_activate_item_by_event"></div>

Checks the provided `event` against the **PopupMenu**'s shortcuts and accelerators, and activates the first item with matching events. If `for_global_only` is `true`, only shortcuts and accelerators with `global` set to `true` will be called.

Returns `true` if an item was successfully activated.

 **Note:** Certain [`Control`](class_control.md) s, such as [`MenuButton`](class_menubutton.md), will call this method automatically.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_popupmenu_method_add_check_item"></div>

`void` **add_check_item** ( label: [`String`](class_string.md), id: [`int`](class_int.md) = -1, accel: [Key](#enum_@globalscope_key) = 0 )<div id="class_popupmenu_method_add_check_item"></div>

Adds a new checkable item with text `label`.

An `id` can optionally be provided, as well as an accelerator (`accel`). If no `id` is provided, one will be created from the index. If no `accel` is provided, then the default value of 0 (corresponding to [`@GlobalScope.KEY_NONE`](class_@globalscope.md#class_@globalscope_constant_key_none)) will be assigned to the item (which means it won't have any accelerator). See [`get_item_accelerator`](class_popupmenu.md#class_popupmenu_method_get_item_accelerator) for more info on accelerators.

 **Note:** Checkable items just display a checkmark, but don't have any built-in checking behavior and must be checked/unchecked manually. See [`set_item_checked`](class_popupmenu.md#class_popupmenu_method_set_item_checked) for more info on how to control it.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_popupmenu_method_add_check_shortcut"></div>

`void` **add_check_shortcut** ( shortcut: [`Shortcut`](class_shortcut.md), id: [`int`](class_int.md) = -1, global: [`bool`](class_bool.md) = false )<div id="class_popupmenu_method_add_check_shortcut"></div>

Adds a new checkable item and assigns the specified [`Shortcut`](class_shortcut.md) to it. Sets the label of the checkbox to the [`Shortcut`](class_shortcut.md)'s name.

An `id` can optionally be provided. If no `id` is provided, one will be created from the index.

 **Note:** Checkable items just display a checkmark, but don't have any built-in checking behavior and must be checked/unchecked manually. See [`set_item_checked`](class_popupmenu.md#class_popupmenu_method_set_item_checked) for more info on how to control it.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_popupmenu_method_add_icon_check_item"></div>

`void` **add_icon_check_item** ( texture: [`Texture2D`](class_texture2d.md), label: [`String`](class_string.md), id: [`int`](class_int.md) = -1, accel: [Key](#enum_@globalscope_key) = 0 )<div id="class_popupmenu_method_add_icon_check_item"></div>

Adds a new checkable item with text `label` and icon `texture`.

An `id` can optionally be provided, as well as an accelerator (`accel`). If no `id` is provided, one will be created from the index. If no `accel` is provided, then the default value of 0 (corresponding to [`@GlobalScope.KEY_NONE`](class_@globalscope.md#class_@globalscope_constant_key_none)) will be assigned to the item (which means it won't have any accelerator). See [`get_item_accelerator`](class_popupmenu.md#class_popupmenu_method_get_item_accelerator) for more info on accelerators.

 **Note:** Checkable items just display a checkmark, but don't have any built-in checking behavior and must be checked/unchecked manually. See [`set_item_checked`](class_popupmenu.md#class_popupmenu_method_set_item_checked) for more info on how to control it.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_popupmenu_method_add_icon_check_shortcut"></div>

`void` **add_icon_check_shortcut** ( texture: [`Texture2D`](class_texture2d.md), shortcut: [`Shortcut`](class_shortcut.md), id: [`int`](class_int.md) = -1, global: [`bool`](class_bool.md) = false )<div id="class_popupmenu_method_add_icon_check_shortcut"></div>

Adds a new checkable item and assigns the specified [`Shortcut`](class_shortcut.md) and icon `texture` to it. Sets the label of the checkbox to the [`Shortcut`](class_shortcut.md)'s name.

An `id` can optionally be provided. If no `id` is provided, one will be created from the index.

 **Note:** Checkable items just display a checkmark, but don't have any built-in checking behavior and must be checked/unchecked manually. See [`set_item_checked`](class_popupmenu.md#class_popupmenu_method_set_item_checked) for more info on how to control it.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_popupmenu_method_add_icon_item"></div>

`void` **add_icon_item** ( texture: [`Texture2D`](class_texture2d.md), label: [`String`](class_string.md), id: [`int`](class_int.md) = -1, accel: [Key](#enum_@globalscope_key) = 0 )<div id="class_popupmenu_method_add_icon_item"></div>

Adds a new item with text `label` and icon `texture`.

An `id` can optionally be provided, as well as an accelerator (`accel`). If no `id` is provided, one will be created from the index. If no `accel` is provided, then the default value of 0 (corresponding to [`@GlobalScope.KEY_NONE`](class_@globalscope.md#class_@globalscope_constant_key_none)) will be assigned to the item (which means it won't have any accelerator). See [`get_item_accelerator`](class_popupmenu.md#class_popupmenu_method_get_item_accelerator) for more info on accelerators.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_popupmenu_method_add_icon_radio_check_item"></div>

`void` **add_icon_radio_check_item** ( texture: [`Texture2D`](class_texture2d.md), label: [`String`](class_string.md), id: [`int`](class_int.md) = -1, accel: [Key](#enum_@globalscope_key) = 0 )<div id="class_popupmenu_method_add_icon_radio_check_item"></div>

Same as [`add_icon_check_item`](class_popupmenu.md#class_popupmenu_method_add_icon_check_item), but uses a radio check button.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_popupmenu_method_add_icon_radio_check_shortcut"></div>

`void` **add_icon_radio_check_shortcut** ( texture: [`Texture2D`](class_texture2d.md), shortcut: [`Shortcut`](class_shortcut.md), id: [`int`](class_int.md) = -1, global: [`bool`](class_bool.md) = false )<div id="class_popupmenu_method_add_icon_radio_check_shortcut"></div>

Same as [`add_icon_check_shortcut`](class_popupmenu.md#class_popupmenu_method_add_icon_check_shortcut), but uses a radio check button.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_popupmenu_method_add_icon_shortcut"></div>

`void` **add_icon_shortcut** ( texture: [`Texture2D`](class_texture2d.md), shortcut: [`Shortcut`](class_shortcut.md), id: [`int`](class_int.md) = -1, global: [`bool`](class_bool.md) = false, allow_echo: [`bool`](class_bool.md) = false )<div id="class_popupmenu_method_add_icon_shortcut"></div>

Adds a new item and assigns the specified [`Shortcut`](class_shortcut.md) and icon `texture` to it. Sets the label of the checkbox to the [`Shortcut`](class_shortcut.md)'s name.

An `id` can optionally be provided. If no `id` is provided, one will be created from the index.

If `allow_echo` is `true`, the shortcut can be activated with echo events.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_popupmenu_method_add_item"></div>

`void` **add_item** ( label: [`String`](class_string.md), id: [`int`](class_int.md) = -1, accel: [Key](#enum_@globalscope_key) = 0 )<div id="class_popupmenu_method_add_item"></div>

Adds a new item with text `label`.

An `id` can optionally be provided, as well as an accelerator (`accel`). If no `id` is provided, one will be created from the index. If no `accel` is provided, then the default value of 0 (corresponding to [`@GlobalScope.KEY_NONE`](class_@globalscope.md#class_@globalscope_constant_key_none)) will be assigned to the item (which means it won't have any accelerator). See [`get_item_accelerator`](class_popupmenu.md#class_popupmenu_method_get_item_accelerator) for more info on accelerators.

 **Note:** The provided `id` is used only in [`id_pressed`](class_popupmenu.md#class_popupmenu_signal_id_pressed) and [`id_focused`](class_popupmenu.md#class_popupmenu_signal_id_focused) signals. It's not related to the `index` arguments in e.g. [`set_item_checked`](class_popupmenu.md#class_popupmenu_method_set_item_checked).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_popupmenu_method_add_multistate_item"></div>

`void` **add_multistate_item** ( label: [`String`](class_string.md), max_states: [`int`](class_int.md), default_state: [`int`](class_int.md) = 0, id: [`int`](class_int.md) = -1, accel: [Key](#enum_@globalscope_key) = 0 )<div id="class_popupmenu_method_add_multistate_item"></div>

Adds a new multistate item with text `label`.

Contrarily to normal binary items, multistate items can have more than two states, as defined by `max_states`. The default value is defined by `default_state`.

An `id` can optionally be provided, as well as an accelerator (`accel`). If no `id` is provided, one will be created from the index. If no `accel` is provided, then the default value of 0 (corresponding to [`@GlobalScope.KEY_NONE`](class_@globalscope.md#class_@globalscope_constant_key_none)) will be assigned to the item (which means it won't have any accelerator). See [`get_item_accelerator`](class_popupmenu.md#class_popupmenu_method_get_item_accelerator) for more info on accelerators.

 **Note:** Multistate items don't update their state automatically and must be done manually. See [`toggle_item_multistate`](class_popupmenu.md#class_popupmenu_method_toggle_item_multistate), [`set_item_multistate`](class_popupmenu.md#class_popupmenu_method_set_item_multistate) and [`get_item_multistate`](class_popupmenu.md#class_popupmenu_method_get_item_multistate) for more info on how to control it.

Example usage:

```

    func _ready():
        add_multistate_item("Item", 3, 0)
    
        index_pressed.connect(func(index: int):
                toggle_item_multistate(index)
                match get_item_multistate(index):
                    0:
                        print("First state")
                    1:
                        print("Second state")
                    2:
                        print("Third state")
            )
```



<!-- rst-class:: classref-item-separator -->

---

<div id="_class_popupmenu_method_add_radio_check_item"></div>

`void` **add_radio_check_item** ( label: [`String`](class_string.md), id: [`int`](class_int.md) = -1, accel: [Key](#enum_@globalscope_key) = 0 )<div id="class_popupmenu_method_add_radio_check_item"></div>

Adds a new radio check button with text `label`.

An `id` can optionally be provided, as well as an accelerator (`accel`). If no `id` is provided, one will be created from the index. If no `accel` is provided, then the default value of 0 (corresponding to [`@GlobalScope.KEY_NONE`](class_@globalscope.md#class_@globalscope_constant_key_none)) will be assigned to the item (which means it won't have any accelerator). See [`get_item_accelerator`](class_popupmenu.md#class_popupmenu_method_get_item_accelerator) for more info on accelerators.

 **Note:** Checkable items just display a checkmark, but don't have any built-in checking behavior and must be checked/unchecked manually. See [`set_item_checked`](class_popupmenu.md#class_popupmenu_method_set_item_checked) for more info on how to control it.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_popupmenu_method_add_radio_check_shortcut"></div>

`void` **add_radio_check_shortcut** ( shortcut: [`Shortcut`](class_shortcut.md), id: [`int`](class_int.md) = -1, global: [`bool`](class_bool.md) = false )<div id="class_popupmenu_method_add_radio_check_shortcut"></div>

Adds a new radio check button and assigns a [`Shortcut`](class_shortcut.md) to it. Sets the label of the checkbox to the [`Shortcut`](class_shortcut.md)'s name.

An `id` can optionally be provided. If no `id` is provided, one will be created from the index.

 **Note:** Checkable items just display a checkmark, but don't have any built-in checking behavior and must be checked/unchecked manually. See [`set_item_checked`](class_popupmenu.md#class_popupmenu_method_set_item_checked) for more info on how to control it.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_popupmenu_method_add_separator"></div>

`void` **add_separator** ( label: [`String`](class_string.md) = "", id: [`int`](class_int.md) = -1 )<div id="class_popupmenu_method_add_separator"></div>

Adds a separator between items. Separators also occupy an index, which you can set by using the `id` parameter.

A `label` can optionally be provided, which will appear at the center of the separator.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_popupmenu_method_add_shortcut"></div>

`void` **add_shortcut** ( shortcut: [`Shortcut`](class_shortcut.md), id: [`int`](class_int.md) = -1, global: [`bool`](class_bool.md) = false, allow_echo: [`bool`](class_bool.md) = false )<div id="class_popupmenu_method_add_shortcut"></div>

Adds a [`Shortcut`](class_shortcut.md).

An `id` can optionally be provided. If no `id` is provided, one will be created from the index.

If `allow_echo` is `true`, the shortcut can be activated with echo events.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_popupmenu_method_add_submenu_item"></div>

`void` **add_submenu_item** ( label: [`String`](class_string.md), submenu: [`String`](class_string.md), id: [`int`](class_int.md) = -1 )<div id="class_popupmenu_method_add_submenu_item"></div>

**已弃用：** Prefer using [`add_submenu_node_item`](class_popupmenu.md#class_popupmenu_method_add_submenu_node_item) instead.

Adds an item that will act as a submenu of the parent **PopupMenu** node when clicked. The `submenu` argument must be the name of an existing **PopupMenu** that has been added as a child to this node. This submenu will be shown when the item is clicked, hovered for long enough, or activated using the `ui_select` or `ui_right` input actions.

An `id` can optionally be provided. If no `id` is provided, one will be created from the index.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_popupmenu_method_add_submenu_node_item"></div>

`void` **add_submenu_node_item** ( label: [`String`](class_string.md), submenu: [`PopupMenu`](class_popupmenu.md), id: [`int`](class_int.md) = -1 )<div id="class_popupmenu_method_add_submenu_node_item"></div>

Adds an item that will act as a submenu of the parent **PopupMenu** node when clicked. This submenu will be shown when the item is clicked, hovered for long enough, or activated using the `ui_select` or `ui_right` input actions.

 `submenu` must be either child of this **PopupMenu** or has no parent node (in which case it will be automatically added as a child). If the `submenu` popup has another parent, this method will fail.

An `id` can optionally be provided. If no `id` is provided, one will be created from the index.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_popupmenu_method_clear"></div>

`void` **clear** ( free_submenus: [`bool`](class_bool.md) = false )<div id="class_popupmenu_method_clear"></div>

Removes all items from the **PopupMenu**. If `free_submenus` is `true`, the submenu nodes are automatically freed.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_popupmenu_method_get_focused_item"></div>

[`int`](class_int.md) **get_focused_item** ( ) const[^const]<div id="class_popupmenu_method_get_focused_item"></div>

Returns the index of the currently focused item. Returns `-1` if no item is focused.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_popupmenu_method_get_item_accelerator"></div>

[Key](#enum_@globalscope_key) **get_item_accelerator** ( index: [`int`](class_int.md) ) const[^const]<div id="class_popupmenu_method_get_item_accelerator"></div>

Returns the accelerator of the item at the given `index`. An accelerator is a keyboard shortcut that can be pressed to trigger the menu button even if it's not currently open. The return value is an integer which is generally a combination of [KeyModifierMask](#enum_@globalscope_keymodifiermask) s and [Key](#enum_@globalscope_key) s using bitwise OR such as `KEY_MASK_CTRL | KEY_A` (<i class="fa fa-gamepad"></i>`Ctrl + A`). If no accelerator is defined for the specified `index`, [`get_item_accelerator`](class_popupmenu.md#class_popupmenu_method_get_item_accelerator) returns `0` (corresponding to [`@GlobalScope.KEY_NONE`](class_@globalscope.md#class_@globalscope_constant_key_none)).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_popupmenu_method_get_item_icon"></div>

[`Texture2D`](class_texture2d.md) **get_item_icon** ( index: [`int`](class_int.md) ) const[^const]<div id="class_popupmenu_method_get_item_icon"></div>

Returns the icon of the item at the given `index`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_popupmenu_method_get_item_icon_max_width"></div>

[`int`](class_int.md) **get_item_icon_max_width** ( index: [`int`](class_int.md) ) const[^const]<div id="class_popupmenu_method_get_item_icon_max_width"></div>

Returns the maximum allowed width of the icon for the item at the given `index`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_popupmenu_method_get_item_icon_modulate"></div>

[`Color`](class_color.md) **get_item_icon_modulate** ( index: [`int`](class_int.md) ) const[^const]<div id="class_popupmenu_method_get_item_icon_modulate"></div>

Returns a [`Color`](class_color.md) modulating the item's icon at the given `index`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_popupmenu_method_get_item_id"></div>

[`int`](class_int.md) **get_item_id** ( index: [`int`](class_int.md) ) const[^const]<div id="class_popupmenu_method_get_item_id"></div>

Returns the ID of the item at the given `index`. `id` can be manually assigned, while index can not.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_popupmenu_method_get_item_indent"></div>

[`int`](class_int.md) **get_item_indent** ( index: [`int`](class_int.md) ) const[^const]<div id="class_popupmenu_method_get_item_indent"></div>

Returns the horizontal offset of the item at the given `index`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_popupmenu_method_get_item_index"></div>

[`int`](class_int.md) **get_item_index** ( id: [`int`](class_int.md) ) const[^const]<div id="class_popupmenu_method_get_item_index"></div>

Returns the index of the item containing the specified `id`. Index is automatically assigned to each item by the engine and can not be set manually.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_popupmenu_method_get_item_language"></div>

[`String`](class_string.md) **get_item_language** ( index: [`int`](class_int.md) ) const[^const]<div id="class_popupmenu_method_get_item_language"></div>

Returns item's text language code.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_popupmenu_method_get_item_metadata"></div>

[`Variant`](class_variant.md) **get_item_metadata** ( index: [`int`](class_int.md) ) const[^const]<div id="class_popupmenu_method_get_item_metadata"></div>

Returns the metadata of the specified item, which might be of any type. You can set it with [`set_item_metadata`](class_popupmenu.md#class_popupmenu_method_set_item_metadata), which provides a simple way of assigning context data to items.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_popupmenu_method_get_item_multistate"></div>

[`int`](class_int.md) **get_item_multistate** ( index: [`int`](class_int.md) ) const[^const]<div id="class_popupmenu_method_get_item_multistate"></div>

Returns the state of the item at the given `index`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_popupmenu_method_get_item_multistate_max"></div>

[`int`](class_int.md) **get_item_multistate_max** ( index: [`int`](class_int.md) ) const[^const]<div id="class_popupmenu_method_get_item_multistate_max"></div>

Returns the max states of the item at the given `index`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_popupmenu_method_get_item_shortcut"></div>

[`Shortcut`](class_shortcut.md) **get_item_shortcut** ( index: [`int`](class_int.md) ) const[^const]<div id="class_popupmenu_method_get_item_shortcut"></div>

Returns the [`Shortcut`](class_shortcut.md) associated with the item at the given `index`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_popupmenu_method_get_item_submenu"></div>

[`String`](class_string.md) **get_item_submenu** ( index: [`int`](class_int.md) ) const[^const]<div id="class_popupmenu_method_get_item_submenu"></div>

**已弃用：** Prefer using [`get_item_submenu_node`](class_popupmenu.md#class_popupmenu_method_get_item_submenu_node) instead.

Returns the submenu name of the item at the given `index`. See [`add_submenu_item`](class_popupmenu.md#class_popupmenu_method_add_submenu_item) for more info on how to add a submenu.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_popupmenu_method_get_item_submenu_node"></div>

[`PopupMenu`](class_popupmenu.md) **get_item_submenu_node** ( index: [`int`](class_int.md) ) const[^const]<div id="class_popupmenu_method_get_item_submenu_node"></div>

Returns the submenu of the item at the given `index`, or `null` if no submenu was added. See [`add_submenu_node_item`](class_popupmenu.md#class_popupmenu_method_add_submenu_node_item) for more info on how to add a submenu.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_popupmenu_method_get_item_text"></div>

[`String`](class_string.md) **get_item_text** ( index: [`int`](class_int.md) ) const[^const]<div id="class_popupmenu_method_get_item_text"></div>

Returns the text of the item at the given `index`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_popupmenu_method_get_item_text_direction"></div>

[TextDirection](#enum_control_textdirection) **get_item_text_direction** ( index: [`int`](class_int.md) ) const[^const]<div id="class_popupmenu_method_get_item_text_direction"></div>

Returns item's text base writing direction.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_popupmenu_method_get_item_tooltip"></div>

[`String`](class_string.md) **get_item_tooltip** ( index: [`int`](class_int.md) ) const[^const]<div id="class_popupmenu_method_get_item_tooltip"></div>

Returns the tooltip associated with the item at the given `index`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_popupmenu_method_is_item_checkable"></div>

[`bool`](class_bool.md) **is_item_checkable** ( index: [`int`](class_int.md) ) const[^const]<div id="class_popupmenu_method_is_item_checkable"></div>

Returns `true` if the item at the given `index` is checkable in some way, i.e. if it has a checkbox or radio button.

 **Note:** Checkable items just display a checkmark or radio button, but don't have any built-in checking behavior and must be checked/unchecked manually.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_popupmenu_method_is_item_checked"></div>

[`bool`](class_bool.md) **is_item_checked** ( index: [`int`](class_int.md) ) const[^const]<div id="class_popupmenu_method_is_item_checked"></div>

Returns `true` if the item at the given `index` is checked.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_popupmenu_method_is_item_disabled"></div>

[`bool`](class_bool.md) **is_item_disabled** ( index: [`int`](class_int.md) ) const[^const]<div id="class_popupmenu_method_is_item_disabled"></div>

Returns `true` if the item at the given `index` is disabled. When it is disabled it can't be selected, or its action invoked.

See [`set_item_disabled`](class_popupmenu.md#class_popupmenu_method_set_item_disabled) for more info on how to disable an item.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_popupmenu_method_is_item_radio_checkable"></div>

[`bool`](class_bool.md) **is_item_radio_checkable** ( index: [`int`](class_int.md) ) const[^const]<div id="class_popupmenu_method_is_item_radio_checkable"></div>

Returns `true` if the item at the given `index` has radio button-style checkability.

 **Note:** This is purely cosmetic; you must add the logic for checking/unchecking items in radio groups.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_popupmenu_method_is_item_separator"></div>

[`bool`](class_bool.md) **is_item_separator** ( index: [`int`](class_int.md) ) const[^const]<div id="class_popupmenu_method_is_item_separator"></div>

Returns `true` if the item is a separator. If it is, it will be displayed as a line. See [`add_separator`](class_popupmenu.md#class_popupmenu_method_add_separator) for more info on how to add a separator.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_popupmenu_method_is_item_shortcut_disabled"></div>

[`bool`](class_bool.md) **is_item_shortcut_disabled** ( index: [`int`](class_int.md) ) const[^const]<div id="class_popupmenu_method_is_item_shortcut_disabled"></div>

Returns `true` if the specified item's shortcut is disabled.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_popupmenu_method_is_native_menu"></div>

[`bool`](class_bool.md) **is_native_menu** ( ) const[^const]<div id="class_popupmenu_method_is_native_menu"></div>

Returns `true` if the system native menu is supported and currently used by this **PopupMenu**.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_popupmenu_method_is_system_menu"></div>

[`bool`](class_bool.md) **is_system_menu** ( ) const[^const]<div id="class_popupmenu_method_is_system_menu"></div>

Returns `true` if the menu is bound to the special system menu.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_popupmenu_method_remove_item"></div>

`void` **remove_item** ( index: [`int`](class_int.md) )<div id="class_popupmenu_method_remove_item"></div>

Removes the item at the given `index` from the menu.

 **Note:** The indices of items after the removed item will be shifted by one.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_popupmenu_method_scroll_to_item"></div>

`void` **scroll_to_item** ( index: [`int`](class_int.md) )<div id="class_popupmenu_method_scroll_to_item"></div>

Moves the scroll view to make the item at the given `index` visible.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_popupmenu_method_set_focused_item"></div>

`void` **set_focused_item** ( index: [`int`](class_int.md) )<div id="class_popupmenu_method_set_focused_item"></div>

Sets the currently focused item as the given `index`.

Passing `-1` as the index makes so that no item is focused.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_popupmenu_method_set_item_accelerator"></div>

`void` **set_item_accelerator** ( index: [`int`](class_int.md), accel: [Key](#enum_@globalscope_key) )<div id="class_popupmenu_method_set_item_accelerator"></div>

Sets the accelerator of the item at the given `index`. An accelerator is a keyboard shortcut that can be pressed to trigger the menu button even if it's not currently open. `accel` is generally a combination of [KeyModifierMask](#enum_@globalscope_keymodifiermask) s and [Key](#enum_@globalscope_key) s using bitwise OR such as `KEY_MASK_CTRL | KEY_A` (<i class="fa fa-gamepad"></i>`Ctrl + A`).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_popupmenu_method_set_item_as_checkable"></div>

`void` **set_item_as_checkable** ( index: [`int`](class_int.md), enable: [`bool`](class_bool.md) )<div id="class_popupmenu_method_set_item_as_checkable"></div>

Sets whether the item at the given `index` has a checkbox. If `false`, sets the type of the item to plain text.

 **Note:** Checkable items just display a checkmark, but don't have any built-in checking behavior and must be checked/unchecked manually.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_popupmenu_method_set_item_as_radio_checkable"></div>

`void` **set_item_as_radio_checkable** ( index: [`int`](class_int.md), enable: [`bool`](class_bool.md) )<div id="class_popupmenu_method_set_item_as_radio_checkable"></div>

Sets the type of the item at the given `index` to radio button. If `false`, sets the type of the item to plain text.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_popupmenu_method_set_item_as_separator"></div>

`void` **set_item_as_separator** ( index: [`int`](class_int.md), enable: [`bool`](class_bool.md) )<div id="class_popupmenu_method_set_item_as_separator"></div>

Mark the item at the given `index` as a separator, which means that it would be displayed as a line. If `false`, sets the type of the item to plain text.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_popupmenu_method_set_item_checked"></div>

`void` **set_item_checked** ( index: [`int`](class_int.md), checked: [`bool`](class_bool.md) )<div id="class_popupmenu_method_set_item_checked"></div>

Sets the checkstate status of the item at the given `index`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_popupmenu_method_set_item_disabled"></div>

`void` **set_item_disabled** ( index: [`int`](class_int.md), disabled: [`bool`](class_bool.md) )<div id="class_popupmenu_method_set_item_disabled"></div>

Enables/disables the item at the given `index`. When it is disabled, it can't be selected and its action can't be invoked.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_popupmenu_method_set_item_icon"></div>

`void` **set_item_icon** ( index: [`int`](class_int.md), icon: [`Texture2D`](class_texture2d.md) )<div id="class_popupmenu_method_set_item_icon"></div>

Replaces the [`Texture2D`](class_texture2d.md) icon of the item at the given `index`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_popupmenu_method_set_item_icon_max_width"></div>

`void` **set_item_icon_max_width** ( index: [`int`](class_int.md), width: [`int`](class_int.md) )<div id="class_popupmenu_method_set_item_icon_max_width"></div>

Sets the maximum allowed width of the icon for the item at the given `index`. This limit is applied on top of the default size of the icon and on top of [`icon_max_width`](class_popupmenu.md#class_popupmenu_theme_constant_icon_max_width). The height is adjusted according to the icon's ratio.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_popupmenu_method_set_item_icon_modulate"></div>

`void` **set_item_icon_modulate** ( index: [`int`](class_int.md), modulate: [`Color`](class_color.md) )<div id="class_popupmenu_method_set_item_icon_modulate"></div>

Sets a modulating [`Color`](class_color.md) of the item's icon at the given `index`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_popupmenu_method_set_item_id"></div>

`void` **set_item_id** ( index: [`int`](class_int.md), id: [`int`](class_int.md) )<div id="class_popupmenu_method_set_item_id"></div>

Sets the `id` of the item at the given `index`.

The `id` is used in [`id_pressed`](class_popupmenu.md#class_popupmenu_signal_id_pressed) and [`id_focused`](class_popupmenu.md#class_popupmenu_signal_id_focused) signals.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_popupmenu_method_set_item_indent"></div>

`void` **set_item_indent** ( index: [`int`](class_int.md), indent: [`int`](class_int.md) )<div id="class_popupmenu_method_set_item_indent"></div>

Sets the horizontal offset of the item at the given `index`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_popupmenu_method_set_item_language"></div>

`void` **set_item_language** ( index: [`int`](class_int.md), language: [`String`](class_string.md) )<div id="class_popupmenu_method_set_item_language"></div>

Sets language code of item's text used for line-breaking and text shaping algorithms, if left empty current locale is used instead.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_popupmenu_method_set_item_metadata"></div>

`void` **set_item_metadata** ( index: [`int`](class_int.md), metadata: [`Variant`](class_variant.md) )<div id="class_popupmenu_method_set_item_metadata"></div>

Sets the metadata of an item, which may be of any type. You can later get it with [`get_item_metadata`](class_popupmenu.md#class_popupmenu_method_get_item_metadata), which provides a simple way of assigning context data to items.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_popupmenu_method_set_item_multistate"></div>

`void` **set_item_multistate** ( index: [`int`](class_int.md), state: [`int`](class_int.md) )<div id="class_popupmenu_method_set_item_multistate"></div>

Sets the state of a multistate item. See [`add_multistate_item`](class_popupmenu.md#class_popupmenu_method_add_multistate_item) for details.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_popupmenu_method_set_item_multistate_max"></div>

`void` **set_item_multistate_max** ( index: [`int`](class_int.md), max_states: [`int`](class_int.md) )<div id="class_popupmenu_method_set_item_multistate_max"></div>

Sets the max states of a multistate item. See [`add_multistate_item`](class_popupmenu.md#class_popupmenu_method_add_multistate_item) for details.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_popupmenu_method_set_item_shortcut"></div>

`void` **set_item_shortcut** ( index: [`int`](class_int.md), shortcut: [`Shortcut`](class_shortcut.md), global: [`bool`](class_bool.md) = false )<div id="class_popupmenu_method_set_item_shortcut"></div>

Sets a [`Shortcut`](class_shortcut.md) for the item at the given `index`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_popupmenu_method_set_item_shortcut_disabled"></div>

`void` **set_item_shortcut_disabled** ( index: [`int`](class_int.md), disabled: [`bool`](class_bool.md) )<div id="class_popupmenu_method_set_item_shortcut_disabled"></div>

Disables the [`Shortcut`](class_shortcut.md) of the item at the given `index`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_popupmenu_method_set_item_submenu"></div>

`void` **set_item_submenu** ( index: [`int`](class_int.md), submenu: [`String`](class_string.md) )<div id="class_popupmenu_method_set_item_submenu"></div>

**已弃用：** Prefer using [`set_item_submenu_node`](class_popupmenu.md#class_popupmenu_method_set_item_submenu_node) instead.

Sets the submenu of the item at the given `index`. The submenu is the name of a child **PopupMenu** node that would be shown when the item is clicked.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_popupmenu_method_set_item_submenu_node"></div>

`void` **set_item_submenu_node** ( index: [`int`](class_int.md), submenu: [`PopupMenu`](class_popupmenu.md) )<div id="class_popupmenu_method_set_item_submenu_node"></div>

Sets the submenu of the item at the given `index`. The submenu is a **PopupMenu** node that would be shown when the item is clicked. It must either be a child of this **PopupMenu** or has no parent (in which case it will be automatically added as a child). If the `submenu` popup has another parent, this method will fail.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_popupmenu_method_set_item_text"></div>

`void` **set_item_text** ( index: [`int`](class_int.md), text: [`String`](class_string.md) )<div id="class_popupmenu_method_set_item_text"></div>

Sets the text of the item at the given `index`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_popupmenu_method_set_item_text_direction"></div>

`void` **set_item_text_direction** ( index: [`int`](class_int.md), direction: [TextDirection](#enum_control_textdirection) )<div id="class_popupmenu_method_set_item_text_direction"></div>

Sets item's text base writing direction.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_popupmenu_method_set_item_tooltip"></div>

`void` **set_item_tooltip** ( index: [`int`](class_int.md), tooltip: [`String`](class_string.md) )<div id="class_popupmenu_method_set_item_tooltip"></div>

Sets the [`String`](class_string.md) tooltip of the item at the given `index`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_popupmenu_method_toggle_item_checked"></div>

`void` **toggle_item_checked** ( index: [`int`](class_int.md) )<div id="class_popupmenu_method_toggle_item_checked"></div>

Toggles the check state of the item at the given `index`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_popupmenu_method_toggle_item_multistate"></div>

`void` **toggle_item_multistate** ( index: [`int`](class_int.md) )<div id="class_popupmenu_method_toggle_item_multistate"></div>

Cycle to the next state of a multistate item. See [`add_multistate_item`](class_popupmenu.md#class_popupmenu_method_add_multistate_item) for details.

<!-- rst-class:: classref-section-separator -->

---

## 主题属性说明

<div id="_class_popupmenu_theme_color_font_accelerator_color"></div>

[`Color`](class_color.md) **font_accelerator_color** = ``Color(0.7, 0.7, 0.7, 0.8)`` <div id="class_popupmenu_theme_color_font_accelerator_color"></div>

The text [`Color`](class_color.md) used for shortcuts and accelerators that show next to the menu item name when defined. See [`get_item_accelerator`](class_popupmenu.md#class_popupmenu_method_get_item_accelerator) for more info on accelerators.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_popupmenu_theme_color_font_color"></div>

[`Color`](class_color.md) **font_color** = ``Color(0.875, 0.875, 0.875, 1)`` <div id="class_popupmenu_theme_color_font_color"></div>

The default text [`Color`](class_color.md) for menu items' names.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_popupmenu_theme_color_font_disabled_color"></div>

[`Color`](class_color.md) **font_disabled_color** = ``Color(0.4, 0.4, 0.4, 0.8)`` <div id="class_popupmenu_theme_color_font_disabled_color"></div>

[`Color`](class_color.md) used for disabled menu items' text.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_popupmenu_theme_color_font_hover_color"></div>

[`Color`](class_color.md) **font_hover_color** = ``Color(0.875, 0.875, 0.875, 1)`` <div id="class_popupmenu_theme_color_font_hover_color"></div>

[`Color`](class_color.md) used for the hovered text.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_popupmenu_theme_color_font_outline_color"></div>

[`Color`](class_color.md) **font_outline_color** = ``Color(0, 0, 0, 1)`` <div id="class_popupmenu_theme_color_font_outline_color"></div>

The tint of text outline of the menu item.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_popupmenu_theme_color_font_separator_color"></div>

[`Color`](class_color.md) **font_separator_color** = ``Color(0.875, 0.875, 0.875, 1)`` <div id="class_popupmenu_theme_color_font_separator_color"></div>

[`Color`](class_color.md) used for labeled separators' text. See [`add_separator`](class_popupmenu.md#class_popupmenu_method_add_separator).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_popupmenu_theme_color_font_separator_outline_color"></div>

[`Color`](class_color.md) **font_separator_outline_color** = ``Color(0, 0, 0, 1)`` <div id="class_popupmenu_theme_color_font_separator_outline_color"></div>

The tint of text outline of the labeled separator.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_popupmenu_theme_constant_h_separation"></div>

[`int`](class_int.md) **h_separation** = ``4`` <div id="class_popupmenu_theme_constant_h_separation"></div>

The horizontal space between the item's elements.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_popupmenu_theme_constant_icon_max_width"></div>

[`int`](class_int.md) **icon_max_width** = ``0`` <div id="class_popupmenu_theme_constant_icon_max_width"></div>

The maximum allowed width of the item's icon. This limit is applied on top of the default size of the icon, but before the value set with [`set_item_icon_max_width`](class_popupmenu.md#class_popupmenu_method_set_item_icon_max_width). The height is adjusted according to the icon's ratio.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_popupmenu_theme_constant_indent"></div>

[`int`](class_int.md) **indent** = ``10`` <div id="class_popupmenu_theme_constant_indent"></div>

Width of the single indentation level.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_popupmenu_theme_constant_item_end_padding"></div>

[`int`](class_int.md) **item_end_padding** = ``2`` <div id="class_popupmenu_theme_constant_item_end_padding"></div>

Horizontal padding to the right of the items (or left, in RTL layout).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_popupmenu_theme_constant_item_start_padding"></div>

[`int`](class_int.md) **item_start_padding** = ``2`` <div id="class_popupmenu_theme_constant_item_start_padding"></div>

Horizontal padding to the left of the items (or right, in RTL layout).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_popupmenu_theme_constant_outline_size"></div>

[`int`](class_int.md) **outline_size** = ``0`` <div id="class_popupmenu_theme_constant_outline_size"></div>

The size of the item text outline.

 **Note:** If using a font with [`FontFile.multichannel_signed_distance_field`](class_fontfile.md#class_fontfile_property_multichannel_signed_distance_field) enabled, its [`FontFile.msdf_pixel_range`](class_fontfile.md#class_fontfile_property_msdf_pixel_range) must be set to at least *twice* the value of [`outline_size`](class_popupmenu.md#class_popupmenu_theme_constant_outline_size) for outline rendering to look correct. Otherwise, the outline may appear to be cut off earlier than intended.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_popupmenu_theme_constant_separator_outline_size"></div>

[`int`](class_int.md) **separator_outline_size** = ``0`` <div id="class_popupmenu_theme_constant_separator_outline_size"></div>

The size of the labeled separator text outline.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_popupmenu_theme_constant_v_separation"></div>

[`int`](class_int.md) **v_separation** = ``4`` <div id="class_popupmenu_theme_constant_v_separation"></div>

The vertical space between each menu item.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_popupmenu_theme_font_font"></div>

[`Font`](class_font.md) **font** <div id="class_popupmenu_theme_font_font"></div>

[`Font`](class_font.md) used for the menu items.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_popupmenu_theme_font_font_separator"></div>

[`Font`](class_font.md) **font_separator** <div id="class_popupmenu_theme_font_font_separator"></div>

[`Font`](class_font.md) used for the labeled separator.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_popupmenu_theme_font_size_font_separator_size"></div>

[`int`](class_int.md) **font_separator_size** <div id="class_popupmenu_theme_font_size_font_separator_size"></div>

Font size of the labeled separator.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_popupmenu_theme_font_size_font_size"></div>

[`int`](class_int.md) **font_size** <div id="class_popupmenu_theme_font_size_font_size"></div>

Font size of the menu items.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_popupmenu_theme_icon_checked"></div>

[`Texture2D`](class_texture2d.md) **checked** <div id="class_popupmenu_theme_icon_checked"></div>

[`Texture2D`](class_texture2d.md) icon for the checked checkbox items.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_popupmenu_theme_icon_checked_disabled"></div>

[`Texture2D`](class_texture2d.md) **checked_disabled** <div id="class_popupmenu_theme_icon_checked_disabled"></div>

[`Texture2D`](class_texture2d.md) icon for the checked checkbox items when they are disabled.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_popupmenu_theme_icon_radio_checked"></div>

[`Texture2D`](class_texture2d.md) **radio_checked** <div id="class_popupmenu_theme_icon_radio_checked"></div>

[`Texture2D`](class_texture2d.md) icon for the checked radio button items.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_popupmenu_theme_icon_radio_checked_disabled"></div>

[`Texture2D`](class_texture2d.md) **radio_checked_disabled** <div id="class_popupmenu_theme_icon_radio_checked_disabled"></div>

[`Texture2D`](class_texture2d.md) icon for the checked radio button items when they are disabled.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_popupmenu_theme_icon_radio_unchecked"></div>

[`Texture2D`](class_texture2d.md) **radio_unchecked** <div id="class_popupmenu_theme_icon_radio_unchecked"></div>

[`Texture2D`](class_texture2d.md) icon for the unchecked radio button items.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_popupmenu_theme_icon_radio_unchecked_disabled"></div>

[`Texture2D`](class_texture2d.md) **radio_unchecked_disabled** <div id="class_popupmenu_theme_icon_radio_unchecked_disabled"></div>

[`Texture2D`](class_texture2d.md) icon for the unchecked radio button items when they are disabled.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_popupmenu_theme_icon_submenu"></div>

[`Texture2D`](class_texture2d.md) **submenu** <div id="class_popupmenu_theme_icon_submenu"></div>

[`Texture2D`](class_texture2d.md) icon for the submenu arrow (for left-to-right layouts).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_popupmenu_theme_icon_submenu_mirrored"></div>

[`Texture2D`](class_texture2d.md) **submenu_mirrored** <div id="class_popupmenu_theme_icon_submenu_mirrored"></div>

[`Texture2D`](class_texture2d.md) icon for the submenu arrow (for right-to-left layouts).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_popupmenu_theme_icon_unchecked"></div>

[`Texture2D`](class_texture2d.md) **unchecked** <div id="class_popupmenu_theme_icon_unchecked"></div>

[`Texture2D`](class_texture2d.md) icon for the unchecked checkbox items.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_popupmenu_theme_icon_unchecked_disabled"></div>

[`Texture2D`](class_texture2d.md) **unchecked_disabled** <div id="class_popupmenu_theme_icon_unchecked_disabled"></div>

[`Texture2D`](class_texture2d.md) icon for the unchecked checkbox items when they are disabled.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_popupmenu_theme_style_hover"></div>

[`StyleBox`](class_stylebox.md) **hover** <div id="class_popupmenu_theme_style_hover"></div>

[`StyleBox`](class_stylebox.md) displayed when the **PopupMenu** item is hovered.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_popupmenu_theme_style_labeled_separator_left"></div>

[`StyleBox`](class_stylebox.md) **labeled_separator_left** <div id="class_popupmenu_theme_style_labeled_separator_left"></div>

[`StyleBox`](class_stylebox.md) for the left side of labeled separator. See [`add_separator`](class_popupmenu.md#class_popupmenu_method_add_separator).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_popupmenu_theme_style_labeled_separator_right"></div>

[`StyleBox`](class_stylebox.md) **labeled_separator_right** <div id="class_popupmenu_theme_style_labeled_separator_right"></div>

[`StyleBox`](class_stylebox.md) for the right side of labeled separator. See [`add_separator`](class_popupmenu.md#class_popupmenu_method_add_separator).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_popupmenu_theme_style_panel"></div>

[`StyleBox`](class_stylebox.md) **panel** <div id="class_popupmenu_theme_style_panel"></div>

[`StyleBox`](class_stylebox.md) for the background panel.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_popupmenu_theme_style_separator"></div>

[`StyleBox`](class_stylebox.md) **separator** <div id="class_popupmenu_theme_style_separator"></div>

[`StyleBox`](class_stylebox.md) used for the separators. See [`add_separator`](class_popupmenu.md#class_popupmenu_method_add_separator).

[^virtual]: 本方法通常需要用户覆盖才能生效。
[^const]: 本方法无副作用，不会修改该实例的任何成员变量。
[^vararg]: 本方法除了能接受在此处描述的参数外，还能够继续接受任意数量的参数。
[^constructor]: 本方法用于构造某个类型。
[^static]: 调用本方法无需实例，可直接使用类名进行调用。
[^operator]: 本方法描述的是使用本类型作为左操作数的有效运算符。
[^bitfield]: 这个值是由下列位标志构成位掩码的整数。
[^void]: 无返回值。
