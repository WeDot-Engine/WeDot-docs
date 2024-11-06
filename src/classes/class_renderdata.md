<!-- ⚠ 请勿编辑本文件 ⚠ -->
<!-- 本文档使用脚本从 WeDot 引擎源码仓库生成。 -->
<!-- 生成脚本：https://github.com/WeDot-Engine/WeDot/tree/4.3/doc/tools/make_md.py； -->
<!-- 原文件：https://github.com/WeDot-Engine/WeDot/tree/4.3/doc/classes/RenderData.xml。 -->

<div id="_class_renderdata"></div>

# RenderData

**继承：** [`Object`](class_object.md)

**派生：** [`RenderDataExtension`](class_renderdataextension.md), [`RenderDataRD`](class_renderdatard.md)

Abstract render data object, holds frame data related to rendering a single frame of a viewport.

## 描述

Abstract render data object, exists for the duration of rendering a single viewport.

 **Note:** This is an internal rendering server object, do not instantiate this from script.

## 方法

|||
|:-:|:--|
| [`RID`](class_rid.md)                               | [`get_camera_attributes`](class_renderdatamd#class_renderdata_method_get_camera_attributes) ( ) const[^const]       |
| [`RID`](class_rid.md)                               | [`get_environment`](class_renderdatamd#class_renderdata_method_get_environment) ( ) const[^const]                   |
| [`RenderSceneBuffers`](class_renderscenebuffers.md) | [`get_render_scene_buffers`](class_renderdatamd#class_renderdata_method_get_render_scene_buffers) ( ) const[^const] |
| [`RenderSceneData`](class_renderscenedata.md)       | [`get_render_scene_data`](class_renderdatamd#class_renderdata_method_get_render_scene_data) ( ) const[^const]       |

<!-- rst-class:: classref-section-separator -->

---

## 方法说明

<div id="_class_renderdata_method_get_camera_attributes"></div>

[`RID`](class_rid.md) **get_camera_attributes** ( ) const[^const]<div id="class_renderdata_method_get_camera_attributes"></div>

Returns the [`RID`](class_rid.md) of the camera attributes object in the [`RenderingServer`](class_renderingserver.md) being used to render this viewport.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_renderdata_method_get_environment"></div>

[`RID`](class_rid.md) **get_environment** ( ) const[^const]<div id="class_renderdata_method_get_environment"></div>

Returns the [`RID`](class_rid.md) of the environments object in the [`RenderingServer`](class_renderingserver.md) being used to render this viewport.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_renderdata_method_get_render_scene_buffers"></div>

[`RenderSceneBuffers`](class_renderscenebuffers.md) **get_render_scene_buffers** ( ) const[^const]<div id="class_renderdata_method_get_render_scene_buffers"></div>

Returns the [`RenderSceneBuffers`](class_renderscenebuffers.md) object managing the scene buffers for rendering this viewport.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_renderdata_method_get_render_scene_data"></div>

[`RenderSceneData`](class_renderscenedata.md) **get_render_scene_data** ( ) const[^const]<div id="class_renderdata_method_get_render_scene_data"></div>

Returns the [`RenderSceneData`](class_renderscenedata.md) object managing this frames scene data.

[^virtual]: 本方法通常需要用户覆盖才能生效。
[^const]: 本方法无副作用，不会修改该实例的任何成员变量。
[^vararg]: 本方法除了能接受在此处描述的参数外，还能够继续接受任意数量的参数。
[^constructor]: 本方法用于构造某个类型。
[^static]: 调用本方法无需实例，可直接使用类名进行调用。
[^operator]: 本方法描述的是使用本类型作为左操作数的有效运算符。
[^bitfield]: 这个值是由下列位标志构成位掩码的整数。
[^void]: 无返回值。
