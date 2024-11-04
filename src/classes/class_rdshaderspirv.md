<!-- ⚠ 请勿编辑本文件 ⚠ -->
<!-- 本文档使用脚本从 WeDot 引擎源码仓库生成。 -->
<!-- 生成脚本：https://github.com/WeDot-Engine/WeDot/tree/4.3/doc/tools/make_md.py； -->
<!-- 原文件：https://github.com/WeDot-Engine/WeDot/tree/4.3/doc/classes/RDShaderSPIRV.xml。 -->

<div id="_class_rdshaderspirv"></div>

# RDShaderSPIRV

**继承：** [`Resource`](class_resource.md) **<** [`RefCounted`](class_refcounted.md) **<** [`Object`](class_object.md)

SPIR-V intermediate representation as part of a [`RDShaderFile`](class_rdshaderfile.md) (used by [`RenderingDevice`](class_renderingdevice.md)).

## 描述

**RDShaderSPIRV** represents a [`RDShaderFile`](class_rdshaderfile.md)'s [*SPIR-V*](https://www.khronos.org/spir/) code for various shader stages, as well as possible compilation error messages. SPIR-V is a low-level intermediate shader representation. This intermediate representation is not used directly by GPUs for rendering, but it can be compiled into binary shaders that GPUs can understand. Unlike compiled shaders, SPIR-V is portable across GPU models and driver versions.

This object is used by [`RenderingDevice`](class_renderingdevice.md).

## 属性

