<!-- ⚠ 请勿编辑本文件 ⚠ -->
<!-- 本文档使用脚本从 WeDot 引擎源码仓库生成。 -->
<!-- 生成脚本：https://github.com/WeDot-Engine/WeDot/tree/4.3/doc/tools/make_md.py； -->
<!-- 原文件：https://github.com/WeDot-Engine/WeDot/tree/4.3/modules/gltf/doc_classes/GLTFAccessor.xml。 -->

<div id="_class_gltfaccessor"></div>

# GLTFAccessor

**继承：** [`Resource`](class_resource.md) **<** [`RefCounted`](class_refcounted.md) **<** [`Object`](class_object.md)

Represents a GLTF accessor.

## 描述

GLTFAccessor is a data structure representing GLTF a `accessor` that would be found in the `"accessors"` array. A buffer is a blob of binary data. A buffer view is a slice of a buffer. An accessor is a typed interpretation of the data in a buffer view.

Most custom data stored in GLTF does not need accessors, only buffer views (see [`GLTFBufferView`](class_gltfbufferview.md)). Accessors are for more advanced use cases such as interleaved mesh data encoded for the GPU.

## 属性

| [GLTFAccessorType](#enum_gltfaccessor_gltfaccessortype) | [`accessor_type`](#class_gltfaccessor_property_accessor_type)                                 | ``0``                    |
| [`int`](class_int.md)                                   | [`buffer_view`](#class_gltfaccessor_property_buffer_view)                                     | ``-1``                   |
| [`int`](class_int.md)                                   | [`byte_offset`](#class_gltfaccessor_property_byte_offset)                                     | ``0``                    |
| [`int`](class_int.md)                                   | [`component_type`](#class_gltfaccessor_property_component_type)                               | ``0``                    |
| [`int`](class_int.md)                                   | [`count`](#class_gltfaccessor_property_count)                                                 | ``0``                    |
| [`PackedFloat64Array`](class_packedfloat64array.md)     | [`max`](#class_gltfaccessor_property_max)                                                     | ``PackedFloat64Array()`` |
| [`PackedFloat64Array`](class_packedfloat64array.md)     | [`min`](#class_gltfaccessor_property_min)                                                     | ``PackedFloat64Array()`` |
| [`bool`](class_bool.md)                                 | [`normalized`](#class_gltfaccessor_property_normalized)                                       | ``false``                |
| [`int`](class_int.md)                                   | [`sparse_count`](#class_gltfaccessor_property_sparse_count)                                   | ``0``                    |
| [`int`](class_int.md)                                   | [`sparse_indices_buffer_view`](#class_gltfaccessor_property_sparse_indices_buffer_view)       | ``0``                    |
| [`int`](class_int.md)                                   | [`sparse_indices_byte_offset`](#class_gltfaccessor_property_sparse_indices_byte_offset)       | ``0``                    |
| [`int`](class_int.md)                                   | [`sparse_indices_component_type`](#class_gltfaccessor_property_sparse_indices_component_type) | ``0``                    |
| [`int`](class_int.md)                                   | [`sparse_values_buffer_view`](#class_gltfaccessor_property_sparse_values_buffer_view)         | ``0``                    |
| [`int`](class_int.md)                                   | [`sparse_values_byte_offset`](#class_gltfaccessor_property_sparse_values_byte_offset)         | ``0``                    |
| [`int`](class_int.md)                                   | [`type`](#class_gltfaccessor_property_type)                                                   |                          |

<!-- rst-class:: classref-section-separator -->

---

## 枚举

<div id="_class_enum_gltfaccessor_gltfaccessortype"></div>

enum **GLTFAccessorType**: <div id="enum_gltfaccessor_gltfaccessortype"></div>

<div id="_class_gltfaccessor_constant_type_scalar"></div>

[GLTFAccessorType](#enum_gltfaccessor_gltfaccessortype) **TYPE_SCALAR** = ``0``

Accessor type "SCALAR". For the glTF object model, this can be used to map to a single float, int, or bool value, or a float array.

<div id="_class_gltfaccessor_constant_type_vec2"></div>

[GLTFAccessorType](#enum_gltfaccessor_gltfaccessortype) **TYPE_VEC2** = ``1``

Accessor type "VEC2". For the glTF object model, this maps to "float2", represented in the glTF JSON as an array of two floats.

<div id="_class_gltfaccessor_constant_type_vec3"></div>

[GLTFAccessorType](#enum_gltfaccessor_gltfaccessortype) **TYPE_VEC3** = ``2``

Accessor type "VEC3". For the glTF object model, this maps to "float3", represented in the glTF JSON as an array of three floats.

<div id="_class_gltfaccessor_constant_type_vec4"></div>

[GLTFAccessorType](#enum_gltfaccessor_gltfaccessortype) **TYPE_VEC4** = ``3``

Accessor type "VEC4". For the glTF object model, this maps to "float4", represented in the glTF JSON as an array of four floats.

<div id="_class_gltfaccessor_constant_type_mat2"></div>

[GLTFAccessorType](#enum_gltfaccessor_gltfaccessortype) **TYPE_MAT2** = ``4``

Accessor type "MAT2". For the glTF object model, this maps to "float2x2", represented in the glTF JSON as an array of four floats.

<div id="_class_gltfaccessor_constant_type_mat3"></div>

[GLTFAccessorType](#enum_gltfaccessor_gltfaccessortype) **TYPE_MAT3** = ``5``

Accessor type "MAT3". For the glTF object model, this maps to "float3x3", represented in the glTF JSON as an array of nine floats.

<div id="_class_gltfaccessor_constant_type_mat4"></div>

[GLTFAccessorType](#enum_gltfaccessor_gltfaccessortype) **TYPE_MAT4** = ``6``

Accessor type "MAT4". For the glTF object model, this maps to "float4x4", represented in the glTF JSON as an array of sixteen floats.

<!-- rst-class:: classref-section-separator -->

---

## 属性说明

<div id="_class_gltfaccessor_property_accessor_type"></div>

[GLTFAccessorType](#enum_gltfaccessor_gltfaccessortype) **accessor_type** = ``0`` <div id="class_gltfaccessor_property_accessor_type"></div>

- `void` **set_accessor_type** ( value: [GLTFAccessorType](#enum_gltfaccessor_gltfaccessortype) )
- [GLTFAccessorType](#enum_gltfaccessor_gltfaccessortype) **get_accessor_type** ( )

The GLTF accessor type as an enum. Possible values are 0 for "SCALAR", 1 for "VEC2", 2 for "VEC3", 3 for "VEC4", 4 for "MAT2", 5 for "MAT3", and 6 for "MAT4".

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_gltfaccessor_property_buffer_view"></div>

[`int`](class_int.md) **buffer_view** = ``-1`` <div id="class_gltfaccessor_property_buffer_view"></div>

- `void` **set_buffer_view** ( value: [`int`](class_int.md) )
- [`int`](class_int.md) **get_buffer_view** ( )

The index of the buffer view this accessor is referencing. If `-1`, this accessor is not referencing any buffer view.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_gltfaccessor_property_byte_offset"></div>

[`int`](class_int.md) **byte_offset** = ``0`` <div id="class_gltfaccessor_property_byte_offset"></div>

- `void` **set_byte_offset** ( value: [`int`](class_int.md) )
- [`int`](class_int.md) **get_byte_offset** ( )

The offset relative to the start of the buffer view in bytes.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_gltfaccessor_property_component_type"></div>

[`int`](class_int.md) **component_type** = ``0`` <div id="class_gltfaccessor_property_component_type"></div>

- `void` **set_component_type** ( value: [`int`](class_int.md) )
- [`int`](class_int.md) **get_component_type** ( )

The GLTF component type as an enum. Possible values are 5120 for "BYTE", 5121 for "UNSIGNED_BYTE", 5122 for "SHORT", 5123 for "UNSIGNED_SHORT", 5125 for "UNSIGNED_INT", and 5126 for "FLOAT". A value of 5125 or "UNSIGNED_INT" must not be used for any accessor that is not referenced by mesh.primitive.indices.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_gltfaccessor_property_count"></div>

[`int`](class_int.md) **count** = ``0`` <div id="class_gltfaccessor_property_count"></div>

- `void` **set_count** ( value: [`int`](class_int.md) )
- [`int`](class_int.md) **get_count** ( )

The number of elements referenced by this accessor.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_gltfaccessor_property_max"></div>

[`PackedFloat64Array`](class_packedfloat64array.md) **max** = ``PackedFloat64Array()`` <div id="class_gltfaccessor_property_max"></div>

- `void` **set_max** ( value: [`PackedFloat64Array`](class_packedfloat64array.md) )
- [`PackedFloat64Array`](class_packedfloat64array.md) **get_max** ( )

Maximum value of each component in this accessor.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_gltfaccessor_property_min"></div>

[`PackedFloat64Array`](class_packedfloat64array.md) **min** = ``PackedFloat64Array()`` <div id="class_gltfaccessor_property_min"></div>

- `void` **set_min** ( value: [`PackedFloat64Array`](class_packedfloat64array.md) )
- [`PackedFloat64Array`](class_packedfloat64array.md) **get_min** ( )

Minimum value of each component in this accessor.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_gltfaccessor_property_normalized"></div>

[`bool`](class_bool.md) **normalized** = ``false`` <div id="class_gltfaccessor_property_normalized"></div>

- `void` **set_normalized** ( value: [`bool`](class_bool.md) )
- [`bool`](class_bool.md) **get_normalized** ( )

Specifies whether integer data values are normalized before usage.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_gltfaccessor_property_sparse_count"></div>

[`int`](class_int.md) **sparse_count** = ``0`` <div id="class_gltfaccessor_property_sparse_count"></div>

- `void` **set_sparse_count** ( value: [`int`](class_int.md) )
- [`int`](class_int.md) **get_sparse_count** ( )

Number of deviating accessor values stored in the sparse array.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_gltfaccessor_property_sparse_indices_buffer_view"></div>

[`int`](class_int.md) **sparse_indices_buffer_view** = ``0`` <div id="class_gltfaccessor_property_sparse_indices_buffer_view"></div>

- `void` **set_sparse_indices_buffer_view** ( value: [`int`](class_int.md) )
- [`int`](class_int.md) **get_sparse_indices_buffer_view** ( )

The index of the buffer view with sparse indices. The referenced buffer view MUST NOT have its target or byteStride properties defined. The buffer view and the optional byteOffset MUST be aligned to the componentType byte length.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_gltfaccessor_property_sparse_indices_byte_offset"></div>

[`int`](class_int.md) **sparse_indices_byte_offset** = ``0`` <div id="class_gltfaccessor_property_sparse_indices_byte_offset"></div>

- `void` **set_sparse_indices_byte_offset** ( value: [`int`](class_int.md) )
- [`int`](class_int.md) **get_sparse_indices_byte_offset** ( )

The offset relative to the start of the buffer view in bytes.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_gltfaccessor_property_sparse_indices_component_type"></div>

[`int`](class_int.md) **sparse_indices_component_type** = ``0`` <div id="class_gltfaccessor_property_sparse_indices_component_type"></div>

- `void` **set_sparse_indices_component_type** ( value: [`int`](class_int.md) )
- [`int`](class_int.md) **get_sparse_indices_component_type** ( )

The indices component data type as an enum. Possible values are 5121 for "UNSIGNED_BYTE", 5123 for "UNSIGNED_SHORT", and 5125 for "UNSIGNED_INT".

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_gltfaccessor_property_sparse_values_buffer_view"></div>

[`int`](class_int.md) **sparse_values_buffer_view** = ``0`` <div id="class_gltfaccessor_property_sparse_values_buffer_view"></div>

- `void` **set_sparse_values_buffer_view** ( value: [`int`](class_int.md) )
- [`int`](class_int.md) **get_sparse_values_buffer_view** ( )

The index of the bufferView with sparse values. The referenced buffer view MUST NOT have its target or byteStride properties defined.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_gltfaccessor_property_sparse_values_byte_offset"></div>

[`int`](class_int.md) **sparse_values_byte_offset** = ``0`` <div id="class_gltfaccessor_property_sparse_values_byte_offset"></div>

- `void` **set_sparse_values_byte_offset** ( value: [`int`](class_int.md) )
- [`int`](class_int.md) **get_sparse_values_byte_offset** ( )

The offset relative to the start of the bufferView in bytes.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_gltfaccessor_property_type"></div>

[`int`](class_int.md) **type** <div id="class_gltfaccessor_property_type"></div>

- `void` **set_type** ( value: [`int`](class_int.md) )
- [`int`](class_int.md) **get_type** ( )

**已弃用：** Use [`accessor_type`](#class_gltfaccessor_property_accessor_type) instead.

The GLTF accessor type as an enum. Use [`accessor_type`](#class_gltfaccessor_property_accessor_type) instead.

[^virtual]: 本方法通常需要用户覆盖才能生效。
[^const]: 本方法无副作用，不会修改该实例的任何成员变量。
[^vararg]: 本方法除了能接受在此处描述的参数外，还能够继续接受任意数量的参数。
[^constructor]: 本方法用于构造某个类型。
[^static]: 调用本方法无需实例，可直接使用类名进行调用。
[^operator]: 本方法描述的是使用本类型作为左操作数的有效运算符。
[^bitfield]: 这个值是由下列位标志构成位掩码的整数。
[^void]: 无返回值。
