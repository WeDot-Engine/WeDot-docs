<!-- ⚠ 请勿编辑本文件 ⚠ -->
<!-- 本文档使用脚本从 WeDot 引擎源码仓库生成。 -->
<!-- 生成脚本：https://github.com/WeDot-Engine/WeDot/tree/4.3/doc/tools/make_md.py； -->
<!-- 原文件：https://github.com/WeDot-Engine/WeDot/tree/4.3/doc/classes/DisplayServer.xml。 -->

<div id="_class_displayserver"></div>

# DisplayServer

**继承：** [`Object`](class_object.md)

A server interface for low-level window management.

## 描述

**DisplayServer** handles everything related to window management. It is separated from [`OS`](class_os.md) as a single operating system may support multiple display servers.

 **Headless mode:** Starting the engine with the `--headless` [*command line argument*](../tutorials/editor/command_line_tutorial) disables all rendering and window management functions. Most functions from **DisplayServer** will return dummy values in this case.

## 方法

| [`String`](class_string.md)                                 | [`clipboard_get`](#class_displayserver_method_clipboard_get) ( ) const[^const]                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| [`Image`](class_image.md)                                   | [`clipboard_get_image`](#class_displayserver_method_clipboard_get_image) ( ) const[^const]                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| [`String`](class_string.md)                                 | [`clipboard_get_primary`](#class_displayserver_method_clipboard_get_primary) ( ) const[^const]                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| [`bool`](class_bool.md)                                     | [`clipboard_has`](#class_displayserver_method_clipboard_has) ( ) const[^const]                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| [`bool`](class_bool.md)                                     | [`clipboard_has_image`](#class_displayserver_method_clipboard_has_image) ( ) const[^const]                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| `void`                                                      | [`clipboard_set`](#class_displayserver_method_clipboard_set) ( clipboard: [`String`](class_string.md) )                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| `void`                                                      | [`clipboard_set_primary`](#class_displayserver_method_clipboard_set_primary) ( clipboard_primary: [`String`](class_string.md) )                                                                                                                                                                                                                                                                                                                                                                                                              |
| [`int`](class_int.md)                                       | [`create_status_indicator`](#class_displayserver_method_create_status_indicator) ( icon: [`Texture2D`](class_texture2d.md), tooltip: [`String`](class_string.md), callback: [`Callable`](class_callable.md) )                                                                                                                                                                                                                                                                                                                                |
| [CursorShape](#enum_displayserver_cursorshape)              | [`cursor_get_shape`](#class_displayserver_method_cursor_get_shape) ( ) const[^const]                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| `void`                                                      | [`cursor_set_custom_image`](#class_displayserver_method_cursor_set_custom_image) ( cursor: [`Resource`](class_resource.md), shape: [CursorShape](#enum_displayserver_cursorshape) = 0, hotspot: [`Vector2`](class_vector2.md) = Vector2(0, 0) )                                                                                                                                                                                                                                                                                              |
| `void`                                                      | [`cursor_set_shape`](#class_displayserver_method_cursor_set_shape) ( shape: [CursorShape](#enum_displayserver_cursorshape) )                                                                                                                                                                                                                                                                                                                                                                                                                 |
| `void`                                                      | [`delete_status_indicator`](#class_displayserver_method_delete_status_indicator) ( id: [`int`](class_int.md) )                                                                                                                                                                                                                                                                                                                                                                                                                               |
| [Error](#enum_@globalscope_error)                           | [`dialog_input_text`](#class_displayserver_method_dialog_input_text) ( title: [`String`](class_string.md), description: [`String`](class_string.md), existing_text: [`String`](class_string.md), callback: [`Callable`](class_callable.md) )                                                                                                                                                                                                                                                                                                 |
| [Error](#enum_@globalscope_error)                           | [`dialog_show`](#class_displayserver_method_dialog_show) ( title: [`String`](class_string.md), description: [`String`](class_string.md), buttons: [`PackedStringArray`](class_packedstringarray.md), callback: [`Callable`](class_callable.md) )                                                                                                                                                                                                                                                                                             |
| `void`                                                      | [`enable_for_stealing_focus`](#class_displayserver_method_enable_for_stealing_focus) ( process_id: [`int`](class_int.md) )                                                                                                                                                                                                                                                                                                                                                                                                                   |
| [Error](#enum_@globalscope_error)                           | [`file_dialog_show`](#class_displayserver_method_file_dialog_show) ( title: [`String`](class_string.md), current_directory: [`String`](class_string.md), filename: [`String`](class_string.md), show_hidden: [`bool`](class_bool.md), mode: [FileDialogMode](#enum_displayserver_filedialogmode), filters: [`PackedStringArray`](class_packedstringarray.md), callback: [`Callable`](class_callable.md) )                                                                                                                                    |
| [Error](#enum_@globalscope_error)                           | [`file_dialog_with_options_show`](#class_displayserver_method_file_dialog_with_options_show) ( title: [`String`](class_string.md), current_directory: [`String`](class_string.md), root: [`String`](class_string.md), filename: [`String`](class_string.md), show_hidden: [`bool`](class_bool.md), mode: [FileDialogMode](#enum_displayserver_filedialogmode), filters: [`PackedStringArray`](class_packedstringarray.md), options: [Array](class_array.md) [`Dictionary`](class_dictionary.md), callback: [`Callable`](class_callable.md) ) |
| `void`                                                      | [`force_process_and_drop_events`](#class_displayserver_method_force_process_and_drop_events) ( )                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| [`Color`](class_color.md)                                   | [`get_accent_color`](#class_displayserver_method_get_accent_color) ( ) const[^const]                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| [`Color`](class_color.md)                                   | [`get_base_color`](#class_displayserver_method_get_base_color) ( ) const[^const]                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| [Array](class_array.md) [`Rect2`](class_rect2.md)           | [`get_display_cutouts`](#class_displayserver_method_get_display_cutouts) ( ) const[^const]                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| [`Rect2i`](class_rect2i.md)                                 | [`get_display_safe_area`](#class_displayserver_method_get_display_safe_area) ( ) const[^const]                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| [`int`](class_int.md)                                       | [`get_keyboard_focus_screen`](#class_displayserver_method_get_keyboard_focus_screen) ( ) const[^const]                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| [`String`](class_string.md)                                 | [`get_name`](#class_displayserver_method_get_name) ( ) const[^const]                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| [`int`](class_int.md)                                       | [`get_primary_screen`](#class_displayserver_method_get_primary_screen) ( ) const[^const]                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| [`int`](class_int.md)                                       | [`get_screen_count`](#class_displayserver_method_get_screen_count) ( ) const[^const]                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| [`int`](class_int.md)                                       | [`get_screen_from_rect`](#class_displayserver_method_get_screen_from_rect) ( rect: [`Rect2`](class_rect2.md) ) const[^const]                                                                                                                                                                                                                                                                                                                                                                                                                 |
| [`bool`](class_bool.md)                                     | [`get_swap_cancel_ok`](#class_displayserver_method_get_swap_cancel_ok) ( )                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| [`int`](class_int.md)                                       | [`get_window_at_screen_position`](#class_displayserver_method_get_window_at_screen_position) ( position: [`Vector2i`](class_vector2i.md) ) const[^const]                                                                                                                                                                                                                                                                                                                                                                                     |
| [`PackedInt32Array`](class_packedint32array.md)             | [`get_window_list`](#class_displayserver_method_get_window_list) ( ) const[^const]                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| [`int`](class_int.md)                                       | [`global_menu_add_check_item`](#class_displayserver_method_global_menu_add_check_item) ( menu_root: [`String`](class_string.md), label: [`String`](class_string.md), callback: [`Callable`](class_callable.md) = Callable(), key_callback: [`Callable`](class_callable.md) = Callable(), tag: [`Variant`](class_variant.md) = null, accelerator: [Key](#enum_@globalscope_key) = 0, index: [`int`](class_int.md) = -1 )                                                                                                                      |
| [`int`](class_int.md)                                       | [`global_menu_add_icon_check_item`](#class_displayserver_method_global_menu_add_icon_check_item) ( menu_root: [`String`](class_string.md), icon: [`Texture2D`](class_texture2d.md), label: [`String`](class_string.md), callback: [`Callable`](class_callable.md) = Callable(), key_callback: [`Callable`](class_callable.md) = Callable(), tag: [`Variant`](class_variant.md) = null, accelerator: [Key](#enum_@globalscope_key) = 0, index: [`int`](class_int.md) = -1 )                                                                   |
| [`int`](class_int.md)                                       | [`global_menu_add_icon_item`](#class_displayserver_method_global_menu_add_icon_item) ( menu_root: [`String`](class_string.md), icon: [`Texture2D`](class_texture2d.md), label: [`String`](class_string.md), callback: [`Callable`](class_callable.md) = Callable(), key_callback: [`Callable`](class_callable.md) = Callable(), tag: [`Variant`](class_variant.md) = null, accelerator: [Key](#enum_@globalscope_key) = 0, index: [`int`](class_int.md) = -1 )                                                                               |
| [`int`](class_int.md)                                       | [`global_menu_add_icon_radio_check_item`](#class_displayserver_method_global_menu_add_icon_radio_check_item) ( menu_root: [`String`](class_string.md), icon: [`Texture2D`](class_texture2d.md), label: [`String`](class_string.md), callback: [`Callable`](class_callable.md) = Callable(), key_callback: [`Callable`](class_callable.md) = Callable(), tag: [`Variant`](class_variant.md) = null, accelerator: [Key](#enum_@globalscope_key) = 0, index: [`int`](class_int.md) = -1 )                                                       |
| [`int`](class_int.md)                                       | [`global_menu_add_item`](#class_displayserver_method_global_menu_add_item) ( menu_root: [`String`](class_string.md), label: [`String`](class_string.md), callback: [`Callable`](class_callable.md) = Callable(), key_callback: [`Callable`](class_callable.md) = Callable(), tag: [`Variant`](class_variant.md) = null, accelerator: [Key](#enum_@globalscope_key) = 0, index: [`int`](class_int.md) = -1 )                                                                                                                                  |
| [`int`](class_int.md)                                       | [`global_menu_add_multistate_item`](#class_displayserver_method_global_menu_add_multistate_item) ( menu_root: [`String`](class_string.md), label: [`String`](class_string.md), max_states: [`int`](class_int.md), default_state: [`int`](class_int.md), callback: [`Callable`](class_callable.md) = Callable(), key_callback: [`Callable`](class_callable.md) = Callable(), tag: [`Variant`](class_variant.md) = null, accelerator: [Key](#enum_@globalscope_key) = 0, index: [`int`](class_int.md) = -1 )                                   |
| [`int`](class_int.md)                                       | [`global_menu_add_radio_check_item`](#class_displayserver_method_global_menu_add_radio_check_item) ( menu_root: [`String`](class_string.md), label: [`String`](class_string.md), callback: [`Callable`](class_callable.md) = Callable(), key_callback: [`Callable`](class_callable.md) = Callable(), tag: [`Variant`](class_variant.md) = null, accelerator: [Key](#enum_@globalscope_key) = 0, index: [`int`](class_int.md) = -1 )                                                                                                          |
| [`int`](class_int.md)                                       | [`global_menu_add_separator`](#class_displayserver_method_global_menu_add_separator) ( menu_root: [`String`](class_string.md), index: [`int`](class_int.md) = -1 )                                                                                                                                                                                                                                                                                                                                                                           |
| [`int`](class_int.md)                                       | [`global_menu_add_submenu_item`](#class_displayserver_method_global_menu_add_submenu_item) ( menu_root: [`String`](class_string.md), label: [`String`](class_string.md), submenu: [`String`](class_string.md), index: [`int`](class_int.md) = -1 )                                                                                                                                                                                                                                                                                           |
| `void`                                                      | [`global_menu_clear`](#class_displayserver_method_global_menu_clear) ( menu_root: [`String`](class_string.md) )                                                                                                                                                                                                                                                                                                                                                                                                                              |
| [Key](#enum_@globalscope_key)                               | [`global_menu_get_item_accelerator`](#class_displayserver_method_global_menu_get_item_accelerator) ( menu_root: [`String`](class_string.md), idx: [`int`](class_int.md) ) const[^const]                                                                                                                                                                                                                                                                                                                                                      |
| [`Callable`](class_callable.md)                             | [`global_menu_get_item_callback`](#class_displayserver_method_global_menu_get_item_callback) ( menu_root: [`String`](class_string.md), idx: [`int`](class_int.md) ) const[^const]                                                                                                                                                                                                                                                                                                                                                            |
| [`int`](class_int.md)                                       | [`global_menu_get_item_count`](#class_displayserver_method_global_menu_get_item_count) ( menu_root: [`String`](class_string.md) ) const[^const]                                                                                                                                                                                                                                                                                                                                                                                              |
| [`Texture2D`](class_texture2d.md)                           | [`global_menu_get_item_icon`](#class_displayserver_method_global_menu_get_item_icon) ( menu_root: [`String`](class_string.md), idx: [`int`](class_int.md) ) const[^const]                                                                                                                                                                                                                                                                                                                                                                    |
| [`int`](class_int.md)                                       | [`global_menu_get_item_indentation_level`](#class_displayserver_method_global_menu_get_item_indentation_level) ( menu_root: [`String`](class_string.md), idx: [`int`](class_int.md) ) const[^const]                                                                                                                                                                                                                                                                                                                                          |
| [`int`](class_int.md)                                       | [`global_menu_get_item_index_from_tag`](#class_displayserver_method_global_menu_get_item_index_from_tag) ( menu_root: [`String`](class_string.md), tag: [`Variant`](class_variant.md) ) const[^const]                                                                                                                                                                                                                                                                                                                                        |
| [`int`](class_int.md)                                       | [`global_menu_get_item_index_from_text`](#class_displayserver_method_global_menu_get_item_index_from_text) ( menu_root: [`String`](class_string.md), text: [`String`](class_string.md) ) const[^const]                                                                                                                                                                                                                                                                                                                                       |
| [`Callable`](class_callable.md)                             | [`global_menu_get_item_key_callback`](#class_displayserver_method_global_menu_get_item_key_callback) ( menu_root: [`String`](class_string.md), idx: [`int`](class_int.md) ) const[^const]                                                                                                                                                                                                                                                                                                                                                    |
| [`int`](class_int.md)                                       | [`global_menu_get_item_max_states`](#class_displayserver_method_global_menu_get_item_max_states) ( menu_root: [`String`](class_string.md), idx: [`int`](class_int.md) ) const[^const]                                                                                                                                                                                                                                                                                                                                                        |
| [`int`](class_int.md)                                       | [`global_menu_get_item_state`](#class_displayserver_method_global_menu_get_item_state) ( menu_root: [`String`](class_string.md), idx: [`int`](class_int.md) ) const[^const]                                                                                                                                                                                                                                                                                                                                                                  |
| [`String`](class_string.md)                                 | [`global_menu_get_item_submenu`](#class_displayserver_method_global_menu_get_item_submenu) ( menu_root: [`String`](class_string.md), idx: [`int`](class_int.md) ) const[^const]                                                                                                                                                                                                                                                                                                                                                              |
| [`Variant`](class_variant.md)                               | [`global_menu_get_item_tag`](#class_displayserver_method_global_menu_get_item_tag) ( menu_root: [`String`](class_string.md), idx: [`int`](class_int.md) ) const[^const]                                                                                                                                                                                                                                                                                                                                                                      |
| [`String`](class_string.md)                                 | [`global_menu_get_item_text`](#class_displayserver_method_global_menu_get_item_text) ( menu_root: [`String`](class_string.md), idx: [`int`](class_int.md) ) const[^const]                                                                                                                                                                                                                                                                                                                                                                    |
| [`String`](class_string.md)                                 | [`global_menu_get_item_tooltip`](#class_displayserver_method_global_menu_get_item_tooltip) ( menu_root: [`String`](class_string.md), idx: [`int`](class_int.md) ) const[^const]                                                                                                                                                                                                                                                                                                                                                              |
| [`Dictionary`](class_dictionary.md)                         | [`global_menu_get_system_menu_roots`](#class_displayserver_method_global_menu_get_system_menu_roots) ( ) const[^const]                                                                                                                                                                                                                                                                                                                                                                                                                       |
| [`bool`](class_bool.md)                                     | [`global_menu_is_item_checkable`](#class_displayserver_method_global_menu_is_item_checkable) ( menu_root: [`String`](class_string.md), idx: [`int`](class_int.md) ) const[^const]                                                                                                                                                                                                                                                                                                                                                            |
| [`bool`](class_bool.md)                                     | [`global_menu_is_item_checked`](#class_displayserver_method_global_menu_is_item_checked) ( menu_root: [`String`](class_string.md), idx: [`int`](class_int.md) ) const[^const]                                                                                                                                                                                                                                                                                                                                                                |
| [`bool`](class_bool.md)                                     | [`global_menu_is_item_disabled`](#class_displayserver_method_global_menu_is_item_disabled) ( menu_root: [`String`](class_string.md), idx: [`int`](class_int.md) ) const[^const]                                                                                                                                                                                                                                                                                                                                                              |
| [`bool`](class_bool.md)                                     | [`global_menu_is_item_hidden`](#class_displayserver_method_global_menu_is_item_hidden) ( menu_root: [`String`](class_string.md), idx: [`int`](class_int.md) ) const[^const]                                                                                                                                                                                                                                                                                                                                                                  |
| [`bool`](class_bool.md)                                     | [`global_menu_is_item_radio_checkable`](#class_displayserver_method_global_menu_is_item_radio_checkable) ( menu_root: [`String`](class_string.md), idx: [`int`](class_int.md) ) const[^const]                                                                                                                                                                                                                                                                                                                                                |
| `void`                                                      | [`global_menu_remove_item`](#class_displayserver_method_global_menu_remove_item) ( menu_root: [`String`](class_string.md), idx: [`int`](class_int.md) )                                                                                                                                                                                                                                                                                                                                                                                      |
| `void`                                                      | [`global_menu_set_item_accelerator`](#class_displayserver_method_global_menu_set_item_accelerator) ( menu_root: [`String`](class_string.md), idx: [`int`](class_int.md), keycode: [Key](#enum_@globalscope_key) )                                                                                                                                                                                                                                                                                                                            |
| `void`                                                      | [`global_menu_set_item_callback`](#class_displayserver_method_global_menu_set_item_callback) ( menu_root: [`String`](class_string.md), idx: [`int`](class_int.md), callback: [`Callable`](class_callable.md) )                                                                                                                                                                                                                                                                                                                               |
| `void`                                                      | [`global_menu_set_item_checkable`](#class_displayserver_method_global_menu_set_item_checkable) ( menu_root: [`String`](class_string.md), idx: [`int`](class_int.md), checkable: [`bool`](class_bool.md) )                                                                                                                                                                                                                                                                                                                                    |
| `void`                                                      | [`global_menu_set_item_checked`](#class_displayserver_method_global_menu_set_item_checked) ( menu_root: [`String`](class_string.md), idx: [`int`](class_int.md), checked: [`bool`](class_bool.md) )                                                                                                                                                                                                                                                                                                                                          |
| `void`                                                      | [`global_menu_set_item_disabled`](#class_displayserver_method_global_menu_set_item_disabled) ( menu_root: [`String`](class_string.md), idx: [`int`](class_int.md), disabled: [`bool`](class_bool.md) )                                                                                                                                                                                                                                                                                                                                       |
| `void`                                                      | [`global_menu_set_item_hidden`](#class_displayserver_method_global_menu_set_item_hidden) ( menu_root: [`String`](class_string.md), idx: [`int`](class_int.md), hidden: [`bool`](class_bool.md) )                                                                                                                                                                                                                                                                                                                                             |
| `void`                                                      | [`global_menu_set_item_hover_callbacks`](#class_displayserver_method_global_menu_set_item_hover_callbacks) ( menu_root: [`String`](class_string.md), idx: [`int`](class_int.md), callback: [`Callable`](class_callable.md) )                                                                                                                                                                                                                                                                                                                 |
| `void`                                                      | [`global_menu_set_item_icon`](#class_displayserver_method_global_menu_set_item_icon) ( menu_root: [`String`](class_string.md), idx: [`int`](class_int.md), icon: [`Texture2D`](class_texture2d.md) )                                                                                                                                                                                                                                                                                                                                         |
| `void`                                                      | [`global_menu_set_item_indentation_level`](#class_displayserver_method_global_menu_set_item_indentation_level) ( menu_root: [`String`](class_string.md), idx: [`int`](class_int.md), level: [`int`](class_int.md) )                                                                                                                                                                                                                                                                                                                          |
| `void`                                                      | [`global_menu_set_item_key_callback`](#class_displayserver_method_global_menu_set_item_key_callback) ( menu_root: [`String`](class_string.md), idx: [`int`](class_int.md), key_callback: [`Callable`](class_callable.md) )                                                                                                                                                                                                                                                                                                                   |
| `void`                                                      | [`global_menu_set_item_max_states`](#class_displayserver_method_global_menu_set_item_max_states) ( menu_root: [`String`](class_string.md), idx: [`int`](class_int.md), max_states: [`int`](class_int.md) )                                                                                                                                                                                                                                                                                                                                   |
| `void`                                                      | [`global_menu_set_item_radio_checkable`](#class_displayserver_method_global_menu_set_item_radio_checkable) ( menu_root: [`String`](class_string.md), idx: [`int`](class_int.md), checkable: [`bool`](class_bool.md) )                                                                                                                                                                                                                                                                                                                        |
| `void`                                                      | [`global_menu_set_item_state`](#class_displayserver_method_global_menu_set_item_state) ( menu_root: [`String`](class_string.md), idx: [`int`](class_int.md), state: [`int`](class_int.md) )                                                                                                                                                                                                                                                                                                                                                  |
| `void`                                                      | [`global_menu_set_item_submenu`](#class_displayserver_method_global_menu_set_item_submenu) ( menu_root: [`String`](class_string.md), idx: [`int`](class_int.md), submenu: [`String`](class_string.md) )                                                                                                                                                                                                                                                                                                                                      |
| `void`                                                      | [`global_menu_set_item_tag`](#class_displayserver_method_global_menu_set_item_tag) ( menu_root: [`String`](class_string.md), idx: [`int`](class_int.md), tag: [`Variant`](class_variant.md) )                                                                                                                                                                                                                                                                                                                                                |
| `void`                                                      | [`global_menu_set_item_text`](#class_displayserver_method_global_menu_set_item_text) ( menu_root: [`String`](class_string.md), idx: [`int`](class_int.md), text: [`String`](class_string.md) )                                                                                                                                                                                                                                                                                                                                               |
| `void`                                                      | [`global_menu_set_item_tooltip`](#class_displayserver_method_global_menu_set_item_tooltip) ( menu_root: [`String`](class_string.md), idx: [`int`](class_int.md), tooltip: [`String`](class_string.md) )                                                                                                                                                                                                                                                                                                                                      |
| `void`                                                      | [`global_menu_set_popup_callbacks`](#class_displayserver_method_global_menu_set_popup_callbacks) ( menu_root: [`String`](class_string.md), open_callback: [`Callable`](class_callable.md), close_callback: [`Callable`](class_callable.md) )                                                                                                                                                                                                                                                                                                 |
| [`bool`](class_bool.md)                                     | [`has_additional_outputs`](#class_displayserver_method_has_additional_outputs) ( ) const[^const]                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| [`bool`](class_bool.md)                                     | [`has_feature`](#class_displayserver_method_has_feature) ( feature: [Feature](#enum_displayserver_feature) ) const[^const]                                                                                                                                                                                                                                                                                                                                                                                                                   |
| `void`                                                      | [`help_set_search_callbacks`](#class_displayserver_method_help_set_search_callbacks) ( search_callback: [`Callable`](class_callable.md), action_callback: [`Callable`](class_callable.md) )                                                                                                                                                                                                                                                                                                                                                  |
| [`Vector2i`](class_vector2i.md)                             | [`ime_get_selection`](#class_displayserver_method_ime_get_selection) ( ) const[^const]                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| [`String`](class_string.md)                                 | [`ime_get_text`](#class_displayserver_method_ime_get_text) ( ) const[^const]                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| [`bool`](class_bool.md)                                     | [`is_dark_mode`](#class_displayserver_method_is_dark_mode) ( ) const[^const]                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| [`bool`](class_bool.md)                                     | [`is_dark_mode_supported`](#class_displayserver_method_is_dark_mode_supported) ( ) const[^const]                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| [`bool`](class_bool.md)                                     | [`is_touchscreen_available`](#class_displayserver_method_is_touchscreen_available) ( ) const[^const]                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| [`bool`](class_bool.md)                                     | [`is_window_transparency_available`](#class_displayserver_method_is_window_transparency_available) ( ) const[^const]                                                                                                                                                                                                                                                                                                                                                                                                                         |
| [`int`](class_int.md)                                       | [`keyboard_get_current_layout`](#class_displayserver_method_keyboard_get_current_layout) ( ) const[^const]                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| [Key](#enum_@globalscope_key)                               | [`keyboard_get_keycode_from_physical`](#class_displayserver_method_keyboard_get_keycode_from_physical) ( keycode: [Key](#enum_@globalscope_key) ) const[^const]                                                                                                                                                                                                                                                                                                                                                                              |
| [Key](#enum_@globalscope_key)                               | [`keyboard_get_label_from_physical`](#class_displayserver_method_keyboard_get_label_from_physical) ( keycode: [Key](#enum_@globalscope_key) ) const[^const]                                                                                                                                                                                                                                                                                                                                                                                  |
| [`int`](class_int.md)                                       | [`keyboard_get_layout_count`](#class_displayserver_method_keyboard_get_layout_count) ( ) const[^const]                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| [`String`](class_string.md)                                 | [`keyboard_get_layout_language`](#class_displayserver_method_keyboard_get_layout_language) ( index: [`int`](class_int.md) ) const[^const]                                                                                                                                                                                                                                                                                                                                                                                                    |
| [`String`](class_string.md)                                 | [`keyboard_get_layout_name`](#class_displayserver_method_keyboard_get_layout_name) ( index: [`int`](class_int.md) ) const[^const]                                                                                                                                                                                                                                                                                                                                                                                                            |
| `void`                                                      | [`keyboard_set_current_layout`](#class_displayserver_method_keyboard_set_current_layout) ( index: [`int`](class_int.md) )                                                                                                                                                                                                                                                                                                                                                                                                                    |
| [MouseButtonMask](#enum_@globalscope_mousebuttonmask)       | [`mouse_get_button_state`](#class_displayserver_method_mouse_get_button_state) ( ) const[^const]                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| [MouseMode](#enum_displayserver_mousemode)                  | [`mouse_get_mode`](#class_displayserver_method_mouse_get_mode) ( ) const[^const]                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| [`Vector2i`](class_vector2i.md)                             | [`mouse_get_position`](#class_displayserver_method_mouse_get_position) ( ) const[^const]                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| `void`                                                      | [`mouse_set_mode`](#class_displayserver_method_mouse_set_mode) ( mouse_mode: [MouseMode](#enum_displayserver_mousemode) )                                                                                                                                                                                                                                                                                                                                                                                                                    |
| `void`                                                      | [`process_events`](#class_displayserver_method_process_events) ( )                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| `void`                                                      | [`register_additional_output`](#class_displayserver_method_register_additional_output) ( object: [`Object`](class_object.md) )                                                                                                                                                                                                                                                                                                                                                                                                               |
| [`int`](class_int.md)                                       | [`screen_get_dpi`](#class_displayserver_method_screen_get_dpi) ( screen: [`int`](class_int.md) = -1 ) const[^const]                                                                                                                                                                                                                                                                                                                                                                                                                          |
| [`Image`](class_image.md)                                   | [`screen_get_image`](#class_displayserver_method_screen_get_image) ( screen: [`int`](class_int.md) = -1 ) const[^const]                                                                                                                                                                                                                                                                                                                                                                                                                      |
| [`float`](class_float.md)                                   | [`screen_get_max_scale`](#class_displayserver_method_screen_get_max_scale) ( ) const[^const]                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| [ScreenOrientation](#enum_displayserver_screenorientation)  | [`screen_get_orientation`](#class_displayserver_method_screen_get_orientation) ( screen: [`int`](class_int.md) = -1 ) const[^const]                                                                                                                                                                                                                                                                                                                                                                                                          |
| [`Color`](class_color.md)                                   | [`screen_get_pixel`](#class_displayserver_method_screen_get_pixel) ( position: [`Vector2i`](class_vector2i.md) ) const[^const]                                                                                                                                                                                                                                                                                                                                                                                                               |
| [`Vector2i`](class_vector2i.md)                             | [`screen_get_position`](#class_displayserver_method_screen_get_position) ( screen: [`int`](class_int.md) = -1 ) const[^const]                                                                                                                                                                                                                                                                                                                                                                                                                |
| [`float`](class_float.md)                                   | [`screen_get_refresh_rate`](#class_displayserver_method_screen_get_refresh_rate) ( screen: [`int`](class_int.md) = -1 ) const[^const]                                                                                                                                                                                                                                                                                                                                                                                                        |
| [`float`](class_float.md)                                   | [`screen_get_scale`](#class_displayserver_method_screen_get_scale) ( screen: [`int`](class_int.md) = -1 ) const[^const]                                                                                                                                                                                                                                                                                                                                                                                                                      |
| [`Vector2i`](class_vector2i.md)                             | [`screen_get_size`](#class_displayserver_method_screen_get_size) ( screen: [`int`](class_int.md) = -1 ) const[^const]                                                                                                                                                                                                                                                                                                                                                                                                                        |
| [`Rect2i`](class_rect2i.md)                                 | [`screen_get_usable_rect`](#class_displayserver_method_screen_get_usable_rect) ( screen: [`int`](class_int.md) = -1 ) const[^const]                                                                                                                                                                                                                                                                                                                                                                                                          |
| [`bool`](class_bool.md)                                     | [`screen_is_kept_on`](#class_displayserver_method_screen_is_kept_on) ( ) const[^const]                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| `void`                                                      | [`screen_set_keep_on`](#class_displayserver_method_screen_set_keep_on) ( enable: [`bool`](class_bool.md) )                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| `void`                                                      | [`screen_set_orientation`](#class_displayserver_method_screen_set_orientation) ( orientation: [ScreenOrientation](#enum_displayserver_screenorientation), screen: [`int`](class_int.md) = -1 )                                                                                                                                                                                                                                                                                                                                               |
| `void`                                                      | [`set_icon`](#class_displayserver_method_set_icon) ( image: [`Image`](class_image.md) )                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| `void`                                                      | [`set_native_icon`](#class_displayserver_method_set_native_icon) ( filename: [`String`](class_string.md) )                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| `void`                                                      | [`set_system_theme_change_callback`](#class_displayserver_method_set_system_theme_change_callback) ( callable: [`Callable`](class_callable.md) )                                                                                                                                                                                                                                                                                                                                                                                             |
| [`Rect2`](class_rect2.md)                                   | [`status_indicator_get_rect`](#class_displayserver_method_status_indicator_get_rect) ( id: [`int`](class_int.md) ) const[^const]                                                                                                                                                                                                                                                                                                                                                                                                             |
| `void`                                                      | [`status_indicator_set_callback`](#class_displayserver_method_status_indicator_set_callback) ( id: [`int`](class_int.md), callback: [`Callable`](class_callable.md) )                                                                                                                                                                                                                                                                                                                                                                        |
| `void`                                                      | [`status_indicator_set_icon`](#class_displayserver_method_status_indicator_set_icon) ( id: [`int`](class_int.md), icon: [`Texture2D`](class_texture2d.md) )                                                                                                                                                                                                                                                                                                                                                                                  |
| `void`                                                      | [`status_indicator_set_menu`](#class_displayserver_method_status_indicator_set_menu) ( id: [`int`](class_int.md), menu_rid: [`RID`](class_rid.md) )                                                                                                                                                                                                                                                                                                                                                                                          |
| `void`                                                      | [`status_indicator_set_tooltip`](#class_displayserver_method_status_indicator_set_tooltip) ( id: [`int`](class_int.md), tooltip: [`String`](class_string.md) )                                                                                                                                                                                                                                                                                                                                                                               |
| [`String`](class_string.md)                                 | [`tablet_get_current_driver`](#class_displayserver_method_tablet_get_current_driver) ( ) const[^const]                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| [`int`](class_int.md)                                       | [`tablet_get_driver_count`](#class_displayserver_method_tablet_get_driver_count) ( ) const[^const]                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| [`String`](class_string.md)                                 | [`tablet_get_driver_name`](#class_displayserver_method_tablet_get_driver_name) ( idx: [`int`](class_int.md) ) const[^const]                                                                                                                                                                                                                                                                                                                                                                                                                  |
| `void`                                                      | [`tablet_set_current_driver`](#class_displayserver_method_tablet_set_current_driver) ( name: [`String`](class_string.md) )                                                                                                                                                                                                                                                                                                                                                                                                                   |
| [Array](class_array.md) [`Dictionary`](class_dictionary.md) | [`tts_get_voices`](#class_displayserver_method_tts_get_voices) ( ) const[^const]                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| [`PackedStringArray`](class_packedstringarray.md)           | [`tts_get_voices_for_language`](#class_displayserver_method_tts_get_voices_for_language) ( language: [`String`](class_string.md) ) const[^const]                                                                                                                                                                                                                                                                                                                                                                                             |
| [`bool`](class_bool.md)                                     | [`tts_is_paused`](#class_displayserver_method_tts_is_paused) ( ) const[^const]                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| [`bool`](class_bool.md)                                     | [`tts_is_speaking`](#class_displayserver_method_tts_is_speaking) ( ) const[^const]                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| `void`                                                      | [`tts_pause`](#class_displayserver_method_tts_pause) ( )                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| `void`                                                      | [`tts_resume`](#class_displayserver_method_tts_resume) ( )                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| `void`                                                      | [`tts_set_utterance_callback`](#class_displayserver_method_tts_set_utterance_callback) ( event: [TTSUtteranceEvent](#enum_displayserver_ttsutteranceevent), callable: [`Callable`](class_callable.md) )                                                                                                                                                                                                                                                                                                                                      |
| `void`                                                      | [`tts_speak`](#class_displayserver_method_tts_speak) ( text: [`String`](class_string.md), voice: [`String`](class_string.md), volume: [`int`](class_int.md) = 50, pitch: [`float`](class_float.md) = 1.0, rate: [`float`](class_float.md) = 1.0, utterance_id: [`int`](class_int.md) = 0, interrupt: [`bool`](class_bool.md) = false )                                                                                                                                                                                                       |
| `void`                                                      | [`tts_stop`](#class_displayserver_method_tts_stop) ( )                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| `void`                                                      | [`unregister_additional_output`](#class_displayserver_method_unregister_additional_output) ( object: [`Object`](class_object.md) )                                                                                                                                                                                                                                                                                                                                                                                                           |
| [`int`](class_int.md)                                       | [`virtual_keyboard_get_height`](#class_displayserver_method_virtual_keyboard_get_height) ( ) const[^const]                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| `void`                                                      | [`virtual_keyboard_hide`](#class_displayserver_method_virtual_keyboard_hide) ( )                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| `void`                                                      | [`virtual_keyboard_show`](#class_displayserver_method_virtual_keyboard_show) ( existing_text: [`String`](class_string.md), position: [`Rect2`](class_rect2.md) = Rect2(0, 0, 0, 0), type: [VirtualKeyboardType](#enum_displayserver_virtualkeyboardtype) = 0, max_length: [`int`](class_int.md) = -1, cursor_start: [`int`](class_int.md) = -1, cursor_end: [`int`](class_int.md) = -1 )                                                                                                                                                     |
| `void`                                                      | [`warp_mouse`](#class_displayserver_method_warp_mouse) ( position: [`Vector2i`](class_vector2i.md) )                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| [`bool`](class_bool.md)                                     | [`window_can_draw`](#class_displayserver_method_window_can_draw) ( window_id: [`int`](class_int.md) = 0 ) const[^const]                                                                                                                                                                                                                                                                                                                                                                                                                      |
| [`int`](class_int.md)                                       | [`window_get_active_popup`](#class_displayserver_method_window_get_active_popup) ( ) const[^const]                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| [`int`](class_int.md)                                       | [`window_get_attached_instance_id`](#class_displayserver_method_window_get_attached_instance_id) ( window_id: [`int`](class_int.md) = 0 ) const[^const]                                                                                                                                                                                                                                                                                                                                                                                      |
| [`int`](class_int.md)                                       | [`window_get_current_screen`](#class_displayserver_method_window_get_current_screen) ( window_id: [`int`](class_int.md) = 0 ) const[^const]                                                                                                                                                                                                                                                                                                                                                                                                  |
| [`bool`](class_bool.md)                                     | [`window_get_flag`](#class_displayserver_method_window_get_flag) ( flag: [WindowFlags](#enum_displayserver_windowflags), window_id: [`int`](class_int.md) = 0 ) const[^const]                                                                                                                                                                                                                                                                                                                                                                |
| [`Vector2i`](class_vector2i.md)                             | [`window_get_max_size`](#class_displayserver_method_window_get_max_size) ( window_id: [`int`](class_int.md) = 0 ) const[^const]                                                                                                                                                                                                                                                                                                                                                                                                              |
| [`Vector2i`](class_vector2i.md)                             | [`window_get_min_size`](#class_displayserver_method_window_get_min_size) ( window_id: [`int`](class_int.md) = 0 ) const[^const]                                                                                                                                                                                                                                                                                                                                                                                                              |
| [WindowMode](#enum_displayserver_windowmode)                | [`window_get_mode`](#class_displayserver_method_window_get_mode) ( window_id: [`int`](class_int.md) = 0 ) const[^const]                                                                                                                                                                                                                                                                                                                                                                                                                      |
| [`int`](class_int.md)                                       | [`window_get_native_handle`](#class_displayserver_method_window_get_native_handle) ( handle_type: [HandleType](#enum_displayserver_handletype), window_id: [`int`](class_int.md) = 0 ) const[^const]                                                                                                                                                                                                                                                                                                                                         |
| [`Rect2i`](class_rect2i.md)                                 | [`window_get_popup_safe_rect`](#class_displayserver_method_window_get_popup_safe_rect) ( window: [`int`](class_int.md) ) const[^const]                                                                                                                                                                                                                                                                                                                                                                                                       |
| [`Vector2i`](class_vector2i.md)                             | [`window_get_position`](#class_displayserver_method_window_get_position) ( window_id: [`int`](class_int.md) = 0 ) const[^const]                                                                                                                                                                                                                                                                                                                                                                                                              |
| [`Vector2i`](class_vector2i.md)                             | [`window_get_position_with_decorations`](#class_displayserver_method_window_get_position_with_decorations) ( window_id: [`int`](class_int.md) = 0 ) const[^const]                                                                                                                                                                                                                                                                                                                                                                            |
| [`Vector3i`](class_vector3i.md)                             | [`window_get_safe_title_margins`](#class_displayserver_method_window_get_safe_title_margins) ( window_id: [`int`](class_int.md) = 0 ) const[^const]                                                                                                                                                                                                                                                                                                                                                                                          |
| [`Vector2i`](class_vector2i.md)                             | [`window_get_size`](#class_displayserver_method_window_get_size) ( window_id: [`int`](class_int.md) = 0 ) const[^const]                                                                                                                                                                                                                                                                                                                                                                                                                      |
| [`Vector2i`](class_vector2i.md)                             | [`window_get_size_with_decorations`](#class_displayserver_method_window_get_size_with_decorations) ( window_id: [`int`](class_int.md) = 0 ) const[^const]                                                                                                                                                                                                                                                                                                                                                                                    |
| [`Vector2i`](class_vector2i.md)                             | [`window_get_title_size`](#class_displayserver_method_window_get_title_size) ( title: [`String`](class_string.md), window_id: [`int`](class_int.md) = 0 ) const[^const]                                                                                                                                                                                                                                                                                                                                                                      |
| [VSyncMode](#enum_displayserver_vsyncmode)                  | [`window_get_vsync_mode`](#class_displayserver_method_window_get_vsync_mode) ( window_id: [`int`](class_int.md) = 0 ) const[^const]                                                                                                                                                                                                                                                                                                                                                                                                          |
| [`bool`](class_bool.md)                                     | [`window_is_focused`](#class_displayserver_method_window_is_focused) ( window_id: [`int`](class_int.md) = 0 ) const[^const]                                                                                                                                                                                                                                                                                                                                                                                                                  |
| [`bool`](class_bool.md)                                     | [`window_is_maximize_allowed`](#class_displayserver_method_window_is_maximize_allowed) ( window_id: [`int`](class_int.md) = 0 ) const[^const]                                                                                                                                                                                                                                                                                                                                                                                                |
| [`bool`](class_bool.md)                                     | [`window_maximize_on_title_dbl_click`](#class_displayserver_method_window_maximize_on_title_dbl_click) ( ) const[^const]                                                                                                                                                                                                                                                                                                                                                                                                                     |
| [`bool`](class_bool.md)                                     | [`window_minimize_on_title_dbl_click`](#class_displayserver_method_window_minimize_on_title_dbl_click) ( ) const[^const]                                                                                                                                                                                                                                                                                                                                                                                                                     |
| `void`                                                      | [`window_move_to_foreground`](#class_displayserver_method_window_move_to_foreground) ( window_id: [`int`](class_int.md) = 0 )                                                                                                                                                                                                                                                                                                                                                                                                                |
| `void`                                                      | [`window_request_attention`](#class_displayserver_method_window_request_attention) ( window_id: [`int`](class_int.md) = 0 )                                                                                                                                                                                                                                                                                                                                                                                                                  |
| `void`                                                      | [`window_set_current_screen`](#class_displayserver_method_window_set_current_screen) ( screen: [`int`](class_int.md), window_id: [`int`](class_int.md) = 0 )                                                                                                                                                                                                                                                                                                                                                                                 |
| `void`                                                      | [`window_set_drop_files_callback`](#class_displayserver_method_window_set_drop_files_callback) ( callback: [`Callable`](class_callable.md), window_id: [`int`](class_int.md) = 0 )                                                                                                                                                                                                                                                                                                                                                           |
| `void`                                                      | [`window_set_exclusive`](#class_displayserver_method_window_set_exclusive) ( window_id: [`int`](class_int.md), exclusive: [`bool`](class_bool.md) )                                                                                                                                                                                                                                                                                                                                                                                          |
| `void`                                                      | [`window_set_flag`](#class_displayserver_method_window_set_flag) ( flag: [WindowFlags](#enum_displayserver_windowflags), enabled: [`bool`](class_bool.md), window_id: [`int`](class_int.md) = 0 )                                                                                                                                                                                                                                                                                                                                            |
| `void`                                                      | [`window_set_ime_active`](#class_displayserver_method_window_set_ime_active) ( active: [`bool`](class_bool.md), window_id: [`int`](class_int.md) = 0 )                                                                                                                                                                                                                                                                                                                                                                                       |
| `void`                                                      | [`window_set_ime_position`](#class_displayserver_method_window_set_ime_position) ( position: [`Vector2i`](class_vector2i.md), window_id: [`int`](class_int.md) = 0 )                                                                                                                                                                                                                                                                                                                                                                         |
| `void`                                                      | [`window_set_input_event_callback`](#class_displayserver_method_window_set_input_event_callback) ( callback: [`Callable`](class_callable.md), window_id: [`int`](class_int.md) = 0 )                                                                                                                                                                                                                                                                                                                                                         |
| `void`                                                      | [`window_set_input_text_callback`](#class_displayserver_method_window_set_input_text_callback) ( callback: [`Callable`](class_callable.md), window_id: [`int`](class_int.md) = 0 )                                                                                                                                                                                                                                                                                                                                                           |
| `void`                                                      | [`window_set_max_size`](#class_displayserver_method_window_set_max_size) ( max_size: [`Vector2i`](class_vector2i.md), window_id: [`int`](class_int.md) = 0 )                                                                                                                                                                                                                                                                                                                                                                                 |
| `void`                                                      | [`window_set_min_size`](#class_displayserver_method_window_set_min_size) ( min_size: [`Vector2i`](class_vector2i.md), window_id: [`int`](class_int.md) = 0 )                                                                                                                                                                                                                                                                                                                                                                                 |
| `void`                                                      | [`window_set_mode`](#class_displayserver_method_window_set_mode) ( mode: [WindowMode](#enum_displayserver_windowmode), window_id: [`int`](class_int.md) = 0 )                                                                                                                                                                                                                                                                                                                                                                                |
| `void`                                                      | [`window_set_mouse_passthrough`](#class_displayserver_method_window_set_mouse_passthrough) ( region: [`PackedVector2Array`](class_packedvector2array.md), window_id: [`int`](class_int.md) = 0 )                                                                                                                                                                                                                                                                                                                                             |
| `void`                                                      | [`window_set_popup_safe_rect`](#class_displayserver_method_window_set_popup_safe_rect) ( window: [`int`](class_int.md), rect: [`Rect2i`](class_rect2i.md) )                                                                                                                                                                                                                                                                                                                                                                                  |
| `void`                                                      | [`window_set_position`](#class_displayserver_method_window_set_position) ( position: [`Vector2i`](class_vector2i.md), window_id: [`int`](class_int.md) = 0 )                                                                                                                                                                                                                                                                                                                                                                                 |
| `void`                                                      | [`window_set_rect_changed_callback`](#class_displayserver_method_window_set_rect_changed_callback) ( callback: [`Callable`](class_callable.md), window_id: [`int`](class_int.md) = 0 )                                                                                                                                                                                                                                                                                                                                                       |
| `void`                                                      | [`window_set_size`](#class_displayserver_method_window_set_size) ( size: [`Vector2i`](class_vector2i.md), window_id: [`int`](class_int.md) = 0 )                                                                                                                                                                                                                                                                                                                                                                                             |
| `void`                                                      | [`window_set_title`](#class_displayserver_method_window_set_title) ( title: [`String`](class_string.md), window_id: [`int`](class_int.md) = 0 )                                                                                                                                                                                                                                                                                                                                                                                              |
| `void`                                                      | [`window_set_transient`](#class_displayserver_method_window_set_transient) ( window_id: [`int`](class_int.md), parent_window_id: [`int`](class_int.md) )                                                                                                                                                                                                                                                                                                                                                                                     |
| `void`                                                      | [`window_set_vsync_mode`](#class_displayserver_method_window_set_vsync_mode) ( vsync_mode: [VSyncMode](#enum_displayserver_vsyncmode), window_id: [`int`](class_int.md) = 0 )                                                                                                                                                                                                                                                                                                                                                                |
| `void`                                                      | [`window_set_window_buttons_offset`](#class_displayserver_method_window_set_window_buttons_offset) ( offset: [`Vector2i`](class_vector2i.md), window_id: [`int`](class_int.md) = 0 )                                                                                                                                                                                                                                                                                                                                                         |
| `void`                                                      | [`window_set_window_event_callback`](#class_displayserver_method_window_set_window_event_callback) ( callback: [`Callable`](class_callable.md), window_id: [`int`](class_int.md) = 0 )                                                                                                                                                                                                                                                                                                                                                       |

<!-- rst-class:: classref-section-separator -->

---

## 枚举

<div id="_class_enum_displayserver_feature"></div>

enum **Feature**: <div id="enum_displayserver_feature"></div>

<div id="_class_displayserver_constant_feature_global_menu"></div>

[Feature](#enum_displayserver_feature) **FEATURE_GLOBAL_MENU** = ``0``

**已弃用：** Use [`NativeMenu`](class_nativemenu.md) or [`PopupMenu`](class_popupmenu.md) instead.

Display server supports global menu. This allows the application to display its menu items in the operating system's top bar. **macOS**

<div id="_class_displayserver_constant_feature_subwindows"></div>

[Feature](#enum_displayserver_feature) **FEATURE_SUBWINDOWS** = ``1``

Display server supports multiple windows that can be moved outside of the main window. **Windows, macOS, Linux (X11)**

<div id="_class_displayserver_constant_feature_touchscreen"></div>

[Feature](#enum_displayserver_feature) **FEATURE_TOUCHSCREEN** = ``2``

Display server supports touchscreen input. **Windows, Linux (X11), Android, iOS, Web**

<div id="_class_displayserver_constant_feature_mouse"></div>

[Feature](#enum_displayserver_feature) **FEATURE_MOUSE** = ``3``

Display server supports mouse input. **Windows, macOS, Linux (X11/Wayland), Android, Web**

<div id="_class_displayserver_constant_feature_mouse_warp"></div>

[Feature](#enum_displayserver_feature) **FEATURE_MOUSE_WARP** = ``4``

Display server supports warping mouse coordinates to keep the mouse cursor constrained within an area, but looping when one of the edges is reached. **Windows, macOS, Linux (X11/Wayland)**

<div id="_class_displayserver_constant_feature_clipboard"></div>

[Feature](#enum_displayserver_feature) **FEATURE_CLIPBOARD** = ``5``

Display server supports setting and getting clipboard data. See also [`FEATURE_CLIPBOARD_PRIMARY`](#class_displayserver_constant_feature_clipboard_primary). **Windows, macOS, Linux (X11/Wayland), Android, iOS, Web**

<div id="_class_displayserver_constant_feature_virtual_keyboard"></div>

[Feature](#enum_displayserver_feature) **FEATURE_VIRTUAL_KEYBOARD** = ``6``

Display server supports popping up a virtual keyboard when requested to input text without a physical keyboard. **Android, iOS, Web**

<div id="_class_displayserver_constant_feature_cursor_shape"></div>

[Feature](#enum_displayserver_feature) **FEATURE_CURSOR_SHAPE** = ``7``

Display server supports setting the mouse cursor shape to be different from the default. **Windows, macOS, Linux (X11/Wayland), Android, Web**

<div id="_class_displayserver_constant_feature_custom_cursor_shape"></div>

[Feature](#enum_displayserver_feature) **FEATURE_CUSTOM_CURSOR_SHAPE** = ``8``

Display server supports setting the mouse cursor shape to a custom image. **Windows, macOS, Linux (X11/Wayland), Web**

<div id="_class_displayserver_constant_feature_native_dialog"></div>

[Feature](#enum_displayserver_feature) **FEATURE_NATIVE_DIALOG** = ``9``

Display server supports spawning text dialogs using the operating system's native look-and-feel. See [`dialog_show`](#class_displayserver_method_dialog_show). **Windows, macOS**

<div id="_class_displayserver_constant_feature_ime"></div>

[Feature](#enum_displayserver_feature) **FEATURE_IME** = ``10``

Display server supports [*Input Method Editor*](https://en.wikipedia.org/wiki/Input_method), which is commonly used for inputting Chinese/Japanese/Korean text. This is handled by the operating system, rather than by Godot. **Windows, macOS, Linux (X11)**

<div id="_class_displayserver_constant_feature_window_transparency"></div>

[Feature](#enum_displayserver_feature) **FEATURE_WINDOW_TRANSPARENCY** = ``11``

Display server supports windows can use per-pixel transparency to make windows behind them partially or fully visible. **Windows, macOS, Linux (X11/Wayland)**

<div id="_class_displayserver_constant_feature_hidpi"></div>

[Feature](#enum_displayserver_feature) **FEATURE_HIDPI** = ``12``

Display server supports querying the operating system's display scale factor. This allows for *reliable* automatic hiDPI display detection, as opposed to guessing based on the screen resolution and reported display DPI (which can be unreliable due to broken monitor EDID). **Windows, Linux (Wayland), macOS**

<div id="_class_displayserver_constant_feature_icon"></div>

[Feature](#enum_displayserver_feature) **FEATURE_ICON** = ``13``

Display server supports changing the window icon (usually displayed in the top-left corner). **Windows, macOS, Linux (X11)**

<div id="_class_displayserver_constant_feature_native_icon"></div>

[Feature](#enum_displayserver_feature) **FEATURE_NATIVE_ICON** = ``14``

Display server supports changing the window icon (usually displayed in the top-left corner). **Windows, macOS**

<div id="_class_displayserver_constant_feature_orientation"></div>

[Feature](#enum_displayserver_feature) **FEATURE_ORIENTATION** = ``15``

Display server supports changing the screen orientation. **Android, iOS**

<div id="_class_displayserver_constant_feature_swap_buffers"></div>

[Feature](#enum_displayserver_feature) **FEATURE_SWAP_BUFFERS** = ``16``

Display server supports V-Sync status can be changed from the default (which is forced to be enabled platforms not supporting this feature). **Windows, macOS, Linux (X11/Wayland)**

<div id="_class_displayserver_constant_feature_clipboard_primary"></div>

[Feature](#enum_displayserver_feature) **FEATURE_CLIPBOARD_PRIMARY** = ``18``

Display server supports Primary clipboard can be used. This is a different clipboard from [`FEATURE_CLIPBOARD`](#class_displayserver_constant_feature_clipboard). **Linux (X11/Wayland)**

<div id="_class_displayserver_constant_feature_text_to_speech"></div>

[Feature](#enum_displayserver_feature) **FEATURE_TEXT_TO_SPEECH** = ``19``

Display server supports text-to-speech. See `tts_*` methods. **Windows, macOS, Linux (X11/Wayland), Android, iOS, Web**

<div id="_class_displayserver_constant_feature_extend_to_title"></div>

[Feature](#enum_displayserver_feature) **FEATURE_EXTEND_TO_TITLE** = ``20``

Display server supports expanding window content to the title. See [`WINDOW_FLAG_EXTEND_TO_TITLE`](#class_displayserver_constant_window_flag_extend_to_title). **macOS**

<div id="_class_displayserver_constant_feature_screen_capture"></div>

[Feature](#enum_displayserver_feature) **FEATURE_SCREEN_CAPTURE** = ``21``

Display server supports reading screen pixels. See [`screen_get_pixel`](#class_displayserver_method_screen_get_pixel).

<div id="_class_displayserver_constant_feature_status_indicator"></div>

[Feature](#enum_displayserver_feature) **FEATURE_STATUS_INDICATOR** = ``22``

Display server supports application status indicators.

<div id="_class_displayserver_constant_feature_native_help"></div>

[Feature](#enum_displayserver_feature) **FEATURE_NATIVE_HELP** = ``23``

Display server supports native help system search callbacks. See [`help_set_search_callbacks`](#class_displayserver_method_help_set_search_callbacks).

<div id="_class_displayserver_constant_feature_native_dialog_input"></div>

[Feature](#enum_displayserver_feature) **FEATURE_NATIVE_DIALOG_INPUT** = ``24``

Display server supports spawning text input dialogs using the operating system's native look-and-feel. See [`dialog_input_text`](#class_displayserver_method_dialog_input_text). **Windows, macOS**

<div id="_class_displayserver_constant_feature_native_dialog_file"></div>

[Feature](#enum_displayserver_feature) **FEATURE_NATIVE_DIALOG_FILE** = ``25``

Display server supports spawning dialogs for selecting files or directories using the operating system's native look-and-feel. See [`file_dialog_show`](#class_displayserver_method_file_dialog_show) and [`file_dialog_with_options_show`](#class_displayserver_method_file_dialog_with_options_show). **Windows, macOS, Linux (X11/Wayland)**

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_enum_displayserver_mousemode"></div>

enum **MouseMode**: <div id="enum_displayserver_mousemode"></div>

<div id="_class_displayserver_constant_mouse_mode_visible"></div>

[MouseMode](#enum_displayserver_mousemode) **MOUSE_MODE_VISIBLE** = ``0``

Makes the mouse cursor visible if it is hidden.

<div id="_class_displayserver_constant_mouse_mode_hidden"></div>

[MouseMode](#enum_displayserver_mousemode) **MOUSE_MODE_HIDDEN** = ``1``

Makes the mouse cursor hidden if it is visible.

<div id="_class_displayserver_constant_mouse_mode_captured"></div>

[MouseMode](#enum_displayserver_mousemode) **MOUSE_MODE_CAPTURED** = ``2``

Captures the mouse. The mouse will be hidden and its position locked at the center of the window manager's window.

 **Note:** If you want to process the mouse's movement in this mode, you need to use [`InputEventMouseMotion.relative`](#class_inputeventmousemotion_property_relative).

<div id="_class_displayserver_constant_mouse_mode_confined"></div>

[MouseMode](#enum_displayserver_mousemode) **MOUSE_MODE_CONFINED** = ``3``

Confines the mouse cursor to the game window, and make it visible.

<div id="_class_displayserver_constant_mouse_mode_confined_hidden"></div>

[MouseMode](#enum_displayserver_mousemode) **MOUSE_MODE_CONFINED_HIDDEN** = ``4``

Confines the mouse cursor to the game window, and make it hidden.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_enum_displayserver_screenorientation"></div>

enum **ScreenOrientation**: <div id="enum_displayserver_screenorientation"></div>

<div id="_class_displayserver_constant_screen_landscape"></div>

[ScreenOrientation](#enum_displayserver_screenorientation) **SCREEN_LANDSCAPE** = ``0``

Default landscape orientation.

<div id="_class_displayserver_constant_screen_portrait"></div>

[ScreenOrientation](#enum_displayserver_screenorientation) **SCREEN_PORTRAIT** = ``1``

Default portrait orientation.

<div id="_class_displayserver_constant_screen_reverse_landscape"></div>

[ScreenOrientation](#enum_displayserver_screenorientation) **SCREEN_REVERSE_LANDSCAPE** = ``2``

Reverse landscape orientation (upside down).

<div id="_class_displayserver_constant_screen_reverse_portrait"></div>

[ScreenOrientation](#enum_displayserver_screenorientation) **SCREEN_REVERSE_PORTRAIT** = ``3``

Reverse portrait orientation (upside down).

<div id="_class_displayserver_constant_screen_sensor_landscape"></div>

[ScreenOrientation](#enum_displayserver_screenorientation) **SCREEN_SENSOR_LANDSCAPE** = ``4``

Automatic landscape orientation (default or reverse depending on sensor).

<div id="_class_displayserver_constant_screen_sensor_portrait"></div>

[ScreenOrientation](#enum_displayserver_screenorientation) **SCREEN_SENSOR_PORTRAIT** = ``5``

Automatic portrait orientation (default or reverse depending on sensor).

<div id="_class_displayserver_constant_screen_sensor"></div>

[ScreenOrientation](#enum_displayserver_screenorientation) **SCREEN_SENSOR** = ``6``

Automatic landscape or portrait orientation (default or reverse depending on sensor).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_enum_displayserver_virtualkeyboardtype"></div>

enum **VirtualKeyboardType**: <div id="enum_displayserver_virtualkeyboardtype"></div>

<div id="_class_displayserver_constant_keyboard_type_default"></div>

[VirtualKeyboardType](#enum_displayserver_virtualkeyboardtype) **KEYBOARD_TYPE_DEFAULT** = ``0``

Default text virtual keyboard.

<div id="_class_displayserver_constant_keyboard_type_multiline"></div>

[VirtualKeyboardType](#enum_displayserver_virtualkeyboardtype) **KEYBOARD_TYPE_MULTILINE** = ``1``

Multiline virtual keyboard.

<div id="_class_displayserver_constant_keyboard_type_number"></div>

[VirtualKeyboardType](#enum_displayserver_virtualkeyboardtype) **KEYBOARD_TYPE_NUMBER** = ``2``

Virtual number keypad, useful for PIN entry.

<div id="_class_displayserver_constant_keyboard_type_number_decimal"></div>

[VirtualKeyboardType](#enum_displayserver_virtualkeyboardtype) **KEYBOARD_TYPE_NUMBER_DECIMAL** = ``3``

Virtual number keypad, useful for entering fractional numbers.

<div id="_class_displayserver_constant_keyboard_type_phone"></div>

[VirtualKeyboardType](#enum_displayserver_virtualkeyboardtype) **KEYBOARD_TYPE_PHONE** = ``4``

Virtual phone number keypad.

<div id="_class_displayserver_constant_keyboard_type_email_address"></div>

[VirtualKeyboardType](#enum_displayserver_virtualkeyboardtype) **KEYBOARD_TYPE_EMAIL_ADDRESS** = ``5``

Virtual keyboard with additional keys to assist with typing email addresses.

<div id="_class_displayserver_constant_keyboard_type_password"></div>

[VirtualKeyboardType](#enum_displayserver_virtualkeyboardtype) **KEYBOARD_TYPE_PASSWORD** = ``6``

Virtual keyboard for entering a password. On most platforms, this should disable autocomplete and autocapitalization.

 **Note:** This is not supported on Web. Instead, this behaves identically to [`KEYBOARD_TYPE_DEFAULT`](#class_displayserver_constant_keyboard_type_default).

<div id="_class_displayserver_constant_keyboard_type_url"></div>

[VirtualKeyboardType](#enum_displayserver_virtualkeyboardtype) **KEYBOARD_TYPE_URL** = ``7``

Virtual keyboard with additional keys to assist with typing URLs.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_enum_displayserver_cursorshape"></div>

enum **CursorShape**: <div id="enum_displayserver_cursorshape"></div>

<div id="_class_displayserver_constant_cursor_arrow"></div>

[CursorShape](#enum_displayserver_cursorshape) **CURSOR_ARROW** = ``0``

Arrow cursor shape. This is the default when not pointing anything that overrides the mouse cursor, such as a [`LineEdit`](class_lineedit.md) or [`TextEdit`](class_textedit.md).

<div id="_class_displayserver_constant_cursor_ibeam"></div>

[CursorShape](#enum_displayserver_cursorshape) **CURSOR_IBEAM** = ``1``

I-beam cursor shape. This is used by default when hovering a control that accepts text input, such as [`LineEdit`](class_lineedit.md) or [`TextEdit`](class_textedit.md).

<div id="_class_displayserver_constant_cursor_pointing_hand"></div>

[CursorShape](#enum_displayserver_cursorshape) **CURSOR_POINTING_HAND** = ``2``

Pointing hand cursor shape. This is used by default when hovering a [`LinkButton`](class_linkbutton.md) or a URL tag in a [`RichTextLabel`](class_richtextlabel.md).

<div id="_class_displayserver_constant_cursor_cross"></div>

[CursorShape](#enum_displayserver_cursorshape) **CURSOR_CROSS** = ``3``

Crosshair cursor. This is intended to be displayed when the user needs precise aim over an element, such as a rectangle selection tool or a color picker.

<div id="_class_displayserver_constant_cursor_wait"></div>

[CursorShape](#enum_displayserver_cursorshape) **CURSOR_WAIT** = ``4``

Wait cursor. On most cursor themes, this displays a spinning icon *besides* the arrow. Intended to be used for non-blocking operations (when the user can do something else at the moment). See also [`CURSOR_BUSY`](#class_displayserver_constant_cursor_busy).

<div id="_class_displayserver_constant_cursor_busy"></div>

[CursorShape](#enum_displayserver_cursorshape) **CURSOR_BUSY** = ``5``

Wait cursor. On most cursor themes, this *replaces* the arrow with a spinning icon. Intended to be used for blocking operations (when the user can't do anything else at the moment). See also [`CURSOR_WAIT`](#class_displayserver_constant_cursor_wait).

<div id="_class_displayserver_constant_cursor_drag"></div>

[CursorShape](#enum_displayserver_cursorshape) **CURSOR_DRAG** = ``6``

Dragging hand cursor. This is displayed during drag-and-drop operations. See also [`CURSOR_CAN_DROP`](#class_displayserver_constant_cursor_can_drop).

<div id="_class_displayserver_constant_cursor_can_drop"></div>

[CursorShape](#enum_displayserver_cursorshape) **CURSOR_CAN_DROP** = ``7``

"Can drop" cursor. This is displayed during drag-and-drop operations if hovering over a [`Control`](class_control.md) that can accept the drag-and-drop event. On most cursor themes, this displays a dragging hand with an arrow symbol besides it. See also [`CURSOR_DRAG`](#class_displayserver_constant_cursor_drag).

<div id="_class_displayserver_constant_cursor_forbidden"></div>

[CursorShape](#enum_displayserver_cursorshape) **CURSOR_FORBIDDEN** = ``8``

Forbidden cursor. This is displayed during drag-and-drop operations if the hovered [`Control`](class_control.md) can't accept the drag-and-drop event.

<div id="_class_displayserver_constant_cursor_vsize"></div>

[CursorShape](#enum_displayserver_cursorshape) **CURSOR_VSIZE** = ``9``

Vertical resize cursor. Intended to be displayed when the hovered [`Control`](class_control.md) can be vertically resized using the mouse. See also [`CURSOR_VSPLIT`](#class_displayserver_constant_cursor_vsplit).

<div id="_class_displayserver_constant_cursor_hsize"></div>

[CursorShape](#enum_displayserver_cursorshape) **CURSOR_HSIZE** = ``10``

Horizontal resize cursor. Intended to be displayed when the hovered [`Control`](class_control.md) can be horizontally resized using the mouse. See also [`CURSOR_HSPLIT`](#class_displayserver_constant_cursor_hsplit).

<div id="_class_displayserver_constant_cursor_bdiagsize"></div>

[CursorShape](#enum_displayserver_cursorshape) **CURSOR_BDIAGSIZE** = ``11``

Secondary diagonal resize cursor (top-right/bottom-left). Intended to be displayed when the hovered [`Control`](class_control.md) can be resized on both axes at once using the mouse.

<div id="_class_displayserver_constant_cursor_fdiagsize"></div>

[CursorShape](#enum_displayserver_cursorshape) **CURSOR_FDIAGSIZE** = ``12``

Main diagonal resize cursor (top-left/bottom-right). Intended to be displayed when the hovered [`Control`](class_control.md) can be resized on both axes at once using the mouse.

<div id="_class_displayserver_constant_cursor_move"></div>

[CursorShape](#enum_displayserver_cursorshape) **CURSOR_MOVE** = ``13``

Move cursor. Intended to be displayed when the hovered [`Control`](class_control.md) can be moved using the mouse.

<div id="_class_displayserver_constant_cursor_vsplit"></div>

[CursorShape](#enum_displayserver_cursorshape) **CURSOR_VSPLIT** = ``14``

Vertical split cursor. This is displayed when hovering a [`Control`](class_control.md) with splits that can be vertically resized using the mouse, such as [`VSplitContainer`](class_vsplitcontainer.md). On some cursor themes, this cursor may have the same appearance as [`CURSOR_VSIZE`](#class_displayserver_constant_cursor_vsize).

<div id="_class_displayserver_constant_cursor_hsplit"></div>

[CursorShape](#enum_displayserver_cursorshape) **CURSOR_HSPLIT** = ``15``

Horizontal split cursor. This is displayed when hovering a [`Control`](class_control.md) with splits that can be horizontally resized using the mouse, such as [`HSplitContainer`](class_hsplitcontainer.md). On some cursor themes, this cursor may have the same appearance as [`CURSOR_HSIZE`](#class_displayserver_constant_cursor_hsize).

<div id="_class_displayserver_constant_cursor_help"></div>

[CursorShape](#enum_displayserver_cursorshape) **CURSOR_HELP** = ``16``

Help cursor. On most cursor themes, this displays a question mark icon instead of the mouse cursor. Intended to be used when the user has requested help on the next element that will be clicked.

<div id="_class_displayserver_constant_cursor_max"></div>

[CursorShape](#enum_displayserver_cursorshape) **CURSOR_MAX** = ``17``

Represents the size of the [CursorShape](#enum_displayserver_cursorshape) enum.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_enum_displayserver_filedialogmode"></div>

enum **FileDialogMode**: <div id="enum_displayserver_filedialogmode"></div>

<div id="_class_displayserver_constant_file_dialog_mode_open_file"></div>

[FileDialogMode](#enum_displayserver_filedialogmode) **FILE_DIALOG_MODE_OPEN_FILE** = ``0``

The native file dialog allows selecting one, and only one file.

<div id="_class_displayserver_constant_file_dialog_mode_open_files"></div>

[FileDialogMode](#enum_displayserver_filedialogmode) **FILE_DIALOG_MODE_OPEN_FILES** = ``1``

The native file dialog allows selecting multiple files.

<div id="_class_displayserver_constant_file_dialog_mode_open_dir"></div>

[FileDialogMode](#enum_displayserver_filedialogmode) **FILE_DIALOG_MODE_OPEN_DIR** = ``2``

The native file dialog only allows selecting a directory, disallowing the selection of any file.

<div id="_class_displayserver_constant_file_dialog_mode_open_any"></div>

[FileDialogMode](#enum_displayserver_filedialogmode) **FILE_DIALOG_MODE_OPEN_ANY** = ``3``

The native file dialog allows selecting one file or directory.

<div id="_class_displayserver_constant_file_dialog_mode_save_file"></div>

[FileDialogMode](#enum_displayserver_filedialogmode) **FILE_DIALOG_MODE_SAVE_FILE** = ``4``

The native file dialog will warn when a file exists.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_enum_displayserver_windowmode"></div>

enum **WindowMode**: <div id="enum_displayserver_windowmode"></div>

<div id="_class_displayserver_constant_window_mode_windowed"></div>

[WindowMode](#enum_displayserver_windowmode) **WINDOW_MODE_WINDOWED** = ``0``

Windowed mode, i.e. [`Window`](class_window.md) doesn't occupy the whole screen (unless set to the size of the screen).

<div id="_class_displayserver_constant_window_mode_minimized"></div>

[WindowMode](#enum_displayserver_windowmode) **WINDOW_MODE_MINIMIZED** = ``1``

Minimized window mode, i.e. [`Window`](class_window.md) is not visible and available on window manager's window list. Normally happens when the minimize button is pressed.

<div id="_class_displayserver_constant_window_mode_maximized"></div>

[WindowMode](#enum_displayserver_windowmode) **WINDOW_MODE_MAXIMIZED** = ``2``

Maximized window mode, i.e. [`Window`](class_window.md) will occupy whole screen area except task bar and still display its borders. Normally happens when the maximize button is pressed.

<div id="_class_displayserver_constant_window_mode_fullscreen"></div>

[WindowMode](#enum_displayserver_windowmode) **WINDOW_MODE_FULLSCREEN** = ``3``

Full screen mode with full multi-window support.

Full screen window covers the entire display area of a screen and has no decorations. The display's video mode is not changed.

 **On Windows:** Multi-window full-screen mode has a 1px border of the [`ProjectSettings.rendering/environment/defaults/default_clear_color`](#class_projectsettings_property_rendering/environment/defaults/default_clear_color) color.

 **On macOS:** A new desktop is used to display the running project.

 **Note:** Regardless of the platform, enabling full screen will change the window size to match the monitor's size. Therefore, make sure your project supports [*multiple resolutions*](../tutorials/rendering/multiple_resolutions) when enabling full screen mode.

<div id="_class_displayserver_constant_window_mode_exclusive_fullscreen"></div>

[WindowMode](#enum_displayserver_windowmode) **WINDOW_MODE_EXCLUSIVE_FULLSCREEN** = ``4``

A single window full screen mode. This mode has less overhead, but only one window can be open on a given screen at a time (opening a child window or application switching will trigger a full screen transition).

Full screen window covers the entire display area of a screen and has no border or decorations. The display's video mode is not changed.

 **On Windows:** Depending on video driver, full screen transition might cause screens to go black for a moment.

 **On macOS:** A new desktop is used to display the running project. Exclusive full screen mode prevents Dock and Menu from showing up when the mouse pointer is hovering the edge of the screen.

 **On Linux (X11):** Exclusive full screen mode bypasses compositor.

 **Note:** Regardless of the platform, enabling full screen will change the window size to match the monitor's size. Therefore, make sure your project supports [*multiple resolutions*](../tutorials/rendering/multiple_resolutions) when enabling full screen mode.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_enum_displayserver_windowflags"></div>

enum **WindowFlags**: <div id="enum_displayserver_windowflags"></div>

<div id="_class_displayserver_constant_window_flag_resize_disabled"></div>

[WindowFlags](#enum_displayserver_windowflags) **WINDOW_FLAG_RESIZE_DISABLED** = ``0``

The window can't be resized by dragging its resize grip. It's still possible to resize the window using [`window_set_size`](#class_displayserver_method_window_set_size). This flag is ignored for full screen windows.

<div id="_class_displayserver_constant_window_flag_borderless"></div>

[WindowFlags](#enum_displayserver_windowflags) **WINDOW_FLAG_BORDERLESS** = ``1``

The window do not have native title bar and other decorations. This flag is ignored for full-screen windows.

<div id="_class_displayserver_constant_window_flag_always_on_top"></div>

[WindowFlags](#enum_displayserver_windowflags) **WINDOW_FLAG_ALWAYS_ON_TOP** = ``2``

The window is floating on top of all other windows. This flag is ignored for full-screen windows.

<div id="_class_displayserver_constant_window_flag_transparent"></div>

[WindowFlags](#enum_displayserver_windowflags) **WINDOW_FLAG_TRANSPARENT** = ``3``

The window background can be transparent.

 **Note:** This flag has no effect if [`is_window_transparency_available`](#class_displayserver_method_is_window_transparency_available) returns `false`.

 **Note:** Transparency support is implemented on Linux (X11/Wayland), macOS, and Windows, but availability might vary depending on GPU driver, display manager, and compositor capabilities.

<div id="_class_displayserver_constant_window_flag_no_focus"></div>

[WindowFlags](#enum_displayserver_windowflags) **WINDOW_FLAG_NO_FOCUS** = ``4``

The window can't be focused. No-focus window will ignore all input, except mouse clicks.

<div id="_class_displayserver_constant_window_flag_popup"></div>

[WindowFlags](#enum_displayserver_windowflags) **WINDOW_FLAG_POPUP** = ``5``

Window is part of menu or [`OptionButton`](class_optionbutton.md) dropdown. This flag can't be changed when the window is visible. An active popup window will exclusively receive all input, without stealing focus from its parent. Popup windows are automatically closed when uses click outside it, or when an application is switched. Popup window must have transient parent set (see [`window_set_transient`](#class_displayserver_method_window_set_transient)).

<div id="_class_displayserver_constant_window_flag_extend_to_title"></div>

[WindowFlags](#enum_displayserver_windowflags) **WINDOW_FLAG_EXTEND_TO_TITLE** = ``6``

Window content is expanded to the full size of the window. Unlike borderless window, the frame is left intact and can be used to resize the window, title bar is transparent, but have minimize/maximize/close buttons.

Use [`window_set_window_buttons_offset`](#class_displayserver_method_window_set_window_buttons_offset) to adjust minimize/maximize/close buttons offset.

Use [`window_get_safe_title_margins`](#class_displayserver_method_window_get_safe_title_margins) to determine area under the title bar that is not covered by decorations.

 **Note:** This flag is implemented only on macOS.

<div id="_class_displayserver_constant_window_flag_mouse_passthrough"></div>

[WindowFlags](#enum_displayserver_windowflags) **WINDOW_FLAG_MOUSE_PASSTHROUGH** = ``7``

All mouse events are passed to the underlying window of the same application.

<div id="_class_displayserver_constant_window_flag_max"></div>

[WindowFlags](#enum_displayserver_windowflags) **WINDOW_FLAG_MAX** = ``8``

Max value of the [WindowFlags](#enum_displayserver_windowflags).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_enum_displayserver_windowevent"></div>

enum **WindowEvent**: <div id="enum_displayserver_windowevent"></div>

<div id="_class_displayserver_constant_window_event_mouse_enter"></div>

[WindowEvent](#enum_displayserver_windowevent) **WINDOW_EVENT_MOUSE_ENTER** = ``0``

Sent when the mouse pointer enters the window.

<div id="_class_displayserver_constant_window_event_mouse_exit"></div>

[WindowEvent](#enum_displayserver_windowevent) **WINDOW_EVENT_MOUSE_EXIT** = ``1``

Sent when the mouse pointer exits the window.

<div id="_class_displayserver_constant_window_event_focus_in"></div>

[WindowEvent](#enum_displayserver_windowevent) **WINDOW_EVENT_FOCUS_IN** = ``2``

Sent when the window grabs focus.

<div id="_class_displayserver_constant_window_event_focus_out"></div>

[WindowEvent](#enum_displayserver_windowevent) **WINDOW_EVENT_FOCUS_OUT** = ``3``

Sent when the window loses focus.

<div id="_class_displayserver_constant_window_event_close_request"></div>

[WindowEvent](#enum_displayserver_windowevent) **WINDOW_EVENT_CLOSE_REQUEST** = ``4``

Sent when the user has attempted to close the window (e.g. close button is pressed).

<div id="_class_displayserver_constant_window_event_go_back_request"></div>

[WindowEvent](#enum_displayserver_windowevent) **WINDOW_EVENT_GO_BACK_REQUEST** = ``5``

Sent when the device "Back" button is pressed.

 **Note:** This event is implemented only on Android.

<div id="_class_displayserver_constant_window_event_dpi_change"></div>

[WindowEvent](#enum_displayserver_windowevent) **WINDOW_EVENT_DPI_CHANGE** = ``6``

Sent when the window is moved to the display with different DPI, or display DPI is changed.

 **Note:** This flag is implemented only on macOS.

<div id="_class_displayserver_constant_window_event_titlebar_change"></div>

[WindowEvent](#enum_displayserver_windowevent) **WINDOW_EVENT_TITLEBAR_CHANGE** = ``7``

Sent when the window title bar decoration is changed (e.g. [`WINDOW_FLAG_EXTEND_TO_TITLE`](#class_displayserver_constant_window_flag_extend_to_title) is set or window entered/exited full screen mode).

 **Note:** This flag is implemented only on macOS.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_enum_displayserver_vsyncmode"></div>

enum **VSyncMode**: <div id="enum_displayserver_vsyncmode"></div>

<div id="_class_displayserver_constant_vsync_disabled"></div>

[VSyncMode](#enum_displayserver_vsyncmode) **VSYNC_DISABLED** = ``0``

No vertical synchronization, which means the engine will display frames as fast as possible (tearing may be visible). Framerate is unlimited (regardless of [`Engine.max_fps`](#class_engine_property_max_fps)).

<div id="_class_displayserver_constant_vsync_enabled"></div>

[VSyncMode](#enum_displayserver_vsyncmode) **VSYNC_ENABLED** = ``1``

Default vertical synchronization mode, the image is displayed only on vertical blanking intervals (no tearing is visible). Framerate is limited by the monitor refresh rate (regardless of [`Engine.max_fps`](#class_engine_property_max_fps)).

<div id="_class_displayserver_constant_vsync_adaptive"></div>

[VSyncMode](#enum_displayserver_vsyncmode) **VSYNC_ADAPTIVE** = ``2``

Behaves like [`VSYNC_DISABLED`](#class_displayserver_constant_vsync_disabled) when the framerate drops below the screen's refresh rate to reduce stuttering (tearing may be visible). Otherwise, vertical synchronization is enabled to avoid tearing. Framerate is limited by the monitor refresh rate (regardless of [`Engine.max_fps`](#class_engine_property_max_fps)). Behaves like [`VSYNC_ENABLED`](#class_displayserver_constant_vsync_enabled) when using the Compatibility rendering method.

<div id="_class_displayserver_constant_vsync_mailbox"></div>

[VSyncMode](#enum_displayserver_vsyncmode) **VSYNC_MAILBOX** = ``3``

Displays the most recent image in the queue on vertical blanking intervals, while rendering to the other images (no tearing is visible). Framerate is unlimited (regardless of [`Engine.max_fps`](#class_engine_property_max_fps)).

Although not guaranteed, the images can be rendered as fast as possible, which may reduce input lag (also called "Fast" V-Sync mode). [`VSYNC_MAILBOX`](#class_displayserver_constant_vsync_mailbox) works best when at least twice as many frames as the display refresh rate are rendered. Behaves like [`VSYNC_ENABLED`](#class_displayserver_constant_vsync_enabled) when using the Compatibility rendering method.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_enum_displayserver_handletype"></div>

enum **HandleType**: <div id="enum_displayserver_handletype"></div>

<div id="_class_displayserver_constant_display_handle"></div>

[HandleType](#enum_displayserver_handletype) **DISPLAY_HANDLE** = ``0``

Display handle:

- Linux (X11): `X11::Display*` for the display.

- Android: `EGLDisplay` for the display.

<div id="_class_displayserver_constant_window_handle"></div>

[HandleType](#enum_displayserver_handletype) **WINDOW_HANDLE** = ``1``

Window handle:

- Windows: `HWND` for the window.

- Linux (X11): `X11::Window*` for the window.

- macOS: `NSWindow*` for the window.

- iOS: `UIViewController*` for the view controller.

- Android: `jObject` for the activity.

<div id="_class_displayserver_constant_window_view"></div>

[HandleType](#enum_displayserver_handletype) **WINDOW_VIEW** = ``2``

Window view:

- Windows: `HDC` for the window (only with the GL Compatibility renderer).

- macOS: `NSView*` for the window main view.

- iOS: `UIView*` for the window main view.

<div id="_class_displayserver_constant_opengl_context"></div>

[HandleType](#enum_displayserver_handletype) **OPENGL_CONTEXT** = ``3``

OpenGL context (only with the GL Compatibility renderer):

- Windows: `HGLRC` for the window (native GL), or `EGLContext` for the window (ANGLE).

- Linux (X11): `GLXContext*` for the window.

- macOS: `NSOpenGLContext*` for the window (native GL), or `EGLContext` for the window (ANGLE).

- Android: `EGLContext` for the window.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_enum_displayserver_ttsutteranceevent"></div>

enum **TTSUtteranceEvent**: <div id="enum_displayserver_ttsutteranceevent"></div>

<div id="_class_displayserver_constant_tts_utterance_started"></div>

[TTSUtteranceEvent](#enum_displayserver_ttsutteranceevent) **TTS_UTTERANCE_STARTED** = ``0``

Utterance has begun to be spoken.

<div id="_class_displayserver_constant_tts_utterance_ended"></div>

[TTSUtteranceEvent](#enum_displayserver_ttsutteranceevent) **TTS_UTTERANCE_ENDED** = ``1``

Utterance was successfully finished.

<div id="_class_displayserver_constant_tts_utterance_canceled"></div>

[TTSUtteranceEvent](#enum_displayserver_ttsutteranceevent) **TTS_UTTERANCE_CANCELED** = ``2``

Utterance was canceled, or TTS service was unable to process it.

<div id="_class_displayserver_constant_tts_utterance_boundary"></div>

[TTSUtteranceEvent](#enum_displayserver_ttsutteranceevent) **TTS_UTTERANCE_BOUNDARY** = ``3``

Utterance reached a word or sentence boundary.

<!-- rst-class:: classref-section-separator -->

---

## 常量

<div id="_class_displayserver_constant_screen_with_mouse_focus"></div>

**SCREEN_WITH_MOUSE_FOCUS** = ``-4`` <div id="class_displayserver_constant_screen_with_mouse_focus"></div>

Represents the screen containing the mouse pointer.

 **Note:** On Linux (Wayland), this constant always represents the screen at index `0`.

<div id="_class_displayserver_constant_screen_with_keyboard_focus"></div>

**SCREEN_WITH_KEYBOARD_FOCUS** = ``-3`` <div id="class_displayserver_constant_screen_with_keyboard_focus"></div>

Represents the screen containing the window with the keyboard focus.

 **Note:** On Linux (Wayland), this constant always represents the screen at index `0`.

<div id="_class_displayserver_constant_screen_primary"></div>

**SCREEN_PRIMARY** = ``-2`` <div id="class_displayserver_constant_screen_primary"></div>

Represents the primary screen.

 **Note:** On Linux (Wayland), this constant always represents the screen at index `0`.

<div id="_class_displayserver_constant_screen_of_main_window"></div>

**SCREEN_OF_MAIN_WINDOW** = ``-1`` <div id="class_displayserver_constant_screen_of_main_window"></div>

Represents the screen where the main window is located. This is usually the default value in functions that allow specifying one of several screens.

 **Note:** On Linux (Wayland), this constant always represents the screen at index `0`.

<div id="_class_displayserver_constant_main_window_id"></div>

**MAIN_WINDOW_ID** = ``0`` <div id="class_displayserver_constant_main_window_id"></div>

The ID of the main window spawned by the engine, which can be passed to methods expecting a `window_id`.

<div id="_class_displayserver_constant_invalid_window_id"></div>

**INVALID_WINDOW_ID** = ``-1`` <div id="class_displayserver_constant_invalid_window_id"></div>

The ID that refers to a nonexistent window. This is returned by some **DisplayServer** methods if no window matches the requested result.

<div id="_class_displayserver_constant_invalid_indicator_id"></div>

**INVALID_INDICATOR_ID** = ``-1`` <div id="class_displayserver_constant_invalid_indicator_id"></div>

The ID that refers to a nonexistent application status indicator.

<!-- rst-class:: classref-section-separator -->

---

## 方法说明

<div id="_class_displayserver_method_clipboard_get"></div>

[`String`](class_string.md) **clipboard_get** ( ) const[^const]<div id="class_displayserver_method_clipboard_get"></div>

Returns the user's clipboard as a string if possible.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_displayserver_method_clipboard_get_image"></div>

[`Image`](class_image.md) **clipboard_get_image** ( ) const[^const]<div id="class_displayserver_method_clipboard_get_image"></div>

Returns the user's clipboard as an image if possible.

 **Note:** This method uses the copied pixel data, e.g. from a image editing software or a web browser, not an image file copied from file explorer.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_displayserver_method_clipboard_get_primary"></div>

[`String`](class_string.md) **clipboard_get_primary** ( ) const[^const]<div id="class_displayserver_method_clipboard_get_primary"></div>

Returns the user's [*primary*](https://unix.stackexchange.com/questions/139191/whats-the-difference-between-primary-selection-and-clipboard-buffer) clipboard as a string if possible. This is the clipboard that is set when the user selects text in any application, rather than when pressing <i class="fa fa-gamepad"></i>`Ctrl + C`. The clipboard data can then be pasted by clicking the middle mouse button in any application that supports the primary clipboard mechanism.

 **Note:** This method is only implemented on Linux (X11/Wayland).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_displayserver_method_clipboard_has"></div>

[`bool`](class_bool.md) **clipboard_has** ( ) const[^const]<div id="class_displayserver_method_clipboard_has"></div>

Returns `true` if there is a text content on the user's clipboard.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_displayserver_method_clipboard_has_image"></div>

[`bool`](class_bool.md) **clipboard_has_image** ( ) const[^const]<div id="class_displayserver_method_clipboard_has_image"></div>

Returns `true` if there is an image content on the user's clipboard.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_displayserver_method_clipboard_set"></div>

`void` **clipboard_set** ( clipboard: [`String`](class_string.md) )<div id="class_displayserver_method_clipboard_set"></div>

Sets the user's clipboard content to the given string.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_displayserver_method_clipboard_set_primary"></div>

`void` **clipboard_set_primary** ( clipboard_primary: [`String`](class_string.md) )<div id="class_displayserver_method_clipboard_set_primary"></div>

Sets the user's [*primary*](https://unix.stackexchange.com/questions/139191/whats-the-difference-between-primary-selection-and-clipboard-buffer) clipboard content to the given string. This is the clipboard that is set when the user selects text in any application, rather than when pressing <i class="fa fa-gamepad"></i>`Ctrl + C`. The clipboard data can then be pasted by clicking the middle mouse button in any application that supports the primary clipboard mechanism.

 **Note:** This method is only implemented on Linux (X11/Wayland).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_displayserver_method_create_status_indicator"></div>

[`int`](class_int.md) **create_status_indicator** ( icon: [`Texture2D`](class_texture2d.md), tooltip: [`String`](class_string.md), callback: [`Callable`](class_callable.md) )<div id="class_displayserver_method_create_status_indicator"></div>

Creates a new application status indicator with the specified icon, tooltip, and activation callback.

 `callback` should take two arguments: the pressed mouse button (one of the [MouseButton](#enum_@globalscope_mousebutton) constants) and the click position in screen coordinates (a [`Vector2i`](class_vector2i.md)).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_displayserver_method_cursor_get_shape"></div>

[CursorShape](#enum_displayserver_cursorshape) **cursor_get_shape** ( ) const[^const]<div id="class_displayserver_method_cursor_get_shape"></div>

Returns the default mouse cursor shape set by [`cursor_set_shape`](#class_displayserver_method_cursor_set_shape).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_displayserver_method_cursor_set_custom_image"></div>

`void` **cursor_set_custom_image** ( cursor: [`Resource`](class_resource.md), shape: [CursorShape](#enum_displayserver_cursorshape) = 0, hotspot: [`Vector2`](class_vector2.md) = Vector2(0, 0) )<div id="class_displayserver_method_cursor_set_custom_image"></div>

Sets a custom mouse cursor image for the given `shape`. This means the user's operating system and mouse cursor theme will no longer influence the mouse cursor's appearance.

 `cursor` can be either a [`Texture2D`](class_texture2d.md) or an [`Image`](class_image.md), and it should not be larger than 256×256 to display correctly. Optionally, `hotspot` can be set to offset the image's position relative to the click point. By default, `hotspot` is set to the top-left corner of the image. See also [`cursor_set_shape`](#class_displayserver_method_cursor_set_shape).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_displayserver_method_cursor_set_shape"></div>

`void` **cursor_set_shape** ( shape: [CursorShape](#enum_displayserver_cursorshape) )<div id="class_displayserver_method_cursor_set_shape"></div>

Sets the default mouse cursor shape. The cursor's appearance will vary depending on the user's operating system and mouse cursor theme. See also [`cursor_get_shape`](#class_displayserver_method_cursor_get_shape) and [`cursor_set_custom_image`](#class_displayserver_method_cursor_set_custom_image).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_displayserver_method_delete_status_indicator"></div>

`void` **delete_status_indicator** ( id: [`int`](class_int.md) )<div id="class_displayserver_method_delete_status_indicator"></div>

Removes the application status indicator.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_displayserver_method_dialog_input_text"></div>

[Error](#enum_@globalscope_error) **dialog_input_text** ( title: [`String`](class_string.md), description: [`String`](class_string.md), existing_text: [`String`](class_string.md), callback: [`Callable`](class_callable.md) )<div id="class_displayserver_method_dialog_input_text"></div>

Shows a text input dialog which uses the operating system's native look-and-feel. `callback` should accept a single [`String`](class_string.md) parameter which contains the text field's contents.

 **Note:** This method is implemented if the display server has the [`FEATURE_NATIVE_DIALOG_INPUT`](#class_displayserver_constant_feature_native_dialog_input) feature. Supported platforms include macOS and Windows.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_displayserver_method_dialog_show"></div>

[Error](#enum_@globalscope_error) **dialog_show** ( title: [`String`](class_string.md), description: [`String`](class_string.md), buttons: [`PackedStringArray`](class_packedstringarray.md), callback: [`Callable`](class_callable.md) )<div id="class_displayserver_method_dialog_show"></div>

Shows a text dialog which uses the operating system's native look-and-feel. `callback` should accept a single [`int`](class_int.md) parameter which corresponds to the index of the pressed button.

 **Note:** This method is implemented if the display server has the [`FEATURE_NATIVE_DIALOG`](#class_displayserver_constant_feature_native_dialog) feature. Supported platforms include macOS and Windows.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_displayserver_method_enable_for_stealing_focus"></div>

`void` **enable_for_stealing_focus** ( process_id: [`int`](class_int.md) )<div id="class_displayserver_method_enable_for_stealing_focus"></div>

Allows the `process_id` PID to steal focus from this window. In other words, this disables the operating system's focus stealing protection for the specified PID.

 **Note:** This method is implemented only on Windows.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_displayserver_method_file_dialog_show"></div>

[Error](#enum_@globalscope_error) **file_dialog_show** ( title: [`String`](class_string.md), current_directory: [`String`](class_string.md), filename: [`String`](class_string.md), show_hidden: [`bool`](class_bool.md), mode: [FileDialogMode](#enum_displayserver_filedialogmode), filters: [`PackedStringArray`](class_packedstringarray.md), callback: [`Callable`](class_callable.md) )<div id="class_displayserver_method_file_dialog_show"></div>

Displays OS native dialog for selecting files or directories in the file system.

Each filter string in the `filters` array should be formatted like this: `*.txt,*.doc;Text Files`. The description text of the filter is optional and can be omitted. See also [`FileDialog.filters`](#class_filedialog_property_filters).

Callbacks have the following arguments: `status: bool, selected_paths: PackedStringArray, selected_filter_index: int`.

 **Note:** This method is implemented if the display server has the [`FEATURE_NATIVE_DIALOG_FILE`](#class_displayserver_constant_feature_native_dialog_file) feature. Supported platforms include Linux (X11/Wayland), Windows, and macOS.

 **Note:** `current_directory` might be ignored.

 **Note:** On Linux, `show_hidden` is ignored.

 **Note:** On macOS, native file dialogs have no title.

 **Note:** On macOS, sandboxed apps will save security-scoped bookmarks to retain access to the opened folders across multiple sessions. Use [`OS.get_granted_permissions`](#class_os_method_get_granted_permissions) to get a list of saved bookmarks.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_displayserver_method_file_dialog_with_options_show"></div>

[Error](#enum_@globalscope_error) **file_dialog_with_options_show** ( title: [`String`](class_string.md), current_directory: [`String`](class_string.md), root: [`String`](class_string.md), filename: [`String`](class_string.md), show_hidden: [`bool`](class_bool.md), mode: [FileDialogMode](#enum_displayserver_filedialogmode), filters: [`PackedStringArray`](class_packedstringarray.md), options: [Array](class_array.md) [`Dictionary`](class_dictionary.md), callback: [`Callable`](class_callable.md) )<div id="class_displayserver_method_file_dialog_with_options_show"></div>

Displays OS native dialog for selecting files or directories in the file system with additional user selectable options.

Each filter string in the `filters` array should be formatted like this: `*.txt,*.doc;Text Files`. The description text of the filter is optional and can be omitted. See also [`FileDialog.filters`](#class_filedialog_property_filters).

 `options` is array of [`Dictionary`](class_dictionary.md) s with the following keys:

- `"name"` - option's name [`String`](class_string.md).

- `"values"` - [`PackedStringArray`](class_packedstringarray.md) of values. If empty, boolean option (check box) is used.

- `"default"` - default selected option index ([`int`](class_int.md)) or default boolean value ([`bool`](class_bool.md)).

Callbacks have the following arguments: `status: bool, selected_paths: PackedStringArray, selected_filter_index: int, selected_option: Dictionary`.

 **Note:** This method is implemented if the display server has the [`FEATURE_NATIVE_DIALOG_FILE`](#class_displayserver_constant_feature_native_dialog_file) feature. Supported platforms include Linux (X11/Wayland), Windows, and macOS.

 **Note:** `current_directory` might be ignored.

 **Note:** On Linux (X11), `show_hidden` is ignored.

 **Note:** On macOS, native file dialogs have no title.

 **Note:** On macOS, sandboxed apps will save security-scoped bookmarks to retain access to the opened folders across multiple sessions. Use [`OS.get_granted_permissions`](#class_os_method_get_granted_permissions) to get a list of saved bookmarks.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_displayserver_method_force_process_and_drop_events"></div>

`void` **force_process_and_drop_events** ( )<div id="class_displayserver_method_force_process_and_drop_events"></div>

Forces window manager processing while ignoring all [`InputEvent`](class_inputevent.md) s. See also [`process_events`](#class_displayserver_method_process_events).

 **Note:** This method is implemented on Windows and macOS.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_displayserver_method_get_accent_color"></div>

[`Color`](class_color.md) **get_accent_color** ( ) const[^const]<div id="class_displayserver_method_get_accent_color"></div>

Returns OS theme accent color. Returns `Color(0, 0, 0, 0)`, if accent color is unknown.

 **Note:** This method is implemented on macOS and Windows.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_displayserver_method_get_base_color"></div>

[`Color`](class_color.md) **get_base_color** ( ) const[^const]<div id="class_displayserver_method_get_base_color"></div>

Returns the OS theme base color (default control background). Returns `Color(0, 0, 0, 0)` if the base color is unknown.

 **Note:** This method is implemented on macOS and Windows.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_displayserver_method_get_display_cutouts"></div>

[Array](class_array.md) [`Rect2`](class_rect2.md) **get_display_cutouts** ( ) const[^const]<div id="class_displayserver_method_get_display_cutouts"></div>

Returns an [`Array`](class_array.md) of [`Rect2`](class_rect2.md), each of which is the bounding rectangle for a display cutout or notch. These are non-functional areas on edge-to-edge screens used by cameras and sensors. Returns an empty array if the device does not have cutouts. See also [`get_display_safe_area`](#class_displayserver_method_get_display_safe_area).

 **Note:** Currently only implemented on Android. Other platforms will return an empty array even if they do have display cutouts or notches.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_displayserver_method_get_display_safe_area"></div>

[`Rect2i`](class_rect2i.md) **get_display_safe_area** ( ) const[^const]<div id="class_displayserver_method_get_display_safe_area"></div>

Returns the unobscured area of the display where interactive controls should be rendered. See also [`get_display_cutouts`](#class_displayserver_method_get_display_cutouts).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_displayserver_method_get_keyboard_focus_screen"></div>

[`int`](class_int.md) **get_keyboard_focus_screen** ( ) const[^const]<div id="class_displayserver_method_get_keyboard_focus_screen"></div>

Returns the index of the screen containing the window with the keyboard focus, or the primary screen if there's no focused window.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_displayserver_method_get_name"></div>

[`String`](class_string.md) **get_name** ( ) const[^const]<div id="class_displayserver_method_get_name"></div>

Returns the name of the **DisplayServer** currently in use. Most operating systems only have a single **DisplayServer**, but Linux has access to more than one **DisplayServer** (currently X11 and Wayland).

The names of built-in display servers are `Windows`, `macOS`, `X11` (Linux), `Wayland` (Linux), `Android`, `iOS`, `web` (HTML5), and `headless` (when started with the `--headless` [*command line argument*](../tutorials/editor/command_line_tutorial)).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_displayserver_method_get_primary_screen"></div>

[`int`](class_int.md) **get_primary_screen** ( ) const[^const]<div id="class_displayserver_method_get_primary_screen"></div>

Returns index of the primary screen.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_displayserver_method_get_screen_count"></div>

[`int`](class_int.md) **get_screen_count** ( ) const[^const]<div id="class_displayserver_method_get_screen_count"></div>

Returns the number of displays available.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_displayserver_method_get_screen_from_rect"></div>

[`int`](class_int.md) **get_screen_from_rect** ( rect: [`Rect2`](class_rect2.md) ) const[^const]<div id="class_displayserver_method_get_screen_from_rect"></div>

Returns index of the screen which contains specified rectangle.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_displayserver_method_get_swap_cancel_ok"></div>

[`bool`](class_bool.md) **get_swap_cancel_ok** ( )<div id="class_displayserver_method_get_swap_cancel_ok"></div>

Returns `true` if positions of **OK** and **Cancel** buttons are swapped in dialogs. This is enabled by default on Windows to follow interface conventions, and be toggled by changing [`ProjectSettings.gui/common/swap_cancel_ok`](#class_projectsettings_property_gui/common/swap_cancel_ok).

 **Note:** This doesn't affect native dialogs such as the ones spawned by [`dialog_show`](#class_displayserver_method_dialog_show).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_displayserver_method_get_window_at_screen_position"></div>

[`int`](class_int.md) **get_window_at_screen_position** ( position: [`Vector2i`](class_vector2i.md) ) const[^const]<div id="class_displayserver_method_get_window_at_screen_position"></div>

Returns the ID of the window at the specified screen `position` (in pixels). On multi-monitor setups, the screen position is relative to the virtual desktop area. On multi-monitor setups with different screen resolutions or orientations, the origin may be located outside any display like this:

```text

    * (0, 0)        +-------+
                    |       |
    +-------------+ |       |
    |             | |       |
    |             | |       |
    +-------------+ +-------+
```



<!-- rst-class:: classref-item-separator -->

---

<div id="_class_displayserver_method_get_window_list"></div>

[`PackedInt32Array`](class_packedint32array.md) **get_window_list** ( ) const[^const]<div id="class_displayserver_method_get_window_list"></div>

Returns the list of Godot window IDs belonging to this process.

 **Note:** Native dialogs are not included in this list.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_displayserver_method_global_menu_add_check_item"></div>

[`int`](class_int.md) **global_menu_add_check_item** ( menu_root: [`String`](class_string.md), label: [`String`](class_string.md), callback: [`Callable`](class_callable.md) = Callable(), key_callback: [`Callable`](class_callable.md) = Callable(), tag: [`Variant`](class_variant.md) = null, accelerator: [Key](#enum_@globalscope_key) = 0, index: [`int`](class_int.md) = -1 )<div id="class_displayserver_method_global_menu_add_check_item"></div>

**已弃用：** Use [`NativeMenu`](class_nativemenu.md) or [`PopupMenu`](class_popupmenu.md) instead.

Adds a new checkable item with text `label` to the global menu with ID `menu_root`.

Returns index of the inserted item, it's not guaranteed to be the same as `index` value.

An `accelerator` can optionally be defined, which is a keyboard shortcut that can be pressed to trigger the menu button even if it's not currently open. The `accelerator` is generally a combination of [KeyModifierMask](#enum_@globalscope_keymodifiermask) s and [Key](#enum_@globalscope_key) s using bitwise OR such as `KEY_MASK_CTRL | KEY_A` (<i class="fa fa-gamepad"></i>`Ctrl + A`).

 **Note:** The `callback` and `key_callback` Callables need to accept exactly one Variant parameter, the parameter passed to the Callables will be the value passed to `tag`.

 **Note:** This method is implemented only on macOS.

 **Supported system menu IDs:** 

```text

    "_main" - Main menu (macOS).
    "_dock" - Dock popup menu (macOS).
    "_apple" - Apple menu (macOS, custom items added before "Services").
    "_window" - Window menu (macOS, custom items added after "Bring All to Front").
    "_help" - Help menu (macOS).
```



<!-- rst-class:: classref-item-separator -->

---

<div id="_class_displayserver_method_global_menu_add_icon_check_item"></div>

[`int`](class_int.md) **global_menu_add_icon_check_item** ( menu_root: [`String`](class_string.md), icon: [`Texture2D`](class_texture2d.md), label: [`String`](class_string.md), callback: [`Callable`](class_callable.md) = Callable(), key_callback: [`Callable`](class_callable.md) = Callable(), tag: [`Variant`](class_variant.md) = null, accelerator: [Key](#enum_@globalscope_key) = 0, index: [`int`](class_int.md) = -1 )<div id="class_displayserver_method_global_menu_add_icon_check_item"></div>

**已弃用：** Use [`NativeMenu`](class_nativemenu.md) or [`PopupMenu`](class_popupmenu.md) instead.

Adds a new checkable item with text `label` and icon `icon` to the global menu with ID `menu_root`.

Returns index of the inserted item, it's not guaranteed to be the same as `index` value.

An `accelerator` can optionally be defined, which is a keyboard shortcut that can be pressed to trigger the menu button even if it's not currently open. The `accelerator` is generally a combination of [KeyModifierMask](#enum_@globalscope_keymodifiermask) s and [Key](#enum_@globalscope_key) s using bitwise OR such as `KEY_MASK_CTRL | KEY_A` (<i class="fa fa-gamepad"></i>`Ctrl + A`).

 **Note:** The `callback` and `key_callback` Callables need to accept exactly one Variant parameter, the parameter passed to the Callables will be the value passed to `tag`.

 **Note:** This method is implemented only on macOS.

 **Supported system menu IDs:** 

```text

    "_main" - Main menu (macOS).
    "_dock" - Dock popup menu (macOS).
    "_apple" - Apple menu (macOS, custom items added before "Services").
    "_window" - Window menu (macOS, custom items added after "Bring All to Front").
    "_help" - Help menu (macOS).
```



<!-- rst-class:: classref-item-separator -->

---

<div id="_class_displayserver_method_global_menu_add_icon_item"></div>

[`int`](class_int.md) **global_menu_add_icon_item** ( menu_root: [`String`](class_string.md), icon: [`Texture2D`](class_texture2d.md), label: [`String`](class_string.md), callback: [`Callable`](class_callable.md) = Callable(), key_callback: [`Callable`](class_callable.md) = Callable(), tag: [`Variant`](class_variant.md) = null, accelerator: [Key](#enum_@globalscope_key) = 0, index: [`int`](class_int.md) = -1 )<div id="class_displayserver_method_global_menu_add_icon_item"></div>

**已弃用：** Use [`NativeMenu`](class_nativemenu.md) or [`PopupMenu`](class_popupmenu.md) instead.

Adds a new item with text `label` and icon `icon` to the global menu with ID `menu_root`.

Returns index of the inserted item, it's not guaranteed to be the same as `index` value.

An `accelerator` can optionally be defined, which is a keyboard shortcut that can be pressed to trigger the menu button even if it's not currently open. The `accelerator` is generally a combination of [KeyModifierMask](#enum_@globalscope_keymodifiermask) s and [Key](#enum_@globalscope_key) s using bitwise OR such as `KEY_MASK_CTRL | KEY_A` (<i class="fa fa-gamepad"></i>`Ctrl + A`).

 **Note:** The `callback` and `key_callback` Callables need to accept exactly one Variant parameter, the parameter passed to the Callables will be the value passed to `tag`.

 **Note:** This method is implemented only on macOS.

 **Supported system menu IDs:** 

```text

    "_main" - Main menu (macOS).
    "_dock" - Dock popup menu (macOS).
    "_apple" - Apple menu (macOS, custom items added before "Services").
    "_window" - Window menu (macOS, custom items added after "Bring All to Front").
    "_help" - Help menu (macOS).
```



<!-- rst-class:: classref-item-separator -->

---

<div id="_class_displayserver_method_global_menu_add_icon_radio_check_item"></div>

[`int`](class_int.md) **global_menu_add_icon_radio_check_item** ( menu_root: [`String`](class_string.md), icon: [`Texture2D`](class_texture2d.md), label: [`String`](class_string.md), callback: [`Callable`](class_callable.md) = Callable(), key_callback: [`Callable`](class_callable.md) = Callable(), tag: [`Variant`](class_variant.md) = null, accelerator: [Key](#enum_@globalscope_key) = 0, index: [`int`](class_int.md) = -1 )<div id="class_displayserver_method_global_menu_add_icon_radio_check_item"></div>

**已弃用：** Use [`NativeMenu`](class_nativemenu.md) or [`PopupMenu`](class_popupmenu.md) instead.

Adds a new radio-checkable item with text `label` and icon `icon` to the global menu with ID `menu_root`.

Returns index of the inserted item, it's not guaranteed to be the same as `index` value.

An `accelerator` can optionally be defined, which is a keyboard shortcut that can be pressed to trigger the menu button even if it's not currently open. The `accelerator` is generally a combination of [KeyModifierMask](#enum_@globalscope_keymodifiermask) s and [Key](#enum_@globalscope_key) s using bitwise OR such as `KEY_MASK_CTRL | KEY_A` (<i class="fa fa-gamepad"></i>`Ctrl + A`).

 **Note:** Radio-checkable items just display a checkmark, but don't have any built-in checking behavior and must be checked/unchecked manually. See [`global_menu_set_item_checked`](#class_displayserver_method_global_menu_set_item_checked) for more info on how to control it.

 **Note:** The `callback` and `key_callback` Callables need to accept exactly one Variant parameter, the parameter passed to the Callables will be the value passed to `tag`.

 **Note:** This method is implemented only on macOS.

 **Supported system menu IDs:** 

```text

    "_main" - Main menu (macOS).
    "_dock" - Dock popup menu (macOS).
    "_apple" - Apple menu (macOS, custom items added before "Services").
    "_window" - Window menu (macOS, custom items added after "Bring All to Front").
    "_help" - Help menu (macOS).
```



<!-- rst-class:: classref-item-separator -->

---

<div id="_class_displayserver_method_global_menu_add_item"></div>

[`int`](class_int.md) **global_menu_add_item** ( menu_root: [`String`](class_string.md), label: [`String`](class_string.md), callback: [`Callable`](class_callable.md) = Callable(), key_callback: [`Callable`](class_callable.md) = Callable(), tag: [`Variant`](class_variant.md) = null, accelerator: [Key](#enum_@globalscope_key) = 0, index: [`int`](class_int.md) = -1 )<div id="class_displayserver_method_global_menu_add_item"></div>

**已弃用：** Use [`NativeMenu`](class_nativemenu.md) or [`PopupMenu`](class_popupmenu.md) instead.

Adds a new item with text `label` to the global menu with ID `menu_root`.

Returns index of the inserted item, it's not guaranteed to be the same as `index` value.

An `accelerator` can optionally be defined, which is a keyboard shortcut that can be pressed to trigger the menu button even if it's not currently open. The `accelerator` is generally a combination of [KeyModifierMask](#enum_@globalscope_keymodifiermask) s and [Key](#enum_@globalscope_key) s using bitwise OR such as `KEY_MASK_CTRL | KEY_A` (<i class="fa fa-gamepad"></i>`Ctrl + A`).

 **Note:** The `callback` and `key_callback` Callables need to accept exactly one Variant parameter, the parameter passed to the Callables will be the value passed to `tag`.

 **Note:** This method is implemented only on macOS.

 **Supported system menu IDs:** 

```text

    "_main" - Main menu (macOS).
    "_dock" - Dock popup menu (macOS).
    "_apple" - Apple menu (macOS, custom items added before "Services").
    "_window" - Window menu (macOS, custom items added after "Bring All to Front").
    "_help" - Help menu (macOS).
```



<!-- rst-class:: classref-item-separator -->

---

<div id="_class_displayserver_method_global_menu_add_multistate_item"></div>

[`int`](class_int.md) **global_menu_add_multistate_item** ( menu_root: [`String`](class_string.md), label: [`String`](class_string.md), max_states: [`int`](class_int.md), default_state: [`int`](class_int.md), callback: [`Callable`](class_callable.md) = Callable(), key_callback: [`Callable`](class_callable.md) = Callable(), tag: [`Variant`](class_variant.md) = null, accelerator: [Key](#enum_@globalscope_key) = 0, index: [`int`](class_int.md) = -1 )<div id="class_displayserver_method_global_menu_add_multistate_item"></div>

**已弃用：** Use [`NativeMenu`](class_nativemenu.md) or [`PopupMenu`](class_popupmenu.md) instead.

Adds a new item with text `label` to the global menu with ID `menu_root`.

Contrarily to normal binary items, multistate items can have more than two states, as defined by `max_states`. Each press or activate of the item will increase the state by one. The default value is defined by `default_state`.

Returns index of the inserted item, it's not guaranteed to be the same as `index` value.

An `accelerator` can optionally be defined, which is a keyboard shortcut that can be pressed to trigger the menu button even if it's not currently open. The `accelerator` is generally a combination of [KeyModifierMask](#enum_@globalscope_keymodifiermask) s and [Key](#enum_@globalscope_key) s using bitwise OR such as `KEY_MASK_CTRL | KEY_A` (<i class="fa fa-gamepad"></i>`Ctrl + A`).

 **Note:** By default, there's no indication of the current item state, it should be changed manually.

 **Note:** The `callback` and `key_callback` Callables need to accept exactly one Variant parameter, the parameter passed to the Callables will be the value passed to `tag`.

 **Note:** This method is implemented only on macOS.

 **Supported system menu IDs:** 

```text

    "_main" - Main menu (macOS).
    "_dock" - Dock popup menu (macOS).
    "_apple" - Apple menu (macOS, custom items added before "Services").
    "_window" - Window menu (macOS, custom items added after "Bring All to Front").
    "_help" - Help menu (macOS).
```



<!-- rst-class:: classref-item-separator -->

---

<div id="_class_displayserver_method_global_menu_add_radio_check_item"></div>

[`int`](class_int.md) **global_menu_add_radio_check_item** ( menu_root: [`String`](class_string.md), label: [`String`](class_string.md), callback: [`Callable`](class_callable.md) = Callable(), key_callback: [`Callable`](class_callable.md) = Callable(), tag: [`Variant`](class_variant.md) = null, accelerator: [Key](#enum_@globalscope_key) = 0, index: [`int`](class_int.md) = -1 )<div id="class_displayserver_method_global_menu_add_radio_check_item"></div>

**已弃用：** Use [`NativeMenu`](class_nativemenu.md) or [`PopupMenu`](class_popupmenu.md) instead.

Adds a new radio-checkable item with text `label` to the global menu with ID `menu_root`.

Returns index of the inserted item, it's not guaranteed to be the same as `index` value.

An `accelerator` can optionally be defined, which is a keyboard shortcut that can be pressed to trigger the menu button even if it's not currently open. The `accelerator` is generally a combination of [KeyModifierMask](#enum_@globalscope_keymodifiermask) s and [Key](#enum_@globalscope_key) s using bitwise OR such as `KEY_MASK_CTRL | KEY_A` (<i class="fa fa-gamepad"></i>`Ctrl + A`).

 **Note:** Radio-checkable items just display a checkmark, but don't have any built-in checking behavior and must be checked/unchecked manually. See [`global_menu_set_item_checked`](#class_displayserver_method_global_menu_set_item_checked) for more info on how to control it.

 **Note:** The `callback` and `key_callback` Callables need to accept exactly one Variant parameter, the parameter passed to the Callables will be the value passed to `tag`.

 **Note:** This method is implemented only on macOS.

 **Supported system menu IDs:** 

```text

    "_main" - Main menu (macOS).
    "_dock" - Dock popup menu (macOS).
    "_apple" - Apple menu (macOS, custom items added before "Services").
    "_window" - Window menu (macOS, custom items added after "Bring All to Front").
    "_help" - Help menu (macOS).
```



<!-- rst-class:: classref-item-separator -->

---

<div id="_class_displayserver_method_global_menu_add_separator"></div>

[`int`](class_int.md) **global_menu_add_separator** ( menu_root: [`String`](class_string.md), index: [`int`](class_int.md) = -1 )<div id="class_displayserver_method_global_menu_add_separator"></div>

**已弃用：** Use [`NativeMenu`](class_nativemenu.md) or [`PopupMenu`](class_popupmenu.md) instead.

Adds a separator between items to the global menu with ID `menu_root`. Separators also occupy an index.

Returns index of the inserted item, it's not guaranteed to be the same as `index` value.

 **Note:** This method is implemented only on macOS.

 **Supported system menu IDs:** 

```text

    "_main" - Main menu (macOS).
    "_dock" - Dock popup menu (macOS).
    "_apple" - Apple menu (macOS, custom items added before "Services").
    "_window" - Window menu (macOS, custom items added after "Bring All to Front").
    "_help" - Help menu (macOS).
```



<!-- rst-class:: classref-item-separator -->

---

<div id="_class_displayserver_method_global_menu_add_submenu_item"></div>

[`int`](class_int.md) **global_menu_add_submenu_item** ( menu_root: [`String`](class_string.md), label: [`String`](class_string.md), submenu: [`String`](class_string.md), index: [`int`](class_int.md) = -1 )<div id="class_displayserver_method_global_menu_add_submenu_item"></div>

**已弃用：** Use [`NativeMenu`](class_nativemenu.md) or [`PopupMenu`](class_popupmenu.md) instead.

Adds an item that will act as a submenu of the global menu `menu_root`. The `submenu` argument is the ID of the global menu root that will be shown when the item is clicked.

Returns index of the inserted item, it's not guaranteed to be the same as `index` value.

 **Note:** This method is implemented only on macOS.

 **Supported system menu IDs:** 

```text

    "_main" - Main menu (macOS).
    "_dock" - Dock popup menu (macOS).
    "_apple" - Apple menu (macOS, custom items added before "Services").
    "_window" - Window menu (macOS, custom items added after "Bring All to Front").
    "_help" - Help menu (macOS).
```



<!-- rst-class:: classref-item-separator -->

---

<div id="_class_displayserver_method_global_menu_clear"></div>

`void` **global_menu_clear** ( menu_root: [`String`](class_string.md) )<div id="class_displayserver_method_global_menu_clear"></div>

**已弃用：** Use [`NativeMenu`](class_nativemenu.md) or [`PopupMenu`](class_popupmenu.md) instead.

Removes all items from the global menu with ID `menu_root`.

 **Note:** This method is implemented only on macOS.

 **Supported system menu IDs:** 

```text

    "_main" - Main menu (macOS).
    "_dock" - Dock popup menu (macOS).
    "_apple" - Apple menu (macOS, custom items added before "Services").
    "_window" - Window menu (macOS, custom items added after "Bring All to Front").
    "_help" - Help menu (macOS).
```



<!-- rst-class:: classref-item-separator -->

---

<div id="_class_displayserver_method_global_menu_get_item_accelerator"></div>

[Key](#enum_@globalscope_key) **global_menu_get_item_accelerator** ( menu_root: [`String`](class_string.md), idx: [`int`](class_int.md) ) const[^const]<div id="class_displayserver_method_global_menu_get_item_accelerator"></div>

**已弃用：** Use [`NativeMenu`](class_nativemenu.md) or [`PopupMenu`](class_popupmenu.md) instead.

Returns the accelerator of the item at index `idx`. Accelerators are special combinations of keys that activate the item, no matter which control is focused.

 **Note:** This method is implemented only on macOS.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_displayserver_method_global_menu_get_item_callback"></div>

[`Callable`](class_callable.md) **global_menu_get_item_callback** ( menu_root: [`String`](class_string.md), idx: [`int`](class_int.md) ) const[^const]<div id="class_displayserver_method_global_menu_get_item_callback"></div>

**已弃用：** Use [`NativeMenu`](class_nativemenu.md) or [`PopupMenu`](class_popupmenu.md) instead.

Returns the callback of the item at index `idx`.

 **Note:** This method is implemented only on macOS.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_displayserver_method_global_menu_get_item_count"></div>

[`int`](class_int.md) **global_menu_get_item_count** ( menu_root: [`String`](class_string.md) ) const[^const]<div id="class_displayserver_method_global_menu_get_item_count"></div>

**已弃用：** Use [`NativeMenu`](class_nativemenu.md) or [`PopupMenu`](class_popupmenu.md) instead.

Returns number of items in the global menu with ID `menu_root`.

 **Note:** This method is implemented only on macOS.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_displayserver_method_global_menu_get_item_icon"></div>

[`Texture2D`](class_texture2d.md) **global_menu_get_item_icon** ( menu_root: [`String`](class_string.md), idx: [`int`](class_int.md) ) const[^const]<div id="class_displayserver_method_global_menu_get_item_icon"></div>

**已弃用：** Use [`NativeMenu`](class_nativemenu.md) or [`PopupMenu`](class_popupmenu.md) instead.

Returns the icon of the item at index `idx`.

 **Note:** This method is implemented only on macOS.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_displayserver_method_global_menu_get_item_indentation_level"></div>

[`int`](class_int.md) **global_menu_get_item_indentation_level** ( menu_root: [`String`](class_string.md), idx: [`int`](class_int.md) ) const[^const]<div id="class_displayserver_method_global_menu_get_item_indentation_level"></div>

**已弃用：** Use [`NativeMenu`](class_nativemenu.md) or [`PopupMenu`](class_popupmenu.md) instead.

Returns the horizontal offset of the item at the given `idx`.

 **Note:** This method is implemented only on macOS.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_displayserver_method_global_menu_get_item_index_from_tag"></div>

[`int`](class_int.md) **global_menu_get_item_index_from_tag** ( menu_root: [`String`](class_string.md), tag: [`Variant`](class_variant.md) ) const[^const]<div id="class_displayserver_method_global_menu_get_item_index_from_tag"></div>

**已弃用：** Use [`NativeMenu`](class_nativemenu.md) or [`PopupMenu`](class_popupmenu.md) instead.

Returns the index of the item with the specified `tag`. Indices are automatically assigned to each item by the engine, and cannot be set manually.

 **Note:** This method is implemented only on macOS.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_displayserver_method_global_menu_get_item_index_from_text"></div>

[`int`](class_int.md) **global_menu_get_item_index_from_text** ( menu_root: [`String`](class_string.md), text: [`String`](class_string.md) ) const[^const]<div id="class_displayserver_method_global_menu_get_item_index_from_text"></div>

**已弃用：** Use [`NativeMenu`](class_nativemenu.md) or [`PopupMenu`](class_popupmenu.md) instead.

Returns the index of the item with the specified `text`. Indices are automatically assigned to each item by the engine, and cannot be set manually.

 **Note:** This method is implemented only on macOS.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_displayserver_method_global_menu_get_item_key_callback"></div>

[`Callable`](class_callable.md) **global_menu_get_item_key_callback** ( menu_root: [`String`](class_string.md), idx: [`int`](class_int.md) ) const[^const]<div id="class_displayserver_method_global_menu_get_item_key_callback"></div>

**已弃用：** Use [`NativeMenu`](class_nativemenu.md) or [`PopupMenu`](class_popupmenu.md) instead.

Returns the callback of the item accelerator at index `idx`.

 **Note:** This method is implemented only on macOS.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_displayserver_method_global_menu_get_item_max_states"></div>

[`int`](class_int.md) **global_menu_get_item_max_states** ( menu_root: [`String`](class_string.md), idx: [`int`](class_int.md) ) const[^const]<div id="class_displayserver_method_global_menu_get_item_max_states"></div>

**已弃用：** Use [`NativeMenu`](class_nativemenu.md) or [`PopupMenu`](class_popupmenu.md) instead.

Returns number of states of a multistate item. See [`global_menu_add_multistate_item`](#class_displayserver_method_global_menu_add_multistate_item) for details.

 **Note:** This method is implemented only on macOS.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_displayserver_method_global_menu_get_item_state"></div>

[`int`](class_int.md) **global_menu_get_item_state** ( menu_root: [`String`](class_string.md), idx: [`int`](class_int.md) ) const[^const]<div id="class_displayserver_method_global_menu_get_item_state"></div>

**已弃用：** Use [`NativeMenu`](class_nativemenu.md) or [`PopupMenu`](class_popupmenu.md) instead.

Returns the state of a multistate item. See [`global_menu_add_multistate_item`](#class_displayserver_method_global_menu_add_multistate_item) for details.

 **Note:** This method is implemented only on macOS.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_displayserver_method_global_menu_get_item_submenu"></div>

[`String`](class_string.md) **global_menu_get_item_submenu** ( menu_root: [`String`](class_string.md), idx: [`int`](class_int.md) ) const[^const]<div id="class_displayserver_method_global_menu_get_item_submenu"></div>

**已弃用：** Use [`NativeMenu`](class_nativemenu.md) or [`PopupMenu`](class_popupmenu.md) instead.

Returns the submenu ID of the item at index `idx`. See [`global_menu_add_submenu_item`](#class_displayserver_method_global_menu_add_submenu_item) for more info on how to add a submenu.

 **Note:** This method is implemented only on macOS.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_displayserver_method_global_menu_get_item_tag"></div>

[`Variant`](class_variant.md) **global_menu_get_item_tag** ( menu_root: [`String`](class_string.md), idx: [`int`](class_int.md) ) const[^const]<div id="class_displayserver_method_global_menu_get_item_tag"></div>

**已弃用：** Use [`NativeMenu`](class_nativemenu.md) or [`PopupMenu`](class_popupmenu.md) instead.

Returns the metadata of the specified item, which might be of any type. You can set it with [`global_menu_set_item_tag`](#class_displayserver_method_global_menu_set_item_tag), which provides a simple way of assigning context data to items.

 **Note:** This method is implemented only on macOS.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_displayserver_method_global_menu_get_item_text"></div>

[`String`](class_string.md) **global_menu_get_item_text** ( menu_root: [`String`](class_string.md), idx: [`int`](class_int.md) ) const[^const]<div id="class_displayserver_method_global_menu_get_item_text"></div>

**已弃用：** Use [`NativeMenu`](class_nativemenu.md) or [`PopupMenu`](class_popupmenu.md) instead.

Returns the text of the item at index `idx`.

 **Note:** This method is implemented only on macOS.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_displayserver_method_global_menu_get_item_tooltip"></div>

[`String`](class_string.md) **global_menu_get_item_tooltip** ( menu_root: [`String`](class_string.md), idx: [`int`](class_int.md) ) const[^const]<div id="class_displayserver_method_global_menu_get_item_tooltip"></div>

**已弃用：** Use [`NativeMenu`](class_nativemenu.md) or [`PopupMenu`](class_popupmenu.md) instead.

Returns the tooltip associated with the specified index `idx`.

 **Note:** This method is implemented only on macOS.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_displayserver_method_global_menu_get_system_menu_roots"></div>

[`Dictionary`](class_dictionary.md) **global_menu_get_system_menu_roots** ( ) const[^const]<div id="class_displayserver_method_global_menu_get_system_menu_roots"></div>

**已弃用：** Use [`NativeMenu`](class_nativemenu.md) or [`PopupMenu`](class_popupmenu.md) instead.

Returns Dictionary of supported system menu IDs and names.

 **Note:** This method is implemented only on macOS.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_displayserver_method_global_menu_is_item_checkable"></div>

[`bool`](class_bool.md) **global_menu_is_item_checkable** ( menu_root: [`String`](class_string.md), idx: [`int`](class_int.md) ) const[^const]<div id="class_displayserver_method_global_menu_is_item_checkable"></div>

**已弃用：** Use [`NativeMenu`](class_nativemenu.md) or [`PopupMenu`](class_popupmenu.md) instead.

Returns `true` if the item at index `idx` is checkable in some way, i.e. if it has a checkbox or radio button.

 **Note:** This method is implemented only on macOS.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_displayserver_method_global_menu_is_item_checked"></div>

[`bool`](class_bool.md) **global_menu_is_item_checked** ( menu_root: [`String`](class_string.md), idx: [`int`](class_int.md) ) const[^const]<div id="class_displayserver_method_global_menu_is_item_checked"></div>

**已弃用：** Use [`NativeMenu`](class_nativemenu.md) or [`PopupMenu`](class_popupmenu.md) instead.

Returns `true` if the item at index `idx` is checked.

 **Note:** This method is implemented only on macOS.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_displayserver_method_global_menu_is_item_disabled"></div>

[`bool`](class_bool.md) **global_menu_is_item_disabled** ( menu_root: [`String`](class_string.md), idx: [`int`](class_int.md) ) const[^const]<div id="class_displayserver_method_global_menu_is_item_disabled"></div>

**已弃用：** Use [`NativeMenu`](class_nativemenu.md) or [`PopupMenu`](class_popupmenu.md) instead.

Returns `true` if the item at index `idx` is disabled. When it is disabled it can't be selected, or its action invoked.

See [`global_menu_set_item_disabled`](#class_displayserver_method_global_menu_set_item_disabled) for more info on how to disable an item.

 **Note:** This method is implemented only on macOS.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_displayserver_method_global_menu_is_item_hidden"></div>

[`bool`](class_bool.md) **global_menu_is_item_hidden** ( menu_root: [`String`](class_string.md), idx: [`int`](class_int.md) ) const[^const]<div id="class_displayserver_method_global_menu_is_item_hidden"></div>

**已弃用：** Use [`NativeMenu`](class_nativemenu.md) or [`PopupMenu`](class_popupmenu.md) instead.

Returns `true` if the item at index `idx` is hidden.

See [`global_menu_set_item_hidden`](#class_displayserver_method_global_menu_set_item_hidden) for more info on how to hide an item.

 **Note:** This method is implemented only on macOS.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_displayserver_method_global_menu_is_item_radio_checkable"></div>

[`bool`](class_bool.md) **global_menu_is_item_radio_checkable** ( menu_root: [`String`](class_string.md), idx: [`int`](class_int.md) ) const[^const]<div id="class_displayserver_method_global_menu_is_item_radio_checkable"></div>

**已弃用：** Use [`NativeMenu`](class_nativemenu.md) or [`PopupMenu`](class_popupmenu.md) instead.

Returns `true` if the item at index `idx` has radio button-style checkability.

 **Note:** This is purely cosmetic; you must add the logic for checking/unchecking items in radio groups.

 **Note:** This method is implemented only on macOS.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_displayserver_method_global_menu_remove_item"></div>

`void` **global_menu_remove_item** ( menu_root: [`String`](class_string.md), idx: [`int`](class_int.md) )<div id="class_displayserver_method_global_menu_remove_item"></div>

**已弃用：** Use [`NativeMenu`](class_nativemenu.md) or [`PopupMenu`](class_popupmenu.md) instead.

Removes the item at index `idx` from the global menu `menu_root`.

 **Note:** The indices of items after the removed item will be shifted by one.

 **Note:** This method is implemented only on macOS.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_displayserver_method_global_menu_set_item_accelerator"></div>

`void` **global_menu_set_item_accelerator** ( menu_root: [`String`](class_string.md), idx: [`int`](class_int.md), keycode: [Key](#enum_@globalscope_key) )<div id="class_displayserver_method_global_menu_set_item_accelerator"></div>

**已弃用：** Use [`NativeMenu`](class_nativemenu.md) or [`PopupMenu`](class_popupmenu.md) instead.

Sets the accelerator of the item at index `idx`. `keycode` can be a single [Key](#enum_@globalscope_key), or a combination of [KeyModifierMask](#enum_@globalscope_keymodifiermask) s and [Key](#enum_@globalscope_key) s using bitwise OR such as `KEY_MASK_CTRL | KEY_A` (<i class="fa fa-gamepad"></i>`Ctrl + A`).

 **Note:** This method is implemented only on macOS.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_displayserver_method_global_menu_set_item_callback"></div>

`void` **global_menu_set_item_callback** ( menu_root: [`String`](class_string.md), idx: [`int`](class_int.md), callback: [`Callable`](class_callable.md) )<div id="class_displayserver_method_global_menu_set_item_callback"></div>

**已弃用：** Use [`NativeMenu`](class_nativemenu.md) or [`PopupMenu`](class_popupmenu.md) instead.

Sets the callback of the item at index `idx`. Callback is emitted when an item is pressed.

 **Note:** The `callback` Callable needs to accept exactly one Variant parameter, the parameter passed to the Callable will be the value passed to the `tag` parameter when the menu item was created.

 **Note:** This method is implemented only on macOS.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_displayserver_method_global_menu_set_item_checkable"></div>

`void` **global_menu_set_item_checkable** ( menu_root: [`String`](class_string.md), idx: [`int`](class_int.md), checkable: [`bool`](class_bool.md) )<div id="class_displayserver_method_global_menu_set_item_checkable"></div>

**已弃用：** Use [`NativeMenu`](class_nativemenu.md) or [`PopupMenu`](class_popupmenu.md) instead.

Sets whether the item at index `idx` has a checkbox. If `false`, sets the type of the item to plain text.

 **Note:** This method is implemented only on macOS.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_displayserver_method_global_menu_set_item_checked"></div>

`void` **global_menu_set_item_checked** ( menu_root: [`String`](class_string.md), idx: [`int`](class_int.md), checked: [`bool`](class_bool.md) )<div id="class_displayserver_method_global_menu_set_item_checked"></div>

**已弃用：** Use [`NativeMenu`](class_nativemenu.md) or [`PopupMenu`](class_popupmenu.md) instead.

Sets the checkstate status of the item at index `idx`.

 **Note:** This method is implemented only on macOS.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_displayserver_method_global_menu_set_item_disabled"></div>

`void` **global_menu_set_item_disabled** ( menu_root: [`String`](class_string.md), idx: [`int`](class_int.md), disabled: [`bool`](class_bool.md) )<div id="class_displayserver_method_global_menu_set_item_disabled"></div>

**已弃用：** Use [`NativeMenu`](class_nativemenu.md) or [`PopupMenu`](class_popupmenu.md) instead.

Enables/disables the item at index `idx`. When it is disabled, it can't be selected and its action can't be invoked.

 **Note:** This method is implemented only on macOS.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_displayserver_method_global_menu_set_item_hidden"></div>

`void` **global_menu_set_item_hidden** ( menu_root: [`String`](class_string.md), idx: [`int`](class_int.md), hidden: [`bool`](class_bool.md) )<div id="class_displayserver_method_global_menu_set_item_hidden"></div>

**已弃用：** Use [`NativeMenu`](class_nativemenu.md) or [`PopupMenu`](class_popupmenu.md) instead.

Hides/shows the item at index `idx`. When it is hidden, an item does not appear in a menu and its action cannot be invoked.

 **Note:** This method is implemented only on macOS.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_displayserver_method_global_menu_set_item_hover_callbacks"></div>

`void` **global_menu_set_item_hover_callbacks** ( menu_root: [`String`](class_string.md), idx: [`int`](class_int.md), callback: [`Callable`](class_callable.md) )<div id="class_displayserver_method_global_menu_set_item_hover_callbacks"></div>

**已弃用：** Use [`NativeMenu`](class_nativemenu.md) or [`PopupMenu`](class_popupmenu.md) instead.

Sets the callback of the item at index `idx`. The callback is emitted when an item is hovered.

 **Note:** The `callback` Callable needs to accept exactly one Variant parameter, the parameter passed to the Callable will be the value passed to the `tag` parameter when the menu item was created.

 **Note:** This method is implemented only on macOS.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_displayserver_method_global_menu_set_item_icon"></div>

`void` **global_menu_set_item_icon** ( menu_root: [`String`](class_string.md), idx: [`int`](class_int.md), icon: [`Texture2D`](class_texture2d.md) )<div id="class_displayserver_method_global_menu_set_item_icon"></div>

**已弃用：** Use [`NativeMenu`](class_nativemenu.md) or [`PopupMenu`](class_popupmenu.md) instead.

Replaces the [`Texture2D`](class_texture2d.md) icon of the specified `idx`.

 **Note:** This method is implemented only on macOS.

 **Note:** This method is not supported by macOS "_dock" menu items.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_displayserver_method_global_menu_set_item_indentation_level"></div>

`void` **global_menu_set_item_indentation_level** ( menu_root: [`String`](class_string.md), idx: [`int`](class_int.md), level: [`int`](class_int.md) )<div id="class_displayserver_method_global_menu_set_item_indentation_level"></div>

**已弃用：** Use [`NativeMenu`](class_nativemenu.md) or [`PopupMenu`](class_popupmenu.md) instead.

Sets the horizontal offset of the item at the given `idx`.

 **Note:** This method is implemented only on macOS.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_displayserver_method_global_menu_set_item_key_callback"></div>

`void` **global_menu_set_item_key_callback** ( menu_root: [`String`](class_string.md), idx: [`int`](class_int.md), key_callback: [`Callable`](class_callable.md) )<div id="class_displayserver_method_global_menu_set_item_key_callback"></div>

**已弃用：** Use [`NativeMenu`](class_nativemenu.md) or [`PopupMenu`](class_popupmenu.md) instead.

Sets the callback of the item at index `idx`. Callback is emitted when its accelerator is activated.

 **Note:** The `key_callback` Callable needs to accept exactly one Variant parameter, the parameter passed to the Callable will be the value passed to the `tag` parameter when the menu item was created.

 **Note:** This method is implemented only on macOS.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_displayserver_method_global_menu_set_item_max_states"></div>

`void` **global_menu_set_item_max_states** ( menu_root: [`String`](class_string.md), idx: [`int`](class_int.md), max_states: [`int`](class_int.md) )<div id="class_displayserver_method_global_menu_set_item_max_states"></div>

**已弃用：** Use [`NativeMenu`](class_nativemenu.md) or [`PopupMenu`](class_popupmenu.md) instead.

Sets number of state of a multistate item. See [`global_menu_add_multistate_item`](#class_displayserver_method_global_menu_add_multistate_item) for details.

 **Note:** This method is implemented only on macOS.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_displayserver_method_global_menu_set_item_radio_checkable"></div>

`void` **global_menu_set_item_radio_checkable** ( menu_root: [`String`](class_string.md), idx: [`int`](class_int.md), checkable: [`bool`](class_bool.md) )<div id="class_displayserver_method_global_menu_set_item_radio_checkable"></div>

**已弃用：** Use [`NativeMenu`](class_nativemenu.md) or [`PopupMenu`](class_popupmenu.md) instead.

Sets the type of the item at the specified index `idx` to radio button. If `false`, sets the type of the item to plain text.

 **Note:** This is purely cosmetic; you must add the logic for checking/unchecking items in radio groups.

 **Note:** This method is implemented only on macOS.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_displayserver_method_global_menu_set_item_state"></div>

`void` **global_menu_set_item_state** ( menu_root: [`String`](class_string.md), idx: [`int`](class_int.md), state: [`int`](class_int.md) )<div id="class_displayserver_method_global_menu_set_item_state"></div>

**已弃用：** Use [`NativeMenu`](class_nativemenu.md) or [`PopupMenu`](class_popupmenu.md) instead.

Sets the state of a multistate item. See [`global_menu_add_multistate_item`](#class_displayserver_method_global_menu_add_multistate_item) for details.

 **Note:** This method is implemented only on macOS.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_displayserver_method_global_menu_set_item_submenu"></div>

`void` **global_menu_set_item_submenu** ( menu_root: [`String`](class_string.md), idx: [`int`](class_int.md), submenu: [`String`](class_string.md) )<div id="class_displayserver_method_global_menu_set_item_submenu"></div>

**已弃用：** Use [`NativeMenu`](class_nativemenu.md) or [`PopupMenu`](class_popupmenu.md) instead.

Sets the submenu of the item at index `idx`. The submenu is the ID of a global menu root that would be shown when the item is clicked.

 **Note:** This method is implemented only on macOS.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_displayserver_method_global_menu_set_item_tag"></div>

`void` **global_menu_set_item_tag** ( menu_root: [`String`](class_string.md), idx: [`int`](class_int.md), tag: [`Variant`](class_variant.md) )<div id="class_displayserver_method_global_menu_set_item_tag"></div>

**已弃用：** Use [`NativeMenu`](class_nativemenu.md) or [`PopupMenu`](class_popupmenu.md) instead.

Sets the metadata of an item, which may be of any type. You can later get it with [`global_menu_get_item_tag`](#class_displayserver_method_global_menu_get_item_tag), which provides a simple way of assigning context data to items.

 **Note:** This method is implemented only on macOS.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_displayserver_method_global_menu_set_item_text"></div>

`void` **global_menu_set_item_text** ( menu_root: [`String`](class_string.md), idx: [`int`](class_int.md), text: [`String`](class_string.md) )<div id="class_displayserver_method_global_menu_set_item_text"></div>

**已弃用：** Use [`NativeMenu`](class_nativemenu.md) or [`PopupMenu`](class_popupmenu.md) instead.

Sets the text of the item at index `idx`.

 **Note:** This method is implemented only on macOS.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_displayserver_method_global_menu_set_item_tooltip"></div>

`void` **global_menu_set_item_tooltip** ( menu_root: [`String`](class_string.md), idx: [`int`](class_int.md), tooltip: [`String`](class_string.md) )<div id="class_displayserver_method_global_menu_set_item_tooltip"></div>

**已弃用：** Use [`NativeMenu`](class_nativemenu.md) or [`PopupMenu`](class_popupmenu.md) instead.

Sets the [`String`](class_string.md) tooltip of the item at the specified index `idx`.

 **Note:** This method is implemented only on macOS.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_displayserver_method_global_menu_set_popup_callbacks"></div>

`void` **global_menu_set_popup_callbacks** ( menu_root: [`String`](class_string.md), open_callback: [`Callable`](class_callable.md), close_callback: [`Callable`](class_callable.md) )<div id="class_displayserver_method_global_menu_set_popup_callbacks"></div>

**已弃用：** Use [`NativeMenu`](class_nativemenu.md) or [`PopupMenu`](class_popupmenu.md) instead.

Registers callables to emit when the menu is respectively about to show or closed. Callback methods should have zero arguments.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_displayserver_method_has_additional_outputs"></div>

[`bool`](class_bool.md) **has_additional_outputs** ( ) const[^const]<div id="class_displayserver_method_has_additional_outputs"></div>

Returns `true` if any additional outputs have been registered via [`register_additional_output`](#class_displayserver_method_register_additional_output).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_displayserver_method_has_feature"></div>

[`bool`](class_bool.md) **has_feature** ( feature: [Feature](#enum_displayserver_feature) ) const[^const]<div id="class_displayserver_method_has_feature"></div>

Returns `true` if the specified `feature` is supported by the current **DisplayServer**, `false` otherwise.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_displayserver_method_help_set_search_callbacks"></div>

`void` **help_set_search_callbacks** ( search_callback: [`Callable`](class_callable.md), action_callback: [`Callable`](class_callable.md) )<div id="class_displayserver_method_help_set_search_callbacks"></div>

Sets native help system search callbacks.

 `search_callback` has the following arguments: `String search_string, int result_limit` and return a [`Dictionary`](class_dictionary.md) with "key, display name" pairs for the search results. Called when the user enters search terms in the `Help` menu.

 `action_callback` has the following arguments: `String key`. Called when the user selects a search result in the `Help` menu.

 **Note:** This method is implemented only on macOS.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_displayserver_method_ime_get_selection"></div>

[`Vector2i`](class_vector2i.md) **ime_get_selection** ( ) const[^const]<div id="class_displayserver_method_ime_get_selection"></div>

Returns the text selection in the [*Input Method Editor*](https://en.wikipedia.org/wiki/Input_method) composition string, with the [`Vector2i`](class_vector2i.md)'s `x` component being the caret position and `y` being the length of the selection.

 **Note:** This method is implemented only on macOS.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_displayserver_method_ime_get_text"></div>

[`String`](class_string.md) **ime_get_text** ( ) const[^const]<div id="class_displayserver_method_ime_get_text"></div>

Returns the composition string contained within the [*Input Method Editor*](https://en.wikipedia.org/wiki/Input_method) window.

 **Note:** This method is implemented only on macOS.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_displayserver_method_is_dark_mode"></div>

[`bool`](class_bool.md) **is_dark_mode** ( ) const[^const]<div id="class_displayserver_method_is_dark_mode"></div>

Returns `true` if OS is using dark mode.

 **Note:** This method is implemented on Android, iOS, macOS, Windows, and Linux (X11/Wayland).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_displayserver_method_is_dark_mode_supported"></div>

[`bool`](class_bool.md) **is_dark_mode_supported** ( ) const[^const]<div id="class_displayserver_method_is_dark_mode_supported"></div>

Returns `true` if OS supports dark mode.

 **Note:** This method is implemented on Android, iOS, macOS, Windows, and Linux (X11/Wayland).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_displayserver_method_is_touchscreen_available"></div>

[`bool`](class_bool.md) **is_touchscreen_available** ( ) const[^const]<div id="class_displayserver_method_is_touchscreen_available"></div>

Returns `true` if touch events are available (Android or iOS), the capability is detected on the Web platform or if [`ProjectSettings.input_devices/pointing/emulate_touch_from_mouse`](#class_projectsettings_property_input_devices/pointing/emulate_touch_from_mouse) is `true`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_displayserver_method_is_window_transparency_available"></div>

[`bool`](class_bool.md) **is_window_transparency_available** ( ) const[^const]<div id="class_displayserver_method_is_window_transparency_available"></div>

Returns `true` if the window background can be made transparent. This method returns `false` if [`ProjectSettings.display/window/per_pixel_transparency/allowed`](#class_projectsettings_property_display/window/per_pixel_transparency/allowed) is set to `false`, or if transparency is not supported by the renderer or OS compositor.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_displayserver_method_keyboard_get_current_layout"></div>

[`int`](class_int.md) **keyboard_get_current_layout** ( ) const[^const]<div id="class_displayserver_method_keyboard_get_current_layout"></div>

Returns active keyboard layout index.

 **Note:** This method is implemented on Linux (X11/Wayland), macOS, and Windows.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_displayserver_method_keyboard_get_keycode_from_physical"></div>

[Key](#enum_@globalscope_key) **keyboard_get_keycode_from_physical** ( keycode: [Key](#enum_@globalscope_key) ) const[^const]<div id="class_displayserver_method_keyboard_get_keycode_from_physical"></div>

Converts a physical (US QWERTY) `keycode` to one in the active keyboard layout.

 **Note:** This method is implemented on Linux (X11/Wayland), macOS and Windows.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_displayserver_method_keyboard_get_label_from_physical"></div>

[Key](#enum_@globalscope_key) **keyboard_get_label_from_physical** ( keycode: [Key](#enum_@globalscope_key) ) const[^const]<div id="class_displayserver_method_keyboard_get_label_from_physical"></div>

Converts a physical (US QWERTY) `keycode` to localized label printed on the key in the active keyboard layout.

 **Note:** This method is implemented on Linux (X11/Wayland), macOS and Windows.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_displayserver_method_keyboard_get_layout_count"></div>

[`int`](class_int.md) **keyboard_get_layout_count** ( ) const[^const]<div id="class_displayserver_method_keyboard_get_layout_count"></div>

Returns the number of keyboard layouts.

 **Note:** This method is implemented on Linux (X11/Wayland), macOS and Windows.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_displayserver_method_keyboard_get_layout_language"></div>

[`String`](class_string.md) **keyboard_get_layout_language** ( index: [`int`](class_int.md) ) const[^const]<div id="class_displayserver_method_keyboard_get_layout_language"></div>

Returns the ISO-639/BCP-47 language code of the keyboard layout at position `index`.

 **Note:** This method is implemented on Linux (X11/Wayland), macOS and Windows.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_displayserver_method_keyboard_get_layout_name"></div>

[`String`](class_string.md) **keyboard_get_layout_name** ( index: [`int`](class_int.md) ) const[^const]<div id="class_displayserver_method_keyboard_get_layout_name"></div>

Returns the localized name of the keyboard layout at position `index`.

 **Note:** This method is implemented on Linux (X11/Wayland), macOS and Windows.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_displayserver_method_keyboard_set_current_layout"></div>

`void` **keyboard_set_current_layout** ( index: [`int`](class_int.md) )<div id="class_displayserver_method_keyboard_set_current_layout"></div>

Sets the active keyboard layout.

 **Note:** This method is implemented on Linux (X11/Wayland), macOS and Windows.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_displayserver_method_mouse_get_button_state"></div>

[MouseButtonMask](#enum_@globalscope_mousebuttonmask) **mouse_get_button_state** ( ) const[^const]<div id="class_displayserver_method_mouse_get_button_state"></div>

Returns the current state of mouse buttons (whether each button is pressed) as a bitmask. If multiple mouse buttons are pressed at the same time, the bits are added together. Equivalent to [`Input.get_mouse_button_mask`](#class_input_method_get_mouse_button_mask).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_displayserver_method_mouse_get_mode"></div>

[MouseMode](#enum_displayserver_mousemode) **mouse_get_mode** ( ) const[^const]<div id="class_displayserver_method_mouse_get_mode"></div>

Returns the current mouse mode. See also [`mouse_set_mode`](#class_displayserver_method_mouse_set_mode).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_displayserver_method_mouse_get_position"></div>

[`Vector2i`](class_vector2i.md) **mouse_get_position** ( ) const[^const]<div id="class_displayserver_method_mouse_get_position"></div>

Returns the mouse cursor's current position in screen coordinates.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_displayserver_method_mouse_set_mode"></div>

`void` **mouse_set_mode** ( mouse_mode: [MouseMode](#enum_displayserver_mousemode) )<div id="class_displayserver_method_mouse_set_mode"></div>

Sets the current mouse mode. See also [`mouse_get_mode`](#class_displayserver_method_mouse_get_mode).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_displayserver_method_process_events"></div>

`void` **process_events** ( )<div id="class_displayserver_method_process_events"></div>

Perform window manager processing, including input flushing. See also [`force_process_and_drop_events`](#class_displayserver_method_force_process_and_drop_events), [`Input.flush_buffered_events`](#class_input_method_flush_buffered_events) and [`Input.use_accumulated_input`](#class_input_property_use_accumulated_input).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_displayserver_method_register_additional_output"></div>

`void` **register_additional_output** ( object: [`Object`](class_object.md) )<div id="class_displayserver_method_register_additional_output"></div>

Registers an [`Object`](class_object.md) which represents an additional output that will be rendered too, beyond normal windows. The [`Object`](class_object.md) is only used as an identifier, which can be later passed to [`unregister_additional_output`](#class_displayserver_method_unregister_additional_output).

This can be used to prevent Godot from skipping rendering when no normal windows are visible.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_displayserver_method_screen_get_dpi"></div>

[`int`](class_int.md) **screen_get_dpi** ( screen: [`int`](class_int.md) = -1 ) const[^const]<div id="class_displayserver_method_screen_get_dpi"></div>

Returns the dots per inch density of the specified screen. If `screen` is [`SCREEN_OF_MAIN_WINDOW`](#class_displayserver_constant_screen_of_main_window) (the default value), a screen with the main window will be used.

 **Note:** On macOS, returned value is inaccurate if fractional display scaling mode is used.

 **Note:** On Android devices, the actual screen densities are grouped into six generalized densities:

```text

       ldpi - 120 dpi
       mdpi - 160 dpi
       hdpi - 240 dpi
      xhdpi - 320 dpi
     xxhdpi - 480 dpi
    xxxhdpi - 640 dpi
```

 **Note:** This method is implemented on Android, Linux (X11/Wayland), macOS and Windows. Returns `72` on unsupported platforms.



<!-- rst-class:: classref-item-separator -->

---

<div id="_class_displayserver_method_screen_get_image"></div>

[`Image`](class_image.md) **screen_get_image** ( screen: [`int`](class_int.md) = -1 ) const[^const]<div id="class_displayserver_method_screen_get_image"></div>

Returns screenshot of the `screen`.

 **Note:** This method is implemented on Linux (X11), macOS, and Windows.

 **Note:** On macOS, this method requires "Screen Recording" permission, if permission is not granted it will return desktop wallpaper color.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_displayserver_method_screen_get_max_scale"></div>

[`float`](class_float.md) **screen_get_max_scale** ( ) const[^const]<div id="class_displayserver_method_screen_get_max_scale"></div>

Returns the greatest scale factor of all screens.

 **Note:** On macOS returned value is `2.0` if there is at least one hiDPI (Retina) screen in the system, and `1.0` in all other cases.

 **Note:** This method is implemented only on macOS.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_displayserver_method_screen_get_orientation"></div>

[ScreenOrientation](#enum_displayserver_screenorientation) **screen_get_orientation** ( screen: [`int`](class_int.md) = -1 ) const[^const]<div id="class_displayserver_method_screen_get_orientation"></div>

Returns the `screen`'s current orientation. See also [`screen_set_orientation`](#class_displayserver_method_screen_set_orientation).

 **Note:** This method is implemented on Android and iOS.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_displayserver_method_screen_get_pixel"></div>

[`Color`](class_color.md) **screen_get_pixel** ( position: [`Vector2i`](class_vector2i.md) ) const[^const]<div id="class_displayserver_method_screen_get_pixel"></div>

Returns color of the display pixel at the `position`.

 **Note:** This method is implemented on Linux (X11), macOS, and Windows.

 **Note:** On macOS, this method requires "Screen Recording" permission, if permission is not granted it will return desktop wallpaper color.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_displayserver_method_screen_get_position"></div>

[`Vector2i`](class_vector2i.md) **screen_get_position** ( screen: [`int`](class_int.md) = -1 ) const[^const]<div id="class_displayserver_method_screen_get_position"></div>

Returns the screen's top-left corner position in pixels. On multi-monitor setups, the screen position is relative to the virtual desktop area. On multi-monitor setups with different screen resolutions or orientations, the origin may be located outside any display like this:

```text

    * (0, 0)        +-------+
                    |       |
    +-------------+ |       |
    |             | |       |
    |             | |       |
    +-------------+ +-------+
```

See also [`screen_get_size`](#class_displayserver_method_screen_get_size).

 **Note:** On Linux (Wayland) this method always returns `(0, 0)`.



<!-- rst-class:: classref-item-separator -->

---

<div id="_class_displayserver_method_screen_get_refresh_rate"></div>

[`float`](class_float.md) **screen_get_refresh_rate** ( screen: [`int`](class_int.md) = -1 ) const[^const]<div id="class_displayserver_method_screen_get_refresh_rate"></div>

Returns the current refresh rate of the specified screen. If `screen` is [`SCREEN_OF_MAIN_WINDOW`](#class_displayserver_constant_screen_of_main_window) (the default value), a screen with the main window will be used.

 **Note:** Returns `-1.0` if the DisplayServer fails to find the refresh rate for the specified screen. On Web, [`screen_get_refresh_rate`](#class_displayserver_method_screen_get_refresh_rate) will always return `-1.0` as there is no way to retrieve the refresh rate on that platform.

To fallback to a default refresh rate if the method fails, try:

```

    var refresh_rate = DisplayServer.screen_get_refresh_rate()
    if refresh_rate < 0:
        refresh_rate = 60.0
```



<!-- rst-class:: classref-item-separator -->

---

<div id="_class_displayserver_method_screen_get_scale"></div>

[`float`](class_float.md) **screen_get_scale** ( screen: [`int`](class_int.md) = -1 ) const[^const]<div id="class_displayserver_method_screen_get_scale"></div>

Returns the scale factor of the specified screen by index.

 **Note:** On macOS, the returned value is `2.0` for hiDPI (Retina) screens, and `1.0` for all other cases.

 **Note:** On Linux (Wayland), the returned value is accurate only when `screen` is [`SCREEN_OF_MAIN_WINDOW`](#class_displayserver_constant_screen_of_main_window). Due to API limitations, passing a direct index will return a rounded-up integer, if the screen has a fractional scale (e.g. `1.25` would get rounded up to `2.0`).

 **Note:** This method is implemented only on macOS and Linux (Wayland).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_displayserver_method_screen_get_size"></div>

[`Vector2i`](class_vector2i.md) **screen_get_size** ( screen: [`int`](class_int.md) = -1 ) const[^const]<div id="class_displayserver_method_screen_get_size"></div>

Returns the screen's size in pixels. See also [`screen_get_position`](#class_displayserver_method_screen_get_position) and [`screen_get_usable_rect`](#class_displayserver_method_screen_get_usable_rect).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_displayserver_method_screen_get_usable_rect"></div>

[`Rect2i`](class_rect2i.md) **screen_get_usable_rect** ( screen: [`int`](class_int.md) = -1 ) const[^const]<div id="class_displayserver_method_screen_get_usable_rect"></div>

Returns the portion of the screen that is not obstructed by a status bar in pixels. See also [`screen_get_size`](#class_displayserver_method_screen_get_size).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_displayserver_method_screen_is_kept_on"></div>

[`bool`](class_bool.md) **screen_is_kept_on** ( ) const[^const]<div id="class_displayserver_method_screen_is_kept_on"></div>

Returns `true` if the screen should never be turned off by the operating system's power-saving measures. See also [`screen_set_keep_on`](#class_displayserver_method_screen_set_keep_on).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_displayserver_method_screen_set_keep_on"></div>

`void` **screen_set_keep_on** ( enable: [`bool`](class_bool.md) )<div id="class_displayserver_method_screen_set_keep_on"></div>

Sets whether the screen should never be turned off by the operating system's power-saving measures. See also [`screen_is_kept_on`](#class_displayserver_method_screen_is_kept_on).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_displayserver_method_screen_set_orientation"></div>

`void` **screen_set_orientation** ( orientation: [ScreenOrientation](#enum_displayserver_screenorientation), screen: [`int`](class_int.md) = -1 )<div id="class_displayserver_method_screen_set_orientation"></div>

Sets the `screen`'s `orientation`. See also [`screen_get_orientation`](#class_displayserver_method_screen_get_orientation).

 **Note:** On iOS, this method has no effect if [`ProjectSettings.display/window/handheld/orientation`](#class_projectsettings_property_display/window/handheld/orientation) is not set to [`SCREEN_SENSOR`](#class_displayserver_constant_screen_sensor).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_displayserver_method_set_icon"></div>

`void` **set_icon** ( image: [`Image`](class_image.md) )<div id="class_displayserver_method_set_icon"></div>

Sets the window icon (usually displayed in the top-left corner) with an [`Image`](class_image.md). To use icons in the operating system's native format, use [`set_native_icon`](#class_displayserver_method_set_native_icon) instead.

 **Note:** Requires support for [`FEATURE_ICON`](#class_displayserver_constant_feature_icon).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_displayserver_method_set_native_icon"></div>

`void` **set_native_icon** ( filename: [`String`](class_string.md) )<div id="class_displayserver_method_set_native_icon"></div>

Sets the window icon (usually displayed in the top-left corner) in the operating system's *native* format. The file at `filename` must be in `.ico` format on Windows or `.icns` on macOS. By using specially crafted `.ico` or `.icns` icons, [`set_native_icon`](#class_displayserver_method_set_native_icon) allows specifying different icons depending on the size the icon is displayed at. This size is determined by the operating system and user preferences (including the display scale factor). To use icons in other formats, use [`set_icon`](#class_displayserver_method_set_icon) instead.

 **Note:** Requires support for [`FEATURE_NATIVE_ICON`](#class_displayserver_constant_feature_native_icon).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_displayserver_method_set_system_theme_change_callback"></div>

`void` **set_system_theme_change_callback** ( callable: [`Callable`](class_callable.md) )<div id="class_displayserver_method_set_system_theme_change_callback"></div>

Sets the `callable` that should be called when system theme settings are changed. Callback method should have zero arguments.

 **Note:** This method is implemented on Android, iOS, macOS, Windows, and Linux (X11/Wayland).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_displayserver_method_status_indicator_get_rect"></div>

[`Rect2`](class_rect2.md) **status_indicator_get_rect** ( id: [`int`](class_int.md) ) const[^const]<div id="class_displayserver_method_status_indicator_get_rect"></div>

Returns the rectangle for the given status indicator `id` in screen coordinates. If the status indicator is not visible, returns an empty [`Rect2`](class_rect2.md).

 **Note:** This method is implemented on macOS and Windows.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_displayserver_method_status_indicator_set_callback"></div>

`void` **status_indicator_set_callback** ( id: [`int`](class_int.md), callback: [`Callable`](class_callable.md) )<div id="class_displayserver_method_status_indicator_set_callback"></div>

Sets the application status indicator activation callback. `callback` should take two arguments: [`int`](class_int.md) mouse button index (one of [MouseButton](#enum_@globalscope_mousebutton) values) and [`Vector2i`](class_vector2i.md) click position in screen coordinates.

 **Note:** This method is implemented on macOS and Windows.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_displayserver_method_status_indicator_set_icon"></div>

`void` **status_indicator_set_icon** ( id: [`int`](class_int.md), icon: [`Texture2D`](class_texture2d.md) )<div id="class_displayserver_method_status_indicator_set_icon"></div>

Sets the application status indicator icon.

 **Note:** This method is implemented on macOS and Windows.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_displayserver_method_status_indicator_set_menu"></div>

`void` **status_indicator_set_menu** ( id: [`int`](class_int.md), menu_rid: [`RID`](class_rid.md) )<div id="class_displayserver_method_status_indicator_set_menu"></div>

Sets the application status indicator native popup menu.

 **Note:** On macOS, the menu is activated by any mouse button. Its activation callback is *not* triggered.

 **Note:** On Windows, the menu is activated by the right mouse button, selecting the status icon and pressing <i class="fa fa-gamepad"></i>`Shift + F10`, or the applications key. The menu's activation callback for the other mouse buttons is still triggered.

 **Note:** Native popup is only supported if [`NativeMenu`](class_nativemenu.md) supports the [`NativeMenu.FEATURE_POPUP_MENU`](#class_nativemenu_constant_feature_popup_menu) feature.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_displayserver_method_status_indicator_set_tooltip"></div>

`void` **status_indicator_set_tooltip** ( id: [`int`](class_int.md), tooltip: [`String`](class_string.md) )<div id="class_displayserver_method_status_indicator_set_tooltip"></div>

Sets the application status indicator tooltip.

 **Note:** This method is implemented on macOS and Windows.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_displayserver_method_tablet_get_current_driver"></div>

[`String`](class_string.md) **tablet_get_current_driver** ( ) const[^const]<div id="class_displayserver_method_tablet_get_current_driver"></div>

Returns current active tablet driver name.

 **Note:** This method is implemented only on Windows.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_displayserver_method_tablet_get_driver_count"></div>

[`int`](class_int.md) **tablet_get_driver_count** ( ) const[^const]<div id="class_displayserver_method_tablet_get_driver_count"></div>

Returns the total number of available tablet drivers.

 **Note:** This method is implemented only on Windows.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_displayserver_method_tablet_get_driver_name"></div>

[`String`](class_string.md) **tablet_get_driver_name** ( idx: [`int`](class_int.md) ) const[^const]<div id="class_displayserver_method_tablet_get_driver_name"></div>

Returns the tablet driver name for the given index.

 **Note:** This method is implemented only on Windows.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_displayserver_method_tablet_set_current_driver"></div>

`void` **tablet_set_current_driver** ( name: [`String`](class_string.md) )<div id="class_displayserver_method_tablet_set_current_driver"></div>

Set active tablet driver name.

Supported drivers:

- `winink`: Windows Ink API, default (Windows 8.1+ required).

- `wintab`: Wacom Wintab API (compatible device driver required).

- `dummy`: Dummy driver, tablet input is disabled.

 **Note:** This method is implemented only on Windows.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_displayserver_method_tts_get_voices"></div>

[Array](class_array.md) [`Dictionary`](class_dictionary.md) **tts_get_voices** ( ) const[^const]<div id="class_displayserver_method_tts_get_voices"></div>

Returns an [`Array`](class_array.md) of voice information dictionaries.

Each [`Dictionary`](class_dictionary.md) contains two [`String`](class_string.md) entries:

- `name` is voice name.

- `id` is voice identifier.

- `language` is language code in `lang_Variant` format. The `lang` part is a 2 or 3-letter code based on the ISO-639 standard, in lowercase. The `Variant` part is an engine-dependent string describing country, region or/and dialect.

Note that Godot depends on system libraries for text-to-speech functionality. These libraries are installed by default on Windows and macOS, but not on all Linux distributions. If they are not present, this method will return an empty list. This applies to both Godot users on Linux, as well as end-users on Linux running Godot games that use text-to-speech.

 **Note:** This method is implemented on Android, iOS, Web, Linux (X11/Wayland), macOS, and Windows.

 **Note:** [`ProjectSettings.audio/general/text_to_speech`](#class_projectsettings_property_audio/general/text_to_speech) should be `true` to use text-to-speech.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_displayserver_method_tts_get_voices_for_language"></div>

[`PackedStringArray`](class_packedstringarray.md) **tts_get_voices_for_language** ( language: [`String`](class_string.md) ) const[^const]<div id="class_displayserver_method_tts_get_voices_for_language"></div>

Returns an [`PackedStringArray`](class_packedstringarray.md) of voice identifiers for the `language`.

 **Note:** This method is implemented on Android, iOS, Web, Linux (X11/Wayland), macOS, and Windows.

 **Note:** [`ProjectSettings.audio/general/text_to_speech`](#class_projectsettings_property_audio/general/text_to_speech) should be `true` to use text-to-speech.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_displayserver_method_tts_is_paused"></div>

[`bool`](class_bool.md) **tts_is_paused** ( ) const[^const]<div id="class_displayserver_method_tts_is_paused"></div>

Returns `true` if the synthesizer is in a paused state.

 **Note:** This method is implemented on Android, iOS, Web, Linux (X11/Wayland), macOS, and Windows.

 **Note:** [`ProjectSettings.audio/general/text_to_speech`](#class_projectsettings_property_audio/general/text_to_speech) should be `true` to use text-to-speech.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_displayserver_method_tts_is_speaking"></div>

[`bool`](class_bool.md) **tts_is_speaking** ( ) const[^const]<div id="class_displayserver_method_tts_is_speaking"></div>

Returns `true` if the synthesizer is generating speech, or have utterance waiting in the queue.

 **Note:** This method is implemented on Android, iOS, Web, Linux (X11/Wayland), macOS, and Windows.

 **Note:** [`ProjectSettings.audio/general/text_to_speech`](#class_projectsettings_property_audio/general/text_to_speech) should be `true` to use text-to-speech.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_displayserver_method_tts_pause"></div>

`void` **tts_pause** ( )<div id="class_displayserver_method_tts_pause"></div>

Puts the synthesizer into a paused state.

 **Note:** This method is implemented on Android, iOS, Web, Linux (X11/Wayland), macOS, and Windows.

 **Note:** [`ProjectSettings.audio/general/text_to_speech`](#class_projectsettings_property_audio/general/text_to_speech) should be `true` to use text-to-speech.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_displayserver_method_tts_resume"></div>

`void` **tts_resume** ( )<div id="class_displayserver_method_tts_resume"></div>

Resumes the synthesizer if it was paused.

 **Note:** This method is implemented on Android, iOS, Web, Linux (X11/Wayland), macOS, and Windows.

 **Note:** [`ProjectSettings.audio/general/text_to_speech`](#class_projectsettings_property_audio/general/text_to_speech) should be `true` to use text-to-speech.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_displayserver_method_tts_set_utterance_callback"></div>

`void` **tts_set_utterance_callback** ( event: [TTSUtteranceEvent](#enum_displayserver_ttsutteranceevent), callable: [`Callable`](class_callable.md) )<div id="class_displayserver_method_tts_set_utterance_callback"></div>

Adds a callback, which is called when the utterance has started, finished, canceled or reached a text boundary.

- [`TTS_UTTERANCE_STARTED`](#class_displayserver_constant_tts_utterance_started), [`TTS_UTTERANCE_ENDED`](#class_displayserver_constant_tts_utterance_ended), and [`TTS_UTTERANCE_CANCELED`](#class_displayserver_constant_tts_utterance_canceled) callable's method should take one [`int`](class_int.md) parameter, the utterance ID.

- [`TTS_UTTERANCE_BOUNDARY`](#class_displayserver_constant_tts_utterance_boundary) callable's method should take two [`int`](class_int.md) parameters, the index of the character and the utterance ID.

 **Note:** The granularity of the boundary callbacks is engine dependent.

 **Note:** This method is implemented on Android, iOS, Web, Linux (X11/Wayland), macOS, and Windows.

 **Note:** [`ProjectSettings.audio/general/text_to_speech`](#class_projectsettings_property_audio/general/text_to_speech) should be `true` to use text-to-speech.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_displayserver_method_tts_speak"></div>

`void` **tts_speak** ( text: [`String`](class_string.md), voice: [`String`](class_string.md), volume: [`int`](class_int.md) = 50, pitch: [`float`](class_float.md) = 1.0, rate: [`float`](class_float.md) = 1.0, utterance_id: [`int`](class_int.md) = 0, interrupt: [`bool`](class_bool.md) = false )<div id="class_displayserver_method_tts_speak"></div>

Adds an utterance to the queue. If `interrupt` is `true`, the queue is cleared first.

- `voice` identifier is one of the `"id"` values returned by [`tts_get_voices`](#class_displayserver_method_tts_get_voices) or one of the values returned by [`tts_get_voices_for_language`](#class_displayserver_method_tts_get_voices_for_language).

- `volume` ranges from `0` (lowest) to `100` (highest).

- `pitch` ranges from `0.0` (lowest) to `2.0` (highest), `1.0` is default pitch for the current voice.

- `rate` ranges from `0.1` (lowest) to `10.0` (highest), `1.0` is a normal speaking rate. Other values act as a percentage relative.

- `utterance_id` is passed as a parameter to the callback functions.

 **Note:** On Windows and Linux (X11/Wayland), utterance `text` can use SSML markup. SSML support is engine and voice dependent. If the engine does not support SSML, you should strip out all XML markup before calling [`tts_speak`](#class_displayserver_method_tts_speak).

 **Note:** The granularity of pitch, rate, and volume is engine and voice dependent. Values may be truncated.

 **Note:** This method is implemented on Android, iOS, Web, Linux (X11/Wayland), macOS, and Windows.

 **Note:** [`ProjectSettings.audio/general/text_to_speech`](#class_projectsettings_property_audio/general/text_to_speech) should be `true` to use text-to-speech.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_displayserver_method_tts_stop"></div>

`void` **tts_stop** ( )<div id="class_displayserver_method_tts_stop"></div>

Stops synthesis in progress and removes all utterances from the queue.

 **Note:** This method is implemented on Android, iOS, Web, Linux (X11/Linux), macOS, and Windows.

 **Note:** [`ProjectSettings.audio/general/text_to_speech`](#class_projectsettings_property_audio/general/text_to_speech) should be `true` to use text-to-speech.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_displayserver_method_unregister_additional_output"></div>

`void` **unregister_additional_output** ( object: [`Object`](class_object.md) )<div id="class_displayserver_method_unregister_additional_output"></div>

Unregisters an [`Object`](class_object.md) representing an additional output, that was registered via [`register_additional_output`](#class_displayserver_method_register_additional_output).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_displayserver_method_virtual_keyboard_get_height"></div>

[`int`](class_int.md) **virtual_keyboard_get_height** ( ) const[^const]<div id="class_displayserver_method_virtual_keyboard_get_height"></div>

Returns the on-screen keyboard's height in pixels. Returns 0 if there is no keyboard or if it is currently hidden.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_displayserver_method_virtual_keyboard_hide"></div>

`void` **virtual_keyboard_hide** ( )<div id="class_displayserver_method_virtual_keyboard_hide"></div>

Hides the virtual keyboard if it is shown, does nothing otherwise.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_displayserver_method_virtual_keyboard_show"></div>

`void` **virtual_keyboard_show** ( existing_text: [`String`](class_string.md), position: [`Rect2`](class_rect2.md) = Rect2(0, 0, 0, 0), type: [VirtualKeyboardType](#enum_displayserver_virtualkeyboardtype) = 0, max_length: [`int`](class_int.md) = -1, cursor_start: [`int`](class_int.md) = -1, cursor_end: [`int`](class_int.md) = -1 )<div id="class_displayserver_method_virtual_keyboard_show"></div>

Shows the virtual keyboard if the platform has one.

 `existing_text` parameter is useful for implementing your own [`LineEdit`](class_lineedit.md) or [`TextEdit`](class_textedit.md), as it tells the virtual keyboard what text has already been typed (the virtual keyboard uses it for auto-correct and predictions).

 `position` parameter is the screen space [`Rect2`](class_rect2.md) of the edited text.

 `type` parameter allows configuring which type of virtual keyboard to show.

 `max_length` limits the number of characters that can be entered if different from `-1`.

 `cursor_start` can optionally define the current text cursor position if `cursor_end` is not set.

 `cursor_start` and `cursor_end` can optionally define the current text selection.

 **Note:** This method is implemented on Android, iOS and Web.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_displayserver_method_warp_mouse"></div>

`void` **warp_mouse** ( position: [`Vector2i`](class_vector2i.md) )<div id="class_displayserver_method_warp_mouse"></div>

Sets the mouse cursor position to the given `position` relative to an origin at the upper left corner of the currently focused game Window Manager window.

 **Note:** [`warp_mouse`](#class_displayserver_method_warp_mouse) is only supported on Windows, macOS, and Linux (X11/Wayland). It has no effect on Android, iOS, and Web.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_displayserver_method_window_can_draw"></div>

[`bool`](class_bool.md) **window_can_draw** ( window_id: [`int`](class_int.md) = 0 ) const[^const]<div id="class_displayserver_method_window_can_draw"></div>

Returns `true` if anything can be drawn in the window specified by `window_id`, `false` otherwise. Using the `--disable-render-loop` command line argument or a headless build will return `false`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_displayserver_method_window_get_active_popup"></div>

[`int`](class_int.md) **window_get_active_popup** ( ) const[^const]<div id="class_displayserver_method_window_get_active_popup"></div>

Returns ID of the active popup window, or [`INVALID_WINDOW_ID`](#class_displayserver_constant_invalid_window_id) if there is none.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_displayserver_method_window_get_attached_instance_id"></div>

[`int`](class_int.md) **window_get_attached_instance_id** ( window_id: [`int`](class_int.md) = 0 ) const[^const]<div id="class_displayserver_method_window_get_attached_instance_id"></div>

Returns the [`Object.get_instance_id`](#class_object_method_get_instance_id) of the [`Window`](class_window.md) the `window_id` is attached to.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_displayserver_method_window_get_current_screen"></div>

[`int`](class_int.md) **window_get_current_screen** ( window_id: [`int`](class_int.md) = 0 ) const[^const]<div id="class_displayserver_method_window_get_current_screen"></div>

Returns the screen the window specified by `window_id` is currently positioned on. If the screen overlaps multiple displays, the screen where the window's center is located is returned. See also [`window_set_current_screen`](#class_displayserver_method_window_set_current_screen).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_displayserver_method_window_get_flag"></div>

[`bool`](class_bool.md) **window_get_flag** ( flag: [WindowFlags](#enum_displayserver_windowflags), window_id: [`int`](class_int.md) = 0 ) const[^const]<div id="class_displayserver_method_window_get_flag"></div>

Returns the current value of the given window's `flag`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_displayserver_method_window_get_max_size"></div>

[`Vector2i`](class_vector2i.md) **window_get_max_size** ( window_id: [`int`](class_int.md) = 0 ) const[^const]<div id="class_displayserver_method_window_get_max_size"></div>

Returns the window's maximum size (in pixels). See also [`window_set_max_size`](#class_displayserver_method_window_set_max_size).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_displayserver_method_window_get_min_size"></div>

[`Vector2i`](class_vector2i.md) **window_get_min_size** ( window_id: [`int`](class_int.md) = 0 ) const[^const]<div id="class_displayserver_method_window_get_min_size"></div>

Returns the window's minimum size (in pixels). See also [`window_set_min_size`](#class_displayserver_method_window_set_min_size).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_displayserver_method_window_get_mode"></div>

[WindowMode](#enum_displayserver_windowmode) **window_get_mode** ( window_id: [`int`](class_int.md) = 0 ) const[^const]<div id="class_displayserver_method_window_get_mode"></div>

Returns the mode of the given window.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_displayserver_method_window_get_native_handle"></div>

[`int`](class_int.md) **window_get_native_handle** ( handle_type: [HandleType](#enum_displayserver_handletype), window_id: [`int`](class_int.md) = 0 ) const[^const]<div id="class_displayserver_method_window_get_native_handle"></div>

Returns internal structure pointers for use in plugins.

 **Note:** This method is implemented on Android, Linux (X11/Wayland), macOS, and Windows.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_displayserver_method_window_get_popup_safe_rect"></div>

[`Rect2i`](class_rect2i.md) **window_get_popup_safe_rect** ( window: [`int`](class_int.md) ) const[^const]<div id="class_displayserver_method_window_get_popup_safe_rect"></div>

Returns the bounding box of control, or menu item that was used to open the popup window, in the screen coordinate system.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_displayserver_method_window_get_position"></div>

[`Vector2i`](class_vector2i.md) **window_get_position** ( window_id: [`int`](class_int.md) = 0 ) const[^const]<div id="class_displayserver_method_window_get_position"></div>

Returns the position of the client area of the given window on the screen.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_displayserver_method_window_get_position_with_decorations"></div>

[`Vector2i`](class_vector2i.md) **window_get_position_with_decorations** ( window_id: [`int`](class_int.md) = 0 ) const[^const]<div id="class_displayserver_method_window_get_position_with_decorations"></div>

Returns the position of the given window on the screen including the borders drawn by the operating system. See also [`window_get_position`](#class_displayserver_method_window_get_position).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_displayserver_method_window_get_safe_title_margins"></div>

[`Vector3i`](class_vector3i.md) **window_get_safe_title_margins** ( window_id: [`int`](class_int.md) = 0 ) const[^const]<div id="class_displayserver_method_window_get_safe_title_margins"></div>

Returns left margins (`x`), right margins (`y`) and height (`z`) of the title that are safe to use (contains no buttons or other elements) when [`WINDOW_FLAG_EXTEND_TO_TITLE`](#class_displayserver_constant_window_flag_extend_to_title) flag is set.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_displayserver_method_window_get_size"></div>

[`Vector2i`](class_vector2i.md) **window_get_size** ( window_id: [`int`](class_int.md) = 0 ) const[^const]<div id="class_displayserver_method_window_get_size"></div>

Returns the size of the window specified by `window_id` (in pixels), excluding the borders drawn by the operating system. This is also called the "client area". See also [`window_get_size_with_decorations`](#class_displayserver_method_window_get_size_with_decorations), [`window_set_size`](#class_displayserver_method_window_set_size) and [`window_get_position`](#class_displayserver_method_window_get_position).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_displayserver_method_window_get_size_with_decorations"></div>

[`Vector2i`](class_vector2i.md) **window_get_size_with_decorations** ( window_id: [`int`](class_int.md) = 0 ) const[^const]<div id="class_displayserver_method_window_get_size_with_decorations"></div>

Returns the size of the window specified by `window_id` (in pixels), including the borders drawn by the operating system. See also [`window_get_size`](#class_displayserver_method_window_get_size).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_displayserver_method_window_get_title_size"></div>

[`Vector2i`](class_vector2i.md) **window_get_title_size** ( title: [`String`](class_string.md), window_id: [`int`](class_int.md) = 0 ) const[^const]<div id="class_displayserver_method_window_get_title_size"></div>

Returns the estimated window title bar size (including text and window buttons) for the window specified by `window_id` (in pixels). This method does not change the window title.

 **Note:** This method is implemented on macOS and Windows.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_displayserver_method_window_get_vsync_mode"></div>

[VSyncMode](#enum_displayserver_vsyncmode) **window_get_vsync_mode** ( window_id: [`int`](class_int.md) = 0 ) const[^const]<div id="class_displayserver_method_window_get_vsync_mode"></div>

Returns the V-Sync mode of the given window.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_displayserver_method_window_is_focused"></div>

[`bool`](class_bool.md) **window_is_focused** ( window_id: [`int`](class_int.md) = 0 ) const[^const]<div id="class_displayserver_method_window_is_focused"></div>

Returns `true` if the window specified by `window_id` is focused.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_displayserver_method_window_is_maximize_allowed"></div>

[`bool`](class_bool.md) **window_is_maximize_allowed** ( window_id: [`int`](class_int.md) = 0 ) const[^const]<div id="class_displayserver_method_window_is_maximize_allowed"></div>

Returns `true` if the given window can be maximized (the maximize button is enabled).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_displayserver_method_window_maximize_on_title_dbl_click"></div>

[`bool`](class_bool.md) **window_maximize_on_title_dbl_click** ( ) const[^const]<div id="class_displayserver_method_window_maximize_on_title_dbl_click"></div>

Returns `true`, if double-click on a window title should maximize it.

 **Note:** This method is implemented only on macOS.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_displayserver_method_window_minimize_on_title_dbl_click"></div>

[`bool`](class_bool.md) **window_minimize_on_title_dbl_click** ( ) const[^const]<div id="class_displayserver_method_window_minimize_on_title_dbl_click"></div>

Returns `true`, if double-click on a window title should minimize it.

 **Note:** This method is implemented only on macOS.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_displayserver_method_window_move_to_foreground"></div>

`void` **window_move_to_foreground** ( window_id: [`int`](class_int.md) = 0 )<div id="class_displayserver_method_window_move_to_foreground"></div>

Moves the window specified by `window_id` to the foreground, so that it is visible over other windows.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_displayserver_method_window_request_attention"></div>

`void` **window_request_attention** ( window_id: [`int`](class_int.md) = 0 )<div id="class_displayserver_method_window_request_attention"></div>

Makes the window specified by `window_id` request attention, which is materialized by the window title and taskbar entry blinking until the window is focused. This usually has no visible effect if the window is currently focused. The exact behavior varies depending on the operating system.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_displayserver_method_window_set_current_screen"></div>

`void` **window_set_current_screen** ( screen: [`int`](class_int.md), window_id: [`int`](class_int.md) = 0 )<div id="class_displayserver_method_window_set_current_screen"></div>

Moves the window specified by `window_id` to the specified `screen`. See also [`window_get_current_screen`](#class_displayserver_method_window_get_current_screen).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_displayserver_method_window_set_drop_files_callback"></div>

`void` **window_set_drop_files_callback** ( callback: [`Callable`](class_callable.md), window_id: [`int`](class_int.md) = 0 )<div id="class_displayserver_method_window_set_drop_files_callback"></div>

Sets the `callback` that should be called when files are dropped from the operating system's file manager to the window specified by `window_id`. `callback` should take one [`PackedStringArray`](class_packedstringarray.md) argument, which is the list of dropped files.

 **Warning:** Advanced users only! Adding such a callback to a [`Window`](class_window.md) node will override its default implementation, which can introduce bugs.

 **Note:** This method is implemented on Windows, macOS, Linux (X11/Wayland), and Web.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_displayserver_method_window_set_exclusive"></div>

`void` **window_set_exclusive** ( window_id: [`int`](class_int.md), exclusive: [`bool`](class_bool.md) )<div id="class_displayserver_method_window_set_exclusive"></div>

If set to `true`, this window will always stay on top of its parent window, parent window will ignore input while this window is opened.

 **Note:** On macOS, exclusive windows are confined to the same space (virtual desktop or screen) as the parent window.

 **Note:** This method is implemented on macOS and Windows.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_displayserver_method_window_set_flag"></div>

`void` **window_set_flag** ( flag: [WindowFlags](#enum_displayserver_windowflags), enabled: [`bool`](class_bool.md), window_id: [`int`](class_int.md) = 0 )<div id="class_displayserver_method_window_set_flag"></div>

Enables or disables the given window's given `flag`. See [WindowFlags](#enum_displayserver_windowflags) for possible values and their behavior.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_displayserver_method_window_set_ime_active"></div>

`void` **window_set_ime_active** ( active: [`bool`](class_bool.md), window_id: [`int`](class_int.md) = 0 )<div id="class_displayserver_method_window_set_ime_active"></div>

Sets whether [*Input Method Editor*](https://en.wikipedia.org/wiki/Input_method) should be enabled for the window specified by `window_id`. See also [`window_set_ime_position`](#class_displayserver_method_window_set_ime_position).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_displayserver_method_window_set_ime_position"></div>

`void` **window_set_ime_position** ( position: [`Vector2i`](class_vector2i.md), window_id: [`int`](class_int.md) = 0 )<div id="class_displayserver_method_window_set_ime_position"></div>

Sets the position of the [*Input Method Editor*](https://en.wikipedia.org/wiki/Input_method) popup for the specified `window_id`. Only effective if [`window_set_ime_active`](#class_displayserver_method_window_set_ime_active) was set to `true` for the specified `window_id`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_displayserver_method_window_set_input_event_callback"></div>

`void` **window_set_input_event_callback** ( callback: [`Callable`](class_callable.md), window_id: [`int`](class_int.md) = 0 )<div id="class_displayserver_method_window_set_input_event_callback"></div>

Sets the `callback` that should be called when any [`InputEvent`](class_inputevent.md) is sent to the window specified by `window_id`.

 **Warning:** Advanced users only! Adding such a callback to a [`Window`](class_window.md) node will override its default implementation, which can introduce bugs.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_displayserver_method_window_set_input_text_callback"></div>

`void` **window_set_input_text_callback** ( callback: [`Callable`](class_callable.md), window_id: [`int`](class_int.md) = 0 )<div id="class_displayserver_method_window_set_input_text_callback"></div>

Sets the `callback` that should be called when text is entered using the virtual keyboard to the window specified by `window_id`.

 **Warning:** Advanced users only! Adding such a callback to a [`Window`](class_window.md) node will override its default implementation, which can introduce bugs.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_displayserver_method_window_set_max_size"></div>

`void` **window_set_max_size** ( max_size: [`Vector2i`](class_vector2i.md), window_id: [`int`](class_int.md) = 0 )<div id="class_displayserver_method_window_set_max_size"></div>

Sets the maximum size of the window specified by `window_id` in pixels. Normally, the user will not be able to drag the window to make it larger than the specified size. See also [`window_get_max_size`](#class_displayserver_method_window_get_max_size).

 **Note:** It's recommended to change this value using [`Window.max_size`](#class_window_property_max_size) instead.

 **Note:** Using third-party tools, it is possible for users to disable window geometry restrictions and therefore bypass this limit.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_displayserver_method_window_set_min_size"></div>

`void` **window_set_min_size** ( min_size: [`Vector2i`](class_vector2i.md), window_id: [`int`](class_int.md) = 0 )<div id="class_displayserver_method_window_set_min_size"></div>

Sets the minimum size for the given window to `min_size` in pixels. Normally, the user will not be able to drag the window to make it smaller than the specified size. See also [`window_get_min_size`](#class_displayserver_method_window_get_min_size).

 **Note:** It's recommended to change this value using [`Window.min_size`](#class_window_property_min_size) instead.

 **Note:** By default, the main window has a minimum size of `Vector2i(64, 64)`. This prevents issues that can arise when the window is resized to a near-zero size.

 **Note:** Using third-party tools, it is possible for users to disable window geometry restrictions and therefore bypass this limit.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_displayserver_method_window_set_mode"></div>

`void` **window_set_mode** ( mode: [WindowMode](#enum_displayserver_windowmode), window_id: [`int`](class_int.md) = 0 )<div id="class_displayserver_method_window_set_mode"></div>

Sets window mode for the given window to `mode`. See [WindowMode](#enum_displayserver_windowmode) for possible values and how each mode behaves.

 **Note:** Setting the window to full screen forcibly sets the borderless flag to `true`, so make sure to set it back to `false` when not wanted.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_displayserver_method_window_set_mouse_passthrough"></div>

`void` **window_set_mouse_passthrough** ( region: [`PackedVector2Array`](class_packedvector2array.md), window_id: [`int`](class_int.md) = 0 )<div id="class_displayserver_method_window_set_mouse_passthrough"></div>

Sets a polygonal region of the window which accepts mouse events. Mouse events outside the region will be passed through.

Passing an empty array will disable passthrough support (all mouse events will be intercepted by the window, which is the default behavior).



```gdscript

    # Set region, using Path2D node.
    DisplayServer.window_set_mouse_passthrough($Path2D.curve.get_baked_points())
    
    # Set region, using Polygon2D node.
    DisplayServer.window_set_mouse_passthrough($Polygon2D.polygon)
    
    # Reset region to default.
    DisplayServer.window_set_mouse_passthrough([])
```

```csharp

    // Set region, using Path2D node.
    DisplayServer.WindowSetMousePassthrough(GetNode<Path2D>("Path2D").Curve.GetBakedPoints());
    
    // Set region, using Polygon2D node.
    DisplayServer.WindowSetMousePassthrough(GetNode<Polygon2D>("Polygon2D").Polygon);
    
    // Reset region to default.
    DisplayServer.WindowSetMousePassthrough(new Vector2[] {});
```



 **Note:** On Windows, the portion of a window that lies outside the region is not drawn, while on Linux (X11) and macOS it is.

 **Note:** This method is implemented on Linux (X11), macOS and Windows.





<!-- rst-class:: classref-item-separator -->

---

<div id="_class_displayserver_method_window_set_popup_safe_rect"></div>

`void` **window_set_popup_safe_rect** ( window: [`int`](class_int.md), rect: [`Rect2i`](class_rect2i.md) )<div id="class_displayserver_method_window_set_popup_safe_rect"></div>

Sets the bounding box of control, or menu item that was used to open the popup window, in the screen coordinate system. Clicking this area will not auto-close this popup.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_displayserver_method_window_set_position"></div>

`void` **window_set_position** ( position: [`Vector2i`](class_vector2i.md), window_id: [`int`](class_int.md) = 0 )<div id="class_displayserver_method_window_set_position"></div>

Sets the position of the given window to `position`. On multi-monitor setups, the screen position is relative to the virtual desktop area. On multi-monitor setups with different screen resolutions or orientations, the origin may be located outside any display like this:

```text

    * (0, 0)        +-------+
                    |       |
    +-------------+ |       |
    |             | |       |
    |             | |       |
    +-------------+ +-------+
```

See also [`window_get_position`](#class_displayserver_method_window_get_position) and [`window_set_size`](#class_displayserver_method_window_set_size).

 **Note:** It's recommended to change this value using [`Window.position`](#class_window_property_position) instead.

 **Note:** On Linux (Wayland): this method is a no-op.



<!-- rst-class:: classref-item-separator -->

---

<div id="_class_displayserver_method_window_set_rect_changed_callback"></div>

`void` **window_set_rect_changed_callback** ( callback: [`Callable`](class_callable.md), window_id: [`int`](class_int.md) = 0 )<div id="class_displayserver_method_window_set_rect_changed_callback"></div>

Sets the `callback` that will be called when the window specified by `window_id` is moved or resized.

 **Warning:** Advanced users only! Adding such a callback to a [`Window`](class_window.md) node will override its default implementation, which can introduce bugs.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_displayserver_method_window_set_size"></div>

`void` **window_set_size** ( size: [`Vector2i`](class_vector2i.md), window_id: [`int`](class_int.md) = 0 )<div id="class_displayserver_method_window_set_size"></div>

Sets the size of the given window to `size` (in pixels). See also [`window_get_size`](#class_displayserver_method_window_get_size) and [`window_get_position`](#class_displayserver_method_window_get_position).

 **Note:** It's recommended to change this value using [`Window.size`](#class_window_property_size) instead.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_displayserver_method_window_set_title"></div>

`void` **window_set_title** ( title: [`String`](class_string.md), window_id: [`int`](class_int.md) = 0 )<div id="class_displayserver_method_window_set_title"></div>

Sets the title of the given window to `title`.

 **Note:** It's recommended to change this value using [`Window.title`](#class_window_property_title) instead.

 **Note:** Avoid changing the window title every frame, as this can cause performance issues on certain window managers. Try to change the window title only a few times per second at most.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_displayserver_method_window_set_transient"></div>

`void` **window_set_transient** ( window_id: [`int`](class_int.md), parent_window_id: [`int`](class_int.md) )<div id="class_displayserver_method_window_set_transient"></div>

Sets window transient parent. Transient window is will be destroyed with its transient parent and will return focus to their parent when closed. The transient window is displayed on top of a non-exclusive full-screen parent window. Transient windows can't enter full-screen mode.

 **Note:** It's recommended to change this value using [`Window.transient`](#class_window_property_transient) instead.

 **Note:** The behavior might be different depending on the platform.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_displayserver_method_window_set_vsync_mode"></div>

`void` **window_set_vsync_mode** ( vsync_mode: [VSyncMode](#enum_displayserver_vsyncmode), window_id: [`int`](class_int.md) = 0 )<div id="class_displayserver_method_window_set_vsync_mode"></div>

Sets the V-Sync mode of the given window. See also [`ProjectSettings.display/window/vsync/vsync_mode`](#class_projectsettings_property_display/window/vsync/vsync_mode).

See [VSyncMode](#enum_displayserver_vsyncmode) for possible values and how they affect the behavior of your application.

Depending on the platform and used renderer, the engine will fall back to [`VSYNC_ENABLED`](#class_displayserver_constant_vsync_enabled) if the desired mode is not supported.

 **Note:** V-Sync modes other than [`VSYNC_ENABLED`](#class_displayserver_constant_vsync_enabled) are only supported in the Forward+ and Mobile rendering methods, not Compatibility.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_displayserver_method_window_set_window_buttons_offset"></div>

`void` **window_set_window_buttons_offset** ( offset: [`Vector2i`](class_vector2i.md), window_id: [`int`](class_int.md) = 0 )<div id="class_displayserver_method_window_set_window_buttons_offset"></div>

When [`WINDOW_FLAG_EXTEND_TO_TITLE`](#class_displayserver_constant_window_flag_extend_to_title) flag is set, set offset to the center of the first titlebar button.

 **Note:** This flag is implemented only on macOS.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_displayserver_method_window_set_window_event_callback"></div>

`void` **window_set_window_event_callback** ( callback: [`Callable`](class_callable.md), window_id: [`int`](class_int.md) = 0 )<div id="class_displayserver_method_window_set_window_event_callback"></div>

Sets the `callback` that will be called when an event occurs in the window specified by `window_id`.

 **Warning:** Advanced users only! Adding such a callback to a [`Window`](class_window.md) node will override its default implementation, which can introduce bugs.

[^virtual]: 本方法通常需要用户覆盖才能生效。
[^const]: 本方法无副作用，不会修改该实例的任何成员变量。
[^vararg]: 本方法除了能接受在此处描述的参数外，还能够继续接受任意数量的参数。
[^constructor]: 本方法用于构造某个类型。
[^static]: 调用本方法无需实例，可直接使用类名进行调用。
[^operator]: 本方法描述的是使用本类型作为左操作数的有效运算符。
[^bitfield]: 这个值是由下列位标志构成位掩码的整数。
[^void]: 无返回值。
