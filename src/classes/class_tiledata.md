<!-- ⚠ 请勿编辑本文件 ⚠ -->
<!-- 本文档使用脚本从 WeDot 引擎源码仓库生成。 -->
<!-- 生成脚本：https://github.com/WeDot-Engine/WeDot/tree/4.3/doc/tools/make_md.py； -->
<!-- 原文件：https://github.com/WeDot-Engine/WeDot/tree/4.3/doc/classes/TileData.xml。 -->

<div id="_class_tiledata"></div>

# TileData

**继承：** [`Object`](class_object.md)

Settings for a single tile in a [`TileSet`](class_tileset.md).

## 描述

**TileData** object represents a single tile in a [`TileSet`](class_tileset.md). It is usually edited using the tileset editor, but it can be modified at runtime using [`TileMap._tile_data_runtime_update`](#class_tilemap_private_method__tile_data_runtime_update).

## 属性

| [`bool`](class_bool.md)         | [`flip_h`](#class_tiledata_property_flip_h)                 | ``false``             |
| [`bool`](class_bool.md)         | [`flip_v`](#class_tiledata_property_flip_v)                 | ``false``             |
| [`Material`](class_material.md) | [`material`](#class_tiledata_property_material)             |                       |
| [`Color`](class_color.md)       | [`modulate`](#class_tiledata_property_modulate)             | ``Color(1, 1, 1, 1)`` |
| [`float`](class_float.md)       | [`probability`](#class_tiledata_property_probability)       | ``1.0``               |
| [`int`](class_int.md)           | [`terrain`](#class_tiledata_property_terrain)               | ``-1``                |
| [`int`](class_int.md)           | [`terrain_set`](#class_tiledata_property_terrain_set)       | ``-1``                |
| [`Vector2i`](class_vector2i.md) | [`texture_origin`](#class_tiledata_property_texture_origin) | ``Vector2i(0, 0)``    |
| [`bool`](class_bool.md)         | [`transpose`](#class_tiledata_property_transpose)           | ``false``             |
| [`int`](class_int.md)           | [`y_sort_origin`](#class_tiledata_property_y_sort_origin)   | ``0``                 |
| [`int`](class_int.md)           | [`z_index`](#class_tiledata_property_z_index)               | ``0``                 |

## 方法

| `void`                                              | [`add_collision_polygon`](#class_tiledata_method_add_collision_polygon) ( layer_id: [`int`](class_int.md) )                                                                                                                                               |
| [`float`](class_float.md)                           | [`get_collision_polygon_one_way_margin`](#class_tiledata_method_get_collision_polygon_one_way_margin) ( layer_id: [`int`](class_int.md), polygon_index: [`int`](class_int.md) ) const[^const]                                                             |
| [`PackedVector2Array`](class_packedvector2array.md) | [`get_collision_polygon_points`](#class_tiledata_method_get_collision_polygon_points) ( layer_id: [`int`](class_int.md), polygon_index: [`int`](class_int.md) ) const[^const]                                                                             |
| [`int`](class_int.md)                               | [`get_collision_polygons_count`](#class_tiledata_method_get_collision_polygons_count) ( layer_id: [`int`](class_int.md) ) const[^const]                                                                                                                   |
| [`float`](class_float.md)                           | [`get_constant_angular_velocity`](#class_tiledata_method_get_constant_angular_velocity) ( layer_id: [`int`](class_int.md) ) const[^const]                                                                                                                 |
| [`Vector2`](class_vector2.md)                       | [`get_constant_linear_velocity`](#class_tiledata_method_get_constant_linear_velocity) ( layer_id: [`int`](class_int.md) ) const[^const]                                                                                                                   |
| [`Variant`](class_variant.md)                       | [`get_custom_data`](#class_tiledata_method_get_custom_data) ( layer_name: [`String`](class_string.md) ) const[^const]                                                                                                                                     |
| [`Variant`](class_variant.md)                       | [`get_custom_data_by_layer_id`](#class_tiledata_method_get_custom_data_by_layer_id) ( layer_id: [`int`](class_int.md) ) const[^const]                                                                                                                     |
| [`NavigationPolygon`](class_navigationpolygon.md)   | [`get_navigation_polygon`](#class_tiledata_method_get_navigation_polygon) ( layer_id: [`int`](class_int.md), flip_h: [`bool`](class_bool.md) = false, flip_v: [`bool`](class_bool.md) = false, transpose: [`bool`](class_bool.md) = false ) const[^const] |
| [`OccluderPolygon2D`](class_occluderpolygon2d.md)   | [`get_occluder`](#class_tiledata_method_get_occluder) ( layer_id: [`int`](class_int.md), flip_h: [`bool`](class_bool.md) = false, flip_v: [`bool`](class_bool.md) = false, transpose: [`bool`](class_bool.md) = false ) const[^const]                     |
| [`int`](class_int.md)                               | [`get_terrain_peering_bit`](#class_tiledata_method_get_terrain_peering_bit) ( peering_bit: [CellNeighbor](#enum_tileset_cellneighbor) ) const[^const]                                                                                                     |
| [`bool`](class_bool.md)                             | [`is_collision_polygon_one_way`](#class_tiledata_method_is_collision_polygon_one_way) ( layer_id: [`int`](class_int.md), polygon_index: [`int`](class_int.md) ) const[^const]                                                                             |
| [`bool`](class_bool.md)                             | [`is_valid_terrain_peering_bit`](#class_tiledata_method_is_valid_terrain_peering_bit) ( peering_bit: [CellNeighbor](#enum_tileset_cellneighbor) ) const[^const]                                                                                           |
| `void`                                              | [`remove_collision_polygon`](#class_tiledata_method_remove_collision_polygon) ( layer_id: [`int`](class_int.md), polygon_index: [`int`](class_int.md) )                                                                                                   |
| `void`                                              | [`set_collision_polygon_one_way`](#class_tiledata_method_set_collision_polygon_one_way) ( layer_id: [`int`](class_int.md), polygon_index: [`int`](class_int.md), one_way: [`bool`](class_bool.md) )                                                       |
| `void`                                              | [`set_collision_polygon_one_way_margin`](#class_tiledata_method_set_collision_polygon_one_way_margin) ( layer_id: [`int`](class_int.md), polygon_index: [`int`](class_int.md), one_way_margin: [`float`](class_float.md) )                                |
| `void`                                              | [`set_collision_polygon_points`](#class_tiledata_method_set_collision_polygon_points) ( layer_id: [`int`](class_int.md), polygon_index: [`int`](class_int.md), polygon: [`PackedVector2Array`](class_packedvector2array.md) )                             |
| `void`                                              | [`set_collision_polygons_count`](#class_tiledata_method_set_collision_polygons_count) ( layer_id: [`int`](class_int.md), polygons_count: [`int`](class_int.md) )                                                                                          |
| `void`                                              | [`set_constant_angular_velocity`](#class_tiledata_method_set_constant_angular_velocity) ( layer_id: [`int`](class_int.md), velocity: [`float`](class_float.md) )                                                                                          |
| `void`                                              | [`set_constant_linear_velocity`](#class_tiledata_method_set_constant_linear_velocity) ( layer_id: [`int`](class_int.md), velocity: [`Vector2`](class_vector2.md) )                                                                                        |
| `void`                                              | [`set_custom_data`](#class_tiledata_method_set_custom_data) ( layer_name: [`String`](class_string.md), value: [`Variant`](class_variant.md) )                                                                                                             |
| `void`                                              | [`set_custom_data_by_layer_id`](#class_tiledata_method_set_custom_data_by_layer_id) ( layer_id: [`int`](class_int.md), value: [`Variant`](class_variant.md) )                                                                                             |
| `void`                                              | [`set_navigation_polygon`](#class_tiledata_method_set_navigation_polygon) ( layer_id: [`int`](class_int.md), navigation_polygon: [`NavigationPolygon`](class_navigationpolygon.md) )                                                                      |
| `void`                                              | [`set_occluder`](#class_tiledata_method_set_occluder) ( layer_id: [`int`](class_int.md), occluder_polygon: [`OccluderPolygon2D`](class_occluderpolygon2d.md) )                                                                                            |
| `void`                                              | [`set_terrain_peering_bit`](#class_tiledata_method_set_terrain_peering_bit) ( peering_bit: [CellNeighbor](#enum_tileset_cellneighbor), terrain: [`int`](class_int.md) )                                                                                   |

<!-- rst-class:: classref-section-separator -->

---

## 信号

<div id="_class_class_tiledata_signal_changed"></div>

**changed** ( ) <div id="class_tiledata_signal_changed"></div>

Emitted when any of the properties are changed.

<!-- rst-class:: classref-section-separator -->

---

## 属性说明

<div id="_class_tiledata_property_flip_h"></div>

[`bool`](class_bool.md) **flip_h** = ``false`` <div id="class_tiledata_property_flip_h"></div>

- `void` **set_flip_h** ( value: [`bool`](class_bool.md) )
- [`bool`](class_bool.md) **get_flip_h** ( )

If `true`, the tile will have its texture flipped horizontally.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_tiledata_property_flip_v"></div>

[`bool`](class_bool.md) **flip_v** = ``false`` <div id="class_tiledata_property_flip_v"></div>

- `void` **set_flip_v** ( value: [`bool`](class_bool.md) )
- [`bool`](class_bool.md) **get_flip_v** ( )

If `true`, the tile will have its texture flipped vertically.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_tiledata_property_material"></div>

[`Material`](class_material.md) **material** <div id="class_tiledata_property_material"></div>

- `void` **set_material** ( value: [`Material`](class_material.md) )
- [`Material`](class_material.md) **get_material** ( )

The [`Material`](class_material.md) to use for this **TileData**. This can be a [`CanvasItemMaterial`](class_canvasitemmaterial.md) to use the default shader, or a [`ShaderMaterial`](class_shadermaterial.md) to use a custom shader.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_tiledata_property_modulate"></div>

[`Color`](class_color.md) **modulate** = ``Color(1, 1, 1, 1)`` <div id="class_tiledata_property_modulate"></div>

- `void` **set_modulate** ( value: [`Color`](class_color.md) )
- [`Color`](class_color.md) **get_modulate** ( )

Color modulation of the tile.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_tiledata_property_probability"></div>

[`float`](class_float.md) **probability** = ``1.0`` <div id="class_tiledata_property_probability"></div>

- `void` **set_probability** ( value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_probability** ( )

Relative probability of this tile being selected when drawing a pattern of random tiles.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_tiledata_property_terrain"></div>

[`int`](class_int.md) **terrain** = ``-1`` <div id="class_tiledata_property_terrain"></div>

- `void` **set_terrain** ( value: [`int`](class_int.md) )
- [`int`](class_int.md) **get_terrain** ( )

ID of the terrain from the terrain set that the tile uses.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_tiledata_property_terrain_set"></div>

[`int`](class_int.md) **terrain_set** = ``-1`` <div id="class_tiledata_property_terrain_set"></div>

- `void` **set_terrain_set** ( value: [`int`](class_int.md) )
- [`int`](class_int.md) **get_terrain_set** ( )

ID of the terrain set that the tile uses.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_tiledata_property_texture_origin"></div>

[`Vector2i`](class_vector2i.md) **texture_origin** = ``Vector2i(0, 0)`` <div id="class_tiledata_property_texture_origin"></div>

- `void` **set_texture_origin** ( value: [`Vector2i`](class_vector2i.md) )
- [`Vector2i`](class_vector2i.md) **get_texture_origin** ( )

Offsets the position of where the tile is drawn.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_tiledata_property_transpose"></div>

[`bool`](class_bool.md) **transpose** = ``false`` <div id="class_tiledata_property_transpose"></div>

- `void` **set_transpose** ( value: [`bool`](class_bool.md) )
- [`bool`](class_bool.md) **get_transpose** ( )

If `true`, the tile will display transposed, i.e. with horizontal and vertical texture UVs swapped.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_tiledata_property_y_sort_origin"></div>

[`int`](class_int.md) **y_sort_origin** = ``0`` <div id="class_tiledata_property_y_sort_origin"></div>

- `void` **set_y_sort_origin** ( value: [`int`](class_int.md) )
- [`int`](class_int.md) **get_y_sort_origin** ( )

Vertical point of the tile used for determining y-sorted order.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_tiledata_property_z_index"></div>

[`int`](class_int.md) **z_index** = ``0`` <div id="class_tiledata_property_z_index"></div>

- `void` **set_z_index** ( value: [`int`](class_int.md) )
- [`int`](class_int.md) **get_z_index** ( )

Ordering index of this tile, relative to [`TileMap`](class_tilemap.md).

<!-- rst-class:: classref-section-separator -->

---

## 方法说明

<div id="_class_tiledata_method_add_collision_polygon"></div>

`void` **add_collision_polygon** ( layer_id: [`int`](class_int.md) )<div id="class_tiledata_method_add_collision_polygon"></div>

Adds a collision polygon to the tile on the given TileSet physics layer.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_tiledata_method_get_collision_polygon_one_way_margin"></div>

[`float`](class_float.md) **get_collision_polygon_one_way_margin** ( layer_id: [`int`](class_int.md), polygon_index: [`int`](class_int.md) ) const[^const]<div id="class_tiledata_method_get_collision_polygon_one_way_margin"></div>

Returns the one-way margin (for one-way platforms) of the polygon at index `polygon_index` for TileSet physics layer with index `layer_id`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_tiledata_method_get_collision_polygon_points"></div>

[`PackedVector2Array`](class_packedvector2array.md) **get_collision_polygon_points** ( layer_id: [`int`](class_int.md), polygon_index: [`int`](class_int.md) ) const[^const]<div id="class_tiledata_method_get_collision_polygon_points"></div>

Returns the points of the polygon at index `polygon_index` for TileSet physics layer with index `layer_id`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_tiledata_method_get_collision_polygons_count"></div>

[`int`](class_int.md) **get_collision_polygons_count** ( layer_id: [`int`](class_int.md) ) const[^const]<div id="class_tiledata_method_get_collision_polygons_count"></div>

Returns how many polygons the tile has for TileSet physics layer with index `layer_id`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_tiledata_method_get_constant_angular_velocity"></div>

[`float`](class_float.md) **get_constant_angular_velocity** ( layer_id: [`int`](class_int.md) ) const[^const]<div id="class_tiledata_method_get_constant_angular_velocity"></div>

Returns the constant angular velocity applied to objects colliding with this tile.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_tiledata_method_get_constant_linear_velocity"></div>

[`Vector2`](class_vector2.md) **get_constant_linear_velocity** ( layer_id: [`int`](class_int.md) ) const[^const]<div id="class_tiledata_method_get_constant_linear_velocity"></div>

Returns the constant linear velocity applied to objects colliding with this tile.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_tiledata_method_get_custom_data"></div>

[`Variant`](class_variant.md) **get_custom_data** ( layer_name: [`String`](class_string.md) ) const[^const]<div id="class_tiledata_method_get_custom_data"></div>

Returns the custom data value for custom data layer named `layer_name`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_tiledata_method_get_custom_data_by_layer_id"></div>

[`Variant`](class_variant.md) **get_custom_data_by_layer_id** ( layer_id: [`int`](class_int.md) ) const[^const]<div id="class_tiledata_method_get_custom_data_by_layer_id"></div>

Returns the custom data value for custom data layer with index `layer_id`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_tiledata_method_get_navigation_polygon"></div>

[`NavigationPolygon`](class_navigationpolygon.md) **get_navigation_polygon** ( layer_id: [`int`](class_int.md), flip_h: [`bool`](class_bool.md) = false, flip_v: [`bool`](class_bool.md) = false, transpose: [`bool`](class_bool.md) = false ) const[^const]<div id="class_tiledata_method_get_navigation_polygon"></div>

Returns the navigation polygon of the tile for the TileSet navigation layer with index `layer_id`.

 `flip_h`, `flip_v`, and `transpose` allow transforming the returned polygon.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_tiledata_method_get_occluder"></div>

[`OccluderPolygon2D`](class_occluderpolygon2d.md) **get_occluder** ( layer_id: [`int`](class_int.md), flip_h: [`bool`](class_bool.md) = false, flip_v: [`bool`](class_bool.md) = false, transpose: [`bool`](class_bool.md) = false ) const[^const]<div id="class_tiledata_method_get_occluder"></div>

Returns the occluder polygon of the tile for the TileSet occlusion layer with index `layer_id`.

 `flip_h`, `flip_v`, and `transpose` allow transforming the returned polygon.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_tiledata_method_get_terrain_peering_bit"></div>

[`int`](class_int.md) **get_terrain_peering_bit** ( peering_bit: [CellNeighbor](#enum_tileset_cellneighbor) ) const[^const]<div id="class_tiledata_method_get_terrain_peering_bit"></div>

Returns the tile's terrain bit for the given `peering_bit` direction. To check that a direction is valid, use [`is_valid_terrain_peering_bit`](#class_tiledata_method_is_valid_terrain_peering_bit).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_tiledata_method_is_collision_polygon_one_way"></div>

[`bool`](class_bool.md) **is_collision_polygon_one_way** ( layer_id: [`int`](class_int.md), polygon_index: [`int`](class_int.md) ) const[^const]<div id="class_tiledata_method_is_collision_polygon_one_way"></div>

Returns whether one-way collisions are enabled for the polygon at index `polygon_index` for TileSet physics layer with index `layer_id`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_tiledata_method_is_valid_terrain_peering_bit"></div>

[`bool`](class_bool.md) **is_valid_terrain_peering_bit** ( peering_bit: [CellNeighbor](#enum_tileset_cellneighbor) ) const[^const]<div id="class_tiledata_method_is_valid_terrain_peering_bit"></div>

Returns whether the given `peering_bit` direction is valid for this tile.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_tiledata_method_remove_collision_polygon"></div>

`void` **remove_collision_polygon** ( layer_id: [`int`](class_int.md), polygon_index: [`int`](class_int.md) )<div id="class_tiledata_method_remove_collision_polygon"></div>

Removes the polygon at index `polygon_index` for TileSet physics layer with index `layer_id`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_tiledata_method_set_collision_polygon_one_way"></div>

`void` **set_collision_polygon_one_way** ( layer_id: [`int`](class_int.md), polygon_index: [`int`](class_int.md), one_way: [`bool`](class_bool.md) )<div id="class_tiledata_method_set_collision_polygon_one_way"></div>

Enables/disables one-way collisions on the polygon at index `polygon_index` for TileSet physics layer with index `layer_id`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_tiledata_method_set_collision_polygon_one_way_margin"></div>

`void` **set_collision_polygon_one_way_margin** ( layer_id: [`int`](class_int.md), polygon_index: [`int`](class_int.md), one_way_margin: [`float`](class_float.md) )<div id="class_tiledata_method_set_collision_polygon_one_way_margin"></div>

Enables/disables one-way collisions on the polygon at index `polygon_index` for TileSet physics layer with index `layer_id`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_tiledata_method_set_collision_polygon_points"></div>

`void` **set_collision_polygon_points** ( layer_id: [`int`](class_int.md), polygon_index: [`int`](class_int.md), polygon: [`PackedVector2Array`](class_packedvector2array.md) )<div id="class_tiledata_method_set_collision_polygon_points"></div>

Sets the points of the polygon at index `polygon_index` for TileSet physics layer with index `layer_id`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_tiledata_method_set_collision_polygons_count"></div>

`void` **set_collision_polygons_count** ( layer_id: [`int`](class_int.md), polygons_count: [`int`](class_int.md) )<div id="class_tiledata_method_set_collision_polygons_count"></div>

Sets the polygons count for TileSet physics layer with index `layer_id`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_tiledata_method_set_constant_angular_velocity"></div>

`void` **set_constant_angular_velocity** ( layer_id: [`int`](class_int.md), velocity: [`float`](class_float.md) )<div id="class_tiledata_method_set_constant_angular_velocity"></div>

Sets the constant angular velocity. This does not rotate the tile. This angular velocity is applied to objects colliding with this tile.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_tiledata_method_set_constant_linear_velocity"></div>

`void` **set_constant_linear_velocity** ( layer_id: [`int`](class_int.md), velocity: [`Vector2`](class_vector2.md) )<div id="class_tiledata_method_set_constant_linear_velocity"></div>

Sets the constant linear velocity. This does not move the tile. This linear velocity is applied to objects colliding with this tile. This is useful to create conveyor belts.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_tiledata_method_set_custom_data"></div>

`void` **set_custom_data** ( layer_name: [`String`](class_string.md), value: [`Variant`](class_variant.md) )<div id="class_tiledata_method_set_custom_data"></div>

Sets the tile's custom data value for the TileSet custom data layer with name `layer_name`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_tiledata_method_set_custom_data_by_layer_id"></div>

`void` **set_custom_data_by_layer_id** ( layer_id: [`int`](class_int.md), value: [`Variant`](class_variant.md) )<div id="class_tiledata_method_set_custom_data_by_layer_id"></div>

Sets the tile's custom data value for the TileSet custom data layer with index `layer_id`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_tiledata_method_set_navigation_polygon"></div>

`void` **set_navigation_polygon** ( layer_id: [`int`](class_int.md), navigation_polygon: [`NavigationPolygon`](class_navigationpolygon.md) )<div id="class_tiledata_method_set_navigation_polygon"></div>

Sets the navigation polygon for the TileSet navigation layer with index `layer_id`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_tiledata_method_set_occluder"></div>

`void` **set_occluder** ( layer_id: [`int`](class_int.md), occluder_polygon: [`OccluderPolygon2D`](class_occluderpolygon2d.md) )<div id="class_tiledata_method_set_occluder"></div>

Sets the occluder for the TileSet occlusion layer with index `layer_id`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_tiledata_method_set_terrain_peering_bit"></div>

`void` **set_terrain_peering_bit** ( peering_bit: [CellNeighbor](#enum_tileset_cellneighbor), terrain: [`int`](class_int.md) )<div id="class_tiledata_method_set_terrain_peering_bit"></div>

Sets the tile's terrain bit for the given `peering_bit` direction. To check that a direction is valid, use [`is_valid_terrain_peering_bit`](#class_tiledata_method_is_valid_terrain_peering_bit).

[^virtual]: 本方法通常需要用户覆盖才能生效。
[^const]: 本方法无副作用，不会修改该实例的任何成员变量。
[^vararg]: 本方法除了能接受在此处描述的参数外，还能够继续接受任意数量的参数。
[^constructor]: 本方法用于构造某个类型。
[^static]: 调用本方法无需实例，可直接使用类名进行调用。
[^operator]: 本方法描述的是使用本类型作为左操作数的有效运算符。
[^bitfield]: 这个值是由下列位标志构成位掩码的整数。
[^void]: 无返回值。
