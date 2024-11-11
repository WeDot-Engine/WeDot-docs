<!-- ⚠ 请勿编辑本文件 ⚠ -->
<!-- 本文档使用脚本从 WeDot 引擎源码仓库生成。 -->
<!-- 生成脚本：https://github.com/WeDot-Engine/WeDot/tree/master/doc/tools/make_md.py； -->
<!-- 原文件：https://github.com/WeDot-Engine/WeDot/tree/master/modules/gltf/doc_classes/GLTFDocument.xml。 -->

<div id="_class_gltfdocument"></div>

# GLTFDocument

**继承：** [`Resource`](class_resource.md) **<** [`RefCounted`](class_refcounted.md) **<** [`Object`](class_object.md)

**派生：** [`FBXDocument`](class_fbxdocument.md)

Class for importing and exporting glTF files in and out of Godot.

## 描述

GLTFDocument supports reading data from a glTF file, buffer, or Godot scene. This data can then be written to the filesystem, buffer, or used to create a Godot scene.

All of the data in a glTF scene is stored in the [`GLTFState`](class_gltfstate.md) class. GLTFDocument processes state objects, but does not contain any scene data itself. GLTFDocument has member variables to store export configuration settings such as the image format, but is otherwise stateless. Multiple scenes can be processed with the same settings using the same GLTFDocument object and different [`GLTFState`](class_gltfstate.md) objects.

