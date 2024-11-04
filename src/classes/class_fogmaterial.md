<!-- ⚠ 请勿编辑本文件 ⚠ -->
<!-- 本文档使用脚本从 WeDot 引擎源码仓库生成。 -->
<!-- 生成脚本：https://github.com/WeDot-Engine/WeDot/tree/4.3/doc/tools/make_md.py； -->
<!-- 原文件：https://github.com/WeDot-Engine/WeDot/tree/4.3/doc/classes/FogMaterial.xml。 -->

<div id="_class_fogmaterial"></div>

# FogMaterial

**继承：** [`Material`](class_material.md) **<** [`Resource`](class_resource.md) **<** [`RefCounted`](class_refcounted.md) **<** [`Object`](class_object.md)

A material that controls how volumetric fog is rendered, to be assigned to a [`FogVolume`](class_fogvolume.md).

## 描述

A [`Material`](class_material.md) resource that can be used by [`FogVolume`](class_fogvolume.md) s to draw volumetric effects.

If you need more advanced effects, use a custom [*fog shader*](../tutorials/shaders/shader_reference/fog_shader).

## 属性

| [`Color`](class_color.md)         | [`albedo`](#class_fogmaterial_property_albedo)                   | ``Color(1, 1, 1, 1)`` |
| [`float`](class_float.md)         | [`density`](#class_fogmaterial_property_density)                 | ``1.0``               |
| [`Texture3D`](class_texture3d.md) | [`density_texture`](#class_fogmaterial_property_density_texture) |                       |
| [`float`](class_float.md)         | [`edge_fade`](#class_fogmaterial_property_edge_fade)             | ``0.1``               |
| [`Color`](class_color.md)         | [`emission`](#class_fogmaterial_property_emission)               | ``Color(0, 0, 0, 1)`` |
| [`float`](class_float.md)         | [`height_falloff`](#class_fogmaterial_property_height_falloff)   | ``0.0``               |

<!-- rst-class:: classref-section-separator -->

---

## 属性说明

<div id="_class_fogmaterial_property_albedo"></div>

[`Color`](class_color.md) **albedo** = ``Color(1, 1, 1, 1)`` <div id="class_fogmaterial_property_albedo"></div>

- `void` **set_albedo** ( value: [`Color`](class_color.md) )
- [`Color`](class_color.md) **get_albedo** ( )

The single-scattering [`Color`](class_color.md) of the [`FogVolume`](class_fogvolume.md). Internally, [`albedo`](#class_fogmaterial_property_albedo) is converted into single-scattering, which is additively blended with other [`FogVolume`](class_fogvolume.md) s and the [`Environment.volumetric_fog_albedo`](#class_environment_property_volumetric_fog_albedo).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_fogmaterial_property_density"></div>

[`float`](class_float.md) **density** = ``1.0`` <div id="class_fogmaterial_property_density"></div>

- `void` **set_density** ( value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_density** ( )

The density of the [`FogVolume`](class_fogvolume.md). Denser objects are more opaque, but may suffer from under-sampling artifacts that look like stripes. Negative values can be used to subtract fog from other [`FogVolume`](class_fogvolume.md) s or global volumetric fog.

 **Note:** Due to limited precision, [`density`](#class_fogmaterial_property_density) values between `-0.001` and `0.001` (exclusive) act like `0.0`. This does not apply to [`Environment.volumetric_fog_density`](#class_environment_property_volumetric_fog_density).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_fogmaterial_property_density_texture"></div>

[`Texture3D`](class_texture3d.md) **density_texture** <div id="class_fogmaterial_property_density_texture"></div>

- `void` **set_density_texture** ( value: [`Texture3D`](class_texture3d.md) )
- [`Texture3D`](class_texture3d.md) **get_density_texture** ( )

The 3D texture that is used to scale the [`density`](#class_fogmaterial_property_density) of the [`FogVolume`](class_fogvolume.md). This can be used to vary fog density within the [`FogVolume`](class_fogvolume.md) with any kind of static pattern. For animated effects, consider using a custom [*fog shader*](../tutorials/shaders/shader_reference/fog_shader).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_fogmaterial_property_edge_fade"></div>

[`float`](class_float.md) **edge_fade** = ``0.1`` <div id="class_fogmaterial_property_edge_fade"></div>

- `void` **set_edge_fade** ( value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_edge_fade** ( )

The hardness of the edges of the [`FogVolume`](class_fogvolume.md). A higher value will result in softer edges, while a lower value will result in harder edges.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_fogmaterial_property_emission"></div>

[`Color`](class_color.md) **emission** = ``Color(0, 0, 0, 1)`` <div id="class_fogmaterial_property_emission"></div>

- `void` **set_emission** ( value: [`Color`](class_color.md) )
- [`Color`](class_color.md) **get_emission** ( )

The [`Color`](class_color.md) of the light emitted by the [`FogVolume`](class_fogvolume.md). Emitted light will not cast light or shadows on other objects, but can be useful for modulating the [`Color`](class_color.md) of the [`FogVolume`](class_fogvolume.md) independently from light sources.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_fogmaterial_property_height_falloff"></div>

[`float`](class_float.md) **height_falloff** = ``0.0`` <div id="class_fogmaterial_property_height_falloff"></div>

- `void` **set_height_falloff** ( value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_height_falloff** ( )

The rate by which the height-based fog decreases in density as height increases in world space. A high falloff will result in a sharp transition, while a low falloff will result in a smoother transition. A value of `0.0` results in uniform-density fog. The height threshold is determined by the height of the associated [`FogVolume`](class_fogvolume.md).

[^virtual]: 本方法通常需要用户覆盖才能生效。
[^const]: 本方法无副作用，不会修改该实例的任何成员变量。
[^vararg]: 本方法除了能接受在此处描述的参数外，还能够继续接受任意数量的参数。
[^constructor]: 本方法用于构造某个类型。
[^static]: 调用本方法无需实例，可直接使用类名进行调用。
[^operator]: 本方法描述的是使用本类型作为左操作数的有效运算符。
[^bitfield]: 这个值是由下列位标志构成位掩码的整数。
[^void]: 无返回值。
