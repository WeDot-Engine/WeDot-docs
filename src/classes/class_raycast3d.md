<!-- ⚠ 请勿编辑本文件 ⚠ -->
<!-- 本文档使用脚本从 WeDot 引擎源码仓库生成。 -->
<!-- 生成脚本：https://github.com/WeDot-Engine/WeDot/tree/4.3/doc/tools/make_md.py； -->
<!-- 原文件：https://github.com/WeDot-Engine/WeDot/tree/4.3/doc/classes/RayCast3D.xml。 -->

<div id="_class_raycast3d"></div>

# RayCast3D

**继承：** [`Node3D`](class_node3d.md) **<** [`Node`](class_node.md) **<** [`Object`](class_object.md)

A ray in 3D space, used to find the first [`CollisionObject3D`](class_collisionobject3d.md) it intersects.

## 描述

A raycast represents a ray from its origin to its [`target_position`](#class_raycast3d_property_target_position) that finds the closest [`CollisionObject3D`](class_collisionobject3d.md) along its path, if it intersects any.

 **RayCast3D** can ignore some objects by adding them to an exception list, by making its detection reporting ignore [`Area3D`](class_area3d.md) s ([`collide_with_areas`](#class_raycast3d_property_collide_with_areas)) or [`PhysicsBody3D`](class_physicsbody3d.md) s ([`collide_with_bodies`](#class_raycast3d_property_collide_with_bodies)), or by configuring physics layers.

 **RayCast3D** calculates intersection every physics frame, and it holds the result until the next physics frame. For an immediate raycast, or if you want to configure a **RayCast3D** multiple times within the same physics frame, use [`force_raycast_update`](#class_raycast3d_method_force_raycast_update).

To sweep over a region of 3D space, you can approximate the region with multiple **RayCast3D** s or use [`ShapeCast3D`](class_shapecast3d.md).

## 属性

| [`bool`](class_bool.md)       | [`collide_with_areas`](#class_raycast3d_property_collide_with_areas)             | ``false``             |
| [`bool`](class_bool.md)       | [`collide_with_bodies`](#class_raycast3d_property_collide_with_bodies)           | ``true``              |
| [`int`](class_int.md)         | [`collision_mask`](#class_raycast3d_property_collision_mask)                     | ``1``                 |
| [`Color`](class_color.md)     | [`debug_shape_custom_color`](#class_raycast3d_property_debug_shape_custom_color) | ``Color(0, 0, 0, 1)`` |
| [`int`](class_int.md)         | [`debug_shape_thickness`](#class_raycast3d_property_debug_shape_thickness)       | ``2``                 |
| [`bool`](class_bool.md)       | [`enabled`](#class_raycast3d_property_enabled)                                   | ``true``              |
| [`bool`](class_bool.md)       | [`exclude_parent`](#class_raycast3d_property_exclude_parent)                     | ``true``              |
| [`bool`](class_bool.md)       | [`hit_back_faces`](#class_raycast3d_property_hit_back_faces)                     | ``true``              |
| [`bool`](class_bool.md)       | [`hit_from_inside`](#class_raycast3d_property_hit_from_inside)                   | ``false``             |
| [`Vector3`](class_vector3.md) | [`target_position`](#class_raycast3d_property_target_position)                   | ``Vector3(0, -1, 0)`` |

## 方法

| `void`                        | [`add_exception`](#class_raycast3d_method_add_exception) ( node: [`CollisionObject3D`](class_collisionobject3d.md) )                                   |
| `void`                        | [`add_exception_rid`](#class_raycast3d_method_add_exception_rid) ( rid: [`RID`](class_rid.md) )                                                        |
| `void`                        | [`clear_exceptions`](#class_raycast3d_method_clear_exceptions) ( )                                                                                     |
| `void`                        | [`force_raycast_update`](#class_raycast3d_method_force_raycast_update) ( )                                                                             |
| [`Object`](class_object.md)   | [`get_collider`](#class_raycast3d_method_get_collider) ( ) const[^const]                                                                               |
| [`RID`](class_rid.md)         | [`get_collider_rid`](#class_raycast3d_method_get_collider_rid) ( ) const[^const]                                                                       |
| [`int`](class_int.md)         | [`get_collider_shape`](#class_raycast3d_method_get_collider_shape) ( ) const[^const]                                                                   |
| [`int`](class_int.md)         | [`get_collision_face_index`](#class_raycast3d_method_get_collision_face_index) ( ) const[^const]                                                       |
| [`bool`](class_bool.md)       | [`get_collision_mask_value`](#class_raycast3d_method_get_collision_mask_value) ( layer_number: [`int`](class_int.md) ) const[^const]                   |
| [`Vector3`](class_vector3.md) | [`get_collision_normal`](#class_raycast3d_method_get_collision_normal) ( ) const[^const]                                                               |
| [`Vector3`](class_vector3.md) | [`get_collision_point`](#class_raycast3d_method_get_collision_point) ( ) const[^const]                                                                 |
| [`bool`](class_bool.md)       | [`is_colliding`](#class_raycast3d_method_is_colliding) ( ) const[^const]                                                                               |
| `void`                        | [`remove_exception`](#class_raycast3d_method_remove_exception) ( node: [`CollisionObject3D`](class_collisionobject3d.md) )                             |
| `void`                        | [`remove_exception_rid`](#class_raycast3d_method_remove_exception_rid) ( rid: [`RID`](class_rid.md) )                                                  |
| `void`                        | [`set_collision_mask_value`](#class_raycast3d_method_set_collision_mask_value) ( layer_number: [`int`](class_int.md), value: [`bool`](class_bool.md) ) |

<!-- rst-class:: classref-section-separator -->

---

## 属性说明

<div id="_class_raycast3d_property_collide_with_areas"></div>

[`bool`](class_bool.md) **collide_with_areas** = ``false`` <div id="class_raycast3d_property_collide_with_areas"></div>

- `void` **set_collide_with_areas** ( value: [`bool`](class_bool.md) )
- [`bool`](class_bool.md) **is_collide_with_areas_enabled** ( )

If `true`, collisions with [`Area3D`](class_area3d.md) s will be reported.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_raycast3d_property_collide_with_bodies"></div>

[`bool`](class_bool.md) **collide_with_bodies** = ``true`` <div id="class_raycast3d_property_collide_with_bodies"></div>

- `void` **set_collide_with_bodies** ( value: [`bool`](class_bool.md) )
- [`bool`](class_bool.md) **is_collide_with_bodies_enabled** ( )

If `true`, collisions with [`PhysicsBody3D`](class_physicsbody3d.md) s will be reported.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_raycast3d_property_collision_mask"></div>

[`int`](class_int.md) **collision_mask** = ``1`` <div id="class_raycast3d_property_collision_mask"></div>

- `void` **set_collision_mask** ( value: [`int`](class_int.md) )
- [`int`](class_int.md) **get_collision_mask** ( )

The ray's collision mask. Only objects in at least one collision layer enabled in the mask will be detected. See [*Collision layers and masks*](../tutorials/physics/physics_introduction.md#collision-layers-and-masks) in the documentation for more information.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_raycast3d_property_debug_shape_custom_color"></div>

[`Color`](class_color.md) **debug_shape_custom_color** = ``Color(0, 0, 0, 1)`` <div id="class_raycast3d_property_debug_shape_custom_color"></div>

- `void` **set_debug_shape_custom_color** ( value: [`Color`](class_color.md) )
- [`Color`](class_color.md) **get_debug_shape_custom_color** ( )

The custom color to use to draw the shape in the editor and at run-time if **Visible Collision Shapes** is enabled in the **Debug** menu. This color will be highlighted at run-time if the **RayCast3D** is colliding with something.

If set to `Color(0.0, 0.0, 0.0)` (by default), the color set in [`ProjectSettings.debug/shapes/collision/shape_color`](#class_projectsettings_property_debug/shapes/collision/shape_color) is used.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_raycast3d_property_debug_shape_thickness"></div>

[`int`](class_int.md) **debug_shape_thickness** = ``2`` <div id="class_raycast3d_property_debug_shape_thickness"></div>

- `void` **set_debug_shape_thickness** ( value: [`int`](class_int.md) )
- [`int`](class_int.md) **get_debug_shape_thickness** ( )

If set to `1`, a line is used as the debug shape. Otherwise, a truncated pyramid is drawn to represent the **RayCast3D**. Requires **Visible Collision Shapes** to be enabled in the **Debug** menu for the debug shape to be visible at run-time.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_raycast3d_property_enabled"></div>

[`bool`](class_bool.md) **enabled** = ``true`` <div id="class_raycast3d_property_enabled"></div>

- `void` **set_enabled** ( value: [`bool`](class_bool.md) )
- [`bool`](class_bool.md) **is_enabled** ( )

If `true`, collisions will be reported.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_raycast3d_property_exclude_parent"></div>

[`bool`](class_bool.md) **exclude_parent** = ``true`` <div id="class_raycast3d_property_exclude_parent"></div>

- `void` **set_exclude_parent_body** ( value: [`bool`](class_bool.md) )
- [`bool`](class_bool.md) **get_exclude_parent_body** ( )

If `true`, collisions will be ignored for this RayCast3D's immediate parent.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_raycast3d_property_hit_back_faces"></div>

[`bool`](class_bool.md) **hit_back_faces** = ``true`` <div id="class_raycast3d_property_hit_back_faces"></div>

- `void` **set_hit_back_faces** ( value: [`bool`](class_bool.md) )
- [`bool`](class_bool.md) **is_hit_back_faces_enabled** ( )

If `true`, the ray will hit back faces with concave polygon shapes with back face enabled or heightmap shapes.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_raycast3d_property_hit_from_inside"></div>

[`bool`](class_bool.md) **hit_from_inside** = ``false`` <div id="class_raycast3d_property_hit_from_inside"></div>

- `void` **set_hit_from_inside** ( value: [`bool`](class_bool.md) )
- [`bool`](class_bool.md) **is_hit_from_inside_enabled** ( )

If `true`, the ray will detect a hit when starting inside shapes. In this case the collision normal will be `Vector3(0, 0, 0)`. Does not affect shapes with no volume like concave polygon or heightmap.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_raycast3d_property_target_position"></div>

[`Vector3`](class_vector3.md) **target_position** = ``Vector3(0, -1, 0)`` <div id="class_raycast3d_property_target_position"></div>

- `void` **set_target_position** ( value: [`Vector3`](class_vector3.md) )
- [`Vector3`](class_vector3.md) **get_target_position** ( )

The ray's destination point, relative to the RayCast's `position`.

<!-- rst-class:: classref-section-separator -->

---

## 方法说明

<div id="_class_raycast3d_method_add_exception"></div>

`void` **add_exception** ( node: [`CollisionObject3D`](class_collisionobject3d.md) )<div id="class_raycast3d_method_add_exception"></div>

Adds a collision exception so the ray does not report collisions with the specified [`CollisionObject3D`](class_collisionobject3d.md) node.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_raycast3d_method_add_exception_rid"></div>

`void` **add_exception_rid** ( rid: [`RID`](class_rid.md) )<div id="class_raycast3d_method_add_exception_rid"></div>

Adds a collision exception so the ray does not report collisions with the specified [`RID`](class_rid.md).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_raycast3d_method_clear_exceptions"></div>

`void` **clear_exceptions** ( )<div id="class_raycast3d_method_clear_exceptions"></div>

Removes all collision exceptions for this ray.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_raycast3d_method_force_raycast_update"></div>

`void` **force_raycast_update** ( )<div id="class_raycast3d_method_force_raycast_update"></div>

Updates the collision information for the ray immediately, without waiting for the next `_physics_process` call. Use this method, for example, when the ray or its parent has changed state.

 **Note:** [`enabled`](#class_raycast3d_property_enabled) does not need to be `true` for this to work.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_raycast3d_method_get_collider"></div>

[`Object`](class_object.md) **get_collider** ( ) const[^const]<div id="class_raycast3d_method_get_collider"></div>

Returns the first object that the ray intersects, or `null` if no object is intersecting the ray (i.e. [`is_colliding`](#class_raycast3d_method_is_colliding) returns `false`).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_raycast3d_method_get_collider_rid"></div>

[`RID`](class_rid.md) **get_collider_rid** ( ) const[^const]<div id="class_raycast3d_method_get_collider_rid"></div>

Returns the [`RID`](class_rid.md) of the first object that the ray intersects, or an empty [`RID`](class_rid.md) if no object is intersecting the ray (i.e. [`is_colliding`](#class_raycast3d_method_is_colliding) returns `false`).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_raycast3d_method_get_collider_shape"></div>

[`int`](class_int.md) **get_collider_shape** ( ) const[^const]<div id="class_raycast3d_method_get_collider_shape"></div>

Returns the shape ID of the first object that the ray intersects, or `0` if no object is intersecting the ray (i.e. [`is_colliding`](#class_raycast3d_method_is_colliding) returns `false`).

To get the intersected shape node, for a [`CollisionObject3D`](class_collisionobject3d.md) target, use:



```gdscript

    var target = get_collider() # A CollisionObject3D.
    var shape_id = get_collider_shape() # The shape index in the collider.
    var owner_id = target.shape_find_owner(shape_id) # The owner ID in the collider.
    var shape = target.shape_owner_get_owner(owner_id)
```

```csharp

    var target = (CollisionObject3D)GetCollider(); // A CollisionObject3D.
    var shapeId = GetColliderShape(); // The shape index in the collider.
    var ownerId = target.ShapeFindOwner(shapeId); // The owner ID in the collider.
    var shape = target.ShapeOwnerGetOwner(ownerId);
```







<!-- rst-class:: classref-item-separator -->

---

<div id="_class_raycast3d_method_get_collision_face_index"></div>

[`int`](class_int.md) **get_collision_face_index** ( ) const[^const]<div id="class_raycast3d_method_get_collision_face_index"></div>

Returns the collision object's face index at the collision point, or `-1` if the shape intersecting the ray is not a [`ConcavePolygonShape3D`](class_concavepolygonshape3d.md).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_raycast3d_method_get_collision_mask_value"></div>

[`bool`](class_bool.md) **get_collision_mask_value** ( layer_number: [`int`](class_int.md) ) const[^const]<div id="class_raycast3d_method_get_collision_mask_value"></div>

Returns whether or not the specified layer of the [`collision_mask`](#class_raycast3d_property_collision_mask) is enabled, given a `layer_number` between 1 and 32.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_raycast3d_method_get_collision_normal"></div>

[`Vector3`](class_vector3.md) **get_collision_normal** ( ) const[^const]<div id="class_raycast3d_method_get_collision_normal"></div>

Returns the normal of the intersecting object's shape at the collision point, or `Vector3(0, 0, 0)` if the ray starts inside the shape and [`hit_from_inside`](#class_raycast3d_property_hit_from_inside) is `true`.

 **Note:** Check that [`is_colliding`](#class_raycast3d_method_is_colliding) returns `true` before calling this method to ensure the returned normal is valid and up-to-date.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_raycast3d_method_get_collision_point"></div>

[`Vector3`](class_vector3.md) **get_collision_point** ( ) const[^const]<div id="class_raycast3d_method_get_collision_point"></div>

Returns the collision point at which the ray intersects the closest object, in the global coordinate system. If [`hit_from_inside`](#class_raycast3d_property_hit_from_inside) is `true` and the ray starts inside of a collision shape, this function will return the origin point of the ray.

 **Note:** Check that [`is_colliding`](#class_raycast3d_method_is_colliding) returns `true` before calling this method to ensure the returned point is valid and up-to-date.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_raycast3d_method_is_colliding"></div>

[`bool`](class_bool.md) **is_colliding** ( ) const[^const]<div id="class_raycast3d_method_is_colliding"></div>

Returns whether any object is intersecting with the ray's vector (considering the vector length).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_raycast3d_method_remove_exception"></div>

`void` **remove_exception** ( node: [`CollisionObject3D`](class_collisionobject3d.md) )<div id="class_raycast3d_method_remove_exception"></div>

Removes a collision exception so the ray does report collisions with the specified [`CollisionObject3D`](class_collisionobject3d.md) node.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_raycast3d_method_remove_exception_rid"></div>

`void` **remove_exception_rid** ( rid: [`RID`](class_rid.md) )<div id="class_raycast3d_method_remove_exception_rid"></div>

Removes a collision exception so the ray does report collisions with the specified [`RID`](class_rid.md).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_raycast3d_method_set_collision_mask_value"></div>

`void` **set_collision_mask_value** ( layer_number: [`int`](class_int.md), value: [`bool`](class_bool.md) )<div id="class_raycast3d_method_set_collision_mask_value"></div>

Based on `value`, enables or disables the specified layer in the [`collision_mask`](#class_raycast3d_property_collision_mask), given a `layer_number` between 1 and 32.

[^virtual]: 本方法通常需要用户覆盖才能生效。
[^const]: 本方法无副作用，不会修改该实例的任何成员变量。
[^vararg]: 本方法除了能接受在此处描述的参数外，还能够继续接受任意数量的参数。
[^constructor]: 本方法用于构造某个类型。
[^static]: 调用本方法无需实例，可直接使用类名进行调用。
[^operator]: 本方法描述的是使用本类型作为左操作数的有效运算符。
[^bitfield]: 这个值是由下列位标志构成位掩码的整数。
[^void]: 无返回值。
