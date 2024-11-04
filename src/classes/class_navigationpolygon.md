<!-- ⚠ 请勿编辑本文件 ⚠ -->
<!-- 本文档使用脚本从 WeDot 引擎源码仓库生成。 -->
<!-- 生成脚本：https://github.com/WeDot-Engine/WeDot/tree/4.3/doc/tools/make_md.py； -->
<!-- 原文件：https://github.com/WeDot-Engine/WeDot/tree/4.3/doc/classes/NavigationPolygon.xml。 -->

<div id="_class_navigationpolygon"></div>

# NavigationPolygon

**实验性：** This class may be changed or removed in future versions.

**继承：** [`Resource`](class_resource.md) **<** [`RefCounted`](class_refcounted.md) **<** [`Object`](class_object.md)

A 2D navigation mesh that describes a traversable surface for pathfinding.

## 描述

A navigation mesh can be created either by baking it with the help of the [`NavigationServer2D`](class_navigationserver2d.md), or by adding vertices and convex polygon indices arrays manually.

To bake a navigation mesh at least one outline needs to be added that defines the outer bounds of the baked area.



```gdscript

    var new_navigation_mesh = NavigationPolygon.new()
    var bounding_outline = PackedVector2Array([Vector2(0, 0), Vector2(0, 50), Vector2(50, 50), Vector2(50, 0)])
    new_navigation_mesh.add_outline(bounding_outline)
    NavigationServer2D.bake_from_source_geometry_data(new_navigation_mesh, NavigationMeshSourceGeometryData2D.new());
    $NavigationRegion2D.navigation_polygon = new_navigation_mesh
```

```csharp

    var newNavigationMesh = new NavigationPolygon();
    var boundingOutline = new Vector2[] { new Vector2(0, 0), new Vector2(0, 50), new Vector2(50, 50), new Vector2(50, 0) };
    newNavigationMesh.AddOutline(boundingOutline);
    NavigationServer2D.BakeFromSourceGeometryData(newNavigationMesh, new NavigationMeshSourceGeometryData2D());
    GetNode<NavigationRegion2D>("NavigationRegion2D").NavigationPolygon = newNavigationMesh;
```



Adding vertices and polygon indices manually.



```gdscript

    var new_navigation_mesh = NavigationPolygon.new()
    var new_vertices = PackedVector2Array([Vector2(0, 0), Vector2(0, 50), Vector2(50, 50), Vector2(50, 0)])
    new_navigation_mesh.vertices = new_vertices
    var new_polygon_indices = PackedInt32Array([0, 1, 2, 3])
    new_navigation_mesh.add_polygon(new_polygon_indices)
    $NavigationRegion2D.navigation_polygon = new_navigation_mesh
```

```csharp

    var newNavigationMesh = new NavigationPolygon();
    var newVertices = new Vector2[] { new Vector2(0, 0), new Vector2(0, 50), new Vector2(50, 50), new Vector2(50, 0) };
    newNavigationMesh.Vertices = newVertices;
    var newPolygonIndices = new int[] { 0, 1, 2, 3 };
    newNavigationMesh.AddPolygon(newPolygonIndices);
    GetNode<NavigationRegion2D>("NavigationRegion2D").NavigationPolygon = newNavigationMesh;
```











## 属性

