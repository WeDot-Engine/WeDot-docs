<!-- ⚠ 请勿编辑本文件 ⚠ -->
<!-- 本文档使用脚本从 WeDot 引擎源码仓库生成。 -->
<!-- 生成脚本：https://github.com/WeDot-Engine/WeDot/tree/4.3/doc/tools/make_md.py； -->
<!-- 原文件：https://github.com/WeDot-Engine/WeDot/tree/4.3/doc/classes/SoftBody3D.xml。 -->

<div id="_class_softbody3d"></div>

# SoftBody3D

**继承：** [`MeshInstance3D`](class_meshinstance3d.md) **<** [`GeometryInstance3D`](class_geometryinstance3d.md) **<** [`VisualInstance3D`](class_visualinstance3d.md) **<** [`Node3D`](class_node3d.md) **<** [`Node`](class_node.md) **<** [`Object`](class_object.md)

A deformable 3D physics mesh.

## 描述

A deformable 3D physics mesh. Used to create elastic or deformable objects such as cloth, rubber, or other flexible materials.

Additionally, **SoftBody3D** is subject to wind forces defined in [`Area3D`](class_area3d.md) (see [`Area3D.wind_source_path`](#class_area3d_property_wind_source_path), [`Area3D.wind_force_magnitude`](#class_area3d_property_wind_force_magnitude), and [`Area3D.wind_attenuation_factor`](#class_area3d_property_wind_attenuation_factor)).

 **Note:** There are many known bugs in **SoftBody3D**. Therefore, it's not recommended to use them for things that can affect gameplay (such as trampolines).

## 属性

| [`int`](class_int.md)                       | [`collision_layer`](#class_softbody3d_property_collision_layer)                 | ``1``            |
| [`int`](class_int.md)                       | [`collision_mask`](#class_softbody3d_property_collision_mask)                   | ``1``            |
| [`float`](class_float.md)                   | [`damping_coefficient`](#class_softbody3d_property_damping_coefficient)         | ``0.01``         |
| [DisableMode](#enum_softbody3d_disablemode) | [`disable_mode`](#class_softbody3d_property_disable_mode)                       | ``0``            |
| [`float`](class_float.md)                   | [`drag_coefficient`](#class_softbody3d_property_drag_coefficient)               | ``0.0``          |
| [`float`](class_float.md)                   | [`linear_stiffness`](#class_softbody3d_property_linear_stiffness)               | ``0.5``          |
| [`NodePath`](class_nodepath.md)             | [`parent_collision_ignore`](#class_softbody3d_property_parent_collision_ignore) | ``NodePath("")`` |
| [`float`](class_float.md)                   | [`pressure_coefficient`](#class_softbody3d_property_pressure_coefficient)       | ``0.0``          |
| [`bool`](class_bool.md)                     | [`ray_pickable`](#class_softbody3d_property_ray_pickable)                       | ``true``         |
| [`int`](class_int.md)                       | [`simulation_precision`](#class_softbody3d_property_simulation_precision)       | ``5``            |
| [`float`](class_float.md)                   | [`total_mass`](#class_softbody3d_property_total_mass)                           | ``1.0``          |

## 方法

| `void`                                                            | [`add_collision_exception_with`](#class_softbody3d_method_add_collision_exception_with) ( body: [`Node`](class_node.md) )                                                                                |
| [Array](class_array.md) [`PhysicsBody3D`](class_physicsbody3d.md) | [`get_collision_exceptions`](#class_softbody3d_method_get_collision_exceptions) ( )                                                                                                                      |
| [`bool`](class_bool.md)                                           | [`get_collision_layer_value`](#class_softbody3d_method_get_collision_layer_value) ( layer_number: [`int`](class_int.md) ) const[^const]                                                                  |
| [`bool`](class_bool.md)                                           | [`get_collision_mask_value`](#class_softbody3d_method_get_collision_mask_value) ( layer_number: [`int`](class_int.md) ) const[^const]                                                                    |
| [`RID`](class_rid.md)                                             | [`get_physics_rid`](#class_softbody3d_method_get_physics_rid) ( ) const[^const]                                                                                                                          |
| [`Vector3`](class_vector3.md)                                     | [`get_point_transform`](#class_softbody3d_method_get_point_transform) ( point_index: [`int`](class_int.md) )                                                                                             |
| [`bool`](class_bool.md)                                           | [`is_point_pinned`](#class_softbody3d_method_is_point_pinned) ( point_index: [`int`](class_int.md) ) const[^const]                                                                                       |
| `void`                                                            | [`remove_collision_exception_with`](#class_softbody3d_method_remove_collision_exception_with) ( body: [`Node`](class_node.md) )                                                                          |
| `void`                                                            | [`set_collision_layer_value`](#class_softbody3d_method_set_collision_layer_value) ( layer_number: [`int`](class_int.md), value: [`bool`](class_bool.md) )                                                |
| `void`                                                            | [`set_collision_mask_value`](#class_softbody3d_method_set_collision_mask_value) ( layer_number: [`int`](class_int.md), value: [`bool`](class_bool.md) )                                                  |
| `void`                                                            | [`set_point_pinned`](#class_softbody3d_method_set_point_pinned) ( point_index: [`int`](class_int.md), pinned: [`bool`](class_bool.md), attachment_path: [`NodePath`](class_nodepath.md) = NodePath("") ) |

<!-- rst-class:: classref-section-separator -->

---

## 枚举

<div id="_class_enum_softbody3d_disablemode"></div>

enum **DisableMode**: <div id="enum_softbody3d_disablemode"></div>

<div id="_class_softbody3d_constant_disable_mode_remove"></div>

[DisableMode](#enum_softbody3d_disablemode) **DISABLE_MODE_REMOVE** = ``0``

When [`Node.process_mode`](#class_node_property_process_mode) is set to [`Node.PROCESS_MODE_DISABLED`](#class_node_constant_process_mode_disabled), remove from the physics simulation to stop all physics interactions with this **SoftBody3D**.

Automatically re-added to the physics simulation when the [`Node`](class_node.md) is processed again.

<div id="_class_softbody3d_constant_disable_mode_keep_active"></div>

[DisableMode](#enum_softbody3d_disablemode) **DISABLE_MODE_KEEP_ACTIVE** = ``1``

When [`Node.process_mode`](#class_node_property_process_mode) is set to [`Node.PROCESS_MODE_DISABLED`](#class_node_constant_process_mode_disabled), do not affect the physics simulation.

<!-- rst-class:: classref-section-separator -->

---

## 属性说明

<div id="_class_softbody3d_property_collision_layer"></div>

[`int`](class_int.md) **collision_layer** = ``1`` <div id="class_softbody3d_property_collision_layer"></div>

- `void` **set_collision_layer** ( value: [`int`](class_int.md) )
- [`int`](class_int.md) **get_collision_layer** ( )

The physics layers this SoftBody3D **is in**. Collision objects can exist in one or more of 32 different layers. See also [`collision_mask`](#class_softbody3d_property_collision_mask).

 **Note:** Object A can detect a contact with object B only if object B is in any of the layers that object A scans. See [*Collision layers and masks*](../tutorials/physics/physics_introduction.md#collision-layers-and-masks) in the documentation for more information.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_softbody3d_property_collision_mask"></div>

[`int`](class_int.md) **collision_mask** = ``1`` <div id="class_softbody3d_property_collision_mask"></div>

- `void` **set_collision_mask** ( value: [`int`](class_int.md) )
- [`int`](class_int.md) **get_collision_mask** ( )

The physics layers this SoftBody3D **scans**. Collision objects can scan one or more of 32 different layers. See also [`collision_layer`](#class_softbody3d_property_collision_layer).

 **Note:** Object A can detect a contact with object B only if object B is in any of the layers that object A scans. See [*Collision layers and masks*](../tutorials/physics/physics_introduction.md#collision-layers-and-masks) in the documentation for more information.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_softbody3d_property_damping_coefficient"></div>

[`float`](class_float.md) **damping_coefficient** = ``0.01`` <div id="class_softbody3d_property_damping_coefficient"></div>

- `void` **set_damping_coefficient** ( value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_damping_coefficient** ( )

The body's damping coefficient. Higher values will slow down the body more noticeably when forces are applied.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_softbody3d_property_disable_mode"></div>

[DisableMode](#enum_softbody3d_disablemode) **disable_mode** = ``0`` <div id="class_softbody3d_property_disable_mode"></div>

- `void` **set_disable_mode** ( value: [DisableMode](#enum_softbody3d_disablemode) )
- [DisableMode](#enum_softbody3d_disablemode) **get_disable_mode** ( )

Defines the behavior in physics when [`Node.process_mode`](#class_node_property_process_mode) is set to [`Node.PROCESS_MODE_DISABLED`](#class_node_constant_process_mode_disabled). See [DisableMode](#enum_softbody3d_disablemode) for more details about the different modes.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_softbody3d_property_drag_coefficient"></div>

[`float`](class_float.md) **drag_coefficient** = ``0.0`` <div id="class_softbody3d_property_drag_coefficient"></div>

- `void` **set_drag_coefficient** ( value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_drag_coefficient** ( )

The body's drag coefficient. Higher values increase this body's air resistance.

 **Note:** This value is currently unused by Godot's default physics implementation.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_softbody3d_property_linear_stiffness"></div>

[`float`](class_float.md) **linear_stiffness** = ``0.5`` <div id="class_softbody3d_property_linear_stiffness"></div>

- `void` **set_linear_stiffness** ( value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_linear_stiffness** ( )

Higher values will result in a stiffer body, while lower values will increase the body's ability to bend. The value can be between `0.0` and `1.0` (inclusive).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_softbody3d_property_parent_collision_ignore"></div>

[`NodePath`](class_nodepath.md) **parent_collision_ignore** = ``NodePath("")`` <div id="class_softbody3d_property_parent_collision_ignore"></div>

- `void` **set_parent_collision_ignore** ( value: [`NodePath`](class_nodepath.md) )
- [`NodePath`](class_nodepath.md) **get_parent_collision_ignore** ( )

[`NodePath`](class_nodepath.md) to a [`CollisionObject3D`](class_collisionobject3d.md) this SoftBody3D should avoid clipping.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_softbody3d_property_pressure_coefficient"></div>

[`float`](class_float.md) **pressure_coefficient** = ``0.0`` <div id="class_softbody3d_property_pressure_coefficient"></div>

- `void` **set_pressure_coefficient** ( value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_pressure_coefficient** ( )

The pressure coefficient of this soft body. Simulate pressure build-up from inside this body. Higher values increase the strength of this effect.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_softbody3d_property_ray_pickable"></div>

[`bool`](class_bool.md) **ray_pickable** = ``true`` <div id="class_softbody3d_property_ray_pickable"></div>

- `void` **set_ray_pickable** ( value: [`bool`](class_bool.md) )
- [`bool`](class_bool.md) **is_ray_pickable** ( )

If `true`, the **SoftBody3D** will respond to [`RayCast3D`](class_raycast3d.md) s.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_softbody3d_property_simulation_precision"></div>

[`int`](class_int.md) **simulation_precision** = ``5`` <div id="class_softbody3d_property_simulation_precision"></div>

- `void` **set_simulation_precision** ( value: [`int`](class_int.md) )
- [`int`](class_int.md) **get_simulation_precision** ( )

Increasing this value will improve the resulting simulation, but can affect performance. Use with care.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_softbody3d_property_total_mass"></div>

[`float`](class_float.md) **total_mass** = ``1.0`` <div id="class_softbody3d_property_total_mass"></div>

- `void` **set_total_mass** ( value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_total_mass** ( )

The SoftBody3D's mass.

<!-- rst-class:: classref-section-separator -->

---

## 方法说明

<div id="_class_softbody3d_method_add_collision_exception_with"></div>

`void` **add_collision_exception_with** ( body: [`Node`](class_node.md) )<div id="class_softbody3d_method_add_collision_exception_with"></div>

Adds a body to the list of bodies that this body can't collide with.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_softbody3d_method_get_collision_exceptions"></div>

[Array](class_array.md) [`PhysicsBody3D`](class_physicsbody3d.md) **get_collision_exceptions** ( )<div id="class_softbody3d_method_get_collision_exceptions"></div>

Returns an array of nodes that were added as collision exceptions for this body.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_softbody3d_method_get_collision_layer_value"></div>

[`bool`](class_bool.md) **get_collision_layer_value** ( layer_number: [`int`](class_int.md) ) const[^const]<div id="class_softbody3d_method_get_collision_layer_value"></div>

Returns whether or not the specified layer of the [`collision_layer`](#class_softbody3d_property_collision_layer) is enabled, given a `layer_number` between 1 and 32.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_softbody3d_method_get_collision_mask_value"></div>

[`bool`](class_bool.md) **get_collision_mask_value** ( layer_number: [`int`](class_int.md) ) const[^const]<div id="class_softbody3d_method_get_collision_mask_value"></div>

Returns whether or not the specified layer of the [`collision_mask`](#class_softbody3d_property_collision_mask) is enabled, given a `layer_number` between 1 and 32.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_softbody3d_method_get_physics_rid"></div>

[`RID`](class_rid.md) **get_physics_rid** ( ) const[^const]<div id="class_softbody3d_method_get_physics_rid"></div>

Returns the internal [`RID`](class_rid.md) used by the [`PhysicsServer3D`](class_physicsserver3d.md) for this body.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_softbody3d_method_get_point_transform"></div>

[`Vector3`](class_vector3.md) **get_point_transform** ( point_index: [`int`](class_int.md) )<div id="class_softbody3d_method_get_point_transform"></div>

Returns local translation of a vertex in the surface array.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_softbody3d_method_is_point_pinned"></div>

[`bool`](class_bool.md) **is_point_pinned** ( point_index: [`int`](class_int.md) ) const[^const]<div id="class_softbody3d_method_is_point_pinned"></div>

Returns `true` if vertex is set to pinned.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_softbody3d_method_remove_collision_exception_with"></div>

`void` **remove_collision_exception_with** ( body: [`Node`](class_node.md) )<div id="class_softbody3d_method_remove_collision_exception_with"></div>

Removes a body from the list of bodies that this body can't collide with.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_softbody3d_method_set_collision_layer_value"></div>

`void` **set_collision_layer_value** ( layer_number: [`int`](class_int.md), value: [`bool`](class_bool.md) )<div id="class_softbody3d_method_set_collision_layer_value"></div>

Based on `value`, enables or disables the specified layer in the [`collision_layer`](#class_softbody3d_property_collision_layer), given a `layer_number` between 1 and 32.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_softbody3d_method_set_collision_mask_value"></div>

`void` **set_collision_mask_value** ( layer_number: [`int`](class_int.md), value: [`bool`](class_bool.md) )<div id="class_softbody3d_method_set_collision_mask_value"></div>

Based on `value`, enables or disables the specified layer in the [`collision_mask`](#class_softbody3d_property_collision_mask), given a `layer_number` between 1 and 32.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_softbody3d_method_set_point_pinned"></div>

`void` **set_point_pinned** ( point_index: [`int`](class_int.md), pinned: [`bool`](class_bool.md), attachment_path: [`NodePath`](class_nodepath.md) = NodePath("") )<div id="class_softbody3d_method_set_point_pinned"></div>

Sets the pinned state of a surface vertex. When set to `true`, the optional `attachment_path` can define a [`Node3D`](class_node3d.md) the pinned vertex will be attached to.

[^virtual]: 本方法通常需要用户覆盖才能生效。
[^const]: 本方法无副作用，不会修改该实例的任何成员变量。
[^vararg]: 本方法除了能接受在此处描述的参数外，还能够继续接受任意数量的参数。
[^constructor]: 本方法用于构造某个类型。
[^static]: 调用本方法无需实例，可直接使用类名进行调用。
[^operator]: 本方法描述的是使用本类型作为左操作数的有效运算符。
[^bitfield]: 这个值是由下列位标志构成位掩码的整数。
[^void]: 无返回值。
