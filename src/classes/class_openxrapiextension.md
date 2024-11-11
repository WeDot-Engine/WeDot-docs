<!-- ⚠ 请勿编辑本文件 ⚠ -->
<!-- 本文档使用脚本从 WeDot 引擎源码仓库生成。 -->
<!-- 生成脚本：https://github.com/WeDot-Engine/WeDot/tree/master/doc/tools/make_md.py； -->
<!-- 原文件：https://github.com/WeDot-Engine/WeDot/tree/master/modules/openxr/doc_classes/OpenXRAPIExtension.xml。 -->

<div id="_class_openxrapiextension"></div>

# OpenXRAPIExtension

**继承：** [`RefCounted`](class_refcounted.md) **<** [`Object`](class_object.md)

Makes the OpenXR API available for GDExtension.

## 描述

**OpenXRAPIExtension** makes OpenXR available for GDExtension. It provides the OpenXR API to GDExtension through the [`get_instance_proc_addr`](class_openxrapiextension.md#class_openxrapiextension_method_get_instance_proc_addr) method, and the OpenXR instance through [`get_instance`](class_openxrapiextension.md#class_openxrapiextension_method_get_instance).

It also provides methods for querying the status of OpenXR initialization, and helper methods for ease of use of the API with GDExtension.

## 方法

|||
|:-:|:--|
| `void`                                                                              | [`begin_debug_label_region`](class_openxrapiextension.md#class_openxrapiextension_method_begin_debug_label_region) ( label_name: [`String`](class_string.md) )                                                                            |
| [`bool`](class_bool.md)                                                             | [`can_render`](class_openxrapiextension.md#class_openxrapiextension_method_can_render) ( )                                                                                                                                                |
| `void`                                                                              | [`end_debug_label_region`](class_openxrapiextension.md#class_openxrapiextension_method_end_debug_label_region) ( )                                                                                                                        |
| [`String`](class_string.md)                                                         | [`get_error_string`](class_openxrapiextension.md#class_openxrapiextension_method_get_error_string) ( result: [`int`](class_int.md) )                                                                                                      |
| [`int`](class_int.md)                                                               | [`get_hand_tracker`](class_openxrapiextension.md#class_openxrapiextension_method_get_hand_tracker) ( hand_index: [`int`](class_int.md) )                                                                                                  |
| [`int`](class_int.md)                                                               | [`get_instance`](class_openxrapiextension.md#class_openxrapiextension_method_get_instance) ( )                                                                                                                                            |
| [`int`](class_int.md)                                                               | [`get_instance_proc_addr`](class_openxrapiextension.md#class_openxrapiextension_method_get_instance_proc_addr) ( name: [`String`](class_string.md) )                                                                                      |
| [`int`](class_int.md)                                                               | [`get_next_frame_time`](class_openxrapiextension.md#class_openxrapiextension_method_get_next_frame_time) ( )                                                                                                                              |
| [`int`](class_int.md)                                                               | [`get_play_space`](class_openxrapiextension.md#class_openxrapiextension_method_get_play_space) ( )                                                                                                                                        |
| [`int`](class_int.md)                                                               | [`get_predicted_display_time`](class_openxrapiextension.md#class_openxrapiextension_method_get_predicted_display_time) ( )                                                                                                                |
| [`int`](class_int.md)                                                               | [`get_session`](class_openxrapiextension.md#class_openxrapiextension_method_get_session) ( )                                                                                                                                              |
| [`String`](class_string.md)                                                         | [`get_swapchain_format_name`](class_openxrapiextension.md#class_openxrapiextension_method_get_swapchain_format_name) ( swapchain_format: [`int`](class_int.md) )                                                                          |
| [`int`](class_int.md)                                                               | [`get_system_id`](class_openxrapiextension.md#class_openxrapiextension_method_get_system_id) ( )                                                                                                                                          |
| `void`                                                                              | [`insert_debug_label`](class_openxrapiextension.md#class_openxrapiextension_method_insert_debug_label) ( label_name: [`String`](class_string.md) )                                                                                        |
| [OpenXRAlphaBlendModeSupport](#enum_openxrapiextension_openxralphablendmodesupport) | [`is_environment_blend_mode_alpha_supported`](class_openxrapiextension.md#class_openxrapiextension_method_is_environment_blend_mode_alpha_supported) ( )                                                                                  |
| [`bool`](class_bool.md)                                                             | [`is_initialized`](class_openxrapiextension.md#class_openxrapiextension_method_is_initialized) ( )                                                                                                                                        |
| [`bool`](class_bool.md)                                                             | [`is_running`](class_openxrapiextension.md#class_openxrapiextension_method_is_running) ( )                                                                                                                                                |
| [`bool`](class_bool.md)                                                             | [`openxr_is_enabled`](class_openxrapiextension.md#class_openxrapiextension_method_openxr_is_enabled) ( check_run_in_editor: [`bool`](class_bool.md) ) static[^static]                                                                     |
| `void`                                                                              | [`register_composition_layer_provider`](class_openxrapiextension.md#class_openxrapiextension_method_register_composition_layer_provider) ( extension: [`OpenXRExtensionWrapperExtension`](class_openxrextensionwrapperextension.md) )     |
| `void`                                                                              | [`set_emulate_environment_blend_mode_alpha_blend`](class_openxrapiextension.md#class_openxrapiextension_method_set_emulate_environment_blend_mode_alpha_blend) ( enabled: [`bool`](class_bool.md) )                                       |
| `void`                                                                              | [`set_object_name`](class_openxrapiextension.md#class_openxrapiextension_method_set_object_name) ( object_type: [`int`](class_int.md), object_handle: [`int`](class_int.md), object_name: [`String`](class_string.md) )                   |
| [`Transform3D`](class_transform3d.md)                                               | [`transform_from_pose`](class_openxrapiextension.md#class_openxrapiextension_method_transform_from_pose) ( pose: `const void*` )                                                                                                          |
| `void`                                                                              | [`unregister_composition_layer_provider`](class_openxrapiextension.md#class_openxrapiextension_method_unregister_composition_layer_provider) ( extension: [`OpenXRExtensionWrapperExtension`](class_openxrextensionwrapperextension.md) ) |
| [`bool`](class_bool.md)                                                             | [`xr_result`](class_openxrapiextension.md#class_openxrapiextension_method_xr_result) ( result: [`int`](class_int.md), format: [`String`](class_string.md), args: [`Array`](class_array.md) )                                              |

<!-- rst-class:: classref-section-separator -->

---

## 枚举

<div id="_class_enum_openxrapiextension_openxralphablendmodesupport"></div>

enum **OpenXRAlphaBlendModeSupport**: <div id="enum_openxrapiextension_openxralphablendmodesupport"></div>

<div id="_class_openxrapiextension_constant_openxr_alpha_blend_mode_support_none"></div>

[OpenXRAlphaBlendModeSupport](#enum_openxrapiextension_openxralphablendmodesupport) **OPENXR_ALPHA_BLEND_MODE_SUPPORT_NONE** = ``0``

Means that [`XRInterface.XR_ENV_BLEND_MODE_ALPHA_BLEND`](class_xrinterface.md#class_xrinterface_constant_xr_env_blend_mode_alpha_blend) isn't supported at all.

<div id="_class_openxrapiextension_constant_openxr_alpha_blend_mode_support_real"></div>

[OpenXRAlphaBlendModeSupport](#enum_openxrapiextension_openxralphablendmodesupport) **OPENXR_ALPHA_BLEND_MODE_SUPPORT_REAL** = ``1``

Means that [`XRInterface.XR_ENV_BLEND_MODE_ALPHA_BLEND`](class_xrinterface.md#class_xrinterface_constant_xr_env_blend_mode_alpha_blend) is really supported.

<div id="_class_openxrapiextension_constant_openxr_alpha_blend_mode_support_emulating"></div>

[OpenXRAlphaBlendModeSupport](#enum_openxrapiextension_openxralphablendmodesupport) **OPENXR_ALPHA_BLEND_MODE_SUPPORT_EMULATING** = ``2``

Means that [`XRInterface.XR_ENV_BLEND_MODE_ALPHA_BLEND`](class_xrinterface.md#class_xrinterface_constant_xr_env_blend_mode_alpha_blend) is emulated.

<!-- rst-class:: classref-section-separator -->

---

## 方法说明

<div id="_class_openxrapiextension_method_begin_debug_label_region"></div>

`void` **begin_debug_label_region** ( label_name: [`String`](class_string.md) )<div id="class_openxrapiextension_method_begin_debug_label_region"></div>

Begins a new debug label region, this label will be reported in debug messages for any calls following this until [`end_debug_label_region`](class_openxrapiextension.md#class_openxrapiextension_method_end_debug_label_region) is called. Debug labels can be stacked.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_openxrapiextension_method_can_render"></div>

[`bool`](class_bool.md) **can_render** ( )<div id="class_openxrapiextension_method_can_render"></div>

Returns `true` if OpenXR is initialized for rendering with an XR viewport.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_openxrapiextension_method_end_debug_label_region"></div>

`void` **end_debug_label_region** ( )<div id="class_openxrapiextension_method_end_debug_label_region"></div>

Marks the end of a debug label region. Removes the latest debug label region added by calling [`begin_debug_label_region`](class_openxrapiextension.md#class_openxrapiextension_method_begin_debug_label_region).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_openxrapiextension_method_get_error_string"></div>

[`String`](class_string.md) **get_error_string** ( result: [`int`](class_int.md) )<div id="class_openxrapiextension_method_get_error_string"></div>

Returns an error string for the given [*XrResult*](https://registry.khronos.org/OpenXR/specs/1.0/man/html/XrResult.html).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_openxrapiextension_method_get_hand_tracker"></div>

[`int`](class_int.md) **get_hand_tracker** ( hand_index: [`int`](class_int.md) )<div id="class_openxrapiextension_method_get_hand_tracker"></div>

Returns the corresponding `XRHandTrackerEXT` handle for the given hand index value.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_openxrapiextension_method_get_instance"></div>

[`int`](class_int.md) **get_instance** ( )<div id="class_openxrapiextension_method_get_instance"></div>

Returns the [*XrInstance*](https://registry.khronos.org/OpenXR/specs/1.0/man/html/XrInstance.html) created during the initialization of the OpenXR API.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_openxrapiextension_method_get_instance_proc_addr"></div>

[`int`](class_int.md) **get_instance_proc_addr** ( name: [`String`](class_string.md) )<div id="class_openxrapiextension_method_get_instance_proc_addr"></div>

Returns the function pointer of the OpenXR function with the specified name, cast to an integer. If the function with the given name does not exist, the method returns `0`.

 **Note:** `openxr/util.h` contains utility macros for acquiring OpenXR functions, e.g. `GDEXTENSION_INIT_XR_FUNC_V(xrCreateAction)`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_openxrapiextension_method_get_next_frame_time"></div>

[`int`](class_int.md) **get_next_frame_time** ( )<div id="class_openxrapiextension_method_get_next_frame_time"></div>

Returns the predicted display timing for the next frame.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_openxrapiextension_method_get_play_space"></div>

[`int`](class_int.md) **get_play_space** ( )<div id="class_openxrapiextension_method_get_play_space"></div>

Returns the play space, which is an [*XrSpace*](https://registry.khronos.org/OpenXR/specs/1.0/man/html/XrSpace.html) cast to an integer.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_openxrapiextension_method_get_predicted_display_time"></div>

[`int`](class_int.md) **get_predicted_display_time** ( )<div id="class_openxrapiextension_method_get_predicted_display_time"></div>

Returns the predicted display timing for the current frame.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_openxrapiextension_method_get_session"></div>

[`int`](class_int.md) **get_session** ( )<div id="class_openxrapiextension_method_get_session"></div>

Returns the OpenXR session, which is an [*XrSession*](https://registry.khronos.org/OpenXR/specs/1.0/man/html/XrSession.html) cast to an integer.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_openxrapiextension_method_get_swapchain_format_name"></div>

[`String`](class_string.md) **get_swapchain_format_name** ( swapchain_format: [`int`](class_int.md) )<div id="class_openxrapiextension_method_get_swapchain_format_name"></div>

Returns the name of the specified swapchain format.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_openxrapiextension_method_get_system_id"></div>

[`int`](class_int.md) **get_system_id** ( )<div id="class_openxrapiextension_method_get_system_id"></div>

Returns the id of the system, which is a [*XrSystemId*](https://registry.khronos.org/OpenXR/specs/1.0/man/html/XrSystemId.html) cast to an integer.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_openxrapiextension_method_insert_debug_label"></div>

`void` **insert_debug_label** ( label_name: [`String`](class_string.md) )<div id="class_openxrapiextension_method_insert_debug_label"></div>

Inserts a debug label, this label is reported in any debug message resulting from the OpenXR calls that follows, until any of [`begin_debug_label_region`](class_openxrapiextension.md#class_openxrapiextension_method_begin_debug_label_region), [`end_debug_label_region`](class_openxrapiextension.md#class_openxrapiextension_method_end_debug_label_region), or [`insert_debug_label`](class_openxrapiextension.md#class_openxrapiextension_method_insert_debug_label) is called.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_openxrapiextension_method_is_environment_blend_mode_alpha_supported"></div>

[OpenXRAlphaBlendModeSupport](#enum_openxrapiextension_openxralphablendmodesupport) **is_environment_blend_mode_alpha_supported** ( )<div id="class_openxrapiextension_method_is_environment_blend_mode_alpha_supported"></div>

Returns [OpenXRAlphaBlendModeSupport](#enum_openxrapiextension_openxralphablendmodesupport) denoting if [`XRInterface.XR_ENV_BLEND_MODE_ALPHA_BLEND`](class_xrinterface.md#class_xrinterface_constant_xr_env_blend_mode_alpha_blend) is really supported, emulated or not supported at all.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_openxrapiextension_method_is_initialized"></div>

[`bool`](class_bool.md) **is_initialized** ( )<div id="class_openxrapiextension_method_is_initialized"></div>

Returns `true` if OpenXR is initialized.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_openxrapiextension_method_is_running"></div>

[`bool`](class_bool.md) **is_running** ( )<div id="class_openxrapiextension_method_is_running"></div>

Returns `true` if OpenXR is running ([*xrBeginSession*](https://registry.khronos.org/OpenXR/specs/1.0/man/html/xrBeginSession.html) was successfully called and the swapchains were created).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_openxrapiextension_method_openxr_is_enabled"></div>

[`bool`](class_bool.md) **openxr_is_enabled** ( check_run_in_editor: [`bool`](class_bool.md) ) static[^static]<div id="class_openxrapiextension_method_openxr_is_enabled"></div>

Returns `true` if OpenXR is enabled.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_openxrapiextension_method_register_composition_layer_provider"></div>

`void` **register_composition_layer_provider** ( extension: [`OpenXRExtensionWrapperExtension`](class_openxrextensionwrapperextension.md) )<div id="class_openxrapiextension_method_register_composition_layer_provider"></div>

Registers the given extension as a composition layer provider.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_openxrapiextension_method_set_emulate_environment_blend_mode_alpha_blend"></div>

`void` **set_emulate_environment_blend_mode_alpha_blend** ( enabled: [`bool`](class_bool.md) )<div id="class_openxrapiextension_method_set_emulate_environment_blend_mode_alpha_blend"></div>

If set to `true`, an OpenXR extension is loaded which is capable of emulating the [`XRInterface.XR_ENV_BLEND_MODE_ALPHA_BLEND`](class_xrinterface.md#class_xrinterface_constant_xr_env_blend_mode_alpha_blend) blend mode.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_openxrapiextension_method_set_object_name"></div>

`void` **set_object_name** ( object_type: [`int`](class_int.md), object_handle: [`int`](class_int.md), object_name: [`String`](class_string.md) )<div id="class_openxrapiextension_method_set_object_name"></div>

Set the object name of an OpenXR object, used for debug output. `object_type` must be a valid OpenXR `XrObjectType` enum and `object_handle` must be a valid OpenXR object handle.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_openxrapiextension_method_transform_from_pose"></div>

[`Transform3D`](class_transform3d.md) **transform_from_pose** ( pose: `const void*` )<div id="class_openxrapiextension_method_transform_from_pose"></div>

Creates a [`Transform3D`](class_transform3d.md) from an [*XrPosef*](https://registry.khronos.org/OpenXR/specs/1.0/man/html/XrPosef.html).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_openxrapiextension_method_unregister_composition_layer_provider"></div>

`void` **unregister_composition_layer_provider** ( extension: [`OpenXRExtensionWrapperExtension`](class_openxrextensionwrapperextension.md) )<div id="class_openxrapiextension_method_unregister_composition_layer_provider"></div>

Unregisters the given extension as a composition layer provider.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_openxrapiextension_method_xr_result"></div>

[`bool`](class_bool.md) **xr_result** ( result: [`int`](class_int.md), format: [`String`](class_string.md), args: [`Array`](class_array.md) )<div id="class_openxrapiextension_method_xr_result"></div>

Returns `true` if the provided [*XrResult*](https://registry.khronos.org/OpenXR/specs/1.0/man/html/XrResult.html) (cast to an integer) is successful. Otherwise returns `false` and prints the [*XrResult*](https://registry.khronos.org/OpenXR/specs/1.0/man/html/XrResult.html) converted to a string, with the specified additional information.

[^virtual]: 本方法通常需要用户覆盖才能生效。
[^const]: 本方法无副作用，不会修改该实例的任何成员变量。
[^vararg]: 本方法除了能接受在此处描述的参数外，还能够继续接受任意数量的参数。
[^constructor]: 本方法用于构造某个类型。
[^static]: 调用本方法无需实例，可直接使用类名进行调用。
[^operator]: 本方法描述的是使用本类型作为左操作数的有效运算符。
[^bitfield]: 这个值是由下列位标志构成位掩码的整数。
[^void]: 无返回值。
