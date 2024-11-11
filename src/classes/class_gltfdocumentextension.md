<!-- ⚠ 请勿编辑本文件 ⚠ -->
<!-- 本文档使用脚本从 WeDot 引擎源码仓库生成。 -->
<!-- 生成脚本：https://github.com/WeDot-Engine/WeDot/tree/master/doc/tools/make_md.py； -->
<!-- 原文件：https://github.com/WeDot-Engine/WeDot/tree/master/modules/gltf/doc_classes/GLTFDocumentExtension.xml。 -->

<div id="_class_gltfdocumentextension"></div>

# GLTFDocumentExtension

**继承：** [`Resource`](class_resource.md) **<** [`RefCounted`](class_refcounted.md) **<** [`Object`](class_object.md)

**派生：** [`GLTFDocumentExtensionConvertImporterMesh`](class_gltfdocumentextensionconvertimportermesh.md)

[`GLTFDocument`](class_gltfdocument.md) extension class.

## 描述

Extends the functionality of the [`GLTFDocument`](class_gltfdocument.md) class by allowing you to run arbitrary code at various stages of glTF import or export.

To use, make a new class extending GLTFDocumentExtension, override any methods you need, make an instance of your class, and register it using [`GLTFDocument.register_gltf_document_extension`](class_gltfdocument.md#class_gltfdocument_method_register_gltf_document_extension).

 **Note:** Like GLTFDocument itself, all GLTFDocumentExtension classes must be stateless in order to function properly. If you need to store data, use the `set_additional_data` and `get_additional_data` methods in [`GLTFState`](class_gltfstate.md) or [`GLTFNode`](class_gltfnode.md).

## 方法

|||
|:-:|:--|
| `void`                                                        | [`_convert_scene_node`](class_gltfdocumentextension.md#class_gltfdocumentextension_private_method__convert_scene_node) ( state: [`GLTFState`](class_gltfstate.md), gltf_node: [`GLTFNode`](class_gltfnode.md), scene_node: [`Node`](class_node.md) ) virtual[^virtual]                                                                                                                                              |
| [Error](#enum_@globalscope_error)                             | [`_export_node`](class_gltfdocumentextension.md#class_gltfdocumentextension_private_method__export_node) ( state: [`GLTFState`](class_gltfstate.md), gltf_node: [`GLTFNode`](class_gltfnode.md), json: [`Dictionary`](class_dictionary.md), node: [`Node`](class_node.md) ) virtual[^virtual]                                                                                                                       |
| [`GLTFObjectModelProperty`](class_gltfobjectmodelproperty.md) | [`_export_object_model_property`](class_gltfdocumentextension.md#class_gltfdocumentextension_private_method__export_object_model_property) ( state: [`GLTFState`](class_gltfstate.md), node_path: [`NodePath`](class_nodepath.md), godot_node: [`Node`](class_node.md), gltf_node_index: [`int`](class_int.md), target_object: [`Object`](class_object.md), target_depth: [`int`](class_int.md) ) virtual[^virtual] |
| [Error](#enum_@globalscope_error)                             | [`_export_post`](class_gltfdocumentextension.md#class_gltfdocumentextension_private_method__export_post) ( state: [`GLTFState`](class_gltfstate.md) ) virtual[^virtual]                                                                                                                                                                                                                                             |
| [Error](#enum_@globalscope_error)                             | [`_export_post_convert`](class_gltfdocumentextension.md#class_gltfdocumentextension_private_method__export_post_convert) ( state: [`GLTFState`](class_gltfstate.md), root: [`Node`](class_node.md) ) virtual[^virtual]                                                                                                                                                                                              |
| [Error](#enum_@globalscope_error)                             | [`_export_preflight`](class_gltfdocumentextension.md#class_gltfdocumentextension_private_method__export_preflight) ( state: [`GLTFState`](class_gltfstate.md), root: [`Node`](class_node.md) ) virtual[^virtual]                                                                                                                                                                                                    |
| [Error](#enum_@globalscope_error)                             | [`_export_preserialize`](class_gltfdocumentextension.md#class_gltfdocumentextension_private_method__export_preserialize) ( state: [`GLTFState`](class_gltfstate.md) ) virtual[^virtual]                                                                                                                                                                                                                             |
| [`Node3D`](class_node3d.md)                                   | [`_generate_scene_node`](class_gltfdocumentextension.md#class_gltfdocumentextension_private_method__generate_scene_node) ( state: [`GLTFState`](class_gltfstate.md), gltf_node: [`GLTFNode`](class_gltfnode.md), scene_parent: [`Node`](class_node.md) ) virtual[^virtual]                                                                                                                                          |
| [`String`](class_string.md)                                   | [`_get_image_file_extension`](class_gltfdocumentextension.md#class_gltfdocumentextension_private_method__get_image_file_extension) ( ) virtual[^virtual]                                                                                                                                                                                                                                                            |
| [`PackedStringArray`](class_packedstringarray.md)             | [`_get_saveable_image_formats`](class_gltfdocumentextension.md#class_gltfdocumentextension_private_method__get_saveable_image_formats) ( ) virtual[^virtual]                                                                                                                                                                                                                                                        |
| [`PackedStringArray`](class_packedstringarray.md)             | [`_get_supported_extensions`](class_gltfdocumentextension.md#class_gltfdocumentextension_private_method__get_supported_extensions) ( ) virtual[^virtual]                                                                                                                                                                                                                                                            |
| [Error](#enum_@globalscope_error)                             | [`_import_node`](class_gltfdocumentextension.md#class_gltfdocumentextension_private_method__import_node) ( state: [`GLTFState`](class_gltfstate.md), gltf_node: [`GLTFNode`](class_gltfnode.md), json: [`Dictionary`](class_dictionary.md), node: [`Node`](class_node.md) ) virtual[^virtual]                                                                                                                       |
| [`GLTFObjectModelProperty`](class_gltfobjectmodelproperty.md) | [`_import_object_model_property`](class_gltfdocumentextension.md#class_gltfdocumentextension_private_method__import_object_model_property) ( state: [`GLTFState`](class_gltfstate.md), split_json_pointer: [`PackedStringArray`](class_packedstringarray.md), partial_paths: [Array](class_array.md) [`NodePath`](class_nodepath.md) ) virtual[^virtual]                                                            |
| [Error](#enum_@globalscope_error)                             | [`_import_post`](class_gltfdocumentextension.md#class_gltfdocumentextension_private_method__import_post) ( state: [`GLTFState`](class_gltfstate.md), root: [`Node`](class_node.md) ) virtual[^virtual]                                                                                                                                                                                                              |
| [Error](#enum_@globalscope_error)                             | [`_import_post_parse`](class_gltfdocumentextension.md#class_gltfdocumentextension_private_method__import_post_parse) ( state: [`GLTFState`](class_gltfstate.md) ) virtual[^virtual]                                                                                                                                                                                                                                 |
| [Error](#enum_@globalscope_error)                             | [`_import_pre_generate`](class_gltfdocumentextension.md#class_gltfdocumentextension_private_method__import_pre_generate) ( state: [`GLTFState`](class_gltfstate.md) ) virtual[^virtual]                                                                                                                                                                                                                             |
| [Error](#enum_@globalscope_error)                             | [`_import_preflight`](class_gltfdocumentextension.md#class_gltfdocumentextension_private_method__import_preflight) ( state: [`GLTFState`](class_gltfstate.md), extensions: [`PackedStringArray`](class_packedstringarray.md) ) virtual[^virtual]                                                                                                                                                                    |
| [Error](#enum_@globalscope_error)                             | [`_parse_image_data`](class_gltfdocumentextension.md#class_gltfdocumentextension_private_method__parse_image_data) ( state: [`GLTFState`](class_gltfstate.md), image_data: [`PackedByteArray`](class_packedbytearray.md), mime_type: [`String`](class_string.md), ret_image: [`Image`](class_image.md) ) virtual[^virtual]                                                                                          |
| [Error](#enum_@globalscope_error)                             | [`_parse_node_extensions`](class_gltfdocumentextension.md#class_gltfdocumentextension_private_method__parse_node_extensions) ( state: [`GLTFState`](class_gltfstate.md), gltf_node: [`GLTFNode`](class_gltfnode.md), extensions: [`Dictionary`](class_dictionary.md) ) virtual[^virtual]                                                                                                                            |
| [Error](#enum_@globalscope_error)                             | [`_parse_texture_json`](class_gltfdocumentextension.md#class_gltfdocumentextension_private_method__parse_texture_json) ( state: [`GLTFState`](class_gltfstate.md), texture_json: [`Dictionary`](class_dictionary.md), ret_gltf_texture: [`GLTFTexture`](class_gltftexture.md) ) virtual[^virtual]                                                                                                                   |
| [Error](#enum_@globalscope_error)                             | [`_save_image_at_path`](class_gltfdocumentextension.md#class_gltfdocumentextension_private_method__save_image_at_path) ( state: [`GLTFState`](class_gltfstate.md), image: [`Image`](class_image.md), file_path: [`String`](class_string.md), image_format: [`String`](class_string.md), lossy_quality: [`float`](class_float.md) ) virtual[^virtual]                                                                |
| [`PackedByteArray`](class_packedbytearray.md)                 | [`_serialize_image_to_bytes`](class_gltfdocumentextension.md#class_gltfdocumentextension_private_method__serialize_image_to_bytes) ( state: [`GLTFState`](class_gltfstate.md), image: [`Image`](class_image.md), image_dict: [`Dictionary`](class_dictionary.md), image_format: [`String`](class_string.md), lossy_quality: [`float`](class_float.md) ) virtual[^virtual]                                           |
| [Error](#enum_@globalscope_error)                             | [`_serialize_texture_json`](class_gltfdocumentextension.md#class_gltfdocumentextension_private_method__serialize_texture_json) ( state: [`GLTFState`](class_gltfstate.md), texture_json: [`Dictionary`](class_dictionary.md), gltf_texture: [`GLTFTexture`](class_gltftexture.md), image_format: [`String`](class_string.md) ) virtual[^virtual]                                                                    |

<!-- rst-class:: classref-section-separator -->

---

## 方法说明

<div id="_class_gltfdocumentextension_private_method__convert_scene_node"></div>

`void` **_convert_scene_node** ( state: [`GLTFState`](class_gltfstate.md), gltf_node: [`GLTFNode`](class_gltfnode.md), scene_node: [`Node`](class_node.md) ) virtual[^virtual]<div id="class_gltfdocumentextension_private_method__convert_scene_node"></div>

Part of the export process. This method is run after [`_export_preflight`](class_gltfdocumentextension.md#class_gltfdocumentextension_private_method__export_preflight) and before [`_export_post_convert`](class_gltfdocumentextension.md#class_gltfdocumentextension_private_method__export_post_convert).

Runs when converting the data from a Godot scene node. This method can be used to process the Godot scene node data into a format that can be used by [`_export_node`](class_gltfdocumentextension.md#class_gltfdocumentextension_private_method__export_node).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_gltfdocumentextension_private_method__export_node"></div>

[Error](#enum_@globalscope_error) **_export_node** ( state: [`GLTFState`](class_gltfstate.md), gltf_node: [`GLTFNode`](class_gltfnode.md), json: [`Dictionary`](class_dictionary.md), node: [`Node`](class_node.md) ) virtual[^virtual]<div id="class_gltfdocumentextension_private_method__export_node"></div>

Part of the export process. This method is run after [`_get_saveable_image_formats`](class_gltfdocumentextension.md#class_gltfdocumentextension_private_method__get_saveable_image_formats) and before [`_export_post`](class_gltfdocumentextension.md#class_gltfdocumentextension_private_method__export_post). If this **GLTFDocumentExtension** is used for exporting images, this runs after [`_serialize_texture_json`](class_gltfdocumentextension.md#class_gltfdocumentextension_private_method__serialize_texture_json).

This method can be used to modify the final JSON of each node. Data should be primarily stored in `gltf_node` prior to serializing the JSON, but the original Godot `node` is also provided if available. The node may be null if not available, such as when exporting glTF data not generated from a Godot scene.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_gltfdocumentextension_private_method__export_object_model_property"></div>

[`GLTFObjectModelProperty`](class_gltfobjectmodelproperty.md) **_export_object_model_property** ( state: [`GLTFState`](class_gltfstate.md), node_path: [`NodePath`](class_nodepath.md), godot_node: [`Node`](class_node.md), gltf_node_index: [`int`](class_int.md), target_object: [`Object`](class_object.md), target_depth: [`int`](class_int.md) ) virtual[^virtual]<div id="class_gltfdocumentextension_private_method__export_object_model_property"></div>

Part of the export process. Allows GLTFDocumentExtension classes to provide mappings for properties of nodes in the Godot scene tree, to JSON pointers to glTF properties, as defined by the glTF object model.

Returns a [`GLTFObjectModelProperty`](class_gltfobjectmodelproperty.md) instance that defines how the property should be mapped. If your extension can't handle the property, return null, or an instance without any JSON pointers (see [`GLTFObjectModelProperty.has_json_pointers`](class_gltfobjectmodelproperty.md#class_gltfobjectmodelproperty_method_has_json_pointers)). You should use [`GLTFObjectModelProperty.set_types`](class_gltfobjectmodelproperty.md#class_gltfobjectmodelproperty_method_set_types) to set the types, and set the JSON pointer(s) using the [`GLTFObjectModelProperty.json_pointers`](class_gltfobjectmodelproperty.md#class_gltfobjectmodelproperty_property_json_pointers) property.

The parameters provide context for the property, including the NodePath, the Godot node, the GLTF node index, and the target object. The `target_object` will be equal to `godot_node` if no sub-object can be found, otherwise it will point to a sub-object. For example, if the path is `^"A/B/C/MeshInstance3D:mesh:surface_0/material:emission_intensity"`, it will get the node, then the mesh, and then the material, so `target_object` will be the [`Material`](class_material.md) resource, and `target_depth` will be 2 because 2 levels were traversed to get to the target.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_gltfdocumentextension_private_method__export_post"></div>

[Error](#enum_@globalscope_error) **_export_post** ( state: [`GLTFState`](class_gltfstate.md) ) virtual[^virtual]<div id="class_gltfdocumentextension_private_method__export_post"></div>

Part of the export process. This method is run last, after all other parts of the export process.

This method can be used to modify the final JSON of the generated glTF file.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_gltfdocumentextension_private_method__export_post_convert"></div>

[Error](#enum_@globalscope_error) **_export_post_convert** ( state: [`GLTFState`](class_gltfstate.md), root: [`Node`](class_node.md) ) virtual[^virtual]<div id="class_gltfdocumentextension_private_method__export_post_convert"></div>

Part of the export process. This method is run after [`_convert_scene_node`](class_gltfdocumentextension.md#class_gltfdocumentextension_private_method__convert_scene_node) and before [`_export_preserialize`](class_gltfdocumentextension.md#class_gltfdocumentextension_private_method__export_preserialize).

This method can be used to modify the converted node data structures before serialization with any additional data from the scene tree.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_gltfdocumentextension_private_method__export_preflight"></div>

[Error](#enum_@globalscope_error) **_export_preflight** ( state: [`GLTFState`](class_gltfstate.md), root: [`Node`](class_node.md) ) virtual[^virtual]<div id="class_gltfdocumentextension_private_method__export_preflight"></div>

Part of the export process. This method is run first, before all other parts of the export process.

The return value is used to determine if this **GLTFDocumentExtension** instance should be used for exporting a given glTF file. If [`@GlobalScope.OK`](class_@globalscope.md#class_@globalscope_constant_ok), the export will use this **GLTFDocumentExtension** instance. If not overridden, [`@GlobalScope.OK`](class_@globalscope.md#class_@globalscope_constant_ok) is returned.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_gltfdocumentextension_private_method__export_preserialize"></div>

[Error](#enum_@globalscope_error) **_export_preserialize** ( state: [`GLTFState`](class_gltfstate.md) ) virtual[^virtual]<div id="class_gltfdocumentextension_private_method__export_preserialize"></div>

Part of the export process. This method is run after [`_export_post_convert`](class_gltfdocumentextension.md#class_gltfdocumentextension_private_method__export_post_convert) and before [`_get_saveable_image_formats`](class_gltfdocumentextension.md#class_gltfdocumentextension_private_method__get_saveable_image_formats).

This method can be used to alter the state before performing serialization. It runs every time when generating a buffer with [`GLTFDocument.generate_buffer`](class_gltfdocument.md#class_gltfdocument_method_generate_buffer) or writing to the file system with [`GLTFDocument.write_to_filesystem`](class_gltfdocument.md#class_gltfdocument_method_write_to_filesystem).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_gltfdocumentextension_private_method__generate_scene_node"></div>

[`Node3D`](class_node3d.md) **_generate_scene_node** ( state: [`GLTFState`](class_gltfstate.md), gltf_node: [`GLTFNode`](class_gltfnode.md), scene_parent: [`Node`](class_node.md) ) virtual[^virtual]<div id="class_gltfdocumentextension_private_method__generate_scene_node"></div>

Part of the import process. This method is run after [`_import_pre_generate`](class_gltfdocumentextension.md#class_gltfdocumentextension_private_method__import_pre_generate) and before [`_import_node`](class_gltfdocumentextension.md#class_gltfdocumentextension_private_method__import_node).

Runs when generating a Godot scene node from a GLTFNode. The returned node will be added to the scene tree. Multiple nodes can be generated in this step if they are added as a child of the returned node.

 **Note:** The `scene_parent` parameter may be null if this is the single root node.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_gltfdocumentextension_private_method__get_image_file_extension"></div>

[`String`](class_string.md) **_get_image_file_extension** ( ) virtual[^virtual]<div id="class_gltfdocumentextension_private_method__get_image_file_extension"></div>

Returns the file extension to use for saving image data into, for example, `".png"`. If defined, when this extension is used to handle images, and the images are saved to a separate file, the image bytes will be copied to a file with this extension. If this is set, there should be a [`ResourceImporter`](class_resourceimporter.md) class able to import the file. If not defined or empty, Godot will save the image into a PNG file.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_gltfdocumentextension_private_method__get_saveable_image_formats"></div>

[`PackedStringArray`](class_packedstringarray.md) **_get_saveable_image_formats** ( ) virtual[^virtual]<div id="class_gltfdocumentextension_private_method__get_saveable_image_formats"></div>

Part of the export process. This method is run after [`_convert_scene_node`](class_gltfdocumentextension.md#class_gltfdocumentextension_private_method__convert_scene_node) and before [`_export_node`](class_gltfdocumentextension.md#class_gltfdocumentextension_private_method__export_node).

Returns an array of the image formats that can be saved/exported by this extension. This extension will only be selected as the image exporter if the [`GLTFDocument`](class_gltfdocument.md)'s [`GLTFDocument.image_format`](class_gltfdocument.md#class_gltfdocument_property_image_format) is in this array. If this **GLTFDocumentExtension** is selected as the image exporter, one of the [`_save_image_at_path`](class_gltfdocumentextension.md#class_gltfdocumentextension_private_method__save_image_at_path) or [`_serialize_image_to_bytes`](class_gltfdocumentextension.md#class_gltfdocumentextension_private_method__serialize_image_to_bytes) methods will run next, otherwise [`_export_node`](class_gltfdocumentextension.md#class_gltfdocumentextension_private_method__export_node) will run next. If the format name contains `"Lossy"`, the lossy quality slider will be displayed.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_gltfdocumentextension_private_method__get_supported_extensions"></div>

[`PackedStringArray`](class_packedstringarray.md) **_get_supported_extensions** ( ) virtual[^virtual]<div id="class_gltfdocumentextension_private_method__get_supported_extensions"></div>

Part of the import process. This method is run after [`_import_preflight`](class_gltfdocumentextension.md#class_gltfdocumentextension_private_method__import_preflight) and before [`_parse_node_extensions`](class_gltfdocumentextension.md#class_gltfdocumentextension_private_method__parse_node_extensions).

Returns an array of the glTF extensions supported by this GLTFDocumentExtension class. This is used to validate if a glTF file with required extensions can be loaded.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_gltfdocumentextension_private_method__import_node"></div>

[Error](#enum_@globalscope_error) **_import_node** ( state: [`GLTFState`](class_gltfstate.md), gltf_node: [`GLTFNode`](class_gltfnode.md), json: [`Dictionary`](class_dictionary.md), node: [`Node`](class_node.md) ) virtual[^virtual]<div id="class_gltfdocumentextension_private_method__import_node"></div>

Part of the import process. This method is run after [`_generate_scene_node`](class_gltfdocumentextension.md#class_gltfdocumentextension_private_method__generate_scene_node) and before [`_import_post`](class_gltfdocumentextension.md#class_gltfdocumentextension_private_method__import_post).

This method can be used to make modifications to each of the generated Godot scene nodes.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_gltfdocumentextension_private_method__import_object_model_property"></div>

[`GLTFObjectModelProperty`](class_gltfobjectmodelproperty.md) **_import_object_model_property** ( state: [`GLTFState`](class_gltfstate.md), split_json_pointer: [`PackedStringArray`](class_packedstringarray.md), partial_paths: [Array](class_array.md) [`NodePath`](class_nodepath.md) ) virtual[^virtual]<div id="class_gltfdocumentextension_private_method__import_object_model_property"></div>

Part of the import process. Allows GLTFDocumentExtension classes to provide mappings for JSON pointers to glTF properties, as defined by the glTF object model, to properties of nodes in the Godot scene tree.

Returns a [`GLTFObjectModelProperty`](class_gltfobjectmodelproperty.md) instance that defines how the property should be mapped. If your extension can't handle the property, return null, or an instance without any NodePaths (see [`GLTFObjectModelProperty.has_node_paths`](class_gltfobjectmodelproperty.md#class_gltfobjectmodelproperty_method_has_node_paths)). You should use [`GLTFObjectModelProperty.set_types`](class_gltfobjectmodelproperty.md#class_gltfobjectmodelproperty_method_set_types) to set the types, and [`GLTFObjectModelProperty.append_path_to_property`](class_gltfobjectmodelproperty.md#class_gltfobjectmodelproperty_method_append_path_to_property) function is useful for most simple cases.

In many cases, `partial_paths` will contain the start of a path, allowing the extension to complete the path. For example, for `/nodes/3/extensions/MY_ext/prop`, Godot will pass you a NodePath that leads to node 3, so the GLTFDocumentExtension class only needs to resolve the last `MY_ext/prop` part of the path. In this example, the extension should check `split.size() > 4 and split[0] == "nodes" and split[2] == "extensions" and split[3] == "MY_ext"` at the start of the function to check if this JSON pointer applies to it, then it can use `partial_paths` and handle `split[4]`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_gltfdocumentextension_private_method__import_post"></div>

[Error](#enum_@globalscope_error) **_import_post** ( state: [`GLTFState`](class_gltfstate.md), root: [`Node`](class_node.md) ) virtual[^virtual]<div id="class_gltfdocumentextension_private_method__import_post"></div>

Part of the import process. This method is run last, after all other parts of the import process.

This method can be used to modify the final Godot scene generated by the import process.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_gltfdocumentextension_private_method__import_post_parse"></div>

[Error](#enum_@globalscope_error) **_import_post_parse** ( state: [`GLTFState`](class_gltfstate.md) ) virtual[^virtual]<div id="class_gltfdocumentextension_private_method__import_post_parse"></div>

Part of the import process. This method is run after [`_parse_node_extensions`](class_gltfdocumentextension.md#class_gltfdocumentextension_private_method__parse_node_extensions) and before [`_import_pre_generate`](class_gltfdocumentextension.md#class_gltfdocumentextension_private_method__import_pre_generate).

This method can be used to modify any of the data imported so far after parsing each node, but before generating the scene or any of its nodes.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_gltfdocumentextension_private_method__import_pre_generate"></div>

[Error](#enum_@globalscope_error) **_import_pre_generate** ( state: [`GLTFState`](class_gltfstate.md) ) virtual[^virtual]<div id="class_gltfdocumentextension_private_method__import_pre_generate"></div>

Part of the import process. This method is run after [`_import_post_parse`](class_gltfdocumentextension.md#class_gltfdocumentextension_private_method__import_post_parse) and before [`_generate_scene_node`](class_gltfdocumentextension.md#class_gltfdocumentextension_private_method__generate_scene_node).

This method can be used to modify or read from any of the processed data structures, before generating the nodes and then running the final per-node import step.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_gltfdocumentextension_private_method__import_preflight"></div>

[Error](#enum_@globalscope_error) **_import_preflight** ( state: [`GLTFState`](class_gltfstate.md), extensions: [`PackedStringArray`](class_packedstringarray.md) ) virtual[^virtual]<div id="class_gltfdocumentextension_private_method__import_preflight"></div>

Part of the import process. This method is run first, before all other parts of the import process.

The return value is used to determine if this **GLTFDocumentExtension** instance should be used for importing a given glTF file. If [`@GlobalScope.OK`](class_@globalscope.md#class_@globalscope_constant_ok), the import will use this **GLTFDocumentExtension** instance. If not overridden, [`@GlobalScope.OK`](class_@globalscope.md#class_@globalscope_constant_ok) is returned.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_gltfdocumentextension_private_method__parse_image_data"></div>

[Error](#enum_@globalscope_error) **_parse_image_data** ( state: [`GLTFState`](class_gltfstate.md), image_data: [`PackedByteArray`](class_packedbytearray.md), mime_type: [`String`](class_string.md), ret_image: [`Image`](class_image.md) ) virtual[^virtual]<div id="class_gltfdocumentextension_private_method__parse_image_data"></div>

Part of the import process. This method is run after [`_parse_node_extensions`](class_gltfdocumentextension.md#class_gltfdocumentextension_private_method__parse_node_extensions) and before [`_parse_texture_json`](class_gltfdocumentextension.md#class_gltfdocumentextension_private_method__parse_texture_json).

Runs when parsing image data from a glTF file. The data could be sourced from a separate file, a URI, or a buffer, and then is passed as a byte array.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_gltfdocumentextension_private_method__parse_node_extensions"></div>

[Error](#enum_@globalscope_error) **_parse_node_extensions** ( state: [`GLTFState`](class_gltfstate.md), gltf_node: [`GLTFNode`](class_gltfnode.md), extensions: [`Dictionary`](class_dictionary.md) ) virtual[^virtual]<div id="class_gltfdocumentextension_private_method__parse_node_extensions"></div>

Part of the import process. This method is run after [`_get_supported_extensions`](class_gltfdocumentextension.md#class_gltfdocumentextension_private_method__get_supported_extensions) and before [`_import_post_parse`](class_gltfdocumentextension.md#class_gltfdocumentextension_private_method__import_post_parse).

Runs when parsing the node extensions of a GLTFNode. This method can be used to process the extension JSON data into a format that can be used by [`_generate_scene_node`](class_gltfdocumentextension.md#class_gltfdocumentextension_private_method__generate_scene_node). The return value should be a member of the [Error](#enum_@globalscope_error) enum.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_gltfdocumentextension_private_method__parse_texture_json"></div>

[Error](#enum_@globalscope_error) **_parse_texture_json** ( state: [`GLTFState`](class_gltfstate.md), texture_json: [`Dictionary`](class_dictionary.md), ret_gltf_texture: [`GLTFTexture`](class_gltftexture.md) ) virtual[^virtual]<div id="class_gltfdocumentextension_private_method__parse_texture_json"></div>

Part of the import process. This method is run after [`_parse_image_data`](class_gltfdocumentextension.md#class_gltfdocumentextension_private_method__parse_image_data) and before [`_generate_scene_node`](class_gltfdocumentextension.md#class_gltfdocumentextension_private_method__generate_scene_node).

Runs when parsing the texture JSON from the glTF textures array. This can be used to set the source image index to use as the texture.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_gltfdocumentextension_private_method__save_image_at_path"></div>

[Error](#enum_@globalscope_error) **_save_image_at_path** ( state: [`GLTFState`](class_gltfstate.md), image: [`Image`](class_image.md), file_path: [`String`](class_string.md), image_format: [`String`](class_string.md), lossy_quality: [`float`](class_float.md) ) virtual[^virtual]<div id="class_gltfdocumentextension_private_method__save_image_at_path"></div>

Part of the export process. This method is run after [`_get_saveable_image_formats`](class_gltfdocumentextension.md#class_gltfdocumentextension_private_method__get_saveable_image_formats) and before [`_serialize_texture_json`](class_gltfdocumentextension.md#class_gltfdocumentextension_private_method__serialize_texture_json).

This method is run when saving images separately from the glTF file. When images are embedded, [`_serialize_image_to_bytes`](class_gltfdocumentextension.md#class_gltfdocumentextension_private_method__serialize_image_to_bytes) runs instead. Note that these methods only run when this **GLTFDocumentExtension** is selected as the image exporter.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_gltfdocumentextension_private_method__serialize_image_to_bytes"></div>

[`PackedByteArray`](class_packedbytearray.md) **_serialize_image_to_bytes** ( state: [`GLTFState`](class_gltfstate.md), image: [`Image`](class_image.md), image_dict: [`Dictionary`](class_dictionary.md), image_format: [`String`](class_string.md), lossy_quality: [`float`](class_float.md) ) virtual[^virtual]<div id="class_gltfdocumentextension_private_method__serialize_image_to_bytes"></div>

Part of the export process. This method is run after [`_get_saveable_image_formats`](class_gltfdocumentextension.md#class_gltfdocumentextension_private_method__get_saveable_image_formats) and before [`_serialize_texture_json`](class_gltfdocumentextension.md#class_gltfdocumentextension_private_method__serialize_texture_json).

This method is run when embedding images in the glTF file. When images are saved separately, [`_save_image_at_path`](class_gltfdocumentextension.md#class_gltfdocumentextension_private_method__save_image_at_path) runs instead. Note that these methods only run when this **GLTFDocumentExtension** is selected as the image exporter.

This method must set the image MIME type in the `image_dict` with the `"mimeType"` key. For example, for a PNG image, it would be set to `"image/png"`. The return value must be a [`PackedByteArray`](class_packedbytearray.md) containing the image data.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_gltfdocumentextension_private_method__serialize_texture_json"></div>

[Error](#enum_@globalscope_error) **_serialize_texture_json** ( state: [`GLTFState`](class_gltfstate.md), texture_json: [`Dictionary`](class_dictionary.md), gltf_texture: [`GLTFTexture`](class_gltftexture.md), image_format: [`String`](class_string.md) ) virtual[^virtual]<div id="class_gltfdocumentextension_private_method__serialize_texture_json"></div>

Part of the export process. This method is run after [`_save_image_at_path`](class_gltfdocumentextension.md#class_gltfdocumentextension_private_method__save_image_at_path) or [`_serialize_image_to_bytes`](class_gltfdocumentextension.md#class_gltfdocumentextension_private_method__serialize_image_to_bytes), and before [`_export_node`](class_gltfdocumentextension.md#class_gltfdocumentextension_private_method__export_node). Note that this method only runs when this **GLTFDocumentExtension** is selected as the image exporter.

This method can be used to set up the extensions for the texture JSON by editing `texture_json`. The extension must also be added as used extension with [`GLTFState.add_used_extension`](class_gltfstate.md#class_gltfstate_method_add_used_extension), be sure to set `required` to `true` if you are not providing a fallback.

[^virtual]: 本方法通常需要用户覆盖才能生效。
[^const]: 本方法无副作用，不会修改该实例的任何成员变量。
[^vararg]: 本方法除了能接受在此处描述的参数外，还能够继续接受任意数量的参数。
[^constructor]: 本方法用于构造某个类型。
[^static]: 调用本方法无需实例，可直接使用类名进行调用。
[^operator]: 本方法描述的是使用本类型作为左操作数的有效运算符。
[^bitfield]: 这个值是由下列位标志构成位掩码的整数。
[^void]: 无返回值。
