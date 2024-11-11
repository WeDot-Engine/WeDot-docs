<!-- ⚠ 请勿编辑本文件 ⚠ -->
<!-- 本文档使用脚本从 WeDot 引擎源码仓库生成。 -->
<!-- 生成脚本：https://github.com/WeDot-Engine/WeDot/tree/master/doc/tools/make_md.py； -->
<!-- 原文件：https://github.com/WeDot-Engine/WeDot/tree/master/doc/classes/NavigationAgent3D.xml。 -->

<div id="_class_navigationagent3d"></div>

# NavigationAgent3D

**实验性：** This class may be changed or removed in future versions.

**继承：** [`Node`](class_node.md) **<** [`Object`](class_object.md)

A 3D agent used to pathfind to a position while avoiding obstacles.

## 描述

A 3D agent used to pathfind to a position while avoiding static and dynamic obstacles. The calculation can be used by the parent node to dynamically move it along the path. Requires navigation data to work correctly.

Dynamic obstacles are avoided using RVO collision avoidance. Avoidance is computed before physics, so the pathfinding information can be used safely in the physics step.

 **Note:** After setting the [`target_position`](class_navigationagent3d.md#class_navigationagent3d_property_target_position) property, the [`get_next_path_position`](class_navigationagent3d.md#class_navigationagent3d_method_get_next_path_position) method must be used once every physics frame to update the internal path logic of the navigation agent. The vector position it returns should be used as the next movement position for the agent's parent node.

## 属性

|||
|:-:|:--|
| [`bool`](class_bool.md)                                                            | [`avoidance_enabled`](class_navigationagent3d.md#class_navigationagent3d_property_avoidance_enabled)                       | ``false``             |
| [`int`](class_int.md)                                                              | [`avoidance_layers`](class_navigationagent3d.md#class_navigationagent3d_property_avoidance_layers)                         | ``1``                 |
| [`int`](class_int.md)                                                              | [`avoidance_mask`](class_navigationagent3d.md#class_navigationagent3d_property_avoidance_mask)                             | ``1``                 |
| [`float`](class_float.md)                                                          | [`avoidance_priority`](class_navigationagent3d.md#class_navigationagent3d_property_avoidance_priority)                     | ``1.0``               |
| [`bool`](class_bool.md)                                                            | [`debug_enabled`](class_navigationagent3d.md#class_navigationagent3d_property_debug_enabled)                               | ``false``             |
| [`Color`](class_color.md)                                                          | [`debug_path_custom_color`](class_navigationagent3d.md#class_navigationagent3d_property_debug_path_custom_color)           | ``Color(1, 1, 1, 1)`` |
| [`float`](class_float.md)                                                          | [`debug_path_custom_point_size`](class_navigationagent3d.md#class_navigationagent3d_property_debug_path_custom_point_size) | ``4.0``               |
| [`bool`](class_bool.md)                                                            | [`debug_use_custom`](class_navigationagent3d.md#class_navigationagent3d_property_debug_use_custom)                         | ``false``             |
| [`float`](class_float.md)                                                          | [`height`](class_navigationagent3d.md#class_navigationagent3d_property_height)                                             | ``1.0``               |
| [`bool`](class_bool.md)                                                            | [`keep_y_velocity`](class_navigationagent3d.md#class_navigationagent3d_property_keep_y_velocity)                           | ``true``              |
| [`int`](class_int.md)                                                              | [`max_neighbors`](class_navigationagent3d.md#class_navigationagent3d_property_max_neighbors)                               | ``10``                |
| [`float`](class_float.md)                                                          | [`max_speed`](class_navigationagent3d.md#class_navigationagent3d_property_max_speed)                                       | ``10.0``              |
| [`int`](class_int.md)                                                              | [`navigation_layers`](class_navigationagent3d.md#class_navigationagent3d_property_navigation_layers)                       | ``1``                 |
| [`float`](class_float.md)                                                          | [`neighbor_distance`](class_navigationagent3d.md#class_navigationagent3d_property_neighbor_distance)                       | ``50.0``              |
| [`float`](class_float.md)                                                          | [`path_desired_distance`](class_navigationagent3d.md#class_navigationagent3d_property_path_desired_distance)               | ``1.0``               |
| [`float`](class_float.md)                                                          | [`path_height_offset`](class_navigationagent3d.md#class_navigationagent3d_property_path_height_offset)                     | ``0.0``               |
| [`float`](class_float.md)                                                          | [`path_max_distance`](class_navigationagent3d.md#class_navigationagent3d_property_path_max_distance)                       | ``5.0``               |
| [PathMetadataFlags](#enum_navigationpathqueryparameters3d_pathmetadataflags)       | [`path_metadata_flags`](class_navigationagent3d.md#class_navigationagent3d_property_path_metadata_flags)                   | ``7``                 |
| [PathPostProcessing](#enum_navigationpathqueryparameters3d_pathpostprocessing)     | [`path_postprocessing`](class_navigationagent3d.md#class_navigationagent3d_property_path_postprocessing)                   | ``0``                 |
| [PathfindingAlgorithm](#enum_navigationpathqueryparameters3d_pathfindingalgorithm) | [`pathfinding_algorithm`](class_navigationagent3d.md#class_navigationagent3d_property_pathfinding_algorithm)               | ``0``                 |
| [`float`](class_float.md)                                                          | [`radius`](class_navigationagent3d.md#class_navigationagent3d_property_radius)                                             | ``0.5``               |
| [`float`](class_float.md)                                                          | [`simplify_epsilon`](class_navigationagent3d.md#class_navigationagent3d_property_simplify_epsilon)                         | ``0.0``               |
| [`bool`](class_bool.md)                                                            | [`simplify_path`](class_navigationagent3d.md#class_navigationagent3d_property_simplify_path)                               | ``false``             |
| [`float`](class_float.md)                                                          | [`target_desired_distance`](class_navigationagent3d.md#class_navigationagent3d_property_target_desired_distance)           | ``1.0``               |
| [`Vector3`](class_vector3.md)                                                      | [`target_position`](class_navigationagent3d.md#class_navigationagent3d_property_target_position)                           | ``Vector3(0, 0, 0)``  |
| [`float`](class_float.md)                                                          | [`time_horizon_agents`](class_navigationagent3d.md#class_navigationagent3d_property_time_horizon_agents)                   | ``1.0``               |
| [`float`](class_float.md)                                                          | [`time_horizon_obstacles`](class_navigationagent3d.md#class_navigationagent3d_property_time_horizon_obstacles)             | ``0.0``               |
| [`bool`](class_bool.md)                                                            | [`use_3d_avoidance`](class_navigationagent3d.md#class_navigationagent3d_property_use_3d_avoidance)                         | ``false``             |
| [`Vector3`](class_vector3.md)                                                      | [`velocity`](class_navigationagent3d.md#class_navigationagent3d_property_velocity)                                         | ``Vector3(0, 0, 0)``  |

## 方法

|||
|:-:|:--|
| [`float`](class_float.md)                                             | [`distance_to_target`](class_navigationagent3d.md#class_navigationagent3d_method_distance_to_target) ( ) const[^const]                                                                       |
| [`bool`](class_bool.md)                                               | [`get_avoidance_layer_value`](class_navigationagent3d.md#class_navigationagent3d_method_get_avoidance_layer_value) ( layer_number: [`int`](class_int.md) ) const[^const]                     |
| [`bool`](class_bool.md)                                               | [`get_avoidance_mask_value`](class_navigationagent3d.md#class_navigationagent3d_method_get_avoidance_mask_value) ( mask_number: [`int`](class_int.md) ) const[^const]                        |
| [`PackedVector3Array`](class_packedvector3array.md)                   | [`get_current_navigation_path`](class_navigationagent3d.md#class_navigationagent3d_method_get_current_navigation_path) ( ) const[^const]                                                     |
| [`int`](class_int.md)                                                 | [`get_current_navigation_path_index`](class_navigationagent3d.md#class_navigationagent3d_method_get_current_navigation_path_index) ( ) const[^const]                                         |
| [`NavigationPathQueryResult3D`](class_navigationpathqueryresult3d.md) | [`get_current_navigation_result`](class_navigationagent3d.md#class_navigationagent3d_method_get_current_navigation_result) ( ) const[^const]                                                 |
| [`Vector3`](class_vector3.md)                                         | [`get_final_position`](class_navigationagent3d.md#class_navigationagent3d_method_get_final_position) ( )                                                                                     |
| [`bool`](class_bool.md)                                               | [`get_navigation_layer_value`](class_navigationagent3d.md#class_navigationagent3d_method_get_navigation_layer_value) ( layer_number: [`int`](class_int.md) ) const[^const]                   |
| [`RID`](class_rid.md)                                                 | [`get_navigation_map`](class_navigationagent3d.md#class_navigationagent3d_method_get_navigation_map) ( ) const[^const]                                                                       |
| [`Vector3`](class_vector3.md)                                         | [`get_next_path_position`](class_navigationagent3d.md#class_navigationagent3d_method_get_next_path_position) ( )                                                                             |
| [`RID`](class_rid.md)                                                 | [`get_rid`](class_navigationagent3d.md#class_navigationagent3d_method_get_rid) ( ) const[^const]                                                                                             |
| [`bool`](class_bool.md)                                               | [`is_navigation_finished`](class_navigationagent3d.md#class_navigationagent3d_method_is_navigation_finished) ( )                                                                             |
| [`bool`](class_bool.md)                                               | [`is_target_reachable`](class_navigationagent3d.md#class_navigationagent3d_method_is_target_reachable) ( )                                                                                   |
| [`bool`](class_bool.md)                                               | [`is_target_reached`](class_navigationagent3d.md#class_navigationagent3d_method_is_target_reached) ( ) const[^const]                                                                         |
| `void`                                                                | [`set_avoidance_layer_value`](class_navigationagent3d.md#class_navigationagent3d_method_set_avoidance_layer_value) ( layer_number: [`int`](class_int.md), value: [`bool`](class_bool.md) )   |
| `void`                                                                | [`set_avoidance_mask_value`](class_navigationagent3d.md#class_navigationagent3d_method_set_avoidance_mask_value) ( mask_number: [`int`](class_int.md), value: [`bool`](class_bool.md) )      |
| `void`                                                                | [`set_navigation_layer_value`](class_navigationagent3d.md#class_navigationagent3d_method_set_navigation_layer_value) ( layer_number: [`int`](class_int.md), value: [`bool`](class_bool.md) ) |
| `void`                                                                | [`set_navigation_map`](class_navigationagent3d.md#class_navigationagent3d_method_set_navigation_map) ( navigation_map: [`RID`](class_rid.md) )                                               |
| `void`                                                                | [`set_velocity_forced`](class_navigationagent3d.md#class_navigationagent3d_method_set_velocity_forced) ( velocity: [`Vector3`](class_vector3.md) )                                           |

<!-- rst-class:: classref-section-separator -->

---

## 信号

<div id="_class_class_navigationagent3d_signal_link_reached"></div>

**link_reached** ( details: [`Dictionary`](class_dictionary.md) ) <div id="class_navigationagent3d_signal_link_reached"></div>

Signals that the agent reached a navigation link. Emitted when the agent moves within [`path_desired_distance`](class_navigationagent3d.md#class_navigationagent3d_property_path_desired_distance) of the next position of the path when that position is a navigation link.

The details dictionary may contain the following keys depending on the value of [`path_metadata_flags`](class_navigationagent3d.md#class_navigationagent3d_property_path_metadata_flags):

- `position`: The start position of the link that was reached.

- `type`: Always [`NavigationPathQueryResult3D.PATH_SEGMENT_TYPE_LINK`](class_navigationpathqueryresult3d.md#class_navigationpathqueryresult3d_constant_path_segment_type_link).

- `rid`: The [`RID`](class_rid.md) of the link.

- `owner`: The object which manages the link (usually [`NavigationLink3D`](class_navigationlink3d.md)).

- `link_entry_position`: If `owner` is available and the owner is a [`NavigationLink3D`](class_navigationlink3d.md), it will contain the global position of the link's point the agent is entering.

- `link_exit_position`: If `owner` is available and the owner is a [`NavigationLink3D`](class_navigationlink3d.md), it will contain the global position of the link's point which the agent is exiting.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_class_navigationagent3d_signal_navigation_finished"></div>

**navigation_finished** ( ) <div id="class_navigationagent3d_signal_navigation_finished"></div>

Signals that the agent's navigation has finished. If the target is reachable, navigation ends when the target is reached. If the target is unreachable, navigation ends when the last waypoint of the path is reached. This signal is emitted only once per loaded path.

This signal will be emitted just after [`target_reached`](class_navigationagent3d.md#class_navigationagent3d_signal_target_reached) when the target is reachable.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_class_navigationagent3d_signal_path_changed"></div>

**path_changed** ( ) <div id="class_navigationagent3d_signal_path_changed"></div>

Emitted when the agent had to update the loaded path:

- because path was previously empty.

- because navigation map has changed.

- because agent pushed further away from the current path segment than the [`path_max_distance`](class_navigationagent3d.md#class_navigationagent3d_property_path_max_distance).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_class_navigationagent3d_signal_target_reached"></div>

**target_reached** ( ) <div id="class_navigationagent3d_signal_target_reached"></div>

Signals that the agent reached the target, i.e. the agent moved within [`target_desired_distance`](class_navigationagent3d.md#class_navigationagent3d_property_target_desired_distance) of the [`target_position`](class_navigationagent3d.md#class_navigationagent3d_property_target_position). This signal is emitted only once per loaded path.

This signal will be emitted just before [`navigation_finished`](class_navigationagent3d.md#class_navigationagent3d_signal_navigation_finished) when the target is reachable.

It may not always be possible to reach the target but it should always be possible to reach the final position. See [`get_final_position`](class_navigationagent3d.md#class_navigationagent3d_method_get_final_position).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_class_navigationagent3d_signal_velocity_computed"></div>

**velocity_computed** ( safe_velocity: [`Vector3`](class_vector3.md) ) <div id="class_navigationagent3d_signal_velocity_computed"></div>

Notifies when the collision avoidance velocity is calculated. Emitted every update as long as [`avoidance_enabled`](class_navigationagent3d.md#class_navigationagent3d_property_avoidance_enabled) is `true` and the agent has a navigation map.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_class_navigationagent3d_signal_waypoint_reached"></div>

**waypoint_reached** ( details: [`Dictionary`](class_dictionary.md) ) <div id="class_navigationagent3d_signal_waypoint_reached"></div>

Signals that the agent reached a waypoint. Emitted when the agent moves within [`path_desired_distance`](class_navigationagent3d.md#class_navigationagent3d_property_path_desired_distance) of the next position of the path.

The details dictionary may contain the following keys depending on the value of [`path_metadata_flags`](class_navigationagent3d.md#class_navigationagent3d_property_path_metadata_flags):

- `position`: The position of the waypoint that was reached.

- `type`: The type of navigation primitive (region or link) that contains this waypoint.

- `rid`: The [`RID`](class_rid.md) of the containing navigation primitive (region or link).

- `owner`: The object which manages the containing navigation primitive (region or link).

<!-- rst-class:: classref-section-separator -->

---

## 属性说明

<div id="_class_navigationagent3d_property_avoidance_enabled"></div>

[`bool`](class_bool.md) **avoidance_enabled** = ``false`` <div id="class_navigationagent3d_property_avoidance_enabled"></div>

- `void` **set_avoidance_enabled** ( value: [`bool`](class_bool.md) )
- [`bool`](class_bool.md) **get_avoidance_enabled** ( )

If `true` the agent is registered for an RVO avoidance callback on the [`NavigationServer3D`](class_navigationserver3d.md). When [`velocity`](class_navigationagent3d.md#class_navigationagent3d_property_velocity) is set and the processing is completed a `safe_velocity` Vector3 is received with a signal connection to [`velocity_computed`](class_navigationagent3d.md#class_navigationagent3d_signal_velocity_computed). Avoidance processing with many registered agents has a significant performance cost and should only be enabled on agents that currently require it.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_navigationagent3d_property_avoidance_layers"></div>

[`int`](class_int.md) **avoidance_layers** = ``1`` <div id="class_navigationagent3d_property_avoidance_layers"></div>

- `void` **set_avoidance_layers** ( value: [`int`](class_int.md) )
- [`int`](class_int.md) **get_avoidance_layers** ( )

A bitfield determining the avoidance layers for this NavigationAgent. Other agents with a matching bit on the [`avoidance_mask`](class_navigationagent3d.md#class_navigationagent3d_property_avoidance_mask) will avoid this agent.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_navigationagent3d_property_avoidance_mask"></div>

[`int`](class_int.md) **avoidance_mask** = ``1`` <div id="class_navigationagent3d_property_avoidance_mask"></div>

- `void` **set_avoidance_mask** ( value: [`int`](class_int.md) )
- [`int`](class_int.md) **get_avoidance_mask** ( )

A bitfield determining what other avoidance agents and obstacles this NavigationAgent will avoid when a bit matches at least one of their [`avoidance_layers`](class_navigationagent3d.md#class_navigationagent3d_property_avoidance_layers).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_navigationagent3d_property_avoidance_priority"></div>

[`float`](class_float.md) **avoidance_priority** = ``1.0`` <div id="class_navigationagent3d_property_avoidance_priority"></div>

- `void` **set_avoidance_priority** ( value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_avoidance_priority** ( )

The agent does not adjust the velocity for other agents that would match the [`avoidance_mask`](class_navigationagent3d.md#class_navigationagent3d_property_avoidance_mask) but have a lower [`avoidance_priority`](class_navigationagent3d.md#class_navigationagent3d_property_avoidance_priority). This in turn makes the other agents with lower priority adjust their velocities even more to avoid collision with this agent.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_navigationagent3d_property_debug_enabled"></div>

[`bool`](class_bool.md) **debug_enabled** = ``false`` <div id="class_navigationagent3d_property_debug_enabled"></div>

- `void` **set_debug_enabled** ( value: [`bool`](class_bool.md) )
- [`bool`](class_bool.md) **get_debug_enabled** ( )

If `true` shows debug visuals for this agent.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_navigationagent3d_property_debug_path_custom_color"></div>

[`Color`](class_color.md) **debug_path_custom_color** = ``Color(1, 1, 1, 1)`` <div id="class_navigationagent3d_property_debug_path_custom_color"></div>

- `void` **set_debug_path_custom_color** ( value: [`Color`](class_color.md) )
- [`Color`](class_color.md) **get_debug_path_custom_color** ( )

If [`debug_use_custom`](class_navigationagent3d.md#class_navigationagent3d_property_debug_use_custom) is `true` uses this color for this agent instead of global color.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_navigationagent3d_property_debug_path_custom_point_size"></div>

[`float`](class_float.md) **debug_path_custom_point_size** = ``4.0`` <div id="class_navigationagent3d_property_debug_path_custom_point_size"></div>

- `void` **set_debug_path_custom_point_size** ( value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_debug_path_custom_point_size** ( )

If [`debug_use_custom`](class_navigationagent3d.md#class_navigationagent3d_property_debug_use_custom) is `true` uses this rasterized point size for rendering path points for this agent instead of global point size.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_navigationagent3d_property_debug_use_custom"></div>

[`bool`](class_bool.md) **debug_use_custom** = ``false`` <div id="class_navigationagent3d_property_debug_use_custom"></div>

- `void` **set_debug_use_custom** ( value: [`bool`](class_bool.md) )
- [`bool`](class_bool.md) **get_debug_use_custom** ( )

If `true` uses the defined [`debug_path_custom_color`](class_navigationagent3d.md#class_navigationagent3d_property_debug_path_custom_color) for this agent instead of global color.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_navigationagent3d_property_height"></div>

[`float`](class_float.md) **height** = ``1.0`` <div id="class_navigationagent3d_property_height"></div>

- `void` **set_height** ( value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_height** ( )

The height of the avoidance agent. Agents will ignore other agents or obstacles that are above or below their current position + height in 2D avoidance. Does nothing in 3D avoidance which uses radius spheres alone.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_navigationagent3d_property_keep_y_velocity"></div>

[`bool`](class_bool.md) **keep_y_velocity** = ``true`` <div id="class_navigationagent3d_property_keep_y_velocity"></div>

- `void` **set_keep_y_velocity** ( value: [`bool`](class_bool.md) )
- [`bool`](class_bool.md) **get_keep_y_velocity** ( )

If `true`, and the agent uses 2D avoidance, it will remember the set y-axis velocity and reapply it after the avoidance step. While 2D avoidance has no y-axis and simulates on a flat plane this setting can help to soften the most obvious clipping on uneven 3D geometry.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_navigationagent3d_property_max_neighbors"></div>

[`int`](class_int.md) **max_neighbors** = ``10`` <div id="class_navigationagent3d_property_max_neighbors"></div>

- `void` **set_max_neighbors** ( value: [`int`](class_int.md) )
- [`int`](class_int.md) **get_max_neighbors** ( )

The maximum number of neighbors for the agent to consider.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_navigationagent3d_property_max_speed"></div>

[`float`](class_float.md) **max_speed** = ``10.0`` <div id="class_navigationagent3d_property_max_speed"></div>

- `void` **set_max_speed** ( value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_max_speed** ( )

The maximum speed that an agent can move.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_navigationagent3d_property_navigation_layers"></div>

[`int`](class_int.md) **navigation_layers** = ``1`` <div id="class_navigationagent3d_property_navigation_layers"></div>

- `void` **set_navigation_layers** ( value: [`int`](class_int.md) )
- [`int`](class_int.md) **get_navigation_layers** ( )

A bitfield determining which navigation layers of navigation regions this agent will use to calculate a path. Changing it during runtime will clear the current navigation path and generate a new one, according to the new navigation layers.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_navigationagent3d_property_neighbor_distance"></div>

[`float`](class_float.md) **neighbor_distance** = ``50.0`` <div id="class_navigationagent3d_property_neighbor_distance"></div>

- `void` **set_neighbor_distance** ( value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_neighbor_distance** ( )

The distance to search for other agents.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_navigationagent3d_property_path_desired_distance"></div>

[`float`](class_float.md) **path_desired_distance** = ``1.0`` <div id="class_navigationagent3d_property_path_desired_distance"></div>

- `void` **set_path_desired_distance** ( value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_path_desired_distance** ( )

The distance threshold before a path point is considered to be reached. This allows agents to not have to hit a path point on the path exactly, but only to reach its general area. If this value is set too high, the NavigationAgent will skip points on the path, which can lead to it leaving the navigation mesh. If this value is set too low, the NavigationAgent will be stuck in a repath loop because it will constantly overshoot the distance to the next point on each physics frame update.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_navigationagent3d_property_path_height_offset"></div>

[`float`](class_float.md) **path_height_offset** = ``0.0`` <div id="class_navigationagent3d_property_path_height_offset"></div>

- `void` **set_path_height_offset** ( value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_path_height_offset** ( )

The height offset is subtracted from the y-axis value of any vector path position for this NavigationAgent. The NavigationAgent height offset does not change or influence the navigation mesh or pathfinding query result. Additional navigation maps that use regions with navigation meshes that the developer baked with appropriate agent radius or height values are required to support different-sized agents.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_navigationagent3d_property_path_max_distance"></div>

[`float`](class_float.md) **path_max_distance** = ``5.0`` <div id="class_navigationagent3d_property_path_max_distance"></div>

- `void` **set_path_max_distance** ( value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_path_max_distance** ( )

The maximum distance the agent is allowed away from the ideal path to the final position. This can happen due to trying to avoid collisions. When the maximum distance is exceeded, it recalculates the ideal path.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_navigationagent3d_property_path_metadata_flags"></div>

[PathMetadataFlags](#enum_navigationpathqueryparameters3d_pathmetadataflags) **path_metadata_flags** = ``7`` <div id="class_navigationagent3d_property_path_metadata_flags"></div>

- `void` **set_path_metadata_flags** ( value: [PathMetadataFlags](#enum_navigationpathqueryparameters3d_pathmetadataflags) )
- [PathMetadataFlags](#enum_navigationpathqueryparameters3d_pathmetadataflags) **get_path_metadata_flags** ( )

Additional information to return with the navigation path.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_navigationagent3d_property_path_postprocessing"></div>

[PathPostProcessing](#enum_navigationpathqueryparameters3d_pathpostprocessing) **path_postprocessing** = ``0`` <div id="class_navigationagent3d_property_path_postprocessing"></div>

- `void` **set_path_postprocessing** ( value: [PathPostProcessing](#enum_navigationpathqueryparameters3d_pathpostprocessing) )
- [PathPostProcessing](#enum_navigationpathqueryparameters3d_pathpostprocessing) **get_path_postprocessing** ( )

The path postprocessing applied to the raw path corridor found by the [`pathfinding_algorithm`](class_navigationagent3d.md#class_navigationagent3d_property_pathfinding_algorithm).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_navigationagent3d_property_pathfinding_algorithm"></div>

[PathfindingAlgorithm](#enum_navigationpathqueryparameters3d_pathfindingalgorithm) **pathfinding_algorithm** = ``0`` <div id="class_navigationagent3d_property_pathfinding_algorithm"></div>

- `void` **set_pathfinding_algorithm** ( value: [PathfindingAlgorithm](#enum_navigationpathqueryparameters3d_pathfindingalgorithm) )
- [PathfindingAlgorithm](#enum_navigationpathqueryparameters3d_pathfindingalgorithm) **get_pathfinding_algorithm** ( )

The pathfinding algorithm used in the path query.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_navigationagent3d_property_radius"></div>

[`float`](class_float.md) **radius** = ``0.5`` <div id="class_navigationagent3d_property_radius"></div>

- `void` **set_radius** ( value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_radius** ( )

The radius of the avoidance agent. This is the "body" of the avoidance agent and not the avoidance maneuver starting radius (which is controlled by [`neighbor_distance`](class_navigationagent3d.md#class_navigationagent3d_property_neighbor_distance)).

Does not affect normal pathfinding. To change an actor's pathfinding radius bake [`NavigationMesh`](class_navigationmesh.md) resources with a different [`NavigationMesh.agent_radius`](class_navigationmesh.md#class_navigationmesh_property_agent_radius) property and use different navigation maps for each actor size.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_navigationagent3d_property_simplify_epsilon"></div>

[`float`](class_float.md) **simplify_epsilon** = ``0.0`` <div id="class_navigationagent3d_property_simplify_epsilon"></div>

- `void` **set_simplify_epsilon** ( value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_simplify_epsilon** ( )

The path simplification amount in worlds units.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_navigationagent3d_property_simplify_path"></div>

[`bool`](class_bool.md) **simplify_path** = ``false`` <div id="class_navigationagent3d_property_simplify_path"></div>

- `void` **set_simplify_path** ( value: [`bool`](class_bool.md) )
- [`bool`](class_bool.md) **get_simplify_path** ( )

If `true` a simplified version of the path will be returned with less critical path points removed. The simplification amount is controlled by [`simplify_epsilon`](class_navigationagent3d.md#class_navigationagent3d_property_simplify_epsilon). The simplification uses a variant of Ramer-Douglas-Peucker algorithm for curve point decimation.

Path simplification can be helpful to mitigate various path following issues that can arise with certain agent types and script behaviors. E.g. "steering" agents or avoidance in "open fields".

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_navigationagent3d_property_target_desired_distance"></div>

[`float`](class_float.md) **target_desired_distance** = ``1.0`` <div id="class_navigationagent3d_property_target_desired_distance"></div>

- `void` **set_target_desired_distance** ( value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_target_desired_distance** ( )

The distance threshold before the target is considered to be reached. On reaching the target, [`target_reached`](class_navigationagent3d.md#class_navigationagent3d_signal_target_reached) is emitted and navigation ends (see [`is_navigation_finished`](class_navigationagent3d.md#class_navigationagent3d_method_is_navigation_finished) and [`navigation_finished`](class_navigationagent3d.md#class_navigationagent3d_signal_navigation_finished)).

You can make navigation end early by setting this property to a value greater than [`path_desired_distance`](class_navigationagent3d.md#class_navigationagent3d_property_path_desired_distance) (navigation will end before reaching the last waypoint).

You can also make navigation end closer to the target than each individual path position by setting this property to a value lower than [`path_desired_distance`](class_navigationagent3d.md#class_navigationagent3d_property_path_desired_distance) (navigation won't immediately end when reaching the last waypoint). However, if the value set is too low, the agent will be stuck in a repath loop because it will constantly overshoot the distance to the target on each physics frame update.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_navigationagent3d_property_target_position"></div>

[`Vector3`](class_vector3.md) **target_position** = ``Vector3(0, 0, 0)`` <div id="class_navigationagent3d_property_target_position"></div>

- `void` **set_target_position** ( value: [`Vector3`](class_vector3.md) )
- [`Vector3`](class_vector3.md) **get_target_position** ( )

If set, a new navigation path from the current agent position to the [`target_position`](class_navigationagent3d.md#class_navigationagent3d_property_target_position) is requested from the NavigationServer.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_navigationagent3d_property_time_horizon_agents"></div>

[`float`](class_float.md) **time_horizon_agents** = ``1.0`` <div id="class_navigationagent3d_property_time_horizon_agents"></div>

- `void` **set_time_horizon_agents** ( value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_time_horizon_agents** ( )

The minimal amount of time for which this agent's velocities, that are computed with the collision avoidance algorithm, are safe with respect to other agents. The larger the number, the sooner the agent will respond to other agents, but less freedom in choosing its velocities. A too high value will slow down agents movement considerably. Must be positive.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_navigationagent3d_property_time_horizon_obstacles"></div>

[`float`](class_float.md) **time_horizon_obstacles** = ``0.0`` <div id="class_navigationagent3d_property_time_horizon_obstacles"></div>

- `void` **set_time_horizon_obstacles** ( value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_time_horizon_obstacles** ( )

The minimal amount of time for which this agent's velocities, that are computed with the collision avoidance algorithm, are safe with respect to static avoidance obstacles. The larger the number, the sooner the agent will respond to static avoidance obstacles, but less freedom in choosing its velocities. A too high value will slow down agents movement considerably. Must be positive.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_navigationagent3d_property_use_3d_avoidance"></div>

[`bool`](class_bool.md) **use_3d_avoidance** = ``false`` <div id="class_navigationagent3d_property_use_3d_avoidance"></div>

- `void` **set_use_3d_avoidance** ( value: [`bool`](class_bool.md) )
- [`bool`](class_bool.md) **get_use_3d_avoidance** ( )

If `true`, the agent calculates avoidance velocities in 3D omnidirectionally, e.g. for games that take place in air, underwater or space. Agents using 3D avoidance only avoid other agents using 3D avoidance, and react to radius-based avoidance obstacles. They ignore any vertex-based obstacles.

If `false`, the agent calculates avoidance velocities in 2D along the x and z-axes, ignoring the y-axis. Agents using 2D avoidance only avoid other agents using 2D avoidance, and react to radius-based avoidance obstacles or vertex-based avoidance obstacles. Other agents using 2D avoidance that are below or above their current position including [`height`](class_navigationagent3d.md#class_navigationagent3d_property_height) are ignored.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_navigationagent3d_property_velocity"></div>

[`Vector3`](class_vector3.md) **velocity** = ``Vector3(0, 0, 0)`` <div id="class_navigationagent3d_property_velocity"></div>

- `void` **set_velocity** ( value: [`Vector3`](class_vector3.md) )
- [`Vector3`](class_vector3.md) **get_velocity** ( )

Sets the new wanted velocity for the agent. The avoidance simulation will try to fulfill this velocity if possible but will modify it to avoid collision with other agents and obstacles. When an agent is teleported to a new position, use [`set_velocity_forced`](class_navigationagent3d.md#class_navigationagent3d_method_set_velocity_forced) as well to reset the internal simulation velocity.

<!-- rst-class:: classref-section-separator -->

---

## 方法说明

<div id="_class_navigationagent3d_method_distance_to_target"></div>

[`float`](class_float.md) **distance_to_target** ( ) const[^const]<div id="class_navigationagent3d_method_distance_to_target"></div>

Returns the distance to the target position, using the agent's global position. The user must set [`target_position`](class_navigationagent3d.md#class_navigationagent3d_property_target_position) in order for this to be accurate.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_navigationagent3d_method_get_avoidance_layer_value"></div>

[`bool`](class_bool.md) **get_avoidance_layer_value** ( layer_number: [`int`](class_int.md) ) const[^const]<div id="class_navigationagent3d_method_get_avoidance_layer_value"></div>

Returns whether or not the specified layer of the [`avoidance_layers`](class_navigationagent3d.md#class_navigationagent3d_property_avoidance_layers) bitmask is enabled, given a `layer_number` between 1 and 32.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_navigationagent3d_method_get_avoidance_mask_value"></div>

[`bool`](class_bool.md) **get_avoidance_mask_value** ( mask_number: [`int`](class_int.md) ) const[^const]<div id="class_navigationagent3d_method_get_avoidance_mask_value"></div>

Returns whether or not the specified mask of the [`avoidance_mask`](class_navigationagent3d.md#class_navigationagent3d_property_avoidance_mask) bitmask is enabled, given a `mask_number` between 1 and 32.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_navigationagent3d_method_get_current_navigation_path"></div>

[`PackedVector3Array`](class_packedvector3array.md) **get_current_navigation_path** ( ) const[^const]<div id="class_navigationagent3d_method_get_current_navigation_path"></div>

Returns this agent's current path from start to finish in global coordinates. The path only updates when the target position is changed or the agent requires a repath. The path array is not intended to be used in direct path movement as the agent has its own internal path logic that would get corrupted by changing the path array manually. Use the intended [`get_next_path_position`](class_navigationagent3d.md#class_navigationagent3d_method_get_next_path_position) once every physics frame to receive the next path point for the agents movement as this function also updates the internal path logic.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_navigationagent3d_method_get_current_navigation_path_index"></div>

[`int`](class_int.md) **get_current_navigation_path_index** ( ) const[^const]<div id="class_navigationagent3d_method_get_current_navigation_path_index"></div>

Returns which index the agent is currently on in the navigation path's [`PackedVector3Array`](class_packedvector3array.md).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_navigationagent3d_method_get_current_navigation_result"></div>

[`NavigationPathQueryResult3D`](class_navigationpathqueryresult3d.md) **get_current_navigation_result** ( ) const[^const]<div id="class_navigationagent3d_method_get_current_navigation_result"></div>

Returns the path query result for the path the agent is currently following.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_navigationagent3d_method_get_final_position"></div>

[`Vector3`](class_vector3.md) **get_final_position** ( )<div id="class_navigationagent3d_method_get_final_position"></div>

Returns the reachable final position of the current navigation path in global coordinates. This position can change if the agent needs to update the navigation path which makes the agent emit the [`path_changed`](class_navigationagent3d.md#class_navigationagent3d_signal_path_changed) signal.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_navigationagent3d_method_get_navigation_layer_value"></div>

[`bool`](class_bool.md) **get_navigation_layer_value** ( layer_number: [`int`](class_int.md) ) const[^const]<div id="class_navigationagent3d_method_get_navigation_layer_value"></div>

Returns whether or not the specified layer of the [`navigation_layers`](class_navigationagent3d.md#class_navigationagent3d_property_navigation_layers) bitmask is enabled, given a `layer_number` between 1 and 32.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_navigationagent3d_method_get_navigation_map"></div>

[`RID`](class_rid.md) **get_navigation_map** ( ) const[^const]<div id="class_navigationagent3d_method_get_navigation_map"></div>

Returns the [`RID`](class_rid.md) of the navigation map for this NavigationAgent node. This function returns always the map set on the NavigationAgent node and not the map of the abstract agent on the NavigationServer. If the agent map is changed directly with the NavigationServer API the NavigationAgent node will not be aware of the map change. Use [`set_navigation_map`](class_navigationagent3d.md#class_navigationagent3d_method_set_navigation_map) to change the navigation map for the NavigationAgent and also update the agent on the NavigationServer.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_navigationagent3d_method_get_next_path_position"></div>

[`Vector3`](class_vector3.md) **get_next_path_position** ( )<div id="class_navigationagent3d_method_get_next_path_position"></div>

Returns the next position in global coordinates that can be moved to, making sure that there are no static objects in the way. If the agent does not have a navigation path, it will return the position of the agent's parent. The use of this function once every physics frame is required to update the internal path logic of the NavigationAgent.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_navigationagent3d_method_get_rid"></div>

[`RID`](class_rid.md) **get_rid** ( ) const[^const]<div id="class_navigationagent3d_method_get_rid"></div>

Returns the [`RID`](class_rid.md) of this agent on the [`NavigationServer3D`](class_navigationserver3d.md).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_navigationagent3d_method_is_navigation_finished"></div>

[`bool`](class_bool.md) **is_navigation_finished** ( )<div id="class_navigationagent3d_method_is_navigation_finished"></div>

Returns `true` if the agent's navigation has finished. If the target is reachable, navigation ends when the target is reached. If the target is unreachable, navigation ends when the last waypoint of the path is reached.

 **Note:** While `true` prefer to stop calling update functions like [`get_next_path_position`](class_navigationagent3d.md#class_navigationagent3d_method_get_next_path_position). This avoids jittering the standing agent due to calling repeated path updates.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_navigationagent3d_method_is_target_reachable"></div>

[`bool`](class_bool.md) **is_target_reachable** ( )<div id="class_navigationagent3d_method_is_target_reachable"></div>

Returns `true` if [`get_final_position`](class_navigationagent3d.md#class_navigationagent3d_method_get_final_position) is within [`target_desired_distance`](class_navigationagent3d.md#class_navigationagent3d_property_target_desired_distance) of the [`target_position`](class_navigationagent3d.md#class_navigationagent3d_property_target_position).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_navigationagent3d_method_is_target_reached"></div>

[`bool`](class_bool.md) **is_target_reached** ( ) const[^const]<div id="class_navigationagent3d_method_is_target_reached"></div>

Returns `true` if the agent reached the target, i.e. the agent moved within [`target_desired_distance`](class_navigationagent3d.md#class_navigationagent3d_property_target_desired_distance) of the [`target_position`](class_navigationagent3d.md#class_navigationagent3d_property_target_position). It may not always be possible to reach the target but it should always be possible to reach the final position. See [`get_final_position`](class_navigationagent3d.md#class_navigationagent3d_method_get_final_position).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_navigationagent3d_method_set_avoidance_layer_value"></div>

`void` **set_avoidance_layer_value** ( layer_number: [`int`](class_int.md), value: [`bool`](class_bool.md) )<div id="class_navigationagent3d_method_set_avoidance_layer_value"></div>

Based on `value`, enables or disables the specified layer in the [`avoidance_layers`](class_navigationagent3d.md#class_navigationagent3d_property_avoidance_layers) bitmask, given a `layer_number` between 1 and 32.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_navigationagent3d_method_set_avoidance_mask_value"></div>

`void` **set_avoidance_mask_value** ( mask_number: [`int`](class_int.md), value: [`bool`](class_bool.md) )<div id="class_navigationagent3d_method_set_avoidance_mask_value"></div>

Based on `value`, enables or disables the specified mask in the [`avoidance_mask`](class_navigationagent3d.md#class_navigationagent3d_property_avoidance_mask) bitmask, given a `mask_number` between 1 and 32.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_navigationagent3d_method_set_navigation_layer_value"></div>

`void` **set_navigation_layer_value** ( layer_number: [`int`](class_int.md), value: [`bool`](class_bool.md) )<div id="class_navigationagent3d_method_set_navigation_layer_value"></div>

Based on `value`, enables or disables the specified layer in the [`navigation_layers`](class_navigationagent3d.md#class_navigationagent3d_property_navigation_layers) bitmask, given a `layer_number` between 1 and 32.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_navigationagent3d_method_set_navigation_map"></div>

`void` **set_navigation_map** ( navigation_map: [`RID`](class_rid.md) )<div id="class_navigationagent3d_method_set_navigation_map"></div>

Sets the [`RID`](class_rid.md) of the navigation map this NavigationAgent node should use and also updates the `agent` on the NavigationServer.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_navigationagent3d_method_set_velocity_forced"></div>

`void` **set_velocity_forced** ( velocity: [`Vector3`](class_vector3.md) )<div id="class_navigationagent3d_method_set_velocity_forced"></div>

Replaces the internal velocity in the collision avoidance simulation with `velocity`. When an agent is teleported to a new position this function should be used in the same frame. If called frequently this function can get agents stuck.

[^virtual]: 本方法通常需要用户覆盖才能生效。
[^const]: 本方法无副作用，不会修改该实例的任何成员变量。
[^vararg]: 本方法除了能接受在此处描述的参数外，还能够继续接受任意数量的参数。
[^constructor]: 本方法用于构造某个类型。
[^static]: 调用本方法无需实例，可直接使用类名进行调用。
[^operator]: 本方法描述的是使用本类型作为左操作数的有效运算符。
[^bitfield]: 这个值是由下列位标志构成位掩码的整数。
[^void]: 无返回值。
