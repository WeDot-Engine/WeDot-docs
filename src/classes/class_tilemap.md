<!-- ⚠ 请勿编辑本文件 ⚠ -->
<!-- 本文档使用脚本从 WeDot 引擎源码仓库生成。 -->
<!-- 生成脚本：https://github.com/WeDot-Engine/WeDot/tree/master/doc/tools/make_md.py； -->
<!-- 原文件：https://github.com/WeDot-Engine/WeDot/tree/master/doc/classes/TileMap.xml。 -->

<div id="_class_tilemap"></div>

# TileMap

**已弃用：** Use multiple [`TileMapLayer`](class_tilemaplayer.md) nodes instead. To convert a TileMap to a set of TileMapLayer nodes, open the TileMap bottom panel with the node selected, click the toolbox icon in the top-right corner and choose 'Extract TileMap layers as individual TileMapLayer nodes'.

**继承：** [`Node2D`](class_node2d.md) **<** [`CanvasItem`](class_canvasitem.md) **<** [`Node`](class_node.md) **<** [`Object`](class_object.md)

Node for 2D tile-based maps.

## 描述

Node for 2D tile-based maps. Tilemaps use a [`TileSet`](class_tileset.md) which contain a list of tiles which are used to create grid-based maps. A TileMap may have several layers, layouting tiles on top of each other.

For performance reasons, all TileMap updates are batched at the end of a frame. Notably, this means that scene tiles from a [`TileSetScenesCollectionSource`](class_tilesetscenescollectionsource.md) may be initialized after their parent. This is only queued when inside the scene tree.

