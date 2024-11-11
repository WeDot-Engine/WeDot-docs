<!-- ⚠ 请勿编辑本文件 ⚠ -->
<!-- 本文档使用脚本从 WeDot 引擎源码仓库生成。 -->
<!-- 生成脚本：https://github.com/WeDot-Engine/WeDot/tree/master/doc/tools/make_md.py； -->
<!-- 原文件：https://github.com/WeDot-Engine/WeDot/tree/master/doc/classes/Script.xml。 -->

<div id="_class_script"></div>

# Script

**继承：** [`Resource`](class_resource.md) **<** [`RefCounted`](class_refcounted.md) **<** [`Object`](class_object.md)

**派生：** [`CSharpScript`](class_csharpscript.md), [`GDScript`](class_gdscript.md), [`ScriptExtension`](class_scriptextension.md)

A class stored as a resource.

## 描述

A class stored as a resource. A script extends the functionality of all objects that instantiate it.

This is the base class for all scripts and should not be used directly. Trying to create a new script with this class will result in an error.

The `new` method of a script subclass creates a new instance. [`Object.set_script`](class_object.md#class_object_method_set_script) extends an existing object, if that object's class matches one of the script's base classes.

## 属性

|||
|:-:|:--|
| [`String`](class_string.md) | [`source_code`](class_script.md#class_script_property_source_code) |

## 方法

|||
|:-:|:--|
| [`bool`](class_bool.md)                                     | [`can_instantiate`](class_script.md#class_script_method_can_instantiate) ( ) const[^const]                                                       |
| [`Script`](class_script.md)                                 | [`get_base_script`](class_script.md#class_script_method_get_base_script) ( ) const[^const]                                                       |
| [`StringName`](class_stringname.md)                         | [`get_global_name`](class_script.md#class_script_method_get_global_name) ( ) const[^const]                                                       |
| [`StringName`](class_stringname.md)                         | [`get_instance_base_type`](class_script.md#class_script_method_get_instance_base_type) ( ) const[^const]                                         |
| [`Variant`](class_variant.md)                               | [`get_property_default_value`](class_script.md#class_script_method_get_property_default_value) ( property: [`StringName`](class_stringname.md) ) |
| [`Variant`](class_variant.md)                               | [`get_rpc_config`](class_script.md#class_script_method_get_rpc_config) ( ) const[^const]                                                         |
| [`Dictionary`](class_dictionary.md)                         | [`get_script_constant_map`](class_script.md#class_script_method_get_script_constant_map) ( )                                                     |
| [Array](class_array.md) [`Dictionary`](class_dictionary.md) | [`get_script_method_list`](class_script.md#class_script_method_get_script_method_list) ( )                                                       |
| [Array](class_array.md) [`Dictionary`](class_dictionary.md) | [`get_script_property_list`](class_script.md#class_script_method_get_script_property_list) ( )                                                   |
| [Array](class_array.md) [`Dictionary`](class_dictionary.md) | [`get_script_signal_list`](class_script.md#class_script_method_get_script_signal_list) ( )                                                       |
| [`bool`](class_bool.md)                                     | [`has_script_signal`](class_script.md#class_script_method_has_script_signal) ( signal_name: [`StringName`](class_stringname.md) ) const[^const]  |
| [`bool`](class_bool.md)                                     | [`has_source_code`](class_script.md#class_script_method_has_source_code) ( ) const[^const]                                                       |
| [`bool`](class_bool.md)                                     | [`instance_has`](class_script.md#class_script_method_instance_has) ( base_object: [`Object`](class_object.md) ) const[^const]                    |
| [`bool`](class_bool.md)                                     | [`is_abstract`](class_script.md#class_script_method_is_abstract) ( ) const[^const]                                                               |
| [`bool`](class_bool.md)                                     | [`is_tool`](class_script.md#class_script_method_is_tool) ( ) const[^const]                                                                       |
| [Error](#enum_@globalscope_error)                           | [`reload`](class_script.md#class_script_method_reload) ( keep_state: [`bool`](class_bool.md) = false )                                           |

<!-- rst-class:: classref-section-separator -->

---

## 属性说明

<div id="_class_script_property_source_code"></div>

[`String`](class_string.md) **source_code** <div id="class_script_property_source_code"></div>

- `void` **set_source_code** ( value: [`String`](class_string.md) )
- [`String`](class_string.md) **get_source_code** ( )

The script source code or an empty string if source code is not available. When set, does not reload the class implementation automatically.

<!-- rst-class:: classref-section-separator -->

---

## 方法说明

<div id="_class_script_method_can_instantiate"></div>

[`bool`](class_bool.md) **can_instantiate** ( ) const[^const]<div id="class_script_method_can_instantiate"></div>

Returns `true` if the script can be instantiated.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_script_method_get_base_script"></div>

[`Script`](class_script.md) **get_base_script** ( ) const[^const]<div id="class_script_method_get_base_script"></div>

Returns the script directly inherited by this script.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_script_method_get_global_name"></div>

[`StringName`](class_stringname.md) **get_global_name** ( ) const[^const]<div id="class_script_method_get_global_name"></div>

Returns the class name associated with the script, if there is one. Returns an empty string otherwise.

To give the script a global name, you can use the `class_name` keyword in GDScript and the `[GlobalClass]` attribute in C#.



```gdscript

    class_name MyNode
    extends Node
```

```csharp

    using Godot;
    
    [GlobalClass]
    public partial class MyNode : Node
    {
    }
```







<!-- rst-class:: classref-item-separator -->

---

<div id="_class_script_method_get_instance_base_type"></div>

[`StringName`](class_stringname.md) **get_instance_base_type** ( ) const[^const]<div id="class_script_method_get_instance_base_type"></div>

Returns the script's base type.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_script_method_get_property_default_value"></div>

[`Variant`](class_variant.md) **get_property_default_value** ( property: [`StringName`](class_stringname.md) )<div id="class_script_method_get_property_default_value"></div>

Returns the default value of the specified property.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_script_method_get_rpc_config"></div>

[`Variant`](class_variant.md) **get_rpc_config** ( ) const[^const]<div id="class_script_method_get_rpc_config"></div>

Returns a [`Dictionary`](class_dictionary.md) mapping method names to their RPC configuration defined by this script.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_script_method_get_script_constant_map"></div>

[`Dictionary`](class_dictionary.md) **get_script_constant_map** ( )<div id="class_script_method_get_script_constant_map"></div>

Returns a dictionary containing constant names and their values.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_script_method_get_script_method_list"></div>

[Array](class_array.md) [`Dictionary`](class_dictionary.md) **get_script_method_list** ( )<div id="class_script_method_get_script_method_list"></div>

Returns the list of methods in this **Script**.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_script_method_get_script_property_list"></div>

[Array](class_array.md) [`Dictionary`](class_dictionary.md) **get_script_property_list** ( )<div id="class_script_method_get_script_property_list"></div>

Returns the list of properties in this **Script**.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_script_method_get_script_signal_list"></div>

[Array](class_array.md) [`Dictionary`](class_dictionary.md) **get_script_signal_list** ( )<div id="class_script_method_get_script_signal_list"></div>

Returns the list of user signals defined in this **Script**.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_script_method_has_script_signal"></div>

[`bool`](class_bool.md) **has_script_signal** ( signal_name: [`StringName`](class_stringname.md) ) const[^const]<div id="class_script_method_has_script_signal"></div>

Returns `true` if the script, or a base class, defines a signal with the given name.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_script_method_has_source_code"></div>

[`bool`](class_bool.md) **has_source_code** ( ) const[^const]<div id="class_script_method_has_source_code"></div>

Returns `true` if the script contains non-empty source code.

 **Note:** If a script does not have source code, this does not mean that it is invalid or unusable. For example, a [`GDScript`](class_gdscript.md) that was exported with binary tokenization has no source code, but still behaves as expected and could be instantiated. This can be checked with [`can_instantiate`](class_script.md#class_script_method_can_instantiate).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_script_method_instance_has"></div>

[`bool`](class_bool.md) **instance_has** ( base_object: [`Object`](class_object.md) ) const[^const]<div id="class_script_method_instance_has"></div>

Returns `true` if `base_object` is an instance of this script.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_script_method_is_abstract"></div>

[`bool`](class_bool.md) **is_abstract** ( ) const[^const]<div id="class_script_method_is_abstract"></div>

Returns `true` if the script is an abstract script. An abstract script does not have a constructor and cannot be instantiated.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_script_method_is_tool"></div>

[`bool`](class_bool.md) **is_tool** ( ) const[^const]<div id="class_script_method_is_tool"></div>

Returns `true` if the script is a tool script. A tool script can run in the editor.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_script_method_reload"></div>

[Error](#enum_@globalscope_error) **reload** ( keep_state: [`bool`](class_bool.md) = false )<div id="class_script_method_reload"></div>

Reloads the script's class implementation. Returns an error code.

[^virtual]: 本方法通常需要用户覆盖才能生效。
[^const]: 本方法无副作用，不会修改该实例的任何成员变量。
[^vararg]: 本方法除了能接受在此处描述的参数外，还能够继续接受任意数量的参数。
[^constructor]: 本方法用于构造某个类型。
[^static]: 调用本方法无需实例，可直接使用类名进行调用。
[^operator]: 本方法描述的是使用本类型作为左操作数的有效运算符。
[^bitfield]: 这个值是由下列位标志构成位掩码的整数。
[^void]: 无返回值。
