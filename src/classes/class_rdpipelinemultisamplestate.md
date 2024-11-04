<!-- ⚠ 请勿编辑本文件 ⚠ -->
<!-- 本文档使用脚本从 WeDot 引擎源码仓库生成。 -->
<!-- 生成脚本：https://github.com/WeDot-Engine/WeDot/tree/4.3/doc/tools/make_md.py； -->
<!-- 原文件：https://github.com/WeDot-Engine/WeDot/tree/4.3/doc/classes/RDPipelineMultisampleState.xml。 -->

<div id="_class_rdpipelinemultisamplestate"></div>

# RDPipelineMultisampleState

**继承：** [`RefCounted`](class_refcounted.md) **<** [`Object`](class_object.md)

Pipeline multisample state (used by [`RenderingDevice`](class_renderingdevice.md)).

## 描述

**RDPipelineMultisampleState** is used to control how multisample or supersample antialiasing is being performed when rendering using [`RenderingDevice`](class_renderingdevice.md).

## 属性

| [`bool`](class_bool.md)                                | [`enable_alpha_to_coverage`](#class_rdpipelinemultisamplestate_property_enable_alpha_to_coverage) | ``false`` |
| [`bool`](class_bool.md)                                | [`enable_alpha_to_one`](#class_rdpipelinemultisamplestate_property_enable_alpha_to_one)           | ``false`` |
| [`bool`](class_bool.md)                                | [`enable_sample_shading`](#class_rdpipelinemultisamplestate_property_enable_sample_shading)       | ``false`` |
| [`float`](class_float.md)                              | [`min_sample_shading`](#class_rdpipelinemultisamplestate_property_min_sample_shading)             | ``0.0``   |
| [TextureSamples](#enum_renderingdevice_texturesamples) | [`sample_count`](#class_rdpipelinemultisamplestate_property_sample_count)                         | ``0``     |
| [Array](class_array.md) [`int`](class_int.md)          | [`sample_masks`](#class_rdpipelinemultisamplestate_property_sample_masks)                         | ``[]``    |

<!-- rst-class:: classref-section-separator -->

---

## 属性说明

<div id="_class_rdpipelinemultisamplestate_property_enable_alpha_to_coverage"></div>

[`bool`](class_bool.md) **enable_alpha_to_coverage** = ``false`` <div id="class_rdpipelinemultisamplestate_property_enable_alpha_to_coverage"></div>

- `void` **set_enable_alpha_to_coverage** ( value: [`bool`](class_bool.md) )
- [`bool`](class_bool.md) **get_enable_alpha_to_coverage** ( )

If `true`, alpha to coverage is enabled. This generates a temporary coverage value based on the alpha component of the fragment's first color output. This allows alpha transparency to make use of multisample antialiasing.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_rdpipelinemultisamplestate_property_enable_alpha_to_one"></div>

[`bool`](class_bool.md) **enable_alpha_to_one** = ``false`` <div id="class_rdpipelinemultisamplestate_property_enable_alpha_to_one"></div>

- `void` **set_enable_alpha_to_one** ( value: [`bool`](class_bool.md) )
- [`bool`](class_bool.md) **get_enable_alpha_to_one** ( )

If `true`, alpha is forced to either `0.0` or `1.0`. This allows hardening the edges of antialiased alpha transparencies. Only relevant if [`enable_alpha_to_coverage`](#class_rdpipelinemultisamplestate_property_enable_alpha_to_coverage) is `true`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_rdpipelinemultisamplestate_property_enable_sample_shading"></div>

[`bool`](class_bool.md) **enable_sample_shading** = ``false`` <div id="class_rdpipelinemultisamplestate_property_enable_sample_shading"></div>

- `void` **set_enable_sample_shading** ( value: [`bool`](class_bool.md) )
- [`bool`](class_bool.md) **get_enable_sample_shading** ( )

If `true`, enables per-sample shading which replaces MSAA by SSAA. This provides higher quality antialiasing that works with transparent (alpha scissor) edges. This has a very high performance cost. See also [`min_sample_shading`](#class_rdpipelinemultisamplestate_property_min_sample_shading). See the [*per-sample shading Vulkan documentation*](https://registry.khronos.org/vulkan/specs/1.3-extensions/html/vkspec.html#primsrast-sampleshading) for more details.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_rdpipelinemultisamplestate_property_min_sample_shading"></div>

[`float`](class_float.md) **min_sample_shading** = ``0.0`` <div id="class_rdpipelinemultisamplestate_property_min_sample_shading"></div>

- `void` **set_min_sample_shading** ( value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_min_sample_shading** ( )

The multiplier of [`sample_count`](#class_rdpipelinemultisamplestate_property_sample_count) that determines how many samples are performed for each fragment. Must be between `0.0` and `1.0` (inclusive). Only effective if [`enable_sample_shading`](#class_rdpipelinemultisamplestate_property_enable_sample_shading) is `true`. If [`min_sample_shading`](#class_rdpipelinemultisamplestate_property_min_sample_shading) is `1.0`, fragment invocation must only read from the coverage index sample. Tile image access must not be used if [`enable_sample_shading`](#class_rdpipelinemultisamplestate_property_enable_sample_shading) is *not* `1.0`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_rdpipelinemultisamplestate_property_sample_count"></div>

[TextureSamples](#enum_renderingdevice_texturesamples) **sample_count** = ``0`` <div id="class_rdpipelinemultisamplestate_property_sample_count"></div>

- `void` **set_sample_count** ( value: [TextureSamples](#enum_renderingdevice_texturesamples) )
- [TextureSamples](#enum_renderingdevice_texturesamples) **get_sample_count** ( )

The number of MSAA samples (or SSAA samples if [`enable_sample_shading`](#class_rdpipelinemultisamplestate_property_enable_sample_shading) is `true`) to perform. Higher values result in better antialiasing, at the cost of performance.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_rdpipelinemultisamplestate_property_sample_masks"></div>

[Array](class_array.md) [`int`](class_int.md) **sample_masks** = ``[]`` <div id="class_rdpipelinemultisamplestate_property_sample_masks"></div>

- `void` **set_sample_masks** ( value: [Array](class_array.md) [`int`](class_int.md) )
- [Array](class_array.md) [`int`](class_int.md) **get_sample_masks** ( )

The sample mask array. See the [*sample mask Vulkan documentation*](https://registry.khronos.org/vulkan/specs/1.3-extensions/html/vkspec.html#fragops-samplemask) for more details.

[^virtual]: 本方法通常需要用户覆盖才能生效。
[^const]: 本方法无副作用，不会修改该实例的任何成员变量。
[^vararg]: 本方法除了能接受在此处描述的参数外，还能够继续接受任意数量的参数。
[^constructor]: 本方法用于构造某个类型。
[^static]: 调用本方法无需实例，可直接使用类名进行调用。
[^operator]: 本方法描述的是使用本类型作为左操作数的有效运算符。
[^bitfield]: 这个值是由下列位标志构成位掩码的整数。
[^void]: 无返回值。
