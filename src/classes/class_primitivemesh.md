<!-- ⚠ 请勿编辑本文件 ⚠ -->
<!-- 本文档使用脚本从 WeDot 引擎源码仓库生成。 -->
<!-- 生成脚本：https://github.com/WeDot-Engine/WeDot/tree/4.3/doc/tools/make_md.py； -->
<!-- 原文件：https://github.com/WeDot-Engine/WeDot/tree/4.3/doc/classes/PrimitiveMesh.xml。 -->

<div id="_class_primitivemesh"></div>

# PrimitiveMesh

**继承：** [`Mesh`](class_mesh.md) **<** [`Resource`](class_resource.md) **<** [`RefCounted`](class_refcounted.md) **<** [`Object`](class_object.md)

**派生：** [`BoxMesh`](class_boxmesh.md), [`CapsuleMesh`](class_capsulemesh.md), [`CylinderMesh`](class_cylindermesh.md), [`PlaneMesh`](class_planemesh.md), [`PointMesh`](class_pointmesh.md), [`PrismMesh`](class_prismmesh.md), [`RibbonTrailMesh`](class_ribbontrailmesh.md), [`SphereMesh`](class_spheremesh.md), [`TextMesh`](class_textmesh.md), [`TorusMesh`](class_torusmesh.md), [`TubeTrailMesh`](class_tubetrailmesh.md)

Base class for all primitive meshes. Handles applying a [`Material`](class_material.md) to a primitive mesh.

## 描述

Base class for all primitive meshes. Handles applying a [`Material`](class_material.md) to a primitive mesh. Examples include [`BoxMesh`](class_boxmesh.md), [`CapsuleMesh`](class_capsulemesh.md), [`CylinderMesh`](class_cylindermesh.md), [`PlaneMesh`](class_planemesh.md), [`PrismMesh`](class_prismmesh.md), and [`SphereMesh`](class_spheremesh.md).

## 属性

