<!-- ⚠ 请勿编辑本文件 ⚠ -->
<!-- 本文档使用脚本从 WeDot 引擎源码仓库生成。 -->
<!-- 生成脚本：https://github.com/WeDot-Engine/WeDot/tree/4.3/doc/tools/make_md.py； -->
<!-- 原文件：https://github.com/WeDot-Engine/WeDot/tree/4.3/doc/classes/SystemFont.xml。 -->

<div id="_class_systemfont"></div>

# SystemFont

**继承：** [`Font`](class_font.md) **<** [`Resource`](class_resource.md) **<** [`RefCounted`](class_refcounted.md) **<** [`Object`](class_object.md)

A font loaded from a system font. Falls back to a default theme font if not implemented on the host OS.

## 描述

**SystemFont** loads a font from a system font with the first matching name from [`font_names`](#class_systemfont_property_font_names).

It will attempt to match font style, but it's not guaranteed.

The returned font might be part of a font collection or be a variable font with OpenType "weight", "width" and/or "italic" features set.

You can create [`FontVariation`](class_fontvariation.md) of the system font for precise control over its features.

 **Note:** This class is implemented on iOS, Linux, macOS and Windows, on other platforms it will fallback to default theme font.

## 属性

| [`bool`](class_bool.md)                                     | [`allow_system_fallback`](#class_systemfont_property_allow_system_fallback)                           | ``true``                |
| [FontAntialiasing](#enum_textserver_fontantialiasing)       | [`antialiasing`](#class_systemfont_property_antialiasing)                                             | ``1``                   |
| [`bool`](class_bool.md)                                     | [`disable_embedded_bitmaps`](#class_systemfont_property_disable_embedded_bitmaps)                     | ``true``                |
| [`bool`](class_bool.md)                                     | [`font_italic`](#class_systemfont_property_font_italic)                                               | ``false``               |
| [`PackedStringArray`](class_packedstringarray.md)           | [`font_names`](#class_systemfont_property_font_names)                                                 | ``PackedStringArray()`` |
| [`int`](class_int.md)                                       | [`font_stretch`](#class_systemfont_property_font_stretch)                                             | ``100``                 |
| [`int`](class_int.md)                                       | [`font_weight`](#class_systemfont_property_font_weight)                                               | ``400``                 |
| [`bool`](class_bool.md)                                     | [`force_autohinter`](#class_systemfont_property_force_autohinter)                                     | ``false``               |
| [`bool`](class_bool.md)                                     | [`generate_mipmaps`](#class_systemfont_property_generate_mipmaps)                                     | ``false``               |
| [Hinting](#enum_textserver_hinting)                         | [`hinting`](#class_systemfont_property_hinting)                                                       | ``1``                   |
| [`int`](class_int.md)                                       | [`msdf_pixel_range`](#class_systemfont_property_msdf_pixel_range)                                     | ``16``                  |
| [`int`](class_int.md)                                       | [`msdf_size`](#class_systemfont_property_msdf_size)                                                   | ``48``                  |
| [`bool`](class_bool.md)                                     | [`multichannel_signed_distance_field`](#class_systemfont_property_multichannel_signed_distance_field) | ``false``               |
| [`float`](class_float.md)                                   | [`oversampling`](#class_systemfont_property_oversampling)                                             | ``0.0``                 |
| [SubpixelPositioning](#enum_textserver_subpixelpositioning) | [`subpixel_positioning`](#class_systemfont_property_subpixel_positioning)                             | ``1``                   |

<!-- rst-class:: classref-section-separator -->

---

## 属性说明

<div id="_class_systemfont_property_allow_system_fallback"></div>

[`bool`](class_bool.md) **allow_system_fallback** = ``true`` <div id="class_systemfont_property_allow_system_fallback"></div>

- `void` **set_allow_system_fallback** ( value: [`bool`](class_bool.md) )
- [`bool`](class_bool.md) **is_allow_system_fallback** ( )

If set to `true`, system fonts can be automatically used as fallbacks.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_systemfont_property_antialiasing"></div>

[FontAntialiasing](#enum_textserver_fontantialiasing) **antialiasing** = ``1`` <div id="class_systemfont_property_antialiasing"></div>

- `void` **set_antialiasing** ( value: [FontAntialiasing](#enum_textserver_fontantialiasing) )
- [FontAntialiasing](#enum_textserver_fontantialiasing) **get_antialiasing** ( )

Font anti-aliasing mode.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_systemfont_property_disable_embedded_bitmaps"></div>

[`bool`](class_bool.md) **disable_embedded_bitmaps** = ``true`` <div id="class_systemfont_property_disable_embedded_bitmaps"></div>

- `void` **set_disable_embedded_bitmaps** ( value: [`bool`](class_bool.md) )
- [`bool`](class_bool.md) **get_disable_embedded_bitmaps** ( )

If set to `true`, embedded font bitmap loading is disabled (bitmap-only and color fonts ignore this property).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_systemfont_property_font_italic"></div>

[`bool`](class_bool.md) **font_italic** = ``false`` <div id="class_systemfont_property_font_italic"></div>

- `void` **set_font_italic** ( value: [`bool`](class_bool.md) )
- [`bool`](class_bool.md) **get_font_italic** ( )

If set to `true`, italic or oblique font is preferred.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_systemfont_property_font_names"></div>

[`PackedStringArray`](class_packedstringarray.md) **font_names** = ``PackedStringArray()`` <div id="class_systemfont_property_font_names"></div>

- `void` **set_font_names** ( value: [`PackedStringArray`](class_packedstringarray.md) )
- [`PackedStringArray`](class_packedstringarray.md) **get_font_names** ( )

Array of font family names to search, first matching font found is used.

**Note:** The returned array is *copied* and any changes to it will not update the original property value. See [`PackedStringArray`](class_packedstringarray.md) for more details.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_systemfont_property_font_stretch"></div>

[`int`](class_int.md) **font_stretch** = ``100`` <div id="class_systemfont_property_font_stretch"></div>

- `void` **set_font_stretch** ( value: [`int`](class_int.md) )
- [`int`](class_int.md) **get_font_stretch** ( )

Preferred font stretch amount, compared to a normal width. A percentage value between `50%` and `200%`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_systemfont_property_font_weight"></div>

[`int`](class_int.md) **font_weight** = ``400`` <div id="class_systemfont_property_font_weight"></div>

- `void` **set_font_weight** ( value: [`int`](class_int.md) )
- [`int`](class_int.md) **get_font_weight** ( )

Preferred weight (boldness) of the font. A value in the `100...999` range, normal font weight is `400`, bold font weight is `700`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_systemfont_property_force_autohinter"></div>

[`bool`](class_bool.md) **force_autohinter** = ``false`` <div id="class_systemfont_property_force_autohinter"></div>

- `void` **set_force_autohinter** ( value: [`bool`](class_bool.md) )
- [`bool`](class_bool.md) **is_force_autohinter** ( )

If set to `true`, auto-hinting is supported and preferred over font built-in hinting.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_systemfont_property_generate_mipmaps"></div>

[`bool`](class_bool.md) **generate_mipmaps** = ``false`` <div id="class_systemfont_property_generate_mipmaps"></div>

- `void` **set_generate_mipmaps** ( value: [`bool`](class_bool.md) )
- [`bool`](class_bool.md) **get_generate_mipmaps** ( )

If set to `true`, generate mipmaps for the font textures.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_systemfont_property_hinting"></div>

[Hinting](#enum_textserver_hinting) **hinting** = ``1`` <div id="class_systemfont_property_hinting"></div>

- `void` **set_hinting** ( value: [Hinting](#enum_textserver_hinting) )
- [Hinting](#enum_textserver_hinting) **get_hinting** ( )

Font hinting mode.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_systemfont_property_msdf_pixel_range"></div>

[`int`](class_int.md) **msdf_pixel_range** = ``16`` <div id="class_systemfont_property_msdf_pixel_range"></div>

- `void` **set_msdf_pixel_range** ( value: [`int`](class_int.md) )
- [`int`](class_int.md) **get_msdf_pixel_range** ( )

The width of the range around the shape between the minimum and maximum representable signed distance. If using font outlines, [`msdf_pixel_range`](#class_systemfont_property_msdf_pixel_range) must be set to at least *twice* the size of the largest font outline. The default [`msdf_pixel_range`](#class_systemfont_property_msdf_pixel_range) value of `16` allows outline sizes up to `8` to look correct.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_systemfont_property_msdf_size"></div>

[`int`](class_int.md) **msdf_size** = ``48`` <div id="class_systemfont_property_msdf_size"></div>

- `void` **set_msdf_size** ( value: [`int`](class_int.md) )
- [`int`](class_int.md) **get_msdf_size** ( )

Source font size used to generate MSDF textures. Higher values allow for more precision, but are slower to render and require more memory. Only increase this value if you notice a visible lack of precision in glyph rendering.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_systemfont_property_multichannel_signed_distance_field"></div>

[`bool`](class_bool.md) **multichannel_signed_distance_field** = ``false`` <div id="class_systemfont_property_multichannel_signed_distance_field"></div>

- `void` **set_multichannel_signed_distance_field** ( value: [`bool`](class_bool.md) )
- [`bool`](class_bool.md) **is_multichannel_signed_distance_field** ( )

If set to `true`, glyphs of all sizes are rendered using single multichannel signed distance field generated from the dynamic font vector data.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_systemfont_property_oversampling"></div>

[`float`](class_float.md) **oversampling** = ``0.0`` <div id="class_systemfont_property_oversampling"></div>

- `void` **set_oversampling** ( value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_oversampling** ( )

Font oversampling factor, if set to `0.0` global oversampling factor is used instead.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_systemfont_property_subpixel_positioning"></div>

[SubpixelPositioning](#enum_textserver_subpixelpositioning) **subpixel_positioning** = ``1`` <div id="class_systemfont_property_subpixel_positioning"></div>

- `void` **set_subpixel_positioning** ( value: [SubpixelPositioning](#enum_textserver_subpixelpositioning) )
- [SubpixelPositioning](#enum_textserver_subpixelpositioning) **get_subpixel_positioning** ( )

Font glyph subpixel positioning mode. Subpixel positioning provides shaper text and better kerning for smaller font sizes, at the cost of memory usage and font rasterization speed. Use [`TextServer.SUBPIXEL_POSITIONING_AUTO`](#class_textserver_constant_subpixel_positioning_auto) to automatically enable it based on the font size.

[^virtual]: 本方法通常需要用户覆盖才能生效。
[^const]: 本方法无副作用，不会修改该实例的任何成员变量。
[^vararg]: 本方法除了能接受在此处描述的参数外，还能够继续接受任意数量的参数。
[^constructor]: 本方法用于构造某个类型。
[^static]: 调用本方法无需实例，可直接使用类名进行调用。
[^operator]: 本方法描述的是使用本类型作为左操作数的有效运算符。
[^bitfield]: 这个值是由下列位标志构成位掩码的整数。
[^void]: 无返回值。
