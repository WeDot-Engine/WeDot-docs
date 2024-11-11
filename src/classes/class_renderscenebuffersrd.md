<!-- ⚠ 请勿编辑本文件 ⚠ -->
<!-- 本文档使用脚本从 WeDot 引擎源码仓库生成。 -->
<!-- 生成脚本：https://github.com/WeDot-Engine/WeDot/tree/master/doc/tools/make_md.py； -->
<!-- 原文件：https://github.com/WeDot-Engine/WeDot/tree/master/doc/classes/RenderSceneBuffersRD.xml。 -->

<div id="_class_renderscenebuffersrd"></div>

# RenderSceneBuffersRD

**继承：** [`RenderSceneBuffers`](class_renderscenebuffers.md) **<** [`RefCounted`](class_refcounted.md) **<** [`Object`](class_object.md)

Render scene buffer implementation for the RenderingDevice based renderers.

## 描述

This object manages all 3D rendering buffers for the rendering device based renderers. An instance of this object is created for every viewport that has 3D rendering enabled.

All buffers are organized in **contexts**. The default context is called **render_buffers** and can contain amongst others the color buffer, depth buffer, velocity buffers, VRS density map and MSAA variants of these buffers.

Buffers are only guaranteed to exist during rendering of the viewport.

 **Note:** This is an internal rendering server object, do not instantiate this from script.

## 方法

