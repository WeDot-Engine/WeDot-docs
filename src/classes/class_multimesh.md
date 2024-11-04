<!-- ⚠ 请勿编辑本文件 ⚠ -->
<!-- 本文档使用脚本从 WeDot 引擎源码仓库生成。 -->
<!-- 生成脚本：https://github.com/WeDot-Engine/WeDot/tree/4.3/doc/tools/make_md.py； -->
<!-- 原文件：https://github.com/WeDot-Engine/WeDot/tree/4.3/doc/classes/MultiMesh.xml。 -->

<div id="_class_multimesh"></div>

# MultiMesh

**继承：** [`Resource`](class_resource.md) **<** [`RefCounted`](class_refcounted.md) **<** [`Object`](class_object.md)

Provides high-performance drawing of a mesh multiple times using GPU instancing.

## 描述

MultiMesh provides low-level mesh instancing. Drawing thousands of [`MeshInstance3D`](class_meshinstance3d.md) nodes can be slow, since each object is submitted to the GPU then drawn individually.

MultiMesh is much faster as it can draw thousands of instances with a single draw call, resulting in less API overhead.

As a drawback, if the instances are too far away from each other, performance may be reduced as every single instance will always render (they are spatially indexed as one, for the whole object).

Since instances may have any behavior, the AABB used for visibility must be provided by the user.

 **Note:** A MultiMesh is a single object, therefore the same maximum lights per object restriction applies. This means, that once the maximum lights are consumed by one or more instances, the rest of the MultiMesh instances will **not** receive any lighting.

 **Note:** Blend Shapes will be ignored if used in a MultiMesh.

## 属性

