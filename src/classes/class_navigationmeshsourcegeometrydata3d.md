<!-- ⚠ 请勿编辑本文件 ⚠ -->
<!-- 本文档使用脚本从 WeDot 引擎源码仓库生成。 -->
<!-- 生成脚本：https://github.com/WeDot-Engine/WeDot/tree/master/doc/tools/make_md.py； -->
<!-- 原文件：https://github.com/WeDot-Engine/WeDot/tree/master/doc/classes/NavigationMeshSourceGeometryData3D.xml。 -->

<div id="_class_navigationmeshsourcegeometrydata3d"></div>

# NavigationMeshSourceGeometryData3D

**实验性：** This class may be changed or removed in future versions.

**继承：** [`Resource`](class_resource.md) **<** [`RefCounted`](class_refcounted.md) **<** [`Object`](class_object.md)

Container for parsed source geometry data used in navigation mesh baking.

## 描述

Container for parsed source geometry data used in navigation mesh baking.

## 方法

|||
|:-:|:--|
| `void`                                              | [`add_faces`](class_navigationmeshsourcegeometrydata3d.md#class_navigationmeshsourcegeometrydata3d_method_add_faces) ( faces: [`PackedVector3Array`](class_packedvector3array.md), xform: [`Transform3D`](class_transform3d.md) )                                                                                               |
| `void`                                              | [`add_mesh`](class_navigationmeshsourcegeometrydata3d.md#class_navigationmeshsourcegeometrydata3d_method_add_mesh) ( mesh: [`Mesh`](class_mesh.md), xform: [`Transform3D`](class_transform3d.md) )                                                                                                                              |
| `void`                                              | [`add_mesh_array`](class_navigationmeshsourcegeometrydata3d.md#class_navigationmeshsourcegeometrydata3d_method_add_mesh_array) ( mesh_array: [`Array`](class_array.md), xform: [`Transform3D`](class_transform3d.md) )                                                                                                          |
| `void`                                              | [`add_projected_obstruction`](class_navigationmeshsourcegeometrydata3d.md#class_navigationmeshsourcegeometrydata3d_method_add_projected_obstruction) ( vertices: [`PackedVector3Array`](class_packedvector3array.md), elevation: [`float`](class_float.md), height: [`float`](class_float.md), carve: [`bool`](class_bool.md) ) |
| `void`                                              | [`append_arrays`](class_navigationmeshsourcegeometrydata3d.md#class_navigationmeshsourcegeometrydata3d_method_append_arrays) ( vertices: [`PackedFloat32Array`](class_packedfloat32array.md), indices: [`PackedInt32Array`](class_packedint32array.md) )                                                                        |
| `void`                                              | [`clear`](class_navigationmeshsourcegeometrydata3d.md#class_navigationmeshsourcegeometrydata3d_method_clear) ( )                                                                                                                                                                                                                |
| `void`                                              | [`clear_projected_obstructions`](class_navigationmeshsourcegeometrydata3d.md#class_navigationmeshsourcegeometrydata3d_method_clear_projected_obstructions) ( )                                                                                                                                                                  |
| [`AABB`](class_aabb.md)                             | [`get_bounds`](class_navigationmeshsourcegeometrydata3d.md#class_navigationmeshsourcegeometrydata3d_method_get_bounds) ( )                                                                                                                                                                                                      |
| [`PackedInt32Array`](class_packedint32array.md)     | [`get_indices`](class_navigationmeshsourcegeometrydata3d.md#class_navigationmeshsourcegeometrydata3d_method_get_indices) ( ) const[^const]                                                                                                                                                                                      |
| [`Array`](class_array.md)                           | [`get_projected_obstructions`](class_navigationmeshsourcegeometrydata3d.md#class_navigationmeshsourcegeometrydata3d_method_get_projected_obstructions) ( ) const[^const]                                                                                                                                                        |
| [`PackedFloat32Array`](class_packedfloat32array.md) | [`get_vertices`](class_navigationmeshsourcegeometrydata3d.md#class_navigationmeshsourcegeometrydata3d_method_get_vertices) ( ) const[^const]                                                                                                                                                                                    |
| [`bool`](class_bool.md)                             | [`has_data`](class_navigationmeshsourcegeometrydata3d.md#class_navigationmeshsourcegeometrydata3d_method_has_data) ( )                                                                                                                                                                                                          |
| `void`                                              | [`merge`](class_navigationmeshsourcegeometrydata3d.md#class_navigationmeshsourcegeometrydata3d_method_merge) ( other_geometry: [`NavigationMeshSourceGeometryData3D`](class_navigationmeshsourcegeometrydata3d.md) )                                                                                                            |
| `void`                                              | [`set_indices`](class_navigationmeshsourcegeometrydata3d.md#class_navigationmeshsourcegeometrydata3d_method_set_indices) ( indices: [`PackedInt32Array`](class_packedint32array.md) )                                                                                                                                           |
| `void`                                              | [`set_projected_obstructions`](class_navigationmeshsourcegeometrydata3d.md#class_navigationmeshsourcegeometrydata3d_method_set_projected_obstructions) ( projected_obstructions: [`Array`](class_array.md) )                                                                                                                    |
| `void`                                              | [`set_vertices`](class_navigationmeshsourcegeometrydata3d.md#class_navigationmeshsourcegeometrydata3d_method_set_vertices) ( vertices: [`PackedFloat32Array`](class_packedfloat32array.md) )                                                                                                                                    |

<!-- rst-class:: classref-section-separator -->

---

## 方法说明

<div id="_class_navigationmeshsourcegeometrydata3d_method_add_faces"></div>

`void` **add_faces** ( faces: [`PackedVector3Array`](class_packedvector3array.md), xform: [`Transform3D`](class_transform3d.md) )<div id="class_navigationmeshsourcegeometrydata3d_method_add_faces"></div>

Adds an array of vertex positions to the geometry data for navigation mesh baking to form triangulated faces. For each face the array must have three vertex positions in clockwise winding order. Since [`NavigationMesh`](class_navigationmesh.md) resources have no transform, all vertex positions need to be offset by the node's transform using `xform`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_navigationmeshsourcegeometrydata3d_method_add_mesh"></div>

`void` **add_mesh** ( mesh: [`Mesh`](class_mesh.md), xform: [`Transform3D`](class_transform3d.md) )<div id="class_navigationmeshsourcegeometrydata3d_method_add_mesh"></div>

Adds the geometry data of a [`Mesh`](class_mesh.md) resource to the navigation mesh baking data. The mesh must have valid triangulated mesh data to be considered. Since [`NavigationMesh`](class_navigationmesh.md) resources have no transform, all vertex positions need to be offset by the node's transform using `xform`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_navigationmeshsourcegeometrydata3d_method_add_mesh_array"></div>

`void` **add_mesh_array** ( mesh_array: [`Array`](class_array.md), xform: [`Transform3D`](class_transform3d.md) )<div id="class_navigationmeshsourcegeometrydata3d_method_add_mesh_array"></div>

Adds an [`Array`](class_array.md) the size of [`Mesh.ARRAY_MAX`](class_mesh.md#class_mesh_constant_array_max) and with vertices at index [`Mesh.ARRAY_VERTEX`](class_mesh.md#class_mesh_constant_array_vertex) and indices at index [`Mesh.ARRAY_INDEX`](class_mesh.md#class_mesh_constant_array_index) to the navigation mesh baking data. The array must have valid triangulated mesh data to be considered. Since [`NavigationMesh`](class_navigationmesh.md) resources have no transform, all vertex positions need to be offset by the node's transform using `xform`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_navigationmeshsourcegeometrydata3d_method_add_projected_obstruction"></div>

`void` **add_projected_obstruction** ( vertices: [`PackedVector3Array`](class_packedvector3array.md), elevation: [`float`](class_float.md), height: [`float`](class_float.md), carve: [`bool`](class_bool.md) )<div id="class_navigationmeshsourcegeometrydata3d_method_add_projected_obstruction"></div>

Adds a projected obstruction shape to the source geometry. The `vertices` are considered projected on a xz-axes plane, placed at the global y-axis `elevation` and extruded by `height`. If `carve` is `true` the carved shape will not be affected by additional offsets (e.g. agent radius) of the navigation mesh baking process.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_navigationmeshsourcegeometrydata3d_method_append_arrays"></div>

`void` **append_arrays** ( vertices: [`PackedFloat32Array`](class_packedfloat32array.md), indices: [`PackedInt32Array`](class_packedint32array.md) )<div id="class_navigationmeshsourcegeometrydata3d_method_append_arrays"></div>

Appends arrays of `vertices` and `indices` at the end of the existing arrays. Adds the existing index as an offset to the appended indices.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_navigationmeshsourcegeometrydata3d_method_clear"></div>

`void` **clear** ( )<div id="class_navigationmeshsourcegeometrydata3d_method_clear"></div>

Clears the internal data.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_navigationmeshsourcegeometrydata3d_method_clear_projected_obstructions"></div>

`void` **clear_projected_obstructions** ( )<div id="class_navigationmeshsourcegeometrydata3d_method_clear_projected_obstructions"></div>

Clears all projected obstructions.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_navigationmeshsourcegeometrydata3d_method_get_bounds"></div>

[`AABB`](class_aabb.md) **get_bounds** ( )<div id="class_navigationmeshsourcegeometrydata3d_method_get_bounds"></div>

Returns an axis-aligned bounding box that covers all the stored geometry data. The bounds are calculated when calling this function with the result cached until further geometry changes are made.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_navigationmeshsourcegeometrydata3d_method_get_indices"></div>

[`PackedInt32Array`](class_packedint32array.md) **get_indices** ( ) const[^const]<div id="class_navigationmeshsourcegeometrydata3d_method_get_indices"></div>

Returns the parsed source geometry data indices array.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_navigationmeshsourcegeometrydata3d_method_get_projected_obstructions"></div>

[`Array`](class_array.md) **get_projected_obstructions** ( ) const[^const]<div id="class_navigationmeshsourcegeometrydata3d_method_get_projected_obstructions"></div>

Returns the projected obstructions as an [`Array`](class_array.md) of dictionaries. Each [`Dictionary`](class_dictionary.md) contains the following entries:

- `vertices` - A [`PackedFloat32Array`](class_packedfloat32array.md) that defines the outline points of the projected shape.

- `elevation` - A [`float`](class_float.md) that defines the projected shape placement on the y-axis.

- `height` - A [`float`](class_float.md) that defines how much the projected shape is extruded along the y-axis.

- `carve` - A [`bool`](class_bool.md) that defines how the obstacle affects the navigation mesh baking. If `true` the projected shape will not be affected by addition offsets, e.g. agent radius.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_navigationmeshsourcegeometrydata3d_method_get_vertices"></div>

[`PackedFloat32Array`](class_packedfloat32array.md) **get_vertices** ( ) const[^const]<div id="class_navigationmeshsourcegeometrydata3d_method_get_vertices"></div>

Returns the parsed source geometry data vertices array.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_navigationmeshsourcegeometrydata3d_method_has_data"></div>

[`bool`](class_bool.md) **has_data** ( )<div id="class_navigationmeshsourcegeometrydata3d_method_has_data"></div>

Returns `true` when parsed source geometry data exists.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_navigationmeshsourcegeometrydata3d_method_merge"></div>

`void` **merge** ( other_geometry: [`NavigationMeshSourceGeometryData3D`](class_navigationmeshsourcegeometrydata3d.md) )<div id="class_navigationmeshsourcegeometrydata3d_method_merge"></div>

Adds the geometry data of another **NavigationMeshSourceGeometryData3D** to the navigation mesh baking data.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_navigationmeshsourcegeometrydata3d_method_set_indices"></div>

`void` **set_indices** ( indices: [`PackedInt32Array`](class_packedint32array.md) )<div id="class_navigationmeshsourcegeometrydata3d_method_set_indices"></div>

Sets the parsed source geometry data indices. The indices need to be matched with appropriated vertices.

 **Warning:** Inappropriate data can crash the baking process of the involved third-party libraries.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_navigationmeshsourcegeometrydata3d_method_set_projected_obstructions"></div>

`void` **set_projected_obstructions** ( projected_obstructions: [`Array`](class_array.md) )<div id="class_navigationmeshsourcegeometrydata3d_method_set_projected_obstructions"></div>

Sets the projected obstructions with an Array of Dictionaries with the following key value pairs:



```gdscript

    "vertices" : PackedFloat32Array
    "elevation" : float
    "height" : float
    "carve" : bool
```





<!-- rst-class:: classref-item-separator -->

---

<div id="_class_navigationmeshsourcegeometrydata3d_method_set_vertices"></div>

`void` **set_vertices** ( vertices: [`PackedFloat32Array`](class_packedfloat32array.md) )<div id="class_navigationmeshsourcegeometrydata3d_method_set_vertices"></div>

Sets the parsed source geometry data vertices. The vertices need to be matched with appropriated indices.

 **Warning:** Inappropriate data can crash the baking process of the involved third-party libraries.

[^virtual]: 本方法通常需要用户覆盖才能生效。
[^const]: 本方法无副作用，不会修改该实例的任何成员变量。
[^vararg]: 本方法除了能接受在此处描述的参数外，还能够继续接受任意数量的参数。
[^constructor]: 本方法用于构造某个类型。
[^static]: 调用本方法无需实例，可直接使用类名进行调用。
[^operator]: 本方法描述的是使用本类型作为左操作数的有效运算符。
[^bitfield]: 这个值是由下列位标志构成位掩码的整数。
[^void]: 无返回值。
