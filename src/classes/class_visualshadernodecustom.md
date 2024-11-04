<!-- ⚠ 请勿编辑本文件 ⚠ -->
<!-- 本文档使用脚本从 WeDot 引擎源码仓库生成。 -->
<!-- 生成脚本：https://github.com/WeDot-Engine/WeDot/tree/4.3/doc/tools/make_md.py； -->
<!-- 原文件：https://github.com/WeDot-Engine/WeDot/tree/4.3/doc/classes/VisualShaderNodeCustom.xml。 -->

<div id="_class_visualshadernodecustom"></div>

# VisualShaderNodeCustom

**继承：** [`VisualShaderNode`](class_visualshadernode.md) **<** [`Resource`](class_resource.md) **<** [`RefCounted`](class_refcounted.md) **<** [`Object`](class_object.md)

Virtual class to define custom [`VisualShaderNode`](class_visualshadernode.md) s for use in the Visual Shader Editor.

## 描述

By inheriting this class you can create a custom [`VisualShader`](class_visualshader.md) script addon which will be automatically added to the Visual Shader Editor. The [`VisualShaderNode`](class_visualshadernode.md)'s behavior is defined by overriding the provided virtual methods.

In order for the node to be registered as an editor addon, you must use the `@tool` annotation and provide a `class_name` for your custom script. For example:

```

    @tool
    extends VisualShaderNodeCustom
    class_name VisualShaderNodeNoise
```



## 方法

