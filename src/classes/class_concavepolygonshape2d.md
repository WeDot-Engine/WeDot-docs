<!-- ⚠ 请勿编辑本文件 ⚠ -->
<!-- 本文档使用脚本从 WeDot 引擎源码仓库生成。 -->
<!-- 生成脚本：https://github.com/WeDot-Engine/WeDot/tree/master/doc/tools/make_md.py； -->
<!-- 原文件：https://github.com/WeDot-Engine/WeDot/tree/master/doc/classes/ConcavePolygonShape2D.xml。 -->

<div id="_class_concavepolygonshape2d"></div>

# ConcavePolygonShape2D

**继承：** [`Shape2D`](class_shape2d.md) **<** [`Resource`](class_resource.md) **<** [`RefCounted`](class_refcounted.md) **<** [`Object`](class_object.md)

A 2D polyline shape used for physics collision.

## 描述

A 2D polyline shape, intended for use in physics. Used internally in [`CollisionPolygon2D`](class_collisionpolygon2d.md) when it's in [`CollisionPolygon2D.BUILD_SEGMENTS`](class_collisionpolygon2d.md#class_collisionpolygon2d_constant_build_segments) mode.

Being just a collection of interconnected line segments, **ConcavePolygonShape2D** is the most freely configurable single 2D shape. It can be used to form polygons of any nature, or even shapes that don't enclose an area. However, **ConcavePolygonShape2D** is *hollow* even if the interconnected line segments do enclose an area, which often makes it unsuitable for physics or detection.

 **Note:** When used for collision, **ConcavePolygonShape2D** is intended to work with static [`CollisionShape2D`](class_collisionshape2d.md) nodes like [`StaticBody2D`](class_staticbody2d.md) and will likely not behave well for [`CharacterBody2D`](class_characterbody2d.md) s or [`RigidBody2D`](class_rigidbody2d.md) s in a mode other than Static.

 **Warning:** Physics bodies that are small have a chance to clip through this shape when moving fast. This happens because on one frame, the physics body may be on the "outside" of the shape, and on the next frame it may be "inside" it. **ConcavePolygonShape2D** is hollow, so it won't detect a collision.

 **Performance:** Due to its complexity, **ConcavePolygonShape2D** is the slowest 2D collision shape to check collisions against. Its use should generally be limited to level geometry. If the polyline is closed, [`CollisionPolygon2D`](class_collisionpolygon2d.md)'s [`CollisionPolygon2D.BUILD_SOLIDS`](class_collisionpolygon2d.md#class_collisionpolygon2d_constant_build_solids) mode can be used, which decomposes the polygon into convex ones; see [`ConvexPolygonShape2D`](class_convexpolygonshape2d.md)'s documentation for instructions.

## 属性

|||
|:-:|:--|
| [`PackedVector2Array`](class_packedvector2array.md) | [`segments`](class_concavepolygonshape2d.md#class_concavepolygonshape2d_property_segments) | ``PackedVector2Array()`` |

<!-- rst-class:: classref-section-separator -->

---

## 属性说明

<div id="_class_concavepolygonshape2d_property_segments"></div>

[`PackedVector2Array`](class_packedvector2array.md) **segments** = ``PackedVector2Array()`` <div id="class_concavepolygonshape2d_property_segments"></div>

- `void` **set_segments** ( value: [`PackedVector2Array`](class_packedvector2array.md) )
- [`PackedVector2Array`](class_packedvector2array.md) **get_segments** ( )

The array of points that make up the **ConcavePolygonShape2D**'s line segments. The array (of length divisible by two) is naturally divided into pairs (one pair for each segment); each pair consists of the starting point of a segment and the endpoint of a segment.

**Note:** The returned array is *copied* and any changes to it will not update the original property value. See [`PackedVector2Array`](class_packedvector2array.md) for more details.

[^virtual]: 本方法通常需要用户覆盖才能生效。
[^const]: 本方法无副作用，不会修改该实例的任何成员变量。
[^vararg]: 本方法除了能接受在此处描述的参数外，还能够继续接受任意数量的参数。
[^constructor]: 本方法用于构造某个类型。
[^static]: 调用本方法无需实例，可直接使用类名进行调用。
[^operator]: 本方法描述的是使用本类型作为左操作数的有效运算符。
[^bitfield]: 这个值是由下列位标志构成位掩码的整数。
[^void]: 无返回值。
