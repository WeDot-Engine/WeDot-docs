<!-- ⚠ 请勿编辑本文件 ⚠ -->
<!-- 本文档使用脚本从 WeDot 引擎源码仓库生成。 -->
<!-- 生成脚本：https://github.com/WeDot-Engine/WeDot/tree/master/doc/tools/make_md.py； -->
<!-- 原文件：https://github.com/WeDot-Engine/WeDot/tree/master/doc/classes/ScriptLanguageExtension.xml。 -->

<div id="_class_scriptlanguageextension"></div>

# ScriptLanguageExtension

**继承：** [`ScriptLanguage`](class_scriptlanguage.md) **<** [`Object`](class_object.md)

该类目前没有描述，请帮我们\ :ref:`贡献一个 <doc_updating_the_class_reference>`\ 吧！

## 方法

|||
|:-:|:--|
| `void`                                                      | [`_add_global_constant`](class_scriptlanguageextension.md#class_scriptlanguageextension_private_method__add_global_constant) ( name: [`StringName`](class_stringname.md), value: [`Variant`](class_variant.md) ) virtual[^virtual]                                                                                                                                                                 |
| `void`                                                      | [`_add_named_global_constant`](class_scriptlanguageextension.md#class_scriptlanguageextension_private_method__add_named_global_constant) ( name: [`StringName`](class_stringname.md), value: [`Variant`](class_variant.md) ) virtual[^virtual]                                                                                                                                                     |
| [`String`](class_string.md)                                 | [`_auto_indent_code`](class_scriptlanguageextension.md#class_scriptlanguageextension_private_method__auto_indent_code) ( code: [`String`](class_string.md), from_line: [`int`](class_int.md), to_line: [`int`](class_int.md) ) virtual[^virtual] const[^const]                                                                                                                                     |
| [`bool`](class_bool.md)                                     | [`_can_inherit_from_file`](class_scriptlanguageextension.md#class_scriptlanguageextension_private_method__can_inherit_from_file) ( ) virtual[^virtual] const[^const]                                                                                                                                                                                                                               |
| [`bool`](class_bool.md)                                     | [`_can_make_function`](class_scriptlanguageextension.md#class_scriptlanguageextension_private_method__can_make_function) ( ) virtual[^virtual] const[^const]                                                                                                                                                                                                                                       |
| [`Dictionary`](class_dictionary.md)                         | [`_complete_code`](class_scriptlanguageextension.md#class_scriptlanguageextension_private_method__complete_code) ( code: [`String`](class_string.md), path: [`String`](class_string.md), owner: [`Object`](class_object.md) ) virtual[^virtual] const[^const]                                                                                                                                      |
| [`Object`](class_object.md)                                 | [`_create_script`](class_scriptlanguageextension.md#class_scriptlanguageextension_private_method__create_script) ( ) virtual[^virtual] const[^const]                                                                                                                                                                                                                                               |
| [Array](class_array.md) [`Dictionary`](class_dictionary.md) | [`_debug_get_current_stack_info`](class_scriptlanguageextension.md#class_scriptlanguageextension_private_method__debug_get_current_stack_info) ( ) virtual[^virtual]                                                                                                                                                                                                                               |
| [`String`](class_string.md)                                 | [`_debug_get_error`](class_scriptlanguageextension.md#class_scriptlanguageextension_private_method__debug_get_error) ( ) virtual[^virtual] const[^const]                                                                                                                                                                                                                                           |
| [`Dictionary`](class_dictionary.md)                         | [`_debug_get_globals`](class_scriptlanguageextension.md#class_scriptlanguageextension_private_method__debug_get_globals) ( max_subitems: [`int`](class_int.md), max_depth: [`int`](class_int.md) ) virtual[^virtual]                                                                                                                                                                               |
| [`int`](class_int.md)                                       | [`_debug_get_stack_level_count`](class_scriptlanguageextension.md#class_scriptlanguageextension_private_method__debug_get_stack_level_count) ( ) virtual[^virtual] const[^const]                                                                                                                                                                                                                   |
| [`String`](class_string.md)                                 | [`_debug_get_stack_level_function`](class_scriptlanguageextension.md#class_scriptlanguageextension_private_method__debug_get_stack_level_function) ( level: [`int`](class_int.md) ) virtual[^virtual] const[^const]                                                                                                                                                                                |
| `void*`                                                     | [`_debug_get_stack_level_instance`](class_scriptlanguageextension.md#class_scriptlanguageextension_private_method__debug_get_stack_level_instance) ( level: [`int`](class_int.md) ) virtual[^virtual]                                                                                                                                                                                              |
| [`int`](class_int.md)                                       | [`_debug_get_stack_level_line`](class_scriptlanguageextension.md#class_scriptlanguageextension_private_method__debug_get_stack_level_line) ( level: [`int`](class_int.md) ) virtual[^virtual] const[^const]                                                                                                                                                                                        |
| [`Dictionary`](class_dictionary.md)                         | [`_debug_get_stack_level_locals`](class_scriptlanguageextension.md#class_scriptlanguageextension_private_method__debug_get_stack_level_locals) ( level: [`int`](class_int.md), max_subitems: [`int`](class_int.md), max_depth: [`int`](class_int.md) ) virtual[^virtual]                                                                                                                           |
| [`Dictionary`](class_dictionary.md)                         | [`_debug_get_stack_level_members`](class_scriptlanguageextension.md#class_scriptlanguageextension_private_method__debug_get_stack_level_members) ( level: [`int`](class_int.md), max_subitems: [`int`](class_int.md), max_depth: [`int`](class_int.md) ) virtual[^virtual]                                                                                                                         |
| [`String`](class_string.md)                                 | [`_debug_get_stack_level_source`](class_scriptlanguageextension.md#class_scriptlanguageextension_private_method__debug_get_stack_level_source) ( level: [`int`](class_int.md) ) virtual[^virtual] const[^const]                                                                                                                                                                                    |
| [`String`](class_string.md)                                 | [`_debug_parse_stack_level_expression`](class_scriptlanguageextension.md#class_scriptlanguageextension_private_method__debug_parse_stack_level_expression) ( level: [`int`](class_int.md), expression: [`String`](class_string.md), max_subitems: [`int`](class_int.md), max_depth: [`int`](class_int.md) ) virtual[^virtual]                                                                      |
| [`int`](class_int.md)                                       | [`_find_function`](class_scriptlanguageextension.md#class_scriptlanguageextension_private_method__find_function) ( function: [`String`](class_string.md), code: [`String`](class_string.md) ) virtual[^virtual] const[^const]                                                                                                                                                                      |
| `void`                                                      | [`_finish`](class_scriptlanguageextension.md#class_scriptlanguageextension_private_method__finish) ( ) virtual[^virtual]                                                                                                                                                                                                                                                                           |
| `void`                                                      | [`_frame`](class_scriptlanguageextension.md#class_scriptlanguageextension_private_method__frame) ( ) virtual[^virtual]                                                                                                                                                                                                                                                                             |
| [Array](class_array.md) [`Dictionary`](class_dictionary.md) | [`_get_built_in_templates`](class_scriptlanguageextension.md#class_scriptlanguageextension_private_method__get_built_in_templates) ( object: [`StringName`](class_stringname.md) ) virtual[^virtual] const[^const]                                                                                                                                                                                 |
| [`PackedStringArray`](class_packedstringarray.md)           | [`_get_comment_delimiters`](class_scriptlanguageextension.md#class_scriptlanguageextension_private_method__get_comment_delimiters) ( ) virtual[^virtual] const[^const]                                                                                                                                                                                                                             |
| [`PackedStringArray`](class_packedstringarray.md)           | [`_get_doc_comment_delimiters`](class_scriptlanguageextension.md#class_scriptlanguageextension_private_method__get_doc_comment_delimiters) ( ) virtual[^virtual] const[^const]                                                                                                                                                                                                                     |
| [`String`](class_string.md)                                 | [`_get_extension`](class_scriptlanguageextension.md#class_scriptlanguageextension_private_method__get_extension) ( ) virtual[^virtual] const[^const]                                                                                                                                                                                                                                               |
| [`Dictionary`](class_dictionary.md)                         | [`_get_global_class_name`](class_scriptlanguageextension.md#class_scriptlanguageextension_private_method__get_global_class_name) ( path: [`String`](class_string.md) ) virtual[^virtual] const[^const]                                                                                                                                                                                             |
| [`String`](class_string.md)                                 | [`_get_name`](class_scriptlanguageextension.md#class_scriptlanguageextension_private_method__get_name) ( ) virtual[^virtual] const[^const]                                                                                                                                                                                                                                                         |
| [Array](class_array.md) [`Dictionary`](class_dictionary.md) | [`_get_public_annotations`](class_scriptlanguageextension.md#class_scriptlanguageextension_private_method__get_public_annotations) ( ) virtual[^virtual] const[^const]                                                                                                                                                                                                                             |
| [`Dictionary`](class_dictionary.md)                         | [`_get_public_constants`](class_scriptlanguageextension.md#class_scriptlanguageextension_private_method__get_public_constants) ( ) virtual[^virtual] const[^const]                                                                                                                                                                                                                                 |
| [Array](class_array.md) [`Dictionary`](class_dictionary.md) | [`_get_public_functions`](class_scriptlanguageextension.md#class_scriptlanguageextension_private_method__get_public_functions) ( ) virtual[^virtual] const[^const]                                                                                                                                                                                                                                 |
| [`PackedStringArray`](class_packedstringarray.md)           | [`_get_recognized_extensions`](class_scriptlanguageextension.md#class_scriptlanguageextension_private_method__get_recognized_extensions) ( ) virtual[^virtual] const[^const]                                                                                                                                                                                                                       |
| [`PackedStringArray`](class_packedstringarray.md)           | [`_get_reserved_words`](class_scriptlanguageextension.md#class_scriptlanguageextension_private_method__get_reserved_words) ( ) virtual[^virtual] const[^const]                                                                                                                                                                                                                                     |
| [`PackedStringArray`](class_packedstringarray.md)           | [`_get_string_delimiters`](class_scriptlanguageextension.md#class_scriptlanguageextension_private_method__get_string_delimiters) ( ) virtual[^virtual] const[^const]                                                                                                                                                                                                                               |
| [`String`](class_string.md)                                 | [`_get_type`](class_scriptlanguageextension.md#class_scriptlanguageextension_private_method__get_type) ( ) virtual[^virtual] const[^const]                                                                                                                                                                                                                                                         |
| [`bool`](class_bool.md)                                     | [`_handles_global_class_type`](class_scriptlanguageextension.md#class_scriptlanguageextension_private_method__handles_global_class_type) ( type: [`String`](class_string.md) ) virtual[^virtual] const[^const]                                                                                                                                                                                     |
| [`bool`](class_bool.md)                                     | [`_has_named_classes`](class_scriptlanguageextension.md#class_scriptlanguageextension_private_method__has_named_classes) ( ) virtual[^virtual] const[^const]                                                                                                                                                                                                                                       |
| `void`                                                      | [`_init`](class_scriptlanguageextension.md#class_scriptlanguageextension_private_method__init) ( ) virtual[^virtual]                                                                                                                                                                                                                                                                               |
| [`bool`](class_bool.md)                                     | [`_is_control_flow_keyword`](class_scriptlanguageextension.md#class_scriptlanguageextension_private_method__is_control_flow_keyword) ( keyword: [`String`](class_string.md) ) virtual[^virtual] const[^const]                                                                                                                                                                                      |
| [`bool`](class_bool.md)                                     | [`_is_using_templates`](class_scriptlanguageextension.md#class_scriptlanguageextension_private_method__is_using_templates) ( ) virtual[^virtual]                                                                                                                                                                                                                                                   |
| [`Dictionary`](class_dictionary.md)                         | [`_lookup_code`](class_scriptlanguageextension.md#class_scriptlanguageextension_private_method__lookup_code) ( code: [`String`](class_string.md), symbol: [`String`](class_string.md), path: [`String`](class_string.md), owner: [`Object`](class_object.md) ) virtual[^virtual] const[^const]                                                                                                     |
| [`String`](class_string.md)                                 | [`_make_function`](class_scriptlanguageextension.md#class_scriptlanguageextension_private_method__make_function) ( class_name: [`String`](class_string.md), function_name: [`String`](class_string.md), function_args: [`PackedStringArray`](class_packedstringarray.md) ) virtual[^virtual] const[^const]                                                                                         |
| [`Script`](class_script.md)                                 | [`_make_template`](class_scriptlanguageextension.md#class_scriptlanguageextension_private_method__make_template) ( template: [`String`](class_string.md), class_name: [`String`](class_string.md), base_class_name: [`String`](class_string.md) ) virtual[^virtual] const[^const]                                                                                                                  |
| [Error](#enum_@globalscope_error)                           | [`_open_in_external_editor`](class_scriptlanguageextension.md#class_scriptlanguageextension_private_method__open_in_external_editor) ( script: [`Script`](class_script.md), line: [`int`](class_int.md), column: [`int`](class_int.md) ) virtual[^virtual]                                                                                                                                         |
| [`bool`](class_bool.md)                                     | [`_overrides_external_editor`](class_scriptlanguageextension.md#class_scriptlanguageextension_private_method__overrides_external_editor) ( ) virtual[^virtual]                                                                                                                                                                                                                                     |
| [ScriptNameCasing](#enum_scriptlanguage_scriptnamecasing)   | [`_preferred_file_name_casing`](class_scriptlanguageextension.md#class_scriptlanguageextension_private_method__preferred_file_name_casing) ( ) virtual[^virtual] const[^const]                                                                                                                                                                                                                     |
| [`int`](class_int.md)                                       | [`_profiling_get_accumulated_data`](class_scriptlanguageextension.md#class_scriptlanguageextension_private_method__profiling_get_accumulated_data) ( info_array: `ScriptLanguageExtensionProfilingInfo*`, info_max: [`int`](class_int.md) ) virtual[^virtual]                                                                                                                                      |
| [`int`](class_int.md)                                       | [`_profiling_get_frame_data`](class_scriptlanguageextension.md#class_scriptlanguageextension_private_method__profiling_get_frame_data) ( info_array: `ScriptLanguageExtensionProfilingInfo*`, info_max: [`int`](class_int.md) ) virtual[^virtual]                                                                                                                                                  |
| `void`                                                      | [`_profiling_set_save_native_calls`](class_scriptlanguageextension.md#class_scriptlanguageextension_private_method__profiling_set_save_native_calls) ( enable: [`bool`](class_bool.md) ) virtual[^virtual]                                                                                                                                                                                         |
| `void`                                                      | [`_profiling_start`](class_scriptlanguageextension.md#class_scriptlanguageextension_private_method__profiling_start) ( ) virtual[^virtual]                                                                                                                                                                                                                                                         |
| `void`                                                      | [`_profiling_stop`](class_scriptlanguageextension.md#class_scriptlanguageextension_private_method__profiling_stop) ( ) virtual[^virtual]                                                                                                                                                                                                                                                           |
| `void`                                                      | [`_reload_all_scripts`](class_scriptlanguageextension.md#class_scriptlanguageextension_private_method__reload_all_scripts) ( ) virtual[^virtual]                                                                                                                                                                                                                                                   |
| `void`                                                      | [`_reload_scripts`](class_scriptlanguageextension.md#class_scriptlanguageextension_private_method__reload_scripts) ( scripts: [`Array`](class_array.md), soft_reload: [`bool`](class_bool.md) ) virtual[^virtual]                                                                                                                                                                                  |
| `void`                                                      | [`_reload_tool_script`](class_scriptlanguageextension.md#class_scriptlanguageextension_private_method__reload_tool_script) ( script: [`Script`](class_script.md), soft_reload: [`bool`](class_bool.md) ) virtual[^virtual]                                                                                                                                                                         |
| `void`                                                      | [`_remove_named_global_constant`](class_scriptlanguageextension.md#class_scriptlanguageextension_private_method__remove_named_global_constant) ( name: [`StringName`](class_stringname.md) ) virtual[^virtual]                                                                                                                                                                                     |
| [`bool`](class_bool.md)                                     | [`_supports_builtin_mode`](class_scriptlanguageextension.md#class_scriptlanguageextension_private_method__supports_builtin_mode) ( ) virtual[^virtual] const[^const]                                                                                                                                                                                                                               |
| [`bool`](class_bool.md)                                     | [`_supports_documentation`](class_scriptlanguageextension.md#class_scriptlanguageextension_private_method__supports_documentation) ( ) virtual[^virtual] const[^const]                                                                                                                                                                                                                             |
| `void`                                                      | [`_thread_enter`](class_scriptlanguageextension.md#class_scriptlanguageextension_private_method__thread_enter) ( ) virtual[^virtual]                                                                                                                                                                                                                                                               |
| `void`                                                      | [`_thread_exit`](class_scriptlanguageextension.md#class_scriptlanguageextension_private_method__thread_exit) ( ) virtual[^virtual]                                                                                                                                                                                                                                                                 |
| [`Dictionary`](class_dictionary.md)                         | [`_validate`](class_scriptlanguageextension.md#class_scriptlanguageextension_private_method__validate) ( script: [`String`](class_string.md), path: [`String`](class_string.md), validate_functions: [`bool`](class_bool.md), validate_errors: [`bool`](class_bool.md), validate_warnings: [`bool`](class_bool.md), validate_safe_lines: [`bool`](class_bool.md) ) virtual[^virtual] const[^const] |
| [`String`](class_string.md)                                 | [`_validate_path`](class_scriptlanguageextension.md#class_scriptlanguageextension_private_method__validate_path) ( path: [`String`](class_string.md) ) virtual[^virtual] const[^const]                                                                                                                                                                                                             |

<!-- rst-class:: classref-section-separator -->

---

## 枚举

<div id="_class_enum_scriptlanguageextension_lookupresulttype"></div>

enum **LookupResultType**: <div id="enum_scriptlanguageextension_lookupresulttype"></div>

<div id="_class_scriptlanguageextension_constant_lookup_result_script_location"></div>

[LookupResultType](#enum_scriptlanguageextension_lookupresulttype) **LOOKUP_RESULT_SCRIPT_LOCATION** = ``0``

该枚举目前没有描述，请帮我们\ :ref:`贡献一个 <doc_updating_the_class_reference>`\ 吧！



<div id="_class_scriptlanguageextension_constant_lookup_result_class"></div>

[LookupResultType](#enum_scriptlanguageextension_lookupresulttype) **LOOKUP_RESULT_CLASS** = ``1``

该枚举目前没有描述，请帮我们\ :ref:`贡献一个 <doc_updating_the_class_reference>`\ 吧！



<div id="_class_scriptlanguageextension_constant_lookup_result_class_constant"></div>

[LookupResultType](#enum_scriptlanguageextension_lookupresulttype) **LOOKUP_RESULT_CLASS_CONSTANT** = ``2``

该枚举目前没有描述，请帮我们\ :ref:`贡献一个 <doc_updating_the_class_reference>`\ 吧！



<div id="_class_scriptlanguageextension_constant_lookup_result_class_property"></div>

[LookupResultType](#enum_scriptlanguageextension_lookupresulttype) **LOOKUP_RESULT_CLASS_PROPERTY** = ``3``

该枚举目前没有描述，请帮我们\ :ref:`贡献一个 <doc_updating_the_class_reference>`\ 吧！



<div id="_class_scriptlanguageextension_constant_lookup_result_class_method"></div>

[LookupResultType](#enum_scriptlanguageextension_lookupresulttype) **LOOKUP_RESULT_CLASS_METHOD** = ``4``

该枚举目前没有描述，请帮我们\ :ref:`贡献一个 <doc_updating_the_class_reference>`\ 吧！



<div id="_class_scriptlanguageextension_constant_lookup_result_class_signal"></div>

[LookupResultType](#enum_scriptlanguageextension_lookupresulttype) **LOOKUP_RESULT_CLASS_SIGNAL** = ``5``

该枚举目前没有描述，请帮我们\ :ref:`贡献一个 <doc_updating_the_class_reference>`\ 吧！



<div id="_class_scriptlanguageextension_constant_lookup_result_class_enum"></div>

[LookupResultType](#enum_scriptlanguageextension_lookupresulttype) **LOOKUP_RESULT_CLASS_ENUM** = ``6``

该枚举目前没有描述，请帮我们\ :ref:`贡献一个 <doc_updating_the_class_reference>`\ 吧！



<div id="_class_scriptlanguageextension_constant_lookup_result_class_tbd_globalscope"></div>

[LookupResultType](#enum_scriptlanguageextension_lookupresulttype) **LOOKUP_RESULT_CLASS_TBD_GLOBALSCOPE** = ``7``

该枚举目前没有描述，请帮我们\ :ref:`贡献一个 <doc_updating_the_class_reference>`\ 吧！



<div id="_class_scriptlanguageextension_constant_lookup_result_class_annotation"></div>

[LookupResultType](#enum_scriptlanguageextension_lookupresulttype) **LOOKUP_RESULT_CLASS_ANNOTATION** = ``8``

该枚举目前没有描述，请帮我们\ :ref:`贡献一个 <doc_updating_the_class_reference>`\ 吧！



<div id="_class_scriptlanguageextension_constant_lookup_result_max"></div>

[LookupResultType](#enum_scriptlanguageextension_lookupresulttype) **LOOKUP_RESULT_MAX** = ``9``

该枚举目前没有描述，请帮我们\ :ref:`贡献一个 <doc_updating_the_class_reference>`\ 吧！



<!-- rst-class:: classref-item-separator -->

---

<div id="_class_enum_scriptlanguageextension_codecompletionlocation"></div>

enum **CodeCompletionLocation**: <div id="enum_scriptlanguageextension_codecompletionlocation"></div>

<div id="_class_scriptlanguageextension_constant_location_local"></div>

[CodeCompletionLocation](#enum_scriptlanguageextension_codecompletionlocation) **LOCATION_LOCAL** = ``0``

The option is local to the location of the code completion query - e.g. a local variable. Subsequent value of location represent options from the outer class, the exact value represent how far they are (in terms of inner classes).

<div id="_class_scriptlanguageextension_constant_location_parent_mask"></div>

[CodeCompletionLocation](#enum_scriptlanguageextension_codecompletionlocation) **LOCATION_PARENT_MASK** = ``256``

The option is from the containing class or a parent class, relative to the location of the code completion query. Perform a bitwise OR with the class depth (e.g. `0` for the local class, `1` for the parent, `2` for the grandparent, etc.) to store the depth of an option in the class or a parent class.

<div id="_class_scriptlanguageextension_constant_location_other_user_code"></div>

[CodeCompletionLocation](#enum_scriptlanguageextension_codecompletionlocation) **LOCATION_OTHER_USER_CODE** = ``512``

The option is from user code which is not local and not in a derived class (e.g. Autoload Singletons).

<div id="_class_scriptlanguageextension_constant_location_other"></div>

[CodeCompletionLocation](#enum_scriptlanguageextension_codecompletionlocation) **LOCATION_OTHER** = ``1024``

The option is from other engine code, not covered by the other enum constants - e.g. built-in classes.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_enum_scriptlanguageextension_codecompletionkind"></div>

enum **CodeCompletionKind**: <div id="enum_scriptlanguageextension_codecompletionkind"></div>

<div id="_class_scriptlanguageextension_constant_code_completion_kind_class"></div>

[CodeCompletionKind](#enum_scriptlanguageextension_codecompletionkind) **CODE_COMPLETION_KIND_CLASS** = ``0``

该枚举目前没有描述，请帮我们\ :ref:`贡献一个 <doc_updating_the_class_reference>`\ 吧！



<div id="_class_scriptlanguageextension_constant_code_completion_kind_function"></div>

[CodeCompletionKind](#enum_scriptlanguageextension_codecompletionkind) **CODE_COMPLETION_KIND_FUNCTION** = ``1``

该枚举目前没有描述，请帮我们\ :ref:`贡献一个 <doc_updating_the_class_reference>`\ 吧！



<div id="_class_scriptlanguageextension_constant_code_completion_kind_signal"></div>

[CodeCompletionKind](#enum_scriptlanguageextension_codecompletionkind) **CODE_COMPLETION_KIND_SIGNAL** = ``2``

该枚举目前没有描述，请帮我们\ :ref:`贡献一个 <doc_updating_the_class_reference>`\ 吧！



<div id="_class_scriptlanguageextension_constant_code_completion_kind_variable"></div>

[CodeCompletionKind](#enum_scriptlanguageextension_codecompletionkind) **CODE_COMPLETION_KIND_VARIABLE** = ``3``

该枚举目前没有描述，请帮我们\ :ref:`贡献一个 <doc_updating_the_class_reference>`\ 吧！



<div id="_class_scriptlanguageextension_constant_code_completion_kind_member"></div>

[CodeCompletionKind](#enum_scriptlanguageextension_codecompletionkind) **CODE_COMPLETION_KIND_MEMBER** = ``4``

该枚举目前没有描述，请帮我们\ :ref:`贡献一个 <doc_updating_the_class_reference>`\ 吧！



<div id="_class_scriptlanguageextension_constant_code_completion_kind_enum"></div>

[CodeCompletionKind](#enum_scriptlanguageextension_codecompletionkind) **CODE_COMPLETION_KIND_ENUM** = ``5``

该枚举目前没有描述，请帮我们\ :ref:`贡献一个 <doc_updating_the_class_reference>`\ 吧！



<div id="_class_scriptlanguageextension_constant_code_completion_kind_constant"></div>

[CodeCompletionKind](#enum_scriptlanguageextension_codecompletionkind) **CODE_COMPLETION_KIND_CONSTANT** = ``6``

该枚举目前没有描述，请帮我们\ :ref:`贡献一个 <doc_updating_the_class_reference>`\ 吧！



<div id="_class_scriptlanguageextension_constant_code_completion_kind_node_path"></div>

[CodeCompletionKind](#enum_scriptlanguageextension_codecompletionkind) **CODE_COMPLETION_KIND_NODE_PATH** = ``7``

该枚举目前没有描述，请帮我们\ :ref:`贡献一个 <doc_updating_the_class_reference>`\ 吧！



<div id="_class_scriptlanguageextension_constant_code_completion_kind_file_path"></div>

[CodeCompletionKind](#enum_scriptlanguageextension_codecompletionkind) **CODE_COMPLETION_KIND_FILE_PATH** = ``8``

该枚举目前没有描述，请帮我们\ :ref:`贡献一个 <doc_updating_the_class_reference>`\ 吧！



<div id="_class_scriptlanguageextension_constant_code_completion_kind_plain_text"></div>

[CodeCompletionKind](#enum_scriptlanguageextension_codecompletionkind) **CODE_COMPLETION_KIND_PLAIN_TEXT** = ``9``

该枚举目前没有描述，请帮我们\ :ref:`贡献一个 <doc_updating_the_class_reference>`\ 吧！



<div id="_class_scriptlanguageextension_constant_code_completion_kind_max"></div>

[CodeCompletionKind](#enum_scriptlanguageextension_codecompletionkind) **CODE_COMPLETION_KIND_MAX** = ``10``

该枚举目前没有描述，请帮我们\ :ref:`贡献一个 <doc_updating_the_class_reference>`\ 吧！



<!-- rst-class:: classref-section-separator -->

---

## 方法说明

<div id="_class_scriptlanguageextension_private_method__add_global_constant"></div>

`void` **_add_global_constant** ( name: [`StringName`](class_stringname.md), value: [`Variant`](class_variant.md) ) virtual[^virtual]<div id="class_scriptlanguageextension_private_method__add_global_constant"></div>

该方法目前没有描述，请帮我们\ :ref:`贡献一个 <doc_updating_the_class_reference>`\ 吧！

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_scriptlanguageextension_private_method__add_named_global_constant"></div>

`void` **_add_named_global_constant** ( name: [`StringName`](class_stringname.md), value: [`Variant`](class_variant.md) ) virtual[^virtual]<div id="class_scriptlanguageextension_private_method__add_named_global_constant"></div>

该方法目前没有描述，请帮我们\ :ref:`贡献一个 <doc_updating_the_class_reference>`\ 吧！

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_scriptlanguageextension_private_method__auto_indent_code"></div>

[`String`](class_string.md) **_auto_indent_code** ( code: [`String`](class_string.md), from_line: [`int`](class_int.md), to_line: [`int`](class_int.md) ) virtual[^virtual] const[^const]<div id="class_scriptlanguageextension_private_method__auto_indent_code"></div>

该方法目前没有描述，请帮我们\ :ref:`贡献一个 <doc_updating_the_class_reference>`\ 吧！

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_scriptlanguageextension_private_method__can_inherit_from_file"></div>

[`bool`](class_bool.md) **_can_inherit_from_file** ( ) virtual[^virtual] const[^const]<div id="class_scriptlanguageextension_private_method__can_inherit_from_file"></div>

该方法目前没有描述，请帮我们\ :ref:`贡献一个 <doc_updating_the_class_reference>`\ 吧！

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_scriptlanguageextension_private_method__can_make_function"></div>

[`bool`](class_bool.md) **_can_make_function** ( ) virtual[^virtual] const[^const]<div id="class_scriptlanguageextension_private_method__can_make_function"></div>

该方法目前没有描述，请帮我们\ :ref:`贡献一个 <doc_updating_the_class_reference>`\ 吧！

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_scriptlanguageextension_private_method__complete_code"></div>

[`Dictionary`](class_dictionary.md) **_complete_code** ( code: [`String`](class_string.md), path: [`String`](class_string.md), owner: [`Object`](class_object.md) ) virtual[^virtual] const[^const]<div id="class_scriptlanguageextension_private_method__complete_code"></div>

该方法目前没有描述，请帮我们\ :ref:`贡献一个 <doc_updating_the_class_reference>`\ 吧！

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_scriptlanguageextension_private_method__create_script"></div>

[`Object`](class_object.md) **_create_script** ( ) virtual[^virtual] const[^const]<div id="class_scriptlanguageextension_private_method__create_script"></div>

该方法目前没有描述，请帮我们\ :ref:`贡献一个 <doc_updating_the_class_reference>`\ 吧！

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_scriptlanguageextension_private_method__debug_get_current_stack_info"></div>

[Array](class_array.md) [`Dictionary`](class_dictionary.md) **_debug_get_current_stack_info** ( ) virtual[^virtual]<div id="class_scriptlanguageextension_private_method__debug_get_current_stack_info"></div>

该方法目前没有描述，请帮我们\ :ref:`贡献一个 <doc_updating_the_class_reference>`\ 吧！

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_scriptlanguageextension_private_method__debug_get_error"></div>

[`String`](class_string.md) **_debug_get_error** ( ) virtual[^virtual] const[^const]<div id="class_scriptlanguageextension_private_method__debug_get_error"></div>

该方法目前没有描述，请帮我们\ :ref:`贡献一个 <doc_updating_the_class_reference>`\ 吧！

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_scriptlanguageextension_private_method__debug_get_globals"></div>

[`Dictionary`](class_dictionary.md) **_debug_get_globals** ( max_subitems: [`int`](class_int.md), max_depth: [`int`](class_int.md) ) virtual[^virtual]<div id="class_scriptlanguageextension_private_method__debug_get_globals"></div>

该方法目前没有描述，请帮我们\ :ref:`贡献一个 <doc_updating_the_class_reference>`\ 吧！

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_scriptlanguageextension_private_method__debug_get_stack_level_count"></div>

[`int`](class_int.md) **_debug_get_stack_level_count** ( ) virtual[^virtual] const[^const]<div id="class_scriptlanguageextension_private_method__debug_get_stack_level_count"></div>

该方法目前没有描述，请帮我们\ :ref:`贡献一个 <doc_updating_the_class_reference>`\ 吧！

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_scriptlanguageextension_private_method__debug_get_stack_level_function"></div>

[`String`](class_string.md) **_debug_get_stack_level_function** ( level: [`int`](class_int.md) ) virtual[^virtual] const[^const]<div id="class_scriptlanguageextension_private_method__debug_get_stack_level_function"></div>

该方法目前没有描述，请帮我们\ :ref:`贡献一个 <doc_updating_the_class_reference>`\ 吧！

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_scriptlanguageextension_private_method__debug_get_stack_level_instance"></div>

`void*` **_debug_get_stack_level_instance** ( level: [`int`](class_int.md) ) virtual[^virtual]<div id="class_scriptlanguageextension_private_method__debug_get_stack_level_instance"></div>

该方法目前没有描述，请帮我们\ :ref:`贡献一个 <doc_updating_the_class_reference>`\ 吧！

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_scriptlanguageextension_private_method__debug_get_stack_level_line"></div>

[`int`](class_int.md) **_debug_get_stack_level_line** ( level: [`int`](class_int.md) ) virtual[^virtual] const[^const]<div id="class_scriptlanguageextension_private_method__debug_get_stack_level_line"></div>

该方法目前没有描述，请帮我们\ :ref:`贡献一个 <doc_updating_the_class_reference>`\ 吧！

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_scriptlanguageextension_private_method__debug_get_stack_level_locals"></div>

[`Dictionary`](class_dictionary.md) **_debug_get_stack_level_locals** ( level: [`int`](class_int.md), max_subitems: [`int`](class_int.md), max_depth: [`int`](class_int.md) ) virtual[^virtual]<div id="class_scriptlanguageextension_private_method__debug_get_stack_level_locals"></div>

该方法目前没有描述，请帮我们\ :ref:`贡献一个 <doc_updating_the_class_reference>`\ 吧！

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_scriptlanguageextension_private_method__debug_get_stack_level_members"></div>

[`Dictionary`](class_dictionary.md) **_debug_get_stack_level_members** ( level: [`int`](class_int.md), max_subitems: [`int`](class_int.md), max_depth: [`int`](class_int.md) ) virtual[^virtual]<div id="class_scriptlanguageextension_private_method__debug_get_stack_level_members"></div>

该方法目前没有描述，请帮我们\ :ref:`贡献一个 <doc_updating_the_class_reference>`\ 吧！

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_scriptlanguageextension_private_method__debug_get_stack_level_source"></div>

[`String`](class_string.md) **_debug_get_stack_level_source** ( level: [`int`](class_int.md) ) virtual[^virtual] const[^const]<div id="class_scriptlanguageextension_private_method__debug_get_stack_level_source"></div>

Returns the source associated with a given debug stack position.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_scriptlanguageextension_private_method__debug_parse_stack_level_expression"></div>

[`String`](class_string.md) **_debug_parse_stack_level_expression** ( level: [`int`](class_int.md), expression: [`String`](class_string.md), max_subitems: [`int`](class_int.md), max_depth: [`int`](class_int.md) ) virtual[^virtual]<div id="class_scriptlanguageextension_private_method__debug_parse_stack_level_expression"></div>

该方法目前没有描述，请帮我们\ :ref:`贡献一个 <doc_updating_the_class_reference>`\ 吧！

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_scriptlanguageextension_private_method__find_function"></div>

[`int`](class_int.md) **_find_function** ( function: [`String`](class_string.md), code: [`String`](class_string.md) ) virtual[^virtual] const[^const]<div id="class_scriptlanguageextension_private_method__find_function"></div>

Returns the line where the function is defined in the code, or `-1` if the function is not present.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_scriptlanguageextension_private_method__finish"></div>

`void` **_finish** ( ) virtual[^virtual]<div id="class_scriptlanguageextension_private_method__finish"></div>

该方法目前没有描述，请帮我们\ :ref:`贡献一个 <doc_updating_the_class_reference>`\ 吧！

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_scriptlanguageextension_private_method__frame"></div>

`void` **_frame** ( ) virtual[^virtual]<div id="class_scriptlanguageextension_private_method__frame"></div>

该方法目前没有描述，请帮我们\ :ref:`贡献一个 <doc_updating_the_class_reference>`\ 吧！

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_scriptlanguageextension_private_method__get_built_in_templates"></div>

[Array](class_array.md) [`Dictionary`](class_dictionary.md) **_get_built_in_templates** ( object: [`StringName`](class_stringname.md) ) virtual[^virtual] const[^const]<div id="class_scriptlanguageextension_private_method__get_built_in_templates"></div>

该方法目前没有描述，请帮我们\ :ref:`贡献一个 <doc_updating_the_class_reference>`\ 吧！

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_scriptlanguageextension_private_method__get_comment_delimiters"></div>

[`PackedStringArray`](class_packedstringarray.md) **_get_comment_delimiters** ( ) virtual[^virtual] const[^const]<div id="class_scriptlanguageextension_private_method__get_comment_delimiters"></div>

该方法目前没有描述，请帮我们\ :ref:`贡献一个 <doc_updating_the_class_reference>`\ 吧！

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_scriptlanguageextension_private_method__get_doc_comment_delimiters"></div>

[`PackedStringArray`](class_packedstringarray.md) **_get_doc_comment_delimiters** ( ) virtual[^virtual] const[^const]<div id="class_scriptlanguageextension_private_method__get_doc_comment_delimiters"></div>

该方法目前没有描述，请帮我们\ :ref:`贡献一个 <doc_updating_the_class_reference>`\ 吧！

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_scriptlanguageextension_private_method__get_extension"></div>

[`String`](class_string.md) **_get_extension** ( ) virtual[^virtual] const[^const]<div id="class_scriptlanguageextension_private_method__get_extension"></div>

该方法目前没有描述，请帮我们\ :ref:`贡献一个 <doc_updating_the_class_reference>`\ 吧！

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_scriptlanguageextension_private_method__get_global_class_name"></div>

[`Dictionary`](class_dictionary.md) **_get_global_class_name** ( path: [`String`](class_string.md) ) virtual[^virtual] const[^const]<div id="class_scriptlanguageextension_private_method__get_global_class_name"></div>

该方法目前没有描述，请帮我们\ :ref:`贡献一个 <doc_updating_the_class_reference>`\ 吧！

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_scriptlanguageextension_private_method__get_name"></div>

[`String`](class_string.md) **_get_name** ( ) virtual[^virtual] const[^const]<div id="class_scriptlanguageextension_private_method__get_name"></div>

该方法目前没有描述，请帮我们\ :ref:`贡献一个 <doc_updating_the_class_reference>`\ 吧！

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_scriptlanguageextension_private_method__get_public_annotations"></div>

[Array](class_array.md) [`Dictionary`](class_dictionary.md) **_get_public_annotations** ( ) virtual[^virtual] const[^const]<div id="class_scriptlanguageextension_private_method__get_public_annotations"></div>

该方法目前没有描述，请帮我们\ :ref:`贡献一个 <doc_updating_the_class_reference>`\ 吧！

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_scriptlanguageextension_private_method__get_public_constants"></div>

[`Dictionary`](class_dictionary.md) **_get_public_constants** ( ) virtual[^virtual] const[^const]<div id="class_scriptlanguageextension_private_method__get_public_constants"></div>

该方法目前没有描述，请帮我们\ :ref:`贡献一个 <doc_updating_the_class_reference>`\ 吧！

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_scriptlanguageextension_private_method__get_public_functions"></div>

[Array](class_array.md) [`Dictionary`](class_dictionary.md) **_get_public_functions** ( ) virtual[^virtual] const[^const]<div id="class_scriptlanguageextension_private_method__get_public_functions"></div>

该方法目前没有描述，请帮我们\ :ref:`贡献一个 <doc_updating_the_class_reference>`\ 吧！

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_scriptlanguageextension_private_method__get_recognized_extensions"></div>

[`PackedStringArray`](class_packedstringarray.md) **_get_recognized_extensions** ( ) virtual[^virtual] const[^const]<div id="class_scriptlanguageextension_private_method__get_recognized_extensions"></div>

该方法目前没有描述，请帮我们\ :ref:`贡献一个 <doc_updating_the_class_reference>`\ 吧！

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_scriptlanguageextension_private_method__get_reserved_words"></div>

[`PackedStringArray`](class_packedstringarray.md) **_get_reserved_words** ( ) virtual[^virtual] const[^const]<div id="class_scriptlanguageextension_private_method__get_reserved_words"></div>

该方法目前没有描述，请帮我们\ :ref:`贡献一个 <doc_updating_the_class_reference>`\ 吧！

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_scriptlanguageextension_private_method__get_string_delimiters"></div>

[`PackedStringArray`](class_packedstringarray.md) **_get_string_delimiters** ( ) virtual[^virtual] const[^const]<div id="class_scriptlanguageextension_private_method__get_string_delimiters"></div>

该方法目前没有描述，请帮我们\ :ref:`贡献一个 <doc_updating_the_class_reference>`\ 吧！

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_scriptlanguageextension_private_method__get_type"></div>

[`String`](class_string.md) **_get_type** ( ) virtual[^virtual] const[^const]<div id="class_scriptlanguageextension_private_method__get_type"></div>

该方法目前没有描述，请帮我们\ :ref:`贡献一个 <doc_updating_the_class_reference>`\ 吧！

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_scriptlanguageextension_private_method__handles_global_class_type"></div>

[`bool`](class_bool.md) **_handles_global_class_type** ( type: [`String`](class_string.md) ) virtual[^virtual] const[^const]<div id="class_scriptlanguageextension_private_method__handles_global_class_type"></div>

该方法目前没有描述，请帮我们\ :ref:`贡献一个 <doc_updating_the_class_reference>`\ 吧！

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_scriptlanguageextension_private_method__has_named_classes"></div>

[`bool`](class_bool.md) **_has_named_classes** ( ) virtual[^virtual] const[^const]<div id="class_scriptlanguageextension_private_method__has_named_classes"></div>

**已弃用：** This method is not called by the engine.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_scriptlanguageextension_private_method__init"></div>

`void` **_init** ( ) virtual[^virtual]<div id="class_scriptlanguageextension_private_method__init"></div>

该方法目前没有描述，请帮我们\ :ref:`贡献一个 <doc_updating_the_class_reference>`\ 吧！

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_scriptlanguageextension_private_method__is_control_flow_keyword"></div>

[`bool`](class_bool.md) **_is_control_flow_keyword** ( keyword: [`String`](class_string.md) ) virtual[^virtual] const[^const]<div id="class_scriptlanguageextension_private_method__is_control_flow_keyword"></div>

该方法目前没有描述，请帮我们\ :ref:`贡献一个 <doc_updating_the_class_reference>`\ 吧！

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_scriptlanguageextension_private_method__is_using_templates"></div>

[`bool`](class_bool.md) **_is_using_templates** ( ) virtual[^virtual]<div id="class_scriptlanguageextension_private_method__is_using_templates"></div>

该方法目前没有描述，请帮我们\ :ref:`贡献一个 <doc_updating_the_class_reference>`\ 吧！

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_scriptlanguageextension_private_method__lookup_code"></div>

[`Dictionary`](class_dictionary.md) **_lookup_code** ( code: [`String`](class_string.md), symbol: [`String`](class_string.md), path: [`String`](class_string.md), owner: [`Object`](class_object.md) ) virtual[^virtual] const[^const]<div id="class_scriptlanguageextension_private_method__lookup_code"></div>

该方法目前没有描述，请帮我们\ :ref:`贡献一个 <doc_updating_the_class_reference>`\ 吧！

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_scriptlanguageextension_private_method__make_function"></div>

[`String`](class_string.md) **_make_function** ( class_name: [`String`](class_string.md), function_name: [`String`](class_string.md), function_args: [`PackedStringArray`](class_packedstringarray.md) ) virtual[^virtual] const[^const]<div id="class_scriptlanguageextension_private_method__make_function"></div>

该方法目前没有描述，请帮我们\ :ref:`贡献一个 <doc_updating_the_class_reference>`\ 吧！

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_scriptlanguageextension_private_method__make_template"></div>

[`Script`](class_script.md) **_make_template** ( template: [`String`](class_string.md), class_name: [`String`](class_string.md), base_class_name: [`String`](class_string.md) ) virtual[^virtual] const[^const]<div id="class_scriptlanguageextension_private_method__make_template"></div>

该方法目前没有描述，请帮我们\ :ref:`贡献一个 <doc_updating_the_class_reference>`\ 吧！

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_scriptlanguageextension_private_method__open_in_external_editor"></div>

[Error](#enum_@globalscope_error) **_open_in_external_editor** ( script: [`Script`](class_script.md), line: [`int`](class_int.md), column: [`int`](class_int.md) ) virtual[^virtual]<div id="class_scriptlanguageextension_private_method__open_in_external_editor"></div>

该方法目前没有描述，请帮我们\ :ref:`贡献一个 <doc_updating_the_class_reference>`\ 吧！

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_scriptlanguageextension_private_method__overrides_external_editor"></div>

[`bool`](class_bool.md) **_overrides_external_editor** ( ) virtual[^virtual]<div id="class_scriptlanguageextension_private_method__overrides_external_editor"></div>

该方法目前没有描述，请帮我们\ :ref:`贡献一个 <doc_updating_the_class_reference>`\ 吧！

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_scriptlanguageextension_private_method__preferred_file_name_casing"></div>

[ScriptNameCasing](#enum_scriptlanguage_scriptnamecasing) **_preferred_file_name_casing** ( ) virtual[^virtual] const[^const]<div id="class_scriptlanguageextension_private_method__preferred_file_name_casing"></div>

该方法目前没有描述，请帮我们\ :ref:`贡献一个 <doc_updating_the_class_reference>`\ 吧！

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_scriptlanguageextension_private_method__profiling_get_accumulated_data"></div>

[`int`](class_int.md) **_profiling_get_accumulated_data** ( info_array: `ScriptLanguageExtensionProfilingInfo*`, info_max: [`int`](class_int.md) ) virtual[^virtual]<div id="class_scriptlanguageextension_private_method__profiling_get_accumulated_data"></div>

该方法目前没有描述，请帮我们\ :ref:`贡献一个 <doc_updating_the_class_reference>`\ 吧！

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_scriptlanguageextension_private_method__profiling_get_frame_data"></div>

[`int`](class_int.md) **_profiling_get_frame_data** ( info_array: `ScriptLanguageExtensionProfilingInfo*`, info_max: [`int`](class_int.md) ) virtual[^virtual]<div id="class_scriptlanguageextension_private_method__profiling_get_frame_data"></div>

该方法目前没有描述，请帮我们\ :ref:`贡献一个 <doc_updating_the_class_reference>`\ 吧！

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_scriptlanguageextension_private_method__profiling_set_save_native_calls"></div>

`void` **_profiling_set_save_native_calls** ( enable: [`bool`](class_bool.md) ) virtual[^virtual]<div id="class_scriptlanguageextension_private_method__profiling_set_save_native_calls"></div>

该方法目前没有描述，请帮我们\ :ref:`贡献一个 <doc_updating_the_class_reference>`\ 吧！

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_scriptlanguageextension_private_method__profiling_start"></div>

`void` **_profiling_start** ( ) virtual[^virtual]<div id="class_scriptlanguageextension_private_method__profiling_start"></div>

该方法目前没有描述，请帮我们\ :ref:`贡献一个 <doc_updating_the_class_reference>`\ 吧！

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_scriptlanguageextension_private_method__profiling_stop"></div>

`void` **_profiling_stop** ( ) virtual[^virtual]<div id="class_scriptlanguageextension_private_method__profiling_stop"></div>

该方法目前没有描述，请帮我们\ :ref:`贡献一个 <doc_updating_the_class_reference>`\ 吧！

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_scriptlanguageextension_private_method__reload_all_scripts"></div>

`void` **_reload_all_scripts** ( ) virtual[^virtual]<div id="class_scriptlanguageextension_private_method__reload_all_scripts"></div>

该方法目前没有描述，请帮我们\ :ref:`贡献一个 <doc_updating_the_class_reference>`\ 吧！

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_scriptlanguageextension_private_method__reload_scripts"></div>

`void` **_reload_scripts** ( scripts: [`Array`](class_array.md), soft_reload: [`bool`](class_bool.md) ) virtual[^virtual]<div id="class_scriptlanguageextension_private_method__reload_scripts"></div>

该方法目前没有描述，请帮我们\ :ref:`贡献一个 <doc_updating_the_class_reference>`\ 吧！

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_scriptlanguageextension_private_method__reload_tool_script"></div>

`void` **_reload_tool_script** ( script: [`Script`](class_script.md), soft_reload: [`bool`](class_bool.md) ) virtual[^virtual]<div id="class_scriptlanguageextension_private_method__reload_tool_script"></div>

该方法目前没有描述，请帮我们\ :ref:`贡献一个 <doc_updating_the_class_reference>`\ 吧！

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_scriptlanguageextension_private_method__remove_named_global_constant"></div>

`void` **_remove_named_global_constant** ( name: [`StringName`](class_stringname.md) ) virtual[^virtual]<div id="class_scriptlanguageextension_private_method__remove_named_global_constant"></div>

该方法目前没有描述，请帮我们\ :ref:`贡献一个 <doc_updating_the_class_reference>`\ 吧！

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_scriptlanguageextension_private_method__supports_builtin_mode"></div>

[`bool`](class_bool.md) **_supports_builtin_mode** ( ) virtual[^virtual] const[^const]<div id="class_scriptlanguageextension_private_method__supports_builtin_mode"></div>

该方法目前没有描述，请帮我们\ :ref:`贡献一个 <doc_updating_the_class_reference>`\ 吧！

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_scriptlanguageextension_private_method__supports_documentation"></div>

[`bool`](class_bool.md) **_supports_documentation** ( ) virtual[^virtual] const[^const]<div id="class_scriptlanguageextension_private_method__supports_documentation"></div>

该方法目前没有描述，请帮我们\ :ref:`贡献一个 <doc_updating_the_class_reference>`\ 吧！

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_scriptlanguageextension_private_method__thread_enter"></div>

`void` **_thread_enter** ( ) virtual[^virtual]<div id="class_scriptlanguageextension_private_method__thread_enter"></div>

该方法目前没有描述，请帮我们\ :ref:`贡献一个 <doc_updating_the_class_reference>`\ 吧！

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_scriptlanguageextension_private_method__thread_exit"></div>

`void` **_thread_exit** ( ) virtual[^virtual]<div id="class_scriptlanguageextension_private_method__thread_exit"></div>

该方法目前没有描述，请帮我们\ :ref:`贡献一个 <doc_updating_the_class_reference>`\ 吧！

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_scriptlanguageextension_private_method__validate"></div>

[`Dictionary`](class_dictionary.md) **_validate** ( script: [`String`](class_string.md), path: [`String`](class_string.md), validate_functions: [`bool`](class_bool.md), validate_errors: [`bool`](class_bool.md), validate_warnings: [`bool`](class_bool.md), validate_safe_lines: [`bool`](class_bool.md) ) virtual[^virtual] const[^const]<div id="class_scriptlanguageextension_private_method__validate"></div>

该方法目前没有描述，请帮我们\ :ref:`贡献一个 <doc_updating_the_class_reference>`\ 吧！

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_scriptlanguageextension_private_method__validate_path"></div>

[`String`](class_string.md) **_validate_path** ( path: [`String`](class_string.md) ) virtual[^virtual] const[^const]<div id="class_scriptlanguageextension_private_method__validate_path"></div>

该方法目前没有描述，请帮我们\ :ref:`贡献一个 <doc_updating_the_class_reference>`\ 吧！

[^virtual]: 本方法通常需要用户覆盖才能生效。
[^const]: 本方法无副作用，不会修改该实例的任何成员变量。
[^vararg]: 本方法除了能接受在此处描述的参数外，还能够继续接受任意数量的参数。
[^constructor]: 本方法用于构造某个类型。
[^static]: 调用本方法无需实例，可直接使用类名进行调用。
[^operator]: 本方法描述的是使用本类型作为左操作数的有效运算符。
[^bitfield]: 这个值是由下列位标志构成位掩码的整数。
[^void]: 无返回值。
