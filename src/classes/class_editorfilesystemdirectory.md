<!-- ⚠ 请勿编辑本文件 ⚠ -->
<!-- 本文档使用脚本从 WeDot 引擎源码仓库生成。 -->
<!-- 生成脚本：https://github.com/WeDot-Engine/WeDot/tree/master/doc/tools/make_md.py； -->
<!-- 原文件：https://github.com/WeDot-Engine/WeDot/tree/master/doc/classes/EditorFileSystemDirectory.xml。 -->

<div id="_class_editorfilesystemdirectory"></div>

# EditorFileSystemDirectory

**继承：** [`Object`](class_object.md)

A directory for the resource filesystem.

## 描述

A more generalized, low-level variation of the directory concept.

## 方法

|||
|:-:|:--|
| [`int`](class_int.md)                                             | [`find_dir_index`](class_editorfilesystemdirectory.md#class_editorfilesystemdirectory_method_find_dir_index) ( name: [`String`](class_string.md) ) const[^const]                        |
| [`int`](class_int.md)                                             | [`find_file_index`](class_editorfilesystemdirectory.md#class_editorfilesystemdirectory_method_find_file_index) ( name: [`String`](class_string.md) ) const[^const]                      |
| [`String`](class_string.md)                                       | [`get_file`](class_editorfilesystemdirectory.md#class_editorfilesystemdirectory_method_get_file) ( idx: [`int`](class_int.md) ) const[^const]                                           |
| [`int`](class_int.md)                                             | [`get_file_count`](class_editorfilesystemdirectory.md#class_editorfilesystemdirectory_method_get_file_count) ( ) const[^const]                                                          |
| [`bool`](class_bool.md)                                           | [`get_file_import_is_valid`](class_editorfilesystemdirectory.md#class_editorfilesystemdirectory_method_get_file_import_is_valid) ( idx: [`int`](class_int.md) ) const[^const]           |
| [`String`](class_string.md)                                       | [`get_file_path`](class_editorfilesystemdirectory.md#class_editorfilesystemdirectory_method_get_file_path) ( idx: [`int`](class_int.md) ) const[^const]                                 |
| [`String`](class_string.md)                                       | [`get_file_script_class_extends`](class_editorfilesystemdirectory.md#class_editorfilesystemdirectory_method_get_file_script_class_extends) ( idx: [`int`](class_int.md) ) const[^const] |
| [`String`](class_string.md)                                       | [`get_file_script_class_name`](class_editorfilesystemdirectory.md#class_editorfilesystemdirectory_method_get_file_script_class_name) ( idx: [`int`](class_int.md) ) const[^const]       |
| [`StringName`](class_stringname.md)                               | [`get_file_type`](class_editorfilesystemdirectory.md#class_editorfilesystemdirectory_method_get_file_type) ( idx: [`int`](class_int.md) ) const[^const]                                 |
| [`String`](class_string.md)                                       | [`get_name`](class_editorfilesystemdirectory.md#class_editorfilesystemdirectory_method_get_name) ( )                                                                                    |
| [`EditorFileSystemDirectory`](class_editorfilesystemdirectory.md) | [`get_parent`](class_editorfilesystemdirectory.md#class_editorfilesystemdirectory_method_get_parent) ( )                                                                                |
| [`String`](class_string.md)                                       | [`get_path`](class_editorfilesystemdirectory.md#class_editorfilesystemdirectory_method_get_path) ( ) const[^const]                                                                      |
| [`EditorFileSystemDirectory`](class_editorfilesystemdirectory.md) | [`get_subdir`](class_editorfilesystemdirectory.md#class_editorfilesystemdirectory_method_get_subdir) ( idx: [`int`](class_int.md) )                                                     |
| [`int`](class_int.md)                                             | [`get_subdir_count`](class_editorfilesystemdirectory.md#class_editorfilesystemdirectory_method_get_subdir_count) ( ) const[^const]                                                      |

<!-- rst-class:: classref-section-separator -->

---

## 方法说明

<div id="_class_editorfilesystemdirectory_method_find_dir_index"></div>

[`int`](class_int.md) **find_dir_index** ( name: [`String`](class_string.md) ) const[^const]<div id="class_editorfilesystemdirectory_method_find_dir_index"></div>

Returns the index of the directory with name `name` or `-1` if not found.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorfilesystemdirectory_method_find_file_index"></div>

[`int`](class_int.md) **find_file_index** ( name: [`String`](class_string.md) ) const[^const]<div id="class_editorfilesystemdirectory_method_find_file_index"></div>

Returns the index of the file with name `name` or `-1` if not found.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorfilesystemdirectory_method_get_file"></div>

[`String`](class_string.md) **get_file** ( idx: [`int`](class_int.md) ) const[^const]<div id="class_editorfilesystemdirectory_method_get_file"></div>

Returns the name of the file at index `idx`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorfilesystemdirectory_method_get_file_count"></div>

[`int`](class_int.md) **get_file_count** ( ) const[^const]<div id="class_editorfilesystemdirectory_method_get_file_count"></div>

Returns the number of files in this directory.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorfilesystemdirectory_method_get_file_import_is_valid"></div>

[`bool`](class_bool.md) **get_file_import_is_valid** ( idx: [`int`](class_int.md) ) const[^const]<div id="class_editorfilesystemdirectory_method_get_file_import_is_valid"></div>

Returns `true` if the file at index `idx` imported properly.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorfilesystemdirectory_method_get_file_path"></div>

[`String`](class_string.md) **get_file_path** ( idx: [`int`](class_int.md) ) const[^const]<div id="class_editorfilesystemdirectory_method_get_file_path"></div>

Returns the path to the file at index `idx`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorfilesystemdirectory_method_get_file_script_class_extends"></div>

[`String`](class_string.md) **get_file_script_class_extends** ( idx: [`int`](class_int.md) ) const[^const]<div id="class_editorfilesystemdirectory_method_get_file_script_class_extends"></div>

Returns the base class of the script class defined in the file at index `idx`. If the file doesn't define a script class using the `class_name` syntax, this will return an empty string.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorfilesystemdirectory_method_get_file_script_class_name"></div>

[`String`](class_string.md) **get_file_script_class_name** ( idx: [`int`](class_int.md) ) const[^const]<div id="class_editorfilesystemdirectory_method_get_file_script_class_name"></div>

Returns the name of the script class defined in the file at index `idx`. If the file doesn't define a script class using the `class_name` syntax, this will return an empty string.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorfilesystemdirectory_method_get_file_type"></div>

[`StringName`](class_stringname.md) **get_file_type** ( idx: [`int`](class_int.md) ) const[^const]<div id="class_editorfilesystemdirectory_method_get_file_type"></div>

Returns the resource type of the file at index `idx`. This returns a string such as `"Resource"` or `"GDScript"`, *not* a file extension such as `".gd"`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorfilesystemdirectory_method_get_name"></div>

[`String`](class_string.md) **get_name** ( )<div id="class_editorfilesystemdirectory_method_get_name"></div>

Returns the name of this directory.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorfilesystemdirectory_method_get_parent"></div>

[`EditorFileSystemDirectory`](class_editorfilesystemdirectory.md) **get_parent** ( )<div id="class_editorfilesystemdirectory_method_get_parent"></div>

Returns the parent directory for this directory or `null` if called on a directory at `res://` or `user://`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorfilesystemdirectory_method_get_path"></div>

[`String`](class_string.md) **get_path** ( ) const[^const]<div id="class_editorfilesystemdirectory_method_get_path"></div>

Returns the path to this directory.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorfilesystemdirectory_method_get_subdir"></div>

[`EditorFileSystemDirectory`](class_editorfilesystemdirectory.md) **get_subdir** ( idx: [`int`](class_int.md) )<div id="class_editorfilesystemdirectory_method_get_subdir"></div>

Returns the subdirectory at index `idx`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorfilesystemdirectory_method_get_subdir_count"></div>

[`int`](class_int.md) **get_subdir_count** ( ) const[^const]<div id="class_editorfilesystemdirectory_method_get_subdir_count"></div>

Returns the number of subdirectories in this directory.

[^virtual]: 本方法通常需要用户覆盖才能生效。
[^const]: 本方法无副作用，不会修改该实例的任何成员变量。
[^vararg]: 本方法除了能接受在此处描述的参数外，还能够继续接受任意数量的参数。
[^constructor]: 本方法用于构造某个类型。
[^static]: 调用本方法无需实例，可直接使用类名进行调用。
[^operator]: 本方法描述的是使用本类型作为左操作数的有效运算符。
[^bitfield]: 这个值是由下列位标志构成位掩码的整数。
[^void]: 无返回值。
