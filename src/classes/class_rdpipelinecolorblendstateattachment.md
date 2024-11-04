<!-- ⚠ 请勿编辑本文件 ⚠ -->
<!-- 本文档使用脚本从 WeDot 引擎源码仓库生成。 -->
<!-- 生成脚本：https://github.com/WeDot-Engine/WeDot/tree/4.3/doc/tools/make_md.py； -->
<!-- 原文件：https://github.com/WeDot-Engine/WeDot/tree/4.3/doc/classes/RDPipelineColorBlendStateAttachment.xml。 -->

<div id="_class_rdpipelinecolorblendstateattachment"></div>

# RDPipelineColorBlendStateAttachment

**继承：** [`RefCounted`](class_refcounted.md) **<** [`Object`](class_object.md)

Pipeline color blend state attachment (used by [`RenderingDevice`](class_renderingdevice.md)).

## 描述

Controls how blending between source and destination fragments is performed when using [`RenderingDevice`](class_renderingdevice.md).

For reference, this is how common user-facing blend modes are implemented in Godot's 2D renderer:

 **Mix:** 

```

    var attachment = RDPipelineColorBlendStateAttachment.new()
    attachment.enable_blend = true
    attachment.color_blend_op = RenderingDevice.BLEND_OP_ADD
    attachment.src_color_blend_factor = RenderingDevice.BLEND_FACTOR_SRC_ALPHA
    attachment.dst_color_blend_factor = RenderingDevice.BLEND_FACTOR_ONE_MINUS_SRC_ALPHA
    attachment.alpha_blend_op = RenderingDevice.BLEND_OP_ADD
    attachment.src_alpha_blend_factor = RenderingDevice.BLEND_FACTOR_ONE
    attachment.dst_alpha_blend_factor = RenderingDevice.BLEND_FACTOR_ONE_MINUS_SRC_ALPHA
```

 **Add:** 

```

    var attachment = RDPipelineColorBlendStateAttachment.new()
    attachment.enable_blend = true
    attachment.alpha_blend_op = RenderingDevice.BLEND_OP_ADD
    attachment.color_blend_op = RenderingDevice.BLEND_OP_ADD
    attachment.src_color_blend_factor = RenderingDevice.BLEND_FACTOR_SRC_ALPHA
    attachment.dst_color_blend_factor = RenderingDevice.BLEND_FACTOR_ONE
    attachment.src_alpha_blend_factor = RenderingDevice.BLEND_FACTOR_SRC_ALPHA
    attachment.dst_alpha_blend_factor = RenderingDevice.BLEND_FACTOR_ONE
```

 **Subtract:** 

```

    var attachment = RDPipelineColorBlendStateAttachment.new()
    attachment.enable_blend = true
    attachment.alpha_blend_op = RenderingDevice.BLEND_OP_REVERSE_SUBTRACT
    attachment.color_blend_op = RenderingDevice.BLEND_OP_REVERSE_SUBTRACT
    attachment.src_color_blend_factor = RenderingDevice.BLEND_FACTOR_SRC_ALPHA
    attachment.dst_color_blend_factor = RenderingDevice.BLEND_FACTOR_ONE
    attachment.src_alpha_blend_factor = RenderingDevice.BLEND_FACTOR_SRC_ALPHA
    attachment.dst_alpha_blend_factor = RenderingDevice.BLEND_FACTOR_ONE
```

 **Multiply:** 

```

    var attachment = RDPipelineColorBlendStateAttachment.new()
    attachment.enable_blend = true
    attachment.alpha_blend_op = RenderingDevice.BLEND_OP_ADD
    attachment.color_blend_op = RenderingDevice.BLEND_OP_ADD
    attachment.src_color_blend_factor = RenderingDevice.BLEND_FACTOR_DST_COLOR
    attachment.dst_color_blend_factor = RenderingDevice.BLEND_FACTOR_ZERO
    attachment.src_alpha_blend_factor = RenderingDevice.BLEND_FACTOR_DST_ALPHA
    attachment.dst_alpha_blend_factor = RenderingDevice.BLEND_FACTOR_ZERO
```

 **Pre-multiplied alpha:** 

