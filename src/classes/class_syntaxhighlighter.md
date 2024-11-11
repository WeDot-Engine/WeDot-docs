<!-- ⚠ 请勿编辑本文件 ⚠ -->
<!-- 本文档使用脚本从 WeDot 引擎源码仓库生成。 -->
<!-- 生成脚本：https://github.com/WeDot-Engine/WeDot/tree/master/doc/tools/make_md.py； -->
<!-- 原文件：https://github.com/WeDot-Engine/WeDot/tree/master/doc/classes/SyntaxHighlighter.xml。 -->

<div id="_class_syntaxhighlighter"></div>

# SyntaxHighlighter

**继承：** [`Resource`](class_resource.md) **<** [`RefCounted`](class_refcounted.md) **<** [`Object`](class_object.md)

**派生：** [`CodeHighlighter`](class_codehighlighter.md), [`EditorSyntaxHighlighter`](class_editorsyntaxhighlighter.md)

Base class for syntax highlighters. Provides syntax highlighting data to a [`TextEdit`](class_textedit.md).

## 描述

Base class for syntax highlighters. Provides syntax highlighting data to a [`TextEdit`](class_textedit.md). The associated [`TextEdit`](class_textedit.md) will call into the **SyntaxHighlighter** on an as-needed basis.

 **Note:** A **SyntaxHighlighter** instance should not be used across multiple [`TextEdit`](class_textedit.md) nodes.

## 方法

|||
|:-:|:--|
| `void`                              | [`_clear_highlighting_cache`](class_syntaxhighlighter.md#class_syntaxhighlighter_private_method__clear_highlighting_cache) ( ) virtual[^virtual]                                                   |
| [`Dictionary`](class_dictionary.md) | [`_get_line_syntax_highlighting`](class_syntaxhighlighter.md#class_syntaxhighlighter_private_method__get_line_syntax_highlighting) ( line: [`int`](class_int.md) ) virtual[^virtual] const[^const] |
| `void`                              | [`_update_cache`](class_syntaxhighlighter.md#class_syntaxhighlighter_private_method__update_cache) ( ) virtual[^virtual]                                                                           |
| `void`                              | [`clear_highlighting_cache`](class_syntaxhighlighter.md#class_syntaxhighlighter_method_clear_highlighting_cache) ( )                                                                               |
| [`Dictionary`](class_dictionary.md) | [`get_line_syntax_highlighting`](class_syntaxhighlighter.md#class_syntaxhighlighter_method_get_line_syntax_highlighting) ( line: [`int`](class_int.md) )                                           |
| [`TextEdit`](class_textedit.md)     | [`get_text_edit`](class_syntaxhighlighter.md#class_syntaxhighlighter_method_get_text_edit) ( ) const[^const]                                                                                       |
| `void`                              | [`update_cache`](class_syntaxhighlighter.md#class_syntaxhighlighter_method_update_cache) ( )                                                                                                       |

<!-- rst-class:: classref-section-separator -->

---

## 方法说明

<div id="_class_syntaxhighlighter_private_method__clear_highlighting_cache"></div>

`void` **_clear_highlighting_cache** ( ) virtual[^virtual]<div id="class_syntaxhighlighter_private_method__clear_highlighting_cache"></div>

Virtual method which can be overridden to clear any local caches.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_syntaxhighlighter_private_method__get_line_syntax_highlighting"></div>

[`Dictionary`](class_dictionary.md) **_get_line_syntax_highlighting** ( line: [`int`](class_int.md) ) virtual[^virtual] const[^const]<div id="class_syntaxhighlighter_private_method__get_line_syntax_highlighting"></div>

Virtual method which can be overridden to return syntax highlighting data.

See [`get_line_syntax_highlighting`](class_syntaxhighlighter.md#class_syntaxhighlighter_method_get_line_syntax_highlighting) for more details.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_syntaxhighlighter_private_method__update_cache"></div>

`void` **_update_cache** ( ) virtual[^virtual]<div id="class_syntaxhighlighter_private_method__update_cache"></div>

Virtual method which can be overridden to update any local caches.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_syntaxhighlighter_method_clear_highlighting_cache"></div>

`void` **clear_highlighting_cache** ( )<div id="class_syntaxhighlighter_method_clear_highlighting_cache"></div>

Clears all cached syntax highlighting data.

Then calls overridable method [`_clear_highlighting_cache`](class_syntaxhighlighter.md#class_syntaxhighlighter_private_method__clear_highlighting_cache).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_syntaxhighlighter_method_get_line_syntax_highlighting"></div>

[`Dictionary`](class_dictionary.md) **get_line_syntax_highlighting** ( line: [`int`](class_int.md) )<div id="class_syntaxhighlighter_method_get_line_syntax_highlighting"></div>

Returns syntax highlighting data for a single line. If the line is not cached, calls [`_get_line_syntax_highlighting`](class_syntaxhighlighter.md#class_syntaxhighlighter_private_method__get_line_syntax_highlighting) to calculate the data.

The return [`Dictionary`](class_dictionary.md) is column number to [`Dictionary`](class_dictionary.md). The column number notes the start of a region, the region will end if another region is found, or at the end of the line. The nested [`Dictionary`](class_dictionary.md) contains the data for that region, currently only the key "color" is supported.

 **Example return:** 

```

    var color_map = {
        0: {
            "color": Color(1, 0, 0)
        },
        5: {
            "color": Color(0, 1, 0)
        }
    }
```

This will color columns 0-4 red, and columns 5-eol in green.



<!-- rst-class:: classref-item-separator -->

---

<div id="_class_syntaxhighlighter_method_get_text_edit"></div>

[`TextEdit`](class_textedit.md) **get_text_edit** ( ) const[^const]<div id="class_syntaxhighlighter_method_get_text_edit"></div>

Returns the associated [`TextEdit`](class_textedit.md) node.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_syntaxhighlighter_method_update_cache"></div>

`void` **update_cache** ( )<div id="class_syntaxhighlighter_method_update_cache"></div>

Clears then updates the **SyntaxHighlighter** caches. Override [`_update_cache`](class_syntaxhighlighter.md#class_syntaxhighlighter_private_method__update_cache) for a callback.

 **Note:** This is called automatically when the associated [`TextEdit`](class_textedit.md) node, updates its own cache.

[^virtual]: 本方法通常需要用户覆盖才能生效。
[^const]: 本方法无副作用，不会修改该实例的任何成员变量。
[^vararg]: 本方法除了能接受在此处描述的参数外，还能够继续接受任意数量的参数。
[^constructor]: 本方法用于构造某个类型。
[^static]: 调用本方法无需实例，可直接使用类名进行调用。
[^operator]: 本方法描述的是使用本类型作为左操作数的有效运算符。
[^bitfield]: 这个值是由下列位标志构成位掩码的整数。
[^void]: 无返回值。
