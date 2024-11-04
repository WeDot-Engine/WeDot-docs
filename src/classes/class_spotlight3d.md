<!-- ⚠ 请勿编辑本文件 ⚠ -->
<!-- 本文档使用脚本从 WeDot 引擎源码仓库生成。 -->
<!-- 生成脚本：https://github.com/WeDot-Engine/WeDot/tree/4.3/doc/tools/make_md.py； -->
<!-- 原文件：https://github.com/WeDot-Engine/WeDot/tree/4.3/doc/classes/SpotLight3D.xml。 -->

<div id="_class_spotlight3d"></div>

# SpotLight3D

**继承：** [`Light3D`](class_light3d.md) **<** [`VisualInstance3D`](class_visualinstance3d.md) **<** [`Node3D`](class_node3d.md) **<** [`Node`](class_node.md) **<** [`Object`](class_object.md)

A spotlight, such as a reflector spotlight or a lantern.

## 描述

A Spotlight is a type of [`Light3D`](class_light3d.md) node that emits lights in a specific direction, in the shape of a cone. The light is attenuated through the distance. This attenuation can be configured by changing the energy, radius and attenuation parameters of [`Light3D`](class_light3d.md).

 **Note:** When using the Mobile rendering method, only 8 spot lights can be displayed on each mesh resource. Attempting to display more than 8 spot lights on a single mesh resource will result in spot lights flickering in and out as the camera moves. When using the Compatibility rendering method, only 8 spot lights can be displayed on each mesh resource by default, but this can be increased by adjusting [`ProjectSettings.rendering/limits/opengl/max_lights_per_object`](#class_projectsettings_property_rendering/limits/opengl/max_lights_per_object).

 **Note:** When using the Mobile or Compatibility rendering methods, spot lights will only correctly affect meshes whose visibility AABB intersects with the light's AABB. If using a shader to deform the mesh in a way that makes it go outside its AABB, [`GeometryInstance3D.extra_cull_margin`](#class_geometryinstance3d_property_extra_cull_margin) must be increased on the mesh. Otherwise, the light may not be visible on the mesh.

## 属性

| [`float`](class_float.md) | shadow_bias                                                                    | ``0.03`` (overrides [`Light3D`](#class_light3d_property_shadow_bias))       |
| [`float`](class_float.md) | shadow_normal_bias                                                             | ``1.0`` (overrides [`Light3D`](#class_light3d_property_shadow_normal_bias)) |
| [`float`](class_float.md) | [`spot_angle`](#class_spotlight3d_property_spot_angle)                         | ``45.0``                                                                    |
| [`float`](class_float.md) | [`spot_angle_attenuation`](#class_spotlight3d_property_spot_angle_attenuation) | ``1.0``                                                                     |
| [`float`](class_float.md) | [`spot_attenuation`](#class_spotlight3d_property_spot_attenuation)             | ``1.0``                                                                     |
| [`float`](class_float.md) | [`spot_range`](#class_spotlight3d_property_spot_range)                         | ``5.0``                                                                     |

<!-- rst-class:: classref-section-separator -->

---

## 属性说明

<div id="_class_spotlight3d_property_spot_angle"></div>

[`float`](class_float.md) **spot_angle** = ``45.0`` <div id="class_spotlight3d_property_spot_angle"></div>

- `void` **set_param** ( value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_param** ( )

The spotlight's angle in degrees.

 **Note:** [`spot_angle`](#class_spotlight3d_property_spot_angle) is not affected by [`Node3D.scale`](#class_node3d_property_scale) (the light's scale or its parent's scale).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_spotlight3d_property_spot_angle_attenuation"></div>

[`float`](class_float.md) **spot_angle_attenuation** = ``1.0`` <div id="class_spotlight3d_property_spot_angle_attenuation"></div>

- `void` **set_param** ( value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_param** ( )

The spotlight's *angular* attenuation curve. See also [`spot_attenuation`](#class_spotlight3d_property_spot_attenuation).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_spotlight3d_property_spot_attenuation"></div>

[`float`](class_float.md) **spot_attenuation** = ``1.0`` <div id="class_spotlight3d_property_spot_attenuation"></div>

- `void` **set_param** ( value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_param** ( )

Controls the distance attenuation function for spotlights.

A value of `0.0` will maintain a constant brightness through most of the range, but smoothly attenuate the light at the edge of the range. Use a value of `2.0` for physically accurate lights as it results in the proper inverse square attenutation.

 **Note:** Setting attenuation to `2.0` or higher may result in distant objects receiving minimal light, even within range. For example, with a range of `4096`, an object at `100` units is attenuated by a factor of `0.0001`. With a default brightness of `1`, the light would not be visible at that distance.

 **Note:** Using negative or values higher than `10.0` may lead to unexpected results.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_spotlight3d_property_spot_range"></div>

[`float`](class_float.md) **spot_range** = ``5.0`` <div id="class_spotlight3d_property_spot_range"></div>

- `void` **set_param** ( value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_param** ( )

The maximal range that can be reached by the spotlight. Note that the effectively lit area may appear to be smaller depending on the [`spot_attenuation`](#class_spotlight3d_property_spot_attenuation) in use. No matter the [`spot_attenuation`](#class_spotlight3d_property_spot_attenuation) in use, the light will never reach anything outside this range.

 **Note:** [`spot_range`](#class_spotlight3d_property_spot_range) is not affected by [`Node3D.scale`](#class_node3d_property_scale) (the light's scale or its parent's scale).

[^virtual]: 本方法通常需要用户覆盖才能生效。
[^const]: 本方法无副作用，不会修改该实例的任何成员变量。
[^vararg]: 本方法除了能接受在此处描述的参数外，还能够继续接受任意数量的参数。
[^constructor]: 本方法用于构造某个类型。
[^static]: 调用本方法无需实例，可直接使用类名进行调用。
[^operator]: 本方法描述的是使用本类型作为左操作数的有效运算符。
[^bitfield]: 这个值是由下列位标志构成位掩码的整数。
[^void]: 无返回值。