| [`PackedByteArray`](class_packedbytearray.md) | [`bytecode_compute`](#class_rdshaderspirv_property_bytecode_compute)                                         | ``PackedByteArray()`` |
| [`PackedByteArray`](class_packedbytearray.md) | [`bytecode_fragment`](#class_rdshaderspirv_property_bytecode_fragment)                                       | ``PackedByteArray()`` |
| [`PackedByteArray`](class_packedbytearray.md) | [`bytecode_tesselation_control`](#class_rdshaderspirv_property_bytecode_tesselation_control)                 | ``PackedByteArray()`` |
| [`PackedByteArray`](class_packedbytearray.md) | [`bytecode_tesselation_evaluation`](#class_rdshaderspirv_property_bytecode_tesselation_evaluation)           | ``PackedByteArray()`` |
| [`PackedByteArray`](class_packedbytearray.md) | [`bytecode_vertex`](#class_rdshaderspirv_property_bytecode_vertex)                                           | ``PackedByteArray()`` |
| [`String`](class_string.md)                   | [`compile_error_compute`](#class_rdshaderspirv_property_compile_error_compute)                               | ``""``                |
| [`String`](class_string.md)                   | [`compile_error_fragment`](#class_rdshaderspirv_property_compile_error_fragment)                             | ``""``                |
| [`String`](class_string.md)                   | [`compile_error_tesselation_control`](#class_rdshaderspirv_property_compile_error_tesselation_control)       | ``""``                |
| [`String`](class_string.md)                   | [`compile_error_tesselation_evaluation`](#class_rdshaderspirv_property_compile_error_tesselation_evaluation) | ``""``                |
| [`String`](class_string.md)                   | [`compile_error_vertex`](#class_rdshaderspirv_property_compile_error_vertex)                                 | ``""``                |

## 方法

| [`PackedByteArray`](class_packedbytearray.md) | [`get_stage_bytecode`](#class_rdshaderspirv_method_get_stage_bytecode) ( stage: [ShaderStage](#enum_renderingdevice_shaderstage) ) const[^const]                                            |
| [`String`](class_string.md)                   | [`get_stage_compile_error`](#class_rdshaderspirv_method_get_stage_compile_error) ( stage: [ShaderStage](#enum_renderingdevice_shaderstage) ) const[^const]                                  |
| `void`                                        | [`set_stage_bytecode`](#class_rdshaderspirv_method_set_stage_bytecode) ( stage: [ShaderStage](#enum_renderingdevice_shaderstage), bytecode: [`PackedByteArray`](class_packedbytearray.md) ) |
| `void`                                        | [`set_stage_compile_error`](#class_rdshaderspirv_method_set_stage_compile_error) ( stage: [ShaderStage](#enum_renderingdevice_shaderstage), compile_error: [`String`](class_string.md) )    |

<!-- rst-class:: classref-section-separator -->

---

## 属性说明

<div id="_class_rdshaderspirv_property_bytecode_compute"></div>

[`PackedByteArray`](class_packedbytearray.md) **bytecode_compute** = ``PackedByteArray()`` <div id="class_rdshaderspirv_property_bytecode_compute"></div>

- `void` **set_stage_bytecode** ( stage: [ShaderStage](#enum_renderingdevice_shaderstage), bytecode: [`PackedByteArray`](class_packedbytearray.md) )
- [`PackedByteArray`](class_packedbytearray.md) **get_stage_bytecode** ( stage: [ShaderStage](#enum_renderingdevice_shaderstage) ) const[^const]

The SPIR-V bytecode for the compute shader stage.

**Note:** The returned array is *copied* and any changes to it will not update the original property value. See [`PackedByteArray`](class_packedbytearray.md) for more details.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_rdshaderspirv_property_bytecode_fragment"></div>

[`PackedByteArray`](class_packedbytearray.md) **bytecode_fragment** = ``PackedByteArray()`` <div id="class_rdshaderspirv_property_bytecode_fragment"></div>

- `void` **set_stage_bytecode** ( stage: [ShaderStage](#enum_renderingdevice_shaderstage), bytecode: [`PackedByteArray`](class_packedbytearray.md) )
- [`PackedByteArray`](class_packedbytearray.md) **get_stage_bytecode** ( stage: [ShaderStage](#enum_renderingdevice_shaderstage) ) const[^const]

The SPIR-V bytecode for the fragment shader stage.

**Note:** The returned array is *copied* and any changes to it will not update the original property value. See [`PackedByteArray`](class_packedbytearray.md) for more details.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_rdshaderspirv_property_bytecode_tesselation_control"></div>

[`PackedByteArray`](class_packedbytearray.md) **bytecode_tesselation_control** = ``PackedByteArray()`` <div id="class_rdshaderspirv_property_bytecode_tesselation_control"></div>

- `void` **set_stage_bytecode** ( stage: [ShaderStage](#enum_renderingdevice_shaderstage), bytecode: [`PackedByteArray`](class_packedbytearray.md) )
- [`PackedByteArray`](class_packedbytearray.md) **get_stage_bytecode** ( stage: [ShaderStage](#enum_renderingdevice_shaderstage) ) const[^const]

The SPIR-V bytecode for the tessellation control shader stage.

**Note:** The returned array is *copied* and any changes to it will not update the original property value. See [`PackedByteArray`](class_packedbytearray.md) for more details.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_rdshaderspirv_property_bytecode_tesselation_evaluation"></div>

[`PackedByteArray`](class_packedbytearray.md) **bytecode_tesselation_evaluation** = ``PackedByteArray()`` <div id="class_rdshaderspirv_property_bytecode_tesselation_evaluation"></div>

- `void` **set_stage_bytecode** ( stage: [ShaderStage](#enum_renderingdevice_shaderstage), bytecode: [`PackedByteArray`](class_packedbytearray.md) )
- [`PackedByteArray`](class_packedbytearray.md) **get_stage_bytecode** ( stage: [ShaderStage](#enum_renderingdevice_shaderstage) ) const[^const]

The SPIR-V bytecode for the tessellation evaluation shader stage.

**Note:** The returned array is *copied* and any changes to it will not update the original property value. See [`PackedByteArray`](class_packedbytearray.md) for more details.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_rdshaderspirv_property_bytecode_vertex"></div>

[`PackedByteArray`](class_packedbytearray.md) **bytecode_vertex** = ``PackedByteArray()`` <div id="class_rdshaderspirv_property_bytecode_vertex"></div>

- `void` **set_stage_bytecode** ( stage: [ShaderStage](#enum_renderingdevice_shaderstage), bytecode: [`PackedByteArray`](class_packedbytearray.md) )
- [`PackedByteArray`](class_packedbytearray.md) **get_stage_bytecode** ( stage: [ShaderStage](#enum_renderingdevice_shaderstage) ) const[^const]

The SPIR-V bytecode for the vertex shader stage.

**Note:** The returned array is *copied* and any changes to it will not update the original property value. See [`PackedByteArray`](class_packedbytearray.md) for more details.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_rdshaderspirv_property_compile_error_compute"></div>

[`String`](class_string.md) **compile_error_compute** = ``""`` <div id="class_rdshaderspirv_property_compile_error_compute"></div>

- `void` **set_stage_compile_error** ( stage: [ShaderStage](#enum_renderingdevice_shaderstage), compile_error: [`String`](class_string.md) )
- [`String`](class_string.md) **get_stage_compile_error** ( stage: [ShaderStage](#enum_renderingdevice_shaderstage) ) const[^const]

The compilation error message for the compute shader stage (set by the SPIR-V compiler and Godot). If empty, shader compilation was successful.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_rdshaderspirv_property_compile_error_fragment"></div>

[`String`](class_string.md) **compile_error_fragment** = ``""`` <div id="class_rdshaderspirv_property_compile_error_fragment"></div>

- `void` **set_stage_compile_error** ( stage: [ShaderStage](#enum_renderingdevice_shaderstage), compile_error: [`String`](class_string.md) )
- [`String`](class_string.md) **get_stage_compile_error** ( stage: [ShaderStage](#enum_renderingdevice_shaderstage) ) const[^const]

The compilation error message for the fragment shader stage (set by the SPIR-V compiler and Godot). If empty, shader compilation was successful.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_rdshaderspirv_property_compile_error_tesselation_control"></div>

[`String`](class_string.md) **compile_error_tesselation_control** = ``""`` <div id="class_rdshaderspirv_property_compile_error_tesselation_control"></div>

- `void` **set_stage_compile_error** ( stage: [ShaderStage](#enum_renderingdevice_shaderstage), compile_error: [`String`](class_string.md) )
- [`String`](class_string.md) **get_stage_compile_error** ( stage: [ShaderStage](#enum_renderingdevice_shaderstage) ) const[^const]

The compilation error message for the tessellation control shader stage (set by the SPIR-V compiler and Godot). If empty, shader compilation was successful.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_rdshaderspirv_property_compile_error_tesselation_evaluation"></div>

[`String`](class_string.md) **compile_error_tesselation_evaluation** = ``""`` <div id="class_rdshaderspirv_property_compile_error_tesselation_evaluation"></div>

- `void` **set_stage_compile_error** ( stage: [ShaderStage](#enum_renderingdevice_shaderstage), compile_error: [`String`](class_string.md) )
- [`String`](class_string.md) **get_stage_compile_error** ( stage: [ShaderStage](#enum_renderingdevice_shaderstage) ) const[^const]

The compilation error message for the tessellation evaluation shader stage (set by the SPIR-V compiler and Godot). If empty, shader compilation was successful.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_rdshaderspirv_property_compile_error_vertex"></div>

[`String`](class_string.md) **compile_error_vertex** = ``""`` <div id="class_rdshaderspirv_property_compile_error_vertex"></div>

- `void` **set_stage_compile_error** ( stage: [ShaderStage](#enum_renderingdevice_shaderstage), compile_error: [`String`](class_string.md) )
- [`String`](class_string.md) **get_stage_compile_error** ( stage: [ShaderStage](#enum_renderingdevice_shaderstage) ) const[^const]

The compilation error message for the vertex shader stage (set by the SPIR-V compiler and Godot). If empty, shader compilation was successful.

<!-- rst-class:: classref-section-separator -->

---

## 方法说明

<div id="_class_rdshaderspirv_method_get_stage_bytecode"></div>

[`PackedByteArray`](class_packedbytearray.md) **get_stage_bytecode** ( stage: [ShaderStage](#enum_renderingdevice_shaderstage) ) const[^const]<div id="class_rdshaderspirv_method_get_stage_bytecode"></div>

Equivalent to getting one of [`bytecode_compute`](#class_rdshaderspirv_property_bytecode_compute), [`bytecode_fragment`](#class_rdshaderspirv_property_bytecode_fragment), [`bytecode_tesselation_control`](#class_rdshaderspirv_property_bytecode_tesselation_control), [`bytecode_tesselation_evaluation`](#class_rdshaderspirv_property_bytecode_tesselation_evaluation), [`bytecode_vertex`](#class_rdshaderspirv_property_bytecode_vertex).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_rdshaderspirv_method_get_stage_compile_error"></div>

[`String`](class_string.md) **get_stage_compile_error** ( stage: [ShaderStage](#enum_renderingdevice_shaderstage) ) const[^const]<div id="class_rdshaderspirv_method_get_stage_compile_error"></div>

Returns the compilation error message for the given shader `stage`. Equivalent to getting one of [`compile_error_compute`](#class_rdshaderspirv_property_compile_error_compute), [`compile_error_fragment`](#class_rdshaderspirv_property_compile_error_fragment), [`compile_error_tesselation_control`](#class_rdshaderspirv_property_compile_error_tesselation_control), [`compile_error_tesselation_evaluation`](#class_rdshaderspirv_property_compile_error_tesselation_evaluation), [`compile_error_vertex`](#class_rdshaderspirv_property_compile_error_vertex).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_rdshaderspirv_method_set_stage_bytecode"></div>

`void` **set_stage_bytecode** ( stage: [ShaderStage](#enum_renderingdevice_shaderstage), bytecode: [`PackedByteArray`](class_packedbytearray.md) )<div id="class_rdshaderspirv_method_set_stage_bytecode"></div>

Sets the SPIR-V `bytecode` for the given shader `stage`. Equivalent to setting one of [`bytecode_compute`](#class_rdshaderspirv_property_bytecode_compute), [`bytecode_fragment`](#class_rdshaderspirv_property_bytecode_fragment), [`bytecode_tesselation_control`](#class_rdshaderspirv_property_bytecode_tesselation_control), [`bytecode_tesselation_evaluation`](#class_rdshaderspirv_property_bytecode_tesselation_evaluation), [`bytecode_vertex`](#class_rdshaderspirv_property_bytecode_vertex).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_rdshaderspirv_method_set_stage_compile_error"></div>

`void` **set_stage_compile_error** ( stage: [ShaderStage](#enum_renderingdevice_shaderstage), compile_error: [`String`](class_string.md) )<div id="class_rdshaderspirv_method_set_stage_compile_error"></div>

Sets the compilation error message for the given shader `stage` to `compile_error`. Equivalent to setting one of [`compile_error_compute`](#class_rdshaderspirv_property_compile_error_compute), [`compile_error_fragment`](#class_rdshaderspirv_property_compile_error_fragment), [`compile_error_tesselation_control`](#class_rdshaderspirv_property_compile_error_tesselation_control), [`compile_error_tesselation_evaluation`](#class_rdshaderspirv_property_compile_error_tesselation_evaluation), [`compile_error_vertex`](#class_rdshaderspirv_property_compile_error_vertex).

[^virtual]: 本方法通常需要用户覆盖才能生效。
[^const]: 本方法无副作用，不会修改该实例的任何成员变量。
[^vararg]: 本方法除了能接受在此处描述的参数外，还能够继续接受任意数量的参数。
[^constructor]: 本方法用于构造某个类型。
[^static]: 调用本方法无需实例，可直接使用类名进行调用。
[^operator]: 本方法描述的是使用本类型作为左操作数的有效运算符。
[^bitfield]: 这个值是由下列位标志构成位掩码的整数。
[^void]: 无返回值。
