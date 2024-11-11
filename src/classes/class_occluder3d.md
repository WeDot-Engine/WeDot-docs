<!-- ⚠ 请勿编辑本文件 ⚠ -->
<!-- 本文档使用脚本从 WeDot 引擎源码仓库生成。 -->
<!-- 生成脚本：https://github.com/WeDot-Engine/WeDot/tree/master/doc/tools/make_md.py； -->
<!-- 原文件：https://github.com/WeDot-Engine/WeDot/tree/master/doc/classes/Occluder3D.xml。 -->

<div id="_class_occluder3d"></div>

# Occluder3D

**继承：** [`Resource`](class_resource.md) **<** [`RefCounted`](class_refcounted.md) **<** [`Object`](class_object.md)

**派生：** [`ArrayOccluder3D`](class_arrayoccluder3d.md), [`BoxOccluder3D`](class_boxoccluder3d.md), [`PolygonOccluder3D`](class_polygonoccluder3d.md), [`QuadOccluder3D`](class_quadoccluder3d.md), [`SphereOccluder3D`](class_sphereoccluder3d.md)

Occluder shape resource for use with occlusion culling in [`OccluderInstance3D`](class_occluderinstance3d.md).

## 描述

**Occluder3D** stores an occluder shape that can be used by the engine's occlusion culling system.

See [`OccluderInstance3D`](class_occluderinstance3d.md)'s documentation for instructions on setting up occlusion culling.

## 方法

|||
|:-:|:--|
| [`PackedInt32Array`](class_packedint32array.md)     | [`get_indices`](class_occluder3d.md#class_occluder3d_method_get_indices) ( ) const[^const]   |
| [`PackedVector3Array`](class_packedvector3array.md) | [`get_vertices`](class_occluder3d.md#class_occluder3d_method_get_vertices) ( ) const[^const] |

<!-- rst-class:: classref-section-separator -->

---

## 方法说明

<div id="_class_occluder3d_method_get_indices"></div>

[`PackedInt32Array`](class_packedint32array.md) **get_indices** ( ) const[^const]<div id="class_occluder3d_method_get_indices"></div>

Returns the occluder shape's vertex indices.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_occluder3d_method_get_vertices"></div>

[`PackedVector3Array`](class_packedvector3array.md) **get_vertices** ( ) const[^const]<div id="class_occluder3d_method_get_vertices"></div>

Returns the occluder shape's vertex positions.

[^virtual]: 本方法通常需要用户覆盖才能生效。
[^const]: 本方法无副作用，不会修改该实例的任何成员变量。
[^vararg]: 本方法除了能接受在此处描述的参数外，还能够继续接受任意数量的参数。
[^constructor]: 本方法用于构造某个类型。
[^static]: 调用本方法无需实例，可直接使用类名进行调用。
[^operator]: 本方法描述的是使用本类型作为左操作数的有效运算符。
[^bitfield]: 这个值是由下列位标志构成位掩码的整数。
[^void]: 无返回值。
