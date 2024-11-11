<!-- ⚠ 请勿编辑本文件 ⚠ -->
<!-- 本文档使用脚本从 WeDot 引擎源码仓库生成。 -->
<!-- 生成脚本：https://github.com/WeDot-Engine/WeDot/tree/master/doc/tools/make_md.py； -->
<!-- 原文件：https://github.com/WeDot-Engine/WeDot/tree/master/doc/classes/OptionButton.xml。 -->

<div id="_class_optionbutton"></div>

# OptionButton

**继承：** [`Button`](class_button.md) **<** [`BaseButton`](class_basebutton.md) **<** [`Control`](class_control.md) **<** [`CanvasItem`](class_canvasitem.md) **<** [`Node`](class_node.md) **<** [`Object`](class_object.md)

A button that brings up a dropdown with selectable options when pressed.

## 描述

**OptionButton** is a type of button that brings up a dropdown with selectable items when pressed. The item selected becomes the "current" item and is displayed as the button text.

See also [`BaseButton`](class_basebutton.md) which contains common properties and methods associated with this node.

 **Note:** The ID values used for items are limited to 32 bits, not full 64 bits of [`int`](class_int.md). This has a range of `-2^32` to `2^32 - 1`, i.e. `-2147483648` to `2147483647`.

 **Note:** The [`Button.text`](class_button.md#class_button_property_text) and [`Button.icon`](class_button.md#class_button_property_icon) properties are set automatically based on the selected item. They shouldn't be changed manually.

## 属性

|||
|:-:|:--|
| [ActionMode](#enum_basebutton_actionmode)                     | action_mode                                                                                    | ``0`` (overrides [`BaseButton`](class_basebutton.md#class_basebutton_property_action_mode))    |
| [HorizontalAlignment](#enum_@globalscope_horizontalalignment) | alignment                                                                                      | ``0`` (overrides [`Button`](class_button.md#class_button_property_alignment))                  |
| [`bool`](class_bool.md)                                       | [`allow_reselect`](class_optionbutton.md#class_optionbutton_property_allow_reselect)           | ``false``                                                                                      |
| [`bool`](class_bool.md)                                       | [`fit_to_longest_item`](class_optionbutton.md#class_optionbutton_property_fit_to_longest_item) | ``true``                                                                                       |
| [`int`](class_int.md)                                         | [`item_count`](class_optionbutton.md#class_optionbutton_property_item_count)                   | ``0``                                                                                          |
| [`int`](class_int.md)                                         | [`selected`](class_optionbutton.md#class_optionbutton_property_selected)                       | ``-1``                                                                                         |
| [`bool`](class_bool.md)                                       | toggle_mode                                                                                    | ``true`` (overrides [`BaseButton`](class_basebutton.md#class_basebutton_property_toggle_mode)) |

## 方法

|||
|:-:|:--|
| `void`                            | [`add_icon_item`](class_optionbutton.md#class_optionbutton_method_add_icon_item) ( texture: [`Texture2D`](class_texture2d.md), label: [`String`](class_string.md), id: [`int`](class_int.md) = -1 ) |
| `void`                            | [`add_item`](class_optionbutton.md#class_optionbutton_method_add_item) ( label: [`String`](class_string.md), id: [`int`](class_int.md) = -1 )                                                       |
| `void`                            | [`add_separator`](class_optionbutton.md#class_optionbutton_method_add_separator) ( text: [`String`](class_string.md) = "" )                                                                         |
| `void`                            | [`clear`](class_optionbutton.md#class_optionbutton_method_clear) ( )                                                                                                                                |
| [`Texture2D`](class_texture2d.md) | [`get_item_icon`](class_optionbutton.md#class_optionbutton_method_get_item_icon) ( idx: [`int`](class_int.md) ) const[^const]                                                                       |
| [`int`](class_int.md)             | [`get_item_id`](class_optionbutton.md#class_optionbutton_method_get_item_id) ( idx: [`int`](class_int.md) ) const[^const]                                                                           |
| [`int`](class_int.md)             | [`get_item_index`](class_optionbutton.md#class_optionbutton_method_get_item_index) ( id: [`int`](class_int.md) ) const[^const]                                                                      |
| [`Variant`](class_variant.md)     | [`get_item_metadata`](class_optionbutton.md#class_optionbutton_method_get_item_metadata) ( idx: [`int`](class_int.md) ) const[^const]                                                               |
| [`String`](class_string.md)       | [`get_item_text`](class_optionbutton.md#class_optionbutton_method_get_item_text) ( idx: [`int`](class_int.md) ) const[^const]                                                                       |
| [`String`](class_string.md)       | [`get_item_tooltip`](class_optionbutton.md#class_optionbutton_method_get_item_tooltip) ( idx: [`int`](class_int.md) ) const[^const]                                                                 |
| [`PopupMenu`](class_popupmenu.md) | [`get_popup`](class_optionbutton.md#class_optionbutton_method_get_popup) ( ) const[^const]                                                                                                          |
| [`int`](class_int.md)             | [`get_selectable_item`](class_optionbutton.md#class_optionbutton_method_get_selectable_item) ( from_last: [`bool`](class_bool.md) = false ) const[^const]                                           |
| [`int`](class_int.md)             | [`get_selected_id`](class_optionbutton.md#class_optionbutton_method_get_selected_id) ( ) const[^const]                                                                                              |
| [`Variant`](class_variant.md)     | [`get_selected_metadata`](class_optionbutton.md#class_optionbutton_method_get_selected_metadata) ( ) const[^const]                                                                                  |
| [`bool`](class_bool.md)           | [`has_selectable_items`](class_optionbutton.md#class_optionbutton_method_has_selectable_items) ( ) const[^const]                                                                                    |
| [`bool`](class_bool.md)           | [`is_item_disabled`](class_optionbutton.md#class_optionbutton_method_is_item_disabled) ( idx: [`int`](class_int.md) ) const[^const]                                                                 |
| [`bool`](class_bool.md)           | [`is_item_separator`](class_optionbutton.md#class_optionbutton_method_is_item_separator) ( idx: [`int`](class_int.md) ) const[^const]                                                               |
| `void`                            | [`remove_item`](class_optionbutton.md#class_optionbutton_method_remove_item) ( idx: [`int`](class_int.md) )                                                                                         |
| `void`                            | [`select`](class_optionbutton.md#class_optionbutton_method_select) ( idx: [`int`](class_int.md) )                                                                                                   |
| `void`                            | [`set_disable_shortcuts`](class_optionbutton.md#class_optionbutton_method_set_disable_shortcuts) ( disabled: [`bool`](class_bool.md) )                                                              |
| `void`                            | [`set_item_disabled`](class_optionbutton.md#class_optionbutton_method_set_item_disabled) ( idx: [`int`](class_int.md), disabled: [`bool`](class_bool.md) )                                          |
| `void`                            | [`set_item_icon`](class_optionbutton.md#class_optionbutton_method_set_item_icon) ( idx: [`int`](class_int.md), texture: [`Texture2D`](class_texture2d.md) )                                         |
| `void`                            | [`set_item_id`](class_optionbutton.md#class_optionbutton_method_set_item_id) ( idx: [`int`](class_int.md), id: [`int`](class_int.md) )                                                              |
| `void`                            | [`set_item_metadata`](class_optionbutton.md#class_optionbutton_method_set_item_metadata) ( idx: [`int`](class_int.md), metadata: [`Variant`](class_variant.md) )                                    |
| `void`                            | [`set_item_text`](class_optionbutton.md#class_optionbutton_method_set_item_text) ( idx: [`int`](class_int.md), text: [`String`](class_string.md) )                                                  |
| `void`                            | [`set_item_tooltip`](class_optionbutton.md#class_optionbutton_method_set_item_tooltip) ( idx: [`int`](class_int.md), tooltip: [`String`](class_string.md) )                                         |
| `void`                            | [`show_popup`](class_optionbutton.md#class_optionbutton_method_show_popup) ( )                                                                                                                      |

## 主题属性

|||
|:-:|:--|
| [`int`](class_int.md)             | [`arrow_margin`](class_optionbutton.md#class_optionbutton_theme_constant_arrow_margin)     | ``4`` |
| [`int`](class_int.md)             | [`modulate_arrow`](class_optionbutton.md#class_optionbutton_theme_constant_modulate_arrow) | ``0`` |
| [`Texture2D`](class_texture2d.md) | [`arrow`](class_optionbutton.md#class_optionbutton_theme_icon_arrow)                       |       |

<!-- rst-class:: classref-section-separator -->

---

## 信号

<div id="_class_class_optionbutton_signal_item_focused"></div>

**item_focused** ( index: [`int`](class_int.md) ) <div id="class_optionbutton_signal_item_focused"></div>

Emitted when the user navigates to an item using the [`ProjectSettings.input/ui_up`](class_projectsettings.md#class_projectsettings_property_input/ui_up) or [`ProjectSettings.input/ui_down`](class_projectsettings.md#class_projectsettings_property_input/ui_down) input actions. The index of the item selected is passed as argument.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_class_optionbutton_signal_item_selected"></div>

**item_selected** ( index: [`int`](class_int.md) ) <div id="class_optionbutton_signal_item_selected"></div>

Emitted when the current item has been changed by the user. The index of the item selected is passed as argument.

 [`allow_reselect`](class_optionbutton.md#class_optionbutton_property_allow_reselect) must be enabled to reselect an item.

<!-- rst-class:: classref-section-separator -->

---

## 属性说明

<div id="_class_optionbutton_property_allow_reselect"></div>

[`bool`](class_bool.md) **allow_reselect** = ``false`` <div id="class_optionbutton_property_allow_reselect"></div>

- `void` **set_allow_reselect** ( value: [`bool`](class_bool.md) )
- [`bool`](class_bool.md) **get_allow_reselect** ( )

If `true`, the currently selected item can be selected again.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_optionbutton_property_fit_to_longest_item"></div>

[`bool`](class_bool.md) **fit_to_longest_item** = ``true`` <div id="class_optionbutton_property_fit_to_longest_item"></div>

- `void` **set_fit_to_longest_item** ( value: [`bool`](class_bool.md) )
- [`bool`](class_bool.md) **is_fit_to_longest_item** ( )

If `true`, minimum size will be determined by the longest item's text, instead of the currently selected one's.

 **Note:** For performance reasons, the minimum size doesn't update immediately when adding, removing or modifying items.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_optionbutton_property_item_count"></div>

[`int`](class_int.md) **item_count** = ``0`` <div id="class_optionbutton_property_item_count"></div>

- `void` **set_item_count** ( value: [`int`](class_int.md) )
- [`int`](class_int.md) **get_item_count** ( )

The number of items to select from.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_optionbutton_property_selected"></div>

[`int`](class_int.md) **selected** = ``-1`` <div id="class_optionbutton_property_selected"></div>

- [`int`](class_int.md) **get_selected** ( )

The index of the currently selected item, or `-1` if no item is selected.

<!-- rst-class:: classref-section-separator -->

---

## 方法说明

<div id="_class_optionbutton_method_add_icon_item"></div>

`void` **add_icon_item** ( texture: [`Texture2D`](class_texture2d.md), label: [`String`](class_string.md), id: [`int`](class_int.md) = -1 )<div id="class_optionbutton_method_add_icon_item"></div>

Adds an item, with a `texture` icon, text `label` and (optionally) `id`. If no `id` is passed, the item index will be used as the item's ID. New items are appended at the end.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_optionbutton_method_add_item"></div>

`void` **add_item** ( label: [`String`](class_string.md), id: [`int`](class_int.md) = -1 )<div id="class_optionbutton_method_add_item"></div>

Adds an item, with text `label` and (optionally) `id`. If no `id` is passed, the item index will be used as the item's ID. New items are appended at the end.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_optionbutton_method_add_separator"></div>

`void` **add_separator** ( text: [`String`](class_string.md) = "" )<div id="class_optionbutton_method_add_separator"></div>

Adds a separator to the list of items. Separators help to group items, and can optionally be given a `text` header. A separator also gets an index assigned, and is appended at the end of the item list.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_optionbutton_method_clear"></div>

`void` **clear** ( )<div id="class_optionbutton_method_clear"></div>

Clears all the items in the **OptionButton**.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_optionbutton_method_get_item_icon"></div>

[`Texture2D`](class_texture2d.md) **get_item_icon** ( idx: [`int`](class_int.md) ) const[^const]<div id="class_optionbutton_method_get_item_icon"></div>

Returns the icon of the item at index `idx`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_optionbutton_method_get_item_id"></div>

[`int`](class_int.md) **get_item_id** ( idx: [`int`](class_int.md) ) const[^const]<div id="class_optionbutton_method_get_item_id"></div>

Returns the ID of the item at index `idx`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_optionbutton_method_get_item_index"></div>

[`int`](class_int.md) **get_item_index** ( id: [`int`](class_int.md) ) const[^const]<div id="class_optionbutton_method_get_item_index"></div>

Returns the index of the item with the given `id`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_optionbutton_method_get_item_metadata"></div>

[`Variant`](class_variant.md) **get_item_metadata** ( idx: [`int`](class_int.md) ) const[^const]<div id="class_optionbutton_method_get_item_metadata"></div>

Retrieves the metadata of an item. Metadata may be any type and can be used to store extra information about an item, such as an external string ID.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_optionbutton_method_get_item_text"></div>

[`String`](class_string.md) **get_item_text** ( idx: [`int`](class_int.md) ) const[^const]<div id="class_optionbutton_method_get_item_text"></div>

Returns the text of the item at index `idx`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_optionbutton_method_get_item_tooltip"></div>

[`String`](class_string.md) **get_item_tooltip** ( idx: [`int`](class_int.md) ) const[^const]<div id="class_optionbutton_method_get_item_tooltip"></div>

Returns the tooltip of the item at index `idx`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_optionbutton_method_get_popup"></div>

[`PopupMenu`](class_popupmenu.md) **get_popup** ( ) const[^const]<div id="class_optionbutton_method_get_popup"></div>

Returns the [`PopupMenu`](class_popupmenu.md) contained in this button.

 **Warning:** This is a required internal node, removing and freeing it may cause a crash. If you wish to hide it or any of its children, use their [`Window.visible`](class_window.md#class_window_property_visible) property.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_optionbutton_method_get_selectable_item"></div>

[`int`](class_int.md) **get_selectable_item** ( from_last: [`bool`](class_bool.md) = false ) const[^const]<div id="class_optionbutton_method_get_selectable_item"></div>

Returns the index of the first item which is not disabled, or marked as a separator. If `from_last` is `true`, the items will be searched in reverse order.

Returns `-1` if no item is found.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_optionbutton_method_get_selected_id"></div>

[`int`](class_int.md) **get_selected_id** ( ) const[^const]<div id="class_optionbutton_method_get_selected_id"></div>

Returns the ID of the selected item, or `-1` if no item is selected.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_optionbutton_method_get_selected_metadata"></div>

[`Variant`](class_variant.md) **get_selected_metadata** ( ) const[^const]<div id="class_optionbutton_method_get_selected_metadata"></div>

Gets the metadata of the selected item. Metadata for items can be set using [`set_item_metadata`](class_optionbutton.md#class_optionbutton_method_set_item_metadata).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_optionbutton_method_has_selectable_items"></div>

[`bool`](class_bool.md) **has_selectable_items** ( ) const[^const]<div id="class_optionbutton_method_has_selectable_items"></div>

Returns `true` if this button contains at least one item which is not disabled, or marked as a separator.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_optionbutton_method_is_item_disabled"></div>

[`bool`](class_bool.md) **is_item_disabled** ( idx: [`int`](class_int.md) ) const[^const]<div id="class_optionbutton_method_is_item_disabled"></div>

Returns `true` if the item at index `idx` is disabled.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_optionbutton_method_is_item_separator"></div>

[`bool`](class_bool.md) **is_item_separator** ( idx: [`int`](class_int.md) ) const[^const]<div id="class_optionbutton_method_is_item_separator"></div>

Returns `true` if the item at index `idx` is marked as a separator.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_optionbutton_method_remove_item"></div>

`void` **remove_item** ( idx: [`int`](class_int.md) )<div id="class_optionbutton_method_remove_item"></div>

Removes the item at index `idx`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_optionbutton_method_select"></div>

`void` **select** ( idx: [`int`](class_int.md) )<div id="class_optionbutton_method_select"></div>

Selects an item by index and makes it the current item. This will work even if the item is disabled.

Passing `-1` as the index deselects any currently selected item.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_optionbutton_method_set_disable_shortcuts"></div>

`void` **set_disable_shortcuts** ( disabled: [`bool`](class_bool.md) )<div id="class_optionbutton_method_set_disable_shortcuts"></div>

If `true`, shortcuts are disabled and cannot be used to trigger the button.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_optionbutton_method_set_item_disabled"></div>

`void` **set_item_disabled** ( idx: [`int`](class_int.md), disabled: [`bool`](class_bool.md) )<div id="class_optionbutton_method_set_item_disabled"></div>

Sets whether the item at index `idx` is disabled.

Disabled items are drawn differently in the dropdown and are not selectable by the user. If the current selected item is set as disabled, it will remain selected.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_optionbutton_method_set_item_icon"></div>

`void` **set_item_icon** ( idx: [`int`](class_int.md), texture: [`Texture2D`](class_texture2d.md) )<div id="class_optionbutton_method_set_item_icon"></div>

Sets the icon of the item at index `idx`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_optionbutton_method_set_item_id"></div>

`void` **set_item_id** ( idx: [`int`](class_int.md), id: [`int`](class_int.md) )<div id="class_optionbutton_method_set_item_id"></div>

Sets the ID of the item at index `idx`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_optionbutton_method_set_item_metadata"></div>

`void` **set_item_metadata** ( idx: [`int`](class_int.md), metadata: [`Variant`](class_variant.md) )<div id="class_optionbutton_method_set_item_metadata"></div>

Sets the metadata of an item. Metadata may be of any type and can be used to store extra information about an item, such as an external string ID.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_optionbutton_method_set_item_text"></div>

`void` **set_item_text** ( idx: [`int`](class_int.md), text: [`String`](class_string.md) )<div id="class_optionbutton_method_set_item_text"></div>

Sets the text of the item at index `idx`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_optionbutton_method_set_item_tooltip"></div>

`void` **set_item_tooltip** ( idx: [`int`](class_int.md), tooltip: [`String`](class_string.md) )<div id="class_optionbutton_method_set_item_tooltip"></div>

Sets the tooltip of the item at index `idx`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_optionbutton_method_show_popup"></div>

`void` **show_popup** ( )<div id="class_optionbutton_method_show_popup"></div>

Adjusts popup position and sizing for the **OptionButton**, then shows the [`PopupMenu`](class_popupmenu.md). Prefer this over using `get_popup().popup()`.

<!-- rst-class:: classref-section-separator -->

---

## 主题属性说明

<div id="_class_optionbutton_theme_constant_arrow_margin"></div>

[`int`](class_int.md) **arrow_margin** = ``4`` <div id="class_optionbutton_theme_constant_arrow_margin"></div>

The horizontal space between the arrow icon and the right edge of the button.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_optionbutton_theme_constant_modulate_arrow"></div>

[`int`](class_int.md) **modulate_arrow** = ``0`` <div id="class_optionbutton_theme_constant_modulate_arrow"></div>

If different than `0`, the arrow icon will be modulated to the font color.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_optionbutton_theme_icon_arrow"></div>

[`Texture2D`](class_texture2d.md) **arrow** <div id="class_optionbutton_theme_icon_arrow"></div>

The arrow icon to be drawn on the right end of the button.

[^virtual]: 本方法通常需要用户覆盖才能生效。
[^const]: 本方法无副作用，不会修改该实例的任何成员变量。
[^vararg]: 本方法除了能接受在此处描述的参数外，还能够继续接受任意数量的参数。
[^constructor]: 本方法用于构造某个类型。
[^static]: 调用本方法无需实例，可直接使用类名进行调用。
[^operator]: 本方法描述的是使用本类型作为左操作数的有效运算符。
[^bitfield]: 这个值是由下列位标志构成位掩码的整数。
[^void]: 无返回值。
