<!-- ⚠ 请勿编辑本文件 ⚠ -->
<!-- 本文档使用脚本从 WeDot 引擎源码仓库生成。 -->
<!-- 生成脚本：https://github.com/WeDot-Engine/WeDot/tree/4.3/doc/tools/make_md.py； -->
<!-- 原文件：https://github.com/WeDot-Engine/WeDot/tree/4.3/doc/classes/NavigationMesh.xml。 -->

<div id="_class_navigationmesh"></div>

# NavigationMesh

**实验性：** This class may be changed or removed in future versions.

**继承：** [`Resource`](class_resource.md) **<** [`RefCounted`](class_refcounted.md) **<** [`Object`](class_object.md)

A navigation mesh that defines traversable areas and obstacles.

## 描述

A navigation mesh is a collection of polygons that define which areas of an environment are traversable to aid agents in pathfinding through complicated spaces.

## 属性

| [`float`](class_float.md)                                       | [`agent_height`](#class_navigationmesh_property_agent_height)                                         | ``1.5``                             |
| [`float`](class_float.md)                                       | [`agent_max_climb`](#class_navigationmesh_property_agent_max_climb)                                   | ``0.25``                            |
| [`float`](class_float.md)                                       | [`agent_max_slope`](#class_navigationmesh_property_agent_max_slope)                                   | ``45.0``                            |
| [`float`](class_float.md)                                       | [`agent_radius`](#class_navigationmesh_property_agent_radius)                                         | ``0.5``                             |
| [`float`](class_float.md)                                       | [`border_size`](#class_navigationmesh_property_border_size)                                           | ``0.0``                             |
| [`float`](class_float.md)                                       | [`cell_height`](#class_navigationmesh_property_cell_height)                                           | ``0.25``                            |
| [`float`](class_float.md)                                       | [`cell_size`](#class_navigationmesh_property_cell_size)                                               | ``0.25``                            |
| [`float`](class_float.md)                                       | [`detail_sample_distance`](#class_navigationmesh_property_detail_sample_distance)                     | ``6.0``                             |
| [`float`](class_float.md)                                       | [`detail_sample_max_error`](#class_navigationmesh_property_detail_sample_max_error)                   | ``1.0``                             |
| [`float`](class_float.md)                                       | [`edge_max_error`](#class_navigationmesh_property_edge_max_error)                                     | ``1.3``                             |
| [`float`](class_float.md)                                       | [`edge_max_length`](#class_navigationmesh_property_edge_max_length)                                   | ``0.0``                             |
| [`AABB`](class_aabb.md)                                         | [`filter_baking_aabb`](#class_navigationmesh_property_filter_baking_aabb)                             | ``AABB(0, 0, 0, 0, 0, 0)``          |
| [`Vector3`](class_vector3.md)                                   | [`filter_baking_aabb_offset`](#class_navigationmesh_property_filter_baking_aabb_offset)               | ``Vector3(0, 0, 0)``                |
| [`bool`](class_bool.md)                                         | [`filter_ledge_spans`](#class_navigationmesh_property_filter_ledge_spans)                             | ``false``                           |
| [`bool`](class_bool.md)                                         | [`filter_low_hanging_obstacles`](#class_navigationmesh_property_filter_low_hanging_obstacles)         | ``false``                           |
| [`bool`](class_bool.md)                                         | [`filter_walkable_low_height_spans`](#class_navigationmesh_property_filter_walkable_low_height_spans) | ``false``                           |
| [`int`](class_int.md)                                           | [`geometry_collision_mask`](#class_navigationmesh_property_geometry_collision_mask)                   | ``4294967295``                      |
| [ParsedGeometryType](#enum_navigationmesh_parsedgeometrytype)   | [`geometry_parsed_geometry_type`](#class_navigationmesh_property_geometry_parsed_geometry_type)       | ``0``                               |
| [SourceGeometryMode](#enum_navigationmesh_sourcegeometrymode)   | [`geometry_source_geometry_mode`](#class_navigationmesh_property_geometry_source_geometry_mode)       | ``0``                               |
| [`StringName`](class_stringname.md)                             | [`geometry_source_group_name`](#class_navigationmesh_property_geometry_source_group_name)             | ``&"navigation_mesh_source_group"`` |
| [`float`](class_float.md)                                       | [`region_merge_size`](#class_navigationmesh_property_region_merge_size)                               | ``20.0``                            |
| [`float`](class_float.md)                                       | [`region_min_size`](#class_navigationmesh_property_region_min_size)                                   | ``2.0``                             |
| [SamplePartitionType](#enum_navigationmesh_samplepartitiontype) | [`sample_partition_type`](#class_navigationmesh_property_sample_partition_type)                       | ``0``                               |
| [`float`](class_float.md)                                       | [`vertices_per_polygon`](#class_navigationmesh_property_vertices_per_polygon)                         | ``6.0``                             |

## 方法

| `void`                                              | [`add_polygon`](#class_navigationmesh_method_add_polygon) ( polygon: [`PackedInt32Array`](class_packedint32array.md) )                                      |
| `void`                                              | [`clear`](#class_navigationmesh_method_clear) ( )                                                                                                           |
| `void`                                              | [`clear_polygons`](#class_navigationmesh_method_clear_polygons) ( )                                                                                         |
| `void`                                              | [`create_from_mesh`](#class_navigationmesh_method_create_from_mesh) ( mesh: [`Mesh`](class_mesh.md) )                                                       |
| [`bool`](class_bool.md)                             | [`get_collision_mask_value`](#class_navigationmesh_method_get_collision_mask_value) ( layer_number: [`int`](class_int.md) ) const[^const]                   |
| [`PackedInt32Array`](class_packedint32array.md)     | [`get_polygon`](#class_navigationmesh_method_get_polygon) ( idx: [`int`](class_int.md) )                                                                    |
| [`int`](class_int.md)                               | [`get_polygon_count`](#class_navigationmesh_method_get_polygon_count) ( ) const[^const]                                                                     |
| [`PackedVector3Array`](class_packedvector3array.md) | [`get_vertices`](#class_navigationmesh_method_get_vertices) ( ) const[^const]                                                                               |
| `void`                                              | [`set_collision_mask_value`](#class_navigationmesh_method_set_collision_mask_value) ( layer_number: [`int`](class_int.md), value: [`bool`](class_bool.md) ) |
| `void`                                              | [`set_vertices`](#class_navigationmesh_method_set_vertices) ( vertices: [`PackedVector3Array`](class_packedvector3array.md) )                               |

<!-- rst-class:: classref-section-separator -->

---

## 枚举

<div id="_class_enum_navigationmesh_samplepartitiontype"></div>

enum **SamplePartitionType**: <div id="enum_navigationmesh_samplepartitiontype"></div>

<div id="_class_navigationmesh_constant_sample_partition_watershed"></div>

[SamplePartitionType](#enum_navigationmesh_samplepartitiontype) **SAMPLE_PARTITION_WATERSHED** = ``0``

Watershed partitioning. Generally the best choice if you precompute the navigation mesh, use this if you have large open areas.

<div id="_class_navigationmesh_constant_sample_partition_monotone"></div>

[SamplePartitionType](#enum_navigationmesh_samplepartitiontype) **SAMPLE_PARTITION_MONOTONE** = ``1``

Monotone partitioning. Use this if you want fast navigation mesh generation.

<div id="_class_navigationmesh_constant_sample_partition_layers"></div>

[SamplePartitionType](#enum_navigationmesh_samplepartitiontype) **SAMPLE_PARTITION_LAYERS** = ``2``

Layer partitioning. Good choice to use for tiled navigation mesh with medium and small sized tiles.

<div id="_class_navigationmesh_constant_sample_partition_max"></div>

[SamplePartitionType](#enum_navigationmesh_samplepartitiontype) **SAMPLE_PARTITION_MAX** = ``3``

Represents the size of the [SamplePartitionType](#enum_navigationmesh_samplepartitiontype) enum.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_enum_navigationmesh_parsedgeometrytype"></div>

enum **ParsedGeometryType**: <div id="enum_navigationmesh_parsedgeometrytype"></div>

<div id="_class_navigationmesh_constant_parsed_geometry_mesh_instances"></div>

[ParsedGeometryType](#enum_navigationmesh_parsedgeometrytype) **PARSED_GEOMETRY_MESH_INSTANCES** = ``0``

Parses mesh instances as geometry. This includes [`MeshInstance3D`](class_meshinstance3d.md), [`CSGShape3D`](class_csgshape3d.md), and [`GridMap`](class_gridmap.md) nodes.

<div id="_class_navigationmesh_constant_parsed_geometry_static_colliders"></div>

[ParsedGeometryType](#enum_navigationmesh_parsedgeometrytype) **PARSED_GEOMETRY_STATIC_COLLIDERS** = ``1``

Parses [`StaticBody3D`](class_staticbody3d.md) colliders as geometry. The collider should be in any of the layers specified by [`geometry_collision_mask`](#class_navigationmesh_property_geometry_collision_mask).

<div id="_class_navigationmesh_constant_parsed_geometry_both"></div>

[ParsedGeometryType](#enum_navigationmesh_parsedgeometrytype) **PARSED_GEOMETRY_BOTH** = ``2``

Both [`PARSED_GEOMETRY_MESH_INSTANCES`](#class_navigationmesh_constant_parsed_geometry_mesh_instances) and [`PARSED_GEOMETRY_STATIC_COLLIDERS`](#class_navigationmesh_constant_parsed_geometry_static_colliders).

<div id="_class_navigationmesh_constant_parsed_geometry_max"></div>

[ParsedGeometryType](#enum_navigationmesh_parsedgeometrytype) **PARSED_GEOMETRY_MAX** = ``3``

Represents the size of the [ParsedGeometryType](#enum_navigationmesh_parsedgeometrytype) enum.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_enum_navigationmesh_sourcegeometrymode"></div>

enum **SourceGeometryMode**: <div id="enum_navigationmesh_sourcegeometrymode"></div>

<div id="_class_navigationmesh_constant_source_geometry_root_node_children"></div>

[SourceGeometryMode](#enum_navigationmesh_sourcegeometrymode) **SOURCE_GEOMETRY_ROOT_NODE_CHILDREN** = ``0``

Scans the child nodes of the root node recursively for geometry.

<div id="_class_navigationmesh_constant_source_geometry_groups_with_children"></div>

[SourceGeometryMode](#enum_navigationmesh_sourcegeometrymode) **SOURCE_GEOMETRY_GROUPS_WITH_CHILDREN** = ``1``

Scans nodes in a group and their child nodes recursively for geometry. The group is specified by [`geometry_source_group_name`](#class_navigationmesh_property_geometry_source_group_name).

<div id="_class_navigationmesh_constant_source_geometry_groups_explicit"></div>

[SourceGeometryMode](#enum_navigationmesh_sourcegeometrymode) **SOURCE_GEOMETRY_GROUPS_EXPLICIT** = ``2``

Uses nodes in a group for geometry. The group is specified by [`geometry_source_group_name`](#class_navigationmesh_property_geometry_source_group_name).

<div id="_class_navigationmesh_constant_source_geometry_max"></div>

[SourceGeometryMode](#enum_navigationmesh_sourcegeometrymode) **SOURCE_GEOMETRY_MAX** = ``3``

Represents the size of the [SourceGeometryMode](#enum_navigationmesh_sourcegeometrymode) enum.

<!-- rst-class:: classref-section-separator -->

---

## 属性说明

<div id="_class_navigationmesh_property_agent_height"></div>

[`float`](class_float.md) **agent_height** = ``1.5`` <div id="class_navigationmesh_property_agent_height"></div>

- `void` **set_agent_height** ( value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_agent_height** ( )

The minimum floor to ceiling height that will still allow the floor area to be considered walkable.

 **Note:** While baking, this value will be rounded up to the nearest multiple of [`cell_height`](#class_navigationmesh_property_cell_height).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_navigationmesh_property_agent_max_climb"></div>

[`float`](class_float.md) **agent_max_climb** = ``0.25`` <div id="class_navigationmesh_property_agent_max_climb"></div>

- `void` **set_agent_max_climb** ( value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_agent_max_climb** ( )

The minimum ledge height that is considered to still be traversable.

 **Note:** While baking, this value will be rounded down to the nearest multiple of [`cell_height`](#class_navigationmesh_property_cell_height).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_navigationmesh_property_agent_max_slope"></div>

[`float`](class_float.md) **agent_max_slope** = ``45.0`` <div id="class_navigationmesh_property_agent_max_slope"></div>

- `void` **set_agent_max_slope** ( value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_agent_max_slope** ( )

The maximum slope that is considered walkable, in degrees.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_navigationmesh_property_agent_radius"></div>

[`float`](class_float.md) **agent_radius** = ``0.5`` <div id="class_navigationmesh_property_agent_radius"></div>

- `void` **set_agent_radius** ( value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_agent_radius** ( )

The distance to erode/shrink the walkable area of the heightfield away from obstructions.

 **Note:** While baking, this value will be rounded up to the nearest multiple of [`cell_size`](#class_navigationmesh_property_cell_size).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_navigationmesh_property_border_size"></div>

[`float`](class_float.md) **border_size** = ``0.0`` <div id="class_navigationmesh_property_border_size"></div>

- `void` **set_border_size** ( value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_border_size** ( )

The size of the non-navigable border around the bake bounding area.

In conjunction with the [`filter_baking_aabb`](#class_navigationmesh_property_filter_baking_aabb) and a [`edge_max_error`](#class_navigationmesh_property_edge_max_error) value at `1.0` or below the border size can be used to bake tile aligned navigation meshes without the tile edges being shrunk by [`agent_radius`](#class_navigationmesh_property_agent_radius).

 **Note:** While baking and not zero, this value will be rounded up to the nearest multiple of [`cell_size`](#class_navigationmesh_property_cell_size).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_navigationmesh_property_cell_height"></div>

[`float`](class_float.md) **cell_height** = ``0.25`` <div id="class_navigationmesh_property_cell_height"></div>

- `void` **set_cell_height** ( value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_cell_height** ( )

The cell height used to rasterize the navigation mesh vertices on the Y axis. Must match with the cell height on the navigation map.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_navigationmesh_property_cell_size"></div>

[`float`](class_float.md) **cell_size** = ``0.25`` <div id="class_navigationmesh_property_cell_size"></div>

- `void` **set_cell_size** ( value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_cell_size** ( )

The cell size used to rasterize the navigation mesh vertices on the XZ plane. Must match with the cell size on the navigation map.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_navigationmesh_property_detail_sample_distance"></div>

[`float`](class_float.md) **detail_sample_distance** = ``6.0`` <div id="class_navigationmesh_property_detail_sample_distance"></div>

- `void` **set_detail_sample_distance** ( value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_detail_sample_distance** ( )

The sampling distance to use when generating the detail mesh, in cell unit.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_navigationmesh_property_detail_sample_max_error"></div>

[`float`](class_float.md) **detail_sample_max_error** = ``1.0`` <div id="class_navigationmesh_property_detail_sample_max_error"></div>

- `void` **set_detail_sample_max_error** ( value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_detail_sample_max_error** ( )

The maximum distance the detail mesh surface should deviate from heightfield, in cell unit.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_navigationmesh_property_edge_max_error"></div>

[`float`](class_float.md) **edge_max_error** = ``1.3`` <div id="class_navigationmesh_property_edge_max_error"></div>

- `void` **set_edge_max_error** ( value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_edge_max_error** ( )

The maximum distance a simplified contour's border edges should deviate the original raw contour.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_navigationmesh_property_edge_max_length"></div>

[`float`](class_float.md) **edge_max_length** = ``0.0`` <div id="class_navigationmesh_property_edge_max_length"></div>

- `void` **set_edge_max_length** ( value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_edge_max_length** ( )

The maximum allowed length for contour edges along the border of the mesh. A value of `0.0` disables this feature.

 **Note:** While baking, this value will be rounded up to the nearest multiple of [`cell_size`](#class_navigationmesh_property_cell_size).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_navigationmesh_property_filter_baking_aabb"></div>

[`AABB`](class_aabb.md) **filter_baking_aabb** = ``AABB(0, 0, 0, 0, 0, 0)`` <div id="class_navigationmesh_property_filter_baking_aabb"></div>

- `void` **set_filter_baking_aabb** ( value: [`AABB`](class_aabb.md) )
- [`AABB`](class_aabb.md) **get_filter_baking_aabb** ( )

If the baking [`AABB`](class_aabb.md) has a volume the navigation mesh baking will be restricted to its enclosing area.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_navigationmesh_property_filter_baking_aabb_offset"></div>

[`Vector3`](class_vector3.md) **filter_baking_aabb_offset** = ``Vector3(0, 0, 0)`` <div id="class_navigationmesh_property_filter_baking_aabb_offset"></div>

- `void` **set_filter_baking_aabb_offset** ( value: [`Vector3`](class_vector3.md) )
- [`Vector3`](class_vector3.md) **get_filter_baking_aabb_offset** ( )

The position offset applied to the [`filter_baking_aabb`](#class_navigationmesh_property_filter_baking_aabb) [`AABB`](class_aabb.md).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_navigationmesh_property_filter_ledge_spans"></div>

[`bool`](class_bool.md) **filter_ledge_spans** = ``false`` <div id="class_navigationmesh_property_filter_ledge_spans"></div>

- `void` **set_filter_ledge_spans** ( value: [`bool`](class_bool.md) )
- [`bool`](class_bool.md) **get_filter_ledge_spans** ( )

If `true`, marks spans that are ledges as non-walkable.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_navigationmesh_property_filter_low_hanging_obstacles"></div>

[`bool`](class_bool.md) **filter_low_hanging_obstacles** = ``false`` <div id="class_navigationmesh_property_filter_low_hanging_obstacles"></div>

- `void` **set_filter_low_hanging_obstacles** ( value: [`bool`](class_bool.md) )
- [`bool`](class_bool.md) **get_filter_low_hanging_obstacles** ( )

If `true`, marks non-walkable spans as walkable if their maximum is within [`agent_max_climb`](#class_navigationmesh_property_agent_max_climb) of a walkable neighbor.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_navigationmesh_property_filter_walkable_low_height_spans"></div>

[`bool`](class_bool.md) **filter_walkable_low_height_spans** = ``false`` <div id="class_navigationmesh_property_filter_walkable_low_height_spans"></div>

- `void` **set_filter_walkable_low_height_spans** ( value: [`bool`](class_bool.md) )
- [`bool`](class_bool.md) **get_filter_walkable_low_height_spans** ( )

If `true`, marks walkable spans as not walkable if the clearance above the span is less than [`agent_height`](#class_navigationmesh_property_agent_height).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_navigationmesh_property_geometry_collision_mask"></div>

[`int`](class_int.md) **geometry_collision_mask** = ``4294967295`` <div id="class_navigationmesh_property_geometry_collision_mask"></div>

- `void` **set_collision_mask** ( value: [`int`](class_int.md) )
- [`int`](class_int.md) **get_collision_mask** ( )

The physics layers to scan for static colliders.

Only used when [`geometry_parsed_geometry_type`](#class_navigationmesh_property_geometry_parsed_geometry_type) is [`PARSED_GEOMETRY_STATIC_COLLIDERS`](#class_navigationmesh_constant_parsed_geometry_static_colliders) or [`PARSED_GEOMETRY_BOTH`](#class_navigationmesh_constant_parsed_geometry_both).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_navigationmesh_property_geometry_parsed_geometry_type"></div>

[ParsedGeometryType](#enum_navigationmesh_parsedgeometrytype) **geometry_parsed_geometry_type** = ``0`` <div id="class_navigationmesh_property_geometry_parsed_geometry_type"></div>

- `void` **set_parsed_geometry_type** ( value: [ParsedGeometryType](#enum_navigationmesh_parsedgeometrytype) )
- [ParsedGeometryType](#enum_navigationmesh_parsedgeometrytype) **get_parsed_geometry_type** ( )

Determines which type of nodes will be parsed as geometry. See [ParsedGeometryType](#enum_navigationmesh_parsedgeometrytype) for possible values.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_navigationmesh_property_geometry_source_geometry_mode"></div>

[SourceGeometryMode](#enum_navigationmesh_sourcegeometrymode) **geometry_source_geometry_mode** = ``0`` <div id="class_navigationmesh_property_geometry_source_geometry_mode"></div>

- `void` **set_source_geometry_mode** ( value: [SourceGeometryMode](#enum_navigationmesh_sourcegeometrymode) )
- [SourceGeometryMode](#enum_navigationmesh_sourcegeometrymode) **get_source_geometry_mode** ( )

The source of the geometry used when baking. See [SourceGeometryMode](#enum_navigationmesh_sourcegeometrymode) for possible values.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_navigationmesh_property_geometry_source_group_name"></div>

[`StringName`](class_stringname.md) **geometry_source_group_name** = ``&"navigation_mesh_source_group"`` <div id="class_navigationmesh_property_geometry_source_group_name"></div>

- `void` **set_source_group_name** ( value: [`StringName`](class_stringname.md) )
- [`StringName`](class_stringname.md) **get_source_group_name** ( )

The name of the group to scan for geometry.

Only used when [`geometry_source_geometry_mode`](#class_navigationmesh_property_geometry_source_geometry_mode) is [`SOURCE_GEOMETRY_GROUPS_WITH_CHILDREN`](#class_navigationmesh_constant_source_geometry_groups_with_children) or [`SOURCE_GEOMETRY_GROUPS_EXPLICIT`](#class_navigationmesh_constant_source_geometry_groups_explicit).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_navigationmesh_property_region_merge_size"></div>

[`float`](class_float.md) **region_merge_size** = ``20.0`` <div id="class_navigationmesh_property_region_merge_size"></div>

- `void` **set_region_merge_size** ( value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_region_merge_size** ( )

Any regions with a size smaller than this will be merged with larger regions if possible.

 **Note:** This value will be squared to calculate the number of cells. For example, a value of 20 will set the number of cells to 400.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_navigationmesh_property_region_min_size"></div>

[`float`](class_float.md) **region_min_size** = ``2.0`` <div id="class_navigationmesh_property_region_min_size"></div>

- `void` **set_region_min_size** ( value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_region_min_size** ( )

The minimum size of a region for it to be created.

 **Note:** This value will be squared to calculate the minimum number of cells allowed to form isolated island areas. For example, a value of 8 will set the number of cells to 64.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_navigationmesh_property_sample_partition_type"></div>

[SamplePartitionType](#enum_navigationmesh_samplepartitiontype) **sample_partition_type** = ``0`` <div id="class_navigationmesh_property_sample_partition_type"></div>

- `void` **set_sample_partition_type** ( value: [SamplePartitionType](#enum_navigationmesh_samplepartitiontype) )
- [SamplePartitionType](#enum_navigationmesh_samplepartitiontype) **get_sample_partition_type** ( )

Partitioning algorithm for creating the navigation mesh polys. See [SamplePartitionType](#enum_navigationmesh_samplepartitiontype) for possible values.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_navigationmesh_property_vertices_per_polygon"></div>

[`float`](class_float.md) **vertices_per_polygon** = ``6.0`` <div id="class_navigationmesh_property_vertices_per_polygon"></div>

- `void` **set_vertices_per_polygon** ( value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_vertices_per_polygon** ( )

The maximum number of vertices allowed for polygons generated during the contour to polygon conversion process.

<!-- rst-class:: classref-section-separator -->

---

## 方法说明

<div id="_class_navigationmesh_method_add_polygon"></div>

`void` **add_polygon** ( polygon: [`PackedInt32Array`](class_packedint32array.md) )<div id="class_navigationmesh_method_add_polygon"></div>

Adds a polygon using the indices of the vertices you get when calling [`get_vertices`](#class_navigationmesh_method_get_vertices).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_navigationmesh_method_clear"></div>

`void` **clear** ( )<div id="class_navigationmesh_method_clear"></div>

Clears the internal arrays for vertices and polygon indices.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_navigationmesh_method_clear_polygons"></div>

`void` **clear_polygons** ( )<div id="class_navigationmesh_method_clear_polygons"></div>

Clears the array of polygons, but it doesn't clear the array of vertices.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_navigationmesh_method_create_from_mesh"></div>

`void` **create_from_mesh** ( mesh: [`Mesh`](class_mesh.md) )<div id="class_navigationmesh_method_create_from_mesh"></div>

Initializes the navigation mesh by setting the vertices and indices according to a [`Mesh`](class_mesh.md).

 **Note:** The given `mesh` must be of type [`Mesh.PRIMITIVE_TRIANGLES`](#class_mesh_constant_primitive_triangles) and have an index array.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_navigationmesh_method_get_collision_mask_value"></div>

[`bool`](class_bool.md) **get_collision_mask_value** ( layer_number: [`int`](class_int.md) ) const[^const]<div id="class_navigationmesh_method_get_collision_mask_value"></div>

Returns whether or not the specified layer of the [`geometry_collision_mask`](#class_navigationmesh_property_geometry_collision_mask) is enabled, given a `layer_number` between 1 and 32.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_navigationmesh_method_get_polygon"></div>

[`PackedInt32Array`](class_packedint32array.md) **get_polygon** ( idx: [`int`](class_int.md) )<div id="class_navigationmesh_method_get_polygon"></div>

Returns a [`PackedInt32Array`](class_packedint32array.md) containing the indices of the vertices of a created polygon.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_navigationmesh_method_get_polygon_count"></div>

[`int`](class_int.md) **get_polygon_count** ( ) const[^const]<div id="class_navigationmesh_method_get_polygon_count"></div>

Returns the number of polygons in the navigation mesh.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_navigationmesh_method_get_vertices"></div>

[`PackedVector3Array`](class_packedvector3array.md) **get_vertices** ( ) const[^const]<div id="class_navigationmesh_method_get_vertices"></div>

Returns a [`PackedVector3Array`](class_packedvector3array.md) containing all the vertices being used to create the polygons.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_navigationmesh_method_set_collision_mask_value"></div>

`void` **set_collision_mask_value** ( layer_number: [`int`](class_int.md), value: [`bool`](class_bool.md) )<div id="class_navigationmesh_method_set_collision_mask_value"></div>

Based on `value`, enables or disables the specified layer in the [`geometry_collision_mask`](#class_navigationmesh_property_geometry_collision_mask), given a `layer_number` between 1 and 32.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_navigationmesh_method_set_vertices"></div>

`void` **set_vertices** ( vertices: [`PackedVector3Array`](class_packedvector3array.md) )<div id="class_navigationmesh_method_set_vertices"></div>

Sets the vertices that can be then indexed to create polygons with the [`add_polygon`](#class_navigationmesh_method_add_polygon) method.

[^virtual]: 本方法通常需要用户覆盖才能生效。
[^const]: 本方法无副作用，不会修改该实例的任何成员变量。
[^vararg]: 本方法除了能接受在此处描述的参数外，还能够继续接受任意数量的参数。
[^constructor]: 本方法用于构造某个类型。
[^static]: 调用本方法无需实例，可直接使用类名进行调用。
[^operator]: 本方法描述的是使用本类型作为左操作数的有效运算符。
[^bitfield]: 这个值是由下列位标志构成位掩码的整数。
[^void]: 无返回值。
