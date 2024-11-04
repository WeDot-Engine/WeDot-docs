<!-- ⚠ 请勿编辑本文件 ⚠ -->
<!-- 本文档使用脚本从 WeDot 引擎源码仓库生成。 -->
<!-- 生成脚本：https://github.com/WeDot-Engine/WeDot/tree/4.3/doc/tools/make_md.py； -->
<!-- 原文件：https://github.com/WeDot-Engine/WeDot/tree/4.3/doc/classes/EditorTranslationParserPlugin.xml。 -->

<div id="_class_editortranslationparserplugin"></div>

# EditorTranslationParserPlugin

**继承：** [`RefCounted`](class_refcounted.md) **<** [`Object`](class_object.md)

Plugin for adding custom parsers to extract strings that are to be translated from custom files (.csv, .json etc.).

## 描述

**EditorTranslationParserPlugin** is invoked when a file is being parsed to extract strings that require translation. To define the parsing and string extraction logic, override the [`_parse_file`](#class_editortranslationparserplugin_private_method__parse_file) method in script.

Add the extracted strings to argument `msgids` or `msgids_context_plural` if context or plural is used.

When adding to `msgids_context_plural`, you must add the data using the format `["A", "B", "C"]`, where `A` represents the extracted string, `B` represents the context, and `C` represents the plural version of the extracted string. If you want to add only context but not plural, put `""` for the plural slot. The idea is the same if you only want to add plural but not context. See the code below for concrete examples.

The extracted strings will be written into a POT file selected by user under "POT Generation" in "Localization" tab in "Project Settings" menu.

Below shows an example of a custom parser that extracts strings from a CSV file to write into a POT.



```gdscript

    @tool
    extends EditorTranslationParserPlugin
    
    func _parse_file(path, msgids, msgids_context_plural):
        var file = FileAccess.open(path, FileAccess.READ)
        var text = file.get_as_text()
        var split_strs = text.split(",", false)
        for s in split_strs:
            msgids.append(s)
            #print("Extracted string: " + s)
    
    func _get_recognized_extensions():
        return ["csv"]
```

```csharp

    using Godot;
    
    [Tool]
    public partial class CustomParser : EditorTranslationParserPlugin
    {
        public override void _ParseFile(string path, Godot.Collections.Array<string> msgids, Godot.Collections.Array<Godot.Collections.Array> msgidsContextPlural)
        {
            using var file = FileAccess.Open(path, FileAccess.ModeFlags.Read);
            string text = file.GetAsText();
            string[] splitStrs = text.Split(",", allowEmpty: false);
            foreach (string s in splitStrs)
            {
                msgids.Add(s);
                //GD.Print($"Extracted string: {s}");
            }
        }
    
        public override string[] _GetRecognizedExtensions()
        {
            return new string[] { "csv" };
        }
    }
```



To add a translatable string associated with context or plural, add it to `msgids_context_plural`:



```gdscript

    # This will add a message with msgid "Test 1", msgctxt "context", and msgid_plural "test 1 plurals".
    msgids_context_plural.append(["Test 1", "context", "test 1 plurals"])
    # This will add a message with msgid "A test without context" and msgid_plural "plurals".
    msgids_context_plural.append(["A test without context", "", "plurals"])
    # This will add a message with msgid "Only with context" and msgctxt "a friendly context".
    msgids_context_plural.append(["Only with context", "a friendly context", ""])
```

```csharp

    // This will add a message with msgid "Test 1", msgctxt "context", and msgid_plural "test 1 plurals".
    msgidsContextPlural.Add(new Godot.Collections.Array{"Test 1", "context", "test 1 Plurals"});
    // This will add a message with msgid "A test without context" and msgid_plural "plurals".
    msgidsContextPlural.Add(new Godot.Collections.Array{"A test without context", "", "plurals"});
    // This will add a message with msgid "Only with context" and msgctxt "a friendly context".
    msgidsContextPlural.Add(new Godot.Collections.Array{"Only with context", "a friendly context", ""});
```



 **Note:** If you override parsing logic for standard script types (GDScript, C#, etc.), it would be better to load the `path` argument using [`ResourceLoader.load`](#class_resourceloader_method_load). This is because built-in scripts are loaded as [`Resource`](class_resource.md) type, not [`FileAccess`](class_fileaccess.md) type.

For example:



```gdscript

    func _parse_file(path, msgids, msgids_context_plural):
        var res = ResourceLoader.load(path, "Script")
        var text = res.source_code
        # Parsing logic.
    
    func _get_recognized_extensions():
        return ["gd"]
```

```csharp

    public override void _ParseFile(string path, Godot.Collections.Array<string> msgids, Godot.Collections.Array<Godot.Collections.Array> msgidsContextPlural)
    {
        var res = ResourceLoader.Load<Script>(path, "Script");
        string text = res.SourceCode;
        // Parsing logic.
    }
    
    public override string[] _GetRecognizedExtensions()
    {
        return new string[] { "gd" };
    }
```



To use **EditorTranslationParserPlugin**, register it using the [`EditorPlugin.add_translation_parser_plugin`](#class_editorplugin_method_add_translation_parser_plugin) method first.













## 方法

| [`PackedStringArray`](class_packedstringarray.md) | [`_get_recognized_extensions`](#class_editortranslationparserplugin_private_method__get_recognized_extensions) ( ) virtual[^virtual] const[^const]                                                                                                                              |
| `void`                                            | [`_parse_file`](#class_editortranslationparserplugin_private_method__parse_file) ( path: [`String`](class_string.md), msgids: [Array](class_array.md) [`String`](class_string.md), msgids_context_plural: [Array](class_array.md) [`Array`](class_array.md) ) virtual[^virtual] |

<!-- rst-class:: classref-section-separator -->

---

## 方法说明

<div id="_class_editortranslationparserplugin_private_method__get_recognized_extensions"></div>

[`PackedStringArray`](class_packedstringarray.md) **_get_recognized_extensions** ( ) virtual[^virtual] const[^const]<div id="class_editortranslationparserplugin_private_method__get_recognized_extensions"></div>

Gets the list of file extensions to associate with this parser, e.g. `["csv"]`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editortranslationparserplugin_private_method__parse_file"></div>

`void` **_parse_file** ( path: [`String`](class_string.md), msgids: [Array](class_array.md) [`String`](class_string.md), msgids_context_plural: [Array](class_array.md) [`Array`](class_array.md) ) virtual[^virtual]<div id="class_editortranslationparserplugin_private_method__parse_file"></div>

Override this method to define a custom parsing logic to extract the translatable strings.

[^virtual]: 本方法通常需要用户覆盖才能生效。
[^const]: 本方法无副作用，不会修改该实例的任何成员变量。
[^vararg]: 本方法除了能接受在此处描述的参数外，还能够继续接受任意数量的参数。
[^constructor]: 本方法用于构造某个类型。
[^static]: 调用本方法无需实例，可直接使用类名进行调用。
[^operator]: 本方法描述的是使用本类型作为左操作数的有效运算符。
[^bitfield]: 这个值是由下列位标志构成位掩码的整数。
[^void]: 无返回值。