|||
|:-:|:--|
| `void`                                                               | [`clear_context`](class_renderscenebuffersrd.md#class_renderscenebuffersrd_method_clear_context) ( context: [`StringName`](class_stringname.md) )                                                                                                                                                                                                                                                                                                                                                              |
| [`RID`](class_rid.md)                                                | [`create_texture`](class_renderscenebuffersrd.md#class_renderscenebuffersrd_method_create_texture) ( context: [`StringName`](class_stringname.md), name: [`StringName`](class_stringname.md), data_format: [DataFormat](#enum_renderingdevice_dataformat), usage_bits: [`int`](class_int.md), texture_samples: [TextureSamples](#enum_renderingdevice_texturesamples), size: [`Vector2i`](class_vector2i.md), layers: [`int`](class_int.md), mipmaps: [`int`](class_int.md), unique: [`bool`](class_bool.md) ) |
| [`RID`](class_rid.md)                                                | [`create_texture_from_format`](class_renderscenebuffersrd.md#class_renderscenebuffersrd_method_create_texture_from_format) ( context: [`StringName`](class_stringname.md), name: [`StringName`](class_stringname.md), format: [`RDTextureFormat`](class_rdtextureformat.md), view: [`RDTextureView`](class_rdtextureview.md), unique: [`bool`](class_bool.md) )                                                                                                                                                |
| [`RID`](class_rid.md)                                                | [`create_texture_view`](class_renderscenebuffersrd.md#class_renderscenebuffersrd_method_create_texture_view) ( context: [`StringName`](class_stringname.md), name: [`StringName`](class_stringname.md), view_name: [`StringName`](class_stringname.md), view: [`RDTextureView`](class_rdtextureview.md) )                                                                                                                                                                                                      |
| [`RID`](class_rid.md)                                                | [`get_color_layer`](class_renderscenebuffersrd.md#class_renderscenebuffersrd_method_get_color_layer) ( layer: [`int`](class_int.md), msaa: [`bool`](class_bool.md) = false )                                                                                                                                                                                                                                                                                                                                   |
| [`RID`](class_rid.md)                                                | [`get_color_texture`](class_renderscenebuffersrd.md#class_renderscenebuffersrd_method_get_color_texture) ( msaa: [`bool`](class_bool.md) = false )                                                                                                                                                                                                                                                                                                                                                             |
| [`RID`](class_rid.md)                                                | [`get_depth_layer`](class_renderscenebuffersrd.md#class_renderscenebuffersrd_method_get_depth_layer) ( layer: [`int`](class_int.md), msaa: [`bool`](class_bool.md) = false )                                                                                                                                                                                                                                                                                                                                   |
| [`RID`](class_rid.md)                                                | [`get_depth_texture`](class_renderscenebuffersrd.md#class_renderscenebuffersrd_method_get_depth_texture) ( msaa: [`bool`](class_bool.md) = false )                                                                                                                                                                                                                                                                                                                                                             |
| [`float`](class_float.md)                                            | [`get_fsr_sharpness`](class_renderscenebuffersrd.md#class_renderscenebuffersrd_method_get_fsr_sharpness) ( ) const[^const]                                                                                                                                                                                                                                                                                                                                                                                     |
| [`Vector2i`](class_vector2i.md)                                      | [`get_internal_size`](class_renderscenebuffersrd.md#class_renderscenebuffersrd_method_get_internal_size) ( ) const[^const]                                                                                                                                                                                                                                                                                                                                                                                     |
| [ViewportMSAA](#enum_renderingserver_viewportmsaa)                   | [`get_msaa_3d`](class_renderscenebuffersrd.md#class_renderscenebuffersrd_method_get_msaa_3d) ( ) const[^const]                                                                                                                                                                                                                                                                                                                                                                                                 |
| [`RID`](class_rid.md)                                                | [`get_render_target`](class_renderscenebuffersrd.md#class_renderscenebuffersrd_method_get_render_target) ( ) const[^const]                                                                                                                                                                                                                                                                                                                                                                                     |
| [ViewportScaling3DMode](#enum_renderingserver_viewportscaling3dmode) | [`get_scaling_3d_mode`](class_renderscenebuffersrd.md#class_renderscenebuffersrd_method_get_scaling_3d_mode) ( ) const[^const]                                                                                                                                                                                                                                                                                                                                                                                 |
| [ViewportScreenSpaceAA](#enum_renderingserver_viewportscreenspaceaa) | [`get_screen_space_aa`](class_renderscenebuffersrd.md#class_renderscenebuffersrd_method_get_screen_space_aa) ( ) const[^const]                                                                                                                                                                                                                                                                                                                                                                                 |
| [`Vector2i`](class_vector2i.md)                                      | [`get_target_size`](class_renderscenebuffersrd.md#class_renderscenebuffersrd_method_get_target_size) ( ) const[^const]                                                                                                                                                                                                                                                                                                                                                                                         |
| [`RID`](class_rid.md)                                                | [`get_texture`](class_renderscenebuffersrd.md#class_renderscenebuffersrd_method_get_texture) ( context: [`StringName`](class_stringname.md), name: [`StringName`](class_stringname.md) ) const[^const]                                                                                                                                                                                                                                                                                                         |
| [`RDTextureFormat`](class_rdtextureformat.md)                        | [`get_texture_format`](class_renderscenebuffersrd.md#class_renderscenebuffersrd_method_get_texture_format) ( context: [`StringName`](class_stringname.md), name: [`StringName`](class_stringname.md) ) const[^const]                                                                                                                                                                                                                                                                                           |
| [TextureSamples](#enum_renderingdevice_texturesamples)               | [`get_texture_samples`](class_renderscenebuffersrd.md#class_renderscenebuffersrd_method_get_texture_samples) ( ) const[^const]                                                                                                                                                                                                                                                                                                                                                                                 |
| [`RID`](class_rid.md)                                                | [`get_texture_slice`](class_renderscenebuffersrd.md#class_renderscenebuffersrd_method_get_texture_slice) ( context: [`StringName`](class_stringname.md), name: [`StringName`](class_stringname.md), layer: [`int`](class_int.md), mipmap: [`int`](class_int.md), layers: [`int`](class_int.md), mipmaps: [`int`](class_int.md) )                                                                                                                                                                               |
| [`Vector2i`](class_vector2i.md)                                      | [`get_texture_slice_size`](class_renderscenebuffersrd.md#class_renderscenebuffersrd_method_get_texture_slice_size) ( context: [`StringName`](class_stringname.md), name: [`StringName`](class_stringname.md), mipmap: [`int`](class_int.md) )                                                                                                                                                                                                                                                                  |
| [`RID`](class_rid.md)                                                | [`get_texture_slice_view`](class_renderscenebuffersrd.md#class_renderscenebuffersrd_method_get_texture_slice_view) ( context: [`StringName`](class_stringname.md), name: [`StringName`](class_stringname.md), layer: [`int`](class_int.md), mipmap: [`int`](class_int.md), layers: [`int`](class_int.md), mipmaps: [`int`](class_int.md), view: [`RDTextureView`](class_rdtextureview.md) )                                                                                                                    |
| [`bool`](class_bool.md)                                              | [`get_use_debanding`](class_renderscenebuffersrd.md#class_renderscenebuffersrd_method_get_use_debanding) ( ) const[^const]                                                                                                                                                                                                                                                                                                                                                                                     |
| [`bool`](class_bool.md)                                              | [`get_use_taa`](class_renderscenebuffersrd.md#class_renderscenebuffersrd_method_get_use_taa) ( ) const[^const]                                                                                                                                                                                                                                                                                                                                                                                                 |
| [`RID`](class_rid.md)                                                | [`get_velocity_layer`](class_renderscenebuffersrd.md#class_renderscenebuffersrd_method_get_velocity_layer) ( layer: [`int`](class_int.md), msaa: [`bool`](class_bool.md) = false )                                                                                                                                                                                                                                                                                                                             |
| [`RID`](class_rid.md)                                                | [`get_velocity_texture`](class_renderscenebuffersrd.md#class_renderscenebuffersrd_method_get_velocity_texture) ( msaa: [`bool`](class_bool.md) = false )                                                                                                                                                                                                                                                                                                                                                       |
| [`int`](class_int.md)                                                | [`get_view_count`](class_renderscenebuffersrd.md#class_renderscenebuffersrd_method_get_view_count) ( ) const[^const]                                                                                                                                                                                                                                                                                                                                                                                           |
| [`bool`](class_bool.md)                                              | [`has_texture`](class_renderscenebuffersrd.md#class_renderscenebuffersrd_method_has_texture) ( context: [`StringName`](class_stringname.md), name: [`StringName`](class_stringname.md) ) const[^const]                                                                                                                                                                                                                                                                                                         |

<!-- rst-class:: classref-section-separator -->

---

## 方法说明

<div id="_class_renderscenebuffersrd_method_clear_context"></div>

`void` **clear_context** ( context: [`StringName`](class_stringname.md) )<div id="class_renderscenebuffersrd_method_clear_context"></div>

Frees all buffers related to this context.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_renderscenebuffersrd_method_create_texture"></div>

[`RID`](class_rid.md) **create_texture** ( context: [`StringName`](class_stringname.md), name: [`StringName`](class_stringname.md), data_format: [DataFormat](#enum_renderingdevice_dataformat), usage_bits: [`int`](class_int.md), texture_samples: [TextureSamples](#enum_renderingdevice_texturesamples), size: [`Vector2i`](class_vector2i.md), layers: [`int`](class_int.md), mipmaps: [`int`](class_int.md), unique: [`bool`](class_bool.md) )<div id="class_renderscenebuffersrd_method_create_texture"></div>

Create a new texture with the given definition and cache this under the given name. Will return the existing texture if it already exists.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_renderscenebuffersrd_method_create_texture_from_format"></div>

[`RID`](class_rid.md) **create_texture_from_format** ( context: [`StringName`](class_stringname.md), name: [`StringName`](class_stringname.md), format: [`RDTextureFormat`](class_rdtextureformat.md), view: [`RDTextureView`](class_rdtextureview.md), unique: [`bool`](class_bool.md) )<div id="class_renderscenebuffersrd_method_create_texture_from_format"></div>

Create a new texture using the given format and view and cache this under the given name. Will return the existing texture if it already exists.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_renderscenebuffersrd_method_create_texture_view"></div>

[`RID`](class_rid.md) **create_texture_view** ( context: [`StringName`](class_stringname.md), name: [`StringName`](class_stringname.md), view_name: [`StringName`](class_stringname.md), view: [`RDTextureView`](class_rdtextureview.md) )<div id="class_renderscenebuffersrd_method_create_texture_view"></div>

Create a new texture view for an existing texture and cache this under the given view_name. Will return the existing teture view if it already exists. Will error if the source texture doesn't exist.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_renderscenebuffersrd_method_get_color_layer"></div>

[`RID`](class_rid.md) **get_color_layer** ( layer: [`int`](class_int.md), msaa: [`bool`](class_bool.md) = false )<div id="class_renderscenebuffersrd_method_get_color_layer"></div>

Returns the specified layer from the color texture we are rendering 3D content to.

If `msaa` is **true** and MSAA is enabled, this returns the MSAA variant of the buffer.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_renderscenebuffersrd_method_get_color_texture"></div>

[`RID`](class_rid.md) **get_color_texture** ( msaa: [`bool`](class_bool.md) = false )<div id="class_renderscenebuffersrd_method_get_color_texture"></div>

Returns the color texture we are rendering 3D content to. If multiview is used this will be a texture array with all views.

If `msaa` is **true** and MSAA is enabled, this returns the MSAA variant of the buffer.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_renderscenebuffersrd_method_get_depth_layer"></div>

[`RID`](class_rid.md) **get_depth_layer** ( layer: [`int`](class_int.md), msaa: [`bool`](class_bool.md) = false )<div id="class_renderscenebuffersrd_method_get_depth_layer"></div>

Returns the specified layer from the depth texture we are rendering 3D content to.

If `msaa` is **true** and MSAA is enabled, this returns the MSAA variant of the buffer.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_renderscenebuffersrd_method_get_depth_texture"></div>

[`RID`](class_rid.md) **get_depth_texture** ( msaa: [`bool`](class_bool.md) = false )<div id="class_renderscenebuffersrd_method_get_depth_texture"></div>

Returns the depth texture we are rendering 3D content to. If multiview is used this will be a texture array with all views.

If `msaa` is **true** and MSAA is enabled, this returns the MSAA variant of the buffer.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_renderscenebuffersrd_method_get_fsr_sharpness"></div>

[`float`](class_float.md) **get_fsr_sharpness** ( ) const[^const]<div id="class_renderscenebuffersrd_method_get_fsr_sharpness"></div>

Returns the FSR sharpness value used while rendering the 3D content (if [`get_scaling_3d_mode`](class_renderscenebuffersrd.md#class_renderscenebuffersrd_method_get_scaling_3d_mode) is an FSR mode).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_renderscenebuffersrd_method_get_internal_size"></div>

[`Vector2i`](class_vector2i.md) **get_internal_size** ( ) const[^const]<div id="class_renderscenebuffersrd_method_get_internal_size"></div>

Returns the internal size of the render buffer (size before upscaling) with which textures are created by default.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_renderscenebuffersrd_method_get_msaa_3d"></div>

[ViewportMSAA](#enum_renderingserver_viewportmsaa) **get_msaa_3d** ( ) const[^const]<div id="class_renderscenebuffersrd_method_get_msaa_3d"></div>

Returns the applied 3D MSAA mode for this viewport.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_renderscenebuffersrd_method_get_render_target"></div>

[`RID`](class_rid.md) **get_render_target** ( ) const[^const]<div id="class_renderscenebuffersrd_method_get_render_target"></div>

Returns the render target associated with this buffers object.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_renderscenebuffersrd_method_get_scaling_3d_mode"></div>

[ViewportScaling3DMode](#enum_renderingserver_viewportscaling3dmode) **get_scaling_3d_mode** ( ) const[^const]<div id="class_renderscenebuffersrd_method_get_scaling_3d_mode"></div>

Returns the scaling mode used for upscaling.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_renderscenebuffersrd_method_get_screen_space_aa"></div>

[ViewportScreenSpaceAA](#enum_renderingserver_viewportscreenspaceaa) **get_screen_space_aa** ( ) const[^const]<div id="class_renderscenebuffersrd_method_get_screen_space_aa"></div>

Returns the screen-space antialiasing method applied.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_renderscenebuffersrd_method_get_target_size"></div>

[`Vector2i`](class_vector2i.md) **get_target_size** ( ) const[^const]<div id="class_renderscenebuffersrd_method_get_target_size"></div>

Returns the target size of the render buffer (size after upscaling).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_renderscenebuffersrd_method_get_texture"></div>

[`RID`](class_rid.md) **get_texture** ( context: [`StringName`](class_stringname.md), name: [`StringName`](class_stringname.md) ) const[^const]<div id="class_renderscenebuffersrd_method_get_texture"></div>

Returns a cached texture with this name.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_renderscenebuffersrd_method_get_texture_format"></div>

[`RDTextureFormat`](class_rdtextureformat.md) **get_texture_format** ( context: [`StringName`](class_stringname.md), name: [`StringName`](class_stringname.md) ) const[^const]<div id="class_renderscenebuffersrd_method_get_texture_format"></div>

Returns the texture format information with which a cached texture was created.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_renderscenebuffersrd_method_get_texture_samples"></div>

[TextureSamples](#enum_renderingdevice_texturesamples) **get_texture_samples** ( ) const[^const]<div id="class_renderscenebuffersrd_method_get_texture_samples"></div>

Returns the number of MSAA samples used.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_renderscenebuffersrd_method_get_texture_slice"></div>

[`RID`](class_rid.md) **get_texture_slice** ( context: [`StringName`](class_stringname.md), name: [`StringName`](class_stringname.md), layer: [`int`](class_int.md), mipmap: [`int`](class_int.md), layers: [`int`](class_int.md), mipmaps: [`int`](class_int.md) )<div id="class_renderscenebuffersrd_method_get_texture_slice"></div>

Returns a specific slice (layer or mipmap) for a cached texture.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_renderscenebuffersrd_method_get_texture_slice_size"></div>

[`Vector2i`](class_vector2i.md) **get_texture_slice_size** ( context: [`StringName`](class_stringname.md), name: [`StringName`](class_stringname.md), mipmap: [`int`](class_int.md) )<div id="class_renderscenebuffersrd_method_get_texture_slice_size"></div>

Returns the texture size of a given slice of a cached texture.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_renderscenebuffersrd_method_get_texture_slice_view"></div>

[`RID`](class_rid.md) **get_texture_slice_view** ( context: [`StringName`](class_stringname.md), name: [`StringName`](class_stringname.md), layer: [`int`](class_int.md), mipmap: [`int`](class_int.md), layers: [`int`](class_int.md), mipmaps: [`int`](class_int.md), view: [`RDTextureView`](class_rdtextureview.md) )<div id="class_renderscenebuffersrd_method_get_texture_slice_view"></div>

Returns a specific view of a slice (layer or mipmap) for a cached texture.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_renderscenebuffersrd_method_get_use_debanding"></div>

[`bool`](class_bool.md) **get_use_debanding** ( ) const[^const]<div id="class_renderscenebuffersrd_method_get_use_debanding"></div>

Returns `true` if debanding is enabled.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_renderscenebuffersrd_method_get_use_taa"></div>

[`bool`](class_bool.md) **get_use_taa** ( ) const[^const]<div id="class_renderscenebuffersrd_method_get_use_taa"></div>

Returns `true` if TAA is enabled.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_renderscenebuffersrd_method_get_velocity_layer"></div>

[`RID`](class_rid.md) **get_velocity_layer** ( layer: [`int`](class_int.md), msaa: [`bool`](class_bool.md) = false )<div id="class_renderscenebuffersrd_method_get_velocity_layer"></div>

Returns the specified layer from the velocity texture we are rendering 3D content to.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_renderscenebuffersrd_method_get_velocity_texture"></div>

[`RID`](class_rid.md) **get_velocity_texture** ( msaa: [`bool`](class_bool.md) = false )<div id="class_renderscenebuffersrd_method_get_velocity_texture"></div>

Returns the velocity texture we are rendering 3D content to. If multiview is used this will be a texture array with all views.

If `msaa` is **true** and MSAA is enabled, this returns the MSAA variant of the buffer.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_renderscenebuffersrd_method_get_view_count"></div>

[`int`](class_int.md) **get_view_count** ( ) const[^const]<div id="class_renderscenebuffersrd_method_get_view_count"></div>

Returns the view count for the associated viewport.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_renderscenebuffersrd_method_has_texture"></div>

[`bool`](class_bool.md) **has_texture** ( context: [`StringName`](class_stringname.md), name: [`StringName`](class_stringname.md) ) const[^const]<div id="class_renderscenebuffersrd_method_has_texture"></div>

Returns `true` if a cached texture exists for this name.

[^virtual]: 本方法通常需要用户覆盖才能生效。
[^const]: 本方法无副作用，不会修改该实例的任何成员变量。
[^vararg]: 本方法除了能接受在此处描述的参数外，还能够继续接受任意数量的参数。
[^constructor]: 本方法用于构造某个类型。
[^static]: 调用本方法无需实例，可直接使用类名进行调用。
[^operator]: 本方法描述的是使用本类型作为左操作数的有效运算符。
[^bitfield]: 这个值是由下列位标志构成位掩码的整数。
[^void]: 无返回值。
