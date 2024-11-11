<!-- ⚠ 请勿编辑本文件 ⚠ -->
<!-- 本文档使用脚本从 WeDot 引擎源码仓库生成。 -->
<!-- 生成脚本：https://github.com/WeDot-Engine/WeDot/tree/master/doc/tools/make_md.py； -->
<!-- 原文件：https://github.com/WeDot-Engine/WeDot/tree/master/modules/openxr/doc_classes/OpenXRExtensionWrapperExtension.xml。 -->

<div id="_class_openxrextensionwrapperextension"></div>

# OpenXRExtensionWrapperExtension

**继承：** [`Object`](class_object.md)

Allows clients to implement OpenXR extensions with GDExtension.

## 描述

**OpenXRExtensionWrapperExtension** allows clients to implement OpenXR extensions with GDExtension. The extension should be registered with [`register_extension_wrapper`](class_openxrextensionwrapperextension.md#class_openxrextensionwrapperextension_method_register_extension_wrapper).

## 方法

|||
|:-:|:--|
| [`int`](class_int.md)                                       | [`_get_composition_layer`](class_openxrextensionwrapperextension.md#class_openxrextensionwrapperextension_private_method__get_composition_layer) ( index: [`int`](class_int.md) ) virtual[^virtual]                                                                                                                                  |
| [`int`](class_int.md)                                       | [`_get_composition_layer_count`](class_openxrextensionwrapperextension.md#class_openxrextensionwrapperextension_private_method__get_composition_layer_count) ( ) virtual[^virtual]                                                                                                                                                   |
| [`int`](class_int.md)                                       | [`_get_composition_layer_order`](class_openxrextensionwrapperextension.md#class_openxrextensionwrapperextension_private_method__get_composition_layer_order) ( index: [`int`](class_int.md) ) virtual[^virtual]                                                                                                                      |
| [`Dictionary`](class_dictionary.md)                         | [`_get_requested_extensions`](class_openxrextensionwrapperextension.md#class_openxrextensionwrapperextension_private_method__get_requested_extensions) ( ) virtual[^virtual]                                                                                                                                                         |
| [`PackedStringArray`](class_packedstringarray.md)           | [`_get_suggested_tracker_names`](class_openxrextensionwrapperextension.md#class_openxrextensionwrapperextension_private_method__get_suggested_tracker_names) ( ) virtual[^virtual]                                                                                                                                                   |
| [Array](class_array.md) [`Dictionary`](class_dictionary.md) | [`_get_viewport_composition_layer_extension_properties`](class_openxrextensionwrapperextension.md#class_openxrextensionwrapperextension_private_method__get_viewport_composition_layer_extension_properties) ( ) virtual[^virtual]                                                                                                   |
| [`Dictionary`](class_dictionary.md)                         | [`_get_viewport_composition_layer_extension_property_defaults`](class_openxrextensionwrapperextension.md#class_openxrextensionwrapperextension_private_method__get_viewport_composition_layer_extension_property_defaults) ( ) virtual[^virtual]                                                                                     |
| `void`                                                      | [`_on_before_instance_created`](class_openxrextensionwrapperextension.md#class_openxrextensionwrapperextension_private_method__on_before_instance_created) ( ) virtual[^virtual]                                                                                                                                                     |
| [`bool`](class_bool.md)                                     | [`_on_event_polled`](class_openxrextensionwrapperextension.md#class_openxrextensionwrapperextension_private_method__on_event_polled) ( event: `const void*` ) virtual[^virtual]                                                                                                                                                      |
| `void`                                                      | [`_on_instance_created`](class_openxrextensionwrapperextension.md#class_openxrextensionwrapperextension_private_method__on_instance_created) ( instance: [`int`](class_int.md) ) virtual[^virtual]                                                                                                                                   |
| `void`                                                      | [`_on_instance_destroyed`](class_openxrextensionwrapperextension.md#class_openxrextensionwrapperextension_private_method__on_instance_destroyed) ( ) virtual[^virtual]                                                                                                                                                               |
| `void`                                                      | [`_on_main_swapchains_created`](class_openxrextensionwrapperextension.md#class_openxrextensionwrapperextension_private_method__on_main_swapchains_created) ( ) virtual[^virtual]                                                                                                                                                     |
| `void`                                                      | [`_on_post_draw_viewport`](class_openxrextensionwrapperextension.md#class_openxrextensionwrapperextension_private_method__on_post_draw_viewport) ( viewport: [`RID`](class_rid.md) ) virtual[^virtual]                                                                                                                               |
| `void`                                                      | [`_on_pre_draw_viewport`](class_openxrextensionwrapperextension.md#class_openxrextensionwrapperextension_private_method__on_pre_draw_viewport) ( viewport: [`RID`](class_rid.md) ) virtual[^virtual]                                                                                                                                 |
| `void`                                                      | [`_on_pre_render`](class_openxrextensionwrapperextension.md#class_openxrextensionwrapperextension_private_method__on_pre_render) ( ) virtual[^virtual]                                                                                                                                                                               |
| `void`                                                      | [`_on_process`](class_openxrextensionwrapperextension.md#class_openxrextensionwrapperextension_private_method__on_process) ( ) virtual[^virtual]                                                                                                                                                                                     |
| `void`                                                      | [`_on_register_metadata`](class_openxrextensionwrapperextension.md#class_openxrextensionwrapperextension_private_method__on_register_metadata) ( ) virtual[^virtual]                                                                                                                                                                 |
| `void`                                                      | [`_on_session_created`](class_openxrextensionwrapperextension.md#class_openxrextensionwrapperextension_private_method__on_session_created) ( session: [`int`](class_int.md) ) virtual[^virtual]                                                                                                                                      |
| `void`                                                      | [`_on_session_destroyed`](class_openxrextensionwrapperextension.md#class_openxrextensionwrapperextension_private_method__on_session_destroyed) ( ) virtual[^virtual]                                                                                                                                                                 |
| `void`                                                      | [`_on_state_exiting`](class_openxrextensionwrapperextension.md#class_openxrextensionwrapperextension_private_method__on_state_exiting) ( ) virtual[^virtual]                                                                                                                                                                         |
| `void`                                                      | [`_on_state_focused`](class_openxrextensionwrapperextension.md#class_openxrextensionwrapperextension_private_method__on_state_focused) ( ) virtual[^virtual]                                                                                                                                                                         |
| `void`                                                      | [`_on_state_idle`](class_openxrextensionwrapperextension.md#class_openxrextensionwrapperextension_private_method__on_state_idle) ( ) virtual[^virtual]                                                                                                                                                                               |
| `void`                                                      | [`_on_state_loss_pending`](class_openxrextensionwrapperextension.md#class_openxrextensionwrapperextension_private_method__on_state_loss_pending) ( ) virtual[^virtual]                                                                                                                                                               |
| `void`                                                      | [`_on_state_ready`](class_openxrextensionwrapperextension.md#class_openxrextensionwrapperextension_private_method__on_state_ready) ( ) virtual[^virtual]                                                                                                                                                                             |
| `void`                                                      | [`_on_state_stopping`](class_openxrextensionwrapperextension.md#class_openxrextensionwrapperextension_private_method__on_state_stopping) ( ) virtual[^virtual]                                                                                                                                                                       |
| `void`                                                      | [`_on_state_synchronized`](class_openxrextensionwrapperextension.md#class_openxrextensionwrapperextension_private_method__on_state_synchronized) ( ) virtual[^virtual]                                                                                                                                                               |
| `void`                                                      | [`_on_state_visible`](class_openxrextensionwrapperextension.md#class_openxrextensionwrapperextension_private_method__on_state_visible) ( ) virtual[^virtual]                                                                                                                                                                         |
| `void`                                                      | [`_on_viewport_composition_layer_destroyed`](class_openxrextensionwrapperextension.md#class_openxrextensionwrapperextension_private_method__on_viewport_composition_layer_destroyed) ( layer: `const void*` ) virtual[^virtual]                                                                                                      |
| [`int`](class_int.md)                                       | [`_set_android_surface_swapchain_create_info_and_get_next_pointer`](class_openxrextensionwrapperextension.md#class_openxrextensionwrapperextension_private_method__set_android_surface_swapchain_create_info_and_get_next_pointer) ( property_values: [`Dictionary`](class_dictionary.md), next_pointer: `void*` ) virtual[^virtual] |
| [`int`](class_int.md)                                       | [`_set_hand_joint_locations_and_get_next_pointer`](class_openxrextensionwrapperextension.md#class_openxrextensionwrapperextension_private_method__set_hand_joint_locations_and_get_next_pointer) ( hand_index: [`int`](class_int.md), next_pointer: `void*` ) virtual[^virtual]                                                      |
| [`int`](class_int.md)                                       | [`_set_instance_create_info_and_get_next_pointer`](class_openxrextensionwrapperextension.md#class_openxrextensionwrapperextension_private_method__set_instance_create_info_and_get_next_pointer) ( next_pointer: `void*` ) virtual[^virtual]                                                                                         |
| [`int`](class_int.md)                                       | [`_set_session_create_and_get_next_pointer`](class_openxrextensionwrapperextension.md#class_openxrextensionwrapperextension_private_method__set_session_create_and_get_next_pointer) ( next_pointer: `void*` ) virtual[^virtual]                                                                                                     |
| [`int`](class_int.md)                                       | [`_set_swapchain_create_info_and_get_next_pointer`](class_openxrextensionwrapperextension.md#class_openxrextensionwrapperextension_private_method__set_swapchain_create_info_and_get_next_pointer) ( next_pointer: `void*` ) virtual[^virtual]                                                                                       |
| [`int`](class_int.md)                                       | [`_set_system_properties_and_get_next_pointer`](class_openxrextensionwrapperextension.md#class_openxrextensionwrapperextension_private_method__set_system_properties_and_get_next_pointer) ( next_pointer: `void*` ) virtual[^virtual]                                                                                               |
| [`int`](class_int.md)                                       | [`_set_viewport_composition_layer_and_get_next_pointer`](class_openxrextensionwrapperextension.md#class_openxrextensionwrapperextension_private_method__set_viewport_composition_layer_and_get_next_pointer) ( layer: `const void*`, property_values: [`Dictionary`](class_dictionary.md), next_pointer: `void*` ) virtual[^virtual] |
| [`OpenXRAPIExtension`](class_openxrapiextension.md)         | [`get_openxr_api`](class_openxrextensionwrapperextension.md#class_openxrextensionwrapperextension_method_get_openxr_api) ( )                                                                                                                                                                                                         |
| `void`                                                      | [`register_extension_wrapper`](class_openxrextensionwrapperextension.md#class_openxrextensionwrapperextension_method_register_extension_wrapper) ( )                                                                                                                                                                                 |

<!-- rst-class:: classref-section-separator -->

---

## 方法说明

<div id="_class_openxrextensionwrapperextension_private_method__get_composition_layer"></div>

[`int`](class_int.md) **_get_composition_layer** ( index: [`int`](class_int.md) ) virtual[^virtual]<div id="class_openxrextensionwrapperextension_private_method__get_composition_layer"></div>

Returns a pointer to an `XrCompositionLayerBaseHeader` struct to provide the given composition layer.

This will only be called if the extension previously registered itself with [`OpenXRAPIExtension.register_composition_layer_provider`](class_openxrapiextension.md#class_openxrapiextension_method_register_composition_layer_provider).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_openxrextensionwrapperextension_private_method__get_composition_layer_count"></div>

[`int`](class_int.md) **_get_composition_layer_count** ( ) virtual[^virtual]<div id="class_openxrextensionwrapperextension_private_method__get_composition_layer_count"></div>

Returns the number of composition layers this extension wrapper provides via [`_get_composition_layer`](class_openxrextensionwrapperextension.md#class_openxrextensionwrapperextension_private_method__get_composition_layer).

This will only be called if the extension previously registered itself with [`OpenXRAPIExtension.register_composition_layer_provider`](class_openxrapiextension.md#class_openxrapiextension_method_register_composition_layer_provider).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_openxrextensionwrapperextension_private_method__get_composition_layer_order"></div>

[`int`](class_int.md) **_get_composition_layer_order** ( index: [`int`](class_int.md) ) virtual[^virtual]<div id="class_openxrextensionwrapperextension_private_method__get_composition_layer_order"></div>

Returns an integer that will be used to sort the given composition layer provided via [`_get_composition_layer`](class_openxrextensionwrapperextension.md#class_openxrextensionwrapperextension_private_method__get_composition_layer). Lower numbers will move the layer to the front of the list, and higher numbers to the end. The default projection layer has an order of `0`, so layers provided by this method should probably be above or below (but not exactly) `0`.

This will only be called if the extension previously registered itself with [`OpenXRAPIExtension.register_composition_layer_provider`](class_openxrapiextension.md#class_openxrapiextension_method_register_composition_layer_provider).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_openxrextensionwrapperextension_private_method__get_requested_extensions"></div>

[`Dictionary`](class_dictionary.md) **_get_requested_extensions** ( ) virtual[^virtual]<div id="class_openxrextensionwrapperextension_private_method__get_requested_extensions"></div>

Returns a [`Dictionary`](class_dictionary.md) of OpenXR extensions related to this extension. The [`Dictionary`](class_dictionary.md) should contain the name of the extension, mapped to a `bool *` cast to an integer:

- If the `bool *` is a `nullptr` this extension is mandatory.

- If the `bool *` points to a boolean, the boolean will be updated to `true` if the extension is enabled.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_openxrextensionwrapperextension_private_method__get_suggested_tracker_names"></div>

[`PackedStringArray`](class_packedstringarray.md) **_get_suggested_tracker_names** ( ) virtual[^virtual]<div id="class_openxrextensionwrapperextension_private_method__get_suggested_tracker_names"></div>

Returns a [`PackedStringArray`](class_packedstringarray.md) of positional tracker names that are used within the extension wrapper.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_openxrextensionwrapperextension_private_method__get_viewport_composition_layer_extension_properties"></div>

[Array](class_array.md) [`Dictionary`](class_dictionary.md) **_get_viewport_composition_layer_extension_properties** ( ) virtual[^virtual]<div id="class_openxrextensionwrapperextension_private_method__get_viewport_composition_layer_extension_properties"></div>

Gets an array of [`Dictionary`](class_dictionary.md) s that represent properties, just like [`Object._get_property_list`](class_object.md#class_object_private_method__get_property_list), that will be added to [`OpenXRCompositionLayer`](class_openxrcompositionlayer.md) nodes.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_openxrextensionwrapperextension_private_method__get_viewport_composition_layer_extension_property_defaults"></div>

[`Dictionary`](class_dictionary.md) **_get_viewport_composition_layer_extension_property_defaults** ( ) virtual[^virtual]<div id="class_openxrextensionwrapperextension_private_method__get_viewport_composition_layer_extension_property_defaults"></div>

Gets a [`Dictionary`](class_dictionary.md) containing the default values for the properties returned by [`_get_viewport_composition_layer_extension_properties`](class_openxrextensionwrapperextension.md#class_openxrextensionwrapperextension_private_method__get_viewport_composition_layer_extension_properties).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_openxrextensionwrapperextension_private_method__on_before_instance_created"></div>

`void` **_on_before_instance_created** ( ) virtual[^virtual]<div id="class_openxrextensionwrapperextension_private_method__on_before_instance_created"></div>

Called before the OpenXR instance is created.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_openxrextensionwrapperextension_private_method__on_event_polled"></div>

[`bool`](class_bool.md) **_on_event_polled** ( event: `const void*` ) virtual[^virtual]<div id="class_openxrextensionwrapperextension_private_method__on_event_polled"></div>

Called when there is an OpenXR event to process. When implementing, return `true` if the event was handled, return `false` otherwise.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_openxrextensionwrapperextension_private_method__on_instance_created"></div>

`void` **_on_instance_created** ( instance: [`int`](class_int.md) ) virtual[^virtual]<div id="class_openxrextensionwrapperextension_private_method__on_instance_created"></div>

Called right after the OpenXR instance is created.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_openxrextensionwrapperextension_private_method__on_instance_destroyed"></div>

`void` **_on_instance_destroyed** ( ) virtual[^virtual]<div id="class_openxrextensionwrapperextension_private_method__on_instance_destroyed"></div>

Called right before the OpenXR instance is destroyed.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_openxrextensionwrapperextension_private_method__on_main_swapchains_created"></div>

`void` **_on_main_swapchains_created** ( ) virtual[^virtual]<div id="class_openxrextensionwrapperextension_private_method__on_main_swapchains_created"></div>

Called right after the main swapchains are (re)created.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_openxrextensionwrapperextension_private_method__on_post_draw_viewport"></div>

`void` **_on_post_draw_viewport** ( viewport: [`RID`](class_rid.md) ) virtual[^virtual]<div id="class_openxrextensionwrapperextension_private_method__on_post_draw_viewport"></div>

Called right after the given viewport is rendered.

 **Note:** The draw commands might only be queued at this point, not executed.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_openxrextensionwrapperextension_private_method__on_pre_draw_viewport"></div>

`void` **_on_pre_draw_viewport** ( viewport: [`RID`](class_rid.md) ) virtual[^virtual]<div id="class_openxrextensionwrapperextension_private_method__on_pre_draw_viewport"></div>

Called right before the given viewport is rendered.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_openxrextensionwrapperextension_private_method__on_pre_render"></div>

`void` **_on_pre_render** ( ) virtual[^virtual]<div id="class_openxrextensionwrapperextension_private_method__on_pre_render"></div>

Called right before the XR viewports begin their rendering step.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_openxrextensionwrapperextension_private_method__on_process"></div>

`void` **_on_process** ( ) virtual[^virtual]<div id="class_openxrextensionwrapperextension_private_method__on_process"></div>

Called as part of the OpenXR process handling. This happens right before general and physics processing steps of the main loop. During this step controller data is queried and made available to game logic.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_openxrextensionwrapperextension_private_method__on_register_metadata"></div>

`void` **_on_register_metadata** ( ) virtual[^virtual]<div id="class_openxrextensionwrapperextension_private_method__on_register_metadata"></div>

Allows extensions to register additional controller metadata. This function is called even when the OpenXR API is not constructed as the metadata needs to be available to the editor.

Extensions should also provide metadata regardless of whether they are supported on the host system. The controller data is used to setup action maps for users who may have access to the relevant hardware.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_openxrextensionwrapperextension_private_method__on_session_created"></div>

`void` **_on_session_created** ( session: [`int`](class_int.md) ) virtual[^virtual]<div id="class_openxrextensionwrapperextension_private_method__on_session_created"></div>

Called right after the OpenXR session is created.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_openxrextensionwrapperextension_private_method__on_session_destroyed"></div>

`void` **_on_session_destroyed** ( ) virtual[^virtual]<div id="class_openxrextensionwrapperextension_private_method__on_session_destroyed"></div>

Called right before the OpenXR session is destroyed.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_openxrextensionwrapperextension_private_method__on_state_exiting"></div>

`void` **_on_state_exiting** ( ) virtual[^virtual]<div id="class_openxrextensionwrapperextension_private_method__on_state_exiting"></div>

Called when the OpenXR session state is changed to exiting.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_openxrextensionwrapperextension_private_method__on_state_focused"></div>

`void` **_on_state_focused** ( ) virtual[^virtual]<div id="class_openxrextensionwrapperextension_private_method__on_state_focused"></div>

Called when the OpenXR session state is changed to focused. This state is the active state when the game runs.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_openxrextensionwrapperextension_private_method__on_state_idle"></div>

`void` **_on_state_idle** ( ) virtual[^virtual]<div id="class_openxrextensionwrapperextension_private_method__on_state_idle"></div>

Called when the OpenXR session state is changed to idle.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_openxrextensionwrapperextension_private_method__on_state_loss_pending"></div>

`void` **_on_state_loss_pending** ( ) virtual[^virtual]<div id="class_openxrextensionwrapperextension_private_method__on_state_loss_pending"></div>

Called when the OpenXR session state is changed to loss pending.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_openxrextensionwrapperextension_private_method__on_state_ready"></div>

`void` **_on_state_ready** ( ) virtual[^virtual]<div id="class_openxrextensionwrapperextension_private_method__on_state_ready"></div>

Called when the OpenXR session state is changed to ready. This means OpenXR is ready to set up the session.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_openxrextensionwrapperextension_private_method__on_state_stopping"></div>

`void` **_on_state_stopping** ( ) virtual[^virtual]<div id="class_openxrextensionwrapperextension_private_method__on_state_stopping"></div>

Called when the OpenXR session state is changed to stopping.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_openxrextensionwrapperextension_private_method__on_state_synchronized"></div>

`void` **_on_state_synchronized** ( ) virtual[^virtual]<div id="class_openxrextensionwrapperextension_private_method__on_state_synchronized"></div>

Called when the OpenXR session state is changed to synchronized. OpenXR also returns to this state when the application loses focus.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_openxrextensionwrapperextension_private_method__on_state_visible"></div>

`void` **_on_state_visible** ( ) virtual[^virtual]<div id="class_openxrextensionwrapperextension_private_method__on_state_visible"></div>

Called when the OpenXR session state is changed to visible. This means OpenXR is now ready to receive frames.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_openxrextensionwrapperextension_private_method__on_viewport_composition_layer_destroyed"></div>

`void` **_on_viewport_composition_layer_destroyed** ( layer: `const void*` ) virtual[^virtual]<div id="class_openxrextensionwrapperextension_private_method__on_viewport_composition_layer_destroyed"></div>

Called when a composition layer created via [`OpenXRCompositionLayer`](class_openxrcompositionlayer.md) is destroyed.

 `layer` is a pointer to an `XrCompositionLayerBaseHeader` struct.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_openxrextensionwrapperextension_private_method__set_android_surface_swapchain_create_info_and_get_next_pointer"></div>

[`int`](class_int.md) **_set_android_surface_swapchain_create_info_and_get_next_pointer** ( property_values: [`Dictionary`](class_dictionary.md), next_pointer: `void*` ) virtual[^virtual]<div id="class_openxrextensionwrapperextension_private_method__set_android_surface_swapchain_create_info_and_get_next_pointer"></div>

Adds additional data structures to Android surface swapchains created by [`OpenXRCompositionLayer`](class_openxrcompositionlayer.md).

 `property_values` contains the values of the properties returned by [`_get_viewport_composition_layer_extension_properties`](class_openxrextensionwrapperextension.md#class_openxrextensionwrapperextension_private_method__get_viewport_composition_layer_extension_properties).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_openxrextensionwrapperextension_private_method__set_hand_joint_locations_and_get_next_pointer"></div>

[`int`](class_int.md) **_set_hand_joint_locations_and_get_next_pointer** ( hand_index: [`int`](class_int.md), next_pointer: `void*` ) virtual[^virtual]<div id="class_openxrextensionwrapperextension_private_method__set_hand_joint_locations_and_get_next_pointer"></div>

Adds additional data structures when each hand tracker is created.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_openxrextensionwrapperextension_private_method__set_instance_create_info_and_get_next_pointer"></div>

[`int`](class_int.md) **_set_instance_create_info_and_get_next_pointer** ( next_pointer: `void*` ) virtual[^virtual]<div id="class_openxrextensionwrapperextension_private_method__set_instance_create_info_and_get_next_pointer"></div>

Adds additional data structures when the OpenXR instance is created.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_openxrextensionwrapperextension_private_method__set_session_create_and_get_next_pointer"></div>

[`int`](class_int.md) **_set_session_create_and_get_next_pointer** ( next_pointer: `void*` ) virtual[^virtual]<div id="class_openxrextensionwrapperextension_private_method__set_session_create_and_get_next_pointer"></div>

Adds additional data structures when the OpenXR session is created.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_openxrextensionwrapperextension_private_method__set_swapchain_create_info_and_get_next_pointer"></div>

[`int`](class_int.md) **_set_swapchain_create_info_and_get_next_pointer** ( next_pointer: `void*` ) virtual[^virtual]<div id="class_openxrextensionwrapperextension_private_method__set_swapchain_create_info_and_get_next_pointer"></div>

Adds additional data structures when creating OpenXR swapchains.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_openxrextensionwrapperextension_private_method__set_system_properties_and_get_next_pointer"></div>

[`int`](class_int.md) **_set_system_properties_and_get_next_pointer** ( next_pointer: `void*` ) virtual[^virtual]<div id="class_openxrextensionwrapperextension_private_method__set_system_properties_and_get_next_pointer"></div>

Adds additional data structures when interogating OpenXR system abilities.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_openxrextensionwrapperextension_private_method__set_viewport_composition_layer_and_get_next_pointer"></div>

[`int`](class_int.md) **_set_viewport_composition_layer_and_get_next_pointer** ( layer: `const void*`, property_values: [`Dictionary`](class_dictionary.md), next_pointer: `void*` ) virtual[^virtual]<div id="class_openxrextensionwrapperextension_private_method__set_viewport_composition_layer_and_get_next_pointer"></div>

Adds additional data structures to composition layers created by [`OpenXRCompositionLayer`](class_openxrcompositionlayer.md).

 `property_values` contains the values of the properties returned by [`_get_viewport_composition_layer_extension_properties`](class_openxrextensionwrapperextension.md#class_openxrextensionwrapperextension_private_method__get_viewport_composition_layer_extension_properties).

 `layer` is a pointer to an `XrCompositionLayerBaseHeader` struct.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_openxrextensionwrapperextension_method_get_openxr_api"></div>

[`OpenXRAPIExtension`](class_openxrapiextension.md) **get_openxr_api** ( )<div id="class_openxrextensionwrapperextension_method_get_openxr_api"></div>

Returns the created [`OpenXRAPIExtension`](class_openxrapiextension.md), which can be used to access the OpenXR API.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_openxrextensionwrapperextension_method_register_extension_wrapper"></div>

`void` **register_extension_wrapper** ( )<div id="class_openxrextensionwrapperextension_method_register_extension_wrapper"></div>

Registers the extension. This should happen at core module initialization level.

[^virtual]: 本方法通常需要用户覆盖才能生效。
[^const]: 本方法无副作用，不会修改该实例的任何成员变量。
[^vararg]: 本方法除了能接受在此处描述的参数外，还能够继续接受任意数量的参数。
[^constructor]: 本方法用于构造某个类型。
[^static]: 调用本方法无需实例，可直接使用类名进行调用。
[^operator]: 本方法描述的是使用本类型作为左操作数的有效运算符。
[^bitfield]: 这个值是由下列位标志构成位掩码的整数。
[^void]: 无返回值。
