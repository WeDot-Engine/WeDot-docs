<!-- ⚠ 请勿编辑本文件 ⚠ -->
<!-- 本文档使用脚本从 WeDot 引擎源码仓库生成。 -->
<!-- 生成脚本：https://github.com/WeDot-Engine/WeDot/tree/4.3/doc/tools/make_md.py； -->
<!-- 原文件：https://github.com/WeDot-Engine/WeDot/tree/4.3/doc/classes/TextServer.xml。 -->

<div id="_class_textserver"></div>

# TextServer

**继承：** [`RefCounted`](class_refcounted.md) **<** [`Object`](class_object.md)

**派生：** [`TextServerExtension`](class_textserverextension.md)

A server interface for font management and text rendering.

## 描述

**TextServer** is the API backend for managing fonts and rendering text.

 **Note:** This is a low-level API, consider using [`TextLine`](class_textline.md), [`TextParagraph`](class_textparagraph.md), and [`Font`](class_font.md) classes instead.

This is an abstract class, so to get the currently active **TextServer** instance, use the following code:



```gdscript

    var ts = TextServerManager.get_primary_interface()
```

```csharp

    var ts = TextServerManager.GetPrimaryInterface();
```







## 方法

| [`RID`](class_rid.md)                                       | [`create_font`](#class_textserver_method_create_font) ( )                                                                                                                                                                                                                                                                                                                                |
| [`RID`](class_rid.md)                                       | [`create_font_linked_variation`](#class_textserver_method_create_font_linked_variation) ( font_rid: [`RID`](class_rid.md) )                                                                                                                                                                                                                                                              |
| [`RID`](class_rid.md)                                       | [`create_shaped_text`](#class_textserver_method_create_shaped_text) ( direction: [Direction](#enum_textserver_direction) = 0, orientation: [Orientation](#enum_textserver_orientation) = 0 )                                                                                                                                                                                             |
| `void`                                                      | [`draw_hex_code_box`](#class_textserver_method_draw_hex_code_box) ( canvas: [`RID`](class_rid.md), size: [`int`](class_int.md), pos: [`Vector2`](class_vector2.md), index: [`int`](class_int.md), color: [`Color`](class_color.md) ) const[^const]                                                                                                                                       |
| `void`                                                      | [`font_clear_glyphs`](#class_textserver_method_font_clear_glyphs) ( font_rid: [`RID`](class_rid.md), size: [`Vector2i`](class_vector2i.md) )                                                                                                                                                                                                                                             |
| `void`                                                      | [`font_clear_kerning_map`](#class_textserver_method_font_clear_kerning_map) ( font_rid: [`RID`](class_rid.md), size: [`int`](class_int.md) )                                                                                                                                                                                                                                             |
| `void`                                                      | [`font_clear_size_cache`](#class_textserver_method_font_clear_size_cache) ( font_rid: [`RID`](class_rid.md) )                                                                                                                                                                                                                                                                            |
| `void`                                                      | [`font_clear_textures`](#class_textserver_method_font_clear_textures) ( font_rid: [`RID`](class_rid.md), size: [`Vector2i`](class_vector2i.md) )                                                                                                                                                                                                                                         |
| `void`                                                      | [`font_draw_glyph`](#class_textserver_method_font_draw_glyph) ( font_rid: [`RID`](class_rid.md), canvas: [`RID`](class_rid.md), size: [`int`](class_int.md), pos: [`Vector2`](class_vector2.md), index: [`int`](class_int.md), color: [`Color`](class_color.md) = Color(1, 1, 1, 1) ) const[^const]                                                                                      |
| `void`                                                      | [`font_draw_glyph_outline`](#class_textserver_method_font_draw_glyph_outline) ( font_rid: [`RID`](class_rid.md), canvas: [`RID`](class_rid.md), size: [`int`](class_int.md), outline_size: [`int`](class_int.md), pos: [`Vector2`](class_vector2.md), index: [`int`](class_int.md), color: [`Color`](class_color.md) = Color(1, 1, 1, 1) ) const[^const]                                 |
| [FontAntialiasing](#enum_textserver_fontantialiasing)       | [`font_get_antialiasing`](#class_textserver_method_font_get_antialiasing) ( font_rid: [`RID`](class_rid.md) ) const[^const]                                                                                                                                                                                                                                                              |
| [`float`](class_float.md)                                   | [`font_get_ascent`](#class_textserver_method_font_get_ascent) ( font_rid: [`RID`](class_rid.md), size: [`int`](class_int.md) ) const[^const]                                                                                                                                                                                                                                             |
| [`float`](class_float.md)                                   | [`font_get_baseline_offset`](#class_textserver_method_font_get_baseline_offset) ( font_rid: [`RID`](class_rid.md) ) const[^const]                                                                                                                                                                                                                                                        |
| [`int`](class_int.md)                                       | [`font_get_char_from_glyph_index`](#class_textserver_method_font_get_char_from_glyph_index) ( font_rid: [`RID`](class_rid.md), size: [`int`](class_int.md), glyph_index: [`int`](class_int.md) ) const[^const]                                                                                                                                                                           |
| [`float`](class_float.md)                                   | [`font_get_descent`](#class_textserver_method_font_get_descent) ( font_rid: [`RID`](class_rid.md), size: [`int`](class_int.md) ) const[^const]                                                                                                                                                                                                                                           |
| [`bool`](class_bool.md)                                     | [`font_get_disable_embedded_bitmaps`](#class_textserver_method_font_get_disable_embedded_bitmaps) ( font_rid: [`RID`](class_rid.md) ) const[^const]                                                                                                                                                                                                                                      |
| [`float`](class_float.md)                                   | [`font_get_embolden`](#class_textserver_method_font_get_embolden) ( font_rid: [`RID`](class_rid.md) ) const[^const]                                                                                                                                                                                                                                                                      |
| [`int`](class_int.md)                                       | [`font_get_face_count`](#class_textserver_method_font_get_face_count) ( font_rid: [`RID`](class_rid.md) ) const[^const]                                                                                                                                                                                                                                                                  |
| [`int`](class_int.md)                                       | [`font_get_face_index`](#class_textserver_method_font_get_face_index) ( font_rid: [`RID`](class_rid.md) ) const[^const]                                                                                                                                                                                                                                                                  |
| [`int`](class_int.md)                                       | [`font_get_fixed_size`](#class_textserver_method_font_get_fixed_size) ( font_rid: [`RID`](class_rid.md) ) const[^const]                                                                                                                                                                                                                                                                  |
| [FixedSizeScaleMode](#enum_textserver_fixedsizescalemode)   | [`font_get_fixed_size_scale_mode`](#class_textserver_method_font_get_fixed_size_scale_mode) ( font_rid: [`RID`](class_rid.md) ) const[^const]                                                                                                                                                                                                                                            |
| [`bool`](class_bool.md)                                     | [`font_get_generate_mipmaps`](#class_textserver_method_font_get_generate_mipmaps) ( font_rid: [`RID`](class_rid.md) ) const[^const]                                                                                                                                                                                                                                                      |
| [`float`](class_float.md)                                   | [`font_get_global_oversampling`](#class_textserver_method_font_get_global_oversampling) ( ) const[^const]                                                                                                                                                                                                                                                                                |
| [`Vector2`](class_vector2.md)                               | [`font_get_glyph_advance`](#class_textserver_method_font_get_glyph_advance) ( font_rid: [`RID`](class_rid.md), size: [`int`](class_int.md), glyph: [`int`](class_int.md) ) const[^const]                                                                                                                                                                                                 |
| [`Dictionary`](class_dictionary.md)                         | [`font_get_glyph_contours`](#class_textserver_method_font_get_glyph_contours) ( font: [`RID`](class_rid.md), size: [`int`](class_int.md), index: [`int`](class_int.md) ) const[^const]                                                                                                                                                                                                   |
| [`int`](class_int.md)                                       | [`font_get_glyph_index`](#class_textserver_method_font_get_glyph_index) ( font_rid: [`RID`](class_rid.md), size: [`int`](class_int.md), char: [`int`](class_int.md), variation_selector: [`int`](class_int.md) ) const[^const]                                                                                                                                                           |
| [`PackedInt32Array`](class_packedint32array.md)             | [`font_get_glyph_list`](#class_textserver_method_font_get_glyph_list) ( font_rid: [`RID`](class_rid.md), size: [`Vector2i`](class_vector2i.md) ) const[^const]                                                                                                                                                                                                                           |
| [`Vector2`](class_vector2.md)                               | [`font_get_glyph_offset`](#class_textserver_method_font_get_glyph_offset) ( font_rid: [`RID`](class_rid.md), size: [`Vector2i`](class_vector2i.md), glyph: [`int`](class_int.md) ) const[^const]                                                                                                                                                                                         |
| [`Vector2`](class_vector2.md)                               | [`font_get_glyph_size`](#class_textserver_method_font_get_glyph_size) ( font_rid: [`RID`](class_rid.md), size: [`Vector2i`](class_vector2i.md), glyph: [`int`](class_int.md) ) const[^const]                                                                                                                                                                                             |
| [`int`](class_int.md)                                       | [`font_get_glyph_texture_idx`](#class_textserver_method_font_get_glyph_texture_idx) ( font_rid: [`RID`](class_rid.md), size: [`Vector2i`](class_vector2i.md), glyph: [`int`](class_int.md) ) const[^const]                                                                                                                                                                               |
| [`RID`](class_rid.md)                                       | [`font_get_glyph_texture_rid`](#class_textserver_method_font_get_glyph_texture_rid) ( font_rid: [`RID`](class_rid.md), size: [`Vector2i`](class_vector2i.md), glyph: [`int`](class_int.md) ) const[^const]                                                                                                                                                                               |
| [`Vector2`](class_vector2.md)                               | [`font_get_glyph_texture_size`](#class_textserver_method_font_get_glyph_texture_size) ( font_rid: [`RID`](class_rid.md), size: [`Vector2i`](class_vector2i.md), glyph: [`int`](class_int.md) ) const[^const]                                                                                                                                                                             |
| [`Rect2`](class_rect2.md)                                   | [`font_get_glyph_uv_rect`](#class_textserver_method_font_get_glyph_uv_rect) ( font_rid: [`RID`](class_rid.md), size: [`Vector2i`](class_vector2i.md), glyph: [`int`](class_int.md) ) const[^const]                                                                                                                                                                                       |
| [Hinting](#enum_textserver_hinting)                         | [`font_get_hinting`](#class_textserver_method_font_get_hinting) ( font_rid: [`RID`](class_rid.md) ) const[^const]                                                                                                                                                                                                                                                                        |
| [`Vector2`](class_vector2.md)                               | [`font_get_kerning`](#class_textserver_method_font_get_kerning) ( font_rid: [`RID`](class_rid.md), size: [`int`](class_int.md), glyph_pair: [`Vector2i`](class_vector2i.md) ) const[^const]                                                                                                                                                                                              |
| [Array](class_array.md) [`Vector2i`](class_vector2i.md)     | [`font_get_kerning_list`](#class_textserver_method_font_get_kerning_list) ( font_rid: [`RID`](class_rid.md), size: [`int`](class_int.md) ) const[^const]                                                                                                                                                                                                                                 |
| [`bool`](class_bool.md)                                     | [`font_get_language_support_override`](#class_textserver_method_font_get_language_support_override) ( font_rid: [`RID`](class_rid.md), language: [`String`](class_string.md) )                                                                                                                                                                                                           |
| [`PackedStringArray`](class_packedstringarray.md)           | [`font_get_language_support_overrides`](#class_textserver_method_font_get_language_support_overrides) ( font_rid: [`RID`](class_rid.md) )                                                                                                                                                                                                                                                |
| [`int`](class_int.md)                                       | [`font_get_msdf_pixel_range`](#class_textserver_method_font_get_msdf_pixel_range) ( font_rid: [`RID`](class_rid.md) ) const[^const]                                                                                                                                                                                                                                                      |
| [`int`](class_int.md)                                       | [`font_get_msdf_size`](#class_textserver_method_font_get_msdf_size) ( font_rid: [`RID`](class_rid.md) ) const[^const]                                                                                                                                                                                                                                                                    |
| [`String`](class_string.md)                                 | [`font_get_name`](#class_textserver_method_font_get_name) ( font_rid: [`RID`](class_rid.md) ) const[^const]                                                                                                                                                                                                                                                                              |
| [`Dictionary`](class_dictionary.md)                         | [`font_get_opentype_feature_overrides`](#class_textserver_method_font_get_opentype_feature_overrides) ( font_rid: [`RID`](class_rid.md) ) const[^const]                                                                                                                                                                                                                                  |
| [`Dictionary`](class_dictionary.md)                         | [`font_get_ot_name_strings`](#class_textserver_method_font_get_ot_name_strings) ( font_rid: [`RID`](class_rid.md) ) const[^const]                                                                                                                                                                                                                                                        |
| [`float`](class_float.md)                                   | [`font_get_oversampling`](#class_textserver_method_font_get_oversampling) ( font_rid: [`RID`](class_rid.md) ) const[^const]                                                                                                                                                                                                                                                              |
| [`float`](class_float.md)                                   | [`font_get_scale`](#class_textserver_method_font_get_scale) ( font_rid: [`RID`](class_rid.md), size: [`int`](class_int.md) ) const[^const]                                                                                                                                                                                                                                               |
| [`bool`](class_bool.md)                                     | [`font_get_script_support_override`](#class_textserver_method_font_get_script_support_override) ( font_rid: [`RID`](class_rid.md), script: [`String`](class_string.md) )                                                                                                                                                                                                                 |
| [`PackedStringArray`](class_packedstringarray.md)           | [`font_get_script_support_overrides`](#class_textserver_method_font_get_script_support_overrides) ( font_rid: [`RID`](class_rid.md) )                                                                                                                                                                                                                                                    |
| [Array](class_array.md) [`Vector2i`](class_vector2i.md)     | [`font_get_size_cache_list`](#class_textserver_method_font_get_size_cache_list) ( font_rid: [`RID`](class_rid.md) ) const[^const]                                                                                                                                                                                                                                                        |
| [`int`](class_int.md)                                       | [`font_get_spacing`](#class_textserver_method_font_get_spacing) ( font_rid: [`RID`](class_rid.md), spacing: [SpacingType](#enum_textserver_spacingtype) ) const[^const]                                                                                                                                                                                                                  |
| [`int`](class_int.md)                                       | [`font_get_stretch`](#class_textserver_method_font_get_stretch) ( font_rid: [`RID`](class_rid.md) ) const[^const]                                                                                                                                                                                                                                                                        |
| [FontStyle](#enum_textserver_fontstyle)                     | [`font_get_style`](#class_textserver_method_font_get_style) ( font_rid: [`RID`](class_rid.md) ) const[^const]                                                                                                                                                                                                                                                                            |
| [`String`](class_string.md)                                 | [`font_get_style_name`](#class_textserver_method_font_get_style_name) ( font_rid: [`RID`](class_rid.md) ) const[^const]                                                                                                                                                                                                                                                                  |
| [SubpixelPositioning](#enum_textserver_subpixelpositioning) | [`font_get_subpixel_positioning`](#class_textserver_method_font_get_subpixel_positioning) ( font_rid: [`RID`](class_rid.md) ) const[^const]                                                                                                                                                                                                                                              |
| [`String`](class_string.md)                                 | [`font_get_supported_chars`](#class_textserver_method_font_get_supported_chars) ( font_rid: [`RID`](class_rid.md) ) const[^const]                                                                                                                                                                                                                                                        |
| [`int`](class_int.md)                                       | [`font_get_texture_count`](#class_textserver_method_font_get_texture_count) ( font_rid: [`RID`](class_rid.md), size: [`Vector2i`](class_vector2i.md) ) const[^const]                                                                                                                                                                                                                     |
| [`Image`](class_image.md)                                   | [`font_get_texture_image`](#class_textserver_method_font_get_texture_image) ( font_rid: [`RID`](class_rid.md), size: [`Vector2i`](class_vector2i.md), texture_index: [`int`](class_int.md) ) const[^const]                                                                                                                                                                               |
| [`PackedInt32Array`](class_packedint32array.md)             | [`font_get_texture_offsets`](#class_textserver_method_font_get_texture_offsets) ( font_rid: [`RID`](class_rid.md), size: [`Vector2i`](class_vector2i.md), texture_index: [`int`](class_int.md) ) const[^const]                                                                                                                                                                           |
| [`Transform2D`](class_transform2d.md)                       | [`font_get_transform`](#class_textserver_method_font_get_transform) ( font_rid: [`RID`](class_rid.md) ) const[^const]                                                                                                                                                                                                                                                                    |
| [`float`](class_float.md)                                   | [`font_get_underline_position`](#class_textserver_method_font_get_underline_position) ( font_rid: [`RID`](class_rid.md), size: [`int`](class_int.md) ) const[^const]                                                                                                                                                                                                                     |
| [`float`](class_float.md)                                   | [`font_get_underline_thickness`](#class_textserver_method_font_get_underline_thickness) ( font_rid: [`RID`](class_rid.md), size: [`int`](class_int.md) ) const[^const]                                                                                                                                                                                                                   |
| [`Dictionary`](class_dictionary.md)                         | [`font_get_variation_coordinates`](#class_textserver_method_font_get_variation_coordinates) ( font_rid: [`RID`](class_rid.md) ) const[^const]                                                                                                                                                                                                                                            |
| [`int`](class_int.md)                                       | [`font_get_weight`](#class_textserver_method_font_get_weight) ( font_rid: [`RID`](class_rid.md) ) const[^const]                                                                                                                                                                                                                                                                          |
| [`bool`](class_bool.md)                                     | [`font_has_char`](#class_textserver_method_font_has_char) ( font_rid: [`RID`](class_rid.md), char: [`int`](class_int.md) ) const[^const]                                                                                                                                                                                                                                                 |
| [`bool`](class_bool.md)                                     | [`font_is_allow_system_fallback`](#class_textserver_method_font_is_allow_system_fallback) ( font_rid: [`RID`](class_rid.md) ) const[^const]                                                                                                                                                                                                                                              |
| [`bool`](class_bool.md)                                     | [`font_is_force_autohinter`](#class_textserver_method_font_is_force_autohinter) ( font_rid: [`RID`](class_rid.md) ) const[^const]                                                                                                                                                                                                                                                        |
| [`bool`](class_bool.md)                                     | [`font_is_language_supported`](#class_textserver_method_font_is_language_supported) ( font_rid: [`RID`](class_rid.md), language: [`String`](class_string.md) ) const[^const]                                                                                                                                                                                                             |
| [`bool`](class_bool.md)                                     | [`font_is_multichannel_signed_distance_field`](#class_textserver_method_font_is_multichannel_signed_distance_field) ( font_rid: [`RID`](class_rid.md) ) const[^const]                                                                                                                                                                                                                    |
| [`bool`](class_bool.md)                                     | [`font_is_script_supported`](#class_textserver_method_font_is_script_supported) ( font_rid: [`RID`](class_rid.md), script: [`String`](class_string.md) ) const[^const]                                                                                                                                                                                                                   |
| `void`                                                      | [`font_remove_glyph`](#class_textserver_method_font_remove_glyph) ( font_rid: [`RID`](class_rid.md), size: [`Vector2i`](class_vector2i.md), glyph: [`int`](class_int.md) )                                                                                                                                                                                                               |
| `void`                                                      | [`font_remove_kerning`](#class_textserver_method_font_remove_kerning) ( font_rid: [`RID`](class_rid.md), size: [`int`](class_int.md), glyph_pair: [`Vector2i`](class_vector2i.md) )                                                                                                                                                                                                      |
| `void`                                                      | [`font_remove_language_support_override`](#class_textserver_method_font_remove_language_support_override) ( font_rid: [`RID`](class_rid.md), language: [`String`](class_string.md) )                                                                                                                                                                                                     |
| `void`                                                      | [`font_remove_script_support_override`](#class_textserver_method_font_remove_script_support_override) ( font_rid: [`RID`](class_rid.md), script: [`String`](class_string.md) )                                                                                                                                                                                                           |
| `void`                                                      | [`font_remove_size_cache`](#class_textserver_method_font_remove_size_cache) ( font_rid: [`RID`](class_rid.md), size: [`Vector2i`](class_vector2i.md) )                                                                                                                                                                                                                                   |
| `void`                                                      | [`font_remove_texture`](#class_textserver_method_font_remove_texture) ( font_rid: [`RID`](class_rid.md), size: [`Vector2i`](class_vector2i.md), texture_index: [`int`](class_int.md) )                                                                                                                                                                                                   |
| `void`                                                      | [`font_render_glyph`](#class_textserver_method_font_render_glyph) ( font_rid: [`RID`](class_rid.md), size: [`Vector2i`](class_vector2i.md), index: [`int`](class_int.md) )                                                                                                                                                                                                               |
| `void`                                                      | [`font_render_range`](#class_textserver_method_font_render_range) ( font_rid: [`RID`](class_rid.md), size: [`Vector2i`](class_vector2i.md), start: [`int`](class_int.md), end: [`int`](class_int.md) )                                                                                                                                                                                   |
| `void`                                                      | [`font_set_allow_system_fallback`](#class_textserver_method_font_set_allow_system_fallback) ( font_rid: [`RID`](class_rid.md), allow_system_fallback: [`bool`](class_bool.md) )                                                                                                                                                                                                          |
| `void`                                                      | [`font_set_antialiasing`](#class_textserver_method_font_set_antialiasing) ( font_rid: [`RID`](class_rid.md), antialiasing: [FontAntialiasing](#enum_textserver_fontantialiasing) )                                                                                                                                                                                                       |
| `void`                                                      | [`font_set_ascent`](#class_textserver_method_font_set_ascent) ( font_rid: [`RID`](class_rid.md), size: [`int`](class_int.md), ascent: [`float`](class_float.md) )                                                                                                                                                                                                                        |
| `void`                                                      | [`font_set_baseline_offset`](#class_textserver_method_font_set_baseline_offset) ( font_rid: [`RID`](class_rid.md), baseline_offset: [`float`](class_float.md) )                                                                                                                                                                                                                          |
| `void`                                                      | [`font_set_data`](#class_textserver_method_font_set_data) ( font_rid: [`RID`](class_rid.md), data: [`PackedByteArray`](class_packedbytearray.md) )                                                                                                                                                                                                                                       |
| `void`                                                      | [`font_set_descent`](#class_textserver_method_font_set_descent) ( font_rid: [`RID`](class_rid.md), size: [`int`](class_int.md), descent: [`float`](class_float.md) )                                                                                                                                                                                                                     |
| `void`                                                      | [`font_set_disable_embedded_bitmaps`](#class_textserver_method_font_set_disable_embedded_bitmaps) ( font_rid: [`RID`](class_rid.md), disable_embedded_bitmaps: [`bool`](class_bool.md) )                                                                                                                                                                                                 |
| `void`                                                      | [`font_set_embolden`](#class_textserver_method_font_set_embolden) ( font_rid: [`RID`](class_rid.md), strength: [`float`](class_float.md) )                                                                                                                                                                                                                                               |
| `void`                                                      | [`font_set_face_index`](#class_textserver_method_font_set_face_index) ( font_rid: [`RID`](class_rid.md), face_index: [`int`](class_int.md) )                                                                                                                                                                                                                                             |
| `void`                                                      | [`font_set_fixed_size`](#class_textserver_method_font_set_fixed_size) ( font_rid: [`RID`](class_rid.md), fixed_size: [`int`](class_int.md) )                                                                                                                                                                                                                                             |
| `void`                                                      | [`font_set_fixed_size_scale_mode`](#class_textserver_method_font_set_fixed_size_scale_mode) ( font_rid: [`RID`](class_rid.md), fixed_size_scale_mode: [FixedSizeScaleMode](#enum_textserver_fixedsizescalemode) )                                                                                                                                                                        |
| `void`                                                      | [`font_set_force_autohinter`](#class_textserver_method_font_set_force_autohinter) ( font_rid: [`RID`](class_rid.md), force_autohinter: [`bool`](class_bool.md) )                                                                                                                                                                                                                         |
| `void`                                                      | [`font_set_generate_mipmaps`](#class_textserver_method_font_set_generate_mipmaps) ( font_rid: [`RID`](class_rid.md), generate_mipmaps: [`bool`](class_bool.md) )                                                                                                                                                                                                                         |
| `void`                                                      | [`font_set_global_oversampling`](#class_textserver_method_font_set_global_oversampling) ( oversampling: [`float`](class_float.md) )                                                                                                                                                                                                                                                      |
| `void`                                                      | [`font_set_glyph_advance`](#class_textserver_method_font_set_glyph_advance) ( font_rid: [`RID`](class_rid.md), size: [`int`](class_int.md), glyph: [`int`](class_int.md), advance: [`Vector2`](class_vector2.md) )                                                                                                                                                                       |
| `void`                                                      | [`font_set_glyph_offset`](#class_textserver_method_font_set_glyph_offset) ( font_rid: [`RID`](class_rid.md), size: [`Vector2i`](class_vector2i.md), glyph: [`int`](class_int.md), offset: [`Vector2`](class_vector2.md) )                                                                                                                                                                |
| `void`                                                      | [`font_set_glyph_size`](#class_textserver_method_font_set_glyph_size) ( font_rid: [`RID`](class_rid.md), size: [`Vector2i`](class_vector2i.md), glyph: [`int`](class_int.md), gl_size: [`Vector2`](class_vector2.md) )                                                                                                                                                                   |
| `void`                                                      | [`font_set_glyph_texture_idx`](#class_textserver_method_font_set_glyph_texture_idx) ( font_rid: [`RID`](class_rid.md), size: [`Vector2i`](class_vector2i.md), glyph: [`int`](class_int.md), texture_idx: [`int`](class_int.md) )                                                                                                                                                         |
| `void`                                                      | [`font_set_glyph_uv_rect`](#class_textserver_method_font_set_glyph_uv_rect) ( font_rid: [`RID`](class_rid.md), size: [`Vector2i`](class_vector2i.md), glyph: [`int`](class_int.md), uv_rect: [`Rect2`](class_rect2.md) )                                                                                                                                                                 |
| `void`                                                      | [`font_set_hinting`](#class_textserver_method_font_set_hinting) ( font_rid: [`RID`](class_rid.md), hinting: [Hinting](#enum_textserver_hinting) )                                                                                                                                                                                                                                        |
| `void`                                                      | [`font_set_kerning`](#class_textserver_method_font_set_kerning) ( font_rid: [`RID`](class_rid.md), size: [`int`](class_int.md), glyph_pair: [`Vector2i`](class_vector2i.md), kerning: [`Vector2`](class_vector2.md) )                                                                                                                                                                    |
| `void`                                                      | [`font_set_language_support_override`](#class_textserver_method_font_set_language_support_override) ( font_rid: [`RID`](class_rid.md), language: [`String`](class_string.md), supported: [`bool`](class_bool.md) )                                                                                                                                                                       |
| `void`                                                      | [`font_set_msdf_pixel_range`](#class_textserver_method_font_set_msdf_pixel_range) ( font_rid: [`RID`](class_rid.md), msdf_pixel_range: [`int`](class_int.md) )                                                                                                                                                                                                                           |
| `void`                                                      | [`font_set_msdf_size`](#class_textserver_method_font_set_msdf_size) ( font_rid: [`RID`](class_rid.md), msdf_size: [`int`](class_int.md) )                                                                                                                                                                                                                                                |
| `void`                                                      | [`font_set_multichannel_signed_distance_field`](#class_textserver_method_font_set_multichannel_signed_distance_field) ( font_rid: [`RID`](class_rid.md), msdf: [`bool`](class_bool.md) )                                                                                                                                                                                                 |
| `void`                                                      | [`font_set_name`](#class_textserver_method_font_set_name) ( font_rid: [`RID`](class_rid.md), name: [`String`](class_string.md) )                                                                                                                                                                                                                                                         |
| `void`                                                      | [`font_set_opentype_feature_overrides`](#class_textserver_method_font_set_opentype_feature_overrides) ( font_rid: [`RID`](class_rid.md), overrides: [`Dictionary`](class_dictionary.md) )                                                                                                                                                                                                |
| `void`                                                      | [`font_set_oversampling`](#class_textserver_method_font_set_oversampling) ( font_rid: [`RID`](class_rid.md), oversampling: [`float`](class_float.md) )                                                                                                                                                                                                                                   |
| `void`                                                      | [`font_set_scale`](#class_textserver_method_font_set_scale) ( font_rid: [`RID`](class_rid.md), size: [`int`](class_int.md), scale: [`float`](class_float.md) )                                                                                                                                                                                                                           |
| `void`                                                      | [`font_set_script_support_override`](#class_textserver_method_font_set_script_support_override) ( font_rid: [`RID`](class_rid.md), script: [`String`](class_string.md), supported: [`bool`](class_bool.md) )                                                                                                                                                                             |
| `void`                                                      | [`font_set_spacing`](#class_textserver_method_font_set_spacing) ( font_rid: [`RID`](class_rid.md), spacing: [SpacingType](#enum_textserver_spacingtype), value: [`int`](class_int.md) )                                                                                                                                                                                                  |
| `void`                                                      | [`font_set_stretch`](#class_textserver_method_font_set_stretch) ( font_rid: [`RID`](class_rid.md), weight: [`int`](class_int.md) )                                                                                                                                                                                                                                                       |
| `void`                                                      | [`font_set_style`](#class_textserver_method_font_set_style) ( font_rid: [`RID`](class_rid.md), style: [FontStyle](#enum_textserver_fontstyle) )                                                                                                                                                                                                                                          |
| `void`                                                      | [`font_set_style_name`](#class_textserver_method_font_set_style_name) ( font_rid: [`RID`](class_rid.md), name: [`String`](class_string.md) )                                                                                                                                                                                                                                             |
| `void`                                                      | [`font_set_subpixel_positioning`](#class_textserver_method_font_set_subpixel_positioning) ( font_rid: [`RID`](class_rid.md), subpixel_positioning: [SubpixelPositioning](#enum_textserver_subpixelpositioning) )                                                                                                                                                                         |
| `void`                                                      | [`font_set_texture_image`](#class_textserver_method_font_set_texture_image) ( font_rid: [`RID`](class_rid.md), size: [`Vector2i`](class_vector2i.md), texture_index: [`int`](class_int.md), image: [`Image`](class_image.md) )                                                                                                                                                           |
| `void`                                                      | [`font_set_texture_offsets`](#class_textserver_method_font_set_texture_offsets) ( font_rid: [`RID`](class_rid.md), size: [`Vector2i`](class_vector2i.md), texture_index: [`int`](class_int.md), offset: [`PackedInt32Array`](class_packedint32array.md) )                                                                                                                                |
| `void`                                                      | [`font_set_transform`](#class_textserver_method_font_set_transform) ( font_rid: [`RID`](class_rid.md), transform: [`Transform2D`](class_transform2d.md) )                                                                                                                                                                                                                                |
| `void`                                                      | [`font_set_underline_position`](#class_textserver_method_font_set_underline_position) ( font_rid: [`RID`](class_rid.md), size: [`int`](class_int.md), underline_position: [`float`](class_float.md) )                                                                                                                                                                                    |
| `void`                                                      | [`font_set_underline_thickness`](#class_textserver_method_font_set_underline_thickness) ( font_rid: [`RID`](class_rid.md), size: [`int`](class_int.md), underline_thickness: [`float`](class_float.md) )                                                                                                                                                                                 |
| `void`                                                      | [`font_set_variation_coordinates`](#class_textserver_method_font_set_variation_coordinates) ( font_rid: [`RID`](class_rid.md), variation_coordinates: [`Dictionary`](class_dictionary.md) )                                                                                                                                                                                              |
| `void`                                                      | [`font_set_weight`](#class_textserver_method_font_set_weight) ( font_rid: [`RID`](class_rid.md), weight: [`int`](class_int.md) )                                                                                                                                                                                                                                                         |
| [`Dictionary`](class_dictionary.md)                         | [`font_supported_feature_list`](#class_textserver_method_font_supported_feature_list) ( font_rid: [`RID`](class_rid.md) ) const[^const]                                                                                                                                                                                                                                                  |
| [`Dictionary`](class_dictionary.md)                         | [`font_supported_variation_list`](#class_textserver_method_font_supported_variation_list) ( font_rid: [`RID`](class_rid.md) ) const[^const]                                                                                                                                                                                                                                              |
| [`String`](class_string.md)                                 | [`format_number`](#class_textserver_method_format_number) ( number: [`String`](class_string.md), language: [`String`](class_string.md) = "" ) const[^const]                                                                                                                                                                                                                              |
| `void`                                                      | [`free_rid`](#class_textserver_method_free_rid) ( rid: [`RID`](class_rid.md) )                                                                                                                                                                                                                                                                                                           |
| [`int`](class_int.md)                                       | [`get_features`](#class_textserver_method_get_features) ( ) const[^const]                                                                                                                                                                                                                                                                                                                |
| [`Vector2`](class_vector2.md)                               | [`get_hex_code_box_size`](#class_textserver_method_get_hex_code_box_size) ( size: [`int`](class_int.md), index: [`int`](class_int.md) ) const[^const]                                                                                                                                                                                                                                    |
| [`String`](class_string.md)                                 | [`get_name`](#class_textserver_method_get_name) ( ) const[^const]                                                                                                                                                                                                                                                                                                                        |
| [`String`](class_string.md)                                 | [`get_support_data_filename`](#class_textserver_method_get_support_data_filename) ( ) const[^const]                                                                                                                                                                                                                                                                                      |
| [`String`](class_string.md)                                 | [`get_support_data_info`](#class_textserver_method_get_support_data_info) ( ) const[^const]                                                                                                                                                                                                                                                                                              |
| [`bool`](class_bool.md)                                     | [`has`](#class_textserver_method_has) ( rid: [`RID`](class_rid.md) )                                                                                                                                                                                                                                                                                                                     |
| [`bool`](class_bool.md)                                     | [`has_feature`](#class_textserver_method_has_feature) ( feature: [Feature](#enum_textserver_feature) ) const[^const]                                                                                                                                                                                                                                                                     |
| [`int`](class_int.md)                                       | [`is_confusable`](#class_textserver_method_is_confusable) ( string: [`String`](class_string.md), dict: [`PackedStringArray`](class_packedstringarray.md) ) const[^const]                                                                                                                                                                                                                 |
| [`bool`](class_bool.md)                                     | [`is_locale_right_to_left`](#class_textserver_method_is_locale_right_to_left) ( locale: [`String`](class_string.md) ) const[^const]                                                                                                                                                                                                                                                      |
| [`bool`](class_bool.md)                                     | [`is_valid_identifier`](#class_textserver_method_is_valid_identifier) ( string: [`String`](class_string.md) ) const[^const]                                                                                                                                                                                                                                                              |
| [`bool`](class_bool.md)                                     | [`is_valid_letter`](#class_textserver_method_is_valid_letter) ( unicode: [`int`](class_int.md) ) const[^const]                                                                                                                                                                                                                                                                           |
| [`bool`](class_bool.md)                                     | [`load_support_data`](#class_textserver_method_load_support_data) ( filename: [`String`](class_string.md) )                                                                                                                                                                                                                                                                              |
| [`int`](class_int.md)                                       | [`name_to_tag`](#class_textserver_method_name_to_tag) ( name: [`String`](class_string.md) ) const[^const]                                                                                                                                                                                                                                                                                |
| [`String`](class_string.md)                                 | [`parse_number`](#class_textserver_method_parse_number) ( number: [`String`](class_string.md), language: [`String`](class_string.md) = "" ) const[^const]                                                                                                                                                                                                                                |
| [Array](class_array.md) [`Vector3i`](class_vector3i.md)     | [`parse_structured_text`](#class_textserver_method_parse_structured_text) ( parser_type: [StructuredTextParser](#enum_textserver_structuredtextparser), args: [`Array`](class_array.md), text: [`String`](class_string.md) ) const[^const]                                                                                                                                               |
| [`String`](class_string.md)                                 | [`percent_sign`](#class_textserver_method_percent_sign) ( language: [`String`](class_string.md) = "" ) const[^const]                                                                                                                                                                                                                                                                     |
| [`bool`](class_bool.md)                                     | [`save_support_data`](#class_textserver_method_save_support_data) ( filename: [`String`](class_string.md) ) const[^const]                                                                                                                                                                                                                                                                |
| [`int`](class_int.md)                                       | [`shaped_get_span_count`](#class_textserver_method_shaped_get_span_count) ( shaped: [`RID`](class_rid.md) ) const[^const]                                                                                                                                                                                                                                                                |
| [`Variant`](class_variant.md)                               | [`shaped_get_span_meta`](#class_textserver_method_shaped_get_span_meta) ( shaped: [`RID`](class_rid.md), index: [`int`](class_int.md) ) const[^const]                                                                                                                                                                                                                                    |
| `void`                                                      | [`shaped_set_span_update_font`](#class_textserver_method_shaped_set_span_update_font) ( shaped: [`RID`](class_rid.md), index: [`int`](class_int.md), fonts: [Array](class_array.md) [`RID`](class_rid.md), size: [`int`](class_int.md), opentype_features: [`Dictionary`](class_dictionary.md) = {} )                                                                                    |
| [`bool`](class_bool.md)                                     | [`shaped_text_add_object`](#class_textserver_method_shaped_text_add_object) ( shaped: [`RID`](class_rid.md), key: [`Variant`](class_variant.md), size: [`Vector2`](class_vector2.md), inline_align: [InlineAlignment](#enum_@globalscope_inlinealignment) = 5, length: [`int`](class_int.md) = 1, baseline: [`float`](class_float.md) = 0.0 )                                            |
| [`bool`](class_bool.md)                                     | [`shaped_text_add_string`](#class_textserver_method_shaped_text_add_string) ( shaped: [`RID`](class_rid.md), text: [`String`](class_string.md), fonts: [Array](class_array.md) [`RID`](class_rid.md), size: [`int`](class_int.md), opentype_features: [`Dictionary`](class_dictionary.md) = {}, language: [`String`](class_string.md) = "", meta: [`Variant`](class_variant.md) = null ) |
| `void`                                                      | [`shaped_text_clear`](#class_textserver_method_shaped_text_clear) ( rid: [`RID`](class_rid.md) )                                                                                                                                                                                                                                                                                         |
| [`int`](class_int.md)                                       | [`shaped_text_closest_character_pos`](#class_textserver_method_shaped_text_closest_character_pos) ( shaped: [`RID`](class_rid.md), pos: [`int`](class_int.md) ) const[^const]                                                                                                                                                                                                            |
| `void`                                                      | [`shaped_text_draw`](#class_textserver_method_shaped_text_draw) ( shaped: [`RID`](class_rid.md), canvas: [`RID`](class_rid.md), pos: [`Vector2`](class_vector2.md), clip_l: [`float`](class_float.md) = -1, clip_r: [`float`](class_float.md) = -1, color: [`Color`](class_color.md) = Color(1, 1, 1, 1) ) const[^const]                                                                 |
| `void`                                                      | [`shaped_text_draw_outline`](#class_textserver_method_shaped_text_draw_outline) ( shaped: [`RID`](class_rid.md), canvas: [`RID`](class_rid.md), pos: [`Vector2`](class_vector2.md), clip_l: [`float`](class_float.md) = -1, clip_r: [`float`](class_float.md) = -1, outline_size: [`int`](class_int.md) = 1, color: [`Color`](class_color.md) = Color(1, 1, 1, 1) ) const[^const]        |
| [`float`](class_float.md)                                   | [`shaped_text_fit_to_width`](#class_textserver_method_shaped_text_fit_to_width) ( shaped: [`RID`](class_rid.md), width: [`float`](class_float.md), justification_flags: [JustificationFlag](#enum_textserver_justificationflag) = 3 )                                                                                                                                                    |
| [`float`](class_float.md)                                   | [`shaped_text_get_ascent`](#class_textserver_method_shaped_text_get_ascent) ( shaped: [`RID`](class_rid.md) ) const[^const]                                                                                                                                                                                                                                                              |
| [`Dictionary`](class_dictionary.md)                         | [`shaped_text_get_carets`](#class_textserver_method_shaped_text_get_carets) ( shaped: [`RID`](class_rid.md), position: [`int`](class_int.md) ) const[^const]                                                                                                                                                                                                                             |
| [`PackedInt32Array`](class_packedint32array.md)             | [`shaped_text_get_character_breaks`](#class_textserver_method_shaped_text_get_character_breaks) ( shaped: [`RID`](class_rid.md) ) const[^const]                                                                                                                                                                                                                                          |
| [`int`](class_int.md)                                       | [`shaped_text_get_custom_ellipsis`](#class_textserver_method_shaped_text_get_custom_ellipsis) ( shaped: [`RID`](class_rid.md) ) const[^const]                                                                                                                                                                                                                                            |
| [`String`](class_string.md)                                 | [`shaped_text_get_custom_punctuation`](#class_textserver_method_shaped_text_get_custom_punctuation) ( shaped: [`RID`](class_rid.md) ) const[^const]                                                                                                                                                                                                                                      |
| [`float`](class_float.md)                                   | [`shaped_text_get_descent`](#class_textserver_method_shaped_text_get_descent) ( shaped: [`RID`](class_rid.md) ) const[^const]                                                                                                                                                                                                                                                            |
| [Direction](#enum_textserver_direction)                     | [`shaped_text_get_direction`](#class_textserver_method_shaped_text_get_direction) ( shaped: [`RID`](class_rid.md) ) const[^const]                                                                                                                                                                                                                                                        |
| [Direction](#enum_textserver_direction)                     | [`shaped_text_get_dominant_direction_in_range`](#class_textserver_method_shaped_text_get_dominant_direction_in_range) ( shaped: [`RID`](class_rid.md), start: [`int`](class_int.md), end: [`int`](class_int.md) ) const[^const]                                                                                                                                                          |
| [`int`](class_int.md)                                       | [`shaped_text_get_ellipsis_glyph_count`](#class_textserver_method_shaped_text_get_ellipsis_glyph_count) ( shaped: [`RID`](class_rid.md) ) const[^const]                                                                                                                                                                                                                                  |
| [Array](class_array.md) [`Dictionary`](class_dictionary.md) | [`shaped_text_get_ellipsis_glyphs`](#class_textserver_method_shaped_text_get_ellipsis_glyphs) ( shaped: [`RID`](class_rid.md) ) const[^const]                                                                                                                                                                                                                                            |
| [`int`](class_int.md)                                       | [`shaped_text_get_ellipsis_pos`](#class_textserver_method_shaped_text_get_ellipsis_pos) ( shaped: [`RID`](class_rid.md) ) const[^const]                                                                                                                                                                                                                                                  |
| [`int`](class_int.md)                                       | [`shaped_text_get_glyph_count`](#class_textserver_method_shaped_text_get_glyph_count) ( shaped: [`RID`](class_rid.md) ) const[^const]                                                                                                                                                                                                                                                    |
| [Array](class_array.md) [`Dictionary`](class_dictionary.md) | [`shaped_text_get_glyphs`](#class_textserver_method_shaped_text_get_glyphs) ( shaped: [`RID`](class_rid.md) ) const[^const]                                                                                                                                                                                                                                                              |
| [`Vector2`](class_vector2.md)                               | [`shaped_text_get_grapheme_bounds`](#class_textserver_method_shaped_text_get_grapheme_bounds) ( shaped: [`RID`](class_rid.md), pos: [`int`](class_int.md) ) const[^const]                                                                                                                                                                                                                |
| [Direction](#enum_textserver_direction)                     | [`shaped_text_get_inferred_direction`](#class_textserver_method_shaped_text_get_inferred_direction) ( shaped: [`RID`](class_rid.md) ) const[^const]                                                                                                                                                                                                                                      |
| [`PackedInt32Array`](class_packedint32array.md)             | [`shaped_text_get_line_breaks`](#class_textserver_method_shaped_text_get_line_breaks) ( shaped: [`RID`](class_rid.md), width: [`float`](class_float.md), start: [`int`](class_int.md) = 0, break_flags: [LineBreakFlag](#enum_textserver_linebreakflag) = 3 ) const[^const]                                                                                                              |
| [`PackedInt32Array`](class_packedint32array.md)             | [`shaped_text_get_line_breaks_adv`](#class_textserver_method_shaped_text_get_line_breaks_adv) ( shaped: [`RID`](class_rid.md), width: [`PackedFloat32Array`](class_packedfloat32array.md), start: [`int`](class_int.md) = 0, once: [`bool`](class_bool.md) = true, break_flags: [LineBreakFlag](#enum_textserver_linebreakflag) = 3 ) const[^const]                                      |
| [`int`](class_int.md)                                       | [`shaped_text_get_object_glyph`](#class_textserver_method_shaped_text_get_object_glyph) ( shaped: [`RID`](class_rid.md), key: [`Variant`](class_variant.md) ) const[^const]                                                                                                                                                                                                              |
| [`Vector2i`](class_vector2i.md)                             | [`shaped_text_get_object_range`](#class_textserver_method_shaped_text_get_object_range) ( shaped: [`RID`](class_rid.md), key: [`Variant`](class_variant.md) ) const[^const]                                                                                                                                                                                                              |
| [`Rect2`](class_rect2.md)                                   | [`shaped_text_get_object_rect`](#class_textserver_method_shaped_text_get_object_rect) ( shaped: [`RID`](class_rid.md), key: [`Variant`](class_variant.md) ) const[^const]                                                                                                                                                                                                                |
| [`Array`](class_array.md)                                   | [`shaped_text_get_objects`](#class_textserver_method_shaped_text_get_objects) ( shaped: [`RID`](class_rid.md) ) const[^const]                                                                                                                                                                                                                                                            |
| [Orientation](#enum_textserver_orientation)                 | [`shaped_text_get_orientation`](#class_textserver_method_shaped_text_get_orientation) ( shaped: [`RID`](class_rid.md) ) const[^const]                                                                                                                                                                                                                                                    |
| [`RID`](class_rid.md)                                       | [`shaped_text_get_parent`](#class_textserver_method_shaped_text_get_parent) ( shaped: [`RID`](class_rid.md) ) const[^const]                                                                                                                                                                                                                                                              |
| [`bool`](class_bool.md)                                     | [`shaped_text_get_preserve_control`](#class_textserver_method_shaped_text_get_preserve_control) ( shaped: [`RID`](class_rid.md) ) const[^const]                                                                                                                                                                                                                                          |
| [`bool`](class_bool.md)                                     | [`shaped_text_get_preserve_invalid`](#class_textserver_method_shaped_text_get_preserve_invalid) ( shaped: [`RID`](class_rid.md) ) const[^const]                                                                                                                                                                                                                                          |
| [`Vector2i`](class_vector2i.md)                             | [`shaped_text_get_range`](#class_textserver_method_shaped_text_get_range) ( shaped: [`RID`](class_rid.md) ) const[^const]                                                                                                                                                                                                                                                                |
| [`PackedVector2Array`](class_packedvector2array.md)         | [`shaped_text_get_selection`](#class_textserver_method_shaped_text_get_selection) ( shaped: [`RID`](class_rid.md), start: [`int`](class_int.md), end: [`int`](class_int.md) ) const[^const]                                                                                                                                                                                              |
| [`Vector2`](class_vector2.md)                               | [`shaped_text_get_size`](#class_textserver_method_shaped_text_get_size) ( shaped: [`RID`](class_rid.md) ) const[^const]                                                                                                                                                                                                                                                                  |
| [`int`](class_int.md)                                       | [`shaped_text_get_spacing`](#class_textserver_method_shaped_text_get_spacing) ( shaped: [`RID`](class_rid.md), spacing: [SpacingType](#enum_textserver_spacingtype) ) const[^const]                                                                                                                                                                                                      |
| [`int`](class_int.md)                                       | [`shaped_text_get_trim_pos`](#class_textserver_method_shaped_text_get_trim_pos) ( shaped: [`RID`](class_rid.md) ) const[^const]                                                                                                                                                                                                                                                          |
| [`float`](class_float.md)                                   | [`shaped_text_get_underline_position`](#class_textserver_method_shaped_text_get_underline_position) ( shaped: [`RID`](class_rid.md) ) const[^const]                                                                                                                                                                                                                                      |
| [`float`](class_float.md)                                   | [`shaped_text_get_underline_thickness`](#class_textserver_method_shaped_text_get_underline_thickness) ( shaped: [`RID`](class_rid.md) ) const[^const]                                                                                                                                                                                                                                    |
| [`float`](class_float.md)                                   | [`shaped_text_get_width`](#class_textserver_method_shaped_text_get_width) ( shaped: [`RID`](class_rid.md) ) const[^const]                                                                                                                                                                                                                                                                |
| [`PackedInt32Array`](class_packedint32array.md)             | [`shaped_text_get_word_breaks`](#class_textserver_method_shaped_text_get_word_breaks) ( shaped: [`RID`](class_rid.md), grapheme_flags: [GraphemeFlag](#enum_textserver_graphemeflag) = 264, skip_grapheme_flags: [GraphemeFlag](#enum_textserver_graphemeflag) = 4 ) const[^const]                                                                                                       |
| [`bool`](class_bool.md)                                     | [`shaped_text_has_visible_chars`](#class_textserver_method_shaped_text_has_visible_chars) ( shaped: [`RID`](class_rid.md) ) const[^const]                                                                                                                                                                                                                                                |
| [`int`](class_int.md)                                       | [`shaped_text_hit_test_grapheme`](#class_textserver_method_shaped_text_hit_test_grapheme) ( shaped: [`RID`](class_rid.md), coords: [`float`](class_float.md) ) const[^const]                                                                                                                                                                                                             |
| [`int`](class_int.md)                                       | [`shaped_text_hit_test_position`](#class_textserver_method_shaped_text_hit_test_position) ( shaped: [`RID`](class_rid.md), coords: [`float`](class_float.md) ) const[^const]                                                                                                                                                                                                             |
| [`bool`](class_bool.md)                                     | [`shaped_text_is_ready`](#class_textserver_method_shaped_text_is_ready) ( shaped: [`RID`](class_rid.md) ) const[^const]                                                                                                                                                                                                                                                                  |
| [`int`](class_int.md)                                       | [`shaped_text_next_character_pos`](#class_textserver_method_shaped_text_next_character_pos) ( shaped: [`RID`](class_rid.md), pos: [`int`](class_int.md) ) const[^const]                                                                                                                                                                                                                  |
| [`int`](class_int.md)                                       | [`shaped_text_next_grapheme_pos`](#class_textserver_method_shaped_text_next_grapheme_pos) ( shaped: [`RID`](class_rid.md), pos: [`int`](class_int.md) ) const[^const]                                                                                                                                                                                                                    |
| `void`                                                      | [`shaped_text_overrun_trim_to_width`](#class_textserver_method_shaped_text_overrun_trim_to_width) ( shaped: [`RID`](class_rid.md), width: [`float`](class_float.md) = 0, overrun_trim_flags: [TextOverrunFlag](#enum_textserver_textoverrunflag) = 0 )                                                                                                                                   |
| [`int`](class_int.md)                                       | [`shaped_text_prev_character_pos`](#class_textserver_method_shaped_text_prev_character_pos) ( shaped: [`RID`](class_rid.md), pos: [`int`](class_int.md) ) const[^const]                                                                                                                                                                                                                  |
| [`int`](class_int.md)                                       | [`shaped_text_prev_grapheme_pos`](#class_textserver_method_shaped_text_prev_grapheme_pos) ( shaped: [`RID`](class_rid.md), pos: [`int`](class_int.md) ) const[^const]                                                                                                                                                                                                                    |
| [`bool`](class_bool.md)                                     | [`shaped_text_resize_object`](#class_textserver_method_shaped_text_resize_object) ( shaped: [`RID`](class_rid.md), key: [`Variant`](class_variant.md), size: [`Vector2`](class_vector2.md), inline_align: [InlineAlignment](#enum_@globalscope_inlinealignment) = 5, baseline: [`float`](class_float.md) = 0.0 )                                                                         |
| `void`                                                      | [`shaped_text_set_bidi_override`](#class_textserver_method_shaped_text_set_bidi_override) ( shaped: [`RID`](class_rid.md), override: [`Array`](class_array.md) )                                                                                                                                                                                                                         |
| `void`                                                      | [`shaped_text_set_custom_ellipsis`](#class_textserver_method_shaped_text_set_custom_ellipsis) ( shaped: [`RID`](class_rid.md), char: [`int`](class_int.md) )                                                                                                                                                                                                                             |
| `void`                                                      | [`shaped_text_set_custom_punctuation`](#class_textserver_method_shaped_text_set_custom_punctuation) ( shaped: [`RID`](class_rid.md), punct: [`String`](class_string.md) )                                                                                                                                                                                                                |
| `void`                                                      | [`shaped_text_set_direction`](#class_textserver_method_shaped_text_set_direction) ( shaped: [`RID`](class_rid.md), direction: [Direction](#enum_textserver_direction) = 0 )                                                                                                                                                                                                              |
| `void`                                                      | [`shaped_text_set_orientation`](#class_textserver_method_shaped_text_set_orientation) ( shaped: [`RID`](class_rid.md), orientation: [Orientation](#enum_textserver_orientation) = 0 )                                                                                                                                                                                                    |
| `void`                                                      | [`shaped_text_set_preserve_control`](#class_textserver_method_shaped_text_set_preserve_control) ( shaped: [`RID`](class_rid.md), enabled: [`bool`](class_bool.md) )                                                                                                                                                                                                                      |
| `void`                                                      | [`shaped_text_set_preserve_invalid`](#class_textserver_method_shaped_text_set_preserve_invalid) ( shaped: [`RID`](class_rid.md), enabled: [`bool`](class_bool.md) )                                                                                                                                                                                                                      |
| `void`                                                      | [`shaped_text_set_spacing`](#class_textserver_method_shaped_text_set_spacing) ( shaped: [`RID`](class_rid.md), spacing: [SpacingType](#enum_textserver_spacingtype), value: [`int`](class_int.md) )                                                                                                                                                                                      |
| [`bool`](class_bool.md)                                     | [`shaped_text_shape`](#class_textserver_method_shaped_text_shape) ( shaped: [`RID`](class_rid.md) )                                                                                                                                                                                                                                                                                      |
| [Array](class_array.md) [`Dictionary`](class_dictionary.md) | [`shaped_text_sort_logical`](#class_textserver_method_shaped_text_sort_logical) ( shaped: [`RID`](class_rid.md) )                                                                                                                                                                                                                                                                        |
| [`RID`](class_rid.md)                                       | [`shaped_text_substr`](#class_textserver_method_shaped_text_substr) ( shaped: [`RID`](class_rid.md), start: [`int`](class_int.md), length: [`int`](class_int.md) ) const[^const]                                                                                                                                                                                                         |
| [`float`](class_float.md)                                   | [`shaped_text_tab_align`](#class_textserver_method_shaped_text_tab_align) ( shaped: [`RID`](class_rid.md), tab_stops: [`PackedFloat32Array`](class_packedfloat32array.md) )                                                                                                                                                                                                              |
| [`bool`](class_bool.md)                                     | [`spoof_check`](#class_textserver_method_spoof_check) ( string: [`String`](class_string.md) ) const[^const]                                                                                                                                                                                                                                                                              |
| [`PackedInt32Array`](class_packedint32array.md)             | [`string_get_character_breaks`](#class_textserver_method_string_get_character_breaks) ( string: [`String`](class_string.md), language: [`String`](class_string.md) = "" ) const[^const]                                                                                                                                                                                                  |
| [`PackedInt32Array`](class_packedint32array.md)             | [`string_get_word_breaks`](#class_textserver_method_string_get_word_breaks) ( string: [`String`](class_string.md), language: [`String`](class_string.md) = "", chars_per_line: [`int`](class_int.md) = 0 ) const[^const]                                                                                                                                                                 |
| [`String`](class_string.md)                                 | [`string_to_lower`](#class_textserver_method_string_to_lower) ( string: [`String`](class_string.md), language: [`String`](class_string.md) = "" ) const[^const]                                                                                                                                                                                                                          |
| [`String`](class_string.md)                                 | [`string_to_title`](#class_textserver_method_string_to_title) ( string: [`String`](class_string.md), language: [`String`](class_string.md) = "" ) const[^const]                                                                                                                                                                                                                          |
| [`String`](class_string.md)                                 | [`string_to_upper`](#class_textserver_method_string_to_upper) ( string: [`String`](class_string.md), language: [`String`](class_string.md) = "" ) const[^const]                                                                                                                                                                                                                          |
| [`String`](class_string.md)                                 | [`strip_diacritics`](#class_textserver_method_strip_diacritics) ( string: [`String`](class_string.md) ) const[^const]                                                                                                                                                                                                                                                                    |
| [`String`](class_string.md)                                 | [`tag_to_name`](#class_textserver_method_tag_to_name) ( tag: [`int`](class_int.md) ) const[^const]                                                                                                                                                                                                                                                                                       |

<!-- rst-class:: classref-section-separator -->

---

## 枚举

<div id="_class_enum_textserver_fontantialiasing"></div>

enum **FontAntialiasing**: <div id="enum_textserver_fontantialiasing"></div>

<div id="_class_textserver_constant_font_antialiasing_none"></div>

[FontAntialiasing](#enum_textserver_fontantialiasing) **FONT_ANTIALIASING_NONE** = ``0``

Font glyphs are rasterized as 1-bit bitmaps.

<div id="_class_textserver_constant_font_antialiasing_gray"></div>

[FontAntialiasing](#enum_textserver_fontantialiasing) **FONT_ANTIALIASING_GRAY** = ``1``

Font glyphs are rasterized as 8-bit grayscale anti-aliased bitmaps.

<div id="_class_textserver_constant_font_antialiasing_lcd"></div>

[FontAntialiasing](#enum_textserver_fontantialiasing) **FONT_ANTIALIASING_LCD** = ``2``

Font glyphs are rasterized for LCD screens.

LCD subpixel layout is determined by the value of `gui/theme/lcd_subpixel_layout` project settings.

LCD subpixel anti-aliasing mode is suitable only for rendering horizontal, unscaled text in 2D.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_enum_textserver_fontlcdsubpixellayout"></div>

enum **FontLCDSubpixelLayout**: <div id="enum_textserver_fontlcdsubpixellayout"></div>

<div id="_class_textserver_constant_font_lcd_subpixel_layout_none"></div>

[FontLCDSubpixelLayout](#enum_textserver_fontlcdsubpixellayout) **FONT_LCD_SUBPIXEL_LAYOUT_NONE** = ``0``

Unknown or unsupported subpixel layout, LCD subpixel antialiasing is disabled.

<div id="_class_textserver_constant_font_lcd_subpixel_layout_hrgb"></div>

[FontLCDSubpixelLayout](#enum_textserver_fontlcdsubpixellayout) **FONT_LCD_SUBPIXEL_LAYOUT_HRGB** = ``1``

Horizontal RGB subpixel layout.

<div id="_class_textserver_constant_font_lcd_subpixel_layout_hbgr"></div>

[FontLCDSubpixelLayout](#enum_textserver_fontlcdsubpixellayout) **FONT_LCD_SUBPIXEL_LAYOUT_HBGR** = ``2``

Horizontal BGR subpixel layout.

<div id="_class_textserver_constant_font_lcd_subpixel_layout_vrgb"></div>

[FontLCDSubpixelLayout](#enum_textserver_fontlcdsubpixellayout) **FONT_LCD_SUBPIXEL_LAYOUT_VRGB** = ``3``

Vertical RGB subpixel layout.

<div id="_class_textserver_constant_font_lcd_subpixel_layout_vbgr"></div>

[FontLCDSubpixelLayout](#enum_textserver_fontlcdsubpixellayout) **FONT_LCD_SUBPIXEL_LAYOUT_VBGR** = ``4``

Vertical BGR subpixel layout.

<div id="_class_textserver_constant_font_lcd_subpixel_layout_max"></div>

[FontLCDSubpixelLayout](#enum_textserver_fontlcdsubpixellayout) **FONT_LCD_SUBPIXEL_LAYOUT_MAX** = ``5``

Represents the size of the [FontLCDSubpixelLayout](#enum_textserver_fontlcdsubpixellayout) enum.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_enum_textserver_direction"></div>

enum **Direction**: <div id="enum_textserver_direction"></div>

<div id="_class_textserver_constant_direction_auto"></div>

[Direction](#enum_textserver_direction) **DIRECTION_AUTO** = ``0``

Text direction is determined based on contents and current locale.

<div id="_class_textserver_constant_direction_ltr"></div>

[Direction](#enum_textserver_direction) **DIRECTION_LTR** = ``1``

Text is written from left to right.

<div id="_class_textserver_constant_direction_rtl"></div>

[Direction](#enum_textserver_direction) **DIRECTION_RTL** = ``2``

Text is written from right to left.

<div id="_class_textserver_constant_direction_inherited"></div>

[Direction](#enum_textserver_direction) **DIRECTION_INHERITED** = ``3``

Text writing direction is the same as base string writing direction. Used for BiDi override only.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_enum_textserver_orientation"></div>

enum **Orientation**: <div id="enum_textserver_orientation"></div>

<div id="_class_textserver_constant_orientation_horizontal"></div>

[Orientation](#enum_textserver_orientation) **ORIENTATION_HORIZONTAL** = ``0``

Text is written horizontally.

<div id="_class_textserver_constant_orientation_vertical"></div>

[Orientation](#enum_textserver_orientation) **ORIENTATION_VERTICAL** = ``1``

Left to right text is written vertically from top to bottom.

Right to left text is written vertically from bottom to top.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_enum_textserver_justificationflag"></div>

flags **JustificationFlag**: <div id="enum_textserver_justificationflag"></div>

<div id="_class_textserver_constant_justification_none"></div>

[JustificationFlag](#enum_textserver_justificationflag) **JUSTIFICATION_NONE** = ``0``

Do not justify text.

<div id="_class_textserver_constant_justification_kashida"></div>

[JustificationFlag](#enum_textserver_justificationflag) **JUSTIFICATION_KASHIDA** = ``1``

Justify text by adding and removing kashidas.

<div id="_class_textserver_constant_justification_word_bound"></div>

[JustificationFlag](#enum_textserver_justificationflag) **JUSTIFICATION_WORD_BOUND** = ``2``

Justify text by changing width of the spaces between the words.

<div id="_class_textserver_constant_justification_trim_edge_spaces"></div>

[JustificationFlag](#enum_textserver_justificationflag) **JUSTIFICATION_TRIM_EDGE_SPACES** = ``4``

Remove trailing and leading spaces from the justified text.

<div id="_class_textserver_constant_justification_after_last_tab"></div>

[JustificationFlag](#enum_textserver_justificationflag) **JUSTIFICATION_AFTER_LAST_TAB** = ``8``

Only apply justification to the part of the text after the last tab.

<div id="_class_textserver_constant_justification_constrain_ellipsis"></div>

[JustificationFlag](#enum_textserver_justificationflag) **JUSTIFICATION_CONSTRAIN_ELLIPSIS** = ``16``

Apply justification to the trimmed line with ellipsis.

<div id="_class_textserver_constant_justification_skip_last_line"></div>

[JustificationFlag](#enum_textserver_justificationflag) **JUSTIFICATION_SKIP_LAST_LINE** = ``32``

Do not apply justification to the last line of the paragraph.

<div id="_class_textserver_constant_justification_skip_last_line_with_visible_chars"></div>

[JustificationFlag](#enum_textserver_justificationflag) **JUSTIFICATION_SKIP_LAST_LINE_WITH_VISIBLE_CHARS** = ``64``

Do not apply justification to the last line of the paragraph with visible characters (takes precedence over [`JUSTIFICATION_SKIP_LAST_LINE`](#class_textserver_constant_justification_skip_last_line)).

<div id="_class_textserver_constant_justification_do_not_skip_single_line"></div>

[JustificationFlag](#enum_textserver_justificationflag) **JUSTIFICATION_DO_NOT_SKIP_SINGLE_LINE** = ``128``

Always apply justification to the paragraphs with a single line ([`JUSTIFICATION_SKIP_LAST_LINE`](#class_textserver_constant_justification_skip_last_line) and [`JUSTIFICATION_SKIP_LAST_LINE_WITH_VISIBLE_CHARS`](#class_textserver_constant_justification_skip_last_line_with_visible_chars) are ignored).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_enum_textserver_autowrapmode"></div>

enum **AutowrapMode**: <div id="enum_textserver_autowrapmode"></div>

<div id="_class_textserver_constant_autowrap_off"></div>

[AutowrapMode](#enum_textserver_autowrapmode) **AUTOWRAP_OFF** = ``0``

Autowrap is disabled.

<div id="_class_textserver_constant_autowrap_arbitrary"></div>

[AutowrapMode](#enum_textserver_autowrapmode) **AUTOWRAP_ARBITRARY** = ``1``

Wraps the text inside the node's bounding rectangle by allowing to break lines at arbitrary positions, which is useful when very limited space is available.

<div id="_class_textserver_constant_autowrap_word"></div>

[AutowrapMode](#enum_textserver_autowrapmode) **AUTOWRAP_WORD** = ``2``

Wraps the text inside the node's bounding rectangle by soft-breaking between words.

<div id="_class_textserver_constant_autowrap_word_smart"></div>

[AutowrapMode](#enum_textserver_autowrapmode) **AUTOWRAP_WORD_SMART** = ``3``

Behaves similarly to [`AUTOWRAP_WORD`](#class_textserver_constant_autowrap_word), but force-breaks a word if that single word does not fit in one line.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_enum_textserver_linebreakflag"></div>

flags **LineBreakFlag**: <div id="enum_textserver_linebreakflag"></div>

<div id="_class_textserver_constant_break_none"></div>

[LineBreakFlag](#enum_textserver_linebreakflag) **BREAK_NONE** = ``0``

Do not break the line.

<div id="_class_textserver_constant_break_mandatory"></div>

[LineBreakFlag](#enum_textserver_linebreakflag) **BREAK_MANDATORY** = ``1``

Break the line at the line mandatory break characters (e.g. `"\n"`).

<div id="_class_textserver_constant_break_word_bound"></div>

[LineBreakFlag](#enum_textserver_linebreakflag) **BREAK_WORD_BOUND** = ``2``

Break the line between the words.

<div id="_class_textserver_constant_break_grapheme_bound"></div>

[LineBreakFlag](#enum_textserver_linebreakflag) **BREAK_GRAPHEME_BOUND** = ``4``

Break the line between any unconnected graphemes.

<div id="_class_textserver_constant_break_adaptive"></div>

[LineBreakFlag](#enum_textserver_linebreakflag) **BREAK_ADAPTIVE** = ``8``

Should be used only in conjunction with [`BREAK_WORD_BOUND`](#class_textserver_constant_break_word_bound), break the line between any unconnected graphemes, if it's impossible to break it between the words.

<div id="_class_textserver_constant_break_trim_edge_spaces"></div>

[LineBreakFlag](#enum_textserver_linebreakflag) **BREAK_TRIM_EDGE_SPACES** = ``16``

Remove edge spaces from the broken line segments.

<div id="_class_textserver_constant_break_trim_indent"></div>

[LineBreakFlag](#enum_textserver_linebreakflag) **BREAK_TRIM_INDENT** = ``32``

Subtract first line indentation width from all lines after the first one.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_enum_textserver_visiblecharactersbehavior"></div>

enum **VisibleCharactersBehavior**: <div id="enum_textserver_visiblecharactersbehavior"></div>

<div id="_class_textserver_constant_vc_chars_before_shaping"></div>

[VisibleCharactersBehavior](#enum_textserver_visiblecharactersbehavior) **VC_CHARS_BEFORE_SHAPING** = ``0``

Trims text before the shaping. e.g, increasing [`Label.visible_characters`](#class_label_property_visible_characters) or [`RichTextLabel.visible_characters`](#class_richtextlabel_property_visible_characters) value is visually identical to typing the text.

<div id="_class_textserver_constant_vc_chars_after_shaping"></div>

[VisibleCharactersBehavior](#enum_textserver_visiblecharactersbehavior) **VC_CHARS_AFTER_SHAPING** = ``1``

Displays glyphs that are mapped to the first [`Label.visible_characters`](#class_label_property_visible_characters) or [`RichTextLabel.visible_characters`](#class_richtextlabel_property_visible_characters) characters from the beginning of the text.

<div id="_class_textserver_constant_vc_glyphs_auto"></div>

[VisibleCharactersBehavior](#enum_textserver_visiblecharactersbehavior) **VC_GLYPHS_AUTO** = ``2``

Displays [`Label.visible_ratio`](#class_label_property_visible_ratio) or [`RichTextLabel.visible_ratio`](#class_richtextlabel_property_visible_ratio) glyphs, starting from the left or from the right, depending on [`Control.layout_direction`](#class_control_property_layout_direction) value.

<div id="_class_textserver_constant_vc_glyphs_ltr"></div>

[VisibleCharactersBehavior](#enum_textserver_visiblecharactersbehavior) **VC_GLYPHS_LTR** = ``3``

Displays [`Label.visible_ratio`](#class_label_property_visible_ratio) or [`RichTextLabel.visible_ratio`](#class_richtextlabel_property_visible_ratio) glyphs, starting from the left.

<div id="_class_textserver_constant_vc_glyphs_rtl"></div>

[VisibleCharactersBehavior](#enum_textserver_visiblecharactersbehavior) **VC_GLYPHS_RTL** = ``4``

Displays [`Label.visible_ratio`](#class_label_property_visible_ratio) or [`RichTextLabel.visible_ratio`](#class_richtextlabel_property_visible_ratio) glyphs, starting from the right.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_enum_textserver_overrunbehavior"></div>

enum **OverrunBehavior**: <div id="enum_textserver_overrunbehavior"></div>

<div id="_class_textserver_constant_overrun_no_trimming"></div>

[OverrunBehavior](#enum_textserver_overrunbehavior) **OVERRUN_NO_TRIMMING** = ``0``

No text trimming is performed.

<div id="_class_textserver_constant_overrun_trim_char"></div>

[OverrunBehavior](#enum_textserver_overrunbehavior) **OVERRUN_TRIM_CHAR** = ``1``

Trims the text per character.

<div id="_class_textserver_constant_overrun_trim_word"></div>

[OverrunBehavior](#enum_textserver_overrunbehavior) **OVERRUN_TRIM_WORD** = ``2``

Trims the text per word.

<div id="_class_textserver_constant_overrun_trim_ellipsis"></div>

[OverrunBehavior](#enum_textserver_overrunbehavior) **OVERRUN_TRIM_ELLIPSIS** = ``3``

Trims the text per character and adds an ellipsis to indicate that parts are hidden.

<div id="_class_textserver_constant_overrun_trim_word_ellipsis"></div>

[OverrunBehavior](#enum_textserver_overrunbehavior) **OVERRUN_TRIM_WORD_ELLIPSIS** = ``4``

Trims the text per word and adds an ellipsis to indicate that parts are hidden.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_enum_textserver_textoverrunflag"></div>

flags **TextOverrunFlag**: <div id="enum_textserver_textoverrunflag"></div>

<div id="_class_textserver_constant_overrun_no_trim"></div>

[TextOverrunFlag](#enum_textserver_textoverrunflag) **OVERRUN_NO_TRIM** = ``0``

No trimming is performed.

<div id="_class_textserver_constant_overrun_trim"></div>

[TextOverrunFlag](#enum_textserver_textoverrunflag) **OVERRUN_TRIM** = ``1``

Trims the text when it exceeds the given width.

<div id="_class_textserver_constant_overrun_trim_word_only"></div>

[TextOverrunFlag](#enum_textserver_textoverrunflag) **OVERRUN_TRIM_WORD_ONLY** = ``2``

Trims the text per word instead of per grapheme.

<div id="_class_textserver_constant_overrun_add_ellipsis"></div>

[TextOverrunFlag](#enum_textserver_textoverrunflag) **OVERRUN_ADD_ELLIPSIS** = ``4``

Determines whether an ellipsis should be added at the end of the text.

<div id="_class_textserver_constant_overrun_enforce_ellipsis"></div>

[TextOverrunFlag](#enum_textserver_textoverrunflag) **OVERRUN_ENFORCE_ELLIPSIS** = ``8``

Determines whether the ellipsis at the end of the text is enforced and may not be hidden.

<div id="_class_textserver_constant_overrun_justification_aware"></div>

[TextOverrunFlag](#enum_textserver_textoverrunflag) **OVERRUN_JUSTIFICATION_AWARE** = ``16``

Accounts for the text being justified before attempting to trim it (see [JustificationFlag](#enum_textserver_justificationflag)).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_enum_textserver_graphemeflag"></div>

flags **GraphemeFlag**: <div id="enum_textserver_graphemeflag"></div>

<div id="_class_textserver_constant_grapheme_is_valid"></div>

[GraphemeFlag](#enum_textserver_graphemeflag) **GRAPHEME_IS_VALID** = ``1``

Grapheme is supported by the font, and can be drawn.

<div id="_class_textserver_constant_grapheme_is_rtl"></div>

[GraphemeFlag](#enum_textserver_graphemeflag) **GRAPHEME_IS_RTL** = ``2``

Grapheme is part of right-to-left or bottom-to-top run.

<div id="_class_textserver_constant_grapheme_is_virtual"></div>

[GraphemeFlag](#enum_textserver_graphemeflag) **GRAPHEME_IS_VIRTUAL** = ``4``

Grapheme is not part of source text, it was added by justification process.

<div id="_class_textserver_constant_grapheme_is_space"></div>

[GraphemeFlag](#enum_textserver_graphemeflag) **GRAPHEME_IS_SPACE** = ``8``

Grapheme is whitespace.

<div id="_class_textserver_constant_grapheme_is_break_hard"></div>

[GraphemeFlag](#enum_textserver_graphemeflag) **GRAPHEME_IS_BREAK_HARD** = ``16``

Grapheme is mandatory break point (e.g. `"\n"`).

<div id="_class_textserver_constant_grapheme_is_break_soft"></div>

[GraphemeFlag](#enum_textserver_graphemeflag) **GRAPHEME_IS_BREAK_SOFT** = ``32``

Grapheme is optional break point (e.g. space).

<div id="_class_textserver_constant_grapheme_is_tab"></div>

[GraphemeFlag](#enum_textserver_graphemeflag) **GRAPHEME_IS_TAB** = ``64``

Grapheme is the tabulation character.

<div id="_class_textserver_constant_grapheme_is_elongation"></div>

[GraphemeFlag](#enum_textserver_graphemeflag) **GRAPHEME_IS_ELONGATION** = ``128``

Grapheme is kashida.

<div id="_class_textserver_constant_grapheme_is_punctuation"></div>

[GraphemeFlag](#enum_textserver_graphemeflag) **GRAPHEME_IS_PUNCTUATION** = ``256``

Grapheme is punctuation character.

<div id="_class_textserver_constant_grapheme_is_underscore"></div>

[GraphemeFlag](#enum_textserver_graphemeflag) **GRAPHEME_IS_UNDERSCORE** = ``512``

Grapheme is underscore character.

<div id="_class_textserver_constant_grapheme_is_connected"></div>

[GraphemeFlag](#enum_textserver_graphemeflag) **GRAPHEME_IS_CONNECTED** = ``1024``

Grapheme is connected to the previous grapheme. Breaking line before this grapheme is not safe.

<div id="_class_textserver_constant_grapheme_is_safe_to_insert_tatweel"></div>

[GraphemeFlag](#enum_textserver_graphemeflag) **GRAPHEME_IS_SAFE_TO_INSERT_TATWEEL** = ``2048``

It is safe to insert a U+0640 before this grapheme for elongation.

<div id="_class_textserver_constant_grapheme_is_embedded_object"></div>

[GraphemeFlag](#enum_textserver_graphemeflag) **GRAPHEME_IS_EMBEDDED_OBJECT** = ``4096``

Grapheme is an object replacement character for the embedded object.

<div id="_class_textserver_constant_grapheme_is_soft_hyphen"></div>

[GraphemeFlag](#enum_textserver_graphemeflag) **GRAPHEME_IS_SOFT_HYPHEN** = ``8192``

Grapheme is a soft hyphen.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_enum_textserver_hinting"></div>

enum **Hinting**: <div id="enum_textserver_hinting"></div>

<div id="_class_textserver_constant_hinting_none"></div>

[Hinting](#enum_textserver_hinting) **HINTING_NONE** = ``0``

Disables font hinting (smoother but less crisp).

<div id="_class_textserver_constant_hinting_light"></div>

[Hinting](#enum_textserver_hinting) **HINTING_LIGHT** = ``1``

Use the light font hinting mode.

<div id="_class_textserver_constant_hinting_normal"></div>

[Hinting](#enum_textserver_hinting) **HINTING_NORMAL** = ``2``

Use the default font hinting mode (crisper but less smooth).

 **Note:** This hinting mode changes both horizontal and vertical glyph metrics. If applied to monospace font, some glyphs might have different width.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_enum_textserver_subpixelpositioning"></div>

enum **SubpixelPositioning**: <div id="enum_textserver_subpixelpositioning"></div>

<div id="_class_textserver_constant_subpixel_positioning_disabled"></div>

[SubpixelPositioning](#enum_textserver_subpixelpositioning) **SUBPIXEL_POSITIONING_DISABLED** = ``0``

Glyph horizontal position is rounded to the whole pixel size, each glyph is rasterized once.

<div id="_class_textserver_constant_subpixel_positioning_auto"></div>

[SubpixelPositioning](#enum_textserver_subpixelpositioning) **SUBPIXEL_POSITIONING_AUTO** = ``1``

Glyph horizontal position is rounded based on font size.

- To one quarter of the pixel size if font size is smaller or equal to [`SUBPIXEL_POSITIONING_ONE_QUARTER_MAX_SIZE`](#class_textserver_constant_subpixel_positioning_one_quarter_max_size).

- To one half of the pixel size if font size is smaller or equal to [`SUBPIXEL_POSITIONING_ONE_HALF_MAX_SIZE`](#class_textserver_constant_subpixel_positioning_one_half_max_size).

- To the whole pixel size for larger fonts.

<div id="_class_textserver_constant_subpixel_positioning_one_half"></div>

[SubpixelPositioning](#enum_textserver_subpixelpositioning) **SUBPIXEL_POSITIONING_ONE_HALF** = ``2``

Glyph horizontal position is rounded to one half of the pixel size, each glyph is rasterized up to two times.

<div id="_class_textserver_constant_subpixel_positioning_one_quarter"></div>

[SubpixelPositioning](#enum_textserver_subpixelpositioning) **SUBPIXEL_POSITIONING_ONE_QUARTER** = ``3``

Glyph horizontal position is rounded to one quarter of the pixel size, each glyph is rasterized up to four times.

<div id="_class_textserver_constant_subpixel_positioning_one_half_max_size"></div>

[SubpixelPositioning](#enum_textserver_subpixelpositioning) **SUBPIXEL_POSITIONING_ONE_HALF_MAX_SIZE** = ``20``

Maximum font size which will use one half of the pixel subpixel positioning in [`SUBPIXEL_POSITIONING_AUTO`](#class_textserver_constant_subpixel_positioning_auto) mode.

<div id="_class_textserver_constant_subpixel_positioning_one_quarter_max_size"></div>

[SubpixelPositioning](#enum_textserver_subpixelpositioning) **SUBPIXEL_POSITIONING_ONE_QUARTER_MAX_SIZE** = ``16``

Maximum font size which will use one quarter of the pixel subpixel positioning in [`SUBPIXEL_POSITIONING_AUTO`](#class_textserver_constant_subpixel_positioning_auto) mode.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_enum_textserver_feature"></div>

enum **Feature**: <div id="enum_textserver_feature"></div>

<div id="_class_textserver_constant_feature_simple_layout"></div>

[Feature](#enum_textserver_feature) **FEATURE_SIMPLE_LAYOUT** = ``1``

TextServer supports simple text layouts.

<div id="_class_textserver_constant_feature_bidi_layout"></div>

[Feature](#enum_textserver_feature) **FEATURE_BIDI_LAYOUT** = ``2``

TextServer supports bidirectional text layouts.

<div id="_class_textserver_constant_feature_vertical_layout"></div>

[Feature](#enum_textserver_feature) **FEATURE_VERTICAL_LAYOUT** = ``4``

TextServer supports vertical layouts.

<div id="_class_textserver_constant_feature_shaping"></div>

[Feature](#enum_textserver_feature) **FEATURE_SHAPING** = ``8``

TextServer supports complex text shaping.

<div id="_class_textserver_constant_feature_kashida_justification"></div>

[Feature](#enum_textserver_feature) **FEATURE_KASHIDA_JUSTIFICATION** = ``16``

TextServer supports justification using kashidas.

<div id="_class_textserver_constant_feature_break_iterators"></div>

[Feature](#enum_textserver_feature) **FEATURE_BREAK_ITERATORS** = ``32``

TextServer supports complex line/word breaking rules (e.g. dictionary based).

<div id="_class_textserver_constant_feature_font_bitmap"></div>

[Feature](#enum_textserver_feature) **FEATURE_FONT_BITMAP** = ``64``

TextServer supports loading bitmap fonts.

<div id="_class_textserver_constant_feature_font_dynamic"></div>

[Feature](#enum_textserver_feature) **FEATURE_FONT_DYNAMIC** = ``128``

TextServer supports loading dynamic (TrueType, OpeType, etc.) fonts.

<div id="_class_textserver_constant_feature_font_msdf"></div>

[Feature](#enum_textserver_feature) **FEATURE_FONT_MSDF** = ``256``

TextServer supports multichannel signed distance field dynamic font rendering.

<div id="_class_textserver_constant_feature_font_system"></div>

[Feature](#enum_textserver_feature) **FEATURE_FONT_SYSTEM** = ``512``

TextServer supports loading system fonts.

<div id="_class_textserver_constant_feature_font_variable"></div>

[Feature](#enum_textserver_feature) **FEATURE_FONT_VARIABLE** = ``1024``

TextServer supports variable fonts.

<div id="_class_textserver_constant_feature_context_sensitive_case_conversion"></div>

[Feature](#enum_textserver_feature) **FEATURE_CONTEXT_SENSITIVE_CASE_CONVERSION** = ``2048``

TextServer supports locale dependent and context sensitive case conversion.

<div id="_class_textserver_constant_feature_use_support_data"></div>

[Feature](#enum_textserver_feature) **FEATURE_USE_SUPPORT_DATA** = ``4096``

TextServer require external data file for some features, see [`load_support_data`](#class_textserver_method_load_support_data).

<div id="_class_textserver_constant_feature_unicode_identifiers"></div>

[Feature](#enum_textserver_feature) **FEATURE_UNICODE_IDENTIFIERS** = ``8192``

TextServer supports UAX #31 identifier validation, see [`is_valid_identifier`](#class_textserver_method_is_valid_identifier).

<div id="_class_textserver_constant_feature_unicode_security"></div>

[Feature](#enum_textserver_feature) **FEATURE_UNICODE_SECURITY** = ``16384``

TextServer supports [*Unicode Technical Report #36*](https://unicode.org/reports/tr36/) and [*Unicode Technical Standard #39*](https://unicode.org/reports/tr39/) based spoof detection features.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_enum_textserver_contourpointtag"></div>

enum **ContourPointTag**: <div id="enum_textserver_contourpointtag"></div>

<div id="_class_textserver_constant_contour_curve_tag_on"></div>

[ContourPointTag](#enum_textserver_contourpointtag) **CONTOUR_CURVE_TAG_ON** = ``1``

Contour point is on the curve.

<div id="_class_textserver_constant_contour_curve_tag_off_conic"></div>

[ContourPointTag](#enum_textserver_contourpointtag) **CONTOUR_CURVE_TAG_OFF_CONIC** = ``0``

Contour point isn't on the curve, but serves as a control point for a conic (quadratic) Bézier arc.

<div id="_class_textserver_constant_contour_curve_tag_off_cubic"></div>

[ContourPointTag](#enum_textserver_contourpointtag) **CONTOUR_CURVE_TAG_OFF_CUBIC** = ``2``

Contour point isn't on the curve, but serves as a control point for a cubic Bézier arc.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_enum_textserver_spacingtype"></div>

enum **SpacingType**: <div id="enum_textserver_spacingtype"></div>

<div id="_class_textserver_constant_spacing_glyph"></div>

[SpacingType](#enum_textserver_spacingtype) **SPACING_GLYPH** = ``0``

Spacing for each glyph.

<div id="_class_textserver_constant_spacing_space"></div>

[SpacingType](#enum_textserver_spacingtype) **SPACING_SPACE** = ``1``

Spacing for the space character.

<div id="_class_textserver_constant_spacing_top"></div>

[SpacingType](#enum_textserver_spacingtype) **SPACING_TOP** = ``2``

Spacing at the top of the line.

<div id="_class_textserver_constant_spacing_bottom"></div>

[SpacingType](#enum_textserver_spacingtype) **SPACING_BOTTOM** = ``3``

Spacing at the bottom of the line.

<div id="_class_textserver_constant_spacing_max"></div>

[SpacingType](#enum_textserver_spacingtype) **SPACING_MAX** = ``4``

Represents the size of the [SpacingType](#enum_textserver_spacingtype) enum.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_enum_textserver_fontstyle"></div>

flags **FontStyle**: <div id="enum_textserver_fontstyle"></div>

<div id="_class_textserver_constant_font_bold"></div>

[FontStyle](#enum_textserver_fontstyle) **FONT_BOLD** = ``1``

Font is bold.

<div id="_class_textserver_constant_font_italic"></div>

[FontStyle](#enum_textserver_fontstyle) **FONT_ITALIC** = ``2``

Font is italic or oblique.

<div id="_class_textserver_constant_font_fixed_width"></div>

[FontStyle](#enum_textserver_fontstyle) **FONT_FIXED_WIDTH** = ``4``

Font have fixed-width characters.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_enum_textserver_structuredtextparser"></div>

enum **StructuredTextParser**: <div id="enum_textserver_structuredtextparser"></div>

<div id="_class_textserver_constant_structured_text_default"></div>

[StructuredTextParser](#enum_textserver_structuredtextparser) **STRUCTURED_TEXT_DEFAULT** = ``0``

Use default Unicode BiDi algorithm.

<div id="_class_textserver_constant_structured_text_uri"></div>

[StructuredTextParser](#enum_textserver_structuredtextparser) **STRUCTURED_TEXT_URI** = ``1``

BiDi override for URI.

<div id="_class_textserver_constant_structured_text_file"></div>

[StructuredTextParser](#enum_textserver_structuredtextparser) **STRUCTURED_TEXT_FILE** = ``2``

BiDi override for file path.

<div id="_class_textserver_constant_structured_text_email"></div>

[StructuredTextParser](#enum_textserver_structuredtextparser) **STRUCTURED_TEXT_EMAIL** = ``3``

BiDi override for email.

<div id="_class_textserver_constant_structured_text_list"></div>

[StructuredTextParser](#enum_textserver_structuredtextparser) **STRUCTURED_TEXT_LIST** = ``4``

BiDi override for lists. Structured text options: list separator [`String`](class_string.md).

<div id="_class_textserver_constant_structured_text_gdscript"></div>

[StructuredTextParser](#enum_textserver_structuredtextparser) **STRUCTURED_TEXT_GDSCRIPT** = ``5``

BiDi override for GDScript.

<div id="_class_textserver_constant_structured_text_custom"></div>

[StructuredTextParser](#enum_textserver_structuredtextparser) **STRUCTURED_TEXT_CUSTOM** = ``6``

User defined structured text BiDi override function.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_enum_textserver_fixedsizescalemode"></div>

enum **FixedSizeScaleMode**: <div id="enum_textserver_fixedsizescalemode"></div>

<div id="_class_textserver_constant_fixed_size_scale_disable"></div>

[FixedSizeScaleMode](#enum_textserver_fixedsizescalemode) **FIXED_SIZE_SCALE_DISABLE** = ``0``

Bitmap font is not scaled.

<div id="_class_textserver_constant_fixed_size_scale_integer_only"></div>

[FixedSizeScaleMode](#enum_textserver_fixedsizescalemode) **FIXED_SIZE_SCALE_INTEGER_ONLY** = ``1``

Bitmap font is scaled to the closest integer multiple of the font's fixed size. This is the recommended option for pixel art fonts.

<div id="_class_textserver_constant_fixed_size_scale_enabled"></div>

[FixedSizeScaleMode](#enum_textserver_fixedsizescalemode) **FIXED_SIZE_SCALE_ENABLED** = ``2``

Bitmap font is scaled to an arbitrary (fractional) size. This is the recommended option for non-pixel art fonts.

<!-- rst-class:: classref-section-separator -->

---

## 方法说明

<div id="_class_textserver_method_create_font"></div>

[`RID`](class_rid.md) **create_font** ( )<div id="class_textserver_method_create_font"></div>

Creates a new, empty font cache entry resource. To free the resulting resource, use the [`free_rid`](#class_textserver_method_free_rid) method.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_textserver_method_create_font_linked_variation"></div>

[`RID`](class_rid.md) **create_font_linked_variation** ( font_rid: [`RID`](class_rid.md) )<div id="class_textserver_method_create_font_linked_variation"></div>

Creates a new variation existing font which is reusing the same glyph cache and font data. To free the resulting resource, use the [`free_rid`](#class_textserver_method_free_rid) method.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_textserver_method_create_shaped_text"></div>

[`RID`](class_rid.md) **create_shaped_text** ( direction: [Direction](#enum_textserver_direction) = 0, orientation: [Orientation](#enum_textserver_orientation) = 0 )<div id="class_textserver_method_create_shaped_text"></div>

Creates a new buffer for complex text layout, with the given `direction` and `orientation`. To free the resulting buffer, use [`free_rid`](#class_textserver_method_free_rid) method.

 **Note:** Direction is ignored if server does not support [`FEATURE_BIDI_LAYOUT`](#class_textserver_constant_feature_bidi_layout) feature (supported by [`TextServerAdvanced`](class_textserveradvanced.md)).

 **Note:** Orientation is ignored if server does not support [`FEATURE_VERTICAL_LAYOUT`](#class_textserver_constant_feature_vertical_layout) feature (supported by [`TextServerAdvanced`](class_textserveradvanced.md)).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_textserver_method_draw_hex_code_box"></div>

`void` **draw_hex_code_box** ( canvas: [`RID`](class_rid.md), size: [`int`](class_int.md), pos: [`Vector2`](class_vector2.md), index: [`int`](class_int.md), color: [`Color`](class_color.md) ) const[^const]<div id="class_textserver_method_draw_hex_code_box"></div>

Draws box displaying character hexadecimal code. Used for replacing missing characters.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_textserver_method_font_clear_glyphs"></div>

`void` **font_clear_glyphs** ( font_rid: [`RID`](class_rid.md), size: [`Vector2i`](class_vector2i.md) )<div id="class_textserver_method_font_clear_glyphs"></div>

Removes all rendered glyph information from the cache entry.

 **Note:** This function will not remove textures associated with the glyphs, use [`font_remove_texture`](#class_textserver_method_font_remove_texture) to remove them manually.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_textserver_method_font_clear_kerning_map"></div>

`void` **font_clear_kerning_map** ( font_rid: [`RID`](class_rid.md), size: [`int`](class_int.md) )<div id="class_textserver_method_font_clear_kerning_map"></div>

Removes all kerning overrides.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_textserver_method_font_clear_size_cache"></div>

`void` **font_clear_size_cache** ( font_rid: [`RID`](class_rid.md) )<div id="class_textserver_method_font_clear_size_cache"></div>

Removes all font sizes from the cache entry.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_textserver_method_font_clear_textures"></div>

`void` **font_clear_textures** ( font_rid: [`RID`](class_rid.md), size: [`Vector2i`](class_vector2i.md) )<div id="class_textserver_method_font_clear_textures"></div>

Removes all textures from font cache entry.

 **Note:** This function will not remove glyphs associated with the texture, use [`font_remove_glyph`](#class_textserver_method_font_remove_glyph) to remove them manually.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_textserver_method_font_draw_glyph"></div>

`void` **font_draw_glyph** ( font_rid: [`RID`](class_rid.md), canvas: [`RID`](class_rid.md), size: [`int`](class_int.md), pos: [`Vector2`](class_vector2.md), index: [`int`](class_int.md), color: [`Color`](class_color.md) = Color(1, 1, 1, 1) ) const[^const]<div id="class_textserver_method_font_draw_glyph"></div>

Draws single glyph into a canvas item at the position, using `font_rid` at the size `size`.

 **Note:** Glyph index is specific to the font, use glyphs indices returned by [`shaped_text_get_glyphs`](#class_textserver_method_shaped_text_get_glyphs) or [`font_get_glyph_index`](#class_textserver_method_font_get_glyph_index).

 **Note:** If there are pending glyphs to render, calling this function might trigger the texture cache update.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_textserver_method_font_draw_glyph_outline"></div>

`void` **font_draw_glyph_outline** ( font_rid: [`RID`](class_rid.md), canvas: [`RID`](class_rid.md), size: [`int`](class_int.md), outline_size: [`int`](class_int.md), pos: [`Vector2`](class_vector2.md), index: [`int`](class_int.md), color: [`Color`](class_color.md) = Color(1, 1, 1, 1) ) const[^const]<div id="class_textserver_method_font_draw_glyph_outline"></div>

Draws single glyph outline of size `outline_size` into a canvas item at the position, using `font_rid` at the size `size`.

 **Note:** Glyph index is specific to the font, use glyphs indices returned by [`shaped_text_get_glyphs`](#class_textserver_method_shaped_text_get_glyphs) or [`font_get_glyph_index`](#class_textserver_method_font_get_glyph_index).

 **Note:** If there are pending glyphs to render, calling this function might trigger the texture cache update.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_textserver_method_font_get_antialiasing"></div>

[FontAntialiasing](#enum_textserver_fontantialiasing) **font_get_antialiasing** ( font_rid: [`RID`](class_rid.md) ) const[^const]<div id="class_textserver_method_font_get_antialiasing"></div>

Returns font anti-aliasing mode.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_textserver_method_font_get_ascent"></div>

[`float`](class_float.md) **font_get_ascent** ( font_rid: [`RID`](class_rid.md), size: [`int`](class_int.md) ) const[^const]<div id="class_textserver_method_font_get_ascent"></div>

Returns the font ascent (number of pixels above the baseline).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_textserver_method_font_get_baseline_offset"></div>

[`float`](class_float.md) **font_get_baseline_offset** ( font_rid: [`RID`](class_rid.md) ) const[^const]<div id="class_textserver_method_font_get_baseline_offset"></div>

Returns extra baseline offset (as a fraction of font height).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_textserver_method_font_get_char_from_glyph_index"></div>

[`int`](class_int.md) **font_get_char_from_glyph_index** ( font_rid: [`RID`](class_rid.md), size: [`int`](class_int.md), glyph_index: [`int`](class_int.md) ) const[^const]<div id="class_textserver_method_font_get_char_from_glyph_index"></div>

Returns character code associated with `glyph_index`, or `0` if `glyph_index` is invalid. See [`font_get_glyph_index`](#class_textserver_method_font_get_glyph_index).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_textserver_method_font_get_descent"></div>

[`float`](class_float.md) **font_get_descent** ( font_rid: [`RID`](class_rid.md), size: [`int`](class_int.md) ) const[^const]<div id="class_textserver_method_font_get_descent"></div>

Returns the font descent (number of pixels below the baseline).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_textserver_method_font_get_disable_embedded_bitmaps"></div>

[`bool`](class_bool.md) **font_get_disable_embedded_bitmaps** ( font_rid: [`RID`](class_rid.md) ) const[^const]<div id="class_textserver_method_font_get_disable_embedded_bitmaps"></div>

Returns whether the font's embedded bitmap loading is disabled.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_textserver_method_font_get_embolden"></div>

[`float`](class_float.md) **font_get_embolden** ( font_rid: [`RID`](class_rid.md) ) const[^const]<div id="class_textserver_method_font_get_embolden"></div>

Returns font embolden strength.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_textserver_method_font_get_face_count"></div>

[`int`](class_int.md) **font_get_face_count** ( font_rid: [`RID`](class_rid.md) ) const[^const]<div id="class_textserver_method_font_get_face_count"></div>

Returns number of faces in the TrueType / OpenType collection.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_textserver_method_font_get_face_index"></div>

[`int`](class_int.md) **font_get_face_index** ( font_rid: [`RID`](class_rid.md) ) const[^const]<div id="class_textserver_method_font_get_face_index"></div>

Returns an active face index in the TrueType / OpenType collection.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_textserver_method_font_get_fixed_size"></div>

[`int`](class_int.md) **font_get_fixed_size** ( font_rid: [`RID`](class_rid.md) ) const[^const]<div id="class_textserver_method_font_get_fixed_size"></div>

Returns bitmap font fixed size.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_textserver_method_font_get_fixed_size_scale_mode"></div>

[FixedSizeScaleMode](#enum_textserver_fixedsizescalemode) **font_get_fixed_size_scale_mode** ( font_rid: [`RID`](class_rid.md) ) const[^const]<div id="class_textserver_method_font_get_fixed_size_scale_mode"></div>

Returns bitmap font scaling mode.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_textserver_method_font_get_generate_mipmaps"></div>

[`bool`](class_bool.md) **font_get_generate_mipmaps** ( font_rid: [`RID`](class_rid.md) ) const[^const]<div id="class_textserver_method_font_get_generate_mipmaps"></div>

Returns `true` if font texture mipmap generation is enabled.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_textserver_method_font_get_global_oversampling"></div>

[`float`](class_float.md) **font_get_global_oversampling** ( ) const[^const]<div id="class_textserver_method_font_get_global_oversampling"></div>

Returns the font oversampling factor, shared by all fonts in the TextServer.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_textserver_method_font_get_glyph_advance"></div>

[`Vector2`](class_vector2.md) **font_get_glyph_advance** ( font_rid: [`RID`](class_rid.md), size: [`int`](class_int.md), glyph: [`int`](class_int.md) ) const[^const]<div id="class_textserver_method_font_get_glyph_advance"></div>

Returns glyph advance (offset of the next glyph).

 **Note:** Advance for glyphs outlines is the same as the base glyph advance and is not saved.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_textserver_method_font_get_glyph_contours"></div>

[`Dictionary`](class_dictionary.md) **font_get_glyph_contours** ( font: [`RID`](class_rid.md), size: [`int`](class_int.md), index: [`int`](class_int.md) ) const[^const]<div id="class_textserver_method_font_get_glyph_contours"></div>

Returns outline contours of the glyph as a [`Dictionary`](class_dictionary.md) with the following contents:

 `points`         - [`PackedVector3Array`](class_packedvector3array.md), containing outline points. `x` and `y` are point coordinates. `z` is the type of the point, using the [ContourPointTag](#enum_textserver_contourpointtag) values.

 `contours`       - [`PackedInt32Array`](class_packedint32array.md), containing indices the end points of each contour.

 `orientation`    - [`bool`](class_bool.md), contour orientation. If `true`, clockwise contours must be filled.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_textserver_method_font_get_glyph_index"></div>

[`int`](class_int.md) **font_get_glyph_index** ( font_rid: [`RID`](class_rid.md), size: [`int`](class_int.md), char: [`int`](class_int.md), variation_selector: [`int`](class_int.md) ) const[^const]<div id="class_textserver_method_font_get_glyph_index"></div>

Returns the glyph index of a `char`, optionally modified by the `variation_selector`. See [`font_get_char_from_glyph_index`](#class_textserver_method_font_get_char_from_glyph_index).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_textserver_method_font_get_glyph_list"></div>

[`PackedInt32Array`](class_packedint32array.md) **font_get_glyph_list** ( font_rid: [`RID`](class_rid.md), size: [`Vector2i`](class_vector2i.md) ) const[^const]<div id="class_textserver_method_font_get_glyph_list"></div>

Returns list of rendered glyphs in the cache entry.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_textserver_method_font_get_glyph_offset"></div>

[`Vector2`](class_vector2.md) **font_get_glyph_offset** ( font_rid: [`RID`](class_rid.md), size: [`Vector2i`](class_vector2i.md), glyph: [`int`](class_int.md) ) const[^const]<div id="class_textserver_method_font_get_glyph_offset"></div>

Returns glyph offset from the baseline.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_textserver_method_font_get_glyph_size"></div>

[`Vector2`](class_vector2.md) **font_get_glyph_size** ( font_rid: [`RID`](class_rid.md), size: [`Vector2i`](class_vector2i.md), glyph: [`int`](class_int.md) ) const[^const]<div id="class_textserver_method_font_get_glyph_size"></div>

Returns size of the glyph.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_textserver_method_font_get_glyph_texture_idx"></div>

[`int`](class_int.md) **font_get_glyph_texture_idx** ( font_rid: [`RID`](class_rid.md), size: [`Vector2i`](class_vector2i.md), glyph: [`int`](class_int.md) ) const[^const]<div id="class_textserver_method_font_get_glyph_texture_idx"></div>

Returns index of the cache texture containing the glyph.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_textserver_method_font_get_glyph_texture_rid"></div>

[`RID`](class_rid.md) **font_get_glyph_texture_rid** ( font_rid: [`RID`](class_rid.md), size: [`Vector2i`](class_vector2i.md), glyph: [`int`](class_int.md) ) const[^const]<div id="class_textserver_method_font_get_glyph_texture_rid"></div>

Returns resource ID of the cache texture containing the glyph.

 **Note:** If there are pending glyphs to render, calling this function might trigger the texture cache update.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_textserver_method_font_get_glyph_texture_size"></div>

[`Vector2`](class_vector2.md) **font_get_glyph_texture_size** ( font_rid: [`RID`](class_rid.md), size: [`Vector2i`](class_vector2i.md), glyph: [`int`](class_int.md) ) const[^const]<div id="class_textserver_method_font_get_glyph_texture_size"></div>

Returns size of the cache texture containing the glyph.

 **Note:** If there are pending glyphs to render, calling this function might trigger the texture cache update.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_textserver_method_font_get_glyph_uv_rect"></div>

[`Rect2`](class_rect2.md) **font_get_glyph_uv_rect** ( font_rid: [`RID`](class_rid.md), size: [`Vector2i`](class_vector2i.md), glyph: [`int`](class_int.md) ) const[^const]<div id="class_textserver_method_font_get_glyph_uv_rect"></div>

Returns rectangle in the cache texture containing the glyph.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_textserver_method_font_get_hinting"></div>

[Hinting](#enum_textserver_hinting) **font_get_hinting** ( font_rid: [`RID`](class_rid.md) ) const[^const]<div id="class_textserver_method_font_get_hinting"></div>

Returns the font hinting mode. Used by dynamic fonts only.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_textserver_method_font_get_kerning"></div>

[`Vector2`](class_vector2.md) **font_get_kerning** ( font_rid: [`RID`](class_rid.md), size: [`int`](class_int.md), glyph_pair: [`Vector2i`](class_vector2i.md) ) const[^const]<div id="class_textserver_method_font_get_kerning"></div>

Returns kerning for the pair of glyphs.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_textserver_method_font_get_kerning_list"></div>

[Array](class_array.md) [`Vector2i`](class_vector2i.md) **font_get_kerning_list** ( font_rid: [`RID`](class_rid.md), size: [`int`](class_int.md) ) const[^const]<div id="class_textserver_method_font_get_kerning_list"></div>

Returns list of the kerning overrides.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_textserver_method_font_get_language_support_override"></div>

[`bool`](class_bool.md) **font_get_language_support_override** ( font_rid: [`RID`](class_rid.md), language: [`String`](class_string.md) )<div id="class_textserver_method_font_get_language_support_override"></div>

Returns `true` if support override is enabled for the `language`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_textserver_method_font_get_language_support_overrides"></div>

[`PackedStringArray`](class_packedstringarray.md) **font_get_language_support_overrides** ( font_rid: [`RID`](class_rid.md) )<div id="class_textserver_method_font_get_language_support_overrides"></div>

Returns list of language support overrides.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_textserver_method_font_get_msdf_pixel_range"></div>

[`int`](class_int.md) **font_get_msdf_pixel_range** ( font_rid: [`RID`](class_rid.md) ) const[^const]<div id="class_textserver_method_font_get_msdf_pixel_range"></div>

Returns the width of the range around the shape between the minimum and maximum representable signed distance.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_textserver_method_font_get_msdf_size"></div>

[`int`](class_int.md) **font_get_msdf_size** ( font_rid: [`RID`](class_rid.md) ) const[^const]<div id="class_textserver_method_font_get_msdf_size"></div>

Returns source font size used to generate MSDF textures.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_textserver_method_font_get_name"></div>

[`String`](class_string.md) **font_get_name** ( font_rid: [`RID`](class_rid.md) ) const[^const]<div id="class_textserver_method_font_get_name"></div>

Returns font family name.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_textserver_method_font_get_opentype_feature_overrides"></div>

[`Dictionary`](class_dictionary.md) **font_get_opentype_feature_overrides** ( font_rid: [`RID`](class_rid.md) ) const[^const]<div id="class_textserver_method_font_get_opentype_feature_overrides"></div>

Returns font OpenType feature set override.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_textserver_method_font_get_ot_name_strings"></div>

[`Dictionary`](class_dictionary.md) **font_get_ot_name_strings** ( font_rid: [`RID`](class_rid.md) ) const[^const]<div id="class_textserver_method_font_get_ot_name_strings"></div>

Returns [`Dictionary`](class_dictionary.md) with OpenType font name strings (localized font names, version, description, license information, sample text, etc.).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_textserver_method_font_get_oversampling"></div>

[`float`](class_float.md) **font_get_oversampling** ( font_rid: [`RID`](class_rid.md) ) const[^const]<div id="class_textserver_method_font_get_oversampling"></div>

Returns font oversampling factor, if set to `0.0` global oversampling factor is used instead. Used by dynamic fonts only.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_textserver_method_font_get_scale"></div>

[`float`](class_float.md) **font_get_scale** ( font_rid: [`RID`](class_rid.md), size: [`int`](class_int.md) ) const[^const]<div id="class_textserver_method_font_get_scale"></div>

Returns scaling factor of the color bitmap font.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_textserver_method_font_get_script_support_override"></div>

[`bool`](class_bool.md) **font_get_script_support_override** ( font_rid: [`RID`](class_rid.md), script: [`String`](class_string.md) )<div id="class_textserver_method_font_get_script_support_override"></div>

Returns `true` if support override is enabled for the `script`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_textserver_method_font_get_script_support_overrides"></div>

[`PackedStringArray`](class_packedstringarray.md) **font_get_script_support_overrides** ( font_rid: [`RID`](class_rid.md) )<div id="class_textserver_method_font_get_script_support_overrides"></div>

Returns list of script support overrides.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_textserver_method_font_get_size_cache_list"></div>

[Array](class_array.md) [`Vector2i`](class_vector2i.md) **font_get_size_cache_list** ( font_rid: [`RID`](class_rid.md) ) const[^const]<div id="class_textserver_method_font_get_size_cache_list"></div>

Returns list of the font sizes in the cache. Each size is [`Vector2i`](class_vector2i.md) with font size and outline size.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_textserver_method_font_get_spacing"></div>

[`int`](class_int.md) **font_get_spacing** ( font_rid: [`RID`](class_rid.md), spacing: [SpacingType](#enum_textserver_spacingtype) ) const[^const]<div id="class_textserver_method_font_get_spacing"></div>

Returns the spacing for `spacing` (see [SpacingType](#enum_textserver_spacingtype)) in pixels (not relative to the font size).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_textserver_method_font_get_stretch"></div>

[`int`](class_int.md) **font_get_stretch** ( font_rid: [`RID`](class_rid.md) ) const[^const]<div id="class_textserver_method_font_get_stretch"></div>

Returns font stretch amount, compared to a normal width. A percentage value between `50%` and `200%`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_textserver_method_font_get_style"></div>

[FontStyle](#enum_textserver_fontstyle) **font_get_style** ( font_rid: [`RID`](class_rid.md) ) const[^const]<div id="class_textserver_method_font_get_style"></div>

Returns font style flags, see [FontStyle](#enum_textserver_fontstyle).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_textserver_method_font_get_style_name"></div>

[`String`](class_string.md) **font_get_style_name** ( font_rid: [`RID`](class_rid.md) ) const[^const]<div id="class_textserver_method_font_get_style_name"></div>

Returns font style name.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_textserver_method_font_get_subpixel_positioning"></div>

[SubpixelPositioning](#enum_textserver_subpixelpositioning) **font_get_subpixel_positioning** ( font_rid: [`RID`](class_rid.md) ) const[^const]<div id="class_textserver_method_font_get_subpixel_positioning"></div>

Returns font subpixel glyph positioning mode.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_textserver_method_font_get_supported_chars"></div>

[`String`](class_string.md) **font_get_supported_chars** ( font_rid: [`RID`](class_rid.md) ) const[^const]<div id="class_textserver_method_font_get_supported_chars"></div>

Returns a string containing all the characters available in the font.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_textserver_method_font_get_texture_count"></div>

[`int`](class_int.md) **font_get_texture_count** ( font_rid: [`RID`](class_rid.md), size: [`Vector2i`](class_vector2i.md) ) const[^const]<div id="class_textserver_method_font_get_texture_count"></div>

Returns number of textures used by font cache entry.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_textserver_method_font_get_texture_image"></div>

[`Image`](class_image.md) **font_get_texture_image** ( font_rid: [`RID`](class_rid.md), size: [`Vector2i`](class_vector2i.md), texture_index: [`int`](class_int.md) ) const[^const]<div id="class_textserver_method_font_get_texture_image"></div>

Returns font cache texture image data.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_textserver_method_font_get_texture_offsets"></div>

[`PackedInt32Array`](class_packedint32array.md) **font_get_texture_offsets** ( font_rid: [`RID`](class_rid.md), size: [`Vector2i`](class_vector2i.md), texture_index: [`int`](class_int.md) ) const[^const]<div id="class_textserver_method_font_get_texture_offsets"></div>

Returns array containing glyph packing data.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_textserver_method_font_get_transform"></div>

[`Transform2D`](class_transform2d.md) **font_get_transform** ( font_rid: [`RID`](class_rid.md) ) const[^const]<div id="class_textserver_method_font_get_transform"></div>

Returns 2D transform applied to the font outlines.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_textserver_method_font_get_underline_position"></div>

[`float`](class_float.md) **font_get_underline_position** ( font_rid: [`RID`](class_rid.md), size: [`int`](class_int.md) ) const[^const]<div id="class_textserver_method_font_get_underline_position"></div>

Returns pixel offset of the underline below the baseline.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_textserver_method_font_get_underline_thickness"></div>

[`float`](class_float.md) **font_get_underline_thickness** ( font_rid: [`RID`](class_rid.md), size: [`int`](class_int.md) ) const[^const]<div id="class_textserver_method_font_get_underline_thickness"></div>

Returns thickness of the underline in pixels.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_textserver_method_font_get_variation_coordinates"></div>

[`Dictionary`](class_dictionary.md) **font_get_variation_coordinates** ( font_rid: [`RID`](class_rid.md) ) const[^const]<div id="class_textserver_method_font_get_variation_coordinates"></div>

Returns variation coordinates for the specified font cache entry. See [`font_supported_variation_list`](#class_textserver_method_font_supported_variation_list) for more info.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_textserver_method_font_get_weight"></div>

[`int`](class_int.md) **font_get_weight** ( font_rid: [`RID`](class_rid.md) ) const[^const]<div id="class_textserver_method_font_get_weight"></div>

Returns weight (boldness) of the font. A value in the `100...999` range, normal font weight is `400`, bold font weight is `700`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_textserver_method_font_has_char"></div>

[`bool`](class_bool.md) **font_has_char** ( font_rid: [`RID`](class_rid.md), char: [`int`](class_int.md) ) const[^const]<div id="class_textserver_method_font_has_char"></div>

Returns `true` if a Unicode `char` is available in the font.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_textserver_method_font_is_allow_system_fallback"></div>

[`bool`](class_bool.md) **font_is_allow_system_fallback** ( font_rid: [`RID`](class_rid.md) ) const[^const]<div id="class_textserver_method_font_is_allow_system_fallback"></div>

Returns `true` if system fonts can be automatically used as fallbacks.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_textserver_method_font_is_force_autohinter"></div>

[`bool`](class_bool.md) **font_is_force_autohinter** ( font_rid: [`RID`](class_rid.md) ) const[^const]<div id="class_textserver_method_font_is_force_autohinter"></div>

Returns `true` if auto-hinting is supported and preferred over font built-in hinting. Used by dynamic fonts only.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_textserver_method_font_is_language_supported"></div>

[`bool`](class_bool.md) **font_is_language_supported** ( font_rid: [`RID`](class_rid.md), language: [`String`](class_string.md) ) const[^const]<div id="class_textserver_method_font_is_language_supported"></div>

Returns `true`, if font supports given language ([*ISO 639*](https://en.wikipedia.org/wiki/ISO_639-1) code).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_textserver_method_font_is_multichannel_signed_distance_field"></div>

[`bool`](class_bool.md) **font_is_multichannel_signed_distance_field** ( font_rid: [`RID`](class_rid.md) ) const[^const]<div id="class_textserver_method_font_is_multichannel_signed_distance_field"></div>

Returns `true` if glyphs of all sizes are rendered using single multichannel signed distance field generated from the dynamic font vector data.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_textserver_method_font_is_script_supported"></div>

[`bool`](class_bool.md) **font_is_script_supported** ( font_rid: [`RID`](class_rid.md), script: [`String`](class_string.md) ) const[^const]<div id="class_textserver_method_font_is_script_supported"></div>

Returns `true`, if font supports given script (ISO 15924 code).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_textserver_method_font_remove_glyph"></div>

`void` **font_remove_glyph** ( font_rid: [`RID`](class_rid.md), size: [`Vector2i`](class_vector2i.md), glyph: [`int`](class_int.md) )<div id="class_textserver_method_font_remove_glyph"></div>

Removes specified rendered glyph information from the cache entry.

 **Note:** This function will not remove textures associated with the glyphs, use [`font_remove_texture`](#class_textserver_method_font_remove_texture) to remove them manually.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_textserver_method_font_remove_kerning"></div>

`void` **font_remove_kerning** ( font_rid: [`RID`](class_rid.md), size: [`int`](class_int.md), glyph_pair: [`Vector2i`](class_vector2i.md) )<div id="class_textserver_method_font_remove_kerning"></div>

Removes kerning override for the pair of glyphs.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_textserver_method_font_remove_language_support_override"></div>

`void` **font_remove_language_support_override** ( font_rid: [`RID`](class_rid.md), language: [`String`](class_string.md) )<div id="class_textserver_method_font_remove_language_support_override"></div>

Remove language support override.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_textserver_method_font_remove_script_support_override"></div>

`void` **font_remove_script_support_override** ( font_rid: [`RID`](class_rid.md), script: [`String`](class_string.md) )<div id="class_textserver_method_font_remove_script_support_override"></div>

Removes script support override.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_textserver_method_font_remove_size_cache"></div>

`void` **font_remove_size_cache** ( font_rid: [`RID`](class_rid.md), size: [`Vector2i`](class_vector2i.md) )<div id="class_textserver_method_font_remove_size_cache"></div>

Removes specified font size from the cache entry.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_textserver_method_font_remove_texture"></div>

`void` **font_remove_texture** ( font_rid: [`RID`](class_rid.md), size: [`Vector2i`](class_vector2i.md), texture_index: [`int`](class_int.md) )<div id="class_textserver_method_font_remove_texture"></div>

Removes specified texture from the cache entry.

 **Note:** This function will not remove glyphs associated with the texture, remove them manually, using [`font_remove_glyph`](#class_textserver_method_font_remove_glyph).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_textserver_method_font_render_glyph"></div>

`void` **font_render_glyph** ( font_rid: [`RID`](class_rid.md), size: [`Vector2i`](class_vector2i.md), index: [`int`](class_int.md) )<div id="class_textserver_method_font_render_glyph"></div>

Renders specified glyph to the font cache texture.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_textserver_method_font_render_range"></div>

`void` **font_render_range** ( font_rid: [`RID`](class_rid.md), size: [`Vector2i`](class_vector2i.md), start: [`int`](class_int.md), end: [`int`](class_int.md) )<div id="class_textserver_method_font_render_range"></div>

Renders the range of characters to the font cache texture.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_textserver_method_font_set_allow_system_fallback"></div>

`void` **font_set_allow_system_fallback** ( font_rid: [`RID`](class_rid.md), allow_system_fallback: [`bool`](class_bool.md) )<div id="class_textserver_method_font_set_allow_system_fallback"></div>

If set to `true`, system fonts can be automatically used as fallbacks.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_textserver_method_font_set_antialiasing"></div>

`void` **font_set_antialiasing** ( font_rid: [`RID`](class_rid.md), antialiasing: [FontAntialiasing](#enum_textserver_fontantialiasing) )<div id="class_textserver_method_font_set_antialiasing"></div>

Sets font anti-aliasing mode.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_textserver_method_font_set_ascent"></div>

`void` **font_set_ascent** ( font_rid: [`RID`](class_rid.md), size: [`int`](class_int.md), ascent: [`float`](class_float.md) )<div id="class_textserver_method_font_set_ascent"></div>

Sets the font ascent (number of pixels above the baseline).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_textserver_method_font_set_baseline_offset"></div>

`void` **font_set_baseline_offset** ( font_rid: [`RID`](class_rid.md), baseline_offset: [`float`](class_float.md) )<div id="class_textserver_method_font_set_baseline_offset"></div>

Sets extra baseline offset (as a fraction of font height).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_textserver_method_font_set_data"></div>

`void` **font_set_data** ( font_rid: [`RID`](class_rid.md), data: [`PackedByteArray`](class_packedbytearray.md) )<div id="class_textserver_method_font_set_data"></div>

Sets font source data, e.g contents of the dynamic font source file.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_textserver_method_font_set_descent"></div>

`void` **font_set_descent** ( font_rid: [`RID`](class_rid.md), size: [`int`](class_int.md), descent: [`float`](class_float.md) )<div id="class_textserver_method_font_set_descent"></div>

Sets the font descent (number of pixels below the baseline).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_textserver_method_font_set_disable_embedded_bitmaps"></div>

`void` **font_set_disable_embedded_bitmaps** ( font_rid: [`RID`](class_rid.md), disable_embedded_bitmaps: [`bool`](class_bool.md) )<div id="class_textserver_method_font_set_disable_embedded_bitmaps"></div>

If set to `true`, embedded font bitmap loading is disabled (bitmap-only and color fonts ignore this property).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_textserver_method_font_set_embolden"></div>

`void` **font_set_embolden** ( font_rid: [`RID`](class_rid.md), strength: [`float`](class_float.md) )<div id="class_textserver_method_font_set_embolden"></div>

Sets font embolden strength. If `strength` is not equal to zero, emboldens the font outlines. Negative values reduce the outline thickness.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_textserver_method_font_set_face_index"></div>

`void` **font_set_face_index** ( font_rid: [`RID`](class_rid.md), face_index: [`int`](class_int.md) )<div id="class_textserver_method_font_set_face_index"></div>

Sets an active face index in the TrueType / OpenType collection.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_textserver_method_font_set_fixed_size"></div>

`void` **font_set_fixed_size** ( font_rid: [`RID`](class_rid.md), fixed_size: [`int`](class_int.md) )<div id="class_textserver_method_font_set_fixed_size"></div>

Sets bitmap font fixed size. If set to value greater than zero, same cache entry will be used for all font sizes.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_textserver_method_font_set_fixed_size_scale_mode"></div>

`void` **font_set_fixed_size_scale_mode** ( font_rid: [`RID`](class_rid.md), fixed_size_scale_mode: [FixedSizeScaleMode](#enum_textserver_fixedsizescalemode) )<div id="class_textserver_method_font_set_fixed_size_scale_mode"></div>

Sets bitmap font scaling mode. This property is used only if `fixed_size` is greater than zero.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_textserver_method_font_set_force_autohinter"></div>

`void` **font_set_force_autohinter** ( font_rid: [`RID`](class_rid.md), force_autohinter: [`bool`](class_bool.md) )<div id="class_textserver_method_font_set_force_autohinter"></div>

If set to `true` auto-hinting is preferred over font built-in hinting.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_textserver_method_font_set_generate_mipmaps"></div>

`void` **font_set_generate_mipmaps** ( font_rid: [`RID`](class_rid.md), generate_mipmaps: [`bool`](class_bool.md) )<div id="class_textserver_method_font_set_generate_mipmaps"></div>

If set to `true` font texture mipmap generation is enabled.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_textserver_method_font_set_global_oversampling"></div>

`void` **font_set_global_oversampling** ( oversampling: [`float`](class_float.md) )<div id="class_textserver_method_font_set_global_oversampling"></div>

Sets oversampling factor, shared by all font in the TextServer.

 **Note:** This value can be automatically changed by display server.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_textserver_method_font_set_glyph_advance"></div>

`void` **font_set_glyph_advance** ( font_rid: [`RID`](class_rid.md), size: [`int`](class_int.md), glyph: [`int`](class_int.md), advance: [`Vector2`](class_vector2.md) )<div id="class_textserver_method_font_set_glyph_advance"></div>

Sets glyph advance (offset of the next glyph).

 **Note:** Advance for glyphs outlines is the same as the base glyph advance and is not saved.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_textserver_method_font_set_glyph_offset"></div>

`void` **font_set_glyph_offset** ( font_rid: [`RID`](class_rid.md), size: [`Vector2i`](class_vector2i.md), glyph: [`int`](class_int.md), offset: [`Vector2`](class_vector2.md) )<div id="class_textserver_method_font_set_glyph_offset"></div>

Sets glyph offset from the baseline.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_textserver_method_font_set_glyph_size"></div>

`void` **font_set_glyph_size** ( font_rid: [`RID`](class_rid.md), size: [`Vector2i`](class_vector2i.md), glyph: [`int`](class_int.md), gl_size: [`Vector2`](class_vector2.md) )<div id="class_textserver_method_font_set_glyph_size"></div>

Sets size of the glyph.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_textserver_method_font_set_glyph_texture_idx"></div>

`void` **font_set_glyph_texture_idx** ( font_rid: [`RID`](class_rid.md), size: [`Vector2i`](class_vector2i.md), glyph: [`int`](class_int.md), texture_idx: [`int`](class_int.md) )<div id="class_textserver_method_font_set_glyph_texture_idx"></div>

Sets index of the cache texture containing the glyph.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_textserver_method_font_set_glyph_uv_rect"></div>

`void` **font_set_glyph_uv_rect** ( font_rid: [`RID`](class_rid.md), size: [`Vector2i`](class_vector2i.md), glyph: [`int`](class_int.md), uv_rect: [`Rect2`](class_rect2.md) )<div id="class_textserver_method_font_set_glyph_uv_rect"></div>

Sets rectangle in the cache texture containing the glyph.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_textserver_method_font_set_hinting"></div>

`void` **font_set_hinting** ( font_rid: [`RID`](class_rid.md), hinting: [Hinting](#enum_textserver_hinting) )<div id="class_textserver_method_font_set_hinting"></div>

Sets font hinting mode. Used by dynamic fonts only.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_textserver_method_font_set_kerning"></div>

`void` **font_set_kerning** ( font_rid: [`RID`](class_rid.md), size: [`int`](class_int.md), glyph_pair: [`Vector2i`](class_vector2i.md), kerning: [`Vector2`](class_vector2.md) )<div id="class_textserver_method_font_set_kerning"></div>

Sets kerning for the pair of glyphs.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_textserver_method_font_set_language_support_override"></div>

`void` **font_set_language_support_override** ( font_rid: [`RID`](class_rid.md), language: [`String`](class_string.md), supported: [`bool`](class_bool.md) )<div id="class_textserver_method_font_set_language_support_override"></div>

Adds override for [`font_is_language_supported`](#class_textserver_method_font_is_language_supported).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_textserver_method_font_set_msdf_pixel_range"></div>

`void` **font_set_msdf_pixel_range** ( font_rid: [`RID`](class_rid.md), msdf_pixel_range: [`int`](class_int.md) )<div id="class_textserver_method_font_set_msdf_pixel_range"></div>

Sets the width of the range around the shape between the minimum and maximum representable signed distance.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_textserver_method_font_set_msdf_size"></div>

`void` **font_set_msdf_size** ( font_rid: [`RID`](class_rid.md), msdf_size: [`int`](class_int.md) )<div id="class_textserver_method_font_set_msdf_size"></div>

Sets source font size used to generate MSDF textures.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_textserver_method_font_set_multichannel_signed_distance_field"></div>

`void` **font_set_multichannel_signed_distance_field** ( font_rid: [`RID`](class_rid.md), msdf: [`bool`](class_bool.md) )<div id="class_textserver_method_font_set_multichannel_signed_distance_field"></div>

If set to `true`, glyphs of all sizes are rendered using single multichannel signed distance field generated from the dynamic font vector data. MSDF rendering allows displaying the font at any scaling factor without blurriness, and without incurring a CPU cost when the font size changes (since the font no longer needs to be rasterized on the CPU). As a downside, font hinting is not available with MSDF. The lack of font hinting may result in less crisp and less readable fonts at small sizes.

 **Note:** MSDF font rendering does not render glyphs with overlapping shapes correctly. Overlapping shapes are not valid per the OpenType standard, but are still commonly found in many font files, especially those converted by Google Fonts. To avoid issues with overlapping glyphs, consider downloading the font file directly from the type foundry instead of relying on Google Fonts.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_textserver_method_font_set_name"></div>

`void` **font_set_name** ( font_rid: [`RID`](class_rid.md), name: [`String`](class_string.md) )<div id="class_textserver_method_font_set_name"></div>

Sets the font family name.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_textserver_method_font_set_opentype_feature_overrides"></div>

`void` **font_set_opentype_feature_overrides** ( font_rid: [`RID`](class_rid.md), overrides: [`Dictionary`](class_dictionary.md) )<div id="class_textserver_method_font_set_opentype_feature_overrides"></div>

Sets font OpenType feature set override.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_textserver_method_font_set_oversampling"></div>

`void` **font_set_oversampling** ( font_rid: [`RID`](class_rid.md), oversampling: [`float`](class_float.md) )<div id="class_textserver_method_font_set_oversampling"></div>

Sets font oversampling factor, if set to `0.0` global oversampling factor is used instead. Used by dynamic fonts only.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_textserver_method_font_set_scale"></div>

`void` **font_set_scale** ( font_rid: [`RID`](class_rid.md), size: [`int`](class_int.md), scale: [`float`](class_float.md) )<div id="class_textserver_method_font_set_scale"></div>

Sets scaling factor of the color bitmap font.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_textserver_method_font_set_script_support_override"></div>

`void` **font_set_script_support_override** ( font_rid: [`RID`](class_rid.md), script: [`String`](class_string.md), supported: [`bool`](class_bool.md) )<div id="class_textserver_method_font_set_script_support_override"></div>

Adds override for [`font_is_script_supported`](#class_textserver_method_font_is_script_supported).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_textserver_method_font_set_spacing"></div>

`void` **font_set_spacing** ( font_rid: [`RID`](class_rid.md), spacing: [SpacingType](#enum_textserver_spacingtype), value: [`int`](class_int.md) )<div id="class_textserver_method_font_set_spacing"></div>

Sets the spacing for `spacing` (see [SpacingType](#enum_textserver_spacingtype)) to `value` in pixels (not relative to the font size).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_textserver_method_font_set_stretch"></div>

`void` **font_set_stretch** ( font_rid: [`RID`](class_rid.md), weight: [`int`](class_int.md) )<div id="class_textserver_method_font_set_stretch"></div>

Sets font stretch amount, compared to a normal width. A percentage value between `50%` and `200%`.

 **Note:** This value is used for font matching only and will not affect font rendering. Use [`font_set_face_index`](#class_textserver_method_font_set_face_index), [`font_set_variation_coordinates`](#class_textserver_method_font_set_variation_coordinates), or [`font_set_transform`](#class_textserver_method_font_set_transform) instead.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_textserver_method_font_set_style"></div>

`void` **font_set_style** ( font_rid: [`RID`](class_rid.md), style: [FontStyle](#enum_textserver_fontstyle) )<div id="class_textserver_method_font_set_style"></div>

Sets the font style flags, see [FontStyle](#enum_textserver_fontstyle).

 **Note:** This value is used for font matching only and will not affect font rendering. Use [`font_set_face_index`](#class_textserver_method_font_set_face_index), [`font_set_variation_coordinates`](#class_textserver_method_font_set_variation_coordinates), [`font_set_embolden`](#class_textserver_method_font_set_embolden), or [`font_set_transform`](#class_textserver_method_font_set_transform) instead.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_textserver_method_font_set_style_name"></div>

`void` **font_set_style_name** ( font_rid: [`RID`](class_rid.md), name: [`String`](class_string.md) )<div id="class_textserver_method_font_set_style_name"></div>

Sets the font style name.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_textserver_method_font_set_subpixel_positioning"></div>

`void` **font_set_subpixel_positioning** ( font_rid: [`RID`](class_rid.md), subpixel_positioning: [SubpixelPositioning](#enum_textserver_subpixelpositioning) )<div id="class_textserver_method_font_set_subpixel_positioning"></div>

Sets font subpixel glyph positioning mode.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_textserver_method_font_set_texture_image"></div>

`void` **font_set_texture_image** ( font_rid: [`RID`](class_rid.md), size: [`Vector2i`](class_vector2i.md), texture_index: [`int`](class_int.md), image: [`Image`](class_image.md) )<div id="class_textserver_method_font_set_texture_image"></div>

Sets font cache texture image data.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_textserver_method_font_set_texture_offsets"></div>

`void` **font_set_texture_offsets** ( font_rid: [`RID`](class_rid.md), size: [`Vector2i`](class_vector2i.md), texture_index: [`int`](class_int.md), offset: [`PackedInt32Array`](class_packedint32array.md) )<div id="class_textserver_method_font_set_texture_offsets"></div>

Sets array containing glyph packing data.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_textserver_method_font_set_transform"></div>

`void` **font_set_transform** ( font_rid: [`RID`](class_rid.md), transform: [`Transform2D`](class_transform2d.md) )<div id="class_textserver_method_font_set_transform"></div>

Sets 2D transform, applied to the font outlines, can be used for slanting, flipping, and rotating glyphs.

For example, to simulate italic typeface by slanting, apply the following transform `Transform2D(1.0, slant, 0.0, 1.0, 0.0, 0.0)`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_textserver_method_font_set_underline_position"></div>

`void` **font_set_underline_position** ( font_rid: [`RID`](class_rid.md), size: [`int`](class_int.md), underline_position: [`float`](class_float.md) )<div id="class_textserver_method_font_set_underline_position"></div>

Sets pixel offset of the underline below the baseline.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_textserver_method_font_set_underline_thickness"></div>

`void` **font_set_underline_thickness** ( font_rid: [`RID`](class_rid.md), size: [`int`](class_int.md), underline_thickness: [`float`](class_float.md) )<div id="class_textserver_method_font_set_underline_thickness"></div>

Sets thickness of the underline in pixels.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_textserver_method_font_set_variation_coordinates"></div>

`void` **font_set_variation_coordinates** ( font_rid: [`RID`](class_rid.md), variation_coordinates: [`Dictionary`](class_dictionary.md) )<div id="class_textserver_method_font_set_variation_coordinates"></div>

Sets variation coordinates for the specified font cache entry. See [`font_supported_variation_list`](#class_textserver_method_font_supported_variation_list) for more info.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_textserver_method_font_set_weight"></div>

`void` **font_set_weight** ( font_rid: [`RID`](class_rid.md), weight: [`int`](class_int.md) )<div id="class_textserver_method_font_set_weight"></div>

Sets weight (boldness) of the font. A value in the `100...999` range, normal font weight is `400`, bold font weight is `700`.

 **Note:** This value is used for font matching only and will not affect font rendering. Use [`font_set_face_index`](#class_textserver_method_font_set_face_index), [`font_set_variation_coordinates`](#class_textserver_method_font_set_variation_coordinates), or [`font_set_embolden`](#class_textserver_method_font_set_embolden) instead.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_textserver_method_font_supported_feature_list"></div>

[`Dictionary`](class_dictionary.md) **font_supported_feature_list** ( font_rid: [`RID`](class_rid.md) ) const[^const]<div id="class_textserver_method_font_supported_feature_list"></div>

Returns the dictionary of the supported OpenType features.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_textserver_method_font_supported_variation_list"></div>

[`Dictionary`](class_dictionary.md) **font_supported_variation_list** ( font_rid: [`RID`](class_rid.md) ) const[^const]<div id="class_textserver_method_font_supported_variation_list"></div>

Returns the dictionary of the supported OpenType variation coordinates.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_textserver_method_format_number"></div>

[`String`](class_string.md) **format_number** ( number: [`String`](class_string.md), language: [`String`](class_string.md) = "" ) const[^const]<div id="class_textserver_method_format_number"></div>

Converts a number from the Western Arabic (0..9) to the numeral systems used in `language`.

If `language` is omitted, the active locale will be used.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_textserver_method_free_rid"></div>

`void` **free_rid** ( rid: [`RID`](class_rid.md) )<div id="class_textserver_method_free_rid"></div>

Frees an object created by this **TextServer**.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_textserver_method_get_features"></div>

[`int`](class_int.md) **get_features** ( ) const[^const]<div id="class_textserver_method_get_features"></div>

Returns text server features, see [Feature](#enum_textserver_feature).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_textserver_method_get_hex_code_box_size"></div>

[`Vector2`](class_vector2.md) **get_hex_code_box_size** ( size: [`int`](class_int.md), index: [`int`](class_int.md) ) const[^const]<div id="class_textserver_method_get_hex_code_box_size"></div>

Returns size of the replacement character (box with character hexadecimal code that is drawn in place of invalid characters).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_textserver_method_get_name"></div>

[`String`](class_string.md) **get_name** ( ) const[^const]<div id="class_textserver_method_get_name"></div>

Returns the name of the server interface.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_textserver_method_get_support_data_filename"></div>

[`String`](class_string.md) **get_support_data_filename** ( ) const[^const]<div id="class_textserver_method_get_support_data_filename"></div>

Returns default TextServer database (e.g. ICU break iterators and dictionaries) filename.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_textserver_method_get_support_data_info"></div>

[`String`](class_string.md) **get_support_data_info** ( ) const[^const]<div id="class_textserver_method_get_support_data_info"></div>

Returns TextServer database (e.g. ICU break iterators and dictionaries) description.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_textserver_method_has"></div>

[`bool`](class_bool.md) **has** ( rid: [`RID`](class_rid.md) )<div id="class_textserver_method_has"></div>

Returns `true` if `rid` is valid resource owned by this text server.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_textserver_method_has_feature"></div>

[`bool`](class_bool.md) **has_feature** ( feature: [Feature](#enum_textserver_feature) ) const[^const]<div id="class_textserver_method_has_feature"></div>

Returns `true` if the server supports a feature.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_textserver_method_is_confusable"></div>

[`int`](class_int.md) **is_confusable** ( string: [`String`](class_string.md), dict: [`PackedStringArray`](class_packedstringarray.md) ) const[^const]<div id="class_textserver_method_is_confusable"></div>

Returns index of the first string in `dict` which is visually confusable with the `string`, or `-1` if none is found.

 **Note:** This method doesn't detect invisible characters, for spoof detection use it in combination with [`spoof_check`](#class_textserver_method_spoof_check).

 **Note:** Always returns `-1` if the server does not support the [`FEATURE_UNICODE_SECURITY`](#class_textserver_constant_feature_unicode_security) feature.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_textserver_method_is_locale_right_to_left"></div>

[`bool`](class_bool.md) **is_locale_right_to_left** ( locale: [`String`](class_string.md) ) const[^const]<div id="class_textserver_method_is_locale_right_to_left"></div>

Returns `true` if locale is right-to-left.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_textserver_method_is_valid_identifier"></div>

[`bool`](class_bool.md) **is_valid_identifier** ( string: [`String`](class_string.md) ) const[^const]<div id="class_textserver_method_is_valid_identifier"></div>

Returns `true` if `string` is a valid identifier.

If the text server supports the [`FEATURE_UNICODE_IDENTIFIERS`](#class_textserver_constant_feature_unicode_identifiers) feature, a valid identifier must:

- Conform to normalization form C.

- Begin with a Unicode character of class XID_Start or `"_"`.

- May contain Unicode characters of class XID_Continue in the other positions.

- Use UAX #31 recommended scripts only (mixed scripts are allowed).

If the [`FEATURE_UNICODE_IDENTIFIERS`](#class_textserver_constant_feature_unicode_identifiers) feature is not supported, a valid identifier must:

- Begin with a Unicode character of class XID_Start or `"_"`.

- May contain Unicode characters of class XID_Continue in the other positions.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_textserver_method_is_valid_letter"></div>

[`bool`](class_bool.md) **is_valid_letter** ( unicode: [`int`](class_int.md) ) const[^const]<div id="class_textserver_method_is_valid_letter"></div>

Returns `true` if the given code point is a valid letter, i.e. it belongs to the Unicode category "L".

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_textserver_method_load_support_data"></div>

[`bool`](class_bool.md) **load_support_data** ( filename: [`String`](class_string.md) )<div id="class_textserver_method_load_support_data"></div>

Loads optional TextServer database (e.g. ICU break iterators and dictionaries).

 **Note:** This function should be called before any other TextServer functions used, otherwise it won't have any effect.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_textserver_method_name_to_tag"></div>

[`int`](class_int.md) **name_to_tag** ( name: [`String`](class_string.md) ) const[^const]<div id="class_textserver_method_name_to_tag"></div>

Converts readable feature, variation, script, or language name to OpenType tag.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_textserver_method_parse_number"></div>

[`String`](class_string.md) **parse_number** ( number: [`String`](class_string.md), language: [`String`](class_string.md) = "" ) const[^const]<div id="class_textserver_method_parse_number"></div>

Converts `number` from the numeral systems used in `language` to Western Arabic (0..9).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_textserver_method_parse_structured_text"></div>

[Array](class_array.md) [`Vector3i`](class_vector3i.md) **parse_structured_text** ( parser_type: [StructuredTextParser](#enum_textserver_structuredtextparser), args: [`Array`](class_array.md), text: [`String`](class_string.md) ) const[^const]<div id="class_textserver_method_parse_structured_text"></div>

Default implementation of the BiDi algorithm override function. See [StructuredTextParser](#enum_textserver_structuredtextparser) for more info.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_textserver_method_percent_sign"></div>

[`String`](class_string.md) **percent_sign** ( language: [`String`](class_string.md) = "" ) const[^const]<div id="class_textserver_method_percent_sign"></div>

Returns percent sign used in the `language`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_textserver_method_save_support_data"></div>

[`bool`](class_bool.md) **save_support_data** ( filename: [`String`](class_string.md) ) const[^const]<div id="class_textserver_method_save_support_data"></div>

Saves optional TextServer database (e.g. ICU break iterators and dictionaries) to the file.

 **Note:** This function is used by during project export, to include TextServer database.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_textserver_method_shaped_get_span_count"></div>

[`int`](class_int.md) **shaped_get_span_count** ( shaped: [`RID`](class_rid.md) ) const[^const]<div id="class_textserver_method_shaped_get_span_count"></div>

Returns number of text spans added using [`shaped_text_add_string`](#class_textserver_method_shaped_text_add_string) or [`shaped_text_add_object`](#class_textserver_method_shaped_text_add_object).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_textserver_method_shaped_get_span_meta"></div>

[`Variant`](class_variant.md) **shaped_get_span_meta** ( shaped: [`RID`](class_rid.md), index: [`int`](class_int.md) ) const[^const]<div id="class_textserver_method_shaped_get_span_meta"></div>

Returns text span metadata.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_textserver_method_shaped_set_span_update_font"></div>

`void` **shaped_set_span_update_font** ( shaped: [`RID`](class_rid.md), index: [`int`](class_int.md), fonts: [Array](class_array.md) [`RID`](class_rid.md), size: [`int`](class_int.md), opentype_features: [`Dictionary`](class_dictionary.md) = {} )<div id="class_textserver_method_shaped_set_span_update_font"></div>

Changes text span font, font size, and OpenType features, without changing the text.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_textserver_method_shaped_text_add_object"></div>

[`bool`](class_bool.md) **shaped_text_add_object** ( shaped: [`RID`](class_rid.md), key: [`Variant`](class_variant.md), size: [`Vector2`](class_vector2.md), inline_align: [InlineAlignment](#enum_@globalscope_inlinealignment) = 5, length: [`int`](class_int.md) = 1, baseline: [`float`](class_float.md) = 0.0 )<div id="class_textserver_method_shaped_text_add_object"></div>

Adds inline object to the text buffer, `key` must be unique. In the text, object is represented as `length` object replacement characters.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_textserver_method_shaped_text_add_string"></div>

[`bool`](class_bool.md) **shaped_text_add_string** ( shaped: [`RID`](class_rid.md), text: [`String`](class_string.md), fonts: [Array](class_array.md) [`RID`](class_rid.md), size: [`int`](class_int.md), opentype_features: [`Dictionary`](class_dictionary.md) = {}, language: [`String`](class_string.md) = "", meta: [`Variant`](class_variant.md) = null )<div id="class_textserver_method_shaped_text_add_string"></div>

Adds text span and font to draw it to the text buffer.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_textserver_method_shaped_text_clear"></div>

`void` **shaped_text_clear** ( rid: [`RID`](class_rid.md) )<div id="class_textserver_method_shaped_text_clear"></div>

Clears text buffer (removes text and inline objects).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_textserver_method_shaped_text_closest_character_pos"></div>

[`int`](class_int.md) **shaped_text_closest_character_pos** ( shaped: [`RID`](class_rid.md), pos: [`int`](class_int.md) ) const[^const]<div id="class_textserver_method_shaped_text_closest_character_pos"></div>

Returns composite character position closest to the `pos`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_textserver_method_shaped_text_draw"></div>

`void` **shaped_text_draw** ( shaped: [`RID`](class_rid.md), canvas: [`RID`](class_rid.md), pos: [`Vector2`](class_vector2.md), clip_l: [`float`](class_float.md) = -1, clip_r: [`float`](class_float.md) = -1, color: [`Color`](class_color.md) = Color(1, 1, 1, 1) ) const[^const]<div id="class_textserver_method_shaped_text_draw"></div>

Draw shaped text into a canvas item at a given position, with `color`. `pos` specifies the leftmost point of the baseline (for horizontal layout) or topmost point of the baseline (for vertical layout).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_textserver_method_shaped_text_draw_outline"></div>

`void` **shaped_text_draw_outline** ( shaped: [`RID`](class_rid.md), canvas: [`RID`](class_rid.md), pos: [`Vector2`](class_vector2.md), clip_l: [`float`](class_float.md) = -1, clip_r: [`float`](class_float.md) = -1, outline_size: [`int`](class_int.md) = 1, color: [`Color`](class_color.md) = Color(1, 1, 1, 1) ) const[^const]<div id="class_textserver_method_shaped_text_draw_outline"></div>

Draw the outline of the shaped text into a canvas item at a given position, with `color`. `pos` specifies the leftmost point of the baseline (for horizontal layout) or topmost point of the baseline (for vertical layout).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_textserver_method_shaped_text_fit_to_width"></div>

[`float`](class_float.md) **shaped_text_fit_to_width** ( shaped: [`RID`](class_rid.md), width: [`float`](class_float.md), justification_flags: [JustificationFlag](#enum_textserver_justificationflag) = 3 )<div id="class_textserver_method_shaped_text_fit_to_width"></div>

Adjusts text width to fit to specified width, returns new text width.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_textserver_method_shaped_text_get_ascent"></div>

[`float`](class_float.md) **shaped_text_get_ascent** ( shaped: [`RID`](class_rid.md) ) const[^const]<div id="class_textserver_method_shaped_text_get_ascent"></div>

Returns the text ascent (number of pixels above the baseline for horizontal layout or to the left of baseline for vertical).

 **Note:** Overall ascent can be higher than font ascent, if some glyphs are displaced from the baseline.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_textserver_method_shaped_text_get_carets"></div>

[`Dictionary`](class_dictionary.md) **shaped_text_get_carets** ( shaped: [`RID`](class_rid.md), position: [`int`](class_int.md) ) const[^const]<div id="class_textserver_method_shaped_text_get_carets"></div>

Returns shapes of the carets corresponding to the character offset `position` in the text. Returned caret shape is 1 pixel wide rectangle.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_textserver_method_shaped_text_get_character_breaks"></div>

[`PackedInt32Array`](class_packedint32array.md) **shaped_text_get_character_breaks** ( shaped: [`RID`](class_rid.md) ) const[^const]<div id="class_textserver_method_shaped_text_get_character_breaks"></div>

Returns array of the composite character boundaries.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_textserver_method_shaped_text_get_custom_ellipsis"></div>

[`int`](class_int.md) **shaped_text_get_custom_ellipsis** ( shaped: [`RID`](class_rid.md) ) const[^const]<div id="class_textserver_method_shaped_text_get_custom_ellipsis"></div>

Returns ellipsis character used for text clipping.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_textserver_method_shaped_text_get_custom_punctuation"></div>

[`String`](class_string.md) **shaped_text_get_custom_punctuation** ( shaped: [`RID`](class_rid.md) ) const[^const]<div id="class_textserver_method_shaped_text_get_custom_punctuation"></div>

Returns custom punctuation character list, used for word breaking. If set to empty string, server defaults are used.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_textserver_method_shaped_text_get_descent"></div>

[`float`](class_float.md) **shaped_text_get_descent** ( shaped: [`RID`](class_rid.md) ) const[^const]<div id="class_textserver_method_shaped_text_get_descent"></div>

Returns the text descent (number of pixels below the baseline for horizontal layout or to the right of baseline for vertical).

 **Note:** Overall descent can be higher than font descent, if some glyphs are displaced from the baseline.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_textserver_method_shaped_text_get_direction"></div>

[Direction](#enum_textserver_direction) **shaped_text_get_direction** ( shaped: [`RID`](class_rid.md) ) const[^const]<div id="class_textserver_method_shaped_text_get_direction"></div>

Returns direction of the text.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_textserver_method_shaped_text_get_dominant_direction_in_range"></div>

[Direction](#enum_textserver_direction) **shaped_text_get_dominant_direction_in_range** ( shaped: [`RID`](class_rid.md), start: [`int`](class_int.md), end: [`int`](class_int.md) ) const[^const]<div id="class_textserver_method_shaped_text_get_dominant_direction_in_range"></div>

Returns dominant direction of in the range of text.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_textserver_method_shaped_text_get_ellipsis_glyph_count"></div>

[`int`](class_int.md) **shaped_text_get_ellipsis_glyph_count** ( shaped: [`RID`](class_rid.md) ) const[^const]<div id="class_textserver_method_shaped_text_get_ellipsis_glyph_count"></div>

Returns number of glyphs in the ellipsis.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_textserver_method_shaped_text_get_ellipsis_glyphs"></div>

[Array](class_array.md) [`Dictionary`](class_dictionary.md) **shaped_text_get_ellipsis_glyphs** ( shaped: [`RID`](class_rid.md) ) const[^const]<div id="class_textserver_method_shaped_text_get_ellipsis_glyphs"></div>

Returns array of the glyphs in the ellipsis.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_textserver_method_shaped_text_get_ellipsis_pos"></div>

[`int`](class_int.md) **shaped_text_get_ellipsis_pos** ( shaped: [`RID`](class_rid.md) ) const[^const]<div id="class_textserver_method_shaped_text_get_ellipsis_pos"></div>

Returns position of the ellipsis.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_textserver_method_shaped_text_get_glyph_count"></div>

[`int`](class_int.md) **shaped_text_get_glyph_count** ( shaped: [`RID`](class_rid.md) ) const[^const]<div id="class_textserver_method_shaped_text_get_glyph_count"></div>

Returns number of glyphs in the buffer.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_textserver_method_shaped_text_get_glyphs"></div>

[Array](class_array.md) [`Dictionary`](class_dictionary.md) **shaped_text_get_glyphs** ( shaped: [`RID`](class_rid.md) ) const[^const]<div id="class_textserver_method_shaped_text_get_glyphs"></div>

Returns an array of glyphs in the visual order.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_textserver_method_shaped_text_get_grapheme_bounds"></div>

[`Vector2`](class_vector2.md) **shaped_text_get_grapheme_bounds** ( shaped: [`RID`](class_rid.md), pos: [`int`](class_int.md) ) const[^const]<div id="class_textserver_method_shaped_text_get_grapheme_bounds"></div>

Returns composite character's bounds as offsets from the start of the line.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_textserver_method_shaped_text_get_inferred_direction"></div>

[Direction](#enum_textserver_direction) **shaped_text_get_inferred_direction** ( shaped: [`RID`](class_rid.md) ) const[^const]<div id="class_textserver_method_shaped_text_get_inferred_direction"></div>

Returns direction of the text, inferred by the BiDi algorithm.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_textserver_method_shaped_text_get_line_breaks"></div>

[`PackedInt32Array`](class_packedint32array.md) **shaped_text_get_line_breaks** ( shaped: [`RID`](class_rid.md), width: [`float`](class_float.md), start: [`int`](class_int.md) = 0, break_flags: [LineBreakFlag](#enum_textserver_linebreakflag) = 3 ) const[^const]<div id="class_textserver_method_shaped_text_get_line_breaks"></div>

Breaks text to the lines and returns character ranges for each line.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_textserver_method_shaped_text_get_line_breaks_adv"></div>

[`PackedInt32Array`](class_packedint32array.md) **shaped_text_get_line_breaks_adv** ( shaped: [`RID`](class_rid.md), width: [`PackedFloat32Array`](class_packedfloat32array.md), start: [`int`](class_int.md) = 0, once: [`bool`](class_bool.md) = true, break_flags: [LineBreakFlag](#enum_textserver_linebreakflag) = 3 ) const[^const]<div id="class_textserver_method_shaped_text_get_line_breaks_adv"></div>

Breaks text to the lines and columns. Returns character ranges for each segment.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_textserver_method_shaped_text_get_object_glyph"></div>

[`int`](class_int.md) **shaped_text_get_object_glyph** ( shaped: [`RID`](class_rid.md), key: [`Variant`](class_variant.md) ) const[^const]<div id="class_textserver_method_shaped_text_get_object_glyph"></div>

Returns the glyph index of the inline object.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_textserver_method_shaped_text_get_object_range"></div>

[`Vector2i`](class_vector2i.md) **shaped_text_get_object_range** ( shaped: [`RID`](class_rid.md), key: [`Variant`](class_variant.md) ) const[^const]<div id="class_textserver_method_shaped_text_get_object_range"></div>

Returns the character range of the inline object.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_textserver_method_shaped_text_get_object_rect"></div>

[`Rect2`](class_rect2.md) **shaped_text_get_object_rect** ( shaped: [`RID`](class_rid.md), key: [`Variant`](class_variant.md) ) const[^const]<div id="class_textserver_method_shaped_text_get_object_rect"></div>

Returns bounding rectangle of the inline object.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_textserver_method_shaped_text_get_objects"></div>

[`Array`](class_array.md) **shaped_text_get_objects** ( shaped: [`RID`](class_rid.md) ) const[^const]<div id="class_textserver_method_shaped_text_get_objects"></div>

Returns array of inline objects.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_textserver_method_shaped_text_get_orientation"></div>

[Orientation](#enum_textserver_orientation) **shaped_text_get_orientation** ( shaped: [`RID`](class_rid.md) ) const[^const]<div id="class_textserver_method_shaped_text_get_orientation"></div>

Returns text orientation.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_textserver_method_shaped_text_get_parent"></div>

[`RID`](class_rid.md) **shaped_text_get_parent** ( shaped: [`RID`](class_rid.md) ) const[^const]<div id="class_textserver_method_shaped_text_get_parent"></div>

Returns the parent buffer from which the substring originates.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_textserver_method_shaped_text_get_preserve_control"></div>

[`bool`](class_bool.md) **shaped_text_get_preserve_control** ( shaped: [`RID`](class_rid.md) ) const[^const]<div id="class_textserver_method_shaped_text_get_preserve_control"></div>

Returns `true` if text buffer is configured to display control characters.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_textserver_method_shaped_text_get_preserve_invalid"></div>

[`bool`](class_bool.md) **shaped_text_get_preserve_invalid** ( shaped: [`RID`](class_rid.md) ) const[^const]<div id="class_textserver_method_shaped_text_get_preserve_invalid"></div>

Returns `true` if text buffer is configured to display hexadecimal codes in place of invalid characters.

 **Note:** If set to `false`, nothing is displayed in place of invalid characters.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_textserver_method_shaped_text_get_range"></div>

[`Vector2i`](class_vector2i.md) **shaped_text_get_range** ( shaped: [`RID`](class_rid.md) ) const[^const]<div id="class_textserver_method_shaped_text_get_range"></div>

Returns substring buffer character range in the parent buffer.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_textserver_method_shaped_text_get_selection"></div>

[`PackedVector2Array`](class_packedvector2array.md) **shaped_text_get_selection** ( shaped: [`RID`](class_rid.md), start: [`int`](class_int.md), end: [`int`](class_int.md) ) const[^const]<div id="class_textserver_method_shaped_text_get_selection"></div>

Returns selection rectangles for the specified character range.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_textserver_method_shaped_text_get_size"></div>

[`Vector2`](class_vector2.md) **shaped_text_get_size** ( shaped: [`RID`](class_rid.md) ) const[^const]<div id="class_textserver_method_shaped_text_get_size"></div>

Returns size of the text.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_textserver_method_shaped_text_get_spacing"></div>

[`int`](class_int.md) **shaped_text_get_spacing** ( shaped: [`RID`](class_rid.md), spacing: [SpacingType](#enum_textserver_spacingtype) ) const[^const]<div id="class_textserver_method_shaped_text_get_spacing"></div>

Returns extra spacing added between glyphs or lines in pixels.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_textserver_method_shaped_text_get_trim_pos"></div>

[`int`](class_int.md) **shaped_text_get_trim_pos** ( shaped: [`RID`](class_rid.md) ) const[^const]<div id="class_textserver_method_shaped_text_get_trim_pos"></div>

Returns the position of the overrun trim.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_textserver_method_shaped_text_get_underline_position"></div>

[`float`](class_float.md) **shaped_text_get_underline_position** ( shaped: [`RID`](class_rid.md) ) const[^const]<div id="class_textserver_method_shaped_text_get_underline_position"></div>

Returns pixel offset of the underline below the baseline.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_textserver_method_shaped_text_get_underline_thickness"></div>

[`float`](class_float.md) **shaped_text_get_underline_thickness** ( shaped: [`RID`](class_rid.md) ) const[^const]<div id="class_textserver_method_shaped_text_get_underline_thickness"></div>

Returns thickness of the underline.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_textserver_method_shaped_text_get_width"></div>

[`float`](class_float.md) **shaped_text_get_width** ( shaped: [`RID`](class_rid.md) ) const[^const]<div id="class_textserver_method_shaped_text_get_width"></div>

Returns width (for horizontal layout) or height (for vertical) of the text.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_textserver_method_shaped_text_get_word_breaks"></div>

[`PackedInt32Array`](class_packedint32array.md) **shaped_text_get_word_breaks** ( shaped: [`RID`](class_rid.md), grapheme_flags: [GraphemeFlag](#enum_textserver_graphemeflag) = 264, skip_grapheme_flags: [GraphemeFlag](#enum_textserver_graphemeflag) = 4 ) const[^const]<div id="class_textserver_method_shaped_text_get_word_breaks"></div>

Breaks text into words and returns array of character ranges. Use `grapheme_flags` to set what characters are used for breaking (see [GraphemeFlag](#enum_textserver_graphemeflag)).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_textserver_method_shaped_text_has_visible_chars"></div>

[`bool`](class_bool.md) **shaped_text_has_visible_chars** ( shaped: [`RID`](class_rid.md) ) const[^const]<div id="class_textserver_method_shaped_text_has_visible_chars"></div>

Returns `true` if text buffer contains any visible characters.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_textserver_method_shaped_text_hit_test_grapheme"></div>

[`int`](class_int.md) **shaped_text_hit_test_grapheme** ( shaped: [`RID`](class_rid.md), coords: [`float`](class_float.md) ) const[^const]<div id="class_textserver_method_shaped_text_hit_test_grapheme"></div>

Returns grapheme index at the specified pixel offset at the baseline, or `-1` if none is found.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_textserver_method_shaped_text_hit_test_position"></div>

[`int`](class_int.md) **shaped_text_hit_test_position** ( shaped: [`RID`](class_rid.md), coords: [`float`](class_float.md) ) const[^const]<div id="class_textserver_method_shaped_text_hit_test_position"></div>

Returns caret character offset at the specified pixel offset at the baseline. This function always returns a valid position.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_textserver_method_shaped_text_is_ready"></div>

[`bool`](class_bool.md) **shaped_text_is_ready** ( shaped: [`RID`](class_rid.md) ) const[^const]<div id="class_textserver_method_shaped_text_is_ready"></div>

Returns `true` if buffer is successfully shaped.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_textserver_method_shaped_text_next_character_pos"></div>

[`int`](class_int.md) **shaped_text_next_character_pos** ( shaped: [`RID`](class_rid.md), pos: [`int`](class_int.md) ) const[^const]<div id="class_textserver_method_shaped_text_next_character_pos"></div>

Returns composite character end position closest to the `pos`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_textserver_method_shaped_text_next_grapheme_pos"></div>

[`int`](class_int.md) **shaped_text_next_grapheme_pos** ( shaped: [`RID`](class_rid.md), pos: [`int`](class_int.md) ) const[^const]<div id="class_textserver_method_shaped_text_next_grapheme_pos"></div>

Returns grapheme end position closest to the `pos`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_textserver_method_shaped_text_overrun_trim_to_width"></div>

`void` **shaped_text_overrun_trim_to_width** ( shaped: [`RID`](class_rid.md), width: [`float`](class_float.md) = 0, overrun_trim_flags: [TextOverrunFlag](#enum_textserver_textoverrunflag) = 0 )<div id="class_textserver_method_shaped_text_overrun_trim_to_width"></div>

Trims text if it exceeds the given width.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_textserver_method_shaped_text_prev_character_pos"></div>

[`int`](class_int.md) **shaped_text_prev_character_pos** ( shaped: [`RID`](class_rid.md), pos: [`int`](class_int.md) ) const[^const]<div id="class_textserver_method_shaped_text_prev_character_pos"></div>

Returns composite character start position closest to the `pos`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_textserver_method_shaped_text_prev_grapheme_pos"></div>

[`int`](class_int.md) **shaped_text_prev_grapheme_pos** ( shaped: [`RID`](class_rid.md), pos: [`int`](class_int.md) ) const[^const]<div id="class_textserver_method_shaped_text_prev_grapheme_pos"></div>

Returns grapheme start position closest to the `pos`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_textserver_method_shaped_text_resize_object"></div>

[`bool`](class_bool.md) **shaped_text_resize_object** ( shaped: [`RID`](class_rid.md), key: [`Variant`](class_variant.md), size: [`Vector2`](class_vector2.md), inline_align: [InlineAlignment](#enum_@globalscope_inlinealignment) = 5, baseline: [`float`](class_float.md) = 0.0 )<div id="class_textserver_method_shaped_text_resize_object"></div>

Sets new size and alignment of embedded object.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_textserver_method_shaped_text_set_bidi_override"></div>

`void` **shaped_text_set_bidi_override** ( shaped: [`RID`](class_rid.md), override: [`Array`](class_array.md) )<div id="class_textserver_method_shaped_text_set_bidi_override"></div>

Overrides BiDi for the structured text.

Override ranges should cover full source text without overlaps. BiDi algorithm will be used on each range separately.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_textserver_method_shaped_text_set_custom_ellipsis"></div>

`void` **shaped_text_set_custom_ellipsis** ( shaped: [`RID`](class_rid.md), char: [`int`](class_int.md) )<div id="class_textserver_method_shaped_text_set_custom_ellipsis"></div>

Sets ellipsis character used for text clipping.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_textserver_method_shaped_text_set_custom_punctuation"></div>

`void` **shaped_text_set_custom_punctuation** ( shaped: [`RID`](class_rid.md), punct: [`String`](class_string.md) )<div id="class_textserver_method_shaped_text_set_custom_punctuation"></div>

Sets custom punctuation character list, used for word breaking. If set to empty string, server defaults are used.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_textserver_method_shaped_text_set_direction"></div>

`void` **shaped_text_set_direction** ( shaped: [`RID`](class_rid.md), direction: [Direction](#enum_textserver_direction) = 0 )<div id="class_textserver_method_shaped_text_set_direction"></div>

Sets desired text direction. If set to [`DIRECTION_AUTO`](#class_textserver_constant_direction_auto), direction will be detected based on the buffer contents and current locale.

 **Note:** Direction is ignored if server does not support [`FEATURE_BIDI_LAYOUT`](#class_textserver_constant_feature_bidi_layout) feature (supported by [`TextServerAdvanced`](class_textserveradvanced.md)).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_textserver_method_shaped_text_set_orientation"></div>

`void` **shaped_text_set_orientation** ( shaped: [`RID`](class_rid.md), orientation: [Orientation](#enum_textserver_orientation) = 0 )<div id="class_textserver_method_shaped_text_set_orientation"></div>

Sets desired text orientation.

 **Note:** Orientation is ignored if server does not support [`FEATURE_VERTICAL_LAYOUT`](#class_textserver_constant_feature_vertical_layout) feature (supported by [`TextServerAdvanced`](class_textserveradvanced.md)).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_textserver_method_shaped_text_set_preserve_control"></div>

`void` **shaped_text_set_preserve_control** ( shaped: [`RID`](class_rid.md), enabled: [`bool`](class_bool.md) )<div id="class_textserver_method_shaped_text_set_preserve_control"></div>

If set to `true` text buffer will display control characters.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_textserver_method_shaped_text_set_preserve_invalid"></div>

`void` **shaped_text_set_preserve_invalid** ( shaped: [`RID`](class_rid.md), enabled: [`bool`](class_bool.md) )<div id="class_textserver_method_shaped_text_set_preserve_invalid"></div>

If set to `true` text buffer will display invalid characters as hexadecimal codes, otherwise nothing is displayed.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_textserver_method_shaped_text_set_spacing"></div>

`void` **shaped_text_set_spacing** ( shaped: [`RID`](class_rid.md), spacing: [SpacingType](#enum_textserver_spacingtype), value: [`int`](class_int.md) )<div id="class_textserver_method_shaped_text_set_spacing"></div>

Sets extra spacing added between glyphs or lines in pixels.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_textserver_method_shaped_text_shape"></div>

[`bool`](class_bool.md) **shaped_text_shape** ( shaped: [`RID`](class_rid.md) )<div id="class_textserver_method_shaped_text_shape"></div>

Shapes buffer if it's not shaped. Returns `true` if the string is shaped successfully.

 **Note:** It is not necessary to call this function manually, buffer will be shaped automatically as soon as any of its output data is requested.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_textserver_method_shaped_text_sort_logical"></div>

[Array](class_array.md) [`Dictionary`](class_dictionary.md) **shaped_text_sort_logical** ( shaped: [`RID`](class_rid.md) )<div id="class_textserver_method_shaped_text_sort_logical"></div>

Returns text glyphs in the logical order.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_textserver_method_shaped_text_substr"></div>

[`RID`](class_rid.md) **shaped_text_substr** ( shaped: [`RID`](class_rid.md), start: [`int`](class_int.md), length: [`int`](class_int.md) ) const[^const]<div id="class_textserver_method_shaped_text_substr"></div>

Returns text buffer for the substring of the text in the `shaped` text buffer (including inline objects).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_textserver_method_shaped_text_tab_align"></div>

[`float`](class_float.md) **shaped_text_tab_align** ( shaped: [`RID`](class_rid.md), tab_stops: [`PackedFloat32Array`](class_packedfloat32array.md) )<div id="class_textserver_method_shaped_text_tab_align"></div>

Aligns shaped text to the given tab-stops.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_textserver_method_spoof_check"></div>

[`bool`](class_bool.md) **spoof_check** ( string: [`String`](class_string.md) ) const[^const]<div id="class_textserver_method_spoof_check"></div>

Returns `true` if `string` is likely to be an attempt at confusing the reader.

 **Note:** Always returns `false` if the server does not support the [`FEATURE_UNICODE_SECURITY`](#class_textserver_constant_feature_unicode_security) feature.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_textserver_method_string_get_character_breaks"></div>

[`PackedInt32Array`](class_packedint32array.md) **string_get_character_breaks** ( string: [`String`](class_string.md), language: [`String`](class_string.md) = "" ) const[^const]<div id="class_textserver_method_string_get_character_breaks"></div>

Returns array of the composite character boundaries.

```

    var ts = TextServerManager.get_primary_interface()
    print(ts.string_get_word_breaks("Test ❤️‍🔥 Test")) # Prints [1, 2, 3, 4, 5, 9, 10, 11, 12, 13, 14]
```



<!-- rst-class:: classref-item-separator -->

---

<div id="_class_textserver_method_string_get_word_breaks"></div>

[`PackedInt32Array`](class_packedint32array.md) **string_get_word_breaks** ( string: [`String`](class_string.md), language: [`String`](class_string.md) = "", chars_per_line: [`int`](class_int.md) = 0 ) const[^const]<div id="class_textserver_method_string_get_word_breaks"></div>

Returns an array of the word break boundaries. Elements in the returned array are the offsets of the start and end of words. Therefore the length of the array is always even.

When `chars_per_line` is greater than zero, line break boundaries are returned instead.

```

    var ts = TextServerManager.get_primary_interface()
    print(ts.string_get_word_breaks("The Godot Engine, 4")) # Prints [0, 3, 4, 9, 10, 16, 18, 19], which corresponds to the following substrings: "The", "Godot", "Engine", "4"
    print(ts.string_get_word_breaks("The Godot Engine, 4", "en", 5)) # Prints [0, 3, 4, 9, 10, 15, 15, 19], which corresponds to the following substrings: "The", "Godot", "Engin", "e, 4"
    print(ts.string_get_word_breaks("The Godot Engine, 4", "en", 10)) # Prints [0, 9, 10, 19], which corresponds to the following substrings: "The Godot", "Engine, 4"
```



<!-- rst-class:: classref-item-separator -->

---

<div id="_class_textserver_method_string_to_lower"></div>

[`String`](class_string.md) **string_to_lower** ( string: [`String`](class_string.md), language: [`String`](class_string.md) = "" ) const[^const]<div id="class_textserver_method_string_to_lower"></div>

Returns the string converted to lowercase.

 **Note:** Casing is locale dependent and context sensitive if server support [`FEATURE_CONTEXT_SENSITIVE_CASE_CONVERSION`](#class_textserver_constant_feature_context_sensitive_case_conversion) feature (supported by [`TextServerAdvanced`](class_textserveradvanced.md)).

 **Note:** The result may be longer or shorter than the original.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_textserver_method_string_to_title"></div>

[`String`](class_string.md) **string_to_title** ( string: [`String`](class_string.md), language: [`String`](class_string.md) = "" ) const[^const]<div id="class_textserver_method_string_to_title"></div>

Returns the string converted to title case.

 **Note:** Casing is locale dependent and context sensitive if server support [`FEATURE_CONTEXT_SENSITIVE_CASE_CONVERSION`](#class_textserver_constant_feature_context_sensitive_case_conversion) feature (supported by [`TextServerAdvanced`](class_textserveradvanced.md)).

 **Note:** The result may be longer or shorter than the original.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_textserver_method_string_to_upper"></div>

[`String`](class_string.md) **string_to_upper** ( string: [`String`](class_string.md), language: [`String`](class_string.md) = "" ) const[^const]<div id="class_textserver_method_string_to_upper"></div>

Returns the string converted to uppercase.

 **Note:** Casing is locale dependent and context sensitive if server support [`FEATURE_CONTEXT_SENSITIVE_CASE_CONVERSION`](#class_textserver_constant_feature_context_sensitive_case_conversion) feature (supported by [`TextServerAdvanced`](class_textserveradvanced.md)).

 **Note:** The result may be longer or shorter than the original.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_textserver_method_strip_diacritics"></div>

[`String`](class_string.md) **strip_diacritics** ( string: [`String`](class_string.md) ) const[^const]<div id="class_textserver_method_strip_diacritics"></div>

Strips diacritics from the string.

 **Note:** The result may be longer or shorter than the original.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_textserver_method_tag_to_name"></div>

[`String`](class_string.md) **tag_to_name** ( tag: [`int`](class_int.md) ) const[^const]<div id="class_textserver_method_tag_to_name"></div>

Converts OpenType tag to readable feature, variation, script, or language name.

[^virtual]: 本方法通常需要用户覆盖才能生效。
[^const]: 本方法无副作用，不会修改该实例的任何成员变量。
[^vararg]: 本方法除了能接受在此处描述的参数外，还能够继续接受任意数量的参数。
[^constructor]: 本方法用于构造某个类型。
[^static]: 调用本方法无需实例，可直接使用类名进行调用。
[^operator]: 本方法描述的是使用本类型作为左操作数的有效运算符。
[^bitfield]: 这个值是由下列位标志构成位掩码的整数。
[^void]: 无返回值。
