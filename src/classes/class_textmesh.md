<!-- ⚠ 请勿编辑本文件 ⚠ -->
<!-- 本文档使用脚本从 WeDot 引擎源码仓库生成。 -->
<!-- 生成脚本：https://github.com/WeDot-Engine/WeDot/tree/master/doc/tools/make_md.py； -->
<!-- 原文件：https://github.com/WeDot-Engine/WeDot/tree/master/doc/classes/TextMesh.xml。 -->

<div id="_class_textmesh"></div>

# TextMesh

**继承：** [`PrimitiveMesh`](class_primitivemesh.md) **<** [`Mesh`](class_mesh.md) **<** [`Resource`](class_resource.md) **<** [`RefCounted`](class_refcounted.md) **<** [`Object`](class_object.md)

Generate an [`PrimitiveMesh`](class_primitivemesh.md) from the text.

## 描述

Generate an [`PrimitiveMesh`](class_primitivemesh.md) from the text.

TextMesh can be generated only when using dynamic fonts with vector glyph contours. Bitmap fonts (including bitmap data in the TrueType/OpenType containers, like color emoji fonts) are not supported.

The UV layout is arranged in 4 horizontal strips, top to bottom: 40% of the height for the front face, 40% for the back face, 10% for the outer edges and 10% for the inner edges.

## 属性

