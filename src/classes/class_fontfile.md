<!-- ⚠ 请勿编辑本文件 ⚠ -->
<!-- 本文档使用脚本从 WeDot 引擎源码仓库生成。 -->
<!-- 生成脚本：https://github.com/WeDot-Engine/WeDot/tree/4.3/doc/tools/make_md.py； -->
<!-- 原文件：https://github.com/WeDot-Engine/WeDot/tree/4.3/doc/classes/FontFile.xml。 -->

<div id="_class_fontfile"></div>

# FontFile

**继承：** [`Font`](class_font.md) **<** [`Resource`](class_resource.md) **<** [`RefCounted`](class_refcounted.md) **<** [`Object`](class_object.md)

Holds font source data and prerendered glyph cache, imported from a dynamic or a bitmap font.

## 描述

**FontFile** contains a set of glyphs to represent Unicode characters imported from a font file, as well as a cache of rasterized glyphs, and a set of fallback [`Font`](class_font.md) s to use.

Use [`FontVariation`](class_fontvariation.md) to access specific OpenType variation of the font, create simulated bold / slanted version, and draw lines of text.

For more complex text processing, use [`FontVariation`](class_fontvariation.md) in conjunction with [`TextLine`](class_textline.md) or [`TextParagraph`](class_textparagraph.md).

Supported font formats:

- Dynamic font importer: TrueType (.ttf), TrueType collection (.ttc), OpenType (.otf), OpenType collection (.otc), WOFF (.woff), WOFF2 (.woff2), Type 1 (.pfb, .pfm).

- Bitmap font importer: AngelCode BMFont (.fnt, .font), text and binary (version 3) format variants.

- Monospace image font importer: All supported image formats.

 **Note:** A character is a symbol that represents an item (letter, digit etc.) in an abstract way.

 **Note:** A glyph is a bitmap or a shape used to draw one or more characters in a context-dependent manner. Glyph indices are bound to the specific font data source.

 **Note:** If none of the font data sources contain glyphs for a character used in a string, the character in question will be replaced with a box displaying its hexadecimal code.



```gdscript

    var f = load("res://BarlowCondensed-Bold.ttf")
    $Label.add_theme_font_override("font", f)
    $Label.add_theme_font_size_override("font_size", 64)
```

```csharp

    var f = ResourceLoader.Load<FontFile>("res://BarlowCondensed-Bold.ttf");
    GetNode("Label").AddThemeFontOverride("font", f);
    GetNode("Label").AddThemeFontSizeOverride("font_size", 64);
```







## 属性

