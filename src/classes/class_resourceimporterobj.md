<!-- ⚠ 请勿编辑本文件 ⚠ -->
<!-- 本文档使用脚本从 WeDot 引擎源码仓库生成。 -->
<!-- 生成脚本：https://github.com/WeDot-Engine/WeDot/tree/master/doc/tools/make_md.py； -->
<!-- 原文件：https://github.com/WeDot-Engine/WeDot/tree/master/doc/classes/ResourceImporterOBJ.xml。 -->

<div id="_class_resourceimporterobj"></div>

# ResourceImporterOBJ

**继承：** [`ResourceImporter`](class_resourceimporter.md) **<** [`RefCounted`](class_refcounted.md) **<** [`Object`](class_object.md)

Imports an OBJ 3D model as an independent [`Mesh`](class_mesh.md) or scene.

## 描述

Unlike [`ResourceImporterScene`](class_resourceimporterscene.md), **ResourceImporterOBJ** will import a single [`Mesh`](class_mesh.md) resource by default instead of importing a [`PackedScene`](class_packedscene.md). This makes it easier to use the [`Mesh`](class_mesh.md) resource in nodes that expect direct [`Mesh`](class_mesh.md) resources, such as [`GridMap`](class_gridmap.md), [`GPUParticles3D`](class_gpuparticles3d.md) or [`CPUParticles3D`](class_cpuparticles3d.md). Note that it is still possible to save mesh resources from 3D scenes using the **Advanced Import Settings** dialog, regardless of the source format.

See also [`ResourceImporterScene`](class_resourceimporterscene.md), which is used for more advanced 3D formats such as glTF.

## 属性

|||
|:-:|:--|
| [`bool`](class_bool.md)       | [`force_disable_mesh_compression`](class_resourceimporterobj.md#class_resourceimporterobj_property_force_disable_mesh_compression)     | ``false``            |
| [`bool`](class_bool.md)       | [`generate_lightmap_uv2`](class_resourceimporterobj.md#class_resourceimporterobj_property_generate_lightmap_uv2)                       | ``false``            |
| [`float`](class_float.md)     | [`generate_lightmap_uv2_texel_size`](class_resourceimporterobj.md#class_resourceimporterobj_property_generate_lightmap_uv2_texel_size) | ``0.2``              |
| [`bool`](class_bool.md)       | [`generate_lods`](class_resourceimporterobj.md#class_resourceimporterobj_property_generate_lods)                                       | ``true``             |
| [`bool`](class_bool.md)       | [`generate_shadow_mesh`](class_resourceimporterobj.md#class_resourceimporterobj_property_generate_shadow_mesh)                         | ``true``             |
| [`bool`](class_bool.md)       | [`generate_tangents`](class_resourceimporterobj.md#class_resourceimporterobj_property_generate_tangents)                               | ``true``             |
| [`Vector3`](class_vector3.md) | [`offset_mesh`](class_resourceimporterobj.md#class_resourceimporterobj_property_offset_mesh)                                           | ``Vector3(0, 0, 0)`` |
| [`Vector3`](class_vector3.md) | [`scale_mesh`](class_resourceimporterobj.md#class_resourceimporterobj_property_scale_mesh)                                             | ``Vector3(1, 1, 1)`` |

<!-- rst-class:: classref-section-separator -->

---

## 属性说明

<div id="_class_resourceimporterobj_property_force_disable_mesh_compression"></div>

[`bool`](class_bool.md) **force_disable_mesh_compression** = ``false`` <div id="class_resourceimporterobj_property_force_disable_mesh_compression"></div>

If `true`, mesh compression will not be used. Consider enabling if you notice blocky artifacts in your mesh normals or UVs, or if you have meshes that are larger than a few thousand meters in each direction.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_resourceimporterobj_property_generate_lightmap_uv2"></div>

[`bool`](class_bool.md) **generate_lightmap_uv2** = ``false`` <div id="class_resourceimporterobj_property_generate_lightmap_uv2"></div>

If `true`, generates UV2 on import for [`LightmapGI`](class_lightmapgi.md) baking.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_resourceimporterobj_property_generate_lightmap_uv2_texel_size"></div>

[`float`](class_float.md) **generate_lightmap_uv2_texel_size** = ``0.2`` <div id="class_resourceimporterobj_property_generate_lightmap_uv2_texel_size"></div>

Controls the size of each texel on the baked lightmap. A smaller value results in more precise lightmaps, at the cost of larger lightmap sizes and longer bake times.

 **Note:** Only effective if [`generate_lightmap_uv2`](class_resourceimporterobj.md#class_resourceimporterobj_property_generate_lightmap_uv2) is `true`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_resourceimporterobj_property_generate_lods"></div>

[`bool`](class_bool.md) **generate_lods** = ``true`` <div id="class_resourceimporterobj_property_generate_lods"></div>

If `true`, generates lower detail variants of the mesh which will be displayed in the distance to improve rendering performance. Not all meshes benefit from LOD, especially if they are never rendered from far away. Disabling this can reduce output file size and speed up importing. See [*Mesh level of detail (LOD)*](../tutorials/3d/mesh_lod.md#doc-mesh-lod) for more information.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_resourceimporterobj_property_generate_shadow_mesh"></div>

[`bool`](class_bool.md) **generate_shadow_mesh** = ``true`` <div id="class_resourceimporterobj_property_generate_shadow_mesh"></div>

If `true`, enables the generation of shadow meshes on import. This optimizes shadow rendering without reducing quality by welding vertices together when possible. This in turn reduces the memory bandwidth required to render shadows. Shadow mesh generation currently doesn't support using a lower detail level than the source mesh (but shadow rendering will make use of LODs when relevant).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_resourceimporterobj_property_generate_tangents"></div>

[`bool`](class_bool.md) **generate_tangents** = ``true`` <div id="class_resourceimporterobj_property_generate_tangents"></div>

If `true`, generate vertex tangents using [*Mikktspace*](http://www.mikktspace.com/) if the source mesh doesn't have tangent data. When possible, it's recommended to let the 3D modeling software generate tangents on export instead on relying on this option. Tangents are required for correct display of normal and height maps, along with any material/shader features that require tangents.

If you don't need material features that require tangents, disabling this can reduce output file size and speed up importing if the source 3D file doesn't contain tangents.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_resourceimporterobj_property_offset_mesh"></div>

[`Vector3`](class_vector3.md) **offset_mesh** = ``Vector3(0, 0, 0)`` <div id="class_resourceimporterobj_property_offset_mesh"></div>

Offsets the mesh's data by the specified value. This can be used to work around misaligned meshes without having to modify the source file.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_resourceimporterobj_property_scale_mesh"></div>

[`Vector3`](class_vector3.md) **scale_mesh** = ``Vector3(1, 1, 1)`` <div id="class_resourceimporterobj_property_scale_mesh"></div>

Scales the mesh's data by the specified value. This can be used to work around misscaled meshes without having to modify the source file.

[^virtual]: 本方法通常需要用户覆盖才能生效。
[^const]: 本方法无副作用，不会修改该实例的任何成员变量。
[^vararg]: 本方法除了能接受在此处描述的参数外，还能够继续接受任意数量的参数。
[^constructor]: 本方法用于构造某个类型。
[^static]: 调用本方法无需实例，可直接使用类名进行调用。
[^operator]: 本方法描述的是使用本类型作为左操作数的有效运算符。
[^bitfield]: 这个值是由下列位标志构成位掩码的整数。
[^void]: 无返回值。
