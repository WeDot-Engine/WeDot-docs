<!-- ⚠ 请勿编辑本文件 ⚠ -->
<!-- 本文档使用脚本从 WeDot 引擎源码仓库生成。 -->
<!-- 生成脚本：https://github.com/WeDot-Engine/WeDot/tree/4.3/doc/tools/make_md.py； -->
<!-- 原文件：https://github.com/WeDot-Engine/WeDot/tree/4.3/modules/openxr/doc_classes/OpenXRInteractionProfile.xml。 -->

<div id="_class_openxrinteractionprofile"></div>

# OpenXRInteractionProfile

**继承：** [`Resource`](class_resource.md) **<** [`RefCounted`](class_refcounted.md) **<** [`Object`](class_object.md)

Suggested bindings object for OpenXR.

## 描述

This object stores suggested bindings for an interaction profile. Interaction profiles define the metadata for a tracked XR device such as an XR controller.

For more information see the [*interaction profiles info in the OpenXR specification*](https://www.khronos.org/registry/OpenXR/specs/1.0/html/xrspec.html#semantic-path-interaction-profiles).

## 属性

| [`Array`](class_array.md)   | [`bindings`](#class_openxrinteractionprofile_property_bindings)                                 | ``[]`` |
| [`String`](class_string.md) | [`interaction_profile_path`](#class_openxrinteractionprofile_property_interaction_profile_path) | ``""`` |

## 方法

| [`OpenXRIPBinding`](class_openxripbinding.md) | [`get_binding`](#class_openxrinteractionprofile_method_get_binding) ( index: [`int`](class_int.md) ) const[^const] |
| [`int`](class_int.md)                         | [`get_binding_count`](#class_openxrinteractionprofile_method_get_binding_count) ( ) const[^const]                  |

<!-- rst-class:: classref-section-separator -->

---

## 属性说明

<div id="_class_openxrinteractionprofile_property_bindings"></div>

[`Array`](class_array.md) **bindings** = ``[]`` <div id="class_openxrinteractionprofile_property_bindings"></div>

- `void` **set_bindings** ( value: [`Array`](class_array.md) )
- [`Array`](class_array.md) **get_bindings** ( )

Action bindings for this interaction profile.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_openxrinteractionprofile_property_interaction_profile_path"></div>

[`String`](class_string.md) **interaction_profile_path** = ``""`` <div id="class_openxrinteractionprofile_property_interaction_profile_path"></div>

- `void` **set_interaction_profile_path** ( value: [`String`](class_string.md) )
- [`String`](class_string.md) **get_interaction_profile_path** ( )

The interaction profile path identifying the XR device.

<!-- rst-class:: classref-section-separator -->

---

## 方法说明

<div id="_class_openxrinteractionprofile_method_get_binding"></div>

[`OpenXRIPBinding`](class_openxripbinding.md) **get_binding** ( index: [`int`](class_int.md) ) const[^const]<div id="class_openxrinteractionprofile_method_get_binding"></div>

Retrieve the binding at this index.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_openxrinteractionprofile_method_get_binding_count"></div>

[`int`](class_int.md) **get_binding_count** ( ) const[^const]<div id="class_openxrinteractionprofile_method_get_binding_count"></div>

Get the number of bindings in this interaction profile.

[^virtual]: 本方法通常需要用户覆盖才能生效。
[^const]: 本方法无副作用，不会修改该实例的任何成员变量。
[^vararg]: 本方法除了能接受在此处描述的参数外，还能够继续接受任意数量的参数。
[^constructor]: 本方法用于构造某个类型。
[^static]: 调用本方法无需实例，可直接使用类名进行调用。
[^operator]: 本方法描述的是使用本类型作为左操作数的有效运算符。
[^bitfield]: 这个值是由下列位标志构成位掩码的整数。
[^void]: 无返回值。
