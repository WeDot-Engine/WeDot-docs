<!-- ⚠ 请勿编辑本文件 ⚠ -->
<!-- 本文档使用脚本从 WeDot 引擎源码仓库生成。 -->
<!-- 生成脚本：https://github.com/WeDot-Engine/WeDot/tree/master/doc/tools/make_md.py； -->
<!-- 原文件：https://github.com/WeDot-Engine/WeDot/tree/master/doc/classes/TileMapPattern.xml。 -->

<div id="_class_tilemappattern"></div>

# TileMapPattern

**继承：** [`Resource`](class_resource.md) **<** [`RefCounted`](class_refcounted.md) **<** [`Object`](class_object.md)

Holds a pattern to be copied from or pasted into [`TileMap`](class_tilemap.md) s.

## 描述

This resource holds a set of cells to help bulk manipulations of [`TileMap`](class_tilemap.md).

A pattern always start at the `(0,0)` coordinates and cannot have cells with negative coordinates.

## 方法

|||
|:-:|:--|
| [`int`](class_int.md)                                   | [`get_cell_alternative_tile`](class_tilemappattern.md#class_tilemappattern_method_get_cell_alternative_tile) ( coords: [`Vector2i`](class_vector2i.md) ) const[^const]                                                                                                        |
| [`Vector2i`](class_vector2i.md)                         | [`get_cell_atlas_coords`](class_tilemappattern.md#class_tilemappattern_method_get_cell_atlas_coords) ( coords: [`Vector2i`](class_vector2i.md) ) const[^const]                                                                                                                |
| [`int`](class_int.md)                                   | [`get_cell_source_id`](class_tilemappattern.md#class_tilemappattern_method_get_cell_source_id) ( coords: [`Vector2i`](class_vector2i.md) ) const[^const]                                                                                                                      |
| [`Vector2i`](class_vector2i.md)                         | [`get_size`](class_tilemappattern.md#class_tilemappattern_method_get_size) ( ) const[^const]                                                                                                                                                                                  |
| [Array](class_array.md) [`Vector2i`](class_vector2i.md) | [`get_used_cells`](class_tilemappattern.md#class_tilemappattern_method_get_used_cells) ( ) const[^const]                                                                                                                                                                      |
| [`bool`](class_bool.md)                                 | [`has_cell`](class_tilemappattern.md#class_tilemappattern_method_has_cell) ( coords: [`Vector2i`](class_vector2i.md) ) const[^const]                                                                                                                                          |
| [`bool`](class_bool.md)                                 | [`is_empty`](class_tilemappattern.md#class_tilemappattern_method_is_empty) ( ) const[^const]                                                                                                                                                                                  |
| `void`                                                  | [`remove_cell`](class_tilemappattern.md#class_tilemappattern_method_remove_cell) ( coords: [`Vector2i`](class_vector2i.md), update_size: [`bool`](class_bool.md) )                                                                                                            |
| `void`                                                  | [`set_cell`](class_tilemappattern.md#class_tilemappattern_method_set_cell) ( coords: [`Vector2i`](class_vector2i.md), source_id: [`int`](class_int.md) = -1, atlas_coords: [`Vector2i`](class_vector2i.md) = Vector2i(-1, -1), alternative_tile: [`int`](class_int.md) = -1 ) |
| `void`                                                  | [`set_size`](class_tilemappattern.md#class_tilemappattern_method_set_size) ( size: [`Vector2i`](class_vector2i.md) )                                                                                                                                                          |

<!-- rst-class:: classref-section-separator -->

---

## 方法说明

<div id="_class_tilemappattern_method_get_cell_alternative_tile"></div>

[`int`](class_int.md) **get_cell_alternative_tile** ( coords: [`Vector2i`](class_vector2i.md) ) const[^const]<div id="class_tilemappattern_method_get_cell_alternative_tile"></div>

Returns the tile alternative ID of the cell at `coords`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_tilemappattern_method_get_cell_atlas_coords"></div>

[`Vector2i`](class_vector2i.md) **get_cell_atlas_coords** ( coords: [`Vector2i`](class_vector2i.md) ) const[^const]<div id="class_tilemappattern_method_get_cell_atlas_coords"></div>

Returns the tile atlas coordinates ID of the cell at `coords`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_tilemappattern_method_get_cell_source_id"></div>

[`int`](class_int.md) **get_cell_source_id** ( coords: [`Vector2i`](class_vector2i.md) ) const[^const]<div id="class_tilemappattern_method_get_cell_source_id"></div>

Returns the tile source ID of the cell at `coords`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_tilemappattern_method_get_size"></div>

[`Vector2i`](class_vector2i.md) **get_size** ( ) const[^const]<div id="class_tilemappattern_method_get_size"></div>

Returns the size, in cells, of the pattern.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_tilemappattern_method_get_used_cells"></div>

[Array](class_array.md) [`Vector2i`](class_vector2i.md) **get_used_cells** ( ) const[^const]<div id="class_tilemappattern_method_get_used_cells"></div>

Returns the list of used cell coordinates in the pattern.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_tilemappattern_method_has_cell"></div>

[`bool`](class_bool.md) **has_cell** ( coords: [`Vector2i`](class_vector2i.md) ) const[^const]<div id="class_tilemappattern_method_has_cell"></div>

Returns whether the pattern has a tile at the given coordinates.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_tilemappattern_method_is_empty"></div>

[`bool`](class_bool.md) **is_empty** ( ) const[^const]<div id="class_tilemappattern_method_is_empty"></div>

Returns whether the pattern is empty or not.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_tilemappattern_method_remove_cell"></div>

`void` **remove_cell** ( coords: [`Vector2i`](class_vector2i.md), update_size: [`bool`](class_bool.md) )<div id="class_tilemappattern_method_remove_cell"></div>

Remove the cell at the given coordinates.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_tilemappattern_method_set_cell"></div>

`void` **set_cell** ( coords: [`Vector2i`](class_vector2i.md), source_id: [`int`](class_int.md) = -1, atlas_coords: [`Vector2i`](class_vector2i.md) = Vector2i(-1, -1), alternative_tile: [`int`](class_int.md) = -1 )<div id="class_tilemappattern_method_set_cell"></div>

Sets the tile identifiers for the cell at coordinates `coords`. See [`TileMap.set_cell`](class_tilemap.md#class_tilemap_method_set_cell).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_tilemappattern_method_set_size"></div>

`void` **set_size** ( size: [`Vector2i`](class_vector2i.md) )<div id="class_tilemappattern_method_set_size"></div>

Sets the size of the pattern.

[^virtual]: 本方法通常需要用户覆盖才能生效。
[^const]: 本方法无副作用，不会修改该实例的任何成员变量。
[^vararg]: 本方法除了能接受在此处描述的参数外，还能够继续接受任意数量的参数。
[^constructor]: 本方法用于构造某个类型。
[^static]: 调用本方法无需实例，可直接使用类名进行调用。
[^operator]: 本方法描述的是使用本类型作为左操作数的有效运算符。
[^bitfield]: 这个值是由下列位标志构成位掩码的整数。
[^void]: 无返回值。
