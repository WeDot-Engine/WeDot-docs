<!-- ⚠ 请勿编辑本文件 ⚠ -->
<!-- 本文档使用脚本从 WeDot 引擎源码仓库生成。 -->
<!-- 生成脚本：https://github.com/WeDot-Engine/WeDot/tree/master/doc/tools/make_md.py； -->
<!-- 原文件：https://github.com/WeDot-Engine/WeDot/tree/master/doc/classes/ResourceImporterLayeredTexture.xml。 -->

<div id="_class_resourceimporterlayeredtexture"></div>

# ResourceImporterLayeredTexture

**继承：** [`ResourceImporter`](class_resourceimporter.md) **<** [`RefCounted`](class_refcounted.md) **<** [`Object`](class_object.md)

Imports a 3-dimensional texture ([`Texture3D`](class_texture3d.md)), a [`Texture2DArray`](class_texture2darray.md), a [`Cubemap`](class_cubemap.md) or a [`CubemapArray`](class_cubemaparray.md).

## 描述

This imports a 3-dimensional texture, which can then be used in custom shaders, as a [`FogMaterial`](class_fogmaterial.md) density map or as a [`GPUParticlesAttractorVectorField3D`](class_gpuparticlesattractorvectorfield3d.md). See also [`ResourceImporterTexture`](class_resourceimportertexture.md) and [`ResourceImporterTextureAtlas`](class_resourceimportertextureatlas.md).

## 属性

