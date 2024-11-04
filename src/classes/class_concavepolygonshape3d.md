<!-- ⚠ 请勿编辑本文件 ⚠ -->
<!-- 本文档使用脚本从 WeDot 引擎源码仓库生成。 -->
<!-- 生成脚本：https://github.com/WeDot-Engine/WeDot/tree/4.3/doc/tools/make_md.py； -->
<!-- 原文件：https://github.com/WeDot-Engine/WeDot/tree/4.3/doc/classes/ConcavePolygonShape3D.xml。 -->

<div id="_class_concavepolygonshape3d"></div>

# ConcavePolygonShape3D

**继承：** [`Shape3D`](class_shape3d.md) **<** [`Resource`](class_resource.md) **<** [`RefCounted`](class_refcounted.md) **<** [`Object`](class_object.md)

A 3D trimesh shape used for physics collision.

## 描述

A 3D trimesh shape, intended for use in physics. Usually used to provide a shape for a [`CollisionShape3D`](class_collisionshape3d.md).

Being just a collection of interconnected triangles, **ConcavePolygonShape3D** is the most freely configurable single 3D shape. It can be used to form polyhedra of any nature, or even shapes that don't enclose a volume. However, **ConcavePolygonShape3D** is *hollow* even if the interconnected triangles do enclose a volume, which often makes it unsuitable for physics or detection.

 **Note:** When used for collision, **ConcavePolygonShape3D** is intended to work with static [`CollisionShape3D`](class_collisionshape3d.md) nodes like [`StaticBody3D`](class_staticbody3d.md) and will likely not behave well for [`CharacterBody3D`](class_characterbody3d.md) s or [`RigidBody3D`](class_rigidbody3d.md) s in a mode other than Static.

 **Warning:** Physics bodies that are small have a chance to clip through this shape when moving fast. This happens because on one frame, the physics body may be on the "outside" of the shape, and on the next frame it may be "inside" it. **ConcavePolygonShape3D** is hollow, so it won't detect a collision.

 **Performance:** Due to its complexity, **ConcavePolygonShape3D** is the slowest 3D collision shape to check collisions against. Its use should generally be limited to level geometry. For convex geometry, [`ConvexPolygonShape3D`](class_convexpolygonshape3d.md) should be used. For dynamic physics bodies that need concave collision, several [`ConvexPolygonShape3D`](class_convexpolygonshape3d.md) s can be used to represent its collision by using convex decomposition; see [`ConvexPolygonShape3D`](class_convexpolygonshape3d.md)'s documentation for instructions.

## 属性

| [`bool`](class_bool.md) | [`backface_collision`](#class_concavepolygonshape3d_property_backface_collision) | ``false`` |

## 方法

| [`PackedVector3Array`](class_packedvector3array.md) | [`get_faces`](#class_concavepolygonshape3d_method_get_faces) ( ) const[^const]                                              |
| `void`                                              | [`set_faces`](#class_concavepolygonshape3d_method_set_faces) ( faces: [`PackedVector3Array`](class_packedvector3array.md) ) |

<!-- rst-class:: classref-section-separator -->

---

## 属性说明

<div id="_class_concavepolygonshape3d_property_backface_collision"></div>

[`bool`](class_bool.md) **backface_collision** = ``false`` <div id="class_concavepolygonshape3d_property_backface_collision"></div>

- `void` **set_backface_collision_enabled** ( value: [`bool`](class_bool.md) )
- [`bool`](class_bool.md) **is_backface_collision_enabled** ( )

If set to `true`, collisions occur on both sides of the concave shape faces. Otherwise they occur only along the face normals.

<!-- rst-class:: classref-section-separator -->

---

## 方法说明

<div id="_class_concavepolygonshape3d_method_get_faces"></div>

[`PackedVector3Array`](class_packedvector3array.md) **get_faces** ( ) const[^const]<div id="class_concavepolygonshape3d_method_get_faces"></div>

Returns the faces of the trimesh shape as an array of vertices. The array (of length divisible by three) is naturally divided into triples; each triple of vertices defines a triangle.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_concavepolygonshape3d_method_set_faces"></div>

`void` **set_faces** ( faces: [`PackedVector3Array`](class_packedvector3array.md) )<div id="class_concavepolygonshape3d_method_set_faces"></div>

Sets the faces of the trimesh shape from an array of vertices. The `faces` array should be composed of triples such that each triple of vertices defines a triangle.

[^virtual]: 本方法通常需要用户覆盖才能生效。
[^const]: 本方法无副作用，不会修改该实例的任何成员变量。
[^vararg]: 本方法除了能接受在此处描述的参数外，还能够继续接受任意数量的参数。
[^constructor]: 本方法用于构造某个类型。
[^static]: 调用本方法无需实例，可直接使用类名进行调用。
[^operator]: 本方法描述的是使用本类型作为左操作数的有效运算符。
[^bitfield]: 这个值是由下列位标志构成位掩码的整数。
[^void]: 无返回值。
