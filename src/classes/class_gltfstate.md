<!-- ⚠ 请勿编辑本文件 ⚠ -->
<!-- 本文档使用脚本从 WeDot 引擎源码仓库生成。 -->
<!-- 生成脚本：https://github.com/WeDot-Engine/WeDot/tree/master/doc/tools/make_md.py； -->
<!-- 原文件：https://github.com/WeDot-Engine/WeDot/tree/master/modules/gltf/doc_classes/GLTFState.xml。 -->

<div id="_class_gltfstate"></div>

# GLTFState

**继承：** [`Resource`](class_resource.md) **<** [`RefCounted`](class_refcounted.md) **<** [`Object`](class_object.md)

**派生：** [`FBXState`](class_fbxstate.md)

Represents all data of a glTF file.

## 描述

Contains all nodes and resources of a glTF file. This is used by [`GLTFDocument`](class_gltfdocument.md) as data storage, which allows [`GLTFDocument`](class_gltfdocument.md) and all [`GLTFDocumentExtension`](class_gltfdocumentextension.md) classes to remain stateless.

GLTFState can be populated by [`GLTFDocument`](class_gltfdocument.md) reading a file or by converting a Godot scene. Then the data can either be used to create a Godot scene or save to a glTF file. The code that converts to/from a Godot scene can be intercepted at arbitrary points by [`GLTFDocumentExtension`](class_gltfdocumentextension.md) classes. This allows for custom data to be stored in the glTF file or for custom data to be converted to/from Godot nodes.

## 属性

