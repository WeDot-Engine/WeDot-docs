<!-- ⚠ 请勿编辑本文件 ⚠ -->
<!-- 本文档使用脚本从 WeDot 引擎源码仓库生成。 -->
<!-- 生成脚本：https://github.com/WeDot-Engine/WeDot/tree/master/doc/tools/make_md.py； -->
<!-- 原文件：https://github.com/WeDot-Engine/WeDot/tree/master/doc/classes/RenderDataExtension.xml。 -->

<div id="_class_renderdataextension"></div>

# RenderDataExtension

**继承：** [`RenderData`](class_renderdata.md) **<** [`Object`](class_object.md)

This class allows for a RenderData implementation to be made in GDExtension.

## 描述

This class allows for a RenderData implementation to be made in GDExtension.

## 方法

|||
|:-:|:--|
| [`RID`](class_rid.md)                               | [`_get_camera_attributes`](class_renderdataextension.md#class_renderdataextension_private_method__get_camera_attributes) ( ) virtual[^virtual] const[^const]       |
| [`RID`](class_rid.md)                               | [`_get_environment`](class_renderdataextension.md#class_renderdataextension_private_method__get_environment) ( ) virtual[^virtual] const[^const]                   |
| [`RenderSceneBuffers`](class_renderscenebuffers.md) | [`_get_render_scene_buffers`](class_renderdataextension.md#class_renderdataextension_private_method__get_render_scene_buffers) ( ) virtual[^virtual] const[^const] |
| [`RenderSceneData`](class_renderscenedata.md)       | [`_get_render_scene_data`](class_renderdataextension.md#class_renderdataextension_private_method__get_render_scene_data) ( ) virtual[^virtual] const[^const]       |

<!-- rst-class:: classref-section-separator -->

---

## 方法说明

<div id="_class_renderdataextension_private_method__get_camera_attributes"></div>

[`RID`](class_rid.md) **_get_camera_attributes** ( ) virtual[^virtual] const[^const]<div id="class_renderdataextension_private_method__get_camera_attributes"></div>

Implement this in GDExtension to return the [`RID`](class_rid.md) for the implementation's camera attributes object.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_renderdataextension_private_method__get_environment"></div>

[`RID`](class_rid.md) **_get_environment** ( ) virtual[^virtual] const[^const]<div id="class_renderdataextension_private_method__get_environment"></div>

Implement this in GDExtension to return the [`RID`](class_rid.md) of the implementation's environment object.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_renderdataextension_private_method__get_render_scene_buffers"></div>

[`RenderSceneBuffers`](class_renderscenebuffers.md) **_get_render_scene_buffers** ( ) virtual[^virtual] const[^const]<div id="class_renderdataextension_private_method__get_render_scene_buffers"></div>

Implement this in GDExtension to return the implementation's [`RenderSceneBuffers`](class_renderscenebuffers.md) object.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_renderdataextension_private_method__get_render_scene_data"></div>

[`RenderSceneData`](class_renderscenedata.md) **_get_render_scene_data** ( ) virtual[^virtual] const[^const]<div id="class_renderdataextension_private_method__get_render_scene_data"></div>

Implement this in GDExtension to return the implementation's [`RenderSceneDataExtension`](class_renderscenedataextension.md) object.

[^virtual]: 本方法通常需要用户覆盖才能生效。
[^const]: 本方法无副作用，不会修改该实例的任何成员变量。
[^vararg]: 本方法除了能接受在此处描述的参数外，还能够继续接受任意数量的参数。
[^constructor]: 本方法用于构造某个类型。
[^static]: 调用本方法无需实例，可直接使用类名进行调用。
[^operator]: 本方法描述的是使用本类型作为左操作数的有效运算符。
[^bitfield]: 这个值是由下列位标志构成位掩码的整数。
[^void]: 无返回值。
