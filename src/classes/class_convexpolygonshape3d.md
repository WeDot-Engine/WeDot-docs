<!-- ⚠ 请勿编辑本文件 ⚠ -->
<!-- 本文档使用脚本从 WeDot 引擎源码仓库生成。 -->
<!-- 生成脚本：https://github.com/WeDot-Engine/WeDot/tree/4.3/doc/tools/make_md.py； -->
<!-- 原文件：https://github.com/WeDot-Engine/WeDot/tree/4.3/doc/classes/ConvexPolygonShape3D.xml。 -->

<div id="_class_convexpolygonshape3d"></div>

# ConvexPolygonShape3D

**继承：** [`Shape3D`](class_shape3d.md) **<** [`Resource`](class_resource.md) **<** [`RefCounted`](class_refcounted.md) **<** [`Object`](class_object.md)

A 3D convex polyhedron shape used for physics collision.

## 描述

A 3D convex polyhedron shape, intended for use in physics. Usually used to provide a shape for a [`CollisionShape3D`](class_collisionshape3d.md).

 **ConvexPolygonShape3D** is *solid*, which means it detects collisions from objects that are fully inside it, unlike [`ConcavePolygonShape3D`](class_concavepolygonshape3d.md) which is hollow. This makes it more suitable for both detection and physics.

 **Convex decomposition:** A concave polyhedron can be split up into several convex polyhedra. This allows dynamic physics bodies to have complex concave collisions (at a performance cost) and can be achieved by using several **ConvexPolygonShape3D** nodes. To generate a convex decomposition from a mesh, select the [`MeshInstance3D`](class_meshinstance3d.md) node, go to the **Mesh** menu that appears above the viewport, and choose **Create Multiple Convex Collision Siblings**. Alternatively, [`MeshInstance3D.create_multiple_convex_collisions`](#class_meshinstance3d_method_create_multiple_convex_collisions) can be called in a script to perform this decomposition at run-time.

 **Performance:** **ConvexPolygonShape3D** is faster to check collisions against compared to [`ConcavePolygonShape3D`](class_concavepolygonshape3d.md), but it is slower than primitive collision shapes such as [`SphereShape3D`](class_sphereshape3d.md) and [`BoxShape3D`](class_boxshape3d.md). Its use should generally be limited to medium-sized objects that cannot have their collision accurately represented by primitive shapes.

## 属性

| [`PackedVector3Array`](class_packedvector3array.md) | [`points`](#class_convexpolygonshape3d_property_points) | ``PackedVector3Array()`` |

<!-- rst-class:: classref-section-separator -->

---

## 属性说明

<div id="_class_convexpolygonshape3d_property_points"></div>

[`PackedVector3Array`](class_packedvector3array.md) **points** = ``PackedVector3Array()`` <div id="class_convexpolygonshape3d_property_points"></div>

- `void` **set_points** ( value: [`PackedVector3Array`](class_packedvector3array.md) )
- [`PackedVector3Array`](class_packedvector3array.md) **get_points** ( )

The list of 3D points forming the convex polygon shape.

**Note:** The returned array is *copied* and any changes to it will not update the original property value. See [`PackedVector3Array`](class_packedvector3array.md) for more details.

[^virtual]: 本方法通常需要用户覆盖才能生效。
[^const]: 本方法无副作用，不会修改该实例的任何成员变量。
[^vararg]: 本方法除了能接受在此处描述的参数外，还能够继续接受任意数量的参数。
[^constructor]: 本方法用于构造某个类型。
[^static]: 调用本方法无需实例，可直接使用类名进行调用。
[^operator]: 本方法描述的是使用本类型作为左操作数的有效运算符。
[^bitfield]: 这个值是由下列位标志构成位掩码的整数。
[^void]: 无返回值。
