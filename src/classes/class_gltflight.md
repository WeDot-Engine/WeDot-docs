<!-- ⚠ 请勿编辑本文件 ⚠ -->
<!-- 本文档使用脚本从 WeDot 引擎源码仓库生成。 -->
<!-- 生成脚本：https://github.com/WeDot-Engine/WeDot/tree/master/doc/tools/make_md.py； -->
<!-- 原文件：https://github.com/WeDot-Engine/WeDot/tree/master/modules/gltf/doc_classes/GLTFLight.xml。 -->

<div id="_class_gltflight"></div>

# GLTFLight

**继承：** [`Resource`](class_resource.md) **<** [`RefCounted`](class_refcounted.md) **<** [`Object`](class_object.md)

Represents a glTF light.

## 描述

Represents a light as defined by the `KHR_lights_punctual` glTF extension.

## 属性

|||
|:-:|:--|
| [`Color`](class_color.md)   | [`color`](class_gltflight.md#class_gltflight_property_color)                       | ``Color(1, 1, 1, 1)`` |
| [`float`](class_float.md)   | [`inner_cone_angle`](class_gltflight.md#class_gltflight_property_inner_cone_angle) | ``0.0``               |
| [`float`](class_float.md)   | [`intensity`](class_gltflight.md#class_gltflight_property_intensity)               | ``1.0``               |
| [`String`](class_string.md) | [`light_type`](class_gltflight.md#class_gltflight_property_light_type)             | ``""``                |
| [`float`](class_float.md)   | [`outer_cone_angle`](class_gltflight.md#class_gltflight_property_outer_cone_angle) | ``0.785398``          |
| [`float`](class_float.md)   | [`range`](class_gltflight.md#class_gltflight_property_range)                       | ``inf``               |

## 方法

|||
|:-:|:--|
| [`GLTFLight`](class_gltflight.md)   | [`from_dictionary`](class_gltflight.md#class_gltflight_method_from_dictionary) ( dictionary: [`Dictionary`](class_dictionary.md) ) static[^static]                                             |
| [`GLTFLight`](class_gltflight.md)   | [`from_node`](class_gltflight.md#class_gltflight_method_from_node) ( light_node: [`Light3D`](class_light3d.md) ) static[^static]                                                               |
| [`Variant`](class_variant.md)       | [`get_additional_data`](class_gltflight.md#class_gltflight_method_get_additional_data) ( extension_name: [`StringName`](class_stringname.md) )                                                 |
| `void`                              | [`set_additional_data`](class_gltflight.md#class_gltflight_method_set_additional_data) ( extension_name: [`StringName`](class_stringname.md), additional_data: [`Variant`](class_variant.md) ) |
| [`Dictionary`](class_dictionary.md) | [`to_dictionary`](class_gltflight.md#class_gltflight_method_to_dictionary) ( ) const[^const]                                                                                                   |
| [`Light3D`](class_light3d.md)       | [`to_node`](class_gltflight.md#class_gltflight_method_to_node) ( ) const[^const]                                                                                                               |

<!-- rst-class:: classref-section-separator -->

---

## 属性说明

<div id="_class_gltflight_property_color"></div>

[`Color`](class_color.md) **color** = ``Color(1, 1, 1, 1)`` <div id="class_gltflight_property_color"></div>

- `void` **set_color** ( value: [`Color`](class_color.md) )
- [`Color`](class_color.md) **get_color** ( )

The [`Color`](class_color.md) of the light. Defaults to white. A black color causes the light to have no effect.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_gltflight_property_inner_cone_angle"></div>

[`float`](class_float.md) **inner_cone_angle** = ``0.0`` <div id="class_gltflight_property_inner_cone_angle"></div>

- `void` **set_inner_cone_angle** ( value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_inner_cone_angle** ( )

The inner angle of the cone in a spotlight. Must be less than or equal to the outer cone angle.

Within this angle, the light is at full brightness. Between the inner and outer cone angles, there is a transition from full brightness to zero brightness. When creating a Godot [`SpotLight3D`](class_spotlight3d.md), the ratio between the inner and outer cone angles is used to calculate the attenuation of the light.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_gltflight_property_intensity"></div>

[`float`](class_float.md) **intensity** = ``1.0`` <div id="class_gltflight_property_intensity"></div>

- `void` **set_intensity** ( value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_intensity** ( )

The intensity of the light. This is expressed in candelas (lumens per steradian) for point and spot lights, and lux (lumens per m²) for directional lights. When creating a Godot light, this value is converted to a unitless multiplier.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_gltflight_property_light_type"></div>

[`String`](class_string.md) **light_type** = ``""`` <div id="class_gltflight_property_light_type"></div>

- `void` **set_light_type** ( value: [`String`](class_string.md) )
- [`String`](class_string.md) **get_light_type** ( )

The type of the light. The values accepted by Godot are "point", "spot", and "directional", which correspond to Godot's [`OmniLight3D`](class_omnilight3d.md), [`SpotLight3D`](class_spotlight3d.md), and [`DirectionalLight3D`](class_directionallight3d.md) respectively.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_gltflight_property_outer_cone_angle"></div>

[`float`](class_float.md) **outer_cone_angle** = ``0.785398`` <div id="class_gltflight_property_outer_cone_angle"></div>

- `void` **set_outer_cone_angle** ( value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_outer_cone_angle** ( )

The outer angle of the cone in a spotlight. Must be greater than or equal to the inner angle.

At this angle, the light drops off to zero brightness. Between the inner and outer cone angles, there is a transition from full brightness to zero brightness. If this angle is a half turn, then the spotlight emits in all directions. When creating a Godot [`SpotLight3D`](class_spotlight3d.md), the outer cone angle is used as the angle of the spotlight.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_gltflight_property_range"></div>

[`float`](class_float.md) **range** = ``inf`` <div id="class_gltflight_property_range"></div>

- `void` **set_range** ( value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_range** ( )

The range of the light, beyond which the light has no effect. glTF lights with no range defined behave like physical lights (which have infinite range). When creating a Godot light, the range is clamped to 4096.

<!-- rst-class:: classref-section-separator -->

---

## 方法说明

<div id="_class_gltflight_method_from_dictionary"></div>

[`GLTFLight`](class_gltflight.md) **from_dictionary** ( dictionary: [`Dictionary`](class_dictionary.md) ) static[^static]<div id="class_gltflight_method_from_dictionary"></div>

Creates a new GLTFLight instance by parsing the given [`Dictionary`](class_dictionary.md).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_gltflight_method_from_node"></div>

[`GLTFLight`](class_gltflight.md) **from_node** ( light_node: [`Light3D`](class_light3d.md) ) static[^static]<div id="class_gltflight_method_from_node"></div>

Create a new GLTFLight instance from the given Godot [`Light3D`](class_light3d.md) node.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_gltflight_method_get_additional_data"></div>

[`Variant`](class_variant.md) **get_additional_data** ( extension_name: [`StringName`](class_stringname.md) )<div id="class_gltflight_method_get_additional_data"></div>

该方法目前没有描述，请帮我们\ :ref:`贡献一个 <doc_updating_the_class_reference>`\ 吧！

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_gltflight_method_set_additional_data"></div>

`void` **set_additional_data** ( extension_name: [`StringName`](class_stringname.md), additional_data: [`Variant`](class_variant.md) )<div id="class_gltflight_method_set_additional_data"></div>

该方法目前没有描述，请帮我们\ :ref:`贡献一个 <doc_updating_the_class_reference>`\ 吧！

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_gltflight_method_to_dictionary"></div>

[`Dictionary`](class_dictionary.md) **to_dictionary** ( ) const[^const]<div id="class_gltflight_method_to_dictionary"></div>

Serializes this GLTFLight instance into a [`Dictionary`](class_dictionary.md).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_gltflight_method_to_node"></div>

[`Light3D`](class_light3d.md) **to_node** ( ) const[^const]<div id="class_gltflight_method_to_node"></div>

Converts this GLTFLight instance into a Godot [`Light3D`](class_light3d.md) node.

[^virtual]: 本方法通常需要用户覆盖才能生效。
[^const]: 本方法无副作用，不会修改该实例的任何成员变量。
[^vararg]: 本方法除了能接受在此处描述的参数外，还能够继续接受任意数量的参数。
[^constructor]: 本方法用于构造某个类型。
[^static]: 调用本方法无需实例，可直接使用类名进行调用。
[^operator]: 本方法描述的是使用本类型作为左操作数的有效运算符。
[^bitfield]: 这个值是由下列位标志构成位掩码的整数。
[^void]: 无返回值。
