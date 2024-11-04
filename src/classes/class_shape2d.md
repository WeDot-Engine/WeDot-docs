<!-- ⚠ 请勿编辑本文件 ⚠ -->
<!-- 本文档使用脚本从 WeDot 引擎源码仓库生成。 -->
<!-- 生成脚本：https://github.com/WeDot-Engine/WeDot/tree/4.3/doc/tools/make_md.py； -->
<!-- 原文件：https://github.com/WeDot-Engine/WeDot/tree/4.3/doc/classes/Shape2D.xml。 -->

<div id="_class_shape2d"></div>

# Shape2D

**继承：** [`Resource`](class_resource.md) **<** [`RefCounted`](class_refcounted.md) **<** [`Object`](class_object.md)

**派生：** [`CapsuleShape2D`](class_capsuleshape2d.md), [`CircleShape2D`](class_circleshape2d.md), [`ConcavePolygonShape2D`](class_concavepolygonshape2d.md), [`ConvexPolygonShape2D`](class_convexpolygonshape2d.md), [`RectangleShape2D`](class_rectangleshape2d.md), [`SegmentShape2D`](class_segmentshape2d.md), [`SeparationRayShape2D`](class_separationrayshape2d.md), [`WorldBoundaryShape2D`](class_worldboundaryshape2d.md)

Abstract base class for 2D shapes used for physics collision.

## 描述

Abstract base class for all 2D shapes, intended for use in physics.

 **Performance:** Primitive shapes, especially [`CircleShape2D`](class_circleshape2d.md), are fast to check collisions against. [`ConvexPolygonShape2D`](class_convexpolygonshape2d.md) is slower, and [`ConcavePolygonShape2D`](class_concavepolygonshape2d.md) is the slowest.

## 属性

