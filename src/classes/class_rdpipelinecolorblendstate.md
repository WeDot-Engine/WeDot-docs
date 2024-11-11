<!-- ⚠ 请勿编辑本文件 ⚠ -->
<!-- 本文档使用脚本从 WeDot 引擎源码仓库生成。 -->
<!-- 生成脚本：https://github.com/WeDot-Engine/WeDot/tree/master/doc/tools/make_md.py； -->
<!-- 原文件：https://github.com/WeDot-Engine/WeDot/tree/master/doc/classes/RDPipelineColorBlendState.xml。 -->

<div id="_class_rdpipelinecolorblendstate"></div>

# RDPipelineColorBlendState

**继承：** [`RefCounted`](class_refcounted.md) **<** [`Object`](class_object.md)

Pipeline color blend state (used by [`RenderingDevice`](class_renderingdevice.md)).

## 描述

This object is used by [`RenderingDevice`](class_renderingdevice.md).

## 属性

|||
|:-:|:--|
| [Array](class_array.md) [`RDPipelineColorBlendStateAttachment`](class_rdpipelinecolorblendstateattachment.md) | [`attachments`](class_rdpipelinecolorblendstate.md#class_rdpipelinecolorblendstate_property_attachments)         | ``[]``                |
| [`Color`](class_color.md)                                                                                     | [`blend_constant`](class_rdpipelinecolorblendstate.md#class_rdpipelinecolorblendstate_property_blend_constant)   | ``Color(0, 0, 0, 1)`` |
| [`bool`](class_bool.md)                                                                                       | [`enable_logic_op`](class_rdpipelinecolorblendstate.md#class_rdpipelinecolorblendstate_property_enable_logic_op) | ``false``             |
| [LogicOperation](#enum_renderingdevice_logicoperation)                                                        | [`logic_op`](class_rdpipelinecolorblendstate.md#class_rdpipelinecolorblendstate_property_logic_op)               | ``0``                 |

<!-- rst-class:: classref-section-separator -->

---

## 属性说明

<div id="_class_rdpipelinecolorblendstate_property_attachments"></div>

[Array](class_array.md) [`RDPipelineColorBlendStateAttachment`](class_rdpipelinecolorblendstateattachment.md) **attachments** = ``[]`` <div id="class_rdpipelinecolorblendstate_property_attachments"></div>

- `void` **set_attachments** ( value: [Array](class_array.md) [`RDPipelineColorBlendStateAttachment`](class_rdpipelinecolorblendstateattachment.md) )
- [Array](class_array.md) [`RDPipelineColorBlendStateAttachment`](class_rdpipelinecolorblendstateattachment.md) **get_attachments** ( )

The attachments that are blended together.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_rdpipelinecolorblendstate_property_blend_constant"></div>

[`Color`](class_color.md) **blend_constant** = ``Color(0, 0, 0, 1)`` <div id="class_rdpipelinecolorblendstate_property_blend_constant"></div>

- `void` **set_blend_constant** ( value: [`Color`](class_color.md) )
- [`Color`](class_color.md) **get_blend_constant** ( )

The constant color to blend with. See also [`RenderingDevice.draw_list_set_blend_constants`](class_renderingdevice.md#class_renderingdevice_method_draw_list_set_blend_constants).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_rdpipelinecolorblendstate_property_enable_logic_op"></div>

[`bool`](class_bool.md) **enable_logic_op** = ``false`` <div id="class_rdpipelinecolorblendstate_property_enable_logic_op"></div>

- `void` **set_enable_logic_op** ( value: [`bool`](class_bool.md) )
- [`bool`](class_bool.md) **get_enable_logic_op** ( )

If `true`, performs the logic operation defined in [`logic_op`](class_rdpipelinecolorblendstate.md#class_rdpipelinecolorblendstate_property_logic_op).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_rdpipelinecolorblendstate_property_logic_op"></div>

[LogicOperation](#enum_renderingdevice_logicoperation) **logic_op** = ``0`` <div id="class_rdpipelinecolorblendstate_property_logic_op"></div>

- `void` **set_logic_op** ( value: [LogicOperation](#enum_renderingdevice_logicoperation) )
- [LogicOperation](#enum_renderingdevice_logicoperation) **get_logic_op** ( )

The logic operation to perform for blending. Only effective if [`enable_logic_op`](class_rdpipelinecolorblendstate.md#class_rdpipelinecolorblendstate_property_enable_logic_op) is `true`.

[^virtual]: 本方法通常需要用户覆盖才能生效。
[^const]: 本方法无副作用，不会修改该实例的任何成员变量。
[^vararg]: 本方法除了能接受在此处描述的参数外，还能够继续接受任意数量的参数。
[^constructor]: 本方法用于构造某个类型。
[^static]: 调用本方法无需实例，可直接使用类名进行调用。
[^operator]: 本方法描述的是使用本类型作为左操作数的有效运算符。
[^bitfield]: 这个值是由下列位标志构成位掩码的整数。
[^void]: 无返回值。
