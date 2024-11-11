<!-- ⚠ 请勿编辑本文件 ⚠ -->
<!-- 本文档使用脚本从 WeDot 引擎源码仓库生成。 -->
<!-- 生成脚本：https://github.com/WeDot-Engine/WeDot/tree/master/doc/tools/make_md.py； -->
<!-- 原文件：https://github.com/WeDot-Engine/WeDot/tree/master/doc/classes/ArrayOccluder3D.xml。 -->

<div id="_class_arrayoccluder3d"></div>

# ArrayOccluder3D

**继承：** [`Occluder3D`](class_occluder3d.md) **<** [`Resource`](class_resource.md) **<** [`RefCounted`](class_refcounted.md) **<** [`Object`](class_object.md)

3D polygon shape for use with occlusion culling in [`OccluderInstance3D`](class_occluderinstance3d.md).

## 描述

**ArrayOccluder3D** stores an arbitrary 3D polygon shape that can be used by the engine's occlusion culling system. This is analogous to [`ArrayMesh`](class_arraymesh.md), but for occluders.

See [`OccluderInstance3D`](class_occluderinstance3d.md)'s documentation for instructions on setting up occlusion culling.

## 属性

|||
|:-:|:--|
| [`PackedInt32Array`](class_packedint32array.md)     | [`indices`](class_arrayoccluder3d.md#class_arrayoccluder3d_property_indices)   | ``PackedInt32Array()``   |
| [`PackedVector3Array`](class_packedvector3array.md) | [`vertices`](class_arrayoccluder3d.md#class_arrayoccluder3d_property_vertices) | ``PackedVector3Array()`` |

## 方法

|||
|:-:|:--|
| `void` | [`set_arrays`](class_arrayoccluder3d.md#class_arrayoccluder3d_method_set_arrays) ( vertices: [`PackedVector3Array`](class_packedvector3array.md), indices: [`PackedInt32Array`](class_packedint32array.md) ) |

<!-- rst-class:: classref-section-separator -->

---

## 属性说明

<div id="_class_arrayoccluder3d_property_indices"></div>

[`PackedInt32Array`](class_packedint32array.md) **indices** = ``PackedInt32Array()`` <div id="class_arrayoccluder3d_property_indices"></div>

- `void` **set_indices** ( value: [`PackedInt32Array`](class_packedint32array.md) )
- [`PackedInt32Array`](class_packedint32array.md) **get_indices** ( )

The occluder's index position. Indices determine which points from the [`vertices`](class_arrayoccluder3d.md#class_arrayoccluder3d_property_vertices) array should be drawn, and in which order.

 **Note:** The occluder is always updated after setting this value. If creating occluders procedurally, consider using [`set_arrays`](class_arrayoccluder3d.md#class_arrayoccluder3d_method_set_arrays) instead to avoid updating the occluder twice when it's created.

**Note:** The returned array is *copied* and any changes to it will not update the original property value. See [`PackedInt32Array`](class_packedint32array.md) for more details.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_arrayoccluder3d_property_vertices"></div>

[`PackedVector3Array`](class_packedvector3array.md) **vertices** = ``PackedVector3Array()`` <div id="class_arrayoccluder3d_property_vertices"></div>

- `void` **set_vertices** ( value: [`PackedVector3Array`](class_packedvector3array.md) )
- [`PackedVector3Array`](class_packedvector3array.md) **get_vertices** ( )

The occluder's vertex positions in local 3D coordinates.

 **Note:** The occluder is always updated after setting this value. If creating occluders procedurally, consider using [`set_arrays`](class_arrayoccluder3d.md#class_arrayoccluder3d_method_set_arrays) instead to avoid updating the occluder twice when it's created.

**Note:** The returned array is *copied* and any changes to it will not update the original property value. See [`PackedVector3Array`](class_packedvector3array.md) for more details.

<!-- rst-class:: classref-section-separator -->

---

## 方法说明

<div id="_class_arrayoccluder3d_method_set_arrays"></div>

`void` **set_arrays** ( vertices: [`PackedVector3Array`](class_packedvector3array.md), indices: [`PackedInt32Array`](class_packedint32array.md) )<div id="class_arrayoccluder3d_method_set_arrays"></div>

Sets [`indices`](class_arrayoccluder3d.md#class_arrayoccluder3d_property_indices) and [`vertices`](class_arrayoccluder3d.md#class_arrayoccluder3d_property_vertices), while updating the final occluder only once after both values are set.

[^virtual]: 本方法通常需要用户覆盖才能生效。
[^const]: 本方法无副作用，不会修改该实例的任何成员变量。
[^vararg]: 本方法除了能接受在此处描述的参数外，还能够继续接受任意数量的参数。
[^constructor]: 本方法用于构造某个类型。
[^static]: 调用本方法无需实例，可直接使用类名进行调用。
[^operator]: 本方法描述的是使用本类型作为左操作数的有效运算符。
[^bitfield]: 这个值是由下列位标志构成位掩码的整数。
[^void]: 无返回值。
