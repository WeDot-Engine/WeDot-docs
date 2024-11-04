<!-- ⚠ 请勿编辑本文件 ⚠ -->
<!-- 本文档使用脚本从 WeDot 引擎源码仓库生成。 -->
<!-- 生成脚本：https://github.com/WeDot-Engine/WeDot/tree/4.3/doc/tools/make_md.py； -->
<!-- 原文件：https://github.com/WeDot-Engine/WeDot/tree/4.3/doc/classes/AStarGrid2D.xml。 -->

<div id="_class_astargrid2d"></div>

# AStarGrid2D

**继承：** [`RefCounted`](class_refcounted.md) **<** [`Object`](class_object.md)

An implementation of A\* for finding the shortest path between two points on a partial 2D grid.

## 描述

**AStarGrid2D** is a variant of [`AStar2D`](class_astar2d.md) that is specialized for partial 2D grids. It is simpler to use because it doesn't require you to manually create points and connect them together. This class also supports multiple types of heuristics, modes for diagonal movement, and a jumping mode to speed up calculations.

To use **AStarGrid2D**, you only need to set the [`region`](#class_astargrid2d_property_region) of the grid, optionally set the [`cell_size`](#class_astargrid2d_property_cell_size), and then call the [`update`](#class_astargrid2d_method_update) method:



```gdscript

    var astar_grid = AStarGrid2D.new()
    astar_grid.region = Rect2i(0, 0, 32, 32)
    astar_grid.cell_size = Vector2(16, 16)
    astar_grid.update()
    print(astar_grid.get_id_path(Vector2i(0, 0), Vector2i(3, 4))) # prints (0, 0), (1, 1), (2, 2), (3, 3), (3, 4)
    print(astar_grid.get_point_path(Vector2i(0, 0), Vector2i(3, 4))) # prints (0, 0), (16, 16), (32, 32), (48, 48), (48, 64)
```

```csharp

    AStarGrid2D astarGrid = new AStarGrid2D();
    astarGrid.Region = new Rect2I(0, 0, 32, 32);
    astarGrid.CellSize = new Vector2I(16, 16);
    astarGrid.Update();
    GD.Print(astarGrid.GetIdPath(Vector2I.Zero, new Vector2I(3, 4))); // prints (0, 0), (1, 1), (2, 2), (3, 3), (3, 4)
    GD.Print(astarGrid.GetPointPath(Vector2I.Zero, new Vector2I(3, 4))); // prints (0, 0), (16, 16), (32, 32), (48, 48), (48, 64)
```



To remove a point from the pathfinding grid, it must be set as "solid" with [`set_point_solid`](#class_astargrid2d_method_set_point_solid).





## 属性

| [CellShape](#enum_astargrid2d_cellshape)       | [`cell_shape`](#class_astargrid2d_property_cell_shape)                                 | ``0``                  |
| [`Vector2`](class_vector2.md)                  | [`cell_size`](#class_astargrid2d_property_cell_size)                                   | ``Vector2(1, 1)``      |
| [Heuristic](#enum_astargrid2d_heuristic)       | [`default_compute_heuristic`](#class_astargrid2d_property_default_compute_heuristic)   | ``0``                  |
| [Heuristic](#enum_astargrid2d_heuristic)       | [`default_estimate_heuristic`](#class_astargrid2d_property_default_estimate_heuristic) | ``0``                  |
| [DiagonalMode](#enum_astargrid2d_diagonalmode) | [`diagonal_mode`](#class_astargrid2d_property_diagonal_mode)                           | ``0``                  |
| [`bool`](class_bool.md)                        | [`jumping_enabled`](#class_astargrid2d_property_jumping_enabled)                       | ``false``              |
| [`Vector2`](class_vector2.md)                  | [`offset`](#class_astargrid2d_property_offset)                                         | ``Vector2(0, 0)``      |
| [`Rect2i`](class_rect2i.md)                    | [`region`](#class_astargrid2d_property_region)                                         | ``Rect2i(0, 0, 0, 0)`` |
| [`Vector2i`](class_vector2i.md)                | [`size`](#class_astargrid2d_property_size)                                             | ``Vector2i(0, 0)``     |

## 方法

| [`float`](class_float.md)                               | [`_compute_cost`](#class_astargrid2d_private_method__compute_cost) ( from_id: [`Vector2i`](class_vector2i.md), to_id: [`Vector2i`](class_vector2i.md) ) virtual[^virtual] const[^const]                |
| [`float`](class_float.md)                               | [`_estimate_cost`](#class_astargrid2d_private_method__estimate_cost) ( from_id: [`Vector2i`](class_vector2i.md), to_id: [`Vector2i`](class_vector2i.md) ) virtual[^virtual] const[^const]              |
| `void`                                                  | [`clear`](#class_astargrid2d_method_clear) ( )                                                                                                                                                         |
| `void`                                                  | [`fill_solid_region`](#class_astargrid2d_method_fill_solid_region) ( region: [`Rect2i`](class_rect2i.md), solid: [`bool`](class_bool.md) = true )                                                      |
| `void`                                                  | [`fill_weight_scale_region`](#class_astargrid2d_method_fill_weight_scale_region) ( region: [`Rect2i`](class_rect2i.md), weight_scale: [`float`](class_float.md) )                                      |
| [Array](class_array.md) [`Vector2i`](class_vector2i.md) | [`get_id_path`](#class_astargrid2d_method_get_id_path) ( from_id: [`Vector2i`](class_vector2i.md), to_id: [`Vector2i`](class_vector2i.md), allow_partial_path: [`bool`](class_bool.md) = false )       |
| [`PackedVector2Array`](class_packedvector2array.md)     | [`get_point_path`](#class_astargrid2d_method_get_point_path) ( from_id: [`Vector2i`](class_vector2i.md), to_id: [`Vector2i`](class_vector2i.md), allow_partial_path: [`bool`](class_bool.md) = false ) |
| [`Vector2`](class_vector2.md)                           | [`get_point_position`](#class_astargrid2d_method_get_point_position) ( id: [`Vector2i`](class_vector2i.md) ) const[^const]                                                                             |
| [`float`](class_float.md)                               | [`get_point_weight_scale`](#class_astargrid2d_method_get_point_weight_scale) ( id: [`Vector2i`](class_vector2i.md) ) const[^const]                                                                     |
| [`bool`](class_bool.md)                                 | [`is_dirty`](#class_astargrid2d_method_is_dirty) ( ) const[^const]                                                                                                                                     |
| [`bool`](class_bool.md)                                 | [`is_in_bounds`](#class_astargrid2d_method_is_in_bounds) ( x: [`int`](class_int.md), y: [`int`](class_int.md) ) const[^const]                                                                          |
| [`bool`](class_bool.md)                                 | [`is_in_boundsv`](#class_astargrid2d_method_is_in_boundsv) ( id: [`Vector2i`](class_vector2i.md) ) const[^const]                                                                                       |
| [`bool`](class_bool.md)                                 | [`is_point_solid`](#class_astargrid2d_method_is_point_solid) ( id: [`Vector2i`](class_vector2i.md) ) const[^const]                                                                                     |
| `void`                                                  | [`set_point_solid`](#class_astargrid2d_method_set_point_solid) ( id: [`Vector2i`](class_vector2i.md), solid: [`bool`](class_bool.md) = true )                                                          |
| `void`                                                  | [`set_point_weight_scale`](#class_astargrid2d_method_set_point_weight_scale) ( id: [`Vector2i`](class_vector2i.md), weight_scale: [`float`](class_float.md) )                                          |
| `void`                                                  | [`update`](#class_astargrid2d_method_update) ( )                                                                                                                                                       |

<!-- rst-class:: classref-section-separator -->

---

## 枚举

<div id="_class_enum_astargrid2d_heuristic"></div>

enum **Heuristic**: <div id="enum_astargrid2d_heuristic"></div>

<div id="_class_astargrid2d_constant_heuristic_euclidean"></div>

[Heuristic](#enum_astargrid2d_heuristic) **HEURISTIC_EUCLIDEAN** = ``0``

The [*Euclidean heuristic*](https://en.wikipedia.org/wiki/Euclidean_distance) to be used for the pathfinding using the following formula:

```

    dx = abs(to_id.x - from_id.x)
    dy = abs(to_id.y - from_id.y)
    result = sqrt(dx * dx + dy * dy)
```

 **Note:** This is also the internal heuristic used in [`AStar3D`](class_astar3d.md) and [`AStar2D`](class_astar2d.md) by default (with the inclusion of possible z-axis coordinate).



<div id="_class_astargrid2d_constant_heuristic_manhattan"></div>

[Heuristic](#enum_astargrid2d_heuristic) **HEURISTIC_MANHATTAN** = ``1``

The [*Manhattan heuristic*](https://en.wikipedia.org/wiki/Taxicab_geometry) to be used for the pathfinding using the following formula:

```

    dx = abs(to_id.x - from_id.x)
    dy = abs(to_id.y - from_id.y)
    result = dx + dy
```

 **Note:** This heuristic is intended to be used with 4-side orthogonal movements, provided by setting the [`diagonal_mode`](#class_astargrid2d_property_diagonal_mode) to [`DIAGONAL_MODE_NEVER`](#class_astargrid2d_constant_diagonal_mode_never).



<div id="_class_astargrid2d_constant_heuristic_octile"></div>

[Heuristic](#enum_astargrid2d_heuristic) **HEURISTIC_OCTILE** = ``2``

The Octile heuristic to be used for the pathfinding using the following formula:

```

    dx = abs(to_id.x - from_id.x)
    dy = abs(to_id.y - from_id.y)
    f = sqrt(2) - 1
    result = (dx < dy) ? f * dx + dy : f * dy + dx;
```



<div id="_class_astargrid2d_constant_heuristic_chebyshev"></div>

[Heuristic](#enum_astargrid2d_heuristic) **HEURISTIC_CHEBYSHEV** = ``3``

The [*Chebyshev heuristic*](https://en.wikipedia.org/wiki/Chebyshev_distance) to be used for the pathfinding using the following formula:

```

    dx = abs(to_id.x - from_id.x)
    dy = abs(to_id.y - from_id.y)
    result = max(dx, dy)
```



<div id="_class_astargrid2d_constant_heuristic_max"></div>

[Heuristic](#enum_astargrid2d_heuristic) **HEURISTIC_MAX** = ``4``

Represents the size of the [Heuristic](#enum_astargrid2d_heuristic) enum.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_enum_astargrid2d_diagonalmode"></div>

enum **DiagonalMode**: <div id="enum_astargrid2d_diagonalmode"></div>

<div id="_class_astargrid2d_constant_diagonal_mode_always"></div>

[DiagonalMode](#enum_astargrid2d_diagonalmode) **DIAGONAL_MODE_ALWAYS** = ``0``

The pathfinding algorithm will ignore solid neighbors around the target cell and allow passing using diagonals.

<div id="_class_astargrid2d_constant_diagonal_mode_never"></div>

[DiagonalMode](#enum_astargrid2d_diagonalmode) **DIAGONAL_MODE_NEVER** = ``1``

The pathfinding algorithm will ignore all diagonals and the way will be always orthogonal.

<div id="_class_astargrid2d_constant_diagonal_mode_at_least_one_walkable"></div>

[DiagonalMode](#enum_astargrid2d_diagonalmode) **DIAGONAL_MODE_AT_LEAST_ONE_WALKABLE** = ``2``

The pathfinding algorithm will avoid using diagonals if at least two obstacles have been placed around the neighboring cells of the specific path segment.

<div id="_class_astargrid2d_constant_diagonal_mode_only_if_no_obstacles"></div>

[DiagonalMode](#enum_astargrid2d_diagonalmode) **DIAGONAL_MODE_ONLY_IF_NO_OBSTACLES** = ``3``

The pathfinding algorithm will avoid using diagonals if any obstacle has been placed around the neighboring cells of the specific path segment.

<div id="_class_astargrid2d_constant_diagonal_mode_max"></div>

[DiagonalMode](#enum_astargrid2d_diagonalmode) **DIAGONAL_MODE_MAX** = ``4``

Represents the size of the [DiagonalMode](#enum_astargrid2d_diagonalmode) enum.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_enum_astargrid2d_cellshape"></div>

enum **CellShape**: <div id="enum_astargrid2d_cellshape"></div>

<div id="_class_astargrid2d_constant_cell_shape_square"></div>

[CellShape](#enum_astargrid2d_cellshape) **CELL_SHAPE_SQUARE** = ``0``

Rectangular cell shape.

<div id="_class_astargrid2d_constant_cell_shape_isometric_right"></div>

[CellShape](#enum_astargrid2d_cellshape) **CELL_SHAPE_ISOMETRIC_RIGHT** = ``1``

Diamond cell shape (for isometric look). Cell coordinates layout where the horizontal axis goes up-right, and the vertical one goes down-right.

<div id="_class_astargrid2d_constant_cell_shape_isometric_down"></div>

[CellShape](#enum_astargrid2d_cellshape) **CELL_SHAPE_ISOMETRIC_DOWN** = ``2``

Diamond cell shape (for isometric look). Cell coordinates layout where the horizontal axis goes down-right, and the vertical one goes down-left.

<div id="_class_astargrid2d_constant_cell_shape_max"></div>

[CellShape](#enum_astargrid2d_cellshape) **CELL_SHAPE_MAX** = ``3``

Represents the size of the [CellShape](#enum_astargrid2d_cellshape) enum.

<!-- rst-class:: classref-section-separator -->

---

## 属性说明

<div id="_class_astargrid2d_property_cell_shape"></div>

[CellShape](#enum_astargrid2d_cellshape) **cell_shape** = ``0`` <div id="class_astargrid2d_property_cell_shape"></div>

- `void` **set_cell_shape** ( value: [CellShape](#enum_astargrid2d_cellshape) )
- [CellShape](#enum_astargrid2d_cellshape) **get_cell_shape** ( )

The cell shape. Affects how the positions are placed in the grid. If changed, [`update`](#class_astargrid2d_method_update) needs to be called before finding the next path.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_astargrid2d_property_cell_size"></div>

[`Vector2`](class_vector2.md) **cell_size** = ``Vector2(1, 1)`` <div id="class_astargrid2d_property_cell_size"></div>

- `void` **set_cell_size** ( value: [`Vector2`](class_vector2.md) )
- [`Vector2`](class_vector2.md) **get_cell_size** ( )

The size of the point cell which will be applied to calculate the resulting point position returned by [`get_point_path`](#class_astargrid2d_method_get_point_path). If changed, [`update`](#class_astargrid2d_method_update) needs to be called before finding the next path.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_astargrid2d_property_default_compute_heuristic"></div>

[Heuristic](#enum_astargrid2d_heuristic) **default_compute_heuristic** = ``0`` <div id="class_astargrid2d_property_default_compute_heuristic"></div>

- `void` **set_default_compute_heuristic** ( value: [Heuristic](#enum_astargrid2d_heuristic) )
- [Heuristic](#enum_astargrid2d_heuristic) **get_default_compute_heuristic** ( )

The default [Heuristic](#enum_astargrid2d_heuristic) which will be used to calculate the cost between two points if [`_compute_cost`](#class_astargrid2d_private_method__compute_cost) was not overridden.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_astargrid2d_property_default_estimate_heuristic"></div>

[Heuristic](#enum_astargrid2d_heuristic) **default_estimate_heuristic** = ``0`` <div id="class_astargrid2d_property_default_estimate_heuristic"></div>

- `void` **set_default_estimate_heuristic** ( value: [Heuristic](#enum_astargrid2d_heuristic) )
- [Heuristic](#enum_astargrid2d_heuristic) **get_default_estimate_heuristic** ( )

The default [Heuristic](#enum_astargrid2d_heuristic) which will be used to calculate the cost between the point and the end point if [`_estimate_cost`](#class_astargrid2d_private_method__estimate_cost) was not overridden.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_astargrid2d_property_diagonal_mode"></div>

[DiagonalMode](#enum_astargrid2d_diagonalmode) **diagonal_mode** = ``0`` <div id="class_astargrid2d_property_diagonal_mode"></div>

- `void` **set_diagonal_mode** ( value: [DiagonalMode](#enum_astargrid2d_diagonalmode) )
- [DiagonalMode](#enum_astargrid2d_diagonalmode) **get_diagonal_mode** ( )

A specific [DiagonalMode](#enum_astargrid2d_diagonalmode) mode which will force the path to avoid or accept the specified diagonals.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_astargrid2d_property_jumping_enabled"></div>

[`bool`](class_bool.md) **jumping_enabled** = ``false`` <div id="class_astargrid2d_property_jumping_enabled"></div>

- `void` **set_jumping_enabled** ( value: [`bool`](class_bool.md) )
- [`bool`](class_bool.md) **is_jumping_enabled** ( )

Enables or disables jumping to skip up the intermediate points and speeds up the searching algorithm.

 **Note:** Currently, toggling it on disables the consideration of weight scaling in pathfinding.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_astargrid2d_property_offset"></div>

[`Vector2`](class_vector2.md) **offset** = ``Vector2(0, 0)`` <div id="class_astargrid2d_property_offset"></div>

- `void` **set_offset** ( value: [`Vector2`](class_vector2.md) )
- [`Vector2`](class_vector2.md) **get_offset** ( )

The offset of the grid which will be applied to calculate the resulting point position returned by [`get_point_path`](#class_astargrid2d_method_get_point_path). If changed, [`update`](#class_astargrid2d_method_update) needs to be called before finding the next path.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_astargrid2d_property_region"></div>

[`Rect2i`](class_rect2i.md) **region** = ``Rect2i(0, 0, 0, 0)`` <div id="class_astargrid2d_property_region"></div>

- `void` **set_region** ( value: [`Rect2i`](class_rect2i.md) )
- [`Rect2i`](class_rect2i.md) **get_region** ( )

The region of grid cells available for pathfinding. If changed, [`update`](#class_astargrid2d_method_update) needs to be called before finding the next path.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_astargrid2d_property_size"></div>

[`Vector2i`](class_vector2i.md) **size** = ``Vector2i(0, 0)`` <div id="class_astargrid2d_property_size"></div>

- `void` **set_size** ( value: [`Vector2i`](class_vector2i.md) )
- [`Vector2i`](class_vector2i.md) **get_size** ( )

**已弃用：** Use [`region`](#class_astargrid2d_property_region) instead.

The size of the grid (number of cells of size [`cell_size`](#class_astargrid2d_property_cell_size) on each axis). If changed, [`update`](#class_astargrid2d_method_update) needs to be called before finding the next path.

<!-- rst-class:: classref-section-separator -->

---

## 方法说明

<div id="_class_astargrid2d_private_method__compute_cost"></div>

[`float`](class_float.md) **_compute_cost** ( from_id: [`Vector2i`](class_vector2i.md), to_id: [`Vector2i`](class_vector2i.md) ) virtual[^virtual] const[^const]<div id="class_astargrid2d_private_method__compute_cost"></div>

Called when computing the cost between two connected points.

Note that this function is hidden in the default **AStarGrid2D** class.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_astargrid2d_private_method__estimate_cost"></div>

[`float`](class_float.md) **_estimate_cost** ( from_id: [`Vector2i`](class_vector2i.md), to_id: [`Vector2i`](class_vector2i.md) ) virtual[^virtual] const[^const]<div id="class_astargrid2d_private_method__estimate_cost"></div>

Called when estimating the cost between a point and the path's ending point.

Note that this function is hidden in the default **AStarGrid2D** class.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_astargrid2d_method_clear"></div>

`void` **clear** ( )<div id="class_astargrid2d_method_clear"></div>

Clears the grid and sets the [`region`](#class_astargrid2d_property_region) to `Rect2i(0, 0, 0, 0)`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_astargrid2d_method_fill_solid_region"></div>

`void` **fill_solid_region** ( region: [`Rect2i`](class_rect2i.md), solid: [`bool`](class_bool.md) = true )<div id="class_astargrid2d_method_fill_solid_region"></div>

Fills the given `region` on the grid with the specified value for the solid flag.

 **Note:** Calling [`update`](#class_astargrid2d_method_update) is not needed after the call of this function.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_astargrid2d_method_fill_weight_scale_region"></div>

`void` **fill_weight_scale_region** ( region: [`Rect2i`](class_rect2i.md), weight_scale: [`float`](class_float.md) )<div id="class_astargrid2d_method_fill_weight_scale_region"></div>

Fills the given `region` on the grid with the specified value for the weight scale.

 **Note:** Calling [`update`](#class_astargrid2d_method_update) is not needed after the call of this function.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_astargrid2d_method_get_id_path"></div>

[Array](class_array.md) [`Vector2i`](class_vector2i.md) **get_id_path** ( from_id: [`Vector2i`](class_vector2i.md), to_id: [`Vector2i`](class_vector2i.md), allow_partial_path: [`bool`](class_bool.md) = false )<div id="class_astargrid2d_method_get_id_path"></div>

Returns an array with the IDs of the points that form the path found by AStar2D between the given points. The array is ordered from the starting point to the ending point of the path.

If there is no valid path to the target, and `allow_partial_path` is `true`, returns a path to the point closest to the target that can be reached.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_astargrid2d_method_get_point_path"></div>

[`PackedVector2Array`](class_packedvector2array.md) **get_point_path** ( from_id: [`Vector2i`](class_vector2i.md), to_id: [`Vector2i`](class_vector2i.md), allow_partial_path: [`bool`](class_bool.md) = false )<div id="class_astargrid2d_method_get_point_path"></div>

Returns an array with the points that are in the path found by **AStarGrid2D** between the given points. The array is ordered from the starting point to the ending point of the path.

If there is no valid path to the target, and `allow_partial_path` is `true`, returns a path to the point closest to the target that can be reached.

 **Note:** This method is not thread-safe. If called from a [`Thread`](class_thread.md), it will return an empty array and will print an error message.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_astargrid2d_method_get_point_position"></div>

[`Vector2`](class_vector2.md) **get_point_position** ( id: [`Vector2i`](class_vector2i.md) ) const[^const]<div id="class_astargrid2d_method_get_point_position"></div>

Returns the position of the point associated with the given `id`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_astargrid2d_method_get_point_weight_scale"></div>

[`float`](class_float.md) **get_point_weight_scale** ( id: [`Vector2i`](class_vector2i.md) ) const[^const]<div id="class_astargrid2d_method_get_point_weight_scale"></div>

Returns the weight scale of the point associated with the given `id`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_astargrid2d_method_is_dirty"></div>

[`bool`](class_bool.md) **is_dirty** ( ) const[^const]<div id="class_astargrid2d_method_is_dirty"></div>

Indicates that the grid parameters were changed and [`update`](#class_astargrid2d_method_update) needs to be called.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_astargrid2d_method_is_in_bounds"></div>

[`bool`](class_bool.md) **is_in_bounds** ( x: [`int`](class_int.md), y: [`int`](class_int.md) ) const[^const]<div id="class_astargrid2d_method_is_in_bounds"></div>

Returns `true` if the `x` and `y` is a valid grid coordinate (id), i.e. if it is inside [`region`](#class_astargrid2d_property_region). Equivalent to `region.has_point(Vector2i(x, y))`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_astargrid2d_method_is_in_boundsv"></div>

[`bool`](class_bool.md) **is_in_boundsv** ( id: [`Vector2i`](class_vector2i.md) ) const[^const]<div id="class_astargrid2d_method_is_in_boundsv"></div>

Returns `true` if the `id` vector is a valid grid coordinate, i.e. if it is inside [`region`](#class_astargrid2d_property_region). Equivalent to `region.has_point(id)`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_astargrid2d_method_is_point_solid"></div>

[`bool`](class_bool.md) **is_point_solid** ( id: [`Vector2i`](class_vector2i.md) ) const[^const]<div id="class_astargrid2d_method_is_point_solid"></div>

Returns `true` if a point is disabled for pathfinding. By default, all points are enabled.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_astargrid2d_method_set_point_solid"></div>

`void` **set_point_solid** ( id: [`Vector2i`](class_vector2i.md), solid: [`bool`](class_bool.md) = true )<div id="class_astargrid2d_method_set_point_solid"></div>

Disables or enables the specified point for pathfinding. Useful for making an obstacle. By default, all points are enabled.

 **Note:** Calling [`update`](#class_astargrid2d_method_update) is not needed after the call of this function.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_astargrid2d_method_set_point_weight_scale"></div>

`void` **set_point_weight_scale** ( id: [`Vector2i`](class_vector2i.md), weight_scale: [`float`](class_float.md) )<div id="class_astargrid2d_method_set_point_weight_scale"></div>

Sets the `weight_scale` for the point with the given `id`. The `weight_scale` is multiplied by the result of [`_compute_cost`](#class_astargrid2d_private_method__compute_cost) when determining the overall cost of traveling across a segment from a neighboring point to this point.

 **Note:** Calling [`update`](#class_astargrid2d_method_update) is not needed after the call of this function.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_astargrid2d_method_update"></div>

`void` **update** ( )<div id="class_astargrid2d_method_update"></div>

Updates the internal state of the grid according to the parameters to prepare it to search the path. Needs to be called if parameters like [`region`](#class_astargrid2d_property_region), [`cell_size`](#class_astargrid2d_property_cell_size) or [`offset`](#class_astargrid2d_property_offset) are changed. [`is_dirty`](#class_astargrid2d_method_is_dirty) will return `true` if this is the case and this needs to be called.

 **Note:** All point data (solidity and weight scale) will be cleared.

[^virtual]: 本方法通常需要用户覆盖才能生效。
[^const]: 本方法无副作用，不会修改该实例的任何成员变量。
[^vararg]: 本方法除了能接受在此处描述的参数外，还能够继续接受任意数量的参数。
[^constructor]: 本方法用于构造某个类型。
[^static]: 调用本方法无需实例，可直接使用类名进行调用。
[^operator]: 本方法描述的是使用本类型作为左操作数的有效运算符。
[^bitfield]: 这个值是由下列位标志构成位掩码的整数。
[^void]: 无返回值。