|||
|:-:|:--|
| [`int`](class_int.md)     | [`compress/channel_pack`](class_resourceimporterlayeredtexture.md#class_resourceimporterlayeredtexture_property_compress/channel_pack)       | ``0``     |
| [`int`](class_int.md)     | [`compress/hdr_compression`](class_resourceimporterlayeredtexture.md#class_resourceimporterlayeredtexture_property_compress/hdr_compression) | ``1``     |
| [`bool`](class_bool.md)   | [`compress/high_quality`](class_resourceimporterlayeredtexture.md#class_resourceimporterlayeredtexture_property_compress/high_quality)       | ``false`` |
| [`float`](class_float.md) | [`compress/lossy_quality`](class_resourceimporterlayeredtexture.md#class_resourceimporterlayeredtexture_property_compress/lossy_quality)     | ``0.7``   |
| [`int`](class_int.md)     | [`compress/mode`](class_resourceimporterlayeredtexture.md#class_resourceimporterlayeredtexture_property_compress/mode)                       | ``1``     |
| [`bool`](class_bool.md)   | [`mipmaps/generate`](class_resourceimporterlayeredtexture.md#class_resourceimporterlayeredtexture_property_mipmaps/generate)                 | ``true``  |
| [`int`](class_int.md)     | [`mipmaps/limit`](class_resourceimporterlayeredtexture.md#class_resourceimporterlayeredtexture_property_mipmaps/limit)                       | ``-1``    |
| [`int`](class_int.md)     | [`slices/arrangement`](class_resourceimporterlayeredtexture.md#class_resourceimporterlayeredtexture_property_slices/arrangement)             | ``1``     |

<!-- rst-class:: classref-section-separator -->

---

## 属性说明

<div id="_class_resourceimporterlayeredtexture_property_compress/channel_pack"></div>

[`int`](class_int.md) **compress/channel_pack** = ``0`` <div id="class_resourceimporterlayeredtexture_property_compress/channel_pack"></div>

Controls how color channels should be used in the imported texture.

 **sRGB Friendly:**, prevents the RG color format from being used, as it does not support sRGB color.

 **Optimized:**, allows the RG color format to be used if the texture does not use the blue channel. This reduces memory usage if the texture's blue channel can be discarded (all pixels must have a blue value of `0`).

 **Normal Map (RG Channels):** This forces all layers from the texture to be imported with the RG color format to reduce memory usage, with only the red and green channels preserved. This only has an effect on textures with the VRAM Compressed or Basis Universal compression modes. This mode is only available in layered textures ([`Cubemap`](class_cubemap.md), [`CubemapArray`](class_cubemaparray.md), [`Texture2DArray`](class_texture2darray.md) and [`Texture3D`](class_texture3d.md)).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_resourceimporterlayeredtexture_property_compress/hdr_compression"></div>

[`int`](class_int.md) **compress/hdr_compression** = ``1`` <div id="class_resourceimporterlayeredtexture_property_compress/hdr_compression"></div>

Controls how VRAM compression should be performed for HDR images.

 **Disabled:** Never use VRAM compression for HDR textures, regardless of whether they're opaque or transparent. Instead, the texture is converted to RGBE9995 (9-bits per channel + 5-bit exponent = 32 bits per pixel) to reduce memory usage compared to a half-float or single-precision float image format.

 **Opaque Only:** Only uses VRAM compression for opaque HDR textures. This is due to a limitation of HDR formats, as there is no VRAM-compressed HDR format that supports transparency at the same time.

 **Always:** Force VRAM compression even for HDR textures with an alpha channel. To perform this, the alpha channel is discarded on import.

 **Note:** Only effective on Radiance HDR (`.hdr`) and OpenEXR (`.exr`) images.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_resourceimporterlayeredtexture_property_compress/high_quality"></div>

[`bool`](class_bool.md) **compress/high_quality** = ``false`` <div id="class_resourceimporterlayeredtexture_property_compress/high_quality"></div>

If `true`, uses BPTC compression on desktop platforms and ASTC compression on mobile platforms. When using BPTC, BC7 is used for SDR textures and BC6H is used for HDR textures.

If `false`, uses the faster but lower-quality S3TC compression on desktop platforms and ETC2 on mobile/web platforms. When using S3TC, DXT1 (BC1) is used for opaque textures and DXT5 (BC3) is used for transparent or normal map (RGTC) textures.

BPTC and ASTC support VRAM compression for HDR textures, but S3TC and ETC2 do not (see [`compress/hdr_compression`](class_resourceimporterlayeredtexture.md#class_resourceimporterlayeredtexture_property_compress/hdr_compression)).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_resourceimporterlayeredtexture_property_compress/lossy_quality"></div>

[`float`](class_float.md) **compress/lossy_quality** = ``0.7`` <div id="class_resourceimporterlayeredtexture_property_compress/lossy_quality"></div>

The quality to use when using the **Lossy** compression mode. Higher values result in better quality, at the cost of larger file sizes. Lossy quality does not affect memory usage of the imported texture, only its file size on disk.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_resourceimporterlayeredtexture_property_compress/mode"></div>

[`int`](class_int.md) **compress/mode** = ``1`` <div id="class_resourceimporterlayeredtexture_property_compress/mode"></div>

The compression mode to use. Each compression mode provides a different tradeoff:

 **Lossless**: Original quality, high memory usage, high size on disk, fast import.

 **Lossy:** Reduced quality, high memory usage, low size on disk, fast import.

 **VRAM Compressed:** Reduced quality, low memory usage, low size on disk, slowest import. Only use for textures in 3D scenes, not for 2D elements.

 **VRAM Uncompressed:** Original quality, high memory usage, highest size on disk, fastest import.

 **Basis Universal:** Reduced quality, low memory usage, lowest size on disk, slow import. Only use for textures in 3D scenes, not for 2D elements.

See [*Compress mode*](../tutorials/assets_pipeline/importing_images.md#compress-mode) in the manual for more details.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_resourceimporterlayeredtexture_property_mipmaps/generate"></div>

[`bool`](class_bool.md) **mipmaps/generate** = ``true`` <div id="class_resourceimporterlayeredtexture_property_mipmaps/generate"></div>

If `true`, smaller versions of the texture are generated on import. For example, a 64×64 texture will generate 6 mipmaps (32×32, 16×16, 8×8, 4×4, 2×2, 1×1). This has several benefits:

- Textures will not become grainy in the distance (in 3D), or if scaled down due to [`Camera2D`](class_camera2d.md) zoom or [`CanvasItem`](class_canvasitem.md) scale (in 2D).

- Performance will improve if the texture is displayed in the distance, since sampling smaller versions of the original texture is faster and requires less memory bandwidth.

The downside of mipmaps is that they increase memory usage by roughly 33% (for [`Texture2DArray`](class_texture2darray.md), [`Cubemap`](class_cubemap.md) and [`CubemapArray`](class_cubemaparray.md)) or 14% (for [`Texture3D`](class_texture3d.md)).

It's recommended to enable mipmaps in 3D. However, in 2D, this should only be enabled if your project visibly benefits from having mipmaps enabled. If the camera never zooms out significantly, there won't be a benefit to enabling mipmaps but memory usage will increase.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_resourceimporterlayeredtexture_property_mipmaps/limit"></div>

[`int`](class_int.md) **mipmaps/limit** = ``-1`` <div id="class_resourceimporterlayeredtexture_property_mipmaps/limit"></div>

Unimplemented. This currently has no effect when changed.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_resourceimporterlayeredtexture_property_slices/arrangement"></div>

[`int`](class_int.md) **slices/arrangement** = ``1`` <div id="class_resourceimporterlayeredtexture_property_slices/arrangement"></div>

Controls how the cubemap's texture is internally laid out. When using high-resolution cubemaps, **2×3** and **3×2** are less prone to exceeding hardware texture size limits compared to **1×6** and **6×1**.

[^virtual]: 本方法通常需要用户覆盖才能生效。
[^const]: 本方法无副作用，不会修改该实例的任何成员变量。
[^vararg]: 本方法除了能接受在此处描述的参数外，还能够继续接受任意数量的参数。
[^constructor]: 本方法用于构造某个类型。
[^static]: 调用本方法无需实例，可直接使用类名进行调用。
[^operator]: 本方法描述的是使用本类型作为左操作数的有效运算符。
[^bitfield]: 这个值是由下列位标志构成位掩码的整数。
[^void]: 无返回值。
