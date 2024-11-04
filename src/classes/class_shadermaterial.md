<!-- ⚠ 请勿编辑本文件 ⚠ -->
<!-- 本文档使用脚本从 WeDot 引擎源码仓库生成。 -->
<!-- 生成脚本：https://github.com/WeDot-Engine/WeDot/tree/4.3/doc/tools/make_md.py； -->
<!-- 原文件：https://github.com/WeDot-Engine/WeDot/tree/4.3/doc/classes/ShaderMaterial.xml。 -->

<div id="_class_shadermaterial"></div>

# ShaderMaterial

**继承：** [`Material`](class_material.md) **<** [`Resource`](class_resource.md) **<** [`RefCounted`](class_refcounted.md) **<** [`Object`](class_object.md)

A material defined by a custom [`Shader`](class_shader.md) program and the values of its shader parameters.

## 描述

A material that uses a custom [`Shader`](class_shader.md) program to render visual items (canvas items, meshes, skies, fog), or to process particles. Compared to other materials, **ShaderMaterial** gives deeper control over the generated shader code. For more information, see the shaders documentation index below.

Multiple **ShaderMaterial** s can use the same shader and configure different values for the shader uniforms.

 **Note:** For performance reasons, the [`Resource.changed`](#class_resource_signal_changed) signal is only emitted when the [`Resource.resource_name`](#class_resource_property_resource_name) changes. Only in editor, it is also emitted for [`shader`](#class_shadermaterial_property_shader) changes.

## 属性

| [`Shader`](class_shader.md) | [`shader`](#class_shadermaterial_property_shader) |

## 方法

| [`Variant`](class_variant.md) | [`get_shader_parameter`](#class_shadermaterial_method_get_shader_parameter) ( param: [`StringName`](class_stringname.md) ) const[^const]                         |
| `void`                        | [`set_shader_parameter`](#class_shadermaterial_method_set_shader_parameter) ( param: [`StringName`](class_stringname.md), value: [`Variant`](class_variant.md) ) |

<!-- rst-class:: classref-section-separator -->

---

## 属性说明

<div id="_class_shadermaterial_property_shader"></div>

[`Shader`](class_shader.md) **shader** <div id="class_shadermaterial_property_shader"></div>

- `void` **set_shader** ( value: [`Shader`](class_shader.md) )
- [`Shader`](class_shader.md) **get_shader** ( )

The [`Shader`](class_shader.md) program used to render this material.

<!-- rst-class:: classref-section-separator -->

---

## 方法说明

<div id="_class_shadermaterial_method_get_shader_parameter"></div>

[`Variant`](class_variant.md) **get_shader_parameter** ( param: [`StringName`](class_stringname.md) ) const[^const]<div id="class_shadermaterial_method_get_shader_parameter"></div>

Returns the current value set for this material of a uniform in the shader.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_shadermaterial_method_set_shader_parameter"></div>

`void` **set_shader_parameter** ( param: [`StringName`](class_stringname.md), value: [`Variant`](class_variant.md) )<div id="class_shadermaterial_method_set_shader_parameter"></div>

Changes the value set for this material of a uniform in the shader.

 **Note:** `param` is case-sensitive and must match the name of the uniform in the code exactly (not the capitalized name in the inspector).

 **Note:** Changes to the shader uniform will be effective on all instances using this **ShaderMaterial**. To prevent this, use per-instance uniforms with [`GeometryInstance3D.set_instance_shader_parameter`](#class_geometryinstance3d_method_set_instance_shader_parameter) or duplicate the **ShaderMaterial** resource using [`Resource.duplicate`](#class_resource_method_duplicate). Per-instance uniforms allow for better shader reuse and are therefore faster, so they should be preferred over duplicating the **ShaderMaterial** when possible.

[^virtual]: 本方法通常需要用户覆盖才能生效。
[^const]: 本方法无副作用，不会修改该实例的任何成员变量。
[^vararg]: 本方法除了能接受在此处描述的参数外，还能够继续接受任意数量的参数。
[^constructor]: 本方法用于构造某个类型。
[^static]: 调用本方法无需实例，可直接使用类名进行调用。
[^operator]: 本方法描述的是使用本类型作为左操作数的有效运算符。
[^bitfield]: 这个值是由下列位标志构成位掩码的整数。
[^void]: 无返回值。