To force an update earlier on, call [`update_internals`](class_tilemap.md#class_tilemap_method_update_internals).

## 属性

|||
|:-:|:--|
| [`bool`](class_bool.md)                        | [`collision_animatable`](class_tilemap.md#class_tilemap_property_collision_animatable)             | ``false`` |
| [VisibilityMode](#enum_tilemap_visibilitymode) | [`collision_visibility_mode`](class_tilemap.md#class_tilemap_property_collision_visibility_mode)   | ``0``     |
| [VisibilityMode](#enum_tilemap_visibilitymode) | [`navigation_visibility_mode`](class_tilemap.md#class_tilemap_property_navigation_visibility_mode) | ``0``     |
| [`int`](class_int.md)                          | [`rendering_quadrant_size`](class_tilemap.md#class_tilemap_property_rendering_quadrant_size)       | ``16``    |
| [`TileSet`](class_tileset.md)                  | [`tile_set`](class_tilemap.md#class_tilemap_property_tile_set)                                     |           |

## 方法

|||
|:-:|:--|
| `void`                                                  | [`_tile_data_runtime_update`](class_tilemap.md#class_tilemap_private_method__tile_data_runtime_update) ( layer: [`int`](class_int.md), coords: [`Vector2i`](class_vector2i.md), tile_data: [`TileData`](class_tiledata.md) ) virtual[^virtual]                                                                             |
| [`bool`](class_bool.md)                                 | [`_use_tile_data_runtime_update`](class_tilemap.md#class_tilemap_private_method__use_tile_data_runtime_update) ( layer: [`int`](class_int.md), coords: [`Vector2i`](class_vector2i.md) ) virtual[^virtual]                                                                                                                 |
| `void`                                                  | [`add_layer`](class_tilemap.md#class_tilemap_method_add_layer) ( to_position: [`int`](class_int.md) )                                                                                                                                                                                                                      |
| `void`                                                  | [`clear`](class_tilemap.md#class_tilemap_method_clear) ( )                                                                                                                                                                                                                                                                 |
| `void`                                                  | [`clear_layer`](class_tilemap.md#class_tilemap_method_clear_layer) ( layer: [`int`](class_int.md) )                                                                                                                                                                                                                        |
| `void`                                                  | [`erase_cell`](class_tilemap.md#class_tilemap_method_erase_cell) ( layer: [`int`](class_int.md), coords: [`Vector2i`](class_vector2i.md) )                                                                                                                                                                                 |
| `void`                                                  | [`fix_invalid_tiles`](class_tilemap.md#class_tilemap_method_fix_invalid_tiles) ( )                                                                                                                                                                                                                                         |
| `void`                                                  | [`force_update`](class_tilemap.md#class_tilemap_method_force_update) ( layer: [`int`](class_int.md) = -1 )                                                                                                                                                                                                                 |
| [`int`](class_int.md)                                   | [`get_cell_alternative_tile`](class_tilemap.md#class_tilemap_method_get_cell_alternative_tile) ( layer: [`int`](class_int.md), coords: [`Vector2i`](class_vector2i.md), use_proxies: [`bool`](class_bool.md) = false ) const[^const]                                                                                       |
| [`Vector2i`](class_vector2i.md)                         | [`get_cell_atlas_coords`](class_tilemap.md#class_tilemap_method_get_cell_atlas_coords) ( layer: [`int`](class_int.md), coords: [`Vector2i`](class_vector2i.md), use_proxies: [`bool`](class_bool.md) = false ) const[^const]                                                                                               |
| [`int`](class_int.md)                                   | [`get_cell_source_id`](class_tilemap.md#class_tilemap_method_get_cell_source_id) ( layer: [`int`](class_int.md), coords: [`Vector2i`](class_vector2i.md), use_proxies: [`bool`](class_bool.md) = false ) const[^const]                                                                                                     |
| [`TileData`](class_tiledata.md)                         | [`get_cell_tile_data`](class_tilemap.md#class_tilemap_method_get_cell_tile_data) ( layer: [`int`](class_int.md), coords: [`Vector2i`](class_vector2i.md), use_proxies: [`bool`](class_bool.md) = false ) const[^const]                                                                                                     |
| [`Vector2i`](class_vector2i.md)                         | [`get_coords_for_body_rid`](class_tilemap.md#class_tilemap_method_get_coords_for_body_rid) ( body: [`RID`](class_rid.md) )                                                                                                                                                                                                 |
| [`int`](class_int.md)                                   | [`get_layer_for_body_rid`](class_tilemap.md#class_tilemap_method_get_layer_for_body_rid) ( body: [`RID`](class_rid.md) )                                                                                                                                                                                                   |
| [`Color`](class_color.md)                               | [`get_layer_modulate`](class_tilemap.md#class_tilemap_method_get_layer_modulate) ( layer: [`int`](class_int.md) ) const[^const]                                                                                                                                                                                            |
| [`String`](class_string.md)                             | [`get_layer_name`](class_tilemap.md#class_tilemap_method_get_layer_name) ( layer: [`int`](class_int.md) ) const[^const]                                                                                                                                                                                                    |
| [`RID`](class_rid.md)                                   | [`get_layer_navigation_map`](class_tilemap.md#class_tilemap_method_get_layer_navigation_map) ( layer: [`int`](class_int.md) ) const[^const]                                                                                                                                                                                |
| [`int`](class_int.md)                                   | [`get_layer_y_sort_origin`](class_tilemap.md#class_tilemap_method_get_layer_y_sort_origin) ( layer: [`int`](class_int.md) ) const[^const]                                                                                                                                                                                  |
| [`int`](class_int.md)                                   | [`get_layer_z_index`](class_tilemap.md#class_tilemap_method_get_layer_z_index) ( layer: [`int`](class_int.md) ) const[^const]                                                                                                                                                                                              |
| [`int`](class_int.md)                                   | [`get_layers_count`](class_tilemap.md#class_tilemap_method_get_layers_count) ( ) const[^const]                                                                                                                                                                                                                             |
| [`RID`](class_rid.md)                                   | [`get_navigation_map`](class_tilemap.md#class_tilemap_method_get_navigation_map) ( layer: [`int`](class_int.md) ) const[^const]                                                                                                                                                                                            |
| [`Vector2i`](class_vector2i.md)                         | [`get_neighbor_cell`](class_tilemap.md#class_tilemap_method_get_neighbor_cell) ( coords: [`Vector2i`](class_vector2i.md), neighbor: [CellNeighbor](#enum_tileset_cellneighbor) ) const[^const]                                                                                                                             |
| [`TileMapPattern`](class_tilemappattern.md)             | [`get_pattern`](class_tilemap.md#class_tilemap_method_get_pattern) ( layer: [`int`](class_int.md), coords_array: [Array](class_array.md) [`Vector2i`](class_vector2i.md) )                                                                                                                                                 |
| [Array](class_array.md) [`Vector2i`](class_vector2i.md) | [`get_surrounding_cells`](class_tilemap.md#class_tilemap_method_get_surrounding_cells) ( coords: [`Vector2i`](class_vector2i.md) )                                                                                                                                                                                         |
| [Array](class_array.md) [`Vector2i`](class_vector2i.md) | [`get_used_cells`](class_tilemap.md#class_tilemap_method_get_used_cells) ( layer: [`int`](class_int.md) ) const[^const]                                                                                                                                                                                                    |
| [Array](class_array.md) [`Vector2i`](class_vector2i.md) | [`get_used_cells_by_id`](class_tilemap.md#class_tilemap_method_get_used_cells_by_id) ( layer: [`int`](class_int.md), source_id: [`int`](class_int.md) = -1, atlas_coords: [`Vector2i`](class_vector2i.md) = Vector2i(-1, -1), alternative_tile: [`int`](class_int.md) = -1 ) const[^const]                                 |
| [`Rect2i`](class_rect2i.md)                             | [`get_used_rect`](class_tilemap.md#class_tilemap_method_get_used_rect) ( ) const[^const]                                                                                                                                                                                                                                   |
| [`bool`](class_bool.md)                                 | [`is_cell_flipped_h`](class_tilemap.md#class_tilemap_method_is_cell_flipped_h) ( layer: [`int`](class_int.md), coords: [`Vector2i`](class_vector2i.md), use_proxies: [`bool`](class_bool.md) = false ) const[^const]                                                                                                       |
| [`bool`](class_bool.md)                                 | [`is_cell_flipped_v`](class_tilemap.md#class_tilemap_method_is_cell_flipped_v) ( layer: [`int`](class_int.md), coords: [`Vector2i`](class_vector2i.md), use_proxies: [`bool`](class_bool.md) = false ) const[^const]                                                                                                       |
| [`bool`](class_bool.md)                                 | [`is_cell_transposed`](class_tilemap.md#class_tilemap_method_is_cell_transposed) ( layer: [`int`](class_int.md), coords: [`Vector2i`](class_vector2i.md), use_proxies: [`bool`](class_bool.md) = false ) const[^const]                                                                                                     |
| [`bool`](class_bool.md)                                 | [`is_layer_enabled`](class_tilemap.md#class_tilemap_method_is_layer_enabled) ( layer: [`int`](class_int.md) ) const[^const]                                                                                                                                                                                                |
| [`bool`](class_bool.md)                                 | [`is_layer_navigation_enabled`](class_tilemap.md#class_tilemap_method_is_layer_navigation_enabled) ( layer: [`int`](class_int.md) ) const[^const]                                                                                                                                                                          |
| [`bool`](class_bool.md)                                 | [`is_layer_y_sort_enabled`](class_tilemap.md#class_tilemap_method_is_layer_y_sort_enabled) ( layer: [`int`](class_int.md) ) const[^const]                                                                                                                                                                                  |
| [`Vector2i`](class_vector2i.md)                         | [`local_to_map`](class_tilemap.md#class_tilemap_method_local_to_map) ( local_position: [`Vector2`](class_vector2.md) ) const[^const]                                                                                                                                                                                       |
| [`Vector2i`](class_vector2i.md)                         | [`map_pattern`](class_tilemap.md#class_tilemap_method_map_pattern) ( position_in_tilemap: [`Vector2i`](class_vector2i.md), coords_in_pattern: [`Vector2i`](class_vector2i.md), pattern: [`TileMapPattern`](class_tilemappattern.md) )                                                                                      |
| [`Vector2`](class_vector2.md)                           | [`map_to_local`](class_tilemap.md#class_tilemap_method_map_to_local) ( map_position: [`Vector2i`](class_vector2i.md) ) const[^const]                                                                                                                                                                                       |
| `void`                                                  | [`move_layer`](class_tilemap.md#class_tilemap_method_move_layer) ( layer: [`int`](class_int.md), to_position: [`int`](class_int.md) )                                                                                                                                                                                      |
| `void`                                                  | [`notify_runtime_tile_data_update`](class_tilemap.md#class_tilemap_method_notify_runtime_tile_data_update) ( layer: [`int`](class_int.md) = -1 )                                                                                                                                                                           |
| `void`                                                  | [`remove_layer`](class_tilemap.md#class_tilemap_method_remove_layer) ( layer: [`int`](class_int.md) )                                                                                                                                                                                                                      |
| `void`                                                  | [`set_cell`](class_tilemap.md#class_tilemap_method_set_cell) ( layer: [`int`](class_int.md), coords: [`Vector2i`](class_vector2i.md), source_id: [`int`](class_int.md) = -1, atlas_coords: [`Vector2i`](class_vector2i.md) = Vector2i(-1, -1), alternative_tile: [`int`](class_int.md) = 0 )                               |
| `void`                                                  | [`set_cells_terrain_connect`](class_tilemap.md#class_tilemap_method_set_cells_terrain_connect) ( layer: [`int`](class_int.md), cells: [Array](class_array.md) [`Vector2i`](class_vector2i.md), terrain_set: [`int`](class_int.md), terrain: [`int`](class_int.md), ignore_empty_terrains: [`bool`](class_bool.md) = true ) |
| `void`                                                  | [`set_cells_terrain_path`](class_tilemap.md#class_tilemap_method_set_cells_terrain_path) ( layer: [`int`](class_int.md), path: [Array](class_array.md) [`Vector2i`](class_vector2i.md), terrain_set: [`int`](class_int.md), terrain: [`int`](class_int.md), ignore_empty_terrains: [`bool`](class_bool.md) = true )        |
| `void`                                                  | [`set_layer_enabled`](class_tilemap.md#class_tilemap_method_set_layer_enabled) ( layer: [`int`](class_int.md), enabled: [`bool`](class_bool.md) )                                                                                                                                                                          |
| `void`                                                  | [`set_layer_modulate`](class_tilemap.md#class_tilemap_method_set_layer_modulate) ( layer: [`int`](class_int.md), modulate: [`Color`](class_color.md) )                                                                                                                                                                     |
| `void`                                                  | [`set_layer_name`](class_tilemap.md#class_tilemap_method_set_layer_name) ( layer: [`int`](class_int.md), name: [`String`](class_string.md) )                                                                                                                                                                               |
| `void`                                                  | [`set_layer_navigation_enabled`](class_tilemap.md#class_tilemap_method_set_layer_navigation_enabled) ( layer: [`int`](class_int.md), enabled: [`bool`](class_bool.md) )                                                                                                                                                    |
| `void`                                                  | [`set_layer_navigation_map`](class_tilemap.md#class_tilemap_method_set_layer_navigation_map) ( layer: [`int`](class_int.md), map: [`RID`](class_rid.md) )                                                                                                                                                                  |
| `void`                                                  | [`set_layer_y_sort_enabled`](class_tilemap.md#class_tilemap_method_set_layer_y_sort_enabled) ( layer: [`int`](class_int.md), y_sort_enabled: [`bool`](class_bool.md) )                                                                                                                                                     |
| `void`                                                  | [`set_layer_y_sort_origin`](class_tilemap.md#class_tilemap_method_set_layer_y_sort_origin) ( layer: [`int`](class_int.md), y_sort_origin: [`int`](class_int.md) )                                                                                                                                                          |
| `void`                                                  | [`set_layer_z_index`](class_tilemap.md#class_tilemap_method_set_layer_z_index) ( layer: [`int`](class_int.md), z_index: [`int`](class_int.md) )                                                                                                                                                                            |
| `void`                                                  | [`set_navigation_map`](class_tilemap.md#class_tilemap_method_set_navigation_map) ( layer: [`int`](class_int.md), map: [`RID`](class_rid.md) )                                                                                                                                                                              |
| `void`                                                  | [`set_pattern`](class_tilemap.md#class_tilemap_method_set_pattern) ( layer: [`int`](class_int.md), position: [`Vector2i`](class_vector2i.md), pattern: [`TileMapPattern`](class_tilemappattern.md) )                                                                                                                       |
| `void`                                                  | [`update_internals`](class_tilemap.md#class_tilemap_method_update_internals) ( )                                                                                                                                                                                                                                           |

<!-- rst-class:: classref-section-separator -->

---

## 信号

<div id="_class_class_tilemap_signal_changed"></div>

**changed** ( ) <div id="class_tilemap_signal_changed"></div>

Emitted when the [`TileSet`](class_tileset.md) of this TileMap changes.

<!-- rst-class:: classref-section-separator -->

---

## 枚举

<div id="_class_enum_tilemap_visibilitymode"></div>

enum **VisibilityMode**: <div id="enum_tilemap_visibilitymode"></div>

<div id="_class_tilemap_constant_visibility_mode_default"></div>

[VisibilityMode](#enum_tilemap_visibilitymode) **VISIBILITY_MODE_DEFAULT** = ``0``

Use the debug settings to determine visibility.

<div id="_class_tilemap_constant_visibility_mode_force_hide"></div>

[VisibilityMode](#enum_tilemap_visibilitymode) **VISIBILITY_MODE_FORCE_HIDE** = ``2``

Always hide.

<div id="_class_tilemap_constant_visibility_mode_force_show"></div>

[VisibilityMode](#enum_tilemap_visibilitymode) **VISIBILITY_MODE_FORCE_SHOW** = ``1``

Always show.

<!-- rst-class:: classref-section-separator -->

---

## 属性说明

<div id="_class_tilemap_property_collision_animatable"></div>

[`bool`](class_bool.md) **collision_animatable** = ``false`` <div id="class_tilemap_property_collision_animatable"></div>

- `void` **set_collision_animatable** ( value: [`bool`](class_bool.md) )
- [`bool`](class_bool.md) **is_collision_animatable** ( )

If enabled, the TileMap will see its collisions synced to the physics tick and change its collision type from static to kinematic. This is required to create TileMap-based moving platform.

 **Note:** Enabling [`collision_animatable`](class_tilemap.md#class_tilemap_property_collision_animatable) may have a small performance impact, only do it if the TileMap is moving and has colliding tiles.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_tilemap_property_collision_visibility_mode"></div>

[VisibilityMode](#enum_tilemap_visibilitymode) **collision_visibility_mode** = ``0`` <div id="class_tilemap_property_collision_visibility_mode"></div>

- `void` **set_collision_visibility_mode** ( value: [VisibilityMode](#enum_tilemap_visibilitymode) )
- [VisibilityMode](#enum_tilemap_visibilitymode) **get_collision_visibility_mode** ( )

Show or hide the TileMap's collision shapes. If set to [`VISIBILITY_MODE_DEFAULT`](class_tilemap.md#class_tilemap_constant_visibility_mode_default), this depends on the show collision debug settings.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_tilemap_property_navigation_visibility_mode"></div>

[VisibilityMode](#enum_tilemap_visibilitymode) **navigation_visibility_mode** = ``0`` <div id="class_tilemap_property_navigation_visibility_mode"></div>

- `void` **set_navigation_visibility_mode** ( value: [VisibilityMode](#enum_tilemap_visibilitymode) )
- [VisibilityMode](#enum_tilemap_visibilitymode) **get_navigation_visibility_mode** ( )

Show or hide the TileMap's navigation meshes. If set to [`VISIBILITY_MODE_DEFAULT`](class_tilemap.md#class_tilemap_constant_visibility_mode_default), this depends on the show navigation debug settings.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_tilemap_property_rendering_quadrant_size"></div>

[`int`](class_int.md) **rendering_quadrant_size** = ``16`` <div id="class_tilemap_property_rendering_quadrant_size"></div>

- `void` **set_rendering_quadrant_size** ( value: [`int`](class_int.md) )
- [`int`](class_int.md) **get_rendering_quadrant_size** ( )

The TileMap's quadrant size. A quadrant is a group of tiles to be drawn together on a single canvas item, for optimization purposes. [`rendering_quadrant_size`](class_tilemap.md#class_tilemap_property_rendering_quadrant_size) defines the length of a square's side, in the map's coordinate system, that forms the quadrant. Thus, the default quadrant size groups together `16 * 16 = 256` tiles.

The quadrant size does not apply on Y-sorted layers, as tiles are grouped by Y position instead in that case.

 **Note:** As quadrants are created according to the map's coordinate system, the quadrant's "square shape" might not look like square in the TileMap's local coordinate system.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_tilemap_property_tile_set"></div>

[`TileSet`](class_tileset.md) **tile_set** <div id="class_tilemap_property_tile_set"></div>

- `void` **set_tileset** ( value: [`TileSet`](class_tileset.md) )
- [`TileSet`](class_tileset.md) **get_tileset** ( )

The [`TileSet`](class_tileset.md) used by this **TileMap**. The textures, collisions, and additional behavior of all available tiles are stored here.

<!-- rst-class:: classref-section-separator -->

---

## 方法说明

<div id="_class_tilemap_private_method__tile_data_runtime_update"></div>

`void` **_tile_data_runtime_update** ( layer: [`int`](class_int.md), coords: [`Vector2i`](class_vector2i.md), tile_data: [`TileData`](class_tiledata.md) ) virtual[^virtual]<div id="class_tilemap_private_method__tile_data_runtime_update"></div>

Called with a TileData object about to be used internally by the TileMap, allowing its modification at runtime.

This method is only called if [`_use_tile_data_runtime_update`](class_tilemap.md#class_tilemap_private_method__use_tile_data_runtime_update) is implemented and returns `true` for the given tile `coords` and `layer`.

 **Warning:** The `tile_data` object's sub-resources are the same as the one in the TileSet. Modifying them might impact the whole TileSet. Instead, make sure to duplicate those resources.

 **Note:** If the properties of `tile_data` object should change over time, use [`notify_runtime_tile_data_update`](class_tilemap.md#class_tilemap_method_notify_runtime_tile_data_update) to notify the TileMap it needs an update.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_tilemap_private_method__use_tile_data_runtime_update"></div>

[`bool`](class_bool.md) **_use_tile_data_runtime_update** ( layer: [`int`](class_int.md), coords: [`Vector2i`](class_vector2i.md) ) virtual[^virtual]<div id="class_tilemap_private_method__use_tile_data_runtime_update"></div>

Should return `true` if the tile at coordinates `coords` on layer `layer` requires a runtime update.

 **Warning:** Make sure this function only return `true` when needed. Any tile processed at runtime without a need for it will imply a significant performance penalty.

 **Note:** If the result of this function should changed, use [`notify_runtime_tile_data_update`](class_tilemap.md#class_tilemap_method_notify_runtime_tile_data_update) to notify the TileMap it needs an update.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_tilemap_method_add_layer"></div>

`void` **add_layer** ( to_position: [`int`](class_int.md) )<div id="class_tilemap_method_add_layer"></div>

Adds a layer at the given position `to_position` in the array. If `to_position` is negative, the position is counted from the end, with `-1` adding the layer at the end of the array.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_tilemap_method_clear"></div>

`void` **clear** ( )<div id="class_tilemap_method_clear"></div>

Clears all cells.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_tilemap_method_clear_layer"></div>

`void` **clear_layer** ( layer: [`int`](class_int.md) )<div id="class_tilemap_method_clear_layer"></div>

Clears all cells on the given layer.

If `layer` is negative, the layers are accessed from the last one.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_tilemap_method_erase_cell"></div>

`void` **erase_cell** ( layer: [`int`](class_int.md), coords: [`Vector2i`](class_vector2i.md) )<div id="class_tilemap_method_erase_cell"></div>

Erases the cell on layer `layer` at coordinates `coords`.

If `layer` is negative, the layers are accessed from the last one.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_tilemap_method_fix_invalid_tiles"></div>

`void` **fix_invalid_tiles** ( )<div id="class_tilemap_method_fix_invalid_tiles"></div>

Clears cells that do not exist in the tileset.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_tilemap_method_force_update"></div>

`void` **force_update** ( layer: [`int`](class_int.md) = -1 )<div id="class_tilemap_method_force_update"></div>

**已弃用：** Use [`notify_runtime_tile_data_update`](class_tilemap.md#class_tilemap_method_notify_runtime_tile_data_update) and/or [`update_internals`](class_tilemap.md#class_tilemap_method_update_internals) instead.

Forces the TileMap and the layer `layer` to update.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_tilemap_method_get_cell_alternative_tile"></div>

[`int`](class_int.md) **get_cell_alternative_tile** ( layer: [`int`](class_int.md), coords: [`Vector2i`](class_vector2i.md), use_proxies: [`bool`](class_bool.md) = false ) const[^const]<div id="class_tilemap_method_get_cell_alternative_tile"></div>

Returns the tile alternative ID of the cell on layer `layer` at `coords`.

If `use_proxies` is `false`, ignores the [`TileSet`](class_tileset.md)'s tile proxies, returning the raw alternative identifier. See [`TileSet.map_tile_proxy`](class_tileset.md#class_tileset_method_map_tile_proxy).

If `layer` is negative, the layers are accessed from the last one.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_tilemap_method_get_cell_atlas_coords"></div>

[`Vector2i`](class_vector2i.md) **get_cell_atlas_coords** ( layer: [`int`](class_int.md), coords: [`Vector2i`](class_vector2i.md), use_proxies: [`bool`](class_bool.md) = false ) const[^const]<div id="class_tilemap_method_get_cell_atlas_coords"></div>

Returns the tile atlas coordinates ID of the cell on layer `layer` at coordinates `coords`. Returns `Vector2i(-1, -1)` if the cell does not exist.

If `use_proxies` is `false`, ignores the [`TileSet`](class_tileset.md)'s tile proxies, returning the raw atlas coordinate identifier. See [`TileSet.map_tile_proxy`](class_tileset.md#class_tileset_method_map_tile_proxy).

If `layer` is negative, the layers are accessed from the last one.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_tilemap_method_get_cell_source_id"></div>

[`int`](class_int.md) **get_cell_source_id** ( layer: [`int`](class_int.md), coords: [`Vector2i`](class_vector2i.md), use_proxies: [`bool`](class_bool.md) = false ) const[^const]<div id="class_tilemap_method_get_cell_source_id"></div>

Returns the tile source ID of the cell on layer `layer` at coordinates `coords`. Returns `-1` if the cell does not exist.

If `use_proxies` is `false`, ignores the [`TileSet`](class_tileset.md)'s tile proxies, returning the raw source identifier. See [`TileSet.map_tile_proxy`](class_tileset.md#class_tileset_method_map_tile_proxy).

If `layer` is negative, the layers are accessed from the last one.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_tilemap_method_get_cell_tile_data"></div>

[`TileData`](class_tiledata.md) **get_cell_tile_data** ( layer: [`int`](class_int.md), coords: [`Vector2i`](class_vector2i.md), use_proxies: [`bool`](class_bool.md) = false ) const[^const]<div id="class_tilemap_method_get_cell_tile_data"></div>

Returns the [`TileData`](class_tiledata.md) object associated with the given cell, or `null` if the cell does not exist or is not a [`TileSetAtlasSource`](class_tilesetatlassource.md).

If `layer` is negative, the layers are accessed from the last one.

```

    func get_clicked_tile_power():
        var clicked_cell = tile_map.local_to_map(tile_map.get_local_mouse_position())
        var data = tile_map.get_cell_tile_data(0, clicked_cell)
        if data:
            return data.get_custom_data("power")
        else:
            return 0
```

If `use_proxies` is `false`, ignores the [`TileSet`](class_tileset.md)'s tile proxies. See [`TileSet.map_tile_proxy`](class_tileset.md#class_tileset_method_map_tile_proxy).



<!-- rst-class:: classref-item-separator -->

---

<div id="_class_tilemap_method_get_coords_for_body_rid"></div>

[`Vector2i`](class_vector2i.md) **get_coords_for_body_rid** ( body: [`RID`](class_rid.md) )<div id="class_tilemap_method_get_coords_for_body_rid"></div>

Returns the coordinates of the tile for given physics body RID. Such RID can be retrieved from [`KinematicCollision2D.get_collider_rid`](class_kinematiccollision2d.md#class_kinematiccollision2d_method_get_collider_rid), when colliding with a tile.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_tilemap_method_get_layer_for_body_rid"></div>

[`int`](class_int.md) **get_layer_for_body_rid** ( body: [`RID`](class_rid.md) )<div id="class_tilemap_method_get_layer_for_body_rid"></div>

Returns the tilemap layer of the tile for given physics body RID. Such RID can be retrieved from [`KinematicCollision2D.get_collider_rid`](class_kinematiccollision2d.md#class_kinematiccollision2d_method_get_collider_rid), when colliding with a tile.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_tilemap_method_get_layer_modulate"></div>

[`Color`](class_color.md) **get_layer_modulate** ( layer: [`int`](class_int.md) ) const[^const]<div id="class_tilemap_method_get_layer_modulate"></div>

Returns a TileMap layer's modulate.

If `layer` is negative, the layers are accessed from the last one.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_tilemap_method_get_layer_name"></div>

[`String`](class_string.md) **get_layer_name** ( layer: [`int`](class_int.md) ) const[^const]<div id="class_tilemap_method_get_layer_name"></div>

Returns a TileMap layer's name.

If `layer` is negative, the layers are accessed from the last one.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_tilemap_method_get_layer_navigation_map"></div>

[`RID`](class_rid.md) **get_layer_navigation_map** ( layer: [`int`](class_int.md) ) const[^const]<div id="class_tilemap_method_get_layer_navigation_map"></div>

Returns the [`RID`](class_rid.md) of the [`NavigationServer2D`](class_navigationserver2d.md) navigation map assigned to the specified TileMap layer `layer`.

By default the TileMap uses the default [`World2D`](class_world2d.md) navigation map for the first TileMap layer. For each additional TileMap layer a new navigation map is created for the additional layer.

In order to make [`NavigationAgent2D`](class_navigationagent2d.md) switch between TileMap layer navigation maps use [`NavigationAgent2D.set_navigation_map`](class_navigationagent2d.md#class_navigationagent2d_method_set_navigation_map) with the navigation map received from [`get_layer_navigation_map`](class_tilemap.md#class_tilemap_method_get_layer_navigation_map).

If `layer` is negative, the layers are accessed from the last one.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_tilemap_method_get_layer_y_sort_origin"></div>

[`int`](class_int.md) **get_layer_y_sort_origin** ( layer: [`int`](class_int.md) ) const[^const]<div id="class_tilemap_method_get_layer_y_sort_origin"></div>

Returns a TileMap layer's Y sort origin.

If `layer` is negative, the layers are accessed from the last one.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_tilemap_method_get_layer_z_index"></div>

[`int`](class_int.md) **get_layer_z_index** ( layer: [`int`](class_int.md) ) const[^const]<div id="class_tilemap_method_get_layer_z_index"></div>

Returns a TileMap layer's Z-index value.

If `layer` is negative, the layers are accessed from the last one.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_tilemap_method_get_layers_count"></div>

[`int`](class_int.md) **get_layers_count** ( ) const[^const]<div id="class_tilemap_method_get_layers_count"></div>

Returns the number of layers in the TileMap.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_tilemap_method_get_navigation_map"></div>

[`RID`](class_rid.md) **get_navigation_map** ( layer: [`int`](class_int.md) ) const[^const]<div id="class_tilemap_method_get_navigation_map"></div>

**已弃用：** Use [`get_layer_navigation_map`](class_tilemap.md#class_tilemap_method_get_layer_navigation_map) instead.

Returns the [`RID`](class_rid.md) of the [`NavigationServer2D`](class_navigationserver2d.md) navigation map assigned to the specified TileMap layer `layer`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_tilemap_method_get_neighbor_cell"></div>

[`Vector2i`](class_vector2i.md) **get_neighbor_cell** ( coords: [`Vector2i`](class_vector2i.md), neighbor: [CellNeighbor](#enum_tileset_cellneighbor) ) const[^const]<div id="class_tilemap_method_get_neighbor_cell"></div>

Returns the neighboring cell to the one at coordinates `coords`, identified by the `neighbor` direction. This method takes into account the different layouts a TileMap can take.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_tilemap_method_get_pattern"></div>

[`TileMapPattern`](class_tilemappattern.md) **get_pattern** ( layer: [`int`](class_int.md), coords_array: [Array](class_array.md) [`Vector2i`](class_vector2i.md) )<div id="class_tilemap_method_get_pattern"></div>

Creates a new [`TileMapPattern`](class_tilemappattern.md) from the given layer and set of cells.

If `layer` is negative, the layers are accessed from the last one.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_tilemap_method_get_surrounding_cells"></div>

[Array](class_array.md) [`Vector2i`](class_vector2i.md) **get_surrounding_cells** ( coords: [`Vector2i`](class_vector2i.md) )<div id="class_tilemap_method_get_surrounding_cells"></div>

Returns the list of all neighbourings cells to the one at `coords`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_tilemap_method_get_used_cells"></div>

[Array](class_array.md) [`Vector2i`](class_vector2i.md) **get_used_cells** ( layer: [`int`](class_int.md) ) const[^const]<div id="class_tilemap_method_get_used_cells"></div>

Returns a [`Vector2i`](class_vector2i.md) array with the positions of all cells containing a tile in the given layer. A cell is considered empty if its source identifier equals -1, its atlas coordinates identifiers is `Vector2(-1, -1)` and its alternative identifier is -1.

If `layer` is negative, the layers are accessed from the last one.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_tilemap_method_get_used_cells_by_id"></div>

[Array](class_array.md) [`Vector2i`](class_vector2i.md) **get_used_cells_by_id** ( layer: [`int`](class_int.md), source_id: [`int`](class_int.md) = -1, atlas_coords: [`Vector2i`](class_vector2i.md) = Vector2i(-1, -1), alternative_tile: [`int`](class_int.md) = -1 ) const[^const]<div id="class_tilemap_method_get_used_cells_by_id"></div>

Returns a [`Vector2i`](class_vector2i.md) array with the positions of all cells containing a tile in the given layer. Tiles may be filtered according to their source (`source_id`), their atlas coordinates (`atlas_coords`) or alternative id (`alternative_tile`).

If a parameter has its value set to the default one, this parameter is not used to filter a cell. Thus, if all parameters have their respective default value, this method returns the same result as [`get_used_cells`](class_tilemap.md#class_tilemap_method_get_used_cells).

A cell is considered empty if its source identifier equals -1, its atlas coordinates identifiers is `Vector2(-1, -1)` and its alternative identifier is -1.

If `layer` is negative, the layers are accessed from the last one.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_tilemap_method_get_used_rect"></div>

[`Rect2i`](class_rect2i.md) **get_used_rect** ( ) const[^const]<div id="class_tilemap_method_get_used_rect"></div>

Returns a rectangle enclosing the used (non-empty) tiles of the map, including all layers.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_tilemap_method_is_cell_flipped_h"></div>

[`bool`](class_bool.md) **is_cell_flipped_h** ( layer: [`int`](class_int.md), coords: [`Vector2i`](class_vector2i.md), use_proxies: [`bool`](class_bool.md) = false ) const[^const]<div id="class_tilemap_method_is_cell_flipped_h"></div>

Returns `true` if the cell on layer `layer` at coordinates `coords` is flipped horizontally. The result is valid only for atlas sources.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_tilemap_method_is_cell_flipped_v"></div>

[`bool`](class_bool.md) **is_cell_flipped_v** ( layer: [`int`](class_int.md), coords: [`Vector2i`](class_vector2i.md), use_proxies: [`bool`](class_bool.md) = false ) const[^const]<div id="class_tilemap_method_is_cell_flipped_v"></div>

Returns `true` if the cell on layer `layer` at coordinates `coords` is flipped vertically. The result is valid only for atlas sources.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_tilemap_method_is_cell_transposed"></div>

[`bool`](class_bool.md) **is_cell_transposed** ( layer: [`int`](class_int.md), coords: [`Vector2i`](class_vector2i.md), use_proxies: [`bool`](class_bool.md) = false ) const[^const]<div id="class_tilemap_method_is_cell_transposed"></div>

Returns `true` if the cell on layer `layer` at coordinates `coords` is transposed. The result is valid only for atlas sources.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_tilemap_method_is_layer_enabled"></div>

[`bool`](class_bool.md) **is_layer_enabled** ( layer: [`int`](class_int.md) ) const[^const]<div id="class_tilemap_method_is_layer_enabled"></div>

Returns if a layer is enabled.

If `layer` is negative, the layers are accessed from the last one.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_tilemap_method_is_layer_navigation_enabled"></div>

[`bool`](class_bool.md) **is_layer_navigation_enabled** ( layer: [`int`](class_int.md) ) const[^const]<div id="class_tilemap_method_is_layer_navigation_enabled"></div>

Returns if a layer's built-in navigation regions generation is enabled.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_tilemap_method_is_layer_y_sort_enabled"></div>

[`bool`](class_bool.md) **is_layer_y_sort_enabled** ( layer: [`int`](class_int.md) ) const[^const]<div id="class_tilemap_method_is_layer_y_sort_enabled"></div>

Returns if a layer Y-sorts its tiles.

If `layer` is negative, the layers are accessed from the last one.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_tilemap_method_local_to_map"></div>

[`Vector2i`](class_vector2i.md) **local_to_map** ( local_position: [`Vector2`](class_vector2.md) ) const[^const]<div id="class_tilemap_method_local_to_map"></div>

Returns the map coordinates of the cell containing the given `local_position`. If `local_position` is in global coordinates, consider using [`Node2D.to_local`](class_node2d.md#class_node2d_method_to_local) before passing it to this method. See also [`map_to_local`](class_tilemap.md#class_tilemap_method_map_to_local).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_tilemap_method_map_pattern"></div>

[`Vector2i`](class_vector2i.md) **map_pattern** ( position_in_tilemap: [`Vector2i`](class_vector2i.md), coords_in_pattern: [`Vector2i`](class_vector2i.md), pattern: [`TileMapPattern`](class_tilemappattern.md) )<div id="class_tilemap_method_map_pattern"></div>

Returns for the given coordinate `coords_in_pattern` in a [`TileMapPattern`](class_tilemappattern.md) the corresponding cell coordinates if the pattern was pasted at the `position_in_tilemap` coordinates (see [`set_pattern`](class_tilemap.md#class_tilemap_method_set_pattern)). This mapping is required as in half-offset tile shapes, the mapping might not work by calculating `position_in_tile_map + coords_in_pattern`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_tilemap_method_map_to_local"></div>

[`Vector2`](class_vector2.md) **map_to_local** ( map_position: [`Vector2i`](class_vector2i.md) ) const[^const]<div id="class_tilemap_method_map_to_local"></div>

Returns the centered position of a cell in the TileMap's local coordinate space. To convert the returned value into global coordinates, use [`Node2D.to_global`](class_node2d.md#class_node2d_method_to_global). See also [`local_to_map`](class_tilemap.md#class_tilemap_method_local_to_map).

 **Note:** This may not correspond to the visual position of the tile, i.e. it ignores the [`TileData.texture_origin`](class_tiledata.md#class_tiledata_property_texture_origin) property of individual tiles.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_tilemap_method_move_layer"></div>

`void` **move_layer** ( layer: [`int`](class_int.md), to_position: [`int`](class_int.md) )<div id="class_tilemap_method_move_layer"></div>

Moves the layer at index `layer` to the given position `to_position` in the array.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_tilemap_method_notify_runtime_tile_data_update"></div>

`void` **notify_runtime_tile_data_update** ( layer: [`int`](class_int.md) = -1 )<div id="class_tilemap_method_notify_runtime_tile_data_update"></div>

Notifies the TileMap node that calls to [`_use_tile_data_runtime_update`](class_tilemap.md#class_tilemap_private_method__use_tile_data_runtime_update) or [`_tile_data_runtime_update`](class_tilemap.md#class_tilemap_private_method__tile_data_runtime_update) will lead to different results. This will thus trigger a TileMap update.

If `layer` is provided, only notifies changes for the given layer. Providing the `layer` argument (when applicable) is usually preferred for performance reasons.

 **Warning:** Updating the TileMap is computationally expensive and may impact performance. Try to limit the number of calls to this function to avoid unnecessary update.

 **Note:** This does not trigger a direct update of the TileMap, the update will be done at the end of the frame as usual (unless you call [`update_internals`](class_tilemap.md#class_tilemap_method_update_internals)).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_tilemap_method_remove_layer"></div>

`void` **remove_layer** ( layer: [`int`](class_int.md) )<div id="class_tilemap_method_remove_layer"></div>

Removes the layer at index `layer`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_tilemap_method_set_cell"></div>

`void` **set_cell** ( layer: [`int`](class_int.md), coords: [`Vector2i`](class_vector2i.md), source_id: [`int`](class_int.md) = -1, atlas_coords: [`Vector2i`](class_vector2i.md) = Vector2i(-1, -1), alternative_tile: [`int`](class_int.md) = 0 )<div id="class_tilemap_method_set_cell"></div>

Sets the tile identifiers for the cell on layer `layer` at coordinates `coords`. Each tile of the [`TileSet`](class_tileset.md) is identified using three parts:

- The source identifier `source_id` identifies a [`TileSetSource`](class_tilesetsource.md) identifier. See [`TileSet.set_source_id`](class_tileset.md#class_tileset_method_set_source_id),

- The atlas coordinates identifier `atlas_coords` identifies a tile coordinates in the atlas (if the source is a [`TileSetAtlasSource`](class_tilesetatlassource.md)). For [`TileSetScenesCollectionSource`](class_tilesetscenescollectionsource.md) it should always be `Vector2i(0, 0)`),

- The alternative tile identifier `alternative_tile` identifies a tile alternative in the atlas (if the source is a [`TileSetAtlasSource`](class_tilesetatlassource.md)), and the scene for a [`TileSetScenesCollectionSource`](class_tilesetscenescollectionsource.md).

If `source_id` is set to `-1`, `atlas_coords` to `Vector2i(-1, -1)` or `alternative_tile` to `-1`, the cell will be erased. An erased cell gets **all** its identifiers automatically set to their respective invalid values, namely `-1`, `Vector2i(-1, -1)` and `-1`.

If `layer` is negative, the layers are accessed from the last one.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_tilemap_method_set_cells_terrain_connect"></div>

`void` **set_cells_terrain_connect** ( layer: [`int`](class_int.md), cells: [Array](class_array.md) [`Vector2i`](class_vector2i.md), terrain_set: [`int`](class_int.md), terrain: [`int`](class_int.md), ignore_empty_terrains: [`bool`](class_bool.md) = true )<div id="class_tilemap_method_set_cells_terrain_connect"></div>

Update all the cells in the `cells` coordinates array so that they use the given `terrain` for the given `terrain_set`. If an updated cell has the same terrain as one of its neighboring cells, this function tries to join the two. This function might update neighboring tiles if needed to create correct terrain transitions.

If `ignore_empty_terrains` is true, empty terrains will be ignored when trying to find the best fitting tile for the given terrain constraints.

If `layer` is negative, the layers are accessed from the last one.

 **Note:** To work correctly, this method requires the TileMap's TileSet to have terrains set up with all required terrain combinations. Otherwise, it may produce unexpected results.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_tilemap_method_set_cells_terrain_path"></div>

`void` **set_cells_terrain_path** ( layer: [`int`](class_int.md), path: [Array](class_array.md) [`Vector2i`](class_vector2i.md), terrain_set: [`int`](class_int.md), terrain: [`int`](class_int.md), ignore_empty_terrains: [`bool`](class_bool.md) = true )<div id="class_tilemap_method_set_cells_terrain_path"></div>

Update all the cells in the `path` coordinates array so that they use the given `terrain` for the given `terrain_set`. The function will also connect two successive cell in the path with the same terrain. This function might update neighboring tiles if needed to create correct terrain transitions.

If `ignore_empty_terrains` is true, empty terrains will be ignored when trying to find the best fitting tile for the given terrain constraints.

If `layer` is negative, the layers are accessed from the last one.

 **Note:** To work correctly, this method requires the TileMap's TileSet to have terrains set up with all required terrain combinations. Otherwise, it may produce unexpected results.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_tilemap_method_set_layer_enabled"></div>

`void` **set_layer_enabled** ( layer: [`int`](class_int.md), enabled: [`bool`](class_bool.md) )<div id="class_tilemap_method_set_layer_enabled"></div>

Enables or disables the layer `layer`. A disabled layer is not processed at all (no rendering, no physics, etc.).

If `layer` is negative, the layers are accessed from the last one.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_tilemap_method_set_layer_modulate"></div>

`void` **set_layer_modulate** ( layer: [`int`](class_int.md), modulate: [`Color`](class_color.md) )<div id="class_tilemap_method_set_layer_modulate"></div>

Sets a layer's color. It will be multiplied by tile's color and TileMap's modulate.

If `layer` is negative, the layers are accessed from the last one.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_tilemap_method_set_layer_name"></div>

`void` **set_layer_name** ( layer: [`int`](class_int.md), name: [`String`](class_string.md) )<div id="class_tilemap_method_set_layer_name"></div>

Sets a layer's name. This is mostly useful in the editor.

If `layer` is negative, the layers are accessed from the last one.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_tilemap_method_set_layer_navigation_enabled"></div>

`void` **set_layer_navigation_enabled** ( layer: [`int`](class_int.md), enabled: [`bool`](class_bool.md) )<div id="class_tilemap_method_set_layer_navigation_enabled"></div>

Enables or disables a layer's built-in navigation regions generation. Disable this if you need to bake navigation regions from a TileMap using a [`NavigationRegion2D`](class_navigationregion2d.md) node.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_tilemap_method_set_layer_navigation_map"></div>

`void` **set_layer_navigation_map** ( layer: [`int`](class_int.md), map: [`RID`](class_rid.md) )<div id="class_tilemap_method_set_layer_navigation_map"></div>

Assigns `map` as a [`NavigationServer2D`](class_navigationserver2d.md) navigation map for the specified TileMap layer `layer`.

By default the TileMap uses the default [`World2D`](class_world2d.md) navigation map for the first TileMap layer. For each additional TileMap layer a new navigation map is created for the additional layer.

In order to make [`NavigationAgent2D`](class_navigationagent2d.md) switch between TileMap layer navigation maps use [`NavigationAgent2D.set_navigation_map`](class_navigationagent2d.md#class_navigationagent2d_method_set_navigation_map) with the navigation map received from [`get_layer_navigation_map`](class_tilemap.md#class_tilemap_method_get_layer_navigation_map).

If `layer` is negative, the layers are accessed from the last one.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_tilemap_method_set_layer_y_sort_enabled"></div>

`void` **set_layer_y_sort_enabled** ( layer: [`int`](class_int.md), y_sort_enabled: [`bool`](class_bool.md) )<div id="class_tilemap_method_set_layer_y_sort_enabled"></div>

Enables or disables a layer's Y-sorting. If a layer is Y-sorted, the layer will behave as a CanvasItem node where each of its tile gets Y-sorted.

Y-sorted layers should usually be on different Z-index values than not Y-sorted layers, otherwise, each of those layer will be Y-sorted as whole with the Y-sorted one. This is usually an undesired behavior.

If `layer` is negative, the layers are accessed from the last one.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_tilemap_method_set_layer_y_sort_origin"></div>

`void` **set_layer_y_sort_origin** ( layer: [`int`](class_int.md), y_sort_origin: [`int`](class_int.md) )<div id="class_tilemap_method_set_layer_y_sort_origin"></div>

Sets a layer's Y-sort origin value. This Y-sort origin value is added to each tile's Y-sort origin value.

This allows, for example, to fake a different height level on each layer. This can be useful for top-down view games.

If `layer` is negative, the layers are accessed from the last one.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_tilemap_method_set_layer_z_index"></div>

`void` **set_layer_z_index** ( layer: [`int`](class_int.md), z_index: [`int`](class_int.md) )<div id="class_tilemap_method_set_layer_z_index"></div>

Sets a layers Z-index value. This Z-index is added to each tile's Z-index value.

If `layer` is negative, the layers are accessed from the last one.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_tilemap_method_set_navigation_map"></div>

`void` **set_navigation_map** ( layer: [`int`](class_int.md), map: [`RID`](class_rid.md) )<div id="class_tilemap_method_set_navigation_map"></div>

**已弃用：** Use [`set_layer_navigation_map`](class_tilemap.md#class_tilemap_method_set_layer_navigation_map) instead.

Assigns `map` as a [`NavigationServer2D`](class_navigationserver2d.md) navigation map for the specified TileMap layer `layer`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_tilemap_method_set_pattern"></div>

`void` **set_pattern** ( layer: [`int`](class_int.md), position: [`Vector2i`](class_vector2i.md), pattern: [`TileMapPattern`](class_tilemappattern.md) )<div id="class_tilemap_method_set_pattern"></div>

Paste the given [`TileMapPattern`](class_tilemappattern.md) at the given `position` and `layer` in the tile map.

If `layer` is negative, the layers are accessed from the last one.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_tilemap_method_update_internals"></div>

`void` **update_internals** ( )<div id="class_tilemap_method_update_internals"></div>

Triggers a direct update of the TileMap. Usually, calling this function is not needed, as TileMap node updates automatically when one of its properties or cells is modified.

However, for performance reasons, those updates are batched and delayed to the end of the frame. Calling this function will force the TileMap to update right away instead.

 **Warning:** Updating the TileMap is computationally expensive and may impact performance. Try to limit the number of updates and how many tiles they impact.

[^virtual]: 本方法通常需要用户覆盖才能生效。
[^const]: 本方法无副作用，不会修改该实例的任何成员变量。
[^vararg]: 本方法除了能接受在此处描述的参数外，还能够继续接受任意数量的参数。
[^constructor]: 本方法用于构造某个类型。
[^static]: 调用本方法无需实例，可直接使用类名进行调用。
[^operator]: 本方法描述的是使用本类型作为左操作数的有效运算符。
[^bitfield]: 这个值是由下列位标志构成位掩码的整数。
[^void]: 无返回值。
