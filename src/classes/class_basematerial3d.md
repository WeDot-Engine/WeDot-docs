<!-- ⚠ 请勿编辑本文件 ⚠ -->
<!-- 本文档使用脚本从 WeDot 引擎源码仓库生成。 -->
<!-- 生成脚本：https://github.com/WeDot-Engine/WeDot/tree/4.3/doc/tools/make_md.py； -->
<!-- 原文件：https://github.com/WeDot-Engine/WeDot/tree/4.3/doc/classes/BaseMaterial3D.xml。 -->

<div id="_class_basematerial3d"></div>

# BaseMaterial3D

**继承：** [`Material`](class_material.md) **<** [`Resource`](class_resource.md) **<** [`RefCounted`](class_refcounted.md) **<** [`Object`](class_object.md)

**派生：** [`ORMMaterial3D`](class_ormmaterial3d.md), [`StandardMaterial3D`](class_standardmaterial3d.md)

Abstract base class for defining the 3D rendering properties of meshes.

## 描述

This class serves as a default material with a wide variety of rendering features and properties without the need to write shader code. See the tutorial below for details.

## 属性

| [`Color`](class_color.md)                                   | [`albedo_color`](#class_basematerial3d_property_albedo_color)                                                   | ``Color(1, 1, 1, 1)`` |
| [`Texture2D`](class_texture2d.md)                           | [`albedo_texture`](#class_basematerial3d_property_albedo_texture)                                               |                       |
| [`bool`](class_bool.md)                                     | [`albedo_texture_force_srgb`](#class_basematerial3d_property_albedo_texture_force_srgb)                         | ``false``             |
| [`bool`](class_bool.md)                                     | [`albedo_texture_msdf`](#class_basematerial3d_property_albedo_texture_msdf)                                     | ``false``             |
| [`float`](class_float.md)                                   | [`alpha_antialiasing_edge`](#class_basematerial3d_property_alpha_antialiasing_edge)                             |                       |
| [AlphaAntiAliasing](#enum_basematerial3d_alphaantialiasing) | [`alpha_antialiasing_mode`](#class_basematerial3d_property_alpha_antialiasing_mode)                             |                       |
| [`float`](class_float.md)                                   | [`alpha_hash_scale`](#class_basematerial3d_property_alpha_hash_scale)                                           |                       |
| [`float`](class_float.md)                                   | [`alpha_scissor_threshold`](#class_basematerial3d_property_alpha_scissor_threshold)                             |                       |
| [`float`](class_float.md)                                   | [`anisotropy`](#class_basematerial3d_property_anisotropy)                                                       | ``0.0``               |
| [`bool`](class_bool.md)                                     | [`anisotropy_enabled`](#class_basematerial3d_property_anisotropy_enabled)                                       | ``false``             |
| [`Texture2D`](class_texture2d.md)                           | [`anisotropy_flowmap`](#class_basematerial3d_property_anisotropy_flowmap)                                       |                       |
| [`bool`](class_bool.md)                                     | [`ao_enabled`](#class_basematerial3d_property_ao_enabled)                                                       | ``false``             |
| [`float`](class_float.md)                                   | [`ao_light_affect`](#class_basematerial3d_property_ao_light_affect)                                             | ``0.0``               |
| [`bool`](class_bool.md)                                     | [`ao_on_uv2`](#class_basematerial3d_property_ao_on_uv2)                                                         | ``false``             |
| [`Texture2D`](class_texture2d.md)                           | [`ao_texture`](#class_basematerial3d_property_ao_texture)                                                       |                       |
| [TextureChannel](#enum_basematerial3d_texturechannel)       | [`ao_texture_channel`](#class_basematerial3d_property_ao_texture_channel)                                       | ``0``                 |
| [`Color`](class_color.md)                                   | [`backlight`](#class_basematerial3d_property_backlight)                                                         | ``Color(0, 0, 0, 1)`` |
| [`bool`](class_bool.md)                                     | [`backlight_enabled`](#class_basematerial3d_property_backlight_enabled)                                         | ``false``             |
| [`Texture2D`](class_texture2d.md)                           | [`backlight_texture`](#class_basematerial3d_property_backlight_texture)                                         |                       |
| [`bool`](class_bool.md)                                     | [`billboard_keep_scale`](#class_basematerial3d_property_billboard_keep_scale)                                   | ``false``             |
| [BillboardMode](#enum_basematerial3d_billboardmode)         | [`billboard_mode`](#class_basematerial3d_property_billboard_mode)                                               | ``0``                 |
| [BlendMode](#enum_basematerial3d_blendmode)                 | [`blend_mode`](#class_basematerial3d_property_blend_mode)                                                       | ``0``                 |
| [`float`](class_float.md)                                   | [`clearcoat`](#class_basematerial3d_property_clearcoat)                                                         | ``1.0``               |
| [`bool`](class_bool.md)                                     | [`clearcoat_enabled`](#class_basematerial3d_property_clearcoat_enabled)                                         | ``false``             |
| [`float`](class_float.md)                                   | [`clearcoat_roughness`](#class_basematerial3d_property_clearcoat_roughness)                                     | ``0.5``               |
| [`Texture2D`](class_texture2d.md)                           | [`clearcoat_texture`](#class_basematerial3d_property_clearcoat_texture)                                         |                       |
| [CullMode](#enum_basematerial3d_cullmode)                   | [`cull_mode`](#class_basematerial3d_property_cull_mode)                                                         | ``0``                 |
| [DepthDrawMode](#enum_basematerial3d_depthdrawmode)         | [`depth_draw_mode`](#class_basematerial3d_property_depth_draw_mode)                                             | ``0``                 |
| [`Texture2D`](class_texture2d.md)                           | [`detail_albedo`](#class_basematerial3d_property_detail_albedo)                                                 |                       |
| [BlendMode](#enum_basematerial3d_blendmode)                 | [`detail_blend_mode`](#class_basematerial3d_property_detail_blend_mode)                                         | ``0``                 |
| [`bool`](class_bool.md)                                     | [`detail_enabled`](#class_basematerial3d_property_detail_enabled)                                               | ``false``             |
| [`Texture2D`](class_texture2d.md)                           | [`detail_mask`](#class_basematerial3d_property_detail_mask)                                                     |                       |
| [`Texture2D`](class_texture2d.md)                           | [`detail_normal`](#class_basematerial3d_property_detail_normal)                                                 |                       |
| [DetailUV](#enum_basematerial3d_detailuv)                   | [`detail_uv_layer`](#class_basematerial3d_property_detail_uv_layer)                                             | ``0``                 |
| [DiffuseMode](#enum_basematerial3d_diffusemode)             | [`diffuse_mode`](#class_basematerial3d_property_diffuse_mode)                                                   | ``0``                 |
| [`bool`](class_bool.md)                                     | [`disable_ambient_light`](#class_basematerial3d_property_disable_ambient_light)                                 | ``false``             |
| [`bool`](class_bool.md)                                     | [`disable_fog`](#class_basematerial3d_property_disable_fog)                                                     | ``false``             |
| [`bool`](class_bool.md)                                     | [`disable_receive_shadows`](#class_basematerial3d_property_disable_receive_shadows)                             | ``false``             |
| [`float`](class_float.md)                                   | [`distance_fade_max_distance`](#class_basematerial3d_property_distance_fade_max_distance)                       | ``10.0``              |
| [`float`](class_float.md)                                   | [`distance_fade_min_distance`](#class_basematerial3d_property_distance_fade_min_distance)                       | ``0.0``               |
| [DistanceFadeMode](#enum_basematerial3d_distancefademode)   | [`distance_fade_mode`](#class_basematerial3d_property_distance_fade_mode)                                       | ``0``                 |
| [`Color`](class_color.md)                                   | [`emission`](#class_basematerial3d_property_emission)                                                           | ``Color(0, 0, 0, 1)`` |
| [`bool`](class_bool.md)                                     | [`emission_enabled`](#class_basematerial3d_property_emission_enabled)                                           | ``false``             |
| [`float`](class_float.md)                                   | [`emission_energy_multiplier`](#class_basematerial3d_property_emission_energy_multiplier)                       | ``1.0``               |
| [`float`](class_float.md)                                   | [`emission_intensity`](#class_basematerial3d_property_emission_intensity)                                       |                       |
| [`bool`](class_bool.md)                                     | [`emission_on_uv2`](#class_basematerial3d_property_emission_on_uv2)                                             | ``false``             |
| [EmissionOperator](#enum_basematerial3d_emissionoperator)   | [`emission_operator`](#class_basematerial3d_property_emission_operator)                                         | ``0``                 |
| [`Texture2D`](class_texture2d.md)                           | [`emission_texture`](#class_basematerial3d_property_emission_texture)                                           |                       |
| [`bool`](class_bool.md)                                     | [`fixed_size`](#class_basematerial3d_property_fixed_size)                                                       | ``false``             |
| [`bool`](class_bool.md)                                     | [`grow`](#class_basematerial3d_property_grow)                                                                   | ``false``             |
| [`float`](class_float.md)                                   | [`grow_amount`](#class_basematerial3d_property_grow_amount)                                                     | ``0.0``               |
| [`bool`](class_bool.md)                                     | [`heightmap_deep_parallax`](#class_basematerial3d_property_heightmap_deep_parallax)                             | ``false``             |
| [`bool`](class_bool.md)                                     | [`heightmap_enabled`](#class_basematerial3d_property_heightmap_enabled)                                         | ``false``             |
| [`bool`](class_bool.md)                                     | [`heightmap_flip_binormal`](#class_basematerial3d_property_heightmap_flip_binormal)                             | ``false``             |
| [`bool`](class_bool.md)                                     | [`heightmap_flip_tangent`](#class_basematerial3d_property_heightmap_flip_tangent)                               | ``false``             |
| [`bool`](class_bool.md)                                     | [`heightmap_flip_texture`](#class_basematerial3d_property_heightmap_flip_texture)                               | ``false``             |
| [`int`](class_int.md)                                       | [`heightmap_max_layers`](#class_basematerial3d_property_heightmap_max_layers)                                   |                       |
| [`int`](class_int.md)                                       | [`heightmap_min_layers`](#class_basematerial3d_property_heightmap_min_layers)                                   |                       |
| [`float`](class_float.md)                                   | [`heightmap_scale`](#class_basematerial3d_property_heightmap_scale)                                             | ``5.0``               |
| [`Texture2D`](class_texture2d.md)                           | [`heightmap_texture`](#class_basematerial3d_property_heightmap_texture)                                         |                       |
| [`float`](class_float.md)                                   | [`metallic`](#class_basematerial3d_property_metallic)                                                           | ``0.0``               |
| [`float`](class_float.md)                                   | [`metallic_specular`](#class_basematerial3d_property_metallic_specular)                                         | ``0.5``               |
| [`Texture2D`](class_texture2d.md)                           | [`metallic_texture`](#class_basematerial3d_property_metallic_texture)                                           |                       |
| [TextureChannel](#enum_basematerial3d_texturechannel)       | [`metallic_texture_channel`](#class_basematerial3d_property_metallic_texture_channel)                           | ``0``                 |
| [`float`](class_float.md)                                   | [`msdf_outline_size`](#class_basematerial3d_property_msdf_outline_size)                                         | ``0.0``               |
| [`float`](class_float.md)                                   | [`msdf_pixel_range`](#class_basematerial3d_property_msdf_pixel_range)                                           | ``4.0``               |
| [`bool`](class_bool.md)                                     | [`no_depth_test`](#class_basematerial3d_property_no_depth_test)                                                 | ``false``             |
| [`bool`](class_bool.md)                                     | [`normal_enabled`](#class_basematerial3d_property_normal_enabled)                                               | ``false``             |
| [`float`](class_float.md)                                   | [`normal_scale`](#class_basematerial3d_property_normal_scale)                                                   | ``1.0``               |
| [`Texture2D`](class_texture2d.md)                           | [`normal_texture`](#class_basematerial3d_property_normal_texture)                                               |                       |
| [`Texture2D`](class_texture2d.md)                           | [`orm_texture`](#class_basematerial3d_property_orm_texture)                                                     |                       |
| [`int`](class_int.md)                                       | [`particles_anim_h_frames`](#class_basematerial3d_property_particles_anim_h_frames)                             |                       |
| [`bool`](class_bool.md)                                     | [`particles_anim_loop`](#class_basematerial3d_property_particles_anim_loop)                                     |                       |
| [`int`](class_int.md)                                       | [`particles_anim_v_frames`](#class_basematerial3d_property_particles_anim_v_frames)                             |                       |
| [`float`](class_float.md)                                   | [`point_size`](#class_basematerial3d_property_point_size)                                                       | ``1.0``               |
| [`float`](class_float.md)                                   | [`proximity_fade_distance`](#class_basematerial3d_property_proximity_fade_distance)                             | ``1.0``               |
| [`bool`](class_bool.md)                                     | [`proximity_fade_enabled`](#class_basematerial3d_property_proximity_fade_enabled)                               | ``false``             |
| [`bool`](class_bool.md)                                     | [`refraction_enabled`](#class_basematerial3d_property_refraction_enabled)                                       | ``false``             |
| [`float`](class_float.md)                                   | [`refraction_scale`](#class_basematerial3d_property_refraction_scale)                                           | ``0.05``              |
| [`Texture2D`](class_texture2d.md)                           | [`refraction_texture`](#class_basematerial3d_property_refraction_texture)                                       |                       |
| [TextureChannel](#enum_basematerial3d_texturechannel)       | [`refraction_texture_channel`](#class_basematerial3d_property_refraction_texture_channel)                       | ``0``                 |
| [`float`](class_float.md)                                   | [`rim`](#class_basematerial3d_property_rim)                                                                     | ``1.0``               |
| [`bool`](class_bool.md)                                     | [`rim_enabled`](#class_basematerial3d_property_rim_enabled)                                                     | ``false``             |
| [`Texture2D`](class_texture2d.md)                           | [`rim_texture`](#class_basematerial3d_property_rim_texture)                                                     |                       |
| [`float`](class_float.md)                                   | [`rim_tint`](#class_basematerial3d_property_rim_tint)                                                           | ``0.5``               |
| [`float`](class_float.md)                                   | [`roughness`](#class_basematerial3d_property_roughness)                                                         | ``1.0``               |
| [`Texture2D`](class_texture2d.md)                           | [`roughness_texture`](#class_basematerial3d_property_roughness_texture)                                         |                       |
| [TextureChannel](#enum_basematerial3d_texturechannel)       | [`roughness_texture_channel`](#class_basematerial3d_property_roughness_texture_channel)                         | ``0``                 |
| [ShadingMode](#enum_basematerial3d_shadingmode)             | [`shading_mode`](#class_basematerial3d_property_shading_mode)                                                   | ``1``                 |
| [`bool`](class_bool.md)                                     | [`shadow_to_opacity`](#class_basematerial3d_property_shadow_to_opacity)                                         | ``false``             |
| [SpecularMode](#enum_basematerial3d_specularmode)           | [`specular_mode`](#class_basematerial3d_property_specular_mode)                                                 | ``0``                 |
| [`bool`](class_bool.md)                                     | [`subsurf_scatter_enabled`](#class_basematerial3d_property_subsurf_scatter_enabled)                             | ``false``             |
| [`bool`](class_bool.md)                                     | [`subsurf_scatter_skin_mode`](#class_basematerial3d_property_subsurf_scatter_skin_mode)                         | ``false``             |
| [`float`](class_float.md)                                   | [`subsurf_scatter_strength`](#class_basematerial3d_property_subsurf_scatter_strength)                           | ``0.0``               |
| [`Texture2D`](class_texture2d.md)                           | [`subsurf_scatter_texture`](#class_basematerial3d_property_subsurf_scatter_texture)                             |                       |
| [`float`](class_float.md)                                   | [`subsurf_scatter_transmittance_boost`](#class_basematerial3d_property_subsurf_scatter_transmittance_boost)     | ``0.0``               |
| [`Color`](class_color.md)                                   | [`subsurf_scatter_transmittance_color`](#class_basematerial3d_property_subsurf_scatter_transmittance_color)     | ``Color(1, 1, 1, 1)`` |
| [`float`](class_float.md)                                   | [`subsurf_scatter_transmittance_depth`](#class_basematerial3d_property_subsurf_scatter_transmittance_depth)     | ``0.1``               |
| [`bool`](class_bool.md)                                     | [`subsurf_scatter_transmittance_enabled`](#class_basematerial3d_property_subsurf_scatter_transmittance_enabled) | ``false``             |
| [`Texture2D`](class_texture2d.md)                           | [`subsurf_scatter_transmittance_texture`](#class_basematerial3d_property_subsurf_scatter_transmittance_texture) |                       |
| [TextureFilter](#enum_basematerial3d_texturefilter)         | [`texture_filter`](#class_basematerial3d_property_texture_filter)                                               | ``3``                 |
| [`bool`](class_bool.md)                                     | [`texture_repeat`](#class_basematerial3d_property_texture_repeat)                                               | ``true``              |
| [Transparency](#enum_basematerial3d_transparency)           | [`transparency`](#class_basematerial3d_property_transparency)                                                   | ``0``                 |
| [`bool`](class_bool.md)                                     | [`use_particle_trails`](#class_basematerial3d_property_use_particle_trails)                                     | ``false``             |
| [`bool`](class_bool.md)                                     | [`use_point_size`](#class_basematerial3d_property_use_point_size)                                               | ``false``             |
| [`Vector3`](class_vector3.md)                               | [`uv1_offset`](#class_basematerial3d_property_uv1_offset)                                                       | ``Vector3(0, 0, 0)``  |
| [`Vector3`](class_vector3.md)                               | [`uv1_scale`](#class_basematerial3d_property_uv1_scale)                                                         | ``Vector3(1, 1, 1)``  |
| [`bool`](class_bool.md)                                     | [`uv1_triplanar`](#class_basematerial3d_property_uv1_triplanar)                                                 | ``false``             |
| [`float`](class_float.md)                                   | [`uv1_triplanar_sharpness`](#class_basematerial3d_property_uv1_triplanar_sharpness)                             | ``1.0``               |
| [`bool`](class_bool.md)                                     | [`uv1_world_triplanar`](#class_basematerial3d_property_uv1_world_triplanar)                                     | ``false``             |
| [`Vector3`](class_vector3.md)                               | [`uv2_offset`](#class_basematerial3d_property_uv2_offset)                                                       | ``Vector3(0, 0, 0)``  |
| [`Vector3`](class_vector3.md)                               | [`uv2_scale`](#class_basematerial3d_property_uv2_scale)                                                         | ``Vector3(1, 1, 1)``  |
| [`bool`](class_bool.md)                                     | [`uv2_triplanar`](#class_basematerial3d_property_uv2_triplanar)                                                 | ``false``             |
| [`float`](class_float.md)                                   | [`uv2_triplanar_sharpness`](#class_basematerial3d_property_uv2_triplanar_sharpness)                             | ``1.0``               |
| [`bool`](class_bool.md)                                     | [`uv2_world_triplanar`](#class_basematerial3d_property_uv2_world_triplanar)                                     | ``false``             |
| [`bool`](class_bool.md)                                     | [`vertex_color_is_srgb`](#class_basematerial3d_property_vertex_color_is_srgb)                                   | ``false``             |
| [`bool`](class_bool.md)                                     | [`vertex_color_use_as_albedo`](#class_basematerial3d_property_vertex_color_use_as_albedo)                       | ``false``             |

## 方法

| [`bool`](class_bool.md)           | [`get_feature`](#class_basematerial3d_method_get_feature) ( feature: [Feature](#enum_basematerial3d_feature) ) const[^const]                                       |
| [`bool`](class_bool.md)           | [`get_flag`](#class_basematerial3d_method_get_flag) ( flag: [Flags](#enum_basematerial3d_flags) ) const[^const]                                                    |
| [`Texture2D`](class_texture2d.md) | [`get_texture`](#class_basematerial3d_method_get_texture) ( param: [TextureParam](#enum_basematerial3d_textureparam) ) const[^const]                               |
| `void`                            | [`set_feature`](#class_basematerial3d_method_set_feature) ( feature: [Feature](#enum_basematerial3d_feature), enable: [`bool`](class_bool.md) )                    |
| `void`                            | [`set_flag`](#class_basematerial3d_method_set_flag) ( flag: [Flags](#enum_basematerial3d_flags), enable: [`bool`](class_bool.md) )                                 |
| `void`                            | [`set_texture`](#class_basematerial3d_method_set_texture) ( param: [TextureParam](#enum_basematerial3d_textureparam), texture: [`Texture2D`](class_texture2d.md) ) |

<!-- rst-class:: classref-section-separator -->

---

## 枚举

<div id="_class_enum_basematerial3d_textureparam"></div>

enum **TextureParam**: <div id="enum_basematerial3d_textureparam"></div>

<div id="_class_basematerial3d_constant_texture_albedo"></div>

[TextureParam](#enum_basematerial3d_textureparam) **TEXTURE_ALBEDO** = ``0``

Texture specifying per-pixel color.

<div id="_class_basematerial3d_constant_texture_metallic"></div>

[TextureParam](#enum_basematerial3d_textureparam) **TEXTURE_METALLIC** = ``1``

Texture specifying per-pixel metallic value.

<div id="_class_basematerial3d_constant_texture_roughness"></div>

[TextureParam](#enum_basematerial3d_textureparam) **TEXTURE_ROUGHNESS** = ``2``

Texture specifying per-pixel roughness value.

<div id="_class_basematerial3d_constant_texture_emission"></div>

[TextureParam](#enum_basematerial3d_textureparam) **TEXTURE_EMISSION** = ``3``

Texture specifying per-pixel emission color.

<div id="_class_basematerial3d_constant_texture_normal"></div>

[TextureParam](#enum_basematerial3d_textureparam) **TEXTURE_NORMAL** = ``4``

Texture specifying per-pixel normal vector.

<div id="_class_basematerial3d_constant_texture_rim"></div>

[TextureParam](#enum_basematerial3d_textureparam) **TEXTURE_RIM** = ``5``

Texture specifying per-pixel rim value.

<div id="_class_basematerial3d_constant_texture_clearcoat"></div>

[TextureParam](#enum_basematerial3d_textureparam) **TEXTURE_CLEARCOAT** = ``6``

Texture specifying per-pixel clearcoat value.

<div id="_class_basematerial3d_constant_texture_flowmap"></div>

[TextureParam](#enum_basematerial3d_textureparam) **TEXTURE_FLOWMAP** = ``7``

Texture specifying per-pixel flowmap direction for use with [`anisotropy`](#class_basematerial3d_property_anisotropy).

<div id="_class_basematerial3d_constant_texture_ambient_occlusion"></div>

[TextureParam](#enum_basematerial3d_textureparam) **TEXTURE_AMBIENT_OCCLUSION** = ``8``

Texture specifying per-pixel ambient occlusion value.

<div id="_class_basematerial3d_constant_texture_heightmap"></div>

[TextureParam](#enum_basematerial3d_textureparam) **TEXTURE_HEIGHTMAP** = ``9``

Texture specifying per-pixel height.

<div id="_class_basematerial3d_constant_texture_subsurface_scattering"></div>

[TextureParam](#enum_basematerial3d_textureparam) **TEXTURE_SUBSURFACE_SCATTERING** = ``10``

Texture specifying per-pixel subsurface scattering.

<div id="_class_basematerial3d_constant_texture_subsurface_transmittance"></div>

[TextureParam](#enum_basematerial3d_textureparam) **TEXTURE_SUBSURFACE_TRANSMITTANCE** = ``11``

Texture specifying per-pixel transmittance for subsurface scattering.

<div id="_class_basematerial3d_constant_texture_backlight"></div>

[TextureParam](#enum_basematerial3d_textureparam) **TEXTURE_BACKLIGHT** = ``12``

Texture specifying per-pixel backlight color.

<div id="_class_basematerial3d_constant_texture_refraction"></div>

[TextureParam](#enum_basematerial3d_textureparam) **TEXTURE_REFRACTION** = ``13``

Texture specifying per-pixel refraction strength.

<div id="_class_basematerial3d_constant_texture_detail_mask"></div>

[TextureParam](#enum_basematerial3d_textureparam) **TEXTURE_DETAIL_MASK** = ``14``

Texture specifying per-pixel detail mask blending value.

<div id="_class_basematerial3d_constant_texture_detail_albedo"></div>

[TextureParam](#enum_basematerial3d_textureparam) **TEXTURE_DETAIL_ALBEDO** = ``15``

Texture specifying per-pixel detail color.

<div id="_class_basematerial3d_constant_texture_detail_normal"></div>

[TextureParam](#enum_basematerial3d_textureparam) **TEXTURE_DETAIL_NORMAL** = ``16``

Texture specifying per-pixel detail normal.

<div id="_class_basematerial3d_constant_texture_orm"></div>

[TextureParam](#enum_basematerial3d_textureparam) **TEXTURE_ORM** = ``17``

Texture holding ambient occlusion, roughness, and metallic.

<div id="_class_basematerial3d_constant_texture_max"></div>

[TextureParam](#enum_basematerial3d_textureparam) **TEXTURE_MAX** = ``18``

Represents the size of the [TextureParam](#enum_basematerial3d_textureparam) enum.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_enum_basematerial3d_texturefilter"></div>

enum **TextureFilter**: <div id="enum_basematerial3d_texturefilter"></div>

<div id="_class_basematerial3d_constant_texture_filter_nearest"></div>

[TextureFilter](#enum_basematerial3d_texturefilter) **TEXTURE_FILTER_NEAREST** = ``0``

The texture filter reads from the nearest pixel only. This makes the texture look pixelated from up close, and grainy from a distance (due to mipmaps not being sampled).

<div id="_class_basematerial3d_constant_texture_filter_linear"></div>

[TextureFilter](#enum_basematerial3d_texturefilter) **TEXTURE_FILTER_LINEAR** = ``1``

The texture filter blends between the nearest 4 pixels. This makes the texture look smooth from up close, and grainy from a distance (due to mipmaps not being sampled).

<div id="_class_basematerial3d_constant_texture_filter_nearest_with_mipmaps"></div>

[TextureFilter](#enum_basematerial3d_texturefilter) **TEXTURE_FILTER_NEAREST_WITH_MIPMAPS** = ``2``

The texture filter reads from the nearest pixel and blends between the nearest 2 mipmaps (or uses the nearest mipmap if [`ProjectSettings.rendering/textures/default_filters/use_nearest_mipmap_filter`](#class_projectsettings_property_rendering/textures/default_filters/use_nearest_mipmap_filter) is `true`). This makes the texture look pixelated from up close, and smooth from a distance.

<div id="_class_basematerial3d_constant_texture_filter_linear_with_mipmaps"></div>

[TextureFilter](#enum_basematerial3d_texturefilter) **TEXTURE_FILTER_LINEAR_WITH_MIPMAPS** = ``3``

The texture filter blends between the nearest 4 pixels and between the nearest 2 mipmaps (or uses the nearest mipmap if [`ProjectSettings.rendering/textures/default_filters/use_nearest_mipmap_filter`](#class_projectsettings_property_rendering/textures/default_filters/use_nearest_mipmap_filter) is `true`). This makes the texture look smooth from up close, and smooth from a distance.

<div id="_class_basematerial3d_constant_texture_filter_nearest_with_mipmaps_anisotropic"></div>

[TextureFilter](#enum_basematerial3d_texturefilter) **TEXTURE_FILTER_NEAREST_WITH_MIPMAPS_ANISOTROPIC** = ``4``

The texture filter reads from the nearest pixel and blends between 2 mipmaps (or uses the nearest mipmap if [`ProjectSettings.rendering/textures/default_filters/use_nearest_mipmap_filter`](#class_projectsettings_property_rendering/textures/default_filters/use_nearest_mipmap_filter) is `true`) based on the angle between the surface and the camera view. This makes the texture look pixelated from up close, and smooth from a distance. Anisotropic filtering improves texture quality on surfaces that are almost in line with the camera, but is slightly slower. The anisotropic filtering level can be changed by adjusting [`ProjectSettings.rendering/textures/default_filters/anisotropic_filtering_level`](#class_projectsettings_property_rendering/textures/default_filters/anisotropic_filtering_level).

<div id="_class_basematerial3d_constant_texture_filter_linear_with_mipmaps_anisotropic"></div>

[TextureFilter](#enum_basematerial3d_texturefilter) **TEXTURE_FILTER_LINEAR_WITH_MIPMAPS_ANISOTROPIC** = ``5``

The texture filter blends between the nearest 4 pixels and blends between 2 mipmaps (or uses the nearest mipmap if [`ProjectSettings.rendering/textures/default_filters/use_nearest_mipmap_filter`](#class_projectsettings_property_rendering/textures/default_filters/use_nearest_mipmap_filter) is `true`) based on the angle between the surface and the camera view. This makes the texture look smooth from up close, and smooth from a distance. Anisotropic filtering improves texture quality on surfaces that are almost in line with the camera, but is slightly slower. The anisotropic filtering level can be changed by adjusting [`ProjectSettings.rendering/textures/default_filters/anisotropic_filtering_level`](#class_projectsettings_property_rendering/textures/default_filters/anisotropic_filtering_level).

<div id="_class_basematerial3d_constant_texture_filter_max"></div>

[TextureFilter](#enum_basematerial3d_texturefilter) **TEXTURE_FILTER_MAX** = ``6``

Represents the size of the [TextureFilter](#enum_basematerial3d_texturefilter) enum.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_enum_basematerial3d_detailuv"></div>

enum **DetailUV**: <div id="enum_basematerial3d_detailuv"></div>

<div id="_class_basematerial3d_constant_detail_uv_1"></div>

[DetailUV](#enum_basematerial3d_detailuv) **DETAIL_UV_1** = ``0``

Use `UV` with the detail texture.

<div id="_class_basematerial3d_constant_detail_uv_2"></div>

[DetailUV](#enum_basematerial3d_detailuv) **DETAIL_UV_2** = ``1``

Use `UV2` with the detail texture.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_enum_basematerial3d_transparency"></div>

enum **Transparency**: <div id="enum_basematerial3d_transparency"></div>

<div id="_class_basematerial3d_constant_transparency_disabled"></div>

[Transparency](#enum_basematerial3d_transparency) **TRANSPARENCY_DISABLED** = ``0``

The material will not use transparency. This is the fastest to render.

<div id="_class_basematerial3d_constant_transparency_alpha"></div>

[Transparency](#enum_basematerial3d_transparency) **TRANSPARENCY_ALPHA** = ``1``

The material will use the texture's alpha values for transparency. This is the slowest to render, and disables shadow casting.

<div id="_class_basematerial3d_constant_transparency_alpha_scissor"></div>

[Transparency](#enum_basematerial3d_transparency) **TRANSPARENCY_ALPHA_SCISSOR** = ``2``

The material will cut off all values below a threshold, the rest will remain opaque. The opaque portions will be rendered in the depth prepass. This is faster to render than alpha blending, but slower than opaque rendering. This also supports casting shadows.

<div id="_class_basematerial3d_constant_transparency_alpha_hash"></div>

[Transparency](#enum_basematerial3d_transparency) **TRANSPARENCY_ALPHA_HASH** = ``3``

The material will cut off all values below a spatially-deterministic threshold, the rest will remain opaque. This is faster to render than alpha blending, but slower than opaque rendering. This also supports casting shadows. Alpha hashing is suited for hair rendering.

<div id="_class_basematerial3d_constant_transparency_alpha_depth_pre_pass"></div>

[Transparency](#enum_basematerial3d_transparency) **TRANSPARENCY_ALPHA_DEPTH_PRE_PASS** = ``4``

The material will use the texture's alpha value for transparency, but will discard fragments with an alpha of less than 0.99 during the depth prepass and fragments with an alpha less than 0.1 during the shadow pass. This also supports casting shadows.

<div id="_class_basematerial3d_constant_transparency_max"></div>

[Transparency](#enum_basematerial3d_transparency) **TRANSPARENCY_MAX** = ``5``

Represents the size of the [Transparency](#enum_basematerial3d_transparency) enum.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_enum_basematerial3d_shadingmode"></div>

enum **ShadingMode**: <div id="enum_basematerial3d_shadingmode"></div>

<div id="_class_basematerial3d_constant_shading_mode_unshaded"></div>

[ShadingMode](#enum_basematerial3d_shadingmode) **SHADING_MODE_UNSHADED** = ``0``

The object will not receive shadows. This is the fastest to render, but it disables all interactions with lights.

<div id="_class_basematerial3d_constant_shading_mode_per_pixel"></div>

[ShadingMode](#enum_basematerial3d_shadingmode) **SHADING_MODE_PER_PIXEL** = ``1``

The object will be shaded per pixel. Useful for realistic shading effects.

<div id="_class_basematerial3d_constant_shading_mode_per_vertex"></div>

[ShadingMode](#enum_basematerial3d_shadingmode) **SHADING_MODE_PER_VERTEX** = ``2``

The object will be shaded per vertex. Useful when you want cheaper shaders and do not care about visual quality. Not implemented yet (this mode will act like [`SHADING_MODE_PER_PIXEL`](#class_basematerial3d_constant_shading_mode_per_pixel)).

<div id="_class_basematerial3d_constant_shading_mode_max"></div>

[ShadingMode](#enum_basematerial3d_shadingmode) **SHADING_MODE_MAX** = ``3``

Represents the size of the [ShadingMode](#enum_basematerial3d_shadingmode) enum.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_enum_basematerial3d_feature"></div>

enum **Feature**: <div id="enum_basematerial3d_feature"></div>

<div id="_class_basematerial3d_constant_feature_emission"></div>

[Feature](#enum_basematerial3d_feature) **FEATURE_EMISSION** = ``0``

Constant for setting [`emission_enabled`](#class_basematerial3d_property_emission_enabled).

<div id="_class_basematerial3d_constant_feature_normal_mapping"></div>

[Feature](#enum_basematerial3d_feature) **FEATURE_NORMAL_MAPPING** = ``1``

Constant for setting [`normal_enabled`](#class_basematerial3d_property_normal_enabled).

<div id="_class_basematerial3d_constant_feature_rim"></div>

[Feature](#enum_basematerial3d_feature) **FEATURE_RIM** = ``2``

Constant for setting [`rim_enabled`](#class_basematerial3d_property_rim_enabled).

<div id="_class_basematerial3d_constant_feature_clearcoat"></div>

[Feature](#enum_basematerial3d_feature) **FEATURE_CLEARCOAT** = ``3``

Constant for setting [`clearcoat_enabled`](#class_basematerial3d_property_clearcoat_enabled).

<div id="_class_basematerial3d_constant_feature_anisotropy"></div>

[Feature](#enum_basematerial3d_feature) **FEATURE_ANISOTROPY** = ``4``

Constant for setting [`anisotropy_enabled`](#class_basematerial3d_property_anisotropy_enabled).

<div id="_class_basematerial3d_constant_feature_ambient_occlusion"></div>

[Feature](#enum_basematerial3d_feature) **FEATURE_AMBIENT_OCCLUSION** = ``5``

Constant for setting [`ao_enabled`](#class_basematerial3d_property_ao_enabled).

<div id="_class_basematerial3d_constant_feature_height_mapping"></div>

[Feature](#enum_basematerial3d_feature) **FEATURE_HEIGHT_MAPPING** = ``6``

Constant for setting [`heightmap_enabled`](#class_basematerial3d_property_heightmap_enabled).

<div id="_class_basematerial3d_constant_feature_subsurface_scattering"></div>

[Feature](#enum_basematerial3d_feature) **FEATURE_SUBSURFACE_SCATTERING** = ``7``

Constant for setting [`subsurf_scatter_enabled`](#class_basematerial3d_property_subsurf_scatter_enabled).

<div id="_class_basematerial3d_constant_feature_subsurface_transmittance"></div>

[Feature](#enum_basematerial3d_feature) **FEATURE_SUBSURFACE_TRANSMITTANCE** = ``8``

Constant for setting [`subsurf_scatter_transmittance_enabled`](#class_basematerial3d_property_subsurf_scatter_transmittance_enabled).

<div id="_class_basematerial3d_constant_feature_backlight"></div>

[Feature](#enum_basematerial3d_feature) **FEATURE_BACKLIGHT** = ``9``

Constant for setting [`backlight_enabled`](#class_basematerial3d_property_backlight_enabled).

<div id="_class_basematerial3d_constant_feature_refraction"></div>

[Feature](#enum_basematerial3d_feature) **FEATURE_REFRACTION** = ``10``

Constant for setting [`refraction_enabled`](#class_basematerial3d_property_refraction_enabled).

<div id="_class_basematerial3d_constant_feature_detail"></div>

[Feature](#enum_basematerial3d_feature) **FEATURE_DETAIL** = ``11``

Constant for setting [`detail_enabled`](#class_basematerial3d_property_detail_enabled).

<div id="_class_basematerial3d_constant_feature_max"></div>

[Feature](#enum_basematerial3d_feature) **FEATURE_MAX** = ``12``

Represents the size of the [Feature](#enum_basematerial3d_feature) enum.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_enum_basematerial3d_blendmode"></div>

enum **BlendMode**: <div id="enum_basematerial3d_blendmode"></div>

<div id="_class_basematerial3d_constant_blend_mode_mix"></div>

[BlendMode](#enum_basematerial3d_blendmode) **BLEND_MODE_MIX** = ``0``

Default blend mode. The color of the object is blended over the background based on the object's alpha value.

<div id="_class_basematerial3d_constant_blend_mode_add"></div>

[BlendMode](#enum_basematerial3d_blendmode) **BLEND_MODE_ADD** = ``1``

The color of the object is added to the background.

<div id="_class_basematerial3d_constant_blend_mode_sub"></div>

[BlendMode](#enum_basematerial3d_blendmode) **BLEND_MODE_SUB** = ``2``

The color of the object is subtracted from the background.

<div id="_class_basematerial3d_constant_blend_mode_mul"></div>

[BlendMode](#enum_basematerial3d_blendmode) **BLEND_MODE_MUL** = ``3``

The color of the object is multiplied by the background.

<div id="_class_basematerial3d_constant_blend_mode_premult_alpha"></div>

[BlendMode](#enum_basematerial3d_blendmode) **BLEND_MODE_PREMULT_ALPHA** = ``4``

The color of the object is added to the background and the alpha channel is used to mask out the background. This is effectively a hybrid of the blend mix and add modes, useful for effects like fire where you want the flame to add but the smoke to mix. By default, this works with unshaded materials using premultiplied textures. For shaded materials, use the `PREMUL_ALPHA_FACTOR` built-in so that lighting can be modulated as well.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_enum_basematerial3d_alphaantialiasing"></div>

enum **AlphaAntiAliasing**: <div id="enum_basematerial3d_alphaantialiasing"></div>

<div id="_class_basematerial3d_constant_alpha_antialiasing_off"></div>

[AlphaAntiAliasing](#enum_basematerial3d_alphaantialiasing) **ALPHA_ANTIALIASING_OFF** = ``0``

Disables Alpha AntiAliasing for the material.

<div id="_class_basematerial3d_constant_alpha_antialiasing_alpha_to_coverage"></div>

[AlphaAntiAliasing](#enum_basematerial3d_alphaantialiasing) **ALPHA_ANTIALIASING_ALPHA_TO_COVERAGE** = ``1``

Enables AlphaToCoverage. Alpha values in the material are passed to the AntiAliasing sample mask.

<div id="_class_basematerial3d_constant_alpha_antialiasing_alpha_to_coverage_and_to_one"></div>

[AlphaAntiAliasing](#enum_basematerial3d_alphaantialiasing) **ALPHA_ANTIALIASING_ALPHA_TO_COVERAGE_AND_TO_ONE** = ``2``

Enables AlphaToCoverage and forces all non-zero alpha values to `1`. Alpha values in the material are passed to the AntiAliasing sample mask.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_enum_basematerial3d_depthdrawmode"></div>

enum **DepthDrawMode**: <div id="enum_basematerial3d_depthdrawmode"></div>

<div id="_class_basematerial3d_constant_depth_draw_opaque_only"></div>

[DepthDrawMode](#enum_basematerial3d_depthdrawmode) **DEPTH_DRAW_OPAQUE_ONLY** = ``0``

Default depth draw mode. Depth is drawn only for opaque objects during the opaque prepass (if any) and during the opaque pass.

<div id="_class_basematerial3d_constant_depth_draw_always"></div>

[DepthDrawMode](#enum_basematerial3d_depthdrawmode) **DEPTH_DRAW_ALWAYS** = ``1``

Objects will write to depth during the opaque and the transparent passes. Transparent objects that are close to the camera may obscure other transparent objects behind them.

 **Note:** This does not influence whether transparent objects are included in the depth prepass or not. For that, see [Transparency](#enum_basematerial3d_transparency).

<div id="_class_basematerial3d_constant_depth_draw_disabled"></div>

[DepthDrawMode](#enum_basematerial3d_depthdrawmode) **DEPTH_DRAW_DISABLED** = ``2``

Objects will not write their depth to the depth buffer, even during the depth prepass (if enabled).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_enum_basematerial3d_cullmode"></div>

enum **CullMode**: <div id="enum_basematerial3d_cullmode"></div>

<div id="_class_basematerial3d_constant_cull_back"></div>

[CullMode](#enum_basematerial3d_cullmode) **CULL_BACK** = ``0``

Default cull mode. The back of the object is culled when not visible. Back face triangles will be culled when facing the camera. This results in only the front side of triangles being drawn. For closed-surface meshes, this means that only the exterior of the mesh will be visible.

<div id="_class_basematerial3d_constant_cull_front"></div>

[CullMode](#enum_basematerial3d_cullmode) **CULL_FRONT** = ``1``

Front face triangles will be culled when facing the camera. This results in only the back side of triangles being drawn. For closed-surface meshes, this means that the interior of the mesh will be drawn instead of the exterior.

<div id="_class_basematerial3d_constant_cull_disabled"></div>

[CullMode](#enum_basematerial3d_cullmode) **CULL_DISABLED** = ``2``

No face culling is performed; both the front face and back face will be visible.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_enum_basematerial3d_flags"></div>

enum **Flags**: <div id="enum_basematerial3d_flags"></div>

<div id="_class_basematerial3d_constant_flag_disable_depth_test"></div>

[Flags](#enum_basematerial3d_flags) **FLAG_DISABLE_DEPTH_TEST** = ``0``

Disables the depth test, so this object is drawn on top of all others drawn before it. This puts the object in the transparent draw pass where it is sorted based on distance to camera. Objects drawn after it in the draw order may cover it. This also disables writing to depth.

<div id="_class_basematerial3d_constant_flag_albedo_from_vertex_color"></div>

[Flags](#enum_basematerial3d_flags) **FLAG_ALBEDO_FROM_VERTEX_COLOR** = ``1``

Set `ALBEDO` to the per-vertex color specified in the mesh.

<div id="_class_basematerial3d_constant_flag_srgb_vertex_color"></div>

[Flags](#enum_basematerial3d_flags) **FLAG_SRGB_VERTEX_COLOR** = ``2``

Vertex colors are considered to be stored in sRGB color space and are converted to linear color space during rendering. See also [`vertex_color_is_srgb`](#class_basematerial3d_property_vertex_color_is_srgb).

 **Note:** Only effective when using the Forward+ and Mobile rendering methods.

<div id="_class_basematerial3d_constant_flag_use_point_size"></div>

[Flags](#enum_basematerial3d_flags) **FLAG_USE_POINT_SIZE** = ``3``

Uses point size to alter the size of primitive points. Also changes the albedo texture lookup to use `POINT_COORD` instead of `UV`.

<div id="_class_basematerial3d_constant_flag_fixed_size"></div>

[Flags](#enum_basematerial3d_flags) **FLAG_FIXED_SIZE** = ``4``

Object is scaled by depth so that it always appears the same size on screen.

<div id="_class_basematerial3d_constant_flag_billboard_keep_scale"></div>

[Flags](#enum_basematerial3d_flags) **FLAG_BILLBOARD_KEEP_SCALE** = ``5``

Shader will keep the scale set for the mesh. Otherwise the scale is lost when billboarding. Only applies when [`billboard_mode`](#class_basematerial3d_property_billboard_mode) is [`BILLBOARD_ENABLED`](#class_basematerial3d_constant_billboard_enabled).

<div id="_class_basematerial3d_constant_flag_uv1_use_triplanar"></div>

[Flags](#enum_basematerial3d_flags) **FLAG_UV1_USE_TRIPLANAR** = ``6``

Use triplanar texture lookup for all texture lookups that would normally use `UV`.

<div id="_class_basematerial3d_constant_flag_uv2_use_triplanar"></div>

[Flags](#enum_basematerial3d_flags) **FLAG_UV2_USE_TRIPLANAR** = ``7``

Use triplanar texture lookup for all texture lookups that would normally use `UV2`.

<div id="_class_basematerial3d_constant_flag_uv1_use_world_triplanar"></div>

[Flags](#enum_basematerial3d_flags) **FLAG_UV1_USE_WORLD_TRIPLANAR** = ``8``

Use triplanar texture lookup for all texture lookups that would normally use `UV`.

<div id="_class_basematerial3d_constant_flag_uv2_use_world_triplanar"></div>

[Flags](#enum_basematerial3d_flags) **FLAG_UV2_USE_WORLD_TRIPLANAR** = ``9``

Use triplanar texture lookup for all texture lookups that would normally use `UV2`.

<div id="_class_basematerial3d_constant_flag_ao_on_uv2"></div>

[Flags](#enum_basematerial3d_flags) **FLAG_AO_ON_UV2** = ``10``

Use `UV2` coordinates to look up from the [`ao_texture`](#class_basematerial3d_property_ao_texture).

<div id="_class_basematerial3d_constant_flag_emission_on_uv2"></div>

[Flags](#enum_basematerial3d_flags) **FLAG_EMISSION_ON_UV2** = ``11``

Use `UV2` coordinates to look up from the [`emission_texture`](#class_basematerial3d_property_emission_texture).

<div id="_class_basematerial3d_constant_flag_albedo_texture_force_srgb"></div>

[Flags](#enum_basematerial3d_flags) **FLAG_ALBEDO_TEXTURE_FORCE_SRGB** = ``12``

Forces the shader to convert albedo from sRGB space to linear space. See also [`albedo_texture_force_srgb`](#class_basematerial3d_property_albedo_texture_force_srgb).

<div id="_class_basematerial3d_constant_flag_dont_receive_shadows"></div>

[Flags](#enum_basematerial3d_flags) **FLAG_DONT_RECEIVE_SHADOWS** = ``13``

Disables receiving shadows from other objects.

<div id="_class_basematerial3d_constant_flag_disable_ambient_light"></div>

[Flags](#enum_basematerial3d_flags) **FLAG_DISABLE_AMBIENT_LIGHT** = ``14``

Disables receiving ambient light.

<div id="_class_basematerial3d_constant_flag_use_shadow_to_opacity"></div>

[Flags](#enum_basematerial3d_flags) **FLAG_USE_SHADOW_TO_OPACITY** = ``15``

Enables the shadow to opacity feature.

<div id="_class_basematerial3d_constant_flag_use_texture_repeat"></div>

[Flags](#enum_basematerial3d_flags) **FLAG_USE_TEXTURE_REPEAT** = ``16``

Enables the texture to repeat when UV coordinates are outside the 0-1 range. If using one of the linear filtering modes, this can result in artifacts at the edges of a texture when the sampler filters across the edges of the texture.

<div id="_class_basematerial3d_constant_flag_invert_heightmap"></div>

[Flags](#enum_basematerial3d_flags) **FLAG_INVERT_HEIGHTMAP** = ``17``

Invert values read from a depth texture to convert them to height values (heightmap).

<div id="_class_basematerial3d_constant_flag_subsurface_mode_skin"></div>

[Flags](#enum_basematerial3d_flags) **FLAG_SUBSURFACE_MODE_SKIN** = ``18``

Enables the skin mode for subsurface scattering which is used to improve the look of subsurface scattering when used for human skin.

<div id="_class_basematerial3d_constant_flag_particle_trails_mode"></div>

[Flags](#enum_basematerial3d_flags) **FLAG_PARTICLE_TRAILS_MODE** = ``19``

Enables parts of the shader required for [`GPUParticles3D`](class_gpuparticles3d.md) trails to function. This also requires using a mesh with appropriate skinning, such as [`RibbonTrailMesh`](class_ribbontrailmesh.md) or [`TubeTrailMesh`](class_tubetrailmesh.md). Enabling this feature outside of materials used in [`GPUParticles3D`](class_gpuparticles3d.md) meshes will break material rendering.

<div id="_class_basematerial3d_constant_flag_albedo_texture_msdf"></div>

[Flags](#enum_basematerial3d_flags) **FLAG_ALBEDO_TEXTURE_MSDF** = ``20``

Enables multichannel signed distance field rendering shader.

<div id="_class_basematerial3d_constant_flag_disable_fog"></div>

[Flags](#enum_basematerial3d_flags) **FLAG_DISABLE_FOG** = ``21``

Disables receiving depth-based or volumetric fog.

<div id="_class_basematerial3d_constant_flag_max"></div>

[Flags](#enum_basematerial3d_flags) **FLAG_MAX** = ``22``

Represents the size of the [Flags](#enum_basematerial3d_flags) enum.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_enum_basematerial3d_diffusemode"></div>

enum **DiffuseMode**: <div id="enum_basematerial3d_diffusemode"></div>

<div id="_class_basematerial3d_constant_diffuse_burley"></div>

[DiffuseMode](#enum_basematerial3d_diffusemode) **DIFFUSE_BURLEY** = ``0``

Default diffuse scattering algorithm.

<div id="_class_basematerial3d_constant_diffuse_lambert"></div>

[DiffuseMode](#enum_basematerial3d_diffusemode) **DIFFUSE_LAMBERT** = ``1``

Diffuse scattering ignores roughness.

<div id="_class_basematerial3d_constant_diffuse_lambert_wrap"></div>

[DiffuseMode](#enum_basematerial3d_diffusemode) **DIFFUSE_LAMBERT_WRAP** = ``2``

Extends Lambert to cover more than 90 degrees when roughness increases.

<div id="_class_basematerial3d_constant_diffuse_toon"></div>

[DiffuseMode](#enum_basematerial3d_diffusemode) **DIFFUSE_TOON** = ``3``

Uses a hard cut for lighting, with smoothing affected by roughness.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_enum_basematerial3d_specularmode"></div>

enum **SpecularMode**: <div id="enum_basematerial3d_specularmode"></div>

<div id="_class_basematerial3d_constant_specular_schlick_ggx"></div>

[SpecularMode](#enum_basematerial3d_specularmode) **SPECULAR_SCHLICK_GGX** = ``0``

Default specular blob.

<div id="_class_basematerial3d_constant_specular_toon"></div>

[SpecularMode](#enum_basematerial3d_specularmode) **SPECULAR_TOON** = ``1``

Toon blob which changes size based on roughness.

<div id="_class_basematerial3d_constant_specular_disabled"></div>

[SpecularMode](#enum_basematerial3d_specularmode) **SPECULAR_DISABLED** = ``2``

No specular blob. This is slightly faster to render than other specular modes.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_enum_basematerial3d_billboardmode"></div>

enum **BillboardMode**: <div id="enum_basematerial3d_billboardmode"></div>

<div id="_class_basematerial3d_constant_billboard_disabled"></div>

[BillboardMode](#enum_basematerial3d_billboardmode) **BILLBOARD_DISABLED** = ``0``

Billboard mode is disabled.

<div id="_class_basematerial3d_constant_billboard_enabled"></div>

[BillboardMode](#enum_basematerial3d_billboardmode) **BILLBOARD_ENABLED** = ``1``

The object's Z axis will always face the camera.

<div id="_class_basematerial3d_constant_billboard_fixed_y"></div>

[BillboardMode](#enum_basematerial3d_billboardmode) **BILLBOARD_FIXED_Y** = ``2``

The object's X axis will always face the camera.

<div id="_class_basematerial3d_constant_billboard_particles"></div>

[BillboardMode](#enum_basematerial3d_billboardmode) **BILLBOARD_PARTICLES** = ``3``

Used for particle systems when assigned to [`GPUParticles3D`](class_gpuparticles3d.md) and [`CPUParticles3D`](class_cpuparticles3d.md) nodes (flipbook animation). Enables `particles_anim_*` properties.

The [`ParticleProcessMaterial.anim_speed_min`](#class_particleprocessmaterial_property_anim_speed_min) or [`CPUParticles3D.anim_speed_min`](#class_cpuparticles3d_property_anim_speed_min) should also be set to a value bigger than zero for the animation to play.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_enum_basematerial3d_texturechannel"></div>

enum **TextureChannel**: <div id="enum_basematerial3d_texturechannel"></div>

<div id="_class_basematerial3d_constant_texture_channel_red"></div>

[TextureChannel](#enum_basematerial3d_texturechannel) **TEXTURE_CHANNEL_RED** = ``0``

Used to read from the red channel of a texture.

<div id="_class_basematerial3d_constant_texture_channel_green"></div>

[TextureChannel](#enum_basematerial3d_texturechannel) **TEXTURE_CHANNEL_GREEN** = ``1``

Used to read from the green channel of a texture.

<div id="_class_basematerial3d_constant_texture_channel_blue"></div>

[TextureChannel](#enum_basematerial3d_texturechannel) **TEXTURE_CHANNEL_BLUE** = ``2``

Used to read from the blue channel of a texture.

<div id="_class_basematerial3d_constant_texture_channel_alpha"></div>

[TextureChannel](#enum_basematerial3d_texturechannel) **TEXTURE_CHANNEL_ALPHA** = ``3``

Used to read from the alpha channel of a texture.

<div id="_class_basematerial3d_constant_texture_channel_grayscale"></div>

[TextureChannel](#enum_basematerial3d_texturechannel) **TEXTURE_CHANNEL_GRAYSCALE** = ``4``

Used to read from the linear (non-perceptual) average of the red, green and blue channels of a texture.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_enum_basematerial3d_emissionoperator"></div>

enum **EmissionOperator**: <div id="enum_basematerial3d_emissionoperator"></div>

<div id="_class_basematerial3d_constant_emission_op_add"></div>

[EmissionOperator](#enum_basematerial3d_emissionoperator) **EMISSION_OP_ADD** = ``0``

Adds the emission color to the color from the emission texture.

<div id="_class_basematerial3d_constant_emission_op_multiply"></div>

[EmissionOperator](#enum_basematerial3d_emissionoperator) **EMISSION_OP_MULTIPLY** = ``1``

Multiplies the emission color by the color from the emission texture.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_enum_basematerial3d_distancefademode"></div>

enum **DistanceFadeMode**: <div id="enum_basematerial3d_distancefademode"></div>

<div id="_class_basematerial3d_constant_distance_fade_disabled"></div>

[DistanceFadeMode](#enum_basematerial3d_distancefademode) **DISTANCE_FADE_DISABLED** = ``0``

Do not use distance fade.

<div id="_class_basematerial3d_constant_distance_fade_pixel_alpha"></div>

[DistanceFadeMode](#enum_basematerial3d_distancefademode) **DISTANCE_FADE_PIXEL_ALPHA** = ``1``

Smoothly fades the object out based on each pixel's distance from the camera using the alpha channel.

<div id="_class_basematerial3d_constant_distance_fade_pixel_dither"></div>

[DistanceFadeMode](#enum_basematerial3d_distancefademode) **DISTANCE_FADE_PIXEL_DITHER** = ``2``

Smoothly fades the object out based on each pixel's distance from the camera using a dithering approach. Dithering discards pixels based on a set pattern to smoothly fade without enabling transparency. On certain hardware, this can be faster than [`DISTANCE_FADE_PIXEL_ALPHA`](#class_basematerial3d_constant_distance_fade_pixel_alpha).

<div id="_class_basematerial3d_constant_distance_fade_object_dither"></div>

[DistanceFadeMode](#enum_basematerial3d_distancefademode) **DISTANCE_FADE_OBJECT_DITHER** = ``3``

Smoothly fades the object out based on the object's distance from the camera using a dithering approach. Dithering discards pixels based on a set pattern to smoothly fade without enabling transparency. On certain hardware, this can be faster than [`DISTANCE_FADE_PIXEL_ALPHA`](#class_basematerial3d_constant_distance_fade_pixel_alpha) and [`DISTANCE_FADE_PIXEL_DITHER`](#class_basematerial3d_constant_distance_fade_pixel_dither).

<!-- rst-class:: classref-section-separator -->

---

## 属性说明

<div id="_class_basematerial3d_property_albedo_color"></div>

[`Color`](class_color.md) **albedo_color** = ``Color(1, 1, 1, 1)`` <div id="class_basematerial3d_property_albedo_color"></div>

- `void` **set_albedo** ( value: [`Color`](class_color.md) )
- [`Color`](class_color.md) **get_albedo** ( )

The material's base color.

 **Note:** If [`detail_enabled`](#class_basematerial3d_property_detail_enabled) is `true` and a [`detail_albedo`](#class_basematerial3d_property_detail_albedo) texture is specified, [`albedo_color`](#class_basematerial3d_property_albedo_color) will *not* modulate the detail texture. This can be used to color partial areas of a material by not specifying an albedo texture and using a transparent [`detail_albedo`](#class_basematerial3d_property_detail_albedo) texture instead.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_basematerial3d_property_albedo_texture"></div>

[`Texture2D`](class_texture2d.md) **albedo_texture** <div id="class_basematerial3d_property_albedo_texture"></div>

- `void` **set_texture** ( param: [TextureParam](#enum_basematerial3d_textureparam), texture: [`Texture2D`](class_texture2d.md) )
- [`Texture2D`](class_texture2d.md) **get_texture** ( param: [TextureParam](#enum_basematerial3d_textureparam) ) const[^const]

Texture to multiply by [`albedo_color`](#class_basematerial3d_property_albedo_color). Used for basic texturing of objects.

If the texture appears unexpectedly too dark or too bright, check [`albedo_texture_force_srgb`](#class_basematerial3d_property_albedo_texture_force_srgb).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_basematerial3d_property_albedo_texture_force_srgb"></div>

[`bool`](class_bool.md) **albedo_texture_force_srgb** = ``false`` <div id="class_basematerial3d_property_albedo_texture_force_srgb"></div>

- `void` **set_flag** ( flag: [Flags](#enum_basematerial3d_flags), enable: [`bool`](class_bool.md) )
- [`bool`](class_bool.md) **get_flag** ( flag: [Flags](#enum_basematerial3d_flags) ) const[^const]

If `true`, forces a conversion of the [`albedo_texture`](#class_basematerial3d_property_albedo_texture) from sRGB color space to linear color space. See also [`vertex_color_is_srgb`](#class_basematerial3d_property_vertex_color_is_srgb).

This should only be enabled when needed (typically when using a [`ViewportTexture`](class_viewporttexture.md) as [`albedo_texture`](#class_basematerial3d_property_albedo_texture)). If [`albedo_texture_force_srgb`](#class_basematerial3d_property_albedo_texture_force_srgb) is `true` when it shouldn't be, the texture will appear to be too dark. If [`albedo_texture_force_srgb`](#class_basematerial3d_property_albedo_texture_force_srgb) is `false` when it shouldn't be, the texture will appear to be too bright.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_basematerial3d_property_albedo_texture_msdf"></div>

[`bool`](class_bool.md) **albedo_texture_msdf** = ``false`` <div id="class_basematerial3d_property_albedo_texture_msdf"></div>

- `void` **set_flag** ( flag: [Flags](#enum_basematerial3d_flags), enable: [`bool`](class_bool.md) )
- [`bool`](class_bool.md) **get_flag** ( flag: [Flags](#enum_basematerial3d_flags) ) const[^const]

Enables multichannel signed distance field rendering shader. Use [`msdf_pixel_range`](#class_basematerial3d_property_msdf_pixel_range) and [`msdf_outline_size`](#class_basematerial3d_property_msdf_outline_size) to configure MSDF parameters.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_basematerial3d_property_alpha_antialiasing_edge"></div>

[`float`](class_float.md) **alpha_antialiasing_edge** <div id="class_basematerial3d_property_alpha_antialiasing_edge"></div>

- `void` **set_alpha_antialiasing_edge** ( value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_alpha_antialiasing_edge** ( )

Threshold at which antialiasing will be applied on the alpha channel.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_basematerial3d_property_alpha_antialiasing_mode"></div>

[AlphaAntiAliasing](#enum_basematerial3d_alphaantialiasing) **alpha_antialiasing_mode** <div id="class_basematerial3d_property_alpha_antialiasing_mode"></div>

- `void` **set_alpha_antialiasing** ( value: [AlphaAntiAliasing](#enum_basematerial3d_alphaantialiasing) )
- [AlphaAntiAliasing](#enum_basematerial3d_alphaantialiasing) **get_alpha_antialiasing** ( )

The type of alpha antialiasing to apply. See [AlphaAntiAliasing](#enum_basematerial3d_alphaantialiasing).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_basematerial3d_property_alpha_hash_scale"></div>

[`float`](class_float.md) **alpha_hash_scale** <div id="class_basematerial3d_property_alpha_hash_scale"></div>

- `void` **set_alpha_hash_scale** ( value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_alpha_hash_scale** ( )

The hashing scale for Alpha Hash. Recommended values between `0` and `2`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_basematerial3d_property_alpha_scissor_threshold"></div>

[`float`](class_float.md) **alpha_scissor_threshold** <div id="class_basematerial3d_property_alpha_scissor_threshold"></div>

- `void` **set_alpha_scissor_threshold** ( value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_alpha_scissor_threshold** ( )

Threshold at which the alpha scissor will discard values. Higher values will result in more pixels being discarded. If the material becomes too opaque at a distance, try increasing [`alpha_scissor_threshold`](#class_basematerial3d_property_alpha_scissor_threshold). If the material disappears at a distance, try decreasing [`alpha_scissor_threshold`](#class_basematerial3d_property_alpha_scissor_threshold).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_basematerial3d_property_anisotropy"></div>

[`float`](class_float.md) **anisotropy** = ``0.0`` <div id="class_basematerial3d_property_anisotropy"></div>

- `void` **set_anisotropy** ( value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_anisotropy** ( )

The strength of the anisotropy effect. This is multiplied by [`anisotropy_flowmap`](#class_basematerial3d_property_anisotropy_flowmap)'s alpha channel if a texture is defined there and the texture contains an alpha channel.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_basematerial3d_property_anisotropy_enabled"></div>

[`bool`](class_bool.md) **anisotropy_enabled** = ``false`` <div id="class_basematerial3d_property_anisotropy_enabled"></div>

- `void` **set_feature** ( feature: [Feature](#enum_basematerial3d_feature), enable: [`bool`](class_bool.md) )
- [`bool`](class_bool.md) **get_feature** ( feature: [Feature](#enum_basematerial3d_feature) ) const[^const]

If `true`, anisotropy is enabled. Anisotropy changes the shape of the specular blob and aligns it to tangent space. This is useful for brushed aluminium and hair reflections.

 **Note:** Mesh tangents are needed for anisotropy to work. If the mesh does not contain tangents, the anisotropy effect will appear broken.

 **Note:** Material anisotropy should not to be confused with anisotropic texture filtering, which can be enabled by setting [`texture_filter`](#class_basematerial3d_property_texture_filter) to [`TEXTURE_FILTER_LINEAR_WITH_MIPMAPS_ANISOTROPIC`](#class_basematerial3d_constant_texture_filter_linear_with_mipmaps_anisotropic).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_basematerial3d_property_anisotropy_flowmap"></div>

[`Texture2D`](class_texture2d.md) **anisotropy_flowmap** <div id="class_basematerial3d_property_anisotropy_flowmap"></div>

- `void` **set_texture** ( param: [TextureParam](#enum_basematerial3d_textureparam), texture: [`Texture2D`](class_texture2d.md) )
- [`Texture2D`](class_texture2d.md) **get_texture** ( param: [TextureParam](#enum_basematerial3d_textureparam) ) const[^const]

Texture that offsets the tangent map for anisotropy calculations and optionally controls the anisotropy effect (if an alpha channel is present). The flowmap texture is expected to be a derivative map, with the red channel representing distortion on the X axis and green channel representing distortion on the Y axis. Values below 0.5 will result in negative distortion, whereas values above 0.5 will result in positive distortion.

If present, the texture's alpha channel will be used to multiply the strength of the [`anisotropy`](#class_basematerial3d_property_anisotropy) effect. Fully opaque pixels will keep the anisotropy effect's original strength while fully transparent pixels will disable the anisotropy effect entirely. The flowmap texture's blue channel is ignored.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_basematerial3d_property_ao_enabled"></div>

[`bool`](class_bool.md) **ao_enabled** = ``false`` <div id="class_basematerial3d_property_ao_enabled"></div>

- `void` **set_feature** ( feature: [Feature](#enum_basematerial3d_feature), enable: [`bool`](class_bool.md) )
- [`bool`](class_bool.md) **get_feature** ( feature: [Feature](#enum_basematerial3d_feature) ) const[^const]

If `true`, ambient occlusion is enabled. Ambient occlusion darkens areas based on the [`ao_texture`](#class_basematerial3d_property_ao_texture).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_basematerial3d_property_ao_light_affect"></div>

[`float`](class_float.md) **ao_light_affect** = ``0.0`` <div id="class_basematerial3d_property_ao_light_affect"></div>

- `void` **set_ao_light_affect** ( value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_ao_light_affect** ( )

Amount that ambient occlusion affects lighting from lights. If `0`, ambient occlusion only affects ambient light. If `1`, ambient occlusion affects lights just as much as it affects ambient light. This can be used to impact the strength of the ambient occlusion effect, but typically looks unrealistic.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_basematerial3d_property_ao_on_uv2"></div>

[`bool`](class_bool.md) **ao_on_uv2** = ``false`` <div id="class_basematerial3d_property_ao_on_uv2"></div>

- `void` **set_flag** ( flag: [Flags](#enum_basematerial3d_flags), enable: [`bool`](class_bool.md) )
- [`bool`](class_bool.md) **get_flag** ( flag: [Flags](#enum_basematerial3d_flags) ) const[^const]

If `true`, use `UV2` coordinates to look up from the [`ao_texture`](#class_basematerial3d_property_ao_texture).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_basematerial3d_property_ao_texture"></div>

[`Texture2D`](class_texture2d.md) **ao_texture** <div id="class_basematerial3d_property_ao_texture"></div>

- `void` **set_texture** ( param: [TextureParam](#enum_basematerial3d_textureparam), texture: [`Texture2D`](class_texture2d.md) )
- [`Texture2D`](class_texture2d.md) **get_texture** ( param: [TextureParam](#enum_basematerial3d_textureparam) ) const[^const]

Texture that defines the amount of ambient occlusion for a given point on the object.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_basematerial3d_property_ao_texture_channel"></div>

[TextureChannel](#enum_basematerial3d_texturechannel) **ao_texture_channel** = ``0`` <div id="class_basematerial3d_property_ao_texture_channel"></div>

- `void` **set_ao_texture_channel** ( value: [TextureChannel](#enum_basematerial3d_texturechannel) )
- [TextureChannel](#enum_basematerial3d_texturechannel) **get_ao_texture_channel** ( )

Specifies the channel of the [`ao_texture`](#class_basematerial3d_property_ao_texture) in which the ambient occlusion information is stored. This is useful when you store the information for multiple effects in a single texture. For example if you stored metallic in the red channel, roughness in the blue, and ambient occlusion in the green you could reduce the number of textures you use.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_basematerial3d_property_backlight"></div>

[`Color`](class_color.md) **backlight** = ``Color(0, 0, 0, 1)`` <div id="class_basematerial3d_property_backlight"></div>

- `void` **set_backlight** ( value: [`Color`](class_color.md) )
- [`Color`](class_color.md) **get_backlight** ( )

The color used by the backlight effect. Represents the light passing through an object.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_basematerial3d_property_backlight_enabled"></div>

[`bool`](class_bool.md) **backlight_enabled** = ``false`` <div id="class_basematerial3d_property_backlight_enabled"></div>

- `void` **set_feature** ( feature: [Feature](#enum_basematerial3d_feature), enable: [`bool`](class_bool.md) )
- [`bool`](class_bool.md) **get_feature** ( feature: [Feature](#enum_basematerial3d_feature) ) const[^const]

If `true`, the backlight effect is enabled. See also [`subsurf_scatter_transmittance_enabled`](#class_basematerial3d_property_subsurf_scatter_transmittance_enabled).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_basematerial3d_property_backlight_texture"></div>

[`Texture2D`](class_texture2d.md) **backlight_texture** <div id="class_basematerial3d_property_backlight_texture"></div>

- `void` **set_texture** ( param: [TextureParam](#enum_basematerial3d_textureparam), texture: [`Texture2D`](class_texture2d.md) )
- [`Texture2D`](class_texture2d.md) **get_texture** ( param: [TextureParam](#enum_basematerial3d_textureparam) ) const[^const]

Texture used to control the backlight effect per-pixel. Added to [`backlight`](#class_basematerial3d_property_backlight).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_basematerial3d_property_billboard_keep_scale"></div>

[`bool`](class_bool.md) **billboard_keep_scale** = ``false`` <div id="class_basematerial3d_property_billboard_keep_scale"></div>

- `void` **set_flag** ( flag: [Flags](#enum_basematerial3d_flags), enable: [`bool`](class_bool.md) )
- [`bool`](class_bool.md) **get_flag** ( flag: [Flags](#enum_basematerial3d_flags) ) const[^const]

If `true`, the shader will keep the scale set for the mesh. Otherwise, the scale is lost when billboarding. Only applies when [`billboard_mode`](#class_basematerial3d_property_billboard_mode) is not [`BILLBOARD_DISABLED`](#class_basematerial3d_constant_billboard_disabled).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_basematerial3d_property_billboard_mode"></div>

[BillboardMode](#enum_basematerial3d_billboardmode) **billboard_mode** = ``0`` <div id="class_basematerial3d_property_billboard_mode"></div>

- `void` **set_billboard_mode** ( value: [BillboardMode](#enum_basematerial3d_billboardmode) )
- [BillboardMode](#enum_basematerial3d_billboardmode) **get_billboard_mode** ( )

Controls how the object faces the camera. See [BillboardMode](#enum_basematerial3d_billboardmode).

 **Note:** When billboarding is enabled and the material also casts shadows, billboards will face **the** camera in the scene when rendering shadows. In scenes with multiple cameras, the intended shadow cannot be determined and this will result in undefined behavior. See [*GitHub Pull Request #72638*](https://github.com/godotengine/godot/pull/72638) for details.

 **Note:** Billboard mode is not suitable for VR because the left-right vector of the camera is not horizontal when the screen is attached to your head instead of on the table. See [*GitHub issue #41567*](https://github.com/godotengine/godot/issues/41567) for details.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_basematerial3d_property_blend_mode"></div>

[BlendMode](#enum_basematerial3d_blendmode) **blend_mode** = ``0`` <div id="class_basematerial3d_property_blend_mode"></div>

- `void` **set_blend_mode** ( value: [BlendMode](#enum_basematerial3d_blendmode) )
- [BlendMode](#enum_basematerial3d_blendmode) **get_blend_mode** ( )

The material's blend mode.

 **Note:** Values other than `Mix` force the object into the transparent pipeline. See [BlendMode](#enum_basematerial3d_blendmode).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_basematerial3d_property_clearcoat"></div>

[`float`](class_float.md) **clearcoat** = ``1.0`` <div id="class_basematerial3d_property_clearcoat"></div>

- `void` **set_clearcoat** ( value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_clearcoat** ( )

Sets the strength of the clearcoat effect. Setting to `0` looks the same as disabling the clearcoat effect.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_basematerial3d_property_clearcoat_enabled"></div>

[`bool`](class_bool.md) **clearcoat_enabled** = ``false`` <div id="class_basematerial3d_property_clearcoat_enabled"></div>

- `void` **set_feature** ( feature: [Feature](#enum_basematerial3d_feature), enable: [`bool`](class_bool.md) )
- [`bool`](class_bool.md) **get_feature** ( feature: [Feature](#enum_basematerial3d_feature) ) const[^const]

If `true`, clearcoat rendering is enabled. Adds a secondary transparent pass to the lighting calculation resulting in an added specular blob. This makes materials appear as if they have a clear layer on them that can be either glossy or rough.

 **Note:** Clearcoat rendering is not visible if the material's [`shading_mode`](#class_basematerial3d_property_shading_mode) is [`SHADING_MODE_UNSHADED`](#class_basematerial3d_constant_shading_mode_unshaded).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_basematerial3d_property_clearcoat_roughness"></div>

[`float`](class_float.md) **clearcoat_roughness** = ``0.5`` <div id="class_basematerial3d_property_clearcoat_roughness"></div>

- `void` **set_clearcoat_roughness** ( value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_clearcoat_roughness** ( )

Sets the roughness of the clearcoat pass. A higher value results in a rougher clearcoat while a lower value results in a smoother clearcoat.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_basematerial3d_property_clearcoat_texture"></div>

[`Texture2D`](class_texture2d.md) **clearcoat_texture** <div id="class_basematerial3d_property_clearcoat_texture"></div>

- `void` **set_texture** ( param: [TextureParam](#enum_basematerial3d_textureparam), texture: [`Texture2D`](class_texture2d.md) )
- [`Texture2D`](class_texture2d.md) **get_texture** ( param: [TextureParam](#enum_basematerial3d_textureparam) ) const[^const]

Texture that defines the strength of the clearcoat effect and the glossiness of the clearcoat. Strength is specified in the red channel while glossiness is specified in the green channel.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_basematerial3d_property_cull_mode"></div>

[CullMode](#enum_basematerial3d_cullmode) **cull_mode** = ``0`` <div id="class_basematerial3d_property_cull_mode"></div>

- `void` **set_cull_mode** ( value: [CullMode](#enum_basematerial3d_cullmode) )
- [CullMode](#enum_basematerial3d_cullmode) **get_cull_mode** ( )

Determines which side of the triangle to cull depending on whether the triangle faces towards or away from the camera. See [CullMode](#enum_basematerial3d_cullmode).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_basematerial3d_property_depth_draw_mode"></div>

[DepthDrawMode](#enum_basematerial3d_depthdrawmode) **depth_draw_mode** = ``0`` <div id="class_basematerial3d_property_depth_draw_mode"></div>

- `void` **set_depth_draw_mode** ( value: [DepthDrawMode](#enum_basematerial3d_depthdrawmode) )
- [DepthDrawMode](#enum_basematerial3d_depthdrawmode) **get_depth_draw_mode** ( )

Determines when depth rendering takes place. See [DepthDrawMode](#enum_basematerial3d_depthdrawmode). See also [`transparency`](#class_basematerial3d_property_transparency).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_basematerial3d_property_detail_albedo"></div>

[`Texture2D`](class_texture2d.md) **detail_albedo** <div id="class_basematerial3d_property_detail_albedo"></div>

- `void` **set_texture** ( param: [TextureParam](#enum_basematerial3d_textureparam), texture: [`Texture2D`](class_texture2d.md) )
- [`Texture2D`](class_texture2d.md) **get_texture** ( param: [TextureParam](#enum_basematerial3d_textureparam) ) const[^const]

Texture that specifies the color of the detail overlay. [`detail_albedo`](#class_basematerial3d_property_detail_albedo)'s alpha channel is used as a mask, even when the material is opaque. To use a dedicated texture as a mask, see [`detail_mask`](#class_basematerial3d_property_detail_mask).

 **Note:** [`detail_albedo`](#class_basematerial3d_property_detail_albedo) is *not* modulated by [`albedo_color`](#class_basematerial3d_property_albedo_color).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_basematerial3d_property_detail_blend_mode"></div>

[BlendMode](#enum_basematerial3d_blendmode) **detail_blend_mode** = ``0`` <div id="class_basematerial3d_property_detail_blend_mode"></div>

- `void` **set_detail_blend_mode** ( value: [BlendMode](#enum_basematerial3d_blendmode) )
- [BlendMode](#enum_basematerial3d_blendmode) **get_detail_blend_mode** ( )

Specifies how the [`detail_albedo`](#class_basematerial3d_property_detail_albedo) should blend with the current `ALBEDO`. See [BlendMode](#enum_basematerial3d_blendmode) for options.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_basematerial3d_property_detail_enabled"></div>

[`bool`](class_bool.md) **detail_enabled** = ``false`` <div id="class_basematerial3d_property_detail_enabled"></div>

- `void` **set_feature** ( feature: [Feature](#enum_basematerial3d_feature), enable: [`bool`](class_bool.md) )
- [`bool`](class_bool.md) **get_feature** ( feature: [Feature](#enum_basematerial3d_feature) ) const[^const]

If `true`, enables the detail overlay. Detail is a second texture that gets mixed over the surface of the object based on [`detail_mask`](#class_basematerial3d_property_detail_mask) and [`detail_albedo`](#class_basematerial3d_property_detail_albedo)'s alpha channel. This can be used to add variation to objects, or to blend between two different albedo/normal textures.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_basematerial3d_property_detail_mask"></div>

[`Texture2D`](class_texture2d.md) **detail_mask** <div id="class_basematerial3d_property_detail_mask"></div>

- `void` **set_texture** ( param: [TextureParam](#enum_basematerial3d_textureparam), texture: [`Texture2D`](class_texture2d.md) )
- [`Texture2D`](class_texture2d.md) **get_texture** ( param: [TextureParam](#enum_basematerial3d_textureparam) ) const[^const]

Texture used to specify how the detail textures get blended with the base textures. [`detail_mask`](#class_basematerial3d_property_detail_mask) can be used together with [`detail_albedo`](#class_basematerial3d_property_detail_albedo)'s alpha channel (if any).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_basematerial3d_property_detail_normal"></div>

[`Texture2D`](class_texture2d.md) **detail_normal** <div id="class_basematerial3d_property_detail_normal"></div>

- `void` **set_texture** ( param: [TextureParam](#enum_basematerial3d_textureparam), texture: [`Texture2D`](class_texture2d.md) )
- [`Texture2D`](class_texture2d.md) **get_texture** ( param: [TextureParam](#enum_basematerial3d_textureparam) ) const[^const]

Texture that specifies the per-pixel normal of the detail overlay. The [`detail_normal`](#class_basematerial3d_property_detail_normal) texture only uses the red and green channels; the blue and alpha channels are ignored. The normal read from [`detail_normal`](#class_basematerial3d_property_detail_normal) is oriented around the surface normal provided by the [`Mesh`](class_mesh.md).

 **Note:** Godot expects the normal map to use X+, Y+, and Z+ coordinates. See [*this page*](http://wiki.polycount.com/wiki/Normal_Map_Technical_Details#Common_Swizzle_Coordinates) for a comparison of normal map coordinates expected by popular engines.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_basematerial3d_property_detail_uv_layer"></div>

[DetailUV](#enum_basematerial3d_detailuv) **detail_uv_layer** = ``0`` <div id="class_basematerial3d_property_detail_uv_layer"></div>

- `void` **set_detail_uv** ( value: [DetailUV](#enum_basematerial3d_detailuv) )
- [DetailUV](#enum_basematerial3d_detailuv) **get_detail_uv** ( )

Specifies whether to use `UV` or `UV2` for the detail layer. See [DetailUV](#enum_basematerial3d_detailuv) for options.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_basematerial3d_property_diffuse_mode"></div>

[DiffuseMode](#enum_basematerial3d_diffusemode) **diffuse_mode** = ``0`` <div id="class_basematerial3d_property_diffuse_mode"></div>

- `void` **set_diffuse_mode** ( value: [DiffuseMode](#enum_basematerial3d_diffusemode) )
- [DiffuseMode](#enum_basematerial3d_diffusemode) **get_diffuse_mode** ( )

The algorithm used for diffuse light scattering. See [DiffuseMode](#enum_basematerial3d_diffusemode).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_basematerial3d_property_disable_ambient_light"></div>

[`bool`](class_bool.md) **disable_ambient_light** = ``false`` <div id="class_basematerial3d_property_disable_ambient_light"></div>

- `void` **set_flag** ( flag: [Flags](#enum_basematerial3d_flags), enable: [`bool`](class_bool.md) )
- [`bool`](class_bool.md) **get_flag** ( flag: [Flags](#enum_basematerial3d_flags) ) const[^const]

If `true`, the object receives no ambient light.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_basematerial3d_property_disable_fog"></div>

[`bool`](class_bool.md) **disable_fog** = ``false`` <div id="class_basematerial3d_property_disable_fog"></div>

- `void` **set_flag** ( flag: [Flags](#enum_basematerial3d_flags), enable: [`bool`](class_bool.md) )
- [`bool`](class_bool.md) **get_flag** ( flag: [Flags](#enum_basematerial3d_flags) ) const[^const]

If `true`, the object will not be affected by fog (neither volumetric nor depth fog). This is useful for unshaded or transparent materials (e.g. particles), which without this setting will be affected even if fully transparent.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_basematerial3d_property_disable_receive_shadows"></div>

[`bool`](class_bool.md) **disable_receive_shadows** = ``false`` <div id="class_basematerial3d_property_disable_receive_shadows"></div>

- `void` **set_flag** ( flag: [Flags](#enum_basematerial3d_flags), enable: [`bool`](class_bool.md) )
- [`bool`](class_bool.md) **get_flag** ( flag: [Flags](#enum_basematerial3d_flags) ) const[^const]

If `true`, the object receives no shadow that would otherwise be cast onto it.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_basematerial3d_property_distance_fade_max_distance"></div>

[`float`](class_float.md) **distance_fade_max_distance** = ``10.0`` <div id="class_basematerial3d_property_distance_fade_max_distance"></div>

- `void` **set_distance_fade_max_distance** ( value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_distance_fade_max_distance** ( )

Distance at which the object appears fully opaque.

 **Note:** If [`distance_fade_max_distance`](#class_basematerial3d_property_distance_fade_max_distance) is less than [`distance_fade_min_distance`](#class_basematerial3d_property_distance_fade_min_distance), the behavior will be reversed. The object will start to fade away at [`distance_fade_max_distance`](#class_basematerial3d_property_distance_fade_max_distance) and will fully disappear once it reaches [`distance_fade_min_distance`](#class_basematerial3d_property_distance_fade_min_distance).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_basematerial3d_property_distance_fade_min_distance"></div>

[`float`](class_float.md) **distance_fade_min_distance** = ``0.0`` <div id="class_basematerial3d_property_distance_fade_min_distance"></div>

- `void` **set_distance_fade_min_distance** ( value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_distance_fade_min_distance** ( )

Distance at which the object starts to become visible. If the object is less than this distance away, it will be invisible.

 **Note:** If [`distance_fade_min_distance`](#class_basematerial3d_property_distance_fade_min_distance) is greater than [`distance_fade_max_distance`](#class_basematerial3d_property_distance_fade_max_distance), the behavior will be reversed. The object will start to fade away at [`distance_fade_max_distance`](#class_basematerial3d_property_distance_fade_max_distance) and will fully disappear once it reaches [`distance_fade_min_distance`](#class_basematerial3d_property_distance_fade_min_distance).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_basematerial3d_property_distance_fade_mode"></div>

[DistanceFadeMode](#enum_basematerial3d_distancefademode) **distance_fade_mode** = ``0`` <div id="class_basematerial3d_property_distance_fade_mode"></div>

- `void` **set_distance_fade** ( value: [DistanceFadeMode](#enum_basematerial3d_distancefademode) )
- [DistanceFadeMode](#enum_basematerial3d_distancefademode) **get_distance_fade** ( )

Specifies which type of fade to use. Can be any of the [DistanceFadeMode](#enum_basematerial3d_distancefademode) s.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_basematerial3d_property_emission"></div>

[`Color`](class_color.md) **emission** = ``Color(0, 0, 0, 1)`` <div id="class_basematerial3d_property_emission"></div>

- `void` **set_emission** ( value: [`Color`](class_color.md) )
- [`Color`](class_color.md) **get_emission** ( )

The emitted light's color. See [`emission_enabled`](#class_basematerial3d_property_emission_enabled).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_basematerial3d_property_emission_enabled"></div>

[`bool`](class_bool.md) **emission_enabled** = ``false`` <div id="class_basematerial3d_property_emission_enabled"></div>

- `void` **set_feature** ( feature: [Feature](#enum_basematerial3d_feature), enable: [`bool`](class_bool.md) )
- [`bool`](class_bool.md) **get_feature** ( feature: [Feature](#enum_basematerial3d_feature) ) const[^const]

If `true`, the body emits light. Emitting light makes the object appear brighter. The object can also cast light on other objects if a [`VoxelGI`](class_voxelgi.md), SDFGI, or [`LightmapGI`](class_lightmapgi.md) is used and this object is used in baked lighting.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_basematerial3d_property_emission_energy_multiplier"></div>

[`float`](class_float.md) **emission_energy_multiplier** = ``1.0`` <div id="class_basematerial3d_property_emission_energy_multiplier"></div>

- `void` **set_emission_energy_multiplier** ( value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_emission_energy_multiplier** ( )

Multiplier for emitted light. See [`emission_enabled`](#class_basematerial3d_property_emission_enabled).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_basematerial3d_property_emission_intensity"></div>

[`float`](class_float.md) **emission_intensity** <div id="class_basematerial3d_property_emission_intensity"></div>

- `void` **set_emission_intensity** ( value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_emission_intensity** ( )

Luminance of emitted light, measured in nits (candela per square meter). Only available when [`ProjectSettings.rendering/lights_and_shadows/use_physical_light_units`](#class_projectsettings_property_rendering/lights_and_shadows/use_physical_light_units) is enabled. The default is roughly equivalent to an indoor lightbulb.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_basematerial3d_property_emission_on_uv2"></div>

[`bool`](class_bool.md) **emission_on_uv2** = ``false`` <div id="class_basematerial3d_property_emission_on_uv2"></div>

- `void` **set_flag** ( flag: [Flags](#enum_basematerial3d_flags), enable: [`bool`](class_bool.md) )
- [`bool`](class_bool.md) **get_flag** ( flag: [Flags](#enum_basematerial3d_flags) ) const[^const]

Use `UV2` to read from the [`emission_texture`](#class_basematerial3d_property_emission_texture).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_basematerial3d_property_emission_operator"></div>

[EmissionOperator](#enum_basematerial3d_emissionoperator) **emission_operator** = ``0`` <div id="class_basematerial3d_property_emission_operator"></div>

- `void` **set_emission_operator** ( value: [EmissionOperator](#enum_basematerial3d_emissionoperator) )
- [EmissionOperator](#enum_basematerial3d_emissionoperator) **get_emission_operator** ( )

Sets how [`emission`](#class_basematerial3d_property_emission) interacts with [`emission_texture`](#class_basematerial3d_property_emission_texture). Can either add or multiply. See [EmissionOperator](#enum_basematerial3d_emissionoperator) for options.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_basematerial3d_property_emission_texture"></div>

[`Texture2D`](class_texture2d.md) **emission_texture** <div id="class_basematerial3d_property_emission_texture"></div>

- `void` **set_texture** ( param: [TextureParam](#enum_basematerial3d_textureparam), texture: [`Texture2D`](class_texture2d.md) )
- [`Texture2D`](class_texture2d.md) **get_texture** ( param: [TextureParam](#enum_basematerial3d_textureparam) ) const[^const]

Texture that specifies how much surface emits light at a given point.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_basematerial3d_property_fixed_size"></div>

[`bool`](class_bool.md) **fixed_size** = ``false`` <div id="class_basematerial3d_property_fixed_size"></div>

- `void` **set_flag** ( flag: [Flags](#enum_basematerial3d_flags), enable: [`bool`](class_bool.md) )
- [`bool`](class_bool.md) **get_flag** ( flag: [Flags](#enum_basematerial3d_flags) ) const[^const]

If `true`, the object is rendered at the same size regardless of distance.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_basematerial3d_property_grow"></div>

[`bool`](class_bool.md) **grow** = ``false`` <div id="class_basematerial3d_property_grow"></div>

- `void` **set_grow_enabled** ( value: [`bool`](class_bool.md) )
- [`bool`](class_bool.md) **is_grow_enabled** ( )

If `true`, enables the vertex grow setting. This can be used to create mesh-based outlines using a second material pass and its [`cull_mode`](#class_basematerial3d_property_cull_mode) set to [`CULL_FRONT`](#class_basematerial3d_constant_cull_front). See also [`grow_amount`](#class_basematerial3d_property_grow_amount).

 **Note:** Vertex growth cannot create new vertices, which means that visible gaps may occur in sharp corners. This can be alleviated by designing the mesh to use smooth normals exclusively using [*face weighted normals*](https://wiki.polycount.com/wiki/Face_weighted_normals) in the 3D authoring software. In this case, grow will be able to join every outline together, just like in the original mesh.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_basematerial3d_property_grow_amount"></div>

[`float`](class_float.md) **grow_amount** = ``0.0`` <div id="class_basematerial3d_property_grow_amount"></div>

- `void` **set_grow** ( value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_grow** ( )

Grows object vertices in the direction of their normals. Only effective if [`grow`](#class_basematerial3d_property_grow) is `true`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_basematerial3d_property_heightmap_deep_parallax"></div>

[`bool`](class_bool.md) **heightmap_deep_parallax** = ``false`` <div id="class_basematerial3d_property_heightmap_deep_parallax"></div>

- `void` **set_heightmap_deep_parallax** ( value: [`bool`](class_bool.md) )
- [`bool`](class_bool.md) **is_heightmap_deep_parallax_enabled** ( )

If `true`, uses parallax occlusion mapping to represent depth in the material instead of simple offset mapping (see [`heightmap_enabled`](#class_basematerial3d_property_heightmap_enabled)). This results in a more convincing depth effect, but is much more expensive on the GPU. Only enable this on materials where it makes a significant visual difference.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_basematerial3d_property_heightmap_enabled"></div>

[`bool`](class_bool.md) **heightmap_enabled** = ``false`` <div id="class_basematerial3d_property_heightmap_enabled"></div>

- `void` **set_feature** ( feature: [Feature](#enum_basematerial3d_feature), enable: [`bool`](class_bool.md) )
- [`bool`](class_bool.md) **get_feature** ( feature: [Feature](#enum_basematerial3d_feature) ) const[^const]

If `true`, height mapping is enabled (also called "parallax mapping" or "depth mapping"). See also [`normal_enabled`](#class_basematerial3d_property_normal_enabled). Height mapping is a demanding feature on the GPU, so it should only be used on materials where it makes a significant visual difference.

 **Note:** Height mapping is not supported if triplanar mapping is used on the same material. The value of [`heightmap_enabled`](#class_basematerial3d_property_heightmap_enabled) will be ignored if [`uv1_triplanar`](#class_basematerial3d_property_uv1_triplanar) is enabled.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_basematerial3d_property_heightmap_flip_binormal"></div>

[`bool`](class_bool.md) **heightmap_flip_binormal** = ``false`` <div id="class_basematerial3d_property_heightmap_flip_binormal"></div>

- `void` **set_heightmap_deep_parallax_flip_binormal** ( value: [`bool`](class_bool.md) )
- [`bool`](class_bool.md) **get_heightmap_deep_parallax_flip_binormal** ( )

If `true`, flips the mesh's binormal vectors when interpreting the height map. If the heightmap effect looks strange when the camera moves (even with a reasonable [`heightmap_scale`](#class_basematerial3d_property_heightmap_scale)), try setting this to `true`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_basematerial3d_property_heightmap_flip_tangent"></div>

[`bool`](class_bool.md) **heightmap_flip_tangent** = ``false`` <div id="class_basematerial3d_property_heightmap_flip_tangent"></div>

- `void` **set_heightmap_deep_parallax_flip_tangent** ( value: [`bool`](class_bool.md) )
- [`bool`](class_bool.md) **get_heightmap_deep_parallax_flip_tangent** ( )

If `true`, flips the mesh's tangent vectors when interpreting the height map. If the heightmap effect looks strange when the camera moves (even with a reasonable [`heightmap_scale`](#class_basematerial3d_property_heightmap_scale)), try setting this to `true`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_basematerial3d_property_heightmap_flip_texture"></div>

[`bool`](class_bool.md) **heightmap_flip_texture** = ``false`` <div id="class_basematerial3d_property_heightmap_flip_texture"></div>

- `void` **set_flag** ( flag: [Flags](#enum_basematerial3d_flags), enable: [`bool`](class_bool.md) )
- [`bool`](class_bool.md) **get_flag** ( flag: [Flags](#enum_basematerial3d_flags) ) const[^const]

If `true`, interprets the height map texture as a depth map, with brighter values appearing to be "lower" in altitude compared to darker values.

This can be enabled for compatibility with some materials authored for Godot 3.x. This is not necessary if the Invert import option was used to invert the depth map in Godot 3.x, in which case [`heightmap_flip_texture`](#class_basematerial3d_property_heightmap_flip_texture) should remain `false`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_basematerial3d_property_heightmap_max_layers"></div>

[`int`](class_int.md) **heightmap_max_layers** <div id="class_basematerial3d_property_heightmap_max_layers"></div>

- `void` **set_heightmap_deep_parallax_max_layers** ( value: [`int`](class_int.md) )
- [`int`](class_int.md) **get_heightmap_deep_parallax_max_layers** ( )

The number of layers to use for parallax occlusion mapping when the camera is up close to the material. Higher values result in a more convincing depth effect, especially in materials that have steep height changes. Higher values have a significant cost on the GPU, so it should only be increased on materials where it makes a significant visual difference.

 **Note:** Only effective if [`heightmap_deep_parallax`](#class_basematerial3d_property_heightmap_deep_parallax) is `true`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_basematerial3d_property_heightmap_min_layers"></div>

[`int`](class_int.md) **heightmap_min_layers** <div id="class_basematerial3d_property_heightmap_min_layers"></div>

- `void` **set_heightmap_deep_parallax_min_layers** ( value: [`int`](class_int.md) )
- [`int`](class_int.md) **get_heightmap_deep_parallax_min_layers** ( )

The number of layers to use for parallax occlusion mapping when the camera is far away from the material. Higher values result in a more convincing depth effect, especially in materials that have steep height changes. Higher values have a significant cost on the GPU, so it should only be increased on materials where it makes a significant visual difference.

 **Note:** Only effective if [`heightmap_deep_parallax`](#class_basematerial3d_property_heightmap_deep_parallax) is `true`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_basematerial3d_property_heightmap_scale"></div>

[`float`](class_float.md) **heightmap_scale** = ``5.0`` <div id="class_basematerial3d_property_heightmap_scale"></div>

- `void` **set_heightmap_scale** ( value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_heightmap_scale** ( )

The heightmap scale to use for the parallax effect (see [`heightmap_enabled`](#class_basematerial3d_property_heightmap_enabled)). The default value is tuned so that the highest point (value = 255) appears to be 5 cm higher than the lowest point (value = 0). Higher values result in a deeper appearance, but may result in artifacts appearing when looking at the material from oblique angles, especially when the camera moves. Negative values can be used to invert the parallax effect, but this is different from inverting the texture using [`heightmap_flip_texture`](#class_basematerial3d_property_heightmap_flip_texture) as the material will also appear to be "closer" to the camera. In most cases, [`heightmap_scale`](#class_basematerial3d_property_heightmap_scale) should be kept to a positive value.

 **Note:** If the height map effect looks strange regardless of this value, try adjusting [`heightmap_flip_binormal`](#class_basematerial3d_property_heightmap_flip_binormal) and [`heightmap_flip_tangent`](#class_basematerial3d_property_heightmap_flip_tangent). See also [`heightmap_texture`](#class_basematerial3d_property_heightmap_texture) for recommendations on authoring heightmap textures, as the way the heightmap texture is authored affects how [`heightmap_scale`](#class_basematerial3d_property_heightmap_scale) behaves.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_basematerial3d_property_heightmap_texture"></div>

[`Texture2D`](class_texture2d.md) **heightmap_texture** <div id="class_basematerial3d_property_heightmap_texture"></div>

- `void` **set_texture** ( param: [TextureParam](#enum_basematerial3d_textureparam), texture: [`Texture2D`](class_texture2d.md) )
- [`Texture2D`](class_texture2d.md) **get_texture** ( param: [TextureParam](#enum_basematerial3d_textureparam) ) const[^const]

The texture to use as a height map. See also [`heightmap_enabled`](#class_basematerial3d_property_heightmap_enabled).

For best results, the texture should be normalized (with [`heightmap_scale`](#class_basematerial3d_property_heightmap_scale) reduced to compensate). In [*GIMP*](https://gimp.org), this can be done using **Colors > Auto > Equalize**. If the texture only uses a small part of its available range, the parallax effect may look strange, especially when the camera moves.

 **Note:** To reduce memory usage and improve loading times, you may be able to use a lower-resolution heightmap texture as most heightmaps are only comprised of low-frequency data.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_basematerial3d_property_metallic"></div>

[`float`](class_float.md) **metallic** = ``0.0`` <div id="class_basematerial3d_property_metallic"></div>

- `void` **set_metallic** ( value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_metallic** ( )

A high value makes the material appear more like a metal. Non-metals use their albedo as the diffuse color and add diffuse to the specular reflection. With non-metals, the reflection appears on top of the albedo color. Metals use their albedo as a multiplier to the specular reflection and set the diffuse color to black resulting in a tinted reflection. Materials work better when fully metal or fully non-metal, values between `0` and `1` should only be used for blending between metal and non-metal sections. To alter the amount of reflection use [`roughness`](#class_basematerial3d_property_roughness).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_basematerial3d_property_metallic_specular"></div>

[`float`](class_float.md) **metallic_specular** = ``0.5`` <div id="class_basematerial3d_property_metallic_specular"></div>

- `void` **set_specular** ( value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_specular** ( )

Adjusts the strength of specular reflections. Specular reflections are composed of scene reflections and the specular lobe which is the bright spot that is reflected from light sources. When set to `0.0`, no specular reflections will be visible. This differs from the [`SPECULAR_DISABLED`](#class_basematerial3d_constant_specular_disabled) [SpecularMode](#enum_basematerial3d_specularmode) as [`SPECULAR_DISABLED`](#class_basematerial3d_constant_specular_disabled) only applies to the specular lobe from the light source.

 **Note:** Unlike [`metallic`](#class_basematerial3d_property_metallic), this is not energy-conserving, so it should be left at `0.5` in most cases. See also [`roughness`](#class_basematerial3d_property_roughness).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_basematerial3d_property_metallic_texture"></div>

[`Texture2D`](class_texture2d.md) **metallic_texture** <div id="class_basematerial3d_property_metallic_texture"></div>

- `void` **set_texture** ( param: [TextureParam](#enum_basematerial3d_textureparam), texture: [`Texture2D`](class_texture2d.md) )
- [`Texture2D`](class_texture2d.md) **get_texture** ( param: [TextureParam](#enum_basematerial3d_textureparam) ) const[^const]

Texture used to specify metallic for an object. This is multiplied by [`metallic`](#class_basematerial3d_property_metallic).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_basematerial3d_property_metallic_texture_channel"></div>

[TextureChannel](#enum_basematerial3d_texturechannel) **metallic_texture_channel** = ``0`` <div id="class_basematerial3d_property_metallic_texture_channel"></div>

- `void` **set_metallic_texture_channel** ( value: [TextureChannel](#enum_basematerial3d_texturechannel) )
- [TextureChannel](#enum_basematerial3d_texturechannel) **get_metallic_texture_channel** ( )

Specifies the channel of the [`metallic_texture`](#class_basematerial3d_property_metallic_texture) in which the metallic information is stored. This is useful when you store the information for multiple effects in a single texture. For example if you stored metallic in the red channel, roughness in the blue, and ambient occlusion in the green you could reduce the number of textures you use.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_basematerial3d_property_msdf_outline_size"></div>

[`float`](class_float.md) **msdf_outline_size** = ``0.0`` <div id="class_basematerial3d_property_msdf_outline_size"></div>

- `void` **set_msdf_outline_size** ( value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_msdf_outline_size** ( )

The width of the shape outline.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_basematerial3d_property_msdf_pixel_range"></div>

[`float`](class_float.md) **msdf_pixel_range** = ``4.0`` <div id="class_basematerial3d_property_msdf_pixel_range"></div>

- `void` **set_msdf_pixel_range** ( value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_msdf_pixel_range** ( )

The width of the range around the shape between the minimum and maximum representable signed distance.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_basematerial3d_property_no_depth_test"></div>

[`bool`](class_bool.md) **no_depth_test** = ``false`` <div id="class_basematerial3d_property_no_depth_test"></div>

- `void` **set_flag** ( flag: [Flags](#enum_basematerial3d_flags), enable: [`bool`](class_bool.md) )
- [`bool`](class_bool.md) **get_flag** ( flag: [Flags](#enum_basematerial3d_flags) ) const[^const]

If `true`, depth testing is disabled and the object will be drawn in render order.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_basematerial3d_property_normal_enabled"></div>

[`bool`](class_bool.md) **normal_enabled** = ``false`` <div id="class_basematerial3d_property_normal_enabled"></div>

- `void` **set_feature** ( feature: [Feature](#enum_basematerial3d_feature), enable: [`bool`](class_bool.md) )
- [`bool`](class_bool.md) **get_feature** ( feature: [Feature](#enum_basematerial3d_feature) ) const[^const]

If `true`, normal mapping is enabled. This has a slight performance cost, especially on mobile GPUs.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_basematerial3d_property_normal_scale"></div>

[`float`](class_float.md) **normal_scale** = ``1.0`` <div id="class_basematerial3d_property_normal_scale"></div>

- `void` **set_normal_scale** ( value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_normal_scale** ( )

The strength of the normal map's effect.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_basematerial3d_property_normal_texture"></div>

[`Texture2D`](class_texture2d.md) **normal_texture** <div id="class_basematerial3d_property_normal_texture"></div>

- `void` **set_texture** ( param: [TextureParam](#enum_basematerial3d_textureparam), texture: [`Texture2D`](class_texture2d.md) )
- [`Texture2D`](class_texture2d.md) **get_texture** ( param: [TextureParam](#enum_basematerial3d_textureparam) ) const[^const]

Texture used to specify the normal at a given pixel. The [`normal_texture`](#class_basematerial3d_property_normal_texture) only uses the red and green channels; the blue and alpha channels are ignored. The normal read from [`normal_texture`](#class_basematerial3d_property_normal_texture) is oriented around the surface normal provided by the [`Mesh`](class_mesh.md).

 **Note:** The mesh must have both normals and tangents defined in its vertex data. Otherwise, the normal map won't render correctly and will only appear to darken the whole surface. If creating geometry with [`SurfaceTool`](class_surfacetool.md), you can use [`SurfaceTool.generate_normals`](#class_surfacetool_method_generate_normals) and [`SurfaceTool.generate_tangents`](#class_surfacetool_method_generate_tangents) to automatically generate normals and tangents respectively.

 **Note:** Godot expects the normal map to use X+, Y+, and Z+ coordinates. See [*this page*](http://wiki.polycount.com/wiki/Normal_Map_Technical_Details#Common_Swizzle_Coordinates) for a comparison of normal map coordinates expected by popular engines.

 **Note:** If [`detail_enabled`](#class_basematerial3d_property_detail_enabled) is `true`, the [`detail_albedo`](#class_basematerial3d_property_detail_albedo) texture is drawn *below* the [`normal_texture`](#class_basematerial3d_property_normal_texture). To display a normal map *above* the [`detail_albedo`](#class_basematerial3d_property_detail_albedo) texture, use [`detail_normal`](#class_basematerial3d_property_detail_normal) instead.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_basematerial3d_property_orm_texture"></div>

[`Texture2D`](class_texture2d.md) **orm_texture** <div id="class_basematerial3d_property_orm_texture"></div>

- `void` **set_texture** ( param: [TextureParam](#enum_basematerial3d_textureparam), texture: [`Texture2D`](class_texture2d.md) )
- [`Texture2D`](class_texture2d.md) **get_texture** ( param: [TextureParam](#enum_basematerial3d_textureparam) ) const[^const]

The Occlusion/Roughness/Metallic texture to use. This is a more efficient replacement of [`ao_texture`](#class_basematerial3d_property_ao_texture), [`roughness_texture`](#class_basematerial3d_property_roughness_texture) and [`metallic_texture`](#class_basematerial3d_property_metallic_texture) in [`ORMMaterial3D`](class_ormmaterial3d.md). Ambient occlusion is stored in the red channel. Roughness map is stored in the green channel. Metallic map is stored in the blue channel. The alpha channel is ignored.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_basematerial3d_property_particles_anim_h_frames"></div>

[`int`](class_int.md) **particles_anim_h_frames** <div id="class_basematerial3d_property_particles_anim_h_frames"></div>

- `void` **set_particles_anim_h_frames** ( value: [`int`](class_int.md) )
- [`int`](class_int.md) **get_particles_anim_h_frames** ( )

The number of horizontal frames in the particle sprite sheet. Only enabled when using [`BILLBOARD_PARTICLES`](#class_basematerial3d_constant_billboard_particles). See [`billboard_mode`](#class_basematerial3d_property_billboard_mode).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_basematerial3d_property_particles_anim_loop"></div>

[`bool`](class_bool.md) **particles_anim_loop** <div id="class_basematerial3d_property_particles_anim_loop"></div>

- `void` **set_particles_anim_loop** ( value: [`bool`](class_bool.md) )
- [`bool`](class_bool.md) **get_particles_anim_loop** ( )

If `true`, particle animations are looped. Only enabled when using [`BILLBOARD_PARTICLES`](#class_basematerial3d_constant_billboard_particles). See [`billboard_mode`](#class_basematerial3d_property_billboard_mode).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_basematerial3d_property_particles_anim_v_frames"></div>

[`int`](class_int.md) **particles_anim_v_frames** <div id="class_basematerial3d_property_particles_anim_v_frames"></div>

- `void` **set_particles_anim_v_frames** ( value: [`int`](class_int.md) )
- [`int`](class_int.md) **get_particles_anim_v_frames** ( )

The number of vertical frames in the particle sprite sheet. Only enabled when using [`BILLBOARD_PARTICLES`](#class_basematerial3d_constant_billboard_particles). See [`billboard_mode`](#class_basematerial3d_property_billboard_mode).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_basematerial3d_property_point_size"></div>

[`float`](class_float.md) **point_size** = ``1.0`` <div id="class_basematerial3d_property_point_size"></div>

- `void` **set_point_size** ( value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_point_size** ( )

The point size in pixels. See [`use_point_size`](#class_basematerial3d_property_use_point_size).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_basematerial3d_property_proximity_fade_distance"></div>

[`float`](class_float.md) **proximity_fade_distance** = ``1.0`` <div id="class_basematerial3d_property_proximity_fade_distance"></div>

- `void` **set_proximity_fade_distance** ( value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_proximity_fade_distance** ( )

Distance over which the fade effect takes place. The larger the distance the longer it takes for an object to fade.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_basematerial3d_property_proximity_fade_enabled"></div>

[`bool`](class_bool.md) **proximity_fade_enabled** = ``false`` <div id="class_basematerial3d_property_proximity_fade_enabled"></div>

- `void` **set_proximity_fade_enabled** ( value: [`bool`](class_bool.md) )
- [`bool`](class_bool.md) **is_proximity_fade_enabled** ( )

If `true`, the proximity fade effect is enabled. The proximity fade effect fades out each pixel based on its distance to another object.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_basematerial3d_property_refraction_enabled"></div>

[`bool`](class_bool.md) **refraction_enabled** = ``false`` <div id="class_basematerial3d_property_refraction_enabled"></div>

- `void` **set_feature** ( feature: [Feature](#enum_basematerial3d_feature), enable: [`bool`](class_bool.md) )
- [`bool`](class_bool.md) **get_feature** ( feature: [Feature](#enum_basematerial3d_feature) ) const[^const]

If `true`, the refraction effect is enabled. Distorts transparency based on light from behind the object.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_basematerial3d_property_refraction_scale"></div>

[`float`](class_float.md) **refraction_scale** = ``0.05`` <div id="class_basematerial3d_property_refraction_scale"></div>

- `void` **set_refraction** ( value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_refraction** ( )

The strength of the refraction effect.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_basematerial3d_property_refraction_texture"></div>

[`Texture2D`](class_texture2d.md) **refraction_texture** <div id="class_basematerial3d_property_refraction_texture"></div>

- `void` **set_texture** ( param: [TextureParam](#enum_basematerial3d_textureparam), texture: [`Texture2D`](class_texture2d.md) )
- [`Texture2D`](class_texture2d.md) **get_texture** ( param: [TextureParam](#enum_basematerial3d_textureparam) ) const[^const]

Texture that controls the strength of the refraction per-pixel. Multiplied by [`refraction_scale`](#class_basematerial3d_property_refraction_scale).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_basematerial3d_property_refraction_texture_channel"></div>

[TextureChannel](#enum_basematerial3d_texturechannel) **refraction_texture_channel** = ``0`` <div id="class_basematerial3d_property_refraction_texture_channel"></div>

- `void` **set_refraction_texture_channel** ( value: [TextureChannel](#enum_basematerial3d_texturechannel) )
- [TextureChannel](#enum_basematerial3d_texturechannel) **get_refraction_texture_channel** ( )

Specifies the channel of the [`refraction_texture`](#class_basematerial3d_property_refraction_texture) in which the refraction information is stored. This is useful when you store the information for multiple effects in a single texture. For example if you stored refraction in the red channel, roughness in the blue, and ambient occlusion in the green you could reduce the number of textures you use.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_basematerial3d_property_rim"></div>

[`float`](class_float.md) **rim** = ``1.0`` <div id="class_basematerial3d_property_rim"></div>

- `void` **set_rim** ( value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_rim** ( )

Sets the strength of the rim lighting effect.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_basematerial3d_property_rim_enabled"></div>

[`bool`](class_bool.md) **rim_enabled** = ``false`` <div id="class_basematerial3d_property_rim_enabled"></div>

- `void` **set_feature** ( feature: [Feature](#enum_basematerial3d_feature), enable: [`bool`](class_bool.md) )
- [`bool`](class_bool.md) **get_feature** ( feature: [Feature](#enum_basematerial3d_feature) ) const[^const]

If `true`, rim effect is enabled. Rim lighting increases the brightness at glancing angles on an object.

 **Note:** Rim lighting is not visible if the material's [`shading_mode`](#class_basematerial3d_property_shading_mode) is [`SHADING_MODE_UNSHADED`](#class_basematerial3d_constant_shading_mode_unshaded).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_basematerial3d_property_rim_texture"></div>

[`Texture2D`](class_texture2d.md) **rim_texture** <div id="class_basematerial3d_property_rim_texture"></div>

- `void` **set_texture** ( param: [TextureParam](#enum_basematerial3d_textureparam), texture: [`Texture2D`](class_texture2d.md) )
- [`Texture2D`](class_texture2d.md) **get_texture** ( param: [TextureParam](#enum_basematerial3d_textureparam) ) const[^const]

Texture used to set the strength of the rim lighting effect per-pixel. Multiplied by [`rim`](#class_basematerial3d_property_rim).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_basematerial3d_property_rim_tint"></div>

[`float`](class_float.md) **rim_tint** = ``0.5`` <div id="class_basematerial3d_property_rim_tint"></div>

- `void` **set_rim_tint** ( value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_rim_tint** ( )

The amount of to blend light and albedo color when rendering rim effect. If `0` the light color is used, while `1` means albedo color is used. An intermediate value generally works best.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_basematerial3d_property_roughness"></div>

[`float`](class_float.md) **roughness** = ``1.0`` <div id="class_basematerial3d_property_roughness"></div>

- `void` **set_roughness** ( value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_roughness** ( )

Surface reflection. A value of `0` represents a perfect mirror while a value of `1` completely blurs the reflection. See also [`metallic`](#class_basematerial3d_property_metallic).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_basematerial3d_property_roughness_texture"></div>

[`Texture2D`](class_texture2d.md) **roughness_texture** <div id="class_basematerial3d_property_roughness_texture"></div>

- `void` **set_texture** ( param: [TextureParam](#enum_basematerial3d_textureparam), texture: [`Texture2D`](class_texture2d.md) )
- [`Texture2D`](class_texture2d.md) **get_texture** ( param: [TextureParam](#enum_basematerial3d_textureparam) ) const[^const]

Texture used to control the roughness per-pixel. Multiplied by [`roughness`](#class_basematerial3d_property_roughness).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_basematerial3d_property_roughness_texture_channel"></div>

[TextureChannel](#enum_basematerial3d_texturechannel) **roughness_texture_channel** = ``0`` <div id="class_basematerial3d_property_roughness_texture_channel"></div>

- `void` **set_roughness_texture_channel** ( value: [TextureChannel](#enum_basematerial3d_texturechannel) )
- [TextureChannel](#enum_basematerial3d_texturechannel) **get_roughness_texture_channel** ( )

Specifies the channel of the [`roughness_texture`](#class_basematerial3d_property_roughness_texture) in which the roughness information is stored. This is useful when you store the information for multiple effects in a single texture. For example if you stored metallic in the red channel, roughness in the blue, and ambient occlusion in the green you could reduce the number of textures you use.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_basematerial3d_property_shading_mode"></div>

[ShadingMode](#enum_basematerial3d_shadingmode) **shading_mode** = ``1`` <div id="class_basematerial3d_property_shading_mode"></div>

- `void` **set_shading_mode** ( value: [ShadingMode](#enum_basematerial3d_shadingmode) )
- [ShadingMode](#enum_basematerial3d_shadingmode) **get_shading_mode** ( )

Sets whether the shading takes place, per-pixel, per-vertex or unshaded. Per-vertex lighting is faster, making it the best choice for mobile applications, however it looks considerably worse than per-pixel. Unshaded rendering is the fastest, but disables all interactions with lights.

 **Note:** Setting the shading mode vertex shading currently has no effect, as vertex shading is not implemented yet.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_basematerial3d_property_shadow_to_opacity"></div>

[`bool`](class_bool.md) **shadow_to_opacity** = ``false`` <div id="class_basematerial3d_property_shadow_to_opacity"></div>

- `void` **set_flag** ( flag: [Flags](#enum_basematerial3d_flags), enable: [`bool`](class_bool.md) )
- [`bool`](class_bool.md) **get_flag** ( flag: [Flags](#enum_basematerial3d_flags) ) const[^const]

If `true`, enables the "shadow to opacity" render mode where lighting modifies the alpha so shadowed areas are opaque and non-shadowed areas are transparent. Useful for overlaying shadows onto a camera feed in AR.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_basematerial3d_property_specular_mode"></div>

[SpecularMode](#enum_basematerial3d_specularmode) **specular_mode** = ``0`` <div id="class_basematerial3d_property_specular_mode"></div>

- `void` **set_specular_mode** ( value: [SpecularMode](#enum_basematerial3d_specularmode) )
- [SpecularMode](#enum_basematerial3d_specularmode) **get_specular_mode** ( )

The method for rendering the specular blob. See [SpecularMode](#enum_basematerial3d_specularmode).

 **Note:** [`specular_mode`](#class_basematerial3d_property_specular_mode) only applies to the specular blob. It does not affect specular reflections from the sky, screen-space reflections, [`VoxelGI`](class_voxelgi.md), SDFGI or [`ReflectionProbe`](class_reflectionprobe.md) s. To disable reflections from these sources as well, set [`metallic_specular`](#class_basematerial3d_property_metallic_specular) to `0.0` instead.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_basematerial3d_property_subsurf_scatter_enabled"></div>

[`bool`](class_bool.md) **subsurf_scatter_enabled** = ``false`` <div id="class_basematerial3d_property_subsurf_scatter_enabled"></div>

- `void` **set_feature** ( feature: [Feature](#enum_basematerial3d_feature), enable: [`bool`](class_bool.md) )
- [`bool`](class_bool.md) **get_feature** ( feature: [Feature](#enum_basematerial3d_feature) ) const[^const]

If `true`, subsurface scattering is enabled. Emulates light that penetrates an object's surface, is scattered, and then emerges. Subsurface scattering quality is controlled by [`ProjectSettings.rendering/environment/subsurface_scattering/subsurface_scattering_quality`](#class_projectsettings_property_rendering/environment/subsurface_scattering/subsurface_scattering_quality).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_basematerial3d_property_subsurf_scatter_skin_mode"></div>

[`bool`](class_bool.md) **subsurf_scatter_skin_mode** = ``false`` <div id="class_basematerial3d_property_subsurf_scatter_skin_mode"></div>

- `void` **set_flag** ( flag: [Flags](#enum_basematerial3d_flags), enable: [`bool`](class_bool.md) )
- [`bool`](class_bool.md) **get_flag** ( flag: [Flags](#enum_basematerial3d_flags) ) const[^const]

If `true`, subsurface scattering will use a special mode optimized for the color and density of human skin, such as boosting the intensity of the red channel in subsurface scattering.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_basematerial3d_property_subsurf_scatter_strength"></div>

[`float`](class_float.md) **subsurf_scatter_strength** = ``0.0`` <div id="class_basematerial3d_property_subsurf_scatter_strength"></div>

- `void` **set_subsurface_scattering_strength** ( value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_subsurface_scattering_strength** ( )

The strength of the subsurface scattering effect. The depth of the effect is also controlled by [`ProjectSettings.rendering/environment/subsurface_scattering/subsurface_scattering_scale`](#class_projectsettings_property_rendering/environment/subsurface_scattering/subsurface_scattering_scale), which is set globally.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_basematerial3d_property_subsurf_scatter_texture"></div>

[`Texture2D`](class_texture2d.md) **subsurf_scatter_texture** <div id="class_basematerial3d_property_subsurf_scatter_texture"></div>

- `void` **set_texture** ( param: [TextureParam](#enum_basematerial3d_textureparam), texture: [`Texture2D`](class_texture2d.md) )
- [`Texture2D`](class_texture2d.md) **get_texture** ( param: [TextureParam](#enum_basematerial3d_textureparam) ) const[^const]

Texture used to control the subsurface scattering strength. Stored in the red texture channel. Multiplied by [`subsurf_scatter_strength`](#class_basematerial3d_property_subsurf_scatter_strength).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_basematerial3d_property_subsurf_scatter_transmittance_boost"></div>

[`float`](class_float.md) **subsurf_scatter_transmittance_boost** = ``0.0`` <div id="class_basematerial3d_property_subsurf_scatter_transmittance_boost"></div>

- `void` **set_transmittance_boost** ( value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_transmittance_boost** ( )

The intensity of the subsurface scattering transmittance effect.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_basematerial3d_property_subsurf_scatter_transmittance_color"></div>

[`Color`](class_color.md) **subsurf_scatter_transmittance_color** = ``Color(1, 1, 1, 1)`` <div id="class_basematerial3d_property_subsurf_scatter_transmittance_color"></div>

- `void` **set_transmittance_color** ( value: [`Color`](class_color.md) )
- [`Color`](class_color.md) **get_transmittance_color** ( )

The color to multiply the subsurface scattering transmittance effect with. Ignored if [`subsurf_scatter_skin_mode`](#class_basematerial3d_property_subsurf_scatter_skin_mode) is `true`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_basematerial3d_property_subsurf_scatter_transmittance_depth"></div>

[`float`](class_float.md) **subsurf_scatter_transmittance_depth** = ``0.1`` <div id="class_basematerial3d_property_subsurf_scatter_transmittance_depth"></div>

- `void` **set_transmittance_depth** ( value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_transmittance_depth** ( )

The depth of the subsurface scattering transmittance effect.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_basematerial3d_property_subsurf_scatter_transmittance_enabled"></div>

[`bool`](class_bool.md) **subsurf_scatter_transmittance_enabled** = ``false`` <div id="class_basematerial3d_property_subsurf_scatter_transmittance_enabled"></div>

- `void` **set_feature** ( feature: [Feature](#enum_basematerial3d_feature), enable: [`bool`](class_bool.md) )
- [`bool`](class_bool.md) **get_feature** ( feature: [Feature](#enum_basematerial3d_feature) ) const[^const]

If `true`, enables subsurface scattering transmittance. Only effective if [`subsurf_scatter_enabled`](#class_basematerial3d_property_subsurf_scatter_enabled) is `true`. See also [`backlight_enabled`](#class_basematerial3d_property_backlight_enabled).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_basematerial3d_property_subsurf_scatter_transmittance_texture"></div>

[`Texture2D`](class_texture2d.md) **subsurf_scatter_transmittance_texture** <div id="class_basematerial3d_property_subsurf_scatter_transmittance_texture"></div>

- `void` **set_texture** ( param: [TextureParam](#enum_basematerial3d_textureparam), texture: [`Texture2D`](class_texture2d.md) )
- [`Texture2D`](class_texture2d.md) **get_texture** ( param: [TextureParam](#enum_basematerial3d_textureparam) ) const[^const]

The texture to use for multiplying the intensity of the subsurface scattering transmittance intensity. See also [`subsurf_scatter_texture`](#class_basematerial3d_property_subsurf_scatter_texture). Ignored if [`subsurf_scatter_skin_mode`](#class_basematerial3d_property_subsurf_scatter_skin_mode) is `true`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_basematerial3d_property_texture_filter"></div>

[TextureFilter](#enum_basematerial3d_texturefilter) **texture_filter** = ``3`` <div id="class_basematerial3d_property_texture_filter"></div>

- `void` **set_texture_filter** ( value: [TextureFilter](#enum_basematerial3d_texturefilter) )
- [TextureFilter](#enum_basematerial3d_texturefilter) **get_texture_filter** ( )

Filter flags for the texture. See [TextureFilter](#enum_basematerial3d_texturefilter) for options.

 **Note:** [`heightmap_texture`](#class_basematerial3d_property_heightmap_texture) is always sampled with linear filtering, even if nearest-neighbor filtering is selected here. This is to ensure the heightmap effect looks as intended. If you need sharper height transitions between pixels, resize the heightmap texture in an image editor with nearest-neighbor filtering.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_basematerial3d_property_texture_repeat"></div>

[`bool`](class_bool.md) **texture_repeat** = ``true`` <div id="class_basematerial3d_property_texture_repeat"></div>

- `void` **set_flag** ( flag: [Flags](#enum_basematerial3d_flags), enable: [`bool`](class_bool.md) )
- [`bool`](class_bool.md) **get_flag** ( flag: [Flags](#enum_basematerial3d_flags) ) const[^const]

Repeat flags for the texture. See [TextureFilter](#enum_basematerial3d_texturefilter) for options.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_basematerial3d_property_transparency"></div>

[Transparency](#enum_basematerial3d_transparency) **transparency** = ``0`` <div id="class_basematerial3d_property_transparency"></div>

- `void` **set_transparency** ( value: [Transparency](#enum_basematerial3d_transparency) )
- [Transparency](#enum_basematerial3d_transparency) **get_transparency** ( )

The material's transparency mode. Some transparency modes will disable shadow casting. Any transparency mode other than [`TRANSPARENCY_DISABLED`](#class_basematerial3d_constant_transparency_disabled) has a greater performance impact compared to opaque rendering. See also [`blend_mode`](#class_basematerial3d_property_blend_mode).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_basematerial3d_property_use_particle_trails"></div>

[`bool`](class_bool.md) **use_particle_trails** = ``false`` <div id="class_basematerial3d_property_use_particle_trails"></div>

- `void` **set_flag** ( flag: [Flags](#enum_basematerial3d_flags), enable: [`bool`](class_bool.md) )
- [`bool`](class_bool.md) **get_flag** ( flag: [Flags](#enum_basematerial3d_flags) ) const[^const]

If `true`, enables parts of the shader required for [`GPUParticles3D`](class_gpuparticles3d.md) trails to function. This also requires using a mesh with appropriate skinning, such as [`RibbonTrailMesh`](class_ribbontrailmesh.md) or [`TubeTrailMesh`](class_tubetrailmesh.md). Enabling this feature outside of materials used in [`GPUParticles3D`](class_gpuparticles3d.md) meshes will break material rendering.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_basematerial3d_property_use_point_size"></div>

[`bool`](class_bool.md) **use_point_size** = ``false`` <div id="class_basematerial3d_property_use_point_size"></div>

- `void` **set_flag** ( flag: [Flags](#enum_basematerial3d_flags), enable: [`bool`](class_bool.md) )
- [`bool`](class_bool.md) **get_flag** ( flag: [Flags](#enum_basematerial3d_flags) ) const[^const]

If `true`, render point size can be changed.

 **Note:** This is only effective for objects whose geometry is point-based rather than triangle-based. See also [`point_size`](#class_basematerial3d_property_point_size).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_basematerial3d_property_uv1_offset"></div>

[`Vector3`](class_vector3.md) **uv1_offset** = ``Vector3(0, 0, 0)`` <div id="class_basematerial3d_property_uv1_offset"></div>

- `void` **set_uv1_offset** ( value: [`Vector3`](class_vector3.md) )
- [`Vector3`](class_vector3.md) **get_uv1_offset** ( )

How much to offset the `UV` coordinates. This amount will be added to `UV` in the vertex function. This can be used to offset a texture. The Z component is used when [`uv1_triplanar`](#class_basematerial3d_property_uv1_triplanar) is enabled, but it is not used anywhere else.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_basematerial3d_property_uv1_scale"></div>

[`Vector3`](class_vector3.md) **uv1_scale** = ``Vector3(1, 1, 1)`` <div id="class_basematerial3d_property_uv1_scale"></div>

- `void` **set_uv1_scale** ( value: [`Vector3`](class_vector3.md) )
- [`Vector3`](class_vector3.md) **get_uv1_scale** ( )

How much to scale the `UV` coordinates. This is multiplied by `UV` in the vertex function. The Z component is used when [`uv1_triplanar`](#class_basematerial3d_property_uv1_triplanar) is enabled, but it is not used anywhere else.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_basematerial3d_property_uv1_triplanar"></div>

[`bool`](class_bool.md) **uv1_triplanar** = ``false`` <div id="class_basematerial3d_property_uv1_triplanar"></div>

- `void` **set_flag** ( flag: [Flags](#enum_basematerial3d_flags), enable: [`bool`](class_bool.md) )
- [`bool`](class_bool.md) **get_flag** ( flag: [Flags](#enum_basematerial3d_flags) ) const[^const]

If `true`, instead of using `UV` textures will use a triplanar texture lookup to determine how to apply textures. Triplanar uses the orientation of the object's surface to blend between texture coordinates. It reads from the source texture 3 times, once for each axis and then blends between the results based on how closely the pixel aligns with each axis. This is often used for natural features to get a realistic blend of materials. Because triplanar texturing requires many more texture reads per-pixel it is much slower than normal UV texturing. Additionally, because it is blending the texture between the three axes, it is unsuitable when you are trying to achieve crisp texturing.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_basematerial3d_property_uv1_triplanar_sharpness"></div>

[`float`](class_float.md) **uv1_triplanar_sharpness** = ``1.0`` <div id="class_basematerial3d_property_uv1_triplanar_sharpness"></div>

- `void` **set_uv1_triplanar_blend_sharpness** ( value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_uv1_triplanar_blend_sharpness** ( )

A lower number blends the texture more softly while a higher number blends the texture more sharply.

 **Note:** [`uv1_triplanar_sharpness`](#class_basematerial3d_property_uv1_triplanar_sharpness) is clamped between `0.0` and `150.0` (inclusive) as values outside that range can look broken depending on the mesh.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_basematerial3d_property_uv1_world_triplanar"></div>

[`bool`](class_bool.md) **uv1_world_triplanar** = ``false`` <div id="class_basematerial3d_property_uv1_world_triplanar"></div>

- `void` **set_flag** ( flag: [Flags](#enum_basematerial3d_flags), enable: [`bool`](class_bool.md) )
- [`bool`](class_bool.md) **get_flag** ( flag: [Flags](#enum_basematerial3d_flags) ) const[^const]

If `true`, triplanar mapping for `UV` is calculated in world space rather than object local space. See also [`uv1_triplanar`](#class_basematerial3d_property_uv1_triplanar).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_basematerial3d_property_uv2_offset"></div>

[`Vector3`](class_vector3.md) **uv2_offset** = ``Vector3(0, 0, 0)`` <div id="class_basematerial3d_property_uv2_offset"></div>

- `void` **set_uv2_offset** ( value: [`Vector3`](class_vector3.md) )
- [`Vector3`](class_vector3.md) **get_uv2_offset** ( )

How much to offset the `UV2` coordinates. This amount will be added to `UV2` in the vertex function. This can be used to offset a texture. The Z component is used when [`uv2_triplanar`](#class_basematerial3d_property_uv2_triplanar) is enabled, but it is not used anywhere else.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_basematerial3d_property_uv2_scale"></div>

[`Vector3`](class_vector3.md) **uv2_scale** = ``Vector3(1, 1, 1)`` <div id="class_basematerial3d_property_uv2_scale"></div>

- `void` **set_uv2_scale** ( value: [`Vector3`](class_vector3.md) )
- [`Vector3`](class_vector3.md) **get_uv2_scale** ( )

How much to scale the `UV2` coordinates. This is multiplied by `UV2` in the vertex function. The Z component is used when [`uv2_triplanar`](#class_basematerial3d_property_uv2_triplanar) is enabled, but it is not used anywhere else.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_basematerial3d_property_uv2_triplanar"></div>

[`bool`](class_bool.md) **uv2_triplanar** = ``false`` <div id="class_basematerial3d_property_uv2_triplanar"></div>

- `void` **set_flag** ( flag: [Flags](#enum_basematerial3d_flags), enable: [`bool`](class_bool.md) )
- [`bool`](class_bool.md) **get_flag** ( flag: [Flags](#enum_basematerial3d_flags) ) const[^const]

If `true`, instead of using `UV2` textures will use a triplanar texture lookup to determine how to apply textures. Triplanar uses the orientation of the object's surface to blend between texture coordinates. It reads from the source texture 3 times, once for each axis and then blends between the results based on how closely the pixel aligns with each axis. This is often used for natural features to get a realistic blend of materials. Because triplanar texturing requires many more texture reads per-pixel it is much slower than normal UV texturing. Additionally, because it is blending the texture between the three axes, it is unsuitable when you are trying to achieve crisp texturing.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_basematerial3d_property_uv2_triplanar_sharpness"></div>

[`float`](class_float.md) **uv2_triplanar_sharpness** = ``1.0`` <div id="class_basematerial3d_property_uv2_triplanar_sharpness"></div>

- `void` **set_uv2_triplanar_blend_sharpness** ( value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_uv2_triplanar_blend_sharpness** ( )

A lower number blends the texture more softly while a higher number blends the texture more sharply.

 **Note:** [`uv2_triplanar_sharpness`](#class_basematerial3d_property_uv2_triplanar_sharpness) is clamped between `0.0` and `150.0` (inclusive) as values outside that range can look broken depending on the mesh.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_basematerial3d_property_uv2_world_triplanar"></div>

[`bool`](class_bool.md) **uv2_world_triplanar** = ``false`` <div id="class_basematerial3d_property_uv2_world_triplanar"></div>

- `void` **set_flag** ( flag: [Flags](#enum_basematerial3d_flags), enable: [`bool`](class_bool.md) )
- [`bool`](class_bool.md) **get_flag** ( flag: [Flags](#enum_basematerial3d_flags) ) const[^const]

If `true`, triplanar mapping for `UV2` is calculated in world space rather than object local space. See also [`uv2_triplanar`](#class_basematerial3d_property_uv2_triplanar).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_basematerial3d_property_vertex_color_is_srgb"></div>

[`bool`](class_bool.md) **vertex_color_is_srgb** = ``false`` <div id="class_basematerial3d_property_vertex_color_is_srgb"></div>

- `void` **set_flag** ( flag: [Flags](#enum_basematerial3d_flags), enable: [`bool`](class_bool.md) )
- [`bool`](class_bool.md) **get_flag** ( flag: [Flags](#enum_basematerial3d_flags) ) const[^const]

If `true`, vertex colors are considered to be stored in sRGB color space and are converted to linear color space during rendering. If `false`, vertex colors are considered to be stored in linear color space and are rendered as-is. See also [`albedo_texture_force_srgb`](#class_basematerial3d_property_albedo_texture_force_srgb).

 **Note:** Only effective when using the Forward+ and Mobile rendering methods, not Compatibility.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_basematerial3d_property_vertex_color_use_as_albedo"></div>

[`bool`](class_bool.md) **vertex_color_use_as_albedo** = ``false`` <div id="class_basematerial3d_property_vertex_color_use_as_albedo"></div>

- `void` **set_flag** ( flag: [Flags](#enum_basematerial3d_flags), enable: [`bool`](class_bool.md) )
- [`bool`](class_bool.md) **get_flag** ( flag: [Flags](#enum_basematerial3d_flags) ) const[^const]

If `true`, the vertex color is used as albedo color.

<!-- rst-class:: classref-section-separator -->

---

## 方法说明

<div id="_class_basematerial3d_method_get_feature"></div>

[`bool`](class_bool.md) **get_feature** ( feature: [Feature](#enum_basematerial3d_feature) ) const[^const]<div id="class_basematerial3d_method_get_feature"></div>

Returns `true`, if the specified [Feature](#enum_basematerial3d_feature) is enabled.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_basematerial3d_method_get_flag"></div>

[`bool`](class_bool.md) **get_flag** ( flag: [Flags](#enum_basematerial3d_flags) ) const[^const]<div id="class_basematerial3d_method_get_flag"></div>

Returns `true`, if the specified flag is enabled. See [Flags](#enum_basematerial3d_flags) enumerator for options.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_basematerial3d_method_get_texture"></div>

[`Texture2D`](class_texture2d.md) **get_texture** ( param: [TextureParam](#enum_basematerial3d_textureparam) ) const[^const]<div id="class_basematerial3d_method_get_texture"></div>

Returns the [`Texture2D`](class_texture2d.md) associated with the specified [TextureParam](#enum_basematerial3d_textureparam).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_basematerial3d_method_set_feature"></div>

`void` **set_feature** ( feature: [Feature](#enum_basematerial3d_feature), enable: [`bool`](class_bool.md) )<div id="class_basematerial3d_method_set_feature"></div>

If `true`, enables the specified [Feature](#enum_basematerial3d_feature). Many features that are available in **BaseMaterial3D** s need to be enabled before use. This way the cost for using the feature is only incurred when specified. Features can also be enabled by setting the corresponding member to `true`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_basematerial3d_method_set_flag"></div>

`void` **set_flag** ( flag: [Flags](#enum_basematerial3d_flags), enable: [`bool`](class_bool.md) )<div id="class_basematerial3d_method_set_flag"></div>

If `true`, enables the specified flag. Flags are optional behavior that can be turned on and off. Only one flag can be enabled at a time with this function, the flag enumerators cannot be bit-masked together to enable or disable multiple flags at once. Flags can also be enabled by setting the corresponding member to `true`. See [Flags](#enum_basematerial3d_flags) enumerator for options.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_basematerial3d_method_set_texture"></div>

`void` **set_texture** ( param: [TextureParam](#enum_basematerial3d_textureparam), texture: [`Texture2D`](class_texture2d.md) )<div id="class_basematerial3d_method_set_texture"></div>

Sets the texture for the slot specified by `param`. See [TextureParam](#enum_basematerial3d_textureparam) for available slots.

[^virtual]: 本方法通常需要用户覆盖才能生效。
[^const]: 本方法无副作用，不会修改该实例的任何成员变量。
[^vararg]: 本方法除了能接受在此处描述的参数外，还能够继续接受任意数量的参数。
[^constructor]: 本方法用于构造某个类型。
[^static]: 调用本方法无需实例，可直接使用类名进行调用。
[^operator]: 本方法描述的是使用本类型作为左操作数的有效运算符。
[^bitfield]: 这个值是由下列位标志构成位掩码的整数。
[^void]: 无返回值。
