<!-- ⚠ 请勿编辑本文件 ⚠ -->
<!-- 本文档使用脚本从 WeDot 引擎源码仓库生成。 -->
<!-- 生成脚本：https://github.com/WeDot-Engine/WeDot/tree/master/doc/tools/make_md.py； -->
<!-- 原文件：https://github.com/WeDot-Engine/WeDot/tree/master/doc/classes/Shader.xml。 -->

<div id="_class_shader"></div>

# Shader

**继承：** [`Resource`](class_resource.md) **<** [`RefCounted`](class_refcounted.md) **<** [`Object`](class_object.md)

**派生：** [`VisualShader`](class_visualshader.md)

A shader implemented in the Godot shading language.

## 描述

A custom shader program implemented in the Godot shading language, saved with the `.gdshader` extension.

This class is used by a [`ShaderMaterial`](class_shadermaterial.md) and allows you to write your own custom behavior for rendering visual items or updating particle information. For a detailed explanation and usage, please see the tutorials linked below.

## 属性

|||
|:-:|:--|
| [`String`](class_string.md) | [`code`](class_shader.md#class_shader_property_code) | ``""`` |

## 方法

|||
|:-:|:--|
| [`Texture`](class_texture.md) | [`get_default_texture_parameter`](class_shader.md#class_shader_method_get_default_texture_parameter) ( name: [`StringName`](class_stringname.md), index: [`int`](class_int.md) = 0 ) const[^const]                           |
| [Mode](#enum_shader_mode)     | [`get_mode`](class_shader.md#class_shader_method_get_mode) ( ) const[^const]                                                                                                                                                 |
| [`Array`](class_array.md)     | [`get_shader_uniform_list`](class_shader.md#class_shader_method_get_shader_uniform_list) ( get_groups: [`bool`](class_bool.md) = false )                                                                                     |
| `void`                        | [`inspect_native_shader_code`](class_shader.md#class_shader_method_inspect_native_shader_code) ( )                                                                                                                           |
| `void`                        | [`set_default_texture_parameter`](class_shader.md#class_shader_method_set_default_texture_parameter) ( name: [`StringName`](class_stringname.md), texture: [`Texture`](class_texture.md), index: [`int`](class_int.md) = 0 ) |

<!-- rst-class:: classref-section-separator -->

---

## 枚举

<div id="_class_enum_shader_mode"></div>

enum **Mode**: <div id="enum_shader_mode"></div>

<div id="_class_shader_constant_mode_spatial"></div>

[Mode](#enum_shader_mode) **MODE_SPATIAL** = ``0``

Mode used to draw all 3D objects.

<div id="_class_shader_constant_mode_canvas_item"></div>

[Mode](#enum_shader_mode) **MODE_CANVAS_ITEM** = ``1``

Mode used to draw all 2D objects.

<div id="_class_shader_constant_mode_particles"></div>

[Mode](#enum_shader_mode) **MODE_PARTICLES** = ``2``

Mode used to calculate particle information on a per-particle basis. Not used for drawing.

<div id="_class_shader_constant_mode_sky"></div>

[Mode](#enum_shader_mode) **MODE_SKY** = ``3``

Mode used for drawing skies. Only works with shaders attached to [`Sky`](class_sky.md) objects.

<div id="_class_shader_constant_mode_fog"></div>

[Mode](#enum_shader_mode) **MODE_FOG** = ``4``

Mode used for setting the color and density of volumetric fog effect.

<!-- rst-class:: classref-section-separator -->

---

## 属性说明

<div id="_class_shader_property_code"></div>

[`String`](class_string.md) **code** = ``""`` <div id="class_shader_property_code"></div>

- `void` **set_code** ( value: [`String`](class_string.md) )
- [`String`](class_string.md) **get_code** ( )

Returns the shader's code as the user has written it, not the full generated code used internally.

<!-- rst-class:: classref-section-separator -->

---

## 方法说明

<div id="_class_shader_method_get_default_texture_parameter"></div>

[`Texture`](class_texture.md) **get_default_texture_parameter** ( name: [`StringName`](class_stringname.md), index: [`int`](class_int.md) = 0 ) const[^const]<div id="class_shader_method_get_default_texture_parameter"></div>

Returns the texture that is set as default for the specified parameter.

 **Note:** `name` must match the name of the uniform in the code exactly.

 **Note:** If the sampler array is used use `index` to access the specified texture.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_shader_method_get_mode"></div>

[Mode](#enum_shader_mode) **get_mode** ( ) const[^const]<div id="class_shader_method_get_mode"></div>

Returns the shader mode for the shader.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_shader_method_get_shader_uniform_list"></div>

[`Array`](class_array.md) **get_shader_uniform_list** ( get_groups: [`bool`](class_bool.md) = false )<div id="class_shader_method_get_shader_uniform_list"></div>

Get the list of shader uniforms that can be assigned to a [`ShaderMaterial`](class_shadermaterial.md), for use with [`ShaderMaterial.set_shader_parameter`](class_shadermaterial.md#class_shadermaterial_method_set_shader_parameter) and [`ShaderMaterial.get_shader_parameter`](class_shadermaterial.md#class_shadermaterial_method_get_shader_parameter). The parameters returned are contained in dictionaries in a similar format to the ones returned by [`Object.get_property_list`](class_object.md#class_object_method_get_property_list).

If argument `get_groups` is true, parameter grouping hints will be provided.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_shader_method_inspect_native_shader_code"></div>

`void` **inspect_native_shader_code** ( )<div id="class_shader_method_inspect_native_shader_code"></div>

Only available when running in the editor. Opens a popup that visualizes the generated shader code, including all variants and internal shader code. See also [`Material.inspect_native_shader_code`](class_material.md#class_material_method_inspect_native_shader_code).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_shader_method_set_default_texture_parameter"></div>

`void` **set_default_texture_parameter** ( name: [`StringName`](class_stringname.md), texture: [`Texture`](class_texture.md), index: [`int`](class_int.md) = 0 )<div id="class_shader_method_set_default_texture_parameter"></div>

Sets the default texture to be used with a texture uniform. The default is used if a texture is not set in the [`ShaderMaterial`](class_shadermaterial.md).

 **Note:** `name` must match the name of the uniform in the code exactly.

 **Note:** If the sampler array is used use `index` to access the specified texture.

[^virtual]: 本方法通常需要用户覆盖才能生效。
[^const]: 本方法无副作用，不会修改该实例的任何成员变量。
[^vararg]: 本方法除了能接受在此处描述的参数外，还能够继续接受任意数量的参数。
[^constructor]: 本方法用于构造某个类型。
[^static]: 调用本方法无需实例，可直接使用类名进行调用。
[^operator]: 本方法描述的是使用本类型作为左操作数的有效运算符。
[^bitfield]: 这个值是由下列位标志构成位掩码的整数。
[^void]: 无返回值。
