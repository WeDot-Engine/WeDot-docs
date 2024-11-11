<!-- ⚠ 请勿编辑本文件 ⚠ -->
<!-- 本文档使用脚本从 WeDot 引擎源码仓库生成。 -->
<!-- 生成脚本：https://github.com/WeDot-Engine/WeDot/tree/master/doc/tools/make_md.py； -->
<!-- 原文件：https://github.com/WeDot-Engine/WeDot/tree/master/doc/classes/StreamPeerGZIP.xml。 -->

<div id="_class_streampeergzip"></div>

# StreamPeerGZIP

**实验性：** This class may be changed or removed in future versions.

**继承：** [`StreamPeer`](class_streampeer.md) **<** [`RefCounted`](class_refcounted.md) **<** [`Object`](class_object.md)

A stream peer that handles GZIP and deflate compression/decompression.

## 描述

This class allows to compress or decompress data using GZIP/deflate in a streaming fashion. This is particularly useful when compressing or decompressing files that have to be sent through the network without needing to allocate them all in memory.

After starting the stream via [`start_compression`](class_streampeergzip.md#class_streampeergzip_method_start_compression) (or [`start_decompression`](class_streampeergzip.md#class_streampeergzip_method_start_decompression)), calling [`StreamPeer.put_partial_data`](class_streampeer.md#class_streampeer_method_put_partial_data) on this stream will compress (or decompress) the data, writing it to the internal buffer. Calling [`StreamPeer.get_available_bytes`](class_streampeer.md#class_streampeer_method_get_available_bytes) will return the pending bytes in the internal buffer, and [`StreamPeer.get_partial_data`](class_streampeer.md#class_streampeer_method_get_partial_data) will retrieve the compressed (or decompressed) bytes from it. When the stream is over, you must call [`finish`](class_streampeergzip.md#class_streampeergzip_method_finish) to ensure the internal buffer is properly flushed (make sure to call [`StreamPeer.get_available_bytes`](class_streampeer.md#class_streampeer_method_get_available_bytes) on last time to check if more data needs to be read after that).

## 方法

|||
|:-:|:--|
| `void`                            | [`clear`](class_streampeergzip.md#class_streampeergzip_method_clear) ( )                                                                                                                      |
| [Error](#enum_@globalscope_error) | [`finish`](class_streampeergzip.md#class_streampeergzip_method_finish) ( )                                                                                                                    |
| [Error](#enum_@globalscope_error) | [`start_compression`](class_streampeergzip.md#class_streampeergzip_method_start_compression) ( use_deflate: [`bool`](class_bool.md) = false, buffer_size: [`int`](class_int.md) = 65535 )     |
| [Error](#enum_@globalscope_error) | [`start_decompression`](class_streampeergzip.md#class_streampeergzip_method_start_decompression) ( use_deflate: [`bool`](class_bool.md) = false, buffer_size: [`int`](class_int.md) = 65535 ) |

<!-- rst-class:: classref-section-separator -->

---

## 方法说明

<div id="_class_streampeergzip_method_clear"></div>

`void` **clear** ( )<div id="class_streampeergzip_method_clear"></div>

Clears this stream, resetting the internal state.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_streampeergzip_method_finish"></div>

[Error](#enum_@globalscope_error) **finish** ( )<div id="class_streampeergzip_method_finish"></div>

Finalizes the stream, compressing or decompressing any buffered chunk left.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_streampeergzip_method_start_compression"></div>

[Error](#enum_@globalscope_error) **start_compression** ( use_deflate: [`bool`](class_bool.md) = false, buffer_size: [`int`](class_int.md) = 65535 )<div id="class_streampeergzip_method_start_compression"></div>

Start the stream in compression mode with the given `buffer_size`, if `use_deflate` is `true` uses deflate instead of GZIP.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_streampeergzip_method_start_decompression"></div>

[Error](#enum_@globalscope_error) **start_decompression** ( use_deflate: [`bool`](class_bool.md) = false, buffer_size: [`int`](class_int.md) = 65535 )<div id="class_streampeergzip_method_start_decompression"></div>

Start the stream in decompression mode with the given `buffer_size`, if `use_deflate` is `true` uses deflate instead of GZIP.

[^virtual]: 本方法通常需要用户覆盖才能生效。
[^const]: 本方法无副作用，不会修改该实例的任何成员变量。
[^vararg]: 本方法除了能接受在此处描述的参数外，还能够继续接受任意数量的参数。
[^constructor]: 本方法用于构造某个类型。
[^static]: 调用本方法无需实例，可直接使用类名进行调用。
[^operator]: 本方法描述的是使用本类型作为左操作数的有效运算符。
[^bitfield]: 这个值是由下列位标志构成位掩码的整数。
[^void]: 无返回值。
