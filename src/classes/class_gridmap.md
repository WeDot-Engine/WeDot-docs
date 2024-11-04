<!-- ⚠ 请勿编辑本文件 ⚠ -->
<!-- 本文档使用脚本从 WeDot 引擎源码仓库生成。 -->
<!-- 生成脚本：https://github.com/WeDot-Engine/WeDot/tree/4.3/doc/tools/make_md.py； -->
<!-- 原文件：https://github.com/WeDot-Engine/WeDot/tree/4.3/modules/gridmap/doc_classes/GridMap.xml。 -->

<div id="_class_gridmap"></div>

# GridMap

**继承：** [`Node3D`](class_node3d.md) **<** [`Node`](class_node.md) **<** [`Object`](class_object.md)

Node for 3D tile-based maps.

## 描述

GridMap lets you place meshes on a grid interactively. It works both from the editor and from scripts, which can help you create in-game level editors.

GridMaps use a [`MeshLibrary`](class_meshlibrary.md) which contains a list of tiles. Each tile is a mesh with materials plus optional collision and navigation shapes.

A GridMap contains a collection of cells. Each grid cell refers to a tile in the [`MeshLibrary`](class_meshlibrary.md). All cells in the map have the same dimensions.

Internally, a GridMap is split into a sparse collection of octants for efficient rendering and physics processing. Every octant has the same dimensions and can contain several cells.

 **Note:** GridMap doesn't extend [`VisualInstance3D`](class_visualinstance3d.md) and therefore can't be hidden or cull masked based on [`VisualInstance3D.layers`](#class_visualinstance3d_property_layers). If you make a light not affect the first layer, the whole GridMap won't be lit by the light in question.

## 属性

| [`bool`](class_bool.md)                       | [`bake_navigation`](#class_gridmap_property_bake_navigation)       | ``false``            |
| [`bool`](class_bool.md)                       | [`cell_center_x`](#class_gridmap_property_cell_center_x)           | ``true``             |
| [`bool`](class_bool.md)                       | [`cell_center_y`](#class_gridmap_property_cell_center_y)           | ``true``             |
| [`bool`](class_bool.md)                       | [`cell_center_z`](#class_gridmap_property_cell_center_z)           | ``true``             |
| [`int`](class_int.md)                         | [`cell_octant_size`](#class_gridmap_property_cell_octant_size)     | ``8``                |
| [`float`](class_float.md)                     | [`cell_scale`](#class_gridmap_property_cell_scale)                 | ``1.0``              |
| [`Vector3`](class_vector3.md)                 | [`cell_size`](#class_gridmap_property_cell_size)                   | ``Vector3(2, 2, 2)`` |
| [`int`](class_int.md)                         | [`collision_layer`](#class_gridmap_property_collision_layer)       | ``1``                |
| [`int`](class_int.md)                         | [`collision_mask`](#class_gridmap_property_collision_mask)         | ``1``                |
| [`float`](class_float.md)                     | [`collision_priority`](#class_gridmap_property_collision_priority) | ``1.0``              |
| [`MeshLibrary`](class_meshlibrary.md)         | [`mesh_library`](#class_gridmap_property_mesh_library)             |                      |
| [`PhysicsMaterial`](class_physicsmaterial.md) | [`physics_material`](#class_gridmap_property_physics_material)     |                      |

## 方法

| `void`                                                  | [`clear`](#class_gridmap_method_clear) ( )                                                                                                                                   |
| `void`                                                  | [`clear_baked_meshes`](#class_gridmap_method_clear_baked_meshes) ( )                                                                                                         |
| [`RID`](class_rid.md)                                   | [`get_bake_mesh_instance`](#class_gridmap_method_get_bake_mesh_instance) ( idx: [`int`](class_int.md) )                                                                      |
| [`Array`](class_array.md)                               | [`get_bake_meshes`](#class_gridmap_method_get_bake_meshes) ( )                                                                                                               |
| [`Basis`](class_basis.md)                               | [`get_basis_with_orthogonal_index`](#class_gridmap_method_get_basis_with_orthogonal_index) ( index: [`int`](class_int.md) ) const[^const]                                    |
| [`int`](class_int.md)                                   | [`get_cell_item`](#class_gridmap_method_get_cell_item) ( position: [`Vector3i`](class_vector3i.md) ) const[^const]                                                           |
| [`Basis`](class_basis.md)                               | [`get_cell_item_basis`](#class_gridmap_method_get_cell_item_basis) ( position: [`Vector3i`](class_vector3i.md) ) const[^const]                                               |
| [`int`](class_int.md)                                   | [`get_cell_item_orientation`](#class_gridmap_method_get_cell_item_orientation) ( position: [`Vector3i`](class_vector3i.md) ) const[^const]                                   |
| [`bool`](class_bool.md)                                 | [`get_collision_layer_value`](#class_gridmap_method_get_collision_layer_value) ( layer_number: [`int`](class_int.md) ) const[^const]                                         |
| [`bool`](class_bool.md)                                 | [`get_collision_mask_value`](#class_gridmap_method_get_collision_mask_value) ( layer_number: [`int`](class_int.md) ) const[^const]                                           |
| [`Array`](class_array.md)                               | [`get_meshes`](#class_gridmap_method_get_meshes) ( ) const[^const]                                                                                                           |
| [`RID`](class_rid.md)                                   | [`get_navigation_map`](#class_gridmap_method_get_navigation_map) ( ) const[^const]                                                                                           |
| [`int`](class_int.md)                                   | [`get_orthogonal_index_from_basis`](#class_gridmap_method_get_orthogonal_index_from_basis) ( basis: [`Basis`](class_basis.md) ) const[^const]                                |
| [Array](class_array.md) [`Vector3i`](class_vector3i.md) | [`get_used_cells`](#class_gridmap_method_get_used_cells) ( ) const[^const]                                                                                                   |
| [Array](class_array.md) [`Vector3i`](class_vector3i.md) | [`get_used_cells_by_item`](#class_gridmap_method_get_used_cells_by_item) ( item: [`int`](class_int.md) ) const[^const]                                                       |
| [`Vector3i`](class_vector3i.md)                         | [`local_to_map`](#class_gridmap_method_local_to_map) ( local_position: [`Vector3`](class_vector3.md) ) const[^const]                                                         |
| `void`                                                  | [`make_baked_meshes`](#class_gridmap_method_make_baked_meshes) ( gen_lightmap_uv: [`bool`](class_bool.md) = false, lightmap_uv_texel_size: [`float`](class_float.md) = 0.1 ) |
| [`Vector3`](class_vector3.md)                           | [`map_to_local`](#class_gridmap_method_map_to_local) ( map_position: [`Vector3i`](class_vector3i.md) ) const[^const]                                                         |
| `void`                                                  | [`resource_changed`](#class_gridmap_method_resource_changed) ( resource: [`Resource`](class_resource.md) )                                                                   |
| `void`                                                  | [`set_cell_item`](#class_gridmap_method_set_cell_item) ( position: [`Vector3i`](class_vector3i.md), item: [`int`](class_int.md), orientation: [`int`](class_int.md) = 0 )    |
| `void`                                                  | [`set_collision_layer_value`](#class_gridmap_method_set_collision_layer_value) ( layer_number: [`int`](class_int.md), value: [`bool`](class_bool.md) )                       |
| `void`                                                  | [`set_collision_mask_value`](#class_gridmap_method_set_collision_mask_value) ( layer_number: [`int`](class_int.md), value: [`bool`](class_bool.md) )                         |
| `void`                                                  | [`set_navigation_map`](#class_gridmap_method_set_navigation_map) ( navigation_map: [`RID`](class_rid.md) )                                                                   |

<!-- rst-class:: classref-section-separator -->

---

## 信号

<div id="_class_class_gridmap_signal_cell_size_changed"></div>

**cell_size_changed** ( cell_size: [`Vector3`](class_vector3.md) ) <div id="class_gridmap_signal_cell_size_changed"></div>

Emitted when [`cell_size`](#class_gridmap_property_cell_size) changes.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_class_gridmap_signal_changed"></div>

**changed** ( ) <div id="class_gridmap_signal_changed"></div>

Emitted when the [`MeshLibrary`](class_meshlibrary.md) of this GridMap changes.

<!-- rst-class:: classref-section-separator -->

---

## 常量

<div id="_class_gridmap_constant_invalid_cell_item"></div>

**INVALID_CELL_ITEM** = ``-1`` <div id="class_gridmap_constant_invalid_cell_item"></div>

Invalid cell item that can be used in [`set_cell_item`](#class_gridmap_method_set_cell_item) to clear cells (or represent an empty cell in [`get_cell_item`](#class_gridmap_method_get_cell_item)).

<!-- rst-class:: classref-section-separator -->

---

## 属性说明

<div id="_class_gridmap_property_bake_navigation"></div>

[`bool`](class_bool.md) **bake_navigation** = ``false`` <div id="class_gridmap_property_bake_navigation"></div>

- `void` **set_bake_navigation** ( value: [`bool`](class_bool.md) )
- [`bool`](class_bool.md) **is_baking_navigation** ( )

If `true`, this GridMap creates a navigation region for each cell that uses a [`mesh_library`](#class_gridmap_property_mesh_library) item with a navigation mesh. The created navigation region will use the navigation layers bitmask assigned to the [`MeshLibrary`](class_meshlibrary.md)'s item.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_gridmap_property_cell_center_x"></div>

[`bool`](class_bool.md) **cell_center_x** = ``true`` <div id="class_gridmap_property_cell_center_x"></div>

- `void` **set_center_x** ( value: [`bool`](class_bool.md) )
- [`bool`](class_bool.md) **get_center_x** ( )

If `true`, grid items are centered on the X axis.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_gridmap_property_cell_center_y"></div>

[`bool`](class_bool.md) **cell_center_y** = ``true`` <div id="class_gridmap_property_cell_center_y"></div>

- `void` **set_center_y** ( value: [`bool`](class_bool.md) )
- [`bool`](class_bool.md) **get_center_y** ( )

If `true`, grid items are centered on the Y axis.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_gridmap_property_cell_center_z"></div>

[`bool`](class_bool.md) **cell_center_z** = ``true`` <div id="class_gridmap_property_cell_center_z"></div>

- `void` **set_center_z** ( value: [`bool`](class_bool.md) )
- [`bool`](class_bool.md) **get_center_z** ( )

If `true`, grid items are centered on the Z axis.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_gridmap_property_cell_octant_size"></div>

[`int`](class_int.md) **cell_octant_size** = ``8`` <div id="class_gridmap_property_cell_octant_size"></div>

- `void` **set_octant_size** ( value: [`int`](class_int.md) )
- [`int`](class_int.md) **get_octant_size** ( )

The size of each octant measured in number of cells. This applies to all three axis.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_gridmap_property_cell_scale"></div>

[`float`](class_float.md) **cell_scale** = ``1.0`` <div id="class_gridmap_property_cell_scale"></div>

- `void` **set_cell_scale** ( value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_cell_scale** ( )

The scale of the cell items.

This does not affect the size of the grid cells themselves, only the items in them. This can be used to make cell items overlap their neighbors.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_gridmap_property_cell_size"></div>

[`Vector3`](class_vector3.md) **cell_size** = ``Vector3(2, 2, 2)`` <div id="class_gridmap_property_cell_size"></div>

- `void` **set_cell_size** ( value: [`Vector3`](class_vector3.md) )
- [`Vector3`](class_vector3.md) **get_cell_size** ( )

The dimensions of the grid's cells.

This does not affect the size of the meshes. See [`cell_scale`](#class_gridmap_property_cell_scale).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_gridmap_property_collision_layer"></div>

[`int`](class_int.md) **collision_layer** = ``1`` <div id="class_gridmap_property_collision_layer"></div>

- `void` **set_collision_layer** ( value: [`int`](class_int.md) )
- [`int`](class_int.md) **get_collision_layer** ( )

The physics layers this GridMap is in.

GridMaps act as static bodies, meaning they aren't affected by gravity or other forces. They only affect other physics bodies that collide with them.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_gridmap_property_collision_mask"></div>

[`int`](class_int.md) **collision_mask** = ``1`` <div id="class_gridmap_property_collision_mask"></div>

- `void` **set_collision_mask** ( value: [`int`](class_int.md) )
- [`int`](class_int.md) **get_collision_mask** ( )

The physics layers this GridMap detects collisions in. See [*Collision layers and masks*](../tutorials/physics/physics_introduction.md#collision-layers-and-masks) in the documentation for more information.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_gridmap_property_collision_priority"></div>

[`float`](class_float.md) **collision_priority** = ``1.0`` <div id="class_gridmap_property_collision_priority"></div>

- `void` **set_collision_priority** ( value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_collision_priority** ( )

The priority used to solve colliding when occurring penetration. The higher the priority is, the lower the penetration into the object will be. This can for example be used to prevent the player from breaking through the boundaries of a level.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_gridmap_property_mesh_library"></div>

[`MeshLibrary`](class_meshlibrary.md) **mesh_library** <div id="class_gridmap_property_mesh_library"></div>

- `void` **set_mesh_library** ( value: [`MeshLibrary`](class_meshlibrary.md) )
- [`MeshLibrary`](class_meshlibrary.md) **get_mesh_library** ( )

The assigned [`MeshLibrary`](class_meshlibrary.md).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_gridmap_property_physics_material"></div>

[`PhysicsMaterial`](class_physicsmaterial.md) **physics_material** <div id="class_gridmap_property_physics_material"></div>

- `void` **set_physics_material** ( value: [`PhysicsMaterial`](class_physicsmaterial.md) )
- [`PhysicsMaterial`](class_physicsmaterial.md) **get_physics_material** ( )

Overrides the default friction and bounce physics properties for the whole **GridMap**.

<!-- rst-class:: classref-section-separator -->

---

## 方法说明

<div id="_class_gridmap_method_clear"></div>

`void` **clear** ( )<div id="class_gridmap_method_clear"></div>

Clear all cells.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_gridmap_method_clear_baked_meshes"></div>

`void` **clear_baked_meshes** ( )<div id="class_gridmap_method_clear_baked_meshes"></div>

Clears all baked meshes. See [`make_baked_meshes`](#class_gridmap_method_make_baked_meshes).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_gridmap_method_get_bake_mesh_instance"></div>

[`RID`](class_rid.md) **get_bake_mesh_instance** ( idx: [`int`](class_int.md) )<div id="class_gridmap_method_get_bake_mesh_instance"></div>

Returns [`RID`](class_rid.md) of a baked mesh with the given `idx`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_gridmap_method_get_bake_meshes"></div>

[`Array`](class_array.md) **get_bake_meshes** ( )<div id="class_gridmap_method_get_bake_meshes"></div>

Returns an array of [`ArrayMesh`](class_arraymesh.md) es and [`Transform3D`](class_transform3d.md) references of all bake meshes that exist within the current GridMap.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_gridmap_method_get_basis_with_orthogonal_index"></div>

[`Basis`](class_basis.md) **get_basis_with_orthogonal_index** ( index: [`int`](class_int.md) ) const[^const]<div id="class_gridmap_method_get_basis_with_orthogonal_index"></div>

Returns one of 24 possible rotations that lie along the vectors (x,y,z) with each component being either -1, 0, or 1. For further details, refer to the Godot source code.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_gridmap_method_get_cell_item"></div>

[`int`](class_int.md) **get_cell_item** ( position: [`Vector3i`](class_vector3i.md) ) const[^const]<div id="class_gridmap_method_get_cell_item"></div>

The [`MeshLibrary`](class_meshlibrary.md) item index located at the given grid coordinates. If the cell is empty, [`INVALID_CELL_ITEM`](#class_gridmap_constant_invalid_cell_item) will be returned.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_gridmap_method_get_cell_item_basis"></div>

[`Basis`](class_basis.md) **get_cell_item_basis** ( position: [`Vector3i`](class_vector3i.md) ) const[^const]<div id="class_gridmap_method_get_cell_item_basis"></div>

Returns the basis that gives the specified cell its orientation.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_gridmap_method_get_cell_item_orientation"></div>

[`int`](class_int.md) **get_cell_item_orientation** ( position: [`Vector3i`](class_vector3i.md) ) const[^const]<div id="class_gridmap_method_get_cell_item_orientation"></div>

The orientation of the cell at the given grid coordinates. `-1` is returned if the cell is empty.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_gridmap_method_get_collision_layer_value"></div>

[`bool`](class_bool.md) **get_collision_layer_value** ( layer_number: [`int`](class_int.md) ) const[^const]<div id="class_gridmap_method_get_collision_layer_value"></div>

Returns whether or not the specified layer of the [`collision_layer`](#class_gridmap_property_collision_layer) is enabled, given a `layer_number` between 1 and 32.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_gridmap_method_get_collision_mask_value"></div>

[`bool`](class_bool.md) **get_collision_mask_value** ( layer_number: [`int`](class_int.md) ) const[^const]<div id="class_gridmap_method_get_collision_mask_value"></div>

Returns whether or not the specified layer of the [`collision_mask`](#class_gridmap_property_collision_mask) is enabled, given a `layer_number` between 1 and 32.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_gridmap_method_get_meshes"></div>

[`Array`](class_array.md) **get_meshes** ( ) const[^const]<div id="class_gridmap_method_get_meshes"></div>

Returns an array of [`Transform3D`](class_transform3d.md) and [`Mesh`](class_mesh.md) references corresponding to the non-empty cells in the grid. The transforms are specified in local space.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_gridmap_method_get_navigation_map"></div>

[`RID`](class_rid.md) **get_navigation_map** ( ) const[^const]<div id="class_gridmap_method_get_navigation_map"></div>

Returns the [`RID`](class_rid.md) of the navigation map this GridMap node uses for its cell baked navigation meshes.

This function returns always the map set on the GridMap node and not the map on the NavigationServer. If the map is changed directly with the NavigationServer API the GridMap node will not be aware of the map change.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_gridmap_method_get_orthogonal_index_from_basis"></div>

[`int`](class_int.md) **get_orthogonal_index_from_basis** ( basis: [`Basis`](class_basis.md) ) const[^const]<div id="class_gridmap_method_get_orthogonal_index_from_basis"></div>

This function considers a discretization of rotations into 24 points on unit sphere, lying along the vectors (x,y,z) with each component being either -1, 0, or 1, and returns the index (in the range from 0 to 23) of the point best representing the orientation of the object. For further details, refer to the Godot source code.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_gridmap_method_get_used_cells"></div>

[Array](class_array.md) [`Vector3i`](class_vector3i.md) **get_used_cells** ( ) const[^const]<div id="class_gridmap_method_get_used_cells"></div>

Returns an array of [`Vector3`](class_vector3.md) with the non-empty cell coordinates in the grid map.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_gridmap_method_get_used_cells_by_item"></div>

[Array](class_array.md) [`Vector3i`](class_vector3i.md) **get_used_cells_by_item** ( item: [`int`](class_int.md) ) const[^const]<div id="class_gridmap_method_get_used_cells_by_item"></div>

Returns an array of all cells with the given item index specified in `item`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_gridmap_method_local_to_map"></div>

[`Vector3i`](class_vector3i.md) **local_to_map** ( local_position: [`Vector3`](class_vector3.md) ) const[^const]<div id="class_gridmap_method_local_to_map"></div>

Returns the map coordinates of the cell containing the given `local_position`. If `local_position` is in global coordinates, consider using [`Node3D.to_local`](#class_node3d_method_to_local) before passing it to this method. See also [`map_to_local`](#class_gridmap_method_map_to_local).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_gridmap_method_make_baked_meshes"></div>

`void` **make_baked_meshes** ( gen_lightmap_uv: [`bool`](class_bool.md) = false, lightmap_uv_texel_size: [`float`](class_float.md) = 0.1 )<div id="class_gridmap_method_make_baked_meshes"></div>

Bakes lightmap data for all meshes in the assigned [`MeshLibrary`](class_meshlibrary.md).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_gridmap_method_map_to_local"></div>

[`Vector3`](class_vector3.md) **map_to_local** ( map_position: [`Vector3i`](class_vector3i.md) ) const[^const]<div id="class_gridmap_method_map_to_local"></div>

Returns the position of a grid cell in the GridMap's local coordinate space. To convert the returned value into global coordinates, use [`Node3D.to_global`](#class_node3d_method_to_global). See also [`local_to_map`](#class_gridmap_method_local_to_map).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_gridmap_method_resource_changed"></div>

`void` **resource_changed** ( resource: [`Resource`](class_resource.md) )<div id="class_gridmap_method_resource_changed"></div>

**已弃用：** Use [`Resource.changed`](#class_resource_signal_changed) instead.

This method does nothing.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_gridmap_method_set_cell_item"></div>

`void` **set_cell_item** ( position: [`Vector3i`](class_vector3i.md), item: [`int`](class_int.md), orientation: [`int`](class_int.md) = 0 )<div id="class_gridmap_method_set_cell_item"></div>

Sets the mesh index for the cell referenced by its grid coordinates.

A negative item index such as [`INVALID_CELL_ITEM`](#class_gridmap_constant_invalid_cell_item) will clear the cell.

Optionally, the item's orientation can be passed. For valid orientation values, see [`get_orthogonal_index_from_basis`](#class_gridmap_method_get_orthogonal_index_from_basis).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_gridmap_method_set_collision_layer_value"></div>

`void` **set_collision_layer_value** ( layer_number: [`int`](class_int.md), value: [`bool`](class_bool.md) )<div id="class_gridmap_method_set_collision_layer_value"></div>

Based on `value`, enables or disables the specified layer in the [`collision_layer`](#class_gridmap_property_collision_layer), given a `layer_number` between 1 and 32.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_gridmap_method_set_collision_mask_value"></div>

`void` **set_collision_mask_value** ( layer_number: [`int`](class_int.md), value: [`bool`](class_bool.md) )<div id="class_gridmap_method_set_collision_mask_value"></div>

Based on `value`, enables or disables the specified layer in the [`collision_mask`](#class_gridmap_property_collision_mask), given a `layer_number` between 1 and 32.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_gridmap_method_set_navigation_map"></div>

`void` **set_navigation_map** ( navigation_map: [`RID`](class_rid.md) )<div id="class_gridmap_method_set_navigation_map"></div>

Sets the [`RID`](class_rid.md) of the navigation map this GridMap node should use for its cell baked navigation meshes.

[^virtual]: 本方法通常需要用户覆盖才能生效。
[^const]: 本方法无副作用，不会修改该实例的任何成员变量。
[^vararg]: 本方法除了能接受在此处描述的参数外，还能够继续接受任意数量的参数。
[^constructor]: 本方法用于构造某个类型。
[^static]: 调用本方法无需实例，可直接使用类名进行调用。
[^operator]: 本方法描述的是使用本类型作为左操作数的有效运算符。
[^bitfield]: 这个值是由下列位标志构成位掩码的整数。
[^void]: 无返回值。
