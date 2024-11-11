<!-- ⚠ 请勿编辑本文件 ⚠ -->
<!-- 本文档使用脚本从 WeDot 引擎源码仓库生成。 -->
<!-- 生成脚本：https://github.com/WeDot-Engine/WeDot/tree/master/doc/tools/make_md.py； -->
<!-- 原文件：https://github.com/WeDot-Engine/WeDot/tree/master/doc/classes/ScriptExtension.xml。 -->

<div id="_class_scriptextension"></div>

# ScriptExtension

**继承：** [`Script`](class_script.md) **<** [`Resource`](class_resource.md) **<** [`RefCounted`](class_refcounted.md) **<** [`Object`](class_object.md)

该类目前没有描述，请帮我们\ :ref:`贡献一个 <doc_updating_the_class_reference>`\ 吧！

## 方法

|||
|:-:|:--|
| [`bool`](class_bool.md)                                     | [`_can_instantiate`](class_scriptextension.md#class_scriptextension_private_method__can_instantiate) ( ) virtual[^virtual] const[^const]                                                                               |
| [`bool`](class_bool.md)                                     | [`_editor_can_reload_from_file`](class_scriptextension.md#class_scriptextension_private_method__editor_can_reload_from_file) ( ) virtual[^virtual]                                                                     |
| [`Script`](class_script.md)                                 | [`_get_base_script`](class_scriptextension.md#class_scriptextension_private_method__get_base_script) ( ) virtual[^virtual] const[^const]                                                                               |
| [`String`](class_string.md)                                 | [`_get_class_icon_path`](class_scriptextension.md#class_scriptextension_private_method__get_class_icon_path) ( ) virtual[^virtual] const[^const]                                                                       |
| [`Dictionary`](class_dictionary.md)                         | [`_get_constants`](class_scriptextension.md#class_scriptextension_private_method__get_constants) ( ) virtual[^virtual] const[^const]                                                                                   |
| [Array](class_array.md) [`Dictionary`](class_dictionary.md) | [`_get_documentation`](class_scriptextension.md#class_scriptextension_private_method__get_documentation) ( ) virtual[^virtual] const[^const]                                                                           |
| [`StringName`](class_stringname.md)                         | [`_get_global_name`](class_scriptextension.md#class_scriptextension_private_method__get_global_name) ( ) virtual[^virtual] const[^const]                                                                               |
| [`StringName`](class_stringname.md)                         | [`_get_instance_base_type`](class_scriptextension.md#class_scriptextension_private_method__get_instance_base_type) ( ) virtual[^virtual] const[^const]                                                                 |
| [`ScriptLanguage`](class_scriptlanguage.md)                 | [`_get_language`](class_scriptextension.md#class_scriptextension_private_method__get_language) ( ) virtual[^virtual] const[^const]                                                                                     |
| [`int`](class_int.md)                                       | [`_get_member_line`](class_scriptextension.md#class_scriptextension_private_method__get_member_line) ( member: [`StringName`](class_stringname.md) ) virtual[^virtual] const[^const]                                   |
| [Array](class_array.md) [`StringName`](class_stringname.md) | [`_get_members`](class_scriptextension.md#class_scriptextension_private_method__get_members) ( ) virtual[^virtual] const[^const]                                                                                       |
| [`Dictionary`](class_dictionary.md)                         | [`_get_method_info`](class_scriptextension.md#class_scriptextension_private_method__get_method_info) ( method: [`StringName`](class_stringname.md) ) virtual[^virtual] const[^const]                                   |
| [`Variant`](class_variant.md)                               | [`_get_property_default_value`](class_scriptextension.md#class_scriptextension_private_method__get_property_default_value) ( property: [`StringName`](class_stringname.md) ) virtual[^virtual] const[^const]           |
| [`Variant`](class_variant.md)                               | [`_get_rpc_config`](class_scriptextension.md#class_scriptextension_private_method__get_rpc_config) ( ) virtual[^virtual] const[^const]                                                                                 |
| [`Variant`](class_variant.md)                               | [`_get_script_method_argument_count`](class_scriptextension.md#class_scriptextension_private_method__get_script_method_argument_count) ( method: [`StringName`](class_stringname.md) ) virtual[^virtual] const[^const] |
| [Array](class_array.md) [`Dictionary`](class_dictionary.md) | [`_get_script_method_list`](class_scriptextension.md#class_scriptextension_private_method__get_script_method_list) ( ) virtual[^virtual] const[^const]                                                                 |
| [Array](class_array.md) [`Dictionary`](class_dictionary.md) | [`_get_script_property_list`](class_scriptextension.md#class_scriptextension_private_method__get_script_property_list) ( ) virtual[^virtual] const[^const]                                                             |
| [Array](class_array.md) [`Dictionary`](class_dictionary.md) | [`_get_script_signal_list`](class_scriptextension.md#class_scriptextension_private_method__get_script_signal_list) ( ) virtual[^virtual] const[^const]                                                                 |
| [`String`](class_string.md)                                 | [`_get_source_code`](class_scriptextension.md#class_scriptextension_private_method__get_source_code) ( ) virtual[^virtual] const[^const]                                                                               |
| [`bool`](class_bool.md)                                     | [`_has_method`](class_scriptextension.md#class_scriptextension_private_method__has_method) ( method: [`StringName`](class_stringname.md) ) virtual[^virtual] const[^const]                                             |
| [`bool`](class_bool.md)                                     | [`_has_property_default_value`](class_scriptextension.md#class_scriptextension_private_method__has_property_default_value) ( property: [`StringName`](class_stringname.md) ) virtual[^virtual] const[^const]           |
| [`bool`](class_bool.md)                                     | [`_has_script_signal`](class_scriptextension.md#class_scriptextension_private_method__has_script_signal) ( signal: [`StringName`](class_stringname.md) ) virtual[^virtual] const[^const]                               |
| [`bool`](class_bool.md)                                     | [`_has_source_code`](class_scriptextension.md#class_scriptextension_private_method__has_source_code) ( ) virtual[^virtual] const[^const]                                                                               |
| [`bool`](class_bool.md)                                     | [`_has_static_method`](class_scriptextension.md#class_scriptextension_private_method__has_static_method) ( method: [`StringName`](class_stringname.md) ) virtual[^virtual] const[^const]                               |
| [`bool`](class_bool.md)                                     | [`_inherits_script`](class_scriptextension.md#class_scriptextension_private_method__inherits_script) ( script: [`Script`](class_script.md) ) virtual[^virtual] const[^const]                                           |
| `void*`                                                     | [`_instance_create`](class_scriptextension.md#class_scriptextension_private_method__instance_create) ( for_object: [`Object`](class_object.md) ) virtual[^virtual] const[^const]                                       |
| [`bool`](class_bool.md)                                     | [`_instance_has`](class_scriptextension.md#class_scriptextension_private_method__instance_has) ( object: [`Object`](class_object.md) ) virtual[^virtual] const[^const]                                                 |
| [`bool`](class_bool.md)                                     | [`_is_abstract`](class_scriptextension.md#class_scriptextension_private_method__is_abstract) ( ) virtual[^virtual] const[^const]                                                                                       |
| [`bool`](class_bool.md)                                     | [`_is_placeholder_fallback_enabled`](class_scriptextension.md#class_scriptextension_private_method__is_placeholder_fallback_enabled) ( ) virtual[^virtual] const[^const]                                               |
| [`bool`](class_bool.md)                                     | [`_is_tool`](class_scriptextension.md#class_scriptextension_private_method__is_tool) ( ) virtual[^virtual] const[^const]                                                                                               |
| [`bool`](class_bool.md)                                     | [`_is_valid`](class_scriptextension.md#class_scriptextension_private_method__is_valid) ( ) virtual[^virtual] const[^const]                                                                                             |
| `void`                                                      | [`_placeholder_erased`](class_scriptextension.md#class_scriptextension_private_method__placeholder_erased) ( placeholder: `void*` ) virtual[^virtual]                                                                  |
| `void*`                                                     | [`_placeholder_instance_create`](class_scriptextension.md#class_scriptextension_private_method__placeholder_instance_create) ( for_object: [`Object`](class_object.md) ) virtual[^virtual] const[^const]               |
| [Error](#enum_@globalscope_error)                           | [`_reload`](class_scriptextension.md#class_scriptextension_private_method__reload) ( keep_state: [`bool`](class_bool.md) ) virtual[^virtual]                                                                           |
| `void`                                                      | [`_set_source_code`](class_scriptextension.md#class_scriptextension_private_method__set_source_code) ( code: [`String`](class_string.md) ) virtual[^virtual]                                                           |
| `void`                                                      | [`_update_exports`](class_scriptextension.md#class_scriptextension_private_method__update_exports) ( ) virtual[^virtual]                                                                                               |

<!-- rst-class:: classref-section-separator -->

---

## 方法说明

<div id="_class_scriptextension_private_method__can_instantiate"></div>

[`bool`](class_bool.md) **_can_instantiate** ( ) virtual[^virtual] const[^const]<div id="class_scriptextension_private_method__can_instantiate"></div>

该方法目前没有描述，请帮我们\ :ref:`贡献一个 <doc_updating_the_class_reference>`\ 吧！

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_scriptextension_private_method__editor_can_reload_from_file"></div>

[`bool`](class_bool.md) **_editor_can_reload_from_file** ( ) virtual[^virtual]<div id="class_scriptextension_private_method__editor_can_reload_from_file"></div>

该方法目前没有描述，请帮我们\ :ref:`贡献一个 <doc_updating_the_class_reference>`\ 吧！

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_scriptextension_private_method__get_base_script"></div>

[`Script`](class_script.md) **_get_base_script** ( ) virtual[^virtual] const[^const]<div id="class_scriptextension_private_method__get_base_script"></div>

该方法目前没有描述，请帮我们\ :ref:`贡献一个 <doc_updating_the_class_reference>`\ 吧！

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_scriptextension_private_method__get_class_icon_path"></div>

[`String`](class_string.md) **_get_class_icon_path** ( ) virtual[^virtual] const[^const]<div id="class_scriptextension_private_method__get_class_icon_path"></div>

该方法目前没有描述，请帮我们\ :ref:`贡献一个 <doc_updating_the_class_reference>`\ 吧！

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_scriptextension_private_method__get_constants"></div>

[`Dictionary`](class_dictionary.md) **_get_constants** ( ) virtual[^virtual] const[^const]<div id="class_scriptextension_private_method__get_constants"></div>

该方法目前没有描述，请帮我们\ :ref:`贡献一个 <doc_updating_the_class_reference>`\ 吧！

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_scriptextension_private_method__get_documentation"></div>

[Array](class_array.md) [`Dictionary`](class_dictionary.md) **_get_documentation** ( ) virtual[^virtual] const[^const]<div id="class_scriptextension_private_method__get_documentation"></div>

该方法目前没有描述，请帮我们\ :ref:`贡献一个 <doc_updating_the_class_reference>`\ 吧！

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_scriptextension_private_method__get_global_name"></div>

[`StringName`](class_stringname.md) **_get_global_name** ( ) virtual[^virtual] const[^const]<div id="class_scriptextension_private_method__get_global_name"></div>

该方法目前没有描述，请帮我们\ :ref:`贡献一个 <doc_updating_the_class_reference>`\ 吧！

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_scriptextension_private_method__get_instance_base_type"></div>

[`StringName`](class_stringname.md) **_get_instance_base_type** ( ) virtual[^virtual] const[^const]<div id="class_scriptextension_private_method__get_instance_base_type"></div>

该方法目前没有描述，请帮我们\ :ref:`贡献一个 <doc_updating_the_class_reference>`\ 吧！

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_scriptextension_private_method__get_language"></div>

[`ScriptLanguage`](class_scriptlanguage.md) **_get_language** ( ) virtual[^virtual] const[^const]<div id="class_scriptextension_private_method__get_language"></div>

该方法目前没有描述，请帮我们\ :ref:`贡献一个 <doc_updating_the_class_reference>`\ 吧！

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_scriptextension_private_method__get_member_line"></div>

[`int`](class_int.md) **_get_member_line** ( member: [`StringName`](class_stringname.md) ) virtual[^virtual] const[^const]<div id="class_scriptextension_private_method__get_member_line"></div>

该方法目前没有描述，请帮我们\ :ref:`贡献一个 <doc_updating_the_class_reference>`\ 吧！

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_scriptextension_private_method__get_members"></div>

[Array](class_array.md) [`StringName`](class_stringname.md) **_get_members** ( ) virtual[^virtual] const[^const]<div id="class_scriptextension_private_method__get_members"></div>

该方法目前没有描述，请帮我们\ :ref:`贡献一个 <doc_updating_the_class_reference>`\ 吧！

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_scriptextension_private_method__get_method_info"></div>

[`Dictionary`](class_dictionary.md) **_get_method_info** ( method: [`StringName`](class_stringname.md) ) virtual[^virtual] const[^const]<div id="class_scriptextension_private_method__get_method_info"></div>

该方法目前没有描述，请帮我们\ :ref:`贡献一个 <doc_updating_the_class_reference>`\ 吧！

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_scriptextension_private_method__get_property_default_value"></div>

[`Variant`](class_variant.md) **_get_property_default_value** ( property: [`StringName`](class_stringname.md) ) virtual[^virtual] const[^const]<div id="class_scriptextension_private_method__get_property_default_value"></div>

该方法目前没有描述，请帮我们\ :ref:`贡献一个 <doc_updating_the_class_reference>`\ 吧！

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_scriptextension_private_method__get_rpc_config"></div>

[`Variant`](class_variant.md) **_get_rpc_config** ( ) virtual[^virtual] const[^const]<div id="class_scriptextension_private_method__get_rpc_config"></div>

该方法目前没有描述，请帮我们\ :ref:`贡献一个 <doc_updating_the_class_reference>`\ 吧！

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_scriptextension_private_method__get_script_method_argument_count"></div>

[`Variant`](class_variant.md) **_get_script_method_argument_count** ( method: [`StringName`](class_stringname.md) ) virtual[^virtual] const[^const]<div id="class_scriptextension_private_method__get_script_method_argument_count"></div>

Return the expected argument count for the given `method`, or `null` if it can't be determined (which will then fall back to the default behavior).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_scriptextension_private_method__get_script_method_list"></div>

[Array](class_array.md) [`Dictionary`](class_dictionary.md) **_get_script_method_list** ( ) virtual[^virtual] const[^const]<div id="class_scriptextension_private_method__get_script_method_list"></div>

该方法目前没有描述，请帮我们\ :ref:`贡献一个 <doc_updating_the_class_reference>`\ 吧！

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_scriptextension_private_method__get_script_property_list"></div>

[Array](class_array.md) [`Dictionary`](class_dictionary.md) **_get_script_property_list** ( ) virtual[^virtual] const[^const]<div id="class_scriptextension_private_method__get_script_property_list"></div>

该方法目前没有描述，请帮我们\ :ref:`贡献一个 <doc_updating_the_class_reference>`\ 吧！

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_scriptextension_private_method__get_script_signal_list"></div>

[Array](class_array.md) [`Dictionary`](class_dictionary.md) **_get_script_signal_list** ( ) virtual[^virtual] const[^const]<div id="class_scriptextension_private_method__get_script_signal_list"></div>

该方法目前没有描述，请帮我们\ :ref:`贡献一个 <doc_updating_the_class_reference>`\ 吧！

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_scriptextension_private_method__get_source_code"></div>

[`String`](class_string.md) **_get_source_code** ( ) virtual[^virtual] const[^const]<div id="class_scriptextension_private_method__get_source_code"></div>

该方法目前没有描述，请帮我们\ :ref:`贡献一个 <doc_updating_the_class_reference>`\ 吧！

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_scriptextension_private_method__has_method"></div>

[`bool`](class_bool.md) **_has_method** ( method: [`StringName`](class_stringname.md) ) virtual[^virtual] const[^const]<div id="class_scriptextension_private_method__has_method"></div>

该方法目前没有描述，请帮我们\ :ref:`贡献一个 <doc_updating_the_class_reference>`\ 吧！

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_scriptextension_private_method__has_property_default_value"></div>

[`bool`](class_bool.md) **_has_property_default_value** ( property: [`StringName`](class_stringname.md) ) virtual[^virtual] const[^const]<div id="class_scriptextension_private_method__has_property_default_value"></div>

该方法目前没有描述，请帮我们\ :ref:`贡献一个 <doc_updating_the_class_reference>`\ 吧！

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_scriptextension_private_method__has_script_signal"></div>

[`bool`](class_bool.md) **_has_script_signal** ( signal: [`StringName`](class_stringname.md) ) virtual[^virtual] const[^const]<div id="class_scriptextension_private_method__has_script_signal"></div>

该方法目前没有描述，请帮我们\ :ref:`贡献一个 <doc_updating_the_class_reference>`\ 吧！

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_scriptextension_private_method__has_source_code"></div>

[`bool`](class_bool.md) **_has_source_code** ( ) virtual[^virtual] const[^const]<div id="class_scriptextension_private_method__has_source_code"></div>

该方法目前没有描述，请帮我们\ :ref:`贡献一个 <doc_updating_the_class_reference>`\ 吧！

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_scriptextension_private_method__has_static_method"></div>

[`bool`](class_bool.md) **_has_static_method** ( method: [`StringName`](class_stringname.md) ) virtual[^virtual] const[^const]<div id="class_scriptextension_private_method__has_static_method"></div>

该方法目前没有描述，请帮我们\ :ref:`贡献一个 <doc_updating_the_class_reference>`\ 吧！

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_scriptextension_private_method__inherits_script"></div>

[`bool`](class_bool.md) **_inherits_script** ( script: [`Script`](class_script.md) ) virtual[^virtual] const[^const]<div id="class_scriptextension_private_method__inherits_script"></div>

该方法目前没有描述，请帮我们\ :ref:`贡献一个 <doc_updating_the_class_reference>`\ 吧！

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_scriptextension_private_method__instance_create"></div>

`void*` **_instance_create** ( for_object: [`Object`](class_object.md) ) virtual[^virtual] const[^const]<div id="class_scriptextension_private_method__instance_create"></div>

该方法目前没有描述，请帮我们\ :ref:`贡献一个 <doc_updating_the_class_reference>`\ 吧！

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_scriptextension_private_method__instance_has"></div>

[`bool`](class_bool.md) **_instance_has** ( object: [`Object`](class_object.md) ) virtual[^virtual] const[^const]<div id="class_scriptextension_private_method__instance_has"></div>

该方法目前没有描述，请帮我们\ :ref:`贡献一个 <doc_updating_the_class_reference>`\ 吧！

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_scriptextension_private_method__is_abstract"></div>

[`bool`](class_bool.md) **_is_abstract** ( ) virtual[^virtual] const[^const]<div id="class_scriptextension_private_method__is_abstract"></div>

Returns `true` if the script is an abstract script. An abstract script does not have a constructor and cannot be instantiated.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_scriptextension_private_method__is_placeholder_fallback_enabled"></div>

[`bool`](class_bool.md) **_is_placeholder_fallback_enabled** ( ) virtual[^virtual] const[^const]<div id="class_scriptextension_private_method__is_placeholder_fallback_enabled"></div>

该方法目前没有描述，请帮我们\ :ref:`贡献一个 <doc_updating_the_class_reference>`\ 吧！

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_scriptextension_private_method__is_tool"></div>

[`bool`](class_bool.md) **_is_tool** ( ) virtual[^virtual] const[^const]<div id="class_scriptextension_private_method__is_tool"></div>

该方法目前没有描述，请帮我们\ :ref:`贡献一个 <doc_updating_the_class_reference>`\ 吧！

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_scriptextension_private_method__is_valid"></div>

[`bool`](class_bool.md) **_is_valid** ( ) virtual[^virtual] const[^const]<div id="class_scriptextension_private_method__is_valid"></div>

该方法目前没有描述，请帮我们\ :ref:`贡献一个 <doc_updating_the_class_reference>`\ 吧！

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_scriptextension_private_method__placeholder_erased"></div>

`void` **_placeholder_erased** ( placeholder: `void*` ) virtual[^virtual]<div id="class_scriptextension_private_method__placeholder_erased"></div>

该方法目前没有描述，请帮我们\ :ref:`贡献一个 <doc_updating_the_class_reference>`\ 吧！

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_scriptextension_private_method__placeholder_instance_create"></div>

`void*` **_placeholder_instance_create** ( for_object: [`Object`](class_object.md) ) virtual[^virtual] const[^const]<div id="class_scriptextension_private_method__placeholder_instance_create"></div>

该方法目前没有描述，请帮我们\ :ref:`贡献一个 <doc_updating_the_class_reference>`\ 吧！

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_scriptextension_private_method__reload"></div>

[Error](#enum_@globalscope_error) **_reload** ( keep_state: [`bool`](class_bool.md) ) virtual[^virtual]<div id="class_scriptextension_private_method__reload"></div>

该方法目前没有描述，请帮我们\ :ref:`贡献一个 <doc_updating_the_class_reference>`\ 吧！

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_scriptextension_private_method__set_source_code"></div>

`void` **_set_source_code** ( code: [`String`](class_string.md) ) virtual[^virtual]<div id="class_scriptextension_private_method__set_source_code"></div>

该方法目前没有描述，请帮我们\ :ref:`贡献一个 <doc_updating_the_class_reference>`\ 吧！

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_scriptextension_private_method__update_exports"></div>

`void` **_update_exports** ( ) virtual[^virtual]<div id="class_scriptextension_private_method__update_exports"></div>

该方法目前没有描述，请帮我们\ :ref:`贡献一个 <doc_updating_the_class_reference>`\ 吧！

[^virtual]: 本方法通常需要用户覆盖才能生效。
[^const]: 本方法无副作用，不会修改该实例的任何成员变量。
[^vararg]: 本方法除了能接受在此处描述的参数外，还能够继续接受任意数量的参数。
[^constructor]: 本方法用于构造某个类型。
[^static]: 调用本方法无需实例，可直接使用类名进行调用。
[^operator]: 本方法描述的是使用本类型作为左操作数的有效运算符。
[^bitfield]: 这个值是由下列位标志构成位掩码的整数。
[^void]: 无返回值。
