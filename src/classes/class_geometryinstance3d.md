<!-- ⚠ 请勿编辑本文件 ⚠ -->
<!-- 本文档使用脚本从 WeDot 引擎源码仓库生成。 -->
<!-- 生成脚本：https://github.com/WeDot-Engine/WeDot/tree/master/doc/tools/make_md.py； -->
<!-- 原文件：https://github.com/WeDot-Engine/WeDot/tree/master/doc/classes/GeometryInstance3D.xml。 -->

<div id="_class_geometryinstance3d"></div>

# GeometryInstance3D

**继承：** [`VisualInstance3D`](class_visualinstance3d.md) **<** [`Node3D`](class_node3d.md) **<** [`Node`](class_node.md) **<** [`Object`](class_object.md)

**派生：** [`CPUParticles3D`](class_cpuparticles3d.md), [`CSGShape3D`](class_csgshape3d.md), [`GPUParticles3D`](class_gpuparticles3d.md), [`Label3D`](class_label3d.md), [`MeshInstance3D`](class_meshinstance3d.md), [`MultiMeshInstance3D`](class_multimeshinstance3d.md), [`SpriteBase3D`](class_spritebase3d.md)

Base node for geometry-based visual instances.

## 描述

Base node for geometry-based visual instances. Shares some common functionality like visibility and custom materials.

## 属性

