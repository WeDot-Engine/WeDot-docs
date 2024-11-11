<!-- ⚠ 请勿编辑本文件 ⚠ -->
<!-- 本文档使用脚本从 WeDot 引擎源码仓库生成。 -->
<!-- 生成脚本：https://github.com/WeDot-Engine/WeDot/tree/master/doc/tools/make_md.py； -->
<!-- 原文件：https://github.com/WeDot-Engine/WeDot/tree/master/doc/classes/EditorFeatureProfile.xml。 -->

<div id="_class_editorfeatureprofile"></div>

# EditorFeatureProfile

**继承：** [`RefCounted`](class_refcounted.md) **<** [`Object`](class_object.md)

An editor feature profile which can be used to disable specific features.

## 描述

An editor feature profile can be used to disable specific features of the Godot editor. When disabled, the features won't appear in the editor, which makes the editor less cluttered. This is useful in education settings to reduce confusion or when working in a team. For example, artists and level designers could use a feature profile that disables the script editor to avoid accidentally making changes to files they aren't supposed to edit.

To manage editor feature profiles visually, use **Editor > Manage Feature Profiles...** at the top of the editor window.

## 方法

|||
|:-:|:--|
| [`String`](class_string.md)       | [`get_feature_name`](class_editorfeatureprofile.md#class_editorfeatureprofile_method_get_feature_name) ( feature: [Feature](#enum_editorfeatureprofile_feature) )                                                                                               |
| [`bool`](class_bool.md)           | [`is_class_disabled`](class_editorfeatureprofile.md#class_editorfeatureprofile_method_is_class_disabled) ( class_name: [`StringName`](class_stringname.md) ) const[^const]                                                                                      |
| [`bool`](class_bool.md)           | [`is_class_editor_disabled`](class_editorfeatureprofile.md#class_editorfeatureprofile_method_is_class_editor_disabled) ( class_name: [`StringName`](class_stringname.md) ) const[^const]                                                                        |
| [`bool`](class_bool.md)           | [`is_class_property_disabled`](class_editorfeatureprofile.md#class_editorfeatureprofile_method_is_class_property_disabled) ( class_name: [`StringName`](class_stringname.md), property: [`StringName`](class_stringname.md) ) const[^const]                     |
| [`bool`](class_bool.md)           | [`is_feature_disabled`](class_editorfeatureprofile.md#class_editorfeatureprofile_method_is_feature_disabled) ( feature: [Feature](#enum_editorfeatureprofile_feature) ) const[^const]                                                                           |
| [Error](#enum_@globalscope_error) | [`load_from_file`](class_editorfeatureprofile.md#class_editorfeatureprofile_method_load_from_file) ( path: [`String`](class_string.md) )                                                                                                                        |
| [Error](#enum_@globalscope_error) | [`save_to_file`](class_editorfeatureprofile.md#class_editorfeatureprofile_method_save_to_file) ( path: [`String`](class_string.md) )                                                                                                                            |
| `void`                            | [`set_disable_class`](class_editorfeatureprofile.md#class_editorfeatureprofile_method_set_disable_class) ( class_name: [`StringName`](class_stringname.md), disable: [`bool`](class_bool.md) )                                                                  |
| `void`                            | [`set_disable_class_editor`](class_editorfeatureprofile.md#class_editorfeatureprofile_method_set_disable_class_editor) ( class_name: [`StringName`](class_stringname.md), disable: [`bool`](class_bool.md) )                                                    |
| `void`                            | [`set_disable_class_property`](class_editorfeatureprofile.md#class_editorfeatureprofile_method_set_disable_class_property) ( class_name: [`StringName`](class_stringname.md), property: [`StringName`](class_stringname.md), disable: [`bool`](class_bool.md) ) |
| `void`                            | [`set_disable_feature`](class_editorfeatureprofile.md#class_editorfeatureprofile_method_set_disable_feature) ( feature: [Feature](#enum_editorfeatureprofile_feature), disable: [`bool`](class_bool.md) )                                                       |

<!-- rst-class:: classref-section-separator -->

---

## 枚举

<div id="_class_enum_editorfeatureprofile_feature"></div>

enum **Feature**: <div id="enum_editorfeatureprofile_feature"></div>

<div id="_class_editorfeatureprofile_constant_feature_3d"></div>

[Feature](#enum_editorfeatureprofile_feature) **FEATURE_3D** = ``0``

The 3D editor. If this feature is disabled, the 3D editor won't display but 3D nodes will still display in the Create New Node dialog.

<div id="_class_editorfeatureprofile_constant_feature_script"></div>

[Feature](#enum_editorfeatureprofile_feature) **FEATURE_SCRIPT** = ``1``

The Script tab, which contains the script editor and class reference browser. If this feature is disabled, the Script tab won't display.

<div id="_class_editorfeatureprofile_constant_feature_asset_lib"></div>

[Feature](#enum_editorfeatureprofile_feature) **FEATURE_ASSET_LIB** = ``2``

The AssetLib tab. If this feature is disabled, the AssetLib tab won't display.

<div id="_class_editorfeatureprofile_constant_feature_scene_tree"></div>

[Feature](#enum_editorfeatureprofile_feature) **FEATURE_SCENE_TREE** = ``3``

Scene tree editing. If this feature is disabled, the Scene tree dock will still be visible but will be read-only.

<div id="_class_editorfeatureprofile_constant_feature_node_dock"></div>

[Feature](#enum_editorfeatureprofile_feature) **FEATURE_NODE_DOCK** = ``4``

The Node dock. If this feature is disabled, signals and groups won't be visible and modifiable from the editor.

<div id="_class_editorfeatureprofile_constant_feature_filesystem_dock"></div>

[Feature](#enum_editorfeatureprofile_feature) **FEATURE_FILESYSTEM_DOCK** = ``5``

The FileSystem dock. If this feature is disabled, the FileSystem dock won't be visible.

<div id="_class_editorfeatureprofile_constant_feature_import_dock"></div>

[Feature](#enum_editorfeatureprofile_feature) **FEATURE_IMPORT_DOCK** = ``6``

The Import dock. If this feature is disabled, the Import dock won't be visible.

<div id="_class_editorfeatureprofile_constant_feature_history_dock"></div>

[Feature](#enum_editorfeatureprofile_feature) **FEATURE_HISTORY_DOCK** = ``7``

The History dock. If this feature is disabled, the History dock won't be visible.

<div id="_class_editorfeatureprofile_constant_feature_game"></div>

[Feature](#enum_editorfeatureprofile_feature) **FEATURE_GAME** = ``8``

The Game tab, which allows embedding the game window and selecting nodes by clicking inside of it. If this feature is disabled, the Game tab won't display.

<div id="_class_editorfeatureprofile_constant_feature_max"></div>

[Feature](#enum_editorfeatureprofile_feature) **FEATURE_MAX** = ``9``

Represents the size of the [Feature](#enum_editorfeatureprofile_feature) enum.

<!-- rst-class:: classref-section-separator -->

---

## 方法说明

<div id="_class_editorfeatureprofile_method_get_feature_name"></div>

[`String`](class_string.md) **get_feature_name** ( feature: [Feature](#enum_editorfeatureprofile_feature) )<div id="class_editorfeatureprofile_method_get_feature_name"></div>

Returns the specified `feature`'s human-readable name.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorfeatureprofile_method_is_class_disabled"></div>

[`bool`](class_bool.md) **is_class_disabled** ( class_name: [`StringName`](class_stringname.md) ) const[^const]<div id="class_editorfeatureprofile_method_is_class_disabled"></div>

Returns `true` if the class specified by `class_name` is disabled. When disabled, the class won't appear in the Create New Node dialog.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorfeatureprofile_method_is_class_editor_disabled"></div>

[`bool`](class_bool.md) **is_class_editor_disabled** ( class_name: [`StringName`](class_stringname.md) ) const[^const]<div id="class_editorfeatureprofile_method_is_class_editor_disabled"></div>

Returns `true` if editing for the class specified by `class_name` is disabled. When disabled, the class will still appear in the Create New Node dialog but the Inspector will be read-only when selecting a node that extends the class.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorfeatureprofile_method_is_class_property_disabled"></div>

[`bool`](class_bool.md) **is_class_property_disabled** ( class_name: [`StringName`](class_stringname.md), property: [`StringName`](class_stringname.md) ) const[^const]<div id="class_editorfeatureprofile_method_is_class_property_disabled"></div>

Returns `true` if `property` is disabled in the class specified by `class_name`. When a property is disabled, it won't appear in the Inspector when selecting a node that extends the class specified by `class_name`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorfeatureprofile_method_is_feature_disabled"></div>

[`bool`](class_bool.md) **is_feature_disabled** ( feature: [Feature](#enum_editorfeatureprofile_feature) ) const[^const]<div id="class_editorfeatureprofile_method_is_feature_disabled"></div>

Returns `true` if the `feature` is disabled. When a feature is disabled, it will disappear from the editor entirely.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorfeatureprofile_method_load_from_file"></div>

[Error](#enum_@globalscope_error) **load_from_file** ( path: [`String`](class_string.md) )<div id="class_editorfeatureprofile_method_load_from_file"></div>

Loads an editor feature profile from a file. The file must follow the JSON format obtained by using the feature profile manager's **Export** button or the [`save_to_file`](class_editorfeatureprofile.md#class_editorfeatureprofile_method_save_to_file) method.

 **Note:** Feature profiles created via the user interface are loaded from the `feature_profiles` directory, as a file with the `.profile` extension. The editor configuration folder can be found by using [`EditorPaths.get_config_dir`](class_editorpaths.md#class_editorpaths_method_get_config_dir).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorfeatureprofile_method_save_to_file"></div>

[Error](#enum_@globalscope_error) **save_to_file** ( path: [`String`](class_string.md) )<div id="class_editorfeatureprofile_method_save_to_file"></div>

Saves the editor feature profile to a file in JSON format. It can then be imported using the feature profile manager's **Import** button or the [`load_from_file`](class_editorfeatureprofile.md#class_editorfeatureprofile_method_load_from_file) method.

 **Note:** Feature profiles created via the user interface are saved in the `feature_profiles` directory, as a file with the `.profile` extension. The editor configuration folder can be found by using [`EditorPaths.get_config_dir`](class_editorpaths.md#class_editorpaths_method_get_config_dir).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorfeatureprofile_method_set_disable_class"></div>

`void` **set_disable_class** ( class_name: [`StringName`](class_stringname.md), disable: [`bool`](class_bool.md) )<div id="class_editorfeatureprofile_method_set_disable_class"></div>

If `disable` is `true`, disables the class specified by `class_name`. When disabled, the class won't appear in the Create New Node dialog.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorfeatureprofile_method_set_disable_class_editor"></div>

`void` **set_disable_class_editor** ( class_name: [`StringName`](class_stringname.md), disable: [`bool`](class_bool.md) )<div id="class_editorfeatureprofile_method_set_disable_class_editor"></div>

If `disable` is `true`, disables editing for the class specified by `class_name`. When disabled, the class will still appear in the Create New Node dialog but the Inspector will be read-only when selecting a node that extends the class.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorfeatureprofile_method_set_disable_class_property"></div>

`void` **set_disable_class_property** ( class_name: [`StringName`](class_stringname.md), property: [`StringName`](class_stringname.md), disable: [`bool`](class_bool.md) )<div id="class_editorfeatureprofile_method_set_disable_class_property"></div>

If `disable` is `true`, disables editing for `property` in the class specified by `class_name`. When a property is disabled, it won't appear in the Inspector when selecting a node that extends the class specified by `class_name`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorfeatureprofile_method_set_disable_feature"></div>

`void` **set_disable_feature** ( feature: [Feature](#enum_editorfeatureprofile_feature), disable: [`bool`](class_bool.md) )<div id="class_editorfeatureprofile_method_set_disable_feature"></div>

If `disable` is `true`, disables the editor feature specified in `feature`. When a feature is disabled, it will disappear from the editor entirely.

[^virtual]: 本方法通常需要用户覆盖才能生效。
[^const]: 本方法无副作用，不会修改该实例的任何成员变量。
[^vararg]: 本方法除了能接受在此处描述的参数外，还能够继续接受任意数量的参数。
[^constructor]: 本方法用于构造某个类型。
[^static]: 调用本方法无需实例，可直接使用类名进行调用。
[^operator]: 本方法描述的是使用本类型作为左操作数的有效运算符。
[^bitfield]: 这个值是由下列位标志构成位掩码的整数。
[^void]: 无返回值。
