<!-- ⚠ 请勿编辑本文件 ⚠ -->
<!-- 本文档使用脚本从 WeDot 引擎源码仓库生成。 -->
<!-- 生成脚本：https://github.com/WeDot-Engine/WeDot/tree/4.3/doc/tools/make_md.py； -->
<!-- 原文件：https://github.com/WeDot-Engine/WeDot/tree/4.3/doc/classes/ImmediateMesh.xml。 -->

<div id="_class_immediatemesh"></div>

# ImmediateMesh

**继承：** [`Mesh`](class_mesh.md) **<** [`Resource`](class_resource.md) **<** [`RefCounted`](class_refcounted.md) **<** [`Object`](class_object.md)

Mesh optimized for creating geometry manually.

## 描述

A mesh type optimized for creating geometry manually, similar to OpenGL 1.x immediate mode.

Here's a sample on how to generate a triangular face:



```gdscript

    var mesh = ImmediateMesh.new()
    mesh.surface_begin(Mesh.PRIMITIVE_TRIANGLES)
    mesh.surface_add_vertex(Vector3.LEFT)
    mesh.surface_add_vertex(Vector3.FORWARD)
    mesh.surface_add_vertex(Vector3.ZERO)
    mesh.surface_end()
```

```csharp

    var mesh = new ImmediateMesh();
    mesh.SurfaceBegin(Mesh.PrimitiveType.Triangles);
    mesh.SurfaceAddVertex(Vector3.Left);
    mesh.SurfaceAddVertex(Vector3.Forward);
    mesh.SurfaceAddVertex(Vector3.Zero);
    mesh.SurfaceEnd();
```



 **Note:** Generating complex geometries with **ImmediateMesh** is highly inefficient. Instead, it is designed to generate simple geometry that changes often.





## 方法

| `void` | [`clear_surfaces`](#class_immediatemesh_method_clear_surfaces) ( )                                                                                                      |
| `void` | [`surface_add_vertex`](#class_immediatemesh_method_surface_add_vertex) ( vertex: [`Vector3`](class_vector3.md) )                                                        |
| `void` | [`surface_add_vertex_2d`](#class_immediatemesh_method_surface_add_vertex_2d) ( vertex: [`Vector2`](class_vector2.md) )                                                  |
| `void` | [`surface_begin`](#class_immediatemesh_method_surface_begin) ( primitive: [PrimitiveType](#enum_mesh_primitivetype), material: [`Material`](class_material.md) = null ) |
| `void` | [`surface_end`](#class_immediatemesh_method_surface_end) ( )                                                                                                            |
| `void` | [`surface_set_color`](#class_immediatemesh_method_surface_set_color) ( color: [`Color`](class_color.md) )                                                               |
| `void` | [`surface_set_normal`](#class_immediatemesh_method_surface_set_normal) ( normal: [`Vector3`](class_vector3.md) )                                                        |
| `void` | [`surface_set_tangent`](#class_immediatemesh_method_surface_set_tangent) ( tangent: [`Plane`](class_plane.md) )                                                         |
| `void` | [`surface_set_uv`](#class_immediatemesh_method_surface_set_uv) ( uv: [`Vector2`](class_vector2.md) )                                                                    |
| `void` | [`surface_set_uv2`](#class_immediatemesh_method_surface_set_uv2) ( uv2: [`Vector2`](class_vector2.md) )                                                                 |

<!-- rst-class:: classref-section-separator -->

---

## 方法说明

<div id="_class_immediatemesh_method_clear_surfaces"></div>

`void` **clear_surfaces** ( )<div id="class_immediatemesh_method_clear_surfaces"></div>

Clear all surfaces.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_immediatemesh_method_surface_add_vertex"></div>

`void` **surface_add_vertex** ( vertex: [`Vector3`](class_vector3.md) )<div id="class_immediatemesh_method_surface_add_vertex"></div>

Add a 3D vertex using the current attributes previously set.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_immediatemesh_method_surface_add_vertex_2d"></div>

`void` **surface_add_vertex_2d** ( vertex: [`Vector2`](class_vector2.md) )<div id="class_immediatemesh_method_surface_add_vertex_2d"></div>

Add a 2D vertex using the current attributes previously set.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_immediatemesh_method_surface_begin"></div>

`void` **surface_begin** ( primitive: [PrimitiveType](#enum_mesh_primitivetype), material: [`Material`](class_material.md) = null )<div id="class_immediatemesh_method_surface_begin"></div>

Begin a new surface.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_immediatemesh_method_surface_end"></div>

`void` **surface_end** ( )<div id="class_immediatemesh_method_surface_end"></div>

End and commit current surface. Note that surface being created will not be visible until this function is called.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_immediatemesh_method_surface_set_color"></div>

`void` **surface_set_color** ( color: [`Color`](class_color.md) )<div id="class_immediatemesh_method_surface_set_color"></div>

Set the color attribute that will be pushed with the next vertex.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_immediatemesh_method_surface_set_normal"></div>

`void` **surface_set_normal** ( normal: [`Vector3`](class_vector3.md) )<div id="class_immediatemesh_method_surface_set_normal"></div>

Set the normal attribute that will be pushed with the next vertex.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_immediatemesh_method_surface_set_tangent"></div>

`void` **surface_set_tangent** ( tangent: [`Plane`](class_plane.md) )<div id="class_immediatemesh_method_surface_set_tangent"></div>

Set the tangent attribute that will be pushed with the next vertex.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_immediatemesh_method_surface_set_uv"></div>

`void` **surface_set_uv** ( uv: [`Vector2`](class_vector2.md) )<div id="class_immediatemesh_method_surface_set_uv"></div>

Set the UV attribute that will be pushed with the next vertex.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_immediatemesh_method_surface_set_uv2"></div>

`void` **surface_set_uv2** ( uv2: [`Vector2`](class_vector2.md) )<div id="class_immediatemesh_method_surface_set_uv2"></div>

Set the UV2 attribute that will be pushed with the next vertex.

[^virtual]: 本方法通常需要用户覆盖才能生效。
[^const]: 本方法无副作用，不会修改该实例的任何成员变量。
[^vararg]: 本方法除了能接受在此处描述的参数外，还能够继续接受任意数量的参数。
[^constructor]: 本方法用于构造某个类型。
[^static]: 调用本方法无需实例，可直接使用类名进行调用。
[^operator]: 本方法描述的是使用本类型作为左操作数的有效运算符。
[^bitfield]: 这个值是由下列位标志构成位掩码的整数。
[^void]: 无返回值。
