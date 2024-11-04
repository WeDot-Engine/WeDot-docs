<!-- ⚠ 请勿编辑本文件 ⚠ -->
<!-- 本文档使用脚本从 WeDot 引擎源码仓库生成。 -->
<!-- 生成脚本：https://github.com/WeDot-Engine/WeDot/tree/4.3/doc/tools/make_md.py； -->
<!-- 原文件：https://github.com/WeDot-Engine/WeDot/tree/4.3/doc/classes/NativeMenu.xml。 -->

<div id="_class_nativemenu"></div>

# NativeMenu

**继承：** [`Object`](class_object.md)

A server interface for OS native menus.

## 描述

**NativeMenu** handles low-level access to the OS native global menu bar and popup menus.

 **Note:** This is low-level API, consider using [`MenuBar`](class_menubar.md) with [`MenuBar.prefer_global_menu`](#class_menubar_property_prefer_global_menu) set to `true`, and [`PopupMenu`](class_popupmenu.md) with [`PopupMenu.prefer_native_menu`](#class_popupmenu_property_prefer_native_menu) set to `true`.

To create a menu, use [`create_menu`](#class_nativemenu_method_create_menu), add menu items using `add_*_item` methods. To remove a menu, use [`free_menu`](#class_nativemenu_method_free_menu).

```

    var menu
    
    func _menu_callback(item_id):
        if item_id == "ITEM_CUT":
            cut()
        elif item_id == "ITEM_COPY":
            copy()
        elif item_id == "ITEM_PASTE":
            paste()
    
    func _enter_tree():
        # Create new menu and add items:
        menu = NativeMenu.create_menu()
        NativeMenu.add_item(menu, "Cut", _menu_callback, Callable(), "ITEM_CUT")
        NativeMenu.add_item(menu, "Copy", _menu_callback, Callable(), "ITEM_COPY")
        NativeMenu.add_separator(menu)
        NativeMenu.add_item(menu, "Paste", _menu_callback, Callable(), "ITEM_PASTE")
    
    func _on_button_pressed():
        # Show popup menu at mouse position:
        NativeMenu.popup(menu, DisplayServer.mouse_get_position())
    
    func _exit_tree():
        # Remove menu when it's no longer needed:
        NativeMenu.free_menu(menu)
```



## 方法

| [`int`](class_int.md)             | [`add_check_item`](#class_nativemenu_method_add_check_item) ( rid: [`RID`](class_rid.md), label: [`String`](class_string.md), callback: [`Callable`](class_callable.md) = Callable(), key_callback: [`Callable`](class_callable.md) = Callable(), tag: [`Variant`](class_variant.md) = null, accelerator: [Key](#enum_@globalscope_key) = 0, index: [`int`](class_int.md) = -1 )                                                                                    |
| [`int`](class_int.md)             | [`add_icon_check_item`](#class_nativemenu_method_add_icon_check_item) ( rid: [`RID`](class_rid.md), icon: [`Texture2D`](class_texture2d.md), label: [`String`](class_string.md), callback: [`Callable`](class_callable.md) = Callable(), key_callback: [`Callable`](class_callable.md) = Callable(), tag: [`Variant`](class_variant.md) = null, accelerator: [Key](#enum_@globalscope_key) = 0, index: [`int`](class_int.md) = -1 )                                 |
| [`int`](class_int.md)             | [`add_icon_item`](#class_nativemenu_method_add_icon_item) ( rid: [`RID`](class_rid.md), icon: [`Texture2D`](class_texture2d.md), label: [`String`](class_string.md), callback: [`Callable`](class_callable.md) = Callable(), key_callback: [`Callable`](class_callable.md) = Callable(), tag: [`Variant`](class_variant.md) = null, accelerator: [Key](#enum_@globalscope_key) = 0, index: [`int`](class_int.md) = -1 )                                             |
| [`int`](class_int.md)             | [`add_icon_radio_check_item`](#class_nativemenu_method_add_icon_radio_check_item) ( rid: [`RID`](class_rid.md), icon: [`Texture2D`](class_texture2d.md), label: [`String`](class_string.md), callback: [`Callable`](class_callable.md) = Callable(), key_callback: [`Callable`](class_callable.md) = Callable(), tag: [`Variant`](class_variant.md) = null, accelerator: [Key](#enum_@globalscope_key) = 0, index: [`int`](class_int.md) = -1 )                     |
| [`int`](class_int.md)             | [`add_item`](#class_nativemenu_method_add_item) ( rid: [`RID`](class_rid.md), label: [`String`](class_string.md), callback: [`Callable`](class_callable.md) = Callable(), key_callback: [`Callable`](class_callable.md) = Callable(), tag: [`Variant`](class_variant.md) = null, accelerator: [Key](#enum_@globalscope_key) = 0, index: [`int`](class_int.md) = -1 )                                                                                                |
| [`int`](class_int.md)             | [`add_multistate_item`](#class_nativemenu_method_add_multistate_item) ( rid: [`RID`](class_rid.md), label: [`String`](class_string.md), max_states: [`int`](class_int.md), default_state: [`int`](class_int.md), callback: [`Callable`](class_callable.md) = Callable(), key_callback: [`Callable`](class_callable.md) = Callable(), tag: [`Variant`](class_variant.md) = null, accelerator: [Key](#enum_@globalscope_key) = 0, index: [`int`](class_int.md) = -1 ) |
| [`int`](class_int.md)             | [`add_radio_check_item`](#class_nativemenu_method_add_radio_check_item) ( rid: [`RID`](class_rid.md), label: [`String`](class_string.md), callback: [`Callable`](class_callable.md) = Callable(), key_callback: [`Callable`](class_callable.md) = Callable(), tag: [`Variant`](class_variant.md) = null, accelerator: [Key](#enum_@globalscope_key) = 0, index: [`int`](class_int.md) = -1 )                                                                        |
| [`int`](class_int.md)             | [`add_separator`](#class_nativemenu_method_add_separator) ( rid: [`RID`](class_rid.md), index: [`int`](class_int.md) = -1 )                                                                                                                                                                                                                                                                                                                                         |
| [`int`](class_int.md)             | [`add_submenu_item`](#class_nativemenu_method_add_submenu_item) ( rid: [`RID`](class_rid.md), label: [`String`](class_string.md), submenu_rid: [`RID`](class_rid.md), tag: [`Variant`](class_variant.md) = null, index: [`int`](class_int.md) = -1 )                                                                                                                                                                                                                |
| `void`                            | [`clear`](#class_nativemenu_method_clear) ( rid: [`RID`](class_rid.md) )                                                                                                                                                                                                                                                                                                                                                                                            |
| [`RID`](class_rid.md)             | [`create_menu`](#class_nativemenu_method_create_menu) ( )                                                                                                                                                                                                                                                                                                                                                                                                           |
| [`int`](class_int.md)             | [`find_item_index_with_submenu`](#class_nativemenu_method_find_item_index_with_submenu) ( rid: [`RID`](class_rid.md), submenu_rid: [`RID`](class_rid.md) ) const[^const]                                                                                                                                                                                                                                                                                            |
| [`int`](class_int.md)             | [`find_item_index_with_tag`](#class_nativemenu_method_find_item_index_with_tag) ( rid: [`RID`](class_rid.md), tag: [`Variant`](class_variant.md) ) const[^const]                                                                                                                                                                                                                                                                                                    |
| [`int`](class_int.md)             | [`find_item_index_with_text`](#class_nativemenu_method_find_item_index_with_text) ( rid: [`RID`](class_rid.md), text: [`String`](class_string.md) ) const[^const]                                                                                                                                                                                                                                                                                                   |
| `void`                            | [`free_menu`](#class_nativemenu_method_free_menu) ( rid: [`RID`](class_rid.md) )                                                                                                                                                                                                                                                                                                                                                                                    |
| [Key](#enum_@globalscope_key)     | [`get_item_accelerator`](#class_nativemenu_method_get_item_accelerator) ( rid: [`RID`](class_rid.md), idx: [`int`](class_int.md) ) const[^const]                                                                                                                                                                                                                                                                                                                    |
| [`Callable`](class_callable.md)   | [`get_item_callback`](#class_nativemenu_method_get_item_callback) ( rid: [`RID`](class_rid.md), idx: [`int`](class_int.md) ) const[^const]                                                                                                                                                                                                                                                                                                                          |
| [`int`](class_int.md)             | [`get_item_count`](#class_nativemenu_method_get_item_count) ( rid: [`RID`](class_rid.md) ) const[^const]                                                                                                                                                                                                                                                                                                                                                            |
| [`Texture2D`](class_texture2d.md) | [`get_item_icon`](#class_nativemenu_method_get_item_icon) ( rid: [`RID`](class_rid.md), idx: [`int`](class_int.md) ) const[^const]                                                                                                                                                                                                                                                                                                                                  |
| [`int`](class_int.md)             | [`get_item_indentation_level`](#class_nativemenu_method_get_item_indentation_level) ( rid: [`RID`](class_rid.md), idx: [`int`](class_int.md) ) const[^const]                                                                                                                                                                                                                                                                                                        |
| [`Callable`](class_callable.md)   | [`get_item_key_callback`](#class_nativemenu_method_get_item_key_callback) ( rid: [`RID`](class_rid.md), idx: [`int`](class_int.md) ) const[^const]                                                                                                                                                                                                                                                                                                                  |
| [`int`](class_int.md)             | [`get_item_max_states`](#class_nativemenu_method_get_item_max_states) ( rid: [`RID`](class_rid.md), idx: [`int`](class_int.md) ) const[^const]                                                                                                                                                                                                                                                                                                                      |
| [`int`](class_int.md)             | [`get_item_state`](#class_nativemenu_method_get_item_state) ( rid: [`RID`](class_rid.md), idx: [`int`](class_int.md) ) const[^const]                                                                                                                                                                                                                                                                                                                                |
| [`RID`](class_rid.md)             | [`get_item_submenu`](#class_nativemenu_method_get_item_submenu) ( rid: [`RID`](class_rid.md), idx: [`int`](class_int.md) ) const[^const]                                                                                                                                                                                                                                                                                                                            |
| [`Variant`](class_variant.md)     | [`get_item_tag`](#class_nativemenu_method_get_item_tag) ( rid: [`RID`](class_rid.md), idx: [`int`](class_int.md) ) const[^const]                                                                                                                                                                                                                                                                                                                                    |
| [`String`](class_string.md)       | [`get_item_text`](#class_nativemenu_method_get_item_text) ( rid: [`RID`](class_rid.md), idx: [`int`](class_int.md) ) const[^const]                                                                                                                                                                                                                                                                                                                                  |
| [`String`](class_string.md)       | [`get_item_tooltip`](#class_nativemenu_method_get_item_tooltip) ( rid: [`RID`](class_rid.md), idx: [`int`](class_int.md) ) const[^const]                                                                                                                                                                                                                                                                                                                            |
| [`float`](class_float.md)         | [`get_minimum_width`](#class_nativemenu_method_get_minimum_width) ( rid: [`RID`](class_rid.md) ) const[^const]                                                                                                                                                                                                                                                                                                                                                      |
| [`Callable`](class_callable.md)   | [`get_popup_close_callback`](#class_nativemenu_method_get_popup_close_callback) ( rid: [`RID`](class_rid.md) ) const[^const]                                                                                                                                                                                                                                                                                                                                        |
| [`Callable`](class_callable.md)   | [`get_popup_open_callback`](#class_nativemenu_method_get_popup_open_callback) ( rid: [`RID`](class_rid.md) ) const[^const]                                                                                                                                                                                                                                                                                                                                          |
| [`Vector2`](class_vector2.md)     | [`get_size`](#class_nativemenu_method_get_size) ( rid: [`RID`](class_rid.md) ) const[^const]                                                                                                                                                                                                                                                                                                                                                                        |
| [`RID`](class_rid.md)             | [`get_system_menu`](#class_nativemenu_method_get_system_menu) ( menu_id: [SystemMenus](#enum_nativemenu_systemmenus) ) const[^const]                                                                                                                                                                                                                                                                                                                                |
| [`String`](class_string.md)       | [`get_system_menu_name`](#class_nativemenu_method_get_system_menu_name) ( menu_id: [SystemMenus](#enum_nativemenu_systemmenus) ) const[^const]                                                                                                                                                                                                                                                                                                                      |
| [`bool`](class_bool.md)           | [`has_feature`](#class_nativemenu_method_has_feature) ( feature: [Feature](#enum_nativemenu_feature) ) const[^const]                                                                                                                                                                                                                                                                                                                                                |
| [`bool`](class_bool.md)           | [`has_menu`](#class_nativemenu_method_has_menu) ( rid: [`RID`](class_rid.md) ) const[^const]                                                                                                                                                                                                                                                                                                                                                                        |
| [`bool`](class_bool.md)           | [`has_system_menu`](#class_nativemenu_method_has_system_menu) ( menu_id: [SystemMenus](#enum_nativemenu_systemmenus) ) const[^const]                                                                                                                                                                                                                                                                                                                                |
| [`bool`](class_bool.md)           | [`is_item_checkable`](#class_nativemenu_method_is_item_checkable) ( rid: [`RID`](class_rid.md), idx: [`int`](class_int.md) ) const[^const]                                                                                                                                                                                                                                                                                                                          |
| [`bool`](class_bool.md)           | [`is_item_checked`](#class_nativemenu_method_is_item_checked) ( rid: [`RID`](class_rid.md), idx: [`int`](class_int.md) ) const[^const]                                                                                                                                                                                                                                                                                                                              |
| [`bool`](class_bool.md)           | [`is_item_disabled`](#class_nativemenu_method_is_item_disabled) ( rid: [`RID`](class_rid.md), idx: [`int`](class_int.md) ) const[^const]                                                                                                                                                                                                                                                                                                                            |
| [`bool`](class_bool.md)           | [`is_item_hidden`](#class_nativemenu_method_is_item_hidden) ( rid: [`RID`](class_rid.md), idx: [`int`](class_int.md) ) const[^const]                                                                                                                                                                                                                                                                                                                                |
| [`bool`](class_bool.md)           | [`is_item_radio_checkable`](#class_nativemenu_method_is_item_radio_checkable) ( rid: [`RID`](class_rid.md), idx: [`int`](class_int.md) ) const[^const]                                                                                                                                                                                                                                                                                                              |
| [`bool`](class_bool.md)           | [`is_opened`](#class_nativemenu_method_is_opened) ( rid: [`RID`](class_rid.md) ) const[^const]                                                                                                                                                                                                                                                                                                                                                                      |
| [`bool`](class_bool.md)           | [`is_system_menu`](#class_nativemenu_method_is_system_menu) ( rid: [`RID`](class_rid.md) ) const[^const]                                                                                                                                                                                                                                                                                                                                                            |
| `void`                            | [`popup`](#class_nativemenu_method_popup) ( rid: [`RID`](class_rid.md), position: [`Vector2i`](class_vector2i.md) )                                                                                                                                                                                                                                                                                                                                                 |
| `void`                            | [`remove_item`](#class_nativemenu_method_remove_item) ( rid: [`RID`](class_rid.md), idx: [`int`](class_int.md) )                                                                                                                                                                                                                                                                                                                                                    |
| `void`                            | [`set_interface_direction`](#class_nativemenu_method_set_interface_direction) ( rid: [`RID`](class_rid.md), is_rtl: [`bool`](class_bool.md) )                                                                                                                                                                                                                                                                                                                       |
| `void`                            | [`set_item_accelerator`](#class_nativemenu_method_set_item_accelerator) ( rid: [`RID`](class_rid.md), idx: [`int`](class_int.md), keycode: [Key](#enum_@globalscope_key) )                                                                                                                                                                                                                                                                                          |
| `void`                            | [`set_item_callback`](#class_nativemenu_method_set_item_callback) ( rid: [`RID`](class_rid.md), idx: [`int`](class_int.md), callback: [`Callable`](class_callable.md) )                                                                                                                                                                                                                                                                                             |
| `void`                            | [`set_item_checkable`](#class_nativemenu_method_set_item_checkable) ( rid: [`RID`](class_rid.md), idx: [`int`](class_int.md), checkable: [`bool`](class_bool.md) )                                                                                                                                                                                                                                                                                                  |
| `void`                            | [`set_item_checked`](#class_nativemenu_method_set_item_checked) ( rid: [`RID`](class_rid.md), idx: [`int`](class_int.md), checked: [`bool`](class_bool.md) )                                                                                                                                                                                                                                                                                                        |
| `void`                            | [`set_item_disabled`](#class_nativemenu_method_set_item_disabled) ( rid: [`RID`](class_rid.md), idx: [`int`](class_int.md), disabled: [`bool`](class_bool.md) )                                                                                                                                                                                                                                                                                                     |
| `void`                            | [`set_item_hidden`](#class_nativemenu_method_set_item_hidden) ( rid: [`RID`](class_rid.md), idx: [`int`](class_int.md), hidden: [`bool`](class_bool.md) )                                                                                                                                                                                                                                                                                                           |
| `void`                            | [`set_item_hover_callbacks`](#class_nativemenu_method_set_item_hover_callbacks) ( rid: [`RID`](class_rid.md), idx: [`int`](class_int.md), callback: [`Callable`](class_callable.md) )                                                                                                                                                                                                                                                                               |
| `void`                            | [`set_item_icon`](#class_nativemenu_method_set_item_icon) ( rid: [`RID`](class_rid.md), idx: [`int`](class_int.md), icon: [`Texture2D`](class_texture2d.md) )                                                                                                                                                                                                                                                                                                       |
| `void`                            | [`set_item_indentation_level`](#class_nativemenu_method_set_item_indentation_level) ( rid: [`RID`](class_rid.md), idx: [`int`](class_int.md), level: [`int`](class_int.md) )                                                                                                                                                                                                                                                                                        |
| `void`                            | [`set_item_key_callback`](#class_nativemenu_method_set_item_key_callback) ( rid: [`RID`](class_rid.md), idx: [`int`](class_int.md), key_callback: [`Callable`](class_callable.md) )                                                                                                                                                                                                                                                                                 |
| `void`                            | [`set_item_max_states`](#class_nativemenu_method_set_item_max_states) ( rid: [`RID`](class_rid.md), idx: [`int`](class_int.md), max_states: [`int`](class_int.md) )                                                                                                                                                                                                                                                                                                 |
| `void`                            | [`set_item_radio_checkable`](#class_nativemenu_method_set_item_radio_checkable) ( rid: [`RID`](class_rid.md), idx: [`int`](class_int.md), checkable: [`bool`](class_bool.md) )                                                                                                                                                                                                                                                                                      |
| `void`                            | [`set_item_state`](#class_nativemenu_method_set_item_state) ( rid: [`RID`](class_rid.md), idx: [`int`](class_int.md), state: [`int`](class_int.md) )                                                                                                                                                                                                                                                                                                                |
| `void`                            | [`set_item_submenu`](#class_nativemenu_method_set_item_submenu) ( rid: [`RID`](class_rid.md), idx: [`int`](class_int.md), submenu_rid: [`RID`](class_rid.md) )                                                                                                                                                                                                                                                                                                      |
| `void`                            | [`set_item_tag`](#class_nativemenu_method_set_item_tag) ( rid: [`RID`](class_rid.md), idx: [`int`](class_int.md), tag: [`Variant`](class_variant.md) )                                                                                                                                                                                                                                                                                                              |
| `void`                            | [`set_item_text`](#class_nativemenu_method_set_item_text) ( rid: [`RID`](class_rid.md), idx: [`int`](class_int.md), text: [`String`](class_string.md) )                                                                                                                                                                                                                                                                                                             |
| `void`                            | [`set_item_tooltip`](#class_nativemenu_method_set_item_tooltip) ( rid: [`RID`](class_rid.md), idx: [`int`](class_int.md), tooltip: [`String`](class_string.md) )                                                                                                                                                                                                                                                                                                    |
| `void`                            | [`set_minimum_width`](#class_nativemenu_method_set_minimum_width) ( rid: [`RID`](class_rid.md), width: [`float`](class_float.md) )                                                                                                                                                                                                                                                                                                                                  |
| `void`                            | [`set_popup_close_callback`](#class_nativemenu_method_set_popup_close_callback) ( rid: [`RID`](class_rid.md), callback: [`Callable`](class_callable.md) )                                                                                                                                                                                                                                                                                                           |
| `void`                            | [`set_popup_open_callback`](#class_nativemenu_method_set_popup_open_callback) ( rid: [`RID`](class_rid.md), callback: [`Callable`](class_callable.md) )                                                                                                                                                                                                                                                                                                             |

<!-- rst-class:: classref-section-separator -->

---

## 枚举

<div id="_class_enum_nativemenu_feature"></div>

enum **Feature**: <div id="enum_nativemenu_feature"></div>

<div id="_class_nativemenu_constant_feature_global_menu"></div>

[Feature](#enum_nativemenu_feature) **FEATURE_GLOBAL_MENU** = ``0``

**NativeMenu** supports native global main menu.

<div id="_class_nativemenu_constant_feature_popup_menu"></div>

[Feature](#enum_nativemenu_feature) **FEATURE_POPUP_MENU** = ``1``

**NativeMenu** supports native popup menus.

<div id="_class_nativemenu_constant_feature_open_close_callback"></div>

[Feature](#enum_nativemenu_feature) **FEATURE_OPEN_CLOSE_CALLBACK** = ``2``

**NativeMenu** supports menu open and close callbacks.

<div id="_class_nativemenu_constant_feature_hover_callback"></div>

[Feature](#enum_nativemenu_feature) **FEATURE_HOVER_CALLBACK** = ``3``

**NativeMenu** supports menu item hover callback.

<div id="_class_nativemenu_constant_feature_key_callback"></div>

[Feature](#enum_nativemenu_feature) **FEATURE_KEY_CALLBACK** = ``4``

**NativeMenu** supports menu item accelerator/key callback.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_enum_nativemenu_systemmenus"></div>

enum **SystemMenus**: <div id="enum_nativemenu_systemmenus"></div>

<div id="_class_nativemenu_constant_invalid_menu_id"></div>

[SystemMenus](#enum_nativemenu_systemmenus) **INVALID_MENU_ID** = ``0``

Invalid special system menu ID.

<div id="_class_nativemenu_constant_main_menu_id"></div>

[SystemMenus](#enum_nativemenu_systemmenus) **MAIN_MENU_ID** = ``1``

Global main menu ID.

<div id="_class_nativemenu_constant_application_menu_id"></div>

[SystemMenus](#enum_nativemenu_systemmenus) **APPLICATION_MENU_ID** = ``2``

Application (first menu after "Apple" menu on macOS) menu ID.

<div id="_class_nativemenu_constant_window_menu_id"></div>

[SystemMenus](#enum_nativemenu_systemmenus) **WINDOW_MENU_ID** = ``3``

"Window" menu ID (on macOS this menu includes standard window control items and a list of open windows).

<div id="_class_nativemenu_constant_help_menu_id"></div>

[SystemMenus](#enum_nativemenu_systemmenus) **HELP_MENU_ID** = ``4``

"Help" menu ID (on macOS this menu includes help search bar).

<div id="_class_nativemenu_constant_dock_menu_id"></div>

[SystemMenus](#enum_nativemenu_systemmenus) **DOCK_MENU_ID** = ``5``

Dock icon right-click menu ID (on macOS this menu include standard application control items and a list of open windows).

<!-- rst-class:: classref-section-separator -->

---

## 方法说明

<div id="_class_nativemenu_method_add_check_item"></div>

[`int`](class_int.md) **add_check_item** ( rid: [`RID`](class_rid.md), label: [`String`](class_string.md), callback: [`Callable`](class_callable.md) = Callable(), key_callback: [`Callable`](class_callable.md) = Callable(), tag: [`Variant`](class_variant.md) = null, accelerator: [Key](#enum_@globalscope_key) = 0, index: [`int`](class_int.md) = -1 )<div id="class_nativemenu_method_add_check_item"></div>

Adds a new checkable item with text `label` to the global menu `rid`.

Returns index of the inserted item, it's not guaranteed to be the same as `index` value.

An `accelerator` can optionally be defined, which is a keyboard shortcut that can be pressed to trigger the menu button even if it's not currently open. The `accelerator` is generally a combination of [KeyModifierMask](#enum_@globalscope_keymodifiermask) s and [Key](#enum_@globalscope_key) s using bitwise OR such as `KEY_MASK_CTRL | KEY_A` (<i class="fa fa-gamepad"></i>`Ctrl + A`).

 **Note:** The `callback` and `key_callback` Callables need to accept exactly one Variant parameter, the parameter passed to the Callables will be the value passed to `tag`.

 **Note:** This method is implemented on macOS and Windows.

 **Note:** On Windows, `accelerator` and `key_callback` are ignored.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_nativemenu_method_add_icon_check_item"></div>

[`int`](class_int.md) **add_icon_check_item** ( rid: [`RID`](class_rid.md), icon: [`Texture2D`](class_texture2d.md), label: [`String`](class_string.md), callback: [`Callable`](class_callable.md) = Callable(), key_callback: [`Callable`](class_callable.md) = Callable(), tag: [`Variant`](class_variant.md) = null, accelerator: [Key](#enum_@globalscope_key) = 0, index: [`int`](class_int.md) = -1 )<div id="class_nativemenu_method_add_icon_check_item"></div>

Adds a new checkable item with text `label` and icon `icon` to the global menu `rid`.

Returns index of the inserted item, it's not guaranteed to be the same as `index` value.

An `accelerator` can optionally be defined, which is a keyboard shortcut that can be pressed to trigger the menu button even if it's not currently open. The `accelerator` is generally a combination of [KeyModifierMask](#enum_@globalscope_keymodifiermask) s and [Key](#enum_@globalscope_key) s using bitwise OR such as `KEY_MASK_CTRL | KEY_A` (<i class="fa fa-gamepad"></i>`Ctrl + A`).

 **Note:** The `callback` and `key_callback` Callables need to accept exactly one Variant parameter, the parameter passed to the Callables will be the value passed to `tag`.

 **Note:** This method is implemented on macOS and Windows.

 **Note:** On Windows, `accelerator` and `key_callback` are ignored.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_nativemenu_method_add_icon_item"></div>

[`int`](class_int.md) **add_icon_item** ( rid: [`RID`](class_rid.md), icon: [`Texture2D`](class_texture2d.md), label: [`String`](class_string.md), callback: [`Callable`](class_callable.md) = Callable(), key_callback: [`Callable`](class_callable.md) = Callable(), tag: [`Variant`](class_variant.md) = null, accelerator: [Key](#enum_@globalscope_key) = 0, index: [`int`](class_int.md) = -1 )<div id="class_nativemenu_method_add_icon_item"></div>

Adds a new item with text `label` and icon `icon` to the global menu `rid`.

Returns index of the inserted item, it's not guaranteed to be the same as `index` value.

An `accelerator` can optionally be defined, which is a keyboard shortcut that can be pressed to trigger the menu button even if it's not currently open. The `accelerator` is generally a combination of [KeyModifierMask](#enum_@globalscope_keymodifiermask) s and [Key](#enum_@globalscope_key) s using bitwise OR such as `KEY_MASK_CTRL | KEY_A` (<i class="fa fa-gamepad"></i>`Ctrl + A`).

 **Note:** The `callback` and `key_callback` Callables need to accept exactly one Variant parameter, the parameter passed to the Callables will be the value passed to `tag`.

 **Note:** This method is implemented on macOS and Windows.

 **Note:** On Windows, `accelerator` and `key_callback` are ignored.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_nativemenu_method_add_icon_radio_check_item"></div>

[`int`](class_int.md) **add_icon_radio_check_item** ( rid: [`RID`](class_rid.md), icon: [`Texture2D`](class_texture2d.md), label: [`String`](class_string.md), callback: [`Callable`](class_callable.md) = Callable(), key_callback: [`Callable`](class_callable.md) = Callable(), tag: [`Variant`](class_variant.md) = null, accelerator: [Key](#enum_@globalscope_key) = 0, index: [`int`](class_int.md) = -1 )<div id="class_nativemenu_method_add_icon_radio_check_item"></div>

Adds a new radio-checkable item with text `label` and icon `icon` to the global menu `rid`.

Returns index of the inserted item, it's not guaranteed to be the same as `index` value.

An `accelerator` can optionally be defined, which is a keyboard shortcut that can be pressed to trigger the menu button even if it's not currently open. The `accelerator` is generally a combination of [KeyModifierMask](#enum_@globalscope_keymodifiermask) s and [Key](#enum_@globalscope_key) s using bitwise OR such as `KEY_MASK_CTRL | KEY_A` (<i class="fa fa-gamepad"></i>`Ctrl + A`).

 **Note:** Radio-checkable items just display a checkmark, but don't have any built-in checking behavior and must be checked/unchecked manually. See [`set_item_checked`](#class_nativemenu_method_set_item_checked) for more info on how to control it.

 **Note:** The `callback` and `key_callback` Callables need to accept exactly one Variant parameter, the parameter passed to the Callables will be the value passed to `tag`.

 **Note:** This method is implemented on macOS and Windows.

 **Note:** On Windows, `accelerator` and `key_callback` are ignored.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_nativemenu_method_add_item"></div>

[`int`](class_int.md) **add_item** ( rid: [`RID`](class_rid.md), label: [`String`](class_string.md), callback: [`Callable`](class_callable.md) = Callable(), key_callback: [`Callable`](class_callable.md) = Callable(), tag: [`Variant`](class_variant.md) = null, accelerator: [Key](#enum_@globalscope_key) = 0, index: [`int`](class_int.md) = -1 )<div id="class_nativemenu_method_add_item"></div>

Adds a new item with text `label` to the global menu `rid`.

Returns index of the inserted item, it's not guaranteed to be the same as `index` value.

An `accelerator` can optionally be defined, which is a keyboard shortcut that can be pressed to trigger the menu button even if it's not currently open. The `accelerator` is generally a combination of [KeyModifierMask](#enum_@globalscope_keymodifiermask) s and [Key](#enum_@globalscope_key) s using bitwise OR such as `KEY_MASK_CTRL | KEY_A` (<i class="fa fa-gamepad"></i>`Ctrl + A`).

 **Note:** The `callback` and `key_callback` Callables need to accept exactly one Variant parameter, the parameter passed to the Callables will be the value passed to `tag`.

 **Note:** This method is implemented on macOS and Windows.

 **Note:** On Windows, `accelerator` and `key_callback` are ignored.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_nativemenu_method_add_multistate_item"></div>

[`int`](class_int.md) **add_multistate_item** ( rid: [`RID`](class_rid.md), label: [`String`](class_string.md), max_states: [`int`](class_int.md), default_state: [`int`](class_int.md), callback: [`Callable`](class_callable.md) = Callable(), key_callback: [`Callable`](class_callable.md) = Callable(), tag: [`Variant`](class_variant.md) = null, accelerator: [Key](#enum_@globalscope_key) = 0, index: [`int`](class_int.md) = -1 )<div id="class_nativemenu_method_add_multistate_item"></div>

Adds a new item with text `label` to the global menu `rid`.

Contrarily to normal binary items, multistate items can have more than two states, as defined by `max_states`. Each press or activate of the item will increase the state by one. The default value is defined by `default_state`.

Returns index of the inserted item, it's not guaranteed to be the same as `index` value.

An `accelerator` can optionally be defined, which is a keyboard shortcut that can be pressed to trigger the menu button even if it's not currently open. The `accelerator` is generally a combination of [KeyModifierMask](#enum_@globalscope_keymodifiermask) s and [Key](#enum_@globalscope_key) s using bitwise OR such as `KEY_MASK_CTRL | KEY_A` (<i class="fa fa-gamepad"></i>`Ctrl + A`).

 **Note:** By default, there's no indication of the current item state, it should be changed manually.

 **Note:** The `callback` and `key_callback` Callables need to accept exactly one Variant parameter, the parameter passed to the Callables will be the value passed to `tag`.

 **Note:** This method is implemented on macOS and Windows.

 **Note:** On Windows, `accelerator` and `key_callback` are ignored.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_nativemenu_method_add_radio_check_item"></div>

[`int`](class_int.md) **add_radio_check_item** ( rid: [`RID`](class_rid.md), label: [`String`](class_string.md), callback: [`Callable`](class_callable.md) = Callable(), key_callback: [`Callable`](class_callable.md) = Callable(), tag: [`Variant`](class_variant.md) = null, accelerator: [Key](#enum_@globalscope_key) = 0, index: [`int`](class_int.md) = -1 )<div id="class_nativemenu_method_add_radio_check_item"></div>

Adds a new radio-checkable item with text `label` to the global menu `rid`.

Returns index of the inserted item, it's not guaranteed to be the same as `index` value.

An `accelerator` can optionally be defined, which is a keyboard shortcut that can be pressed to trigger the menu button even if it's not currently open. The `accelerator` is generally a combination of [KeyModifierMask](#enum_@globalscope_keymodifiermask) s and [Key](#enum_@globalscope_key) s using bitwise OR such as `KEY_MASK_CTRL | KEY_A` (<i class="fa fa-gamepad"></i>`Ctrl + A`).

 **Note:** Radio-checkable items just display a checkmark, but don't have any built-in checking behavior and must be checked/unchecked manually. See [`set_item_checked`](#class_nativemenu_method_set_item_checked) for more info on how to control it.

 **Note:** The `callback` and `key_callback` Callables need to accept exactly one Variant parameter, the parameter passed to the Callables will be the value passed to `tag`.

 **Note:** This method is implemented on macOS and Windows.

 **Note:** On Windows, `accelerator` and `key_callback` are ignored.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_nativemenu_method_add_separator"></div>

[`int`](class_int.md) **add_separator** ( rid: [`RID`](class_rid.md), index: [`int`](class_int.md) = -1 )<div id="class_nativemenu_method_add_separator"></div>

Adds a separator between items to the global menu `rid`. Separators also occupy an index.

Returns index of the inserted item, it's not guaranteed to be the same as `index` value.

 **Note:** This method is implemented on macOS and Windows.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_nativemenu_method_add_submenu_item"></div>

[`int`](class_int.md) **add_submenu_item** ( rid: [`RID`](class_rid.md), label: [`String`](class_string.md), submenu_rid: [`RID`](class_rid.md), tag: [`Variant`](class_variant.md) = null, index: [`int`](class_int.md) = -1 )<div id="class_nativemenu_method_add_submenu_item"></div>

Adds an item that will act as a submenu of the global menu `rid`. The `submenu_rid` argument is the RID of the global menu that will be shown when the item is clicked.

Returns index of the inserted item, it's not guaranteed to be the same as `index` value.

 **Note:** This method is implemented on macOS and Windows.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_nativemenu_method_clear"></div>

`void` **clear** ( rid: [`RID`](class_rid.md) )<div id="class_nativemenu_method_clear"></div>

Removes all items from the global menu `rid`.

 **Note:** This method is implemented on macOS and Windows.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_nativemenu_method_create_menu"></div>

[`RID`](class_rid.md) **create_menu** ( )<div id="class_nativemenu_method_create_menu"></div>

Creates a new global menu object.

 **Note:** This method is implemented on macOS and Windows.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_nativemenu_method_find_item_index_with_submenu"></div>

[`int`](class_int.md) **find_item_index_with_submenu** ( rid: [`RID`](class_rid.md), submenu_rid: [`RID`](class_rid.md) ) const[^const]<div id="class_nativemenu_method_find_item_index_with_submenu"></div>

Returns the index of the item with the submenu specified by `submenu_rid`. Indices are automatically assigned to each item by the engine, and cannot be set manually.

 **Note:** This method is implemented on macOS and Windows.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_nativemenu_method_find_item_index_with_tag"></div>

[`int`](class_int.md) **find_item_index_with_tag** ( rid: [`RID`](class_rid.md), tag: [`Variant`](class_variant.md) ) const[^const]<div id="class_nativemenu_method_find_item_index_with_tag"></div>

Returns the index of the item with the specified `tag`. Indices are automatically assigned to each item by the engine, and cannot be set manually.

 **Note:** This method is implemented on macOS and Windows.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_nativemenu_method_find_item_index_with_text"></div>

[`int`](class_int.md) **find_item_index_with_text** ( rid: [`RID`](class_rid.md), text: [`String`](class_string.md) ) const[^const]<div id="class_nativemenu_method_find_item_index_with_text"></div>

Returns the index of the item with the specified `text`. Indices are automatically assigned to each item by the engine, and cannot be set manually.

 **Note:** This method is implemented on macOS and Windows.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_nativemenu_method_free_menu"></div>

`void` **free_menu** ( rid: [`RID`](class_rid.md) )<div id="class_nativemenu_method_free_menu"></div>

Frees a global menu object created by this **NativeMenu**.

 **Note:** This method is implemented on macOS and Windows.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_nativemenu_method_get_item_accelerator"></div>

[Key](#enum_@globalscope_key) **get_item_accelerator** ( rid: [`RID`](class_rid.md), idx: [`int`](class_int.md) ) const[^const]<div id="class_nativemenu_method_get_item_accelerator"></div>

Returns the accelerator of the item at index `idx`. Accelerators are special combinations of keys that activate the item, no matter which control is focused.

 **Note:** This method is implemented only on macOS.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_nativemenu_method_get_item_callback"></div>

[`Callable`](class_callable.md) **get_item_callback** ( rid: [`RID`](class_rid.md), idx: [`int`](class_int.md) ) const[^const]<div id="class_nativemenu_method_get_item_callback"></div>

Returns the callback of the item at index `idx`.

 **Note:** This method is implemented on macOS and Windows.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_nativemenu_method_get_item_count"></div>

[`int`](class_int.md) **get_item_count** ( rid: [`RID`](class_rid.md) ) const[^const]<div id="class_nativemenu_method_get_item_count"></div>

Returns number of items in the global menu `rid`.

 **Note:** This method is implemented on macOS and Windows.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_nativemenu_method_get_item_icon"></div>

[`Texture2D`](class_texture2d.md) **get_item_icon** ( rid: [`RID`](class_rid.md), idx: [`int`](class_int.md) ) const[^const]<div id="class_nativemenu_method_get_item_icon"></div>

Returns the icon of the item at index `idx`.

 **Note:** This method is implemented on macOS and Windows.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_nativemenu_method_get_item_indentation_level"></div>

[`int`](class_int.md) **get_item_indentation_level** ( rid: [`RID`](class_rid.md), idx: [`int`](class_int.md) ) const[^const]<div id="class_nativemenu_method_get_item_indentation_level"></div>

Returns the horizontal offset of the item at the given `idx`.

 **Note:** This method is implemented only on macOS.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_nativemenu_method_get_item_key_callback"></div>

[`Callable`](class_callable.md) **get_item_key_callback** ( rid: [`RID`](class_rid.md), idx: [`int`](class_int.md) ) const[^const]<div id="class_nativemenu_method_get_item_key_callback"></div>

Returns the callback of the item accelerator at index `idx`.

 **Note:** This method is implemented only on macOS.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_nativemenu_method_get_item_max_states"></div>

[`int`](class_int.md) **get_item_max_states** ( rid: [`RID`](class_rid.md), idx: [`int`](class_int.md) ) const[^const]<div id="class_nativemenu_method_get_item_max_states"></div>

Returns number of states of a multistate item. See [`add_multistate_item`](#class_nativemenu_method_add_multistate_item) for details.

 **Note:** This method is implemented on macOS and Windows.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_nativemenu_method_get_item_state"></div>

[`int`](class_int.md) **get_item_state** ( rid: [`RID`](class_rid.md), idx: [`int`](class_int.md) ) const[^const]<div id="class_nativemenu_method_get_item_state"></div>

Returns the state of a multistate item. See [`add_multistate_item`](#class_nativemenu_method_add_multistate_item) for details.

 **Note:** This method is implemented on macOS and Windows.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_nativemenu_method_get_item_submenu"></div>

[`RID`](class_rid.md) **get_item_submenu** ( rid: [`RID`](class_rid.md), idx: [`int`](class_int.md) ) const[^const]<div id="class_nativemenu_method_get_item_submenu"></div>

Returns the submenu ID of the item at index `idx`. See [`add_submenu_item`](#class_nativemenu_method_add_submenu_item) for more info on how to add a submenu.

 **Note:** This method is implemented on macOS and Windows.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_nativemenu_method_get_item_tag"></div>

[`Variant`](class_variant.md) **get_item_tag** ( rid: [`RID`](class_rid.md), idx: [`int`](class_int.md) ) const[^const]<div id="class_nativemenu_method_get_item_tag"></div>

Returns the metadata of the specified item, which might be of any type. You can set it with [`set_item_tag`](#class_nativemenu_method_set_item_tag), which provides a simple way of assigning context data to items.

 **Note:** This method is implemented on macOS and Windows.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_nativemenu_method_get_item_text"></div>

[`String`](class_string.md) **get_item_text** ( rid: [`RID`](class_rid.md), idx: [`int`](class_int.md) ) const[^const]<div id="class_nativemenu_method_get_item_text"></div>

Returns the text of the item at index `idx`.

 **Note:** This method is implemented on macOS and Windows.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_nativemenu_method_get_item_tooltip"></div>

[`String`](class_string.md) **get_item_tooltip** ( rid: [`RID`](class_rid.md), idx: [`int`](class_int.md) ) const[^const]<div id="class_nativemenu_method_get_item_tooltip"></div>

Returns the tooltip associated with the specified index `idx`.

 **Note:** This method is implemented only on macOS.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_nativemenu_method_get_minimum_width"></div>

[`float`](class_float.md) **get_minimum_width** ( rid: [`RID`](class_rid.md) ) const[^const]<div id="class_nativemenu_method_get_minimum_width"></div>

Returns global menu minimum width.

 **Note:** This method is implemented only on macOS.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_nativemenu_method_get_popup_close_callback"></div>

[`Callable`](class_callable.md) **get_popup_close_callback** ( rid: [`RID`](class_rid.md) ) const[^const]<div id="class_nativemenu_method_get_popup_close_callback"></div>

Returns global menu close callback.

b]Note:** This method is implemented only on macOS.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_nativemenu_method_get_popup_open_callback"></div>

[`Callable`](class_callable.md) **get_popup_open_callback** ( rid: [`RID`](class_rid.md) ) const[^const]<div id="class_nativemenu_method_get_popup_open_callback"></div>

Returns global menu open callback.

b]Note:** This method is implemented only on macOS.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_nativemenu_method_get_size"></div>

[`Vector2`](class_vector2.md) **get_size** ( rid: [`RID`](class_rid.md) ) const[^const]<div id="class_nativemenu_method_get_size"></div>

Returns global menu size.

 **Note:** This method is implemented on macOS and Windows.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_nativemenu_method_get_system_menu"></div>

[`RID`](class_rid.md) **get_system_menu** ( menu_id: [SystemMenus](#enum_nativemenu_systemmenus) ) const[^const]<div id="class_nativemenu_method_get_system_menu"></div>

Returns RID of a special system menu.

 **Note:** This method is implemented only on macOS.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_nativemenu_method_get_system_menu_name"></div>

[`String`](class_string.md) **get_system_menu_name** ( menu_id: [SystemMenus](#enum_nativemenu_systemmenus) ) const[^const]<div id="class_nativemenu_method_get_system_menu_name"></div>

Returns readable name of a special system menu.

 **Note:** This method is implemented only on macOS.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_nativemenu_method_has_feature"></div>

[`bool`](class_bool.md) **has_feature** ( feature: [Feature](#enum_nativemenu_feature) ) const[^const]<div id="class_nativemenu_method_has_feature"></div>

Returns `true` if the specified `feature` is supported by the current **NativeMenu**, `false` otherwise.

 **Note:** This method is implemented on macOS and Windows.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_nativemenu_method_has_menu"></div>

[`bool`](class_bool.md) **has_menu** ( rid: [`RID`](class_rid.md) ) const[^const]<div id="class_nativemenu_method_has_menu"></div>

Returns `true` if `rid` is valid global menu.

 **Note:** This method is implemented on macOS and Windows.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_nativemenu_method_has_system_menu"></div>

[`bool`](class_bool.md) **has_system_menu** ( menu_id: [SystemMenus](#enum_nativemenu_systemmenus) ) const[^const]<div id="class_nativemenu_method_has_system_menu"></div>

Returns `true` if a special system menu is supported.

 **Note:** This method is implemented only on macOS.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_nativemenu_method_is_item_checkable"></div>

[`bool`](class_bool.md) **is_item_checkable** ( rid: [`RID`](class_rid.md), idx: [`int`](class_int.md) ) const[^const]<div id="class_nativemenu_method_is_item_checkable"></div>

Returns `true` if the item at index `idx` is checkable in some way, i.e. if it has a checkbox or radio button.

 **Note:** This method is implemented on macOS and Windows.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_nativemenu_method_is_item_checked"></div>

[`bool`](class_bool.md) **is_item_checked** ( rid: [`RID`](class_rid.md), idx: [`int`](class_int.md) ) const[^const]<div id="class_nativemenu_method_is_item_checked"></div>

Returns `true` if the item at index `idx` is checked.

 **Note:** This method is implemented on macOS and Windows.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_nativemenu_method_is_item_disabled"></div>

[`bool`](class_bool.md) **is_item_disabled** ( rid: [`RID`](class_rid.md), idx: [`int`](class_int.md) ) const[^const]<div id="class_nativemenu_method_is_item_disabled"></div>

Returns `true` if the item at index `idx` is disabled. When it is disabled it can't be selected, or its action invoked.

See [`set_item_disabled`](#class_nativemenu_method_set_item_disabled) for more info on how to disable an item.

 **Note:** This method is implemented on macOS and Windows.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_nativemenu_method_is_item_hidden"></div>

[`bool`](class_bool.md) **is_item_hidden** ( rid: [`RID`](class_rid.md), idx: [`int`](class_int.md) ) const[^const]<div id="class_nativemenu_method_is_item_hidden"></div>

Returns `true` if the item at index `idx` is hidden.

See [`set_item_hidden`](#class_nativemenu_method_set_item_hidden) for more info on how to hide an item.

 **Note:** This method is implemented only on macOS.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_nativemenu_method_is_item_radio_checkable"></div>

[`bool`](class_bool.md) **is_item_radio_checkable** ( rid: [`RID`](class_rid.md), idx: [`int`](class_int.md) ) const[^const]<div id="class_nativemenu_method_is_item_radio_checkable"></div>

Returns `true` if the item at index `idx` has radio button-style checkability.

 **Note:** This is purely cosmetic; you must add the logic for checking/unchecking items in radio groups.

 **Note:** This method is implemented on macOS and Windows.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_nativemenu_method_is_opened"></div>

[`bool`](class_bool.md) **is_opened** ( rid: [`RID`](class_rid.md) ) const[^const]<div id="class_nativemenu_method_is_opened"></div>

Returns `true` if the menu is currently opened.

 **Note:** This method is implemented only on macOS.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_nativemenu_method_is_system_menu"></div>

[`bool`](class_bool.md) **is_system_menu** ( rid: [`RID`](class_rid.md) ) const[^const]<div id="class_nativemenu_method_is_system_menu"></div>

Return `true` is global menu is a special system menu.

 **Note:** This method is implemented only on macOS.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_nativemenu_method_popup"></div>

`void` **popup** ( rid: [`RID`](class_rid.md), position: [`Vector2i`](class_vector2i.md) )<div id="class_nativemenu_method_popup"></div>

Shows the global menu at `position` in the screen coordinates.

 **Note:** This method is implemented on macOS and Windows.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_nativemenu_method_remove_item"></div>

`void` **remove_item** ( rid: [`RID`](class_rid.md), idx: [`int`](class_int.md) )<div id="class_nativemenu_method_remove_item"></div>

Removes the item at index `idx` from the global menu `rid`.

 **Note:** The indices of items after the removed item will be shifted by one.

 **Note:** This method is implemented on macOS and Windows.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_nativemenu_method_set_interface_direction"></div>

`void` **set_interface_direction** ( rid: [`RID`](class_rid.md), is_rtl: [`bool`](class_bool.md) )<div id="class_nativemenu_method_set_interface_direction"></div>

Sets the menu text layout direction from right-to-left if `is_rtl` is `true`.

 **Note:** This method is implemented on macOS and Windows.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_nativemenu_method_set_item_accelerator"></div>

`void` **set_item_accelerator** ( rid: [`RID`](class_rid.md), idx: [`int`](class_int.md), keycode: [Key](#enum_@globalscope_key) )<div id="class_nativemenu_method_set_item_accelerator"></div>

Sets the accelerator of the item at index `idx`. `keycode` can be a single [Key](#enum_@globalscope_key), or a combination of [KeyModifierMask](#enum_@globalscope_keymodifiermask) s and [Key](#enum_@globalscope_key) s using bitwise OR such as `KEY_MASK_CTRL | KEY_A` (<i class="fa fa-gamepad"></i>`Ctrl + A`).

 **Note:** This method is implemented only on macOS.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_nativemenu_method_set_item_callback"></div>

`void` **set_item_callback** ( rid: [`RID`](class_rid.md), idx: [`int`](class_int.md), callback: [`Callable`](class_callable.md) )<div id="class_nativemenu_method_set_item_callback"></div>

Sets the callback of the item at index `idx`. Callback is emitted when an item is pressed.

 **Note:** The `callback` Callable needs to accept exactly one Variant parameter, the parameter passed to the Callable will be the value passed to the `tag` parameter when the menu item was created.

 **Note:** This method is implemented on macOS and Windows.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_nativemenu_method_set_item_checkable"></div>

`void` **set_item_checkable** ( rid: [`RID`](class_rid.md), idx: [`int`](class_int.md), checkable: [`bool`](class_bool.md) )<div id="class_nativemenu_method_set_item_checkable"></div>

Sets whether the item at index `idx` has a checkbox. If `false`, sets the type of the item to plain text.

 **Note:** This method is implemented on macOS and Windows.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_nativemenu_method_set_item_checked"></div>

`void` **set_item_checked** ( rid: [`RID`](class_rid.md), idx: [`int`](class_int.md), checked: [`bool`](class_bool.md) )<div id="class_nativemenu_method_set_item_checked"></div>

Sets the checkstate status of the item at index `idx`.

 **Note:** This method is implemented on macOS and Windows.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_nativemenu_method_set_item_disabled"></div>

`void` **set_item_disabled** ( rid: [`RID`](class_rid.md), idx: [`int`](class_int.md), disabled: [`bool`](class_bool.md) )<div id="class_nativemenu_method_set_item_disabled"></div>

Enables/disables the item at index `idx`. When it is disabled, it can't be selected and its action can't be invoked.

 **Note:** This method is implemented on macOS and Windows.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_nativemenu_method_set_item_hidden"></div>

`void` **set_item_hidden** ( rid: [`RID`](class_rid.md), idx: [`int`](class_int.md), hidden: [`bool`](class_bool.md) )<div id="class_nativemenu_method_set_item_hidden"></div>

Hides/shows the item at index `idx`. When it is hidden, an item does not appear in a menu and its action cannot be invoked.

 **Note:** This method is implemented only on macOS.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_nativemenu_method_set_item_hover_callbacks"></div>

`void` **set_item_hover_callbacks** ( rid: [`RID`](class_rid.md), idx: [`int`](class_int.md), callback: [`Callable`](class_callable.md) )<div id="class_nativemenu_method_set_item_hover_callbacks"></div>

Sets the callback of the item at index `idx`. The callback is emitted when an item is hovered.

 **Note:** The `callback` Callable needs to accept exactly one Variant parameter, the parameter passed to the Callable will be the value passed to the `tag` parameter when the menu item was created.

 **Note:** This method is implemented only on macOS.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_nativemenu_method_set_item_icon"></div>

`void` **set_item_icon** ( rid: [`RID`](class_rid.md), idx: [`int`](class_int.md), icon: [`Texture2D`](class_texture2d.md) )<div id="class_nativemenu_method_set_item_icon"></div>

Replaces the [`Texture2D`](class_texture2d.md) icon of the specified `idx`.

 **Note:** This method is implemented on macOS and Windows.

 **Note:** This method is not supported by macOS Dock menu items.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_nativemenu_method_set_item_indentation_level"></div>

`void` **set_item_indentation_level** ( rid: [`RID`](class_rid.md), idx: [`int`](class_int.md), level: [`int`](class_int.md) )<div id="class_nativemenu_method_set_item_indentation_level"></div>

Sets the horizontal offset of the item at the given `idx`.

 **Note:** This method is implemented only on macOS.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_nativemenu_method_set_item_key_callback"></div>

`void` **set_item_key_callback** ( rid: [`RID`](class_rid.md), idx: [`int`](class_int.md), key_callback: [`Callable`](class_callable.md) )<div id="class_nativemenu_method_set_item_key_callback"></div>

Sets the callback of the item at index `idx`. Callback is emitted when its accelerator is activated.

 **Note:** The `key_callback` Callable needs to accept exactly one Variant parameter, the parameter passed to the Callable will be the value passed to the `tag` parameter when the menu item was created.

 **Note:** This method is implemented only on macOS.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_nativemenu_method_set_item_max_states"></div>

`void` **set_item_max_states** ( rid: [`RID`](class_rid.md), idx: [`int`](class_int.md), max_states: [`int`](class_int.md) )<div id="class_nativemenu_method_set_item_max_states"></div>

Sets number of state of a multistate item. See [`add_multistate_item`](#class_nativemenu_method_add_multistate_item) for details.

 **Note:** This method is implemented on macOS and Windows.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_nativemenu_method_set_item_radio_checkable"></div>

`void` **set_item_radio_checkable** ( rid: [`RID`](class_rid.md), idx: [`int`](class_int.md), checkable: [`bool`](class_bool.md) )<div id="class_nativemenu_method_set_item_radio_checkable"></div>

Sets the type of the item at the specified index `idx` to radio button. If `false`, sets the type of the item to plain text.

 **Note:** This is purely cosmetic; you must add the logic for checking/unchecking items in radio groups.

 **Note:** This method is implemented on macOS and Windows.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_nativemenu_method_set_item_state"></div>

`void` **set_item_state** ( rid: [`RID`](class_rid.md), idx: [`int`](class_int.md), state: [`int`](class_int.md) )<div id="class_nativemenu_method_set_item_state"></div>

Sets the state of a multistate item. See [`add_multistate_item`](#class_nativemenu_method_add_multistate_item) for details.

 **Note:** This method is implemented on macOS and Windows.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_nativemenu_method_set_item_submenu"></div>

`void` **set_item_submenu** ( rid: [`RID`](class_rid.md), idx: [`int`](class_int.md), submenu_rid: [`RID`](class_rid.md) )<div id="class_nativemenu_method_set_item_submenu"></div>

Sets the submenu RID of the item at index `idx`. The submenu is a global menu that would be shown when the item is clicked.

 **Note:** This method is implemented on macOS and Windows.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_nativemenu_method_set_item_tag"></div>

`void` **set_item_tag** ( rid: [`RID`](class_rid.md), idx: [`int`](class_int.md), tag: [`Variant`](class_variant.md) )<div id="class_nativemenu_method_set_item_tag"></div>

Sets the metadata of an item, which may be of any type. You can later get it with [`get_item_tag`](#class_nativemenu_method_get_item_tag), which provides a simple way of assigning context data to items.

 **Note:** This method is implemented on macOS and Windows.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_nativemenu_method_set_item_text"></div>

`void` **set_item_text** ( rid: [`RID`](class_rid.md), idx: [`int`](class_int.md), text: [`String`](class_string.md) )<div id="class_nativemenu_method_set_item_text"></div>

Sets the text of the item at index `idx`.

 **Note:** This method is implemented on macOS and Windows.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_nativemenu_method_set_item_tooltip"></div>

`void` **set_item_tooltip** ( rid: [`RID`](class_rid.md), idx: [`int`](class_int.md), tooltip: [`String`](class_string.md) )<div id="class_nativemenu_method_set_item_tooltip"></div>

Sets the [`String`](class_string.md) tooltip of the item at the specified index `idx`.

 **Note:** This method is implemented only on macOS.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_nativemenu_method_set_minimum_width"></div>

`void` **set_minimum_width** ( rid: [`RID`](class_rid.md), width: [`float`](class_float.md) )<div id="class_nativemenu_method_set_minimum_width"></div>

Sets the minimum width of the global menu.

 **Note:** This method is implemented only on macOS.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_nativemenu_method_set_popup_close_callback"></div>

`void` **set_popup_close_callback** ( rid: [`RID`](class_rid.md), callback: [`Callable`](class_callable.md) )<div id="class_nativemenu_method_set_popup_close_callback"></div>

Registers callable to emit when the menu is about to show.

 **Note:** The OS can simulate menu opening to track menu item changes and global shortcuts, in which case the corresponding close callback is not triggered. Use [`is_opened`](#class_nativemenu_method_is_opened) to check if the menu is currently opened.

 **Note:** This method is implemented only on macOS.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_nativemenu_method_set_popup_open_callback"></div>

`void` **set_popup_open_callback** ( rid: [`RID`](class_rid.md), callback: [`Callable`](class_callable.md) )<div id="class_nativemenu_method_set_popup_open_callback"></div>

Registers callable to emit after the menu is closed.

 **Note:** This method is implemented only on macOS.

[^virtual]: 本方法通常需要用户覆盖才能生效。
[^const]: 本方法无副作用，不会修改该实例的任何成员变量。
[^vararg]: 本方法除了能接受在此处描述的参数外，还能够继续接受任意数量的参数。
[^constructor]: 本方法用于构造某个类型。
[^static]: 调用本方法无需实例，可直接使用类名进行调用。
[^operator]: 本方法描述的是使用本类型作为左操作数的有效运算符。
[^bitfield]: 这个值是由下列位标志构成位掩码的整数。
[^void]: 无返回值。
