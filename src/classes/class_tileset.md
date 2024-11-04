<!-- ⚠ 请勿编辑本文件 ⚠ -->
<!-- 本文档使用脚本从 WeDot 引擎源码仓库生成。 -->
<!-- 生成脚本：https://github.com/WeDot-Engine/WeDot/tree/4.3/doc/tools/make_md.py； -->
<!-- 原文件：https://github.com/WeDot-Engine/WeDot/tree/4.3/doc/classes/TileSet.xml。 -->

<div id="_class_tileset"></div>

# TileSet

**继承：** [`Resource`](class_resource.md) **<** [`RefCounted`](class_refcounted.md) **<** [`Object`](class_object.md)

Tile library for tilemaps.

## 描述

A TileSet is a library of tiles for a [`TileMap`](class_tilemap.md). A TileSet handles a list of [`TileSetSource`](class_tilesetsource.md), each of them storing a set of tiles.

Tiles can either be from a [`TileSetAtlasSource`](class_tilesetatlassource.md), which renders tiles out of a texture with support for physics, navigation, etc., or from a [`TileSetScenesCollectionSource`](class_tilesetscenescollectionsource.md), which exposes scene-based tiles.

Tiles are referenced by using three IDs: their source ID, their atlas coordinates ID, and their alternative tile ID.

A TileSet can be configured so that its tiles expose more or fewer properties. To do so, the TileSet resources use property layers, which you can add or remove depending on your needs.

For example, adding a physics layer allows giving collision shapes to your tiles. Each layer has dedicated properties (physics layer and mask), so you may add several TileSet physics layers for each type of collision you need.

See the functions to add new layers for more information.

## 属性

