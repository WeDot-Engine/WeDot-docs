<!-- ⚠ 请勿编辑本文件 ⚠ -->
<!-- 本文档使用脚本从 WeDot 引擎源码仓库生成。 -->
<!-- 生成脚本：https://github.com/WeDot-Engine/WeDot/tree/4.3/doc/tools/make_md.py； -->
<!-- 原文件：https://github.com/WeDot-Engine/WeDot/tree/4.3/doc/classes/RenderSceneDataExtension.xml。 -->

<div id="_class_renderscenedataextension"></div>

# RenderSceneDataExtension

**继承：** [`RenderSceneData`](class_renderscenedata.md) **<** [`Object`](class_object.md)

This class allows for a RenderSceneData implementation to be made in GDExtension.

## 描述

This class allows for a RenderSceneData implementation to be made in GDExtension.

## 方法

| [`Projection`](class_projection.md)   | [`_get_cam_projection`](#class_renderscenedataextension_private_method__get_cam_projection) ( ) virtual[^virtual] const[^const]                               |
| [`Transform3D`](class_transform3d.md) | [`_get_cam_transform`](#class_renderscenedataextension_private_method__get_cam_transform) ( ) virtual[^virtual] const[^const]                                 |
| [`RID`](class_rid.md)                 | [`_get_uniform_buffer`](#class_renderscenedataextension_private_method__get_uniform_buffer) ( ) virtual[^virtual] const[^const]                               |
| [`int`](class_int.md)                 | [`_get_view_count`](#class_renderscenedataextension_private_method__get_view_count) ( ) virtual[^virtual] const[^const]                                       |
| [`Vector3`](class_vector3.md)         | [`_get_view_eye_offset`](#class_renderscenedataextension_private_method__get_view_eye_offset) ( view: [`int`](class_int.md) ) virtual[^virtual] const[^const] |
| [`Projection`](class_projection.md)   | [`_get_view_projection`](#class_renderscenedataextension_private_method__get_view_projection) ( view: [`int`](class_int.md) ) virtual[^virtual] const[^const] |

<!-- rst-class:: classref-section-separator -->

---

## 方法说明

<div id="_class_renderscenedataextension_private_method__get_cam_projection"></div>

[`Projection`](class_projection.md) **_get_cam_projection** ( ) virtual[^virtual] const[^const]<div id="class_renderscenedataextension_private_method__get_cam_projection"></div>

Implement this in GDExtension to return the camera [`Projection`](class_projection.md).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_renderscenedataextension_private_method__get_cam_transform"></div>

[`Transform3D`](class_transform3d.md) **_get_cam_transform** ( ) virtual[^virtual] const[^const]<div id="class_renderscenedataextension_private_method__get_cam_transform"></div>

Implement this in GDExtension to return the camera [`Transform3D`](class_transform3d.md).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_renderscenedataextension_private_method__get_uniform_buffer"></div>

[`RID`](class_rid.md) **_get_uniform_buffer** ( ) virtual[^virtual] const[^const]<div id="class_renderscenedataextension_private_method__get_uniform_buffer"></div>

Implement this in GDExtension to return the [`RID`](class_rid.md) of the uniform buffer containing the scene data as a UBO.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_renderscenedataextension_private_method__get_view_count"></div>

[`int`](class_int.md) **_get_view_count** ( ) virtual[^virtual] const[^const]<div id="class_renderscenedataextension_private_method__get_view_count"></div>

Implement this in GDExtension to return the view count.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_renderscenedataextension_private_method__get_view_eye_offset"></div>

[`Vector3`](class_vector3.md) **_get_view_eye_offset** ( view: [`int`](class_int.md) ) virtual[^virtual] const[^const]<div id="class_renderscenedataextension_private_method__get_view_eye_offset"></div>

Implement this in GDExtension to return the eye offset for the given `view`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_renderscenedataextension_private_method__get_view_projection"></div>

[`Projection`](class_projection.md) **_get_view_projection** ( view: [`int`](class_int.md) ) virtual[^virtual] const[^const]<div id="class_renderscenedataextension_private_method__get_view_projection"></div>

Implement this in GDExtension to return the view [`Projection`](class_projection.md) for the given `view`.

[^virtual]: 本方法通常需要用户覆盖才能生效。
[^const]: 本方法无副作用，不会修改该实例的任何成员变量。
[^vararg]: 本方法除了能接受在此处描述的参数外，还能够继续接受任意数量的参数。
[^constructor]: 本方法用于构造某个类型。
[^static]: 调用本方法无需实例，可直接使用类名进行调用。
[^operator]: 本方法描述的是使用本类型作为左操作数的有效运算符。
[^bitfield]: 这个值是由下列位标志构成位掩码的整数。
[^void]: 无返回值。
