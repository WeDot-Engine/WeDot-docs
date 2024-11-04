<!-- ⚠ 请勿编辑本文件 ⚠ -->
<!-- 本文档使用脚本从 WeDot 引擎源码仓库生成。 -->
<!-- 生成脚本：https://github.com/WeDot-Engine/WeDot/tree/4.3/doc/tools/make_md.py； -->
<!-- 原文件：https://github.com/WeDot-Engine/WeDot/tree/4.3/doc/classes/XMLParser.xml。 -->

<div id="_class_xmlparser"></div>

# XMLParser

**继承：** [`RefCounted`](class_refcounted.md) **<** [`Object`](class_object.md)

Provides a low-level interface for creating parsers for XML files.

## 描述

Provides a low-level interface for creating parsers for [*XML*](https://en.wikipedia.org/wiki/XML) files. This class can serve as base to make custom XML parsers.

To parse XML, you must open a file with the [`open`](#class_xmlparser_method_open) method or a buffer with the [`open_buffer`](#class_xmlparser_method_open_buffer) method. Then, the [`read`](#class_xmlparser_method_read) method must be called to parse the next nodes. Most of the methods take into consideration the currently parsed node.

Here is an example of using **XMLParser** to parse an SVG file (which is based on XML), printing each element and its attributes as a dictionary:



```gdscript

    var parser = XMLParser.new()
    parser.open("path/to/file.svg")
    while parser.read() != ERR_FILE_EOF:
        if parser.get_node_type() == XMLParser.NODE_ELEMENT:
            var node_name = parser.get_node_name()
            var attributes_dict = {}
            for idx in range(parser.get_attribute_count()):
                attributes_dict[parser.get_attribute_name(idx)] = parser.get_attribute_value(idx)
            print("The ", node_name, " element has the following attributes: ", attributes_dict)
```

```csharp

    var parser = new XmlParser();
    parser.Open("path/to/file.svg");
    while (parser.Read() != Error.FileEof)
    {
        if (parser.GetNodeType() == XmlParser.NodeType.Element)
        {
            var nodeName = parser.GetNodeName();
            var attributesDict = new Godot.Collections.Dictionary();
            for (int idx = 0; idx < parser.GetAttributeCount(); idx++)
            {
                attributesDict[parser.GetAttributeName(idx)] = parser.GetAttributeValue(idx);
            }
            GD.Print($"The {nodeName} element has the following attributes: {attributesDict}");
        }
    }
```







## 方法

| [`int`](class_int.md)                | [`get_attribute_count`](#class_xmlparser_method_get_attribute_count) ( ) const[^const]                                                         |
| [`String`](class_string.md)          | [`get_attribute_name`](#class_xmlparser_method_get_attribute_name) ( idx: [`int`](class_int.md) ) const[^const]                                |
| [`String`](class_string.md)          | [`get_attribute_value`](#class_xmlparser_method_get_attribute_value) ( idx: [`int`](class_int.md) ) const[^const]                              |
| [`int`](class_int.md)                | [`get_current_line`](#class_xmlparser_method_get_current_line) ( ) const[^const]                                                               |
| [`String`](class_string.md)          | [`get_named_attribute_value`](#class_xmlparser_method_get_named_attribute_value) ( name: [`String`](class_string.md) ) const[^const]           |
| [`String`](class_string.md)          | [`get_named_attribute_value_safe`](#class_xmlparser_method_get_named_attribute_value_safe) ( name: [`String`](class_string.md) ) const[^const] |
| [`String`](class_string.md)          | [`get_node_data`](#class_xmlparser_method_get_node_data) ( ) const[^const]                                                                     |
| [`String`](class_string.md)          | [`get_node_name`](#class_xmlparser_method_get_node_name) ( ) const[^const]                                                                     |
| [`int`](class_int.md)                | [`get_node_offset`](#class_xmlparser_method_get_node_offset) ( ) const[^const]                                                                 |
| [NodeType](#enum_xmlparser_nodetype) | [`get_node_type`](#class_xmlparser_method_get_node_type) ( )                                                                                   |
| [`bool`](class_bool.md)              | [`has_attribute`](#class_xmlparser_method_has_attribute) ( name: [`String`](class_string.md) ) const[^const]                                   |
| [`bool`](class_bool.md)              | [`is_empty`](#class_xmlparser_method_is_empty) ( ) const[^const]                                                                               |
| [Error](#enum_@globalscope_error)    | [`open`](#class_xmlparser_method_open) ( file: [`String`](class_string.md) )                                                                   |
| [Error](#enum_@globalscope_error)    | [`open_buffer`](#class_xmlparser_method_open_buffer) ( buffer: [`PackedByteArray`](class_packedbytearray.md) )                                 |
| [Error](#enum_@globalscope_error)    | [`read`](#class_xmlparser_method_read) ( )                                                                                                     |
| [Error](#enum_@globalscope_error)    | [`seek`](#class_xmlparser_method_seek) ( position: [`int`](class_int.md) )                                                                     |
| `void`                               | [`skip_section`](#class_xmlparser_method_skip_section) ( )                                                                                     |

<!-- rst-class:: classref-section-separator -->

---

## 枚举

<div id="_class_enum_xmlparser_nodetype"></div>

enum **NodeType**: <div id="enum_xmlparser_nodetype"></div>

<div id="_class_xmlparser_constant_node_none"></div>

[NodeType](#enum_xmlparser_nodetype) **NODE_NONE** = ``0``

There's no node (no file or buffer opened).

<div id="_class_xmlparser_constant_node_element"></div>

[NodeType](#enum_xmlparser_nodetype) **NODE_ELEMENT** = ``1``

An element node type, also known as a tag, e.g. `<title>`.

<div id="_class_xmlparser_constant_node_element_end"></div>

[NodeType](#enum_xmlparser_nodetype) **NODE_ELEMENT_END** = ``2``

An end of element node type, e.g. `</title>`.

<div id="_class_xmlparser_constant_node_text"></div>

[NodeType](#enum_xmlparser_nodetype) **NODE_TEXT** = ``3``

A text node type, i.e. text that is not inside an element. This includes whitespace.

<div id="_class_xmlparser_constant_node_comment"></div>

[NodeType](#enum_xmlparser_nodetype) **NODE_COMMENT** = ``4``

A comment node type, e.g. `<!--A comment-->`.

<div id="_class_xmlparser_constant_node_cdata"></div>

[NodeType](#enum_xmlparser_nodetype) **NODE_CDATA** = ``5``

A node type for CDATA (Character Data) sections, e.g. `<![CDATA[CDATA section]]>`.

<div id="_class_xmlparser_constant_node_unknown"></div>

[NodeType](#enum_xmlparser_nodetype) **NODE_UNKNOWN** = ``6``

An unknown node type.

<!-- rst-class:: classref-section-separator -->

---

## 方法说明

<div id="_class_xmlparser_method_get_attribute_count"></div>

[`int`](class_int.md) **get_attribute_count** ( ) const[^const]<div id="class_xmlparser_method_get_attribute_count"></div>

Returns the number of attributes in the currently parsed element.

 **Note:** If this method is used while the currently parsed node is not [`NODE_ELEMENT`](#class_xmlparser_constant_node_element) or [`NODE_ELEMENT_END`](#class_xmlparser_constant_node_element_end), this count will not be updated and will still reflect the last element.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_xmlparser_method_get_attribute_name"></div>

[`String`](class_string.md) **get_attribute_name** ( idx: [`int`](class_int.md) ) const[^const]<div id="class_xmlparser_method_get_attribute_name"></div>

Returns the name of an attribute of the currently parsed element, specified by the `idx` index.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_xmlparser_method_get_attribute_value"></div>

[`String`](class_string.md) **get_attribute_value** ( idx: [`int`](class_int.md) ) const[^const]<div id="class_xmlparser_method_get_attribute_value"></div>

Returns the value of an attribute of the currently parsed element, specified by the `idx` index.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_xmlparser_method_get_current_line"></div>

[`int`](class_int.md) **get_current_line** ( ) const[^const]<div id="class_xmlparser_method_get_current_line"></div>

Returns the current line in the parsed file, counting from 0.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_xmlparser_method_get_named_attribute_value"></div>

[`String`](class_string.md) **get_named_attribute_value** ( name: [`String`](class_string.md) ) const[^const]<div id="class_xmlparser_method_get_named_attribute_value"></div>

Returns the value of an attribute of the currently parsed element, specified by its `name`. This method will raise an error if the element has no such attribute.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_xmlparser_method_get_named_attribute_value_safe"></div>

[`String`](class_string.md) **get_named_attribute_value_safe** ( name: [`String`](class_string.md) ) const[^const]<div id="class_xmlparser_method_get_named_attribute_value_safe"></div>

Returns the value of an attribute of the currently parsed element, specified by its `name`. This method will return an empty string if the element has no such attribute.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_xmlparser_method_get_node_data"></div>

[`String`](class_string.md) **get_node_data** ( ) const[^const]<div id="class_xmlparser_method_get_node_data"></div>

Returns the contents of a text node. This method will raise an error if the current parsed node is of any other type.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_xmlparser_method_get_node_name"></div>

[`String`](class_string.md) **get_node_name** ( ) const[^const]<div id="class_xmlparser_method_get_node_name"></div>

Returns the name of a node. This method will raise an error if the currently parsed node is a text node.

 **Note:** The content of a [`NODE_CDATA`](#class_xmlparser_constant_node_cdata) node and the comment string of a [`NODE_COMMENT`](#class_xmlparser_constant_node_comment) node are also considered names.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_xmlparser_method_get_node_offset"></div>

[`int`](class_int.md) **get_node_offset** ( ) const[^const]<div id="class_xmlparser_method_get_node_offset"></div>

Returns the byte offset of the currently parsed node since the beginning of the file or buffer. This is usually equivalent to the number of characters before the read position.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_xmlparser_method_get_node_type"></div>

[NodeType](#enum_xmlparser_nodetype) **get_node_type** ( )<div id="class_xmlparser_method_get_node_type"></div>

Returns the type of the current node. Compare with [NodeType](#enum_xmlparser_nodetype) constants.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_xmlparser_method_has_attribute"></div>

[`bool`](class_bool.md) **has_attribute** ( name: [`String`](class_string.md) ) const[^const]<div id="class_xmlparser_method_has_attribute"></div>

Returns `true` if the currently parsed element has an attribute with the `name`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_xmlparser_method_is_empty"></div>

[`bool`](class_bool.md) **is_empty** ( ) const[^const]<div id="class_xmlparser_method_is_empty"></div>

Returns `true` if the currently parsed element is empty, e.g. `<element />`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_xmlparser_method_open"></div>

[Error](#enum_@globalscope_error) **open** ( file: [`String`](class_string.md) )<div id="class_xmlparser_method_open"></div>

Opens an XML `file` for parsing. This method returns an error code.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_xmlparser_method_open_buffer"></div>

[Error](#enum_@globalscope_error) **open_buffer** ( buffer: [`PackedByteArray`](class_packedbytearray.md) )<div id="class_xmlparser_method_open_buffer"></div>

Opens an XML raw `buffer` for parsing. This method returns an error code.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_xmlparser_method_read"></div>

[Error](#enum_@globalscope_error) **read** ( )<div id="class_xmlparser_method_read"></div>

Parses the next node in the file. This method returns an error code.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_xmlparser_method_seek"></div>

[Error](#enum_@globalscope_error) **seek** ( position: [`int`](class_int.md) )<div id="class_xmlparser_method_seek"></div>

Moves the buffer cursor to a certain offset (since the beginning) and reads the next node there. This method returns an error code.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_xmlparser_method_skip_section"></div>

`void` **skip_section** ( )<div id="class_xmlparser_method_skip_section"></div>

Skips the current section. If the currently parsed node contains more inner nodes, they will be ignored and the cursor will go to the closing of the current element.

[^virtual]: 本方法通常需要用户覆盖才能生效。
[^const]: 本方法无副作用，不会修改该实例的任何成员变量。
[^vararg]: 本方法除了能接受在此处描述的参数外，还能够继续接受任意数量的参数。
[^constructor]: 本方法用于构造某个类型。
[^static]: 调用本方法无需实例，可直接使用类名进行调用。
[^operator]: 本方法描述的是使用本类型作为左操作数的有效运算符。
[^bitfield]: 这个值是由下列位标志构成位掩码的整数。
[^void]: 无返回值。
