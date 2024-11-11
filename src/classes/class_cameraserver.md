<!-- ⚠ 请勿编辑本文件 ⚠ -->
<!-- 本文档使用脚本从 WeDot 引擎源码仓库生成。 -->
<!-- 生成脚本：https://github.com/WeDot-Engine/WeDot/tree/master/doc/tools/make_md.py； -->
<!-- 原文件：https://github.com/WeDot-Engine/WeDot/tree/master/doc/classes/CameraServer.xml。 -->

<div id="_class_cameraserver"></div>

# CameraServer

**继承：** [`Object`](class_object.md)

Server keeping track of different cameras accessible in Godot.

## 描述

The **CameraServer** keeps track of different cameras accessible in Godot. These are external cameras such as webcams or the cameras on your phone.

It is notably used to provide AR modules with a video feed from the camera.

 **Note:** This class is currently only implemented on Linux, macOS, and iOS, on other platforms no [`CameraFeed`](class_camerafeed.md) s will be available. To get a [`CameraFeed`](class_camerafeed.md) on iOS, the camera plugin from [*godot-ios-plugins*](https://github.com/godotengine/godot-ios-plugins) is required.

## 方法

|||
|:-:|:--|
| `void`                                                      | [`add_feed`](class_cameraserver.md#class_cameraserver_method_add_feed) ( feed: [`CameraFeed`](class_camerafeed.md) )       |
| [Array](class_array.md) [`CameraFeed`](class_camerafeed.md) | [`feeds`](class_cameraserver.md#class_cameraserver_method_feeds) ( )                                                       |
| [`CameraFeed`](class_camerafeed.md)                         | [`get_feed`](class_cameraserver.md#class_cameraserver_method_get_feed) ( index: [`int`](class_int.md) )                    |
| [`int`](class_int.md)                                       | [`get_feed_count`](class_cameraserver.md#class_cameraserver_method_get_feed_count) ( )                                     |
| `void`                                                      | [`remove_feed`](class_cameraserver.md#class_cameraserver_method_remove_feed) ( feed: [`CameraFeed`](class_camerafeed.md) ) |

<!-- rst-class:: classref-section-separator -->

---

## 信号

<div id="_class_class_cameraserver_signal_camera_feed_added"></div>

**camera_feed_added** ( id: [`int`](class_int.md) ) <div id="class_cameraserver_signal_camera_feed_added"></div>

Emitted when a [`CameraFeed`](class_camerafeed.md) is added (e.g. a webcam is plugged in).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_class_cameraserver_signal_camera_feed_removed"></div>

**camera_feed_removed** ( id: [`int`](class_int.md) ) <div id="class_cameraserver_signal_camera_feed_removed"></div>

Emitted when a [`CameraFeed`](class_camerafeed.md) is removed (e.g. a webcam is unplugged).

<!-- rst-class:: classref-section-separator -->

---

## 枚举

<div id="_class_enum_cameraserver_feedimage"></div>

enum **FeedImage**: <div id="enum_cameraserver_feedimage"></div>

<div id="_class_cameraserver_constant_feed_rgba_image"></div>

[FeedImage](#enum_cameraserver_feedimage) **FEED_RGBA_IMAGE** = ``0``

The RGBA camera image.

<div id="_class_cameraserver_constant_feed_ycbcr_image"></div>

[FeedImage](#enum_cameraserver_feedimage) **FEED_YCBCR_IMAGE** = ``0``

The [*YCbCr*](https://en.wikipedia.org/wiki/YCbCr) camera image.

<div id="_class_cameraserver_constant_feed_y_image"></div>

[FeedImage](#enum_cameraserver_feedimage) **FEED_Y_IMAGE** = ``0``

The Y component camera image.

<div id="_class_cameraserver_constant_feed_cbcr_image"></div>

[FeedImage](#enum_cameraserver_feedimage) **FEED_CBCR_IMAGE** = ``1``

The CbCr component camera image.

<!-- rst-class:: classref-section-separator -->

---

## 方法说明

<div id="_class_cameraserver_method_add_feed"></div>

`void` **add_feed** ( feed: [`CameraFeed`](class_camerafeed.md) )<div id="class_cameraserver_method_add_feed"></div>

Adds the camera `feed` to the camera server.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_cameraserver_method_feeds"></div>

[Array](class_array.md) [`CameraFeed`](class_camerafeed.md) **feeds** ( )<div id="class_cameraserver_method_feeds"></div>

Returns an array of [`CameraFeed`](class_camerafeed.md) s.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_cameraserver_method_get_feed"></div>

[`CameraFeed`](class_camerafeed.md) **get_feed** ( index: [`int`](class_int.md) )<div id="class_cameraserver_method_get_feed"></div>

Returns the [`CameraFeed`](class_camerafeed.md) corresponding to the camera with the given `index`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_cameraserver_method_get_feed_count"></div>

[`int`](class_int.md) **get_feed_count** ( )<div id="class_cameraserver_method_get_feed_count"></div>

Returns the number of [`CameraFeed`](class_camerafeed.md) s registered.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_cameraserver_method_remove_feed"></div>

`void` **remove_feed** ( feed: [`CameraFeed`](class_camerafeed.md) )<div id="class_cameraserver_method_remove_feed"></div>

Removes the specified camera `feed`.

[^virtual]: 本方法通常需要用户覆盖才能生效。
[^const]: 本方法无副作用，不会修改该实例的任何成员变量。
[^vararg]: 本方法除了能接受在此处描述的参数外，还能够继续接受任意数量的参数。
[^constructor]: 本方法用于构造某个类型。
[^static]: 调用本方法无需实例，可直接使用类名进行调用。
[^operator]: 本方法描述的是使用本类型作为左操作数的有效运算符。
[^bitfield]: 这个值是由下列位标志构成位掩码的整数。
[^void]: 无返回值。
