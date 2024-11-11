<!-- ⚠ 请勿编辑本文件 ⚠ -->
<!-- 本文档使用脚本从 WeDot 引擎源码仓库生成。 -->
<!-- 生成脚本：https://github.com/WeDot-Engine/WeDot/tree/master/doc/tools/make_md.py； -->
<!-- 原文件：https://github.com/WeDot-Engine/WeDot/tree/master/doc/classes/CharFXTransform.xml。 -->

<div id="_class_charfxtransform"></div>

# CharFXTransform

**继承：** [`RefCounted`](class_refcounted.md) **<** [`Object`](class_object.md)

Controls how an individual character will be displayed in a [`RichTextEffect`](class_richtexteffect.md).

## 描述

By setting various properties on this object, you can control how individual characters will be displayed in a [`RichTextEffect`](class_richtexteffect.md).

## 属性

|||
|:-:|:--|
| [`Color`](class_color.md)             | [`color`](class_charfxtransform.md#class_charfxtransform_property_color)                   | ``Color(0, 0, 0, 1)``             |
| [`float`](class_float.md)             | [`elapsed_time`](class_charfxtransform.md#class_charfxtransform_property_elapsed_time)     | ``0.0``                           |
| [`Dictionary`](class_dictionary.md)   | [`env`](class_charfxtransform.md#class_charfxtransform_property_env)                       | ``{}``                            |
| [`RID`](class_rid.md)                 | [`font`](class_charfxtransform.md#class_charfxtransform_property_font)                     | ``RID()``                         |
| [`int`](class_int.md)                 | [`glyph_count`](class_charfxtransform.md#class_charfxtransform_property_glyph_count)       | ``0``                             |
| [`int`](class_int.md)                 | [`glyph_flags`](class_charfxtransform.md#class_charfxtransform_property_glyph_flags)       | ``0``                             |
| [`int`](class_int.md)                 | [`glyph_index`](class_charfxtransform.md#class_charfxtransform_property_glyph_index)       | ``0``                             |
| [`Vector2`](class_vector2.md)         | [`offset`](class_charfxtransform.md#class_charfxtransform_property_offset)                 | ``Vector2(0, 0)``                 |
| [`bool`](class_bool.md)               | [`outline`](class_charfxtransform.md#class_charfxtransform_property_outline)               | ``false``                         |
| [`Vector2i`](class_vector2i.md)       | [`range`](class_charfxtransform.md#class_charfxtransform_property_range)                   | ``Vector2i(0, 0)``                |
| [`int`](class_int.md)                 | [`relative_index`](class_charfxtransform.md#class_charfxtransform_property_relative_index) | ``0``                             |
| [`Transform2D`](class_transform2d.md) | [`transform`](class_charfxtransform.md#class_charfxtransform_property_transform)           | ``Transform2D(1, 0, 0, 1, 0, 0)`` |
| [`bool`](class_bool.md)               | [`visible`](class_charfxtransform.md#class_charfxtransform_property_visible)               | ``true``                          |

<!-- rst-class:: classref-section-separator -->

---

## 属性说明

<div id="_class_charfxtransform_property_color"></div>

[`Color`](class_color.md) **color** = ``Color(0, 0, 0, 1)`` <div id="class_charfxtransform_property_color"></div>

- `void` **set_color** ( value: [`Color`](class_color.md) )
- [`Color`](class_color.md) **get_color** ( )

The color the character will be drawn with.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_charfxtransform_property_elapsed_time"></div>

[`float`](class_float.md) **elapsed_time** = ``0.0`` <div id="class_charfxtransform_property_elapsed_time"></div>

- `void` **set_elapsed_time** ( value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_elapsed_time** ( )

The time elapsed since the [`RichTextLabel`](class_richtextlabel.md) was added to the scene tree (in seconds). Time stops when the [`RichTextLabel`](class_richtextlabel.md) is paused (see [`Node.process_mode`](class_node.md#class_node_property_process_mode)). Resets when the text in the [`RichTextLabel`](class_richtextlabel.md) is changed.

 **Note:** Time still passes while the [`RichTextLabel`](class_richtextlabel.md) is hidden.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_charfxtransform_property_env"></div>

[`Dictionary`](class_dictionary.md) **env** = ``{}`` <div id="class_charfxtransform_property_env"></div>

- `void` **set_environment** ( value: [`Dictionary`](class_dictionary.md) )
- [`Dictionary`](class_dictionary.md) **get_environment** ( )

Contains the arguments passed in the opening BBCode tag. By default, arguments are strings; if their contents match a type such as [`bool`](class_bool.md), [`int`](class_int.md) or [`float`](class_float.md), they will be converted automatically. Color codes in the form `#rrggbb` or `#rgb` will be converted to an opaque [`Color`](class_color.md). String arguments may not contain spaces, even if they're quoted. If present, quotes will also be present in the final string.

For example, the opening BBCode tag `[example foo=hello bar=true baz=42 color=#ffffff]` will map to the following [`Dictionary`](class_dictionary.md):

```

    {"foo": "hello", "bar": true, "baz": 42, "color": Color(1, 1, 1, 1)}
```



<!-- rst-class:: classref-item-separator -->

---

<div id="_class_charfxtransform_property_font"></div>

[`RID`](class_rid.md) **font** = ``RID()`` <div id="class_charfxtransform_property_font"></div>

- `void` **set_font** ( value: [`RID`](class_rid.md) )
- [`RID`](class_rid.md) **get_font** ( )

Font resource used to render glyph.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_charfxtransform_property_glyph_count"></div>

[`int`](class_int.md) **glyph_count** = ``0`` <div id="class_charfxtransform_property_glyph_count"></div>

- `void` **set_glyph_count** ( value: [`int`](class_int.md) )
- [`int`](class_int.md) **get_glyph_count** ( )

Number of glyphs in the grapheme cluster. This value is set in the first glyph of a cluster. Setting this property won't affect drawing.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_charfxtransform_property_glyph_flags"></div>

[`int`](class_int.md) **glyph_flags** = ``0`` <div id="class_charfxtransform_property_glyph_flags"></div>

- `void` **set_glyph_flags** ( value: [`int`](class_int.md) )
- [`int`](class_int.md) **get_glyph_flags** ( )

Glyph flags. See [GraphemeFlag](#enum_textserver_graphemeflag) for more info. Setting this property won't affect drawing.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_charfxtransform_property_glyph_index"></div>

[`int`](class_int.md) **glyph_index** = ``0`` <div id="class_charfxtransform_property_glyph_index"></div>

- `void` **set_glyph_index** ( value: [`int`](class_int.md) )
- [`int`](class_int.md) **get_glyph_index** ( )

Font specific glyph index.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_charfxtransform_property_offset"></div>

[`Vector2`](class_vector2.md) **offset** = ``Vector2(0, 0)`` <div id="class_charfxtransform_property_offset"></div>

- `void` **set_offset** ( value: [`Vector2`](class_vector2.md) )
- [`Vector2`](class_vector2.md) **get_offset** ( )

The position offset the character will be drawn with (in pixels).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_charfxtransform_property_outline"></div>

[`bool`](class_bool.md) **outline** = ``false`` <div id="class_charfxtransform_property_outline"></div>

- `void` **set_outline** ( value: [`bool`](class_bool.md) )
- [`bool`](class_bool.md) **is_outline** ( )

If `true`, FX transform is called for outline drawing. Setting this property won't affect drawing.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_charfxtransform_property_range"></div>

[`Vector2i`](class_vector2i.md) **range** = ``Vector2i(0, 0)`` <div id="class_charfxtransform_property_range"></div>

- `void` **set_range** ( value: [`Vector2i`](class_vector2i.md) )
- [`Vector2i`](class_vector2i.md) **get_range** ( )

Absolute character range in the string, corresponding to the glyph. Setting this property won't affect drawing.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_charfxtransform_property_relative_index"></div>

[`int`](class_int.md) **relative_index** = ``0`` <div id="class_charfxtransform_property_relative_index"></div>

- `void` **set_relative_index** ( value: [`int`](class_int.md) )
- [`int`](class_int.md) **get_relative_index** ( )

The character offset of the glyph, relative to the current [`RichTextEffect`](class_richtexteffect.md) custom block. Setting this property won't affect drawing.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_charfxtransform_property_transform"></div>

[`Transform2D`](class_transform2d.md) **transform** = ``Transform2D(1, 0, 0, 1, 0, 0)`` <div id="class_charfxtransform_property_transform"></div>

- `void` **set_transform** ( value: [`Transform2D`](class_transform2d.md) )
- [`Transform2D`](class_transform2d.md) **get_transform** ( )

The current transform of the current glyph. It can be overridden (for example, by driving the position and rotation from a curve). You can also alter the existing value to apply transforms on top of other effects.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_charfxtransform_property_visible"></div>

[`bool`](class_bool.md) **visible** = ``true`` <div id="class_charfxtransform_property_visible"></div>

- `void` **set_visibility** ( value: [`bool`](class_bool.md) )
- [`bool`](class_bool.md) **is_visible** ( )

If `true`, the character will be drawn. If `false`, the character will be hidden. Characters around hidden characters will reflow to take the space of hidden characters. If this is not desired, set their [`color`](class_charfxtransform.md#class_charfxtransform_property_color) to `Color(1, 1, 1, 0)` instead.

[^virtual]: 本方法通常需要用户覆盖才能生效。
[^const]: 本方法无副作用，不会修改该实例的任何成员变量。
[^vararg]: 本方法除了能接受在此处描述的参数外，还能够继续接受任意数量的参数。
[^constructor]: 本方法用于构造某个类型。
[^static]: 调用本方法无需实例，可直接使用类名进行调用。
[^operator]: 本方法描述的是使用本类型作为左操作数的有效运算符。
[^bitfield]: 这个值是由下列位标志构成位掩码的整数。
[^void]: 无返回值。
