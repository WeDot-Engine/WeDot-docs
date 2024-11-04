<!-- ⚠ 请勿编辑本文件 ⚠ -->
<!-- 本文档使用脚本从 WeDot 引擎源码仓库生成。 -->
<!-- 生成脚本：https://github.com/WeDot-Engine/WeDot/tree/4.3/doc/tools/make_md.py； -->
<!-- 原文件：https://github.com/WeDot-Engine/WeDot/tree/4.3/doc/classes/LightmapGI.xml。 -->

<div id="_class_lightmapgi"></div>

# LightmapGI

**继承：** [`VisualInstance3D`](class_visualinstance3d.md) **<** [`Node3D`](class_node3d.md) **<** [`Node`](class_node.md) **<** [`Object`](class_object.md)

Computes and stores baked lightmaps for fast global illumination.

## 描述

The **LightmapGI** node is used to compute and store baked lightmaps. Lightmaps are used to provide high-quality indirect lighting with very little light leaking. **LightmapGI** can also provide rough reflections using spherical harmonics if [`directional`](#class_lightmapgi_property_directional) is enabled. Dynamic objects can receive indirect lighting thanks to *light probes*, which can be automatically placed by setting [`generate_probes_subdiv`](#class_lightmapgi_property_generate_probes_subdiv) to a value other than [`GENERATE_PROBES_DISABLED`](#class_lightmapgi_constant_generate_probes_disabled). Additional lightmap probes can also be added by creating [`LightmapProbe`](class_lightmapprobe.md) nodes. The downside is that lightmaps are fully static and cannot be baked in an exported project. Baking a **LightmapGI** node is also slower compared to [`VoxelGI`](class_voxelgi.md).

 **Procedural generation:** Lightmap baking functionality is only available in the editor. This means **LightmapGI** is not suited to procedurally generated or user-built levels. For procedurally generated or user-built levels, use [`VoxelGI`](class_voxelgi.md) or SDFGI instead (see [`Environment.sdfgi_enabled`](#class_environment_property_sdfgi_enabled)).

 **Performance:** **LightmapGI** provides the best possible run-time performance for global illumination. It is suitable for low-end hardware including integrated graphics and mobile devices.

 **Note:** Due to how lightmaps work, most properties only have a visible effect once lightmaps are baked again.

 **Note:** Lightmap baking on [`CSGShape3D`](class_csgshape3d.md) s and [`PrimitiveMesh`](class_primitivemesh.md) es is not supported, as these cannot store UV2 data required for baking.

 **Note:** If no custom lightmappers are installed, **LightmapGI** can only be baked from devices that support the Forward+ or Mobile rendering backends.

## 属性

| [`float`](class_float.md)                           | [`bias`](#class_lightmapgi_property_bias)                                           | ``0.0005`` |
| [`float`](class_float.md)                           | [`bounce_indirect_energy`](#class_lightmapgi_property_bounce_indirect_energy)       | ``1.0``    |
| [`int`](class_int.md)                               | [`bounces`](#class_lightmapgi_property_bounces)                                     | ``3``      |
| [`CameraAttributes`](class_cameraattributes.md)     | [`camera_attributes`](#class_lightmapgi_property_camera_attributes)                 |            |
| [`int`](class_int.md)                               | [`denoiser_range`](#class_lightmapgi_property_denoiser_range)                       | ``10``     |
| [`float`](class_float.md)                           | [`denoiser_strength`](#class_lightmapgi_property_denoiser_strength)                 | ``0.1``    |
| [`bool`](class_bool.md)                             | [`directional`](#class_lightmapgi_property_directional)                             | ``false``  |
| [`Color`](class_color.md)                           | [`environment_custom_color`](#class_lightmapgi_property_environment_custom_color)   |            |
| [`float`](class_float.md)                           | [`environment_custom_energy`](#class_lightmapgi_property_environment_custom_energy) |            |
| [`Sky`](class_sky.md)                               | [`environment_custom_sky`](#class_lightmapgi_property_environment_custom_sky)       |            |
| [EnvironmentMode](#enum_lightmapgi_environmentmode) | [`environment_mode`](#class_lightmapgi_property_environment_mode)                   | ``1``      |
| [GenerateProbes](#enum_lightmapgi_generateprobes)   | [`generate_probes_subdiv`](#class_lightmapgi_property_generate_probes_subdiv)       | ``2``      |
| [`bool`](class_bool.md)                             | [`interior`](#class_lightmapgi_property_interior)                                   | ``false``  |
| [`LightmapGIData`](class_lightmapgidata.md)         | [`light_data`](#class_lightmapgi_property_light_data)                               |            |
| [`int`](class_int.md)                               | [`max_texture_size`](#class_lightmapgi_property_max_texture_size)                   | ``16384``  |
| [BakeQuality](#enum_lightmapgi_bakequality)         | [`quality`](#class_lightmapgi_property_quality)                                     | ``1``      |
| [`float`](class_float.md)                           | [`texel_scale`](#class_lightmapgi_property_texel_scale)                             | ``1.0``    |
| [`bool`](class_bool.md)                             | [`use_denoiser`](#class_lightmapgi_property_use_denoiser)                           | ``true``   |
| [`bool`](class_bool.md)                             | [`use_texture_for_bounces`](#class_lightmapgi_property_use_texture_for_bounces)     | ``true``   |

<!-- rst-class:: classref-section-separator -->

---

## 枚举

<div id="_class_enum_lightmapgi_bakequality"></div>

enum **BakeQuality**: <div id="enum_lightmapgi_bakequality"></div>

<div id="_class_lightmapgi_constant_bake_quality_low"></div>

[BakeQuality](#enum_lightmapgi_bakequality) **BAKE_QUALITY_LOW** = ``0``

Low bake quality (fastest bake times). The quality of this preset can be adjusted by changing [`ProjectSettings.rendering/lightmapping/bake_quality/low_quality_ray_count`](#class_projectsettings_property_rendering/lightmapping/bake_quality/low_quality_ray_count) and [`ProjectSettings.rendering/lightmapping/bake_quality/low_quality_probe_ray_count`](#class_projectsettings_property_rendering/lightmapping/bake_quality/low_quality_probe_ray_count).

<div id="_class_lightmapgi_constant_bake_quality_medium"></div>

[BakeQuality](#enum_lightmapgi_bakequality) **BAKE_QUALITY_MEDIUM** = ``1``

Medium bake quality (fast bake times). The quality of this preset can be adjusted by changing [`ProjectSettings.rendering/lightmapping/bake_quality/medium_quality_ray_count`](#class_projectsettings_property_rendering/lightmapping/bake_quality/medium_quality_ray_count) and [`ProjectSettings.rendering/lightmapping/bake_quality/medium_quality_probe_ray_count`](#class_projectsettings_property_rendering/lightmapping/bake_quality/medium_quality_probe_ray_count).

<div id="_class_lightmapgi_constant_bake_quality_high"></div>

[BakeQuality](#enum_lightmapgi_bakequality) **BAKE_QUALITY_HIGH** = ``2``

High bake quality (slow bake times). The quality of this preset can be adjusted by changing [`ProjectSettings.rendering/lightmapping/bake_quality/high_quality_ray_count`](#class_projectsettings_property_rendering/lightmapping/bake_quality/high_quality_ray_count) and [`ProjectSettings.rendering/lightmapping/bake_quality/high_quality_probe_ray_count`](#class_projectsettings_property_rendering/lightmapping/bake_quality/high_quality_probe_ray_count).

<div id="_class_lightmapgi_constant_bake_quality_ultra"></div>

[BakeQuality](#enum_lightmapgi_bakequality) **BAKE_QUALITY_ULTRA** = ``3``

Highest bake quality (slowest bake times). The quality of this preset can be adjusted by changing [`ProjectSettings.rendering/lightmapping/bake_quality/ultra_quality_ray_count`](#class_projectsettings_property_rendering/lightmapping/bake_quality/ultra_quality_ray_count) and [`ProjectSettings.rendering/lightmapping/bake_quality/ultra_quality_probe_ray_count`](#class_projectsettings_property_rendering/lightmapping/bake_quality/ultra_quality_probe_ray_count).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_enum_lightmapgi_generateprobes"></div>

enum **GenerateProbes**: <div id="enum_lightmapgi_generateprobes"></div>

<div id="_class_lightmapgi_constant_generate_probes_disabled"></div>

[GenerateProbes](#enum_lightmapgi_generateprobes) **GENERATE_PROBES_DISABLED** = ``0``

Don't generate lightmap probes for lighting dynamic objects.

<div id="_class_lightmapgi_constant_generate_probes_subdiv_4"></div>

[GenerateProbes](#enum_lightmapgi_generateprobes) **GENERATE_PROBES_SUBDIV_4** = ``1``

Lowest level of subdivision (fastest bake times, smallest file sizes).

<div id="_class_lightmapgi_constant_generate_probes_subdiv_8"></div>

[GenerateProbes](#enum_lightmapgi_generateprobes) **GENERATE_PROBES_SUBDIV_8** = ``2``

Low level of subdivision (fast bake times, small file sizes).

<div id="_class_lightmapgi_constant_generate_probes_subdiv_16"></div>

[GenerateProbes](#enum_lightmapgi_generateprobes) **GENERATE_PROBES_SUBDIV_16** = ``3``

High level of subdivision (slow bake times, large file sizes).

<div id="_class_lightmapgi_constant_generate_probes_subdiv_32"></div>

[GenerateProbes](#enum_lightmapgi_generateprobes) **GENERATE_PROBES_SUBDIV_32** = ``4``

Highest level of subdivision (slowest bake times, largest file sizes).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_enum_lightmapgi_bakeerror"></div>

enum **BakeError**: <div id="enum_lightmapgi_bakeerror"></div>

<div id="_class_lightmapgi_constant_bake_error_ok"></div>

[BakeError](#enum_lightmapgi_bakeerror) **BAKE_ERROR_OK** = ``0``

Lightmap baking was successful.

<div id="_class_lightmapgi_constant_bake_error_no_scene_root"></div>

[BakeError](#enum_lightmapgi_bakeerror) **BAKE_ERROR_NO_SCENE_ROOT** = ``1``

Lightmap baking failed because the root node for the edited scene could not be accessed.

<div id="_class_lightmapgi_constant_bake_error_foreign_data"></div>

[BakeError](#enum_lightmapgi_bakeerror) **BAKE_ERROR_FOREIGN_DATA** = ``2``

Lightmap baking failed as the lightmap data resource is embedded in a foreign resource.

<div id="_class_lightmapgi_constant_bake_error_no_lightmapper"></div>

[BakeError](#enum_lightmapgi_bakeerror) **BAKE_ERROR_NO_LIGHTMAPPER** = ``3``

Lightmap baking failed as there is no lightmapper available in this Godot build.

<div id="_class_lightmapgi_constant_bake_error_no_save_path"></div>

[BakeError](#enum_lightmapgi_bakeerror) **BAKE_ERROR_NO_SAVE_PATH** = ``4``

Lightmap baking failed as the [`LightmapGIData`](class_lightmapgidata.md) save path isn't configured in the resource.

<div id="_class_lightmapgi_constant_bake_error_no_meshes"></div>

[BakeError](#enum_lightmapgi_bakeerror) **BAKE_ERROR_NO_MESHES** = ``5``

Lightmap baking failed as there are no meshes whose [`GeometryInstance3D.gi_mode`](#class_geometryinstance3d_property_gi_mode) is [`GeometryInstance3D.GI_MODE_STATIC`](#class_geometryinstance3d_constant_gi_mode_static) and with valid UV2 mapping in the current scene. You may need to select 3D scenes in the Import dock and change their global illumination mode accordingly.

<div id="_class_lightmapgi_constant_bake_error_meshes_invalid"></div>

[BakeError](#enum_lightmapgi_bakeerror) **BAKE_ERROR_MESHES_INVALID** = ``6``

Lightmap baking failed as the lightmapper failed to analyze some of the meshes marked as static for baking.

<div id="_class_lightmapgi_constant_bake_error_cant_create_image"></div>

[BakeError](#enum_lightmapgi_bakeerror) **BAKE_ERROR_CANT_CREATE_IMAGE** = ``7``

Lightmap baking failed as the resulting image couldn't be saved or imported by Godot after it was saved.

<div id="_class_lightmapgi_constant_bake_error_user_aborted"></div>

[BakeError](#enum_lightmapgi_bakeerror) **BAKE_ERROR_USER_ABORTED** = ``8``

The user aborted the lightmap baking operation (typically by clicking the **Cancel** button in the progress dialog).

<div id="_class_lightmapgi_constant_bake_error_texture_size_too_small"></div>

[BakeError](#enum_lightmapgi_bakeerror) **BAKE_ERROR_TEXTURE_SIZE_TOO_SMALL** = ``9``

Lightmap baking failed as the maximum texture size is too small to fit some of the meshes marked for baking.

<div id="_class_lightmapgi_constant_bake_error_lightmap_too_small"></div>

[BakeError](#enum_lightmapgi_bakeerror) **BAKE_ERROR_LIGHTMAP_TOO_SMALL** = ``10``

Lightmap baking failed as the lightmap is too small.

<div id="_class_lightmapgi_constant_bake_error_atlas_too_small"></div>

[BakeError](#enum_lightmapgi_bakeerror) **BAKE_ERROR_ATLAS_TOO_SMALL** = ``11``

Lightmap baking failed as the lightmap was unable to fit into an atlas.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_enum_lightmapgi_environmentmode"></div>

enum **EnvironmentMode**: <div id="enum_lightmapgi_environmentmode"></div>

<div id="_class_lightmapgi_constant_environment_mode_disabled"></div>

[EnvironmentMode](#enum_lightmapgi_environmentmode) **ENVIRONMENT_MODE_DISABLED** = ``0``

Ignore environment lighting when baking lightmaps.

<div id="_class_lightmapgi_constant_environment_mode_scene"></div>

[EnvironmentMode](#enum_lightmapgi_environmentmode) **ENVIRONMENT_MODE_SCENE** = ``1``

Use the scene's environment lighting when baking lightmaps.

 **Note:** If baking lightmaps in a scene with no [`WorldEnvironment`](class_worldenvironment.md) node, this will act like [`ENVIRONMENT_MODE_DISABLED`](#class_lightmapgi_constant_environment_mode_disabled). The editor's preview sky and sun is *not* taken into account by **LightmapGI** when baking lightmaps.

<div id="_class_lightmapgi_constant_environment_mode_custom_sky"></div>

[EnvironmentMode](#enum_lightmapgi_environmentmode) **ENVIRONMENT_MODE_CUSTOM_SKY** = ``2``

Use [`environment_custom_sky`](#class_lightmapgi_property_environment_custom_sky) as a source of environment lighting when baking lightmaps.

<div id="_class_lightmapgi_constant_environment_mode_custom_color"></div>

[EnvironmentMode](#enum_lightmapgi_environmentmode) **ENVIRONMENT_MODE_CUSTOM_COLOR** = ``3``

Use [`environment_custom_color`](#class_lightmapgi_property_environment_custom_color) multiplied by [`environment_custom_energy`](#class_lightmapgi_property_environment_custom_energy) as a constant source of environment lighting when baking lightmaps.

<!-- rst-class:: classref-section-separator -->

---

## 属性说明

<div id="_class_lightmapgi_property_bias"></div>

[`float`](class_float.md) **bias** = ``0.0005`` <div id="class_lightmapgi_property_bias"></div>

- `void` **set_bias** ( value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_bias** ( )

The bias to use when computing shadows. Increasing [`bias`](#class_lightmapgi_property_bias) can fix shadow acne on the resulting baked lightmap, but can introduce peter-panning (shadows not connecting to their casters). Real-time [`Light3D`](class_light3d.md) shadows are not affected by this [`bias`](#class_lightmapgi_property_bias) property.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_lightmapgi_property_bounce_indirect_energy"></div>

[`float`](class_float.md) **bounce_indirect_energy** = ``1.0`` <div id="class_lightmapgi_property_bounce_indirect_energy"></div>

- `void` **set_bounce_indirect_energy** ( value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_bounce_indirect_energy** ( )

The energy multiplier for each bounce. Higher values will make indirect lighting brighter. A value of `1.0` represents physically accurate behavior, but higher values can be used to make indirect lighting propagate more visibly when using a low number of bounces. This can be used to speed up bake times by lowering the number of [`bounces`](#class_lightmapgi_property_bounces) then increasing [`bounce_indirect_energy`](#class_lightmapgi_property_bounce_indirect_energy).

 **Note:** [`bounce_indirect_energy`](#class_lightmapgi_property_bounce_indirect_energy) only has an effect if [`bounces`](#class_lightmapgi_property_bounces) is set to a value greater than or equal to `1`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_lightmapgi_property_bounces"></div>

[`int`](class_int.md) **bounces** = ``3`` <div id="class_lightmapgi_property_bounces"></div>

- `void` **set_bounces** ( value: [`int`](class_int.md) )
- [`int`](class_int.md) **get_bounces** ( )

Number of light bounces that are taken into account during baking. Higher values result in brighter, more realistic lighting, at the cost of longer bake times. If set to `0`, only environment lighting, direct light and emissive lighting is baked.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_lightmapgi_property_camera_attributes"></div>

[`CameraAttributes`](class_cameraattributes.md) **camera_attributes** <div id="class_lightmapgi_property_camera_attributes"></div>

- `void` **set_camera_attributes** ( value: [`CameraAttributes`](class_cameraattributes.md) )
- [`CameraAttributes`](class_cameraattributes.md) **get_camera_attributes** ( )

The [`CameraAttributes`](class_cameraattributes.md) resource that specifies exposure levels to bake at. Auto-exposure and non exposure properties will be ignored. Exposure settings should be used to reduce the dynamic range present when baking. If exposure is too high, the **LightmapGI** will have banding artifacts or may have over-exposure artifacts.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_lightmapgi_property_denoiser_range"></div>

[`int`](class_int.md) **denoiser_range** = ``10`` <div id="class_lightmapgi_property_denoiser_range"></div>

- `void` **set_denoiser_range** ( value: [`int`](class_int.md) )
- [`int`](class_int.md) **get_denoiser_range** ( )

The distance in pixels from which the denoiser samples. Lower values preserve more details, but may give blotchy results if the lightmap quality is not high enough. Only effective if [`use_denoiser`](#class_lightmapgi_property_use_denoiser) is `true` and [`ProjectSettings.rendering/lightmapping/denoising/denoiser`](#class_projectsettings_property_rendering/lightmapping/denoising/denoiser) is set to JNLM.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_lightmapgi_property_denoiser_strength"></div>

[`float`](class_float.md) **denoiser_strength** = ``0.1`` <div id="class_lightmapgi_property_denoiser_strength"></div>

- `void` **set_denoiser_strength** ( value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_denoiser_strength** ( )

The strength of denoising step applied to the generated lightmaps. Only effective if [`use_denoiser`](#class_lightmapgi_property_use_denoiser) is `true` and [`ProjectSettings.rendering/lightmapping/denoising/denoiser`](#class_projectsettings_property_rendering/lightmapping/denoising/denoiser) is set to JNLM.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_lightmapgi_property_directional"></div>

[`bool`](class_bool.md) **directional** = ``false`` <div id="class_lightmapgi_property_directional"></div>

- `void` **set_directional** ( value: [`bool`](class_bool.md) )
- [`bool`](class_bool.md) **is_directional** ( )

If `true`, bakes lightmaps to contain directional information as spherical harmonics. This results in more realistic lighting appearance, especially with normal mapped materials and for lights that have their direct light baked ([`Light3D.light_bake_mode`](#class_light3d_property_light_bake_mode) set to [`Light3D.BAKE_STATIC`](#class_light3d_constant_bake_static) and with [`Light3D.editor_only`](#class_light3d_property_editor_only) set to `false`). The directional information is also used to provide rough reflections for static and dynamic objects. This has a small run-time performance cost as the shader has to perform more work to interpret the direction information from the lightmap. Directional lightmaps also take longer to bake and result in larger file sizes.

 **Note:** The property's name has no relationship with [`DirectionalLight3D`](class_directionallight3d.md). [`directional`](#class_lightmapgi_property_directional) works with all light types.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_lightmapgi_property_environment_custom_color"></div>

[`Color`](class_color.md) **environment_custom_color** <div id="class_lightmapgi_property_environment_custom_color"></div>

- `void` **set_environment_custom_color** ( value: [`Color`](class_color.md) )
- [`Color`](class_color.md) **get_environment_custom_color** ( )

The color to use for environment lighting. Only effective if [`environment_mode`](#class_lightmapgi_property_environment_mode) is [`ENVIRONMENT_MODE_CUSTOM_COLOR`](#class_lightmapgi_constant_environment_mode_custom_color).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_lightmapgi_property_environment_custom_energy"></div>

[`float`](class_float.md) **environment_custom_energy** <div id="class_lightmapgi_property_environment_custom_energy"></div>

- `void` **set_environment_custom_energy** ( value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_environment_custom_energy** ( )

The color multiplier to use for environment lighting. Only effective if [`environment_mode`](#class_lightmapgi_property_environment_mode) is [`ENVIRONMENT_MODE_CUSTOM_COLOR`](#class_lightmapgi_constant_environment_mode_custom_color).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_lightmapgi_property_environment_custom_sky"></div>

[`Sky`](class_sky.md) **environment_custom_sky** <div id="class_lightmapgi_property_environment_custom_sky"></div>

- `void` **set_environment_custom_sky** ( value: [`Sky`](class_sky.md) )
- [`Sky`](class_sky.md) **get_environment_custom_sky** ( )

The sky to use as a source of environment lighting. Only effective if [`environment_mode`](#class_lightmapgi_property_environment_mode) is [`ENVIRONMENT_MODE_CUSTOM_SKY`](#class_lightmapgi_constant_environment_mode_custom_sky).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_lightmapgi_property_environment_mode"></div>

[EnvironmentMode](#enum_lightmapgi_environmentmode) **environment_mode** = ``1`` <div id="class_lightmapgi_property_environment_mode"></div>

- `void` **set_environment_mode** ( value: [EnvironmentMode](#enum_lightmapgi_environmentmode) )
- [EnvironmentMode](#enum_lightmapgi_environmentmode) **get_environment_mode** ( )

The environment mode to use when baking lightmaps.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_lightmapgi_property_generate_probes_subdiv"></div>

[GenerateProbes](#enum_lightmapgi_generateprobes) **generate_probes_subdiv** = ``2`` <div id="class_lightmapgi_property_generate_probes_subdiv"></div>

- `void` **set_generate_probes** ( value: [GenerateProbes](#enum_lightmapgi_generateprobes) )
- [GenerateProbes](#enum_lightmapgi_generateprobes) **get_generate_probes** ( )

The level of subdivision to use when automatically generating [`LightmapProbe`](class_lightmapprobe.md) s for dynamic object lighting. Higher values result in more accurate indirect lighting on dynamic objects, at the cost of longer bake times and larger file sizes.

 **Note:** Automatically generated [`LightmapProbe`](class_lightmapprobe.md) s are not visible as nodes in the Scene tree dock, and cannot be modified this way after they are generated.

 **Note:** Regardless of [`generate_probes_subdiv`](#class_lightmapgi_property_generate_probes_subdiv), direct lighting on dynamic objects is always applied using [`Light3D`](class_light3d.md) nodes in real-time.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_lightmapgi_property_interior"></div>

[`bool`](class_bool.md) **interior** = ``false`` <div id="class_lightmapgi_property_interior"></div>

- `void` **set_interior** ( value: [`bool`](class_bool.md) )
- [`bool`](class_bool.md) **is_interior** ( )

If `true`, ignore environment lighting when baking lightmaps.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_lightmapgi_property_light_data"></div>

[`LightmapGIData`](class_lightmapgidata.md) **light_data** <div id="class_lightmapgi_property_light_data"></div>

- `void` **set_light_data** ( value: [`LightmapGIData`](class_lightmapgidata.md) )
- [`LightmapGIData`](class_lightmapgidata.md) **get_light_data** ( )

The [`LightmapGIData`](class_lightmapgidata.md) associated to this **LightmapGI** node. This resource is automatically created after baking, and is not meant to be created manually.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_lightmapgi_property_max_texture_size"></div>

[`int`](class_int.md) **max_texture_size** = ``16384`` <div id="class_lightmapgi_property_max_texture_size"></div>

- `void` **set_max_texture_size** ( value: [`int`](class_int.md) )
- [`int`](class_int.md) **get_max_texture_size** ( )

The maximum texture size for the generated texture atlas. Higher values will result in fewer slices being generated, but may not work on all hardware as a result of hardware limitations on texture sizes. Leave [`max_texture_size`](#class_lightmapgi_property_max_texture_size) at its default value of `16384` if unsure.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_lightmapgi_property_quality"></div>

[BakeQuality](#enum_lightmapgi_bakequality) **quality** = ``1`` <div id="class_lightmapgi_property_quality"></div>

- `void` **set_bake_quality** ( value: [BakeQuality](#enum_lightmapgi_bakequality) )
- [BakeQuality](#enum_lightmapgi_bakequality) **get_bake_quality** ( )

The quality preset to use when baking lightmaps. This affects bake times, but output file sizes remain mostly identical across quality levels.

To further speed up bake times, decrease [`bounces`](#class_lightmapgi_property_bounces), disable [`use_denoiser`](#class_lightmapgi_property_use_denoiser) and increase the lightmap texel size on 3D scenes in the Import doc.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_lightmapgi_property_texel_scale"></div>

[`float`](class_float.md) **texel_scale** = ``1.0`` <div id="class_lightmapgi_property_texel_scale"></div>

- `void` **set_texel_scale** ( value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_texel_scale** ( )

Scales the lightmap texel density of all meshes for the current bake. This is a multiplier that builds upon the existing lightmap texel size defined in each imported 3D scene, along with the per-mesh density multiplier (which is designed to be used when the same mesh is used at different scales). Lower values will result in faster bake times.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_lightmapgi_property_use_denoiser"></div>

[`bool`](class_bool.md) **use_denoiser** = ``true`` <div id="class_lightmapgi_property_use_denoiser"></div>

- `void` **set_use_denoiser** ( value: [`bool`](class_bool.md) )
- [`bool`](class_bool.md) **is_using_denoiser** ( )

If `true`, uses a GPU-based denoising algorithm on the generated lightmap. This eliminates most noise within the generated lightmap at the cost of longer bake times. File sizes are generally not impacted significantly by the use of a denoiser, although lossless compression may do a better job at compressing a denoised image.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_lightmapgi_property_use_texture_for_bounces"></div>

[`bool`](class_bool.md) **use_texture_for_bounces** = ``true`` <div id="class_lightmapgi_property_use_texture_for_bounces"></div>

- `void` **set_use_texture_for_bounces** ( value: [`bool`](class_bool.md) )
- [`bool`](class_bool.md) **is_using_texture_for_bounces** ( )

If `true`, a texture with the lighting information will be generated to speed up the generation of indirect lighting at the cost of some accuracy. The geometry might exhibit extra light leak artifacts when using low resolution lightmaps or UVs that stretch the lightmap significantly across surfaces. Leave [`use_texture_for_bounces`](#class_lightmapgi_property_use_texture_for_bounces) at its default value of `true` if unsure.

 **Note:** [`use_texture_for_bounces`](#class_lightmapgi_property_use_texture_for_bounces) only has an effect if [`bounces`](#class_lightmapgi_property_bounces) is set to a value greater than or equal to `1`.

[^virtual]: 本方法通常需要用户覆盖才能生效。
[^const]: 本方法无副作用，不会修改该实例的任何成员变量。
[^vararg]: 本方法除了能接受在此处描述的参数外，还能够继续接受任意数量的参数。
[^constructor]: 本方法用于构造某个类型。
[^static]: 调用本方法无需实例，可直接使用类名进行调用。
[^operator]: 本方法描述的是使用本类型作为左操作数的有效运算符。
[^bitfield]: 这个值是由下列位标志构成位掩码的整数。
[^void]: 无返回值。
