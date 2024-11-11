<!-- ⚠ 请勿编辑本文件 ⚠ -->
<!-- 本文档使用脚本从 WeDot 引擎源码仓库生成。 -->
<!-- 生成脚本：https://github.com/WeDot-Engine/WeDot/tree/master/doc/tools/make_md.py； -->
<!-- 原文件：https://github.com/WeDot-Engine/WeDot/tree/master/doc/classes/Marshalls.xml。 -->

<div id="_class_marshalls"></div>

# Marshalls

**继承：** [`Object`](class_object.md)

Data transformation (marshaling) and encoding helpers.

## 描述

Provides data transformation and encoding utility functions.

## 方法

|||
|:-:|:--|
| [`PackedByteArray`](class_packedbytearray.md) | [`base64_to_raw`](class_marshalls.md#class_marshalls_method_base64_to_raw) ( base64_str: [`String`](class_string.md) )                                                         |
| [`String`](class_string.md)                   | [`base64_to_utf8`](class_marshalls.md#class_marshalls_method_base64_to_utf8) ( base64_str: [`String`](class_string.md) )                                                       |
| [`Variant`](class_variant.md)                 | [`base64_to_variant`](class_marshalls.md#class_marshalls_method_base64_to_variant) ( base64_str: [`String`](class_string.md), allow_objects: [`bool`](class_bool.md) = false ) |
| [`String`](class_string.md)                   | [`raw_to_base64`](class_marshalls.md#class_marshalls_method_raw_to_base64) ( array: [`PackedByteArray`](class_packedbytearray.md) )                                            |
| [`String`](class_string.md)                   | [`utf8_to_base64`](class_marshalls.md#class_marshalls_method_utf8_to_base64) ( utf8_str: [`String`](class_string.md) )                                                         |
| [`String`](class_string.md)                   | [`variant_to_base64`](class_marshalls.md#class_marshalls_method_variant_to_base64) ( variant: [`Variant`](class_variant.md), full_objects: [`bool`](class_bool.md) = false )   |

<!-- rst-class:: classref-section-separator -->

---

## 方法说明

<div id="_class_marshalls_method_base64_to_raw"></div>

[`PackedByteArray`](class_packedbytearray.md) **base64_to_raw** ( base64_str: [`String`](class_string.md) )<div id="class_marshalls_method_base64_to_raw"></div>

Returns a decoded [`PackedByteArray`](class_packedbytearray.md) corresponding to the Base64-encoded string `base64_str`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_marshalls_method_base64_to_utf8"></div>

[`String`](class_string.md) **base64_to_utf8** ( base64_str: [`String`](class_string.md) )<div id="class_marshalls_method_base64_to_utf8"></div>

Returns a decoded string corresponding to the Base64-encoded string `base64_str`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_marshalls_method_base64_to_variant"></div>

[`Variant`](class_variant.md) **base64_to_variant** ( base64_str: [`String`](class_string.md), allow_objects: [`bool`](class_bool.md) = false )<div id="class_marshalls_method_base64_to_variant"></div>

Returns a decoded [`Variant`](class_variant.md) corresponding to the Base64-encoded string `base64_str`. If `allow_objects` is `true`, decoding objects is allowed.

Internally, this uses the same decoding mechanism as the [`@GlobalScope.bytes_to_var`](class_@globalscope.md#class_@globalscope_method_bytes_to_var) method.

 **Warning:** Deserialized objects can contain code which gets executed. Do not use this option if the serialized object comes from untrusted sources to avoid potential security threats such as remote code execution.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_marshalls_method_raw_to_base64"></div>

[`String`](class_string.md) **raw_to_base64** ( array: [`PackedByteArray`](class_packedbytearray.md) )<div id="class_marshalls_method_raw_to_base64"></div>

Returns a Base64-encoded string of a given [`PackedByteArray`](class_packedbytearray.md).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_marshalls_method_utf8_to_base64"></div>

[`String`](class_string.md) **utf8_to_base64** ( utf8_str: [`String`](class_string.md) )<div id="class_marshalls_method_utf8_to_base64"></div>

Returns a Base64-encoded string of the UTF-8 string `utf8_str`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_marshalls_method_variant_to_base64"></div>

[`String`](class_string.md) **variant_to_base64** ( variant: [`Variant`](class_variant.md), full_objects: [`bool`](class_bool.md) = false )<div id="class_marshalls_method_variant_to_base64"></div>

Returns a Base64-encoded string of the [`Variant`](class_variant.md) `variant`. If `full_objects` is `true`, encoding objects is allowed (and can potentially include code).

Internally, this uses the same encoding mechanism as the [`@GlobalScope.var_to_bytes`](class_@globalscope.md#class_@globalscope_method_var_to_bytes) method.

[^virtual]: 本方法通常需要用户覆盖才能生效。
[^const]: 本方法无副作用，不会修改该实例的任何成员变量。
[^vararg]: 本方法除了能接受在此处描述的参数外，还能够继续接受任意数量的参数。
[^constructor]: 本方法用于构造某个类型。
[^static]: 调用本方法无需实例，可直接使用类名进行调用。
[^operator]: 本方法描述的是使用本类型作为左操作数的有效运算符。
[^bitfield]: 这个值是由下列位标志构成位掩码的整数。
[^void]: 无返回值。
