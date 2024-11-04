<!-- ⚠ 请勿编辑本文件 ⚠ -->
<!-- 本文档使用脚本从 WeDot 引擎源码仓库生成。 -->
<!-- 生成脚本：https://github.com/WeDot-Engine/WeDot/tree/4.3/doc/tools/make_md.py； -->
<!-- 原文件：https://github.com/WeDot-Engine/WeDot/tree/4.3/doc/classes/LabelSettings.xml。 -->

<div id="_class_labelsettings"></div>

# LabelSettings

**继承：** [`Resource`](class_resource.md) **<** [`RefCounted`](class_refcounted.md) **<** [`Object`](class_object.md)

Provides common settings to customize the text in a [`Label`](class_label.md).

## 描述

**LabelSettings** is a resource that provides common settings to customize the text in a [`Label`](class_label.md). It will take priority over the properties defined in [`Control.theme`](#class_control_property_theme). The resource can be shared between multiple labels and changed on the fly, so it's convenient and flexible way to setup text style.

## 属性

| [`Font`](class_font.md)       | [`font`](#class_labelsettings_property_font)                   |                       |
| [`Color`](class_color.md)     | [`font_color`](#class_labelsettings_property_font_color)       | ``Color(1, 1, 1, 1)`` |
| [`int`](class_int.md)         | [`font_size`](#class_labelsettings_property_font_size)         | ``16``                |
| [`float`](class_float.md)     | [`line_spacing`](#class_labelsettings_property_line_spacing)   | ``3.0``               |
| [`Color`](class_color.md)     | [`outline_color`](#class_labelsettings_property_outline_color) | ``Color(1, 1, 1, 1)`` |
| [`int`](class_int.md)         | [`outline_size`](#class_labelsettings_property_outline_size)   | ``0``                 |
| [`Color`](class_color.md)     | [`shadow_color`](#class_labelsettings_property_shadow_color)   | ``Color(0, 0, 0, 0)`` |
| [`Vector2`](class_vector2.md) | [`shadow_offset`](#class_labelsettings_property_shadow_offset) | ``Vector2(1, 1)``     |
| [`int`](class_int.md)         | [`shadow_size`](#class_labelsettings_property_shadow_size)     | ``1``                 |

<!-- rst-class:: classref-section-separator -->

---

## 属性说明

<div id="_class_labelsettings_property_font"></div>

[`Font`](class_font.md) **font** <div id="class_labelsettings_property_font"></div>

- `void` **set_font** ( value: [`Font`](class_font.md) )
- [`Font`](class_font.md) **get_font** ( )

[`Font`](class_font.md) used for the text.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_labelsettings_property_font_color"></div>

[`Color`](class_color.md) **font_color** = ``Color(1, 1, 1, 1)`` <div id="class_labelsettings_property_font_color"></div>

- `void` **set_font_color** ( value: [`Color`](class_color.md) )
- [`Color`](class_color.md) **get_font_color** ( )

Color of the text.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_labelsettings_property_font_size"></div>

[`int`](class_int.md) **font_size** = ``16`` <div id="class_labelsettings_property_font_size"></div>

- `void` **set_font_size** ( value: [`int`](class_int.md) )
- [`int`](class_int.md) **get_font_size** ( )

Size of the text.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_labelsettings_property_line_spacing"></div>

[`float`](class_float.md) **line_spacing** = ``3.0`` <div id="class_labelsettings_property_line_spacing"></div>

- `void` **set_line_spacing** ( value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_line_spacing** ( )

Vertical space between lines when the text is multiline.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_labelsettings_property_outline_color"></div>

[`Color`](class_color.md) **outline_color** = ``Color(1, 1, 1, 1)`` <div id="class_labelsettings_property_outline_color"></div>

- `void` **set_outline_color** ( value: [`Color`](class_color.md) )
- [`Color`](class_color.md) **get_outline_color** ( )

The color of the outline.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_labelsettings_property_outline_size"></div>

[`int`](class_int.md) **outline_size** = ``0`` <div id="class_labelsettings_property_outline_size"></div>

- `void` **set_outline_size** ( value: [`int`](class_int.md) )
- [`int`](class_int.md) **get_outline_size** ( )

Text outline size.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_labelsettings_property_shadow_color"></div>

[`Color`](class_color.md) **shadow_color** = ``Color(0, 0, 0, 0)`` <div id="class_labelsettings_property_shadow_color"></div>

- `void` **set_shadow_color** ( value: [`Color`](class_color.md) )
- [`Color`](class_color.md) **get_shadow_color** ( )

Color of the shadow effect. If alpha is `0`, no shadow will be drawn.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_labelsettings_property_shadow_offset"></div>

[`Vector2`](class_vector2.md) **shadow_offset** = ``Vector2(1, 1)`` <div id="class_labelsettings_property_shadow_offset"></div>

- `void` **set_shadow_offset** ( value: [`Vector2`](class_vector2.md) )
- [`Vector2`](class_vector2.md) **get_shadow_offset** ( )

Offset of the shadow effect, in pixels.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_labelsettings_property_shadow_size"></div>

[`int`](class_int.md) **shadow_size** = ``1`` <div id="class_labelsettings_property_shadow_size"></div>

- `void` **set_shadow_size** ( value: [`int`](class_int.md) )
- [`int`](class_int.md) **get_shadow_size** ( )

Size of the shadow effect.

[^virtual]: 本方法通常需要用户覆盖才能生效。
[^const]: 本方法无副作用，不会修改该实例的任何成员变量。
[^vararg]: 本方法除了能接受在此处描述的参数外，还能够继续接受任意数量的参数。
[^constructor]: 本方法用于构造某个类型。
[^static]: 调用本方法无需实例，可直接使用类名进行调用。
[^operator]: 本方法描述的是使用本类型作为左操作数的有效运算符。
[^bitfield]: 这个值是由下列位标志构成位掩码的整数。
[^void]: 无返回值。
