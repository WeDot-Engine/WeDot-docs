<!-- ⚠ 请勿编辑本文件 ⚠ -->
<!-- 本文档使用脚本从 WeDot 引擎源码仓库生成。 -->
<!-- 生成脚本：https://github.com/WeDot-Engine/WeDot/tree/4.3/doc/tools/make_md.py； -->
<!-- 原文件：https://github.com/WeDot-Engine/WeDot/tree/4.3/doc/classes/RDAttachmentFormat.xml。 -->

<div id="_class_rdattachmentformat"></div>

# RDAttachmentFormat

**继承：** [`RefCounted`](class_refcounted.md) **<** [`Object`](class_object.md)

Attachment format (used by [`RenderingDevice`](class_renderingdevice.md)).

## 描述

This object is used by [`RenderingDevice`](class_renderingdevice.md).

## 属性

| [DataFormat](#enum_renderingdevice_dataformat)         | [`format`](#class_rdattachmentformat_property_format)           | ``36`` |
| [TextureSamples](#enum_renderingdevice_texturesamples) | [`samples`](#class_rdattachmentformat_property_samples)         | ``0``  |
| [`int`](class_int.md)                                  | [`usage_flags`](#class_rdattachmentformat_property_usage_flags) | ``0``  |

<!-- rst-class:: classref-section-separator -->

---

## 属性说明

<div id="_class_rdattachmentformat_property_format"></div>

[DataFormat](#enum_renderingdevice_dataformat) **format** = ``36`` <div id="class_rdattachmentformat_property_format"></div>

- `void` **set_format** ( value: [DataFormat](#enum_renderingdevice_dataformat) )
- [DataFormat](#enum_renderingdevice_dataformat) **get_format** ( )

The attachment's data format.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_rdattachmentformat_property_samples"></div>

[TextureSamples](#enum_renderingdevice_texturesamples) **samples** = ``0`` <div id="class_rdattachmentformat_property_samples"></div>

- `void` **set_samples** ( value: [TextureSamples](#enum_renderingdevice_texturesamples) )
- [TextureSamples](#enum_renderingdevice_texturesamples) **get_samples** ( )

The number of samples used when sampling the attachment.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_rdattachmentformat_property_usage_flags"></div>

[`int`](class_int.md) **usage_flags** = ``0`` <div id="class_rdattachmentformat_property_usage_flags"></div>

- `void` **set_usage_flags** ( value: [`int`](class_int.md) )
- [`int`](class_int.md) **get_usage_flags** ( )

The attachment's usage flags, which determine what can be done with it.

[^virtual]: 本方法通常需要用户覆盖才能生效。
[^const]: 本方法无副作用，不会修改该实例的任何成员变量。
[^vararg]: 本方法除了能接受在此处描述的参数外，还能够继续接受任意数量的参数。
[^constructor]: 本方法用于构造某个类型。
[^static]: 调用本方法无需实例，可直接使用类名进行调用。
[^operator]: 本方法描述的是使用本类型作为左操作数的有效运算符。
[^bitfield]: 这个值是由下列位标志构成位掩码的整数。
[^void]: 无返回值。
