<!-- ⚠ 请勿编辑本文件 ⚠ -->
<!-- 本文档使用脚本从 WeDot 引擎源码仓库生成。 -->
<!-- 生成脚本：https://github.com/WeDot-Engine/WeDot/tree/4.3/doc/tools/make_md.py； -->
<!-- 原文件：https://github.com/WeDot-Engine/WeDot/tree/4.3/doc/classes/ResourceImporterScene.xml。 -->

<div id="_class_resourceimporterscene"></div>

# ResourceImporterScene

**继承：** [`ResourceImporter`](class_resourceimporter.md) **<** [`RefCounted`](class_refcounted.md) **<** [`Object`](class_object.md)

Imports a glTF, FBX, Collada or Blender 3D scene.

## 描述

See also [`ResourceImporterOBJ`](class_resourceimporterobj.md), which is used for OBJ models that can be imported as an independent [`Mesh`](class_mesh.md) or a scene.

Additional options (such as extracting individual meshes or materials to files) are available in the **Advanced Import Settings** dialog. This dialog can be accessed by double-clicking a 3D scene in the FileSystem dock or by selecting a 3D scene in the FileSystem dock, going to the Import dock and choosing **Advanced**.

 **Note:** **ResourceImporterScene** is *not* used for [`PackedScene`](class_packedscene.md) s, such as `.tscn` and `.scn` files.

## 属性