| [TileLayout](#enum_tileset_tilelayout)         | [`tile_layout`](#class_tileset_property_tile_layout)           | ``0``                |
| [TileOffsetAxis](#enum_tileset_tileoffsetaxis) | [`tile_offset_axis`](#class_tileset_property_tile_offset_axis) | ``0``                |
| [TileShape](#enum_tileset_tileshape)           | [`tile_shape`](#class_tileset_property_tile_shape)             | ``0``                |
| [`Vector2i`](class_vector2i.md)                | [`tile_size`](#class_tileset_property_tile_size)               | ``Vector2i(16, 16)`` |
| [`bool`](class_bool.md)                        | [`uv_clipping`](#class_tileset_property_uv_clipping)           | ``false``            |

## 方法

| `void`                                          | [`add_custom_data_layer`](#class_tileset_method_add_custom_data_layer) ( to_position: [`int`](class_int.md) = -1 )                                                                                                                                                                                                                              |
| `void`                                          | [`add_navigation_layer`](#class_tileset_method_add_navigation_layer) ( to_position: [`int`](class_int.md) = -1 )                                                                                                                                                                                                                                |
| `void`                                          | [`add_occlusion_layer`](#class_tileset_method_add_occlusion_layer) ( to_position: [`int`](class_int.md) = -1 )                                                                                                                                                                                                                                  |
| [`int`](class_int.md)                           | [`add_pattern`](#class_tileset_method_add_pattern) ( pattern: [`TileMapPattern`](class_tilemappattern.md), index: [`int`](class_int.md) = -1 )                                                                                                                                                                                                  |
| `void`                                          | [`add_physics_layer`](#class_tileset_method_add_physics_layer) ( to_position: [`int`](class_int.md) = -1 )                                                                                                                                                                                                                                      |
| [`int`](class_int.md)                           | [`add_source`](#class_tileset_method_add_source) ( source: [`TileSetSource`](class_tilesetsource.md), atlas_source_id_override: [`int`](class_int.md) = -1 )                                                                                                                                                                                    |
| `void`                                          | [`add_terrain`](#class_tileset_method_add_terrain) ( terrain_set: [`int`](class_int.md), to_position: [`int`](class_int.md) = -1 )                                                                                                                                                                                                              |
| `void`                                          | [`add_terrain_set`](#class_tileset_method_add_terrain_set) ( to_position: [`int`](class_int.md) = -1 )                                                                                                                                                                                                                                          |
| `void`                                          | [`cleanup_invalid_tile_proxies`](#class_tileset_method_cleanup_invalid_tile_proxies) ( )                                                                                                                                                                                                                                                        |
| `void`                                          | [`clear_tile_proxies`](#class_tileset_method_clear_tile_proxies) ( )                                                                                                                                                                                                                                                                            |
| [`Array`](class_array.md)                       | [`get_alternative_level_tile_proxy`](#class_tileset_method_get_alternative_level_tile_proxy) ( source_from: [`int`](class_int.md), coords_from: [`Vector2i`](class_vector2i.md), alternative_from: [`int`](class_int.md) )                                                                                                                      |
| [`Array`](class_array.md)                       | [`get_coords_level_tile_proxy`](#class_tileset_method_get_coords_level_tile_proxy) ( source_from: [`int`](class_int.md), coords_from: [`Vector2i`](class_vector2i.md) )                                                                                                                                                                         |
| [`int`](class_int.md)                           | [`get_custom_data_layer_by_name`](#class_tileset_method_get_custom_data_layer_by_name) ( layer_name: [`String`](class_string.md) ) const[^const]                                                                                                                                                                                                |
| [`String`](class_string.md)                     | [`get_custom_data_layer_name`](#class_tileset_method_get_custom_data_layer_name) ( layer_index: [`int`](class_int.md) ) const[^const]                                                                                                                                                                                                           |
| [Variant.Type](#enum_@globalscope_variant.type) | [`get_custom_data_layer_type`](#class_tileset_method_get_custom_data_layer_type) ( layer_index: [`int`](class_int.md) ) const[^const]                                                                                                                                                                                                           |
| [`int`](class_int.md)                           | [`get_custom_data_layers_count`](#class_tileset_method_get_custom_data_layers_count) ( ) const[^const]                                                                                                                                                                                                                                          |
| [`bool`](class_bool.md)                         | [`get_navigation_layer_layer_value`](#class_tileset_method_get_navigation_layer_layer_value) ( layer_index: [`int`](class_int.md), layer_number: [`int`](class_int.md) ) const[^const]                                                                                                                                                          |
| [`int`](class_int.md)                           | [`get_navigation_layer_layers`](#class_tileset_method_get_navigation_layer_layers) ( layer_index: [`int`](class_int.md) ) const[^const]                                                                                                                                                                                                         |
| [`int`](class_int.md)                           | [`get_navigation_layers_count`](#class_tileset_method_get_navigation_layers_count) ( ) const[^const]                                                                                                                                                                                                                                            |
| [`int`](class_int.md)                           | [`get_next_source_id`](#class_tileset_method_get_next_source_id) ( ) const[^const]                                                                                                                                                                                                                                                              |
| [`int`](class_int.md)                           | [`get_occlusion_layer_light_mask`](#class_tileset_method_get_occlusion_layer_light_mask) ( layer_index: [`int`](class_int.md) ) const[^const]                                                                                                                                                                                                   |
| [`bool`](class_bool.md)                         | [`get_occlusion_layer_sdf_collision`](#class_tileset_method_get_occlusion_layer_sdf_collision) ( layer_index: [`int`](class_int.md) ) const[^const]                                                                                                                                                                                             |
| [`int`](class_int.md)                           | [`get_occlusion_layers_count`](#class_tileset_method_get_occlusion_layers_count) ( ) const[^const]                                                                                                                                                                                                                                              |
| [`TileMapPattern`](class_tilemappattern.md)     | [`get_pattern`](#class_tileset_method_get_pattern) ( index: [`int`](class_int.md) = -1 )                                                                                                                                                                                                                                                        |
| [`int`](class_int.md)                           | [`get_patterns_count`](#class_tileset_method_get_patterns_count) ( )                                                                                                                                                                                                                                                                            |
| [`int`](class_int.md)                           | [`get_physics_layer_collision_layer`](#class_tileset_method_get_physics_layer_collision_layer) ( layer_index: [`int`](class_int.md) ) const[^const]                                                                                                                                                                                             |
| [`int`](class_int.md)                           | [`get_physics_layer_collision_mask`](#class_tileset_method_get_physics_layer_collision_mask) ( layer_index: [`int`](class_int.md) ) const[^const]                                                                                                                                                                                               |
| [`PhysicsMaterial`](class_physicsmaterial.md)   | [`get_physics_layer_physics_material`](#class_tileset_method_get_physics_layer_physics_material) ( layer_index: [`int`](class_int.md) ) const[^const]                                                                                                                                                                                           |
| [`int`](class_int.md)                           | [`get_physics_layers_count`](#class_tileset_method_get_physics_layers_count) ( ) const[^const]                                                                                                                                                                                                                                                  |
| [`TileSetSource`](class_tilesetsource.md)       | [`get_source`](#class_tileset_method_get_source) ( source_id: [`int`](class_int.md) ) const[^const]                                                                                                                                                                                                                                             |
| [`int`](class_int.md)                           | [`get_source_count`](#class_tileset_method_get_source_count) ( ) const[^const]                                                                                                                                                                                                                                                                  |
| [`int`](class_int.md)                           | [`get_source_id`](#class_tileset_method_get_source_id) ( index: [`int`](class_int.md) ) const[^const]                                                                                                                                                                                                                                           |
| [`int`](class_int.md)                           | [`get_source_level_tile_proxy`](#class_tileset_method_get_source_level_tile_proxy) ( source_from: [`int`](class_int.md) )                                                                                                                                                                                                                       |
| [`Color`](class_color.md)                       | [`get_terrain_color`](#class_tileset_method_get_terrain_color) ( terrain_set: [`int`](class_int.md), terrain_index: [`int`](class_int.md) ) const[^const]                                                                                                                                                                                       |
| [`String`](class_string.md)                     | [`get_terrain_name`](#class_tileset_method_get_terrain_name) ( terrain_set: [`int`](class_int.md), terrain_index: [`int`](class_int.md) ) const[^const]                                                                                                                                                                                         |
| [TerrainMode](#enum_tileset_terrainmode)        | [`get_terrain_set_mode`](#class_tileset_method_get_terrain_set_mode) ( terrain_set: [`int`](class_int.md) ) const[^const]                                                                                                                                                                                                                       |
| [`int`](class_int.md)                           | [`get_terrain_sets_count`](#class_tileset_method_get_terrain_sets_count) ( ) const[^const]                                                                                                                                                                                                                                                      |
| [`int`](class_int.md)                           | [`get_terrains_count`](#class_tileset_method_get_terrains_count) ( terrain_set: [`int`](class_int.md) ) const[^const]                                                                                                                                                                                                                           |
| [`bool`](class_bool.md)                         | [`has_alternative_level_tile_proxy`](#class_tileset_method_has_alternative_level_tile_proxy) ( source_from: [`int`](class_int.md), coords_from: [`Vector2i`](class_vector2i.md), alternative_from: [`int`](class_int.md) )                                                                                                                      |
| [`bool`](class_bool.md)                         | [`has_coords_level_tile_proxy`](#class_tileset_method_has_coords_level_tile_proxy) ( source_from: [`int`](class_int.md), coords_from: [`Vector2i`](class_vector2i.md) )                                                                                                                                                                         |
| [`bool`](class_bool.md)                         | [`has_source`](#class_tileset_method_has_source) ( source_id: [`int`](class_int.md) ) const[^const]                                                                                                                                                                                                                                             |
| [`bool`](class_bool.md)                         | [`has_source_level_tile_proxy`](#class_tileset_method_has_source_level_tile_proxy) ( source_from: [`int`](class_int.md) )                                                                                                                                                                                                                       |
| [`Array`](class_array.md)                       | [`map_tile_proxy`](#class_tileset_method_map_tile_proxy) ( source_from: [`int`](class_int.md), coords_from: [`Vector2i`](class_vector2i.md), alternative_from: [`int`](class_int.md) ) const[^const]                                                                                                                                            |
| `void`                                          | [`move_custom_data_layer`](#class_tileset_method_move_custom_data_layer) ( layer_index: [`int`](class_int.md), to_position: [`int`](class_int.md) )                                                                                                                                                                                             |
| `void`                                          | [`move_navigation_layer`](#class_tileset_method_move_navigation_layer) ( layer_index: [`int`](class_int.md), to_position: [`int`](class_int.md) )                                                                                                                                                                                               |
| `void`                                          | [`move_occlusion_layer`](#class_tileset_method_move_occlusion_layer) ( layer_index: [`int`](class_int.md), to_position: [`int`](class_int.md) )                                                                                                                                                                                                 |
| `void`                                          | [`move_physics_layer`](#class_tileset_method_move_physics_layer) ( layer_index: [`int`](class_int.md), to_position: [`int`](class_int.md) )                                                                                                                                                                                                     |
| `void`                                          | [`move_terrain`](#class_tileset_method_move_terrain) ( terrain_set: [`int`](class_int.md), terrain_index: [`int`](class_int.md), to_position: [`int`](class_int.md) )                                                                                                                                                                           |
| `void`                                          | [`move_terrain_set`](#class_tileset_method_move_terrain_set) ( terrain_set: [`int`](class_int.md), to_position: [`int`](class_int.md) )                                                                                                                                                                                                         |
| `void`                                          | [`remove_alternative_level_tile_proxy`](#class_tileset_method_remove_alternative_level_tile_proxy) ( source_from: [`int`](class_int.md), coords_from: [`Vector2i`](class_vector2i.md), alternative_from: [`int`](class_int.md) )                                                                                                                |
| `void`                                          | [`remove_coords_level_tile_proxy`](#class_tileset_method_remove_coords_level_tile_proxy) ( source_from: [`int`](class_int.md), coords_from: [`Vector2i`](class_vector2i.md) )                                                                                                                                                                   |
| `void`                                          | [`remove_custom_data_layer`](#class_tileset_method_remove_custom_data_layer) ( layer_index: [`int`](class_int.md) )                                                                                                                                                                                                                             |
| `void`                                          | [`remove_navigation_layer`](#class_tileset_method_remove_navigation_layer) ( layer_index: [`int`](class_int.md) )                                                                                                                                                                                                                               |
| `void`                                          | [`remove_occlusion_layer`](#class_tileset_method_remove_occlusion_layer) ( layer_index: [`int`](class_int.md) )                                                                                                                                                                                                                                 |
| `void`                                          | [`remove_pattern`](#class_tileset_method_remove_pattern) ( index: [`int`](class_int.md) )                                                                                                                                                                                                                                                       |
| `void`                                          | [`remove_physics_layer`](#class_tileset_method_remove_physics_layer) ( layer_index: [`int`](class_int.md) )                                                                                                                                                                                                                                     |
| `void`                                          | [`remove_source`](#class_tileset_method_remove_source) ( source_id: [`int`](class_int.md) )                                                                                                                                                                                                                                                     |
| `void`                                          | [`remove_source_level_tile_proxy`](#class_tileset_method_remove_source_level_tile_proxy) ( source_from: [`int`](class_int.md) )                                                                                                                                                                                                                 |
| `void`                                          | [`remove_terrain`](#class_tileset_method_remove_terrain) ( terrain_set: [`int`](class_int.md), terrain_index: [`int`](class_int.md) )                                                                                                                                                                                                           |
| `void`                                          | [`remove_terrain_set`](#class_tileset_method_remove_terrain_set) ( terrain_set: [`int`](class_int.md) )                                                                                                                                                                                                                                         |
| `void`                                          | [`set_alternative_level_tile_proxy`](#class_tileset_method_set_alternative_level_tile_proxy) ( source_from: [`int`](class_int.md), coords_from: [`Vector2i`](class_vector2i.md), alternative_from: [`int`](class_int.md), source_to: [`int`](class_int.md), coords_to: [`Vector2i`](class_vector2i.md), alternative_to: [`int`](class_int.md) ) |
| `void`                                          | [`set_coords_level_tile_proxy`](#class_tileset_method_set_coords_level_tile_proxy) ( p_source_from: [`int`](class_int.md), coords_from: [`Vector2i`](class_vector2i.md), source_to: [`int`](class_int.md), coords_to: [`Vector2i`](class_vector2i.md) )                                                                                         |
| `void`                                          | [`set_custom_data_layer_name`](#class_tileset_method_set_custom_data_layer_name) ( layer_index: [`int`](class_int.md), layer_name: [`String`](class_string.md) )                                                                                                                                                                                |
| `void`                                          | [`set_custom_data_layer_type`](#class_tileset_method_set_custom_data_layer_type) ( layer_index: [`int`](class_int.md), layer_type: [Variant.Type](#enum_@globalscope_variant.type) )                                                                                                                                                            |
| `void`                                          | [`set_navigation_layer_layer_value`](#class_tileset_method_set_navigation_layer_layer_value) ( layer_index: [`int`](class_int.md), layer_number: [`int`](class_int.md), value: [`bool`](class_bool.md) )                                                                                                                                        |
| `void`                                          | [`set_navigation_layer_layers`](#class_tileset_method_set_navigation_layer_layers) ( layer_index: [`int`](class_int.md), layers: [`int`](class_int.md) )                                                                                                                                                                                        |
| `void`                                          | [`set_occlusion_layer_light_mask`](#class_tileset_method_set_occlusion_layer_light_mask) ( layer_index: [`int`](class_int.md), light_mask: [`int`](class_int.md) )                                                                                                                                                                              |
| `void`                                          | [`set_occlusion_layer_sdf_collision`](#class_tileset_method_set_occlusion_layer_sdf_collision) ( layer_index: [`int`](class_int.md), sdf_collision: [`bool`](class_bool.md) )                                                                                                                                                                   |
| `void`                                          | [`set_physics_layer_collision_layer`](#class_tileset_method_set_physics_layer_collision_layer) ( layer_index: [`int`](class_int.md), layer: [`int`](class_int.md) )                                                                                                                                                                             |
| `void`                                          | [`set_physics_layer_collision_mask`](#class_tileset_method_set_physics_layer_collision_mask) ( layer_index: [`int`](class_int.md), mask: [`int`](class_int.md) )                                                                                                                                                                                |
| `void`                                          | [`set_physics_layer_physics_material`](#class_tileset_method_set_physics_layer_physics_material) ( layer_index: [`int`](class_int.md), physics_material: [`PhysicsMaterial`](class_physicsmaterial.md) )                                                                                                                                        |
| `void`                                          | [`set_source_id`](#class_tileset_method_set_source_id) ( source_id: [`int`](class_int.md), new_source_id: [`int`](class_int.md) )                                                                                                                                                                                                               |
| `void`                                          | [`set_source_level_tile_proxy`](#class_tileset_method_set_source_level_tile_proxy) ( source_from: [`int`](class_int.md), source_to: [`int`](class_int.md) )                                                                                                                                                                                     |
| `void`                                          | [`set_terrain_color`](#class_tileset_method_set_terrain_color) ( terrain_set: [`int`](class_int.md), terrain_index: [`int`](class_int.md), color: [`Color`](class_color.md) )                                                                                                                                                                   |
| `void`                                          | [`set_terrain_name`](#class_tileset_method_set_terrain_name) ( terrain_set: [`int`](class_int.md), terrain_index: [`int`](class_int.md), name: [`String`](class_string.md) )                                                                                                                                                                    |
| `void`                                          | [`set_terrain_set_mode`](#class_tileset_method_set_terrain_set_mode) ( terrain_set: [`int`](class_int.md), mode: [TerrainMode](#enum_tileset_terrainmode) )                                                                                                                                                                                     |

<!-- rst-class:: classref-section-separator -->

---

## 枚举

<div id="_class_enum_tileset_tileshape"></div>

enum **TileShape**: <div id="enum_tileset_tileshape"></div>

<div id="_class_tileset_constant_tile_shape_square"></div>

[TileShape](#enum_tileset_tileshape) **TILE_SHAPE_SQUARE** = ``0``

Rectangular tile shape.

<div id="_class_tileset_constant_tile_shape_isometric"></div>

[TileShape](#enum_tileset_tileshape) **TILE_SHAPE_ISOMETRIC** = ``1``

Diamond tile shape (for isometric look).

 **Note:** Isometric **TileSet** works best if [`TileMap`](class_tilemap.md) and all its layers have Y-sort enabled.

<div id="_class_tileset_constant_tile_shape_half_offset_square"></div>

[TileShape](#enum_tileset_tileshape) **TILE_SHAPE_HALF_OFFSET_SQUARE** = ``2``

Rectangular tile shape with one row/column out of two offset by half a tile.

<div id="_class_tileset_constant_tile_shape_hexagon"></div>

[TileShape](#enum_tileset_tileshape) **TILE_SHAPE_HEXAGON** = ``3``

Hexagonal tile shape.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_enum_tileset_tilelayout"></div>

enum **TileLayout**: <div id="enum_tileset_tilelayout"></div>

<div id="_class_tileset_constant_tile_layout_stacked"></div>

[TileLayout](#enum_tileset_tilelayout) **TILE_LAYOUT_STACKED** = ``0``

Tile coordinates layout where both axis stay consistent with their respective local horizontal and vertical axis.

<div id="_class_tileset_constant_tile_layout_stacked_offset"></div>

[TileLayout](#enum_tileset_tilelayout) **TILE_LAYOUT_STACKED_OFFSET** = ``1``

Same as [`TILE_LAYOUT_STACKED`](#class_tileset_constant_tile_layout_stacked), but the first half-offset is negative instead of positive.

<div id="_class_tileset_constant_tile_layout_stairs_right"></div>

[TileLayout](#enum_tileset_tilelayout) **TILE_LAYOUT_STAIRS_RIGHT** = ``2``

Tile coordinates layout where the horizontal axis stay horizontal, and the vertical one goes down-right.

<div id="_class_tileset_constant_tile_layout_stairs_down"></div>

[TileLayout](#enum_tileset_tilelayout) **TILE_LAYOUT_STAIRS_DOWN** = ``3``

Tile coordinates layout where the vertical axis stay vertical, and the horizontal one goes down-right.

<div id="_class_tileset_constant_tile_layout_diamond_right"></div>

[TileLayout](#enum_tileset_tilelayout) **TILE_LAYOUT_DIAMOND_RIGHT** = ``4``

Tile coordinates layout where the horizontal axis goes up-right, and the vertical one goes down-right.

<div id="_class_tileset_constant_tile_layout_diamond_down"></div>

[TileLayout](#enum_tileset_tilelayout) **TILE_LAYOUT_DIAMOND_DOWN** = ``5``

Tile coordinates layout where the horizontal axis goes down-right, and the vertical one goes down-left.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_enum_tileset_tileoffsetaxis"></div>

enum **TileOffsetAxis**: <div id="enum_tileset_tileoffsetaxis"></div>

<div id="_class_tileset_constant_tile_offset_axis_horizontal"></div>

[TileOffsetAxis](#enum_tileset_tileoffsetaxis) **TILE_OFFSET_AXIS_HORIZONTAL** = ``0``

Horizontal half-offset.

<div id="_class_tileset_constant_tile_offset_axis_vertical"></div>

[TileOffsetAxis](#enum_tileset_tileoffsetaxis) **TILE_OFFSET_AXIS_VERTICAL** = ``1``

Vertical half-offset.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_enum_tileset_cellneighbor"></div>

enum **CellNeighbor**: <div id="enum_tileset_cellneighbor"></div>

<div id="_class_tileset_constant_cell_neighbor_right_side"></div>

[CellNeighbor](#enum_tileset_cellneighbor) **CELL_NEIGHBOR_RIGHT_SIDE** = ``0``

Neighbor on the right side.

<div id="_class_tileset_constant_cell_neighbor_right_corner"></div>

[CellNeighbor](#enum_tileset_cellneighbor) **CELL_NEIGHBOR_RIGHT_CORNER** = ``1``

Neighbor in the right corner.

<div id="_class_tileset_constant_cell_neighbor_bottom_right_side"></div>

[CellNeighbor](#enum_tileset_cellneighbor) **CELL_NEIGHBOR_BOTTOM_RIGHT_SIDE** = ``2``

Neighbor on the bottom right side.

<div id="_class_tileset_constant_cell_neighbor_bottom_right_corner"></div>

[CellNeighbor](#enum_tileset_cellneighbor) **CELL_NEIGHBOR_BOTTOM_RIGHT_CORNER** = ``3``

Neighbor in the bottom right corner.

<div id="_class_tileset_constant_cell_neighbor_bottom_side"></div>

[CellNeighbor](#enum_tileset_cellneighbor) **CELL_NEIGHBOR_BOTTOM_SIDE** = ``4``

Neighbor on the bottom side.

<div id="_class_tileset_constant_cell_neighbor_bottom_corner"></div>

[CellNeighbor](#enum_tileset_cellneighbor) **CELL_NEIGHBOR_BOTTOM_CORNER** = ``5``

Neighbor in the bottom corner.

<div id="_class_tileset_constant_cell_neighbor_bottom_left_side"></div>

[CellNeighbor](#enum_tileset_cellneighbor) **CELL_NEIGHBOR_BOTTOM_LEFT_SIDE** = ``6``

Neighbor on the bottom left side.

<div id="_class_tileset_constant_cell_neighbor_bottom_left_corner"></div>

[CellNeighbor](#enum_tileset_cellneighbor) **CELL_NEIGHBOR_BOTTOM_LEFT_CORNER** = ``7``

Neighbor in the bottom left corner.

<div id="_class_tileset_constant_cell_neighbor_left_side"></div>

[CellNeighbor](#enum_tileset_cellneighbor) **CELL_NEIGHBOR_LEFT_SIDE** = ``8``

Neighbor on the left side.

<div id="_class_tileset_constant_cell_neighbor_left_corner"></div>

[CellNeighbor](#enum_tileset_cellneighbor) **CELL_NEIGHBOR_LEFT_CORNER** = ``9``

Neighbor in the left corner.

<div id="_class_tileset_constant_cell_neighbor_top_left_side"></div>

[CellNeighbor](#enum_tileset_cellneighbor) **CELL_NEIGHBOR_TOP_LEFT_SIDE** = ``10``

Neighbor on the top left side.

<div id="_class_tileset_constant_cell_neighbor_top_left_corner"></div>

[CellNeighbor](#enum_tileset_cellneighbor) **CELL_NEIGHBOR_TOP_LEFT_CORNER** = ``11``

Neighbor in the top left corner.

<div id="_class_tileset_constant_cell_neighbor_top_side"></div>

[CellNeighbor](#enum_tileset_cellneighbor) **CELL_NEIGHBOR_TOP_SIDE** = ``12``

Neighbor on the top side.

<div id="_class_tileset_constant_cell_neighbor_top_corner"></div>

[CellNeighbor](#enum_tileset_cellneighbor) **CELL_NEIGHBOR_TOP_CORNER** = ``13``

Neighbor in the top corner.

<div id="_class_tileset_constant_cell_neighbor_top_right_side"></div>

[CellNeighbor](#enum_tileset_cellneighbor) **CELL_NEIGHBOR_TOP_RIGHT_SIDE** = ``14``

Neighbor on the top right side.

<div id="_class_tileset_constant_cell_neighbor_top_right_corner"></div>

[CellNeighbor](#enum_tileset_cellneighbor) **CELL_NEIGHBOR_TOP_RIGHT_CORNER** = ``15``

Neighbor in the top right corner.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_enum_tileset_terrainmode"></div>

enum **TerrainMode**: <div id="enum_tileset_terrainmode"></div>

<div id="_class_tileset_constant_terrain_mode_match_corners_and_sides"></div>

[TerrainMode](#enum_tileset_terrainmode) **TERRAIN_MODE_MATCH_CORNERS_AND_SIDES** = ``0``

Requires both corners and side to match with neighboring tiles' terrains.

<div id="_class_tileset_constant_terrain_mode_match_corners"></div>

[TerrainMode](#enum_tileset_terrainmode) **TERRAIN_MODE_MATCH_CORNERS** = ``1``

Requires corners to match with neighboring tiles' terrains.

<div id="_class_tileset_constant_terrain_mode_match_sides"></div>

[TerrainMode](#enum_tileset_terrainmode) **TERRAIN_MODE_MATCH_SIDES** = ``2``

Requires sides to match with neighboring tiles' terrains.

<!-- rst-class:: classref-section-separator -->

---

## 属性说明

<div id="_class_tileset_property_tile_layout"></div>

[TileLayout](#enum_tileset_tilelayout) **tile_layout** = ``0`` <div id="class_tileset_property_tile_layout"></div>

- `void` **set_tile_layout** ( value: [TileLayout](#enum_tileset_tilelayout) )
- [TileLayout](#enum_tileset_tilelayout) **get_tile_layout** ( )

For all half-offset shapes (Isometric, Hexagonal and Half-Offset square), changes the way tiles are indexed in the TileMap grid.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_tileset_property_tile_offset_axis"></div>

[TileOffsetAxis](#enum_tileset_tileoffsetaxis) **tile_offset_axis** = ``0`` <div id="class_tileset_property_tile_offset_axis"></div>

- `void` **set_tile_offset_axis** ( value: [TileOffsetAxis](#enum_tileset_tileoffsetaxis) )
- [TileOffsetAxis](#enum_tileset_tileoffsetaxis) **get_tile_offset_axis** ( )

For all half-offset shapes (Isometric, Hexagonal and Half-Offset square), determines the offset axis.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_tileset_property_tile_shape"></div>

[TileShape](#enum_tileset_tileshape) **tile_shape** = ``0`` <div id="class_tileset_property_tile_shape"></div>

- `void` **set_tile_shape** ( value: [TileShape](#enum_tileset_tileshape) )
- [TileShape](#enum_tileset_tileshape) **get_tile_shape** ( )

The tile shape.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_tileset_property_tile_size"></div>

[`Vector2i`](class_vector2i.md) **tile_size** = ``Vector2i(16, 16)`` <div id="class_tileset_property_tile_size"></div>

- `void` **set_tile_size** ( value: [`Vector2i`](class_vector2i.md) )
- [`Vector2i`](class_vector2i.md) **get_tile_size** ( )

The tile size, in pixels. For all tile shapes, this size corresponds to the encompassing rectangle of the tile shape. This is thus the minimal cell size required in an atlas.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_tileset_property_uv_clipping"></div>

[`bool`](class_bool.md) **uv_clipping** = ``false`` <div id="class_tileset_property_uv_clipping"></div>

- `void` **set_uv_clipping** ( value: [`bool`](class_bool.md) )
- [`bool`](class_bool.md) **is_uv_clipping** ( )

Enables/Disable uv clipping when rendering the tiles.

<!-- rst-class:: classref-section-separator -->

---

## 方法说明

<div id="_class_tileset_method_add_custom_data_layer"></div>

`void` **add_custom_data_layer** ( to_position: [`int`](class_int.md) = -1 )<div id="class_tileset_method_add_custom_data_layer"></div>

Adds a custom data layer to the TileSet at the given position `to_position` in the array. If `to_position` is -1, adds it at the end of the array.

Custom data layers allow assigning custom properties to atlas tiles.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_tileset_method_add_navigation_layer"></div>

`void` **add_navigation_layer** ( to_position: [`int`](class_int.md) = -1 )<div id="class_tileset_method_add_navigation_layer"></div>

Adds a navigation layer to the TileSet at the given position `to_position` in the array. If `to_position` is -1, adds it at the end of the array.

Navigation layers allow assigning a navigable area to atlas tiles.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_tileset_method_add_occlusion_layer"></div>

`void` **add_occlusion_layer** ( to_position: [`int`](class_int.md) = -1 )<div id="class_tileset_method_add_occlusion_layer"></div>

Adds an occlusion layer to the TileSet at the given position `to_position` in the array. If `to_position` is -1, adds it at the end of the array.

Occlusion layers allow assigning occlusion polygons to atlas tiles.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_tileset_method_add_pattern"></div>

[`int`](class_int.md) **add_pattern** ( pattern: [`TileMapPattern`](class_tilemappattern.md), index: [`int`](class_int.md) = -1 )<div id="class_tileset_method_add_pattern"></div>

Adds a [`TileMapPattern`](class_tilemappattern.md) to be stored in the TileSet resource. If provided, insert it at the given `index`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_tileset_method_add_physics_layer"></div>

`void` **add_physics_layer** ( to_position: [`int`](class_int.md) = -1 )<div id="class_tileset_method_add_physics_layer"></div>

Adds a physics layer to the TileSet at the given position `to_position` in the array. If `to_position` is -1, adds it at the end of the array.

Physics layers allow assigning collision polygons to atlas tiles.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_tileset_method_add_source"></div>

[`int`](class_int.md) **add_source** ( source: [`TileSetSource`](class_tilesetsource.md), atlas_source_id_override: [`int`](class_int.md) = -1 )<div id="class_tileset_method_add_source"></div>

Adds a [`TileSetSource`](class_tilesetsource.md) to the TileSet. If `atlas_source_id_override` is not -1, also set its source ID. Otherwise, a unique identifier is automatically generated.

The function returns the added source ID or -1 if the source could not be added.

 **Warning:** A source cannot belong to two TileSets at the same time. If the added source was attached to another **TileSet**, it will be removed from that one.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_tileset_method_add_terrain"></div>

`void` **add_terrain** ( terrain_set: [`int`](class_int.md), to_position: [`int`](class_int.md) = -1 )<div id="class_tileset_method_add_terrain"></div>

Adds a new terrain to the given terrain set `terrain_set` at the given position `to_position` in the array. If `to_position` is -1, adds it at the end of the array.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_tileset_method_add_terrain_set"></div>

`void` **add_terrain_set** ( to_position: [`int`](class_int.md) = -1 )<div id="class_tileset_method_add_terrain_set"></div>

Adds a new terrain set at the given position `to_position` in the array. If `to_position` is -1, adds it at the end of the array.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_tileset_method_cleanup_invalid_tile_proxies"></div>

`void` **cleanup_invalid_tile_proxies** ( )<div id="class_tileset_method_cleanup_invalid_tile_proxies"></div>

Clears tile proxies pointing to invalid tiles.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_tileset_method_clear_tile_proxies"></div>

`void` **clear_tile_proxies** ( )<div id="class_tileset_method_clear_tile_proxies"></div>

Clears all tile proxies.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_tileset_method_get_alternative_level_tile_proxy"></div>

[`Array`](class_array.md) **get_alternative_level_tile_proxy** ( source_from: [`int`](class_int.md), coords_from: [`Vector2i`](class_vector2i.md), alternative_from: [`int`](class_int.md) )<div id="class_tileset_method_get_alternative_level_tile_proxy"></div>

Returns the alternative-level proxy for the given identifiers. The returned array contains the three proxie's target identifiers (source ID, atlas coords ID and alternative tile ID).

If the TileSet has no proxy for the given identifiers, returns an empty Array.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_tileset_method_get_coords_level_tile_proxy"></div>

[`Array`](class_array.md) **get_coords_level_tile_proxy** ( source_from: [`int`](class_int.md), coords_from: [`Vector2i`](class_vector2i.md) )<div id="class_tileset_method_get_coords_level_tile_proxy"></div>

Returns the coordinate-level proxy for the given identifiers. The returned array contains the two target identifiers of the proxy (source ID and atlas coordinates ID).

If the TileSet has no proxy for the given identifiers, returns an empty Array.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_tileset_method_get_custom_data_layer_by_name"></div>

[`int`](class_int.md) **get_custom_data_layer_by_name** ( layer_name: [`String`](class_string.md) ) const[^const]<div id="class_tileset_method_get_custom_data_layer_by_name"></div>

Returns the index of the custom data layer identified by the given name.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_tileset_method_get_custom_data_layer_name"></div>

[`String`](class_string.md) **get_custom_data_layer_name** ( layer_index: [`int`](class_int.md) ) const[^const]<div id="class_tileset_method_get_custom_data_layer_name"></div>

Returns the name of the custom data layer identified by the given index.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_tileset_method_get_custom_data_layer_type"></div>

[Variant.Type](#enum_@globalscope_variant.type) **get_custom_data_layer_type** ( layer_index: [`int`](class_int.md) ) const[^const]<div id="class_tileset_method_get_custom_data_layer_type"></div>

Returns the type of the custom data layer identified by the given index.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_tileset_method_get_custom_data_layers_count"></div>

[`int`](class_int.md) **get_custom_data_layers_count** ( ) const[^const]<div id="class_tileset_method_get_custom_data_layers_count"></div>

Returns the custom data layers count.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_tileset_method_get_navigation_layer_layer_value"></div>

[`bool`](class_bool.md) **get_navigation_layer_layer_value** ( layer_index: [`int`](class_int.md), layer_number: [`int`](class_int.md) ) const[^const]<div id="class_tileset_method_get_navigation_layer_layer_value"></div>

Returns whether or not the specified navigation layer of the TileSet navigation data layer identified by the given `layer_index` is enabled, given a navigation_layers `layer_number` between 1 and 32.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_tileset_method_get_navigation_layer_layers"></div>

[`int`](class_int.md) **get_navigation_layer_layers** ( layer_index: [`int`](class_int.md) ) const[^const]<div id="class_tileset_method_get_navigation_layer_layers"></div>

Returns the navigation layers (as in the Navigation server) of the given TileSet navigation layer.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_tileset_method_get_navigation_layers_count"></div>

[`int`](class_int.md) **get_navigation_layers_count** ( ) const[^const]<div id="class_tileset_method_get_navigation_layers_count"></div>

Returns the navigation layers count.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_tileset_method_get_next_source_id"></div>

[`int`](class_int.md) **get_next_source_id** ( ) const[^const]<div id="class_tileset_method_get_next_source_id"></div>

Returns a new unused source ID. This generated ID is the same that a call to [`add_source`](#class_tileset_method_add_source) would return.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_tileset_method_get_occlusion_layer_light_mask"></div>

[`int`](class_int.md) **get_occlusion_layer_light_mask** ( layer_index: [`int`](class_int.md) ) const[^const]<div id="class_tileset_method_get_occlusion_layer_light_mask"></div>

Returns the light mask of the occlusion layer.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_tileset_method_get_occlusion_layer_sdf_collision"></div>

[`bool`](class_bool.md) **get_occlusion_layer_sdf_collision** ( layer_index: [`int`](class_int.md) ) const[^const]<div id="class_tileset_method_get_occlusion_layer_sdf_collision"></div>

Returns if the occluders from this layer use `sdf_collision`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_tileset_method_get_occlusion_layers_count"></div>

[`int`](class_int.md) **get_occlusion_layers_count** ( ) const[^const]<div id="class_tileset_method_get_occlusion_layers_count"></div>

Returns the occlusion layers count.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_tileset_method_get_pattern"></div>

[`TileMapPattern`](class_tilemappattern.md) **get_pattern** ( index: [`int`](class_int.md) = -1 )<div id="class_tileset_method_get_pattern"></div>

Returns the [`TileMapPattern`](class_tilemappattern.md) at the given `index`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_tileset_method_get_patterns_count"></div>

[`int`](class_int.md) **get_patterns_count** ( )<div id="class_tileset_method_get_patterns_count"></div>

Returns the number of [`TileMapPattern`](class_tilemappattern.md) this tile set handles.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_tileset_method_get_physics_layer_collision_layer"></div>

[`int`](class_int.md) **get_physics_layer_collision_layer** ( layer_index: [`int`](class_int.md) ) const[^const]<div id="class_tileset_method_get_physics_layer_collision_layer"></div>

Returns the collision layer (as in the physics server) bodies on the given TileSet's physics layer are in.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_tileset_method_get_physics_layer_collision_mask"></div>

[`int`](class_int.md) **get_physics_layer_collision_mask** ( layer_index: [`int`](class_int.md) ) const[^const]<div id="class_tileset_method_get_physics_layer_collision_mask"></div>

Returns the collision mask of bodies on the given TileSet's physics layer.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_tileset_method_get_physics_layer_physics_material"></div>

[`PhysicsMaterial`](class_physicsmaterial.md) **get_physics_layer_physics_material** ( layer_index: [`int`](class_int.md) ) const[^const]<div id="class_tileset_method_get_physics_layer_physics_material"></div>

Returns the physics material of bodies on the given TileSet's physics layer.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_tileset_method_get_physics_layers_count"></div>

[`int`](class_int.md) **get_physics_layers_count** ( ) const[^const]<div id="class_tileset_method_get_physics_layers_count"></div>

Returns the physics layers count.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_tileset_method_get_source"></div>

[`TileSetSource`](class_tilesetsource.md) **get_source** ( source_id: [`int`](class_int.md) ) const[^const]<div id="class_tileset_method_get_source"></div>

Returns the [`TileSetSource`](class_tilesetsource.md) with ID `source_id`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_tileset_method_get_source_count"></div>

[`int`](class_int.md) **get_source_count** ( ) const[^const]<div id="class_tileset_method_get_source_count"></div>

Returns the number of [`TileSetSource`](class_tilesetsource.md) in this TileSet.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_tileset_method_get_source_id"></div>

[`int`](class_int.md) **get_source_id** ( index: [`int`](class_int.md) ) const[^const]<div id="class_tileset_method_get_source_id"></div>

Returns the source ID for source with index `index`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_tileset_method_get_source_level_tile_proxy"></div>

[`int`](class_int.md) **get_source_level_tile_proxy** ( source_from: [`int`](class_int.md) )<div id="class_tileset_method_get_source_level_tile_proxy"></div>

Returns the source-level proxy for the given source identifier.

If the TileSet has no proxy for the given identifier, returns -1.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_tileset_method_get_terrain_color"></div>

[`Color`](class_color.md) **get_terrain_color** ( terrain_set: [`int`](class_int.md), terrain_index: [`int`](class_int.md) ) const[^const]<div id="class_tileset_method_get_terrain_color"></div>

Returns a terrain's color.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_tileset_method_get_terrain_name"></div>

[`String`](class_string.md) **get_terrain_name** ( terrain_set: [`int`](class_int.md), terrain_index: [`int`](class_int.md) ) const[^const]<div id="class_tileset_method_get_terrain_name"></div>

Returns a terrain's name.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_tileset_method_get_terrain_set_mode"></div>

[TerrainMode](#enum_tileset_terrainmode) **get_terrain_set_mode** ( terrain_set: [`int`](class_int.md) ) const[^const]<div id="class_tileset_method_get_terrain_set_mode"></div>

Returns a terrain set mode.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_tileset_method_get_terrain_sets_count"></div>

[`int`](class_int.md) **get_terrain_sets_count** ( ) const[^const]<div id="class_tileset_method_get_terrain_sets_count"></div>

Returns the terrain sets count.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_tileset_method_get_terrains_count"></div>

[`int`](class_int.md) **get_terrains_count** ( terrain_set: [`int`](class_int.md) ) const[^const]<div id="class_tileset_method_get_terrains_count"></div>

Returns the number of terrains in the given terrain set.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_tileset_method_has_alternative_level_tile_proxy"></div>

[`bool`](class_bool.md) **has_alternative_level_tile_proxy** ( source_from: [`int`](class_int.md), coords_from: [`Vector2i`](class_vector2i.md), alternative_from: [`int`](class_int.md) )<div id="class_tileset_method_has_alternative_level_tile_proxy"></div>

Returns if there is an alternative-level proxy for the given identifiers.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_tileset_method_has_coords_level_tile_proxy"></div>

[`bool`](class_bool.md) **has_coords_level_tile_proxy** ( source_from: [`int`](class_int.md), coords_from: [`Vector2i`](class_vector2i.md) )<div id="class_tileset_method_has_coords_level_tile_proxy"></div>

Returns if there is a coodinates-level proxy for the given identifiers.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_tileset_method_has_source"></div>

[`bool`](class_bool.md) **has_source** ( source_id: [`int`](class_int.md) ) const[^const]<div id="class_tileset_method_has_source"></div>

Returns if this TileSet has a source for the given source ID.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_tileset_method_has_source_level_tile_proxy"></div>

[`bool`](class_bool.md) **has_source_level_tile_proxy** ( source_from: [`int`](class_int.md) )<div id="class_tileset_method_has_source_level_tile_proxy"></div>

Returns if there is a source-level proxy for the given source ID.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_tileset_method_map_tile_proxy"></div>

[`Array`](class_array.md) **map_tile_proxy** ( source_from: [`int`](class_int.md), coords_from: [`Vector2i`](class_vector2i.md), alternative_from: [`int`](class_int.md) ) const[^const]<div id="class_tileset_method_map_tile_proxy"></div>

According to the configured proxies, maps the provided identifiers to a new set of identifiers. The source ID, atlas coordinates ID and alternative tile ID are returned as a 3 elements Array.

This function first look for matching alternative-level proxies, then coordinates-level proxies, then source-level proxies.

If no proxy corresponding to provided identifiers are found, returns the same values the ones used as arguments.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_tileset_method_move_custom_data_layer"></div>

`void` **move_custom_data_layer** ( layer_index: [`int`](class_int.md), to_position: [`int`](class_int.md) )<div id="class_tileset_method_move_custom_data_layer"></div>

Moves the custom data layer at index `layer_index` to the given position `to_position` in the array. Also updates the atlas tiles accordingly.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_tileset_method_move_navigation_layer"></div>

`void` **move_navigation_layer** ( layer_index: [`int`](class_int.md), to_position: [`int`](class_int.md) )<div id="class_tileset_method_move_navigation_layer"></div>

Moves the navigation layer at index `layer_index` to the given position `to_position` in the array. Also updates the atlas tiles accordingly.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_tileset_method_move_occlusion_layer"></div>

`void` **move_occlusion_layer** ( layer_index: [`int`](class_int.md), to_position: [`int`](class_int.md) )<div id="class_tileset_method_move_occlusion_layer"></div>

Moves the occlusion layer at index `layer_index` to the given position `to_position` in the array. Also updates the atlas tiles accordingly.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_tileset_method_move_physics_layer"></div>

`void` **move_physics_layer** ( layer_index: [`int`](class_int.md), to_position: [`int`](class_int.md) )<div id="class_tileset_method_move_physics_layer"></div>

Moves the physics layer at index `layer_index` to the given position `to_position` in the array. Also updates the atlas tiles accordingly.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_tileset_method_move_terrain"></div>

`void` **move_terrain** ( terrain_set: [`int`](class_int.md), terrain_index: [`int`](class_int.md), to_position: [`int`](class_int.md) )<div id="class_tileset_method_move_terrain"></div>

Moves the terrain at index `terrain_index` for terrain set `terrain_set` to the given position `to_position` in the array. Also updates the atlas tiles accordingly.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_tileset_method_move_terrain_set"></div>

`void` **move_terrain_set** ( terrain_set: [`int`](class_int.md), to_position: [`int`](class_int.md) )<div id="class_tileset_method_move_terrain_set"></div>

Moves the terrain set at index `terrain_set` to the given position `to_position` in the array. Also updates the atlas tiles accordingly.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_tileset_method_remove_alternative_level_tile_proxy"></div>

`void` **remove_alternative_level_tile_proxy** ( source_from: [`int`](class_int.md), coords_from: [`Vector2i`](class_vector2i.md), alternative_from: [`int`](class_int.md) )<div id="class_tileset_method_remove_alternative_level_tile_proxy"></div>

Removes an alternative-level proxy for the given identifiers.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_tileset_method_remove_coords_level_tile_proxy"></div>

`void` **remove_coords_level_tile_proxy** ( source_from: [`int`](class_int.md), coords_from: [`Vector2i`](class_vector2i.md) )<div id="class_tileset_method_remove_coords_level_tile_proxy"></div>

Removes a coordinates-level proxy for the given identifiers.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_tileset_method_remove_custom_data_layer"></div>

`void` **remove_custom_data_layer** ( layer_index: [`int`](class_int.md) )<div id="class_tileset_method_remove_custom_data_layer"></div>

Removes the custom data layer at index `layer_index`. Also updates the atlas tiles accordingly.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_tileset_method_remove_navigation_layer"></div>

`void` **remove_navigation_layer** ( layer_index: [`int`](class_int.md) )<div id="class_tileset_method_remove_navigation_layer"></div>

Removes the navigation layer at index `layer_index`. Also updates the atlas tiles accordingly.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_tileset_method_remove_occlusion_layer"></div>

`void` **remove_occlusion_layer** ( layer_index: [`int`](class_int.md) )<div id="class_tileset_method_remove_occlusion_layer"></div>

Removes the occlusion layer at index `layer_index`. Also updates the atlas tiles accordingly.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_tileset_method_remove_pattern"></div>

`void` **remove_pattern** ( index: [`int`](class_int.md) )<div id="class_tileset_method_remove_pattern"></div>

Remove the [`TileMapPattern`](class_tilemappattern.md) at the given index.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_tileset_method_remove_physics_layer"></div>

`void` **remove_physics_layer** ( layer_index: [`int`](class_int.md) )<div id="class_tileset_method_remove_physics_layer"></div>

Removes the physics layer at index `layer_index`. Also updates the atlas tiles accordingly.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_tileset_method_remove_source"></div>

`void` **remove_source** ( source_id: [`int`](class_int.md) )<div id="class_tileset_method_remove_source"></div>

Removes the source with the given source ID.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_tileset_method_remove_source_level_tile_proxy"></div>

`void` **remove_source_level_tile_proxy** ( source_from: [`int`](class_int.md) )<div id="class_tileset_method_remove_source_level_tile_proxy"></div>

Removes a source-level tile proxy.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_tileset_method_remove_terrain"></div>

`void` **remove_terrain** ( terrain_set: [`int`](class_int.md), terrain_index: [`int`](class_int.md) )<div id="class_tileset_method_remove_terrain"></div>

Removes the terrain at index `terrain_index` in the given terrain set `terrain_set`. Also updates the atlas tiles accordingly.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_tileset_method_remove_terrain_set"></div>

`void` **remove_terrain_set** ( terrain_set: [`int`](class_int.md) )<div id="class_tileset_method_remove_terrain_set"></div>

Removes the terrain set at index `terrain_set`. Also updates the atlas tiles accordingly.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_tileset_method_set_alternative_level_tile_proxy"></div>

`void` **set_alternative_level_tile_proxy** ( source_from: [`int`](class_int.md), coords_from: [`Vector2i`](class_vector2i.md), alternative_from: [`int`](class_int.md), source_to: [`int`](class_int.md), coords_to: [`Vector2i`](class_vector2i.md), alternative_to: [`int`](class_int.md) )<div id="class_tileset_method_set_alternative_level_tile_proxy"></div>

Create an alternative-level proxy for the given identifiers. A proxy will map set of tile identifiers to another set of identifiers.

This can be used to replace a tile in all TileMaps using this TileSet, as TileMap nodes will find and use the proxy's target tile when one is available.

Proxied tiles can be automatically replaced in TileMap nodes using the editor.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_tileset_method_set_coords_level_tile_proxy"></div>

`void` **set_coords_level_tile_proxy** ( p_source_from: [`int`](class_int.md), coords_from: [`Vector2i`](class_vector2i.md), source_to: [`int`](class_int.md), coords_to: [`Vector2i`](class_vector2i.md) )<div id="class_tileset_method_set_coords_level_tile_proxy"></div>

Creates a coordinates-level proxy for the given identifiers. A proxy will map set of tile identifiers to another set of identifiers. The alternative tile ID is kept the same when using coordinates-level proxies.

This can be used to replace a tile in all TileMaps using this TileSet, as TileMap nodes will find and use the proxy's target tile when one is available.

Proxied tiles can be automatically replaced in TileMap nodes using the editor.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_tileset_method_set_custom_data_layer_name"></div>

`void` **set_custom_data_layer_name** ( layer_index: [`int`](class_int.md), layer_name: [`String`](class_string.md) )<div id="class_tileset_method_set_custom_data_layer_name"></div>

Sets the name of the custom data layer identified by the given index. Names are identifiers of the layer therefore if the name is already taken it will fail and raise an error.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_tileset_method_set_custom_data_layer_type"></div>

`void` **set_custom_data_layer_type** ( layer_index: [`int`](class_int.md), layer_type: [Variant.Type](#enum_@globalscope_variant.type) )<div id="class_tileset_method_set_custom_data_layer_type"></div>

Sets the type of the custom data layer identified by the given index.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_tileset_method_set_navigation_layer_layer_value"></div>

`void` **set_navigation_layer_layer_value** ( layer_index: [`int`](class_int.md), layer_number: [`int`](class_int.md), value: [`bool`](class_bool.md) )<div id="class_tileset_method_set_navigation_layer_layer_value"></div>

Based on `value`, enables or disables the specified navigation layer of the TileSet navigation data layer identified by the given `layer_index`, given a navigation_layers `layer_number` between 1 and 32.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_tileset_method_set_navigation_layer_layers"></div>

`void` **set_navigation_layer_layers** ( layer_index: [`int`](class_int.md), layers: [`int`](class_int.md) )<div id="class_tileset_method_set_navigation_layer_layers"></div>

Sets the navigation layers (as in the navigation server) for navigation regions in the given TileSet navigation layer.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_tileset_method_set_occlusion_layer_light_mask"></div>

`void` **set_occlusion_layer_light_mask** ( layer_index: [`int`](class_int.md), light_mask: [`int`](class_int.md) )<div id="class_tileset_method_set_occlusion_layer_light_mask"></div>

Sets the occlusion layer (as in the rendering server) for occluders in the given TileSet occlusion layer.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_tileset_method_set_occlusion_layer_sdf_collision"></div>

`void` **set_occlusion_layer_sdf_collision** ( layer_index: [`int`](class_int.md), sdf_collision: [`bool`](class_bool.md) )<div id="class_tileset_method_set_occlusion_layer_sdf_collision"></div>

Enables or disables SDF collision for occluders in the given TileSet occlusion layer.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_tileset_method_set_physics_layer_collision_layer"></div>

`void` **set_physics_layer_collision_layer** ( layer_index: [`int`](class_int.md), layer: [`int`](class_int.md) )<div id="class_tileset_method_set_physics_layer_collision_layer"></div>

Sets the physics layer (as in the physics server) for bodies in the given TileSet physics layer.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_tileset_method_set_physics_layer_collision_mask"></div>

`void` **set_physics_layer_collision_mask** ( layer_index: [`int`](class_int.md), mask: [`int`](class_int.md) )<div id="class_tileset_method_set_physics_layer_collision_mask"></div>

Sets the physics layer (as in the physics server) for bodies in the given TileSet physics layer.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_tileset_method_set_physics_layer_physics_material"></div>

`void` **set_physics_layer_physics_material** ( layer_index: [`int`](class_int.md), physics_material: [`PhysicsMaterial`](class_physicsmaterial.md) )<div id="class_tileset_method_set_physics_layer_physics_material"></div>

Sets the physics material for bodies in the given TileSet physics layer.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_tileset_method_set_source_id"></div>

`void` **set_source_id** ( source_id: [`int`](class_int.md), new_source_id: [`int`](class_int.md) )<div id="class_tileset_method_set_source_id"></div>

Changes a source's ID.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_tileset_method_set_source_level_tile_proxy"></div>

`void` **set_source_level_tile_proxy** ( source_from: [`int`](class_int.md), source_to: [`int`](class_int.md) )<div id="class_tileset_method_set_source_level_tile_proxy"></div>

Creates a source-level proxy for the given source ID. A proxy will map set of tile identifiers to another set of identifiers. Both the atlas coordinates ID and the alternative tile ID are kept the same when using source-level proxies.

This can be used to replace a source in all TileMaps using this TileSet, as TileMap nodes will find and use the proxy's target source when one is available.

Proxied tiles can be automatically replaced in TileMap nodes using the editor.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_tileset_method_set_terrain_color"></div>

`void` **set_terrain_color** ( terrain_set: [`int`](class_int.md), terrain_index: [`int`](class_int.md), color: [`Color`](class_color.md) )<div id="class_tileset_method_set_terrain_color"></div>

Sets a terrain's color. This color is used for identifying the different terrains in the TileSet editor.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_tileset_method_set_terrain_name"></div>

`void` **set_terrain_name** ( terrain_set: [`int`](class_int.md), terrain_index: [`int`](class_int.md), name: [`String`](class_string.md) )<div id="class_tileset_method_set_terrain_name"></div>

Sets a terrain's name.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_tileset_method_set_terrain_set_mode"></div>

`void` **set_terrain_set_mode** ( terrain_set: [`int`](class_int.md), mode: [TerrainMode](#enum_tileset_terrainmode) )<div id="class_tileset_method_set_terrain_set_mode"></div>

Sets a terrain mode. Each mode determines which bits of a tile shape is used to match the neighboring tiles' terrains.

[^virtual]: 本方法通常需要用户覆盖才能生效。
[^const]: 本方法无副作用，不会修改该实例的任何成员变量。
[^vararg]: 本方法除了能接受在此处描述的参数外，还能够继续接受任意数量的参数。
[^constructor]: 本方法用于构造某个类型。
[^static]: 调用本方法无需实例，可直接使用类名进行调用。
[^operator]: 本方法描述的是使用本类型作为左操作数的有效运算符。
[^bitfield]: 这个值是由下列位标志构成位掩码的整数。
[^void]: 无返回值。
