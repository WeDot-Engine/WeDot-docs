<!-- ⚠ 请勿编辑本文件 ⚠ -->
<!-- 本文档使用脚本从 WeDot 引擎源码仓库生成。 -->
<!-- 生成脚本：https://github.com/WeDot-Engine/WeDot/tree/master/doc/tools/make_md.py； -->
<!-- 原文件：https://github.com/WeDot-Engine/WeDot/tree/master/doc/classes/Image.xml。 -->

<div id="_class_image"></div>

# Image

**继承：** [`Resource`](class_resource.md) **<** [`RefCounted`](class_refcounted.md) **<** [`Object`](class_object.md)

Image datatype.

## 描述

Native image datatype. Contains image data which can be converted to an [`ImageTexture`](class_imagetexture.md) and provides commonly used *image processing* methods. The maximum width and height for an **Image** are [`MAX_WIDTH`](class_image.md#class_image_constant_max_width) and [`MAX_HEIGHT`](class_image.md#class_image_constant_max_height).

An **Image** cannot be assigned to a texture property of an object directly (such as [`Sprite2D.texture`](class_sprite2d.md#class_sprite2d_property_texture)), and has to be converted manually to an [`ImageTexture`](class_imagetexture.md) first.

 **Note:** The maximum image size is 16384×16384 pixels due to graphics hardware limitations. Larger images may fail to import.

## 属性

|||
|:-:|:--|
| [`Dictionary`](class_dictionary.md) | [`data`](class_image.md#class_image_property_data) | ``{ "data": PackedByteArray(), "format": "Lum8", "height": 0, "mipmaps": false, "width": 0 }`` |

## 方法

|||
|:-:|:--|
| `void`                                        | [`adjust_bcs`](class_image.md#class_image_method_adjust_bcs) ( brightness: [`float`](class_float.md), contrast: [`float`](class_float.md), saturation: [`float`](class_float.md) )                                                                                                        |
| `void`                                        | [`blend_rect`](class_image.md#class_image_method_blend_rect) ( src: [`Image`](class_image.md), src_rect: [`Rect2i`](class_rect2i.md), dst: [`Vector2i`](class_vector2i.md) )                                                                                                              |
| `void`                                        | [`blend_rect_mask`](class_image.md#class_image_method_blend_rect_mask) ( src: [`Image`](class_image.md), mask: [`Image`](class_image.md), src_rect: [`Rect2i`](class_rect2i.md), dst: [`Vector2i`](class_vector2i.md) )                                                                   |
| `void`                                        | [`blit_rect`](class_image.md#class_image_method_blit_rect) ( src: [`Image`](class_image.md), src_rect: [`Rect2i`](class_rect2i.md), dst: [`Vector2i`](class_vector2i.md) )                                                                                                                |
| `void`                                        | [`blit_rect_mask`](class_image.md#class_image_method_blit_rect_mask) ( src: [`Image`](class_image.md), mask: [`Image`](class_image.md), src_rect: [`Rect2i`](class_rect2i.md), dst: [`Vector2i`](class_vector2i.md) )                                                                     |
| `void`                                        | [`bump_map_to_normal_map`](class_image.md#class_image_method_bump_map_to_normal_map) ( bump_scale: [`float`](class_float.md) = 1.0 )                                                                                                                                                      |
| `void`                                        | [`clear_mipmaps`](class_image.md#class_image_method_clear_mipmaps) ( )                                                                                                                                                                                                                    |
| [Error](#enum_@globalscope_error)             | [`compress`](class_image.md#class_image_method_compress) ( mode: [CompressMode](#enum_image_compressmode), source: [CompressSource](#enum_image_compresssource) = 0, astc_format: [ASTCFormat](#enum_image_astcformat) = 0 )                                                              |
| [Error](#enum_@globalscope_error)             | [`compress_from_channels`](class_image.md#class_image_method_compress_from_channels) ( mode: [CompressMode](#enum_image_compressmode), channels: [UsedChannels](#enum_image_usedchannels), astc_format: [ASTCFormat](#enum_image_astcformat) = 0 )                                        |
| [`Dictionary`](class_dictionary.md)           | [`compute_image_metrics`](class_image.md#class_image_method_compute_image_metrics) ( compared_image: [`Image`](class_image.md), use_luma: [`bool`](class_bool.md) )                                                                                                                       |
| `void`                                        | [`convert`](class_image.md#class_image_method_convert) ( format: [Format](#enum_image_format) )                                                                                                                                                                                           |
| `void`                                        | [`copy_from`](class_image.md#class_image_method_copy_from) ( src: [`Image`](class_image.md) )                                                                                                                                                                                             |
| [`Image`](class_image.md)                     | [`create`](class_image.md#class_image_method_create) ( width: [`int`](class_int.md), height: [`int`](class_int.md), use_mipmaps: [`bool`](class_bool.md), format: [Format](#enum_image_format) ) static[^static]                                                                          |
| [`Image`](class_image.md)                     | [`create_empty`](class_image.md#class_image_method_create_empty) ( width: [`int`](class_int.md), height: [`int`](class_int.md), use_mipmaps: [`bool`](class_bool.md), format: [Format](#enum_image_format) ) static[^static]                                                              |
| [`Image`](class_image.md)                     | [`create_from_data`](class_image.md#class_image_method_create_from_data) ( width: [`int`](class_int.md), height: [`int`](class_int.md), use_mipmaps: [`bool`](class_bool.md), format: [Format](#enum_image_format), data: [`PackedByteArray`](class_packedbytearray.md) ) static[^static] |
| `void`                                        | [`crop`](class_image.md#class_image_method_crop) ( width: [`int`](class_int.md), height: [`int`](class_int.md) )                                                                                                                                                                          |
| [Error](#enum_@globalscope_error)             | [`decompress`](class_image.md#class_image_method_decompress) ( )                                                                                                                                                                                                                          |
| [AlphaMode](#enum_image_alphamode)            | [`detect_alpha`](class_image.md#class_image_method_detect_alpha) ( ) const[^const]                                                                                                                                                                                                        |
| [UsedChannels](#enum_image_usedchannels)      | [`detect_used_channels`](class_image.md#class_image_method_detect_used_channels) ( source: [CompressSource](#enum_image_compresssource) = 0 ) const[^const]                                                                                                                               |
| `void`                                        | [`fill`](class_image.md#class_image_method_fill) ( color: [`Color`](class_color.md) )                                                                                                                                                                                                     |
| `void`                                        | [`fill_rect`](class_image.md#class_image_method_fill_rect) ( rect: [`Rect2i`](class_rect2i.md), color: [`Color`](class_color.md) )                                                                                                                                                        |
| `void`                                        | [`fix_alpha_edges`](class_image.md#class_image_method_fix_alpha_edges) ( )                                                                                                                                                                                                                |
| `void`                                        | [`flip_x`](class_image.md#class_image_method_flip_x) ( )                                                                                                                                                                                                                                  |
| `void`                                        | [`flip_y`](class_image.md#class_image_method_flip_y) ( )                                                                                                                                                                                                                                  |
| [Error](#enum_@globalscope_error)             | [`generate_mipmaps`](class_image.md#class_image_method_generate_mipmaps) ( renormalize: [`bool`](class_bool.md) = false )                                                                                                                                                                 |
| [`PackedByteArray`](class_packedbytearray.md) | [`get_data`](class_image.md#class_image_method_get_data) ( ) const[^const]                                                                                                                                                                                                                |
| [`int`](class_int.md)                         | [`get_data_size`](class_image.md#class_image_method_get_data_size) ( ) const[^const]                                                                                                                                                                                                      |
| [Format](#enum_image_format)                  | [`get_format`](class_image.md#class_image_method_get_format) ( ) const[^const]                                                                                                                                                                                                            |
| [`int`](class_int.md)                         | [`get_height`](class_image.md#class_image_method_get_height) ( ) const[^const]                                                                                                                                                                                                            |
| [`int`](class_int.md)                         | [`get_mipmap_count`](class_image.md#class_image_method_get_mipmap_count) ( ) const[^const]                                                                                                                                                                                                |
| [`int`](class_int.md)                         | [`get_mipmap_offset`](class_image.md#class_image_method_get_mipmap_offset) ( mipmap: [`int`](class_int.md) ) const[^const]                                                                                                                                                                |
| [`Color`](class_color.md)                     | [`get_pixel`](class_image.md#class_image_method_get_pixel) ( x: [`int`](class_int.md), y: [`int`](class_int.md) ) const[^const]                                                                                                                                                           |
| [`Color`](class_color.md)                     | [`get_pixelv`](class_image.md#class_image_method_get_pixelv) ( point: [`Vector2i`](class_vector2i.md) ) const[^const]                                                                                                                                                                     |
| [`Image`](class_image.md)                     | [`get_region`](class_image.md#class_image_method_get_region) ( region: [`Rect2i`](class_rect2i.md) ) const[^const]                                                                                                                                                                        |
| [`Vector2i`](class_vector2i.md)               | [`get_size`](class_image.md#class_image_method_get_size) ( ) const[^const]                                                                                                                                                                                                                |
| [`Rect2i`](class_rect2i.md)                   | [`get_used_rect`](class_image.md#class_image_method_get_used_rect) ( ) const[^const]                                                                                                                                                                                                      |
| [`int`](class_int.md)                         | [`get_width`](class_image.md#class_image_method_get_width) ( ) const[^const]                                                                                                                                                                                                              |
| [`bool`](class_bool.md)                       | [`has_mipmaps`](class_image.md#class_image_method_has_mipmaps) ( ) const[^const]                                                                                                                                                                                                          |
| [`bool`](class_bool.md)                       | [`is_compressed`](class_image.md#class_image_method_is_compressed) ( ) const[^const]                                                                                                                                                                                                      |
| [`bool`](class_bool.md)                       | [`is_empty`](class_image.md#class_image_method_is_empty) ( ) const[^const]                                                                                                                                                                                                                |
| [`bool`](class_bool.md)                       | [`is_invisible`](class_image.md#class_image_method_is_invisible) ( ) const[^const]                                                                                                                                                                                                        |
| `void`                                        | [`linear_to_srgb`](class_image.md#class_image_method_linear_to_srgb) ( )                                                                                                                                                                                                                  |
| [Error](#enum_@globalscope_error)             | [`load`](class_image.md#class_image_method_load) ( path: [`String`](class_string.md) )                                                                                                                                                                                                    |
| [Error](#enum_@globalscope_error)             | [`load_bmp_from_buffer`](class_image.md#class_image_method_load_bmp_from_buffer) ( buffer: [`PackedByteArray`](class_packedbytearray.md) )                                                                                                                                                |
| [`Image`](class_image.md)                     | [`load_from_file`](class_image.md#class_image_method_load_from_file) ( path: [`String`](class_string.md) ) static[^static]                                                                                                                                                                |
| [Error](#enum_@globalscope_error)             | [`load_jpg_from_buffer`](class_image.md#class_image_method_load_jpg_from_buffer) ( buffer: [`PackedByteArray`](class_packedbytearray.md) )                                                                                                                                                |
| [Error](#enum_@globalscope_error)             | [`load_ktx_from_buffer`](class_image.md#class_image_method_load_ktx_from_buffer) ( buffer: [`PackedByteArray`](class_packedbytearray.md) )                                                                                                                                                |
| [Error](#enum_@globalscope_error)             | [`load_png_from_buffer`](class_image.md#class_image_method_load_png_from_buffer) ( buffer: [`PackedByteArray`](class_packedbytearray.md) )                                                                                                                                                |
| [Error](#enum_@globalscope_error)             | [`load_svg_from_buffer`](class_image.md#class_image_method_load_svg_from_buffer) ( buffer: [`PackedByteArray`](class_packedbytearray.md), scale: [`float`](class_float.md) = 1.0 )                                                                                                        |
| [Error](#enum_@globalscope_error)             | [`load_svg_from_string`](class_image.md#class_image_method_load_svg_from_string) ( svg_str: [`String`](class_string.md), scale: [`float`](class_float.md) = 1.0 )                                                                                                                         |
| [Error](#enum_@globalscope_error)             | [`load_tga_from_buffer`](class_image.md#class_image_method_load_tga_from_buffer) ( buffer: [`PackedByteArray`](class_packedbytearray.md) )                                                                                                                                                |
| [Error](#enum_@globalscope_error)             | [`load_webp_from_buffer`](class_image.md#class_image_method_load_webp_from_buffer) ( buffer: [`PackedByteArray`](class_packedbytearray.md) )                                                                                                                                              |
| `void`                                        | [`normal_map_to_xy`](class_image.md#class_image_method_normal_map_to_xy) ( )                                                                                                                                                                                                              |
| `void`                                        | [`premultiply_alpha`](class_image.md#class_image_method_premultiply_alpha) ( )                                                                                                                                                                                                            |
| `void`                                        | [`resize`](class_image.md#class_image_method_resize) ( width: [`int`](class_int.md), height: [`int`](class_int.md), interpolation: [Interpolation](#enum_image_interpolation) = 1 )                                                                                                       |
| `void`                                        | [`resize_to_po2`](class_image.md#class_image_method_resize_to_po2) ( square: [`bool`](class_bool.md) = false, interpolation: [Interpolation](#enum_image_interpolation) = 1 )                                                                                                             |
| [`Image`](class_image.md)                     | [`rgbe_to_srgb`](class_image.md#class_image_method_rgbe_to_srgb) ( )                                                                                                                                                                                                                      |
| `void`                                        | [`rotate_90`](class_image.md#class_image_method_rotate_90) ( direction: [ClockDirection](#enum_@globalscope_clockdirection) )                                                                                                                                                             |
| `void`                                        | [`rotate_180`](class_image.md#class_image_method_rotate_180) ( )                                                                                                                                                                                                                          |
| [Error](#enum_@globalscope_error)             | [`save_exr`](class_image.md#class_image_method_save_exr) ( path: [`String`](class_string.md), grayscale: [`bool`](class_bool.md) = false ) const[^const]                                                                                                                                  |
| [`PackedByteArray`](class_packedbytearray.md) | [`save_exr_to_buffer`](class_image.md#class_image_method_save_exr_to_buffer) ( grayscale: [`bool`](class_bool.md) = false ) const[^const]                                                                                                                                                 |
| [Error](#enum_@globalscope_error)             | [`save_jpg`](class_image.md#class_image_method_save_jpg) ( path: [`String`](class_string.md), quality: [`float`](class_float.md) = 0.75 ) const[^const]                                                                                                                                   |
| [`PackedByteArray`](class_packedbytearray.md) | [`save_jpg_to_buffer`](class_image.md#class_image_method_save_jpg_to_buffer) ( quality: [`float`](class_float.md) = 0.75 ) const[^const]                                                                                                                                                  |
| [Error](#enum_@globalscope_error)             | [`save_png`](class_image.md#class_image_method_save_png) ( path: [`String`](class_string.md) ) const[^const]                                                                                                                                                                              |
| [`PackedByteArray`](class_packedbytearray.md) | [`save_png_to_buffer`](class_image.md#class_image_method_save_png_to_buffer) ( ) const[^const]                                                                                                                                                                                            |
| [Error](#enum_@globalscope_error)             | [`save_webp`](class_image.md#class_image_method_save_webp) ( path: [`String`](class_string.md), lossy: [`bool`](class_bool.md) = false, quality: [`float`](class_float.md) = 0.75 ) const[^const]                                                                                         |
| [`PackedByteArray`](class_packedbytearray.md) | [`save_webp_to_buffer`](class_image.md#class_image_method_save_webp_to_buffer) ( lossy: [`bool`](class_bool.md) = false, quality: [`float`](class_float.md) = 0.75 ) const[^const]                                                                                                        |
| `void`                                        | [`set_data`](class_image.md#class_image_method_set_data) ( width: [`int`](class_int.md), height: [`int`](class_int.md), use_mipmaps: [`bool`](class_bool.md), format: [Format](#enum_image_format), data: [`PackedByteArray`](class_packedbytearray.md) )                                 |
| `void`                                        | [`set_pixel`](class_image.md#class_image_method_set_pixel) ( x: [`int`](class_int.md), y: [`int`](class_int.md), color: [`Color`](class_color.md) )                                                                                                                                       |
| `void`                                        | [`set_pixelv`](class_image.md#class_image_method_set_pixelv) ( point: [`Vector2i`](class_vector2i.md), color: [`Color`](class_color.md) )                                                                                                                                                 |
| `void`                                        | [`shrink_x2`](class_image.md#class_image_method_shrink_x2) ( )                                                                                                                                                                                                                            |
| `void`                                        | [`srgb_to_linear`](class_image.md#class_image_method_srgb_to_linear) ( )                                                                                                                                                                                                                  |

<!-- rst-class:: classref-section-separator -->

---

## 枚举

<div id="_class_enum_image_format"></div>

enum **Format**: <div id="enum_image_format"></div>

<div id="_class_image_constant_format_l8"></div>

[Format](#enum_image_format) **FORMAT_L8** = ``0``

Texture format with a single 8-bit depth representing luminance.

<div id="_class_image_constant_format_la8"></div>

[Format](#enum_image_format) **FORMAT_LA8** = ``1``

OpenGL texture format with two values, luminance and alpha each stored with 8 bits.

<div id="_class_image_constant_format_r8"></div>

[Format](#enum_image_format) **FORMAT_R8** = ``2``

OpenGL texture format `RED` with a single component and a bitdepth of 8.

<div id="_class_image_constant_format_rg8"></div>

[Format](#enum_image_format) **FORMAT_RG8** = ``3``

OpenGL texture format `RG` with two components and a bitdepth of 8 for each.

<div id="_class_image_constant_format_rgb8"></div>

[Format](#enum_image_format) **FORMAT_RGB8** = ``4``

OpenGL texture format `RGB` with three components, each with a bitdepth of 8.

 **Note:** When creating an [`ImageTexture`](class_imagetexture.md), an sRGB to linear color space conversion is performed.

<div id="_class_image_constant_format_rgba8"></div>

[Format](#enum_image_format) **FORMAT_RGBA8** = ``5``

OpenGL texture format `RGBA` with four components, each with a bitdepth of 8.

 **Note:** When creating an [`ImageTexture`](class_imagetexture.md), an sRGB to linear color space conversion is performed.

<div id="_class_image_constant_format_rgba4444"></div>

[Format](#enum_image_format) **FORMAT_RGBA4444** = ``6``

OpenGL texture format `RGBA` with four components, each with a bitdepth of 4.

<div id="_class_image_constant_format_rgb565"></div>

[Format](#enum_image_format) **FORMAT_RGB565** = ``7``

OpenGL texture format `RGB` with three components. Red and blue have a bitdepth of 5, and green has a bitdepth of 6.

<div id="_class_image_constant_format_rf"></div>

[Format](#enum_image_format) **FORMAT_RF** = ``8``

OpenGL texture format `GL_R32F` where there's one component, a 32-bit floating-point value.

<div id="_class_image_constant_format_rgf"></div>

[Format](#enum_image_format) **FORMAT_RGF** = ``9``

OpenGL texture format `GL_RG32F` where there are two components, each a 32-bit floating-point values.

<div id="_class_image_constant_format_rgbf"></div>

[Format](#enum_image_format) **FORMAT_RGBF** = ``10``

OpenGL texture format `GL_RGB32F` where there are three components, each a 32-bit floating-point values.

<div id="_class_image_constant_format_rgbaf"></div>

[Format](#enum_image_format) **FORMAT_RGBAF** = ``11``

OpenGL texture format `GL_RGBA32F` where there are four components, each a 32-bit floating-point values.

<div id="_class_image_constant_format_rh"></div>

[Format](#enum_image_format) **FORMAT_RH** = ``12``

OpenGL texture format `GL_R16F` where there's one component, a 16-bit "half-precision" floating-point value.

<div id="_class_image_constant_format_rgh"></div>

[Format](#enum_image_format) **FORMAT_RGH** = ``13``

OpenGL texture format `GL_RG16F` where there are two components, each a 16-bit "half-precision" floating-point value.

<div id="_class_image_constant_format_rgbh"></div>

[Format](#enum_image_format) **FORMAT_RGBH** = ``14``

OpenGL texture format `GL_RGB16F` where there are three components, each a 16-bit "half-precision" floating-point value.

<div id="_class_image_constant_format_rgbah"></div>

[Format](#enum_image_format) **FORMAT_RGBAH** = ``15``

OpenGL texture format `GL_RGBA16F` where there are four components, each a 16-bit "half-precision" floating-point value.

<div id="_class_image_constant_format_rgbe9995"></div>

[Format](#enum_image_format) **FORMAT_RGBE9995** = ``16``

A special OpenGL texture format where the three color components have 9 bits of precision and all three share a single 5-bit exponent.

<div id="_class_image_constant_format_dxt1"></div>

[Format](#enum_image_format) **FORMAT_DXT1** = ``17``

The [*S3TC*](https://en.wikipedia.org/wiki/S3_Texture_Compression) texture format that uses Block Compression 1, and is the smallest variation of S3TC, only providing 1 bit of alpha and color data being premultiplied with alpha.

 **Note:** When creating an [`ImageTexture`](class_imagetexture.md), an sRGB to linear color space conversion is performed.

<div id="_class_image_constant_format_dxt3"></div>

[Format](#enum_image_format) **FORMAT_DXT3** = ``18``

The [*S3TC*](https://en.wikipedia.org/wiki/S3_Texture_Compression) texture format that uses Block Compression 2, and color data is interpreted as not having been premultiplied by alpha. Well suited for images with sharp alpha transitions between translucent and opaque areas.

 **Note:** When creating an [`ImageTexture`](class_imagetexture.md), an sRGB to linear color space conversion is performed.

<div id="_class_image_constant_format_dxt5"></div>

[Format](#enum_image_format) **FORMAT_DXT5** = ``19``

The [*S3TC*](https://en.wikipedia.org/wiki/S3_Texture_Compression) texture format also known as Block Compression 3 or BC3 that contains 64 bits of alpha channel data followed by 64 bits of DXT1-encoded color data. Color data is not premultiplied by alpha, same as DXT3. DXT5 generally produces superior results for transparent gradients compared to DXT3.

 **Note:** When creating an [`ImageTexture`](class_imagetexture.md), an sRGB to linear color space conversion is performed.

<div id="_class_image_constant_format_rgtc_r"></div>

[Format](#enum_image_format) **FORMAT_RGTC_R** = ``20``

Texture format that uses [*Red Green Texture Compression*](https://www.khronos.org/opengl/wiki/Red_Green_Texture_Compression), normalizing the red channel data using the same compression algorithm that DXT5 uses for the alpha channel.

<div id="_class_image_constant_format_rgtc_rg"></div>

[Format](#enum_image_format) **FORMAT_RGTC_RG** = ``21``

Texture format that uses [*Red Green Texture Compression*](https://www.khronos.org/opengl/wiki/Red_Green_Texture_Compression), normalizing the red and green channel data using the same compression algorithm that DXT5 uses for the alpha channel.

<div id="_class_image_constant_format_bptc_rgba"></div>

[Format](#enum_image_format) **FORMAT_BPTC_RGBA** = ``22``

Texture format that uses [*BPTC*](https://www.khronos.org/opengl/wiki/BPTC_Texture_Compression) compression with unsigned normalized RGBA components.

 **Note:** When creating an [`ImageTexture`](class_imagetexture.md), an sRGB to linear color space conversion is performed.

<div id="_class_image_constant_format_bptc_rgbf"></div>

[Format](#enum_image_format) **FORMAT_BPTC_RGBF** = ``23``

Texture format that uses [*BPTC*](https://www.khronos.org/opengl/wiki/BPTC_Texture_Compression) compression with signed floating-point RGB components.

<div id="_class_image_constant_format_bptc_rgbfu"></div>

[Format](#enum_image_format) **FORMAT_BPTC_RGBFU** = ``24``

Texture format that uses [*BPTC*](https://www.khronos.org/opengl/wiki/BPTC_Texture_Compression) compression with unsigned floating-point RGB components.

<div id="_class_image_constant_format_etc"></div>

[Format](#enum_image_format) **FORMAT_ETC** = ``25``

[*Ericsson Texture Compression format 1*](https://en.wikipedia.org/wiki/Ericsson_Texture_Compression#ETC1), also referred to as "ETC1", and is part of the OpenGL ES graphics standard. This format cannot store an alpha channel.

<div id="_class_image_constant_format_etc2_r11"></div>

[Format](#enum_image_format) **FORMAT_ETC2_R11** = ``26``

[*Ericsson Texture Compression format 2*](https://en.wikipedia.org/wiki/Ericsson_Texture_Compression#ETC2_and_EAC) (`R11_EAC` variant), which provides one channel of unsigned data.

<div id="_class_image_constant_format_etc2_r11s"></div>

[Format](#enum_image_format) **FORMAT_ETC2_R11S** = ``27``

[*Ericsson Texture Compression format 2*](https://en.wikipedia.org/wiki/Ericsson_Texture_Compression#ETC2_and_EAC) (`SIGNED_R11_EAC` variant), which provides one channel of signed data.

<div id="_class_image_constant_format_etc2_rg11"></div>

[Format](#enum_image_format) **FORMAT_ETC2_RG11** = ``28``

[*Ericsson Texture Compression format 2*](https://en.wikipedia.org/wiki/Ericsson_Texture_Compression#ETC2_and_EAC) (`RG11_EAC` variant), which provides two channels of unsigned data.

<div id="_class_image_constant_format_etc2_rg11s"></div>

[Format](#enum_image_format) **FORMAT_ETC2_RG11S** = ``29``

[*Ericsson Texture Compression format 2*](https://en.wikipedia.org/wiki/Ericsson_Texture_Compression#ETC2_and_EAC) (`SIGNED_RG11_EAC` variant), which provides two channels of signed data.

<div id="_class_image_constant_format_etc2_rgb8"></div>

[Format](#enum_image_format) **FORMAT_ETC2_RGB8** = ``30``

[*Ericsson Texture Compression format 2*](https://en.wikipedia.org/wiki/Ericsson_Texture_Compression#ETC2_and_EAC) (`RGB8` variant), which is a follow-up of ETC1 and compresses RGB888 data.

 **Note:** When creating an [`ImageTexture`](class_imagetexture.md), an sRGB to linear color space conversion is performed.

<div id="_class_image_constant_format_etc2_rgba8"></div>

[Format](#enum_image_format) **FORMAT_ETC2_RGBA8** = ``31``

[*Ericsson Texture Compression format 2*](https://en.wikipedia.org/wiki/Ericsson_Texture_Compression#ETC2_and_EAC) (`RGBA8` variant), which compresses RGBA8888 data with full alpha support.

 **Note:** When creating an [`ImageTexture`](class_imagetexture.md), an sRGB to linear color space conversion is performed.

<div id="_class_image_constant_format_etc2_rgb8a1"></div>

[Format](#enum_image_format) **FORMAT_ETC2_RGB8A1** = ``32``

[*Ericsson Texture Compression format 2*](https://en.wikipedia.org/wiki/Ericsson_Texture_Compression#ETC2_and_EAC) (`RGB8_PUNCHTHROUGH_ALPHA1` variant), which compresses RGBA data to make alpha either fully transparent or fully opaque.

 **Note:** When creating an [`ImageTexture`](class_imagetexture.md), an sRGB to linear color space conversion is performed.

<div id="_class_image_constant_format_etc2_ra_as_rg"></div>

[Format](#enum_image_format) **FORMAT_ETC2_RA_AS_RG** = ``33``

[*Ericsson Texture Compression format 2*](https://en.wikipedia.org/wiki/Ericsson_Texture_Compression#ETC2_and_EAC) (`RGBA8` variant), which compresses RA data and interprets it as two channels (red and green). See also [`FORMAT_ETC2_RGBA8`](class_image.md#class_image_constant_format_etc2_rgba8).

<div id="_class_image_constant_format_dxt5_ra_as_rg"></div>

[Format](#enum_image_format) **FORMAT_DXT5_RA_AS_RG** = ``34``

The [*S3TC*](https://en.wikipedia.org/wiki/S3_Texture_Compression) texture format also known as Block Compression 3 or BC3, which compresses RA data and interprets it as two channels (red and green). See also [`FORMAT_DXT5`](class_image.md#class_image_constant_format_dxt5).

<div id="_class_image_constant_format_astc_4x4"></div>

[Format](#enum_image_format) **FORMAT_ASTC_4x4** = ``35``

[*Adaptive Scalable Texture Compression*](https://en.wikipedia.org/wiki/Adaptive_scalable_texture_compression). This implements the 4×4 (high quality) mode.

<div id="_class_image_constant_format_astc_4x4_hdr"></div>

[Format](#enum_image_format) **FORMAT_ASTC_4x4_HDR** = ``36``

Same format as [`FORMAT_ASTC_4x4`](class_image.md#class_image_constant_format_astc_4x4), but with the hint to let the GPU know it is used for HDR.

<div id="_class_image_constant_format_astc_8x8"></div>

[Format](#enum_image_format) **FORMAT_ASTC_8x8** = ``37``

[*Adaptive Scalable Texture Compression*](https://en.wikipedia.org/wiki/Adaptive_scalable_texture_compression). This implements the 8×8 (low quality) mode.

<div id="_class_image_constant_format_astc_8x8_hdr"></div>

[Format](#enum_image_format) **FORMAT_ASTC_8x8_HDR** = ``38``

Same format as [`FORMAT_ASTC_8x8`](class_image.md#class_image_constant_format_astc_8x8), but with the hint to let the GPU know it is used for HDR.

<div id="_class_image_constant_format_max"></div>

[Format](#enum_image_format) **FORMAT_MAX** = ``39``

Represents the size of the [Format](#enum_image_format) enum.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_enum_image_interpolation"></div>

enum **Interpolation**: <div id="enum_image_interpolation"></div>

<div id="_class_image_constant_interpolate_nearest"></div>

[Interpolation](#enum_image_interpolation) **INTERPOLATE_NEAREST** = ``0``

Performs nearest-neighbor interpolation. If the image is resized, it will be pixelated.

<div id="_class_image_constant_interpolate_bilinear"></div>

[Interpolation](#enum_image_interpolation) **INTERPOLATE_BILINEAR** = ``1``

Performs bilinear interpolation. If the image is resized, it will be blurry. This mode is faster than [`INTERPOLATE_CUBIC`](class_image.md#class_image_constant_interpolate_cubic), but it results in lower quality.

<div id="_class_image_constant_interpolate_cubic"></div>

[Interpolation](#enum_image_interpolation) **INTERPOLATE_CUBIC** = ``2``

Performs cubic interpolation. If the image is resized, it will be blurry. This mode often gives better results compared to [`INTERPOLATE_BILINEAR`](class_image.md#class_image_constant_interpolate_bilinear), at the cost of being slower.

<div id="_class_image_constant_interpolate_trilinear"></div>

[Interpolation](#enum_image_interpolation) **INTERPOLATE_TRILINEAR** = ``3``

Performs bilinear separately on the two most-suited mipmap levels, then linearly interpolates between them.

It's slower than [`INTERPOLATE_BILINEAR`](class_image.md#class_image_constant_interpolate_bilinear), but produces higher-quality results with far fewer aliasing artifacts.

If the image does not have mipmaps, they will be generated and used internally, but no mipmaps will be generated on the resulting image.

 **Note:** If you intend to scale multiple copies of the original image, it's better to call [`generate_mipmaps`](class_image.md#class_image_method_generate_mipmaps)] on it in advance, to avoid wasting processing power in generating them again and again.

On the other hand, if the image already has mipmaps, they will be used, and a new set will be generated for the resulting image.

<div id="_class_image_constant_interpolate_lanczos"></div>

[Interpolation](#enum_image_interpolation) **INTERPOLATE_LANCZOS** = ``4``

Performs Lanczos interpolation. This is the slowest image resizing mode, but it typically gives the best results, especially when downscaling images.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_enum_image_alphamode"></div>

enum **AlphaMode**: <div id="enum_image_alphamode"></div>

<div id="_class_image_constant_alpha_none"></div>

[AlphaMode](#enum_image_alphamode) **ALPHA_NONE** = ``0``

Image does not have alpha.

<div id="_class_image_constant_alpha_bit"></div>

[AlphaMode](#enum_image_alphamode) **ALPHA_BIT** = ``1``

Image stores alpha in a single bit.

<div id="_class_image_constant_alpha_blend"></div>

[AlphaMode](#enum_image_alphamode) **ALPHA_BLEND** = ``2``

Image uses alpha.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_enum_image_compressmode"></div>

enum **CompressMode**: <div id="enum_image_compressmode"></div>

<div id="_class_image_constant_compress_s3tc"></div>

[CompressMode](#enum_image_compressmode) **COMPRESS_S3TC** = ``0``

Use S3TC compression.

<div id="_class_image_constant_compress_etc"></div>

[CompressMode](#enum_image_compressmode) **COMPRESS_ETC** = ``1``

Use ETC compression.

<div id="_class_image_constant_compress_etc2"></div>

[CompressMode](#enum_image_compressmode) **COMPRESS_ETC2** = ``2``

Use ETC2 compression.

<div id="_class_image_constant_compress_bptc"></div>

[CompressMode](#enum_image_compressmode) **COMPRESS_BPTC** = ``3``

Use BPTC compression.

<div id="_class_image_constant_compress_astc"></div>

[CompressMode](#enum_image_compressmode) **COMPRESS_ASTC** = ``4``

Use ASTC compression.

<div id="_class_image_constant_compress_max"></div>

[CompressMode](#enum_image_compressmode) **COMPRESS_MAX** = ``5``

Represents the size of the [CompressMode](#enum_image_compressmode) enum.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_enum_image_usedchannels"></div>

enum **UsedChannels**: <div id="enum_image_usedchannels"></div>

<div id="_class_image_constant_used_channels_l"></div>

[UsedChannels](#enum_image_usedchannels) **USED_CHANNELS_L** = ``0``

The image only uses one channel for luminance (grayscale).

<div id="_class_image_constant_used_channels_la"></div>

[UsedChannels](#enum_image_usedchannels) **USED_CHANNELS_LA** = ``1``

The image uses two channels for luminance and alpha, respectively.

<div id="_class_image_constant_used_channels_r"></div>

[UsedChannels](#enum_image_usedchannels) **USED_CHANNELS_R** = ``2``

The image only uses the red channel.

<div id="_class_image_constant_used_channels_rg"></div>

[UsedChannels](#enum_image_usedchannels) **USED_CHANNELS_RG** = ``3``

The image uses two channels for red and green.

<div id="_class_image_constant_used_channels_rgb"></div>

[UsedChannels](#enum_image_usedchannels) **USED_CHANNELS_RGB** = ``4``

The image uses three channels for red, green, and blue.

<div id="_class_image_constant_used_channels_rgba"></div>

[UsedChannels](#enum_image_usedchannels) **USED_CHANNELS_RGBA** = ``5``

The image uses four channels for red, green, blue, and alpha.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_enum_image_compresssource"></div>

enum **CompressSource**: <div id="enum_image_compresssource"></div>

<div id="_class_image_constant_compress_source_generic"></div>

[CompressSource](#enum_image_compresssource) **COMPRESS_SOURCE_GENERIC** = ``0``

Source texture (before compression) is a regular texture. Default for all textures.

<div id="_class_image_constant_compress_source_srgb"></div>

[CompressSource](#enum_image_compresssource) **COMPRESS_SOURCE_SRGB** = ``1``

Source texture (before compression) is in sRGB space.

<div id="_class_image_constant_compress_source_normal"></div>

[CompressSource](#enum_image_compresssource) **COMPRESS_SOURCE_NORMAL** = ``2``

Source texture (before compression) is a normal texture (e.g. it can be compressed into two channels).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_enum_image_astcformat"></div>

enum **ASTCFormat**: <div id="enum_image_astcformat"></div>

<div id="_class_image_constant_astc_format_4x4"></div>

[ASTCFormat](#enum_image_astcformat) **ASTC_FORMAT_4x4** = ``0``

Hint to indicate that the high quality 4×4 ASTC compression format should be used.

<div id="_class_image_constant_astc_format_8x8"></div>

[ASTCFormat](#enum_image_astcformat) **ASTC_FORMAT_8x8** = ``1``

Hint to indicate that the low quality 8×8 ASTC compression format should be used.

<!-- rst-class:: classref-section-separator -->

---

## 常量

<div id="_class_image_constant_max_width"></div>

**MAX_WIDTH** = ``16777216`` <div id="class_image_constant_max_width"></div>

The maximal width allowed for **Image** resources.

<div id="_class_image_constant_max_height"></div>

**MAX_HEIGHT** = ``16777216`` <div id="class_image_constant_max_height"></div>

The maximal height allowed for **Image** resources.

<!-- rst-class:: classref-section-separator -->

---

## 属性说明

<div id="_class_image_property_data"></div>

[`Dictionary`](class_dictionary.md) **data** = ``{ "data": PackedByteArray(), "format": "Lum8", "height": 0, "mipmaps": false, "width": 0 }`` <div id="class_image_property_data"></div>

Holds all the image's color data in a given format. See [Format](#enum_image_format) constants.

<!-- rst-class:: classref-section-separator -->

---

## 方法说明

<div id="_class_image_method_adjust_bcs"></div>

`void` **adjust_bcs** ( brightness: [`float`](class_float.md), contrast: [`float`](class_float.md), saturation: [`float`](class_float.md) )<div id="class_image_method_adjust_bcs"></div>

Adjusts this image's `brightness`, `contrast`, and `saturation` by the given values. Does not work if the image is compressed (see [`is_compressed`](class_image.md#class_image_method_is_compressed)).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_image_method_blend_rect"></div>

`void` **blend_rect** ( src: [`Image`](class_image.md), src_rect: [`Rect2i`](class_rect2i.md), dst: [`Vector2i`](class_vector2i.md) )<div id="class_image_method_blend_rect"></div>

Alpha-blends `src_rect` from `src` image to this image at coordinates `dst`, clipped accordingly to both image bounds. This image and `src` image **must** have the same format. `src_rect` with non-positive size is treated as empty.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_image_method_blend_rect_mask"></div>

`void` **blend_rect_mask** ( src: [`Image`](class_image.md), mask: [`Image`](class_image.md), src_rect: [`Rect2i`](class_rect2i.md), dst: [`Vector2i`](class_vector2i.md) )<div id="class_image_method_blend_rect_mask"></div>

Alpha-blends `src_rect` from `src` image to this image using `mask` image at coordinates `dst`, clipped accordingly to both image bounds. Alpha channels are required for both `src` and `mask`. `dst` pixels and `src` pixels will blend if the corresponding mask pixel's alpha value is not 0. This image and `src` image **must** have the same format. `src` image and `mask` image **must** have the same size (width and height) but they can have different formats. `src_rect` with non-positive size is treated as empty.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_image_method_blit_rect"></div>

`void` **blit_rect** ( src: [`Image`](class_image.md), src_rect: [`Rect2i`](class_rect2i.md), dst: [`Vector2i`](class_vector2i.md) )<div id="class_image_method_blit_rect"></div>

Copies `src_rect` from `src` image to this image at coordinates `dst`, clipped accordingly to both image bounds. This image and `src` image **must** have the same format. `src_rect` with non-positive size is treated as empty.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_image_method_blit_rect_mask"></div>

`void` **blit_rect_mask** ( src: [`Image`](class_image.md), mask: [`Image`](class_image.md), src_rect: [`Rect2i`](class_rect2i.md), dst: [`Vector2i`](class_vector2i.md) )<div id="class_image_method_blit_rect_mask"></div>

Blits `src_rect` area from `src` image to this image at the coordinates given by `dst`, clipped accordingly to both image bounds. `src` pixel is copied onto `dst` if the corresponding `mask` pixel's alpha value is not 0. This image and `src` image **must** have the same format. `src` image and `mask` image **must** have the same size (width and height) but they can have different formats. `src_rect` with non-positive size is treated as empty.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_image_method_bump_map_to_normal_map"></div>

`void` **bump_map_to_normal_map** ( bump_scale: [`float`](class_float.md) = 1.0 )<div id="class_image_method_bump_map_to_normal_map"></div>

Converts a bump map to a normal map. A bump map provides a height offset per-pixel, while a normal map provides a normal direction per pixel.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_image_method_clear_mipmaps"></div>

`void` **clear_mipmaps** ( )<div id="class_image_method_clear_mipmaps"></div>

Removes the image's mipmaps.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_image_method_compress"></div>

[Error](#enum_@globalscope_error) **compress** ( mode: [CompressMode](#enum_image_compressmode), source: [CompressSource](#enum_image_compresssource) = 0, astc_format: [ASTCFormat](#enum_image_astcformat) = 0 )<div id="class_image_method_compress"></div>

Compresses the image to use less memory. Can not directly access pixel data while the image is compressed. Returns error if the chosen compression mode is not available.

The `source` parameter helps to pick the best compression method for DXT and ETC2 formats. It is ignored for ASTC compression.

For ASTC compression, the `astc_format` parameter must be supplied.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_image_method_compress_from_channels"></div>

[Error](#enum_@globalscope_error) **compress_from_channels** ( mode: [CompressMode](#enum_image_compressmode), channels: [UsedChannels](#enum_image_usedchannels), astc_format: [ASTCFormat](#enum_image_astcformat) = 0 )<div id="class_image_method_compress_from_channels"></div>

Compresses the image to use less memory. Can not directly access pixel data while the image is compressed. Returns error if the chosen compression mode is not available.

This is an alternative to [`compress`](class_image.md#class_image_method_compress) that lets the user supply the channels used in order for the compressor to pick the best DXT and ETC2 formats. For other formats (non DXT or ETC2), this argument is ignored.

For ASTC compression, the `astc_format` parameter must be supplied.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_image_method_compute_image_metrics"></div>

[`Dictionary`](class_dictionary.md) **compute_image_metrics** ( compared_image: [`Image`](class_image.md), use_luma: [`bool`](class_bool.md) )<div id="class_image_method_compute_image_metrics"></div>

Compute image metrics on the current image and the compared image.

The dictionary contains `max`, `mean`, `mean_squared`, `root_mean_squared` and `peak_snr`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_image_method_convert"></div>

`void` **convert** ( format: [Format](#enum_image_format) )<div id="class_image_method_convert"></div>

Converts the image's format. See [Format](#enum_image_format) constants.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_image_method_copy_from"></div>

`void` **copy_from** ( src: [`Image`](class_image.md) )<div id="class_image_method_copy_from"></div>

Copies `src` image to this image.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_image_method_create"></div>

[`Image`](class_image.md) **create** ( width: [`int`](class_int.md), height: [`int`](class_int.md), use_mipmaps: [`bool`](class_bool.md), format: [Format](#enum_image_format) ) static[^static]<div id="class_image_method_create"></div>

**已弃用：** Use [`create_empty`](class_image.md#class_image_method_create_empty).

Creates an empty image of given size and format. See [Format](#enum_image_format) constants. If `use_mipmaps` is `true`, then generate mipmaps for this image. See the [`generate_mipmaps`](class_image.md#class_image_method_generate_mipmaps).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_image_method_create_empty"></div>

[`Image`](class_image.md) **create_empty** ( width: [`int`](class_int.md), height: [`int`](class_int.md), use_mipmaps: [`bool`](class_bool.md), format: [Format](#enum_image_format) ) static[^static]<div id="class_image_method_create_empty"></div>

Creates an empty image of given size and format. See [Format](#enum_image_format) constants. If `use_mipmaps` is `true`, then generate mipmaps for this image. See the [`generate_mipmaps`](class_image.md#class_image_method_generate_mipmaps).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_image_method_create_from_data"></div>

[`Image`](class_image.md) **create_from_data** ( width: [`int`](class_int.md), height: [`int`](class_int.md), use_mipmaps: [`bool`](class_bool.md), format: [Format](#enum_image_format), data: [`PackedByteArray`](class_packedbytearray.md) ) static[^static]<div id="class_image_method_create_from_data"></div>

Creates a new image of given size and format. See [Format](#enum_image_format) constants. Fills the image with the given raw data. If `use_mipmaps` is `true` then loads mipmaps for this image from `data`. See [`generate_mipmaps`](class_image.md#class_image_method_generate_mipmaps).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_image_method_crop"></div>

`void` **crop** ( width: [`int`](class_int.md), height: [`int`](class_int.md) )<div id="class_image_method_crop"></div>

Crops the image to the given `width` and `height`. If the specified size is larger than the current size, the extra area is filled with black pixels.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_image_method_decompress"></div>

[Error](#enum_@globalscope_error) **decompress** ( )<div id="class_image_method_decompress"></div>

Decompresses the image if it is VRAM compressed in a supported format. Returns [`@GlobalScope.OK`](class_@globalscope.md#class_@globalscope_constant_ok) if the format is supported, otherwise [`@GlobalScope.ERR_UNAVAILABLE`](class_@globalscope.md#class_@globalscope_constant_err_unavailable).

 **Note:** The following formats can be decompressed: DXT, RGTC, BPTC. The formats ETC1 and ETC2 are not supported.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_image_method_detect_alpha"></div>

[AlphaMode](#enum_image_alphamode) **detect_alpha** ( ) const[^const]<div id="class_image_method_detect_alpha"></div>

Returns [`ALPHA_BLEND`](class_image.md#class_image_constant_alpha_blend) if the image has data for alpha values. Returns [`ALPHA_BIT`](class_image.md#class_image_constant_alpha_bit) if all the alpha values are stored in a single bit. Returns [`ALPHA_NONE`](class_image.md#class_image_constant_alpha_none) if no data for alpha values is found.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_image_method_detect_used_channels"></div>

[UsedChannels](#enum_image_usedchannels) **detect_used_channels** ( source: [CompressSource](#enum_image_compresssource) = 0 ) const[^const]<div id="class_image_method_detect_used_channels"></div>

Returns the color channels used by this image, as one of the [UsedChannels](#enum_image_usedchannels) constants. If the image is compressed, the original `source` must be specified.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_image_method_fill"></div>

`void` **fill** ( color: [`Color`](class_color.md) )<div id="class_image_method_fill"></div>

Fills the image with `color`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_image_method_fill_rect"></div>

`void` **fill_rect** ( rect: [`Rect2i`](class_rect2i.md), color: [`Color`](class_color.md) )<div id="class_image_method_fill_rect"></div>

Fills `rect` with `color`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_image_method_fix_alpha_edges"></div>

`void` **fix_alpha_edges** ( )<div id="class_image_method_fix_alpha_edges"></div>

Blends low-alpha pixels with nearby pixels.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_image_method_flip_x"></div>

`void` **flip_x** ( )<div id="class_image_method_flip_x"></div>

Flips the image horizontally.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_image_method_flip_y"></div>

`void` **flip_y** ( )<div id="class_image_method_flip_y"></div>

Flips the image vertically.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_image_method_generate_mipmaps"></div>

[Error](#enum_@globalscope_error) **generate_mipmaps** ( renormalize: [`bool`](class_bool.md) = false )<div id="class_image_method_generate_mipmaps"></div>

Generates mipmaps for the image. Mipmaps are precalculated lower-resolution copies of the image that are automatically used if the image needs to be scaled down when rendered. They help improve image quality and performance when rendering. This method returns an error if the image is compressed, in a custom format, or if the image's width/height is `0`. Enabling `renormalize` when generating mipmaps for normal map textures will make sure all resulting vector values are normalized.

It is possible to check if the image has mipmaps by calling [`has_mipmaps`](class_image.md#class_image_method_has_mipmaps) or [`get_mipmap_count`](class_image.md#class_image_method_get_mipmap_count). Calling [`generate_mipmaps`](class_image.md#class_image_method_generate_mipmaps) on an image that already has mipmaps will replace existing mipmaps in the image.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_image_method_get_data"></div>

[`PackedByteArray`](class_packedbytearray.md) **get_data** ( ) const[^const]<div id="class_image_method_get_data"></div>

Returns a copy of the image's raw data.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_image_method_get_data_size"></div>

[`int`](class_int.md) **get_data_size** ( ) const[^const]<div id="class_image_method_get_data_size"></div>

Returns size (in bytes) of the image's raw data.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_image_method_get_format"></div>

[Format](#enum_image_format) **get_format** ( ) const[^const]<div id="class_image_method_get_format"></div>

Returns the image's format. See [Format](#enum_image_format) constants.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_image_method_get_height"></div>

[`int`](class_int.md) **get_height** ( ) const[^const]<div id="class_image_method_get_height"></div>

Returns the image's height.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_image_method_get_mipmap_count"></div>

[`int`](class_int.md) **get_mipmap_count** ( ) const[^const]<div id="class_image_method_get_mipmap_count"></div>

Returns the number of mipmap levels or 0 if the image has no mipmaps. The largest main level image is not counted as a mipmap level by this method, so if you want to include it you can add 1 to this count.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_image_method_get_mipmap_offset"></div>

[`int`](class_int.md) **get_mipmap_offset** ( mipmap: [`int`](class_int.md) ) const[^const]<div id="class_image_method_get_mipmap_offset"></div>

Returns the offset where the image's mipmap with index `mipmap` is stored in the [`data`](class_image.md#class_image_property_data) dictionary.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_image_method_get_pixel"></div>

[`Color`](class_color.md) **get_pixel** ( x: [`int`](class_int.md), y: [`int`](class_int.md) ) const[^const]<div id="class_image_method_get_pixel"></div>

Returns the color of the pixel at `(x, y)`.

This is the same as [`get_pixelv`](class_image.md#class_image_method_get_pixelv), but with two integer arguments instead of a [`Vector2i`](class_vector2i.md) argument.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_image_method_get_pixelv"></div>

[`Color`](class_color.md) **get_pixelv** ( point: [`Vector2i`](class_vector2i.md) ) const[^const]<div id="class_image_method_get_pixelv"></div>

Returns the color of the pixel at `point`.

This is the same as [`get_pixel`](class_image.md#class_image_method_get_pixel), but with a [`Vector2i`](class_vector2i.md) argument instead of two integer arguments.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_image_method_get_region"></div>

[`Image`](class_image.md) **get_region** ( region: [`Rect2i`](class_rect2i.md) ) const[^const]<div id="class_image_method_get_region"></div>

Returns a new **Image** that is a copy of this **Image**'s area specified with `region`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_image_method_get_size"></div>

[`Vector2i`](class_vector2i.md) **get_size** ( ) const[^const]<div id="class_image_method_get_size"></div>

Returns the image's size (width and height).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_image_method_get_used_rect"></div>

[`Rect2i`](class_rect2i.md) **get_used_rect** ( ) const[^const]<div id="class_image_method_get_used_rect"></div>

Returns a [`Rect2i`](class_rect2i.md) enclosing the visible portion of the image, considering each pixel with a non-zero alpha channel as visible.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_image_method_get_width"></div>

[`int`](class_int.md) **get_width** ( ) const[^const]<div id="class_image_method_get_width"></div>

Returns the image's width.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_image_method_has_mipmaps"></div>

[`bool`](class_bool.md) **has_mipmaps** ( ) const[^const]<div id="class_image_method_has_mipmaps"></div>

Returns `true` if the image has generated mipmaps.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_image_method_is_compressed"></div>

[`bool`](class_bool.md) **is_compressed** ( ) const[^const]<div id="class_image_method_is_compressed"></div>

Returns `true` if the image is compressed.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_image_method_is_empty"></div>

[`bool`](class_bool.md) **is_empty** ( ) const[^const]<div id="class_image_method_is_empty"></div>

Returns `true` if the image has no data.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_image_method_is_invisible"></div>

[`bool`](class_bool.md) **is_invisible** ( ) const[^const]<div id="class_image_method_is_invisible"></div>

Returns `true` if all the image's pixels have an alpha value of 0. Returns `false` if any pixel has an alpha value higher than 0.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_image_method_linear_to_srgb"></div>

`void` **linear_to_srgb** ( )<div id="class_image_method_linear_to_srgb"></div>

Converts the entire image from the linear colorspace to the sRGB colorspace. Only works on images with [`FORMAT_RGB8`](class_image.md#class_image_constant_format_rgb8) or [`FORMAT_RGBA8`](class_image.md#class_image_constant_format_rgba8) formats.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_image_method_load"></div>

[Error](#enum_@globalscope_error) **load** ( path: [`String`](class_string.md) )<div id="class_image_method_load"></div>

Loads an image from file `path`. See [*Supported image formats*](../tutorials/assets_pipeline/importing_images.md#supported-image-formats) for a list of supported image formats and limitations.

 **Warning:** This method should only be used in the editor or in cases when you need to load external images at run-time, such as images located at the `user://` directory, and may not work in exported projects.

See also [`ImageTexture`](class_imagetexture.md) description for usage examples.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_image_method_load_bmp_from_buffer"></div>

[Error](#enum_@globalscope_error) **load_bmp_from_buffer** ( buffer: [`PackedByteArray`](class_packedbytearray.md) )<div id="class_image_method_load_bmp_from_buffer"></div>

Loads an image from the binary contents of a BMP file.

 **Note:** Godot's BMP module doesn't support 16-bit per pixel images. Only 1-bit, 4-bit, 8-bit, 24-bit, and 32-bit per pixel images are supported.

 **Note:** This method is only available in engine builds with the BMP module enabled. By default, the BMP module is enabled, but it can be disabled at build-time using the `module_bmp_enabled=no` SCons option.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_image_method_load_from_file"></div>

[`Image`](class_image.md) **load_from_file** ( path: [`String`](class_string.md) ) static[^static]<div id="class_image_method_load_from_file"></div>

Creates a new **Image** and loads data from the specified file.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_image_method_load_jpg_from_buffer"></div>

[Error](#enum_@globalscope_error) **load_jpg_from_buffer** ( buffer: [`PackedByteArray`](class_packedbytearray.md) )<div id="class_image_method_load_jpg_from_buffer"></div>

Loads an image from the binary contents of a JPEG file.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_image_method_load_ktx_from_buffer"></div>

[Error](#enum_@globalscope_error) **load_ktx_from_buffer** ( buffer: [`PackedByteArray`](class_packedbytearray.md) )<div id="class_image_method_load_ktx_from_buffer"></div>

Loads an image from the binary contents of a [*KTX*](https://github.com/KhronosGroup/KTX-Software) file. Unlike most image formats, KTX can store VRAM-compressed data and embed mipmaps.

 **Note:** Godot's libktx implementation only supports 2D images. Cubemaps, texture arrays, and de-padding are not supported.

 **Note:** This method is only available in engine builds with the KTX module enabled. By default, the KTX module is enabled, but it can be disabled at build-time using the `module_ktx_enabled=no` SCons option.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_image_method_load_png_from_buffer"></div>

[Error](#enum_@globalscope_error) **load_png_from_buffer** ( buffer: [`PackedByteArray`](class_packedbytearray.md) )<div id="class_image_method_load_png_from_buffer"></div>

Loads an image from the binary contents of a PNG file.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_image_method_load_svg_from_buffer"></div>

[Error](#enum_@globalscope_error) **load_svg_from_buffer** ( buffer: [`PackedByteArray`](class_packedbytearray.md), scale: [`float`](class_float.md) = 1.0 )<div id="class_image_method_load_svg_from_buffer"></div>

Loads an image from the UTF-8 binary contents of an **uncompressed** SVG file (**.svg**).

 **Note:** Beware when using compressed SVG files (like **.svgz**), they need to be `decompressed` before loading.

 **Note:** This method is only available in engine builds with the SVG module enabled. By default, the SVG module is enabled, but it can be disabled at build-time using the `module_svg_enabled=no` SCons option.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_image_method_load_svg_from_string"></div>

[Error](#enum_@globalscope_error) **load_svg_from_string** ( svg_str: [`String`](class_string.md), scale: [`float`](class_float.md) = 1.0 )<div id="class_image_method_load_svg_from_string"></div>

Loads an image from the string contents of an SVG file (**.svg**).

 **Note:** This method is only available in engine builds with the SVG module enabled. By default, the SVG module is enabled, but it can be disabled at build-time using the `module_svg_enabled=no` SCons option.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_image_method_load_tga_from_buffer"></div>

[Error](#enum_@globalscope_error) **load_tga_from_buffer** ( buffer: [`PackedByteArray`](class_packedbytearray.md) )<div id="class_image_method_load_tga_from_buffer"></div>

Loads an image from the binary contents of a TGA file.

 **Note:** This method is only available in engine builds with the TGA module enabled. By default, the TGA module is enabled, but it can be disabled at build-time using the `module_tga_enabled=no` SCons option.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_image_method_load_webp_from_buffer"></div>

[Error](#enum_@globalscope_error) **load_webp_from_buffer** ( buffer: [`PackedByteArray`](class_packedbytearray.md) )<div id="class_image_method_load_webp_from_buffer"></div>

Loads an image from the binary contents of a WebP file.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_image_method_normal_map_to_xy"></div>

`void` **normal_map_to_xy** ( )<div id="class_image_method_normal_map_to_xy"></div>

Converts the image's data to represent coordinates on a 3D plane. This is used when the image represents a normal map. A normal map can add lots of detail to a 3D surface without increasing the polygon count.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_image_method_premultiply_alpha"></div>

`void` **premultiply_alpha** ( )<div id="class_image_method_premultiply_alpha"></div>

Multiplies color values with alpha values. Resulting color values for a pixel are `(color * alpha)/256`. See also [`CanvasItemMaterial.blend_mode`](class_canvasitemmaterial.md#class_canvasitemmaterial_property_blend_mode).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_image_method_resize"></div>

`void` **resize** ( width: [`int`](class_int.md), height: [`int`](class_int.md), interpolation: [Interpolation](#enum_image_interpolation) = 1 )<div id="class_image_method_resize"></div>

Resizes the image to the given `width` and `height`. New pixels are calculated using the `interpolation` mode defined via [Interpolation](#enum_image_interpolation) constants.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_image_method_resize_to_po2"></div>

`void` **resize_to_po2** ( square: [`bool`](class_bool.md) = false, interpolation: [Interpolation](#enum_image_interpolation) = 1 )<div id="class_image_method_resize_to_po2"></div>

Resizes the image to the nearest power of 2 for the width and height. If `square` is `true` then set width and height to be the same. New pixels are calculated using the `interpolation` mode defined via [Interpolation](#enum_image_interpolation) constants.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_image_method_rgbe_to_srgb"></div>

[`Image`](class_image.md) **rgbe_to_srgb** ( )<div id="class_image_method_rgbe_to_srgb"></div>

Converts a standard RGBE (Red Green Blue Exponent) image to an sRGB image.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_image_method_rotate_90"></div>

`void` **rotate_90** ( direction: [ClockDirection](#enum_@globalscope_clockdirection) )<div id="class_image_method_rotate_90"></div>

Rotates the image in the specified `direction` by `90` degrees. The width and height of the image must be greater than `1`. If the width and height are not equal, the image will be resized.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_image_method_rotate_180"></div>

`void` **rotate_180** ( )<div id="class_image_method_rotate_180"></div>

Rotates the image by `180` degrees. The width and height of the image must be greater than `1`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_image_method_save_exr"></div>

[Error](#enum_@globalscope_error) **save_exr** ( path: [`String`](class_string.md), grayscale: [`bool`](class_bool.md) = false ) const[^const]<div id="class_image_method_save_exr"></div>

Saves the image as an EXR file to `path`. If `grayscale` is `true` and the image has only one channel, it will be saved explicitly as monochrome rather than one red channel. This function will return [`@GlobalScope.ERR_UNAVAILABLE`](class_@globalscope.md#class_@globalscope_constant_err_unavailable) if Godot was compiled without the TinyEXR module.

 **Note:** The TinyEXR module is disabled in non-editor builds, which means [`save_exr`](class_image.md#class_image_method_save_exr) will return [`@GlobalScope.ERR_UNAVAILABLE`](class_@globalscope.md#class_@globalscope_constant_err_unavailable) when it is called from an exported project.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_image_method_save_exr_to_buffer"></div>

[`PackedByteArray`](class_packedbytearray.md) **save_exr_to_buffer** ( grayscale: [`bool`](class_bool.md) = false ) const[^const]<div id="class_image_method_save_exr_to_buffer"></div>

Saves the image as an EXR file to a byte array. If `grayscale` is `true` and the image has only one channel, it will be saved explicitly as monochrome rather than one red channel. This function will return an empty byte array if Godot was compiled without the TinyEXR module.

 **Note:** The TinyEXR module is disabled in non-editor builds, which means [`save_exr`](class_image.md#class_image_method_save_exr) will return an empty byte array when it is called from an exported project.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_image_method_save_jpg"></div>

[Error](#enum_@globalscope_error) **save_jpg** ( path: [`String`](class_string.md), quality: [`float`](class_float.md) = 0.75 ) const[^const]<div id="class_image_method_save_jpg"></div>

Saves the image as a JPEG file to `path` with the specified `quality` between `0.01` and `1.0` (inclusive). Higher `quality` values result in better-looking output at the cost of larger file sizes. Recommended `quality` values are between `0.75` and `0.90`. Even at quality `1.00`, JPEG compression remains lossy.

 **Note:** JPEG does not save an alpha channel. If the **Image** contains an alpha channel, the image will still be saved, but the resulting JPEG file won't contain the alpha channel.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_image_method_save_jpg_to_buffer"></div>

[`PackedByteArray`](class_packedbytearray.md) **save_jpg_to_buffer** ( quality: [`float`](class_float.md) = 0.75 ) const[^const]<div id="class_image_method_save_jpg_to_buffer"></div>

Saves the image as a JPEG file to a byte array with the specified `quality` between `0.01` and `1.0` (inclusive). Higher `quality` values result in better-looking output at the cost of larger byte array sizes (and therefore memory usage). Recommended `quality` values are between `0.75` and `0.90`. Even at quality `1.00`, JPEG compression remains lossy.

 **Note:** JPEG does not save an alpha channel. If the **Image** contains an alpha channel, the image will still be saved, but the resulting byte array won't contain the alpha channel.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_image_method_save_png"></div>

[Error](#enum_@globalscope_error) **save_png** ( path: [`String`](class_string.md) ) const[^const]<div id="class_image_method_save_png"></div>

Saves the image as a PNG file to the file at `path`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_image_method_save_png_to_buffer"></div>

[`PackedByteArray`](class_packedbytearray.md) **save_png_to_buffer** ( ) const[^const]<div id="class_image_method_save_png_to_buffer"></div>

Saves the image as a PNG file to a byte array.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_image_method_save_webp"></div>

[Error](#enum_@globalscope_error) **save_webp** ( path: [`String`](class_string.md), lossy: [`bool`](class_bool.md) = false, quality: [`float`](class_float.md) = 0.75 ) const[^const]<div id="class_image_method_save_webp"></div>

Saves the image as a WebP (Web Picture) file to the file at `path`. By default it will save lossless. If `lossy` is true, the image will be saved lossy, using the `quality` setting between 0.0 and 1.0 (inclusive). Lossless WebP offers more efficient compression than PNG.

 **Note:** The WebP format is limited to a size of 16383×16383 pixels, while PNG can save larger images.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_image_method_save_webp_to_buffer"></div>

[`PackedByteArray`](class_packedbytearray.md) **save_webp_to_buffer** ( lossy: [`bool`](class_bool.md) = false, quality: [`float`](class_float.md) = 0.75 ) const[^const]<div id="class_image_method_save_webp_to_buffer"></div>

Saves the image as a WebP (Web Picture) file to a byte array. By default it will save lossless. If `lossy` is true, the image will be saved lossy, using the `quality` setting between 0.0 and 1.0 (inclusive). Lossless WebP offers more efficient compression than PNG.

 **Note:** The WebP format is limited to a size of 16383×16383 pixels, while PNG can save larger images.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_image_method_set_data"></div>

`void` **set_data** ( width: [`int`](class_int.md), height: [`int`](class_int.md), use_mipmaps: [`bool`](class_bool.md), format: [Format](#enum_image_format), data: [`PackedByteArray`](class_packedbytearray.md) )<div id="class_image_method_set_data"></div>

Overwrites data of an existing **Image**. Non-static equivalent of [`create_from_data`](class_image.md#class_image_method_create_from_data).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_image_method_set_pixel"></div>

`void` **set_pixel** ( x: [`int`](class_int.md), y: [`int`](class_int.md), color: [`Color`](class_color.md) )<div id="class_image_method_set_pixel"></div>

Sets the [`Color`](class_color.md) of the pixel at `(x, y)` to `color`.



```gdscript

    var img_width = 10
    var img_height = 5
    var img = Image.create(img_width, img_height, false, Image.FORMAT_RGBA8)
    
    img.set_pixel(1, 2, Color.RED) # Sets the color at (1, 2) to red.
```

```csharp

    int imgWidth = 10;
    int imgHeight = 5;
    var img = Image.Create(imgWidth, imgHeight, false, Image.Format.Rgba8);
    
    img.SetPixel(1, 2, Colors.Red); // Sets the color at (1, 2) to red.
```



This is the same as [`set_pixelv`](class_image.md#class_image_method_set_pixelv), but with a two integer arguments instead of a [`Vector2i`](class_vector2i.md) argument.





<!-- rst-class:: classref-item-separator -->

---

<div id="_class_image_method_set_pixelv"></div>

`void` **set_pixelv** ( point: [`Vector2i`](class_vector2i.md), color: [`Color`](class_color.md) )<div id="class_image_method_set_pixelv"></div>

Sets the [`Color`](class_color.md) of the pixel at `point` to `color`.



```gdscript

    var img_width = 10
    var img_height = 5
    var img = Image.create(img_width, img_height, false, Image.FORMAT_RGBA8)
    
    img.set_pixelv(Vector2i(1, 2), Color.RED) # Sets the color at (1, 2) to red.
```

```csharp

    int imgWidth = 10;
    int imgHeight = 5;
    var img = Image.Create(imgWidth, imgHeight, false, Image.Format.Rgba8);
    
    img.SetPixelv(new Vector2I(1, 2), Colors.Red); // Sets the color at (1, 2) to red.
```



This is the same as [`set_pixel`](class_image.md#class_image_method_set_pixel), but with a [`Vector2i`](class_vector2i.md) argument instead of two integer arguments.





<!-- rst-class:: classref-item-separator -->

---

<div id="_class_image_method_shrink_x2"></div>

`void` **shrink_x2** ( )<div id="class_image_method_shrink_x2"></div>

Shrinks the image by a factor of 2 on each axis (this divides the pixel count by 4).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_image_method_srgb_to_linear"></div>

`void` **srgb_to_linear** ( )<div id="class_image_method_srgb_to_linear"></div>

Converts the raw data from the sRGB colorspace to a linear scale. Only works on images with [`FORMAT_RGB8`](class_image.md#class_image_constant_format_rgb8) or [`FORMAT_RGBA8`](class_image.md#class_image_constant_format_rgba8) formats.

[^virtual]: 本方法通常需要用户覆盖才能生效。
[^const]: 本方法无副作用，不会修改该实例的任何成员变量。
[^vararg]: 本方法除了能接受在此处描述的参数外，还能够继续接受任意数量的参数。
[^constructor]: 本方法用于构造某个类型。
[^static]: 调用本方法无需实例，可直接使用类名进行调用。
[^operator]: 本方法描述的是使用本类型作为左操作数的有效运算符。
[^bitfield]: 这个值是由下列位标志构成位掩码的整数。
[^void]: 无返回值。
