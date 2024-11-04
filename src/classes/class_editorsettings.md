<!-- ⚠ 请勿编辑本文件 ⚠ -->
<!-- 本文档使用脚本从 WeDot 引擎源码仓库生成。 -->
<!-- 生成脚本：https://github.com/WeDot-Engine/WeDot/tree/4.3/doc/tools/make_md.py； -->
<!-- 原文件：https://github.com/WeDot-Engine/WeDot/tree/4.3/doc/classes/EditorSettings.xml。 -->

<div id="_class_editorsettings"></div>

# EditorSettings

**继承：** [`Resource`](class_resource.md) **<** [`RefCounted`](class_refcounted.md) **<** [`Object`](class_object.md)

Object that holds the project-independent editor settings.

## 描述

Object that holds the project-independent editor settings. These settings are generally visible in the **Editor > Editor Settings** menu.

Property names use slash delimiters to distinguish sections. Setting values can be of any [`Variant`](class_variant.md) type. It's recommended to use `snake_case` for editor settings to be consistent with the Godot editor itself.

Accessing the settings can be done using the following methods, such as:



```gdscript

    var settings = EditorInterface.get_editor_settings()
    # `settings.set("some/property", 10)` also works as this class overrides `_set()` internally.
    settings.set_setting("some/property", 10)
    # `settings.get("some/property")` also works as this class overrides `_get()` internally.
    settings.get_setting("some/property")
    var list_of_settings = settings.get_property_list()
```

```csharp

    EditorSettings settings = EditorInterface.Singleton.GetEditorSettings();
    // `settings.set("some/property", value)` also works as this class overrides `_set()` internally.
    settings.SetSetting("some/property", Value);
    // `settings.get("some/property", value)` also works as this class overrides `_get()` internally.
    settings.GetSetting("some/property");
    Godot.Collections.Array<Godot.Collections.Dictionary> listOfSettings = settings.GetPropertyList();
```



 **Note:** This class shouldn't be instantiated directly. Instead, access the singleton using [`EditorInterface.get_editor_settings`](#class_editorinterface_method_get_editor_settings).





## 属性

