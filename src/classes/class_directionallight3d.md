<!-- ⚠ 请勿编辑本文件 ⚠ -->
<!-- 本文档使用脚本从 WeDot 引擎源码仓库生成。 -->
<!-- 生成脚本：https://github.com/WeDot-Engine/WeDot/tree/master/doc/tools/make_md.py； -->
<!-- 原文件：https://github.com/WeDot-Engine/WeDot/tree/master/doc/classes/DirectionalLight3D.xml。 -->

<div id="_class_directionallight3d"></div>

# DirectionalLight3D

**继承：** [`Light3D`](class_light3d.md) **<** [`VisualInstance3D`](class_visualinstance3d.md) **<** [`Node3D`](class_node3d.md) **<** [`Node`](class_node.md) **<** [`Object`](class_object.md)

Directional light from a distance, as from the Sun.

## 描述

A directional light is a type of [`Light3D`](class_light3d.md) node that models an infinite number of parallel rays covering the entire scene. It is used for lights with strong intensity that are located far away from the scene to model sunlight or moonlight. The worldspace location of the DirectionalLight3D transform (origin) is ignored. Only the basis is used to determine light direction.

## 属性

|||
|:-:|:--|
| [`bool`](class_bool.md)                           | [`directional_shadow_blend_splits`](class_directionallight3d.md#class_directionallight3d_property_directional_shadow_blend_splits) | ``false`` |
| [`float`](class_float.md)                         | [`directional_shadow_fade_start`](class_directionallight3d.md#class_directionallight3d_property_directional_shadow_fade_start)     | ``0.8``   |
| [`float`](class_float.md)                         | [`directional_shadow_max_distance`](class_directionallight3d.md#class_directionallight3d_property_directional_shadow_max_distance) | ``100.0`` |
| [ShadowMode](#enum_directionallight3d_shadowmode) | [`directional_shadow_mode`](class_directionallight3d.md#class_directionallight3d_property_directional_shadow_mode)                 | ``2``     |
| [`float`](class_float.md)                         | [`directional_shadow_pancake_size`](class_directionallight3d.md#class_directionallight3d_property_directional_shadow_pancake_size) | ``20.0``  |
| [`float`](class_float.md)                         | [`directional_shadow_split_1`](class_directionallight3d.md#class_directionallight3d_property_directional_shadow_split_1)           | ``0.1``   |
| [`float`](class_float.md)                         | [`directional_shadow_split_2`](class_directionallight3d.md#class_directionallight3d_property_directional_shadow_split_2)           | ``0.2``   |
| [`float`](class_float.md)                         | [`directional_shadow_split_3`](class_directionallight3d.md#class_directionallight3d_property_directional_shadow_split_3)           | ``0.5``   |
| [SkyMode](#enum_directionallight3d_skymode)       | [`sky_mode`](class_directionallight3d.md#class_directionallight3d_property_sky_mode)                                               | ``0``     |

<!-- rst-class:: classref-section-separator -->

---

## 枚举

<div id="_class_enum_directionallight3d_shadowmode"></div>

enum **ShadowMode**: <div id="enum_directionallight3d_shadowmode"></div>

<div id="_class_directionallight3d_constant_shadow_orthogonal"></div>

[ShadowMode](#enum_directionallight3d_shadowmode) **SHADOW_ORTHOGONAL** = ``0``

Renders the entire scene's shadow map from an orthogonal point of view. This is the fastest directional shadow mode. May result in blurrier shadows on close objects.

<div id="_class_directionallight3d_constant_shadow_parallel_2_splits"></div>

[ShadowMode](#enum_directionallight3d_shadowmode) **SHADOW_PARALLEL_2_SPLITS** = ``1``

Splits the view frustum in 2 areas, each with its own shadow map. This shadow mode is a compromise between [`SHADOW_ORTHOGONAL`](class_directionallight3d.md#class_directionallight3d_constant_shadow_orthogonal) and [`SHADOW_PARALLEL_4_SPLITS`](class_directionallight3d.md#class_directionallight3d_constant_shadow_parallel_4_splits) in terms of performance.

<div id="_class_directionallight3d_constant_shadow_parallel_4_splits"></div>

[ShadowMode](#enum_directionallight3d_shadowmode) **SHADOW_PARALLEL_4_SPLITS** = ``2``

Splits the view frustum in 4 areas, each with its own shadow map. This is the slowest directional shadow mode.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_enum_directionallight3d_skymode"></div>

enum **SkyMode**: <div id="enum_directionallight3d_skymode"></div>

<div id="_class_directionallight3d_constant_sky_mode_light_and_sky"></div>

[SkyMode](#enum_directionallight3d_skymode) **SKY_MODE_LIGHT_AND_SKY** = ``0``

Makes the light visible in both scene lighting and sky rendering.

<div id="_class_directionallight3d_constant_sky_mode_light_only"></div>

[SkyMode](#enum_directionallight3d_skymode) **SKY_MODE_LIGHT_ONLY** = ``1``

Makes the light visible in scene lighting only (including direct lighting and global illumination). When using this mode, the light will not be visible from sky shaders.

<div id="_class_directionallight3d_constant_sky_mode_sky_only"></div>

[SkyMode](#enum_directionallight3d_skymode) **SKY_MODE_SKY_ONLY** = ``2``

Makes the light visible to sky shaders only. When using this mode the light will not cast light into the scene (either through direct lighting or through global illumination), but can be accessed through sky shaders. This can be useful, for example, when you want to control sky effects without illuminating the scene (during a night cycle, for example).

<!-- rst-class:: classref-section-separator -->

---

## 属性说明

<div id="_class_directionallight3d_property_directional_shadow_blend_splits"></div>

[`bool`](class_bool.md) **directional_shadow_blend_splits** = ``false`` <div id="class_directionallight3d_property_directional_shadow_blend_splits"></div>

- `void` **set_blend_splits** ( value: [`bool`](class_bool.md) )
- [`bool`](class_bool.md) **is_blend_splits_enabled** ( )

If `true`, shadow detail is sacrificed in exchange for smoother transitions between splits. Enabling shadow blend splitting also has a moderate performance cost. This is ignored when [`directional_shadow_mode`](class_directionallight3d.md#class_directionallight3d_property_directional_shadow_mode) is [`SHADOW_ORTHOGONAL`](class_directionallight3d.md#class_directionallight3d_constant_shadow_orthogonal).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_directionallight3d_property_directional_shadow_fade_start"></div>

[`float`](class_float.md) **directional_shadow_fade_start** = ``0.8`` <div id="class_directionallight3d_property_directional_shadow_fade_start"></div>

- `void` **set_param** ( value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_param** ( )

Proportion of [`directional_shadow_max_distance`](class_directionallight3d.md#class_directionallight3d_property_directional_shadow_max_distance) at which point the shadow starts to fade. At [`directional_shadow_max_distance`](class_directionallight3d.md#class_directionallight3d_property_directional_shadow_max_distance), the shadow will disappear. The default value is a balance between smooth fading and distant shadow visibility. If the camera moves fast and the [`directional_shadow_max_distance`](class_directionallight3d.md#class_directionallight3d_property_directional_shadow_max_distance) is low, consider lowering [`directional_shadow_fade_start`](class_directionallight3d.md#class_directionallight3d_property_directional_shadow_fade_start) below `0.8` to make shadow transitions less noticeable. On the other hand, if you tuned [`directional_shadow_max_distance`](class_directionallight3d.md#class_directionallight3d_property_directional_shadow_max_distance) to cover the entire scene, you can set [`directional_shadow_fade_start`](class_directionallight3d.md#class_directionallight3d_property_directional_shadow_fade_start) to `1.0` to prevent the shadow from fading in the distance (it will suddenly cut off instead).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_directionallight3d_property_directional_shadow_max_distance"></div>

[`float`](class_float.md) **directional_shadow_max_distance** = ``100.0`` <div id="class_directionallight3d_property_directional_shadow_max_distance"></div>

- `void` **set_param** ( value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_param** ( )

The maximum distance for shadow splits. Increasing this value will make directional shadows visible from further away, at the cost of lower overall shadow detail and performance (since more objects need to be included in the directional shadow rendering).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_directionallight3d_property_directional_shadow_mode"></div>

[ShadowMode](#enum_directionallight3d_shadowmode) **directional_shadow_mode** = ``2`` <div id="class_directionallight3d_property_directional_shadow_mode"></div>

- `void` **set_shadow_mode** ( value: [ShadowMode](#enum_directionallight3d_shadowmode) )
- [ShadowMode](#enum_directionallight3d_shadowmode) **get_shadow_mode** ( )

The light's shadow rendering algorithm. See [ShadowMode](#enum_directionallight3d_shadowmode).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_directionallight3d_property_directional_shadow_pancake_size"></div>

[`float`](class_float.md) **directional_shadow_pancake_size** = ``20.0`` <div id="class_directionallight3d_property_directional_shadow_pancake_size"></div>

- `void` **set_param** ( value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_param** ( )

Sets the size of the directional shadow pancake. The pancake offsets the start of the shadow's camera frustum to provide a higher effective depth resolution for the shadow. However, a high pancake size can cause artifacts in the shadows of large objects that are close to the edge of the frustum. Reducing the pancake size can help. Setting the size to `0` turns off the pancaking effect.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_directionallight3d_property_directional_shadow_split_1"></div>

[`float`](class_float.md) **directional_shadow_split_1** = ``0.1`` <div id="class_directionallight3d_property_directional_shadow_split_1"></div>

- `void` **set_param** ( value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_param** ( )

The distance from camera to shadow split 1. Relative to [`directional_shadow_max_distance`](class_directionallight3d.md#class_directionallight3d_property_directional_shadow_max_distance). Only used when [`directional_shadow_mode`](class_directionallight3d.md#class_directionallight3d_property_directional_shadow_mode) is [`SHADOW_PARALLEL_2_SPLITS`](class_directionallight3d.md#class_directionallight3d_constant_shadow_parallel_2_splits) or [`SHADOW_PARALLEL_4_SPLITS`](class_directionallight3d.md#class_directionallight3d_constant_shadow_parallel_4_splits).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_directionallight3d_property_directional_shadow_split_2"></div>

[`float`](class_float.md) **directional_shadow_split_2** = ``0.2`` <div id="class_directionallight3d_property_directional_shadow_split_2"></div>

- `void` **set_param** ( value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_param** ( )

The distance from shadow split 1 to split 2. Relative to [`directional_shadow_max_distance`](class_directionallight3d.md#class_directionallight3d_property_directional_shadow_max_distance). Only used when [`directional_shadow_mode`](class_directionallight3d.md#class_directionallight3d_property_directional_shadow_mode) is [`SHADOW_PARALLEL_4_SPLITS`](class_directionallight3d.md#class_directionallight3d_constant_shadow_parallel_4_splits).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_directionallight3d_property_directional_shadow_split_3"></div>

[`float`](class_float.md) **directional_shadow_split_3** = ``0.5`` <div id="class_directionallight3d_property_directional_shadow_split_3"></div>

- `void` **set_param** ( value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_param** ( )

The distance from shadow split 2 to split 3. Relative to [`directional_shadow_max_distance`](class_directionallight3d.md#class_directionallight3d_property_directional_shadow_max_distance). Only used when [`directional_shadow_mode`](class_directionallight3d.md#class_directionallight3d_property_directional_shadow_mode) is [`SHADOW_PARALLEL_4_SPLITS`](class_directionallight3d.md#class_directionallight3d_constant_shadow_parallel_4_splits).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_directionallight3d_property_sky_mode"></div>

[SkyMode](#enum_directionallight3d_skymode) **sky_mode** = ``0`` <div id="class_directionallight3d_property_sky_mode"></div>

- `void` **set_sky_mode** ( value: [SkyMode](#enum_directionallight3d_skymode) )
- [SkyMode](#enum_directionallight3d_skymode) **get_sky_mode** ( )

Set whether this **DirectionalLight3D** is visible in the sky, in the scene, or both in the sky and in the scene. See [SkyMode](#enum_directionallight3d_skymode) for options.

[^virtual]: 本方法通常需要用户覆盖才能生效。
[^const]: 本方法无副作用，不会修改该实例的任何成员变量。
[^vararg]: 本方法除了能接受在此处描述的参数外，还能够继续接受任意数量的参数。
[^constructor]: 本方法用于构造某个类型。
[^static]: 调用本方法无需实例，可直接使用类名进行调用。
[^operator]: 本方法描述的是使用本类型作为左操作数的有效运算符。
[^bitfield]: 这个值是由下列位标志构成位掩码的整数。
[^void]: 无返回值。
