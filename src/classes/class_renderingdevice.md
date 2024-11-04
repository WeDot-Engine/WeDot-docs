<!-- ⚠ 请勿编辑本文件 ⚠ -->
<!-- 本文档使用脚本从 WeDot 引擎源码仓库生成。 -->
<!-- 生成脚本：https://github.com/WeDot-Engine/WeDot/tree/4.3/doc/tools/make_md.py； -->
<!-- 原文件：https://github.com/WeDot-Engine/WeDot/tree/4.3/doc/classes/RenderingDevice.xml。 -->

<div id="_class_renderingdevice"></div>

# RenderingDevice

**继承：** [`Object`](class_object.md)

Abstraction for working with modern low-level graphics APIs.

## 描述

**RenderingDevice** is an abstraction for working with modern low-level graphics APIs such as Vulkan. Compared to [`RenderingServer`](class_renderingserver.md) (which works with Godot's own rendering subsystems), **RenderingDevice** is much lower-level and allows working more directly with the underlying graphics APIs. **RenderingDevice** is used in Godot to provide support for several modern low-level graphics APIs while reducing the amount of code duplication required. **RenderingDevice** can also be used in your own projects to perform things that are not exposed by [`RenderingServer`](class_renderingserver.md) or high-level nodes, such as using compute shaders.

On startup, Godot creates a global **RenderingDevice** which can be retrieved using [`RenderingServer.get_rendering_device`](#class_renderingserver_method_get_rendering_device). This global **RenderingDevice** performs drawing to the screen.

 **Local RenderingDevices:** Using [`RenderingServer.create_local_rendering_device`](#class_renderingserver_method_create_local_rendering_device), you can create "secondary" rendering devices to perform drawing and GPU compute operations on separate threads.

 **Note:** **RenderingDevice** assumes intermediate knowledge of modern graphics APIs such as Vulkan, Direct3D 12, Metal or WebGPU. These graphics APIs are lower-level than OpenGL or Direct3D 11, requiring you to perform what was previously done by the graphics driver itself. If you have difficulty understanding the concepts used in this class, follow the [*Vulkan Tutorial*](https://vulkan-tutorial.com/) or [*Vulkan Guide*](https://vkguide.dev/). It's recommended to have existing modern OpenGL or Direct3D 11 knowledge before attempting to learn a low-level graphics API.

 **Note:** **RenderingDevice** is not available when running in headless mode or when using the Compatibility rendering method.

## 方法

| `void`                                                 | [`barrier`](#class_renderingdevice_method_barrier) ( from: [BarrierMask](#enum_renderingdevice_barriermask) = 32767, to: [BarrierMask](#enum_renderingdevice_barriermask) = 32767 )                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| [Error](#enum_@globalscope_error)                      | [`buffer_clear`](#class_renderingdevice_method_buffer_clear) ( buffer: [`RID`](class_rid.md), offset: [`int`](class_int.md), size_bytes: [`int`](class_int.md) )                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| [Error](#enum_@globalscope_error)                      | [`buffer_copy`](#class_renderingdevice_method_buffer_copy) ( src_buffer: [`RID`](class_rid.md), dst_buffer: [`RID`](class_rid.md), src_offset: [`int`](class_int.md), dst_offset: [`int`](class_int.md), size: [`int`](class_int.md) )                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| [`PackedByteArray`](class_packedbytearray.md)          | [`buffer_get_data`](#class_renderingdevice_method_buffer_get_data) ( buffer: [`RID`](class_rid.md), offset_bytes: [`int`](class_int.md) = 0, size_bytes: [`int`](class_int.md) = 0 )                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| [Error](#enum_@globalscope_error)                      | [`buffer_update`](#class_renderingdevice_method_buffer_update) ( buffer: [`RID`](class_rid.md), offset: [`int`](class_int.md), size_bytes: [`int`](class_int.md), data: [`PackedByteArray`](class_packedbytearray.md) )                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| `void`                                                 | [`capture_timestamp`](#class_renderingdevice_method_capture_timestamp) ( name: [`String`](class_string.md) )                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| `void`                                                 | [`compute_list_add_barrier`](#class_renderingdevice_method_compute_list_add_barrier) ( compute_list: [`int`](class_int.md) )                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| [`int`](class_int.md)                                  | [`compute_list_begin`](#class_renderingdevice_method_compute_list_begin) ( )                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| `void`                                                 | [`compute_list_bind_compute_pipeline`](#class_renderingdevice_method_compute_list_bind_compute_pipeline) ( compute_list: [`int`](class_int.md), compute_pipeline: [`RID`](class_rid.md) )                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| `void`                                                 | [`compute_list_bind_uniform_set`](#class_renderingdevice_method_compute_list_bind_uniform_set) ( compute_list: [`int`](class_int.md), uniform_set: [`RID`](class_rid.md), set_index: [`int`](class_int.md) )                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| `void`                                                 | [`compute_list_dispatch`](#class_renderingdevice_method_compute_list_dispatch) ( compute_list: [`int`](class_int.md), x_groups: [`int`](class_int.md), y_groups: [`int`](class_int.md), z_groups: [`int`](class_int.md) )                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| `void`                                                 | [`compute_list_dispatch_indirect`](#class_renderingdevice_method_compute_list_dispatch_indirect) ( compute_list: [`int`](class_int.md), buffer: [`RID`](class_rid.md), offset: [`int`](class_int.md) )                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| `void`                                                 | [`compute_list_end`](#class_renderingdevice_method_compute_list_end) ( )                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| `void`                                                 | [`compute_list_set_push_constant`](#class_renderingdevice_method_compute_list_set_push_constant) ( compute_list: [`int`](class_int.md), buffer: [`PackedByteArray`](class_packedbytearray.md), size_bytes: [`int`](class_int.md) )                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| [`RID`](class_rid.md)                                  | [`compute_pipeline_create`](#class_renderingdevice_method_compute_pipeline_create) ( shader: [`RID`](class_rid.md), specialization_constants: [Array](class_array.md) [`RDPipelineSpecializationConstant`](class_rdpipelinespecializationconstant.md) = [] )                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| [`bool`](class_bool.md)                                | [`compute_pipeline_is_valid`](#class_renderingdevice_method_compute_pipeline_is_valid) ( compute_pipeline: [`RID`](class_rid.md) )                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| [`RenderingDevice`](class_renderingdevice.md)          | [`create_local_device`](#class_renderingdevice_method_create_local_device) ( )                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| `void`                                                 | [`draw_command_begin_label`](#class_renderingdevice_method_draw_command_begin_label) ( name: [`String`](class_string.md), color: [`Color`](class_color.md) )                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| `void`                                                 | [`draw_command_end_label`](#class_renderingdevice_method_draw_command_end_label) ( )                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| `void`                                                 | [`draw_command_insert_label`](#class_renderingdevice_method_draw_command_insert_label) ( name: [`String`](class_string.md), color: [`Color`](class_color.md) )                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| [`int`](class_int.md)                                  | [`draw_list_begin`](#class_renderingdevice_method_draw_list_begin) ( framebuffer: [`RID`](class_rid.md), initial_color_action: [InitialAction](#enum_renderingdevice_initialaction), final_color_action: [FinalAction](#enum_renderingdevice_finalaction), initial_depth_action: [InitialAction](#enum_renderingdevice_initialaction), final_depth_action: [FinalAction](#enum_renderingdevice_finalaction), clear_color_values: [`PackedColorArray`](class_packedcolorarray.md) = PackedColorArray(), clear_depth: [`float`](class_float.md) = 1.0, clear_stencil: [`int`](class_int.md) = 0, region: [`Rect2`](class_rect2.md) = Rect2(0, 0, 0, 0) )                                                                                                                                                                                                                                                                                |
| [`int`](class_int.md)                                  | [`draw_list_begin_for_screen`](#class_renderingdevice_method_draw_list_begin_for_screen) ( screen: [`int`](class_int.md) = 0, clear_color: [`Color`](class_color.md) = Color(0, 0, 0, 1) )                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| [`PackedInt64Array`](class_packedint64array.md)        | [`draw_list_begin_split`](#class_renderingdevice_method_draw_list_begin_split) ( framebuffer: [`RID`](class_rid.md), splits: [`int`](class_int.md), initial_color_action: [InitialAction](#enum_renderingdevice_initialaction), final_color_action: [FinalAction](#enum_renderingdevice_finalaction), initial_depth_action: [InitialAction](#enum_renderingdevice_initialaction), final_depth_action: [FinalAction](#enum_renderingdevice_finalaction), clear_color_values: [`PackedColorArray`](class_packedcolorarray.md) = PackedColorArray(), clear_depth: [`float`](class_float.md) = 1.0, clear_stencil: [`int`](class_int.md) = 0, region: [`Rect2`](class_rect2.md) = Rect2(0, 0, 0, 0), storage_textures: [Array](class_array.md) [`RID`](class_rid.md) = [] )                                                                                                                                                               |
| `void`                                                 | [`draw_list_bind_index_array`](#class_renderingdevice_method_draw_list_bind_index_array) ( draw_list: [`int`](class_int.md), index_array: [`RID`](class_rid.md) )                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| `void`                                                 | [`draw_list_bind_render_pipeline`](#class_renderingdevice_method_draw_list_bind_render_pipeline) ( draw_list: [`int`](class_int.md), render_pipeline: [`RID`](class_rid.md) )                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| `void`                                                 | [`draw_list_bind_uniform_set`](#class_renderingdevice_method_draw_list_bind_uniform_set) ( draw_list: [`int`](class_int.md), uniform_set: [`RID`](class_rid.md), set_index: [`int`](class_int.md) )                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| `void`                                                 | [`draw_list_bind_vertex_array`](#class_renderingdevice_method_draw_list_bind_vertex_array) ( draw_list: [`int`](class_int.md), vertex_array: [`RID`](class_rid.md) )                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| `void`                                                 | [`draw_list_disable_scissor`](#class_renderingdevice_method_draw_list_disable_scissor) ( draw_list: [`int`](class_int.md) )                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| `void`                                                 | [`draw_list_draw`](#class_renderingdevice_method_draw_list_draw) ( draw_list: [`int`](class_int.md), use_indices: [`bool`](class_bool.md), instances: [`int`](class_int.md), procedural_vertex_count: [`int`](class_int.md) = 0 )                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| `void`                                                 | [`draw_list_enable_scissor`](#class_renderingdevice_method_draw_list_enable_scissor) ( draw_list: [`int`](class_int.md), rect: [`Rect2`](class_rect2.md) = Rect2(0, 0, 0, 0) )                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| `void`                                                 | [`draw_list_end`](#class_renderingdevice_method_draw_list_end) ( )                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| `void`                                                 | [`draw_list_set_blend_constants`](#class_renderingdevice_method_draw_list_set_blend_constants) ( draw_list: [`int`](class_int.md), color: [`Color`](class_color.md) )                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| `void`                                                 | [`draw_list_set_push_constant`](#class_renderingdevice_method_draw_list_set_push_constant) ( draw_list: [`int`](class_int.md), buffer: [`PackedByteArray`](class_packedbytearray.md), size_bytes: [`int`](class_int.md) )                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| [`int`](class_int.md)                                  | [`draw_list_switch_to_next_pass`](#class_renderingdevice_method_draw_list_switch_to_next_pass) ( )                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| [`PackedInt64Array`](class_packedint64array.md)        | [`draw_list_switch_to_next_pass_split`](#class_renderingdevice_method_draw_list_switch_to_next_pass_split) ( splits: [`int`](class_int.md) )                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| [`RID`](class_rid.md)                                  | [`framebuffer_create`](#class_renderingdevice_method_framebuffer_create) ( textures: [Array](class_array.md) [`RID`](class_rid.md), validate_with_format: [`int`](class_int.md) = -1, view_count: [`int`](class_int.md) = 1 )                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| [`RID`](class_rid.md)                                  | [`framebuffer_create_empty`](#class_renderingdevice_method_framebuffer_create_empty) ( size: [`Vector2i`](class_vector2i.md), samples: [TextureSamples](#enum_renderingdevice_texturesamples) = 0, validate_with_format: [`int`](class_int.md) = -1 )                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| [`RID`](class_rid.md)                                  | [`framebuffer_create_multipass`](#class_renderingdevice_method_framebuffer_create_multipass) ( textures: [Array](class_array.md) [`RID`](class_rid.md), passes: [Array](class_array.md) [`RDFramebufferPass`](class_rdframebufferpass.md), validate_with_format: [`int`](class_int.md) = -1, view_count: [`int`](class_int.md) = 1 )                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| [`int`](class_int.md)                                  | [`framebuffer_format_create`](#class_renderingdevice_method_framebuffer_format_create) ( attachments: [Array](class_array.md) [`RDAttachmentFormat`](class_rdattachmentformat.md), view_count: [`int`](class_int.md) = 1 )                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| [`int`](class_int.md)                                  | [`framebuffer_format_create_empty`](#class_renderingdevice_method_framebuffer_format_create_empty) ( samples: [TextureSamples](#enum_renderingdevice_texturesamples) = 0 )                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| [`int`](class_int.md)                                  | [`framebuffer_format_create_multipass`](#class_renderingdevice_method_framebuffer_format_create_multipass) ( attachments: [Array](class_array.md) [`RDAttachmentFormat`](class_rdattachmentformat.md), passes: [Array](class_array.md) [`RDFramebufferPass`](class_rdframebufferpass.md), view_count: [`int`](class_int.md) = 1 )                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| [TextureSamples](#enum_renderingdevice_texturesamples) | [`framebuffer_format_get_texture_samples`](#class_renderingdevice_method_framebuffer_format_get_texture_samples) ( format: [`int`](class_int.md), render_pass: [`int`](class_int.md) = 0 )                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| [`int`](class_int.md)                                  | [`framebuffer_get_format`](#class_renderingdevice_method_framebuffer_get_format) ( framebuffer: [`RID`](class_rid.md) )                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| [`bool`](class_bool.md)                                | [`framebuffer_is_valid`](#class_renderingdevice_method_framebuffer_is_valid) ( framebuffer: [`RID`](class_rid.md) ) const[^const]                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| `void`                                                 | [`free_rid`](#class_renderingdevice_method_free_rid) ( rid: [`RID`](class_rid.md) )                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| `void`                                                 | [`full_barrier`](#class_renderingdevice_method_full_barrier) ( )                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| [`int`](class_int.md)                                  | [`get_captured_timestamp_cpu_time`](#class_renderingdevice_method_get_captured_timestamp_cpu_time) ( index: [`int`](class_int.md) ) const[^const]                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| [`int`](class_int.md)                                  | [`get_captured_timestamp_gpu_time`](#class_renderingdevice_method_get_captured_timestamp_gpu_time) ( index: [`int`](class_int.md) ) const[^const]                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| [`String`](class_string.md)                            | [`get_captured_timestamp_name`](#class_renderingdevice_method_get_captured_timestamp_name) ( index: [`int`](class_int.md) ) const[^const]                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| [`int`](class_int.md)                                  | [`get_captured_timestamps_count`](#class_renderingdevice_method_get_captured_timestamps_count) ( ) const[^const]                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| [`int`](class_int.md)                                  | [`get_captured_timestamps_frame`](#class_renderingdevice_method_get_captured_timestamps_frame) ( ) const[^const]                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| [`String`](class_string.md)                            | [`get_device_name`](#class_renderingdevice_method_get_device_name) ( ) const[^const]                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| [`String`](class_string.md)                            | [`get_device_pipeline_cache_uuid`](#class_renderingdevice_method_get_device_pipeline_cache_uuid) ( ) const[^const]                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| [`String`](class_string.md)                            | [`get_device_vendor_name`](#class_renderingdevice_method_get_device_vendor_name) ( ) const[^const]                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| [`int`](class_int.md)                                  | [`get_driver_resource`](#class_renderingdevice_method_get_driver_resource) ( resource: [DriverResource](#enum_renderingdevice_driverresource), rid: [`RID`](class_rid.md), index: [`int`](class_int.md) )                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| [`int`](class_int.md)                                  | [`get_frame_delay`](#class_renderingdevice_method_get_frame_delay) ( ) const[^const]                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| [`int`](class_int.md)                                  | [`get_memory_usage`](#class_renderingdevice_method_get_memory_usage) ( type: [MemoryType](#enum_renderingdevice_memorytype) ) const[^const]                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| [`RID`](class_rid.md)                                  | [`index_array_create`](#class_renderingdevice_method_index_array_create) ( index_buffer: [`RID`](class_rid.md), index_offset: [`int`](class_int.md), index_count: [`int`](class_int.md) )                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| [`RID`](class_rid.md)                                  | [`index_buffer_create`](#class_renderingdevice_method_index_buffer_create) ( size_indices: [`int`](class_int.md), format: [IndexBufferFormat](#enum_renderingdevice_indexbufferformat), data: [`PackedByteArray`](class_packedbytearray.md) = PackedByteArray(), use_restart_indices: [`bool`](class_bool.md) = false )                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| [`int`](class_int.md)                                  | [`limit_get`](#class_renderingdevice_method_limit_get) ( limit: [Limit](#enum_renderingdevice_limit) ) const[^const]                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| [`RID`](class_rid.md)                                  | [`render_pipeline_create`](#class_renderingdevice_method_render_pipeline_create) ( shader: [`RID`](class_rid.md), framebuffer_format: [`int`](class_int.md), vertex_format: [`int`](class_int.md), primitive: [RenderPrimitive](#enum_renderingdevice_renderprimitive), rasterization_state: [`RDPipelineRasterizationState`](class_rdpipelinerasterizationstate.md), multisample_state: [`RDPipelineMultisampleState`](class_rdpipelinemultisamplestate.md), stencil_state: [`RDPipelineDepthStencilState`](class_rdpipelinedepthstencilstate.md), color_blend_state: [`RDPipelineColorBlendState`](class_rdpipelinecolorblendstate.md), dynamic_state_flags: [PipelineDynamicStateFlags](#enum_renderingdevice_pipelinedynamicstateflags) = 0, for_render_pass: [`int`](class_int.md) = 0, specialization_constants: [Array](class_array.md) [`RDPipelineSpecializationConstant`](class_rdpipelinespecializationconstant.md) = [] ) |
| [`bool`](class_bool.md)                                | [`render_pipeline_is_valid`](#class_renderingdevice_method_render_pipeline_is_valid) ( render_pipeline: [`RID`](class_rid.md) )                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| [`RID`](class_rid.md)                                  | [`sampler_create`](#class_renderingdevice_method_sampler_create) ( state: [`RDSamplerState`](class_rdsamplerstate.md) )                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| [`bool`](class_bool.md)                                | [`sampler_is_format_supported_for_filter`](#class_renderingdevice_method_sampler_is_format_supported_for_filter) ( format: [DataFormat](#enum_renderingdevice_dataformat), sampler_filter: [SamplerFilter](#enum_renderingdevice_samplerfilter) ) const[^const]                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| [`int`](class_int.md)                                  | [`screen_get_framebuffer_format`](#class_renderingdevice_method_screen_get_framebuffer_format) ( screen: [`int`](class_int.md) = 0 ) const[^const]                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| [`int`](class_int.md)                                  | [`screen_get_height`](#class_renderingdevice_method_screen_get_height) ( screen: [`int`](class_int.md) = 0 ) const[^const]                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| [`int`](class_int.md)                                  | [`screen_get_width`](#class_renderingdevice_method_screen_get_width) ( screen: [`int`](class_int.md) = 0 ) const[^const]                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| `void`                                                 | [`set_resource_name`](#class_renderingdevice_method_set_resource_name) ( id: [`RID`](class_rid.md), name: [`String`](class_string.md) )                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| [`PackedByteArray`](class_packedbytearray.md)          | [`shader_compile_binary_from_spirv`](#class_renderingdevice_method_shader_compile_binary_from_spirv) ( spirv_data: [`RDShaderSPIRV`](class_rdshaderspirv.md), name: [`String`](class_string.md) = "" )                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| [`RDShaderSPIRV`](class_rdshaderspirv.md)              | [`shader_compile_spirv_from_source`](#class_renderingdevice_method_shader_compile_spirv_from_source) ( shader_source: [`RDShaderSource`](class_rdshadersource.md), allow_cache: [`bool`](class_bool.md) = true )                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| [`RID`](class_rid.md)                                  | [`shader_create_from_bytecode`](#class_renderingdevice_method_shader_create_from_bytecode) ( binary_data: [`PackedByteArray`](class_packedbytearray.md), placeholder_rid: [`RID`](class_rid.md) = RID() )                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| [`RID`](class_rid.md)                                  | [`shader_create_from_spirv`](#class_renderingdevice_method_shader_create_from_spirv) ( spirv_data: [`RDShaderSPIRV`](class_rdshaderspirv.md), name: [`String`](class_string.md) = "" )                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| [`RID`](class_rid.md)                                  | [`shader_create_placeholder`](#class_renderingdevice_method_shader_create_placeholder) ( )                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| [`int`](class_int.md)                                  | [`shader_get_vertex_input_attribute_mask`](#class_renderingdevice_method_shader_get_vertex_input_attribute_mask) ( shader: [`RID`](class_rid.md) )                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| [`RID`](class_rid.md)                                  | [`storage_buffer_create`](#class_renderingdevice_method_storage_buffer_create) ( size_bytes: [`int`](class_int.md), data: [`PackedByteArray`](class_packedbytearray.md) = PackedByteArray(), usage: [StorageBufferUsage](#enum_renderingdevice_storagebufferusage) = 0 )                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| `void`                                                 | [`submit`](#class_renderingdevice_method_submit) ( )                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| `void`                                                 | [`sync`](#class_renderingdevice_method_sync) ( )                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| [`RID`](class_rid.md)                                  | [`texture_buffer_create`](#class_renderingdevice_method_texture_buffer_create) ( size_bytes: [`int`](class_int.md), format: [DataFormat](#enum_renderingdevice_dataformat), data: [`PackedByteArray`](class_packedbytearray.md) = PackedByteArray() )                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| [Error](#enum_@globalscope_error)                      | [`texture_clear`](#class_renderingdevice_method_texture_clear) ( texture: [`RID`](class_rid.md), color: [`Color`](class_color.md), base_mipmap: [`int`](class_int.md), mipmap_count: [`int`](class_int.md), base_layer: [`int`](class_int.md), layer_count: [`int`](class_int.md) )                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| [Error](#enum_@globalscope_error)                      | [`texture_copy`](#class_renderingdevice_method_texture_copy) ( from_texture: [`RID`](class_rid.md), to_texture: [`RID`](class_rid.md), from_pos: [`Vector3`](class_vector3.md), to_pos: [`Vector3`](class_vector3.md), size: [`Vector3`](class_vector3.md), src_mipmap: [`int`](class_int.md), dst_mipmap: [`int`](class_int.md), src_layer: [`int`](class_int.md), dst_layer: [`int`](class_int.md) )                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| [`RID`](class_rid.md)                                  | [`texture_create`](#class_renderingdevice_method_texture_create) ( format: [`RDTextureFormat`](class_rdtextureformat.md), view: [`RDTextureView`](class_rdtextureview.md), data: [Array](class_array.md) [`PackedByteArray`](class_packedbytearray.md) = [] )                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| [`RID`](class_rid.md)                                  | [`texture_create_from_extension`](#class_renderingdevice_method_texture_create_from_extension) ( type: [TextureType](#enum_renderingdevice_texturetype), format: [DataFormat](#enum_renderingdevice_dataformat), samples: [TextureSamples](#enum_renderingdevice_texturesamples), usage_flags: [TextureUsageBits](#enum_renderingdevice_textureusagebits), image: [`int`](class_int.md), width: [`int`](class_int.md), height: [`int`](class_int.md), depth: [`int`](class_int.md), layers: [`int`](class_int.md) )                                                                                                                                                                                                                                                                                                                                                                                                                   |
| [`RID`](class_rid.md)                                  | [`texture_create_shared`](#class_renderingdevice_method_texture_create_shared) ( view: [`RDTextureView`](class_rdtextureview.md), with_texture: [`RID`](class_rid.md) )                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| [`RID`](class_rid.md)                                  | [`texture_create_shared_from_slice`](#class_renderingdevice_method_texture_create_shared_from_slice) ( view: [`RDTextureView`](class_rdtextureview.md), with_texture: [`RID`](class_rid.md), layer: [`int`](class_int.md), mipmap: [`int`](class_int.md), mipmaps: [`int`](class_int.md) = 1, slice_type: [TextureSliceType](#enum_renderingdevice_textureslicetype) = 0 )                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| [`PackedByteArray`](class_packedbytearray.md)          | [`texture_get_data`](#class_renderingdevice_method_texture_get_data) ( texture: [`RID`](class_rid.md), layer: [`int`](class_int.md) )                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| [`RDTextureFormat`](class_rdtextureformat.md)          | [`texture_get_format`](#class_renderingdevice_method_texture_get_format) ( texture: [`RID`](class_rid.md) )                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| [`int`](class_int.md)                                  | [`texture_get_native_handle`](#class_renderingdevice_method_texture_get_native_handle) ( texture: [`RID`](class_rid.md) )                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| [`bool`](class_bool.md)                                | [`texture_is_format_supported_for_usage`](#class_renderingdevice_method_texture_is_format_supported_for_usage) ( format: [DataFormat](#enum_renderingdevice_dataformat), usage_flags: [TextureUsageBits](#enum_renderingdevice_textureusagebits) ) const[^const]                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| [`bool`](class_bool.md)                                | [`texture_is_shared`](#class_renderingdevice_method_texture_is_shared) ( texture: [`RID`](class_rid.md) )                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| [`bool`](class_bool.md)                                | [`texture_is_valid`](#class_renderingdevice_method_texture_is_valid) ( texture: [`RID`](class_rid.md) )                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| [Error](#enum_@globalscope_error)                      | [`texture_resolve_multisample`](#class_renderingdevice_method_texture_resolve_multisample) ( from_texture: [`RID`](class_rid.md), to_texture: [`RID`](class_rid.md) )                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| [Error](#enum_@globalscope_error)                      | [`texture_update`](#class_renderingdevice_method_texture_update) ( texture: [`RID`](class_rid.md), layer: [`int`](class_int.md), data: [`PackedByteArray`](class_packedbytearray.md) )                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| [`RID`](class_rid.md)                                  | [`uniform_buffer_create`](#class_renderingdevice_method_uniform_buffer_create) ( size_bytes: [`int`](class_int.md), data: [`PackedByteArray`](class_packedbytearray.md) = PackedByteArray() )                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| [`RID`](class_rid.md)                                  | [`uniform_set_create`](#class_renderingdevice_method_uniform_set_create) ( uniforms: [Array](class_array.md) [`RDUniform`](class_rduniform.md), shader: [`RID`](class_rid.md), shader_set: [`int`](class_int.md) )                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| [`bool`](class_bool.md)                                | [`uniform_set_is_valid`](#class_renderingdevice_method_uniform_set_is_valid) ( uniform_set: [`RID`](class_rid.md) )                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| [`RID`](class_rid.md)                                  | [`vertex_array_create`](#class_renderingdevice_method_vertex_array_create) ( vertex_count: [`int`](class_int.md), vertex_format: [`int`](class_int.md), src_buffers: [Array](class_array.md) [`RID`](class_rid.md), offsets: [`PackedInt64Array`](class_packedint64array.md) = PackedInt64Array() )                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| [`RID`](class_rid.md)                                  | [`vertex_buffer_create`](#class_renderingdevice_method_vertex_buffer_create) ( size_bytes: [`int`](class_int.md), data: [`PackedByteArray`](class_packedbytearray.md) = PackedByteArray(), use_as_storage: [`bool`](class_bool.md) = false )                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| [`int`](class_int.md)                                  | [`vertex_format_create`](#class_renderingdevice_method_vertex_format_create) ( vertex_descriptions: [Array](class_array.md) [`RDVertexAttribute`](class_rdvertexattribute.md) )                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |

<!-- rst-class:: classref-section-separator -->

---

## 枚举

<div id="_class_enum_renderingdevice_devicetype"></div>

enum **DeviceType**: <div id="enum_renderingdevice_devicetype"></div>

<div id="_class_renderingdevice_constant_device_type_other"></div>

[DeviceType](#enum_renderingdevice_devicetype) **DEVICE_TYPE_OTHER** = ``0``

Rendering device type does not match any of the other enum values or is unknown.

<div id="_class_renderingdevice_constant_device_type_integrated_gpu"></div>

[DeviceType](#enum_renderingdevice_devicetype) **DEVICE_TYPE_INTEGRATED_GPU** = ``1``

Rendering device is an integrated GPU, which is typically *(but not always)* slower than dedicated GPUs ([`DEVICE_TYPE_DISCRETE_GPU`](#class_renderingdevice_constant_device_type_discrete_gpu)). On Android and iOS, the rendering device type is always considered to be [`DEVICE_TYPE_INTEGRATED_GPU`](#class_renderingdevice_constant_device_type_integrated_gpu).

<div id="_class_renderingdevice_constant_device_type_discrete_gpu"></div>

[DeviceType](#enum_renderingdevice_devicetype) **DEVICE_TYPE_DISCRETE_GPU** = ``2``

Rendering device is a dedicated GPU, which is typically *(but not always)* faster than integrated GPUs ([`DEVICE_TYPE_INTEGRATED_GPU`](#class_renderingdevice_constant_device_type_integrated_gpu)).

<div id="_class_renderingdevice_constant_device_type_virtual_gpu"></div>

[DeviceType](#enum_renderingdevice_devicetype) **DEVICE_TYPE_VIRTUAL_GPU** = ``3``

Rendering device is an emulated GPU in a virtual environment. This is typically much slower than the host GPU, which means the expected performance level on a dedicated GPU will be roughly equivalent to [`DEVICE_TYPE_INTEGRATED_GPU`](#class_renderingdevice_constant_device_type_integrated_gpu). Virtual machine GPU passthrough (such as VFIO) will not report the device type as [`DEVICE_TYPE_VIRTUAL_GPU`](#class_renderingdevice_constant_device_type_virtual_gpu). Instead, the host GPU's device type will be reported as if the GPU was not emulated.

<div id="_class_renderingdevice_constant_device_type_cpu"></div>

[DeviceType](#enum_renderingdevice_devicetype) **DEVICE_TYPE_CPU** = ``4``

Rendering device is provided by software emulation (such as Lavapipe or [*SwiftShader*](https://github.com/google/swiftshader)). This is the slowest kind of rendering device available; it's typically much slower than [`DEVICE_TYPE_INTEGRATED_GPU`](#class_renderingdevice_constant_device_type_integrated_gpu).

<div id="_class_renderingdevice_constant_device_type_max"></div>

[DeviceType](#enum_renderingdevice_devicetype) **DEVICE_TYPE_MAX** = ``5``

Represents the size of the [DeviceType](#enum_renderingdevice_devicetype) enum.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_enum_renderingdevice_driverresource"></div>

enum **DriverResource**: <div id="enum_renderingdevice_driverresource"></div>

<div id="_class_renderingdevice_constant_driver_resource_logical_device"></div>

[DriverResource](#enum_renderingdevice_driverresource) **DRIVER_RESOURCE_LOGICAL_DEVICE** = ``0``

Specific device object based on a physical device.

- Vulkan: Vulkan device driver resource (`VkDevice`). (`rid` argument doesn't apply.)

<div id="_class_renderingdevice_constant_driver_resource_physical_device"></div>

[DriverResource](#enum_renderingdevice_driverresource) **DRIVER_RESOURCE_PHYSICAL_DEVICE** = ``1``

Physical device the specific logical device is based on.

- Vulkan: `VkDevice`. (`rid` argument doesn't apply.)

<div id="_class_renderingdevice_constant_driver_resource_topmost_object"></div>

[DriverResource](#enum_renderingdevice_driverresource) **DRIVER_RESOURCE_TOPMOST_OBJECT** = ``2``

Top-most graphics API entry object.

- Vulkan: `VkInstance`. (`rid` argument doesn't apply.)

<div id="_class_renderingdevice_constant_driver_resource_command_queue"></div>

[DriverResource](#enum_renderingdevice_driverresource) **DRIVER_RESOURCE_COMMAND_QUEUE** = ``3``

The main graphics-compute command queue.

- Vulkan: `VkQueue`. (`rid` argument doesn't apply.)

<div id="_class_renderingdevice_constant_driver_resource_queue_family"></div>

[DriverResource](#enum_renderingdevice_driverresource) **DRIVER_RESOURCE_QUEUE_FAMILY** = ``4``

The specific family the main queue belongs to.

- Vulkan: the queue family index, an `uint32_t`. (`rid` argument doesn't apply.)

<div id="_class_renderingdevice_constant_driver_resource_texture"></div>

[DriverResource](#enum_renderingdevice_driverresource) **DRIVER_RESOURCE_TEXTURE** = ``5``

- Vulkan: `VkImage`.

<div id="_class_renderingdevice_constant_driver_resource_texture_view"></div>

[DriverResource](#enum_renderingdevice_driverresource) **DRIVER_RESOURCE_TEXTURE_VIEW** = ``6``

The view of an owned or shared texture.

- Vulkan: `VkImageView`.

<div id="_class_renderingdevice_constant_driver_resource_texture_data_format"></div>

[DriverResource](#enum_renderingdevice_driverresource) **DRIVER_RESOURCE_TEXTURE_DATA_FORMAT** = ``7``

The native id of the data format of the texture.

- Vulkan: `VkFormat`.

<div id="_class_renderingdevice_constant_driver_resource_sampler"></div>

[DriverResource](#enum_renderingdevice_driverresource) **DRIVER_RESOURCE_SAMPLER** = ``8``

- Vulkan: `VkSampler`.

<div id="_class_renderingdevice_constant_driver_resource_uniform_set"></div>

[DriverResource](#enum_renderingdevice_driverresource) **DRIVER_RESOURCE_UNIFORM_SET** = ``9``

- Vulkan: `VkDescriptorSet`.

<div id="_class_renderingdevice_constant_driver_resource_buffer"></div>

[DriverResource](#enum_renderingdevice_driverresource) **DRIVER_RESOURCE_BUFFER** = ``10``

Buffer of any kind of (storage, vertex, etc.).

- Vulkan: `VkBuffer`.

<div id="_class_renderingdevice_constant_driver_resource_compute_pipeline"></div>

[DriverResource](#enum_renderingdevice_driverresource) **DRIVER_RESOURCE_COMPUTE_PIPELINE** = ``11``

- Vulkan: `VkPipeline`.

<div id="_class_renderingdevice_constant_driver_resource_render_pipeline"></div>

[DriverResource](#enum_renderingdevice_driverresource) **DRIVER_RESOURCE_RENDER_PIPELINE** = ``12``

- Vulkan: `VkPipeline`.

<div id="_class_renderingdevice_constant_driver_resource_vulkan_device"></div>

[DriverResource](#enum_renderingdevice_driverresource) **DRIVER_RESOURCE_VULKAN_DEVICE** = ``0``

**已弃用：** Use [`DRIVER_RESOURCE_LOGICAL_DEVICE`](#class_renderingdevice_constant_driver_resource_logical_device) instead.



<div id="_class_renderingdevice_constant_driver_resource_vulkan_physical_device"></div>

[DriverResource](#enum_renderingdevice_driverresource) **DRIVER_RESOURCE_VULKAN_PHYSICAL_DEVICE** = ``1``

**已弃用：** Use [`DRIVER_RESOURCE_PHYSICAL_DEVICE`](#class_renderingdevice_constant_driver_resource_physical_device) instead.



<div id="_class_renderingdevice_constant_driver_resource_vulkan_instance"></div>

[DriverResource](#enum_renderingdevice_driverresource) **DRIVER_RESOURCE_VULKAN_INSTANCE** = ``2``

**已弃用：** Use [`DRIVER_RESOURCE_TOPMOST_OBJECT`](#class_renderingdevice_constant_driver_resource_topmost_object) instead.



<div id="_class_renderingdevice_constant_driver_resource_vulkan_queue"></div>

[DriverResource](#enum_renderingdevice_driverresource) **DRIVER_RESOURCE_VULKAN_QUEUE** = ``3``

**已弃用：** Use [`DRIVER_RESOURCE_COMMAND_QUEUE`](#class_renderingdevice_constant_driver_resource_command_queue) instead.



<div id="_class_renderingdevice_constant_driver_resource_vulkan_queue_family_index"></div>

[DriverResource](#enum_renderingdevice_driverresource) **DRIVER_RESOURCE_VULKAN_QUEUE_FAMILY_INDEX** = ``4``

**已弃用：** Use [`DRIVER_RESOURCE_QUEUE_FAMILY`](#class_renderingdevice_constant_driver_resource_queue_family) instead.



<div id="_class_renderingdevice_constant_driver_resource_vulkan_image"></div>

[DriverResource](#enum_renderingdevice_driverresource) **DRIVER_RESOURCE_VULKAN_IMAGE** = ``5``

**已弃用：** Use [`DRIVER_RESOURCE_TEXTURE`](#class_renderingdevice_constant_driver_resource_texture) instead.



<div id="_class_renderingdevice_constant_driver_resource_vulkan_image_view"></div>

[DriverResource](#enum_renderingdevice_driverresource) **DRIVER_RESOURCE_VULKAN_IMAGE_VIEW** = ``6``

**已弃用：** Use [`DRIVER_RESOURCE_TEXTURE_VIEW`](#class_renderingdevice_constant_driver_resource_texture_view) instead.



<div id="_class_renderingdevice_constant_driver_resource_vulkan_image_native_texture_format"></div>

[DriverResource](#enum_renderingdevice_driverresource) **DRIVER_RESOURCE_VULKAN_IMAGE_NATIVE_TEXTURE_FORMAT** = ``7``

**已弃用：** Use [`DRIVER_RESOURCE_TEXTURE_DATA_FORMAT`](#class_renderingdevice_constant_driver_resource_texture_data_format) instead.



<div id="_class_renderingdevice_constant_driver_resource_vulkan_sampler"></div>

[DriverResource](#enum_renderingdevice_driverresource) **DRIVER_RESOURCE_VULKAN_SAMPLER** = ``8``

**已弃用：** Use [`DRIVER_RESOURCE_SAMPLER`](#class_renderingdevice_constant_driver_resource_sampler) instead.



<div id="_class_renderingdevice_constant_driver_resource_vulkan_descriptor_set"></div>

[DriverResource](#enum_renderingdevice_driverresource) **DRIVER_RESOURCE_VULKAN_DESCRIPTOR_SET** = ``9``

**已弃用：** Use [`DRIVER_RESOURCE_UNIFORM_SET`](#class_renderingdevice_constant_driver_resource_uniform_set) instead.



<div id="_class_renderingdevice_constant_driver_resource_vulkan_buffer"></div>

[DriverResource](#enum_renderingdevice_driverresource) **DRIVER_RESOURCE_VULKAN_BUFFER** = ``10``

**已弃用：** Use [`DRIVER_RESOURCE_BUFFER`](#class_renderingdevice_constant_driver_resource_buffer) instead.



<div id="_class_renderingdevice_constant_driver_resource_vulkan_compute_pipeline"></div>

[DriverResource](#enum_renderingdevice_driverresource) **DRIVER_RESOURCE_VULKAN_COMPUTE_PIPELINE** = ``11``

**已弃用：** Use [`DRIVER_RESOURCE_COMPUTE_PIPELINE`](#class_renderingdevice_constant_driver_resource_compute_pipeline) instead.



<div id="_class_renderingdevice_constant_driver_resource_vulkan_render_pipeline"></div>

[DriverResource](#enum_renderingdevice_driverresource) **DRIVER_RESOURCE_VULKAN_RENDER_PIPELINE** = ``12``

**已弃用：** Use [`DRIVER_RESOURCE_RENDER_PIPELINE`](#class_renderingdevice_constant_driver_resource_render_pipeline) instead.



<!-- rst-class:: classref-item-separator -->

---

<div id="_class_enum_renderingdevice_dataformat"></div>

enum **DataFormat**: <div id="enum_renderingdevice_dataformat"></div>

<div id="_class_renderingdevice_constant_data_format_r4g4_unorm_pack8"></div>

[DataFormat](#enum_renderingdevice_dataformat) **DATA_FORMAT_R4G4_UNORM_PACK8** = ``0``

4-bit-per-channel red/green channel data format, packed into 8 bits. Values are in the `[0.0, 1.0]` range.

 **Note:** More information on all data formats can be found on the [*Identification of formats*](https://registry.khronos.org/vulkan/specs/1.1/html/vkspec.html#_identification_of_formats) section of the Vulkan specification, as well as the [*VkFormat*](https://registry.khronos.org/vulkan/specs/1.3-extensions/man/html/VkFormat.html) enum.

<div id="_class_renderingdevice_constant_data_format_r4g4b4a4_unorm_pack16"></div>

[DataFormat](#enum_renderingdevice_dataformat) **DATA_FORMAT_R4G4B4A4_UNORM_PACK16** = ``1``

4-bit-per-channel red/green/blue/alpha channel data format, packed into 16 bits. Values are in the `[0.0, 1.0]` range.

<div id="_class_renderingdevice_constant_data_format_b4g4r4a4_unorm_pack16"></div>

[DataFormat](#enum_renderingdevice_dataformat) **DATA_FORMAT_B4G4R4A4_UNORM_PACK16** = ``2``

4-bit-per-channel blue/green/red/alpha channel data format, packed into 16 bits. Values are in the `[0.0, 1.0]` range.

<div id="_class_renderingdevice_constant_data_format_r5g6b5_unorm_pack16"></div>

[DataFormat](#enum_renderingdevice_dataformat) **DATA_FORMAT_R5G6B5_UNORM_PACK16** = ``3``

Red/green/blue channel data format with 5 bits of red, 6 bits of green and 5 bits of blue, packed into 16 bits. Values are in the `[0.0, 1.0]` range.

<div id="_class_renderingdevice_constant_data_format_b5g6r5_unorm_pack16"></div>

[DataFormat](#enum_renderingdevice_dataformat) **DATA_FORMAT_B5G6R5_UNORM_PACK16** = ``4``

Blue/green/red channel data format with 5 bits of blue, 6 bits of green and 5 bits of red, packed into 16 bits. Values are in the `[0.0, 1.0]` range.

<div id="_class_renderingdevice_constant_data_format_r5g5b5a1_unorm_pack16"></div>

[DataFormat](#enum_renderingdevice_dataformat) **DATA_FORMAT_R5G5B5A1_UNORM_PACK16** = ``5``

Red/green/blue/alpha channel data format with 5 bits of red, 6 bits of green, 5 bits of blue and 1 bit of alpha, packed into 16 bits. Values are in the `[0.0, 1.0]` range.

<div id="_class_renderingdevice_constant_data_format_b5g5r5a1_unorm_pack16"></div>

[DataFormat](#enum_renderingdevice_dataformat) **DATA_FORMAT_B5G5R5A1_UNORM_PACK16** = ``6``

Blue/green/red/alpha channel data format with 5 bits of blue, 6 bits of green, 5 bits of red and 1 bit of alpha, packed into 16 bits. Values are in the `[0.0, 1.0]` range.

<div id="_class_renderingdevice_constant_data_format_a1r5g5b5_unorm_pack16"></div>

[DataFormat](#enum_renderingdevice_dataformat) **DATA_FORMAT_A1R5G5B5_UNORM_PACK16** = ``7``

Alpha/red/green/blue channel data format with 1 bit of alpha, 5 bits of red, 6 bits of green and 5 bits of blue, packed into 16 bits. Values are in the `[0.0, 1.0]` range.

<div id="_class_renderingdevice_constant_data_format_r8_unorm"></div>

[DataFormat](#enum_renderingdevice_dataformat) **DATA_FORMAT_R8_UNORM** = ``8``

8-bit-per-channel unsigned floating-point red channel data format with normalized value. Values are in the `[0.0, 1.0]` range.

<div id="_class_renderingdevice_constant_data_format_r8_snorm"></div>

[DataFormat](#enum_renderingdevice_dataformat) **DATA_FORMAT_R8_SNORM** = ``9``

8-bit-per-channel signed floating-point red channel data format with normalized value. Values are in the `[-1.0, 1.0]` range.

<div id="_class_renderingdevice_constant_data_format_r8_uscaled"></div>

[DataFormat](#enum_renderingdevice_dataformat) **DATA_FORMAT_R8_USCALED** = ``10``

8-bit-per-channel unsigned floating-point red channel data format with scaled value (value is converted from integer to float). Values are in the `[0.0, 255.0]` range.

<div id="_class_renderingdevice_constant_data_format_r8_sscaled"></div>

[DataFormat](#enum_renderingdevice_dataformat) **DATA_FORMAT_R8_SSCALED** = ``11``

8-bit-per-channel signed floating-point red channel data format with scaled value (value is converted from integer to float). Values are in the `[-127.0, 127.0]` range.

<div id="_class_renderingdevice_constant_data_format_r8_uint"></div>

[DataFormat](#enum_renderingdevice_dataformat) **DATA_FORMAT_R8_UINT** = ``12``

8-bit-per-channel unsigned integer red channel data format. Values are in the `[0, 255]` range.

<div id="_class_renderingdevice_constant_data_format_r8_sint"></div>

[DataFormat](#enum_renderingdevice_dataformat) **DATA_FORMAT_R8_SINT** = ``13``

8-bit-per-channel signed integer red channel data format. Values are in the `[-127, 127]` range.

<div id="_class_renderingdevice_constant_data_format_r8_srgb"></div>

[DataFormat](#enum_renderingdevice_dataformat) **DATA_FORMAT_R8_SRGB** = ``14``

8-bit-per-channel unsigned floating-point red channel data format with normalized value and non-linear sRGB encoding. Values are in the `[0.0, 1.0]` range.

<div id="_class_renderingdevice_constant_data_format_r8g8_unorm"></div>

[DataFormat](#enum_renderingdevice_dataformat) **DATA_FORMAT_R8G8_UNORM** = ``15``

8-bit-per-channel unsigned floating-point red/green channel data format with normalized value. Values are in the `[0.0, 1.0]` range.

<div id="_class_renderingdevice_constant_data_format_r8g8_snorm"></div>

[DataFormat](#enum_renderingdevice_dataformat) **DATA_FORMAT_R8G8_SNORM** = ``16``

8-bit-per-channel signed floating-point red/green channel data format with normalized value. Values are in the `[-1.0, 1.0]` range.

<div id="_class_renderingdevice_constant_data_format_r8g8_uscaled"></div>

[DataFormat](#enum_renderingdevice_dataformat) **DATA_FORMAT_R8G8_USCALED** = ``17``

8-bit-per-channel unsigned floating-point red/green channel data format with scaled value (value is converted from integer to float). Values are in the `[0.0, 255.0]` range.

<div id="_class_renderingdevice_constant_data_format_r8g8_sscaled"></div>

[DataFormat](#enum_renderingdevice_dataformat) **DATA_FORMAT_R8G8_SSCALED** = ``18``

8-bit-per-channel signed floating-point red/green channel data format with scaled value (value is converted from integer to float). Values are in the `[-127.0, 127.0]` range.

<div id="_class_renderingdevice_constant_data_format_r8g8_uint"></div>

[DataFormat](#enum_renderingdevice_dataformat) **DATA_FORMAT_R8G8_UINT** = ``19``

8-bit-per-channel unsigned integer red/green channel data format. Values are in the `[0, 255]` range.

<div id="_class_renderingdevice_constant_data_format_r8g8_sint"></div>

[DataFormat](#enum_renderingdevice_dataformat) **DATA_FORMAT_R8G8_SINT** = ``20``

8-bit-per-channel signed integer red/green channel data format. Values are in the `[-127, 127]` range.

<div id="_class_renderingdevice_constant_data_format_r8g8_srgb"></div>

[DataFormat](#enum_renderingdevice_dataformat) **DATA_FORMAT_R8G8_SRGB** = ``21``

8-bit-per-channel unsigned floating-point red/green channel data format with normalized value and non-linear sRGB encoding. Values are in the `[0.0, 1.0]` range.

<div id="_class_renderingdevice_constant_data_format_r8g8b8_unorm"></div>

[DataFormat](#enum_renderingdevice_dataformat) **DATA_FORMAT_R8G8B8_UNORM** = ``22``

8-bit-per-channel unsigned floating-point red/green/blue channel data format with normalized value. Values are in the `[0.0, 1.0]` range.

<div id="_class_renderingdevice_constant_data_format_r8g8b8_snorm"></div>

[DataFormat](#enum_renderingdevice_dataformat) **DATA_FORMAT_R8G8B8_SNORM** = ``23``

8-bit-per-channel signed floating-point red/green/blue channel data format with normalized value. Values are in the `[-1.0, 1.0]` range.

<div id="_class_renderingdevice_constant_data_format_r8g8b8_uscaled"></div>

[DataFormat](#enum_renderingdevice_dataformat) **DATA_FORMAT_R8G8B8_USCALED** = ``24``

8-bit-per-channel unsigned floating-point red/green/blue channel data format with scaled value (value is converted from integer to float). Values are in the `[0.0, 255.0]` range.

<div id="_class_renderingdevice_constant_data_format_r8g8b8_sscaled"></div>

[DataFormat](#enum_renderingdevice_dataformat) **DATA_FORMAT_R8G8B8_SSCALED** = ``25``

8-bit-per-channel signed floating-point red/green/blue channel data format with scaled value (value is converted from integer to float). Values are in the `[-127.0, 127.0]` range.

<div id="_class_renderingdevice_constant_data_format_r8g8b8_uint"></div>

[DataFormat](#enum_renderingdevice_dataformat) **DATA_FORMAT_R8G8B8_UINT** = ``26``

8-bit-per-channel unsigned integer red/green/blue channel data format. Values are in the `[0, 255]` range.

<div id="_class_renderingdevice_constant_data_format_r8g8b8_sint"></div>

[DataFormat](#enum_renderingdevice_dataformat) **DATA_FORMAT_R8G8B8_SINT** = ``27``

8-bit-per-channel signed integer red/green/blue channel data format. Values are in the `[-127, 127]` range.

<div id="_class_renderingdevice_constant_data_format_r8g8b8_srgb"></div>

[DataFormat](#enum_renderingdevice_dataformat) **DATA_FORMAT_R8G8B8_SRGB** = ``28``

8-bit-per-channel unsigned floating-point red/green/blue/blue channel data format with normalized value and non-linear sRGB encoding. Values are in the `[0.0, 1.0]` range.

<div id="_class_renderingdevice_constant_data_format_b8g8r8_unorm"></div>

[DataFormat](#enum_renderingdevice_dataformat) **DATA_FORMAT_B8G8R8_UNORM** = ``29``

8-bit-per-channel unsigned floating-point blue/green/red channel data format with normalized value. Values are in the `[0.0, 1.0]` range.

<div id="_class_renderingdevice_constant_data_format_b8g8r8_snorm"></div>

[DataFormat](#enum_renderingdevice_dataformat) **DATA_FORMAT_B8G8R8_SNORM** = ``30``

8-bit-per-channel signed floating-point blue/green/red channel data format with normalized value. Values are in the `[-1.0, 1.0]` range.

<div id="_class_renderingdevice_constant_data_format_b8g8r8_uscaled"></div>

[DataFormat](#enum_renderingdevice_dataformat) **DATA_FORMAT_B8G8R8_USCALED** = ``31``

8-bit-per-channel unsigned floating-point blue/green/red channel data format with scaled value (value is converted from integer to float). Values are in the `[0.0, 255.0]` range.

<div id="_class_renderingdevice_constant_data_format_b8g8r8_sscaled"></div>

[DataFormat](#enum_renderingdevice_dataformat) **DATA_FORMAT_B8G8R8_SSCALED** = ``32``

8-bit-per-channel signed floating-point blue/green/red channel data format with scaled value (value is converted from integer to float). Values are in the `[-127.0, 127.0]` range.

<div id="_class_renderingdevice_constant_data_format_b8g8r8_uint"></div>

[DataFormat](#enum_renderingdevice_dataformat) **DATA_FORMAT_B8G8R8_UINT** = ``33``

8-bit-per-channel unsigned integer blue/green/red channel data format. Values are in the `[0, 255]` range.

<div id="_class_renderingdevice_constant_data_format_b8g8r8_sint"></div>

[DataFormat](#enum_renderingdevice_dataformat) **DATA_FORMAT_B8G8R8_SINT** = ``34``

8-bit-per-channel signed integer blue/green/red channel data format. Values are in the `[-127, 127]` range.

<div id="_class_renderingdevice_constant_data_format_b8g8r8_srgb"></div>

[DataFormat](#enum_renderingdevice_dataformat) **DATA_FORMAT_B8G8R8_SRGB** = ``35``

8-bit-per-channel unsigned floating-point blue/green/red data format with normalized value and non-linear sRGB encoding. Values are in the `[0.0, 1.0]` range.

<div id="_class_renderingdevice_constant_data_format_r8g8b8a8_unorm"></div>

[DataFormat](#enum_renderingdevice_dataformat) **DATA_FORMAT_R8G8B8A8_UNORM** = ``36``

8-bit-per-channel unsigned floating-point red/green/blue/alpha channel data format with normalized value. Values are in the `[0.0, 1.0]` range.

<div id="_class_renderingdevice_constant_data_format_r8g8b8a8_snorm"></div>

[DataFormat](#enum_renderingdevice_dataformat) **DATA_FORMAT_R8G8B8A8_SNORM** = ``37``

8-bit-per-channel signed floating-point red/green/blue/alpha channel data format with normalized value. Values are in the `[-1.0, 1.0]` range.

<div id="_class_renderingdevice_constant_data_format_r8g8b8a8_uscaled"></div>

[DataFormat](#enum_renderingdevice_dataformat) **DATA_FORMAT_R8G8B8A8_USCALED** = ``38``

8-bit-per-channel unsigned floating-point red/green/blue/alpha channel data format with scaled value (value is converted from integer to float). Values are in the `[0.0, 255.0]` range.

<div id="_class_renderingdevice_constant_data_format_r8g8b8a8_sscaled"></div>

[DataFormat](#enum_renderingdevice_dataformat) **DATA_FORMAT_R8G8B8A8_SSCALED** = ``39``

8-bit-per-channel signed floating-point red/green/blue/alpha channel data format with scaled value (value is converted from integer to float). Values are in the `[-127.0, 127.0]` range.

<div id="_class_renderingdevice_constant_data_format_r8g8b8a8_uint"></div>

[DataFormat](#enum_renderingdevice_dataformat) **DATA_FORMAT_R8G8B8A8_UINT** = ``40``

8-bit-per-channel unsigned integer red/green/blue/alpha channel data format. Values are in the `[0, 255]` range.

<div id="_class_renderingdevice_constant_data_format_r8g8b8a8_sint"></div>

[DataFormat](#enum_renderingdevice_dataformat) **DATA_FORMAT_R8G8B8A8_SINT** = ``41``

8-bit-per-channel signed integer red/green/blue/alpha channel data format. Values are in the `[-127, 127]` range.

<div id="_class_renderingdevice_constant_data_format_r8g8b8a8_srgb"></div>

[DataFormat](#enum_renderingdevice_dataformat) **DATA_FORMAT_R8G8B8A8_SRGB** = ``42``

8-bit-per-channel unsigned floating-point red/green/blue/alpha channel data format with normalized value and non-linear sRGB encoding. Values are in the `[0.0, 1.0]` range.

<div id="_class_renderingdevice_constant_data_format_b8g8r8a8_unorm"></div>

[DataFormat](#enum_renderingdevice_dataformat) **DATA_FORMAT_B8G8R8A8_UNORM** = ``43``

8-bit-per-channel unsigned floating-point blue/green/red/alpha channel data format with normalized value. Values are in the `[0.0, 1.0]` range.

<div id="_class_renderingdevice_constant_data_format_b8g8r8a8_snorm"></div>

[DataFormat](#enum_renderingdevice_dataformat) **DATA_FORMAT_B8G8R8A8_SNORM** = ``44``

8-bit-per-channel signed floating-point blue/green/red/alpha channel data format with normalized value. Values are in the `[-1.0, 1.0]` range.

<div id="_class_renderingdevice_constant_data_format_b8g8r8a8_uscaled"></div>

[DataFormat](#enum_renderingdevice_dataformat) **DATA_FORMAT_B8G8R8A8_USCALED** = ``45``

8-bit-per-channel unsigned floating-point blue/green/red/alpha channel data format with scaled value (value is converted from integer to float). Values are in the `[0.0, 255.0]` range.

<div id="_class_renderingdevice_constant_data_format_b8g8r8a8_sscaled"></div>

[DataFormat](#enum_renderingdevice_dataformat) **DATA_FORMAT_B8G8R8A8_SSCALED** = ``46``

8-bit-per-channel signed floating-point blue/green/red/alpha channel data format with scaled value (value is converted from integer to float). Values are in the `[-127.0, 127.0]` range.

<div id="_class_renderingdevice_constant_data_format_b8g8r8a8_uint"></div>

[DataFormat](#enum_renderingdevice_dataformat) **DATA_FORMAT_B8G8R8A8_UINT** = ``47``

8-bit-per-channel unsigned integer blue/green/red/alpha channel data format. Values are in the `[0, 255]` range.

<div id="_class_renderingdevice_constant_data_format_b8g8r8a8_sint"></div>

[DataFormat](#enum_renderingdevice_dataformat) **DATA_FORMAT_B8G8R8A8_SINT** = ``48``

8-bit-per-channel signed integer blue/green/red/alpha channel data format. Values are in the `[-127, 127]` range.

<div id="_class_renderingdevice_constant_data_format_b8g8r8a8_srgb"></div>

[DataFormat](#enum_renderingdevice_dataformat) **DATA_FORMAT_B8G8R8A8_SRGB** = ``49``

8-bit-per-channel unsigned floating-point blue/green/red/alpha channel data format with normalized value and non-linear sRGB encoding. Values are in the `[0.0, 1.0]` range.

<div id="_class_renderingdevice_constant_data_format_a8b8g8r8_unorm_pack32"></div>

[DataFormat](#enum_renderingdevice_dataformat) **DATA_FORMAT_A8B8G8R8_UNORM_PACK32** = ``50``

8-bit-per-channel unsigned floating-point alpha/red/green/blue channel data format with normalized value, packed in 32 bits. Values are in the `[0.0, 1.0]` range.

<div id="_class_renderingdevice_constant_data_format_a8b8g8r8_snorm_pack32"></div>

[DataFormat](#enum_renderingdevice_dataformat) **DATA_FORMAT_A8B8G8R8_SNORM_PACK32** = ``51``

8-bit-per-channel signed floating-point alpha/red/green/blue channel data format with normalized value, packed in 32 bits. Values are in the `[-1.0, 1.0]` range.

<div id="_class_renderingdevice_constant_data_format_a8b8g8r8_uscaled_pack32"></div>

[DataFormat](#enum_renderingdevice_dataformat) **DATA_FORMAT_A8B8G8R8_USCALED_PACK32** = ``52``

8-bit-per-channel unsigned floating-point alpha/red/green/blue channel data format with scaled value (value is converted from integer to float), packed in 32 bits. Values are in the `[0.0, 255.0]` range.

<div id="_class_renderingdevice_constant_data_format_a8b8g8r8_sscaled_pack32"></div>

[DataFormat](#enum_renderingdevice_dataformat) **DATA_FORMAT_A8B8G8R8_SSCALED_PACK32** = ``53``

8-bit-per-channel signed floating-point alpha/red/green/blue channel data format with scaled value (value is converted from integer to float), packed in 32 bits. Values are in the `[-127.0, 127.0]` range.

<div id="_class_renderingdevice_constant_data_format_a8b8g8r8_uint_pack32"></div>

[DataFormat](#enum_renderingdevice_dataformat) **DATA_FORMAT_A8B8G8R8_UINT_PACK32** = ``54``

8-bit-per-channel unsigned integer alpha/red/green/blue channel data format, packed in 32 bits. Values are in the `[0, 255]` range.

<div id="_class_renderingdevice_constant_data_format_a8b8g8r8_sint_pack32"></div>

[DataFormat](#enum_renderingdevice_dataformat) **DATA_FORMAT_A8B8G8R8_SINT_PACK32** = ``55``

8-bit-per-channel signed integer alpha/red/green/blue channel data format, packed in 32 bits. Values are in the `[-127, 127]` range.

<div id="_class_renderingdevice_constant_data_format_a8b8g8r8_srgb_pack32"></div>

[DataFormat](#enum_renderingdevice_dataformat) **DATA_FORMAT_A8B8G8R8_SRGB_PACK32** = ``56``

8-bit-per-channel unsigned floating-point alpha/red/green/blue channel data format with normalized value and non-linear sRGB encoding, packed in 32 bits. Values are in the `[0.0, 1.0]` range.

<div id="_class_renderingdevice_constant_data_format_a2r10g10b10_unorm_pack32"></div>

[DataFormat](#enum_renderingdevice_dataformat) **DATA_FORMAT_A2R10G10B10_UNORM_PACK32** = ``57``

Unsigned floating-point alpha/red/green/blue channel data format with normalized value, packed in 32 bits. Format contains 2 bits of alpha, 10 bits of red, 10 bits of green and 10 bits of blue. Values are in the `[0.0, 1.0]` range.

<div id="_class_renderingdevice_constant_data_format_a2r10g10b10_snorm_pack32"></div>

[DataFormat](#enum_renderingdevice_dataformat) **DATA_FORMAT_A2R10G10B10_SNORM_PACK32** = ``58``

Signed floating-point alpha/red/green/blue channel data format with normalized value, packed in 32 bits. Format contains 2 bits of alpha, 10 bits of red, 10 bits of green and 10 bits of blue. Values are in the `[-1.0, 1.0]` range.

<div id="_class_renderingdevice_constant_data_format_a2r10g10b10_uscaled_pack32"></div>

[DataFormat](#enum_renderingdevice_dataformat) **DATA_FORMAT_A2R10G10B10_USCALED_PACK32** = ``59``

Unsigned floating-point alpha/red/green/blue channel data format with normalized value, packed in 32 bits. Format contains 2 bits of alpha, 10 bits of red, 10 bits of green and 10 bits of blue. Values are in the `[0.0, 1023.0]` range for red/green/blue and `[0.0, 3.0]` for alpha.

<div id="_class_renderingdevice_constant_data_format_a2r10g10b10_sscaled_pack32"></div>

[DataFormat](#enum_renderingdevice_dataformat) **DATA_FORMAT_A2R10G10B10_SSCALED_PACK32** = ``60``

Signed floating-point alpha/red/green/blue channel data format with normalized value, packed in 32 bits. Format contains 2 bits of alpha, 10 bits of red, 10 bits of green and 10 bits of blue. Values are in the `[-511.0, 511.0]` range for red/green/blue and `[-1.0, 1.0]` for alpha.

<div id="_class_renderingdevice_constant_data_format_a2r10g10b10_uint_pack32"></div>

[DataFormat](#enum_renderingdevice_dataformat) **DATA_FORMAT_A2R10G10B10_UINT_PACK32** = ``61``

Unsigned integer alpha/red/green/blue channel data format with normalized value, packed in 32 bits. Format contains 2 bits of alpha, 10 bits of red, 10 bits of green and 10 bits of blue. Values are in the `[0, 1023]` range for red/green/blue and `[0, 3]` for alpha.

<div id="_class_renderingdevice_constant_data_format_a2r10g10b10_sint_pack32"></div>

[DataFormat](#enum_renderingdevice_dataformat) **DATA_FORMAT_A2R10G10B10_SINT_PACK32** = ``62``

Signed integer alpha/red/green/blue channel data format with normalized value, packed in 32 bits. Format contains 2 bits of alpha, 10 bits of red, 10 bits of green and 10 bits of blue. Values are in the `[-511, 511]` range for red/green/blue and `[-1, 1]` for alpha.

<div id="_class_renderingdevice_constant_data_format_a2b10g10r10_unorm_pack32"></div>

[DataFormat](#enum_renderingdevice_dataformat) **DATA_FORMAT_A2B10G10R10_UNORM_PACK32** = ``63``

Unsigned floating-point alpha/blue/green/red channel data format with normalized value, packed in 32 bits. Format contains 2 bits of alpha, 10 bits of blue, 10 bits of green and 10 bits of red. Values are in the `[0.0, 1.0]` range.

<div id="_class_renderingdevice_constant_data_format_a2b10g10r10_snorm_pack32"></div>

[DataFormat](#enum_renderingdevice_dataformat) **DATA_FORMAT_A2B10G10R10_SNORM_PACK32** = ``64``

Signed floating-point alpha/blue/green/red channel data format with normalized value, packed in 32 bits. Format contains 2 bits of alpha, 10 bits of blue, 10 bits of green and 10 bits of red. Values are in the `[-1.0, 1.0]` range.

<div id="_class_renderingdevice_constant_data_format_a2b10g10r10_uscaled_pack32"></div>

[DataFormat](#enum_renderingdevice_dataformat) **DATA_FORMAT_A2B10G10R10_USCALED_PACK32** = ``65``

Unsigned floating-point alpha/blue/green/red channel data format with normalized value, packed in 32 bits. Format contains 2 bits of alpha, 10 bits of blue, 10 bits of green and 10 bits of red. Values are in the `[0.0, 1023.0]` range for blue/green/red and `[0.0, 3.0]` for alpha.

<div id="_class_renderingdevice_constant_data_format_a2b10g10r10_sscaled_pack32"></div>

[DataFormat](#enum_renderingdevice_dataformat) **DATA_FORMAT_A2B10G10R10_SSCALED_PACK32** = ``66``

Signed floating-point alpha/blue/green/red channel data format with normalized value, packed in 32 bits. Format contains 2 bits of alpha, 10 bits of blue, 10 bits of green and 10 bits of red. Values are in the `[-511.0, 511.0]` range for blue/green/red and `[-1.0, 1.0]` for alpha.

<div id="_class_renderingdevice_constant_data_format_a2b10g10r10_uint_pack32"></div>

[DataFormat](#enum_renderingdevice_dataformat) **DATA_FORMAT_A2B10G10R10_UINT_PACK32** = ``67``

Unsigned integer alpha/blue/green/red channel data format with normalized value, packed in 32 bits. Format contains 2 bits of alpha, 10 bits of blue, 10 bits of green and 10 bits of red. Values are in the `[0, 1023]` range for blue/green/red and `[0, 3]` for alpha.

<div id="_class_renderingdevice_constant_data_format_a2b10g10r10_sint_pack32"></div>

[DataFormat](#enum_renderingdevice_dataformat) **DATA_FORMAT_A2B10G10R10_SINT_PACK32** = ``68``

Signed integer alpha/blue/green/red channel data format with normalized value, packed in 32 bits. Format contains 2 bits of alpha, 10 bits of blue, 10 bits of green and 10 bits of red. Values are in the `[-511, 511]` range for blue/green/red and `[-1, 1]` for alpha.

<div id="_class_renderingdevice_constant_data_format_r16_unorm"></div>

[DataFormat](#enum_renderingdevice_dataformat) **DATA_FORMAT_R16_UNORM** = ``69``

16-bit-per-channel unsigned floating-point red channel data format with normalized value. Values are in the `[0.0, 1.0]` range.

<div id="_class_renderingdevice_constant_data_format_r16_snorm"></div>

[DataFormat](#enum_renderingdevice_dataformat) **DATA_FORMAT_R16_SNORM** = ``70``

16-bit-per-channel signed floating-point red channel data format with normalized value. Values are in the `[-1.0, 1.0]` range.

<div id="_class_renderingdevice_constant_data_format_r16_uscaled"></div>

[DataFormat](#enum_renderingdevice_dataformat) **DATA_FORMAT_R16_USCALED** = ``71``

16-bit-per-channel unsigned floating-point red channel data format with scaled value (value is converted from integer to float). Values are in the `[0.0, 65535.0]` range.

<div id="_class_renderingdevice_constant_data_format_r16_sscaled"></div>

[DataFormat](#enum_renderingdevice_dataformat) **DATA_FORMAT_R16_SSCALED** = ``72``

16-bit-per-channel signed floating-point red channel data format with scaled value (value is converted from integer to float). Values are in the `[-32767.0, 32767.0]` range.

<div id="_class_renderingdevice_constant_data_format_r16_uint"></div>

[DataFormat](#enum_renderingdevice_dataformat) **DATA_FORMAT_R16_UINT** = ``73``

16-bit-per-channel unsigned integer red channel data format. Values are in the `[0.0, 65535]` range.

<div id="_class_renderingdevice_constant_data_format_r16_sint"></div>

[DataFormat](#enum_renderingdevice_dataformat) **DATA_FORMAT_R16_SINT** = ``74``

16-bit-per-channel signed integer red channel data format. Values are in the `[-32767, 32767]` range.

<div id="_class_renderingdevice_constant_data_format_r16_sfloat"></div>

[DataFormat](#enum_renderingdevice_dataformat) **DATA_FORMAT_R16_SFLOAT** = ``75``

16-bit-per-channel signed floating-point red channel data format with the value stored as-is.

<div id="_class_renderingdevice_constant_data_format_r16g16_unorm"></div>

[DataFormat](#enum_renderingdevice_dataformat) **DATA_FORMAT_R16G16_UNORM** = ``76``

16-bit-per-channel unsigned floating-point red/green channel data format with normalized value. Values are in the `[0.0, 1.0]` range.

<div id="_class_renderingdevice_constant_data_format_r16g16_snorm"></div>

[DataFormat](#enum_renderingdevice_dataformat) **DATA_FORMAT_R16G16_SNORM** = ``77``

16-bit-per-channel signed floating-point red/green channel data format with normalized value. Values are in the `[-1.0, 1.0]` range.

<div id="_class_renderingdevice_constant_data_format_r16g16_uscaled"></div>

[DataFormat](#enum_renderingdevice_dataformat) **DATA_FORMAT_R16G16_USCALED** = ``78``

16-bit-per-channel unsigned floating-point red/green channel data format with scaled value (value is converted from integer to float). Values are in the `[0.0, 65535.0]` range.

<div id="_class_renderingdevice_constant_data_format_r16g16_sscaled"></div>

[DataFormat](#enum_renderingdevice_dataformat) **DATA_FORMAT_R16G16_SSCALED** = ``79``

16-bit-per-channel signed floating-point red/green channel data format with scaled value (value is converted from integer to float). Values are in the `[-32767.0, 32767.0]` range.

<div id="_class_renderingdevice_constant_data_format_r16g16_uint"></div>

[DataFormat](#enum_renderingdevice_dataformat) **DATA_FORMAT_R16G16_UINT** = ``80``

16-bit-per-channel unsigned integer red/green channel data format. Values are in the `[0.0, 65535]` range.

<div id="_class_renderingdevice_constant_data_format_r16g16_sint"></div>

[DataFormat](#enum_renderingdevice_dataformat) **DATA_FORMAT_R16G16_SINT** = ``81``

16-bit-per-channel signed integer red/green channel data format. Values are in the `[-32767, 32767]` range.

<div id="_class_renderingdevice_constant_data_format_r16g16_sfloat"></div>

[DataFormat](#enum_renderingdevice_dataformat) **DATA_FORMAT_R16G16_SFLOAT** = ``82``

16-bit-per-channel signed floating-point red/green channel data format with the value stored as-is.

<div id="_class_renderingdevice_constant_data_format_r16g16b16_unorm"></div>

[DataFormat](#enum_renderingdevice_dataformat) **DATA_FORMAT_R16G16B16_UNORM** = ``83``

16-bit-per-channel unsigned floating-point red/green/blue channel data format with normalized value. Values are in the `[0.0, 1.0]` range.

<div id="_class_renderingdevice_constant_data_format_r16g16b16_snorm"></div>

[DataFormat](#enum_renderingdevice_dataformat) **DATA_FORMAT_R16G16B16_SNORM** = ``84``

16-bit-per-channel signed floating-point red/green/blue channel data format with normalized value. Values are in the `[-1.0, 1.0]` range.

<div id="_class_renderingdevice_constant_data_format_r16g16b16_uscaled"></div>

[DataFormat](#enum_renderingdevice_dataformat) **DATA_FORMAT_R16G16B16_USCALED** = ``85``

16-bit-per-channel unsigned floating-point red/green/blue channel data format with scaled value (value is converted from integer to float). Values are in the `[0.0, 65535.0]` range.

<div id="_class_renderingdevice_constant_data_format_r16g16b16_sscaled"></div>

[DataFormat](#enum_renderingdevice_dataformat) **DATA_FORMAT_R16G16B16_SSCALED** = ``86``

16-bit-per-channel signed floating-point red/green/blue channel data format with scaled value (value is converted from integer to float). Values are in the `[-32767.0, 32767.0]` range.

<div id="_class_renderingdevice_constant_data_format_r16g16b16_uint"></div>

[DataFormat](#enum_renderingdevice_dataformat) **DATA_FORMAT_R16G16B16_UINT** = ``87``

16-bit-per-channel unsigned integer red/green/blue channel data format. Values are in the `[0.0, 65535]` range.

<div id="_class_renderingdevice_constant_data_format_r16g16b16_sint"></div>

[DataFormat](#enum_renderingdevice_dataformat) **DATA_FORMAT_R16G16B16_SINT** = ``88``

16-bit-per-channel signed integer red/green/blue channel data format. Values are in the `[-32767, 32767]` range.

<div id="_class_renderingdevice_constant_data_format_r16g16b16_sfloat"></div>

[DataFormat](#enum_renderingdevice_dataformat) **DATA_FORMAT_R16G16B16_SFLOAT** = ``89``

16-bit-per-channel signed floating-point red/green/blue channel data format with the value stored as-is.

<div id="_class_renderingdevice_constant_data_format_r16g16b16a16_unorm"></div>

[DataFormat](#enum_renderingdevice_dataformat) **DATA_FORMAT_R16G16B16A16_UNORM** = ``90``

16-bit-per-channel unsigned floating-point red/green/blue/alpha channel data format with normalized value. Values are in the `[0.0, 1.0]` range.

<div id="_class_renderingdevice_constant_data_format_r16g16b16a16_snorm"></div>

[DataFormat](#enum_renderingdevice_dataformat) **DATA_FORMAT_R16G16B16A16_SNORM** = ``91``

16-bit-per-channel signed floating-point red/green/blue/alpha channel data format with normalized value. Values are in the `[-1.0, 1.0]` range.

<div id="_class_renderingdevice_constant_data_format_r16g16b16a16_uscaled"></div>

[DataFormat](#enum_renderingdevice_dataformat) **DATA_FORMAT_R16G16B16A16_USCALED** = ``92``

16-bit-per-channel unsigned floating-point red/green/blue/alpha channel data format with scaled value (value is converted from integer to float). Values are in the `[0.0, 65535.0]` range.

<div id="_class_renderingdevice_constant_data_format_r16g16b16a16_sscaled"></div>

[DataFormat](#enum_renderingdevice_dataformat) **DATA_FORMAT_R16G16B16A16_SSCALED** = ``93``

16-bit-per-channel signed floating-point red/green/blue/alpha channel data format with scaled value (value is converted from integer to float). Values are in the `[-32767.0, 32767.0]` range.

<div id="_class_renderingdevice_constant_data_format_r16g16b16a16_uint"></div>

[DataFormat](#enum_renderingdevice_dataformat) **DATA_FORMAT_R16G16B16A16_UINT** = ``94``

16-bit-per-channel unsigned integer red/green/blue/alpha channel data format. Values are in the `[0.0, 65535]` range.

<div id="_class_renderingdevice_constant_data_format_r16g16b16a16_sint"></div>

[DataFormat](#enum_renderingdevice_dataformat) **DATA_FORMAT_R16G16B16A16_SINT** = ``95``

16-bit-per-channel signed integer red/green/blue/alpha channel data format. Values are in the `[-32767, 32767]` range.

<div id="_class_renderingdevice_constant_data_format_r16g16b16a16_sfloat"></div>

[DataFormat](#enum_renderingdevice_dataformat) **DATA_FORMAT_R16G16B16A16_SFLOAT** = ``96``

16-bit-per-channel signed floating-point red/green/blue/alpha channel data format with the value stored as-is.

<div id="_class_renderingdevice_constant_data_format_r32_uint"></div>

[DataFormat](#enum_renderingdevice_dataformat) **DATA_FORMAT_R32_UINT** = ``97``

32-bit-per-channel unsigned integer red channel data format. Values are in the `[0, 2^32 - 1]` range.

<div id="_class_renderingdevice_constant_data_format_r32_sint"></div>

[DataFormat](#enum_renderingdevice_dataformat) **DATA_FORMAT_R32_SINT** = ``98``

32-bit-per-channel signed integer red channel data format. Values are in the `[2^31 + 1, 2^31 - 1]` range.

<div id="_class_renderingdevice_constant_data_format_r32_sfloat"></div>

[DataFormat](#enum_renderingdevice_dataformat) **DATA_FORMAT_R32_SFLOAT** = ``99``

32-bit-per-channel signed floating-point red channel data format with the value stored as-is.

<div id="_class_renderingdevice_constant_data_format_r32g32_uint"></div>

[DataFormat](#enum_renderingdevice_dataformat) **DATA_FORMAT_R32G32_UINT** = ``100``

32-bit-per-channel unsigned integer red/green channel data format. Values are in the `[0, 2^32 - 1]` range.

<div id="_class_renderingdevice_constant_data_format_r32g32_sint"></div>

[DataFormat](#enum_renderingdevice_dataformat) **DATA_FORMAT_R32G32_SINT** = ``101``

32-bit-per-channel signed integer red/green channel data format. Values are in the `[2^31 + 1, 2^31 - 1]` range.

<div id="_class_renderingdevice_constant_data_format_r32g32_sfloat"></div>

[DataFormat](#enum_renderingdevice_dataformat) **DATA_FORMAT_R32G32_SFLOAT** = ``102``

32-bit-per-channel signed floating-point red/green channel data format with the value stored as-is.

<div id="_class_renderingdevice_constant_data_format_r32g32b32_uint"></div>

[DataFormat](#enum_renderingdevice_dataformat) **DATA_FORMAT_R32G32B32_UINT** = ``103``

32-bit-per-channel unsigned integer red/green/blue channel data format. Values are in the `[0, 2^32 - 1]` range.

<div id="_class_renderingdevice_constant_data_format_r32g32b32_sint"></div>

[DataFormat](#enum_renderingdevice_dataformat) **DATA_FORMAT_R32G32B32_SINT** = ``104``

32-bit-per-channel signed integer red/green/blue channel data format. Values are in the `[2^31 + 1, 2^31 - 1]` range.

<div id="_class_renderingdevice_constant_data_format_r32g32b32_sfloat"></div>

[DataFormat](#enum_renderingdevice_dataformat) **DATA_FORMAT_R32G32B32_SFLOAT** = ``105``

32-bit-per-channel signed floating-point red/green/blue channel data format with the value stored as-is.

<div id="_class_renderingdevice_constant_data_format_r32g32b32a32_uint"></div>

[DataFormat](#enum_renderingdevice_dataformat) **DATA_FORMAT_R32G32B32A32_UINT** = ``106``

32-bit-per-channel unsigned integer red/green/blue/alpha channel data format. Values are in the `[0, 2^32 - 1]` range.

<div id="_class_renderingdevice_constant_data_format_r32g32b32a32_sint"></div>

[DataFormat](#enum_renderingdevice_dataformat) **DATA_FORMAT_R32G32B32A32_SINT** = ``107``

32-bit-per-channel signed integer red/green/blue/alpha channel data format. Values are in the `[2^31 + 1, 2^31 - 1]` range.

<div id="_class_renderingdevice_constant_data_format_r32g32b32a32_sfloat"></div>

[DataFormat](#enum_renderingdevice_dataformat) **DATA_FORMAT_R32G32B32A32_SFLOAT** = ``108``

32-bit-per-channel signed floating-point red/green/blue/alpha channel data format with the value stored as-is.

<div id="_class_renderingdevice_constant_data_format_r64_uint"></div>

[DataFormat](#enum_renderingdevice_dataformat) **DATA_FORMAT_R64_UINT** = ``109``

64-bit-per-channel unsigned integer red channel data format. Values are in the `[0, 2^64 - 1]` range.

<div id="_class_renderingdevice_constant_data_format_r64_sint"></div>

[DataFormat](#enum_renderingdevice_dataformat) **DATA_FORMAT_R64_SINT** = ``110``

64-bit-per-channel signed integer red channel data format. Values are in the `[2^63 + 1, 2^63 - 1]` range.

<div id="_class_renderingdevice_constant_data_format_r64_sfloat"></div>

[DataFormat](#enum_renderingdevice_dataformat) **DATA_FORMAT_R64_SFLOAT** = ``111``

64-bit-per-channel signed floating-point red channel data format with the value stored as-is.

<div id="_class_renderingdevice_constant_data_format_r64g64_uint"></div>

[DataFormat](#enum_renderingdevice_dataformat) **DATA_FORMAT_R64G64_UINT** = ``112``

64-bit-per-channel unsigned integer red/green channel data format. Values are in the `[0, 2^64 - 1]` range.

<div id="_class_renderingdevice_constant_data_format_r64g64_sint"></div>

[DataFormat](#enum_renderingdevice_dataformat) **DATA_FORMAT_R64G64_SINT** = ``113``

64-bit-per-channel signed integer red/green channel data format. Values are in the `[2^63 + 1, 2^63 - 1]` range.

<div id="_class_renderingdevice_constant_data_format_r64g64_sfloat"></div>

[DataFormat](#enum_renderingdevice_dataformat) **DATA_FORMAT_R64G64_SFLOAT** = ``114``

64-bit-per-channel signed floating-point red/green channel data format with the value stored as-is.

<div id="_class_renderingdevice_constant_data_format_r64g64b64_uint"></div>

[DataFormat](#enum_renderingdevice_dataformat) **DATA_FORMAT_R64G64B64_UINT** = ``115``

64-bit-per-channel unsigned integer red/green/blue channel data format. Values are in the `[0, 2^64 - 1]` range.

<div id="_class_renderingdevice_constant_data_format_r64g64b64_sint"></div>

[DataFormat](#enum_renderingdevice_dataformat) **DATA_FORMAT_R64G64B64_SINT** = ``116``

64-bit-per-channel signed integer red/green/blue channel data format. Values are in the `[2^63 + 1, 2^63 - 1]` range.

<div id="_class_renderingdevice_constant_data_format_r64g64b64_sfloat"></div>

[DataFormat](#enum_renderingdevice_dataformat) **DATA_FORMAT_R64G64B64_SFLOAT** = ``117``

64-bit-per-channel signed floating-point red/green/blue channel data format with the value stored as-is.

<div id="_class_renderingdevice_constant_data_format_r64g64b64a64_uint"></div>

[DataFormat](#enum_renderingdevice_dataformat) **DATA_FORMAT_R64G64B64A64_UINT** = ``118``

64-bit-per-channel unsigned integer red/green/blue/alpha channel data format. Values are in the `[0, 2^64 - 1]` range.

<div id="_class_renderingdevice_constant_data_format_r64g64b64a64_sint"></div>

[DataFormat](#enum_renderingdevice_dataformat) **DATA_FORMAT_R64G64B64A64_SINT** = ``119``

64-bit-per-channel signed integer red/green/blue/alpha channel data format. Values are in the `[2^63 + 1, 2^63 - 1]` range.

<div id="_class_renderingdevice_constant_data_format_r64g64b64a64_sfloat"></div>

[DataFormat](#enum_renderingdevice_dataformat) **DATA_FORMAT_R64G64B64A64_SFLOAT** = ``120``

64-bit-per-channel signed floating-point red/green/blue/alpha channel data format with the value stored as-is.

<div id="_class_renderingdevice_constant_data_format_b10g11r11_ufloat_pack32"></div>

[DataFormat](#enum_renderingdevice_dataformat) **DATA_FORMAT_B10G11R11_UFLOAT_PACK32** = ``121``

Unsigned floating-point blue/green/red data format with the value stored as-is, packed in 32 bits. The format's precision is 10 bits of blue channel, 11 bits of green channel and 11 bits of red channel.

<div id="_class_renderingdevice_constant_data_format_e5b9g9r9_ufloat_pack32"></div>

[DataFormat](#enum_renderingdevice_dataformat) **DATA_FORMAT_E5B9G9R9_UFLOAT_PACK32** = ``122``

Unsigned floating-point exposure/blue/green/red data format with the value stored as-is, packed in 32 bits. The format's precision is 5 bits of exposure, 9 bits of blue channel, 9 bits of green channel and 9 bits of red channel.

<div id="_class_renderingdevice_constant_data_format_d16_unorm"></div>

[DataFormat](#enum_renderingdevice_dataformat) **DATA_FORMAT_D16_UNORM** = ``123``

16-bit unsigned floating-point depth data format with normalized value. Values are in the `[0.0, 1.0]` range.

<div id="_class_renderingdevice_constant_data_format_x8_d24_unorm_pack32"></div>

[DataFormat](#enum_renderingdevice_dataformat) **DATA_FORMAT_X8_D24_UNORM_PACK32** = ``124``

24-bit unsigned floating-point depth data format with normalized value, plus 8 unused bits, packed in 32 bits. Values for depth are in the `[0.0, 1.0]` range.

<div id="_class_renderingdevice_constant_data_format_d32_sfloat"></div>

[DataFormat](#enum_renderingdevice_dataformat) **DATA_FORMAT_D32_SFLOAT** = ``125``

32-bit signed floating-point depth data format with the value stored as-is.

<div id="_class_renderingdevice_constant_data_format_s8_uint"></div>

[DataFormat](#enum_renderingdevice_dataformat) **DATA_FORMAT_S8_UINT** = ``126``

8-bit unsigned integer stencil data format.

<div id="_class_renderingdevice_constant_data_format_d16_unorm_s8_uint"></div>

[DataFormat](#enum_renderingdevice_dataformat) **DATA_FORMAT_D16_UNORM_S8_UINT** = ``127``

16-bit unsigned floating-point depth data format with normalized value, plus 8 bits of stencil in unsigned integer format. Values for depth are in the `[0.0, 1.0]` range. Values for stencil are in the `[0, 255]` range.

<div id="_class_renderingdevice_constant_data_format_d24_unorm_s8_uint"></div>

[DataFormat](#enum_renderingdevice_dataformat) **DATA_FORMAT_D24_UNORM_S8_UINT** = ``128``

24-bit unsigned floating-point depth data format with normalized value, plus 8 bits of stencil in unsigned integer format. Values for depth are in the `[0.0, 1.0]` range. Values for stencil are in the `[0, 255]` range.

<div id="_class_renderingdevice_constant_data_format_d32_sfloat_s8_uint"></div>

[DataFormat](#enum_renderingdevice_dataformat) **DATA_FORMAT_D32_SFLOAT_S8_UINT** = ``129``

32-bit signed floating-point depth data format with the value stored as-is, plus 8 bits of stencil in unsigned integer format. Values for stencil are in the `[0, 255]` range.

<div id="_class_renderingdevice_constant_data_format_bc1_rgb_unorm_block"></div>

[DataFormat](#enum_renderingdevice_dataformat) **DATA_FORMAT_BC1_RGB_UNORM_BLOCK** = ``130``

VRAM-compressed unsigned red/green/blue channel data format with normalized value. Values are in the `[0.0, 1.0]` range. The format's precision is 5 bits of red channel, 6 bits of green channel and 5 bits of blue channel. Using BC1 texture compression (also known as S3TC DXT1).

<div id="_class_renderingdevice_constant_data_format_bc1_rgb_srgb_block"></div>

[DataFormat](#enum_renderingdevice_dataformat) **DATA_FORMAT_BC1_RGB_SRGB_BLOCK** = ``131``

VRAM-compressed unsigned red/green/blue channel data format with normalized value and non-linear sRGB encoding. Values are in the `[0.0, 1.0]` range. The format's precision is 5 bits of red channel, 6 bits of green channel and 5 bits of blue channel. Using BC1 texture compression (also known as S3TC DXT1).

<div id="_class_renderingdevice_constant_data_format_bc1_rgba_unorm_block"></div>

[DataFormat](#enum_renderingdevice_dataformat) **DATA_FORMAT_BC1_RGBA_UNORM_BLOCK** = ``132``

VRAM-compressed unsigned red/green/blue/alpha channel data format with normalized value. Values are in the `[0.0, 1.0]` range. The format's precision is 5 bits of red channel, 6 bits of green channel, 5 bits of blue channel and 1 bit of alpha channel. Using BC1 texture compression (also known as S3TC DXT1).

<div id="_class_renderingdevice_constant_data_format_bc1_rgba_srgb_block"></div>

[DataFormat](#enum_renderingdevice_dataformat) **DATA_FORMAT_BC1_RGBA_SRGB_BLOCK** = ``133``

VRAM-compressed unsigned red/green/blue/alpha channel data format with normalized value and non-linear sRGB encoding. Values are in the `[0.0, 1.0]` range. The format's precision is 5 bits of red channel, 6 bits of green channel, 5 bits of blue channel and 1 bit of alpha channel. Using BC1 texture compression (also known as S3TC DXT1).

<div id="_class_renderingdevice_constant_data_format_bc2_unorm_block"></div>

[DataFormat](#enum_renderingdevice_dataformat) **DATA_FORMAT_BC2_UNORM_BLOCK** = ``134``

VRAM-compressed unsigned red/green/blue/alpha channel data format with normalized value. Values are in the `[0.0, 1.0]` range. The format's precision is 5 bits of red channel, 6 bits of green channel, 5 bits of blue channel and 4 bits of alpha channel. Using BC2 texture compression (also known as S3TC DXT3).

<div id="_class_renderingdevice_constant_data_format_bc2_srgb_block"></div>

[DataFormat](#enum_renderingdevice_dataformat) **DATA_FORMAT_BC2_SRGB_BLOCK** = ``135``

VRAM-compressed unsigned red/green/blue/alpha channel data format with normalized value and non-linear sRGB encoding. Values are in the `[0.0, 1.0]` range. The format's precision is 5 bits of red channel, 6 bits of green channel, 5 bits of blue channel and 4 bits of alpha channel. Using BC2 texture compression (also known as S3TC DXT3).

<div id="_class_renderingdevice_constant_data_format_bc3_unorm_block"></div>

[DataFormat](#enum_renderingdevice_dataformat) **DATA_FORMAT_BC3_UNORM_BLOCK** = ``136``

VRAM-compressed unsigned red/green/blue/alpha channel data format with normalized value. Values are in the `[0.0, 1.0]` range. The format's precision is 5 bits of red channel, 6 bits of green channel, 5 bits of blue channel and 8 bits of alpha channel. Using BC3 texture compression (also known as S3TC DXT5).

<div id="_class_renderingdevice_constant_data_format_bc3_srgb_block"></div>

[DataFormat](#enum_renderingdevice_dataformat) **DATA_FORMAT_BC3_SRGB_BLOCK** = ``137``

VRAM-compressed unsigned red/green/blue/alpha channel data format with normalized value and non-linear sRGB encoding. Values are in the `[0.0, 1.0]` range. The format's precision is 5 bits of red channel, 6 bits of green channel, 5 bits of blue channel and 8 bits of alpha channel. Using BC3 texture compression (also known as S3TC DXT5).

<div id="_class_renderingdevice_constant_data_format_bc4_unorm_block"></div>

[DataFormat](#enum_renderingdevice_dataformat) **DATA_FORMAT_BC4_UNORM_BLOCK** = ``138``

VRAM-compressed unsigned red channel data format with normalized value. Values are in the `[0.0, 1.0]` range. The format's precision is 8 bits of red channel. Using BC4 texture compression.

<div id="_class_renderingdevice_constant_data_format_bc4_snorm_block"></div>

[DataFormat](#enum_renderingdevice_dataformat) **DATA_FORMAT_BC4_SNORM_BLOCK** = ``139``

VRAM-compressed signed red channel data format with normalized value. Values are in the `[-1.0, 1.0]` range. The format's precision is 8 bits of red channel. Using BC4 texture compression.

<div id="_class_renderingdevice_constant_data_format_bc5_unorm_block"></div>

[DataFormat](#enum_renderingdevice_dataformat) **DATA_FORMAT_BC5_UNORM_BLOCK** = ``140``

VRAM-compressed unsigned red/green channel data format with normalized value. Values are in the `[0.0, 1.0]` range. The format's precision is 8 bits of red channel and 8 bits of green channel. Using BC5 texture compression (also known as S3TC RGTC).

<div id="_class_renderingdevice_constant_data_format_bc5_snorm_block"></div>

[DataFormat](#enum_renderingdevice_dataformat) **DATA_FORMAT_BC5_SNORM_BLOCK** = ``141``

VRAM-compressed signed red/green channel data format with normalized value. Values are in the `[-1.0, 1.0]` range. The format's precision is 8 bits of red channel and 8 bits of green channel. Using BC5 texture compression (also known as S3TC RGTC).

<div id="_class_renderingdevice_constant_data_format_bc6h_ufloat_block"></div>

[DataFormat](#enum_renderingdevice_dataformat) **DATA_FORMAT_BC6H_UFLOAT_BLOCK** = ``142``

VRAM-compressed unsigned red/green/blue channel data format with the floating-point value stored as-is. The format's precision is between 10 and 13 bits for the red/green/blue channels. Using BC6H texture compression (also known as BPTC HDR).

<div id="_class_renderingdevice_constant_data_format_bc6h_sfloat_block"></div>

[DataFormat](#enum_renderingdevice_dataformat) **DATA_FORMAT_BC6H_SFLOAT_BLOCK** = ``143``

VRAM-compressed signed red/green/blue channel data format with the floating-point value stored as-is. The format's precision is between 10 and 13 bits for the red/green/blue channels. Using BC6H texture compression (also known as BPTC HDR).

<div id="_class_renderingdevice_constant_data_format_bc7_unorm_block"></div>

[DataFormat](#enum_renderingdevice_dataformat) **DATA_FORMAT_BC7_UNORM_BLOCK** = ``144``

VRAM-compressed unsigned red/green/blue/alpha channel data format with normalized value. Values are in the `[0.0, 1.0]` range. The format's precision is between 4 and 7 bits for the red/green/blue channels and between 0 and 8 bits for the alpha channel. Also known as BPTC LDR.

<div id="_class_renderingdevice_constant_data_format_bc7_srgb_block"></div>

[DataFormat](#enum_renderingdevice_dataformat) **DATA_FORMAT_BC7_SRGB_BLOCK** = ``145``

VRAM-compressed unsigned red/green/blue/alpha channel data format with normalized value and non-linear sRGB encoding. Values are in the `[0.0, 1.0]` range. The format's precision is between 4 and 7 bits for the red/green/blue channels and between 0 and 8 bits for the alpha channel. Also known as BPTC LDR.

<div id="_class_renderingdevice_constant_data_format_etc2_r8g8b8_unorm_block"></div>

[DataFormat](#enum_renderingdevice_dataformat) **DATA_FORMAT_ETC2_R8G8B8_UNORM_BLOCK** = ``146``

VRAM-compressed unsigned red/green/blue channel data format with normalized value. Values are in the `[0.0, 1.0]` range. Using ETC2 texture compression.

<div id="_class_renderingdevice_constant_data_format_etc2_r8g8b8_srgb_block"></div>

[DataFormat](#enum_renderingdevice_dataformat) **DATA_FORMAT_ETC2_R8G8B8_SRGB_BLOCK** = ``147``

VRAM-compressed unsigned red/green/blue channel data format with normalized value and non-linear sRGB encoding. Values are in the `[0.0, 1.0]` range. Using ETC2 texture compression.

<div id="_class_renderingdevice_constant_data_format_etc2_r8g8b8a1_unorm_block"></div>

[DataFormat](#enum_renderingdevice_dataformat) **DATA_FORMAT_ETC2_R8G8B8A1_UNORM_BLOCK** = ``148``

VRAM-compressed unsigned red/green/blue/alpha channel data format with normalized value. Values are in the `[0.0, 1.0]` range. Red/green/blue use 8 bit of precision each, with alpha using 1 bit of precision. Using ETC2 texture compression.

<div id="_class_renderingdevice_constant_data_format_etc2_r8g8b8a1_srgb_block"></div>

[DataFormat](#enum_renderingdevice_dataformat) **DATA_FORMAT_ETC2_R8G8B8A1_SRGB_BLOCK** = ``149``

VRAM-compressed unsigned red/green/blue/alpha channel data format with normalized value and non-linear sRGB encoding. Values are in the `[0.0, 1.0]` range. Red/green/blue use 8 bit of precision each, with alpha using 1 bit of precision. Using ETC2 texture compression.

<div id="_class_renderingdevice_constant_data_format_etc2_r8g8b8a8_unorm_block"></div>

[DataFormat](#enum_renderingdevice_dataformat) **DATA_FORMAT_ETC2_R8G8B8A8_UNORM_BLOCK** = ``150``

VRAM-compressed unsigned red/green/blue/alpha channel data format with normalized value. Values are in the `[0.0, 1.0]` range. Red/green/blue use 8 bits of precision each, with alpha using 8 bits of precision. Using ETC2 texture compression.

<div id="_class_renderingdevice_constant_data_format_etc2_r8g8b8a8_srgb_block"></div>

[DataFormat](#enum_renderingdevice_dataformat) **DATA_FORMAT_ETC2_R8G8B8A8_SRGB_BLOCK** = ``151``

VRAM-compressed unsigned red/green/blue/alpha channel data format with normalized value and non-linear sRGB encoding. Values are in the `[0.0, 1.0]` range. Red/green/blue use 8 bits of precision each, with alpha using 8 bits of precision. Using ETC2 texture compression.

<div id="_class_renderingdevice_constant_data_format_eac_r11_unorm_block"></div>

[DataFormat](#enum_renderingdevice_dataformat) **DATA_FORMAT_EAC_R11_UNORM_BLOCK** = ``152``

11-bit VRAM-compressed unsigned red channel data format with normalized value. Values are in the `[0.0, 1.0]` range. Using ETC2 texture compression.

<div id="_class_renderingdevice_constant_data_format_eac_r11_snorm_block"></div>

[DataFormat](#enum_renderingdevice_dataformat) **DATA_FORMAT_EAC_R11_SNORM_BLOCK** = ``153``

11-bit VRAM-compressed signed red channel data format with normalized value. Values are in the `[-1.0, 1.0]` range. Using ETC2 texture compression.

<div id="_class_renderingdevice_constant_data_format_eac_r11g11_unorm_block"></div>

[DataFormat](#enum_renderingdevice_dataformat) **DATA_FORMAT_EAC_R11G11_UNORM_BLOCK** = ``154``

11-bit VRAM-compressed unsigned red/green channel data format with normalized value. Values are in the `[0.0, 1.0]` range. Using ETC2 texture compression.

<div id="_class_renderingdevice_constant_data_format_eac_r11g11_snorm_block"></div>

[DataFormat](#enum_renderingdevice_dataformat) **DATA_FORMAT_EAC_R11G11_SNORM_BLOCK** = ``155``

11-bit VRAM-compressed signed red/green channel data format with normalized value. Values are in the `[-1.0, 1.0]` range. Using ETC2 texture compression.

<div id="_class_renderingdevice_constant_data_format_astc_4x4_unorm_block"></div>

[DataFormat](#enum_renderingdevice_dataformat) **DATA_FORMAT_ASTC_4x4_UNORM_BLOCK** = ``156``

VRAM-compressed unsigned floating-point data format with normalized value, packed in 4×4 blocks (highest quality). Values are in the `[0.0, 1.0]` range. Using ASTC compression.

<div id="_class_renderingdevice_constant_data_format_astc_4x4_srgb_block"></div>

[DataFormat](#enum_renderingdevice_dataformat) **DATA_FORMAT_ASTC_4x4_SRGB_BLOCK** = ``157``

VRAM-compressed unsigned floating-point data format with normalized value and non-linear sRGB encoding, packed in 4×4 blocks (highest quality). Values are in the `[0.0, 1.0]` range. Using ASTC compression.

<div id="_class_renderingdevice_constant_data_format_astc_5x4_unorm_block"></div>

[DataFormat](#enum_renderingdevice_dataformat) **DATA_FORMAT_ASTC_5x4_UNORM_BLOCK** = ``158``

VRAM-compressed unsigned floating-point data format with normalized value, packed in 5×4 blocks. Values are in the `[0.0, 1.0]` range. Using ASTC compression.

<div id="_class_renderingdevice_constant_data_format_astc_5x4_srgb_block"></div>

[DataFormat](#enum_renderingdevice_dataformat) **DATA_FORMAT_ASTC_5x4_SRGB_BLOCK** = ``159``

VRAM-compressed unsigned floating-point data format with normalized value and non-linear sRGB encoding, packed in 5×4 blocks. Values are in the `[0.0, 1.0]` range. Using ASTC compression.

<div id="_class_renderingdevice_constant_data_format_astc_5x5_unorm_block"></div>

[DataFormat](#enum_renderingdevice_dataformat) **DATA_FORMAT_ASTC_5x5_UNORM_BLOCK** = ``160``

VRAM-compressed unsigned floating-point data format with normalized value, packed in 5×5 blocks. Values are in the `[0.0, 1.0]` range. Using ASTC compression.

<div id="_class_renderingdevice_constant_data_format_astc_5x5_srgb_block"></div>

[DataFormat](#enum_renderingdevice_dataformat) **DATA_FORMAT_ASTC_5x5_SRGB_BLOCK** = ``161``

VRAM-compressed unsigned floating-point data format with normalized value and non-linear sRGB encoding, packed in 5×5 blocks. Values are in the `[0.0, 1.0]` range. Using ASTC compression.

<div id="_class_renderingdevice_constant_data_format_astc_6x5_unorm_block"></div>

[DataFormat](#enum_renderingdevice_dataformat) **DATA_FORMAT_ASTC_6x5_UNORM_BLOCK** = ``162``

VRAM-compressed unsigned floating-point data format with normalized value, packed in 6×5 blocks. Values are in the `[0.0, 1.0]` range. Using ASTC compression.

<div id="_class_renderingdevice_constant_data_format_astc_6x5_srgb_block"></div>

[DataFormat](#enum_renderingdevice_dataformat) **DATA_FORMAT_ASTC_6x5_SRGB_BLOCK** = ``163``

VRAM-compressed unsigned floating-point data format with normalized value and non-linear sRGB encoding, packed in 6×5 blocks. Values are in the `[0.0, 1.0]` range. Using ASTC compression.

<div id="_class_renderingdevice_constant_data_format_astc_6x6_unorm_block"></div>

[DataFormat](#enum_renderingdevice_dataformat) **DATA_FORMAT_ASTC_6x6_UNORM_BLOCK** = ``164``

VRAM-compressed unsigned floating-point data format with normalized value, packed in 6×6 blocks. Values are in the `[0.0, 1.0]` range. Using ASTC compression.

<div id="_class_renderingdevice_constant_data_format_astc_6x6_srgb_block"></div>

[DataFormat](#enum_renderingdevice_dataformat) **DATA_FORMAT_ASTC_6x6_SRGB_BLOCK** = ``165``

VRAM-compressed unsigned floating-point data format with normalized value and non-linear sRGB encoding, packed in 6×6 blocks. Values are in the `[0.0, 1.0]` range. Using ASTC compression.

<div id="_class_renderingdevice_constant_data_format_astc_8x5_unorm_block"></div>

[DataFormat](#enum_renderingdevice_dataformat) **DATA_FORMAT_ASTC_8x5_UNORM_BLOCK** = ``166``

VRAM-compressed unsigned floating-point data format with normalized value, packed in 8×5 blocks. Values are in the `[0.0, 1.0]` range. Using ASTC compression.

<div id="_class_renderingdevice_constant_data_format_astc_8x5_srgb_block"></div>

[DataFormat](#enum_renderingdevice_dataformat) **DATA_FORMAT_ASTC_8x5_SRGB_BLOCK** = ``167``

VRAM-compressed unsigned floating-point data format with normalized value and non-linear sRGB encoding, packed in 8×5 blocks. Values are in the `[0.0, 1.0]` range. Using ASTC compression.

<div id="_class_renderingdevice_constant_data_format_astc_8x6_unorm_block"></div>

[DataFormat](#enum_renderingdevice_dataformat) **DATA_FORMAT_ASTC_8x6_UNORM_BLOCK** = ``168``

VRAM-compressed unsigned floating-point data format with normalized value, packed in 8×6 blocks. Values are in the `[0.0, 1.0]` range. Using ASTC compression.

<div id="_class_renderingdevice_constant_data_format_astc_8x6_srgb_block"></div>

[DataFormat](#enum_renderingdevice_dataformat) **DATA_FORMAT_ASTC_8x6_SRGB_BLOCK** = ``169``

VRAM-compressed unsigned floating-point data format with normalized value and non-linear sRGB encoding, packed in 8×6 blocks. Values are in the `[0.0, 1.0]` range. Using ASTC compression.

<div id="_class_renderingdevice_constant_data_format_astc_8x8_unorm_block"></div>

[DataFormat](#enum_renderingdevice_dataformat) **DATA_FORMAT_ASTC_8x8_UNORM_BLOCK** = ``170``

VRAM-compressed unsigned floating-point data format with normalized value, packed in 8×8 blocks. Values are in the `[0.0, 1.0]` range. Using ASTC compression.

<div id="_class_renderingdevice_constant_data_format_astc_8x8_srgb_block"></div>

[DataFormat](#enum_renderingdevice_dataformat) **DATA_FORMAT_ASTC_8x8_SRGB_BLOCK** = ``171``

VRAM-compressed unsigned floating-point data format with normalized value and non-linear sRGB encoding, packed in 8×8 blocks. Values are in the `[0.0, 1.0]` range. Using ASTC compression.

<div id="_class_renderingdevice_constant_data_format_astc_10x5_unorm_block"></div>

[DataFormat](#enum_renderingdevice_dataformat) **DATA_FORMAT_ASTC_10x5_UNORM_BLOCK** = ``172``

VRAM-compressed unsigned floating-point data format with normalized value, packed in 10×5 blocks. Values are in the `[0.0, 1.0]` range. Using ASTC compression.

<div id="_class_renderingdevice_constant_data_format_astc_10x5_srgb_block"></div>

[DataFormat](#enum_renderingdevice_dataformat) **DATA_FORMAT_ASTC_10x5_SRGB_BLOCK** = ``173``

VRAM-compressed unsigned floating-point data format with normalized value and non-linear sRGB encoding, packed in 10×5 blocks. Values are in the `[0.0, 1.0]` range. Using ASTC compression.

<div id="_class_renderingdevice_constant_data_format_astc_10x6_unorm_block"></div>

[DataFormat](#enum_renderingdevice_dataformat) **DATA_FORMAT_ASTC_10x6_UNORM_BLOCK** = ``174``

VRAM-compressed unsigned floating-point data format with normalized value, packed in 10×6 blocks. Values are in the `[0.0, 1.0]` range. Using ASTC compression.

<div id="_class_renderingdevice_constant_data_format_astc_10x6_srgb_block"></div>

[DataFormat](#enum_renderingdevice_dataformat) **DATA_FORMAT_ASTC_10x6_SRGB_BLOCK** = ``175``

VRAM-compressed unsigned floating-point data format with normalized value and non-linear sRGB encoding, packed in 10×6 blocks. Values are in the `[0.0, 1.0]` range. Using ASTC compression.

<div id="_class_renderingdevice_constant_data_format_astc_10x8_unorm_block"></div>

[DataFormat](#enum_renderingdevice_dataformat) **DATA_FORMAT_ASTC_10x8_UNORM_BLOCK** = ``176``

VRAM-compressed unsigned floating-point data format with normalized value, packed in 10×8 blocks. Values are in the `[0.0, 1.0]` range. Using ASTC compression.

<div id="_class_renderingdevice_constant_data_format_astc_10x8_srgb_block"></div>

[DataFormat](#enum_renderingdevice_dataformat) **DATA_FORMAT_ASTC_10x8_SRGB_BLOCK** = ``177``

VRAM-compressed unsigned floating-point data format with normalized value and non-linear sRGB encoding, packed in 10×8 blocks. Values are in the `[0.0, 1.0]` range. Using ASTC compression.

<div id="_class_renderingdevice_constant_data_format_astc_10x10_unorm_block"></div>

[DataFormat](#enum_renderingdevice_dataformat) **DATA_FORMAT_ASTC_10x10_UNORM_BLOCK** = ``178``

VRAM-compressed unsigned floating-point data format with normalized value, packed in 10×10 blocks. Values are in the `[0.0, 1.0]` range. Using ASTC compression.

<div id="_class_renderingdevice_constant_data_format_astc_10x10_srgb_block"></div>

[DataFormat](#enum_renderingdevice_dataformat) **DATA_FORMAT_ASTC_10x10_SRGB_BLOCK** = ``179``

VRAM-compressed unsigned floating-point data format with normalized value and non-linear sRGB encoding, packed in 10×10 blocks. Values are in the `[0.0, 1.0]` range. Using ASTC compression.

<div id="_class_renderingdevice_constant_data_format_astc_12x10_unorm_block"></div>

[DataFormat](#enum_renderingdevice_dataformat) **DATA_FORMAT_ASTC_12x10_UNORM_BLOCK** = ``180``

VRAM-compressed unsigned floating-point data format with normalized value, packed in 12×10 blocks. Values are in the `[0.0, 1.0]` range. Using ASTC compression.

<div id="_class_renderingdevice_constant_data_format_astc_12x10_srgb_block"></div>

[DataFormat](#enum_renderingdevice_dataformat) **DATA_FORMAT_ASTC_12x10_SRGB_BLOCK** = ``181``

VRAM-compressed unsigned floating-point data format with normalized value and non-linear sRGB encoding, packed in 12×10 blocks. Values are in the `[0.0, 1.0]` range. Using ASTC compression.

<div id="_class_renderingdevice_constant_data_format_astc_12x12_unorm_block"></div>

[DataFormat](#enum_renderingdevice_dataformat) **DATA_FORMAT_ASTC_12x12_UNORM_BLOCK** = ``182``

VRAM-compressed unsigned floating-point data format with normalized value, packed in 12 blocks (lowest quality). Values are in the `[0.0, 1.0]` range. Using ASTC compression.

<div id="_class_renderingdevice_constant_data_format_astc_12x12_srgb_block"></div>

[DataFormat](#enum_renderingdevice_dataformat) **DATA_FORMAT_ASTC_12x12_SRGB_BLOCK** = ``183``

VRAM-compressed unsigned floating-point data format with normalized value and non-linear sRGB encoding, packed in 12 blocks (lowest quality). Values are in the `[0.0, 1.0]` range. Using ASTC compression.

<div id="_class_renderingdevice_constant_data_format_g8b8g8r8_422_unorm"></div>

[DataFormat](#enum_renderingdevice_dataformat) **DATA_FORMAT_G8B8G8R8_422_UNORM** = ``184``

8-bit-per-channel unsigned floating-point green/blue/red channel data format with normalized value. Values are in the `[0.0, 1.0]` range. Blue and red channel data is stored at halved horizontal resolution (i.e. 2 horizontally adjacent pixels will share the same value for the blue/red channel).

<div id="_class_renderingdevice_constant_data_format_b8g8r8g8_422_unorm"></div>

[DataFormat](#enum_renderingdevice_dataformat) **DATA_FORMAT_B8G8R8G8_422_UNORM** = ``185``

8-bit-per-channel unsigned floating-point blue/green/red channel data format with normalized value. Values are in the `[0.0, 1.0]` range. Blue and red channel data is stored at halved horizontal resolution (i.e. 2 horizontally adjacent pixels will share the same value for the blue/red channel).

<div id="_class_renderingdevice_constant_data_format_g8_b8_r8_3plane_420_unorm"></div>

[DataFormat](#enum_renderingdevice_dataformat) **DATA_FORMAT_G8_B8_R8_3PLANE_420_UNORM** = ``186``

8-bit-per-channel unsigned floating-point green/blue/red channel data with normalized value, stored across 3 separate planes (green + blue + red). Values are in the `[0.0, 1.0]` range. Blue and red channel data is stored at halved horizontal and vertical resolution (i.e. 2×2 adjacent pixels will share the same value for the blue/red channel).

<div id="_class_renderingdevice_constant_data_format_g8_b8r8_2plane_420_unorm"></div>

[DataFormat](#enum_renderingdevice_dataformat) **DATA_FORMAT_G8_B8R8_2PLANE_420_UNORM** = ``187``

8-bit-per-channel unsigned floating-point green/blue/red channel data with normalized value, stored across 2 separate planes (green + blue/red). Values are in the `[0.0, 1.0]` range. Blue and red channel data is stored at halved horizontal and vertical resolution (i.e. 2×2 adjacent pixels will share the same value for the blue/red channel).

<div id="_class_renderingdevice_constant_data_format_g8_b8_r8_3plane_422_unorm"></div>

[DataFormat](#enum_renderingdevice_dataformat) **DATA_FORMAT_G8_B8_R8_3PLANE_422_UNORM** = ``188``

8-bit-per-channel unsigned floating-point green/blue/red channel data with normalized value, stored across 2 separate planes (green + blue + red). Values are in the `[0.0, 1.0]` range. Blue and red channel data is stored at halved horizontal resolution (i.e. 2 horizontally adjacent pixels will share the same value for the blue/red channel).

<div id="_class_renderingdevice_constant_data_format_g8_b8r8_2plane_422_unorm"></div>

[DataFormat](#enum_renderingdevice_dataformat) **DATA_FORMAT_G8_B8R8_2PLANE_422_UNORM** = ``189``

8-bit-per-channel unsigned floating-point green/blue/red channel data with normalized value, stored across 2 separate planes (green + blue/red). Values are in the `[0.0, 1.0]` range. Blue and red channel data is stored at halved horizontal resolution (i.e. 2 horizontally adjacent pixels will share the same value for the blue/red channel).

<div id="_class_renderingdevice_constant_data_format_g8_b8_r8_3plane_444_unorm"></div>

[DataFormat](#enum_renderingdevice_dataformat) **DATA_FORMAT_G8_B8_R8_3PLANE_444_UNORM** = ``190``

8-bit-per-channel unsigned floating-point green/blue/red channel data with normalized value, stored across 3 separate planes. Values are in the `[0.0, 1.0]` range.

<div id="_class_renderingdevice_constant_data_format_r10x6_unorm_pack16"></div>

[DataFormat](#enum_renderingdevice_dataformat) **DATA_FORMAT_R10X6_UNORM_PACK16** = ``191``

10-bit-per-channel unsigned floating-point red channel data with normalized value, plus 6 unused bits, packed in 16 bits. Values are in the `[0.0, 1.0]` range.

<div id="_class_renderingdevice_constant_data_format_r10x6g10x6_unorm_2pack16"></div>

[DataFormat](#enum_renderingdevice_dataformat) **DATA_FORMAT_R10X6G10X6_UNORM_2PACK16** = ``192``

10-bit-per-channel unsigned floating-point red/green channel data with normalized value, plus 6 unused bits after each channel, packed in 2×16 bits. Values are in the `[0.0, 1.0]` range.

<div id="_class_renderingdevice_constant_data_format_r10x6g10x6b10x6a10x6_unorm_4pack16"></div>

[DataFormat](#enum_renderingdevice_dataformat) **DATA_FORMAT_R10X6G10X6B10X6A10X6_UNORM_4PACK16** = ``193``

10-bit-per-channel unsigned floating-point red/green/blue/alpha channel data with normalized value, plus 6 unused bits after each channel, packed in 4×16 bits. Values are in the `[0.0, 1.0]` range.

<div id="_class_renderingdevice_constant_data_format_g10x6b10x6g10x6r10x6_422_unorm_4pack16"></div>

[DataFormat](#enum_renderingdevice_dataformat) **DATA_FORMAT_G10X6B10X6G10X6R10X6_422_UNORM_4PACK16** = ``194``

10-bit-per-channel unsigned floating-point green/blue/green/red channel data with normalized value, plus 6 unused bits after each channel, packed in 4×16 bits. Values are in the `[0.0, 1.0]` range. Blue and red channel data is stored at halved horizontal resolution (i.e. 2 horizontally adjacent pixels will share the same value for the blue/red channel). The green channel is listed twice, but contains different values to allow it to be represented at full resolution.

<div id="_class_renderingdevice_constant_data_format_b10x6g10x6r10x6g10x6_422_unorm_4pack16"></div>

[DataFormat](#enum_renderingdevice_dataformat) **DATA_FORMAT_B10X6G10X6R10X6G10X6_422_UNORM_4PACK16** = ``195``

10-bit-per-channel unsigned floating-point blue/green/red/green channel data with normalized value, plus 6 unused bits after each channel, packed in 4×16 bits. Values are in the `[0.0, 1.0]` range. Blue and red channel data is stored at halved horizontal resolution (i.e. 2 horizontally adjacent pixels will share the same value for the blue/red channel). The green channel is listed twice, but contains different values to allow it to be represented at full resolution.

<div id="_class_renderingdevice_constant_data_format_g10x6_b10x6_r10x6_3plane_420_unorm_3pack16"></div>

[DataFormat](#enum_renderingdevice_dataformat) **DATA_FORMAT_G10X6_B10X6_R10X6_3PLANE_420_UNORM_3PACK16** = ``196``

10-bit-per-channel unsigned floating-point green/blue/red channel data with normalized value, plus 6 unused bits after each channel. Packed in 3×16 bits and stored across 2 separate planes (green + blue + red). Values are in the `[0.0, 1.0]` range. Blue and red channel data is stored at halved horizontal and vertical resolution (i.e. 2×2 adjacent pixels will share the same value for the blue/red channel).

<div id="_class_renderingdevice_constant_data_format_g10x6_b10x6r10x6_2plane_420_unorm_3pack16"></div>

[DataFormat](#enum_renderingdevice_dataformat) **DATA_FORMAT_G10X6_B10X6R10X6_2PLANE_420_UNORM_3PACK16** = ``197``

10-bit-per-channel unsigned floating-point green/blue/red channel data with normalized value, plus 6 unused bits after each channel. Packed in 3×16 bits and stored across 2 separate planes (green + blue/red). Values are in the `[0.0, 1.0]` range. Blue and red channel data is stored at halved horizontal and vertical resolution (i.e. 2×2 adjacent pixels will share the same value for the blue/red channel).

<div id="_class_renderingdevice_constant_data_format_g10x6_b10x6_r10x6_3plane_422_unorm_3pack16"></div>

[DataFormat](#enum_renderingdevice_dataformat) **DATA_FORMAT_G10X6_B10X6_R10X6_3PLANE_422_UNORM_3PACK16** = ``198``

10-bit-per-channel unsigned floating-point green/blue/red channel data with normalized value, plus 6 unused bits after each channel. Packed in 3×16 bits and stored across 3 separate planes (green + blue + red). Values are in the `[0.0, 1.0]` range. Blue and red channel data is stored at halved horizontal resolution (i.e. 2 horizontally adjacent pixels will share the same value for the blue/red channel).

<div id="_class_renderingdevice_constant_data_format_g10x6_b10x6r10x6_2plane_422_unorm_3pack16"></div>

[DataFormat](#enum_renderingdevice_dataformat) **DATA_FORMAT_G10X6_B10X6R10X6_2PLANE_422_UNORM_3PACK16** = ``199``

10-bit-per-channel unsigned floating-point green/blue/red channel data with normalized value, plus 6 unused bits after each channel. Packed in 3×16 bits and stored across 3 separate planes (green + blue/red). Values are in the `[0.0, 1.0]` range. Blue and red channel data is stored at halved horizontal resolution (i.e. 2 horizontally adjacent pixels will share the same value for the blue/red channel).

<div id="_class_renderingdevice_constant_data_format_g10x6_b10x6_r10x6_3plane_444_unorm_3pack16"></div>

[DataFormat](#enum_renderingdevice_dataformat) **DATA_FORMAT_G10X6_B10X6_R10X6_3PLANE_444_UNORM_3PACK16** = ``200``

10-bit-per-channel unsigned floating-point green/blue/red channel data with normalized value, plus 6 unused bits after each channel. Packed in 3×16 bits and stored across 3 separate planes (green + blue + red). Values are in the `[0.0, 1.0]` range.

<div id="_class_renderingdevice_constant_data_format_r12x4_unorm_pack16"></div>

[DataFormat](#enum_renderingdevice_dataformat) **DATA_FORMAT_R12X4_UNORM_PACK16** = ``201``

12-bit-per-channel unsigned floating-point red channel data with normalized value, plus 6 unused bits, packed in 16 bits. Values are in the `[0.0, 1.0]` range.

<div id="_class_renderingdevice_constant_data_format_r12x4g12x4_unorm_2pack16"></div>

[DataFormat](#enum_renderingdevice_dataformat) **DATA_FORMAT_R12X4G12X4_UNORM_2PACK16** = ``202``

12-bit-per-channel unsigned floating-point red/green channel data with normalized value, plus 6 unused bits after each channel, packed in 2×16 bits. Values are in the `[0.0, 1.0]` range.

<div id="_class_renderingdevice_constant_data_format_r12x4g12x4b12x4a12x4_unorm_4pack16"></div>

[DataFormat](#enum_renderingdevice_dataformat) **DATA_FORMAT_R12X4G12X4B12X4A12X4_UNORM_4PACK16** = ``203``

12-bit-per-channel unsigned floating-point red/green/blue/alpha channel data with normalized value, plus 6 unused bits after each channel, packed in 4×16 bits. Values are in the `[0.0, 1.0]` range.

<div id="_class_renderingdevice_constant_data_format_g12x4b12x4g12x4r12x4_422_unorm_4pack16"></div>

[DataFormat](#enum_renderingdevice_dataformat) **DATA_FORMAT_G12X4B12X4G12X4R12X4_422_UNORM_4PACK16** = ``204``

12-bit-per-channel unsigned floating-point green/blue/green/red channel data with normalized value, plus 6 unused bits after each channel, packed in 4×16 bits. Values are in the `[0.0, 1.0]` range. Blue and red channel data is stored at halved horizontal resolution (i.e. 2 horizontally adjacent pixels will share the same value for the blue/red channel). The green channel is listed twice, but contains different values to allow it to be represented at full resolution.

<div id="_class_renderingdevice_constant_data_format_b12x4g12x4r12x4g12x4_422_unorm_4pack16"></div>

[DataFormat](#enum_renderingdevice_dataformat) **DATA_FORMAT_B12X4G12X4R12X4G12X4_422_UNORM_4PACK16** = ``205``

12-bit-per-channel unsigned floating-point blue/green/red/green channel data with normalized value, plus 6 unused bits after each channel, packed in 4×16 bits. Values are in the `[0.0, 1.0]` range. Blue and red channel data is stored at halved horizontal resolution (i.e. 2 horizontally adjacent pixels will share the same value for the blue/red channel). The green channel is listed twice, but contains different values to allow it to be represented at full resolution.

<div id="_class_renderingdevice_constant_data_format_g12x4_b12x4_r12x4_3plane_420_unorm_3pack16"></div>

[DataFormat](#enum_renderingdevice_dataformat) **DATA_FORMAT_G12X4_B12X4_R12X4_3PLANE_420_UNORM_3PACK16** = ``206``

12-bit-per-channel unsigned floating-point green/blue/red channel data with normalized value, plus 6 unused bits after each channel. Packed in 3×16 bits and stored across 2 separate planes (green + blue + red). Values are in the `[0.0, 1.0]` range. Blue and red channel data is stored at halved horizontal and vertical resolution (i.e. 2×2 adjacent pixels will share the same value for the blue/red channel).

<div id="_class_renderingdevice_constant_data_format_g12x4_b12x4r12x4_2plane_420_unorm_3pack16"></div>

[DataFormat](#enum_renderingdevice_dataformat) **DATA_FORMAT_G12X4_B12X4R12X4_2PLANE_420_UNORM_3PACK16** = ``207``

12-bit-per-channel unsigned floating-point green/blue/red channel data with normalized value, plus 6 unused bits after each channel. Packed in 3×16 bits and stored across 2 separate planes (green + blue/red). Values are in the `[0.0, 1.0]` range. Blue and red channel data is stored at halved horizontal and vertical resolution (i.e. 2×2 adjacent pixels will share the same value for the blue/red channel).

<div id="_class_renderingdevice_constant_data_format_g12x4_b12x4_r12x4_3plane_422_unorm_3pack16"></div>

[DataFormat](#enum_renderingdevice_dataformat) **DATA_FORMAT_G12X4_B12X4_R12X4_3PLANE_422_UNORM_3PACK16** = ``208``

12-bit-per-channel unsigned floating-point green/blue/red channel data with normalized value, plus 6 unused bits after each channel. Packed in 3×16 bits and stored across 3 separate planes (green + blue + red). Values are in the `[0.0, 1.0]` range. Blue and red channel data is stored at halved horizontal resolution (i.e. 2 horizontally adjacent pixels will share the same value for the blue/red channel).

<div id="_class_renderingdevice_constant_data_format_g12x4_b12x4r12x4_2plane_422_unorm_3pack16"></div>

[DataFormat](#enum_renderingdevice_dataformat) **DATA_FORMAT_G12X4_B12X4R12X4_2PLANE_422_UNORM_3PACK16** = ``209``

12-bit-per-channel unsigned floating-point green/blue/red channel data with normalized value, plus 6 unused bits after each channel. Packed in 3×16 bits and stored across 3 separate planes (green + blue/red). Values are in the `[0.0, 1.0]` range. Blue and red channel data is stored at halved horizontal resolution (i.e. 2 horizontally adjacent pixels will share the same value for the blue/red channel).

<div id="_class_renderingdevice_constant_data_format_g12x4_b12x4_r12x4_3plane_444_unorm_3pack16"></div>

[DataFormat](#enum_renderingdevice_dataformat) **DATA_FORMAT_G12X4_B12X4_R12X4_3PLANE_444_UNORM_3PACK16** = ``210``

12-bit-per-channel unsigned floating-point green/blue/red channel data with normalized value, plus 6 unused bits after each channel. Packed in 3×16 bits and stored across 3 separate planes (green + blue + red). Values are in the `[0.0, 1.0]` range.

<div id="_class_renderingdevice_constant_data_format_g16b16g16r16_422_unorm"></div>

[DataFormat](#enum_renderingdevice_dataformat) **DATA_FORMAT_G16B16G16R16_422_UNORM** = ``211``

16-bit-per-channel unsigned floating-point green/blue/red channel data format with normalized value. Values are in the `[0.0, 1.0]` range. Blue and red channel data is stored at halved horizontal resolution (i.e. 2 horizontally adjacent pixels will share the same value for the blue/red channel).

<div id="_class_renderingdevice_constant_data_format_b16g16r16g16_422_unorm"></div>

[DataFormat](#enum_renderingdevice_dataformat) **DATA_FORMAT_B16G16R16G16_422_UNORM** = ``212``

16-bit-per-channel unsigned floating-point blue/green/red channel data format with normalized value. Values are in the `[0.0, 1.0]` range. Blue and red channel data is stored at halved horizontal resolution (i.e. 2 horizontally adjacent pixels will share the same value for the blue/red channel).

<div id="_class_renderingdevice_constant_data_format_g16_b16_r16_3plane_420_unorm"></div>

[DataFormat](#enum_renderingdevice_dataformat) **DATA_FORMAT_G16_B16_R16_3PLANE_420_UNORM** = ``213``

16-bit-per-channel unsigned floating-point green/blue/red channel data with normalized value, plus 6 unused bits after each channel. Stored across 2 separate planes (green + blue + red). Values are in the `[0.0, 1.0]` range. Blue and red channel data is stored at halved horizontal and vertical resolution (i.e. 2×2 adjacent pixels will share the same value for the blue/red channel).

<div id="_class_renderingdevice_constant_data_format_g16_b16r16_2plane_420_unorm"></div>

[DataFormat](#enum_renderingdevice_dataformat) **DATA_FORMAT_G16_B16R16_2PLANE_420_UNORM** = ``214``

16-bit-per-channel unsigned floating-point green/blue/red channel data with normalized value, plus 6 unused bits after each channel. Stored across 2 separate planes (green + blue/red). Values are in the `[0.0, 1.0]` range. Blue and red channel data is stored at halved horizontal and vertical resolution (i.e. 2×2 adjacent pixels will share the same value for the blue/red channel).

<div id="_class_renderingdevice_constant_data_format_g16_b16_r16_3plane_422_unorm"></div>

[DataFormat](#enum_renderingdevice_dataformat) **DATA_FORMAT_G16_B16_R16_3PLANE_422_UNORM** = ``215``

16-bit-per-channel unsigned floating-point green/blue/red channel data with normalized value, plus 6 unused bits after each channel. Stored across 3 separate planes (green + blue + red). Values are in the `[0.0, 1.0]` range. Blue and red channel data is stored at halved horizontal resolution (i.e. 2 horizontally adjacent pixels will share the same value for the blue/red channel).

<div id="_class_renderingdevice_constant_data_format_g16_b16r16_2plane_422_unorm"></div>

[DataFormat](#enum_renderingdevice_dataformat) **DATA_FORMAT_G16_B16R16_2PLANE_422_UNORM** = ``216``

16-bit-per-channel unsigned floating-point green/blue/red channel data with normalized value, plus 6 unused bits after each channel. Stored across 3 separate planes (green + blue/red). Values are in the `[0.0, 1.0]` range. Blue and red channel data is stored at halved horizontal resolution (i.e. 2 horizontally adjacent pixels will share the same value for the blue/red channel).

<div id="_class_renderingdevice_constant_data_format_g16_b16_r16_3plane_444_unorm"></div>

[DataFormat](#enum_renderingdevice_dataformat) **DATA_FORMAT_G16_B16_R16_3PLANE_444_UNORM** = ``217``

16-bit-per-channel unsigned floating-point green/blue/red channel data with normalized value, plus 6 unused bits after each channel. Stored across 3 separate planes (green + blue + red). Values are in the `[0.0, 1.0]` range.

<div id="_class_renderingdevice_constant_data_format_max"></div>

[DataFormat](#enum_renderingdevice_dataformat) **DATA_FORMAT_MAX** = ``218``

Represents the size of the [DataFormat](#enum_renderingdevice_dataformat) enum.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_enum_renderingdevice_barriermask"></div>

flags **BarrierMask**: <div id="enum_renderingdevice_barriermask"></div>

<div id="_class_renderingdevice_constant_barrier_mask_vertex"></div>

[BarrierMask](#enum_renderingdevice_barriermask) **BARRIER_MASK_VERTEX** = ``1``

Vertex shader barrier mask.

<div id="_class_renderingdevice_constant_barrier_mask_fragment"></div>

[BarrierMask](#enum_renderingdevice_barriermask) **BARRIER_MASK_FRAGMENT** = ``8``

Fragment shader barrier mask.

<div id="_class_renderingdevice_constant_barrier_mask_compute"></div>

[BarrierMask](#enum_renderingdevice_barriermask) **BARRIER_MASK_COMPUTE** = ``2``

Compute barrier mask.

<div id="_class_renderingdevice_constant_barrier_mask_transfer"></div>

[BarrierMask](#enum_renderingdevice_barriermask) **BARRIER_MASK_TRANSFER** = ``4``

Transfer barrier mask.

<div id="_class_renderingdevice_constant_barrier_mask_raster"></div>

[BarrierMask](#enum_renderingdevice_barriermask) **BARRIER_MASK_RASTER** = ``9``

Raster barrier mask (vertex and fragment). Equivalent to `BARRIER_MASK_VERTEX | BARRIER_MASK_FRAGMENT`.

<div id="_class_renderingdevice_constant_barrier_mask_all_barriers"></div>

[BarrierMask](#enum_renderingdevice_barriermask) **BARRIER_MASK_ALL_BARRIERS** = ``32767``

Barrier mask for all types (vertex, fragment, compute, transfer).

<div id="_class_renderingdevice_constant_barrier_mask_no_barrier"></div>

[BarrierMask](#enum_renderingdevice_barriermask) **BARRIER_MASK_NO_BARRIER** = ``32768``

No barrier for any type.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_enum_renderingdevice_texturetype"></div>

enum **TextureType**: <div id="enum_renderingdevice_texturetype"></div>

<div id="_class_renderingdevice_constant_texture_type_1d"></div>

[TextureType](#enum_renderingdevice_texturetype) **TEXTURE_TYPE_1D** = ``0``

1-dimensional texture.

<div id="_class_renderingdevice_constant_texture_type_2d"></div>

[TextureType](#enum_renderingdevice_texturetype) **TEXTURE_TYPE_2D** = ``1``

2-dimensional texture.

<div id="_class_renderingdevice_constant_texture_type_3d"></div>

[TextureType](#enum_renderingdevice_texturetype) **TEXTURE_TYPE_3D** = ``2``

3-dimensional texture.

<div id="_class_renderingdevice_constant_texture_type_cube"></div>

[TextureType](#enum_renderingdevice_texturetype) **TEXTURE_TYPE_CUBE** = ``3``

[`Cubemap`](class_cubemap.md) texture.

<div id="_class_renderingdevice_constant_texture_type_1d_array"></div>

[TextureType](#enum_renderingdevice_texturetype) **TEXTURE_TYPE_1D_ARRAY** = ``4``

Array of 1-dimensional textures.

<div id="_class_renderingdevice_constant_texture_type_2d_array"></div>

[TextureType](#enum_renderingdevice_texturetype) **TEXTURE_TYPE_2D_ARRAY** = ``5``

Array of 2-dimensional textures.

<div id="_class_renderingdevice_constant_texture_type_cube_array"></div>

[TextureType](#enum_renderingdevice_texturetype) **TEXTURE_TYPE_CUBE_ARRAY** = ``6``

Array of [`Cubemap`](class_cubemap.md) textures.

<div id="_class_renderingdevice_constant_texture_type_max"></div>

[TextureType](#enum_renderingdevice_texturetype) **TEXTURE_TYPE_MAX** = ``7``

Represents the size of the [TextureType](#enum_renderingdevice_texturetype) enum.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_enum_renderingdevice_texturesamples"></div>

enum **TextureSamples**: <div id="enum_renderingdevice_texturesamples"></div>

<div id="_class_renderingdevice_constant_texture_samples_1"></div>

[TextureSamples](#enum_renderingdevice_texturesamples) **TEXTURE_SAMPLES_1** = ``0``

Perform 1 texture sample (this is the fastest but lowest-quality for antialiasing).

<div id="_class_renderingdevice_constant_texture_samples_2"></div>

[TextureSamples](#enum_renderingdevice_texturesamples) **TEXTURE_SAMPLES_2** = ``1``

Perform 2 texture samples.

<div id="_class_renderingdevice_constant_texture_samples_4"></div>

[TextureSamples](#enum_renderingdevice_texturesamples) **TEXTURE_SAMPLES_4** = ``2``

Perform 4 texture samples.

<div id="_class_renderingdevice_constant_texture_samples_8"></div>

[TextureSamples](#enum_renderingdevice_texturesamples) **TEXTURE_SAMPLES_8** = ``3``

Perform 8 texture samples. Not supported on mobile GPUs (including Apple Silicon).

<div id="_class_renderingdevice_constant_texture_samples_16"></div>

[TextureSamples](#enum_renderingdevice_texturesamples) **TEXTURE_SAMPLES_16** = ``4``

Perform 16 texture samples. Not supported on mobile GPUs and many desktop GPUs.

<div id="_class_renderingdevice_constant_texture_samples_32"></div>

[TextureSamples](#enum_renderingdevice_texturesamples) **TEXTURE_SAMPLES_32** = ``5``

Perform 32 texture samples. Not supported on most GPUs.

<div id="_class_renderingdevice_constant_texture_samples_64"></div>

[TextureSamples](#enum_renderingdevice_texturesamples) **TEXTURE_SAMPLES_64** = ``6``

Perform 64 texture samples (this is the slowest but highest-quality for antialiasing). Not supported on most GPUs.

<div id="_class_renderingdevice_constant_texture_samples_max"></div>

[TextureSamples](#enum_renderingdevice_texturesamples) **TEXTURE_SAMPLES_MAX** = ``7``

Represents the size of the [TextureSamples](#enum_renderingdevice_texturesamples) enum.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_enum_renderingdevice_textureusagebits"></div>

flags **TextureUsageBits**: <div id="enum_renderingdevice_textureusagebits"></div>

<div id="_class_renderingdevice_constant_texture_usage_sampling_bit"></div>

[TextureUsageBits](#enum_renderingdevice_textureusagebits) **TEXTURE_USAGE_SAMPLING_BIT** = ``1``

Texture can be sampled.

<div id="_class_renderingdevice_constant_texture_usage_color_attachment_bit"></div>

[TextureUsageBits](#enum_renderingdevice_textureusagebits) **TEXTURE_USAGE_COLOR_ATTACHMENT_BIT** = ``2``

Texture can be used as a color attachment in a framebuffer.

<div id="_class_renderingdevice_constant_texture_usage_depth_stencil_attachment_bit"></div>

[TextureUsageBits](#enum_renderingdevice_textureusagebits) **TEXTURE_USAGE_DEPTH_STENCIL_ATTACHMENT_BIT** = ``4``

Texture can be used as a depth/stencil attachment in a framebuffer.

<div id="_class_renderingdevice_constant_texture_usage_storage_bit"></div>

[TextureUsageBits](#enum_renderingdevice_textureusagebits) **TEXTURE_USAGE_STORAGE_BIT** = ``8``

Texture can be used as a [*storage image*](https://registry.khronos.org/vulkan/specs/1.3-extensions/html/vkspec.html#descriptorsets-storageimage).

<div id="_class_renderingdevice_constant_texture_usage_storage_atomic_bit"></div>

[TextureUsageBits](#enum_renderingdevice_textureusagebits) **TEXTURE_USAGE_STORAGE_ATOMIC_BIT** = ``16``

Texture can be used as a [*storage image*](https://registry.khronos.org/vulkan/specs/1.3-extensions/html/vkspec.html#descriptorsets-storageimage) with support for atomic operations.

<div id="_class_renderingdevice_constant_texture_usage_cpu_read_bit"></div>

[TextureUsageBits](#enum_renderingdevice_textureusagebits) **TEXTURE_USAGE_CPU_READ_BIT** = ``32``

Texture can be read back on the CPU using [`texture_get_data`](#class_renderingdevice_method_texture_get_data) faster than without this bit, since it is always kept in the system memory.

<div id="_class_renderingdevice_constant_texture_usage_can_update_bit"></div>

[TextureUsageBits](#enum_renderingdevice_textureusagebits) **TEXTURE_USAGE_CAN_UPDATE_BIT** = ``64``

Texture can be updated using [`texture_update`](#class_renderingdevice_method_texture_update).

<div id="_class_renderingdevice_constant_texture_usage_can_copy_from_bit"></div>

[TextureUsageBits](#enum_renderingdevice_textureusagebits) **TEXTURE_USAGE_CAN_COPY_FROM_BIT** = ``128``

Texture can be a source for [`texture_copy`](#class_renderingdevice_method_texture_copy).

<div id="_class_renderingdevice_constant_texture_usage_can_copy_to_bit"></div>

[TextureUsageBits](#enum_renderingdevice_textureusagebits) **TEXTURE_USAGE_CAN_COPY_TO_BIT** = ``256``

Texture can be a destination for [`texture_copy`](#class_renderingdevice_method_texture_copy).

<div id="_class_renderingdevice_constant_texture_usage_input_attachment_bit"></div>

[TextureUsageBits](#enum_renderingdevice_textureusagebits) **TEXTURE_USAGE_INPUT_ATTACHMENT_BIT** = ``512``

Texture can be used as a [*input attachment*](https://registry.khronos.org/vulkan/specs/1.3-extensions/html/vkspec.html#descriptorsets-inputattachment) in a framebuffer.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_enum_renderingdevice_textureswizzle"></div>

enum **TextureSwizzle**: <div id="enum_renderingdevice_textureswizzle"></div>

<div id="_class_renderingdevice_constant_texture_swizzle_identity"></div>

[TextureSwizzle](#enum_renderingdevice_textureswizzle) **TEXTURE_SWIZZLE_IDENTITY** = ``0``

Return the sampled value as-is.

<div id="_class_renderingdevice_constant_texture_swizzle_zero"></div>

[TextureSwizzle](#enum_renderingdevice_textureswizzle) **TEXTURE_SWIZZLE_ZERO** = ``1``

Always return `0.0` when sampling.

<div id="_class_renderingdevice_constant_texture_swizzle_one"></div>

[TextureSwizzle](#enum_renderingdevice_textureswizzle) **TEXTURE_SWIZZLE_ONE** = ``2``

Always return `1.0` when sampling.

<div id="_class_renderingdevice_constant_texture_swizzle_r"></div>

[TextureSwizzle](#enum_renderingdevice_textureswizzle) **TEXTURE_SWIZZLE_R** = ``3``

Sample the red color channel.

<div id="_class_renderingdevice_constant_texture_swizzle_g"></div>

[TextureSwizzle](#enum_renderingdevice_textureswizzle) **TEXTURE_SWIZZLE_G** = ``4``

Sample the green color channel.

<div id="_class_renderingdevice_constant_texture_swizzle_b"></div>

[TextureSwizzle](#enum_renderingdevice_textureswizzle) **TEXTURE_SWIZZLE_B** = ``5``

Sample the blue color channel.

<div id="_class_renderingdevice_constant_texture_swizzle_a"></div>

[TextureSwizzle](#enum_renderingdevice_textureswizzle) **TEXTURE_SWIZZLE_A** = ``6``

Sample the alpha channel.

<div id="_class_renderingdevice_constant_texture_swizzle_max"></div>

[TextureSwizzle](#enum_renderingdevice_textureswizzle) **TEXTURE_SWIZZLE_MAX** = ``7``

Represents the size of the [TextureSwizzle](#enum_renderingdevice_textureswizzle) enum.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_enum_renderingdevice_textureslicetype"></div>

enum **TextureSliceType**: <div id="enum_renderingdevice_textureslicetype"></div>

<div id="_class_renderingdevice_constant_texture_slice_2d"></div>

[TextureSliceType](#enum_renderingdevice_textureslicetype) **TEXTURE_SLICE_2D** = ``0``

2-dimensional texture slice.

<div id="_class_renderingdevice_constant_texture_slice_cubemap"></div>

[TextureSliceType](#enum_renderingdevice_textureslicetype) **TEXTURE_SLICE_CUBEMAP** = ``1``

Cubemap texture slice.

<div id="_class_renderingdevice_constant_texture_slice_3d"></div>

[TextureSliceType](#enum_renderingdevice_textureslicetype) **TEXTURE_SLICE_3D** = ``2``

3-dimensional texture slice.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_enum_renderingdevice_samplerfilter"></div>

enum **SamplerFilter**: <div id="enum_renderingdevice_samplerfilter"></div>

<div id="_class_renderingdevice_constant_sampler_filter_nearest"></div>

[SamplerFilter](#enum_renderingdevice_samplerfilter) **SAMPLER_FILTER_NEAREST** = ``0``

Nearest-neighbor sampler filtering. Sampling at higher resolutions than the source will result in a pixelated look.

<div id="_class_renderingdevice_constant_sampler_filter_linear"></div>

[SamplerFilter](#enum_renderingdevice_samplerfilter) **SAMPLER_FILTER_LINEAR** = ``1``

Bilinear sampler filtering. Sampling at higher resolutions than the source will result in a blurry look.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_enum_renderingdevice_samplerrepeatmode"></div>

enum **SamplerRepeatMode**: <div id="enum_renderingdevice_samplerrepeatmode"></div>

<div id="_class_renderingdevice_constant_sampler_repeat_mode_repeat"></div>

[SamplerRepeatMode](#enum_renderingdevice_samplerrepeatmode) **SAMPLER_REPEAT_MODE_REPEAT** = ``0``

Sample with repeating enabled.

<div id="_class_renderingdevice_constant_sampler_repeat_mode_mirrored_repeat"></div>

[SamplerRepeatMode](#enum_renderingdevice_samplerrepeatmode) **SAMPLER_REPEAT_MODE_MIRRORED_REPEAT** = ``1``

Sample with mirrored repeating enabled. When sampling outside the `[0.0, 1.0]` range, return a mirrored version of the sampler. This mirrored version is mirrored again if sampling further away, with the pattern repeating indefinitely.

<div id="_class_renderingdevice_constant_sampler_repeat_mode_clamp_to_edge"></div>

[SamplerRepeatMode](#enum_renderingdevice_samplerrepeatmode) **SAMPLER_REPEAT_MODE_CLAMP_TO_EDGE** = ``2``

Sample with repeating disabled. When sampling outside the `[0.0, 1.0]` range, return the color of the last pixel on the edge.

<div id="_class_renderingdevice_constant_sampler_repeat_mode_clamp_to_border"></div>

[SamplerRepeatMode](#enum_renderingdevice_samplerrepeatmode) **SAMPLER_REPEAT_MODE_CLAMP_TO_BORDER** = ``3``

Sample with repeating disabled. When sampling outside the `[0.0, 1.0]` range, return the specified [`RDSamplerState.border_color`](#class_rdsamplerstate_property_border_color).

<div id="_class_renderingdevice_constant_sampler_repeat_mode_mirror_clamp_to_edge"></div>

[SamplerRepeatMode](#enum_renderingdevice_samplerrepeatmode) **SAMPLER_REPEAT_MODE_MIRROR_CLAMP_TO_EDGE** = ``4``

Sample with mirrored repeating enabled, but only once. When sampling in the `[-1.0, 0.0]` range, return a mirrored version of the sampler. When sampling outside the `[-1.0, 1.0]` range, return the color of the last pixel on the edge.

<div id="_class_renderingdevice_constant_sampler_repeat_mode_max"></div>

[SamplerRepeatMode](#enum_renderingdevice_samplerrepeatmode) **SAMPLER_REPEAT_MODE_MAX** = ``5``

Represents the size of the [SamplerRepeatMode](#enum_renderingdevice_samplerrepeatmode) enum.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_enum_renderingdevice_samplerbordercolor"></div>

enum **SamplerBorderColor**: <div id="enum_renderingdevice_samplerbordercolor"></div>

<div id="_class_renderingdevice_constant_sampler_border_color_float_transparent_black"></div>

[SamplerBorderColor](#enum_renderingdevice_samplerbordercolor) **SAMPLER_BORDER_COLOR_FLOAT_TRANSPARENT_BLACK** = ``0``

Return a floating-point transparent black color when sampling outside the `[0.0, 1.0]` range. Only effective if the sampler repeat mode is [`SAMPLER_REPEAT_MODE_CLAMP_TO_BORDER`](#class_renderingdevice_constant_sampler_repeat_mode_clamp_to_border).

<div id="_class_renderingdevice_constant_sampler_border_color_int_transparent_black"></div>

[SamplerBorderColor](#enum_renderingdevice_samplerbordercolor) **SAMPLER_BORDER_COLOR_INT_TRANSPARENT_BLACK** = ``1``

Return a integer transparent black color when sampling outside the `[0.0, 1.0]` range. Only effective if the sampler repeat mode is [`SAMPLER_REPEAT_MODE_CLAMP_TO_BORDER`](#class_renderingdevice_constant_sampler_repeat_mode_clamp_to_border).

<div id="_class_renderingdevice_constant_sampler_border_color_float_opaque_black"></div>

[SamplerBorderColor](#enum_renderingdevice_samplerbordercolor) **SAMPLER_BORDER_COLOR_FLOAT_OPAQUE_BLACK** = ``2``

Return a floating-point opaque black color when sampling outside the `[0.0, 1.0]` range. Only effective if the sampler repeat mode is [`SAMPLER_REPEAT_MODE_CLAMP_TO_BORDER`](#class_renderingdevice_constant_sampler_repeat_mode_clamp_to_border).

<div id="_class_renderingdevice_constant_sampler_border_color_int_opaque_black"></div>

[SamplerBorderColor](#enum_renderingdevice_samplerbordercolor) **SAMPLER_BORDER_COLOR_INT_OPAQUE_BLACK** = ``3``

Return a integer opaque black color when sampling outside the `[0.0, 1.0]` range. Only effective if the sampler repeat mode is [`SAMPLER_REPEAT_MODE_CLAMP_TO_BORDER`](#class_renderingdevice_constant_sampler_repeat_mode_clamp_to_border).

<div id="_class_renderingdevice_constant_sampler_border_color_float_opaque_white"></div>

[SamplerBorderColor](#enum_renderingdevice_samplerbordercolor) **SAMPLER_BORDER_COLOR_FLOAT_OPAQUE_WHITE** = ``4``

Return a floating-point opaque white color when sampling outside the `[0.0, 1.0]` range. Only effective if the sampler repeat mode is [`SAMPLER_REPEAT_MODE_CLAMP_TO_BORDER`](#class_renderingdevice_constant_sampler_repeat_mode_clamp_to_border).

<div id="_class_renderingdevice_constant_sampler_border_color_int_opaque_white"></div>

[SamplerBorderColor](#enum_renderingdevice_samplerbordercolor) **SAMPLER_BORDER_COLOR_INT_OPAQUE_WHITE** = ``5``

Return a integer opaque white color when sampling outside the `[0.0, 1.0]` range. Only effective if the sampler repeat mode is [`SAMPLER_REPEAT_MODE_CLAMP_TO_BORDER`](#class_renderingdevice_constant_sampler_repeat_mode_clamp_to_border).

<div id="_class_renderingdevice_constant_sampler_border_color_max"></div>

[SamplerBorderColor](#enum_renderingdevice_samplerbordercolor) **SAMPLER_BORDER_COLOR_MAX** = ``6``

Represents the size of the [SamplerBorderColor](#enum_renderingdevice_samplerbordercolor) enum.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_enum_renderingdevice_vertexfrequency"></div>

enum **VertexFrequency**: <div id="enum_renderingdevice_vertexfrequency"></div>

<div id="_class_renderingdevice_constant_vertex_frequency_vertex"></div>

[VertexFrequency](#enum_renderingdevice_vertexfrequency) **VERTEX_FREQUENCY_VERTEX** = ``0``

Vertex attribute addressing is a function of the vertex. This is used to specify the rate at which vertex attributes are pulled from buffers.

<div id="_class_renderingdevice_constant_vertex_frequency_instance"></div>

[VertexFrequency](#enum_renderingdevice_vertexfrequency) **VERTEX_FREQUENCY_INSTANCE** = ``1``

Vertex attribute addressing is a function of the instance index. This is used to specify the rate at which vertex attributes are pulled from buffers.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_enum_renderingdevice_indexbufferformat"></div>

enum **IndexBufferFormat**: <div id="enum_renderingdevice_indexbufferformat"></div>

<div id="_class_renderingdevice_constant_index_buffer_format_uint16"></div>

[IndexBufferFormat](#enum_renderingdevice_indexbufferformat) **INDEX_BUFFER_FORMAT_UINT16** = ``0``

Index buffer in 16-bit unsigned integer format. This limits the maximum index that can be specified to `65535`.

<div id="_class_renderingdevice_constant_index_buffer_format_uint32"></div>

[IndexBufferFormat](#enum_renderingdevice_indexbufferformat) **INDEX_BUFFER_FORMAT_UINT32** = ``1``

Index buffer in 32-bit unsigned integer format. This limits the maximum index that can be specified to `4294967295`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_enum_renderingdevice_storagebufferusage"></div>

flags **StorageBufferUsage**: <div id="enum_renderingdevice_storagebufferusage"></div>

<div id="_class_renderingdevice_constant_storage_buffer_usage_dispatch_indirect"></div>

[StorageBufferUsage](#enum_renderingdevice_storagebufferusage) **STORAGE_BUFFER_USAGE_DISPATCH_INDIRECT** = ``1``

该枚举目前没有描述，请帮我们\ :ref:`贡献一个 <doc_updating_the_class_reference>`\ 吧！



<!-- rst-class:: classref-item-separator -->

---

<div id="_class_enum_renderingdevice_uniformtype"></div>

enum **UniformType**: <div id="enum_renderingdevice_uniformtype"></div>

<div id="_class_renderingdevice_constant_uniform_type_sampler"></div>

[UniformType](#enum_renderingdevice_uniformtype) **UNIFORM_TYPE_SAMPLER** = ``0``

Sampler uniform.

<div id="_class_renderingdevice_constant_uniform_type_sampler_with_texture"></div>

[UniformType](#enum_renderingdevice_uniformtype) **UNIFORM_TYPE_SAMPLER_WITH_TEXTURE** = ``1``

Sampler uniform with a texture.

<div id="_class_renderingdevice_constant_uniform_type_texture"></div>

[UniformType](#enum_renderingdevice_uniformtype) **UNIFORM_TYPE_TEXTURE** = ``2``

Texture uniform.

<div id="_class_renderingdevice_constant_uniform_type_image"></div>

[UniformType](#enum_renderingdevice_uniformtype) **UNIFORM_TYPE_IMAGE** = ``3``

Image uniform.

<div id="_class_renderingdevice_constant_uniform_type_texture_buffer"></div>

[UniformType](#enum_renderingdevice_uniformtype) **UNIFORM_TYPE_TEXTURE_BUFFER** = ``4``

Texture buffer uniform.

<div id="_class_renderingdevice_constant_uniform_type_sampler_with_texture_buffer"></div>

[UniformType](#enum_renderingdevice_uniformtype) **UNIFORM_TYPE_SAMPLER_WITH_TEXTURE_BUFFER** = ``5``

Sampler uniform with a texture buffer.

<div id="_class_renderingdevice_constant_uniform_type_image_buffer"></div>

[UniformType](#enum_renderingdevice_uniformtype) **UNIFORM_TYPE_IMAGE_BUFFER** = ``6``

Image buffer uniform.

<div id="_class_renderingdevice_constant_uniform_type_uniform_buffer"></div>

[UniformType](#enum_renderingdevice_uniformtype) **UNIFORM_TYPE_UNIFORM_BUFFER** = ``7``

Uniform buffer uniform.

<div id="_class_renderingdevice_constant_uniform_type_storage_buffer"></div>

[UniformType](#enum_renderingdevice_uniformtype) **UNIFORM_TYPE_STORAGE_BUFFER** = ``8``

[*Storage buffer*](https://vkguide.dev/docs/chapter-4/storage_buffers/) uniform.

<div id="_class_renderingdevice_constant_uniform_type_input_attachment"></div>

[UniformType](#enum_renderingdevice_uniformtype) **UNIFORM_TYPE_INPUT_ATTACHMENT** = ``9``

Input attachment uniform.

<div id="_class_renderingdevice_constant_uniform_type_max"></div>

[UniformType](#enum_renderingdevice_uniformtype) **UNIFORM_TYPE_MAX** = ``10``

Represents the size of the [UniformType](#enum_renderingdevice_uniformtype) enum.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_enum_renderingdevice_renderprimitive"></div>

enum **RenderPrimitive**: <div id="enum_renderingdevice_renderprimitive"></div>

<div id="_class_renderingdevice_constant_render_primitive_points"></div>

[RenderPrimitive](#enum_renderingdevice_renderprimitive) **RENDER_PRIMITIVE_POINTS** = ``0``

Point rendering primitive (with constant size, regardless of distance from camera).

<div id="_class_renderingdevice_constant_render_primitive_lines"></div>

[RenderPrimitive](#enum_renderingdevice_renderprimitive) **RENDER_PRIMITIVE_LINES** = ``1``

Line list rendering primitive. Lines are drawn separated from each other.

<div id="_class_renderingdevice_constant_render_primitive_lines_with_adjacency"></div>

[RenderPrimitive](#enum_renderingdevice_renderprimitive) **RENDER_PRIMITIVE_LINES_WITH_ADJACENCY** = ``2``

[*Line list rendering primitive with adjacency.*](https://registry.khronos.org/vulkan/specs/1.3-extensions/html/vkspec.html#drawing-line-lists-with-adjacency) 

 **Note:** Adjacency is only useful with geometry shaders, which Godot does not expose.

<div id="_class_renderingdevice_constant_render_primitive_linestrips"></div>

[RenderPrimitive](#enum_renderingdevice_renderprimitive) **RENDER_PRIMITIVE_LINESTRIPS** = ``3``

Line strip rendering primitive. Lines drawn are connected to the previous vertex.

<div id="_class_renderingdevice_constant_render_primitive_linestrips_with_adjacency"></div>

[RenderPrimitive](#enum_renderingdevice_renderprimitive) **RENDER_PRIMITIVE_LINESTRIPS_WITH_ADJACENCY** = ``4``

[*Line strip rendering primitive with adjacency.*](https://registry.khronos.org/vulkan/specs/1.3-extensions/html/vkspec.html#drawing-line-strips-with-adjacency) 

 **Note:** Adjacency is only useful with geometry shaders, which Godot does not expose.

<div id="_class_renderingdevice_constant_render_primitive_triangles"></div>

[RenderPrimitive](#enum_renderingdevice_renderprimitive) **RENDER_PRIMITIVE_TRIANGLES** = ``5``

Triangle list rendering primitive. Triangles are drawn separated from each other.

<div id="_class_renderingdevice_constant_render_primitive_triangles_with_adjacency"></div>

[RenderPrimitive](#enum_renderingdevice_renderprimitive) **RENDER_PRIMITIVE_TRIANGLES_WITH_ADJACENCY** = ``6``

[*Triangle list rendering primitive with adjacency.*](https://registry.khronos.org/vulkan/specs/1.3-extensions/html/vkspec.html#drawing-triangle-lists-with-adjacency) 

 **Note:** Adjacency is only useful with geometry shaders, which Godot does not expose.

<div id="_class_renderingdevice_constant_render_primitive_triangle_strips"></div>

[RenderPrimitive](#enum_renderingdevice_renderprimitive) **RENDER_PRIMITIVE_TRIANGLE_STRIPS** = ``7``

Triangle strip rendering primitive. Triangles drawn are connected to the previous triangle.

<div id="_class_renderingdevice_constant_render_primitive_triangle_strips_with_ajacency"></div>

[RenderPrimitive](#enum_renderingdevice_renderprimitive) **RENDER_PRIMITIVE_TRIANGLE_STRIPS_WITH_AJACENCY** = ``8``

[*Triangle strip rendering primitive with adjacency.*](https://registry.khronos.org/vulkan/specs/1.3-extensions/html/vkspec.html#drawing-triangle-strips-with-adjacency) 

 **Note:** Adjacency is only useful with geometry shaders, which Godot does not expose.

<div id="_class_renderingdevice_constant_render_primitive_triangle_strips_with_restart_index"></div>

[RenderPrimitive](#enum_renderingdevice_renderprimitive) **RENDER_PRIMITIVE_TRIANGLE_STRIPS_WITH_RESTART_INDEX** = ``9``

Triangle strip rendering primitive with *primitive restart* enabled. Triangles drawn are connected to the previous triangle, but a primitive restart index can be specified before drawing to create a second triangle strip after the specified index.

 **Note:** Only compatible with indexed draws.

<div id="_class_renderingdevice_constant_render_primitive_tesselation_patch"></div>

[RenderPrimitive](#enum_renderingdevice_renderprimitive) **RENDER_PRIMITIVE_TESSELATION_PATCH** = ``10``

Tessellation patch rendering primitive. Only useful with tessellation shaders, which can be used to deform these patches.

<div id="_class_renderingdevice_constant_render_primitive_max"></div>

[RenderPrimitive](#enum_renderingdevice_renderprimitive) **RENDER_PRIMITIVE_MAX** = ``11``

Represents the size of the [RenderPrimitive](#enum_renderingdevice_renderprimitive) enum.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_enum_renderingdevice_polygoncullmode"></div>

enum **PolygonCullMode**: <div id="enum_renderingdevice_polygoncullmode"></div>

<div id="_class_renderingdevice_constant_polygon_cull_disabled"></div>

[PolygonCullMode](#enum_renderingdevice_polygoncullmode) **POLYGON_CULL_DISABLED** = ``0``

Do not use polygon front face or backface culling.

<div id="_class_renderingdevice_constant_polygon_cull_front"></div>

[PolygonCullMode](#enum_renderingdevice_polygoncullmode) **POLYGON_CULL_FRONT** = ``1``

Use polygon frontface culling (faces pointing towards the camera are hidden).

<div id="_class_renderingdevice_constant_polygon_cull_back"></div>

[PolygonCullMode](#enum_renderingdevice_polygoncullmode) **POLYGON_CULL_BACK** = ``2``

Use polygon backface culling (faces pointing away from the camera are hidden).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_enum_renderingdevice_polygonfrontface"></div>

enum **PolygonFrontFace**: <div id="enum_renderingdevice_polygonfrontface"></div>

<div id="_class_renderingdevice_constant_polygon_front_face_clockwise"></div>

[PolygonFrontFace](#enum_renderingdevice_polygonfrontface) **POLYGON_FRONT_FACE_CLOCKWISE** = ``0``

Clockwise winding order to determine which face of a polygon is its front face.

<div id="_class_renderingdevice_constant_polygon_front_face_counter_clockwise"></div>

[PolygonFrontFace](#enum_renderingdevice_polygonfrontface) **POLYGON_FRONT_FACE_COUNTER_CLOCKWISE** = ``1``

Counter-clockwise winding order to determine which face of a polygon is its front face.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_enum_renderingdevice_stenciloperation"></div>

enum **StencilOperation**: <div id="enum_renderingdevice_stenciloperation"></div>

<div id="_class_renderingdevice_constant_stencil_op_keep"></div>

[StencilOperation](#enum_renderingdevice_stenciloperation) **STENCIL_OP_KEEP** = ``0``

Keep the current stencil value.

<div id="_class_renderingdevice_constant_stencil_op_zero"></div>

[StencilOperation](#enum_renderingdevice_stenciloperation) **STENCIL_OP_ZERO** = ``1``

Set the stencil value to `0`.

<div id="_class_renderingdevice_constant_stencil_op_replace"></div>

[StencilOperation](#enum_renderingdevice_stenciloperation) **STENCIL_OP_REPLACE** = ``2``

Replace the existing stencil value with the new one.

<div id="_class_renderingdevice_constant_stencil_op_increment_and_clamp"></div>

[StencilOperation](#enum_renderingdevice_stenciloperation) **STENCIL_OP_INCREMENT_AND_CLAMP** = ``3``

Increment the existing stencil value and clamp to the maximum representable unsigned value if reached. Stencil bits are considered as an unsigned integer.

<div id="_class_renderingdevice_constant_stencil_op_decrement_and_clamp"></div>

[StencilOperation](#enum_renderingdevice_stenciloperation) **STENCIL_OP_DECREMENT_AND_CLAMP** = ``4``

Decrement the existing stencil value and clamp to the minimum value if reached. Stencil bits are considered as an unsigned integer.

<div id="_class_renderingdevice_constant_stencil_op_invert"></div>

[StencilOperation](#enum_renderingdevice_stenciloperation) **STENCIL_OP_INVERT** = ``5``

Bitwise-invert the existing stencil value.

<div id="_class_renderingdevice_constant_stencil_op_increment_and_wrap"></div>

[StencilOperation](#enum_renderingdevice_stenciloperation) **STENCIL_OP_INCREMENT_AND_WRAP** = ``6``

Increment the stencil value and wrap around to `0` if reaching the maximum representable unsigned. Stencil bits are considered as an unsigned integer.

<div id="_class_renderingdevice_constant_stencil_op_decrement_and_wrap"></div>

[StencilOperation](#enum_renderingdevice_stenciloperation) **STENCIL_OP_DECREMENT_AND_WRAP** = ``7``

Decrement the stencil value and wrap around to the maximum representable unsigned if reaching the minimum. Stencil bits are considered as an unsigned integer.

<div id="_class_renderingdevice_constant_stencil_op_max"></div>

[StencilOperation](#enum_renderingdevice_stenciloperation) **STENCIL_OP_MAX** = ``8``

Represents the size of the [StencilOperation](#enum_renderingdevice_stenciloperation) enum.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_enum_renderingdevice_compareoperator"></div>

enum **CompareOperator**: <div id="enum_renderingdevice_compareoperator"></div>

<div id="_class_renderingdevice_constant_compare_op_never"></div>

[CompareOperator](#enum_renderingdevice_compareoperator) **COMPARE_OP_NEVER** = ``0``

"Never" comparison (opposite of [`COMPARE_OP_ALWAYS`](#class_renderingdevice_constant_compare_op_always)).

<div id="_class_renderingdevice_constant_compare_op_less"></div>

[CompareOperator](#enum_renderingdevice_compareoperator) **COMPARE_OP_LESS** = ``1``

"Less than" comparison.

<div id="_class_renderingdevice_constant_compare_op_equal"></div>

[CompareOperator](#enum_renderingdevice_compareoperator) **COMPARE_OP_EQUAL** = ``2``

"Equal" comparison.

<div id="_class_renderingdevice_constant_compare_op_less_or_equal"></div>

[CompareOperator](#enum_renderingdevice_compareoperator) **COMPARE_OP_LESS_OR_EQUAL** = ``3``

"Less than or equal" comparison.

<div id="_class_renderingdevice_constant_compare_op_greater"></div>

[CompareOperator](#enum_renderingdevice_compareoperator) **COMPARE_OP_GREATER** = ``4``

"Greater than" comparison.

<div id="_class_renderingdevice_constant_compare_op_not_equal"></div>

[CompareOperator](#enum_renderingdevice_compareoperator) **COMPARE_OP_NOT_EQUAL** = ``5``

"Not equal" comparison.

<div id="_class_renderingdevice_constant_compare_op_greater_or_equal"></div>

[CompareOperator](#enum_renderingdevice_compareoperator) **COMPARE_OP_GREATER_OR_EQUAL** = ``6``

"Greater than or equal" comparison.

<div id="_class_renderingdevice_constant_compare_op_always"></div>

[CompareOperator](#enum_renderingdevice_compareoperator) **COMPARE_OP_ALWAYS** = ``7``

"Always" comparison (opposite of [`COMPARE_OP_NEVER`](#class_renderingdevice_constant_compare_op_never)).

<div id="_class_renderingdevice_constant_compare_op_max"></div>

[CompareOperator](#enum_renderingdevice_compareoperator) **COMPARE_OP_MAX** = ``8``

Represents the size of the [CompareOperator](#enum_renderingdevice_compareoperator) enum.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_enum_renderingdevice_logicoperation"></div>

enum **LogicOperation**: <div id="enum_renderingdevice_logicoperation"></div>

<div id="_class_renderingdevice_constant_logic_op_clear"></div>

[LogicOperation](#enum_renderingdevice_logicoperation) **LOGIC_OP_CLEAR** = ``0``

Clear logic operation (result is always `0`). See also [`LOGIC_OP_SET`](#class_renderingdevice_constant_logic_op_set).

<div id="_class_renderingdevice_constant_logic_op_and"></div>

[LogicOperation](#enum_renderingdevice_logicoperation) **LOGIC_OP_AND** = ``1``

AND logic operation.

<div id="_class_renderingdevice_constant_logic_op_and_reverse"></div>

[LogicOperation](#enum_renderingdevice_logicoperation) **LOGIC_OP_AND_REVERSE** = ``2``

AND logic operation with the *destination* operand being inverted. See also [`LOGIC_OP_AND_INVERTED`](#class_renderingdevice_constant_logic_op_and_inverted).

<div id="_class_renderingdevice_constant_logic_op_copy"></div>

[LogicOperation](#enum_renderingdevice_logicoperation) **LOGIC_OP_COPY** = ``3``

Copy logic operation (keeps the *source* value as-is). See also [`LOGIC_OP_COPY_INVERTED`](#class_renderingdevice_constant_logic_op_copy_inverted) and [`LOGIC_OP_NO_OP`](#class_renderingdevice_constant_logic_op_no_op).

<div id="_class_renderingdevice_constant_logic_op_and_inverted"></div>

[LogicOperation](#enum_renderingdevice_logicoperation) **LOGIC_OP_AND_INVERTED** = ``4``

AND logic operation with the *source* operand being inverted. See also [`LOGIC_OP_AND_REVERSE`](#class_renderingdevice_constant_logic_op_and_reverse).

<div id="_class_renderingdevice_constant_logic_op_no_op"></div>

[LogicOperation](#enum_renderingdevice_logicoperation) **LOGIC_OP_NO_OP** = ``5``

No-op logic operation (keeps the *destination* value as-is). See also [`LOGIC_OP_COPY`](#class_renderingdevice_constant_logic_op_copy).

<div id="_class_renderingdevice_constant_logic_op_xor"></div>

[LogicOperation](#enum_renderingdevice_logicoperation) **LOGIC_OP_XOR** = ``6``

Exclusive or (XOR) logic operation.

<div id="_class_renderingdevice_constant_logic_op_or"></div>

[LogicOperation](#enum_renderingdevice_logicoperation) **LOGIC_OP_OR** = ``7``

OR logic operation.

<div id="_class_renderingdevice_constant_logic_op_nor"></div>

[LogicOperation](#enum_renderingdevice_logicoperation) **LOGIC_OP_NOR** = ``8``

Not-OR (NOR) logic operation.

<div id="_class_renderingdevice_constant_logic_op_equivalent"></div>

[LogicOperation](#enum_renderingdevice_logicoperation) **LOGIC_OP_EQUIVALENT** = ``9``

Not-XOR (XNOR) logic operation.

<div id="_class_renderingdevice_constant_logic_op_invert"></div>

[LogicOperation](#enum_renderingdevice_logicoperation) **LOGIC_OP_INVERT** = ``10``

Invert logic operation.

<div id="_class_renderingdevice_constant_logic_op_or_reverse"></div>

[LogicOperation](#enum_renderingdevice_logicoperation) **LOGIC_OP_OR_REVERSE** = ``11``

OR logic operation with the *destination* operand being inverted. See also [`LOGIC_OP_OR_REVERSE`](#class_renderingdevice_constant_logic_op_or_reverse).

<div id="_class_renderingdevice_constant_logic_op_copy_inverted"></div>

[LogicOperation](#enum_renderingdevice_logicoperation) **LOGIC_OP_COPY_INVERTED** = ``12``

NOT logic operation (inverts the value). See also [`LOGIC_OP_COPY`](#class_renderingdevice_constant_logic_op_copy).

<div id="_class_renderingdevice_constant_logic_op_or_inverted"></div>

[LogicOperation](#enum_renderingdevice_logicoperation) **LOGIC_OP_OR_INVERTED** = ``13``

OR logic operation with the *source* operand being inverted. See also [`LOGIC_OP_OR_REVERSE`](#class_renderingdevice_constant_logic_op_or_reverse).

<div id="_class_renderingdevice_constant_logic_op_nand"></div>

[LogicOperation](#enum_renderingdevice_logicoperation) **LOGIC_OP_NAND** = ``14``

Not-AND (NAND) logic operation.

<div id="_class_renderingdevice_constant_logic_op_set"></div>

[LogicOperation](#enum_renderingdevice_logicoperation) **LOGIC_OP_SET** = ``15``

SET logic operation (result is always `1`). See also [`LOGIC_OP_CLEAR`](#class_renderingdevice_constant_logic_op_clear).

<div id="_class_renderingdevice_constant_logic_op_max"></div>

[LogicOperation](#enum_renderingdevice_logicoperation) **LOGIC_OP_MAX** = ``16``

Represents the size of the [LogicOperation](#enum_renderingdevice_logicoperation) enum.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_enum_renderingdevice_blendfactor"></div>

enum **BlendFactor**: <div id="enum_renderingdevice_blendfactor"></div>

<div id="_class_renderingdevice_constant_blend_factor_zero"></div>

[BlendFactor](#enum_renderingdevice_blendfactor) **BLEND_FACTOR_ZERO** = ``0``

Constant `0.0` blend factor.

<div id="_class_renderingdevice_constant_blend_factor_one"></div>

[BlendFactor](#enum_renderingdevice_blendfactor) **BLEND_FACTOR_ONE** = ``1``

Constant `1.0` blend factor.

<div id="_class_renderingdevice_constant_blend_factor_src_color"></div>

[BlendFactor](#enum_renderingdevice_blendfactor) **BLEND_FACTOR_SRC_COLOR** = ``2``

Color blend factor is `source color`. Alpha blend factor is `source alpha`.

<div id="_class_renderingdevice_constant_blend_factor_one_minus_src_color"></div>

[BlendFactor](#enum_renderingdevice_blendfactor) **BLEND_FACTOR_ONE_MINUS_SRC_COLOR** = ``3``

Color blend factor is `1.0 - source color`. Alpha blend factor is `1.0 - source alpha`.

<div id="_class_renderingdevice_constant_blend_factor_dst_color"></div>

[BlendFactor](#enum_renderingdevice_blendfactor) **BLEND_FACTOR_DST_COLOR** = ``4``

Color blend factor is `destination color`. Alpha blend factor is `destination alpha`.

<div id="_class_renderingdevice_constant_blend_factor_one_minus_dst_color"></div>

[BlendFactor](#enum_renderingdevice_blendfactor) **BLEND_FACTOR_ONE_MINUS_DST_COLOR** = ``5``

Color blend factor is `1.0 - destination color`. Alpha blend factor is `1.0 - destination alpha`.

<div id="_class_renderingdevice_constant_blend_factor_src_alpha"></div>

[BlendFactor](#enum_renderingdevice_blendfactor) **BLEND_FACTOR_SRC_ALPHA** = ``6``

Color and alpha blend factor is `source alpha`.

<div id="_class_renderingdevice_constant_blend_factor_one_minus_src_alpha"></div>

[BlendFactor](#enum_renderingdevice_blendfactor) **BLEND_FACTOR_ONE_MINUS_SRC_ALPHA** = ``7``

Color and alpha blend factor is `1.0 - source alpha`.

<div id="_class_renderingdevice_constant_blend_factor_dst_alpha"></div>

[BlendFactor](#enum_renderingdevice_blendfactor) **BLEND_FACTOR_DST_ALPHA** = ``8``

Color and alpha blend factor is `destination alpha`.

<div id="_class_renderingdevice_constant_blend_factor_one_minus_dst_alpha"></div>

[BlendFactor](#enum_renderingdevice_blendfactor) **BLEND_FACTOR_ONE_MINUS_DST_ALPHA** = ``9``

Color and alpha blend factor is `1.0 - destination alpha`.

<div id="_class_renderingdevice_constant_blend_factor_constant_color"></div>

[BlendFactor](#enum_renderingdevice_blendfactor) **BLEND_FACTOR_CONSTANT_COLOR** = ``10``

Color blend factor is `blend constant color`. Alpha blend factor is `blend constant alpha` (see [`draw_list_set_blend_constants`](#class_renderingdevice_method_draw_list_set_blend_constants)).

<div id="_class_renderingdevice_constant_blend_factor_one_minus_constant_color"></div>

[BlendFactor](#enum_renderingdevice_blendfactor) **BLEND_FACTOR_ONE_MINUS_CONSTANT_COLOR** = ``11``

Color blend factor is `1.0 - blend constant color`. Alpha blend factor is `1.0 - blend constant alpha` (see [`draw_list_set_blend_constants`](#class_renderingdevice_method_draw_list_set_blend_constants)).

<div id="_class_renderingdevice_constant_blend_factor_constant_alpha"></div>

[BlendFactor](#enum_renderingdevice_blendfactor) **BLEND_FACTOR_CONSTANT_ALPHA** = ``12``

Color and alpha blend factor is `blend constant alpha` (see [`draw_list_set_blend_constants`](#class_renderingdevice_method_draw_list_set_blend_constants)).

<div id="_class_renderingdevice_constant_blend_factor_one_minus_constant_alpha"></div>

[BlendFactor](#enum_renderingdevice_blendfactor) **BLEND_FACTOR_ONE_MINUS_CONSTANT_ALPHA** = ``13``

Color and alpha blend factor is `1.0 - blend constant alpha` (see [`draw_list_set_blend_constants`](#class_renderingdevice_method_draw_list_set_blend_constants)).

<div id="_class_renderingdevice_constant_blend_factor_src_alpha_saturate"></div>

[BlendFactor](#enum_renderingdevice_blendfactor) **BLEND_FACTOR_SRC_ALPHA_SATURATE** = ``14``

Color blend factor is `min(source alpha, 1.0 - destination alpha)`. Alpha blend factor is `1.0`.

<div id="_class_renderingdevice_constant_blend_factor_src1_color"></div>

[BlendFactor](#enum_renderingdevice_blendfactor) **BLEND_FACTOR_SRC1_COLOR** = ``15``

Color blend factor is `second source color`. Alpha blend factor is `second source alpha`. Only relevant for dual-source blending.

<div id="_class_renderingdevice_constant_blend_factor_one_minus_src1_color"></div>

[BlendFactor](#enum_renderingdevice_blendfactor) **BLEND_FACTOR_ONE_MINUS_SRC1_COLOR** = ``16``

Color blend factor is `1.0 - second source color`. Alpha blend factor is `1.0 - second source alpha`. Only relevant for dual-source blending.

<div id="_class_renderingdevice_constant_blend_factor_src1_alpha"></div>

[BlendFactor](#enum_renderingdevice_blendfactor) **BLEND_FACTOR_SRC1_ALPHA** = ``17``

Color and alpha blend factor is `second source alpha`. Only relevant for dual-source blending.

<div id="_class_renderingdevice_constant_blend_factor_one_minus_src1_alpha"></div>

[BlendFactor](#enum_renderingdevice_blendfactor) **BLEND_FACTOR_ONE_MINUS_SRC1_ALPHA** = ``18``

Color and alpha blend factor is `1.0 - second source alpha`. Only relevant for dual-source blending.

<div id="_class_renderingdevice_constant_blend_factor_max"></div>

[BlendFactor](#enum_renderingdevice_blendfactor) **BLEND_FACTOR_MAX** = ``19``

Represents the size of the [BlendFactor](#enum_renderingdevice_blendfactor) enum.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_enum_renderingdevice_blendoperation"></div>

enum **BlendOperation**: <div id="enum_renderingdevice_blendoperation"></div>

<div id="_class_renderingdevice_constant_blend_op_add"></div>

[BlendOperation](#enum_renderingdevice_blendoperation) **BLEND_OP_ADD** = ``0``

Additive blending operation (`source + destination`).

<div id="_class_renderingdevice_constant_blend_op_subtract"></div>

[BlendOperation](#enum_renderingdevice_blendoperation) **BLEND_OP_SUBTRACT** = ``1``

Subtractive blending operation (`source - destination`).

<div id="_class_renderingdevice_constant_blend_op_reverse_subtract"></div>

[BlendOperation](#enum_renderingdevice_blendoperation) **BLEND_OP_REVERSE_SUBTRACT** = ``2``

Reverse subtractive blending operation (`destination - source`).

<div id="_class_renderingdevice_constant_blend_op_minimum"></div>

[BlendOperation](#enum_renderingdevice_blendoperation) **BLEND_OP_MINIMUM** = ``3``

Minimum blending operation (keep the lowest value of the two).

<div id="_class_renderingdevice_constant_blend_op_maximum"></div>

[BlendOperation](#enum_renderingdevice_blendoperation) **BLEND_OP_MAXIMUM** = ``4``

Maximum blending operation (keep the highest value of the two).

<div id="_class_renderingdevice_constant_blend_op_max"></div>

[BlendOperation](#enum_renderingdevice_blendoperation) **BLEND_OP_MAX** = ``5``

Represents the size of the [BlendOperation](#enum_renderingdevice_blendoperation) enum.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_enum_renderingdevice_pipelinedynamicstateflags"></div>

flags **PipelineDynamicStateFlags**: <div id="enum_renderingdevice_pipelinedynamicstateflags"></div>

<div id="_class_renderingdevice_constant_dynamic_state_line_width"></div>

[PipelineDynamicStateFlags](#enum_renderingdevice_pipelinedynamicstateflags) **DYNAMIC_STATE_LINE_WIDTH** = ``1``

Allows dynamically changing the width of rendering lines.

<div id="_class_renderingdevice_constant_dynamic_state_depth_bias"></div>

[PipelineDynamicStateFlags](#enum_renderingdevice_pipelinedynamicstateflags) **DYNAMIC_STATE_DEPTH_BIAS** = ``2``

Allows dynamically changing the depth bias.

<div id="_class_renderingdevice_constant_dynamic_state_blend_constants"></div>

[PipelineDynamicStateFlags](#enum_renderingdevice_pipelinedynamicstateflags) **DYNAMIC_STATE_BLEND_CONSTANTS** = ``4``

该枚举目前没有描述，请帮我们\ :ref:`贡献一个 <doc_updating_the_class_reference>`\ 吧！



<div id="_class_renderingdevice_constant_dynamic_state_depth_bounds"></div>

[PipelineDynamicStateFlags](#enum_renderingdevice_pipelinedynamicstateflags) **DYNAMIC_STATE_DEPTH_BOUNDS** = ``8``

该枚举目前没有描述，请帮我们\ :ref:`贡献一个 <doc_updating_the_class_reference>`\ 吧！



<div id="_class_renderingdevice_constant_dynamic_state_stencil_compare_mask"></div>

[PipelineDynamicStateFlags](#enum_renderingdevice_pipelinedynamicstateflags) **DYNAMIC_STATE_STENCIL_COMPARE_MASK** = ``16``

该枚举目前没有描述，请帮我们\ :ref:`贡献一个 <doc_updating_the_class_reference>`\ 吧！



<div id="_class_renderingdevice_constant_dynamic_state_stencil_write_mask"></div>

[PipelineDynamicStateFlags](#enum_renderingdevice_pipelinedynamicstateflags) **DYNAMIC_STATE_STENCIL_WRITE_MASK** = ``32``

该枚举目前没有描述，请帮我们\ :ref:`贡献一个 <doc_updating_the_class_reference>`\ 吧！



<div id="_class_renderingdevice_constant_dynamic_state_stencil_reference"></div>

[PipelineDynamicStateFlags](#enum_renderingdevice_pipelinedynamicstateflags) **DYNAMIC_STATE_STENCIL_REFERENCE** = ``64``

该枚举目前没有描述，请帮我们\ :ref:`贡献一个 <doc_updating_the_class_reference>`\ 吧！



<!-- rst-class:: classref-item-separator -->

---

<div id="_class_enum_renderingdevice_initialaction"></div>

enum **InitialAction**: <div id="enum_renderingdevice_initialaction"></div>

<div id="_class_renderingdevice_constant_initial_action_load"></div>

[InitialAction](#enum_renderingdevice_initialaction) **INITIAL_ACTION_LOAD** = ``0``

Load the previous contents of the framebuffer.

<div id="_class_renderingdevice_constant_initial_action_clear"></div>

[InitialAction](#enum_renderingdevice_initialaction) **INITIAL_ACTION_CLEAR** = ``1``

Clear the whole framebuffer or its specified region.

<div id="_class_renderingdevice_constant_initial_action_discard"></div>

[InitialAction](#enum_renderingdevice_initialaction) **INITIAL_ACTION_DISCARD** = ``2``

Ignore the previous contents of the framebuffer. This is the fastest option if you'll overwrite all of the pixels and don't need to read any of them.

<div id="_class_renderingdevice_constant_initial_action_max"></div>

[InitialAction](#enum_renderingdevice_initialaction) **INITIAL_ACTION_MAX** = ``3``

Represents the size of the [InitialAction](#enum_renderingdevice_initialaction) enum.

<div id="_class_renderingdevice_constant_initial_action_clear_region"></div>

[InitialAction](#enum_renderingdevice_initialaction) **INITIAL_ACTION_CLEAR_REGION** = ``1``

**已弃用：** Use [`INITIAL_ACTION_CLEAR`](#class_renderingdevice_constant_initial_action_clear) instead.



<div id="_class_renderingdevice_constant_initial_action_clear_region_continue"></div>

[InitialAction](#enum_renderingdevice_initialaction) **INITIAL_ACTION_CLEAR_REGION_CONTINUE** = ``1``

**已弃用：** Use [`INITIAL_ACTION_LOAD`](#class_renderingdevice_constant_initial_action_load) instead.



<div id="_class_renderingdevice_constant_initial_action_keep"></div>

[InitialAction](#enum_renderingdevice_initialaction) **INITIAL_ACTION_KEEP** = ``0``

**已弃用：** Use [`INITIAL_ACTION_LOAD`](#class_renderingdevice_constant_initial_action_load) instead.



<div id="_class_renderingdevice_constant_initial_action_drop"></div>

[InitialAction](#enum_renderingdevice_initialaction) **INITIAL_ACTION_DROP** = ``2``

**已弃用：** Use [`INITIAL_ACTION_DISCARD`](#class_renderingdevice_constant_initial_action_discard) instead.



<div id="_class_renderingdevice_constant_initial_action_continue"></div>

[InitialAction](#enum_renderingdevice_initialaction) **INITIAL_ACTION_CONTINUE** = ``0``

**已弃用：** Use [`INITIAL_ACTION_LOAD`](#class_renderingdevice_constant_initial_action_load) instead.



<!-- rst-class:: classref-item-separator -->

---

<div id="_class_enum_renderingdevice_finalaction"></div>

enum **FinalAction**: <div id="enum_renderingdevice_finalaction"></div>

<div id="_class_renderingdevice_constant_final_action_store"></div>

[FinalAction](#enum_renderingdevice_finalaction) **FINAL_ACTION_STORE** = ``0``

Store the result of the draw list in the framebuffer. This is generally what you want to do.

<div id="_class_renderingdevice_constant_final_action_discard"></div>

[FinalAction](#enum_renderingdevice_finalaction) **FINAL_ACTION_DISCARD** = ``1``

Discard the contents of the framebuffer. This is the fastest option if you don't need to use the results of the draw list.

<div id="_class_renderingdevice_constant_final_action_max"></div>

[FinalAction](#enum_renderingdevice_finalaction) **FINAL_ACTION_MAX** = ``2``

Represents the size of the [FinalAction](#enum_renderingdevice_finalaction) enum.

<div id="_class_renderingdevice_constant_final_action_read"></div>

[FinalAction](#enum_renderingdevice_finalaction) **FINAL_ACTION_READ** = ``0``

**已弃用：** Use [`FINAL_ACTION_STORE`](#class_renderingdevice_constant_final_action_store) instead.



<div id="_class_renderingdevice_constant_final_action_continue"></div>

[FinalAction](#enum_renderingdevice_finalaction) **FINAL_ACTION_CONTINUE** = ``0``

**已弃用：** Use [`FINAL_ACTION_STORE`](#class_renderingdevice_constant_final_action_store) instead.



<!-- rst-class:: classref-item-separator -->

---

<div id="_class_enum_renderingdevice_shaderstage"></div>

enum **ShaderStage**: <div id="enum_renderingdevice_shaderstage"></div>

<div id="_class_renderingdevice_constant_shader_stage_vertex"></div>

[ShaderStage](#enum_renderingdevice_shaderstage) **SHADER_STAGE_VERTEX** = ``0``

Vertex shader stage. This can be used to manipulate vertices from a shader (but not create new vertices).

<div id="_class_renderingdevice_constant_shader_stage_fragment"></div>

[ShaderStage](#enum_renderingdevice_shaderstage) **SHADER_STAGE_FRAGMENT** = ``1``

Fragment shader stage (called "pixel shader" in Direct3D). This can be used to manipulate pixels from a shader.

<div id="_class_renderingdevice_constant_shader_stage_tesselation_control"></div>

[ShaderStage](#enum_renderingdevice_shaderstage) **SHADER_STAGE_TESSELATION_CONTROL** = ``2``

Tessellation control shader stage. This can be used to create additional geometry from a shader.

<div id="_class_renderingdevice_constant_shader_stage_tesselation_evaluation"></div>

[ShaderStage](#enum_renderingdevice_shaderstage) **SHADER_STAGE_TESSELATION_EVALUATION** = ``3``

Tessellation evaluation shader stage. This can be used to create additional geometry from a shader.

<div id="_class_renderingdevice_constant_shader_stage_compute"></div>

[ShaderStage](#enum_renderingdevice_shaderstage) **SHADER_STAGE_COMPUTE** = ``4``

Compute shader stage. This can be used to run arbitrary computing tasks in a shader, performing them on the GPU instead of the CPU.

<div id="_class_renderingdevice_constant_shader_stage_max"></div>

[ShaderStage](#enum_renderingdevice_shaderstage) **SHADER_STAGE_MAX** = ``5``

Represents the size of the [ShaderStage](#enum_renderingdevice_shaderstage) enum.

<div id="_class_renderingdevice_constant_shader_stage_vertex_bit"></div>

[ShaderStage](#enum_renderingdevice_shaderstage) **SHADER_STAGE_VERTEX_BIT** = ``1``

Vertex shader stage bit (see also [`SHADER_STAGE_VERTEX`](#class_renderingdevice_constant_shader_stage_vertex)).

<div id="_class_renderingdevice_constant_shader_stage_fragment_bit"></div>

[ShaderStage](#enum_renderingdevice_shaderstage) **SHADER_STAGE_FRAGMENT_BIT** = ``2``

Fragment shader stage bit (see also [`SHADER_STAGE_FRAGMENT`](#class_renderingdevice_constant_shader_stage_fragment)).

<div id="_class_renderingdevice_constant_shader_stage_tesselation_control_bit"></div>

[ShaderStage](#enum_renderingdevice_shaderstage) **SHADER_STAGE_TESSELATION_CONTROL_BIT** = ``4``

Tessellation control shader stage bit (see also [`SHADER_STAGE_TESSELATION_CONTROL`](#class_renderingdevice_constant_shader_stage_tesselation_control)).

<div id="_class_renderingdevice_constant_shader_stage_tesselation_evaluation_bit"></div>

[ShaderStage](#enum_renderingdevice_shaderstage) **SHADER_STAGE_TESSELATION_EVALUATION_BIT** = ``8``

Tessellation evaluation shader stage bit (see also [`SHADER_STAGE_TESSELATION_EVALUATION`](#class_renderingdevice_constant_shader_stage_tesselation_evaluation)).

<div id="_class_renderingdevice_constant_shader_stage_compute_bit"></div>

[ShaderStage](#enum_renderingdevice_shaderstage) **SHADER_STAGE_COMPUTE_BIT** = ``16``

Compute shader stage bit (see also [`SHADER_STAGE_COMPUTE`](#class_renderingdevice_constant_shader_stage_compute)).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_enum_renderingdevice_shaderlanguage"></div>

enum **ShaderLanguage**: <div id="enum_renderingdevice_shaderlanguage"></div>

<div id="_class_renderingdevice_constant_shader_language_glsl"></div>

[ShaderLanguage](#enum_renderingdevice_shaderlanguage) **SHADER_LANGUAGE_GLSL** = ``0``

Khronos' GLSL shading language (used natively by OpenGL and Vulkan). This is the language used for core Godot shaders.

<div id="_class_renderingdevice_constant_shader_language_hlsl"></div>

[ShaderLanguage](#enum_renderingdevice_shaderlanguage) **SHADER_LANGUAGE_HLSL** = ``1``

Microsoft's High-Level Shading Language (used natively by Direct3D, but can also be used in Vulkan).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_enum_renderingdevice_pipelinespecializationconstanttype"></div>

enum **PipelineSpecializationConstantType**: <div id="enum_renderingdevice_pipelinespecializationconstanttype"></div>

<div id="_class_renderingdevice_constant_pipeline_specialization_constant_type_bool"></div>

[PipelineSpecializationConstantType](#enum_renderingdevice_pipelinespecializationconstanttype) **PIPELINE_SPECIALIZATION_CONSTANT_TYPE_BOOL** = ``0``

Boolean specialization constant.

<div id="_class_renderingdevice_constant_pipeline_specialization_constant_type_int"></div>

[PipelineSpecializationConstantType](#enum_renderingdevice_pipelinespecializationconstanttype) **PIPELINE_SPECIALIZATION_CONSTANT_TYPE_INT** = ``1``

Integer specialization constant.

<div id="_class_renderingdevice_constant_pipeline_specialization_constant_type_float"></div>

[PipelineSpecializationConstantType](#enum_renderingdevice_pipelinespecializationconstanttype) **PIPELINE_SPECIALIZATION_CONSTANT_TYPE_FLOAT** = ``2``

Floating-point specialization constant.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_enum_renderingdevice_limit"></div>

enum **Limit**: <div id="enum_renderingdevice_limit"></div>

<div id="_class_renderingdevice_constant_limit_max_bound_uniform_sets"></div>

[Limit](#enum_renderingdevice_limit) **LIMIT_MAX_BOUND_UNIFORM_SETS** = ``0``

Maximum number of uniform sets that can be bound at a given time.

<div id="_class_renderingdevice_constant_limit_max_framebuffer_color_attachments"></div>

[Limit](#enum_renderingdevice_limit) **LIMIT_MAX_FRAMEBUFFER_COLOR_ATTACHMENTS** = ``1``

Maximum number of color framebuffer attachments that can be used at a given time.

<div id="_class_renderingdevice_constant_limit_max_textures_per_uniform_set"></div>

[Limit](#enum_renderingdevice_limit) **LIMIT_MAX_TEXTURES_PER_UNIFORM_SET** = ``2``

Maximum number of textures that can be used per uniform set.

<div id="_class_renderingdevice_constant_limit_max_samplers_per_uniform_set"></div>

[Limit](#enum_renderingdevice_limit) **LIMIT_MAX_SAMPLERS_PER_UNIFORM_SET** = ``3``

Maximum number of samplers that can be used per uniform set.

<div id="_class_renderingdevice_constant_limit_max_storage_buffers_per_uniform_set"></div>

[Limit](#enum_renderingdevice_limit) **LIMIT_MAX_STORAGE_BUFFERS_PER_UNIFORM_SET** = ``4``

Maximum number of [*storage buffers*](https://vkguide.dev/docs/chapter-4/storage_buffers/) per uniform set.

<div id="_class_renderingdevice_constant_limit_max_storage_images_per_uniform_set"></div>

[Limit](#enum_renderingdevice_limit) **LIMIT_MAX_STORAGE_IMAGES_PER_UNIFORM_SET** = ``5``

Maximum number of storage images per uniform set.

<div id="_class_renderingdevice_constant_limit_max_uniform_buffers_per_uniform_set"></div>

[Limit](#enum_renderingdevice_limit) **LIMIT_MAX_UNIFORM_BUFFERS_PER_UNIFORM_SET** = ``6``

Maximum number of uniform buffers per uniform set.

<div id="_class_renderingdevice_constant_limit_max_draw_indexed_index"></div>

[Limit](#enum_renderingdevice_limit) **LIMIT_MAX_DRAW_INDEXED_INDEX** = ``7``

Maximum index for an indexed draw command.

<div id="_class_renderingdevice_constant_limit_max_framebuffer_height"></div>

[Limit](#enum_renderingdevice_limit) **LIMIT_MAX_FRAMEBUFFER_HEIGHT** = ``8``

Maximum height of a framebuffer (in pixels).

<div id="_class_renderingdevice_constant_limit_max_framebuffer_width"></div>

[Limit](#enum_renderingdevice_limit) **LIMIT_MAX_FRAMEBUFFER_WIDTH** = ``9``

Maximum width of a framebuffer (in pixels).

<div id="_class_renderingdevice_constant_limit_max_texture_array_layers"></div>

[Limit](#enum_renderingdevice_limit) **LIMIT_MAX_TEXTURE_ARRAY_LAYERS** = ``10``

Maximum number of texture array layers.

<div id="_class_renderingdevice_constant_limit_max_texture_size_1d"></div>

[Limit](#enum_renderingdevice_limit) **LIMIT_MAX_TEXTURE_SIZE_1D** = ``11``

Maximum supported 1-dimensional texture size (in pixels on a single axis).

<div id="_class_renderingdevice_constant_limit_max_texture_size_2d"></div>

[Limit](#enum_renderingdevice_limit) **LIMIT_MAX_TEXTURE_SIZE_2D** = ``12``

Maximum supported 2-dimensional texture size (in pixels on a single axis).

<div id="_class_renderingdevice_constant_limit_max_texture_size_3d"></div>

[Limit](#enum_renderingdevice_limit) **LIMIT_MAX_TEXTURE_SIZE_3D** = ``13``

Maximum supported 3-dimensional texture size (in pixels on a single axis).

<div id="_class_renderingdevice_constant_limit_max_texture_size_cube"></div>

[Limit](#enum_renderingdevice_limit) **LIMIT_MAX_TEXTURE_SIZE_CUBE** = ``14``

Maximum supported cubemap texture size (in pixels on a single axis of a single face).

<div id="_class_renderingdevice_constant_limit_max_textures_per_shader_stage"></div>

[Limit](#enum_renderingdevice_limit) **LIMIT_MAX_TEXTURES_PER_SHADER_STAGE** = ``15``

Maximum number of textures per shader stage.

<div id="_class_renderingdevice_constant_limit_max_samplers_per_shader_stage"></div>

[Limit](#enum_renderingdevice_limit) **LIMIT_MAX_SAMPLERS_PER_SHADER_STAGE** = ``16``

Maximum number of samplers per shader stage.

<div id="_class_renderingdevice_constant_limit_max_storage_buffers_per_shader_stage"></div>

[Limit](#enum_renderingdevice_limit) **LIMIT_MAX_STORAGE_BUFFERS_PER_SHADER_STAGE** = ``17``

Maximum number of [*storage buffers*](https://vkguide.dev/docs/chapter-4/storage_buffers/) per shader stage.

<div id="_class_renderingdevice_constant_limit_max_storage_images_per_shader_stage"></div>

[Limit](#enum_renderingdevice_limit) **LIMIT_MAX_STORAGE_IMAGES_PER_SHADER_STAGE** = ``18``

Maximum number of storage images per shader stage.

<div id="_class_renderingdevice_constant_limit_max_uniform_buffers_per_shader_stage"></div>

[Limit](#enum_renderingdevice_limit) **LIMIT_MAX_UNIFORM_BUFFERS_PER_SHADER_STAGE** = ``19``

Maximum number of uniform buffers per uniform set.

<div id="_class_renderingdevice_constant_limit_max_push_constant_size"></div>

[Limit](#enum_renderingdevice_limit) **LIMIT_MAX_PUSH_CONSTANT_SIZE** = ``20``

Maximum size of a push constant. A lot of devices are limited to 128 bytes, so try to avoid exceeding 128 bytes in push constants to ensure compatibility even if your GPU is reporting a higher value.

<div id="_class_renderingdevice_constant_limit_max_uniform_buffer_size"></div>

[Limit](#enum_renderingdevice_limit) **LIMIT_MAX_UNIFORM_BUFFER_SIZE** = ``21``

Maximum size of a uniform buffer.

<div id="_class_renderingdevice_constant_limit_max_vertex_input_attribute_offset"></div>

[Limit](#enum_renderingdevice_limit) **LIMIT_MAX_VERTEX_INPUT_ATTRIBUTE_OFFSET** = ``22``

Maximum vertex input attribute offset.

<div id="_class_renderingdevice_constant_limit_max_vertex_input_attributes"></div>

[Limit](#enum_renderingdevice_limit) **LIMIT_MAX_VERTEX_INPUT_ATTRIBUTES** = ``23``

Maximum number of vertex input attributes.

<div id="_class_renderingdevice_constant_limit_max_vertex_input_bindings"></div>

[Limit](#enum_renderingdevice_limit) **LIMIT_MAX_VERTEX_INPUT_BINDINGS** = ``24``

Maximum number of vertex input bindings.

<div id="_class_renderingdevice_constant_limit_max_vertex_input_binding_stride"></div>

[Limit](#enum_renderingdevice_limit) **LIMIT_MAX_VERTEX_INPUT_BINDING_STRIDE** = ``25``

Maximum vertex input binding stride.

<div id="_class_renderingdevice_constant_limit_min_uniform_buffer_offset_alignment"></div>

[Limit](#enum_renderingdevice_limit) **LIMIT_MIN_UNIFORM_BUFFER_OFFSET_ALIGNMENT** = ``26``

Minimum uniform buffer offset alignment.

<div id="_class_renderingdevice_constant_limit_max_compute_shared_memory_size"></div>

[Limit](#enum_renderingdevice_limit) **LIMIT_MAX_COMPUTE_SHARED_MEMORY_SIZE** = ``27``

Maximum shared memory size for compute shaders.

<div id="_class_renderingdevice_constant_limit_max_compute_workgroup_count_x"></div>

[Limit](#enum_renderingdevice_limit) **LIMIT_MAX_COMPUTE_WORKGROUP_COUNT_X** = ``28``

Maximum number of workgroups for compute shaders on the X axis.

<div id="_class_renderingdevice_constant_limit_max_compute_workgroup_count_y"></div>

[Limit](#enum_renderingdevice_limit) **LIMIT_MAX_COMPUTE_WORKGROUP_COUNT_Y** = ``29``

Maximum number of workgroups for compute shaders on the Y axis.

<div id="_class_renderingdevice_constant_limit_max_compute_workgroup_count_z"></div>

[Limit](#enum_renderingdevice_limit) **LIMIT_MAX_COMPUTE_WORKGROUP_COUNT_Z** = ``30``

Maximum number of workgroups for compute shaders on the Z axis.

<div id="_class_renderingdevice_constant_limit_max_compute_workgroup_invocations"></div>

[Limit](#enum_renderingdevice_limit) **LIMIT_MAX_COMPUTE_WORKGROUP_INVOCATIONS** = ``31``

Maximum number of workgroup invocations for compute shaders.

<div id="_class_renderingdevice_constant_limit_max_compute_workgroup_size_x"></div>

[Limit](#enum_renderingdevice_limit) **LIMIT_MAX_COMPUTE_WORKGROUP_SIZE_X** = ``32``

Maximum workgroup size for compute shaders on the X axis.

<div id="_class_renderingdevice_constant_limit_max_compute_workgroup_size_y"></div>

[Limit](#enum_renderingdevice_limit) **LIMIT_MAX_COMPUTE_WORKGROUP_SIZE_Y** = ``33``

Maximum workgroup size for compute shaders on the Y axis.

<div id="_class_renderingdevice_constant_limit_max_compute_workgroup_size_z"></div>

[Limit](#enum_renderingdevice_limit) **LIMIT_MAX_COMPUTE_WORKGROUP_SIZE_Z** = ``34``

Maximum workgroup size for compute shaders on the Z axis.

<div id="_class_renderingdevice_constant_limit_max_viewport_dimensions_x"></div>

[Limit](#enum_renderingdevice_limit) **LIMIT_MAX_VIEWPORT_DIMENSIONS_X** = ``35``

Maximum viewport width (in pixels).

<div id="_class_renderingdevice_constant_limit_max_viewport_dimensions_y"></div>

[Limit](#enum_renderingdevice_limit) **LIMIT_MAX_VIEWPORT_DIMENSIONS_Y** = ``36``

Maximum viewport height (in pixels).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_enum_renderingdevice_memorytype"></div>

enum **MemoryType**: <div id="enum_renderingdevice_memorytype"></div>

<div id="_class_renderingdevice_constant_memory_textures"></div>

[MemoryType](#enum_renderingdevice_memorytype) **MEMORY_TEXTURES** = ``0``

Memory taken by textures.

<div id="_class_renderingdevice_constant_memory_buffers"></div>

[MemoryType](#enum_renderingdevice_memorytype) **MEMORY_BUFFERS** = ``1``

Memory taken by buffers.

<div id="_class_renderingdevice_constant_memory_total"></div>

[MemoryType](#enum_renderingdevice_memorytype) **MEMORY_TOTAL** = ``2``

Total memory taken. This is greater than the sum of [`MEMORY_TEXTURES`](#class_renderingdevice_constant_memory_textures) and [`MEMORY_BUFFERS`](#class_renderingdevice_constant_memory_buffers), as it also includes miscellaneous memory usage.

<!-- rst-class:: classref-section-separator -->

---

## 常量

<div id="_class_renderingdevice_constant_invalid_id"></div>

**INVALID_ID** = ``-1`` <div id="class_renderingdevice_constant_invalid_id"></div>

Returned by functions that return an ID if a value is invalid.

<div id="_class_renderingdevice_constant_invalid_format_id"></div>

**INVALID_FORMAT_ID** = ``-1`` <div id="class_renderingdevice_constant_invalid_format_id"></div>

Returned by functions that return a format ID if a value is invalid.

<!-- rst-class:: classref-section-separator -->

---

## 方法说明

<div id="_class_renderingdevice_method_barrier"></div>

`void` **barrier** ( from: [BarrierMask](#enum_renderingdevice_barriermask) = 32767, to: [BarrierMask](#enum_renderingdevice_barriermask) = 32767 )<div id="class_renderingdevice_method_barrier"></div>

**已弃用：** Barriers are automatically inserted by RenderingDevice.

This method does nothing.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_renderingdevice_method_buffer_clear"></div>

[Error](#enum_@globalscope_error) **buffer_clear** ( buffer: [`RID`](class_rid.md), offset: [`int`](class_int.md), size_bytes: [`int`](class_int.md) )<div id="class_renderingdevice_method_buffer_clear"></div>

Clears the contents of the `buffer`, clearing `size_bytes` bytes, starting at `offset`.

Prints an error if:

- the size isn't a multiple of four

- the region specified by `offset` + `size_bytes` exceeds the buffer

- a draw list is currently active (created by [`draw_list_begin`](#class_renderingdevice_method_draw_list_begin))

- a compute list is currently active (created by [`compute_list_begin`](#class_renderingdevice_method_compute_list_begin))

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_renderingdevice_method_buffer_copy"></div>

[Error](#enum_@globalscope_error) **buffer_copy** ( src_buffer: [`RID`](class_rid.md), dst_buffer: [`RID`](class_rid.md), src_offset: [`int`](class_int.md), dst_offset: [`int`](class_int.md), size: [`int`](class_int.md) )<div id="class_renderingdevice_method_buffer_copy"></div>

Copies `size` bytes from the `src_buffer` at `src_offset` into `dst_buffer` at `dst_offset`.

Prints an error if:

- `size` exceeds the size of either `src_buffer` or `dst_buffer` at their corresponding offsets

- a draw list is currently active (created by [`draw_list_begin`](#class_renderingdevice_method_draw_list_begin))

- a compute list is currently active (created by [`compute_list_begin`](#class_renderingdevice_method_compute_list_begin))

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_renderingdevice_method_buffer_get_data"></div>

[`PackedByteArray`](class_packedbytearray.md) **buffer_get_data** ( buffer: [`RID`](class_rid.md), offset_bytes: [`int`](class_int.md) = 0, size_bytes: [`int`](class_int.md) = 0 )<div id="class_renderingdevice_method_buffer_get_data"></div>

Returns a copy of the data of the specified `buffer`, optionally `offset_bytes` and `size_bytes` can be set to copy only a portion of the buffer.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_renderingdevice_method_buffer_update"></div>

[Error](#enum_@globalscope_error) **buffer_update** ( buffer: [`RID`](class_rid.md), offset: [`int`](class_int.md), size_bytes: [`int`](class_int.md), data: [`PackedByteArray`](class_packedbytearray.md) )<div id="class_renderingdevice_method_buffer_update"></div>

Updates a region of `size_bytes` bytes, starting at `offset`, in the buffer, with the specified `data`.

Prints an error if:

- the region specified by `offset` + `size_bytes` exceeds the buffer

- a draw list is currently active (created by [`draw_list_begin`](#class_renderingdevice_method_draw_list_begin))

- a compute list is currently active (created by [`compute_list_begin`](#class_renderingdevice_method_compute_list_begin))

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_renderingdevice_method_capture_timestamp"></div>

`void` **capture_timestamp** ( name: [`String`](class_string.md) )<div id="class_renderingdevice_method_capture_timestamp"></div>

Creates a timestamp marker with the specified `name`. This is used for performance reporting with the [`get_captured_timestamp_cpu_time`](#class_renderingdevice_method_get_captured_timestamp_cpu_time), [`get_captured_timestamp_gpu_time`](#class_renderingdevice_method_get_captured_timestamp_gpu_time) and [`get_captured_timestamp_name`](#class_renderingdevice_method_get_captured_timestamp_name) methods.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_renderingdevice_method_compute_list_add_barrier"></div>

`void` **compute_list_add_barrier** ( compute_list: [`int`](class_int.md) )<div id="class_renderingdevice_method_compute_list_add_barrier"></div>

Raises a Vulkan compute barrier in the specified `compute_list`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_renderingdevice_method_compute_list_begin"></div>

[`int`](class_int.md) **compute_list_begin** ( )<div id="class_renderingdevice_method_compute_list_begin"></div>

Starts a list of compute commands created with the `compute_*` methods. The returned value should be passed to other `compute_list_*` functions.

Multiple compute lists cannot be created at the same time; you must finish the previous compute list first using [`compute_list_end`](#class_renderingdevice_method_compute_list_end).

A simple compute operation might look like this (code is not a complete example):

```

    var rd = RenderingDevice.new()
    var compute_list = rd.compute_list_begin()
    
    rd.compute_list_bind_compute_pipeline(compute_list, compute_shader_dilate_pipeline)
    rd.compute_list_bind_uniform_set(compute_list, compute_base_uniform_set, 0)
    rd.compute_list_bind_uniform_set(compute_list, dilate_uniform_set, 1)
    
    for i in atlas_slices:
        rd.compute_list_set_push_constant(compute_list, push_constant, push_constant.size())
        rd.compute_list_dispatch(compute_list, group_size.x, group_size.y, group_size.z)
        # No barrier, let them run all together.
    
    rd.compute_list_end()
```



<!-- rst-class:: classref-item-separator -->

---

<div id="_class_renderingdevice_method_compute_list_bind_compute_pipeline"></div>

`void` **compute_list_bind_compute_pipeline** ( compute_list: [`int`](class_int.md), compute_pipeline: [`RID`](class_rid.md) )<div id="class_renderingdevice_method_compute_list_bind_compute_pipeline"></div>

Tells the GPU what compute pipeline to use when processing the compute list. If the shader has changed since the last time this function was called, Godot will unbind all descriptor sets and will re-bind them inside [`compute_list_dispatch`](#class_renderingdevice_method_compute_list_dispatch).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_renderingdevice_method_compute_list_bind_uniform_set"></div>

`void` **compute_list_bind_uniform_set** ( compute_list: [`int`](class_int.md), uniform_set: [`RID`](class_rid.md), set_index: [`int`](class_int.md) )<div id="class_renderingdevice_method_compute_list_bind_uniform_set"></div>

Binds the `uniform_set` to this `compute_list`. Godot ensures that all textures in the uniform set have the correct Vulkan access masks. If Godot had to change access masks of textures, it will raise a Vulkan image memory barrier.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_renderingdevice_method_compute_list_dispatch"></div>

`void` **compute_list_dispatch** ( compute_list: [`int`](class_int.md), x_groups: [`int`](class_int.md), y_groups: [`int`](class_int.md), z_groups: [`int`](class_int.md) )<div id="class_renderingdevice_method_compute_list_dispatch"></div>

Submits the compute list for processing on the GPU. This is the compute equivalent to [`draw_list_draw`](#class_renderingdevice_method_draw_list_draw).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_renderingdevice_method_compute_list_dispatch_indirect"></div>

`void` **compute_list_dispatch_indirect** ( compute_list: [`int`](class_int.md), buffer: [`RID`](class_rid.md), offset: [`int`](class_int.md) )<div id="class_renderingdevice_method_compute_list_dispatch_indirect"></div>

Submits the compute list for processing on the GPU with the given group counts stored in the `buffer` at `offset`. Buffer must have been created with [`STORAGE_BUFFER_USAGE_DISPATCH_INDIRECT`](#class_renderingdevice_constant_storage_buffer_usage_dispatch_indirect) flag.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_renderingdevice_method_compute_list_end"></div>

`void` **compute_list_end** ( )<div id="class_renderingdevice_method_compute_list_end"></div>

Finishes a list of compute commands created with the `compute_*` methods.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_renderingdevice_method_compute_list_set_push_constant"></div>

`void` **compute_list_set_push_constant** ( compute_list: [`int`](class_int.md), buffer: [`PackedByteArray`](class_packedbytearray.md), size_bytes: [`int`](class_int.md) )<div id="class_renderingdevice_method_compute_list_set_push_constant"></div>

Sets the push constant data to `buffer` for the specified `compute_list`. The shader determines how this binary data is used. The buffer's size in bytes must also be specified in `size_bytes` (this can be obtained by calling the [`PackedByteArray.size`](#class_packedbytearray_method_size) method on the passed `buffer`).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_renderingdevice_method_compute_pipeline_create"></div>

[`RID`](class_rid.md) **compute_pipeline_create** ( shader: [`RID`](class_rid.md), specialization_constants: [Array](class_array.md) [`RDPipelineSpecializationConstant`](class_rdpipelinespecializationconstant.md) = [] )<div id="class_renderingdevice_method_compute_pipeline_create"></div>

Creates a new compute pipeline. It can be accessed with the RID that is returned.

Once finished with your RID, you will want to free the RID using the RenderingDevice's [`free_rid`](#class_renderingdevice_method_free_rid) method.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_renderingdevice_method_compute_pipeline_is_valid"></div>

[`bool`](class_bool.md) **compute_pipeline_is_valid** ( compute_pipeline: [`RID`](class_rid.md) )<div id="class_renderingdevice_method_compute_pipeline_is_valid"></div>

Returns `true` if the compute pipeline specified by the `compute_pipeline` RID is valid, `false` otherwise.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_renderingdevice_method_create_local_device"></div>

[`RenderingDevice`](class_renderingdevice.md) **create_local_device** ( )<div id="class_renderingdevice_method_create_local_device"></div>

Create a new local **RenderingDevice**. This is most useful for performing compute operations on the GPU independently from the rest of the engine.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_renderingdevice_method_draw_command_begin_label"></div>

`void` **draw_command_begin_label** ( name: [`String`](class_string.md), color: [`Color`](class_color.md) )<div id="class_renderingdevice_method_draw_command_begin_label"></div>

Create a command buffer debug label region that can be displayed in third-party tools such as [*RenderDoc*](https://renderdoc.org/). All regions must be ended with a [`draw_command_end_label`](#class_renderingdevice_method_draw_command_end_label) call. When viewed from the linear series of submissions to a single queue, calls to [`draw_command_begin_label`](#class_renderingdevice_method_draw_command_begin_label) and [`draw_command_end_label`](#class_renderingdevice_method_draw_command_end_label) must be matched and balanced.

The `VK_EXT_DEBUG_UTILS_EXTENSION_NAME` Vulkan extension must be available and enabled for command buffer debug label region to work. See also [`draw_command_end_label`](#class_renderingdevice_method_draw_command_end_label).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_renderingdevice_method_draw_command_end_label"></div>

`void` **draw_command_end_label** ( )<div id="class_renderingdevice_method_draw_command_end_label"></div>

Ends the command buffer debug label region started by a [`draw_command_begin_label`](#class_renderingdevice_method_draw_command_begin_label) call.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_renderingdevice_method_draw_command_insert_label"></div>

`void` **draw_command_insert_label** ( name: [`String`](class_string.md), color: [`Color`](class_color.md) )<div id="class_renderingdevice_method_draw_command_insert_label"></div>

**已弃用：** Inserting labels no longer applies due to command reordering.

This method does nothing.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_renderingdevice_method_draw_list_begin"></div>

[`int`](class_int.md) **draw_list_begin** ( framebuffer: [`RID`](class_rid.md), initial_color_action: [InitialAction](#enum_renderingdevice_initialaction), final_color_action: [FinalAction](#enum_renderingdevice_finalaction), initial_depth_action: [InitialAction](#enum_renderingdevice_initialaction), final_depth_action: [FinalAction](#enum_renderingdevice_finalaction), clear_color_values: [`PackedColorArray`](class_packedcolorarray.md) = PackedColorArray(), clear_depth: [`float`](class_float.md) = 1.0, clear_stencil: [`int`](class_int.md) = 0, region: [`Rect2`](class_rect2.md) = Rect2(0, 0, 0, 0) )<div id="class_renderingdevice_method_draw_list_begin"></div>

Starts a list of raster drawing commands created with the `draw_*` methods. The returned value should be passed to other `draw_list_*` functions.

Multiple draw lists cannot be created at the same time; you must finish the previous draw list first using [`draw_list_end`](#class_renderingdevice_method_draw_list_end).

A simple drawing operation might look like this (code is not a complete example):

```

    var rd = RenderingDevice.new()
    var clear_colors = PackedColorArray([Color(0, 0, 0, 0), Color(0, 0, 0, 0), Color(0, 0, 0, 0)])
    var draw_list = rd.draw_list_begin(framebuffers[i], RenderingDevice.INITIAL_ACTION_CLEAR, RenderingDevice.FINAL_ACTION_READ, RenderingDevice.INITIAL_ACTION_CLEAR, RenderingDevice.FINAL_ACTION_DISCARD, clear_colors)
    
    # Draw opaque.
    rd.draw_list_bind_render_pipeline(draw_list, raster_pipeline)
    rd.draw_list_bind_uniform_set(draw_list, raster_base_uniform, 0)
    rd.draw_list_set_push_constant(draw_list, raster_push_constant, raster_push_constant.size())
    rd.draw_list_draw(draw_list, false, 1, slice_triangle_count[i] * 3)
    # Draw wire.
    rd.draw_list_bind_render_pipeline(draw_list, raster_pipeline_wire)
    rd.draw_list_bind_uniform_set(draw_list, raster_base_uniform, 0)
    rd.draw_list_set_push_constant(draw_list, raster_push_constant, raster_push_constant.size())
    rd.draw_list_draw(draw_list, false, 1, slice_triangle_count[i] * 3)
    
    rd.draw_list_end()
```



<!-- rst-class:: classref-item-separator -->

---

<div id="_class_renderingdevice_method_draw_list_begin_for_screen"></div>

[`int`](class_int.md) **draw_list_begin_for_screen** ( screen: [`int`](class_int.md) = 0, clear_color: [`Color`](class_color.md) = Color(0, 0, 0, 1) )<div id="class_renderingdevice_method_draw_list_begin_for_screen"></div>

High-level variant of [`draw_list_begin`](#class_renderingdevice_method_draw_list_begin), with the parameters automatically being adjusted for drawing onto the window specified by the `screen` ID.

 **Note:** Cannot be used with local RenderingDevices, as these don't have a screen. If called on a local RenderingDevice, [`draw_list_begin_for_screen`](#class_renderingdevice_method_draw_list_begin_for_screen) returns [`INVALID_ID`](#class_renderingdevice_constant_invalid_id).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_renderingdevice_method_draw_list_begin_split"></div>

[`PackedInt64Array`](class_packedint64array.md) **draw_list_begin_split** ( framebuffer: [`RID`](class_rid.md), splits: [`int`](class_int.md), initial_color_action: [InitialAction](#enum_renderingdevice_initialaction), final_color_action: [FinalAction](#enum_renderingdevice_finalaction), initial_depth_action: [InitialAction](#enum_renderingdevice_initialaction), final_depth_action: [FinalAction](#enum_renderingdevice_finalaction), clear_color_values: [`PackedColorArray`](class_packedcolorarray.md) = PackedColorArray(), clear_depth: [`float`](class_float.md) = 1.0, clear_stencil: [`int`](class_int.md) = 0, region: [`Rect2`](class_rect2.md) = Rect2(0, 0, 0, 0), storage_textures: [Array](class_array.md) [`RID`](class_rid.md) = [] )<div id="class_renderingdevice_method_draw_list_begin_split"></div>

**已弃用：** Split draw lists are used automatically by RenderingDevice.

This method does nothing and always returns an empty [`PackedInt64Array`](class_packedint64array.md).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_renderingdevice_method_draw_list_bind_index_array"></div>

`void` **draw_list_bind_index_array** ( draw_list: [`int`](class_int.md), index_array: [`RID`](class_rid.md) )<div id="class_renderingdevice_method_draw_list_bind_index_array"></div>

Binds `index_array` to the specified `draw_list`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_renderingdevice_method_draw_list_bind_render_pipeline"></div>

`void` **draw_list_bind_render_pipeline** ( draw_list: [`int`](class_int.md), render_pipeline: [`RID`](class_rid.md) )<div id="class_renderingdevice_method_draw_list_bind_render_pipeline"></div>

Binds `render_pipeline` to the specified `draw_list`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_renderingdevice_method_draw_list_bind_uniform_set"></div>

`void` **draw_list_bind_uniform_set** ( draw_list: [`int`](class_int.md), uniform_set: [`RID`](class_rid.md), set_index: [`int`](class_int.md) )<div id="class_renderingdevice_method_draw_list_bind_uniform_set"></div>

Binds `uniform_set` to the specified `draw_list`. A `set_index` must also be specified, which is an identifier starting from `0` that must match the one expected by the draw list.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_renderingdevice_method_draw_list_bind_vertex_array"></div>

`void` **draw_list_bind_vertex_array** ( draw_list: [`int`](class_int.md), vertex_array: [`RID`](class_rid.md) )<div id="class_renderingdevice_method_draw_list_bind_vertex_array"></div>

Binds `vertex_array` to the specified `draw_list`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_renderingdevice_method_draw_list_disable_scissor"></div>

`void` **draw_list_disable_scissor** ( draw_list: [`int`](class_int.md) )<div id="class_renderingdevice_method_draw_list_disable_scissor"></div>

Removes and disables the scissor rectangle for the specified `draw_list`. See also [`draw_list_enable_scissor`](#class_renderingdevice_method_draw_list_enable_scissor).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_renderingdevice_method_draw_list_draw"></div>

`void` **draw_list_draw** ( draw_list: [`int`](class_int.md), use_indices: [`bool`](class_bool.md), instances: [`int`](class_int.md), procedural_vertex_count: [`int`](class_int.md) = 0 )<div id="class_renderingdevice_method_draw_list_draw"></div>

Submits `draw_list` for rendering on the GPU. This is the raster equivalent to [`compute_list_dispatch`](#class_renderingdevice_method_compute_list_dispatch).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_renderingdevice_method_draw_list_enable_scissor"></div>

`void` **draw_list_enable_scissor** ( draw_list: [`int`](class_int.md), rect: [`Rect2`](class_rect2.md) = Rect2(0, 0, 0, 0) )<div id="class_renderingdevice_method_draw_list_enable_scissor"></div>

Creates a scissor rectangle and enables it for the specified `draw_list`. Scissor rectangles are used for clipping by discarding fragments that fall outside a specified rectangular portion of the screen. See also [`draw_list_disable_scissor`](#class_renderingdevice_method_draw_list_disable_scissor).

 **Note:** The specified `rect` is automatically intersected with the screen's dimensions, which means it cannot exceed the screen's dimensions.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_renderingdevice_method_draw_list_end"></div>

`void` **draw_list_end** ( )<div id="class_renderingdevice_method_draw_list_end"></div>

Finishes a list of raster drawing commands created with the `draw_*` methods.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_renderingdevice_method_draw_list_set_blend_constants"></div>

`void` **draw_list_set_blend_constants** ( draw_list: [`int`](class_int.md), color: [`Color`](class_color.md) )<div id="class_renderingdevice_method_draw_list_set_blend_constants"></div>

Sets blend constants for the specified `draw_list` to `color`. Blend constants are used only if the graphics pipeline is created with [`DYNAMIC_STATE_BLEND_CONSTANTS`](#class_renderingdevice_constant_dynamic_state_blend_constants) flag set.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_renderingdevice_method_draw_list_set_push_constant"></div>

`void` **draw_list_set_push_constant** ( draw_list: [`int`](class_int.md), buffer: [`PackedByteArray`](class_packedbytearray.md), size_bytes: [`int`](class_int.md) )<div id="class_renderingdevice_method_draw_list_set_push_constant"></div>

Sets the push constant data to `buffer` for the specified `draw_list`. The shader determines how this binary data is used. The buffer's size in bytes must also be specified in `size_bytes` (this can be obtained by calling the [`PackedByteArray.size`](#class_packedbytearray_method_size) method on the passed `buffer`).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_renderingdevice_method_draw_list_switch_to_next_pass"></div>

[`int`](class_int.md) **draw_list_switch_to_next_pass** ( )<div id="class_renderingdevice_method_draw_list_switch_to_next_pass"></div>

Switches to the next draw pass.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_renderingdevice_method_draw_list_switch_to_next_pass_split"></div>

[`PackedInt64Array`](class_packedint64array.md) **draw_list_switch_to_next_pass_split** ( splits: [`int`](class_int.md) )<div id="class_renderingdevice_method_draw_list_switch_to_next_pass_split"></div>

**已弃用：** Split draw lists are used automatically by RenderingDevice.

This method does nothing and always returns an empty [`PackedInt64Array`](class_packedint64array.md).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_renderingdevice_method_framebuffer_create"></div>

[`RID`](class_rid.md) **framebuffer_create** ( textures: [Array](class_array.md) [`RID`](class_rid.md), validate_with_format: [`int`](class_int.md) = -1, view_count: [`int`](class_int.md) = 1 )<div id="class_renderingdevice_method_framebuffer_create"></div>

Creates a new framebuffer. It can be accessed with the RID that is returned.

Once finished with your RID, you will want to free the RID using the RenderingDevice's [`free_rid`](#class_renderingdevice_method_free_rid) method.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_renderingdevice_method_framebuffer_create_empty"></div>

[`RID`](class_rid.md) **framebuffer_create_empty** ( size: [`Vector2i`](class_vector2i.md), samples: [TextureSamples](#enum_renderingdevice_texturesamples) = 0, validate_with_format: [`int`](class_int.md) = -1 )<div id="class_renderingdevice_method_framebuffer_create_empty"></div>

Creates a new empty framebuffer. It can be accessed with the RID that is returned.

Once finished with your RID, you will want to free the RID using the RenderingDevice's [`free_rid`](#class_renderingdevice_method_free_rid) method.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_renderingdevice_method_framebuffer_create_multipass"></div>

[`RID`](class_rid.md) **framebuffer_create_multipass** ( textures: [Array](class_array.md) [`RID`](class_rid.md), passes: [Array](class_array.md) [`RDFramebufferPass`](class_rdframebufferpass.md), validate_with_format: [`int`](class_int.md) = -1, view_count: [`int`](class_int.md) = 1 )<div id="class_renderingdevice_method_framebuffer_create_multipass"></div>

Creates a new multipass framebuffer. It can be accessed with the RID that is returned.

Once finished with your RID, you will want to free the RID using the RenderingDevice's [`free_rid`](#class_renderingdevice_method_free_rid) method.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_renderingdevice_method_framebuffer_format_create"></div>

[`int`](class_int.md) **framebuffer_format_create** ( attachments: [Array](class_array.md) [`RDAttachmentFormat`](class_rdattachmentformat.md), view_count: [`int`](class_int.md) = 1 )<div id="class_renderingdevice_method_framebuffer_format_create"></div>

Creates a new framebuffer format with the specified `attachments` and `view_count`. Returns the new framebuffer's unique framebuffer format ID.

If `view_count` is greater than or equal to `2`, enables multiview which is used for VR rendering. This requires support for the Vulkan multiview extension.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_renderingdevice_method_framebuffer_format_create_empty"></div>

[`int`](class_int.md) **framebuffer_format_create_empty** ( samples: [TextureSamples](#enum_renderingdevice_texturesamples) = 0 )<div id="class_renderingdevice_method_framebuffer_format_create_empty"></div>

Creates a new empty framebuffer format with the specified number of `samples` and returns its ID.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_renderingdevice_method_framebuffer_format_create_multipass"></div>

[`int`](class_int.md) **framebuffer_format_create_multipass** ( attachments: [Array](class_array.md) [`RDAttachmentFormat`](class_rdattachmentformat.md), passes: [Array](class_array.md) [`RDFramebufferPass`](class_rdframebufferpass.md), view_count: [`int`](class_int.md) = 1 )<div id="class_renderingdevice_method_framebuffer_format_create_multipass"></div>

Creates a multipass framebuffer format with the specified `attachments`, `passes` and `view_count` and returns its ID. If `view_count` is greater than or equal to `2`, enables multiview which is used for VR rendering. This requires support for the Vulkan multiview extension.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_renderingdevice_method_framebuffer_format_get_texture_samples"></div>

[TextureSamples](#enum_renderingdevice_texturesamples) **framebuffer_format_get_texture_samples** ( format: [`int`](class_int.md), render_pass: [`int`](class_int.md) = 0 )<div id="class_renderingdevice_method_framebuffer_format_get_texture_samples"></div>

Returns the number of texture samples used for the given framebuffer `format` ID (returned by [`framebuffer_get_format`](#class_renderingdevice_method_framebuffer_get_format)).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_renderingdevice_method_framebuffer_get_format"></div>

[`int`](class_int.md) **framebuffer_get_format** ( framebuffer: [`RID`](class_rid.md) )<div id="class_renderingdevice_method_framebuffer_get_format"></div>

Returns the format ID of the framebuffer specified by the `framebuffer` RID. This ID is guaranteed to be unique for the same formats and does not need to be freed.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_renderingdevice_method_framebuffer_is_valid"></div>

[`bool`](class_bool.md) **framebuffer_is_valid** ( framebuffer: [`RID`](class_rid.md) ) const[^const]<div id="class_renderingdevice_method_framebuffer_is_valid"></div>

Returns `true` if the framebuffer specified by the `framebuffer` RID is valid, `false` otherwise.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_renderingdevice_method_free_rid"></div>

`void` **free_rid** ( rid: [`RID`](class_rid.md) )<div id="class_renderingdevice_method_free_rid"></div>

Tries to free an object in the RenderingDevice. To avoid memory leaks, this should be called after using an object as memory management does not occur automatically when using RenderingDevice directly.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_renderingdevice_method_full_barrier"></div>

`void` **full_barrier** ( )<div id="class_renderingdevice_method_full_barrier"></div>

**已弃用：** Barriers are automatically inserted by RenderingDevice.

This method does nothing.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_renderingdevice_method_get_captured_timestamp_cpu_time"></div>

[`int`](class_int.md) **get_captured_timestamp_cpu_time** ( index: [`int`](class_int.md) ) const[^const]<div id="class_renderingdevice_method_get_captured_timestamp_cpu_time"></div>

Returns the timestamp in CPU time for the rendering step specified by `index` (in microseconds since the engine started). See also [`get_captured_timestamp_gpu_time`](#class_renderingdevice_method_get_captured_timestamp_gpu_time) and [`capture_timestamp`](#class_renderingdevice_method_capture_timestamp).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_renderingdevice_method_get_captured_timestamp_gpu_time"></div>

[`int`](class_int.md) **get_captured_timestamp_gpu_time** ( index: [`int`](class_int.md) ) const[^const]<div id="class_renderingdevice_method_get_captured_timestamp_gpu_time"></div>

Returns the timestamp in GPU time for the rendering step specified by `index` (in microseconds since the engine started). See also [`get_captured_timestamp_cpu_time`](#class_renderingdevice_method_get_captured_timestamp_cpu_time) and [`capture_timestamp`](#class_renderingdevice_method_capture_timestamp).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_renderingdevice_method_get_captured_timestamp_name"></div>

[`String`](class_string.md) **get_captured_timestamp_name** ( index: [`int`](class_int.md) ) const[^const]<div id="class_renderingdevice_method_get_captured_timestamp_name"></div>

Returns the timestamp's name for the rendering step specified by `index`. See also [`capture_timestamp`](#class_renderingdevice_method_capture_timestamp).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_renderingdevice_method_get_captured_timestamps_count"></div>

[`int`](class_int.md) **get_captured_timestamps_count** ( ) const[^const]<div id="class_renderingdevice_method_get_captured_timestamps_count"></div>

Returns the total number of timestamps (rendering steps) available for profiling.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_renderingdevice_method_get_captured_timestamps_frame"></div>

[`int`](class_int.md) **get_captured_timestamps_frame** ( ) const[^const]<div id="class_renderingdevice_method_get_captured_timestamps_frame"></div>

Returns the index of the last frame rendered that has rendering timestamps available for querying.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_renderingdevice_method_get_device_name"></div>

[`String`](class_string.md) **get_device_name** ( ) const[^const]<div id="class_renderingdevice_method_get_device_name"></div>

Returns the name of the video adapter (e.g. "GeForce GTX 1080/PCIe/SSE2"). Equivalent to [`RenderingServer.get_video_adapter_name`](#class_renderingserver_method_get_video_adapter_name). See also [`get_device_vendor_name`](#class_renderingdevice_method_get_device_vendor_name).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_renderingdevice_method_get_device_pipeline_cache_uuid"></div>

[`String`](class_string.md) **get_device_pipeline_cache_uuid** ( ) const[^const]<div id="class_renderingdevice_method_get_device_pipeline_cache_uuid"></div>

Returns the universally unique identifier for the pipeline cache. This is used to cache shader files on disk, which avoids shader recompilations on subsequent engine runs. This UUID varies depending on the graphics card model, but also the driver version. Therefore, updating graphics drivers will invalidate the shader cache.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_renderingdevice_method_get_device_vendor_name"></div>

[`String`](class_string.md) **get_device_vendor_name** ( ) const[^const]<div id="class_renderingdevice_method_get_device_vendor_name"></div>

Returns the vendor of the video adapter (e.g. "NVIDIA Corporation"). Equivalent to [`RenderingServer.get_video_adapter_vendor`](#class_renderingserver_method_get_video_adapter_vendor). See also [`get_device_name`](#class_renderingdevice_method_get_device_name).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_renderingdevice_method_get_driver_resource"></div>

[`int`](class_int.md) **get_driver_resource** ( resource: [DriverResource](#enum_renderingdevice_driverresource), rid: [`RID`](class_rid.md), index: [`int`](class_int.md) )<div id="class_renderingdevice_method_get_driver_resource"></div>

Returns the unique identifier of the driver `resource` for the specified `rid`. Some driver resource types ignore the specified `rid` (see [DriverResource](#enum_renderingdevice_driverresource) descriptions). `index` is always ignored but must be specified anyway.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_renderingdevice_method_get_frame_delay"></div>

[`int`](class_int.md) **get_frame_delay** ( ) const[^const]<div id="class_renderingdevice_method_get_frame_delay"></div>

Returns the frame count kept by the graphics API. Higher values result in higher input lag, but with more consistent throughput. For the main **RenderingDevice**, frames are cycled (usually 3 with triple-buffered V-Sync enabled). However, local **RenderingDevice** s only have 1 frame.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_renderingdevice_method_get_memory_usage"></div>

[`int`](class_int.md) **get_memory_usage** ( type: [MemoryType](#enum_renderingdevice_memorytype) ) const[^const]<div id="class_renderingdevice_method_get_memory_usage"></div>

Returns the memory usage in bytes corresponding to the given `type`. When using Vulkan, these statistics are calculated by [*Vulkan Memory Allocator*](https://github.com/GPUOpen-LibrariesAndSDKs/VulkanMemoryAllocator).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_renderingdevice_method_index_array_create"></div>

[`RID`](class_rid.md) **index_array_create** ( index_buffer: [`RID`](class_rid.md), index_offset: [`int`](class_int.md), index_count: [`int`](class_int.md) )<div id="class_renderingdevice_method_index_array_create"></div>

Creates a new index array. It can be accessed with the RID that is returned.

Once finished with your RID, you will want to free the RID using the RenderingDevice's [`free_rid`](#class_renderingdevice_method_free_rid) method.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_renderingdevice_method_index_buffer_create"></div>

[`RID`](class_rid.md) **index_buffer_create** ( size_indices: [`int`](class_int.md), format: [IndexBufferFormat](#enum_renderingdevice_indexbufferformat), data: [`PackedByteArray`](class_packedbytearray.md) = PackedByteArray(), use_restart_indices: [`bool`](class_bool.md) = false )<div id="class_renderingdevice_method_index_buffer_create"></div>

Creates a new index buffer. It can be accessed with the RID that is returned.

Once finished with your RID, you will want to free the RID using the RenderingDevice's [`free_rid`](#class_renderingdevice_method_free_rid) method.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_renderingdevice_method_limit_get"></div>

[`int`](class_int.md) **limit_get** ( limit: [Limit](#enum_renderingdevice_limit) ) const[^const]<div id="class_renderingdevice_method_limit_get"></div>

Returns the value of the specified `limit`. This limit varies depending on the current graphics hardware (and sometimes the driver version). If the given limit is exceeded, rendering errors will occur.

Limits for various graphics hardware can be found in the [*Vulkan Hardware Database*](https://vulkan.gpuinfo.org/).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_renderingdevice_method_render_pipeline_create"></div>

[`RID`](class_rid.md) **render_pipeline_create** ( shader: [`RID`](class_rid.md), framebuffer_format: [`int`](class_int.md), vertex_format: [`int`](class_int.md), primitive: [RenderPrimitive](#enum_renderingdevice_renderprimitive), rasterization_state: [`RDPipelineRasterizationState`](class_rdpipelinerasterizationstate.md), multisample_state: [`RDPipelineMultisampleState`](class_rdpipelinemultisamplestate.md), stencil_state: [`RDPipelineDepthStencilState`](class_rdpipelinedepthstencilstate.md), color_blend_state: [`RDPipelineColorBlendState`](class_rdpipelinecolorblendstate.md), dynamic_state_flags: [PipelineDynamicStateFlags](#enum_renderingdevice_pipelinedynamicstateflags) = 0, for_render_pass: [`int`](class_int.md) = 0, specialization_constants: [Array](class_array.md) [`RDPipelineSpecializationConstant`](class_rdpipelinespecializationconstant.md) = [] )<div id="class_renderingdevice_method_render_pipeline_create"></div>

Creates a new render pipeline. It can be accessed with the RID that is returned.

Once finished with your RID, you will want to free the RID using the RenderingDevice's [`free_rid`](#class_renderingdevice_method_free_rid) method.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_renderingdevice_method_render_pipeline_is_valid"></div>

[`bool`](class_bool.md) **render_pipeline_is_valid** ( render_pipeline: [`RID`](class_rid.md) )<div id="class_renderingdevice_method_render_pipeline_is_valid"></div>

Returns `true` if the render pipeline specified by the `render_pipeline` RID is valid, `false` otherwise.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_renderingdevice_method_sampler_create"></div>

[`RID`](class_rid.md) **sampler_create** ( state: [`RDSamplerState`](class_rdsamplerstate.md) )<div id="class_renderingdevice_method_sampler_create"></div>

Creates a new sampler. It can be accessed with the RID that is returned.

Once finished with your RID, you will want to free the RID using the RenderingDevice's [`free_rid`](#class_renderingdevice_method_free_rid) method.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_renderingdevice_method_sampler_is_format_supported_for_filter"></div>

[`bool`](class_bool.md) **sampler_is_format_supported_for_filter** ( format: [DataFormat](#enum_renderingdevice_dataformat), sampler_filter: [SamplerFilter](#enum_renderingdevice_samplerfilter) ) const[^const]<div id="class_renderingdevice_method_sampler_is_format_supported_for_filter"></div>

Returns `true` if implementation supports using a texture of `format` with the given `sampler_filter`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_renderingdevice_method_screen_get_framebuffer_format"></div>

[`int`](class_int.md) **screen_get_framebuffer_format** ( screen: [`int`](class_int.md) = 0 ) const[^const]<div id="class_renderingdevice_method_screen_get_framebuffer_format"></div>

Returns the framebuffer format of the given screen.

 **Note:** Only the main **RenderingDevice** returned by [`RenderingServer.get_rendering_device`](#class_renderingserver_method_get_rendering_device) has a format. If called on a local **RenderingDevice**, this method prints an error and returns [`INVALID_ID`](#class_renderingdevice_constant_invalid_id).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_renderingdevice_method_screen_get_height"></div>

[`int`](class_int.md) **screen_get_height** ( screen: [`int`](class_int.md) = 0 ) const[^const]<div id="class_renderingdevice_method_screen_get_height"></div>

Returns the window height matching the graphics API context for the given window ID (in pixels). Despite the parameter being named `screen`, this returns the *window* size. See also [`screen_get_width`](#class_renderingdevice_method_screen_get_width).

 **Note:** Only the main **RenderingDevice** returned by [`RenderingServer.get_rendering_device`](#class_renderingserver_method_get_rendering_device) has a height. If called on a local **RenderingDevice**, this method prints an error and returns [`INVALID_ID`](#class_renderingdevice_constant_invalid_id).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_renderingdevice_method_screen_get_width"></div>

[`int`](class_int.md) **screen_get_width** ( screen: [`int`](class_int.md) = 0 ) const[^const]<div id="class_renderingdevice_method_screen_get_width"></div>

Returns the window width matching the graphics API context for the given window ID (in pixels). Despite the parameter being named `screen`, this returns the *window* size. See also [`screen_get_height`](#class_renderingdevice_method_screen_get_height).

 **Note:** Only the main **RenderingDevice** returned by [`RenderingServer.get_rendering_device`](#class_renderingserver_method_get_rendering_device) has a width. If called on a local **RenderingDevice**, this method prints an error and returns [`INVALID_ID`](#class_renderingdevice_constant_invalid_id).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_renderingdevice_method_set_resource_name"></div>

`void` **set_resource_name** ( id: [`RID`](class_rid.md), name: [`String`](class_string.md) )<div id="class_renderingdevice_method_set_resource_name"></div>

Sets the resource name for `id` to `name`. This is used for debugging with third-party tools such as [*RenderDoc*](https://renderdoc.org/).

The following types of resources can be named: texture, sampler, vertex buffer, index buffer, uniform buffer, texture buffer, storage buffer, uniform set buffer, shader, render pipeline and compute pipeline. Framebuffers cannot be named. Attempting to name an incompatible resource type will print an error.

 **Note:** Resource names are only set when the engine runs in verbose mode ([`OS.is_stdout_verbose`](#class_os_method_is_stdout_verbose) = `true`), or when using an engine build compiled with the `dev_mode=yes` SCons option. The graphics driver must also support the `VK_EXT_DEBUG_UTILS_EXTENSION_NAME` Vulkan extension for named resources to work.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_renderingdevice_method_shader_compile_binary_from_spirv"></div>

[`PackedByteArray`](class_packedbytearray.md) **shader_compile_binary_from_spirv** ( spirv_data: [`RDShaderSPIRV`](class_rdshaderspirv.md), name: [`String`](class_string.md) = "" )<div id="class_renderingdevice_method_shader_compile_binary_from_spirv"></div>

Compiles a binary shader from `spirv_data` and returns the compiled binary data as a [`PackedByteArray`](class_packedbytearray.md). This compiled shader is specific to the GPU model and driver version used; it will not work on different GPU models or even different driver versions. See also [`shader_compile_spirv_from_source`](#class_renderingdevice_method_shader_compile_spirv_from_source).

 `name` is an optional human-readable name that can be given to the compiled shader for organizational purposes.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_renderingdevice_method_shader_compile_spirv_from_source"></div>

[`RDShaderSPIRV`](class_rdshaderspirv.md) **shader_compile_spirv_from_source** ( shader_source: [`RDShaderSource`](class_rdshadersource.md), allow_cache: [`bool`](class_bool.md) = true )<div id="class_renderingdevice_method_shader_compile_spirv_from_source"></div>

Compiles a SPIR-V from the shader source code in `shader_source` and returns the SPIR-V as a [`RDShaderSPIRV`](class_rdshaderspirv.md). This intermediate language shader is portable across different GPU models and driver versions, but cannot be run directly by GPUs until compiled into a binary shader using [`shader_compile_binary_from_spirv`](#class_renderingdevice_method_shader_compile_binary_from_spirv).

If `allow_cache` is `true`, make use of the shader cache generated by Godot. This avoids a potentially lengthy shader compilation step if the shader is already in cache. If `allow_cache` is `false`, Godot's shader cache is ignored and the shader will always be recompiled.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_renderingdevice_method_shader_create_from_bytecode"></div>

[`RID`](class_rid.md) **shader_create_from_bytecode** ( binary_data: [`PackedByteArray`](class_packedbytearray.md), placeholder_rid: [`RID`](class_rid.md) = RID() )<div id="class_renderingdevice_method_shader_create_from_bytecode"></div>

Creates a new shader instance from a binary compiled shader. It can be accessed with the RID that is returned.

Once finished with your RID, you will want to free the RID using the RenderingDevice's [`free_rid`](#class_renderingdevice_method_free_rid) method. See also [`shader_compile_binary_from_spirv`](#class_renderingdevice_method_shader_compile_binary_from_spirv) and [`shader_create_from_spirv`](#class_renderingdevice_method_shader_create_from_spirv).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_renderingdevice_method_shader_create_from_spirv"></div>

[`RID`](class_rid.md) **shader_create_from_spirv** ( spirv_data: [`RDShaderSPIRV`](class_rdshaderspirv.md), name: [`String`](class_string.md) = "" )<div id="class_renderingdevice_method_shader_create_from_spirv"></div>

Creates a new shader instance from SPIR-V intermediate code. It can be accessed with the RID that is returned.

Once finished with your RID, you will want to free the RID using the RenderingDevice's [`free_rid`](#class_renderingdevice_method_free_rid) method. See also [`shader_compile_spirv_from_source`](#class_renderingdevice_method_shader_compile_spirv_from_source) and [`shader_create_from_bytecode`](#class_renderingdevice_method_shader_create_from_bytecode).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_renderingdevice_method_shader_create_placeholder"></div>

[`RID`](class_rid.md) **shader_create_placeholder** ( )<div id="class_renderingdevice_method_shader_create_placeholder"></div>

Create a placeholder RID by allocating an RID without initializing it for use in [`shader_create_from_bytecode`](#class_renderingdevice_method_shader_create_from_bytecode). This allows you to create an RID for a shader and pass it around, but defer compiling the shader to a later time.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_renderingdevice_method_shader_get_vertex_input_attribute_mask"></div>

[`int`](class_int.md) **shader_get_vertex_input_attribute_mask** ( shader: [`RID`](class_rid.md) )<div id="class_renderingdevice_method_shader_get_vertex_input_attribute_mask"></div>

Returns the internal vertex input mask. Internally, the vertex input mask is an unsigned integer consisting of the locations (specified in GLSL via. `layout(location = ...)`) of the input variables (specified in GLSL by the `in` keyword).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_renderingdevice_method_storage_buffer_create"></div>

[`RID`](class_rid.md) **storage_buffer_create** ( size_bytes: [`int`](class_int.md), data: [`PackedByteArray`](class_packedbytearray.md) = PackedByteArray(), usage: [StorageBufferUsage](#enum_renderingdevice_storagebufferusage) = 0 )<div id="class_renderingdevice_method_storage_buffer_create"></div>

Creates a [*storage buffer*](https://vkguide.dev/docs/chapter-4/storage_buffers/) with the specified `data` and `usage`. It can be accessed with the RID that is returned.

Once finished with your RID, you will want to free the RID using the RenderingDevice's [`free_rid`](#class_renderingdevice_method_free_rid) method.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_renderingdevice_method_submit"></div>

`void` **submit** ( )<div id="class_renderingdevice_method_submit"></div>

Pushes the frame setup and draw command buffers then marks the local device as currently processing (which allows calling [`sync`](#class_renderingdevice_method_sync)).

 **Note:** Only available in local RenderingDevices.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_renderingdevice_method_sync"></div>

`void` **sync** ( )<div id="class_renderingdevice_method_sync"></div>

Forces a synchronization between the CPU and GPU, which may be required in certain cases. Only call this when needed, as CPU-GPU synchronization has a performance cost.

 **Note:** Only available in local RenderingDevices.

 **Note:** [`sync`](#class_renderingdevice_method_sync) can only be called after a [`submit`](#class_renderingdevice_method_submit).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_renderingdevice_method_texture_buffer_create"></div>

[`RID`](class_rid.md) **texture_buffer_create** ( size_bytes: [`int`](class_int.md), format: [DataFormat](#enum_renderingdevice_dataformat), data: [`PackedByteArray`](class_packedbytearray.md) = PackedByteArray() )<div id="class_renderingdevice_method_texture_buffer_create"></div>

Creates a new texture buffer. It can be accessed with the RID that is returned.

Once finished with your RID, you will want to free the RID using the RenderingDevice's [`free_rid`](#class_renderingdevice_method_free_rid) method.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_renderingdevice_method_texture_clear"></div>

[Error](#enum_@globalscope_error) **texture_clear** ( texture: [`RID`](class_rid.md), color: [`Color`](class_color.md), base_mipmap: [`int`](class_int.md), mipmap_count: [`int`](class_int.md), base_layer: [`int`](class_int.md), layer_count: [`int`](class_int.md) )<div id="class_renderingdevice_method_texture_clear"></div>

Clears the specified `texture` by replacing all of its pixels with the specified `color`. `base_mipmap` and `mipmap_count` determine which mipmaps of the texture are affected by this clear operation, while `base_layer` and `layer_count` determine which layers of a 3D texture (or texture array) are affected by this clear operation. For 2D textures (which only have one layer by design), `base_layer` must be `0` and `layer_count` must be `1`.

 **Note:** `texture` can't be cleared while a draw list that uses it as part of a framebuffer is being created. Ensure the draw list is finalized (and that the color/depth texture using it is not set to [`FINAL_ACTION_CONTINUE`](#class_renderingdevice_constant_final_action_continue)) to clear this texture.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_renderingdevice_method_texture_copy"></div>

[Error](#enum_@globalscope_error) **texture_copy** ( from_texture: [`RID`](class_rid.md), to_texture: [`RID`](class_rid.md), from_pos: [`Vector3`](class_vector3.md), to_pos: [`Vector3`](class_vector3.md), size: [`Vector3`](class_vector3.md), src_mipmap: [`int`](class_int.md), dst_mipmap: [`int`](class_int.md), src_layer: [`int`](class_int.md), dst_layer: [`int`](class_int.md) )<div id="class_renderingdevice_method_texture_copy"></div>

Copies the `from_texture` to `to_texture` with the specified `from_pos`, `to_pos` and `size` coordinates. The Z axis of the `from_pos`, `to_pos` and `size` must be `0` for 2-dimensional textures. Source and destination mipmaps/layers must also be specified, with these parameters being `0` for textures without mipmaps or single-layer textures. Returns [`@GlobalScope.OK`](#class_@globalscope_constant_ok) if the texture copy was successful or [`@GlobalScope.ERR_INVALID_PARAMETER`](#class_@globalscope_constant_err_invalid_parameter) otherwise.

 **Note:** `from_texture` texture can't be copied while a draw list that uses it as part of a framebuffer is being created. Ensure the draw list is finalized (and that the color/depth texture using it is not set to [`FINAL_ACTION_CONTINUE`](#class_renderingdevice_constant_final_action_continue)) to copy this texture.

 **Note:** `from_texture` texture requires the [`TEXTURE_USAGE_CAN_COPY_FROM_BIT`](#class_renderingdevice_constant_texture_usage_can_copy_from_bit) to be retrieved.

 **Note:** `to_texture` can't be copied while a draw list that uses it as part of a framebuffer is being created. Ensure the draw list is finalized (and that the color/depth texture using it is not set to [`FINAL_ACTION_CONTINUE`](#class_renderingdevice_constant_final_action_continue)) to copy this texture.

 **Note:** `to_texture` requires the [`TEXTURE_USAGE_CAN_COPY_TO_BIT`](#class_renderingdevice_constant_texture_usage_can_copy_to_bit) to be retrieved.

 **Note:** `from_texture` and `to_texture` must be of the same type (color or depth).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_renderingdevice_method_texture_create"></div>

[`RID`](class_rid.md) **texture_create** ( format: [`RDTextureFormat`](class_rdtextureformat.md), view: [`RDTextureView`](class_rdtextureview.md), data: [Array](class_array.md) [`PackedByteArray`](class_packedbytearray.md) = [] )<div id="class_renderingdevice_method_texture_create"></div>

Creates a new texture. It can be accessed with the RID that is returned.

Once finished with your RID, you will want to free the RID using the RenderingDevice's [`free_rid`](#class_renderingdevice_method_free_rid) method.

 **Note:** Not to be confused with [`RenderingServer.texture_2d_create`](#class_renderingserver_method_texture_2d_create), which creates the Godot-specific [`Texture2D`](class_texture2d.md) resource as opposed to the graphics API's own texture type.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_renderingdevice_method_texture_create_from_extension"></div>

[`RID`](class_rid.md) **texture_create_from_extension** ( type: [TextureType](#enum_renderingdevice_texturetype), format: [DataFormat](#enum_renderingdevice_dataformat), samples: [TextureSamples](#enum_renderingdevice_texturesamples), usage_flags: [TextureUsageBits](#enum_renderingdevice_textureusagebits), image: [`int`](class_int.md), width: [`int`](class_int.md), height: [`int`](class_int.md), depth: [`int`](class_int.md), layers: [`int`](class_int.md) )<div id="class_renderingdevice_method_texture_create_from_extension"></div>

Returns an RID for an existing `image` (`VkImage`) with the given `type`, `format`, `samples`, `usage_flags`, `width`, `height`, `depth`, and `layers`. This can be used to allow Godot to render onto foreign images.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_renderingdevice_method_texture_create_shared"></div>

[`RID`](class_rid.md) **texture_create_shared** ( view: [`RDTextureView`](class_rdtextureview.md), with_texture: [`RID`](class_rid.md) )<div id="class_renderingdevice_method_texture_create_shared"></div>

Creates a shared texture using the specified `view` and the texture information from `with_texture`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_renderingdevice_method_texture_create_shared_from_slice"></div>

[`RID`](class_rid.md) **texture_create_shared_from_slice** ( view: [`RDTextureView`](class_rdtextureview.md), with_texture: [`RID`](class_rid.md), layer: [`int`](class_int.md), mipmap: [`int`](class_int.md), mipmaps: [`int`](class_int.md) = 1, slice_type: [TextureSliceType](#enum_renderingdevice_textureslicetype) = 0 )<div id="class_renderingdevice_method_texture_create_shared_from_slice"></div>

Creates a shared texture using the specified `view` and the texture information from `with_texture`'s `layer` and `mipmap`. The number of included mipmaps from the original texture can be controlled using the `mipmaps` parameter. Only relevant for textures with multiple layers, such as 3D textures, texture arrays and cubemaps. For single-layer textures, use [`texture_create_shared`](#class_renderingdevice_method_texture_create_shared) 

For 2D textures (which only have one layer), `layer` must be `0`.

 **Note:** Layer slicing is only supported for 2D texture arrays, not 3D textures or cubemaps.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_renderingdevice_method_texture_get_data"></div>

[`PackedByteArray`](class_packedbytearray.md) **texture_get_data** ( texture: [`RID`](class_rid.md), layer: [`int`](class_int.md) )<div id="class_renderingdevice_method_texture_get_data"></div>

Returns the `texture` data for the specified `layer` as raw binary data. For 2D textures (which only have one layer), `layer` must be `0`.

 **Note:** `texture` can't be retrieved while a draw list that uses it as part of a framebuffer is being created. Ensure the draw list is finalized (and that the color/depth texture using it is not set to [`FINAL_ACTION_CONTINUE`](#class_renderingdevice_constant_final_action_continue)) to retrieve this texture. Otherwise, an error is printed and a empty [`PackedByteArray`](class_packedbytearray.md) is returned.

 **Note:** `texture` requires the [`TEXTURE_USAGE_CAN_COPY_FROM_BIT`](#class_renderingdevice_constant_texture_usage_can_copy_from_bit) to be retrieved. Otherwise, an error is printed and a empty [`PackedByteArray`](class_packedbytearray.md) is returned.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_renderingdevice_method_texture_get_format"></div>

[`RDTextureFormat`](class_rdtextureformat.md) **texture_get_format** ( texture: [`RID`](class_rid.md) )<div id="class_renderingdevice_method_texture_get_format"></div>

Returns the data format used to create this texture.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_renderingdevice_method_texture_get_native_handle"></div>

[`int`](class_int.md) **texture_get_native_handle** ( texture: [`RID`](class_rid.md) )<div id="class_renderingdevice_method_texture_get_native_handle"></div>

**已弃用：** Use [`get_driver_resource`](#class_renderingdevice_method_get_driver_resource) with [`DRIVER_RESOURCE_TEXTURE`](#class_renderingdevice_constant_driver_resource_texture) instead.

Returns the internal graphics handle for this texture object. For use when communicating with third-party APIs mostly with GDExtension.

 **Note:** This function returns a `uint64_t` which internally maps to a `GLuint` (OpenGL) or `VkImage` (Vulkan).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_renderingdevice_method_texture_is_format_supported_for_usage"></div>

[`bool`](class_bool.md) **texture_is_format_supported_for_usage** ( format: [DataFormat](#enum_renderingdevice_dataformat), usage_flags: [TextureUsageBits](#enum_renderingdevice_textureusagebits) ) const[^const]<div id="class_renderingdevice_method_texture_is_format_supported_for_usage"></div>

Returns `true` if the specified `format` is supported for the given `usage_flags`, `false` otherwise.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_renderingdevice_method_texture_is_shared"></div>

[`bool`](class_bool.md) **texture_is_shared** ( texture: [`RID`](class_rid.md) )<div id="class_renderingdevice_method_texture_is_shared"></div>

Returns `true` if the `texture` is shared, `false` otherwise. See [`RDTextureView`](class_rdtextureview.md).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_renderingdevice_method_texture_is_valid"></div>

[`bool`](class_bool.md) **texture_is_valid** ( texture: [`RID`](class_rid.md) )<div id="class_renderingdevice_method_texture_is_valid"></div>

Returns `true` if the `texture` is valid, `false` otherwise.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_renderingdevice_method_texture_resolve_multisample"></div>

[Error](#enum_@globalscope_error) **texture_resolve_multisample** ( from_texture: [`RID`](class_rid.md), to_texture: [`RID`](class_rid.md) )<div id="class_renderingdevice_method_texture_resolve_multisample"></div>

Resolves the `from_texture` texture onto `to_texture` with multisample antialiasing enabled. This must be used when rendering a framebuffer for MSAA to work. Returns [`@GlobalScope.OK`](#class_@globalscope_constant_ok) if successful, [`@GlobalScope.ERR_INVALID_PARAMETER`](#class_@globalscope_constant_err_invalid_parameter) otherwise.

 **Note:** `from_texture` and `to_texture` textures must have the same dimension, format and type (color or depth).

 **Note:** `from_texture` can't be copied while a draw list that uses it as part of a framebuffer is being created. Ensure the draw list is finalized (and that the color/depth texture using it is not set to [`FINAL_ACTION_CONTINUE`](#class_renderingdevice_constant_final_action_continue)) to resolve this texture.

 **Note:** `from_texture` requires the [`TEXTURE_USAGE_CAN_COPY_FROM_BIT`](#class_renderingdevice_constant_texture_usage_can_copy_from_bit) to be retrieved.

 **Note:** `from_texture` must be multisampled and must also be 2D (or a slice of a 3D/cubemap texture).

 **Note:** `to_texture` can't be copied while a draw list that uses it as part of a framebuffer is being created. Ensure the draw list is finalized (and that the color/depth texture using it is not set to [`FINAL_ACTION_CONTINUE`](#class_renderingdevice_constant_final_action_continue)) to resolve this texture.

 **Note:** `to_texture` texture requires the [`TEXTURE_USAGE_CAN_COPY_TO_BIT`](#class_renderingdevice_constant_texture_usage_can_copy_to_bit) to be retrieved.

 **Note:** `to_texture` texture must **not** be multisampled and must also be 2D (or a slice of a 3D/cubemap texture).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_renderingdevice_method_texture_update"></div>

[Error](#enum_@globalscope_error) **texture_update** ( texture: [`RID`](class_rid.md), layer: [`int`](class_int.md), data: [`PackedByteArray`](class_packedbytearray.md) )<div id="class_renderingdevice_method_texture_update"></div>

Updates texture data with new data, replacing the previous data in place. The updated texture data must have the same dimensions and format. For 2D textures (which only have one layer), `layer` must be `0`. Returns [`@GlobalScope.OK`](#class_@globalscope_constant_ok) if the update was successful, [`@GlobalScope.ERR_INVALID_PARAMETER`](#class_@globalscope_constant_err_invalid_parameter) otherwise.

 **Note:** Updating textures is forbidden during creation of a draw or compute list.

 **Note:** The existing `texture` can't be updated while a draw list that uses it as part of a framebuffer is being created. Ensure the draw list is finalized (and that the color/depth texture using it is not set to [`FINAL_ACTION_CONTINUE`](#class_renderingdevice_constant_final_action_continue)) to update this texture.

 **Note:** The existing `texture` requires the [`TEXTURE_USAGE_CAN_UPDATE_BIT`](#class_renderingdevice_constant_texture_usage_can_update_bit) to be updatable.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_renderingdevice_method_uniform_buffer_create"></div>

[`RID`](class_rid.md) **uniform_buffer_create** ( size_bytes: [`int`](class_int.md), data: [`PackedByteArray`](class_packedbytearray.md) = PackedByteArray() )<div id="class_renderingdevice_method_uniform_buffer_create"></div>

Creates a new uniform buffer. It can be accessed with the RID that is returned.

Once finished with your RID, you will want to free the RID using the RenderingDevice's [`free_rid`](#class_renderingdevice_method_free_rid) method.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_renderingdevice_method_uniform_set_create"></div>

[`RID`](class_rid.md) **uniform_set_create** ( uniforms: [Array](class_array.md) [`RDUniform`](class_rduniform.md), shader: [`RID`](class_rid.md), shader_set: [`int`](class_int.md) )<div id="class_renderingdevice_method_uniform_set_create"></div>

Creates a new uniform set. It can be accessed with the RID that is returned.

Once finished with your RID, you will want to free the RID using the RenderingDevice's [`free_rid`](#class_renderingdevice_method_free_rid) method.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_renderingdevice_method_uniform_set_is_valid"></div>

[`bool`](class_bool.md) **uniform_set_is_valid** ( uniform_set: [`RID`](class_rid.md) )<div id="class_renderingdevice_method_uniform_set_is_valid"></div>

Checks if the `uniform_set` is valid, i.e. is owned.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_renderingdevice_method_vertex_array_create"></div>

[`RID`](class_rid.md) **vertex_array_create** ( vertex_count: [`int`](class_int.md), vertex_format: [`int`](class_int.md), src_buffers: [Array](class_array.md) [`RID`](class_rid.md), offsets: [`PackedInt64Array`](class_packedint64array.md) = PackedInt64Array() )<div id="class_renderingdevice_method_vertex_array_create"></div>

Creates a vertex array based on the specified buffers. Optionally, `offsets` (in bytes) may be defined for each buffer.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_renderingdevice_method_vertex_buffer_create"></div>

[`RID`](class_rid.md) **vertex_buffer_create** ( size_bytes: [`int`](class_int.md), data: [`PackedByteArray`](class_packedbytearray.md) = PackedByteArray(), use_as_storage: [`bool`](class_bool.md) = false )<div id="class_renderingdevice_method_vertex_buffer_create"></div>

It can be accessed with the RID that is returned.

Once finished with your RID, you will want to free the RID using the RenderingDevice's [`free_rid`](#class_renderingdevice_method_free_rid) method.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_renderingdevice_method_vertex_format_create"></div>

[`int`](class_int.md) **vertex_format_create** ( vertex_descriptions: [Array](class_array.md) [`RDVertexAttribute`](class_rdvertexattribute.md) )<div id="class_renderingdevice_method_vertex_format_create"></div>

Creates a new vertex format with the specified `vertex_descriptions`. Returns a unique vertex format ID corresponding to the newly created vertex format.

[^virtual]: 本方法通常需要用户覆盖才能生效。
[^const]: 本方法无副作用，不会修改该实例的任何成员变量。
[^vararg]: 本方法除了能接受在此处描述的参数外，还能够继续接受任意数量的参数。
[^constructor]: 本方法用于构造某个类型。
[^static]: 调用本方法无需实例，可直接使用类名进行调用。
[^operator]: 本方法描述的是使用本类型作为左操作数的有效运算符。
[^bitfield]: 这个值是由下列位标志构成位掩码的整数。
[^void]: 无返回值。