| [`float`](class_float.md) | [`custom_solver_bias`](#class_shape2d_property_custom_solver_bias) | ``0.0`` |

## 方法

| [`bool`](class_bool.md)                             | [`collide`](#class_shape2d_method_collide) ( local_xform: [`Transform2D`](class_transform2d.md), with_shape: [`Shape2D`](class_shape2d.md), shape_xform: [`Transform2D`](class_transform2d.md) )                                                                                                                                                     |
| [`PackedVector2Array`](class_packedvector2array.md) | [`collide_and_get_contacts`](#class_shape2d_method_collide_and_get_contacts) ( local_xform: [`Transform2D`](class_transform2d.md), with_shape: [`Shape2D`](class_shape2d.md), shape_xform: [`Transform2D`](class_transform2d.md) )                                                                                                                   |
| [`bool`](class_bool.md)                             | [`collide_with_motion`](#class_shape2d_method_collide_with_motion) ( local_xform: [`Transform2D`](class_transform2d.md), local_motion: [`Vector2`](class_vector2.md), with_shape: [`Shape2D`](class_shape2d.md), shape_xform: [`Transform2D`](class_transform2d.md), shape_motion: [`Vector2`](class_vector2.md) )                                   |
| [`PackedVector2Array`](class_packedvector2array.md) | [`collide_with_motion_and_get_contacts`](#class_shape2d_method_collide_with_motion_and_get_contacts) ( local_xform: [`Transform2D`](class_transform2d.md), local_motion: [`Vector2`](class_vector2.md), with_shape: [`Shape2D`](class_shape2d.md), shape_xform: [`Transform2D`](class_transform2d.md), shape_motion: [`Vector2`](class_vector2.md) ) |
| `void`                                              | [`draw`](#class_shape2d_method_draw) ( canvas_item: [`RID`](class_rid.md), color: [`Color`](class_color.md) )                                                                                                                                                                                                                                        |
| [`Rect2`](class_rect2.md)                           | [`get_rect`](#class_shape2d_method_get_rect) ( ) const[^const]                                                                                                                                                                                                                                                                                       |

<!-- rst-class:: classref-section-separator -->

---

## 属性说明

<div id="_class_shape2d_property_custom_solver_bias"></div>

[`float`](class_float.md) **custom_solver_bias** = ``0.0`` <div id="class_shape2d_property_custom_solver_bias"></div>

- `void` **set_custom_solver_bias** ( value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_custom_solver_bias** ( )

The shape's custom solver bias. Defines how much bodies react to enforce contact separation when this shape is involved.

When set to `0`, the default value from [`ProjectSettings.physics/2d/solver/default_contact_bias`](#class_projectsettings_property_physics/2d/solver/default_contact_bias) is used.

<!-- rst-class:: classref-section-separator -->

---

## 方法说明

<div id="_class_shape2d_method_collide"></div>

[`bool`](class_bool.md) **collide** ( local_xform: [`Transform2D`](class_transform2d.md), with_shape: [`Shape2D`](class_shape2d.md), shape_xform: [`Transform2D`](class_transform2d.md) )<div id="class_shape2d_method_collide"></div>

Returns `true` if this shape is colliding with another.

This method needs the transformation matrix for this shape (`local_xform`), the shape to check collisions with (`with_shape`), and the transformation matrix of that shape (`shape_xform`).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_shape2d_method_collide_and_get_contacts"></div>

[`PackedVector2Array`](class_packedvector2array.md) **collide_and_get_contacts** ( local_xform: [`Transform2D`](class_transform2d.md), with_shape: [`Shape2D`](class_shape2d.md), shape_xform: [`Transform2D`](class_transform2d.md) )<div id="class_shape2d_method_collide_and_get_contacts"></div>

Returns a list of contact point pairs where this shape touches another.

If there are no collisions, the returned list is empty. Otherwise, the returned list contains contact points arranged in pairs, with entries alternating between points on the boundary of this shape and points on the boundary of `with_shape`.

A collision pair A, B can be used to calculate the collision normal with `(B - A).normalized()`, and the collision depth with `(B - A).length()`. This information is typically used to separate shapes, particularly in collision solvers.

This method needs the transformation matrix for this shape (`local_xform`), the shape to check collisions with (`with_shape`), and the transformation matrix of that shape (`shape_xform`).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_shape2d_method_collide_with_motion"></div>

[`bool`](class_bool.md) **collide_with_motion** ( local_xform: [`Transform2D`](class_transform2d.md), local_motion: [`Vector2`](class_vector2.md), with_shape: [`Shape2D`](class_shape2d.md), shape_xform: [`Transform2D`](class_transform2d.md), shape_motion: [`Vector2`](class_vector2.md) )<div id="class_shape2d_method_collide_with_motion"></div>

Returns whether this shape would collide with another, if a given movement was applied.

This method needs the transformation matrix for this shape (`local_xform`), the movement to test on this shape (`local_motion`), the shape to check collisions with (`with_shape`), the transformation matrix of that shape (`shape_xform`), and the movement to test onto the other object (`shape_motion`).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_shape2d_method_collide_with_motion_and_get_contacts"></div>

[`PackedVector2Array`](class_packedvector2array.md) **collide_with_motion_and_get_contacts** ( local_xform: [`Transform2D`](class_transform2d.md), local_motion: [`Vector2`](class_vector2.md), with_shape: [`Shape2D`](class_shape2d.md), shape_xform: [`Transform2D`](class_transform2d.md), shape_motion: [`Vector2`](class_vector2.md) )<div id="class_shape2d_method_collide_with_motion_and_get_contacts"></div>

Returns a list of contact point pairs where this shape would touch another, if a given movement was applied.

If there would be no collisions, the returned list is empty. Otherwise, the returned list contains contact points arranged in pairs, with entries alternating between points on the boundary of this shape and points on the boundary of `with_shape`.

A collision pair A, B can be used to calculate the collision normal with `(B - A).normalized()`, and the collision depth with `(B - A).length()`. This information is typically used to separate shapes, particularly in collision solvers.

This method needs the transformation matrix for this shape (`local_xform`), the movement to test on this shape (`local_motion`), the shape to check collisions with (`with_shape`), the transformation matrix of that shape (`shape_xform`), and the movement to test onto the other object (`shape_motion`).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_shape2d_method_draw"></div>

`void` **draw** ( canvas_item: [`RID`](class_rid.md), color: [`Color`](class_color.md) )<div id="class_shape2d_method_draw"></div>

Draws a solid shape onto a [`CanvasItem`](class_canvasitem.md) with the [`RenderingServer`](class_renderingserver.md) API filled with the specified `color`. The exact drawing method is specific for each shape and cannot be configured.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_shape2d_method_get_rect"></div>

[`Rect2`](class_rect2.md) **get_rect** ( ) const[^const]<div id="class_shape2d_method_get_rect"></div>

Returns a [`Rect2`](class_rect2.md) representing the shapes boundary.

[^virtual]: 本方法通常需要用户覆盖才能生效。
[^const]: 本方法无副作用，不会修改该实例的任何成员变量。
[^vararg]: 本方法除了能接受在此处描述的参数外，还能够继续接受任意数量的参数。
[^constructor]: 本方法用于构造某个类型。
[^static]: 调用本方法无需实例，可直接使用类名进行调用。
[^operator]: 本方法描述的是使用本类型作为左操作数的有效运算符。
[^bitfield]: 这个值是由下列位标志构成位掩码的整数。
[^void]: 无返回值。
