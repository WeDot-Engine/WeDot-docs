<!-- ⚠ 请勿编辑本文件 ⚠ -->
<!-- 本文档使用脚本从 WeDot 引擎源码仓库生成。 -->
<!-- 生成脚本：https://github.com/WeDot-Engine/WeDot/tree/master/doc/tools/make_md.py； -->
<!-- 原文件：https://github.com/WeDot-Engine/WeDot/tree/master/doc/classes/RDShaderSource.xml。 -->

<div id="_class_rdshadersource"></div>

# RDShaderSource

**继承：** [`RefCounted`](class_refcounted.md) **<** [`Object`](class_object.md)

Shader source code (used by [`RenderingDevice`](class_renderingdevice.md)).

## 描述

Shader source code in text form.

See also [`RDShaderFile`](class_rdshaderfile.md). **RDShaderSource** is only meant to be used with the [`RenderingDevice`](class_renderingdevice.md) API. It should not be confused with Godot's own [`Shader`](class_shader.md) resource, which is what Godot's various nodes use for high-level shader programming.

## 属性

|||
|:-:|:--|
| [ShaderLanguage](#enum_renderingdevice_shaderlanguage) | [`language`](class_rdshadersource.md#class_rdshadersource_property_language)                                           | ``0``  |
| [`String`](class_string.md)                            | [`source_compute`](class_rdshadersource.md#class_rdshadersource_property_source_compute)                               | ``""`` |
| [`String`](class_string.md)                            | [`source_fragment`](class_rdshadersource.md#class_rdshadersource_property_source_fragment)                             | ``""`` |
| [`String`](class_string.md)                            | [`source_tesselation_control`](class_rdshadersource.md#class_rdshadersource_property_source_tesselation_control)       | ``""`` |
| [`String`](class_string.md)                            | [`source_tesselation_evaluation`](class_rdshadersource.md#class_rdshadersource_property_source_tesselation_evaluation) | ``""`` |
| [`String`](class_string.md)                            | [`source_vertex`](class_rdshadersource.md#class_rdshadersource_property_source_vertex)                                 | ``""`` |

## 方法

|||
|:-:|:--|
| [`String`](class_string.md) | [`get_stage_source`](class_rdshadersource.md#class_rdshadersource_method_get_stage_source) ( stage: [ShaderStage](#enum_renderingdevice_shaderstage) ) const[^const]                        |
| `void`                      | [`set_stage_source`](class_rdshadersource.md#class_rdshadersource_method_set_stage_source) ( stage: [ShaderStage](#enum_renderingdevice_shaderstage), source: [`String`](class_string.md) ) |

<!-- rst-class:: classref-section-separator -->

---

## 属性说明

<div id="_class_rdshadersource_property_language"></div>

[ShaderLanguage](#enum_renderingdevice_shaderlanguage) **language** = ``0`` <div id="class_rdshadersource_property_language"></div>

- `void` **set_language** ( value: [ShaderLanguage](#enum_renderingdevice_shaderlanguage) )
- [ShaderLanguage](#enum_renderingdevice_shaderlanguage) **get_language** ( )

The language the shader is written in.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_rdshadersource_property_source_compute"></div>

[`String`](class_string.md) **source_compute** = ``""`` <div id="class_rdshadersource_property_source_compute"></div>

- `void` **set_stage_source** ( stage: [ShaderStage](#enum_renderingdevice_shaderstage), source: [`String`](class_string.md) )
- [`String`](class_string.md) **get_stage_source** ( stage: [ShaderStage](#enum_renderingdevice_shaderstage) ) const[^const]

Source code for the shader's compute stage.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_rdshadersource_property_source_fragment"></div>

[`String`](class_string.md) **source_fragment** = ``""`` <div id="class_rdshadersource_property_source_fragment"></div>

- `void` **set_stage_source** ( stage: [ShaderStage](#enum_renderingdevice_shaderstage), source: [`String`](class_string.md) )
- [`String`](class_string.md) **get_stage_source** ( stage: [ShaderStage](#enum_renderingdevice_shaderstage) ) const[^const]

Source code for the shader's fragment stage.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_rdshadersource_property_source_tesselation_control"></div>

[`String`](class_string.md) **source_tesselation_control** = ``""`` <div id="class_rdshadersource_property_source_tesselation_control"></div>

- `void` **set_stage_source** ( stage: [ShaderStage](#enum_renderingdevice_shaderstage), source: [`String`](class_string.md) )
- [`String`](class_string.md) **get_stage_source** ( stage: [ShaderStage](#enum_renderingdevice_shaderstage) ) const[^const]

Source code for the shader's tessellation control stage.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_rdshadersource_property_source_tesselation_evaluation"></div>

[`String`](class_string.md) **source_tesselation_evaluation** = ``""`` <div id="class_rdshadersource_property_source_tesselation_evaluation"></div>

- `void` **set_stage_source** ( stage: [ShaderStage](#enum_renderingdevice_shaderstage), source: [`String`](class_string.md) )
- [`String`](class_string.md) **get_stage_source** ( stage: [ShaderStage](#enum_renderingdevice_shaderstage) ) const[^const]

Source code for the shader's tessellation evaluation stage.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_rdshadersource_property_source_vertex"></div>

[`String`](class_string.md) **source_vertex** = ``""`` <div id="class_rdshadersource_property_source_vertex"></div>

- `void` **set_stage_source** ( stage: [ShaderStage](#enum_renderingdevice_shaderstage), source: [`String`](class_string.md) )
- [`String`](class_string.md) **get_stage_source** ( stage: [ShaderStage](#enum_renderingdevice_shaderstage) ) const[^const]

Source code for the shader's vertex stage.

<!-- rst-class:: classref-section-separator -->

---

## 方法说明

<div id="_class_rdshadersource_method_get_stage_source"></div>

[`String`](class_string.md) **get_stage_source** ( stage: [ShaderStage](#enum_renderingdevice_shaderstage) ) const[^const]<div id="class_rdshadersource_method_get_stage_source"></div>

Returns source code for the specified shader `stage`. Equivalent to getting one of [`source_compute`](class_rdshadersource.md#class_rdshadersource_property_source_compute), [`source_fragment`](class_rdshadersource.md#class_rdshadersource_property_source_fragment), [`source_tesselation_control`](class_rdshadersource.md#class_rdshadersource_property_source_tesselation_control), [`source_tesselation_evaluation`](class_rdshadersource.md#class_rdshadersource_property_source_tesselation_evaluation) or [`source_vertex`](class_rdshadersource.md#class_rdshadersource_property_source_vertex).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_rdshadersource_method_set_stage_source"></div>

`void` **set_stage_source** ( stage: [ShaderStage](#enum_renderingdevice_shaderstage), source: [`String`](class_string.md) )<div id="class_rdshadersource_method_set_stage_source"></div>

Sets `source` code for the specified shader `stage`. Equivalent to setting one of [`source_compute`](class_rdshadersource.md#class_rdshadersource_property_source_compute), [`source_fragment`](class_rdshadersource.md#class_rdshadersource_property_source_fragment), [`source_tesselation_control`](class_rdshadersource.md#class_rdshadersource_property_source_tesselation_control), [`source_tesselation_evaluation`](class_rdshadersource.md#class_rdshadersource_property_source_tesselation_evaluation) or [`source_vertex`](class_rdshadersource.md#class_rdshadersource_property_source_vertex).

 **Note:** If you set the compute shader source code using this method directly, remember to remove the Godot-specific hint `#[compute]`.

[^virtual]: 本方法通常需要用户覆盖才能生效。
[^const]: 本方法无副作用，不会修改该实例的任何成员变量。
[^vararg]: 本方法除了能接受在此处描述的参数外，还能够继续接受任意数量的参数。
[^constructor]: 本方法用于构造某个类型。
[^static]: 调用本方法无需实例，可直接使用类名进行调用。
[^operator]: 本方法描述的是使用本类型作为左操作数的有效运算符。
[^bitfield]: 这个值是由下列位标志构成位掩码的整数。
[^void]: 无返回值。
