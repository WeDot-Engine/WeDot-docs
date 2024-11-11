<!-- ⚠ 请勿编辑本文件 ⚠ -->
<!-- 本文档使用脚本从 WeDot 引擎源码仓库生成。 -->
<!-- 生成脚本：https://github.com/WeDot-Engine/WeDot/tree/master/doc/tools/make_md.py； -->
<!-- 原文件：https://github.com/WeDot-Engine/WeDot/tree/master/modules/openxr/doc_classes/OpenXRAction.xml。 -->

<div id="_class_openxraction"></div>

# OpenXRAction

**继承：** [`Resource`](class_resource.md) **<** [`RefCounted`](class_refcounted.md) **<** [`Object`](class_object.md)

An OpenXR action.

## 描述

This resource defines an OpenXR action. Actions can be used both for inputs (buttons, joysticks, triggers, etc.) and outputs (haptics).

OpenXR performs automatic conversion between action type and input type whenever possible. An analog trigger bound to a boolean action will thus return `false` if the trigger is depressed and `true` if pressed fully.

Actions are not directly bound to specific devices, instead OpenXR recognizes a limited number of top level paths that identify devices by usage. We can restrict which devices an action can be bound to by these top level paths. For instance an action that should only be used for hand held controllers can have the top level paths "/user/hand/left" and "/user/hand/right" associated with them. See the [*reserved path section in the OpenXR specification*](https://www.khronos.org/registry/OpenXR/specs/1.0/html/xrspec.html#semantic-path-reserved) for more info on the top level paths.

Note that the name of the resource is used to register the action with.

## 属性

|||
|:-:|:--|
| [ActionType](#enum_openxraction_actiontype)       | [`action_type`](class_openxraction.md#class_openxraction_property_action_type)       | ``1``                   |
| [`String`](class_string.md)                       | [`localized_name`](class_openxraction.md#class_openxraction_property_localized_name) | ``""``                  |
| [`PackedStringArray`](class_packedstringarray.md) | [`toplevel_paths`](class_openxraction.md#class_openxraction_property_toplevel_paths) | ``PackedStringArray()`` |

<!-- rst-class:: classref-section-separator -->

---

## 枚举

<div id="_class_enum_openxraction_actiontype"></div>

enum **ActionType**: <div id="enum_openxraction_actiontype"></div>

<div id="_class_openxraction_constant_openxr_action_bool"></div>

[ActionType](#enum_openxraction_actiontype) **OPENXR_ACTION_BOOL** = ``0``

This action provides a boolean value.

<div id="_class_openxraction_constant_openxr_action_float"></div>

[ActionType](#enum_openxraction_actiontype) **OPENXR_ACTION_FLOAT** = ``1``

This action provides a float value between `0.0` and `1.0` for any analog input such as triggers.

<div id="_class_openxraction_constant_openxr_action_vector2"></div>

[ActionType](#enum_openxraction_actiontype) **OPENXR_ACTION_VECTOR2** = ``2``

This action provides a [`Vector2`](class_vector2.md) value and can be bound to embedded trackpads and joysticks.

<div id="_class_openxraction_constant_openxr_action_pose"></div>

[ActionType](#enum_openxraction_actiontype) **OPENXR_ACTION_POSE** = ``3``

该枚举目前没有描述，请帮我们\ :ref:`贡献一个 <doc_updating_the_class_reference>`\ 吧！



<!-- rst-class:: classref-section-separator -->

---

## 属性说明

<div id="_class_openxraction_property_action_type"></div>

[ActionType](#enum_openxraction_actiontype) **action_type** = ``1`` <div id="class_openxraction_property_action_type"></div>

- `void` **set_action_type** ( value: [ActionType](#enum_openxraction_actiontype) )
- [ActionType](#enum_openxraction_actiontype) **get_action_type** ( )

The type of action.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_openxraction_property_localized_name"></div>

[`String`](class_string.md) **localized_name** = ``""`` <div id="class_openxraction_property_localized_name"></div>

- `void` **set_localized_name** ( value: [`String`](class_string.md) )
- [`String`](class_string.md) **get_localized_name** ( )

The localized description of this action.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_openxraction_property_toplevel_paths"></div>

[`PackedStringArray`](class_packedstringarray.md) **toplevel_paths** = ``PackedStringArray()`` <div id="class_openxraction_property_toplevel_paths"></div>

- `void` **set_toplevel_paths** ( value: [`PackedStringArray`](class_packedstringarray.md) )
- [`PackedStringArray`](class_packedstringarray.md) **get_toplevel_paths** ( )

A collections of toplevel paths to which this action can be bound.

**Note:** The returned array is *copied* and any changes to it will not update the original property value. See [`PackedStringArray`](class_packedstringarray.md) for more details.

[^virtual]: 本方法通常需要用户覆盖才能生效。
[^const]: 本方法无副作用，不会修改该实例的任何成员变量。
[^vararg]: 本方法除了能接受在此处描述的参数外，还能够继续接受任意数量的参数。
[^constructor]: 本方法用于构造某个类型。
[^static]: 调用本方法无需实例，可直接使用类名进行调用。
[^operator]: 本方法描述的是使用本类型作为左操作数的有效运算符。
[^bitfield]: 这个值是由下列位标志构成位掩码的整数。
[^void]: 无返回值。
