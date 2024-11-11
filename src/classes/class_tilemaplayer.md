<!-- ⚠ 请勿编辑本文件 ⚠ -->
<!-- 本文档使用脚本从 WeDot 引擎源码仓库生成。 -->
<!-- 生成脚本：https://github.com/WeDot-Engine/WeDot/tree/master/doc/tools/make_md.py； -->
<!-- 原文件：https://github.com/WeDot-Engine/WeDot/tree/master/doc/classes/TileMapLayer.xml。 -->

<div id="_class_tilemaplayer"></div>

# TileMapLayer

**继承：** [`Node2D`](class_node2d.md) **<** [`CanvasItem`](class_canvasitem.md) **<** [`Node`](class_node.md) **<** [`Object`](class_object.md)

Node for 2D tile-based maps.

## 描述

Node for 2D tile-based maps. A **TileMapLayer** uses a [`TileSet`](class_tileset.md) which contain a list of tiles which are used to create grid-based maps. Unlike the [`TileMap`](class_tilemap.md) node, which is deprecated, **TileMapLayer** has only one layer of tiles. You can use several **TileMapLayer** to achieve the same result as a [`TileMap`](class_tilemap.md) node.

For performance reasons, all TileMap updates are batched at the end of a frame. Notably, this means that scene tiles from a [`TileSetScenesCollectionSource`](class_tilesetscenescollectionsource.md) may be initialized after their parent. This is only queued when inside the scene tree.

