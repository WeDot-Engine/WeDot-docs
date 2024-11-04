<!-- ⚠ 请勿编辑本文件 ⚠ -->
<!-- 本文档使用脚本从 WeDot 引擎源码仓库生成。 -->
<!-- 生成脚本：https://github.com/WeDot-Engine/WeDot/tree/4.3/doc/tools/make_md.py； -->
<!-- 原文件：https://github.com/WeDot-Engine/WeDot/tree/4.3/doc/classes/PhysicsShapeQueryParameters2D.xml。 -->

<div id="_class_physicsshapequeryparameters2d"></div>

# PhysicsShapeQueryParameters2D

**继承：** [`RefCounted`](class_refcounted.md) **<** [`Object`](class_object.md)

Provides parameters for [`PhysicsDirectSpaceState2D.intersect_shape`](#class_physicsdirectspacestate2d_method_intersect_shape).

## 描述

By changing various properties of this object, such as the shape, you can configure the parameters for [`PhysicsDirectSpaceState2D.intersect_shape`](#class_physicsdirectspacestate2d_method_intersect_shape).

## 属性

| [`bool`](class_bool.md)                       | [`collide_with_areas`](#class_physicsshapequeryparameters2d_property_collide_with_areas)   | ``false``                         |
| [`bool`](class_bool.md)                       | [`collide_with_bodies`](#class_physicsshapequeryparameters2d_property_collide_with_bodies) | ``true``                          |
| [`int`](class_int.md)                         | [`collision_mask`](#class_physicsshapequeryparameters2d_property_collision_mask)           | ``4294967295``                    |
| [Array](class_array.md) [`RID`](class_rid.md) | [`exclude`](#class_physicsshapequeryparameters2d_property_exclude)                         | ``[]``                            |
| [`float`](class_float.md)                     | [`margin`](#class_physicsshapequeryparameters2d_property_margin)                           | ``0.0``                           |
| [`Vector2`](class_vector2.md)                 | [`motion`](#class_physicsshapequeryparameters2d_property_motion)                           | ``Vector2(0, 0)``                 |
| [`Resource`](class_resource.md)               | [`shape`](#class_physicsshapequeryparameters2d_property_shape)                             |                                   |
| [`RID`](class_rid.md)                         | [`shape_rid`](#class_physicsshapequeryparameters2d_property_shape_rid)                     | ``RID()``                         |
| [`Transform2D`](class_transform2d.md)         | [`transform`](#class_physicsshapequeryparameters2d_property_transform)                     | ``Transform2D(1, 0, 0, 1, 0, 0)`` |

<!-- rst-class:: classref-section-separator -->

---

## 属性说明

<div id="_class_physicsshapequeryparameters2d_property_collide_with_areas"></div>

[`bool`](class_bool.md) **collide_with_areas** = ``false`` <div id="class_physicsshapequeryparameters2d_property_collide_with_areas"></div>

- `void` **set_collide_with_areas** ( value: [`bool`](class_bool.md) )
- [`bool`](class_bool.md) **is_collide_with_areas_enabled** ( )

If `true`, the query will take [`Area2D`](class_area2d.md) s into account.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsshapequeryparameters2d_property_collide_with_bodies"></div>

[`bool`](class_bool.md) **collide_with_bodies** = ``true`` <div id="class_physicsshapequeryparameters2d_property_collide_with_bodies"></div>

- `void` **set_collide_with_bodies** ( value: [`bool`](class_bool.md) )
- [`bool`](class_bool.md) **is_collide_with_bodies_enabled** ( )

If `true`, the query will take [`PhysicsBody2D`](class_physicsbody2d.md) s into account.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsshapequeryparameters2d_property_collision_mask"></div>

[`int`](class_int.md) **collision_mask** = ``4294967295`` <div id="class_physicsshapequeryparameters2d_property_collision_mask"></div>

- `void` **set_collision_mask** ( value: [`int`](class_int.md) )
- [`int`](class_int.md) **get_collision_mask** ( )

The physics layers the query will detect (as a bitmask). By default, all collision layers are detected. See [*Collision layers and masks*](../tutorials/physics/physics_introduction.md#collision-layers-and-masks) in the documentation for more information.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsshapequeryparameters2d_property_exclude"></div>

[Array](class_array.md) [`RID`](class_rid.md) **exclude** = ``[]`` <div id="class_physicsshapequeryparameters2d_property_exclude"></div>

- `void` **set_exclude** ( value: [Array](class_array.md) [`RID`](class_rid.md) )
- [Array](class_array.md) [`RID`](class_rid.md) **get_exclude** ( )

The list of object [`RID`](class_rid.md) s that will be excluded from collisions. Use [`CollisionObject2D.get_rid`](#class_collisionobject2d_method_get_rid) to get the [`RID`](class_rid.md) associated with a [`CollisionObject2D`](class_collisionobject2d.md)-derived node.

 **Note:** The returned array is copied and any changes to it will not update the original property value. To update the value you need to modify the returned array, and then assign it to the property again.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsshapequeryparameters2d_property_margin"></div>

[`float`](class_float.md) **margin** = ``0.0`` <div id="class_physicsshapequeryparameters2d_property_margin"></div>

- `void` **set_margin** ( value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_margin** ( )

The collision margin for the shape.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsshapequeryparameters2d_property_motion"></div>

[`Vector2`](class_vector2.md) **motion** = ``Vector2(0, 0)`` <div id="class_physicsshapequeryparameters2d_property_motion"></div>

- `void` **set_motion** ( value: [`Vector2`](class_vector2.md) )
- [`Vector2`](class_vector2.md) **get_motion** ( )

The motion of the shape being queried for.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsshapequeryparameters2d_property_shape"></div>

[`Resource`](class_resource.md) **shape** <div id="class_physicsshapequeryparameters2d_property_shape"></div>

- `void` **set_shape** ( value: [`Resource`](class_resource.md) )
- [`Resource`](class_resource.md) **get_shape** ( )

The [`Shape2D`](class_shape2d.md) that will be used for collision/intersection queries. This stores the actual reference which avoids the shape to be released while being used for queries, so always prefer using this over [`shape_rid`](#class_physicsshapequeryparameters2d_property_shape_rid).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsshapequeryparameters2d_property_shape_rid"></div>

[`RID`](class_rid.md) **shape_rid** = ``RID()`` <div id="class_physicsshapequeryparameters2d_property_shape_rid"></div>

- `void` **set_shape_rid** ( value: [`RID`](class_rid.md) )
- [`RID`](class_rid.md) **get_shape_rid** ( )

The queried shape's [`RID`](class_rid.md) that will be used for collision/intersection queries. Use this over [`shape`](#class_physicsshapequeryparameters2d_property_shape) if you want to optimize for performance using the Servers API:



```gdscript

    var shape_rid = PhysicsServer2D.circle_shape_create()
    var radius = 64
    PhysicsServer2D.shape_set_data(shape_rid, radius)
    
    var params = PhysicsShapeQueryParameters2D.new()
    params.shape_rid = shape_rid
    
    # Execute physics queries here...
    
    # Release the shape when done with physics queries.
    PhysicsServer2D.free_rid(shape_rid)
```

```csharp

    RID shapeRid = PhysicsServer2D.CircleShapeCreate();
    int radius = 64;
    PhysicsServer2D.ShapeSetData(shapeRid, radius);
    
    var params = new PhysicsShapeQueryParameters2D();
    params.ShapeRid = shapeRid;
    
    // Execute physics queries here...
    
    // Release the shape when done with physics queries.
    PhysicsServer2D.FreeRid(shapeRid);
```







<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsshapequeryparameters2d_property_transform"></div>

[`Transform2D`](class_transform2d.md) **transform** = ``Transform2D(1, 0, 0, 1, 0, 0)`` <div id="class_physicsshapequeryparameters2d_property_transform"></div>

- `void` **set_transform** ( value: [`Transform2D`](class_transform2d.md) )
- [`Transform2D`](class_transform2d.md) **get_transform** ( )

The queried shape's transform matrix.

[^virtual]: 本方法通常需要用户覆盖才能生效。
[^const]: 本方法无副作用，不会修改该实例的任何成员变量。
[^vararg]: 本方法除了能接受在此处描述的参数外，还能够继续接受任意数量的参数。
[^constructor]: 本方法用于构造某个类型。
[^static]: 调用本方法无需实例，可直接使用类名进行调用。
[^operator]: 本方法描述的是使用本类型作为左操作数的有效运算符。
[^bitfield]: 这个值是由下列位标志构成位掩码的整数。
[^void]: 无返回值。
