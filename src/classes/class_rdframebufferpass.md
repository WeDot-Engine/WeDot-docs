<!-- ⚠ 请勿编辑本文件 ⚠ -->
<!-- 本文档使用脚本从 WeDot 引擎源码仓库生成。 -->
<!-- 生成脚本：https://github.com/WeDot-Engine/WeDot/tree/4.3/doc/tools/make_md.py； -->
<!-- 原文件：https://github.com/WeDot-Engine/WeDot/tree/4.3/doc/classes/RDFramebufferPass.xml。 -->

<div id="_class_rdframebufferpass"></div>

# RDFramebufferPass

**继承：** [`RefCounted`](class_refcounted.md) **<** [`Object`](class_object.md)

Framebuffer pass attachment description (used by [`RenderingDevice`](class_renderingdevice.md)).

## 描述

This class contains the list of attachment descriptions for a framebuffer pass. Each points with an index to a previously supplied list of texture attachments.

Multipass framebuffers can optimize some configurations in mobile. On desktop, they provide little to no advantage.

This object is used by [`RenderingDevice`](class_renderingdevice.md).

## 属性

| [`PackedInt32Array`](class_packedint32array.md) | [`color_attachments`](#class_rdframebufferpass_property_color_attachments)       | ``PackedInt32Array()`` |
| [`int`](class_int.md)                           | [`depth_attachment`](#class_rdframebufferpass_property_depth_attachment)         | ``-1``                 |
| [`PackedInt32Array`](class_packedint32array.md) | [`input_attachments`](#class_rdframebufferpass_property_input_attachments)       | ``PackedInt32Array()`` |
| [`PackedInt32Array`](class_packedint32array.md) | [`preserve_attachments`](#class_rdframebufferpass_property_preserve_attachments) | ``PackedInt32Array()`` |
| [`PackedInt32Array`](class_packedint32array.md) | [`resolve_attachments`](#class_rdframebufferpass_property_resolve_attachments)   | ``PackedInt32Array()`` |

<!-- rst-class:: classref-section-separator -->

---

## 常量

<div id="_class_rdframebufferpass_constant_attachment_unused"></div>

**ATTACHMENT_UNUSED** = ``-1`` <div id="class_rdframebufferpass_constant_attachment_unused"></div>

Attachment is unused.

<!-- rst-class:: classref-section-separator -->

---

## 属性说明

<div id="_class_rdframebufferpass_property_color_attachments"></div>

[`PackedInt32Array`](class_packedint32array.md) **color_attachments** = ``PackedInt32Array()`` <div id="class_rdframebufferpass_property_color_attachments"></div>

- `void` **set_color_attachments** ( value: [`PackedInt32Array`](class_packedint32array.md) )
- [`PackedInt32Array`](class_packedint32array.md) **get_color_attachments** ( )

Color attachments in order starting from 0. If this attachment is not used by the shader, pass ATTACHMENT_UNUSED to skip.

**Note:** The returned array is *copied* and any changes to it will not update the original property value. See [`PackedInt32Array`](class_packedint32array.md) for more details.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_rdframebufferpass_property_depth_attachment"></div>

[`int`](class_int.md) **depth_attachment** = ``-1`` <div id="class_rdframebufferpass_property_depth_attachment"></div>

- `void` **set_depth_attachment** ( value: [`int`](class_int.md) )
- [`int`](class_int.md) **get_depth_attachment** ( )

Depth attachment. ATTACHMENT_UNUSED should be used if no depth buffer is required for this pass.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_rdframebufferpass_property_input_attachments"></div>

[`PackedInt32Array`](class_packedint32array.md) **input_attachments** = ``PackedInt32Array()`` <div id="class_rdframebufferpass_property_input_attachments"></div>

- `void` **set_input_attachments** ( value: [`PackedInt32Array`](class_packedint32array.md) )
- [`PackedInt32Array`](class_packedint32array.md) **get_input_attachments** ( )

Used for multipass framebuffers (more than one render pass). Converts an attachment to an input. Make sure to also supply it properly in the [`RDUniform`](class_rduniform.md) for the uniform set.

**Note:** The returned array is *copied* and any changes to it will not update the original property value. See [`PackedInt32Array`](class_packedint32array.md) for more details.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_rdframebufferpass_property_preserve_attachments"></div>

[`PackedInt32Array`](class_packedint32array.md) **preserve_attachments** = ``PackedInt32Array()`` <div id="class_rdframebufferpass_property_preserve_attachments"></div>

- `void` **set_preserve_attachments** ( value: [`PackedInt32Array`](class_packedint32array.md) )
- [`PackedInt32Array`](class_packedint32array.md) **get_preserve_attachments** ( )

Attachments to preserve in this pass (otherwise they are erased).

**Note:** The returned array is *copied* and any changes to it will not update the original property value. See [`PackedInt32Array`](class_packedint32array.md) for more details.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_rdframebufferpass_property_resolve_attachments"></div>

[`PackedInt32Array`](class_packedint32array.md) **resolve_attachments** = ``PackedInt32Array()`` <div id="class_rdframebufferpass_property_resolve_attachments"></div>

- `void` **set_resolve_attachments** ( value: [`PackedInt32Array`](class_packedint32array.md) )
- [`PackedInt32Array`](class_packedint32array.md) **get_resolve_attachments** ( )

If the color attachments are multisampled, non-multisampled resolve attachments can be provided.

**Note:** The returned array is *copied* and any changes to it will not update the original property value. See [`PackedInt32Array`](class_packedint32array.md) for more details.

[^virtual]: 本方法通常需要用户覆盖才能生效。
[^const]: 本方法无副作用，不会修改该实例的任何成员变量。
[^vararg]: 本方法除了能接受在此处描述的参数外，还能够继续接受任意数量的参数。
[^constructor]: 本方法用于构造某个类型。
[^static]: 调用本方法无需实例，可直接使用类名进行调用。
[^operator]: 本方法描述的是使用本类型作为左操作数的有效运算符。
[^bitfield]: 这个值是由下列位标志构成位掩码的整数。
[^void]: 无返回值。
