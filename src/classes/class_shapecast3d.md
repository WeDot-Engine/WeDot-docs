<!-- ⚠ 请勿编辑本文件 ⚠ -->
<!-- 本文档使用脚本从 WeDot 引擎源码仓库生成。 -->
<!-- 生成脚本：https://github.com/WeDot-Engine/WeDot/tree/4.3/doc/tools/make_md.py； -->
<!-- 原文件：https://github.com/WeDot-Engine/WeDot/tree/4.3/doc/classes/ShapeCast3D.xml。 -->

<div id="_class_shapecast3d"></div>

# ShapeCast3D

**继承：** [`Node3D`](class_node3d.md) **<** [`Node`](class_node.md) **<** [`Object`](class_object.md)

A 3D shape that sweeps a region of space to detect [`CollisionObject3D`](class_collisionobject3d.md) s.

## 描述

Shape casting allows to detect collision objects by sweeping its [`shape`](#class_shapecast3d_property_shape) along the cast direction determined by [`target_position`](#class_shapecast3d_property_target_position). This is similar to [`RayCast3D`](class_raycast3d.md), but it allows for sweeping a region of space, rather than just a straight line. **ShapeCast3D** can detect multiple collision objects. It is useful for things like wide laser beams or snapping a simple shape to a floor.

Immediate collision overlaps can be done with the [`target_position`](#class_shapecast3d_property_target_position) set to `Vector3(0, 0, 0)` and by calling [`force_shapecast_update`](#class_shapecast3d_method_force_shapecast_update) within the same physics frame. This helps to overcome some limitations of [`Area3D`](class_area3d.md) when used as an instantaneous detection area, as collision information isn't immediately available to it.

 **Note:** Shape casting is more computationally expensive than ray casting.

## 属性

| [`bool`](class_bool.md)       | [`collide_with_areas`](#class_shapecast3d_property_collide_with_areas)             | ``false``             |
| [`bool`](class_bool.md)       | [`collide_with_bodies`](#class_shapecast3d_property_collide_with_bodies)           | ``true``              |
| [`int`](class_int.md)         | [`collision_mask`](#class_shapecast3d_property_collision_mask)                     | ``1``                 |
| [`Array`](class_array.md)     | [`collision_result`](#class_shapecast3d_property_collision_result)                 | ``[]``                |
| [`Color`](class_color.md)     | [`debug_shape_custom_color`](#class_shapecast3d_property_debug_shape_custom_color) | ``Color(0, 0, 0, 1)`` |
| [`bool`](class_bool.md)       | [`enabled`](#class_shapecast3d_property_enabled)                                   | ``true``              |
| [`bool`](class_bool.md)       | [`exclude_parent`](#class_shapecast3d_property_exclude_parent)                     | ``true``              |
| [`float`](class_float.md)     | [`margin`](#class_shapecast3d_property_margin)                                     | ``0.0``               |
| [`int`](class_int.md)         | [`max_results`](#class_shapecast3d_property_max_results)                           | ``32``                |
| [`Shape3D`](class_shape3d.md) | [`shape`](#class_shapecast3d_property_shape)                                       |                       |
| [`Vector3`](class_vector3.md) | [`target_position`](#class_shapecast3d_property_target_position)                   | ``Vector3(0, -1, 0)`` |

## 方法

| `void`                        | [`add_exception`](#class_shapecast3d_method_add_exception) ( node: [`CollisionObject3D`](class_collisionobject3d.md) )                                   |
| `void`                        | [`add_exception_rid`](#class_shapecast3d_method_add_exception_rid) ( rid: [`RID`](class_rid.md) )                                                        |
| `void`                        | [`clear_exceptions`](#class_shapecast3d_method_clear_exceptions) ( )                                                                                     |
| `void`                        | [`force_shapecast_update`](#class_shapecast3d_method_force_shapecast_update) ( )                                                                         |
| [`float`](class_float.md)     | [`get_closest_collision_safe_fraction`](#class_shapecast3d_method_get_closest_collision_safe_fraction) ( ) const[^const]                                 |
| [`float`](class_float.md)     | [`get_closest_collision_unsafe_fraction`](#class_shapecast3d_method_get_closest_collision_unsafe_fraction) ( ) const[^const]                             |
| [`Object`](class_object.md)   | [`get_collider`](#class_shapecast3d_method_get_collider) ( index: [`int`](class_int.md) ) const[^const]                                                  |
| [`RID`](class_rid.md)         | [`get_collider_rid`](#class_shapecast3d_method_get_collider_rid) ( index: [`int`](class_int.md) ) const[^const]                                          |
| [`int`](class_int.md)         | [`get_collider_shape`](#class_shapecast3d_method_get_collider_shape) ( index: [`int`](class_int.md) ) const[^const]                                      |
| [`int`](class_int.md)         | [`get_collision_count`](#class_shapecast3d_method_get_collision_count) ( ) const[^const]                                                                 |
| [`bool`](class_bool.md)       | [`get_collision_mask_value`](#class_shapecast3d_method_get_collision_mask_value) ( layer_number: [`int`](class_int.md) ) const[^const]                   |
| [`Vector3`](class_vector3.md) | [`get_collision_normal`](#class_shapecast3d_method_get_collision_normal) ( index: [`int`](class_int.md) ) const[^const]                                  |
| [`Vector3`](class_vector3.md) | [`get_collision_point`](#class_shapecast3d_method_get_collision_point) ( index: [`int`](class_int.md) ) const[^const]                                    |
| [`bool`](class_bool.md)       | [`is_colliding`](#class_shapecast3d_method_is_colliding) ( ) const[^const]                                                                               |
| `void`                        | [`remove_exception`](#class_shapecast3d_method_remove_exception) ( node: [`CollisionObject3D`](class_collisionobject3d.md) )                             |
| `void`                        | [`remove_exception_rid`](#class_shapecast3d_method_remove_exception_rid) ( rid: [`RID`](class_rid.md) )                                                  |
| `void`                        | [`resource_changed`](#class_shapecast3d_method_resource_changed) ( resource: [`Resource`](class_resource.md) )                                           |
| `void`                        | [`set_collision_mask_value`](#class_shapecast3d_method_set_collision_mask_value) ( layer_number: [`int`](class_int.md), value: [`bool`](class_bool.md) ) |

<!-- rst-class:: classref-section-separator -->

---

## 属性说明

<div id="_class_shapecast3d_property_collide_with_areas"></div>

[`bool`](class_bool.md) **collide_with_areas** = ``false`` <div id="class_shapecast3d_property_collide_with_areas"></div>

- `void` **set_collide_with_areas** ( value: [`bool`](class_bool.md) )
- [`bool`](class_bool.md) **is_collide_with_areas_enabled** ( )

If `true`, collisions with [`Area3D`](class_area3d.md) s will be reported.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_shapecast3d_property_collide_with_bodies"></div>

[`bool`](class_bool.md) **collide_with_bodies** = ``true`` <div id="class_shapecast3d_property_collide_with_bodies"></div>

- `void` **set_collide_with_bodies** ( value: [`bool`](class_bool.md) )
- [`bool`](class_bool.md) **is_collide_with_bodies_enabled** ( )

If `true`, collisions with [`PhysicsBody3D`](class_physicsbody3d.md) s will be reported.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_shapecast3d_property_collision_mask"></div>

[`int`](class_int.md) **collision_mask** = ``1`` <div id="class_shapecast3d_property_collision_mask"></div>

- `void` **set_collision_mask** ( value: [`int`](class_int.md) )
- [`int`](class_int.md) **get_collision_mask** ( )

The shape's collision mask. Only objects in at least one collision layer enabled in the mask will be detected. See [*Collision layers and masks*](../tutorials/physics/physics_introduction.md#collision-layers-and-masks) in the documentation for more information.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_shapecast3d_property_collision_result"></div>

[`Array`](class_array.md) **collision_result** = ``[]`` <div id="class_shapecast3d_property_collision_result"></div>

Returns the complete collision information from the collision sweep. The data returned is the same as in the [`PhysicsDirectSpaceState3D.get_rest_info`](#class_physicsdirectspacestate3d_method_get_rest_info) method.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_shapecast3d_property_debug_shape_custom_color"></div>

[`Color`](class_color.md) **debug_shape_custom_color** = ``Color(0, 0, 0, 1)`` <div id="class_shapecast3d_property_debug_shape_custom_color"></div>

- `void` **set_debug_shape_custom_color** ( value: [`Color`](class_color.md) )
- [`Color`](class_color.md) **get_debug_shape_custom_color** ( )

The custom color to use to draw the shape in the editor and at run-time if **Visible Collision Shapes** is enabled in the **Debug** menu. This color will be highlighted at run-time if the **ShapeCast3D** is colliding with something.

If set to `Color(0.0, 0.0, 0.0)` (by default), the color set in [`ProjectSettings.debug/shapes/collision/shape_color`](#class_projectsettings_property_debug/shapes/collision/shape_color) is used.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_shapecast3d_property_enabled"></div>

[`bool`](class_bool.md) **enabled** = ``true`` <div id="class_shapecast3d_property_enabled"></div>

- `void` **set_enabled** ( value: [`bool`](class_bool.md) )
- [`bool`](class_bool.md) **is_enabled** ( )

If `true`, collisions will be reported.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_shapecast3d_property_exclude_parent"></div>

[`bool`](class_bool.md) **exclude_parent** = ``true`` <div id="class_shapecast3d_property_exclude_parent"></div>

- `void` **set_exclude_parent_body** ( value: [`bool`](class_bool.md) )
- [`bool`](class_bool.md) **get_exclude_parent_body** ( )

If `true`, the parent node will be excluded from collision detection.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_shapecast3d_property_margin"></div>

[`float`](class_float.md) **margin** = ``0.0`` <div id="class_shapecast3d_property_margin"></div>

- `void` **set_margin** ( value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_margin** ( )

The collision margin for the shape. A larger margin helps detecting collisions more consistently, at the cost of precision.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_shapecast3d_property_max_results"></div>

[`int`](class_int.md) **max_results** = ``32`` <div id="class_shapecast3d_property_max_results"></div>

- `void` **set_max_results** ( value: [`int`](class_int.md) )
- [`int`](class_int.md) **get_max_results** ( )

The number of intersections can be limited with this parameter, to reduce the processing time.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_shapecast3d_property_shape"></div>

[`Shape3D`](class_shape3d.md) **shape** <div id="class_shapecast3d_property_shape"></div>

- `void` **set_shape** ( value: [`Shape3D`](class_shape3d.md) )
- [`Shape3D`](class_shape3d.md) **get_shape** ( )

The [`Shape3D`](class_shape3d.md)-derived shape to be used for collision queries.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_shapecast3d_property_target_position"></div>

[`Vector3`](class_vector3.md) **target_position** = ``Vector3(0, -1, 0)`` <div id="class_shapecast3d_property_target_position"></div>

- `void` **set_target_position** ( value: [`Vector3`](class_vector3.md) )
- [`Vector3`](class_vector3.md) **get_target_position** ( )

The shape's destination point, relative to this node's `position`.

<!-- rst-class:: classref-section-separator -->

---

## 方法说明

<div id="_class_shapecast3d_method_add_exception"></div>

`void` **add_exception** ( node: [`CollisionObject3D`](class_collisionobject3d.md) )<div id="class_shapecast3d_method_add_exception"></div>

Adds a collision exception so the shape does not report collisions with the specified [`CollisionObject3D`](class_collisionobject3d.md) node.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_shapecast3d_method_add_exception_rid"></div>

`void` **add_exception_rid** ( rid: [`RID`](class_rid.md) )<div id="class_shapecast3d_method_add_exception_rid"></div>

Adds a collision exception so the shape does not report collisions with the specified [`RID`](class_rid.md).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_shapecast3d_method_clear_exceptions"></div>

`void` **clear_exceptions** ( )<div id="class_shapecast3d_method_clear_exceptions"></div>

Removes all collision exceptions for this **ShapeCast3D**.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_shapecast3d_method_force_shapecast_update"></div>

`void` **force_shapecast_update** ( )<div id="class_shapecast3d_method_force_shapecast_update"></div>

Updates the collision information for the shape immediately, without waiting for the next `_physics_process` call. Use this method, for example, when the shape or its parent has changed state.

 **Note:** `enabled == true` is not required for this to work.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_shapecast3d_method_get_closest_collision_safe_fraction"></div>

[`float`](class_float.md) **get_closest_collision_safe_fraction** ( ) const[^const]<div id="class_shapecast3d_method_get_closest_collision_safe_fraction"></div>

The fraction from the **ShapeCast3D**'s origin to its [`target_position`](#class_shapecast3d_property_target_position) (between 0 and 1) of how far the shape can move without triggering a collision.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_shapecast3d_method_get_closest_collision_unsafe_fraction"></div>

[`float`](class_float.md) **get_closest_collision_unsafe_fraction** ( ) const[^const]<div id="class_shapecast3d_method_get_closest_collision_unsafe_fraction"></div>

The fraction from the **ShapeCast3D**'s origin to its [`target_position`](#class_shapecast3d_property_target_position) (between 0 and 1) of how far the shape must move to trigger a collision.

In ideal conditions this would be the same as [`get_closest_collision_safe_fraction`](#class_shapecast3d_method_get_closest_collision_safe_fraction), however shape casting is calculated in discrete steps, so the precise point of collision can occur between two calculated positions.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_shapecast3d_method_get_collider"></div>

[`Object`](class_object.md) **get_collider** ( index: [`int`](class_int.md) ) const[^const]<div id="class_shapecast3d_method_get_collider"></div>

Returns the collided [`Object`](class_object.md) of one of the multiple collisions at `index`, or `null` if no object is intersecting the shape (i.e. [`is_colliding`](#class_shapecast3d_method_is_colliding) returns `false`).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_shapecast3d_method_get_collider_rid"></div>

[`RID`](class_rid.md) **get_collider_rid** ( index: [`int`](class_int.md) ) const[^const]<div id="class_shapecast3d_method_get_collider_rid"></div>

Returns the [`RID`](class_rid.md) of the collided object of one of the multiple collisions at `index`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_shapecast3d_method_get_collider_shape"></div>

[`int`](class_int.md) **get_collider_shape** ( index: [`int`](class_int.md) ) const[^const]<div id="class_shapecast3d_method_get_collider_shape"></div>

Returns the shape ID of the colliding shape of one of the multiple collisions at `index`, or `0` if no object is intersecting the shape (i.e. [`is_colliding`](#class_shapecast3d_method_is_colliding) returns `false`).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_shapecast3d_method_get_collision_count"></div>

[`int`](class_int.md) **get_collision_count** ( ) const[^const]<div id="class_shapecast3d_method_get_collision_count"></div>

The number of collisions detected at the point of impact. Use this to iterate over multiple collisions as provided by [`get_collider`](#class_shapecast3d_method_get_collider), [`get_collider_shape`](#class_shapecast3d_method_get_collider_shape), [`get_collision_point`](#class_shapecast3d_method_get_collision_point), and [`get_collision_normal`](#class_shapecast3d_method_get_collision_normal) methods.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_shapecast3d_method_get_collision_mask_value"></div>

[`bool`](class_bool.md) **get_collision_mask_value** ( layer_number: [`int`](class_int.md) ) const[^const]<div id="class_shapecast3d_method_get_collision_mask_value"></div>

Returns whether or not the specified layer of the [`collision_mask`](#class_shapecast3d_property_collision_mask) is enabled, given a `layer_number` between 1 and 32.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_shapecast3d_method_get_collision_normal"></div>

[`Vector3`](class_vector3.md) **get_collision_normal** ( index: [`int`](class_int.md) ) const[^const]<div id="class_shapecast3d_method_get_collision_normal"></div>

Returns the normal of one of the multiple collisions at `index` of the intersecting object.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_shapecast3d_method_get_collision_point"></div>

[`Vector3`](class_vector3.md) **get_collision_point** ( index: [`int`](class_int.md) ) const[^const]<div id="class_shapecast3d_method_get_collision_point"></div>

Returns the collision point of one of the multiple collisions at `index` where the shape intersects the colliding object.

 **Note:** this point is in the **global** coordinate system.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_shapecast3d_method_is_colliding"></div>

[`bool`](class_bool.md) **is_colliding** ( ) const[^const]<div id="class_shapecast3d_method_is_colliding"></div>

Returns whether any object is intersecting with the shape's vector (considering the vector length).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_shapecast3d_method_remove_exception"></div>

`void` **remove_exception** ( node: [`CollisionObject3D`](class_collisionobject3d.md) )<div id="class_shapecast3d_method_remove_exception"></div>

Removes a collision exception so the shape does report collisions with the specified [`CollisionObject3D`](class_collisionobject3d.md) node.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_shapecast3d_method_remove_exception_rid"></div>

`void` **remove_exception_rid** ( rid: [`RID`](class_rid.md) )<div id="class_shapecast3d_method_remove_exception_rid"></div>

Removes a collision exception so the shape does report collisions with the specified [`RID`](class_rid.md).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_shapecast3d_method_resource_changed"></div>

`void` **resource_changed** ( resource: [`Resource`](class_resource.md) )<div id="class_shapecast3d_method_resource_changed"></div>

**已弃用：** Use [`Resource.changed`](#class_resource_signal_changed) instead.

This method does nothing.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_shapecast3d_method_set_collision_mask_value"></div>

`void` **set_collision_mask_value** ( layer_number: [`int`](class_int.md), value: [`bool`](class_bool.md) )<div id="class_shapecast3d_method_set_collision_mask_value"></div>

Based on `value`, enables or disables the specified layer in the [`collision_mask`](#class_shapecast3d_property_collision_mask), given a `layer_number` between 1 and 32.

[^virtual]: 本方法通常需要用户覆盖才能生效。
[^const]: 本方法无副作用，不会修改该实例的任何成员变量。
[^vararg]: 本方法除了能接受在此处描述的参数外，还能够继续接受任意数量的参数。
[^constructor]: 本方法用于构造某个类型。
[^static]: 调用本方法无需实例，可直接使用类名进行调用。
[^operator]: 本方法描述的是使用本类型作为左操作数的有效运算符。
[^bitfield]: 这个值是由下列位标志构成位掩码的整数。
[^void]: 无返回值。
