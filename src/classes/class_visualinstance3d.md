<!-- ⚠ 请勿编辑本文件 ⚠ -->
<!-- 本文档使用脚本从 WeDot 引擎源码仓库生成。 -->
<!-- 生成脚本：https://github.com/WeDot-Engine/WeDot/tree/4.3/doc/tools/make_md.py； -->
<!-- 原文件：https://github.com/WeDot-Engine/WeDot/tree/4.3/doc/classes/VisualInstance3D.xml。 -->

<div id="_class_visualinstance3d"></div>

# VisualInstance3D

**继承：** [`Node3D`](class_node3d.md) **<** [`Node`](class_node.md) **<** [`Object`](class_object.md)

**派生：** [`Decal`](class_decal.md), [`FogVolume`](class_fogvolume.md), [`GeometryInstance3D`](class_geometryinstance3d.md), [`GPUParticlesAttractor3D`](class_gpuparticlesattractor3d.md), [`GPUParticlesCollision3D`](class_gpuparticlescollision3d.md), [`Light3D`](class_light3d.md), [`LightmapGI`](class_lightmapgi.md), [`OccluderInstance3D`](class_occluderinstance3d.md), [`ReflectionProbe`](class_reflectionprobe.md), [`RootMotionView`](class_rootmotionview.md), [`VisibleOnScreenNotifier3D`](class_visibleonscreennotifier3d.md), [`VoxelGI`](class_voxelgi.md)

Parent of all visual 3D nodes.

## 描述

The **VisualInstance3D** is used to connect a resource to a visual representation. All visual 3D nodes inherit from the **VisualInstance3D**. In general, you should not access the **VisualInstance3D** properties directly as they are accessed and managed by the nodes that inherit from **VisualInstance3D**. **VisualInstance3D** is the node representation of the [`RenderingServer`](class_renderingserver.md) instance.

## 属性