| [`Dictionary`](class_dictionary.md) | [`_subresources`](#class_resourceimporterscene_property__subresources)                                         | ``{}``    |
| [`float`](class_float.md)           | [`animation/fps`](#class_resourceimporterscene_property_animation/fps)                                         | ``30``    |
| [`bool`](class_bool.md)             | [`animation/import`](#class_resourceimporterscene_property_animation/import)                                   | ``true``  |
| [`bool`](class_bool.md)             | [`animation/import_rest_as_RESET`](#class_resourceimporterscene_property_animation/import_rest_as_reset)       | ``false`` |
| [`bool`](class_bool.md)             | [`animation/remove_immutable_tracks`](#class_resourceimporterscene_property_animation/remove_immutable_tracks) | ``true``  |
| [`bool`](class_bool.md)             | [`animation/trimming`](#class_resourceimporterscene_property_animation/trimming)                               | ``false`` |
| [`String`](class_string.md)         | [`import_script/path`](#class_resourceimporterscene_property_import_script/path)                               | ``""``    |
| [`bool`](class_bool.md)             | [`meshes/create_shadow_meshes`](#class_resourceimporterscene_property_meshes/create_shadow_meshes)             | ``true``  |
| [`bool`](class_bool.md)             | [`meshes/ensure_tangents`](#class_resourceimporterscene_property_meshes/ensure_tangents)                       | ``true``  |
| [`bool`](class_bool.md)             | [`meshes/force_disable_compression`](#class_resourceimporterscene_property_meshes/force_disable_compression)   | ``false`` |
| [`bool`](class_bool.md)             | [`meshes/generate_lods`](#class_resourceimporterscene_property_meshes/generate_lods)                           | ``true``  |
| [`int`](class_int.md)               | [`meshes/light_baking`](#class_resourceimporterscene_property_meshes/light_baking)                             | ``1``     |
| [`float`](class_float.md)           | [`meshes/lightmap_texel_size`](#class_resourceimporterscene_property_meshes/lightmap_texel_size)               | ``0.2``   |
| [`bool`](class_bool.md)             | [`nodes/apply_root_scale`](#class_resourceimporterscene_property_nodes/apply_root_scale)                       | ``true``  |
| [`bool`](class_bool.md)             | [`nodes/import_as_skeleton_bones`](#class_resourceimporterscene_property_nodes/import_as_skeleton_bones)       | ``false`` |
| [`String`](class_string.md)         | [`nodes/root_name`](#class_resourceimporterscene_property_nodes/root_name)                                     | ``""``    |
| [`float`](class_float.md)           | [`nodes/root_scale`](#class_resourceimporterscene_property_nodes/root_scale)                                   | ``1.0``   |
| [`String`](class_string.md)         | [`nodes/root_type`](#class_resourceimporterscene_property_nodes/root_type)                                     | ``""``    |
| [`bool`](class_bool.md)             | [`skins/use_named_skins`](#class_resourceimporterscene_property_skins/use_named_skins)                         | ``true``  |

<!-- rst-class:: classref-section-separator -->

---

## 属性说明

<div id="_class_resourceimporterscene_property__subresources"></div>

[`Dictionary`](class_dictionary.md) **_subresources** = ``{}`` <div id="class_resourceimporterscene_property__subresources"></div>

Contains properties for the scene's subresources. This is an internal option which is not visible in the Import dock.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_resourceimporterscene_property_animation/fps"></div>

[`float`](class_float.md) **animation/fps** = ``30`` <div id="class_resourceimporterscene_property_animation/fps"></div>

The number of frames per second to use for baking animation curves to a series of points with linear interpolation. It's recommended to configure this value to match the value you're using as a baseline in your 3D modeling software. Higher values result in more precise animation with fast movement changes, at the cost of higher file sizes and memory usage. Thanks to interpolation, there is usually not much benefit in going above 30 FPS (as the animation will still appear smooth at higher rendering framerates).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_resourceimporterscene_property_animation/import"></div>

[`bool`](class_bool.md) **animation/import** = ``true`` <div id="class_resourceimporterscene_property_animation/import"></div>

If `true`, import animations from the 3D scene.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_resourceimporterscene_property_animation/import_rest_as_reset"></div>

[`bool`](class_bool.md) **animation/import_rest_as_RESET** = ``false`` <div id="class_resourceimporterscene_property_animation/import_rest_as_reset"></div>

If `true`, adds an [`Animation`](class_animation.md) named `RESET`, containing the [`Skeleton3D.get_bone_rest`](#class_skeleton3d_method_get_bone_rest) from [`Skeleton3D`](class_skeleton3d.md) nodes. This can be useful to extract an animation in the reference pose.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_resourceimporterscene_property_animation/remove_immutable_tracks"></div>

[`bool`](class_bool.md) **animation/remove_immutable_tracks** = ``true`` <div id="class_resourceimporterscene_property_animation/remove_immutable_tracks"></div>

If `true`, remove animation tracks that only contain default values. This can reduce output file size and memory usage with certain 3D scenes, depending on the contents of their animation tracks.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_resourceimporterscene_property_animation/trimming"></div>

[`bool`](class_bool.md) **animation/trimming** = ``false`` <div id="class_resourceimporterscene_property_animation/trimming"></div>

If `true`, trim the beginning and end of animations if there are no keyframe changes. This can reduce output file size and memory usage with certain 3D scenes, depending on the contents of their animation tracks.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_resourceimporterscene_property_import_script/path"></div>

[`String`](class_string.md) **import_script/path** = ``""`` <div id="class_resourceimporterscene_property_import_script/path"></div>

Path to an import script, which can run code after the import process has completed for custom processing. See [*Using import scripts for automation*](../tutorials/assets_pipeline/importing_3d_scenes/import_configuration.md#using-import-scripts-for-automation) for more information.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_resourceimporterscene_property_meshes/create_shadow_meshes"></div>

[`bool`](class_bool.md) **meshes/create_shadow_meshes** = ``true`` <div id="class_resourceimporterscene_property_meshes/create_shadow_meshes"></div>

If `true`, enables the generation of shadow meshes on import. This optimizes shadow rendering without reducing quality by welding vertices together when possible. This in turn reduces the memory bandwidth required to render shadows. Shadow mesh generation currently doesn't support using a lower detail level than the source mesh (but shadow rendering will make use of LODs when relevant).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_resourceimporterscene_property_meshes/ensure_tangents"></div>

[`bool`](class_bool.md) **meshes/ensure_tangents** = ``true`` <div id="class_resourceimporterscene_property_meshes/ensure_tangents"></div>

If `true`, generate vertex tangents using [*Mikktspace*](http://www.mikktspace.com/) if the input meshes don't have tangent data. When possible, it's recommended to let the 3D modeling software generate tangents on export instead on relying on this option. Tangents are required for correct display of normal and height maps, along with any material/shader features that require tangents.

If you don't need material features that require tangents, disabling this can reduce output file size and speed up importing if the source 3D file doesn't contain tangents.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_resourceimporterscene_property_meshes/force_disable_compression"></div>

[`bool`](class_bool.md) **meshes/force_disable_compression** = ``false`` <div id="class_resourceimporterscene_property_meshes/force_disable_compression"></div>

If `true`, mesh compression will not be used. Consider enabling if you notice blocky artifacts in your mesh normals or UVs, or if you have meshes that are larger than a few thousand meters in each direction.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_resourceimporterscene_property_meshes/generate_lods"></div>

[`bool`](class_bool.md) **meshes/generate_lods** = ``true`` <div id="class_resourceimporterscene_property_meshes/generate_lods"></div>

If `true`, generates lower detail variants of the mesh which will be displayed in the distance to improve rendering performance. Not all meshes benefit from LOD, especially if they are never rendered from far away. Disabling this can reduce output file size and speed up importing. See [*Mesh level of detail (LOD)*](../tutorials/3d/mesh_lod.md#doc-mesh-lod) for more information.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_resourceimporterscene_property_meshes/light_baking"></div>

[`int`](class_int.md) **meshes/light_baking** = ``1`` <div id="class_resourceimporterscene_property_meshes/light_baking"></div>

Configures the meshes' [`GeometryInstance3D.gi_mode`](#class_geometryinstance3d_property_gi_mode) in the 3D scene. If set to **Static Lightmaps**, sets the meshes' GI mode to Static and generates UV2 on import for [`LightmapGI`](class_lightmapgi.md) baking.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_resourceimporterscene_property_meshes/lightmap_texel_size"></div>

[`float`](class_float.md) **meshes/lightmap_texel_size** = ``0.2`` <div id="class_resourceimporterscene_property_meshes/lightmap_texel_size"></div>

Controls the size of each texel on the baked lightmap. A smaller value results in more precise lightmaps, at the cost of larger lightmap sizes and longer bake times.

 **Note:** Only effective if [`meshes/light_baking`](#class_resourceimporterscene_property_meshes/light_baking) is set to **Static Lightmaps**.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_resourceimporterscene_property_nodes/apply_root_scale"></div>

[`bool`](class_bool.md) **nodes/apply_root_scale** = ``true`` <div id="class_resourceimporterscene_property_nodes/apply_root_scale"></div>

If `true`, [`nodes/root_scale`](#class_resourceimporterscene_property_nodes/root_scale) will be applied to the descendant nodes, meshes, animations, bones, etc. This means that if you add a child node later on within the imported scene, it won't be scaled. If `false`, [`nodes/root_scale`](#class_resourceimporterscene_property_nodes/root_scale) will multiply the scale of the root node instead.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_resourceimporterscene_property_nodes/import_as_skeleton_bones"></div>

[`bool`](class_bool.md) **nodes/import_as_skeleton_bones** = ``false`` <div id="class_resourceimporterscene_property_nodes/import_as_skeleton_bones"></div>

Treat all nodes in the imported scene as if they are bones within a single [`Skeleton3D`](class_skeleton3d.md). Can be used to guarantee that imported animations target skeleton bones rather than nodes. May also be used to assign the `"Root"` bone in a [`BoneMap`](class_bonemap.md). See [*Retargeting 3D Skeletons*](../tutorials/assets_pipeline/retargeting_3d_skeletons) for more information.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_resourceimporterscene_property_nodes/root_name"></div>

[`String`](class_string.md) **nodes/root_name** = ``""`` <div id="class_resourceimporterscene_property_nodes/root_name"></div>

Override for the root node name. If empty, the root node will use what the scene specifies, or the file name if the scene does not specify a root name.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_resourceimporterscene_property_nodes/root_scale"></div>

[`float`](class_float.md) **nodes/root_scale** = ``1.0`` <div id="class_resourceimporterscene_property_nodes/root_scale"></div>

The uniform scale to use for the scene root. The default value of `1.0` will not perform any rescaling. See [`nodes/apply_root_scale`](#class_resourceimporterscene_property_nodes/apply_root_scale) for details of how this scale is applied.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_resourceimporterscene_property_nodes/root_type"></div>

[`String`](class_string.md) **nodes/root_type** = ``""`` <div id="class_resourceimporterscene_property_nodes/root_type"></div>

Override for the root node type. If empty, the root node will use what the scene specifies, or [`Node3D`](class_node3d.md) if the scene does not specify a root type. Using a node type that inherits from [`Node3D`](class_node3d.md) is recommended. Otherwise, you'll lose the ability to position the node directly in the 3D editor.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_resourceimporterscene_property_skins/use_named_skins"></div>

[`bool`](class_bool.md) **skins/use_named_skins** = ``true`` <div id="class_resourceimporterscene_property_skins/use_named_skins"></div>

If checked, use named [`Skin`](class_skin.md) s for animation. The [`MeshInstance3D`](class_meshinstance3d.md) node contains 3 properties of relevance here: a skeleton [`NodePath`](class_nodepath.md) pointing to the [`Skeleton3D`](class_skeleton3d.md) node (usually `..`), a mesh, and a skin:

- The [`Skeleton3D`](class_skeleton3d.md) node contains a list of bones with names, their pose and rest, a name and a parent bone.

- The mesh is all of the raw vertex data needed to display a mesh. In terms of the mesh, it knows how vertices are weight-painted and uses some internal numbering often imported from 3D modeling software.

- The skin contains the information necessary to bind this mesh onto this Skeleton3D. For every one of the internal bone IDs chosen by the 3D modeling software, it contains two things. Firstly, a matrix known as the Bind Pose Matrix, Inverse Bind Matrix, or IBM for short. Secondly, the [`Skin`](class_skin.md) contains each bone's name (if [`skins/use_named_skins`](#class_resourceimporterscene_property_skins/use_named_skins) is `true`), or the bone's index within the [`Skeleton3D`](class_skeleton3d.md) list (if [`skins/use_named_skins`](#class_resourceimporterscene_property_skins/use_named_skins) is `false`).

Together, this information is enough to tell Godot how to use the bone poses in the [`Skeleton3D`](class_skeleton3d.md) node to render the mesh from each [`MeshInstance3D`](class_meshinstance3d.md). Note that each [`MeshInstance3D`](class_meshinstance3d.md) may share binds, as is common in models exported from Blender, or each [`MeshInstance3D`](class_meshinstance3d.md) may use a separate [`Skin`](class_skin.md) object, as is common in models exported from other tools such as Maya.

[^virtual]: 本方法通常需要用户覆盖才能生效。
[^const]: 本方法无副作用，不会修改该实例的任何成员变量。
[^vararg]: 本方法除了能接受在此处描述的参数外，还能够继续接受任意数量的参数。
[^constructor]: 本方法用于构造某个类型。
[^static]: 调用本方法无需实例，可直接使用类名进行调用。
[^operator]: 本方法描述的是使用本类型作为左操作数的有效运算符。
[^bitfield]: 这个值是由下列位标志构成位掩码的整数。
[^void]: 无返回值。
