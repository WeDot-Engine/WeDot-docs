<!-- ⚠ 请勿编辑本文件 ⚠ -->
<!-- 本文档使用脚本从 WeDot 引擎源码仓库生成。 -->
<!-- 生成脚本：https://github.com/WeDot-Engine/WeDot/tree/master/doc/tools/make_md.py； -->
<!-- 原文件：https://github.com/WeDot-Engine/WeDot/tree/master/doc/classes/PhysicsRayQueryParameters3D.xml。 -->

<div id="_class_physicsrayqueryparameters3d"></div>

# PhysicsRayQueryParameters3D

**继承：** [`RefCounted`](class_refcounted.md) **<** [`Object`](class_object.md)

Provides parameters for [`PhysicsDirectSpaceState3D.intersect_ray`](class_physicsdirectspacestate3d.md#class_physicsdirectspacestate3d_method_intersect_ray).

## 描述

By changing various properties of this object, such as the ray position, you can configure the parameters for [`PhysicsDirectSpaceState3D.intersect_ray`](class_physicsdirectspacestate3d.md#class_physicsdirectspacestate3d_method_intersect_ray).

## 属性

|||
|:-:|:--|
| [`bool`](class_bool.md)                       | [`collide_with_areas`](class_physicsrayqueryparameters3d.md#class_physicsrayqueryparameters3d_property_collide_with_areas)   | ``false``            |
| [`bool`](class_bool.md)                       | [`collide_with_bodies`](class_physicsrayqueryparameters3d.md#class_physicsrayqueryparameters3d_property_collide_with_bodies) | ``true``             |
| [`int`](class_int.md)                         | [`collision_mask`](class_physicsrayqueryparameters3d.md#class_physicsrayqueryparameters3d_property_collision_mask)           | ``4294967295``       |
| [Array](class_array.md) [`RID`](class_rid.md) | [`exclude`](class_physicsrayqueryparameters3d.md#class_physicsrayqueryparameters3d_property_exclude)                         | ``[]``               |
| [`Vector3`](class_vector3.md)                 | [`from`](class_physicsrayqueryparameters3d.md#class_physicsrayqueryparameters3d_property_from)                               | ``Vector3(0, 0, 0)`` |
| [`bool`](class_bool.md)                       | [`hit_back_faces`](class_physicsrayqueryparameters3d.md#class_physicsrayqueryparameters3d_property_hit_back_faces)           | ``true``             |
| [`bool`](class_bool.md)                       | [`hit_from_inside`](class_physicsrayqueryparameters3d.md#class_physicsrayqueryparameters3d_property_hit_from_inside)         | ``false``            |
| [`Vector3`](class_vector3.md)                 | [`to`](class_physicsrayqueryparameters3d.md#class_physicsrayqueryparameters3d_property_to)                                   | ``Vector3(0, 0, 0)`` |

## 方法

|||
|:-:|:--|
| [`PhysicsRayQueryParameters3D`](class_physicsrayqueryparameters3d.md) | [`create`](class_physicsrayqueryparameters3d.md#class_physicsrayqueryparameters3d_method_create) ( from: [`Vector3`](class_vector3.md), to: [`Vector3`](class_vector3.md), collision_mask: [`int`](class_int.md) = 4294967295, exclude: [Array](class_array.md) [`RID`](class_rid.md) = [] ) static[^static] |

<!-- rst-class:: classref-section-separator -->

---

## 属性说明

<div id="_class_physicsrayqueryparameters3d_property_collide_with_areas"></div>

[`bool`](class_bool.md) **collide_with_areas** = ``false`` <div id="class_physicsrayqueryparameters3d_property_collide_with_areas"></div>

- `void` **set_collide_with_areas** ( value: [`bool`](class_bool.md) )
- [`bool`](class_bool.md) **is_collide_with_areas_enabled** ( )

If `true`, the query will take [`Area3D`](class_area3d.md) s into account.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsrayqueryparameters3d_property_collide_with_bodies"></div>

[`bool`](class_bool.md) **collide_with_bodies** = ``true`` <div id="class_physicsrayqueryparameters3d_property_collide_with_bodies"></div>

- `void` **set_collide_with_bodies** ( value: [`bool`](class_bool.md) )
- [`bool`](class_bool.md) **is_collide_with_bodies_enabled** ( )

If `true`, the query will take [`PhysicsBody3D`](class_physicsbody3d.md) s into account.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsrayqueryparameters3d_property_collision_mask"></div>

[`int`](class_int.md) **collision_mask** = ``4294967295`` <div id="class_physicsrayqueryparameters3d_property_collision_mask"></div>

- `void` **set_collision_mask** ( value: [`int`](class_int.md) )
- [`int`](class_int.md) **get_collision_mask** ( )

The physics layers the query will detect (as a bitmask). By default, all collision layers are detected. See [*Collision layers and masks*](../tutorials/physics/physics_introduction.md#collision-layers-and-masks) in the documentation for more information.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsrayqueryparameters3d_property_exclude"></div>

[Array](class_array.md) [`RID`](class_rid.md) **exclude** = ``[]`` <div id="class_physicsrayqueryparameters3d_property_exclude"></div>

- `void` **set_exclude** ( value: [Array](class_array.md) [`RID`](class_rid.md) )
- [Array](class_array.md) [`RID`](class_rid.md) **get_exclude** ( )

The list of object [`RID`](class_rid.md) s that will be excluded from collisions. Use [`CollisionObject3D.get_rid`](class_collisionobject3d.md#class_collisionobject3d_method_get_rid) to get the [`RID`](class_rid.md) associated with a [`CollisionObject3D`](class_collisionobject3d.md)-derived node.

 **Note:** The returned array is copied and any changes to it will not update the original property value. To update the value you need to modify the returned array, and then assign it to the property again.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsrayqueryparameters3d_property_from"></div>

[`Vector3`](class_vector3.md) **from** = ``Vector3(0, 0, 0)`` <div id="class_physicsrayqueryparameters3d_property_from"></div>

- `void` **set_from** ( value: [`Vector3`](class_vector3.md) )
- [`Vector3`](class_vector3.md) **get_from** ( )

The starting point of the ray being queried for, in global coordinates.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsrayqueryparameters3d_property_hit_back_faces"></div>

[`bool`](class_bool.md) **hit_back_faces** = ``true`` <div id="class_physicsrayqueryparameters3d_property_hit_back_faces"></div>

- `void` **set_hit_back_faces** ( value: [`bool`](class_bool.md) )
- [`bool`](class_bool.md) **is_hit_back_faces_enabled** ( )

If `true`, the query will hit back faces with concave polygon shapes with back face enabled or heightmap shapes.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsrayqueryparameters3d_property_hit_from_inside"></div>

[`bool`](class_bool.md) **hit_from_inside** = ``false`` <div id="class_physicsrayqueryparameters3d_property_hit_from_inside"></div>

- `void` **set_hit_from_inside** ( value: [`bool`](class_bool.md) )
- [`bool`](class_bool.md) **is_hit_from_inside_enabled** ( )

If `true`, the query will detect a hit when starting inside shapes. In this case the collision normal will be `Vector3(0, 0, 0)`. Does not affect concave polygon shapes or heightmap shapes.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsrayqueryparameters3d_property_to"></div>

[`Vector3`](class_vector3.md) **to** = ``Vector3(0, 0, 0)`` <div id="class_physicsrayqueryparameters3d_property_to"></div>

- `void` **set_to** ( value: [`Vector3`](class_vector3.md) )
- [`Vector3`](class_vector3.md) **get_to** ( )

The ending point of the ray being queried for, in global coordinates.

<!-- rst-class:: classref-section-separator -->

---

## 方法说明

<div id="_class_physicsrayqueryparameters3d_method_create"></div>

[`PhysicsRayQueryParameters3D`](class_physicsrayqueryparameters3d.md) **create** ( from: [`Vector3`](class_vector3.md), to: [`Vector3`](class_vector3.md), collision_mask: [`int`](class_int.md) = 4294967295, exclude: [Array](class_array.md) [`RID`](class_rid.md) = [] ) static[^static]<div id="class_physicsrayqueryparameters3d_method_create"></div>

Returns a new, pre-configured **PhysicsRayQueryParameters3D** object. Use it to quickly create query parameters using the most common options.

```

    var query = PhysicsRayQueryParameters3D.create(position, position + Vector3(0, -10, 0))
    var collision = get_world_3d().direct_space_state.intersect_ray(query)
```



[^virtual]: 本方法通常需要用户覆盖才能生效。
[^const]: 本方法无副作用，不会修改该实例的任何成员变量。
[^vararg]: 本方法除了能接受在此处描述的参数外，还能够继续接受任意数量的参数。
[^constructor]: 本方法用于构造某个类型。
[^static]: 调用本方法无需实例，可直接使用类名进行调用。
[^operator]: 本方法描述的是使用本类型作为左操作数的有效运算符。
[^bitfield]: 这个值是由下列位标志构成位掩码的整数。
[^void]: 无返回值。
