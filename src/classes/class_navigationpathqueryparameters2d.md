<!-- ⚠ 请勿编辑本文件 ⚠ -->
<!-- 本文档使用脚本从 WeDot 引擎源码仓库生成。 -->
<!-- 生成脚本：https://github.com/WeDot-Engine/WeDot/tree/4.3/doc/tools/make_md.py； -->
<!-- 原文件：https://github.com/WeDot-Engine/WeDot/tree/4.3/doc/classes/NavigationPathQueryParameters2D.xml。 -->

<div id="_class_navigationpathqueryparameters2d"></div>

# NavigationPathQueryParameters2D

**实验性：** This class may be changed or removed in future versions.

**继承：** [`RefCounted`](class_refcounted.md) **<** [`Object`](class_object.md)

Provides parameters for 2D navigation path queries.

## 描述

By changing various properties of this object, such as the start and target position, you can configure path queries to the [`NavigationServer2D`](class_navigationserver2d.md).

## 属性

| [`RID`](class_rid.md)                                                              | [`map`](#class_navigationpathqueryparameters2d_property_map)                                     | ``RID()``         |
| [PathMetadataFlags](#enum_navigationpathqueryparameters2d_pathmetadataflags)       | [`metadata_flags`](#class_navigationpathqueryparameters2d_property_metadata_flags)               | ``7``             |
| [`int`](class_int.md)                                                              | [`navigation_layers`](#class_navigationpathqueryparameters2d_property_navigation_layers)         | ``1``             |
| [PathPostProcessing](#enum_navigationpathqueryparameters2d_pathpostprocessing)     | [`path_postprocessing`](#class_navigationpathqueryparameters2d_property_path_postprocessing)     | ``0``             |
| [PathfindingAlgorithm](#enum_navigationpathqueryparameters2d_pathfindingalgorithm) | [`pathfinding_algorithm`](#class_navigationpathqueryparameters2d_property_pathfinding_algorithm) | ``0``             |
| [`float`](class_float.md)                                                          | [`simplify_epsilon`](#class_navigationpathqueryparameters2d_property_simplify_epsilon)           | ``0.0``           |
| [`bool`](class_bool.md)                                                            | [`simplify_path`](#class_navigationpathqueryparameters2d_property_simplify_path)                 | ``false``         |
| [`Vector2`](class_vector2.md)                                                      | [`start_position`](#class_navigationpathqueryparameters2d_property_start_position)               | ``Vector2(0, 0)`` |
| [`Vector2`](class_vector2.md)                                                      | [`target_position`](#class_navigationpathqueryparameters2d_property_target_position)             | ``Vector2(0, 0)`` |

<!-- rst-class:: classref-section-separator -->

---

## 枚举

<div id="_class_enum_navigationpathqueryparameters2d_pathfindingalgorithm"></div>

enum **PathfindingAlgorithm**: <div id="enum_navigationpathqueryparameters2d_pathfindingalgorithm"></div>

<div id="_class_navigationpathqueryparameters2d_constant_pathfinding_algorithm_astar"></div>

[PathfindingAlgorithm](#enum_navigationpathqueryparameters2d_pathfindingalgorithm) **PATHFINDING_ALGORITHM_ASTAR** = ``0``

The path query uses the default A\* pathfinding algorithm.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_enum_navigationpathqueryparameters2d_pathpostprocessing"></div>

enum **PathPostProcessing**: <div id="enum_navigationpathqueryparameters2d_pathpostprocessing"></div>

<div id="_class_navigationpathqueryparameters2d_constant_path_postprocessing_corridorfunnel"></div>

[PathPostProcessing](#enum_navigationpathqueryparameters2d_pathpostprocessing) **PATH_POSTPROCESSING_CORRIDORFUNNEL** = ``0``

Applies a funnel algorithm to the raw path corridor found by the pathfinding algorithm. This will result in the shortest path possible inside the path corridor. This postprocessing very much depends on the navigation mesh polygon layout and the created corridor. Especially tile- or gridbased layouts can face artificial corners with diagonal movement due to a jagged path corridor imposed by the cell shapes.

<div id="_class_navigationpathqueryparameters2d_constant_path_postprocessing_edgecentered"></div>

[PathPostProcessing](#enum_navigationpathqueryparameters2d_pathpostprocessing) **PATH_POSTPROCESSING_EDGECENTERED** = ``1``

Centers every path position in the middle of the traveled navigation mesh polygon edge. This creates better paths for tile- or gridbased layouts that restrict the movement to the cells center.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_enum_navigationpathqueryparameters2d_pathmetadataflags"></div>

flags **PathMetadataFlags**: <div id="enum_navigationpathqueryparameters2d_pathmetadataflags"></div>

<div id="_class_navigationpathqueryparameters2d_constant_path_metadata_include_none"></div>

[PathMetadataFlags](#enum_navigationpathqueryparameters2d_pathmetadataflags) **PATH_METADATA_INCLUDE_NONE** = ``0``

Don't include any additional metadata about the returned path.

<div id="_class_navigationpathqueryparameters2d_constant_path_metadata_include_types"></div>

[PathMetadataFlags](#enum_navigationpathqueryparameters2d_pathmetadataflags) **PATH_METADATA_INCLUDE_TYPES** = ``1``

Include the type of navigation primitive (region or link) that each point of the path goes through.

<div id="_class_navigationpathqueryparameters2d_constant_path_metadata_include_rids"></div>

[PathMetadataFlags](#enum_navigationpathqueryparameters2d_pathmetadataflags) **PATH_METADATA_INCLUDE_RIDS** = ``2``

Include the [`RID`](class_rid.md) s of the regions and links that each point of the path goes through.

<div id="_class_navigationpathqueryparameters2d_constant_path_metadata_include_owners"></div>

[PathMetadataFlags](#enum_navigationpathqueryparameters2d_pathmetadataflags) **PATH_METADATA_INCLUDE_OWNERS** = ``4``

Include the `ObjectID` s of the [`Object`](class_object.md) s which manage the regions and links each point of the path goes through.

<div id="_class_navigationpathqueryparameters2d_constant_path_metadata_include_all"></div>

[PathMetadataFlags](#enum_navigationpathqueryparameters2d_pathmetadataflags) **PATH_METADATA_INCLUDE_ALL** = ``7``

Include all available metadata about the returned path.

<!-- rst-class:: classref-section-separator -->

---

## 属性说明

<div id="_class_navigationpathqueryparameters2d_property_map"></div>

[`RID`](class_rid.md) **map** = ``RID()`` <div id="class_navigationpathqueryparameters2d_property_map"></div>

- `void` **set_map** ( value: [`RID`](class_rid.md) )
- [`RID`](class_rid.md) **get_map** ( )

The navigation map [`RID`](class_rid.md) used in the path query.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_navigationpathqueryparameters2d_property_metadata_flags"></div>

[PathMetadataFlags](#enum_navigationpathqueryparameters2d_pathmetadataflags) **metadata_flags** = ``7`` <div id="class_navigationpathqueryparameters2d_property_metadata_flags"></div>

- `void` **set_metadata_flags** ( value: [PathMetadataFlags](#enum_navigationpathqueryparameters2d_pathmetadataflags) )
- [PathMetadataFlags](#enum_navigationpathqueryparameters2d_pathmetadataflags) **get_metadata_flags** ( )

Additional information to include with the navigation path.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_navigationpathqueryparameters2d_property_navigation_layers"></div>

[`int`](class_int.md) **navigation_layers** = ``1`` <div id="class_navigationpathqueryparameters2d_property_navigation_layers"></div>

- `void` **set_navigation_layers** ( value: [`int`](class_int.md) )
- [`int`](class_int.md) **get_navigation_layers** ( )

The navigation layers the query will use (as a bitmask).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_navigationpathqueryparameters2d_property_path_postprocessing"></div>

[PathPostProcessing](#enum_navigationpathqueryparameters2d_pathpostprocessing) **path_postprocessing** = ``0`` <div id="class_navigationpathqueryparameters2d_property_path_postprocessing"></div>

- `void` **set_path_postprocessing** ( value: [PathPostProcessing](#enum_navigationpathqueryparameters2d_pathpostprocessing) )
- [PathPostProcessing](#enum_navigationpathqueryparameters2d_pathpostprocessing) **get_path_postprocessing** ( )

The path postprocessing applied to the raw path corridor found by the [`pathfinding_algorithm`](#class_navigationpathqueryparameters2d_property_pathfinding_algorithm).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_navigationpathqueryparameters2d_property_pathfinding_algorithm"></div>

[PathfindingAlgorithm](#enum_navigationpathqueryparameters2d_pathfindingalgorithm) **pathfinding_algorithm** = ``0`` <div id="class_navigationpathqueryparameters2d_property_pathfinding_algorithm"></div>

- `void` **set_pathfinding_algorithm** ( value: [PathfindingAlgorithm](#enum_navigationpathqueryparameters2d_pathfindingalgorithm) )
- [PathfindingAlgorithm](#enum_navigationpathqueryparameters2d_pathfindingalgorithm) **get_pathfinding_algorithm** ( )

The pathfinding algorithm used in the path query.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_navigationpathqueryparameters2d_property_simplify_epsilon"></div>

[`float`](class_float.md) **simplify_epsilon** = ``0.0`` <div id="class_navigationpathqueryparameters2d_property_simplify_epsilon"></div>

- `void` **set_simplify_epsilon** ( value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_simplify_epsilon** ( )

The path simplification amount in worlds units.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_navigationpathqueryparameters2d_property_simplify_path"></div>

[`bool`](class_bool.md) **simplify_path** = ``false`` <div id="class_navigationpathqueryparameters2d_property_simplify_path"></div>

- `void` **set_simplify_path** ( value: [`bool`](class_bool.md) )
- [`bool`](class_bool.md) **get_simplify_path** ( )

If `true` a simplified version of the path will be returned with less critical path points removed. The simplification amount is controlled by [`simplify_epsilon`](#class_navigationpathqueryparameters2d_property_simplify_epsilon). The simplification uses a variant of Ramer-Douglas-Peucker algorithm for curve point decimation.

Path simplification can be helpful to mitigate various path following issues that can arise with certain agent types and script behaviors. E.g. "steering" agents or avoidance in "open fields".

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_navigationpathqueryparameters2d_property_start_position"></div>

[`Vector2`](class_vector2.md) **start_position** = ``Vector2(0, 0)`` <div id="class_navigationpathqueryparameters2d_property_start_position"></div>

- `void` **set_start_position** ( value: [`Vector2`](class_vector2.md) )
- [`Vector2`](class_vector2.md) **get_start_position** ( )

The pathfinding start position in global coordinates.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_navigationpathqueryparameters2d_property_target_position"></div>

[`Vector2`](class_vector2.md) **target_position** = ``Vector2(0, 0)`` <div id="class_navigationpathqueryparameters2d_property_target_position"></div>

- `void` **set_target_position** ( value: [`Vector2`](class_vector2.md) )
- [`Vector2`](class_vector2.md) **get_target_position** ( )

The pathfinding target position in global coordinates.

[^virtual]: 本方法通常需要用户覆盖才能生效。
[^const]: 本方法无副作用，不会修改该实例的任何成员变量。
[^vararg]: 本方法除了能接受在此处描述的参数外，还能够继续接受任意数量的参数。
[^constructor]: 本方法用于构造某个类型。
[^static]: 调用本方法无需实例，可直接使用类名进行调用。
[^operator]: 本方法描述的是使用本类型作为左操作数的有效运算符。
[^bitfield]: 这个值是由下列位标志构成位掩码的整数。
[^void]: 无返回值。