| [`bool`](class_bool.md)         | [`add_uv2`](#class_primitivemesh_property_add_uv2)         | ``false``                  |
| [`AABB`](class_aabb.md)         | [`custom_aabb`](#class_primitivemesh_property_custom_aabb) | ``AABB(0, 0, 0, 0, 0, 0)`` |
| [`bool`](class_bool.md)         | [`flip_faces`](#class_primitivemesh_property_flip_faces)   | ``false``                  |
| [`Material`](class_material.md) | [`material`](#class_primitivemesh_property_material)       |                            |
| [`float`](class_float.md)       | [`uv2_padding`](#class_primitivemesh_property_uv2_padding) | ``2.0``                    |

## 方法

| [`Array`](class_array.md) | [`_create_mesh_array`](#class_primitivemesh_private_method__create_mesh_array) ( ) virtual[^virtual] const[^const] |
| [`Array`](class_array.md) | [`get_mesh_arrays`](#class_primitivemesh_method_get_mesh_arrays) ( ) const[^const]                                 |
| `void`                    | [`request_update`](#class_primitivemesh_method_request_update) ( )                                                 |

<!-- rst-class:: classref-section-separator -->

---

## 属性说明

<div id="_class_primitivemesh_property_add_uv2"></div>

[`bool`](class_bool.md) **add_uv2** = ``false`` <div id="class_primitivemesh_property_add_uv2"></div>

- `void` **set_add_uv2** ( value: [`bool`](class_bool.md) )
- [`bool`](class_bool.md) **get_add_uv2** ( )

If set, generates UV2 UV coordinates applying a padding using the [`uv2_padding`](#class_primitivemesh_property_uv2_padding) setting. UV2 is needed for lightmapping.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_primitivemesh_property_custom_aabb"></div>

[`AABB`](class_aabb.md) **custom_aabb** = ``AABB(0, 0, 0, 0, 0, 0)`` <div id="class_primitivemesh_property_custom_aabb"></div>

- `void` **set_custom_aabb** ( value: [`AABB`](class_aabb.md) )
- [`AABB`](class_aabb.md) **get_custom_aabb** ( )

Overrides the [`AABB`](class_aabb.md) with one defined by user for use with frustum culling. Especially useful to avoid unexpected culling when using a shader to offset vertices.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_primitivemesh_property_flip_faces"></div>

[`bool`](class_bool.md) **flip_faces** = ``false`` <div id="class_primitivemesh_property_flip_faces"></div>

- `void` **set_flip_faces** ( value: [`bool`](class_bool.md) )
- [`bool`](class_bool.md) **get_flip_faces** ( )

If set, the order of the vertices in each triangle are reversed resulting in the backside of the mesh being drawn.

This gives the same result as using [`BaseMaterial3D.CULL_FRONT`](#class_basematerial3d_constant_cull_front) in [`BaseMaterial3D.cull_mode`](#class_basematerial3d_property_cull_mode).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_primitivemesh_property_material"></div>

[`Material`](class_material.md) **material** <div id="class_primitivemesh_property_material"></div>

- `void` **set_material** ( value: [`Material`](class_material.md) )
- [`Material`](class_material.md) **get_material** ( )

The current [`Material`](class_material.md) of the primitive mesh.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_primitivemesh_property_uv2_padding"></div>

[`float`](class_float.md) **uv2_padding** = ``2.0`` <div id="class_primitivemesh_property_uv2_padding"></div>

- `void` **set_uv2_padding** ( value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_uv2_padding** ( )

If [`add_uv2`](#class_primitivemesh_property_add_uv2) is set, specifies the padding in pixels applied along seams of the mesh. Lower padding values allow making better use of the lightmap texture (resulting in higher texel density), but may introduce visible lightmap bleeding along edges.

If the size of the lightmap texture can't be determined when generating the mesh, UV2 is calculated assuming a texture size of 1024x1024.

<!-- rst-class:: classref-section-separator -->

---

## 方法说明

<div id="_class_primitivemesh_private_method__create_mesh_array"></div>

[`Array`](class_array.md) **_create_mesh_array** ( ) virtual[^virtual] const[^const]<div id="class_primitivemesh_private_method__create_mesh_array"></div>

Override this method to customize how this primitive mesh should be generated. Should return an [`Array`](class_array.md) where each element is another Array of values required for the mesh (see the [ArrayType](#enum_mesh_arraytype) constants).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_primitivemesh_method_get_mesh_arrays"></div>

[`Array`](class_array.md) **get_mesh_arrays** ( ) const[^const]<div id="class_primitivemesh_method_get_mesh_arrays"></div>

Returns mesh arrays used to constitute surface of [`Mesh`](class_mesh.md). The result can be passed to [`ArrayMesh.add_surface_from_arrays`](#class_arraymesh_method_add_surface_from_arrays) to create a new surface. For example:



```gdscript

    var c = CylinderMesh.new()
    var arr_mesh = ArrayMesh.new()
    arr_mesh.add_surface_from_arrays(Mesh.PRIMITIVE_TRIANGLES, c.get_mesh_arrays())
```

```csharp

    var c = new CylinderMesh();
    var arrMesh = new ArrayMesh();
    arrMesh.AddSurfaceFromArrays(Mesh.PrimitiveType.Triangles, c.GetMeshArrays());
```







<!-- rst-class:: classref-item-separator -->

---

<div id="_class_primitivemesh_method_request_update"></div>

`void` **request_update** ( )<div id="class_primitivemesh_method_request_update"></div>

Request an update of this primitive mesh based on its properties.

[^virtual]: 本方法通常需要用户覆盖才能生效。
[^const]: 本方法无副作用，不会修改该实例的任何成员变量。
[^vararg]: 本方法除了能接受在此处描述的参数外，还能够继续接受任意数量的参数。
[^constructor]: 本方法用于构造某个类型。
[^static]: 调用本方法无需实例，可直接使用类名进行调用。
[^operator]: 本方法描述的是使用本类型作为左操作数的有效运算符。
[^bitfield]: 这个值是由下列位标志构成位掩码的整数。
[^void]: 无返回值。
