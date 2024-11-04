<!-- ⚠ 请勿编辑本文件 ⚠ -->
<!-- 本文档使用脚本从 WeDot 引擎源码仓库生成。 -->
<!-- 生成脚本：https://github.com/WeDot-Engine/WeDot/tree/4.3/doc/tools/make_md.py； -->
<!-- 原文件：https://github.com/WeDot-Engine/WeDot/tree/4.3/doc/classes/Translation.xml。 -->

<div id="_class_translation"></div>

# Translation

**继承：** [`Resource`](class_resource.md) **<** [`RefCounted`](class_refcounted.md) **<** [`Object`](class_object.md)

**派生：** [`OptimizedTranslation`](class_optimizedtranslation.md)

A language translation that maps a collection of strings to their individual translations.

## 描述

**Translation** s are resources that can be loaded and unloaded on demand. They map a collection of strings to their individual translations, and they also provide convenience methods for pluralization.

## 属性

| [`String`](class_string.md) | [`locale`](#class_translation_property_locale) | ``"en"`` |

## 方法

| [`StringName`](class_stringname.md)               | [`_get_message`](#class_translation_private_method__get_message) ( src_message: [`StringName`](class_stringname.md), context: [`StringName`](class_stringname.md) ) virtual[^virtual] const[^const]                                                                                                  |
| [`StringName`](class_stringname.md)               | [`_get_plural_message`](#class_translation_private_method__get_plural_message) ( src_message: [`StringName`](class_stringname.md), src_plural_message: [`StringName`](class_stringname.md), n: [`int`](class_int.md), context: [`StringName`](class_stringname.md) ) virtual[^virtual] const[^const] |
| `void`                                            | [`add_message`](#class_translation_method_add_message) ( src_message: [`StringName`](class_stringname.md), xlated_message: [`StringName`](class_stringname.md), context: [`StringName`](class_stringname.md) = &"" )                                                                                 |
| `void`                                            | [`add_plural_message`](#class_translation_method_add_plural_message) ( src_message: [`StringName`](class_stringname.md), xlated_messages: [`PackedStringArray`](class_packedstringarray.md), context: [`StringName`](class_stringname.md) = &"" )                                                    |
| `void`                                            | [`erase_message`](#class_translation_method_erase_message) ( src_message: [`StringName`](class_stringname.md), context: [`StringName`](class_stringname.md) = &"" )                                                                                                                                  |
| [`StringName`](class_stringname.md)               | [`get_message`](#class_translation_method_get_message) ( src_message: [`StringName`](class_stringname.md), context: [`StringName`](class_stringname.md) = &"" ) const[^const]                                                                                                                        |
| [`int`](class_int.md)                             | [`get_message_count`](#class_translation_method_get_message_count) ( ) const[^const]                                                                                                                                                                                                                 |
| [`PackedStringArray`](class_packedstringarray.md) | [`get_message_list`](#class_translation_method_get_message_list) ( ) const[^const]                                                                                                                                                                                                                   |
| [`StringName`](class_stringname.md)               | [`get_plural_message`](#class_translation_method_get_plural_message) ( src_message: [`StringName`](class_stringname.md), src_plural_message: [`StringName`](class_stringname.md), n: [`int`](class_int.md), context: [`StringName`](class_stringname.md) = &"" ) const[^const]                       |
| [`PackedStringArray`](class_packedstringarray.md) | [`get_translated_message_list`](#class_translation_method_get_translated_message_list) ( ) const[^const]                                                                                                                                                                                             |

<!-- rst-class:: classref-section-separator -->

---

## 属性说明

<div id="_class_translation_property_locale"></div>

[`String`](class_string.md) **locale** = ``"en"`` <div id="class_translation_property_locale"></div>

- `void` **set_locale** ( value: [`String`](class_string.md) )
- [`String`](class_string.md) **get_locale** ( )

The locale of the translation.

<!-- rst-class:: classref-section-separator -->

---

## 方法说明

<div id="_class_translation_private_method__get_message"></div>

[`StringName`](class_stringname.md) **_get_message** ( src_message: [`StringName`](class_stringname.md), context: [`StringName`](class_stringname.md) ) virtual[^virtual] const[^const]<div id="class_translation_private_method__get_message"></div>

Virtual method to override [`get_message`](#class_translation_method_get_message).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_translation_private_method__get_plural_message"></div>

[`StringName`](class_stringname.md) **_get_plural_message** ( src_message: [`StringName`](class_stringname.md), src_plural_message: [`StringName`](class_stringname.md), n: [`int`](class_int.md), context: [`StringName`](class_stringname.md) ) virtual[^virtual] const[^const]<div id="class_translation_private_method__get_plural_message"></div>

Virtual method to override [`get_plural_message`](#class_translation_method_get_plural_message).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_translation_method_add_message"></div>

`void` **add_message** ( src_message: [`StringName`](class_stringname.md), xlated_message: [`StringName`](class_stringname.md), context: [`StringName`](class_stringname.md) = &"" )<div id="class_translation_method_add_message"></div>

Adds a message if nonexistent, followed by its translation.

An additional context could be used to specify the translation context or differentiate polysemic words.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_translation_method_add_plural_message"></div>

`void` **add_plural_message** ( src_message: [`StringName`](class_stringname.md), xlated_messages: [`PackedStringArray`](class_packedstringarray.md), context: [`StringName`](class_stringname.md) = &"" )<div id="class_translation_method_add_plural_message"></div>

Adds a message involving plural translation if nonexistent, followed by its translation.

An additional context could be used to specify the translation context or differentiate polysemic words.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_translation_method_erase_message"></div>

`void` **erase_message** ( src_message: [`StringName`](class_stringname.md), context: [`StringName`](class_stringname.md) = &"" )<div id="class_translation_method_erase_message"></div>

Erases a message.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_translation_method_get_message"></div>

[`StringName`](class_stringname.md) **get_message** ( src_message: [`StringName`](class_stringname.md), context: [`StringName`](class_stringname.md) = &"" ) const[^const]<div id="class_translation_method_get_message"></div>

Returns a message's translation.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_translation_method_get_message_count"></div>

[`int`](class_int.md) **get_message_count** ( ) const[^const]<div id="class_translation_method_get_message_count"></div>

Returns the number of existing messages.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_translation_method_get_message_list"></div>

[`PackedStringArray`](class_packedstringarray.md) **get_message_list** ( ) const[^const]<div id="class_translation_method_get_message_list"></div>

Returns all the messages (keys).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_translation_method_get_plural_message"></div>

[`StringName`](class_stringname.md) **get_plural_message** ( src_message: [`StringName`](class_stringname.md), src_plural_message: [`StringName`](class_stringname.md), n: [`int`](class_int.md), context: [`StringName`](class_stringname.md) = &"" ) const[^const]<div id="class_translation_method_get_plural_message"></div>

Returns a message's translation involving plurals.

The number `n` is the number or quantity of the plural object. It will be used to guide the translation system to fetch the correct plural form for the selected language.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_translation_method_get_translated_message_list"></div>

[`PackedStringArray`](class_packedstringarray.md) **get_translated_message_list** ( ) const[^const]<div id="class_translation_method_get_translated_message_list"></div>

Returns all the messages (translated text).

[^virtual]: 本方法通常需要用户覆盖才能生效。
[^const]: 本方法无副作用，不会修改该实例的任何成员变量。
[^vararg]: 本方法除了能接受在此处描述的参数外，还能够继续接受任意数量的参数。
[^constructor]: 本方法用于构造某个类型。
[^static]: 调用本方法无需实例，可直接使用类名进行调用。
[^operator]: 本方法描述的是使用本类型作为左操作数的有效运算符。
[^bitfield]: 这个值是由下列位标志构成位掩码的整数。
[^void]: 无返回值。
