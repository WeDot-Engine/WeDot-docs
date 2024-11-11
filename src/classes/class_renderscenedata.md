<!-- ⚠ 请勿编辑本文件 ⚠ -->
<!-- 本文档使用脚本从 WeDot 引擎源码仓库生成。 -->
<!-- 生成脚本：https://github.com/WeDot-Engine/WeDot/tree/master/doc/tools/make_md.py； -->
<!-- 原文件：https://github.com/WeDot-Engine/WeDot/tree/master/doc/classes/RenderSceneData.xml。 -->

<div id="_class_renderscenedata"></div>

# RenderSceneData

**继承：** [`Object`](class_object.md)

**派生：** [`RenderSceneDataExtension`](class_renderscenedataextension.md), [`RenderSceneDataRD`](class_renderscenedatard.md)

Abstract render data object, holds scene data related to rendering a single frame of a viewport.

## 描述

Abstract scene data object, exists for the duration of rendering a single viewport.

 **Note:** This is an internal rendering server object, do not instantiate this from script.

## 方法

|||
|:-:|:--|
| [`Projection`](class_projection.md)   | [`get_cam_projection`](class_renderscenedata.md#class_renderscenedata_method_get_cam_projection) ( ) const[^const]                               |
| [`Transform3D`](class_transform3d.md) | [`get_cam_transform`](class_renderscenedata.md#class_renderscenedata_method_get_cam_transform) ( ) const[^const]                                 |
| [`RID`](class_rid.md)                 | [`get_uniform_buffer`](class_renderscenedata.md#class_renderscenedata_method_get_uniform_buffer) ( ) const[^const]                               |
| [`int`](class_int.md)                 | [`get_view_count`](class_renderscenedata.md#class_renderscenedata_method_get_view_count) ( ) const[^const]                                       |
| [`Vector3`](class_vector3.md)         | [`get_view_eye_offset`](class_renderscenedata.md#class_renderscenedata_method_get_view_eye_offset) ( view: [`int`](class_int.md) ) const[^const] |
| [`Projection`](class_projection.md)   | [`get_view_projection`](class_renderscenedata.md#class_renderscenedata_method_get_view_projection) ( view: [`int`](class_int.md) ) const[^const] |

<!-- rst-class:: classref-section-separator -->

---

## 方法说明

<div id="_class_renderscenedata_method_get_cam_projection"></div>

[`Projection`](class_projection.md) **get_cam_projection** ( ) const[^const]<div id="class_renderscenedata_method_get_cam_projection"></div>

Returns the camera projection used to render this frame.

 **Note:** If more than one view is rendered, this will return a combined projection.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_renderscenedata_method_get_cam_transform"></div>

[`Transform3D`](class_transform3d.md) **get_cam_transform** ( ) const[^const]<div id="class_renderscenedata_method_get_cam_transform"></div>

Returns the camera transform used to render this frame.

 **Note:** If more than one view is rendered, this will return a centered transform.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_renderscenedata_method_get_uniform_buffer"></div>

[`RID`](class_rid.md) **get_uniform_buffer** ( ) const[^const]<div id="class_renderscenedata_method_get_uniform_buffer"></div>

Return the [`RID`](class_rid.md) of the uniform buffer containing the scene data as a UBO.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_renderscenedata_method_get_view_count"></div>

[`int`](class_int.md) **get_view_count** ( ) const[^const]<div id="class_renderscenedata_method_get_view_count"></div>

Returns the number of views being rendered.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_renderscenedata_method_get_view_eye_offset"></div>

[`Vector3`](class_vector3.md) **get_view_eye_offset** ( view: [`int`](class_int.md) ) const[^const]<div id="class_renderscenedata_method_get_view_eye_offset"></div>

Returns the eye offset per view used to render this frame. This is the offset between our camera transform and the eye transform.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_renderscenedata_method_get_view_projection"></div>

[`Projection`](class_projection.md) **get_view_projection** ( view: [`int`](class_int.md) ) const[^const]<div id="class_renderscenedata_method_get_view_projection"></div>

Returns the view projection per view used to render this frame.

 **Note:** If a single view is rendered, this returns the camera projection. If more than one view is rendered, this will return a projection for the given view including the eye offset.

[^virtual]: 本方法通常需要用户覆盖才能生效。
[^const]: 本方法无副作用，不会修改该实例的任何成员变量。
[^vararg]: 本方法除了能接受在此处描述的参数外，还能够继续接受任意数量的参数。
[^constructor]: 本方法用于构造某个类型。
[^static]: 调用本方法无需实例，可直接使用类名进行调用。
[^operator]: 本方法描述的是使用本类型作为左操作数的有效运算符。
[^bitfield]: 这个值是由下列位标志构成位掩码的整数。
[^void]: 无返回值。
