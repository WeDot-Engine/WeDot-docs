<!-- ⚠ 请勿编辑本文件 ⚠ -->
<!-- 本文档使用脚本从 WeDot 引擎源码仓库生成。 -->
<!-- 生成脚本：https://github.com/WeDot-Engine/WeDot/tree/master/doc/tools/make_md.py； -->
<!-- 原文件：https://github.com/WeDot-Engine/WeDot/tree/master/doc/classes/VoxelGI.xml。 -->

<div id="_class_voxelgi"></div>

# VoxelGI

**继承：** [`VisualInstance3D`](class_visualinstance3d.md) **<** [`Node3D`](class_node3d.md) **<** [`Node`](class_node.md) **<** [`Object`](class_object.md)

Real-time global illumination (GI) probe.

## 描述

**VoxelGI** s are used to provide high-quality real-time indirect light and reflections to scenes. They precompute the effect of objects that emit light and the effect of static geometry to simulate the behavior of complex light in real-time. **VoxelGI** s need to be baked before having a visible effect. However, once baked, dynamic objects will receive light from them. Furthermore, lights can be fully dynamic or baked.

 **Note:** **VoxelGI** is only supported in the Forward+ rendering method, not Mobile or Compatibility.

 **Procedural generation:** **VoxelGI** can be baked in an exported project, which makes it suitable for procedurally generated or user-built levels as long as all the geometry is generated in advance. For games where geometry is generated at any time during gameplay, SDFGI is more suitable (see [`Environment.sdfgi_enabled`](class_environment.md#class_environment_property_sdfgi_enabled)).

 **Performance:** **VoxelGI** is relatively demanding on the GPU and is not suited to low-end hardware such as integrated graphics (consider [`LightmapGI`](class_lightmapgi.md) instead). To improve performance, adjust [`ProjectSettings.rendering/global_illumination/voxel_gi/quality`](class_projectsettings.md#class_projectsettings_property_rendering/global_illumination/voxel_gi/quality) and enable [`ProjectSettings.rendering/global_illumination/gi/use_half_resolution`](class_projectsettings.md#class_projectsettings_property_rendering/global_illumination/gi/use_half_resolution) in the Project Settings. To provide a fallback for low-end hardware, consider adding an option to disable **VoxelGI** in your project's options menus. A **VoxelGI** node can be disabled by hiding it.

 **Note:** Meshes should have sufficiently thick walls to avoid light leaks (avoid one-sided walls). For interior levels, enclose your level geometry in a sufficiently large box and bridge the loops to close the mesh. To further prevent light leaks, you can also strategically place temporary [`MeshInstance3D`](class_meshinstance3d.md) nodes with their [`GeometryInstance3D.gi_mode`](class_geometryinstance3d.md#class_geometryinstance3d_property_gi_mode) set to [`GeometryInstance3D.GI_MODE_STATIC`](class_geometryinstance3d.md#class_geometryinstance3d_constant_gi_mode_static). These temporary nodes can then be hidden after baking the **VoxelGI** node.

## 属性

|||
|:-:|:--|
| [`CameraAttributes`](class_cameraattributes.md) | [`camera_attributes`](class_voxelgi.md#class_voxelgi_property_camera_attributes) |                         |
| [`VoxelGIData`](class_voxelgidata.md)           | [`data`](class_voxelgi.md#class_voxelgi_property_data)                           |                         |
| [`Vector3`](class_vector3.md)                   | [`size`](class_voxelgi.md#class_voxelgi_property_size)                           | ``Vector3(20, 20, 20)`` |
| [Subdiv](#enum_voxelgi_subdiv)                  | [`subdiv`](class_voxelgi.md#class_voxelgi_property_subdiv)                       | ``1``                   |

## 方法

|||
|:-:|:--|
| `void` | [`bake`](class_voxelgi.md#class_voxelgi_method_bake) ( from_node: [`Node`](class_node.md) = null, create_visual_debug: [`bool`](class_bool.md) = false ) |
| `void` | [`debug_bake`](class_voxelgi.md#class_voxelgi_method_debug_bake) ( )                                                                                     |

<!-- rst-class:: classref-section-separator -->

---

## 枚举

<div id="_class_enum_voxelgi_subdiv"></div>

enum **Subdiv**: <div id="enum_voxelgi_subdiv"></div>

<div id="_class_voxelgi_constant_subdiv_64"></div>

[Subdiv](#enum_voxelgi_subdiv) **SUBDIV_64** = ``0``

Use 64 subdivisions. This is the lowest quality setting, but the fastest. Use it if you can, but especially use it on lower-end hardware.

<div id="_class_voxelgi_constant_subdiv_128"></div>

[Subdiv](#enum_voxelgi_subdiv) **SUBDIV_128** = ``1``

Use 128 subdivisions. This is the default quality setting.

<div id="_class_voxelgi_constant_subdiv_256"></div>

[Subdiv](#enum_voxelgi_subdiv) **SUBDIV_256** = ``2``

Use 256 subdivisions.

<div id="_class_voxelgi_constant_subdiv_512"></div>

[Subdiv](#enum_voxelgi_subdiv) **SUBDIV_512** = ``3``

Use 512 subdivisions. This is the highest quality setting, but the slowest. On lower-end hardware, this could cause the GPU to stall.

<div id="_class_voxelgi_constant_subdiv_max"></div>

[Subdiv](#enum_voxelgi_subdiv) **SUBDIV_MAX** = ``4``

Represents the size of the [Subdiv](#enum_voxelgi_subdiv) enum.

<!-- rst-class:: classref-section-separator -->

---

## 属性说明

<div id="_class_voxelgi_property_camera_attributes"></div>

[`CameraAttributes`](class_cameraattributes.md) **camera_attributes** <div id="class_voxelgi_property_camera_attributes"></div>

- `void` **set_camera_attributes** ( value: [`CameraAttributes`](class_cameraattributes.md) )
- [`CameraAttributes`](class_cameraattributes.md) **get_camera_attributes** ( )

The [`CameraAttributes`](class_cameraattributes.md) resource that specifies exposure levels to bake at. Auto-exposure and non exposure properties will be ignored. Exposure settings should be used to reduce the dynamic range present when baking. If exposure is too high, the **VoxelGI** will have banding artifacts or may have over-exposure artifacts.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_voxelgi_property_data"></div>

[`VoxelGIData`](class_voxelgidata.md) **data** <div id="class_voxelgi_property_data"></div>

- `void` **set_probe_data** ( value: [`VoxelGIData`](class_voxelgidata.md) )
- [`VoxelGIData`](class_voxelgidata.md) **get_probe_data** ( )

The [`VoxelGIData`](class_voxelgidata.md) resource that holds the data for this **VoxelGI**.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_voxelgi_property_size"></div>

[`Vector3`](class_vector3.md) **size** = ``Vector3(20, 20, 20)`` <div id="class_voxelgi_property_size"></div>

- `void` **set_size** ( value: [`Vector3`](class_vector3.md) )
- [`Vector3`](class_vector3.md) **get_size** ( )

The size of the area covered by the **VoxelGI**. If you make the size larger without increasing the subdivisions with [`subdiv`](class_voxelgi.md#class_voxelgi_property_subdiv), the size of each cell will increase and result in lower detailed lighting.

 **Note:** Size is clamped to 1.0 unit or more on each axis.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_voxelgi_property_subdiv"></div>

[Subdiv](#enum_voxelgi_subdiv) **subdiv** = ``1`` <div id="class_voxelgi_property_subdiv"></div>

- `void` **set_subdiv** ( value: [Subdiv](#enum_voxelgi_subdiv) )
- [Subdiv](#enum_voxelgi_subdiv) **get_subdiv** ( )

Number of times to subdivide the grid that the **VoxelGI** operates on. A higher number results in finer detail and thus higher visual quality, while lower numbers result in better performance.

<!-- rst-class:: classref-section-separator -->

---

## 方法说明

<div id="_class_voxelgi_method_bake"></div>

`void` **bake** ( from_node: [`Node`](class_node.md) = null, create_visual_debug: [`bool`](class_bool.md) = false )<div id="class_voxelgi_method_bake"></div>

Bakes the effect from all [`GeometryInstance3D`](class_geometryinstance3d.md) s marked with [`GeometryInstance3D.GI_MODE_STATIC`](class_geometryinstance3d.md#class_geometryinstance3d_constant_gi_mode_static) and [`Light3D`](class_light3d.md) s marked with either [`Light3D.BAKE_STATIC`](class_light3d.md#class_light3d_constant_bake_static) or [`Light3D.BAKE_DYNAMIC`](class_light3d.md#class_light3d_constant_bake_dynamic). If `create_visual_debug` is `true`, after baking the light, this will generate a [`MultiMesh`](class_multimesh.md) that has a cube representing each solid cell with each cube colored to the cell's albedo color. This can be used to visualize the **VoxelGI**'s data and debug any issues that may be occurring.

 **Note:** [`bake`](class_voxelgi.md#class_voxelgi_method_bake) works from the editor and in exported projects. This makes it suitable for procedurally generated or user-built levels. Baking a **VoxelGI** node generally takes from 5 to 20 seconds in most scenes. Reducing [`subdiv`](class_voxelgi.md#class_voxelgi_property_subdiv) can speed up baking.

 **Note:** [`GeometryInstance3D`](class_geometryinstance3d.md) s and [`Light3D`](class_light3d.md) s must be fully ready before [`bake`](class_voxelgi.md#class_voxelgi_method_bake) is called. If you are procedurally creating those and some meshes or lights are missing from your baked **VoxelGI**, use `call_deferred("bake")` instead of calling [`bake`](class_voxelgi.md#class_voxelgi_method_bake) directly.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_voxelgi_method_debug_bake"></div>

`void` **debug_bake** ( )<div id="class_voxelgi_method_debug_bake"></div>

Calls [`bake`](class_voxelgi.md#class_voxelgi_method_bake) with `create_visual_debug` enabled.

[^virtual]: 本方法通常需要用户覆盖才能生效。
[^const]: 本方法无副作用，不会修改该实例的任何成员变量。
[^vararg]: 本方法除了能接受在此处描述的参数外，还能够继续接受任意数量的参数。
[^constructor]: 本方法用于构造某个类型。
[^static]: 调用本方法无需实例，可直接使用类名进行调用。
[^operator]: 本方法描述的是使用本类型作为左操作数的有效运算符。
[^bitfield]: 这个值是由下列位标志构成位掩码的整数。
[^void]: 无返回值。
