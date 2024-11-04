<!-- ⚠ 请勿编辑本文件 ⚠ -->
<!-- 本文档使用脚本从 WeDot 引擎源码仓库生成。 -->
<!-- 生成脚本：https://github.com/WeDot-Engine/WeDot/tree/4.3/doc/tools/make_md.py； -->
<!-- 原文件：https://github.com/WeDot-Engine/WeDot/tree/4.3/doc/classes/PhysicsDirectSpaceState2D.xml。 -->

<div id="_class_physicsdirectspacestate2d"></div>

# PhysicsDirectSpaceState2D

**继承：** [`Object`](class_object.md)

**派生：** [`PhysicsDirectSpaceState2DExtension`](class_physicsdirectspacestate2dextension.md)

Provides direct access to a physics space in the [`PhysicsServer2D`](class_physicsserver2d.md).

## 描述

Provides direct access to a physics space in the [`PhysicsServer2D`](class_physicsserver2d.md). It's used mainly to do queries against objects and areas residing in a given space.

## 方法

| [`PackedFloat32Array`](class_packedfloat32array.md)         | [`cast_motion`](#class_physicsdirectspacestate2d_method_cast_motion) ( parameters: [`PhysicsShapeQueryParameters2D`](class_physicsshapequeryparameters2d.md) )                                                  |
| [Array](class_array.md) [`Vector2`](class_vector2.md)       | [`collide_shape`](#class_physicsdirectspacestate2d_method_collide_shape) ( parameters: [`PhysicsShapeQueryParameters2D`](class_physicsshapequeryparameters2d.md), max_results: [`int`](class_int.md) = 32 )     |
| [`Dictionary`](class_dictionary.md)                         | [`get_rest_info`](#class_physicsdirectspacestate2d_method_get_rest_info) ( parameters: [`PhysicsShapeQueryParameters2D`](class_physicsshapequeryparameters2d.md) )                                              |
| [Array](class_array.md) [`Dictionary`](class_dictionary.md) | [`intersect_point`](#class_physicsdirectspacestate2d_method_intersect_point) ( parameters: [`PhysicsPointQueryParameters2D`](class_physicspointqueryparameters2d.md), max_results: [`int`](class_int.md) = 32 ) |
| [`Dictionary`](class_dictionary.md)                         | [`intersect_ray`](#class_physicsdirectspacestate2d_method_intersect_ray) ( parameters: [`PhysicsRayQueryParameters2D`](class_physicsrayqueryparameters2d.md) )                                                  |
| [Array](class_array.md) [`Dictionary`](class_dictionary.md) | [`intersect_shape`](#class_physicsdirectspacestate2d_method_intersect_shape) ( parameters: [`PhysicsShapeQueryParameters2D`](class_physicsshapequeryparameters2d.md), max_results: [`int`](class_int.md) = 32 ) |

<!-- rst-class:: classref-section-separator -->

---

## 方法说明

<div id="_class_physicsdirectspacestate2d_method_cast_motion"></div>

[`PackedFloat32Array`](class_packedfloat32array.md) **cast_motion** ( parameters: [`PhysicsShapeQueryParameters2D`](class_physicsshapequeryparameters2d.md) )<div id="class_physicsdirectspacestate2d_method_cast_motion"></div>

Checks how far a [`Shape2D`](class_shape2d.md) can move without colliding. All the parameters for the query, including the shape and the motion, are supplied through a [`PhysicsShapeQueryParameters2D`](class_physicsshapequeryparameters2d.md) object.

Returns an array with the safe and unsafe proportions (between 0 and 1) of the motion. The safe proportion is the maximum fraction of the motion that can be made without a collision. The unsafe proportion is the minimum fraction of the distance that must be moved for a collision. If no collision is detected a result of `[1.0, 1.0]` will be returned.

 **Note:** Any [`Shape2D`](class_shape2d.md) s that the shape is already colliding with e.g. inside of, will be ignored. Use [`collide_shape`](#class_physicsdirectspacestate2d_method_collide_shape) to determine the [`Shape2D`](class_shape2d.md) s that the shape is already colliding with.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsdirectspacestate2d_method_collide_shape"></div>

[Array](class_array.md) [`Vector2`](class_vector2.md) **collide_shape** ( parameters: [`PhysicsShapeQueryParameters2D`](class_physicsshapequeryparameters2d.md), max_results: [`int`](class_int.md) = 32 )<div id="class_physicsdirectspacestate2d_method_collide_shape"></div>

Checks the intersections of a shape, given through a [`PhysicsShapeQueryParameters2D`](class_physicsshapequeryparameters2d.md) object, against the space. The resulting array contains a list of points where the shape intersects another. Like with [`intersect_shape`](#class_physicsdirectspacestate2d_method_intersect_shape), the number of returned results can be limited to save processing time.

Returned points are a list of pairs of contact points. For each pair the first one is in the shape passed in [`PhysicsShapeQueryParameters2D`](class_physicsshapequeryparameters2d.md) object, second one is in the collided shape from the physics space.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsdirectspacestate2d_method_get_rest_info"></div>

[`Dictionary`](class_dictionary.md) **get_rest_info** ( parameters: [`PhysicsShapeQueryParameters2D`](class_physicsshapequeryparameters2d.md) )<div id="class_physicsdirectspacestate2d_method_get_rest_info"></div>

Checks the intersections of a shape, given through a [`PhysicsShapeQueryParameters2D`](class_physicsshapequeryparameters2d.md) object, against the space. If it collides with more than one shape, the nearest one is selected. If the shape did not intersect anything, then an empty dictionary is returned instead.

 **Note:** This method does not take into account the `motion` property of the object. The returned object is a dictionary containing the following fields:

 `collider_id`: The colliding object's ID.

 `linear_velocity`: The colliding object's velocity [`Vector2`](class_vector2.md). If the object is an [`Area2D`](class_area2d.md), the result is `(0, 0)`.

 `normal`: The object's surface normal at the intersection point.

 `point`: The intersection point.

 `rid`: The intersecting object's [`RID`](class_rid.md).

 `shape`: The shape index of the colliding shape.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsdirectspacestate2d_method_intersect_point"></div>

[Array](class_array.md) [`Dictionary`](class_dictionary.md) **intersect_point** ( parameters: [`PhysicsPointQueryParameters2D`](class_physicspointqueryparameters2d.md), max_results: [`int`](class_int.md) = 32 )<div id="class_physicsdirectspacestate2d_method_intersect_point"></div>

Checks whether a point is inside any solid shape. Position and other parameters are defined through [`PhysicsPointQueryParameters2D`](class_physicspointqueryparameters2d.md). The shapes the point is inside of are returned in an array containing dictionaries with the following fields:

 `collider`: The colliding object.

 `collider_id`: The colliding object's ID.

 `rid`: The intersecting object's [`RID`](class_rid.md).

 `shape`: The shape index of the colliding shape.

The number of intersections can be limited with the `max_results` parameter, to reduce the processing time.

 **Note:** [`ConcavePolygonShape2D`](class_concavepolygonshape2d.md) s and [`CollisionPolygon2D`](class_collisionpolygon2d.md) s in `Segments` build mode are not solid shapes. Therefore, they will not be detected.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsdirectspacestate2d_method_intersect_ray"></div>

[`Dictionary`](class_dictionary.md) **intersect_ray** ( parameters: [`PhysicsRayQueryParameters2D`](class_physicsrayqueryparameters2d.md) )<div id="class_physicsdirectspacestate2d_method_intersect_ray"></div>

Intersects a ray in a given space. Ray position and other parameters are defined through [`PhysicsRayQueryParameters2D`](class_physicsrayqueryparameters2d.md). The returned object is a dictionary with the following fields:

 `collider`: The colliding object.

 `collider_id`: The colliding object's ID.

 `normal`: The object's surface normal at the intersection point, or `Vector2(0, 0)` if the ray starts inside the shape and [`PhysicsRayQueryParameters2D.hit_from_inside`](#class_physicsrayqueryparameters2d_property_hit_from_inside) is `true`.

 `position`: The intersection point.

 `rid`: The intersecting object's [`RID`](class_rid.md).

 `shape`: The shape index of the colliding shape.

If the ray did not intersect anything, then an empty dictionary is returned instead.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsdirectspacestate2d_method_intersect_shape"></div>

[Array](class_array.md) [`Dictionary`](class_dictionary.md) **intersect_shape** ( parameters: [`PhysicsShapeQueryParameters2D`](class_physicsshapequeryparameters2d.md), max_results: [`int`](class_int.md) = 32 )<div id="class_physicsdirectspacestate2d_method_intersect_shape"></div>

Checks the intersections of a shape, given through a [`PhysicsShapeQueryParameters2D`](class_physicsshapequeryparameters2d.md) object, against the space. The intersected shapes are returned in an array containing dictionaries with the following fields:

 `collider`: The colliding object.

 `collider_id`: The colliding object's ID.

 `rid`: The intersecting object's [`RID`](class_rid.md).

 `shape`: The shape index of the colliding shape.

The number of intersections can be limited with the `max_results` parameter, to reduce the processing time.

[^virtual]: 本方法通常需要用户覆盖才能生效。
[^const]: 本方法无副作用，不会修改该实例的任何成员变量。
[^vararg]: 本方法除了能接受在此处描述的参数外，还能够继续接受任意数量的参数。
[^constructor]: 本方法用于构造某个类型。
[^static]: 调用本方法无需实例，可直接使用类名进行调用。
[^operator]: 本方法描述的是使用本类型作为左操作数的有效运算符。
[^bitfield]: 这个值是由下列位标志构成位掩码的整数。
[^void]: 无返回值。