|||
|:-:|:--|
| [`float`](class_float.md)                                             | [`bake_fps`](class_gltfstate.md#class_gltfstate_property_bake_fps)                                 | ``30.0``               |
| [`String`](class_string.md)                                           | [`base_path`](class_gltfstate.md#class_gltfstate_property_base_path)                               | ``""``                 |
| [Array](class_array.md) [`PackedByteArray`](class_packedbytearray.md) | [`buffers`](class_gltfstate.md#class_gltfstate_property_buffers)                                   | ``[]``                 |
| [`String`](class_string.md)                                           | [`copyright`](class_gltfstate.md#class_gltfstate_property_copyright)                               | ``""``                 |
| [`bool`](class_bool.md)                                               | [`create_animations`](class_gltfstate.md#class_gltfstate_property_create_animations)               | ``true``               |
| [`String`](class_string.md)                                           | [`filename`](class_gltfstate.md#class_gltfstate_property_filename)                                 | ``""``                 |
| [`PackedByteArray`](class_packedbytearray.md)                         | [`glb_data`](class_gltfstate.md#class_gltfstate_property_glb_data)                                 | ``PackedByteArray()``  |
| [`bool`](class_bool.md)                                               | [`import_as_skeleton_bones`](class_gltfstate.md#class_gltfstate_property_import_as_skeleton_bones) | ``false``              |
| [`Dictionary`](class_dictionary.md)                                   | [`json`](class_gltfstate.md#class_gltfstate_property_json)                                         | ``{}``                 |
| [`int`](class_int.md)                                                 | [`major_version`](class_gltfstate.md#class_gltfstate_property_major_version)                       | ``0``                  |
| [`int`](class_int.md)                                                 | [`minor_version`](class_gltfstate.md#class_gltfstate_property_minor_version)                       | ``0``                  |
| [`PackedInt32Array`](class_packedint32array.md)                       | [`root_nodes`](class_gltfstate.md#class_gltfstate_property_root_nodes)                             | ``PackedInt32Array()`` |
| [`String`](class_string.md)                                           | [`scene_name`](class_gltfstate.md#class_gltfstate_property_scene_name)                             | ``""``                 |
| [`bool`](class_bool.md)                                               | [`use_named_skin_binds`](class_gltfstate.md#class_gltfstate_property_use_named_skin_binds)         | ``false``              |

## 方法

|||
|:-:|:--|
| `void`                                                                      | [`add_used_extension`](class_gltfstate.md#class_gltfstate_method_add_used_extension) ( extension_name: [`String`](class_string.md), required: [`bool`](class_bool.md) )                                              |
| [`int`](class_int.md)                                                       | [`append_data_to_buffers`](class_gltfstate.md#class_gltfstate_method_append_data_to_buffers) ( data: [`PackedByteArray`](class_packedbytearray.md), deduplication: [`bool`](class_bool.md) )                         |
| [`int`](class_int.md)                                                       | [`append_gltf_node`](class_gltfstate.md#class_gltfstate_method_append_gltf_node) ( gltf_node: [`GLTFNode`](class_gltfnode.md), godot_scene_node: [`Node`](class_node.md), parent_node_index: [`int`](class_int.md) ) |
| [Array](class_array.md) [`GLTFAccessor`](class_gltfaccessor.md)             | [`get_accessors`](class_gltfstate.md#class_gltfstate_method_get_accessors) ( )                                                                                                                                       |
| [`Variant`](class_variant.md)                                               | [`get_additional_data`](class_gltfstate.md#class_gltfstate_method_get_additional_data) ( extension_name: [`StringName`](class_stringname.md) )                                                                       |
| [`AnimationPlayer`](class_animationplayer.md)                               | [`get_animation_player`](class_gltfstate.md#class_gltfstate_method_get_animation_player) ( idx: [`int`](class_int.md) )                                                                                              |
| [`int`](class_int.md)                                                       | [`get_animation_players_count`](class_gltfstate.md#class_gltfstate_method_get_animation_players_count) ( idx: [`int`](class_int.md) )                                                                                |
| [Array](class_array.md) [`GLTFAnimation`](class_gltfanimation.md)           | [`get_animations`](class_gltfstate.md#class_gltfstate_method_get_animations) ( )                                                                                                                                     |
| [Array](class_array.md) [`GLTFBufferView`](class_gltfbufferview.md)         | [`get_buffer_views`](class_gltfstate.md#class_gltfstate_method_get_buffer_views) ( )                                                                                                                                 |
| [Array](class_array.md) [`GLTFCamera`](class_gltfcamera.md)                 | [`get_cameras`](class_gltfstate.md#class_gltfstate_method_get_cameras) ( )                                                                                                                                           |
| [`int`](class_int.md)                                                       | [`get_handle_binary_image`](class_gltfstate.md#class_gltfstate_method_get_handle_binary_image) ( )                                                                                                                   |
| [Array](class_array.md) [`Texture2D`](class_texture2d.md)                   | [`get_images`](class_gltfstate.md#class_gltfstate_method_get_images) ( )                                                                                                                                             |
| [Array](class_array.md) [`GLTFLight`](class_gltflight.md)                   | [`get_lights`](class_gltfstate.md#class_gltfstate_method_get_lights) ( )                                                                                                                                             |
| [Array](class_array.md) [`Material`](class_material.md)                     | [`get_materials`](class_gltfstate.md#class_gltfstate_method_get_materials) ( )                                                                                                                                       |
| [Array](class_array.md) [`GLTFMesh`](class_gltfmesh.md)                     | [`get_meshes`](class_gltfstate.md#class_gltfstate_method_get_meshes) ( )                                                                                                                                             |
| [`int`](class_int.md)                                                       | [`get_node_index`](class_gltfstate.md#class_gltfstate_method_get_node_index) ( scene_node: [`Node`](class_node.md) )                                                                                                 |
| [Array](class_array.md) [`GLTFNode`](class_gltfnode.md)                     | [`get_nodes`](class_gltfstate.md#class_gltfstate_method_get_nodes) ( )                                                                                                                                               |
| [`Node`](class_node.md)                                                     | [`get_scene_node`](class_gltfstate.md#class_gltfstate_method_get_scene_node) ( idx: [`int`](class_int.md) )                                                                                                          |
| [Array](class_array.md) [`GLTFSkeleton`](class_gltfskeleton.md)             | [`get_skeletons`](class_gltfstate.md#class_gltfstate_method_get_skeletons) ( )                                                                                                                                       |
| [Array](class_array.md) [`GLTFSkin`](class_gltfskin.md)                     | [`get_skins`](class_gltfstate.md#class_gltfstate_method_get_skins) ( )                                                                                                                                               |
| [Array](class_array.md) [`GLTFTextureSampler`](class_gltftexturesampler.md) | [`get_texture_samplers`](class_gltfstate.md#class_gltfstate_method_get_texture_samplers) ( )                                                                                                                         |
| [Array](class_array.md) [`GLTFTexture`](class_gltftexture.md)               | [`get_textures`](class_gltfstate.md#class_gltfstate_method_get_textures) ( )                                                                                                                                         |
| [Array](class_array.md) [`String`](class_string.md)                         | [`get_unique_animation_names`](class_gltfstate.md#class_gltfstate_method_get_unique_animation_names) ( )                                                                                                             |
| [Array](class_array.md) [`String`](class_string.md)                         | [`get_unique_names`](class_gltfstate.md#class_gltfstate_method_get_unique_names) ( )                                                                                                                                 |
| `void`                                                                      | [`set_accessors`](class_gltfstate.md#class_gltfstate_method_set_accessors) ( accessors: [Array](class_array.md) [`GLTFAccessor`](class_gltfaccessor.md) )                                                            |
| `void`                                                                      | [`set_additional_data`](class_gltfstate.md#class_gltfstate_method_set_additional_data) ( extension_name: [`StringName`](class_stringname.md), additional_data: [`Variant`](class_variant.md) )                       |
| `void`                                                                      | [`set_animations`](class_gltfstate.md#class_gltfstate_method_set_animations) ( animations: [Array](class_array.md) [`GLTFAnimation`](class_gltfanimation.md) )                                                       |
| `void`                                                                      | [`set_buffer_views`](class_gltfstate.md#class_gltfstate_method_set_buffer_views) ( buffer_views: [Array](class_array.md) [`GLTFBufferView`](class_gltfbufferview.md) )                                               |
| `void`                                                                      | [`set_cameras`](class_gltfstate.md#class_gltfstate_method_set_cameras) ( cameras: [Array](class_array.md) [`GLTFCamera`](class_gltfcamera.md) )                                                                      |
| `void`                                                                      | [`set_handle_binary_image`](class_gltfstate.md#class_gltfstate_method_set_handle_binary_image) ( method: [`int`](class_int.md) )                                                                                     |
| `void`                                                                      | [`set_images`](class_gltfstate.md#class_gltfstate_method_set_images) ( images: [Array](class_array.md) [`Texture2D`](class_texture2d.md) )                                                                           |
| `void`                                                                      | [`set_lights`](class_gltfstate.md#class_gltfstate_method_set_lights) ( lights: [Array](class_array.md) [`GLTFLight`](class_gltflight.md) )                                                                           |
| `void`                                                                      | [`set_materials`](class_gltfstate.md#class_gltfstate_method_set_materials) ( materials: [Array](class_array.md) [`Material`](class_material.md) )                                                                    |
| `void`                                                                      | [`set_meshes`](class_gltfstate.md#class_gltfstate_method_set_meshes) ( meshes: [Array](class_array.md) [`GLTFMesh`](class_gltfmesh.md) )                                                                             |
| `void`                                                                      | [`set_nodes`](class_gltfstate.md#class_gltfstate_method_set_nodes) ( nodes: [Array](class_array.md) [`GLTFNode`](class_gltfnode.md) )                                                                                |
| `void`                                                                      | [`set_skeletons`](class_gltfstate.md#class_gltfstate_method_set_skeletons) ( skeletons: [Array](class_array.md) [`GLTFSkeleton`](class_gltfskeleton.md) )                                                            |
| `void`                                                                      | [`set_skins`](class_gltfstate.md#class_gltfstate_method_set_skins) ( skins: [Array](class_array.md) [`GLTFSkin`](class_gltfskin.md) )                                                                                |
| `void`                                                                      | [`set_texture_samplers`](class_gltfstate.md#class_gltfstate_method_set_texture_samplers) ( texture_samplers: [Array](class_array.md) [`GLTFTextureSampler`](class_gltftexturesampler.md) )                           |
| `void`                                                                      | [`set_textures`](class_gltfstate.md#class_gltfstate_method_set_textures) ( textures: [Array](class_array.md) [`GLTFTexture`](class_gltftexture.md) )                                                                 |
| `void`                                                                      | [`set_unique_animation_names`](class_gltfstate.md#class_gltfstate_method_set_unique_animation_names) ( unique_animation_names: [Array](class_array.md) [`String`](class_string.md) )                                 |
| `void`                                                                      | [`set_unique_names`](class_gltfstate.md#class_gltfstate_method_set_unique_names) ( unique_names: [Array](class_array.md) [`String`](class_string.md) )                                                               |

<!-- rst-class:: classref-section-separator -->

---

## 常量

<div id="_class_gltfstate_constant_handle_binary_discard_textures"></div>

**HANDLE_BINARY_DISCARD_TEXTURES** = ``0`` <div id="class_gltfstate_constant_handle_binary_discard_textures"></div>

Discards all embedded textures and uses untextured materials.

<div id="_class_gltfstate_constant_handle_binary_extract_textures"></div>

**HANDLE_BINARY_EXTRACT_TEXTURES** = ``1`` <div id="class_gltfstate_constant_handle_binary_extract_textures"></div>

Extracts embedded textures to be reimported and compressed. Editor only. Acts as uncompressed at runtime.

<div id="_class_gltfstate_constant_handle_binary_embed_as_basisu"></div>

**HANDLE_BINARY_EMBED_AS_BASISU** = ``2`` <div id="class_gltfstate_constant_handle_binary_embed_as_basisu"></div>

Embeds textures VRAM compressed with Basis Universal into the generated scene.

<div id="_class_gltfstate_constant_handle_binary_embed_as_uncompressed"></div>

**HANDLE_BINARY_EMBED_AS_UNCOMPRESSED** = ``3`` <div id="class_gltfstate_constant_handle_binary_embed_as_uncompressed"></div>

Embeds textures compressed losslessly into the generated scene, matching old behavior.

<!-- rst-class:: classref-section-separator -->

---

## 属性说明

<div id="_class_gltfstate_property_bake_fps"></div>

[`float`](class_float.md) **bake_fps** = ``30.0`` <div id="class_gltfstate_property_bake_fps"></div>

- `void` **set_bake_fps** ( value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_bake_fps** ( )

The baking fps of the animation for either import or export.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_gltfstate_property_base_path"></div>

[`String`](class_string.md) **base_path** = ``""`` <div id="class_gltfstate_property_base_path"></div>

- `void` **set_base_path** ( value: [`String`](class_string.md) )
- [`String`](class_string.md) **get_base_path** ( )

The folder path associated with this glTF data. This is used to find other files the glTF file references, like images or binary buffers. This will be set during import when appending from a file, and will be set during export when writing to a file.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_gltfstate_property_buffers"></div>

[Array](class_array.md) [`PackedByteArray`](class_packedbytearray.md) **buffers** = ``[]`` <div id="class_gltfstate_property_buffers"></div>

- `void` **set_buffers** ( value: [Array](class_array.md) [`PackedByteArray`](class_packedbytearray.md) )
- [Array](class_array.md) [`PackedByteArray`](class_packedbytearray.md) **get_buffers** ( )

该属性目前没有描述，请帮我们\ :ref:`贡献一个 <doc_updating_the_class_reference>`\ 吧！

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_gltfstate_property_copyright"></div>

[`String`](class_string.md) **copyright** = ``""`` <div id="class_gltfstate_property_copyright"></div>

- `void` **set_copyright** ( value: [`String`](class_string.md) )
- [`String`](class_string.md) **get_copyright** ( )

The copyright string in the asset header of the glTF file. This is set during import if present and export if non-empty. See the glTF asset header documentation for more information.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_gltfstate_property_create_animations"></div>

[`bool`](class_bool.md) **create_animations** = ``true`` <div id="class_gltfstate_property_create_animations"></div>

- `void` **set_create_animations** ( value: [`bool`](class_bool.md) )
- [`bool`](class_bool.md) **get_create_animations** ( )

该属性目前没有描述，请帮我们\ :ref:`贡献一个 <doc_updating_the_class_reference>`\ 吧！

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_gltfstate_property_filename"></div>

[`String`](class_string.md) **filename** = ``""`` <div id="class_gltfstate_property_filename"></div>

- `void` **set_filename** ( value: [`String`](class_string.md) )
- [`String`](class_string.md) **get_filename** ( )

The file name associated with this glTF data. If it ends with `.gltf`, this is text-based glTF, otherwise this is binary GLB. This will be set during import when appending from a file, and will be set during export when writing to a file. If writing to a buffer, this will be an empty string.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_gltfstate_property_glb_data"></div>

[`PackedByteArray`](class_packedbytearray.md) **glb_data** = ``PackedByteArray()`` <div id="class_gltfstate_property_glb_data"></div>

- `void` **set_glb_data** ( value: [`PackedByteArray`](class_packedbytearray.md) )
- [`PackedByteArray`](class_packedbytearray.md) **get_glb_data** ( )

The binary buffer attached to a .glb file.

**Note:** The returned array is *copied* and any changes to it will not update the original property value. See [`PackedByteArray`](class_packedbytearray.md) for more details.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_gltfstate_property_import_as_skeleton_bones"></div>

[`bool`](class_bool.md) **import_as_skeleton_bones** = ``false`` <div id="class_gltfstate_property_import_as_skeleton_bones"></div>

- `void` **set_import_as_skeleton_bones** ( value: [`bool`](class_bool.md) )
- [`bool`](class_bool.md) **get_import_as_skeleton_bones** ( )

True to force all GLTFNodes in the document to be bones of a single Skeleton3D godot node.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_gltfstate_property_json"></div>

[`Dictionary`](class_dictionary.md) **json** = ``{}`` <div id="class_gltfstate_property_json"></div>

- `void` **set_json** ( value: [`Dictionary`](class_dictionary.md) )
- [`Dictionary`](class_dictionary.md) **get_json** ( )

The original raw JSON document corresponding to this GLTFState.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_gltfstate_property_major_version"></div>

[`int`](class_int.md) **major_version** = ``0`` <div id="class_gltfstate_property_major_version"></div>

- `void` **set_major_version** ( value: [`int`](class_int.md) )
- [`int`](class_int.md) **get_major_version** ( )

该属性目前没有描述，请帮我们\ :ref:`贡献一个 <doc_updating_the_class_reference>`\ 吧！

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_gltfstate_property_minor_version"></div>

[`int`](class_int.md) **minor_version** = ``0`` <div id="class_gltfstate_property_minor_version"></div>

- `void` **set_minor_version** ( value: [`int`](class_int.md) )
- [`int`](class_int.md) **get_minor_version** ( )

该属性目前没有描述，请帮我们\ :ref:`贡献一个 <doc_updating_the_class_reference>`\ 吧！

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_gltfstate_property_root_nodes"></div>

[`PackedInt32Array`](class_packedint32array.md) **root_nodes** = ``PackedInt32Array()`` <div id="class_gltfstate_property_root_nodes"></div>

- `void` **set_root_nodes** ( value: [`PackedInt32Array`](class_packedint32array.md) )
- [`PackedInt32Array`](class_packedint32array.md) **get_root_nodes** ( )

The root nodes of the glTF file. Typically, a glTF file will only have one scene, and therefore one root node. However, a glTF file may have multiple scenes and therefore multiple root nodes, which will be generated as siblings of each other and as children of the root node of the generated Godot scene.

**Note:** The returned array is *copied* and any changes to it will not update the original property value. See [`PackedInt32Array`](class_packedint32array.md) for more details.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_gltfstate_property_scene_name"></div>

[`String`](class_string.md) **scene_name** = ``""`` <div id="class_gltfstate_property_scene_name"></div>

- `void` **set_scene_name** ( value: [`String`](class_string.md) )
- [`String`](class_string.md) **get_scene_name** ( )

The name of the scene. When importing, if not specified, this will be the file name. When exporting, if specified, the scene name will be saved to the glTF file.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_gltfstate_property_use_named_skin_binds"></div>

[`bool`](class_bool.md) **use_named_skin_binds** = ``false`` <div id="class_gltfstate_property_use_named_skin_binds"></div>

- `void` **set_use_named_skin_binds** ( value: [`bool`](class_bool.md) )
- [`bool`](class_bool.md) **get_use_named_skin_binds** ( )

该属性目前没有描述，请帮我们\ :ref:`贡献一个 <doc_updating_the_class_reference>`\ 吧！

<!-- rst-class:: classref-section-separator -->

---

## 方法说明

<div id="_class_gltfstate_method_add_used_extension"></div>

`void` **add_used_extension** ( extension_name: [`String`](class_string.md), required: [`bool`](class_bool.md) )<div id="class_gltfstate_method_add_used_extension"></div>

Appends an extension to the list of extensions used by this glTF file during serialization. If `required` is true, the extension will also be added to the list of required extensions. Do not run this in [`GLTFDocumentExtension._export_post`](class_gltfdocumentextension.md#class_gltfdocumentextension_private_method__export_post), as that stage is too late to add extensions. The final list is sorted alphabetically.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_gltfstate_method_append_data_to_buffers"></div>

[`int`](class_int.md) **append_data_to_buffers** ( data: [`PackedByteArray`](class_packedbytearray.md), deduplication: [`bool`](class_bool.md) )<div id="class_gltfstate_method_append_data_to_buffers"></div>

Appends the given byte array data to the buffers and creates a [`GLTFBufferView`](class_gltfbufferview.md) for it. The index of the destination [`GLTFBufferView`](class_gltfbufferview.md) is returned. If `deduplication` is true, the buffers will first be searched for duplicate data, otherwise new bytes will always be appended.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_gltfstate_method_append_gltf_node"></div>

[`int`](class_int.md) **append_gltf_node** ( gltf_node: [`GLTFNode`](class_gltfnode.md), godot_scene_node: [`Node`](class_node.md), parent_node_index: [`int`](class_int.md) )<div id="class_gltfstate_method_append_gltf_node"></div>

Append the given [`GLTFNode`](class_gltfnode.md) to the state, and return its new index. This can be used to export one Godot node as multiple glTF nodes, or inject new glTF nodes at import time. On import, this must be called before [`GLTFDocumentExtension._generate_scene_node`](class_gltfdocumentextension.md#class_gltfdocumentextension_private_method__generate_scene_node) finishes for the parent node. On export, this must be called before [`GLTFDocumentExtension._export_node`](class_gltfdocumentextension.md#class_gltfdocumentextension_private_method__export_node) runs for the parent node.

The `godot_scene_node` parameter is the Godot scene node that corresponds to this glTF node. This is highly recommended to be set to a valid node, but may be null if there is no corresponding Godot scene node. One Godot scene node may be used for multiple glTF nodes, so if exporting multiple glTF nodes for one Godot scene node, use the same Godot scene node for each.

The `parent_node_index` parameter is the index of the parent [`GLTFNode`](class_gltfnode.md) in the state. If `-1`, the node will be a root node, otherwise the new node will be added to the parent's list of children. The index will also be written to the [`GLTFNode.parent`](class_gltfnode.md#class_gltfnode_property_parent) property of the new node.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_gltfstate_method_get_accessors"></div>

[Array](class_array.md) [`GLTFAccessor`](class_gltfaccessor.md) **get_accessors** ( )<div id="class_gltfstate_method_get_accessors"></div>

该方法目前没有描述，请帮我们\ :ref:`贡献一个 <doc_updating_the_class_reference>`\ 吧！

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_gltfstate_method_get_additional_data"></div>

[`Variant`](class_variant.md) **get_additional_data** ( extension_name: [`StringName`](class_stringname.md) )<div id="class_gltfstate_method_get_additional_data"></div>

Gets additional arbitrary data in this **GLTFState** instance. This can be used to keep per-file state data in [`GLTFDocumentExtension`](class_gltfdocumentextension.md) classes, which is important because they are stateless.

The argument should be the [`GLTFDocumentExtension`](class_gltfdocumentextension.md) name (does not have to match the extension name in the glTF file), and the return value can be anything you set. If nothing was set, the return value is null.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_gltfstate_method_get_animation_player"></div>

[`AnimationPlayer`](class_animationplayer.md) **get_animation_player** ( idx: [`int`](class_int.md) )<div id="class_gltfstate_method_get_animation_player"></div>

Returns the [`AnimationPlayer`](class_animationplayer.md) node with the given index. These nodes are only used during the export process when converting Godot [`AnimationPlayer`](class_animationplayer.md) nodes to glTF animations.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_gltfstate_method_get_animation_players_count"></div>

[`int`](class_int.md) **get_animation_players_count** ( idx: [`int`](class_int.md) )<div id="class_gltfstate_method_get_animation_players_count"></div>

Returns the number of [`AnimationPlayer`](class_animationplayer.md) nodes in this **GLTFState**. These nodes are only used during the export process when converting Godot [`AnimationPlayer`](class_animationplayer.md) nodes to glTF animations.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_gltfstate_method_get_animations"></div>

[Array](class_array.md) [`GLTFAnimation`](class_gltfanimation.md) **get_animations** ( )<div id="class_gltfstate_method_get_animations"></div>

Returns an array of all [`GLTFAnimation`](class_gltfanimation.md) s in the glTF file. When importing, these will be generated as animations in an [`AnimationPlayer`](class_animationplayer.md) node. When exporting, these will be generated from Godot [`AnimationPlayer`](class_animationplayer.md) nodes.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_gltfstate_method_get_buffer_views"></div>

[Array](class_array.md) [`GLTFBufferView`](class_gltfbufferview.md) **get_buffer_views** ( )<div id="class_gltfstate_method_get_buffer_views"></div>

该方法目前没有描述，请帮我们\ :ref:`贡献一个 <doc_updating_the_class_reference>`\ 吧！

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_gltfstate_method_get_cameras"></div>

[Array](class_array.md) [`GLTFCamera`](class_gltfcamera.md) **get_cameras** ( )<div id="class_gltfstate_method_get_cameras"></div>

Returns an array of all [`GLTFCamera`](class_gltfcamera.md) s in the glTF file. These are the cameras that the [`GLTFNode.camera`](class_gltfnode.md#class_gltfnode_property_camera) index refers to.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_gltfstate_method_get_handle_binary_image"></div>

[`int`](class_int.md) **get_handle_binary_image** ( )<div id="class_gltfstate_method_get_handle_binary_image"></div>

该方法目前没有描述，请帮我们\ :ref:`贡献一个 <doc_updating_the_class_reference>`\ 吧！

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_gltfstate_method_get_images"></div>

[Array](class_array.md) [`Texture2D`](class_texture2d.md) **get_images** ( )<div id="class_gltfstate_method_get_images"></div>

Gets the images of the glTF file as an array of [`Texture2D`](class_texture2d.md) s. These are the images that the [`GLTFTexture.src_image`](class_gltftexture.md#class_gltftexture_property_src_image) index refers to.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_gltfstate_method_get_lights"></div>

[Array](class_array.md) [`GLTFLight`](class_gltflight.md) **get_lights** ( )<div id="class_gltfstate_method_get_lights"></div>

Returns an array of all [`GLTFLight`](class_gltflight.md) s in the glTF file. These are the lights that the [`GLTFNode.light`](class_gltfnode.md#class_gltfnode_property_light) index refers to.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_gltfstate_method_get_materials"></div>

[Array](class_array.md) [`Material`](class_material.md) **get_materials** ( )<div id="class_gltfstate_method_get_materials"></div>

该方法目前没有描述，请帮我们\ :ref:`贡献一个 <doc_updating_the_class_reference>`\ 吧！

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_gltfstate_method_get_meshes"></div>

[Array](class_array.md) [`GLTFMesh`](class_gltfmesh.md) **get_meshes** ( )<div id="class_gltfstate_method_get_meshes"></div>

Returns an array of all [`GLTFMesh`](class_gltfmesh.md) es in the glTF file. These are the meshes that the [`GLTFNode.mesh`](class_gltfnode.md#class_gltfnode_property_mesh) index refers to.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_gltfstate_method_get_node_index"></div>

[`int`](class_int.md) **get_node_index** ( scene_node: [`Node`](class_node.md) )<div id="class_gltfstate_method_get_node_index"></div>

Returns the index of the [`GLTFNode`](class_gltfnode.md) corresponding to this Godot scene node. This is the inverse of [`get_scene_node`](class_gltfstate.md#class_gltfstate_method_get_scene_node). Useful during the export process.

 **Note:** Not every Godot scene node will have a corresponding [`GLTFNode`](class_gltfnode.md), and not every [`GLTFNode`](class_gltfnode.md) will have a scene node generated. If there is no [`GLTFNode`](class_gltfnode.md) index for this scene node, `-1` is returned.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_gltfstate_method_get_nodes"></div>

[Array](class_array.md) [`GLTFNode`](class_gltfnode.md) **get_nodes** ( )<div id="class_gltfstate_method_get_nodes"></div>

Returns an array of all [`GLTFNode`](class_gltfnode.md) s in the glTF file. These are the nodes that [`GLTFNode.children`](class_gltfnode.md#class_gltfnode_property_children) and [`root_nodes`](class_gltfstate.md#class_gltfstate_property_root_nodes) refer to. This includes nodes that may not be generated in the Godot scene, or nodes that may generate multiple Godot scene nodes.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_gltfstate_method_get_scene_node"></div>

[`Node`](class_node.md) **get_scene_node** ( idx: [`int`](class_int.md) )<div id="class_gltfstate_method_get_scene_node"></div>

Returns the Godot scene node that corresponds to the same index as the [`GLTFNode`](class_gltfnode.md) it was generated from. This is the inverse of [`get_node_index`](class_gltfstate.md#class_gltfstate_method_get_node_index). Useful during the import process.

 **Note:** Not every [`GLTFNode`](class_gltfnode.md) will have a scene node generated, and not every generated scene node will have a corresponding [`GLTFNode`](class_gltfnode.md). If there is no scene node for this [`GLTFNode`](class_gltfnode.md) index, `null` is returned.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_gltfstate_method_get_skeletons"></div>

[Array](class_array.md) [`GLTFSkeleton`](class_gltfskeleton.md) **get_skeletons** ( )<div id="class_gltfstate_method_get_skeletons"></div>

Returns an array of all [`GLTFSkeleton`](class_gltfskeleton.md) s in the glTF file. These are the skeletons that the [`GLTFNode.skeleton`](class_gltfnode.md#class_gltfnode_property_skeleton) index refers to.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_gltfstate_method_get_skins"></div>

[Array](class_array.md) [`GLTFSkin`](class_gltfskin.md) **get_skins** ( )<div id="class_gltfstate_method_get_skins"></div>

Returns an array of all [`GLTFSkin`](class_gltfskin.md) s in the glTF file. These are the skins that the [`GLTFNode.skin`](class_gltfnode.md#class_gltfnode_property_skin) index refers to.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_gltfstate_method_get_texture_samplers"></div>

[Array](class_array.md) [`GLTFTextureSampler`](class_gltftexturesampler.md) **get_texture_samplers** ( )<div id="class_gltfstate_method_get_texture_samplers"></div>

Retrieves the array of texture samplers that are used by the textures contained in the glTF.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_gltfstate_method_get_textures"></div>

[Array](class_array.md) [`GLTFTexture`](class_gltftexture.md) **get_textures** ( )<div id="class_gltfstate_method_get_textures"></div>

该方法目前没有描述，请帮我们\ :ref:`贡献一个 <doc_updating_the_class_reference>`\ 吧！

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_gltfstate_method_get_unique_animation_names"></div>

[Array](class_array.md) [`String`](class_string.md) **get_unique_animation_names** ( )<div id="class_gltfstate_method_get_unique_animation_names"></div>

Returns an array of unique animation names. This is only used during the import process.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_gltfstate_method_get_unique_names"></div>

[Array](class_array.md) [`String`](class_string.md) **get_unique_names** ( )<div id="class_gltfstate_method_get_unique_names"></div>

Returns an array of unique node names. This is used in both the import process and export process.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_gltfstate_method_set_accessors"></div>

`void` **set_accessors** ( accessors: [Array](class_array.md) [`GLTFAccessor`](class_gltfaccessor.md) )<div id="class_gltfstate_method_set_accessors"></div>

该方法目前没有描述，请帮我们\ :ref:`贡献一个 <doc_updating_the_class_reference>`\ 吧！

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_gltfstate_method_set_additional_data"></div>

`void` **set_additional_data** ( extension_name: [`StringName`](class_stringname.md), additional_data: [`Variant`](class_variant.md) )<div id="class_gltfstate_method_set_additional_data"></div>

Sets additional arbitrary data in this **GLTFState** instance. This can be used to keep per-file state data in [`GLTFDocumentExtension`](class_gltfdocumentextension.md) classes, which is important because they are stateless.

The first argument should be the [`GLTFDocumentExtension`](class_gltfdocumentextension.md) name (does not have to match the extension name in the glTF file), and the second argument can be anything you want.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_gltfstate_method_set_animations"></div>

`void` **set_animations** ( animations: [Array](class_array.md) [`GLTFAnimation`](class_gltfanimation.md) )<div id="class_gltfstate_method_set_animations"></div>

Sets the [`GLTFAnimation`](class_gltfanimation.md) s in the state. When importing, these will be generated as animations in an [`AnimationPlayer`](class_animationplayer.md) node. When exporting, these will be generated from Godot [`AnimationPlayer`](class_animationplayer.md) nodes.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_gltfstate_method_set_buffer_views"></div>

`void` **set_buffer_views** ( buffer_views: [Array](class_array.md) [`GLTFBufferView`](class_gltfbufferview.md) )<div id="class_gltfstate_method_set_buffer_views"></div>

该方法目前没有描述，请帮我们\ :ref:`贡献一个 <doc_updating_the_class_reference>`\ 吧！

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_gltfstate_method_set_cameras"></div>

`void` **set_cameras** ( cameras: [Array](class_array.md) [`GLTFCamera`](class_gltfcamera.md) )<div id="class_gltfstate_method_set_cameras"></div>

Sets the [`GLTFCamera`](class_gltfcamera.md) s in the state. These are the cameras that the [`GLTFNode.camera`](class_gltfnode.md#class_gltfnode_property_camera) index refers to.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_gltfstate_method_set_handle_binary_image"></div>

`void` **set_handle_binary_image** ( method: [`int`](class_int.md) )<div id="class_gltfstate_method_set_handle_binary_image"></div>

该方法目前没有描述，请帮我们\ :ref:`贡献一个 <doc_updating_the_class_reference>`\ 吧！

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_gltfstate_method_set_images"></div>

`void` **set_images** ( images: [Array](class_array.md) [`Texture2D`](class_texture2d.md) )<div id="class_gltfstate_method_set_images"></div>

Sets the images in the state stored as an array of [`Texture2D`](class_texture2d.md) s. This can be used during export. These are the images that the [`GLTFTexture.src_image`](class_gltftexture.md#class_gltftexture_property_src_image) index refers to.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_gltfstate_method_set_lights"></div>

`void` **set_lights** ( lights: [Array](class_array.md) [`GLTFLight`](class_gltflight.md) )<div id="class_gltfstate_method_set_lights"></div>

Sets the [`GLTFLight`](class_gltflight.md) s in the state. These are the lights that the [`GLTFNode.light`](class_gltfnode.md#class_gltfnode_property_light) index refers to.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_gltfstate_method_set_materials"></div>

`void` **set_materials** ( materials: [Array](class_array.md) [`Material`](class_material.md) )<div id="class_gltfstate_method_set_materials"></div>

该方法目前没有描述，请帮我们\ :ref:`贡献一个 <doc_updating_the_class_reference>`\ 吧！

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_gltfstate_method_set_meshes"></div>

`void` **set_meshes** ( meshes: [Array](class_array.md) [`GLTFMesh`](class_gltfmesh.md) )<div id="class_gltfstate_method_set_meshes"></div>

Sets the [`GLTFMesh`](class_gltfmesh.md) es in the state. These are the meshes that the [`GLTFNode.mesh`](class_gltfnode.md#class_gltfnode_property_mesh) index refers to.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_gltfstate_method_set_nodes"></div>

`void` **set_nodes** ( nodes: [Array](class_array.md) [`GLTFNode`](class_gltfnode.md) )<div id="class_gltfstate_method_set_nodes"></div>

Sets the [`GLTFNode`](class_gltfnode.md) s in the state. These are the nodes that [`GLTFNode.children`](class_gltfnode.md#class_gltfnode_property_children) and [`root_nodes`](class_gltfstate.md#class_gltfstate_property_root_nodes) refer to. Some of the nodes set here may not be generated in the Godot scene, or may generate multiple Godot scene nodes.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_gltfstate_method_set_skeletons"></div>

`void` **set_skeletons** ( skeletons: [Array](class_array.md) [`GLTFSkeleton`](class_gltfskeleton.md) )<div id="class_gltfstate_method_set_skeletons"></div>

Sets the [`GLTFSkeleton`](class_gltfskeleton.md) s in the state. These are the skeletons that the [`GLTFNode.skeleton`](class_gltfnode.md#class_gltfnode_property_skeleton) index refers to.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_gltfstate_method_set_skins"></div>

`void` **set_skins** ( skins: [Array](class_array.md) [`GLTFSkin`](class_gltfskin.md) )<div id="class_gltfstate_method_set_skins"></div>

Sets the [`GLTFSkin`](class_gltfskin.md) s in the state. These are the skins that the [`GLTFNode.skin`](class_gltfnode.md#class_gltfnode_property_skin) index refers to.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_gltfstate_method_set_texture_samplers"></div>

`void` **set_texture_samplers** ( texture_samplers: [Array](class_array.md) [`GLTFTextureSampler`](class_gltftexturesampler.md) )<div id="class_gltfstate_method_set_texture_samplers"></div>

Sets the array of texture samplers that are used by the textures contained in the glTF.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_gltfstate_method_set_textures"></div>

`void` **set_textures** ( textures: [Array](class_array.md) [`GLTFTexture`](class_gltftexture.md) )<div id="class_gltfstate_method_set_textures"></div>

该方法目前没有描述，请帮我们\ :ref:`贡献一个 <doc_updating_the_class_reference>`\ 吧！

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_gltfstate_method_set_unique_animation_names"></div>

`void` **set_unique_animation_names** ( unique_animation_names: [Array](class_array.md) [`String`](class_string.md) )<div id="class_gltfstate_method_set_unique_animation_names"></div>

Sets the unique animation names in the state. This is only used during the import process.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_gltfstate_method_set_unique_names"></div>

`void` **set_unique_names** ( unique_names: [Array](class_array.md) [`String`](class_string.md) )<div id="class_gltfstate_method_set_unique_names"></div>

Sets the unique node names in the state. This is used in both the import process and export process.

[^virtual]: 本方法通常需要用户覆盖才能生效。
[^const]: 本方法无副作用，不会修改该实例的任何成员变量。
[^vararg]: 本方法除了能接受在此处描述的参数外，还能够继续接受任意数量的参数。
[^constructor]: 本方法用于构造某个类型。
[^static]: 调用本方法无需实例，可直接使用类名进行调用。
[^operator]: 本方法描述的是使用本类型作为左操作数的有效运算符。
[^bitfield]: 这个值是由下列位标志构成位掩码的整数。
[^void]: 无返回值。
