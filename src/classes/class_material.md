<!-- ⚠ 请勿编辑本文件 ⚠ -->
<!-- 本文档使用脚本从 WeDot 引擎源码仓库生成。 -->
<!-- 生成脚本：https://github.com/WeDot-Engine/WeDot/tree/4.3/doc/tools/make_md.py； -->
<!-- 原文件：https://github.com/WeDot-Engine/WeDot/tree/4.3/doc/classes/Material.xml。 -->

<div id="_class_material"></div>

# Material

**继承：** [`Resource`](class_resource.md) **<** [`RefCounted`](class_refcounted.md) **<** [`Object`](class_object.md)

**派生：** [`BaseMaterial3D`](class_basematerial3d.md), [`CanvasItemMaterial`](class_canvasitemmaterial.md), [`FogMaterial`](class_fogmaterial.md), [`PanoramaSkyMaterial`](class_panoramaskymaterial.md), [`ParticleProcessMaterial`](class_particleprocessmaterial.md), [`PhysicalSkyMaterial`](class_physicalskymaterial.md), [`PlaceholderMaterial`](class_placeholdermaterial.md), [`ProceduralSkyMaterial`](class_proceduralskymaterial.md), [`ShaderMaterial`](class_shadermaterial.md)

Virtual base class for applying visual properties to an object, such as color and roughness.

## 描述

**Material** is a base resource used for coloring and shading geometry. All materials inherit from it and almost all [`VisualInstance3D`](class_visualinstance3d.md) derived nodes carry a **Material**. A few flags and parameters are shared between all material types and are configured here.

Importantly, you can inherit from **Material** to create your own custom material type in script or in GDExtension.

## 属性

