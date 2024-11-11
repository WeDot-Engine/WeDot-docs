<!-- ⚠ 请勿编辑本文件 ⚠ -->
<!-- 本文档使用脚本从 WeDot 引擎源码仓库生成。 -->
<!-- 生成脚本：https://github.com/WeDot-Engine/WeDot/tree/master/doc/tools/make_md.py； -->
<!-- 原文件：https://github.com/WeDot-Engine/WeDot/tree/master/doc/classes/PolygonOccluder3D.xml。 -->

<div id="_class_polygonoccluder3d"></div>

# PolygonOccluder3D

**继承：** [`Occluder3D`](class_occluder3d.md) **<** [`Resource`](class_resource.md) **<** [`RefCounted`](class_refcounted.md) **<** [`Object`](class_object.md)

Flat 2D polygon shape for use with occlusion culling in [`OccluderInstance3D`](class_occluderinstance3d.md).

## 描述

**PolygonOccluder3D** stores a polygon shape that can be used by the engine's occlusion culling system. When an [`OccluderInstance3D`](class_occluderinstance3d.md) with a **PolygonOccluder3D** is selected in the editor, an editor will appear at the top of the 3D viewport so you can add/remove points. All points must be placed on the same 2D plane, which means it is not possible to create arbitrary 3D shapes with a single **PolygonOccluder3D**. To use arbitrary 3D shapes as occluders, use [`ArrayOccluder3D`](class_arrayoccluder3d.md) or [`OccluderInstance3D`](class_occluderinstance3d.md)'s baking feature instead.

See [`OccluderInstance3D`](class_occluderinstance3d.md)'s documentation for instructions on setting up occlusion culling.

## 属性

|||
|:-:|:--|
| [`PackedVector2Array`](class_packedvector2array.md) | [`polygon`](class_polygonoccluder3d.md#class_polygonoccluder3d_property_polygon) | ``PackedVector2Array()`` |

<!-- rst-class:: classref-section-separator -->

---

## 属性说明

<div id="_class_polygonoccluder3d_property_polygon"></div>

[`PackedVector2Array`](class_packedvector2array.md) **polygon** = ``PackedVector2Array()`` <div id="class_polygonoccluder3d_property_polygon"></div>

- `void` **set_polygon** ( value: [`PackedVector2Array`](class_packedvector2array.md) )
- [`PackedVector2Array`](class_packedvector2array.md) **get_polygon** ( )

The polygon to use for occlusion culling. The polygon can be convex or concave, but it should have as few points as possible to maximize performance.

The polygon must *not* have intersecting lines. Otherwise, triangulation will fail (with an error message printed).

**Note:** The returned array is *copied* and any changes to it will not update the original property value. See [`PackedVector2Array`](class_packedvector2array.md) for more details.

[^virtual]: 本方法通常需要用户覆盖才能生效。
[^const]: 本方法无副作用，不会修改该实例的任何成员变量。
[^vararg]: 本方法除了能接受在此处描述的参数外，还能够继续接受任意数量的参数。
[^constructor]: 本方法用于构造某个类型。
[^static]: 调用本方法无需实例，可直接使用类名进行调用。
[^operator]: 本方法描述的是使用本类型作为左操作数的有效运算符。
[^bitfield]: 这个值是由下列位标志构成位掩码的整数。
[^void]: 无返回值。
