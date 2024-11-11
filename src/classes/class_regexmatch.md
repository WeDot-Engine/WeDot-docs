<!-- ⚠ 请勿编辑本文件 ⚠ -->
<!-- 本文档使用脚本从 WeDot 引擎源码仓库生成。 -->
<!-- 生成脚本：https://github.com/WeDot-Engine/WeDot/tree/master/doc/tools/make_md.py； -->
<!-- 原文件：https://github.com/WeDot-Engine/WeDot/tree/master/modules/regex/doc_classes/RegExMatch.xml。 -->

<div id="_class_regexmatch"></div>

# RegExMatch

**继承：** [`RefCounted`](class_refcounted.md) **<** [`Object`](class_object.md)

Contains the results of a [`RegEx`](class_regex.md) search.

## 描述

Contains the results of a single [`RegEx`](class_regex.md) match returned by [`RegEx.search`](class_regex.md#class_regex_method_search) and [`RegEx.search_all`](class_regex.md#class_regex_method_search_all). It can be used to find the position and range of the match and its capturing groups, and it can extract its substring for you.

## 属性

|||
|:-:|:--|
| [`Dictionary`](class_dictionary.md)               | [`names`](class_regexmatch.md#class_regexmatch_property_names)     | ``{}``                  |
| [`PackedStringArray`](class_packedstringarray.md) | [`strings`](class_regexmatch.md#class_regexmatch_property_strings) | ``PackedStringArray()`` |
| [`String`](class_string.md)                       | [`subject`](class_regexmatch.md#class_regexmatch_property_subject) | ``""``                  |

## 方法

|||
|:-:|:--|
| [`int`](class_int.md)       | [`get_end`](class_regexmatch.md#class_regexmatch_method_get_end) ( name: [`Variant`](class_variant.md) = 0 ) const[^const]       |
| [`int`](class_int.md)       | [`get_group_count`](class_regexmatch.md#class_regexmatch_method_get_group_count) ( ) const[^const]                               |
| [`int`](class_int.md)       | [`get_start`](class_regexmatch.md#class_regexmatch_method_get_start) ( name: [`Variant`](class_variant.md) = 0 ) const[^const]   |
| [`String`](class_string.md) | [`get_string`](class_regexmatch.md#class_regexmatch_method_get_string) ( name: [`Variant`](class_variant.md) = 0 ) const[^const] |

<!-- rst-class:: classref-section-separator -->

---

## 属性说明

<div id="_class_regexmatch_property_names"></div>

[`Dictionary`](class_dictionary.md) **names** = ``{}`` <div id="class_regexmatch_property_names"></div>

- [`Dictionary`](class_dictionary.md) **get_names** ( )

A dictionary of named groups and its corresponding group number. Only groups that were matched are included. If multiple groups have the same name, that name would refer to the first matching one.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_regexmatch_property_strings"></div>

[`PackedStringArray`](class_packedstringarray.md) **strings** = ``PackedStringArray()`` <div id="class_regexmatch_property_strings"></div>

- [`PackedStringArray`](class_packedstringarray.md) **get_strings** ( )

An [`Array`](class_array.md) of the match and its capturing groups.

**Note:** The returned array is *copied* and any changes to it will not update the original property value. See [`PackedStringArray`](class_packedstringarray.md) for more details.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_regexmatch_property_subject"></div>

[`String`](class_string.md) **subject** = ``""`` <div id="class_regexmatch_property_subject"></div>

- [`String`](class_string.md) **get_subject** ( )

The source string used with the search pattern to find this matching result.

<!-- rst-class:: classref-section-separator -->

---

## 方法说明

<div id="_class_regexmatch_method_get_end"></div>

[`int`](class_int.md) **get_end** ( name: [`Variant`](class_variant.md) = 0 ) const[^const]<div id="class_regexmatch_method_get_end"></div>

Returns the end position of the match within the source string. The end position of capturing groups can be retrieved by providing its group number as an integer or its string name (if it's a named group). The default value of 0 refers to the whole pattern.

Returns -1 if the group did not match or doesn't exist.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_regexmatch_method_get_group_count"></div>

[`int`](class_int.md) **get_group_count** ( ) const[^const]<div id="class_regexmatch_method_get_group_count"></div>

Returns the number of capturing groups.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_regexmatch_method_get_start"></div>

[`int`](class_int.md) **get_start** ( name: [`Variant`](class_variant.md) = 0 ) const[^const]<div id="class_regexmatch_method_get_start"></div>

Returns the starting position of the match within the source string. The starting position of capturing groups can be retrieved by providing its group number as an integer or its string name (if it's a named group). The default value of 0 refers to the whole pattern.

Returns -1 if the group did not match or doesn't exist.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_regexmatch_method_get_string"></div>

[`String`](class_string.md) **get_string** ( name: [`Variant`](class_variant.md) = 0 ) const[^const]<div id="class_regexmatch_method_get_string"></div>

Returns the substring of the match from the source string. Capturing groups can be retrieved by providing its group number as an integer or its string name (if it's a named group). The default value of 0 refers to the whole pattern.

Returns an empty string if the group did not match or doesn't exist.

[^virtual]: 本方法通常需要用户覆盖才能生效。
[^const]: 本方法无副作用，不会修改该实例的任何成员变量。
[^vararg]: 本方法除了能接受在此处描述的参数外，还能够继续接受任意数量的参数。
[^constructor]: 本方法用于构造某个类型。
[^static]: 调用本方法无需实例，可直接使用类名进行调用。
[^operator]: 本方法描述的是使用本类型作为左操作数的有效运算符。
[^bitfield]: 这个值是由下列位标志构成位掩码的整数。
[^void]: 无返回值。