| [`bool`](class_bool.md)                           | [`debugger/auto_switch_to_remote_scene_tree`](#class_editorsettings_property_debugger/auto_switch_to_remote_scene_tree)                                                                                         |
| [`bool`](class_bool.md)                           | [`debugger/profile_native_calls`](#class_editorsettings_property_debugger/profile_native_calls)                                                                                                                 |
| [`int`](class_int.md)                             | [`debugger/profiler_frame_history_size`](#class_editorsettings_property_debugger/profiler_frame_history_size)                                                                                                   |
| [`int`](class_int.md)                             | [`debugger/profiler_frame_max_functions`](#class_editorsettings_property_debugger/profiler_frame_max_functions)                                                                                                 |
| [`float`](class_float.md)                         | [`debugger/remote_inspect_refresh_interval`](#class_editorsettings_property_debugger/remote_inspect_refresh_interval)                                                                                           |
| [`float`](class_float.md)                         | [`debugger/remote_scene_tree_refresh_interval`](#class_editorsettings_property_debugger/remote_scene_tree_refresh_interval)                                                                                     |
| [`bool`](class_bool.md)                           | [`docks/filesystem/always_show_folders`](#class_editorsettings_property_docks/filesystem/always_show_folders)                                                                                                   |
| [`String`](class_string.md)                       | [`docks/filesystem/textfile_extensions`](#class_editorsettings_property_docks/filesystem/textfile_extensions)                                                                                                   |
| [`int`](class_int.md)                             | [`docks/filesystem/thumbnail_size`](#class_editorsettings_property_docks/filesystem/thumbnail_size)                                                                                                             |
| [`float`](class_float.md)                         | [`docks/property_editor/auto_refresh_interval`](#class_editorsettings_property_docks/property_editor/auto_refresh_interval)                                                                                     |
| [`float`](class_float.md)                         | [`docks/property_editor/subresource_hue_tint`](#class_editorsettings_property_docks/property_editor/subresource_hue_tint)                                                                                       |
| [`bool`](class_bool.md)                           | [`docks/scene_tree/auto_expand_to_selected`](#class_editorsettings_property_docks/scene_tree/auto_expand_to_selected)                                                                                           |
| [`bool`](class_bool.md)                           | [`docks/scene_tree/center_node_on_reparent`](#class_editorsettings_property_docks/scene_tree/center_node_on_reparent)                                                                                           |
| [`bool`](class_bool.md)                           | [`docks/scene_tree/start_create_dialog_fully_expanded`](#class_editorsettings_property_docks/scene_tree/start_create_dialog_fully_expanded)                                                                     |
| [`Color`](class_color.md)                         | [`editors/2d/bone_color1`](#class_editorsettings_property_editors/2d/bone_color1)                                                                                                                               |
| [`Color`](class_color.md)                         | [`editors/2d/bone_color2`](#class_editorsettings_property_editors/2d/bone_color2)                                                                                                                               |
| [`Color`](class_color.md)                         | [`editors/2d/bone_ik_color`](#class_editorsettings_property_editors/2d/bone_ik_color)                                                                                                                           |
| [`Color`](class_color.md)                         | [`editors/2d/bone_outline_color`](#class_editorsettings_property_editors/2d/bone_outline_color)                                                                                                                 |
| [`float`](class_float.md)                         | [`editors/2d/bone_outline_size`](#class_editorsettings_property_editors/2d/bone_outline_size)                                                                                                                   |
| [`Color`](class_color.md)                         | [`editors/2d/bone_selected_color`](#class_editorsettings_property_editors/2d/bone_selected_color)                                                                                                               |
| [`float`](class_float.md)                         | [`editors/2d/bone_width`](#class_editorsettings_property_editors/2d/bone_width)                                                                                                                                 |
| [`Color`](class_color.md)                         | [`editors/2d/grid_color`](#class_editorsettings_property_editors/2d/grid_color)                                                                                                                                 |
| [`Color`](class_color.md)                         | [`editors/2d/guides_color`](#class_editorsettings_property_editors/2d/guides_color)                                                                                                                             |
| [`Color`](class_color.md)                         | [`editors/2d/smart_snapping_line_color`](#class_editorsettings_property_editors/2d/smart_snapping_line_color)                                                                                                   |
| [`bool`](class_bool.md)                           | [`editors/2d/use_integer_zoom_by_default`](#class_editorsettings_property_editors/2d/use_integer_zoom_by_default)                                                                                               |
| [`Color`](class_color.md)                         | [`editors/2d/viewport_border_color`](#class_editorsettings_property_editors/2d/viewport_border_color)                                                                                                           |
| [`float`](class_float.md)                         | [`editors/3d/default_fov`](#class_editorsettings_property_editors/3d/default_fov)                                                                                                                               |
| [`float`](class_float.md)                         | [`editors/3d/default_z_far`](#class_editorsettings_property_editors/3d/default_z_far)                                                                                                                           |
| [`float`](class_float.md)                         | [`editors/3d/default_z_near`](#class_editorsettings_property_editors/3d/default_z_near)                                                                                                                         |
| [`int`](class_int.md)                             | [`editors/3d/freelook/freelook_activation_modifier`](#class_editorsettings_property_editors/3d/freelook/freelook_activation_modifier)                                                                           |
| [`float`](class_float.md)                         | [`editors/3d/freelook/freelook_base_speed`](#class_editorsettings_property_editors/3d/freelook/freelook_base_speed)                                                                                             |
| [`float`](class_float.md)                         | [`editors/3d/freelook/freelook_inertia`](#class_editorsettings_property_editors/3d/freelook/freelook_inertia)                                                                                                   |
| [`int`](class_int.md)                             | [`editors/3d/freelook/freelook_navigation_scheme`](#class_editorsettings_property_editors/3d/freelook/freelook_navigation_scheme)                                                                               |
| [`float`](class_float.md)                         | [`editors/3d/freelook/freelook_sensitivity`](#class_editorsettings_property_editors/3d/freelook/freelook_sensitivity)                                                                                           |
| [`bool`](class_bool.md)                           | [`editors/3d/freelook/freelook_speed_zoom_link`](#class_editorsettings_property_editors/3d/freelook/freelook_speed_zoom_link)                                                                                   |
| [`float`](class_float.md)                         | [`editors/3d/grid_division_level_bias`](#class_editorsettings_property_editors/3d/grid_division_level_bias)                                                                                                     |
| [`int`](class_int.md)                             | [`editors/3d/grid_division_level_max`](#class_editorsettings_property_editors/3d/grid_division_level_max)                                                                                                       |
| [`int`](class_int.md)                             | [`editors/3d/grid_division_level_min`](#class_editorsettings_property_editors/3d/grid_division_level_min)                                                                                                       |
| [`int`](class_int.md)                             | [`editors/3d/grid_size`](#class_editorsettings_property_editors/3d/grid_size)                                                                                                                                   |
| [`bool`](class_bool.md)                           | [`editors/3d/grid_xy_plane`](#class_editorsettings_property_editors/3d/grid_xy_plane)                                                                                                                           |
| [`bool`](class_bool.md)                           | [`editors/3d/grid_xz_plane`](#class_editorsettings_property_editors/3d/grid_xz_plane)                                                                                                                           |
| [`bool`](class_bool.md)                           | [`editors/3d/grid_yz_plane`](#class_editorsettings_property_editors/3d/grid_yz_plane)                                                                                                                           |
| [`bool`](class_bool.md)                           | [`editors/3d/navigation/emulate_3_button_mouse`](#class_editorsettings_property_editors/3d/navigation/emulate_3_button_mouse)                                                                                   |
| [`bool`](class_bool.md)                           | [`editors/3d/navigation/emulate_numpad`](#class_editorsettings_property_editors/3d/navigation/emulate_numpad)                                                                                                   |
| [`bool`](class_bool.md)                           | [`editors/3d/navigation/invert_x_axis`](#class_editorsettings_property_editors/3d/navigation/invert_x_axis)                                                                                                     |
| [`bool`](class_bool.md)                           | [`editors/3d/navigation/invert_y_axis`](#class_editorsettings_property_editors/3d/navigation/invert_y_axis)                                                                                                     |
| [`int`](class_int.md)                             | [`editors/3d/navigation/navigation_scheme`](#class_editorsettings_property_editors/3d/navigation/navigation_scheme)                                                                                             |
| [`int`](class_int.md)                             | [`editors/3d/navigation/orbit_modifier`](#class_editorsettings_property_editors/3d/navigation/orbit_modifier)                                                                                                   |
| [`int`](class_int.md)                             | [`editors/3d/navigation/pan_modifier`](#class_editorsettings_property_editors/3d/navigation/pan_modifier)                                                                                                       |
| [`bool`](class_bool.md)                           | [`editors/3d/navigation/warped_mouse_panning`](#class_editorsettings_property_editors/3d/navigation/warped_mouse_panning)                                                                                       |
| [`int`](class_int.md)                             | [`editors/3d/navigation/zoom_modifier`](#class_editorsettings_property_editors/3d/navigation/zoom_modifier)                                                                                                     |
| [`int`](class_int.md)                             | [`editors/3d/navigation/zoom_style`](#class_editorsettings_property_editors/3d/navigation/zoom_style)                                                                                                           |
| [`float`](class_float.md)                         | [`editors/3d/navigation_feel/orbit_inertia`](#class_editorsettings_property_editors/3d/navigation_feel/orbit_inertia)                                                                                           |
| [`float`](class_float.md)                         | [`editors/3d/navigation_feel/orbit_sensitivity`](#class_editorsettings_property_editors/3d/navigation_feel/orbit_sensitivity)                                                                                   |
| [`float`](class_float.md)                         | [`editors/3d/navigation_feel/translation_inertia`](#class_editorsettings_property_editors/3d/navigation_feel/translation_inertia)                                                                               |
| [`float`](class_float.md)                         | [`editors/3d/navigation_feel/zoom_inertia`](#class_editorsettings_property_editors/3d/navigation_feel/zoom_inertia)                                                                                             |
| [`Color`](class_color.md)                         | [`editors/3d/primary_grid_color`](#class_editorsettings_property_editors/3d/primary_grid_color)                                                                                                                 |
| [`int`](class_int.md)                             | [`editors/3d/primary_grid_steps`](#class_editorsettings_property_editors/3d/primary_grid_steps)                                                                                                                 |
| [`Color`](class_color.md)                         | [`editors/3d/secondary_grid_color`](#class_editorsettings_property_editors/3d/secondary_grid_color)                                                                                                             |
| [`Color`](class_color.md)                         | [`editors/3d/selection_box_color`](#class_editorsettings_property_editors/3d/selection_box_color)                                                                                                               |
| [`Color`](class_color.md)                         | [`editors/3d_gizmos/gizmo_colors/aabb`](#class_editorsettings_property_editors/3d_gizmos/gizmo_colors/aabb)                                                                                                     |
| [`Color`](class_color.md)                         | [`editors/3d_gizmos/gizmo_colors/instantiated`](#class_editorsettings_property_editors/3d_gizmos/gizmo_colors/instantiated)                                                                                     |
| [`Color`](class_color.md)                         | [`editors/3d_gizmos/gizmo_colors/joint`](#class_editorsettings_property_editors/3d_gizmos/gizmo_colors/joint)                                                                                                   |
| [`bool`](class_bool.md)                           | [`editors/animation/autorename_animation_tracks`](#class_editorsettings_property_editors/animation/autorename_animation_tracks)                                                                                 |
| [`bool`](class_bool.md)                           | [`editors/animation/confirm_insert_track`](#class_editorsettings_property_editors/animation/confirm_insert_track)                                                                                               |
| [`bool`](class_bool.md)                           | [`editors/animation/default_create_bezier_tracks`](#class_editorsettings_property_editors/animation/default_create_bezier_tracks)                                                                               |
| [`bool`](class_bool.md)                           | [`editors/animation/default_create_reset_tracks`](#class_editorsettings_property_editors/animation/default_create_reset_tracks)                                                                                 |
| [`Color`](class_color.md)                         | [`editors/animation/onion_layers_future_color`](#class_editorsettings_property_editors/animation/onion_layers_future_color)                                                                                     |
| [`Color`](class_color.md)                         | [`editors/animation/onion_layers_past_color`](#class_editorsettings_property_editors/animation/onion_layers_past_color)                                                                                         |
| [`float`](class_float.md)                         | [`editors/grid_map/pick_distance`](#class_editorsettings_property_editors/grid_map/pick_distance)                                                                                                               |
| [`int`](class_int.md)                             | [`editors/panning/2d_editor_pan_speed`](#class_editorsettings_property_editors/panning/2d_editor_pan_speed)                                                                                                     |
| [`int`](class_int.md)                             | [`editors/panning/2d_editor_panning_scheme`](#class_editorsettings_property_editors/panning/2d_editor_panning_scheme)                                                                                           |
| [`int`](class_int.md)                             | [`editors/panning/animation_editors_panning_scheme`](#class_editorsettings_property_editors/panning/animation_editors_panning_scheme)                                                                           |
| [`bool`](class_bool.md)                           | [`editors/panning/simple_panning`](#class_editorsettings_property_editors/panning/simple_panning)                                                                                                               |
| [`int`](class_int.md)                             | [`editors/panning/sub_editors_panning_scheme`](#class_editorsettings_property_editors/panning/sub_editors_panning_scheme)                                                                                       |
| [`bool`](class_bool.md)                           | [`editors/panning/warped_mouse_panning`](#class_editorsettings_property_editors/panning/warped_mouse_panning)                                                                                                   |
| [`float`](class_float.md)                         | [`editors/polygon_editor/auto_bake_delay`](#class_editorsettings_property_editors/polygon_editor/auto_bake_delay)                                                                                               |
| [`int`](class_int.md)                             | [`editors/polygon_editor/point_grab_radius`](#class_editorsettings_property_editors/polygon_editor/point_grab_radius)                                                                                           |
| [`bool`](class_bool.md)                           | [`editors/polygon_editor/show_previous_outline`](#class_editorsettings_property_editors/polygon_editor/show_previous_outline)                                                                                   |
| [`bool`](class_bool.md)                           | [`editors/shader_editor/behavior/files/restore_shaders_on_load`](#class_editorsettings_property_editors/shader_editor/behavior/files/restore_shaders_on_load)                                                   |
| [`bool`](class_bool.md)                           | [`editors/tiles_editor/display_grid`](#class_editorsettings_property_editors/tiles_editor/display_grid)                                                                                                         |
| [`Color`](class_color.md)                         | [`editors/tiles_editor/grid_color`](#class_editorsettings_property_editors/tiles_editor/grid_color)                                                                                                             |
| [`bool`](class_bool.md)                           | [`editors/tiles_editor/highlight_selected_layer`](#class_editorsettings_property_editors/tiles_editor/highlight_selected_layer)                                                                                 |
| [`Color`](class_color.md)                         | [`editors/visual_editors/category_colors/color_color`](#class_editorsettings_property_editors/visual_editors/category_colors/color_color)                                                                       |
| [`Color`](class_color.md)                         | [`editors/visual_editors/category_colors/conditional_color`](#class_editorsettings_property_editors/visual_editors/category_colors/conditional_color)                                                           |
| [`Color`](class_color.md)                         | [`editors/visual_editors/category_colors/input_color`](#class_editorsettings_property_editors/visual_editors/category_colors/input_color)                                                                       |
| [`Color`](class_color.md)                         | [`editors/visual_editors/category_colors/output_color`](#class_editorsettings_property_editors/visual_editors/category_colors/output_color)                                                                     |
| [`Color`](class_color.md)                         | [`editors/visual_editors/category_colors/particle_color`](#class_editorsettings_property_editors/visual_editors/category_colors/particle_color)                                                                 |
| [`Color`](class_color.md)                         | [`editors/visual_editors/category_colors/scalar_color`](#class_editorsettings_property_editors/visual_editors/category_colors/scalar_color)                                                                     |
| [`Color`](class_color.md)                         | [`editors/visual_editors/category_colors/special_color`](#class_editorsettings_property_editors/visual_editors/category_colors/special_color)                                                                   |
| [`Color`](class_color.md)                         | [`editors/visual_editors/category_colors/textures_color`](#class_editorsettings_property_editors/visual_editors/category_colors/textures_color)                                                                 |
| [`Color`](class_color.md)                         | [`editors/visual_editors/category_colors/transform_color`](#class_editorsettings_property_editors/visual_editors/category_colors/transform_color)                                                               |
| [`Color`](class_color.md)                         | [`editors/visual_editors/category_colors/utility_color`](#class_editorsettings_property_editors/visual_editors/category_colors/utility_color)                                                                   |
| [`Color`](class_color.md)                         | [`editors/visual_editors/category_colors/vector_color`](#class_editorsettings_property_editors/visual_editors/category_colors/vector_color)                                                                     |
| [`String`](class_string.md)                       | [`editors/visual_editors/color_theme`](#class_editorsettings_property_editors/visual_editors/color_theme)                                                                                                       |
| [`Color`](class_color.md)                         | [`editors/visual_editors/connection_colors/boolean_color`](#class_editorsettings_property_editors/visual_editors/connection_colors/boolean_color)                                                               |
| [`Color`](class_color.md)                         | [`editors/visual_editors/connection_colors/sampler_color`](#class_editorsettings_property_editors/visual_editors/connection_colors/sampler_color)                                                               |
| [`Color`](class_color.md)                         | [`editors/visual_editors/connection_colors/scalar_color`](#class_editorsettings_property_editors/visual_editors/connection_colors/scalar_color)                                                                 |
| [`Color`](class_color.md)                         | [`editors/visual_editors/connection_colors/transform_color`](#class_editorsettings_property_editors/visual_editors/connection_colors/transform_color)                                                           |
| [`Color`](class_color.md)                         | [`editors/visual_editors/connection_colors/vector2_color`](#class_editorsettings_property_editors/visual_editors/connection_colors/vector2_color)                                                               |
| [`Color`](class_color.md)                         | [`editors/visual_editors/connection_colors/vector3_color`](#class_editorsettings_property_editors/visual_editors/connection_colors/vector3_color)                                                               |
| [`Color`](class_color.md)                         | [`editors/visual_editors/connection_colors/vector4_color`](#class_editorsettings_property_editors/visual_editors/connection_colors/vector4_color)                                                               |
| [`int`](class_int.md)                             | [`editors/visual_editors/grid_pattern`](#class_editorsettings_property_editors/visual_editors/grid_pattern)                                                                                                     |
| [`float`](class_float.md)                         | [`editors/visual_editors/lines_curvature`](#class_editorsettings_property_editors/visual_editors/lines_curvature)                                                                                               |
| [`float`](class_float.md)                         | [`editors/visual_editors/minimap_opacity`](#class_editorsettings_property_editors/visual_editors/minimap_opacity)                                                                                               |
| [`int`](class_int.md)                             | [`editors/visual_editors/visual_shader/port_preview_size`](#class_editorsettings_property_editors/visual_editors/visual_shader/port_preview_size)                                                               |
| [`String`](class_string.md)                       | [`filesystem/directories/autoscan_project_path`](#class_editorsettings_property_filesystem/directories/autoscan_project_path)                                                                                   |
| [`String`](class_string.md)                       | [`filesystem/directories/default_project_path`](#class_editorsettings_property_filesystem/directories/default_project_path)                                                                                     |
| [`String`](class_string.md)                       | [`filesystem/external_programs/3d_model_editor`](#class_editorsettings_property_filesystem/external_programs/3d_model_editor)                                                                                   |
| [`String`](class_string.md)                       | [`filesystem/external_programs/audio_editor`](#class_editorsettings_property_filesystem/external_programs/audio_editor)                                                                                         |
| [`String`](class_string.md)                       | [`filesystem/external_programs/raster_image_editor`](#class_editorsettings_property_filesystem/external_programs/raster_image_editor)                                                                           |
| [`String`](class_string.md)                       | [`filesystem/external_programs/terminal_emulator`](#class_editorsettings_property_filesystem/external_programs/terminal_emulator)                                                                               |
| [`String`](class_string.md)                       | [`filesystem/external_programs/terminal_emulator_flags`](#class_editorsettings_property_filesystem/external_programs/terminal_emulator_flags)                                                                   |
| [`String`](class_string.md)                       | [`filesystem/external_programs/vector_image_editor`](#class_editorsettings_property_filesystem/external_programs/vector_image_editor)                                                                           |
| [`int`](class_int.md)                             | [`filesystem/file_dialog/display_mode`](#class_editorsettings_property_filesystem/file_dialog/display_mode)                                                                                                     |
| [`bool`](class_bool.md)                           | [`filesystem/file_dialog/show_hidden_files`](#class_editorsettings_property_filesystem/file_dialog/show_hidden_files)                                                                                           |
| [`int`](class_int.md)                             | [`filesystem/file_dialog/thumbnail_size`](#class_editorsettings_property_filesystem/file_dialog/thumbnail_size)                                                                                                 |
| [`String`](class_string.md)                       | [`filesystem/import/blender/blender_path`](#class_editorsettings_property_filesystem/import/blender/blender_path)                                                                                               |
| [`int`](class_int.md)                             | [`filesystem/import/blender/rpc_port`](#class_editorsettings_property_filesystem/import/blender/rpc_port)                                                                                                       |
| [`float`](class_float.md)                         | [`filesystem/import/blender/rpc_server_uptime`](#class_editorsettings_property_filesystem/import/blender/rpc_server_uptime)                                                                                     |
| [`String`](class_string.md)                       | [`filesystem/import/fbx/fbx2gltf_path`](#class_editorsettings_property_filesystem/import/fbx/fbx2gltf_path)                                                                                                     |
| [`bool`](class_bool.md)                           | [`filesystem/on_save/compress_binary_resources`](#class_editorsettings_property_filesystem/on_save/compress_binary_resources)                                                                                   |
| [`bool`](class_bool.md)                           | [`filesystem/on_save/safe_save_on_backup_then_rename`](#class_editorsettings_property_filesystem/on_save/safe_save_on_backup_then_rename)                                                                       |
| [`String`](class_string.md)                       | [`filesystem/tools/oidn/oidn_denoise_path`](#class_editorsettings_property_filesystem/tools/oidn/oidn_denoise_path)                                                                                             |
| [`bool`](class_bool.md)                           | [`input/buffering/agile_event_flushing`](#class_editorsettings_property_input/buffering/agile_event_flushing)                                                                                                   |
| [`bool`](class_bool.md)                           | [`input/buffering/use_accumulated_input`](#class_editorsettings_property_input/buffering/use_accumulated_input)                                                                                                 |
| [`int`](class_int.md)                             | [`interface/editor/accept_dialog_cancel_ok_buttons`](#class_editorsettings_property_interface/editor/accept_dialog_cancel_ok_buttons)                                                                           |
| [`bool`](class_bool.md)                           | [`interface/editor/automatically_open_screenshots`](#class_editorsettings_property_interface/editor/automatically_open_screenshots)                                                                             |
| [`String`](class_string.md)                       | [`interface/editor/code_font`](#class_editorsettings_property_interface/editor/code_font)                                                                                                                       |
| [`int`](class_int.md)                             | [`interface/editor/code_font_contextual_ligatures`](#class_editorsettings_property_interface/editor/code_font_contextual_ligatures)                                                                             |
| [`String`](class_string.md)                       | [`interface/editor/code_font_custom_opentype_features`](#class_editorsettings_property_interface/editor/code_font_custom_opentype_features)                                                                     |
| [`String`](class_string.md)                       | [`interface/editor/code_font_custom_variations`](#class_editorsettings_property_interface/editor/code_font_custom_variations)                                                                                   |
| [`int`](class_int.md)                             | [`interface/editor/code_font_size`](#class_editorsettings_property_interface/editor/code_font_size)                                                                                                             |
| [`float`](class_float.md)                         | [`interface/editor/custom_display_scale`](#class_editorsettings_property_interface/editor/custom_display_scale)                                                                                                 |
| [`int`](class_int.md)                             | [`interface/editor/display_scale`](#class_editorsettings_property_interface/editor/display_scale)                                                                                                               |
| [`int`](class_int.md)                             | [`interface/editor/dock_tab_style`](#class_editorsettings_property_interface/editor/dock_tab_style)                                                                                                             |
| [`String`](class_string.md)                       | [`interface/editor/editor_language`](#class_editorsettings_property_interface/editor/editor_language)                                                                                                           |
| [`int`](class_int.md)                             | [`interface/editor/editor_screen`](#class_editorsettings_property_interface/editor/editor_screen)                                                                                                               |
| [`bool`](class_bool.md)                           | [`interface/editor/expand_to_title`](#class_editorsettings_property_interface/editor/expand_to_title)                                                                                                           |
| [`int`](class_int.md)                             | [`interface/editor/font_antialiasing`](#class_editorsettings_property_interface/editor/font_antialiasing)                                                                                                       |
| [`bool`](class_bool.md)                           | [`interface/editor/font_disable_embedded_bitmaps`](#class_editorsettings_property_interface/editor/font_disable_embedded_bitmaps)                                                                               |
| [`int`](class_int.md)                             | [`interface/editor/font_hinting`](#class_editorsettings_property_interface/editor/font_hinting)                                                                                                                 |
| [`int`](class_int.md)                             | [`interface/editor/font_subpixel_positioning`](#class_editorsettings_property_interface/editor/font_subpixel_positioning)                                                                                       |
| [`bool`](class_bool.md)                           | [`interface/editor/import_resources_when_unfocused`](#class_editorsettings_property_interface/editor/import_resources_when_unfocused)                                                                           |
| [`bool`](class_bool.md)                           | [`interface/editor/localize_settings`](#class_editorsettings_property_interface/editor/localize_settings)                                                                                                       |
| [`int`](class_int.md)                             | [`interface/editor/low_processor_mode_sleep_usec`](#class_editorsettings_property_interface/editor/low_processor_mode_sleep_usec)                                                                               |
| [`String`](class_string.md)                       | [`interface/editor/main_font`](#class_editorsettings_property_interface/editor/main_font)                                                                                                                       |
| [`String`](class_string.md)                       | [`interface/editor/main_font_bold`](#class_editorsettings_property_interface/editor/main_font_bold)                                                                                                             |
| [`int`](class_int.md)                             | [`interface/editor/main_font_size`](#class_editorsettings_property_interface/editor/main_font_size)                                                                                                             |
| [`bool`](class_bool.md)                           | [`interface/editor/mouse_extra_buttons_navigate_history`](#class_editorsettings_property_interface/editor/mouse_extra_buttons_navigate_history)                                                                 |
| [`int`](class_int.md)                             | [`interface/editor/project_manager_screen`](#class_editorsettings_property_interface/editor/project_manager_screen)                                                                                             |
| [`bool`](class_bool.md)                           | [`interface/editor/save_each_scene_on_quit`](#class_editorsettings_property_interface/editor/save_each_scene_on_quit)                                                                                           |
| [`bool`](class_bool.md)                           | [`interface/editor/save_on_focus_loss`](#class_editorsettings_property_interface/editor/save_on_focus_loss)                                                                                                     |
| [`bool`](class_bool.md)                           | [`interface/editor/separate_distraction_mode`](#class_editorsettings_property_interface/editor/separate_distraction_mode)                                                                                       |
| [`int`](class_int.md)                             | [`interface/editor/show_internal_errors_in_toast_notifications`](#class_editorsettings_property_interface/editor/show_internal_errors_in_toast_notifications)                                                   |
| [`int`](class_int.md)                             | [`interface/editor/show_update_spinner`](#class_editorsettings_property_interface/editor/show_update_spinner)                                                                                                   |
| [`bool`](class_bool.md)                           | [`interface/editor/single_window_mode`](#class_editorsettings_property_interface/editor/single_window_mode)                                                                                                     |
| [`int`](class_int.md)                             | [`interface/editor/ui_layout_direction`](#class_editorsettings_property_interface/editor/ui_layout_direction)                                                                                                   |
| [`int`](class_int.md)                             | [`interface/editor/unfocused_low_processor_mode_sleep_usec`](#class_editorsettings_property_interface/editor/unfocused_low_processor_mode_sleep_usec)                                                           |
| [`bool`](class_bool.md)                           | [`interface/editor/update_continuously`](#class_editorsettings_property_interface/editor/update_continuously)                                                                                                   |
| [`bool`](class_bool.md)                           | [`interface/editor/use_embedded_menu`](#class_editorsettings_property_interface/editor/use_embedded_menu)                                                                                                       |
| [`bool`](class_bool.md)                           | [`interface/editor/use_native_file_dialogs`](#class_editorsettings_property_interface/editor/use_native_file_dialogs)                                                                                           |
| [`int`](class_int.md)                             | [`interface/editor/vsync_mode`](#class_editorsettings_property_interface/editor/vsync_mode)                                                                                                                     |
| [`bool`](class_bool.md)                           | [`interface/inspector/auto_unfold_foreign_scenes`](#class_editorsettings_property_interface/inspector/auto_unfold_foreign_scenes)                                                                               |
| [`int`](class_int.md)                             | [`interface/inspector/default_color_picker_mode`](#class_editorsettings_property_interface/inspector/default_color_picker_mode)                                                                                 |
| [`int`](class_int.md)                             | [`interface/inspector/default_color_picker_shape`](#class_editorsettings_property_interface/inspector/default_color_picker_shape)                                                                               |
| [`float`](class_float.md)                         | [`interface/inspector/default_float_step`](#class_editorsettings_property_interface/inspector/default_float_step)                                                                                               |
| [`int`](class_int.md)                             | [`interface/inspector/default_property_name_style`](#class_editorsettings_property_interface/inspector/default_property_name_style)                                                                             |
| [`bool`](class_bool.md)                           | [`interface/inspector/delimitate_all_container_and_resources`](#class_editorsettings_property_interface/inspector/delimitate_all_container_and_resources)                                                       |
| [`bool`](class_bool.md)                           | [`interface/inspector/disable_folding`](#class_editorsettings_property_interface/inspector/disable_folding)                                                                                                     |
| [`float`](class_float.md)                         | [`interface/inspector/float_drag_speed`](#class_editorsettings_property_interface/inspector/float_drag_speed)                                                                                                   |
| [`bool`](class_bool.md)                           | [`interface/inspector/horizontal_vector2_editing`](#class_editorsettings_property_interface/inspector/horizontal_vector2_editing)                                                                               |
| [`bool`](class_bool.md)                           | [`interface/inspector/horizontal_vector_types_editing`](#class_editorsettings_property_interface/inspector/horizontal_vector_types_editing)                                                                     |
| [`int`](class_int.md)                             | [`interface/inspector/max_array_dictionary_items_per_page`](#class_editorsettings_property_interface/inspector/max_array_dictionary_items_per_page)                                                             |
| [`int`](class_int.md)                             | [`interface/inspector/nested_color_mode`](#class_editorsettings_property_interface/inspector/nested_color_mode)                                                                                                 |
| [`bool`](class_bool.md)                           | [`interface/inspector/open_resources_in_current_inspector`](#class_editorsettings_property_interface/inspector/open_resources_in_current_inspector)                                                             |
| [`PackedStringArray`](class_packedstringarray.md) | [`interface/inspector/resources_to_open_in_new_inspector`](#class_editorsettings_property_interface/inspector/resources_to_open_in_new_inspector)                                                               |
| [`bool`](class_bool.md)                           | [`interface/inspector/show_low_level_opentype_features`](#class_editorsettings_property_interface/inspector/show_low_level_opentype_features)                                                                   |
| [`bool`](class_bool.md)                           | [`interface/multi_window/enable`](#class_editorsettings_property_interface/multi_window/enable)                                                                                                                 |
| [`bool`](class_bool.md)                           | [`interface/multi_window/maximize_window`](#class_editorsettings_property_interface/multi_window/maximize_window)                                                                                               |
| [`bool`](class_bool.md)                           | [`interface/multi_window/restore_windows_on_load`](#class_editorsettings_property_interface/multi_window/restore_windows_on_load)                                                                               |
| [`int`](class_int.md)                             | [`interface/scene_tabs/display_close_button`](#class_editorsettings_property_interface/scene_tabs/display_close_button)                                                                                         |
| [`int`](class_int.md)                             | [`interface/scene_tabs/maximum_width`](#class_editorsettings_property_interface/scene_tabs/maximum_width)                                                                                                       |
| [`bool`](class_bool.md)                           | [`interface/scene_tabs/restore_scenes_on_load`](#class_editorsettings_property_interface/scene_tabs/restore_scenes_on_load)                                                                                     |
| [`bool`](class_bool.md)                           | [`interface/scene_tabs/show_script_button`](#class_editorsettings_property_interface/scene_tabs/show_script_button)                                                                                             |
| [`bool`](class_bool.md)                           | [`interface/scene_tabs/show_thumbnail_on_hover`](#class_editorsettings_property_interface/scene_tabs/show_thumbnail_on_hover)                                                                                   |
| [`Color`](class_color.md)                         | [`interface/theme/accent_color`](#class_editorsettings_property_interface/theme/accent_color)                                                                                                                   |
| [`int`](class_int.md)                             | [`interface/theme/additional_spacing`](#class_editorsettings_property_interface/theme/additional_spacing)                                                                                                       |
| [`Color`](class_color.md)                         | [`interface/theme/base_color`](#class_editorsettings_property_interface/theme/base_color)                                                                                                                       |
| [`int`](class_int.md)                             | [`interface/theme/base_spacing`](#class_editorsettings_property_interface/theme/base_spacing)                                                                                                                   |
| [`int`](class_int.md)                             | [`interface/theme/border_size`](#class_editorsettings_property_interface/theme/border_size)                                                                                                                     |
| [`float`](class_float.md)                         | [`interface/theme/contrast`](#class_editorsettings_property_interface/theme/contrast)                                                                                                                           |
| [`int`](class_int.md)                             | [`interface/theme/corner_radius`](#class_editorsettings_property_interface/theme/corner_radius)                                                                                                                 |
| [`String`](class_string.md)                       | [`interface/theme/custom_theme`](#class_editorsettings_property_interface/theme/custom_theme)                                                                                                                   |
| [`bool`](class_bool.md)                           | [`interface/theme/draw_extra_borders`](#class_editorsettings_property_interface/theme/draw_extra_borders)                                                                                                       |
| [`bool`](class_bool.md)                           | [`interface/theme/follow_system_theme`](#class_editorsettings_property_interface/theme/follow_system_theme)                                                                                                     |
| [`int`](class_int.md)                             | [`interface/theme/icon_and_font_color`](#class_editorsettings_property_interface/theme/icon_and_font_color)                                                                                                     |
| [`float`](class_float.md)                         | [`interface/theme/icon_saturation`](#class_editorsettings_property_interface/theme/icon_saturation)                                                                                                             |
| [`String`](class_string.md)                       | [`interface/theme/preset`](#class_editorsettings_property_interface/theme/preset)                                                                                                                               |
| [`float`](class_float.md)                         | [`interface/theme/relationship_line_opacity`](#class_editorsettings_property_interface/theme/relationship_line_opacity)                                                                                         |
| [`String`](class_string.md)                       | [`interface/theme/spacing_preset`](#class_editorsettings_property_interface/theme/spacing_preset)                                                                                                               |
| [`bool`](class_bool.md)                           | [`interface/theme/use_system_accent_color`](#class_editorsettings_property_interface/theme/use_system_accent_color)                                                                                             |
| [`bool`](class_bool.md)                           | [`interface/touchscreen/enable_long_press_as_right_click`](#class_editorsettings_property_interface/touchscreen/enable_long_press_as_right_click)                                                               |
| [`bool`](class_bool.md)                           | [`interface/touchscreen/enable_pan_and_scale_gestures`](#class_editorsettings_property_interface/touchscreen/enable_pan_and_scale_gestures)                                                                     |
| [`bool`](class_bool.md)                           | [`interface/touchscreen/increase_scrollbar_touch_area`](#class_editorsettings_property_interface/touchscreen/increase_scrollbar_touch_area)                                                                     |
| [`float`](class_float.md)                         | [`interface/touchscreen/scale_gizmo_handles`](#class_editorsettings_property_interface/touchscreen/scale_gizmo_handles)                                                                                         |
| [`int`](class_int.md)                             | [`network/connection/engine_version_update_mode`](#class_editorsettings_property_network/connection/engine_version_update_mode)                                                                                 |
| [`int`](class_int.md)                             | [`network/connection/network_mode`](#class_editorsettings_property_network/connection/network_mode)                                                                                                             |
| [`String`](class_string.md)                       | [`network/debug/remote_host`](#class_editorsettings_property_network/debug/remote_host)                                                                                                                         |
| [`int`](class_int.md)                             | [`network/debug/remote_port`](#class_editorsettings_property_network/debug/remote_port)                                                                                                                         |
| [`String`](class_string.md)                       | [`network/http_proxy/host`](#class_editorsettings_property_network/http_proxy/host)                                                                                                                             |
| [`int`](class_int.md)                             | [`network/http_proxy/port`](#class_editorsettings_property_network/http_proxy/port)                                                                                                                             |
| [`String`](class_string.md)                       | [`network/tls/editor_tls_certificates`](#class_editorsettings_property_network/tls/editor_tls_certificates)                                                                                                     |
| [`String`](class_string.md)                       | [`project_manager/default_renderer`](#class_editorsettings_property_project_manager/default_renderer)                                                                                                           |
| [`int`](class_int.md)                             | [`project_manager/directory_naming_convention`](#class_editorsettings_property_project_manager/directory_naming_convention)                                                                                     |
| [`int`](class_int.md)                             | [`project_manager/sorting_order`](#class_editorsettings_property_project_manager/sorting_order)                                                                                                                 |
| [`bool`](class_bool.md)                           | [`run/auto_save/save_before_running`](#class_editorsettings_property_run/auto_save/save_before_running)                                                                                                         |
| [`int`](class_int.md)                             | [`run/bottom_panel/action_on_play`](#class_editorsettings_property_run/bottom_panel/action_on_play)                                                                                                             |
| [`int`](class_int.md)                             | [`run/bottom_panel/action_on_stop`](#class_editorsettings_property_run/bottom_panel/action_on_stop)                                                                                                             |
| [`bool`](class_bool.md)                           | [`run/output/always_clear_output_on_play`](#class_editorsettings_property_run/output/always_clear_output_on_play)                                                                                               |
| [`int`](class_int.md)                             | [`run/output/font_size`](#class_editorsettings_property_run/output/font_size)                                                                                                                                   |
| [`int`](class_int.md)                             | [`run/output/max_lines`](#class_editorsettings_property_run/output/max_lines)                                                                                                                                   |
| [`bool`](class_bool.md)                           | [`run/platforms/linuxbsd/prefer_wayland`](#class_editorsettings_property_run/platforms/linuxbsd/prefer_wayland)                                                                                                 |
| [`int`](class_int.md)                             | [`run/window_placement/android_window`](#class_editorsettings_property_run/window_placement/android_window)                                                                                                     |
| [`int`](class_int.md)                             | [`run/window_placement/rect`](#class_editorsettings_property_run/window_placement/rect)                                                                                                                         |
| [`Vector2`](class_vector2.md)                     | [`run/window_placement/rect_custom_position`](#class_editorsettings_property_run/window_placement/rect_custom_position)                                                                                         |
| [`int`](class_int.md)                             | [`run/window_placement/screen`](#class_editorsettings_property_run/window_placement/screen)                                                                                                                     |
| [`bool`](class_bool.md)                           | [`text_editor/appearance/caret/caret_blink`](#class_editorsettings_property_text_editor/appearance/caret/caret_blink)                                                                                           |
| [`float`](class_float.md)                         | [`text_editor/appearance/caret/caret_blink_interval`](#class_editorsettings_property_text_editor/appearance/caret/caret_blink_interval)                                                                         |
| [`bool`](class_bool.md)                           | [`text_editor/appearance/caret/highlight_all_occurrences`](#class_editorsettings_property_text_editor/appearance/caret/highlight_all_occurrences)                                                               |
| [`bool`](class_bool.md)                           | [`text_editor/appearance/caret/highlight_current_line`](#class_editorsettings_property_text_editor/appearance/caret/highlight_current_line)                                                                     |
| [`int`](class_int.md)                             | [`text_editor/appearance/caret/type`](#class_editorsettings_property_text_editor/appearance/caret/type)                                                                                                         |
| [`int`](class_int.md)                             | [`text_editor/appearance/guidelines/line_length_guideline_hard_column`](#class_editorsettings_property_text_editor/appearance/guidelines/line_length_guideline_hard_column)                                     |
| [`int`](class_int.md)                             | [`text_editor/appearance/guidelines/line_length_guideline_soft_column`](#class_editorsettings_property_text_editor/appearance/guidelines/line_length_guideline_soft_column)                                     |
| [`bool`](class_bool.md)                           | [`text_editor/appearance/guidelines/show_line_length_guidelines`](#class_editorsettings_property_text_editor/appearance/guidelines/show_line_length_guidelines)                                                 |
| [`bool`](class_bool.md)                           | [`text_editor/appearance/gutters/highlight_type_safe_lines`](#class_editorsettings_property_text_editor/appearance/gutters/highlight_type_safe_lines)                                                           |
| [`bool`](class_bool.md)                           | [`text_editor/appearance/gutters/line_numbers_zero_padded`](#class_editorsettings_property_text_editor/appearance/gutters/line_numbers_zero_padded)                                                             |
| [`bool`](class_bool.md)                           | [`text_editor/appearance/gutters/show_info_gutter`](#class_editorsettings_property_text_editor/appearance/gutters/show_info_gutter)                                                                             |
| [`bool`](class_bool.md)                           | [`text_editor/appearance/gutters/show_line_numbers`](#class_editorsettings_property_text_editor/appearance/gutters/show_line_numbers)                                                                           |
| [`int`](class_int.md)                             | [`text_editor/appearance/lines/autowrap_mode`](#class_editorsettings_property_text_editor/appearance/lines/autowrap_mode)                                                                                       |
| [`bool`](class_bool.md)                           | [`text_editor/appearance/lines/code_folding`](#class_editorsettings_property_text_editor/appearance/lines/code_folding)                                                                                         |
| [`int`](class_int.md)                             | [`text_editor/appearance/lines/word_wrap`](#class_editorsettings_property_text_editor/appearance/lines/word_wrap)                                                                                               |
| [`int`](class_int.md)                             | [`text_editor/appearance/minimap/minimap_width`](#class_editorsettings_property_text_editor/appearance/minimap/minimap_width)                                                                                   |
| [`bool`](class_bool.md)                           | [`text_editor/appearance/minimap/show_minimap`](#class_editorsettings_property_text_editor/appearance/minimap/show_minimap)                                                                                     |
| [`bool`](class_bool.md)                           | [`text_editor/appearance/whitespace/draw_spaces`](#class_editorsettings_property_text_editor/appearance/whitespace/draw_spaces)                                                                                 |
| [`bool`](class_bool.md)                           | [`text_editor/appearance/whitespace/draw_tabs`](#class_editorsettings_property_text_editor/appearance/whitespace/draw_tabs)                                                                                     |
| [`int`](class_int.md)                             | [`text_editor/appearance/whitespace/line_spacing`](#class_editorsettings_property_text_editor/appearance/whitespace/line_spacing)                                                                               |
| [`bool`](class_bool.md)                           | [`text_editor/behavior/files/auto_reload_scripts_on_external_change`](#class_editorsettings_property_text_editor/behavior/files/auto_reload_scripts_on_external_change)                                         |
| [`int`](class_int.md)                             | [`text_editor/behavior/files/autosave_interval_secs`](#class_editorsettings_property_text_editor/behavior/files/autosave_interval_secs)                                                                         |
| [`bool`](class_bool.md)                           | [`text_editor/behavior/files/convert_indent_on_save`](#class_editorsettings_property_text_editor/behavior/files/convert_indent_on_save)                                                                         |
| [`bool`](class_bool.md)                           | [`text_editor/behavior/files/restore_scripts_on_load`](#class_editorsettings_property_text_editor/behavior/files/restore_scripts_on_load)                                                                       |
| [`bool`](class_bool.md)                           | [`text_editor/behavior/files/trim_final_newlines_on_save`](#class_editorsettings_property_text_editor/behavior/files/trim_final_newlines_on_save)                                                               |
| [`bool`](class_bool.md)                           | [`text_editor/behavior/files/trim_trailing_whitespace_on_save`](#class_editorsettings_property_text_editor/behavior/files/trim_trailing_whitespace_on_save)                                                     |
| [`bool`](class_bool.md)                           | [`text_editor/behavior/indent/auto_indent`](#class_editorsettings_property_text_editor/behavior/indent/auto_indent)                                                                                             |
| [`bool`](class_bool.md)                           | [`text_editor/behavior/indent/indent_wrapped_lines`](#class_editorsettings_property_text_editor/behavior/indent/indent_wrapped_lines)                                                                           |
| [`int`](class_int.md)                             | [`text_editor/behavior/indent/size`](#class_editorsettings_property_text_editor/behavior/indent/size)                                                                                                           |
| [`int`](class_int.md)                             | [`text_editor/behavior/indent/type`](#class_editorsettings_property_text_editor/behavior/indent/type)                                                                                                           |
| [`String`](class_string.md)                       | [`text_editor/behavior/navigation/custom_word_separators`](#class_editorsettings_property_text_editor/behavior/navigation/custom_word_separators)                                                               |
| [`bool`](class_bool.md)                           | [`text_editor/behavior/navigation/drag_and_drop_selection`](#class_editorsettings_property_text_editor/behavior/navigation/drag_and_drop_selection)                                                             |
| [`bool`](class_bool.md)                           | [`text_editor/behavior/navigation/move_caret_on_right_click`](#class_editorsettings_property_text_editor/behavior/navigation/move_caret_on_right_click)                                                         |
| [`bool`](class_bool.md)                           | [`text_editor/behavior/navigation/open_script_when_connecting_signal_to_existing_method`](#class_editorsettings_property_text_editor/behavior/navigation/open_script_when_connecting_signal_to_existing_method) |
| [`bool`](class_bool.md)                           | [`text_editor/behavior/navigation/scroll_past_end_of_file`](#class_editorsettings_property_text_editor/behavior/navigation/scroll_past_end_of_file)                                                             |
| [`bool`](class_bool.md)                           | [`text_editor/behavior/navigation/smooth_scrolling`](#class_editorsettings_property_text_editor/behavior/navigation/smooth_scrolling)                                                                           |
| [`bool`](class_bool.md)                           | [`text_editor/behavior/navigation/stay_in_script_editor_on_node_selected`](#class_editorsettings_property_text_editor/behavior/navigation/stay_in_script_editor_on_node_selected)                               |
| [`bool`](class_bool.md)                           | [`text_editor/behavior/navigation/use_custom_word_separators`](#class_editorsettings_property_text_editor/behavior/navigation/use_custom_word_separators)                                                       |
| [`bool`](class_bool.md)                           | [`text_editor/behavior/navigation/use_default_word_separators`](#class_editorsettings_property_text_editor/behavior/navigation/use_default_word_separators)                                                     |
| [`int`](class_int.md)                             | [`text_editor/behavior/navigation/v_scroll_speed`](#class_editorsettings_property_text_editor/behavior/navigation/v_scroll_speed)                                                                               |
| [`bool`](class_bool.md)                           | [`text_editor/completion/add_node_path_literals`](#class_editorsettings_property_text_editor/completion/add_node_path_literals)                                                                                 |
| [`bool`](class_bool.md)                           | [`text_editor/completion/add_string_name_literals`](#class_editorsettings_property_text_editor/completion/add_string_name_literals)                                                                             |
| [`bool`](class_bool.md)                           | [`text_editor/completion/add_type_hints`](#class_editorsettings_property_text_editor/completion/add_type_hints)                                                                                                 |
| [`bool`](class_bool.md)                           | [`text_editor/completion/auto_brace_complete`](#class_editorsettings_property_text_editor/completion/auto_brace_complete)                                                                                       |
| [`float`](class_float.md)                         | [`text_editor/completion/code_complete_delay`](#class_editorsettings_property_text_editor/completion/code_complete_delay)                                                                                       |
| [`bool`](class_bool.md)                           | [`text_editor/completion/code_complete_enabled`](#class_editorsettings_property_text_editor/completion/code_complete_enabled)                                                                                   |
| [`bool`](class_bool.md)                           | [`text_editor/completion/colorize_suggestions`](#class_editorsettings_property_text_editor/completion/colorize_suggestions)                                                                                     |
| [`bool`](class_bool.md)                           | [`text_editor/completion/complete_file_paths`](#class_editorsettings_property_text_editor/completion/complete_file_paths)                                                                                       |
| [`float`](class_float.md)                         | [`text_editor/completion/idle_parse_delay`](#class_editorsettings_property_text_editor/completion/idle_parse_delay)                                                                                             |
| [`bool`](class_bool.md)                           | [`text_editor/completion/put_callhint_tooltip_below_current_line`](#class_editorsettings_property_text_editor/completion/put_callhint_tooltip_below_current_line)                                               |
| [`bool`](class_bool.md)                           | [`text_editor/completion/use_single_quotes`](#class_editorsettings_property_text_editor/completion/use_single_quotes)                                                                                           |
| [`int`](class_int.md)                             | [`text_editor/help/class_reference_examples`](#class_editorsettings_property_text_editor/help/class_reference_examples)                                                                                         |
| [`int`](class_int.md)                             | [`text_editor/help/help_font_size`](#class_editorsettings_property_text_editor/help/help_font_size)                                                                                                             |
| [`int`](class_int.md)                             | [`text_editor/help/help_source_font_size`](#class_editorsettings_property_text_editor/help/help_source_font_size)                                                                                               |
| [`int`](class_int.md)                             | [`text_editor/help/help_title_font_size`](#class_editorsettings_property_text_editor/help/help_title_font_size)                                                                                                 |
| [`bool`](class_bool.md)                           | [`text_editor/help/show_help_index`](#class_editorsettings_property_text_editor/help/show_help_index)                                                                                                           |
| [`bool`](class_bool.md)                           | [`text_editor/script_list/show_members_overview`](#class_editorsettings_property_text_editor/script_list/show_members_overview)                                                                                 |
| [`bool`](class_bool.md)                           | [`text_editor/script_list/sort_members_outline_alphabetically`](#class_editorsettings_property_text_editor/script_list/sort_members_outline_alphabetically)                                                     |
| [`String`](class_string.md)                       | [`text_editor/theme/color_theme`](#class_editorsettings_property_text_editor/theme/color_theme)                                                                                                                 |
| [`Color`](class_color.md)                         | [`text_editor/theme/highlighting/background_color`](#class_editorsettings_property_text_editor/theme/highlighting/background_color)                                                                             |
| [`Color`](class_color.md)                         | [`text_editor/theme/highlighting/base_type_color`](#class_editorsettings_property_text_editor/theme/highlighting/base_type_color)                                                                               |
| [`Color`](class_color.md)                         | [`text_editor/theme/highlighting/bookmark_color`](#class_editorsettings_property_text_editor/theme/highlighting/bookmark_color)                                                                                 |
| [`Color`](class_color.md)                         | [`text_editor/theme/highlighting/brace_mismatch_color`](#class_editorsettings_property_text_editor/theme/highlighting/brace_mismatch_color)                                                                     |
| [`Color`](class_color.md)                         | [`text_editor/theme/highlighting/breakpoint_color`](#class_editorsettings_property_text_editor/theme/highlighting/breakpoint_color)                                                                             |
| [`Color`](class_color.md)                         | [`text_editor/theme/highlighting/caret_background_color`](#class_editorsettings_property_text_editor/theme/highlighting/caret_background_color)                                                                 |
| [`Color`](class_color.md)                         | [`text_editor/theme/highlighting/caret_color`](#class_editorsettings_property_text_editor/theme/highlighting/caret_color)                                                                                       |
| [`Color`](class_color.md)                         | [`text_editor/theme/highlighting/code_folding_color`](#class_editorsettings_property_text_editor/theme/highlighting/code_folding_color)                                                                         |
| [`Color`](class_color.md)                         | [`text_editor/theme/highlighting/comment_color`](#class_editorsettings_property_text_editor/theme/highlighting/comment_color)                                                                                   |
| [`Color`](class_color.md)                         | [`text_editor/theme/highlighting/completion_background_color`](#class_editorsettings_property_text_editor/theme/highlighting/completion_background_color)                                                       |
| [`Color`](class_color.md)                         | [`text_editor/theme/highlighting/completion_existing_color`](#class_editorsettings_property_text_editor/theme/highlighting/completion_existing_color)                                                           |
| [`Color`](class_color.md)                         | [`text_editor/theme/highlighting/completion_font_color`](#class_editorsettings_property_text_editor/theme/highlighting/completion_font_color)                                                                   |
| [`Color`](class_color.md)                         | [`text_editor/theme/highlighting/completion_scroll_color`](#class_editorsettings_property_text_editor/theme/highlighting/completion_scroll_color)                                                               |
| [`Color`](class_color.md)                         | [`text_editor/theme/highlighting/completion_scroll_hovered_color`](#class_editorsettings_property_text_editor/theme/highlighting/completion_scroll_hovered_color)                                               |
| [`Color`](class_color.md)                         | [`text_editor/theme/highlighting/completion_selected_color`](#class_editorsettings_property_text_editor/theme/highlighting/completion_selected_color)                                                           |
| [`Color`](class_color.md)                         | [`text_editor/theme/highlighting/control_flow_keyword_color`](#class_editorsettings_property_text_editor/theme/highlighting/control_flow_keyword_color)                                                         |
| [`Color`](class_color.md)                         | [`text_editor/theme/highlighting/current_line_color`](#class_editorsettings_property_text_editor/theme/highlighting/current_line_color)                                                                         |
| [`Color`](class_color.md)                         | [`text_editor/theme/highlighting/doc_comment_color`](#class_editorsettings_property_text_editor/theme/highlighting/doc_comment_color)                                                                           |
| [`Color`](class_color.md)                         | [`text_editor/theme/highlighting/engine_type_color`](#class_editorsettings_property_text_editor/theme/highlighting/engine_type_color)                                                                           |
| [`Color`](class_color.md)                         | [`text_editor/theme/highlighting/executing_line_color`](#class_editorsettings_property_text_editor/theme/highlighting/executing_line_color)                                                                     |
| [`Color`](class_color.md)                         | [`text_editor/theme/highlighting/folded_code_region_color`](#class_editorsettings_property_text_editor/theme/highlighting/folded_code_region_color)                                                             |
| [`Color`](class_color.md)                         | [`text_editor/theme/highlighting/function_color`](#class_editorsettings_property_text_editor/theme/highlighting/function_color)                                                                                 |
| [`Color`](class_color.md)                         | [`text_editor/theme/highlighting/keyword_color`](#class_editorsettings_property_text_editor/theme/highlighting/keyword_color)                                                                                   |
| [`Color`](class_color.md)                         | [`text_editor/theme/highlighting/line_length_guideline_color`](#class_editorsettings_property_text_editor/theme/highlighting/line_length_guideline_color)                                                       |
| [`Color`](class_color.md)                         | [`text_editor/theme/highlighting/line_number_color`](#class_editorsettings_property_text_editor/theme/highlighting/line_number_color)                                                                           |
| [`Color`](class_color.md)                         | [`text_editor/theme/highlighting/mark_color`](#class_editorsettings_property_text_editor/theme/highlighting/mark_color)                                                                                         |
| [`Color`](class_color.md)                         | [`text_editor/theme/highlighting/member_variable_color`](#class_editorsettings_property_text_editor/theme/highlighting/member_variable_color)                                                                   |
| [`Color`](class_color.md)                         | [`text_editor/theme/highlighting/number_color`](#class_editorsettings_property_text_editor/theme/highlighting/number_color)                                                                                     |
| [`Color`](class_color.md)                         | [`text_editor/theme/highlighting/safe_line_number_color`](#class_editorsettings_property_text_editor/theme/highlighting/safe_line_number_color)                                                                 |
| [`Color`](class_color.md)                         | [`text_editor/theme/highlighting/search_result_border_color`](#class_editorsettings_property_text_editor/theme/highlighting/search_result_border_color)                                                         |
| [`Color`](class_color.md)                         | [`text_editor/theme/highlighting/search_result_color`](#class_editorsettings_property_text_editor/theme/highlighting/search_result_color)                                                                       |
| [`Color`](class_color.md)                         | [`text_editor/theme/highlighting/selection_color`](#class_editorsettings_property_text_editor/theme/highlighting/selection_color)                                                                               |
| [`Color`](class_color.md)                         | [`text_editor/theme/highlighting/string_color`](#class_editorsettings_property_text_editor/theme/highlighting/string_color)                                                                                     |
| [`Color`](class_color.md)                         | [`text_editor/theme/highlighting/symbol_color`](#class_editorsettings_property_text_editor/theme/highlighting/symbol_color)                                                                                     |
| [`Color`](class_color.md)                         | [`text_editor/theme/highlighting/text_color`](#class_editorsettings_property_text_editor/theme/highlighting/text_color)                                                                                         |
| [`Color`](class_color.md)                         | [`text_editor/theme/highlighting/text_selected_color`](#class_editorsettings_property_text_editor/theme/highlighting/text_selected_color)                                                                       |
| [`Color`](class_color.md)                         | [`text_editor/theme/highlighting/user_type_color`](#class_editorsettings_property_text_editor/theme/highlighting/user_type_color)                                                                               |
| [`Color`](class_color.md)                         | [`text_editor/theme/highlighting/word_highlighted_color`](#class_editorsettings_property_text_editor/theme/highlighting/word_highlighted_color)                                                                 |

## 方法

| `void`                                            | [`add_property_info`](#class_editorsettings_method_add_property_info) ( info: [`Dictionary`](class_dictionary.md) )                                                                                                 |
| [`bool`](class_bool.md)                           | [`check_changed_settings_in_group`](#class_editorsettings_method_check_changed_settings_in_group) ( setting_prefix: [`String`](class_string.md) ) const[^const]                                                     |
| `void`                                            | [`erase`](#class_editorsettings_method_erase) ( property: [`String`](class_string.md) )                                                                                                                             |
| [`PackedStringArray`](class_packedstringarray.md) | [`get_changed_settings`](#class_editorsettings_method_get_changed_settings) ( ) const[^const]                                                                                                                       |
| [`PackedStringArray`](class_packedstringarray.md) | [`get_favorites`](#class_editorsettings_method_get_favorites) ( ) const[^const]                                                                                                                                     |
| [`Variant`](class_variant.md)                     | [`get_project_metadata`](#class_editorsettings_method_get_project_metadata) ( section: [`String`](class_string.md), key: [`String`](class_string.md), default: [`Variant`](class_variant.md) = null ) const[^const] |
| [`PackedStringArray`](class_packedstringarray.md) | [`get_recent_dirs`](#class_editorsettings_method_get_recent_dirs) ( ) const[^const]                                                                                                                                 |
| [`Variant`](class_variant.md)                     | [`get_setting`](#class_editorsettings_method_get_setting) ( name: [`String`](class_string.md) ) const[^const]                                                                                                       |
| [`bool`](class_bool.md)                           | [`has_setting`](#class_editorsettings_method_has_setting) ( name: [`String`](class_string.md) ) const[^const]                                                                                                       |
| `void`                                            | [`mark_setting_changed`](#class_editorsettings_method_mark_setting_changed) ( setting: [`String`](class_string.md) )                                                                                                |
| `void`                                            | [`set_builtin_action_override`](#class_editorsettings_method_set_builtin_action_override) ( name: [`String`](class_string.md), actions_list: [Array](class_array.md) [`InputEvent`](class_inputevent.md) )          |
| `void`                                            | [`set_favorites`](#class_editorsettings_method_set_favorites) ( dirs: [`PackedStringArray`](class_packedstringarray.md) )                                                                                           |
| `void`                                            | [`set_initial_value`](#class_editorsettings_method_set_initial_value) ( name: [`StringName`](class_stringname.md), value: [`Variant`](class_variant.md), update_current: [`bool`](class_bool.md) )                  |
| `void`                                            | [`set_project_metadata`](#class_editorsettings_method_set_project_metadata) ( section: [`String`](class_string.md), key: [`String`](class_string.md), data: [`Variant`](class_variant.md) )                         |
| `void`                                            | [`set_recent_dirs`](#class_editorsettings_method_set_recent_dirs) ( dirs: [`PackedStringArray`](class_packedstringarray.md) )                                                                                       |
| `void`                                            | [`set_setting`](#class_editorsettings_method_set_setting) ( name: [`String`](class_string.md), value: [`Variant`](class_variant.md) )                                                                               |

<!-- rst-class:: classref-section-separator -->

---

## 信号

<div id="_class_class_editorsettings_signal_settings_changed"></div>

**settings_changed** ( ) <div id="class_editorsettings_signal_settings_changed"></div>

Emitted after any editor setting has changed.

<!-- rst-class:: classref-section-separator -->

---

## 常量

<div id="_class_editorsettings_constant_notification_editor_settings_changed"></div>

**NOTIFICATION_EDITOR_SETTINGS_CHANGED** = ``10000`` <div id="class_editorsettings_constant_notification_editor_settings_changed"></div>

Emitted after any editor setting has changed. It's used by various editor plugins to update their visuals on theme changes or logic on configuration changes.

<!-- rst-class:: classref-section-separator -->

---

## 属性说明

<div id="_class_editorsettings_property_debugger/auto_switch_to_remote_scene_tree"></div>

[`bool`](class_bool.md) **debugger/auto_switch_to_remote_scene_tree** <div id="class_editorsettings_property_debugger/auto_switch_to_remote_scene_tree"></div>

If `true`, automatically switches to the **Remote** scene tree when running the project from the editor. If `false`, stays on the **Local** scene tree when running the project from the editor.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorsettings_property_debugger/profile_native_calls"></div>

[`bool`](class_bool.md) **debugger/profile_native_calls** <div id="class_editorsettings_property_debugger/profile_native_calls"></div>

If `true`, enables collection of profiling data from non-GDScript Godot functions, such as engine class methods. Enabling this slows execution while profiling further.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorsettings_property_debugger/profiler_frame_history_size"></div>

[`int`](class_int.md) **debugger/profiler_frame_history_size** <div id="class_editorsettings_property_debugger/profiler_frame_history_size"></div>

The size of the profiler's frame history. The default value (3600) allows seeing up to 60 seconds of profiling if the project renders at a constant 60 FPS. Higher values allow viewing longer periods of profiling in the graphs, especially when the project is running at high framerates.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorsettings_property_debugger/profiler_frame_max_functions"></div>

[`int`](class_int.md) **debugger/profiler_frame_max_functions** <div id="class_editorsettings_property_debugger/profiler_frame_max_functions"></div>

The maximum number of script functions that can be displayed per frame in the profiler. If there are more script functions called in a given profiler frame, these functions will be discarded from the profiling results entirely.

 **Note:** This setting is only read when the profiler is first started, so changing it during profiling will have no effect.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorsettings_property_debugger/remote_inspect_refresh_interval"></div>

[`float`](class_float.md) **debugger/remote_inspect_refresh_interval** <div id="class_editorsettings_property_debugger/remote_inspect_refresh_interval"></div>

The refresh interval for the remote inspector's properties (in seconds). Lower values are more reactive, but may cause stuttering while the project is running from the editor and the **Remote** scene tree is selected in the Scene tree dock.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorsettings_property_debugger/remote_scene_tree_refresh_interval"></div>

[`float`](class_float.md) **debugger/remote_scene_tree_refresh_interval** <div id="class_editorsettings_property_debugger/remote_scene_tree_refresh_interval"></div>

The refresh interval for the remote scene tree (in seconds). Lower values are more reactive, but may cause stuttering while the project is running from the editor and the **Remote** scene tree is selected in the Scene tree dock.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorsettings_property_docks/filesystem/always_show_folders"></div>

[`bool`](class_bool.md) **docks/filesystem/always_show_folders** <div id="class_editorsettings_property_docks/filesystem/always_show_folders"></div>

If `true`, displays folders in the FileSystem dock's bottom pane when split mode is enabled. If `false`, only files will be displayed in the bottom pane. Split mode can be toggled by pressing the icon next to the `res://` folder path.

 **Note:** This setting has no effect when split mode is disabled (which is the default).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorsettings_property_docks/filesystem/textfile_extensions"></div>

[`String`](class_string.md) **docks/filesystem/textfile_extensions** <div id="class_editorsettings_property_docks/filesystem/textfile_extensions"></div>

List of file extensions to consider as editable text files in the FileSystem dock (by double-clicking on the files).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorsettings_property_docks/filesystem/thumbnail_size"></div>

[`int`](class_int.md) **docks/filesystem/thumbnail_size** <div id="class_editorsettings_property_docks/filesystem/thumbnail_size"></div>

The thumbnail size to use in the FileSystem dock (in pixels). See also [`filesystem/file_dialog/thumbnail_size`](#class_editorsettings_property_filesystem/file_dialog/thumbnail_size).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorsettings_property_docks/property_editor/auto_refresh_interval"></div>

[`float`](class_float.md) **docks/property_editor/auto_refresh_interval** <div id="class_editorsettings_property_docks/property_editor/auto_refresh_interval"></div>

The refresh interval to use for the Inspector dock's properties. The effect of this setting is mainly noticeable when adjusting gizmos in the 2D/3D editor and looking at the inspector at the same time. Lower values make the inspector refresh more often, but take up more CPU time.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorsettings_property_docks/property_editor/subresource_hue_tint"></div>

[`float`](class_float.md) **docks/property_editor/subresource_hue_tint** <div id="class_editorsettings_property_docks/property_editor/subresource_hue_tint"></div>

The tint intensity to use for the subresources background in the Inspector dock. The tint is used to distinguish between different subresources in the inspector. Higher values result in a more noticeable background color difference.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorsettings_property_docks/scene_tree/auto_expand_to_selected"></div>

[`bool`](class_bool.md) **docks/scene_tree/auto_expand_to_selected** <div id="class_editorsettings_property_docks/scene_tree/auto_expand_to_selected"></div>

If `true`, the scene tree dock will automatically unfold nodes when a node that has folded parents is selected.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorsettings_property_docks/scene_tree/center_node_on_reparent"></div>

[`bool`](class_bool.md) **docks/scene_tree/center_node_on_reparent** <div id="class_editorsettings_property_docks/scene_tree/center_node_on_reparent"></div>

If `true`, new node created when reparenting node(s) will be positioned at the average position of the selected node(s).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorsettings_property_docks/scene_tree/start_create_dialog_fully_expanded"></div>

[`bool`](class_bool.md) **docks/scene_tree/start_create_dialog_fully_expanded** <div id="class_editorsettings_property_docks/scene_tree/start_create_dialog_fully_expanded"></div>

If `true`, the Create dialog (Create New Node/Create New Resource) will start with all its sections expanded. Otherwise, sections will be collapsed until the user starts searching (which will automatically expand sections as needed).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorsettings_property_editors/2d/bone_color1"></div>

[`Color`](class_color.md) **editors/2d/bone_color1** <div id="class_editorsettings_property_editors/2d/bone_color1"></div>

The "start" stop of the color gradient to use for bones in the 2D skeleton editor.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorsettings_property_editors/2d/bone_color2"></div>

[`Color`](class_color.md) **editors/2d/bone_color2** <div id="class_editorsettings_property_editors/2d/bone_color2"></div>

The "end" stop of the color gradient to use for bones in the 2D skeleton editor.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorsettings_property_editors/2d/bone_ik_color"></div>

[`Color`](class_color.md) **editors/2d/bone_ik_color** <div id="class_editorsettings_property_editors/2d/bone_ik_color"></div>

The color to use for inverse kinematics-enabled bones in the 2D skeleton editor.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorsettings_property_editors/2d/bone_outline_color"></div>

[`Color`](class_color.md) **editors/2d/bone_outline_color** <div id="class_editorsettings_property_editors/2d/bone_outline_color"></div>

The outline color to use for non-selected bones in the 2D skeleton editor. See also [`editors/2d/bone_selected_color`](#class_editorsettings_property_editors/2d/bone_selected_color).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorsettings_property_editors/2d/bone_outline_size"></div>

[`float`](class_float.md) **editors/2d/bone_outline_size** <div id="class_editorsettings_property_editors/2d/bone_outline_size"></div>

The outline size in the 2D skeleton editor (in pixels). See also [`editors/2d/bone_width`](#class_editorsettings_property_editors/2d/bone_width).

 **Note:** Changes to this value only apply after modifying a [`Bone2D`](class_bone2d.md) node in any way, or closing and reopening the scene.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorsettings_property_editors/2d/bone_selected_color"></div>

[`Color`](class_color.md) **editors/2d/bone_selected_color** <div id="class_editorsettings_property_editors/2d/bone_selected_color"></div>

The color to use for selected bones in the 2D skeleton editor. See also [`editors/2d/bone_outline_color`](#class_editorsettings_property_editors/2d/bone_outline_color).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorsettings_property_editors/2d/bone_width"></div>

[`float`](class_float.md) **editors/2d/bone_width** <div id="class_editorsettings_property_editors/2d/bone_width"></div>

The bone width in the 2D skeleton editor (in pixels). See also [`editors/2d/bone_outline_size`](#class_editorsettings_property_editors/2d/bone_outline_size).

 **Note:** Changes to this value only apply after modifying a [`Bone2D`](class_bone2d.md) node in any way, or closing and reopening the scene.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorsettings_property_editors/2d/grid_color"></div>

[`Color`](class_color.md) **editors/2d/grid_color** <div id="class_editorsettings_property_editors/2d/grid_color"></div>

The grid color to use in the 2D editor.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorsettings_property_editors/2d/guides_color"></div>

[`Color`](class_color.md) **editors/2d/guides_color** <div id="class_editorsettings_property_editors/2d/guides_color"></div>

The guides color to use in the 2D editor. Guides can be created by dragging the mouse cursor from the rulers.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorsettings_property_editors/2d/smart_snapping_line_color"></div>

[`Color`](class_color.md) **editors/2d/smart_snapping_line_color** <div id="class_editorsettings_property_editors/2d/smart_snapping_line_color"></div>

The color to use when drawing smart snapping lines in the 2D editor. The smart snapping lines will automatically display when moving 2D nodes if smart snapping is enabled in the Snapping Options menu at the top of the 2D editor viewport.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorsettings_property_editors/2d/use_integer_zoom_by_default"></div>

[`bool`](class_bool.md) **editors/2d/use_integer_zoom_by_default** <div id="class_editorsettings_property_editors/2d/use_integer_zoom_by_default"></div>

If `true`, the 2D editor will snap to integer zoom values while not holding the <i class="fa fa-gamepad"></i>`Alt` key and powers of two while holding it. If `false`, this behavior is swapped.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorsettings_property_editors/2d/viewport_border_color"></div>

[`Color`](class_color.md) **editors/2d/viewport_border_color** <div id="class_editorsettings_property_editors/2d/viewport_border_color"></div>

The color of the viewport border in the 2D editor. This border represents the viewport's size at the base resolution defined in the Project Settings. Objects placed outside this border will not be visible unless a [`Camera2D`](class_camera2d.md) node is used, or unless the window is resized and the stretch mode is set to `disabled`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorsettings_property_editors/3d/default_fov"></div>

[`float`](class_float.md) **editors/3d/default_fov** <div id="class_editorsettings_property_editors/3d/default_fov"></div>

The default camera vertical field of view to use in the 3D editor (in degrees). The camera field of view can be adjusted on a per-scene basis using the **View** menu at the top of the 3D editor. If a scene had its camera field of view adjusted using the **View** menu, this setting is ignored in the scene in question. This setting is also ignored while a [`Camera3D`](class_camera3d.md) node is being previewed in the editor.

 **Note:** The editor camera always uses the **Keep Height** aspect mode.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorsettings_property_editors/3d/default_z_far"></div>

[`float`](class_float.md) **editors/3d/default_z_far** <div id="class_editorsettings_property_editors/3d/default_z_far"></div>

The default camera far clip distance to use in the 3D editor (in degrees). Higher values make it possible to view objects placed further away from the camera, at the cost of lower precision in the depth buffer (which can result in visible Z-fighting in the distance). The camera far clip distance can be adjusted on a per-scene basis using the **View** menu at the top of the 3D editor. If a scene had its camera far clip distance adjusted using the **View** menu, this setting is ignored in the scene in question. This setting is also ignored while a [`Camera3D`](class_camera3d.md) node is being previewed in the editor.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorsettings_property_editors/3d/default_z_near"></div>

[`float`](class_float.md) **editors/3d/default_z_near** <div id="class_editorsettings_property_editors/3d/default_z_near"></div>

The default camera near clip distance to use in the 3D editor (in degrees). Lower values make it possible to view objects placed closer to the camera, at the cost of lower precision in the depth buffer (which can result in visible Z-fighting in the distance). The camera near clip distance can be adjusted on a per-scene basis using the **View** menu at the top of the 3D editor. If a scene had its camera near clip distance adjusted using the **View** menu, this setting is ignored in the scene in question. This setting is also ignored while a [`Camera3D`](class_camera3d.md) node is being previewed in the editor.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorsettings_property_editors/3d/freelook/freelook_activation_modifier"></div>

[`int`](class_int.md) **editors/3d/freelook/freelook_activation_modifier** <div id="class_editorsettings_property_editors/3d/freelook/freelook_activation_modifier"></div>

The modifier key to use to enable freelook in the 3D editor (on top of pressing the right mouse button).

 **Note:** Regardless of this setting, the freelook toggle keyboard shortcut (<i class="fa fa-gamepad"></i>`Shift + F` by default) is always available.

 **Note:** On certain window managers on Linux, the <i class="fa fa-gamepad"></i>`Alt` key will be intercepted by the window manager when clicking a mouse button at the same time. This means Godot will not see the modifier key as being pressed.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorsettings_property_editors/3d/freelook/freelook_base_speed"></div>

[`float`](class_float.md) **editors/3d/freelook/freelook_base_speed** <div id="class_editorsettings_property_editors/3d/freelook/freelook_base_speed"></div>

The base 3D freelook speed in units per second. This can be adjusted by using the mouse wheel while in freelook mode, or by holding down the "fast" or "slow" modifier keys (<i class="fa fa-gamepad"></i>`Shift` and <i class="fa fa-gamepad"></i>`Alt` by default, respectively).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorsettings_property_editors/3d/freelook/freelook_inertia"></div>

[`float`](class_float.md) **editors/3d/freelook/freelook_inertia** <div id="class_editorsettings_property_editors/3d/freelook/freelook_inertia"></div>

The inertia of the 3D freelook camera. Higher values make the camera start and stop slower, which looks smoother but adds latency.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorsettings_property_editors/3d/freelook/freelook_navigation_scheme"></div>

[`int`](class_int.md) **editors/3d/freelook/freelook_navigation_scheme** <div id="class_editorsettings_property_editors/3d/freelook/freelook_navigation_scheme"></div>

The navigation scheme to use when freelook is enabled in the 3D editor. Some of the navigation schemes below may be more convenient when designing specific levels in the 3D editor.

- **Default:** The "Freelook Forward", "Freelook Backward", "Freelook Up" and "Freelook Down" keys will move relative to the camera, taking its pitch angle into account for the movement.

- **Partially Axis-Locked:** The "Freelook Forward" and "Freelook Backward" keys will move relative to the camera, taking its pitch angle into account for the movement. The "Freelook Up" and "Freelook Down" keys will move in an "absolute" manner, *not* taking the camera's pitch angle into account for the movement.

- **Fully Axis-Locked:** The "Freelook Forward", "Freelook Backward", "Freelook Up" and "Freelook Down" keys will move in an "absolute" manner, *not* taking the camera's pitch angle into account for the movement.

See also [`editors/3d/navigation/navigation_scheme`](#class_editorsettings_property_editors/3d/navigation/navigation_scheme).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorsettings_property_editors/3d/freelook/freelook_sensitivity"></div>

[`float`](class_float.md) **editors/3d/freelook/freelook_sensitivity** <div id="class_editorsettings_property_editors/3d/freelook/freelook_sensitivity"></div>

The mouse sensitivity to use while freelook mode is active in the 3D editor. See also [`editors/3d/navigation_feel/orbit_sensitivity`](#class_editorsettings_property_editors/3d/navigation_feel/orbit_sensitivity).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorsettings_property_editors/3d/freelook/freelook_speed_zoom_link"></div>

[`bool`](class_bool.md) **editors/3d/freelook/freelook_speed_zoom_link** <div id="class_editorsettings_property_editors/3d/freelook/freelook_speed_zoom_link"></div>

If `true`, freelook speed is linked to the zoom value used in the camera orbit mode in the 3D editor.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorsettings_property_editors/3d/grid_division_level_bias"></div>

[`float`](class_float.md) **editors/3d/grid_division_level_bias** <div id="class_editorsettings_property_editors/3d/grid_division_level_bias"></div>

The grid division bias to use in the 3D editor. Negative values will cause small grid divisions to appear earlier, whereas positive values will cause small grid divisions to appear later.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorsettings_property_editors/3d/grid_division_level_max"></div>

[`int`](class_int.md) **editors/3d/grid_division_level_max** <div id="class_editorsettings_property_editors/3d/grid_division_level_max"></div>

The largest grid division to use in the 3D editor. Together with [`editors/3d/primary_grid_steps`](#class_editorsettings_property_editors/3d/primary_grid_steps), this determines how large the grid divisions can be. The grid divisions will not be able to get larger than `primary_grid_steps ^ grid_division_level_max` units. By default, when [`editors/3d/primary_grid_steps`](#class_editorsettings_property_editors/3d/primary_grid_steps) is `8`, this means grid divisions cannot get larger than `64` units each (so primary grid lines are `512` units apart), no matter how far away the camera is from the grid.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorsettings_property_editors/3d/grid_division_level_min"></div>

[`int`](class_int.md) **editors/3d/grid_division_level_min** <div id="class_editorsettings_property_editors/3d/grid_division_level_min"></div>

The smallest grid division to use in the 3D editor. Together with [`editors/3d/primary_grid_steps`](#class_editorsettings_property_editors/3d/primary_grid_steps), this determines how small the grid divisions can be. The grid divisions will not be able to get smaller than `primary_grid_steps ^ grid_division_level_min` units. By default, this means grid divisions cannot get smaller than 1 unit each, no matter how close the camera is from the grid.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorsettings_property_editors/3d/grid_size"></div>

[`int`](class_int.md) **editors/3d/grid_size** <div id="class_editorsettings_property_editors/3d/grid_size"></div>

The grid size in units. Higher values prevent the grid from appearing "cut off" at certain angles, but make the grid more demanding to render. Depending on the camera's position, the grid may not be fully visible since a shader is used to fade it progressively.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorsettings_property_editors/3d/grid_xy_plane"></div>

[`bool`](class_bool.md) **editors/3d/grid_xy_plane** <div id="class_editorsettings_property_editors/3d/grid_xy_plane"></div>

If `true`, render the grid on an XY plane. This can be useful for 3D side-scrolling games.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorsettings_property_editors/3d/grid_xz_plane"></div>

[`bool`](class_bool.md) **editors/3d/grid_xz_plane** <div id="class_editorsettings_property_editors/3d/grid_xz_plane"></div>

If `true`, render the grid on an XZ plane.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorsettings_property_editors/3d/grid_yz_plane"></div>

[`bool`](class_bool.md) **editors/3d/grid_yz_plane** <div id="class_editorsettings_property_editors/3d/grid_yz_plane"></div>

If `true`, render the grid on a YZ plane. This can be useful for 3D side-scrolling games.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorsettings_property_editors/3d/navigation/emulate_3_button_mouse"></div>

[`bool`](class_bool.md) **editors/3d/navigation/emulate_3_button_mouse** <div id="class_editorsettings_property_editors/3d/navigation/emulate_3_button_mouse"></div>

If `true`, enables 3-button mouse emulation mode. This is useful on laptops when using a trackpad.

When 3-button mouse emulation mode is enabled, the pan, zoom and orbit modifiers can always be used in the 3D editor viewport, even when not holding down any mouse button.

 **Note:** No matter the orbit modifier configured in [`editors/3d/navigation/orbit_modifier`](#class_editorsettings_property_editors/3d/navigation/orbit_modifier), <i class="fa fa-gamepad"></i>`Alt` will always remain usable for orbiting in this mode to improve usability with graphics tablets.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorsettings_property_editors/3d/navigation/emulate_numpad"></div>

[`bool`](class_bool.md) **editors/3d/navigation/emulate_numpad** <div id="class_editorsettings_property_editors/3d/navigation/emulate_numpad"></div>

If `true`, allows using the top row <i class="fa fa-gamepad"></i>`0`-<i class="fa fa-gamepad"></i>`9` keys to function as their equivalent numpad keys for 3D editor navigation. This should be enabled on keyboards that have no numeric keypad available.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorsettings_property_editors/3d/navigation/invert_x_axis"></div>

[`bool`](class_bool.md) **editors/3d/navigation/invert_x_axis** <div id="class_editorsettings_property_editors/3d/navigation/invert_x_axis"></div>

If `true`, invert the horizontal mouse axis when panning or orbiting in the 3D editor. This setting does *not* apply to freelook mode.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorsettings_property_editors/3d/navigation/invert_y_axis"></div>

[`bool`](class_bool.md) **editors/3d/navigation/invert_y_axis** <div id="class_editorsettings_property_editors/3d/navigation/invert_y_axis"></div>

If `true`, invert the vertical mouse axis when panning, orbiting, or using freelook mode in the 3D editor.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorsettings_property_editors/3d/navigation/navigation_scheme"></div>

[`int`](class_int.md) **editors/3d/navigation/navigation_scheme** <div id="class_editorsettings_property_editors/3d/navigation/navigation_scheme"></div>

The navigation scheme to use in the 3D editor. Changing this setting will affect the mouse buttons that must be held down to perform certain operations in the 3D editor viewport.

- **Godot** Middle mouse button to orbit, <i class="fa fa-gamepad"></i>`Shift + Middle mouse button` to pan. <i class="fa fa-gamepad"></i>`Mouse wheel` to zoom.

- **Maya:** <i class="fa fa-gamepad"></i>`Alt + Left mouse button` to orbit. <i class="fa fa-gamepad"></i>`Middle mouse button` to pan, <i class="fa fa-gamepad"></i>`Shift + Middle mouse button` to pan 10 times faster. <i class="fa fa-gamepad"></i>`Mouse wheel` to zoom.

- **Modo:** <i class="fa fa-gamepad"></i>`Alt + Left mouse button` to orbit. <i class="fa fa-gamepad"></i>`Alt + Shift + Left mouse button` to pan. <i class="fa fa-gamepad"></i>`Ctrl + Alt + Left mouse button` to zoom.

See also [`editors/3d/freelook/freelook_navigation_scheme`](#class_editorsettings_property_editors/3d/freelook/freelook_navigation_scheme).

 **Note:** On certain window managers on Linux, the <i class="fa fa-gamepad"></i>`Alt` key will be intercepted by the window manager when clicking a mouse button at the same time. This means Godot will not see the modifier key as being pressed.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorsettings_property_editors/3d/navigation/orbit_modifier"></div>

[`int`](class_int.md) **editors/3d/navigation/orbit_modifier** <div id="class_editorsettings_property_editors/3d/navigation/orbit_modifier"></div>

The modifier key that must be held to orbit in the 3D editor.

 **Note:** If [`editors/3d/navigation/emulate_3_button_mouse`](#class_editorsettings_property_editors/3d/navigation/emulate_3_button_mouse) is `true`, <i class="fa fa-gamepad"></i>`Alt` will always remain usable for orbiting to improve usability with graphics tablets.

 **Note:** On certain window managers on Linux, the <i class="fa fa-gamepad"></i>`Alt` key will be intercepted by the window manager when clicking a mouse button at the same time. This means Godot will not see the modifier key as being pressed.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorsettings_property_editors/3d/navigation/pan_modifier"></div>

[`int`](class_int.md) **editors/3d/navigation/pan_modifier** <div id="class_editorsettings_property_editors/3d/navigation/pan_modifier"></div>

The modifier key that must be held to pan in the 3D editor.

 **Note:** On certain window managers on Linux, the <i class="fa fa-gamepad"></i>`Alt` key will be intercepted by the window manager when clicking a mouse button at the same time. This means Godot will not see the modifier key as being pressed.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorsettings_property_editors/3d/navigation/warped_mouse_panning"></div>

[`bool`](class_bool.md) **editors/3d/navigation/warped_mouse_panning** <div id="class_editorsettings_property_editors/3d/navigation/warped_mouse_panning"></div>

If `true`, warps the mouse around the 3D viewport while panning in the 3D editor. This makes it possible to pan over a large area without having to exit panning and adjust the mouse cursor.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorsettings_property_editors/3d/navigation/zoom_modifier"></div>

[`int`](class_int.md) **editors/3d/navigation/zoom_modifier** <div id="class_editorsettings_property_editors/3d/navigation/zoom_modifier"></div>

The modifier key that must be held to zoom in the 3D editor.

 **Note:** On certain window managers on Linux, the <i class="fa fa-gamepad"></i>`Alt` key will be intercepted by the window manager when clicking a mouse button at the same time. This means Godot will not see the modifier key as being pressed.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorsettings_property_editors/3d/navigation/zoom_style"></div>

[`int`](class_int.md) **editors/3d/navigation/zoom_style** <div id="class_editorsettings_property_editors/3d/navigation/zoom_style"></div>

The mouse cursor movement direction to use when zooming by moving the mouse. This does not affect zooming with the mouse wheel.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorsettings_property_editors/3d/navigation_feel/orbit_inertia"></div>

[`float`](class_float.md) **editors/3d/navigation_feel/orbit_inertia** <div id="class_editorsettings_property_editors/3d/navigation_feel/orbit_inertia"></div>

The inertia to use when orbiting in the 3D editor. Higher values make the camera start and stop slower, which looks smoother but adds latency.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorsettings_property_editors/3d/navigation_feel/orbit_sensitivity"></div>

[`float`](class_float.md) **editors/3d/navigation_feel/orbit_sensitivity** <div id="class_editorsettings_property_editors/3d/navigation_feel/orbit_sensitivity"></div>

The mouse sensitivity to use when orbiting in the 3D editor. See also [`editors/3d/freelook/freelook_sensitivity`](#class_editorsettings_property_editors/3d/freelook/freelook_sensitivity).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorsettings_property_editors/3d/navigation_feel/translation_inertia"></div>

[`float`](class_float.md) **editors/3d/navigation_feel/translation_inertia** <div id="class_editorsettings_property_editors/3d/navigation_feel/translation_inertia"></div>

The inertia to use when panning in the 3D editor. Higher values make the camera start and stop slower, which looks smoother but adds latency.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorsettings_property_editors/3d/navigation_feel/zoom_inertia"></div>

[`float`](class_float.md) **editors/3d/navigation_feel/zoom_inertia** <div id="class_editorsettings_property_editors/3d/navigation_feel/zoom_inertia"></div>

The inertia to use when zooming in the 3D editor. Higher values make the camera start and stop slower, which looks smoother but adds latency.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorsettings_property_editors/3d/primary_grid_color"></div>

[`Color`](class_color.md) **editors/3d/primary_grid_color** <div id="class_editorsettings_property_editors/3d/primary_grid_color"></div>

The color to use for the primary 3D grid. The color's alpha channel affects the grid's opacity.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorsettings_property_editors/3d/primary_grid_steps"></div>

[`int`](class_int.md) **editors/3d/primary_grid_steps** <div id="class_editorsettings_property_editors/3d/primary_grid_steps"></div>

If set above 0, where a primary grid line should be drawn. By default, primary lines are configured to be more visible than secondary lines. This helps with measurements in the 3D editor. See also [`editors/3d/primary_grid_color`](#class_editorsettings_property_editors/3d/primary_grid_color) and [`editors/3d/secondary_grid_color`](#class_editorsettings_property_editors/3d/secondary_grid_color).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorsettings_property_editors/3d/secondary_grid_color"></div>

[`Color`](class_color.md) **editors/3d/secondary_grid_color** <div id="class_editorsettings_property_editors/3d/secondary_grid_color"></div>

The color to use for the secondary 3D grid. This is generally a less visible color than [`editors/3d/primary_grid_color`](#class_editorsettings_property_editors/3d/primary_grid_color). The color's alpha channel affects the grid's opacity.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorsettings_property_editors/3d/selection_box_color"></div>

[`Color`](class_color.md) **editors/3d/selection_box_color** <div id="class_editorsettings_property_editors/3d/selection_box_color"></div>

The color to use for the selection box that surrounds selected nodes in the 3D editor viewport. The color's alpha channel influences the selection box's opacity.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorsettings_property_editors/3d_gizmos/gizmo_colors/aabb"></div>

[`Color`](class_color.md) **editors/3d_gizmos/gizmo_colors/aabb** <div id="class_editorsettings_property_editors/3d_gizmos/gizmo_colors/aabb"></div>

The color to use for the AABB gizmo that displays the [`GeometryInstance3D`](class_geometryinstance3d.md)'s custom [`AABB`](class_aabb.md).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorsettings_property_editors/3d_gizmos/gizmo_colors/instantiated"></div>

[`Color`](class_color.md) **editors/3d_gizmos/gizmo_colors/instantiated** <div id="class_editorsettings_property_editors/3d_gizmos/gizmo_colors/instantiated"></div>

The color override to use for 3D editor gizmos if the [`Node3D`](class_node3d.md) in question is part of an instantiated scene file (from the perspective of the current scene).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorsettings_property_editors/3d_gizmos/gizmo_colors/joint"></div>

[`Color`](class_color.md) **editors/3d_gizmos/gizmo_colors/joint** <div id="class_editorsettings_property_editors/3d_gizmos/gizmo_colors/joint"></div>

The 3D editor gizmo color for [`Joint3D`](class_joint3d.md) s and [`PhysicalBone3D`](class_physicalbone3d.md) s.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorsettings_property_editors/animation/autorename_animation_tracks"></div>

[`bool`](class_bool.md) **editors/animation/autorename_animation_tracks** <div id="class_editorsettings_property_editors/animation/autorename_animation_tracks"></div>

If `true`, automatically updates animation tracks' target paths when renaming or reparenting nodes in the Scene tree dock.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorsettings_property_editors/animation/confirm_insert_track"></div>

[`bool`](class_bool.md) **editors/animation/confirm_insert_track** <div id="class_editorsettings_property_editors/animation/confirm_insert_track"></div>

If `true`, display a confirmation dialog when adding a new track to an animation by pressing the "key" icon next to a property. Holding Shift will bypass the dialog.

If `false`, the behavior is reversed, i.e. the dialog only appears when Shift is held.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorsettings_property_editors/animation/default_create_bezier_tracks"></div>

[`bool`](class_bool.md) **editors/animation/default_create_bezier_tracks** <div id="class_editorsettings_property_editors/animation/default_create_bezier_tracks"></div>

If `true`, create a Bezier track instead of a standard track when pressing the "key" icon next to a property. Bezier tracks provide more control over animation curves, but are more difficult to adjust quickly.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorsettings_property_editors/animation/default_create_reset_tracks"></div>

[`bool`](class_bool.md) **editors/animation/default_create_reset_tracks** <div id="class_editorsettings_property_editors/animation/default_create_reset_tracks"></div>

If `true`, create a `RESET` track when creating a new animation track. This track can be used to restore the animation to a "default" state.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorsettings_property_editors/animation/onion_layers_future_color"></div>

[`Color`](class_color.md) **editors/animation/onion_layers_future_color** <div id="class_editorsettings_property_editors/animation/onion_layers_future_color"></div>

The modulate color to use for "future" frames displayed in the animation editor's onion skinning feature.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorsettings_property_editors/animation/onion_layers_past_color"></div>

[`Color`](class_color.md) **editors/animation/onion_layers_past_color** <div id="class_editorsettings_property_editors/animation/onion_layers_past_color"></div>

The modulate color to use for "past" frames displayed in the animation editor's onion skinning feature.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorsettings_property_editors/grid_map/pick_distance"></div>

[`float`](class_float.md) **editors/grid_map/pick_distance** <div id="class_editorsettings_property_editors/grid_map/pick_distance"></div>

The maximum distance at which tiles can be placed on a GridMap, relative to the camera position (in 3D units).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorsettings_property_editors/panning/2d_editor_pan_speed"></div>

[`int`](class_int.md) **editors/panning/2d_editor_pan_speed** <div id="class_editorsettings_property_editors/panning/2d_editor_pan_speed"></div>

The panning speed when using the mouse wheel or touchscreen events in the 2D editor. This setting does not apply to panning by holding down the middle or right mouse buttons.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorsettings_property_editors/panning/2d_editor_panning_scheme"></div>

[`int`](class_int.md) **editors/panning/2d_editor_panning_scheme** <div id="class_editorsettings_property_editors/panning/2d_editor_panning_scheme"></div>

Controls whether the mouse wheel scroll zooms or pans in the 2D editor. See also [`editors/panning/sub_editors_panning_scheme`](#class_editorsettings_property_editors/panning/sub_editors_panning_scheme) and [`editors/panning/animation_editors_panning_scheme`](#class_editorsettings_property_editors/panning/animation_editors_panning_scheme).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorsettings_property_editors/panning/animation_editors_panning_scheme"></div>

[`int`](class_int.md) **editors/panning/animation_editors_panning_scheme** <div id="class_editorsettings_property_editors/panning/animation_editors_panning_scheme"></div>

Controls whether the mouse wheel scroll zooms or pans in the animation track and Bezier editors. See also [`editors/panning/2d_editor_panning_scheme`](#class_editorsettings_property_editors/panning/2d_editor_panning_scheme) and [`editors/panning/sub_editors_panning_scheme`](#class_editorsettings_property_editors/panning/sub_editors_panning_scheme) (which controls the animation blend tree editor's pan behavior).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorsettings_property_editors/panning/simple_panning"></div>

[`bool`](class_bool.md) **editors/panning/simple_panning** <div id="class_editorsettings_property_editors/panning/simple_panning"></div>

If `true`, allows panning by holding down <i class="fa fa-gamepad"></i>`Space` in the 2D editor viewport (in addition to panning with the middle or right mouse buttons). If `false`, the left mouse button must be held down while holding down <i class="fa fa-gamepad"></i>`Space` to pan in the 2D editor viewport.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorsettings_property_editors/panning/sub_editors_panning_scheme"></div>

[`int`](class_int.md) **editors/panning/sub_editors_panning_scheme** <div id="class_editorsettings_property_editors/panning/sub_editors_panning_scheme"></div>

Controls whether the mouse wheel scroll zooms or pans in subeditors. The list of affected subeditors is: animation blend tree editor, [`Polygon2D`](class_polygon2d.md) editor, tileset editor, texture region editor and visual shader editor. See also [`editors/panning/2d_editor_panning_scheme`](#class_editorsettings_property_editors/panning/2d_editor_panning_scheme) and [`editors/panning/animation_editors_panning_scheme`](#class_editorsettings_property_editors/panning/animation_editors_panning_scheme).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorsettings_property_editors/panning/warped_mouse_panning"></div>

[`bool`](class_bool.md) **editors/panning/warped_mouse_panning** <div id="class_editorsettings_property_editors/panning/warped_mouse_panning"></div>

If `true`, warps the mouse around the 2D viewport while panning in the 2D editor. This makes it possible to pan over a large area without having to exit panning and adjust the mouse cursor.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorsettings_property_editors/polygon_editor/auto_bake_delay"></div>

[`float`](class_float.md) **editors/polygon_editor/auto_bake_delay** <div id="class_editorsettings_property_editors/polygon_editor/auto_bake_delay"></div>

The delay in seconds until more complex and performance costly polygon editors commit their outlines, e.g. the 2D navigation polygon editor rebakes the navigation mesh polygons. A negative value stops the auto bake.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorsettings_property_editors/polygon_editor/point_grab_radius"></div>

[`int`](class_int.md) **editors/polygon_editor/point_grab_radius** <div id="class_editorsettings_property_editors/polygon_editor/point_grab_radius"></div>

The radius in which points can be selected in the [`Polygon2D`](class_polygon2d.md) and [`CollisionPolygon2D`](class_collisionpolygon2d.md) editors (in pixels). Higher values make it easier to select points quickly, but can make it more difficult to select the expected point when several points are located close to each other.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorsettings_property_editors/polygon_editor/show_previous_outline"></div>

[`bool`](class_bool.md) **editors/polygon_editor/show_previous_outline** <div id="class_editorsettings_property_editors/polygon_editor/show_previous_outline"></div>

If `true`, displays the polygon's previous shape in the 2D polygon editors with an opaque gray outline. This outline is displayed while dragging a point until the left mouse button is released.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorsettings_property_editors/shader_editor/behavior/files/restore_shaders_on_load"></div>

[`bool`](class_bool.md) **editors/shader_editor/behavior/files/restore_shaders_on_load** <div id="class_editorsettings_property_editors/shader_editor/behavior/files/restore_shaders_on_load"></div>

If `true`, reopens shader files that were open in the shader editor when the project was last closed.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorsettings_property_editors/tiles_editor/display_grid"></div>

[`bool`](class_bool.md) **editors/tiles_editor/display_grid** <div id="class_editorsettings_property_editors/tiles_editor/display_grid"></div>

If `true`, displays a grid while the TileMap editor is active. See also [`editors/tiles_editor/grid_color`](#class_editorsettings_property_editors/tiles_editor/grid_color).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorsettings_property_editors/tiles_editor/grid_color"></div>

[`Color`](class_color.md) **editors/tiles_editor/grid_color** <div id="class_editorsettings_property_editors/tiles_editor/grid_color"></div>

The color to use for the TileMap editor's grid.

 **Note:** Only effective if [`editors/tiles_editor/display_grid`](#class_editorsettings_property_editors/tiles_editor/display_grid) is `true`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorsettings_property_editors/tiles_editor/highlight_selected_layer"></div>

[`bool`](class_bool.md) **editors/tiles_editor/highlight_selected_layer** <div id="class_editorsettings_property_editors/tiles_editor/highlight_selected_layer"></div>

Highlight the currently selected TileMapLayer by dimming the other ones in the scene.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorsettings_property_editors/visual_editors/category_colors/color_color"></div>

[`Color`](class_color.md) **editors/visual_editors/category_colors/color_color** <div id="class_editorsettings_property_editors/visual_editors/category_colors/color_color"></div>

The color of a graph node's header when it belongs to the "Color" category.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorsettings_property_editors/visual_editors/category_colors/conditional_color"></div>

[`Color`](class_color.md) **editors/visual_editors/category_colors/conditional_color** <div id="class_editorsettings_property_editors/visual_editors/category_colors/conditional_color"></div>

The color of a graph node's header when it belongs to the "Conditional" category.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorsettings_property_editors/visual_editors/category_colors/input_color"></div>

[`Color`](class_color.md) **editors/visual_editors/category_colors/input_color** <div id="class_editorsettings_property_editors/visual_editors/category_colors/input_color"></div>

The color of a graph node's header when it belongs to the "Input" category.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorsettings_property_editors/visual_editors/category_colors/output_color"></div>

[`Color`](class_color.md) **editors/visual_editors/category_colors/output_color** <div id="class_editorsettings_property_editors/visual_editors/category_colors/output_color"></div>

The color of a graph node's header when it belongs to the "Output" category.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorsettings_property_editors/visual_editors/category_colors/particle_color"></div>

[`Color`](class_color.md) **editors/visual_editors/category_colors/particle_color** <div id="class_editorsettings_property_editors/visual_editors/category_colors/particle_color"></div>

The color of a graph node's header when it belongs to the "Particle" category.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorsettings_property_editors/visual_editors/category_colors/scalar_color"></div>

[`Color`](class_color.md) **editors/visual_editors/category_colors/scalar_color** <div id="class_editorsettings_property_editors/visual_editors/category_colors/scalar_color"></div>

The color of a graph node's header when it belongs to the "Scalar" category.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorsettings_property_editors/visual_editors/category_colors/special_color"></div>

[`Color`](class_color.md) **editors/visual_editors/category_colors/special_color** <div id="class_editorsettings_property_editors/visual_editors/category_colors/special_color"></div>

The color of a graph node's header when it belongs to the "Special" category.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorsettings_property_editors/visual_editors/category_colors/textures_color"></div>

[`Color`](class_color.md) **editors/visual_editors/category_colors/textures_color** <div id="class_editorsettings_property_editors/visual_editors/category_colors/textures_color"></div>

The color of a graph node's header when it belongs to the "Textures" category.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorsettings_property_editors/visual_editors/category_colors/transform_color"></div>

[`Color`](class_color.md) **editors/visual_editors/category_colors/transform_color** <div id="class_editorsettings_property_editors/visual_editors/category_colors/transform_color"></div>

The color of a graph node's header when it belongs to the "Transform" category.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorsettings_property_editors/visual_editors/category_colors/utility_color"></div>

[`Color`](class_color.md) **editors/visual_editors/category_colors/utility_color** <div id="class_editorsettings_property_editors/visual_editors/category_colors/utility_color"></div>

The color of a graph node's header when it belongs to the "Utility" category.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorsettings_property_editors/visual_editors/category_colors/vector_color"></div>

[`Color`](class_color.md) **editors/visual_editors/category_colors/vector_color** <div id="class_editorsettings_property_editors/visual_editors/category_colors/vector_color"></div>

The color of a graph node's header when it belongs to the "Vector" category.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorsettings_property_editors/visual_editors/color_theme"></div>

[`String`](class_string.md) **editors/visual_editors/color_theme** <div id="class_editorsettings_property_editors/visual_editors/color_theme"></div>

The color theme to use in the visual shader editor.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorsettings_property_editors/visual_editors/connection_colors/boolean_color"></div>

[`Color`](class_color.md) **editors/visual_editors/connection_colors/boolean_color** <div id="class_editorsettings_property_editors/visual_editors/connection_colors/boolean_color"></div>

The color of a port/connection of boolean type.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorsettings_property_editors/visual_editors/connection_colors/sampler_color"></div>

[`Color`](class_color.md) **editors/visual_editors/connection_colors/sampler_color** <div id="class_editorsettings_property_editors/visual_editors/connection_colors/sampler_color"></div>

The color of a port/connection of sampler type.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorsettings_property_editors/visual_editors/connection_colors/scalar_color"></div>

[`Color`](class_color.md) **editors/visual_editors/connection_colors/scalar_color** <div id="class_editorsettings_property_editors/visual_editors/connection_colors/scalar_color"></div>

The color of a port/connection of scalar type (float, int, unsigned int).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorsettings_property_editors/visual_editors/connection_colors/transform_color"></div>

[`Color`](class_color.md) **editors/visual_editors/connection_colors/transform_color** <div id="class_editorsettings_property_editors/visual_editors/connection_colors/transform_color"></div>

The color of a port/connection of transform type.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorsettings_property_editors/visual_editors/connection_colors/vector2_color"></div>

[`Color`](class_color.md) **editors/visual_editors/connection_colors/vector2_color** <div id="class_editorsettings_property_editors/visual_editors/connection_colors/vector2_color"></div>

The color of a port/connection of Vector2 type.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorsettings_property_editors/visual_editors/connection_colors/vector3_color"></div>

[`Color`](class_color.md) **editors/visual_editors/connection_colors/vector3_color** <div id="class_editorsettings_property_editors/visual_editors/connection_colors/vector3_color"></div>

The color of a port/connection of Vector3 type.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorsettings_property_editors/visual_editors/connection_colors/vector4_color"></div>

[`Color`](class_color.md) **editors/visual_editors/connection_colors/vector4_color** <div id="class_editorsettings_property_editors/visual_editors/connection_colors/vector4_color"></div>

The color of a port/connection of Vector4 type.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorsettings_property_editors/visual_editors/grid_pattern"></div>

[`int`](class_int.md) **editors/visual_editors/grid_pattern** <div id="class_editorsettings_property_editors/visual_editors/grid_pattern"></div>

The pattern used for the background grid.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorsettings_property_editors/visual_editors/lines_curvature"></div>

[`float`](class_float.md) **editors/visual_editors/lines_curvature** <div id="class_editorsettings_property_editors/visual_editors/lines_curvature"></div>

The curvature to use for connection lines in the visual shader editor. Higher values will make connection lines appear more curved, with values above `0.5` resulting in more "angular" turns in the middle of connection lines.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorsettings_property_editors/visual_editors/minimap_opacity"></div>

[`float`](class_float.md) **editors/visual_editors/minimap_opacity** <div id="class_editorsettings_property_editors/visual_editors/minimap_opacity"></div>

The opacity of the minimap displayed in the bottom-right corner of the visual shader editor.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorsettings_property_editors/visual_editors/visual_shader/port_preview_size"></div>

[`int`](class_int.md) **editors/visual_editors/visual_shader/port_preview_size** <div id="class_editorsettings_property_editors/visual_editors/visual_shader/port_preview_size"></div>

The size to use for port previews in the visual shader uniforms (toggled by clicking the "eye" icon next to an output). The value is defined in pixels at 100% zoom, and will scale with zoom automatically.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorsettings_property_filesystem/directories/autoscan_project_path"></div>

[`String`](class_string.md) **filesystem/directories/autoscan_project_path** <div id="class_editorsettings_property_filesystem/directories/autoscan_project_path"></div>

The folder where projects should be scanned for (recursively), in a way similar to the project manager's **Scan** button. This can be set to the same value as [`filesystem/directories/default_project_path`](#class_editorsettings_property_filesystem/directories/default_project_path) for convenience.

 **Note:** Setting this path to a folder with very large amounts of files/folders can slow down the project manager startup significantly. To keep the project manager quick to start up, it is recommended to set this value to a folder as "specific" as possible.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorsettings_property_filesystem/directories/default_project_path"></div>

[`String`](class_string.md) **filesystem/directories/default_project_path** <div id="class_editorsettings_property_filesystem/directories/default_project_path"></div>

The folder where new projects should be created by default when clicking the project manager's **New Project** button. This can be set to the same value as [`filesystem/directories/autoscan_project_path`](#class_editorsettings_property_filesystem/directories/autoscan_project_path) for convenience.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorsettings_property_filesystem/external_programs/3d_model_editor"></div>

[`String`](class_string.md) **filesystem/external_programs/3d_model_editor** <div id="class_editorsettings_property_filesystem/external_programs/3d_model_editor"></div>

The program that opens 3D model scene files when clicking "Open in External Program" option in Filesystem Dock. If not specified, the file will be opened in the system's default program.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorsettings_property_filesystem/external_programs/audio_editor"></div>

[`String`](class_string.md) **filesystem/external_programs/audio_editor** <div id="class_editorsettings_property_filesystem/external_programs/audio_editor"></div>

The program that opens audio files when clicking "Open in External Program" option in Filesystem Dock. If not specified, the file will be opened in the system's default program.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorsettings_property_filesystem/external_programs/raster_image_editor"></div>

[`String`](class_string.md) **filesystem/external_programs/raster_image_editor** <div id="class_editorsettings_property_filesystem/external_programs/raster_image_editor"></div>

The program that opens raster image files when clicking "Open in External Program" option in Filesystem Dock. If not specified, the file will be opened in the system's default program.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorsettings_property_filesystem/external_programs/terminal_emulator"></div>

[`String`](class_string.md) **filesystem/external_programs/terminal_emulator** <div id="class_editorsettings_property_filesystem/external_programs/terminal_emulator"></div>

The terminal emulator program to use when using **Open in Terminal** context menu action in the FileSystem dock. You can enter an absolute path to a program binary, or a path to a program that is present in the `PATH` environment variable.

If left empty, Godot will use the default terminal emulator for the system:

- **Windows:** PowerShell

- **macOS:** Terminal.app

- **Linux:** The first terminal found on the system in this order: gnome-terminal, konsole, xfce4-terminal, lxterminal, kitty, alacritty, urxvt, xterm.

To use Command Prompt (cmd) instead of PowerShell on Windows, enter `cmd` in this field and the correct flags will automatically be used.

On macOS, make sure to point to the actual program binary located within the `Programs/MacOS` folder of the .app bundle, rather than the .app bundle directory.

If specifying a custom terminal emulator, you may need to override [`filesystem/external_programs/terminal_emulator_flags`](#class_editorsettings_property_filesystem/external_programs/terminal_emulator_flags) so it opens in the correct folder.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorsettings_property_filesystem/external_programs/terminal_emulator_flags"></div>

[`String`](class_string.md) **filesystem/external_programs/terminal_emulator_flags** <div id="class_editorsettings_property_filesystem/external_programs/terminal_emulator_flags"></div>

The command-line arguments to pass to the terminal emulator that is run when using **Open in Terminal** context menu action in the FileSystem dock. See also [`filesystem/external_programs/terminal_emulator`](#class_editorsettings_property_filesystem/external_programs/terminal_emulator).

If left empty, the default flags are `{directory}`, which is replaced by the absolute path to the directory that is being opened in the terminal.

 **Note:** If the terminal emulator is set to PowerShell, cmd, or Konsole, Godot will automatically prepend arguments to this list, as these terminals require nonstandard arguments to open in the correct folder.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorsettings_property_filesystem/external_programs/vector_image_editor"></div>

[`String`](class_string.md) **filesystem/external_programs/vector_image_editor** <div id="class_editorsettings_property_filesystem/external_programs/vector_image_editor"></div>

The program that opens vector image files when clicking "Open in External Program" option in Filesystem Dock. If not specified, the file will be opened in the system's default program.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorsettings_property_filesystem/file_dialog/display_mode"></div>

[`int`](class_int.md) **filesystem/file_dialog/display_mode** <div id="class_editorsettings_property_filesystem/file_dialog/display_mode"></div>

The display mode to use in the editor's file dialogs.

- **Thumbnails** takes more space, but displays dynamic resource thumbnails, making resources easier to preview without having to open them.

- **List** is more compact but doesn't display dynamic resource thumbnails. Instead, it displays static icons based on the file extension.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorsettings_property_filesystem/file_dialog/show_hidden_files"></div>

[`bool`](class_bool.md) **filesystem/file_dialog/show_hidden_files** <div id="class_editorsettings_property_filesystem/file_dialog/show_hidden_files"></div>

If `true`, display hidden files in the editor's file dialogs. Files that have names starting with `.` are considered hidden (e.g. `.hidden_file`).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorsettings_property_filesystem/file_dialog/thumbnail_size"></div>

[`int`](class_int.md) **filesystem/file_dialog/thumbnail_size** <div id="class_editorsettings_property_filesystem/file_dialog/thumbnail_size"></div>

The thumbnail size to use in the editor's file dialogs (in pixels). See also [`docks/filesystem/thumbnail_size`](#class_editorsettings_property_docks/filesystem/thumbnail_size).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorsettings_property_filesystem/import/blender/blender_path"></div>

[`String`](class_string.md) **filesystem/import/blender/blender_path** <div id="class_editorsettings_property_filesystem/import/blender/blender_path"></div>

The path to the directory containing the Blender executable used for converting the Blender 3D scene files `.blend` to glTF 2.0 format during import. Blender 3.0 or later is required.

To enable this feature for your specific project, use [`ProjectSettings.filesystem/import/blender/enabled`](#class_projectsettings_property_filesystem/import/blender/enabled).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorsettings_property_filesystem/import/blender/rpc_port"></div>

[`int`](class_int.md) **filesystem/import/blender/rpc_port** <div id="class_editorsettings_property_filesystem/import/blender/rpc_port"></div>

The port number used for Remote Procedure Call (RPC) communication with Godot's created process of the blender executable.

Setting this to 0 effectively disables communication with Godot and the blender process, making performance slower.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorsettings_property_filesystem/import/blender/rpc_server_uptime"></div>

[`float`](class_float.md) **filesystem/import/blender/rpc_server_uptime** <div id="class_editorsettings_property_filesystem/import/blender/rpc_server_uptime"></div>

The maximum idle uptime (in seconds) of the Blender process.

This prevents Godot from having to create a new process for each import within the given seconds.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorsettings_property_filesystem/import/fbx/fbx2gltf_path"></div>

[`String`](class_string.md) **filesystem/import/fbx/fbx2gltf_path** <div id="class_editorsettings_property_filesystem/import/fbx/fbx2gltf_path"></div>

The path to the FBX2glTF executable used for converting Autodesk FBX 3D scene files `.fbx` to glTF 2.0 format during import.

To enable this feature for your specific project, use [`ProjectSettings.filesystem/import/fbx2gltf/enabled`](#class_projectsettings_property_filesystem/import/fbx2gltf/enabled).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorsettings_property_filesystem/on_save/compress_binary_resources"></div>

[`bool`](class_bool.md) **filesystem/on_save/compress_binary_resources** <div id="class_editorsettings_property_filesystem/on_save/compress_binary_resources"></div>

If `true`, uses lossless compression for binary resources.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorsettings_property_filesystem/on_save/safe_save_on_backup_then_rename"></div>

[`bool`](class_bool.md) **filesystem/on_save/safe_save_on_backup_then_rename** <div id="class_editorsettings_property_filesystem/on_save/safe_save_on_backup_then_rename"></div>

If `true`, when saving a file, the editor will rename the old file to a different name, save a new file, then only remove the old file once the new file has been saved. This makes loss of data less likely to happen if the editor or operating system exits unexpectedly while saving (e.g. due to a crash or power outage).

 **Note:** On Windows, this feature can interact negatively with certain antivirus programs. In this case, you may have to set this to `false` to prevent file locking issues.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorsettings_property_filesystem/tools/oidn/oidn_denoise_path"></div>

[`String`](class_string.md) **filesystem/tools/oidn/oidn_denoise_path** <div id="class_editorsettings_property_filesystem/tools/oidn/oidn_denoise_path"></div>

The path to the directory containing the Open Image Denoise (OIDN) executable, used optionally for denoising lightmaps. It can be downloaded from [*openimagedenoise.org*](https://www.openimagedenoise.org/downloads.html).

To enable this feature for your specific project, use [`ProjectSettings.rendering/lightmapping/denoising/denoiser`](#class_projectsettings_property_rendering/lightmapping/denoising/denoiser).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorsettings_property_input/buffering/agile_event_flushing"></div>

[`bool`](class_bool.md) **input/buffering/agile_event_flushing** <div id="class_editorsettings_property_input/buffering/agile_event_flushing"></div>

If `true`, input events will be flushed just before every idle and physics frame.

If `false`, these events will be flushed only once per process frame, between iterations of the engine.

Enabling this setting can greatly improve input responsiveness, especially in devices that struggle to run at the project's intended frame rate.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorsettings_property_input/buffering/use_accumulated_input"></div>

[`bool`](class_bool.md) **input/buffering/use_accumulated_input** <div id="class_editorsettings_property_input/buffering/use_accumulated_input"></div>

If `true`, similar input events sent by the operating system are accumulated. When input accumulation is enabled, all input events generated during a frame will be merged and emitted when the frame is done rendering. Therefore, this limits the number of input method calls per second to the rendering FPS.

Input accumulation can be disabled to get slightly more precise/reactive input at the cost of increased CPU usage.

 **Note:** Input accumulation is *enabled* by default.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorsettings_property_interface/editor/accept_dialog_cancel_ok_buttons"></div>

[`int`](class_int.md) **interface/editor/accept_dialog_cancel_ok_buttons** <div id="class_editorsettings_property_interface/editor/accept_dialog_cancel_ok_buttons"></div>

How to position the Cancel and OK buttons in the editor's [`AcceptDialog`](class_acceptdialog.md) s. Different platforms have different standard behaviors for this, which can be overridden using this setting. This is useful if you use Godot both on Windows and macOS/Linux and your Godot muscle memory is stronger than your OS specific one.

- **Auto** follows the platform convention: Cancel first on macOS and Linux, OK first on Windows.

- **Cancel First** forces the ordering Cancel/OK.

- **OK First** forces the ordering OK/Cancel.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorsettings_property_interface/editor/automatically_open_screenshots"></div>

[`bool`](class_bool.md) **interface/editor/automatically_open_screenshots** <div id="class_editorsettings_property_interface/editor/automatically_open_screenshots"></div>

If `true`, automatically opens screenshots with the default program associated to `.png` files after a screenshot is taken using the **Editor > Take Screenshot** action.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorsettings_property_interface/editor/code_font"></div>

[`String`](class_string.md) **interface/editor/code_font** <div id="class_editorsettings_property_interface/editor/code_font"></div>

The font to use for the script editor. Must be a resource of a [`Font`](class_font.md) type such as a `.ttf` or `.otf` font file.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorsettings_property_interface/editor/code_font_contextual_ligatures"></div>

[`int`](class_int.md) **interface/editor/code_font_contextual_ligatures** <div id="class_editorsettings_property_interface/editor/code_font_contextual_ligatures"></div>

The font ligatures to enable for the currently configured code font. Not all fonts include support for ligatures.

 **Note:** The default editor code font ([*JetBrains Mono*](https://www.jetbrains.com/lp/mono/)) has contextual ligatures in its font file.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorsettings_property_interface/editor/code_font_custom_opentype_features"></div>

[`String`](class_string.md) **interface/editor/code_font_custom_opentype_features** <div id="class_editorsettings_property_interface/editor/code_font_custom_opentype_features"></div>

List of custom OpenType features to use, if supported by the currently configured code font. Not all fonts include support for custom OpenType features. The string should follow the OpenType specification.

 **Note:** The default editor code font ([*JetBrains Mono*](https://www.jetbrains.com/lp/mono/)) has custom OpenType features in its font file, but there is no documented list yet.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorsettings_property_interface/editor/code_font_custom_variations"></div>

[`String`](class_string.md) **interface/editor/code_font_custom_variations** <div id="class_editorsettings_property_interface/editor/code_font_custom_variations"></div>

List of alternative characters to use, if supported by the currently configured code font. Not all fonts include support for custom variations. The string should follow the OpenType specification.

 **Note:** The default editor code font ([*JetBrains Mono*](https://www.jetbrains.com/lp/mono/)) has alternate characters in its font file, but there is no documented list yet.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorsettings_property_interface/editor/code_font_size"></div>

[`int`](class_int.md) **interface/editor/code_font_size** <div id="class_editorsettings_property_interface/editor/code_font_size"></div>

The size of the font in the script editor. This setting does not impact the font size of the Output panel (see [`run/output/font_size`](#class_editorsettings_property_run/output/font_size)).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorsettings_property_interface/editor/custom_display_scale"></div>

[`float`](class_float.md) **interface/editor/custom_display_scale** <div id="class_editorsettings_property_interface/editor/custom_display_scale"></div>

The custom editor scale factor to use. This can be used for displays with very high DPI where a scale factor of 200% is not sufficient.

 **Note:** Only effective if [`interface/editor/display_scale`](#class_editorsettings_property_interface/editor/display_scale) is set to **Custom**.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorsettings_property_interface/editor/display_scale"></div>

[`int`](class_int.md) **interface/editor/display_scale** <div id="class_editorsettings_property_interface/editor/display_scale"></div>

The display scale factor to use for the editor interface. Higher values are more suited to hiDPI/Retina displays.

If set to **Auto**, the editor scale is automatically determined based on the screen resolution and reported display DPI. This heuristic is not always ideal, which means you can get better results by setting the editor scale manually.

If set to **Custom**, the scaling value in [`interface/editor/custom_display_scale`](#class_editorsettings_property_interface/editor/custom_display_scale) will be used.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorsettings_property_interface/editor/dock_tab_style"></div>

[`int`](class_int.md) **interface/editor/dock_tab_style** <div id="class_editorsettings_property_interface/editor/dock_tab_style"></div>

Tab style of editor docks.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorsettings_property_interface/editor/editor_language"></div>

[`String`](class_string.md) **interface/editor/editor_language** <div id="class_editorsettings_property_interface/editor/editor_language"></div>

The language to use for the editor interface.

Translations are provided by the community. If you spot a mistake, [*contribute to editor translations on Weblate!*](../contributing/documentation/editor_and_docs_localization)

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorsettings_property_interface/editor/editor_screen"></div>

[`int`](class_int.md) **interface/editor/editor_screen** <div id="class_editorsettings_property_interface/editor/editor_screen"></div>

The preferred monitor to display the editor.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorsettings_property_interface/editor/expand_to_title"></div>

[`bool`](class_bool.md) **interface/editor/expand_to_title** <div id="class_editorsettings_property_interface/editor/expand_to_title"></div>

Expanding main editor window content to the title, if supported by [`DisplayServer`](class_displayserver.md). See [`DisplayServer.WINDOW_FLAG_EXTEND_TO_TITLE`](#class_displayserver_constant_window_flag_extend_to_title).

Specific to the macOS platform.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorsettings_property_interface/editor/font_antialiasing"></div>

[`int`](class_int.md) **interface/editor/font_antialiasing** <div id="class_editorsettings_property_interface/editor/font_antialiasing"></div>

FreeType's font anti-aliasing mode used to render the editor fonts. Most fonts are not designed to look good with anti-aliasing disabled, so it's recommended to leave this enabled unless you're using a pixel art font.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorsettings_property_interface/editor/font_disable_embedded_bitmaps"></div>

[`bool`](class_bool.md) **interface/editor/font_disable_embedded_bitmaps** <div id="class_editorsettings_property_interface/editor/font_disable_embedded_bitmaps"></div>

If set to `true`, embedded font bitmap loading is disabled (bitmap-only and color fonts ignore this property).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorsettings_property_interface/editor/font_hinting"></div>

[`int`](class_int.md) **interface/editor/font_hinting** <div id="class_editorsettings_property_interface/editor/font_hinting"></div>

The font hinting mode to use for the editor fonts. FreeType supports the following font hinting modes:

- **None:** Don't use font hinting when rasterizing the font. This results in a smooth font, but it can look blurry.

- **Light:** Use hinting on the X axis only. This is a compromise between font sharpness and smoothness.

- **Normal:** Use hinting on both X and Y axes. This results in a sharp font, but it doesn't look very smooth.

If set to **Auto**, the font hinting mode will be set to match the current operating system in use. This means the **Light** hinting mode will be used on Windows and Linux, and the **None** hinting mode will be used on macOS.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorsettings_property_interface/editor/font_subpixel_positioning"></div>

[`int`](class_int.md) **interface/editor/font_subpixel_positioning** <div id="class_editorsettings_property_interface/editor/font_subpixel_positioning"></div>

The subpixel positioning mode to use when rendering editor font glyphs. This affects both the main and code fonts. **Disabled** is the fastest to render and uses the least memory. **Auto** only uses subpixel positioning for small font sizes (where the benefit is the most noticeable). **One Half of a Pixel** and **One Quarter of a Pixel** force the same subpixel positioning mode for all editor fonts, regardless of their size (with **One Quarter of a Pixel** being the highest-quality option).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorsettings_property_interface/editor/import_resources_when_unfocused"></div>

[`bool`](class_bool.md) **interface/editor/import_resources_when_unfocused** <div id="class_editorsettings_property_interface/editor/import_resources_when_unfocused"></div>

If `true`, (re)imports resources even if the editor window is unfocused or minimized. If `false`, resources are only (re)imported when the editor window is focused. This can be set to `true` to speed up iteration by starting the import process earlier when saving files in the project folder. This also allows getting visual feedback on changes without having to click the editor window, which is useful with multi-monitor setups. The downside of setting this to `true` is that it increases idle CPU usage and may steal CPU time from other applications when importing resources.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorsettings_property_interface/editor/localize_settings"></div>

[`bool`](class_bool.md) **interface/editor/localize_settings** <div id="class_editorsettings_property_interface/editor/localize_settings"></div>

If `true`, setting names in the editor are localized when possible.

 **Note:** This setting affects most [`EditorInspector`](class_editorinspector.md) s in the editor UI, primarily Project Settings and Editor Settings. To control names displayed in the Inspector dock, use [`interface/inspector/default_property_name_style`](#class_editorsettings_property_interface/inspector/default_property_name_style) instead.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorsettings_property_interface/editor/low_processor_mode_sleep_usec"></div>

[`int`](class_int.md) **interface/editor/low_processor_mode_sleep_usec** <div id="class_editorsettings_property_interface/editor/low_processor_mode_sleep_usec"></div>

The amount of sleeping between frames when the low-processor usage mode is enabled (in microseconds). Higher values will result in lower CPU/GPU usage, which can improve battery life on laptops. However, higher values will result in a less responsive editor. The default value is set to allow for maximum smoothness on monitors up to 144 Hz. See also [`interface/editor/unfocused_low_processor_mode_sleep_usec`](#class_editorsettings_property_interface/editor/unfocused_low_processor_mode_sleep_usec).

 **Note:** This setting is ignored if [`interface/editor/update_continuously`](#class_editorsettings_property_interface/editor/update_continuously) is `true`, as enabling that setting disables low-processor mode.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorsettings_property_interface/editor/main_font"></div>

[`String`](class_string.md) **interface/editor/main_font** <div id="class_editorsettings_property_interface/editor/main_font"></div>

The font to use for the editor interface. Must be a resource of a [`Font`](class_font.md) type such as a `.ttf` or `.otf` font file.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorsettings_property_interface/editor/main_font_bold"></div>

[`String`](class_string.md) **interface/editor/main_font_bold** <div id="class_editorsettings_property_interface/editor/main_font_bold"></div>

The font to use for bold text in the editor interface. Must be a resource of a [`Font`](class_font.md) type such as a `.ttf` or `.otf` font file.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorsettings_property_interface/editor/main_font_size"></div>

[`int`](class_int.md) **interface/editor/main_font_size** <div id="class_editorsettings_property_interface/editor/main_font_size"></div>

The size of the font in the editor interface.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorsettings_property_interface/editor/mouse_extra_buttons_navigate_history"></div>

[`bool`](class_bool.md) **interface/editor/mouse_extra_buttons_navigate_history** <div id="class_editorsettings_property_interface/editor/mouse_extra_buttons_navigate_history"></div>

If `true`, the mouse's additional side buttons will be usable to navigate in the script editor's file history. Set this to `false` if you're using the side buttons for other purposes (such as a push-to-talk button in a VoIP program).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorsettings_property_interface/editor/project_manager_screen"></div>

[`int`](class_int.md) **interface/editor/project_manager_screen** <div id="class_editorsettings_property_interface/editor/project_manager_screen"></div>

The preferred monitor to display the project manager.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorsettings_property_interface/editor/save_each_scene_on_quit"></div>

[`bool`](class_bool.md) **interface/editor/save_each_scene_on_quit** <div id="class_editorsettings_property_interface/editor/save_each_scene_on_quit"></div>

If `false`, the editor will save all scenes when confirming the **Save** action when quitting the editor or quitting to the project list. If `true`, the editor will ask to save each scene individually.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorsettings_property_interface/editor/save_on_focus_loss"></div>

[`bool`](class_bool.md) **interface/editor/save_on_focus_loss** <div id="class_editorsettings_property_interface/editor/save_on_focus_loss"></div>

If `true`, scenes and scripts are saved when the editor loses focus. Depending on the work flow, this behavior can be less intrusive than [`text_editor/behavior/files/autosave_interval_secs`](#class_editorsettings_property_text_editor/behavior/files/autosave_interval_secs) or remembering to save manually.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorsettings_property_interface/editor/separate_distraction_mode"></div>

[`bool`](class_bool.md) **interface/editor/separate_distraction_mode** <div id="class_editorsettings_property_interface/editor/separate_distraction_mode"></div>

If `true`, the editor's Script tab will have a separate distraction mode setting from the 2D/3D/AssetLib tabs. If `false`, the distraction-free mode toggle is shared between all tabs.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorsettings_property_interface/editor/show_internal_errors_in_toast_notifications"></div>

[`int`](class_int.md) **interface/editor/show_internal_errors_in_toast_notifications** <div id="class_editorsettings_property_interface/editor/show_internal_errors_in_toast_notifications"></div>

If enabled, displays internal engine errors in toast notifications (toggleable by clicking the "bell" icon at the bottom of the editor). No matter the value of this setting, non-internal engine errors will always be visible in toast notifications.

The default **Auto** value will only enable this if the editor was compiled with the `dev_build=yes` SCons option (the default is `dev_build=no`).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorsettings_property_interface/editor/show_update_spinner"></div>

[`int`](class_int.md) **interface/editor/show_update_spinner** <div id="class_editorsettings_property_interface/editor/show_update_spinner"></div>

If enabled, displays an icon in the top-right corner of the editor that spins when the editor redraws a frame. This can be used to diagnose situations where the engine is constantly redrawing, which should be avoided as this increases CPU and GPU utilization for no good reason. To further troubleshoot these situations, start the editor with the `--debug-canvas-item-redraw` [*command line argument*](../tutorials/editor/command_line_tutorial).

Consider enabling this if you are developing editor plugins to ensure they only make the editor redraw when required.

The default **Auto** value will only enable this if the editor was compiled with the `dev_build=yes` SCons option (the default is `dev_build=no`).

 **Note:** If [`interface/editor/update_continuously`](#class_editorsettings_property_interface/editor/update_continuously) is `true`, the spinner icon displays in red.

 **Note:** If the editor was started with the `--debug-canvas-item-redraw` [*command line argument*](../tutorials/editor/command_line_tutorial), the update spinner will *never* display regardless of this setting's value. This is to avoid confusion with what would cause redrawing in real world scenarios.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorsettings_property_interface/editor/single_window_mode"></div>

[`bool`](class_bool.md) **interface/editor/single_window_mode** <div id="class_editorsettings_property_interface/editor/single_window_mode"></div>

If `true`, embed modal windows such as docks inside the main editor window. When single-window mode is enabled, tooltips will also be embedded inside the main editor window, which means they can't be displayed outside of the editor window. Single-window mode can be faster as it does not need to create a separate window for every popup and tooltip, which can be a slow operation depending on the operating system and rendering method in use.

This is equivalent to [`ProjectSettings.display/window/subwindows/embed_subwindows`](#class_projectsettings_property_display/window/subwindows/embed_subwindows) in the running project, except the setting's value is inverted.

 **Note:** To query whether the editor can use multiple windows in an editor plugin, use [`EditorInterface.is_multi_window_enabled`](#class_editorinterface_method_is_multi_window_enabled) instead of querying the value of this editor setting.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorsettings_property_interface/editor/ui_layout_direction"></div>

[`int`](class_int.md) **interface/editor/ui_layout_direction** <div id="class_editorsettings_property_interface/editor/ui_layout_direction"></div>

Editor UI default layout direction.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorsettings_property_interface/editor/unfocused_low_processor_mode_sleep_usec"></div>

[`int`](class_int.md) **interface/editor/unfocused_low_processor_mode_sleep_usec** <div id="class_editorsettings_property_interface/editor/unfocused_low_processor_mode_sleep_usec"></div>

When the editor window is unfocused, the amount of sleeping between frames when the low-processor usage mode is enabled (in microseconds). Higher values will result in lower CPU/GPU usage, which can improve battery life on laptops (in addition to improving the running project's performance if the editor has to redraw continuously). However, higher values will result in a less responsive editor. The default value is set to limit the editor to 20 FPS when the editor window is unfocused. See also [`interface/editor/low_processor_mode_sleep_usec`](#class_editorsettings_property_interface/editor/low_processor_mode_sleep_usec).

 **Note:** This setting is ignored if [`interface/editor/update_continuously`](#class_editorsettings_property_interface/editor/update_continuously) is `true`, as enabling that setting disables low-processor mode.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorsettings_property_interface/editor/update_continuously"></div>

[`bool`](class_bool.md) **interface/editor/update_continuously** <div id="class_editorsettings_property_interface/editor/update_continuously"></div>

If `true`, redraws the editor every frame even if nothing has changed on screen. When this setting is enabled, the update spinner displays in red (see [`interface/editor/show_update_spinner`](#class_editorsettings_property_interface/editor/show_update_spinner)).

 **Warning:** This greatly increases CPU and GPU utilization, leading to increased power usage. This should only be enabled for troubleshooting purposes.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorsettings_property_interface/editor/use_embedded_menu"></div>

[`bool`](class_bool.md) **interface/editor/use_embedded_menu** <div id="class_editorsettings_property_interface/editor/use_embedded_menu"></div>

If `true`, editor main menu is using embedded [`MenuBar`](class_menubar.md) instead of system global menu.

Specific to the macOS platform.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorsettings_property_interface/editor/use_native_file_dialogs"></div>

[`bool`](class_bool.md) **interface/editor/use_native_file_dialogs** <div id="class_editorsettings_property_interface/editor/use_native_file_dialogs"></div>

If `true`, editor UI uses OS native file/directory selection dialogs.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorsettings_property_interface/editor/vsync_mode"></div>

[`int`](class_int.md) **interface/editor/vsync_mode** <div id="class_editorsettings_property_interface/editor/vsync_mode"></div>

Sets the V-Sync mode for the editor. Does not affect the project when run from the editor (this is controlled by [`ProjectSettings.display/window/vsync/vsync_mode`](#class_projectsettings_property_display/window/vsync/vsync_mode)).

Depending on the platform and used renderer, the engine will fall back to **Enabled** if the desired mode is not supported.

 **Note:** V-Sync modes other than **Enabled** are only supported in the Forward+ and Mobile rendering methods, not Compatibility.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorsettings_property_interface/inspector/auto_unfold_foreign_scenes"></div>

[`bool`](class_bool.md) **interface/inspector/auto_unfold_foreign_scenes** <div id="class_editorsettings_property_interface/inspector/auto_unfold_foreign_scenes"></div>

If `true`, automatically expands property groups in the Inspector dock when opening a scene that hasn't been opened previously. If `false`, all groups remain collapsed by default.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorsettings_property_interface/inspector/default_color_picker_mode"></div>

[`int`](class_int.md) **interface/inspector/default_color_picker_mode** <div id="class_editorsettings_property_interface/inspector/default_color_picker_mode"></div>

The default color picker mode to use when opening [`ColorPicker`](class_colorpicker.md) s in the editor. This mode can be temporarily adjusted on the color picker itself.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorsettings_property_interface/inspector/default_color_picker_shape"></div>

[`int`](class_int.md) **interface/inspector/default_color_picker_shape** <div id="class_editorsettings_property_interface/inspector/default_color_picker_shape"></div>

The default color picker shape to use when opening [`ColorPicker`](class_colorpicker.md) s in the editor. This shape can be temporarily adjusted on the color picker itself.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorsettings_property_interface/inspector/default_float_step"></div>

[`float`](class_float.md) **interface/inspector/default_float_step** <div id="class_editorsettings_property_interface/inspector/default_float_step"></div>

The floating-point precision to use for properties that don't define an explicit precision step. Lower values allow entering more precise values.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorsettings_property_interface/inspector/default_property_name_style"></div>

[`int`](class_int.md) **interface/inspector/default_property_name_style** <div id="class_editorsettings_property_interface/inspector/default_property_name_style"></div>

The default property name style to display in the Inspector dock. This style can be temporarily adjusted in the Inspector dock's menu.

- **Raw:** Displays properties in `snake_case`.

- **Capitalized:** Displays properties capitalized.

- **Localized:** Displays the localized string for the current editor language if a translation is available for the given property. If no translation is available, falls back to **Capitalized**.

 **Note:** To display translated setting names in Project Settings and Editor Settings, use [`interface/editor/localize_settings`](#class_editorsettings_property_interface/editor/localize_settings) instead.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorsettings_property_interface/inspector/delimitate_all_container_and_resources"></div>

[`bool`](class_bool.md) **interface/inspector/delimitate_all_container_and_resources** <div id="class_editorsettings_property_interface/inspector/delimitate_all_container_and_resources"></div>

If `true`, add a margin around Array, Dictionary, and Resource Editors that are not already colored.

 **Note:** If [`interface/inspector/nested_color_mode`](#class_editorsettings_property_interface/inspector/nested_color_mode) is set to **Containers & Resources** this parameter will have no effect since those editors will already be colored

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorsettings_property_interface/inspector/disable_folding"></div>

[`bool`](class_bool.md) **interface/inspector/disable_folding** <div id="class_editorsettings_property_interface/inspector/disable_folding"></div>

If `true`, forces all property groups to be expanded in the Inspector dock and prevents collapsing them.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorsettings_property_interface/inspector/float_drag_speed"></div>

[`float`](class_float.md) **interface/inspector/float_drag_speed** <div id="class_editorsettings_property_interface/inspector/float_drag_speed"></div>

Base speed for increasing/decreasing float values by dragging them in the inspector.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorsettings_property_interface/inspector/horizontal_vector2_editing"></div>

[`bool`](class_bool.md) **interface/inspector/horizontal_vector2_editing** <div id="class_editorsettings_property_interface/inspector/horizontal_vector2_editing"></div>

If `true`, [`Vector2`](class_vector2.md) and [`Vector2i`](class_vector2i.md) properties are shown on a single line in the inspector instead of two lines. This is overall more compact, but it can be harder to view and edit large values without expanding the inspector horizontally.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorsettings_property_interface/inspector/horizontal_vector_types_editing"></div>

[`bool`](class_bool.md) **interface/inspector/horizontal_vector_types_editing** <div id="class_editorsettings_property_interface/inspector/horizontal_vector_types_editing"></div>

If `true`, [`Vector3`](class_vector3.md), [`Vector3i`](class_vector3i.md), [`Vector4`](class_vector4.md), [`Vector4i`](class_vector4i.md), [`Rect2`](class_rect2.md), [`Rect2i`](class_rect2i.md), [`Plane`](class_plane.md), and [`Quaternion`](class_quaternion.md) properties are shown on a single line in the inspector instead of multiple lines. This is overall more compact, but it can be harder to view and edit large values without expanding the inspector horizontally.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorsettings_property_interface/inspector/max_array_dictionary_items_per_page"></div>

[`int`](class_int.md) **interface/inspector/max_array_dictionary_items_per_page** <div id="class_editorsettings_property_interface/inspector/max_array_dictionary_items_per_page"></div>

The number of [`Array`](class_array.md) or [`Dictionary`](class_dictionary.md) items to display on each "page" in the inspector. Higher values allow viewing more values per page, but take more time to load. This increased load time is noticeable when selecting nodes that have array or dictionary properties in the editor.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorsettings_property_interface/inspector/nested_color_mode"></div>

[`int`](class_int.md) **interface/inspector/nested_color_mode** <div id="class_editorsettings_property_interface/inspector/nested_color_mode"></div>

Control which property editors are colored when they are opened.

- **Containers & Resources:** Color all Array, Dictionary, and Resource Editors.

- **Resources:** Color all Resource Editors.

- **External Resources:** Color Resource Editors that edits an external resource.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorsettings_property_interface/inspector/open_resources_in_current_inspector"></div>

[`bool`](class_bool.md) **interface/inspector/open_resources_in_current_inspector** <div id="class_editorsettings_property_interface/inspector/open_resources_in_current_inspector"></div>

If `true`, subresources can be edited in the current inspector view. If the resource type is defined in [`interface/inspector/resources_to_open_in_new_inspector`](#class_editorsettings_property_interface/inspector/resources_to_open_in_new_inspector) or if this setting is `false`, attempting to edit a subresource always opens a new inspector view.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorsettings_property_interface/inspector/resources_to_open_in_new_inspector"></div>

[`PackedStringArray`](class_packedstringarray.md) **interface/inspector/resources_to_open_in_new_inspector** <div id="class_editorsettings_property_interface/inspector/resources_to_open_in_new_inspector"></div>

List of resources that should always be opened in a new inspector view, even if [`interface/inspector/open_resources_in_current_inspector`](#class_editorsettings_property_interface/inspector/open_resources_in_current_inspector) is `true`.

**Note:** The returned array is *copied* and any changes to it will not update the original property value. See [`PackedStringArray`](class_packedstringarray.md) for more details.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorsettings_property_interface/inspector/show_low_level_opentype_features"></div>

[`bool`](class_bool.md) **interface/inspector/show_low_level_opentype_features** <div id="class_editorsettings_property_interface/inspector/show_low_level_opentype_features"></div>

If `true`, display OpenType features marked as `hidden` by the font file in the [`Font`](class_font.md) editor.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorsettings_property_interface/multi_window/enable"></div>

[`bool`](class_bool.md) **interface/multi_window/enable** <div id="class_editorsettings_property_interface/multi_window/enable"></div>

If `true`, multiple window support in editor is enabled. The following panels can become dedicated windows (i.e. made floating): Docks, Script editor, and Shader editor.

 **Note:** When [`interface/editor/single_window_mode`](#class_editorsettings_property_interface/editor/single_window_mode) is `true`, the multi window support is always disabled.

 **Note:** To query whether the editor can use multiple windows in an editor plugin, use [`EditorInterface.is_multi_window_enabled`](#class_editorinterface_method_is_multi_window_enabled) instead of querying the value of this editor setting.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorsettings_property_interface/multi_window/maximize_window"></div>

[`bool`](class_bool.md) **interface/multi_window/maximize_window** <div id="class_editorsettings_property_interface/multi_window/maximize_window"></div>

If `true`, when panels are made floating they will be maximized.

If `false`, when panels are made floating their position and size will match the ones when they are attached (excluding window border) to the editor window.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorsettings_property_interface/multi_window/restore_windows_on_load"></div>

[`bool`](class_bool.md) **interface/multi_window/restore_windows_on_load** <div id="class_editorsettings_property_interface/multi_window/restore_windows_on_load"></div>

If `true`, the floating panel position, size, and screen will be saved on editor exit. On next launch the panels that were floating will be made floating in the saved positions, sizes and screens, if possible.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorsettings_property_interface/scene_tabs/display_close_button"></div>

[`int`](class_int.md) **interface/scene_tabs/display_close_button** <div id="class_editorsettings_property_interface/scene_tabs/display_close_button"></div>

Controls when the Close (X) button is displayed on scene tabs at the top of the editor.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorsettings_property_interface/scene_tabs/maximum_width"></div>

[`int`](class_int.md) **interface/scene_tabs/maximum_width** <div id="class_editorsettings_property_interface/scene_tabs/maximum_width"></div>

The maximum width of each scene tab at the top editor (in pixels).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorsettings_property_interface/scene_tabs/restore_scenes_on_load"></div>

[`bool`](class_bool.md) **interface/scene_tabs/restore_scenes_on_load** <div id="class_editorsettings_property_interface/scene_tabs/restore_scenes_on_load"></div>

If `true`, when a project is loaded, restores scenes that were opened on the last editor session.

 **Note:** With many opened scenes, the editor may take longer to become usable. If starting the editor quickly is necessary, consider setting this to `false`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorsettings_property_interface/scene_tabs/show_script_button"></div>

[`bool`](class_bool.md) **interface/scene_tabs/show_script_button** <div id="class_editorsettings_property_interface/scene_tabs/show_script_button"></div>

If `true`, show a button next to each scene tab that opens the scene's "dominant" script when clicked. The "dominant" script is the one that is at the highest level in the scene's hierarchy.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorsettings_property_interface/scene_tabs/show_thumbnail_on_hover"></div>

[`bool`](class_bool.md) **interface/scene_tabs/show_thumbnail_on_hover** <div id="class_editorsettings_property_interface/scene_tabs/show_thumbnail_on_hover"></div>

If `true`, display an automatically-generated thumbnail when hovering scene tabs with the mouse. Scene thumbnails are generated when saving the scene.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorsettings_property_interface/theme/accent_color"></div>

[`Color`](class_color.md) **interface/theme/accent_color** <div id="class_editorsettings_property_interface/theme/accent_color"></div>

The color to use for "highlighted" user interface elements in the editor (pressed and hovered items).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorsettings_property_interface/theme/additional_spacing"></div>

[`int`](class_int.md) **interface/theme/additional_spacing** <div id="class_editorsettings_property_interface/theme/additional_spacing"></div>

The extra spacing to add to various GUI elements in the editor (in pixels). Increasing this value is useful to improve usability on touch screens, at the cost of reducing the amount of usable screen real estate.

See also [`interface/theme/spacing_preset`](#class_editorsettings_property_interface/theme/spacing_preset).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorsettings_property_interface/theme/base_color"></div>

[`Color`](class_color.md) **interface/theme/base_color** <div id="class_editorsettings_property_interface/theme/base_color"></div>

The base color to use for user interface elements in the editor. Secondary colors (such as darker/lighter variants) are derived from this color.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorsettings_property_interface/theme/base_spacing"></div>

[`int`](class_int.md) **interface/theme/base_spacing** <div id="class_editorsettings_property_interface/theme/base_spacing"></div>

The base spacing used by various GUI elements in the editor (in pixels). See also [`interface/theme/spacing_preset`](#class_editorsettings_property_interface/theme/spacing_preset).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorsettings_property_interface/theme/border_size"></div>

[`int`](class_int.md) **interface/theme/border_size** <div id="class_editorsettings_property_interface/theme/border_size"></div>

The border size to use for interface elements (in pixels).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorsettings_property_interface/theme/contrast"></div>

[`float`](class_float.md) **interface/theme/contrast** <div id="class_editorsettings_property_interface/theme/contrast"></div>

The contrast factor to use when deriving the editor theme's base color (see [`interface/theme/base_color`](#class_editorsettings_property_interface/theme/base_color)). When using a positive values, the derived colors will be *darker* than the base color. This contrast factor can be set to a negative value, which will make the derived colors *brighter* than the base color. Negative contrast rates often look better for light themes.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorsettings_property_interface/theme/corner_radius"></div>

[`int`](class_int.md) **interface/theme/corner_radius** <div id="class_editorsettings_property_interface/theme/corner_radius"></div>

The corner radius to use for interface elements (in pixels). `0` is square.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorsettings_property_interface/theme/custom_theme"></div>

[`String`](class_string.md) **interface/theme/custom_theme** <div id="class_editorsettings_property_interface/theme/custom_theme"></div>

The custom theme resource to use for the editor. Must be a Godot theme resource in `.tres` or `.res` format.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorsettings_property_interface/theme/draw_extra_borders"></div>

[`bool`](class_bool.md) **interface/theme/draw_extra_borders** <div id="class_editorsettings_property_interface/theme/draw_extra_borders"></div>

If `true`, draws additional borders around interactive UI elements in the editor. This is automatically enabled when using the **Black (OLED)** theme preset, as this theme preset uses a fully black background.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorsettings_property_interface/theme/follow_system_theme"></div>

[`bool`](class_bool.md) **interface/theme/follow_system_theme** <div id="class_editorsettings_property_interface/theme/follow_system_theme"></div>

If `true`, the editor theme preset will attempt to automatically match the system theme.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorsettings_property_interface/theme/icon_and_font_color"></div>

[`int`](class_int.md) **interface/theme/icon_and_font_color** <div id="class_editorsettings_property_interface/theme/icon_and_font_color"></div>

The icon and font color scheme to use in the editor.

- **Auto** determines the color scheme to use automatically based on [`interface/theme/base_color`](#class_editorsettings_property_interface/theme/base_color).

- **Dark** makes fonts and icons dark (suitable for light themes). Icon colors are automatically converted by the editor following the set of rules defined in [*this file*](https://github.com/godotengine/godot/blob/master/editor/themes/editor_theme_manager.cpp).

- **Light** makes fonts and icons light (suitable for dark themes).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorsettings_property_interface/theme/icon_saturation"></div>

[`float`](class_float.md) **interface/theme/icon_saturation** <div id="class_editorsettings_property_interface/theme/icon_saturation"></div>

The saturation to use for editor icons. Higher values result in more vibrant colors.

 **Note:** The default editor icon saturation was increased by 30% in Godot 4.0 and later. To get Godot 3.x's icon saturation back, set [`interface/theme/icon_saturation`](#class_editorsettings_property_interface/theme/icon_saturation) to `0.77`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorsettings_property_interface/theme/preset"></div>

[`String`](class_string.md) **interface/theme/preset** <div id="class_editorsettings_property_interface/theme/preset"></div>

The editor theme preset to use.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorsettings_property_interface/theme/relationship_line_opacity"></div>

[`float`](class_float.md) **interface/theme/relationship_line_opacity** <div id="class_editorsettings_property_interface/theme/relationship_line_opacity"></div>

The opacity to use when drawing relationship lines in the editor's [`Tree`](class_tree.md)-based GUIs (such as the Scene tree dock).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorsettings_property_interface/theme/spacing_preset"></div>

[`String`](class_string.md) **interface/theme/spacing_preset** <div id="class_editorsettings_property_interface/theme/spacing_preset"></div>

The editor theme spacing preset to use. See also [`interface/theme/base_spacing`](#class_editorsettings_property_interface/theme/base_spacing) and [`interface/theme/additional_spacing`](#class_editorsettings_property_interface/theme/additional_spacing).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorsettings_property_interface/theme/use_system_accent_color"></div>

[`bool`](class_bool.md) **interface/theme/use_system_accent_color** <div id="class_editorsettings_property_interface/theme/use_system_accent_color"></div>

If `true`, set accent color based on system settings.

 **Note:** This setting is only effective on Windows and MacOS.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorsettings_property_interface/touchscreen/enable_long_press_as_right_click"></div>

[`bool`](class_bool.md) **interface/touchscreen/enable_long_press_as_right_click** <div id="class_editorsettings_property_interface/touchscreen/enable_long_press_as_right_click"></div>

If `true`, long press on touchscreen is treated as right click.

 **Note:** Defaults to `true` on touchscreen devices.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorsettings_property_interface/touchscreen/enable_pan_and_scale_gestures"></div>

[`bool`](class_bool.md) **interface/touchscreen/enable_pan_and_scale_gestures** <div id="class_editorsettings_property_interface/touchscreen/enable_pan_and_scale_gestures"></div>

If `true`, enable two finger pan and scale gestures on touchscreen devices.

 **Note:** Defaults to `true` on touchscreen devices.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorsettings_property_interface/touchscreen/increase_scrollbar_touch_area"></div>

[`bool`](class_bool.md) **interface/touchscreen/increase_scrollbar_touch_area** <div id="class_editorsettings_property_interface/touchscreen/increase_scrollbar_touch_area"></div>

If `true`, increases the scrollbar touch area to improve usability on touchscreen devices.

 **Note:** Defaults to `true` on touchscreen devices.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorsettings_property_interface/touchscreen/scale_gizmo_handles"></div>

[`float`](class_float.md) **interface/touchscreen/scale_gizmo_handles** <div id="class_editorsettings_property_interface/touchscreen/scale_gizmo_handles"></div>

Specify the multiplier to apply to the scale for the editor gizmo handles to improve usability on touchscreen devices.

 **Note:** Defaults to `1` on non-touchscreen devices.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorsettings_property_network/connection/engine_version_update_mode"></div>

[`int`](class_int.md) **network/connection/engine_version_update_mode** <div id="class_editorsettings_property_network/connection/engine_version_update_mode"></div>

Specifies how the engine should check for updates.

- **Disable Update Checks** will block the engine from checking updates (see also [`network/connection/network_mode`](#class_editorsettings_property_network/connection/network_mode)).

- **Check Newest Preview** (default for preview versions) will check for the newest available development snapshot.

- **Check Newest Stable** (default for stable versions) will check for the newest available stable version.

- **Check Newest Patch** will check for the latest available stable version, but only within the same minor version. E.g. if your version is `4.3.stable`, you will be notified about `4.3.1.stable`, but not `4.4.stable`.

All update modes will ignore builds with different major versions (e.g. Godot 4 -> Godot 5).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorsettings_property_network/connection/network_mode"></div>

[`int`](class_int.md) **network/connection/network_mode** <div id="class_editorsettings_property_network/connection/network_mode"></div>

Determines whether online features are enabled in the editor, such as the Asset Library or update checks. Disabling these online features helps alleviate privacy concerns by preventing the editor from making HTTP requests to the Godot website or third-party platforms hosting assets from the Asset Library.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorsettings_property_network/debug/remote_host"></div>

[`String`](class_string.md) **network/debug/remote_host** <div id="class_editorsettings_property_network/debug/remote_host"></div>

The address to listen to when starting the remote debugger. This can be set to `0.0.0.0` to allow external clients to connect to the remote debugger (instead of restricting the remote debugger to connections from `localhost`).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorsettings_property_network/debug/remote_port"></div>

[`int`](class_int.md) **network/debug/remote_port** <div id="class_editorsettings_property_network/debug/remote_port"></div>

The port to listen to when starting the remote debugger. Godot will try to use port numbers above the configured number if the configured number is already taken by another application.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorsettings_property_network/http_proxy/host"></div>

[`String`](class_string.md) **network/http_proxy/host** <div id="class_editorsettings_property_network/http_proxy/host"></div>

The host to use to contact the HTTP and HTTPS proxy in the editor (for the asset library and export template downloads). See also [`network/http_proxy/port`](#class_editorsettings_property_network/http_proxy/port).

 **Note:** Godot currently doesn't automatically use system proxy settings, so you have to enter them manually here if needed.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorsettings_property_network/http_proxy/port"></div>

[`int`](class_int.md) **network/http_proxy/port** <div id="class_editorsettings_property_network/http_proxy/port"></div>

The port number to use to contact the HTTP and HTTPS proxy in the editor (for the asset library and export template downloads). See also [`network/http_proxy/host`](#class_editorsettings_property_network/http_proxy/host).

 **Note:** Godot currently doesn't automatically use system proxy settings, so you have to enter them manually here if needed.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorsettings_property_network/tls/editor_tls_certificates"></div>

[`String`](class_string.md) **network/tls/editor_tls_certificates** <div id="class_editorsettings_property_network/tls/editor_tls_certificates"></div>

The TLS certificate bundle to use for HTTP requests made within the editor (e.g. from the AssetLib tab). If left empty, the [*included Mozilla certificate bundle*](https://github.com/godotengine/godot/blob/master/thirdparty/certs/ca-certificates.crt) will be used.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorsettings_property_project_manager/default_renderer"></div>

[`String`](class_string.md) **project_manager/default_renderer** <div id="class_editorsettings_property_project_manager/default_renderer"></div>

The renderer type that will be checked off by default when creating a new project. Accepted strings are "forward_plus", "mobile" or "gl_compatibility".

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorsettings_property_project_manager/directory_naming_convention"></div>

[`int`](class_int.md) **project_manager/directory_naming_convention** <div id="class_editorsettings_property_project_manager/directory_naming_convention"></div>

Directory naming convention for the project manager. Options are "No convention" (project name is directory name), "kebab-case" (default), "snake_case", "camelCase", "PascalCase", or "Title Case".

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorsettings_property_project_manager/sorting_order"></div>

[`int`](class_int.md) **project_manager/sorting_order** <div id="class_editorsettings_property_project_manager/sorting_order"></div>

The sorting order to use in the project manager. When changing the sorting order in the project manager, this setting is set permanently in the editor settings.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorsettings_property_run/auto_save/save_before_running"></div>

[`bool`](class_bool.md) **run/auto_save/save_before_running** <div id="class_editorsettings_property_run/auto_save/save_before_running"></div>

If `true`, saves all scenes and scripts automatically before running the project. Setting this to `false` prevents the editor from saving if there are no changes which can speed up the project startup slightly, but it makes it possible to run a project that has unsaved changes. (Unsaved changes will not be visible in the running project.)

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorsettings_property_run/bottom_panel/action_on_play"></div>

[`int`](class_int.md) **run/bottom_panel/action_on_play** <div id="class_editorsettings_property_run/bottom_panel/action_on_play"></div>

The action to execute on the bottom panel when running the project.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorsettings_property_run/bottom_panel/action_on_stop"></div>

[`int`](class_int.md) **run/bottom_panel/action_on_stop** <div id="class_editorsettings_property_run/bottom_panel/action_on_stop"></div>

The action to execute on the bottom panel when stopping the project.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorsettings_property_run/output/always_clear_output_on_play"></div>

[`bool`](class_bool.md) **run/output/always_clear_output_on_play** <div id="class_editorsettings_property_run/output/always_clear_output_on_play"></div>

If `true`, the editor will clear the Output panel when running the project.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorsettings_property_run/output/font_size"></div>

[`int`](class_int.md) **run/output/font_size** <div id="class_editorsettings_property_run/output/font_size"></div>

The size of the font in the **Output** panel at the bottom of the editor. This setting does not impact the font size of the script editor (see [`interface/editor/code_font_size`](#class_editorsettings_property_interface/editor/code_font_size)).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorsettings_property_run/output/max_lines"></div>

[`int`](class_int.md) **run/output/max_lines** <div id="class_editorsettings_property_run/output/max_lines"></div>

Maximum number of lines to show at any one time in the Output panel.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorsettings_property_run/platforms/linuxbsd/prefer_wayland"></div>

[`bool`](class_bool.md) **run/platforms/linuxbsd/prefer_wayland** <div id="class_editorsettings_property_run/platforms/linuxbsd/prefer_wayland"></div>

If `true`, on Linux/BSD, the editor will check for Wayland first instead of X11 (if available).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorsettings_property_run/window_placement/android_window"></div>

[`int`](class_int.md) **run/window_placement/android_window** <div id="class_editorsettings_property_run/window_placement/android_window"></div>

The Android window to display the project on when starting the project from the editor.

 **Note:** Only available in the Android editor.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorsettings_property_run/window_placement/rect"></div>

[`int`](class_int.md) **run/window_placement/rect** <div id="class_editorsettings_property_run/window_placement/rect"></div>

The window mode to use to display the project when starting the project from the editor.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorsettings_property_run/window_placement/rect_custom_position"></div>

[`Vector2`](class_vector2.md) **run/window_placement/rect_custom_position** <div id="class_editorsettings_property_run/window_placement/rect_custom_position"></div>

The custom position to use when starting the project from the editor (in pixels from the top-left corner). Only effective if [`run/window_placement/rect`](#class_editorsettings_property_run/window_placement/rect) is set to **Custom Position**.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorsettings_property_run/window_placement/screen"></div>

[`int`](class_int.md) **run/window_placement/screen** <div id="class_editorsettings_property_run/window_placement/screen"></div>

The monitor to display the project on when starting the project from the editor.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorsettings_property_text_editor/appearance/caret/caret_blink"></div>

[`bool`](class_bool.md) **text_editor/appearance/caret/caret_blink** <div id="class_editorsettings_property_text_editor/appearance/caret/caret_blink"></div>

If `true`, makes the caret blink according to [`text_editor/appearance/caret/caret_blink_interval`](#class_editorsettings_property_text_editor/appearance/caret/caret_blink_interval). Disabling this setting can improve battery life on laptops if you spend long amounts of time in the script editor, since it will reduce the frequency at which the editor needs to be redrawn.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorsettings_property_text_editor/appearance/caret/caret_blink_interval"></div>

[`float`](class_float.md) **text_editor/appearance/caret/caret_blink_interval** <div id="class_editorsettings_property_text_editor/appearance/caret/caret_blink_interval"></div>

The interval at which the caret will blink (in seconds). See also [`text_editor/appearance/caret/caret_blink`](#class_editorsettings_property_text_editor/appearance/caret/caret_blink).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorsettings_property_text_editor/appearance/caret/highlight_all_occurrences"></div>

[`bool`](class_bool.md) **text_editor/appearance/caret/highlight_all_occurrences** <div id="class_editorsettings_property_text_editor/appearance/caret/highlight_all_occurrences"></div>

If `true`, highlights all occurrences of the currently selected text in the script editor. See also [`text_editor/theme/highlighting/word_highlighted_color`](#class_editorsettings_property_text_editor/theme/highlighting/word_highlighted_color).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorsettings_property_text_editor/appearance/caret/highlight_current_line"></div>

[`bool`](class_bool.md) **text_editor/appearance/caret/highlight_current_line** <div id="class_editorsettings_property_text_editor/appearance/caret/highlight_current_line"></div>

If `true`, colors the background of the line the caret is currently on with [`text_editor/theme/highlighting/current_line_color`](#class_editorsettings_property_text_editor/theme/highlighting/current_line_color).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorsettings_property_text_editor/appearance/caret/type"></div>

[`int`](class_int.md) **text_editor/appearance/caret/type** <div id="class_editorsettings_property_text_editor/appearance/caret/type"></div>

The shape of the caret to use in the script editor. **Line** displays a vertical line to the left of the current character, whereas **Block** displays an outline over the current character.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorsettings_property_text_editor/appearance/guidelines/line_length_guideline_hard_column"></div>

[`int`](class_int.md) **text_editor/appearance/guidelines/line_length_guideline_hard_column** <div id="class_editorsettings_property_text_editor/appearance/guidelines/line_length_guideline_hard_column"></div>

The column at which to display a subtle line as a line length guideline for scripts. This should generally be greater than [`text_editor/appearance/guidelines/line_length_guideline_soft_column`](#class_editorsettings_property_text_editor/appearance/guidelines/line_length_guideline_soft_column).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorsettings_property_text_editor/appearance/guidelines/line_length_guideline_soft_column"></div>

[`int`](class_int.md) **text_editor/appearance/guidelines/line_length_guideline_soft_column** <div id="class_editorsettings_property_text_editor/appearance/guidelines/line_length_guideline_soft_column"></div>

The column at which to display a *very* subtle line as a line length guideline for scripts. This should generally be lower than [`text_editor/appearance/guidelines/line_length_guideline_hard_column`](#class_editorsettings_property_text_editor/appearance/guidelines/line_length_guideline_hard_column).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorsettings_property_text_editor/appearance/guidelines/show_line_length_guidelines"></div>

[`bool`](class_bool.md) **text_editor/appearance/guidelines/show_line_length_guidelines** <div id="class_editorsettings_property_text_editor/appearance/guidelines/show_line_length_guidelines"></div>

If `true`, displays line length guidelines to help you keep line lengths in check. See also [`text_editor/appearance/guidelines/line_length_guideline_soft_column`](#class_editorsettings_property_text_editor/appearance/guidelines/line_length_guideline_soft_column) and [`text_editor/appearance/guidelines/line_length_guideline_hard_column`](#class_editorsettings_property_text_editor/appearance/guidelines/line_length_guideline_hard_column).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorsettings_property_text_editor/appearance/gutters/highlight_type_safe_lines"></div>

[`bool`](class_bool.md) **text_editor/appearance/gutters/highlight_type_safe_lines** <div id="class_editorsettings_property_text_editor/appearance/gutters/highlight_type_safe_lines"></div>

If `true`, highlights type-safe lines by displaying their line number color with [`text_editor/theme/highlighting/safe_line_number_color`](#class_editorsettings_property_text_editor/theme/highlighting/safe_line_number_color) instead of [`text_editor/theme/highlighting/line_number_color`](#class_editorsettings_property_text_editor/theme/highlighting/line_number_color). Type-safe lines are lines of code where the type of all variables is known at compile-time. These type-safe lines may run faster thanks to typed instructions.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorsettings_property_text_editor/appearance/gutters/line_numbers_zero_padded"></div>

[`bool`](class_bool.md) **text_editor/appearance/gutters/line_numbers_zero_padded** <div id="class_editorsettings_property_text_editor/appearance/gutters/line_numbers_zero_padded"></div>

If `true`, displays line numbers with zero padding (e.g. `007` instead of `7`).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorsettings_property_text_editor/appearance/gutters/show_info_gutter"></div>

[`bool`](class_bool.md) **text_editor/appearance/gutters/show_info_gutter** <div id="class_editorsettings_property_text_editor/appearance/gutters/show_info_gutter"></div>

If `true`, displays a gutter at the left containing icons for methods with signal connections and for overridden methods.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorsettings_property_text_editor/appearance/gutters/show_line_numbers"></div>

[`bool`](class_bool.md) **text_editor/appearance/gutters/show_line_numbers** <div id="class_editorsettings_property_text_editor/appearance/gutters/show_line_numbers"></div>

If `true`, displays line numbers in a gutter at the left.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorsettings_property_text_editor/appearance/lines/autowrap_mode"></div>

[`int`](class_int.md) **text_editor/appearance/lines/autowrap_mode** <div id="class_editorsettings_property_text_editor/appearance/lines/autowrap_mode"></div>

If [`text_editor/appearance/lines/word_wrap`](#class_editorsettings_property_text_editor/appearance/lines/word_wrap) is set to `1`, sets text wrapping mode. To see how each mode behaves, see [AutowrapMode](#enum_textserver_autowrapmode).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorsettings_property_text_editor/appearance/lines/code_folding"></div>

[`bool`](class_bool.md) **text_editor/appearance/lines/code_folding** <div id="class_editorsettings_property_text_editor/appearance/lines/code_folding"></div>

If `true`, displays the folding arrows next to indented code sections and allows code folding. If `false`, hides the folding arrows next to indented code sections and disallows code folding.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorsettings_property_text_editor/appearance/lines/word_wrap"></div>

[`int`](class_int.md) **text_editor/appearance/lines/word_wrap** <div id="class_editorsettings_property_text_editor/appearance/lines/word_wrap"></div>

If `true`, wraps long lines over multiple lines to avoid horizontal scrolling. This is a display-only feature; it does not actually insert line breaks in your scripts.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorsettings_property_text_editor/appearance/minimap/minimap_width"></div>

[`int`](class_int.md) **text_editor/appearance/minimap/minimap_width** <div id="class_editorsettings_property_text_editor/appearance/minimap/minimap_width"></div>

The width of the minimap in the script editor (in pixels).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorsettings_property_text_editor/appearance/minimap/show_minimap"></div>

[`bool`](class_bool.md) **text_editor/appearance/minimap/show_minimap** <div id="class_editorsettings_property_text_editor/appearance/minimap/show_minimap"></div>

If `true`, draws an overview of the script near the scroll bar. The minimap can be left-clicked to scroll directly to a location in an "absolute" manner.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorsettings_property_text_editor/appearance/whitespace/draw_spaces"></div>

[`bool`](class_bool.md) **text_editor/appearance/whitespace/draw_spaces** <div id="class_editorsettings_property_text_editor/appearance/whitespace/draw_spaces"></div>

If `true`, draws space characters as centered points.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorsettings_property_text_editor/appearance/whitespace/draw_tabs"></div>

[`bool`](class_bool.md) **text_editor/appearance/whitespace/draw_tabs** <div id="class_editorsettings_property_text_editor/appearance/whitespace/draw_tabs"></div>

If `true`, draws tab characters as chevrons.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorsettings_property_text_editor/appearance/whitespace/line_spacing"></div>

[`int`](class_int.md) **text_editor/appearance/whitespace/line_spacing** <div id="class_editorsettings_property_text_editor/appearance/whitespace/line_spacing"></div>

The space to add between lines (in pixels). Greater line spacing can help improve readability at the cost of displaying fewer lines on screen.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorsettings_property_text_editor/behavior/files/auto_reload_scripts_on_external_change"></div>

[`bool`](class_bool.md) **text_editor/behavior/files/auto_reload_scripts_on_external_change** <div id="class_editorsettings_property_text_editor/behavior/files/auto_reload_scripts_on_external_change"></div>

If `true`, automatically reloads scripts in the editor when they have been modified and saved by external editors.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorsettings_property_text_editor/behavior/files/autosave_interval_secs"></div>

[`int`](class_int.md) **text_editor/behavior/files/autosave_interval_secs** <div id="class_editorsettings_property_text_editor/behavior/files/autosave_interval_secs"></div>

If set to a value greater than `0`, automatically saves the current script following the specified interval (in seconds). This can be used to prevent data loss if the editor crashes.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorsettings_property_text_editor/behavior/files/convert_indent_on_save"></div>

[`bool`](class_bool.md) **text_editor/behavior/files/convert_indent_on_save** <div id="class_editorsettings_property_text_editor/behavior/files/convert_indent_on_save"></div>

If `true`, converts indentation to match the script editor's indentation settings when saving a script. See also [`text_editor/behavior/indent/type`](#class_editorsettings_property_text_editor/behavior/indent/type).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorsettings_property_text_editor/behavior/files/restore_scripts_on_load"></div>

[`bool`](class_bool.md) **text_editor/behavior/files/restore_scripts_on_load** <div id="class_editorsettings_property_text_editor/behavior/files/restore_scripts_on_load"></div>

If `true`, reopens scripts that were opened in the last session when the editor is reopened on a given project.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorsettings_property_text_editor/behavior/files/trim_final_newlines_on_save"></div>

[`bool`](class_bool.md) **text_editor/behavior/files/trim_final_newlines_on_save** <div id="class_editorsettings_property_text_editor/behavior/files/trim_final_newlines_on_save"></div>

If `true`, trims all empty newlines after the final newline when saving a script. Final newlines refer to the empty newlines found at the end of files. Since these serve no practical purpose, they can and should be removed to make version control diffs less noisy.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorsettings_property_text_editor/behavior/files/trim_trailing_whitespace_on_save"></div>

[`bool`](class_bool.md) **text_editor/behavior/files/trim_trailing_whitespace_on_save** <div id="class_editorsettings_property_text_editor/behavior/files/trim_trailing_whitespace_on_save"></div>

If `true`, trims trailing whitespace when saving a script. Trailing whitespace refers to tab and space characters placed at the end of lines. Since these serve no practical purpose, they can and should be removed to make version control diffs less noisy.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorsettings_property_text_editor/behavior/indent/auto_indent"></div>

[`bool`](class_bool.md) **text_editor/behavior/indent/auto_indent** <div id="class_editorsettings_property_text_editor/behavior/indent/auto_indent"></div>

If `true`, automatically indents code when pressing the <i class="fa fa-gamepad"></i>`Enter` key based on blocks above the new line.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorsettings_property_text_editor/behavior/indent/indent_wrapped_lines"></div>

[`bool`](class_bool.md) **text_editor/behavior/indent/indent_wrapped_lines** <div id="class_editorsettings_property_text_editor/behavior/indent/indent_wrapped_lines"></div>

If `true`, all wrapped lines are indented to the same amount as the unwrapped line.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorsettings_property_text_editor/behavior/indent/size"></div>

[`int`](class_int.md) **text_editor/behavior/indent/size** <div id="class_editorsettings_property_text_editor/behavior/indent/size"></div>

When using tab indentation, determines the length of each tab. When using space indentation, determines how many spaces are inserted when pressing <i class="fa fa-gamepad"></i>`Tab` and when automatic indentation is performed.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorsettings_property_text_editor/behavior/indent/type"></div>

[`int`](class_int.md) **text_editor/behavior/indent/type** <div id="class_editorsettings_property_text_editor/behavior/indent/type"></div>

The indentation style to use (tabs or spaces).

 **Note:** The [*GDScript style guide*](../tutorials/scripting/gdscript/gdscript_styleguide) recommends using tabs for indentation. It is advised to change this setting only if you need to work on a project that currently uses spaces for indentation.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorsettings_property_text_editor/behavior/navigation/custom_word_separators"></div>

[`String`](class_string.md) **text_editor/behavior/navigation/custom_word_separators** <div id="class_editorsettings_property_text_editor/behavior/navigation/custom_word_separators"></div>

The characters to consider as word delimiters if [`text_editor/behavior/navigation/use_custom_word_separators`](#class_editorsettings_property_text_editor/behavior/navigation/use_custom_word_separators) is `true`. This is in addition to default characters if [`text_editor/behavior/navigation/use_default_word_separators`](#class_editorsettings_property_text_editor/behavior/navigation/use_default_word_separators) is `true`. The characters should be defined without separation, for example `_♥=`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorsettings_property_text_editor/behavior/navigation/drag_and_drop_selection"></div>

[`bool`](class_bool.md) **text_editor/behavior/navigation/drag_and_drop_selection** <div id="class_editorsettings_property_text_editor/behavior/navigation/drag_and_drop_selection"></div>

If `true`, allows drag-and-dropping text in the script editor to move text. Disable this if you find yourself accidentally drag-and-dropping text in the script editor.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorsettings_property_text_editor/behavior/navigation/move_caret_on_right_click"></div>

[`bool`](class_bool.md) **text_editor/behavior/navigation/move_caret_on_right_click** <div id="class_editorsettings_property_text_editor/behavior/navigation/move_caret_on_right_click"></div>

If `true`, the caret will be moved when right-clicking somewhere in the script editor (like when left-clicking or middle-clicking). If `false`, the caret will only be moved when left-clicking or middle-clicking somewhere.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorsettings_property_text_editor/behavior/navigation/open_script_when_connecting_signal_to_existing_method"></div>

[`bool`](class_bool.md) **text_editor/behavior/navigation/open_script_when_connecting_signal_to_existing_method** <div id="class_editorsettings_property_text_editor/behavior/navigation/open_script_when_connecting_signal_to_existing_method"></div>

If `true`, opens the script editor when connecting a signal to an existing script method from the Node dock.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorsettings_property_text_editor/behavior/navigation/scroll_past_end_of_file"></div>

[`bool`](class_bool.md) **text_editor/behavior/navigation/scroll_past_end_of_file** <div id="class_editorsettings_property_text_editor/behavior/navigation/scroll_past_end_of_file"></div>

If `true`, allows scrolling past the end of the file.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorsettings_property_text_editor/behavior/navigation/smooth_scrolling"></div>

[`bool`](class_bool.md) **text_editor/behavior/navigation/smooth_scrolling** <div id="class_editorsettings_property_text_editor/behavior/navigation/smooth_scrolling"></div>

If `true`, enables a smooth scrolling animation when using the mouse wheel to scroll. See [`text_editor/behavior/navigation/v_scroll_speed`](#class_editorsettings_property_text_editor/behavior/navigation/v_scroll_speed) for the speed of this animation.

 **Note:** [`text_editor/behavior/navigation/smooth_scrolling`](#class_editorsettings_property_text_editor/behavior/navigation/smooth_scrolling) currently behaves poorly in projects where [`ProjectSettings.physics/common/physics_ticks_per_second`](#class_projectsettings_property_physics/common/physics_ticks_per_second) has been increased significantly from its default value (`60`). In this case, it is recommended to disable this setting.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorsettings_property_text_editor/behavior/navigation/stay_in_script_editor_on_node_selected"></div>

[`bool`](class_bool.md) **text_editor/behavior/navigation/stay_in_script_editor_on_node_selected** <div id="class_editorsettings_property_text_editor/behavior/navigation/stay_in_script_editor_on_node_selected"></div>

If `true`, prevents automatically switching between the Script and 2D/3D screens when selecting a node in the Scene tree dock.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorsettings_property_text_editor/behavior/navigation/use_custom_word_separators"></div>

[`bool`](class_bool.md) **text_editor/behavior/navigation/use_custom_word_separators** <div id="class_editorsettings_property_text_editor/behavior/navigation/use_custom_word_separators"></div>

If `true`, uses the characters in [`text_editor/behavior/navigation/custom_word_separators`](#class_editorsettings_property_text_editor/behavior/navigation/custom_word_separators) as word separators for word navigation and operations. This is in addition to the default characters if [`text_editor/behavior/navigation/use_default_word_separators`](#class_editorsettings_property_text_editor/behavior/navigation/use_default_word_separators) is also enabled. Word navigation and operations include double-clicking on a word or holding <i class="fa fa-gamepad"></i>`Ctrl` (<i class="fa fa-gamepad"></i>`Cmd` on macOS) while pressing <i class="fa fa-gamepad"></i>`left`, <i class="fa fa-gamepad"></i>`right`, <i class="fa fa-gamepad"></i>`backspace`, or <i class="fa fa-gamepad"></i>`delete`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorsettings_property_text_editor/behavior/navigation/use_default_word_separators"></div>

[`bool`](class_bool.md) **text_editor/behavior/navigation/use_default_word_separators** <div id="class_editorsettings_property_text_editor/behavior/navigation/use_default_word_separators"></div>

If `true`, uses the characters in ``!"#$%&'()*+,-./:;<=>?@[\]^`{|}~`, the Unicode General Punctuation table, and the Unicode CJK Punctuation table as word separators for word navigation and operations. If `false`, a subset of these characters are used and does not include the characters `<>$~^=+|`. This is in addition to custom characters if [`text_editor/behavior/navigation/use_custom_word_separators`](#class_editorsettings_property_text_editor/behavior/navigation/use_custom_word_separators) is also enabled. These characters are used to determine where a word stops. Word navigation and operations include double-clicking on a word or holding <i class="fa fa-gamepad"></i>`Ctrl` (<i class="fa fa-gamepad"></i>`Cmd` on macOS) while pressing <i class="fa fa-gamepad"></i>`left`, <i class="fa fa-gamepad"></i>`right`, <i class="fa fa-gamepad"></i>`backspace`, or <i class="fa fa-gamepad"></i>`delete`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorsettings_property_text_editor/behavior/navigation/v_scroll_speed"></div>

[`int`](class_int.md) **text_editor/behavior/navigation/v_scroll_speed** <div id="class_editorsettings_property_text_editor/behavior/navigation/v_scroll_speed"></div>

The speed of scrolling in lines per second when [`text_editor/behavior/navigation/smooth_scrolling`](#class_editorsettings_property_text_editor/behavior/navigation/smooth_scrolling) is `true`. Higher values make the script scroll by faster when using the mouse wheel.

 **Note:** You can hold down <i class="fa fa-gamepad"></i>`Alt` while using the mouse wheel to temporarily scroll 5 times faster.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorsettings_property_text_editor/completion/add_node_path_literals"></div>

[`bool`](class_bool.md) **text_editor/completion/add_node_path_literals** <div id="class_editorsettings_property_text_editor/completion/add_node_path_literals"></div>

If `true`, uses [`NodePath`](class_nodepath.md) instead of [`String`](class_string.md) when appropriate for code autocompletion or for drag and dropping object properties into the script editor.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorsettings_property_text_editor/completion/add_string_name_literals"></div>

[`bool`](class_bool.md) **text_editor/completion/add_string_name_literals** <div id="class_editorsettings_property_text_editor/completion/add_string_name_literals"></div>

If `true`, uses [`StringName`](class_stringname.md) instead of [`String`](class_string.md) when appropriate for code autocompletion.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorsettings_property_text_editor/completion/add_type_hints"></div>

[`bool`](class_bool.md) **text_editor/completion/add_type_hints** <div id="class_editorsettings_property_text_editor/completion/add_type_hints"></div>

If `true`, adds [*GDScript static typing*](../tutorials/scripting/gdscript/static_typing) hints such as `-> void` and `: int` when using code autocompletion or when creating onready variables by drag and dropping nodes into the script editor while pressing the <i class="fa fa-gamepad"></i>`Ctrl` key. If `true`, newly created scripts will also automatically have type hints added to their method parameters and return types.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorsettings_property_text_editor/completion/auto_brace_complete"></div>

[`bool`](class_bool.md) **text_editor/completion/auto_brace_complete** <div id="class_editorsettings_property_text_editor/completion/auto_brace_complete"></div>

If `true`, automatically completes braces when making use of code completion.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorsettings_property_text_editor/completion/code_complete_delay"></div>

[`float`](class_float.md) **text_editor/completion/code_complete_delay** <div id="class_editorsettings_property_text_editor/completion/code_complete_delay"></div>

The delay in seconds after which autocompletion suggestions should be displayed when the user stops typing.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorsettings_property_text_editor/completion/code_complete_enabled"></div>

[`bool`](class_bool.md) **text_editor/completion/code_complete_enabled** <div id="class_editorsettings_property_text_editor/completion/code_complete_enabled"></div>

If `true`, code completion will be triggered automatically after [`text_editor/completion/code_complete_delay`](#class_editorsettings_property_text_editor/completion/code_complete_delay). Even if `false`, code completion can be triggered manually with the `ui_text_completion_query` action (by default <i class="fa fa-gamepad"></i>`Ctrl + Space` or <i class="fa fa-gamepad"></i>`Cmd + Space` on macOS).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorsettings_property_text_editor/completion/colorize_suggestions"></div>

[`bool`](class_bool.md) **text_editor/completion/colorize_suggestions** <div id="class_editorsettings_property_text_editor/completion/colorize_suggestions"></div>

If `true` enables the coloring for some items in the autocompletion suggestions, like vector components.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorsettings_property_text_editor/completion/complete_file_paths"></div>

[`bool`](class_bool.md) **text_editor/completion/complete_file_paths** <div id="class_editorsettings_property_text_editor/completion/complete_file_paths"></div>

If `true`, provides autocompletion suggestions for file paths in methods such as `load()` and `preload()`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorsettings_property_text_editor/completion/idle_parse_delay"></div>

[`float`](class_float.md) **text_editor/completion/idle_parse_delay** <div id="class_editorsettings_property_text_editor/completion/idle_parse_delay"></div>

The delay in seconds after which the script editor should check for errors when the user stops typing.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorsettings_property_text_editor/completion/put_callhint_tooltip_below_current_line"></div>

[`bool`](class_bool.md) **text_editor/completion/put_callhint_tooltip_below_current_line** <div id="class_editorsettings_property_text_editor/completion/put_callhint_tooltip_below_current_line"></div>

If `true`, the code completion tooltip will appear below the current line unless there is no space on screen below the current line. If `false`, the code completion tooltip will appear above the current line.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorsettings_property_text_editor/completion/use_single_quotes"></div>

[`bool`](class_bool.md) **text_editor/completion/use_single_quotes** <div id="class_editorsettings_property_text_editor/completion/use_single_quotes"></div>

If `true`, performs string autocompletion with single quotes. If `false`, performs string autocompletion with double quotes (which matches the [*GDScript style guide*](../tutorials/scripting/gdscript/gdscript_styleguide)).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorsettings_property_text_editor/help/class_reference_examples"></div>

[`int`](class_int.md) **text_editor/help/class_reference_examples** <div id="class_editorsettings_property_text_editor/help/class_reference_examples"></div>

Controls which multi-line code blocks should be displayed in the editor help. This setting does not affect single-line code literals in the editor help.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorsettings_property_text_editor/help/help_font_size"></div>

[`int`](class_int.md) **text_editor/help/help_font_size** <div id="class_editorsettings_property_text_editor/help/help_font_size"></div>

The font size to use for the editor help (built-in class reference).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorsettings_property_text_editor/help/help_source_font_size"></div>

[`int`](class_int.md) **text_editor/help/help_source_font_size** <div id="class_editorsettings_property_text_editor/help/help_source_font_size"></div>

The font size to use for code samples in the editor help (built-in class reference).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorsettings_property_text_editor/help/help_title_font_size"></div>

[`int`](class_int.md) **text_editor/help/help_title_font_size** <div id="class_editorsettings_property_text_editor/help/help_title_font_size"></div>

The font size to use for headings in the editor help (built-in class reference).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorsettings_property_text_editor/help/show_help_index"></div>

[`bool`](class_bool.md) **text_editor/help/show_help_index** <div id="class_editorsettings_property_text_editor/help/show_help_index"></div>

If `true`, displays a table of contents at the left of the editor help (at the location where the members overview would appear when editing a script).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorsettings_property_text_editor/script_list/show_members_overview"></div>

[`bool`](class_bool.md) **text_editor/script_list/show_members_overview** <div id="class_editorsettings_property_text_editor/script_list/show_members_overview"></div>

If `true`, displays an overview of the current script's member variables and functions at the left of the script editor. See also [`text_editor/script_list/sort_members_outline_alphabetically`](#class_editorsettings_property_text_editor/script_list/sort_members_outline_alphabetically).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorsettings_property_text_editor/script_list/sort_members_outline_alphabetically"></div>

[`bool`](class_bool.md) **text_editor/script_list/sort_members_outline_alphabetically** <div id="class_editorsettings_property_text_editor/script_list/sort_members_outline_alphabetically"></div>

If `true`, sorts the members outline (located at the left of the script editor) using alphabetical order. If `false`, sorts the members outline depending on the order in which members are found in the script.

 **Note:** Only effective if [`text_editor/script_list/show_members_overview`](#class_editorsettings_property_text_editor/script_list/show_members_overview) is `true`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorsettings_property_text_editor/theme/color_theme"></div>

[`String`](class_string.md) **text_editor/theme/color_theme** <div id="class_editorsettings_property_text_editor/theme/color_theme"></div>

The syntax theme to use in the script editor.

You can save your own syntax theme from your current settings by using **File > Theme > Save As...** at the top of the script editor. The syntax theme will then be available locally in the list of color themes.

You can find additional syntax themes to install in the [*godot-syntax-themes*](https://github.com/godotengine/godot-syntax-themes) repository.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorsettings_property_text_editor/theme/highlighting/background_color"></div>

[`Color`](class_color.md) **text_editor/theme/highlighting/background_color** <div id="class_editorsettings_property_text_editor/theme/highlighting/background_color"></div>

The script editor's background color. If set to a translucent color, the editor theme's base color will be visible behind.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorsettings_property_text_editor/theme/highlighting/base_type_color"></div>

[`Color`](class_color.md) **text_editor/theme/highlighting/base_type_color** <div id="class_editorsettings_property_text_editor/theme/highlighting/base_type_color"></div>

The script editor's base type color (used for types like [`Vector2`](class_vector2.md), [`Vector3`](class_vector3.md), [`Color`](class_color.md), ...).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorsettings_property_text_editor/theme/highlighting/bookmark_color"></div>

[`Color`](class_color.md) **text_editor/theme/highlighting/bookmark_color** <div id="class_editorsettings_property_text_editor/theme/highlighting/bookmark_color"></div>

The script editor's bookmark icon color (displayed in the gutter).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorsettings_property_text_editor/theme/highlighting/brace_mismatch_color"></div>

[`Color`](class_color.md) **text_editor/theme/highlighting/brace_mismatch_color** <div id="class_editorsettings_property_text_editor/theme/highlighting/brace_mismatch_color"></div>

The script editor's brace mismatch color. Used when the caret is currently on a mismatched brace, parenthesis or bracket character.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorsettings_property_text_editor/theme/highlighting/breakpoint_color"></div>

[`Color`](class_color.md) **text_editor/theme/highlighting/breakpoint_color** <div id="class_editorsettings_property_text_editor/theme/highlighting/breakpoint_color"></div>

The script editor's breakpoint icon color (displayed in the gutter).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorsettings_property_text_editor/theme/highlighting/caret_background_color"></div>

[`Color`](class_color.md) **text_editor/theme/highlighting/caret_background_color** <div id="class_editorsettings_property_text_editor/theme/highlighting/caret_background_color"></div>

The script editor's caret background color.

 **Note:** This setting has no effect as it's currently unused.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorsettings_property_text_editor/theme/highlighting/caret_color"></div>

[`Color`](class_color.md) **text_editor/theme/highlighting/caret_color** <div id="class_editorsettings_property_text_editor/theme/highlighting/caret_color"></div>

The script editor's caret color.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorsettings_property_text_editor/theme/highlighting/code_folding_color"></div>

[`Color`](class_color.md) **text_editor/theme/highlighting/code_folding_color** <div id="class_editorsettings_property_text_editor/theme/highlighting/code_folding_color"></div>

The script editor's color for the code folding icon (displayed in the gutter).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorsettings_property_text_editor/theme/highlighting/comment_color"></div>

[`Color`](class_color.md) **text_editor/theme/highlighting/comment_color** <div id="class_editorsettings_property_text_editor/theme/highlighting/comment_color"></div>

The script editor's comment color.

 **Note:** In GDScript, unlike Python, multiline strings are not considered to be comments, and will use the string highlighting color instead.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorsettings_property_text_editor/theme/highlighting/completion_background_color"></div>

[`Color`](class_color.md) **text_editor/theme/highlighting/completion_background_color** <div id="class_editorsettings_property_text_editor/theme/highlighting/completion_background_color"></div>

The script editor's autocompletion box background color.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorsettings_property_text_editor/theme/highlighting/completion_existing_color"></div>

[`Color`](class_color.md) **text_editor/theme/highlighting/completion_existing_color** <div id="class_editorsettings_property_text_editor/theme/highlighting/completion_existing_color"></div>

The script editor's autocompletion box background color to highlight existing characters in the completion results. This should be a translucent color so that [`text_editor/theme/highlighting/completion_selected_color`](#class_editorsettings_property_text_editor/theme/highlighting/completion_selected_color) can be seen behind.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorsettings_property_text_editor/theme/highlighting/completion_font_color"></div>

[`Color`](class_color.md) **text_editor/theme/highlighting/completion_font_color** <div id="class_editorsettings_property_text_editor/theme/highlighting/completion_font_color"></div>

The script editor's autocompletion box text color.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorsettings_property_text_editor/theme/highlighting/completion_scroll_color"></div>

[`Color`](class_color.md) **text_editor/theme/highlighting/completion_scroll_color** <div id="class_editorsettings_property_text_editor/theme/highlighting/completion_scroll_color"></div>

The script editor's autocompletion box scroll bar color.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorsettings_property_text_editor/theme/highlighting/completion_scroll_hovered_color"></div>

[`Color`](class_color.md) **text_editor/theme/highlighting/completion_scroll_hovered_color** <div id="class_editorsettings_property_text_editor/theme/highlighting/completion_scroll_hovered_color"></div>

The script editor's autocompletion box scroll bar color when hovered or pressed with the mouse.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorsettings_property_text_editor/theme/highlighting/completion_selected_color"></div>

[`Color`](class_color.md) **text_editor/theme/highlighting/completion_selected_color** <div id="class_editorsettings_property_text_editor/theme/highlighting/completion_selected_color"></div>

The script editor's autocompletion box background color for the currently selected line.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorsettings_property_text_editor/theme/highlighting/control_flow_keyword_color"></div>

[`Color`](class_color.md) **text_editor/theme/highlighting/control_flow_keyword_color** <div id="class_editorsettings_property_text_editor/theme/highlighting/control_flow_keyword_color"></div>

The script editor's control flow keyword color (used for keywords like `if`, `for`, `return`, ...).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorsettings_property_text_editor/theme/highlighting/current_line_color"></div>

[`Color`](class_color.md) **text_editor/theme/highlighting/current_line_color** <div id="class_editorsettings_property_text_editor/theme/highlighting/current_line_color"></div>

The script editor's background color for the line the caret is currently on. This should be set to a translucent color so that it can display on top of other line color modifiers such as [`text_editor/theme/highlighting/mark_color`](#class_editorsettings_property_text_editor/theme/highlighting/mark_color).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorsettings_property_text_editor/theme/highlighting/doc_comment_color"></div>

[`Color`](class_color.md) **text_editor/theme/highlighting/doc_comment_color** <div id="class_editorsettings_property_text_editor/theme/highlighting/doc_comment_color"></div>

The script editor's documentation comment color. In GDScript, this is used for comments starting with `##`. In C#, this is used for comments starting with `///` or `/**`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorsettings_property_text_editor/theme/highlighting/engine_type_color"></div>

[`Color`](class_color.md) **text_editor/theme/highlighting/engine_type_color** <div id="class_editorsettings_property_text_editor/theme/highlighting/engine_type_color"></div>

The script editor's engine type color ([`Vector2`](class_vector2.md), [`Vector3`](class_vector3.md), [`Color`](class_color.md), ...).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorsettings_property_text_editor/theme/highlighting/executing_line_color"></div>

[`Color`](class_color.md) **text_editor/theme/highlighting/executing_line_color** <div id="class_editorsettings_property_text_editor/theme/highlighting/executing_line_color"></div>

The script editor's color for the debugger's executing line icon (displayed in the gutter).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorsettings_property_text_editor/theme/highlighting/folded_code_region_color"></div>

[`Color`](class_color.md) **text_editor/theme/highlighting/folded_code_region_color** <div id="class_editorsettings_property_text_editor/theme/highlighting/folded_code_region_color"></div>

The script editor's background line highlighting color for folded code region.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorsettings_property_text_editor/theme/highlighting/function_color"></div>

[`Color`](class_color.md) **text_editor/theme/highlighting/function_color** <div id="class_editorsettings_property_text_editor/theme/highlighting/function_color"></div>

The script editor's function call color.

 **Note:** When using the GDScript syntax highlighter, this is replaced by the function definition color configured in the syntax theme for function definitions (e.g. `func _ready():`).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorsettings_property_text_editor/theme/highlighting/keyword_color"></div>

[`Color`](class_color.md) **text_editor/theme/highlighting/keyword_color** <div id="class_editorsettings_property_text_editor/theme/highlighting/keyword_color"></div>

The script editor's non-control flow keyword color (used for keywords like `var`, `func`, `extends`, ...).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorsettings_property_text_editor/theme/highlighting/line_length_guideline_color"></div>

[`Color`](class_color.md) **text_editor/theme/highlighting/line_length_guideline_color** <div id="class_editorsettings_property_text_editor/theme/highlighting/line_length_guideline_color"></div>

The script editor's color for the line length guideline. The "hard" line length guideline will be drawn with this color, whereas the "soft" line length guideline will be drawn with half of its opacity.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorsettings_property_text_editor/theme/highlighting/line_number_color"></div>

[`Color`](class_color.md) **text_editor/theme/highlighting/line_number_color** <div id="class_editorsettings_property_text_editor/theme/highlighting/line_number_color"></div>

The script editor's color for line numbers. See also [`text_editor/theme/highlighting/safe_line_number_color`](#class_editorsettings_property_text_editor/theme/highlighting/safe_line_number_color).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorsettings_property_text_editor/theme/highlighting/mark_color"></div>

[`Color`](class_color.md) **text_editor/theme/highlighting/mark_color** <div id="class_editorsettings_property_text_editor/theme/highlighting/mark_color"></div>

The script editor's background color for lines with errors. This should be set to a translucent color so that it can display on top of other line color modifiers such as [`text_editor/theme/highlighting/current_line_color`](#class_editorsettings_property_text_editor/theme/highlighting/current_line_color).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorsettings_property_text_editor/theme/highlighting/member_variable_color"></div>

[`Color`](class_color.md) **text_editor/theme/highlighting/member_variable_color** <div id="class_editorsettings_property_text_editor/theme/highlighting/member_variable_color"></div>

The script editor's color for member variables on objects (e.g. `self.some_property`).

 **Note:** This color is not used for local variable declaration and access.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorsettings_property_text_editor/theme/highlighting/number_color"></div>

[`Color`](class_color.md) **text_editor/theme/highlighting/number_color** <div id="class_editorsettings_property_text_editor/theme/highlighting/number_color"></div>

The script editor's color for numbers (integer and floating-point).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorsettings_property_text_editor/theme/highlighting/safe_line_number_color"></div>

[`Color`](class_color.md) **text_editor/theme/highlighting/safe_line_number_color** <div id="class_editorsettings_property_text_editor/theme/highlighting/safe_line_number_color"></div>

The script editor's color for type-safe line numbers. See also [`text_editor/theme/highlighting/line_number_color`](#class_editorsettings_property_text_editor/theme/highlighting/line_number_color).

 **Note:** Only displayed if [`text_editor/appearance/gutters/highlight_type_safe_lines`](#class_editorsettings_property_text_editor/appearance/gutters/highlight_type_safe_lines) is `true`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorsettings_property_text_editor/theme/highlighting/search_result_border_color"></div>

[`Color`](class_color.md) **text_editor/theme/highlighting/search_result_border_color** <div id="class_editorsettings_property_text_editor/theme/highlighting/search_result_border_color"></div>

The script editor's color for the border of search results. This border helps bring further attention to the search result. Set this color's opacity to 0 to disable the border.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorsettings_property_text_editor/theme/highlighting/search_result_color"></div>

[`Color`](class_color.md) **text_editor/theme/highlighting/search_result_color** <div id="class_editorsettings_property_text_editor/theme/highlighting/search_result_color"></div>

The script editor's background color for search results.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorsettings_property_text_editor/theme/highlighting/selection_color"></div>

[`Color`](class_color.md) **text_editor/theme/highlighting/selection_color** <div id="class_editorsettings_property_text_editor/theme/highlighting/selection_color"></div>

The script editor's background color for the currently selected text.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorsettings_property_text_editor/theme/highlighting/string_color"></div>

[`Color`](class_color.md) **text_editor/theme/highlighting/string_color** <div id="class_editorsettings_property_text_editor/theme/highlighting/string_color"></div>

The script editor's color for strings (single-line and multi-line).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorsettings_property_text_editor/theme/highlighting/symbol_color"></div>

[`Color`](class_color.md) **text_editor/theme/highlighting/symbol_color** <div id="class_editorsettings_property_text_editor/theme/highlighting/symbol_color"></div>

The script editor's color for operators (`( ) [ ] { } + - * /`, ...).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorsettings_property_text_editor/theme/highlighting/text_color"></div>

[`Color`](class_color.md) **text_editor/theme/highlighting/text_color** <div id="class_editorsettings_property_text_editor/theme/highlighting/text_color"></div>

The script editor's color for text not highlighted by any syntax highlighting rule.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorsettings_property_text_editor/theme/highlighting/text_selected_color"></div>

[`Color`](class_color.md) **text_editor/theme/highlighting/text_selected_color** <div id="class_editorsettings_property_text_editor/theme/highlighting/text_selected_color"></div>

The script editor's background color for text. This should be set to a translucent color so that it can display on top of other line color modifiers such as [`text_editor/theme/highlighting/current_line_color`](#class_editorsettings_property_text_editor/theme/highlighting/current_line_color).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorsettings_property_text_editor/theme/highlighting/user_type_color"></div>

[`Color`](class_color.md) **text_editor/theme/highlighting/user_type_color** <div id="class_editorsettings_property_text_editor/theme/highlighting/user_type_color"></div>

The script editor's color for user-defined types (using `class_name`).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorsettings_property_text_editor/theme/highlighting/word_highlighted_color"></div>

[`Color`](class_color.md) **text_editor/theme/highlighting/word_highlighted_color** <div id="class_editorsettings_property_text_editor/theme/highlighting/word_highlighted_color"></div>

The script editor's color for words highlighted by selecting them. Only visible if [`text_editor/appearance/caret/highlight_all_occurrences`](#class_editorsettings_property_text_editor/appearance/caret/highlight_all_occurrences) is `true`.

<!-- rst-class:: classref-section-separator -->

---

## 方法说明

<div id="_class_editorsettings_method_add_property_info"></div>

`void` **add_property_info** ( info: [`Dictionary`](class_dictionary.md) )<div id="class_editorsettings_method_add_property_info"></div>

Adds a custom property info to a property. The dictionary must contain:

- `name`: [`String`](class_string.md) (the name of the property)

- `type`: [`int`](class_int.md) (see [Variant.Type](#enum_@globalscope_variant.type))

- optionally `hint`: [`int`](class_int.md) (see [PropertyHint](#enum_@globalscope_propertyhint)) and `hint_string`: [`String`](class_string.md) 

 **Example:** 



```gdscript

    var settings = EditorInterface.get_editor_settings()
    settings.set("category/property_name", 0)
    
    var property_info = {
        "name": "category/property_name",
        "type": TYPE_INT,
        "hint": PROPERTY_HINT_ENUM,
        "hint_string": "one,two,three"
    }
    
    settings.add_property_info(property_info)
```

```csharp

    var settings = GetEditorInterface().GetEditorSettings();
    settings.Set("category/property_name", 0);
    
    var propertyInfo = new Godot.Collections.Dictionary
    {
        {"name", "category/propertyName"},
        {"type", Variant.Type.Int},
        {"hint", PropertyHint.Enum},
        {"hint_string", "one,two,three"}
    };
    
    settings.AddPropertyInfo(propertyInfo);
```







<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorsettings_method_check_changed_settings_in_group"></div>

[`bool`](class_bool.md) **check_changed_settings_in_group** ( setting_prefix: [`String`](class_string.md) ) const[^const]<div id="class_editorsettings_method_check_changed_settings_in_group"></div>

Checks if any settings with the prefix `setting_prefix` exist in the set of changed settings. See also [`get_changed_settings`](#class_editorsettings_method_get_changed_settings).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorsettings_method_erase"></div>

`void` **erase** ( property: [`String`](class_string.md) )<div id="class_editorsettings_method_erase"></div>

Erases the setting whose name is specified by `property`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorsettings_method_get_changed_settings"></div>

[`PackedStringArray`](class_packedstringarray.md) **get_changed_settings** ( ) const[^const]<div id="class_editorsettings_method_get_changed_settings"></div>

Gets an array of the settings which have been changed since the last save. Note that internally `changed_settings` is cleared after a successful save, so generally the most appropriate place to use this method is when processing [`NOTIFICATION_EDITOR_SETTINGS_CHANGED`](#class_editorsettings_constant_notification_editor_settings_changed).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorsettings_method_get_favorites"></div>

[`PackedStringArray`](class_packedstringarray.md) **get_favorites** ( ) const[^const]<div id="class_editorsettings_method_get_favorites"></div>

Returns the list of favorite files and directories for this project.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorsettings_method_get_project_metadata"></div>

[`Variant`](class_variant.md) **get_project_metadata** ( section: [`String`](class_string.md), key: [`String`](class_string.md), default: [`Variant`](class_variant.md) = null ) const[^const]<div id="class_editorsettings_method_get_project_metadata"></div>

Returns project-specific metadata for the `section` and `key` specified. If the metadata doesn't exist, `default` will be returned instead. See also [`set_project_metadata`](#class_editorsettings_method_set_project_metadata).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorsettings_method_get_recent_dirs"></div>

[`PackedStringArray`](class_packedstringarray.md) **get_recent_dirs** ( ) const[^const]<div id="class_editorsettings_method_get_recent_dirs"></div>

Returns the list of recently visited folders in the file dialog for this project.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorsettings_method_get_setting"></div>

[`Variant`](class_variant.md) **get_setting** ( name: [`String`](class_string.md) ) const[^const]<div id="class_editorsettings_method_get_setting"></div>

Returns the value of the setting specified by `name`. This is equivalent to using [`Object.get`](#class_object_method_get) on the EditorSettings instance.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorsettings_method_has_setting"></div>

[`bool`](class_bool.md) **has_setting** ( name: [`String`](class_string.md) ) const[^const]<div id="class_editorsettings_method_has_setting"></div>

Returns `true` if the setting specified by `name` exists, `false` otherwise.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorsettings_method_mark_setting_changed"></div>

`void` **mark_setting_changed** ( setting: [`String`](class_string.md) )<div id="class_editorsettings_method_mark_setting_changed"></div>

Marks the passed editor setting as being changed, see [`get_changed_settings`](#class_editorsettings_method_get_changed_settings). Only settings which exist (see [`has_setting`](#class_editorsettings_method_has_setting)) will be accepted.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorsettings_method_set_builtin_action_override"></div>

`void` **set_builtin_action_override** ( name: [`String`](class_string.md), actions_list: [Array](class_array.md) [`InputEvent`](class_inputevent.md) )<div id="class_editorsettings_method_set_builtin_action_override"></div>

Overrides the built-in editor action `name` with the input actions defined in `actions_list`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorsettings_method_set_favorites"></div>

`void` **set_favorites** ( dirs: [`PackedStringArray`](class_packedstringarray.md) )<div id="class_editorsettings_method_set_favorites"></div>

Sets the list of favorite files and directories for this project.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorsettings_method_set_initial_value"></div>

`void` **set_initial_value** ( name: [`StringName`](class_stringname.md), value: [`Variant`](class_variant.md), update_current: [`bool`](class_bool.md) )<div id="class_editorsettings_method_set_initial_value"></div>

Sets the initial value of the setting specified by `name` to `value`. This is used to provide a value for the Revert button in the Editor Settings. If `update_current` is true, the current value of the setting will be set to `value` as well.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorsettings_method_set_project_metadata"></div>

`void` **set_project_metadata** ( section: [`String`](class_string.md), key: [`String`](class_string.md), data: [`Variant`](class_variant.md) )<div id="class_editorsettings_method_set_project_metadata"></div>

Sets project-specific metadata with the `section`, `key` and `data` specified. This metadata is stored outside the project folder and therefore won't be checked into version control. See also [`get_project_metadata`](#class_editorsettings_method_get_project_metadata).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorsettings_method_set_recent_dirs"></div>

`void` **set_recent_dirs** ( dirs: [`PackedStringArray`](class_packedstringarray.md) )<div id="class_editorsettings_method_set_recent_dirs"></div>

Sets the list of recently visited folders in the file dialog for this project.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorsettings_method_set_setting"></div>

`void` **set_setting** ( name: [`String`](class_string.md), value: [`Variant`](class_variant.md) )<div id="class_editorsettings_method_set_setting"></div>

Sets the `value` of the setting specified by `name`. This is equivalent to using [`Object.set`](#class_object_method_set) on the EditorSettings instance.

[^virtual]: 本方法通常需要用户覆盖才能生效。
[^const]: 本方法无副作用，不会修改该实例的任何成员变量。
[^vararg]: 本方法除了能接受在此处描述的参数外，还能够继续接受任意数量的参数。
[^constructor]: 本方法用于构造某个类型。
[^static]: 调用本方法无需实例，可直接使用类名进行调用。
[^operator]: 本方法描述的是使用本类型作为左操作数的有效运算符。
[^bitfield]: 这个值是由下列位标志构成位掩码的整数。
[^void]: 无返回值。
