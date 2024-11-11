<!-- ⚠ 请勿编辑本文件 ⚠ -->
<!-- 本文档使用脚本从 WeDot 引擎源码仓库生成。 -->
<!-- 生成脚本：https://github.com/WeDot-Engine/WeDot/tree/master/doc/tools/make_md.py； -->
<!-- 原文件：https://github.com/WeDot-Engine/WeDot/tree/master/doc/classes/OmniLight3D.xml。 -->

<div id="_class_omnilight3d"></div>

# OmniLight3D

**继承：** [`Light3D`](class_light3d.md) **<** [`VisualInstance3D`](class_visualinstance3d.md) **<** [`Node3D`](class_node3d.md) **<** [`Node`](class_node.md) **<** [`Object`](class_object.md)

Omnidirectional light, such as a light bulb or a candle.

## 描述

An Omnidirectional light is a type of [`Light3D`](class_light3d.md) that emits light in all directions. The light is attenuated by distance and this attenuation can be configured by changing its energy, radius, and attenuation parameters.

 **Note:** When using the Mobile rendering method, only 8 omni lights can be displayed on each mesh resource. Attempting to display more than 8 omni lights on a single mesh resource will result in omni lights flickering in and out as the camera moves. When using the Compatibility rendering method, only 8 omni lights can be displayed on each mesh resource by default, but this can be increased by adjusting [`ProjectSettings.rendering/limits/opengl/max_lights_per_object`](class_projectsettings.md#class_projectsettings_property_rendering/limits/opengl/max_lights_per_object).

 **Note:** When using the Mobile or Compatibility rendering methods, omni lights will only correctly affect meshes whose visibility AABB intersects with the light's AABB. If using a shader to deform the mesh in a way that makes it go outside its AABB, [`GeometryInstance3D.extra_cull_margin`](class_geometryinstance3d.md#class_geometryinstance3d_property_extra_cull_margin) must be increased on the mesh. Otherwise, the light may not be visible on the mesh.

## 属性

|||
|:-:|:--|
| [`float`](class_float.md)                  | [`omni_attenuation`](class_omnilight3d.md#class_omnilight3d_property_omni_attenuation) | ``1.0``                                                                                     |
| [`float`](class_float.md)                  | [`omni_range`](class_omnilight3d.md#class_omnilight3d_property_omni_range)             | ``5.0``                                                                                     |
| [ShadowMode](#enum_omnilight3d_shadowmode) | [`omni_shadow_mode`](class_omnilight3d.md#class_omnilight3d_property_omni_shadow_mode) | ``1``                                                                                       |
| [`float`](class_float.md)                  | shadow_normal_bias                                                                     | ``1.0`` (overrides [`Light3D`](class_light3d.md#class_light3d_property_shadow_normal_bias)) |

<!-- rst-class:: classref-section-separator -->

---

## 枚举

<div id="_class_enum_omnilight3d_shadowmode"></div>

enum **ShadowMode**: <div id="enum_omnilight3d_shadowmode"></div>

<div id="_class_omnilight3d_constant_shadow_dual_paraboloid"></div>

[ShadowMode](#enum_omnilight3d_shadowmode) **SHADOW_DUAL_PARABOLOID** = ``0``

Shadows are rendered to a dual-paraboloid texture. Faster than [`SHADOW_CUBE`](class_omnilight3d.md#class_omnilight3d_constant_shadow_cube), but lower-quality.

<div id="_class_omnilight3d_constant_shadow_cube"></div>

[ShadowMode](#enum_omnilight3d_shadowmode) **SHADOW_CUBE** = ``1``

Shadows are rendered to a cubemap. Slower than [`SHADOW_DUAL_PARABOLOID`](class_omnilight3d.md#class_omnilight3d_constant_shadow_dual_paraboloid), but higher-quality.

<!-- rst-class:: classref-section-separator -->

---

## 属性说明

<div id="_class_omnilight3d_property_omni_attenuation"></div>

[`float`](class_float.md) **omni_attenuation** = ``1.0`` <div id="class_omnilight3d_property_omni_attenuation"></div>

- `void` **set_param** ( value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_param** ( )

Controls the distance attenuation function for omnilights.

A value of `0.0` will maintain a constant brightness through most of the range, but smoothly attenuate the light at the edge of the range. Use a value of `2.0` for physically accurate lights as it results in the proper inverse square attenutation.

 **Note:** Setting attenuation to `2.0` or higher may result in distant objects receiving minimal light, even within range. For example, with a range of `4096`, an object at `100` units is attenuated by a factor of `0.0001`. With a default brightness of `1`, the light would not be visible at that distance.

 **Note:** Using negative or values higher than `10.0` may lead to unexpected results.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_omnilight3d_property_omni_range"></div>

[`float`](class_float.md) **omni_range** = ``5.0`` <div id="class_omnilight3d_property_omni_range"></div>

- `void` **set_param** ( value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_param** ( )

The light's radius. Note that the effectively lit area may appear to be smaller depending on the [`omni_attenuation`](class_omnilight3d.md#class_omnilight3d_property_omni_attenuation) in use. No matter the [`omni_attenuation`](class_omnilight3d.md#class_omnilight3d_property_omni_attenuation) in use, the light will never reach anything outside this radius.

 **Note:** [`omni_range`](class_omnilight3d.md#class_omnilight3d_property_omni_range) is not affected by [`Node3D.scale`](class_node3d.md#class_node3d_property_scale) (the light's scale or its parent's scale).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_omnilight3d_property_omni_shadow_mode"></div>

[ShadowMode](#enum_omnilight3d_shadowmode) **omni_shadow_mode** = ``1`` <div id="class_omnilight3d_property_omni_shadow_mode"></div>

- `void` **set_shadow_mode** ( value: [ShadowMode](#enum_omnilight3d_shadowmode) )
- [ShadowMode](#enum_omnilight3d_shadowmode) **get_shadow_mode** ( )

See [ShadowMode](#enum_omnilight3d_shadowmode).

[^virtual]: 本方法通常需要用户覆盖才能生效。
[^const]: 本方法无副作用，不会修改该实例的任何成员变量。
[^vararg]: 本方法除了能接受在此处描述的参数外，还能够继续接受任意数量的参数。
[^constructor]: 本方法用于构造某个类型。
[^static]: 调用本方法无需实例，可直接使用类名进行调用。
[^operator]: 本方法描述的是使用本类型作为左操作数的有效运算符。
[^bitfield]: 这个值是由下列位标志构成位掩码的整数。
[^void]: 无返回值。
