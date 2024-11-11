<!-- ⚠ 请勿编辑本文件 ⚠ -->
<!-- 本文档使用脚本从 WeDot 引擎源码仓库生成。 -->
<!-- 生成脚本：https://github.com/WeDot-Engine/WeDot/tree/master/doc/tools/make_md.py； -->
<!-- 原文件：https://github.com/WeDot-Engine/WeDot/tree/master/doc/classes/StreamPeer.xml。 -->

<div id="_class_streampeer"></div>

# StreamPeer

**继承：** [`RefCounted`](class_refcounted.md) **<** [`Object`](class_object.md)

**派生：** [`StreamPeerBuffer`](class_streampeerbuffer.md), [`StreamPeerExtension`](class_streampeerextension.md), [`StreamPeerGZIP`](class_streampeergzip.md), [`StreamPeerTCP`](class_streampeertcp.md), [`StreamPeerTLS`](class_streampeertls.md)

Abstract base class for interacting with streams.

## 描述

StreamPeer is an abstract base class mostly used for stream-based protocols (such as TCP). It provides an API for sending and receiving data through streams as raw data or strings.

 **Note:** When exporting to Android, make sure to enable the `INTERNET` permission in the Android export preset before exporting the project or using one-click deploy. Otherwise, network communication of any kind will be blocked by Android.

## 属性

