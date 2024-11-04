<!-- ⚠ 请勿编辑本文件 ⚠ -->
<!-- 本文档使用脚本从 WeDot 引擎源码仓库生成。 -->
<!-- 生成脚本：https://github.com/WeDot-Engine/WeDot/tree/4.3/doc/tools/make_md.py； -->
<!-- 原文件：https://github.com/WeDot-Engine/WeDot/tree/4.3/doc/classes/StreamPeerBuffer.xml。 -->

<div id="_class_streampeerbuffer"></div>

# StreamPeerBuffer

**继承：** [`StreamPeer`](class_streampeer.md) **<** [`RefCounted`](class_refcounted.md) **<** [`Object`](class_object.md)

A stream peer used to handle binary data streams.

## 描述

A data buffer stream peer that uses a byte array as the stream. This object can be used to handle binary data from network sessions. To handle binary data stored in files, [`FileAccess`](class_fileaccess.md) can be used directly.

A **StreamPeerBuffer** object keeps an internal cursor which is the offset in bytes to the start of the buffer. Get and put operations are performed at the cursor position and will move the cursor accordingly.

## 属性

| [`PackedByteArray`](class_packedbytearray.md) | [`data_array`](#class_streampeerbuffer_property_data_array) | ``PackedByteArray()`` |

## 方法

| `void`                                          | [`clear`](#class_streampeerbuffer_method_clear) ( )                               |
| [`StreamPeerBuffer`](class_streampeerbuffer.md) | [`duplicate`](#class_streampeerbuffer_method_duplicate) ( ) const[^const]         |
| [`int`](class_int.md)                           | [`get_position`](#class_streampeerbuffer_method_get_position) ( ) const[^const]   |
| [`int`](class_int.md)                           | [`get_size`](#class_streampeerbuffer_method_get_size) ( ) const[^const]           |
| `void`                                          | [`resize`](#class_streampeerbuffer_method_resize) ( size: [`int`](class_int.md) ) |
| `void`                                          | [`seek`](#class_streampeerbuffer_method_seek) ( position: [`int`](class_int.md) ) |

<!-- rst-class:: classref-section-separator -->

---

## 属性说明

<div id="_class_streampeerbuffer_property_data_array"></div>

[`PackedByteArray`](class_packedbytearray.md) **data_array** = ``PackedByteArray()`` <div id="class_streampeerbuffer_property_data_array"></div>

- `void` **set_data_array** ( value: [`PackedByteArray`](class_packedbytearray.md) )
- [`PackedByteArray`](class_packedbytearray.md) **get_data_array** ( )

The underlying data buffer. Setting this value resets the cursor.

**Note:** The returned array is *copied* and any changes to it will not update the original property value. See [`PackedByteArray`](class_packedbytearray.md) for more details.

<!-- rst-class:: classref-section-separator -->

---

## 方法说明

<div id="_class_streampeerbuffer_method_clear"></div>

`void` **clear** ( )<div id="class_streampeerbuffer_method_clear"></div>

Clears the [`data_array`](#class_streampeerbuffer_property_data_array) and resets the cursor.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_streampeerbuffer_method_duplicate"></div>

[`StreamPeerBuffer`](class_streampeerbuffer.md) **duplicate** ( ) const[^const]<div id="class_streampeerbuffer_method_duplicate"></div>

Returns a new **StreamPeerBuffer** with the same [`data_array`](#class_streampeerbuffer_property_data_array) content.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_streampeerbuffer_method_get_position"></div>

[`int`](class_int.md) **get_position** ( ) const[^const]<div id="class_streampeerbuffer_method_get_position"></div>

Returns the current cursor position.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_streampeerbuffer_method_get_size"></div>

[`int`](class_int.md) **get_size** ( ) const[^const]<div id="class_streampeerbuffer_method_get_size"></div>

Returns the size of [`data_array`](#class_streampeerbuffer_property_data_array).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_streampeerbuffer_method_resize"></div>

`void` **resize** ( size: [`int`](class_int.md) )<div id="class_streampeerbuffer_method_resize"></div>

Resizes the [`data_array`](#class_streampeerbuffer_property_data_array). This *doesn't* update the cursor.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_streampeerbuffer_method_seek"></div>

`void` **seek** ( position: [`int`](class_int.md) )<div id="class_streampeerbuffer_method_seek"></div>

Moves the cursor to the specified position. `position` must be a valid index of [`data_array`](#class_streampeerbuffer_property_data_array).

[^virtual]: 本方法通常需要用户覆盖才能生效。
[^const]: 本方法无副作用，不会修改该实例的任何成员变量。
[^vararg]: 本方法除了能接受在此处描述的参数外，还能够继续接受任意数量的参数。
[^constructor]: 本方法用于构造某个类型。
[^static]: 调用本方法无需实例，可直接使用类名进行调用。
[^operator]: 本方法描述的是使用本类型作为左操作数的有效运算符。
[^bitfield]: 这个值是由下列位标志构成位掩码的整数。
[^void]: 无返回值。
