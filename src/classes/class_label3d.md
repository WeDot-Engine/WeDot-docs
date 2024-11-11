<!-- ⚠ 请勿编辑本文件 ⚠ -->
<!-- 本文档使用脚本从 WeDot 引擎源码仓库生成。 -->
<!-- 生成脚本：https://github.com/WeDot-Engine/WeDot/tree/master/doc/tools/make_md.py； -->
<!-- 原文件：https://github.com/WeDot-Engine/WeDot/tree/master/doc/classes/Label3D.xml。 -->

<div id="_class_label3d"></div>

# Label3D

**继承：** [`GeometryInstance3D`](class_geometryinstance3d.md) **<** [`VisualInstance3D`](class_visualinstance3d.md) **<** [`Node3D`](class_node3d.md) **<** [`Node`](class_node.md) **<** [`Object`](class_object.md)

A node for displaying plain text in 3D space.

## 描述

A node for displaying plain text in 3D space. By adjusting various properties of this node, you can configure things such as the text's appearance and whether it always faces the camera.

## 属性

|||
|:-:|:--|
| [`float`](class_float.md)                                             | [`alpha_antialiasing_edge`](class_label3d.md#class_label3d_property_alpha_antialiasing_edge)                             | ``0.0``                                                                                                             |
| [AlphaAntiAliasing](#enum_basematerial3d_alphaantialiasing)           | [`alpha_antialiasing_mode`](class_label3d.md#class_label3d_property_alpha_antialiasing_mode)                             | ``0``                                                                                                               |
| [AlphaCutMode](#enum_label3d_alphacutmode)                            | [`alpha_cut`](class_label3d.md#class_label3d_property_alpha_cut)                                                         | ``0``                                                                                                               |
| [`float`](class_float.md)                                             | [`alpha_hash_scale`](class_label3d.md#class_label3d_property_alpha_hash_scale)                                           | ``1.0``                                                                                                             |
| [`float`](class_float.md)                                             | [`alpha_scissor_threshold`](class_label3d.md#class_label3d_property_alpha_scissor_threshold)                             | ``0.5``                                                                                                             |
| [AutowrapMode](#enum_textserver_autowrapmode)                         | [`autowrap_mode`](class_label3d.md#class_label3d_property_autowrap_mode)                                                 | ``0``                                                                                                               |
| [BillboardMode](#enum_basematerial3d_billboardmode)                   | [`billboard`](class_label3d.md#class_label3d_property_billboard)                                                         | ``0``                                                                                                               |
| [ShadowCastingSetting](#enum_geometryinstance3d_shadowcastingsetting) | cast_shadow                                                                                                              | ``0`` (overrides [`GeometryInstance3D`](class_geometryinstance3d.md#class_geometryinstance3d_property_cast_shadow)) |
| [`bool`](class_bool.md)                                               | [`double_sided`](class_label3d.md#class_label3d_property_double_sided)                                                   | ``true``                                                                                                            |
| [`bool`](class_bool.md)                                               | [`fixed_size`](class_label3d.md#class_label3d_property_fixed_size)                                                       | ``false``                                                                                                           |
| [`Font`](class_font.md)                                               | [`font`](class_label3d.md#class_label3d_property_font)                                                                   |                                                                                                                     |
| [`int`](class_int.md)                                                 | [`font_size`](class_label3d.md#class_label3d_property_font_size)                                                         | ``32``                                                                                                              |
| [GIMode](#enum_geometryinstance3d_gimode)                             | gi_mode                                                                                                                  | ``0`` (overrides [`GeometryInstance3D`](class_geometryinstance3d.md#class_geometryinstance3d_property_gi_mode))     |
| [HorizontalAlignment](#enum_@globalscope_horizontalalignment)         | [`horizontal_alignment`](class_label3d.md#class_label3d_property_horizontal_alignment)                                   | ``1``                                                                                                               |
| [JustificationFlag](#enum_textserver_justificationflag)               | [`justification_flags`](class_label3d.md#class_label3d_property_justification_flags)                                     | ``163``                                                                                                             |
| [`String`](class_string.md)                                           | [`language`](class_label3d.md#class_label3d_property_language)                                                           | ``""``                                                                                                              |
| [`float`](class_float.md)                                             | [`line_spacing`](class_label3d.md#class_label3d_property_line_spacing)                                                   | ``0.0``                                                                                                             |
| [`Color`](class_color.md)                                             | [`modulate`](class_label3d.md#class_label3d_property_modulate)                                                           | ``Color(1, 1, 1, 1)``                                                                                               |
| [`bool`](class_bool.md)                                               | [`no_depth_test`](class_label3d.md#class_label3d_property_no_depth_test)                                                 | ``false``                                                                                                           |
| [`Vector2`](class_vector2.md)                                         | [`offset`](class_label3d.md#class_label3d_property_offset)                                                               | ``Vector2(0, 0)``                                                                                                   |
| [`Color`](class_color.md)                                             | [`outline_modulate`](class_label3d.md#class_label3d_property_outline_modulate)                                           | ``Color(0, 0, 0, 1)``                                                                                               |
| [`int`](class_int.md)                                                 | [`outline_render_priority`](class_label3d.md#class_label3d_property_outline_render_priority)                             | ``-1``                                                                                                              |
| [`int`](class_int.md)                                                 | [`outline_size`](class_label3d.md#class_label3d_property_outline_size)                                                   | ``12``                                                                                                              |
| [`float`](class_float.md)                                             | [`pixel_size`](class_label3d.md#class_label3d_property_pixel_size)                                                       | ``0.005``                                                                                                           |
| [`int`](class_int.md)                                                 | [`render_priority`](class_label3d.md#class_label3d_property_render_priority)                                             | ``0``                                                                                                               |
| [`bool`](class_bool.md)                                               | [`shaded`](class_label3d.md#class_label3d_property_shaded)                                                               | ``false``                                                                                                           |
| [StructuredTextParser](#enum_textserver_structuredtextparser)         | [`structured_text_bidi_override`](class_label3d.md#class_label3d_property_structured_text_bidi_override)                 | ``0``                                                                                                               |
| [`Array`](class_array.md)                                             | [`structured_text_bidi_override_options`](class_label3d.md#class_label3d_property_structured_text_bidi_override_options) | ``[]``                                                                                                              |
| [`String`](class_string.md)                                           | [`text`](class_label3d.md#class_label3d_property_text)                                                                   | ``""``                                                                                                              |
| [Direction](#enum_textserver_direction)                               | [`text_direction`](class_label3d.md#class_label3d_property_text_direction)                                               | ``0``                                                                                                               |
| [TextureFilter](#enum_basematerial3d_texturefilter)                   | [`texture_filter`](class_label3d.md#class_label3d_property_texture_filter)                                               | ``3``                                                                                                               |
| [`bool`](class_bool.md)                                               | [`uppercase`](class_label3d.md#class_label3d_property_uppercase)                                                         | ``false``                                                                                                           |
| [VerticalAlignment](#enum_@globalscope_verticalalignment)             | [`vertical_alignment`](class_label3d.md#class_label3d_property_vertical_alignment)                                       | ``1``                                                                                                               |
| [`float`](class_float.md)                                             | [`width`](class_label3d.md#class_label3d_property_width)                                                                 | ``500.0``                                                                                                           |

## 方法

|||
|:-:|:--|
| [`TriangleMesh`](class_trianglemesh.md) | [`generate_triangle_mesh`](class_label3d.md#class_label3d_method_generate_triangle_mesh) ( ) const[^const]                                              |
| [`bool`](class_bool.md)                 | [`get_draw_flag`](class_label3d.md#class_label3d_method_get_draw_flag) ( flag: [DrawFlags](#enum_label3d_drawflags) ) const[^const]                     |
| `void`                                  | [`set_draw_flag`](class_label3d.md#class_label3d_method_set_draw_flag) ( flag: [DrawFlags](#enum_label3d_drawflags), enabled: [`bool`](class_bool.md) ) |

<!-- rst-class:: classref-section-separator -->

---

## 枚举

<div id="_class_enum_label3d_drawflags"></div>

enum **DrawFlags**: <div id="enum_label3d_drawflags"></div>

<div id="_class_label3d_constant_flag_shaded"></div>

[DrawFlags](#enum_label3d_drawflags) **FLAG_SHADED** = ``0``

If set, lights in the environment affect the label.

<div id="_class_label3d_constant_flag_double_sided"></div>

[DrawFlags](#enum_label3d_drawflags) **FLAG_DOUBLE_SIDED** = ``1``

If set, text can be seen from the back as well. If not, the text is invisible when looking at it from behind.

<div id="_class_label3d_constant_flag_disable_depth_test"></div>

[DrawFlags](#enum_label3d_drawflags) **FLAG_DISABLE_DEPTH_TEST** = ``2``

Disables the depth test, so this object is drawn on top of all others. However, objects drawn after it in the draw order may cover it.

<div id="_class_label3d_constant_flag_fixed_size"></div>

[DrawFlags](#enum_label3d_drawflags) **FLAG_FIXED_SIZE** = ``3``

Label is scaled by depth so that it always appears the same size on screen.

<div id="_class_label3d_constant_flag_max"></div>

[DrawFlags](#enum_label3d_drawflags) **FLAG_MAX** = ``4``

Represents the size of the [DrawFlags](#enum_label3d_drawflags) enum.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_enum_label3d_alphacutmode"></div>

enum **AlphaCutMode**: <div id="enum_label3d_alphacutmode"></div>

<div id="_class_label3d_constant_alpha_cut_disabled"></div>

[AlphaCutMode](#enum_label3d_alphacutmode) **ALPHA_CUT_DISABLED** = ``0``

This mode performs standard alpha blending. It can display translucent areas, but transparency sorting issues may be visible when multiple transparent materials are overlapping. [`GeometryInstance3D.cast_shadow`](class_geometryinstance3d.md#class_geometryinstance3d_property_cast_shadow) has no effect when this transparency mode is used; the **Label3D** will never cast shadows.

<div id="_class_label3d_constant_alpha_cut_discard"></div>

[AlphaCutMode](#enum_label3d_alphacutmode) **ALPHA_CUT_DISCARD** = ``1``

This mode only allows fully transparent or fully opaque pixels. Harsh edges will be visible unless some form of screen-space antialiasing is enabled (see [`ProjectSettings.rendering/anti_aliasing/quality/screen_space_aa`](class_projectsettings.md#class_projectsettings_property_rendering/anti_aliasing/quality/screen_space_aa)). This mode is also known as *alpha testing* or *1-bit transparency*.

 **Note:** This mode might have issues with anti-aliased fonts and outlines, try adjusting [`alpha_scissor_threshold`](class_label3d.md#class_label3d_property_alpha_scissor_threshold) or using MSDF font.

 **Note:** When using text with overlapping glyphs (e.g., cursive scripts), this mode might have transparency sorting issues between the main text and the outline.

<div id="_class_label3d_constant_alpha_cut_opaque_prepass"></div>

[AlphaCutMode](#enum_label3d_alphacutmode) **ALPHA_CUT_OPAQUE_PREPASS** = ``2``

This mode draws fully opaque pixels in the depth prepass. This is slower than [`ALPHA_CUT_DISABLED`](class_label3d.md#class_label3d_constant_alpha_cut_disabled) or [`ALPHA_CUT_DISCARD`](class_label3d.md#class_label3d_constant_alpha_cut_discard), but it allows displaying translucent areas and smooth edges while using proper sorting.

 **Note:** When using text with overlapping glyphs (e.g., cursive scripts), this mode might have transparency sorting issues between the main text and the outline.

<div id="_class_label3d_constant_alpha_cut_hash"></div>

[AlphaCutMode](#enum_label3d_alphacutmode) **ALPHA_CUT_HASH** = ``3``

This mode draws cuts off all values below a spatially-deterministic threshold, the rest will remain opaque.

<!-- rst-class:: classref-section-separator -->

---

## 属性说明

<div id="_class_label3d_property_alpha_antialiasing_edge"></div>

[`float`](class_float.md) **alpha_antialiasing_edge** = ``0.0`` <div id="class_label3d_property_alpha_antialiasing_edge"></div>

- `void` **set_alpha_antialiasing_edge** ( value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_alpha_antialiasing_edge** ( )

Threshold at which antialiasing will be applied on the alpha channel.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_label3d_property_alpha_antialiasing_mode"></div>

[AlphaAntiAliasing](#enum_basematerial3d_alphaantialiasing) **alpha_antialiasing_mode** = ``0`` <div id="class_label3d_property_alpha_antialiasing_mode"></div>

- `void` **set_alpha_antialiasing** ( value: [AlphaAntiAliasing](#enum_basematerial3d_alphaantialiasing) )
- [AlphaAntiAliasing](#enum_basematerial3d_alphaantialiasing) **get_alpha_antialiasing** ( )

The type of alpha antialiasing to apply. See [AlphaAntiAliasing](#enum_basematerial3d_alphaantialiasing).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_label3d_property_alpha_cut"></div>

[AlphaCutMode](#enum_label3d_alphacutmode) **alpha_cut** = ``0`` <div id="class_label3d_property_alpha_cut"></div>

- `void` **set_alpha_cut_mode** ( value: [AlphaCutMode](#enum_label3d_alphacutmode) )
- [AlphaCutMode](#enum_label3d_alphacutmode) **get_alpha_cut_mode** ( )

The alpha cutting mode to use for the sprite. See [AlphaCutMode](#enum_label3d_alphacutmode) for possible values.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_label3d_property_alpha_hash_scale"></div>

[`float`](class_float.md) **alpha_hash_scale** = ``1.0`` <div id="class_label3d_property_alpha_hash_scale"></div>

- `void` **set_alpha_hash_scale** ( value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_alpha_hash_scale** ( )

The hashing scale for Alpha Hash. Recommended values between `0` and `2`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_label3d_property_alpha_scissor_threshold"></div>

[`float`](class_float.md) **alpha_scissor_threshold** = ``0.5`` <div id="class_label3d_property_alpha_scissor_threshold"></div>

- `void` **set_alpha_scissor_threshold** ( value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_alpha_scissor_threshold** ( )

Threshold at which the alpha scissor will discard values.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_label3d_property_autowrap_mode"></div>

[AutowrapMode](#enum_textserver_autowrapmode) **autowrap_mode** = ``0`` <div id="class_label3d_property_autowrap_mode"></div>

- `void` **set_autowrap_mode** ( value: [AutowrapMode](#enum_textserver_autowrapmode) )
- [AutowrapMode](#enum_textserver_autowrapmode) **get_autowrap_mode** ( )

If set to something other than [`TextServer.AUTOWRAP_OFF`](class_textserver.md#class_textserver_constant_autowrap_off), the text gets wrapped inside the node's bounding rectangle. If you resize the node, it will change its height automatically to show all the text. To see how each mode behaves, see [AutowrapMode](#enum_textserver_autowrapmode).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_label3d_property_billboard"></div>

[BillboardMode](#enum_basematerial3d_billboardmode) **billboard** = ``0`` <div id="class_label3d_property_billboard"></div>

- `void` **set_billboard_mode** ( value: [BillboardMode](#enum_basematerial3d_billboardmode) )
- [BillboardMode](#enum_basematerial3d_billboardmode) **get_billboard_mode** ( )

The billboard mode to use for the label. See [BillboardMode](#enum_basematerial3d_billboardmode) for possible values.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_label3d_property_double_sided"></div>

[`bool`](class_bool.md) **double_sided** = ``true`` <div id="class_label3d_property_double_sided"></div>

- `void` **set_draw_flag** ( flag: [DrawFlags](#enum_label3d_drawflags), enabled: [`bool`](class_bool.md) )
- [`bool`](class_bool.md) **get_draw_flag** ( flag: [DrawFlags](#enum_label3d_drawflags) ) const[^const]

If `true`, text can be seen from the back as well, if `false`, it is invisible when looking at it from behind.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_label3d_property_fixed_size"></div>

[`bool`](class_bool.md) **fixed_size** = ``false`` <div id="class_label3d_property_fixed_size"></div>

- `void` **set_draw_flag** ( flag: [DrawFlags](#enum_label3d_drawflags), enabled: [`bool`](class_bool.md) )
- [`bool`](class_bool.md) **get_draw_flag** ( flag: [DrawFlags](#enum_label3d_drawflags) ) const[^const]

If `true`, the label is rendered at the same size regardless of distance.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_label3d_property_font"></div>

[`Font`](class_font.md) **font** <div id="class_label3d_property_font"></div>

- `void` **set_font** ( value: [`Font`](class_font.md) )
- [`Font`](class_font.md) **get_font** ( )

Font configuration used to display text.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_label3d_property_font_size"></div>

[`int`](class_int.md) **font_size** = ``32`` <div id="class_label3d_property_font_size"></div>

- `void` **set_font_size** ( value: [`int`](class_int.md) )
- [`int`](class_int.md) **get_font_size** ( )

Font size of the **Label3D**'s text. To make the font look more detailed when up close, increase [`font_size`](class_label3d.md#class_label3d_property_font_size) while decreasing [`pixel_size`](class_label3d.md#class_label3d_property_pixel_size) at the same time.

Higher font sizes require more time to render new characters, which can cause stuttering during gameplay.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_label3d_property_horizontal_alignment"></div>

[HorizontalAlignment](#enum_@globalscope_horizontalalignment) **horizontal_alignment** = ``1`` <div id="class_label3d_property_horizontal_alignment"></div>

- `void` **set_horizontal_alignment** ( value: [HorizontalAlignment](#enum_@globalscope_horizontalalignment) )
- [HorizontalAlignment](#enum_@globalscope_horizontalalignment) **get_horizontal_alignment** ( )

Controls the text's horizontal alignment. Supports left, center, right, and fill, or justify. Set it to one of the [HorizontalAlignment](#enum_@globalscope_horizontalalignment) constants.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_label3d_property_justification_flags"></div>

[JustificationFlag](#enum_textserver_justificationflag) **justification_flags** = ``163`` <div id="class_label3d_property_justification_flags"></div>

- `void` **set_justification_flags** ( value: [JustificationFlag](#enum_textserver_justificationflag) )
- [JustificationFlag](#enum_textserver_justificationflag) **get_justification_flags** ( )

Line fill alignment rules. See [JustificationFlag](#enum_textserver_justificationflag) for more information.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_label3d_property_language"></div>

[`String`](class_string.md) **language** = ``""`` <div id="class_label3d_property_language"></div>

- `void` **set_language** ( value: [`String`](class_string.md) )
- [`String`](class_string.md) **get_language** ( )

Language code used for line-breaking and text shaping algorithms, if left empty current locale is used instead.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_label3d_property_line_spacing"></div>

[`float`](class_float.md) **line_spacing** = ``0.0`` <div id="class_label3d_property_line_spacing"></div>

- `void` **set_line_spacing** ( value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_line_spacing** ( )

Vertical space between lines in multiline **Label3D**.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_label3d_property_modulate"></div>

[`Color`](class_color.md) **modulate** = ``Color(1, 1, 1, 1)`` <div id="class_label3d_property_modulate"></div>

- `void` **set_modulate** ( value: [`Color`](class_color.md) )
- [`Color`](class_color.md) **get_modulate** ( )

Text [`Color`](class_color.md) of the **Label3D**.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_label3d_property_no_depth_test"></div>

[`bool`](class_bool.md) **no_depth_test** = ``false`` <div id="class_label3d_property_no_depth_test"></div>

- `void` **set_draw_flag** ( flag: [DrawFlags](#enum_label3d_drawflags), enabled: [`bool`](class_bool.md) )
- [`bool`](class_bool.md) **get_draw_flag** ( flag: [DrawFlags](#enum_label3d_drawflags) ) const[^const]

If `true`, depth testing is disabled and the object will be drawn in render order.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_label3d_property_offset"></div>

[`Vector2`](class_vector2.md) **offset** = ``Vector2(0, 0)`` <div id="class_label3d_property_offset"></div>

- `void` **set_offset** ( value: [`Vector2`](class_vector2.md) )
- [`Vector2`](class_vector2.md) **get_offset** ( )

The text drawing offset (in pixels).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_label3d_property_outline_modulate"></div>

[`Color`](class_color.md) **outline_modulate** = ``Color(0, 0, 0, 1)`` <div id="class_label3d_property_outline_modulate"></div>

- `void` **set_outline_modulate** ( value: [`Color`](class_color.md) )
- [`Color`](class_color.md) **get_outline_modulate** ( )

The tint of text outline.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_label3d_property_outline_render_priority"></div>

[`int`](class_int.md) **outline_render_priority** = ``-1`` <div id="class_label3d_property_outline_render_priority"></div>

- `void` **set_outline_render_priority** ( value: [`int`](class_int.md) )
- [`int`](class_int.md) **get_outline_render_priority** ( )

Sets the render priority for the text outline. Higher priority objects will be sorted in front of lower priority objects.

 **Note:** This only applies if [`alpha_cut`](class_label3d.md#class_label3d_property_alpha_cut) is set to [`ALPHA_CUT_DISABLED`](class_label3d.md#class_label3d_constant_alpha_cut_disabled) (default value).

 **Note:** This only applies to sorting of transparent objects. This will not impact how transparent objects are sorted relative to opaque objects. This is because opaque objects are not sorted, while transparent objects are sorted from back to front (subject to priority).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_label3d_property_outline_size"></div>

[`int`](class_int.md) **outline_size** = ``12`` <div id="class_label3d_property_outline_size"></div>

- `void` **set_outline_size** ( value: [`int`](class_int.md) )
- [`int`](class_int.md) **get_outline_size** ( )

Text outline size.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_label3d_property_pixel_size"></div>

[`float`](class_float.md) **pixel_size** = ``0.005`` <div id="class_label3d_property_pixel_size"></div>

- `void` **set_pixel_size** ( value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_pixel_size** ( )

The size of one pixel's width on the label to scale it in 3D. To make the font look more detailed when up close, increase [`font_size`](class_label3d.md#class_label3d_property_font_size) while decreasing [`pixel_size`](class_label3d.md#class_label3d_property_pixel_size) at the same time.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_label3d_property_render_priority"></div>

[`int`](class_int.md) **render_priority** = ``0`` <div id="class_label3d_property_render_priority"></div>

- `void` **set_render_priority** ( value: [`int`](class_int.md) )
- [`int`](class_int.md) **get_render_priority** ( )

Sets the render priority for the text. Higher priority objects will be sorted in front of lower priority objects.

 **Note:** This only applies if [`alpha_cut`](class_label3d.md#class_label3d_property_alpha_cut) is set to [`ALPHA_CUT_DISABLED`](class_label3d.md#class_label3d_constant_alpha_cut_disabled) (default value).

 **Note:** This only applies to sorting of transparent objects. This will not impact how transparent objects are sorted relative to opaque objects. This is because opaque objects are not sorted, while transparent objects are sorted from back to front (subject to priority).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_label3d_property_shaded"></div>

[`bool`](class_bool.md) **shaded** = ``false`` <div id="class_label3d_property_shaded"></div>

- `void` **set_draw_flag** ( flag: [DrawFlags](#enum_label3d_drawflags), enabled: [`bool`](class_bool.md) )
- [`bool`](class_bool.md) **get_draw_flag** ( flag: [DrawFlags](#enum_label3d_drawflags) ) const[^const]

If `true`, the [`Light3D`](class_light3d.md) in the [`Environment`](class_environment.md) has effects on the label.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_label3d_property_structured_text_bidi_override"></div>

[StructuredTextParser](#enum_textserver_structuredtextparser) **structured_text_bidi_override** = ``0`` <div id="class_label3d_property_structured_text_bidi_override"></div>

- `void` **set_structured_text_bidi_override** ( value: [StructuredTextParser](#enum_textserver_structuredtextparser) )
- [StructuredTextParser](#enum_textserver_structuredtextparser) **get_structured_text_bidi_override** ( )

Set BiDi algorithm override for the structured text.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_label3d_property_structured_text_bidi_override_options"></div>

[`Array`](class_array.md) **structured_text_bidi_override_options** = ``[]`` <div id="class_label3d_property_structured_text_bidi_override_options"></div>

- `void` **set_structured_text_bidi_override_options** ( value: [`Array`](class_array.md) )
- [`Array`](class_array.md) **get_structured_text_bidi_override_options** ( )

Set additional options for BiDi override.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_label3d_property_text"></div>

[`String`](class_string.md) **text** = ``""`` <div id="class_label3d_property_text"></div>

- `void` **set_text** ( value: [`String`](class_string.md) )
- [`String`](class_string.md) **get_text** ( )

The text to display on screen.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_label3d_property_text_direction"></div>

[Direction](#enum_textserver_direction) **text_direction** = ``0`` <div id="class_label3d_property_text_direction"></div>

- `void` **set_text_direction** ( value: [Direction](#enum_textserver_direction) )
- [Direction](#enum_textserver_direction) **get_text_direction** ( )

Base text writing direction.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_label3d_property_texture_filter"></div>

[TextureFilter](#enum_basematerial3d_texturefilter) **texture_filter** = ``3`` <div id="class_label3d_property_texture_filter"></div>

- `void` **set_texture_filter** ( value: [TextureFilter](#enum_basematerial3d_texturefilter) )
- [TextureFilter](#enum_basematerial3d_texturefilter) **get_texture_filter** ( )

Filter flags for the texture. See [TextureFilter](#enum_basematerial3d_texturefilter) for options.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_label3d_property_uppercase"></div>

[`bool`](class_bool.md) **uppercase** = ``false`` <div id="class_label3d_property_uppercase"></div>

- `void` **set_uppercase** ( value: [`bool`](class_bool.md) )
- [`bool`](class_bool.md) **is_uppercase** ( )

If `true`, all the text displays as UPPERCASE.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_label3d_property_vertical_alignment"></div>

[VerticalAlignment](#enum_@globalscope_verticalalignment) **vertical_alignment** = ``1`` <div id="class_label3d_property_vertical_alignment"></div>

- `void` **set_vertical_alignment** ( value: [VerticalAlignment](#enum_@globalscope_verticalalignment) )
- [VerticalAlignment](#enum_@globalscope_verticalalignment) **get_vertical_alignment** ( )

Controls the text's vertical alignment. Supports top, center, bottom. Set it to one of the [VerticalAlignment](#enum_@globalscope_verticalalignment) constants.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_label3d_property_width"></div>

[`float`](class_float.md) **width** = ``500.0`` <div id="class_label3d_property_width"></div>

- `void` **set_width** ( value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_width** ( )

Text width (in pixels), used for autowrap and fill alignment.

<!-- rst-class:: classref-section-separator -->

---

## 方法说明

<div id="_class_label3d_method_generate_triangle_mesh"></div>

[`TriangleMesh`](class_trianglemesh.md) **generate_triangle_mesh** ( ) const[^const]<div id="class_label3d_method_generate_triangle_mesh"></div>

Returns a [`TriangleMesh`](class_trianglemesh.md) with the label's vertices following its current configuration (such as its [`pixel_size`](class_label3d.md#class_label3d_property_pixel_size)).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_label3d_method_get_draw_flag"></div>

[`bool`](class_bool.md) **get_draw_flag** ( flag: [DrawFlags](#enum_label3d_drawflags) ) const[^const]<div id="class_label3d_method_get_draw_flag"></div>

Returns the value of the specified flag.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_label3d_method_set_draw_flag"></div>

`void` **set_draw_flag** ( flag: [DrawFlags](#enum_label3d_drawflags), enabled: [`bool`](class_bool.md) )<div id="class_label3d_method_set_draw_flag"></div>

If `true`, the specified flag will be enabled. See [DrawFlags](#enum_label3d_drawflags) for a list of flags.

[^virtual]: 本方法通常需要用户覆盖才能生效。
[^const]: 本方法无副作用，不会修改该实例的任何成员变量。
[^vararg]: 本方法除了能接受在此处描述的参数外，还能够继续接受任意数量的参数。
[^constructor]: 本方法用于构造某个类型。
[^static]: 调用本方法无需实例，可直接使用类名进行调用。
[^operator]: 本方法描述的是使用本类型作为左操作数的有效运算符。
[^bitfield]: 这个值是由下列位标志构成位掩码的整数。
[^void]: 无返回值。