| [`bool`](class_bool.md)                                     | [`allow_system_fallback`](#class_fontfile_property_allow_system_fallback)                           | ``true``              |
| [FontAntialiasing](#enum_textserver_fontantialiasing)       | [`antialiasing`](#class_fontfile_property_antialiasing)                                             | ``1``                 |
| [`PackedByteArray`](class_packedbytearray.md)               | [`data`](#class_fontfile_property_data)                                                             | ``PackedByteArray()`` |
| [`bool`](class_bool.md)                                     | [`disable_embedded_bitmaps`](#class_fontfile_property_disable_embedded_bitmaps)                     | ``true``              |
| [`int`](class_int.md)                                       | [`fixed_size`](#class_fontfile_property_fixed_size)                                                 | ``0``                 |
| [FixedSizeScaleMode](#enum_textserver_fixedsizescalemode)   | [`fixed_size_scale_mode`](#class_fontfile_property_fixed_size_scale_mode)                           | ``0``                 |
| [`String`](class_string.md)                                 | [`font_name`](#class_fontfile_property_font_name)                                                   | ``""``                |
| [`int`](class_int.md)                                       | [`font_stretch`](#class_fontfile_property_font_stretch)                                             | ``100``               |
| [FontStyle](#enum_textserver_fontstyle)                     | [`font_style`](#class_fontfile_property_font_style)                                                 | ``0``                 |
| [`int`](class_int.md)                                       | [`font_weight`](#class_fontfile_property_font_weight)                                               | ``400``               |
| [`bool`](class_bool.md)                                     | [`force_autohinter`](#class_fontfile_property_force_autohinter)                                     | ``false``             |
| [`bool`](class_bool.md)                                     | [`generate_mipmaps`](#class_fontfile_property_generate_mipmaps)                                     | ``false``             |
| [Hinting](#enum_textserver_hinting)                         | [`hinting`](#class_fontfile_property_hinting)                                                       | ``1``                 |
| [`int`](class_int.md)                                       | [`msdf_pixel_range`](#class_fontfile_property_msdf_pixel_range)                                     | ``16``                |
| [`int`](class_int.md)                                       | [`msdf_size`](#class_fontfile_property_msdf_size)                                                   | ``48``                |
| [`bool`](class_bool.md)                                     | [`multichannel_signed_distance_field`](#class_fontfile_property_multichannel_signed_distance_field) | ``false``             |
| [`Dictionary`](class_dictionary.md)                         | [`opentype_feature_overrides`](#class_fontfile_property_opentype_feature_overrides)                 | ``{}``                |
| [`float`](class_float.md)                                   | [`oversampling`](#class_fontfile_property_oversampling)                                             | ``0.0``               |
| [`String`](class_string.md)                                 | [`style_name`](#class_fontfile_property_style_name)                                                 | ``""``                |
| [SubpixelPositioning](#enum_textserver_subpixelpositioning) | [`subpixel_positioning`](#class_fontfile_property_subpixel_positioning)                             | ``1``                 |

## 方法

| `void`                                                  | [`clear_cache`](#class_fontfile_method_clear_cache) ( )                                                                                                                                                                                          |
| `void`                                                  | [`clear_glyphs`](#class_fontfile_method_clear_glyphs) ( cache_index: [`int`](class_int.md), size: [`Vector2i`](class_vector2i.md) )                                                                                                              |
| `void`                                                  | [`clear_kerning_map`](#class_fontfile_method_clear_kerning_map) ( cache_index: [`int`](class_int.md), size: [`int`](class_int.md) )                                                                                                              |
| `void`                                                  | [`clear_size_cache`](#class_fontfile_method_clear_size_cache) ( cache_index: [`int`](class_int.md) )                                                                                                                                             |
| `void`                                                  | [`clear_textures`](#class_fontfile_method_clear_textures) ( cache_index: [`int`](class_int.md), size: [`Vector2i`](class_vector2i.md) )                                                                                                          |
| [`float`](class_float.md)                               | [`get_cache_ascent`](#class_fontfile_method_get_cache_ascent) ( cache_index: [`int`](class_int.md), size: [`int`](class_int.md) ) const[^const]                                                                                                  |
| [`int`](class_int.md)                                   | [`get_cache_count`](#class_fontfile_method_get_cache_count) ( ) const[^const]                                                                                                                                                                    |
| [`float`](class_float.md)                               | [`get_cache_descent`](#class_fontfile_method_get_cache_descent) ( cache_index: [`int`](class_int.md), size: [`int`](class_int.md) ) const[^const]                                                                                                |
| [`float`](class_float.md)                               | [`get_cache_scale`](#class_fontfile_method_get_cache_scale) ( cache_index: [`int`](class_int.md), size: [`int`](class_int.md) ) const[^const]                                                                                                    |
| [`float`](class_float.md)                               | [`get_cache_underline_position`](#class_fontfile_method_get_cache_underline_position) ( cache_index: [`int`](class_int.md), size: [`int`](class_int.md) ) const[^const]                                                                          |
| [`float`](class_float.md)                               | [`get_cache_underline_thickness`](#class_fontfile_method_get_cache_underline_thickness) ( cache_index: [`int`](class_int.md), size: [`int`](class_int.md) ) const[^const]                                                                        |
| [`int`](class_int.md)                                   | [`get_char_from_glyph_index`](#class_fontfile_method_get_char_from_glyph_index) ( size: [`int`](class_int.md), glyph_index: [`int`](class_int.md) ) const[^const]                                                                                |
| [`float`](class_float.md)                               | [`get_embolden`](#class_fontfile_method_get_embolden) ( cache_index: [`int`](class_int.md) ) const[^const]                                                                                                                                       |
| [`float`](class_float.md)                               | [`get_extra_baseline_offset`](#class_fontfile_method_get_extra_baseline_offset) ( cache_index: [`int`](class_int.md) ) const[^const]                                                                                                             |
| [`int`](class_int.md)                                   | [`get_extra_spacing`](#class_fontfile_method_get_extra_spacing) ( cache_index: [`int`](class_int.md), spacing: [SpacingType](#enum_textserver_spacingtype) ) const[^const]                                                                       |
| [`int`](class_int.md)                                   | [`get_face_index`](#class_fontfile_method_get_face_index) ( cache_index: [`int`](class_int.md) ) const[^const]                                                                                                                                   |
| [`Vector2`](class_vector2.md)                           | [`get_glyph_advance`](#class_fontfile_method_get_glyph_advance) ( cache_index: [`int`](class_int.md), size: [`int`](class_int.md), glyph: [`int`](class_int.md) ) const[^const]                                                                  |
| [`int`](class_int.md)                                   | [`get_glyph_index`](#class_fontfile_method_get_glyph_index) ( size: [`int`](class_int.md), char: [`int`](class_int.md), variation_selector: [`int`](class_int.md) ) const[^const]                                                                |
| [`PackedInt32Array`](class_packedint32array.md)         | [`get_glyph_list`](#class_fontfile_method_get_glyph_list) ( cache_index: [`int`](class_int.md), size: [`Vector2i`](class_vector2i.md) ) const[^const]                                                                                            |
| [`Vector2`](class_vector2.md)                           | [`get_glyph_offset`](#class_fontfile_method_get_glyph_offset) ( cache_index: [`int`](class_int.md), size: [`Vector2i`](class_vector2i.md), glyph: [`int`](class_int.md) ) const[^const]                                                          |
| [`Vector2`](class_vector2.md)                           | [`get_glyph_size`](#class_fontfile_method_get_glyph_size) ( cache_index: [`int`](class_int.md), size: [`Vector2i`](class_vector2i.md), glyph: [`int`](class_int.md) ) const[^const]                                                              |
| [`int`](class_int.md)                                   | [`get_glyph_texture_idx`](#class_fontfile_method_get_glyph_texture_idx) ( cache_index: [`int`](class_int.md), size: [`Vector2i`](class_vector2i.md), glyph: [`int`](class_int.md) ) const[^const]                                                |
| [`Rect2`](class_rect2.md)                               | [`get_glyph_uv_rect`](#class_fontfile_method_get_glyph_uv_rect) ( cache_index: [`int`](class_int.md), size: [`Vector2i`](class_vector2i.md), glyph: [`int`](class_int.md) ) const[^const]                                                        |
| [`Vector2`](class_vector2.md)                           | [`get_kerning`](#class_fontfile_method_get_kerning) ( cache_index: [`int`](class_int.md), size: [`int`](class_int.md), glyph_pair: [`Vector2i`](class_vector2i.md) ) const[^const]                                                               |
| [Array](class_array.md) [`Vector2i`](class_vector2i.md) | [`get_kerning_list`](#class_fontfile_method_get_kerning_list) ( cache_index: [`int`](class_int.md), size: [`int`](class_int.md) ) const[^const]                                                                                                  |
| [`bool`](class_bool.md)                                 | [`get_language_support_override`](#class_fontfile_method_get_language_support_override) ( language: [`String`](class_string.md) ) const[^const]                                                                                                  |
| [`PackedStringArray`](class_packedstringarray.md)       | [`get_language_support_overrides`](#class_fontfile_method_get_language_support_overrides) ( ) const[^const]                                                                                                                                      |
| [`bool`](class_bool.md)                                 | [`get_script_support_override`](#class_fontfile_method_get_script_support_override) ( script: [`String`](class_string.md) ) const[^const]                                                                                                        |
| [`PackedStringArray`](class_packedstringarray.md)       | [`get_script_support_overrides`](#class_fontfile_method_get_script_support_overrides) ( ) const[^const]                                                                                                                                          |
| [Array](class_array.md) [`Vector2i`](class_vector2i.md) | [`get_size_cache_list`](#class_fontfile_method_get_size_cache_list) ( cache_index: [`int`](class_int.md) ) const[^const]                                                                                                                         |
| [`int`](class_int.md)                                   | [`get_texture_count`](#class_fontfile_method_get_texture_count) ( cache_index: [`int`](class_int.md), size: [`Vector2i`](class_vector2i.md) ) const[^const]                                                                                      |
| [`Image`](class_image.md)                               | [`get_texture_image`](#class_fontfile_method_get_texture_image) ( cache_index: [`int`](class_int.md), size: [`Vector2i`](class_vector2i.md), texture_index: [`int`](class_int.md) ) const[^const]                                                |
| [`PackedInt32Array`](class_packedint32array.md)         | [`get_texture_offsets`](#class_fontfile_method_get_texture_offsets) ( cache_index: [`int`](class_int.md), size: [`Vector2i`](class_vector2i.md), texture_index: [`int`](class_int.md) ) const[^const]                                            |
| [`Transform2D`](class_transform2d.md)                   | [`get_transform`](#class_fontfile_method_get_transform) ( cache_index: [`int`](class_int.md) ) const[^const]                                                                                                                                     |
| [`Dictionary`](class_dictionary.md)                     | [`get_variation_coordinates`](#class_fontfile_method_get_variation_coordinates) ( cache_index: [`int`](class_int.md) ) const[^const]                                                                                                             |
| [Error](#enum_@globalscope_error)                       | [`load_bitmap_font`](#class_fontfile_method_load_bitmap_font) ( path: [`String`](class_string.md) )                                                                                                                                              |
| [Error](#enum_@globalscope_error)                       | [`load_dynamic_font`](#class_fontfile_method_load_dynamic_font) ( path: [`String`](class_string.md) )                                                                                                                                            |
| `void`                                                  | [`remove_cache`](#class_fontfile_method_remove_cache) ( cache_index: [`int`](class_int.md) )                                                                                                                                                     |
| `void`                                                  | [`remove_glyph`](#class_fontfile_method_remove_glyph) ( cache_index: [`int`](class_int.md), size: [`Vector2i`](class_vector2i.md), glyph: [`int`](class_int.md) )                                                                                |
| `void`                                                  | [`remove_kerning`](#class_fontfile_method_remove_kerning) ( cache_index: [`int`](class_int.md), size: [`int`](class_int.md), glyph_pair: [`Vector2i`](class_vector2i.md) )                                                                       |
| `void`                                                  | [`remove_language_support_override`](#class_fontfile_method_remove_language_support_override) ( language: [`String`](class_string.md) )                                                                                                          |
| `void`                                                  | [`remove_script_support_override`](#class_fontfile_method_remove_script_support_override) ( script: [`String`](class_string.md) )                                                                                                                |
| `void`                                                  | [`remove_size_cache`](#class_fontfile_method_remove_size_cache) ( cache_index: [`int`](class_int.md), size: [`Vector2i`](class_vector2i.md) )                                                                                                    |
| `void`                                                  | [`remove_texture`](#class_fontfile_method_remove_texture) ( cache_index: [`int`](class_int.md), size: [`Vector2i`](class_vector2i.md), texture_index: [`int`](class_int.md) )                                                                    |
| `void`                                                  | [`render_glyph`](#class_fontfile_method_render_glyph) ( cache_index: [`int`](class_int.md), size: [`Vector2i`](class_vector2i.md), index: [`int`](class_int.md) )                                                                                |
| `void`                                                  | [`render_range`](#class_fontfile_method_render_range) ( cache_index: [`int`](class_int.md), size: [`Vector2i`](class_vector2i.md), start: [`int`](class_int.md), end: [`int`](class_int.md) )                                                    |
| `void`                                                  | [`set_cache_ascent`](#class_fontfile_method_set_cache_ascent) ( cache_index: [`int`](class_int.md), size: [`int`](class_int.md), ascent: [`float`](class_float.md) )                                                                             |
| `void`                                                  | [`set_cache_descent`](#class_fontfile_method_set_cache_descent) ( cache_index: [`int`](class_int.md), size: [`int`](class_int.md), descent: [`float`](class_float.md) )                                                                          |
| `void`                                                  | [`set_cache_scale`](#class_fontfile_method_set_cache_scale) ( cache_index: [`int`](class_int.md), size: [`int`](class_int.md), scale: [`float`](class_float.md) )                                                                                |
| `void`                                                  | [`set_cache_underline_position`](#class_fontfile_method_set_cache_underline_position) ( cache_index: [`int`](class_int.md), size: [`int`](class_int.md), underline_position: [`float`](class_float.md) )                                         |
| `void`                                                  | [`set_cache_underline_thickness`](#class_fontfile_method_set_cache_underline_thickness) ( cache_index: [`int`](class_int.md), size: [`int`](class_int.md), underline_thickness: [`float`](class_float.md) )                                      |
| `void`                                                  | [`set_embolden`](#class_fontfile_method_set_embolden) ( cache_index: [`int`](class_int.md), strength: [`float`](class_float.md) )                                                                                                                |
| `void`                                                  | [`set_extra_baseline_offset`](#class_fontfile_method_set_extra_baseline_offset) ( cache_index: [`int`](class_int.md), baseline_offset: [`float`](class_float.md) )                                                                               |
| `void`                                                  | [`set_extra_spacing`](#class_fontfile_method_set_extra_spacing) ( cache_index: [`int`](class_int.md), spacing: [SpacingType](#enum_textserver_spacingtype), value: [`int`](class_int.md) )                                                       |
| `void`                                                  | [`set_face_index`](#class_fontfile_method_set_face_index) ( cache_index: [`int`](class_int.md), face_index: [`int`](class_int.md) )                                                                                                              |
| `void`                                                  | [`set_glyph_advance`](#class_fontfile_method_set_glyph_advance) ( cache_index: [`int`](class_int.md), size: [`int`](class_int.md), glyph: [`int`](class_int.md), advance: [`Vector2`](class_vector2.md) )                                        |
| `void`                                                  | [`set_glyph_offset`](#class_fontfile_method_set_glyph_offset) ( cache_index: [`int`](class_int.md), size: [`Vector2i`](class_vector2i.md), glyph: [`int`](class_int.md), offset: [`Vector2`](class_vector2.md) )                                 |
| `void`                                                  | [`set_glyph_size`](#class_fontfile_method_set_glyph_size) ( cache_index: [`int`](class_int.md), size: [`Vector2i`](class_vector2i.md), glyph: [`int`](class_int.md), gl_size: [`Vector2`](class_vector2.md) )                                    |
| `void`                                                  | [`set_glyph_texture_idx`](#class_fontfile_method_set_glyph_texture_idx) ( cache_index: [`int`](class_int.md), size: [`Vector2i`](class_vector2i.md), glyph: [`int`](class_int.md), texture_idx: [`int`](class_int.md) )                          |
| `void`                                                  | [`set_glyph_uv_rect`](#class_fontfile_method_set_glyph_uv_rect) ( cache_index: [`int`](class_int.md), size: [`Vector2i`](class_vector2i.md), glyph: [`int`](class_int.md), uv_rect: [`Rect2`](class_rect2.md) )                                  |
| `void`                                                  | [`set_kerning`](#class_fontfile_method_set_kerning) ( cache_index: [`int`](class_int.md), size: [`int`](class_int.md), glyph_pair: [`Vector2i`](class_vector2i.md), kerning: [`Vector2`](class_vector2.md) )                                     |
| `void`                                                  | [`set_language_support_override`](#class_fontfile_method_set_language_support_override) ( language: [`String`](class_string.md), supported: [`bool`](class_bool.md) )                                                                            |
| `void`                                                  | [`set_script_support_override`](#class_fontfile_method_set_script_support_override) ( script: [`String`](class_string.md), supported: [`bool`](class_bool.md) )                                                                                  |
| `void`                                                  | [`set_texture_image`](#class_fontfile_method_set_texture_image) ( cache_index: [`int`](class_int.md), size: [`Vector2i`](class_vector2i.md), texture_index: [`int`](class_int.md), image: [`Image`](class_image.md) )                            |
| `void`                                                  | [`set_texture_offsets`](#class_fontfile_method_set_texture_offsets) ( cache_index: [`int`](class_int.md), size: [`Vector2i`](class_vector2i.md), texture_index: [`int`](class_int.md), offset: [`PackedInt32Array`](class_packedint32array.md) ) |
| `void`                                                  | [`set_transform`](#class_fontfile_method_set_transform) ( cache_index: [`int`](class_int.md), transform: [`Transform2D`](class_transform2d.md) )                                                                                                 |
| `void`                                                  | [`set_variation_coordinates`](#class_fontfile_method_set_variation_coordinates) ( cache_index: [`int`](class_int.md), variation_coordinates: [`Dictionary`](class_dictionary.md) )                                                               |

<!-- rst-class:: classref-section-separator -->

---

## 属性说明

<div id="_class_fontfile_property_allow_system_fallback"></div>

[`bool`](class_bool.md) **allow_system_fallback** = ``true`` <div id="class_fontfile_property_allow_system_fallback"></div>

- `void` **set_allow_system_fallback** ( value: [`bool`](class_bool.md) )
- [`bool`](class_bool.md) **is_allow_system_fallback** ( )

If set to `true`, system fonts can be automatically used as fallbacks.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_fontfile_property_antialiasing"></div>

[FontAntialiasing](#enum_textserver_fontantialiasing) **antialiasing** = ``1`` <div id="class_fontfile_property_antialiasing"></div>

- `void` **set_antialiasing** ( value: [FontAntialiasing](#enum_textserver_fontantialiasing) )
- [FontAntialiasing](#enum_textserver_fontantialiasing) **get_antialiasing** ( )

Font anti-aliasing mode.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_fontfile_property_data"></div>

[`PackedByteArray`](class_packedbytearray.md) **data** = ``PackedByteArray()`` <div id="class_fontfile_property_data"></div>

- `void` **set_data** ( value: [`PackedByteArray`](class_packedbytearray.md) )
- [`PackedByteArray`](class_packedbytearray.md) **get_data** ( )

Contents of the dynamic font source file.

**Note:** The returned array is *copied* and any changes to it will not update the original property value. See [`PackedByteArray`](class_packedbytearray.md) for more details.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_fontfile_property_disable_embedded_bitmaps"></div>

[`bool`](class_bool.md) **disable_embedded_bitmaps** = ``true`` <div id="class_fontfile_property_disable_embedded_bitmaps"></div>

- `void` **set_disable_embedded_bitmaps** ( value: [`bool`](class_bool.md) )
- [`bool`](class_bool.md) **get_disable_embedded_bitmaps** ( )

If set to `true`, embedded font bitmap loading is disabled (bitmap-only and color fonts ignore this property).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_fontfile_property_fixed_size"></div>

[`int`](class_int.md) **fixed_size** = ``0`` <div id="class_fontfile_property_fixed_size"></div>

- `void` **set_fixed_size** ( value: [`int`](class_int.md) )
- [`int`](class_int.md) **get_fixed_size** ( )

Font size, used only for the bitmap fonts.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_fontfile_property_fixed_size_scale_mode"></div>

[FixedSizeScaleMode](#enum_textserver_fixedsizescalemode) **fixed_size_scale_mode** = ``0`` <div id="class_fontfile_property_fixed_size_scale_mode"></div>

- `void` **set_fixed_size_scale_mode** ( value: [FixedSizeScaleMode](#enum_textserver_fixedsizescalemode) )
- [FixedSizeScaleMode](#enum_textserver_fixedsizescalemode) **get_fixed_size_scale_mode** ( )

Scaling mode, used only for the bitmap fonts with [`fixed_size`](#class_fontfile_property_fixed_size) greater than zero.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_fontfile_property_font_name"></div>

[`String`](class_string.md) **font_name** = ``""`` <div id="class_fontfile_property_font_name"></div>

- `void` **set_font_name** ( value: [`String`](class_string.md) )
- [`String`](class_string.md) **get_font_name** ( )

Font family name.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_fontfile_property_font_stretch"></div>

[`int`](class_int.md) **font_stretch** = ``100`` <div id="class_fontfile_property_font_stretch"></div>

- `void` **set_font_stretch** ( value: [`int`](class_int.md) )
- [`int`](class_int.md) **get_font_stretch** ( )

Font stretch amount, compared to a normal width. A percentage value between `50%` and `200%`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_fontfile_property_font_style"></div>

[FontStyle](#enum_textserver_fontstyle) **font_style** = ``0`` <div id="class_fontfile_property_font_style"></div>

- `void` **set_font_style** ( value: [FontStyle](#enum_textserver_fontstyle) )
- [FontStyle](#enum_textserver_fontstyle) **get_font_style** ( )

Font style flags, see [FontStyle](#enum_textserver_fontstyle).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_fontfile_property_font_weight"></div>

[`int`](class_int.md) **font_weight** = ``400`` <div id="class_fontfile_property_font_weight"></div>

- `void` **set_font_weight** ( value: [`int`](class_int.md) )
- [`int`](class_int.md) **get_font_weight** ( )

Weight (boldness) of the font. A value in the `100...999` range, normal font weight is `400`, bold font weight is `700`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_fontfile_property_force_autohinter"></div>

[`bool`](class_bool.md) **force_autohinter** = ``false`` <div id="class_fontfile_property_force_autohinter"></div>

- `void` **set_force_autohinter** ( value: [`bool`](class_bool.md) )
- [`bool`](class_bool.md) **is_force_autohinter** ( )

If set to `true`, auto-hinting is supported and preferred over font built-in hinting. Used by dynamic fonts only (MSDF fonts don't support hinting).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_fontfile_property_generate_mipmaps"></div>

[`bool`](class_bool.md) **generate_mipmaps** = ``false`` <div id="class_fontfile_property_generate_mipmaps"></div>

- `void` **set_generate_mipmaps** ( value: [`bool`](class_bool.md) )
- [`bool`](class_bool.md) **get_generate_mipmaps** ( )

If set to `true`, generate mipmaps for the font textures.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_fontfile_property_hinting"></div>

[Hinting](#enum_textserver_hinting) **hinting** = ``1`` <div id="class_fontfile_property_hinting"></div>

- `void` **set_hinting** ( value: [Hinting](#enum_textserver_hinting) )
- [Hinting](#enum_textserver_hinting) **get_hinting** ( )

Font hinting mode. Used by dynamic fonts only.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_fontfile_property_msdf_pixel_range"></div>

[`int`](class_int.md) **msdf_pixel_range** = ``16`` <div id="class_fontfile_property_msdf_pixel_range"></div>

- `void` **set_msdf_pixel_range** ( value: [`int`](class_int.md) )
- [`int`](class_int.md) **get_msdf_pixel_range** ( )

The width of the range around the shape between the minimum and maximum representable signed distance. If using font outlines, [`msdf_pixel_range`](#class_fontfile_property_msdf_pixel_range) must be set to at least *twice* the size of the largest font outline. The default [`msdf_pixel_range`](#class_fontfile_property_msdf_pixel_range) value of `16` allows outline sizes up to `8` to look correct.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_fontfile_property_msdf_size"></div>

[`int`](class_int.md) **msdf_size** = ``48`` <div id="class_fontfile_property_msdf_size"></div>

- `void` **set_msdf_size** ( value: [`int`](class_int.md) )
- [`int`](class_int.md) **get_msdf_size** ( )

Source font size used to generate MSDF textures. Higher values allow for more precision, but are slower to render and require more memory. Only increase this value if you notice a visible lack of precision in glyph rendering.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_fontfile_property_multichannel_signed_distance_field"></div>

[`bool`](class_bool.md) **multichannel_signed_distance_field** = ``false`` <div id="class_fontfile_property_multichannel_signed_distance_field"></div>

- `void` **set_multichannel_signed_distance_field** ( value: [`bool`](class_bool.md) )
- [`bool`](class_bool.md) **is_multichannel_signed_distance_field** ( )

If set to `true`, glyphs of all sizes are rendered using single multichannel signed distance field (MSDF) generated from the dynamic font vector data. Since this approach does not rely on rasterizing the font every time its size changes, this allows for resizing the font in real-time without any performance penalty. Text will also not look grainy for [`Control`](class_control.md) s that are scaled down (or for [`Label3D`](class_label3d.md) s viewed from a long distance). As a downside, font hinting is not available with MSDF. The lack of font hinting may result in less crisp and less readable fonts at small sizes.

 **Note:** If using font outlines, [`msdf_pixel_range`](#class_fontfile_property_msdf_pixel_range) must be set to at least *twice* the size of the largest font outline.

 **Note:** MSDF font rendering does not render glyphs with overlapping shapes correctly. Overlapping shapes are not valid per the OpenType standard, but are still commonly found in many font files, especially those converted by Google Fonts. To avoid issues with overlapping glyphs, consider downloading the font file directly from the type foundry instead of relying on Google Fonts.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_fontfile_property_opentype_feature_overrides"></div>

[`Dictionary`](class_dictionary.md) **opentype_feature_overrides** = ``{}`` <div id="class_fontfile_property_opentype_feature_overrides"></div>

- `void` **set_opentype_feature_overrides** ( value: [`Dictionary`](class_dictionary.md) )
- [`Dictionary`](class_dictionary.md) **get_opentype_feature_overrides** ( )

Font OpenType feature set override.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_fontfile_property_oversampling"></div>

[`float`](class_float.md) **oversampling** = ``0.0`` <div id="class_fontfile_property_oversampling"></div>

- `void` **set_oversampling** ( value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_oversampling** ( )

Font oversampling factor. If set to `0.0`, the global oversampling factor is used instead. Used by dynamic fonts only (MSDF fonts ignore oversampling).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_fontfile_property_style_name"></div>

[`String`](class_string.md) **style_name** = ``""`` <div id="class_fontfile_property_style_name"></div>

- `void` **set_font_style_name** ( value: [`String`](class_string.md) )
- [`String`](class_string.md) **get_font_style_name** ( )

Font style name.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_fontfile_property_subpixel_positioning"></div>

[SubpixelPositioning](#enum_textserver_subpixelpositioning) **subpixel_positioning** = ``1`` <div id="class_fontfile_property_subpixel_positioning"></div>

- `void` **set_subpixel_positioning** ( value: [SubpixelPositioning](#enum_textserver_subpixelpositioning) )
- [SubpixelPositioning](#enum_textserver_subpixelpositioning) **get_subpixel_positioning** ( )

Font glyph subpixel positioning mode. Subpixel positioning provides shaper text and better kerning for smaller font sizes, at the cost of higher memory usage and lower font rasterization speed. Use [`TextServer.SUBPIXEL_POSITIONING_AUTO`](#class_textserver_constant_subpixel_positioning_auto) to automatically enable it based on the font size.

<!-- rst-class:: classref-section-separator -->

---

## 方法说明

<div id="_class_fontfile_method_clear_cache"></div>

`void` **clear_cache** ( )<div id="class_fontfile_method_clear_cache"></div>

Removes all font cache entries.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_fontfile_method_clear_glyphs"></div>

`void` **clear_glyphs** ( cache_index: [`int`](class_int.md), size: [`Vector2i`](class_vector2i.md) )<div id="class_fontfile_method_clear_glyphs"></div>

Removes all rendered glyph information from the cache entry.

 **Note:** This function will not remove textures associated with the glyphs, use [`remove_texture`](#class_fontfile_method_remove_texture) to remove them manually.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_fontfile_method_clear_kerning_map"></div>

`void` **clear_kerning_map** ( cache_index: [`int`](class_int.md), size: [`int`](class_int.md) )<div id="class_fontfile_method_clear_kerning_map"></div>

Removes all kerning overrides.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_fontfile_method_clear_size_cache"></div>

`void` **clear_size_cache** ( cache_index: [`int`](class_int.md) )<div id="class_fontfile_method_clear_size_cache"></div>

Removes all font sizes from the cache entry

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_fontfile_method_clear_textures"></div>

`void` **clear_textures** ( cache_index: [`int`](class_int.md), size: [`Vector2i`](class_vector2i.md) )<div id="class_fontfile_method_clear_textures"></div>

Removes all textures from font cache entry.

 **Note:** This function will not remove glyphs associated with the texture, use [`remove_glyph`](#class_fontfile_method_remove_glyph) to remove them manually.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_fontfile_method_get_cache_ascent"></div>

[`float`](class_float.md) **get_cache_ascent** ( cache_index: [`int`](class_int.md), size: [`int`](class_int.md) ) const[^const]<div id="class_fontfile_method_get_cache_ascent"></div>

Returns the font ascent (number of pixels above the baseline).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_fontfile_method_get_cache_count"></div>

[`int`](class_int.md) **get_cache_count** ( ) const[^const]<div id="class_fontfile_method_get_cache_count"></div>

Returns number of the font cache entries.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_fontfile_method_get_cache_descent"></div>

[`float`](class_float.md) **get_cache_descent** ( cache_index: [`int`](class_int.md), size: [`int`](class_int.md) ) const[^const]<div id="class_fontfile_method_get_cache_descent"></div>

Returns the font descent (number of pixels below the baseline).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_fontfile_method_get_cache_scale"></div>

[`float`](class_float.md) **get_cache_scale** ( cache_index: [`int`](class_int.md), size: [`int`](class_int.md) ) const[^const]<div id="class_fontfile_method_get_cache_scale"></div>

Returns scaling factor of the color bitmap font.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_fontfile_method_get_cache_underline_position"></div>

[`float`](class_float.md) **get_cache_underline_position** ( cache_index: [`int`](class_int.md), size: [`int`](class_int.md) ) const[^const]<div id="class_fontfile_method_get_cache_underline_position"></div>

Returns pixel offset of the underline below the baseline.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_fontfile_method_get_cache_underline_thickness"></div>

[`float`](class_float.md) **get_cache_underline_thickness** ( cache_index: [`int`](class_int.md), size: [`int`](class_int.md) ) const[^const]<div id="class_fontfile_method_get_cache_underline_thickness"></div>

Returns thickness of the underline in pixels.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_fontfile_method_get_char_from_glyph_index"></div>

[`int`](class_int.md) **get_char_from_glyph_index** ( size: [`int`](class_int.md), glyph_index: [`int`](class_int.md) ) const[^const]<div id="class_fontfile_method_get_char_from_glyph_index"></div>

Returns character code associated with `glyph_index`, or `0` if `glyph_index` is invalid. See [`get_glyph_index`](#class_fontfile_method_get_glyph_index).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_fontfile_method_get_embolden"></div>

[`float`](class_float.md) **get_embolden** ( cache_index: [`int`](class_int.md) ) const[^const]<div id="class_fontfile_method_get_embolden"></div>

Returns embolden strength, if is not equal to zero, emboldens the font outlines. Negative values reduce the outline thickness.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_fontfile_method_get_extra_baseline_offset"></div>

[`float`](class_float.md) **get_extra_baseline_offset** ( cache_index: [`int`](class_int.md) ) const[^const]<div id="class_fontfile_method_get_extra_baseline_offset"></div>

Returns extra baseline offset (as a fraction of font height).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_fontfile_method_get_extra_spacing"></div>

[`int`](class_int.md) **get_extra_spacing** ( cache_index: [`int`](class_int.md), spacing: [SpacingType](#enum_textserver_spacingtype) ) const[^const]<div id="class_fontfile_method_get_extra_spacing"></div>

Returns spacing for `spacing` (see [SpacingType](#enum_textserver_spacingtype)) in pixels (not relative to the font size).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_fontfile_method_get_face_index"></div>

[`int`](class_int.md) **get_face_index** ( cache_index: [`int`](class_int.md) ) const[^const]<div id="class_fontfile_method_get_face_index"></div>

Returns an active face index in the TrueType / OpenType collection.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_fontfile_method_get_glyph_advance"></div>

[`Vector2`](class_vector2.md) **get_glyph_advance** ( cache_index: [`int`](class_int.md), size: [`int`](class_int.md), glyph: [`int`](class_int.md) ) const[^const]<div id="class_fontfile_method_get_glyph_advance"></div>

Returns glyph advance (offset of the next glyph).

 **Note:** Advance for glyphs outlines is the same as the base glyph advance and is not saved.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_fontfile_method_get_glyph_index"></div>

[`int`](class_int.md) **get_glyph_index** ( size: [`int`](class_int.md), char: [`int`](class_int.md), variation_selector: [`int`](class_int.md) ) const[^const]<div id="class_fontfile_method_get_glyph_index"></div>

Returns the glyph index of a `char`, optionally modified by the `variation_selector`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_fontfile_method_get_glyph_list"></div>

[`PackedInt32Array`](class_packedint32array.md) **get_glyph_list** ( cache_index: [`int`](class_int.md), size: [`Vector2i`](class_vector2i.md) ) const[^const]<div id="class_fontfile_method_get_glyph_list"></div>

Returns list of rendered glyphs in the cache entry.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_fontfile_method_get_glyph_offset"></div>

[`Vector2`](class_vector2.md) **get_glyph_offset** ( cache_index: [`int`](class_int.md), size: [`Vector2i`](class_vector2i.md), glyph: [`int`](class_int.md) ) const[^const]<div id="class_fontfile_method_get_glyph_offset"></div>

Returns glyph offset from the baseline.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_fontfile_method_get_glyph_size"></div>

[`Vector2`](class_vector2.md) **get_glyph_size** ( cache_index: [`int`](class_int.md), size: [`Vector2i`](class_vector2i.md), glyph: [`int`](class_int.md) ) const[^const]<div id="class_fontfile_method_get_glyph_size"></div>

Returns glyph size.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_fontfile_method_get_glyph_texture_idx"></div>

[`int`](class_int.md) **get_glyph_texture_idx** ( cache_index: [`int`](class_int.md), size: [`Vector2i`](class_vector2i.md), glyph: [`int`](class_int.md) ) const[^const]<div id="class_fontfile_method_get_glyph_texture_idx"></div>

Returns index of the cache texture containing the glyph.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_fontfile_method_get_glyph_uv_rect"></div>

[`Rect2`](class_rect2.md) **get_glyph_uv_rect** ( cache_index: [`int`](class_int.md), size: [`Vector2i`](class_vector2i.md), glyph: [`int`](class_int.md) ) const[^const]<div id="class_fontfile_method_get_glyph_uv_rect"></div>

Returns rectangle in the cache texture containing the glyph.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_fontfile_method_get_kerning"></div>

[`Vector2`](class_vector2.md) **get_kerning** ( cache_index: [`int`](class_int.md), size: [`int`](class_int.md), glyph_pair: [`Vector2i`](class_vector2i.md) ) const[^const]<div id="class_fontfile_method_get_kerning"></div>

Returns kerning for the pair of glyphs.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_fontfile_method_get_kerning_list"></div>

[Array](class_array.md) [`Vector2i`](class_vector2i.md) **get_kerning_list** ( cache_index: [`int`](class_int.md), size: [`int`](class_int.md) ) const[^const]<div id="class_fontfile_method_get_kerning_list"></div>

Returns list of the kerning overrides.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_fontfile_method_get_language_support_override"></div>

[`bool`](class_bool.md) **get_language_support_override** ( language: [`String`](class_string.md) ) const[^const]<div id="class_fontfile_method_get_language_support_override"></div>

Returns `true` if support override is enabled for the `language`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_fontfile_method_get_language_support_overrides"></div>

[`PackedStringArray`](class_packedstringarray.md) **get_language_support_overrides** ( ) const[^const]<div id="class_fontfile_method_get_language_support_overrides"></div>

Returns list of language support overrides.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_fontfile_method_get_script_support_override"></div>

[`bool`](class_bool.md) **get_script_support_override** ( script: [`String`](class_string.md) ) const[^const]<div id="class_fontfile_method_get_script_support_override"></div>

Returns `true` if support override is enabled for the `script`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_fontfile_method_get_script_support_overrides"></div>

[`PackedStringArray`](class_packedstringarray.md) **get_script_support_overrides** ( ) const[^const]<div id="class_fontfile_method_get_script_support_overrides"></div>

Returns list of script support overrides.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_fontfile_method_get_size_cache_list"></div>

[Array](class_array.md) [`Vector2i`](class_vector2i.md) **get_size_cache_list** ( cache_index: [`int`](class_int.md) ) const[^const]<div id="class_fontfile_method_get_size_cache_list"></div>

Returns list of the font sizes in the cache. Each size is [`Vector2i`](class_vector2i.md) with font size and outline size.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_fontfile_method_get_texture_count"></div>

[`int`](class_int.md) **get_texture_count** ( cache_index: [`int`](class_int.md), size: [`Vector2i`](class_vector2i.md) ) const[^const]<div id="class_fontfile_method_get_texture_count"></div>

Returns number of textures used by font cache entry.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_fontfile_method_get_texture_image"></div>

[`Image`](class_image.md) **get_texture_image** ( cache_index: [`int`](class_int.md), size: [`Vector2i`](class_vector2i.md), texture_index: [`int`](class_int.md) ) const[^const]<div id="class_fontfile_method_get_texture_image"></div>

Returns a copy of the font cache texture image.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_fontfile_method_get_texture_offsets"></div>

[`PackedInt32Array`](class_packedint32array.md) **get_texture_offsets** ( cache_index: [`int`](class_int.md), size: [`Vector2i`](class_vector2i.md), texture_index: [`int`](class_int.md) ) const[^const]<div id="class_fontfile_method_get_texture_offsets"></div>

Returns a copy of the array containing glyph packing data.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_fontfile_method_get_transform"></div>

[`Transform2D`](class_transform2d.md) **get_transform** ( cache_index: [`int`](class_int.md) ) const[^const]<div id="class_fontfile_method_get_transform"></div>

Returns 2D transform, applied to the font outlines, can be used for slanting, flipping and rotating glyphs.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_fontfile_method_get_variation_coordinates"></div>

[`Dictionary`](class_dictionary.md) **get_variation_coordinates** ( cache_index: [`int`](class_int.md) ) const[^const]<div id="class_fontfile_method_get_variation_coordinates"></div>

Returns variation coordinates for the specified font cache entry. See [`Font.get_supported_variation_list`](#class_font_method_get_supported_variation_list) for more info.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_fontfile_method_load_bitmap_font"></div>

[Error](#enum_@globalscope_error) **load_bitmap_font** ( path: [`String`](class_string.md) )<div id="class_fontfile_method_load_bitmap_font"></div>

Loads an AngelCode BMFont (.fnt, .font) bitmap font from file `path`.

 **Warning:** This method should only be used in the editor or in cases when you need to load external fonts at run-time, such as fonts located at the `user://` directory.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_fontfile_method_load_dynamic_font"></div>

[Error](#enum_@globalscope_error) **load_dynamic_font** ( path: [`String`](class_string.md) )<div id="class_fontfile_method_load_dynamic_font"></div>

Loads a TrueType (.ttf), OpenType (.otf), WOFF (.woff), WOFF2 (.woff2) or Type 1 (.pfb, .pfm) dynamic font from file `path`.

 **Warning:** This method should only be used in the editor or in cases when you need to load external fonts at run-time, such as fonts located at the `user://` directory.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_fontfile_method_remove_cache"></div>

`void` **remove_cache** ( cache_index: [`int`](class_int.md) )<div id="class_fontfile_method_remove_cache"></div>

Removes specified font cache entry.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_fontfile_method_remove_glyph"></div>

`void` **remove_glyph** ( cache_index: [`int`](class_int.md), size: [`Vector2i`](class_vector2i.md), glyph: [`int`](class_int.md) )<div id="class_fontfile_method_remove_glyph"></div>

Removes specified rendered glyph information from the cache entry.

 **Note:** This function will not remove textures associated with the glyphs, use [`remove_texture`](#class_fontfile_method_remove_texture) to remove them manually.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_fontfile_method_remove_kerning"></div>

`void` **remove_kerning** ( cache_index: [`int`](class_int.md), size: [`int`](class_int.md), glyph_pair: [`Vector2i`](class_vector2i.md) )<div id="class_fontfile_method_remove_kerning"></div>

Removes kerning override for the pair of glyphs.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_fontfile_method_remove_language_support_override"></div>

`void` **remove_language_support_override** ( language: [`String`](class_string.md) )<div id="class_fontfile_method_remove_language_support_override"></div>

Remove language support override.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_fontfile_method_remove_script_support_override"></div>

`void` **remove_script_support_override** ( script: [`String`](class_string.md) )<div id="class_fontfile_method_remove_script_support_override"></div>

Removes script support override.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_fontfile_method_remove_size_cache"></div>

`void` **remove_size_cache** ( cache_index: [`int`](class_int.md), size: [`Vector2i`](class_vector2i.md) )<div id="class_fontfile_method_remove_size_cache"></div>

Removes specified font size from the cache entry.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_fontfile_method_remove_texture"></div>

`void` **remove_texture** ( cache_index: [`int`](class_int.md), size: [`Vector2i`](class_vector2i.md), texture_index: [`int`](class_int.md) )<div id="class_fontfile_method_remove_texture"></div>

Removes specified texture from the cache entry.

 **Note:** This function will not remove glyphs associated with the texture. Remove them manually using [`remove_glyph`](#class_fontfile_method_remove_glyph).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_fontfile_method_render_glyph"></div>

`void` **render_glyph** ( cache_index: [`int`](class_int.md), size: [`Vector2i`](class_vector2i.md), index: [`int`](class_int.md) )<div id="class_fontfile_method_render_glyph"></div>

Renders specified glyph to the font cache texture.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_fontfile_method_render_range"></div>

`void` **render_range** ( cache_index: [`int`](class_int.md), size: [`Vector2i`](class_vector2i.md), start: [`int`](class_int.md), end: [`int`](class_int.md) )<div id="class_fontfile_method_render_range"></div>

Renders the range of characters to the font cache texture.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_fontfile_method_set_cache_ascent"></div>

`void` **set_cache_ascent** ( cache_index: [`int`](class_int.md), size: [`int`](class_int.md), ascent: [`float`](class_float.md) )<div id="class_fontfile_method_set_cache_ascent"></div>

Sets the font ascent (number of pixels above the baseline).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_fontfile_method_set_cache_descent"></div>

`void` **set_cache_descent** ( cache_index: [`int`](class_int.md), size: [`int`](class_int.md), descent: [`float`](class_float.md) )<div id="class_fontfile_method_set_cache_descent"></div>

Sets the font descent (number of pixels below the baseline).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_fontfile_method_set_cache_scale"></div>

`void` **set_cache_scale** ( cache_index: [`int`](class_int.md), size: [`int`](class_int.md), scale: [`float`](class_float.md) )<div id="class_fontfile_method_set_cache_scale"></div>

Sets scaling factor of the color bitmap font.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_fontfile_method_set_cache_underline_position"></div>

`void` **set_cache_underline_position** ( cache_index: [`int`](class_int.md), size: [`int`](class_int.md), underline_position: [`float`](class_float.md) )<div id="class_fontfile_method_set_cache_underline_position"></div>

Sets pixel offset of the underline below the baseline.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_fontfile_method_set_cache_underline_thickness"></div>

`void` **set_cache_underline_thickness** ( cache_index: [`int`](class_int.md), size: [`int`](class_int.md), underline_thickness: [`float`](class_float.md) )<div id="class_fontfile_method_set_cache_underline_thickness"></div>

Sets thickness of the underline in pixels.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_fontfile_method_set_embolden"></div>

`void` **set_embolden** ( cache_index: [`int`](class_int.md), strength: [`float`](class_float.md) )<div id="class_fontfile_method_set_embolden"></div>

Sets embolden strength, if is not equal to zero, emboldens the font outlines. Negative values reduce the outline thickness.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_fontfile_method_set_extra_baseline_offset"></div>

`void` **set_extra_baseline_offset** ( cache_index: [`int`](class_int.md), baseline_offset: [`float`](class_float.md) )<div id="class_fontfile_method_set_extra_baseline_offset"></div>

Sets extra baseline offset (as a fraction of font height).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_fontfile_method_set_extra_spacing"></div>

`void` **set_extra_spacing** ( cache_index: [`int`](class_int.md), spacing: [SpacingType](#enum_textserver_spacingtype), value: [`int`](class_int.md) )<div id="class_fontfile_method_set_extra_spacing"></div>

Sets the spacing for `spacing` (see [SpacingType](#enum_textserver_spacingtype)) to `value` in pixels (not relative to the font size).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_fontfile_method_set_face_index"></div>

`void` **set_face_index** ( cache_index: [`int`](class_int.md), face_index: [`int`](class_int.md) )<div id="class_fontfile_method_set_face_index"></div>

Sets an active face index in the TrueType / OpenType collection.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_fontfile_method_set_glyph_advance"></div>

`void` **set_glyph_advance** ( cache_index: [`int`](class_int.md), size: [`int`](class_int.md), glyph: [`int`](class_int.md), advance: [`Vector2`](class_vector2.md) )<div id="class_fontfile_method_set_glyph_advance"></div>

Sets glyph advance (offset of the next glyph).

 **Note:** Advance for glyphs outlines is the same as the base glyph advance and is not saved.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_fontfile_method_set_glyph_offset"></div>

`void` **set_glyph_offset** ( cache_index: [`int`](class_int.md), size: [`Vector2i`](class_vector2i.md), glyph: [`int`](class_int.md), offset: [`Vector2`](class_vector2.md) )<div id="class_fontfile_method_set_glyph_offset"></div>

Sets glyph offset from the baseline.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_fontfile_method_set_glyph_size"></div>

`void` **set_glyph_size** ( cache_index: [`int`](class_int.md), size: [`Vector2i`](class_vector2i.md), glyph: [`int`](class_int.md), gl_size: [`Vector2`](class_vector2.md) )<div id="class_fontfile_method_set_glyph_size"></div>

Sets glyph size.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_fontfile_method_set_glyph_texture_idx"></div>

`void` **set_glyph_texture_idx** ( cache_index: [`int`](class_int.md), size: [`Vector2i`](class_vector2i.md), glyph: [`int`](class_int.md), texture_idx: [`int`](class_int.md) )<div id="class_fontfile_method_set_glyph_texture_idx"></div>

Sets index of the cache texture containing the glyph.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_fontfile_method_set_glyph_uv_rect"></div>

`void` **set_glyph_uv_rect** ( cache_index: [`int`](class_int.md), size: [`Vector2i`](class_vector2i.md), glyph: [`int`](class_int.md), uv_rect: [`Rect2`](class_rect2.md) )<div id="class_fontfile_method_set_glyph_uv_rect"></div>

Sets rectangle in the cache texture containing the glyph.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_fontfile_method_set_kerning"></div>

`void` **set_kerning** ( cache_index: [`int`](class_int.md), size: [`int`](class_int.md), glyph_pair: [`Vector2i`](class_vector2i.md), kerning: [`Vector2`](class_vector2.md) )<div id="class_fontfile_method_set_kerning"></div>

Sets kerning for the pair of glyphs.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_fontfile_method_set_language_support_override"></div>

`void` **set_language_support_override** ( language: [`String`](class_string.md), supported: [`bool`](class_bool.md) )<div id="class_fontfile_method_set_language_support_override"></div>

Adds override for [`Font.is_language_supported`](#class_font_method_is_language_supported).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_fontfile_method_set_script_support_override"></div>

`void` **set_script_support_override** ( script: [`String`](class_string.md), supported: [`bool`](class_bool.md) )<div id="class_fontfile_method_set_script_support_override"></div>

Adds override for [`Font.is_script_supported`](#class_font_method_is_script_supported).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_fontfile_method_set_texture_image"></div>

`void` **set_texture_image** ( cache_index: [`int`](class_int.md), size: [`Vector2i`](class_vector2i.md), texture_index: [`int`](class_int.md), image: [`Image`](class_image.md) )<div id="class_fontfile_method_set_texture_image"></div>

Sets font cache texture image.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_fontfile_method_set_texture_offsets"></div>

`void` **set_texture_offsets** ( cache_index: [`int`](class_int.md), size: [`Vector2i`](class_vector2i.md), texture_index: [`int`](class_int.md), offset: [`PackedInt32Array`](class_packedint32array.md) )<div id="class_fontfile_method_set_texture_offsets"></div>

Sets array containing glyph packing data.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_fontfile_method_set_transform"></div>

`void` **set_transform** ( cache_index: [`int`](class_int.md), transform: [`Transform2D`](class_transform2d.md) )<div id="class_fontfile_method_set_transform"></div>

Sets 2D transform, applied to the font outlines, can be used for slanting, flipping, and rotating glyphs.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_fontfile_method_set_variation_coordinates"></div>

`void` **set_variation_coordinates** ( cache_index: [`int`](class_int.md), variation_coordinates: [`Dictionary`](class_dictionary.md) )<div id="class_fontfile_method_set_variation_coordinates"></div>

Sets variation coordinates for the specified font cache entry. See [`Font.get_supported_variation_list`](#class_font_method_get_supported_variation_list) for more info.

[^virtual]: 本方法通常需要用户覆盖才能生效。
[^const]: 本方法无副作用，不会修改该实例的任何成员变量。
[^vararg]: 本方法除了能接受在此处描述的参数外，还能够继续接受任意数量的参数。
[^constructor]: 本方法用于构造某个类型。
[^static]: 调用本方法无需实例，可直接使用类名进行调用。
[^operator]: 本方法描述的是使用本类型作为左操作数的有效运算符。
[^bitfield]: 这个值是由下列位标志构成位掩码的整数。
[^void]: 无返回值。
