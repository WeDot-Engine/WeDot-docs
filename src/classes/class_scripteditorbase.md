<!-- ⚠ 请勿编辑本文件 ⚠ -->
<!-- 本文档使用脚本从 WeDot 引擎源码仓库生成。 -->
<!-- 生成脚本：https://github.com/WeDot-Engine/WeDot/tree/master/doc/tools/make_md.py； -->
<!-- 原文件：https://github.com/WeDot-Engine/WeDot/tree/master/doc/classes/ScriptEditorBase.xml。 -->

<div id="_class_scripteditorbase"></div>

# ScriptEditorBase

**继承：** [`VBoxContainer`](class_vboxcontainer.md) **<** [`BoxContainer`](class_boxcontainer.md) **<** [`Container`](class_container.md) **<** [`Control`](class_control.md) **<** [`CanvasItem`](class_canvasitem.md) **<** [`Node`](class_node.md) **<** [`Object`](class_object.md)

Base editor for editing scripts in the [`ScriptEditor`](class_scripteditor.md).

## 描述

Base editor for editing scripts in the [`ScriptEditor`](class_scripteditor.md). This does not include documentation items.

## 方法

|||
|:-:|:--|
| `void`                        | [`add_syntax_highlighter`](class_scripteditorbase.md#class_scripteditorbase_method_add_syntax_highlighter) ( highlighter: [`EditorSyntaxHighlighter`](class_editorsyntaxhighlighter.md) ) |
| [`Control`](class_control.md) | [`get_base_editor`](class_scripteditorbase.md#class_scripteditorbase_method_get_base_editor) ( ) const[^const]                                                                            |

<!-- rst-class:: classref-section-separator -->

---

## 信号

<div id="_class_class_scripteditorbase_signal_edited_script_changed"></div>

**edited_script_changed** ( ) <div id="class_scripteditorbase_signal_edited_script_changed"></div>

Emitted after script validation.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_class_scripteditorbase_signal_go_to_help"></div>

**go_to_help** ( what: [`String`](class_string.md) ) <div id="class_scripteditorbase_signal_go_to_help"></div>

Emitted when the user requests a specific documentation page.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_class_scripteditorbase_signal_go_to_method"></div>

**go_to_method** ( script: [`Object`](class_object.md), method: [`String`](class_string.md) ) <div id="class_scripteditorbase_signal_go_to_method"></div>

Emitted when the user requests to view a specific method of a script, similar to [`request_open_script_at_line`](class_scripteditorbase.md#class_scripteditorbase_signal_request_open_script_at_line).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_class_scripteditorbase_signal_name_changed"></div>

**name_changed** ( ) <div id="class_scripteditorbase_signal_name_changed"></div>

Emitted after script validation or when the edited resource has changed.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_class_scripteditorbase_signal_replace_in_files_requested"></div>

**replace_in_files_requested** ( text: [`String`](class_string.md) ) <div id="class_scripteditorbase_signal_replace_in_files_requested"></div>

Emitted when the user request to find and replace text in the file system.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_class_scripteditorbase_signal_request_help"></div>

**request_help** ( topic: [`String`](class_string.md) ) <div id="class_scripteditorbase_signal_request_help"></div>

Emitted when the user requests contextual help.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_class_scripteditorbase_signal_request_open_script_at_line"></div>

**request_open_script_at_line** ( script: [`Object`](class_object.md), line: [`int`](class_int.md) ) <div id="class_scripteditorbase_signal_request_open_script_at_line"></div>

Emitted when the user requests to view a specific line of a script, similar to [`go_to_method`](class_scripteditorbase.md#class_scripteditorbase_signal_go_to_method).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_class_scripteditorbase_signal_request_save_history"></div>

**request_save_history** ( ) <div id="class_scripteditorbase_signal_request_save_history"></div>

Emitted when the user contextual goto and the item is in the same script.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_class_scripteditorbase_signal_request_save_previous_state"></div>

**request_save_previous_state** ( state: [`Dictionary`](class_dictionary.md) ) <div id="class_scripteditorbase_signal_request_save_previous_state"></div>

Emitted when the user changes current script or moves caret by 10 or more columns within the same script.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_class_scripteditorbase_signal_search_in_files_requested"></div>

**search_in_files_requested** ( text: [`String`](class_string.md) ) <div id="class_scripteditorbase_signal_search_in_files_requested"></div>

Emitted when the user request to search text in the file system.

<!-- rst-class:: classref-section-separator -->

---

## 方法说明

<div id="_class_scripteditorbase_method_add_syntax_highlighter"></div>

`void` **add_syntax_highlighter** ( highlighter: [`EditorSyntaxHighlighter`](class_editorsyntaxhighlighter.md) )<div id="class_scripteditorbase_method_add_syntax_highlighter"></div>

Adds a [`EditorSyntaxHighlighter`](class_editorsyntaxhighlighter.md) to the open script.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_scripteditorbase_method_get_base_editor"></div>

[`Control`](class_control.md) **get_base_editor** ( ) const[^const]<div id="class_scripteditorbase_method_get_base_editor"></div>

Returns the underlying [`Control`](class_control.md) used for editing scripts. For text scripts, this is a [`CodeEdit`](class_codeedit.md).

[^virtual]: 本方法通常需要用户覆盖才能生效。
[^const]: 本方法无副作用，不会修改该实例的任何成员变量。
[^vararg]: 本方法除了能接受在此处描述的参数外，还能够继续接受任意数量的参数。
[^constructor]: 本方法用于构造某个类型。
[^static]: 调用本方法无需实例，可直接使用类名进行调用。
[^operator]: 本方法描述的是使用本类型作为左操作数的有效运算符。
[^bitfield]: 这个值是由下列位标志构成位掩码的整数。
[^void]: 无返回值。
