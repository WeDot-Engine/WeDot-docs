<!-- ⚠ 请勿编辑本文件 ⚠ -->
<!-- 本文档使用脚本从 WeDot 引擎源码仓库生成。 -->
<!-- 生成脚本：https://github.com/WeDot-Engine/WeDot/tree/master/doc/tools/make_md.py； -->
<!-- 原文件：https://github.com/WeDot-Engine/WeDot/tree/master/doc/classes/NavigationObstacle3D.xml。 -->

<div id="_class_navigationobstacle3d"></div>

# NavigationObstacle3D

**实验性：** This class may be changed or removed in future versions.

**继承：** [`Node3D`](class_node3d.md) **<** [`Node`](class_node.md) **<** [`Object`](class_object.md)

3D obstacle used to affect navigation mesh baking or constrain velocities of avoidance controlled agents.

## 描述

An obstacle needs a navigation map and outline [`vertices`](class_navigationobstacle3d.md#class_navigationobstacle3d_property_vertices) defined to work correctly. The outlines can not cross or overlap and are restricted to a plane projection. This means the y-axis of the vertices is ignored, instead the obstacle's global y-axis position is used for placement. The projected shape is extruded by the obstacles height along the y-axis.

Obstacles can be included in the navigation mesh baking process when [`affect_navigation_mesh`](class_navigationobstacle3d.md#class_navigationobstacle3d_property_affect_navigation_mesh) is enabled. They do not add walkable geometry, instead their role is to discard other source geometry inside the shape. This can be used to prevent navigation mesh from appearing in unwanted places, e.g. inside "solid" geometry or on top of it. If [`carve_navigation_mesh`](class_navigationobstacle3d.md#class_navigationobstacle3d_property_carve_navigation_mesh) is enabled the baked shape will not be affected by offsets of the navigation mesh baking, e.g. the agent radius.

With [`avoidance_enabled`](class_navigationobstacle3d.md#class_navigationobstacle3d_property_avoidance_enabled) the obstacle can constrain the avoidance velocities of avoidance using agents. If the obstacle's vertices are wound in clockwise order, avoidance agents will be pushed in by the obstacle, otherwise, avoidance agents will be pushed out. Obstacles using vertices and avoidance can warp to a new position but should not be moved every single frame as each change requires a rebuild of the avoidance map.

## 属性

|||
|:-:|:--|
| [`bool`](class_bool.md)                             | [`affect_navigation_mesh`](class_navigationobstacle3d.md#class_navigationobstacle3d_property_affect_navigation_mesh) | ``false``                |
| [`bool`](class_bool.md)                             | [`avoidance_enabled`](class_navigationobstacle3d.md#class_navigationobstacle3d_property_avoidance_enabled)           | ``true``                 |
| [`int`](class_int.md)                               | [`avoidance_layers`](class_navigationobstacle3d.md#class_navigationobstacle3d_property_avoidance_layers)             | ``1``                    |
| [`bool`](class_bool.md)                             | [`carve_navigation_mesh`](class_navigationobstacle3d.md#class_navigationobstacle3d_property_carve_navigation_mesh)   | ``false``                |
| [`float`](class_float.md)                           | [`height`](class_navigationobstacle3d.md#class_navigationobstacle3d_property_height)                                 | ``1.0``                  |
| [`float`](class_float.md)                           | [`radius`](class_navigationobstacle3d.md#class_navigationobstacle3d_property_radius)                                 | ``0.0``                  |
| [`bool`](class_bool.md)                             | [`use_3d_avoidance`](class_navigationobstacle3d.md#class_navigationobstacle3d_property_use_3d_avoidance)             | ``false``                |
| [`Vector3`](class_vector3.md)                       | [`velocity`](class_navigationobstacle3d.md#class_navigationobstacle3d_property_velocity)                             | ``Vector3(0, 0, 0)``     |
| [`PackedVector3Array`](class_packedvector3array.md) | [`vertices`](class_navigationobstacle3d.md#class_navigationobstacle3d_property_vertices)                             | ``PackedVector3Array()`` |

## 方法

|||
|:-:|:--|
| [`bool`](class_bool.md) | [`get_avoidance_layer_value`](class_navigationobstacle3d.md#class_navigationobstacle3d_method_get_avoidance_layer_value) ( layer_number: [`int`](class_int.md) ) const[^const]                   |
| [`RID`](class_rid.md)   | [`get_navigation_map`](class_navigationobstacle3d.md#class_navigationobstacle3d_method_get_navigation_map) ( ) const[^const]                                                                     |
| [`RID`](class_rid.md)   | [`get_rid`](class_navigationobstacle3d.md#class_navigationobstacle3d_method_get_rid) ( ) const[^const]                                                                                           |
| `void`                  | [`set_avoidance_layer_value`](class_navigationobstacle3d.md#class_navigationobstacle3d_method_set_avoidance_layer_value) ( layer_number: [`int`](class_int.md), value: [`bool`](class_bool.md) ) |
| `void`                  | [`set_navigation_map`](class_navigationobstacle3d.md#class_navigationobstacle3d_method_set_navigation_map) ( navigation_map: [`RID`](class_rid.md) )                                             |

<!-- rst-class:: classref-section-separator -->

---

## 属性说明

<div id="_class_navigationobstacle3d_property_affect_navigation_mesh"></div>

[`bool`](class_bool.md) **affect_navigation_mesh** = ``false`` <div id="class_navigationobstacle3d_property_affect_navigation_mesh"></div>

- `void` **set_affect_navigation_mesh** ( value: [`bool`](class_bool.md) )
- [`bool`](class_bool.md) **get_affect_navigation_mesh** ( )

If enabled and parsed in a navigation mesh baking process the obstacle will discard source geometry inside its [`vertices`](class_navigationobstacle3d.md#class_navigationobstacle3d_property_vertices) and [`height`](class_navigationobstacle3d.md#class_navigationobstacle3d_property_height) defined shape.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_navigationobstacle3d_property_avoidance_enabled"></div>

[`bool`](class_bool.md) **avoidance_enabled** = ``true`` <div id="class_navigationobstacle3d_property_avoidance_enabled"></div>

- `void` **set_avoidance_enabled** ( value: [`bool`](class_bool.md) )
- [`bool`](class_bool.md) **get_avoidance_enabled** ( )

If `true` the obstacle affects avoidance using agents.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_navigationobstacle3d_property_avoidance_layers"></div>

[`int`](class_int.md) **avoidance_layers** = ``1`` <div id="class_navigationobstacle3d_property_avoidance_layers"></div>

- `void` **set_avoidance_layers** ( value: [`int`](class_int.md) )
- [`int`](class_int.md) **get_avoidance_layers** ( )

A bitfield determining the avoidance layers for this obstacle. Agents with a matching bit on the their avoidance mask will avoid this obstacle.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_navigationobstacle3d_property_carve_navigation_mesh"></div>

[`bool`](class_bool.md) **carve_navigation_mesh** = ``false`` <div id="class_navigationobstacle3d_property_carve_navigation_mesh"></div>

- `void` **set_carve_navigation_mesh** ( value: [`bool`](class_bool.md) )
- [`bool`](class_bool.md) **get_carve_navigation_mesh** ( )

If enabled the obstacle vertices will carve into the baked navigation mesh with the shape unaffected by additional offsets (e.g. agent radius).

It will still be affected by further postprocessing of the baking process, like edge and polygon simplification.

Requires [`affect_navigation_mesh`](class_navigationobstacle3d.md#class_navigationobstacle3d_property_affect_navigation_mesh) to be enabled.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_navigationobstacle3d_property_height"></div>

[`float`](class_float.md) **height** = ``1.0`` <div id="class_navigationobstacle3d_property_height"></div>

- `void` **set_height** ( value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_height** ( )

Sets the obstacle height used in 2D avoidance. 2D avoidance using agent's ignore obstacles that are below or above them.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_navigationobstacle3d_property_radius"></div>

[`float`](class_float.md) **radius** = ``0.0`` <div id="class_navigationobstacle3d_property_radius"></div>

- `void` **set_radius** ( value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_radius** ( )

Sets the avoidance radius for the obstacle.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_navigationobstacle3d_property_use_3d_avoidance"></div>

[`bool`](class_bool.md) **use_3d_avoidance** = ``false`` <div id="class_navigationobstacle3d_property_use_3d_avoidance"></div>

- `void` **set_use_3d_avoidance** ( value: [`bool`](class_bool.md) )
- [`bool`](class_bool.md) **get_use_3d_avoidance** ( )

If `true` the obstacle affects 3D avoidance using agent's with obstacle [`radius`](class_navigationobstacle3d.md#class_navigationobstacle3d_property_radius).

If `false` the obstacle affects 2D avoidance using agent's with both obstacle [`vertices`](class_navigationobstacle3d.md#class_navigationobstacle3d_property_vertices) as well as obstacle [`radius`](class_navigationobstacle3d.md#class_navigationobstacle3d_property_radius).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_navigationobstacle3d_property_velocity"></div>

[`Vector3`](class_vector3.md) **velocity** = ``Vector3(0, 0, 0)`` <div id="class_navigationobstacle3d_property_velocity"></div>

- `void` **set_velocity** ( value: [`Vector3`](class_vector3.md) )
- [`Vector3`](class_vector3.md) **get_velocity** ( )

Sets the wanted velocity for the obstacle so other agent's can better predict the obstacle if it is moved with a velocity regularly (every frame) instead of warped to a new position. Does only affect avoidance for the obstacles [`radius`](class_navigationobstacle3d.md#class_navigationobstacle3d_property_radius). Does nothing for the obstacles static vertices.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_navigationobstacle3d_property_vertices"></div>

[`PackedVector3Array`](class_packedvector3array.md) **vertices** = ``PackedVector3Array()`` <div id="class_navigationobstacle3d_property_vertices"></div>

- `void` **set_vertices** ( value: [`PackedVector3Array`](class_packedvector3array.md) )
- [`PackedVector3Array`](class_packedvector3array.md) **get_vertices** ( )

The outline vertices of the obstacle. If the vertices are winded in clockwise order agents will be pushed in by the obstacle, else they will be pushed out. Outlines can not be crossed or overlap. Should the vertices using obstacle be warped to a new position agent's can not predict this movement and may get trapped inside the obstacle.

**Note:** The returned array is *copied* and any changes to it will not update the original property value. See [`PackedVector3Array`](class_packedvector3array.md) for more details.

<!-- rst-class:: classref-section-separator -->

---

## 方法说明

<div id="_class_navigationobstacle3d_method_get_avoidance_layer_value"></div>

[`bool`](class_bool.md) **get_avoidance_layer_value** ( layer_number: [`int`](class_int.md) ) const[^const]<div id="class_navigationobstacle3d_method_get_avoidance_layer_value"></div>

Returns whether or not the specified layer of the [`avoidance_layers`](class_navigationobstacle3d.md#class_navigationobstacle3d_property_avoidance_layers) bitmask is enabled, given a `layer_number` between 1 and 32.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_navigationobstacle3d_method_get_navigation_map"></div>

[`RID`](class_rid.md) **get_navigation_map** ( ) const[^const]<div id="class_navigationobstacle3d_method_get_navigation_map"></div>

Returns the [`RID`](class_rid.md) of the navigation map for this NavigationObstacle node. This function returns always the map set on the NavigationObstacle node and not the map of the abstract obstacle on the NavigationServer. If the obstacle map is changed directly with the NavigationServer API the NavigationObstacle node will not be aware of the map change. Use [`set_navigation_map`](class_navigationobstacle3d.md#class_navigationobstacle3d_method_set_navigation_map) to change the navigation map for the NavigationObstacle and also update the obstacle on the NavigationServer.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_navigationobstacle3d_method_get_rid"></div>

[`RID`](class_rid.md) **get_rid** ( ) const[^const]<div id="class_navigationobstacle3d_method_get_rid"></div>

Returns the [`RID`](class_rid.md) of this obstacle on the [`NavigationServer3D`](class_navigationserver3d.md).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_navigationobstacle3d_method_set_avoidance_layer_value"></div>

`void` **set_avoidance_layer_value** ( layer_number: [`int`](class_int.md), value: [`bool`](class_bool.md) )<div id="class_navigationobstacle3d_method_set_avoidance_layer_value"></div>

Based on `value`, enables or disables the specified layer in the [`avoidance_layers`](class_navigationobstacle3d.md#class_navigationobstacle3d_property_avoidance_layers) bitmask, given a `layer_number` between 1 and 32.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_navigationobstacle3d_method_set_navigation_map"></div>

`void` **set_navigation_map** ( navigation_map: [`RID`](class_rid.md) )<div id="class_navigationobstacle3d_method_set_navigation_map"></div>

Sets the [`RID`](class_rid.md) of the navigation map this NavigationObstacle node should use and also updates the `obstacle` on the NavigationServer.

[^virtual]: 本方法通常需要用户覆盖才能生效。
[^const]: 本方法无副作用，不会修改该实例的任何成员变量。
[^vararg]: 本方法除了能接受在此处描述的参数外，还能够继续接受任意数量的参数。
[^constructor]: 本方法用于构造某个类型。
[^static]: 调用本方法无需实例，可直接使用类名进行调用。
[^operator]: 本方法描述的是使用本类型作为左操作数的有效运算符。
[^bitfield]: 这个值是由下列位标志构成位掩码的整数。
[^void]: 无返回值。
