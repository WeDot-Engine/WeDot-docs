<!-- ⚠ 请勿编辑本文件 ⚠ -->
<!-- 本文档使用脚本从 WeDot 引擎源码仓库生成。 -->
<!-- 生成脚本：https://github.com/WeDot-Engine/WeDot/tree/4.3/doc/tools/make_md.py； -->
<!-- 原文件：https://github.com/WeDot-Engine/WeDot/tree/4.3/doc/classes/PackedColorArray.xml。 -->

<div id="_class_packedcolorarray"></div>

# PackedColorArray

A packed array of [`Color`](class_color.md) s.

## 描述

An array specifically designed to hold [`Color`](class_color.md). Packs data tightly, so it saves memory for large array sizes.

 **Differences between packed arrays, typed arrays, and untyped arrays:** Packed arrays are generally faster to iterate on and modify compared to a typed array of the same type (e.g. **PackedColorArray** versus `Array[Color]`). Also, packed arrays consume less memory. As a downside, packed arrays are less flexible as they don't offer as many convenience methods such as [`Array.map`](#class_array_method_map). Typed arrays are in turn faster to iterate on and modify than untyped arrays.

 **Note:** Packed arrays are always passed by reference. To get a copy of an array that can be modified independently of the original array, use [`duplicate`](#class_packedcolorarray_method_duplicate). This is *not* the case for built-in properties and methods. The returned packed array of these are a copies, and changing it will *not* affect the original value. To update a built-in property you need to modify the returned array, and then assign it to the property again.

通过 C# 使用该 API 时会有显著不同，详见 :ref:`doc_c_sharp_differences`\ 。

## 构造函数

|||
|:-:|:--|
| [`PackedColorArray`](class_packedcolorarray.md) | [`PackedColorArray`](class_packedcolorarray.md#class_packedcolorarray_constructor_packedcolorarray) ( )                                                       |
| [`PackedColorArray`](class_packedcolorarray.md) | [`PackedColorArray`](class_packedcolorarray.md#class_packedcolorarray_constructor_packedcolorarray) ( from: [`PackedColorArray`](class_packedcolorarray.md) ) |
| [`PackedColorArray`](class_packedcolorarray.md) | [`PackedColorArray`](class_packedcolorarray.md#class_packedcolorarray_constructor_packedcolorarray) ( from: [`Array`](class_array.md) )                       |

## 方法

|||
|:-:|:--|
| [`bool`](class_bool.md)                         | [`append`](class_packedcolorarraymd#class_packedcolorarray_method_append) ( value: [`Color`](class_color.md) )                                                  |
| `void`                                          | [`append_array`](class_packedcolorarraymd#class_packedcolorarray_method_append_array) ( array: [`PackedColorArray`](class_packedcolorarray.md) )                |
| [`int`](class_int.md)                           | [`bsearch`](class_packedcolorarraymd#class_packedcolorarray_method_bsearch) ( value: [`Color`](class_color.md), before: [`bool`](class_bool.md) = true )        |
| `void`                                          | [`clear`](class_packedcolorarraymd#class_packedcolorarray_method_clear) ( )                                                                                     |
| [`int`](class_int.md)                           | [`count`](class_packedcolorarraymd#class_packedcolorarray_method_count) ( value: [`Color`](class_color.md) ) const[^const]                                      |
| [`PackedColorArray`](class_packedcolorarray.md) | [`duplicate`](class_packedcolorarraymd#class_packedcolorarray_method_duplicate) ( )                                                                             |
| `void`                                          | [`fill`](class_packedcolorarraymd#class_packedcolorarray_method_fill) ( value: [`Color`](class_color.md) )                                                      |
| [`int`](class_int.md)                           | [`find`](class_packedcolorarraymd#class_packedcolorarray_method_find) ( value: [`Color`](class_color.md), from: [`int`](class_int.md) = 0 ) const[^const]       |
| [`bool`](class_bool.md)                         | [`has`](class_packedcolorarraymd#class_packedcolorarray_method_has) ( value: [`Color`](class_color.md) ) const[^const]                                          |
| [`int`](class_int.md)                           | [`insert`](class_packedcolorarraymd#class_packedcolorarray_method_insert) ( at_index: [`int`](class_int.md), value: [`Color`](class_color.md) )                 |
| [`bool`](class_bool.md)                         | [`is_empty`](class_packedcolorarraymd#class_packedcolorarray_method_is_empty) ( ) const[^const]                                                                 |
| [`bool`](class_bool.md)                         | [`push_back`](class_packedcolorarraymd#class_packedcolorarray_method_push_back) ( value: [`Color`](class_color.md) )                                            |
| `void`                                          | [`remove_at`](class_packedcolorarraymd#class_packedcolorarray_method_remove_at) ( index: [`int`](class_int.md) )                                                |
| [`int`](class_int.md)                           | [`resize`](class_packedcolorarraymd#class_packedcolorarray_method_resize) ( new_size: [`int`](class_int.md) )                                                   |
| `void`                                          | [`reverse`](class_packedcolorarraymd#class_packedcolorarray_method_reverse) ( )                                                                                 |
| [`int`](class_int.md)                           | [`rfind`](class_packedcolorarraymd#class_packedcolorarray_method_rfind) ( value: [`Color`](class_color.md), from: [`int`](class_int.md) = -1 ) const[^const]    |
| `void`                                          | [`set`](class_packedcolorarraymd#class_packedcolorarray_method_set) ( index: [`int`](class_int.md), value: [`Color`](class_color.md) )                          |
| [`int`](class_int.md)                           | [`size`](class_packedcolorarraymd#class_packedcolorarray_method_size) ( ) const[^const]                                                                         |
| [`PackedColorArray`](class_packedcolorarray.md) | [`slice`](class_packedcolorarraymd#class_packedcolorarray_method_slice) ( begin: [`int`](class_int.md), end: [`int`](class_int.md) = 2147483647 ) const[^const] |
| `void`                                          | [`sort`](class_packedcolorarraymd#class_packedcolorarray_method_sort) ( )                                                                                       |
| [`PackedByteArray`](class_packedbytearray.md)   | [`to_byte_array`](class_packedcolorarraymd#class_packedcolorarray_method_to_byte_array) ( ) const[^const]                                                       |

## 运算符

|||
|:-:|:--|
| [`bool`](class_bool.md)                         | [`operator !=`](class_PackedColorArray.md#operator_neq_PackedColorArray) ( right: [`PackedColorArray`](class_packedcolorarray.md) ) |
| [`PackedColorArray`](class_packedcolorarray.md) | [`operator +`](class_PackedColorArray.md#operator_sum_PackedColorArray) ( right: [`PackedColorArray`](class_packedcolorarray.md) )  |
| [`bool`](class_bool.md)                         | [`operator ==`](class_PackedColorArray.md#operator_eq_PackedColorArray) ( right: [`PackedColorArray`](class_packedcolorarray.md) )  |
| [`Color`](class_color.md)                       | [`operator []`](class_PackedColorArray.md#operator_idx_int) ( index: [`int`](class_int.md) )                                        |

<!-- rst-class:: classref-section-separator -->

---

## 构造函数说明

<div id="_class_packedcolorarray_constructor_packedcolorarray"></div>

[`PackedColorArray`](class_packedcolorarray.md) **PackedColorArray** ( )<div id="class_packedcolorarray_constructor_packedcolorarray"></div>

Constructs an empty **PackedColorArray**.

<!-- rst-class:: classref-item-separator -->

---

[`PackedColorArray`](class_packedcolorarray.md) **PackedColorArray** ( from: [`PackedColorArray`](class_packedcolorarray.md) )

Constructs a **PackedColorArray** as a copy of the given **PackedColorArray**.

<!-- rst-class:: classref-item-separator -->

---

[`PackedColorArray`](class_packedcolorarray.md) **PackedColorArray** ( from: [`Array`](class_array.md) )

Constructs a new **PackedColorArray**. Optionally, you can pass in a generic [`Array`](class_array.md) that will be converted.

 **Note:** When initializing a **PackedColorArray** with elements, it must be initialized with an [`Array`](class_array.md) of [`Color`](class_color.md) values:

```

    var array = PackedColorArray([Color(0.1, 0.2, 0.3), Color(0.4, 0.5, 0.6)])
```



<!-- rst-class:: classref-section-separator -->

---

## 方法说明

<div id="_class_packedcolorarray_method_append"></div>

[`bool`](class_bool.md) **append** ( value: [`Color`](class_color.md) )<div id="class_packedcolorarray_method_append"></div>

Appends an element at the end of the array (alias of [`push_back`](#class_packedcolorarray_method_push_back)).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_packedcolorarray_method_append_array"></div>

`void` **append_array** ( array: [`PackedColorArray`](class_packedcolorarray.md) )<div id="class_packedcolorarray_method_append_array"></div>

Appends a **PackedColorArray** at the end of this array.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_packedcolorarray_method_bsearch"></div>

[`int`](class_int.md) **bsearch** ( value: [`Color`](class_color.md), before: [`bool`](class_bool.md) = true )<div id="class_packedcolorarray_method_bsearch"></div>

Finds the index of an existing value (or the insertion index that maintains sorting order, if the value is not yet present in the array) using binary search. Optionally, a `before` specifier can be passed. If `false`, the returned index comes after all existing entries of the value in the array.

 **Note:** Calling [`bsearch`](#class_packedcolorarray_method_bsearch) on an unsorted array results in unexpected behavior.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_packedcolorarray_method_clear"></div>

`void` **clear** ( )<div id="class_packedcolorarray_method_clear"></div>

Clears the array. This is equivalent to using [`resize`](#class_packedcolorarray_method_resize) with a size of `0`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_packedcolorarray_method_count"></div>

[`int`](class_int.md) **count** ( value: [`Color`](class_color.md) ) const[^const]<div id="class_packedcolorarray_method_count"></div>

Returns the number of times an element is in the array.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_packedcolorarray_method_duplicate"></div>

[`PackedColorArray`](class_packedcolorarray.md) **duplicate** ( )<div id="class_packedcolorarray_method_duplicate"></div>

Creates a copy of the array, and returns it.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_packedcolorarray_method_fill"></div>

`void` **fill** ( value: [`Color`](class_color.md) )<div id="class_packedcolorarray_method_fill"></div>

Assigns the given value to all elements in the array. This can typically be used together with [`resize`](#class_packedcolorarray_method_resize) to create an array with a given size and initialized elements.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_packedcolorarray_method_find"></div>

[`int`](class_int.md) **find** ( value: [`Color`](class_color.md), from: [`int`](class_int.md) = 0 ) const[^const]<div id="class_packedcolorarray_method_find"></div>

Searches the array for a value and returns its index or `-1` if not found. Optionally, the initial search index can be passed.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_packedcolorarray_method_has"></div>

[`bool`](class_bool.md) **has** ( value: [`Color`](class_color.md) ) const[^const]<div id="class_packedcolorarray_method_has"></div>

Returns `true` if the array contains `value`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_packedcolorarray_method_insert"></div>

[`int`](class_int.md) **insert** ( at_index: [`int`](class_int.md), value: [`Color`](class_color.md) )<div id="class_packedcolorarray_method_insert"></div>

Inserts a new element at a given position in the array. The position must be valid, or at the end of the array (`idx == size()`).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_packedcolorarray_method_is_empty"></div>

[`bool`](class_bool.md) **is_empty** ( ) const[^const]<div id="class_packedcolorarray_method_is_empty"></div>

Returns `true` if the array is empty.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_packedcolorarray_method_push_back"></div>

[`bool`](class_bool.md) **push_back** ( value: [`Color`](class_color.md) )<div id="class_packedcolorarray_method_push_back"></div>

Appends a value to the array.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_packedcolorarray_method_remove_at"></div>

`void` **remove_at** ( index: [`int`](class_int.md) )<div id="class_packedcolorarray_method_remove_at"></div>

Removes an element from the array by index.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_packedcolorarray_method_resize"></div>

[`int`](class_int.md) **resize** ( new_size: [`int`](class_int.md) )<div id="class_packedcolorarray_method_resize"></div>

Sets the size of the array. If the array is grown, reserves elements at the end of the array. If the array is shrunk, truncates the array to the new size. Calling [`resize`](#class_packedcolorarray_method_resize) once and assigning the new values is faster than adding new elements one by one.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_packedcolorarray_method_reverse"></div>

`void` **reverse** ( )<div id="class_packedcolorarray_method_reverse"></div>

Reverses the order of the elements in the array.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_packedcolorarray_method_rfind"></div>

[`int`](class_int.md) **rfind** ( value: [`Color`](class_color.md), from: [`int`](class_int.md) = -1 ) const[^const]<div id="class_packedcolorarray_method_rfind"></div>

Searches the array in reverse order. Optionally, a start search index can be passed. If negative, the start index is considered relative to the end of the array.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_packedcolorarray_method_set"></div>

`void` **set** ( index: [`int`](class_int.md), value: [`Color`](class_color.md) )<div id="class_packedcolorarray_method_set"></div>

Changes the [`Color`](class_color.md) at the given index.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_packedcolorarray_method_size"></div>

[`int`](class_int.md) **size** ( ) const[^const]<div id="class_packedcolorarray_method_size"></div>

Returns the number of elements in the array.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_packedcolorarray_method_slice"></div>

[`PackedColorArray`](class_packedcolorarray.md) **slice** ( begin: [`int`](class_int.md), end: [`int`](class_int.md) = 2147483647 ) const[^const]<div id="class_packedcolorarray_method_slice"></div>

Returns the slice of the **PackedColorArray**, from `begin` (inclusive) to `end` (exclusive), as a new **PackedColorArray**.

The absolute value of `begin` and `end` will be clamped to the array size, so the default value for `end` makes it slice to the size of the array by default (i.e. `arr.slice(1)` is a shorthand for `arr.slice(1, arr.size())`).

If either `begin` or `end` are negative, they will be relative to the end of the array (i.e. `arr.slice(0, -2)` is a shorthand for `arr.slice(0, arr.size() - 2)`).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_packedcolorarray_method_sort"></div>

`void` **sort** ( )<div id="class_packedcolorarray_method_sort"></div>

Sorts the elements of the array in ascending order.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_packedcolorarray_method_to_byte_array"></div>

[`PackedByteArray`](class_packedbytearray.md) **to_byte_array** ( ) const[^const]<div id="class_packedcolorarray_method_to_byte_array"></div>

Returns a [`PackedByteArray`](class_packedbytearray.md) with each color encoded as bytes.

<!-- rst-class:: classref-section-separator -->

---

## 运算符说明

<div id="_class_packedcolorarray_operator_neq_packedcolorarray"></div>

[`bool`](class_bool.md) **operator !=** ( right: [`PackedColorArray`](class_packedcolorarray.md) ) <div id="class_packedcolorarray_operator_neq_packedcolorarray"></div>

Returns `true` if contents of the arrays differ.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_packedcolorarray_operator_sum_packedcolorarray"></div>

[`PackedColorArray`](class_packedcolorarray.md) **operator +** ( right: [`PackedColorArray`](class_packedcolorarray.md) ) <div id="class_packedcolorarray_operator_sum_packedcolorarray"></div>

Returns a new **PackedColorArray** with contents of `right` added at the end of this array. For better performance, consider using [`append_array`](#class_packedcolorarray_method_append_array) instead.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_packedcolorarray_operator_eq_packedcolorarray"></div>

[`bool`](class_bool.md) **operator ==** ( right: [`PackedColorArray`](class_packedcolorarray.md) ) <div id="class_packedcolorarray_operator_eq_packedcolorarray"></div>

Returns `true` if contents of both arrays are the same, i.e. they have all equal [`Color`](class_color.md) s at the corresponding indices.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_packedcolorarray_operator_idx_int"></div>

[`Color`](class_color.md) **operator []** ( index: [`int`](class_int.md) ) <div id="class_packedcolorarray_operator_idx_int"></div>

Returns the [`Color`](class_color.md) at index `index`. Negative indices can be used to access the elements starting from the end. Using index out of array's bounds will result in an error.

[^virtual]: 本方法通常需要用户覆盖才能生效。
[^const]: 本方法无副作用，不会修改该实例的任何成员变量。
[^vararg]: 本方法除了能接受在此处描述的参数外，还能够继续接受任意数量的参数。
[^constructor]: 本方法用于构造某个类型。
[^static]: 调用本方法无需实例，可直接使用类名进行调用。
[^operator]: 本方法描述的是使用本类型作为左操作数的有效运算符。
[^bitfield]: 这个值是由下列位标志构成位掩码的整数。
[^void]: 无返回值。