|||
|:-:|:--|
| [AutowrapMode](#enum_textserver_autowrapmode)                 | [`autowrap_mode`](class_textmesh.md#class_textmesh_property_autowrap_mode)                                                 | ``0``             |
| [`float`](class_float.md)                                     | [`curve_step`](class_textmesh.md#class_textmesh_property_curve_step)                                                       | ``0.5``           |
| [`float`](class_float.md)                                     | [`depth`](class_textmesh.md#class_textmesh_property_depth)                                                                 | ``0.05``          |
| [`Font`](class_font.md)                                       | [`font`](class_textmesh.md#class_textmesh_property_font)                                                                   |                   |
| [`int`](class_int.md)                                         | [`font_size`](class_textmesh.md#class_textmesh_property_font_size)                                                         | ``16``            |
| [HorizontalAlignment](#enum_@globalscope_horizontalalignment) | [`horizontal_alignment`](class_textmesh.md#class_textmesh_property_horizontal_alignment)                                   | ``1``             |
| [JustificationFlag](#enum_textserver_justificationflag)       | [`justification_flags`](class_textmesh.md#class_textmesh_property_justification_flags)                                     | ``163``           |
| [`String`](class_string.md)                                   | [`language`](class_textmesh.md#class_textmesh_property_language)                                                           | ``""``            |
| [`float`](class_float.md)                                     | [`line_spacing`](class_textmesh.md#class_textmesh_property_line_spacing)                                                   | ``0.0``           |
| [`Vector2`](class_vector2.md)                                 | [`offset`](class_textmesh.md#class_textmesh_property_offset)                                                               | ``Vector2(0, 0)`` |
| [`float`](class_float.md)                                     | [`pixel_size`](class_textmesh.md#class_textmesh_property_pixel_size)                                                       | ``0.01``          |
| [StructuredTextParser](#enum_textserver_structuredtextparser) | [`structured_text_bidi_override`](class_textmesh.md#class_textmesh_property_structured_text_bidi_override)                 | ``0``             |
| [`Array`](class_array.md)                                     | [`structured_text_bidi_override_options`](class_textmesh.md#class_textmesh_property_structured_text_bidi_override_options) | ``[]``            |
| [`String`](class_string.md)                                   | [`text`](class_textmesh.md#class_textmesh_property_text)                                                                   | ``""``            |
| [Direction](#enum_textserver_direction)                       | [`text_direction`](class_textmesh.md#class_textmesh_property_text_direction)                                               | ``0``             |
| [`bool`](class_bool.md)                                       | [`uppercase`](class_textmesh.md#class_textmesh_property_uppercase)                                                         | ``false``         |
| [VerticalAlignment](#enum_@globalscope_verticalalignment)     | [`vertical_alignment`](class_textmesh.md#class_textmesh_property_vertical_alignment)                                       | ``1``             |
| [`float`](class_float.md)                                     | [`width`](class_textmesh.md#class_textmesh_property_width)                                                                 | ``500.0``         |

<!-- rst-class:: classref-section-separator -->

---

## 属性说明

<div id="_class_textmesh_property_autowrap_mode"></div>

[AutowrapMode](#enum_textserver_autowrapmode) **autowrap_mode** = ``0`` <div id="class_textmesh_property_autowrap_mode"></div>

- `void` **set_autowrap_mode** ( value: [AutowrapMode](#enum_textserver_autowrapmode) )
- [AutowrapMode](#enum_textserver_autowrapmode) **get_autowrap_mode** ( )

If set to something other than [`TextServer.AUTOWRAP_OFF`](class_textserver.md#class_textserver_constant_autowrap_off), the text gets wrapped inside the node's bounding rectangle. If you resize the node, it will change its height automatically to show all the text. To see how each mode behaves, see [AutowrapMode](#enum_textserver_autowrapmode).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_textmesh_property_curve_step"></div>

[`float`](class_float.md) **curve_step** = ``0.5`` <div id="class_textmesh_property_curve_step"></div>

- `void` **set_curve_step** ( value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_curve_step** ( )

Step (in pixels) used to approximate Bézier curves.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_textmesh_property_depth"></div>

[`float`](class_float.md) **depth** = ``0.05`` <div id="class_textmesh_property_depth"></div>

- `void` **set_depth** ( value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_depth** ( )

Depths of the mesh, if set to `0.0` only front surface, is generated, and UV layout is changed to use full texture for the front face only.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_textmesh_property_font"></div>

[`Font`](class_font.md) **font** <div id="class_textmesh_property_font"></div>

- `void` **set_font** ( value: [`Font`](class_font.md) )
- [`Font`](class_font.md) **get_font** ( )

Font configuration used to display text.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_textmesh_property_font_size"></div>

[`int`](class_int.md) **font_size** = ``16`` <div id="class_textmesh_property_font_size"></div>

- `void` **set_font_size** ( value: [`int`](class_int.md) )
- [`int`](class_int.md) **get_font_size** ( )

Font size of the **TextMesh**'s text.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_textmesh_property_horizontal_alignment"></div>

[HorizontalAlignment](#enum_@globalscope_horizontalalignment) **horizontal_alignment** = ``1`` <div id="class_textmesh_property_horizontal_alignment"></div>

- `void` **set_horizontal_alignment** ( value: [HorizontalAlignment](#enum_@globalscope_horizontalalignment) )
- [HorizontalAlignment](#enum_@globalscope_horizontalalignment) **get_horizontal_alignment** ( )

Controls the text's horizontal alignment. Supports left, center, right, and fill, or justify. Set it to one of the [HorizontalAlignment](#enum_@globalscope_horizontalalignment) constants.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_textmesh_property_justification_flags"></div>

[JustificationFlag](#enum_textserver_justificationflag) **justification_flags** = ``163`` <div id="class_textmesh_property_justification_flags"></div>

- `void` **set_justification_flags** ( value: [JustificationFlag](#enum_textserver_justificationflag) )
- [JustificationFlag](#enum_textserver_justificationflag) **get_justification_flags** ( )

Line fill alignment rules. See [JustificationFlag](#enum_textserver_justificationflag) for more information.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_textmesh_property_language"></div>

[`String`](class_string.md) **language** = ``""`` <div id="class_textmesh_property_language"></div>

- `void` **set_language** ( value: [`String`](class_string.md) )
- [`String`](class_string.md) **get_language** ( )

Language code used for text shaping algorithms, if left empty current locale is used instead.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_textmesh_property_line_spacing"></div>

[`float`](class_float.md) **line_spacing** = ``0.0`` <div id="class_textmesh_property_line_spacing"></div>

- `void` **set_line_spacing** ( value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_line_spacing** ( )

Vertical space between lines in multiline **TextMesh**.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_textmesh_property_offset"></div>

[`Vector2`](class_vector2.md) **offset** = ``Vector2(0, 0)`` <div id="class_textmesh_property_offset"></div>

- `void` **set_offset** ( value: [`Vector2`](class_vector2.md) )
- [`Vector2`](class_vector2.md) **get_offset** ( )

The text drawing offset (in pixels).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_textmesh_property_pixel_size"></div>

[`float`](class_float.md) **pixel_size** = ``0.01`` <div id="class_textmesh_property_pixel_size"></div>

- `void` **set_pixel_size** ( value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_pixel_size** ( )

The size of one pixel's width on the text to scale it in 3D.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_textmesh_property_structured_text_bidi_override"></div>

[StructuredTextParser](#enum_textserver_structuredtextparser) **structured_text_bidi_override** = ``0`` <div id="class_textmesh_property_structured_text_bidi_override"></div>

- `void` **set_structured_text_bidi_override** ( value: [StructuredTextParser](#enum_textserver_structuredtextparser) )
- [StructuredTextParser](#enum_textserver_structuredtextparser) **get_structured_text_bidi_override** ( )

Set BiDi algorithm override for the structured text.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_textmesh_property_structured_text_bidi_override_options"></div>

[`Array`](class_array.md) **structured_text_bidi_override_options** = ``[]`` <div id="class_textmesh_property_structured_text_bidi_override_options"></div>

- `void` **set_structured_text_bidi_override_options** ( value: [`Array`](class_array.md) )
- [`Array`](class_array.md) **get_structured_text_bidi_override_options** ( )

Set additional options for BiDi override.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_textmesh_property_text"></div>

[`String`](class_string.md) **text** = ``""`` <div id="class_textmesh_property_text"></div>

- `void` **set_text** ( value: [`String`](class_string.md) )
- [`String`](class_string.md) **get_text** ( )

The text to generate mesh from.

 **Note:** Due to being a [`Resource`](class_resource.md), it doesn't follow the rules of [`Node.auto_translate_mode`](class_node.md#class_node_property_auto_translate_mode). If disabling translation is desired, it should be done manually with [`Object.set_message_translation`](class_object.md#class_object_method_set_message_translation).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_textmesh_property_text_direction"></div>

[Direction](#enum_textserver_direction) **text_direction** = ``0`` <div id="class_textmesh_property_text_direction"></div>

- `void` **set_text_direction** ( value: [Direction](#enum_textserver_direction) )
- [Direction](#enum_textserver_direction) **get_text_direction** ( )

Base text writing direction.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_textmesh_property_uppercase"></div>

[`bool`](class_bool.md) **uppercase** = ``false`` <div id="class_textmesh_property_uppercase"></div>

- `void` **set_uppercase** ( value: [`bool`](class_bool.md) )
- [`bool`](class_bool.md) **is_uppercase** ( )

If `true`, all the text displays as UPPERCASE.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_textmesh_property_vertical_alignment"></div>

[VerticalAlignment](#enum_@globalscope_verticalalignment) **vertical_alignment** = ``1`` <div id="class_textmesh_property_vertical_alignment"></div>

- `void` **set_vertical_alignment** ( value: [VerticalAlignment](#enum_@globalscope_verticalalignment) )
- [VerticalAlignment](#enum_@globalscope_verticalalignment) **get_vertical_alignment** ( )

Controls the text's vertical alignment. Supports top, center, bottom. Set it to one of the [VerticalAlignment](#enum_@globalscope_verticalalignment) constants.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_textmesh_property_width"></div>

[`float`](class_float.md) **width** = ``500.0`` <div id="class_textmesh_property_width"></div>

- `void` **set_width** ( value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_width** ( )

Text width (in pixels), used for fill alignment.

[^virtual]: 本方法通常需要用户覆盖才能生效。
[^const]: 本方法无副作用，不会修改该实例的任何成员变量。
[^vararg]: 本方法除了能接受在此处描述的参数外，还能够继续接受任意数量的参数。
[^constructor]: 本方法用于构造某个类型。
[^static]: 调用本方法无需实例，可直接使用类名进行调用。
[^operator]: 本方法描述的是使用本类型作为左操作数的有效运算符。
[^bitfield]: 这个值是由下列位标志构成位掩码的整数。
[^void]: 无返回值。
