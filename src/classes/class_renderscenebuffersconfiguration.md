<!-- ⚠ 请勿编辑本文件 ⚠ -->
<!-- 本文档使用脚本从 WeDot 引擎源码仓库生成。 -->
<!-- 生成脚本：https://github.com/WeDot-Engine/WeDot/tree/4.3/doc/tools/make_md.py； -->
<!-- 原文件：https://github.com/WeDot-Engine/WeDot/tree/4.3/doc/classes/RenderSceneBuffersConfiguration.xml。 -->

<div id="_class_renderscenebuffersconfiguration"></div>

# RenderSceneBuffersConfiguration

**继承：** [`RefCounted`](class_refcounted.md) **<** [`Object`](class_object.md)

Configuration object used to setup a [`RenderSceneBuffers`](class_renderscenebuffers.md) object.

## 描述

This configuration object is created and populated by the render engine on a viewport change and used to (re)configure a [`RenderSceneBuffers`](class_renderscenebuffers.md) object.

## 属性

| [`float`](class_float.md)                                            | [`fsr_sharpness`](#class_renderscenebuffersconfiguration_property_fsr_sharpness)             | ``0.0``            |
| [`Vector2i`](class_vector2i.md)                                      | [`internal_size`](#class_renderscenebuffersconfiguration_property_internal_size)             | ``Vector2i(0, 0)`` |
| [ViewportMSAA](#enum_renderingserver_viewportmsaa)                   | [`msaa_3d`](#class_renderscenebuffersconfiguration_property_msaa_3d)                         | ``0``              |
| [`RID`](class_rid.md)                                                | [`render_target`](#class_renderscenebuffersconfiguration_property_render_target)             | ``RID()``          |
| [ViewportScaling3DMode](#enum_renderingserver_viewportscaling3dmode) | [`scaling_3d_mode`](#class_renderscenebuffersconfiguration_property_scaling_3d_mode)         | ``255``            |
| [ViewportScreenSpaceAA](#enum_renderingserver_viewportscreenspaceaa) | [`screen_space_aa`](#class_renderscenebuffersconfiguration_property_screen_space_aa)         | ``0``              |
| [`Vector2i`](class_vector2i.md)                                      | [`target_size`](#class_renderscenebuffersconfiguration_property_target_size)                 | ``Vector2i(0, 0)`` |
| [`float`](class_float.md)                                            | [`texture_mipmap_bias`](#class_renderscenebuffersconfiguration_property_texture_mipmap_bias) | ``0.0``            |
| [`int`](class_int.md)                                                | [`view_count`](#class_renderscenebuffersconfiguration_property_view_count)                   | ``1``              |

<!-- rst-class:: classref-section-separator -->

---

## 属性说明

<div id="_class_renderscenebuffersconfiguration_property_fsr_sharpness"></div>

[`float`](class_float.md) **fsr_sharpness** = ``0.0`` <div id="class_renderscenebuffersconfiguration_property_fsr_sharpness"></div>

- `void` **set_fsr_sharpness** ( value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_fsr_sharpness** ( )

FSR Sharpness applicable if FSR upscaling is used.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_renderscenebuffersconfiguration_property_internal_size"></div>

[`Vector2i`](class_vector2i.md) **internal_size** = ``Vector2i(0, 0)`` <div id="class_renderscenebuffersconfiguration_property_internal_size"></div>

- `void` **set_internal_size** ( value: [`Vector2i`](class_vector2i.md) )
- [`Vector2i`](class_vector2i.md) **get_internal_size** ( )

The size of the 3D render buffer used for rendering.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_renderscenebuffersconfiguration_property_msaa_3d"></div>

[ViewportMSAA](#enum_renderingserver_viewportmsaa) **msaa_3d** = ``0`` <div id="class_renderscenebuffersconfiguration_property_msaa_3d"></div>

- `void` **set_msaa_3d** ( value: [ViewportMSAA](#enum_renderingserver_viewportmsaa) )
- [ViewportMSAA](#enum_renderingserver_viewportmsaa) **get_msaa_3d** ( )

The MSAA mode we're using for 3D rendering.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_renderscenebuffersconfiguration_property_render_target"></div>

[`RID`](class_rid.md) **render_target** = ``RID()`` <div id="class_renderscenebuffersconfiguration_property_render_target"></div>

- `void` **set_render_target** ( value: [`RID`](class_rid.md) )
- [`RID`](class_rid.md) **get_render_target** ( )

The render target associated with these buffer.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_renderscenebuffersconfiguration_property_scaling_3d_mode"></div>

[ViewportScaling3DMode](#enum_renderingserver_viewportscaling3dmode) **scaling_3d_mode** = ``255`` <div id="class_renderscenebuffersconfiguration_property_scaling_3d_mode"></div>

- `void` **set_scaling_3d_mode** ( value: [ViewportScaling3DMode](#enum_renderingserver_viewportscaling3dmode) )
- [ViewportScaling3DMode](#enum_renderingserver_viewportscaling3dmode) **get_scaling_3d_mode** ( )

The requested scaling mode with which we upscale/downscale if [`internal_size`](#class_renderscenebuffersconfiguration_property_internal_size) and [`target_size`](#class_renderscenebuffersconfiguration_property_target_size) are not equal.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_renderscenebuffersconfiguration_property_screen_space_aa"></div>

[ViewportScreenSpaceAA](#enum_renderingserver_viewportscreenspaceaa) **screen_space_aa** = ``0`` <div id="class_renderscenebuffersconfiguration_property_screen_space_aa"></div>

- `void` **set_screen_space_aa** ( value: [ViewportScreenSpaceAA](#enum_renderingserver_viewportscreenspaceaa) )
- [ViewportScreenSpaceAA](#enum_renderingserver_viewportscreenspaceaa) **get_screen_space_aa** ( )

The requested screen space AA applied in post processing.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_renderscenebuffersconfiguration_property_target_size"></div>

[`Vector2i`](class_vector2i.md) **target_size** = ``Vector2i(0, 0)`` <div id="class_renderscenebuffersconfiguration_property_target_size"></div>

- `void` **set_target_size** ( value: [`Vector2i`](class_vector2i.md) )
- [`Vector2i`](class_vector2i.md) **get_target_size** ( )

The target (upscale) size if scaling is used.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_renderscenebuffersconfiguration_property_texture_mipmap_bias"></div>

[`float`](class_float.md) **texture_mipmap_bias** = ``0.0`` <div id="class_renderscenebuffersconfiguration_property_texture_mipmap_bias"></div>

- `void` **set_texture_mipmap_bias** ( value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_texture_mipmap_bias** ( )

Bias applied to mipmaps.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_renderscenebuffersconfiguration_property_view_count"></div>

[`int`](class_int.md) **view_count** = ``1`` <div id="class_renderscenebuffersconfiguration_property_view_count"></div>

- `void` **set_view_count** ( value: [`int`](class_int.md) )
- [`int`](class_int.md) **get_view_count** ( )

The number of views we're rendering.

[^virtual]: 本方法通常需要用户覆盖才能生效。
[^const]: 本方法无副作用，不会修改该实例的任何成员变量。
[^vararg]: 本方法除了能接受在此处描述的参数外，还能够继续接受任意数量的参数。
[^constructor]: 本方法用于构造某个类型。
[^static]: 调用本方法无需实例，可直接使用类名进行调用。
[^operator]: 本方法描述的是使用本类型作为左操作数的有效运算符。
[^bitfield]: 这个值是由下列位标志构成位掩码的整数。
[^void]: 无返回值。
