<!-- ⚠ 请勿编辑本文件 ⚠ -->
<!-- 本文档使用脚本从 WeDot 引擎源码仓库生成。 -->
<!-- 生成脚本：https://github.com/WeDot-Engine/WeDot/tree/master/doc/tools/make_md.py； -->
<!-- 原文件：https://github.com/WeDot-Engine/WeDot/tree/master/modules/openxr/doc_classes/OpenXRInteractionProfileMetadata.xml。 -->

<div id="_class_openxrinteractionprofilemetadata"></div>

# OpenXRInteractionProfileMetadata

**继承：** [`Object`](class_object.md)

Meta class registering supported devices in OpenXR.

## 描述

This class allows OpenXR core and extensions to register metadata relating to supported interaction devices such as controllers, trackers, haptic devices, etc. It is primarily used by the action map editor and to sanitize any action map by removing extension-dependent entries when applicable.

## 方法

|||
|:-:|:--|
| `void` | [`register_interaction_profile`](class_openxrinteractionprofilemetadata.md#class_openxrinteractionprofilemetadata_method_register_interaction_profile) ( display_name: [`String`](class_string.md), openxr_path: [`String`](class_string.md), openxr_extension_name: [`String`](class_string.md) )                                                                                                                                 |
| `void` | [`register_io_path`](class_openxrinteractionprofilemetadata.md#class_openxrinteractionprofilemetadata_method_register_io_path) ( interaction_profile: [`String`](class_string.md), display_name: [`String`](class_string.md), toplevel_path: [`String`](class_string.md), openxr_path: [`String`](class_string.md), openxr_extension_name: [`String`](class_string.md), action_type: [ActionType](#enum_openxraction_actiontype) ) |
| `void` | [`register_profile_rename`](class_openxrinteractionprofilemetadata.md#class_openxrinteractionprofilemetadata_method_register_profile_rename) ( old_name: [`String`](class_string.md), new_name: [`String`](class_string.md) )                                                                                                                                                                                                      |
| `void` | [`register_top_level_path`](class_openxrinteractionprofilemetadata.md#class_openxrinteractionprofilemetadata_method_register_top_level_path) ( display_name: [`String`](class_string.md), openxr_path: [`String`](class_string.md), openxr_extension_name: [`String`](class_string.md) )                                                                                                                                           |

<!-- rst-class:: classref-section-separator -->

---

## 方法说明

<div id="_class_openxrinteractionprofilemetadata_method_register_interaction_profile"></div>

`void` **register_interaction_profile** ( display_name: [`String`](class_string.md), openxr_path: [`String`](class_string.md), openxr_extension_name: [`String`](class_string.md) )<div id="class_openxrinteractionprofilemetadata_method_register_interaction_profile"></div>

Registers an interaction profile using its OpenXR designation (e.g. `/interaction_profiles/khr/simple_controller` is the profile for OpenXR's simple controller profile).

 `display_name` is the description shown to the user. `openxr_path` is the interaction profile path being registered. `openxr_extension_name` optionally restricts this profile to the given extension being enabled/available. If the extension is not available, the profile and all related entries used in an action map are filtered out.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_openxrinteractionprofilemetadata_method_register_io_path"></div>

`void` **register_io_path** ( interaction_profile: [`String`](class_string.md), display_name: [`String`](class_string.md), toplevel_path: [`String`](class_string.md), openxr_path: [`String`](class_string.md), openxr_extension_name: [`String`](class_string.md), action_type: [ActionType](#enum_openxraction_actiontype) )<div id="class_openxrinteractionprofilemetadata_method_register_io_path"></div>

Registers an input/output path for the given `interaction_profile`. The profile should previously have been registered using [`register_interaction_profile`](class_openxrinteractionprofilemetadata.md#class_openxrinteractionprofilemetadata_method_register_interaction_profile). `display_name` is the description shown to the user. `toplevel_path` specifies the bind path this input/output can be bound to (e.g. `/user/hand/left` or `/user/hand/right`). `openxr_path` is the action input/output being registered (e.g. `/user/hand/left/input/aim/pose`). `openxr_extension_name` restricts this input/output to an enabled/available extension, this doesn't need to repeat the extension on the profile but relates to overlapping extension (e.g. `XR_EXT_palm_pose` that introduces `…/input/palm_ext/pose` input paths). `action_type` defines the type of input or output provided by OpenXR.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_openxrinteractionprofilemetadata_method_register_profile_rename"></div>

`void` **register_profile_rename** ( old_name: [`String`](class_string.md), new_name: [`String`](class_string.md) )<div id="class_openxrinteractionprofilemetadata_method_register_profile_rename"></div>

Allows for renaming old interaction profile paths to new paths to maintain backwards compatibility with older action maps.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_openxrinteractionprofilemetadata_method_register_top_level_path"></div>

`void` **register_top_level_path** ( display_name: [`String`](class_string.md), openxr_path: [`String`](class_string.md), openxr_extension_name: [`String`](class_string.md) )<div id="class_openxrinteractionprofilemetadata_method_register_top_level_path"></div>

Registers a top level path to which profiles can be bound. For instance `/user/hand/left` refers to the bind point for the player's left hand. Extensions can register additional top level paths, for instance a haptic vest extension might register `/user/body/vest`.

 `display_name` is the name shown to the user. `openxr_path` is the top level path being registered. `openxr_extension_name` is optional and ensures the top level path is only used if the specified extension is available/enabled.

When a top level path ends up being bound by OpenXR, a [`XRPositionalTracker`](class_xrpositionaltracker.md) is instantiated to manage the state of the device.

[^virtual]: 本方法通常需要用户覆盖才能生效。
[^const]: 本方法无副作用，不会修改该实例的任何成员变量。
[^vararg]: 本方法除了能接受在此处描述的参数外，还能够继续接受任意数量的参数。
[^constructor]: 本方法用于构造某个类型。
[^static]: 调用本方法无需实例，可直接使用类名进行调用。
[^operator]: 本方法描述的是使用本类型作为左操作数的有效运算符。
[^bitfield]: 这个值是由下列位标志构成位掩码的整数。
[^void]: 无返回值。
