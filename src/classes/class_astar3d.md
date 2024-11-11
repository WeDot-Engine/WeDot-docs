<!-- ⚠ 请勿编辑本文件 ⚠ -->
<!-- 本文档使用脚本从 WeDot 引擎源码仓库生成。 -->
<!-- 生成脚本：https://github.com/WeDot-Engine/WeDot/tree/master/doc/tools/make_md.py； -->
<!-- 原文件：https://github.com/WeDot-Engine/WeDot/tree/master/doc/classes/AStar3D.xml。 -->

<div id="_class_astar3d"></div>

# AStar3D

**继承：** [`RefCounted`](class_refcounted.md) **<** [`Object`](class_object.md)

An implementation of A\* for finding the shortest path between two vertices on a connected graph in 3D space.

## 描述

A\* (A star) is a computer algorithm used in pathfinding and graph traversal, the process of plotting short paths among vertices (points), passing through a given set of edges (segments). It enjoys widespread use due to its performance and accuracy. Godot's A\* implementation uses points in 3D space and Euclidean distances by default.

You must add points manually with [`add_point`](class_astar3d.md#class_astar3d_method_add_point) and create segments manually with [`connect_points`](class_astar3d.md#class_astar3d_method_connect_points). Once done, you can test if there is a path between two points with the [`are_points_connected`](class_astar3d.md#class_astar3d_method_are_points_connected) function, get a path containing indices by [`get_id_path`](class_astar3d.md#class_astar3d_method_get_id_path), or one containing actual coordinates with [`get_point_path`](class_astar3d.md#class_astar3d_method_get_point_path).

It is also possible to use non-Euclidean distances. To do so, create a class that extends **AStar3D** and override methods [`_compute_cost`](class_astar3d.md#class_astar3d_private_method__compute_cost) and [`_estimate_cost`](class_astar3d.md#class_astar3d_private_method__estimate_cost). Both take two indices and return a length, as is shown in the following example.



```gdscript

    class MyAStar:
        extends AStar3D
    
        func _compute_cost(u, v):
            return abs(u - v)
    
        func _estimate_cost(u, v):
            return min(0, abs(u - v) - 1)
```

```csharp

    public partial class MyAStar : AStar3D
    {
        public override float _ComputeCost(long fromId, long toId)
        {
            return Mathf.Abs((int)(fromId - toId));
        }
    
        public override float _EstimateCost(long fromId, long toId)
        {
            return Mathf.Min(0, Mathf.Abs((int)(fromId - toId)) - 1);
        }
    }
```



 [`_estimate_cost`](class_astar3d.md#class_astar3d_private_method__estimate_cost) should return a lower bound of the distance, i.e. `_estimate_cost(u, v) <= _compute_cost(u, v)`. This serves as a hint to the algorithm because the custom [`_compute_cost`](class_astar3d.md#class_astar3d_private_method__compute_cost) might be computation-heavy. If this is not the case, make [`_estimate_cost`](class_astar3d.md#class_astar3d_private_method__estimate_cost) return the same value as [`_compute_cost`](class_astar3d.md#class_astar3d_private_method__compute_cost) to provide the algorithm with the most accurate information.

If the default [`_estimate_cost`](class_astar3d.md#class_astar3d_private_method__estimate_cost) and [`_compute_cost`](class_astar3d.md#class_astar3d_private_method__compute_cost) methods are used, or if the supplied [`_estimate_cost`](class_astar3d.md#class_astar3d_private_method__estimate_cost) method returns a lower bound of the cost, then the paths returned by A* will be the lowest-cost paths. Here, the cost of a path equals the sum of the [`_compute_cost`](class_astar3d.md#class_astar3d_private_method__compute_cost) results of all segments in the path multiplied by the `weight_scale` s of the endpoints of the respective segments. If the default methods are used and the `weight_scale` s of all points are set to `1.0`, then this equals the sum of Euclidean distances of all segments in the path.





## 方法

|||
|:-:|:--|
| [`float`](class_float.md)                           | [`_compute_cost`](class_astar3d.md#class_astar3d_private_method__compute_cost) ( from_id: [`int`](class_int.md), to_id: [`int`](class_int.md) ) virtual[^virtual] const[^const]                               |
| [`float`](class_float.md)                           | [`_estimate_cost`](class_astar3d.md#class_astar3d_private_method__estimate_cost) ( from_id: [`int`](class_int.md), end_id: [`int`](class_int.md) ) virtual[^virtual] const[^const]                            |
| `void`                                              | [`add_point`](class_astar3d.md#class_astar3d_method_add_point) ( id: [`int`](class_int.md), position: [`Vector3`](class_vector3.md), weight_scale: [`float`](class_float.md) = 1.0 )                          |
| [`bool`](class_bool.md)                             | [`are_points_connected`](class_astar3d.md#class_astar3d_method_are_points_connected) ( id: [`int`](class_int.md), to_id: [`int`](class_int.md), bidirectional: [`bool`](class_bool.md) = true ) const[^const] |
| `void`                                              | [`clear`](class_astar3d.md#class_astar3d_method_clear) ( )                                                                                                                                                    |
| `void`                                              | [`connect_points`](class_astar3d.md#class_astar3d_method_connect_points) ( id: [`int`](class_int.md), to_id: [`int`](class_int.md), bidirectional: [`bool`](class_bool.md) = true )                           |
| `void`                                              | [`disconnect_points`](class_astar3d.md#class_astar3d_method_disconnect_points) ( id: [`int`](class_int.md), to_id: [`int`](class_int.md), bidirectional: [`bool`](class_bool.md) = true )                     |
| [`int`](class_int.md)                               | [`get_available_point_id`](class_astar3d.md#class_astar3d_method_get_available_point_id) ( ) const[^const]                                                                                                    |
| [`int`](class_int.md)                               | [`get_closest_point`](class_astar3d.md#class_astar3d_method_get_closest_point) ( to_position: [`Vector3`](class_vector3.md), include_disabled: [`bool`](class_bool.md) = false ) const[^const]                |
| [`Vector3`](class_vector3.md)                       | [`get_closest_position_in_segment`](class_astar3d.md#class_astar3d_method_get_closest_position_in_segment) ( to_position: [`Vector3`](class_vector3.md) ) const[^const]                                       |
| [`PackedInt64Array`](class_packedint64array.md)     | [`get_id_path`](class_astar3d.md#class_astar3d_method_get_id_path) ( from_id: [`int`](class_int.md), to_id: [`int`](class_int.md), allow_partial_path: [`bool`](class_bool.md) = false )                      |
| [`int`](class_int.md)                               | [`get_point_capacity`](class_astar3d.md#class_astar3d_method_get_point_capacity) ( ) const[^const]                                                                                                            |
| [`PackedInt64Array`](class_packedint64array.md)     | [`get_point_connections`](class_astar3d.md#class_astar3d_method_get_point_connections) ( id: [`int`](class_int.md) )                                                                                          |
| [`int`](class_int.md)                               | [`get_point_count`](class_astar3d.md#class_astar3d_method_get_point_count) ( ) const[^const]                                                                                                                  |
| [`PackedInt64Array`](class_packedint64array.md)     | [`get_point_ids`](class_astar3d.md#class_astar3d_method_get_point_ids) ( )                                                                                                                                    |
| [`PackedVector3Array`](class_packedvector3array.md) | [`get_point_path`](class_astar3d.md#class_astar3d_method_get_point_path) ( from_id: [`int`](class_int.md), to_id: [`int`](class_int.md), allow_partial_path: [`bool`](class_bool.md) = false )                |
| [`Vector3`](class_vector3.md)                       | [`get_point_position`](class_astar3d.md#class_astar3d_method_get_point_position) ( id: [`int`](class_int.md) ) const[^const]                                                                                  |
| [`float`](class_float.md)                           | [`get_point_weight_scale`](class_astar3d.md#class_astar3d_method_get_point_weight_scale) ( id: [`int`](class_int.md) ) const[^const]                                                                          |
| [`bool`](class_bool.md)                             | [`has_point`](class_astar3d.md#class_astar3d_method_has_point) ( id: [`int`](class_int.md) ) const[^const]                                                                                                    |
| [`bool`](class_bool.md)                             | [`is_point_disabled`](class_astar3d.md#class_astar3d_method_is_point_disabled) ( id: [`int`](class_int.md) ) const[^const]                                                                                    |
| `void`                                              | [`remove_point`](class_astar3d.md#class_astar3d_method_remove_point) ( id: [`int`](class_int.md) )                                                                                                            |
| `void`                                              | [`reserve_space`](class_astar3d.md#class_astar3d_method_reserve_space) ( num_nodes: [`int`](class_int.md) )                                                                                                   |
| `void`                                              | [`set_point_disabled`](class_astar3d.md#class_astar3d_method_set_point_disabled) ( id: [`int`](class_int.md), disabled: [`bool`](class_bool.md) = true )                                                      |
| `void`                                              | [`set_point_position`](class_astar3d.md#class_astar3d_method_set_point_position) ( id: [`int`](class_int.md), position: [`Vector3`](class_vector3.md) )                                                       |
| `void`                                              | [`set_point_weight_scale`](class_astar3d.md#class_astar3d_method_set_point_weight_scale) ( id: [`int`](class_int.md), weight_scale: [`float`](class_float.md) )                                               |

<!-- rst-class:: classref-section-separator -->

---

## 方法说明

<div id="_class_astar3d_private_method__compute_cost"></div>

[`float`](class_float.md) **_compute_cost** ( from_id: [`int`](class_int.md), to_id: [`int`](class_int.md) ) virtual[^virtual] const[^const]<div id="class_astar3d_private_method__compute_cost"></div>

Called when computing the cost between two connected points.

Note that this function is hidden in the default **AStar3D** class.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_astar3d_private_method__estimate_cost"></div>

[`float`](class_float.md) **_estimate_cost** ( from_id: [`int`](class_int.md), end_id: [`int`](class_int.md) ) virtual[^virtual] const[^const]<div id="class_astar3d_private_method__estimate_cost"></div>

Called when estimating the cost between a point and the path's ending point.

Note that this function is hidden in the default **AStar3D** class.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_astar3d_method_add_point"></div>

`void` **add_point** ( id: [`int`](class_int.md), position: [`Vector3`](class_vector3.md), weight_scale: [`float`](class_float.md) = 1.0 )<div id="class_astar3d_method_add_point"></div>

Adds a new point at the given position with the given identifier. The `id` must be 0 or larger, and the `weight_scale` must be 0.0 or greater.

The `weight_scale` is multiplied by the result of [`_compute_cost`](class_astar3d.md#class_astar3d_private_method__compute_cost) when determining the overall cost of traveling across a segment from a neighboring point to this point. Thus, all else being equal, the algorithm prefers points with lower `weight_scale` s to form a path.



```gdscript

    var astar = AStar3D.new()
    astar.add_point(1, Vector3(1, 0, 0), 4) # Adds the point (1, 0, 0) with weight_scale 4 and id 1
```

```csharp

    var astar = new AStar3D();
    astar.AddPoint(1, new Vector3(1, 0, 0), 4); // Adds the point (1, 0, 0) with weight_scale 4 and id 1
```



If there already exists a point for the given `id`, its position and weight scale are updated to the given values.





<!-- rst-class:: classref-item-separator -->

---

<div id="_class_astar3d_method_are_points_connected"></div>

[`bool`](class_bool.md) **are_points_connected** ( id: [`int`](class_int.md), to_id: [`int`](class_int.md), bidirectional: [`bool`](class_bool.md) = true ) const[^const]<div id="class_astar3d_method_are_points_connected"></div>

Returns whether the two given points are directly connected by a segment. If `bidirectional` is `false`, returns whether movement from `id` to `to_id` is possible through this segment.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_astar3d_method_clear"></div>

`void` **clear** ( )<div id="class_astar3d_method_clear"></div>

Clears all the points and segments.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_astar3d_method_connect_points"></div>

`void` **connect_points** ( id: [`int`](class_int.md), to_id: [`int`](class_int.md), bidirectional: [`bool`](class_bool.md) = true )<div id="class_astar3d_method_connect_points"></div>

Creates a segment between the given points. If `bidirectional` is `false`, only movement from `id` to `to_id` is allowed, not the reverse direction.



```gdscript

    var astar = AStar3D.new()
    astar.add_point(1, Vector3(1, 1, 0))
    astar.add_point(2, Vector3(0, 5, 0))
    astar.connect_points(1, 2, false)
```

```csharp

    var astar = new AStar3D();
    astar.AddPoint(1, new Vector3(1, 1, 0));
    astar.AddPoint(2, new Vector3(0, 5, 0));
    astar.ConnectPoints(1, 2, false);
```







<!-- rst-class:: classref-item-separator -->

---

<div id="_class_astar3d_method_disconnect_points"></div>

`void` **disconnect_points** ( id: [`int`](class_int.md), to_id: [`int`](class_int.md), bidirectional: [`bool`](class_bool.md) = true )<div id="class_astar3d_method_disconnect_points"></div>

Deletes the segment between the given points. If `bidirectional` is `false`, only movement from `id` to `to_id` is prevented, and a unidirectional segment possibly remains.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_astar3d_method_get_available_point_id"></div>

[`int`](class_int.md) **get_available_point_id** ( ) const[^const]<div id="class_astar3d_method_get_available_point_id"></div>

Returns the next available point ID with no point associated to it.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_astar3d_method_get_closest_point"></div>

[`int`](class_int.md) **get_closest_point** ( to_position: [`Vector3`](class_vector3.md), include_disabled: [`bool`](class_bool.md) = false ) const[^const]<div id="class_astar3d_method_get_closest_point"></div>

Returns the ID of the closest point to `to_position`, optionally taking disabled points into account. Returns `-1` if there are no points in the points pool.

 **Note:** If several points are the closest to `to_position`, the one with the smallest ID will be returned, ensuring a deterministic result.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_astar3d_method_get_closest_position_in_segment"></div>

[`Vector3`](class_vector3.md) **get_closest_position_in_segment** ( to_position: [`Vector3`](class_vector3.md) ) const[^const]<div id="class_astar3d_method_get_closest_position_in_segment"></div>

Returns the closest position to `to_position` that resides inside a segment between two connected points.



```gdscript

    var astar = AStar3D.new()
    astar.add_point(1, Vector3(0, 0, 0))
    astar.add_point(2, Vector3(0, 5, 0))
    astar.connect_points(1, 2)
    var res = astar.get_closest_position_in_segment(Vector3(3, 3, 0)) # Returns (0, 3, 0)
```

```csharp

    var astar = new AStar3D();
    astar.AddPoint(1, new Vector3(0, 0, 0));
    astar.AddPoint(2, new Vector3(0, 5, 0));
    astar.ConnectPoints(1, 2);
    Vector3 res = astar.GetClosestPositionInSegment(new Vector3(3, 3, 0)); // Returns (0, 3, 0)
```



The result is in the segment that goes from `y = 0` to `y = 5`. It's the closest position in the segment to the given point.





<!-- rst-class:: classref-item-separator -->

---

<div id="_class_astar3d_method_get_id_path"></div>

[`PackedInt64Array`](class_packedint64array.md) **get_id_path** ( from_id: [`int`](class_int.md), to_id: [`int`](class_int.md), allow_partial_path: [`bool`](class_bool.md) = false )<div id="class_astar3d_method_get_id_path"></div>

Returns an array with the IDs of the points that form the path found by AStar3D between the given points. The array is ordered from the starting point to the ending point of the path.

If there is no valid path to the target, and `allow_partial_path` is `true`, returns a path to the point closest to the target that can be reached.

 **Note:** When `allow_partial_path` is `true` and `to_id` is disabled the search may take an unusually long time to finish.



```gdscript

    var astar = AStar3D.new()
    astar.add_point(1, Vector3(0, 0, 0))
    astar.add_point(2, Vector3(0, 1, 0), 1) # Default weight is 1
    astar.add_point(3, Vector3(1, 1, 0))
    astar.add_point(4, Vector3(2, 0, 0))
    
    astar.connect_points(1, 2, false)
    astar.connect_points(2, 3, false)
    astar.connect_points(4, 3, false)
    astar.connect_points(1, 4, false)
    
    var res = astar.get_id_path(1, 3) # Returns [1, 2, 3]
```

```csharp

    var astar = new AStar3D();
    astar.AddPoint(1, new Vector3(0, 0, 0));
    astar.AddPoint(2, new Vector3(0, 1, 0), 1); // Default weight is 1
    astar.AddPoint(3, new Vector3(1, 1, 0));
    astar.AddPoint(4, new Vector3(2, 0, 0));
    astar.ConnectPoints(1, 2, false);
    astar.ConnectPoints(2, 3, false);
    astar.ConnectPoints(4, 3, false);
    astar.ConnectPoints(1, 4, false);
    long[] res = astar.GetIdPath(1, 3); // Returns [1, 2, 3]
```



If you change the 2nd point's weight to 3, then the result will be `[1, 4, 3]` instead, because now even though the distance is longer, it's "easier" to get through point 4 than through point 2.





<!-- rst-class:: classref-item-separator -->

---

<div id="_class_astar3d_method_get_point_capacity"></div>

[`int`](class_int.md) **get_point_capacity** ( ) const[^const]<div id="class_astar3d_method_get_point_capacity"></div>

Returns the capacity of the structure backing the points, useful in conjunction with [`reserve_space`](class_astar3d.md#class_astar3d_method_reserve_space).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_astar3d_method_get_point_connections"></div>

[`PackedInt64Array`](class_packedint64array.md) **get_point_connections** ( id: [`int`](class_int.md) )<div id="class_astar3d_method_get_point_connections"></div>

Returns an array with the IDs of the points that form the connection with the given point.



```gdscript

    var astar = AStar3D.new()
    astar.add_point(1, Vector3(0, 0, 0))
    astar.add_point(2, Vector3(0, 1, 0))
    astar.add_point(3, Vector3(1, 1, 0))
    astar.add_point(4, Vector3(2, 0, 0))
    
    astar.connect_points(1, 2, true)
    astar.connect_points(1, 3, true)
    
    var neighbors = astar.get_point_connections(1) # Returns [2, 3]
```

```csharp

    var astar = new AStar3D();
    astar.AddPoint(1, new Vector3(0, 0, 0));
    astar.AddPoint(2, new Vector3(0, 1, 0));
    astar.AddPoint(3, new Vector3(1, 1, 0));
    astar.AddPoint(4, new Vector3(2, 0, 0));
    astar.ConnectPoints(1, 2, true);
    astar.ConnectPoints(1, 3, true);
    
    long[] neighbors = astar.GetPointConnections(1); // Returns [2, 3]
```







<!-- rst-class:: classref-item-separator -->

---

<div id="_class_astar3d_method_get_point_count"></div>

[`int`](class_int.md) **get_point_count** ( ) const[^const]<div id="class_astar3d_method_get_point_count"></div>

Returns the number of points currently in the points pool.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_astar3d_method_get_point_ids"></div>

[`PackedInt64Array`](class_packedint64array.md) **get_point_ids** ( )<div id="class_astar3d_method_get_point_ids"></div>

Returns an array of all point IDs.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_astar3d_method_get_point_path"></div>

[`PackedVector3Array`](class_packedvector3array.md) **get_point_path** ( from_id: [`int`](class_int.md), to_id: [`int`](class_int.md), allow_partial_path: [`bool`](class_bool.md) = false )<div id="class_astar3d_method_get_point_path"></div>

Returns an array with the points that are in the path found by AStar3D between the given points. The array is ordered from the starting point to the ending point of the path.

If there is no valid path to the target, and `allow_partial_path` is `true`, returns a path to the point closest to the target that can be reached.

 **Note:** This method is not thread-safe. If called from a [`Thread`](class_thread.md), it will return an empty array and will print an error message.

Additionally, when `allow_partial_path` is `true` and `to_id` is disabled the search may take an unusually long time to finish.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_astar3d_method_get_point_position"></div>

[`Vector3`](class_vector3.md) **get_point_position** ( id: [`int`](class_int.md) ) const[^const]<div id="class_astar3d_method_get_point_position"></div>

Returns the position of the point associated with the given `id`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_astar3d_method_get_point_weight_scale"></div>

[`float`](class_float.md) **get_point_weight_scale** ( id: [`int`](class_int.md) ) const[^const]<div id="class_astar3d_method_get_point_weight_scale"></div>

Returns the weight scale of the point associated with the given `id`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_astar3d_method_has_point"></div>

[`bool`](class_bool.md) **has_point** ( id: [`int`](class_int.md) ) const[^const]<div id="class_astar3d_method_has_point"></div>

Returns whether a point associated with the given `id` exists.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_astar3d_method_is_point_disabled"></div>

[`bool`](class_bool.md) **is_point_disabled** ( id: [`int`](class_int.md) ) const[^const]<div id="class_astar3d_method_is_point_disabled"></div>

Returns whether a point is disabled or not for pathfinding. By default, all points are enabled.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_astar3d_method_remove_point"></div>

`void` **remove_point** ( id: [`int`](class_int.md) )<div id="class_astar3d_method_remove_point"></div>

Removes the point associated with the given `id` from the points pool.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_astar3d_method_reserve_space"></div>

`void` **reserve_space** ( num_nodes: [`int`](class_int.md) )<div id="class_astar3d_method_reserve_space"></div>

Reserves space internally for `num_nodes` points. Useful if you're adding a known large number of points at once, such as points on a grid. New capacity must be greater or equals to old capacity.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_astar3d_method_set_point_disabled"></div>

`void` **set_point_disabled** ( id: [`int`](class_int.md), disabled: [`bool`](class_bool.md) = true )<div id="class_astar3d_method_set_point_disabled"></div>

Disables or enables the specified point for pathfinding. Useful for making a temporary obstacle.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_astar3d_method_set_point_position"></div>

`void` **set_point_position** ( id: [`int`](class_int.md), position: [`Vector3`](class_vector3.md) )<div id="class_astar3d_method_set_point_position"></div>

Sets the `position` for the point with the given `id`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_astar3d_method_set_point_weight_scale"></div>

`void` **set_point_weight_scale** ( id: [`int`](class_int.md), weight_scale: [`float`](class_float.md) )<div id="class_astar3d_method_set_point_weight_scale"></div>

Sets the `weight_scale` for the point with the given `id`. The `weight_scale` is multiplied by the result of [`_compute_cost`](class_astar3d.md#class_astar3d_private_method__compute_cost) when determining the overall cost of traveling across a segment from a neighboring point to this point.

[^virtual]: 本方法通常需要用户覆盖才能生效。
[^const]: 本方法无副作用，不会修改该实例的任何成员变量。
[^vararg]: 本方法除了能接受在此处描述的参数外，还能够继续接受任意数量的参数。
[^constructor]: 本方法用于构造某个类型。
[^static]: 调用本方法无需实例，可直接使用类名进行调用。
[^operator]: 本方法描述的是使用本类型作为左操作数的有效运算符。
[^bitfield]: 这个值是由下列位标志构成位掩码的整数。
[^void]: 无返回值。
