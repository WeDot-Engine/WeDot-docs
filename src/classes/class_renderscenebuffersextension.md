<!-- ⚠ 请勿编辑本文件 ⚠ -->
<!-- 本文档使用脚本从 WeDot 引擎源码仓库生成。 -->
<!-- 生成脚本：https://github.com/WeDot-Engine/WeDot/tree/master/doc/tools/make_md.py； -->
<!-- 原文件：https://github.com/WeDot-Engine/WeDot/tree/master/doc/classes/RenderSceneBuffersExtension.xml。 -->

<div id="_class_renderscenebuffersextension"></div>

# RenderSceneBuffersExtension

**继承：** [`RenderSceneBuffers`](class_renderscenebuffers.md) **<** [`RefCounted`](class_refcounted.md) **<** [`Object`](class_object.md)

This class allows for a RenderSceneBuffer implementation to be made in GDExtension.

## 描述

This class allows for a RenderSceneBuffer implementation to be made in GDExtension.

## 方法

|||
|:-:|:--|
| `void` | [`_configure`](class_renderscenebuffersextension.md#class_renderscenebuffersextension_private_method__configure) ( config: [`RenderSceneBuffersConfiguration`](class_renderscenebuffersconfiguration.md) ) virtual[^virtual] |
| `void` | [`_set_fsr_sharpness`](class_renderscenebuffersextension.md#class_renderscenebuffersextension_private_method__set_fsr_sharpness) ( fsr_sharpness: [`float`](class_float.md) ) virtual[^virtual]                              |
| `void` | [`_set_texture_mipmap_bias`](class_renderscenebuffersextension.md#class_renderscenebuffersextension_private_method__set_texture_mipmap_bias) ( texture_mipmap_bias: [`float`](class_float.md) ) virtual[^virtual]            |
| `void` | [`_set_use_debanding`](class_renderscenebuffersextension.md#class_renderscenebuffersextension_private_method__set_use_debanding) ( use_debanding: [`bool`](class_bool.md) ) virtual[^virtual]                                |

<!-- rst-class:: classref-section-separator -->

---

## 方法说明

<div id="_class_renderscenebuffersextension_private_method__configure"></div>

`void` **_configure** ( config: [`RenderSceneBuffersConfiguration`](class_renderscenebuffersconfiguration.md) ) virtual[^virtual]<div id="class_renderscenebuffersextension_private_method__configure"></div>

Implement this in GDExtension to handle the (re)sizing of a viewport.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_renderscenebuffersextension_private_method__set_fsr_sharpness"></div>

`void` **_set_fsr_sharpness** ( fsr_sharpness: [`float`](class_float.md) ) virtual[^virtual]<div id="class_renderscenebuffersextension_private_method__set_fsr_sharpness"></div>

Implement this in GDExtension to record a new FSR sharpness value.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_renderscenebuffersextension_private_method__set_texture_mipmap_bias"></div>

`void` **_set_texture_mipmap_bias** ( texture_mipmap_bias: [`float`](class_float.md) ) virtual[^virtual]<div id="class_renderscenebuffersextension_private_method__set_texture_mipmap_bias"></div>

Implement this in GDExtension to change the texture mipmap bias.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_renderscenebuffersextension_private_method__set_use_debanding"></div>

`void` **_set_use_debanding** ( use_debanding: [`bool`](class_bool.md) ) virtual[^virtual]<div id="class_renderscenebuffersextension_private_method__set_use_debanding"></div>

Implement this in GDExtension to react to the debanding flag changing.

[^virtual]: 本方法通常需要用户覆盖才能生效。
[^const]: 本方法无副作用，不会修改该实例的任何成员变量。
[^vararg]: 本方法除了能接受在此处描述的参数外，还能够继续接受任意数量的参数。
[^constructor]: 本方法用于构造某个类型。
[^static]: 调用本方法无需实例，可直接使用类名进行调用。
[^operator]: 本方法描述的是使用本类型作为左操作数的有效运算符。
[^bitfield]: 这个值是由下列位标志构成位掩码的整数。
[^void]: 无返回值。