| [`String`](class_string.md)                       | [`_get_category`](#class_visualshadernodecustom_private_method__get_category) ( ) virtual[^virtual] const[^const]                                                                                                                                                                                                   |
| [`String`](class_string.md)                       | [`_get_code`](#class_visualshadernodecustom_private_method__get_code) ( input_vars: [Array](class_array.md) [`String`](class_string.md), output_vars: [Array](class_array.md) [`String`](class_string.md), mode: [Mode](#enum_shader_mode), type: [Type](#enum_visualshader_type) ) virtual[^virtual] const[^const] |
| [`int`](class_int.md)                             | [`_get_default_input_port`](#class_visualshadernodecustom_private_method__get_default_input_port) ( type: [PortType](#enum_visualshadernode_porttype) ) virtual[^virtual] const[^const]                                                                                                                             |
| [`String`](class_string.md)                       | [`_get_description`](#class_visualshadernodecustom_private_method__get_description) ( ) virtual[^virtual] const[^const]                                                                                                                                                                                             |
| [`String`](class_string.md)                       | [`_get_func_code`](#class_visualshadernodecustom_private_method__get_func_code) ( mode: [Mode](#enum_shader_mode), type: [Type](#enum_visualshader_type) ) virtual[^virtual] const[^const]                                                                                                                          |
| [`String`](class_string.md)                       | [`_get_global_code`](#class_visualshadernodecustom_private_method__get_global_code) ( mode: [Mode](#enum_shader_mode) ) virtual[^virtual] const[^const]                                                                                                                                                             |
| [`int`](class_int.md)                             | [`_get_input_port_count`](#class_visualshadernodecustom_private_method__get_input_port_count) ( ) virtual[^virtual] const[^const]                                                                                                                                                                                   |
| [`Variant`](class_variant.md)                     | [`_get_input_port_default_value`](#class_visualshadernodecustom_private_method__get_input_port_default_value) ( port: [`int`](class_int.md) ) virtual[^virtual] const[^const]                                                                                                                                       |
| [`String`](class_string.md)                       | [`_get_input_port_name`](#class_visualshadernodecustom_private_method__get_input_port_name) ( port: [`int`](class_int.md) ) virtual[^virtual] const[^const]                                                                                                                                                         |
| [PortType](#enum_visualshadernode_porttype)       | [`_get_input_port_type`](#class_visualshadernodecustom_private_method__get_input_port_type) ( port: [`int`](class_int.md) ) virtual[^virtual] const[^const]                                                                                                                                                         |
| [`String`](class_string.md)                       | [`_get_name`](#class_visualshadernodecustom_private_method__get_name) ( ) virtual[^virtual] const[^const]                                                                                                                                                                                                           |
| [`int`](class_int.md)                             | [`_get_output_port_count`](#class_visualshadernodecustom_private_method__get_output_port_count) ( ) virtual[^virtual] const[^const]                                                                                                                                                                                 |
| [`String`](class_string.md)                       | [`_get_output_port_name`](#class_visualshadernodecustom_private_method__get_output_port_name) ( port: [`int`](class_int.md) ) virtual[^virtual] const[^const]                                                                                                                                                       |
| [PortType](#enum_visualshadernode_porttype)       | [`_get_output_port_type`](#class_visualshadernodecustom_private_method__get_output_port_type) ( port: [`int`](class_int.md) ) virtual[^virtual] const[^const]                                                                                                                                                       |
| [`int`](class_int.md)                             | [`_get_property_count`](#class_visualshadernodecustom_private_method__get_property_count) ( ) virtual[^virtual] const[^const]                                                                                                                                                                                       |
| [`int`](class_int.md)                             | [`_get_property_default_index`](#class_visualshadernodecustom_private_method__get_property_default_index) ( index: [`int`](class_int.md) ) virtual[^virtual] const[^const]                                                                                                                                          |
| [`String`](class_string.md)                       | [`_get_property_name`](#class_visualshadernodecustom_private_method__get_property_name) ( index: [`int`](class_int.md) ) virtual[^virtual] const[^const]                                                                                                                                                            |
| [`PackedStringArray`](class_packedstringarray.md) | [`_get_property_options`](#class_visualshadernodecustom_private_method__get_property_options) ( index: [`int`](class_int.md) ) virtual[^virtual] const[^const]                                                                                                                                                      |
| [PortType](#enum_visualshadernode_porttype)       | [`_get_return_icon_type`](#class_visualshadernodecustom_private_method__get_return_icon_type) ( ) virtual[^virtual] const[^const]                                                                                                                                                                                   |
| [`bool`](class_bool.md)                           | [`_is_available`](#class_visualshadernodecustom_private_method__is_available) ( mode: [Mode](#enum_shader_mode), type: [Type](#enum_visualshader_type) ) virtual[^virtual] const[^const]                                                                                                                            |
| [`bool`](class_bool.md)                           | [`_is_highend`](#class_visualshadernodecustom_private_method__is_highend) ( ) virtual[^virtual] const[^const]                                                                                                                                                                                                       |
| [`int`](class_int.md)                             | [`get_option_index`](#class_visualshadernodecustom_method_get_option_index) ( option: [`int`](class_int.md) ) const[^const]                                                                                                                                                                                         |

<!-- rst-class:: classref-section-separator -->

---

## 方法说明

<div id="_class_visualshadernodecustom_private_method__get_category"></div>

[`String`](class_string.md) **_get_category** ( ) virtual[^virtual] const[^const]<div id="class_visualshadernodecustom_private_method__get_category"></div>

Override this method to define the path to the associated custom node in the Visual Shader Editor's members dialog. The path may look like `"MyGame/MyFunctions/Noise"`.

Defining this method is **optional**. If not overridden, the node will be filed under the "Addons" category.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_visualshadernodecustom_private_method__get_code"></div>

[`String`](class_string.md) **_get_code** ( input_vars: [Array](class_array.md) [`String`](class_string.md), output_vars: [Array](class_array.md) [`String`](class_string.md), mode: [Mode](#enum_shader_mode), type: [Type](#enum_visualshader_type) ) virtual[^virtual] const[^const]<div id="class_visualshadernodecustom_private_method__get_code"></div>

Override this method to define the actual shader code of the associated custom node. The shader code should be returned as a string, which can have multiple lines (the `"""` multiline string construct can be used for convenience).

The `input_vars` and `output_vars` arrays contain the string names of the various input and output variables, as defined by `_get_input_*` and `_get_output_*` virtual methods in this class.

The output ports can be assigned values in the shader code. For example, `return output_vars[0] + " = " + input_vars[0] + ";"`.

You can customize the generated code based on the shader `mode` (see [Mode](#enum_shader_mode)) and/or `type` (see [Type](#enum_visualshader_type)).

Defining this method is **required**.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_visualshadernodecustom_private_method__get_default_input_port"></div>

[`int`](class_int.md) **_get_default_input_port** ( type: [PortType](#enum_visualshadernode_porttype) ) virtual[^virtual] const[^const]<div id="class_visualshadernodecustom_private_method__get_default_input_port"></div>

Override this method to define the input port which should be connected by default when this node is created as a result of dragging a connection from an existing node to the empty space on the graph.

Defining this method is **optional**. If not overridden, the connection will be created to the first valid port.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_visualshadernodecustom_private_method__get_description"></div>

[`String`](class_string.md) **_get_description** ( ) virtual[^virtual] const[^const]<div id="class_visualshadernodecustom_private_method__get_description"></div>

Override this method to define the description of the associated custom node in the Visual Shader Editor's members dialog.

Defining this method is **optional**.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_visualshadernodecustom_private_method__get_func_code"></div>

[`String`](class_string.md) **_get_func_code** ( mode: [Mode](#enum_shader_mode), type: [Type](#enum_visualshader_type) ) virtual[^virtual] const[^const]<div id="class_visualshadernodecustom_private_method__get_func_code"></div>

Override this method to add a shader code to the beginning of each shader function (once). The shader code should be returned as a string, which can have multiple lines (the `"""` multiline string construct can be used for convenience).

If there are multiple custom nodes of different types which use this feature the order of each insertion is undefined.

You can customize the generated code based on the shader `mode` (see [Mode](#enum_shader_mode)) and/or `type` (see [Type](#enum_visualshader_type)).

Defining this method is **optional**.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_visualshadernodecustom_private_method__get_global_code"></div>

[`String`](class_string.md) **_get_global_code** ( mode: [Mode](#enum_shader_mode) ) virtual[^virtual] const[^const]<div id="class_visualshadernodecustom_private_method__get_global_code"></div>

Override this method to add shader code on top of the global shader, to define your own standard library of reusable methods, varyings, constants, uniforms, etc. The shader code should be returned as a string, which can have multiple lines (the `"""` multiline string construct can be used for convenience).

Be careful with this functionality as it can cause name conflicts with other custom nodes, so be sure to give the defined entities unique names.

You can customize the generated code based on the shader `mode` (see [Mode](#enum_shader_mode)).

Defining this method is **optional**.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_visualshadernodecustom_private_method__get_input_port_count"></div>

[`int`](class_int.md) **_get_input_port_count** ( ) virtual[^virtual] const[^const]<div id="class_visualshadernodecustom_private_method__get_input_port_count"></div>

Override this method to define the number of input ports of the associated custom node.

Defining this method is **required**. If not overridden, the node has no input ports.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_visualshadernodecustom_private_method__get_input_port_default_value"></div>

[`Variant`](class_variant.md) **_get_input_port_default_value** ( port: [`int`](class_int.md) ) virtual[^virtual] const[^const]<div id="class_visualshadernodecustom_private_method__get_input_port_default_value"></div>

Override this method to define the default value for the specified input port. Prefer use this over [`VisualShaderNode.set_input_port_default_value`](#class_visualshadernode_method_set_input_port_default_value).

Defining this method is **required**. If not overridden, the node has no default values for their input ports.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_visualshadernodecustom_private_method__get_input_port_name"></div>

[`String`](class_string.md) **_get_input_port_name** ( port: [`int`](class_int.md) ) virtual[^virtual] const[^const]<div id="class_visualshadernodecustom_private_method__get_input_port_name"></div>

Override this method to define the names of input ports of the associated custom node. The names are used both for the input slots in the editor and as identifiers in the shader code, and are passed in the `input_vars` array in [`_get_code`](#class_visualshadernodecustom_private_method__get_code).

Defining this method is **optional**, but recommended. If not overridden, input ports are named as `"in" + str(port)`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_visualshadernodecustom_private_method__get_input_port_type"></div>

[PortType](#enum_visualshadernode_porttype) **_get_input_port_type** ( port: [`int`](class_int.md) ) virtual[^virtual] const[^const]<div id="class_visualshadernodecustom_private_method__get_input_port_type"></div>

Override this method to define the returned type of each input port of the associated custom node (see [PortType](#enum_visualshadernode_porttype) for possible types).

Defining this method is **optional**, but recommended. If not overridden, input ports will return the [`VisualShaderNode.PORT_TYPE_SCALAR`](#class_visualshadernode_constant_port_type_scalar) type.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_visualshadernodecustom_private_method__get_name"></div>

[`String`](class_string.md) **_get_name** ( ) virtual[^virtual] const[^const]<div id="class_visualshadernodecustom_private_method__get_name"></div>

Override this method to define the name of the associated custom node in the Visual Shader Editor's members dialog and graph.

Defining this method is **optional**, but recommended. If not overridden, the node will be named as "Unnamed".

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_visualshadernodecustom_private_method__get_output_port_count"></div>

[`int`](class_int.md) **_get_output_port_count** ( ) virtual[^virtual] const[^const]<div id="class_visualshadernodecustom_private_method__get_output_port_count"></div>

Override this method to define the number of output ports of the associated custom node.

Defining this method is **required**. If not overridden, the node has no output ports.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_visualshadernodecustom_private_method__get_output_port_name"></div>

[`String`](class_string.md) **_get_output_port_name** ( port: [`int`](class_int.md) ) virtual[^virtual] const[^const]<div id="class_visualshadernodecustom_private_method__get_output_port_name"></div>

Override this method to define the names of output ports of the associated custom node. The names are used both for the output slots in the editor and as identifiers in the shader code, and are passed in the `output_vars` array in [`_get_code`](#class_visualshadernodecustom_private_method__get_code).

Defining this method is **optional**, but recommended. If not overridden, output ports are named as `"out" + str(port)`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_visualshadernodecustom_private_method__get_output_port_type"></div>

[PortType](#enum_visualshadernode_porttype) **_get_output_port_type** ( port: [`int`](class_int.md) ) virtual[^virtual] const[^const]<div id="class_visualshadernodecustom_private_method__get_output_port_type"></div>

Override this method to define the returned type of each output port of the associated custom node (see [PortType](#enum_visualshadernode_porttype) for possible types).

Defining this method is **optional**, but recommended. If not overridden, output ports will return the [`VisualShaderNode.PORT_TYPE_SCALAR`](#class_visualshadernode_constant_port_type_scalar) type.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_visualshadernodecustom_private_method__get_property_count"></div>

[`int`](class_int.md) **_get_property_count** ( ) virtual[^virtual] const[^const]<div id="class_visualshadernodecustom_private_method__get_property_count"></div>

Override this method to define the number of the properties.

Defining this method is **optional**.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_visualshadernodecustom_private_method__get_property_default_index"></div>

[`int`](class_int.md) **_get_property_default_index** ( index: [`int`](class_int.md) ) virtual[^virtual] const[^const]<div id="class_visualshadernodecustom_private_method__get_property_default_index"></div>

Override this method to define the default index of the property of the associated custom node.

Defining this method is **optional**.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_visualshadernodecustom_private_method__get_property_name"></div>

[`String`](class_string.md) **_get_property_name** ( index: [`int`](class_int.md) ) virtual[^virtual] const[^const]<div id="class_visualshadernodecustom_private_method__get_property_name"></div>

Override this method to define the names of the property of the associated custom node.

Defining this method is **optional**.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_visualshadernodecustom_private_method__get_property_options"></div>

[`PackedStringArray`](class_packedstringarray.md) **_get_property_options** ( index: [`int`](class_int.md) ) virtual[^virtual] const[^const]<div id="class_visualshadernodecustom_private_method__get_property_options"></div>

Override this method to define the options inside the drop-down list property of the associated custom node.

Defining this method is **optional**.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_visualshadernodecustom_private_method__get_return_icon_type"></div>

[PortType](#enum_visualshadernode_porttype) **_get_return_icon_type** ( ) virtual[^virtual] const[^const]<div id="class_visualshadernodecustom_private_method__get_return_icon_type"></div>

Override this method to define the return icon of the associated custom node in the Visual Shader Editor's members dialog.

Defining this method is **optional**. If not overridden, no return icon is shown.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_visualshadernodecustom_private_method__is_available"></div>

[`bool`](class_bool.md) **_is_available** ( mode: [Mode](#enum_shader_mode), type: [Type](#enum_visualshader_type) ) virtual[^virtual] const[^const]<div id="class_visualshadernodecustom_private_method__is_available"></div>

Override this method to prevent the node to be visible in the member dialog for the certain `mode` (see [Mode](#enum_shader_mode)) and/or `type` (see [Type](#enum_visualshader_type)).

Defining this method is **optional**. If not overridden, it's `true`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_visualshadernodecustom_private_method__is_highend"></div>

[`bool`](class_bool.md) **_is_highend** ( ) virtual[^virtual] const[^const]<div id="class_visualshadernodecustom_private_method__is_highend"></div>

Override this method to enable high-end mark in the Visual Shader Editor's members dialog.

Defining this method is **optional**. If not overridden, it's `false`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_visualshadernodecustom_method_get_option_index"></div>

[`int`](class_int.md) **get_option_index** ( option: [`int`](class_int.md) ) const[^const]<div id="class_visualshadernodecustom_method_get_option_index"></div>

Returns the selected index of the drop-down list option within a graph. You may use this function to define the specific behavior in the [`_get_code`](#class_visualshadernodecustom_private_method__get_code) or [`_get_global_code`](#class_visualshadernodecustom_private_method__get_global_code).

[^virtual]: 本方法通常需要用户覆盖才能生效。
[^const]: 本方法无副作用，不会修改该实例的任何成员变量。
[^vararg]: 本方法除了能接受在此处描述的参数外，还能够继续接受任意数量的参数。
[^constructor]: 本方法用于构造某个类型。
[^static]: 调用本方法无需实例，可直接使用类名进行调用。
[^operator]: 本方法描述的是使用本类型作为左操作数的有效运算符。
[^bitfield]: 这个值是由下列位标志构成位掩码的整数。
[^void]: 无返回值。
