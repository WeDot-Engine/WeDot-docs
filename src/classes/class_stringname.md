<!-- ⚠ 请勿编辑本文件 ⚠ -->
<!-- 本文档使用脚本从 WeDot 引擎源码仓库生成。 -->
<!-- 生成脚本：https://github.com/WeDot-Engine/WeDot/tree/4.3/doc/tools/make_md.py； -->
<!-- 原文件：https://github.com/WeDot-Engine/WeDot/tree/4.3/doc/classes/StringName.xml。 -->

<div id="_class_stringname"></div>

# StringName

A built-in type for unique strings.

## 描述

**StringName** s are immutable strings designed for general-purpose representation of unique names (also called "string interning"). Two **StringName** s with the same value are the same object. Comparing them is extremely fast compared to regular [`String`](class_string.md) s.

You will usually pass a [`String`](class_string.md) to methods expecting a **StringName** and it will be automatically converted (often at compile time), but in rare cases you can construct a **StringName** ahead of time with the **StringName** constructor or, in GDScript, the literal syntax `&"example"`. Manually constructing a **StringName** allows you to control when the conversion from [`String`](class_string.md) occurs or to use the literal and prevent conversions entirely.

See also [`NodePath`](class_nodepath.md), which is a similar concept specifically designed to store pre-parsed scene tree paths.

