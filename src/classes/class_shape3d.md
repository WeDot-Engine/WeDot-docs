<!-- ⚠ 请勿编辑本文件 ⚠ -->
<!-- 本文档使用脚本从 WeDot 引擎源码仓库生成。 -->
<!-- 生成脚本：https://github.com/WeDot-Engine/WeDot/tree/master/doc/tools/make_md.py； -->
<!-- 原文件：https://github.com/WeDot-Engine/WeDot/tree/master/doc/classes/Shape3D.xml。 -->

<div id="_class_shape3d"></div>

# Shape3D

**继承：** [`Resource`](class_resource.md) **<** [`RefCounted`](class_refcounted.md) **<** [`Object`](class_object.md)

**派生：** [`BoxShape3D`](class_boxshape3d.md), [`CapsuleShape3D`](class_capsuleshape3d.md), [`ConcavePolygonShape3D`](class_concavepolygonshape3d.md), [`ConvexPolygonShape3D`](class_convexpolygonshape3d.md), [`CylinderShape3D`](class_cylindershape3d.md), [`HeightMapShape3D`](class_heightmapshape3d.md), [`SeparationRayShape3D`](class_separationrayshape3d.md), [`SphereShape3D`](class_sphereshape3d.md), [`WorldBoundaryShape3D`](class_worldboundaryshape3d.md)

Abstract base class for 3D shapes used for physics collision.

## 描述

Abstract base class for all 3D shapes, intended for use in physics.

 **Performance:** Primitive shapes, especially [`SphereShape3D`](class_sphereshape3d.md), are fast to check collisions against. [`ConvexPolygonShape3D`](class_convexpolygonshape3d.md) and [`HeightMapShape3D`](class_heightmapshape3d.md) are slower, and [`ConcavePolygonShape3D`](class_concavepolygonshape3d.md) is the slowest.

## 属性

|||
|:-:|:--|
| [`float`](class_float.md) | [`custom_solver_bias`](class_shape3d.md#class_shape3d_property_custom_solver_bias) | ``0.0``  |
| [`float`](class_float.md) | [`margin`](class_shape3d.md#class_shape3d_property_margin)                         | ``0.04`` |

## 方法

|||
|:-:|:--|
| [`ArrayMesh`](class_arraymesh.md) | [`get_debug_mesh`](class_shape3d.md#class_shape3d_method_get_debug_mesh) ( ) |

<!-- rst-class:: classref-section-separator -->

---

## 属性说明

<div id="_class_shape3d_property_custom_solver_bias"></div>

[`float`](class_float.md) **custom_solver_bias** = ``0.0`` <div id="class_shape3d_property_custom_solver_bias"></div>

- `void` **set_custom_solver_bias** ( value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_custom_solver_bias** ( )

The shape's custom solver bias. Defines how much bodies react to enforce contact separation when this shape is involved.

When set to `0`, the default value from [`ProjectSettings.physics/3d/solver/default_contact_bias`](class_projectsettings.md#class_projectsettings_property_physics/3d/solver/default_contact_bias) is used.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_shape3d_property_margin"></div>

[`float`](class_float.md) **margin** = ``0.04`` <div id="class_shape3d_property_margin"></div>

- `void` **set_margin** ( value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_margin** ( )

The collision margin for the shape. This is not used in Godot Physics.

Collision margins allow collision detection to be more efficient by adding an extra shell around shapes. Collision algorithms are more expensive when objects overlap by more than their margin, so a higher value for margins is better for performance, at the cost of accuracy around edges as it makes them less sharp.

<!-- rst-class:: classref-section-separator -->

---

## 方法说明

<div id="_class_shape3d_method_get_debug_mesh"></div>

[`ArrayMesh`](class_arraymesh.md) **get_debug_mesh** ( )<div id="class_shape3d_method_get_debug_mesh"></div>

Returns the [`ArrayMesh`](class_arraymesh.md) used to draw the debug collision for this **Shape3D**.

[^virtual]: 本方法通常需要用户覆盖才能生效。
[^const]: 本方法无副作用，不会修改该实例的任何成员变量。
[^vararg]: 本方法除了能接受在此处描述的参数外，还能够继续接受任意数量的参数。
[^constructor]: 本方法用于构造某个类型。
[^static]: 调用本方法无需实例，可直接使用类名进行调用。
[^operator]: 本方法描述的是使用本类型作为左操作数的有效运算符。
[^bitfield]: 这个值是由下列位标志构成位掩码的整数。
[^void]: 无返回值。
