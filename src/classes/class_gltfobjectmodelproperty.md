<!-- ⚠ 请勿编辑本文件 ⚠ -->
<!-- 本文档使用脚本从 WeDot 引擎源码仓库生成。 -->
<!-- 生成脚本：https://github.com/WeDot-Engine/WeDot/tree/master/doc/tools/make_md.py； -->
<!-- 原文件：https://github.com/WeDot-Engine/WeDot/tree/master/modules/gltf/doc_classes/GLTFObjectModelProperty.xml。 -->

<div id="_class_gltfobjectmodelproperty"></div>

# GLTFObjectModelProperty

**继承：** [`RefCounted`](class_refcounted.md) **<** [`Object`](class_object.md)

Describes how to access a property as defined in the glTF object model.

## 描述

GLTFObjectModelProperty defines a mapping between a property in the glTF object model and a NodePath in the Godot scene tree. This can be used to animate properties in a glTF file using the `KHR_animation_pointer` extension, or to access them through an engine-agnostic script such as a behavior graph as defined by the `KHR_interactivity` extension.

The glTF property is identified by JSON pointer(s) stored in [`json_pointers`](class_gltfobjectmodelproperty.md#class_gltfobjectmodelproperty_property_json_pointers), while the Godot property it maps to is defined by [`node_paths`](class_gltfobjectmodelproperty.md#class_gltfobjectmodelproperty_property_node_paths). In most cases [`json_pointers`](class_gltfobjectmodelproperty.md#class_gltfobjectmodelproperty_property_json_pointers) and [`node_paths`](class_gltfobjectmodelproperty.md#class_gltfobjectmodelproperty_property_node_paths) will each only have one item, but in some cases a single glTF JSON pointer will map to multiple Godot properties, or a single Godot property will be mapped to multiple glTF JSON pointers, or it might be a many-to-many relationship.

 [`Expression`](class_expression.md) objects can be used to define conversions between the data, such as when glTF defines an angle in radians and Godot uses degrees. The [`object_model_type`](class_gltfobjectmodelproperty.md#class_gltfobjectmodelproperty_property_object_model_type) property defines the type of data stored in the glTF file as defined by the object model, see [GLTFObjectModelType](#enum_gltfobjectmodelproperty_gltfobjectmodeltype) for possible values.

## 属性

|||
|:-:|:--|
| [`Expression`](class_expression.md)                                       | [`gltf_to_godot_expression`](class_gltfobjectmodelproperty.md#class_gltfobjectmodelproperty_property_gltf_to_godot_expression) |        |
| [`Expression`](class_expression.md)                                       | [`godot_to_gltf_expression`](class_gltfobjectmodelproperty.md#class_gltfobjectmodelproperty_property_godot_to_gltf_expression) |        |
| [Array](class_array.md) [`PackedStringArray`](class_packedstringarray.md) | [`json_pointers`](class_gltfobjectmodelproperty.md#class_gltfobjectmodelproperty_property_json_pointers)                       | ``[]`` |
| [Array](class_array.md) [`NodePath`](class_nodepath.md)                   | [`node_paths`](class_gltfobjectmodelproperty.md#class_gltfobjectmodelproperty_property_node_paths)                             | ``[]`` |
| [GLTFObjectModelType](#enum_gltfobjectmodelproperty_gltfobjectmodeltype)  | [`object_model_type`](class_gltfobjectmodelproperty.md#class_gltfobjectmodelproperty_property_object_model_type)               | ``0``  |
| [Variant.Type](#enum_@globalscope_variant.type)                           | [`variant_type`](class_gltfobjectmodelproperty.md#class_gltfobjectmodelproperty_property_variant_type)                         | ``0``  |

## 方法

|||
|:-:|:--|
| `void`                                                  | [`append_node_path`](class_gltfobjectmodelproperty.md#class_gltfobjectmodelproperty_method_append_node_path) ( node_path: [`NodePath`](class_nodepath.md) )                                                                                                |
| `void`                                                  | [`append_path_to_property`](class_gltfobjectmodelproperty.md#class_gltfobjectmodelproperty_method_append_path_to_property) ( node_path: [`NodePath`](class_nodepath.md), prop_name: [`StringName`](class_stringname.md) )                                  |
| [GLTFAccessorType](#enum_gltfaccessor_gltfaccessortype) | [`get_accessor_type`](class_gltfobjectmodelproperty.md#class_gltfobjectmodelproperty_method_get_accessor_type) ( ) const[^const]                                                                                                                           |
| [`bool`](class_bool.md)                                 | [`has_json_pointers`](class_gltfobjectmodelproperty.md#class_gltfobjectmodelproperty_method_has_json_pointers) ( ) const[^const]                                                                                                                           |
| [`bool`](class_bool.md)                                 | [`has_node_paths`](class_gltfobjectmodelproperty.md#class_gltfobjectmodelproperty_method_has_node_paths) ( ) const[^const]                                                                                                                                 |
| `void`                                                  | [`set_types`](class_gltfobjectmodelproperty.md#class_gltfobjectmodelproperty_method_set_types) ( variant_type: [Variant.Type](#enum_@globalscope_variant.type), obj_model_type: [GLTFObjectModelType](#enum_gltfobjectmodelproperty_gltfobjectmodeltype) ) |

<!-- rst-class:: classref-section-separator -->

---

## 枚举

<div id="_class_enum_gltfobjectmodelproperty_gltfobjectmodeltype"></div>

enum **GLTFObjectModelType**: <div id="enum_gltfobjectmodelproperty_gltfobjectmodeltype"></div>

<div id="_class_gltfobjectmodelproperty_constant_gltf_object_model_type_unknown"></div>

[GLTFObjectModelType](#enum_gltfobjectmodelproperty_gltfobjectmodeltype) **GLTF_OBJECT_MODEL_TYPE_UNKNOWN** = ``0``

Unknown or not set object model type. If the object model type is set to this value, the real type still needs to be determined.

<div id="_class_gltfobjectmodelproperty_constant_gltf_object_model_type_bool"></div>

[GLTFObjectModelType](#enum_gltfobjectmodelproperty_gltfobjectmodeltype) **GLTF_OBJECT_MODEL_TYPE_BOOL** = ``1``

Object model type "bool". Represented in the glTF JSON as a boolean, and encoded in a [`GLTFAccessor`](class_gltfaccessor.md) as "SCALAR". When encoded in an accessor, a value of 0 is false, and any other value is true.

<div id="_class_gltfobjectmodelproperty_constant_gltf_object_model_type_float"></div>

[GLTFObjectModelType](#enum_gltfobjectmodelproperty_gltfobjectmodeltype) **GLTF_OBJECT_MODEL_TYPE_FLOAT** = ``2``

Object model type "float". Represented in the glTF JSON as a number, and encoded in a [`GLTFAccessor`](class_gltfaccessor.md) as "SCALAR".

<div id="_class_gltfobjectmodelproperty_constant_gltf_object_model_type_float_array"></div>

[GLTFObjectModelType](#enum_gltfobjectmodelproperty_gltfobjectmodeltype) **GLTF_OBJECT_MODEL_TYPE_FLOAT_ARRAY** = ``3``

Object model type "float[]". Represented in the glTF JSON as an array of numbers, and encoded in a [`GLTFAccessor`](class_gltfaccessor.md) as "SCALAR".

<div id="_class_gltfobjectmodelproperty_constant_gltf_object_model_type_float2"></div>

[GLTFObjectModelType](#enum_gltfobjectmodelproperty_gltfobjectmodeltype) **GLTF_OBJECT_MODEL_TYPE_FLOAT2** = ``4``

Object model type "float2". Represented in the glTF JSON as an array of two numbers, and encoded in a [`GLTFAccessor`](class_gltfaccessor.md) as "VEC2".

<div id="_class_gltfobjectmodelproperty_constant_gltf_object_model_type_float3"></div>

[GLTFObjectModelType](#enum_gltfobjectmodelproperty_gltfobjectmodeltype) **GLTF_OBJECT_MODEL_TYPE_FLOAT3** = ``5``

Object model type "float3". Represented in the glTF JSON as an array of three numbers, and encoded in a [`GLTFAccessor`](class_gltfaccessor.md) as "VEC3".

<div id="_class_gltfobjectmodelproperty_constant_gltf_object_model_type_float4"></div>

[GLTFObjectModelType](#enum_gltfobjectmodelproperty_gltfobjectmodeltype) **GLTF_OBJECT_MODEL_TYPE_FLOAT4** = ``6``

Object model type "float4". Represented in the glTF JSON as an array of four numbers, and encoded in a [`GLTFAccessor`](class_gltfaccessor.md) as "VEC4".

<div id="_class_gltfobjectmodelproperty_constant_gltf_object_model_type_float2x2"></div>

[GLTFObjectModelType](#enum_gltfobjectmodelproperty_gltfobjectmodeltype) **GLTF_OBJECT_MODEL_TYPE_FLOAT2X2** = ``7``

Object model type "float2x2". Represented in the glTF JSON as an array of four numbers, and encoded in a [`GLTFAccessor`](class_gltfaccessor.md) as "MAT2".

<div id="_class_gltfobjectmodelproperty_constant_gltf_object_model_type_float3x3"></div>

[GLTFObjectModelType](#enum_gltfobjectmodelproperty_gltfobjectmodeltype) **GLTF_OBJECT_MODEL_TYPE_FLOAT3X3** = ``8``

Object model type "float3x3". Represented in the glTF JSON as an array of nine numbers, and encoded in a [`GLTFAccessor`](class_gltfaccessor.md) as "MAT3".

<div id="_class_gltfobjectmodelproperty_constant_gltf_object_model_type_float4x4"></div>

[GLTFObjectModelType](#enum_gltfobjectmodelproperty_gltfobjectmodeltype) **GLTF_OBJECT_MODEL_TYPE_FLOAT4X4** = ``9``

Object model type "float4x4". Represented in the glTF JSON as an array of sixteen numbers, and encoded in a [`GLTFAccessor`](class_gltfaccessor.md) as "MAT4".

<div id="_class_gltfobjectmodelproperty_constant_gltf_object_model_type_int"></div>

[GLTFObjectModelType](#enum_gltfobjectmodelproperty_gltfobjectmodeltype) **GLTF_OBJECT_MODEL_TYPE_INT** = ``10``

Object model type "int". Represented in the glTF JSON as a number, and encoded in a [`GLTFAccessor`](class_gltfaccessor.md) as "SCALAR". The range of values is limited to signed integers. For `KHR_interactivity`, only 32-bit integers are supported.

<!-- rst-class:: classref-section-separator -->

---

## 属性说明

<div id="_class_gltfobjectmodelproperty_property_gltf_to_godot_expression"></div>

[`Expression`](class_expression.md) **gltf_to_godot_expression** <div id="class_gltfobjectmodelproperty_property_gltf_to_godot_expression"></div>

- `void` **set_gltf_to_godot_expression** ( value: [`Expression`](class_expression.md) )
- [`Expression`](class_expression.md) **get_gltf_to_godot_expression** ( )

If set, this [`Expression`](class_expression.md) will be used to convert the property value from the glTF object model to the value expected by the Godot property. This is useful when the glTF object model uses a different unit system, or when the data needs to be transformed in some way. If `null`, the value will be copied as-is.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_gltfobjectmodelproperty_property_godot_to_gltf_expression"></div>

[`Expression`](class_expression.md) **godot_to_gltf_expression** <div id="class_gltfobjectmodelproperty_property_godot_to_gltf_expression"></div>

- `void` **set_godot_to_gltf_expression** ( value: [`Expression`](class_expression.md) )
- [`Expression`](class_expression.md) **get_godot_to_gltf_expression** ( )

If set, this [`Expression`](class_expression.md) will be used to convert the property value from the Godot property to the value expected by the glTF object model. This is useful when the glTF object model uses a different unit system, or when the data needs to be transformed in some way. If `null`, the value will be copied as-is.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_gltfobjectmodelproperty_property_json_pointers"></div>

[Array](class_array.md) [`PackedStringArray`](class_packedstringarray.md) **json_pointers** = ``[]`` <div id="class_gltfobjectmodelproperty_property_json_pointers"></div>

- `void` **set_json_pointers** ( value: [Array](class_array.md) [`PackedStringArray`](class_packedstringarray.md) )
- [Array](class_array.md) [`PackedStringArray`](class_packedstringarray.md) **get_json_pointers** ( )

The glTF object model JSON pointers used to identify the property in the glTF object model. In most cases, there will be only one item in this array, but niche cases may require multiple pointers. The items are themselves arrays which represent the JSON pointer split into its components.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_gltfobjectmodelproperty_property_node_paths"></div>

[Array](class_array.md) [`NodePath`](class_nodepath.md) **node_paths** = ``[]`` <div id="class_gltfobjectmodelproperty_property_node_paths"></div>

- `void` **set_node_paths** ( value: [Array](class_array.md) [`NodePath`](class_nodepath.md) )
- [Array](class_array.md) [`NodePath`](class_nodepath.md) **get_node_paths** ( )

An array of [`NodePath`](class_nodepath.md) s that point to a property, or multiple properties, in the Godot scene tree. On import, this will either be set by [`GLTFDocument`](class_gltfdocument.md), or by a [`GLTFDocumentExtension`](class_gltfdocumentextension.md) class. For simple cases, use [`append_path_to_property`](class_gltfobjectmodelproperty.md#class_gltfobjectmodelproperty_method_append_path_to_property) to add properties to this array.

In most cases [`node_paths`](class_gltfobjectmodelproperty.md#class_gltfobjectmodelproperty_property_node_paths) will only have one item, but in some cases a single glTF JSON pointer will map to multiple Godot properties. For example, a [`GLTFCamera`](class_gltfcamera.md) or [`GLTFLight`](class_gltflight.md) used on multiple glTF nodes will be represented by multiple Godot nodes.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_gltfobjectmodelproperty_property_object_model_type"></div>

[GLTFObjectModelType](#enum_gltfobjectmodelproperty_gltfobjectmodeltype) **object_model_type** = ``0`` <div id="class_gltfobjectmodelproperty_property_object_model_type"></div>

- `void` **set_object_model_type** ( value: [GLTFObjectModelType](#enum_gltfobjectmodelproperty_gltfobjectmodeltype) )
- [GLTFObjectModelType](#enum_gltfobjectmodelproperty_gltfobjectmodeltype) **get_object_model_type** ( )

The type of data stored in the glTF file as defined by the object model. This is a superset of the available accessor types, and determines the accessor type. See [GLTFObjectModelType](#enum_gltfobjectmodelproperty_gltfobjectmodeltype) for possible values.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_gltfobjectmodelproperty_property_variant_type"></div>

[Variant.Type](#enum_@globalscope_variant.type) **variant_type** = ``0`` <div id="class_gltfobjectmodelproperty_property_variant_type"></div>

- `void` **set_variant_type** ( value: [Variant.Type](#enum_@globalscope_variant.type) )
- [Variant.Type](#enum_@globalscope_variant.type) **get_variant_type** ( )

The type of data stored in the Godot property. This is the type of the property that the [`node_paths`](class_gltfobjectmodelproperty.md#class_gltfobjectmodelproperty_property_node_paths) point to.

<!-- rst-class:: classref-section-separator -->

---

## 方法说明

<div id="_class_gltfobjectmodelproperty_method_append_node_path"></div>

`void` **append_node_path** ( node_path: [`NodePath`](class_nodepath.md) )<div id="class_gltfobjectmodelproperty_method_append_node_path"></div>

Appends a [`NodePath`](class_nodepath.md) to [`node_paths`](class_gltfobjectmodelproperty.md#class_gltfobjectmodelproperty_property_node_paths). This can be used by [`GLTFDocumentExtension`](class_gltfdocumentextension.md) classes to define how a glTF object model property maps to a Godot property, or multiple Godot properties. Prefer using [`append_path_to_property`](class_gltfobjectmodelproperty.md#class_gltfobjectmodelproperty_method_append_path_to_property) for simple cases. Be sure to also call [`set_types`](class_gltfobjectmodelproperty.md#class_gltfobjectmodelproperty_method_set_types) once (the order does not matter).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_gltfobjectmodelproperty_method_append_path_to_property"></div>

`void` **append_path_to_property** ( node_path: [`NodePath`](class_nodepath.md), prop_name: [`StringName`](class_stringname.md) )<div id="class_gltfobjectmodelproperty_method_append_path_to_property"></div>

High-level wrapper over [`append_node_path`](class_gltfobjectmodelproperty.md#class_gltfobjectmodelproperty_method_append_node_path) that handles the most common cases. It constructs a new [`NodePath`](class_nodepath.md) using `node_path` as a base and appends `prop_name` to the subpath. Be sure to also call [`set_types`](class_gltfobjectmodelproperty.md#class_gltfobjectmodelproperty_method_set_types) once (the order does not matter).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_gltfobjectmodelproperty_method_get_accessor_type"></div>

[GLTFAccessorType](#enum_gltfaccessor_gltfaccessortype) **get_accessor_type** ( ) const[^const]<div id="class_gltfobjectmodelproperty_method_get_accessor_type"></div>

The GLTF accessor type associated with this property's [`object_model_type`](class_gltfobjectmodelproperty.md#class_gltfobjectmodelproperty_property_object_model_type). See [`GLTFAccessor.accessor_type`](class_gltfaccessor.md#class_gltfaccessor_property_accessor_type) for possible values, and see [GLTFObjectModelType](#enum_gltfobjectmodelproperty_gltfobjectmodeltype) for how the object model type maps to accessor types.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_gltfobjectmodelproperty_method_has_json_pointers"></div>

[`bool`](class_bool.md) **has_json_pointers** ( ) const[^const]<div id="class_gltfobjectmodelproperty_method_has_json_pointers"></div>

Returns `true` if [`json_pointers`](class_gltfobjectmodelproperty.md#class_gltfobjectmodelproperty_property_json_pointers) is not empty. This is used during export to determine if a **GLTFObjectModelProperty** can handle converting a Godot property to a glTF object model property.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_gltfobjectmodelproperty_method_has_node_paths"></div>

[`bool`](class_bool.md) **has_node_paths** ( ) const[^const]<div id="class_gltfobjectmodelproperty_method_has_node_paths"></div>

Returns `true` if [`node_paths`](class_gltfobjectmodelproperty.md#class_gltfobjectmodelproperty_property_node_paths) is not empty. This is used during import to determine if a **GLTFObjectModelProperty** can handle converting a glTF object model property to a Godot property.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_gltfobjectmodelproperty_method_set_types"></div>

`void` **set_types** ( variant_type: [Variant.Type](#enum_@globalscope_variant.type), obj_model_type: [GLTFObjectModelType](#enum_gltfobjectmodelproperty_gltfobjectmodeltype) )<div id="class_gltfobjectmodelproperty_method_set_types"></div>

Sets the [`variant_type`](class_gltfobjectmodelproperty.md#class_gltfobjectmodelproperty_property_variant_type) and [`object_model_type`](class_gltfobjectmodelproperty.md#class_gltfobjectmodelproperty_property_object_model_type) properties. This is a convenience method to set both properties at once, since they are almost always known at the same time. This method should be called once. Calling it again with the same values will have no effect.

[^virtual]: 本方法通常需要用户覆盖才能生效。
[^const]: 本方法无副作用，不会修改该实例的任何成员变量。
[^vararg]: 本方法除了能接受在此处描述的参数外，还能够继续接受任意数量的参数。
[^constructor]: 本方法用于构造某个类型。
[^static]: 调用本方法无需实例，可直接使用类名进行调用。
[^operator]: 本方法描述的是使用本类型作为左操作数的有效运算符。
[^bitfield]: 这个值是由下列位标志构成位掩码的整数。
[^void]: 无返回值。
