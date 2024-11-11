<!-- ⚠ 请勿编辑本文件 ⚠ -->
<!-- 本文档使用脚本从 WeDot 引擎源码仓库生成。 -->
<!-- 生成脚本：https://github.com/WeDot-Engine/WeDot/tree/master/doc/tools/make_md.py； -->
<!-- 原文件：https://github.com/WeDot-Engine/WeDot/tree/master/doc/classes/OccluderInstance3D.xml。 -->

<div id="_class_occluderinstance3d"></div>

# OccluderInstance3D

**继承：** [`VisualInstance3D`](class_visualinstance3d.md) **<** [`Node3D`](class_node3d.md) **<** [`Node`](class_node.md) **<** [`Object`](class_object.md)

Provides occlusion culling for 3D nodes, which improves performance in closed areas.

## 描述

Occlusion culling can improve rendering performance in closed/semi-open areas by hiding geometry that is occluded by other objects.

The occlusion culling system is mostly static. **OccluderInstance3D** s can be moved or hidden at run-time, but doing so will trigger a background recomputation that can take several frames. It is recommended to only move **OccluderInstance3D** s sporadically (e.g. for procedural generation purposes), rather than doing so every frame.

The occlusion culling system works by rendering the occluders on the CPU in parallel using [*Embree*](https://www.embree.org/), drawing the result to a low-resolution buffer then using this to cull 3D nodes individually. In the 3D editor, you can preview the occlusion culling buffer by choosing **Perspective > Display Advanced... > Occlusion Culling Buffer** in the top-left corner of the 3D viewport. The occlusion culling buffer quality can be adjusted in the Project Settings.

 **Baking:** Select an **OccluderInstance3D** node, then use the **Bake Occluders** button at the top of the 3D editor. Only opaque materials will be taken into account; transparent materials (alpha-blended or alpha-tested) will be ignored by the occluder generation.

 **Note:** Occlusion culling is only effective if [`ProjectSettings.rendering/occlusion_culling/use_occlusion_culling`](class_projectsettings.md#class_projectsettings_property_rendering/occlusion_culling/use_occlusion_culling) is `true`. Enabling occlusion culling has a cost on the CPU. Only enable occlusion culling if you actually plan to use it. Large open scenes with few or no objects blocking the view will generally not benefit much from occlusion culling. Large open scenes generally benefit more from mesh LOD and visibility ranges ([`GeometryInstance3D.visibility_range_begin`](class_geometryinstance3d.md#class_geometryinstance3d_property_visibility_range_begin) and [`GeometryInstance3D.visibility_range_end`](class_geometryinstance3d.md#class_geometryinstance3d_property_visibility_range_end)) compared to occlusion culling.

 **Note:** Due to memory constraints, occlusion culling is not supported by default in Web export templates. It can be enabled by compiling custom Web export templates with `module_raycast_enabled=yes`.

## 属性

|||
|:-:|:--|
| [`int`](class_int.md)               | [`bake_mask`](class_occluderinstance3d.md#class_occluderinstance3d_property_bake_mask)                                       | ``4294967295`` |
| [`float`](class_float.md)           | [`bake_simplification_distance`](class_occluderinstance3d.md#class_occluderinstance3d_property_bake_simplification_distance) | ``0.1``        |
| [`Occluder3D`](class_occluder3d.md) | [`occluder`](class_occluderinstance3d.md#class_occluderinstance3d_property_occluder)                                         |                |

## 方法

|||
|:-:|:--|
| [`bool`](class_bool.md) | [`get_bake_mask_value`](class_occluderinstance3d.md#class_occluderinstance3d_method_get_bake_mask_value) ( layer_number: [`int`](class_int.md) ) const[^const]                   |
| `void`                  | [`set_bake_mask_value`](class_occluderinstance3d.md#class_occluderinstance3d_method_set_bake_mask_value) ( layer_number: [`int`](class_int.md), value: [`bool`](class_bool.md) ) |

<!-- rst-class:: classref-section-separator -->

---

## 属性说明

<div id="_class_occluderinstance3d_property_bake_mask"></div>

[`int`](class_int.md) **bake_mask** = ``4294967295`` <div id="class_occluderinstance3d_property_bake_mask"></div>

- `void` **set_bake_mask** ( value: [`int`](class_int.md) )
- [`int`](class_int.md) **get_bake_mask** ( )

The visual layers to account for when baking for occluders. Only [`MeshInstance3D`](class_meshinstance3d.md) s whose [`VisualInstance3D.layers`](class_visualinstance3d.md#class_visualinstance3d_property_layers) match with this [`bake_mask`](class_occluderinstance3d.md#class_occluderinstance3d_property_bake_mask) will be included in the generated occluder mesh. By default, all objects with *opaque* materials are taken into account for the occluder baking.

To improve performance and avoid artifacts, it is recommended to exclude dynamic objects, small objects and fixtures from the baking process by moving them to a separate visual layer and excluding this layer in [`bake_mask`](class_occluderinstance3d.md#class_occluderinstance3d_property_bake_mask).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_occluderinstance3d_property_bake_simplification_distance"></div>

[`float`](class_float.md) **bake_simplification_distance** = ``0.1`` <div id="class_occluderinstance3d_property_bake_simplification_distance"></div>

- `void` **set_bake_simplification_distance** ( value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_bake_simplification_distance** ( )

The simplification distance to use for simplifying the generated occluder polygon (in 3D units). Higher values result in a less detailed occluder mesh, which improves performance but reduces culling accuracy.

The occluder geometry is rendered on the CPU, so it is important to keep its geometry as simple as possible. Since the buffer is rendered at a low resolution, less detailed occluder meshes generally still work well. The default value is fairly aggressive, so you may have to decrease it if you run into false negatives (objects being occluded even though they are visible by the camera). A value of `0.01` will act conservatively, and will keep geometry *perceptually* unaffected in the occlusion culling buffer. Depending on the scene, a value of `0.01` may still simplify the mesh noticeably compared to disabling simplification entirely.

Setting this to `0.0` disables simplification entirely, but vertices in the exact same position will still be merged. The mesh will also be re-indexed to reduce both the number of vertices and indices.

 **Note:** This uses the [*meshoptimizer*](https://meshoptimizer.org/) library under the hood, similar to LOD generation.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_occluderinstance3d_property_occluder"></div>

[`Occluder3D`](class_occluder3d.md) **occluder** <div id="class_occluderinstance3d_property_occluder"></div>

- `void` **set_occluder** ( value: [`Occluder3D`](class_occluder3d.md) )
- [`Occluder3D`](class_occluder3d.md) **get_occluder** ( )

The occluder resource for this **OccluderInstance3D**. You can generate an occluder resource by selecting an **OccluderInstance3D** node then using the **Bake Occluders** button at the top of the editor.

You can also draw your own 2D occluder polygon by adding a new [`PolygonOccluder3D`](class_polygonoccluder3d.md) resource to the [`occluder`](class_occluderinstance3d.md#class_occluderinstance3d_property_occluder) property in the Inspector.

Alternatively, you can select a primitive occluder to use: [`QuadOccluder3D`](class_quadoccluder3d.md), [`BoxOccluder3D`](class_boxoccluder3d.md) or [`SphereOccluder3D`](class_sphereoccluder3d.md).

<!-- rst-class:: classref-section-separator -->

---

## 方法说明

<div id="_class_occluderinstance3d_method_get_bake_mask_value"></div>

[`bool`](class_bool.md) **get_bake_mask_value** ( layer_number: [`int`](class_int.md) ) const[^const]<div id="class_occluderinstance3d_method_get_bake_mask_value"></div>

Returns whether or not the specified layer of the [`bake_mask`](class_occluderinstance3d.md#class_occluderinstance3d_property_bake_mask) is enabled, given a `layer_number` between 1 and 32.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_occluderinstance3d_method_set_bake_mask_value"></div>

`void` **set_bake_mask_value** ( layer_number: [`int`](class_int.md), value: [`bool`](class_bool.md) )<div id="class_occluderinstance3d_method_set_bake_mask_value"></div>

Based on `value`, enables or disables the specified layer in the [`bake_mask`](class_occluderinstance3d.md#class_occluderinstance3d_property_bake_mask), given a `layer_number` between 1 and 32.

[^virtual]: 本方法通常需要用户覆盖才能生效。
[^const]: 本方法无副作用，不会修改该实例的任何成员变量。
[^vararg]: 本方法除了能接受在此处描述的参数外，还能够继续接受任意数量的参数。
[^constructor]: 本方法用于构造某个类型。
[^static]: 调用本方法无需实例，可直接使用类名进行调用。
[^operator]: 本方法描述的是使用本类型作为左操作数的有效运算符。
[^bitfield]: 这个值是由下列位标志构成位掩码的整数。
[^void]: 无返回值。
