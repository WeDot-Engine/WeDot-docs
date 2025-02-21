<!-- ⚠ 请勿编辑本文件 ⚠ -->
<!-- 本文档使用脚本从 WeDot 引擎源码仓库生成。 -->
<!-- 生成脚本：https://github.com/WeDot-Engine/WeDot/tree/master/doc/tools/make_md.py； -->
<!-- 原文件：https://github.com/WeDot-Engine/WeDot/tree/master/doc/classes/EditorFileSystemImportFormatSupportQuery.xml。 -->

<div id="_class_editorfilesystemimportformatsupportquery"></div>

# EditorFileSystemImportFormatSupportQuery

**继承：** [`RefCounted`](class_refcounted.md) **<** [`Object`](class_object.md)

Used to query and configure import format support.

## 描述

This class is used to query and configure a certain import format. It is used in conjunction with asset format import plugins.

## 方法

|||
|:-:|:--|
| [`PackedStringArray`](class_packedstringarray.md) | [`_get_file_extensions`](class_editorfilesystemimportformatsupportquery.md#class_editorfilesystemimportformatsupportquery_private_method__get_file_extensions) ( ) virtual[^virtual] const[^const] |
| [`bool`](class_bool.md)                           | [`_is_active`](class_editorfilesystemimportformatsupportquery.md#class_editorfilesystemimportformatsupportquery_private_method__is_active) ( ) virtual[^virtual] const[^const]                     |
| [`bool`](class_bool.md)                           | [`_query`](class_editorfilesystemimportformatsupportquery.md#class_editorfilesystemimportformatsupportquery_private_method__query) ( ) virtual[^virtual] const[^const]                             |

<!-- rst-class:: classref-section-separator -->

---

## 方法说明

<div id="_class_editorfilesystemimportformatsupportquery_private_method__get_file_extensions"></div>

[`PackedStringArray`](class_packedstringarray.md) **_get_file_extensions** ( ) virtual[^virtual] const[^const]<div id="class_editorfilesystemimportformatsupportquery_private_method__get_file_extensions"></div>

Return the file extensions supported.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorfilesystemimportformatsupportquery_private_method__is_active"></div>

[`bool`](class_bool.md) **_is_active** ( ) virtual[^virtual] const[^const]<div id="class_editorfilesystemimportformatsupportquery_private_method__is_active"></div>

Return whether this importer is active.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorfilesystemimportformatsupportquery_private_method__query"></div>

[`bool`](class_bool.md) **_query** ( ) virtual[^virtual] const[^const]<div id="class_editorfilesystemimportformatsupportquery_private_method__query"></div>

Query support. Return false if import must not continue.

[^virtual]: 本方法通常需要用户覆盖才能生效。
[^const]: 本方法无副作用，不会修改该实例的任何成员变量。
[^vararg]: 本方法除了能接受在此处描述的参数外，还能够继续接受任意数量的参数。
[^constructor]: 本方法用于构造某个类型。
[^static]: 调用本方法无需实例，可直接使用类名进行调用。
[^operator]: 本方法描述的是使用本类型作为左操作数的有效运算符。
[^bitfield]: 这个值是由下列位标志构成位掩码的整数。
[^void]: 无返回值。
