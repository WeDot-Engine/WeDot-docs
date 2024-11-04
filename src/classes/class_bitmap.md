<!-- ⚠ 请勿编辑本文件 ⚠ -->
<!-- 本文档使用脚本从 WeDot 引擎源码仓库生成。 -->
<!-- 生成脚本：https://github.com/WeDot-Engine/WeDot/tree/4.3/doc/tools/make_md.py； -->
<!-- 原文件：https://github.com/WeDot-Engine/WeDot/tree/4.3/doc/classes/BitMap.xml。 -->

<div id="_class_bitmap"></div>

# BitMap

**继承：** [`Resource`](class_resource.md) **<** [`RefCounted`](class_refcounted.md) **<** [`Object`](class_object.md)

Boolean matrix.

## 描述

A two-dimensional array of boolean values, can be used to efficiently store a binary matrix (every matrix element takes only one bit) and query the values using natural cartesian coordinates.

## 方法

| [`Image`](class_image.md)                                                   | [`convert_to_image`](#class_bitmap_method_convert_to_image) ( ) const[^const]                                                                                 |
| `void`                                                                      | [`create`](#class_bitmap_method_create) ( size: [`Vector2i`](class_vector2i.md) )                                                                             |
| `void`                                                                      | [`create_from_image_alpha`](#class_bitmap_method_create_from_image_alpha) ( image: [`Image`](class_image.md), threshold: [`float`](class_float.md) = 0.1 )    |
| [`bool`](class_bool.md)                                                     | [`get_bit`](#class_bitmap_method_get_bit) ( x: [`int`](class_int.md), y: [`int`](class_int.md) ) const[^const]                                                |
| [`bool`](class_bool.md)                                                     | [`get_bitv`](#class_bitmap_method_get_bitv) ( position: [`Vector2i`](class_vector2i.md) ) const[^const]                                                       |
| [`Vector2i`](class_vector2i.md)                                             | [`get_size`](#class_bitmap_method_get_size) ( ) const[^const]                                                                                                 |
| [`int`](class_int.md)                                                       | [`get_true_bit_count`](#class_bitmap_method_get_true_bit_count) ( ) const[^const]                                                                             |
| `void`                                                                      | [`grow_mask`](#class_bitmap_method_grow_mask) ( pixels: [`int`](class_int.md), rect: [`Rect2i`](class_rect2i.md) )                                            |
| [Array](class_array.md) [`PackedVector2Array`](class_packedvector2array.md) | [`opaque_to_polygons`](#class_bitmap_method_opaque_to_polygons) ( rect: [`Rect2i`](class_rect2i.md), epsilon: [`float`](class_float.md) = 2.0 ) const[^const] |
| `void`                                                                      | [`resize`](#class_bitmap_method_resize) ( new_size: [`Vector2i`](class_vector2i.md) )                                                                         |
| `void`                                                                      | [`set_bit`](#class_bitmap_method_set_bit) ( x: [`int`](class_int.md), y: [`int`](class_int.md), bit: [`bool`](class_bool.md) )                                |
| `void`                                                                      | [`set_bit_rect`](#class_bitmap_method_set_bit_rect) ( rect: [`Rect2i`](class_rect2i.md), bit: [`bool`](class_bool.md) )                                       |
| `void`                                                                      | [`set_bitv`](#class_bitmap_method_set_bitv) ( position: [`Vector2i`](class_vector2i.md), bit: [`bool`](class_bool.md) )                                       |

<!-- rst-class:: classref-section-separator -->

---

## 方法说明

<div id="_class_bitmap_method_convert_to_image"></div>

[`Image`](class_image.md) **convert_to_image** ( ) const[^const]<div id="class_bitmap_method_convert_to_image"></div>

Returns an image of the same size as the bitmap and with a [Format](#enum_image_format) of type [`Image.FORMAT_L8`](#class_image_constant_format_l8). `true` bits of the bitmap are being converted into white pixels, and `false` bits into black.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_bitmap_method_create"></div>

`void` **create** ( size: [`Vector2i`](class_vector2i.md) )<div id="class_bitmap_method_create"></div>

Creates a bitmap with the specified size, filled with `false`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_bitmap_method_create_from_image_alpha"></div>

`void` **create_from_image_alpha** ( image: [`Image`](class_image.md), threshold: [`float`](class_float.md) = 0.1 )<div id="class_bitmap_method_create_from_image_alpha"></div>

Creates a bitmap that matches the given image dimensions, every element of the bitmap is set to `false` if the alpha value of the image at that position is equal to `threshold` or less, and `true` in other case.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_bitmap_method_get_bit"></div>

[`bool`](class_bool.md) **get_bit** ( x: [`int`](class_int.md), y: [`int`](class_int.md) ) const[^const]<div id="class_bitmap_method_get_bit"></div>

Returns bitmap's value at the specified position.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_bitmap_method_get_bitv"></div>

[`bool`](class_bool.md) **get_bitv** ( position: [`Vector2i`](class_vector2i.md) ) const[^const]<div id="class_bitmap_method_get_bitv"></div>

Returns bitmap's value at the specified position.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_bitmap_method_get_size"></div>

[`Vector2i`](class_vector2i.md) **get_size** ( ) const[^const]<div id="class_bitmap_method_get_size"></div>

Returns bitmap's dimensions.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_bitmap_method_get_true_bit_count"></div>

[`int`](class_int.md) **get_true_bit_count** ( ) const[^const]<div id="class_bitmap_method_get_true_bit_count"></div>

Returns the number of bitmap elements that are set to `true`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_bitmap_method_grow_mask"></div>

`void` **grow_mask** ( pixels: [`int`](class_int.md), rect: [`Rect2i`](class_rect2i.md) )<div id="class_bitmap_method_grow_mask"></div>

Applies morphological dilation or erosion to the bitmap. If `pixels` is positive, dilation is applied to the bitmap. If `pixels` is negative, erosion is applied to the bitmap. `rect` defines the area where the morphological operation is applied. Pixels located outside the `rect` are unaffected by [`grow_mask`](#class_bitmap_method_grow_mask).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_bitmap_method_opaque_to_polygons"></div>

[Array](class_array.md) [`PackedVector2Array`](class_packedvector2array.md) **opaque_to_polygons** ( rect: [`Rect2i`](class_rect2i.md), epsilon: [`float`](class_float.md) = 2.0 ) const[^const]<div id="class_bitmap_method_opaque_to_polygons"></div>

Creates an [`Array`](class_array.md) of polygons covering a rectangular portion of the bitmap. It uses a marching squares algorithm, followed by Ramer-Douglas-Peucker (RDP) reduction of the number of vertices. Each polygon is described as a [`PackedVector2Array`](class_packedvector2array.md) of its vertices.

To get polygons covering the whole bitmap, pass:

```

    Rect2(Vector2(), get_size())
```

 `epsilon` is passed to RDP to control how accurately the polygons cover the bitmap: a lower `epsilon` corresponds to more points in the polygons.



<!-- rst-class:: classref-item-separator -->

---

<div id="_class_bitmap_method_resize"></div>

`void` **resize** ( new_size: [`Vector2i`](class_vector2i.md) )<div id="class_bitmap_method_resize"></div>

Resizes the image to `new_size`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_bitmap_method_set_bit"></div>

`void` **set_bit** ( x: [`int`](class_int.md), y: [`int`](class_int.md), bit: [`bool`](class_bool.md) )<div id="class_bitmap_method_set_bit"></div>

Sets the bitmap's element at the specified position, to the specified value.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_bitmap_method_set_bit_rect"></div>

`void` **set_bit_rect** ( rect: [`Rect2i`](class_rect2i.md), bit: [`bool`](class_bool.md) )<div id="class_bitmap_method_set_bit_rect"></div>

Sets a rectangular portion of the bitmap to the specified value.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_bitmap_method_set_bitv"></div>

`void` **set_bitv** ( position: [`Vector2i`](class_vector2i.md), bit: [`bool`](class_bool.md) )<div id="class_bitmap_method_set_bitv"></div>

Sets the bitmap's element at the specified position, to the specified value.

[^virtual]: 本方法通常需要用户覆盖才能生效。
[^const]: 本方法无副作用，不会修改该实例的任何成员变量。
[^vararg]: 本方法除了能接受在此处描述的参数外，还能够继续接受任意数量的参数。
[^constructor]: 本方法用于构造某个类型。
[^static]: 调用本方法无需实例，可直接使用类名进行调用。
[^operator]: 本方法描述的是使用本类型作为左操作数的有效运算符。
[^bitfield]: 这个值是由下列位标志构成位掩码的整数。
[^void]: 无返回值。
