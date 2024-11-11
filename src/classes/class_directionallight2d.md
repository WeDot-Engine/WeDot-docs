<!-- ⚠ 请勿编辑本文件 ⚠ -->
<!-- 本文档使用脚本从 WeDot 引擎源码仓库生成。 -->
<!-- 生成脚本：https://github.com/WeDot-Engine/WeDot/tree/master/doc/tools/make_md.py； -->
<!-- 原文件：https://github.com/WeDot-Engine/WeDot/tree/master/doc/classes/DirectionalLight2D.xml。 -->

<div id="_class_directionallight2d"></div>

# DirectionalLight2D

**继承：** [`Light2D`](class_light2d.md) **<** [`Node2D`](class_node2d.md) **<** [`CanvasItem`](class_canvasitem.md) **<** [`Node`](class_node.md) **<** [`Object`](class_object.md)

Directional 2D light from a distance.

## 描述

A directional light is a type of [`Light2D`](class_light2d.md) node that models an infinite number of parallel rays covering the entire scene. It is used for lights with strong intensity that are located far away from the scene (for example: to model sunlight or moonlight).

 **Note:** **DirectionalLight2D** does not support light cull masks (but it supports shadow cull masks). It will always light up 2D nodes, regardless of the 2D node's [`CanvasItem.light_mask`](class_canvasitem.md#class_canvasitem_property_light_mask).

## 属性

|||
|:-:|:--|
| [`float`](class_float.md) | [`height`](class_directionallight2d.md#class_directionallight2d_property_height)             | ``0.0``     |
| [`float`](class_float.md) | [`max_distance`](class_directionallight2d.md#class_directionallight2d_property_max_distance) | ``10000.0`` |

<!-- rst-class:: classref-section-separator -->

---

## 属性说明

<div id="_class_directionallight2d_property_height"></div>

[`float`](class_float.md) **height** = ``0.0`` <div id="class_directionallight2d_property_height"></div>

- `void` **set_height** ( value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_height** ( )

The height of the light. Used with 2D normal mapping. Ranges from 0 (parallel to the plane) to 1 (perpendicular to the plane).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_directionallight2d_property_max_distance"></div>

[`float`](class_float.md) **max_distance** = ``10000.0`` <div id="class_directionallight2d_property_max_distance"></div>

- `void` **set_max_distance** ( value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_max_distance** ( )

The maximum distance from the camera center objects can be before their shadows are culled (in pixels). Decreasing this value can prevent objects located outside the camera from casting shadows (while also improving performance). [`Camera2D.zoom`](class_camera2d.md#class_camera2d_property_zoom) is not taken into account by [`max_distance`](class_directionallight2d.md#class_directionallight2d_property_max_distance), which means that at higher zoom values, shadows will appear to fade out sooner when zooming onto a given point.

[^virtual]: 本方法通常需要用户覆盖才能生效。
[^const]: 本方法无副作用，不会修改该实例的任何成员变量。
[^vararg]: 本方法除了能接受在此处描述的参数外，还能够继续接受任意数量的参数。
[^constructor]: 本方法用于构造某个类型。
[^static]: 调用本方法无需实例，可直接使用类名进行调用。
[^operator]: 本方法描述的是使用本类型作为左操作数的有效运算符。
[^bitfield]: 这个值是由下列位标志构成位掩码的整数。
[^void]: 无返回值。
