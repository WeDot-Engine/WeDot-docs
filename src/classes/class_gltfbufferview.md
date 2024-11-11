<!-- ⚠ 请勿编辑本文件 ⚠ -->
<!-- 本文档使用脚本从 WeDot 引擎源码仓库生成。 -->
<!-- 生成脚本：https://github.com/WeDot-Engine/WeDot/tree/master/doc/tools/make_md.py； -->
<!-- 原文件：https://github.com/WeDot-Engine/WeDot/tree/master/modules/gltf/doc_classes/GLTFBufferView.xml。 -->

<div id="_class_gltfbufferview"></div>

# GLTFBufferView

**继承：** [`Resource`](class_resource.md) **<** [`RefCounted`](class_refcounted.md) **<** [`Object`](class_object.md)

Represents a glTF buffer view.

## 描述

GLTFBufferView is a data structure representing a glTF `bufferView` that would be found in the `"bufferViews"` array. A buffer is a blob of binary data. A buffer view is a slice of a buffer that can be used to identify and extract data from the buffer.

Most custom uses of buffers only need to use the [`buffer`](class_gltfbufferview.md#class_gltfbufferview_property_buffer), [`byte_length`](class_gltfbufferview.md#class_gltfbufferview_property_byte_length), and [`byte_offset`](class_gltfbufferview.md#class_gltfbufferview_property_byte_offset). The [`byte_stride`](class_gltfbufferview.md#class_gltfbufferview_property_byte_stride) and [`indices`](class_gltfbufferview.md#class_gltfbufferview_property_indices) properties are for more advanced use cases such as interleaved mesh data encoded for the GPU.

## 属性

|||
|:-:|:--|
| [`int`](class_int.md)   | [`buffer`](class_gltfbufferview.md#class_gltfbufferview_property_buffer)                       | ``-1``    |
| [`int`](class_int.md)   | [`byte_length`](class_gltfbufferview.md#class_gltfbufferview_property_byte_length)             | ``0``     |
| [`int`](class_int.md)   | [`byte_offset`](class_gltfbufferview.md#class_gltfbufferview_property_byte_offset)             | ``0``     |
| [`int`](class_int.md)   | [`byte_stride`](class_gltfbufferview.md#class_gltfbufferview_property_byte_stride)             | ``-1``    |
| [`bool`](class_bool.md) | [`indices`](class_gltfbufferview.md#class_gltfbufferview_property_indices)                     | ``false`` |
| [`bool`](class_bool.md) | [`vertex_attributes`](class_gltfbufferview.md#class_gltfbufferview_property_vertex_attributes) | ``false`` |

## 方法

|||
|:-:|:--|
| [`PackedByteArray`](class_packedbytearray.md) | [`load_buffer_view_data`](class_gltfbufferview.md#class_gltfbufferview_method_load_buffer_view_data) ( state: [`GLTFState`](class_gltfstate.md) ) const[^const] |

<!-- rst-class:: classref-section-separator -->

---

## 属性说明

<div id="_class_gltfbufferview_property_buffer"></div>

[`int`](class_int.md) **buffer** = ``-1`` <div id="class_gltfbufferview_property_buffer"></div>

- `void` **set_buffer** ( value: [`int`](class_int.md) )
- [`int`](class_int.md) **get_buffer** ( )

The index of the buffer this buffer view is referencing. If `-1`, this buffer view is not referencing any buffer.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_gltfbufferview_property_byte_length"></div>

[`int`](class_int.md) **byte_length** = ``0`` <div id="class_gltfbufferview_property_byte_length"></div>

- `void` **set_byte_length** ( value: [`int`](class_int.md) )
- [`int`](class_int.md) **get_byte_length** ( )

The length, in bytes, of this buffer view. If `0`, this buffer view is empty.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_gltfbufferview_property_byte_offset"></div>

[`int`](class_int.md) **byte_offset** = ``0`` <div id="class_gltfbufferview_property_byte_offset"></div>

- `void` **set_byte_offset** ( value: [`int`](class_int.md) )
- [`int`](class_int.md) **get_byte_offset** ( )

The offset, in bytes, from the start of the buffer to the start of this buffer view.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_gltfbufferview_property_byte_stride"></div>

[`int`](class_int.md) **byte_stride** = ``-1`` <div id="class_gltfbufferview_property_byte_stride"></div>

- `void` **set_byte_stride** ( value: [`int`](class_int.md) )
- [`int`](class_int.md) **get_byte_stride** ( )

The stride, in bytes, between interleaved data. If `-1`, this buffer view is not interleaved.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_gltfbufferview_property_indices"></div>

[`bool`](class_bool.md) **indices** = ``false`` <div id="class_gltfbufferview_property_indices"></div>

- `void` **set_indices** ( value: [`bool`](class_bool.md) )
- [`bool`](class_bool.md) **get_indices** ( )

True if the GLTFBufferView's OpenGL GPU buffer type is an `ELEMENT_ARRAY_BUFFER` used for vertex indices (integer constant `34963`). False if the buffer type is any other value. See [*Buffers, BufferViews, and Accessors*](https://github.com/KhronosGroup/glTF-Tutorials/blob/master/gltfTutorial/gltfTutorial_005_BuffersBufferViewsAccessors.md) for possible values. This property is set on import and used on export.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_gltfbufferview_property_vertex_attributes"></div>

[`bool`](class_bool.md) **vertex_attributes** = ``false`` <div id="class_gltfbufferview_property_vertex_attributes"></div>

- `void` **set_vertex_attributes** ( value: [`bool`](class_bool.md) )
- [`bool`](class_bool.md) **get_vertex_attributes** ( )

True if the GLTFBufferView's OpenGL GPU buffer type is an `ARRAY_BUFFER` used for vertex attributes (integer constant `34962`). False if the buffer type is any other value. See [*Buffers, BufferViews, and Accessors*](https://github.com/KhronosGroup/glTF-Tutorials/blob/master/gltfTutorial/gltfTutorial_005_BuffersBufferViewsAccessors.md) for possible values. This property is set on import and used on export.

<!-- rst-class:: classref-section-separator -->

---

## 方法说明

<div id="_class_gltfbufferview_method_load_buffer_view_data"></div>

[`PackedByteArray`](class_packedbytearray.md) **load_buffer_view_data** ( state: [`GLTFState`](class_gltfstate.md) ) const[^const]<div id="class_gltfbufferview_method_load_buffer_view_data"></div>

Loads the buffer view data from the buffer referenced by this buffer view in the given [`GLTFState`](class_gltfstate.md). Interleaved data with a byte stride is not yet supported by this method. The data is returned as a [`PackedByteArray`](class_packedbytearray.md).

[^virtual]: 本方法通常需要用户覆盖才能生效。
[^const]: 本方法无副作用，不会修改该实例的任何成员变量。
[^vararg]: 本方法除了能接受在此处描述的参数外，还能够继续接受任意数量的参数。
[^constructor]: 本方法用于构造某个类型。
[^static]: 调用本方法无需实例，可直接使用类名进行调用。
[^operator]: 本方法描述的是使用本类型作为左操作数的有效运算符。
[^bitfield]: 这个值是由下列位标志构成位掩码的整数。
[^void]: 无返回值。
