<!-- ⚠ 请勿编辑本文件 ⚠ -->
<!-- 本文档使用脚本从 WeDot 引擎源码仓库生成。 -->
<!-- 生成脚本：https://github.com/WeDot-Engine/WeDot/tree/4.3/doc/tools/make_md.py； -->
<!-- 原文件：https://github.com/WeDot-Engine/WeDot/tree/4.3/doc/classes/EditorScenePostImportPlugin.xml。 -->

<div id="_class_editorscenepostimportplugin"></div>

# EditorScenePostImportPlugin

**继承：** [`RefCounted`](class_refcounted.md) **<** [`Object`](class_object.md)

Plugin to control and modifying the process of importing a scene.

## 描述

This plugin type exists to modify the process of importing scenes, allowing to change the content as well as add importer options at every stage of the process.

## 方法

| `void`                        | [`_get_import_options`](#class_editorscenepostimportplugin_private_method__get_import_options) ( path: [`String`](class_string.md) ) virtual[^virtual]                                                                                                                                                                                                                                            |
| `void`                        | [`_get_internal_import_options`](#class_editorscenepostimportplugin_private_method__get_internal_import_options) ( category: [`int`](class_int.md) ) virtual[^virtual]                                                                                                                                                                                                                            |
| [`Variant`](class_variant.md) | [`_get_internal_option_update_view_required`](#class_editorscenepostimportplugin_private_method__get_internal_option_update_view_required) ( category: [`int`](class_int.md), option: [`String`](class_string.md) ) virtual[^virtual] const[^const]                                                                                                                                               |
| [`Variant`](class_variant.md) | [`_get_internal_option_visibility`](#class_editorscenepostimportplugin_private_method__get_internal_option_visibility) ( category: [`int`](class_int.md), for_animation: [`bool`](class_bool.md), option: [`String`](class_string.md) ) virtual[^virtual] const[^const]                                                                                                                           |
| [`Variant`](class_variant.md) | [`_get_option_visibility`](#class_editorscenepostimportplugin_private_method__get_option_visibility) ( path: [`String`](class_string.md), for_animation: [`bool`](class_bool.md), option: [`String`](class_string.md) ) virtual[^virtual] const[^const]                                                                                                                                           |
| `void`                        | [`_internal_process`](#class_editorscenepostimportplugin_private_method__internal_process) ( category: [`int`](class_int.md), base_node: [`Node`](class_node.md), node: [`Node`](class_node.md), resource: [`Resource`](class_resource.md) ) virtual[^virtual]                                                                                                                                    |
| `void`                        | [`_post_process`](#class_editorscenepostimportplugin_private_method__post_process) ( scene: [`Node`](class_node.md) ) virtual[^virtual]                                                                                                                                                                                                                                                           |
| `void`                        | [`_pre_process`](#class_editorscenepostimportplugin_private_method__pre_process) ( scene: [`Node`](class_node.md) ) virtual[^virtual]                                                                                                                                                                                                                                                             |
| `void`                        | [`add_import_option`](#class_editorscenepostimportplugin_method_add_import_option) ( name: [`String`](class_string.md), value: [`Variant`](class_variant.md) )                                                                                                                                                                                                                                    |
| `void`                        | [`add_import_option_advanced`](#class_editorscenepostimportplugin_method_add_import_option_advanced) ( type: [Variant.Type](#enum_@globalscope_variant.type), name: [`String`](class_string.md), default_value: [`Variant`](class_variant.md), hint: [PropertyHint](#enum_@globalscope_propertyhint) = 0, hint_string: [`String`](class_string.md) = "", usage_flags: [`int`](class_int.md) = 6 ) |
| [`Variant`](class_variant.md) | [`get_option_value`](#class_editorscenepostimportplugin_method_get_option_value) ( name: [`StringName`](class_stringname.md) ) const[^const]                                                                                                                                                                                                                                                      |

<!-- rst-class:: classref-section-separator -->

---

## 枚举

<div id="_class_enum_editorscenepostimportplugin_internalimportcategory"></div>

enum **InternalImportCategory**: <div id="enum_editorscenepostimportplugin_internalimportcategory"></div>

<div id="_class_editorscenepostimportplugin_constant_internal_import_category_node"></div>

[InternalImportCategory](#enum_editorscenepostimportplugin_internalimportcategory) **INTERNAL_IMPORT_CATEGORY_NODE** = ``0``

该枚举目前没有描述，请帮我们\ :ref:`贡献一个 <doc_updating_the_class_reference>`\ 吧！



<div id="_class_editorscenepostimportplugin_constant_internal_import_category_mesh_3d_node"></div>

[InternalImportCategory](#enum_editorscenepostimportplugin_internalimportcategory) **INTERNAL_IMPORT_CATEGORY_MESH_3D_NODE** = ``1``

该枚举目前没有描述，请帮我们\ :ref:`贡献一个 <doc_updating_the_class_reference>`\ 吧！



<div id="_class_editorscenepostimportplugin_constant_internal_import_category_mesh"></div>

[InternalImportCategory](#enum_editorscenepostimportplugin_internalimportcategory) **INTERNAL_IMPORT_CATEGORY_MESH** = ``2``

该枚举目前没有描述，请帮我们\ :ref:`贡献一个 <doc_updating_the_class_reference>`\ 吧！



<div id="_class_editorscenepostimportplugin_constant_internal_import_category_material"></div>

[InternalImportCategory](#enum_editorscenepostimportplugin_internalimportcategory) **INTERNAL_IMPORT_CATEGORY_MATERIAL** = ``3``

该枚举目前没有描述，请帮我们\ :ref:`贡献一个 <doc_updating_the_class_reference>`\ 吧！



<div id="_class_editorscenepostimportplugin_constant_internal_import_category_animation"></div>

[InternalImportCategory](#enum_editorscenepostimportplugin_internalimportcategory) **INTERNAL_IMPORT_CATEGORY_ANIMATION** = ``4``

该枚举目前没有描述，请帮我们\ :ref:`贡献一个 <doc_updating_the_class_reference>`\ 吧！



<div id="_class_editorscenepostimportplugin_constant_internal_import_category_animation_node"></div>

[InternalImportCategory](#enum_editorscenepostimportplugin_internalimportcategory) **INTERNAL_IMPORT_CATEGORY_ANIMATION_NODE** = ``5``

该枚举目前没有描述，请帮我们\ :ref:`贡献一个 <doc_updating_the_class_reference>`\ 吧！



<div id="_class_editorscenepostimportplugin_constant_internal_import_category_skeleton_3d_node"></div>

[InternalImportCategory](#enum_editorscenepostimportplugin_internalimportcategory) **INTERNAL_IMPORT_CATEGORY_SKELETON_3D_NODE** = ``6``

该枚举目前没有描述，请帮我们\ :ref:`贡献一个 <doc_updating_the_class_reference>`\ 吧！



<div id="_class_editorscenepostimportplugin_constant_internal_import_category_max"></div>

[InternalImportCategory](#enum_editorscenepostimportplugin_internalimportcategory) **INTERNAL_IMPORT_CATEGORY_MAX** = ``7``

该枚举目前没有描述，请帮我们\ :ref:`贡献一个 <doc_updating_the_class_reference>`\ 吧！



<!-- rst-class:: classref-section-separator -->

---

## 方法说明

<div id="_class_editorscenepostimportplugin_private_method__get_import_options"></div>

`void` **_get_import_options** ( path: [`String`](class_string.md) ) virtual[^virtual]<div id="class_editorscenepostimportplugin_private_method__get_import_options"></div>

Override to add general import options. These will appear in the main import dock on the editor. Add options via [`add_import_option`](#class_editorscenepostimportplugin_method_add_import_option) and [`add_import_option_advanced`](#class_editorscenepostimportplugin_method_add_import_option_advanced).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorscenepostimportplugin_private_method__get_internal_import_options"></div>

`void` **_get_internal_import_options** ( category: [`int`](class_int.md) ) virtual[^virtual]<div id="class_editorscenepostimportplugin_private_method__get_internal_import_options"></div>

Override to add internal import options. These will appear in the 3D scene import dialog. Add options via [`add_import_option`](#class_editorscenepostimportplugin_method_add_import_option) and [`add_import_option_advanced`](#class_editorscenepostimportplugin_method_add_import_option_advanced).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorscenepostimportplugin_private_method__get_internal_option_update_view_required"></div>

[`Variant`](class_variant.md) **_get_internal_option_update_view_required** ( category: [`int`](class_int.md), option: [`String`](class_string.md) ) virtual[^virtual] const[^const]<div id="class_editorscenepostimportplugin_private_method__get_internal_option_update_view_required"></div>

Return true whether updating the 3D view of the import dialog needs to be updated if an option has changed.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorscenepostimportplugin_private_method__get_internal_option_visibility"></div>

[`Variant`](class_variant.md) **_get_internal_option_visibility** ( category: [`int`](class_int.md), for_animation: [`bool`](class_bool.md), option: [`String`](class_string.md) ) virtual[^virtual] const[^const]<div id="class_editorscenepostimportplugin_private_method__get_internal_option_visibility"></div>

Return true or false whether a given option should be visible. Return null to ignore.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorscenepostimportplugin_private_method__get_option_visibility"></div>

[`Variant`](class_variant.md) **_get_option_visibility** ( path: [`String`](class_string.md), for_animation: [`bool`](class_bool.md), option: [`String`](class_string.md) ) virtual[^virtual] const[^const]<div id="class_editorscenepostimportplugin_private_method__get_option_visibility"></div>

Return true or false whether a given option should be visible. Return null to ignore.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorscenepostimportplugin_private_method__internal_process"></div>

`void` **_internal_process** ( category: [`int`](class_int.md), base_node: [`Node`](class_node.md), node: [`Node`](class_node.md), resource: [`Resource`](class_resource.md) ) virtual[^virtual]<div id="class_editorscenepostimportplugin_private_method__internal_process"></div>

Process a specific node or resource for a given category.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorscenepostimportplugin_private_method__post_process"></div>

`void` **_post_process** ( scene: [`Node`](class_node.md) ) virtual[^virtual]<div id="class_editorscenepostimportplugin_private_method__post_process"></div>

Post process the scene. This function is called after the final scene has been configured.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorscenepostimportplugin_private_method__pre_process"></div>

`void` **_pre_process** ( scene: [`Node`](class_node.md) ) virtual[^virtual]<div id="class_editorscenepostimportplugin_private_method__pre_process"></div>

Pre Process the scene. This function is called right after the scene format loader loaded the scene and no changes have been made.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorscenepostimportplugin_method_add_import_option"></div>

`void` **add_import_option** ( name: [`String`](class_string.md), value: [`Variant`](class_variant.md) )<div id="class_editorscenepostimportplugin_method_add_import_option"></div>

Add a specific import option (name and default value only). This function can only be called from [`_get_import_options`](#class_editorscenepostimportplugin_private_method__get_import_options) and [`_get_internal_import_options`](#class_editorscenepostimportplugin_private_method__get_internal_import_options).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorscenepostimportplugin_method_add_import_option_advanced"></div>

`void` **add_import_option_advanced** ( type: [Variant.Type](#enum_@globalscope_variant.type), name: [`String`](class_string.md), default_value: [`Variant`](class_variant.md), hint: [PropertyHint](#enum_@globalscope_propertyhint) = 0, hint_string: [`String`](class_string.md) = "", usage_flags: [`int`](class_int.md) = 6 )<div id="class_editorscenepostimportplugin_method_add_import_option_advanced"></div>

Add a specific import option. This function can only be called from [`_get_import_options`](#class_editorscenepostimportplugin_private_method__get_import_options) and [`_get_internal_import_options`](#class_editorscenepostimportplugin_private_method__get_internal_import_options).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorscenepostimportplugin_method_get_option_value"></div>

[`Variant`](class_variant.md) **get_option_value** ( name: [`StringName`](class_stringname.md) ) const[^const]<div id="class_editorscenepostimportplugin_method_get_option_value"></div>

Query the value of an option. This function can only be called from those querying visibility, or processing.

[^virtual]: 本方法通常需要用户覆盖才能生效。
[^const]: 本方法无副作用，不会修改该实例的任何成员变量。
[^vararg]: 本方法除了能接受在此处描述的参数外，还能够继续接受任意数量的参数。
[^constructor]: 本方法用于构造某个类型。
[^static]: 调用本方法无需实例，可直接使用类名进行调用。
[^operator]: 本方法描述的是使用本类型作为左操作数的有效运算符。
[^bitfield]: 这个值是由下列位标志构成位掩码的整数。
[^void]: 无返回值。
