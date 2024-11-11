<!-- ⚠ 请勿编辑本文件 ⚠ -->
<!-- 本文档使用脚本从 WeDot 引擎源码仓库生成。 -->
<!-- 生成脚本：https://github.com/WeDot-Engine/WeDot/tree/master/doc/tools/make_md.py； -->
<!-- 原文件：https://github.com/WeDot-Engine/WeDot/tree/master/doc/classes/CameraFeed.xml。 -->

<div id="_class_camerafeed"></div>

# CameraFeed

**继承：** [`RefCounted`](class_refcounted.md) **<** [`Object`](class_object.md)

A camera feed gives you access to a single physical camera attached to your device.

## 描述

A camera feed gives you access to a single physical camera attached to your device. When enabled, Godot will start capturing frames from the camera which can then be used. See also [`CameraServer`](class_cameraserver.md).

 **Note:** Many cameras will return YCbCr images which are split into two textures and need to be combined in a shader. Godot does this automatically for you if you set the environment to show the camera image in the background.

## 属性

|||
|:-:|:--|
| [`bool`](class_bool.md)               | [`feed_is_active`](class_camerafeed.md#class_camerafeed_property_feed_is_active) | ``false``                          |
| [`Transform2D`](class_transform2d.md) | [`feed_transform`](class_camerafeed.md#class_camerafeed_property_feed_transform) | ``Transform2D(1, 0, 0, -1, 0, 1)`` |
| [`Array`](class_array.md)             | [`formats`](class_camerafeed.md#class_camerafeed_property_formats)               | ``[]``                             |

## 方法

|||
|:-:|:--|
| [FeedDataType](#enum_camerafeed_feeddatatype) | [`get_datatype`](class_camerafeed.md#class_camerafeed_method_get_datatype) ( ) const[^const]                                                             |
| [`int`](class_int.md)                         | [`get_id`](class_camerafeed.md#class_camerafeed_method_get_id) ( ) const[^const]                                                                         |
| [`String`](class_string.md)                   | [`get_name`](class_camerafeed.md#class_camerafeed_method_get_name) ( ) const[^const]                                                                     |
| [FeedPosition](#enum_camerafeed_feedposition) | [`get_position`](class_camerafeed.md#class_camerafeed_method_get_position) ( ) const[^const]                                                             |
| [`int`](class_int.md)                         | [`get_texture_tex_id`](class_camerafeed.md#class_camerafeed_method_get_texture_tex_id) ( feed_image_type: [FeedImage](#enum_cameraserver_feedimage) )    |
| `void`                                        | [`set_external`](class_camerafeed.md#class_camerafeed_method_set_external) ( width: [`int`](class_int.md), height: [`int`](class_int.md) )               |
| [`bool`](class_bool.md)                       | [`set_format`](class_camerafeed.md#class_camerafeed_method_set_format) ( index: [`int`](class_int.md), parameters: [`Dictionary`](class_dictionary.md) ) |
| `void`                                        | [`set_name`](class_camerafeed.md#class_camerafeed_method_set_name) ( name: [`String`](class_string.md) )                                                 |
| `void`                                        | [`set_position`](class_camerafeed.md#class_camerafeed_method_set_position) ( position: [FeedPosition](#enum_camerafeed_feedposition) )                   |
| `void`                                        | [`set_rgb_image`](class_camerafeed.md#class_camerafeed_method_set_rgb_image) ( rgb_image: [`Image`](class_image.md) )                                    |
| `void`                                        | [`set_ycbcr_image`](class_camerafeed.md#class_camerafeed_method_set_ycbcr_image) ( ycbcr_image: [`Image`](class_image.md) )                              |

<!-- rst-class:: classref-section-separator -->

---

## 信号

<div id="_class_class_camerafeed_signal_format_changed"></div>

**format_changed** ( ) <div id="class_camerafeed_signal_format_changed"></div>

Emitted when the format has changed.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_class_camerafeed_signal_frame_changed"></div>

**frame_changed** ( ) <div id="class_camerafeed_signal_frame_changed"></div>

Emitted when a new frame is available.

<!-- rst-class:: classref-section-separator -->

---

## 枚举

<div id="_class_enum_camerafeed_feeddatatype"></div>

enum **FeedDataType**: <div id="enum_camerafeed_feeddatatype"></div>

<div id="_class_camerafeed_constant_feed_noimage"></div>

[FeedDataType](#enum_camerafeed_feeddatatype) **FEED_NOIMAGE** = ``0``

No image set for the feed.

<div id="_class_camerafeed_constant_feed_rgb"></div>

[FeedDataType](#enum_camerafeed_feeddatatype) **FEED_RGB** = ``1``

Feed supplies RGB images.

<div id="_class_camerafeed_constant_feed_ycbcr"></div>

[FeedDataType](#enum_camerafeed_feeddatatype) **FEED_YCBCR** = ``2``

Feed supplies YCbCr images that need to be converted to RGB.

<div id="_class_camerafeed_constant_feed_ycbcr_sep"></div>

[FeedDataType](#enum_camerafeed_feeddatatype) **FEED_YCBCR_SEP** = ``3``

Feed supplies separate Y and CbCr images that need to be combined and converted to RGB.

<div id="_class_camerafeed_constant_feed_external"></div>

[FeedDataType](#enum_camerafeed_feeddatatype) **FEED_EXTERNAL** = ``4``

Feed supplies external image.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_enum_camerafeed_feedposition"></div>

enum **FeedPosition**: <div id="enum_camerafeed_feedposition"></div>

<div id="_class_camerafeed_constant_feed_unspecified"></div>

[FeedPosition](#enum_camerafeed_feedposition) **FEED_UNSPECIFIED** = ``0``

Unspecified position.

<div id="_class_camerafeed_constant_feed_front"></div>

[FeedPosition](#enum_camerafeed_feedposition) **FEED_FRONT** = ``1``

Camera is mounted at the front of the device.

<div id="_class_camerafeed_constant_feed_back"></div>

[FeedPosition](#enum_camerafeed_feedposition) **FEED_BACK** = ``2``

Camera is mounted at the back of the device.

<!-- rst-class:: classref-section-separator -->

---

## 属性说明

<div id="_class_camerafeed_property_feed_is_active"></div>

[`bool`](class_bool.md) **feed_is_active** = ``false`` <div id="class_camerafeed_property_feed_is_active"></div>

- `void` **set_active** ( value: [`bool`](class_bool.md) )
- [`bool`](class_bool.md) **is_active** ( )

If `true`, the feed is active.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_camerafeed_property_feed_transform"></div>

[`Transform2D`](class_transform2d.md) **feed_transform** = ``Transform2D(1, 0, 0, -1, 0, 1)`` <div id="class_camerafeed_property_feed_transform"></div>

- `void` **set_transform** ( value: [`Transform2D`](class_transform2d.md) )
- [`Transform2D`](class_transform2d.md) **get_transform** ( )

The transform applied to the camera's image.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_camerafeed_property_formats"></div>

[`Array`](class_array.md) **formats** = ``[]`` <div id="class_camerafeed_property_formats"></div>

- [`Array`](class_array.md) **get_formats** ( )

Formats supported by the feed. Each entry is a [`Dictionary`](class_dictionary.md) describing format parameters.

<!-- rst-class:: classref-section-separator -->

---

## 方法说明

<div id="_class_camerafeed_method_get_datatype"></div>

[FeedDataType](#enum_camerafeed_feeddatatype) **get_datatype** ( ) const[^const]<div id="class_camerafeed_method_get_datatype"></div>

Returns feed image data type.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_camerafeed_method_get_id"></div>

[`int`](class_int.md) **get_id** ( ) const[^const]<div id="class_camerafeed_method_get_id"></div>

Returns the unique ID for this feed.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_camerafeed_method_get_name"></div>

[`String`](class_string.md) **get_name** ( ) const[^const]<div id="class_camerafeed_method_get_name"></div>

Returns the camera's name.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_camerafeed_method_get_position"></div>

[FeedPosition](#enum_camerafeed_feedposition) **get_position** ( ) const[^const]<div id="class_camerafeed_method_get_position"></div>

Returns the position of camera on the device.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_camerafeed_method_get_texture_tex_id"></div>

[`int`](class_int.md) **get_texture_tex_id** ( feed_image_type: [FeedImage](#enum_cameraserver_feedimage) )<div id="class_camerafeed_method_get_texture_tex_id"></div>

Returns the texture backend ID (usable by some external libraries that need a handle to a texture to write data).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_camerafeed_method_set_external"></div>

`void` **set_external** ( width: [`int`](class_int.md), height: [`int`](class_int.md) )<div id="class_camerafeed_method_set_external"></div>

Sets the feed as external feed provided by another library.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_camerafeed_method_set_format"></div>

[`bool`](class_bool.md) **set_format** ( index: [`int`](class_int.md), parameters: [`Dictionary`](class_dictionary.md) )<div id="class_camerafeed_method_set_format"></div>

Sets the feed format parameters for the given index in the [`formats`](class_camerafeed.md#class_camerafeed_property_formats) array. Returns `true` on success. By default YUYV encoded stream is transformed to FEED_RGB. YUYV encoded stream output format can be changed with `parameters`.output value:

 `separate` will result in FEED_YCBCR_SEP

 `grayscale` will result in desaturated FEED_RGB

 `copy` will result in FEED_YCBCR

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_camerafeed_method_set_name"></div>

`void` **set_name** ( name: [`String`](class_string.md) )<div id="class_camerafeed_method_set_name"></div>

Sets the camera's name.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_camerafeed_method_set_position"></div>

`void` **set_position** ( position: [FeedPosition](#enum_camerafeed_feedposition) )<div id="class_camerafeed_method_set_position"></div>

Sets the position of this camera.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_camerafeed_method_set_rgb_image"></div>

`void` **set_rgb_image** ( rgb_image: [`Image`](class_image.md) )<div id="class_camerafeed_method_set_rgb_image"></div>

Sets RGB image for this feed.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_camerafeed_method_set_ycbcr_image"></div>

`void` **set_ycbcr_image** ( ycbcr_image: [`Image`](class_image.md) )<div id="class_camerafeed_method_set_ycbcr_image"></div>

Sets YCbCr image for this feed.

[^virtual]: 本方法通常需要用户覆盖才能生效。
[^const]: 本方法无副作用，不会修改该实例的任何成员变量。
[^vararg]: 本方法除了能接受在此处描述的参数外，还能够继续接受任意数量的参数。
[^constructor]: 本方法用于构造某个类型。
[^static]: 调用本方法无需实例，可直接使用类名进行调用。
[^operator]: 本方法描述的是使用本类型作为左操作数的有效运算符。
[^bitfield]: 这个值是由下列位标志构成位掩码的整数。
[^void]: 无返回值。