```

    var attachment = RDPipelineColorBlendStateAttachment.new()
    attachment.enable_blend = true
    attachment.alpha_blend_op = RenderingDevice.BLEND_OP_ADD
    attachment.color_blend_op = RenderingDevice.BLEND_OP_ADD
    attachment.src_color_blend_factor = RenderingDevice.BLEND_FACTOR_ONE
    attachment.dst_color_blend_factor = RenderingDevice.BLEND_FACTOR_ONE_MINUS_SRC_ALPHA
    attachment.src_alpha_blend_factor = RenderingDevice.BLEND_FACTOR_ONE
    attachment.dst_alpha_blend_factor = RenderingDevice.BLEND_FACTOR_ONE_MINUS_SRC_ALPHA
```











## 属性

| [BlendOperation](#enum_renderingdevice_blendoperation) | [`alpha_blend_op`](#class_rdpipelinecolorblendstateattachment_property_alpha_blend_op)                 | ``0``     |
| [BlendOperation](#enum_renderingdevice_blendoperation) | [`color_blend_op`](#class_rdpipelinecolorblendstateattachment_property_color_blend_op)                 | ``0``     |
| [BlendFactor](#enum_renderingdevice_blendfactor)       | [`dst_alpha_blend_factor`](#class_rdpipelinecolorblendstateattachment_property_dst_alpha_blend_factor) | ``0``     |
| [BlendFactor](#enum_renderingdevice_blendfactor)       | [`dst_color_blend_factor`](#class_rdpipelinecolorblendstateattachment_property_dst_color_blend_factor) | ``0``     |
| [`bool`](class_bool.md)                                | [`enable_blend`](#class_rdpipelinecolorblendstateattachment_property_enable_blend)                     | ``false`` |
| [BlendFactor](#enum_renderingdevice_blendfactor)       | [`src_alpha_blend_factor`](#class_rdpipelinecolorblendstateattachment_property_src_alpha_blend_factor) | ``0``     |
| [BlendFactor](#enum_renderingdevice_blendfactor)       | [`src_color_blend_factor`](#class_rdpipelinecolorblendstateattachment_property_src_color_blend_factor) | ``0``     |
| [`bool`](class_bool.md)                                | [`write_a`](#class_rdpipelinecolorblendstateattachment_property_write_a)                               | ``true``  |
| [`bool`](class_bool.md)                                | [`write_b`](#class_rdpipelinecolorblendstateattachment_property_write_b)                               | ``true``  |
| [`bool`](class_bool.md)                                | [`write_g`](#class_rdpipelinecolorblendstateattachment_property_write_g)                               | ``true``  |
| [`bool`](class_bool.md)                                | [`write_r`](#class_rdpipelinecolorblendstateattachment_property_write_r)                               | ``true``  |

## 方法

| `void` | [`set_as_mix`](#class_rdpipelinecolorblendstateattachment_method_set_as_mix) ( ) |

<!-- rst-class:: classref-section-separator -->

---

## 属性说明

<div id="_class_rdpipelinecolorblendstateattachment_property_alpha_blend_op"></div>

[BlendOperation](#enum_renderingdevice_blendoperation) **alpha_blend_op** = ``0`` <div id="class_rdpipelinecolorblendstateattachment_property_alpha_blend_op"></div>

- `void` **set_alpha_blend_op** ( value: [BlendOperation](#enum_renderingdevice_blendoperation) )
- [BlendOperation](#enum_renderingdevice_blendoperation) **get_alpha_blend_op** ( )

The blend mode to use for the alpha channel.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_rdpipelinecolorblendstateattachment_property_color_blend_op"></div>

[BlendOperation](#enum_renderingdevice_blendoperation) **color_blend_op** = ``0`` <div id="class_rdpipelinecolorblendstateattachment_property_color_blend_op"></div>

- `void` **set_color_blend_op** ( value: [BlendOperation](#enum_renderingdevice_blendoperation) )
- [BlendOperation](#enum_renderingdevice_blendoperation) **get_color_blend_op** ( )

The blend mode to use for the red/green/blue color channels.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_rdpipelinecolorblendstateattachment_property_dst_alpha_blend_factor"></div>

[BlendFactor](#enum_renderingdevice_blendfactor) **dst_alpha_blend_factor** = ``0`` <div id="class_rdpipelinecolorblendstateattachment_property_dst_alpha_blend_factor"></div>

- `void` **set_dst_alpha_blend_factor** ( value: [BlendFactor](#enum_renderingdevice_blendfactor) )
- [BlendFactor](#enum_renderingdevice_blendfactor) **get_dst_alpha_blend_factor** ( )

Controls how the blend factor for the alpha channel is determined based on the destination's fragments.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_rdpipelinecolorblendstateattachment_property_dst_color_blend_factor"></div>

[BlendFactor](#enum_renderingdevice_blendfactor) **dst_color_blend_factor** = ``0`` <div id="class_rdpipelinecolorblendstateattachment_property_dst_color_blend_factor"></div>

- `void` **set_dst_color_blend_factor** ( value: [BlendFactor](#enum_renderingdevice_blendfactor) )
- [BlendFactor](#enum_renderingdevice_blendfactor) **get_dst_color_blend_factor** ( )

Controls how the blend factor for the color channels is determined based on the destination's fragments.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_rdpipelinecolorblendstateattachment_property_enable_blend"></div>

[`bool`](class_bool.md) **enable_blend** = ``false`` <div id="class_rdpipelinecolorblendstateattachment_property_enable_blend"></div>

- `void` **set_enable_blend** ( value: [`bool`](class_bool.md) )
- [`bool`](class_bool.md) **get_enable_blend** ( )

If `true`, performs blending between the source and destination according to the factors defined in [`src_color_blend_factor`](#class_rdpipelinecolorblendstateattachment_property_src_color_blend_factor), [`dst_color_blend_factor`](#class_rdpipelinecolorblendstateattachment_property_dst_color_blend_factor), [`src_alpha_blend_factor`](#class_rdpipelinecolorblendstateattachment_property_src_alpha_blend_factor) and [`dst_alpha_blend_factor`](#class_rdpipelinecolorblendstateattachment_property_dst_alpha_blend_factor). The blend modes [`color_blend_op`](#class_rdpipelinecolorblendstateattachment_property_color_blend_op) and [`alpha_blend_op`](#class_rdpipelinecolorblendstateattachment_property_alpha_blend_op) are also taken into account, with [`write_r`](#class_rdpipelinecolorblendstateattachment_property_write_r), [`write_g`](#class_rdpipelinecolorblendstateattachment_property_write_g), [`write_b`](#class_rdpipelinecolorblendstateattachment_property_write_b) and [`write_a`](#class_rdpipelinecolorblendstateattachment_property_write_a) controlling the output.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_rdpipelinecolorblendstateattachment_property_src_alpha_blend_factor"></div>

[BlendFactor](#enum_renderingdevice_blendfactor) **src_alpha_blend_factor** = ``0`` <div id="class_rdpipelinecolorblendstateattachment_property_src_alpha_blend_factor"></div>

- `void` **set_src_alpha_blend_factor** ( value: [BlendFactor](#enum_renderingdevice_blendfactor) )
- [BlendFactor](#enum_renderingdevice_blendfactor) **get_src_alpha_blend_factor** ( )

Controls how the blend factor for the alpha channel is determined based on the source's fragments.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_rdpipelinecolorblendstateattachment_property_src_color_blend_factor"></div>

[BlendFactor](#enum_renderingdevice_blendfactor) **src_color_blend_factor** = ``0`` <div id="class_rdpipelinecolorblendstateattachment_property_src_color_blend_factor"></div>

- `void` **set_src_color_blend_factor** ( value: [BlendFactor](#enum_renderingdevice_blendfactor) )
- [BlendFactor](#enum_renderingdevice_blendfactor) **get_src_color_blend_factor** ( )

Controls how the blend factor for the color channels is determined based on the source's fragments.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_rdpipelinecolorblendstateattachment_property_write_a"></div>

[`bool`](class_bool.md) **write_a** = ``true`` <div id="class_rdpipelinecolorblendstateattachment_property_write_a"></div>

- `void` **set_write_a** ( value: [`bool`](class_bool.md) )
- [`bool`](class_bool.md) **get_write_a** ( )

If `true`, writes the new alpha channel to the final result.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_rdpipelinecolorblendstateattachment_property_write_b"></div>

[`bool`](class_bool.md) **write_b** = ``true`` <div id="class_rdpipelinecolorblendstateattachment_property_write_b"></div>

- `void` **set_write_b** ( value: [`bool`](class_bool.md) )
- [`bool`](class_bool.md) **get_write_b** ( )

If `true`, writes the new blue color channel to the final result.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_rdpipelinecolorblendstateattachment_property_write_g"></div>

[`bool`](class_bool.md) **write_g** = ``true`` <div id="class_rdpipelinecolorblendstateattachment_property_write_g"></div>

- `void` **set_write_g** ( value: [`bool`](class_bool.md) )
- [`bool`](class_bool.md) **get_write_g** ( )

If `true`, writes the new green color channel to the final result.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_rdpipelinecolorblendstateattachment_property_write_r"></div>

[`bool`](class_bool.md) **write_r** = ``true`` <div id="class_rdpipelinecolorblendstateattachment_property_write_r"></div>

- `void` **set_write_r** ( value: [`bool`](class_bool.md) )
- [`bool`](class_bool.md) **get_write_r** ( )

If `true`, writes the new red color channel to the final result.

<!-- rst-class:: classref-section-separator -->

---

## 方法说明

<div id="_class_rdpipelinecolorblendstateattachment_method_set_as_mix"></div>

`void` **set_as_mix** ( )<div id="class_rdpipelinecolorblendstateattachment_method_set_as_mix"></div>

Convenience method to perform standard mix blending with straight (non-premultiplied) alpha. This sets [`enable_blend`](#class_rdpipelinecolorblendstateattachment_property_enable_blend) to `true`, [`src_color_blend_factor`](#class_rdpipelinecolorblendstateattachment_property_src_color_blend_factor) to [`RenderingDevice.BLEND_FACTOR_SRC_ALPHA`](#class_renderingdevice_constant_blend_factor_src_alpha), [`dst_color_blend_factor`](#class_rdpipelinecolorblendstateattachment_property_dst_color_blend_factor) to [`RenderingDevice.BLEND_FACTOR_ONE_MINUS_SRC_ALPHA`](#class_renderingdevice_constant_blend_factor_one_minus_src_alpha), [`src_alpha_blend_factor`](#class_rdpipelinecolorblendstateattachment_property_src_alpha_blend_factor) to [`RenderingDevice.BLEND_FACTOR_SRC_ALPHA`](#class_renderingdevice_constant_blend_factor_src_alpha) and [`dst_alpha_blend_factor`](#class_rdpipelinecolorblendstateattachment_property_dst_alpha_blend_factor) to [`RenderingDevice.BLEND_FACTOR_ONE_MINUS_SRC_ALPHA`](#class_renderingdevice_constant_blend_factor_one_minus_src_alpha).

[^virtual]: 本方法通常需要用户覆盖才能生效。
[^const]: 本方法无副作用，不会修改该实例的任何成员变量。
[^vararg]: 本方法除了能接受在此处描述的参数外，还能够继续接受任意数量的参数。
[^constructor]: 本方法用于构造某个类型。
[^static]: 调用本方法无需实例，可直接使用类名进行调用。
[^operator]: 本方法描述的是使用本类型作为左操作数的有效运算符。
[^bitfield]: 这个值是由下列位标志构成位掩码的整数。
[^void]: 无返回值。
