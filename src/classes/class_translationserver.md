<!-- ⚠ 请勿编辑本文件 ⚠ -->
<!-- 本文档使用脚本从 WeDot 引擎源码仓库生成。 -->
<!-- 生成脚本：https://github.com/WeDot-Engine/WeDot/tree/4.3/doc/tools/make_md.py； -->
<!-- 原文件：https://github.com/WeDot-Engine/WeDot/tree/4.3/doc/classes/TranslationServer.xml。 -->

<div id="_class_translationserver"></div>

# TranslationServer

**继承：** [`Object`](class_object.md)

The server responsible for language translations.

## 描述

The server that manages all language translations. Translations can be added to or removed from it.

## 属性

| [`bool`](class_bool.md) | [`pseudolocalization_enabled`](#class_translationserver_property_pseudolocalization_enabled) | ``false`` |

## 方法

| `void`                                            | [`add_translation`](#class_translationserver_method_add_translation) ( translation: [`Translation`](class_translation.md) )                                                                                                                                              |
| `void`                                            | [`clear`](#class_translationserver_method_clear) ( )                                                                                                                                                                                                                     |
| [`int`](class_int.md)                             | [`compare_locales`](#class_translationserver_method_compare_locales) ( locale_a: [`String`](class_string.md), locale_b: [`String`](class_string.md) ) const[^const]                                                                                                      |
| [`PackedStringArray`](class_packedstringarray.md) | [`get_all_countries`](#class_translationserver_method_get_all_countries) ( ) const[^const]                                                                                                                                                                               |
| [`PackedStringArray`](class_packedstringarray.md) | [`get_all_languages`](#class_translationserver_method_get_all_languages) ( ) const[^const]                                                                                                                                                                               |
| [`PackedStringArray`](class_packedstringarray.md) | [`get_all_scripts`](#class_translationserver_method_get_all_scripts) ( ) const[^const]                                                                                                                                                                                   |
| [`String`](class_string.md)                       | [`get_country_name`](#class_translationserver_method_get_country_name) ( country: [`String`](class_string.md) ) const[^const]                                                                                                                                            |
| [`String`](class_string.md)                       | [`get_language_name`](#class_translationserver_method_get_language_name) ( language: [`String`](class_string.md) ) const[^const]                                                                                                                                         |
| [`PackedStringArray`](class_packedstringarray.md) | [`get_loaded_locales`](#class_translationserver_method_get_loaded_locales) ( ) const[^const]                                                                                                                                                                             |
| [`String`](class_string.md)                       | [`get_locale`](#class_translationserver_method_get_locale) ( ) const[^const]                                                                                                                                                                                             |
| [`String`](class_string.md)                       | [`get_locale_name`](#class_translationserver_method_get_locale_name) ( locale: [`String`](class_string.md) ) const[^const]                                                                                                                                               |
| [`String`](class_string.md)                       | [`get_script_name`](#class_translationserver_method_get_script_name) ( script: [`String`](class_string.md) ) const[^const]                                                                                                                                               |
| [`String`](class_string.md)                       | [`get_tool_locale`](#class_translationserver_method_get_tool_locale) ( )                                                                                                                                                                                                 |
| [`Translation`](class_translation.md)             | [`get_translation_object`](#class_translationserver_method_get_translation_object) ( locale: [`String`](class_string.md) )                                                                                                                                               |
| [`StringName`](class_stringname.md)               | [`pseudolocalize`](#class_translationserver_method_pseudolocalize) ( message: [`StringName`](class_stringname.md) ) const[^const]                                                                                                                                        |
| `void`                                            | [`reload_pseudolocalization`](#class_translationserver_method_reload_pseudolocalization) ( )                                                                                                                                                                             |
| `void`                                            | [`remove_translation`](#class_translationserver_method_remove_translation) ( translation: [`Translation`](class_translation.md) )                                                                                                                                        |
| `void`                                            | [`set_locale`](#class_translationserver_method_set_locale) ( locale: [`String`](class_string.md) )                                                                                                                                                                       |
| [`String`](class_string.md)                       | [`standardize_locale`](#class_translationserver_method_standardize_locale) ( locale: [`String`](class_string.md) ) const[^const]                                                                                                                                         |
| [`StringName`](class_stringname.md)               | [`translate`](#class_translationserver_method_translate) ( message: [`StringName`](class_stringname.md), context: [`StringName`](class_stringname.md) = &"" ) const[^const]                                                                                              |
| [`StringName`](class_stringname.md)               | [`translate_plural`](#class_translationserver_method_translate_plural) ( message: [`StringName`](class_stringname.md), plural_message: [`StringName`](class_stringname.md), n: [`int`](class_int.md), context: [`StringName`](class_stringname.md) = &"" ) const[^const] |

<!-- rst-class:: classref-section-separator -->

---

## 属性说明

<div id="_class_translationserver_property_pseudolocalization_enabled"></div>

[`bool`](class_bool.md) **pseudolocalization_enabled** = ``false`` <div id="class_translationserver_property_pseudolocalization_enabled"></div>

- `void` **set_pseudolocalization_enabled** ( value: [`bool`](class_bool.md) )
- [`bool`](class_bool.md) **is_pseudolocalization_enabled** ( )

If `true`, enables the use of pseudolocalization. See [`ProjectSettings.internationalization/pseudolocalization/use_pseudolocalization`](#class_projectsettings_property_internationalization/pseudolocalization/use_pseudolocalization) for details.

<!-- rst-class:: classref-section-separator -->

---

## 方法说明

<div id="_class_translationserver_method_add_translation"></div>

`void` **add_translation** ( translation: [`Translation`](class_translation.md) )<div id="class_translationserver_method_add_translation"></div>

Adds a [`Translation`](class_translation.md) resource.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_translationserver_method_clear"></div>

`void` **clear** ( )<div id="class_translationserver_method_clear"></div>

Clears the server from all translations.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_translationserver_method_compare_locales"></div>

[`int`](class_int.md) **compare_locales** ( locale_a: [`String`](class_string.md), locale_b: [`String`](class_string.md) ) const[^const]<div id="class_translationserver_method_compare_locales"></div>

Compares two locales and returns a similarity score between `0` (no match) and `10` (full match).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_translationserver_method_get_all_countries"></div>

[`PackedStringArray`](class_packedstringarray.md) **get_all_countries** ( ) const[^const]<div id="class_translationserver_method_get_all_countries"></div>

Returns an array of known country codes.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_translationserver_method_get_all_languages"></div>

[`PackedStringArray`](class_packedstringarray.md) **get_all_languages** ( ) const[^const]<div id="class_translationserver_method_get_all_languages"></div>

Returns array of known language codes.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_translationserver_method_get_all_scripts"></div>

[`PackedStringArray`](class_packedstringarray.md) **get_all_scripts** ( ) const[^const]<div id="class_translationserver_method_get_all_scripts"></div>

Returns an array of known script codes.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_translationserver_method_get_country_name"></div>

[`String`](class_string.md) **get_country_name** ( country: [`String`](class_string.md) ) const[^const]<div id="class_translationserver_method_get_country_name"></div>

Returns a readable country name for the `country` code.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_translationserver_method_get_language_name"></div>

[`String`](class_string.md) **get_language_name** ( language: [`String`](class_string.md) ) const[^const]<div id="class_translationserver_method_get_language_name"></div>

Returns a readable language name for the `language` code.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_translationserver_method_get_loaded_locales"></div>

[`PackedStringArray`](class_packedstringarray.md) **get_loaded_locales** ( ) const[^const]<div id="class_translationserver_method_get_loaded_locales"></div>

Returns an array of all loaded locales of the project.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_translationserver_method_get_locale"></div>

[`String`](class_string.md) **get_locale** ( ) const[^const]<div id="class_translationserver_method_get_locale"></div>

Returns the current locale of the project.

See also [`OS.get_locale`](#class_os_method_get_locale) and [`OS.get_locale_language`](#class_os_method_get_locale_language) to query the locale of the user system.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_translationserver_method_get_locale_name"></div>

[`String`](class_string.md) **get_locale_name** ( locale: [`String`](class_string.md) ) const[^const]<div id="class_translationserver_method_get_locale_name"></div>

Returns a locale's language and its variant (e.g. `"en_US"` would return `"English (United States)"`).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_translationserver_method_get_script_name"></div>

[`String`](class_string.md) **get_script_name** ( script: [`String`](class_string.md) ) const[^const]<div id="class_translationserver_method_get_script_name"></div>

Returns a readable script name for the `script` code.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_translationserver_method_get_tool_locale"></div>

[`String`](class_string.md) **get_tool_locale** ( )<div id="class_translationserver_method_get_tool_locale"></div>

Returns the current locale of the editor.

 **Note:** When called from an exported project returns the same value as [`get_locale`](#class_translationserver_method_get_locale).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_translationserver_method_get_translation_object"></div>

[`Translation`](class_translation.md) **get_translation_object** ( locale: [`String`](class_string.md) )<div id="class_translationserver_method_get_translation_object"></div>

Returns the [`Translation`](class_translation.md) instance based on the `locale` passed in.

It will return `null` if there is no [`Translation`](class_translation.md) instance that matches the `locale`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_translationserver_method_pseudolocalize"></div>

[`StringName`](class_stringname.md) **pseudolocalize** ( message: [`StringName`](class_stringname.md) ) const[^const]<div id="class_translationserver_method_pseudolocalize"></div>

Returns the pseudolocalized string based on the `message` passed in.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_translationserver_method_reload_pseudolocalization"></div>

`void` **reload_pseudolocalization** ( )<div id="class_translationserver_method_reload_pseudolocalization"></div>

Reparses the pseudolocalization options and reloads the translation.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_translationserver_method_remove_translation"></div>

`void` **remove_translation** ( translation: [`Translation`](class_translation.md) )<div id="class_translationserver_method_remove_translation"></div>

Removes the given translation from the server.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_translationserver_method_set_locale"></div>

`void` **set_locale** ( locale: [`String`](class_string.md) )<div id="class_translationserver_method_set_locale"></div>

Sets the locale of the project. The `locale` string will be standardized to match known locales (e.g. `en-US` would be matched to `en_US`).

If translations have been loaded beforehand for the new locale, they will be applied.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_translationserver_method_standardize_locale"></div>

[`String`](class_string.md) **standardize_locale** ( locale: [`String`](class_string.md) ) const[^const]<div id="class_translationserver_method_standardize_locale"></div>

Returns a `locale` string standardized to match known locales (e.g. `en-US` would be matched to `en_US`).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_translationserver_method_translate"></div>

[`StringName`](class_stringname.md) **translate** ( message: [`StringName`](class_stringname.md), context: [`StringName`](class_stringname.md) = &"" ) const[^const]<div id="class_translationserver_method_translate"></div>

Returns the current locale's translation for the given message (key) and context.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_translationserver_method_translate_plural"></div>

[`StringName`](class_stringname.md) **translate_plural** ( message: [`StringName`](class_stringname.md), plural_message: [`StringName`](class_stringname.md), n: [`int`](class_int.md), context: [`StringName`](class_stringname.md) = &"" ) const[^const]<div id="class_translationserver_method_translate_plural"></div>

Returns the current locale's translation for the given message (key), plural message and context.

The number `n` is the number or quantity of the plural object. It will be used to guide the translation system to fetch the correct plural form for the selected language.

[^virtual]: 本方法通常需要用户覆盖才能生效。
[^const]: 本方法无副作用，不会修改该实例的任何成员变量。
[^vararg]: 本方法除了能接受在此处描述的参数外，还能够继续接受任意数量的参数。
[^constructor]: 本方法用于构造某个类型。
[^static]: 调用本方法无需实例，可直接使用类名进行调用。
[^operator]: 本方法描述的是使用本类型作为左操作数的有效运算符。
[^bitfield]: 这个值是由下列位标志构成位掩码的整数。
[^void]: 无返回值。
