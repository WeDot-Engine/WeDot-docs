<!-- ⚠ 请勿编辑本文件 ⚠ -->
<!-- 本文档使用脚本从 WeDot 引擎源码仓库生成。 -->
<!-- 生成脚本：https://github.com/WeDot-Engine/WeDot/tree/master/doc/tools/make_md.py； -->
<!-- 原文件：https://github.com/WeDot-Engine/WeDot/tree/master/doc/classes/MenuBar.xml。 -->

<div id="_class_menubar"></div>

# MenuBar

**继承：** [`Control`](class_control.md) **<** [`CanvasItem`](class_canvasitem.md) **<** [`Node`](class_node.md) **<** [`Object`](class_object.md)

A horizontal menu bar that creates a menu for each [`PopupMenu`](class_popupmenu.md) child.

## 描述

A horizontal menu bar that creates a menu for each [`PopupMenu`](class_popupmenu.md) child. New items are created by adding [`PopupMenu`](class_popupmenu.md) s to this node.

## 属性

|||
|:-:|:--|
| [`bool`](class_bool.md)                      | [`flat`](class_menubar.md#class_menubar_property_flat)                             | ``false`` |
| [`String`](class_string.md)                  | [`language`](class_menubar.md#class_menubar_property_language)                     | ``""``    |
| [`bool`](class_bool.md)                      | [`prefer_global_menu`](class_menubar.md#class_menubar_property_prefer_global_menu) | ``true``  |
| [`int`](class_int.md)                        | [`start_index`](class_menubar.md#class_menubar_property_start_index)               | ``-1``    |
| [`bool`](class_bool.md)                      | [`switch_on_hover`](class_menubar.md#class_menubar_property_switch_on_hover)       | ``true``  |
| [TextDirection](#enum_control_textdirection) | [`text_direction`](class_menubar.md#class_menubar_property_text_direction)         | ``0``     |

## 方法

|||
|:-:|:--|
| [`int`](class_int.md)             | [`get_menu_count`](class_menubar.md#class_menubar_method_get_menu_count) ( ) const[^const]                                                         |
| [`PopupMenu`](class_popupmenu.md) | [`get_menu_popup`](class_menubar.md#class_menubar_method_get_menu_popup) ( menu: [`int`](class_int.md) ) const[^const]                             |
| [`String`](class_string.md)       | [`get_menu_title`](class_menubar.md#class_menubar_method_get_menu_title) ( menu: [`int`](class_int.md) ) const[^const]                             |
| [`String`](class_string.md)       | [`get_menu_tooltip`](class_menubar.md#class_menubar_method_get_menu_tooltip) ( menu: [`int`](class_int.md) ) const[^const]                         |
| [`bool`](class_bool.md)           | [`is_menu_disabled`](class_menubar.md#class_menubar_method_is_menu_disabled) ( menu: [`int`](class_int.md) ) const[^const]                         |
| [`bool`](class_bool.md)           | [`is_menu_hidden`](class_menubar.md#class_menubar_method_is_menu_hidden) ( menu: [`int`](class_int.md) ) const[^const]                             |
| [`bool`](class_bool.md)           | [`is_native_menu`](class_menubar.md#class_menubar_method_is_native_menu) ( ) const[^const]                                                         |
| `void`                            | [`set_disable_shortcuts`](class_menubar.md#class_menubar_method_set_disable_shortcuts) ( disabled: [`bool`](class_bool.md) )                       |
| `void`                            | [`set_menu_disabled`](class_menubar.md#class_menubar_method_set_menu_disabled) ( menu: [`int`](class_int.md), disabled: [`bool`](class_bool.md) )  |
| `void`                            | [`set_menu_hidden`](class_menubar.md#class_menubar_method_set_menu_hidden) ( menu: [`int`](class_int.md), hidden: [`bool`](class_bool.md) )        |
| `void`                            | [`set_menu_title`](class_menubar.md#class_menubar_method_set_menu_title) ( menu: [`int`](class_int.md), title: [`String`](class_string.md) )       |
| `void`                            | [`set_menu_tooltip`](class_menubar.md#class_menubar_method_set_menu_tooltip) ( menu: [`int`](class_int.md), tooltip: [`String`](class_string.md) ) |

## 主题属性

|||
|:-:|:--|
| [`Color`](class_color.md)       | [`font_color`](class_menubar.md#class_menubar_theme_color_font_color)                             | ``Color(0.875, 0.875, 0.875, 1)``   |
| [`Color`](class_color.md)       | [`font_disabled_color`](class_menubar.md#class_menubar_theme_color_font_disabled_color)           | ``Color(0.875, 0.875, 0.875, 0.5)`` |
| [`Color`](class_color.md)       | [`font_focus_color`](class_menubar.md#class_menubar_theme_color_font_focus_color)                 | ``Color(0.95, 0.95, 0.95, 1)``      |
| [`Color`](class_color.md)       | [`font_hover_color`](class_menubar.md#class_menubar_theme_color_font_hover_color)                 | ``Color(0.95, 0.95, 0.95, 1)``      |
| [`Color`](class_color.md)       | [`font_hover_pressed_color`](class_menubar.md#class_menubar_theme_color_font_hover_pressed_color) | ``Color(1, 1, 1, 1)``               |
| [`Color`](class_color.md)       | [`font_outline_color`](class_menubar.md#class_menubar_theme_color_font_outline_color)             | ``Color(0, 0, 0, 1)``               |
| [`Color`](class_color.md)       | [`font_pressed_color`](class_menubar.md#class_menubar_theme_color_font_pressed_color)             | ``Color(1, 1, 1, 1)``               |
| [`int`](class_int.md)           | [`h_separation`](class_menubar.md#class_menubar_theme_constant_h_separation)                      | ``4``                               |
| [`int`](class_int.md)           | [`outline_size`](class_menubar.md#class_menubar_theme_constant_outline_size)                      | ``0``                               |
| [`Font`](class_font.md)         | [`font`](class_menubar.md#class_menubar_theme_font_font)                                          |                                     |
| [`int`](class_int.md)           | [`font_size`](class_menubar.md#class_menubar_theme_font_size_font_size)                           |                                     |
| [`StyleBox`](class_stylebox.md) | [`disabled`](class_menubar.md#class_menubar_theme_style_disabled)                                 |                                     |
| [`StyleBox`](class_stylebox.md) | [`disabled_mirrored`](class_menubar.md#class_menubar_theme_style_disabled_mirrored)               |                                     |
| [`StyleBox`](class_stylebox.md) | [`hover`](class_menubar.md#class_menubar_theme_style_hover)                                       |                                     |
| [`StyleBox`](class_stylebox.md) | [`hover_mirrored`](class_menubar.md#class_menubar_theme_style_hover_mirrored)                     |                                     |
| [`StyleBox`](class_stylebox.md) | [`hover_pressed`](class_menubar.md#class_menubar_theme_style_hover_pressed)                       |                                     |
| [`StyleBox`](class_stylebox.md) | [`hover_pressed_mirrored`](class_menubar.md#class_menubar_theme_style_hover_pressed_mirrored)     |                                     |
| [`StyleBox`](class_stylebox.md) | [`normal`](class_menubar.md#class_menubar_theme_style_normal)                                     |                                     |
| [`StyleBox`](class_stylebox.md) | [`normal_mirrored`](class_menubar.md#class_menubar_theme_style_normal_mirrored)                   |                                     |
| [`StyleBox`](class_stylebox.md) | [`pressed`](class_menubar.md#class_menubar_theme_style_pressed)                                   |                                     |
| [`StyleBox`](class_stylebox.md) | [`pressed_mirrored`](class_menubar.md#class_menubar_theme_style_pressed_mirrored)                 |                                     |

<!-- rst-class:: classref-section-separator -->

---

## 属性说明

<div id="_class_menubar_property_flat"></div>

[`bool`](class_bool.md) **flat** = ``false`` <div id="class_menubar_property_flat"></div>

- `void` **set_flat** ( value: [`bool`](class_bool.md) )
- [`bool`](class_bool.md) **is_flat** ( )

Flat **MenuBar** don't display item decoration.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_menubar_property_language"></div>

[`String`](class_string.md) **language** = ``""`` <div id="class_menubar_property_language"></div>

- `void` **set_language** ( value: [`String`](class_string.md) )
- [`String`](class_string.md) **get_language** ( )

Language code used for line-breaking and text shaping algorithms, if left empty current locale is used instead.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_menubar_property_prefer_global_menu"></div>

[`bool`](class_bool.md) **prefer_global_menu** = ``true`` <div id="class_menubar_property_prefer_global_menu"></div>

- `void` **set_prefer_global_menu** ( value: [`bool`](class_bool.md) )
- [`bool`](class_bool.md) **is_prefer_global_menu** ( )

If `true`, **MenuBar** will use system global menu when supported.

 **Note:** If `true` and global menu is supported, this node is not displayed, has zero size, and all its child nodes except [`PopupMenu`](class_popupmenu.md) s are inaccessible.

 **Note:** This property overrides the value of the [`PopupMenu.prefer_native_menu`](class_popupmenu.md#class_popupmenu_property_prefer_native_menu) property of the child nodes.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_menubar_property_start_index"></div>

[`int`](class_int.md) **start_index** = ``-1`` <div id="class_menubar_property_start_index"></div>

- `void` **set_start_index** ( value: [`int`](class_int.md) )
- [`int`](class_int.md) **get_start_index** ( )

Position order in the global menu to insert **MenuBar** items at. All menu items in the **MenuBar** are always inserted as a continuous range. Menus with lower [`start_index`](class_menubar.md#class_menubar_property_start_index) are inserted first. Menus with [`start_index`](class_menubar.md#class_menubar_property_start_index) equal to `-1` are inserted last.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_menubar_property_switch_on_hover"></div>

[`bool`](class_bool.md) **switch_on_hover** = ``true`` <div id="class_menubar_property_switch_on_hover"></div>

- `void` **set_switch_on_hover** ( value: [`bool`](class_bool.md) )
- [`bool`](class_bool.md) **is_switch_on_hover** ( )

If `true`, when the cursor hovers above menu item, it will close the current [`PopupMenu`](class_popupmenu.md) and open the other one.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_menubar_property_text_direction"></div>

[TextDirection](#enum_control_textdirection) **text_direction** = ``0`` <div id="class_menubar_property_text_direction"></div>

- `void` **set_text_direction** ( value: [TextDirection](#enum_control_textdirection) )
- [TextDirection](#enum_control_textdirection) **get_text_direction** ( )

Base text writing direction.

<!-- rst-class:: classref-section-separator -->

---

## 方法说明

<div id="_class_menubar_method_get_menu_count"></div>

[`int`](class_int.md) **get_menu_count** ( ) const[^const]<div id="class_menubar_method_get_menu_count"></div>

Returns number of menu items.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_menubar_method_get_menu_popup"></div>

[`PopupMenu`](class_popupmenu.md) **get_menu_popup** ( menu: [`int`](class_int.md) ) const[^const]<div id="class_menubar_method_get_menu_popup"></div>

Returns [`PopupMenu`](class_popupmenu.md) associated with menu item.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_menubar_method_get_menu_title"></div>

[`String`](class_string.md) **get_menu_title** ( menu: [`int`](class_int.md) ) const[^const]<div id="class_menubar_method_get_menu_title"></div>

Returns menu item title.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_menubar_method_get_menu_tooltip"></div>

[`String`](class_string.md) **get_menu_tooltip** ( menu: [`int`](class_int.md) ) const[^const]<div id="class_menubar_method_get_menu_tooltip"></div>

Returns menu item tooltip.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_menubar_method_is_menu_disabled"></div>

[`bool`](class_bool.md) **is_menu_disabled** ( menu: [`int`](class_int.md) ) const[^const]<div id="class_menubar_method_is_menu_disabled"></div>

Returns `true`, if menu item is disabled.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_menubar_method_is_menu_hidden"></div>

[`bool`](class_bool.md) **is_menu_hidden** ( menu: [`int`](class_int.md) ) const[^const]<div id="class_menubar_method_is_menu_hidden"></div>

Returns `true`, if menu item is hidden.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_menubar_method_is_native_menu"></div>

[`bool`](class_bool.md) **is_native_menu** ( ) const[^const]<div id="class_menubar_method_is_native_menu"></div>

Returns `true`, if system global menu is supported and used by this **MenuBar**.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_menubar_method_set_disable_shortcuts"></div>

`void` **set_disable_shortcuts** ( disabled: [`bool`](class_bool.md) )<div id="class_menubar_method_set_disable_shortcuts"></div>

If `true`, shortcuts are disabled and cannot be used to trigger the button.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_menubar_method_set_menu_disabled"></div>

`void` **set_menu_disabled** ( menu: [`int`](class_int.md), disabled: [`bool`](class_bool.md) )<div id="class_menubar_method_set_menu_disabled"></div>

If `true`, menu item is disabled.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_menubar_method_set_menu_hidden"></div>

`void` **set_menu_hidden** ( menu: [`int`](class_int.md), hidden: [`bool`](class_bool.md) )<div id="class_menubar_method_set_menu_hidden"></div>

If `true`, menu item is hidden.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_menubar_method_set_menu_title"></div>

`void` **set_menu_title** ( menu: [`int`](class_int.md), title: [`String`](class_string.md) )<div id="class_menubar_method_set_menu_title"></div>

Sets menu item title.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_menubar_method_set_menu_tooltip"></div>

`void` **set_menu_tooltip** ( menu: [`int`](class_int.md), tooltip: [`String`](class_string.md) )<div id="class_menubar_method_set_menu_tooltip"></div>

Sets menu item tooltip.

<!-- rst-class:: classref-section-separator -->

---

## 主题属性说明

<div id="_class_menubar_theme_color_font_color"></div>

[`Color`](class_color.md) **font_color** = ``Color(0.875, 0.875, 0.875, 1)`` <div id="class_menubar_theme_color_font_color"></div>

Default text [`Color`](class_color.md) of the menu item.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_menubar_theme_color_font_disabled_color"></div>

[`Color`](class_color.md) **font_disabled_color** = ``Color(0.875, 0.875, 0.875, 0.5)`` <div id="class_menubar_theme_color_font_disabled_color"></div>

Text [`Color`](class_color.md) used when the menu item is disabled.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_menubar_theme_color_font_focus_color"></div>

[`Color`](class_color.md) **font_focus_color** = ``Color(0.95, 0.95, 0.95, 1)`` <div id="class_menubar_theme_color_font_focus_color"></div>

Text [`Color`](class_color.md) used when the menu item is focused. Only replaces the normal text color of the menu item. Disabled, hovered, and pressed states take precedence over this color.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_menubar_theme_color_font_hover_color"></div>

[`Color`](class_color.md) **font_hover_color** = ``Color(0.95, 0.95, 0.95, 1)`` <div id="class_menubar_theme_color_font_hover_color"></div>

Text [`Color`](class_color.md) used when the menu item is being hovered.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_menubar_theme_color_font_hover_pressed_color"></div>

[`Color`](class_color.md) **font_hover_pressed_color** = ``Color(1, 1, 1, 1)`` <div id="class_menubar_theme_color_font_hover_pressed_color"></div>

Text [`Color`](class_color.md) used when the menu item is being hovered and pressed.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_menubar_theme_color_font_outline_color"></div>

[`Color`](class_color.md) **font_outline_color** = ``Color(0, 0, 0, 1)`` <div id="class_menubar_theme_color_font_outline_color"></div>

The tint of text outline of the menu item.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_menubar_theme_color_font_pressed_color"></div>

[`Color`](class_color.md) **font_pressed_color** = ``Color(1, 1, 1, 1)`` <div id="class_menubar_theme_color_font_pressed_color"></div>

Text [`Color`](class_color.md) used when the menu item is being pressed.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_menubar_theme_constant_h_separation"></div>

[`int`](class_int.md) **h_separation** = ``4`` <div id="class_menubar_theme_constant_h_separation"></div>

The horizontal space between menu items.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_menubar_theme_constant_outline_size"></div>

[`int`](class_int.md) **outline_size** = ``0`` <div id="class_menubar_theme_constant_outline_size"></div>

The size of the text outline.

 **Note:** If using a font with [`FontFile.multichannel_signed_distance_field`](class_fontfile.md#class_fontfile_property_multichannel_signed_distance_field) enabled, its [`FontFile.msdf_pixel_range`](class_fontfile.md#class_fontfile_property_msdf_pixel_range) must be set to at least *twice* the value of [`outline_size`](class_menubar.md#class_menubar_theme_constant_outline_size) for outline rendering to look correct. Otherwise, the outline may appear to be cut off earlier than intended.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_menubar_theme_font_font"></div>

[`Font`](class_font.md) **font** <div id="class_menubar_theme_font_font"></div>

[`Font`](class_font.md) of the menu item's text.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_menubar_theme_font_size_font_size"></div>

[`int`](class_int.md) **font_size** <div id="class_menubar_theme_font_size_font_size"></div>

Font size of the menu item's text.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_menubar_theme_style_disabled"></div>

[`StyleBox`](class_stylebox.md) **disabled** <div id="class_menubar_theme_style_disabled"></div>

[`StyleBox`](class_stylebox.md) used when the menu item is disabled.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_menubar_theme_style_disabled_mirrored"></div>

[`StyleBox`](class_stylebox.md) **disabled_mirrored** <div id="class_menubar_theme_style_disabled_mirrored"></div>

[`StyleBox`](class_stylebox.md) used when the menu item is disabled (for right-to-left layouts).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_menubar_theme_style_hover"></div>

[`StyleBox`](class_stylebox.md) **hover** <div id="class_menubar_theme_style_hover"></div>

[`StyleBox`](class_stylebox.md) used when the menu item is being hovered.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_menubar_theme_style_hover_mirrored"></div>

[`StyleBox`](class_stylebox.md) **hover_mirrored** <div id="class_menubar_theme_style_hover_mirrored"></div>

[`StyleBox`](class_stylebox.md) used when the menu item is being hovered (for right-to-left layouts).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_menubar_theme_style_hover_pressed"></div>

[`StyleBox`](class_stylebox.md) **hover_pressed** <div id="class_menubar_theme_style_hover_pressed"></div>

[`StyleBox`](class_stylebox.md) used when the menu item is being pressed and hovered at the same time.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_menubar_theme_style_hover_pressed_mirrored"></div>

[`StyleBox`](class_stylebox.md) **hover_pressed_mirrored** <div id="class_menubar_theme_style_hover_pressed_mirrored"></div>

[`StyleBox`](class_stylebox.md) used when the menu item is being pressed and hovered at the same time (for right-to-left layouts).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_menubar_theme_style_normal"></div>

[`StyleBox`](class_stylebox.md) **normal** <div id="class_menubar_theme_style_normal"></div>

Default [`StyleBox`](class_stylebox.md) for the menu item.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_menubar_theme_style_normal_mirrored"></div>

[`StyleBox`](class_stylebox.md) **normal_mirrored** <div id="class_menubar_theme_style_normal_mirrored"></div>

Default [`StyleBox`](class_stylebox.md) for the menu item (for right-to-left layouts).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_menubar_theme_style_pressed"></div>

[`StyleBox`](class_stylebox.md) **pressed** <div id="class_menubar_theme_style_pressed"></div>

[`StyleBox`](class_stylebox.md) used when the menu item is being pressed.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_menubar_theme_style_pressed_mirrored"></div>

[`StyleBox`](class_stylebox.md) **pressed_mirrored** <div id="class_menubar_theme_style_pressed_mirrored"></div>

[`StyleBox`](class_stylebox.md) used when the menu item is being pressed (for right-to-left layouts).

[^virtual]: 本方法通常需要用户覆盖才能生效。
[^const]: 本方法无副作用，不会修改该实例的任何成员变量。
[^vararg]: 本方法除了能接受在此处描述的参数外，还能够继续接受任意数量的参数。
[^constructor]: 本方法用于构造某个类型。
[^static]: 调用本方法无需实例，可直接使用类名进行调用。
[^operator]: 本方法描述的是使用本类型作为左操作数的有效运算符。
[^bitfield]: 这个值是由下列位标志构成位掩码的整数。
[^void]: 无返回值。
