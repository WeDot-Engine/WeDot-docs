<!-- ⚠ 请勿编辑本文件 ⚠ -->
<!-- 本文档使用脚本从 WeDot 引擎源码仓库生成。 -->
<!-- 生成脚本：https://github.com/WeDot-Engine/WeDot/tree/4.3/doc/tools/make_md.py； -->
<!-- 原文件：https://github.com/WeDot-Engine/WeDot/tree/4.3/doc/classes/Cubemap.xml。 -->

<div id="_class_cubemap"></div>

# Cubemap

**继承：** [`ImageTextureLayered`](class_imagetexturelayered.md) **<** [`TextureLayered`](class_texturelayered.md) **<** [`Texture`](class_texture.md) **<** [`Resource`](class_resource.md) **<** [`RefCounted`](class_refcounted.md) **<** [`Object`](class_object.md)

Six square textures representing the faces of a cube. Commonly used as a skybox.

## 描述

A cubemap is made of 6 textures organized in layers. They are typically used for faking reflections in 3D rendering (see [`ReflectionProbe`](class_reflectionprobe.md)). It can be used to make an object look as if it's reflecting its surroundings. This usually delivers much better performance than other reflection methods.

This resource is typically used as a uniform in custom shaders. Few core Godot methods make use of **Cubemap** resources.

To create such a texture file yourself, reimport your image files using the Godot Editor import presets.

 **Note:** Godot doesn't support using cubemaps in a [`PanoramaSkyMaterial`](class_panoramaskymaterial.md). You can use [*this tool*](https://danilw.github.io/GLSL-howto/cubemap_to_panorama_js/cubemap_to_panorama.html) to convert a cubemap to an equirectangular sky map.

## 方法

| [`Resource`](class_resource.md) | [`create_placeholder`](#class_cubemap_method_create_placeholder) ( ) const[^const] |

<!-- rst-class:: classref-section-separator -->

---

## 方法说明

<div id="_class_cubemap_method_create_placeholder"></div>

[`Resource`](class_resource.md) **create_placeholder** ( ) const[^const]<div id="class_cubemap_method_create_placeholder"></div>

Creates a placeholder version of this resource ([`PlaceholderCubemap`](class_placeholdercubemap.md)).

[^virtual]: 本方法通常需要用户覆盖才能生效。
[^const]: 本方法无副作用，不会修改该实例的任何成员变量。
[^vararg]: 本方法除了能接受在此处描述的参数外，还能够继续接受任意数量的参数。
[^constructor]: 本方法用于构造某个类型。
[^static]: 调用本方法无需实例，可直接使用类名进行调用。
[^operator]: 本方法描述的是使用本类型作为左操作数的有效运算符。
[^bitfield]: 这个值是由下列位标志构成位掩码的整数。
[^void]: 无返回值。
