<!-- ⚠ 请勿编辑本文件 ⚠ -->
<!-- 本文档使用脚本从 WeDot 引擎源码仓库生成。 -->
<!-- 生成脚本：https://github.com/WeDot-Engine/WeDot/tree/master/doc/tools/make_md.py； -->
<!-- 原文件：https://github.com/WeDot-Engine/WeDot/tree/master/doc/classes/RDShaderFile.xml。 -->

<div id="_class_rdshaderfile"></div>

# RDShaderFile

**继承：** [`Resource`](class_resource.md) **<** [`RefCounted`](class_refcounted.md) **<** [`Object`](class_object.md)

Compiled shader file in SPIR-V form (used by [`RenderingDevice`](class_renderingdevice.md)). Not to be confused with Godot's own [`Shader`](class_shader.md).

## 描述

Compiled shader file in SPIR-V form.

See also [`RDShaderSource`](class_rdshadersource.md). **RDShaderFile** is only meant to be used with the [`RenderingDevice`](class_renderingdevice.md) API. It should not be confused with Godot's own [`Shader`](class_shader.md) resource, which is what Godot's various nodes use for high-level shader programming.

## 属性

|||
|:-:|:--|
| [`String`](class_string.md) | [`base_error`](class_rdshaderfile.md#class_rdshaderfile_property_base_error) | ``""`` |

## 方法

|||
|:-:|:--|
| [`RDShaderSPIRV`](class_rdshaderspirv.md)                   | [`get_spirv`](class_rdshaderfile.md#class_rdshaderfile_method_get_spirv) ( version: [`StringName`](class_stringname.md) = &"" ) const[^const]                                              |
| [Array](class_array.md) [`StringName`](class_stringname.md) | [`get_version_list`](class_rdshaderfile.md#class_rdshaderfile_method_get_version_list) ( ) const[^const]                                                                                   |
| `void`                                                      | [`set_bytecode`](class_rdshaderfile.md#class_rdshaderfile_method_set_bytecode) ( bytecode: [`RDShaderSPIRV`](class_rdshaderspirv.md), version: [`StringName`](class_stringname.md) = &"" ) |

<!-- rst-class:: classref-section-separator -->

---

## 属性说明

<div id="_class_rdshaderfile_property_base_error"></div>

[`String`](class_string.md) **base_error** = ``""`` <div id="class_rdshaderfile_property_base_error"></div>

- `void` **set_base_error** ( value: [`String`](class_string.md) )
- [`String`](class_string.md) **get_base_error** ( )

The base compilation error message, which indicates errors not related to a specific shader stage if non-empty. If empty, shader compilation is not necessarily successful (check [`RDShaderSPIRV`](class_rdshaderspirv.md)'s error message members).

<!-- rst-class:: classref-section-separator -->

---

## 方法说明

<div id="_class_rdshaderfile_method_get_spirv"></div>

[`RDShaderSPIRV`](class_rdshaderspirv.md) **get_spirv** ( version: [`StringName`](class_stringname.md) = &"" ) const[^const]<div id="class_rdshaderfile_method_get_spirv"></div>

Returns the SPIR-V intermediate representation for the specified shader `version`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_rdshaderfile_method_get_version_list"></div>

[Array](class_array.md) [`StringName`](class_stringname.md) **get_version_list** ( ) const[^const]<div id="class_rdshaderfile_method_get_version_list"></div>

Returns the list of compiled versions for this shader.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_rdshaderfile_method_set_bytecode"></div>

`void` **set_bytecode** ( bytecode: [`RDShaderSPIRV`](class_rdshaderspirv.md), version: [`StringName`](class_stringname.md) = &"" )<div id="class_rdshaderfile_method_set_bytecode"></div>

Sets the SPIR-V `bytecode` that will be compiled for the specified `version`.

[^virtual]: 本方法通常需要用户覆盖才能生效。
[^const]: 本方法无副作用，不会修改该实例的任何成员变量。
[^vararg]: 本方法除了能接受在此处描述的参数外，还能够继续接受任意数量的参数。
[^constructor]: 本方法用于构造某个类型。
[^static]: 调用本方法无需实例，可直接使用类名进行调用。
[^operator]: 本方法描述的是使用本类型作为左操作数的有效运算符。
[^bitfield]: 这个值是由下列位标志构成位掩码的整数。
[^void]: 无返回值。
