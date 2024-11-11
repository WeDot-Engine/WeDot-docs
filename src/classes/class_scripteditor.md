<!-- ⚠ 请勿编辑本文件 ⚠ -->
<!-- 本文档使用脚本从 WeDot 引擎源码仓库生成。 -->
<!-- 生成脚本：https://github.com/WeDot-Engine/WeDot/tree/master/doc/tools/make_md.py； -->
<!-- 原文件：https://github.com/WeDot-Engine/WeDot/tree/master/doc/classes/ScriptEditor.xml。 -->

<div id="_class_scripteditor"></div>

# ScriptEditor

**继承：** [`PanelContainer`](class_panelcontainer.md) **<** [`Container`](class_container.md) **<** [`Control`](class_control.md) **<** [`CanvasItem`](class_canvasitem.md) **<** [`Node`](class_node.md) **<** [`Object`](class_object.md)

Godot editor's script editor.

## 描述

Godot editor's script editor.

 **Note:** This class shouldn't be instantiated directly. Instead, access the singleton using [`EditorInterface.get_script_editor`](class_editorinterface.md#class_editorinterface_method_get_script_editor).

## 方法

|||
|:-:|:--|
| [`PackedStringArray`](class_packedstringarray.md)                       | [`get_breakpoints`](class_scripteditor.md#class_scripteditor_method_get_breakpoints) ( )                                                                                                               |
| [`ScriptEditorBase`](class_scripteditorbase.md)                         | [`get_current_editor`](class_scripteditor.md#class_scripteditor_method_get_current_editor) ( ) const[^const]                                                                                           |
| [`Script`](class_script.md)                                             | [`get_current_script`](class_scripteditor.md#class_scripteditor_method_get_current_script) ( )                                                                                                         |
| [Array](class_array.md) [`ScriptEditorBase`](class_scripteditorbase.md) | [`get_open_script_editors`](class_scripteditor.md#class_scripteditor_method_get_open_script_editors) ( ) const[^const]                                                                                 |
| [Array](class_array.md) [`Script`](class_script.md)                     | [`get_open_scripts`](class_scripteditor.md#class_scripteditor_method_get_open_scripts) ( ) const[^const]                                                                                               |
| `void`                                                                  | [`goto_help`](class_scripteditor.md#class_scripteditor_method_goto_help) ( topic: [`String`](class_string.md) )                                                                                        |
| `void`                                                                  | [`goto_line`](class_scripteditor.md#class_scripteditor_method_goto_line) ( line_number: [`int`](class_int.md) )                                                                                        |
| `void`                                                                  | [`open_script_create_dialog`](class_scripteditor.md#class_scripteditor_method_open_script_create_dialog) ( base_name: [`String`](class_string.md), base_path: [`String`](class_string.md) )            |
| `void`                                                                  | [`register_syntax_highlighter`](class_scripteditor.md#class_scripteditor_method_register_syntax_highlighter) ( syntax_highlighter: [`EditorSyntaxHighlighter`](class_editorsyntaxhighlighter.md) )     |
| `void`                                                                  | [`unregister_syntax_highlighter`](class_scripteditor.md#class_scripteditor_method_unregister_syntax_highlighter) ( syntax_highlighter: [`EditorSyntaxHighlighter`](class_editorsyntaxhighlighter.md) ) |
| `void`                                                                  | [`update_docs_from_script`](class_scripteditor.md#class_scripteditor_method_update_docs_from_script) ( script: [`Script`](class_script.md) )                                                           |

<!-- rst-class:: classref-section-separator -->

---

## 信号

<div id="_class_class_scripteditor_signal_editor_script_changed"></div>

**editor_script_changed** ( script: [`Script`](class_script.md) ) <div id="class_scripteditor_signal_editor_script_changed"></div>

Emitted when user changed active script. Argument is a freshly activated [`Script`](class_script.md).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_class_scripteditor_signal_script_close"></div>

**script_close** ( script: [`Script`](class_script.md) ) <div id="class_scripteditor_signal_script_close"></div>

Emitted when editor is about to close the active script. Argument is a [`Script`](class_script.md) that is going to be closed.

<!-- rst-class:: classref-section-separator -->

---

## 方法说明

<div id="_class_scripteditor_method_get_breakpoints"></div>

[`PackedStringArray`](class_packedstringarray.md) **get_breakpoints** ( )<div id="class_scripteditor_method_get_breakpoints"></div>

Returns array of breakpoints.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_scripteditor_method_get_current_editor"></div>

[`ScriptEditorBase`](class_scripteditorbase.md) **get_current_editor** ( ) const[^const]<div id="class_scripteditor_method_get_current_editor"></div>

Returns the [`ScriptEditorBase`](class_scripteditorbase.md) object that the user is currently editing.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_scripteditor_method_get_current_script"></div>

[`Script`](class_script.md) **get_current_script** ( )<div id="class_scripteditor_method_get_current_script"></div>

Returns a [`Script`](class_script.md) that is currently active in editor.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_scripteditor_method_get_open_script_editors"></div>

[Array](class_array.md) [`ScriptEditorBase`](class_scripteditorbase.md) **get_open_script_editors** ( ) const[^const]<div id="class_scripteditor_method_get_open_script_editors"></div>

Returns an array with all [`ScriptEditorBase`](class_scripteditorbase.md) objects which are currently open in editor.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_scripteditor_method_get_open_scripts"></div>

[Array](class_array.md) [`Script`](class_script.md) **get_open_scripts** ( ) const[^const]<div id="class_scripteditor_method_get_open_scripts"></div>

Returns an array with all [`Script`](class_script.md) objects which are currently open in editor.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_scripteditor_method_goto_help"></div>

`void` **goto_help** ( topic: [`String`](class_string.md) )<div id="class_scripteditor_method_goto_help"></div>

Opens help for the given topic. The `topic` is an encoded string that controls which class, method, constant, signal, annotation, property, or theme item should be focused.

The supported `topic` formats include `class_name:class`, `class_method:class:method`, `class_constant:class:constant`, `class_signal:class:signal`, `class_annotation:class:@annotation`, `class_property:class:property`, and `class_theme_item:class:item`, where `class` is the class name, `method` is the method name, `constant` is the constant name, `signal` is the signal name, `annotation` is the annotation name, `property` is the property name, and `item` is the theme item.

```

    # Shows help for the Node class.
    class_name:Node
    # Shows help for the global min function.
    # Global objects are accessible in the `@GlobalScope` namespace, shown here.
    class_method:@GlobalScope:min
    # Shows help for get_viewport in the Node class.
    class_method:Node:get_viewport
    # Shows help for the Input constant MOUSE_BUTTON_MIDDLE.
    class_constant:Input:MOUSE_BUTTON_MIDDLE
    # Shows help for the BaseButton signal pressed.
    class_signal:BaseButton:pressed
    # Shows help for the CanvasItem property visible.
    class_property:CanvasItem:visible
    # Shows help for the GDScript annotation export.
    # Annotations should be prefixed with the `@` symbol in the descriptor, as shown here.
    class_annotation:@GDScript:@export
    # Shows help for the GraphNode theme item named panel_selected.
    class_theme_item:GraphNode:panel_selected
```



<!-- rst-class:: classref-item-separator -->

---

<div id="_class_scripteditor_method_goto_line"></div>

`void` **goto_line** ( line_number: [`int`](class_int.md) )<div id="class_scripteditor_method_goto_line"></div>

Goes to the specified line in the current script.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_scripteditor_method_open_script_create_dialog"></div>

`void` **open_script_create_dialog** ( base_name: [`String`](class_string.md), base_path: [`String`](class_string.md) )<div id="class_scripteditor_method_open_script_create_dialog"></div>

Opens the script create dialog. The script will extend `base_name`. The file extension can be omitted from `base_path`. It will be added based on the selected scripting language.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_scripteditor_method_register_syntax_highlighter"></div>

`void` **register_syntax_highlighter** ( syntax_highlighter: [`EditorSyntaxHighlighter`](class_editorsyntaxhighlighter.md) )<div id="class_scripteditor_method_register_syntax_highlighter"></div>

Registers the [`EditorSyntaxHighlighter`](class_editorsyntaxhighlighter.md) to the editor, the [`EditorSyntaxHighlighter`](class_editorsyntaxhighlighter.md) will be available on all open scripts.

 **Note:** Does not apply to scripts that are already opened.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_scripteditor_method_unregister_syntax_highlighter"></div>

`void` **unregister_syntax_highlighter** ( syntax_highlighter: [`EditorSyntaxHighlighter`](class_editorsyntaxhighlighter.md) )<div id="class_scripteditor_method_unregister_syntax_highlighter"></div>

Unregisters the [`EditorSyntaxHighlighter`](class_editorsyntaxhighlighter.md) from the editor.

 **Note:** The [`EditorSyntaxHighlighter`](class_editorsyntaxhighlighter.md) will still be applied to scripts that are already opened.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_scripteditor_method_update_docs_from_script"></div>

`void` **update_docs_from_script** ( script: [`Script`](class_script.md) )<div id="class_scripteditor_method_update_docs_from_script"></div>

Updates the documentation for the given `script` if the script's documentation is currently open.

 **Note:** This should be called whenever the script is changed to keep the open documentation state up to date.

[^virtual]: 本方法通常需要用户覆盖才能生效。
[^const]: 本方法无副作用，不会修改该实例的任何成员变量。
[^vararg]: 本方法除了能接受在此处描述的参数外，还能够继续接受任意数量的参数。
[^constructor]: 本方法用于构造某个类型。
[^static]: 调用本方法无需实例，可直接使用类名进行调用。
[^operator]: 本方法描述的是使用本类型作为左操作数的有效运算符。
[^bitfield]: 这个值是由下列位标志构成位掩码的整数。
[^void]: 无返回值。
