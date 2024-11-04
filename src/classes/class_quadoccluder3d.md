<!-- ⚠ 请勿编辑本文件 ⚠ -->
<!-- 本文档使用脚本从 WeDot 引擎源码仓库生成。 -->
<!-- 生成脚本：https://github.com/WeDot-Engine/WeDot/tree/4.3/doc/tools/make_md.py； -->
<!-- 原文件：https://github.com/WeDot-Engine/WeDot/tree/4.3/doc/classes/QuadOccluder3D.xml。 -->

<div id="_class_quadoccluder3d"></div>

# QuadOccluder3D

**继承：** [`Occluder3D`](class_occluder3d.md) **<** [`Resource`](class_resource.md) **<** [`RefCounted`](class_refcounted.md) **<** [`Object`](class_object.md)

Flat plane shape for use with occlusion culling in [`OccluderInstance3D`](class_occluderinstance3d.md).

## 描述

**QuadOccluder3D** stores a flat plane shape that can be used by the engine's occlusion culling system. See also [`PolygonOccluder3D`](class_polygonoccluder3d.md) if you need to customize the quad's shape.

See [`OccluderInstance3D`](class_occluderinstance3d.md)'s documentation for instructions on setting up occlusion culling.

## 属性

| [`Vector2`](class_vector2.md) | [`size`](#class_quadoccluder3d_property_size) | ``Vector2(1, 1)`` |

<!-- rst-class:: classref-section-separator -->

---

## 属性说明

<div id="_class_quadoccluder3d_property_size"></div>

[`Vector2`](class_vector2.md) **size** = ``Vector2(1, 1)`` <div id="class_quadoccluder3d_property_size"></div>

- `void` **set_size** ( value: [`Vector2`](class_vector2.md) )
- [`Vector2`](class_vector2.md) **get_size** ( )

The quad's size in 3D units.

[^virtual]: 本方法通常需要用户覆盖才能生效。
[^const]: 本方法无副作用，不会修改该实例的任何成员变量。
[^vararg]: 本方法除了能接受在此处描述的参数外，还能够继续接受任意数量的参数。
[^constructor]: 本方法用于构造某个类型。
[^static]: 调用本方法无需实例，可直接使用类名进行调用。
[^operator]: 本方法描述的是使用本类型作为左操作数的有效运算符。
[^bitfield]: 这个值是由下列位标志构成位掩码的整数。
[^void]: 无返回值。
