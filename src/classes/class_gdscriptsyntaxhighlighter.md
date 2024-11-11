<!-- ⚠ 请勿编辑本文件 ⚠ -->
<!-- 本文档使用脚本从 WeDot 引擎源码仓库生成。 -->
<!-- 生成脚本：https://github.com/WeDot-Engine/WeDot/tree/master/doc/tools/make_md.py； -->
<!-- 原文件：https://github.com/WeDot-Engine/WeDot/tree/master/modules/gdscript/doc_classes/GDScriptSyntaxHighlighter.xml。 -->

<div id="_class_gdscriptsyntaxhighlighter"></div>

# GDScriptSyntaxHighlighter

**继承：** [`EditorSyntaxHighlighter`](class_editorsyntaxhighlighter.md) **<** [`SyntaxHighlighter`](class_syntaxhighlighter.md) **<** [`Resource`](class_resource.md) **<** [`RefCounted`](class_refcounted.md) **<** [`Object`](class_object.md)

A GDScript syntax highlighter that can be used with [`TextEdit`](class_textedit.md) and [`CodeEdit`](class_codeedit.md) nodes.

## 描述

**Note:** This class can only be used for editor plugins because it relies on editor settings.



```gdscript

    var code_preview = TextEdit.new()
    var highlighter = GDScriptSyntaxHighlighter.new()
    code_preview.syntax_highlighter = highlighter
```

```csharp

    var codePreview = new TextEdit();
    var highlighter = new GDScriptSyntaxHighlighter();
    codePreview.SyntaxHighlighter = highlighter;
```







[^virtual]: 本方法通常需要用户覆盖才能生效。
[^const]: 本方法无副作用，不会修改该实例的任何成员变量。
[^vararg]: 本方法除了能接受在此处描述的参数外，还能够继续接受任意数量的参数。
[^constructor]: 本方法用于构造某个类型。
[^static]: 调用本方法无需实例，可直接使用类名进行调用。
[^operator]: 本方法描述的是使用本类型作为左操作数的有效运算符。
[^bitfield]: 这个值是由下列位标志构成位掩码的整数。
[^void]: 无返回值。
