<!-- ⚠ 请勿编辑本文件 ⚠ -->
<!-- 本文档使用脚本从 WeDot 引擎源码仓库生成。 -->
<!-- 生成脚本：https://github.com/WeDot-Engine/WeDot/tree/master/doc/tools/make_md.py； -->
<!-- 原文件：https://github.com/WeDot-Engine/WeDot/tree/master/modules/regex/doc_classes/RegEx.xml。 -->

<div id="_class_regex"></div>

# RegEx

**继承：** [`RefCounted`](class_refcounted.md) **<** [`Object`](class_object.md)

Class for searching text for patterns using regular expressions.

## 描述

A regular expression (or regex) is a compact language that can be used to recognize strings that follow a specific pattern, such as URLs, email addresses, complete sentences, etc. For example, a regex of `ab[0-9]` would find any string that is `ab` followed by any number from `0` to `9`. For a more in-depth look, you can easily find various tutorials and detailed explanations on the Internet.

To begin, the RegEx object needs to be compiled with the search pattern using [`compile`](class_regex.md#class_regex_method_compile) before it can be used.

```

    var regex = RegEx.new()
    regex.compile("\\w-(\\d+)")
```

The search pattern must be escaped first for GDScript before it is escaped for the expression. For example, `compile("\\d+")` would be read by RegEx as `\d+`. Similarly, `compile("\"(?:\\\\.|[^\"])*\"")` would be read as `"(?:\\.|[^"])*"`. In GDScript, you can also use raw string literals (r-strings). For example, `compile(r'"(?:\\.|[^"])*"')` would be read the same.

Using [`search`](class_regex.md#class_regex_method_search), you can find the pattern within the given text. If a pattern is found, [`RegExMatch`](class_regexmatch.md) is returned and you can retrieve details of the results using methods such as [`RegExMatch.get_string`](class_regexmatch.md#class_regexmatch_method_get_string) and [`RegExMatch.get_start`](class_regexmatch.md#class_regexmatch_method_get_start).

```

    var regex = RegEx.new()
    regex.compile("\\w-(\\d+)")
    var result = regex.search("abc n-0123")
    if result:
        print(result.get_string()) # Would print n-0123
```

The results of capturing groups `()` can be retrieved by passing the group number to the various methods in [`RegExMatch`](class_regexmatch.md). Group 0 is the default and will always refer to the entire pattern. In the above example, calling `result.get_string(1)` would give you `0123`.

This version of RegEx also supports named capturing groups, and the names can be used to retrieve the results. If two or more groups have the same name, the name would only refer to the first one with a match.

```

    var regex = RegEx.new()
    regex.compile("d(?<digit>[0-9]+)|x(?<digit>[0-9a-f]+)")
    var result = regex.search("the number is x2f")
    if result:
        print(result.get_string("digit")) # Would print 2f
```

If you need to process multiple results, [`search_all`](class_regex.md#class_regex_method_search_all) generates a list of all non-overlapping results. This can be combined with a `for` loop for convenience.

```

    for result in regex.search_all("d01, d03, d0c, x3f and x42"):
        print(result.get_string("digit"))
    # Would print 01 03 0 3f 42
```

 **Example of splitting a string using a RegEx:** 

```

    var regex = RegEx.new()
    regex.compile("\\S+") # Negated whitespace character class.
    var results = []
    for result in regex.search_all("One  Two \n\tThree"):
        results.push_back(result.get_string())
    # The `results` array now contains "One", "Two", "Three".
```

 **Note:** Godot's regex implementation is based on the [*PCRE2*](https://www.pcre.org/) library. You can view the full pattern reference [*here*](https://www.pcre.org/current/doc/html/pcre2pattern.html).

 **Tip:** You can use [*Regexr*](https://regexr.com/) to test regular expressions online.











## 方法

|||
|:-:|:--|
| `void`                                                      | [`clear`](class_regex.md#class_regex_method_clear) ( )                                                                                                                                                                                                    |
| [Error](#enum_@globalscope_error)                           | [`compile`](class_regex.md#class_regex_method_compile) ( pattern: [`String`](class_string.md), show_error: [`bool`](class_bool.md) = true )                                                                                                               |
| [`RegEx`](class_regex.md)                                   | [`create_from_string`](class_regex.md#class_regex_method_create_from_string) ( pattern: [`String`](class_string.md), show_error: [`bool`](class_bool.md) = true ) static[^static]                                                                         |
| [`int`](class_int.md)                                       | [`get_group_count`](class_regex.md#class_regex_method_get_group_count) ( ) const[^const]                                                                                                                                                                  |
| [`PackedStringArray`](class_packedstringarray.md)           | [`get_names`](class_regex.md#class_regex_method_get_names) ( ) const[^const]                                                                                                                                                                              |
| [`String`](class_string.md)                                 | [`get_pattern`](class_regex.md#class_regex_method_get_pattern) ( ) const[^const]                                                                                                                                                                          |
| [`bool`](class_bool.md)                                     | [`is_valid`](class_regex.md#class_regex_method_is_valid) ( ) const[^const]                                                                                                                                                                                |
| [`RegExMatch`](class_regexmatch.md)                         | [`search`](class_regex.md#class_regex_method_search) ( subject: [`String`](class_string.md), offset: [`int`](class_int.md) = 0, end: [`int`](class_int.md) = -1 ) const[^const]                                                                           |
| [Array](class_array.md) [`RegExMatch`](class_regexmatch.md) | [`search_all`](class_regex.md#class_regex_method_search_all) ( subject: [`String`](class_string.md), offset: [`int`](class_int.md) = 0, end: [`int`](class_int.md) = -1 ) const[^const]                                                                   |
| [`String`](class_string.md)                                 | [`sub`](class_regex.md#class_regex_method_sub) ( subject: [`String`](class_string.md), replacement: [`String`](class_string.md), all: [`bool`](class_bool.md) = false, offset: [`int`](class_int.md) = 0, end: [`int`](class_int.md) = -1 ) const[^const] |

<!-- rst-class:: classref-section-separator -->

---

## 方法说明

<div id="_class_regex_method_clear"></div>

`void` **clear** ( )<div id="class_regex_method_clear"></div>

This method resets the state of the object, as if it was freshly created. Namely, it unassigns the regular expression of this object.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_regex_method_compile"></div>

[Error](#enum_@globalscope_error) **compile** ( pattern: [`String`](class_string.md), show_error: [`bool`](class_bool.md) = true )<div id="class_regex_method_compile"></div>

Compiles and assign the search pattern to use. Returns [`@GlobalScope.OK`](class_@globalscope.md#class_@globalscope_constant_ok) if the compilation is successful. If compilation fails, returns [`@GlobalScope.FAILED`](class_@globalscope.md#class_@globalscope_constant_failed) and when `show_error` is `true`, details are printed to standard output.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_regex_method_create_from_string"></div>

[`RegEx`](class_regex.md) **create_from_string** ( pattern: [`String`](class_string.md), show_error: [`bool`](class_bool.md) = true ) static[^static]<div id="class_regex_method_create_from_string"></div>

Creates and compiles a new **RegEx** object. See also [`compile`](class_regex.md#class_regex_method_compile).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_regex_method_get_group_count"></div>

[`int`](class_int.md) **get_group_count** ( ) const[^const]<div id="class_regex_method_get_group_count"></div>

Returns the number of capturing groups in compiled pattern.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_regex_method_get_names"></div>

[`PackedStringArray`](class_packedstringarray.md) **get_names** ( ) const[^const]<div id="class_regex_method_get_names"></div>

Returns an array of names of named capturing groups in the compiled pattern. They are ordered by appearance.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_regex_method_get_pattern"></div>

[`String`](class_string.md) **get_pattern** ( ) const[^const]<div id="class_regex_method_get_pattern"></div>

Returns the original search pattern that was compiled.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_regex_method_is_valid"></div>

[`bool`](class_bool.md) **is_valid** ( ) const[^const]<div id="class_regex_method_is_valid"></div>

Returns whether this object has a valid search pattern assigned.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_regex_method_search"></div>

[`RegExMatch`](class_regexmatch.md) **search** ( subject: [`String`](class_string.md), offset: [`int`](class_int.md) = 0, end: [`int`](class_int.md) = -1 ) const[^const]<div id="class_regex_method_search"></div>

Searches the text for the compiled pattern. Returns a [`RegExMatch`](class_regexmatch.md) container of the first matching result if found, otherwise `null`.

The region to search within can be specified with `offset` and `end`. This is useful when searching for another match in the same `subject` by calling this method again after a previous success. Note that setting these parameters differs from passing over a shortened string. For example, the start anchor `^` is not affected by `offset`, and the character before `offset` will be checked for the word boundary `\b`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_regex_method_search_all"></div>

[Array](class_array.md) [`RegExMatch`](class_regexmatch.md) **search_all** ( subject: [`String`](class_string.md), offset: [`int`](class_int.md) = 0, end: [`int`](class_int.md) = -1 ) const[^const]<div id="class_regex_method_search_all"></div>

Searches the text for the compiled pattern. Returns an array of [`RegExMatch`](class_regexmatch.md) containers for each non-overlapping result. If no results were found, an empty array is returned instead.

The region to search within can be specified with `offset` and `end`. This is useful when searching for another match in the same `subject` by calling this method again after a previous success. Note that setting these parameters differs from passing over a shortened string. For example, the start anchor `^` is not affected by `offset`, and the character before `offset` will be checked for the word boundary `\b`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_regex_method_sub"></div>

[`String`](class_string.md) **sub** ( subject: [`String`](class_string.md), replacement: [`String`](class_string.md), all: [`bool`](class_bool.md) = false, offset: [`int`](class_int.md) = 0, end: [`int`](class_int.md) = -1 ) const[^const]<div id="class_regex_method_sub"></div>

Searches the text for the compiled pattern and replaces it with the specified string. Escapes and backreferences such as `$1` and `$name` are expanded and resolved. By default, only the first instance is replaced, but it can be changed for all instances (global replacement).

The region to search within can be specified with `offset` and `end`. This is useful when searching for another match in the same `subject` by calling this method again after a previous success. Note that setting these parameters differs from passing over a shortened string. For example, the start anchor `^` is not affected by `offset`, and the character before `offset` will be checked for the word boundary `\b`.

[^virtual]: 本方法通常需要用户覆盖才能生效。
[^const]: 本方法无副作用，不会修改该实例的任何成员变量。
[^vararg]: 本方法除了能接受在此处描述的参数外，还能够继续接受任意数量的参数。
[^constructor]: 本方法用于构造某个类型。
[^static]: 调用本方法无需实例，可直接使用类名进行调用。
[^operator]: 本方法描述的是使用本类型作为左操作数的有效运算符。
[^bitfield]: 这个值是由下列位标志构成位掩码的整数。
[^void]: 无返回值。
