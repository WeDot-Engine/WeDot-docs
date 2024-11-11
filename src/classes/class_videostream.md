<!-- ⚠ 请勿编辑本文件 ⚠ -->
<!-- 本文档使用脚本从 WeDot 引擎源码仓库生成。 -->
<!-- 生成脚本：https://github.com/WeDot-Engine/WeDot/tree/master/doc/tools/make_md.py； -->
<!-- 原文件：https://github.com/WeDot-Engine/WeDot/tree/master/doc/classes/VideoStream.xml。 -->

<div id="_class_videostream"></div>

# VideoStream

**继承：** [`Resource`](class_resource.md) **<** [`RefCounted`](class_refcounted.md) **<** [`Object`](class_object.md)

**派生：** [`VideoStreamTheora`](class_videostreamtheora.md)

Base resource for video streams.

## 描述

Base resource type for all video streams. Classes that derive from **VideoStream** can all be used as resource types to play back videos in [`VideoStreamPlayer`](class_videostreamplayer.md).

## 属性

|||
|:-:|:--|
| [`String`](class_string.md) | [`file`](class_videostream.md#class_videostream_property_file) | ``""`` |

## 方法

|||
|:-:|:--|
| [`VideoStreamPlayback`](class_videostreamplayback.md) | [`_instantiate_playback`](class_videostream.md#class_videostream_private_method__instantiate_playback) ( ) virtual[^virtual] |

<!-- rst-class:: classref-section-separator -->

---

## 属性说明

<div id="_class_videostream_property_file"></div>

[`String`](class_string.md) **file** = ``""`` <div id="class_videostream_property_file"></div>

- `void` **set_file** ( value: [`String`](class_string.md) )
- [`String`](class_string.md) **get_file** ( )

The video file path or URI that this **VideoStream** resource handles.

For [`VideoStreamTheora`](class_videostreamtheora.md), this filename should be an Ogg Theora video file with the `.ogv` extension.

<!-- rst-class:: classref-section-separator -->

---

## 方法说明

<div id="_class_videostream_private_method__instantiate_playback"></div>

[`VideoStreamPlayback`](class_videostreamplayback.md) **_instantiate_playback** ( ) virtual[^virtual]<div id="class_videostream_private_method__instantiate_playback"></div>

Called when the video starts playing, to initialize and return a subclass of [`VideoStreamPlayback`](class_videostreamplayback.md).

[^virtual]: 本方法通常需要用户覆盖才能生效。
[^const]: 本方法无副作用，不会修改该实例的任何成员变量。
[^vararg]: 本方法除了能接受在此处描述的参数外，还能够继续接受任意数量的参数。
[^constructor]: 本方法用于构造某个类型。
[^static]: 调用本方法无需实例，可直接使用类名进行调用。
[^operator]: 本方法描述的是使用本类型作为左操作数的有效运算符。
[^bitfield]: 这个值是由下列位标志构成位掩码的整数。
[^void]: 无返回值。