To force an update earlier on, call [`update_internals`](class_tilemaplayer.md#class_tilemaplayer_method_update_internals).

## 属性

|||
|:-:|:--|
| [`bool`](class_bool.md)                                       | [`collision_enabled`](class_tilemaplayer.md#class_tilemaplayer_property_collision_enabled)                   | ``true``              |
| [DebugVisibilityMode](#enum_tilemaplayer_debugvisibilitymode) | [`collision_visibility_mode`](class_tilemaplayer.md#class_tilemaplayer_property_collision_visibility_mode)   | ``0``                 |
| [`bool`](class_bool.md)                                       | [`enabled`](class_tilemaplayer.md#class_tilemaplayer_property_enabled)                                       | ``true``              |
| [`bool`](class_bool.md)                                       | [`navigation_enabled`](class_tilemaplayer.md#class_tilemaplayer_property_navigation_enabled)                 | ``true``              |
| [DebugVisibilityMode](#enum_tilemaplayer_debugvisibilitymode) | [`navigation_visibility_mode`](class_tilemaplayer.md#class_tilemaplayer_property_navigation_visibility_mode) | ``0``                 |
| [`bool`](class_bool.md)                                       | [`occlusion_enabled`](class_tilemaplayer.md#class_tilemaplayer_property_occlusion_enabled)                   | ``true``              |
| [`int`](class_int.md)                                         | [`rendering_quadrant_size`](class_tilemaplayer.md#class_tilemaplayer_property_rendering_quadrant_size)       | ``16``                |
| [`PackedByteArray`](class_packedbytearray.md)                 | [`tile_map_data`](class_tilemaplayer.md#class_tilemaplayer_property_tile_map_data)                           | ``PackedByteArray()`` |
| [`TileSet`](class_tileset.md)                                 | [`tile_set`](class_tilemaplayer.md#class_tilemaplayer_property_tile_set)                                     |                       |
| [`bool`](class_bool.md)                                       | [`use_kinematic_bodies`](class_tilemaplayer.md#class_tilemaplayer_property_use_kinematic_bodies)             | ``false``             |
| [`bool`](class_bool.md)                                       | [`x_draw_order_reversed`](class_tilemaplayer.md#class_tilemaplayer_property_x_draw_order_reversed)           | ``false``             |
| [`int`](class_int.md)                                         | [`y_sort_origin`](class_tilemaplayer.md#class_tilemaplayer_property_y_sort_origin)                           | ``0``                 |

## 方法

|||
|:-:|:--|
| `void`                                                  | [`_tile_data_runtime_update`](class_tilemaplayer.md#class_tilemaplayer_private_method__tile_data_runtime_update) ( coords: [`Vector2i`](class_vector2i.md), tile_data: [`TileData`](class_tiledata.md) ) virtual[^virtual]                                                                             |
| [`bool`](class_bool.md)                                 | [`_use_tile_data_runtime_update`](class_tilemaplayer.md#class_tilemaplayer_private_method__use_tile_data_runtime_update) ( coords: [`Vector2i`](class_vector2i.md) ) virtual[^virtual]                                                                                                                 |
| `void`                                                  | [`clear`](class_tilemaplayer.md#class_tilemaplayer_method_clear) ( )                                                                                                                                                                                                                                   |
| `void`                                                  | [`erase_cell`](class_tilemaplayer.md#class_tilemaplayer_method_erase_cell) ( coords: [`Vector2i`](class_vector2i.md) )                                                                                                                                                                                 |
| `void`                                                  | [`fix_invalid_tiles`](class_tilemaplayer.md#class_tilemaplayer_method_fix_invalid_tiles) ( )                                                                                                                                                                                                           |
| [`int`](class_int.md)                                   | [`get_cell_alternative_tile`](class_tilemaplayer.md#class_tilemaplayer_method_get_cell_alternative_tile) ( coords: [`Vector2i`](class_vector2i.md) ) const[^const]                                                                                                                                     |
| [`Vector2i`](class_vector2i.md)                         | [`get_cell_atlas_coords`](class_tilemaplayer.md#class_tilemaplayer_method_get_cell_atlas_coords) ( coords: [`Vector2i`](class_vector2i.md) ) const[^const]                                                                                                                                             |
| [`int`](class_int.md)                                   | [`get_cell_source_id`](class_tilemaplayer.md#class_tilemaplayer_method_get_cell_source_id) ( coords: [`Vector2i`](class_vector2i.md) ) const[^const]                                                                                                                                                   |
| [`TileData`](class_tiledata.md)                         | [`get_cell_tile_data`](class_tilemaplayer.md#class_tilemaplayer_method_get_cell_tile_data) ( coords: [`Vector2i`](class_vector2i.md) ) const[^const]                                                                                                                                                   |
| [`Vector2i`](class_vector2i.md)                         | [`get_coords_for_body_rid`](class_tilemaplayer.md#class_tilemaplayer_method_get_coords_for_body_rid) ( body: [`RID`](class_rid.md) ) const[^const]                                                                                                                                                     |
| [`RID`](class_rid.md)                                   | [`get_navigation_map`](class_tilemaplayer.md#class_tilemaplayer_method_get_navigation_map) ( ) const[^const]                                                                                                                                                                                           |
| [`Vector2i`](class_vector2i.md)                         | [`get_neighbor_cell`](class_tilemaplayer.md#class_tilemaplayer_method_get_neighbor_cell) ( coords: [`Vector2i`](class_vector2i.md), neighbor: [CellNeighbor](#enum_tileset_cellneighbor) ) const[^const]                                                                                               |
| [`TileMapPattern`](class_tilemappattern.md)             | [`get_pattern`](class_tilemaplayer.md#class_tilemaplayer_method_get_pattern) ( coords_array: [Array](class_array.md) [`Vector2i`](class_vector2i.md) )                                                                                                                                                 |
| [Array](class_array.md) [`Vector2i`](class_vector2i.md) | [`get_surrounding_cells`](class_tilemaplayer.md#class_tilemaplayer_method_get_surrounding_cells) ( coords: [`Vector2i`](class_vector2i.md) )                                                                                                                                                           |
| [Array](class_array.md) [`Vector2i`](class_vector2i.md) | [`get_used_cells`](class_tilemaplayer.md#class_tilemaplayer_method_get_used_cells) ( ) const[^const]                                                                                                                                                                                                   |
| [Array](class_array.md) [`Vector2i`](class_vector2i.md) | [`get_used_cells_by_id`](class_tilemaplayer.md#class_tilemaplayer_method_get_used_cells_by_id) ( source_id: [`int`](class_int.md) = -1, atlas_coords: [`Vector2i`](class_vector2i.md) = Vector2i(-1, -1), alternative_tile: [`int`](class_int.md) = -1 ) const[^const]                                 |
| [`Rect2i`](class_rect2i.md)                             | [`get_used_rect`](class_tilemaplayer.md#class_tilemaplayer_method_get_used_rect) ( ) const[^const]                                                                                                                                                                                                     |
| [`bool`](class_bool.md)                                 | [`has_body_rid`](class_tilemaplayer.md#class_tilemaplayer_method_has_body_rid) ( body: [`RID`](class_rid.md) ) const[^const]                                                                                                                                                                           |
| [`bool`](class_bool.md)                                 | [`is_cell_flipped_h`](class_tilemaplayer.md#class_tilemaplayer_method_is_cell_flipped_h) ( coords: [`Vector2i`](class_vector2i.md) ) const[^const]                                                                                                                                                     |
| [`bool`](class_bool.md)                                 | [`is_cell_flipped_v`](class_tilemaplayer.md#class_tilemaplayer_method_is_cell_flipped_v) ( coords: [`Vector2i`](class_vector2i.md) ) const[^const]                                                                                                                                                     |
| [`bool`](class_bool.md)                                 | [`is_cell_transposed`](class_tilemaplayer.md#class_tilemaplayer_method_is_cell_transposed) ( coords: [`Vector2i`](class_vector2i.md) ) const[^const]                                                                                                                                                   |
| [`Vector2i`](class_vector2i.md)                         | [`local_to_map`](class_tilemaplayer.md#class_tilemaplayer_method_local_to_map) ( local_position: [`Vector2`](class_vector2.md) ) const[^const]                                                                                                                                                         |
| [`Vector2i`](class_vector2i.md)                         | [`map_pattern`](class_tilemaplayer.md#class_tilemaplayer_method_map_pattern) ( position_in_tilemap: [`Vector2i`](class_vector2i.md), coords_in_pattern: [`Vector2i`](class_vector2i.md), pattern: [`TileMapPattern`](class_tilemappattern.md) )                                                        |
| [`Vector2`](class_vector2.md)                           | [`map_to_local`](class_tilemaplayer.md#class_tilemaplayer_method_map_to_local) ( map_position: [`Vector2i`](class_vector2i.md) ) const[^const]                                                                                                                                                         |
| `void`                                                  | [`notify_runtime_tile_data_update`](class_tilemaplayer.md#class_tilemaplayer_method_notify_runtime_tile_data_update) ( )                                                                                                                                                                               |
| `void`                                                  | [`set_cell`](class_tilemaplayer.md#class_tilemaplayer_method_set_cell) ( coords: [`Vector2i`](class_vector2i.md), source_id: [`int`](class_int.md) = -1, atlas_coords: [`Vector2i`](class_vector2i.md) = Vector2i(-1, -1), alternative_tile: [`int`](class_int.md) = 0 )                               |
| `void`                                                  | [`set_cells_terrain_connect`](class_tilemaplayer.md#class_tilemaplayer_method_set_cells_terrain_connect) ( cells: [Array](class_array.md) [`Vector2i`](class_vector2i.md), terrain_set: [`int`](class_int.md), terrain: [`int`](class_int.md), ignore_empty_terrains: [`bool`](class_bool.md) = true ) |
| `void`                                                  | [`set_cells_terrain_path`](class_tilemaplayer.md#class_tilemaplayer_method_set_cells_terrain_path) ( path: [Array](class_array.md) [`Vector2i`](class_vector2i.md), terrain_set: [`int`](class_int.md), terrain: [`int`](class_int.md), ignore_empty_terrains: [`bool`](class_bool.md) = true )        |
| `void`                                                  | [`set_navigation_map`](class_tilemaplayer.md#class_tilemaplayer_method_set_navigation_map) ( map: [`RID`](class_rid.md) )                                                                                                                                                                              |
| `void`                                                  | [`set_pattern`](class_tilemaplayer.md#class_tilemaplayer_method_set_pattern) ( position: [`Vector2i`](class_vector2i.md), pattern: [`TileMapPattern`](class_tilemappattern.md) )                                                                                                                       |
| `void`                                                  | [`update_internals`](class_tilemaplayer.md#class_tilemaplayer_method_update_internals) ( )                                                                                                                                                                                                             |

<!-- rst-class:: classref-section-separator -->

---

## 信号

<div id="_class_class_tilemaplayer_signal_changed"></div>

**changed** ( ) <div id="class_tilemaplayer_signal_changed"></div>

Emitted when this **TileMapLayer**'s properties changes. This includes modified cells, properties, or changes made to its assigned [`TileSet`](class_tileset.md).

 **Note:** This signal may be emitted very often when batch-modifying a **TileMapLayer**. Avoid executing complex processing in a connected function, and consider delaying it to the end of the frame instead (i.e. calling [`Object.call_deferred`](class_object.md#class_object_method_call_deferred)).

<!-- rst-class:: classref-section-separator -->

---

## 枚举

<div id="_class_enum_tilemaplayer_debugvisibilitymode"></div>

enum **DebugVisibilityMode**: <div id="enum_tilemaplayer_debugvisibilitymode"></div>

<div id="_class_tilemaplayer_constant_debug_visibility_mode_default"></div>

[DebugVisibilityMode](#enum_tilemaplayer_debugvisibilitymode) **DEBUG_VISIBILITY_MODE_DEFAULT** = ``0``

Hide the collisions or navigation debug shapes in the editor, and use the debug settings to determine their visibility in game (i.e. [`SceneTree.debug_collisions_hint`](class_scenetree.md#class_scenetree_property_debug_collisions_hint) or [`SceneTree.debug_navigation_hint`](class_scenetree.md#class_scenetree_property_debug_navigation_hint)).

<div id="_class_tilemaplayer_constant_debug_visibility_mode_force_hide"></div>

[DebugVisibilityMode](#enum_tilemaplayer_debugvisibilitymode) **DEBUG_VISIBILITY_MODE_FORCE_HIDE** = ``2``

Always hide the collisions or navigation debug shapes.

<div id="_class_tilemaplayer_constant_debug_visibility_mode_force_show"></div>

[DebugVisibilityMode](#enum_tilemaplayer_debugvisibilitymode) **DEBUG_VISIBILITY_MODE_FORCE_SHOW** = ``1``

Always show the collisions or navigation debug shapes.

<!-- rst-class:: classref-section-separator -->

---

## 属性说明

<div id="_class_tilemaplayer_property_collision_enabled"></div>

[`bool`](class_bool.md) **collision_enabled** = ``true`` <div id="class_tilemaplayer_property_collision_enabled"></div>

- `void` **set_collision_enabled** ( value: [`bool`](class_bool.md) )
- [`bool`](class_bool.md) **is_collision_enabled** ( )

Enable or disable collisions.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_tilemaplayer_property_collision_visibility_mode"></div>

[DebugVisibilityMode](#enum_tilemaplayer_debugvisibilitymode) **collision_visibility_mode** = ``0`` <div id="class_tilemaplayer_property_collision_visibility_mode"></div>

- `void` **set_collision_visibility_mode** ( value: [DebugVisibilityMode](#enum_tilemaplayer_debugvisibilitymode) )
- [DebugVisibilityMode](#enum_tilemaplayer_debugvisibilitymode) **get_collision_visibility_mode** ( )

Show or hide the **TileMapLayer**'s collision shapes. If set to [`DEBUG_VISIBILITY_MODE_DEFAULT`](class_tilemaplayer.md#class_tilemaplayer_constant_debug_visibility_mode_default), this depends on the show collision debug settings.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_tilemaplayer_property_enabled"></div>

[`bool`](class_bool.md) **enabled** = ``true`` <div id="class_tilemaplayer_property_enabled"></div>

- `void` **set_enabled** ( value: [`bool`](class_bool.md) )
- [`bool`](class_bool.md) **is_enabled** ( )

If `false`, disables this **TileMapLayer** completely (rendering, collision, navigation, scene tiles, etc.)

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_tilemaplayer_property_navigation_enabled"></div>

[`bool`](class_bool.md) **navigation_enabled** = ``true`` <div id="class_tilemaplayer_property_navigation_enabled"></div>

- `void` **set_navigation_enabled** ( value: [`bool`](class_bool.md) )
- [`bool`](class_bool.md) **is_navigation_enabled** ( )

If `true`, navigation regions are enabled.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_tilemaplayer_property_navigation_visibility_mode"></div>

[DebugVisibilityMode](#enum_tilemaplayer_debugvisibilitymode) **navigation_visibility_mode** = ``0`` <div id="class_tilemaplayer_property_navigation_visibility_mode"></div>

- `void` **set_navigation_visibility_mode** ( value: [DebugVisibilityMode](#enum_tilemaplayer_debugvisibilitymode) )
- [DebugVisibilityMode](#enum_tilemaplayer_debugvisibilitymode) **get_navigation_visibility_mode** ( )

Show or hide the **TileMapLayer**'s navigation meshes. If set to [`DEBUG_VISIBILITY_MODE_DEFAULT`](class_tilemaplayer.md#class_tilemaplayer_constant_debug_visibility_mode_default), this depends on the show navigation debug settings.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_tilemaplayer_property_occlusion_enabled"></div>

[`bool`](class_bool.md) **occlusion_enabled** = ``true`` <div id="class_tilemaplayer_property_occlusion_enabled"></div>

- `void` **set_occlusion_enabled** ( value: [`bool`](class_bool.md) )
- [`bool`](class_bool.md) **is_occlusion_enabled** ( )

Enable or disable light occlusion.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_tilemaplayer_property_rendering_quadrant_size"></div>

[`int`](class_int.md) **rendering_quadrant_size** = ``16`` <div id="class_tilemaplayer_property_rendering_quadrant_size"></div>

- `void` **set_rendering_quadrant_size** ( value: [`int`](class_int.md) )
- [`int`](class_int.md) **get_rendering_quadrant_size** ( )

The **TileMapLayer**'s quadrant size. A quadrant is a group of tiles to be drawn together on a single canvas item, for optimization purposes. [`rendering_quadrant_size`](class_tilemaplayer.md#class_tilemaplayer_property_rendering_quadrant_size) defines the length of a square's side, in the map's coordinate system, that forms the quadrant. Thus, the default quadrant size groups together `16 * 16 = 256` tiles.

The quadrant size does not apply on a Y-sorted **TileMapLayer**, as tiles are grouped by Y position instead in that case.

 **Note:** As quadrants are created according to the map's coordinate system, the quadrant's "square shape" might not look like square in the **TileMapLayer**'s local coordinate system.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_tilemaplayer_property_tile_map_data"></div>

[`PackedByteArray`](class_packedbytearray.md) **tile_map_data** = ``PackedByteArray()`` <div id="class_tilemaplayer_property_tile_map_data"></div>

- `void` **set_tile_map_data_from_array** ( value: [`PackedByteArray`](class_packedbytearray.md) )
- [`PackedByteArray`](class_packedbytearray.md) **get_tile_map_data_as_array** ( )

The raw tile map data as a byte array.

**Note:** The returned array is *copied* and any changes to it will not update the original property value. See [`PackedByteArray`](class_packedbytearray.md) for more details.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_tilemaplayer_property_tile_set"></div>

[`TileSet`](class_tileset.md) **tile_set** <div id="class_tilemaplayer_property_tile_set"></div>

- `void` **set_tile_set** ( value: [`TileSet`](class_tileset.md) )
- [`TileSet`](class_tileset.md) **get_tile_set** ( )

The [`TileSet`](class_tileset.md) used by this layer. The textures, collisions, and additional behavior of all available tiles are stored here.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_tilemaplayer_property_use_kinematic_bodies"></div>

[`bool`](class_bool.md) **use_kinematic_bodies** = ``false`` <div id="class_tilemaplayer_property_use_kinematic_bodies"></div>

- `void` **set_use_kinematic_bodies** ( value: [`bool`](class_bool.md) )
- [`bool`](class_bool.md) **is_using_kinematic_bodies** ( )

If `true`, this **TileMapLayer** collision shapes will be instantiated as kinematic bodies. This can be needed for moving **TileMapLayer** nodes (i.e. moving platforms).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_tilemaplayer_property_x_draw_order_reversed"></div>

[`bool`](class_bool.md) **x_draw_order_reversed** = ``false`` <div id="class_tilemaplayer_property_x_draw_order_reversed"></div>

- `void` **set_x_draw_order_reversed** ( value: [`bool`](class_bool.md) )
- [`bool`](class_bool.md) **is_x_draw_order_reversed** ( )

If [`CanvasItem.y_sort_enabled`](class_canvasitem.md#class_canvasitem_property_y_sort_enabled) is enabled, setting this to `true` will reverse the order the tiles are drawn on the X-axis.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_tilemaplayer_property_y_sort_origin"></div>

[`int`](class_int.md) **y_sort_origin** = ``0`` <div id="class_tilemaplayer_property_y_sort_origin"></div>

- `void` **set_y_sort_origin** ( value: [`int`](class_int.md) )
- [`int`](class_int.md) **get_y_sort_origin** ( )

This Y-sort origin value is added to each tile's Y-sort origin value. This allows, for example, to fake a different height level. This can be useful for top-down view games.

<!-- rst-class:: classref-section-separator -->

---

## 方法说明

<div id="_class_tilemaplayer_private_method__tile_data_runtime_update"></div>

`void` **_tile_data_runtime_update** ( coords: [`Vector2i`](class_vector2i.md), tile_data: [`TileData`](class_tiledata.md) ) virtual[^virtual]<div id="class_tilemaplayer_private_method__tile_data_runtime_update"></div>

Called with a [`TileData`](class_tiledata.md) object about to be used internally by the **TileMapLayer**, allowing its modification at runtime.

This method is only called if [`_use_tile_data_runtime_update`](class_tilemaplayer.md#class_tilemaplayer_private_method__use_tile_data_runtime_update) is implemented and returns `true` for the given tile `coords`.

 **Warning:** The `tile_data` object's sub-resources are the same as the one in the TileSet. Modifying them might impact the whole TileSet. Instead, make sure to duplicate those resources.

 **Note:** If the properties of `tile_data` object should change over time, use [`notify_runtime_tile_data_update`](class_tilemaplayer.md#class_tilemaplayer_method_notify_runtime_tile_data_update) to notify the **TileMapLayer** it needs an update.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_tilemaplayer_private_method__use_tile_data_runtime_update"></div>

[`bool`](class_bool.md) **_use_tile_data_runtime_update** ( coords: [`Vector2i`](class_vector2i.md) ) virtual[^virtual]<div id="class_tilemaplayer_private_method__use_tile_data_runtime_update"></div>

Should return `true` if the tile at coordinates `coords` requires a runtime update.

 **Warning:** Make sure this function only returns `true` when needed. Any tile processed at runtime without a need for it will imply a significant performance penalty.

 **Note:** If the result of this function should change, use [`notify_runtime_tile_data_update`](class_tilemaplayer.md#class_tilemaplayer_method_notify_runtime_tile_data_update) to notify the **TileMapLayer** it needs an update.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_tilemaplayer_method_clear"></div>

`void` **clear** ( )<div id="class_tilemaplayer_method_clear"></div>

Clears all cells.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_tilemaplayer_method_erase_cell"></div>

`void` **erase_cell** ( coords: [`Vector2i`](class_vector2i.md) )<div id="class_tilemaplayer_method_erase_cell"></div>

Erases the cell at coordinates `coords`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_tilemaplayer_method_fix_invalid_tiles"></div>

`void` **fix_invalid_tiles** ( )<div id="class_tilemaplayer_method_fix_invalid_tiles"></div>

Clears cells containing tiles that do not exist in the [`tile_set`](class_tilemaplayer.md#class_tilemaplayer_property_tile_set).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_tilemaplayer_method_get_cell_alternative_tile"></div>

[`int`](class_int.md) **get_cell_alternative_tile** ( coords: [`Vector2i`](class_vector2i.md) ) const[^const]<div id="class_tilemaplayer_method_get_cell_alternative_tile"></div>

Returns the tile alternative ID of the cell at coordinates `coords`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_tilemaplayer_method_get_cell_atlas_coords"></div>

[`Vector2i`](class_vector2i.md) **get_cell_atlas_coords** ( coords: [`Vector2i`](class_vector2i.md) ) const[^const]<div id="class_tilemaplayer_method_get_cell_atlas_coords"></div>

Returns the tile atlas coordinates ID of the cell at coordinates `coords`. Returns `Vector2i(-1, -1)` if the cell does not exist.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_tilemaplayer_method_get_cell_source_id"></div>

[`int`](class_int.md) **get_cell_source_id** ( coords: [`Vector2i`](class_vector2i.md) ) const[^const]<div id="class_tilemaplayer_method_get_cell_source_id"></div>

Returns the tile source ID of the cell at coordinates `coords`. Returns `-1` if the cell does not exist.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_tilemaplayer_method_get_cell_tile_data"></div>

[`TileData`](class_tiledata.md) **get_cell_tile_data** ( coords: [`Vector2i`](class_vector2i.md) ) const[^const]<div id="class_tilemaplayer_method_get_cell_tile_data"></div>

Returns the [`TileData`](class_tiledata.md) object associated with the given cell, or `null` if the cell does not exist or is not a [`TileSetAtlasSource`](class_tilesetatlassource.md).

```

    func get_clicked_tile_power():
        var clicked_cell = tile_map_layer.local_to_map(tile_map_layer.get_local_mouse_position())
        var data = tile_map_layer.get_cell_tile_data(clicked_cell)
        if data:
            return data.get_custom_data("power")
        else:
            return 0
```



<!-- rst-class:: classref-item-separator -->

---

<div id="_class_tilemaplayer_method_get_coords_for_body_rid"></div>

[`Vector2i`](class_vector2i.md) **get_coords_for_body_rid** ( body: [`RID`](class_rid.md) ) const[^const]<div id="class_tilemaplayer_method_get_coords_for_body_rid"></div>

Returns the coordinates of the tile for given physics body [`RID`](class_rid.md). Such an [`RID`](class_rid.md) can be retrieved from [`KinematicCollision2D.get_collider_rid`](class_kinematiccollision2d.md#class_kinematiccollision2d_method_get_collider_rid), when colliding with a tile.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_tilemaplayer_method_get_navigation_map"></div>

[`RID`](class_rid.md) **get_navigation_map** ( ) const[^const]<div id="class_tilemaplayer_method_get_navigation_map"></div>

Returns the [`RID`](class_rid.md) of the [`NavigationServer2D`](class_navigationserver2d.md) navigation used by this **TileMapLayer**.

By default this returns the default [`World2D`](class_world2d.md) navigation map, unless a custom map was provided using [`set_navigation_map`](class_tilemaplayer.md#class_tilemaplayer_method_set_navigation_map).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_tilemaplayer_method_get_neighbor_cell"></div>

[`Vector2i`](class_vector2i.md) **get_neighbor_cell** ( coords: [`Vector2i`](class_vector2i.md), neighbor: [CellNeighbor](#enum_tileset_cellneighbor) ) const[^const]<div id="class_tilemaplayer_method_get_neighbor_cell"></div>

Returns the neighboring cell to the one at coordinates `coords`, identified by the `neighbor` direction. This method takes into account the different layouts a TileMap can take.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_tilemaplayer_method_get_pattern"></div>

[`TileMapPattern`](class_tilemappattern.md) **get_pattern** ( coords_array: [Array](class_array.md) [`Vector2i`](class_vector2i.md) )<div id="class_tilemaplayer_method_get_pattern"></div>

Creates and returns a new [`TileMapPattern`](class_tilemappattern.md) from the given array of cells. See also [`set_pattern`](class_tilemaplayer.md#class_tilemaplayer_method_set_pattern).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_tilemaplayer_method_get_surrounding_cells"></div>

[Array](class_array.md) [`Vector2i`](class_vector2i.md) **get_surrounding_cells** ( coords: [`Vector2i`](class_vector2i.md) )<div id="class_tilemaplayer_method_get_surrounding_cells"></div>

Returns the list of all neighboring cells to the one at `coords`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_tilemaplayer_method_get_used_cells"></div>

[Array](class_array.md) [`Vector2i`](class_vector2i.md) **get_used_cells** ( ) const[^const]<div id="class_tilemaplayer_method_get_used_cells"></div>

Returns a [`Vector2i`](class_vector2i.md) array with the positions of all cells containing a tile. A cell is considered empty if its source identifier equals `-1`, its atlas coordinate identifier is `Vector2(-1, -1)` and its alternative identifier is `-1`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_tilemaplayer_method_get_used_cells_by_id"></div>

[Array](class_array.md) [`Vector2i`](class_vector2i.md) **get_used_cells_by_id** ( source_id: [`int`](class_int.md) = -1, atlas_coords: [`Vector2i`](class_vector2i.md) = Vector2i(-1, -1), alternative_tile: [`int`](class_int.md) = -1 ) const[^const]<div id="class_tilemaplayer_method_get_used_cells_by_id"></div>

Returns a [`Vector2i`](class_vector2i.md) array with the positions of all cells containing a tile. Tiles may be filtered according to their source (`source_id`), their atlas coordinates (`atlas_coords`), or alternative id (`alternative_tile`).

If a parameter has its value set to the default one, this parameter is not used to filter a cell. Thus, if all parameters have their respective default values, this method returns the same result as [`get_used_cells`](class_tilemaplayer.md#class_tilemaplayer_method_get_used_cells).

A cell is considered empty if its source identifier equals `-1`, its atlas coordinate identifier is `Vector2(-1, -1)` and its alternative identifier is `-1`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_tilemaplayer_method_get_used_rect"></div>

[`Rect2i`](class_rect2i.md) **get_used_rect** ( ) const[^const]<div id="class_tilemaplayer_method_get_used_rect"></div>

Returns a rectangle enclosing the used (non-empty) tiles of the map.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_tilemaplayer_method_has_body_rid"></div>

[`bool`](class_bool.md) **has_body_rid** ( body: [`RID`](class_rid.md) ) const[^const]<div id="class_tilemaplayer_method_has_body_rid"></div>

Returns whether the provided `body` [`RID`](class_rid.md) belongs to one of this **TileMapLayer**'s cells.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_tilemaplayer_method_is_cell_flipped_h"></div>

[`bool`](class_bool.md) **is_cell_flipped_h** ( coords: [`Vector2i`](class_vector2i.md) ) const[^const]<div id="class_tilemaplayer_method_is_cell_flipped_h"></div>

Returns `true` if the cell at coordinates `coords` is flipped horizontally. The result is valid only for atlas sources.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_tilemaplayer_method_is_cell_flipped_v"></div>

[`bool`](class_bool.md) **is_cell_flipped_v** ( coords: [`Vector2i`](class_vector2i.md) ) const[^const]<div id="class_tilemaplayer_method_is_cell_flipped_v"></div>

Returns `true` if the cell at coordinates `coords` is flipped vertically. The result is valid only for atlas sources.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_tilemaplayer_method_is_cell_transposed"></div>

[`bool`](class_bool.md) **is_cell_transposed** ( coords: [`Vector2i`](class_vector2i.md) ) const[^const]<div id="class_tilemaplayer_method_is_cell_transposed"></div>

Returns `true` if the cell at coordinates `coords` is transposed. The result is valid only for atlas sources.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_tilemaplayer_method_local_to_map"></div>

[`Vector2i`](class_vector2i.md) **local_to_map** ( local_position: [`Vector2`](class_vector2.md) ) const[^const]<div id="class_tilemaplayer_method_local_to_map"></div>

Returns the map coordinates of the cell containing the given `local_position`. If `local_position` is in global coordinates, consider using [`Node2D.to_local`](class_node2d.md#class_node2d_method_to_local) before passing it to this method. See also [`map_to_local`](class_tilemaplayer.md#class_tilemaplayer_method_map_to_local).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_tilemaplayer_method_map_pattern"></div>

[`Vector2i`](class_vector2i.md) **map_pattern** ( position_in_tilemap: [`Vector2i`](class_vector2i.md), coords_in_pattern: [`Vector2i`](class_vector2i.md), pattern: [`TileMapPattern`](class_tilemappattern.md) )<div id="class_tilemaplayer_method_map_pattern"></div>

Returns for the given coordinates `coords_in_pattern` in a [`TileMapPattern`](class_tilemappattern.md) the corresponding cell coordinates if the pattern was pasted at the `position_in_tilemap` coordinates (see [`set_pattern`](class_tilemaplayer.md#class_tilemaplayer_method_set_pattern)). This mapping is required as in half-offset tile shapes, the mapping might not work by calculating `position_in_tile_map + coords_in_pattern`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_tilemaplayer_method_map_to_local"></div>

[`Vector2`](class_vector2.md) **map_to_local** ( map_position: [`Vector2i`](class_vector2i.md) ) const[^const]<div id="class_tilemaplayer_method_map_to_local"></div>

Returns the centered position of a cell in the **TileMapLayer**'s local coordinate space. To convert the returned value into global coordinates, use [`Node2D.to_global`](class_node2d.md#class_node2d_method_to_global). See also [`local_to_map`](class_tilemaplayer.md#class_tilemaplayer_method_local_to_map).

 **Note:** This may not correspond to the visual position of the tile, i.e. it ignores the [`TileData.texture_origin`](class_tiledata.md#class_tiledata_property_texture_origin) property of individual tiles.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_tilemaplayer_method_notify_runtime_tile_data_update"></div>

`void` **notify_runtime_tile_data_update** ( )<div id="class_tilemaplayer_method_notify_runtime_tile_data_update"></div>

Notifies the **TileMapLayer** node that calls to [`_use_tile_data_runtime_update`](class_tilemaplayer.md#class_tilemaplayer_private_method__use_tile_data_runtime_update) or [`_tile_data_runtime_update`](class_tilemaplayer.md#class_tilemaplayer_private_method__tile_data_runtime_update) will lead to different results. This will thus trigger a **TileMapLayer** update.

 **Warning:** Updating the **TileMapLayer** is computationally expensive and may impact performance. Try to limit the number of calls to this function to avoid unnecessary update.

 **Note:** This does not trigger a direct update of the **TileMapLayer**, the update will be done at the end of the frame as usual (unless you call [`update_internals`](class_tilemaplayer.md#class_tilemaplayer_method_update_internals)).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_tilemaplayer_method_set_cell"></div>

`void` **set_cell** ( coords: [`Vector2i`](class_vector2i.md), source_id: [`int`](class_int.md) = -1, atlas_coords: [`Vector2i`](class_vector2i.md) = Vector2i(-1, -1), alternative_tile: [`int`](class_int.md) = 0 )<div id="class_tilemaplayer_method_set_cell"></div>

Sets the tile identifiers for the cell at coordinates `coords`. Each tile of the [`TileSet`](class_tileset.md) is identified using three parts:

- The source identifier `source_id` identifies a [`TileSetSource`](class_tilesetsource.md) identifier. See [`TileSet.set_source_id`](class_tileset.md#class_tileset_method_set_source_id),

- The atlas coordinate identifier `atlas_coords` identifies a tile coordinates in the atlas (if the source is a [`TileSetAtlasSource`](class_tilesetatlassource.md)). For [`TileSetScenesCollectionSource`](class_tilesetscenescollectionsource.md) it should always be `Vector2i(0, 0)`,

- The alternative tile identifier `alternative_tile` identifies a tile alternative in the atlas (if the source is a [`TileSetAtlasSource`](class_tilesetatlassource.md)), and the scene for a [`TileSetScenesCollectionSource`](class_tilesetscenescollectionsource.md).

If `source_id` is set to `-1`, `atlas_coords` to `Vector2i(-1, -1)`, or `alternative_tile` to `-1`, the cell will be erased. An erased cell gets **all** its identifiers automatically set to their respective invalid values, namely `-1`, `Vector2i(-1, -1)` and `-1`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_tilemaplayer_method_set_cells_terrain_connect"></div>

`void` **set_cells_terrain_connect** ( cells: [Array](class_array.md) [`Vector2i`](class_vector2i.md), terrain_set: [`int`](class_int.md), terrain: [`int`](class_int.md), ignore_empty_terrains: [`bool`](class_bool.md) = true )<div id="class_tilemaplayer_method_set_cells_terrain_connect"></div>

Update all the cells in the `cells` coordinates array so that they use the given `terrain` for the given `terrain_set`. If an updated cell has the same terrain as one of its neighboring cells, this function tries to join the two. This function might update neighboring tiles if needed to create correct terrain transitions.

If `ignore_empty_terrains` is true, empty terrains will be ignored when trying to find the best fitting tile for the given terrain constraints.

 **Note:** To work correctly, this method requires the **TileMapLayer**'s TileSet to have terrains set up with all required terrain combinations. Otherwise, it may produce unexpected results.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_tilemaplayer_method_set_cells_terrain_path"></div>

`void` **set_cells_terrain_path** ( path: [Array](class_array.md) [`Vector2i`](class_vector2i.md), terrain_set: [`int`](class_int.md), terrain: [`int`](class_int.md), ignore_empty_terrains: [`bool`](class_bool.md) = true )<div id="class_tilemaplayer_method_set_cells_terrain_path"></div>

Update all the cells in the `path` coordinates array so that they use the given `terrain` for the given `terrain_set`. The function will also connect two successive cell in the path with the same terrain. This function might update neighboring tiles if needed to create correct terrain transitions.

If `ignore_empty_terrains` is true, empty terrains will be ignored when trying to find the best fitting tile for the given terrain constraints.

 **Note:** To work correctly, this method requires the **TileMapLayer**'s TileSet to have terrains set up with all required terrain combinations. Otherwise, it may produce unexpected results.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_tilemaplayer_method_set_navigation_map"></div>

`void` **set_navigation_map** ( map: [`RID`](class_rid.md) )<div id="class_tilemaplayer_method_set_navigation_map"></div>

Sets a custom `map` as a [`NavigationServer2D`](class_navigationserver2d.md) navigation map. If not set, uses the default [`World2D`](class_world2d.md) navigation map instead.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_tilemaplayer_method_set_pattern"></div>

`void` **set_pattern** ( position: [`Vector2i`](class_vector2i.md), pattern: [`TileMapPattern`](class_tilemappattern.md) )<div id="class_tilemaplayer_method_set_pattern"></div>

Pastes the [`TileMapPattern`](class_tilemappattern.md) at the given `position` in the tile map. See also [`get_pattern`](class_tilemaplayer.md#class_tilemaplayer_method_get_pattern).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_tilemaplayer_method_update_internals"></div>

`void` **update_internals** ( )<div id="class_tilemaplayer_method_update_internals"></div>

Triggers a direct update of the **TileMapLayer**. Usually, calling this function is not needed, as **TileMapLayer** node updates automatically when one of its properties or cells is modified.

However, for performance reasons, those updates are batched and delayed to the end of the frame. Calling this function will force the **TileMapLayer** to update right away instead.

 **Warning:** Updating the **TileMapLayer** is computationally expensive and may impact performance. Try to limit the number of updates and how many tiles they impact.

[^virtual]: 本方法通常需要用户覆盖才能生效。
[^const]: 本方法无副作用，不会修改该实例的任何成员变量。
[^vararg]: 本方法除了能接受在此处描述的参数外，还能够继续接受任意数量的参数。
[^constructor]: 本方法用于构造某个类型。
[^static]: 调用本方法无需实例，可直接使用类名进行调用。
[^operator]: 本方法描述的是使用本类型作为左操作数的有效运算符。
[^bitfield]: 这个值是由下列位标志构成位掩码的整数。
[^void]: 无返回值。
