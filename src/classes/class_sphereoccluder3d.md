<!-- ⚠ 请勿编辑本文件 ⚠ -->
<!-- 本文档使用脚本从 WeDot 引擎源码仓库生成。 -->
<!-- 生成脚本：https://github.com/WeDot-Engine/WeDot/tree/master/doc/tools/make_md.py； -->
<!-- 原文件：https://github.com/WeDot-Engine/WeDot/tree/master/doc/classes/SphereOccluder3D.xml。 -->

<div id="_class_sphereoccluder3d"></div>

# SphereOccluder3D

**继承：** [`Occluder3D`](class_occluder3d.md) **<** [`Resource`](class_resource.md) **<** [`RefCounted`](class_refcounted.md) **<** [`Object`](class_object.md)

Spherical shape for use with occlusion culling in [`OccluderInstance3D`](class_occluderinstance3d.md).

## 描述

**SphereOccluder3D** stores a sphere shape that can be used by the engine's occlusion culling system.

See [`OccluderInstance3D`](class_occluderinstance3d.md)'s documentation for instructions on setting up occlusion culling.

## 属性

|||
|:-:|:--|
| [`float`](class_float.md) | [`radius`](class_sphereoccluder3d.md#class_sphereoccluder3d_property_radius) | ``1.0`` |

<!-- rst-class:: classref-section-separator -->

---

## 属性说明

<div id="_class_sphereoccluder3d_property_radius"></div>

[`float`](class_float.md) **radius** = ``1.0`` <div id="class_sphereoccluder3d_property_radius"></div>

- `void` **set_radius** ( value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_radius** ( )

The sphere's radius in 3D units.

[^virtual]: 本方法通常需要用户覆盖才能生效。
[^const]: 本方法无副作用，不会修改该实例的任何成员变量。
[^vararg]: 本方法除了能接受在此处描述的参数外，还能够继续接受任意数量的参数。
[^constructor]: 本方法用于构造某个类型。
[^static]: 调用本方法无需实例，可直接使用类名进行调用。
[^operator]: 本方法描述的是使用本类型作为左操作数的有效运算符。
[^bitfield]: 这个值是由下列位标志构成位掩码的整数。
[^void]: 无返回值。
