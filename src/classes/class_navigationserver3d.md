<!-- ⚠ 请勿编辑本文件 ⚠ -->
<!-- 本文档使用脚本从 WeDot 引擎源码仓库生成。 -->
<!-- 生成脚本：https://github.com/WeDot-Engine/WeDot/tree/master/doc/tools/make_md.py； -->
<!-- 原文件：https://github.com/WeDot-Engine/WeDot/tree/master/doc/classes/NavigationServer3D.xml。 -->

<div id="_class_navigationserver3d"></div>

# NavigationServer3D

**实验性：** This class may be changed or removed in future versions.

**继承：** [`Object`](class_object.md)

A server interface for low-level 3D navigation access.

## 描述

NavigationServer3D is the server that handles navigation maps, regions and agents. It does not handle A\* navigation from [`AStar3D`](class_astar3d.md).

Maps are divided into regions, which are composed of navigation meshes. Together, they define the navigable areas in the 3D world.

 **Note:** Most **NavigationServer3D** changes take effect after the next physics frame and not immediately. This includes all changes made to maps, regions or agents by navigation-related nodes in the scene tree or made through scripts.

For two regions to be connected to each other, they must share a similar edge. An edge is considered connected to another if both of its two vertices are at a distance less than `edge_connection_margin` to the respective other edge's vertex.

