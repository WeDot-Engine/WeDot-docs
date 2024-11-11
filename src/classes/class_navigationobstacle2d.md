<!-- ⚠ 请勿编辑本文件 ⚠ -->
<!-- 本文档使用脚本从 WeDot 引擎源码仓库生成。 -->
<!-- 生成脚本：https://github.com/WeDot-Engine/WeDot/tree/master/doc/tools/make_md.py； -->
<!-- 原文件：https://github.com/WeDot-Engine/WeDot/tree/master/doc/classes/NavigationObstacle2D.xml。 -->

<div id="_class_navigationobstacle2d"></div>

# NavigationObstacle2D

**实验性：** This class may be changed or removed in future versions.

**继承：** [`Node2D`](class_node2d.md) **<** [`CanvasItem`](class_canvasitem.md) **<** [`Node`](class_node.md) **<** [`Object`](class_object.md)

2D obstacle used to affect navigation mesh baking or constrain velocities of avoidance controlled agents.

## 描述

An obstacle needs a navigation map and outline [`vertices`](class_navigationobstacle2d.md#class_navigationobstacle2d_property_vertices) defined to work correctly. The outlines can not cross or overlap.

Obstacles can be included in the navigation mesh baking process when [`affect_navigation_mesh`](class_navigationobstacle2d.md#class_navigationobstacle2d_property_affect_navigation_mesh) is enabled. They do not add walkable geometry, instead their role is to discard other source geometry inside the shape. This can be used to prevent navigation mesh from appearing in unwanted places. If [`carve_navigation_mesh`](class_navigationobstacle2d.md#class_navigationobstacle2d_property_carve_navigation_mesh) is enabled the baked shape will not be affected by offsets of the navigation mesh baking, e.g. the agent radius.

With [`avoidance_enabled`](class_navigationobstacle2d.md#class_navigationobstacle2d_property_avoidance_enabled) the obstacle can constrain the avoidance velocities of avoidance using agents. If the obstacle's vertices are wound in clockwise order, avoidance agents will be pushed in by the obstacle, otherwise, avoidance agents will be pushed out. Obstacles using vertices and avoidance can warp to a new position but should not be moved every single frame as each change requires a rebuild of the avoidance map.

## 属性

|||
|:-:|:--|
| [`bool`](class_bool.md)                             | [`affect_navigation_mesh`](class_navigationobstacle2d.md#class_navigationobstacle2d_property_affect_navigation_mesh) | ``false``                |
| [`bool`](class_bool.md)                             | [`avoidance_enabled`](class_navigationobstacle2d.md#class_navigationobstacle2d_property_avoidance_enabled)           | ``true``                 |
| [`int`](class_int.md)                               | [`avoidance_layers`](class_navigationobstacle2d.md#class_navigationobstacle2d_property_avoidance_layers)             | ``1``                    |
| [`bool`](class_bool.md)                             | [`carve_navigation_mesh`](class_navigationobstacle2d.md#class_navigationobstacle2d_property_carve_navigation_mesh)   | ``false``                |
| [`float`](class_float.md)                           | [`radius`](class_navigationobstacle2d.md#class_navigationobstacle2d_property_radius)                                 | ``0.0``                  |
| [`Vector2`](class_vector2.md)                       | [`velocity`](class_navigationobstacle2d.md#class_navigationobstacle2d_property_velocity)                             | ``Vector2(0, 0)``        |
| [`PackedVector2Array`](class_packedvector2array.md) | [`vertices`](class_navigationobstacle2d.md#class_navigationobstacle2d_property_vertices)                             | ``PackedVector2Array()`` |

## 方法

|||
|:-:|:--|
| [`bool`](class_bool.md) | [`get_avoidance_layer_value`](class_navigationobstacle2d.md#class_navigationobstacle2d_method_get_avoidance_layer_value) ( layer_number: [`int`](class_int.md) ) const[^const]                   |
| [`RID`](class_rid.md)   | [`get_navigation_map`](class_navigationobstacle2d.md#class_navigationobstacle2d_method_get_navigation_map) ( ) const[^const]                                                                     |
| [`RID`](class_rid.md)   | [`get_rid`](class_navigationobstacle2d.md#class_navigationobstacle2d_method_get_rid) ( ) const[^const]                                                                                           |
| `void`                  | [`set_avoidance_layer_value`](class_navigationobstacle2d.md#class_navigationobstacle2d_method_set_avoidance_layer_value) ( layer_number: [`int`](class_int.md), value: [`bool`](class_bool.md) ) |
| `void`                  | [`set_navigation_map`](class_navigationobstacle2d.md#class_navigationobstacle2d_method_set_navigation_map) ( navigation_map: [`RID`](class_rid.md) )                                             |

<!-- rst-class:: classref-section-separator -->

---

## 属性说明

<div id="_class_navigationobstacle2d_property_affect_navigation_mesh"></div>

[`bool`](class_bool.md) **affect_navigation_mesh** = ``false`` <div id="class_navigationobstacle2d_property_affect_navigation_mesh"></div>

- `void` **set_affect_navigation_mesh** ( value: [`bool`](class_bool.md) )
- [`bool`](class_bool.md) **get_affect_navigation_mesh** ( )

If enabled and parsed in a navigation mesh baking process the obstacle will discard source geometry inside its [`vertices`](class_navigationobstacle2d.md#class_navigationobstacle2d_property_vertices) defined shape.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_navigationobstacle2d_property_avoidance_enabled"></div>

[`bool`](class_bool.md) **avoidance_enabled** = ``true`` <div id="class_navigationobstacle2d_property_avoidance_enabled"></div>

- `void` **set_avoidance_enabled** ( value: [`bool`](class_bool.md) )
- [`bool`](class_bool.md) **get_avoidance_enabled** ( )

If `true` the obstacle affects avoidance using agents.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_navigationobstacle2d_property_avoidance_layers"></div>

[`int`](class_int.md) **avoidance_layers** = ``1`` <div id="class_navigationobstacle2d_property_avoidance_layers"></div>

- `void` **set_avoidance_layers** ( value: [`int`](class_int.md) )
- [`int`](class_int.md) **get_avoidance_layers** ( )

A bitfield determining the avoidance layers for this obstacle. Agents with a matching bit on the their avoidance mask will avoid this obstacle.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_navigationobstacle2d_property_carve_navigation_mesh"></div>

[`bool`](class_bool.md) **carve_navigation_mesh** = ``false`` <div id="class_navigationobstacle2d_property_carve_navigation_mesh"></div>

- `void` **set_carve_navigation_mesh** ( value: [`bool`](class_bool.md) )
- [`bool`](class_bool.md) **get_carve_navigation_mesh** ( )

If enabled the obstacle vertices will carve into the baked navigation mesh with the shape unaffected by additional offsets (e.g. agent radius).

It will still be affected by further postprocessing of the baking process, like edge and polygon simplification.

Requires [`affect_navigation_mesh`](class_navigationobstacle2d.md#class_navigationobstacle2d_property_affect_navigation_mesh) to be enabled.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_navigationobstacle2d_property_radius"></div>

[`float`](class_float.md) **radius** = ``0.0`` <div id="class_navigationobstacle2d_property_radius"></div>

- `void` **set_radius** ( value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_radius** ( )

Sets the avoidance radius for the obstacle.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_navigationobstacle2d_property_velocity"></div>

[`Vector2`](class_vector2.md) **velocity** = ``Vector2(0, 0)`` <div id="class_navigationobstacle2d_property_velocity"></div>

- `void` **set_velocity** ( value: [`Vector2`](class_vector2.md) )
- [`Vector2`](class_vector2.md) **get_velocity** ( )

Sets the wanted velocity for the obstacle so other agent's can better predict the obstacle if it is moved with a velocity regularly (every frame) instead of warped to a new position. Does only affect avoidance for the obstacles [`radius`](class_navigationobstacle2d.md#class_navigationobstacle2d_property_radius). Does nothing for the obstacles static vertices.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_navigationobstacle2d_property_vertices"></div>

[`PackedVector2Array`](class_packedvector2array.md) **vertices** = ``PackedVector2Array()`` <div id="class_navigationobstacle2d_property_vertices"></div>

- `void` **set_vertices** ( value: [`PackedVector2Array`](class_packedvector2array.md) )
- [`PackedVector2Array`](class_packedvector2array.md) **get_vertices** ( )

The outline vertices of the obstacle. If the vertices are winded in clockwise order agents will be pushed in by the obstacle, else they will be pushed out. Outlines can not be crossed or overlap. Should the vertices using obstacle be warped to a new position agent's can not predict this movement and may get trapped inside the obstacle.

**Note:** The returned array is *copied* and any changes to it will not update the original property value. See [`PackedVector2Array`](class_packedvector2array.md) for more details.

<!-- rst-class:: classref-section-separator -->

---

## 方法说明

<div id="_class_navigationobstacle2d_method_get_avoidance_layer_value"></div>

[`bool`](class_bool.md) **get_avoidance_layer_value** ( layer_number: [`int`](class_int.md) ) const[^const]<div id="class_navigationobstacle2d_method_get_avoidance_layer_value"></div>

Returns whether or not the specified layer of the [`avoidance_layers`](class_navigationobstacle2d.md#class_navigationobstacle2d_property_avoidance_layers) bitmask is enabled, given a `layer_number` between 1 and 32.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_navigationobstacle2d_method_get_navigation_map"></div>

[`RID`](class_rid.md) **get_navigation_map** ( ) const[^const]<div id="class_navigationobstacle2d_method_get_navigation_map"></div>

Returns the [`RID`](class_rid.md) of the navigation map for this NavigationObstacle node. This function returns always the map set on the NavigationObstacle node and not the map of the abstract obstacle on the NavigationServer. If the obstacle map is changed directly with the NavigationServer API the NavigationObstacle node will not be aware of the map change. Use [`set_navigation_map`](class_navigationobstacle2d.md#class_navigationobstacle2d_method_set_navigation_map) to change the navigation map for the NavigationObstacle and also update the obstacle on the NavigationServer.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_navigationobstacle2d_method_get_rid"></div>

[`RID`](class_rid.md) **get_rid** ( ) const[^const]<div id="class_navigationobstacle2d_method_get_rid"></div>

Returns the [`RID`](class_rid.md) of this obstacle on the [`NavigationServer2D`](class_navigationserver2d.md).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_navigationobstacle2d_method_set_avoidance_layer_value"></div>

`void` **set_avoidance_layer_value** ( layer_number: [`int`](class_int.md), value: [`bool`](class_bool.md) )<div id="class_navigationobstacle2d_method_set_avoidance_layer_value"></div>

Based on `value`, enables or disables the specified layer in the [`avoidance_layers`](class_navigationobstacle2d.md#class_navigationobstacle2d_property_avoidance_layers) bitmask, given a `layer_number` between 1 and 32.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_navigationobstacle2d_method_set_navigation_map"></div>

`void` **set_navigation_map** ( navigation_map: [`RID`](class_rid.md) )<div id="class_navigationobstacle2d_method_set_navigation_map"></div>

Sets the [`RID`](class_rid.md) of the navigation map this NavigationObstacle node should use and also updates the `obstacle` on the NavigationServer.

[^virtual]: 本方法通常需要用户覆盖才能生效。
[^const]: 本方法无副作用，不会修改该实例的任何成员变量。
[^vararg]: 本方法除了能接受在此处描述的参数外，还能够继续接受任意数量的参数。
[^constructor]: 本方法用于构造某个类型。
[^static]: 调用本方法无需实例，可直接使用类名进行调用。
[^operator]: 本方法描述的是使用本类型作为左操作数的有效运算符。
[^bitfield]: 这个值是由下列位标志构成位掩码的整数。
[^void]: 无返回值。