| [`Material`](class_material.md) | [`next_pass`](#class_material_property_next_pass)             |
| [`int`](class_int.md)           | [`render_priority`](#class_material_property_render_priority) |

## 方法

| [`bool`](class_bool.md)         | [`_can_do_next_pass`](#class_material_private_method__can_do_next_pass) ( ) virtual[^virtual] const[^const]               |
| [`bool`](class_bool.md)         | [`_can_use_render_priority`](#class_material_private_method__can_use_render_priority) ( ) virtual[^virtual] const[^const] |
| [Mode](#enum_shader_mode)       | [`_get_shader_mode`](#class_material_private_method__get_shader_mode) ( ) virtual[^virtual] const[^const]                 |
| [`RID`](class_rid.md)           | [`_get_shader_rid`](#class_material_private_method__get_shader_rid) ( ) virtual[^virtual] const[^const]                   |
| [`Resource`](class_resource.md) | [`create_placeholder`](#class_material_method_create_placeholder) ( ) const[^const]                                       |
| `void`                          | [`inspect_native_shader_code`](#class_material_method_inspect_native_shader_code) ( )                                     |

<!-- rst-class:: classref-section-separator -->

---

## 常量

<div id="_class_material_constant_render_priority_max"></div>

**RENDER_PRIORITY_MAX** = ``127`` <div id="class_material_constant_render_priority_max"></div>

Maximum value for the [`render_priority`](#class_material_property_render_priority) parameter.

<div id="_class_material_constant_render_priority_min"></div>

**RENDER_PRIORITY_MIN** = ``-128`` <div id="class_material_constant_render_priority_min"></div>

Minimum value for the [`render_priority`](#class_material_property_render_priority) parameter.

<!-- rst-class:: classref-section-separator -->

---

## 属性说明

<div id="_class_material_property_next_pass"></div>

[`Material`](class_material.md) **next_pass** <div id="class_material_property_next_pass"></div>

- `void` **set_next_pass** ( value: [`Material`](class_material.md) )
- [`Material`](class_material.md) **get_next_pass** ( )

Sets the **Material** to be used for the next pass. This renders the object again using a different material.

 **Note:** [`next_pass`](#class_material_property_next_pass) materials are not necessarily drawn immediately after the source **Material**. Draw order is determined by material properties, [`render_priority`](#class_material_property_render_priority), and distance to camera.

 **Note:** This only applies to [`StandardMaterial3D`](class_standardmaterial3d.md) s and [`ShaderMaterial`](class_shadermaterial.md) s with type "Spatial".

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_material_property_render_priority"></div>

[`int`](class_int.md) **render_priority** <div id="class_material_property_render_priority"></div>

- `void` **set_render_priority** ( value: [`int`](class_int.md) )
- [`int`](class_int.md) **get_render_priority** ( )

Sets the render priority for objects in 3D scenes. Higher priority objects will be sorted in front of lower priority objects. In other words, all objects with [`render_priority`](#class_material_property_render_priority) `1` will render before all objects with [`render_priority`](#class_material_property_render_priority) `0`.

 **Note:** This only applies to [`StandardMaterial3D`](class_standardmaterial3d.md) s and [`ShaderMaterial`](class_shadermaterial.md) s with type "Spatial".

 **Note:** This will not impact how transparent objects are sorted relative to opaque objects or how dynamic meshes will be sorted relative to other opaque meshes. This is because all transparent objects are drawn after all opaque objects and all dynamic opaque meshes are drawn before other opaque meshes.

<!-- rst-class:: classref-section-separator -->

---

## 方法说明

<div id="_class_material_private_method__can_do_next_pass"></div>

[`bool`](class_bool.md) **_can_do_next_pass** ( ) virtual[^virtual] const[^const]<div id="class_material_private_method__can_do_next_pass"></div>

Only exposed for the purpose of overriding. You cannot call this function directly. Used internally to determine if [`next_pass`](#class_material_property_next_pass) should be shown in the editor or not.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_material_private_method__can_use_render_priority"></div>

[`bool`](class_bool.md) **_can_use_render_priority** ( ) virtual[^virtual] const[^const]<div id="class_material_private_method__can_use_render_priority"></div>

Only exposed for the purpose of overriding. You cannot call this function directly. Used internally to determine if [`render_priority`](#class_material_property_render_priority) should be shown in the editor or not.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_material_private_method__get_shader_mode"></div>

[Mode](#enum_shader_mode) **_get_shader_mode** ( ) virtual[^virtual] const[^const]<div id="class_material_private_method__get_shader_mode"></div>

Only exposed for the purpose of overriding. You cannot call this function directly. Used internally by various editor tools.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_material_private_method__get_shader_rid"></div>

[`RID`](class_rid.md) **_get_shader_rid** ( ) virtual[^virtual] const[^const]<div id="class_material_private_method__get_shader_rid"></div>

Only exposed for the purpose of overriding. You cannot call this function directly. Used internally by various editor tools. Used to access the RID of the **Material**'s [`Shader`](class_shader.md).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_material_method_create_placeholder"></div>

[`Resource`](class_resource.md) **create_placeholder** ( ) const[^const]<div id="class_material_method_create_placeholder"></div>

Creates a placeholder version of this resource ([`PlaceholderMaterial`](class_placeholdermaterial.md)).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_material_method_inspect_native_shader_code"></div>

`void` **inspect_native_shader_code** ( )<div id="class_material_method_inspect_native_shader_code"></div>

Only available when running in the editor. Opens a popup that visualizes the generated shader code, including all variants and internal shader code.

[^virtual]: 本方法通常需要用户覆盖才能生效。
[^const]: 本方法无副作用，不会修改该实例的任何成员变量。
[^vararg]: 本方法除了能接受在此处描述的参数外，还能够继续接受任意数量的参数。
[^constructor]: 本方法用于构造某个类型。
[^static]: 调用本方法无需实例，可直接使用类名进行调用。
[^operator]: 本方法描述的是使用本类型作为左操作数的有效运算符。
[^bitfield]: 这个值是由下列位标志构成位掩码的整数。
[^void]: 无返回值。
