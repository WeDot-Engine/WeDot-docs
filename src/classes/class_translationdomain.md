<!-- ⚠ 请勿编辑本文件 ⚠ -->
<!-- 本文档使用脚本从 WeDot 引擎源码仓库生成。 -->
<!-- 生成脚本：https://github.com/WeDot-Engine/WeDot/tree/master/doc/tools/make_md.py； -->
<!-- 原文件：https://github.com/WeDot-Engine/WeDot/tree/master/doc/classes/TranslationDomain.xml。 -->

<div id="_class_translationdomain"></div>

# TranslationDomain

**继承：** [`RefCounted`](class_refcounted.md) **<** [`Object`](class_object.md)

A self-contained collection of [`Translation`](class_translation.md) resources.

## 描述

**TranslationDomain** is a self-contained collection of [`Translation`](class_translation.md) resources. Translations can be added to or removed from it.

If you're working with the main translation domain, it is more convenient to use the wrap methods on [`TranslationServer`](class_translationserver.md).

## 属性

|||
|:-:|:--|
| [`bool`](class_bool.md)     | [`pseudolocalization_accents_enabled`](class_translationdomain.md#class_translationdomain_property_pseudolocalization_accents_enabled)                     | ``true``  |
| [`bool`](class_bool.md)     | [`pseudolocalization_double_vowels_enabled`](class_translationdomain.md#class_translationdomain_property_pseudolocalization_double_vowels_enabled)         | ``false`` |
| [`bool`](class_bool.md)     | [`pseudolocalization_enabled`](class_translationdomain.md#class_translationdomain_property_pseudolocalization_enabled)                                     | ``false`` |
| [`float`](class_float.md)   | [`pseudolocalization_expansion_ratio`](class_translationdomain.md#class_translationdomain_property_pseudolocalization_expansion_ratio)                     | ``0.0``   |
| [`bool`](class_bool.md)     | [`pseudolocalization_fake_bidi_enabled`](class_translationdomain.md#class_translationdomain_property_pseudolocalization_fake_bidi_enabled)                 | ``false`` |
| [`bool`](class_bool.md)     | [`pseudolocalization_override_enabled`](class_translationdomain.md#class_translationdomain_property_pseudolocalization_override_enabled)                   | ``false`` |
| [`String`](class_string.md) | [`pseudolocalization_prefix`](class_translationdomain.md#class_translationdomain_property_pseudolocalization_prefix)                                       | ``"["``   |
| [`bool`](class_bool.md)     | [`pseudolocalization_skip_placeholders_enabled`](class_translationdomain.md#class_translationdomain_property_pseudolocalization_skip_placeholders_enabled) | ``true``  |
| [`String`](class_string.md) | [`pseudolocalization_suffix`](class_translationdomain.md#class_translationdomain_property_pseudolocalization_suffix)                                       | ``"]"``   |

## 方法

|||
|:-:|:--|
| `void`                                | [`add_translation`](class_translationdomain.md#class_translationdomain_method_add_translation) ( translation: [`Translation`](class_translation.md) )                                                                                                                                              |
| `void`                                | [`clear`](class_translationdomain.md#class_translationdomain_method_clear) ( )                                                                                                                                                                                                                     |
| [`Translation`](class_translation.md) | [`get_translation_object`](class_translationdomain.md#class_translationdomain_method_get_translation_object) ( locale: [`String`](class_string.md) ) const[^const]                                                                                                                                 |
| [`StringName`](class_stringname.md)   | [`pseudolocalize`](class_translationdomain.md#class_translationdomain_method_pseudolocalize) ( message: [`StringName`](class_stringname.md) ) const[^const]                                                                                                                                        |
| `void`                                | [`remove_translation`](class_translationdomain.md#class_translationdomain_method_remove_translation) ( translation: [`Translation`](class_translation.md) )                                                                                                                                        |
| [`StringName`](class_stringname.md)   | [`translate`](class_translationdomain.md#class_translationdomain_method_translate) ( message: [`StringName`](class_stringname.md), context: [`StringName`](class_stringname.md) = &"" ) const[^const]                                                                                              |
| [`StringName`](class_stringname.md)   | [`translate_plural`](class_translationdomain.md#class_translationdomain_method_translate_plural) ( message: [`StringName`](class_stringname.md), message_plural: [`StringName`](class_stringname.md), n: [`int`](class_int.md), context: [`StringName`](class_stringname.md) = &"" ) const[^const] |

<!-- rst-class:: classref-section-separator -->

---

## 属性说明

<div id="_class_translationdomain_property_pseudolocalization_accents_enabled"></div>

[`bool`](class_bool.md) **pseudolocalization_accents_enabled** = ``true`` <div id="class_translationdomain_property_pseudolocalization_accents_enabled"></div>

- `void` **set_pseudolocalization_accents_enabled** ( value: [`bool`](class_bool.md) )
- [`bool`](class_bool.md) **is_pseudolocalization_accents_enabled** ( )

Replace all characters with their accented variants during pseudolocalization.

 **Note:** Updating this property does not automatically update texts in the scene tree. Please propagate the [`MainLoop.NOTIFICATION_TRANSLATION_CHANGED`](class_mainloop.md#class_mainloop_constant_notification_translation_changed) notification manually after you have finished modifying pseudolocalization related options.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_translationdomain_property_pseudolocalization_double_vowels_enabled"></div>

[`bool`](class_bool.md) **pseudolocalization_double_vowels_enabled** = ``false`` <div id="class_translationdomain_property_pseudolocalization_double_vowels_enabled"></div>

- `void` **set_pseudolocalization_double_vowels_enabled** ( value: [`bool`](class_bool.md) )
- [`bool`](class_bool.md) **is_pseudolocalization_double_vowels_enabled** ( )

Double vowels in strings during pseudolocalization to simulate the lengthening of text due to localization.

 **Note:** Updating this property does not automatically update texts in the scene tree. Please propagate the [`MainLoop.NOTIFICATION_TRANSLATION_CHANGED`](class_mainloop.md#class_mainloop_constant_notification_translation_changed) notification manually after you have finished modifying pseudolocalization related options.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_translationdomain_property_pseudolocalization_enabled"></div>

[`bool`](class_bool.md) **pseudolocalization_enabled** = ``false`` <div id="class_translationdomain_property_pseudolocalization_enabled"></div>

- `void` **set_pseudolocalization_enabled** ( value: [`bool`](class_bool.md) )
- [`bool`](class_bool.md) **is_pseudolocalization_enabled** ( )

If `true`, enables pseudolocalization for the project. This can be used to spot untranslatable strings or layout issues that may occur once the project is localized to languages that have longer strings than the source language.

 **Note:** Updating this property does not automatically update texts in the scene tree. Please propagate the [`MainLoop.NOTIFICATION_TRANSLATION_CHANGED`](class_mainloop.md#class_mainloop_constant_notification_translation_changed) notification manually after you have finished modifying pseudolocalization related options.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_translationdomain_property_pseudolocalization_expansion_ratio"></div>

[`float`](class_float.md) **pseudolocalization_expansion_ratio** = ``0.0`` <div id="class_translationdomain_property_pseudolocalization_expansion_ratio"></div>

- `void` **set_pseudolocalization_expansion_ratio** ( value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_pseudolocalization_expansion_ratio** ( )

The expansion ratio to use during pseudolocalization. A value of `0.3` is sufficient for most practical purposes, and will increase the length of each string by 30%.

 **Note:** Updating this property does not automatically update texts in the scene tree. Please propagate the [`MainLoop.NOTIFICATION_TRANSLATION_CHANGED`](class_mainloop.md#class_mainloop_constant_notification_translation_changed) notification manually after you have finished modifying pseudolocalization related options.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_translationdomain_property_pseudolocalization_fake_bidi_enabled"></div>

[`bool`](class_bool.md) **pseudolocalization_fake_bidi_enabled** = ``false`` <div id="class_translationdomain_property_pseudolocalization_fake_bidi_enabled"></div>

- `void` **set_pseudolocalization_fake_bidi_enabled** ( value: [`bool`](class_bool.md) )
- [`bool`](class_bool.md) **is_pseudolocalization_fake_bidi_enabled** ( )

If `true`, emulate bidirectional (right-to-left) text when pseudolocalization is enabled. This can be used to spot issues with RTL layout and UI mirroring that will crop up if the project is localized to RTL languages such as Arabic or Hebrew.

 **Note:** Updating this property does not automatically update texts in the scene tree. Please propagate the [`MainLoop.NOTIFICATION_TRANSLATION_CHANGED`](class_mainloop.md#class_mainloop_constant_notification_translation_changed) notification manually after you have finished modifying pseudolocalization related options.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_translationdomain_property_pseudolocalization_override_enabled"></div>

[`bool`](class_bool.md) **pseudolocalization_override_enabled** = ``false`` <div id="class_translationdomain_property_pseudolocalization_override_enabled"></div>

- `void` **set_pseudolocalization_override_enabled** ( value: [`bool`](class_bool.md) )
- [`bool`](class_bool.md) **is_pseudolocalization_override_enabled** ( )

Replace all characters in the string with `*`. Useful for finding non-localizable strings.

 **Note:** Updating this property does not automatically update texts in the scene tree. Please propagate the [`MainLoop.NOTIFICATION_TRANSLATION_CHANGED`](class_mainloop.md#class_mainloop_constant_notification_translation_changed) notification manually after you have finished modifying pseudolocalization related options.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_translationdomain_property_pseudolocalization_prefix"></div>

[`String`](class_string.md) **pseudolocalization_prefix** = ``"["`` <div id="class_translationdomain_property_pseudolocalization_prefix"></div>

- `void` **set_pseudolocalization_prefix** ( value: [`String`](class_string.md) )
- [`String`](class_string.md) **get_pseudolocalization_prefix** ( )

Prefix that will be prepended to the pseudolocalized string.

 **Note:** Updating this property does not automatically update texts in the scene tree. Please propagate the [`MainLoop.NOTIFICATION_TRANSLATION_CHANGED`](class_mainloop.md#class_mainloop_constant_notification_translation_changed) notification manually after you have finished modifying pseudolocalization related options.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_translationdomain_property_pseudolocalization_skip_placeholders_enabled"></div>

[`bool`](class_bool.md) **pseudolocalization_skip_placeholders_enabled** = ``true`` <div id="class_translationdomain_property_pseudolocalization_skip_placeholders_enabled"></div>

- `void` **set_pseudolocalization_skip_placeholders_enabled** ( value: [`bool`](class_bool.md) )
- [`bool`](class_bool.md) **is_pseudolocalization_skip_placeholders_enabled** ( )

Skip placeholders for string formatting like `%s` or `%f` during pseudolocalization. Useful to identify strings which need additional control characters to display correctly.

 **Note:** Updating this property does not automatically update texts in the scene tree. Please propagate the [`MainLoop.NOTIFICATION_TRANSLATION_CHANGED`](class_mainloop.md#class_mainloop_constant_notification_translation_changed) notification manually after you have finished modifying pseudolocalization related options.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_translationdomain_property_pseudolocalization_suffix"></div>

[`String`](class_string.md) **pseudolocalization_suffix** = ``"]"`` <div id="class_translationdomain_property_pseudolocalization_suffix"></div>

- `void` **set_pseudolocalization_suffix** ( value: [`String`](class_string.md) )
- [`String`](class_string.md) **get_pseudolocalization_suffix** ( )

Suffix that will be appended to the pseudolocalized string.

 **Note:** Updating this property does not automatically update texts in the scene tree. Please propagate the [`MainLoop.NOTIFICATION_TRANSLATION_CHANGED`](class_mainloop.md#class_mainloop_constant_notification_translation_changed) notification manually after you have finished modifying pseudolocalization related options.

<!-- rst-class:: classref-section-separator -->

---

## 方法说明

<div id="_class_translationdomain_method_add_translation"></div>

`void` **add_translation** ( translation: [`Translation`](class_translation.md) )<div id="class_translationdomain_method_add_translation"></div>

Adds a translation.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_translationdomain_method_clear"></div>

`void` **clear** ( )<div id="class_translationdomain_method_clear"></div>

Removes all translations.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_translationdomain_method_get_translation_object"></div>

[`Translation`](class_translation.md) **get_translation_object** ( locale: [`String`](class_string.md) ) const[^const]<div id="class_translationdomain_method_get_translation_object"></div>

Returns the [`Translation`](class_translation.md) instance that best matches `locale`. Returns `null` if there are no matches.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_translationdomain_method_pseudolocalize"></div>

[`StringName`](class_stringname.md) **pseudolocalize** ( message: [`StringName`](class_stringname.md) ) const[^const]<div id="class_translationdomain_method_pseudolocalize"></div>

Returns the pseudolocalized string based on the `message` passed in.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_translationdomain_method_remove_translation"></div>

`void` **remove_translation** ( translation: [`Translation`](class_translation.md) )<div id="class_translationdomain_method_remove_translation"></div>

Removes the given translation.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_translationdomain_method_translate"></div>

[`StringName`](class_stringname.md) **translate** ( message: [`StringName`](class_stringname.md), context: [`StringName`](class_stringname.md) = &"" ) const[^const]<div id="class_translationdomain_method_translate"></div>

Returns the current locale's translation for the given message and context.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_translationdomain_method_translate_plural"></div>

[`StringName`](class_stringname.md) **translate_plural** ( message: [`StringName`](class_stringname.md), message_plural: [`StringName`](class_stringname.md), n: [`int`](class_int.md), context: [`StringName`](class_stringname.md) = &"" ) const[^const]<div id="class_translationdomain_method_translate_plural"></div>

Returns the current locale's translation for the given message, plural message and context.

The number `n` is the number or quantity of the plural object. It will be used to guide the translation system to fetch the correct plural form for the selected language.

[^virtual]: 本方法通常需要用户覆盖才能生效。
[^const]: 本方法无副作用，不会修改该实例的任何成员变量。
[^vararg]: 本方法除了能接受在此处描述的参数外，还能够继续接受任意数量的参数。
[^constructor]: 本方法用于构造某个类型。
[^static]: 调用本方法无需实例，可直接使用类名进行调用。
[^operator]: 本方法描述的是使用本类型作为左操作数的有效运算符。
[^bitfield]: 这个值是由下列位标志构成位掩码的整数。
[^void]: 无返回值。
