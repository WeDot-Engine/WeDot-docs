<!-- ⚠ 请勿编辑本文件 ⚠ -->
<!-- 本文档使用脚本从 WeDot 引擎源码仓库生成。 -->
<!-- 生成脚本：https://github.com/WeDot-Engine/WeDot/tree/4.3/doc/tools/make_md.py； -->
<!-- 原文件：https://github.com/WeDot-Engine/WeDot/tree/4.3/doc/classes/Button.xml。 -->

<div id="_class_button"></div>

# Button

**继承：** [`BaseButton`](class_basebutton.md) **<** [`Control`](class_control.md) **<** [`CanvasItem`](class_canvasitem.md) **<** [`Node`](class_node.md) **<** [`Object`](class_object.md)

**派生：** [`CheckBox`](class_checkbox.md), [`CheckButton`](class_checkbutton.md), [`ColorPickerButton`](class_colorpickerbutton.md), [`MenuButton`](class_menubutton.md), [`OptionButton`](class_optionbutton.md)

A themed button that can contain text and an icon.

## 描述

**Button** is the standard themed button. It can contain text and an icon, and it will display them according to the current [`Theme`](class_theme.md).

 **Example of creating a button and assigning an action when pressed by code:** 



```gdscript

    func _ready():
        var button = Button.new()
        button.text = "Click me"
        button.pressed.connect(self._button_pressed)
        add_child(button)
    
    func _button_pressed():
        print("Hello world!")
```

```csharp

    public override void _Ready()
    {
        var button = new Button();
        button.Text = "Click me";
        button.Pressed += ButtonPressed;
        AddChild(button);
    }
    
    private void ButtonPressed()
    {
        GD.Print("Hello world!");
    }
```



See also [`BaseButton`](class_basebutton.md) which contains common properties and methods associated with this node.

 **Note:** Buttons do not interpret touch input and therefore don't support multitouch, since mouse emulation can only press one button at a given time. Use [`TouchScreenButton`](class_touchscreenbutton.md) for buttons that trigger gameplay movement or actions.





## 属性

