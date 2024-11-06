<!-- ⚠ 请勿编辑本文件 ⚠ -->
<!-- 本文档使用脚本从 WeDot 引擎源码仓库生成。 -->
<!-- 生成脚本：https://github.com/WeDot-Engine/WeDot/tree/4.3/doc/tools/make_md.py； -->
<!-- 原文件：https://github.com/WeDot-Engine/WeDot/tree/4.3/doc/classes/RenderSceneBuffers.xml。 -->

<div id="_class_renderscenebuffers"></div>

# RenderSceneBuffers

**继承：** [`RefCounted`](class_refcounted.md) **<** [`Object`](class_object.md)

**派生：** [`RenderSceneBuffersExtension`](class_renderscenebuffersextension.md), [`RenderSceneBuffersRD`](class_renderscenebuffersrd.md)

Abstract scene buffers object, created for each viewport for which 3D rendering is done.

## 描述

Abstract scene buffers object, created for each viewport for which 3D rendering is done. It manages any additional buffers used during rendering and will discard buffers when the viewport is resized.

 **Note:** This is an internal rendering server object, do not instantiate this from script.

## 方法

|||
|:-:|:--|
| `void` | [`configure`](class_renderscenebuffersmd#class_renderscenebuffers_method_configure) ( config: [`RenderSceneBuffersConfiguration`](class_renderscenebuffersconfiguration.md) ) |

<!-- rst-class:: classref-section-separator -->

---

## 方法说明

<div id="_class_renderscenebuffers_method_configure"></div>

`void` **configure** ( config: [`RenderSceneBuffersConfiguration`](class_renderscenebuffersconfiguration.md) )<div id="class_renderscenebuffers_method_configure"></div>

This method is called by the rendering server when the associated viewports configuration is changed. It will discard the old buffers and recreate the internal buffers used.

[^virtual]: 本方法通常需要用户覆盖才能生效。
[^const]: 本方法无副作用，不会修改该实例的任何成员变量。
[^vararg]: 本方法除了能接受在此处描述的参数外，还能够继续接受任意数量的参数。
[^constructor]: 本方法用于构造某个类型。
[^static]: 调用本方法无需实例，可直接使用类名进行调用。
[^operator]: 本方法描述的是使用本类型作为左操作数的有效运算符。
[^bitfield]: 这个值是由下列位标志构成位掩码的整数。
[^void]: 无返回值。
