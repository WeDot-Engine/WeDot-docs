<!-- ⚠ 请勿编辑本文件 ⚠ -->
<!-- 本文档使用脚本从 WeDot 引擎源码仓库生成。 -->
<!-- 生成脚本：https://github.com/WeDot-Engine/WeDot/tree/master/doc/tools/make_md.py； -->
<!-- 原文件：https://github.com/WeDot-Engine/WeDot/tree/master/modules/csg/doc_classes/CSGCylinder3D.xml。 -->

<div id="_class_csgcylinder3d"></div>

# CSGCylinder3D

**继承：** [`CSGPrimitive3D`](class_csgprimitive3d.md) **<** [`CSGShape3D`](class_csgshape3d.md) **<** [`GeometryInstance3D`](class_geometryinstance3d.md) **<** [`VisualInstance3D`](class_visualinstance3d.md) **<** [`Node3D`](class_node3d.md) **<** [`Node`](class_node.md) **<** [`Object`](class_object.md)

A CSG Cylinder shape.

## 描述

This node allows you to create a cylinder (or cone) for use with the CSG system.

 **Note:** CSG nodes are intended to be used for level prototyping. Creating CSG nodes has a significant CPU cost compared to creating a [`MeshInstance3D`](class_meshinstance3d.md) with a [`PrimitiveMesh`](class_primitivemesh.md). Moving a CSG node within another CSG node also has a significant CPU cost, so it should be avoided during gameplay.

## 属性

|||
|:-:|:--|
| [`bool`](class_bool.md)         | [`cone`](class_csgcylinder3d.md#class_csgcylinder3d_property_cone)                 | ``false`` |
| [`float`](class_float.md)       | [`height`](class_csgcylinder3d.md#class_csgcylinder3d_property_height)             | ``2.0``   |
| [`Material`](class_material.md) | [`material`](class_csgcylinder3d.md#class_csgcylinder3d_property_material)         |           |
| [`float`](class_float.md)       | [`radius`](class_csgcylinder3d.md#class_csgcylinder3d_property_radius)             | ``0.5``   |
| [`int`](class_int.md)           | [`sides`](class_csgcylinder3d.md#class_csgcylinder3d_property_sides)               | ``8``     |
| [`bool`](class_bool.md)         | [`smooth_faces`](class_csgcylinder3d.md#class_csgcylinder3d_property_smooth_faces) | ``true``  |

<!-- rst-class:: classref-section-separator -->

---

## 属性说明

<div id="_class_csgcylinder3d_property_cone"></div>

[`bool`](class_bool.md) **cone** = ``false`` <div id="class_csgcylinder3d_property_cone"></div>

- `void` **set_cone** ( value: [`bool`](class_bool.md) )
- [`bool`](class_bool.md) **is_cone** ( )

If `true` a cone is created, the [`radius`](class_csgcylinder3d.md#class_csgcylinder3d_property_radius) will only apply to one side.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_csgcylinder3d_property_height"></div>

[`float`](class_float.md) **height** = ``2.0`` <div id="class_csgcylinder3d_property_height"></div>

- `void` **set_height** ( value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_height** ( )

The height of the cylinder.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_csgcylinder3d_property_material"></div>

[`Material`](class_material.md) **material** <div id="class_csgcylinder3d_property_material"></div>

- `void` **set_material** ( value: [`Material`](class_material.md) )
- [`Material`](class_material.md) **get_material** ( )

The material used to render the cylinder.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_csgcylinder3d_property_radius"></div>

[`float`](class_float.md) **radius** = ``0.5`` <div id="class_csgcylinder3d_property_radius"></div>

- `void` **set_radius** ( value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_radius** ( )

The radius of the cylinder.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_csgcylinder3d_property_sides"></div>

[`int`](class_int.md) **sides** = ``8`` <div id="class_csgcylinder3d_property_sides"></div>

- `void` **set_sides** ( value: [`int`](class_int.md) )
- [`int`](class_int.md) **get_sides** ( )

The number of sides of the cylinder, the higher this number the more detail there will be in the cylinder.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_csgcylinder3d_property_smooth_faces"></div>

[`bool`](class_bool.md) **smooth_faces** = ``true`` <div id="class_csgcylinder3d_property_smooth_faces"></div>

- `void` **set_smooth_faces** ( value: [`bool`](class_bool.md) )
- [`bool`](class_bool.md) **get_smooth_faces** ( )

If `true` the normals of the cylinder are set to give a smooth effect making the cylinder seem rounded. If `false` the cylinder will have a flat shaded look.

[^virtual]: 本方法通常需要用户覆盖才能生效。
[^const]: 本方法无副作用，不会修改该实例的任何成员变量。
[^vararg]: 本方法除了能接受在此处描述的参数外，还能够继续接受任意数量的参数。
[^constructor]: 本方法用于构造某个类型。
[^static]: 调用本方法无需实例，可直接使用类名进行调用。
[^operator]: 本方法描述的是使用本类型作为左操作数的有效运算符。
[^bitfield]: 这个值是由下列位标志构成位掩码的整数。
[^void]: 无返回值。
