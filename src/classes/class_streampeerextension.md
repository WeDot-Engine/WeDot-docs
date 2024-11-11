<!-- ⚠ 请勿编辑本文件 ⚠ -->
<!-- 本文档使用脚本从 WeDot 引擎源码仓库生成。 -->
<!-- 生成脚本：https://github.com/WeDot-Engine/WeDot/tree/master/doc/tools/make_md.py； -->
<!-- 原文件：https://github.com/WeDot-Engine/WeDot/tree/master/doc/classes/StreamPeerExtension.xml。 -->

<div id="_class_streampeerextension"></div>

# StreamPeerExtension

**继承：** [`StreamPeer`](class_streampeer.md) **<** [`RefCounted`](class_refcounted.md) **<** [`Object`](class_object.md)

该类目前没有描述，请帮我们\ :ref:`贡献一个 <doc_updating_the_class_reference>`\ 吧！

## 方法

|||
|:-:|:--|
| [`int`](class_int.md)             | [`_get_available_bytes`](class_streampeerextension.md#class_streampeerextension_private_method__get_available_bytes) ( ) virtual[^virtual] const[^const]                                                          |
| [Error](#enum_@globalscope_error) | [`_get_data`](class_streampeerextension.md#class_streampeerextension_private_method__get_data) ( r_buffer: `uint8_t*`, r_bytes: [`int`](class_int.md), r_received: `int32_t*` ) virtual[^virtual]                 |
| [Error](#enum_@globalscope_error) | [`_get_partial_data`](class_streampeerextension.md#class_streampeerextension_private_method__get_partial_data) ( r_buffer: `uint8_t*`, r_bytes: [`int`](class_int.md), r_received: `int32_t*` ) virtual[^virtual] |
| [Error](#enum_@globalscope_error) | [`_put_data`](class_streampeerextension.md#class_streampeerextension_private_method__put_data) ( p_data: `const uint8_t*`, p_bytes: [`int`](class_int.md), r_sent: `int32_t*` ) virtual[^virtual]                 |
| [Error](#enum_@globalscope_error) | [`_put_partial_data`](class_streampeerextension.md#class_streampeerextension_private_method__put_partial_data) ( p_data: `const uint8_t*`, p_bytes: [`int`](class_int.md), r_sent: `int32_t*` ) virtual[^virtual] |

<!-- rst-class:: classref-section-separator -->

---

## 方法说明

<div id="_class_streampeerextension_private_method__get_available_bytes"></div>

[`int`](class_int.md) **_get_available_bytes** ( ) virtual[^virtual] const[^const]<div id="class_streampeerextension_private_method__get_available_bytes"></div>

该方法目前没有描述，请帮我们\ :ref:`贡献一个 <doc_updating_the_class_reference>`\ 吧！

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_streampeerextension_private_method__get_data"></div>

[Error](#enum_@globalscope_error) **_get_data** ( r_buffer: `uint8_t*`, r_bytes: [`int`](class_int.md), r_received: `int32_t*` ) virtual[^virtual]<div id="class_streampeerextension_private_method__get_data"></div>

该方法目前没有描述，请帮我们\ :ref:`贡献一个 <doc_updating_the_class_reference>`\ 吧！

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_streampeerextension_private_method__get_partial_data"></div>

[Error](#enum_@globalscope_error) **_get_partial_data** ( r_buffer: `uint8_t*`, r_bytes: [`int`](class_int.md), r_received: `int32_t*` ) virtual[^virtual]<div id="class_streampeerextension_private_method__get_partial_data"></div>

该方法目前没有描述，请帮我们\ :ref:`贡献一个 <doc_updating_the_class_reference>`\ 吧！

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_streampeerextension_private_method__put_data"></div>

[Error](#enum_@globalscope_error) **_put_data** ( p_data: `const uint8_t*`, p_bytes: [`int`](class_int.md), r_sent: `int32_t*` ) virtual[^virtual]<div id="class_streampeerextension_private_method__put_data"></div>

该方法目前没有描述，请帮我们\ :ref:`贡献一个 <doc_updating_the_class_reference>`\ 吧！

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_streampeerextension_private_method__put_partial_data"></div>

[Error](#enum_@globalscope_error) **_put_partial_data** ( p_data: `const uint8_t*`, p_bytes: [`int`](class_int.md), r_sent: `int32_t*` ) virtual[^virtual]<div id="class_streampeerextension_private_method__put_partial_data"></div>

该方法目前没有描述，请帮我们\ :ref:`贡献一个 <doc_updating_the_class_reference>`\ 吧！

[^virtual]: 本方法通常需要用户覆盖才能生效。
[^const]: 本方法无副作用，不会修改该实例的任何成员变量。
[^vararg]: 本方法除了能接受在此处描述的参数外，还能够继续接受任意数量的参数。
[^constructor]: 本方法用于构造某个类型。
[^static]: 调用本方法无需实例，可直接使用类名进行调用。
[^operator]: 本方法描述的是使用本类型作为左操作数的有效运算符。
[^bitfield]: 这个值是由下列位标志构成位掩码的整数。
[^void]: 无返回值。
