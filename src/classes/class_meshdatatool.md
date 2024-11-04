<!-- ⚠ 请勿编辑本文件 ⚠ -->
<!-- 本文档使用脚本从 WeDot 引擎源码仓库生成。 -->
<!-- 生成脚本：https://github.com/WeDot-Engine/WeDot/tree/4.3/doc/tools/make_md.py； -->
<!-- 原文件：https://github.com/WeDot-Engine/WeDot/tree/4.3/doc/classes/MeshDataTool.xml。 -->

<div id="_class_meshdatatool"></div>

# MeshDataTool

**继承：** [`RefCounted`](class_refcounted.md) **<** [`Object`](class_object.md)

Helper tool to access and edit [`Mesh`](class_mesh.md) data.

## 描述

MeshDataTool provides access to individual vertices in a [`Mesh`](class_mesh.md). It allows users to read and edit vertex data of meshes. It also creates an array of faces and edges.

To use MeshDataTool, load a mesh with [`create_from_surface`](#class_meshdatatool_method_create_from_surface). When you are finished editing the data commit the data to a mesh with [`commit_to_surface`](#class_meshdatatool_method_commit_to_surface).

Below is an example of how MeshDataTool may be used.



```gdscript

    var mesh = ArrayMesh.new()
    mesh.add_surface_from_arrays(Mesh.PRIMITIVE_TRIANGLES, BoxMesh.new().get_mesh_arrays())
    var mdt = MeshDataTool.new()
    mdt.create_from_surface(mesh, 0)
    for i in range(mdt.get_vertex_count()):
        var vertex = mdt.get_vertex(i)
        # In this example we extend the mesh by one unit, which results in separated faces as it is flat shaded.
        vertex += mdt.get_vertex_normal(i)
        # Save your change.
        mdt.set_vertex(i, vertex)
    mesh.clear_surfaces()
    mdt.commit_to_surface(mesh)
    var mi = MeshInstance.new()
    mi.mesh = mesh
    add_child(mi)
```

```csharp

    var mesh = new ArrayMesh();
    mesh.AddSurfaceFromArrays(Mesh.PrimitiveType.Triangles, new BoxMesh().GetMeshArrays());
    var mdt = new MeshDataTool();
    mdt.CreateFromSurface(mesh, 0);
    for (var i = 0; i < mdt.GetVertexCount(); i++)
    {
        Vector3 vertex = mdt.GetVertex(i);
        // In this example we extend the mesh by one unit, which results in separated faces as it is flat shaded.
        vertex += mdt.GetVertexNormal(i);
        // Save your change.
        mdt.SetVertex(i, vertex);
    }
    mesh.ClearSurfaces();
    mdt.CommitToSurface(mesh);
    var mi = new MeshInstance();
    mi.Mesh = mesh;
    AddChild(mi);
```



See also [`ArrayMesh`](class_arraymesh.md), [`ImmediateMesh`](class_immediatemesh.md) and [`SurfaceTool`](class_surfacetool.md) for procedural geometry generation.

 **Note:** Godot uses clockwise [*winding order*](https://learnopengl.com/Advanced-OpenGL/Face-culling) for front faces of triangle primitive modes.





## 方法

| `void`                                              | [`clear`](#class_meshdatatool_method_clear) ( )                                                                                                                    |
| [Error](#enum_@globalscope_error)                   | [`commit_to_surface`](#class_meshdatatool_method_commit_to_surface) ( mesh: [`ArrayMesh`](class_arraymesh.md), compression_flags: [`int`](class_int.md) = 0 )      |
| [Error](#enum_@globalscope_error)                   | [`create_from_surface`](#class_meshdatatool_method_create_from_surface) ( mesh: [`ArrayMesh`](class_arraymesh.md), surface: [`int`](class_int.md) )                |
| [`int`](class_int.md)                               | [`get_edge_count`](#class_meshdatatool_method_get_edge_count) ( ) const[^const]                                                                                    |
| [`PackedInt32Array`](class_packedint32array.md)     | [`get_edge_faces`](#class_meshdatatool_method_get_edge_faces) ( idx: [`int`](class_int.md) ) const[^const]                                                         |
| [`Variant`](class_variant.md)                       | [`get_edge_meta`](#class_meshdatatool_method_get_edge_meta) ( idx: [`int`](class_int.md) ) const[^const]                                                           |
| [`int`](class_int.md)                               | [`get_edge_vertex`](#class_meshdatatool_method_get_edge_vertex) ( idx: [`int`](class_int.md), vertex: [`int`](class_int.md) ) const[^const]                        |
| [`int`](class_int.md)                               | [`get_face_count`](#class_meshdatatool_method_get_face_count) ( ) const[^const]                                                                                    |
| [`int`](class_int.md)                               | [`get_face_edge`](#class_meshdatatool_method_get_face_edge) ( idx: [`int`](class_int.md), edge: [`int`](class_int.md) ) const[^const]                              |
| [`Variant`](class_variant.md)                       | [`get_face_meta`](#class_meshdatatool_method_get_face_meta) ( idx: [`int`](class_int.md) ) const[^const]                                                           |
| [`Vector3`](class_vector3.md)                       | [`get_face_normal`](#class_meshdatatool_method_get_face_normal) ( idx: [`int`](class_int.md) ) const[^const]                                                       |
| [`int`](class_int.md)                               | [`get_face_vertex`](#class_meshdatatool_method_get_face_vertex) ( idx: [`int`](class_int.md), vertex: [`int`](class_int.md) ) const[^const]                        |
| [`int`](class_int.md)                               | [`get_format`](#class_meshdatatool_method_get_format) ( ) const[^const]                                                                                            |
| [`Material`](class_material.md)                     | [`get_material`](#class_meshdatatool_method_get_material) ( ) const[^const]                                                                                        |
| [`Vector3`](class_vector3.md)                       | [`get_vertex`](#class_meshdatatool_method_get_vertex) ( idx: [`int`](class_int.md) ) const[^const]                                                                 |
| [`PackedInt32Array`](class_packedint32array.md)     | [`get_vertex_bones`](#class_meshdatatool_method_get_vertex_bones) ( idx: [`int`](class_int.md) ) const[^const]                                                     |
| [`Color`](class_color.md)                           | [`get_vertex_color`](#class_meshdatatool_method_get_vertex_color) ( idx: [`int`](class_int.md) ) const[^const]                                                     |
| [`int`](class_int.md)                               | [`get_vertex_count`](#class_meshdatatool_method_get_vertex_count) ( ) const[^const]                                                                                |
| [`PackedInt32Array`](class_packedint32array.md)     | [`get_vertex_edges`](#class_meshdatatool_method_get_vertex_edges) ( idx: [`int`](class_int.md) ) const[^const]                                                     |
| [`PackedInt32Array`](class_packedint32array.md)     | [`get_vertex_faces`](#class_meshdatatool_method_get_vertex_faces) ( idx: [`int`](class_int.md) ) const[^const]                                                     |
| [`Variant`](class_variant.md)                       | [`get_vertex_meta`](#class_meshdatatool_method_get_vertex_meta) ( idx: [`int`](class_int.md) ) const[^const]                                                       |
| [`Vector3`](class_vector3.md)                       | [`get_vertex_normal`](#class_meshdatatool_method_get_vertex_normal) ( idx: [`int`](class_int.md) ) const[^const]                                                   |
| [`Plane`](class_plane.md)                           | [`get_vertex_tangent`](#class_meshdatatool_method_get_vertex_tangent) ( idx: [`int`](class_int.md) ) const[^const]                                                 |
| [`Vector2`](class_vector2.md)                       | [`get_vertex_uv`](#class_meshdatatool_method_get_vertex_uv) ( idx: [`int`](class_int.md) ) const[^const]                                                           |
| [`Vector2`](class_vector2.md)                       | [`get_vertex_uv2`](#class_meshdatatool_method_get_vertex_uv2) ( idx: [`int`](class_int.md) ) const[^const]                                                         |
| [`PackedFloat32Array`](class_packedfloat32array.md) | [`get_vertex_weights`](#class_meshdatatool_method_get_vertex_weights) ( idx: [`int`](class_int.md) ) const[^const]                                                 |
| `void`                                              | [`set_edge_meta`](#class_meshdatatool_method_set_edge_meta) ( idx: [`int`](class_int.md), meta: [`Variant`](class_variant.md) )                                    |
| `void`                                              | [`set_face_meta`](#class_meshdatatool_method_set_face_meta) ( idx: [`int`](class_int.md), meta: [`Variant`](class_variant.md) )                                    |
| `void`                                              | [`set_material`](#class_meshdatatool_method_set_material) ( material: [`Material`](class_material.md) )                                                            |
| `void`                                              | [`set_vertex`](#class_meshdatatool_method_set_vertex) ( idx: [`int`](class_int.md), vertex: [`Vector3`](class_vector3.md) )                                        |
| `void`                                              | [`set_vertex_bones`](#class_meshdatatool_method_set_vertex_bones) ( idx: [`int`](class_int.md), bones: [`PackedInt32Array`](class_packedint32array.md) )           |
| `void`                                              | [`set_vertex_color`](#class_meshdatatool_method_set_vertex_color) ( idx: [`int`](class_int.md), color: [`Color`](class_color.md) )                                 |
| `void`                                              | [`set_vertex_meta`](#class_meshdatatool_method_set_vertex_meta) ( idx: [`int`](class_int.md), meta: [`Variant`](class_variant.md) )                                |
| `void`                                              | [`set_vertex_normal`](#class_meshdatatool_method_set_vertex_normal) ( idx: [`int`](class_int.md), normal: [`Vector3`](class_vector3.md) )                          |
| `void`                                              | [`set_vertex_tangent`](#class_meshdatatool_method_set_vertex_tangent) ( idx: [`int`](class_int.md), tangent: [`Plane`](class_plane.md) )                           |
| `void`                                              | [`set_vertex_uv`](#class_meshdatatool_method_set_vertex_uv) ( idx: [`int`](class_int.md), uv: [`Vector2`](class_vector2.md) )                                      |
| `void`                                              | [`set_vertex_uv2`](#class_meshdatatool_method_set_vertex_uv2) ( idx: [`int`](class_int.md), uv2: [`Vector2`](class_vector2.md) )                                   |
| `void`                                              | [`set_vertex_weights`](#class_meshdatatool_method_set_vertex_weights) ( idx: [`int`](class_int.md), weights: [`PackedFloat32Array`](class_packedfloat32array.md) ) |

<!-- rst-class:: classref-section-separator -->

---

## 方法说明

<div id="_class_meshdatatool_method_clear"></div>

`void` **clear** ( )<div id="class_meshdatatool_method_clear"></div>

Clears all data currently in MeshDataTool.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_meshdatatool_method_commit_to_surface"></div>

[Error](#enum_@globalscope_error) **commit_to_surface** ( mesh: [`ArrayMesh`](class_arraymesh.md), compression_flags: [`int`](class_int.md) = 0 )<div id="class_meshdatatool_method_commit_to_surface"></div>

Adds a new surface to specified [`Mesh`](class_mesh.md) with edited data.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_meshdatatool_method_create_from_surface"></div>

[Error](#enum_@globalscope_error) **create_from_surface** ( mesh: [`ArrayMesh`](class_arraymesh.md), surface: [`int`](class_int.md) )<div id="class_meshdatatool_method_create_from_surface"></div>

Uses specified surface of given [`Mesh`](class_mesh.md) to populate data for MeshDataTool.

Requires [`Mesh`](class_mesh.md) with primitive type [`Mesh.PRIMITIVE_TRIANGLES`](#class_mesh_constant_primitive_triangles).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_meshdatatool_method_get_edge_count"></div>

[`int`](class_int.md) **get_edge_count** ( ) const[^const]<div id="class_meshdatatool_method_get_edge_count"></div>

Returns the number of edges in this [`Mesh`](class_mesh.md).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_meshdatatool_method_get_edge_faces"></div>

[`PackedInt32Array`](class_packedint32array.md) **get_edge_faces** ( idx: [`int`](class_int.md) ) const[^const]<div id="class_meshdatatool_method_get_edge_faces"></div>

Returns array of faces that touch given edge.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_meshdatatool_method_get_edge_meta"></div>

[`Variant`](class_variant.md) **get_edge_meta** ( idx: [`int`](class_int.md) ) const[^const]<div id="class_meshdatatool_method_get_edge_meta"></div>

Returns meta information assigned to given edge.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_meshdatatool_method_get_edge_vertex"></div>

[`int`](class_int.md) **get_edge_vertex** ( idx: [`int`](class_int.md), vertex: [`int`](class_int.md) ) const[^const]<div id="class_meshdatatool_method_get_edge_vertex"></div>

Returns index of specified vertex connected to given edge.

Vertex argument can only be 0 or 1 because edges are comprised of two vertices.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_meshdatatool_method_get_face_count"></div>

[`int`](class_int.md) **get_face_count** ( ) const[^const]<div id="class_meshdatatool_method_get_face_count"></div>

Returns the number of faces in this [`Mesh`](class_mesh.md).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_meshdatatool_method_get_face_edge"></div>

[`int`](class_int.md) **get_face_edge** ( idx: [`int`](class_int.md), edge: [`int`](class_int.md) ) const[^const]<div id="class_meshdatatool_method_get_face_edge"></div>

Returns specified edge associated with given face.

Edge argument must be either 0, 1, or 2 because a face only has three edges.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_meshdatatool_method_get_face_meta"></div>

[`Variant`](class_variant.md) **get_face_meta** ( idx: [`int`](class_int.md) ) const[^const]<div id="class_meshdatatool_method_get_face_meta"></div>

Returns the metadata associated with the given face.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_meshdatatool_method_get_face_normal"></div>

[`Vector3`](class_vector3.md) **get_face_normal** ( idx: [`int`](class_int.md) ) const[^const]<div id="class_meshdatatool_method_get_face_normal"></div>

Calculates and returns the face normal of the given face.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_meshdatatool_method_get_face_vertex"></div>

[`int`](class_int.md) **get_face_vertex** ( idx: [`int`](class_int.md), vertex: [`int`](class_int.md) ) const[^const]<div id="class_meshdatatool_method_get_face_vertex"></div>

Returns the specified vertex index of the given face.

Vertex argument must be either 0, 1, or 2 because faces contain three vertices.

 **Example:** 



```gdscript

    var index = mesh_data_tool.get_face_vertex(0, 1) # Gets the index of the second vertex of the first face.
    var position = mesh_data_tool.get_vertex(index)
    var normal = mesh_data_tool.get_vertex_normal(index)
```

```csharp

    int index = meshDataTool.GetFaceVertex(0, 1); // Gets the index of the second vertex of the first face.
    Vector3 position = meshDataTool.GetVertex(index);
    Vector3 normal = meshDataTool.GetVertexNormal(index);
```







<!-- rst-class:: classref-item-separator -->

---

<div id="_class_meshdatatool_method_get_format"></div>

[`int`](class_int.md) **get_format** ( ) const[^const]<div id="class_meshdatatool_method_get_format"></div>

Returns the [`Mesh`](class_mesh.md)'s format as a combination of the [ArrayFormat](#enum_mesh_arrayformat) flags. For example, a mesh containing both vertices and normals would return a format of `3` because [`Mesh.ARRAY_FORMAT_VERTEX`](#class_mesh_constant_array_format_vertex) is `1` and [`Mesh.ARRAY_FORMAT_NORMAL`](#class_mesh_constant_array_format_normal) is `2`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_meshdatatool_method_get_material"></div>

[`Material`](class_material.md) **get_material** ( ) const[^const]<div id="class_meshdatatool_method_get_material"></div>

Returns the material assigned to the [`Mesh`](class_mesh.md).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_meshdatatool_method_get_vertex"></div>

[`Vector3`](class_vector3.md) **get_vertex** ( idx: [`int`](class_int.md) ) const[^const]<div id="class_meshdatatool_method_get_vertex"></div>

Returns the position of the given vertex.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_meshdatatool_method_get_vertex_bones"></div>

[`PackedInt32Array`](class_packedint32array.md) **get_vertex_bones** ( idx: [`int`](class_int.md) ) const[^const]<div id="class_meshdatatool_method_get_vertex_bones"></div>

Returns the bones of the given vertex.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_meshdatatool_method_get_vertex_color"></div>

[`Color`](class_color.md) **get_vertex_color** ( idx: [`int`](class_int.md) ) const[^const]<div id="class_meshdatatool_method_get_vertex_color"></div>

Returns the color of the given vertex.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_meshdatatool_method_get_vertex_count"></div>

[`int`](class_int.md) **get_vertex_count** ( ) const[^const]<div id="class_meshdatatool_method_get_vertex_count"></div>

Returns the total number of vertices in [`Mesh`](class_mesh.md).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_meshdatatool_method_get_vertex_edges"></div>

[`PackedInt32Array`](class_packedint32array.md) **get_vertex_edges** ( idx: [`int`](class_int.md) ) const[^const]<div id="class_meshdatatool_method_get_vertex_edges"></div>

Returns an array of edges that share the given vertex.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_meshdatatool_method_get_vertex_faces"></div>

[`PackedInt32Array`](class_packedint32array.md) **get_vertex_faces** ( idx: [`int`](class_int.md) ) const[^const]<div id="class_meshdatatool_method_get_vertex_faces"></div>

Returns an array of faces that share the given vertex.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_meshdatatool_method_get_vertex_meta"></div>

[`Variant`](class_variant.md) **get_vertex_meta** ( idx: [`int`](class_int.md) ) const[^const]<div id="class_meshdatatool_method_get_vertex_meta"></div>

Returns the metadata associated with the given vertex.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_meshdatatool_method_get_vertex_normal"></div>

[`Vector3`](class_vector3.md) **get_vertex_normal** ( idx: [`int`](class_int.md) ) const[^const]<div id="class_meshdatatool_method_get_vertex_normal"></div>

Returns the normal of the given vertex.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_meshdatatool_method_get_vertex_tangent"></div>

[`Plane`](class_plane.md) **get_vertex_tangent** ( idx: [`int`](class_int.md) ) const[^const]<div id="class_meshdatatool_method_get_vertex_tangent"></div>

Returns the tangent of the given vertex.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_meshdatatool_method_get_vertex_uv"></div>

[`Vector2`](class_vector2.md) **get_vertex_uv** ( idx: [`int`](class_int.md) ) const[^const]<div id="class_meshdatatool_method_get_vertex_uv"></div>

Returns the UV of the given vertex.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_meshdatatool_method_get_vertex_uv2"></div>

[`Vector2`](class_vector2.md) **get_vertex_uv2** ( idx: [`int`](class_int.md) ) const[^const]<div id="class_meshdatatool_method_get_vertex_uv2"></div>

Returns the UV2 of the given vertex.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_meshdatatool_method_get_vertex_weights"></div>

[`PackedFloat32Array`](class_packedfloat32array.md) **get_vertex_weights** ( idx: [`int`](class_int.md) ) const[^const]<div id="class_meshdatatool_method_get_vertex_weights"></div>

Returns bone weights of the given vertex.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_meshdatatool_method_set_edge_meta"></div>

`void` **set_edge_meta** ( idx: [`int`](class_int.md), meta: [`Variant`](class_variant.md) )<div id="class_meshdatatool_method_set_edge_meta"></div>

Sets the metadata of the given edge.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_meshdatatool_method_set_face_meta"></div>

`void` **set_face_meta** ( idx: [`int`](class_int.md), meta: [`Variant`](class_variant.md) )<div id="class_meshdatatool_method_set_face_meta"></div>

Sets the metadata of the given face.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_meshdatatool_method_set_material"></div>

`void` **set_material** ( material: [`Material`](class_material.md) )<div id="class_meshdatatool_method_set_material"></div>

Sets the material to be used by newly-constructed [`Mesh`](class_mesh.md).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_meshdatatool_method_set_vertex"></div>

`void` **set_vertex** ( idx: [`int`](class_int.md), vertex: [`Vector3`](class_vector3.md) )<div id="class_meshdatatool_method_set_vertex"></div>

Sets the position of the given vertex.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_meshdatatool_method_set_vertex_bones"></div>

`void` **set_vertex_bones** ( idx: [`int`](class_int.md), bones: [`PackedInt32Array`](class_packedint32array.md) )<div id="class_meshdatatool_method_set_vertex_bones"></div>

Sets the bones of the given vertex.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_meshdatatool_method_set_vertex_color"></div>

`void` **set_vertex_color** ( idx: [`int`](class_int.md), color: [`Color`](class_color.md) )<div id="class_meshdatatool_method_set_vertex_color"></div>

Sets the color of the given vertex.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_meshdatatool_method_set_vertex_meta"></div>

`void` **set_vertex_meta** ( idx: [`int`](class_int.md), meta: [`Variant`](class_variant.md) )<div id="class_meshdatatool_method_set_vertex_meta"></div>

Sets the metadata associated with the given vertex.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_meshdatatool_method_set_vertex_normal"></div>

`void` **set_vertex_normal** ( idx: [`int`](class_int.md), normal: [`Vector3`](class_vector3.md) )<div id="class_meshdatatool_method_set_vertex_normal"></div>

Sets the normal of the given vertex.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_meshdatatool_method_set_vertex_tangent"></div>

`void` **set_vertex_tangent** ( idx: [`int`](class_int.md), tangent: [`Plane`](class_plane.md) )<div id="class_meshdatatool_method_set_vertex_tangent"></div>

Sets the tangent of the given vertex.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_meshdatatool_method_set_vertex_uv"></div>

`void` **set_vertex_uv** ( idx: [`int`](class_int.md), uv: [`Vector2`](class_vector2.md) )<div id="class_meshdatatool_method_set_vertex_uv"></div>

Sets the UV of the given vertex.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_meshdatatool_method_set_vertex_uv2"></div>

`void` **set_vertex_uv2** ( idx: [`int`](class_int.md), uv2: [`Vector2`](class_vector2.md) )<div id="class_meshdatatool_method_set_vertex_uv2"></div>

Sets the UV2 of the given vertex.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_meshdatatool_method_set_vertex_weights"></div>

`void` **set_vertex_weights** ( idx: [`int`](class_int.md), weights: [`PackedFloat32Array`](class_packedfloat32array.md) )<div id="class_meshdatatool_method_set_vertex_weights"></div>

Sets the bone weights of the given vertex.

[^virtual]: 本方法通常需要用户覆盖才能生效。
[^const]: 本方法无副作用，不会修改该实例的任何成员变量。
[^vararg]: 本方法除了能接受在此处描述的参数外，还能够继续接受任意数量的参数。
[^constructor]: 本方法用于构造某个类型。
[^static]: 调用本方法无需实例，可直接使用类名进行调用。
[^operator]: 本方法描述的是使用本类型作为左操作数的有效运算符。
[^bitfield]: 这个值是由下列位标志构成位掩码的整数。
[^void]: 无返回值。