All of [`String`](class_string.md)'s methods are available in this class too. They convert the **StringName** into a string, and they also return a string. This is highly inefficient and should only be used if the string is desired.

 **Note:** In C#, an explicit conversion to `System.String` is required to use the methods listed on this page. Use the `ToString()` method to cast a **StringName** to a string, and then use the equivalent methods in `System.String` or `StringExtensions`.

 **Note:** In a boolean context, a **StringName** will evaluate to `false` if it is empty (`StringName("")`). Otherwise, a **StringName** will always evaluate to `true`. The `not` operator cannot be used. Instead, [`is_empty`](#class_stringname_method_is_empty) should be used to check for empty **StringName** s.

通过 C# 使用该 API 时会有显著不同，详见 :ref:`doc_c_sharp_differences`\ 。

## 构造函数

|||
|:-:|:--|
| [`StringName`](class_stringname.md) | [`StringName`](class_stringname.md#class_stringname_constructor_stringname) ( )                                           |
| [`StringName`](class_stringname.md) | [`StringName`](class_stringname.md#class_stringname_constructor_stringname) ( from: [`StringName`](class_stringname.md) ) |
| [`StringName`](class_stringname.md) | [`StringName`](class_stringname.md#class_stringname_constructor_stringname) ( from: [`String`](class_string.md) )         |

## 方法

|||
|:-:|:--|
| [`bool`](class_bool.md)                             | [`begins_with`](class_stringnamemd#class_stringname_method_begins_with) ( text: [`String`](class_string.md) ) const[^const]                                                                                   |
| [`PackedStringArray`](class_packedstringarray.md)   | [`bigrams`](class_stringnamemd#class_stringname_method_bigrams) ( ) const[^const]                                                                                                                             |
| [`int`](class_int.md)                               | [`bin_to_int`](class_stringnamemd#class_stringname_method_bin_to_int) ( ) const[^const]                                                                                                                       |
| [`String`](class_string.md)                         | [`c_escape`](class_stringnamemd#class_stringname_method_c_escape) ( ) const[^const]                                                                                                                           |
| [`String`](class_string.md)                         | [`c_unescape`](class_stringnamemd#class_stringname_method_c_unescape) ( ) const[^const]                                                                                                                       |
| [`String`](class_string.md)                         | [`capitalize`](class_stringnamemd#class_stringname_method_capitalize) ( ) const[^const]                                                                                                                       |
| [`int`](class_int.md)                               | [`casecmp_to`](class_stringnamemd#class_stringname_method_casecmp_to) ( to: [`String`](class_string.md) ) const[^const]                                                                                       |
| [`bool`](class_bool.md)                             | [`contains`](class_stringnamemd#class_stringname_method_contains) ( what: [`String`](class_string.md) ) const[^const]                                                                                         |
| [`bool`](class_bool.md)                             | [`containsn`](class_stringnamemd#class_stringname_method_containsn) ( what: [`String`](class_string.md) ) const[^const]                                                                                       |
| [`int`](class_int.md)                               | [`count`](class_stringnamemd#class_stringname_method_count) ( what: [`String`](class_string.md), from: [`int`](class_int.md) = 0, to: [`int`](class_int.md) = 0 ) const[^const]                               |
| [`int`](class_int.md)                               | [`countn`](class_stringnamemd#class_stringname_method_countn) ( what: [`String`](class_string.md), from: [`int`](class_int.md) = 0, to: [`int`](class_int.md) = 0 ) const[^const]                             |
| [`String`](class_string.md)                         | [`dedent`](class_stringnamemd#class_stringname_method_dedent) ( ) const[^const]                                                                                                                               |
| [`bool`](class_bool.md)                             | [`ends_with`](class_stringnamemd#class_stringname_method_ends_with) ( text: [`String`](class_string.md) ) const[^const]                                                                                       |
| [`String`](class_string.md)                         | [`erase`](class_stringnamemd#class_stringname_method_erase) ( position: [`int`](class_int.md), chars: [`int`](class_int.md) = 1 ) const[^const]                                                               |
| [`int`](class_int.md)                               | [`filecasecmp_to`](class_stringnamemd#class_stringname_method_filecasecmp_to) ( to: [`String`](class_string.md) ) const[^const]                                                                               |
| [`int`](class_int.md)                               | [`filenocasecmp_to`](class_stringnamemd#class_stringname_method_filenocasecmp_to) ( to: [`String`](class_string.md) ) const[^const]                                                                           |
| [`int`](class_int.md)                               | [`find`](class_stringnamemd#class_stringname_method_find) ( what: [`String`](class_string.md), from: [`int`](class_int.md) = 0 ) const[^const]                                                                |
| [`int`](class_int.md)                               | [`findn`](class_stringnamemd#class_stringname_method_findn) ( what: [`String`](class_string.md), from: [`int`](class_int.md) = 0 ) const[^const]                                                              |
| [`String`](class_string.md)                         | [`format`](class_stringnamemd#class_stringname_method_format) ( values: [`Variant`](class_variant.md), placeholder: [`String`](class_string.md) = "{_}" ) const[^const]                                       |
| [`String`](class_string.md)                         | [`get_base_dir`](class_stringnamemd#class_stringname_method_get_base_dir) ( ) const[^const]                                                                                                                   |
| [`String`](class_string.md)                         | [`get_basename`](class_stringnamemd#class_stringname_method_get_basename) ( ) const[^const]                                                                                                                   |
| [`String`](class_string.md)                         | [`get_extension`](class_stringnamemd#class_stringname_method_get_extension) ( ) const[^const]                                                                                                                 |
| [`String`](class_string.md)                         | [`get_file`](class_stringnamemd#class_stringname_method_get_file) ( ) const[^const]                                                                                                                           |
| [`String`](class_string.md)                         | [`get_slice`](class_stringnamemd#class_stringname_method_get_slice) ( delimiter: [`String`](class_string.md), slice: [`int`](class_int.md) ) const[^const]                                                    |
| [`int`](class_int.md)                               | [`get_slice_count`](class_stringnamemd#class_stringname_method_get_slice_count) ( delimiter: [`String`](class_string.md) ) const[^const]                                                                      |
| [`String`](class_string.md)                         | [`get_slicec`](class_stringnamemd#class_stringname_method_get_slicec) ( delimiter: [`int`](class_int.md), slice: [`int`](class_int.md) ) const[^const]                                                        |
| [`int`](class_int.md)                               | [`hash`](class_stringnamemd#class_stringname_method_hash) ( ) const[^const]                                                                                                                                   |
| [`PackedByteArray`](class_packedbytearray.md)       | [`hex_decode`](class_stringnamemd#class_stringname_method_hex_decode) ( ) const[^const]                                                                                                                       |
| [`int`](class_int.md)                               | [`hex_to_int`](class_stringnamemd#class_stringname_method_hex_to_int) ( ) const[^const]                                                                                                                       |
| [`String`](class_string.md)                         | [`indent`](class_stringnamemd#class_stringname_method_indent) ( prefix: [`String`](class_string.md) ) const[^const]                                                                                           |
| [`String`](class_string.md)                         | [`insert`](class_stringnamemd#class_stringname_method_insert) ( position: [`int`](class_int.md), what: [`String`](class_string.md) ) const[^const]                                                            |
| [`bool`](class_bool.md)                             | [`is_absolute_path`](class_stringnamemd#class_stringname_method_is_absolute_path) ( ) const[^const]                                                                                                           |
| [`bool`](class_bool.md)                             | [`is_empty`](class_stringnamemd#class_stringname_method_is_empty) ( ) const[^const]                                                                                                                           |
| [`bool`](class_bool.md)                             | [`is_relative_path`](class_stringnamemd#class_stringname_method_is_relative_path) ( ) const[^const]                                                                                                           |
| [`bool`](class_bool.md)                             | [`is_subsequence_of`](class_stringnamemd#class_stringname_method_is_subsequence_of) ( text: [`String`](class_string.md) ) const[^const]                                                                       |
| [`bool`](class_bool.md)                             | [`is_subsequence_ofn`](class_stringnamemd#class_stringname_method_is_subsequence_ofn) ( text: [`String`](class_string.md) ) const[^const]                                                                     |
| [`bool`](class_bool.md)                             | [`is_valid_filename`](class_stringnamemd#class_stringname_method_is_valid_filename) ( ) const[^const]                                                                                                         |
| [`bool`](class_bool.md)                             | [`is_valid_float`](class_stringnamemd#class_stringname_method_is_valid_float) ( ) const[^const]                                                                                                               |
| [`bool`](class_bool.md)                             | [`is_valid_hex_number`](class_stringnamemd#class_stringname_method_is_valid_hex_number) ( with_prefix: [`bool`](class_bool.md) = false ) const[^const]                                                        |
| [`bool`](class_bool.md)                             | [`is_valid_html_color`](class_stringnamemd#class_stringname_method_is_valid_html_color) ( ) const[^const]                                                                                                     |
| [`bool`](class_bool.md)                             | [`is_valid_identifier`](class_stringnamemd#class_stringname_method_is_valid_identifier) ( ) const[^const]                                                                                                     |
| [`bool`](class_bool.md)                             | [`is_valid_int`](class_stringnamemd#class_stringname_method_is_valid_int) ( ) const[^const]                                                                                                                   |
| [`bool`](class_bool.md)                             | [`is_valid_ip_address`](class_stringnamemd#class_stringname_method_is_valid_ip_address) ( ) const[^const]                                                                                                     |
| [`String`](class_string.md)                         | [`join`](class_stringnamemd#class_stringname_method_join) ( parts: [`PackedStringArray`](class_packedstringarray.md) ) const[^const]                                                                          |
| [`String`](class_string.md)                         | [`json_escape`](class_stringnamemd#class_stringname_method_json_escape) ( ) const[^const]                                                                                                                     |
| [`String`](class_string.md)                         | [`left`](class_stringnamemd#class_stringname_method_left) ( length: [`int`](class_int.md) ) const[^const]                                                                                                     |
| [`int`](class_int.md)                               | [`length`](class_stringnamemd#class_stringname_method_length) ( ) const[^const]                                                                                                                               |
| [`String`](class_string.md)                         | [`lpad`](class_stringnamemd#class_stringname_method_lpad) ( min_length: [`int`](class_int.md), character: [`String`](class_string.md) = " " ) const[^const]                                                   |
| [`String`](class_string.md)                         | [`lstrip`](class_stringnamemd#class_stringname_method_lstrip) ( chars: [`String`](class_string.md) ) const[^const]                                                                                            |
| [`bool`](class_bool.md)                             | [`match`](class_stringnamemd#class_stringname_method_match) ( expr: [`String`](class_string.md) ) const[^const]                                                                                               |
| [`bool`](class_bool.md)                             | [`matchn`](class_stringnamemd#class_stringname_method_matchn) ( expr: [`String`](class_string.md) ) const[^const]                                                                                             |
| [`PackedByteArray`](class_packedbytearray.md)       | [`md5_buffer`](class_stringnamemd#class_stringname_method_md5_buffer) ( ) const[^const]                                                                                                                       |
| [`String`](class_string.md)                         | [`md5_text`](class_stringnamemd#class_stringname_method_md5_text) ( ) const[^const]                                                                                                                           |
| [`int`](class_int.md)                               | [`naturalcasecmp_to`](class_stringnamemd#class_stringname_method_naturalcasecmp_to) ( to: [`String`](class_string.md) ) const[^const]                                                                         |
| [`int`](class_int.md)                               | [`naturalnocasecmp_to`](class_stringnamemd#class_stringname_method_naturalnocasecmp_to) ( to: [`String`](class_string.md) ) const[^const]                                                                     |
| [`int`](class_int.md)                               | [`nocasecmp_to`](class_stringnamemd#class_stringname_method_nocasecmp_to) ( to: [`String`](class_string.md) ) const[^const]                                                                                   |
| [`String`](class_string.md)                         | [`pad_decimals`](class_stringnamemd#class_stringname_method_pad_decimals) ( digits: [`int`](class_int.md) ) const[^const]                                                                                     |
| [`String`](class_string.md)                         | [`pad_zeros`](class_stringnamemd#class_stringname_method_pad_zeros) ( digits: [`int`](class_int.md) ) const[^const]                                                                                           |
| [`String`](class_string.md)                         | [`path_join`](class_stringnamemd#class_stringname_method_path_join) ( file: [`String`](class_string.md) ) const[^const]                                                                                       |
| [`String`](class_string.md)                         | [`repeat`](class_stringnamemd#class_stringname_method_repeat) ( count: [`int`](class_int.md) ) const[^const]                                                                                                  |
| [`String`](class_string.md)                         | [`replace`](class_stringnamemd#class_stringname_method_replace) ( what: [`String`](class_string.md), forwhat: [`String`](class_string.md) ) const[^const]                                                     |
| [`String`](class_string.md)                         | [`replacen`](class_stringnamemd#class_stringname_method_replacen) ( what: [`String`](class_string.md), forwhat: [`String`](class_string.md) ) const[^const]                                                   |
| [`String`](class_string.md)                         | [`reverse`](class_stringnamemd#class_stringname_method_reverse) ( ) const[^const]                                                                                                                             |
| [`int`](class_int.md)                               | [`rfind`](class_stringnamemd#class_stringname_method_rfind) ( what: [`String`](class_string.md), from: [`int`](class_int.md) = -1 ) const[^const]                                                             |
| [`int`](class_int.md)                               | [`rfindn`](class_stringnamemd#class_stringname_method_rfindn) ( what: [`String`](class_string.md), from: [`int`](class_int.md) = -1 ) const[^const]                                                           |
| [`String`](class_string.md)                         | [`right`](class_stringnamemd#class_stringname_method_right) ( length: [`int`](class_int.md) ) const[^const]                                                                                                   |
| [`String`](class_string.md)                         | [`rpad`](class_stringnamemd#class_stringname_method_rpad) ( min_length: [`int`](class_int.md), character: [`String`](class_string.md) = " " ) const[^const]                                                   |
| [`PackedStringArray`](class_packedstringarray.md)   | [`rsplit`](class_stringnamemd#class_stringname_method_rsplit) ( delimiter: [`String`](class_string.md) = "", allow_empty: [`bool`](class_bool.md) = true, maxsplit: [`int`](class_int.md) = 0 ) const[^const] |
| [`String`](class_string.md)                         | [`rstrip`](class_stringnamemd#class_stringname_method_rstrip) ( chars: [`String`](class_string.md) ) const[^const]                                                                                            |
| [`PackedByteArray`](class_packedbytearray.md)       | [`sha1_buffer`](class_stringnamemd#class_stringname_method_sha1_buffer) ( ) const[^const]                                                                                                                     |
| [`String`](class_string.md)                         | [`sha1_text`](class_stringnamemd#class_stringname_method_sha1_text) ( ) const[^const]                                                                                                                         |
| [`PackedByteArray`](class_packedbytearray.md)       | [`sha256_buffer`](class_stringnamemd#class_stringname_method_sha256_buffer) ( ) const[^const]                                                                                                                 |
| [`String`](class_string.md)                         | [`sha256_text`](class_stringnamemd#class_stringname_method_sha256_text) ( ) const[^const]                                                                                                                     |
| [`float`](class_float.md)                           | [`similarity`](class_stringnamemd#class_stringname_method_similarity) ( text: [`String`](class_string.md) ) const[^const]                                                                                     |
| [`String`](class_string.md)                         | [`simplify_path`](class_stringnamemd#class_stringname_method_simplify_path) ( ) const[^const]                                                                                                                 |
| [`PackedStringArray`](class_packedstringarray.md)   | [`split`](class_stringnamemd#class_stringname_method_split) ( delimiter: [`String`](class_string.md) = "", allow_empty: [`bool`](class_bool.md) = true, maxsplit: [`int`](class_int.md) = 0 ) const[^const]   |
| [`PackedFloat64Array`](class_packedfloat64array.md) | [`split_floats`](class_stringnamemd#class_stringname_method_split_floats) ( delimiter: [`String`](class_string.md), allow_empty: [`bool`](class_bool.md) = true ) const[^const]                               |
| [`String`](class_string.md)                         | [`strip_edges`](class_stringnamemd#class_stringname_method_strip_edges) ( left: [`bool`](class_bool.md) = true, right: [`bool`](class_bool.md) = true ) const[^const]                                         |
| [`String`](class_string.md)                         | [`strip_escapes`](class_stringnamemd#class_stringname_method_strip_escapes) ( ) const[^const]                                                                                                                 |
| [`String`](class_string.md)                         | [`substr`](class_stringnamemd#class_stringname_method_substr) ( from: [`int`](class_int.md), len: [`int`](class_int.md) = -1 ) const[^const]                                                                  |
| [`PackedByteArray`](class_packedbytearray.md)       | [`to_ascii_buffer`](class_stringnamemd#class_stringname_method_to_ascii_buffer) ( ) const[^const]                                                                                                             |
| [`String`](class_string.md)                         | [`to_camel_case`](class_stringnamemd#class_stringname_method_to_camel_case) ( ) const[^const]                                                                                                                 |
| [`float`](class_float.md)                           | [`to_float`](class_stringnamemd#class_stringname_method_to_float) ( ) const[^const]                                                                                                                           |
| [`int`](class_int.md)                               | [`to_int`](class_stringnamemd#class_stringname_method_to_int) ( ) const[^const]                                                                                                                               |
| [`String`](class_string.md)                         | [`to_lower`](class_stringnamemd#class_stringname_method_to_lower) ( ) const[^const]                                                                                                                           |
| [`String`](class_string.md)                         | [`to_pascal_case`](class_stringnamemd#class_stringname_method_to_pascal_case) ( ) const[^const]                                                                                                               |
| [`String`](class_string.md)                         | [`to_snake_case`](class_stringnamemd#class_stringname_method_to_snake_case) ( ) const[^const]                                                                                                                 |
| [`String`](class_string.md)                         | [`to_upper`](class_stringnamemd#class_stringname_method_to_upper) ( ) const[^const]                                                                                                                           |
| [`PackedByteArray`](class_packedbytearray.md)       | [`to_utf8_buffer`](class_stringnamemd#class_stringname_method_to_utf8_buffer) ( ) const[^const]                                                                                                               |
| [`PackedByteArray`](class_packedbytearray.md)       | [`to_utf16_buffer`](class_stringnamemd#class_stringname_method_to_utf16_buffer) ( ) const[^const]                                                                                                             |
| [`PackedByteArray`](class_packedbytearray.md)       | [`to_utf32_buffer`](class_stringnamemd#class_stringname_method_to_utf32_buffer) ( ) const[^const]                                                                                                             |
| [`PackedByteArray`](class_packedbytearray.md)       | [`to_wchar_buffer`](class_stringnamemd#class_stringname_method_to_wchar_buffer) ( ) const[^const]                                                                                                             |
| [`String`](class_string.md)                         | [`trim_prefix`](class_stringnamemd#class_stringname_method_trim_prefix) ( prefix: [`String`](class_string.md) ) const[^const]                                                                                 |
| [`String`](class_string.md)                         | [`trim_suffix`](class_stringnamemd#class_stringname_method_trim_suffix) ( suffix: [`String`](class_string.md) ) const[^const]                                                                                 |
| [`int`](class_int.md)                               | [`unicode_at`](class_stringnamemd#class_stringname_method_unicode_at) ( at: [`int`](class_int.md) ) const[^const]                                                                                             |
| [`String`](class_string.md)                         | [`uri_decode`](class_stringnamemd#class_stringname_method_uri_decode) ( ) const[^const]                                                                                                                       |
| [`String`](class_string.md)                         | [`uri_encode`](class_stringnamemd#class_stringname_method_uri_encode) ( ) const[^const]                                                                                                                       |
| [`String`](class_string.md)                         | [`validate_filename`](class_stringnamemd#class_stringname_method_validate_filename) ( ) const[^const]                                                                                                         |
| [`String`](class_string.md)                         | [`validate_node_name`](class_stringnamemd#class_stringname_method_validate_node_name) ( ) const[^const]                                                                                                       |
| [`String`](class_string.md)                         | [`xml_escape`](class_stringnamemd#class_stringname_method_xml_escape) ( escape_quotes: [`bool`](class_bool.md) = false ) const[^const]                                                                        |
| [`String`](class_string.md)                         | [`xml_unescape`](class_stringnamemd#class_stringname_method_xml_unescape) ( ) const[^const]                                                                                                                   |

## 运算符

|||
|:-:|:--|
| [`bool`](class_bool.md)     | [`operator !=`](class_StringName.md#operator_neq_String) ( right: [`String`](class_string.md) )             |
| [`bool`](class_bool.md)     | [`operator !=`](class_StringName.md#operator_neq_StringName) ( right: [`StringName`](class_stringname.md) ) |
| [`String`](class_string.md) | [`operator %`](class_StringName.md#operator_mod_Variant) ( right: [`Variant`](class_variant.md) )           |
| [`String`](class_string.md) | [`operator +`](class_StringName.md#operator_sum_String) ( right: [`String`](class_string.md) )              |
| [`String`](class_string.md) | [`operator +`](class_StringName.md#operator_sum_StringName) ( right: [`StringName`](class_stringname.md) )  |
| [`bool`](class_bool.md)     | [`operator <`](class_StringName.md#operator_lt_StringName) ( right: [`StringName`](class_stringname.md) )   |
| [`bool`](class_bool.md)     | [`operator <=`](class_StringName.md#operator_lte_StringName) ( right: [`StringName`](class_stringname.md) ) |
| [`bool`](class_bool.md)     | [`operator ==`](class_StringName.md#operator_eq_String) ( right: [`String`](class_string.md) )              |
| [`bool`](class_bool.md)     | [`operator ==`](class_StringName.md#operator_eq_StringName) ( right: [`StringName`](class_stringname.md) )  |
| [`bool`](class_bool.md)     | [`operator >`](class_StringName.md#operator_gt_StringName) ( right: [`StringName`](class_stringname.md) )   |
| [`bool`](class_bool.md)     | [`operator >=`](class_StringName.md#operator_gte_StringName) ( right: [`StringName`](class_stringname.md) ) |

<!-- rst-class:: classref-section-separator -->

---

## 构造函数说明

<div id="_class_stringname_constructor_stringname"></div>

[`StringName`](class_stringname.md) **StringName** ( )<div id="class_stringname_constructor_stringname"></div>

Constructs an empty **StringName**.

<!-- rst-class:: classref-item-separator -->

---

[`StringName`](class_stringname.md) **StringName** ( from: [`StringName`](class_stringname.md) )

Constructs a **StringName** as a copy of the given **StringName**.

<!-- rst-class:: classref-item-separator -->

---

[`StringName`](class_stringname.md) **StringName** ( from: [`String`](class_string.md) )

Creates a new **StringName** from the given [`String`](class_string.md). In GDScript, `StringName("example")` is equivalent to `&"example"`.

<!-- rst-class:: classref-section-separator -->

---

## 方法说明

<div id="_class_stringname_method_begins_with"></div>

[`bool`](class_bool.md) **begins_with** ( text: [`String`](class_string.md) ) const[^const]<div id="class_stringname_method_begins_with"></div>

Returns `true` if the string begins with the given `text`. See also [`ends_with`](#class_stringname_method_ends_with).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_stringname_method_bigrams"></div>

[`PackedStringArray`](class_packedstringarray.md) **bigrams** ( ) const[^const]<div id="class_stringname_method_bigrams"></div>

Returns an array containing the bigrams (pairs of consecutive characters) of this string.

```

    print("Get up!".bigrams()) # Prints ["Ge", "et", "t ", " u", "up", "p!"]
```



<!-- rst-class:: classref-item-separator -->

---

<div id="_class_stringname_method_bin_to_int"></div>

[`int`](class_int.md) **bin_to_int** ( ) const[^const]<div id="class_stringname_method_bin_to_int"></div>

Converts the string representing a binary number into an [`int`](class_int.md). The string may optionally be prefixed with `"0b"`, and an additional `-` prefix for negative numbers.



```gdscript

    print("101".bin_to_int())   # Prints 5
    print("0b101".bin_to_int()) # Prints 5
    print("-0b10".bin_to_int()) # Prints -2
```

```csharp

    GD.Print("101".BinToInt());   // Prints 5
    GD.Print("0b101".BinToInt()); // Prints 5
    GD.Print("-0b10".BinToInt()); // Prints -2
```







<!-- rst-class:: classref-item-separator -->

---

<div id="_class_stringname_method_c_escape"></div>

[`String`](class_string.md) **c_escape** ( ) const[^const]<div id="class_stringname_method_c_escape"></div>

Returns a copy of the string with special characters escaped using the C language standard.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_stringname_method_c_unescape"></div>

[`String`](class_string.md) **c_unescape** ( ) const[^const]<div id="class_stringname_method_c_unescape"></div>

Returns a copy of the string with escaped characters replaced by their meanings. Supported escape sequences are `\'`, `\"`, `\\`, `\a`, `\b`, `\f`, `\n`, `\r`, `\t`, `\v`.

 **Note:** Unlike the GDScript parser, this method doesn't support the `\uXXXX` escape sequence.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_stringname_method_capitalize"></div>

[`String`](class_string.md) **capitalize** ( ) const[^const]<div id="class_stringname_method_capitalize"></div>

Changes the appearance of the string: replaces underscores (`_`) with spaces, adds spaces before uppercase letters in the middle of a word, converts all letters to lowercase, then converts the first one and each one following a space to uppercase.



```gdscript

    "move_local_x".capitalize()   # Returns "Move Local X"
    "sceneFile_path".capitalize() # Returns "Scene File Path"
    "2D, FPS, PNG".capitalize()   # Returns "2d, Fps, Png"
```

```csharp

    "move_local_x".Capitalize();   // Returns "Move Local X"
    "sceneFile_path".Capitalize(); // Returns "Scene File Path"
    "2D, FPS, PNG".Capitalize();   // Returns "2d, Fps, Png"
```







<!-- rst-class:: classref-item-separator -->

---

<div id="_class_stringname_method_casecmp_to"></div>

[`int`](class_int.md) **casecmp_to** ( to: [`String`](class_string.md) ) const[^const]<div id="class_stringname_method_casecmp_to"></div>

Performs a case-sensitive comparison to another string. Returns `-1` if less than, `1` if greater than, or `0` if equal. "Less than" and "greater than" are determined by the [*Unicode code points*](https://en.wikipedia.org/wiki/List_of_Unicode_characters) of each string, which roughly matches the alphabetical order.

With different string lengths, returns `1` if this string is longer than the `to` string, or `-1` if shorter. Note that the length of empty strings is *always* `0`.

To get a [`bool`](class_bool.md) result from a string comparison, use the `==` operator instead. See also [`nocasecmp_to`](#class_stringname_method_nocasecmp_to), [`filecasecmp_to`](#class_stringname_method_filecasecmp_to), and [`naturalcasecmp_to`](#class_stringname_method_naturalcasecmp_to).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_stringname_method_contains"></div>

[`bool`](class_bool.md) **contains** ( what: [`String`](class_string.md) ) const[^const]<div id="class_stringname_method_contains"></div>

Returns `true` if the string contains `what`. In GDScript, this corresponds to the `in` operator.



```gdscript

    print("Node".contains("de")) # Prints true
    print("team".contains("I"))  # Prints false
    print("I" in "team")         # Prints false
```

```csharp

    GD.Print("Node".Contains("de")); // Prints true
    GD.Print("team".Contains("I"));  // Prints false
```



If you need to know where `what` is within the string, use [`find`](#class_stringname_method_find). See also [`containsn`](#class_stringname_method_containsn).





<!-- rst-class:: classref-item-separator -->

---

<div id="_class_stringname_method_containsn"></div>

[`bool`](class_bool.md) **containsn** ( what: [`String`](class_string.md) ) const[^const]<div id="class_stringname_method_containsn"></div>

Returns `true` if the string contains `what`, **ignoring case**.

If you need to know where `what` is within the string, use [`findn`](#class_stringname_method_findn). See also [`contains`](#class_stringname_method_contains).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_stringname_method_count"></div>

[`int`](class_int.md) **count** ( what: [`String`](class_string.md), from: [`int`](class_int.md) = 0, to: [`int`](class_int.md) = 0 ) const[^const]<div id="class_stringname_method_count"></div>

Returns the number of occurrences of the substring `what` between `from` and `to` positions. If `to` is 0, the search continues until the end of the string.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_stringname_method_countn"></div>

[`int`](class_int.md) **countn** ( what: [`String`](class_string.md), from: [`int`](class_int.md) = 0, to: [`int`](class_int.md) = 0 ) const[^const]<div id="class_stringname_method_countn"></div>

Returns the number of occurrences of the substring `what` between `from` and `to` positions, **ignoring case**. If `to` is 0, the search continues until the end of the string.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_stringname_method_dedent"></div>

[`String`](class_string.md) **dedent** ( ) const[^const]<div id="class_stringname_method_dedent"></div>

Returns a copy of the string with indentation (leading tabs and spaces) removed. See also [`indent`](#class_stringname_method_indent) to add indentation.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_stringname_method_ends_with"></div>

[`bool`](class_bool.md) **ends_with** ( text: [`String`](class_string.md) ) const[^const]<div id="class_stringname_method_ends_with"></div>

Returns `true` if the string ends with the given `text`. See also [`begins_with`](#class_stringname_method_begins_with).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_stringname_method_erase"></div>

[`String`](class_string.md) **erase** ( position: [`int`](class_int.md), chars: [`int`](class_int.md) = 1 ) const[^const]<div id="class_stringname_method_erase"></div>

Returns a string with `chars` characters erased starting from `position`. If `chars` goes beyond the string's length given the specified `position`, fewer characters will be erased from the returned string. Returns an empty string if either `position` or `chars` is negative. Returns the original string unmodified if `chars` is `0`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_stringname_method_filecasecmp_to"></div>

[`int`](class_int.md) **filecasecmp_to** ( to: [`String`](class_string.md) ) const[^const]<div id="class_stringname_method_filecasecmp_to"></div>

Like [`naturalcasecmp_to`](#class_stringname_method_naturalcasecmp_to) but prioritizes strings that begin with periods (`.`) and underscores (`_`) before any other character. Useful when sorting folders or file names.

To get a [`bool`](class_bool.md) result from a string comparison, use the `==` operator instead. See also [`filenocasecmp_to`](#class_stringname_method_filenocasecmp_to), [`naturalcasecmp_to`](#class_stringname_method_naturalcasecmp_to), and [`casecmp_to`](#class_stringname_method_casecmp_to).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_stringname_method_filenocasecmp_to"></div>

[`int`](class_int.md) **filenocasecmp_to** ( to: [`String`](class_string.md) ) const[^const]<div id="class_stringname_method_filenocasecmp_to"></div>

Like [`naturalnocasecmp_to`](#class_stringname_method_naturalnocasecmp_to) but prioritizes strings that begin with periods (`.`) and underscores (`_`) before any other character. Useful when sorting folders or file names.

To get a [`bool`](class_bool.md) result from a string comparison, use the `==` operator instead. See also [`filecasecmp_to`](#class_stringname_method_filecasecmp_to), [`naturalnocasecmp_to`](#class_stringname_method_naturalnocasecmp_to), and [`nocasecmp_to`](#class_stringname_method_nocasecmp_to).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_stringname_method_find"></div>

[`int`](class_int.md) **find** ( what: [`String`](class_string.md), from: [`int`](class_int.md) = 0 ) const[^const]<div id="class_stringname_method_find"></div>

Returns the index of the **first** occurrence of `what` in this string, or `-1` if there are none. The search's start can be specified with `from`, continuing to the end of the string.



```gdscript

    print("Team".find("I")) # Prints -1
    
    print("Potato".find("t"))    # Prints 2
    print("Potato".find("t", 3)) # Prints 4
    print("Potato".find("t", 5)) # Prints -1
```

```csharp

    GD.Print("Team".Find("I")); // Prints -1
    
    GD.Print("Potato".Find("t"));    // Prints 2
    GD.Print("Potato".Find("t", 3)); // Prints 4
    GD.Print("Potato".Find("t", 5)); // Prints -1
```



 **Note:** If you just want to know whether the string contains `what`, use [`contains`](#class_stringname_method_contains). In GDScript, you may also use the `in` operator.





<!-- rst-class:: classref-item-separator -->

---

<div id="_class_stringname_method_findn"></div>

[`int`](class_int.md) **findn** ( what: [`String`](class_string.md), from: [`int`](class_int.md) = 0 ) const[^const]<div id="class_stringname_method_findn"></div>

Returns the index of the **first** **case-insensitive** occurrence of `what` in this string, or `-1` if there are none. The starting search index can be specified with `from`, continuing to the end of the string.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_stringname_method_format"></div>

[`String`](class_string.md) **format** ( values: [`Variant`](class_variant.md), placeholder: [`String`](class_string.md) = "{_}" ) const[^const]<div id="class_stringname_method_format"></div>

Formats the string by replacing all occurrences of `placeholder` with the elements of `values`.

 `values` can be a [`Dictionary`](class_dictionary.md) or an [`Array`](class_array.md). Any underscores in `placeholder` will be replaced with the corresponding keys in advance. Array elements use their index as keys.

```

    # Prints "Waiting for Godot is a play by Samuel Beckett, and Godot Engine is named after it."
    var use_array_values = "Waiting for {0} is a play by {1}, and {0} Engine is named after it."
    print(use_array_values.format(["Godot", "Samuel Beckett"]))
    
    # Prints "User 42 is Godot."
    print("User {id} is {name}.".format({"id": 42, "name": "Godot"}))
```

Some additional handling is performed when `values` is an [`Array`](class_array.md). If `placeholder` does not contain an underscore, the elements of the `values` array will be used to replace one occurrence of the placeholder in order; If an element of `values` is another 2-element array, it'll be interpreted as a key-value pair.

```

    # Prints "User 42 is Godot."
    print("User {} is {}.".format([42, "Godot"], "{}"))
    print("User {id} is {name}.".format([["id", 42], ["name", "Godot"]]))
```

See also the [*GDScript format string*](../tutorials/scripting/gdscript/gdscript_format_string) tutorial.

 **Note:** In C#, it's recommended to [*interpolate strings with "$"*](https://learn.microsoft.com/en-us/dotnet/csharp/language-reference/tokens/interpolated), instead.





<!-- rst-class:: classref-item-separator -->

---

<div id="_class_stringname_method_get_base_dir"></div>

[`String`](class_string.md) **get_base_dir** ( ) const[^const]<div id="class_stringname_method_get_base_dir"></div>

If the string is a valid file path, returns the base directory name.

```

    var dir_path = "/path/to/file.txt".get_base_dir() # dir_path is "/path/to"
```



<!-- rst-class:: classref-item-separator -->

---

<div id="_class_stringname_method_get_basename"></div>

[`String`](class_string.md) **get_basename** ( ) const[^const]<div id="class_stringname_method_get_basename"></div>

If the string is a valid file path, returns the full file path, without the extension.

```

    var base = "/path/to/file.txt".get_basename() # base is "/path/to/file"
```



<!-- rst-class:: classref-item-separator -->

---

<div id="_class_stringname_method_get_extension"></div>

[`String`](class_string.md) **get_extension** ( ) const[^const]<div id="class_stringname_method_get_extension"></div>

If the string is a valid file name or path, returns the file extension without the leading period (`.`). Otherwise, returns an empty string.

```

    var a = "/path/to/file.txt".get_extension() # a is "txt"
    var b = "cool.txt".get_extension()          # b is "txt"
    var c = "cool.font.tres".get_extension()    # c is "tres"
    var d = ".pack1".get_extension()            # d is "pack1"
    
    var e = "file.txt.".get_extension()  # e is ""
    var f = "file.txt..".get_extension() # f is ""
    var g = "txt".get_extension()        # g is ""
    var h = "".get_extension()           # h is ""
```



<!-- rst-class:: classref-item-separator -->

---

<div id="_class_stringname_method_get_file"></div>

[`String`](class_string.md) **get_file** ( ) const[^const]<div id="class_stringname_method_get_file"></div>

If the string is a valid file path, returns the file name, including the extension.

```

    var file = "/path/to/icon.png".get_file() # file is "icon.png"
```



<!-- rst-class:: classref-item-separator -->

---

<div id="_class_stringname_method_get_slice"></div>

[`String`](class_string.md) **get_slice** ( delimiter: [`String`](class_string.md), slice: [`int`](class_int.md) ) const[^const]<div id="class_stringname_method_get_slice"></div>

Splits the string using a `delimiter` and returns the substring at index `slice`. Returns an empty string if the `slice` does not exist.

This is faster than [`split`](#class_stringname_method_split), if you only need one substring.

 **Example:** 

```

    print("i/am/example/hi".get_slice("/", 2)) # Prints "example"
```



<!-- rst-class:: classref-item-separator -->

---

<div id="_class_stringname_method_get_slice_count"></div>

[`int`](class_int.md) **get_slice_count** ( delimiter: [`String`](class_string.md) ) const[^const]<div id="class_stringname_method_get_slice_count"></div>

Returns the total number of slices when the string is split with the given `delimiter` (see [`split`](#class_stringname_method_split)).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_stringname_method_get_slicec"></div>

[`String`](class_string.md) **get_slicec** ( delimiter: [`int`](class_int.md), slice: [`int`](class_int.md) ) const[^const]<div id="class_stringname_method_get_slicec"></div>

Splits the string using a Unicode character with code `delimiter` and returns the substring at index `slice`. Returns an empty string if the `slice` does not exist.

This is faster than [`split`](#class_stringname_method_split), if you only need one substring.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_stringname_method_hash"></div>

[`int`](class_int.md) **hash** ( ) const[^const]<div id="class_stringname_method_hash"></div>

Returns the 32-bit hash value representing the string's contents.

 **Note:** Strings with equal hash values are *not* guaranteed to be the same, as a result of hash collisions. On the contrary, strings with different hash values are guaranteed to be different.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_stringname_method_hex_decode"></div>

[`PackedByteArray`](class_packedbytearray.md) **hex_decode** ( ) const[^const]<div id="class_stringname_method_hex_decode"></div>

Decodes a hexadecimal string as a [`PackedByteArray`](class_packedbytearray.md).



```gdscript

    var text = "hello world"
    var encoded = text.to_utf8_buffer().hex_encode() # outputs "68656c6c6f20776f726c64"
    print(buf.hex_decode().get_string_from_utf8())
```

```csharp

    var text = "hello world";
    var encoded = text.ToUtf8Buffer().HexEncode(); // outputs "68656c6c6f20776f726c64"
    GD.Print(buf.HexDecode().GetStringFromUtf8());
```







<!-- rst-class:: classref-item-separator -->

---

<div id="_class_stringname_method_hex_to_int"></div>

[`int`](class_int.md) **hex_to_int** ( ) const[^const]<div id="class_stringname_method_hex_to_int"></div>

Converts the string representing a hexadecimal number into an [`int`](class_int.md). The string may be optionally prefixed with `"0x"`, and an additional `-` prefix for negative numbers.



```gdscript

    print("0xff".hex_to_int()) # Prints 255
    print("ab".hex_to_int())   # Prints 171
```

```csharp

    GD.Print("0xff".HexToInt()); // Prints 255
    GD.Print("ab".HexToInt());   // Prints 171
```







<!-- rst-class:: classref-item-separator -->

---

<div id="_class_stringname_method_indent"></div>

[`String`](class_string.md) **indent** ( prefix: [`String`](class_string.md) ) const[^const]<div id="class_stringname_method_indent"></div>

Indents every line of the string with the given `prefix`. Empty lines are not indented. See also [`dedent`](#class_stringname_method_dedent) to remove indentation.

For example, the string can be indented with two tabulations using `"\t\t"`, or four spaces using `"    "`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_stringname_method_insert"></div>

[`String`](class_string.md) **insert** ( position: [`int`](class_int.md), what: [`String`](class_string.md) ) const[^const]<div id="class_stringname_method_insert"></div>

Inserts `what` at the given `position` in the string.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_stringname_method_is_absolute_path"></div>

[`bool`](class_bool.md) **is_absolute_path** ( ) const[^const]<div id="class_stringname_method_is_absolute_path"></div>

Returns `true` if the string is a path to a file or directory, and its starting point is explicitly defined. This method is the opposite of [`is_relative_path`](#class_stringname_method_is_relative_path).

This includes all paths starting with `"res://"`, `"user://"`, `"C:\"`, `"/"`, etc.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_stringname_method_is_empty"></div>

[`bool`](class_bool.md) **is_empty** ( ) const[^const]<div id="class_stringname_method_is_empty"></div>

Returns `true` if the string's length is `0` (`""`). See also [`length`](#class_stringname_method_length).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_stringname_method_is_relative_path"></div>

[`bool`](class_bool.md) **is_relative_path** ( ) const[^const]<div id="class_stringname_method_is_relative_path"></div>

Returns `true` if the string is a path, and its starting point is dependent on context. The path could begin from the current directory, or the current [`Node`](class_node.md) (if the string is derived from a [`NodePath`](class_nodepath.md)), and may sometimes be prefixed with `"./"`. This method is the opposite of [`is_absolute_path`](#class_stringname_method_is_absolute_path).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_stringname_method_is_subsequence_of"></div>

[`bool`](class_bool.md) **is_subsequence_of** ( text: [`String`](class_string.md) ) const[^const]<div id="class_stringname_method_is_subsequence_of"></div>

Returns `true` if all characters of this string can be found in `text` in their original order.

```

    var text = "Wow, incredible!"
    
    print("inedible".is_subsequence_of(text)) # Prints true
    print("Word!".is_subsequence_of(text))    # Prints true
    print("Window".is_subsequence_of(text))   # Prints false
    print("".is_subsequence_of(text))         # Prints true
```



<!-- rst-class:: classref-item-separator -->

---

<div id="_class_stringname_method_is_subsequence_ofn"></div>

[`bool`](class_bool.md) **is_subsequence_ofn** ( text: [`String`](class_string.md) ) const[^const]<div id="class_stringname_method_is_subsequence_ofn"></div>

Returns `true` if all characters of this string can be found in `text` in their original order, **ignoring case**.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_stringname_method_is_valid_filename"></div>

[`bool`](class_bool.md) **is_valid_filename** ( ) const[^const]<div id="class_stringname_method_is_valid_filename"></div>

Returns `true` if this string does not contain characters that are not allowed in file names (`:` `/` `\` `?` `*` `"` `|` `%` `<` `>`).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_stringname_method_is_valid_float"></div>

[`bool`](class_bool.md) **is_valid_float** ( ) const[^const]<div id="class_stringname_method_is_valid_float"></div>

Returns `true` if this string represents a valid floating-point number. A valid float may contain only digits, one decimal point (`.`), and the exponent letter (`e`). It may also be prefixed with a positive (`+`) or negative (`-`) sign. Any valid integer is also a valid float (see [`is_valid_int`](#class_stringname_method_is_valid_int)). See also [`to_float`](#class_stringname_method_to_float).

```

    print("1.7".is_valid_float())   # Prints true
    print("24".is_valid_float())    # Prints true
    print("7e3".is_valid_float())   # Prints true
    print("Hello".is_valid_float()) # Prints false
```



<!-- rst-class:: classref-item-separator -->

---

<div id="_class_stringname_method_is_valid_hex_number"></div>

[`bool`](class_bool.md) **is_valid_hex_number** ( with_prefix: [`bool`](class_bool.md) = false ) const[^const]<div id="class_stringname_method_is_valid_hex_number"></div>

Returns `true` if this string is a valid hexadecimal number. A valid hexadecimal number only contains digits or letters `A` to `F` (either uppercase or lowercase), and may be prefixed with a positive (`+`) or negative (`-`) sign.

If `with_prefix` is `true`, the hexadecimal number needs to prefixed by `"0x"` to be considered valid.

```

    print("A08E".is_valid_hex_number())    # Prints true
    print("-AbCdEf".is_valid_hex_number()) # Prints true
    print("2.5".is_valid_hex_number())     # Prints false
    
    print("0xDEADC0DE".is_valid_hex_number(true)) # Prints true
```



<!-- rst-class:: classref-item-separator -->

---

<div id="_class_stringname_method_is_valid_html_color"></div>

[`bool`](class_bool.md) **is_valid_html_color** ( ) const[^const]<div id="class_stringname_method_is_valid_html_color"></div>

Returns `true` if this string is a valid color in hexadecimal HTML notation. The string must be a hexadecimal value (see [`is_valid_hex_number`](#class_stringname_method_is_valid_hex_number)) of either 3, 4, 6 or 8 digits, and may be prefixed by a hash sign (`#`). Other HTML notations for colors, such as names or `hsl()`, are not considered valid. See also [`Color.html`](#class_color_method_html).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_stringname_method_is_valid_identifier"></div>

[`bool`](class_bool.md) **is_valid_identifier** ( ) const[^const]<div id="class_stringname_method_is_valid_identifier"></div>

Returns `true` if this string is a valid identifier. A valid identifier may contain only letters, digits and underscores (`_`), and the first character may not be a digit.

```

    print("node_2d".is_valid_identifier())    # Prints true
    print("TYPE_FLOAT".is_valid_identifier()) # Prints true
    print("1st_method".is_valid_identifier()) # Prints false
    print("MyMethod#2".is_valid_identifier()) # Prints false
```



<!-- rst-class:: classref-item-separator -->

---

<div id="_class_stringname_method_is_valid_int"></div>

[`bool`](class_bool.md) **is_valid_int** ( ) const[^const]<div id="class_stringname_method_is_valid_int"></div>

Returns `true` if this string represents a valid integer. A valid integer only contains digits, and may be prefixed with a positive (`+`) or negative (`-`) sign. See also [`to_int`](#class_stringname_method_to_int).

```

    print("7".is_valid_int())    # Prints true
    print("1.65".is_valid_int()) # Prints false
    print("Hi".is_valid_int())   # Prints false
    print("+3".is_valid_int())   # Prints true
    print("-12".is_valid_int())  # Prints true
```



<!-- rst-class:: classref-item-separator -->

---

<div id="_class_stringname_method_is_valid_ip_address"></div>

[`bool`](class_bool.md) **is_valid_ip_address** ( ) const[^const]<div id="class_stringname_method_is_valid_ip_address"></div>

Returns `true` if this string represents a well-formatted IPv4 or IPv6 address. This method considers [*reserved IP addresses*](https://en.wikipedia.org/wiki/Reserved_IP_addresses) such as `"0.0.0.0"` and `"ffff:ffff:ffff:ffff:ffff:ffff:ffff:ffff"` as valid.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_stringname_method_join"></div>

[`String`](class_string.md) **join** ( parts: [`PackedStringArray`](class_packedstringarray.md) ) const[^const]<div id="class_stringname_method_join"></div>

Returns the concatenation of `parts`' elements, with each element separated by the string calling this method. This method is the opposite of [`split`](#class_stringname_method_split).

 **Example:** 



```gdscript

    var fruits = ["Apple", "Orange", "Pear", "Kiwi"]
    
    print(", ".join(fruits))  # Prints "Apple, Orange, Pear, Kiwi"
    print("---".join(fruits)) # Prints "Apple---Orange---Pear---Kiwi"
```

```csharp

    var fruits = new string[] {"Apple", "Orange", "Pear", "Kiwi"};
    
    // In C#, this method is static.
    GD.Print(string.Join(", ", fruits));  // Prints "Apple, Orange, Pear, Kiwi"
    GD.Print(string.Join("---", fruits)); // Prints "Apple---Orange---Pear---Kiwi"
```







<!-- rst-class:: classref-item-separator -->

---

<div id="_class_stringname_method_json_escape"></div>

[`String`](class_string.md) **json_escape** ( ) const[^const]<div id="class_stringname_method_json_escape"></div>

Returns a copy of the string with special characters escaped using the JSON standard. Because it closely matches the C standard, it is possible to use [`c_unescape`](#class_stringname_method_c_unescape) to unescape the string, if necessary.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_stringname_method_left"></div>

[`String`](class_string.md) **left** ( length: [`int`](class_int.md) ) const[^const]<div id="class_stringname_method_left"></div>

Returns the first `length` characters from the beginning of the string. If `length` is negative, strips the last `length` characters from the string's end.

```

    print("Hello World!".left(3))  # Prints "Hel"
    print("Hello World!".left(-4)) # Prints "Hello Wo"
```



<!-- rst-class:: classref-item-separator -->

---

<div id="_class_stringname_method_length"></div>

[`int`](class_int.md) **length** ( ) const[^const]<div id="class_stringname_method_length"></div>

Returns the number of characters in the string. Empty strings (`""`) always return `0`. See also [`is_empty`](#class_stringname_method_is_empty).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_stringname_method_lpad"></div>

[`String`](class_string.md) **lpad** ( min_length: [`int`](class_int.md), character: [`String`](class_string.md) = " " ) const[^const]<div id="class_stringname_method_lpad"></div>

Formats the string to be at least `min_length` long by adding `character` s to the left of the string, if necessary. See also [`rpad`](#class_stringname_method_rpad).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_stringname_method_lstrip"></div>

[`String`](class_string.md) **lstrip** ( chars: [`String`](class_string.md) ) const[^const]<div id="class_stringname_method_lstrip"></div>

Removes a set of characters defined in `chars` from the string's beginning. See also [`rstrip`](#class_stringname_method_rstrip).

 **Note:** `chars` is not a prefix. Use [`trim_prefix`](#class_stringname_method_trim_prefix) to remove a single prefix, rather than a set of characters.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_stringname_method_match"></div>

[`bool`](class_bool.md) **match** ( expr: [`String`](class_string.md) ) const[^const]<div id="class_stringname_method_match"></div>

Does a simple expression match (also called "glob" or "globbing"), where `*` matches zero or more arbitrary characters and `?` matches any single character except a period (`.`). An empty string or empty expression always evaluates to `false`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_stringname_method_matchn"></div>

[`bool`](class_bool.md) **matchn** ( expr: [`String`](class_string.md) ) const[^const]<div id="class_stringname_method_matchn"></div>

Does a simple **case-insensitive** expression match, where `*` matches zero or more arbitrary characters and `?` matches any single character except a period (`.`). An empty string or empty expression always evaluates to `false`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_stringname_method_md5_buffer"></div>

[`PackedByteArray`](class_packedbytearray.md) **md5_buffer** ( ) const[^const]<div id="class_stringname_method_md5_buffer"></div>

Returns the [*MD5 hash*](https://en.wikipedia.org/wiki/MD5) of the string as a [`PackedByteArray`](class_packedbytearray.md).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_stringname_method_md5_text"></div>

[`String`](class_string.md) **md5_text** ( ) const[^const]<div id="class_stringname_method_md5_text"></div>

Returns the [*MD5 hash*](https://en.wikipedia.org/wiki/MD5) of the string as another [`String`](class_string.md).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_stringname_method_naturalcasecmp_to"></div>

[`int`](class_int.md) **naturalcasecmp_to** ( to: [`String`](class_string.md) ) const[^const]<div id="class_stringname_method_naturalcasecmp_to"></div>

Performs a **case-sensitive**, *natural order* comparison to another string. Returns `-1` if less than, `1` if greater than, or `0` if equal. "Less than" or "greater than" are determined by the [*Unicode code points*](https://en.wikipedia.org/wiki/List_of_Unicode_characters) of each string, which roughly matches the alphabetical order.

When used for sorting, natural order comparison orders sequences of numbers by the combined value of each digit as is often expected, instead of the single digit's value. A sorted sequence of numbered strings will be `["1", "2", "3", ...]`, not `["1", "10", "2", "3", ...]`.

With different string lengths, returns `1` if this string is longer than the `to` string, or `-1` if shorter. Note that the length of empty strings is *always* `0`.

To get a [`bool`](class_bool.md) result from a string comparison, use the `==` operator instead. See also [`naturalnocasecmp_to`](#class_stringname_method_naturalnocasecmp_to), [`filecasecmp_to`](#class_stringname_method_filecasecmp_to), and [`nocasecmp_to`](#class_stringname_method_nocasecmp_to).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_stringname_method_naturalnocasecmp_to"></div>

[`int`](class_int.md) **naturalnocasecmp_to** ( to: [`String`](class_string.md) ) const[^const]<div id="class_stringname_method_naturalnocasecmp_to"></div>

Performs a **case-insensitive**, *natural order* comparison to another string. Returns `-1` if less than, `1` if greater than, or `0` if equal. "Less than" or "greater than" are determined by the [*Unicode code points*](https://en.wikipedia.org/wiki/List_of_Unicode_characters) of each string, which roughly matches the alphabetical order. Internally, lowercase characters are converted to uppercase for the comparison.

When used for sorting, natural order comparison orders sequences of numbers by the combined value of each digit as is often expected, instead of the single digit's value. A sorted sequence of numbered strings will be `["1", "2", "3", ...]`, not `["1", "10", "2", "3", ...]`.

With different string lengths, returns `1` if this string is longer than the `to` string, or `-1` if shorter. Note that the length of empty strings is *always* `0`.

To get a [`bool`](class_bool.md) result from a string comparison, use the `==` operator instead. See also [`naturalcasecmp_to`](#class_stringname_method_naturalcasecmp_to), [`filenocasecmp_to`](#class_stringname_method_filenocasecmp_to), and [`casecmp_to`](#class_stringname_method_casecmp_to).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_stringname_method_nocasecmp_to"></div>

[`int`](class_int.md) **nocasecmp_to** ( to: [`String`](class_string.md) ) const[^const]<div id="class_stringname_method_nocasecmp_to"></div>

Performs a **case-insensitive** comparison to another string. Returns `-1` if less than, `1` if greater than, or `0` if equal. "Less than" or "greater than" are determined by the [*Unicode code points*](https://en.wikipedia.org/wiki/List_of_Unicode_characters) of each string, which roughly matches the alphabetical order. Internally, lowercase characters are converted to uppercase for the comparison.

With different string lengths, returns `1` if this string is longer than the `to` string, or `-1` if shorter. Note that the length of empty strings is *always* `0`.

To get a [`bool`](class_bool.md) result from a string comparison, use the `==` operator instead. See also [`casecmp_to`](#class_stringname_method_casecmp_to), [`filenocasecmp_to`](#class_stringname_method_filenocasecmp_to), and [`naturalnocasecmp_to`](#class_stringname_method_naturalnocasecmp_to).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_stringname_method_pad_decimals"></div>

[`String`](class_string.md) **pad_decimals** ( digits: [`int`](class_int.md) ) const[^const]<div id="class_stringname_method_pad_decimals"></div>

Formats the string representing a number to have an exact number of `digits` *after* the decimal point.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_stringname_method_pad_zeros"></div>

[`String`](class_string.md) **pad_zeros** ( digits: [`int`](class_int.md) ) const[^const]<div id="class_stringname_method_pad_zeros"></div>

Formats the string representing a number to have an exact number of `digits` *before* the decimal point.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_stringname_method_path_join"></div>

[`String`](class_string.md) **path_join** ( file: [`String`](class_string.md) ) const[^const]<div id="class_stringname_method_path_join"></div>

Concatenates `file` at the end of the string as a subpath, adding `/` if necessary.

 **Example:** `"this/is".path_join("path") == "this/is/path"`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_stringname_method_repeat"></div>

[`String`](class_string.md) **repeat** ( count: [`int`](class_int.md) ) const[^const]<div id="class_stringname_method_repeat"></div>

Repeats this string a number of times. `count` needs to be greater than `0`. Otherwise, returns an empty string.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_stringname_method_replace"></div>

[`String`](class_string.md) **replace** ( what: [`String`](class_string.md), forwhat: [`String`](class_string.md) ) const[^const]<div id="class_stringname_method_replace"></div>

Replaces all occurrences of `what` inside the string with the given `forwhat`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_stringname_method_replacen"></div>

[`String`](class_string.md) **replacen** ( what: [`String`](class_string.md), forwhat: [`String`](class_string.md) ) const[^const]<div id="class_stringname_method_replacen"></div>

Replaces all **case-insensitive** occurrences of `what` inside the string with the given `forwhat`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_stringname_method_reverse"></div>

[`String`](class_string.md) **reverse** ( ) const[^const]<div id="class_stringname_method_reverse"></div>

Returns the copy of this string in reverse order. This operation works on unicode codepoints, rather than sequences of codepoints, and may break things like compound letters or emojis.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_stringname_method_rfind"></div>

[`int`](class_int.md) **rfind** ( what: [`String`](class_string.md), from: [`int`](class_int.md) = -1 ) const[^const]<div id="class_stringname_method_rfind"></div>

Returns the index of the **last** occurrence of `what` in this string, or `-1` if there are none. The search's start can be specified with `from`, continuing to the beginning of the string. This method is the reverse of [`find`](#class_stringname_method_find).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_stringname_method_rfindn"></div>

[`int`](class_int.md) **rfindn** ( what: [`String`](class_string.md), from: [`int`](class_int.md) = -1 ) const[^const]<div id="class_stringname_method_rfindn"></div>

Returns the index of the **last** **case-insensitive** occurrence of `what` in this string, or `-1` if there are none. The starting search index can be specified with `from`, continuing to the beginning of the string. This method is the reverse of [`findn`](#class_stringname_method_findn).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_stringname_method_right"></div>

[`String`](class_string.md) **right** ( length: [`int`](class_int.md) ) const[^const]<div id="class_stringname_method_right"></div>

Returns the last `length` characters from the end of the string. If `length` is negative, strips the first `length` characters from the string's beginning.

```

    print("Hello World!".right(3))  # Prints "ld!"
    print("Hello World!".right(-4)) # Prints "o World!"
```



<!-- rst-class:: classref-item-separator -->

---

<div id="_class_stringname_method_rpad"></div>

[`String`](class_string.md) **rpad** ( min_length: [`int`](class_int.md), character: [`String`](class_string.md) = " " ) const[^const]<div id="class_stringname_method_rpad"></div>

Formats the string to be at least `min_length` long, by adding `character` s to the right of the string, if necessary. See also [`lpad`](#class_stringname_method_lpad).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_stringname_method_rsplit"></div>

[`PackedStringArray`](class_packedstringarray.md) **rsplit** ( delimiter: [`String`](class_string.md) = "", allow_empty: [`bool`](class_bool.md) = true, maxsplit: [`int`](class_int.md) = 0 ) const[^const]<div id="class_stringname_method_rsplit"></div>

Splits the string using a `delimiter` and returns an array of the substrings, starting from the end of the string. The splits in the returned array appear in the same order as the original string. If `delimiter` is an empty string, each substring will be a single character.

If `allow_empty` is `false`, empty strings between adjacent delimiters are excluded from the array.

If `maxsplit` is greater than `0`, the number of splits may not exceed `maxsplit`. By default, the entire string is split, which is mostly identical to [`split`](#class_stringname_method_split).

 **Example:** 



```gdscript

    var some_string = "One,Two,Three,Four"
    var some_array = some_string.rsplit(",", true, 1)
    
    print(some_array.size()) # Prints 2
    print(some_array[0])     # Prints "One,Two,Three"
    print(some_array[1])     # Prints "Four"
```

```csharp

    // In C#, there is no String.RSplit() method.
```







<!-- rst-class:: classref-item-separator -->

---

<div id="_class_stringname_method_rstrip"></div>

[`String`](class_string.md) **rstrip** ( chars: [`String`](class_string.md) ) const[^const]<div id="class_stringname_method_rstrip"></div>

Removes a set of characters defined in `chars` from the string's end. See also [`lstrip`](#class_stringname_method_lstrip).

 **Note:** `chars` is not a suffix. Use [`trim_suffix`](#class_stringname_method_trim_suffix) to remove a single suffix, rather than a set of characters.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_stringname_method_sha1_buffer"></div>

[`PackedByteArray`](class_packedbytearray.md) **sha1_buffer** ( ) const[^const]<div id="class_stringname_method_sha1_buffer"></div>

Returns the [*SHA-1*](https://en.wikipedia.org/wiki/SHA-1) hash of the string as a [`PackedByteArray`](class_packedbytearray.md).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_stringname_method_sha1_text"></div>

[`String`](class_string.md) **sha1_text** ( ) const[^const]<div id="class_stringname_method_sha1_text"></div>

Returns the [*SHA-1*](https://en.wikipedia.org/wiki/SHA-1) hash of the string as another [`String`](class_string.md).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_stringname_method_sha256_buffer"></div>

[`PackedByteArray`](class_packedbytearray.md) **sha256_buffer** ( ) const[^const]<div id="class_stringname_method_sha256_buffer"></div>

Returns the [*SHA-256*](https://en.wikipedia.org/wiki/SHA-2) hash of the string as a [`PackedByteArray`](class_packedbytearray.md).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_stringname_method_sha256_text"></div>

[`String`](class_string.md) **sha256_text** ( ) const[^const]<div id="class_stringname_method_sha256_text"></div>

Returns the [*SHA-256*](https://en.wikipedia.org/wiki/SHA-2) hash of the string as another [`String`](class_string.md).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_stringname_method_similarity"></div>

[`float`](class_float.md) **similarity** ( text: [`String`](class_string.md) ) const[^const]<div id="class_stringname_method_similarity"></div>

Returns the similarity index ([*Sorensen-Dice coefficient*](https://en.wikipedia.org/wiki/S%C3%B8rensen%E2%80%93Dice_coefficient)) of this string compared to another. A result of `1.0` means totally similar, while `0.0` means totally dissimilar.

```

    print("ABC123".similarity("ABC123")) # Prints 1.0
    print("ABC123".similarity("XYZ456")) # Prints 0.0
    print("ABC123".similarity("123ABC")) # Prints 0.8
    print("ABC123".similarity("abc123")) # Prints 0.4
```



<!-- rst-class:: classref-item-separator -->

---

<div id="_class_stringname_method_simplify_path"></div>

[`String`](class_string.md) **simplify_path** ( ) const[^const]<div id="class_stringname_method_simplify_path"></div>

If the string is a valid file path, converts the string into a canonical path. This is the shortest possible path, without `"./"`, and all the unnecessary `".."` and `"/"`.

```

    var simple_path = "./path/to///../file".simplify_path()
    print(simple_path) # Prints "path/file"
```



<!-- rst-class:: classref-item-separator -->

---

<div id="_class_stringname_method_split"></div>

[`PackedStringArray`](class_packedstringarray.md) **split** ( delimiter: [`String`](class_string.md) = "", allow_empty: [`bool`](class_bool.md) = true, maxsplit: [`int`](class_int.md) = 0 ) const[^const]<div id="class_stringname_method_split"></div>

Splits the string using a `delimiter` and returns an array of the substrings. If `delimiter` is an empty string, each substring will be a single character. This method is the opposite of [`join`](#class_stringname_method_join).

If `allow_empty` is `false`, empty strings between adjacent delimiters are excluded from the array.

If `maxsplit` is greater than `0`, the number of splits may not exceed `maxsplit`. By default, the entire string is split.

 **Example:** 



```gdscript

    var some_array = "One,Two,Three,Four".split(",", true, 2)
    
    print(some_array.size()) # Prints 3
    print(some_array[0])     # Prints "One"
    print(some_array[1])     # Prints "Two"
    print(some_array[2])     # Prints "Three,Four"
```

```csharp

    // C#'s `Split()` does not support the `maxsplit` parameter.
    var someArray = "One,Two,Three".Split(",");
    
    GD.Print(someArray[0]); // Prints "One"
    GD.Print(someArray[1]); // Prints "Two"
    GD.Print(someArray[2]); // Prints "Three"
```



 **Note:** If you only need one substring from the array, consider using [`get_slice`](#class_stringname_method_get_slice) which is faster. If you need to split strings with more complex rules, use the [`RegEx`](class_regex.md) class instead.





<!-- rst-class:: classref-item-separator -->

---

<div id="_class_stringname_method_split_floats"></div>

[`PackedFloat64Array`](class_packedfloat64array.md) **split_floats** ( delimiter: [`String`](class_string.md), allow_empty: [`bool`](class_bool.md) = true ) const[^const]<div id="class_stringname_method_split_floats"></div>

Splits the string into floats by using a `delimiter` and returns a [`PackedFloat64Array`](class_packedfloat64array.md).

If `allow_empty` is `false`, empty or invalid [`float`](class_float.md) conversions between adjacent delimiters are excluded.

```

    var a = "1,2,4.5".split_floats(",")         # a is [1.0, 2.0, 4.5]
    var c = "1| ||4.5".split_floats("|")        # c is [1.0, 0.0, 0.0, 4.5]
    var b = "1| ||4.5".split_floats("|", false) # b is [1.0, 4.5]
```



<!-- rst-class:: classref-item-separator -->

---

<div id="_class_stringname_method_strip_edges"></div>

[`String`](class_string.md) **strip_edges** ( left: [`bool`](class_bool.md) = true, right: [`bool`](class_bool.md) = true ) const[^const]<div id="class_stringname_method_strip_edges"></div>

Strips all non-printable characters from the beginning and the end of the string. These include spaces, tabulations (`\t`), and newlines (`\n` `\r`).

If `left` is `false`, ignores the string's beginning. Likewise, if `right` is `false`, ignores the string's end.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_stringname_method_strip_escapes"></div>

[`String`](class_string.md) **strip_escapes** ( ) const[^const]<div id="class_stringname_method_strip_escapes"></div>

Strips all escape characters from the string. These include all non-printable control characters of the first page of the ASCII table (values from 0 to 31), such as tabulation (`\t`) and newline (`\n`, `\r`) characters, but *not* spaces.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_stringname_method_substr"></div>

[`String`](class_string.md) **substr** ( from: [`int`](class_int.md), len: [`int`](class_int.md) = -1 ) const[^const]<div id="class_stringname_method_substr"></div>

Returns part of the string from the position `from` with length `len`. If `len` is `-1` (as by default), returns the rest of the string starting from the given position.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_stringname_method_to_ascii_buffer"></div>

[`PackedByteArray`](class_packedbytearray.md) **to_ascii_buffer** ( ) const[^const]<div id="class_stringname_method_to_ascii_buffer"></div>

Converts the string to an [*ASCII*](https://en.wikipedia.org/wiki/ASCII)/Latin-1 encoded [`PackedByteArray`](class_packedbytearray.md). This method is slightly faster than [`to_utf8_buffer`](#class_stringname_method_to_utf8_buffer), but replaces all unsupported characters with spaces.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_stringname_method_to_camel_case"></div>

[`String`](class_string.md) **to_camel_case** ( ) const[^const]<div id="class_stringname_method_to_camel_case"></div>

Returns the string converted to `camelCase`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_stringname_method_to_float"></div>

[`float`](class_float.md) **to_float** ( ) const[^const]<div id="class_stringname_method_to_float"></div>

Converts the string representing a decimal number into a [`float`](class_float.md). This method stops on the first non-number character, except the first decimal point (`.`) and the exponent letter (`e`). See also [`is_valid_float`](#class_stringname_method_is_valid_float).

```

    var a = "12.35".to_float() # a is 12.35
    var b = "1.2.3".to_float() # b is 1.2
    var c = "12xy3".to_float() # c is 12.0
    var d = "1e3".to_float()   # d is 1000.0
    var e = "Hello!".to_int()  # e is 0.0
```



<!-- rst-class:: classref-item-separator -->

---

<div id="_class_stringname_method_to_int"></div>

[`int`](class_int.md) **to_int** ( ) const[^const]<div id="class_stringname_method_to_int"></div>

Converts the string representing an integer number into an [`int`](class_int.md). This method removes any non-number character and stops at the first decimal point (`.`). See also [`is_valid_int`](#class_stringname_method_is_valid_int).

```

    var a = "123".to_int()    # a is 123
    var b = "x1y2z3".to_int() # b is 123
    var c = "-1.2.3".to_int() # c is -1
    var d = "Hello!".to_int() # d is 0
```



<!-- rst-class:: classref-item-separator -->

---

<div id="_class_stringname_method_to_lower"></div>

[`String`](class_string.md) **to_lower** ( ) const[^const]<div id="class_stringname_method_to_lower"></div>

Returns the string converted to `lowercase`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_stringname_method_to_pascal_case"></div>

[`String`](class_string.md) **to_pascal_case** ( ) const[^const]<div id="class_stringname_method_to_pascal_case"></div>

Returns the string converted to `PascalCase`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_stringname_method_to_snake_case"></div>

[`String`](class_string.md) **to_snake_case** ( ) const[^const]<div id="class_stringname_method_to_snake_case"></div>

Returns the string converted to `snake_case`.

 **Note:** Numbers followed by a *single* letter are not separated in the conversion to keep some words (such as "2D") together.



```gdscript

    "Node2D".to_snake_case()               # Returns "node_2d"
    "2nd place".to_snake_case()            # Returns "2_nd_place"
    "Texture3DAssetFolder".to_snake_case() # Returns "texture_3d_asset_folder"
```

```csharp

    "Node2D".ToSnakeCase();               // Returns "node_2d"
    "2nd place".ToSnakeCase();            // Returns "2_nd_place"
    "Texture3DAssetFolder".ToSnakeCase(); // Returns "texture_3d_asset_folder"
```







<!-- rst-class:: classref-item-separator -->

---

<div id="_class_stringname_method_to_upper"></div>

[`String`](class_string.md) **to_upper** ( ) const[^const]<div id="class_stringname_method_to_upper"></div>

Returns the string converted to `UPPERCASE`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_stringname_method_to_utf8_buffer"></div>

[`PackedByteArray`](class_packedbytearray.md) **to_utf8_buffer** ( ) const[^const]<div id="class_stringname_method_to_utf8_buffer"></div>

Converts the string to a [*UTF-8*](https://en.wikipedia.org/wiki/UTF-8) encoded [`PackedByteArray`](class_packedbytearray.md). This method is slightly slower than [`to_ascii_buffer`](#class_stringname_method_to_ascii_buffer), but supports all UTF-8 characters. For most cases, prefer using this method.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_stringname_method_to_utf16_buffer"></div>

[`PackedByteArray`](class_packedbytearray.md) **to_utf16_buffer** ( ) const[^const]<div id="class_stringname_method_to_utf16_buffer"></div>

Converts the string to a [*UTF-16*](https://en.wikipedia.org/wiki/UTF-16) encoded [`PackedByteArray`](class_packedbytearray.md).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_stringname_method_to_utf32_buffer"></div>

[`PackedByteArray`](class_packedbytearray.md) **to_utf32_buffer** ( ) const[^const]<div id="class_stringname_method_to_utf32_buffer"></div>

Converts the string to a [*UTF-32*](https://en.wikipedia.org/wiki/UTF-32) encoded [`PackedByteArray`](class_packedbytearray.md).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_stringname_method_to_wchar_buffer"></div>

[`PackedByteArray`](class_packedbytearray.md) **to_wchar_buffer** ( ) const[^const]<div id="class_stringname_method_to_wchar_buffer"></div>

Converts the string to a [*wide character*](https://en.wikipedia.org/wiki/Wide_character) (`wchar_t`, UTF-16 on Windows, UTF-32 on other platforms) encoded [`PackedByteArray`](class_packedbytearray.md).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_stringname_method_trim_prefix"></div>

[`String`](class_string.md) **trim_prefix** ( prefix: [`String`](class_string.md) ) const[^const]<div id="class_stringname_method_trim_prefix"></div>

Removes the given `prefix` from the start of the string, or returns the string unchanged.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_stringname_method_trim_suffix"></div>

[`String`](class_string.md) **trim_suffix** ( suffix: [`String`](class_string.md) ) const[^const]<div id="class_stringname_method_trim_suffix"></div>

Removes the given `suffix` from the end of the string, or returns the string unchanged.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_stringname_method_unicode_at"></div>

[`int`](class_int.md) **unicode_at** ( at: [`int`](class_int.md) ) const[^const]<div id="class_stringname_method_unicode_at"></div>

Returns the character code at position `at`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_stringname_method_uri_decode"></div>

[`String`](class_string.md) **uri_decode** ( ) const[^const]<div id="class_stringname_method_uri_decode"></div>

Decodes the string from its URL-encoded format. This method is meant to properly decode the parameters in a URL when receiving an HTTP request.



```gdscript

    var url = "$DOCS_URL/?highlight=Godot%20Engine%3%docs"
    print(url.uri_decode()) # Prints "$DOCS_URL/?highlight=Godot Engine:docs"
```

```csharp

    var url = "$DOCS_URL/?highlight=Godot%20Engine%3%docs"
    GD.Print(url.URIDecode()) // Prints "$DOCS_URL/?highlight=Godot Engine:docs"
```







<!-- rst-class:: classref-item-separator -->

---

<div id="_class_stringname_method_uri_encode"></div>

[`String`](class_string.md) **uri_encode** ( ) const[^const]<div id="class_stringname_method_uri_encode"></div>

Encodes the string to URL-friendly format. This method is meant to properly encode the parameters in a URL when sending an HTTP request.



```gdscript

    var prefix = "$DOCS_URL/?highlight="
    var url = prefix + "Godot Engine:docs".uri_encode()
    
    print(url) # Prints "$DOCS_URL/?highlight=Godot%20Engine%3%docs"
```

```csharp

    var prefix = "$DOCS_URL/?highlight=";
    var url = prefix + "Godot Engine:docs".URIEncode();
    
    GD.Print(url); // Prints "$DOCS_URL/?highlight=Godot%20Engine%3%docs"
```







<!-- rst-class:: classref-item-separator -->

---

<div id="_class_stringname_method_validate_filename"></div>

[`String`](class_string.md) **validate_filename** ( ) const[^const]<div id="class_stringname_method_validate_filename"></div>

Returns a copy of the string with all characters that are not allowed in [`is_valid_filename`](#class_stringname_method_is_valid_filename) replaced with underscores.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_stringname_method_validate_node_name"></div>

[`String`](class_string.md) **validate_node_name** ( ) const[^const]<div id="class_stringname_method_validate_node_name"></div>

Returns a copy of the string with all characters that are not allowed in [`Node.name`](#class_node_property_name) (`.` `:` `@` `/` `"` `%`) replaced with underscores.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_stringname_method_xml_escape"></div>

[`String`](class_string.md) **xml_escape** ( escape_quotes: [`bool`](class_bool.md) = false ) const[^const]<div id="class_stringname_method_xml_escape"></div>

Returns a copy of the string with special characters escaped using the XML standard. If `escape_quotes` is `true`, the single quote (`'`) and double quote (`"`) characters are also escaped.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_stringname_method_xml_unescape"></div>

[`String`](class_string.md) **xml_unescape** ( ) const[^const]<div id="class_stringname_method_xml_unescape"></div>

Returns a copy of the string with escaped characters replaced by their meanings according to the XML standard.

<!-- rst-class:: classref-section-separator -->

---

## 运算符说明

<div id="_class_stringname_operator_neq_string"></div>

[`bool`](class_bool.md) **operator !=** ( right: [`String`](class_string.md) ) <div id="class_stringname_operator_neq_string"></div>

Returns `true` if this **StringName** is not equivalent to the given [`String`](class_string.md).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_stringname_operator_neq_stringname"></div>

[`bool`](class_bool.md) **operator !=** ( right: [`StringName`](class_stringname.md) ) <div id="class_stringname_operator_neq_stringname"></div>

Returns `true` if the **StringName** and `right` do not refer to the same name. Comparisons between **StringName** s are much faster than regular [`String`](class_string.md) comparisons.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_stringname_operator_mod_variant"></div>

[`String`](class_string.md) **operator %** ( right: [`Variant`](class_variant.md) ) <div id="class_stringname_operator_mod_variant"></div>

Formats the **StringName**, replacing the placeholders with one or more parameters, returning a [`String`](class_string.md). To pass multiple parameters, `right` needs to be an [`Array`](class_array.md).

For more information, see the [*GDScript format strings*](../tutorials/scripting/gdscript/gdscript_format_string) tutorial.

 **Note:** In C#, this operator is not available. Instead, see [*how to interpolate strings with "$"*](https://learn.microsoft.com/en-us/dotnet/csharp/language-reference/tokens/interpolated).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_stringname_operator_sum_string"></div>

[`String`](class_string.md) **operator +** ( right: [`String`](class_string.md) ) <div id="class_stringname_operator_sum_string"></div>

Appends `right` at the end of this **StringName**, returning a [`String`](class_string.md). This is also known as a string concatenation.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_stringname_operator_sum_stringname"></div>

[`String`](class_string.md) **operator +** ( right: [`StringName`](class_stringname.md) ) <div id="class_stringname_operator_sum_stringname"></div>

Appends `right` at the end of this **StringName**, returning a [`String`](class_string.md). This is also known as a string concatenation.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_stringname_operator_lt_stringname"></div>

[`bool`](class_bool.md) **operator <** ( right: [`StringName`](class_stringname.md) ) <div id="class_stringname_operator_lt_stringname"></div>

Returns `true` if the left **StringName**'s pointer comes before `right`. Note that this will not match their [*Unicode order*](https://en.wikipedia.org/wiki/List_of_Unicode_characters).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_stringname_operator_lte_stringname"></div>

[`bool`](class_bool.md) **operator <=** ( right: [`StringName`](class_stringname.md) ) <div id="class_stringname_operator_lte_stringname"></div>

Returns `true` if the left **StringName**'s pointer comes before `right` or if they are the same. Note that this will not match their [*Unicode order*](https://en.wikipedia.org/wiki/List_of_Unicode_characters).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_stringname_operator_eq_string"></div>

[`bool`](class_bool.md) **operator ==** ( right: [`String`](class_string.md) ) <div id="class_stringname_operator_eq_string"></div>

Returns `true` if this **StringName** is equivalent to the given [`String`](class_string.md).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_stringname_operator_eq_stringname"></div>

[`bool`](class_bool.md) **operator ==** ( right: [`StringName`](class_stringname.md) ) <div id="class_stringname_operator_eq_stringname"></div>

Returns `true` if the **StringName** and `right` refer to the same name. Comparisons between **StringName** s are much faster than regular [`String`](class_string.md) comparisons.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_stringname_operator_gt_stringname"></div>

[`bool`](class_bool.md) **operator >** ( right: [`StringName`](class_stringname.md) ) <div id="class_stringname_operator_gt_stringname"></div>

Returns `true` if the left **StringName**'s pointer comes after `right`. Note that this will not match their [*Unicode order*](https://en.wikipedia.org/wiki/List_of_Unicode_characters).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_stringname_operator_gte_stringname"></div>

[`bool`](class_bool.md) **operator >=** ( right: [`StringName`](class_stringname.md) ) <div id="class_stringname_operator_gte_stringname"></div>

Returns `true` if the left **StringName**'s pointer comes after `right` or if they are the same. Note that this will not match their [*Unicode order*](https://en.wikipedia.org/wiki/List_of_Unicode_characters).

[^virtual]: 本方法通常需要用户覆盖才能生效。
[^const]: 本方法无副作用，不会修改该实例的任何成员变量。
[^vararg]: 本方法除了能接受在此处描述的参数外，还能够继续接受任意数量的参数。
[^constructor]: 本方法用于构造某个类型。
[^static]: 调用本方法无需实例，可直接使用类名进行调用。
[^operator]: 本方法描述的是使用本类型作为左操作数的有效运算符。
[^bitfield]: 这个值是由下列位标志构成位掩码的整数。
[^void]: 无返回值。
