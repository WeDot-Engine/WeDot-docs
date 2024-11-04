<!-- ⚠ 请勿编辑本文件 ⚠ -->
<!-- 本文档使用脚本从 WeDot 引擎源码仓库生成。 -->
<!-- 生成脚本：https://github.com/WeDot-Engine/WeDot/tree/4.3/doc/tools/make_md.py； -->
<!-- 原文件：https://github.com/WeDot-Engine/WeDot/tree/4.3/doc/classes/LightOccluder2D.xml。 -->

<div id="_class_lightoccluder2d"></div>

# LightOccluder2D

**继承：** [`Node2D`](class_node2d.md) **<** [`CanvasItem`](class_canvasitem.md) **<** [`Node`](class_node.md) **<** [`Object`](class_object.md)

Occludes light cast by a Light2D, casting shadows.

## 描述

Occludes light cast by a Light2D, casting shadows. The LightOccluder2D must be provided with an [`OccluderPolygon2D`](class_occluderpolygon2d.md) in order for the shadow to be computed.

## 属性

| [`OccluderPolygon2D`](class_occluderpolygon2d.md) | [`occluder`](#class_lightoccluder2d_property_occluder)                       |          |
| [`int`](class_int.md)                             | [`occluder_light_mask`](#class_lightoccluder2d_property_occluder_light_mask) | ``1``    |
| [`bool`](class_bool.md)                           | [`sdf_collision`](#class_lightoccluder2d_property_sdf_collision)             | ``true`` |

<!-- rst-class:: classref-section-separator -->

---

## 属性说明

<div id="_class_lightoccluder2d_property_occluder"></div>

[`OccluderPolygon2D`](class_occluderpolygon2d.md) **occluder** <div id="class_lightoccluder2d_property_occluder"></div>

- `void` **set_occluder_polygon** ( value: [`OccluderPolygon2D`](class_occluderpolygon2d.md) )
- [`OccluderPolygon2D`](class_occluderpolygon2d.md) **get_occluder_polygon** ( )

The [`OccluderPolygon2D`](class_occluderpolygon2d.md) used to compute the shadow.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_lightoccluder2d_property_occluder_light_mask"></div>

[`int`](class_int.md) **occluder_light_mask** = ``1`` <div id="class_lightoccluder2d_property_occluder_light_mask"></div>

- `void` **set_occluder_light_mask** ( value: [`int`](class_int.md) )
- [`int`](class_int.md) **get_occluder_light_mask** ( )

The LightOccluder2D's occluder light mask. The LightOccluder2D will cast shadows only from Light2D(s) that have the same light mask(s).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_lightoccluder2d_property_sdf_collision"></div>

[`bool`](class_bool.md) **sdf_collision** = ``true`` <div id="class_lightoccluder2d_property_sdf_collision"></div>

- `void` **set_as_sdf_collision** ( value: [`bool`](class_bool.md) )
- [`bool`](class_bool.md) **is_set_as_sdf_collision** ( )

If enabled, the occluder will be part of a real-time generated signed distance field that can be used in custom shaders.

[^virtual]: 本方法通常需要用户覆盖才能生效。
[^const]: 本方法无副作用，不会修改该实例的任何成员变量。
[^vararg]: 本方法除了能接受在此处描述的参数外，还能够继续接受任意数量的参数。
[^constructor]: 本方法用于构造某个类型。
[^static]: 调用本方法无需实例，可直接使用类名进行调用。
[^operator]: 本方法描述的是使用本类型作为左操作数的有效运算符。
[^bitfield]: 这个值是由下列位标志构成位掩码的整数。
[^void]: 无返回值。
