<!-- ⚠ 请勿编辑本文件 ⚠ -->
<!-- 本文档使用脚本从 WeDot 引擎源码仓库生成。 -->
<!-- 生成脚本：https://github.com/WeDot-Engine/WeDot/tree/4.3/doc/tools/make_md.py； -->
<!-- 原文件：https://github.com/WeDot-Engine/WeDot/tree/4.3/modules/openxr/doc_classes/OpenXRActionMap.xml。 -->

<div id="_class_openxractionmap"></div>

# OpenXRActionMap

**继承：** [`Resource`](class_resource.md) **<** [`RefCounted`](class_refcounted.md) **<** [`Object`](class_object.md)

Collection of [`OpenXRActionSet`](class_openxractionset.md) and [`OpenXRInteractionProfile`](class_openxrinteractionprofile.md) resources for the OpenXR module.

## 描述

OpenXR uses an action system similar to Godots Input map system to bind inputs and outputs on various types of XR controllers to named actions. OpenXR specifies more detail on these inputs and outputs than Godot supports.

Another important distinction is that OpenXR offers no control over these bindings. The bindings we register are suggestions, it is up to the XR runtime to offer users the ability to change these bindings. This allows the XR runtime to fill in the gaps if new hardware becomes available.

The action map therefore needs to be loaded at startup and can't be changed afterwards. This resource is a container for the entire action map.

## 属性

