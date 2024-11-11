<!-- ⚠ 请勿编辑本文件 ⚠ -->
<!-- 本文档使用脚本从 WeDot 引擎源码仓库生成。 -->
<!-- 生成脚本：https://github.com/WeDot-Engine/WeDot/tree/master/doc/tools/make_md.py； -->
<!-- 原文件：https://github.com/WeDot-Engine/WeDot/tree/master/doc/classes/Environment.xml。 -->

<div id="_class_environment"></div>

# Environment

**继承：** [`Resource`](class_resource.md) **<** [`RefCounted`](class_refcounted.md) **<** [`Object`](class_object.md)

Resource for environment nodes (like [`WorldEnvironment`](class_worldenvironment.md)) that define multiple rendering options.

## 描述

Resource for environment nodes (like [`WorldEnvironment`](class_worldenvironment.md)) that define multiple environment operations (such as background [`Sky`](class_sky.md) or [`Color`](class_color.md), ambient light, fog, depth-of-field...). These parameters affect the final render of the scene. The order of these operations is:

- Depth of Field Blur

- Glow

- Tonemap (Auto Exposure)

- Adjustments

## 属性

|||
|:-:|:--|
| [`float`](class_float.md)                              | [`adjustment_brightness`](class_environment.md#class_environment_property_adjustment_brightness)                                               | ``1.0``                           |
| [`Texture`](class_texture.md)                          | [`adjustment_color_correction`](class_environment.md#class_environment_property_adjustment_color_correction)                                   |                                   |
| [`float`](class_float.md)                              | [`adjustment_contrast`](class_environment.md#class_environment_property_adjustment_contrast)                                                   | ``1.0``                           |
| [`bool`](class_bool.md)                                | [`adjustment_enabled`](class_environment.md#class_environment_property_adjustment_enabled)                                                     | ``false``                         |
| [`float`](class_float.md)                              | [`adjustment_saturation`](class_environment.md#class_environment_property_adjustment_saturation)                                               | ``1.0``                           |
| [`Color`](class_color.md)                              | [`ambient_light_color`](class_environment.md#class_environment_property_ambient_light_color)                                                   | ``Color(0, 0, 0, 1)``             |
| [`float`](class_float.md)                              | [`ambient_light_energy`](class_environment.md#class_environment_property_ambient_light_energy)                                                 | ``1.0``                           |
| [`float`](class_float.md)                              | [`ambient_light_sky_contribution`](class_environment.md#class_environment_property_ambient_light_sky_contribution)                             | ``1.0``                           |
| [AmbientSource](#enum_environment_ambientsource)       | [`ambient_light_source`](class_environment.md#class_environment_property_ambient_light_source)                                                 | ``0``                             |
| [`int`](class_int.md)                                  | [`background_camera_feed_id`](class_environment.md#class_environment_property_background_camera_feed_id)                                       | ``1``                             |
| [`int`](class_int.md)                                  | [`background_canvas_max_layer`](class_environment.md#class_environment_property_background_canvas_max_layer)                                   | ``0``                             |
| [`Color`](class_color.md)                              | [`background_color`](class_environment.md#class_environment_property_background_color)                                                         | ``Color(0, 0, 0, 1)``             |
| [`float`](class_float.md)                              | [`background_energy_multiplier`](class_environment.md#class_environment_property_background_energy_multiplier)                                 | ``1.0``                           |
| [`float`](class_float.md)                              | [`background_intensity`](class_environment.md#class_environment_property_background_intensity)                                                 | ``30000.0``                       |
| [BGMode](#enum_environment_bgmode)                     | [`background_mode`](class_environment.md#class_environment_property_background_mode)                                                           | ``0``                             |
| [`float`](class_float.md)                              | [`fog_aerial_perspective`](class_environment.md#class_environment_property_fog_aerial_perspective)                                             | ``0.0``                           |
| [`float`](class_float.md)                              | [`fog_density`](class_environment.md#class_environment_property_fog_density)                                                                   | ``0.01``                          |
| [`float`](class_float.md)                              | [`fog_depth_begin`](class_environment.md#class_environment_property_fog_depth_begin)                                                           | ``10.0``                          |
| [`float`](class_float.md)                              | [`fog_depth_curve`](class_environment.md#class_environment_property_fog_depth_curve)                                                           | ``1.0``                           |
| [`float`](class_float.md)                              | [`fog_depth_end`](class_environment.md#class_environment_property_fog_depth_end)                                                               | ``100.0``                         |
| [`bool`](class_bool.md)                                | [`fog_enabled`](class_environment.md#class_environment_property_fog_enabled)                                                                   | ``false``                         |
| [`float`](class_float.md)                              | [`fog_height`](class_environment.md#class_environment_property_fog_height)                                                                     | ``0.0``                           |
| [`float`](class_float.md)                              | [`fog_height_density`](class_environment.md#class_environment_property_fog_height_density)                                                     | ``0.0``                           |
| [`Color`](class_color.md)                              | [`fog_light_color`](class_environment.md#class_environment_property_fog_light_color)                                                           | ``Color(0.518, 0.553, 0.608, 1)`` |
| [`float`](class_float.md)                              | [`fog_light_energy`](class_environment.md#class_environment_property_fog_light_energy)                                                         | ``1.0``                           |
| [FogMode](#enum_environment_fogmode)                   | [`fog_mode`](class_environment.md#class_environment_property_fog_mode)                                                                         | ``0``                             |
| [`float`](class_float.md)                              | [`fog_sky_affect`](class_environment.md#class_environment_property_fog_sky_affect)                                                             | ``1.0``                           |
| [`float`](class_float.md)                              | [`fog_sun_scatter`](class_environment.md#class_environment_property_fog_sun_scatter)                                                           | ``0.0``                           |
| [GlowBlendMode](#enum_environment_glowblendmode)       | [`glow_blend_mode`](class_environment.md#class_environment_property_glow_blend_mode)                                                           | ``2``                             |
| [`float`](class_float.md)                              | [`glow_bloom`](class_environment.md#class_environment_property_glow_bloom)                                                                     | ``0.0``                           |
| [`bool`](class_bool.md)                                | [`glow_enabled`](class_environment.md#class_environment_property_glow_enabled)                                                                 | ``false``                         |
| [`float`](class_float.md)                              | [`glow_hdr_luminance_cap`](class_environment.md#class_environment_property_glow_hdr_luminance_cap)                                             | ``12.0``                          |
| [`float`](class_float.md)                              | [`glow_hdr_scale`](class_environment.md#class_environment_property_glow_hdr_scale)                                                             | ``2.0``                           |
| [`float`](class_float.md)                              | [`glow_hdr_threshold`](class_environment.md#class_environment_property_glow_hdr_threshold)                                                     | ``1.0``                           |
| [`float`](class_float.md)                              | [`glow_intensity`](class_environment.md#class_environment_property_glow_intensity)                                                             | ``0.8``                           |
| [`float`](class_float.md)                              | [`glow_levels/1`](class_environment.md#class_environment_property_glow_levels/1)                                                               | ``0.0``                           |
| [`float`](class_float.md)                              | [`glow_levels/2`](class_environment.md#class_environment_property_glow_levels/2)                                                               | ``0.0``                           |
| [`float`](class_float.md)                              | [`glow_levels/3`](class_environment.md#class_environment_property_glow_levels/3)                                                               | ``1.0``                           |
| [`float`](class_float.md)                              | [`glow_levels/4`](class_environment.md#class_environment_property_glow_levels/4)                                                               | ``0.0``                           |
| [`float`](class_float.md)                              | [`glow_levels/5`](class_environment.md#class_environment_property_glow_levels/5)                                                               | ``1.0``                           |
| [`float`](class_float.md)                              | [`glow_levels/6`](class_environment.md#class_environment_property_glow_levels/6)                                                               | ``0.0``                           |
| [`float`](class_float.md)                              | [`glow_levels/7`](class_environment.md#class_environment_property_glow_levels/7)                                                               | ``0.0``                           |
| [`Texture`](class_texture.md)                          | [`glow_map`](class_environment.md#class_environment_property_glow_map)                                                                         |                                   |
| [`float`](class_float.md)                              | [`glow_map_strength`](class_environment.md#class_environment_property_glow_map_strength)                                                       | ``0.8``                           |
| [`float`](class_float.md)                              | [`glow_mix`](class_environment.md#class_environment_property_glow_mix)                                                                         | ``0.05``                          |
| [`bool`](class_bool.md)                                | [`glow_normalized`](class_environment.md#class_environment_property_glow_normalized)                                                           | ``false``                         |
| [`float`](class_float.md)                              | [`glow_strength`](class_environment.md#class_environment_property_glow_strength)                                                               | ``1.0``                           |
| [ReflectionSource](#enum_environment_reflectionsource) | [`reflected_light_source`](class_environment.md#class_environment_property_reflected_light_source)                                             | ``0``                             |
| [`float`](class_float.md)                              | [`sdfgi_bounce_feedback`](class_environment.md#class_environment_property_sdfgi_bounce_feedback)                                               | ``0.5``                           |
| [`float`](class_float.md)                              | [`sdfgi_cascade0_distance`](class_environment.md#class_environment_property_sdfgi_cascade0_distance)                                           | ``12.8``                          |
| [`int`](class_int.md)                                  | [`sdfgi_cascades`](class_environment.md#class_environment_property_sdfgi_cascades)                                                             | ``4``                             |
| [`bool`](class_bool.md)                                | [`sdfgi_enabled`](class_environment.md#class_environment_property_sdfgi_enabled)                                                               | ``false``                         |
| [`float`](class_float.md)                              | [`sdfgi_energy`](class_environment.md#class_environment_property_sdfgi_energy)                                                                 | ``1.0``                           |
| [`float`](class_float.md)                              | [`sdfgi_max_distance`](class_environment.md#class_environment_property_sdfgi_max_distance)                                                     | ``204.8``                         |
| [`float`](class_float.md)                              | [`sdfgi_min_cell_size`](class_environment.md#class_environment_property_sdfgi_min_cell_size)                                                   | ``0.2``                           |
| [`float`](class_float.md)                              | [`sdfgi_normal_bias`](class_environment.md#class_environment_property_sdfgi_normal_bias)                                                       | ``1.1``                           |
| [`float`](class_float.md)                              | [`sdfgi_probe_bias`](class_environment.md#class_environment_property_sdfgi_probe_bias)                                                         | ``1.1``                           |
| [`bool`](class_bool.md)                                | [`sdfgi_read_sky_light`](class_environment.md#class_environment_property_sdfgi_read_sky_light)                                                 | ``true``                          |
| [`bool`](class_bool.md)                                | [`sdfgi_use_occlusion`](class_environment.md#class_environment_property_sdfgi_use_occlusion)                                                   | ``false``                         |
| [SDFGIYScale](#enum_environment_sdfgiyscale)           | [`sdfgi_y_scale`](class_environment.md#class_environment_property_sdfgi_y_scale)                                                               | ``1``                             |
| [`Sky`](class_sky.md)                                  | [`sky`](class_environment.md#class_environment_property_sky)                                                                                   |                                   |
| [`float`](class_float.md)                              | [`sky_custom_fov`](class_environment.md#class_environment_property_sky_custom_fov)                                                             | ``0.0``                           |
| [`Vector3`](class_vector3.md)                          | [`sky_rotation`](class_environment.md#class_environment_property_sky_rotation)                                                                 | ``Vector3(0, 0, 0)``              |
| [`float`](class_float.md)                              | [`ssao_ao_channel_affect`](class_environment.md#class_environment_property_ssao_ao_channel_affect)                                             | ``0.0``                           |
| [`float`](class_float.md)                              | [`ssao_detail`](class_environment.md#class_environment_property_ssao_detail)                                                                   | ``0.5``                           |
| [`bool`](class_bool.md)                                | [`ssao_enabled`](class_environment.md#class_environment_property_ssao_enabled)                                                                 | ``false``                         |
| [`float`](class_float.md)                              | [`ssao_horizon`](class_environment.md#class_environment_property_ssao_horizon)                                                                 | ``0.06``                          |
| [`float`](class_float.md)                              | [`ssao_intensity`](class_environment.md#class_environment_property_ssao_intensity)                                                             | ``2.0``                           |
| [`float`](class_float.md)                              | [`ssao_light_affect`](class_environment.md#class_environment_property_ssao_light_affect)                                                       | ``0.0``                           |
| [`float`](class_float.md)                              | [`ssao_power`](class_environment.md#class_environment_property_ssao_power)                                                                     | ``1.5``                           |
| [`float`](class_float.md)                              | [`ssao_radius`](class_environment.md#class_environment_property_ssao_radius)                                                                   | ``1.0``                           |
| [`float`](class_float.md)                              | [`ssao_sharpness`](class_environment.md#class_environment_property_ssao_sharpness)                                                             | ``0.98``                          |
| [`bool`](class_bool.md)                                | [`ssil_enabled`](class_environment.md#class_environment_property_ssil_enabled)                                                                 | ``false``                         |
| [`float`](class_float.md)                              | [`ssil_intensity`](class_environment.md#class_environment_property_ssil_intensity)                                                             | ``1.0``                           |
| [`float`](class_float.md)                              | [`ssil_normal_rejection`](class_environment.md#class_environment_property_ssil_normal_rejection)                                               | ``1.0``                           |
| [`float`](class_float.md)                              | [`ssil_radius`](class_environment.md#class_environment_property_ssil_radius)                                                                   | ``5.0``                           |
| [`float`](class_float.md)                              | [`ssil_sharpness`](class_environment.md#class_environment_property_ssil_sharpness)                                                             | ``0.98``                          |
| [`float`](class_float.md)                              | [`ssr_depth_tolerance`](class_environment.md#class_environment_property_ssr_depth_tolerance)                                                   | ``0.2``                           |
| [`bool`](class_bool.md)                                | [`ssr_enabled`](class_environment.md#class_environment_property_ssr_enabled)                                                                   | ``false``                         |
| [`float`](class_float.md)                              | [`ssr_fade_in`](class_environment.md#class_environment_property_ssr_fade_in)                                                                   | ``0.15``                          |
| [`float`](class_float.md)                              | [`ssr_fade_out`](class_environment.md#class_environment_property_ssr_fade_out)                                                                 | ``2.0``                           |
| [`int`](class_int.md)                                  | [`ssr_max_steps`](class_environment.md#class_environment_property_ssr_max_steps)                                                               | ``64``                            |
| [`float`](class_float.md)                              | [`tonemap_exposure`](class_environment.md#class_environment_property_tonemap_exposure)                                                         | ``1.0``                           |
| [ToneMapper](#enum_environment_tonemapper)             | [`tonemap_mode`](class_environment.md#class_environment_property_tonemap_mode)                                                                 | ``0``                             |
| [`float`](class_float.md)                              | [`tonemap_white`](class_environment.md#class_environment_property_tonemap_white)                                                               | ``1.0``                           |
| [`Color`](class_color.md)                              | [`volumetric_fog_albedo`](class_environment.md#class_environment_property_volumetric_fog_albedo)                                               | ``Color(1, 1, 1, 1)``             |
| [`float`](class_float.md)                              | [`volumetric_fog_ambient_inject`](class_environment.md#class_environment_property_volumetric_fog_ambient_inject)                               | ``0.0``                           |
| [`float`](class_float.md)                              | [`volumetric_fog_anisotropy`](class_environment.md#class_environment_property_volumetric_fog_anisotropy)                                       | ``0.2``                           |
| [`float`](class_float.md)                              | [`volumetric_fog_density`](class_environment.md#class_environment_property_volumetric_fog_density)                                             | ``0.05``                          |
| [`float`](class_float.md)                              | [`volumetric_fog_detail_spread`](class_environment.md#class_environment_property_volumetric_fog_detail_spread)                                 | ``2.0``                           |
| [`Color`](class_color.md)                              | [`volumetric_fog_emission`](class_environment.md#class_environment_property_volumetric_fog_emission)                                           | ``Color(0, 0, 0, 1)``             |
| [`float`](class_float.md)                              | [`volumetric_fog_emission_energy`](class_environment.md#class_environment_property_volumetric_fog_emission_energy)                             | ``1.0``                           |
| [`bool`](class_bool.md)                                | [`volumetric_fog_enabled`](class_environment.md#class_environment_property_volumetric_fog_enabled)                                             | ``false``                         |
| [`float`](class_float.md)                              | [`volumetric_fog_gi_inject`](class_environment.md#class_environment_property_volumetric_fog_gi_inject)                                         | ``1.0``                           |
| [`float`](class_float.md)                              | [`volumetric_fog_length`](class_environment.md#class_environment_property_volumetric_fog_length)                                               | ``64.0``                          |
| [`float`](class_float.md)                              | [`volumetric_fog_sky_affect`](class_environment.md#class_environment_property_volumetric_fog_sky_affect)                                       | ``1.0``                           |
| [`float`](class_float.md)                              | [`volumetric_fog_temporal_reprojection_amount`](class_environment.md#class_environment_property_volumetric_fog_temporal_reprojection_amount)   | ``0.9``                           |
| [`bool`](class_bool.md)                                | [`volumetric_fog_temporal_reprojection_enabled`](class_environment.md#class_environment_property_volumetric_fog_temporal_reprojection_enabled) | ``true``                          |

## 方法

|||
|:-:|:--|
| [`float`](class_float.md) | [`get_glow_level`](class_environment.md#class_environment_method_get_glow_level) ( idx: [`int`](class_int.md) ) const[^const]                         |
| `void`                    | [`set_glow_level`](class_environment.md#class_environment_method_set_glow_level) ( idx: [`int`](class_int.md), intensity: [`float`](class_float.md) ) |

<!-- rst-class:: classref-section-separator -->

---

## 枚举

<div id="_class_enum_environment_bgmode"></div>

enum **BGMode**: <div id="enum_environment_bgmode"></div>

<div id="_class_environment_constant_bg_clear_color"></div>

[BGMode](#enum_environment_bgmode) **BG_CLEAR_COLOR** = ``0``

Clears the background using the clear color defined in [`ProjectSettings.rendering/environment/defaults/default_clear_color`](class_projectsettings.md#class_projectsettings_property_rendering/environment/defaults/default_clear_color).

<div id="_class_environment_constant_bg_color"></div>

[BGMode](#enum_environment_bgmode) **BG_COLOR** = ``1``

Clears the background using a custom clear color.

<div id="_class_environment_constant_bg_sky"></div>

[BGMode](#enum_environment_bgmode) **BG_SKY** = ``2``

Displays a user-defined sky in the background.

<div id="_class_environment_constant_bg_canvas"></div>

[BGMode](#enum_environment_bgmode) **BG_CANVAS** = ``3``

Displays a [`CanvasLayer`](class_canvaslayer.md) in the background.

<div id="_class_environment_constant_bg_keep"></div>

[BGMode](#enum_environment_bgmode) **BG_KEEP** = ``4``

Keeps on screen every pixel drawn in the background. This is the fastest background mode, but it can only be safely used in fully-interior scenes (no visible sky or sky reflections). If enabled in a scene where the background is visible, "ghost trail" artifacts will be visible when moving the camera.

<div id="_class_environment_constant_bg_camera_feed"></div>

[BGMode](#enum_environment_bgmode) **BG_CAMERA_FEED** = ``5``

Displays a camera feed in the background.

<div id="_class_environment_constant_bg_max"></div>

[BGMode](#enum_environment_bgmode) **BG_MAX** = ``6``

Represents the size of the [BGMode](#enum_environment_bgmode) enum.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_enum_environment_ambientsource"></div>

enum **AmbientSource**: <div id="enum_environment_ambientsource"></div>

<div id="_class_environment_constant_ambient_source_bg"></div>

[AmbientSource](#enum_environment_ambientsource) **AMBIENT_SOURCE_BG** = ``0``

Gather ambient light from whichever source is specified as the background.

<div id="_class_environment_constant_ambient_source_disabled"></div>

[AmbientSource](#enum_environment_ambientsource) **AMBIENT_SOURCE_DISABLED** = ``1``

Disable ambient light. This provides a slight performance boost over [`AMBIENT_SOURCE_SKY`](class_environment.md#class_environment_constant_ambient_source_sky).

<div id="_class_environment_constant_ambient_source_color"></div>

[AmbientSource](#enum_environment_ambientsource) **AMBIENT_SOURCE_COLOR** = ``2``

Specify a specific [`Color`](class_color.md) for ambient light. This provides a slight performance boost over [`AMBIENT_SOURCE_SKY`](class_environment.md#class_environment_constant_ambient_source_sky).

<div id="_class_environment_constant_ambient_source_sky"></div>

[AmbientSource](#enum_environment_ambientsource) **AMBIENT_SOURCE_SKY** = ``3``

Gather ambient light from the [`Sky`](class_sky.md) regardless of what the background is.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_enum_environment_reflectionsource"></div>

enum **ReflectionSource**: <div id="enum_environment_reflectionsource"></div>

<div id="_class_environment_constant_reflection_source_bg"></div>

[ReflectionSource](#enum_environment_reflectionsource) **REFLECTION_SOURCE_BG** = ``0``

Use the background for reflections.

<div id="_class_environment_constant_reflection_source_disabled"></div>

[ReflectionSource](#enum_environment_reflectionsource) **REFLECTION_SOURCE_DISABLED** = ``1``

Disable reflections. This provides a slight performance boost over other options.

<div id="_class_environment_constant_reflection_source_sky"></div>

[ReflectionSource](#enum_environment_reflectionsource) **REFLECTION_SOURCE_SKY** = ``2``

Use the [`Sky`](class_sky.md) for reflections regardless of what the background is.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_enum_environment_tonemapper"></div>

enum **ToneMapper**: <div id="enum_environment_tonemapper"></div>

<div id="_class_environment_constant_tone_mapper_linear"></div>

[ToneMapper](#enum_environment_tonemapper) **TONE_MAPPER_LINEAR** = ``0``

Linear tonemapper operator. Reads the linear data and passes it on unmodified. This can cause bright lighting to look blown out, with noticeable clipping in the output colors.

<div id="_class_environment_constant_tone_mapper_reinhardt"></div>

[ToneMapper](#enum_environment_tonemapper) **TONE_MAPPER_REINHARDT** = ``1``

Reinhard tonemapper operator. Performs a variation on rendered pixels' colors by this formula: `color = color * (1 + color / (white * white)) / (1 + color)`. This avoids clipping bright highlights, but the resulting image can look a bit dull. When [`tonemap_white`](class_environment.md#class_environment_property_tonemap_white) is left at the default value of `1.0` this is identical to [`TONE_MAPPER_LINEAR`](class_environment.md#class_environment_constant_tone_mapper_linear) while also being slightly less performant.

<div id="_class_environment_constant_tone_mapper_filmic"></div>

[ToneMapper](#enum_environment_tonemapper) **TONE_MAPPER_FILMIC** = ``2``

Filmic tonemapper operator. This avoids clipping bright highlights, with a resulting image that usually looks more vivid than [`TONE_MAPPER_REINHARDT`](class_environment.md#class_environment_constant_tone_mapper_reinhardt).

<div id="_class_environment_constant_tone_mapper_aces"></div>

[ToneMapper](#enum_environment_tonemapper) **TONE_MAPPER_ACES** = ``3``

Use the Academy Color Encoding System tonemapper. ACES is slightly more expensive than other options, but it handles bright lighting in a more realistic fashion by desaturating it as it becomes brighter. ACES typically has a more contrasted output compared to [`TONE_MAPPER_REINHARDT`](class_environment.md#class_environment_constant_tone_mapper_reinhardt) and [`TONE_MAPPER_FILMIC`](class_environment.md#class_environment_constant_tone_mapper_filmic).

 **Note:** This tonemapping operator is called "ACES Fitted" in Godot 3.x.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_enum_environment_glowblendmode"></div>

enum **GlowBlendMode**: <div id="enum_environment_glowblendmode"></div>

<div id="_class_environment_constant_glow_blend_mode_additive"></div>

[GlowBlendMode](#enum_environment_glowblendmode) **GLOW_BLEND_MODE_ADDITIVE** = ``0``

Additive glow blending mode. Mostly used for particles, glows (bloom), lens flare, bright sources.

<div id="_class_environment_constant_glow_blend_mode_screen"></div>

[GlowBlendMode](#enum_environment_glowblendmode) **GLOW_BLEND_MODE_SCREEN** = ``1``

Screen glow blending mode. Increases brightness, used frequently with bloom.

<div id="_class_environment_constant_glow_blend_mode_softlight"></div>

[GlowBlendMode](#enum_environment_glowblendmode) **GLOW_BLEND_MODE_SOFTLIGHT** = ``2``

Soft light glow blending mode. Modifies contrast, exposes shadows and highlights (vivid bloom).

<div id="_class_environment_constant_glow_blend_mode_replace"></div>

[GlowBlendMode](#enum_environment_glowblendmode) **GLOW_BLEND_MODE_REPLACE** = ``3``

Replace glow blending mode. Replaces all pixels' color by the glow value. This can be used to simulate a full-screen blur effect by tweaking the glow parameters to match the original image's brightness.

<div id="_class_environment_constant_glow_blend_mode_mix"></div>

[GlowBlendMode](#enum_environment_glowblendmode) **GLOW_BLEND_MODE_MIX** = ``4``

Mixes the glow with the underlying color to avoid increasing brightness as much while still maintaining a glow effect.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_enum_environment_fogmode"></div>

enum **FogMode**: <div id="enum_environment_fogmode"></div>

<div id="_class_environment_constant_fog_mode_exponential"></div>

[FogMode](#enum_environment_fogmode) **FOG_MODE_EXPONENTIAL** = ``0``

Use a physically-based fog model defined primarily by fog density.

<div id="_class_environment_constant_fog_mode_depth"></div>

[FogMode](#enum_environment_fogmode) **FOG_MODE_DEPTH** = ``1``

Use a simple fog model defined by start and end positions and a custom curve. While not physically accurate, this model can be useful when you need more artistic control.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_enum_environment_sdfgiyscale"></div>

enum **SDFGIYScale**: <div id="enum_environment_sdfgiyscale"></div>

<div id="_class_environment_constant_sdfgi_y_scale_50_percent"></div>

[SDFGIYScale](#enum_environment_sdfgiyscale) **SDFGI_Y_SCALE_50_PERCENT** = ``0``

Use 50% scale for SDFGI on the Y (vertical) axis. SDFGI cells will be twice as short as they are wide. This allows providing increased GI detail and reduced light leaking with thin floors and ceilings. This is usually the best choice for scenes that don't feature much verticality.

<div id="_class_environment_constant_sdfgi_y_scale_75_percent"></div>

[SDFGIYScale](#enum_environment_sdfgiyscale) **SDFGI_Y_SCALE_75_PERCENT** = ``1``

Use 75% scale for SDFGI on the Y (vertical) axis. This is a balance between the 50% and 100% SDFGI Y scales.

<div id="_class_environment_constant_sdfgi_y_scale_100_percent"></div>

[SDFGIYScale](#enum_environment_sdfgiyscale) **SDFGI_Y_SCALE_100_PERCENT** = ``2``

Use 100% scale for SDFGI on the Y (vertical) axis. SDFGI cells will be as tall as they are wide. This is usually the best choice for highly vertical scenes. The downside is that light leaking may become more noticeable with thin floors and ceilings.

<!-- rst-class:: classref-section-separator -->

---

## 属性说明

<div id="_class_environment_property_adjustment_brightness"></div>

[`float`](class_float.md) **adjustment_brightness** = ``1.0`` <div id="class_environment_property_adjustment_brightness"></div>

- `void` **set_adjustment_brightness** ( value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_adjustment_brightness** ( )

The global brightness value of the rendered scene. Effective only if [`adjustment_enabled`](class_environment.md#class_environment_property_adjustment_enabled) is `true`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_environment_property_adjustment_color_correction"></div>

[`Texture`](class_texture.md) **adjustment_color_correction** <div id="class_environment_property_adjustment_color_correction"></div>

- `void` **set_adjustment_color_correction** ( value: [`Texture`](class_texture.md) )
- [`Texture`](class_texture.md) **get_adjustment_color_correction** ( )

The [`Texture2D`](class_texture2d.md) or [`Texture3D`](class_texture3d.md) lookup table (LUT) to use for the built-in post-process color grading. Can use a [`GradientTexture1D`](class_gradienttexture1d.md) for a 1-dimensional LUT, or a [`Texture3D`](class_texture3d.md) for a more complex LUT. Effective only if [`adjustment_enabled`](class_environment.md#class_environment_property_adjustment_enabled) is `true`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_environment_property_adjustment_contrast"></div>

[`float`](class_float.md) **adjustment_contrast** = ``1.0`` <div id="class_environment_property_adjustment_contrast"></div>

- `void` **set_adjustment_contrast** ( value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_adjustment_contrast** ( )

The global contrast value of the rendered scene (default value is 1). Effective only if [`adjustment_enabled`](class_environment.md#class_environment_property_adjustment_enabled) is `true`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_environment_property_adjustment_enabled"></div>

[`bool`](class_bool.md) **adjustment_enabled** = ``false`` <div id="class_environment_property_adjustment_enabled"></div>

- `void` **set_adjustment_enabled** ( value: [`bool`](class_bool.md) )
- [`bool`](class_bool.md) **is_adjustment_enabled** ( )

If `true`, enables the `adjustment_*` properties provided by this resource. If `false`, modifications to the `adjustment_*` properties will have no effect on the rendered scene.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_environment_property_adjustment_saturation"></div>

[`float`](class_float.md) **adjustment_saturation** = ``1.0`` <div id="class_environment_property_adjustment_saturation"></div>

- `void` **set_adjustment_saturation** ( value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_adjustment_saturation** ( )

The global color saturation value of the rendered scene (default value is 1). Effective only if [`adjustment_enabled`](class_environment.md#class_environment_property_adjustment_enabled) is `true`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_environment_property_ambient_light_color"></div>

[`Color`](class_color.md) **ambient_light_color** = ``Color(0, 0, 0, 1)`` <div id="class_environment_property_ambient_light_color"></div>

- `void` **set_ambient_light_color** ( value: [`Color`](class_color.md) )
- [`Color`](class_color.md) **get_ambient_light_color** ( )

The ambient light's [`Color`](class_color.md). Only effective if [`ambient_light_sky_contribution`](class_environment.md#class_environment_property_ambient_light_sky_contribution) is lower than `1.0` (exclusive).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_environment_property_ambient_light_energy"></div>

[`float`](class_float.md) **ambient_light_energy** = ``1.0`` <div id="class_environment_property_ambient_light_energy"></div>

- `void` **set_ambient_light_energy** ( value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_ambient_light_energy** ( )

The ambient light's energy. The higher the value, the stronger the light. Only effective if [`ambient_light_sky_contribution`](class_environment.md#class_environment_property_ambient_light_sky_contribution) is lower than `1.0` (exclusive).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_environment_property_ambient_light_sky_contribution"></div>

[`float`](class_float.md) **ambient_light_sky_contribution** = ``1.0`` <div id="class_environment_property_ambient_light_sky_contribution"></div>

- `void` **set_ambient_light_sky_contribution** ( value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_ambient_light_sky_contribution** ( )

Defines the amount of light that the sky brings on the scene. A value of `0.0` means that the sky's light emission has no effect on the scene illumination, thus all ambient illumination is provided by the ambient light. On the contrary, a value of `1.0` means that *all* the light that affects the scene is provided by the sky, thus the ambient light parameter has no effect on the scene.

 **Note:** [`ambient_light_sky_contribution`](class_environment.md#class_environment_property_ambient_light_sky_contribution) is internally clamped between `0.0` and `1.0` (inclusive).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_environment_property_ambient_light_source"></div>

[AmbientSource](#enum_environment_ambientsource) **ambient_light_source** = ``0`` <div id="class_environment_property_ambient_light_source"></div>

- `void` **set_ambient_source** ( value: [AmbientSource](#enum_environment_ambientsource) )
- [AmbientSource](#enum_environment_ambientsource) **get_ambient_source** ( )

The ambient light source to use for rendering materials and global illumination.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_environment_property_background_camera_feed_id"></div>

[`int`](class_int.md) **background_camera_feed_id** = ``1`` <div id="class_environment_property_background_camera_feed_id"></div>

- `void` **set_camera_feed_id** ( value: [`int`](class_int.md) )
- [`int`](class_int.md) **get_camera_feed_id** ( )

The ID of the camera feed to show in the background.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_environment_property_background_canvas_max_layer"></div>

[`int`](class_int.md) **background_canvas_max_layer** = ``0`` <div id="class_environment_property_background_canvas_max_layer"></div>

- `void` **set_canvas_max_layer** ( value: [`int`](class_int.md) )
- [`int`](class_int.md) **get_canvas_max_layer** ( )

The maximum layer ID to display. Only effective when using the [`BG_CANVAS`](class_environment.md#class_environment_constant_bg_canvas) background mode.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_environment_property_background_color"></div>

[`Color`](class_color.md) **background_color** = ``Color(0, 0, 0, 1)`` <div id="class_environment_property_background_color"></div>

- `void` **set_bg_color** ( value: [`Color`](class_color.md) )
- [`Color`](class_color.md) **get_bg_color** ( )

The [`Color`](class_color.md) displayed for clear areas of the scene. Only effective when using the [`BG_COLOR`](class_environment.md#class_environment_constant_bg_color) background mode.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_environment_property_background_energy_multiplier"></div>

[`float`](class_float.md) **background_energy_multiplier** = ``1.0`` <div id="class_environment_property_background_energy_multiplier"></div>

- `void` **set_bg_energy_multiplier** ( value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_bg_energy_multiplier** ( )

Multiplier for background energy. Increase to make background brighter, decrease to make background dimmer.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_environment_property_background_intensity"></div>

[`float`](class_float.md) **background_intensity** = ``30000.0`` <div id="class_environment_property_background_intensity"></div>

- `void` **set_bg_intensity** ( value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_bg_intensity** ( )

Luminance of background measured in nits (candela per square meter). Only used when [`ProjectSettings.rendering/lights_and_shadows/use_physical_light_units`](class_projectsettings.md#class_projectsettings_property_rendering/lights_and_shadows/use_physical_light_units) is enabled. The default value is roughly equivalent to the sky at midday.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_environment_property_background_mode"></div>

[BGMode](#enum_environment_bgmode) **background_mode** = ``0`` <div id="class_environment_property_background_mode"></div>

- `void` **set_background** ( value: [BGMode](#enum_environment_bgmode) )
- [BGMode](#enum_environment_bgmode) **get_background** ( )

The background mode. See [BGMode](#enum_environment_bgmode) for possible values.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_environment_property_fog_aerial_perspective"></div>

[`float`](class_float.md) **fog_aerial_perspective** = ``0.0`` <div id="class_environment_property_fog_aerial_perspective"></div>

- `void` **set_fog_aerial_perspective** ( value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_fog_aerial_perspective** ( )

If set above `0.0` (exclusive), blends between the fog's color and the color of the background [`Sky`](class_sky.md), as read from the radiance cubemap. This has a small performance cost when set above `0.0`. Must have [`background_mode`](class_environment.md#class_environment_property_background_mode) set to [`BG_SKY`](class_environment.md#class_environment_constant_bg_sky).

This is useful to simulate [*aerial perspective*](https://en.wikipedia.org/wiki/Aerial_perspective) in large scenes with low density fog. However, it is not very useful for high-density fog, as the sky will shine through. When set to `1.0`, the fog color comes completely from the [`Sky`](class_sky.md). If set to `0.0`, aerial perspective is disabled.

Notice that this does not sample the [`Sky`](class_sky.md) directly, but rather the radiance cubemap. The cubemap is sampled at a mipmap level depending on the depth of the rendered pixel; the farther away, the higher the resolution of the sampled mipmap. This results in the actual color being a blurred version of the sky, with more blur closer to the camera. The highest mipmap resolution is used at a depth of [`Camera3D.far`](class_camera3d.md#class_camera3d_property_far).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_environment_property_fog_density"></div>

[`float`](class_float.md) **fog_density** = ``0.01`` <div id="class_environment_property_fog_density"></div>

- `void` **set_fog_density** ( value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_fog_density** ( )

The fog density to be used. This is demonstrated in different ways depending on the [`fog_mode`](class_environment.md#class_environment_property_fog_mode) mode chosen:

 **Exponential Fog Mode:** Higher values result in denser fog. The fog rendering is exponential like in real life.

 **Depth Fog mode:** The maximum intensity of the deep fog, effect will appear in the distance (relative to the camera). At `1.0` the fog will fully obscure the scene, at `0.0` the fog will not be visible.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_environment_property_fog_depth_begin"></div>

[`float`](class_float.md) **fog_depth_begin** = ``10.0`` <div id="class_environment_property_fog_depth_begin"></div>

- `void` **set_fog_depth_begin** ( value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_fog_depth_begin** ( )

The fog's depth starting distance from the camera. Only available when [`fog_mode`](class_environment.md#class_environment_property_fog_mode) is set to [`FOG_MODE_DEPTH`](class_environment.md#class_environment_constant_fog_mode_depth).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_environment_property_fog_depth_curve"></div>

[`float`](class_float.md) **fog_depth_curve** = ``1.0`` <div id="class_environment_property_fog_depth_curve"></div>

- `void` **set_fog_depth_curve** ( value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_fog_depth_curve** ( )

The fog depth's intensity curve. A number of presets are available in the Inspector by right-clicking the curve. Only available when [`fog_mode`](class_environment.md#class_environment_property_fog_mode) is set to [`FOG_MODE_DEPTH`](class_environment.md#class_environment_constant_fog_mode_depth).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_environment_property_fog_depth_end"></div>

[`float`](class_float.md) **fog_depth_end** = ``100.0`` <div id="class_environment_property_fog_depth_end"></div>

- `void` **set_fog_depth_end** ( value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_fog_depth_end** ( )

The fog's depth end distance from the camera. If this value is set to `0`, it will be equal to the current camera's [`Camera3D.far`](class_camera3d.md#class_camera3d_property_far) value. Only available when [`fog_mode`](class_environment.md#class_environment_property_fog_mode) is set to [`FOG_MODE_DEPTH`](class_environment.md#class_environment_constant_fog_mode_depth).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_environment_property_fog_enabled"></div>

[`bool`](class_bool.md) **fog_enabled** = ``false`` <div id="class_environment_property_fog_enabled"></div>

- `void` **set_fog_enabled** ( value: [`bool`](class_bool.md) )
- [`bool`](class_bool.md) **is_fog_enabled** ( )

If `true`, fog effects are enabled.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_environment_property_fog_height"></div>

[`float`](class_float.md) **fog_height** = ``0.0`` <div id="class_environment_property_fog_height"></div>

- `void` **set_fog_height** ( value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_fog_height** ( )

The height at which the height fog effect begins.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_environment_property_fog_height_density"></div>

[`float`](class_float.md) **fog_height_density** = ``0.0`` <div id="class_environment_property_fog_height_density"></div>

- `void` **set_fog_height_density** ( value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_fog_height_density** ( )

The density used to increase fog as height decreases. To make fog increase as height increases, use a negative value.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_environment_property_fog_light_color"></div>

[`Color`](class_color.md) **fog_light_color** = ``Color(0.518, 0.553, 0.608, 1)`` <div id="class_environment_property_fog_light_color"></div>

- `void` **set_fog_light_color** ( value: [`Color`](class_color.md) )
- [`Color`](class_color.md) **get_fog_light_color** ( )

The fog's color.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_environment_property_fog_light_energy"></div>

[`float`](class_float.md) **fog_light_energy** = ``1.0`` <div id="class_environment_property_fog_light_energy"></div>

- `void` **set_fog_light_energy** ( value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_fog_light_energy** ( )

The fog's brightness. Higher values result in brighter fog.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_environment_property_fog_mode"></div>

[FogMode](#enum_environment_fogmode) **fog_mode** = ``0`` <div id="class_environment_property_fog_mode"></div>

- `void` **set_fog_mode** ( value: [FogMode](#enum_environment_fogmode) )
- [FogMode](#enum_environment_fogmode) **get_fog_mode** ( )

The fog mode. See [FogMode](#enum_environment_fogmode) for possible values.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_environment_property_fog_sky_affect"></div>

[`float`](class_float.md) **fog_sky_affect** = ``1.0`` <div id="class_environment_property_fog_sky_affect"></div>

- `void` **set_fog_sky_affect** ( value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_fog_sky_affect** ( )

The factor to use when affecting the sky with non-volumetric fog. `1.0` means that fog can fully obscure the sky. Lower values reduce the impact of fog on sky rendering, with `0.0` not affecting sky rendering at all.

 **Note:** [`fog_sky_affect`](class_environment.md#class_environment_property_fog_sky_affect) has no visual effect if [`fog_aerial_perspective`](class_environment.md#class_environment_property_fog_aerial_perspective) is `1.0`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_environment_property_fog_sun_scatter"></div>

[`float`](class_float.md) **fog_sun_scatter** = ``0.0`` <div id="class_environment_property_fog_sun_scatter"></div>

- `void` **set_fog_sun_scatter** ( value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_fog_sun_scatter** ( )

If set above `0.0`, renders the scene's directional light(s) in the fog color depending on the view angle. This can be used to give the impression that the sun is "piercing" through the fog.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_environment_property_glow_blend_mode"></div>

[GlowBlendMode](#enum_environment_glowblendmode) **glow_blend_mode** = ``2`` <div id="class_environment_property_glow_blend_mode"></div>

- `void` **set_glow_blend_mode** ( value: [GlowBlendMode](#enum_environment_glowblendmode) )
- [GlowBlendMode](#enum_environment_glowblendmode) **get_glow_blend_mode** ( )

The glow blending mode.

 **Note:** [`glow_blend_mode`](class_environment.md#class_environment_property_glow_blend_mode) has no effect when using the Compatibility rendering method, due to this rendering method using a simpler glow implementation optimized for low-end devices.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_environment_property_glow_bloom"></div>

[`float`](class_float.md) **glow_bloom** = ``0.0`` <div id="class_environment_property_glow_bloom"></div>

- `void` **set_glow_bloom** ( value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_glow_bloom** ( )

The bloom's intensity. If set to a value higher than `0`, this will make glow visible in areas darker than the [`glow_hdr_threshold`](class_environment.md#class_environment_property_glow_hdr_threshold).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_environment_property_glow_enabled"></div>

[`bool`](class_bool.md) **glow_enabled** = ``false`` <div id="class_environment_property_glow_enabled"></div>

- `void` **set_glow_enabled** ( value: [`bool`](class_bool.md) )
- [`bool`](class_bool.md) **is_glow_enabled** ( )

If `true`, the glow effect is enabled. This simulates real world eye/camera behavior where bright pixels bleed onto surrounding pixels.

 **Note:** When using the Mobile rendering method, glow looks different due to the lower dynamic range available in the Mobile rendering method.

 **Note:** When using the Compatibility rendering method, glow uses a different implementation with some properties being unavailable and hidden from the inspector: `glow_levels/*`, [`glow_normalized`](class_environment.md#class_environment_property_glow_normalized), [`glow_strength`](class_environment.md#class_environment_property_glow_strength), [`glow_blend_mode`](class_environment.md#class_environment_property_glow_blend_mode), [`glow_mix`](class_environment.md#class_environment_property_glow_mix), [`glow_map`](class_environment.md#class_environment_property_glow_map), and [`glow_map_strength`](class_environment.md#class_environment_property_glow_map_strength). This implementation is optimized to run on low-end devices and is less flexible as a result.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_environment_property_glow_hdr_luminance_cap"></div>

[`float`](class_float.md) **glow_hdr_luminance_cap** = ``12.0`` <div id="class_environment_property_glow_hdr_luminance_cap"></div>

- `void` **set_glow_hdr_luminance_cap** ( value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_glow_hdr_luminance_cap** ( )

The higher threshold of the HDR glow. Areas brighter than this threshold will be clamped for the purposes of the glow effect.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_environment_property_glow_hdr_scale"></div>

[`float`](class_float.md) **glow_hdr_scale** = ``2.0`` <div id="class_environment_property_glow_hdr_scale"></div>

- `void` **set_glow_hdr_bleed_scale** ( value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_glow_hdr_bleed_scale** ( )

The bleed scale of the HDR glow.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_environment_property_glow_hdr_threshold"></div>

[`float`](class_float.md) **glow_hdr_threshold** = ``1.0`` <div id="class_environment_property_glow_hdr_threshold"></div>

- `void` **set_glow_hdr_bleed_threshold** ( value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_glow_hdr_bleed_threshold** ( )

The lower threshold of the HDR glow. When using the Mobile rendering method (which only supports a lower dynamic range up to `2.0`), this may need to be below `1.0` for glow to be visible. A value of `0.9` works well in this case. This value also needs to be decreased below `1.0` when using glow in 2D, as 2D rendering is performed in SDR.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_environment_property_glow_intensity"></div>

[`float`](class_float.md) **glow_intensity** = ``0.8`` <div id="class_environment_property_glow_intensity"></div>

- `void` **set_glow_intensity** ( value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_glow_intensity** ( )

The overall brightness multiplier of the glow effect. When using the Mobile rendering method (which only supports a lower dynamic range up to `2.0`), this should be increased to `1.5` to compensate.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_environment_property_glow_levels/1"></div>

[`float`](class_float.md) **glow_levels/1** = ``0.0`` <div id="class_environment_property_glow_levels/1"></div>

- `void` **set_glow_level** ( idx: [`int`](class_int.md), intensity: [`float`](class_float.md) )
- [`float`](class_float.md) **get_glow_level** ( idx: [`int`](class_int.md) ) const[^const]

The intensity of the 1st level of glow. This is the most "local" level (least blurry).

 **Note:** [`glow_levels/1`](class_environment.md#class_environment_property_glow_levels/1) has no effect when using the Compatibility rendering method, due to this rendering method using a simpler glow implementation optimized for low-end devices.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_environment_property_glow_levels/2"></div>

[`float`](class_float.md) **glow_levels/2** = ``0.0`` <div id="class_environment_property_glow_levels/2"></div>

- `void` **set_glow_level** ( idx: [`int`](class_int.md), intensity: [`float`](class_float.md) )
- [`float`](class_float.md) **get_glow_level** ( idx: [`int`](class_int.md) ) const[^const]

The intensity of the 2nd level of glow.

 **Note:** [`glow_levels/2`](class_environment.md#class_environment_property_glow_levels/2) has no effect when using the Compatibility rendering method, due to this rendering method using a simpler glow implementation optimized for low-end devices.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_environment_property_glow_levels/3"></div>

[`float`](class_float.md) **glow_levels/3** = ``1.0`` <div id="class_environment_property_glow_levels/3"></div>

- `void` **set_glow_level** ( idx: [`int`](class_int.md), intensity: [`float`](class_float.md) )
- [`float`](class_float.md) **get_glow_level** ( idx: [`int`](class_int.md) ) const[^const]

The intensity of the 3rd level of glow.

 **Note:** [`glow_levels/3`](class_environment.md#class_environment_property_glow_levels/3) has no effect when using the Compatibility rendering method, due to this rendering method using a simpler glow implementation optimized for low-end devices.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_environment_property_glow_levels/4"></div>

[`float`](class_float.md) **glow_levels/4** = ``0.0`` <div id="class_environment_property_glow_levels/4"></div>

- `void` **set_glow_level** ( idx: [`int`](class_int.md), intensity: [`float`](class_float.md) )
- [`float`](class_float.md) **get_glow_level** ( idx: [`int`](class_int.md) ) const[^const]

The intensity of the 4th level of glow.

 **Note:** [`glow_levels/4`](class_environment.md#class_environment_property_glow_levels/4) has no effect when using the Compatibility rendering method, due to this rendering method using a simpler glow implementation optimized for low-end devices.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_environment_property_glow_levels/5"></div>

[`float`](class_float.md) **glow_levels/5** = ``1.0`` <div id="class_environment_property_glow_levels/5"></div>

- `void` **set_glow_level** ( idx: [`int`](class_int.md), intensity: [`float`](class_float.md) )
- [`float`](class_float.md) **get_glow_level** ( idx: [`int`](class_int.md) ) const[^const]

The intensity of the 5th level of glow.

 **Note:** [`glow_levels/5`](class_environment.md#class_environment_property_glow_levels/5) has no effect when using the Compatibility rendering method, due to this rendering method using a simpler glow implementation optimized for low-end devices.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_environment_property_glow_levels/6"></div>

[`float`](class_float.md) **glow_levels/6** = ``0.0`` <div id="class_environment_property_glow_levels/6"></div>

- `void` **set_glow_level** ( idx: [`int`](class_int.md), intensity: [`float`](class_float.md) )
- [`float`](class_float.md) **get_glow_level** ( idx: [`int`](class_int.md) ) const[^const]

The intensity of the 6th level of glow.

 **Note:** [`glow_levels/6`](class_environment.md#class_environment_property_glow_levels/6) has no effect when using the Compatibility rendering method, due to this rendering method using a simpler glow implementation optimized for low-end devices.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_environment_property_glow_levels/7"></div>

[`float`](class_float.md) **glow_levels/7** = ``0.0`` <div id="class_environment_property_glow_levels/7"></div>

- `void` **set_glow_level** ( idx: [`int`](class_int.md), intensity: [`float`](class_float.md) )
- [`float`](class_float.md) **get_glow_level** ( idx: [`int`](class_int.md) ) const[^const]

The intensity of the 7th level of glow. This is the most "global" level (blurriest).

 **Note:** [`glow_levels/7`](class_environment.md#class_environment_property_glow_levels/7) has no effect when using the Compatibility rendering method, due to this rendering method using a simpler glow implementation optimized for low-end devices.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_environment_property_glow_map"></div>

[`Texture`](class_texture.md) **glow_map** <div id="class_environment_property_glow_map"></div>

- `void` **set_glow_map** ( value: [`Texture`](class_texture.md) )
- [`Texture`](class_texture.md) **get_glow_map** ( )

The texture that should be used as a glow map to *multiply* the resulting glow color according to [`glow_map_strength`](class_environment.md#class_environment_property_glow_map_strength). This can be used to create a "lens dirt" effect. The texture's RGB color channels are used for modulation, but the alpha channel is ignored.

 **Note:** The texture will be stretched to fit the screen. Therefore, it's recommended to use a texture with an aspect ratio that matches your project's base aspect ratio (typically 16:9).

 **Note:** [`glow_map`](class_environment.md#class_environment_property_glow_map) has no effect when using the Compatibility rendering method, due to this rendering method using a simpler glow implementation optimized for low-end devices.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_environment_property_glow_map_strength"></div>

[`float`](class_float.md) **glow_map_strength** = ``0.8`` <div id="class_environment_property_glow_map_strength"></div>

- `void` **set_glow_map_strength** ( value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_glow_map_strength** ( )

How strong of an impact the [`glow_map`](class_environment.md#class_environment_property_glow_map) should have on the overall glow effect. A strength of `0.0` means the glow map has no effect on the overall glow effect. A strength of `1.0` means the glow has a full effect on the overall glow effect (and can turn off glow entirely in specific areas of the screen if the glow map has black areas).

 **Note:** [`glow_map_strength`](class_environment.md#class_environment_property_glow_map_strength) has no effect when using the Compatibility rendering method, due to this rendering method using a simpler glow implementation optimized for low-end devices.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_environment_property_glow_mix"></div>

[`float`](class_float.md) **glow_mix** = ``0.05`` <div id="class_environment_property_glow_mix"></div>

- `void` **set_glow_mix** ( value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_glow_mix** ( )

When using the [`GLOW_BLEND_MODE_MIX`](class_environment.md#class_environment_constant_glow_blend_mode_mix) [`glow_blend_mode`](class_environment.md#class_environment_property_glow_blend_mode), this controls how much the source image is blended with the glow layer. A value of `0.0` makes the glow rendering invisible, while a value of `1.0` is equivalent to [`GLOW_BLEND_MODE_REPLACE`](class_environment.md#class_environment_constant_glow_blend_mode_replace).

 **Note:** [`glow_mix`](class_environment.md#class_environment_property_glow_mix) has no effect when using the Compatibility rendering method, due to this rendering method using a simpler glow implementation optimized for low-end devices.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_environment_property_glow_normalized"></div>

[`bool`](class_bool.md) **glow_normalized** = ``false`` <div id="class_environment_property_glow_normalized"></div>

- `void` **set_glow_normalized** ( value: [`bool`](class_bool.md) )
- [`bool`](class_bool.md) **is_glow_normalized** ( )

If `true`, glow levels will be normalized so that summed together their intensities equal `1.0`.

 **Note:** [`glow_normalized`](class_environment.md#class_environment_property_glow_normalized) has no effect when using the Compatibility rendering method, due to this rendering method using a simpler glow implementation optimized for low-end devices.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_environment_property_glow_strength"></div>

[`float`](class_float.md) **glow_strength** = ``1.0`` <div id="class_environment_property_glow_strength"></div>

- `void` **set_glow_strength** ( value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_glow_strength** ( )

The strength of the glow effect. This applies as the glow is blurred across the screen and increases the distance and intensity of the blur. When using the Mobile rendering method, this should be increased to compensate for the lower dynamic range.

 **Note:** [`glow_strength`](class_environment.md#class_environment_property_glow_strength) has no effect when using the Compatibility rendering method, due to this rendering method using a simpler glow implementation optimized for low-end devices.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_environment_property_reflected_light_source"></div>

[ReflectionSource](#enum_environment_reflectionsource) **reflected_light_source** = ``0`` <div id="class_environment_property_reflected_light_source"></div>

- `void` **set_reflection_source** ( value: [ReflectionSource](#enum_environment_reflectionsource) )
- [ReflectionSource](#enum_environment_reflectionsource) **get_reflection_source** ( )

The reflected (specular) light source.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_environment_property_sdfgi_bounce_feedback"></div>

[`float`](class_float.md) **sdfgi_bounce_feedback** = ``0.5`` <div id="class_environment_property_sdfgi_bounce_feedback"></div>

- `void` **set_sdfgi_bounce_feedback** ( value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_sdfgi_bounce_feedback** ( )

The energy multiplier applied to light every time it bounces from a surface when using SDFGI. Values greater than `0.0` will simulate multiple bounces, resulting in a more realistic appearance. Increasing [`sdfgi_bounce_feedback`](class_environment.md#class_environment_property_sdfgi_bounce_feedback) generally has no performance impact. See also [`sdfgi_energy`](class_environment.md#class_environment_property_sdfgi_energy).

 **Note:** Values greater than `0.5` can cause infinite feedback loops and should be avoided in scenes with bright materials.

 **Note:** If [`sdfgi_bounce_feedback`](class_environment.md#class_environment_property_sdfgi_bounce_feedback) is `0.0`, indirect lighting will not be represented in reflections as light will only bounce one time.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_environment_property_sdfgi_cascade0_distance"></div>

[`float`](class_float.md) **sdfgi_cascade0_distance** = ``12.8`` <div id="class_environment_property_sdfgi_cascade0_distance"></div>

- `void` **set_sdfgi_cascade0_distance** ( value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_sdfgi_cascade0_distance** ( )

**Note:** This property is linked to [`sdfgi_min_cell_size`](class_environment.md#class_environment_property_sdfgi_min_cell_size) and [`sdfgi_max_distance`](class_environment.md#class_environment_property_sdfgi_max_distance). Changing its value will automatically change those properties as well.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_environment_property_sdfgi_cascades"></div>

[`int`](class_int.md) **sdfgi_cascades** = ``4`` <div id="class_environment_property_sdfgi_cascades"></div>

- `void` **set_sdfgi_cascades** ( value: [`int`](class_int.md) )
- [`int`](class_int.md) **get_sdfgi_cascades** ( )

The number of cascades to use for SDFGI (between 1 and 8). A higher number of cascades allows displaying SDFGI further away while preserving detail up close, at the cost of performance. When using SDFGI on small-scale levels, [`sdfgi_cascades`](class_environment.md#class_environment_property_sdfgi_cascades) can often be decreased between `1` and `4` to improve performance.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_environment_property_sdfgi_enabled"></div>

[`bool`](class_bool.md) **sdfgi_enabled** = ``false`` <div id="class_environment_property_sdfgi_enabled"></div>

- `void` **set_sdfgi_enabled** ( value: [`bool`](class_bool.md) )
- [`bool`](class_bool.md) **is_sdfgi_enabled** ( )

If `true`, enables signed distance field global illumination for meshes that have their [`GeometryInstance3D.gi_mode`](class_geometryinstance3d.md#class_geometryinstance3d_property_gi_mode) set to [`GeometryInstance3D.GI_MODE_STATIC`](class_geometryinstance3d.md#class_geometryinstance3d_constant_gi_mode_static). SDFGI is a real-time global illumination technique that works well with procedurally generated and user-built levels, including in situations where geometry is created during gameplay. The signed distance field is automatically generated around the camera as it moves. Dynamic lights are supported, but dynamic occluders and emissive surfaces are not.

 **Note:** SDFGI is only supported in the Forward+ rendering method, not Mobile or Compatibility.

 **Performance:** SDFGI is relatively demanding on the GPU and is not suited to low-end hardware such as integrated graphics (consider [`LightmapGI`](class_lightmapgi.md) instead). To improve SDFGI performance, enable [`ProjectSettings.rendering/global_illumination/gi/use_half_resolution`](class_projectsettings.md#class_projectsettings_property_rendering/global_illumination/gi/use_half_resolution) in the Project Settings.

 **Note:** Meshes should have sufficiently thick walls to avoid light leaks (avoid one-sided walls). For interior levels, enclose your level geometry in a sufficiently large box and bridge the loops to close the mesh.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_environment_property_sdfgi_energy"></div>

[`float`](class_float.md) **sdfgi_energy** = ``1.0`` <div id="class_environment_property_sdfgi_energy"></div>

- `void` **set_sdfgi_energy** ( value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_sdfgi_energy** ( )

The energy multiplier to use for SDFGI. Higher values will result in brighter indirect lighting and reflections. See also [`sdfgi_bounce_feedback`](class_environment.md#class_environment_property_sdfgi_bounce_feedback).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_environment_property_sdfgi_max_distance"></div>

[`float`](class_float.md) **sdfgi_max_distance** = ``204.8`` <div id="class_environment_property_sdfgi_max_distance"></div>

- `void` **set_sdfgi_max_distance** ( value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_sdfgi_max_distance** ( )

The maximum distance at which SDFGI is visible. Beyond this distance, environment lighting or other sources of GI such as [`ReflectionProbe`](class_reflectionprobe.md) will be used as a fallback.

 **Note:** This property is linked to [`sdfgi_min_cell_size`](class_environment.md#class_environment_property_sdfgi_min_cell_size) and [`sdfgi_cascade0_distance`](class_environment.md#class_environment_property_sdfgi_cascade0_distance). Changing its value will automatically change those properties as well.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_environment_property_sdfgi_min_cell_size"></div>

[`float`](class_float.md) **sdfgi_min_cell_size** = ``0.2`` <div id="class_environment_property_sdfgi_min_cell_size"></div>

- `void` **set_sdfgi_min_cell_size** ( value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_sdfgi_min_cell_size** ( )

The cell size to use for the closest SDFGI cascade (in 3D units). Lower values allow SDFGI to be more precise up close, at the cost of making SDFGI updates more demanding. This can cause stuttering when the camera moves fast. Higher values allow SDFGI to cover more ground, while also reducing the performance impact of SDFGI updates.

 **Note:** This property is linked to [`sdfgi_max_distance`](class_environment.md#class_environment_property_sdfgi_max_distance) and [`sdfgi_cascade0_distance`](class_environment.md#class_environment_property_sdfgi_cascade0_distance). Changing its value will automatically change those properties as well.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_environment_property_sdfgi_normal_bias"></div>

[`float`](class_float.md) **sdfgi_normal_bias** = ``1.1`` <div id="class_environment_property_sdfgi_normal_bias"></div>

- `void` **set_sdfgi_normal_bias** ( value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_sdfgi_normal_bias** ( )

The normal bias to use for SDFGI probes. Increasing this value can reduce visible streaking artifacts on sloped surfaces, at the cost of increased light leaking.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_environment_property_sdfgi_probe_bias"></div>

[`float`](class_float.md) **sdfgi_probe_bias** = ``1.1`` <div id="class_environment_property_sdfgi_probe_bias"></div>

- `void` **set_sdfgi_probe_bias** ( value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_sdfgi_probe_bias** ( )

The constant bias to use for SDFGI probes. Increasing this value can reduce visible streaking artifacts on sloped surfaces, at the cost of increased light leaking.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_environment_property_sdfgi_read_sky_light"></div>

[`bool`](class_bool.md) **sdfgi_read_sky_light** = ``true`` <div id="class_environment_property_sdfgi_read_sky_light"></div>

- `void` **set_sdfgi_read_sky_light** ( value: [`bool`](class_bool.md) )
- [`bool`](class_bool.md) **is_sdfgi_reading_sky_light** ( )

If `true`, SDFGI takes the environment lighting into account. This should be set to `false` for interior scenes.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_environment_property_sdfgi_use_occlusion"></div>

[`bool`](class_bool.md) **sdfgi_use_occlusion** = ``false`` <div id="class_environment_property_sdfgi_use_occlusion"></div>

- `void` **set_sdfgi_use_occlusion** ( value: [`bool`](class_bool.md) )
- [`bool`](class_bool.md) **is_sdfgi_using_occlusion** ( )

If `true`, SDFGI uses an occlusion detection approach to reduce light leaking. Occlusion may however introduce dark blotches in certain spots, which may be undesired in mostly outdoor scenes. [`sdfgi_use_occlusion`](class_environment.md#class_environment_property_sdfgi_use_occlusion) has a performance impact and should only be enabled when needed.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_environment_property_sdfgi_y_scale"></div>

[SDFGIYScale](#enum_environment_sdfgiyscale) **sdfgi_y_scale** = ``1`` <div id="class_environment_property_sdfgi_y_scale"></div>

- `void` **set_sdfgi_y_scale** ( value: [SDFGIYScale](#enum_environment_sdfgiyscale) )
- [SDFGIYScale](#enum_environment_sdfgiyscale) **get_sdfgi_y_scale** ( )

The Y scale to use for SDFGI cells. Lower values will result in SDFGI cells being packed together more closely on the Y axis. This is used to balance between quality and covering a lot of vertical ground. [`sdfgi_y_scale`](class_environment.md#class_environment_property_sdfgi_y_scale) should be set depending on how vertical your scene is (and how fast your camera may move on the Y axis).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_environment_property_sky"></div>

[`Sky`](class_sky.md) **sky** <div id="class_environment_property_sky"></div>

- `void` **set_sky** ( value: [`Sky`](class_sky.md) )
- [`Sky`](class_sky.md) **get_sky** ( )

The [`Sky`](class_sky.md) resource used for this **Environment**.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_environment_property_sky_custom_fov"></div>

[`float`](class_float.md) **sky_custom_fov** = ``0.0`` <div id="class_environment_property_sky_custom_fov"></div>

- `void` **set_sky_custom_fov** ( value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_sky_custom_fov** ( )

If set to a value greater than `0.0`, overrides the field of view to use for sky rendering. If set to `0.0`, the same FOV as the current [`Camera3D`](class_camera3d.md) is used for sky rendering.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_environment_property_sky_rotation"></div>

[`Vector3`](class_vector3.md) **sky_rotation** = ``Vector3(0, 0, 0)`` <div id="class_environment_property_sky_rotation"></div>

- `void` **set_sky_rotation** ( value: [`Vector3`](class_vector3.md) )
- [`Vector3`](class_vector3.md) **get_sky_rotation** ( )

The rotation to use for sky rendering.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_environment_property_ssao_ao_channel_affect"></div>

[`float`](class_float.md) **ssao_ao_channel_affect** = ``0.0`` <div id="class_environment_property_ssao_ao_channel_affect"></div>

- `void` **set_ssao_ao_channel_affect** ( value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_ssao_ao_channel_affect** ( )

The screen-space ambient occlusion intensity on materials that have an AO texture defined. Values higher than `0` will make the SSAO effect visible in areas darkened by AO textures.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_environment_property_ssao_detail"></div>

[`float`](class_float.md) **ssao_detail** = ``0.5`` <div id="class_environment_property_ssao_detail"></div>

- `void` **set_ssao_detail** ( value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_ssao_detail** ( )

Sets the strength of the additional level of detail for the screen-space ambient occlusion effect. A high value makes the detail pass more prominent, but it may contribute to aliasing in your final image.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_environment_property_ssao_enabled"></div>

[`bool`](class_bool.md) **ssao_enabled** = ``false`` <div id="class_environment_property_ssao_enabled"></div>

- `void` **set_ssao_enabled** ( value: [`bool`](class_bool.md) )
- [`bool`](class_bool.md) **is_ssao_enabled** ( )

If `true`, the screen-space ambient occlusion effect is enabled. This darkens objects' corners and cavities to simulate ambient light not reaching the entire object as in real life. This works well for small, dynamic objects, but baked lighting or ambient occlusion textures will do a better job at displaying ambient occlusion on large static objects. Godot uses a form of SSAO called Adaptive Screen Space Ambient Occlusion which is itself a form of Horizon Based Ambient Occlusion.

 **Note:** SSAO is only supported in the Forward+ rendering method, not Mobile or Compatibility.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_environment_property_ssao_horizon"></div>

[`float`](class_float.md) **ssao_horizon** = ``0.06`` <div id="class_environment_property_ssao_horizon"></div>

- `void` **set_ssao_horizon** ( value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_ssao_horizon** ( )

The threshold for considering whether a given point on a surface is occluded or not represented as an angle from the horizon mapped into the `0.0-1.0` range. A value of `1.0` results in no occlusion.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_environment_property_ssao_intensity"></div>

[`float`](class_float.md) **ssao_intensity** = ``2.0`` <div id="class_environment_property_ssao_intensity"></div>

- `void` **set_ssao_intensity** ( value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_ssao_intensity** ( )

The primary screen-space ambient occlusion intensity. Acts as a multiplier for the screen-space ambient occlusion effect. A higher value results in darker occlusion.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_environment_property_ssao_light_affect"></div>

[`float`](class_float.md) **ssao_light_affect** = ``0.0`` <div id="class_environment_property_ssao_light_affect"></div>

- `void` **set_ssao_direct_light_affect** ( value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_ssao_direct_light_affect** ( )

The screen-space ambient occlusion intensity in direct light. In real life, ambient occlusion only applies to indirect light, which means its effects can't be seen in direct light. Values higher than `0` will make the SSAO effect visible in direct light.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_environment_property_ssao_power"></div>

[`float`](class_float.md) **ssao_power** = ``1.5`` <div id="class_environment_property_ssao_power"></div>

- `void` **set_ssao_power** ( value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_ssao_power** ( )

The distribution of occlusion. A higher value results in darker occlusion, similar to [`ssao_intensity`](class_environment.md#class_environment_property_ssao_intensity), but with a sharper falloff.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_environment_property_ssao_radius"></div>

[`float`](class_float.md) **ssao_radius** = ``1.0`` <div id="class_environment_property_ssao_radius"></div>

- `void` **set_ssao_radius** ( value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_ssao_radius** ( )

The distance at which objects can occlude each other when calculating screen-space ambient occlusion. Higher values will result in occlusion over a greater distance at the cost of performance and quality.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_environment_property_ssao_sharpness"></div>

[`float`](class_float.md) **ssao_sharpness** = ``0.98`` <div id="class_environment_property_ssao_sharpness"></div>

- `void` **set_ssao_sharpness** ( value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_ssao_sharpness** ( )

The amount that the screen-space ambient occlusion effect is allowed to blur over the edges of objects. Setting too high will result in aliasing around the edges of objects. Setting too low will make object edges appear blurry.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_environment_property_ssil_enabled"></div>

[`bool`](class_bool.md) **ssil_enabled** = ``false`` <div id="class_environment_property_ssil_enabled"></div>

- `void` **set_ssil_enabled** ( value: [`bool`](class_bool.md) )
- [`bool`](class_bool.md) **is_ssil_enabled** ( )

If `true`, the screen-space indirect lighting effect is enabled. Screen space indirect lighting is a form of indirect lighting that allows diffuse light to bounce between nearby objects. Screen-space indirect lighting works very similarly to screen-space ambient occlusion, in that it only affects a limited range. It is intended to be used along with a form of proper global illumination like SDFGI or [`VoxelGI`](class_voxelgi.md). Screen-space indirect lighting is not affected by individual light's [`Light3D.light_indirect_energy`](class_light3d.md#class_light3d_property_light_indirect_energy).

 **Note:** SSIL is only supported in the Forward+ rendering method, not Mobile or Compatibility.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_environment_property_ssil_intensity"></div>

[`float`](class_float.md) **ssil_intensity** = ``1.0`` <div id="class_environment_property_ssil_intensity"></div>

- `void` **set_ssil_intensity** ( value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_ssil_intensity** ( )

The brightness multiplier for the screen-space indirect lighting effect. A higher value will result in brighter light.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_environment_property_ssil_normal_rejection"></div>

[`float`](class_float.md) **ssil_normal_rejection** = ``1.0`` <div id="class_environment_property_ssil_normal_rejection"></div>

- `void` **set_ssil_normal_rejection** ( value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_ssil_normal_rejection** ( )

Amount of normal rejection used when calculating screen-space indirect lighting. Normal rejection uses the normal of a given sample point to reject samples that are facing away from the current pixel. Normal rejection is necessary to avoid light leaking when only one side of an object is illuminated. However, normal rejection can be disabled if light leaking is desirable, such as when the scene mostly contains emissive objects that emit light from faces that cannot be seen from the camera.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_environment_property_ssil_radius"></div>

[`float`](class_float.md) **ssil_radius** = ``5.0`` <div id="class_environment_property_ssil_radius"></div>

- `void` **set_ssil_radius** ( value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_ssil_radius** ( )

The distance that bounced lighting can travel when using the screen space indirect lighting effect. A larger value will result in light bouncing further in a scene, but may result in under-sampling artifacts which look like long spikes surrounding light sources.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_environment_property_ssil_sharpness"></div>

[`float`](class_float.md) **ssil_sharpness** = ``0.98`` <div id="class_environment_property_ssil_sharpness"></div>

- `void` **set_ssil_sharpness** ( value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_ssil_sharpness** ( )

The amount that the screen-space indirect lighting effect is allowed to blur over the edges of objects. Setting too high will result in aliasing around the edges of objects. Setting too low will make object edges appear blurry.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_environment_property_ssr_depth_tolerance"></div>

[`float`](class_float.md) **ssr_depth_tolerance** = ``0.2`` <div id="class_environment_property_ssr_depth_tolerance"></div>

- `void` **set_ssr_depth_tolerance** ( value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_ssr_depth_tolerance** ( )

The depth tolerance for screen-space reflections.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_environment_property_ssr_enabled"></div>

[`bool`](class_bool.md) **ssr_enabled** = ``false`` <div id="class_environment_property_ssr_enabled"></div>

- `void` **set_ssr_enabled** ( value: [`bool`](class_bool.md) )
- [`bool`](class_bool.md) **is_ssr_enabled** ( )

If `true`, screen-space reflections are enabled. Screen-space reflections are more accurate than reflections from [`VoxelGI`](class_voxelgi.md) s or [`ReflectionProbe`](class_reflectionprobe.md) s, but are slower and can't reflect surfaces occluded by others.

 **Note:** SSR is only supported in the Forward+ rendering method, not Mobile or Compatibility.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_environment_property_ssr_fade_in"></div>

[`float`](class_float.md) **ssr_fade_in** = ``0.15`` <div id="class_environment_property_ssr_fade_in"></div>

- `void` **set_ssr_fade_in** ( value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_ssr_fade_in** ( )

The fade-in distance for screen-space reflections. Affects the area from the reflected material to the screen-space reflection. Only positive values are valid (negative values will be clamped to `0.0`).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_environment_property_ssr_fade_out"></div>

[`float`](class_float.md) **ssr_fade_out** = ``2.0`` <div id="class_environment_property_ssr_fade_out"></div>

- `void` **set_ssr_fade_out** ( value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_ssr_fade_out** ( )

The fade-out distance for screen-space reflections. Affects the area from the screen-space reflection to the "global" reflection. Only positive values are valid (negative values will be clamped to `0.0`).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_environment_property_ssr_max_steps"></div>

[`int`](class_int.md) **ssr_max_steps** = ``64`` <div id="class_environment_property_ssr_max_steps"></div>

- `void` **set_ssr_max_steps** ( value: [`int`](class_int.md) )
- [`int`](class_int.md) **get_ssr_max_steps** ( )

The maximum number of steps for screen-space reflections. Higher values are slower.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_environment_property_tonemap_exposure"></div>

[`float`](class_float.md) **tonemap_exposure** = ``1.0`` <div id="class_environment_property_tonemap_exposure"></div>

- `void` **set_tonemap_exposure** ( value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_tonemap_exposure** ( )

The default exposure used for tonemapping. Higher values result in a brighter image. See also [`tonemap_white`](class_environment.md#class_environment_property_tonemap_white).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_environment_property_tonemap_mode"></div>

[ToneMapper](#enum_environment_tonemapper) **tonemap_mode** = ``0`` <div id="class_environment_property_tonemap_mode"></div>

- `void` **set_tonemapper** ( value: [ToneMapper](#enum_environment_tonemapper) )
- [ToneMapper](#enum_environment_tonemapper) **get_tonemapper** ( )

The tonemapping mode to use. Tonemapping is the process that "converts" HDR values to be suitable for rendering on an LDR display. (Godot doesn't support rendering on HDR displays yet.)

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_environment_property_tonemap_white"></div>

[`float`](class_float.md) **tonemap_white** = ``1.0`` <div id="class_environment_property_tonemap_white"></div>

- `void` **set_tonemap_white** ( value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_tonemap_white** ( )

The white reference value for tonemapping (also called "whitepoint"). Higher values can make highlights look less blown out, and will also slightly darken the whole scene as a result. Only effective if the [`tonemap_mode`](class_environment.md#class_environment_property_tonemap_mode) isn't set to [`TONE_MAPPER_LINEAR`](class_environment.md#class_environment_constant_tone_mapper_linear). See also [`tonemap_exposure`](class_environment.md#class_environment_property_tonemap_exposure).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_environment_property_volumetric_fog_albedo"></div>

[`Color`](class_color.md) **volumetric_fog_albedo** = ``Color(1, 1, 1, 1)`` <div id="class_environment_property_volumetric_fog_albedo"></div>

- `void` **set_volumetric_fog_albedo** ( value: [`Color`](class_color.md) )
- [`Color`](class_color.md) **get_volumetric_fog_albedo** ( )

The [`Color`](class_color.md) of the volumetric fog when interacting with lights. Mist and fog have an albedo close to `Color(1, 1, 1, 1)` while smoke has a darker albedo.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_environment_property_volumetric_fog_ambient_inject"></div>

[`float`](class_float.md) **volumetric_fog_ambient_inject** = ``0.0`` <div id="class_environment_property_volumetric_fog_ambient_inject"></div>

- `void` **set_volumetric_fog_ambient_inject** ( value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_volumetric_fog_ambient_inject** ( )

Scales the strength of ambient light used in the volumetric fog. A value of `0.0` means that ambient light will not impact the volumetric fog. [`volumetric_fog_ambient_inject`](class_environment.md#class_environment_property_volumetric_fog_ambient_inject) has a small performance cost when set above `0.0`.

 **Note:** This has no visible effect if [`volumetric_fog_density`](class_environment.md#class_environment_property_volumetric_fog_density) is `0.0` or if [`volumetric_fog_albedo`](class_environment.md#class_environment_property_volumetric_fog_albedo) is a fully black color.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_environment_property_volumetric_fog_anisotropy"></div>

[`float`](class_float.md) **volumetric_fog_anisotropy** = ``0.2`` <div id="class_environment_property_volumetric_fog_anisotropy"></div>

- `void` **set_volumetric_fog_anisotropy** ( value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_volumetric_fog_anisotropy** ( )

The direction of scattered light as it goes through the volumetric fog. A value close to `1.0` means almost all light is scattered forward. A value close to `0.0` means light is scattered equally in all directions. A value close to `-1.0` means light is scattered mostly backward. Fog and mist scatter light slightly forward, while smoke scatters light equally in all directions.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_environment_property_volumetric_fog_density"></div>

[`float`](class_float.md) **volumetric_fog_density** = ``0.05`` <div id="class_environment_property_volumetric_fog_density"></div>

- `void` **set_volumetric_fog_density** ( value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_volumetric_fog_density** ( )

The base *exponential* density of the volumetric fog. Set this to the lowest density you want to have globally. [`FogVolume`](class_fogvolume.md) s can be used to add to or subtract from this density in specific areas. Fog rendering is exponential as in real life.

A value of `0.0` disables global volumetric fog while allowing [`FogVolume`](class_fogvolume.md) s to display volumetric fog in specific areas.

To make volumetric fog work as a volumetric *lighting* solution, set [`volumetric_fog_density`](class_environment.md#class_environment_property_volumetric_fog_density) to the lowest non-zero value (`0.0001`) then increase lights' [`Light3D.light_volumetric_fog_energy`](class_light3d.md#class_light3d_property_light_volumetric_fog_energy) to values between `10000` and `100000` to compensate for the very low density.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_environment_property_volumetric_fog_detail_spread"></div>

[`float`](class_float.md) **volumetric_fog_detail_spread** = ``2.0`` <div id="class_environment_property_volumetric_fog_detail_spread"></div>

- `void` **set_volumetric_fog_detail_spread** ( value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_volumetric_fog_detail_spread** ( )

The distribution of size down the length of the froxel buffer. A higher value compresses the froxels closer to the camera and places more detail closer to the camera.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_environment_property_volumetric_fog_emission"></div>

[`Color`](class_color.md) **volumetric_fog_emission** = ``Color(0, 0, 0, 1)`` <div id="class_environment_property_volumetric_fog_emission"></div>

- `void` **set_volumetric_fog_emission** ( value: [`Color`](class_color.md) )
- [`Color`](class_color.md) **get_volumetric_fog_emission** ( )

The emitted light from the volumetric fog. Even with emission, volumetric fog will not cast light onto other surfaces. Emission is useful to establish an ambient color. As the volumetric fog effect uses single-scattering only, fog tends to need a little bit of emission to soften the harsh shadows.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_environment_property_volumetric_fog_emission_energy"></div>

[`float`](class_float.md) **volumetric_fog_emission_energy** = ``1.0`` <div id="class_environment_property_volumetric_fog_emission_energy"></div>

- `void` **set_volumetric_fog_emission_energy** ( value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_volumetric_fog_emission_energy** ( )

The brightness of the emitted light from the volumetric fog.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_environment_property_volumetric_fog_enabled"></div>

[`bool`](class_bool.md) **volumetric_fog_enabled** = ``false`` <div id="class_environment_property_volumetric_fog_enabled"></div>

- `void` **set_volumetric_fog_enabled** ( value: [`bool`](class_bool.md) )
- [`bool`](class_bool.md) **is_volumetric_fog_enabled** ( )

Enables the volumetric fog effect. Volumetric fog uses a screen-aligned froxel buffer to calculate accurate volumetric scattering in the short to medium range. Volumetric fog interacts with [`FogVolume`](class_fogvolume.md) s and lights to calculate localized and global fog. Volumetric fog uses a PBR single-scattering model based on extinction, scattering, and emission which it exposes to users as density, albedo, and emission.

 **Note:** Volumetric fog is only supported in the Forward+ rendering method, not Mobile or Compatibility.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_environment_property_volumetric_fog_gi_inject"></div>

[`float`](class_float.md) **volumetric_fog_gi_inject** = ``1.0`` <div id="class_environment_property_volumetric_fog_gi_inject"></div>

- `void` **set_volumetric_fog_gi_inject** ( value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_volumetric_fog_gi_inject** ( )

Scales the strength of Global Illumination used in the volumetric fog's albedo color. A value of `0.0` means that Global Illumination will not impact the volumetric fog. [`volumetric_fog_gi_inject`](class_environment.md#class_environment_property_volumetric_fog_gi_inject) has a small performance cost when set above `0.0`.

 **Note:** This has no visible effect if [`volumetric_fog_density`](class_environment.md#class_environment_property_volumetric_fog_density) is `0.0` or if [`volumetric_fog_albedo`](class_environment.md#class_environment_property_volumetric_fog_albedo) is a fully black color.

 **Note:** Only [`VoxelGI`](class_voxelgi.md) and SDFGI ([`sdfgi_enabled`](class_environment.md#class_environment_property_sdfgi_enabled)) are taken into account when using [`volumetric_fog_gi_inject`](class_environment.md#class_environment_property_volumetric_fog_gi_inject). Global illumination from [`LightmapGI`](class_lightmapgi.md), [`ReflectionProbe`](class_reflectionprobe.md) and SSIL (see [`ssil_enabled`](class_environment.md#class_environment_property_ssil_enabled)) will be ignored by volumetric fog.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_environment_property_volumetric_fog_length"></div>

[`float`](class_float.md) **volumetric_fog_length** = ``64.0`` <div id="class_environment_property_volumetric_fog_length"></div>

- `void` **set_volumetric_fog_length** ( value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_volumetric_fog_length** ( )

The distance over which the volumetric fog is computed. Increase to compute fog over a greater range, decrease to add more detail when a long range is not needed. For best quality fog, keep this as low as possible. See also [`ProjectSettings.rendering/environment/volumetric_fog/volume_depth`](class_projectsettings.md#class_projectsettings_property_rendering/environment/volumetric_fog/volume_depth).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_environment_property_volumetric_fog_sky_affect"></div>

[`float`](class_float.md) **volumetric_fog_sky_affect** = ``1.0`` <div id="class_environment_property_volumetric_fog_sky_affect"></div>

- `void` **set_volumetric_fog_sky_affect** ( value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_volumetric_fog_sky_affect** ( )

The factor to use when affecting the sky with volumetric fog. `1.0` means that volumetric fog can fully obscure the sky. Lower values reduce the impact of volumetric fog on sky rendering, with `0.0` not affecting sky rendering at all.

 **Note:** [`volumetric_fog_sky_affect`](class_environment.md#class_environment_property_volumetric_fog_sky_affect) also affects [`FogVolume`](class_fogvolume.md) s, even if [`volumetric_fog_density`](class_environment.md#class_environment_property_volumetric_fog_density) is `0.0`. If you notice [`FogVolume`](class_fogvolume.md) s are disappearing when looking towards the sky, set [`volumetric_fog_sky_affect`](class_environment.md#class_environment_property_volumetric_fog_sky_affect) to `1.0`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_environment_property_volumetric_fog_temporal_reprojection_amount"></div>

[`float`](class_float.md) **volumetric_fog_temporal_reprojection_amount** = ``0.9`` <div id="class_environment_property_volumetric_fog_temporal_reprojection_amount"></div>

- `void` **set_volumetric_fog_temporal_reprojection_amount** ( value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_volumetric_fog_temporal_reprojection_amount** ( )

The amount by which to blend the last frame with the current frame. A higher number results in smoother volumetric fog, but makes "ghosting" much worse. A lower value reduces ghosting but can result in the per-frame temporal jitter becoming visible.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_environment_property_volumetric_fog_temporal_reprojection_enabled"></div>

[`bool`](class_bool.md) **volumetric_fog_temporal_reprojection_enabled** = ``true`` <div id="class_environment_property_volumetric_fog_temporal_reprojection_enabled"></div>

- `void` **set_volumetric_fog_temporal_reprojection_enabled** ( value: [`bool`](class_bool.md) )
- [`bool`](class_bool.md) **is_volumetric_fog_temporal_reprojection_enabled** ( )

Enables temporal reprojection in the volumetric fog. Temporal reprojection blends the current frame's volumetric fog with the last frame's volumetric fog to smooth out jagged edges. The performance cost is minimal; however, it leads to moving [`FogVolume`](class_fogvolume.md) s and [`Light3D`](class_light3d.md) s "ghosting" and leaving a trail behind them. When temporal reprojection is enabled, try to avoid moving [`FogVolume`](class_fogvolume.md) s or [`Light3D`](class_light3d.md) s too fast. Short-lived dynamic lighting effects should have [`Light3D.light_volumetric_fog_energy`](class_light3d.md#class_light3d_property_light_volumetric_fog_energy) set to `0.0` to avoid ghosting.

<!-- rst-class:: classref-section-separator -->

---

## 方法说明

<div id="_class_environment_method_get_glow_level"></div>

[`float`](class_float.md) **get_glow_level** ( idx: [`int`](class_int.md) ) const[^const]<div id="class_environment_method_get_glow_level"></div>

Returns the intensity of the glow level `idx`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_environment_method_set_glow_level"></div>

`void` **set_glow_level** ( idx: [`int`](class_int.md), intensity: [`float`](class_float.md) )<div id="class_environment_method_set_glow_level"></div>

Sets the intensity of the glow level `idx`. A value above `0.0` enables the level. Each level relies on the previous level. This means that enabling higher glow levels will slow down the glow effect rendering, even if previous levels aren't enabled.

[^virtual]: 本方法通常需要用户覆盖才能生效。
[^const]: 本方法无副作用，不会修改该实例的任何成员变量。
[^vararg]: 本方法除了能接受在此处描述的参数外，还能够继续接受任意数量的参数。
[^constructor]: 本方法用于构造某个类型。
[^static]: 调用本方法无需实例，可直接使用类名进行调用。
[^operator]: 本方法描述的是使用本类型作为左操作数的有效运算符。
[^bitfield]: 这个值是由下列位标志构成位掩码的整数。
[^void]: 无返回值。