| [`float`](class_float.md)                                        | [`agent_radius`](#class_navigationpolygon_property_agent_radius)                             | ``10.0``                                        |
| [`Rect2`](class_rect2.md)                                        | [`baking_rect`](#class_navigationpolygon_property_baking_rect)                               | ``Rect2(0, 0, 0, 0)``                           |
| [`Vector2`](class_vector2.md)                                    | [`baking_rect_offset`](#class_navigationpolygon_property_baking_rect_offset)                 | ``Vector2(0, 0)``                               |
| [`float`](class_float.md)                                        | [`border_size`](#class_navigationpolygon_property_border_size)                               | ``0.0``                                         |
| [`float`](class_float.md)                                        | [`cell_size`](#class_navigationpolygon_property_cell_size)                                   | ``1.0``                                         |
| [`int`](class_int.md)                                            | [`parsed_collision_mask`](#class_navigationpolygon_property_parsed_collision_mask)           | ``4294967295``                                  |
| [ParsedGeometryType](#enum_navigationpolygon_parsedgeometrytype) | [`parsed_geometry_type`](#class_navigationpolygon_property_parsed_geometry_type)             | ``2``                                           |
| [`StringName`](class_stringname.md)                              | [`source_geometry_group_name`](#class_navigationpolygon_property_source_geometry_group_name) | ``&"navigation_polygon_source_geometry_group"`` |
| [SourceGeometryMode](#enum_navigationpolygon_sourcegeometrymode) | [`source_geometry_mode`](#class_navigationpolygon_property_source_geometry_mode)             | ``0``                                           |

## 方法

| `void`                                              | [`add_outline`](#class_navigationpolygon_method_add_outline) ( outline: [`PackedVector2Array`](class_packedvector2array.md) )                                                 |
| `void`                                              | [`add_outline_at_index`](#class_navigationpolygon_method_add_outline_at_index) ( outline: [`PackedVector2Array`](class_packedvector2array.md), index: [`int`](class_int.md) ) |
| `void`                                              | [`add_polygon`](#class_navigationpolygon_method_add_polygon) ( polygon: [`PackedInt32Array`](class_packedint32array.md) )                                                     |
| `void`                                              | [`clear`](#class_navigationpolygon_method_clear) ( )                                                                                                                          |
| `void`                                              | [`clear_outlines`](#class_navigationpolygon_method_clear_outlines) ( )                                                                                                        |
| `void`                                              | [`clear_polygons`](#class_navigationpolygon_method_clear_polygons) ( )                                                                                                        |
| [`NavigationMesh`](class_navigationmesh.md)         | [`get_navigation_mesh`](#class_navigationpolygon_method_get_navigation_mesh) ( )                                                                                              |
| [`PackedVector2Array`](class_packedvector2array.md) | [`get_outline`](#class_navigationpolygon_method_get_outline) ( idx: [`int`](class_int.md) ) const[^const]                                                                     |
| [`int`](class_int.md)                               | [`get_outline_count`](#class_navigationpolygon_method_get_outline_count) ( ) const[^const]                                                                                    |
| [`bool`](class_bool.md)                             | [`get_parsed_collision_mask_value`](#class_navigationpolygon_method_get_parsed_collision_mask_value) ( layer_number: [`int`](class_int.md) ) const[^const]                    |
| [`PackedInt32Array`](class_packedint32array.md)     | [`get_polygon`](#class_navigationpolygon_method_get_polygon) ( idx: [`int`](class_int.md) )                                                                                   |
| [`int`](class_int.md)                               | [`get_polygon_count`](#class_navigationpolygon_method_get_polygon_count) ( ) const[^const]                                                                                    |
| [`PackedVector2Array`](class_packedvector2array.md) | [`get_vertices`](#class_navigationpolygon_method_get_vertices) ( ) const[^const]                                                                                              |
| `void`                                              | [`make_polygons_from_outlines`](#class_navigationpolygon_method_make_polygons_from_outlines) ( )                                                                              |
| `void`                                              | [`remove_outline`](#class_navigationpolygon_method_remove_outline) ( idx: [`int`](class_int.md) )                                                                             |
| `void`                                              | [`set_outline`](#class_navigationpolygon_method_set_outline) ( idx: [`int`](class_int.md), outline: [`PackedVector2Array`](class_packedvector2array.md) )                     |
| `void`                                              | [`set_parsed_collision_mask_value`](#class_navigationpolygon_method_set_parsed_collision_mask_value) ( layer_number: [`int`](class_int.md), value: [`bool`](class_bool.md) )  |
| `void`                                              | [`set_vertices`](#class_navigationpolygon_method_set_vertices) ( vertices: [`PackedVector2Array`](class_packedvector2array.md) )                                              |

<!-- rst-class:: classref-section-separator -->

---

## 枚举

<div id="_class_enum_navigationpolygon_parsedgeometrytype"></div>

enum **ParsedGeometryType**: <div id="enum_navigationpolygon_parsedgeometrytype"></div>

<div id="_class_navigationpolygon_constant_parsed_geometry_mesh_instances"></div>

[ParsedGeometryType](#enum_navigationpolygon_parsedgeometrytype) **PARSED_GEOMETRY_MESH_INSTANCES** = ``0``

Parses mesh instances as obstruction geometry. This includes [`Polygon2D`](class_polygon2d.md), [`MeshInstance2D`](class_meshinstance2d.md), [`MultiMeshInstance2D`](class_multimeshinstance2d.md), and [`TileMap`](class_tilemap.md) nodes.

Meshes are only parsed when they use a 2D vertices surface format.

<div id="_class_navigationpolygon_constant_parsed_geometry_static_colliders"></div>

[ParsedGeometryType](#enum_navigationpolygon_parsedgeometrytype) **PARSED_GEOMETRY_STATIC_COLLIDERS** = ``1``

Parses [`StaticBody2D`](class_staticbody2d.md) and [`TileMap`](class_tilemap.md) colliders as obstruction geometry. The collider should be in any of the layers specified by [`parsed_collision_mask`](#class_navigationpolygon_property_parsed_collision_mask).

<div id="_class_navigationpolygon_constant_parsed_geometry_both"></div>

[ParsedGeometryType](#enum_navigationpolygon_parsedgeometrytype) **PARSED_GEOMETRY_BOTH** = ``2``

Both [`PARSED_GEOMETRY_MESH_INSTANCES`](#class_navigationpolygon_constant_parsed_geometry_mesh_instances) and [`PARSED_GEOMETRY_STATIC_COLLIDERS`](#class_navigationpolygon_constant_parsed_geometry_static_colliders).

<div id="_class_navigationpolygon_constant_parsed_geometry_max"></div>

[ParsedGeometryType](#enum_navigationpolygon_parsedgeometrytype) **PARSED_GEOMETRY_MAX** = ``3``

Represents the size of the [ParsedGeometryType](#enum_navigationpolygon_parsedgeometrytype) enum.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_enum_navigationpolygon_sourcegeometrymode"></div>

enum **SourceGeometryMode**: <div id="enum_navigationpolygon_sourcegeometrymode"></div>

<div id="_class_navigationpolygon_constant_source_geometry_root_node_children"></div>

[SourceGeometryMode](#enum_navigationpolygon_sourcegeometrymode) **SOURCE_GEOMETRY_ROOT_NODE_CHILDREN** = ``0``

Scans the child nodes of the root node recursively for geometry.

<div id="_class_navigationpolygon_constant_source_geometry_groups_with_children"></div>

[SourceGeometryMode](#enum_navigationpolygon_sourcegeometrymode) **SOURCE_GEOMETRY_GROUPS_WITH_CHILDREN** = ``1``

Scans nodes in a group and their child nodes recursively for geometry. The group is specified by [`source_geometry_group_name`](#class_navigationpolygon_property_source_geometry_group_name).

<div id="_class_navigationpolygon_constant_source_geometry_groups_explicit"></div>

[SourceGeometryMode](#enum_navigationpolygon_sourcegeometrymode) **SOURCE_GEOMETRY_GROUPS_EXPLICIT** = ``2``

Uses nodes in a group for geometry. The group is specified by [`source_geometry_group_name`](#class_navigationpolygon_property_source_geometry_group_name).

<div id="_class_navigationpolygon_constant_source_geometry_max"></div>

[SourceGeometryMode](#enum_navigationpolygon_sourcegeometrymode) **SOURCE_GEOMETRY_MAX** = ``3``

Represents the size of the [SourceGeometryMode](#enum_navigationpolygon_sourcegeometrymode) enum.

<!-- rst-class:: classref-section-separator -->

---

## 属性说明

<div id="_class_navigationpolygon_property_agent_radius"></div>

[`float`](class_float.md) **agent_radius** = ``10.0`` <div id="class_navigationpolygon_property_agent_radius"></div>

- `void` **set_agent_radius** ( value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_agent_radius** ( )

The distance to erode/shrink the walkable surface when baking the navigation mesh.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_navigationpolygon_property_baking_rect"></div>

[`Rect2`](class_rect2.md) **baking_rect** = ``Rect2(0, 0, 0, 0)`` <div id="class_navigationpolygon_property_baking_rect"></div>

- `void` **set_baking_rect** ( value: [`Rect2`](class_rect2.md) )
- [`Rect2`](class_rect2.md) **get_baking_rect** ( )

If the baking [`Rect2`](class_rect2.md) has an area the navigation mesh baking will be restricted to its enclosing area.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_navigationpolygon_property_baking_rect_offset"></div>

[`Vector2`](class_vector2.md) **baking_rect_offset** = ``Vector2(0, 0)`` <div id="class_navigationpolygon_property_baking_rect_offset"></div>

- `void` **set_baking_rect_offset** ( value: [`Vector2`](class_vector2.md) )
- [`Vector2`](class_vector2.md) **get_baking_rect_offset** ( )

The position offset applied to the [`baking_rect`](#class_navigationpolygon_property_baking_rect) [`Rect2`](class_rect2.md).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_navigationpolygon_property_border_size"></div>

[`float`](class_float.md) **border_size** = ``0.0`` <div id="class_navigationpolygon_property_border_size"></div>

- `void` **set_border_size** ( value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_border_size** ( )

The size of the non-navigable border around the bake bounding area defined by the [`baking_rect`](#class_navigationpolygon_property_baking_rect) [`Rect2`](class_rect2.md).

In conjunction with the [`baking_rect`](#class_navigationpolygon_property_baking_rect) the border size can be used to bake tile aligned navigation meshes without the tile edges being shrunk by [`agent_radius`](#class_navigationpolygon_property_agent_radius).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_navigationpolygon_property_cell_size"></div>

[`float`](class_float.md) **cell_size** = ``1.0`` <div id="class_navigationpolygon_property_cell_size"></div>

- `void` **set_cell_size** ( value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_cell_size** ( )

The cell size used to rasterize the navigation mesh vertices. Must match with the cell size on the navigation map.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_navigationpolygon_property_parsed_collision_mask"></div>

[`int`](class_int.md) **parsed_collision_mask** = ``4294967295`` <div id="class_navigationpolygon_property_parsed_collision_mask"></div>

- `void` **set_parsed_collision_mask** ( value: [`int`](class_int.md) )
- [`int`](class_int.md) **get_parsed_collision_mask** ( )

The physics layers to scan for static colliders.

Only used when [`parsed_geometry_type`](#class_navigationpolygon_property_parsed_geometry_type) is [`PARSED_GEOMETRY_STATIC_COLLIDERS`](#class_navigationpolygon_constant_parsed_geometry_static_colliders) or [`PARSED_GEOMETRY_BOTH`](#class_navigationpolygon_constant_parsed_geometry_both).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_navigationpolygon_property_parsed_geometry_type"></div>

[ParsedGeometryType](#enum_navigationpolygon_parsedgeometrytype) **parsed_geometry_type** = ``2`` <div id="class_navigationpolygon_property_parsed_geometry_type"></div>

- `void` **set_parsed_geometry_type** ( value: [ParsedGeometryType](#enum_navigationpolygon_parsedgeometrytype) )
- [ParsedGeometryType](#enum_navigationpolygon_parsedgeometrytype) **get_parsed_geometry_type** ( )

Determines which type of nodes will be parsed as geometry. See [ParsedGeometryType](#enum_navigationpolygon_parsedgeometrytype) for possible values.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_navigationpolygon_property_source_geometry_group_name"></div>

[`StringName`](class_stringname.md) **source_geometry_group_name** = ``&"navigation_polygon_source_geometry_group"`` <div id="class_navigationpolygon_property_source_geometry_group_name"></div>

- `void` **set_source_geometry_group_name** ( value: [`StringName`](class_stringname.md) )
- [`StringName`](class_stringname.md) **get_source_geometry_group_name** ( )

The group name of nodes that should be parsed for baking source geometry.

Only used when [`source_geometry_mode`](#class_navigationpolygon_property_source_geometry_mode) is [`SOURCE_GEOMETRY_GROUPS_WITH_CHILDREN`](#class_navigationpolygon_constant_source_geometry_groups_with_children) or [`SOURCE_GEOMETRY_GROUPS_EXPLICIT`](#class_navigationpolygon_constant_source_geometry_groups_explicit).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_navigationpolygon_property_source_geometry_mode"></div>

[SourceGeometryMode](#enum_navigationpolygon_sourcegeometrymode) **source_geometry_mode** = ``0`` <div id="class_navigationpolygon_property_source_geometry_mode"></div>

- `void` **set_source_geometry_mode** ( value: [SourceGeometryMode](#enum_navigationpolygon_sourcegeometrymode) )
- [SourceGeometryMode](#enum_navigationpolygon_sourcegeometrymode) **get_source_geometry_mode** ( )

The source of the geometry used when baking. See [SourceGeometryMode](#enum_navigationpolygon_sourcegeometrymode) for possible values.

<!-- rst-class:: classref-section-separator -->

---

## 方法说明

<div id="_class_navigationpolygon_method_add_outline"></div>

`void` **add_outline** ( outline: [`PackedVector2Array`](class_packedvector2array.md) )<div id="class_navigationpolygon_method_add_outline"></div>

Appends a [`PackedVector2Array`](class_packedvector2array.md) that contains the vertices of an outline to the internal array that contains all the outlines.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_navigationpolygon_method_add_outline_at_index"></div>

`void` **add_outline_at_index** ( outline: [`PackedVector2Array`](class_packedvector2array.md), index: [`int`](class_int.md) )<div id="class_navigationpolygon_method_add_outline_at_index"></div>

Adds a [`PackedVector2Array`](class_packedvector2array.md) that contains the vertices of an outline to the internal array that contains all the outlines at a fixed position.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_navigationpolygon_method_add_polygon"></div>

`void` **add_polygon** ( polygon: [`PackedInt32Array`](class_packedint32array.md) )<div id="class_navigationpolygon_method_add_polygon"></div>

Adds a polygon using the indices of the vertices you get when calling [`get_vertices`](#class_navigationpolygon_method_get_vertices).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_navigationpolygon_method_clear"></div>

`void` **clear** ( )<div id="class_navigationpolygon_method_clear"></div>

Clears the internal arrays for vertices and polygon indices.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_navigationpolygon_method_clear_outlines"></div>

`void` **clear_outlines** ( )<div id="class_navigationpolygon_method_clear_outlines"></div>

Clears the array of the outlines, but it doesn't clear the vertices and the polygons that were created by them.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_navigationpolygon_method_clear_polygons"></div>

`void` **clear_polygons** ( )<div id="class_navigationpolygon_method_clear_polygons"></div>

Clears the array of polygons, but it doesn't clear the array of outlines and vertices.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_navigationpolygon_method_get_navigation_mesh"></div>

[`NavigationMesh`](class_navigationmesh.md) **get_navigation_mesh** ( )<div id="class_navigationpolygon_method_get_navigation_mesh"></div>

Returns the [`NavigationMesh`](class_navigationmesh.md) resulting from this navigation polygon. This navigation mesh can be used to update the navigation mesh of a region with the [`NavigationServer3D.region_set_navigation_mesh`](#class_navigationserver3d_method_region_set_navigation_mesh) API directly (as 2D uses the 3D server behind the scene).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_navigationpolygon_method_get_outline"></div>

[`PackedVector2Array`](class_packedvector2array.md) **get_outline** ( idx: [`int`](class_int.md) ) const[^const]<div id="class_navigationpolygon_method_get_outline"></div>

Returns a [`PackedVector2Array`](class_packedvector2array.md) containing the vertices of an outline that was created in the editor or by script.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_navigationpolygon_method_get_outline_count"></div>

[`int`](class_int.md) **get_outline_count** ( ) const[^const]<div id="class_navigationpolygon_method_get_outline_count"></div>

Returns the number of outlines that were created in the editor or by script.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_navigationpolygon_method_get_parsed_collision_mask_value"></div>

[`bool`](class_bool.md) **get_parsed_collision_mask_value** ( layer_number: [`int`](class_int.md) ) const[^const]<div id="class_navigationpolygon_method_get_parsed_collision_mask_value"></div>

Returns whether or not the specified layer of the [`parsed_collision_mask`](#class_navigationpolygon_property_parsed_collision_mask) is enabled, given a `layer_number` between 1 and 32.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_navigationpolygon_method_get_polygon"></div>

[`PackedInt32Array`](class_packedint32array.md) **get_polygon** ( idx: [`int`](class_int.md) )<div id="class_navigationpolygon_method_get_polygon"></div>

Returns a [`PackedInt32Array`](class_packedint32array.md) containing the indices of the vertices of a created polygon.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_navigationpolygon_method_get_polygon_count"></div>

[`int`](class_int.md) **get_polygon_count** ( ) const[^const]<div id="class_navigationpolygon_method_get_polygon_count"></div>

Returns the count of all polygons.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_navigationpolygon_method_get_vertices"></div>

[`PackedVector2Array`](class_packedvector2array.md) **get_vertices** ( ) const[^const]<div id="class_navigationpolygon_method_get_vertices"></div>

Returns a [`PackedVector2Array`](class_packedvector2array.md) containing all the vertices being used to create the polygons.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_navigationpolygon_method_make_polygons_from_outlines"></div>

`void` **make_polygons_from_outlines** ( )<div id="class_navigationpolygon_method_make_polygons_from_outlines"></div>

**已弃用：** Use [`NavigationServer2D.parse_source_geometry_data`](#class_navigationserver2d_method_parse_source_geometry_data) and [`NavigationServer2D.bake_from_source_geometry_data`](#class_navigationserver2d_method_bake_from_source_geometry_data) instead.

Creates polygons from the outlines added in the editor or by script.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_navigationpolygon_method_remove_outline"></div>

`void` **remove_outline** ( idx: [`int`](class_int.md) )<div id="class_navigationpolygon_method_remove_outline"></div>

Removes an outline created in the editor or by script. You have to call [`make_polygons_from_outlines`](#class_navigationpolygon_method_make_polygons_from_outlines) for the polygons to update.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_navigationpolygon_method_set_outline"></div>

`void` **set_outline** ( idx: [`int`](class_int.md), outline: [`PackedVector2Array`](class_packedvector2array.md) )<div id="class_navigationpolygon_method_set_outline"></div>

Changes an outline created in the editor or by script. You have to call [`make_polygons_from_outlines`](#class_navigationpolygon_method_make_polygons_from_outlines) for the polygons to update.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_navigationpolygon_method_set_parsed_collision_mask_value"></div>

`void` **set_parsed_collision_mask_value** ( layer_number: [`int`](class_int.md), value: [`bool`](class_bool.md) )<div id="class_navigationpolygon_method_set_parsed_collision_mask_value"></div>

Based on `value`, enables or disables the specified layer in the [`parsed_collision_mask`](#class_navigationpolygon_property_parsed_collision_mask), given a `layer_number` between 1 and 32.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_navigationpolygon_method_set_vertices"></div>

`void` **set_vertices** ( vertices: [`PackedVector2Array`](class_packedvector2array.md) )<div id="class_navigationpolygon_method_set_vertices"></div>

Sets the vertices that can be then indexed to create polygons with the [`add_polygon`](#class_navigationpolygon_method_add_polygon) method.

[^virtual]: 本方法通常需要用户覆盖才能生效。
[^const]: 本方法无副作用，不会修改该实例的任何成员变量。
[^vararg]: 本方法除了能接受在此处描述的参数外，还能够继续接受任意数量的参数。
[^constructor]: 本方法用于构造某个类型。
[^static]: 调用本方法无需实例，可直接使用类名进行调用。
[^operator]: 本方法描述的是使用本类型作为左操作数的有效运算符。
[^bitfield]: 这个值是由下列位标志构成位掩码的整数。
[^void]: 无返回值。
