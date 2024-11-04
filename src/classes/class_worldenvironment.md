<!-- ⚠ 请勿编辑本文件 ⚠ -->
<!-- 本文档使用脚本从 WeDot 引擎源码仓库生成。 -->
<!-- 生成脚本：https://github.com/WeDot-Engine/WeDot/tree/4.3/doc/tools/make_md.py； -->
<!-- 原文件：https://github.com/WeDot-Engine/WeDot/tree/4.3/doc/classes/WorldEnvironment.xml。 -->

<div id="_class_worldenvironment"></div>

# WorldEnvironment

**继承：** [`Node`](class_node.md) **<** [`Object`](class_object.md)

Default environment properties for the entire scene (post-processing effects, lighting and background settings).

## 描述

The **WorldEnvironment** node is used to configure the default [`Environment`](class_environment.md) for the scene.

The parameters defined in the **WorldEnvironment** can be overridden by an [`Environment`](class_environment.md) node set on the current [`Camera3D`](class_camera3d.md). Additionally, only one **WorldEnvironment** may be instantiated in a given scene at a time.

The **WorldEnvironment** allows the user to specify default lighting parameters (e.g. ambient lighting), various post-processing effects (e.g. SSAO, DOF, Tonemapping), and how to draw the background (e.g. solid color, skybox). Usually, these are added in order to improve the realism/color balance of the scene.

## 属性

| [`CameraAttributes`](class_cameraattributes.md) | [`camera_attributes`](#class_worldenvironment_property_camera_attributes) |
| [`Compositor`](class_compositor.md)             | [`compositor`](#class_worldenvironment_property_compositor)               |
| [`Environment`](class_environment.md)           | [`environment`](#class_worldenvironment_property_environment)             |

<!-- rst-class:: classref-section-separator -->

---

## 属性说明

<div id="_class_worldenvironment_property_camera_attributes"></div>

[`CameraAttributes`](class_cameraattributes.md) **camera_attributes** <div id="class_worldenvironment_property_camera_attributes"></div>

- `void` **set_camera_attributes** ( value: [`CameraAttributes`](class_cameraattributes.md) )
- [`CameraAttributes`](class_cameraattributes.md) **get_camera_attributes** ( )

The default [`CameraAttributes`](class_cameraattributes.md) resource to use if none set on the [`Camera3D`](class_camera3d.md).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_worldenvironment_property_compositor"></div>

[`Compositor`](class_compositor.md) **compositor** <div id="class_worldenvironment_property_compositor"></div>

- `void` **set_compositor** ( value: [`Compositor`](class_compositor.md) )
- [`Compositor`](class_compositor.md) **get_compositor** ( )

The default [`Compositor`](class_compositor.md) resource to use if none set on the [`Camera3D`](class_camera3d.md).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_worldenvironment_property_environment"></div>

[`Environment`](class_environment.md) **environment** <div id="class_worldenvironment_property_environment"></div>

- `void` **set_environment** ( value: [`Environment`](class_environment.md) )
- [`Environment`](class_environment.md) **get_environment** ( )

The [`Environment`](class_environment.md) resource used by this **WorldEnvironment**, defining the default properties.

[^virtual]: 本方法通常需要用户覆盖才能生效。
[^const]: 本方法无副作用，不会修改该实例的任何成员变量。
[^vararg]: 本方法除了能接受在此处描述的参数外，还能够继续接受任意数量的参数。
[^constructor]: 本方法用于构造某个类型。
[^static]: 调用本方法无需实例，可直接使用类名进行调用。
[^operator]: 本方法描述的是使用本类型作为左操作数的有效运算符。
[^bitfield]: 这个值是由下列位标志构成位掩码的整数。
[^void]: 无返回值。
