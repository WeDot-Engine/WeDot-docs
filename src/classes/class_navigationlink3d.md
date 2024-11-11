<!-- ⚠ 请勿编辑本文件 ⚠ -->
<!-- 本文档使用脚本从 WeDot 引擎源码仓库生成。 -->
<!-- 生成脚本：https://github.com/WeDot-Engine/WeDot/tree/master/doc/tools/make_md.py； -->
<!-- 原文件：https://github.com/WeDot-Engine/WeDot/tree/master/doc/classes/NavigationLink3D.xml。 -->

<div id="_class_navigationlink3d"></div>

# NavigationLink3D

**实验性：** This class may be changed or removed in future versions.

**继承：** [`Node3D`](class_node3d.md) **<** [`Node`](class_node.md) **<** [`Object`](class_object.md)

A link between two positions on [`NavigationRegion3D`](class_navigationregion3d.md) s that agents can be routed through.

## 描述

A link between two positions on [`NavigationRegion3D`](class_navigationregion3d.md) s that agents can be routed through. These positions can be on the same [`NavigationRegion3D`](class_navigationregion3d.md) or on two different ones. Links are useful to express navigation methods other than traveling along the surface of the navigation mesh, such as ziplines, teleporters, or gaps that can be jumped across.

## 属性

|||
|:-:|:--|
| [`bool`](class_bool.md)       | [`bidirectional`](class_navigationlink3d.md#class_navigationlink3d_property_bidirectional)         | ``true``             |
| [`bool`](class_bool.md)       | [`enabled`](class_navigationlink3d.md#class_navigationlink3d_property_enabled)                     | ``true``             |
| [`Vector3`](class_vector3.md) | [`end_position`](class_navigationlink3d.md#class_navigationlink3d_property_end_position)           | ``Vector3(0, 0, 0)`` |
| [`float`](class_float.md)     | [`enter_cost`](class_navigationlink3d.md#class_navigationlink3d_property_enter_cost)               | ``0.0``              |
| [`int`](class_int.md)         | [`navigation_layers`](class_navigationlink3d.md#class_navigationlink3d_property_navigation_layers) | ``1``                |
| [`Vector3`](class_vector3.md) | [`start_position`](class_navigationlink3d.md#class_navigationlink3d_property_start_position)       | ``Vector3(0, 0, 0)`` |
| [`float`](class_float.md)     | [`travel_cost`](class_navigationlink3d.md#class_navigationlink3d_property_travel_cost)             | ``1.0``              |

## 方法

|||
|:-:|:--|
| [`Vector3`](class_vector3.md) | [`get_global_end_position`](class_navigationlink3d.md#class_navigationlink3d_method_get_global_end_position) ( ) const[^const]                                                             |
| [`Vector3`](class_vector3.md) | [`get_global_start_position`](class_navigationlink3d.md#class_navigationlink3d_method_get_global_start_position) ( ) const[^const]                                                         |
| [`bool`](class_bool.md)       | [`get_navigation_layer_value`](class_navigationlink3d.md#class_navigationlink3d_method_get_navigation_layer_value) ( layer_number: [`int`](class_int.md) ) const[^const]                   |
| [`RID`](class_rid.md)         | [`get_navigation_map`](class_navigationlink3d.md#class_navigationlink3d_method_get_navigation_map) ( ) const[^const]                                                                       |
| [`RID`](class_rid.md)         | [`get_rid`](class_navigationlink3d.md#class_navigationlink3d_method_get_rid) ( ) const[^const]                                                                                             |
| `void`                        | [`set_global_end_position`](class_navigationlink3d.md#class_navigationlink3d_method_set_global_end_position) ( position: [`Vector3`](class_vector3.md) )                                   |
| `void`                        | [`set_global_start_position`](class_navigationlink3d.md#class_navigationlink3d_method_set_global_start_position) ( position: [`Vector3`](class_vector3.md) )                               |
| `void`                        | [`set_navigation_layer_value`](class_navigationlink3d.md#class_navigationlink3d_method_set_navigation_layer_value) ( layer_number: [`int`](class_int.md), value: [`bool`](class_bool.md) ) |
| `void`                        | [`set_navigation_map`](class_navigationlink3d.md#class_navigationlink3d_method_set_navigation_map) ( navigation_map: [`RID`](class_rid.md) )                                               |

<!-- rst-class:: classref-section-separator -->

---

## 属性说明

<div id="_class_navigationlink3d_property_bidirectional"></div>

[`bool`](class_bool.md) **bidirectional** = ``true`` <div id="class_navigationlink3d_property_bidirectional"></div>

- `void` **set_bidirectional** ( value: [`bool`](class_bool.md) )
- [`bool`](class_bool.md) **is_bidirectional** ( )

Whether this link can be traveled in both directions or only from [`start_position`](class_navigationlink3d.md#class_navigationlink3d_property_start_position) to [`end_position`](class_navigationlink3d.md#class_navigationlink3d_property_end_position).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_navigationlink3d_property_enabled"></div>

[`bool`](class_bool.md) **enabled** = ``true`` <div id="class_navigationlink3d_property_enabled"></div>

- `void` **set_enabled** ( value: [`bool`](class_bool.md) )
- [`bool`](class_bool.md) **is_enabled** ( )

Whether this link is currently active. If `false`, [`NavigationServer3D.map_get_path`](class_navigationserver3d.md#class_navigationserver3d_method_map_get_path) will ignore this link.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_navigationlink3d_property_end_position"></div>

[`Vector3`](class_vector3.md) **end_position** = ``Vector3(0, 0, 0)`` <div id="class_navigationlink3d_property_end_position"></div>

- `void` **set_end_position** ( value: [`Vector3`](class_vector3.md) )
- [`Vector3`](class_vector3.md) **get_end_position** ( )

Ending position of the link.

This position will search out the nearest polygon in the navigation mesh to attach to.

The distance the link will search is controlled by [`NavigationServer3D.map_set_link_connection_radius`](class_navigationserver3d.md#class_navigationserver3d_method_map_set_link_connection_radius).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_navigationlink3d_property_enter_cost"></div>

[`float`](class_float.md) **enter_cost** = ``0.0`` <div id="class_navigationlink3d_property_enter_cost"></div>

- `void` **set_enter_cost** ( value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_enter_cost** ( )

When pathfinding enters this link from another regions navigation mesh the [`enter_cost`](class_navigationlink3d.md#class_navigationlink3d_property_enter_cost) value is added to the path distance for determining the shortest path.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_navigationlink3d_property_navigation_layers"></div>

[`int`](class_int.md) **navigation_layers** = ``1`` <div id="class_navigationlink3d_property_navigation_layers"></div>

- `void` **set_navigation_layers** ( value: [`int`](class_int.md) )
- [`int`](class_int.md) **get_navigation_layers** ( )

A bitfield determining all navigation layers the link belongs to. These navigation layers will be checked when requesting a path with [`NavigationServer3D.map_get_path`](class_navigationserver3d.md#class_navigationserver3d_method_map_get_path).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_navigationlink3d_property_start_position"></div>

[`Vector3`](class_vector3.md) **start_position** = ``Vector3(0, 0, 0)`` <div id="class_navigationlink3d_property_start_position"></div>

- `void` **set_start_position** ( value: [`Vector3`](class_vector3.md) )
- [`Vector3`](class_vector3.md) **get_start_position** ( )

Starting position of the link.

This position will search out the nearest polygon in the navigation mesh to attach to.

The distance the link will search is controlled by [`NavigationServer3D.map_set_link_connection_radius`](class_navigationserver3d.md#class_navigationserver3d_method_map_set_link_connection_radius).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_navigationlink3d_property_travel_cost"></div>

[`float`](class_float.md) **travel_cost** = ``1.0`` <div id="class_navigationlink3d_property_travel_cost"></div>

- `void` **set_travel_cost** ( value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_travel_cost** ( )

When pathfinding moves along the link the traveled distance is multiplied with [`travel_cost`](class_navigationlink3d.md#class_navigationlink3d_property_travel_cost) for determining the shortest path.

<!-- rst-class:: classref-section-separator -->

---

## 方法说明

<div id="_class_navigationlink3d_method_get_global_end_position"></div>

[`Vector3`](class_vector3.md) **get_global_end_position** ( ) const[^const]<div id="class_navigationlink3d_method_get_global_end_position"></div>

Returns the [`end_position`](class_navigationlink3d.md#class_navigationlink3d_property_end_position) that is relative to the link as a global position.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_navigationlink3d_method_get_global_start_position"></div>

[`Vector3`](class_vector3.md) **get_global_start_position** ( ) const[^const]<div id="class_navigationlink3d_method_get_global_start_position"></div>

Returns the [`start_position`](class_navigationlink3d.md#class_navigationlink3d_property_start_position) that is relative to the link as a global position.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_navigationlink3d_method_get_navigation_layer_value"></div>

[`bool`](class_bool.md) **get_navigation_layer_value** ( layer_number: [`int`](class_int.md) ) const[^const]<div id="class_navigationlink3d_method_get_navigation_layer_value"></div>

Returns whether or not the specified layer of the [`navigation_layers`](class_navigationlink3d.md#class_navigationlink3d_property_navigation_layers) bitmask is enabled, given a `layer_number` between 1 and 32.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_navigationlink3d_method_get_navigation_map"></div>

[`RID`](class_rid.md) **get_navigation_map** ( ) const[^const]<div id="class_navigationlink3d_method_get_navigation_map"></div>

Returns the current navigation map [`RID`](class_rid.md) used by this link.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_navigationlink3d_method_get_rid"></div>

[`RID`](class_rid.md) **get_rid** ( ) const[^const]<div id="class_navigationlink3d_method_get_rid"></div>

Returns the [`RID`](class_rid.md) of this link on the [`NavigationServer3D`](class_navigationserver3d.md).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_navigationlink3d_method_set_global_end_position"></div>

`void` **set_global_end_position** ( position: [`Vector3`](class_vector3.md) )<div id="class_navigationlink3d_method_set_global_end_position"></div>

Sets the [`end_position`](class_navigationlink3d.md#class_navigationlink3d_property_end_position) that is relative to the link from a global `position`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_navigationlink3d_method_set_global_start_position"></div>

`void` **set_global_start_position** ( position: [`Vector3`](class_vector3.md) )<div id="class_navigationlink3d_method_set_global_start_position"></div>

Sets the [`start_position`](class_navigationlink3d.md#class_navigationlink3d_property_start_position) that is relative to the link from a global `position`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_navigationlink3d_method_set_navigation_layer_value"></div>

`void` **set_navigation_layer_value** ( layer_number: [`int`](class_int.md), value: [`bool`](class_bool.md) )<div id="class_navigationlink3d_method_set_navigation_layer_value"></div>

Based on `value`, enables or disables the specified layer in the [`navigation_layers`](class_navigationlink3d.md#class_navigationlink3d_property_navigation_layers) bitmask, given a `layer_number` between 1 and 32.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_navigationlink3d_method_set_navigation_map"></div>

`void` **set_navigation_map** ( navigation_map: [`RID`](class_rid.md) )<div id="class_navigationlink3d_method_set_navigation_map"></div>

Sets the [`RID`](class_rid.md) of the navigation map this link should use. By default the link will automatically join the [`World3D`](class_world3d.md) default navigation map so this function is only required to override the default map.

[^virtual]: 本方法通常需要用户覆盖才能生效。
[^const]: 本方法无副作用，不会修改该实例的任何成员变量。
[^vararg]: 本方法除了能接受在此处描述的参数外，还能够继续接受任意数量的参数。
[^constructor]: 本方法用于构造某个类型。
[^static]: 调用本方法无需实例，可直接使用类名进行调用。
[^operator]: 本方法描述的是使用本类型作为左操作数的有效运算符。
[^bitfield]: 这个值是由下列位标志构成位掩码的整数。
[^void]: 无返回值。
