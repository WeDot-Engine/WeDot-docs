<!-- ⚠ 请勿编辑本文件 ⚠ -->
<!-- 本文档使用脚本从 WeDot 引擎源码仓库生成。 -->
<!-- 生成脚本：https://github.com/WeDot-Engine/WeDot/tree/4.3/doc/tools/make_md.py； -->
<!-- 原文件：https://github.com/WeDot-Engine/WeDot/tree/4.3/doc/classes/NavigationRegion2D.xml。 -->

<div id="_class_navigationregion2d"></div>

# NavigationRegion2D

**实验性：** This class may be changed or removed in future versions.

**继承：** [`Node2D`](class_node2d.md) **<** [`CanvasItem`](class_canvasitem.md) **<** [`Node`](class_node.md) **<** [`Object`](class_object.md)

A traversable 2D region that [`NavigationAgent2D`](class_navigationagent2d.md) s can use for pathfinding.

## 描述

A traversable 2D region based on a [`NavigationPolygon`](class_navigationpolygon.md) that [`NavigationAgent2D`](class_navigationagent2d.md) s can use for pathfinding.

Two regions can be connected to each other if they share a similar edge. You can set the minimum distance between two vertices required to connect two edges by using [`NavigationServer2D.map_set_edge_connection_margin`](#class_navigationserver2d_method_map_set_edge_connection_margin).

 **Note:** Overlapping two regions' navigation polygons is not enough for connecting two regions. They must share a similar edge.

The pathfinding cost of entering a region from another region can be controlled with the [`enter_cost`](#class_navigationregion2d_property_enter_cost) value.

 **Note:** This value is not added to the path cost when the start position is already inside this region.

The pathfinding cost of traveling distances inside this region can be controlled with the [`travel_cost`](#class_navigationregion2d_property_travel_cost) multiplier.

 **Note:** This node caches changes to its properties, so if you make changes to the underlying region [`RID`](class_rid.md) in [`NavigationServer2D`](class_navigationserver2d.md), they will not be reflected in this node's properties.

## 属性

| [`bool`](class_bool.md)                           | [`enabled`](#class_navigationregion2d_property_enabled)                           | ``true`` |
| [`float`](class_float.md)                         | [`enter_cost`](#class_navigationregion2d_property_enter_cost)                     | ``0.0``  |
| [`int`](class_int.md)                             | [`navigation_layers`](#class_navigationregion2d_property_navigation_layers)       | ``1``    |
| [`NavigationPolygon`](class_navigationpolygon.md) | [`navigation_polygon`](#class_navigationregion2d_property_navigation_polygon)     |          |
| [`float`](class_float.md)                         | [`travel_cost`](#class_navigationregion2d_property_travel_cost)                   | ``1.0``  |
| [`bool`](class_bool.md)                           | [`use_edge_connections`](#class_navigationregion2d_property_use_edge_connections) | ``true`` |

## 方法

| `void`                  | [`bake_navigation_polygon`](#class_navigationregion2d_method_bake_navigation_polygon) ( on_thread: [`bool`](class_bool.md) = true )                                 |
| [`bool`](class_bool.md) | [`get_navigation_layer_value`](#class_navigationregion2d_method_get_navigation_layer_value) ( layer_number: [`int`](class_int.md) ) const[^const]                   |
| [`RID`](class_rid.md)   | [`get_navigation_map`](#class_navigationregion2d_method_get_navigation_map) ( ) const[^const]                                                                       |
| [`RID`](class_rid.md)   | [`get_region_rid`](#class_navigationregion2d_method_get_region_rid) ( ) const[^const]                                                                               |
| [`RID`](class_rid.md)   | [`get_rid`](#class_navigationregion2d_method_get_rid) ( ) const[^const]                                                                                             |
| [`bool`](class_bool.md) | [`is_baking`](#class_navigationregion2d_method_is_baking) ( ) const[^const]                                                                                         |
| `void`                  | [`set_navigation_layer_value`](#class_navigationregion2d_method_set_navigation_layer_value) ( layer_number: [`int`](class_int.md), value: [`bool`](class_bool.md) ) |
| `void`                  | [`set_navigation_map`](#class_navigationregion2d_method_set_navigation_map) ( navigation_map: [`RID`](class_rid.md) )                                               |

<!-- rst-class:: classref-section-separator -->

---

## 信号

<div id="_class_class_navigationregion2d_signal_bake_finished"></div>

**bake_finished** ( ) <div id="class_navigationregion2d_signal_bake_finished"></div>

Emitted when a navigation polygon bake operation is completed.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_class_navigationregion2d_signal_navigation_polygon_changed"></div>

**navigation_polygon_changed** ( ) <div id="class_navigationregion2d_signal_navigation_polygon_changed"></div>

Emitted when the used navigation polygon is replaced or changes to the internals of the current navigation polygon are committed.

<!-- rst-class:: classref-section-separator -->

---

## 属性说明

<div id="_class_navigationregion2d_property_enabled"></div>

[`bool`](class_bool.md) **enabled** = ``true`` <div id="class_navigationregion2d_property_enabled"></div>

- `void` **set_enabled** ( value: [`bool`](class_bool.md) )
- [`bool`](class_bool.md) **is_enabled** ( )

Determines if the **NavigationRegion2D** is enabled or disabled.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_navigationregion2d_property_enter_cost"></div>

[`float`](class_float.md) **enter_cost** = ``0.0`` <div id="class_navigationregion2d_property_enter_cost"></div>

- `void` **set_enter_cost** ( value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_enter_cost** ( )

When pathfinding enters this region's navigation mesh from another regions navigation mesh the [`enter_cost`](#class_navigationregion2d_property_enter_cost) value is added to the path distance for determining the shortest path.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_navigationregion2d_property_navigation_layers"></div>

[`int`](class_int.md) **navigation_layers** = ``1`` <div id="class_navigationregion2d_property_navigation_layers"></div>

- `void` **set_navigation_layers** ( value: [`int`](class_int.md) )
- [`int`](class_int.md) **get_navigation_layers** ( )

A bitfield determining all navigation layers the region belongs to. These navigation layers can be checked upon when requesting a path with [`NavigationServer2D.map_get_path`](#class_navigationserver2d_method_map_get_path).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_navigationregion2d_property_navigation_polygon"></div>

[`NavigationPolygon`](class_navigationpolygon.md) **navigation_polygon** <div id="class_navigationregion2d_property_navigation_polygon"></div>

- `void` **set_navigation_polygon** ( value: [`NavigationPolygon`](class_navigationpolygon.md) )
- [`NavigationPolygon`](class_navigationpolygon.md) **get_navigation_polygon** ( )

The [`NavigationPolygon`](class_navigationpolygon.md) resource to use.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_navigationregion2d_property_travel_cost"></div>

[`float`](class_float.md) **travel_cost** = ``1.0`` <div id="class_navigationregion2d_property_travel_cost"></div>

- `void` **set_travel_cost** ( value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_travel_cost** ( )

When pathfinding moves inside this region's navigation mesh the traveled distances are multiplied with [`travel_cost`](#class_navigationregion2d_property_travel_cost) for determining the shortest path.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_navigationregion2d_property_use_edge_connections"></div>

[`bool`](class_bool.md) **use_edge_connections** = ``true`` <div id="class_navigationregion2d_property_use_edge_connections"></div>

- `void` **set_use_edge_connections** ( value: [`bool`](class_bool.md) )
- [`bool`](class_bool.md) **get_use_edge_connections** ( )

If enabled the navigation region will use edge connections to connect with other navigation regions within proximity of the navigation map edge connection margin.

<!-- rst-class:: classref-section-separator -->

---

## 方法说明

<div id="_class_navigationregion2d_method_bake_navigation_polygon"></div>

`void` **bake_navigation_polygon** ( on_thread: [`bool`](class_bool.md) = true )<div id="class_navigationregion2d_method_bake_navigation_polygon"></div>

Bakes the [`NavigationPolygon`](class_navigationpolygon.md). If `on_thread` is set to `true` (default), the baking is done on a separate thread.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_navigationregion2d_method_get_navigation_layer_value"></div>

[`bool`](class_bool.md) **get_navigation_layer_value** ( layer_number: [`int`](class_int.md) ) const[^const]<div id="class_navigationregion2d_method_get_navigation_layer_value"></div>

Returns whether or not the specified layer of the [`navigation_layers`](#class_navigationregion2d_property_navigation_layers) bitmask is enabled, given a `layer_number` between 1 and 32.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_navigationregion2d_method_get_navigation_map"></div>

[`RID`](class_rid.md) **get_navigation_map** ( ) const[^const]<div id="class_navigationregion2d_method_get_navigation_map"></div>

Returns the current navigation map [`RID`](class_rid.md) used by this region.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_navigationregion2d_method_get_region_rid"></div>

[`RID`](class_rid.md) **get_region_rid** ( ) const[^const]<div id="class_navigationregion2d_method_get_region_rid"></div>

**已弃用：** Use [`get_rid`](#class_navigationregion2d_method_get_rid) instead.

Returns the [`RID`](class_rid.md) of this region on the [`NavigationServer2D`](class_navigationserver2d.md).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_navigationregion2d_method_get_rid"></div>

[`RID`](class_rid.md) **get_rid** ( ) const[^const]<div id="class_navigationregion2d_method_get_rid"></div>

Returns the [`RID`](class_rid.md) of this region on the [`NavigationServer2D`](class_navigationserver2d.md). Combined with [`NavigationServer2D.map_get_closest_point_owner`](#class_navigationserver2d_method_map_get_closest_point_owner) can be used to identify the **NavigationRegion2D** closest to a point on the merged navigation map.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_navigationregion2d_method_is_baking"></div>

[`bool`](class_bool.md) **is_baking** ( ) const[^const]<div id="class_navigationregion2d_method_is_baking"></div>

Returns `true` when the [`NavigationPolygon`](class_navigationpolygon.md) is being baked on a background thread.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_navigationregion2d_method_set_navigation_layer_value"></div>

`void` **set_navigation_layer_value** ( layer_number: [`int`](class_int.md), value: [`bool`](class_bool.md) )<div id="class_navigationregion2d_method_set_navigation_layer_value"></div>

Based on `value`, enables or disables the specified layer in the [`navigation_layers`](#class_navigationregion2d_property_navigation_layers) bitmask, given a `layer_number` between 1 and 32.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_navigationregion2d_method_set_navigation_map"></div>

`void` **set_navigation_map** ( navigation_map: [`RID`](class_rid.md) )<div id="class_navigationregion2d_method_set_navigation_map"></div>

Sets the [`RID`](class_rid.md) of the navigation map this region should use. By default the region will automatically join the [`World2D`](class_world2d.md) default navigation map so this function is only required to override the default map.

[^virtual]: 本方法通常需要用户覆盖才能生效。
[^const]: 本方法无副作用，不会修改该实例的任何成员变量。
[^vararg]: 本方法除了能接受在此处描述的参数外，还能够继续接受任意数量的参数。
[^constructor]: 本方法用于构造某个类型。
[^static]: 调用本方法无需实例，可直接使用类名进行调用。
[^operator]: 本方法描述的是使用本类型作为左操作数的有效运算符。
[^bitfield]: 这个值是由下列位标志构成位掩码的整数。
[^void]: 无返回值。
