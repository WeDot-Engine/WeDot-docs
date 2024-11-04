<!-- ⚠ 请勿编辑本文件 ⚠ -->
<!-- 本文档使用脚本从 WeDot 引擎源码仓库生成。 -->
<!-- 生成脚本：https://github.com/WeDot-Engine/WeDot/tree/4.3/doc/tools/make_md.py； -->
<!-- 原文件：https://github.com/WeDot-Engine/WeDot/tree/4.3/doc/classes/EditorSyntaxHighlighter.xml。 -->

<div id="_class_editorsyntaxhighlighter"></div>

# EditorSyntaxHighlighter

**继承：** [`SyntaxHighlighter`](class_syntaxhighlighter.md) **<** [`Resource`](class_resource.md) **<** [`RefCounted`](class_refcounted.md) **<** [`Object`](class_object.md)

Base class for [`SyntaxHighlighter`](class_syntaxhighlighter.md) used by the [`ScriptEditor`](class_scripteditor.md).

## 描述

Base class that all [`SyntaxHighlighter`](class_syntaxhighlighter.md) s used by the [`ScriptEditor`](class_scripteditor.md) extend from.

Add a syntax highlighter to an individual script by calling [`ScriptEditorBase.add_syntax_highlighter`](#class_scripteditorbase_method_add_syntax_highlighter). To apply to all scripts on open, call [`ScriptEditor.register_syntax_highlighter`](#class_scripteditor_method_register_syntax_highlighter).

## 方法

| [`String`](class_string.md)                       | [`_get_name`](#class_editorsyntaxhighlighter_private_method__get_name) ( ) virtual[^virtual] const[^const]                               |
| [`PackedStringArray`](class_packedstringarray.md) | [`_get_supported_languages`](#class_editorsyntaxhighlighter_private_method__get_supported_languages) ( ) virtual[^virtual] const[^const] |

<!-- rst-class:: classref-section-separator -->

---

## 方法说明

<div id="_class_editorsyntaxhighlighter_private_method__get_name"></div>

[`String`](class_string.md) **_get_name** ( ) virtual[^virtual] const[^const]<div id="class_editorsyntaxhighlighter_private_method__get_name"></div>

Virtual method which can be overridden to return the syntax highlighter name.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorsyntaxhighlighter_private_method__get_supported_languages"></div>

[`PackedStringArray`](class_packedstringarray.md) **_get_supported_languages** ( ) virtual[^virtual] const[^const]<div id="class_editorsyntaxhighlighter_private_method__get_supported_languages"></div>

Virtual method which can be overridden to return the supported language names.

[^virtual]: 本方法通常需要用户覆盖才能生效。
[^const]: 本方法无副作用，不会修改该实例的任何成员变量。
[^vararg]: 本方法除了能接受在此处描述的参数外，还能够继续接受任意数量的参数。
[^constructor]: 本方法用于构造某个类型。
[^static]: 调用本方法无需实例，可直接使用类名进行调用。
[^operator]: 本方法描述的是使用本类型作为左操作数的有效运算符。
[^bitfield]: 这个值是由下列位标志构成位掩码的整数。
[^void]: 无返回值。
