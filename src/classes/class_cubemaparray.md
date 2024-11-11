<!-- ⚠ 请勿编辑本文件 ⚠ -->
<!-- 本文档使用脚本从 WeDot 引擎源码仓库生成。 -->
<!-- 生成脚本：https://github.com/WeDot-Engine/WeDot/tree/master/doc/tools/make_md.py； -->
<!-- 原文件：https://github.com/WeDot-Engine/WeDot/tree/master/doc/classes/CubemapArray.xml。 -->

<div id="_class_cubemaparray"></div>

# CubemapArray

**继承：** [`ImageTextureLayered`](class_imagetexturelayered.md) **<** [`TextureLayered`](class_texturelayered.md) **<** [`Texture`](class_texture.md) **<** [`Resource`](class_resource.md) **<** [`RefCounted`](class_refcounted.md) **<** [`Object`](class_object.md)

An array of [`Cubemap`](class_cubemap.md) s, stored together and with a single reference.

## 描述

**CubemapArray** s are made of an array of [`Cubemap`](class_cubemap.md) s. Like [`Cubemap`](class_cubemap.md) s, they are made of multiple textures, the amount of which must be divisible by 6 (one for each face of the cube).

The primary benefit of **CubemapArray** s is that they can be accessed in shader code using a single texture reference. In other words, you can pass multiple [`Cubemap`](class_cubemap.md) s into a shader using a single **CubemapArray**. [`Cubemap`](class_cubemap.md) s are allocated in adjacent cache regions on the GPU, which makes **CubemapArray** s the most efficient way to store multiple [`Cubemap`](class_cubemap.md) s.

 **Note:** Godot uses **CubemapArray** s internally for many effects, including the [`Sky`](class_sky.md) if you set [`ProjectSettings.rendering/reflections/sky_reflections/texture_array_reflections`](class_projectsettings.md#class_projectsettings_property_rendering/reflections/sky_reflections/texture_array_reflections) to `true`. To create such a texture file yourself, reimport your image files using the import presets of the File System dock.

 **Note:** **CubemapArray** is not supported in the OpenGL 3 rendering backend.

## 方法

|||
|:-:|:--|
| [`Resource`](class_resource.md) | [`create_placeholder`](class_cubemaparray.md#class_cubemaparray_method_create_placeholder) ( ) const[^const] |

<!-- rst-class:: classref-section-separator -->

---

## 方法说明

<div id="_class_cubemaparray_method_create_placeholder"></div>

[`Resource`](class_resource.md) **create_placeholder** ( ) const[^const]<div id="class_cubemaparray_method_create_placeholder"></div>

Creates a placeholder version of this resource ([`PlaceholderCubemapArray`](class_placeholdercubemaparray.md)).

[^virtual]: 本方法通常需要用户覆盖才能生效。
[^const]: 本方法无副作用，不会修改该实例的任何成员变量。
[^vararg]: 本方法除了能接受在此处描述的参数外，还能够继续接受任意数量的参数。
[^constructor]: 本方法用于构造某个类型。
[^static]: 调用本方法无需实例，可直接使用类名进行调用。
[^operator]: 本方法描述的是使用本类型作为左操作数的有效运算符。
[^bitfield]: 这个值是由下列位标志构成位掩码的整数。
[^void]: 无返回值。
