<!-- ⚠ 请勿编辑本文件 ⚠ -->
<!-- 本文档使用脚本从 WeDot 引擎源码仓库生成。 -->
<!-- 生成脚本：https://github.com/WeDot-Engine/WeDot/tree/4.3/doc/tools/make_md.py； -->
<!-- 原文件：https://github.com/WeDot-Engine/WeDot/tree/4.3/modules/openxr/doc_classes/OpenXRActionSet.xml。 -->

<div id="_class_openxractionset"></div>

# OpenXRActionSet

**继承：** [`Resource`](class_resource.md) **<** [`RefCounted`](class_refcounted.md) **<** [`Object`](class_object.md)

Collection of [`OpenXRAction`](class_openxraction.md) resources that make up an action set.

## 描述

Action sets in OpenXR define a collection of actions that can be activated in unison. This allows games to easily change between different states that require different inputs or need to reinterpret inputs. For instance we could have an action set that is active when a menu is open, an action set that is active when the player is freely walking around and an action set that is active when the player is controlling a vehicle.

Action sets can contain the same action with the same name, if such action sets are active at the same time the action set with the highest priority defines which binding is active.

## 属性

| [`Array`](class_array.md)   | [`actions`](#class_openxractionset_property_actions)               | ``[]`` |
| [`String`](class_string.md) | [`localized_name`](#class_openxractionset_property_localized_name) | ``""`` |
| [`int`](class_int.md)       | [`priority`](#class_openxractionset_property_priority)             | ``0``  |

## 方法

| `void`                | [`add_action`](#class_openxractionset_method_add_action) ( action: [`OpenXRAction`](class_openxraction.md) )       |
| [`int`](class_int.md) | [`get_action_count`](#class_openxractionset_method_get_action_count) ( ) const[^const]                             |
| `void`                | [`remove_action`](#class_openxractionset_method_remove_action) ( action: [`OpenXRAction`](class_openxraction.md) ) |

<!-- rst-class:: classref-section-separator -->

---

## 属性说明

<div id="_class_openxractionset_property_actions"></div>

[`Array`](class_array.md) **actions** = ``[]`` <div id="class_openxractionset_property_actions"></div>

- `void` **set_actions** ( value: [`Array`](class_array.md) )
- [`Array`](class_array.md) **get_actions** ( )

Collection of actions for this action set.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_openxractionset_property_localized_name"></div>

[`String`](class_string.md) **localized_name** = ``""`` <div id="class_openxractionset_property_localized_name"></div>

- `void` **set_localized_name** ( value: [`String`](class_string.md) )
- [`String`](class_string.md) **get_localized_name** ( )

The localized name of this action set.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_openxractionset_property_priority"></div>

[`int`](class_int.md) **priority** = ``0`` <div id="class_openxractionset_property_priority"></div>

- `void` **set_priority** ( value: [`int`](class_int.md) )
- [`int`](class_int.md) **get_priority** ( )

The priority for this action set.

<!-- rst-class:: classref-section-separator -->

---

## 方法说明

<div id="_class_openxractionset_method_add_action"></div>

`void` **add_action** ( action: [`OpenXRAction`](class_openxraction.md) )<div id="class_openxractionset_method_add_action"></div>

Add an action to this action set.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_openxractionset_method_get_action_count"></div>

[`int`](class_int.md) **get_action_count** ( ) const[^const]<div id="class_openxractionset_method_get_action_count"></div>

Retrieve the number of actions in our action set.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_openxractionset_method_remove_action"></div>

`void` **remove_action** ( action: [`OpenXRAction`](class_openxraction.md) )<div id="class_openxractionset_method_remove_action"></div>

Remove an action from this action set.

[^virtual]: 本方法通常需要用户覆盖才能生效。
[^const]: 本方法无副作用，不会修改该实例的任何成员变量。
[^vararg]: 本方法除了能接受在此处描述的参数外，还能够继续接受任意数量的参数。
[^constructor]: 本方法用于构造某个类型。
[^static]: 调用本方法无需实例，可直接使用类名进行调用。
[^operator]: 本方法描述的是使用本类型作为左操作数的有效运算符。
[^bitfield]: 这个值是由下列位标志构成位掩码的整数。
[^void]: 无返回值。