GLTFDocument can be extended with arbitrary functionality by extending the [`GLTFDocumentExtension`](class_gltfdocumentextension.md) class and registering it with GLTFDocument via [`register_gltf_document_extension`](class_gltfdocument.md#class_gltfdocument_method_register_gltf_document_extension). This allows for custom data to be imported and exported.

## 属性

|||
|:-:|:--|
| [`String`](class_string.md)                     | [`image_format`](class_gltfdocument.md#class_gltfdocument_property_image_format)     | ``"PNG"`` |
| [`float`](class_float.md)                       | [`lossy_quality`](class_gltfdocument.md#class_gltfdocument_property_lossy_quality)   | ``0.75``  |
| [RootNodeMode](#enum_gltfdocument_rootnodemode) | [`root_node_mode`](class_gltfdocument.md#class_gltfdocument_property_root_node_mode) | ``0``     |

## 方法

|||
|:-:|:--|
| [Error](#enum_@globalscope_error)                             | [`append_from_buffer`](class_gltfdocument.md#class_gltfdocument_method_append_from_buffer) ( bytes: [`PackedByteArray`](class_packedbytearray.md), base_path: [`String`](class_string.md), state: [`GLTFState`](class_gltfstate.md), flags: [`int`](class_int.md) = 0 )                              |
| [Error](#enum_@globalscope_error)                             | [`append_from_file`](class_gltfdocument.md#class_gltfdocument_method_append_from_file) ( path: [`String`](class_string.md), state: [`GLTFState`](class_gltfstate.md), flags: [`int`](class_int.md) = 0, base_path: [`String`](class_string.md) = "" )                                                |
| [Error](#enum_@globalscope_error)                             | [`append_from_scene`](class_gltfdocument.md#class_gltfdocument_method_append_from_scene) ( node: [`Node`](class_node.md), state: [`GLTFState`](class_gltfstate.md), flags: [`int`](class_int.md) = 0 )                                                                                               |
| [`GLTFObjectModelProperty`](class_gltfobjectmodelproperty.md) | [`export_object_model_property`](class_gltfdocument.md#class_gltfdocument_method_export_object_model_property) ( state: [`GLTFState`](class_gltfstate.md), node_path: [`NodePath`](class_nodepath.md), godot_node: [`Node`](class_node.md), gltf_node_index: [`int`](class_int.md) ) static[^static] |
| [`PackedByteArray`](class_packedbytearray.md)                 | [`generate_buffer`](class_gltfdocument.md#class_gltfdocument_method_generate_buffer) ( state: [`GLTFState`](class_gltfstate.md) )                                                                                                                                                                    |
| [`Node`](class_node.md)                                       | [`generate_scene`](class_gltfdocument.md#class_gltfdocument_method_generate_scene) ( state: [`GLTFState`](class_gltfstate.md), bake_fps: [`float`](class_float.md) = 30, trimming: [`bool`](class_bool.md) = false, remove_immutable_tracks: [`bool`](class_bool.md) = true )                        |
| [`PackedStringArray`](class_packedstringarray.md)             | [`get_supported_gltf_extensions`](class_gltfdocument.md#class_gltfdocument_method_get_supported_gltf_extensions) ( ) static[^static]                                                                                                                                                                 |
| [`GLTFObjectModelProperty`](class_gltfobjectmodelproperty.md) | [`import_object_model_property`](class_gltfdocument.md#class_gltfdocument_method_import_object_model_property) ( state: [`GLTFState`](class_gltfstate.md), json_pointer: [`String`](class_string.md) ) static[^static]                                                                               |
| `void`                                                        | [`register_gltf_document_extension`](class_gltfdocument.md#class_gltfdocument_method_register_gltf_document_extension) ( extension: [`GLTFDocumentExtension`](class_gltfdocumentextension.md), first_priority: [`bool`](class_bool.md) = false ) static[^static]                                     |
| `void`                                                        | [`unregister_gltf_document_extension`](class_gltfdocument.md#class_gltfdocument_method_unregister_gltf_document_extension) ( extension: [`GLTFDocumentExtension`](class_gltfdocumentextension.md) ) static[^static]                                                                                  |
| [Error](#enum_@globalscope_error)                             | [`write_to_filesystem`](class_gltfdocument.md#class_gltfdocument_method_write_to_filesystem) ( state: [`GLTFState`](class_gltfstate.md), path: [`String`](class_string.md) )                                                                                                                         |

<!-- rst-class:: classref-section-separator -->

---

## 枚举

<div id="_class_enum_gltfdocument_rootnodemode"></div>

enum **RootNodeMode**: <div id="enum_gltfdocument_rootnodemode"></div>

<div id="_class_gltfdocument_constant_root_node_mode_single_root"></div>

[RootNodeMode](#enum_gltfdocument_rootnodemode) **ROOT_NODE_MODE_SINGLE_ROOT** = ``0``

Treat the Godot scene's root node as the root node of the glTF file, and mark it as the single root node via the `GODOT_single_root` glTF extension. This will be parsed the same as [`ROOT_NODE_MODE_KEEP_ROOT`](class_gltfdocument.md#class_gltfdocument_constant_root_node_mode_keep_root) if the implementation does not support `GODOT_single_root`.

<div id="_class_gltfdocument_constant_root_node_mode_keep_root"></div>

[RootNodeMode](#enum_gltfdocument_rootnodemode) **ROOT_NODE_MODE_KEEP_ROOT** = ``1``

Treat the Godot scene's root node as the root node of the glTF file, but do not mark it as anything special. An extra root node will be generated when importing into Godot. This uses only vanilla glTF features. This is equivalent to the behavior in Godot 4.1 and earlier.

<div id="_class_gltfdocument_constant_root_node_mode_multi_root"></div>

[RootNodeMode](#enum_gltfdocument_rootnodemode) **ROOT_NODE_MODE_MULTI_ROOT** = ``2``

Treat the Godot scene's root node as the name of the glTF scene, and add all of its children as root nodes of the glTF file. This uses only vanilla glTF features. This avoids an extra root node, but only the name of the Godot scene's root node will be preserved, as it will not be saved as a node.

<!-- rst-class:: classref-section-separator -->

---

## 属性说明

<div id="_class_gltfdocument_property_image_format"></div>

[`String`](class_string.md) **image_format** = ``"PNG"`` <div id="class_gltfdocument_property_image_format"></div>

- `void` **set_image_format** ( value: [`String`](class_string.md) )
- [`String`](class_string.md) **get_image_format** ( )

The user-friendly name of the export image format. This is used when exporting the glTF file, including writing to a file and writing to a byte array.

By default, Godot allows the following options: "None", "PNG", "JPEG", "Lossless WebP", and "Lossy WebP". Support for more image formats can be added in [`GLTFDocumentExtension`](class_gltfdocumentextension.md) classes.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_gltfdocument_property_lossy_quality"></div>

[`float`](class_float.md) **lossy_quality** = ``0.75`` <div id="class_gltfdocument_property_lossy_quality"></div>

- `void` **set_lossy_quality** ( value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_lossy_quality** ( )

If [`image_format`](class_gltfdocument.md#class_gltfdocument_property_image_format) is a lossy image format, this determines the lossy quality of the image. On a range of `0.0` to `1.0`, where `0.0` is the lowest quality and `1.0` is the highest quality. A lossy quality of `1.0` is not the same as lossless.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_gltfdocument_property_root_node_mode"></div>

[RootNodeMode](#enum_gltfdocument_rootnodemode) **root_node_mode** = ``0`` <div id="class_gltfdocument_property_root_node_mode"></div>

- `void` **set_root_node_mode** ( value: [RootNodeMode](#enum_gltfdocument_rootnodemode) )
- [RootNodeMode](#enum_gltfdocument_rootnodemode) **get_root_node_mode** ( )

How to process the root node during export. See [RootNodeMode](#enum_gltfdocument_rootnodemode) for details. The default and recommended value is [`ROOT_NODE_MODE_SINGLE_ROOT`](class_gltfdocument.md#class_gltfdocument_constant_root_node_mode_single_root).

 **Note:** Regardless of how the glTF file is exported, when importing, the root node type and name can be overridden in the scene import settings tab.

<!-- rst-class:: classref-section-separator -->

---

## 方法说明

<div id="_class_gltfdocument_method_append_from_buffer"></div>

[Error](#enum_@globalscope_error) **append_from_buffer** ( bytes: [`PackedByteArray`](class_packedbytearray.md), base_path: [`String`](class_string.md), state: [`GLTFState`](class_gltfstate.md), flags: [`int`](class_int.md) = 0 )<div id="class_gltfdocument_method_append_from_buffer"></div>

Takes a [`PackedByteArray`](class_packedbytearray.md) defining a glTF and imports the data to the given [`GLTFState`](class_gltfstate.md) object through the `state` parameter.

 **Note:** The `base_path` tells [`append_from_buffer`](class_gltfdocument.md#class_gltfdocument_method_append_from_buffer) where to find dependencies and can be empty.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_gltfdocument_method_append_from_file"></div>

[Error](#enum_@globalscope_error) **append_from_file** ( path: [`String`](class_string.md), state: [`GLTFState`](class_gltfstate.md), flags: [`int`](class_int.md) = 0, base_path: [`String`](class_string.md) = "" )<div id="class_gltfdocument_method_append_from_file"></div>

Takes a path to a glTF file and imports the data at that file path to the given [`GLTFState`](class_gltfstate.md) object through the `state` parameter.

 **Note:** The `base_path` tells [`append_from_file`](class_gltfdocument.md#class_gltfdocument_method_append_from_file) where to find dependencies and can be empty.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_gltfdocument_method_append_from_scene"></div>

[Error](#enum_@globalscope_error) **append_from_scene** ( node: [`Node`](class_node.md), state: [`GLTFState`](class_gltfstate.md), flags: [`int`](class_int.md) = 0 )<div id="class_gltfdocument_method_append_from_scene"></div>

Takes a Godot Engine scene node and exports it and its descendants to the given [`GLTFState`](class_gltfstate.md) object through the `state` parameter.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_gltfdocument_method_export_object_model_property"></div>

[`GLTFObjectModelProperty`](class_gltfobjectmodelproperty.md) **export_object_model_property** ( state: [`GLTFState`](class_gltfstate.md), node_path: [`NodePath`](class_nodepath.md), godot_node: [`Node`](class_node.md), gltf_node_index: [`int`](class_int.md) ) static[^static]<div id="class_gltfdocument_method_export_object_model_property"></div>

Determines a mapping between the given Godot `node_path` and the corresponding glTF Object Model JSON pointer(s) in the generated glTF file. The details of this mapping are returned in a [`GLTFObjectModelProperty`](class_gltfobjectmodelproperty.md) object. Additional mappings can be supplied via the [`GLTFDocumentExtension._import_object_model_property`](class_gltfdocumentextension.md#class_gltfdocumentextension_private_method__import_object_model_property) callback method.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_gltfdocument_method_generate_buffer"></div>

[`PackedByteArray`](class_packedbytearray.md) **generate_buffer** ( state: [`GLTFState`](class_gltfstate.md) )<div id="class_gltfdocument_method_generate_buffer"></div>

Takes a [`GLTFState`](class_gltfstate.md) object through the `state` parameter and returns a glTF [`PackedByteArray`](class_packedbytearray.md).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_gltfdocument_method_generate_scene"></div>

[`Node`](class_node.md) **generate_scene** ( state: [`GLTFState`](class_gltfstate.md), bake_fps: [`float`](class_float.md) = 30, trimming: [`bool`](class_bool.md) = false, remove_immutable_tracks: [`bool`](class_bool.md) = true )<div id="class_gltfdocument_method_generate_scene"></div>

Takes a [`GLTFState`](class_gltfstate.md) object through the `state` parameter and returns a Godot Engine scene node.

The `bake_fps` parameter overrides the bake_fps in `state`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_gltfdocument_method_get_supported_gltf_extensions"></div>

[`PackedStringArray`](class_packedstringarray.md) **get_supported_gltf_extensions** ( ) static[^static]<div id="class_gltfdocument_method_get_supported_gltf_extensions"></div>

Returns a list of all support glTF extensions, including extensions supported directly by the engine, and extensions supported by user plugins registering [`GLTFDocumentExtension`](class_gltfdocumentextension.md) classes.

 **Note:** If this method is run before a GLTFDocumentExtension is registered, its extensions won't be included in the list. Be sure to only run this method after all extensions are registered. If you run this when the engine starts, consider waiting a frame before calling this method to ensure all extensions are registered.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_gltfdocument_method_import_object_model_property"></div>

[`GLTFObjectModelProperty`](class_gltfobjectmodelproperty.md) **import_object_model_property** ( state: [`GLTFState`](class_gltfstate.md), json_pointer: [`String`](class_string.md) ) static[^static]<div id="class_gltfdocument_method_import_object_model_property"></div>

Determines a mapping between the given glTF Object Model `json_pointer` and the corresponding Godot node path(s) in the generated Godot scene. The details of this mapping are returned in a [`GLTFObjectModelProperty`](class_gltfobjectmodelproperty.md) object. Additional mappings can be supplied via the [`GLTFDocumentExtension._export_object_model_property`](class_gltfdocumentextension.md#class_gltfdocumentextension_private_method__export_object_model_property) callback method.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_gltfdocument_method_register_gltf_document_extension"></div>

`void` **register_gltf_document_extension** ( extension: [`GLTFDocumentExtension`](class_gltfdocumentextension.md), first_priority: [`bool`](class_bool.md) = false ) static[^static]<div id="class_gltfdocument_method_register_gltf_document_extension"></div>

Registers the given [`GLTFDocumentExtension`](class_gltfdocumentextension.md) instance with GLTFDocument. If `first_priority` is true, this extension will be run first. Otherwise, it will be run last.

 **Note:** Like GLTFDocument itself, all GLTFDocumentExtension classes must be stateless in order to function properly. If you need to store data, use the `set_additional_data` and `get_additional_data` methods in [`GLTFState`](class_gltfstate.md) or [`GLTFNode`](class_gltfnode.md).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_gltfdocument_method_unregister_gltf_document_extension"></div>

`void` **unregister_gltf_document_extension** ( extension: [`GLTFDocumentExtension`](class_gltfdocumentextension.md) ) static[^static]<div id="class_gltfdocument_method_unregister_gltf_document_extension"></div>

Unregisters the given [`GLTFDocumentExtension`](class_gltfdocumentextension.md) instance.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_gltfdocument_method_write_to_filesystem"></div>

[Error](#enum_@globalscope_error) **write_to_filesystem** ( state: [`GLTFState`](class_gltfstate.md), path: [`String`](class_string.md) )<div id="class_gltfdocument_method_write_to_filesystem"></div>

Takes a [`GLTFState`](class_gltfstate.md) object through the `state` parameter and writes a glTF file to the filesystem.

 **Note:** The extension of the glTF file determines if it is a .glb binary file or a .gltf text file.

[^virtual]: 本方法通常需要用户覆盖才能生效。
[^const]: 本方法无副作用，不会修改该实例的任何成员变量。
[^vararg]: 本方法除了能接受在此处描述的参数外，还能够继续接受任意数量的参数。
[^constructor]: 本方法用于构造某个类型。
[^static]: 调用本方法无需实例，可直接使用类名进行调用。
[^operator]: 本方法描述的是使用本类型作为左操作数的有效运算符。
[^bitfield]: 这个值是由下列位标志构成位掩码的整数。
[^void]: 无返回值。
