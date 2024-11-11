<!-- ⚠ 请勿编辑本文件 ⚠ -->
<!-- 本文档使用脚本从 WeDot 引擎源码仓库生成。 -->
<!-- 生成脚本：https://github.com/WeDot-Engine/WeDot/tree/master/doc/tools/make_md.py； -->
<!-- 原文件：https://github.com/WeDot-Engine/WeDot/tree/master/doc/classes/TileSetSource.xml。 -->

<div id="_class_tilesetsource"></div>

# TileSetSource

**继承：** [`Resource`](class_resource.md) **<** [`RefCounted`](class_refcounted.md) **<** [`Object`](class_object.md)

**派生：** [`TileSetAtlasSource`](class_tilesetatlassource.md), [`TileSetScenesCollectionSource`](class_tilesetscenescollectionsource.md)

Exposes a set of tiles for a [`TileSet`](class_tileset.md) resource.

## 描述

Exposes a set of tiles for a [`TileSet`](class_tileset.md) resource.

Tiles in a source are indexed with two IDs, coordinates ID (of type Vector2i) and an alternative ID (of type int), named according to their use in the [`TileSetAtlasSource`](class_tilesetatlassource.md) class.

Depending on the TileSet source type, those IDs might have restrictions on their values, this is why the base **TileSetSource** class only exposes getters for them.

You can iterate over all tiles exposed by a TileSetSource by first iterating over coordinates IDs using [`get_tiles_count`](class_tilesetsource.md#class_tilesetsource_method_get_tiles_count) and [`get_tile_id`](class_tilesetsource.md#class_tilesetsource_method_get_tile_id), then over alternative IDs using [`get_alternative_tiles_count`](class_tilesetsource.md#class_tilesetsource_method_get_alternative_tiles_count) and [`get_alternative_tile_id`](class_tilesetsource.md#class_tilesetsource_method_get_alternative_tile_id).

 **Warning:** **TileSetSource** can only be added to one TileSet at the same time. Calling [`TileSet.add_source`](class_tileset.md#class_tileset_method_add_source) on a second [`TileSet`](class_tileset.md) will remove the source from the first one.

## 方法

|||
|:-:|:--|
| [`int`](class_int.md)           | [`get_alternative_tile_id`](class_tilesetsource.md#class_tilesetsource_method_get_alternative_tile_id) ( atlas_coords: [`Vector2i`](class_vector2i.md), index: [`int`](class_int.md) ) const[^const]      |
| [`int`](class_int.md)           | [`get_alternative_tiles_count`](class_tilesetsource.md#class_tilesetsource_method_get_alternative_tiles_count) ( atlas_coords: [`Vector2i`](class_vector2i.md) ) const[^const]                            |
| [`Vector2i`](class_vector2i.md) | [`get_tile_id`](class_tilesetsource.md#class_tilesetsource_method_get_tile_id) ( index: [`int`](class_int.md) ) const[^const]                                                                             |
| [`int`](class_int.md)           | [`get_tiles_count`](class_tilesetsource.md#class_tilesetsource_method_get_tiles_count) ( ) const[^const]                                                                                                  |
| [`bool`](class_bool.md)         | [`has_alternative_tile`](class_tilesetsource.md#class_tilesetsource_method_has_alternative_tile) ( atlas_coords: [`Vector2i`](class_vector2i.md), alternative_tile: [`int`](class_int.md) ) const[^const] |
| [`bool`](class_bool.md)         | [`has_tile`](class_tilesetsource.md#class_tilesetsource_method_has_tile) ( atlas_coords: [`Vector2i`](class_vector2i.md) ) const[^const]                                                                  |

<!-- rst-class:: classref-section-separator -->

---

## 方法说明

<div id="_class_tilesetsource_method_get_alternative_tile_id"></div>

[`int`](class_int.md) **get_alternative_tile_id** ( atlas_coords: [`Vector2i`](class_vector2i.md), index: [`int`](class_int.md) ) const[^const]<div id="class_tilesetsource_method_get_alternative_tile_id"></div>

Returns the alternative ID for the tile with coordinates ID `atlas_coords` at index `index`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_tilesetsource_method_get_alternative_tiles_count"></div>

[`int`](class_int.md) **get_alternative_tiles_count** ( atlas_coords: [`Vector2i`](class_vector2i.md) ) const[^const]<div id="class_tilesetsource_method_get_alternative_tiles_count"></div>

Returns the number of alternatives tiles for the coordinates ID `atlas_coords`.

For [`TileSetAtlasSource`](class_tilesetatlassource.md), this always return at least 1, as the base tile with ID 0 is always part of the alternatives list.

Returns -1 if there is not tile at the given coords.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_tilesetsource_method_get_tile_id"></div>

[`Vector2i`](class_vector2i.md) **get_tile_id** ( index: [`int`](class_int.md) ) const[^const]<div id="class_tilesetsource_method_get_tile_id"></div>

Returns the tile coordinates ID of the tile with index `index`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_tilesetsource_method_get_tiles_count"></div>

[`int`](class_int.md) **get_tiles_count** ( ) const[^const]<div id="class_tilesetsource_method_get_tiles_count"></div>

Returns how many tiles this atlas source defines (not including alternative tiles).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_tilesetsource_method_has_alternative_tile"></div>

[`bool`](class_bool.md) **has_alternative_tile** ( atlas_coords: [`Vector2i`](class_vector2i.md), alternative_tile: [`int`](class_int.md) ) const[^const]<div id="class_tilesetsource_method_has_alternative_tile"></div>

Returns if the base tile at coordinates `atlas_coords` has an alternative with ID `alternative_tile`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_tilesetsource_method_has_tile"></div>

[`bool`](class_bool.md) **has_tile** ( atlas_coords: [`Vector2i`](class_vector2i.md) ) const[^const]<div id="class_tilesetsource_method_has_tile"></div>

Returns if this atlas has a tile with coordinates ID `atlas_coords`.

[^virtual]: 本方法通常需要用户覆盖才能生效。
[^const]: 本方法无副作用，不会修改该实例的任何成员变量。
[^vararg]: 本方法除了能接受在此处描述的参数外，还能够继续接受任意数量的参数。
[^constructor]: 本方法用于构造某个类型。
[^static]: 调用本方法无需实例，可直接使用类名进行调用。
[^operator]: 本方法描述的是使用本类型作为左操作数的有效运算符。
[^bitfield]: 这个值是由下列位标志构成位掩码的整数。
[^void]: 无返回值。
