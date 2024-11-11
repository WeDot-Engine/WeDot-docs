<!-- ⚠ 请勿编辑本文件 ⚠ -->
<!-- 本文档使用脚本从 WeDot 引擎源码仓库生成。 -->
<!-- 生成脚本：https://github.com/WeDot-Engine/WeDot/tree/master/doc/tools/make_md.py； -->
<!-- 原文件：https://github.com/WeDot-Engine/WeDot/tree/master/doc/classes/CodeHighlighter.xml。 -->

<div id="_class_codehighlighter"></div>

# CodeHighlighter

**继承：** [`SyntaxHighlighter`](class_syntaxhighlighter.md) **<** [`Resource`](class_resource.md) **<** [`RefCounted`](class_refcounted.md) **<** [`Object`](class_object.md)

A syntax highlighter intended for code.

## 描述

By adjusting various properties of this resource, you can change the colors of strings, comments, numbers, and other text patterns inside a [`TextEdit`](class_textedit.md) control.

## 属性

|||
|:-:|:--|
| [`Dictionary`](class_dictionary.md) | [`color_regions`](class_codehighlighter.md#class_codehighlighter_property_color_regions)                 | ``{}``                |
| [`Color`](class_color.md)           | [`function_color`](class_codehighlighter.md#class_codehighlighter_property_function_color)               | ``Color(0, 0, 0, 1)`` |
| [`Dictionary`](class_dictionary.md) | [`keyword_colors`](class_codehighlighter.md#class_codehighlighter_property_keyword_colors)               | ``{}``                |
| [`Dictionary`](class_dictionary.md) | [`member_keyword_colors`](class_codehighlighter.md#class_codehighlighter_property_member_keyword_colors) | ``{}``                |
| [`Color`](class_color.md)           | [`member_variable_color`](class_codehighlighter.md#class_codehighlighter_property_member_variable_color) | ``Color(0, 0, 0, 1)`` |
| [`Color`](class_color.md)           | [`number_color`](class_codehighlighter.md#class_codehighlighter_property_number_color)                   | ``Color(0, 0, 0, 1)`` |
| [`Color`](class_color.md)           | [`symbol_color`](class_codehighlighter.md#class_codehighlighter_property_symbol_color)                   | ``Color(0, 0, 0, 1)`` |

## 方法

|||
|:-:|:--|
| `void`                    | [`add_color_region`](class_codehighlighter.md#class_codehighlighter_method_add_color_region) ( start_key: [`String`](class_string.md), end_key: [`String`](class_string.md), color: [`Color`](class_color.md), line_only: [`bool`](class_bool.md) = false ) |
| `void`                    | [`add_keyword_color`](class_codehighlighter.md#class_codehighlighter_method_add_keyword_color) ( keyword: [`String`](class_string.md), color: [`Color`](class_color.md) )                                                                                   |
| `void`                    | [`add_member_keyword_color`](class_codehighlighter.md#class_codehighlighter_method_add_member_keyword_color) ( member_keyword: [`String`](class_string.md), color: [`Color`](class_color.md) )                                                              |
| `void`                    | [`clear_color_regions`](class_codehighlighter.md#class_codehighlighter_method_clear_color_regions) ( )                                                                                                                                                      |
| `void`                    | [`clear_keyword_colors`](class_codehighlighter.md#class_codehighlighter_method_clear_keyword_colors) ( )                                                                                                                                                    |
| `void`                    | [`clear_member_keyword_colors`](class_codehighlighter.md#class_codehighlighter_method_clear_member_keyword_colors) ( )                                                                                                                                      |
| [`Color`](class_color.md) | [`get_keyword_color`](class_codehighlighter.md#class_codehighlighter_method_get_keyword_color) ( keyword: [`String`](class_string.md) ) const[^const]                                                                                                       |
| [`Color`](class_color.md) | [`get_member_keyword_color`](class_codehighlighter.md#class_codehighlighter_method_get_member_keyword_color) ( member_keyword: [`String`](class_string.md) ) const[^const]                                                                                  |
| [`bool`](class_bool.md)   | [`has_color_region`](class_codehighlighter.md#class_codehighlighter_method_has_color_region) ( start_key: [`String`](class_string.md) ) const[^const]                                                                                                       |
| [`bool`](class_bool.md)   | [`has_keyword_color`](class_codehighlighter.md#class_codehighlighter_method_has_keyword_color) ( keyword: [`String`](class_string.md) ) const[^const]                                                                                                       |
| [`bool`](class_bool.md)   | [`has_member_keyword_color`](class_codehighlighter.md#class_codehighlighter_method_has_member_keyword_color) ( member_keyword: [`String`](class_string.md) ) const[^const]                                                                                  |
| `void`                    | [`remove_color_region`](class_codehighlighter.md#class_codehighlighter_method_remove_color_region) ( start_key: [`String`](class_string.md) )                                                                                                               |
| `void`                    | [`remove_keyword_color`](class_codehighlighter.md#class_codehighlighter_method_remove_keyword_color) ( keyword: [`String`](class_string.md) )                                                                                                               |
| `void`                    | [`remove_member_keyword_color`](class_codehighlighter.md#class_codehighlighter_method_remove_member_keyword_color) ( member_keyword: [`String`](class_string.md) )                                                                                          |

<!-- rst-class:: classref-section-separator -->

---

## 属性说明

<div id="_class_codehighlighter_property_color_regions"></div>

[`Dictionary`](class_dictionary.md) **color_regions** = ``{}`` <div id="class_codehighlighter_property_color_regions"></div>

- `void` **set_color_regions** ( value: [`Dictionary`](class_dictionary.md) )
- [`Dictionary`](class_dictionary.md) **get_color_regions** ( )

Sets the color regions. All existing regions will be removed. The [`Dictionary`](class_dictionary.md) key is the region start and end key, separated by a space. The value is the region color.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_codehighlighter_property_function_color"></div>

[`Color`](class_color.md) **function_color** = ``Color(0, 0, 0, 1)`` <div id="class_codehighlighter_property_function_color"></div>

- `void` **set_function_color** ( value: [`Color`](class_color.md) )
- [`Color`](class_color.md) **get_function_color** ( )

Sets color for functions. A function is a non-keyword string followed by a '('.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_codehighlighter_property_keyword_colors"></div>

[`Dictionary`](class_dictionary.md) **keyword_colors** = ``{}`` <div id="class_codehighlighter_property_keyword_colors"></div>

- `void` **set_keyword_colors** ( value: [`Dictionary`](class_dictionary.md) )
- [`Dictionary`](class_dictionary.md) **get_keyword_colors** ( )

Sets the keyword colors. All existing keywords will be removed. The [`Dictionary`](class_dictionary.md) key is the keyword. The value is the keyword color.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_codehighlighter_property_member_keyword_colors"></div>

[`Dictionary`](class_dictionary.md) **member_keyword_colors** = ``{}`` <div id="class_codehighlighter_property_member_keyword_colors"></div>

- `void` **set_member_keyword_colors** ( value: [`Dictionary`](class_dictionary.md) )
- [`Dictionary`](class_dictionary.md) **get_member_keyword_colors** ( )

Sets the member keyword colors. All existing member keyword will be removed. The [`Dictionary`](class_dictionary.md) key is the member keyword. The value is the member keyword color.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_codehighlighter_property_member_variable_color"></div>

[`Color`](class_color.md) **member_variable_color** = ``Color(0, 0, 0, 1)`` <div id="class_codehighlighter_property_member_variable_color"></div>

- `void` **set_member_variable_color** ( value: [`Color`](class_color.md) )
- [`Color`](class_color.md) **get_member_variable_color** ( )

Sets color for member variables. A member variable is non-keyword, non-function string proceeded with a '.'.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_codehighlighter_property_number_color"></div>

[`Color`](class_color.md) **number_color** = ``Color(0, 0, 0, 1)`` <div id="class_codehighlighter_property_number_color"></div>

- `void` **set_number_color** ( value: [`Color`](class_color.md) )
- [`Color`](class_color.md) **get_number_color** ( )

Sets the color for numbers.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_codehighlighter_property_symbol_color"></div>

[`Color`](class_color.md) **symbol_color** = ``Color(0, 0, 0, 1)`` <div id="class_codehighlighter_property_symbol_color"></div>

- `void` **set_symbol_color** ( value: [`Color`](class_color.md) )
- [`Color`](class_color.md) **get_symbol_color** ( )

Sets the color for symbols.

<!-- rst-class:: classref-section-separator -->

---

## 方法说明

<div id="_class_codehighlighter_method_add_color_region"></div>

`void` **add_color_region** ( start_key: [`String`](class_string.md), end_key: [`String`](class_string.md), color: [`Color`](class_color.md), line_only: [`bool`](class_bool.md) = false )<div id="class_codehighlighter_method_add_color_region"></div>

Adds a color region (such as for comments or strings) from `start_key` to `end_key`. Both keys should be symbols, and `start_key` must not be shared with other delimiters.

If `line_only` is `true` or `end_key` is an empty [`String`](class_string.md), the region does not carry over to the next line.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_codehighlighter_method_add_keyword_color"></div>

`void` **add_keyword_color** ( keyword: [`String`](class_string.md), color: [`Color`](class_color.md) )<div id="class_codehighlighter_method_add_keyword_color"></div>

Sets the color for a keyword.

The keyword cannot contain any symbols except '\_'.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_codehighlighter_method_add_member_keyword_color"></div>

`void` **add_member_keyword_color** ( member_keyword: [`String`](class_string.md), color: [`Color`](class_color.md) )<div id="class_codehighlighter_method_add_member_keyword_color"></div>

Sets the color for a member keyword.

The member keyword cannot contain any symbols except '\_'.

It will not be highlighted if preceded by a '.'.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_codehighlighter_method_clear_color_regions"></div>

`void` **clear_color_regions** ( )<div id="class_codehighlighter_method_clear_color_regions"></div>

Removes all color regions.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_codehighlighter_method_clear_keyword_colors"></div>

`void` **clear_keyword_colors** ( )<div id="class_codehighlighter_method_clear_keyword_colors"></div>

Removes all keywords.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_codehighlighter_method_clear_member_keyword_colors"></div>

`void` **clear_member_keyword_colors** ( )<div id="class_codehighlighter_method_clear_member_keyword_colors"></div>

Removes all member keywords.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_codehighlighter_method_get_keyword_color"></div>

[`Color`](class_color.md) **get_keyword_color** ( keyword: [`String`](class_string.md) ) const[^const]<div id="class_codehighlighter_method_get_keyword_color"></div>

Returns the color for a keyword.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_codehighlighter_method_get_member_keyword_color"></div>

[`Color`](class_color.md) **get_member_keyword_color** ( member_keyword: [`String`](class_string.md) ) const[^const]<div id="class_codehighlighter_method_get_member_keyword_color"></div>

Returns the color for a member keyword.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_codehighlighter_method_has_color_region"></div>

[`bool`](class_bool.md) **has_color_region** ( start_key: [`String`](class_string.md) ) const[^const]<div id="class_codehighlighter_method_has_color_region"></div>

Returns `true` if the start key exists, else `false`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_codehighlighter_method_has_keyword_color"></div>

[`bool`](class_bool.md) **has_keyword_color** ( keyword: [`String`](class_string.md) ) const[^const]<div id="class_codehighlighter_method_has_keyword_color"></div>

Returns `true` if the keyword exists, else `false`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_codehighlighter_method_has_member_keyword_color"></div>

[`bool`](class_bool.md) **has_member_keyword_color** ( member_keyword: [`String`](class_string.md) ) const[^const]<div id="class_codehighlighter_method_has_member_keyword_color"></div>

Returns `true` if the member keyword exists, else `false`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_codehighlighter_method_remove_color_region"></div>

`void` **remove_color_region** ( start_key: [`String`](class_string.md) )<div id="class_codehighlighter_method_remove_color_region"></div>

Removes the color region that uses that start key.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_codehighlighter_method_remove_keyword_color"></div>

`void` **remove_keyword_color** ( keyword: [`String`](class_string.md) )<div id="class_codehighlighter_method_remove_keyword_color"></div>

Removes the keyword.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_codehighlighter_method_remove_member_keyword_color"></div>

`void` **remove_member_keyword_color** ( member_keyword: [`String`](class_string.md) )<div id="class_codehighlighter_method_remove_member_keyword_color"></div>

Removes the member keyword.

[^virtual]: 本方法通常需要用户覆盖才能生效。
[^const]: 本方法无副作用，不会修改该实例的任何成员变量。
[^vararg]: 本方法除了能接受在此处描述的参数外，还能够继续接受任意数量的参数。
[^constructor]: 本方法用于构造某个类型。
[^static]: 调用本方法无需实例，可直接使用类名进行调用。
[^operator]: 本方法描述的是使用本类型作为左操作数的有效运算符。
[^bitfield]: 这个值是由下列位标志构成位掩码的整数。
[^void]: 无返回值。
