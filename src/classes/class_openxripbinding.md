<!-- ⚠ 请勿编辑本文件 ⚠ -->
<!-- 本文档使用脚本从 WeDot 引擎源码仓库生成。 -->
<!-- 生成脚本：https://github.com/WeDot-Engine/WeDot/tree/4.3/doc/tools/make_md.py； -->
<!-- 原文件：https://github.com/WeDot-Engine/WeDot/tree/4.3/modules/openxr/doc_classes/OpenXRIPBinding.xml。 -->

<div id="_class_openxripbinding"></div>

# OpenXRIPBinding

**继承：** [`Resource`](class_resource.md) **<** [`RefCounted`](class_refcounted.md) **<** [`Object`](class_object.md)

Defines a binding between an [`OpenXRAction`](class_openxraction.md) and an XR input or output.

## 描述

This binding resource binds an [`OpenXRAction`](class_openxraction.md) to inputs or outputs. As most controllers have left hand and right versions that are handled by the same interaction profile we can specify multiple bindings. For instance an action "Fire" could be bound to both "/user/hand/left/input/trigger" and "/user/hand/right/input/trigger".

## 属性

|||
|:-:|:--|
| [`OpenXRAction`](class_openxraction.md)           | [`action`](#class_openxripbinding_property_action) |                         |
| [`PackedStringArray`](class_packedstringarray.md) | [`paths`](#class_openxripbinding_property_paths)   | ``PackedStringArray()`` |

## 方法

|||
|:-:|:--|
| `void`                  | [`add_path`](class_openxripbindingmd#class_openxripbinding_method_add_path) ( path: [`String`](class_string.md) )               |
| [`int`](class_int.md)   | [`get_path_count`](class_openxripbindingmd#class_openxripbinding_method_get_path_count) ( ) const[^const]                       |
| [`bool`](class_bool.md) | [`has_path`](class_openxripbindingmd#class_openxripbinding_method_has_path) ( path: [`String`](class_string.md) ) const[^const] |
| `void`                  | [`remove_path`](class_openxripbindingmd#class_openxripbinding_method_remove_path) ( path: [`String`](class_string.md) )         |

<!-- rst-class:: classref-section-separator -->

---

## 属性说明

<div id="_class_openxripbinding_property_action"></div>

[`OpenXRAction`](class_openxraction.md) **action** <div id="class_openxripbinding_property_action"></div>

- `void` **set_action** ( value: [`OpenXRAction`](class_openxraction.md) )
- [`OpenXRAction`](class_openxraction.md) **get_action** ( )

[`OpenXRAction`](class_openxraction.md) that is bound to these paths.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_openxripbinding_property_paths"></div>

[`PackedStringArray`](class_packedstringarray.md) **paths** = ``PackedStringArray()`` <div id="class_openxripbinding_property_paths"></div>

- `void` **set_paths** ( value: [`PackedStringArray`](class_packedstringarray.md) )
- [`PackedStringArray`](class_packedstringarray.md) **get_paths** ( )

Paths that define the inputs or outputs bound on the device.

**Note:** The returned array is *copied* and any changes to it will not update the original property value. See [`PackedStringArray`](class_packedstringarray.md) for more details.

<!-- rst-class:: classref-section-separator -->

---

## 方法说明

<div id="_class_openxripbinding_method_add_path"></div>

`void` **add_path** ( path: [`String`](class_string.md) )<div id="class_openxripbinding_method_add_path"></div>

Add an input/output path to this binding.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_openxripbinding_method_get_path_count"></div>

[`int`](class_int.md) **get_path_count** ( ) const[^const]<div id="class_openxripbinding_method_get_path_count"></div>

Get the number of input/output paths in this binding.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_openxripbinding_method_has_path"></div>

[`bool`](class_bool.md) **has_path** ( path: [`String`](class_string.md) ) const[^const]<div id="class_openxripbinding_method_has_path"></div>

Returns `true` if this input/output path is part of this binding.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_openxripbinding_method_remove_path"></div>

`void` **remove_path** ( path: [`String`](class_string.md) )<div id="class_openxripbinding_method_remove_path"></div>

Removes this input/output path from this binding.

[^virtual]: 本方法通常需要用户覆盖才能生效。
[^const]: 本方法无副作用，不会修改该实例的任何成员变量。
[^vararg]: 本方法除了能接受在此处描述的参数外，还能够继续接受任意数量的参数。
[^constructor]: 本方法用于构造某个类型。
[^static]: 调用本方法无需实例，可直接使用类名进行调用。
[^operator]: 本方法描述的是使用本类型作为左操作数的有效运算符。
[^bitfield]: 这个值是由下列位标志构成位掩码的整数。
[^void]: 无返回值。
