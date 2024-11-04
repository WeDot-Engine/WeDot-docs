<!-- ⚠ 请勿编辑本文件 ⚠ -->
<!-- 本文档使用脚本从 WeDot 引擎源码仓库生成。 -->
<!-- 生成脚本：https://github.com/WeDot-Engine/WeDot/tree/4.3/doc/tools/make_md.py； -->
<!-- 原文件：https://github.com/WeDot-Engine/WeDot/tree/4.3/doc/classes/EditorSceneFormatImporter.xml。 -->

<div id="_class_editorsceneformatimporter"></div>

# EditorSceneFormatImporter

**继承：** [`RefCounted`](class_refcounted.md) **<** [`Object`](class_object.md)

**派生：** [`EditorSceneFormatImporterBlend`](class_editorsceneformatimporterblend.md), [`EditorSceneFormatImporterFBX2GLTF`](class_editorsceneformatimporterfbx2gltf.md), [`EditorSceneFormatImporterGLTF`](class_editorsceneformatimportergltf.md), [`EditorSceneFormatImporterUFBX`](class_editorsceneformatimporterufbx.md)

Imports scenes from third-parties' 3D files.

## 描述

**EditorSceneFormatImporter** allows to define an importer script for a third-party 3D format.

To use **EditorSceneFormatImporter**, register it using the [`EditorPlugin.add_scene_format_importer_plugin`](#class_editorplugin_method_add_scene_format_importer_plugin) method first.

## 方法

| [`PackedStringArray`](class_packedstringarray.md) | [`_get_extensions`](#class_editorsceneformatimporter_private_method__get_extensions) ( ) virtual[^virtual] const[^const]                                                                                                                              |
| [`int`](class_int.md)                             | [`_get_import_flags`](#class_editorsceneformatimporter_private_method__get_import_flags) ( ) virtual[^virtual] const[^const]                                                                                                                          |
| `void`                                            | [`_get_import_options`](#class_editorsceneformatimporter_private_method__get_import_options) ( path: [`String`](class_string.md) ) virtual[^virtual]                                                                                                  |
| [`Variant`](class_variant.md)                     | [`_get_option_visibility`](#class_editorsceneformatimporter_private_method__get_option_visibility) ( path: [`String`](class_string.md), for_animation: [`bool`](class_bool.md), option: [`String`](class_string.md) ) virtual[^virtual] const[^const] |
| [`Object`](class_object.md)                       | [`_import_scene`](#class_editorsceneformatimporter_private_method__import_scene) ( path: [`String`](class_string.md), flags: [`int`](class_int.md), options: [`Dictionary`](class_dictionary.md) ) virtual[^virtual]                                  |

<!-- rst-class:: classref-section-separator -->

---

## 常量

<div id="_class_editorsceneformatimporter_constant_import_scene"></div>

**IMPORT_SCENE** = ``1`` <div id="class_editorsceneformatimporter_constant_import_scene"></div>

该常量目前没有描述，请帮我们\ :ref:`贡献一个 <doc_updating_the_class_reference>`\ 吧！



<div id="_class_editorsceneformatimporter_constant_import_animation"></div>

**IMPORT_ANIMATION** = ``2`` <div id="class_editorsceneformatimporter_constant_import_animation"></div>

该常量目前没有描述，请帮我们\ :ref:`贡献一个 <doc_updating_the_class_reference>`\ 吧！



<div id="_class_editorsceneformatimporter_constant_import_fail_on_missing_dependencies"></div>

**IMPORT_FAIL_ON_MISSING_DEPENDENCIES** = ``4`` <div id="class_editorsceneformatimporter_constant_import_fail_on_missing_dependencies"></div>

该常量目前没有描述，请帮我们\ :ref:`贡献一个 <doc_updating_the_class_reference>`\ 吧！



<div id="_class_editorsceneformatimporter_constant_import_generate_tangent_arrays"></div>

**IMPORT_GENERATE_TANGENT_ARRAYS** = ``8`` <div id="class_editorsceneformatimporter_constant_import_generate_tangent_arrays"></div>

该常量目前没有描述，请帮我们\ :ref:`贡献一个 <doc_updating_the_class_reference>`\ 吧！



<div id="_class_editorsceneformatimporter_constant_import_use_named_skin_binds"></div>

**IMPORT_USE_NAMED_SKIN_BINDS** = ``16`` <div id="class_editorsceneformatimporter_constant_import_use_named_skin_binds"></div>

该常量目前没有描述，请帮我们\ :ref:`贡献一个 <doc_updating_the_class_reference>`\ 吧！



<div id="_class_editorsceneformatimporter_constant_import_discard_meshes_and_materials"></div>

**IMPORT_DISCARD_MESHES_AND_MATERIALS** = ``32`` <div id="class_editorsceneformatimporter_constant_import_discard_meshes_and_materials"></div>

该常量目前没有描述，请帮我们\ :ref:`贡献一个 <doc_updating_the_class_reference>`\ 吧！



<div id="_class_editorsceneformatimporter_constant_import_force_disable_mesh_compression"></div>

**IMPORT_FORCE_DISABLE_MESH_COMPRESSION** = ``64`` <div id="class_editorsceneformatimporter_constant_import_force_disable_mesh_compression"></div>

该常量目前没有描述，请帮我们\ :ref:`贡献一个 <doc_updating_the_class_reference>`\ 吧！



<!-- rst-class:: classref-section-separator -->

---

## 方法说明

<div id="_class_editorsceneformatimporter_private_method__get_extensions"></div>

[`PackedStringArray`](class_packedstringarray.md) **_get_extensions** ( ) virtual[^virtual] const[^const]<div id="class_editorsceneformatimporter_private_method__get_extensions"></div>

该方法目前没有描述，请帮我们\ :ref:`贡献一个 <doc_updating_the_class_reference>`\ 吧！

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorsceneformatimporter_private_method__get_import_flags"></div>

[`int`](class_int.md) **_get_import_flags** ( ) virtual[^virtual] const[^const]<div id="class_editorsceneformatimporter_private_method__get_import_flags"></div>

该方法目前没有描述，请帮我们\ :ref:`贡献一个 <doc_updating_the_class_reference>`\ 吧！

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorsceneformatimporter_private_method__get_import_options"></div>

`void` **_get_import_options** ( path: [`String`](class_string.md) ) virtual[^virtual]<div id="class_editorsceneformatimporter_private_method__get_import_options"></div>

该方法目前没有描述，请帮我们\ :ref:`贡献一个 <doc_updating_the_class_reference>`\ 吧！

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorsceneformatimporter_private_method__get_option_visibility"></div>

[`Variant`](class_variant.md) **_get_option_visibility** ( path: [`String`](class_string.md), for_animation: [`bool`](class_bool.md), option: [`String`](class_string.md) ) virtual[^virtual] const[^const]<div id="class_editorsceneformatimporter_private_method__get_option_visibility"></div>

该方法目前没有描述，请帮我们\ :ref:`贡献一个 <doc_updating_the_class_reference>`\ 吧！

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorsceneformatimporter_private_method__import_scene"></div>

[`Object`](class_object.md) **_import_scene** ( path: [`String`](class_string.md), flags: [`int`](class_int.md), options: [`Dictionary`](class_dictionary.md) ) virtual[^virtual]<div id="class_editorsceneformatimporter_private_method__import_scene"></div>

该方法目前没有描述，请帮我们\ :ref:`贡献一个 <doc_updating_the_class_reference>`\ 吧！

[^virtual]: 本方法通常需要用户覆盖才能生效。
[^const]: 本方法无副作用，不会修改该实例的任何成员变量。
[^vararg]: 本方法除了能接受在此处描述的参数外，还能够继续接受任意数量的参数。
[^constructor]: 本方法用于构造某个类型。
[^static]: 调用本方法无需实例，可直接使用类名进行调用。
[^operator]: 本方法描述的是使用本类型作为左操作数的有效运算符。
[^bitfield]: 这个值是由下列位标志构成位掩码的整数。
[^void]: 无返回值。