|||
|:-:|:--|
| [`bool`](class_bool.md) | [`big_endian`](class_streampeer.md#class_streampeer_property_big_endian) | ``false`` |

## 方法

|||
|:-:|:--|
| [`int`](class_int.md)             | [`get_8`](class_streampeer.md#class_streampeer_method_get_8) ( )                                                                                         |
| [`int`](class_int.md)             | [`get_16`](class_streampeer.md#class_streampeer_method_get_16) ( )                                                                                       |
| [`int`](class_int.md)             | [`get_32`](class_streampeer.md#class_streampeer_method_get_32) ( )                                                                                       |
| [`int`](class_int.md)             | [`get_64`](class_streampeer.md#class_streampeer_method_get_64) ( )                                                                                       |
| [`int`](class_int.md)             | [`get_available_bytes`](class_streampeer.md#class_streampeer_method_get_available_bytes) ( ) const[^const]                                               |
| [`Array`](class_array.md)         | [`get_data`](class_streampeer.md#class_streampeer_method_get_data) ( bytes: [`int`](class_int.md) )                                                      |
| [`float`](class_float.md)         | [`get_double`](class_streampeer.md#class_streampeer_method_get_double) ( )                                                                               |
| [`float`](class_float.md)         | [`get_float`](class_streampeer.md#class_streampeer_method_get_float) ( )                                                                                 |
| [`Array`](class_array.md)         | [`get_partial_data`](class_streampeer.md#class_streampeer_method_get_partial_data) ( bytes: [`int`](class_int.md) )                                      |
| [`String`](class_string.md)       | [`get_string`](class_streampeer.md#class_streampeer_method_get_string) ( bytes: [`int`](class_int.md) = -1 )                                             |
| [`int`](class_int.md)             | [`get_u8`](class_streampeer.md#class_streampeer_method_get_u8) ( )                                                                                       |
| [`int`](class_int.md)             | [`get_u16`](class_streampeer.md#class_streampeer_method_get_u16) ( )                                                                                     |
| [`int`](class_int.md)             | [`get_u32`](class_streampeer.md#class_streampeer_method_get_u32) ( )                                                                                     |
| [`int`](class_int.md)             | [`get_u64`](class_streampeer.md#class_streampeer_method_get_u64) ( )                                                                                     |
| [`String`](class_string.md)       | [`get_utf8_string`](class_streampeer.md#class_streampeer_method_get_utf8_string) ( bytes: [`int`](class_int.md) = -1 )                                   |
| [`Variant`](class_variant.md)     | [`get_var`](class_streampeer.md#class_streampeer_method_get_var) ( allow_objects: [`bool`](class_bool.md) = false )                                      |
| `void`                            | [`put_8`](class_streampeer.md#class_streampeer_method_put_8) ( value: [`int`](class_int.md) )                                                            |
| `void`                            | [`put_16`](class_streampeer.md#class_streampeer_method_put_16) ( value: [`int`](class_int.md) )                                                          |
| `void`                            | [`put_32`](class_streampeer.md#class_streampeer_method_put_32) ( value: [`int`](class_int.md) )                                                          |
| `void`                            | [`put_64`](class_streampeer.md#class_streampeer_method_put_64) ( value: [`int`](class_int.md) )                                                          |
| [Error](#enum_@globalscope_error) | [`put_data`](class_streampeer.md#class_streampeer_method_put_data) ( data: [`PackedByteArray`](class_packedbytearray.md) )                               |
| `void`                            | [`put_double`](class_streampeer.md#class_streampeer_method_put_double) ( value: [`float`](class_float.md) )                                              |
| `void`                            | [`put_float`](class_streampeer.md#class_streampeer_method_put_float) ( value: [`float`](class_float.md) )                                                |
| [`Array`](class_array.md)         | [`put_partial_data`](class_streampeer.md#class_streampeer_method_put_partial_data) ( data: [`PackedByteArray`](class_packedbytearray.md) )               |
| `void`                            | [`put_string`](class_streampeer.md#class_streampeer_method_put_string) ( value: [`String`](class_string.md) )                                            |
| `void`                            | [`put_u8`](class_streampeer.md#class_streampeer_method_put_u8) ( value: [`int`](class_int.md) )                                                          |
| `void`                            | [`put_u16`](class_streampeer.md#class_streampeer_method_put_u16) ( value: [`int`](class_int.md) )                                                        |
| `void`                            | [`put_u32`](class_streampeer.md#class_streampeer_method_put_u32) ( value: [`int`](class_int.md) )                                                        |
| `void`                            | [`put_u64`](class_streampeer.md#class_streampeer_method_put_u64) ( value: [`int`](class_int.md) )                                                        |
| `void`                            | [`put_utf8_string`](class_streampeer.md#class_streampeer_method_put_utf8_string) ( value: [`String`](class_string.md) )                                  |
| `void`                            | [`put_var`](class_streampeer.md#class_streampeer_method_put_var) ( value: [`Variant`](class_variant.md), full_objects: [`bool`](class_bool.md) = false ) |

<!-- rst-class:: classref-section-separator -->

---

## 属性说明

<div id="_class_streampeer_property_big_endian"></div>

[`bool`](class_bool.md) **big_endian** = ``false`` <div id="class_streampeer_property_big_endian"></div>

- `void` **set_big_endian** ( value: [`bool`](class_bool.md) )
- [`bool`](class_bool.md) **is_big_endian_enabled** ( )

If `true`, this **StreamPeer** will using big-endian format for encoding and decoding.

<!-- rst-class:: classref-section-separator -->

---

## 方法说明

<div id="_class_streampeer_method_get_8"></div>

[`int`](class_int.md) **get_8** ( )<div id="class_streampeer_method_get_8"></div>

Gets a signed byte from the stream.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_streampeer_method_get_16"></div>

[`int`](class_int.md) **get_16** ( )<div id="class_streampeer_method_get_16"></div>

Gets a signed 16-bit value from the stream.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_streampeer_method_get_32"></div>

[`int`](class_int.md) **get_32** ( )<div id="class_streampeer_method_get_32"></div>

Gets a signed 32-bit value from the stream.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_streampeer_method_get_64"></div>

[`int`](class_int.md) **get_64** ( )<div id="class_streampeer_method_get_64"></div>

Gets a signed 64-bit value from the stream.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_streampeer_method_get_available_bytes"></div>

[`int`](class_int.md) **get_available_bytes** ( ) const[^const]<div id="class_streampeer_method_get_available_bytes"></div>

Returns the number of bytes this **StreamPeer** has available.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_streampeer_method_get_data"></div>

[`Array`](class_array.md) **get_data** ( bytes: [`int`](class_int.md) )<div id="class_streampeer_method_get_data"></div>

Returns a chunk data with the received bytes. The number of bytes to be received can be requested in the `bytes` argument. If not enough bytes are available, the function will block until the desired amount is received. This function returns two values, an [Error](#enum_@globalscope_error) code and a data array.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_streampeer_method_get_double"></div>

[`float`](class_float.md) **get_double** ( )<div id="class_streampeer_method_get_double"></div>

Gets a double-precision float from the stream.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_streampeer_method_get_float"></div>

[`float`](class_float.md) **get_float** ( )<div id="class_streampeer_method_get_float"></div>

Gets a single-precision float from the stream.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_streampeer_method_get_partial_data"></div>

[`Array`](class_array.md) **get_partial_data** ( bytes: [`int`](class_int.md) )<div id="class_streampeer_method_get_partial_data"></div>

Returns a chunk data with the received bytes. The number of bytes to be received can be requested in the "bytes" argument. If not enough bytes are available, the function will return how many were actually received. This function returns two values, an [Error](#enum_@globalscope_error) code, and a data array.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_streampeer_method_get_string"></div>

[`String`](class_string.md) **get_string** ( bytes: [`int`](class_int.md) = -1 )<div id="class_streampeer_method_get_string"></div>

Gets an ASCII string with byte-length `bytes` from the stream. If `bytes` is negative (default) the length will be read from the stream using the reverse process of [`put_string`](class_streampeer.md#class_streampeer_method_put_string).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_streampeer_method_get_u8"></div>

[`int`](class_int.md) **get_u8** ( )<div id="class_streampeer_method_get_u8"></div>

Gets an unsigned byte from the stream.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_streampeer_method_get_u16"></div>

[`int`](class_int.md) **get_u16** ( )<div id="class_streampeer_method_get_u16"></div>

Gets an unsigned 16-bit value from the stream.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_streampeer_method_get_u32"></div>

[`int`](class_int.md) **get_u32** ( )<div id="class_streampeer_method_get_u32"></div>

Gets an unsigned 32-bit value from the stream.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_streampeer_method_get_u64"></div>

[`int`](class_int.md) **get_u64** ( )<div id="class_streampeer_method_get_u64"></div>

Gets an unsigned 64-bit value from the stream.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_streampeer_method_get_utf8_string"></div>

[`String`](class_string.md) **get_utf8_string** ( bytes: [`int`](class_int.md) = -1 )<div id="class_streampeer_method_get_utf8_string"></div>

Gets a UTF-8 string with byte-length `bytes` from the stream (this decodes the string sent as UTF-8). If `bytes` is negative (default) the length will be read from the stream using the reverse process of [`put_utf8_string`](class_streampeer.md#class_streampeer_method_put_utf8_string).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_streampeer_method_get_var"></div>

[`Variant`](class_variant.md) **get_var** ( allow_objects: [`bool`](class_bool.md) = false )<div id="class_streampeer_method_get_var"></div>

Gets a Variant from the stream. If `allow_objects` is `true`, decoding objects is allowed.

Internally, this uses the same decoding mechanism as the [`@GlobalScope.bytes_to_var`](class_@globalscope.md#class_@globalscope_method_bytes_to_var) method.

 **Warning:** Deserialized objects can contain code which gets executed. Do not use this option if the serialized object comes from untrusted sources to avoid potential security threats such as remote code execution.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_streampeer_method_put_8"></div>

`void` **put_8** ( value: [`int`](class_int.md) )<div id="class_streampeer_method_put_8"></div>

Puts a signed byte into the stream.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_streampeer_method_put_16"></div>

`void` **put_16** ( value: [`int`](class_int.md) )<div id="class_streampeer_method_put_16"></div>

Puts a signed 16-bit value into the stream.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_streampeer_method_put_32"></div>

`void` **put_32** ( value: [`int`](class_int.md) )<div id="class_streampeer_method_put_32"></div>

Puts a signed 32-bit value into the stream.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_streampeer_method_put_64"></div>

`void` **put_64** ( value: [`int`](class_int.md) )<div id="class_streampeer_method_put_64"></div>

Puts a signed 64-bit value into the stream.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_streampeer_method_put_data"></div>

[Error](#enum_@globalscope_error) **put_data** ( data: [`PackedByteArray`](class_packedbytearray.md) )<div id="class_streampeer_method_put_data"></div>

Sends a chunk of data through the connection, blocking if necessary until the data is done sending. This function returns an [Error](#enum_@globalscope_error) code.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_streampeer_method_put_double"></div>

`void` **put_double** ( value: [`float`](class_float.md) )<div id="class_streampeer_method_put_double"></div>

Puts a double-precision float into the stream.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_streampeer_method_put_float"></div>

`void` **put_float** ( value: [`float`](class_float.md) )<div id="class_streampeer_method_put_float"></div>

Puts a single-precision float into the stream.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_streampeer_method_put_partial_data"></div>

[`Array`](class_array.md) **put_partial_data** ( data: [`PackedByteArray`](class_packedbytearray.md) )<div id="class_streampeer_method_put_partial_data"></div>

Sends a chunk of data through the connection. If all the data could not be sent at once, only part of it will. This function returns two values, an [Error](#enum_@globalscope_error) code and an integer, describing how much data was actually sent.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_streampeer_method_put_string"></div>

`void` **put_string** ( value: [`String`](class_string.md) )<div id="class_streampeer_method_put_string"></div>

Puts a zero-terminated ASCII string into the stream prepended by a 32-bit unsigned integer representing its size.

 **Note:** To put an ASCII string without prepending its size, you can use [`put_data`](class_streampeer.md#class_streampeer_method_put_data):



```gdscript

    put_data("Hello world".to_ascii_buffer())
```

```csharp

    PutData("Hello World".ToAsciiBuffer());
```







<!-- rst-class:: classref-item-separator -->

---

<div id="_class_streampeer_method_put_u8"></div>

`void` **put_u8** ( value: [`int`](class_int.md) )<div id="class_streampeer_method_put_u8"></div>

Puts an unsigned byte into the stream.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_streampeer_method_put_u16"></div>

`void` **put_u16** ( value: [`int`](class_int.md) )<div id="class_streampeer_method_put_u16"></div>

Puts an unsigned 16-bit value into the stream.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_streampeer_method_put_u32"></div>

`void` **put_u32** ( value: [`int`](class_int.md) )<div id="class_streampeer_method_put_u32"></div>

Puts an unsigned 32-bit value into the stream.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_streampeer_method_put_u64"></div>

`void` **put_u64** ( value: [`int`](class_int.md) )<div id="class_streampeer_method_put_u64"></div>

Puts an unsigned 64-bit value into the stream.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_streampeer_method_put_utf8_string"></div>

`void` **put_utf8_string** ( value: [`String`](class_string.md) )<div id="class_streampeer_method_put_utf8_string"></div>

Puts a zero-terminated UTF-8 string into the stream prepended by a 32 bits unsigned integer representing its size.

 **Note:** To put a UTF-8 string without prepending its size, you can use [`put_data`](class_streampeer.md#class_streampeer_method_put_data):



```gdscript

    put_data("Hello world".to_utf8_buffer())
```

```csharp

    PutData("Hello World".ToUtf8Buffer());
```







<!-- rst-class:: classref-item-separator -->

---

<div id="_class_streampeer_method_put_var"></div>

`void` **put_var** ( value: [`Variant`](class_variant.md), full_objects: [`bool`](class_bool.md) = false )<div id="class_streampeer_method_put_var"></div>

Puts a Variant into the stream. If `full_objects` is `true` encoding objects is allowed (and can potentially include code).

Internally, this uses the same encoding mechanism as the [`@GlobalScope.var_to_bytes`](class_@globalscope.md#class_@globalscope_method_var_to_bytes) method.

[^virtual]: 本方法通常需要用户覆盖才能生效。
[^const]: 本方法无副作用，不会修改该实例的任何成员变量。
[^vararg]: 本方法除了能接受在此处描述的参数外，还能够继续接受任意数量的参数。
[^constructor]: 本方法用于构造某个类型。
[^static]: 调用本方法无需实例，可直接使用类名进行调用。
[^operator]: 本方法描述的是使用本类型作为左操作数的有效运算符。
[^bitfield]: 这个值是由下列位标志构成位掩码的整数。
[^void]: 无返回值。
