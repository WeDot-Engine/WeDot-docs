<!-- ⚠ 请勿编辑本文件 ⚠ -->
<!-- 本文档使用脚本从 WeDot 引擎源码仓库生成。 -->
<!-- 生成脚本：https://github.com/WeDot-Engine/WeDot/tree/master/doc/tools/make_md.py； -->
<!-- 原文件：https://github.com/WeDot-Engine/WeDot/tree/master/doc/classes/ConvexPolygonShape2D.xml。 -->

<div id="_class_convexpolygonshape2d"></div>

# ConvexPolygonShape2D

**继承：** [`Shape2D`](class_shape2d.md) **<** [`Resource`](class_resource.md) **<** [`RefCounted`](class_refcounted.md) **<** [`Object`](class_object.md)

A 2D convex polygon shape used for physics collision.

## 描述

A 2D convex polygon shape, intended for use in physics. Used internally in [`CollisionPolygon2D`](class_collisionpolygon2d.md) when it's in [`CollisionPolygon2D.BUILD_SOLIDS`](class_collisionpolygon2d.md#class_collisionpolygon2d_constant_build_solids) mode.

 **ConvexPolygonShape2D** is *solid*, which means it detects collisions from objects that are fully inside it, unlike [`ConcavePolygonShape2D`](class_concavepolygonshape2d.md) which is hollow. This makes it more suitable for both detection and physics.

 **Convex decomposition:** A concave polygon can be split up into several convex polygons. This allows dynamic physics bodies to have complex concave collisions (at a performance cost) and can be achieved by using several **ConvexPolygonShape2D** nodes or by using the [`CollisionPolygon2D`](class_collisionpolygon2d.md) node in [`CollisionPolygon2D.BUILD_SOLIDS`](class_collisionpolygon2d.md#class_collisionpolygon2d_constant_build_solids) mode. To generate a collision polygon from a sprite, select the [`Sprite2D`](class_sprite2d.md) node, go to the **Sprite2D** menu that appears above the viewport, and choose **Create Polygon2D Sibling**.

 **Performance:** **ConvexPolygonShape2D** is faster to check collisions against compared to [`ConcavePolygonShape2D`](class_concavepolygonshape2d.md), but it is slower than primitive collision shapes such as [`CircleShape2D`](class_circleshape2d.md) and [`RectangleShape2D`](class_rectangleshape2d.md). Its use should generally be limited to medium-sized objects that cannot have their collision accurately represented by primitive shapes.

## 属性

|||
|:-:|:--|
| [`PackedVector2Array`](class_packedvector2array.md) | [`points`](class_convexpolygonshape2d.md#class_convexpolygonshape2d_property_points) | ``PackedVector2Array()`` |

## 方法

|||
|:-:|:--|
| `void` | [`set_point_cloud`](class_convexpolygonshape2d.md#class_convexpolygonshape2d_method_set_point_cloud) ( point_cloud: [`PackedVector2Array`](class_packedvector2array.md) ) |

<!-- rst-class:: classref-section-separator -->

---

## 属性说明

<div id="_class_convexpolygonshape2d_property_points"></div>

[`PackedVector2Array`](class_packedvector2array.md) **points** = ``PackedVector2Array()`` <div id="class_convexpolygonshape2d_property_points"></div>

- `void` **set_points** ( value: [`PackedVector2Array`](class_packedvector2array.md) )
- [`PackedVector2Array`](class_packedvector2array.md) **get_points** ( )

The polygon's list of vertices that form a convex hull. Can be in either clockwise or counterclockwise order.

 **Warning:** Only set this property to a list of points that actually form a convex hull. Use [`set_point_cloud`](class_convexpolygonshape2d.md#class_convexpolygonshape2d_method_set_point_cloud) to generate the convex hull of an arbitrary set of points.

**Note:** The returned array is *copied* and any changes to it will not update the original property value. See [`PackedVector2Array`](class_packedvector2array.md) for more details.

<!-- rst-class:: classref-section-separator -->

---

## 方法说明

<div id="_class_convexpolygonshape2d_method_set_point_cloud"></div>

`void` **set_point_cloud** ( point_cloud: [`PackedVector2Array`](class_packedvector2array.md) )<div id="class_convexpolygonshape2d_method_set_point_cloud"></div>

Based on the set of points provided, this assigns the [`points`](class_convexpolygonshape2d.md#class_convexpolygonshape2d_property_points) property using the convex hull algorithm, removing all unneeded points. See [`Geometry2D.convex_hull`](class_geometry2d.md#class_geometry2d_method_convex_hull) for details.

[^virtual]: 本方法通常需要用户覆盖才能生效。
[^const]: 本方法无副作用，不会修改该实例的任何成员变量。
[^vararg]: 本方法除了能接受在此处描述的参数外，还能够继续接受任意数量的参数。
[^constructor]: 本方法用于构造某个类型。
[^static]: 调用本方法无需实例，可直接使用类名进行调用。
[^operator]: 本方法描述的是使用本类型作为左操作数的有效运算符。
[^bitfield]: 这个值是由下列位标志构成位掩码的整数。
[^void]: 无返回值。