| [`int`](class_int.md)     | [`layers`](#class_visualinstance3d_property_layers)                                   | ``1``   |
| [`float`](class_float.md) | [`sorting_offset`](#class_visualinstance3d_property_sorting_offset)                   | ``0.0`` |
| [`bool`](class_bool.md)   | [`sorting_use_aabb_center`](#class_visualinstance3d_property_sorting_use_aabb_center) |         |

## 方法

| [`AABB`](class_aabb.md) | [`_get_aabb`](#class_visualinstance3d_private_method__get_aabb) ( ) virtual[^virtual] const[^const]                                                   |
| [`AABB`](class_aabb.md) | [`get_aabb`](#class_visualinstance3d_method_get_aabb) ( ) const[^const]                                                                               |
| [`RID`](class_rid.md)   | [`get_base`](#class_visualinstance3d_method_get_base) ( ) const[^const]                                                                               |
| [`RID`](class_rid.md)   | [`get_instance`](#class_visualinstance3d_method_get_instance) ( ) const[^const]                                                                       |
| [`bool`](class_bool.md) | [`get_layer_mask_value`](#class_visualinstance3d_method_get_layer_mask_value) ( layer_number: [`int`](class_int.md) ) const[^const]                   |
| `void`                  | [`set_base`](#class_visualinstance3d_method_set_base) ( base: [`RID`](class_rid.md) )                                                                 |
| `void`                  | [`set_layer_mask_value`](#class_visualinstance3d_method_set_layer_mask_value) ( layer_number: [`int`](class_int.md), value: [`bool`](class_bool.md) ) |

<!-- rst-class:: classref-section-separator -->

---

## 属性说明

<div id="_class_visualinstance3d_property_layers"></div>

[`int`](class_int.md) **layers** = ``1`` <div id="class_visualinstance3d_property_layers"></div>

- `void` **set_layer_mask** ( value: [`int`](class_int.md) )
- [`int`](class_int.md) **get_layer_mask** ( )

The render layer(s) this **VisualInstance3D** is drawn on.

This object will only be visible for [`Camera3D`](class_camera3d.md) s whose cull mask includes any of the render layers this **VisualInstance3D** is set to.

For [`Light3D`](class_light3d.md) s, this can be used to control which **VisualInstance3D** s are affected by a specific light. For [`GPUParticles3D`](class_gpuparticles3d.md), this can be used to control which particles are effected by a specific attractor. For [`Decal`](class_decal.md) s, this can be used to control which **VisualInstance3D** s are affected by a specific decal.

To adjust [`layers`](#class_visualinstance3d_property_layers) more easily using a script, use [`get_layer_mask_value`](#class_visualinstance3d_method_get_layer_mask_value) and [`set_layer_mask_value`](#class_visualinstance3d_method_set_layer_mask_value).

 **Note:** [`VoxelGI`](class_voxelgi.md), SDFGI and [`LightmapGI`](class_lightmapgi.md) will always take all layers into account to determine what contributes to global illumination. If this is an issue, set [`GeometryInstance3D.gi_mode`](#class_geometryinstance3d_property_gi_mode) to [`GeometryInstance3D.GI_MODE_DISABLED`](#class_geometryinstance3d_constant_gi_mode_disabled) for meshes and [`Light3D.light_bake_mode`](#class_light3d_property_light_bake_mode) to [`Light3D.BAKE_DISABLED`](#class_light3d_constant_bake_disabled) for lights to exclude them from global illumination.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_visualinstance3d_property_sorting_offset"></div>

[`float`](class_float.md) **sorting_offset** = ``0.0`` <div id="class_visualinstance3d_property_sorting_offset"></div>

- `void` **set_sorting_offset** ( value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_sorting_offset** ( )

The amount by which the depth of this **VisualInstance3D** will be adjusted when sorting by depth. Uses the same units as the engine (which are typically meters). Adjusting it to a higher value will make the **VisualInstance3D** reliably draw on top of other **VisualInstance3D** s that are otherwise positioned at the same spot. To ensure it always draws on top of other objects around it (not positioned at the same spot), set the value to be greater than the distance between this **VisualInstance3D** and the other nearby **VisualInstance3D** s.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_visualinstance3d_property_sorting_use_aabb_center"></div>

[`bool`](class_bool.md) **sorting_use_aabb_center** <div id="class_visualinstance3d_property_sorting_use_aabb_center"></div>

- `void` **set_sorting_use_aabb_center** ( value: [`bool`](class_bool.md) )
- [`bool`](class_bool.md) **is_sorting_use_aabb_center** ( )

If `true`, the object is sorted based on the [`AABB`](class_aabb.md) center. The object will be sorted based on the global position otherwise.

The [`AABB`](class_aabb.md) center based sorting is generally more accurate for 3D models. The position based sorting instead allows to better control the drawing order when working with [`GPUParticles3D`](class_gpuparticles3d.md) and [`CPUParticles3D`](class_cpuparticles3d.md).

<!-- rst-class:: classref-section-separator -->

---

## 方法说明

<div id="_class_visualinstance3d_private_method__get_aabb"></div>

[`AABB`](class_aabb.md) **_get_aabb** ( ) virtual[^virtual] const[^const]<div id="class_visualinstance3d_private_method__get_aabb"></div>

该方法目前没有描述，请帮我们\ :ref:`贡献一个 <doc_updating_the_class_reference>`\ 吧！

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_visualinstance3d_method_get_aabb"></div>

[`AABB`](class_aabb.md) **get_aabb** ( ) const[^const]<div id="class_visualinstance3d_method_get_aabb"></div>

Returns the [`AABB`](class_aabb.md) (also known as the bounding box) for this **VisualInstance3D**.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_visualinstance3d_method_get_base"></div>

[`RID`](class_rid.md) **get_base** ( ) const[^const]<div id="class_visualinstance3d_method_get_base"></div>

Returns the RID of the resource associated with this **VisualInstance3D**. For example, if the Node is a [`MeshInstance3D`](class_meshinstance3d.md), this will return the RID of the associated [`Mesh`](class_mesh.md).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_visualinstance3d_method_get_instance"></div>

[`RID`](class_rid.md) **get_instance** ( ) const[^const]<div id="class_visualinstance3d_method_get_instance"></div>

Returns the RID of this instance. This RID is the same as the RID returned by [`RenderingServer.instance_create`](#class_renderingserver_method_instance_create). This RID is needed if you want to call [`RenderingServer`](class_renderingserver.md) functions directly on this **VisualInstance3D**.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_visualinstance3d_method_get_layer_mask_value"></div>

[`bool`](class_bool.md) **get_layer_mask_value** ( layer_number: [`int`](class_int.md) ) const[^const]<div id="class_visualinstance3d_method_get_layer_mask_value"></div>

Returns whether or not the specified layer of the [`layers`](#class_visualinstance3d_property_layers) is enabled, given a `layer_number` between 1 and 20.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_visualinstance3d_method_set_base"></div>

`void` **set_base** ( base: [`RID`](class_rid.md) )<div id="class_visualinstance3d_method_set_base"></div>

Sets the resource that is instantiated by this **VisualInstance3D**, which changes how the engine handles the **VisualInstance3D** under the hood. Equivalent to [`RenderingServer.instance_set_base`](#class_renderingserver_method_instance_set_base).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_visualinstance3d_method_set_layer_mask_value"></div>

`void` **set_layer_mask_value** ( layer_number: [`int`](class_int.md), value: [`bool`](class_bool.md) )<div id="class_visualinstance3d_method_set_layer_mask_value"></div>

Based on `value`, enables or disables the specified layer in the [`layers`](#class_visualinstance3d_property_layers), given a `layer_number` between 1 and 20.

[^virtual]: 本方法通常需要用户覆盖才能生效。
[^const]: 本方法无副作用，不会修改该实例的任何成员变量。
[^vararg]: 本方法除了能接受在此处描述的参数外，还能够继续接受任意数量的参数。
[^constructor]: 本方法用于构造某个类型。
[^static]: 调用本方法无需实例，可直接使用类名进行调用。
[^operator]: 本方法描述的是使用本类型作为左操作数的有效运算符。
[^bitfield]: 这个值是由下列位标志构成位掩码的整数。
[^void]: 无返回值。
