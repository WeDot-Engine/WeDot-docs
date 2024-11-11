<!-- ⚠ 请勿编辑本文件 ⚠ -->
<!-- 本文档使用脚本从 WeDot 引擎源码仓库生成。 -->
<!-- 生成脚本：https://github.com/WeDot-Engine/WeDot/tree/master/doc/tools/make_md.py； -->
<!-- 原文件：https://github.com/WeDot-Engine/WeDot/tree/master/doc/classes/ImageTexture3D.xml。 -->

<div id="_class_imagetexture3d"></div>

# ImageTexture3D

**继承：** [`Texture3D`](class_texture3d.md) **<** [`Texture`](class_texture.md) **<** [`Resource`](class_resource.md) **<** [`RefCounted`](class_refcounted.md) **<** [`Object`](class_object.md)

Texture with 3 dimensions.

## 描述

**ImageTexture3D** is a 3-dimensional [`ImageTexture`](class_imagetexture.md) that has a width, height, and depth. See also [`ImageTextureLayered`](class_imagetexturelayered.md).

3D textures are typically used to store density maps for [`FogMaterial`](class_fogmaterial.md), color correction LUTs for [`Environment`](class_environment.md), vector fields for [`GPUParticlesAttractorVectorField3D`](class_gpuparticlesattractorvectorfield3d.md) and collision maps for [`GPUParticlesCollisionSDF3D`](class_gpuparticlescollisionsdf3d.md). 3D textures can also be used in custom shaders.

## 方法

|||
|:-:|:--|
| [Error](#enum_@globalscope_error) | [`create`](class_imagetexture3d.md#class_imagetexture3d_method_create) ( format: [Format](#enum_image_format), width: [`int`](class_int.md), height: [`int`](class_int.md), depth: [`int`](class_int.md), use_mipmaps: [`bool`](class_bool.md), data: [Array](class_array.md) [`Image`](class_image.md) ) |
| `void`                            | [`update`](class_imagetexture3d.md#class_imagetexture3d_method_update) ( data: [Array](class_array.md) [`Image`](class_image.md) )                                                                                                                                                                        |

<!-- rst-class:: classref-section-separator -->

---

## 方法说明

<div id="_class_imagetexture3d_method_create"></div>

[Error](#enum_@globalscope_error) **create** ( format: [Format](#enum_image_format), width: [`int`](class_int.md), height: [`int`](class_int.md), depth: [`int`](class_int.md), use_mipmaps: [`bool`](class_bool.md), data: [Array](class_array.md) [`Image`](class_image.md) )<div id="class_imagetexture3d_method_create"></div>

Creates the **ImageTexture3D** with specified `width`, `height`, and `depth`. See [Format](#enum_image_format) for `format` options. If `use_mipmaps` is `true`, then generate mipmaps for the **ImageTexture3D**.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_imagetexture3d_method_update"></div>

`void` **update** ( data: [Array](class_array.md) [`Image`](class_image.md) )<div id="class_imagetexture3d_method_update"></div>

Replaces the texture's existing data with the layers specified in `data`. The size of `data` must match the parameters that were used for [`create`](class_imagetexture3d.md#class_imagetexture3d_method_create). In other words, the texture cannot be resized or have its format changed by calling [`update`](class_imagetexture3d.md#class_imagetexture3d_method_update).

[^virtual]: 本方法通常需要用户覆盖才能生效。
[^const]: 本方法无副作用，不会修改该实例的任何成员变量。
[^vararg]: 本方法除了能接受在此处描述的参数外，还能够继续接受任意数量的参数。
[^constructor]: 本方法用于构造某个类型。
[^static]: 调用本方法无需实例，可直接使用类名进行调用。
[^operator]: 本方法描述的是使用本类型作为左操作数的有效运算符。
[^bitfield]: 这个值是由下列位标志构成位掩码的整数。
[^void]: 无返回值。
