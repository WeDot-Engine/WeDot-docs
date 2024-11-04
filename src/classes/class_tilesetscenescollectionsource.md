<!-- ⚠ 请勿编辑本文件 ⚠ -->
<!-- 本文档使用脚本从 WeDot 引擎源码仓库生成。 -->
<!-- 生成脚本：https://github.com/WeDot-Engine/WeDot/tree/4.3/doc/tools/make_md.py； -->
<!-- 原文件：https://github.com/WeDot-Engine/WeDot/tree/4.3/doc/classes/TileSetScenesCollectionSource.xml。 -->

<div id="_class_tilesetscenescollectionsource"></div>

# TileSetScenesCollectionSource

**继承：** [`TileSetSource`](class_tilesetsource.md) **<** [`Resource`](class_resource.md) **<** [`RefCounted`](class_refcounted.md) **<** [`Object`](class_object.md)

Exposes a set of scenes as tiles for a [`TileSet`](class_tileset.md) resource.

## 描述

When placed on a [`TileMap`](class_tilemap.md), tiles from **TileSetScenesCollectionSource** will automatically instantiate an associated scene at the cell's position in the TileMap.

Scenes are instantiated as children of the [`TileMap`](class_tilemap.md) when it enters the tree. If you add/remove a scene tile in the [`TileMap`](class_tilemap.md) that is already inside the tree, the [`TileMap`](class_tilemap.md) will automatically instantiate/free the scene accordingly.

 **Note:** Scene tiles all occupy one tile slot and instead use alternate tile ID to identify scene index. [`TileSetSource.get_tiles_count`](#class_tilesetsource_method_get_tiles_count) will always return `1`. Use [`get_scene_tiles_count`](#class_tilesetscenescollectionsource_method_get_scene_tiles_count) to get a number of scenes in a **TileSetScenesCollectionSource**.

Use this code if you want to find the scene path at a given tile in [`TileMapLayer`](class_tilemaplayer.md):



```gdscript

    var source_id = tile_map_layer.get_cell_source_id(Vector2i(x, y))
    if source_id > -1:
        var scene_source = tile_map_layer.tile_set.get_source(source_id)
        if scene_source is TileSetScenesCollectionSource:
            var alt_id = tile_map_layer.get_cell_alternative_tile(Vector2i(x, y))
            # The assigned PackedScene.
            var scene = scene_source.get_scene_tile_scene(alt_id)
```

```csharp

    int sourceId = tileMapLayer.GetCellSourceId(new Vector2I(x, y));
    if (sourceId > -1)
    {
        TileSetSource source = tileMapLayer.TileSet.GetSource(sourceId);
        if (source is TileSetScenesCollectionSource sceneSource)
        {
            int altId = tileMapLayer.GetCellAlternativeTile(new Vector2I(x, y));
            // The assigned PackedScene.
            PackedScene scene = sceneSource.GetSceneTileScene(altId);
        }
    }
```







## 方法

| [`int`](class_int.md)                 | [`create_scene_tile`](#class_tilesetscenescollectionsource_method_create_scene_tile) ( packed_scene: [`PackedScene`](class_packedscene.md), id_override: [`int`](class_int.md) = -1 )              |
| [`int`](class_int.md)                 | [`get_next_scene_tile_id`](#class_tilesetscenescollectionsource_method_get_next_scene_tile_id) ( ) const[^const]                                                                                   |
| [`bool`](class_bool.md)               | [`get_scene_tile_display_placeholder`](#class_tilesetscenescollectionsource_method_get_scene_tile_display_placeholder) ( id: [`int`](class_int.md) ) const[^const]                                 |
| [`int`](class_int.md)                 | [`get_scene_tile_id`](#class_tilesetscenescollectionsource_method_get_scene_tile_id) ( index: [`int`](class_int.md) )                                                                              |
| [`PackedScene`](class_packedscene.md) | [`get_scene_tile_scene`](#class_tilesetscenescollectionsource_method_get_scene_tile_scene) ( id: [`int`](class_int.md) ) const[^const]                                                             |
| [`int`](class_int.md)                 | [`get_scene_tiles_count`](#class_tilesetscenescollectionsource_method_get_scene_tiles_count) ( )                                                                                                   |
| [`bool`](class_bool.md)               | [`has_scene_tile_id`](#class_tilesetscenescollectionsource_method_has_scene_tile_id) ( id: [`int`](class_int.md) )                                                                                 |
| `void`                                | [`remove_scene_tile`](#class_tilesetscenescollectionsource_method_remove_scene_tile) ( id: [`int`](class_int.md) )                                                                                 |
| `void`                                | [`set_scene_tile_display_placeholder`](#class_tilesetscenescollectionsource_method_set_scene_tile_display_placeholder) ( id: [`int`](class_int.md), display_placeholder: [`bool`](class_bool.md) ) |
| `void`                                | [`set_scene_tile_id`](#class_tilesetscenescollectionsource_method_set_scene_tile_id) ( id: [`int`](class_int.md), new_id: [`int`](class_int.md) )                                                  |
| `void`                                | [`set_scene_tile_scene`](#class_tilesetscenescollectionsource_method_set_scene_tile_scene) ( id: [`int`](class_int.md), packed_scene: [`PackedScene`](class_packedscene.md) )                      |

<!-- rst-class:: classref-section-separator -->

---

## 方法说明

<div id="_class_tilesetscenescollectionsource_method_create_scene_tile"></div>

[`int`](class_int.md) **create_scene_tile** ( packed_scene: [`PackedScene`](class_packedscene.md), id_override: [`int`](class_int.md) = -1 )<div id="class_tilesetscenescollectionsource_method_create_scene_tile"></div>

Creates a scene-based tile out of the given scene.

Returns a newly generated unique ID.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_tilesetscenescollectionsource_method_get_next_scene_tile_id"></div>

[`int`](class_int.md) **get_next_scene_tile_id** ( ) const[^const]<div id="class_tilesetscenescollectionsource_method_get_next_scene_tile_id"></div>

Returns the scene ID a following call to [`create_scene_tile`](#class_tilesetscenescollectionsource_method_create_scene_tile) would return.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_tilesetscenescollectionsource_method_get_scene_tile_display_placeholder"></div>

[`bool`](class_bool.md) **get_scene_tile_display_placeholder** ( id: [`int`](class_int.md) ) const[^const]<div id="class_tilesetscenescollectionsource_method_get_scene_tile_display_placeholder"></div>

Returns whether the scene tile with `id` displays a placeholder in the editor.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_tilesetscenescollectionsource_method_get_scene_tile_id"></div>

[`int`](class_int.md) **get_scene_tile_id** ( index: [`int`](class_int.md) )<div id="class_tilesetscenescollectionsource_method_get_scene_tile_id"></div>

Returns the scene tile ID of the scene tile at `index`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_tilesetscenescollectionsource_method_get_scene_tile_scene"></div>

[`PackedScene`](class_packedscene.md) **get_scene_tile_scene** ( id: [`int`](class_int.md) ) const[^const]<div id="class_tilesetscenescollectionsource_method_get_scene_tile_scene"></div>

Returns the [`PackedScene`](class_packedscene.md) resource of scene tile with `id`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_tilesetscenescollectionsource_method_get_scene_tiles_count"></div>

[`int`](class_int.md) **get_scene_tiles_count** ( )<div id="class_tilesetscenescollectionsource_method_get_scene_tiles_count"></div>

Returns the number or scene tiles this TileSet source has.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_tilesetscenescollectionsource_method_has_scene_tile_id"></div>

[`bool`](class_bool.md) **has_scene_tile_id** ( id: [`int`](class_int.md) )<div id="class_tilesetscenescollectionsource_method_has_scene_tile_id"></div>

Returns whether this TileSet source has a scene tile with `id`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_tilesetscenescollectionsource_method_remove_scene_tile"></div>

`void` **remove_scene_tile** ( id: [`int`](class_int.md) )<div id="class_tilesetscenescollectionsource_method_remove_scene_tile"></div>

Remove the scene tile with `id`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_tilesetscenescollectionsource_method_set_scene_tile_display_placeholder"></div>

`void` **set_scene_tile_display_placeholder** ( id: [`int`](class_int.md), display_placeholder: [`bool`](class_bool.md) )<div id="class_tilesetscenescollectionsource_method_set_scene_tile_display_placeholder"></div>

Sets whether or not the scene tile with `id` should display a placeholder in the editor. This might be useful for scenes that are not visible.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_tilesetscenescollectionsource_method_set_scene_tile_id"></div>

`void` **set_scene_tile_id** ( id: [`int`](class_int.md), new_id: [`int`](class_int.md) )<div id="class_tilesetscenescollectionsource_method_set_scene_tile_id"></div>

Changes a scene tile's ID from `id` to `new_id`. This will fail if there is already a tile with an ID equal to `new_id`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_tilesetscenescollectionsource_method_set_scene_tile_scene"></div>

`void` **set_scene_tile_scene** ( id: [`int`](class_int.md), packed_scene: [`PackedScene`](class_packedscene.md) )<div id="class_tilesetscenescollectionsource_method_set_scene_tile_scene"></div>

Assigns a [`PackedScene`](class_packedscene.md) resource to the scene tile with `id`. This will fail if the scene does not extend CanvasItem, as positioning properties are needed to place the scene on the TileMap.

[^virtual]: 本方法通常需要用户覆盖才能生效。
[^const]: 本方法无副作用，不会修改该实例的任何成员变量。
[^vararg]: 本方法除了能接受在此处描述的参数外，还能够继续接受任意数量的参数。
[^constructor]: 本方法用于构造某个类型。
[^static]: 调用本方法无需实例，可直接使用类名进行调用。
[^operator]: 本方法描述的是使用本类型作为左操作数的有效运算符。
[^bitfield]: 这个值是由下列位标志构成位掩码的整数。
[^void]: 无返回值。
