<!-- ⚠ 请勿编辑本文件 ⚠ -->
<!-- 本文档使用脚本从 WeDot 引擎源码仓库生成。 -->
<!-- 生成脚本：https://github.com/WeDot-Engine/WeDot/tree/master/doc/tools/make_md.py； -->
<!-- 原文件：https://github.com/WeDot-Engine/WeDot/tree/master/doc/classes/TextServerExtension.xml。 -->

<div id="_class_textserverextension"></div>

# TextServerExtension

**继承：** [`TextServer`](class_textserver.md) **<** [`RefCounted`](class_refcounted.md) **<** [`Object`](class_object.md)

**派生：** [`TextServerAdvanced`](class_textserveradvanced.md), [`TextServerDummy`](class_textserverdummy.md), [`TextServerFallback`](class_textserverfallback.md)

Base class for custom [`TextServer`](class_textserver.md) implementations (plugins).

## 描述

External [`TextServer`](class_textserver.md) implementations should inherit from this class.

## 方法

|||
|:-:|:--|
| `void`                                                      | [`_cleanup`](class_textserverextension.md#class_textserverextension_private_method__cleanup) ( ) virtual[^virtual]                                                                                                                                                                                                                                                                                                                       |
| [`RID`](class_rid.md)                                       | [`_create_font`](class_textserverextension.md#class_textserverextension_private_method__create_font) ( ) virtual[^virtual]                                                                                                                                                                                                                                                                                                               |
| [`RID`](class_rid.md)                                       | [`_create_font_linked_variation`](class_textserverextension.md#class_textserverextension_private_method__create_font_linked_variation) ( font_rid: [`RID`](class_rid.md) ) virtual[^virtual]                                                                                                                                                                                                                                             |
| [`RID`](class_rid.md)                                       | [`_create_shaped_text`](class_textserverextension.md#class_textserverextension_private_method__create_shaped_text) ( direction: [Direction](#enum_textserver_direction), orientation: [Orientation](#enum_textserver_orientation) ) virtual[^virtual]                                                                                                                                                                                    |
| `void`                                                      | [`_draw_hex_code_box`](class_textserverextension.md#class_textserverextension_private_method__draw_hex_code_box) ( canvas: [`RID`](class_rid.md), size: [`int`](class_int.md), pos: [`Vector2`](class_vector2.md), index: [`int`](class_int.md), color: [`Color`](class_color.md) ) virtual[^virtual] const[^const]                                                                                                                      |
| `void`                                                      | [`_font_clear_glyphs`](class_textserverextension.md#class_textserverextension_private_method__font_clear_glyphs) ( font_rid: [`RID`](class_rid.md), size: [`Vector2i`](class_vector2i.md) ) virtual[^virtual]                                                                                                                                                                                                                            |
| `void`                                                      | [`_font_clear_kerning_map`](class_textserverextension.md#class_textserverextension_private_method__font_clear_kerning_map) ( font_rid: [`RID`](class_rid.md), size: [`int`](class_int.md) ) virtual[^virtual]                                                                                                                                                                                                                            |
| `void`                                                      | [`_font_clear_size_cache`](class_textserverextension.md#class_textserverextension_private_method__font_clear_size_cache) ( font_rid: [`RID`](class_rid.md) ) virtual[^virtual]                                                                                                                                                                                                                                                           |
| `void`                                                      | [`_font_clear_textures`](class_textserverextension.md#class_textserverextension_private_method__font_clear_textures) ( font_rid: [`RID`](class_rid.md), size: [`Vector2i`](class_vector2i.md) ) virtual[^virtual]                                                                                                                                                                                                                        |
| `void`                                                      | [`_font_draw_glyph`](class_textserverextension.md#class_textserverextension_private_method__font_draw_glyph) ( font_rid: [`RID`](class_rid.md), canvas: [`RID`](class_rid.md), size: [`int`](class_int.md), pos: [`Vector2`](class_vector2.md), index: [`int`](class_int.md), color: [`Color`](class_color.md) ) virtual[^virtual] const[^const]                                                                                         |
| `void`                                                      | [`_font_draw_glyph_outline`](class_textserverextension.md#class_textserverextension_private_method__font_draw_glyph_outline) ( font_rid: [`RID`](class_rid.md), canvas: [`RID`](class_rid.md), size: [`int`](class_int.md), outline_size: [`int`](class_int.md), pos: [`Vector2`](class_vector2.md), index: [`int`](class_int.md), color: [`Color`](class_color.md) ) virtual[^virtual] const[^const]                                    |
| [FontAntialiasing](#enum_textserver_fontantialiasing)       | [`_font_get_antialiasing`](class_textserverextension.md#class_textserverextension_private_method__font_get_antialiasing) ( font_rid: [`RID`](class_rid.md) ) virtual[^virtual] const[^const]                                                                                                                                                                                                                                             |
| [`float`](class_float.md)                                   | [`_font_get_ascent`](class_textserverextension.md#class_textserverextension_private_method__font_get_ascent) ( font_rid: [`RID`](class_rid.md), size: [`int`](class_int.md) ) virtual[^virtual] const[^const]                                                                                                                                                                                                                            |
| [`float`](class_float.md)                                   | [`_font_get_baseline_offset`](class_textserverextension.md#class_textserverextension_private_method__font_get_baseline_offset) ( font_rid: [`RID`](class_rid.md) ) virtual[^virtual] const[^const]                                                                                                                                                                                                                                       |
| [`int`](class_int.md)                                       | [`_font_get_char_from_glyph_index`](class_textserverextension.md#class_textserverextension_private_method__font_get_char_from_glyph_index) ( font_rid: [`RID`](class_rid.md), size: [`int`](class_int.md), glyph_index: [`int`](class_int.md) ) virtual[^virtual] const[^const]                                                                                                                                                          |
| [`float`](class_float.md)                                   | [`_font_get_descent`](class_textserverextension.md#class_textserverextension_private_method__font_get_descent) ( font_rid: [`RID`](class_rid.md), size: [`int`](class_int.md) ) virtual[^virtual] const[^const]                                                                                                                                                                                                                          |
| [`bool`](class_bool.md)                                     | [`_font_get_disable_embedded_bitmaps`](class_textserverextension.md#class_textserverextension_private_method__font_get_disable_embedded_bitmaps) ( font_rid: [`RID`](class_rid.md) ) virtual[^virtual] const[^const]                                                                                                                                                                                                                     |
| [`float`](class_float.md)                                   | [`_font_get_embolden`](class_textserverextension.md#class_textserverextension_private_method__font_get_embolden) ( font_rid: [`RID`](class_rid.md) ) virtual[^virtual] const[^const]                                                                                                                                                                                                                                                     |
| [`int`](class_int.md)                                       | [`_font_get_face_count`](class_textserverextension.md#class_textserverextension_private_method__font_get_face_count) ( font_rid: [`RID`](class_rid.md) ) virtual[^virtual] const[^const]                                                                                                                                                                                                                                                 |
| [`int`](class_int.md)                                       | [`_font_get_face_index`](class_textserverextension.md#class_textserverextension_private_method__font_get_face_index) ( font_rid: [`RID`](class_rid.md) ) virtual[^virtual] const[^const]                                                                                                                                                                                                                                                 |
| [`int`](class_int.md)                                       | [`_font_get_fixed_size`](class_textserverextension.md#class_textserverextension_private_method__font_get_fixed_size) ( font_rid: [`RID`](class_rid.md) ) virtual[^virtual] const[^const]                                                                                                                                                                                                                                                 |
| [FixedSizeScaleMode](#enum_textserver_fixedsizescalemode)   | [`_font_get_fixed_size_scale_mode`](class_textserverextension.md#class_textserverextension_private_method__font_get_fixed_size_scale_mode) ( font_rid: [`RID`](class_rid.md) ) virtual[^virtual] const[^const]                                                                                                                                                                                                                           |
| [`bool`](class_bool.md)                                     | [`_font_get_generate_mipmaps`](class_textserverextension.md#class_textserverextension_private_method__font_get_generate_mipmaps) ( font_rid: [`RID`](class_rid.md) ) virtual[^virtual] const[^const]                                                                                                                                                                                                                                     |
| [`float`](class_float.md)                                   | [`_font_get_global_oversampling`](class_textserverextension.md#class_textserverextension_private_method__font_get_global_oversampling) ( ) virtual[^virtual] const[^const]                                                                                                                                                                                                                                                               |
| [`Vector2`](class_vector2.md)                               | [`_font_get_glyph_advance`](class_textserverextension.md#class_textserverextension_private_method__font_get_glyph_advance) ( font_rid: [`RID`](class_rid.md), size: [`int`](class_int.md), glyph: [`int`](class_int.md) ) virtual[^virtual] const[^const]                                                                                                                                                                                |
| [`Dictionary`](class_dictionary.md)                         | [`_font_get_glyph_contours`](class_textserverextension.md#class_textserverextension_private_method__font_get_glyph_contours) ( font_rid: [`RID`](class_rid.md), size: [`int`](class_int.md), index: [`int`](class_int.md) ) virtual[^virtual] const[^const]                                                                                                                                                                              |
| [`int`](class_int.md)                                       | [`_font_get_glyph_index`](class_textserverextension.md#class_textserverextension_private_method__font_get_glyph_index) ( font_rid: [`RID`](class_rid.md), size: [`int`](class_int.md), char: [`int`](class_int.md), variation_selector: [`int`](class_int.md) ) virtual[^virtual] const[^const]                                                                                                                                          |
| [`PackedInt32Array`](class_packedint32array.md)             | [`_font_get_glyph_list`](class_textserverextension.md#class_textserverextension_private_method__font_get_glyph_list) ( font_rid: [`RID`](class_rid.md), size: [`Vector2i`](class_vector2i.md) ) virtual[^virtual] const[^const]                                                                                                                                                                                                          |
| [`Vector2`](class_vector2.md)                               | [`_font_get_glyph_offset`](class_textserverextension.md#class_textserverextension_private_method__font_get_glyph_offset) ( font_rid: [`RID`](class_rid.md), size: [`Vector2i`](class_vector2i.md), glyph: [`int`](class_int.md) ) virtual[^virtual] const[^const]                                                                                                                                                                        |
| [`Vector2`](class_vector2.md)                               | [`_font_get_glyph_size`](class_textserverextension.md#class_textserverextension_private_method__font_get_glyph_size) ( font_rid: [`RID`](class_rid.md), size: [`Vector2i`](class_vector2i.md), glyph: [`int`](class_int.md) ) virtual[^virtual] const[^const]                                                                                                                                                                            |
| [`int`](class_int.md)                                       | [`_font_get_glyph_texture_idx`](class_textserverextension.md#class_textserverextension_private_method__font_get_glyph_texture_idx) ( font_rid: [`RID`](class_rid.md), size: [`Vector2i`](class_vector2i.md), glyph: [`int`](class_int.md) ) virtual[^virtual] const[^const]                                                                                                                                                              |
| [`RID`](class_rid.md)                                       | [`_font_get_glyph_texture_rid`](class_textserverextension.md#class_textserverextension_private_method__font_get_glyph_texture_rid) ( font_rid: [`RID`](class_rid.md), size: [`Vector2i`](class_vector2i.md), glyph: [`int`](class_int.md) ) virtual[^virtual] const[^const]                                                                                                                                                              |
| [`Vector2`](class_vector2.md)                               | [`_font_get_glyph_texture_size`](class_textserverextension.md#class_textserverextension_private_method__font_get_glyph_texture_size) ( font_rid: [`RID`](class_rid.md), size: [`Vector2i`](class_vector2i.md), glyph: [`int`](class_int.md) ) virtual[^virtual] const[^const]                                                                                                                                                            |
| [`Rect2`](class_rect2.md)                                   | [`_font_get_glyph_uv_rect`](class_textserverextension.md#class_textserverextension_private_method__font_get_glyph_uv_rect) ( font_rid: [`RID`](class_rid.md), size: [`Vector2i`](class_vector2i.md), glyph: [`int`](class_int.md) ) virtual[^virtual] const[^const]                                                                                                                                                                      |
| [Hinting](#enum_textserver_hinting)                         | [`_font_get_hinting`](class_textserverextension.md#class_textserverextension_private_method__font_get_hinting) ( font_rid: [`RID`](class_rid.md) ) virtual[^virtual] const[^const]                                                                                                                                                                                                                                                       |
| [`Vector2`](class_vector2.md)                               | [`_font_get_kerning`](class_textserverextension.md#class_textserverextension_private_method__font_get_kerning) ( font_rid: [`RID`](class_rid.md), size: [`int`](class_int.md), glyph_pair: [`Vector2i`](class_vector2i.md) ) virtual[^virtual] const[^const]                                                                                                                                                                             |
| [Array](class_array.md) [`Vector2i`](class_vector2i.md)     | [`_font_get_kerning_list`](class_textserverextension.md#class_textserverextension_private_method__font_get_kerning_list) ( font_rid: [`RID`](class_rid.md), size: [`int`](class_int.md) ) virtual[^virtual] const[^const]                                                                                                                                                                                                                |
| [`bool`](class_bool.md)                                     | [`_font_get_language_support_override`](class_textserverextension.md#class_textserverextension_private_method__font_get_language_support_override) ( font_rid: [`RID`](class_rid.md), language: [`String`](class_string.md) ) virtual[^virtual]                                                                                                                                                                                          |
| [`PackedStringArray`](class_packedstringarray.md)           | [`_font_get_language_support_overrides`](class_textserverextension.md#class_textserverextension_private_method__font_get_language_support_overrides) ( font_rid: [`RID`](class_rid.md) ) virtual[^virtual]                                                                                                                                                                                                                               |
| [`int`](class_int.md)                                       | [`_font_get_msdf_pixel_range`](class_textserverextension.md#class_textserverextension_private_method__font_get_msdf_pixel_range) ( font_rid: [`RID`](class_rid.md) ) virtual[^virtual] const[^const]                                                                                                                                                                                                                                     |
| [`int`](class_int.md)                                       | [`_font_get_msdf_size`](class_textserverextension.md#class_textserverextension_private_method__font_get_msdf_size) ( font_rid: [`RID`](class_rid.md) ) virtual[^virtual] const[^const]                                                                                                                                                                                                                                                   |
| [`String`](class_string.md)                                 | [`_font_get_name`](class_textserverextension.md#class_textserverextension_private_method__font_get_name) ( font_rid: [`RID`](class_rid.md) ) virtual[^virtual] const[^const]                                                                                                                                                                                                                                                             |
| [`Dictionary`](class_dictionary.md)                         | [`_font_get_opentype_feature_overrides`](class_textserverextension.md#class_textserverextension_private_method__font_get_opentype_feature_overrides) ( font_rid: [`RID`](class_rid.md) ) virtual[^virtual] const[^const]                                                                                                                                                                                                                 |
| [`Dictionary`](class_dictionary.md)                         | [`_font_get_ot_name_strings`](class_textserverextension.md#class_textserverextension_private_method__font_get_ot_name_strings) ( font_rid: [`RID`](class_rid.md) ) virtual[^virtual] const[^const]                                                                                                                                                                                                                                       |
| [`float`](class_float.md)                                   | [`_font_get_oversampling`](class_textserverextension.md#class_textserverextension_private_method__font_get_oversampling) ( font_rid: [`RID`](class_rid.md) ) virtual[^virtual] const[^const]                                                                                                                                                                                                                                             |
| [`float`](class_float.md)                                   | [`_font_get_scale`](class_textserverextension.md#class_textserverextension_private_method__font_get_scale) ( font_rid: [`RID`](class_rid.md), size: [`int`](class_int.md) ) virtual[^virtual] const[^const]                                                                                                                                                                                                                              |
| [`bool`](class_bool.md)                                     | [`_font_get_script_support_override`](class_textserverextension.md#class_textserverextension_private_method__font_get_script_support_override) ( font_rid: [`RID`](class_rid.md), script: [`String`](class_string.md) ) virtual[^virtual]                                                                                                                                                                                                |
| [`PackedStringArray`](class_packedstringarray.md)           | [`_font_get_script_support_overrides`](class_textserverextension.md#class_textserverextension_private_method__font_get_script_support_overrides) ( font_rid: [`RID`](class_rid.md) ) virtual[^virtual]                                                                                                                                                                                                                                   |
| [Array](class_array.md) [`Vector2i`](class_vector2i.md)     | [`_font_get_size_cache_list`](class_textserverextension.md#class_textserverextension_private_method__font_get_size_cache_list) ( font_rid: [`RID`](class_rid.md) ) virtual[^virtual] const[^const]                                                                                                                                                                                                                                       |
| [`int`](class_int.md)                                       | [`_font_get_spacing`](class_textserverextension.md#class_textserverextension_private_method__font_get_spacing) ( font_rid: [`RID`](class_rid.md), spacing: [SpacingType](#enum_textserver_spacingtype) ) virtual[^virtual] const[^const]                                                                                                                                                                                                 |
| [`int`](class_int.md)                                       | [`_font_get_stretch`](class_textserverextension.md#class_textserverextension_private_method__font_get_stretch) ( font_rid: [`RID`](class_rid.md) ) virtual[^virtual] const[^const]                                                                                                                                                                                                                                                       |
| [FontStyle](#enum_textserver_fontstyle)                     | [`_font_get_style`](class_textserverextension.md#class_textserverextension_private_method__font_get_style) ( font_rid: [`RID`](class_rid.md) ) virtual[^virtual] const[^const]                                                                                                                                                                                                                                                           |
| [`String`](class_string.md)                                 | [`_font_get_style_name`](class_textserverextension.md#class_textserverextension_private_method__font_get_style_name) ( font_rid: [`RID`](class_rid.md) ) virtual[^virtual] const[^const]                                                                                                                                                                                                                                                 |
| [SubpixelPositioning](#enum_textserver_subpixelpositioning) | [`_font_get_subpixel_positioning`](class_textserverextension.md#class_textserverextension_private_method__font_get_subpixel_positioning) ( font_rid: [`RID`](class_rid.md) ) virtual[^virtual] const[^const]                                                                                                                                                                                                                             |
| [`String`](class_string.md)                                 | [`_font_get_supported_chars`](class_textserverextension.md#class_textserverextension_private_method__font_get_supported_chars) ( font_rid: [`RID`](class_rid.md) ) virtual[^virtual] const[^const]                                                                                                                                                                                                                                       |
| [`PackedInt32Array`](class_packedint32array.md)             | [`_font_get_supported_glyphs`](class_textserverextension.md#class_textserverextension_private_method__font_get_supported_glyphs) ( font_rid: [`RID`](class_rid.md) ) virtual[^virtual] const[^const]                                                                                                                                                                                                                                     |
| [`int`](class_int.md)                                       | [`_font_get_texture_count`](class_textserverextension.md#class_textserverextension_private_method__font_get_texture_count) ( font_rid: [`RID`](class_rid.md), size: [`Vector2i`](class_vector2i.md) ) virtual[^virtual] const[^const]                                                                                                                                                                                                    |
| [`Image`](class_image.md)                                   | [`_font_get_texture_image`](class_textserverextension.md#class_textserverextension_private_method__font_get_texture_image) ( font_rid: [`RID`](class_rid.md), size: [`Vector2i`](class_vector2i.md), texture_index: [`int`](class_int.md) ) virtual[^virtual] const[^const]                                                                                                                                                              |
| [`PackedInt32Array`](class_packedint32array.md)             | [`_font_get_texture_offsets`](class_textserverextension.md#class_textserverextension_private_method__font_get_texture_offsets) ( font_rid: [`RID`](class_rid.md), size: [`Vector2i`](class_vector2i.md), texture_index: [`int`](class_int.md) ) virtual[^virtual] const[^const]                                                                                                                                                          |
| [`Transform2D`](class_transform2d.md)                       | [`_font_get_transform`](class_textserverextension.md#class_textserverextension_private_method__font_get_transform) ( font_rid: [`RID`](class_rid.md) ) virtual[^virtual] const[^const]                                                                                                                                                                                                                                                   |
| [`float`](class_float.md)                                   | [`_font_get_underline_position`](class_textserverextension.md#class_textserverextension_private_method__font_get_underline_position) ( font_rid: [`RID`](class_rid.md), size: [`int`](class_int.md) ) virtual[^virtual] const[^const]                                                                                                                                                                                                    |
| [`float`](class_float.md)                                   | [`_font_get_underline_thickness`](class_textserverextension.md#class_textserverextension_private_method__font_get_underline_thickness) ( font_rid: [`RID`](class_rid.md), size: [`int`](class_int.md) ) virtual[^virtual] const[^const]                                                                                                                                                                                                  |
| [`Dictionary`](class_dictionary.md)                         | [`_font_get_variation_coordinates`](class_textserverextension.md#class_textserverextension_private_method__font_get_variation_coordinates) ( font_rid: [`RID`](class_rid.md) ) virtual[^virtual] const[^const]                                                                                                                                                                                                                           |
| [`int`](class_int.md)                                       | [`_font_get_weight`](class_textserverextension.md#class_textserverextension_private_method__font_get_weight) ( font_rid: [`RID`](class_rid.md) ) virtual[^virtual] const[^const]                                                                                                                                                                                                                                                         |
| [`bool`](class_bool.md)                                     | [`_font_has_char`](class_textserverextension.md#class_textserverextension_private_method__font_has_char) ( font_rid: [`RID`](class_rid.md), char: [`int`](class_int.md) ) virtual[^virtual] const[^const]                                                                                                                                                                                                                                |
| [`bool`](class_bool.md)                                     | [`_font_is_allow_system_fallback`](class_textserverextension.md#class_textserverextension_private_method__font_is_allow_system_fallback) ( font_rid: [`RID`](class_rid.md) ) virtual[^virtual] const[^const]                                                                                                                                                                                                                             |
| [`bool`](class_bool.md)                                     | [`_font_is_force_autohinter`](class_textserverextension.md#class_textserverextension_private_method__font_is_force_autohinter) ( font_rid: [`RID`](class_rid.md) ) virtual[^virtual] const[^const]                                                                                                                                                                                                                                       |
| [`bool`](class_bool.md)                                     | [`_font_is_language_supported`](class_textserverextension.md#class_textserverextension_private_method__font_is_language_supported) ( font_rid: [`RID`](class_rid.md), language: [`String`](class_string.md) ) virtual[^virtual] const[^const]                                                                                                                                                                                            |
| [`bool`](class_bool.md)                                     | [`_font_is_multichannel_signed_distance_field`](class_textserverextension.md#class_textserverextension_private_method__font_is_multichannel_signed_distance_field) ( font_rid: [`RID`](class_rid.md) ) virtual[^virtual] const[^const]                                                                                                                                                                                                   |
| [`bool`](class_bool.md)                                     | [`_font_is_script_supported`](class_textserverextension.md#class_textserverextension_private_method__font_is_script_supported) ( font_rid: [`RID`](class_rid.md), script: [`String`](class_string.md) ) virtual[^virtual] const[^const]                                                                                                                                                                                                  |
| `void`                                                      | [`_font_remove_glyph`](class_textserverextension.md#class_textserverextension_private_method__font_remove_glyph) ( font_rid: [`RID`](class_rid.md), size: [`Vector2i`](class_vector2i.md), glyph: [`int`](class_int.md) ) virtual[^virtual]                                                                                                                                                                                              |
| `void`                                                      | [`_font_remove_kerning`](class_textserverextension.md#class_textserverextension_private_method__font_remove_kerning) ( font_rid: [`RID`](class_rid.md), size: [`int`](class_int.md), glyph_pair: [`Vector2i`](class_vector2i.md) ) virtual[^virtual]                                                                                                                                                                                     |
| `void`                                                      | [`_font_remove_language_support_override`](class_textserverextension.md#class_textserverextension_private_method__font_remove_language_support_override) ( font_rid: [`RID`](class_rid.md), language: [`String`](class_string.md) ) virtual[^virtual]                                                                                                                                                                                    |
| `void`                                                      | [`_font_remove_script_support_override`](class_textserverextension.md#class_textserverextension_private_method__font_remove_script_support_override) ( font_rid: [`RID`](class_rid.md), script: [`String`](class_string.md) ) virtual[^virtual]                                                                                                                                                                                          |
| `void`                                                      | [`_font_remove_size_cache`](class_textserverextension.md#class_textserverextension_private_method__font_remove_size_cache) ( font_rid: [`RID`](class_rid.md), size: [`Vector2i`](class_vector2i.md) ) virtual[^virtual]                                                                                                                                                                                                                  |
| `void`                                                      | [`_font_remove_texture`](class_textserverextension.md#class_textserverextension_private_method__font_remove_texture) ( font_rid: [`RID`](class_rid.md), size: [`Vector2i`](class_vector2i.md), texture_index: [`int`](class_int.md) ) virtual[^virtual]                                                                                                                                                                                  |
| `void`                                                      | [`_font_render_glyph`](class_textserverextension.md#class_textserverextension_private_method__font_render_glyph) ( font_rid: [`RID`](class_rid.md), size: [`Vector2i`](class_vector2i.md), index: [`int`](class_int.md) ) virtual[^virtual]                                                                                                                                                                                              |
| `void`                                                      | [`_font_render_range`](class_textserverextension.md#class_textserverextension_private_method__font_render_range) ( font_rid: [`RID`](class_rid.md), size: [`Vector2i`](class_vector2i.md), start: [`int`](class_int.md), end: [`int`](class_int.md) ) virtual[^virtual]                                                                                                                                                                  |
| `void`                                                      | [`_font_set_allow_system_fallback`](class_textserverextension.md#class_textserverextension_private_method__font_set_allow_system_fallback) ( font_rid: [`RID`](class_rid.md), allow_system_fallback: [`bool`](class_bool.md) ) virtual[^virtual]                                                                                                                                                                                         |
| `void`                                                      | [`_font_set_antialiasing`](class_textserverextension.md#class_textserverextension_private_method__font_set_antialiasing) ( font_rid: [`RID`](class_rid.md), antialiasing: [FontAntialiasing](#enum_textserver_fontantialiasing) ) virtual[^virtual]                                                                                                                                                                                      |
| `void`                                                      | [`_font_set_ascent`](class_textserverextension.md#class_textserverextension_private_method__font_set_ascent) ( font_rid: [`RID`](class_rid.md), size: [`int`](class_int.md), ascent: [`float`](class_float.md) ) virtual[^virtual]                                                                                                                                                                                                       |
| `void`                                                      | [`_font_set_baseline_offset`](class_textserverextension.md#class_textserverextension_private_method__font_set_baseline_offset) ( font_rid: [`RID`](class_rid.md), baseline_offset: [`float`](class_float.md) ) virtual[^virtual]                                                                                                                                                                                                         |
| `void`                                                      | [`_font_set_data`](class_textserverextension.md#class_textserverextension_private_method__font_set_data) ( font_rid: [`RID`](class_rid.md), data: [`PackedByteArray`](class_packedbytearray.md) ) virtual[^virtual]                                                                                                                                                                                                                      |
| `void`                                                      | [`_font_set_data_ptr`](class_textserverextension.md#class_textserverextension_private_method__font_set_data_ptr) ( font_rid: [`RID`](class_rid.md), data_ptr: `const uint8_t*`, data_size: [`int`](class_int.md) ) virtual[^virtual]                                                                                                                                                                                                     |
| `void`                                                      | [`_font_set_descent`](class_textserverextension.md#class_textserverextension_private_method__font_set_descent) ( font_rid: [`RID`](class_rid.md), size: [`int`](class_int.md), descent: [`float`](class_float.md) ) virtual[^virtual]                                                                                                                                                                                                    |
| `void`                                                      | [`_font_set_disable_embedded_bitmaps`](class_textserverextension.md#class_textserverextension_private_method__font_set_disable_embedded_bitmaps) ( font_rid: [`RID`](class_rid.md), disable_embedded_bitmaps: [`bool`](class_bool.md) ) virtual[^virtual]                                                                                                                                                                                |
| `void`                                                      | [`_font_set_embolden`](class_textserverextension.md#class_textserverextension_private_method__font_set_embolden) ( font_rid: [`RID`](class_rid.md), strength: [`float`](class_float.md) ) virtual[^virtual]                                                                                                                                                                                                                              |
| `void`                                                      | [`_font_set_face_index`](class_textserverextension.md#class_textserverextension_private_method__font_set_face_index) ( font_rid: [`RID`](class_rid.md), face_index: [`int`](class_int.md) ) virtual[^virtual]                                                                                                                                                                                                                            |
| `void`                                                      | [`_font_set_fixed_size`](class_textserverextension.md#class_textserverextension_private_method__font_set_fixed_size) ( font_rid: [`RID`](class_rid.md), fixed_size: [`int`](class_int.md) ) virtual[^virtual]                                                                                                                                                                                                                            |
| `void`                                                      | [`_font_set_fixed_size_scale_mode`](class_textserverextension.md#class_textserverextension_private_method__font_set_fixed_size_scale_mode) ( font_rid: [`RID`](class_rid.md), fixed_size_scale_mode: [FixedSizeScaleMode](#enum_textserver_fixedsizescalemode) ) virtual[^virtual]                                                                                                                                                       |
| `void`                                                      | [`_font_set_force_autohinter`](class_textserverextension.md#class_textserverextension_private_method__font_set_force_autohinter) ( font_rid: [`RID`](class_rid.md), force_autohinter: [`bool`](class_bool.md) ) virtual[^virtual]                                                                                                                                                                                                        |
| `void`                                                      | [`_font_set_generate_mipmaps`](class_textserverextension.md#class_textserverextension_private_method__font_set_generate_mipmaps) ( font_rid: [`RID`](class_rid.md), generate_mipmaps: [`bool`](class_bool.md) ) virtual[^virtual]                                                                                                                                                                                                        |
| `void`                                                      | [`_font_set_global_oversampling`](class_textserverextension.md#class_textserverextension_private_method__font_set_global_oversampling) ( oversampling: [`float`](class_float.md) ) virtual[^virtual]                                                                                                                                                                                                                                     |
| `void`                                                      | [`_font_set_glyph_advance`](class_textserverextension.md#class_textserverextension_private_method__font_set_glyph_advance) ( font_rid: [`RID`](class_rid.md), size: [`int`](class_int.md), glyph: [`int`](class_int.md), advance: [`Vector2`](class_vector2.md) ) virtual[^virtual]                                                                                                                                                      |
| `void`                                                      | [`_font_set_glyph_offset`](class_textserverextension.md#class_textserverextension_private_method__font_set_glyph_offset) ( font_rid: [`RID`](class_rid.md), size: [`Vector2i`](class_vector2i.md), glyph: [`int`](class_int.md), offset: [`Vector2`](class_vector2.md) ) virtual[^virtual]                                                                                                                                               |
| `void`                                                      | [`_font_set_glyph_size`](class_textserverextension.md#class_textserverextension_private_method__font_set_glyph_size) ( font_rid: [`RID`](class_rid.md), size: [`Vector2i`](class_vector2i.md), glyph: [`int`](class_int.md), gl_size: [`Vector2`](class_vector2.md) ) virtual[^virtual]                                                                                                                                                  |
| `void`                                                      | [`_font_set_glyph_texture_idx`](class_textserverextension.md#class_textserverextension_private_method__font_set_glyph_texture_idx) ( font_rid: [`RID`](class_rid.md), size: [`Vector2i`](class_vector2i.md), glyph: [`int`](class_int.md), texture_idx: [`int`](class_int.md) ) virtual[^virtual]                                                                                                                                        |
| `void`                                                      | [`_font_set_glyph_uv_rect`](class_textserverextension.md#class_textserverextension_private_method__font_set_glyph_uv_rect) ( font_rid: [`RID`](class_rid.md), size: [`Vector2i`](class_vector2i.md), glyph: [`int`](class_int.md), uv_rect: [`Rect2`](class_rect2.md) ) virtual[^virtual]                                                                                                                                                |
| `void`                                                      | [`_font_set_hinting`](class_textserverextension.md#class_textserverextension_private_method__font_set_hinting) ( font_rid: [`RID`](class_rid.md), hinting: [Hinting](#enum_textserver_hinting) ) virtual[^virtual]                                                                                                                                                                                                                       |
| `void`                                                      | [`_font_set_kerning`](class_textserverextension.md#class_textserverextension_private_method__font_set_kerning) ( font_rid: [`RID`](class_rid.md), size: [`int`](class_int.md), glyph_pair: [`Vector2i`](class_vector2i.md), kerning: [`Vector2`](class_vector2.md) ) virtual[^virtual]                                                                                                                                                   |
| `void`                                                      | [`_font_set_language_support_override`](class_textserverextension.md#class_textserverextension_private_method__font_set_language_support_override) ( font_rid: [`RID`](class_rid.md), language: [`String`](class_string.md), supported: [`bool`](class_bool.md) ) virtual[^virtual]                                                                                                                                                      |
| `void`                                                      | [`_font_set_msdf_pixel_range`](class_textserverextension.md#class_textserverextension_private_method__font_set_msdf_pixel_range) ( font_rid: [`RID`](class_rid.md), msdf_pixel_range: [`int`](class_int.md) ) virtual[^virtual]                                                                                                                                                                                                          |
| `void`                                                      | [`_font_set_msdf_size`](class_textserverextension.md#class_textserverextension_private_method__font_set_msdf_size) ( font_rid: [`RID`](class_rid.md), msdf_size: [`int`](class_int.md) ) virtual[^virtual]                                                                                                                                                                                                                               |
| `void`                                                      | [`_font_set_multichannel_signed_distance_field`](class_textserverextension.md#class_textserverextension_private_method__font_set_multichannel_signed_distance_field) ( font_rid: [`RID`](class_rid.md), msdf: [`bool`](class_bool.md) ) virtual[^virtual]                                                                                                                                                                                |
| `void`                                                      | [`_font_set_name`](class_textserverextension.md#class_textserverextension_private_method__font_set_name) ( font_rid: [`RID`](class_rid.md), name: [`String`](class_string.md) ) virtual[^virtual]                                                                                                                                                                                                                                        |
| `void`                                                      | [`_font_set_opentype_feature_overrides`](class_textserverextension.md#class_textserverextension_private_method__font_set_opentype_feature_overrides) ( font_rid: [`RID`](class_rid.md), overrides: [`Dictionary`](class_dictionary.md) ) virtual[^virtual]                                                                                                                                                                               |
| `void`                                                      | [`_font_set_oversampling`](class_textserverextension.md#class_textserverextension_private_method__font_set_oversampling) ( font_rid: [`RID`](class_rid.md), oversampling: [`float`](class_float.md) ) virtual[^virtual]                                                                                                                                                                                                                  |
| `void`                                                      | [`_font_set_scale`](class_textserverextension.md#class_textserverextension_private_method__font_set_scale) ( font_rid: [`RID`](class_rid.md), size: [`int`](class_int.md), scale: [`float`](class_float.md) ) virtual[^virtual]                                                                                                                                                                                                          |
| `void`                                                      | [`_font_set_script_support_override`](class_textserverextension.md#class_textserverextension_private_method__font_set_script_support_override) ( font_rid: [`RID`](class_rid.md), script: [`String`](class_string.md), supported: [`bool`](class_bool.md) ) virtual[^virtual]                                                                                                                                                            |
| `void`                                                      | [`_font_set_spacing`](class_textserverextension.md#class_textserverextension_private_method__font_set_spacing) ( font_rid: [`RID`](class_rid.md), spacing: [SpacingType](#enum_textserver_spacingtype), value: [`int`](class_int.md) ) virtual[^virtual]                                                                                                                                                                                 |
| `void`                                                      | [`_font_set_stretch`](class_textserverextension.md#class_textserverextension_private_method__font_set_stretch) ( font_rid: [`RID`](class_rid.md), stretch: [`int`](class_int.md) ) virtual[^virtual]                                                                                                                                                                                                                                     |
| `void`                                                      | [`_font_set_style`](class_textserverextension.md#class_textserverextension_private_method__font_set_style) ( font_rid: [`RID`](class_rid.md), style: [FontStyle](#enum_textserver_fontstyle) ) virtual[^virtual]                                                                                                                                                                                                                         |
| `void`                                                      | [`_font_set_style_name`](class_textserverextension.md#class_textserverextension_private_method__font_set_style_name) ( font_rid: [`RID`](class_rid.md), name_style: [`String`](class_string.md) ) virtual[^virtual]                                                                                                                                                                                                                      |
| `void`                                                      | [`_font_set_subpixel_positioning`](class_textserverextension.md#class_textserverextension_private_method__font_set_subpixel_positioning) ( font_rid: [`RID`](class_rid.md), subpixel_positioning: [SubpixelPositioning](#enum_textserver_subpixelpositioning) ) virtual[^virtual]                                                                                                                                                        |
| `void`                                                      | [`_font_set_texture_image`](class_textserverextension.md#class_textserverextension_private_method__font_set_texture_image) ( font_rid: [`RID`](class_rid.md), size: [`Vector2i`](class_vector2i.md), texture_index: [`int`](class_int.md), image: [`Image`](class_image.md) ) virtual[^virtual]                                                                                                                                          |
| `void`                                                      | [`_font_set_texture_offsets`](class_textserverextension.md#class_textserverextension_private_method__font_set_texture_offsets) ( font_rid: [`RID`](class_rid.md), size: [`Vector2i`](class_vector2i.md), texture_index: [`int`](class_int.md), offset: [`PackedInt32Array`](class_packedint32array.md) ) virtual[^virtual]                                                                                                               |
| `void`                                                      | [`_font_set_transform`](class_textserverextension.md#class_textserverextension_private_method__font_set_transform) ( font_rid: [`RID`](class_rid.md), transform: [`Transform2D`](class_transform2d.md) ) virtual[^virtual]                                                                                                                                                                                                               |
| `void`                                                      | [`_font_set_underline_position`](class_textserverextension.md#class_textserverextension_private_method__font_set_underline_position) ( font_rid: [`RID`](class_rid.md), size: [`int`](class_int.md), underline_position: [`float`](class_float.md) ) virtual[^virtual]                                                                                                                                                                   |
| `void`                                                      | [`_font_set_underline_thickness`](class_textserverextension.md#class_textserverextension_private_method__font_set_underline_thickness) ( font_rid: [`RID`](class_rid.md), size: [`int`](class_int.md), underline_thickness: [`float`](class_float.md) ) virtual[^virtual]                                                                                                                                                                |
| `void`                                                      | [`_font_set_variation_coordinates`](class_textserverextension.md#class_textserverextension_private_method__font_set_variation_coordinates) ( font_rid: [`RID`](class_rid.md), variation_coordinates: [`Dictionary`](class_dictionary.md) ) virtual[^virtual]                                                                                                                                                                             |
| `void`                                                      | [`_font_set_weight`](class_textserverextension.md#class_textserverextension_private_method__font_set_weight) ( font_rid: [`RID`](class_rid.md), weight: [`int`](class_int.md) ) virtual[^virtual]                                                                                                                                                                                                                                        |
| [`Dictionary`](class_dictionary.md)                         | [`_font_supported_feature_list`](class_textserverextension.md#class_textserverextension_private_method__font_supported_feature_list) ( font_rid: [`RID`](class_rid.md) ) virtual[^virtual] const[^const]                                                                                                                                                                                                                                 |
| [`Dictionary`](class_dictionary.md)                         | [`_font_supported_variation_list`](class_textserverextension.md#class_textserverextension_private_method__font_supported_variation_list) ( font_rid: [`RID`](class_rid.md) ) virtual[^virtual] const[^const]                                                                                                                                                                                                                             |
| [`String`](class_string.md)                                 | [`_format_number`](class_textserverextension.md#class_textserverextension_private_method__format_number) ( number: [`String`](class_string.md), language: [`String`](class_string.md) ) virtual[^virtual] const[^const]                                                                                                                                                                                                                  |
| `void`                                                      | [`_free_rid`](class_textserverextension.md#class_textserverextension_private_method__free_rid) ( rid: [`RID`](class_rid.md) ) virtual[^virtual]                                                                                                                                                                                                                                                                                          |
| [`int`](class_int.md)                                       | [`_get_features`](class_textserverextension.md#class_textserverextension_private_method__get_features) ( ) virtual[^virtual] const[^const]                                                                                                                                                                                                                                                                                               |
| [`Vector2`](class_vector2.md)                               | [`_get_hex_code_box_size`](class_textserverextension.md#class_textserverextension_private_method__get_hex_code_box_size) ( size: [`int`](class_int.md), index: [`int`](class_int.md) ) virtual[^virtual] const[^const]                                                                                                                                                                                                                   |
| [`String`](class_string.md)                                 | [`_get_name`](class_textserverextension.md#class_textserverextension_private_method__get_name) ( ) virtual[^virtual] const[^const]                                                                                                                                                                                                                                                                                                       |
| [`String`](class_string.md)                                 | [`_get_support_data_filename`](class_textserverextension.md#class_textserverextension_private_method__get_support_data_filename) ( ) virtual[^virtual] const[^const]                                                                                                                                                                                                                                                                     |
| [`String`](class_string.md)                                 | [`_get_support_data_info`](class_textserverextension.md#class_textserverextension_private_method__get_support_data_info) ( ) virtual[^virtual] const[^const]                                                                                                                                                                                                                                                                             |
| [`bool`](class_bool.md)                                     | [`_has`](class_textserverextension.md#class_textserverextension_private_method__has) ( rid: [`RID`](class_rid.md) ) virtual[^virtual]                                                                                                                                                                                                                                                                                                    |
| [`bool`](class_bool.md)                                     | [`_has_feature`](class_textserverextension.md#class_textserverextension_private_method__has_feature) ( feature: [Feature](#enum_textserver_feature) ) virtual[^virtual] const[^const]                                                                                                                                                                                                                                                    |
| [`int`](class_int.md)                                       | [`_is_confusable`](class_textserverextension.md#class_textserverextension_private_method__is_confusable) ( string: [`String`](class_string.md), dict: [`PackedStringArray`](class_packedstringarray.md) ) virtual[^virtual] const[^const]                                                                                                                                                                                                |
| [`bool`](class_bool.md)                                     | [`_is_locale_right_to_left`](class_textserverextension.md#class_textserverextension_private_method__is_locale_right_to_left) ( locale: [`String`](class_string.md) ) virtual[^virtual] const[^const]                                                                                                                                                                                                                                     |
| [`bool`](class_bool.md)                                     | [`_is_valid_identifier`](class_textserverextension.md#class_textserverextension_private_method__is_valid_identifier) ( string: [`String`](class_string.md) ) virtual[^virtual] const[^const]                                                                                                                                                                                                                                             |
| [`bool`](class_bool.md)                                     | [`_is_valid_letter`](class_textserverextension.md#class_textserverextension_private_method__is_valid_letter) ( unicode: [`int`](class_int.md) ) virtual[^virtual] const[^const]                                                                                                                                                                                                                                                          |
| [`bool`](class_bool.md)                                     | [`_load_support_data`](class_textserverextension.md#class_textserverextension_private_method__load_support_data) ( filename: [`String`](class_string.md) ) virtual[^virtual]                                                                                                                                                                                                                                                             |
| [`int`](class_int.md)                                       | [`_name_to_tag`](class_textserverextension.md#class_textserverextension_private_method__name_to_tag) ( name: [`String`](class_string.md) ) virtual[^virtual] const[^const]                                                                                                                                                                                                                                                               |
| [`String`](class_string.md)                                 | [`_parse_number`](class_textserverextension.md#class_textserverextension_private_method__parse_number) ( number: [`String`](class_string.md), language: [`String`](class_string.md) ) virtual[^virtual] const[^const]                                                                                                                                                                                                                    |
| [Array](class_array.md) [`Vector3i`](class_vector3i.md)     | [`_parse_structured_text`](class_textserverextension.md#class_textserverextension_private_method__parse_structured_text) ( parser_type: [StructuredTextParser](#enum_textserver_structuredtextparser), args: [`Array`](class_array.md), text: [`String`](class_string.md) ) virtual[^virtual] const[^const]                                                                                                                              |
| [`String`](class_string.md)                                 | [`_percent_sign`](class_textserverextension.md#class_textserverextension_private_method__percent_sign) ( language: [`String`](class_string.md) ) virtual[^virtual] const[^const]                                                                                                                                                                                                                                                         |
| [`bool`](class_bool.md)                                     | [`_save_support_data`](class_textserverextension.md#class_textserverextension_private_method__save_support_data) ( filename: [`String`](class_string.md) ) virtual[^virtual] const[^const]                                                                                                                                                                                                                                               |
| [`int`](class_int.md)                                       | [`_shaped_get_span_count`](class_textserverextension.md#class_textserverextension_private_method__shaped_get_span_count) ( shaped: [`RID`](class_rid.md) ) virtual[^virtual] const[^const]                                                                                                                                                                                                                                               |
| [`Variant`](class_variant.md)                               | [`_shaped_get_span_meta`](class_textserverextension.md#class_textserverextension_private_method__shaped_get_span_meta) ( shaped: [`RID`](class_rid.md), index: [`int`](class_int.md) ) virtual[^virtual] const[^const]                                                                                                                                                                                                                   |
| `void`                                                      | [`_shaped_set_span_update_font`](class_textserverextension.md#class_textserverextension_private_method__shaped_set_span_update_font) ( shaped: [`RID`](class_rid.md), index: [`int`](class_int.md), fonts: [Array](class_array.md) [`RID`](class_rid.md), size: [`int`](class_int.md), opentype_features: [`Dictionary`](class_dictionary.md) ) virtual[^virtual]                                                                        |
| [`bool`](class_bool.md)                                     | [`_shaped_text_add_object`](class_textserverextension.md#class_textserverextension_private_method__shaped_text_add_object) ( shaped: [`RID`](class_rid.md), key: [`Variant`](class_variant.md), size: [`Vector2`](class_vector2.md), inline_align: [InlineAlignment](#enum_@globalscope_inlinealignment), length: [`int`](class_int.md), baseline: [`float`](class_float.md) ) virtual[^virtual]                                         |
| [`bool`](class_bool.md)                                     | [`_shaped_text_add_string`](class_textserverextension.md#class_textserverextension_private_method__shaped_text_add_string) ( shaped: [`RID`](class_rid.md), text: [`String`](class_string.md), fonts: [Array](class_array.md) [`RID`](class_rid.md), size: [`int`](class_int.md), opentype_features: [`Dictionary`](class_dictionary.md), language: [`String`](class_string.md), meta: [`Variant`](class_variant.md) ) virtual[^virtual] |
| `void`                                                      | [`_shaped_text_clear`](class_textserverextension.md#class_textserverextension_private_method__shaped_text_clear) ( shaped: [`RID`](class_rid.md) ) virtual[^virtual]                                                                                                                                                                                                                                                                     |
| [`int`](class_int.md)                                       | [`_shaped_text_closest_character_pos`](class_textserverextension.md#class_textserverextension_private_method__shaped_text_closest_character_pos) ( shaped: [`RID`](class_rid.md), pos: [`int`](class_int.md) ) virtual[^virtual] const[^const]                                                                                                                                                                                           |
| `void`                                                      | [`_shaped_text_draw`](class_textserverextension.md#class_textserverextension_private_method__shaped_text_draw) ( shaped: [`RID`](class_rid.md), canvas: [`RID`](class_rid.md), pos: [`Vector2`](class_vector2.md), clip_l: [`float`](class_float.md), clip_r: [`float`](class_float.md), color: [`Color`](class_color.md) ) virtual[^virtual] const[^const]                                                                              |
| `void`                                                      | [`_shaped_text_draw_outline`](class_textserverextension.md#class_textserverextension_private_method__shaped_text_draw_outline) ( shaped: [`RID`](class_rid.md), canvas: [`RID`](class_rid.md), pos: [`Vector2`](class_vector2.md), clip_l: [`float`](class_float.md), clip_r: [`float`](class_float.md), outline_size: [`int`](class_int.md), color: [`Color`](class_color.md) ) virtual[^virtual] const[^const]                         |
| [`float`](class_float.md)                                   | [`_shaped_text_fit_to_width`](class_textserverextension.md#class_textserverextension_private_method__shaped_text_fit_to_width) ( shaped: [`RID`](class_rid.md), width: [`float`](class_float.md), justification_flags: [JustificationFlag](#enum_textserver_justificationflag) ) virtual[^virtual]                                                                                                                                       |
| [`float`](class_float.md)                                   | [`_shaped_text_get_ascent`](class_textserverextension.md#class_textserverextension_private_method__shaped_text_get_ascent) ( shaped: [`RID`](class_rid.md) ) virtual[^virtual] const[^const]                                                                                                                                                                                                                                             |
| `void`                                                      | [`_shaped_text_get_carets`](class_textserverextension.md#class_textserverextension_private_method__shaped_text_get_carets) ( shaped: [`RID`](class_rid.md), position: [`int`](class_int.md), caret: `CaretInfo*` ) virtual[^virtual] const[^const]                                                                                                                                                                                       |
| [`PackedInt32Array`](class_packedint32array.md)             | [`_shaped_text_get_character_breaks`](class_textserverextension.md#class_textserverextension_private_method__shaped_text_get_character_breaks) ( shaped: [`RID`](class_rid.md) ) virtual[^virtual] const[^const]                                                                                                                                                                                                                         |
| [`int`](class_int.md)                                       | [`_shaped_text_get_custom_ellipsis`](class_textserverextension.md#class_textserverextension_private_method__shaped_text_get_custom_ellipsis) ( shaped: [`RID`](class_rid.md) ) virtual[^virtual] const[^const]                                                                                                                                                                                                                           |
| [`String`](class_string.md)                                 | [`_shaped_text_get_custom_punctuation`](class_textserverextension.md#class_textserverextension_private_method__shaped_text_get_custom_punctuation) ( shaped: [`RID`](class_rid.md) ) virtual[^virtual] const[^const]                                                                                                                                                                                                                     |
| [`float`](class_float.md)                                   | [`_shaped_text_get_descent`](class_textserverextension.md#class_textserverextension_private_method__shaped_text_get_descent) ( shaped: [`RID`](class_rid.md) ) virtual[^virtual] const[^const]                                                                                                                                                                                                                                           |
| [Direction](#enum_textserver_direction)                     | [`_shaped_text_get_direction`](class_textserverextension.md#class_textserverextension_private_method__shaped_text_get_direction) ( shaped: [`RID`](class_rid.md) ) virtual[^virtual] const[^const]                                                                                                                                                                                                                                       |
| [`int`](class_int.md)                                       | [`_shaped_text_get_dominant_direction_in_range`](class_textserverextension.md#class_textserverextension_private_method__shaped_text_get_dominant_direction_in_range) ( shaped: [`RID`](class_rid.md), start: [`int`](class_int.md), end: [`int`](class_int.md) ) virtual[^virtual] const[^const]                                                                                                                                         |
| [`int`](class_int.md)                                       | [`_shaped_text_get_ellipsis_glyph_count`](class_textserverextension.md#class_textserverextension_private_method__shaped_text_get_ellipsis_glyph_count) ( shaped: [`RID`](class_rid.md) ) virtual[^virtual] const[^const]                                                                                                                                                                                                                 |
| `const Glyph*`                                              | [`_shaped_text_get_ellipsis_glyphs`](class_textserverextension.md#class_textserverextension_private_method__shaped_text_get_ellipsis_glyphs) ( shaped: [`RID`](class_rid.md) ) virtual[^virtual] const[^const]                                                                                                                                                                                                                           |
| [`int`](class_int.md)                                       | [`_shaped_text_get_ellipsis_pos`](class_textserverextension.md#class_textserverextension_private_method__shaped_text_get_ellipsis_pos) ( shaped: [`RID`](class_rid.md) ) virtual[^virtual] const[^const]                                                                                                                                                                                                                                 |
| [`int`](class_int.md)                                       | [`_shaped_text_get_glyph_count`](class_textserverextension.md#class_textserverextension_private_method__shaped_text_get_glyph_count) ( shaped: [`RID`](class_rid.md) ) virtual[^virtual] const[^const]                                                                                                                                                                                                                                   |
| `const Glyph*`                                              | [`_shaped_text_get_glyphs`](class_textserverextension.md#class_textserverextension_private_method__shaped_text_get_glyphs) ( shaped: [`RID`](class_rid.md) ) virtual[^virtual] const[^const]                                                                                                                                                                                                                                             |
| [`Vector2`](class_vector2.md)                               | [`_shaped_text_get_grapheme_bounds`](class_textserverextension.md#class_textserverextension_private_method__shaped_text_get_grapheme_bounds) ( shaped: [`RID`](class_rid.md), pos: [`int`](class_int.md) ) virtual[^virtual] const[^const]                                                                                                                                                                                               |
| [Direction](#enum_textserver_direction)                     | [`_shaped_text_get_inferred_direction`](class_textserverextension.md#class_textserverextension_private_method__shaped_text_get_inferred_direction) ( shaped: [`RID`](class_rid.md) ) virtual[^virtual] const[^const]                                                                                                                                                                                                                     |
| [`PackedInt32Array`](class_packedint32array.md)             | [`_shaped_text_get_line_breaks`](class_textserverextension.md#class_textserverextension_private_method__shaped_text_get_line_breaks) ( shaped: [`RID`](class_rid.md), width: [`float`](class_float.md), start: [`int`](class_int.md), break_flags: [LineBreakFlag](#enum_textserver_linebreakflag) ) virtual[^virtual] const[^const]                                                                                                     |
| [`PackedInt32Array`](class_packedint32array.md)             | [`_shaped_text_get_line_breaks_adv`](class_textserverextension.md#class_textserverextension_private_method__shaped_text_get_line_breaks_adv) ( shaped: [`RID`](class_rid.md), width: [`PackedFloat32Array`](class_packedfloat32array.md), start: [`int`](class_int.md), once: [`bool`](class_bool.md), break_flags: [LineBreakFlag](#enum_textserver_linebreakflag) ) virtual[^virtual] const[^const]                                    |
| [`int`](class_int.md)                                       | [`_shaped_text_get_object_glyph`](class_textserverextension.md#class_textserverextension_private_method__shaped_text_get_object_glyph) ( shaped: [`RID`](class_rid.md), key: [`Variant`](class_variant.md) ) virtual[^virtual] const[^const]                                                                                                                                                                                             |
| [`Vector2i`](class_vector2i.md)                             | [`_shaped_text_get_object_range`](class_textserverextension.md#class_textserverextension_private_method__shaped_text_get_object_range) ( shaped: [`RID`](class_rid.md), key: [`Variant`](class_variant.md) ) virtual[^virtual] const[^const]                                                                                                                                                                                             |
| [`Rect2`](class_rect2.md)                                   | [`_shaped_text_get_object_rect`](class_textserverextension.md#class_textserverextension_private_method__shaped_text_get_object_rect) ( shaped: [`RID`](class_rid.md), key: [`Variant`](class_variant.md) ) virtual[^virtual] const[^const]                                                                                                                                                                                               |
| [`Array`](class_array.md)                                   | [`_shaped_text_get_objects`](class_textserverextension.md#class_textserverextension_private_method__shaped_text_get_objects) ( shaped: [`RID`](class_rid.md) ) virtual[^virtual] const[^const]                                                                                                                                                                                                                                           |
| [Orientation](#enum_textserver_orientation)                 | [`_shaped_text_get_orientation`](class_textserverextension.md#class_textserverextension_private_method__shaped_text_get_orientation) ( shaped: [`RID`](class_rid.md) ) virtual[^virtual] const[^const]                                                                                                                                                                                                                                   |
| [`RID`](class_rid.md)                                       | [`_shaped_text_get_parent`](class_textserverextension.md#class_textserverextension_private_method__shaped_text_get_parent) ( shaped: [`RID`](class_rid.md) ) virtual[^virtual] const[^const]                                                                                                                                                                                                                                             |
| [`bool`](class_bool.md)                                     | [`_shaped_text_get_preserve_control`](class_textserverextension.md#class_textserverextension_private_method__shaped_text_get_preserve_control) ( shaped: [`RID`](class_rid.md) ) virtual[^virtual] const[^const]                                                                                                                                                                                                                         |
| [`bool`](class_bool.md)                                     | [`_shaped_text_get_preserve_invalid`](class_textserverextension.md#class_textserverextension_private_method__shaped_text_get_preserve_invalid) ( shaped: [`RID`](class_rid.md) ) virtual[^virtual] const[^const]                                                                                                                                                                                                                         |
| [`Vector2i`](class_vector2i.md)                             | [`_shaped_text_get_range`](class_textserverextension.md#class_textserverextension_private_method__shaped_text_get_range) ( shaped: [`RID`](class_rid.md) ) virtual[^virtual] const[^const]                                                                                                                                                                                                                                               |
| [`PackedVector2Array`](class_packedvector2array.md)         | [`_shaped_text_get_selection`](class_textserverextension.md#class_textserverextension_private_method__shaped_text_get_selection) ( shaped: [`RID`](class_rid.md), start: [`int`](class_int.md), end: [`int`](class_int.md) ) virtual[^virtual] const[^const]                                                                                                                                                                             |
| [`Vector2`](class_vector2.md)                               | [`_shaped_text_get_size`](class_textserverextension.md#class_textserverextension_private_method__shaped_text_get_size) ( shaped: [`RID`](class_rid.md) ) virtual[^virtual] const[^const]                                                                                                                                                                                                                                                 |
| [`int`](class_int.md)                                       | [`_shaped_text_get_spacing`](class_textserverextension.md#class_textserverextension_private_method__shaped_text_get_spacing) ( shaped: [`RID`](class_rid.md), spacing: [SpacingType](#enum_textserver_spacingtype) ) virtual[^virtual] const[^const]                                                                                                                                                                                     |
| [`int`](class_int.md)                                       | [`_shaped_text_get_trim_pos`](class_textserverextension.md#class_textserverextension_private_method__shaped_text_get_trim_pos) ( shaped: [`RID`](class_rid.md) ) virtual[^virtual] const[^const]                                                                                                                                                                                                                                         |
| [`float`](class_float.md)                                   | [`_shaped_text_get_underline_position`](class_textserverextension.md#class_textserverextension_private_method__shaped_text_get_underline_position) ( shaped: [`RID`](class_rid.md) ) virtual[^virtual] const[^const]                                                                                                                                                                                                                     |
| [`float`](class_float.md)                                   | [`_shaped_text_get_underline_thickness`](class_textserverextension.md#class_textserverextension_private_method__shaped_text_get_underline_thickness) ( shaped: [`RID`](class_rid.md) ) virtual[^virtual] const[^const]                                                                                                                                                                                                                   |
| [`float`](class_float.md)                                   | [`_shaped_text_get_width`](class_textserverextension.md#class_textserverextension_private_method__shaped_text_get_width) ( shaped: [`RID`](class_rid.md) ) virtual[^virtual] const[^const]                                                                                                                                                                                                                                               |
| [`PackedInt32Array`](class_packedint32array.md)             | [`_shaped_text_get_word_breaks`](class_textserverextension.md#class_textserverextension_private_method__shaped_text_get_word_breaks) ( shaped: [`RID`](class_rid.md), grapheme_flags: [GraphemeFlag](#enum_textserver_graphemeflag), skip_grapheme_flags: [GraphemeFlag](#enum_textserver_graphemeflag) ) virtual[^virtual] const[^const]                                                                                                |
| [`int`](class_int.md)                                       | [`_shaped_text_hit_test_grapheme`](class_textserverextension.md#class_textserverextension_private_method__shaped_text_hit_test_grapheme) ( shaped: [`RID`](class_rid.md), coord: [`float`](class_float.md) ) virtual[^virtual] const[^const]                                                                                                                                                                                             |
| [`int`](class_int.md)                                       | [`_shaped_text_hit_test_position`](class_textserverextension.md#class_textserverextension_private_method__shaped_text_hit_test_position) ( shaped: [`RID`](class_rid.md), coord: [`float`](class_float.md) ) virtual[^virtual] const[^const]                                                                                                                                                                                             |
| [`bool`](class_bool.md)                                     | [`_shaped_text_is_ready`](class_textserverextension.md#class_textserverextension_private_method__shaped_text_is_ready) ( shaped: [`RID`](class_rid.md) ) virtual[^virtual] const[^const]                                                                                                                                                                                                                                                 |
| [`int`](class_int.md)                                       | [`_shaped_text_next_character_pos`](class_textserverextension.md#class_textserverextension_private_method__shaped_text_next_character_pos) ( shaped: [`RID`](class_rid.md), pos: [`int`](class_int.md) ) virtual[^virtual] const[^const]                                                                                                                                                                                                 |
| [`int`](class_int.md)                                       | [`_shaped_text_next_grapheme_pos`](class_textserverextension.md#class_textserverextension_private_method__shaped_text_next_grapheme_pos) ( shaped: [`RID`](class_rid.md), pos: [`int`](class_int.md) ) virtual[^virtual] const[^const]                                                                                                                                                                                                   |
| `void`                                                      | [`_shaped_text_overrun_trim_to_width`](class_textserverextension.md#class_textserverextension_private_method__shaped_text_overrun_trim_to_width) ( shaped: [`RID`](class_rid.md), width: [`float`](class_float.md), trim_flags: [TextOverrunFlag](#enum_textserver_textoverrunflag) ) virtual[^virtual]                                                                                                                                  |
| [`int`](class_int.md)                                       | [`_shaped_text_prev_character_pos`](class_textserverextension.md#class_textserverextension_private_method__shaped_text_prev_character_pos) ( shaped: [`RID`](class_rid.md), pos: [`int`](class_int.md) ) virtual[^virtual] const[^const]                                                                                                                                                                                                 |
| [`int`](class_int.md)                                       | [`_shaped_text_prev_grapheme_pos`](class_textserverextension.md#class_textserverextension_private_method__shaped_text_prev_grapheme_pos) ( shaped: [`RID`](class_rid.md), pos: [`int`](class_int.md) ) virtual[^virtual] const[^const]                                                                                                                                                                                                   |
| [`bool`](class_bool.md)                                     | [`_shaped_text_resize_object`](class_textserverextension.md#class_textserverextension_private_method__shaped_text_resize_object) ( shaped: [`RID`](class_rid.md), key: [`Variant`](class_variant.md), size: [`Vector2`](class_vector2.md), inline_align: [InlineAlignment](#enum_@globalscope_inlinealignment), baseline: [`float`](class_float.md) ) virtual[^virtual]                                                                  |
| `void`                                                      | [`_shaped_text_set_bidi_override`](class_textserverextension.md#class_textserverextension_private_method__shaped_text_set_bidi_override) ( shaped: [`RID`](class_rid.md), override: [`Array`](class_array.md) ) virtual[^virtual]                                                                                                                                                                                                        |
| `void`                                                      | [`_shaped_text_set_custom_ellipsis`](class_textserverextension.md#class_textserverextension_private_method__shaped_text_set_custom_ellipsis) ( shaped: [`RID`](class_rid.md), char: [`int`](class_int.md) ) virtual[^virtual]                                                                                                                                                                                                            |
| `void`                                                      | [`_shaped_text_set_custom_punctuation`](class_textserverextension.md#class_textserverextension_private_method__shaped_text_set_custom_punctuation) ( shaped: [`RID`](class_rid.md), punct: [`String`](class_string.md) ) virtual[^virtual]                                                                                                                                                                                               |
| `void`                                                      | [`_shaped_text_set_direction`](class_textserverextension.md#class_textserverextension_private_method__shaped_text_set_direction) ( shaped: [`RID`](class_rid.md), direction: [Direction](#enum_textserver_direction) ) virtual[^virtual]                                                                                                                                                                                                 |
| `void`                                                      | [`_shaped_text_set_orientation`](class_textserverextension.md#class_textserverextension_private_method__shaped_text_set_orientation) ( shaped: [`RID`](class_rid.md), orientation: [Orientation](#enum_textserver_orientation) ) virtual[^virtual]                                                                                                                                                                                       |
| `void`                                                      | [`_shaped_text_set_preserve_control`](class_textserverextension.md#class_textserverextension_private_method__shaped_text_set_preserve_control) ( shaped: [`RID`](class_rid.md), enabled: [`bool`](class_bool.md) ) virtual[^virtual]                                                                                                                                                                                                     |
| `void`                                                      | [`_shaped_text_set_preserve_invalid`](class_textserverextension.md#class_textserverextension_private_method__shaped_text_set_preserve_invalid) ( shaped: [`RID`](class_rid.md), enabled: [`bool`](class_bool.md) ) virtual[^virtual]                                                                                                                                                                                                     |
| `void`                                                      | [`_shaped_text_set_spacing`](class_textserverextension.md#class_textserverextension_private_method__shaped_text_set_spacing) ( shaped: [`RID`](class_rid.md), spacing: [SpacingType](#enum_textserver_spacingtype), value: [`int`](class_int.md) ) virtual[^virtual]                                                                                                                                                                     |
| [`bool`](class_bool.md)                                     | [`_shaped_text_shape`](class_textserverextension.md#class_textserverextension_private_method__shaped_text_shape) ( shaped: [`RID`](class_rid.md) ) virtual[^virtual]                                                                                                                                                                                                                                                                     |
| `const Glyph*`                                              | [`_shaped_text_sort_logical`](class_textserverextension.md#class_textserverextension_private_method__shaped_text_sort_logical) ( shaped: [`RID`](class_rid.md) ) virtual[^virtual]                                                                                                                                                                                                                                                       |
| [`RID`](class_rid.md)                                       | [`_shaped_text_substr`](class_textserverextension.md#class_textserverextension_private_method__shaped_text_substr) ( shaped: [`RID`](class_rid.md), start: [`int`](class_int.md), length: [`int`](class_int.md) ) virtual[^virtual] const[^const]                                                                                                                                                                                        |
| [`float`](class_float.md)                                   | [`_shaped_text_tab_align`](class_textserverextension.md#class_textserverextension_private_method__shaped_text_tab_align) ( shaped: [`RID`](class_rid.md), tab_stops: [`PackedFloat32Array`](class_packedfloat32array.md) ) virtual[^virtual]                                                                                                                                                                                             |
| [`bool`](class_bool.md)                                     | [`_shaped_text_update_breaks`](class_textserverextension.md#class_textserverextension_private_method__shaped_text_update_breaks) ( shaped: [`RID`](class_rid.md) ) virtual[^virtual]                                                                                                                                                                                                                                                     |
| [`bool`](class_bool.md)                                     | [`_shaped_text_update_justification_ops`](class_textserverextension.md#class_textserverextension_private_method__shaped_text_update_justification_ops) ( shaped: [`RID`](class_rid.md) ) virtual[^virtual]                                                                                                                                                                                                                               |
| [`bool`](class_bool.md)                                     | [`_spoof_check`](class_textserverextension.md#class_textserverextension_private_method__spoof_check) ( string: [`String`](class_string.md) ) virtual[^virtual] const[^const]                                                                                                                                                                                                                                                             |
| [`PackedInt32Array`](class_packedint32array.md)             | [`_string_get_character_breaks`](class_textserverextension.md#class_textserverextension_private_method__string_get_character_breaks) ( string: [`String`](class_string.md), language: [`String`](class_string.md) ) virtual[^virtual] const[^const]                                                                                                                                                                                      |
| [`PackedInt32Array`](class_packedint32array.md)             | [`_string_get_word_breaks`](class_textserverextension.md#class_textserverextension_private_method__string_get_word_breaks) ( string: [`String`](class_string.md), language: [`String`](class_string.md), chars_per_line: [`int`](class_int.md) ) virtual[^virtual] const[^const]                                                                                                                                                         |
| [`String`](class_string.md)                                 | [`_string_to_lower`](class_textserverextension.md#class_textserverextension_private_method__string_to_lower) ( string: [`String`](class_string.md), language: [`String`](class_string.md) ) virtual[^virtual] const[^const]                                                                                                                                                                                                              |
| [`String`](class_string.md)                                 | [`_string_to_title`](class_textserverextension.md#class_textserverextension_private_method__string_to_title) ( string: [`String`](class_string.md), language: [`String`](class_string.md) ) virtual[^virtual] const[^const]                                                                                                                                                                                                              |
| [`String`](class_string.md)                                 | [`_string_to_upper`](class_textserverextension.md#class_textserverextension_private_method__string_to_upper) ( string: [`String`](class_string.md), language: [`String`](class_string.md) ) virtual[^virtual] const[^const]                                                                                                                                                                                                              |
| [`String`](class_string.md)                                 | [`_strip_diacritics`](class_textserverextension.md#class_textserverextension_private_method__strip_diacritics) ( string: [`String`](class_string.md) ) virtual[^virtual] const[^const]                                                                                                                                                                                                                                                   |
| [`String`](class_string.md)                                 | [`_tag_to_name`](class_textserverextension.md#class_textserverextension_private_method__tag_to_name) ( tag: [`int`](class_int.md) ) virtual[^virtual] const[^const]                                                                                                                                                                                                                                                                      |

<!-- rst-class:: classref-section-separator -->

---

## 方法说明

<div id="_class_textserverextension_private_method__cleanup"></div>

`void` **_cleanup** ( ) virtual[^virtual]<div id="class_textserverextension_private_method__cleanup"></div>

**Optional.** 

This method is called before text server is unregistered.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_textserverextension_private_method__create_font"></div>

[`RID`](class_rid.md) **_create_font** ( ) virtual[^virtual]<div id="class_textserverextension_private_method__create_font"></div>

**Required.** 

Creates a new, empty font cache entry resource.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_textserverextension_private_method__create_font_linked_variation"></div>

[`RID`](class_rid.md) **_create_font_linked_variation** ( font_rid: [`RID`](class_rid.md) ) virtual[^virtual]<div id="class_textserverextension_private_method__create_font_linked_variation"></div>

Optional, implement if font supports extra spacing or baseline offset.

Creates a new variation existing font which is reusing the same glyph cache and font data.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_textserverextension_private_method__create_shaped_text"></div>

[`RID`](class_rid.md) **_create_shaped_text** ( direction: [Direction](#enum_textserver_direction), orientation: [Orientation](#enum_textserver_orientation) ) virtual[^virtual]<div id="class_textserverextension_private_method__create_shaped_text"></div>

**Required.** 

Creates a new buffer for complex text layout, with the given `direction` and `orientation`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_textserverextension_private_method__draw_hex_code_box"></div>

`void` **_draw_hex_code_box** ( canvas: [`RID`](class_rid.md), size: [`int`](class_int.md), pos: [`Vector2`](class_vector2.md), index: [`int`](class_int.md), color: [`Color`](class_color.md) ) virtual[^virtual] const[^const]<div id="class_textserverextension_private_method__draw_hex_code_box"></div>

**Optional.** 

Draws box displaying character hexadecimal code.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_textserverextension_private_method__font_clear_glyphs"></div>

`void` **_font_clear_glyphs** ( font_rid: [`RID`](class_rid.md), size: [`Vector2i`](class_vector2i.md) ) virtual[^virtual]<div id="class_textserverextension_private_method__font_clear_glyphs"></div>

**Required.** 

Removes all rendered glyph information from the cache entry.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_textserverextension_private_method__font_clear_kerning_map"></div>

`void` **_font_clear_kerning_map** ( font_rid: [`RID`](class_rid.md), size: [`int`](class_int.md) ) virtual[^virtual]<div id="class_textserverextension_private_method__font_clear_kerning_map"></div>

**Optional.** 

Removes all kerning overrides.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_textserverextension_private_method__font_clear_size_cache"></div>

`void` **_font_clear_size_cache** ( font_rid: [`RID`](class_rid.md) ) virtual[^virtual]<div id="class_textserverextension_private_method__font_clear_size_cache"></div>

**Required.** 

Removes all font sizes from the cache entry.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_textserverextension_private_method__font_clear_textures"></div>

`void` **_font_clear_textures** ( font_rid: [`RID`](class_rid.md), size: [`Vector2i`](class_vector2i.md) ) virtual[^virtual]<div id="class_textserverextension_private_method__font_clear_textures"></div>

**Required.** 

Removes all textures from font cache entry.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_textserverextension_private_method__font_draw_glyph"></div>

`void` **_font_draw_glyph** ( font_rid: [`RID`](class_rid.md), canvas: [`RID`](class_rid.md), size: [`int`](class_int.md), pos: [`Vector2`](class_vector2.md), index: [`int`](class_int.md), color: [`Color`](class_color.md) ) virtual[^virtual] const[^const]<div id="class_textserverextension_private_method__font_draw_glyph"></div>

**Required.** 

Draws single glyph into a canvas item at the position, using `font_rid` at the size `size`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_textserverextension_private_method__font_draw_glyph_outline"></div>

`void` **_font_draw_glyph_outline** ( font_rid: [`RID`](class_rid.md), canvas: [`RID`](class_rid.md), size: [`int`](class_int.md), outline_size: [`int`](class_int.md), pos: [`Vector2`](class_vector2.md), index: [`int`](class_int.md), color: [`Color`](class_color.md) ) virtual[^virtual] const[^const]<div id="class_textserverextension_private_method__font_draw_glyph_outline"></div>

**Required.** 

Draws single glyph outline of size `outline_size` into a canvas item at the position, using `font_rid` at the size `size`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_textserverextension_private_method__font_get_antialiasing"></div>

[FontAntialiasing](#enum_textserver_fontantialiasing) **_font_get_antialiasing** ( font_rid: [`RID`](class_rid.md) ) virtual[^virtual] const[^const]<div id="class_textserverextension_private_method__font_get_antialiasing"></div>

**Optional.** 

Returns font anti-aliasing mode.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_textserverextension_private_method__font_get_ascent"></div>

[`float`](class_float.md) **_font_get_ascent** ( font_rid: [`RID`](class_rid.md), size: [`int`](class_int.md) ) virtual[^virtual] const[^const]<div id="class_textserverextension_private_method__font_get_ascent"></div>

**Required.** 

Returns the font ascent (number of pixels above the baseline).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_textserverextension_private_method__font_get_baseline_offset"></div>

[`float`](class_float.md) **_font_get_baseline_offset** ( font_rid: [`RID`](class_rid.md) ) virtual[^virtual] const[^const]<div id="class_textserverextension_private_method__font_get_baseline_offset"></div>

**Optional.** 

Returns extra baseline offset (as a fraction of font height).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_textserverextension_private_method__font_get_char_from_glyph_index"></div>

[`int`](class_int.md) **_font_get_char_from_glyph_index** ( font_rid: [`RID`](class_rid.md), size: [`int`](class_int.md), glyph_index: [`int`](class_int.md) ) virtual[^virtual] const[^const]<div id="class_textserverextension_private_method__font_get_char_from_glyph_index"></div>

**Required.** 

Returns character code associated with `glyph_index`, or `0` if `glyph_index` is invalid.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_textserverextension_private_method__font_get_descent"></div>

[`float`](class_float.md) **_font_get_descent** ( font_rid: [`RID`](class_rid.md), size: [`int`](class_int.md) ) virtual[^virtual] const[^const]<div id="class_textserverextension_private_method__font_get_descent"></div>

**Required.** 

Returns the font descent (number of pixels below the baseline).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_textserverextension_private_method__font_get_disable_embedded_bitmaps"></div>

[`bool`](class_bool.md) **_font_get_disable_embedded_bitmaps** ( font_rid: [`RID`](class_rid.md) ) virtual[^virtual] const[^const]<div id="class_textserverextension_private_method__font_get_disable_embedded_bitmaps"></div>

**Optional.** 

Returns whether the font's embedded bitmap loading is disabled.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_textserverextension_private_method__font_get_embolden"></div>

[`float`](class_float.md) **_font_get_embolden** ( font_rid: [`RID`](class_rid.md) ) virtual[^virtual] const[^const]<div id="class_textserverextension_private_method__font_get_embolden"></div>

**Optional.** 

Returns font embolden strength.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_textserverextension_private_method__font_get_face_count"></div>

[`int`](class_int.md) **_font_get_face_count** ( font_rid: [`RID`](class_rid.md) ) virtual[^virtual] const[^const]<div id="class_textserverextension_private_method__font_get_face_count"></div>

**Optional.** 

Returns number of faces in the TrueType / OpenType collection.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_textserverextension_private_method__font_get_face_index"></div>

[`int`](class_int.md) **_font_get_face_index** ( font_rid: [`RID`](class_rid.md) ) virtual[^virtual] const[^const]<div id="class_textserverextension_private_method__font_get_face_index"></div>

**Optional.** 

Returns an active face index in the TrueType / OpenType collection.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_textserverextension_private_method__font_get_fixed_size"></div>

[`int`](class_int.md) **_font_get_fixed_size** ( font_rid: [`RID`](class_rid.md) ) virtual[^virtual] const[^const]<div id="class_textserverextension_private_method__font_get_fixed_size"></div>

**Required.** 

Returns bitmap font fixed size.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_textserverextension_private_method__font_get_fixed_size_scale_mode"></div>

[FixedSizeScaleMode](#enum_textserver_fixedsizescalemode) **_font_get_fixed_size_scale_mode** ( font_rid: [`RID`](class_rid.md) ) virtual[^virtual] const[^const]<div id="class_textserverextension_private_method__font_get_fixed_size_scale_mode"></div>

**Required.** 

Returns bitmap font scaling mode.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_textserverextension_private_method__font_get_generate_mipmaps"></div>

[`bool`](class_bool.md) **_font_get_generate_mipmaps** ( font_rid: [`RID`](class_rid.md) ) virtual[^virtual] const[^const]<div id="class_textserverextension_private_method__font_get_generate_mipmaps"></div>

**Optional.** 

Returns `true` if font texture mipmap generation is enabled.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_textserverextension_private_method__font_get_global_oversampling"></div>

[`float`](class_float.md) **_font_get_global_oversampling** ( ) virtual[^virtual] const[^const]<div id="class_textserverextension_private_method__font_get_global_oversampling"></div>

**Optional.** 

Returns the font oversampling factor, shared by all fonts in the TextServer.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_textserverextension_private_method__font_get_glyph_advance"></div>

[`Vector2`](class_vector2.md) **_font_get_glyph_advance** ( font_rid: [`RID`](class_rid.md), size: [`int`](class_int.md), glyph: [`int`](class_int.md) ) virtual[^virtual] const[^const]<div id="class_textserverextension_private_method__font_get_glyph_advance"></div>

**Required.** 

Returns glyph advance (offset of the next glyph).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_textserverextension_private_method__font_get_glyph_contours"></div>

[`Dictionary`](class_dictionary.md) **_font_get_glyph_contours** ( font_rid: [`RID`](class_rid.md), size: [`int`](class_int.md), index: [`int`](class_int.md) ) virtual[^virtual] const[^const]<div id="class_textserverextension_private_method__font_get_glyph_contours"></div>

**Optional.** 

Returns outline contours of the glyph.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_textserverextension_private_method__font_get_glyph_index"></div>

[`int`](class_int.md) **_font_get_glyph_index** ( font_rid: [`RID`](class_rid.md), size: [`int`](class_int.md), char: [`int`](class_int.md), variation_selector: [`int`](class_int.md) ) virtual[^virtual] const[^const]<div id="class_textserverextension_private_method__font_get_glyph_index"></div>

**Required.** 

Returns the glyph index of a `char`, optionally modified by the `variation_selector`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_textserverextension_private_method__font_get_glyph_list"></div>

[`PackedInt32Array`](class_packedint32array.md) **_font_get_glyph_list** ( font_rid: [`RID`](class_rid.md), size: [`Vector2i`](class_vector2i.md) ) virtual[^virtual] const[^const]<div id="class_textserverextension_private_method__font_get_glyph_list"></div>

**Required.** 

Returns list of rendered glyphs in the cache entry.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_textserverextension_private_method__font_get_glyph_offset"></div>

[`Vector2`](class_vector2.md) **_font_get_glyph_offset** ( font_rid: [`RID`](class_rid.md), size: [`Vector2i`](class_vector2i.md), glyph: [`int`](class_int.md) ) virtual[^virtual] const[^const]<div id="class_textserverextension_private_method__font_get_glyph_offset"></div>

**Required.** 

Returns glyph offset from the baseline.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_textserverextension_private_method__font_get_glyph_size"></div>

[`Vector2`](class_vector2.md) **_font_get_glyph_size** ( font_rid: [`RID`](class_rid.md), size: [`Vector2i`](class_vector2i.md), glyph: [`int`](class_int.md) ) virtual[^virtual] const[^const]<div id="class_textserverextension_private_method__font_get_glyph_size"></div>

**Required.** 

Returns size of the glyph.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_textserverextension_private_method__font_get_glyph_texture_idx"></div>

[`int`](class_int.md) **_font_get_glyph_texture_idx** ( font_rid: [`RID`](class_rid.md), size: [`Vector2i`](class_vector2i.md), glyph: [`int`](class_int.md) ) virtual[^virtual] const[^const]<div id="class_textserverextension_private_method__font_get_glyph_texture_idx"></div>

**Required.** 

Returns index of the cache texture containing the glyph.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_textserverextension_private_method__font_get_glyph_texture_rid"></div>

[`RID`](class_rid.md) **_font_get_glyph_texture_rid** ( font_rid: [`RID`](class_rid.md), size: [`Vector2i`](class_vector2i.md), glyph: [`int`](class_int.md) ) virtual[^virtual] const[^const]<div id="class_textserverextension_private_method__font_get_glyph_texture_rid"></div>

**Required.** 

Returns resource ID of the cache texture containing the glyph.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_textserverextension_private_method__font_get_glyph_texture_size"></div>

[`Vector2`](class_vector2.md) **_font_get_glyph_texture_size** ( font_rid: [`RID`](class_rid.md), size: [`Vector2i`](class_vector2i.md), glyph: [`int`](class_int.md) ) virtual[^virtual] const[^const]<div id="class_textserverextension_private_method__font_get_glyph_texture_size"></div>

**Required.** 

Returns size of the cache texture containing the glyph.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_textserverextension_private_method__font_get_glyph_uv_rect"></div>

[`Rect2`](class_rect2.md) **_font_get_glyph_uv_rect** ( font_rid: [`RID`](class_rid.md), size: [`Vector2i`](class_vector2i.md), glyph: [`int`](class_int.md) ) virtual[^virtual] const[^const]<div id="class_textserverextension_private_method__font_get_glyph_uv_rect"></div>

**Required.** 

Returns rectangle in the cache texture containing the glyph.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_textserverextension_private_method__font_get_hinting"></div>

[Hinting](#enum_textserver_hinting) **_font_get_hinting** ( font_rid: [`RID`](class_rid.md) ) virtual[^virtual] const[^const]<div id="class_textserverextension_private_method__font_get_hinting"></div>

**Optional.** 

Returns the font hinting mode. Used by dynamic fonts only.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_textserverextension_private_method__font_get_kerning"></div>

[`Vector2`](class_vector2.md) **_font_get_kerning** ( font_rid: [`RID`](class_rid.md), size: [`int`](class_int.md), glyph_pair: [`Vector2i`](class_vector2i.md) ) virtual[^virtual] const[^const]<div id="class_textserverextension_private_method__font_get_kerning"></div>

**Optional.** 

Returns kerning for the pair of glyphs.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_textserverextension_private_method__font_get_kerning_list"></div>

[Array](class_array.md) [`Vector2i`](class_vector2i.md) **_font_get_kerning_list** ( font_rid: [`RID`](class_rid.md), size: [`int`](class_int.md) ) virtual[^virtual] const[^const]<div id="class_textserverextension_private_method__font_get_kerning_list"></div>

**Optional.** 

Returns list of the kerning overrides.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_textserverextension_private_method__font_get_language_support_override"></div>

[`bool`](class_bool.md) **_font_get_language_support_override** ( font_rid: [`RID`](class_rid.md), language: [`String`](class_string.md) ) virtual[^virtual]<div id="class_textserverextension_private_method__font_get_language_support_override"></div>

**Optional.** 

Returns `true` if support override is enabled for the `language`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_textserverextension_private_method__font_get_language_support_overrides"></div>

[`PackedStringArray`](class_packedstringarray.md) **_font_get_language_support_overrides** ( font_rid: [`RID`](class_rid.md) ) virtual[^virtual]<div id="class_textserverextension_private_method__font_get_language_support_overrides"></div>

**Optional.** 

Returns list of language support overrides.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_textserverextension_private_method__font_get_msdf_pixel_range"></div>

[`int`](class_int.md) **_font_get_msdf_pixel_range** ( font_rid: [`RID`](class_rid.md) ) virtual[^virtual] const[^const]<div id="class_textserverextension_private_method__font_get_msdf_pixel_range"></div>

**Optional.** 

Returns the width of the range around the shape between the minimum and maximum representable signed distance.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_textserverextension_private_method__font_get_msdf_size"></div>

[`int`](class_int.md) **_font_get_msdf_size** ( font_rid: [`RID`](class_rid.md) ) virtual[^virtual] const[^const]<div id="class_textserverextension_private_method__font_get_msdf_size"></div>

**Optional.** 

Returns source font size used to generate MSDF textures.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_textserverextension_private_method__font_get_name"></div>

[`String`](class_string.md) **_font_get_name** ( font_rid: [`RID`](class_rid.md) ) virtual[^virtual] const[^const]<div id="class_textserverextension_private_method__font_get_name"></div>

**Optional.** 

Returns font family name.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_textserverextension_private_method__font_get_opentype_feature_overrides"></div>

[`Dictionary`](class_dictionary.md) **_font_get_opentype_feature_overrides** ( font_rid: [`RID`](class_rid.md) ) virtual[^virtual] const[^const]<div id="class_textserverextension_private_method__font_get_opentype_feature_overrides"></div>

**Optional.** 

Returns font OpenType feature set override.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_textserverextension_private_method__font_get_ot_name_strings"></div>

[`Dictionary`](class_dictionary.md) **_font_get_ot_name_strings** ( font_rid: [`RID`](class_rid.md) ) virtual[^virtual] const[^const]<div id="class_textserverextension_private_method__font_get_ot_name_strings"></div>

**Optional.** 

Returns [`Dictionary`](class_dictionary.md) with OpenType font name strings (localized font names, version, description, license information, sample text, etc.).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_textserverextension_private_method__font_get_oversampling"></div>

[`float`](class_float.md) **_font_get_oversampling** ( font_rid: [`RID`](class_rid.md) ) virtual[^virtual] const[^const]<div id="class_textserverextension_private_method__font_get_oversampling"></div>

**Optional.** 

Returns font oversampling factor, if set to `0.0` global oversampling factor is used instead. Used by dynamic fonts only.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_textserverextension_private_method__font_get_scale"></div>

[`float`](class_float.md) **_font_get_scale** ( font_rid: [`RID`](class_rid.md), size: [`int`](class_int.md) ) virtual[^virtual] const[^const]<div id="class_textserverextension_private_method__font_get_scale"></div>

**Required.** 

Returns scaling factor of the color bitmap font.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_textserverextension_private_method__font_get_script_support_override"></div>

[`bool`](class_bool.md) **_font_get_script_support_override** ( font_rid: [`RID`](class_rid.md), script: [`String`](class_string.md) ) virtual[^virtual]<div id="class_textserverextension_private_method__font_get_script_support_override"></div>

**Optional.** 

Returns `true` if support override is enabled for the `script`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_textserverextension_private_method__font_get_script_support_overrides"></div>

[`PackedStringArray`](class_packedstringarray.md) **_font_get_script_support_overrides** ( font_rid: [`RID`](class_rid.md) ) virtual[^virtual]<div id="class_textserverextension_private_method__font_get_script_support_overrides"></div>

**Optional.** 

Returns list of script support overrides.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_textserverextension_private_method__font_get_size_cache_list"></div>

[Array](class_array.md) [`Vector2i`](class_vector2i.md) **_font_get_size_cache_list** ( font_rid: [`RID`](class_rid.md) ) virtual[^virtual] const[^const]<div id="class_textserverextension_private_method__font_get_size_cache_list"></div>

**Required.** 

Returns list of the font sizes in the cache. Each size is [`Vector2i`](class_vector2i.md) with font size and outline size.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_textserverextension_private_method__font_get_spacing"></div>

[`int`](class_int.md) **_font_get_spacing** ( font_rid: [`RID`](class_rid.md), spacing: [SpacingType](#enum_textserver_spacingtype) ) virtual[^virtual] const[^const]<div id="class_textserverextension_private_method__font_get_spacing"></div>

**Optional.** 

Returns the spacing for `spacing` (see [SpacingType](#enum_textserver_spacingtype)) in pixels (not relative to the font size).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_textserverextension_private_method__font_get_stretch"></div>

[`int`](class_int.md) **_font_get_stretch** ( font_rid: [`RID`](class_rid.md) ) virtual[^virtual] const[^const]<div id="class_textserverextension_private_method__font_get_stretch"></div>

**Optional.** 

Returns font stretch amount, compared to a normal width. A percentage value between `50%` and `200%`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_textserverextension_private_method__font_get_style"></div>

[FontStyle](#enum_textserver_fontstyle) **_font_get_style** ( font_rid: [`RID`](class_rid.md) ) virtual[^virtual] const[^const]<div id="class_textserverextension_private_method__font_get_style"></div>

**Optional.** 

Returns font style flags, see [FontStyle](#enum_textserver_fontstyle).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_textserverextension_private_method__font_get_style_name"></div>

[`String`](class_string.md) **_font_get_style_name** ( font_rid: [`RID`](class_rid.md) ) virtual[^virtual] const[^const]<div id="class_textserverextension_private_method__font_get_style_name"></div>

**Optional.** 

Returns font style name.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_textserverextension_private_method__font_get_subpixel_positioning"></div>

[SubpixelPositioning](#enum_textserver_subpixelpositioning) **_font_get_subpixel_positioning** ( font_rid: [`RID`](class_rid.md) ) virtual[^virtual] const[^const]<div id="class_textserverextension_private_method__font_get_subpixel_positioning"></div>

**Optional.** 

Returns font subpixel glyph positioning mode.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_textserverextension_private_method__font_get_supported_chars"></div>

[`String`](class_string.md) **_font_get_supported_chars** ( font_rid: [`RID`](class_rid.md) ) virtual[^virtual] const[^const]<div id="class_textserverextension_private_method__font_get_supported_chars"></div>

**Required.** 

Returns a string containing all the characters available in the font.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_textserverextension_private_method__font_get_supported_glyphs"></div>

[`PackedInt32Array`](class_packedint32array.md) **_font_get_supported_glyphs** ( font_rid: [`RID`](class_rid.md) ) virtual[^virtual] const[^const]<div id="class_textserverextension_private_method__font_get_supported_glyphs"></div>

**Required.** 

Returns an array containing all glyph indices in the font.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_textserverextension_private_method__font_get_texture_count"></div>

[`int`](class_int.md) **_font_get_texture_count** ( font_rid: [`RID`](class_rid.md), size: [`Vector2i`](class_vector2i.md) ) virtual[^virtual] const[^const]<div id="class_textserverextension_private_method__font_get_texture_count"></div>

**Required.** 

Returns number of textures used by font cache entry.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_textserverextension_private_method__font_get_texture_image"></div>

[`Image`](class_image.md) **_font_get_texture_image** ( font_rid: [`RID`](class_rid.md), size: [`Vector2i`](class_vector2i.md), texture_index: [`int`](class_int.md) ) virtual[^virtual] const[^const]<div id="class_textserverextension_private_method__font_get_texture_image"></div>

**Required.** 

Returns font cache texture image data.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_textserverextension_private_method__font_get_texture_offsets"></div>

[`PackedInt32Array`](class_packedint32array.md) **_font_get_texture_offsets** ( font_rid: [`RID`](class_rid.md), size: [`Vector2i`](class_vector2i.md), texture_index: [`int`](class_int.md) ) virtual[^virtual] const[^const]<div id="class_textserverextension_private_method__font_get_texture_offsets"></div>

**Optional.** 

Returns array containing glyph packing data.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_textserverextension_private_method__font_get_transform"></div>

[`Transform2D`](class_transform2d.md) **_font_get_transform** ( font_rid: [`RID`](class_rid.md) ) virtual[^virtual] const[^const]<div id="class_textserverextension_private_method__font_get_transform"></div>

**Optional.** 

Returns 2D transform applied to the font outlines.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_textserverextension_private_method__font_get_underline_position"></div>

[`float`](class_float.md) **_font_get_underline_position** ( font_rid: [`RID`](class_rid.md), size: [`int`](class_int.md) ) virtual[^virtual] const[^const]<div id="class_textserverextension_private_method__font_get_underline_position"></div>

**Required.** 

Returns pixel offset of the underline below the baseline.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_textserverextension_private_method__font_get_underline_thickness"></div>

[`float`](class_float.md) **_font_get_underline_thickness** ( font_rid: [`RID`](class_rid.md), size: [`int`](class_int.md) ) virtual[^virtual] const[^const]<div id="class_textserverextension_private_method__font_get_underline_thickness"></div>

**Required.** 

Returns thickness of the underline in pixels.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_textserverextension_private_method__font_get_variation_coordinates"></div>

[`Dictionary`](class_dictionary.md) **_font_get_variation_coordinates** ( font_rid: [`RID`](class_rid.md) ) virtual[^virtual] const[^const]<div id="class_textserverextension_private_method__font_get_variation_coordinates"></div>

**Optional.** 

Returns variation coordinates for the specified font cache entry.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_textserverextension_private_method__font_get_weight"></div>

[`int`](class_int.md) **_font_get_weight** ( font_rid: [`RID`](class_rid.md) ) virtual[^virtual] const[^const]<div id="class_textserverextension_private_method__font_get_weight"></div>

**Optional.** 

Returns weight (boldness) of the font. A value in the `100...999` range, normal font weight is `400`, bold font weight is `700`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_textserverextension_private_method__font_has_char"></div>

[`bool`](class_bool.md) **_font_has_char** ( font_rid: [`RID`](class_rid.md), char: [`int`](class_int.md) ) virtual[^virtual] const[^const]<div id="class_textserverextension_private_method__font_has_char"></div>

**Required.** 

Returns `true` if a Unicode `char` is available in the font.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_textserverextension_private_method__font_is_allow_system_fallback"></div>

[`bool`](class_bool.md) **_font_is_allow_system_fallback** ( font_rid: [`RID`](class_rid.md) ) virtual[^virtual] const[^const]<div id="class_textserverextension_private_method__font_is_allow_system_fallback"></div>

**Optional.** 

Returns `true` if system fonts can be automatically used as fallbacks.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_textserverextension_private_method__font_is_force_autohinter"></div>

[`bool`](class_bool.md) **_font_is_force_autohinter** ( font_rid: [`RID`](class_rid.md) ) virtual[^virtual] const[^const]<div id="class_textserverextension_private_method__font_is_force_autohinter"></div>

**Optional.** 

Returns `true` if auto-hinting is supported and preferred over font built-in hinting.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_textserverextension_private_method__font_is_language_supported"></div>

[`bool`](class_bool.md) **_font_is_language_supported** ( font_rid: [`RID`](class_rid.md), language: [`String`](class_string.md) ) virtual[^virtual] const[^const]<div id="class_textserverextension_private_method__font_is_language_supported"></div>

**Optional.** 

Returns `true`, if font supports given language ([*ISO 639*](https://en.wikipedia.org/wiki/ISO_639-1) code).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_textserverextension_private_method__font_is_multichannel_signed_distance_field"></div>

[`bool`](class_bool.md) **_font_is_multichannel_signed_distance_field** ( font_rid: [`RID`](class_rid.md) ) virtual[^virtual] const[^const]<div id="class_textserverextension_private_method__font_is_multichannel_signed_distance_field"></div>

**Optional.** 

Returns `true` if glyphs of all sizes are rendered using single multichannel signed distance field generated from the dynamic font vector data.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_textserverextension_private_method__font_is_script_supported"></div>

[`bool`](class_bool.md) **_font_is_script_supported** ( font_rid: [`RID`](class_rid.md), script: [`String`](class_string.md) ) virtual[^virtual] const[^const]<div id="class_textserverextension_private_method__font_is_script_supported"></div>

**Optional.** 

Returns `true`, if font supports given script (ISO 15924 code).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_textserverextension_private_method__font_remove_glyph"></div>

`void` **_font_remove_glyph** ( font_rid: [`RID`](class_rid.md), size: [`Vector2i`](class_vector2i.md), glyph: [`int`](class_int.md) ) virtual[^virtual]<div id="class_textserverextension_private_method__font_remove_glyph"></div>

**Required.** 

Removes specified rendered glyph information from the cache entry.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_textserverextension_private_method__font_remove_kerning"></div>

`void` **_font_remove_kerning** ( font_rid: [`RID`](class_rid.md), size: [`int`](class_int.md), glyph_pair: [`Vector2i`](class_vector2i.md) ) virtual[^virtual]<div id="class_textserverextension_private_method__font_remove_kerning"></div>

**Optional.** 

Removes kerning override for the pair of glyphs.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_textserverextension_private_method__font_remove_language_support_override"></div>

`void` **_font_remove_language_support_override** ( font_rid: [`RID`](class_rid.md), language: [`String`](class_string.md) ) virtual[^virtual]<div id="class_textserverextension_private_method__font_remove_language_support_override"></div>

**Optional.** 

Remove language support override.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_textserverextension_private_method__font_remove_script_support_override"></div>

`void` **_font_remove_script_support_override** ( font_rid: [`RID`](class_rid.md), script: [`String`](class_string.md) ) virtual[^virtual]<div id="class_textserverextension_private_method__font_remove_script_support_override"></div>

**Optional.** 

Removes script support override.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_textserverextension_private_method__font_remove_size_cache"></div>

`void` **_font_remove_size_cache** ( font_rid: [`RID`](class_rid.md), size: [`Vector2i`](class_vector2i.md) ) virtual[^virtual]<div id="class_textserverextension_private_method__font_remove_size_cache"></div>

**Required.** 

Removes specified font size from the cache entry.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_textserverextension_private_method__font_remove_texture"></div>

`void` **_font_remove_texture** ( font_rid: [`RID`](class_rid.md), size: [`Vector2i`](class_vector2i.md), texture_index: [`int`](class_int.md) ) virtual[^virtual]<div id="class_textserverextension_private_method__font_remove_texture"></div>

**Required.** 

Removes specified texture from the cache entry.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_textserverextension_private_method__font_render_glyph"></div>

`void` **_font_render_glyph** ( font_rid: [`RID`](class_rid.md), size: [`Vector2i`](class_vector2i.md), index: [`int`](class_int.md) ) virtual[^virtual]<div id="class_textserverextension_private_method__font_render_glyph"></div>

**Optional.** 

Renders specified glyph to the font cache texture.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_textserverextension_private_method__font_render_range"></div>

`void` **_font_render_range** ( font_rid: [`RID`](class_rid.md), size: [`Vector2i`](class_vector2i.md), start: [`int`](class_int.md), end: [`int`](class_int.md) ) virtual[^virtual]<div id="class_textserverextension_private_method__font_render_range"></div>

**Optional.** 

Renders the range of characters to the font cache texture.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_textserverextension_private_method__font_set_allow_system_fallback"></div>

`void` **_font_set_allow_system_fallback** ( font_rid: [`RID`](class_rid.md), allow_system_fallback: [`bool`](class_bool.md) ) virtual[^virtual]<div id="class_textserverextension_private_method__font_set_allow_system_fallback"></div>

**Optional.** 

If set to `true`, system fonts can be automatically used as fallbacks.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_textserverextension_private_method__font_set_antialiasing"></div>

`void` **_font_set_antialiasing** ( font_rid: [`RID`](class_rid.md), antialiasing: [FontAntialiasing](#enum_textserver_fontantialiasing) ) virtual[^virtual]<div id="class_textserverextension_private_method__font_set_antialiasing"></div>

**Optional.** 

Sets font anti-aliasing mode.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_textserverextension_private_method__font_set_ascent"></div>

`void` **_font_set_ascent** ( font_rid: [`RID`](class_rid.md), size: [`int`](class_int.md), ascent: [`float`](class_float.md) ) virtual[^virtual]<div id="class_textserverextension_private_method__font_set_ascent"></div>

**Required.** 

Sets the font ascent (number of pixels above the baseline).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_textserverextension_private_method__font_set_baseline_offset"></div>

`void` **_font_set_baseline_offset** ( font_rid: [`RID`](class_rid.md), baseline_offset: [`float`](class_float.md) ) virtual[^virtual]<div id="class_textserverextension_private_method__font_set_baseline_offset"></div>

**Optional.** 

Sets extra baseline offset (as a fraction of font height).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_textserverextension_private_method__font_set_data"></div>

`void` **_font_set_data** ( font_rid: [`RID`](class_rid.md), data: [`PackedByteArray`](class_packedbytearray.md) ) virtual[^virtual]<div id="class_textserverextension_private_method__font_set_data"></div>

**Optional.** 

Sets font source data, e.g contents of the dynamic font source file.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_textserverextension_private_method__font_set_data_ptr"></div>

`void` **_font_set_data_ptr** ( font_rid: [`RID`](class_rid.md), data_ptr: `const uint8_t*`, data_size: [`int`](class_int.md) ) virtual[^virtual]<div id="class_textserverextension_private_method__font_set_data_ptr"></div>

**Optional.** 

Sets pointer to the font source data, e.g contents of the dynamic font source file.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_textserverextension_private_method__font_set_descent"></div>

`void` **_font_set_descent** ( font_rid: [`RID`](class_rid.md), size: [`int`](class_int.md), descent: [`float`](class_float.md) ) virtual[^virtual]<div id="class_textserverextension_private_method__font_set_descent"></div>

**Required.** 

Sets the font descent (number of pixels below the baseline).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_textserverextension_private_method__font_set_disable_embedded_bitmaps"></div>

`void` **_font_set_disable_embedded_bitmaps** ( font_rid: [`RID`](class_rid.md), disable_embedded_bitmaps: [`bool`](class_bool.md) ) virtual[^virtual]<div id="class_textserverextension_private_method__font_set_disable_embedded_bitmaps"></div>

**Optional.** 

If set to `true`, embedded font bitmap loading is disabled.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_textserverextension_private_method__font_set_embolden"></div>

`void` **_font_set_embolden** ( font_rid: [`RID`](class_rid.md), strength: [`float`](class_float.md) ) virtual[^virtual]<div id="class_textserverextension_private_method__font_set_embolden"></div>

Sets font embolden strength. If `strength` is not equal to zero, emboldens the font outlines. Negative values reduce the outline thickness.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_textserverextension_private_method__font_set_face_index"></div>

`void` **_font_set_face_index** ( font_rid: [`RID`](class_rid.md), face_index: [`int`](class_int.md) ) virtual[^virtual]<div id="class_textserverextension_private_method__font_set_face_index"></div>

**Optional.** 

Sets an active face index in the TrueType / OpenType collection.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_textserverextension_private_method__font_set_fixed_size"></div>

`void` **_font_set_fixed_size** ( font_rid: [`RID`](class_rid.md), fixed_size: [`int`](class_int.md) ) virtual[^virtual]<div id="class_textserverextension_private_method__font_set_fixed_size"></div>

**Required.** 

Sets bitmap font fixed size. If set to value greater than zero, same cache entry will be used for all font sizes.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_textserverextension_private_method__font_set_fixed_size_scale_mode"></div>

`void` **_font_set_fixed_size_scale_mode** ( font_rid: [`RID`](class_rid.md), fixed_size_scale_mode: [FixedSizeScaleMode](#enum_textserver_fixedsizescalemode) ) virtual[^virtual]<div id="class_textserverextension_private_method__font_set_fixed_size_scale_mode"></div>

**Required.** 

Sets bitmap font scaling mode. This property is used only if `fixed_size` is greater than zero.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_textserverextension_private_method__font_set_force_autohinter"></div>

`void` **_font_set_force_autohinter** ( font_rid: [`RID`](class_rid.md), force_autohinter: [`bool`](class_bool.md) ) virtual[^virtual]<div id="class_textserverextension_private_method__font_set_force_autohinter"></div>

**Optional.** 

If set to `true` auto-hinting is preferred over font built-in hinting.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_textserverextension_private_method__font_set_generate_mipmaps"></div>

`void` **_font_set_generate_mipmaps** ( font_rid: [`RID`](class_rid.md), generate_mipmaps: [`bool`](class_bool.md) ) virtual[^virtual]<div id="class_textserverextension_private_method__font_set_generate_mipmaps"></div>

**Optional.** 

If set to `true` font texture mipmap generation is enabled.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_textserverextension_private_method__font_set_global_oversampling"></div>

`void` **_font_set_global_oversampling** ( oversampling: [`float`](class_float.md) ) virtual[^virtual]<div id="class_textserverextension_private_method__font_set_global_oversampling"></div>

**Optional.** 

Sets oversampling factor, shared by all font in the TextServer.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_textserverextension_private_method__font_set_glyph_advance"></div>

`void` **_font_set_glyph_advance** ( font_rid: [`RID`](class_rid.md), size: [`int`](class_int.md), glyph: [`int`](class_int.md), advance: [`Vector2`](class_vector2.md) ) virtual[^virtual]<div id="class_textserverextension_private_method__font_set_glyph_advance"></div>

**Required.** 

Sets glyph advance (offset of the next glyph).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_textserverextension_private_method__font_set_glyph_offset"></div>

`void` **_font_set_glyph_offset** ( font_rid: [`RID`](class_rid.md), size: [`Vector2i`](class_vector2i.md), glyph: [`int`](class_int.md), offset: [`Vector2`](class_vector2.md) ) virtual[^virtual]<div id="class_textserverextension_private_method__font_set_glyph_offset"></div>

**Required.** 

Sets glyph offset from the baseline.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_textserverextension_private_method__font_set_glyph_size"></div>

`void` **_font_set_glyph_size** ( font_rid: [`RID`](class_rid.md), size: [`Vector2i`](class_vector2i.md), glyph: [`int`](class_int.md), gl_size: [`Vector2`](class_vector2.md) ) virtual[^virtual]<div id="class_textserverextension_private_method__font_set_glyph_size"></div>

**Required.** 

Sets size of the glyph.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_textserverextension_private_method__font_set_glyph_texture_idx"></div>

`void` **_font_set_glyph_texture_idx** ( font_rid: [`RID`](class_rid.md), size: [`Vector2i`](class_vector2i.md), glyph: [`int`](class_int.md), texture_idx: [`int`](class_int.md) ) virtual[^virtual]<div id="class_textserverextension_private_method__font_set_glyph_texture_idx"></div>

**Required.** 

Sets index of the cache texture containing the glyph.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_textserverextension_private_method__font_set_glyph_uv_rect"></div>

`void` **_font_set_glyph_uv_rect** ( font_rid: [`RID`](class_rid.md), size: [`Vector2i`](class_vector2i.md), glyph: [`int`](class_int.md), uv_rect: [`Rect2`](class_rect2.md) ) virtual[^virtual]<div id="class_textserverextension_private_method__font_set_glyph_uv_rect"></div>

**Required.** 

Sets rectangle in the cache texture containing the glyph.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_textserverextension_private_method__font_set_hinting"></div>

`void` **_font_set_hinting** ( font_rid: [`RID`](class_rid.md), hinting: [Hinting](#enum_textserver_hinting) ) virtual[^virtual]<div id="class_textserverextension_private_method__font_set_hinting"></div>

**Optional.** 

Sets font hinting mode. Used by dynamic fonts only.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_textserverextension_private_method__font_set_kerning"></div>

`void` **_font_set_kerning** ( font_rid: [`RID`](class_rid.md), size: [`int`](class_int.md), glyph_pair: [`Vector2i`](class_vector2i.md), kerning: [`Vector2`](class_vector2.md) ) virtual[^virtual]<div id="class_textserverextension_private_method__font_set_kerning"></div>

**Optional.** 

Sets kerning for the pair of glyphs.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_textserverextension_private_method__font_set_language_support_override"></div>

`void` **_font_set_language_support_override** ( font_rid: [`RID`](class_rid.md), language: [`String`](class_string.md), supported: [`bool`](class_bool.md) ) virtual[^virtual]<div id="class_textserverextension_private_method__font_set_language_support_override"></div>

**Optional.** 

Adds override for [`_font_is_language_supported`](class_textserverextension.md#class_textserverextension_private_method__font_is_language_supported).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_textserverextension_private_method__font_set_msdf_pixel_range"></div>

`void` **_font_set_msdf_pixel_range** ( font_rid: [`RID`](class_rid.md), msdf_pixel_range: [`int`](class_int.md) ) virtual[^virtual]<div id="class_textserverextension_private_method__font_set_msdf_pixel_range"></div>

**Optional.** 

Sets the width of the range around the shape between the minimum and maximum representable signed distance.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_textserverextension_private_method__font_set_msdf_size"></div>

`void` **_font_set_msdf_size** ( font_rid: [`RID`](class_rid.md), msdf_size: [`int`](class_int.md) ) virtual[^virtual]<div id="class_textserverextension_private_method__font_set_msdf_size"></div>

**Optional.** 

Sets source font size used to generate MSDF textures.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_textserverextension_private_method__font_set_multichannel_signed_distance_field"></div>

`void` **_font_set_multichannel_signed_distance_field** ( font_rid: [`RID`](class_rid.md), msdf: [`bool`](class_bool.md) ) virtual[^virtual]<div id="class_textserverextension_private_method__font_set_multichannel_signed_distance_field"></div>

**Optional.** 

If set to `true`, glyphs of all sizes are rendered using single multichannel signed distance field generated from the dynamic font vector data. MSDF rendering allows displaying the font at any scaling factor without blurriness, and without incurring a CPU cost when the font size changes (since the font no longer needs to be rasterized on the CPU). As a downside, font hinting is not available with MSDF. The lack of font hinting may result in less crisp and less readable fonts at small sizes.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_textserverextension_private_method__font_set_name"></div>

`void` **_font_set_name** ( font_rid: [`RID`](class_rid.md), name: [`String`](class_string.md) ) virtual[^virtual]<div id="class_textserverextension_private_method__font_set_name"></div>

**Optional.** 

Sets the font family name.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_textserverextension_private_method__font_set_opentype_feature_overrides"></div>

`void` **_font_set_opentype_feature_overrides** ( font_rid: [`RID`](class_rid.md), overrides: [`Dictionary`](class_dictionary.md) ) virtual[^virtual]<div id="class_textserverextension_private_method__font_set_opentype_feature_overrides"></div>

**Optional.** 

Sets font OpenType feature set override.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_textserverextension_private_method__font_set_oversampling"></div>

`void` **_font_set_oversampling** ( font_rid: [`RID`](class_rid.md), oversampling: [`float`](class_float.md) ) virtual[^virtual]<div id="class_textserverextension_private_method__font_set_oversampling"></div>

**Optional.** 

Sets font oversampling factor, if set to `0.0` global oversampling factor is used instead. Used by dynamic fonts only.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_textserverextension_private_method__font_set_scale"></div>

`void` **_font_set_scale** ( font_rid: [`RID`](class_rid.md), size: [`int`](class_int.md), scale: [`float`](class_float.md) ) virtual[^virtual]<div id="class_textserverextension_private_method__font_set_scale"></div>

**Required.** 

Sets scaling factor of the color bitmap font.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_textserverextension_private_method__font_set_script_support_override"></div>

`void` **_font_set_script_support_override** ( font_rid: [`RID`](class_rid.md), script: [`String`](class_string.md), supported: [`bool`](class_bool.md) ) virtual[^virtual]<div id="class_textserverextension_private_method__font_set_script_support_override"></div>

**Optional.** 

Adds override for [`_font_is_script_supported`](class_textserverextension.md#class_textserverextension_private_method__font_is_script_supported).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_textserverextension_private_method__font_set_spacing"></div>

`void` **_font_set_spacing** ( font_rid: [`RID`](class_rid.md), spacing: [SpacingType](#enum_textserver_spacingtype), value: [`int`](class_int.md) ) virtual[^virtual]<div id="class_textserverextension_private_method__font_set_spacing"></div>

**Optional.** 

Sets the spacing for `spacing` (see [SpacingType](#enum_textserver_spacingtype)) to `value` in pixels (not relative to the font size).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_textserverextension_private_method__font_set_stretch"></div>

`void` **_font_set_stretch** ( font_rid: [`RID`](class_rid.md), stretch: [`int`](class_int.md) ) virtual[^virtual]<div id="class_textserverextension_private_method__font_set_stretch"></div>

**Optional.** 

Sets font stretch amount, compared to a normal width. A percentage value between `50%` and `200%`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_textserverextension_private_method__font_set_style"></div>

`void` **_font_set_style** ( font_rid: [`RID`](class_rid.md), style: [FontStyle](#enum_textserver_fontstyle) ) virtual[^virtual]<div id="class_textserverextension_private_method__font_set_style"></div>

**Optional.** 

Sets the font style flags, see [FontStyle](#enum_textserver_fontstyle).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_textserverextension_private_method__font_set_style_name"></div>

`void` **_font_set_style_name** ( font_rid: [`RID`](class_rid.md), name_style: [`String`](class_string.md) ) virtual[^virtual]<div id="class_textserverextension_private_method__font_set_style_name"></div>

**Optional.** 

Sets the font style name.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_textserverextension_private_method__font_set_subpixel_positioning"></div>

`void` **_font_set_subpixel_positioning** ( font_rid: [`RID`](class_rid.md), subpixel_positioning: [SubpixelPositioning](#enum_textserver_subpixelpositioning) ) virtual[^virtual]<div id="class_textserverextension_private_method__font_set_subpixel_positioning"></div>

**Optional.** 

Sets font subpixel glyph positioning mode.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_textserverextension_private_method__font_set_texture_image"></div>

`void` **_font_set_texture_image** ( font_rid: [`RID`](class_rid.md), size: [`Vector2i`](class_vector2i.md), texture_index: [`int`](class_int.md), image: [`Image`](class_image.md) ) virtual[^virtual]<div id="class_textserverextension_private_method__font_set_texture_image"></div>

**Required.** 

Sets font cache texture image data.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_textserverextension_private_method__font_set_texture_offsets"></div>

`void` **_font_set_texture_offsets** ( font_rid: [`RID`](class_rid.md), size: [`Vector2i`](class_vector2i.md), texture_index: [`int`](class_int.md), offset: [`PackedInt32Array`](class_packedint32array.md) ) virtual[^virtual]<div id="class_textserverextension_private_method__font_set_texture_offsets"></div>

**Optional.** 

Sets array containing glyph packing data.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_textserverextension_private_method__font_set_transform"></div>

`void` **_font_set_transform** ( font_rid: [`RID`](class_rid.md), transform: [`Transform2D`](class_transform2d.md) ) virtual[^virtual]<div id="class_textserverextension_private_method__font_set_transform"></div>

**Optional.** 

Sets 2D transform, applied to the font outlines, can be used for slanting, flipping, and rotating glyphs.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_textserverextension_private_method__font_set_underline_position"></div>

`void` **_font_set_underline_position** ( font_rid: [`RID`](class_rid.md), size: [`int`](class_int.md), underline_position: [`float`](class_float.md) ) virtual[^virtual]<div id="class_textserverextension_private_method__font_set_underline_position"></div>

**Required.** 

Sets pixel offset of the underline below the baseline.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_textserverextension_private_method__font_set_underline_thickness"></div>

`void` **_font_set_underline_thickness** ( font_rid: [`RID`](class_rid.md), size: [`int`](class_int.md), underline_thickness: [`float`](class_float.md) ) virtual[^virtual]<div id="class_textserverextension_private_method__font_set_underline_thickness"></div>

**Required.** 

Sets thickness of the underline in pixels.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_textserverextension_private_method__font_set_variation_coordinates"></div>

`void` **_font_set_variation_coordinates** ( font_rid: [`RID`](class_rid.md), variation_coordinates: [`Dictionary`](class_dictionary.md) ) virtual[^virtual]<div id="class_textserverextension_private_method__font_set_variation_coordinates"></div>

**Optional.** 

Sets variation coordinates for the specified font cache entry.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_textserverextension_private_method__font_set_weight"></div>

`void` **_font_set_weight** ( font_rid: [`RID`](class_rid.md), weight: [`int`](class_int.md) ) virtual[^virtual]<div id="class_textserverextension_private_method__font_set_weight"></div>

**Optional.** 

Sets weight (boldness) of the font. A value in the `100...999` range, normal font weight is `400`, bold font weight is `700`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_textserverextension_private_method__font_supported_feature_list"></div>

[`Dictionary`](class_dictionary.md) **_font_supported_feature_list** ( font_rid: [`RID`](class_rid.md) ) virtual[^virtual] const[^const]<div id="class_textserverextension_private_method__font_supported_feature_list"></div>

**Optional.** 

Returns the dictionary of the supported OpenType features.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_textserverextension_private_method__font_supported_variation_list"></div>

[`Dictionary`](class_dictionary.md) **_font_supported_variation_list** ( font_rid: [`RID`](class_rid.md) ) virtual[^virtual] const[^const]<div id="class_textserverextension_private_method__font_supported_variation_list"></div>

**Optional.** 

Returns the dictionary of the supported OpenType variation coordinates.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_textserverextension_private_method__format_number"></div>

[`String`](class_string.md) **_format_number** ( number: [`String`](class_string.md), language: [`String`](class_string.md) ) virtual[^virtual] const[^const]<div id="class_textserverextension_private_method__format_number"></div>

**Optional.** 

Converts a number from the Western Arabic (0..9) to the numeral systems used in `language`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_textserverextension_private_method__free_rid"></div>

`void` **_free_rid** ( rid: [`RID`](class_rid.md) ) virtual[^virtual]<div id="class_textserverextension_private_method__free_rid"></div>

**Required.** 

Frees an object created by this [`TextServer`](class_textserver.md).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_textserverextension_private_method__get_features"></div>

[`int`](class_int.md) **_get_features** ( ) virtual[^virtual] const[^const]<div id="class_textserverextension_private_method__get_features"></div>

**Required.** 

Returns text server features, see [Feature](#enum_textserver_feature).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_textserverextension_private_method__get_hex_code_box_size"></div>

[`Vector2`](class_vector2.md) **_get_hex_code_box_size** ( size: [`int`](class_int.md), index: [`int`](class_int.md) ) virtual[^virtual] const[^const]<div id="class_textserverextension_private_method__get_hex_code_box_size"></div>

**Optional.** 

Returns size of the replacement character (box with character hexadecimal code that is drawn in place of invalid characters).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_textserverextension_private_method__get_name"></div>

[`String`](class_string.md) **_get_name** ( ) virtual[^virtual] const[^const]<div id="class_textserverextension_private_method__get_name"></div>

**Required.** 

Returns the name of the server interface.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_textserverextension_private_method__get_support_data_filename"></div>

[`String`](class_string.md) **_get_support_data_filename** ( ) virtual[^virtual] const[^const]<div id="class_textserverextension_private_method__get_support_data_filename"></div>

**Optional.** 

Returns default TextServer database (e.g. ICU break iterators and dictionaries) filename.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_textserverextension_private_method__get_support_data_info"></div>

[`String`](class_string.md) **_get_support_data_info** ( ) virtual[^virtual] const[^const]<div id="class_textserverextension_private_method__get_support_data_info"></div>

**Optional.** 

Returns TextServer database (e.g. ICU break iterators and dictionaries) description.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_textserverextension_private_method__has"></div>

[`bool`](class_bool.md) **_has** ( rid: [`RID`](class_rid.md) ) virtual[^virtual]<div id="class_textserverextension_private_method__has"></div>

**Required.** 

Returns `true` if `rid` is valid resource owned by this text server.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_textserverextension_private_method__has_feature"></div>

[`bool`](class_bool.md) **_has_feature** ( feature: [Feature](#enum_textserver_feature) ) virtual[^virtual] const[^const]<div id="class_textserverextension_private_method__has_feature"></div>

**Required.** 

Returns `true` if the server supports a feature.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_textserverextension_private_method__is_confusable"></div>

[`int`](class_int.md) **_is_confusable** ( string: [`String`](class_string.md), dict: [`PackedStringArray`](class_packedstringarray.md) ) virtual[^virtual] const[^const]<div id="class_textserverextension_private_method__is_confusable"></div>

**Optional.** 

Returns index of the first string in `dict` which is visually confusable with the `string`, or `-1` if none is found.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_textserverextension_private_method__is_locale_right_to_left"></div>

[`bool`](class_bool.md) **_is_locale_right_to_left** ( locale: [`String`](class_string.md) ) virtual[^virtual] const[^const]<div id="class_textserverextension_private_method__is_locale_right_to_left"></div>

**Required.** 

Returns `true` if locale is right-to-left.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_textserverextension_private_method__is_valid_identifier"></div>

[`bool`](class_bool.md) **_is_valid_identifier** ( string: [`String`](class_string.md) ) virtual[^virtual] const[^const]<div id="class_textserverextension_private_method__is_valid_identifier"></div>

**Optional.** 

Returns `true` if `string` is a valid identifier.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_textserverextension_private_method__is_valid_letter"></div>

[`bool`](class_bool.md) **_is_valid_letter** ( unicode: [`int`](class_int.md) ) virtual[^virtual] const[^const]<div id="class_textserverextension_private_method__is_valid_letter"></div>

该方法目前没有描述，请帮我们\ :ref:`贡献一个 <doc_updating_the_class_reference>`\ 吧！

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_textserverextension_private_method__load_support_data"></div>

[`bool`](class_bool.md) **_load_support_data** ( filename: [`String`](class_string.md) ) virtual[^virtual]<div id="class_textserverextension_private_method__load_support_data"></div>

**Optional.** 

Loads optional TextServer database (e.g. ICU break iterators and dictionaries).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_textserverextension_private_method__name_to_tag"></div>

[`int`](class_int.md) **_name_to_tag** ( name: [`String`](class_string.md) ) virtual[^virtual] const[^const]<div id="class_textserverextension_private_method__name_to_tag"></div>

**Optional.** 

Converts readable feature, variation, script, or language name to OpenType tag.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_textserverextension_private_method__parse_number"></div>

[`String`](class_string.md) **_parse_number** ( number: [`String`](class_string.md), language: [`String`](class_string.md) ) virtual[^virtual] const[^const]<div id="class_textserverextension_private_method__parse_number"></div>

**Optional.** 

Converts `number` from the numeral systems used in `language` to Western Arabic (0..9).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_textserverextension_private_method__parse_structured_text"></div>

[Array](class_array.md) [`Vector3i`](class_vector3i.md) **_parse_structured_text** ( parser_type: [StructuredTextParser](#enum_textserver_structuredtextparser), args: [`Array`](class_array.md), text: [`String`](class_string.md) ) virtual[^virtual] const[^const]<div id="class_textserverextension_private_method__parse_structured_text"></div>

**Optional.** 

Default implementation of the BiDi algorithm override function. See [StructuredTextParser](#enum_textserver_structuredtextparser) for more info.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_textserverextension_private_method__percent_sign"></div>

[`String`](class_string.md) **_percent_sign** ( language: [`String`](class_string.md) ) virtual[^virtual] const[^const]<div id="class_textserverextension_private_method__percent_sign"></div>

**Optional.** 

Returns percent sign used in the `language`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_textserverextension_private_method__save_support_data"></div>

[`bool`](class_bool.md) **_save_support_data** ( filename: [`String`](class_string.md) ) virtual[^virtual] const[^const]<div id="class_textserverextension_private_method__save_support_data"></div>

**Optional.** 

Saves optional TextServer database (e.g. ICU break iterators and dictionaries) to the file.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_textserverextension_private_method__shaped_get_span_count"></div>

[`int`](class_int.md) **_shaped_get_span_count** ( shaped: [`RID`](class_rid.md) ) virtual[^virtual] const[^const]<div id="class_textserverextension_private_method__shaped_get_span_count"></div>

**Required.** 

Returns number of text spans added using [`_shaped_text_add_string`](class_textserverextension.md#class_textserverextension_private_method__shaped_text_add_string) or [`_shaped_text_add_object`](class_textserverextension.md#class_textserverextension_private_method__shaped_text_add_object).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_textserverextension_private_method__shaped_get_span_meta"></div>

[`Variant`](class_variant.md) **_shaped_get_span_meta** ( shaped: [`RID`](class_rid.md), index: [`int`](class_int.md) ) virtual[^virtual] const[^const]<div id="class_textserverextension_private_method__shaped_get_span_meta"></div>

**Required.** 

Returns text span metadata.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_textserverextension_private_method__shaped_set_span_update_font"></div>

`void` **_shaped_set_span_update_font** ( shaped: [`RID`](class_rid.md), index: [`int`](class_int.md), fonts: [Array](class_array.md) [`RID`](class_rid.md), size: [`int`](class_int.md), opentype_features: [`Dictionary`](class_dictionary.md) ) virtual[^virtual]<div id="class_textserverextension_private_method__shaped_set_span_update_font"></div>

**Required.** 

Changes text span font, font size, and OpenType features, without changing the text.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_textserverextension_private_method__shaped_text_add_object"></div>

[`bool`](class_bool.md) **_shaped_text_add_object** ( shaped: [`RID`](class_rid.md), key: [`Variant`](class_variant.md), size: [`Vector2`](class_vector2.md), inline_align: [InlineAlignment](#enum_@globalscope_inlinealignment), length: [`int`](class_int.md), baseline: [`float`](class_float.md) ) virtual[^virtual]<div id="class_textserverextension_private_method__shaped_text_add_object"></div>

**Required.** 

Adds inline object to the text buffer, `key` must be unique. In the text, object is represented as `length` object replacement characters.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_textserverextension_private_method__shaped_text_add_string"></div>

[`bool`](class_bool.md) **_shaped_text_add_string** ( shaped: [`RID`](class_rid.md), text: [`String`](class_string.md), fonts: [Array](class_array.md) [`RID`](class_rid.md), size: [`int`](class_int.md), opentype_features: [`Dictionary`](class_dictionary.md), language: [`String`](class_string.md), meta: [`Variant`](class_variant.md) ) virtual[^virtual]<div id="class_textserverextension_private_method__shaped_text_add_string"></div>

**Required.** 

Adds text span and font to draw it to the text buffer.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_textserverextension_private_method__shaped_text_clear"></div>

`void` **_shaped_text_clear** ( shaped: [`RID`](class_rid.md) ) virtual[^virtual]<div id="class_textserverextension_private_method__shaped_text_clear"></div>

**Required.** 

Clears text buffer (removes text and inline objects).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_textserverextension_private_method__shaped_text_closest_character_pos"></div>

[`int`](class_int.md) **_shaped_text_closest_character_pos** ( shaped: [`RID`](class_rid.md), pos: [`int`](class_int.md) ) virtual[^virtual] const[^const]<div id="class_textserverextension_private_method__shaped_text_closest_character_pos"></div>

**Optional.** 

Returns composite character position closest to the `pos`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_textserverextension_private_method__shaped_text_draw"></div>

`void` **_shaped_text_draw** ( shaped: [`RID`](class_rid.md), canvas: [`RID`](class_rid.md), pos: [`Vector2`](class_vector2.md), clip_l: [`float`](class_float.md), clip_r: [`float`](class_float.md), color: [`Color`](class_color.md) ) virtual[^virtual] const[^const]<div id="class_textserverextension_private_method__shaped_text_draw"></div>

**Optional.** 

Draw shaped text into a canvas item at a given position, with `color`. `pos` specifies the leftmost point of the baseline (for horizontal layout) or topmost point of the baseline (for vertical layout).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_textserverextension_private_method__shaped_text_draw_outline"></div>

`void` **_shaped_text_draw_outline** ( shaped: [`RID`](class_rid.md), canvas: [`RID`](class_rid.md), pos: [`Vector2`](class_vector2.md), clip_l: [`float`](class_float.md), clip_r: [`float`](class_float.md), outline_size: [`int`](class_int.md), color: [`Color`](class_color.md) ) virtual[^virtual] const[^const]<div id="class_textserverextension_private_method__shaped_text_draw_outline"></div>

**Optional.** 

Draw the outline of the shaped text into a canvas item at a given position, with `color`. `pos` specifies the leftmost point of the baseline (for horizontal layout) or topmost point of the baseline (for vertical layout).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_textserverextension_private_method__shaped_text_fit_to_width"></div>

[`float`](class_float.md) **_shaped_text_fit_to_width** ( shaped: [`RID`](class_rid.md), width: [`float`](class_float.md), justification_flags: [JustificationFlag](#enum_textserver_justificationflag) ) virtual[^virtual]<div id="class_textserverextension_private_method__shaped_text_fit_to_width"></div>

**Optional.** 

Adjusts text width to fit to specified width, returns new text width.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_textserverextension_private_method__shaped_text_get_ascent"></div>

[`float`](class_float.md) **_shaped_text_get_ascent** ( shaped: [`RID`](class_rid.md) ) virtual[^virtual] const[^const]<div id="class_textserverextension_private_method__shaped_text_get_ascent"></div>

**Required.** 

Returns the text ascent (number of pixels above the baseline for horizontal layout or to the left of baseline for vertical).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_textserverextension_private_method__shaped_text_get_carets"></div>

`void` **_shaped_text_get_carets** ( shaped: [`RID`](class_rid.md), position: [`int`](class_int.md), caret: `CaretInfo*` ) virtual[^virtual] const[^const]<div id="class_textserverextension_private_method__shaped_text_get_carets"></div>

**Optional.** 

Returns shapes of the carets corresponding to the character offset `position` in the text. Returned caret shape is 1 pixel wide rectangle.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_textserverextension_private_method__shaped_text_get_character_breaks"></div>

[`PackedInt32Array`](class_packedint32array.md) **_shaped_text_get_character_breaks** ( shaped: [`RID`](class_rid.md) ) virtual[^virtual] const[^const]<div id="class_textserverextension_private_method__shaped_text_get_character_breaks"></div>

**Optional.** 

Returns array of the composite character boundaries.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_textserverextension_private_method__shaped_text_get_custom_ellipsis"></div>

[`int`](class_int.md) **_shaped_text_get_custom_ellipsis** ( shaped: [`RID`](class_rid.md) ) virtual[^virtual] const[^const]<div id="class_textserverextension_private_method__shaped_text_get_custom_ellipsis"></div>

**Optional.** 

Returns ellipsis character used for text clipping.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_textserverextension_private_method__shaped_text_get_custom_punctuation"></div>

[`String`](class_string.md) **_shaped_text_get_custom_punctuation** ( shaped: [`RID`](class_rid.md) ) virtual[^virtual] const[^const]<div id="class_textserverextension_private_method__shaped_text_get_custom_punctuation"></div>

**Optional.** 

Returns custom punctuation character list, used for word breaking. If set to empty string, server defaults are used.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_textserverextension_private_method__shaped_text_get_descent"></div>

[`float`](class_float.md) **_shaped_text_get_descent** ( shaped: [`RID`](class_rid.md) ) virtual[^virtual] const[^const]<div id="class_textserverextension_private_method__shaped_text_get_descent"></div>

**Required.** 

Returns the text descent (number of pixels below the baseline for horizontal layout or to the right of baseline for vertical).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_textserverextension_private_method__shaped_text_get_direction"></div>

[Direction](#enum_textserver_direction) **_shaped_text_get_direction** ( shaped: [`RID`](class_rid.md) ) virtual[^virtual] const[^const]<div id="class_textserverextension_private_method__shaped_text_get_direction"></div>

**Optional.** 

Returns direction of the text.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_textserverextension_private_method__shaped_text_get_dominant_direction_in_range"></div>

[`int`](class_int.md) **_shaped_text_get_dominant_direction_in_range** ( shaped: [`RID`](class_rid.md), start: [`int`](class_int.md), end: [`int`](class_int.md) ) virtual[^virtual] const[^const]<div id="class_textserverextension_private_method__shaped_text_get_dominant_direction_in_range"></div>

**Optional.** 

Returns dominant direction of in the range of text.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_textserverextension_private_method__shaped_text_get_ellipsis_glyph_count"></div>

[`int`](class_int.md) **_shaped_text_get_ellipsis_glyph_count** ( shaped: [`RID`](class_rid.md) ) virtual[^virtual] const[^const]<div id="class_textserverextension_private_method__shaped_text_get_ellipsis_glyph_count"></div>

**Required.** 

Returns number of glyphs in the ellipsis.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_textserverextension_private_method__shaped_text_get_ellipsis_glyphs"></div>

`const Glyph*` **_shaped_text_get_ellipsis_glyphs** ( shaped: [`RID`](class_rid.md) ) virtual[^virtual] const[^const]<div id="class_textserverextension_private_method__shaped_text_get_ellipsis_glyphs"></div>

**Required.** 

Returns array of the glyphs in the ellipsis.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_textserverextension_private_method__shaped_text_get_ellipsis_pos"></div>

[`int`](class_int.md) **_shaped_text_get_ellipsis_pos** ( shaped: [`RID`](class_rid.md) ) virtual[^virtual] const[^const]<div id="class_textserverextension_private_method__shaped_text_get_ellipsis_pos"></div>

**Required.** 

Returns position of the ellipsis.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_textserverextension_private_method__shaped_text_get_glyph_count"></div>

[`int`](class_int.md) **_shaped_text_get_glyph_count** ( shaped: [`RID`](class_rid.md) ) virtual[^virtual] const[^const]<div id="class_textserverextension_private_method__shaped_text_get_glyph_count"></div>

**Required.** 

Returns number of glyphs in the buffer.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_textserverextension_private_method__shaped_text_get_glyphs"></div>

`const Glyph*` **_shaped_text_get_glyphs** ( shaped: [`RID`](class_rid.md) ) virtual[^virtual] const[^const]<div id="class_textserverextension_private_method__shaped_text_get_glyphs"></div>

**Required.** 

Returns an array of glyphs in the visual order.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_textserverextension_private_method__shaped_text_get_grapheme_bounds"></div>

[`Vector2`](class_vector2.md) **_shaped_text_get_grapheme_bounds** ( shaped: [`RID`](class_rid.md), pos: [`int`](class_int.md) ) virtual[^virtual] const[^const]<div id="class_textserverextension_private_method__shaped_text_get_grapheme_bounds"></div>

**Optional.** 

Returns composite character's bounds as offsets from the start of the line.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_textserverextension_private_method__shaped_text_get_inferred_direction"></div>

[Direction](#enum_textserver_direction) **_shaped_text_get_inferred_direction** ( shaped: [`RID`](class_rid.md) ) virtual[^virtual] const[^const]<div id="class_textserverextension_private_method__shaped_text_get_inferred_direction"></div>

**Optional.** 

Returns direction of the text, inferred by the BiDi algorithm.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_textserverextension_private_method__shaped_text_get_line_breaks"></div>

[`PackedInt32Array`](class_packedint32array.md) **_shaped_text_get_line_breaks** ( shaped: [`RID`](class_rid.md), width: [`float`](class_float.md), start: [`int`](class_int.md), break_flags: [LineBreakFlag](#enum_textserver_linebreakflag) ) virtual[^virtual] const[^const]<div id="class_textserverextension_private_method__shaped_text_get_line_breaks"></div>

**Optional.** 

Breaks text to the lines and returns character ranges for each line.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_textserverextension_private_method__shaped_text_get_line_breaks_adv"></div>

[`PackedInt32Array`](class_packedint32array.md) **_shaped_text_get_line_breaks_adv** ( shaped: [`RID`](class_rid.md), width: [`PackedFloat32Array`](class_packedfloat32array.md), start: [`int`](class_int.md), once: [`bool`](class_bool.md), break_flags: [LineBreakFlag](#enum_textserver_linebreakflag) ) virtual[^virtual] const[^const]<div id="class_textserverextension_private_method__shaped_text_get_line_breaks_adv"></div>

**Optional.** 

Breaks text to the lines and columns. Returns character ranges for each segment.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_textserverextension_private_method__shaped_text_get_object_glyph"></div>

[`int`](class_int.md) **_shaped_text_get_object_glyph** ( shaped: [`RID`](class_rid.md), key: [`Variant`](class_variant.md) ) virtual[^virtual] const[^const]<div id="class_textserverextension_private_method__shaped_text_get_object_glyph"></div>

**Required.** 

Returns the glyph index of the inline object.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_textserverextension_private_method__shaped_text_get_object_range"></div>

[`Vector2i`](class_vector2i.md) **_shaped_text_get_object_range** ( shaped: [`RID`](class_rid.md), key: [`Variant`](class_variant.md) ) virtual[^virtual] const[^const]<div id="class_textserverextension_private_method__shaped_text_get_object_range"></div>

**Required.** 

Returns the character range of the inline object.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_textserverextension_private_method__shaped_text_get_object_rect"></div>

[`Rect2`](class_rect2.md) **_shaped_text_get_object_rect** ( shaped: [`RID`](class_rid.md), key: [`Variant`](class_variant.md) ) virtual[^virtual] const[^const]<div id="class_textserverextension_private_method__shaped_text_get_object_rect"></div>

**Required.** 

Returns bounding rectangle of the inline object.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_textserverextension_private_method__shaped_text_get_objects"></div>

[`Array`](class_array.md) **_shaped_text_get_objects** ( shaped: [`RID`](class_rid.md) ) virtual[^virtual] const[^const]<div id="class_textserverextension_private_method__shaped_text_get_objects"></div>

**Required.** 

Returns array of inline objects.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_textserverextension_private_method__shaped_text_get_orientation"></div>

[Orientation](#enum_textserver_orientation) **_shaped_text_get_orientation** ( shaped: [`RID`](class_rid.md) ) virtual[^virtual] const[^const]<div id="class_textserverextension_private_method__shaped_text_get_orientation"></div>

**Optional.** 

Returns text orientation.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_textserverextension_private_method__shaped_text_get_parent"></div>

[`RID`](class_rid.md) **_shaped_text_get_parent** ( shaped: [`RID`](class_rid.md) ) virtual[^virtual] const[^const]<div id="class_textserverextension_private_method__shaped_text_get_parent"></div>

**Required.** 

Returns the parent buffer from which the substring originates.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_textserverextension_private_method__shaped_text_get_preserve_control"></div>

[`bool`](class_bool.md) **_shaped_text_get_preserve_control** ( shaped: [`RID`](class_rid.md) ) virtual[^virtual] const[^const]<div id="class_textserverextension_private_method__shaped_text_get_preserve_control"></div>

**Optional.** 

Returns `true` if text buffer is configured to display control characters.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_textserverextension_private_method__shaped_text_get_preserve_invalid"></div>

[`bool`](class_bool.md) **_shaped_text_get_preserve_invalid** ( shaped: [`RID`](class_rid.md) ) virtual[^virtual] const[^const]<div id="class_textserverextension_private_method__shaped_text_get_preserve_invalid"></div>

**Optional.** 

Returns `true` if text buffer is configured to display hexadecimal codes in place of invalid characters.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_textserverextension_private_method__shaped_text_get_range"></div>

[`Vector2i`](class_vector2i.md) **_shaped_text_get_range** ( shaped: [`RID`](class_rid.md) ) virtual[^virtual] const[^const]<div id="class_textserverextension_private_method__shaped_text_get_range"></div>

**Required.** 

Returns substring buffer character range in the parent buffer.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_textserverextension_private_method__shaped_text_get_selection"></div>

[`PackedVector2Array`](class_packedvector2array.md) **_shaped_text_get_selection** ( shaped: [`RID`](class_rid.md), start: [`int`](class_int.md), end: [`int`](class_int.md) ) virtual[^virtual] const[^const]<div id="class_textserverextension_private_method__shaped_text_get_selection"></div>

**Optional.** 

Returns selection rectangles for the specified character range.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_textserverextension_private_method__shaped_text_get_size"></div>

[`Vector2`](class_vector2.md) **_shaped_text_get_size** ( shaped: [`RID`](class_rid.md) ) virtual[^virtual] const[^const]<div id="class_textserverextension_private_method__shaped_text_get_size"></div>

**Required.** 

Returns size of the text.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_textserverextension_private_method__shaped_text_get_spacing"></div>

[`int`](class_int.md) **_shaped_text_get_spacing** ( shaped: [`RID`](class_rid.md), spacing: [SpacingType](#enum_textserver_spacingtype) ) virtual[^virtual] const[^const]<div id="class_textserverextension_private_method__shaped_text_get_spacing"></div>

**Optional.** 

Returns extra spacing added between glyphs or lines in pixels.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_textserverextension_private_method__shaped_text_get_trim_pos"></div>

[`int`](class_int.md) **_shaped_text_get_trim_pos** ( shaped: [`RID`](class_rid.md) ) virtual[^virtual] const[^const]<div id="class_textserverextension_private_method__shaped_text_get_trim_pos"></div>

**Required.** 

Returns the position of the overrun trim.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_textserverextension_private_method__shaped_text_get_underline_position"></div>

[`float`](class_float.md) **_shaped_text_get_underline_position** ( shaped: [`RID`](class_rid.md) ) virtual[^virtual] const[^const]<div id="class_textserverextension_private_method__shaped_text_get_underline_position"></div>

**Required.** 

Returns pixel offset of the underline below the baseline.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_textserverextension_private_method__shaped_text_get_underline_thickness"></div>

[`float`](class_float.md) **_shaped_text_get_underline_thickness** ( shaped: [`RID`](class_rid.md) ) virtual[^virtual] const[^const]<div id="class_textserverextension_private_method__shaped_text_get_underline_thickness"></div>

**Required.** 

Returns thickness of the underline.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_textserverextension_private_method__shaped_text_get_width"></div>

[`float`](class_float.md) **_shaped_text_get_width** ( shaped: [`RID`](class_rid.md) ) virtual[^virtual] const[^const]<div id="class_textserverextension_private_method__shaped_text_get_width"></div>

**Required.** 

Returns width (for horizontal layout) or height (for vertical) of the text.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_textserverextension_private_method__shaped_text_get_word_breaks"></div>

[`PackedInt32Array`](class_packedint32array.md) **_shaped_text_get_word_breaks** ( shaped: [`RID`](class_rid.md), grapheme_flags: [GraphemeFlag](#enum_textserver_graphemeflag), skip_grapheme_flags: [GraphemeFlag](#enum_textserver_graphemeflag) ) virtual[^virtual] const[^const]<div id="class_textserverextension_private_method__shaped_text_get_word_breaks"></div>

**Optional.** 

Breaks text into words and returns array of character ranges. Use `grapheme_flags` to set what characters are used for breaking (see [GraphemeFlag](#enum_textserver_graphemeflag)).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_textserverextension_private_method__shaped_text_hit_test_grapheme"></div>

[`int`](class_int.md) **_shaped_text_hit_test_grapheme** ( shaped: [`RID`](class_rid.md), coord: [`float`](class_float.md) ) virtual[^virtual] const[^const]<div id="class_textserverextension_private_method__shaped_text_hit_test_grapheme"></div>

**Optional.** 

Returns grapheme index at the specified pixel offset at the baseline, or `-1` if none is found.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_textserverextension_private_method__shaped_text_hit_test_position"></div>

[`int`](class_int.md) **_shaped_text_hit_test_position** ( shaped: [`RID`](class_rid.md), coord: [`float`](class_float.md) ) virtual[^virtual] const[^const]<div id="class_textserverextension_private_method__shaped_text_hit_test_position"></div>

**Optional.** 

Returns caret character offset at the specified pixel offset at the baseline. This function always returns a valid position.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_textserverextension_private_method__shaped_text_is_ready"></div>

[`bool`](class_bool.md) **_shaped_text_is_ready** ( shaped: [`RID`](class_rid.md) ) virtual[^virtual] const[^const]<div id="class_textserverextension_private_method__shaped_text_is_ready"></div>

**Required.** 

Returns `true` if buffer is successfully shaped.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_textserverextension_private_method__shaped_text_next_character_pos"></div>

[`int`](class_int.md) **_shaped_text_next_character_pos** ( shaped: [`RID`](class_rid.md), pos: [`int`](class_int.md) ) virtual[^virtual] const[^const]<div id="class_textserverextension_private_method__shaped_text_next_character_pos"></div>

**Optional.** 

Returns composite character end position closest to the `pos`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_textserverextension_private_method__shaped_text_next_grapheme_pos"></div>

[`int`](class_int.md) **_shaped_text_next_grapheme_pos** ( shaped: [`RID`](class_rid.md), pos: [`int`](class_int.md) ) virtual[^virtual] const[^const]<div id="class_textserverextension_private_method__shaped_text_next_grapheme_pos"></div>

**Optional.** 

Returns grapheme end position closest to the `pos`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_textserverextension_private_method__shaped_text_overrun_trim_to_width"></div>

`void` **_shaped_text_overrun_trim_to_width** ( shaped: [`RID`](class_rid.md), width: [`float`](class_float.md), trim_flags: [TextOverrunFlag](#enum_textserver_textoverrunflag) ) virtual[^virtual]<div id="class_textserverextension_private_method__shaped_text_overrun_trim_to_width"></div>

**Optional.** 

Trims text if it exceeds the given width.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_textserverextension_private_method__shaped_text_prev_character_pos"></div>

[`int`](class_int.md) **_shaped_text_prev_character_pos** ( shaped: [`RID`](class_rid.md), pos: [`int`](class_int.md) ) virtual[^virtual] const[^const]<div id="class_textserverextension_private_method__shaped_text_prev_character_pos"></div>

**Optional.** 

Returns composite character start position closest to the `pos`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_textserverextension_private_method__shaped_text_prev_grapheme_pos"></div>

[`int`](class_int.md) **_shaped_text_prev_grapheme_pos** ( shaped: [`RID`](class_rid.md), pos: [`int`](class_int.md) ) virtual[^virtual] const[^const]<div id="class_textserverextension_private_method__shaped_text_prev_grapheme_pos"></div>

**Optional.** 

Returns grapheme start position closest to the `pos`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_textserverextension_private_method__shaped_text_resize_object"></div>

[`bool`](class_bool.md) **_shaped_text_resize_object** ( shaped: [`RID`](class_rid.md), key: [`Variant`](class_variant.md), size: [`Vector2`](class_vector2.md), inline_align: [InlineAlignment](#enum_@globalscope_inlinealignment), baseline: [`float`](class_float.md) ) virtual[^virtual]<div id="class_textserverextension_private_method__shaped_text_resize_object"></div>

**Required.** 

Sets new size and alignment of embedded object.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_textserverextension_private_method__shaped_text_set_bidi_override"></div>

`void` **_shaped_text_set_bidi_override** ( shaped: [`RID`](class_rid.md), override: [`Array`](class_array.md) ) virtual[^virtual]<div id="class_textserverextension_private_method__shaped_text_set_bidi_override"></div>

**Optional.** 

Overrides BiDi for the structured text.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_textserverextension_private_method__shaped_text_set_custom_ellipsis"></div>

`void` **_shaped_text_set_custom_ellipsis** ( shaped: [`RID`](class_rid.md), char: [`int`](class_int.md) ) virtual[^virtual]<div id="class_textserverextension_private_method__shaped_text_set_custom_ellipsis"></div>

**Optional.** 

Sets ellipsis character used for text clipping.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_textserverextension_private_method__shaped_text_set_custom_punctuation"></div>

`void` **_shaped_text_set_custom_punctuation** ( shaped: [`RID`](class_rid.md), punct: [`String`](class_string.md) ) virtual[^virtual]<div id="class_textserverextension_private_method__shaped_text_set_custom_punctuation"></div>

**Optional.** 

Sets custom punctuation character list, used for word breaking. If set to empty string, server defaults are used.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_textserverextension_private_method__shaped_text_set_direction"></div>

`void` **_shaped_text_set_direction** ( shaped: [`RID`](class_rid.md), direction: [Direction](#enum_textserver_direction) ) virtual[^virtual]<div id="class_textserverextension_private_method__shaped_text_set_direction"></div>

**Optional.** 

Sets desired text direction. If set to [`TextServer.DIRECTION_AUTO`](class_textserver.md#class_textserver_constant_direction_auto), direction will be detected based on the buffer contents and current locale.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_textserverextension_private_method__shaped_text_set_orientation"></div>

`void` **_shaped_text_set_orientation** ( shaped: [`RID`](class_rid.md), orientation: [Orientation](#enum_textserver_orientation) ) virtual[^virtual]<div id="class_textserverextension_private_method__shaped_text_set_orientation"></div>

**Optional.** 

Sets desired text orientation.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_textserverextension_private_method__shaped_text_set_preserve_control"></div>

`void` **_shaped_text_set_preserve_control** ( shaped: [`RID`](class_rid.md), enabled: [`bool`](class_bool.md) ) virtual[^virtual]<div id="class_textserverextension_private_method__shaped_text_set_preserve_control"></div>

**Optional.** 

If set to `true` text buffer will display control characters.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_textserverextension_private_method__shaped_text_set_preserve_invalid"></div>

`void` **_shaped_text_set_preserve_invalid** ( shaped: [`RID`](class_rid.md), enabled: [`bool`](class_bool.md) ) virtual[^virtual]<div id="class_textserverextension_private_method__shaped_text_set_preserve_invalid"></div>

**Optional.** 

If set to `true` text buffer will display invalid characters as hexadecimal codes, otherwise nothing is displayed.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_textserverextension_private_method__shaped_text_set_spacing"></div>

`void` **_shaped_text_set_spacing** ( shaped: [`RID`](class_rid.md), spacing: [SpacingType](#enum_textserver_spacingtype), value: [`int`](class_int.md) ) virtual[^virtual]<div id="class_textserverextension_private_method__shaped_text_set_spacing"></div>

**Optional.** 

Sets extra spacing added between glyphs or lines in pixels.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_textserverextension_private_method__shaped_text_shape"></div>

[`bool`](class_bool.md) **_shaped_text_shape** ( shaped: [`RID`](class_rid.md) ) virtual[^virtual]<div id="class_textserverextension_private_method__shaped_text_shape"></div>

**Required.** 

Shapes buffer if it's not shaped. Returns `true` if the string is shaped successfully.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_textserverextension_private_method__shaped_text_sort_logical"></div>

`const Glyph*` **_shaped_text_sort_logical** ( shaped: [`RID`](class_rid.md) ) virtual[^virtual]<div id="class_textserverextension_private_method__shaped_text_sort_logical"></div>

**Required.** 

Returns text glyphs in the logical order.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_textserverextension_private_method__shaped_text_substr"></div>

[`RID`](class_rid.md) **_shaped_text_substr** ( shaped: [`RID`](class_rid.md), start: [`int`](class_int.md), length: [`int`](class_int.md) ) virtual[^virtual] const[^const]<div id="class_textserverextension_private_method__shaped_text_substr"></div>

**Required.** 

Returns text buffer for the substring of the text in the `shaped` text buffer (including inline objects).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_textserverextension_private_method__shaped_text_tab_align"></div>

[`float`](class_float.md) **_shaped_text_tab_align** ( shaped: [`RID`](class_rid.md), tab_stops: [`PackedFloat32Array`](class_packedfloat32array.md) ) virtual[^virtual]<div id="class_textserverextension_private_method__shaped_text_tab_align"></div>

**Optional.** 

Aligns shaped text to the given tab-stops.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_textserverextension_private_method__shaped_text_update_breaks"></div>

[`bool`](class_bool.md) **_shaped_text_update_breaks** ( shaped: [`RID`](class_rid.md) ) virtual[^virtual]<div id="class_textserverextension_private_method__shaped_text_update_breaks"></div>

**Optional.** 

Updates break points in the shaped text. This method is called by default implementation of text breaking functions.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_textserverextension_private_method__shaped_text_update_justification_ops"></div>

[`bool`](class_bool.md) **_shaped_text_update_justification_ops** ( shaped: [`RID`](class_rid.md) ) virtual[^virtual]<div id="class_textserverextension_private_method__shaped_text_update_justification_ops"></div>

**Optional.** 

Updates justification points in the shaped text. This method is called by default implementation of text justification functions.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_textserverextension_private_method__spoof_check"></div>

[`bool`](class_bool.md) **_spoof_check** ( string: [`String`](class_string.md) ) virtual[^virtual] const[^const]<div id="class_textserverextension_private_method__spoof_check"></div>

**Optional.** 

Returns `true` if `string` is likely to be an attempt at confusing the reader.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_textserverextension_private_method__string_get_character_breaks"></div>

[`PackedInt32Array`](class_packedint32array.md) **_string_get_character_breaks** ( string: [`String`](class_string.md), language: [`String`](class_string.md) ) virtual[^virtual] const[^const]<div id="class_textserverextension_private_method__string_get_character_breaks"></div>

**Optional.** 

Returns array of the composite character boundaries.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_textserverextension_private_method__string_get_word_breaks"></div>

[`PackedInt32Array`](class_packedint32array.md) **_string_get_word_breaks** ( string: [`String`](class_string.md), language: [`String`](class_string.md), chars_per_line: [`int`](class_int.md) ) virtual[^virtual] const[^const]<div id="class_textserverextension_private_method__string_get_word_breaks"></div>

**Optional.** 

Returns an array of the word break boundaries. Elements in the returned array are the offsets of the start and end of words. Therefore the length of the array is always even.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_textserverextension_private_method__string_to_lower"></div>

[`String`](class_string.md) **_string_to_lower** ( string: [`String`](class_string.md), language: [`String`](class_string.md) ) virtual[^virtual] const[^const]<div id="class_textserverextension_private_method__string_to_lower"></div>

**Optional.** 

Returns the string converted to lowercase.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_textserverextension_private_method__string_to_title"></div>

[`String`](class_string.md) **_string_to_title** ( string: [`String`](class_string.md), language: [`String`](class_string.md) ) virtual[^virtual] const[^const]<div id="class_textserverextension_private_method__string_to_title"></div>

**Optional.** 

Returns the string converted to title case.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_textserverextension_private_method__string_to_upper"></div>

[`String`](class_string.md) **_string_to_upper** ( string: [`String`](class_string.md), language: [`String`](class_string.md) ) virtual[^virtual] const[^const]<div id="class_textserverextension_private_method__string_to_upper"></div>

**Optional.** 

Returns the string converted to uppercase.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_textserverextension_private_method__strip_diacritics"></div>

[`String`](class_string.md) **_strip_diacritics** ( string: [`String`](class_string.md) ) virtual[^virtual] const[^const]<div id="class_textserverextension_private_method__strip_diacritics"></div>

**Optional.** 

Strips diacritics from the string.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_textserverextension_private_method__tag_to_name"></div>

[`String`](class_string.md) **_tag_to_name** ( tag: [`int`](class_int.md) ) virtual[^virtual] const[^const]<div id="class_textserverextension_private_method__tag_to_name"></div>

**Optional.** 

Converts OpenType tag to readable feature, variation, script, or language name.

[^virtual]: 本方法通常需要用户覆盖才能生效。
[^const]: 本方法无副作用，不会修改该实例的任何成员变量。
[^vararg]: 本方法除了能接受在此处描述的参数外，还能够继续接受任意数量的参数。
[^constructor]: 本方法用于构造某个类型。
[^static]: 调用本方法无需实例，可直接使用类名进行调用。
[^operator]: 本方法描述的是使用本类型作为左操作数的有效运算符。
[^bitfield]: 这个值是由下列位标志构成位掩码的整数。
[^void]: 无返回值。
