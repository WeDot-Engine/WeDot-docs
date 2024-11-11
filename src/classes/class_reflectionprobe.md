<!-- ⚠ 请勿编辑本文件 ⚠ -->
<!-- 本文档使用脚本从 WeDot 引擎源码仓库生成。 -->
<!-- 生成脚本：https://github.com/WeDot-Engine/WeDot/tree/master/doc/tools/make_md.py； -->
<!-- 原文件：https://github.com/WeDot-Engine/WeDot/tree/master/doc/classes/ReflectionProbe.xml。 -->

<div id="_class_reflectionprobe"></div>

# ReflectionProbe

**继承：** [`VisualInstance3D`](class_visualinstance3d.md) **<** [`Node3D`](class_node3d.md) **<** [`Node`](class_node.md) **<** [`Object`](class_object.md)

Captures its surroundings to create fast, accurate reflections from a given point.

## 描述

Captures its surroundings as a cubemap, and stores versions of it with increasing levels of blur to simulate different material roughnesses.

The **ReflectionProbe** is used to create high-quality reflections at a low performance cost (when [`update_mode`](class_reflectionprobe.md#class_reflectionprobe_property_update_mode) is [`UPDATE_ONCE`](class_reflectionprobe.md#class_reflectionprobe_constant_update_once)). **ReflectionProbe** s can be blended together and with the rest of the scene smoothly. **ReflectionProbe** s can also be combined with [`VoxelGI`](class_voxelgi.md), SDFGI ([`Environment.sdfgi_enabled`](class_environment.md#class_environment_property_sdfgi_enabled)) and screen-space reflections ([`Environment.ssr_enabled`](class_environment.md#class_environment_property_ssr_enabled)) to get more accurate reflections in specific areas. **ReflectionProbe** s render all objects within their [`cull_mask`](class_reflectionprobe.md#class_reflectionprobe_property_cull_mask), so updating them can be quite expensive. It is best to update them once with the important static objects and then leave them as-is.

 **Note:** Unlike [`VoxelGI`](class_voxelgi.md) and SDFGI, **ReflectionProbe** s only source their environment from a [`WorldEnvironment`](class_worldenvironment.md) node. If you specify an [`Environment`](class_environment.md) resource within a [`Camera3D`](class_camera3d.md) node, it will be ignored by the **ReflectionProbe**. This can lead to incorrect lighting within the **ReflectionProbe**.

 **Note:** Reflection probes are only supported in the Forward+ and Mobile rendering methods, not Compatibility. When using the Mobile rendering method, only 8 reflection probes can be displayed on each mesh resource. Attempting to display more than 8 reflection probes on a single mesh resource will result in reflection probes flickering in and out as the camera moves.

 **Note:** When using the Mobile rendering method, reflection probes will only correctly affect meshes whose visibility AABB intersects with the reflection probe's AABB. If using a shader to deform the mesh in a way that makes it go outside its AABB, [`GeometryInstance3D.extra_cull_margin`](class_geometryinstance3d.md#class_geometryinstance3d_property_extra_cull_margin) must be increased on the mesh. Otherwise, the reflection probe may not be visible on the mesh.

## 属性

|||
|:-:|:--|
| [`Color`](class_color.md)                        | [`ambient_color`](class_reflectionprobe.md#class_reflectionprobe_property_ambient_color)               | ``Color(0, 0, 0, 1)``   |
| [`float`](class_float.md)                        | [`ambient_color_energy`](class_reflectionprobe.md#class_reflectionprobe_property_ambient_color_energy) | ``1.0``                 |
| [AmbientMode](#enum_reflectionprobe_ambientmode) | [`ambient_mode`](class_reflectionprobe.md#class_reflectionprobe_property_ambient_mode)                 | ``1``                   |
| [`bool`](class_bool.md)                          | [`box_projection`](class_reflectionprobe.md#class_reflectionprobe_property_box_projection)             | ``false``               |
| [`int`](class_int.md)                            | [`cull_mask`](class_reflectionprobe.md#class_reflectionprobe_property_cull_mask)                       | ``1048575``             |
| [`bool`](class_bool.md)                          | [`enable_shadows`](class_reflectionprobe.md#class_reflectionprobe_property_enable_shadows)             | ``false``               |
| [`float`](class_float.md)                        | [`intensity`](class_reflectionprobe.md#class_reflectionprobe_property_intensity)                       | ``1.0``                 |
| [`bool`](class_bool.md)                          | [`interior`](class_reflectionprobe.md#class_reflectionprobe_property_interior)                         | ``false``               |
| [`float`](class_float.md)                        | [`max_distance`](class_reflectionprobe.md#class_reflectionprobe_property_max_distance)                 | ``0.0``                 |
| [`float`](class_float.md)                        | [`mesh_lod_threshold`](class_reflectionprobe.md#class_reflectionprobe_property_mesh_lod_threshold)     | ``1.0``                 |
| [`Vector3`](class_vector3.md)                    | [`origin_offset`](class_reflectionprobe.md#class_reflectionprobe_property_origin_offset)               | ``Vector3(0, 0, 0)``    |
| [`int`](class_int.md)                            | [`reflection_mask`](class_reflectionprobe.md#class_reflectionprobe_property_reflection_mask)           | ``1048575``             |
| [`Vector3`](class_vector3.md)                    | [`size`](class_reflectionprobe.md#class_reflectionprobe_property_size)                                 | ``Vector3(20, 20, 20)`` |
| [UpdateMode](#enum_reflectionprobe_updatemode)   | [`update_mode`](class_reflectionprobe.md#class_reflectionprobe_property_update_mode)                   | ``0``                   |

<!-- rst-class:: classref-section-separator -->

---

## 枚举

<div id="_class_enum_reflectionprobe_updatemode"></div>

enum **UpdateMode**: <div id="enum_reflectionprobe_updatemode"></div>

<div id="_class_reflectionprobe_constant_update_once"></div>

[UpdateMode](#enum_reflectionprobe_updatemode) **UPDATE_ONCE** = ``0``

Update the probe once on the next frame (recommended for most objects). The corresponding radiance map will be generated over the following six frames. This takes more time to update than [`UPDATE_ALWAYS`](class_reflectionprobe.md#class_reflectionprobe_constant_update_always), but it has a lower performance cost and can result in higher-quality reflections. The ReflectionProbe is updated when its transform changes, but not when nearby geometry changes. You can force a **ReflectionProbe** update by moving the **ReflectionProbe** slightly in any direction.

<div id="_class_reflectionprobe_constant_update_always"></div>

[UpdateMode](#enum_reflectionprobe_updatemode) **UPDATE_ALWAYS** = ``1``

Update the probe every frame. This provides better results for fast-moving dynamic objects (such as cars). However, it has a significant performance cost. Due to the cost, it's recommended to only use one ReflectionProbe with [`UPDATE_ALWAYS`](class_reflectionprobe.md#class_reflectionprobe_constant_update_always) at most per scene. For all other use cases, use [`UPDATE_ONCE`](class_reflectionprobe.md#class_reflectionprobe_constant_update_once).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_enum_reflectionprobe_ambientmode"></div>

enum **AmbientMode**: <div id="enum_reflectionprobe_ambientmode"></div>

<div id="_class_reflectionprobe_constant_ambient_disabled"></div>

[AmbientMode](#enum_reflectionprobe_ambientmode) **AMBIENT_DISABLED** = ``0``

Do not apply any ambient lighting inside the **ReflectionProbe**'s box defined by its [`size`](class_reflectionprobe.md#class_reflectionprobe_property_size).

<div id="_class_reflectionprobe_constant_ambient_environment"></div>

[AmbientMode](#enum_reflectionprobe_ambientmode) **AMBIENT_ENVIRONMENT** = ``1``

Apply automatically-sourced environment lighting inside the **ReflectionProbe**'s box defined by its [`size`](class_reflectionprobe.md#class_reflectionprobe_property_size).

<div id="_class_reflectionprobe_constant_ambient_color"></div>

[AmbientMode](#enum_reflectionprobe_ambientmode) **AMBIENT_COLOR** = ``2``

Apply custom ambient lighting inside the **ReflectionProbe**'s box defined by its [`size`](class_reflectionprobe.md#class_reflectionprobe_property_size). See [`ambient_color`](class_reflectionprobe.md#class_reflectionprobe_property_ambient_color) and [`ambient_color_energy`](class_reflectionprobe.md#class_reflectionprobe_property_ambient_color_energy).

<!-- rst-class:: classref-section-separator -->

---

## 属性说明

<div id="_class_reflectionprobe_property_ambient_color"></div>

[`Color`](class_color.md) **ambient_color** = ``Color(0, 0, 0, 1)`` <div id="class_reflectionprobe_property_ambient_color"></div>

- `void` **set_ambient_color** ( value: [`Color`](class_color.md) )
- [`Color`](class_color.md) **get_ambient_color** ( )

The custom ambient color to use within the **ReflectionProbe**'s box defined by its [`size`](class_reflectionprobe.md#class_reflectionprobe_property_size). Only effective if [`ambient_mode`](class_reflectionprobe.md#class_reflectionprobe_property_ambient_mode) is [`AMBIENT_COLOR`](class_reflectionprobe.md#class_reflectionprobe_constant_ambient_color).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_reflectionprobe_property_ambient_color_energy"></div>

[`float`](class_float.md) **ambient_color_energy** = ``1.0`` <div id="class_reflectionprobe_property_ambient_color_energy"></div>

- `void` **set_ambient_color_energy** ( value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_ambient_color_energy** ( )

The custom ambient color energy to use within the **ReflectionProbe**'s box defined by its [`size`](class_reflectionprobe.md#class_reflectionprobe_property_size). Only effective if [`ambient_mode`](class_reflectionprobe.md#class_reflectionprobe_property_ambient_mode) is [`AMBIENT_COLOR`](class_reflectionprobe.md#class_reflectionprobe_constant_ambient_color).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_reflectionprobe_property_ambient_mode"></div>

[AmbientMode](#enum_reflectionprobe_ambientmode) **ambient_mode** = ``1`` <div id="class_reflectionprobe_property_ambient_mode"></div>

- `void` **set_ambient_mode** ( value: [AmbientMode](#enum_reflectionprobe_ambientmode) )
- [AmbientMode](#enum_reflectionprobe_ambientmode) **get_ambient_mode** ( )

The ambient color to use within the **ReflectionProbe**'s box defined by its [`size`](class_reflectionprobe.md#class_reflectionprobe_property_size). The ambient color will smoothly blend with other **ReflectionProbe** s and the rest of the scene (outside the **ReflectionProbe**'s box defined by its [`size`](class_reflectionprobe.md#class_reflectionprobe_property_size)).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_reflectionprobe_property_box_projection"></div>

[`bool`](class_bool.md) **box_projection** = ``false`` <div id="class_reflectionprobe_property_box_projection"></div>

- `void` **set_enable_box_projection** ( value: [`bool`](class_bool.md) )
- [`bool`](class_bool.md) **is_box_projection_enabled** ( )

If `true`, enables box projection. This makes reflections look more correct in rectangle-shaped rooms by offsetting the reflection center depending on the camera's location.

 **Note:** To better fit rectangle-shaped rooms that are not aligned to the grid, you can rotate the **ReflectionProbe** node.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_reflectionprobe_property_cull_mask"></div>

[`int`](class_int.md) **cull_mask** = ``1048575`` <div id="class_reflectionprobe_property_cull_mask"></div>

- `void` **set_cull_mask** ( value: [`int`](class_int.md) )
- [`int`](class_int.md) **get_cull_mask** ( )

Sets the cull mask which determines what objects are drawn by this probe. Every [`VisualInstance3D`](class_visualinstance3d.md) with a layer included in this cull mask will be rendered by the probe. It is best to only include large objects which are likely to take up a lot of space in the reflection in order to save on rendering cost.

This can also be used to prevent an object from reflecting upon itself (for instance, a **ReflectionProbe** centered on a vehicle).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_reflectionprobe_property_enable_shadows"></div>

[`bool`](class_bool.md) **enable_shadows** = ``false`` <div id="class_reflectionprobe_property_enable_shadows"></div>

- `void` **set_enable_shadows** ( value: [`bool`](class_bool.md) )
- [`bool`](class_bool.md) **are_shadows_enabled** ( )

If `true`, computes shadows in the reflection probe. This makes the reflection probe slower to render; you may want to disable this if using the [`UPDATE_ALWAYS`](class_reflectionprobe.md#class_reflectionprobe_constant_update_always) [`update_mode`](class_reflectionprobe.md#class_reflectionprobe_property_update_mode).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_reflectionprobe_property_intensity"></div>

[`float`](class_float.md) **intensity** = ``1.0`` <div id="class_reflectionprobe_property_intensity"></div>

- `void` **set_intensity** ( value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_intensity** ( )

Defines the reflection intensity. Intensity modulates the strength of the reflection.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_reflectionprobe_property_interior"></div>

[`bool`](class_bool.md) **interior** = ``false`` <div id="class_reflectionprobe_property_interior"></div>

- `void` **set_as_interior** ( value: [`bool`](class_bool.md) )
- [`bool`](class_bool.md) **is_set_as_interior** ( )

If `true`, reflections will ignore sky contribution.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_reflectionprobe_property_max_distance"></div>

[`float`](class_float.md) **max_distance** = ``0.0`` <div id="class_reflectionprobe_property_max_distance"></div>

- `void` **set_max_distance** ( value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_max_distance** ( )

The maximum distance away from the **ReflectionProbe** an object can be before it is culled. Decrease this to improve performance, especially when using the [`UPDATE_ALWAYS`](class_reflectionprobe.md#class_reflectionprobe_constant_update_always) [`update_mode`](class_reflectionprobe.md#class_reflectionprobe_property_update_mode).

 **Note:** The maximum reflection distance is always at least equal to the probe's extents. This means that decreasing [`max_distance`](class_reflectionprobe.md#class_reflectionprobe_property_max_distance) will not always cull objects from reflections, especially if the reflection probe's box defined by its [`size`](class_reflectionprobe.md#class_reflectionprobe_property_size) is already large.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_reflectionprobe_property_mesh_lod_threshold"></div>

[`float`](class_float.md) **mesh_lod_threshold** = ``1.0`` <div id="class_reflectionprobe_property_mesh_lod_threshold"></div>

- `void` **set_mesh_lod_threshold** ( value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_mesh_lod_threshold** ( )

The automatic LOD bias to use for meshes rendered within the **ReflectionProbe** (this is analog to [`Viewport.mesh_lod_threshold`](class_viewport.md#class_viewport_property_mesh_lod_threshold)). Higher values will use less detailed versions of meshes that have LOD variations generated. If set to `0.0`, automatic LOD is disabled. Increase [`mesh_lod_threshold`](class_reflectionprobe.md#class_reflectionprobe_property_mesh_lod_threshold) to improve performance at the cost of geometry detail, especially when using the [`UPDATE_ALWAYS`](class_reflectionprobe.md#class_reflectionprobe_constant_update_always) [`update_mode`](class_reflectionprobe.md#class_reflectionprobe_property_update_mode).

 **Note:** [`mesh_lod_threshold`](class_reflectionprobe.md#class_reflectionprobe_property_mesh_lod_threshold) does not affect [`GeometryInstance3D`](class_geometryinstance3d.md) visibility ranges (also known as "manual" LOD or hierarchical LOD).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_reflectionprobe_property_origin_offset"></div>

[`Vector3`](class_vector3.md) **origin_offset** = ``Vector3(0, 0, 0)`` <div id="class_reflectionprobe_property_origin_offset"></div>

- `void` **set_origin_offset** ( value: [`Vector3`](class_vector3.md) )
- [`Vector3`](class_vector3.md) **get_origin_offset** ( )

Sets the origin offset to be used when this **ReflectionProbe** is in [`box_projection`](class_reflectionprobe.md#class_reflectionprobe_property_box_projection) mode. This can be set to a non-zero value to ensure a reflection fits a rectangle-shaped room, while reducing the number of objects that "get in the way" of the reflection.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_reflectionprobe_property_reflection_mask"></div>

[`int`](class_int.md) **reflection_mask** = ``1048575`` <div id="class_reflectionprobe_property_reflection_mask"></div>

- `void` **set_reflection_mask** ( value: [`int`](class_int.md) )
- [`int`](class_int.md) **get_reflection_mask** ( )

Sets the reflection mask which determines what objects have reflections applied from this probe. Every [`VisualInstance3D`](class_visualinstance3d.md) with a layer included in this reflection mask will have reflections applied from this probe. See also [`cull_mask`](class_reflectionprobe.md#class_reflectionprobe_property_cull_mask), which can be used to exclude objects from appearing in the reflection while still making them affected by the **ReflectionProbe**.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_reflectionprobe_property_size"></div>

[`Vector3`](class_vector3.md) **size** = ``Vector3(20, 20, 20)`` <div id="class_reflectionprobe_property_size"></div>

- `void` **set_size** ( value: [`Vector3`](class_vector3.md) )
- [`Vector3`](class_vector3.md) **get_size** ( )

The size of the reflection probe. The larger the size, the more space covered by the probe, which will lower the perceived resolution. It is best to keep the size only as large as you need it.

 **Note:** To better fit areas that are not aligned to the grid, you can rotate the **ReflectionProbe** node.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_reflectionprobe_property_update_mode"></div>

[UpdateMode](#enum_reflectionprobe_updatemode) **update_mode** = ``0`` <div id="class_reflectionprobe_property_update_mode"></div>

- `void` **set_update_mode** ( value: [UpdateMode](#enum_reflectionprobe_updatemode) )
- [UpdateMode](#enum_reflectionprobe_updatemode) **get_update_mode** ( )

Sets how frequently the **ReflectionProbe** is updated. Can be [`UPDATE_ONCE`](class_reflectionprobe.md#class_reflectionprobe_constant_update_once) or [`UPDATE_ALWAYS`](class_reflectionprobe.md#class_reflectionprobe_constant_update_always).

[^virtual]: 本方法通常需要用户覆盖才能生效。
[^const]: 本方法无副作用，不会修改该实例的任何成员变量。
[^vararg]: 本方法除了能接受在此处描述的参数外，还能够继续接受任意数量的参数。
[^constructor]: 本方法用于构造某个类型。
[^static]: 调用本方法无需实例，可直接使用类名进行调用。
[^operator]: 本方法描述的是使用本类型作为左操作数的有效运算符。
[^bitfield]: 这个值是由下列位标志构成位掩码的整数。
[^void]: 无返回值。