| [`Array`](class_array.md) | [`action_sets`](#class_openxractionmap_property_action_sets)                   | ``[]`` |
| [`Array`](class_array.md) | [`interaction_profiles`](#class_openxractionmap_property_interaction_profiles) | ``[]`` |

## 方法

| `void`                                                          | [`add_action_set`](#class_openxractionmap_method_add_action_set) ( action_set: [`OpenXRActionSet`](class_openxractionset.md) )                                                    |
| `void`                                                          | [`add_interaction_profile`](#class_openxractionmap_method_add_interaction_profile) ( interaction_profile: [`OpenXRInteractionProfile`](class_openxrinteractionprofile.md) )       |
| `void`                                                          | [`create_default_action_sets`](#class_openxractionmap_method_create_default_action_sets) ( )                                                                                      |
| [`OpenXRActionSet`](class_openxractionset.md)                   | [`find_action_set`](#class_openxractionmap_method_find_action_set) ( name: [`String`](class_string.md) ) const[^const]                                                            |
| [`OpenXRInteractionProfile`](class_openxrinteractionprofile.md) | [`find_interaction_profile`](#class_openxractionmap_method_find_interaction_profile) ( name: [`String`](class_string.md) ) const[^const]                                          |
| [`OpenXRActionSet`](class_openxractionset.md)                   | [`get_action_set`](#class_openxractionmap_method_get_action_set) ( idx: [`int`](class_int.md) ) const[^const]                                                                     |
| [`int`](class_int.md)                                           | [`get_action_set_count`](#class_openxractionmap_method_get_action_set_count) ( ) const[^const]                                                                                    |
| [`OpenXRInteractionProfile`](class_openxrinteractionprofile.md) | [`get_interaction_profile`](#class_openxractionmap_method_get_interaction_profile) ( idx: [`int`](class_int.md) ) const[^const]                                                   |
| [`int`](class_int.md)                                           | [`get_interaction_profile_count`](#class_openxractionmap_method_get_interaction_profile_count) ( ) const[^const]                                                                  |
| `void`                                                          | [`remove_action_set`](#class_openxractionmap_method_remove_action_set) ( action_set: [`OpenXRActionSet`](class_openxractionset.md) )                                              |
| `void`                                                          | [`remove_interaction_profile`](#class_openxractionmap_method_remove_interaction_profile) ( interaction_profile: [`OpenXRInteractionProfile`](class_openxrinteractionprofile.md) ) |

<!-- rst-class:: classref-section-separator -->

---

## 属性说明

<div id="_class_openxractionmap_property_action_sets"></div>

[`Array`](class_array.md) **action_sets** = ``[]`` <div id="class_openxractionmap_property_action_sets"></div>

- `void` **set_action_sets** ( value: [`Array`](class_array.md) )
- [`Array`](class_array.md) **get_action_sets** ( )

Collection of [`OpenXRActionSet`](class_openxractionset.md) s that are part of this action map.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_openxractionmap_property_interaction_profiles"></div>

[`Array`](class_array.md) **interaction_profiles** = ``[]`` <div id="class_openxractionmap_property_interaction_profiles"></div>

- `void` **set_interaction_profiles** ( value: [`Array`](class_array.md) )
- [`Array`](class_array.md) **get_interaction_profiles** ( )

Collection of [`OpenXRInteractionProfile`](class_openxrinteractionprofile.md) s that are part of this action map.

<!-- rst-class:: classref-section-separator -->

---

## 方法说明

<div id="_class_openxractionmap_method_add_action_set"></div>

`void` **add_action_set** ( action_set: [`OpenXRActionSet`](class_openxractionset.md) )<div id="class_openxractionmap_method_add_action_set"></div>

Add an action set.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_openxractionmap_method_add_interaction_profile"></div>

`void` **add_interaction_profile** ( interaction_profile: [`OpenXRInteractionProfile`](class_openxrinteractionprofile.md) )<div id="class_openxractionmap_method_add_interaction_profile"></div>

Add an interaction profile.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_openxractionmap_method_create_default_action_sets"></div>

`void` **create_default_action_sets** ( )<div id="class_openxractionmap_method_create_default_action_sets"></div>

Setup this action set with our default actions.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_openxractionmap_method_find_action_set"></div>

[`OpenXRActionSet`](class_openxractionset.md) **find_action_set** ( name: [`String`](class_string.md) ) const[^const]<div id="class_openxractionmap_method_find_action_set"></div>

Retrieve an action set by name.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_openxractionmap_method_find_interaction_profile"></div>

[`OpenXRInteractionProfile`](class_openxrinteractionprofile.md) **find_interaction_profile** ( name: [`String`](class_string.md) ) const[^const]<div id="class_openxractionmap_method_find_interaction_profile"></div>

Find an interaction profile by its name (path).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_openxractionmap_method_get_action_set"></div>

[`OpenXRActionSet`](class_openxractionset.md) **get_action_set** ( idx: [`int`](class_int.md) ) const[^const]<div id="class_openxractionmap_method_get_action_set"></div>

Retrieve the action set at this index.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_openxractionmap_method_get_action_set_count"></div>

[`int`](class_int.md) **get_action_set_count** ( ) const[^const]<div id="class_openxractionmap_method_get_action_set_count"></div>

Retrieve the number of actions sets in our action map.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_openxractionmap_method_get_interaction_profile"></div>

[`OpenXRInteractionProfile`](class_openxrinteractionprofile.md) **get_interaction_profile** ( idx: [`int`](class_int.md) ) const[^const]<div id="class_openxractionmap_method_get_interaction_profile"></div>

Get the interaction profile at this index.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_openxractionmap_method_get_interaction_profile_count"></div>

[`int`](class_int.md) **get_interaction_profile_count** ( ) const[^const]<div id="class_openxractionmap_method_get_interaction_profile_count"></div>

Retrieve the number of interaction profiles in our action map.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_openxractionmap_method_remove_action_set"></div>

`void` **remove_action_set** ( action_set: [`OpenXRActionSet`](class_openxractionset.md) )<div id="class_openxractionmap_method_remove_action_set"></div>

Remove an action set.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_openxractionmap_method_remove_interaction_profile"></div>

`void` **remove_interaction_profile** ( interaction_profile: [`OpenXRInteractionProfile`](class_openxrinteractionprofile.md) )<div id="class_openxractionmap_method_remove_interaction_profile"></div>

Remove an interaction profile.

[^virtual]: 本方法通常需要用户覆盖才能生效。
[^const]: 本方法无副作用，不会修改该实例的任何成员变量。
[^vararg]: 本方法除了能接受在此处描述的参数外，还能够继续接受任意数量的参数。
[^constructor]: 本方法用于构造某个类型。
[^static]: 调用本方法无需实例，可直接使用类名进行调用。
[^operator]: 本方法描述的是使用本类型作为左操作数的有效运算符。
[^bitfield]: 这个值是由下列位标志构成位掩码的整数。
[^void]: 无返回值。