|||
|:-:|:--|
| [ShadowCastingSetting](#enum_geometryinstance3d_shadowcastingsetting)       | [`cast_shadow`](class_geometryinstance3d.md#class_geometryinstance3d_property_cast_shadow)                                     | ``1``                      |
| [`AABB`](class_aabb.md)                                                     | [`custom_aabb`](class_geometryinstance3d.md#class_geometryinstance3d_property_custom_aabb)                                     | ``AABB(0, 0, 0, 0, 0, 0)`` |
| [`float`](class_float.md)                                                   | [`extra_cull_margin`](class_geometryinstance3d.md#class_geometryinstance3d_property_extra_cull_margin)                         | ``0.0``                    |
| [LightmapScale](#enum_geometryinstance3d_lightmapscale)                     | [`gi_lightmap_scale`](class_geometryinstance3d.md#class_geometryinstance3d_property_gi_lightmap_scale)                         | ``0``                      |
| [GIMode](#enum_geometryinstance3d_gimode)                                   | [`gi_mode`](class_geometryinstance3d.md#class_geometryinstance3d_property_gi_mode)                                             | ``1``                      |
| [`bool`](class_bool.md)                                                     | [`ignore_occlusion_culling`](class_geometryinstance3d.md#class_geometryinstance3d_property_ignore_occlusion_culling)           | ``false``                  |
| [`float`](class_float.md)                                                   | [`lod_bias`](class_geometryinstance3d.md#class_geometryinstance3d_property_lod_bias)                                           | ``1.0``                    |
| [`Material`](class_material.md)                                             | [`material_overlay`](class_geometryinstance3d.md#class_geometryinstance3d_property_material_overlay)                           |                            |
| [`Material`](class_material.md)                                             | [`material_override`](class_geometryinstance3d.md#class_geometryinstance3d_property_material_override)                         |                            |
| [`float`](class_float.md)                                                   | [`transparency`](class_geometryinstance3d.md#class_geometryinstance3d_property_transparency)                                   | ``0.0``                    |
| [`float`](class_float.md)                                                   | [`visibility_range_begin`](class_geometryinstance3d.md#class_geometryinstance3d_property_visibility_range_begin)               | ``0.0``                    |
| [`float`](class_float.md)                                                   | [`visibility_range_begin_margin`](class_geometryinstance3d.md#class_geometryinstance3d_property_visibility_range_begin_margin) | ``0.0``                    |
| [`float`](class_float.md)                                                   | [`visibility_range_end`](class_geometryinstance3d.md#class_geometryinstance3d_property_visibility_range_end)                   | ``0.0``                    |
| [`float`](class_float.md)                                                   | [`visibility_range_end_margin`](class_geometryinstance3d.md#class_geometryinstance3d_property_visibility_range_end_margin)     | ``0.0``                    |
| [VisibilityRangeFadeMode](#enum_geometryinstance3d_visibilityrangefademode) | [`visibility_range_fade_mode`](class_geometryinstance3d.md#class_geometryinstance3d_property_visibility_range_fade_mode)       | ``0``                      |

## 方法

|||
|:-:|:--|
| [`Variant`](class_variant.md) | [`get_instance_shader_parameter`](class_geometryinstance3d.md#class_geometryinstance3d_method_get_instance_shader_parameter) ( name: [`StringName`](class_stringname.md) ) const[^const]                         |
| `void`                        | [`set_instance_shader_parameter`](class_geometryinstance3d.md#class_geometryinstance3d_method_set_instance_shader_parameter) ( name: [`StringName`](class_stringname.md), value: [`Variant`](class_variant.md) ) |

<!-- rst-class:: classref-section-separator -->

---

## 枚举

<div id="_class_enum_geometryinstance3d_shadowcastingsetting"></div>

enum **ShadowCastingSetting**: <div id="enum_geometryinstance3d_shadowcastingsetting"></div>

<div id="_class_geometryinstance3d_constant_shadow_casting_setting_off"></div>

[ShadowCastingSetting](#enum_geometryinstance3d_shadowcastingsetting) **SHADOW_CASTING_SETTING_OFF** = ``0``

Will not cast any shadows. Use this to improve performance for small geometry that is unlikely to cast noticeable shadows (such as debris).

<div id="_class_geometryinstance3d_constant_shadow_casting_setting_on"></div>

[ShadowCastingSetting](#enum_geometryinstance3d_shadowcastingsetting) **SHADOW_CASTING_SETTING_ON** = ``1``

Will cast shadows from all visible faces in the GeometryInstance3D.

Will take culling into account, so faces not being rendered will not be taken into account when shadow casting.

<div id="_class_geometryinstance3d_constant_shadow_casting_setting_double_sided"></div>

[ShadowCastingSetting](#enum_geometryinstance3d_shadowcastingsetting) **SHADOW_CASTING_SETTING_DOUBLE_SIDED** = ``2``

Will cast shadows from all visible faces in the GeometryInstance3D.

Will not take culling into account, so all faces will be taken into account when shadow casting.

<div id="_class_geometryinstance3d_constant_shadow_casting_setting_shadows_only"></div>

[ShadowCastingSetting](#enum_geometryinstance3d_shadowcastingsetting) **SHADOW_CASTING_SETTING_SHADOWS_ONLY** = ``3``

Will only show the shadows casted from this object.

In other words, the actual mesh will not be visible, only the shadows casted from the mesh will be.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_enum_geometryinstance3d_gimode"></div>

enum **GIMode**: <div id="enum_geometryinstance3d_gimode"></div>

<div id="_class_geometryinstance3d_constant_gi_mode_disabled"></div>

[GIMode](#enum_geometryinstance3d_gimode) **GI_MODE_DISABLED** = ``0``

Disabled global illumination mode. Use for dynamic objects that do not contribute to global illumination (such as characters). When using [`VoxelGI`](class_voxelgi.md) and SDFGI, the geometry will *receive* indirect lighting and reflections but the geometry will not be considered in GI baking.

<div id="_class_geometryinstance3d_constant_gi_mode_static"></div>

[GIMode](#enum_geometryinstance3d_gimode) **GI_MODE_STATIC** = ``1``

Baked global illumination mode. Use for static objects that contribute to global illumination (such as level geometry). This GI mode is effective when using [`VoxelGI`](class_voxelgi.md), SDFGI and [`LightmapGI`](class_lightmapgi.md).

<div id="_class_geometryinstance3d_constant_gi_mode_dynamic"></div>

[GIMode](#enum_geometryinstance3d_gimode) **GI_MODE_DYNAMIC** = ``2``

Dynamic global illumination mode. Use for dynamic objects that contribute to global illumination. This GI mode is only effective when using [`VoxelGI`](class_voxelgi.md), but it has a higher performance impact than [`GI_MODE_STATIC`](class_geometryinstance3d.md#class_geometryinstance3d_constant_gi_mode_static). When using other GI methods, this will act the same as [`GI_MODE_DISABLED`](class_geometryinstance3d.md#class_geometryinstance3d_constant_gi_mode_disabled). When using [`LightmapGI`](class_lightmapgi.md), the object will receive indirect lighting using lightmap probes instead of using the baked lightmap texture.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_enum_geometryinstance3d_lightmapscale"></div>

enum **LightmapScale**: <div id="enum_geometryinstance3d_lightmapscale"></div>

<div id="_class_geometryinstance3d_constant_lightmap_scale_1x"></div>

[LightmapScale](#enum_geometryinstance3d_lightmapscale) **LIGHTMAP_SCALE_1X** = ``0``

The standard texel density for lightmapping with [`LightmapGI`](class_lightmapgi.md).

<div id="_class_geometryinstance3d_constant_lightmap_scale_2x"></div>

[LightmapScale](#enum_geometryinstance3d_lightmapscale) **LIGHTMAP_SCALE_2X** = ``1``

Multiplies texel density by 2× for lightmapping with [`LightmapGI`](class_lightmapgi.md). To ensure consistency in texel density, use this when scaling a mesh by a factor between 1.5 and 3.0.

<div id="_class_geometryinstance3d_constant_lightmap_scale_4x"></div>

[LightmapScale](#enum_geometryinstance3d_lightmapscale) **LIGHTMAP_SCALE_4X** = ``2``

Multiplies texel density by 4× for lightmapping with [`LightmapGI`](class_lightmapgi.md). To ensure consistency in texel density, use this when scaling a mesh by a factor between 3.0 and 6.0.

<div id="_class_geometryinstance3d_constant_lightmap_scale_8x"></div>

[LightmapScale](#enum_geometryinstance3d_lightmapscale) **LIGHTMAP_SCALE_8X** = ``3``

Multiplies texel density by 8× for lightmapping with [`LightmapGI`](class_lightmapgi.md). To ensure consistency in texel density, use this when scaling a mesh by a factor greater than 6.0.

<div id="_class_geometryinstance3d_constant_lightmap_scale_max"></div>

[LightmapScale](#enum_geometryinstance3d_lightmapscale) **LIGHTMAP_SCALE_MAX** = ``4``

Represents the size of the [LightmapScale](#enum_geometryinstance3d_lightmapscale) enum.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_enum_geometryinstance3d_visibilityrangefademode"></div>

enum **VisibilityRangeFadeMode**: <div id="enum_geometryinstance3d_visibilityrangefademode"></div>

<div id="_class_geometryinstance3d_constant_visibility_range_fade_disabled"></div>

[VisibilityRangeFadeMode](#enum_geometryinstance3d_visibilityrangefademode) **VISIBILITY_RANGE_FADE_DISABLED** = ``0``

Will not fade itself nor its visibility dependencies, hysteresis will be used instead. This is the fastest approach to manual LOD, but it can result in noticeable LOD transitions depending on how the LOD meshes are authored. See [`visibility_range_begin`](class_geometryinstance3d.md#class_geometryinstance3d_property_visibility_range_begin) and [`Node3D.visibility_parent`](class_node3d.md#class_node3d_property_visibility_parent) for more information.

<div id="_class_geometryinstance3d_constant_visibility_range_fade_self"></div>

[VisibilityRangeFadeMode](#enum_geometryinstance3d_visibilityrangefademode) **VISIBILITY_RANGE_FADE_SELF** = ``1``

Will fade-out itself when reaching the limits of its own visibility range. This is slower than [`VISIBILITY_RANGE_FADE_DISABLED`](class_geometryinstance3d.md#class_geometryinstance3d_constant_visibility_range_fade_disabled), but it can provide smoother transitions. The fading range is determined by [`visibility_range_begin_margin`](class_geometryinstance3d.md#class_geometryinstance3d_property_visibility_range_begin_margin) and [`visibility_range_end_margin`](class_geometryinstance3d.md#class_geometryinstance3d_property_visibility_range_end_margin).

 **Note:** Only supported when using the Forward+ rendering method. When using the Mobile or Compatibility rendering method, this mode acts like [`VISIBILITY_RANGE_FADE_DISABLED`](class_geometryinstance3d.md#class_geometryinstance3d_constant_visibility_range_fade_disabled) but with hysteresis disabled.

<div id="_class_geometryinstance3d_constant_visibility_range_fade_dependencies"></div>

[VisibilityRangeFadeMode](#enum_geometryinstance3d_visibilityrangefademode) **VISIBILITY_RANGE_FADE_DEPENDENCIES** = ``2``

Will fade-in its visibility dependencies (see [`Node3D.visibility_parent`](class_node3d.md#class_node3d_property_visibility_parent)) when reaching the limits of its own visibility range. This is slower than [`VISIBILITY_RANGE_FADE_DISABLED`](class_geometryinstance3d.md#class_geometryinstance3d_constant_visibility_range_fade_disabled), but it can provide smoother transitions. The fading range is determined by [`visibility_range_begin_margin`](class_geometryinstance3d.md#class_geometryinstance3d_property_visibility_range_begin_margin) and [`visibility_range_end_margin`](class_geometryinstance3d.md#class_geometryinstance3d_property_visibility_range_end_margin).

 **Note:** Only supported when using the Forward+ rendering method. When using the Mobile or Compatibility rendering method, this mode acts like [`VISIBILITY_RANGE_FADE_DISABLED`](class_geometryinstance3d.md#class_geometryinstance3d_constant_visibility_range_fade_disabled) but with hysteresis disabled.

<!-- rst-class:: classref-section-separator -->

---

## 属性说明

<div id="_class_geometryinstance3d_property_cast_shadow"></div>

[ShadowCastingSetting](#enum_geometryinstance3d_shadowcastingsetting) **cast_shadow** = ``1`` <div id="class_geometryinstance3d_property_cast_shadow"></div>

- `void` **set_cast_shadows_setting** ( value: [ShadowCastingSetting](#enum_geometryinstance3d_shadowcastingsetting) )
- [ShadowCastingSetting](#enum_geometryinstance3d_shadowcastingsetting) **get_cast_shadows_setting** ( )

The selected shadow casting flag. See [ShadowCastingSetting](#enum_geometryinstance3d_shadowcastingsetting) for possible values.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_geometryinstance3d_property_custom_aabb"></div>

[`AABB`](class_aabb.md) **custom_aabb** = ``AABB(0, 0, 0, 0, 0, 0)`` <div id="class_geometryinstance3d_property_custom_aabb"></div>

- `void` **set_custom_aabb** ( value: [`AABB`](class_aabb.md) )
- [`AABB`](class_aabb.md) **get_custom_aabb** ( )

Overrides the bounding box of this node with a custom one. This can be used to avoid the expensive [`AABB`](class_aabb.md) recalculation that happens when a skeleton is used with a [`MeshInstance3D`](class_meshinstance3d.md) or to have precise control over the [`MeshInstance3D`](class_meshinstance3d.md)'s bounding box. To use the default AABB, set value to an [`AABB`](class_aabb.md) with all fields set to `0.0`. To avoid frustum culling, set [`custom_aabb`](class_geometryinstance3d.md#class_geometryinstance3d_property_custom_aabb) to a very large AABB that covers your entire game world such as `AABB(-10000, -10000, -10000, 20000, 20000, 20000)`. To disable all forms of culling (including occlusion culling), call [`RenderingServer.instance_set_ignore_culling`](class_renderingserver.md#class_renderingserver_method_instance_set_ignore_culling) on the **GeometryInstance3D**'s [`RID`](class_rid.md).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_geometryinstance3d_property_extra_cull_margin"></div>

[`float`](class_float.md) **extra_cull_margin** = ``0.0`` <div id="class_geometryinstance3d_property_extra_cull_margin"></div>

- `void` **set_extra_cull_margin** ( value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_extra_cull_margin** ( )

The extra distance added to the GeometryInstance3D's bounding box ([`AABB`](class_aabb.md)) to increase its cull box.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_geometryinstance3d_property_gi_lightmap_scale"></div>

[LightmapScale](#enum_geometryinstance3d_lightmapscale) **gi_lightmap_scale** = ``0`` <div id="class_geometryinstance3d_property_gi_lightmap_scale"></div>

- `void` **set_lightmap_scale** ( value: [LightmapScale](#enum_geometryinstance3d_lightmapscale) )
- [LightmapScale](#enum_geometryinstance3d_lightmapscale) **get_lightmap_scale** ( )

The texel density to use for lightmapping in [`LightmapGI`](class_lightmapgi.md). Greater scale values provide higher resolution in the lightmap, which can result in sharper shadows for lights that have both direct and indirect light baked. However, greater scale values will also increase the space taken by the mesh in the lightmap texture, which increases the memory, storage, and bake time requirements. When using a single mesh at different scales, consider adjusting this value to keep the lightmap texel density consistent across meshes.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_geometryinstance3d_property_gi_mode"></div>

[GIMode](#enum_geometryinstance3d_gimode) **gi_mode** = ``1`` <div id="class_geometryinstance3d_property_gi_mode"></div>

- `void` **set_gi_mode** ( value: [GIMode](#enum_geometryinstance3d_gimode) )
- [GIMode](#enum_geometryinstance3d_gimode) **get_gi_mode** ( )

The global illumination mode to use for the whole geometry. To avoid inconsistent results, use a mode that matches the purpose of the mesh during gameplay (static/dynamic).

 **Note:** Lights' bake mode will also affect the global illumination rendering. See [`Light3D.light_bake_mode`](class_light3d.md#class_light3d_property_light_bake_mode).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_geometryinstance3d_property_ignore_occlusion_culling"></div>

[`bool`](class_bool.md) **ignore_occlusion_culling** = ``false`` <div id="class_geometryinstance3d_property_ignore_occlusion_culling"></div>

- `void` **set_ignore_occlusion_culling** ( value: [`bool`](class_bool.md) )
- [`bool`](class_bool.md) **is_ignoring_occlusion_culling** ( )

If `true`, disables occlusion culling for this instance. Useful for gizmos that must be rendered even when occlusion culling is in use.

 **Note:** [`ignore_occlusion_culling`](class_geometryinstance3d.md#class_geometryinstance3d_property_ignore_occlusion_culling) does not affect frustum culling (which is what happens when an object is not visible given the camera's angle). To avoid frustum culling, set [`custom_aabb`](class_geometryinstance3d.md#class_geometryinstance3d_property_custom_aabb) to a very large AABB that covers your entire game world such as `AABB(-10000, -10000, -10000, 20000, 20000, 20000)`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_geometryinstance3d_property_lod_bias"></div>

[`float`](class_float.md) **lod_bias** = ``1.0`` <div id="class_geometryinstance3d_property_lod_bias"></div>

- `void` **set_lod_bias** ( value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_lod_bias** ( )

Changes how quickly the mesh transitions to a lower level of detail. A value of 0 will force the mesh to its lowest level of detail, a value of 1 will use the default settings, and larger values will keep the mesh in a higher level of detail at farther distances.

Useful for testing level of detail transitions in the editor.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_geometryinstance3d_property_material_overlay"></div>

[`Material`](class_material.md) **material_overlay** <div id="class_geometryinstance3d_property_material_overlay"></div>

- `void` **set_material_overlay** ( value: [`Material`](class_material.md) )
- [`Material`](class_material.md) **get_material_overlay** ( )

The material overlay for the whole geometry.

If a material is assigned to this property, it will be rendered on top of any other active material for all the surfaces.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_geometryinstance3d_property_material_override"></div>

[`Material`](class_material.md) **material_override** <div id="class_geometryinstance3d_property_material_override"></div>

- `void` **set_material_override** ( value: [`Material`](class_material.md) )
- [`Material`](class_material.md) **get_material_override** ( )

The material override for the whole geometry.

If a material is assigned to this property, it will be used instead of any material set in any material slot of the mesh.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_geometryinstance3d_property_transparency"></div>

[`float`](class_float.md) **transparency** = ``0.0`` <div id="class_geometryinstance3d_property_transparency"></div>

- `void` **set_transparency** ( value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_transparency** ( )

The transparency applied to the whole geometry (as a multiplier of the materials' existing transparency). `0.0` is fully opaque, while `1.0` is fully transparent. Values greater than `0.0` (exclusive) will force the geometry's materials to go through the transparent pipeline, which is slower to render and can exhibit rendering issues due to incorrect transparency sorting. However, unlike using a transparent material, setting [`transparency`](class_geometryinstance3d.md#class_geometryinstance3d_property_transparency) to a value greater than `0.0` (exclusive) will *not* disable shadow rendering.

In spatial shaders, `1.0 - transparency` is set as the default value of the `ALPHA` built-in.

 **Note:** [`transparency`](class_geometryinstance3d.md#class_geometryinstance3d_property_transparency) is clamped between `0.0` and `1.0`, so this property cannot be used to make transparent materials more opaque than they originally are.

 **Note:** Only supported when using the Forward+ rendering method. When using the Mobile or Compatibility rendering method, [`transparency`](class_geometryinstance3d.md#class_geometryinstance3d_property_transparency) is ignored and is considered as always being `0.0`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_geometryinstance3d_property_visibility_range_begin"></div>

[`float`](class_float.md) **visibility_range_begin** = ``0.0`` <div id="class_geometryinstance3d_property_visibility_range_begin"></div>

- `void` **set_visibility_range_begin** ( value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_visibility_range_begin** ( )

Starting distance from which the GeometryInstance3D will be visible, taking [`visibility_range_begin_margin`](class_geometryinstance3d.md#class_geometryinstance3d_property_visibility_range_begin_margin) into account as well. The default value of 0 is used to disable the range check.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_geometryinstance3d_property_visibility_range_begin_margin"></div>

[`float`](class_float.md) **visibility_range_begin_margin** = ``0.0`` <div id="class_geometryinstance3d_property_visibility_range_begin_margin"></div>

- `void` **set_visibility_range_begin_margin** ( value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_visibility_range_begin_margin** ( )

Margin for the [`visibility_range_begin`](class_geometryinstance3d.md#class_geometryinstance3d_property_visibility_range_begin) threshold. The GeometryInstance3D will only change its visibility state when it goes over or under the [`visibility_range_begin`](class_geometryinstance3d.md#class_geometryinstance3d_property_visibility_range_begin) threshold by this amount.

If [`visibility_range_fade_mode`](class_geometryinstance3d.md#class_geometryinstance3d_property_visibility_range_fade_mode) is [`VISIBILITY_RANGE_FADE_DISABLED`](class_geometryinstance3d.md#class_geometryinstance3d_constant_visibility_range_fade_disabled), this acts as a hysteresis distance. If [`visibility_range_fade_mode`](class_geometryinstance3d.md#class_geometryinstance3d_property_visibility_range_fade_mode) is [`VISIBILITY_RANGE_FADE_SELF`](class_geometryinstance3d.md#class_geometryinstance3d_constant_visibility_range_fade_self) or [`VISIBILITY_RANGE_FADE_DEPENDENCIES`](class_geometryinstance3d.md#class_geometryinstance3d_constant_visibility_range_fade_dependencies), this acts as a fade transition distance and must be set to a value greater than `0.0` for the effect to be noticeable.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_geometryinstance3d_property_visibility_range_end"></div>

[`float`](class_float.md) **visibility_range_end** = ``0.0`` <div id="class_geometryinstance3d_property_visibility_range_end"></div>

- `void` **set_visibility_range_end** ( value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_visibility_range_end** ( )

Distance from which the GeometryInstance3D will be hidden, taking [`visibility_range_end_margin`](class_geometryinstance3d.md#class_geometryinstance3d_property_visibility_range_end_margin) into account as well. The default value of 0 is used to disable the range check.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_geometryinstance3d_property_visibility_range_end_margin"></div>

[`float`](class_float.md) **visibility_range_end_margin** = ``0.0`` <div id="class_geometryinstance3d_property_visibility_range_end_margin"></div>

- `void` **set_visibility_range_end_margin** ( value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_visibility_range_end_margin** ( )

Margin for the [`visibility_range_end`](class_geometryinstance3d.md#class_geometryinstance3d_property_visibility_range_end) threshold. The GeometryInstance3D will only change its visibility state when it goes over or under the [`visibility_range_end`](class_geometryinstance3d.md#class_geometryinstance3d_property_visibility_range_end) threshold by this amount.

If [`visibility_range_fade_mode`](class_geometryinstance3d.md#class_geometryinstance3d_property_visibility_range_fade_mode) is [`VISIBILITY_RANGE_FADE_DISABLED`](class_geometryinstance3d.md#class_geometryinstance3d_constant_visibility_range_fade_disabled), this acts as a hysteresis distance. If [`visibility_range_fade_mode`](class_geometryinstance3d.md#class_geometryinstance3d_property_visibility_range_fade_mode) is [`VISIBILITY_RANGE_FADE_SELF`](class_geometryinstance3d.md#class_geometryinstance3d_constant_visibility_range_fade_self) or [`VISIBILITY_RANGE_FADE_DEPENDENCIES`](class_geometryinstance3d.md#class_geometryinstance3d_constant_visibility_range_fade_dependencies), this acts as a fade transition distance and must be set to a value greater than `0.0` for the effect to be noticeable.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_geometryinstance3d_property_visibility_range_fade_mode"></div>

[VisibilityRangeFadeMode](#enum_geometryinstance3d_visibilityrangefademode) **visibility_range_fade_mode** = ``0`` <div id="class_geometryinstance3d_property_visibility_range_fade_mode"></div>

- `void` **set_visibility_range_fade_mode** ( value: [VisibilityRangeFadeMode](#enum_geometryinstance3d_visibilityrangefademode) )
- [VisibilityRangeFadeMode](#enum_geometryinstance3d_visibilityrangefademode) **get_visibility_range_fade_mode** ( )

Controls which instances will be faded when approaching the limits of the visibility range. See [VisibilityRangeFadeMode](#enum_geometryinstance3d_visibilityrangefademode) for possible values.

<!-- rst-class:: classref-section-separator -->

---

## 方法说明

<div id="_class_geometryinstance3d_method_get_instance_shader_parameter"></div>

[`Variant`](class_variant.md) **get_instance_shader_parameter** ( name: [`StringName`](class_stringname.md) ) const[^const]<div id="class_geometryinstance3d_method_get_instance_shader_parameter"></div>

Get the value of a shader parameter as set on this instance.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_geometryinstance3d_method_set_instance_shader_parameter"></div>

`void` **set_instance_shader_parameter** ( name: [`StringName`](class_stringname.md), value: [`Variant`](class_variant.md) )<div id="class_geometryinstance3d_method_set_instance_shader_parameter"></div>

Set the value of a shader uniform for this instance only ([*per-instance uniform*](../tutorials/shaders/shader_reference/shading_language.md#per-instance-uniforms)). See also [`ShaderMaterial.set_shader_parameter`](class_shadermaterial.md#class_shadermaterial_method_set_shader_parameter) to assign a uniform on all instances using the same [`ShaderMaterial`](class_shadermaterial.md).

 **Note:** For a shader uniform to be assignable on a per-instance basis, it *must* be defined with `instance uniform ...` rather than `uniform ...` in the shader code.

 **Note:** `name` is case-sensitive and must match the name of the uniform in the code exactly (not the capitalized name in the inspector).

 **Note:** Per-instance shader uniforms are currently only available in 3D, so there is no 2D equivalent of this method.

[^virtual]: 本方法通常需要用户覆盖才能生效。
[^const]: 本方法无副作用，不会修改该实例的任何成员变量。
[^vararg]: 本方法除了能接受在此处描述的参数外，还能够继续接受任意数量的参数。
[^constructor]: 本方法用于构造某个类型。
[^static]: 调用本方法无需实例，可直接使用类名进行调用。
[^operator]: 本方法描述的是使用本类型作为左操作数的有效运算符。
[^bitfield]: 这个值是由下列位标志构成位掩码的整数。
[^void]: 无返回值。
