<!-- ⚠ 请勿编辑本文件 ⚠ -->
<!-- 本文档使用脚本从 WeDot 引擎源码仓库生成。 -->
<!-- 生成脚本：https://github.com/WeDot-Engine/WeDot/tree/master/doc/tools/make_md.py； -->
<!-- 原文件：https://github.com/WeDot-Engine/WeDot/tree/master/doc/classes/ResourceUID.xml。 -->

<div id="_class_resourceuid"></div>

# ResourceUID

**继承：** [`Object`](class_object.md)

A singleton that manages the unique identifiers of all resources within a project.

## 描述

Resource UIDs (Unique IDentifiers) allow the engine to keep references between resources intact, even if files are renamed or moved. They can be accessed with `uid://`.

 **ResourceUID** keeps track of all registered resource UIDs in a project, generates new UIDs, and converts between their string and integer representations.

## 方法

|||
|:-:|:--|
| `void`                      | [`add_id`](class_resourceuid.md#class_resourceuid_method_add_id) ( id: [`int`](class_int.md), path: [`String`](class_string.md) ) |
| [`int`](class_int.md)       | [`create_id`](class_resourceuid.md#class_resourceuid_method_create_id) ( )                                                        |
| [`String`](class_string.md) | [`get_id_path`](class_resourceuid.md#class_resourceuid_method_get_id_path) ( id: [`int`](class_int.md) ) const[^const]            |
| [`bool`](class_bool.md)     | [`has_id`](class_resourceuid.md#class_resourceuid_method_has_id) ( id: [`int`](class_int.md) ) const[^const]                      |
| [`String`](class_string.md) | [`id_to_text`](class_resourceuid.md#class_resourceuid_method_id_to_text) ( id: [`int`](class_int.md) ) const[^const]              |
| `void`                      | [`remove_id`](class_resourceuid.md#class_resourceuid_method_remove_id) ( id: [`int`](class_int.md) )                              |
| `void`                      | [`set_id`](class_resourceuid.md#class_resourceuid_method_set_id) ( id: [`int`](class_int.md), path: [`String`](class_string.md) ) |
| [`int`](class_int.md)       | [`text_to_id`](class_resourceuid.md#class_resourceuid_method_text_to_id) ( text_id: [`String`](class_string.md) ) const[^const]   |

<!-- rst-class:: classref-section-separator -->

---

## 常量

<div id="_class_resourceuid_constant_invalid_id"></div>

**INVALID_ID** = ``-1`` <div id="class_resourceuid_constant_invalid_id"></div>

The value to use for an invalid UID, for example if the resource could not be loaded.

Its text representation is `uid://<invalid>`.

<!-- rst-class:: classref-section-separator -->

---

## 方法说明

<div id="_class_resourceuid_method_add_id"></div>

`void` **add_id** ( id: [`int`](class_int.md), path: [`String`](class_string.md) )<div id="class_resourceuid_method_add_id"></div>

Adds a new UID value which is mapped to the given resource path.

Fails with an error if the UID already exists, so be sure to check [`has_id`](class_resourceuid.md#class_resourceuid_method_has_id) beforehand, or use [`set_id`](class_resourceuid.md#class_resourceuid_method_set_id) instead.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_resourceuid_method_create_id"></div>

[`int`](class_int.md) **create_id** ( )<div id="class_resourceuid_method_create_id"></div>

Generates a random resource UID which is guaranteed to be unique within the list of currently loaded UIDs.

In order for this UID to be registered, you must call [`add_id`](class_resourceuid.md#class_resourceuid_method_add_id) or [`set_id`](class_resourceuid.md#class_resourceuid_method_set_id).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_resourceuid_method_get_id_path"></div>

[`String`](class_string.md) **get_id_path** ( id: [`int`](class_int.md) ) const[^const]<div id="class_resourceuid_method_get_id_path"></div>

Returns the path that the given UID value refers to.

Fails with an error if the UID does not exist, so be sure to check [`has_id`](class_resourceuid.md#class_resourceuid_method_has_id) beforehand.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_resourceuid_method_has_id"></div>

[`bool`](class_bool.md) **has_id** ( id: [`int`](class_int.md) ) const[^const]<div id="class_resourceuid_method_has_id"></div>

Returns whether the given UID value is known to the cache.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_resourceuid_method_id_to_text"></div>

[`String`](class_string.md) **id_to_text** ( id: [`int`](class_int.md) ) const[^const]<div id="class_resourceuid_method_id_to_text"></div>

Converts the given UID to a `uid://` string value.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_resourceuid_method_remove_id"></div>

`void` **remove_id** ( id: [`int`](class_int.md) )<div id="class_resourceuid_method_remove_id"></div>

Removes a loaded UID value from the cache.

Fails with an error if the UID does not exist, so be sure to check [`has_id`](class_resourceuid.md#class_resourceuid_method_has_id) beforehand.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_resourceuid_method_set_id"></div>

`void` **set_id** ( id: [`int`](class_int.md), path: [`String`](class_string.md) )<div id="class_resourceuid_method_set_id"></div>

Updates the resource path of an existing UID.

Fails with an error if the UID does not exist, so be sure to check [`has_id`](class_resourceuid.md#class_resourceuid_method_has_id) beforehand, or use [`add_id`](class_resourceuid.md#class_resourceuid_method_add_id) instead.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_resourceuid_method_text_to_id"></div>

[`int`](class_int.md) **text_to_id** ( text_id: [`String`](class_string.md) ) const[^const]<div id="class_resourceuid_method_text_to_id"></div>

Extracts the UID value from the given `uid://` string.

[^virtual]: 本方法通常需要用户覆盖才能生效。
[^const]: 本方法无副作用，不会修改该实例的任何成员变量。
[^vararg]: 本方法除了能接受在此处描述的参数外，还能够继续接受任意数量的参数。
[^constructor]: 本方法用于构造某个类型。
[^static]: 调用本方法无需实例，可直接使用类名进行调用。
[^operator]: 本方法描述的是使用本类型作为左操作数的有效运算符。
[^bitfield]: 这个值是由下列位标志构成位掩码的整数。
[^void]: 无返回值。