| [`PackedFloat32Array`](class_packedfloat32array.md) | [`buffer`](#class_multimesh_property_buffer)                                 | ``PackedFloat32Array()``   |
| [`PackedColorArray`](class_packedcolorarray.md)     | [`color_array`](#class_multimesh_property_color_array)                       |                            |
| [`AABB`](class_aabb.md)                             | [`custom_aabb`](#class_multimesh_property_custom_aabb)                       | ``AABB(0, 0, 0, 0, 0, 0)`` |
| [`PackedColorArray`](class_packedcolorarray.md)     | [`custom_data_array`](#class_multimesh_property_custom_data_array)           |                            |
| [`int`](class_int.md)                               | [`instance_count`](#class_multimesh_property_instance_count)                 | ``0``                      |
| [`Mesh`](class_mesh.md)                             | [`mesh`](#class_multimesh_property_mesh)                                     |                            |
| [`PackedVector2Array`](class_packedvector2array.md) | [`transform_2d_array`](#class_multimesh_property_transform_2d_array)         |                            |
| [`PackedVector3Array`](class_packedvector3array.md) | [`transform_array`](#class_multimesh_property_transform_array)               |                            |
| [TransformFormat](#enum_multimesh_transformformat)  | [`transform_format`](#class_multimesh_property_transform_format)             | ``0``                      |
| [`bool`](class_bool.md)                             | [`use_colors`](#class_multimesh_property_use_colors)                         | ``false``                  |
| [`bool`](class_bool.md)                             | [`use_custom_data`](#class_multimesh_property_use_custom_data)               | ``false``                  |
| [`int`](class_int.md)                               | [`visible_instance_count`](#class_multimesh_property_visible_instance_count) | ``-1``                     |

## 方法

| [`AABB`](class_aabb.md)               | [`get_aabb`](#class_multimesh_method_get_aabb) ( ) const[^const]                                                                                                       |
| [`Color`](class_color.md)             | [`get_instance_color`](#class_multimesh_method_get_instance_color) ( instance: [`int`](class_int.md) ) const[^const]                                                   |
| [`Color`](class_color.md)             | [`get_instance_custom_data`](#class_multimesh_method_get_instance_custom_data) ( instance: [`int`](class_int.md) ) const[^const]                                       |
| [`Transform3D`](class_transform3d.md) | [`get_instance_transform`](#class_multimesh_method_get_instance_transform) ( instance: [`int`](class_int.md) ) const[^const]                                           |
| [`Transform2D`](class_transform2d.md) | [`get_instance_transform_2d`](#class_multimesh_method_get_instance_transform_2d) ( instance: [`int`](class_int.md) ) const[^const]                                     |
| `void`                                | [`set_instance_color`](#class_multimesh_method_set_instance_color) ( instance: [`int`](class_int.md), color: [`Color`](class_color.md) )                               |
| `void`                                | [`set_instance_custom_data`](#class_multimesh_method_set_instance_custom_data) ( instance: [`int`](class_int.md), custom_data: [`Color`](class_color.md) )             |
| `void`                                | [`set_instance_transform`](#class_multimesh_method_set_instance_transform) ( instance: [`int`](class_int.md), transform: [`Transform3D`](class_transform3d.md) )       |
| `void`                                | [`set_instance_transform_2d`](#class_multimesh_method_set_instance_transform_2d) ( instance: [`int`](class_int.md), transform: [`Transform2D`](class_transform2d.md) ) |

<!-- rst-class:: classref-section-separator -->

---

## 枚举

<div id="_class_enum_multimesh_transformformat"></div>

enum **TransformFormat**: <div id="enum_multimesh_transformformat"></div>

<div id="_class_multimesh_constant_transform_2d"></div>

[TransformFormat](#enum_multimesh_transformformat) **TRANSFORM_2D** = ``0``

Use this when using 2D transforms.

<div id="_class_multimesh_constant_transform_3d"></div>

[TransformFormat](#enum_multimesh_transformformat) **TRANSFORM_3D** = ``1``

Use this when using 3D transforms.

<!-- rst-class:: classref-section-separator -->

---

## 属性说明

<div id="_class_multimesh_property_buffer"></div>

[`PackedFloat32Array`](class_packedfloat32array.md) **buffer** = ``PackedFloat32Array()`` <div id="class_multimesh_property_buffer"></div>

- `void` **set_buffer** ( value: [`PackedFloat32Array`](class_packedfloat32array.md) )
- [`PackedFloat32Array`](class_packedfloat32array.md) **get_buffer** ( )

该属性目前没有描述，请帮我们\ :ref:`贡献一个 <doc_updating_the_class_reference>`\ 吧！

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_multimesh_property_color_array"></div>

[`PackedColorArray`](class_packedcolorarray.md) **color_array** <div id="class_multimesh_property_color_array"></div>

**已弃用：** Accessing this property is very slow. Use [`set_instance_color`](#class_multimesh_method_set_instance_color) and [`get_instance_color`](#class_multimesh_method_get_instance_color) instead.

Array containing each [`Color`](class_color.md) used by all instances of this mesh.

**Note:** The returned array is *copied* and any changes to it will not update the original property value. See [`PackedColorArray`](class_packedcolorarray.md) for more details.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_multimesh_property_custom_aabb"></div>

[`AABB`](class_aabb.md) **custom_aabb** = ``AABB(0, 0, 0, 0, 0, 0)`` <div id="class_multimesh_property_custom_aabb"></div>

- `void` **set_custom_aabb** ( value: [`AABB`](class_aabb.md) )
- [`AABB`](class_aabb.md) **get_custom_aabb** ( )

Custom AABB for this MultiMesh resource. Setting this manually prevents costly runtime AABB recalculations.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_multimesh_property_custom_data_array"></div>

[`PackedColorArray`](class_packedcolorarray.md) **custom_data_array** <div id="class_multimesh_property_custom_data_array"></div>

**已弃用：** Accessing this property is very slow. Use [`set_instance_custom_data`](#class_multimesh_method_set_instance_custom_data) and [`get_instance_custom_data`](#class_multimesh_method_get_instance_custom_data) instead.

Array containing each custom data value used by all instances of this mesh, as a [`PackedColorArray`](class_packedcolorarray.md).

**Note:** The returned array is *copied* and any changes to it will not update the original property value. See [`PackedColorArray`](class_packedcolorarray.md) for more details.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_multimesh_property_instance_count"></div>

[`int`](class_int.md) **instance_count** = ``0`` <div id="class_multimesh_property_instance_count"></div>

- `void` **set_instance_count** ( value: [`int`](class_int.md) )
- [`int`](class_int.md) **get_instance_count** ( )

Number of instances that will get drawn. This clears and (re)sizes the buffers. Setting data format or flags afterwards will have no effect.

By default, all instances are drawn but you can limit this with [`visible_instance_count`](#class_multimesh_property_visible_instance_count).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_multimesh_property_mesh"></div>

[`Mesh`](class_mesh.md) **mesh** <div id="class_multimesh_property_mesh"></div>

- `void` **set_mesh** ( value: [`Mesh`](class_mesh.md) )
- [`Mesh`](class_mesh.md) **get_mesh** ( )

[`Mesh`](class_mesh.md) resource to be instanced.

The looks of the individual instances can be modified using [`set_instance_color`](#class_multimesh_method_set_instance_color) and [`set_instance_custom_data`](#class_multimesh_method_set_instance_custom_data).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_multimesh_property_transform_2d_array"></div>

[`PackedVector2Array`](class_packedvector2array.md) **transform_2d_array** <div id="class_multimesh_property_transform_2d_array"></div>

**已弃用：** Accessing this property is very slow. Use [`set_instance_transform_2d`](#class_multimesh_method_set_instance_transform_2d) and [`get_instance_transform_2d`](#class_multimesh_method_get_instance_transform_2d) instead.

Array containing each [`Transform2D`](class_transform2d.md) value used by all instances of this mesh, as a [`PackedVector2Array`](class_packedvector2array.md). Each transform is divided into 3 [`Vector2`](class_vector2.md) values corresponding to the transforms' `x`, `y`, and `origin`.

**Note:** The returned array is *copied* and any changes to it will not update the original property value. See [`PackedVector2Array`](class_packedvector2array.md) for more details.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_multimesh_property_transform_array"></div>

[`PackedVector3Array`](class_packedvector3array.md) **transform_array** <div id="class_multimesh_property_transform_array"></div>

**已弃用：** Accessing this property is very slow. Use [`set_instance_transform`](#class_multimesh_method_set_instance_transform) and [`get_instance_transform`](#class_multimesh_method_get_instance_transform) instead.

Array containing each [`Transform3D`](class_transform3d.md) value used by all instances of this mesh, as a [`PackedVector3Array`](class_packedvector3array.md). Each transform is divided into 4 [`Vector3`](class_vector3.md) values corresponding to the transforms' `x`, `y`, `z`, and `origin`.

**Note:** The returned array is *copied* and any changes to it will not update the original property value. See [`PackedVector3Array`](class_packedvector3array.md) for more details.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_multimesh_property_transform_format"></div>

[TransformFormat](#enum_multimesh_transformformat) **transform_format** = ``0`` <div id="class_multimesh_property_transform_format"></div>

- `void` **set_transform_format** ( value: [TransformFormat](#enum_multimesh_transformformat) )
- [TransformFormat](#enum_multimesh_transformformat) **get_transform_format** ( )

Format of transform used to transform mesh, either 2D or 3D.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_multimesh_property_use_colors"></div>

[`bool`](class_bool.md) **use_colors** = ``false`` <div id="class_multimesh_property_use_colors"></div>

- `void` **set_use_colors** ( value: [`bool`](class_bool.md) )
- [`bool`](class_bool.md) **is_using_colors** ( )

If `true`, the **MultiMesh** will use color data (see [`set_instance_color`](#class_multimesh_method_set_instance_color)). Can only be set when [`instance_count`](#class_multimesh_property_instance_count) is `0` or less. This means that you need to call this method before setting the instance count, or temporarily reset it to `0`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_multimesh_property_use_custom_data"></div>

[`bool`](class_bool.md) **use_custom_data** = ``false`` <div id="class_multimesh_property_use_custom_data"></div>

- `void` **set_use_custom_data** ( value: [`bool`](class_bool.md) )
- [`bool`](class_bool.md) **is_using_custom_data** ( )

If `true`, the **MultiMesh** will use custom data (see [`set_instance_custom_data`](#class_multimesh_method_set_instance_custom_data)). Can only be set when [`instance_count`](#class_multimesh_property_instance_count) is `0` or less. This means that you need to call this method before setting the instance count, or temporarily reset it to `0`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_multimesh_property_visible_instance_count"></div>

[`int`](class_int.md) **visible_instance_count** = ``-1`` <div id="class_multimesh_property_visible_instance_count"></div>

- `void` **set_visible_instance_count** ( value: [`int`](class_int.md) )
- [`int`](class_int.md) **get_visible_instance_count** ( )

Limits the number of instances drawn, -1 draws all instances. Changing this does not change the sizes of the buffers.

<!-- rst-class:: classref-section-separator -->

---

## 方法说明

<div id="_class_multimesh_method_get_aabb"></div>

[`AABB`](class_aabb.md) **get_aabb** ( ) const[^const]<div id="class_multimesh_method_get_aabb"></div>

Returns the visibility axis-aligned bounding box in local space.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_multimesh_method_get_instance_color"></div>

[`Color`](class_color.md) **get_instance_color** ( instance: [`int`](class_int.md) ) const[^const]<div id="class_multimesh_method_get_instance_color"></div>

Gets a specific instance's color multiplier.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_multimesh_method_get_instance_custom_data"></div>

[`Color`](class_color.md) **get_instance_custom_data** ( instance: [`int`](class_int.md) ) const[^const]<div id="class_multimesh_method_get_instance_custom_data"></div>

Returns the custom data that has been set for a specific instance.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_multimesh_method_get_instance_transform"></div>

[`Transform3D`](class_transform3d.md) **get_instance_transform** ( instance: [`int`](class_int.md) ) const[^const]<div id="class_multimesh_method_get_instance_transform"></div>

Returns the [`Transform3D`](class_transform3d.md) of a specific instance.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_multimesh_method_get_instance_transform_2d"></div>

[`Transform2D`](class_transform2d.md) **get_instance_transform_2d** ( instance: [`int`](class_int.md) ) const[^const]<div id="class_multimesh_method_get_instance_transform_2d"></div>

Returns the [`Transform2D`](class_transform2d.md) of a specific instance.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_multimesh_method_set_instance_color"></div>

`void` **set_instance_color** ( instance: [`int`](class_int.md), color: [`Color`](class_color.md) )<div id="class_multimesh_method_set_instance_color"></div>

Sets the color of a specific instance by *multiplying* the mesh's existing vertex colors. This allows for different color tinting per instance.

 **Note:** Each component is stored in 32 bits in the Forward+ and Mobile rendering methods, but is packed into 16 bits in the Compatibility rendering method.

For the color to take effect, ensure that [`use_colors`](#class_multimesh_property_use_colors) is `true` on the **MultiMesh** and [`BaseMaterial3D.vertex_color_use_as_albedo`](#class_basematerial3d_property_vertex_color_use_as_albedo) is `true` on the material. If you intend to set an absolute color instead of tinting, make sure the material's albedo color is set to pure white (`Color(1, 1, 1)`).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_multimesh_method_set_instance_custom_data"></div>

`void` **set_instance_custom_data** ( instance: [`int`](class_int.md), custom_data: [`Color`](class_color.md) )<div id="class_multimesh_method_set_instance_custom_data"></div>

Sets custom data for a specific instance. `custom_data` is a [`Color`](class_color.md) type only to contain 4 floating-point numbers.

 **Note:** Each number is stored in 32 bits in the Forward+ and Mobile rendering methods, but is packed into 16 bits in the Compatibility rendering method.

For the custom data to be used, ensure that [`use_custom_data`](#class_multimesh_property_use_custom_data) is `true`.

This custom instance data has to be manually accessed in your custom shader using `INSTANCE_CUSTOM`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_multimesh_method_set_instance_transform"></div>

`void` **set_instance_transform** ( instance: [`int`](class_int.md), transform: [`Transform3D`](class_transform3d.md) )<div id="class_multimesh_method_set_instance_transform"></div>

Sets the [`Transform3D`](class_transform3d.md) for a specific instance.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_multimesh_method_set_instance_transform_2d"></div>

`void` **set_instance_transform_2d** ( instance: [`int`](class_int.md), transform: [`Transform2D`](class_transform2d.md) )<div id="class_multimesh_method_set_instance_transform_2d"></div>

Sets the [`Transform2D`](class_transform2d.md) for a specific instance.

[^virtual]: 本方法通常需要用户覆盖才能生效。
[^const]: 本方法无副作用，不会修改该实例的任何成员变量。
[^vararg]: 本方法除了能接受在此处描述的参数外，还能够继续接受任意数量的参数。
[^constructor]: 本方法用于构造某个类型。
[^static]: 调用本方法无需实例，可直接使用类名进行调用。
[^operator]: 本方法描述的是使用本类型作为左操作数的有效运算符。
[^bitfield]: 这个值是由下列位标志构成位掩码的整数。
[^void]: 无返回值。
