<!-- ⚠ 请勿编辑本文件 ⚠ -->
<!-- 本文档使用脚本从 WeDot 引擎源码仓库生成。 -->
<!-- 生成脚本：https://github.com/WeDot-Engine/WeDot/tree/master/doc/tools/make_md.py； -->
<!-- 原文件：https://github.com/WeDot-Engine/WeDot/tree/master/doc/classes/ClassDB.xml。 -->

<div id="_class_classdb"></div>

# ClassDB

**继承：** [`Object`](class_object.md)

A class information repository.

## 描述

Provides access to metadata stored for every available class.

## 方法

|||
|:-:|:--|
| [`bool`](class_bool.md)                                     | [`can_instantiate`](class_classdb.md#class_classdb_method_can_instantiate) ( class: [`StringName`](class_stringname.md) ) const[^const]                                                                                                                               |
| [`Variant`](class_variant.md)                               | [`class_call_static`](class_classdb.md#class_classdb_method_class_call_static) ( class: [`StringName`](class_stringname.md), method: [`StringName`](class_stringname.md), ... ) vararg[^vararg]                                                                       |
| [`bool`](class_bool.md)                                     | [`class_exists`](class_classdb.md#class_classdb_method_class_exists) ( class: [`StringName`](class_stringname.md) ) const[^const]                                                                                                                                     |
| [APIType](#enum_classdb_apitype)                            | [`class_get_api_type`](class_classdb.md#class_classdb_method_class_get_api_type) ( class: [`StringName`](class_stringname.md) ) const[^const]                                                                                                                         |
| [`PackedStringArray`](class_packedstringarray.md)           | [`class_get_enum_constants`](class_classdb.md#class_classdb_method_class_get_enum_constants) ( class: [`StringName`](class_stringname.md), enum: [`StringName`](class_stringname.md), no_inheritance: [`bool`](class_bool.md) = false ) const[^const]                 |
| [`PackedStringArray`](class_packedstringarray.md)           | [`class_get_enum_list`](class_classdb.md#class_classdb_method_class_get_enum_list) ( class: [`StringName`](class_stringname.md), no_inheritance: [`bool`](class_bool.md) = false ) const[^const]                                                                      |
| [`int`](class_int.md)                                       | [`class_get_integer_constant`](class_classdb.md#class_classdb_method_class_get_integer_constant) ( class: [`StringName`](class_stringname.md), name: [`StringName`](class_stringname.md) ) const[^const]                                                              |
| [`StringName`](class_stringname.md)                         | [`class_get_integer_constant_enum`](class_classdb.md#class_classdb_method_class_get_integer_constant_enum) ( class: [`StringName`](class_stringname.md), name: [`StringName`](class_stringname.md), no_inheritance: [`bool`](class_bool.md) = false ) const[^const]   |
| [`PackedStringArray`](class_packedstringarray.md)           | [`class_get_integer_constant_list`](class_classdb.md#class_classdb_method_class_get_integer_constant_list) ( class: [`StringName`](class_stringname.md), no_inheritance: [`bool`](class_bool.md) = false ) const[^const]                                              |
| [`int`](class_int.md)                                       | [`class_get_method_argument_count`](class_classdb.md#class_classdb_method_class_get_method_argument_count) ( class: [`StringName`](class_stringname.md), method: [`StringName`](class_stringname.md), no_inheritance: [`bool`](class_bool.md) = false ) const[^const] |
| [Array](class_array.md) [`Dictionary`](class_dictionary.md) | [`class_get_method_list`](class_classdb.md#class_classdb_method_class_get_method_list) ( class: [`StringName`](class_stringname.md), no_inheritance: [`bool`](class_bool.md) = false ) const[^const]                                                                  |
| [`Variant`](class_variant.md)                               | [`class_get_property`](class_classdb.md#class_classdb_method_class_get_property) ( object: [`Object`](class_object.md), property: [`StringName`](class_stringname.md) ) const[^const]                                                                                 |
| [`Variant`](class_variant.md)                               | [`class_get_property_default_value`](class_classdb.md#class_classdb_method_class_get_property_default_value) ( class: [`StringName`](class_stringname.md), property: [`StringName`](class_stringname.md) ) const[^const]                                              |
| [`StringName`](class_stringname.md)                         | [`class_get_property_getter`](class_classdb.md#class_classdb_method_class_get_property_getter) ( class: [`StringName`](class_stringname.md), property: [`StringName`](class_stringname.md) )                                                                          |
| [Array](class_array.md) [`Dictionary`](class_dictionary.md) | [`class_get_property_list`](class_classdb.md#class_classdb_method_class_get_property_list) ( class: [`StringName`](class_stringname.md), no_inheritance: [`bool`](class_bool.md) = false ) const[^const]                                                              |
| [`StringName`](class_stringname.md)                         | [`class_get_property_setter`](class_classdb.md#class_classdb_method_class_get_property_setter) ( class: [`StringName`](class_stringname.md), property: [`StringName`](class_stringname.md) )                                                                          |
| [`Dictionary`](class_dictionary.md)                         | [`class_get_signal`](class_classdb.md#class_classdb_method_class_get_signal) ( class: [`StringName`](class_stringname.md), signal: [`StringName`](class_stringname.md) ) const[^const]                                                                                |
| [Array](class_array.md) [`Dictionary`](class_dictionary.md) | [`class_get_signal_list`](class_classdb.md#class_classdb_method_class_get_signal_list) ( class: [`StringName`](class_stringname.md), no_inheritance: [`bool`](class_bool.md) = false ) const[^const]                                                                  |
| [`bool`](class_bool.md)                                     | [`class_has_enum`](class_classdb.md#class_classdb_method_class_has_enum) ( class: [`StringName`](class_stringname.md), name: [`StringName`](class_stringname.md), no_inheritance: [`bool`](class_bool.md) = false ) const[^const]                                     |
| [`bool`](class_bool.md)                                     | [`class_has_integer_constant`](class_classdb.md#class_classdb_method_class_has_integer_constant) ( class: [`StringName`](class_stringname.md), name: [`StringName`](class_stringname.md) ) const[^const]                                                              |
| [`bool`](class_bool.md)                                     | [`class_has_method`](class_classdb.md#class_classdb_method_class_has_method) ( class: [`StringName`](class_stringname.md), method: [`StringName`](class_stringname.md), no_inheritance: [`bool`](class_bool.md) = false ) const[^const]                               |
| [`bool`](class_bool.md)                                     | [`class_has_signal`](class_classdb.md#class_classdb_method_class_has_signal) ( class: [`StringName`](class_stringname.md), signal: [`StringName`](class_stringname.md) ) const[^const]                                                                                |
| [Error](#enum_@globalscope_error)                           | [`class_set_property`](class_classdb.md#class_classdb_method_class_set_property) ( object: [`Object`](class_object.md), property: [`StringName`](class_stringname.md), value: [`Variant`](class_variant.md) ) const[^const]                                           |
| [`PackedStringArray`](class_packedstringarray.md)           | [`get_class_list`](class_classdb.md#class_classdb_method_get_class_list) ( ) const[^const]                                                                                                                                                                            |
| [`PackedStringArray`](class_packedstringarray.md)           | [`get_inheriters_from_class`](class_classdb.md#class_classdb_method_get_inheriters_from_class) ( class: [`StringName`](class_stringname.md) ) const[^const]                                                                                                           |
| [`StringName`](class_stringname.md)                         | [`get_parent_class`](class_classdb.md#class_classdb_method_get_parent_class) ( class: [`StringName`](class_stringname.md) ) const[^const]                                                                                                                             |
| [`Variant`](class_variant.md)                               | [`instantiate`](class_classdb.md#class_classdb_method_instantiate) ( class: [`StringName`](class_stringname.md) ) const[^const]                                                                                                                                       |
| [`bool`](class_bool.md)                                     | [`is_class_enabled`](class_classdb.md#class_classdb_method_is_class_enabled) ( class: [`StringName`](class_stringname.md) ) const[^const]                                                                                                                             |
| [`bool`](class_bool.md)                                     | [`is_class_enum_bitfield`](class_classdb.md#class_classdb_method_is_class_enum_bitfield) ( class: [`StringName`](class_stringname.md), enum: [`StringName`](class_stringname.md), no_inheritance: [`bool`](class_bool.md) = false ) const[^const]                     |
| [`bool`](class_bool.md)                                     | [`is_parent_class`](class_classdb.md#class_classdb_method_is_parent_class) ( class: [`StringName`](class_stringname.md), inherits: [`StringName`](class_stringname.md) ) const[^const]                                                                                |

<!-- rst-class:: classref-section-separator -->

---

## 枚举

<div id="_class_enum_classdb_apitype"></div>

enum **APIType**: <div id="enum_classdb_apitype"></div>

<div id="_class_classdb_constant_api_core"></div>

[APIType](#enum_classdb_apitype) **API_CORE** = ``0``

Native Core class type.

<div id="_class_classdb_constant_api_editor"></div>

[APIType](#enum_classdb_apitype) **API_EDITOR** = ``1``

Native Editor class type.

<div id="_class_classdb_constant_api_extension"></div>

[APIType](#enum_classdb_apitype) **API_EXTENSION** = ``2``

GDExtension class type.

<div id="_class_classdb_constant_api_editor_extension"></div>

[APIType](#enum_classdb_apitype) **API_EDITOR_EXTENSION** = ``3``

GDExtension Editor class type.

<div id="_class_classdb_constant_api_none"></div>

[APIType](#enum_classdb_apitype) **API_NONE** = ``4``

Unknown class type.

<!-- rst-class:: classref-section-separator -->

---

## 方法说明

<div id="_class_classdb_method_can_instantiate"></div>

[`bool`](class_bool.md) **can_instantiate** ( class: [`StringName`](class_stringname.md) ) const[^const]<div id="class_classdb_method_can_instantiate"></div>

Returns `true` if objects can be instantiated from the specified `class`, otherwise returns `false`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_classdb_method_class_call_static"></div>

[`Variant`](class_variant.md) **class_call_static** ( class: [`StringName`](class_stringname.md), method: [`StringName`](class_stringname.md), ... ) vararg[^vararg]<div id="class_classdb_method_class_call_static"></div>

Calls a static method on a class.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_classdb_method_class_exists"></div>

[`bool`](class_bool.md) **class_exists** ( class: [`StringName`](class_stringname.md) ) const[^const]<div id="class_classdb_method_class_exists"></div>

Returns whether the specified `class` is available or not.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_classdb_method_class_get_api_type"></div>

[APIType](#enum_classdb_apitype) **class_get_api_type** ( class: [`StringName`](class_stringname.md) ) const[^const]<div id="class_classdb_method_class_get_api_type"></div>

Returns the API type of `class`. See [APIType](#enum_classdb_apitype).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_classdb_method_class_get_enum_constants"></div>

[`PackedStringArray`](class_packedstringarray.md) **class_get_enum_constants** ( class: [`StringName`](class_stringname.md), enum: [`StringName`](class_stringname.md), no_inheritance: [`bool`](class_bool.md) = false ) const[^const]<div id="class_classdb_method_class_get_enum_constants"></div>

Returns an array with all the keys in `enum` of `class` or its ancestry.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_classdb_method_class_get_enum_list"></div>

[`PackedStringArray`](class_packedstringarray.md) **class_get_enum_list** ( class: [`StringName`](class_stringname.md), no_inheritance: [`bool`](class_bool.md) = false ) const[^const]<div id="class_classdb_method_class_get_enum_list"></div>

Returns an array with all the enums of `class` or its ancestry.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_classdb_method_class_get_integer_constant"></div>

[`int`](class_int.md) **class_get_integer_constant** ( class: [`StringName`](class_stringname.md), name: [`StringName`](class_stringname.md) ) const[^const]<div id="class_classdb_method_class_get_integer_constant"></div>

Returns the value of the integer constant `name` of `class` or its ancestry. Always returns 0 when the constant could not be found.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_classdb_method_class_get_integer_constant_enum"></div>

[`StringName`](class_stringname.md) **class_get_integer_constant_enum** ( class: [`StringName`](class_stringname.md), name: [`StringName`](class_stringname.md), no_inheritance: [`bool`](class_bool.md) = false ) const[^const]<div id="class_classdb_method_class_get_integer_constant_enum"></div>

Returns which enum the integer constant `name` of `class` or its ancestry belongs to.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_classdb_method_class_get_integer_constant_list"></div>

[`PackedStringArray`](class_packedstringarray.md) **class_get_integer_constant_list** ( class: [`StringName`](class_stringname.md), no_inheritance: [`bool`](class_bool.md) = false ) const[^const]<div id="class_classdb_method_class_get_integer_constant_list"></div>

Returns an array with the names all the integer constants of `class` or its ancestry.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_classdb_method_class_get_method_argument_count"></div>

[`int`](class_int.md) **class_get_method_argument_count** ( class: [`StringName`](class_stringname.md), method: [`StringName`](class_stringname.md), no_inheritance: [`bool`](class_bool.md) = false ) const[^const]<div id="class_classdb_method_class_get_method_argument_count"></div>

Returns the number of arguments of the method `method` of `class` or its ancestry if `no_inheritance` is `false`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_classdb_method_class_get_method_list"></div>

[Array](class_array.md) [`Dictionary`](class_dictionary.md) **class_get_method_list** ( class: [`StringName`](class_stringname.md), no_inheritance: [`bool`](class_bool.md) = false ) const[^const]<div id="class_classdb_method_class_get_method_list"></div>

Returns an array with all the methods of `class` or its ancestry if `no_inheritance` is `false`. Every element of the array is a [`Dictionary`](class_dictionary.md) with the following keys: `args`, `default_args`, `flags`, `id`, `name`, `return: (class_name, hint, hint_string, name, type, usage)`.

 **Note:** In exported release builds the debug info is not available, so the returned dictionaries will contain only method names.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_classdb_method_class_get_property"></div>

[`Variant`](class_variant.md) **class_get_property** ( object: [`Object`](class_object.md), property: [`StringName`](class_stringname.md) ) const[^const]<div id="class_classdb_method_class_get_property"></div>

Returns the value of `property` of `object` or its ancestry.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_classdb_method_class_get_property_default_value"></div>

[`Variant`](class_variant.md) **class_get_property_default_value** ( class: [`StringName`](class_stringname.md), property: [`StringName`](class_stringname.md) ) const[^const]<div id="class_classdb_method_class_get_property_default_value"></div>

Returns the default value of `property` of `class` or its ancestor classes.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_classdb_method_class_get_property_getter"></div>

[`StringName`](class_stringname.md) **class_get_property_getter** ( class: [`StringName`](class_stringname.md), property: [`StringName`](class_stringname.md) )<div id="class_classdb_method_class_get_property_getter"></div>

Returns the getter method name of `property` of `class`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_classdb_method_class_get_property_list"></div>

[Array](class_array.md) [`Dictionary`](class_dictionary.md) **class_get_property_list** ( class: [`StringName`](class_stringname.md), no_inheritance: [`bool`](class_bool.md) = false ) const[^const]<div id="class_classdb_method_class_get_property_list"></div>

Returns an array with all the properties of `class` or its ancestry if `no_inheritance` is `false`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_classdb_method_class_get_property_setter"></div>

[`StringName`](class_stringname.md) **class_get_property_setter** ( class: [`StringName`](class_stringname.md), property: [`StringName`](class_stringname.md) )<div id="class_classdb_method_class_get_property_setter"></div>

Returns the setter method name of `property` of `class`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_classdb_method_class_get_signal"></div>

[`Dictionary`](class_dictionary.md) **class_get_signal** ( class: [`StringName`](class_stringname.md), signal: [`StringName`](class_stringname.md) ) const[^const]<div id="class_classdb_method_class_get_signal"></div>

Returns the `signal` data of `class` or its ancestry. The returned value is a [`Dictionary`](class_dictionary.md) with the following keys: `args`, `default_args`, `flags`, `id`, `name`, `return: (class_name, hint, hint_string, name, type, usage)`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_classdb_method_class_get_signal_list"></div>

[Array](class_array.md) [`Dictionary`](class_dictionary.md) **class_get_signal_list** ( class: [`StringName`](class_stringname.md), no_inheritance: [`bool`](class_bool.md) = false ) const[^const]<div id="class_classdb_method_class_get_signal_list"></div>

Returns an array with all the signals of `class` or its ancestry if `no_inheritance` is `false`. Every element of the array is a [`Dictionary`](class_dictionary.md) as described in [`class_get_signal`](class_classdb.md#class_classdb_method_class_get_signal).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_classdb_method_class_has_enum"></div>

[`bool`](class_bool.md) **class_has_enum** ( class: [`StringName`](class_stringname.md), name: [`StringName`](class_stringname.md), no_inheritance: [`bool`](class_bool.md) = false ) const[^const]<div id="class_classdb_method_class_has_enum"></div>

Returns whether `class` or its ancestry has an enum called `name` or not.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_classdb_method_class_has_integer_constant"></div>

[`bool`](class_bool.md) **class_has_integer_constant** ( class: [`StringName`](class_stringname.md), name: [`StringName`](class_stringname.md) ) const[^const]<div id="class_classdb_method_class_has_integer_constant"></div>

Returns whether `class` or its ancestry has an integer constant called `name` or not.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_classdb_method_class_has_method"></div>

[`bool`](class_bool.md) **class_has_method** ( class: [`StringName`](class_stringname.md), method: [`StringName`](class_stringname.md), no_inheritance: [`bool`](class_bool.md) = false ) const[^const]<div id="class_classdb_method_class_has_method"></div>

Returns whether `class` (or its ancestry if `no_inheritance` is `false`) has a method called `method` or not.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_classdb_method_class_has_signal"></div>

[`bool`](class_bool.md) **class_has_signal** ( class: [`StringName`](class_stringname.md), signal: [`StringName`](class_stringname.md) ) const[^const]<div id="class_classdb_method_class_has_signal"></div>

Returns whether `class` or its ancestry has a signal called `signal` or not.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_classdb_method_class_set_property"></div>

[Error](#enum_@globalscope_error) **class_set_property** ( object: [`Object`](class_object.md), property: [`StringName`](class_stringname.md), value: [`Variant`](class_variant.md) ) const[^const]<div id="class_classdb_method_class_set_property"></div>

Sets `property` value of `object` to `value`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_classdb_method_get_class_list"></div>

[`PackedStringArray`](class_packedstringarray.md) **get_class_list** ( ) const[^const]<div id="class_classdb_method_get_class_list"></div>

Returns the names of all the classes available.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_classdb_method_get_inheriters_from_class"></div>

[`PackedStringArray`](class_packedstringarray.md) **get_inheriters_from_class** ( class: [`StringName`](class_stringname.md) ) const[^const]<div id="class_classdb_method_get_inheriters_from_class"></div>

Returns the names of all the classes that directly or indirectly inherit from `class`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_classdb_method_get_parent_class"></div>

[`StringName`](class_stringname.md) **get_parent_class** ( class: [`StringName`](class_stringname.md) ) const[^const]<div id="class_classdb_method_get_parent_class"></div>

Returns the parent class of `class`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_classdb_method_instantiate"></div>

[`Variant`](class_variant.md) **instantiate** ( class: [`StringName`](class_stringname.md) ) const[^const]<div id="class_classdb_method_instantiate"></div>

Creates an instance of `class`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_classdb_method_is_class_enabled"></div>

[`bool`](class_bool.md) **is_class_enabled** ( class: [`StringName`](class_stringname.md) ) const[^const]<div id="class_classdb_method_is_class_enabled"></div>

Returns whether this `class` is enabled or not.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_classdb_method_is_class_enum_bitfield"></div>

[`bool`](class_bool.md) **is_class_enum_bitfield** ( class: [`StringName`](class_stringname.md), enum: [`StringName`](class_stringname.md), no_inheritance: [`bool`](class_bool.md) = false ) const[^const]<div id="class_classdb_method_is_class_enum_bitfield"></div>

Returns whether `class` (or its ancestor classes if `no_inheritance` is `false`) has an enum called `enum` that is a bitfield.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_classdb_method_is_parent_class"></div>

[`bool`](class_bool.md) **is_parent_class** ( class: [`StringName`](class_stringname.md), inherits: [`StringName`](class_stringname.md) ) const[^const]<div id="class_classdb_method_is_parent_class"></div>

Returns whether `inherits` is an ancestor of `class` or not.

[^virtual]: 本方法通常需要用户覆盖才能生效。
[^const]: 本方法无副作用，不会修改该实例的任何成员变量。
[^vararg]: 本方法除了能接受在此处描述的参数外，还能够继续接受任意数量的参数。
[^constructor]: 本方法用于构造某个类型。
[^static]: 调用本方法无需实例，可直接使用类名进行调用。
[^operator]: 本方法描述的是使用本类型作为左操作数的有效运算符。
[^bitfield]: 这个值是由下列位标志构成位掩码的整数。
[^void]: 无返回值。
