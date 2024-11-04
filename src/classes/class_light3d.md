<!-- ⚠ 请勿编辑本文件 ⚠ -->
<!-- 本文档使用脚本从 WeDot 引擎源码仓库生成。 -->
<!-- 生成脚本：https://github.com/WeDot-Engine/WeDot/tree/4.3/doc/tools/make_md.py； -->
<!-- 原文件：https://github.com/WeDot-Engine/WeDot/tree/4.3/doc/classes/Light3D.xml。 -->

<div id="_class_light3d"></div>

# Light3D

**继承：** [`VisualInstance3D`](class_visualinstance3d.md) **<** [`Node3D`](class_node3d.md) **<** [`Node`](class_node.md) **<** [`Object`](class_object.md)

**派生：** [`DirectionalLight3D`](class_directionallight3d.md), [`OmniLight3D`](class_omnilight3d.md), [`SpotLight3D`](class_spotlight3d.md)

Provides a base class for different kinds of light nodes.

## 描述

Light3D is the *abstract* base class for light nodes. As it can't be instantiated, it shouldn't be used directly. Other types of light nodes inherit from it. Light3D contains the common variables and parameters used for lighting.

## 属性

| [`float`](class_float.md)          | [`distance_fade_begin`](#class_light3d_property_distance_fade_begin)                 | ``40.0``              |
| [`bool`](class_bool.md)            | [`distance_fade_enabled`](#class_light3d_property_distance_fade_enabled)             | ``false``             |
| [`float`](class_float.md)          | [`distance_fade_length`](#class_light3d_property_distance_fade_length)               | ``10.0``              |
| [`float`](class_float.md)          | [`distance_fade_shadow`](#class_light3d_property_distance_fade_shadow)               | ``50.0``              |
| [`bool`](class_bool.md)            | [`editor_only`](#class_light3d_property_editor_only)                                 | ``false``             |
| [`float`](class_float.md)          | [`light_angular_distance`](#class_light3d_property_light_angular_distance)           | ``0.0``               |
| [BakeMode](#enum_light3d_bakemode) | [`light_bake_mode`](#class_light3d_property_light_bake_mode)                         | ``2``                 |
| [`Color`](class_color.md)          | [`light_color`](#class_light3d_property_light_color)                                 | ``Color(1, 1, 1, 1)`` |
| [`int`](class_int.md)              | [`light_cull_mask`](#class_light3d_property_light_cull_mask)                         | ``4294967295``        |
| [`float`](class_float.md)          | [`light_energy`](#class_light3d_property_light_energy)                               | ``1.0``               |
| [`float`](class_float.md)          | [`light_indirect_energy`](#class_light3d_property_light_indirect_energy)             | ``1.0``               |
| [`float`](class_float.md)          | [`light_intensity_lumens`](#class_light3d_property_light_intensity_lumens)           |                       |
| [`float`](class_float.md)          | [`light_intensity_lux`](#class_light3d_property_light_intensity_lux)                 |                       |
| [`bool`](class_bool.md)            | [`light_negative`](#class_light3d_property_light_negative)                           | ``false``             |
| [`Texture2D`](class_texture2d.md)  | [`light_projector`](#class_light3d_property_light_projector)                         |                       |
| [`float`](class_float.md)          | [`light_size`](#class_light3d_property_light_size)                                   | ``0.0``               |
| [`float`](class_float.md)          | [`light_specular`](#class_light3d_property_light_specular)                           | ``0.5``               |
| [`float`](class_float.md)          | [`light_temperature`](#class_light3d_property_light_temperature)                     |                       |
| [`float`](class_float.md)          | [`light_volumetric_fog_energy`](#class_light3d_property_light_volumetric_fog_energy) | ``1.0``               |
| [`float`](class_float.md)          | [`shadow_bias`](#class_light3d_property_shadow_bias)                                 | ``0.1``               |
| [`float`](class_float.md)          | [`shadow_blur`](#class_light3d_property_shadow_blur)                                 | ``1.0``               |
| [`bool`](class_bool.md)            | [`shadow_enabled`](#class_light3d_property_shadow_enabled)                           | ``false``             |
| [`float`](class_float.md)          | [`shadow_normal_bias`](#class_light3d_property_shadow_normal_bias)                   | ``2.0``               |
| [`float`](class_float.md)          | [`shadow_opacity`](#class_light3d_property_shadow_opacity)                           | ``1.0``               |
| [`bool`](class_bool.md)            | [`shadow_reverse_cull_face`](#class_light3d_property_shadow_reverse_cull_face)       | ``false``             |
| [`float`](class_float.md)          | [`shadow_transmittance_bias`](#class_light3d_property_shadow_transmittance_bias)     | ``0.05``              |

## 方法

| [`Color`](class_color.md) | [`get_correlated_color`](#class_light3d_method_get_correlated_color) ( ) const[^const]                                   |
| [`float`](class_float.md) | [`get_param`](#class_light3d_method_get_param) ( param: [Param](#enum_light3d_param) ) const[^const]                     |
| `void`                    | [`set_param`](#class_light3d_method_set_param) ( param: [Param](#enum_light3d_param), value: [`float`](class_float.md) ) |

<!-- rst-class:: classref-section-separator -->

---

## 枚举

<div id="_class_enum_light3d_param"></div>

enum **Param**: <div id="enum_light3d_param"></div>

<div id="_class_light3d_constant_param_energy"></div>

[Param](#enum_light3d_param) **PARAM_ENERGY** = ``0``

Constant for accessing [`light_energy`](#class_light3d_property_light_energy).

<div id="_class_light3d_constant_param_indirect_energy"></div>

[Param](#enum_light3d_param) **PARAM_INDIRECT_ENERGY** = ``1``

Constant for accessing [`light_indirect_energy`](#class_light3d_property_light_indirect_energy).

<div id="_class_light3d_constant_param_volumetric_fog_energy"></div>

[Param](#enum_light3d_param) **PARAM_VOLUMETRIC_FOG_ENERGY** = ``2``

Constant for accessing [`light_volumetric_fog_energy`](#class_light3d_property_light_volumetric_fog_energy).

<div id="_class_light3d_constant_param_specular"></div>

[Param](#enum_light3d_param) **PARAM_SPECULAR** = ``3``

Constant for accessing [`light_specular`](#class_light3d_property_light_specular).

<div id="_class_light3d_constant_param_range"></div>

[Param](#enum_light3d_param) **PARAM_RANGE** = ``4``

Constant for accessing [`OmniLight3D.omni_range`](#class_omnilight3d_property_omni_range) or [`SpotLight3D.spot_range`](#class_spotlight3d_property_spot_range).

<div id="_class_light3d_constant_param_size"></div>

[Param](#enum_light3d_param) **PARAM_SIZE** = ``5``

Constant for accessing [`light_size`](#class_light3d_property_light_size).

<div id="_class_light3d_constant_param_attenuation"></div>

[Param](#enum_light3d_param) **PARAM_ATTENUATION** = ``6``

Constant for accessing [`OmniLight3D.omni_attenuation`](#class_omnilight3d_property_omni_attenuation) or [`SpotLight3D.spot_attenuation`](#class_spotlight3d_property_spot_attenuation).

<div id="_class_light3d_constant_param_spot_angle"></div>

[Param](#enum_light3d_param) **PARAM_SPOT_ANGLE** = ``7``

Constant for accessing [`SpotLight3D.spot_angle`](#class_spotlight3d_property_spot_angle).

<div id="_class_light3d_constant_param_spot_attenuation"></div>

[Param](#enum_light3d_param) **PARAM_SPOT_ATTENUATION** = ``8``

Constant for accessing [`SpotLight3D.spot_angle_attenuation`](#class_spotlight3d_property_spot_angle_attenuation).

<div id="_class_light3d_constant_param_shadow_max_distance"></div>

[Param](#enum_light3d_param) **PARAM_SHADOW_MAX_DISTANCE** = ``9``

Constant for accessing [`DirectionalLight3D.directional_shadow_max_distance`](#class_directionallight3d_property_directional_shadow_max_distance).

<div id="_class_light3d_constant_param_shadow_split_1_offset"></div>

[Param](#enum_light3d_param) **PARAM_SHADOW_SPLIT_1_OFFSET** = ``10``

Constant for accessing [`DirectionalLight3D.directional_shadow_split_1`](#class_directionallight3d_property_directional_shadow_split_1).

<div id="_class_light3d_constant_param_shadow_split_2_offset"></div>

[Param](#enum_light3d_param) **PARAM_SHADOW_SPLIT_2_OFFSET** = ``11``

Constant for accessing [`DirectionalLight3D.directional_shadow_split_2`](#class_directionallight3d_property_directional_shadow_split_2).

<div id="_class_light3d_constant_param_shadow_split_3_offset"></div>

[Param](#enum_light3d_param) **PARAM_SHADOW_SPLIT_3_OFFSET** = ``12``

Constant for accessing [`DirectionalLight3D.directional_shadow_split_3`](#class_directionallight3d_property_directional_shadow_split_3).

<div id="_class_light3d_constant_param_shadow_fade_start"></div>

[Param](#enum_light3d_param) **PARAM_SHADOW_FADE_START** = ``13``

Constant for accessing [`DirectionalLight3D.directional_shadow_fade_start`](#class_directionallight3d_property_directional_shadow_fade_start).

<div id="_class_light3d_constant_param_shadow_normal_bias"></div>

[Param](#enum_light3d_param) **PARAM_SHADOW_NORMAL_BIAS** = ``14``

Constant for accessing [`shadow_normal_bias`](#class_light3d_property_shadow_normal_bias).

<div id="_class_light3d_constant_param_shadow_bias"></div>

[Param](#enum_light3d_param) **PARAM_SHADOW_BIAS** = ``15``

Constant for accessing [`shadow_bias`](#class_light3d_property_shadow_bias).

<div id="_class_light3d_constant_param_shadow_pancake_size"></div>

[Param](#enum_light3d_param) **PARAM_SHADOW_PANCAKE_SIZE** = ``16``

Constant for accessing [`DirectionalLight3D.directional_shadow_pancake_size`](#class_directionallight3d_property_directional_shadow_pancake_size).

<div id="_class_light3d_constant_param_shadow_opacity"></div>

[Param](#enum_light3d_param) **PARAM_SHADOW_OPACITY** = ``17``

Constant for accessing [`shadow_opacity`](#class_light3d_property_shadow_opacity).

<div id="_class_light3d_constant_param_shadow_blur"></div>

[Param](#enum_light3d_param) **PARAM_SHADOW_BLUR** = ``18``

Constant for accessing [`shadow_blur`](#class_light3d_property_shadow_blur).

<div id="_class_light3d_constant_param_transmittance_bias"></div>

[Param](#enum_light3d_param) **PARAM_TRANSMITTANCE_BIAS** = ``19``

Constant for accessing [`shadow_transmittance_bias`](#class_light3d_property_shadow_transmittance_bias).

<div id="_class_light3d_constant_param_intensity"></div>

[Param](#enum_light3d_param) **PARAM_INTENSITY** = ``20``

Constant for accessing [`light_intensity_lumens`](#class_light3d_property_light_intensity_lumens) and [`light_intensity_lux`](#class_light3d_property_light_intensity_lux). Only used when [`ProjectSettings.rendering/lights_and_shadows/use_physical_light_units`](#class_projectsettings_property_rendering/lights_and_shadows/use_physical_light_units) is `true`.

<div id="_class_light3d_constant_param_max"></div>

[Param](#enum_light3d_param) **PARAM_MAX** = ``21``

Represents the size of the [Param](#enum_light3d_param) enum.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_enum_light3d_bakemode"></div>

enum **BakeMode**: <div id="enum_light3d_bakemode"></div>

<div id="_class_light3d_constant_bake_disabled"></div>

[BakeMode](#enum_light3d_bakemode) **BAKE_DISABLED** = ``0``

Light is ignored when baking. This is the fastest mode, but the light will be taken into account when baking global illumination. This mode should generally be used for dynamic lights that change quickly, as the effect of global illumination is less noticeable on those lights.

 **Note:** Hiding a light does *not* affect baking [`LightmapGI`](class_lightmapgi.md). Hiding a light will still affect baking [`VoxelGI`](class_voxelgi.md) and SDFGI (see [`Environment.sdfgi_enabled`](#class_environment_property_sdfgi_enabled)).

<div id="_class_light3d_constant_bake_static"></div>

[BakeMode](#enum_light3d_bakemode) **BAKE_STATIC** = ``1``

Light is taken into account in static baking ([`VoxelGI`](class_voxelgi.md), [`LightmapGI`](class_lightmapgi.md), SDFGI ([`Environment.sdfgi_enabled`](#class_environment_property_sdfgi_enabled))). The light can be moved around or modified, but its global illumination will not update in real-time. This is suitable for subtle changes (such as flickering torches), but generally not large changes such as toggling a light on and off.

 **Note:** The light is not baked in [`LightmapGI`](class_lightmapgi.md) if [`editor_only`](#class_light3d_property_editor_only) is `true`.

<div id="_class_light3d_constant_bake_dynamic"></div>

[BakeMode](#enum_light3d_bakemode) **BAKE_DYNAMIC** = ``2``

Light is taken into account in dynamic baking ([`VoxelGI`](class_voxelgi.md) and SDFGI ([`Environment.sdfgi_enabled`](#class_environment_property_sdfgi_enabled)) only). The light can be moved around or modified with global illumination updating in real-time. The light's global illumination appearance will be slightly different compared to [`BAKE_STATIC`](#class_light3d_constant_bake_static). This has a greater performance cost compared to [`BAKE_STATIC`](#class_light3d_constant_bake_static). When using SDFGI, the update speed of dynamic lights is affected by [`ProjectSettings.rendering/global_illumination/sdfgi/frames_to_update_lights`](#class_projectsettings_property_rendering/global_illumination/sdfgi/frames_to_update_lights).

<!-- rst-class:: classref-section-separator -->

---

## 属性说明

<div id="_class_light3d_property_distance_fade_begin"></div>

[`float`](class_float.md) **distance_fade_begin** = ``40.0`` <div id="class_light3d_property_distance_fade_begin"></div>

- `void` **set_distance_fade_begin** ( value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_distance_fade_begin** ( )

The distance from the camera at which the light begins to fade away (in 3D units).

 **Note:** Only effective for [`OmniLight3D`](class_omnilight3d.md) and [`SpotLight3D`](class_spotlight3d.md).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_light3d_property_distance_fade_enabled"></div>

[`bool`](class_bool.md) **distance_fade_enabled** = ``false`` <div id="class_light3d_property_distance_fade_enabled"></div>

- `void` **set_enable_distance_fade** ( value: [`bool`](class_bool.md) )
- [`bool`](class_bool.md) **is_distance_fade_enabled** ( )

If `true`, the light will smoothly fade away when far from the active [`Camera3D`](class_camera3d.md) starting at [`distance_fade_begin`](#class_light3d_property_distance_fade_begin). This acts as a form of level of detail (LOD). The light will fade out over [`distance_fade_begin`](#class_light3d_property_distance_fade_begin) + [`distance_fade_length`](#class_light3d_property_distance_fade_length), after which it will be culled and not sent to the shader at all. Use this to reduce the number of active lights in a scene and thus improve performance.

 **Note:** Only effective for [`OmniLight3D`](class_omnilight3d.md) and [`SpotLight3D`](class_spotlight3d.md).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_light3d_property_distance_fade_length"></div>

[`float`](class_float.md) **distance_fade_length** = ``10.0`` <div id="class_light3d_property_distance_fade_length"></div>

- `void` **set_distance_fade_length** ( value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_distance_fade_length** ( )

Distance over which the light and its shadow fades. The light's energy and shadow's opacity is progressively reduced over this distance and is completely invisible at the end.

 **Note:** Only effective for [`OmniLight3D`](class_omnilight3d.md) and [`SpotLight3D`](class_spotlight3d.md).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_light3d_property_distance_fade_shadow"></div>

[`float`](class_float.md) **distance_fade_shadow** = ``50.0`` <div id="class_light3d_property_distance_fade_shadow"></div>

- `void` **set_distance_fade_shadow** ( value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_distance_fade_shadow** ( )

The distance from the camera at which the light's shadow cuts off (in 3D units). Set this to a value lower than [`distance_fade_begin`](#class_light3d_property_distance_fade_begin) + [`distance_fade_length`](#class_light3d_property_distance_fade_length) to further improve performance, as shadow rendering is often more expensive than light rendering itself.

 **Note:** Only effective for [`OmniLight3D`](class_omnilight3d.md) and [`SpotLight3D`](class_spotlight3d.md), and only when [`shadow_enabled`](#class_light3d_property_shadow_enabled) is `true`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_light3d_property_editor_only"></div>

[`bool`](class_bool.md) **editor_only** = ``false`` <div id="class_light3d_property_editor_only"></div>

- `void` **set_editor_only** ( value: [`bool`](class_bool.md) )
- [`bool`](class_bool.md) **is_editor_only** ( )

If `true`, the light only appears in the editor and will not be visible at runtime. If `true`, the light will never be baked in [`LightmapGI`](class_lightmapgi.md) regardless of its [`light_bake_mode`](#class_light3d_property_light_bake_mode).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_light3d_property_light_angular_distance"></div>

[`float`](class_float.md) **light_angular_distance** = ``0.0`` <div id="class_light3d_property_light_angular_distance"></div>

- `void` **set_param** ( param: [Param](#enum_light3d_param), value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_param** ( param: [Param](#enum_light3d_param) ) const[^const]

The light's angular size in degrees. Increasing this will make shadows softer at greater distances (also called percentage-closer soft shadows, or PCSS). Only available for [`DirectionalLight3D`](class_directionallight3d.md) s. For reference, the Sun from the Earth is approximately `0.5`. Increasing this value above `0.0` for lights with shadows enabled will have a noticeable performance cost due to PCSS.

 **Note:** [`light_angular_distance`](#class_light3d_property_light_angular_distance) is not affected by [`Node3D.scale`](#class_node3d_property_scale) (the light's scale or its parent's scale).

 **Note:** PCSS for directional lights is only supported in the Forward+ rendering method, not Mobile or Compatibility.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_light3d_property_light_bake_mode"></div>

[BakeMode](#enum_light3d_bakemode) **light_bake_mode** = ``2`` <div id="class_light3d_property_light_bake_mode"></div>

- `void` **set_bake_mode** ( value: [BakeMode](#enum_light3d_bakemode) )
- [BakeMode](#enum_light3d_bakemode) **get_bake_mode** ( )

The light's bake mode. This will affect the global illumination techniques that have an effect on the light's rendering. See [BakeMode](#enum_light3d_bakemode).

 **Note:** Meshes' global illumination mode will also affect the global illumination rendering. See [`GeometryInstance3D.gi_mode`](#class_geometryinstance3d_property_gi_mode).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_light3d_property_light_color"></div>

[`Color`](class_color.md) **light_color** = ``Color(1, 1, 1, 1)`` <div id="class_light3d_property_light_color"></div>

- `void` **set_color** ( value: [`Color`](class_color.md) )
- [`Color`](class_color.md) **get_color** ( )

The light's color. An *overbright* color can be used to achieve a result equivalent to increasing the light's [`light_energy`](#class_light3d_property_light_energy).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_light3d_property_light_cull_mask"></div>

[`int`](class_int.md) **light_cull_mask** = ``4294967295`` <div id="class_light3d_property_light_cull_mask"></div>

- `void` **set_cull_mask** ( value: [`int`](class_int.md) )
- [`int`](class_int.md) **get_cull_mask** ( )

The light will affect objects in the selected layers.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_light3d_property_light_energy"></div>

[`float`](class_float.md) **light_energy** = ``1.0`` <div id="class_light3d_property_light_energy"></div>

- `void` **set_param** ( param: [Param](#enum_light3d_param), value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_param** ( param: [Param](#enum_light3d_param) ) const[^const]

The light's strength multiplier (this is not a physical unit). For [`OmniLight3D`](class_omnilight3d.md) and [`SpotLight3D`](class_spotlight3d.md), changing this value will only change the light color's intensity, not the light's radius.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_light3d_property_light_indirect_energy"></div>

[`float`](class_float.md) **light_indirect_energy** = ``1.0`` <div id="class_light3d_property_light_indirect_energy"></div>

- `void` **set_param** ( param: [Param](#enum_light3d_param), value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_param** ( param: [Param](#enum_light3d_param) ) const[^const]

Secondary multiplier used with indirect light (light bounces). Used with [`VoxelGI`](class_voxelgi.md) and SDFGI (see [`Environment.sdfgi_enabled`](#class_environment_property_sdfgi_enabled)).

 **Note:** This property is ignored if [`light_energy`](#class_light3d_property_light_energy) is equal to `0.0`, as the light won't be present at all in the GI shader.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_light3d_property_light_intensity_lumens"></div>

[`float`](class_float.md) **light_intensity_lumens** <div id="class_light3d_property_light_intensity_lumens"></div>

- `void` **set_param** ( param: [Param](#enum_light3d_param), value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_param** ( param: [Param](#enum_light3d_param) ) const[^const]

Used by positional lights ([`OmniLight3D`](class_omnilight3d.md) and [`SpotLight3D`](class_spotlight3d.md)) when [`ProjectSettings.rendering/lights_and_shadows/use_physical_light_units`](#class_projectsettings_property_rendering/lights_and_shadows/use_physical_light_units) is `true`. Sets the intensity of the light source measured in Lumens. Lumens are a measure of luminous flux, which is the total amount of visible light emitted by a light source per unit of time.

For [`SpotLight3D`](class_spotlight3d.md) s, we assume that the area outside the visible cone is surrounded by a perfect light absorbing material. Accordingly, the apparent brightness of the cone area does not change as the cone increases and decreases in size.

A typical household lightbulb can range from around 600 lumens to 1,200 lumens, a candle is about 13 lumens, while a streetlight can be approximately 60,000 lumens.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_light3d_property_light_intensity_lux"></div>

[`float`](class_float.md) **light_intensity_lux** <div id="class_light3d_property_light_intensity_lux"></div>

- `void` **set_param** ( param: [Param](#enum_light3d_param), value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_param** ( param: [Param](#enum_light3d_param) ) const[^const]

Used by [`DirectionalLight3D`](class_directionallight3d.md) s when [`ProjectSettings.rendering/lights_and_shadows/use_physical_light_units`](#class_projectsettings_property_rendering/lights_and_shadows/use_physical_light_units) is `true`. Sets the intensity of the light source measured in Lux. Lux is a measure of luminous flux per unit area, it is equal to one lumen per square meter. Lux is the measure of how much light hits a surface at a given time.

On a clear sunny day a surface in direct sunlight may be approximately 100,000 lux, a typical room in a home may be approximately 50 lux, while the moonlit ground may be approximately 0.1 lux.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_light3d_property_light_negative"></div>

[`bool`](class_bool.md) **light_negative** = ``false`` <div id="class_light3d_property_light_negative"></div>

- `void` **set_negative** ( value: [`bool`](class_bool.md) )
- [`bool`](class_bool.md) **is_negative** ( )

If `true`, the light's effect is reversed, darkening areas and casting bright shadows.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_light3d_property_light_projector"></div>

[`Texture2D`](class_texture2d.md) **light_projector** <div id="class_light3d_property_light_projector"></div>

- `void` **set_projector** ( value: [`Texture2D`](class_texture2d.md) )
- [`Texture2D`](class_texture2d.md) **get_projector** ( )

[`Texture2D`](class_texture2d.md) projected by light. [`shadow_enabled`](#class_light3d_property_shadow_enabled) must be on for the projector to work. Light projectors make the light appear as if it is shining through a colored but transparent object, almost like light shining through stained-glass.

 **Note:** Unlike [`BaseMaterial3D`](class_basematerial3d.md) whose filter mode can be adjusted on a per-material basis, the filter mode for light projector textures is set globally with [`ProjectSettings.rendering/textures/light_projectors/filter`](#class_projectsettings_property_rendering/textures/light_projectors/filter).

 **Note:** Light projector textures are only supported in the Forward+ and Mobile rendering methods, not Compatibility.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_light3d_property_light_size"></div>

[`float`](class_float.md) **light_size** = ``0.0`` <div id="class_light3d_property_light_size"></div>

- `void` **set_param** ( param: [Param](#enum_light3d_param), value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_param** ( param: [Param](#enum_light3d_param) ) const[^const]

The size of the light in Godot units. Only available for [`OmniLight3D`](class_omnilight3d.md) s and [`SpotLight3D`](class_spotlight3d.md) s. Increasing this value will make the light fade out slower and shadows appear blurrier (also called percentage-closer soft shadows, or PCSS). This can be used to simulate area lights to an extent. Increasing this value above `0.0` for lights with shadows enabled will have a noticeable performance cost due to PCSS.

 **Note:** [`light_size`](#class_light3d_property_light_size) is not affected by [`Node3D.scale`](#class_node3d_property_scale) (the light's scale or its parent's scale).

 **Note:** PCSS for positional lights is only supported in the Forward+ and Mobile rendering methods, not Compatibility.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_light3d_property_light_specular"></div>

[`float`](class_float.md) **light_specular** = ``0.5`` <div id="class_light3d_property_light_specular"></div>

- `void` **set_param** ( param: [Param](#enum_light3d_param), value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_param** ( param: [Param](#enum_light3d_param) ) const[^const]

The intensity of the specular blob in objects affected by the light. At `0`, the light becomes a pure diffuse light. When not baking emission, this can be used to avoid unrealistic reflections when placing lights above an emissive surface.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_light3d_property_light_temperature"></div>

[`float`](class_float.md) **light_temperature** <div id="class_light3d_property_light_temperature"></div>

- `void` **set_temperature** ( value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_temperature** ( )

Sets the color temperature of the light source, measured in Kelvin. This is used to calculate a correlated color temperature which tints the [`light_color`](#class_light3d_property_light_color).

The sun on a cloudy day is approximately 6500 Kelvin, on a clear day it is between 5500 to 6000 Kelvin, and on a clear day at sunrise or sunset it ranges to around 1850 Kelvin.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_light3d_property_light_volumetric_fog_energy"></div>

[`float`](class_float.md) **light_volumetric_fog_energy** = ``1.0`` <div id="class_light3d_property_light_volumetric_fog_energy"></div>

- `void` **set_param** ( param: [Param](#enum_light3d_param), value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_param** ( param: [Param](#enum_light3d_param) ) const[^const]

Secondary multiplier multiplied with [`light_energy`](#class_light3d_property_light_energy) then used with the [`Environment`](class_environment.md)'s volumetric fog (if enabled). If set to `0.0`, computing volumetric fog will be skipped for this light, which can improve performance for large amounts of lights when volumetric fog is enabled.

 **Note:** To prevent short-lived dynamic light effects from poorly interacting with volumetric fog, lights used in those effects should have [`light_volumetric_fog_energy`](#class_light3d_property_light_volumetric_fog_energy) set to `0.0` unless [`Environment.volumetric_fog_temporal_reprojection_enabled`](#class_environment_property_volumetric_fog_temporal_reprojection_enabled) is disabled (or unless the reprojection amount is significantly lowered).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_light3d_property_shadow_bias"></div>

[`float`](class_float.md) **shadow_bias** = ``0.1`` <div id="class_light3d_property_shadow_bias"></div>

- `void` **set_param** ( param: [Param](#enum_light3d_param), value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_param** ( param: [Param](#enum_light3d_param) ) const[^const]

Used to adjust shadow appearance. Too small a value results in self-shadowing ("shadow acne"), while too large a value causes shadows to separate from casters ("peter-panning"). Adjust as needed.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_light3d_property_shadow_blur"></div>

[`float`](class_float.md) **shadow_blur** = ``1.0`` <div id="class_light3d_property_shadow_blur"></div>

- `void` **set_param** ( param: [Param](#enum_light3d_param), value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_param** ( param: [Param](#enum_light3d_param) ) const[^const]

Blurs the edges of the shadow. Can be used to hide pixel artifacts in low-resolution shadow maps. A high value can impact performance, make shadows appear grainy and can cause other unwanted artifacts. Try to keep as near default as possible.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_light3d_property_shadow_enabled"></div>

[`bool`](class_bool.md) **shadow_enabled** = ``false`` <div id="class_light3d_property_shadow_enabled"></div>

- `void` **set_shadow** ( value: [`bool`](class_bool.md) )
- [`bool`](class_bool.md) **has_shadow** ( )

If `true`, the light will cast real-time shadows. This has a significant performance cost. Only enable shadow rendering when it makes a noticeable difference in the scene's appearance, and consider using [`distance_fade_enabled`](#class_light3d_property_distance_fade_enabled) to hide the light when far away from the [`Camera3D`](class_camera3d.md).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_light3d_property_shadow_normal_bias"></div>

[`float`](class_float.md) **shadow_normal_bias** = ``2.0`` <div id="class_light3d_property_shadow_normal_bias"></div>

- `void` **set_param** ( param: [Param](#enum_light3d_param), value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_param** ( param: [Param](#enum_light3d_param) ) const[^const]

Offsets the lookup into the shadow map by the object's normal. This can be used to reduce self-shadowing artifacts without using [`shadow_bias`](#class_light3d_property_shadow_bias). In practice, this value should be tweaked along with [`shadow_bias`](#class_light3d_property_shadow_bias) to reduce artifacts as much as possible.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_light3d_property_shadow_opacity"></div>

[`float`](class_float.md) **shadow_opacity** = ``1.0`` <div id="class_light3d_property_shadow_opacity"></div>

- `void` **set_param** ( param: [Param](#enum_light3d_param), value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_param** ( param: [Param](#enum_light3d_param) ) const[^const]

The opacity to use when rendering the light's shadow map. Values lower than `1.0` make the light appear through shadows. This can be used to fake global illumination at a low performance cost.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_light3d_property_shadow_reverse_cull_face"></div>

[`bool`](class_bool.md) **shadow_reverse_cull_face** = ``false`` <div id="class_light3d_property_shadow_reverse_cull_face"></div>

- `void` **set_shadow_reverse_cull_face** ( value: [`bool`](class_bool.md) )
- [`bool`](class_bool.md) **get_shadow_reverse_cull_face** ( )

If `true`, reverses the backface culling of the mesh. This can be useful when you have a flat mesh that has a light behind it. If you need to cast a shadow on both sides of the mesh, set the mesh to use double-sided shadows with [`GeometryInstance3D.SHADOW_CASTING_SETTING_DOUBLE_SIDED`](#class_geometryinstance3d_constant_shadow_casting_setting_double_sided).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_light3d_property_shadow_transmittance_bias"></div>

[`float`](class_float.md) **shadow_transmittance_bias** = ``0.05`` <div id="class_light3d_property_shadow_transmittance_bias"></div>

- `void` **set_param** ( param: [Param](#enum_light3d_param), value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_param** ( param: [Param](#enum_light3d_param) ) const[^const]

该属性目前没有描述，请帮我们\ :ref:`贡献一个 <doc_updating_the_class_reference>`\ 吧！

<!-- rst-class:: classref-section-separator -->

---

## 方法说明

<div id="_class_light3d_method_get_correlated_color"></div>

[`Color`](class_color.md) **get_correlated_color** ( ) const[^const]<div id="class_light3d_method_get_correlated_color"></div>

Returns the [`Color`](class_color.md) of an idealized blackbody at the given [`light_temperature`](#class_light3d_property_light_temperature). This value is calculated internally based on the [`light_temperature`](#class_light3d_property_light_temperature). This [`Color`](class_color.md) is multiplied by [`light_color`](#class_light3d_property_light_color) before being sent to the [`RenderingServer`](class_renderingserver.md).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_light3d_method_get_param"></div>

[`float`](class_float.md) **get_param** ( param: [Param](#enum_light3d_param) ) const[^const]<div id="class_light3d_method_get_param"></div>

Returns the value of the specified [Param](#enum_light3d_param) parameter.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_light3d_method_set_param"></div>

`void` **set_param** ( param: [Param](#enum_light3d_param), value: [`float`](class_float.md) )<div id="class_light3d_method_set_param"></div>

Sets the value of the specified [Param](#enum_light3d_param) parameter.

[^virtual]: 本方法通常需要用户覆盖才能生效。
[^const]: 本方法无副作用，不会修改该实例的任何成员变量。
[^vararg]: 本方法除了能接受在此处描述的参数外，还能够继续接受任意数量的参数。
[^constructor]: 本方法用于构造某个类型。
[^static]: 调用本方法无需实例，可直接使用类名进行调用。
[^operator]: 本方法描述的是使用本类型作为左操作数的有效运算符。
[^bitfield]: 这个值是由下列位标志构成位掩码的整数。
[^void]: 无返回值。