You may assign navigation layers to regions with [`region_set_navigation_layers`](class_navigationserver3d.md#class_navigationserver3d_method_region_set_navigation_layers), which then can be checked upon when requesting a path with [`map_get_path`](class_navigationserver3d.md#class_navigationserver3d_method_map_get_path). This can be used to allow or deny certain areas for some objects.

To use the collision avoidance system, you may use agents. You can set an agent's target velocity, then the servers will emit a callback with a modified velocity.

 **Note:** The collision avoidance system ignores regions. Using the modified velocity directly may move an agent outside of the traversable area. This is a limitation of the collision avoidance system, any more complex situation may require the use of the physics engine.

This server keeps tracks of any call and executes them during the sync phase. This means that you can request any change to the map, using any thread, without worrying.

## 方法

|||
|:-:|:--|
| [`RID`](class_rid.md)                               | [`agent_create`](class_navigationserver3d.md#class_navigationserver3d_method_agent_create) ( )                                                                                                                                                                                                                                                                                                 |
| [`bool`](class_bool.md)                             | [`agent_get_avoidance_enabled`](class_navigationserver3d.md#class_navigationserver3d_method_agent_get_avoidance_enabled) ( agent: [`RID`](class_rid.md) ) const[^const]                                                                                                                                                                                                                        |
| [`int`](class_int.md)                               | [`agent_get_avoidance_layers`](class_navigationserver3d.md#class_navigationserver3d_method_agent_get_avoidance_layers) ( agent: [`RID`](class_rid.md) ) const[^const]                                                                                                                                                                                                                          |
| [`int`](class_int.md)                               | [`agent_get_avoidance_mask`](class_navigationserver3d.md#class_navigationserver3d_method_agent_get_avoidance_mask) ( agent: [`RID`](class_rid.md) ) const[^const]                                                                                                                                                                                                                              |
| [`float`](class_float.md)                           | [`agent_get_avoidance_priority`](class_navigationserver3d.md#class_navigationserver3d_method_agent_get_avoidance_priority) ( agent: [`RID`](class_rid.md) ) const[^const]                                                                                                                                                                                                                      |
| [`float`](class_float.md)                           | [`agent_get_height`](class_navigationserver3d.md#class_navigationserver3d_method_agent_get_height) ( agent: [`RID`](class_rid.md) ) const[^const]                                                                                                                                                                                                                                              |
| [`RID`](class_rid.md)                               | [`agent_get_map`](class_navigationserver3d.md#class_navigationserver3d_method_agent_get_map) ( agent: [`RID`](class_rid.md) ) const[^const]                                                                                                                                                                                                                                                    |
| [`int`](class_int.md)                               | [`agent_get_max_neighbors`](class_navigationserver3d.md#class_navigationserver3d_method_agent_get_max_neighbors) ( agent: [`RID`](class_rid.md) ) const[^const]                                                                                                                                                                                                                                |
| [`float`](class_float.md)                           | [`agent_get_max_speed`](class_navigationserver3d.md#class_navigationserver3d_method_agent_get_max_speed) ( agent: [`RID`](class_rid.md) ) const[^const]                                                                                                                                                                                                                                        |
| [`float`](class_float.md)                           | [`agent_get_neighbor_distance`](class_navigationserver3d.md#class_navigationserver3d_method_agent_get_neighbor_distance) ( agent: [`RID`](class_rid.md) ) const[^const]                                                                                                                                                                                                                        |
| [`bool`](class_bool.md)                             | [`agent_get_paused`](class_navigationserver3d.md#class_navigationserver3d_method_agent_get_paused) ( agent: [`RID`](class_rid.md) ) const[^const]                                                                                                                                                                                                                                              |
| [`Vector3`](class_vector3.md)                       | [`agent_get_position`](class_navigationserver3d.md#class_navigationserver3d_method_agent_get_position) ( agent: [`RID`](class_rid.md) ) const[^const]                                                                                                                                                                                                                                          |
| [`float`](class_float.md)                           | [`agent_get_radius`](class_navigationserver3d.md#class_navigationserver3d_method_agent_get_radius) ( agent: [`RID`](class_rid.md) ) const[^const]                                                                                                                                                                                                                                              |
| [`float`](class_float.md)                           | [`agent_get_time_horizon_agents`](class_navigationserver3d.md#class_navigationserver3d_method_agent_get_time_horizon_agents) ( agent: [`RID`](class_rid.md) ) const[^const]                                                                                                                                                                                                                    |
| [`float`](class_float.md)                           | [`agent_get_time_horizon_obstacles`](class_navigationserver3d.md#class_navigationserver3d_method_agent_get_time_horizon_obstacles) ( agent: [`RID`](class_rid.md) ) const[^const]                                                                                                                                                                                                              |
| [`bool`](class_bool.md)                             | [`agent_get_use_3d_avoidance`](class_navigationserver3d.md#class_navigationserver3d_method_agent_get_use_3d_avoidance) ( agent: [`RID`](class_rid.md) ) const[^const]                                                                                                                                                                                                                          |
| [`Vector3`](class_vector3.md)                       | [`agent_get_velocity`](class_navigationserver3d.md#class_navigationserver3d_method_agent_get_velocity) ( agent: [`RID`](class_rid.md) ) const[^const]                                                                                                                                                                                                                                          |
| [`bool`](class_bool.md)                             | [`agent_has_avoidance_callback`](class_navigationserver3d.md#class_navigationserver3d_method_agent_has_avoidance_callback) ( agent: [`RID`](class_rid.md) ) const[^const]                                                                                                                                                                                                                      |
| [`bool`](class_bool.md)                             | [`agent_is_map_changed`](class_navigationserver3d.md#class_navigationserver3d_method_agent_is_map_changed) ( agent: [`RID`](class_rid.md) ) const[^const]                                                                                                                                                                                                                                      |
| `void`                                              | [`agent_set_avoidance_callback`](class_navigationserver3d.md#class_navigationserver3d_method_agent_set_avoidance_callback) ( agent: [`RID`](class_rid.md), callback: [`Callable`](class_callable.md) )                                                                                                                                                                                         |
| `void`                                              | [`agent_set_avoidance_enabled`](class_navigationserver3d.md#class_navigationserver3d_method_agent_set_avoidance_enabled) ( agent: [`RID`](class_rid.md), enabled: [`bool`](class_bool.md) )                                                                                                                                                                                                    |
| `void`                                              | [`agent_set_avoidance_layers`](class_navigationserver3d.md#class_navigationserver3d_method_agent_set_avoidance_layers) ( agent: [`RID`](class_rid.md), layers: [`int`](class_int.md) )                                                                                                                                                                                                         |
| `void`                                              | [`agent_set_avoidance_mask`](class_navigationserver3d.md#class_navigationserver3d_method_agent_set_avoidance_mask) ( agent: [`RID`](class_rid.md), mask: [`int`](class_int.md) )                                                                                                                                                                                                               |
| `void`                                              | [`agent_set_avoidance_priority`](class_navigationserver3d.md#class_navigationserver3d_method_agent_set_avoidance_priority) ( agent: [`RID`](class_rid.md), priority: [`float`](class_float.md) )                                                                                                                                                                                               |
| `void`                                              | [`agent_set_height`](class_navigationserver3d.md#class_navigationserver3d_method_agent_set_height) ( agent: [`RID`](class_rid.md), height: [`float`](class_float.md) )                                                                                                                                                                                                                         |
| `void`                                              | [`agent_set_map`](class_navigationserver3d.md#class_navigationserver3d_method_agent_set_map) ( agent: [`RID`](class_rid.md), map: [`RID`](class_rid.md) )                                                                                                                                                                                                                                      |
| `void`                                              | [`agent_set_max_neighbors`](class_navigationserver3d.md#class_navigationserver3d_method_agent_set_max_neighbors) ( agent: [`RID`](class_rid.md), count: [`int`](class_int.md) )                                                                                                                                                                                                                |
| `void`                                              | [`agent_set_max_speed`](class_navigationserver3d.md#class_navigationserver3d_method_agent_set_max_speed) ( agent: [`RID`](class_rid.md), max_speed: [`float`](class_float.md) )                                                                                                                                                                                                                |
| `void`                                              | [`agent_set_neighbor_distance`](class_navigationserver3d.md#class_navigationserver3d_method_agent_set_neighbor_distance) ( agent: [`RID`](class_rid.md), distance: [`float`](class_float.md) )                                                                                                                                                                                                 |
| `void`                                              | [`agent_set_paused`](class_navigationserver3d.md#class_navigationserver3d_method_agent_set_paused) ( agent: [`RID`](class_rid.md), paused: [`bool`](class_bool.md) )                                                                                                                                                                                                                           |
| `void`                                              | [`agent_set_position`](class_navigationserver3d.md#class_navigationserver3d_method_agent_set_position) ( agent: [`RID`](class_rid.md), position: [`Vector3`](class_vector3.md) )                                                                                                                                                                                                               |
| `void`                                              | [`agent_set_radius`](class_navigationserver3d.md#class_navigationserver3d_method_agent_set_radius) ( agent: [`RID`](class_rid.md), radius: [`float`](class_float.md) )                                                                                                                                                                                                                         |
| `void`                                              | [`agent_set_time_horizon_agents`](class_navigationserver3d.md#class_navigationserver3d_method_agent_set_time_horizon_agents) ( agent: [`RID`](class_rid.md), time_horizon: [`float`](class_float.md) )                                                                                                                                                                                         |
| `void`                                              | [`agent_set_time_horizon_obstacles`](class_navigationserver3d.md#class_navigationserver3d_method_agent_set_time_horizon_obstacles) ( agent: [`RID`](class_rid.md), time_horizon: [`float`](class_float.md) )                                                                                                                                                                                   |
| `void`                                              | [`agent_set_use_3d_avoidance`](class_navigationserver3d.md#class_navigationserver3d_method_agent_set_use_3d_avoidance) ( agent: [`RID`](class_rid.md), enabled: [`bool`](class_bool.md) )                                                                                                                                                                                                      |
| `void`                                              | [`agent_set_velocity`](class_navigationserver3d.md#class_navigationserver3d_method_agent_set_velocity) ( agent: [`RID`](class_rid.md), velocity: [`Vector3`](class_vector3.md) )                                                                                                                                                                                                               |
| `void`                                              | [`agent_set_velocity_forced`](class_navigationserver3d.md#class_navigationserver3d_method_agent_set_velocity_forced) ( agent: [`RID`](class_rid.md), velocity: [`Vector3`](class_vector3.md) )                                                                                                                                                                                                 |
| `void`                                              | [`bake_from_source_geometry_data`](class_navigationserver3d.md#class_navigationserver3d_method_bake_from_source_geometry_data) ( navigation_mesh: [`NavigationMesh`](class_navigationmesh.md), source_geometry_data: [`NavigationMeshSourceGeometryData3D`](class_navigationmeshsourcegeometrydata3d.md), callback: [`Callable`](class_callable.md) = Callable() )                             |
| `void`                                              | [`bake_from_source_geometry_data_async`](class_navigationserver3d.md#class_navigationserver3d_method_bake_from_source_geometry_data_async) ( navigation_mesh: [`NavigationMesh`](class_navigationmesh.md), source_geometry_data: [`NavigationMeshSourceGeometryData3D`](class_navigationmeshsourcegeometrydata3d.md), callback: [`Callable`](class_callable.md) = Callable() )                 |
| `void`                                              | [`free_rid`](class_navigationserver3d.md#class_navigationserver3d_method_free_rid) ( rid: [`RID`](class_rid.md) )                                                                                                                                                                                                                                                                              |
| [`bool`](class_bool.md)                             | [`get_debug_enabled`](class_navigationserver3d.md#class_navigationserver3d_method_get_debug_enabled) ( ) const[^const]                                                                                                                                                                                                                                                                         |
| [Array](class_array.md) [`RID`](class_rid.md)       | [`get_maps`](class_navigationserver3d.md#class_navigationserver3d_method_get_maps) ( ) const[^const]                                                                                                                                                                                                                                                                                           |
| [`int`](class_int.md)                               | [`get_process_info`](class_navigationserver3d.md#class_navigationserver3d_method_get_process_info) ( process_info: [ProcessInfo](#enum_navigationserver3d_processinfo) ) const[^const]                                                                                                                                                                                                         |
| [`bool`](class_bool.md)                             | [`is_baking_navigation_mesh`](class_navigationserver3d.md#class_navigationserver3d_method_is_baking_navigation_mesh) ( navigation_mesh: [`NavigationMesh`](class_navigationmesh.md) ) const[^const]                                                                                                                                                                                            |
| [`RID`](class_rid.md)                               | [`link_create`](class_navigationserver3d.md#class_navigationserver3d_method_link_create) ( )                                                                                                                                                                                                                                                                                                   |
| [`bool`](class_bool.md)                             | [`link_get_enabled`](class_navigationserver3d.md#class_navigationserver3d_method_link_get_enabled) ( link: [`RID`](class_rid.md) ) const[^const]                                                                                                                                                                                                                                               |
| [`Vector3`](class_vector3.md)                       | [`link_get_end_position`](class_navigationserver3d.md#class_navigationserver3d_method_link_get_end_position) ( link: [`RID`](class_rid.md) ) const[^const]                                                                                                                                                                                                                                     |
| [`float`](class_float.md)                           | [`link_get_enter_cost`](class_navigationserver3d.md#class_navigationserver3d_method_link_get_enter_cost) ( link: [`RID`](class_rid.md) ) const[^const]                                                                                                                                                                                                                                         |
| [`RID`](class_rid.md)                               | [`link_get_map`](class_navigationserver3d.md#class_navigationserver3d_method_link_get_map) ( link: [`RID`](class_rid.md) ) const[^const]                                                                                                                                                                                                                                                       |
| [`int`](class_int.md)                               | [`link_get_navigation_layers`](class_navigationserver3d.md#class_navigationserver3d_method_link_get_navigation_layers) ( link: [`RID`](class_rid.md) ) const[^const]                                                                                                                                                                                                                           |
| [`int`](class_int.md)                               | [`link_get_owner_id`](class_navigationserver3d.md#class_navigationserver3d_method_link_get_owner_id) ( link: [`RID`](class_rid.md) ) const[^const]                                                                                                                                                                                                                                             |
| [`Vector3`](class_vector3.md)                       | [`link_get_start_position`](class_navigationserver3d.md#class_navigationserver3d_method_link_get_start_position) ( link: [`RID`](class_rid.md) ) const[^const]                                                                                                                                                                                                                                 |
| [`float`](class_float.md)                           | [`link_get_travel_cost`](class_navigationserver3d.md#class_navigationserver3d_method_link_get_travel_cost) ( link: [`RID`](class_rid.md) ) const[^const]                                                                                                                                                                                                                                       |
| [`bool`](class_bool.md)                             | [`link_is_bidirectional`](class_navigationserver3d.md#class_navigationserver3d_method_link_is_bidirectional) ( link: [`RID`](class_rid.md) ) const[^const]                                                                                                                                                                                                                                     |
| `void`                                              | [`link_set_bidirectional`](class_navigationserver3d.md#class_navigationserver3d_method_link_set_bidirectional) ( link: [`RID`](class_rid.md), bidirectional: [`bool`](class_bool.md) )                                                                                                                                                                                                         |
| `void`                                              | [`link_set_enabled`](class_navigationserver3d.md#class_navigationserver3d_method_link_set_enabled) ( link: [`RID`](class_rid.md), enabled: [`bool`](class_bool.md) )                                                                                                                                                                                                                           |
| `void`                                              | [`link_set_end_position`](class_navigationserver3d.md#class_navigationserver3d_method_link_set_end_position) ( link: [`RID`](class_rid.md), position: [`Vector3`](class_vector3.md) )                                                                                                                                                                                                          |
| `void`                                              | [`link_set_enter_cost`](class_navigationserver3d.md#class_navigationserver3d_method_link_set_enter_cost) ( link: [`RID`](class_rid.md), enter_cost: [`float`](class_float.md) )                                                                                                                                                                                                                |
| `void`                                              | [`link_set_map`](class_navigationserver3d.md#class_navigationserver3d_method_link_set_map) ( link: [`RID`](class_rid.md), map: [`RID`](class_rid.md) )                                                                                                                                                                                                                                         |
| `void`                                              | [`link_set_navigation_layers`](class_navigationserver3d.md#class_navigationserver3d_method_link_set_navigation_layers) ( link: [`RID`](class_rid.md), navigation_layers: [`int`](class_int.md) )                                                                                                                                                                                               |
| `void`                                              | [`link_set_owner_id`](class_navigationserver3d.md#class_navigationserver3d_method_link_set_owner_id) ( link: [`RID`](class_rid.md), owner_id: [`int`](class_int.md) )                                                                                                                                                                                                                          |
| `void`                                              | [`link_set_start_position`](class_navigationserver3d.md#class_navigationserver3d_method_link_set_start_position) ( link: [`RID`](class_rid.md), position: [`Vector3`](class_vector3.md) )                                                                                                                                                                                                      |
| `void`                                              | [`link_set_travel_cost`](class_navigationserver3d.md#class_navigationserver3d_method_link_set_travel_cost) ( link: [`RID`](class_rid.md), travel_cost: [`float`](class_float.md) )                                                                                                                                                                                                             |
| [`RID`](class_rid.md)                               | [`map_create`](class_navigationserver3d.md#class_navigationserver3d_method_map_create) ( )                                                                                                                                                                                                                                                                                                     |
| `void`                                              | [`map_force_update`](class_navigationserver3d.md#class_navigationserver3d_method_map_force_update) ( map: [`RID`](class_rid.md) )                                                                                                                                                                                                                                                              |
| [Array](class_array.md) [`RID`](class_rid.md)       | [`map_get_agents`](class_navigationserver3d.md#class_navigationserver3d_method_map_get_agents) ( map: [`RID`](class_rid.md) ) const[^const]                                                                                                                                                                                                                                                    |
| [`float`](class_float.md)                           | [`map_get_cell_height`](class_navigationserver3d.md#class_navigationserver3d_method_map_get_cell_height) ( map: [`RID`](class_rid.md) ) const[^const]                                                                                                                                                                                                                                          |
| [`float`](class_float.md)                           | [`map_get_cell_size`](class_navigationserver3d.md#class_navigationserver3d_method_map_get_cell_size) ( map: [`RID`](class_rid.md) ) const[^const]                                                                                                                                                                                                                                              |
| [`Vector3`](class_vector3.md)                       | [`map_get_closest_point`](class_navigationserver3d.md#class_navigationserver3d_method_map_get_closest_point) ( map: [`RID`](class_rid.md), to_point: [`Vector3`](class_vector3.md) ) const[^const]                                                                                                                                                                                             |
| [`Vector3`](class_vector3.md)                       | [`map_get_closest_point_normal`](class_navigationserver3d.md#class_navigationserver3d_method_map_get_closest_point_normal) ( map: [`RID`](class_rid.md), to_point: [`Vector3`](class_vector3.md) ) const[^const]                                                                                                                                                                               |
| [`RID`](class_rid.md)                               | [`map_get_closest_point_owner`](class_navigationserver3d.md#class_navigationserver3d_method_map_get_closest_point_owner) ( map: [`RID`](class_rid.md), to_point: [`Vector3`](class_vector3.md) ) const[^const]                                                                                                                                                                                 |
| [`Vector3`](class_vector3.md)                       | [`map_get_closest_point_to_segment`](class_navigationserver3d.md#class_navigationserver3d_method_map_get_closest_point_to_segment) ( map: [`RID`](class_rid.md), start: [`Vector3`](class_vector3.md), end: [`Vector3`](class_vector3.md), use_collision: [`bool`](class_bool.md) = false ) const[^const]                                                                                      |
| [`float`](class_float.md)                           | [`map_get_edge_connection_margin`](class_navigationserver3d.md#class_navigationserver3d_method_map_get_edge_connection_margin) ( map: [`RID`](class_rid.md) ) const[^const]                                                                                                                                                                                                                    |
| [`int`](class_int.md)                               | [`map_get_iteration_id`](class_navigationserver3d.md#class_navigationserver3d_method_map_get_iteration_id) ( map: [`RID`](class_rid.md) ) const[^const]                                                                                                                                                                                                                                        |
| [`float`](class_float.md)                           | [`map_get_link_connection_radius`](class_navigationserver3d.md#class_navigationserver3d_method_map_get_link_connection_radius) ( map: [`RID`](class_rid.md) ) const[^const]                                                                                                                                                                                                                    |
| [Array](class_array.md) [`RID`](class_rid.md)       | [`map_get_links`](class_navigationserver3d.md#class_navigationserver3d_method_map_get_links) ( map: [`RID`](class_rid.md) ) const[^const]                                                                                                                                                                                                                                                      |
| [`float`](class_float.md)                           | [`map_get_merge_rasterizer_cell_scale`](class_navigationserver3d.md#class_navigationserver3d_method_map_get_merge_rasterizer_cell_scale) ( map: [`RID`](class_rid.md) ) const[^const]                                                                                                                                                                                                          |
| [Array](class_array.md) [`RID`](class_rid.md)       | [`map_get_obstacles`](class_navigationserver3d.md#class_navigationserver3d_method_map_get_obstacles) ( map: [`RID`](class_rid.md) ) const[^const]                                                                                                                                                                                                                                              |
| [`PackedVector3Array`](class_packedvector3array.md) | [`map_get_path`](class_navigationserver3d.md#class_navigationserver3d_method_map_get_path) ( map: [`RID`](class_rid.md), origin: [`Vector3`](class_vector3.md), destination: [`Vector3`](class_vector3.md), optimize: [`bool`](class_bool.md), navigation_layers: [`int`](class_int.md) = 1 ) const[^const]                                                                                    |
| [`Vector3`](class_vector3.md)                       | [`map_get_random_point`](class_navigationserver3d.md#class_navigationserver3d_method_map_get_random_point) ( map: [`RID`](class_rid.md), navigation_layers: [`int`](class_int.md), uniformly: [`bool`](class_bool.md) ) const[^const]                                                                                                                                                          |
| [Array](class_array.md) [`RID`](class_rid.md)       | [`map_get_regions`](class_navigationserver3d.md#class_navigationserver3d_method_map_get_regions) ( map: [`RID`](class_rid.md) ) const[^const]                                                                                                                                                                                                                                                  |
| [`Vector3`](class_vector3.md)                       | [`map_get_up`](class_navigationserver3d.md#class_navigationserver3d_method_map_get_up) ( map: [`RID`](class_rid.md) ) const[^const]                                                                                                                                                                                                                                                            |
| [`bool`](class_bool.md)                             | [`map_get_use_edge_connections`](class_navigationserver3d.md#class_navigationserver3d_method_map_get_use_edge_connections) ( map: [`RID`](class_rid.md) ) const[^const]                                                                                                                                                                                                                        |
| [`bool`](class_bool.md)                             | [`map_is_active`](class_navigationserver3d.md#class_navigationserver3d_method_map_is_active) ( map: [`RID`](class_rid.md) ) const[^const]                                                                                                                                                                                                                                                      |
| `void`                                              | [`map_set_active`](class_navigationserver3d.md#class_navigationserver3d_method_map_set_active) ( map: [`RID`](class_rid.md), active: [`bool`](class_bool.md) )                                                                                                                                                                                                                                 |
| `void`                                              | [`map_set_cell_height`](class_navigationserver3d.md#class_navigationserver3d_method_map_set_cell_height) ( map: [`RID`](class_rid.md), cell_height: [`float`](class_float.md) )                                                                                                                                                                                                                |
| `void`                                              | [`map_set_cell_size`](class_navigationserver3d.md#class_navigationserver3d_method_map_set_cell_size) ( map: [`RID`](class_rid.md), cell_size: [`float`](class_float.md) )                                                                                                                                                                                                                      |
| `void`                                              | [`map_set_edge_connection_margin`](class_navigationserver3d.md#class_navigationserver3d_method_map_set_edge_connection_margin) ( map: [`RID`](class_rid.md), margin: [`float`](class_float.md) )                                                                                                                                                                                               |
| `void`                                              | [`map_set_link_connection_radius`](class_navigationserver3d.md#class_navigationserver3d_method_map_set_link_connection_radius) ( map: [`RID`](class_rid.md), radius: [`float`](class_float.md) )                                                                                                                                                                                               |
| `void`                                              | [`map_set_merge_rasterizer_cell_scale`](class_navigationserver3d.md#class_navigationserver3d_method_map_set_merge_rasterizer_cell_scale) ( map: [`RID`](class_rid.md), scale: [`float`](class_float.md) )                                                                                                                                                                                      |
| `void`                                              | [`map_set_up`](class_navigationserver3d.md#class_navigationserver3d_method_map_set_up) ( map: [`RID`](class_rid.md), up: [`Vector3`](class_vector3.md) )                                                                                                                                                                                                                                       |
| `void`                                              | [`map_set_use_edge_connections`](class_navigationserver3d.md#class_navigationserver3d_method_map_set_use_edge_connections) ( map: [`RID`](class_rid.md), enabled: [`bool`](class_bool.md) )                                                                                                                                                                                                    |
| [`RID`](class_rid.md)                               | [`obstacle_create`](class_navigationserver3d.md#class_navigationserver3d_method_obstacle_create) ( )                                                                                                                                                                                                                                                                                           |
| [`bool`](class_bool.md)                             | [`obstacle_get_avoidance_enabled`](class_navigationserver3d.md#class_navigationserver3d_method_obstacle_get_avoidance_enabled) ( obstacle: [`RID`](class_rid.md) ) const[^const]                                                                                                                                                                                                               |
| [`int`](class_int.md)                               | [`obstacle_get_avoidance_layers`](class_navigationserver3d.md#class_navigationserver3d_method_obstacle_get_avoidance_layers) ( obstacle: [`RID`](class_rid.md) ) const[^const]                                                                                                                                                                                                                 |
| [`float`](class_float.md)                           | [`obstacle_get_height`](class_navigationserver3d.md#class_navigationserver3d_method_obstacle_get_height) ( obstacle: [`RID`](class_rid.md) ) const[^const]                                                                                                                                                                                                                                     |
| [`RID`](class_rid.md)                               | [`obstacle_get_map`](class_navigationserver3d.md#class_navigationserver3d_method_obstacle_get_map) ( obstacle: [`RID`](class_rid.md) ) const[^const]                                                                                                                                                                                                                                           |
| [`bool`](class_bool.md)                             | [`obstacle_get_paused`](class_navigationserver3d.md#class_navigationserver3d_method_obstacle_get_paused) ( obstacle: [`RID`](class_rid.md) ) const[^const]                                                                                                                                                                                                                                     |
| [`Vector3`](class_vector3.md)                       | [`obstacle_get_position`](class_navigationserver3d.md#class_navigationserver3d_method_obstacle_get_position) ( obstacle: [`RID`](class_rid.md) ) const[^const]                                                                                                                                                                                                                                 |
| [`float`](class_float.md)                           | [`obstacle_get_radius`](class_navigationserver3d.md#class_navigationserver3d_method_obstacle_get_radius) ( obstacle: [`RID`](class_rid.md) ) const[^const]                                                                                                                                                                                                                                     |
| [`bool`](class_bool.md)                             | [`obstacle_get_use_3d_avoidance`](class_navigationserver3d.md#class_navigationserver3d_method_obstacle_get_use_3d_avoidance) ( obstacle: [`RID`](class_rid.md) ) const[^const]                                                                                                                                                                                                                 |
| [`Vector3`](class_vector3.md)                       | [`obstacle_get_velocity`](class_navigationserver3d.md#class_navigationserver3d_method_obstacle_get_velocity) ( obstacle: [`RID`](class_rid.md) ) const[^const]                                                                                                                                                                                                                                 |
| [`PackedVector3Array`](class_packedvector3array.md) | [`obstacle_get_vertices`](class_navigationserver3d.md#class_navigationserver3d_method_obstacle_get_vertices) ( obstacle: [`RID`](class_rid.md) ) const[^const]                                                                                                                                                                                                                                 |
| `void`                                              | [`obstacle_set_avoidance_enabled`](class_navigationserver3d.md#class_navigationserver3d_method_obstacle_set_avoidance_enabled) ( obstacle: [`RID`](class_rid.md), enabled: [`bool`](class_bool.md) )                                                                                                                                                                                           |
| `void`                                              | [`obstacle_set_avoidance_layers`](class_navigationserver3d.md#class_navigationserver3d_method_obstacle_set_avoidance_layers) ( obstacle: [`RID`](class_rid.md), layers: [`int`](class_int.md) )                                                                                                                                                                                                |
| `void`                                              | [`obstacle_set_height`](class_navigationserver3d.md#class_navigationserver3d_method_obstacle_set_height) ( obstacle: [`RID`](class_rid.md), height: [`float`](class_float.md) )                                                                                                                                                                                                                |
| `void`                                              | [`obstacle_set_map`](class_navigationserver3d.md#class_navigationserver3d_method_obstacle_set_map) ( obstacle: [`RID`](class_rid.md), map: [`RID`](class_rid.md) )                                                                                                                                                                                                                             |
| `void`                                              | [`obstacle_set_paused`](class_navigationserver3d.md#class_navigationserver3d_method_obstacle_set_paused) ( obstacle: [`RID`](class_rid.md), paused: [`bool`](class_bool.md) )                                                                                                                                                                                                                  |
| `void`                                              | [`obstacle_set_position`](class_navigationserver3d.md#class_navigationserver3d_method_obstacle_set_position) ( obstacle: [`RID`](class_rid.md), position: [`Vector3`](class_vector3.md) )                                                                                                                                                                                                      |
| `void`                                              | [`obstacle_set_radius`](class_navigationserver3d.md#class_navigationserver3d_method_obstacle_set_radius) ( obstacle: [`RID`](class_rid.md), radius: [`float`](class_float.md) )                                                                                                                                                                                                                |
| `void`                                              | [`obstacle_set_use_3d_avoidance`](class_navigationserver3d.md#class_navigationserver3d_method_obstacle_set_use_3d_avoidance) ( obstacle: [`RID`](class_rid.md), enabled: [`bool`](class_bool.md) )                                                                                                                                                                                             |
| `void`                                              | [`obstacle_set_velocity`](class_navigationserver3d.md#class_navigationserver3d_method_obstacle_set_velocity) ( obstacle: [`RID`](class_rid.md), velocity: [`Vector3`](class_vector3.md) )                                                                                                                                                                                                      |
| `void`                                              | [`obstacle_set_vertices`](class_navigationserver3d.md#class_navigationserver3d_method_obstacle_set_vertices) ( obstacle: [`RID`](class_rid.md), vertices: [`PackedVector3Array`](class_packedvector3array.md) )                                                                                                                                                                                |
| `void`                                              | [`parse_source_geometry_data`](class_navigationserver3d.md#class_navigationserver3d_method_parse_source_geometry_data) ( navigation_mesh: [`NavigationMesh`](class_navigationmesh.md), source_geometry_data: [`NavigationMeshSourceGeometryData3D`](class_navigationmeshsourcegeometrydata3d.md), root_node: [`Node`](class_node.md), callback: [`Callable`](class_callable.md) = Callable() ) |
| `void`                                              | [`query_path`](class_navigationserver3d.md#class_navigationserver3d_method_query_path) ( parameters: [`NavigationPathQueryParameters3D`](class_navigationpathqueryparameters3d.md), result: [`NavigationPathQueryResult3D`](class_navigationpathqueryresult3d.md) ) const[^const]                                                                                                              |
| `void`                                              | [`region_bake_navigation_mesh`](class_navigationserver3d.md#class_navigationserver3d_method_region_bake_navigation_mesh) ( navigation_mesh: [`NavigationMesh`](class_navigationmesh.md), root_node: [`Node`](class_node.md) )                                                                                                                                                                  |
| [`RID`](class_rid.md)                               | [`region_create`](class_navigationserver3d.md#class_navigationserver3d_method_region_create) ( )                                                                                                                                                                                                                                                                                               |
| [`Vector3`](class_vector3.md)                       | [`region_get_closest_point`](class_navigationserver3d.md#class_navigationserver3d_method_region_get_closest_point) ( region: [`RID`](class_rid.md), to_point: [`Vector3`](class_vector3.md) ) const[^const]                                                                                                                                                                                    |
| [`Vector3`](class_vector3.md)                       | [`region_get_closest_point_normal`](class_navigationserver3d.md#class_navigationserver3d_method_region_get_closest_point_normal) ( region: [`RID`](class_rid.md), to_point: [`Vector3`](class_vector3.md) ) const[^const]                                                                                                                                                                      |
| [`Vector3`](class_vector3.md)                       | [`region_get_closest_point_to_segment`](class_navigationserver3d.md#class_navigationserver3d_method_region_get_closest_point_to_segment) ( region: [`RID`](class_rid.md), start: [`Vector3`](class_vector3.md), end: [`Vector3`](class_vector3.md), use_collision: [`bool`](class_bool.md) = false ) const[^const]                                                                             |
| [`Vector3`](class_vector3.md)                       | [`region_get_connection_pathway_end`](class_navigationserver3d.md#class_navigationserver3d_method_region_get_connection_pathway_end) ( region: [`RID`](class_rid.md), connection: [`int`](class_int.md) ) const[^const]                                                                                                                                                                        |
| [`Vector3`](class_vector3.md)                       | [`region_get_connection_pathway_start`](class_navigationserver3d.md#class_navigationserver3d_method_region_get_connection_pathway_start) ( region: [`RID`](class_rid.md), connection: [`int`](class_int.md) ) const[^const]                                                                                                                                                                    |
| [`int`](class_int.md)                               | [`region_get_connections_count`](class_navigationserver3d.md#class_navigationserver3d_method_region_get_connections_count) ( region: [`RID`](class_rid.md) ) const[^const]                                                                                                                                                                                                                     |
| [`bool`](class_bool.md)                             | [`region_get_enabled`](class_navigationserver3d.md#class_navigationserver3d_method_region_get_enabled) ( region: [`RID`](class_rid.md) ) const[^const]                                                                                                                                                                                                                                         |
| [`float`](class_float.md)                           | [`region_get_enter_cost`](class_navigationserver3d.md#class_navigationserver3d_method_region_get_enter_cost) ( region: [`RID`](class_rid.md) ) const[^const]                                                                                                                                                                                                                                   |
| [`RID`](class_rid.md)                               | [`region_get_map`](class_navigationserver3d.md#class_navigationserver3d_method_region_get_map) ( region: [`RID`](class_rid.md) ) const[^const]                                                                                                                                                                                                                                                 |
| [`int`](class_int.md)                               | [`region_get_navigation_layers`](class_navigationserver3d.md#class_navigationserver3d_method_region_get_navigation_layers) ( region: [`RID`](class_rid.md) ) const[^const]                                                                                                                                                                                                                     |
| [`int`](class_int.md)                               | [`region_get_owner_id`](class_navigationserver3d.md#class_navigationserver3d_method_region_get_owner_id) ( region: [`RID`](class_rid.md) ) const[^const]                                                                                                                                                                                                                                       |
| [`Vector3`](class_vector3.md)                       | [`region_get_random_point`](class_navigationserver3d.md#class_navigationserver3d_method_region_get_random_point) ( region: [`RID`](class_rid.md), navigation_layers: [`int`](class_int.md), uniformly: [`bool`](class_bool.md) ) const[^const]                                                                                                                                                 |
| [`Transform3D`](class_transform3d.md)               | [`region_get_transform`](class_navigationserver3d.md#class_navigationserver3d_method_region_get_transform) ( region: [`RID`](class_rid.md) ) const[^const]                                                                                                                                                                                                                                     |
| [`float`](class_float.md)                           | [`region_get_travel_cost`](class_navigationserver3d.md#class_navigationserver3d_method_region_get_travel_cost) ( region: [`RID`](class_rid.md) ) const[^const]                                                                                                                                                                                                                                 |
| [`bool`](class_bool.md)                             | [`region_get_use_edge_connections`](class_navigationserver3d.md#class_navigationserver3d_method_region_get_use_edge_connections) ( region: [`RID`](class_rid.md) ) const[^const]                                                                                                                                                                                                               |
| [`bool`](class_bool.md)                             | [`region_owns_point`](class_navigationserver3d.md#class_navigationserver3d_method_region_owns_point) ( region: [`RID`](class_rid.md), point: [`Vector3`](class_vector3.md) ) const[^const]                                                                                                                                                                                                     |
| `void`                                              | [`region_set_enabled`](class_navigationserver3d.md#class_navigationserver3d_method_region_set_enabled) ( region: [`RID`](class_rid.md), enabled: [`bool`](class_bool.md) )                                                                                                                                                                                                                     |
| `void`                                              | [`region_set_enter_cost`](class_navigationserver3d.md#class_navigationserver3d_method_region_set_enter_cost) ( region: [`RID`](class_rid.md), enter_cost: [`float`](class_float.md) )                                                                                                                                                                                                          |
| `void`                                              | [`region_set_map`](class_navigationserver3d.md#class_navigationserver3d_method_region_set_map) ( region: [`RID`](class_rid.md), map: [`RID`](class_rid.md) )                                                                                                                                                                                                                                   |
| `void`                                              | [`region_set_navigation_layers`](class_navigationserver3d.md#class_navigationserver3d_method_region_set_navigation_layers) ( region: [`RID`](class_rid.md), navigation_layers: [`int`](class_int.md) )                                                                                                                                                                                         |
| `void`                                              | [`region_set_navigation_mesh`](class_navigationserver3d.md#class_navigationserver3d_method_region_set_navigation_mesh) ( region: [`RID`](class_rid.md), navigation_mesh: [`NavigationMesh`](class_navigationmesh.md) )                                                                                                                                                                         |
| `void`                                              | [`region_set_owner_id`](class_navigationserver3d.md#class_navigationserver3d_method_region_set_owner_id) ( region: [`RID`](class_rid.md), owner_id: [`int`](class_int.md) )                                                                                                                                                                                                                    |
| `void`                                              | [`region_set_transform`](class_navigationserver3d.md#class_navigationserver3d_method_region_set_transform) ( region: [`RID`](class_rid.md), transform: [`Transform3D`](class_transform3d.md) )                                                                                                                                                                                                 |
| `void`                                              | [`region_set_travel_cost`](class_navigationserver3d.md#class_navigationserver3d_method_region_set_travel_cost) ( region: [`RID`](class_rid.md), travel_cost: [`float`](class_float.md) )                                                                                                                                                                                                       |
| `void`                                              | [`region_set_use_edge_connections`](class_navigationserver3d.md#class_navigationserver3d_method_region_set_use_edge_connections) ( region: [`RID`](class_rid.md), enabled: [`bool`](class_bool.md) )                                                                                                                                                                                           |
| `void`                                              | [`set_active`](class_navigationserver3d.md#class_navigationserver3d_method_set_active) ( active: [`bool`](class_bool.md) )                                                                                                                                                                                                                                                                     |
| `void`                                              | [`set_debug_enabled`](class_navigationserver3d.md#class_navigationserver3d_method_set_debug_enabled) ( enabled: [`bool`](class_bool.md) )                                                                                                                                                                                                                                                      |
| [`PackedVector3Array`](class_packedvector3array.md) | [`simplify_path`](class_navigationserver3d.md#class_navigationserver3d_method_simplify_path) ( path: [`PackedVector3Array`](class_packedvector3array.md), epsilon: [`float`](class_float.md) )                                                                                                                                                                                                 |
| [`RID`](class_rid.md)                               | [`source_geometry_parser_create`](class_navigationserver3d.md#class_navigationserver3d_method_source_geometry_parser_create) ( )                                                                                                                                                                                                                                                               |
| `void`                                              | [`source_geometry_parser_set_callback`](class_navigationserver3d.md#class_navigationserver3d_method_source_geometry_parser_set_callback) ( parser: [`RID`](class_rid.md), callback: [`Callable`](class_callable.md) )                                                                                                                                                                          |

<!-- rst-class:: classref-section-separator -->

---

## 信号

<div id="_class_class_navigationserver3d_signal_avoidance_debug_changed"></div>

**avoidance_debug_changed** ( ) <div id="class_navigationserver3d_signal_avoidance_debug_changed"></div>

Emitted when avoidance debug settings are changed. Only available in debug builds.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_class_navigationserver3d_signal_map_changed"></div>

**map_changed** ( map: [`RID`](class_rid.md) ) <div id="class_navigationserver3d_signal_map_changed"></div>

Emitted when a navigation map is updated, when a region moves or is modified.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_class_navigationserver3d_signal_navigation_debug_changed"></div>

**navigation_debug_changed** ( ) <div id="class_navigationserver3d_signal_navigation_debug_changed"></div>

Emitted when navigation debug settings are changed. Only available in debug builds.

<!-- rst-class:: classref-section-separator -->

---

## 枚举

<div id="_class_enum_navigationserver3d_processinfo"></div>

enum **ProcessInfo**: <div id="enum_navigationserver3d_processinfo"></div>

<div id="_class_navigationserver3d_constant_info_active_maps"></div>

[ProcessInfo](#enum_navigationserver3d_processinfo) **INFO_ACTIVE_MAPS** = ``0``

Constant to get the number of active navigation maps.

<div id="_class_navigationserver3d_constant_info_region_count"></div>

[ProcessInfo](#enum_navigationserver3d_processinfo) **INFO_REGION_COUNT** = ``1``

Constant to get the number of active navigation regions.

<div id="_class_navigationserver3d_constant_info_agent_count"></div>

[ProcessInfo](#enum_navigationserver3d_processinfo) **INFO_AGENT_COUNT** = ``2``

Constant to get the number of active navigation agents processing avoidance.

<div id="_class_navigationserver3d_constant_info_link_count"></div>

[ProcessInfo](#enum_navigationserver3d_processinfo) **INFO_LINK_COUNT** = ``3``

Constant to get the number of active navigation links.

<div id="_class_navigationserver3d_constant_info_polygon_count"></div>

[ProcessInfo](#enum_navigationserver3d_processinfo) **INFO_POLYGON_COUNT** = ``4``

Constant to get the number of navigation mesh polygons.

<div id="_class_navigationserver3d_constant_info_edge_count"></div>

[ProcessInfo](#enum_navigationserver3d_processinfo) **INFO_EDGE_COUNT** = ``5``

Constant to get the number of navigation mesh polygon edges.

<div id="_class_navigationserver3d_constant_info_edge_merge_count"></div>

[ProcessInfo](#enum_navigationserver3d_processinfo) **INFO_EDGE_MERGE_COUNT** = ``6``

Constant to get the number of navigation mesh polygon edges that were merged due to edge key overlap.

<div id="_class_navigationserver3d_constant_info_edge_connection_count"></div>

[ProcessInfo](#enum_navigationserver3d_processinfo) **INFO_EDGE_CONNECTION_COUNT** = ``7``

Constant to get the number of navigation mesh polygon edges that are considered connected by edge proximity.

<div id="_class_navigationserver3d_constant_info_edge_free_count"></div>

[ProcessInfo](#enum_navigationserver3d_processinfo) **INFO_EDGE_FREE_COUNT** = ``8``

Constant to get the number of navigation mesh polygon edges that could not be merged but may be still connected by edge proximity or with links.

<div id="_class_navigationserver3d_constant_info_obstacle_count"></div>

[ProcessInfo](#enum_navigationserver3d_processinfo) **INFO_OBSTACLE_COUNT** = ``9``

Constant to get the number of active navigation obstacles.

<!-- rst-class:: classref-section-separator -->

---

## 方法说明

<div id="_class_navigationserver3d_method_agent_create"></div>

[`RID`](class_rid.md) **agent_create** ( )<div id="class_navigationserver3d_method_agent_create"></div>

Creates the agent.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_navigationserver3d_method_agent_get_avoidance_enabled"></div>

[`bool`](class_bool.md) **agent_get_avoidance_enabled** ( agent: [`RID`](class_rid.md) ) const[^const]<div id="class_navigationserver3d_method_agent_get_avoidance_enabled"></div>

Returns `true` if the provided `agent` has avoidance enabled.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_navigationserver3d_method_agent_get_avoidance_layers"></div>

[`int`](class_int.md) **agent_get_avoidance_layers** ( agent: [`RID`](class_rid.md) ) const[^const]<div id="class_navigationserver3d_method_agent_get_avoidance_layers"></div>

Returns the `avoidance_layers` bitmask of the specified `agent`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_navigationserver3d_method_agent_get_avoidance_mask"></div>

[`int`](class_int.md) **agent_get_avoidance_mask** ( agent: [`RID`](class_rid.md) ) const[^const]<div id="class_navigationserver3d_method_agent_get_avoidance_mask"></div>

Returns the `avoidance_mask` bitmask of the specified `agent`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_navigationserver3d_method_agent_get_avoidance_priority"></div>

[`float`](class_float.md) **agent_get_avoidance_priority** ( agent: [`RID`](class_rid.md) ) const[^const]<div id="class_navigationserver3d_method_agent_get_avoidance_priority"></div>

Returns the `avoidance_priority` of the specified `agent`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_navigationserver3d_method_agent_get_height"></div>

[`float`](class_float.md) **agent_get_height** ( agent: [`RID`](class_rid.md) ) const[^const]<div id="class_navigationserver3d_method_agent_get_height"></div>

Returns the `height` of the specified `agent`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_navigationserver3d_method_agent_get_map"></div>

[`RID`](class_rid.md) **agent_get_map** ( agent: [`RID`](class_rid.md) ) const[^const]<div id="class_navigationserver3d_method_agent_get_map"></div>

Returns the navigation map [`RID`](class_rid.md) the requested `agent` is currently assigned to.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_navigationserver3d_method_agent_get_max_neighbors"></div>

[`int`](class_int.md) **agent_get_max_neighbors** ( agent: [`RID`](class_rid.md) ) const[^const]<div id="class_navigationserver3d_method_agent_get_max_neighbors"></div>

Returns the maximum number of other agents the specified `agent` takes into account in the navigation.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_navigationserver3d_method_agent_get_max_speed"></div>

[`float`](class_float.md) **agent_get_max_speed** ( agent: [`RID`](class_rid.md) ) const[^const]<div id="class_navigationserver3d_method_agent_get_max_speed"></div>

Returns the maximum speed of the specified `agent`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_navigationserver3d_method_agent_get_neighbor_distance"></div>

[`float`](class_float.md) **agent_get_neighbor_distance** ( agent: [`RID`](class_rid.md) ) const[^const]<div id="class_navigationserver3d_method_agent_get_neighbor_distance"></div>

Returns the maximum distance to other agents the specified `agent` takes into account in the navigation.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_navigationserver3d_method_agent_get_paused"></div>

[`bool`](class_bool.md) **agent_get_paused** ( agent: [`RID`](class_rid.md) ) const[^const]<div id="class_navigationserver3d_method_agent_get_paused"></div>

Returns `true` if the specified `agent` is paused.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_navigationserver3d_method_agent_get_position"></div>

[`Vector3`](class_vector3.md) **agent_get_position** ( agent: [`RID`](class_rid.md) ) const[^const]<div id="class_navigationserver3d_method_agent_get_position"></div>

Returns the position of the specified `agent` in world space.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_navigationserver3d_method_agent_get_radius"></div>

[`float`](class_float.md) **agent_get_radius** ( agent: [`RID`](class_rid.md) ) const[^const]<div id="class_navigationserver3d_method_agent_get_radius"></div>

Returns the radius of the specified `agent`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_navigationserver3d_method_agent_get_time_horizon_agents"></div>

[`float`](class_float.md) **agent_get_time_horizon_agents** ( agent: [`RID`](class_rid.md) ) const[^const]<div id="class_navigationserver3d_method_agent_get_time_horizon_agents"></div>

Returns the minimal amount of time for which the specified `agent`'s velocities that are computed by the simulation are safe with respect to other agents.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_navigationserver3d_method_agent_get_time_horizon_obstacles"></div>

[`float`](class_float.md) **agent_get_time_horizon_obstacles** ( agent: [`RID`](class_rid.md) ) const[^const]<div id="class_navigationserver3d_method_agent_get_time_horizon_obstacles"></div>

Returns the minimal amount of time for which the specified `agent`'s velocities that are computed by the simulation are safe with respect to static avoidance obstacles.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_navigationserver3d_method_agent_get_use_3d_avoidance"></div>

[`bool`](class_bool.md) **agent_get_use_3d_avoidance** ( agent: [`RID`](class_rid.md) ) const[^const]<div id="class_navigationserver3d_method_agent_get_use_3d_avoidance"></div>

Returns `true` if the provided `agent` uses avoidance in 3D space Vector3(x,y,z) instead of horizontal 2D Vector2(x,y) / Vector3(x,0.0,z).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_navigationserver3d_method_agent_get_velocity"></div>

[`Vector3`](class_vector3.md) **agent_get_velocity** ( agent: [`RID`](class_rid.md) ) const[^const]<div id="class_navigationserver3d_method_agent_get_velocity"></div>

Returns the velocity of the specified `agent`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_navigationserver3d_method_agent_has_avoidance_callback"></div>

[`bool`](class_bool.md) **agent_has_avoidance_callback** ( agent: [`RID`](class_rid.md) ) const[^const]<div id="class_navigationserver3d_method_agent_has_avoidance_callback"></div>

Return `true` if the specified `agent` has an avoidance callback.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_navigationserver3d_method_agent_is_map_changed"></div>

[`bool`](class_bool.md) **agent_is_map_changed** ( agent: [`RID`](class_rid.md) ) const[^const]<div id="class_navigationserver3d_method_agent_is_map_changed"></div>

Returns true if the map got changed the previous frame.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_navigationserver3d_method_agent_set_avoidance_callback"></div>

`void` **agent_set_avoidance_callback** ( agent: [`RID`](class_rid.md), callback: [`Callable`](class_callable.md) )<div id="class_navigationserver3d_method_agent_set_avoidance_callback"></div>

Sets the callback [`Callable`](class_callable.md) that gets called after each avoidance processing step for the `agent`. The calculated `safe_velocity` will be dispatched with a signal to the object just before the physics calculations.

 **Note:** Created callbacks are always processed independently of the SceneTree state as long as the agent is on a navigation map and not freed. To disable the dispatch of a callback from an agent use [`agent_set_avoidance_callback`](class_navigationserver3d.md#class_navigationserver3d_method_agent_set_avoidance_callback) again with an empty [`Callable`](class_callable.md).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_navigationserver3d_method_agent_set_avoidance_enabled"></div>

`void` **agent_set_avoidance_enabled** ( agent: [`RID`](class_rid.md), enabled: [`bool`](class_bool.md) )<div id="class_navigationserver3d_method_agent_set_avoidance_enabled"></div>

If `enabled` is `true`, the provided `agent` calculates avoidance.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_navigationserver3d_method_agent_set_avoidance_layers"></div>

`void` **agent_set_avoidance_layers** ( agent: [`RID`](class_rid.md), layers: [`int`](class_int.md) )<div id="class_navigationserver3d_method_agent_set_avoidance_layers"></div>

Set the agent's `avoidance_layers` bitmask.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_navigationserver3d_method_agent_set_avoidance_mask"></div>

`void` **agent_set_avoidance_mask** ( agent: [`RID`](class_rid.md), mask: [`int`](class_int.md) )<div id="class_navigationserver3d_method_agent_set_avoidance_mask"></div>

Set the agent's `avoidance_mask` bitmask.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_navigationserver3d_method_agent_set_avoidance_priority"></div>

`void` **agent_set_avoidance_priority** ( agent: [`RID`](class_rid.md), priority: [`float`](class_float.md) )<div id="class_navigationserver3d_method_agent_set_avoidance_priority"></div>

Set the agent's `avoidance_priority` with a `priority` between 0.0 (lowest priority) to 1.0 (highest priority).

The specified `agent` does not adjust the velocity for other agents that would match the `avoidance_mask` but have a lower `avoidance_priority`. This in turn makes the other agents with lower priority adjust their velocities even more to avoid collision with this agent.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_navigationserver3d_method_agent_set_height"></div>

`void` **agent_set_height** ( agent: [`RID`](class_rid.md), height: [`float`](class_float.md) )<div id="class_navigationserver3d_method_agent_set_height"></div>

Updates the provided `agent` `height`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_navigationserver3d_method_agent_set_map"></div>

`void` **agent_set_map** ( agent: [`RID`](class_rid.md), map: [`RID`](class_rid.md) )<div id="class_navigationserver3d_method_agent_set_map"></div>

Puts the agent in the map.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_navigationserver3d_method_agent_set_max_neighbors"></div>

`void` **agent_set_max_neighbors** ( agent: [`RID`](class_rid.md), count: [`int`](class_int.md) )<div id="class_navigationserver3d_method_agent_set_max_neighbors"></div>

Sets the maximum number of other agents the agent takes into account in the navigation. The larger this number, the longer the running time of the simulation. If the number is too low, the simulation will not be safe.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_navigationserver3d_method_agent_set_max_speed"></div>

`void` **agent_set_max_speed** ( agent: [`RID`](class_rid.md), max_speed: [`float`](class_float.md) )<div id="class_navigationserver3d_method_agent_set_max_speed"></div>

Sets the maximum speed of the agent. Must be positive.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_navigationserver3d_method_agent_set_neighbor_distance"></div>

`void` **agent_set_neighbor_distance** ( agent: [`RID`](class_rid.md), distance: [`float`](class_float.md) )<div id="class_navigationserver3d_method_agent_set_neighbor_distance"></div>

Sets the maximum distance to other agents this agent takes into account in the navigation. The larger this number, the longer the running time of the simulation. If the number is too low, the simulation will not be safe.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_navigationserver3d_method_agent_set_paused"></div>

`void` **agent_set_paused** ( agent: [`RID`](class_rid.md), paused: [`bool`](class_bool.md) )<div id="class_navigationserver3d_method_agent_set_paused"></div>

If `paused` is true the specified `agent` will not be processed, e.g. calculate avoidance velocities or receive avoidance callbacks.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_navigationserver3d_method_agent_set_position"></div>

`void` **agent_set_position** ( agent: [`RID`](class_rid.md), position: [`Vector3`](class_vector3.md) )<div id="class_navigationserver3d_method_agent_set_position"></div>

Sets the position of the agent in world space.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_navigationserver3d_method_agent_set_radius"></div>

`void` **agent_set_radius** ( agent: [`RID`](class_rid.md), radius: [`float`](class_float.md) )<div id="class_navigationserver3d_method_agent_set_radius"></div>

Sets the radius of the agent.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_navigationserver3d_method_agent_set_time_horizon_agents"></div>

`void` **agent_set_time_horizon_agents** ( agent: [`RID`](class_rid.md), time_horizon: [`float`](class_float.md) )<div id="class_navigationserver3d_method_agent_set_time_horizon_agents"></div>

The minimal amount of time for which the agent's velocities that are computed by the simulation are safe with respect to other agents. The larger this number, the sooner this agent will respond to the presence of other agents, but the less freedom this agent has in choosing its velocities. A too high value will slow down agents movement considerably. Must be positive.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_navigationserver3d_method_agent_set_time_horizon_obstacles"></div>

`void` **agent_set_time_horizon_obstacles** ( agent: [`RID`](class_rid.md), time_horizon: [`float`](class_float.md) )<div id="class_navigationserver3d_method_agent_set_time_horizon_obstacles"></div>

The minimal amount of time for which the agent's velocities that are computed by the simulation are safe with respect to static avoidance obstacles. The larger this number, the sooner this agent will respond to the presence of static avoidance obstacles, but the less freedom this agent has in choosing its velocities. A too high value will slow down agents movement considerably. Must be positive.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_navigationserver3d_method_agent_set_use_3d_avoidance"></div>

`void` **agent_set_use_3d_avoidance** ( agent: [`RID`](class_rid.md), enabled: [`bool`](class_bool.md) )<div id="class_navigationserver3d_method_agent_set_use_3d_avoidance"></div>

Sets if the agent uses the 2D avoidance or the 3D avoidance while avoidance is enabled.

If `true` the agent calculates avoidance velocities in 3D for the xyz-axis, e.g. for games that take place in air, underwater or space. The 3D using agent only avoids other 3D avoidance using agent's. The 3D using agent only reacts to radius based avoidance obstacles. The 3D using agent ignores any vertices based obstacles. The 3D using agent only avoids other 3D using agent's.

If `false` the agent calculates avoidance velocities in 2D along the xz-axis ignoring the y-axis. The 2D using agent only avoids other 2D avoidance using agent's. The 2D using agent reacts to radius avoidance obstacles. The 2D using agent reacts to vertices based avoidance obstacles. The 2D using agent only avoids other 2D using agent's. 2D using agents will ignore other 2D using agents or obstacles that are below their current position or above their current position including the agents height in 2D avoidance.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_navigationserver3d_method_agent_set_velocity"></div>

`void` **agent_set_velocity** ( agent: [`RID`](class_rid.md), velocity: [`Vector3`](class_vector3.md) )<div id="class_navigationserver3d_method_agent_set_velocity"></div>

Sets `velocity` as the new wanted velocity for the specified `agent`. The avoidance simulation will try to fulfill this velocity if possible but will modify it to avoid collision with other agent's and obstacles. When an agent is teleported to a new position use [`agent_set_velocity_forced`](class_navigationserver3d.md#class_navigationserver3d_method_agent_set_velocity_forced) as well to reset the internal simulation velocity.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_navigationserver3d_method_agent_set_velocity_forced"></div>

`void` **agent_set_velocity_forced** ( agent: [`RID`](class_rid.md), velocity: [`Vector3`](class_vector3.md) )<div id="class_navigationserver3d_method_agent_set_velocity_forced"></div>

Replaces the internal velocity in the collision avoidance simulation with `velocity` for the specified `agent`. When an agent is teleported to a new position this function should be used in the same frame. If called frequently this function can get agents stuck.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_navigationserver3d_method_bake_from_source_geometry_data"></div>

`void` **bake_from_source_geometry_data** ( navigation_mesh: [`NavigationMesh`](class_navigationmesh.md), source_geometry_data: [`NavigationMeshSourceGeometryData3D`](class_navigationmeshsourcegeometrydata3d.md), callback: [`Callable`](class_callable.md) = Callable() )<div id="class_navigationserver3d_method_bake_from_source_geometry_data"></div>

Bakes the provided `navigation_mesh` with the data from the provided `source_geometry_data`. After the process is finished the optional `callback` will be called.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_navigationserver3d_method_bake_from_source_geometry_data_async"></div>

`void` **bake_from_source_geometry_data_async** ( navigation_mesh: [`NavigationMesh`](class_navigationmesh.md), source_geometry_data: [`NavigationMeshSourceGeometryData3D`](class_navigationmeshsourcegeometrydata3d.md), callback: [`Callable`](class_callable.md) = Callable() )<div id="class_navigationserver3d_method_bake_from_source_geometry_data_async"></div>

Bakes the provided `navigation_mesh` with the data from the provided `source_geometry_data` as an async task running on a background thread. After the process is finished the optional `callback` will be called.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_navigationserver3d_method_free_rid"></div>

`void` **free_rid** ( rid: [`RID`](class_rid.md) )<div id="class_navigationserver3d_method_free_rid"></div>

Destroys the given RID.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_navigationserver3d_method_get_debug_enabled"></div>

[`bool`](class_bool.md) **get_debug_enabled** ( ) const[^const]<div id="class_navigationserver3d_method_get_debug_enabled"></div>

Returns `true` when the NavigationServer has debug enabled.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_navigationserver3d_method_get_maps"></div>

[Array](class_array.md) [`RID`](class_rid.md) **get_maps** ( ) const[^const]<div id="class_navigationserver3d_method_get_maps"></div>

Returns all created navigation map [`RID`](class_rid.md) s on the NavigationServer. This returns both 2D and 3D created navigation maps as there is technically no distinction between them.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_navigationserver3d_method_get_process_info"></div>

[`int`](class_int.md) **get_process_info** ( process_info: [ProcessInfo](#enum_navigationserver3d_processinfo) ) const[^const]<div id="class_navigationserver3d_method_get_process_info"></div>

Returns information about the current state of the NavigationServer. See [ProcessInfo](#enum_navigationserver3d_processinfo) for a list of available states.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_navigationserver3d_method_is_baking_navigation_mesh"></div>

[`bool`](class_bool.md) **is_baking_navigation_mesh** ( navigation_mesh: [`NavigationMesh`](class_navigationmesh.md) ) const[^const]<div id="class_navigationserver3d_method_is_baking_navigation_mesh"></div>

Returns `true` when the provided navigation mesh is being baked on a background thread.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_navigationserver3d_method_link_create"></div>

[`RID`](class_rid.md) **link_create** ( )<div id="class_navigationserver3d_method_link_create"></div>

Create a new link between two positions on a map.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_navigationserver3d_method_link_get_enabled"></div>

[`bool`](class_bool.md) **link_get_enabled** ( link: [`RID`](class_rid.md) ) const[^const]<div id="class_navigationserver3d_method_link_get_enabled"></div>

Returns `true` if the specified `link` is enabled.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_navigationserver3d_method_link_get_end_position"></div>

[`Vector3`](class_vector3.md) **link_get_end_position** ( link: [`RID`](class_rid.md) ) const[^const]<div id="class_navigationserver3d_method_link_get_end_position"></div>

Returns the ending position of this `link`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_navigationserver3d_method_link_get_enter_cost"></div>

[`float`](class_float.md) **link_get_enter_cost** ( link: [`RID`](class_rid.md) ) const[^const]<div id="class_navigationserver3d_method_link_get_enter_cost"></div>

Returns the enter cost of this `link`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_navigationserver3d_method_link_get_map"></div>

[`RID`](class_rid.md) **link_get_map** ( link: [`RID`](class_rid.md) ) const[^const]<div id="class_navigationserver3d_method_link_get_map"></div>

Returns the navigation map [`RID`](class_rid.md) the requested `link` is currently assigned to.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_navigationserver3d_method_link_get_navigation_layers"></div>

[`int`](class_int.md) **link_get_navigation_layers** ( link: [`RID`](class_rid.md) ) const[^const]<div id="class_navigationserver3d_method_link_get_navigation_layers"></div>

Returns the navigation layers for this `link`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_navigationserver3d_method_link_get_owner_id"></div>

[`int`](class_int.md) **link_get_owner_id** ( link: [`RID`](class_rid.md) ) const[^const]<div id="class_navigationserver3d_method_link_get_owner_id"></div>

Returns the `ObjectID` of the object which manages this link.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_navigationserver3d_method_link_get_start_position"></div>

[`Vector3`](class_vector3.md) **link_get_start_position** ( link: [`RID`](class_rid.md) ) const[^const]<div id="class_navigationserver3d_method_link_get_start_position"></div>

Returns the starting position of this `link`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_navigationserver3d_method_link_get_travel_cost"></div>

[`float`](class_float.md) **link_get_travel_cost** ( link: [`RID`](class_rid.md) ) const[^const]<div id="class_navigationserver3d_method_link_get_travel_cost"></div>

Returns the travel cost of this `link`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_navigationserver3d_method_link_is_bidirectional"></div>

[`bool`](class_bool.md) **link_is_bidirectional** ( link: [`RID`](class_rid.md) ) const[^const]<div id="class_navigationserver3d_method_link_is_bidirectional"></div>

Returns whether this `link` can be travelled in both directions.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_navigationserver3d_method_link_set_bidirectional"></div>

`void` **link_set_bidirectional** ( link: [`RID`](class_rid.md), bidirectional: [`bool`](class_bool.md) )<div id="class_navigationserver3d_method_link_set_bidirectional"></div>

Sets whether this `link` can be travelled in both directions.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_navigationserver3d_method_link_set_enabled"></div>

`void` **link_set_enabled** ( link: [`RID`](class_rid.md), enabled: [`bool`](class_bool.md) )<div id="class_navigationserver3d_method_link_set_enabled"></div>

If `enabled` is `true`, the specified `link` will contribute to its current navigation map.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_navigationserver3d_method_link_set_end_position"></div>

`void` **link_set_end_position** ( link: [`RID`](class_rid.md), position: [`Vector3`](class_vector3.md) )<div id="class_navigationserver3d_method_link_set_end_position"></div>

Sets the exit position for the `link`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_navigationserver3d_method_link_set_enter_cost"></div>

`void` **link_set_enter_cost** ( link: [`RID`](class_rid.md), enter_cost: [`float`](class_float.md) )<div id="class_navigationserver3d_method_link_set_enter_cost"></div>

Sets the `enter_cost` for this `link`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_navigationserver3d_method_link_set_map"></div>

`void` **link_set_map** ( link: [`RID`](class_rid.md), map: [`RID`](class_rid.md) )<div id="class_navigationserver3d_method_link_set_map"></div>

Sets the navigation map [`RID`](class_rid.md) for the link.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_navigationserver3d_method_link_set_navigation_layers"></div>

`void` **link_set_navigation_layers** ( link: [`RID`](class_rid.md), navigation_layers: [`int`](class_int.md) )<div id="class_navigationserver3d_method_link_set_navigation_layers"></div>

Set the links's navigation layers. This allows selecting links from a path request (when using [`map_get_path`](class_navigationserver3d.md#class_navigationserver3d_method_map_get_path)).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_navigationserver3d_method_link_set_owner_id"></div>

`void` **link_set_owner_id** ( link: [`RID`](class_rid.md), owner_id: [`int`](class_int.md) )<div id="class_navigationserver3d_method_link_set_owner_id"></div>

Set the `ObjectID` of the object which manages this link.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_navigationserver3d_method_link_set_start_position"></div>

`void` **link_set_start_position** ( link: [`RID`](class_rid.md), position: [`Vector3`](class_vector3.md) )<div id="class_navigationserver3d_method_link_set_start_position"></div>

Sets the entry position for this `link`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_navigationserver3d_method_link_set_travel_cost"></div>

`void` **link_set_travel_cost** ( link: [`RID`](class_rid.md), travel_cost: [`float`](class_float.md) )<div id="class_navigationserver3d_method_link_set_travel_cost"></div>

Sets the `travel_cost` for this `link`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_navigationserver3d_method_map_create"></div>

[`RID`](class_rid.md) **map_create** ( )<div id="class_navigationserver3d_method_map_create"></div>

Create a new map.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_navigationserver3d_method_map_force_update"></div>

`void` **map_force_update** ( map: [`RID`](class_rid.md) )<div id="class_navigationserver3d_method_map_force_update"></div>

This function immediately forces synchronization of the specified navigation `map` [`RID`](class_rid.md). By default navigation maps are only synchronized at the end of each physics frame. This function can be used to immediately (re)calculate all the navigation meshes and region connections of the navigation map. This makes it possible to query a navigation path for a changed map immediately and in the same frame (multiple times if needed).

Due to technical restrictions the current NavigationServer command queue will be flushed. This means all already queued update commands for this physics frame will be executed, even those intended for other maps, regions and agents not part of the specified map. The expensive computation of the navigation meshes and region connections of a map will only be done for the specified map. Other maps will receive the normal synchronization at the end of the physics frame. Should the specified map receive changes after the forced update it will update again as well when the other maps receive their update.

Avoidance processing and dispatch of the `safe_velocity` signals is unaffected by this function and continues to happen for all maps and agents at the end of the physics frame.

 **Note:** With great power comes great responsibility. This function should only be used by users that really know what they are doing and have a good reason for it. Forcing an immediate update of a navigation map requires locking the NavigationServer and flushing the entire NavigationServer command queue. Not only can this severely impact the performance of a game but it can also introduce bugs if used inappropriately without much foresight.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_navigationserver3d_method_map_get_agents"></div>

[Array](class_array.md) [`RID`](class_rid.md) **map_get_agents** ( map: [`RID`](class_rid.md) ) const[^const]<div id="class_navigationserver3d_method_map_get_agents"></div>

Returns all navigation agents [`RID`](class_rid.md) s that are currently assigned to the requested navigation `map`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_navigationserver3d_method_map_get_cell_height"></div>

[`float`](class_float.md) **map_get_cell_height** ( map: [`RID`](class_rid.md) ) const[^const]<div id="class_navigationserver3d_method_map_get_cell_height"></div>

Returns the map cell height used to rasterize the navigation mesh vertices on the Y axis.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_navigationserver3d_method_map_get_cell_size"></div>

[`float`](class_float.md) **map_get_cell_size** ( map: [`RID`](class_rid.md) ) const[^const]<div id="class_navigationserver3d_method_map_get_cell_size"></div>

Returns the map cell size used to rasterize the navigation mesh vertices on the XZ plane.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_navigationserver3d_method_map_get_closest_point"></div>

[`Vector3`](class_vector3.md) **map_get_closest_point** ( map: [`RID`](class_rid.md), to_point: [`Vector3`](class_vector3.md) ) const[^const]<div id="class_navigationserver3d_method_map_get_closest_point"></div>

Returns the navigation mesh surface point closest to the provided `to_point` on the navigation `map`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_navigationserver3d_method_map_get_closest_point_normal"></div>

[`Vector3`](class_vector3.md) **map_get_closest_point_normal** ( map: [`RID`](class_rid.md), to_point: [`Vector3`](class_vector3.md) ) const[^const]<div id="class_navigationserver3d_method_map_get_closest_point_normal"></div>

Returns the navigation mesh surface normal closest to the provided `to_point` on the navigation `map`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_navigationserver3d_method_map_get_closest_point_owner"></div>

[`RID`](class_rid.md) **map_get_closest_point_owner** ( map: [`RID`](class_rid.md), to_point: [`Vector3`](class_vector3.md) ) const[^const]<div id="class_navigationserver3d_method_map_get_closest_point_owner"></div>

Returns the owner region RID for the navigation mesh surface point closest to the provided `to_point` on the navigation `map`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_navigationserver3d_method_map_get_closest_point_to_segment"></div>

[`Vector3`](class_vector3.md) **map_get_closest_point_to_segment** ( map: [`RID`](class_rid.md), start: [`Vector3`](class_vector3.md), end: [`Vector3`](class_vector3.md), use_collision: [`bool`](class_bool.md) = false ) const[^const]<div id="class_navigationserver3d_method_map_get_closest_point_to_segment"></div>

Returns the navigation mesh surface point closest to the provided `start` and `end` segment on the navigation `map`.

If `use_collision` is `true`, a closest point test is only done when the segment intersects with the navigation mesh surface.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_navigationserver3d_method_map_get_edge_connection_margin"></div>

[`float`](class_float.md) **map_get_edge_connection_margin** ( map: [`RID`](class_rid.md) ) const[^const]<div id="class_navigationserver3d_method_map_get_edge_connection_margin"></div>

Returns the edge connection margin of the map. This distance is the minimum vertex distance needed to connect two edges from different regions.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_navigationserver3d_method_map_get_iteration_id"></div>

[`int`](class_int.md) **map_get_iteration_id** ( map: [`RID`](class_rid.md) ) const[^const]<div id="class_navigationserver3d_method_map_get_iteration_id"></div>

Returns the current iteration id of the navigation map. Every time the navigation map changes and synchronizes the iteration id increases. An iteration id of 0 means the navigation map has never synchronized.

 **Note:** The iteration id will wrap back to 1 after reaching its range limit.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_navigationserver3d_method_map_get_link_connection_radius"></div>

[`float`](class_float.md) **map_get_link_connection_radius** ( map: [`RID`](class_rid.md) ) const[^const]<div id="class_navigationserver3d_method_map_get_link_connection_radius"></div>

Returns the link connection radius of the map. This distance is the maximum range any link will search for navigation mesh polygons to connect to.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_navigationserver3d_method_map_get_links"></div>

[Array](class_array.md) [`RID`](class_rid.md) **map_get_links** ( map: [`RID`](class_rid.md) ) const[^const]<div id="class_navigationserver3d_method_map_get_links"></div>

Returns all navigation link [`RID`](class_rid.md) s that are currently assigned to the requested navigation `map`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_navigationserver3d_method_map_get_merge_rasterizer_cell_scale"></div>

[`float`](class_float.md) **map_get_merge_rasterizer_cell_scale** ( map: [`RID`](class_rid.md) ) const[^const]<div id="class_navigationserver3d_method_map_get_merge_rasterizer_cell_scale"></div>

Returns map's internal merge rasterizer cell scale.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_navigationserver3d_method_map_get_obstacles"></div>

[Array](class_array.md) [`RID`](class_rid.md) **map_get_obstacles** ( map: [`RID`](class_rid.md) ) const[^const]<div id="class_navigationserver3d_method_map_get_obstacles"></div>

Returns all navigation obstacle [`RID`](class_rid.md) s that are currently assigned to the requested navigation `map`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_navigationserver3d_method_map_get_path"></div>

[`PackedVector3Array`](class_packedvector3array.md) **map_get_path** ( map: [`RID`](class_rid.md), origin: [`Vector3`](class_vector3.md), destination: [`Vector3`](class_vector3.md), optimize: [`bool`](class_bool.md), navigation_layers: [`int`](class_int.md) = 1 ) const[^const]<div id="class_navigationserver3d_method_map_get_path"></div>

Returns the navigation path to reach the destination from the origin. `navigation_layers` is a bitmask of all region navigation layers that are allowed to be in the path.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_navigationserver3d_method_map_get_random_point"></div>

[`Vector3`](class_vector3.md) **map_get_random_point** ( map: [`RID`](class_rid.md), navigation_layers: [`int`](class_int.md), uniformly: [`bool`](class_bool.md) ) const[^const]<div id="class_navigationserver3d_method_map_get_random_point"></div>

Returns a random position picked from all map region polygons with matching `navigation_layers`.

If `uniformly` is `true`, all map regions, polygons, and faces are weighted by their surface area (slower).

If `uniformly` is `false`, just a random region and a random polygon are picked (faster).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_navigationserver3d_method_map_get_regions"></div>

[Array](class_array.md) [`RID`](class_rid.md) **map_get_regions** ( map: [`RID`](class_rid.md) ) const[^const]<div id="class_navigationserver3d_method_map_get_regions"></div>

Returns all navigation regions [`RID`](class_rid.md) s that are currently assigned to the requested navigation `map`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_navigationserver3d_method_map_get_up"></div>

[`Vector3`](class_vector3.md) **map_get_up** ( map: [`RID`](class_rid.md) ) const[^const]<div id="class_navigationserver3d_method_map_get_up"></div>

Returns the map's up direction.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_navigationserver3d_method_map_get_use_edge_connections"></div>

[`bool`](class_bool.md) **map_get_use_edge_connections** ( map: [`RID`](class_rid.md) ) const[^const]<div id="class_navigationserver3d_method_map_get_use_edge_connections"></div>

Returns true if the navigation `map` allows navigation regions to use edge connections to connect with other navigation regions within proximity of the navigation map edge connection margin.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_navigationserver3d_method_map_is_active"></div>

[`bool`](class_bool.md) **map_is_active** ( map: [`RID`](class_rid.md) ) const[^const]<div id="class_navigationserver3d_method_map_is_active"></div>

Returns true if the map is active.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_navigationserver3d_method_map_set_active"></div>

`void` **map_set_active** ( map: [`RID`](class_rid.md), active: [`bool`](class_bool.md) )<div id="class_navigationserver3d_method_map_set_active"></div>

Sets the map active.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_navigationserver3d_method_map_set_cell_height"></div>

`void` **map_set_cell_height** ( map: [`RID`](class_rid.md), cell_height: [`float`](class_float.md) )<div id="class_navigationserver3d_method_map_set_cell_height"></div>

Sets the map cell height used to rasterize the navigation mesh vertices on the Y axis. Must match with the cell height of the used navigation meshes.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_navigationserver3d_method_map_set_cell_size"></div>

`void` **map_set_cell_size** ( map: [`RID`](class_rid.md), cell_size: [`float`](class_float.md) )<div id="class_navigationserver3d_method_map_set_cell_size"></div>

Sets the map cell size used to rasterize the navigation mesh vertices on the XZ plane. Must match with the cell size of the used navigation meshes.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_navigationserver3d_method_map_set_edge_connection_margin"></div>

`void` **map_set_edge_connection_margin** ( map: [`RID`](class_rid.md), margin: [`float`](class_float.md) )<div id="class_navigationserver3d_method_map_set_edge_connection_margin"></div>

Set the map edge connection margin used to weld the compatible region edges.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_navigationserver3d_method_map_set_link_connection_radius"></div>

`void` **map_set_link_connection_radius** ( map: [`RID`](class_rid.md), radius: [`float`](class_float.md) )<div id="class_navigationserver3d_method_map_set_link_connection_radius"></div>

Set the map's link connection radius used to connect links to navigation polygons.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_navigationserver3d_method_map_set_merge_rasterizer_cell_scale"></div>

`void` **map_set_merge_rasterizer_cell_scale** ( map: [`RID`](class_rid.md), scale: [`float`](class_float.md) )<div id="class_navigationserver3d_method_map_set_merge_rasterizer_cell_scale"></div>

Set the map's internal merge rasterizer cell scale used to control merging sensitivity.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_navigationserver3d_method_map_set_up"></div>

`void` **map_set_up** ( map: [`RID`](class_rid.md), up: [`Vector3`](class_vector3.md) )<div id="class_navigationserver3d_method_map_set_up"></div>

Sets the map up direction.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_navigationserver3d_method_map_set_use_edge_connections"></div>

`void` **map_set_use_edge_connections** ( map: [`RID`](class_rid.md), enabled: [`bool`](class_bool.md) )<div id="class_navigationserver3d_method_map_set_use_edge_connections"></div>

Set the navigation `map` edge connection use. If `enabled` is `true`, the navigation map allows navigation regions to use edge connections to connect with other navigation regions within proximity of the navigation map edge connection margin.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_navigationserver3d_method_obstacle_create"></div>

[`RID`](class_rid.md) **obstacle_create** ( )<div id="class_navigationserver3d_method_obstacle_create"></div>

Creates a new obstacle.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_navigationserver3d_method_obstacle_get_avoidance_enabled"></div>

[`bool`](class_bool.md) **obstacle_get_avoidance_enabled** ( obstacle: [`RID`](class_rid.md) ) const[^const]<div id="class_navigationserver3d_method_obstacle_get_avoidance_enabled"></div>

Returns `true` if the provided `obstacle` has avoidance enabled.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_navigationserver3d_method_obstacle_get_avoidance_layers"></div>

[`int`](class_int.md) **obstacle_get_avoidance_layers** ( obstacle: [`RID`](class_rid.md) ) const[^const]<div id="class_navigationserver3d_method_obstacle_get_avoidance_layers"></div>

Returns the `avoidance_layers` bitmask of the specified `obstacle`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_navigationserver3d_method_obstacle_get_height"></div>

[`float`](class_float.md) **obstacle_get_height** ( obstacle: [`RID`](class_rid.md) ) const[^const]<div id="class_navigationserver3d_method_obstacle_get_height"></div>

Returns the `height` of the specified `obstacle`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_navigationserver3d_method_obstacle_get_map"></div>

[`RID`](class_rid.md) **obstacle_get_map** ( obstacle: [`RID`](class_rid.md) ) const[^const]<div id="class_navigationserver3d_method_obstacle_get_map"></div>

Returns the navigation map [`RID`](class_rid.md) the requested `obstacle` is currently assigned to.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_navigationserver3d_method_obstacle_get_paused"></div>

[`bool`](class_bool.md) **obstacle_get_paused** ( obstacle: [`RID`](class_rid.md) ) const[^const]<div id="class_navigationserver3d_method_obstacle_get_paused"></div>

Returns `true` if the specified `obstacle` is paused.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_navigationserver3d_method_obstacle_get_position"></div>

[`Vector3`](class_vector3.md) **obstacle_get_position** ( obstacle: [`RID`](class_rid.md) ) const[^const]<div id="class_navigationserver3d_method_obstacle_get_position"></div>

Returns the position of the specified `obstacle` in world space.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_navigationserver3d_method_obstacle_get_radius"></div>

[`float`](class_float.md) **obstacle_get_radius** ( obstacle: [`RID`](class_rid.md) ) const[^const]<div id="class_navigationserver3d_method_obstacle_get_radius"></div>

Returns the radius of the specified dynamic `obstacle`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_navigationserver3d_method_obstacle_get_use_3d_avoidance"></div>

[`bool`](class_bool.md) **obstacle_get_use_3d_avoidance** ( obstacle: [`RID`](class_rid.md) ) const[^const]<div id="class_navigationserver3d_method_obstacle_get_use_3d_avoidance"></div>

Returns `true` if the provided `obstacle` uses avoidance in 3D space Vector3(x,y,z) instead of horizontal 2D Vector2(x,y) / Vector3(x,0.0,z).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_navigationserver3d_method_obstacle_get_velocity"></div>

[`Vector3`](class_vector3.md) **obstacle_get_velocity** ( obstacle: [`RID`](class_rid.md) ) const[^const]<div id="class_navigationserver3d_method_obstacle_get_velocity"></div>

Returns the velocity of the specified dynamic `obstacle`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_navigationserver3d_method_obstacle_get_vertices"></div>

[`PackedVector3Array`](class_packedvector3array.md) **obstacle_get_vertices** ( obstacle: [`RID`](class_rid.md) ) const[^const]<div id="class_navigationserver3d_method_obstacle_get_vertices"></div>

Returns the outline vertices for the specified `obstacle`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_navigationserver3d_method_obstacle_set_avoidance_enabled"></div>

`void` **obstacle_set_avoidance_enabled** ( obstacle: [`RID`](class_rid.md), enabled: [`bool`](class_bool.md) )<div id="class_navigationserver3d_method_obstacle_set_avoidance_enabled"></div>

If `enabled` is `true`, the provided `obstacle` affects avoidance using agents.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_navigationserver3d_method_obstacle_set_avoidance_layers"></div>

`void` **obstacle_set_avoidance_layers** ( obstacle: [`RID`](class_rid.md), layers: [`int`](class_int.md) )<div id="class_navigationserver3d_method_obstacle_set_avoidance_layers"></div>

Set the obstacles's `avoidance_layers` bitmask.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_navigationserver3d_method_obstacle_set_height"></div>

`void` **obstacle_set_height** ( obstacle: [`RID`](class_rid.md), height: [`float`](class_float.md) )<div id="class_navigationserver3d_method_obstacle_set_height"></div>

Sets the `height` for the `obstacle`. In 3D agents will ignore obstacles that are above or below them while using 2D avoidance.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_navigationserver3d_method_obstacle_set_map"></div>

`void` **obstacle_set_map** ( obstacle: [`RID`](class_rid.md), map: [`RID`](class_rid.md) )<div id="class_navigationserver3d_method_obstacle_set_map"></div>

Assigns the `obstacle` to a navigation map.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_navigationserver3d_method_obstacle_set_paused"></div>

`void` **obstacle_set_paused** ( obstacle: [`RID`](class_rid.md), paused: [`bool`](class_bool.md) )<div id="class_navigationserver3d_method_obstacle_set_paused"></div>

If `paused` is true the specified `obstacle` will not be processed, e.g. affect avoidance velocities.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_navigationserver3d_method_obstacle_set_position"></div>

`void` **obstacle_set_position** ( obstacle: [`RID`](class_rid.md), position: [`Vector3`](class_vector3.md) )<div id="class_navigationserver3d_method_obstacle_set_position"></div>

Updates the `position` in world space for the `obstacle`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_navigationserver3d_method_obstacle_set_radius"></div>

`void` **obstacle_set_radius** ( obstacle: [`RID`](class_rid.md), radius: [`float`](class_float.md) )<div id="class_navigationserver3d_method_obstacle_set_radius"></div>

Sets the radius of the dynamic obstacle.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_navigationserver3d_method_obstacle_set_use_3d_avoidance"></div>

`void` **obstacle_set_use_3d_avoidance** ( obstacle: [`RID`](class_rid.md), enabled: [`bool`](class_bool.md) )<div id="class_navigationserver3d_method_obstacle_set_use_3d_avoidance"></div>

Sets if the `obstacle` uses the 2D avoidance or the 3D avoidance while avoidance is enabled.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_navigationserver3d_method_obstacle_set_velocity"></div>

`void` **obstacle_set_velocity** ( obstacle: [`RID`](class_rid.md), velocity: [`Vector3`](class_vector3.md) )<div id="class_navigationserver3d_method_obstacle_set_velocity"></div>

Sets `velocity` of the dynamic `obstacle`. Allows other agents to better predict the movement of the dynamic obstacle. Only works in combination with the radius of the obstacle.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_navigationserver3d_method_obstacle_set_vertices"></div>

`void` **obstacle_set_vertices** ( obstacle: [`RID`](class_rid.md), vertices: [`PackedVector3Array`](class_packedvector3array.md) )<div id="class_navigationserver3d_method_obstacle_set_vertices"></div>

Sets the outline vertices for the obstacle. If the vertices are winded in clockwise order agents will be pushed in by the obstacle, else they will be pushed out.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_navigationserver3d_method_parse_source_geometry_data"></div>

`void` **parse_source_geometry_data** ( navigation_mesh: [`NavigationMesh`](class_navigationmesh.md), source_geometry_data: [`NavigationMeshSourceGeometryData3D`](class_navigationmeshsourcegeometrydata3d.md), root_node: [`Node`](class_node.md), callback: [`Callable`](class_callable.md) = Callable() )<div id="class_navigationserver3d_method_parse_source_geometry_data"></div>

Parses the [`SceneTree`](class_scenetree.md) for source geometry according to the properties of `navigation_mesh`. Updates the provided `source_geometry_data` resource with the resulting data. The resource can then be used to bake a navigation mesh with [`bake_from_source_geometry_data`](class_navigationserver3d.md#class_navigationserver3d_method_bake_from_source_geometry_data). After the process is finished the optional `callback` will be called.

 **Note:** This function needs to run on the main thread or with a deferred call as the SceneTree is not thread-safe.

 **Performance:** While convenient, reading data arrays from [`Mesh`](class_mesh.md) resources can affect the frame rate negatively. The data needs to be received from the GPU, stalling the [`RenderingServer`](class_renderingserver.md) in the process. For performance prefer the use of e.g. collision shapes or creating the data arrays entirely in code.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_navigationserver3d_method_query_path"></div>

`void` **query_path** ( parameters: [`NavigationPathQueryParameters3D`](class_navigationpathqueryparameters3d.md), result: [`NavigationPathQueryResult3D`](class_navigationpathqueryresult3d.md) ) const[^const]<div id="class_navigationserver3d_method_query_path"></div>

Queries a path in a given navigation map. Start and target position and other parameters are defined through [`NavigationPathQueryParameters3D`](class_navigationpathqueryparameters3d.md). Updates the provided [`NavigationPathQueryResult3D`](class_navigationpathqueryresult3d.md) result object with the path among other results requested by the query.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_navigationserver3d_method_region_bake_navigation_mesh"></div>

`void` **region_bake_navigation_mesh** ( navigation_mesh: [`NavigationMesh`](class_navigationmesh.md), root_node: [`Node`](class_node.md) )<div id="class_navigationserver3d_method_region_bake_navigation_mesh"></div>

**已弃用：** This method is deprecated due to core threading changes. To upgrade existing code, first create a [`NavigationMeshSourceGeometryData3D`](class_navigationmeshsourcegeometrydata3d.md) resource. Use this resource with [`parse_source_geometry_data`](class_navigationserver3d.md#class_navigationserver3d_method_parse_source_geometry_data) to parse the [`SceneTree`](class_scenetree.md) for nodes that should contribute to the navigation mesh baking. The [`SceneTree`](class_scenetree.md) parsing needs to happen on the main thread. After the parsing is finished use the resource with [`bake_from_source_geometry_data`](class_navigationserver3d.md#class_navigationserver3d_method_bake_from_source_geometry_data) to bake a navigation mesh.

Bakes the `navigation_mesh` with bake source geometry collected starting from the `root_node`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_navigationserver3d_method_region_create"></div>

[`RID`](class_rid.md) **region_create** ( )<div id="class_navigationserver3d_method_region_create"></div>

Creates a new region.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_navigationserver3d_method_region_get_closest_point"></div>

[`Vector3`](class_vector3.md) **region_get_closest_point** ( region: [`RID`](class_rid.md), to_point: [`Vector3`](class_vector3.md) ) const[^const]<div id="class_navigationserver3d_method_region_get_closest_point"></div>

Returns the navigation mesh surface point closest to the provided `to_point` on the navigation `region`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_navigationserver3d_method_region_get_closest_point_normal"></div>

[`Vector3`](class_vector3.md) **region_get_closest_point_normal** ( region: [`RID`](class_rid.md), to_point: [`Vector3`](class_vector3.md) ) const[^const]<div id="class_navigationserver3d_method_region_get_closest_point_normal"></div>

Returns the navigation mesh surface normal closest to the provided `to_point` on the navigation `region`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_navigationserver3d_method_region_get_closest_point_to_segment"></div>

[`Vector3`](class_vector3.md) **region_get_closest_point_to_segment** ( region: [`RID`](class_rid.md), start: [`Vector3`](class_vector3.md), end: [`Vector3`](class_vector3.md), use_collision: [`bool`](class_bool.md) = false ) const[^const]<div id="class_navigationserver3d_method_region_get_closest_point_to_segment"></div>

Returns the navigation mesh surface point closest to the provided `start` and `end` segment on the navigation `region`.

If `use_collision` is `true`, a closest point test is only done when the segment intersects with the navigation mesh surface.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_navigationserver3d_method_region_get_connection_pathway_end"></div>

[`Vector3`](class_vector3.md) **region_get_connection_pathway_end** ( region: [`RID`](class_rid.md), connection: [`int`](class_int.md) ) const[^const]<div id="class_navigationserver3d_method_region_get_connection_pathway_end"></div>

Returns the ending point of a connection door. `connection` is an index between 0 and the return value of [`region_get_connections_count`](class_navigationserver3d.md#class_navigationserver3d_method_region_get_connections_count).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_navigationserver3d_method_region_get_connection_pathway_start"></div>

[`Vector3`](class_vector3.md) **region_get_connection_pathway_start** ( region: [`RID`](class_rid.md), connection: [`int`](class_int.md) ) const[^const]<div id="class_navigationserver3d_method_region_get_connection_pathway_start"></div>

Returns the starting point of a connection door. `connection` is an index between 0 and the return value of [`region_get_connections_count`](class_navigationserver3d.md#class_navigationserver3d_method_region_get_connections_count).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_navigationserver3d_method_region_get_connections_count"></div>

[`int`](class_int.md) **region_get_connections_count** ( region: [`RID`](class_rid.md) ) const[^const]<div id="class_navigationserver3d_method_region_get_connections_count"></div>

Returns how many connections this `region` has with other regions in the map.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_navigationserver3d_method_region_get_enabled"></div>

[`bool`](class_bool.md) **region_get_enabled** ( region: [`RID`](class_rid.md) ) const[^const]<div id="class_navigationserver3d_method_region_get_enabled"></div>

Returns `true` if the specified `region` is enabled.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_navigationserver3d_method_region_get_enter_cost"></div>

[`float`](class_float.md) **region_get_enter_cost** ( region: [`RID`](class_rid.md) ) const[^const]<div id="class_navigationserver3d_method_region_get_enter_cost"></div>

Returns the enter cost of this `region`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_navigationserver3d_method_region_get_map"></div>

[`RID`](class_rid.md) **region_get_map** ( region: [`RID`](class_rid.md) ) const[^const]<div id="class_navigationserver3d_method_region_get_map"></div>

Returns the navigation map [`RID`](class_rid.md) the requested `region` is currently assigned to.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_navigationserver3d_method_region_get_navigation_layers"></div>

[`int`](class_int.md) **region_get_navigation_layers** ( region: [`RID`](class_rid.md) ) const[^const]<div id="class_navigationserver3d_method_region_get_navigation_layers"></div>

Returns the region's navigation layers.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_navigationserver3d_method_region_get_owner_id"></div>

[`int`](class_int.md) **region_get_owner_id** ( region: [`RID`](class_rid.md) ) const[^const]<div id="class_navigationserver3d_method_region_get_owner_id"></div>

Returns the `ObjectID` of the object which manages this region.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_navigationserver3d_method_region_get_random_point"></div>

[`Vector3`](class_vector3.md) **region_get_random_point** ( region: [`RID`](class_rid.md), navigation_layers: [`int`](class_int.md), uniformly: [`bool`](class_bool.md) ) const[^const]<div id="class_navigationserver3d_method_region_get_random_point"></div>

Returns a random position picked from all region polygons with matching `navigation_layers`.

If `uniformly` is `true`, all region polygons and faces are weighted by their surface area (slower).

If `uniformly` is `false`, just a random polygon and face is picked (faster).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_navigationserver3d_method_region_get_transform"></div>

[`Transform3D`](class_transform3d.md) **region_get_transform** ( region: [`RID`](class_rid.md) ) const[^const]<div id="class_navigationserver3d_method_region_get_transform"></div>

Returns the global transformation of this `region`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_navigationserver3d_method_region_get_travel_cost"></div>

[`float`](class_float.md) **region_get_travel_cost** ( region: [`RID`](class_rid.md) ) const[^const]<div id="class_navigationserver3d_method_region_get_travel_cost"></div>

Returns the travel cost of this `region`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_navigationserver3d_method_region_get_use_edge_connections"></div>

[`bool`](class_bool.md) **region_get_use_edge_connections** ( region: [`RID`](class_rid.md) ) const[^const]<div id="class_navigationserver3d_method_region_get_use_edge_connections"></div>

Returns true if the navigation `region` is set to use edge connections to connect with other navigation regions within proximity of the navigation map edge connection margin.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_navigationserver3d_method_region_owns_point"></div>

[`bool`](class_bool.md) **region_owns_point** ( region: [`RID`](class_rid.md), point: [`Vector3`](class_vector3.md) ) const[^const]<div id="class_navigationserver3d_method_region_owns_point"></div>

Returns `true` if the provided `point` in world space is currently owned by the provided navigation `region`. Owned in this context means that one of the region's navigation mesh polygon faces has a possible position at the closest distance to this point compared to all other navigation meshes from other navigation regions that are also registered on the navigation map of the provided region.

If multiple navigation meshes have positions at equal distance the navigation region whose polygons are processed first wins the ownership. Polygons are processed in the same order that navigation regions were registered on the NavigationServer.

 **Note:** If navigation meshes from different navigation regions overlap (which should be avoided in general) the result might not be what is expected.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_navigationserver3d_method_region_set_enabled"></div>

`void` **region_set_enabled** ( region: [`RID`](class_rid.md), enabled: [`bool`](class_bool.md) )<div id="class_navigationserver3d_method_region_set_enabled"></div>

If `enabled` is `true`, the specified `region` will contribute to its current navigation map.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_navigationserver3d_method_region_set_enter_cost"></div>

`void` **region_set_enter_cost** ( region: [`RID`](class_rid.md), enter_cost: [`float`](class_float.md) )<div id="class_navigationserver3d_method_region_set_enter_cost"></div>

Sets the `enter_cost` for this `region`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_navigationserver3d_method_region_set_map"></div>

`void` **region_set_map** ( region: [`RID`](class_rid.md), map: [`RID`](class_rid.md) )<div id="class_navigationserver3d_method_region_set_map"></div>

Sets the map for the region.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_navigationserver3d_method_region_set_navigation_layers"></div>

`void` **region_set_navigation_layers** ( region: [`RID`](class_rid.md), navigation_layers: [`int`](class_int.md) )<div id="class_navigationserver3d_method_region_set_navigation_layers"></div>

Set the region's navigation layers. This allows selecting regions from a path request (when using [`map_get_path`](class_navigationserver3d.md#class_navigationserver3d_method_map_get_path)).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_navigationserver3d_method_region_set_navigation_mesh"></div>

`void` **region_set_navigation_mesh** ( region: [`RID`](class_rid.md), navigation_mesh: [`NavigationMesh`](class_navigationmesh.md) )<div id="class_navigationserver3d_method_region_set_navigation_mesh"></div>

Sets the navigation mesh for the region.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_navigationserver3d_method_region_set_owner_id"></div>

`void` **region_set_owner_id** ( region: [`RID`](class_rid.md), owner_id: [`int`](class_int.md) )<div id="class_navigationserver3d_method_region_set_owner_id"></div>

Set the `ObjectID` of the object which manages this region.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_navigationserver3d_method_region_set_transform"></div>

`void` **region_set_transform** ( region: [`RID`](class_rid.md), transform: [`Transform3D`](class_transform3d.md) )<div id="class_navigationserver3d_method_region_set_transform"></div>

Sets the global transformation for the region.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_navigationserver3d_method_region_set_travel_cost"></div>

`void` **region_set_travel_cost** ( region: [`RID`](class_rid.md), travel_cost: [`float`](class_float.md) )<div id="class_navigationserver3d_method_region_set_travel_cost"></div>

Sets the `travel_cost` for this `region`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_navigationserver3d_method_region_set_use_edge_connections"></div>

`void` **region_set_use_edge_connections** ( region: [`RID`](class_rid.md), enabled: [`bool`](class_bool.md) )<div id="class_navigationserver3d_method_region_set_use_edge_connections"></div>

If `enabled` is `true`, the navigation `region` will use edge connections to connect with other navigation regions within proximity of the navigation map edge connection margin.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_navigationserver3d_method_set_active"></div>

`void` **set_active** ( active: [`bool`](class_bool.md) )<div id="class_navigationserver3d_method_set_active"></div>

Control activation of this server.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_navigationserver3d_method_set_debug_enabled"></div>

`void` **set_debug_enabled** ( enabled: [`bool`](class_bool.md) )<div id="class_navigationserver3d_method_set_debug_enabled"></div>

If `true` enables debug mode on the NavigationServer.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_navigationserver3d_method_simplify_path"></div>

[`PackedVector3Array`](class_packedvector3array.md) **simplify_path** ( path: [`PackedVector3Array`](class_packedvector3array.md), epsilon: [`float`](class_float.md) )<div id="class_navigationserver3d_method_simplify_path"></div>

Returns a simplified version of `path` with less critical path points removed. The simplification amount is in worlds units and controlled by `epsilon`. The simplification uses a variant of Ramer-Douglas-Peucker algorithm for curve point decimation.

Path simplification can be helpful to mitigate various path following issues that can arise with certain agent types and script behaviors. E.g. "steering" agents or avoidance in "open fields".

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_navigationserver3d_method_source_geometry_parser_create"></div>

[`RID`](class_rid.md) **source_geometry_parser_create** ( )<div id="class_navigationserver3d_method_source_geometry_parser_create"></div>

Creates a new source geometry parser. If a [`Callable`](class_callable.md) is set for the parser with [`source_geometry_parser_set_callback`](class_navigationserver3d.md#class_navigationserver3d_method_source_geometry_parser_set_callback) the callback will be called for every single node that gets parsed whenever [`parse_source_geometry_data`](class_navigationserver3d.md#class_navigationserver3d_method_parse_source_geometry_data) is used.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_navigationserver3d_method_source_geometry_parser_set_callback"></div>

`void` **source_geometry_parser_set_callback** ( parser: [`RID`](class_rid.md), callback: [`Callable`](class_callable.md) )<div id="class_navigationserver3d_method_source_geometry_parser_set_callback"></div>

Sets the `callback` [`Callable`](class_callable.md) for the specific source geometry `parser`. The [`Callable`](class_callable.md) will receive a call with the following parameters:

- `navigation_mesh` - The [`NavigationMesh`](class_navigationmesh.md) reference used to define the parse settings. Do NOT edit or add directly to the navigation mesh.

- `source_geometry_data` - The [`NavigationMeshSourceGeometryData3D`](class_navigationmeshsourcegeometrydata3d.md) reference. Add custom source geometry for navigation mesh baking to this object.

- `node` - The [`Node`](class_node.md) that is parsed.

[^virtual]: 本方法通常需要用户覆盖才能生效。
[^const]: 本方法无副作用，不会修改该实例的任何成员变量。
[^vararg]: 本方法除了能接受在此处描述的参数外，还能够继续接受任意数量的参数。
[^constructor]: 本方法用于构造某个类型。
[^static]: 调用本方法无需实例，可直接使用类名进行调用。
[^operator]: 本方法描述的是使用本类型作为左操作数的有效运算符。
[^bitfield]: 这个值是由下列位标志构成位掩码的整数。
[^void]: 无返回值。
