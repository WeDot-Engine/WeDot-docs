<!-- ⚠ 请勿编辑本文件 ⚠ -->
<!-- 本文档使用脚本从 WeDot 引擎源码仓库生成。 -->
<!-- 生成脚本：https://github.com/WeDot-Engine/WeDot/tree/master/doc/tools/make_md.py； -->
<!-- 原文件：https://github.com/WeDot-Engine/WeDot/tree/master/doc/classes/PackedByteArray.xml。 -->

<div id="_class_packedbytearray"></div>

# PackedByteArray

A packed array of bytes.

## 描述

An array specifically designed to hold bytes. Packs data tightly, so it saves memory for large array sizes.

 **PackedByteArray** also provides methods to encode/decode various types to/from bytes. The way values are encoded is an implementation detail and shouldn't be relied upon when interacting with external apps.

 **Note:** Packed arrays are always passed by reference. To get a copy of an array that can be modified independently of the original array, use [`duplicate`](class_packedbytearray.md#class_packedbytearray_method_duplicate). This is *not* the case for built-in properties and methods. The returned packed array of these are a copies, and changing it will *not* affect the original value. To update a built-in property you need to modify the returned array, and then assign it to the property again.

通过 C# 使用该 API 时会有显著不同，详见 :ref:`doc_c_sharp_differences`\ 。

## 构造函数

|||
|:-:|:--|
| [`PackedByteArray`](class_packedbytearray.md) | [`PackedByteArray`](class_packedbytearray.md#class_packedbytearray_constructor_packedbytearray) ( )                                                     |
| [`PackedByteArray`](class_packedbytearray.md) | [`PackedByteArray`](class_packedbytearray.md#class_packedbytearray_constructor_packedbytearray) ( from: [`PackedByteArray`](class_packedbytearray.md) ) |
| [`PackedByteArray`](class_packedbytearray.md) | [`PackedByteArray`](class_packedbytearray.md#class_packedbytearray_constructor_packedbytearray) ( from: [`Array`](class_array.md) )                     |

## 方法

|||
|:-:|:--|
| [`bool`](class_bool.md)                             | [`append`](class_packedbytearray.md#class_packedbytearray_method_append) ( value: [`int`](class_int.md) )                                                                                                     |
| `void`                                              | [`append_array`](class_packedbytearray.md#class_packedbytearray_method_append_array) ( array: [`PackedByteArray`](class_packedbytearray.md) )                                                                 |
| [`int`](class_int.md)                               | [`bsearch`](class_packedbytearray.md#class_packedbytearray_method_bsearch) ( value: [`int`](class_int.md), before: [`bool`](class_bool.md) = true )                                                           |
| `void`                                              | [`clear`](class_packedbytearray.md#class_packedbytearray_method_clear) ( )                                                                                                                                    |
| [`PackedByteArray`](class_packedbytearray.md)       | [`compress`](class_packedbytearray.md#class_packedbytearray_method_compress) ( compression_mode: [`int`](class_int.md) = 0 ) const[^const]                                                                    |
| [`int`](class_int.md)                               | [`count`](class_packedbytearray.md#class_packedbytearray_method_count) ( value: [`int`](class_int.md) ) const[^const]                                                                                         |
| [`float`](class_float.md)                           | [`decode_double`](class_packedbytearray.md#class_packedbytearray_method_decode_double) ( byte_offset: [`int`](class_int.md) ) const[^const]                                                                   |
| [`float`](class_float.md)                           | [`decode_float`](class_packedbytearray.md#class_packedbytearray_method_decode_float) ( byte_offset: [`int`](class_int.md) ) const[^const]                                                                     |
| [`float`](class_float.md)                           | [`decode_half`](class_packedbytearray.md#class_packedbytearray_method_decode_half) ( byte_offset: [`int`](class_int.md) ) const[^const]                                                                       |
| [`int`](class_int.md)                               | [`decode_s8`](class_packedbytearray.md#class_packedbytearray_method_decode_s8) ( byte_offset: [`int`](class_int.md) ) const[^const]                                                                           |
| [`int`](class_int.md)                               | [`decode_s16`](class_packedbytearray.md#class_packedbytearray_method_decode_s16) ( byte_offset: [`int`](class_int.md) ) const[^const]                                                                         |
| [`int`](class_int.md)                               | [`decode_s32`](class_packedbytearray.md#class_packedbytearray_method_decode_s32) ( byte_offset: [`int`](class_int.md) ) const[^const]                                                                         |
| [`int`](class_int.md)                               | [`decode_s64`](class_packedbytearray.md#class_packedbytearray_method_decode_s64) ( byte_offset: [`int`](class_int.md) ) const[^const]                                                                         |
| [`int`](class_int.md)                               | [`decode_u8`](class_packedbytearray.md#class_packedbytearray_method_decode_u8) ( byte_offset: [`int`](class_int.md) ) const[^const]                                                                           |
| [`int`](class_int.md)                               | [`decode_u16`](class_packedbytearray.md#class_packedbytearray_method_decode_u16) ( byte_offset: [`int`](class_int.md) ) const[^const]                                                                         |
| [`int`](class_int.md)                               | [`decode_u32`](class_packedbytearray.md#class_packedbytearray_method_decode_u32) ( byte_offset: [`int`](class_int.md) ) const[^const]                                                                         |
| [`int`](class_int.md)                               | [`decode_u64`](class_packedbytearray.md#class_packedbytearray_method_decode_u64) ( byte_offset: [`int`](class_int.md) ) const[^const]                                                                         |
| [`Variant`](class_variant.md)                       | [`decode_var`](class_packedbytearray.md#class_packedbytearray_method_decode_var) ( byte_offset: [`int`](class_int.md), allow_objects: [`bool`](class_bool.md) = false ) const[^const]                         |
| [`int`](class_int.md)                               | [`decode_var_size`](class_packedbytearray.md#class_packedbytearray_method_decode_var_size) ( byte_offset: [`int`](class_int.md), allow_objects: [`bool`](class_bool.md) = false ) const[^const]               |
| [`PackedByteArray`](class_packedbytearray.md)       | [`decompress`](class_packedbytearray.md#class_packedbytearray_method_decompress) ( buffer_size: [`int`](class_int.md), compression_mode: [`int`](class_int.md) = 0 ) const[^const]                            |
| [`PackedByteArray`](class_packedbytearray.md)       | [`decompress_dynamic`](class_packedbytearray.md#class_packedbytearray_method_decompress_dynamic) ( max_output_size: [`int`](class_int.md), compression_mode: [`int`](class_int.md) = 0 ) const[^const]        |
| [`PackedByteArray`](class_packedbytearray.md)       | [`duplicate`](class_packedbytearray.md#class_packedbytearray_method_duplicate) ( )                                                                                                                            |
| `void`                                              | [`encode_double`](class_packedbytearray.md#class_packedbytearray_method_encode_double) ( byte_offset: [`int`](class_int.md), value: [`float`](class_float.md) )                                               |
| `void`                                              | [`encode_float`](class_packedbytearray.md#class_packedbytearray_method_encode_float) ( byte_offset: [`int`](class_int.md), value: [`float`](class_float.md) )                                                 |
| `void`                                              | [`encode_half`](class_packedbytearray.md#class_packedbytearray_method_encode_half) ( byte_offset: [`int`](class_int.md), value: [`float`](class_float.md) )                                                   |
| `void`                                              | [`encode_s8`](class_packedbytearray.md#class_packedbytearray_method_encode_s8) ( byte_offset: [`int`](class_int.md), value: [`int`](class_int.md) )                                                           |
| `void`                                              | [`encode_s16`](class_packedbytearray.md#class_packedbytearray_method_encode_s16) ( byte_offset: [`int`](class_int.md), value: [`int`](class_int.md) )                                                         |
| `void`                                              | [`encode_s32`](class_packedbytearray.md#class_packedbytearray_method_encode_s32) ( byte_offset: [`int`](class_int.md), value: [`int`](class_int.md) )                                                         |
| `void`                                              | [`encode_s64`](class_packedbytearray.md#class_packedbytearray_method_encode_s64) ( byte_offset: [`int`](class_int.md), value: [`int`](class_int.md) )                                                         |
| `void`                                              | [`encode_u8`](class_packedbytearray.md#class_packedbytearray_method_encode_u8) ( byte_offset: [`int`](class_int.md), value: [`int`](class_int.md) )                                                           |
| `void`                                              | [`encode_u16`](class_packedbytearray.md#class_packedbytearray_method_encode_u16) ( byte_offset: [`int`](class_int.md), value: [`int`](class_int.md) )                                                         |
| `void`                                              | [`encode_u32`](class_packedbytearray.md#class_packedbytearray_method_encode_u32) ( byte_offset: [`int`](class_int.md), value: [`int`](class_int.md) )                                                         |
| `void`                                              | [`encode_u64`](class_packedbytearray.md#class_packedbytearray_method_encode_u64) ( byte_offset: [`int`](class_int.md), value: [`int`](class_int.md) )                                                         |
| [`int`](class_int.md)                               | [`encode_var`](class_packedbytearray.md#class_packedbytearray_method_encode_var) ( byte_offset: [`int`](class_int.md), value: [`Variant`](class_variant.md), allow_objects: [`bool`](class_bool.md) = false ) |
| `void`                                              | [`fill`](class_packedbytearray.md#class_packedbytearray_method_fill) ( value: [`int`](class_int.md) )                                                                                                         |
| [`int`](class_int.md)                               | [`find`](class_packedbytearray.md#class_packedbytearray_method_find) ( value: [`int`](class_int.md), from: [`int`](class_int.md) = 0 ) const[^const]                                                          |
| [`int`](class_int.md)                               | [`get`](class_packedbytearray.md#class_packedbytearray_method_get) ( index: [`int`](class_int.md) ) const[^const]                                                                                             |
| [`String`](class_string.md)                         | [`get_string_from_ascii`](class_packedbytearray.md#class_packedbytearray_method_get_string_from_ascii) ( ) const[^const]                                                                                      |
| [`String`](class_string.md)                         | [`get_string_from_utf8`](class_packedbytearray.md#class_packedbytearray_method_get_string_from_utf8) ( ) const[^const]                                                                                        |
| [`String`](class_string.md)                         | [`get_string_from_utf16`](class_packedbytearray.md#class_packedbytearray_method_get_string_from_utf16) ( ) const[^const]                                                                                      |
| [`String`](class_string.md)                         | [`get_string_from_utf32`](class_packedbytearray.md#class_packedbytearray_method_get_string_from_utf32) ( ) const[^const]                                                                                      |
| [`String`](class_string.md)                         | [`get_string_from_wchar`](class_packedbytearray.md#class_packedbytearray_method_get_string_from_wchar) ( ) const[^const]                                                                                      |
| [`bool`](class_bool.md)                             | [`has`](class_packedbytearray.md#class_packedbytearray_method_has) ( value: [`int`](class_int.md) ) const[^const]                                                                                             |
| [`bool`](class_bool.md)                             | [`has_encoded_var`](class_packedbytearray.md#class_packedbytearray_method_has_encoded_var) ( byte_offset: [`int`](class_int.md), allow_objects: [`bool`](class_bool.md) = false ) const[^const]               |
| [`String`](class_string.md)                         | [`hex_encode`](class_packedbytearray.md#class_packedbytearray_method_hex_encode) ( ) const[^const]                                                                                                            |
| [`int`](class_int.md)                               | [`insert`](class_packedbytearray.md#class_packedbytearray_method_insert) ( at_index: [`int`](class_int.md), value: [`int`](class_int.md) )                                                                    |
| [`bool`](class_bool.md)                             | [`is_empty`](class_packedbytearray.md#class_packedbytearray_method_is_empty) ( ) const[^const]                                                                                                                |
| [`bool`](class_bool.md)                             | [`push_back`](class_packedbytearray.md#class_packedbytearray_method_push_back) ( value: [`int`](class_int.md) )                                                                                               |
| `void`                                              | [`remove_at`](class_packedbytearray.md#class_packedbytearray_method_remove_at) ( index: [`int`](class_int.md) )                                                                                               |
| [`int`](class_int.md)                               | [`resize`](class_packedbytearray.md#class_packedbytearray_method_resize) ( new_size: [`int`](class_int.md) )                                                                                                  |
| `void`                                              | [`reverse`](class_packedbytearray.md#class_packedbytearray_method_reverse) ( )                                                                                                                                |
| [`int`](class_int.md)                               | [`rfind`](class_packedbytearray.md#class_packedbytearray_method_rfind) ( value: [`int`](class_int.md), from: [`int`](class_int.md) = -1 ) const[^const]                                                       |
| `void`                                              | [`set`](class_packedbytearray.md#class_packedbytearray_method_set) ( index: [`int`](class_int.md), value: [`int`](class_int.md) )                                                                             |
| [`int`](class_int.md)                               | [`size`](class_packedbytearray.md#class_packedbytearray_method_size) ( ) const[^const]                                                                                                                        |
| [`PackedByteArray`](class_packedbytearray.md)       | [`slice`](class_packedbytearray.md#class_packedbytearray_method_slice) ( begin: [`int`](class_int.md), end: [`int`](class_int.md) = 2147483647 ) const[^const]                                                |
| `void`                                              | [`sort`](class_packedbytearray.md#class_packedbytearray_method_sort) ( )                                                                                                                                      |
| [`PackedFloat32Array`](class_packedfloat32array.md) | [`to_float32_array`](class_packedbytearray.md#class_packedbytearray_method_to_float32_array) ( ) const[^const]                                                                                                |
| [`PackedFloat64Array`](class_packedfloat64array.md) | [`to_float64_array`](class_packedbytearray.md#class_packedbytearray_method_to_float64_array) ( ) const[^const]                                                                                                |
| [`PackedInt32Array`](class_packedint32array.md)     | [`to_int32_array`](class_packedbytearray.md#class_packedbytearray_method_to_int32_array) ( ) const[^const]                                                                                                    |
| [`PackedInt64Array`](class_packedint64array.md)     | [`to_int64_array`](class_packedbytearray.md#class_packedbytearray_method_to_int64_array) ( ) const[^const]                                                                                                    |

## 运算符

|||
|:-:|:--|
| [`bool`](class_bool.md)                       | [`operator !=`](class_PackedByteArray.md#operator_neq_PackedByteArray) ( right: [`PackedByteArray`](class_packedbytearray.md) ) |
| [`PackedByteArray`](class_packedbytearray.md) | [`operator +`](class_PackedByteArray.md#operator_sum_PackedByteArray) ( right: [`PackedByteArray`](class_packedbytearray.md) )  |
| [`bool`](class_bool.md)                       | [`operator ==`](class_PackedByteArray.md#operator_eq_PackedByteArray) ( right: [`PackedByteArray`](class_packedbytearray.md) )  |
| [`int`](class_int.md)                         | [`operator []`](class_PackedByteArray.md#operator_idx_int) ( index: [`int`](class_int.md) )                                     |

<!-- rst-class:: classref-section-separator -->

---

## 构造函数说明

<div id="_class_packedbytearray_constructor_packedbytearray"></div>

[`PackedByteArray`](class_packedbytearray.md) **PackedByteArray** ( )<div id="class_packedbytearray_constructor_packedbytearray"></div>

Constructs an empty **PackedByteArray**.

<!-- rst-class:: classref-item-separator -->

---

[`PackedByteArray`](class_packedbytearray.md) **PackedByteArray** ( from: [`PackedByteArray`](class_packedbytearray.md) )

Constructs a **PackedByteArray** as a copy of the given **PackedByteArray**.

<!-- rst-class:: classref-item-separator -->

---

[`PackedByteArray`](class_packedbytearray.md) **PackedByteArray** ( from: [`Array`](class_array.md) )

Constructs a new **PackedByteArray**. Optionally, you can pass in a generic [`Array`](class_array.md) that will be converted.

<!-- rst-class:: classref-section-separator -->

---

## 方法说明

<div id="_class_packedbytearray_method_append"></div>

[`bool`](class_bool.md) **append** ( value: [`int`](class_int.md) )<div id="class_packedbytearray_method_append"></div>

Appends an element at the end of the array (alias of [`push_back`](class_packedbytearray.md#class_packedbytearray_method_push_back)).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_packedbytearray_method_append_array"></div>

`void` **append_array** ( array: [`PackedByteArray`](class_packedbytearray.md) )<div id="class_packedbytearray_method_append_array"></div>

Appends a **PackedByteArray** at the end of this array.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_packedbytearray_method_bsearch"></div>

[`int`](class_int.md) **bsearch** ( value: [`int`](class_int.md), before: [`bool`](class_bool.md) = true )<div id="class_packedbytearray_method_bsearch"></div>

Finds the index of an existing value (or the insertion index that maintains sorting order, if the value is not yet present in the array) using binary search. Optionally, a `before` specifier can be passed. If `false`, the returned index comes after all existing entries of the value in the array.

 **Note:** Calling [`bsearch`](class_packedbytearray.md#class_packedbytearray_method_bsearch) on an unsorted array results in unexpected behavior.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_packedbytearray_method_clear"></div>

`void` **clear** ( )<div id="class_packedbytearray_method_clear"></div>

Clears the array. This is equivalent to using [`resize`](class_packedbytearray.md#class_packedbytearray_method_resize) with a size of `0`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_packedbytearray_method_compress"></div>

[`PackedByteArray`](class_packedbytearray.md) **compress** ( compression_mode: [`int`](class_int.md) = 0 ) const[^const]<div id="class_packedbytearray_method_compress"></div>

Returns a new **PackedByteArray** with the data compressed. Set the compression mode using one of [CompressionMode](#enum_fileaccess_compressionmode)'s constants.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_packedbytearray_method_count"></div>

[`int`](class_int.md) **count** ( value: [`int`](class_int.md) ) const[^const]<div id="class_packedbytearray_method_count"></div>

Returns the number of times an element is in the array.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_packedbytearray_method_decode_double"></div>

[`float`](class_float.md) **decode_double** ( byte_offset: [`int`](class_int.md) ) const[^const]<div id="class_packedbytearray_method_decode_double"></div>

Decodes a 64-bit floating-point number from the bytes starting at `byte_offset`. Fails if the byte count is insufficient. Returns `0.0` if a valid number can't be decoded.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_packedbytearray_method_decode_float"></div>

[`float`](class_float.md) **decode_float** ( byte_offset: [`int`](class_int.md) ) const[^const]<div id="class_packedbytearray_method_decode_float"></div>

Decodes a 32-bit floating-point number from the bytes starting at `byte_offset`. Fails if the byte count is insufficient. Returns `0.0` if a valid number can't be decoded.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_packedbytearray_method_decode_half"></div>

[`float`](class_float.md) **decode_half** ( byte_offset: [`int`](class_int.md) ) const[^const]<div id="class_packedbytearray_method_decode_half"></div>

Decodes a 16-bit floating-point number from the bytes starting at `byte_offset`. Fails if the byte count is insufficient. Returns `0.0` if a valid number can't be decoded.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_packedbytearray_method_decode_s8"></div>

[`int`](class_int.md) **decode_s8** ( byte_offset: [`int`](class_int.md) ) const[^const]<div id="class_packedbytearray_method_decode_s8"></div>

Decodes a 8-bit signed integer number from the bytes starting at `byte_offset`. Fails if the byte count is insufficient. Returns `0` if a valid number can't be decoded.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_packedbytearray_method_decode_s16"></div>

[`int`](class_int.md) **decode_s16** ( byte_offset: [`int`](class_int.md) ) const[^const]<div id="class_packedbytearray_method_decode_s16"></div>

Decodes a 16-bit signed integer number from the bytes starting at `byte_offset`. Fails if the byte count is insufficient. Returns `0` if a valid number can't be decoded.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_packedbytearray_method_decode_s32"></div>

[`int`](class_int.md) **decode_s32** ( byte_offset: [`int`](class_int.md) ) const[^const]<div id="class_packedbytearray_method_decode_s32"></div>

Decodes a 32-bit signed integer number from the bytes starting at `byte_offset`. Fails if the byte count is insufficient. Returns `0` if a valid number can't be decoded.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_packedbytearray_method_decode_s64"></div>

[`int`](class_int.md) **decode_s64** ( byte_offset: [`int`](class_int.md) ) const[^const]<div id="class_packedbytearray_method_decode_s64"></div>

Decodes a 64-bit signed integer number from the bytes starting at `byte_offset`. Fails if the byte count is insufficient. Returns `0` if a valid number can't be decoded.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_packedbytearray_method_decode_u8"></div>

[`int`](class_int.md) **decode_u8** ( byte_offset: [`int`](class_int.md) ) const[^const]<div id="class_packedbytearray_method_decode_u8"></div>

Decodes a 8-bit unsigned integer number from the bytes starting at `byte_offset`. Fails if the byte count is insufficient. Returns `0` if a valid number can't be decoded.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_packedbytearray_method_decode_u16"></div>

[`int`](class_int.md) **decode_u16** ( byte_offset: [`int`](class_int.md) ) const[^const]<div id="class_packedbytearray_method_decode_u16"></div>

Decodes a 16-bit unsigned integer number from the bytes starting at `byte_offset`. Fails if the byte count is insufficient. Returns `0` if a valid number can't be decoded.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_packedbytearray_method_decode_u32"></div>

[`int`](class_int.md) **decode_u32** ( byte_offset: [`int`](class_int.md) ) const[^const]<div id="class_packedbytearray_method_decode_u32"></div>

Decodes a 32-bit unsigned integer number from the bytes starting at `byte_offset`. Fails if the byte count is insufficient. Returns `0` if a valid number can't be decoded.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_packedbytearray_method_decode_u64"></div>

[`int`](class_int.md) **decode_u64** ( byte_offset: [`int`](class_int.md) ) const[^const]<div id="class_packedbytearray_method_decode_u64"></div>

Decodes a 64-bit unsigned integer number from the bytes starting at `byte_offset`. Fails if the byte count is insufficient. Returns `0` if a valid number can't be decoded.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_packedbytearray_method_decode_var"></div>

[`Variant`](class_variant.md) **decode_var** ( byte_offset: [`int`](class_int.md), allow_objects: [`bool`](class_bool.md) = false ) const[^const]<div id="class_packedbytearray_method_decode_var"></div>

Decodes a [`Variant`](class_variant.md) from the bytes starting at `byte_offset`. Returns `null` if a valid variant can't be decoded or the value is [`Object`](class_object.md)-derived and `allow_objects` is `false`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_packedbytearray_method_decode_var_size"></div>

[`int`](class_int.md) **decode_var_size** ( byte_offset: [`int`](class_int.md), allow_objects: [`bool`](class_bool.md) = false ) const[^const]<div id="class_packedbytearray_method_decode_var_size"></div>

Decodes a size of a [`Variant`](class_variant.md) from the bytes starting at `byte_offset`. Requires at least 4 bytes of data starting at the offset, otherwise fails.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_packedbytearray_method_decompress"></div>

[`PackedByteArray`](class_packedbytearray.md) **decompress** ( buffer_size: [`int`](class_int.md), compression_mode: [`int`](class_int.md) = 0 ) const[^const]<div id="class_packedbytearray_method_decompress"></div>

Returns a new **PackedByteArray** with the data decompressed. Set `buffer_size` to the size of the uncompressed data. Set the compression mode using one of [CompressionMode](#enum_fileaccess_compressionmode)'s constants.

 **Note:** Decompression is not guaranteed to work with data not compressed by Godot, for example if data compressed with the deflate compression mode lacks a checksum or header.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_packedbytearray_method_decompress_dynamic"></div>

[`PackedByteArray`](class_packedbytearray.md) **decompress_dynamic** ( max_output_size: [`int`](class_int.md), compression_mode: [`int`](class_int.md) = 0 ) const[^const]<div id="class_packedbytearray_method_decompress_dynamic"></div>

Returns a new **PackedByteArray** with the data decompressed. Set the compression mode using one of [CompressionMode](#enum_fileaccess_compressionmode)'s constants. **This method only accepts brotli, gzip, and deflate compression modes.** 

This method is potentially slower than [`decompress`](class_packedbytearray.md#class_packedbytearray_method_decompress), as it may have to re-allocate its output buffer multiple times while decompressing, whereas [`decompress`](class_packedbytearray.md#class_packedbytearray_method_decompress) knows it's output buffer size from the beginning.

GZIP has a maximal compression ratio of 1032:1, meaning it's very possible for a small compressed payload to decompress to a potentially very large output. To guard against this, you may provide a maximum size this function is allowed to allocate in bytes via `max_output_size`. Passing -1 will allow for unbounded output. If any positive value is passed, and the decompression exceeds that amount in bytes, then an error will be returned.

 **Note:** Decompression is not guaranteed to work with data not compressed by Godot, for example if data compressed with the deflate compression mode lacks a checksum or header.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_packedbytearray_method_duplicate"></div>

[`PackedByteArray`](class_packedbytearray.md) **duplicate** ( )<div id="class_packedbytearray_method_duplicate"></div>

Creates a copy of the array, and returns it.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_packedbytearray_method_encode_double"></div>

`void` **encode_double** ( byte_offset: [`int`](class_int.md), value: [`float`](class_float.md) )<div id="class_packedbytearray_method_encode_double"></div>

Encodes a 64-bit floating-point number as bytes at the index of `byte_offset` bytes. The array must have at least 8 bytes of allocated space, starting at the offset.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_packedbytearray_method_encode_float"></div>

`void` **encode_float** ( byte_offset: [`int`](class_int.md), value: [`float`](class_float.md) )<div id="class_packedbytearray_method_encode_float"></div>

Encodes a 32-bit floating-point number as bytes at the index of `byte_offset` bytes. The array must have at least 4 bytes of space, starting at the offset.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_packedbytearray_method_encode_half"></div>

`void` **encode_half** ( byte_offset: [`int`](class_int.md), value: [`float`](class_float.md) )<div id="class_packedbytearray_method_encode_half"></div>

Encodes a 16-bit floating-point number as bytes at the index of `byte_offset` bytes. The array must have at least 2 bytes of space, starting at the offset.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_packedbytearray_method_encode_s8"></div>

`void` **encode_s8** ( byte_offset: [`int`](class_int.md), value: [`int`](class_int.md) )<div id="class_packedbytearray_method_encode_s8"></div>

Encodes a 8-bit signed integer number (signed byte) at the index of `byte_offset` bytes. The array must have at least 1 byte of space, starting at the offset.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_packedbytearray_method_encode_s16"></div>

`void` **encode_s16** ( byte_offset: [`int`](class_int.md), value: [`int`](class_int.md) )<div id="class_packedbytearray_method_encode_s16"></div>

Encodes a 16-bit signed integer number as bytes at the index of `byte_offset` bytes. The array must have at least 2 bytes of space, starting at the offset.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_packedbytearray_method_encode_s32"></div>

`void` **encode_s32** ( byte_offset: [`int`](class_int.md), value: [`int`](class_int.md) )<div id="class_packedbytearray_method_encode_s32"></div>

Encodes a 32-bit signed integer number as bytes at the index of `byte_offset` bytes. The array must have at least 4 bytes of space, starting at the offset.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_packedbytearray_method_encode_s64"></div>

`void` **encode_s64** ( byte_offset: [`int`](class_int.md), value: [`int`](class_int.md) )<div id="class_packedbytearray_method_encode_s64"></div>

Encodes a 64-bit signed integer number as bytes at the index of `byte_offset` bytes. The array must have at least 8 bytes of space, starting at the offset.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_packedbytearray_method_encode_u8"></div>

`void` **encode_u8** ( byte_offset: [`int`](class_int.md), value: [`int`](class_int.md) )<div id="class_packedbytearray_method_encode_u8"></div>

Encodes a 8-bit unsigned integer number (byte) at the index of `byte_offset` bytes. The array must have at least 1 byte of space, starting at the offset.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_packedbytearray_method_encode_u16"></div>

`void` **encode_u16** ( byte_offset: [`int`](class_int.md), value: [`int`](class_int.md) )<div id="class_packedbytearray_method_encode_u16"></div>

Encodes a 16-bit unsigned integer number as bytes at the index of `byte_offset` bytes. The array must have at least 2 bytes of space, starting at the offset.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_packedbytearray_method_encode_u32"></div>

`void` **encode_u32** ( byte_offset: [`int`](class_int.md), value: [`int`](class_int.md) )<div id="class_packedbytearray_method_encode_u32"></div>

Encodes a 32-bit unsigned integer number as bytes at the index of `byte_offset` bytes. The array must have at least 4 bytes of space, starting at the offset.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_packedbytearray_method_encode_u64"></div>

`void` **encode_u64** ( byte_offset: [`int`](class_int.md), value: [`int`](class_int.md) )<div id="class_packedbytearray_method_encode_u64"></div>

Encodes a 64-bit unsigned integer number as bytes at the index of `byte_offset` bytes. The array must have at least 8 bytes of space, starting at the offset.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_packedbytearray_method_encode_var"></div>

[`int`](class_int.md) **encode_var** ( byte_offset: [`int`](class_int.md), value: [`Variant`](class_variant.md), allow_objects: [`bool`](class_bool.md) = false )<div id="class_packedbytearray_method_encode_var"></div>

Encodes a [`Variant`](class_variant.md) at the index of `byte_offset` bytes. A sufficient space must be allocated, depending on the encoded variant's size. If `allow_objects` is `false`, [`Object`](class_object.md)-derived values are not permitted and will instead be serialized as ID-only.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_packedbytearray_method_fill"></div>

`void` **fill** ( value: [`int`](class_int.md) )<div id="class_packedbytearray_method_fill"></div>

Assigns the given value to all elements in the array. This can typically be used together with [`resize`](class_packedbytearray.md#class_packedbytearray_method_resize) to create an array with a given size and initialized elements.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_packedbytearray_method_find"></div>

[`int`](class_int.md) **find** ( value: [`int`](class_int.md), from: [`int`](class_int.md) = 0 ) const[^const]<div id="class_packedbytearray_method_find"></div>

Searches the array for a value and returns its index or `-1` if not found. Optionally, the initial search index can be passed.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_packedbytearray_method_get"></div>

[`int`](class_int.md) **get** ( index: [`int`](class_int.md) ) const[^const]<div id="class_packedbytearray_method_get"></div>

Returns the byte at the given `index` in the array. This is the same as using the `[]` operator (`array[index]`).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_packedbytearray_method_get_string_from_ascii"></div>

[`String`](class_string.md) **get_string_from_ascii** ( ) const[^const]<div id="class_packedbytearray_method_get_string_from_ascii"></div>

Converts ASCII/Latin-1 encoded array to [`String`](class_string.md). Fast alternative to [`get_string_from_utf8`](class_packedbytearray.md#class_packedbytearray_method_get_string_from_utf8) if the content is ASCII/Latin-1 only. Unlike the UTF-8 function this function maps every byte to a character in the array. Multibyte sequences will not be interpreted correctly. For parsing user input always use [`get_string_from_utf8`](class_packedbytearray.md#class_packedbytearray_method_get_string_from_utf8). This is the inverse of [`String.to_ascii_buffer`](class_string.md#class_string_method_to_ascii_buffer).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_packedbytearray_method_get_string_from_utf8"></div>

[`String`](class_string.md) **get_string_from_utf8** ( ) const[^const]<div id="class_packedbytearray_method_get_string_from_utf8"></div>

Converts UTF-8 encoded array to [`String`](class_string.md). Slower than [`get_string_from_ascii`](class_packedbytearray.md#class_packedbytearray_method_get_string_from_ascii) but supports UTF-8 encoded data. Use this function if you are unsure about the source of the data. For user input this function should always be preferred. Returns empty string if source array is not valid UTF-8 string. This is the inverse of [`String.to_utf8_buffer`](class_string.md#class_string_method_to_utf8_buffer).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_packedbytearray_method_get_string_from_utf16"></div>

[`String`](class_string.md) **get_string_from_utf16** ( ) const[^const]<div id="class_packedbytearray_method_get_string_from_utf16"></div>

Converts UTF-16 encoded array to [`String`](class_string.md). If the BOM is missing, system endianness is assumed. Returns empty string if source array is not valid UTF-16 string. This is the inverse of [`String.to_utf16_buffer`](class_string.md#class_string_method_to_utf16_buffer).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_packedbytearray_method_get_string_from_utf32"></div>

[`String`](class_string.md) **get_string_from_utf32** ( ) const[^const]<div id="class_packedbytearray_method_get_string_from_utf32"></div>

Converts UTF-32 encoded array to [`String`](class_string.md). System endianness is assumed. Returns empty string if source array is not valid UTF-32 string. This is the inverse of [`String.to_utf32_buffer`](class_string.md#class_string_method_to_utf32_buffer).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_packedbytearray_method_get_string_from_wchar"></div>

[`String`](class_string.md) **get_string_from_wchar** ( ) const[^const]<div id="class_packedbytearray_method_get_string_from_wchar"></div>

Converts wide character (`wchar_t`, UTF-16 on Windows, UTF-32 on other platforms) encoded array to [`String`](class_string.md). Returns empty string if source array is not valid wide string. This is the inverse of [`String.to_wchar_buffer`](class_string.md#class_string_method_to_wchar_buffer).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_packedbytearray_method_has"></div>

[`bool`](class_bool.md) **has** ( value: [`int`](class_int.md) ) const[^const]<div id="class_packedbytearray_method_has"></div>

Returns `true` if the array contains `value`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_packedbytearray_method_has_encoded_var"></div>

[`bool`](class_bool.md) **has_encoded_var** ( byte_offset: [`int`](class_int.md), allow_objects: [`bool`](class_bool.md) = false ) const[^const]<div id="class_packedbytearray_method_has_encoded_var"></div>

Returns `true` if a valid [`Variant`](class_variant.md) value can be decoded at the `byte_offset`. Returns `false` otherwise or when the value is [`Object`](class_object.md)-derived and `allow_objects` is `false`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_packedbytearray_method_hex_encode"></div>

[`String`](class_string.md) **hex_encode** ( ) const[^const]<div id="class_packedbytearray_method_hex_encode"></div>

Returns a hexadecimal representation of this array as a [`String`](class_string.md).



```gdscript

    var array = PackedByteArray([11, 46, 255])
    print(array.hex_encode()) # Prints: 0b2eff
```

```csharp

    var array = new byte[] {11, 46, 255};
    GD.Print(array.HexEncode()); // Prints: 0b2eff
```







<!-- rst-class:: classref-item-separator -->

---

<div id="_class_packedbytearray_method_insert"></div>

[`int`](class_int.md) **insert** ( at_index: [`int`](class_int.md), value: [`int`](class_int.md) )<div id="class_packedbytearray_method_insert"></div>

Inserts a new element at a given position in the array. The position must be valid, or at the end of the array (`idx == size()`).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_packedbytearray_method_is_empty"></div>

[`bool`](class_bool.md) **is_empty** ( ) const[^const]<div id="class_packedbytearray_method_is_empty"></div>

Returns `true` if the array is empty.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_packedbytearray_method_push_back"></div>

[`bool`](class_bool.md) **push_back** ( value: [`int`](class_int.md) )<div id="class_packedbytearray_method_push_back"></div>

Appends an element at the end of the array.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_packedbytearray_method_remove_at"></div>

`void` **remove_at** ( index: [`int`](class_int.md) )<div id="class_packedbytearray_method_remove_at"></div>

Removes an element from the array by index.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_packedbytearray_method_resize"></div>

[`int`](class_int.md) **resize** ( new_size: [`int`](class_int.md) )<div id="class_packedbytearray_method_resize"></div>

Sets the size of the array. If the array is grown, reserves elements at the end of the array. If the array is shrunk, truncates the array to the new size. Calling [`resize`](class_packedbytearray.md#class_packedbytearray_method_resize) once and assigning the new values is faster than adding new elements one by one.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_packedbytearray_method_reverse"></div>

`void` **reverse** ( )<div id="class_packedbytearray_method_reverse"></div>

Reverses the order of the elements in the array.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_packedbytearray_method_rfind"></div>

[`int`](class_int.md) **rfind** ( value: [`int`](class_int.md), from: [`int`](class_int.md) = -1 ) const[^const]<div id="class_packedbytearray_method_rfind"></div>

Searches the array in reverse order. Optionally, a start search index can be passed. If negative, the start index is considered relative to the end of the array.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_packedbytearray_method_set"></div>

`void` **set** ( index: [`int`](class_int.md), value: [`int`](class_int.md) )<div id="class_packedbytearray_method_set"></div>

Changes the byte at the given index.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_packedbytearray_method_size"></div>

[`int`](class_int.md) **size** ( ) const[^const]<div id="class_packedbytearray_method_size"></div>

Returns the number of elements in the array.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_packedbytearray_method_slice"></div>

[`PackedByteArray`](class_packedbytearray.md) **slice** ( begin: [`int`](class_int.md), end: [`int`](class_int.md) = 2147483647 ) const[^const]<div id="class_packedbytearray_method_slice"></div>

Returns the slice of the **PackedByteArray**, from `begin` (inclusive) to `end` (exclusive), as a new **PackedByteArray**.

The absolute value of `begin` and `end` will be clamped to the array size, so the default value for `end` makes it slice to the size of the array by default (i.e. `arr.slice(1)` is a shorthand for `arr.slice(1, arr.size())`).

If either `begin` or `end` are negative, they will be relative to the end of the array (i.e. `arr.slice(0, -2)` is a shorthand for `arr.slice(0, arr.size() - 2)`).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_packedbytearray_method_sort"></div>

`void` **sort** ( )<div id="class_packedbytearray_method_sort"></div>

Sorts the elements of the array in ascending order.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_packedbytearray_method_to_float32_array"></div>

[`PackedFloat32Array`](class_packedfloat32array.md) **to_float32_array** ( ) const[^const]<div id="class_packedbytearray_method_to_float32_array"></div>

Returns a copy of the data converted to a [`PackedFloat32Array`](class_packedfloat32array.md), where each block of 4 bytes has been converted to a 32-bit float (C++ `float`).

The size of the input array must be a multiple of 4 (size of 32-bit float). The size of the new array will be `byte_array.size() / 4`.

If the original data can't be converted to 32-bit floats, the resulting data is undefined.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_packedbytearray_method_to_float64_array"></div>

[`PackedFloat64Array`](class_packedfloat64array.md) **to_float64_array** ( ) const[^const]<div id="class_packedbytearray_method_to_float64_array"></div>

Returns a copy of the data converted to a [`PackedFloat64Array`](class_packedfloat64array.md), where each block of 8 bytes has been converted to a 64-bit float (C++ `double`, Godot [`float`](class_float.md)).

The size of the input array must be a multiple of 8 (size of 64-bit double). The size of the new array will be `byte_array.size() / 8`.

If the original data can't be converted to 64-bit floats, the resulting data is undefined.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_packedbytearray_method_to_int32_array"></div>

[`PackedInt32Array`](class_packedint32array.md) **to_int32_array** ( ) const[^const]<div id="class_packedbytearray_method_to_int32_array"></div>

Returns a copy of the data converted to a [`PackedInt32Array`](class_packedint32array.md), where each block of 4 bytes has been converted to a signed 32-bit integer (C++ `int32_t`).

The size of the input array must be a multiple of 4 (size of 32-bit integer). The size of the new array will be `byte_array.size() / 4`.

If the original data can't be converted to signed 32-bit integers, the resulting data is undefined.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_packedbytearray_method_to_int64_array"></div>

[`PackedInt64Array`](class_packedint64array.md) **to_int64_array** ( ) const[^const]<div id="class_packedbytearray_method_to_int64_array"></div>

Returns a copy of the data converted to a [`PackedInt64Array`](class_packedint64array.md), where each block of 8 bytes has been converted to a signed 64-bit integer (C++ `int64_t`, Godot [`int`](class_int.md)).

The size of the input array must be a multiple of 8 (size of 64-bit integer). The size of the new array will be `byte_array.size() / 8`.

If the original data can't be converted to signed 64-bit integers, the resulting data is undefined.

<!-- rst-class:: classref-section-separator -->

---

## 运算符说明

<div id="_class_packedbytearray_operator_neq_packedbytearray"></div>

[`bool`](class_bool.md) **operator !=** ( right: [`PackedByteArray`](class_packedbytearray.md) ) <div id="class_packedbytearray_operator_neq_packedbytearray"></div>

Returns `true` if contents of the arrays differ.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_packedbytearray_operator_sum_packedbytearray"></div>

[`PackedByteArray`](class_packedbytearray.md) **operator +** ( right: [`PackedByteArray`](class_packedbytearray.md) ) <div id="class_packedbytearray_operator_sum_packedbytearray"></div>

Returns a new **PackedByteArray** with contents of `right` added at the end of this array. For better performance, consider using [`append_array`](class_packedbytearray.md#class_packedbytearray_method_append_array) instead.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_packedbytearray_operator_eq_packedbytearray"></div>

[`bool`](class_bool.md) **operator ==** ( right: [`PackedByteArray`](class_packedbytearray.md) ) <div id="class_packedbytearray_operator_eq_packedbytearray"></div>

Returns `true` if contents of both arrays are the same, i.e. they have all equal bytes at the corresponding indices.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_packedbytearray_operator_idx_int"></div>

[`int`](class_int.md) **operator []** ( index: [`int`](class_int.md) ) <div id="class_packedbytearray_operator_idx_int"></div>

Returns the byte at index `index`. Negative indices can be used to access the elements starting from the end. Using index out of array's bounds will result in an error.

Note that the byte is returned as a 64-bit [`int`](class_int.md).

[^virtual]: 本方法通常需要用户覆盖才能生效。
[^const]: 本方法无副作用，不会修改该实例的任何成员变量。
[^vararg]: 本方法除了能接受在此处描述的参数外，还能够继续接受任意数量的参数。
[^constructor]: 本方法用于构造某个类型。
[^static]: 调用本方法无需实例，可直接使用类名进行调用。
[^operator]: 本方法描述的是使用本类型作为左操作数的有效运算符。
[^bitfield]: 这个值是由下列位标志构成位掩码的整数。
[^void]: 无返回值。
