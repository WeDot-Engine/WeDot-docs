<!-- ⚠ 请勿编辑本文件 ⚠ -->
<!-- 本文档使用脚本从 WeDot 引擎源码仓库生成。 -->
<!-- 生成脚本：https://github.com/WeDot-Engine/WeDot/tree/master/doc/tools/make_md.py； -->
<!-- 原文件：https://github.com/WeDot-Engine/WeDot/tree/master/modules/noise/doc_classes/Noise.xml。 -->

<div id="_class_noise"></div>

# Noise

**继承：** [`Resource`](class_resource.md) **<** [`RefCounted`](class_refcounted.md) **<** [`Object`](class_object.md)

**派生：** [`FastNoiseLite`](class_fastnoiselite.md)

Abstract base class for noise generators.

## 描述

This class defines the interface for noise generation libraries to inherit from.

A default [`get_seamless_image`](class_noise.md#class_noise_method_get_seamless_image) implementation is provided for libraries that do not provide seamless noise. This function requests a larger image from the [`get_image`](class_noise.md#class_noise_method_get_image) method, reverses the quadrants of the image, then uses the strips of extra width to blend over the seams.

Inheriting noise classes can optionally override this function to provide a more optimal algorithm.

## 方法

|||
|:-:|:--|
| [`Image`](class_image.md)                         | [`get_image`](class_noise.md#class_noise_method_get_image) ( width: [`int`](class_int.md), height: [`int`](class_int.md), invert: [`bool`](class_bool.md) = false, in_3d_space: [`bool`](class_bool.md) = false, normalize: [`bool`](class_bool.md) = true ) const[^const]                                                           |
| [Array](class_array.md) [`Image`](class_image.md) | [`get_image_3d`](class_noise.md#class_noise_method_get_image_3d) ( width: [`int`](class_int.md), height: [`int`](class_int.md), depth: [`int`](class_int.md), invert: [`bool`](class_bool.md) = false, normalize: [`bool`](class_bool.md) = true ) const[^const]                                                                     |
| [`float`](class_float.md)                         | [`get_noise_1d`](class_noise.md#class_noise_method_get_noise_1d) ( x: [`float`](class_float.md) ) const[^const]                                                                                                                                                                                                                      |
| [`float`](class_float.md)                         | [`get_noise_2d`](class_noise.md#class_noise_method_get_noise_2d) ( x: [`float`](class_float.md), y: [`float`](class_float.md) ) const[^const]                                                                                                                                                                                        |
| [`float`](class_float.md)                         | [`get_noise_2dv`](class_noise.md#class_noise_method_get_noise_2dv) ( v: [`Vector2`](class_vector2.md) ) const[^const]                                                                                                                                                                                                                |
| [`float`](class_float.md)                         | [`get_noise_3d`](class_noise.md#class_noise_method_get_noise_3d) ( x: [`float`](class_float.md), y: [`float`](class_float.md), z: [`float`](class_float.md) ) const[^const]                                                                                                                                                          |
| [`float`](class_float.md)                         | [`get_noise_3dv`](class_noise.md#class_noise_method_get_noise_3dv) ( v: [`Vector3`](class_vector3.md) ) const[^const]                                                                                                                                                                                                                |
| [`Image`](class_image.md)                         | [`get_seamless_image`](class_noise.md#class_noise_method_get_seamless_image) ( width: [`int`](class_int.md), height: [`int`](class_int.md), invert: [`bool`](class_bool.md) = false, in_3d_space: [`bool`](class_bool.md) = false, skirt: [`float`](class_float.md) = 0.1, normalize: [`bool`](class_bool.md) = true ) const[^const] |
| [Array](class_array.md) [`Image`](class_image.md) | [`get_seamless_image_3d`](class_noise.md#class_noise_method_get_seamless_image_3d) ( width: [`int`](class_int.md), height: [`int`](class_int.md), depth: [`int`](class_int.md), invert: [`bool`](class_bool.md) = false, skirt: [`float`](class_float.md) = 0.1, normalize: [`bool`](class_bool.md) = true ) const[^const]           |

<!-- rst-class:: classref-section-separator -->

---

## 方法说明

<div id="_class_noise_method_get_image"></div>

[`Image`](class_image.md) **get_image** ( width: [`int`](class_int.md), height: [`int`](class_int.md), invert: [`bool`](class_bool.md) = false, in_3d_space: [`bool`](class_bool.md) = false, normalize: [`bool`](class_bool.md) = true ) const[^const]<div id="class_noise_method_get_image"></div>

Returns an [`Image`](class_image.md) containing 2D noise values.

 **Note:** With `normalize` set to `false`, the default implementation expects the noise generator to return values in the range `-1.0` to `1.0`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_noise_method_get_image_3d"></div>

[Array](class_array.md) [`Image`](class_image.md) **get_image_3d** ( width: [`int`](class_int.md), height: [`int`](class_int.md), depth: [`int`](class_int.md), invert: [`bool`](class_bool.md) = false, normalize: [`bool`](class_bool.md) = true ) const[^const]<div id="class_noise_method_get_image_3d"></div>

Returns an [`Array`](class_array.md) of [`Image`](class_image.md) s containing 3D noise values for use with [`ImageTexture3D.create`](class_imagetexture3d.md#class_imagetexture3d_method_create).

 **Note:** With `normalize` set to `false`, the default implementation expects the noise generator to return values in the range `-1.0` to `1.0`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_noise_method_get_noise_1d"></div>

[`float`](class_float.md) **get_noise_1d** ( x: [`float`](class_float.md) ) const[^const]<div id="class_noise_method_get_noise_1d"></div>

Returns the 1D noise value at the given (x) coordinate.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_noise_method_get_noise_2d"></div>

[`float`](class_float.md) **get_noise_2d** ( x: [`float`](class_float.md), y: [`float`](class_float.md) ) const[^const]<div id="class_noise_method_get_noise_2d"></div>

Returns the 2D noise value at the given position.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_noise_method_get_noise_2dv"></div>

[`float`](class_float.md) **get_noise_2dv** ( v: [`Vector2`](class_vector2.md) ) const[^const]<div id="class_noise_method_get_noise_2dv"></div>

Returns the 2D noise value at the given position.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_noise_method_get_noise_3d"></div>

[`float`](class_float.md) **get_noise_3d** ( x: [`float`](class_float.md), y: [`float`](class_float.md), z: [`float`](class_float.md) ) const[^const]<div id="class_noise_method_get_noise_3d"></div>

Returns the 3D noise value at the given position.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_noise_method_get_noise_3dv"></div>

[`float`](class_float.md) **get_noise_3dv** ( v: [`Vector3`](class_vector3.md) ) const[^const]<div id="class_noise_method_get_noise_3dv"></div>

Returns the 3D noise value at the given position.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_noise_method_get_seamless_image"></div>

[`Image`](class_image.md) **get_seamless_image** ( width: [`int`](class_int.md), height: [`int`](class_int.md), invert: [`bool`](class_bool.md) = false, in_3d_space: [`bool`](class_bool.md) = false, skirt: [`float`](class_float.md) = 0.1, normalize: [`bool`](class_bool.md) = true ) const[^const]<div id="class_noise_method_get_seamless_image"></div>

Returns an [`Image`](class_image.md) containing seamless 2D noise values.

 **Note:** With `normalize` set to `false`, the default implementation expects the noise generator to return values in the range `-1.0` to `1.0`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_noise_method_get_seamless_image_3d"></div>

[Array](class_array.md) [`Image`](class_image.md) **get_seamless_image_3d** ( width: [`int`](class_int.md), height: [`int`](class_int.md), depth: [`int`](class_int.md), invert: [`bool`](class_bool.md) = false, skirt: [`float`](class_float.md) = 0.1, normalize: [`bool`](class_bool.md) = true ) const[^const]<div id="class_noise_method_get_seamless_image_3d"></div>

Returns an [`Array`](class_array.md) of [`Image`](class_image.md) s containing seamless 3D noise values for use with [`ImageTexture3D.create`](class_imagetexture3d.md#class_imagetexture3d_method_create).

 **Note:** With `normalize` set to `false`, the default implementation expects the noise generator to return values in the range `-1.0` to `1.0`.

[^virtual]: 本方法通常需要用户覆盖才能生效。
[^const]: 本方法无副作用，不会修改该实例的任何成员变量。
[^vararg]: 本方法除了能接受在此处描述的参数外，还能够继续接受任意数量的参数。
[^constructor]: 本方法用于构造某个类型。
[^static]: 调用本方法无需实例，可直接使用类名进行调用。
[^operator]: 本方法描述的是使用本类型作为左操作数的有效运算符。
[^bitfield]: 这个值是由下列位标志构成位掩码的整数。
[^void]: 无返回值。
