<!-- ⚠ 请勿编辑本文件 ⚠ -->
<!-- 本文档使用脚本从 WeDot 引擎源码仓库生成。 -->
<!-- 生成脚本：https://github.com/WeDot-Engine/WeDot/tree/4.3/doc/tools/make_md.py； -->
<!-- 原文件：https://github.com/WeDot-Engine/WeDot/tree/4.3/doc/classes/TileSetAtlasSource.xml。 -->

<div id="_class_tilesetatlassource"></div>

# TileSetAtlasSource

**继承：** [`TileSetSource`](class_tilesetsource.md) **<** [`Resource`](class_resource.md) **<** [`RefCounted`](class_refcounted.md) **<** [`Object`](class_object.md)

Exposes a 2D atlas texture as a set of tiles for a [`TileSet`](class_tileset.md) resource.

## 描述

An atlas is a grid of tiles laid out on a texture. Each tile in the grid must be exposed using [`create_tile`](#class_tilesetatlassource_method_create_tile). Those tiles are then indexed using their coordinates in the grid.

Each tile can also have a size in the grid coordinates, making it more or less cells in the atlas.

Alternatives version of a tile can be created using [`create_alternative_tile`](#class_tilesetatlassource_method_create_alternative_tile), which are then indexed using an alternative ID. The main tile (the one in the grid), is accessed with an alternative ID equal to 0.

Each tile alternate has a set of properties that is defined by the source's [`TileSet`](class_tileset.md) layers. Those properties are stored in a TileData object that can be accessed and modified using [`get_tile_data`](#class_tilesetatlassource_method_get_tile_data).

As TileData properties are stored directly in the TileSetAtlasSource resource, their properties might also be set using `TileSetAtlasSource.set("<coords_x>:<coords_y>/<alternative_id>/<tile_data_property>")`.

## 属性

| [`Vector2i`](class_vector2i.md)   | [`margins`](#class_tilesetatlassource_property_margins)                         | ``Vector2i(0, 0)``   |
| [`Vector2i`](class_vector2i.md)   | [`separation`](#class_tilesetatlassource_property_separation)                   | ``Vector2i(0, 0)``   |
| [`Texture2D`](class_texture2d.md) | [`texture`](#class_tilesetatlassource_property_texture)                         |                      |
| [`Vector2i`](class_vector2i.md)   | [`texture_region_size`](#class_tilesetatlassource_property_texture_region_size) | ``Vector2i(16, 16)`` |
| [`bool`](class_bool.md)           | [`use_texture_padding`](#class_tilesetatlassource_property_use_texture_padding) | ``true``             |

## 方法

| `void`                                                          | [`clear_tiles_outside_texture`](#class_tilesetatlassource_method_clear_tiles_outside_texture) ( )                                                                                                                                                                                                                                                                                        |
| [`int`](class_int.md)                                           | [`create_alternative_tile`](#class_tilesetatlassource_method_create_alternative_tile) ( atlas_coords: [`Vector2i`](class_vector2i.md), alternative_id_override: [`int`](class_int.md) = -1 )                                                                                                                                                                                             |
| `void`                                                          | [`create_tile`](#class_tilesetatlassource_method_create_tile) ( atlas_coords: [`Vector2i`](class_vector2i.md), size: [`Vector2i`](class_vector2i.md) = Vector2i(1, 1) )                                                                                                                                                                                                                  |
| [`Vector2i`](class_vector2i.md)                                 | [`get_atlas_grid_size`](#class_tilesetatlassource_method_get_atlas_grid_size) ( ) const[^const]                                                                                                                                                                                                                                                                                          |
| [`int`](class_int.md)                                           | [`get_next_alternative_tile_id`](#class_tilesetatlassource_method_get_next_alternative_tile_id) ( atlas_coords: [`Vector2i`](class_vector2i.md) ) const[^const]                                                                                                                                                                                                                          |
| [`Texture2D`](class_texture2d.md)                               | [`get_runtime_texture`](#class_tilesetatlassource_method_get_runtime_texture) ( ) const[^const]                                                                                                                                                                                                                                                                                          |
| [`Rect2i`](class_rect2i.md)                                     | [`get_runtime_tile_texture_region`](#class_tilesetatlassource_method_get_runtime_tile_texture_region) ( atlas_coords: [`Vector2i`](class_vector2i.md), frame: [`int`](class_int.md) ) const[^const]                                                                                                                                                                                      |
| [`int`](class_int.md)                                           | [`get_tile_animation_columns`](#class_tilesetatlassource_method_get_tile_animation_columns) ( atlas_coords: [`Vector2i`](class_vector2i.md) ) const[^const]                                                                                                                                                                                                                              |
| [`float`](class_float.md)                                       | [`get_tile_animation_frame_duration`](#class_tilesetatlassource_method_get_tile_animation_frame_duration) ( atlas_coords: [`Vector2i`](class_vector2i.md), frame_index: [`int`](class_int.md) ) const[^const]                                                                                                                                                                            |
| [`int`](class_int.md)                                           | [`get_tile_animation_frames_count`](#class_tilesetatlassource_method_get_tile_animation_frames_count) ( atlas_coords: [`Vector2i`](class_vector2i.md) ) const[^const]                                                                                                                                                                                                                    |
| [TileAnimationMode](#enum_tilesetatlassource_tileanimationmode) | [`get_tile_animation_mode`](#class_tilesetatlassource_method_get_tile_animation_mode) ( atlas_coords: [`Vector2i`](class_vector2i.md) ) const[^const]                                                                                                                                                                                                                                    |
| [`Vector2i`](class_vector2i.md)                                 | [`get_tile_animation_separation`](#class_tilesetatlassource_method_get_tile_animation_separation) ( atlas_coords: [`Vector2i`](class_vector2i.md) ) const[^const]                                                                                                                                                                                                                        |
| [`float`](class_float.md)                                       | [`get_tile_animation_speed`](#class_tilesetatlassource_method_get_tile_animation_speed) ( atlas_coords: [`Vector2i`](class_vector2i.md) ) const[^const]                                                                                                                                                                                                                                  |
| [`float`](class_float.md)                                       | [`get_tile_animation_total_duration`](#class_tilesetatlassource_method_get_tile_animation_total_duration) ( atlas_coords: [`Vector2i`](class_vector2i.md) ) const[^const]                                                                                                                                                                                                                |
| [`Vector2i`](class_vector2i.md)                                 | [`get_tile_at_coords`](#class_tilesetatlassource_method_get_tile_at_coords) ( atlas_coords: [`Vector2i`](class_vector2i.md) ) const[^const]                                                                                                                                                                                                                                              |
| [`TileData`](class_tiledata.md)                                 | [`get_tile_data`](#class_tilesetatlassource_method_get_tile_data) ( atlas_coords: [`Vector2i`](class_vector2i.md), alternative_tile: [`int`](class_int.md) ) const[^const]                                                                                                                                                                                                               |
| [`Vector2i`](class_vector2i.md)                                 | [`get_tile_size_in_atlas`](#class_tilesetatlassource_method_get_tile_size_in_atlas) ( atlas_coords: [`Vector2i`](class_vector2i.md) ) const[^const]                                                                                                                                                                                                                                      |
| [`Rect2i`](class_rect2i.md)                                     | [`get_tile_texture_region`](#class_tilesetatlassource_method_get_tile_texture_region) ( atlas_coords: [`Vector2i`](class_vector2i.md), frame: [`int`](class_int.md) = 0 ) const[^const]                                                                                                                                                                                                  |
| [`PackedVector2Array`](class_packedvector2array.md)             | [`get_tiles_to_be_removed_on_change`](#class_tilesetatlassource_method_get_tiles_to_be_removed_on_change) ( texture: [`Texture2D`](class_texture2d.md), margins: [`Vector2i`](class_vector2i.md), separation: [`Vector2i`](class_vector2i.md), texture_region_size: [`Vector2i`](class_vector2i.md) )                                                                                    |
| [`bool`](class_bool.md)                                         | [`has_room_for_tile`](#class_tilesetatlassource_method_has_room_for_tile) ( atlas_coords: [`Vector2i`](class_vector2i.md), size: [`Vector2i`](class_vector2i.md), animation_columns: [`int`](class_int.md), animation_separation: [`Vector2i`](class_vector2i.md), frames_count: [`int`](class_int.md), ignored_tile: [`Vector2i`](class_vector2i.md) = Vector2i(-1, -1) ) const[^const] |
| [`bool`](class_bool.md)                                         | [`has_tiles_outside_texture`](#class_tilesetatlassource_method_has_tiles_outside_texture) ( ) const[^const]                                                                                                                                                                                                                                                                              |
| `void`                                                          | [`move_tile_in_atlas`](#class_tilesetatlassource_method_move_tile_in_atlas) ( atlas_coords: [`Vector2i`](class_vector2i.md), new_atlas_coords: [`Vector2i`](class_vector2i.md) = Vector2i(-1, -1), new_size: [`Vector2i`](class_vector2i.md) = Vector2i(-1, -1) )                                                                                                                        |
| `void`                                                          | [`remove_alternative_tile`](#class_tilesetatlassource_method_remove_alternative_tile) ( atlas_coords: [`Vector2i`](class_vector2i.md), alternative_tile: [`int`](class_int.md) )                                                                                                                                                                                                         |
| `void`                                                          | [`remove_tile`](#class_tilesetatlassource_method_remove_tile) ( atlas_coords: [`Vector2i`](class_vector2i.md) )                                                                                                                                                                                                                                                                          |
| `void`                                                          | [`set_alternative_tile_id`](#class_tilesetatlassource_method_set_alternative_tile_id) ( atlas_coords: [`Vector2i`](class_vector2i.md), alternative_tile: [`int`](class_int.md), new_id: [`int`](class_int.md) )                                                                                                                                                                          |
| `void`                                                          | [`set_tile_animation_columns`](#class_tilesetatlassource_method_set_tile_animation_columns) ( atlas_coords: [`Vector2i`](class_vector2i.md), frame_columns: [`int`](class_int.md) )                                                                                                                                                                                                      |
| `void`                                                          | [`set_tile_animation_frame_duration`](#class_tilesetatlassource_method_set_tile_animation_frame_duration) ( atlas_coords: [`Vector2i`](class_vector2i.md), frame_index: [`int`](class_int.md), duration: [`float`](class_float.md) )                                                                                                                                                     |
| `void`                                                          | [`set_tile_animation_frames_count`](#class_tilesetatlassource_method_set_tile_animation_frames_count) ( atlas_coords: [`Vector2i`](class_vector2i.md), frames_count: [`int`](class_int.md) )                                                                                                                                                                                             |
| `void`                                                          | [`set_tile_animation_mode`](#class_tilesetatlassource_method_set_tile_animation_mode) ( atlas_coords: [`Vector2i`](class_vector2i.md), mode: [TileAnimationMode](#enum_tilesetatlassource_tileanimationmode) )                                                                                                                                                                           |
| `void`                                                          | [`set_tile_animation_separation`](#class_tilesetatlassource_method_set_tile_animation_separation) ( atlas_coords: [`Vector2i`](class_vector2i.md), separation: [`Vector2i`](class_vector2i.md) )                                                                                                                                                                                         |
| `void`                                                          | [`set_tile_animation_speed`](#class_tilesetatlassource_method_set_tile_animation_speed) ( atlas_coords: [`Vector2i`](class_vector2i.md), speed: [`float`](class_float.md) )                                                                                                                                                                                                              |

<!-- rst-class:: classref-section-separator -->

---

## 枚举

<div id="_class_enum_tilesetatlassource_tileanimationmode"></div>

enum **TileAnimationMode**: <div id="enum_tilesetatlassource_tileanimationmode"></div>

<div id="_class_tilesetatlassource_constant_tile_animation_mode_default"></div>

[TileAnimationMode](#enum_tilesetatlassource_tileanimationmode) **TILE_ANIMATION_MODE_DEFAULT** = ``0``

Tile animations start at same time, looking identical.

<div id="_class_tilesetatlassource_constant_tile_animation_mode_random_start_times"></div>

[TileAnimationMode](#enum_tilesetatlassource_tileanimationmode) **TILE_ANIMATION_MODE_RANDOM_START_TIMES** = ``1``

Tile animations start at random times, looking varied.

<div id="_class_tilesetatlassource_constant_tile_animation_mode_max"></div>

[TileAnimationMode](#enum_tilesetatlassource_tileanimationmode) **TILE_ANIMATION_MODE_MAX** = ``2``

Represents the size of the [TileAnimationMode](#enum_tilesetatlassource_tileanimationmode) enum.

<!-- rst-class:: classref-section-separator -->

---

## 常量

<div id="_class_tilesetatlassource_constant_transform_flip_h"></div>

**TRANSFORM_FLIP_H** = ``4096`` <div id="class_tilesetatlassource_constant_transform_flip_h"></div>

Represents cell's horizontal flip flag. Should be used directly with [`TileMap`](class_tilemap.md) to flip placed tiles by altering their alternative IDs.

```

    var alternate_id = $TileMap.get_cell_alternative_tile(0, Vector2i(2, 2))
    if not alternate_id & TileSetAtlasSource.TRANSFORM_FLIP_H:
        # If tile is not already flipped, flip it.
        $TileMap.set_cell(0, Vector2i(2, 2), source_id, atlas_coords, alternate_id | TileSetAtlasSource.TRANSFORM_FLIP_H)
```

 **Note:** These transformations can be combined to do the equivalent of 0, 90, 180, and 270 degree rotations, as shown below:

```

    enum TileTransform {
        ROTATE_0 = 0,
        ROTATE_90 = TileSetAtlasSource.TRANSFORM_TRANSPOSE | TileSetAtlasSource.TRANSFORM_FLIP_H,
        ROTATE_180 = TileSetAtlasSource.TRANSFORM_FLIP_H | TileSetAtlasSource.TRANSFORM_FLIP_V,
        ROTATE_270 = TileSetAtlasSource.TRANSFORM_TRANSPOSE | TileSetAtlasSource.TRANSFORM_FLIP_V,
    }
```





<div id="_class_tilesetatlassource_constant_transform_flip_v"></div>

**TRANSFORM_FLIP_V** = ``8192`` <div id="class_tilesetatlassource_constant_transform_flip_v"></div>

Represents cell's vertical flip flag. See [`TRANSFORM_FLIP_H`](#class_tilesetatlassource_constant_transform_flip_h) for usage.

<div id="_class_tilesetatlassource_constant_transform_transpose"></div>

**TRANSFORM_TRANSPOSE** = ``16384`` <div id="class_tilesetatlassource_constant_transform_transpose"></div>

Represents cell's transposed flag. See [`TRANSFORM_FLIP_H`](#class_tilesetatlassource_constant_transform_flip_h) for usage.

<!-- rst-class:: classref-section-separator -->

---

## 属性说明

<div id="_class_tilesetatlassource_property_margins"></div>

[`Vector2i`](class_vector2i.md) **margins** = ``Vector2i(0, 0)`` <div id="class_tilesetatlassource_property_margins"></div>

- `void` **set_margins** ( value: [`Vector2i`](class_vector2i.md) )
- [`Vector2i`](class_vector2i.md) **get_margins** ( )

Margins, in pixels, to offset the origin of the grid in the texture.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_tilesetatlassource_property_separation"></div>

[`Vector2i`](class_vector2i.md) **separation** = ``Vector2i(0, 0)`` <div id="class_tilesetatlassource_property_separation"></div>

- `void` **set_separation** ( value: [`Vector2i`](class_vector2i.md) )
- [`Vector2i`](class_vector2i.md) **get_separation** ( )

Separation, in pixels, between each tile texture region of the grid.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_tilesetatlassource_property_texture"></div>

[`Texture2D`](class_texture2d.md) **texture** <div id="class_tilesetatlassource_property_texture"></div>

- `void` **set_texture** ( value: [`Texture2D`](class_texture2d.md) )
- [`Texture2D`](class_texture2d.md) **get_texture** ( )

The atlas texture.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_tilesetatlassource_property_texture_region_size"></div>

[`Vector2i`](class_vector2i.md) **texture_region_size** = ``Vector2i(16, 16)`` <div id="class_tilesetatlassource_property_texture_region_size"></div>

- `void` **set_texture_region_size** ( value: [`Vector2i`](class_vector2i.md) )
- [`Vector2i`](class_vector2i.md) **get_texture_region_size** ( )

The base tile size in the texture (in pixel). This size must be bigger than the TileSet's `tile_size` value.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_tilesetatlassource_property_use_texture_padding"></div>

[`bool`](class_bool.md) **use_texture_padding** = ``true`` <div id="class_tilesetatlassource_property_use_texture_padding"></div>

- `void` **set_use_texture_padding** ( value: [`bool`](class_bool.md) )
- [`bool`](class_bool.md) **get_use_texture_padding** ( )

If `true`, generates an internal texture with an additional one pixel padding around each tile. Texture padding avoids a common artifact where lines appear between tiles.

Disabling this setting might lead a small performance improvement, as generating the internal texture requires both memory and processing time when the TileSetAtlasSource resource is modified.

<!-- rst-class:: classref-section-separator -->

---

## 方法说明

<div id="_class_tilesetatlassource_method_clear_tiles_outside_texture"></div>

`void` **clear_tiles_outside_texture** ( )<div id="class_tilesetatlassource_method_clear_tiles_outside_texture"></div>

Removes all tiles that don't fit the available texture area. This method iterates over all the source's tiles, so it's advised to use [`has_tiles_outside_texture`](#class_tilesetatlassource_method_has_tiles_outside_texture) beforehand.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_tilesetatlassource_method_create_alternative_tile"></div>

[`int`](class_int.md) **create_alternative_tile** ( atlas_coords: [`Vector2i`](class_vector2i.md), alternative_id_override: [`int`](class_int.md) = -1 )<div id="class_tilesetatlassource_method_create_alternative_tile"></div>

Creates an alternative tile for the tile at coordinates `atlas_coords`. If `alternative_id_override` is -1, give it an automatically generated unique ID, or assigns it the given ID otherwise.

Returns the new alternative identifier, or -1 if the alternative could not be created with a provided `alternative_id_override`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_tilesetatlassource_method_create_tile"></div>

`void` **create_tile** ( atlas_coords: [`Vector2i`](class_vector2i.md), size: [`Vector2i`](class_vector2i.md) = Vector2i(1, 1) )<div id="class_tilesetatlassource_method_create_tile"></div>

Creates a new tile at coordinates `atlas_coords` with the given `size`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_tilesetatlassource_method_get_atlas_grid_size"></div>

[`Vector2i`](class_vector2i.md) **get_atlas_grid_size** ( ) const[^const]<div id="class_tilesetatlassource_method_get_atlas_grid_size"></div>

Returns the atlas grid size, which depends on how many tiles can fit in the texture. It thus depends on the [`texture`](#class_tilesetatlassource_property_texture)'s size, the atlas [`margins`](#class_tilesetatlassource_property_margins), and the tiles' [`texture_region_size`](#class_tilesetatlassource_property_texture_region_size).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_tilesetatlassource_method_get_next_alternative_tile_id"></div>

[`int`](class_int.md) **get_next_alternative_tile_id** ( atlas_coords: [`Vector2i`](class_vector2i.md) ) const[^const]<div id="class_tilesetatlassource_method_get_next_alternative_tile_id"></div>

Returns the alternative ID a following call to [`create_alternative_tile`](#class_tilesetatlassource_method_create_alternative_tile) would return.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_tilesetatlassource_method_get_runtime_texture"></div>

[`Texture2D`](class_texture2d.md) **get_runtime_texture** ( ) const[^const]<div id="class_tilesetatlassource_method_get_runtime_texture"></div>

If [`use_texture_padding`](#class_tilesetatlassource_property_use_texture_padding) is `false`, returns [`texture`](#class_tilesetatlassource_property_texture). Otherwise, returns and internal [`ImageTexture`](class_imagetexture.md) created that includes the padding.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_tilesetatlassource_method_get_runtime_tile_texture_region"></div>

[`Rect2i`](class_rect2i.md) **get_runtime_tile_texture_region** ( atlas_coords: [`Vector2i`](class_vector2i.md), frame: [`int`](class_int.md) ) const[^const]<div id="class_tilesetatlassource_method_get_runtime_tile_texture_region"></div>

Returns the region of the tile at coordinates `atlas_coords` for the given `frame` inside the texture returned by [`get_runtime_texture`](#class_tilesetatlassource_method_get_runtime_texture).

 **Note:** If [`use_texture_padding`](#class_tilesetatlassource_property_use_texture_padding) is `false`, returns the same as [`get_tile_texture_region`](#class_tilesetatlassource_method_get_tile_texture_region).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_tilesetatlassource_method_get_tile_animation_columns"></div>

[`int`](class_int.md) **get_tile_animation_columns** ( atlas_coords: [`Vector2i`](class_vector2i.md) ) const[^const]<div id="class_tilesetatlassource_method_get_tile_animation_columns"></div>

Returns how many columns the tile at `atlas_coords` has in its animation layout.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_tilesetatlassource_method_get_tile_animation_frame_duration"></div>

[`float`](class_float.md) **get_tile_animation_frame_duration** ( atlas_coords: [`Vector2i`](class_vector2i.md), frame_index: [`int`](class_int.md) ) const[^const]<div id="class_tilesetatlassource_method_get_tile_animation_frame_duration"></div>

Returns the animation frame duration of frame `frame_index` for the tile at coordinates `atlas_coords`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_tilesetatlassource_method_get_tile_animation_frames_count"></div>

[`int`](class_int.md) **get_tile_animation_frames_count** ( atlas_coords: [`Vector2i`](class_vector2i.md) ) const[^const]<div id="class_tilesetatlassource_method_get_tile_animation_frames_count"></div>

Returns how many animation frames has the tile at coordinates `atlas_coords`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_tilesetatlassource_method_get_tile_animation_mode"></div>

[TileAnimationMode](#enum_tilesetatlassource_tileanimationmode) **get_tile_animation_mode** ( atlas_coords: [`Vector2i`](class_vector2i.md) ) const[^const]<div id="class_tilesetatlassource_method_get_tile_animation_mode"></div>

Returns the tile animation mode of the tile at `atlas_coords`. See also [`set_tile_animation_mode`](#class_tilesetatlassource_method_set_tile_animation_mode).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_tilesetatlassource_method_get_tile_animation_separation"></div>

[`Vector2i`](class_vector2i.md) **get_tile_animation_separation** ( atlas_coords: [`Vector2i`](class_vector2i.md) ) const[^const]<div id="class_tilesetatlassource_method_get_tile_animation_separation"></div>

Returns the separation (as in the atlas grid) between each frame of an animated tile at coordinates `atlas_coords`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_tilesetatlassource_method_get_tile_animation_speed"></div>

[`float`](class_float.md) **get_tile_animation_speed** ( atlas_coords: [`Vector2i`](class_vector2i.md) ) const[^const]<div id="class_tilesetatlassource_method_get_tile_animation_speed"></div>

Returns the animation speed of the tile at coordinates `atlas_coords`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_tilesetatlassource_method_get_tile_animation_total_duration"></div>

[`float`](class_float.md) **get_tile_animation_total_duration** ( atlas_coords: [`Vector2i`](class_vector2i.md) ) const[^const]<div id="class_tilesetatlassource_method_get_tile_animation_total_duration"></div>

Returns the sum of the sum of the frame durations of the tile at coordinates `atlas_coords`. This value needs to be divided by the animation speed to get the actual animation loop duration.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_tilesetatlassource_method_get_tile_at_coords"></div>

[`Vector2i`](class_vector2i.md) **get_tile_at_coords** ( atlas_coords: [`Vector2i`](class_vector2i.md) ) const[^const]<div id="class_tilesetatlassource_method_get_tile_at_coords"></div>

If there is a tile covering the `atlas_coords` coordinates, returns the top-left coordinates of the tile (thus its coordinate ID). Returns `Vector2i(-1, -1)` otherwise.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_tilesetatlassource_method_get_tile_data"></div>

[`TileData`](class_tiledata.md) **get_tile_data** ( atlas_coords: [`Vector2i`](class_vector2i.md), alternative_tile: [`int`](class_int.md) ) const[^const]<div id="class_tilesetatlassource_method_get_tile_data"></div>

Returns the [`TileData`](class_tiledata.md) object for the given atlas coordinates and alternative ID.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_tilesetatlassource_method_get_tile_size_in_atlas"></div>

[`Vector2i`](class_vector2i.md) **get_tile_size_in_atlas** ( atlas_coords: [`Vector2i`](class_vector2i.md) ) const[^const]<div id="class_tilesetatlassource_method_get_tile_size_in_atlas"></div>

Returns the size of the tile (in the grid coordinates system) at coordinates `atlas_coords`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_tilesetatlassource_method_get_tile_texture_region"></div>

[`Rect2i`](class_rect2i.md) **get_tile_texture_region** ( atlas_coords: [`Vector2i`](class_vector2i.md), frame: [`int`](class_int.md) = 0 ) const[^const]<div id="class_tilesetatlassource_method_get_tile_texture_region"></div>

Returns a tile's texture region in the atlas texture. For animated tiles, a `frame` argument might be provided for the different frames of the animation.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_tilesetatlassource_method_get_tiles_to_be_removed_on_change"></div>

[`PackedVector2Array`](class_packedvector2array.md) **get_tiles_to_be_removed_on_change** ( texture: [`Texture2D`](class_texture2d.md), margins: [`Vector2i`](class_vector2i.md), separation: [`Vector2i`](class_vector2i.md), texture_region_size: [`Vector2i`](class_vector2i.md) )<div id="class_tilesetatlassource_method_get_tiles_to_be_removed_on_change"></div>

Returns an array of tiles coordinates ID that will be automatically removed when modifying one or several of those properties: `texture`, `margins`, `separation` or `texture_region_size`. This can be used to undo changes that would have caused tiles data loss.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_tilesetatlassource_method_has_room_for_tile"></div>

[`bool`](class_bool.md) **has_room_for_tile** ( atlas_coords: [`Vector2i`](class_vector2i.md), size: [`Vector2i`](class_vector2i.md), animation_columns: [`int`](class_int.md), animation_separation: [`Vector2i`](class_vector2i.md), frames_count: [`int`](class_int.md), ignored_tile: [`Vector2i`](class_vector2i.md) = Vector2i(-1, -1) ) const[^const]<div id="class_tilesetatlassource_method_has_room_for_tile"></div>

Returns whether there is enough room in an atlas to create/modify a tile with the given properties. If `ignored_tile` is provided, act as is the given tile was not present in the atlas. This may be used when you want to modify a tile's properties.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_tilesetatlassource_method_has_tiles_outside_texture"></div>

[`bool`](class_bool.md) **has_tiles_outside_texture** ( ) const[^const]<div id="class_tilesetatlassource_method_has_tiles_outside_texture"></div>

Checks if the source has any tiles that don't fit the texture area (either partially or completely).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_tilesetatlassource_method_move_tile_in_atlas"></div>

`void` **move_tile_in_atlas** ( atlas_coords: [`Vector2i`](class_vector2i.md), new_atlas_coords: [`Vector2i`](class_vector2i.md) = Vector2i(-1, -1), new_size: [`Vector2i`](class_vector2i.md) = Vector2i(-1, -1) )<div id="class_tilesetatlassource_method_move_tile_in_atlas"></div>

Move the tile and its alternatives at the `atlas_coords` coordinates to the `new_atlas_coords` coordinates with the `new_size` size. This functions will fail if a tile is already present in the given area.

If `new_atlas_coords` is `Vector2i(-1, -1)`, keeps the tile's coordinates. If `new_size` is `Vector2i(-1, -1)`, keeps the tile's size.

To avoid an error, first check if a move is possible using [`has_room_for_tile`](#class_tilesetatlassource_method_has_room_for_tile).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_tilesetatlassource_method_remove_alternative_tile"></div>

`void` **remove_alternative_tile** ( atlas_coords: [`Vector2i`](class_vector2i.md), alternative_tile: [`int`](class_int.md) )<div id="class_tilesetatlassource_method_remove_alternative_tile"></div>

Remove a tile's alternative with alternative ID `alternative_tile`.

Calling this function with `alternative_tile` equals to 0 will fail, as the base tile alternative cannot be removed.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_tilesetatlassource_method_remove_tile"></div>

`void` **remove_tile** ( atlas_coords: [`Vector2i`](class_vector2i.md) )<div id="class_tilesetatlassource_method_remove_tile"></div>

Remove a tile and its alternative at coordinates `atlas_coords`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_tilesetatlassource_method_set_alternative_tile_id"></div>

`void` **set_alternative_tile_id** ( atlas_coords: [`Vector2i`](class_vector2i.md), alternative_tile: [`int`](class_int.md), new_id: [`int`](class_int.md) )<div id="class_tilesetatlassource_method_set_alternative_tile_id"></div>

Change a tile's alternative ID from `alternative_tile` to `new_id`.

Calling this function with `new_id` of 0 will fail, as the base tile alternative cannot be moved.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_tilesetatlassource_method_set_tile_animation_columns"></div>

`void` **set_tile_animation_columns** ( atlas_coords: [`Vector2i`](class_vector2i.md), frame_columns: [`int`](class_int.md) )<div id="class_tilesetatlassource_method_set_tile_animation_columns"></div>

Sets the number of columns in the animation layout of the tile at coordinates `atlas_coords`. If set to 0, then the different frames of the animation are laid out as a single horizontal line in the atlas.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_tilesetatlassource_method_set_tile_animation_frame_duration"></div>

`void` **set_tile_animation_frame_duration** ( atlas_coords: [`Vector2i`](class_vector2i.md), frame_index: [`int`](class_int.md), duration: [`float`](class_float.md) )<div id="class_tilesetatlassource_method_set_tile_animation_frame_duration"></div>

Sets the animation frame `duration` of frame `frame_index` for the tile at coordinates `atlas_coords`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_tilesetatlassource_method_set_tile_animation_frames_count"></div>

`void` **set_tile_animation_frames_count** ( atlas_coords: [`Vector2i`](class_vector2i.md), frames_count: [`int`](class_int.md) )<div id="class_tilesetatlassource_method_set_tile_animation_frames_count"></div>

Sets how many animation frames the tile at coordinates `atlas_coords` has.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_tilesetatlassource_method_set_tile_animation_mode"></div>

`void` **set_tile_animation_mode** ( atlas_coords: [`Vector2i`](class_vector2i.md), mode: [TileAnimationMode](#enum_tilesetatlassource_tileanimationmode) )<div id="class_tilesetatlassource_method_set_tile_animation_mode"></div>

Sets the tile animation mode of the tile at `atlas_coords` to `mode`. See also [`get_tile_animation_mode`](#class_tilesetatlassource_method_get_tile_animation_mode).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_tilesetatlassource_method_set_tile_animation_separation"></div>

`void` **set_tile_animation_separation** ( atlas_coords: [`Vector2i`](class_vector2i.md), separation: [`Vector2i`](class_vector2i.md) )<div id="class_tilesetatlassource_method_set_tile_animation_separation"></div>

Sets the margin (in grid tiles) between each tile in the animation layout of the tile at coordinates `atlas_coords` has.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_tilesetatlassource_method_set_tile_animation_speed"></div>

`void` **set_tile_animation_speed** ( atlas_coords: [`Vector2i`](class_vector2i.md), speed: [`float`](class_float.md) )<div id="class_tilesetatlassource_method_set_tile_animation_speed"></div>

Sets the animation speed of the tile at coordinates `atlas_coords` has.

[^virtual]: 本方法通常需要用户覆盖才能生效。
[^const]: 本方法无副作用，不会修改该实例的任何成员变量。
[^vararg]: 本方法除了能接受在此处描述的参数外，还能够继续接受任意数量的参数。
[^constructor]: 本方法用于构造某个类型。
[^static]: 调用本方法无需实例，可直接使用类名进行调用。
[^operator]: 本方法描述的是使用本类型作为左操作数的有效运算符。
[^bitfield]: 这个值是由下列位标志构成位掩码的整数。
[^void]: 无返回值。