| [HorizontalAlignment](#enum_@globalscope_horizontalalignment) | [`alignment`](#class_button_property_alignment)                             | ``1``     |
| [AutowrapMode](#enum_textserver_autowrapmode)                 | [`autowrap_mode`](#class_button_property_autowrap_mode)                     | ``0``     |
| [`bool`](class_bool.md)                                       | [`clip_text`](#class_button_property_clip_text)                             | ``false`` |
| [`bool`](class_bool.md)                                       | [`expand_icon`](#class_button_property_expand_icon)                         | ``false`` |
| [`bool`](class_bool.md)                                       | [`flat`](#class_button_property_flat)                                       | ``false`` |
| [`Texture2D`](class_texture2d.md)                             | [`icon`](#class_button_property_icon)                                       |           |
| [HorizontalAlignment](#enum_@globalscope_horizontalalignment) | [`icon_alignment`](#class_button_property_icon_alignment)                   | ``0``     |
| [`String`](class_string.md)                                   | [`language`](#class_button_property_language)                               | ``""``    |
| [`String`](class_string.md)                                   | [`text`](#class_button_property_text)                                       | ``""``    |
| [TextDirection](#enum_control_textdirection)                  | [`text_direction`](#class_button_property_text_direction)                   | ``0``     |
| [OverrunBehavior](#enum_textserver_overrunbehavior)           | [`text_overrun_behavior`](#class_button_property_text_overrun_behavior)     | ``0``     |
| [VerticalAlignment](#enum_@globalscope_verticalalignment)     | [`vertical_icon_alignment`](#class_button_property_vertical_icon_alignment) | ``1``     |

## 主题属性

| [`Color`](class_color.md)         | [`font_color`](#class_button_theme_color_font_color)                                  | ``Color(0.875, 0.875, 0.875, 1)``   |
| [`Color`](class_color.md)         | [`font_disabled_color`](#class_button_theme_color_font_disabled_color)                | ``Color(0.875, 0.875, 0.875, 0.5)`` |
| [`Color`](class_color.md)         | [`font_focus_color`](#class_button_theme_color_font_focus_color)                      | ``Color(0.95, 0.95, 0.95, 1)``      |
| [`Color`](class_color.md)         | [`font_hover_color`](#class_button_theme_color_font_hover_color)                      | ``Color(0.95, 0.95, 0.95, 1)``      |
| [`Color`](class_color.md)         | [`font_hover_pressed_color`](#class_button_theme_color_font_hover_pressed_color)      | ``Color(1, 1, 1, 1)``               |
| [`Color`](class_color.md)         | [`font_outline_color`](#class_button_theme_color_font_outline_color)                  | ``Color(0, 0, 0, 1)``               |
| [`Color`](class_color.md)         | [`font_pressed_color`](#class_button_theme_color_font_pressed_color)                  | ``Color(1, 1, 1, 1)``               |
| [`Color`](class_color.md)         | [`icon_disabled_color`](#class_button_theme_color_icon_disabled_color)                | ``Color(1, 1, 1, 0.4)``             |
| [`Color`](class_color.md)         | [`icon_focus_color`](#class_button_theme_color_icon_focus_color)                      | ``Color(1, 1, 1, 1)``               |
| [`Color`](class_color.md)         | [`icon_hover_color`](#class_button_theme_color_icon_hover_color)                      | ``Color(1, 1, 1, 1)``               |
| [`Color`](class_color.md)         | [`icon_hover_pressed_color`](#class_button_theme_color_icon_hover_pressed_color)      | ``Color(1, 1, 1, 1)``               |
| [`Color`](class_color.md)         | [`icon_normal_color`](#class_button_theme_color_icon_normal_color)                    | ``Color(1, 1, 1, 1)``               |
| [`Color`](class_color.md)         | [`icon_pressed_color`](#class_button_theme_color_icon_pressed_color)                  | ``Color(1, 1, 1, 1)``               |
| [`int`](class_int.md)             | [`align_to_largest_stylebox`](#class_button_theme_constant_align_to_largest_stylebox) | ``0``                               |
| [`int`](class_int.md)             | [`h_separation`](#class_button_theme_constant_h_separation)                           | ``4``                               |
| [`int`](class_int.md)             | [`icon_max_width`](#class_button_theme_constant_icon_max_width)                       | ``0``                               |
| [`int`](class_int.md)             | [`outline_size`](#class_button_theme_constant_outline_size)                           | ``0``                               |
| [`Font`](class_font.md)           | [`font`](#class_button_theme_font_font)                                               |                                     |
| [`int`](class_int.md)             | [`font_size`](#class_button_theme_font_size_font_size)                                |                                     |
| [`Texture2D`](class_texture2d.md) | [`icon`](#class_button_theme_icon_icon)                                               |                                     |
| [`StyleBox`](class_stylebox.md)   | [`disabled`](#class_button_theme_style_disabled)                                      |                                     |
| [`StyleBox`](class_stylebox.md)   | [`disabled_mirrored`](#class_button_theme_style_disabled_mirrored)                    |                                     |
| [`StyleBox`](class_stylebox.md)   | [`focus`](#class_button_theme_style_focus)                                            |                                     |
| [`StyleBox`](class_stylebox.md)   | [`hover`](#class_button_theme_style_hover)                                            |                                     |
| [`StyleBox`](class_stylebox.md)   | [`hover_mirrored`](#class_button_theme_style_hover_mirrored)                          |                                     |
| [`StyleBox`](class_stylebox.md)   | [`hover_pressed`](#class_button_theme_style_hover_pressed)                            |                                     |
| [`StyleBox`](class_stylebox.md)   | [`hover_pressed_mirrored`](#class_button_theme_style_hover_pressed_mirrored)          |                                     |
| [`StyleBox`](class_stylebox.md)   | [`normal`](#class_button_theme_style_normal)                                          |                                     |
| [`StyleBox`](class_stylebox.md)   | [`normal_mirrored`](#class_button_theme_style_normal_mirrored)                        |                                     |
| [`StyleBox`](class_stylebox.md)   | [`pressed`](#class_button_theme_style_pressed)                                        |                                     |
| [`StyleBox`](class_stylebox.md)   | [`pressed_mirrored`](#class_button_theme_style_pressed_mirrored)                      |                                     |

<!-- rst-class:: classref-section-separator -->

---

## 属性说明

<div id="_class_button_property_alignment"></div>

[HorizontalAlignment](#enum_@globalscope_horizontalalignment) **alignment** = ``1`` <div id="class_button_property_alignment"></div>

- `void` **set_text_alignment** ( value: [HorizontalAlignment](#enum_@globalscope_horizontalalignment) )
- [HorizontalAlignment](#enum_@globalscope_horizontalalignment) **get_text_alignment** ( )

Text alignment policy for the button's text, use one of the [HorizontalAlignment](#enum_@globalscope_horizontalalignment) constants.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_button_property_autowrap_mode"></div>

[AutowrapMode](#enum_textserver_autowrapmode) **autowrap_mode** = ``0`` <div id="class_button_property_autowrap_mode"></div>

- `void` **set_autowrap_mode** ( value: [AutowrapMode](#enum_textserver_autowrapmode) )
- [AutowrapMode](#enum_textserver_autowrapmode) **get_autowrap_mode** ( )

If set to something other than [`TextServer.AUTOWRAP_OFF`](#class_textserver_constant_autowrap_off), the text gets wrapped inside the node's bounding rectangle.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_button_property_clip_text"></div>

[`bool`](class_bool.md) **clip_text** = ``false`` <div id="class_button_property_clip_text"></div>

- `void` **set_clip_text** ( value: [`bool`](class_bool.md) )
- [`bool`](class_bool.md) **get_clip_text** ( )

When this property is enabled, text that is too large to fit the button is clipped, when disabled the Button will always be wide enough to hold the text.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_button_property_expand_icon"></div>

[`bool`](class_bool.md) **expand_icon** = ``false`` <div id="class_button_property_expand_icon"></div>

- `void` **set_expand_icon** ( value: [`bool`](class_bool.md) )
- [`bool`](class_bool.md) **is_expand_icon** ( )

When enabled, the button's icon will expand/shrink to fit the button's size while keeping its aspect. See also [`icon_max_width`](#class_button_theme_constant_icon_max_width).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_button_property_flat"></div>

[`bool`](class_bool.md) **flat** = ``false`` <div id="class_button_property_flat"></div>

- `void` **set_flat** ( value: [`bool`](class_bool.md) )
- [`bool`](class_bool.md) **is_flat** ( )

Flat buttons don't display decoration.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_button_property_icon"></div>

[`Texture2D`](class_texture2d.md) **icon** <div id="class_button_property_icon"></div>

- `void` **set_button_icon** ( value: [`Texture2D`](class_texture2d.md) )
- [`Texture2D`](class_texture2d.md) **get_button_icon** ( )

Button's icon, if text is present the icon will be placed before the text.

To edit margin and spacing of the icon, use [`h_separation`](#class_button_theme_constant_h_separation) theme property and `content_margin_*` properties of the used [`StyleBox`](class_stylebox.md) es.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_button_property_icon_alignment"></div>

[HorizontalAlignment](#enum_@globalscope_horizontalalignment) **icon_alignment** = ``0`` <div id="class_button_property_icon_alignment"></div>

- `void` **set_icon_alignment** ( value: [HorizontalAlignment](#enum_@globalscope_horizontalalignment) )
- [HorizontalAlignment](#enum_@globalscope_horizontalalignment) **get_icon_alignment** ( )

Specifies if the icon should be aligned horizontally to the left, right, or center of a button. Uses the same [HorizontalAlignment](#enum_@globalscope_horizontalalignment) constants as the text alignment. If centered horizontally and vertically, text will draw on top of the icon.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_button_property_language"></div>

[`String`](class_string.md) **language** = ``""`` <div id="class_button_property_language"></div>

- `void` **set_language** ( value: [`String`](class_string.md) )
- [`String`](class_string.md) **get_language** ( )

Language code used for line-breaking and text shaping algorithms, if left empty current locale is used instead.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_button_property_text"></div>

[`String`](class_string.md) **text** = ``""`` <div id="class_button_property_text"></div>

- `void` **set_text** ( value: [`String`](class_string.md) )
- [`String`](class_string.md) **get_text** ( )

The button's text that will be displayed inside the button's area.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_button_property_text_direction"></div>

[TextDirection](#enum_control_textdirection) **text_direction** = ``0`` <div id="class_button_property_text_direction"></div>

- `void` **set_text_direction** ( value: [TextDirection](#enum_control_textdirection) )
- [TextDirection](#enum_control_textdirection) **get_text_direction** ( )

Base text writing direction.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_button_property_text_overrun_behavior"></div>

[OverrunBehavior](#enum_textserver_overrunbehavior) **text_overrun_behavior** = ``0`` <div id="class_button_property_text_overrun_behavior"></div>

- `void` **set_text_overrun_behavior** ( value: [OverrunBehavior](#enum_textserver_overrunbehavior) )
- [OverrunBehavior](#enum_textserver_overrunbehavior) **get_text_overrun_behavior** ( )

Sets the clipping behavior when the text exceeds the node's bounding rectangle. See [OverrunBehavior](#enum_textserver_overrunbehavior) for a description of all modes.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_button_property_vertical_icon_alignment"></div>

[VerticalAlignment](#enum_@globalscope_verticalalignment) **vertical_icon_alignment** = ``1`` <div id="class_button_property_vertical_icon_alignment"></div>

- `void` **set_vertical_icon_alignment** ( value: [VerticalAlignment](#enum_@globalscope_verticalalignment) )
- [VerticalAlignment](#enum_@globalscope_verticalalignment) **get_vertical_icon_alignment** ( )

Specifies if the icon should be aligned vertically to the top, bottom, or center of a button. Uses the same [VerticalAlignment](#enum_@globalscope_verticalalignment) constants as the text alignment. If centered horizontally and vertically, text will draw on top of the icon.

<!-- rst-class:: classref-section-separator -->

---

## 主题属性说明

<div id="_class_button_theme_color_font_color"></div>

[`Color`](class_color.md) **font_color** = ``Color(0.875, 0.875, 0.875, 1)`` <div id="class_button_theme_color_font_color"></div>

Default text [`Color`](class_color.md) of the **Button**.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_button_theme_color_font_disabled_color"></div>

[`Color`](class_color.md) **font_disabled_color** = ``Color(0.875, 0.875, 0.875, 0.5)`` <div id="class_button_theme_color_font_disabled_color"></div>

Text [`Color`](class_color.md) used when the **Button** is disabled.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_button_theme_color_font_focus_color"></div>

[`Color`](class_color.md) **font_focus_color** = ``Color(0.95, 0.95, 0.95, 1)`` <div id="class_button_theme_color_font_focus_color"></div>

Text [`Color`](class_color.md) used when the **Button** is focused. Only replaces the normal text color of the button. Disabled, hovered, and pressed states take precedence over this color.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_button_theme_color_font_hover_color"></div>

[`Color`](class_color.md) **font_hover_color** = ``Color(0.95, 0.95, 0.95, 1)`` <div id="class_button_theme_color_font_hover_color"></div>

Text [`Color`](class_color.md) used when the **Button** is being hovered.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_button_theme_color_font_hover_pressed_color"></div>

[`Color`](class_color.md) **font_hover_pressed_color** = ``Color(1, 1, 1, 1)`` <div id="class_button_theme_color_font_hover_pressed_color"></div>

Text [`Color`](class_color.md) used when the **Button** is being hovered and pressed.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_button_theme_color_font_outline_color"></div>

[`Color`](class_color.md) **font_outline_color** = ``Color(0, 0, 0, 1)`` <div id="class_button_theme_color_font_outline_color"></div>

The tint of text outline of the **Button**.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_button_theme_color_font_pressed_color"></div>

[`Color`](class_color.md) **font_pressed_color** = ``Color(1, 1, 1, 1)`` <div id="class_button_theme_color_font_pressed_color"></div>

Text [`Color`](class_color.md) used when the **Button** is being pressed.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_button_theme_color_icon_disabled_color"></div>

[`Color`](class_color.md) **icon_disabled_color** = ``Color(1, 1, 1, 0.4)`` <div id="class_button_theme_color_icon_disabled_color"></div>

Icon modulate [`Color`](class_color.md) used when the **Button** is disabled.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_button_theme_color_icon_focus_color"></div>

[`Color`](class_color.md) **icon_focus_color** = ``Color(1, 1, 1, 1)`` <div id="class_button_theme_color_icon_focus_color"></div>

Icon modulate [`Color`](class_color.md) used when the **Button** is focused. Only replaces the normal modulate color of the button. Disabled, hovered, and pressed states take precedence over this color.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_button_theme_color_icon_hover_color"></div>

[`Color`](class_color.md) **icon_hover_color** = ``Color(1, 1, 1, 1)`` <div id="class_button_theme_color_icon_hover_color"></div>

Icon modulate [`Color`](class_color.md) used when the **Button** is being hovered.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_button_theme_color_icon_hover_pressed_color"></div>

[`Color`](class_color.md) **icon_hover_pressed_color** = ``Color(1, 1, 1, 1)`` <div id="class_button_theme_color_icon_hover_pressed_color"></div>

Icon modulate [`Color`](class_color.md) used when the **Button** is being hovered and pressed.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_button_theme_color_icon_normal_color"></div>

[`Color`](class_color.md) **icon_normal_color** = ``Color(1, 1, 1, 1)`` <div id="class_button_theme_color_icon_normal_color"></div>

Default icon modulate [`Color`](class_color.md) of the **Button**.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_button_theme_color_icon_pressed_color"></div>

[`Color`](class_color.md) **icon_pressed_color** = ``Color(1, 1, 1, 1)`` <div id="class_button_theme_color_icon_pressed_color"></div>

Icon modulate [`Color`](class_color.md) used when the **Button** is being pressed.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_button_theme_constant_align_to_largest_stylebox"></div>

[`int`](class_int.md) **align_to_largest_stylebox** = ``0`` <div id="class_button_theme_constant_align_to_largest_stylebox"></div>

This constant acts as a boolean. If `true`, the minimum size of the button and text/icon alignment is always based on the largest stylebox margins, otherwise it's based on the current button state stylebox margins.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_button_theme_constant_h_separation"></div>

[`int`](class_int.md) **h_separation** = ``4`` <div id="class_button_theme_constant_h_separation"></div>

The horizontal space between **Button**'s icon and text. Negative values will be treated as `0` when used.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_button_theme_constant_icon_max_width"></div>

[`int`](class_int.md) **icon_max_width** = ``0`` <div id="class_button_theme_constant_icon_max_width"></div>

The maximum allowed width of the **Button**'s icon. This limit is applied on top of the default size of the icon, or its expanded size if [`expand_icon`](#class_button_property_expand_icon) is `true`. The height is adjusted according to the icon's ratio. If the button has additional icons (e.g. [`CheckBox`](class_checkbox.md)), they will also be limited.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_button_theme_constant_outline_size"></div>

[`int`](class_int.md) **outline_size** = ``0`` <div id="class_button_theme_constant_outline_size"></div>

The size of the text outline.

 **Note:** If using a font with [`FontFile.multichannel_signed_distance_field`](#class_fontfile_property_multichannel_signed_distance_field) enabled, its [`FontFile.msdf_pixel_range`](#class_fontfile_property_msdf_pixel_range) must be set to at least *twice* the value of [`outline_size`](#class_button_theme_constant_outline_size) for outline rendering to look correct. Otherwise, the outline may appear to be cut off earlier than intended.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_button_theme_font_font"></div>

[`Font`](class_font.md) **font** <div id="class_button_theme_font_font"></div>

[`Font`](class_font.md) of the **Button**'s text.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_button_theme_font_size_font_size"></div>

[`int`](class_int.md) **font_size** <div id="class_button_theme_font_size_font_size"></div>

Font size of the **Button**'s text.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_button_theme_icon_icon"></div>

[`Texture2D`](class_texture2d.md) **icon** <div id="class_button_theme_icon_icon"></div>

Default icon for the **Button**. Appears only if [`icon`](#class_button_property_icon) is not assigned.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_button_theme_style_disabled"></div>

[`StyleBox`](class_stylebox.md) **disabled** <div id="class_button_theme_style_disabled"></div>

[`StyleBox`](class_stylebox.md) used when the **Button** is disabled.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_button_theme_style_disabled_mirrored"></div>

[`StyleBox`](class_stylebox.md) **disabled_mirrored** <div id="class_button_theme_style_disabled_mirrored"></div>

[`StyleBox`](class_stylebox.md) used when the **Button** is disabled (for right-to-left layouts).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_button_theme_style_focus"></div>

[`StyleBox`](class_stylebox.md) **focus** <div id="class_button_theme_style_focus"></div>

[`StyleBox`](class_stylebox.md) used when the **Button** is focused. The [`focus`](#class_button_theme_style_focus) [`StyleBox`](class_stylebox.md) is displayed *over* the base [`StyleBox`](class_stylebox.md), so a partially transparent [`StyleBox`](class_stylebox.md) should be used to ensure the base [`StyleBox`](class_stylebox.md) remains visible. A [`StyleBox`](class_stylebox.md) that represents an outline or an underline works well for this purpose. To disable the focus visual effect, assign a [`StyleBoxEmpty`](class_styleboxempty.md) resource. Note that disabling the focus visual effect will harm keyboard/controller navigation usability, so this is not recommended for accessibility reasons.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_button_theme_style_hover"></div>

[`StyleBox`](class_stylebox.md) **hover** <div id="class_button_theme_style_hover"></div>

[`StyleBox`](class_stylebox.md) used when the **Button** is being hovered.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_button_theme_style_hover_mirrored"></div>

[`StyleBox`](class_stylebox.md) **hover_mirrored** <div id="class_button_theme_style_hover_mirrored"></div>

[`StyleBox`](class_stylebox.md) used when the **Button** is being hovered (for right-to-left layouts).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_button_theme_style_hover_pressed"></div>

[`StyleBox`](class_stylebox.md) **hover_pressed** <div id="class_button_theme_style_hover_pressed"></div>

[`StyleBox`](class_stylebox.md) used when the **Button** is being pressed and hovered at the same time.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_button_theme_style_hover_pressed_mirrored"></div>

[`StyleBox`](class_stylebox.md) **hover_pressed_mirrored** <div id="class_button_theme_style_hover_pressed_mirrored"></div>

[`StyleBox`](class_stylebox.md) used when the **Button** is being pressed and hovered at the same time (for right-to-left layouts).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_button_theme_style_normal"></div>

[`StyleBox`](class_stylebox.md) **normal** <div id="class_button_theme_style_normal"></div>

Default [`StyleBox`](class_stylebox.md) for the **Button**.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_button_theme_style_normal_mirrored"></div>

[`StyleBox`](class_stylebox.md) **normal_mirrored** <div id="class_button_theme_style_normal_mirrored"></div>

Default [`StyleBox`](class_stylebox.md) for the **Button** (for right-to-left layouts).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_button_theme_style_pressed"></div>

[`StyleBox`](class_stylebox.md) **pressed** <div id="class_button_theme_style_pressed"></div>

[`StyleBox`](class_stylebox.md) used when the **Button** is being pressed.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_button_theme_style_pressed_mirrored"></div>

[`StyleBox`](class_stylebox.md) **pressed_mirrored** <div id="class_button_theme_style_pressed_mirrored"></div>

[`StyleBox`](class_stylebox.md) used when the **Button** is being pressed (for right-to-left layouts).

[^virtual]: 本方法通常需要用户覆盖才能生效。
[^const]: 本方法无副作用，不会修改该实例的任何成员变量。
[^vararg]: 本方法除了能接受在此处描述的参数外，还能够继续接受任意数量的参数。
[^constructor]: 本方法用于构造某个类型。
[^static]: 调用本方法无需实例，可直接使用类名进行调用。
[^operator]: 本方法描述的是使用本类型作为左操作数的有效运算符。
[^bitfield]: 这个值是由下列位标志构成位掩码的整数。
[^void]: 无返回值。
