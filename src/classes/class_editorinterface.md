<!-- ⚠ 请勿编辑本文件 ⚠ -->
<!-- 本文档使用脚本从 WeDot 引擎源码仓库生成。 -->
<!-- 生成脚本：https://github.com/WeDot-Engine/WeDot/tree/4.3/doc/tools/make_md.py； -->
<!-- 原文件：https://github.com/WeDot-Engine/WeDot/tree/4.3/doc/classes/EditorInterface.xml。 -->

<div id="_class_editorinterface"></div>

# EditorInterface

**继承：** [`Object`](class_object.md)

Godot editor's interface.

## 描述

**EditorInterface** gives you control over Godot editor's window. It allows customizing the window, saving and (re-)loading scenes, rendering mesh previews, inspecting and editing resources and objects, and provides access to [`EditorSettings`](class_editorsettings.md), [`EditorFileSystem`](class_editorfilesystem.md), [`EditorResourcePreview`](class_editorresourcepreview.md), [`ScriptEditor`](class_scripteditor.md), the editor viewport, and information about scenes.

 **Note:** This class shouldn't be instantiated directly. Instead, access the singleton directly by its name.



```gdscript

    var editor_settings = EditorInterface.get_editor_settings()
```

```csharp

    // In C# you can access it via the static Singleton property.
    EditorSettings settings = EditorInterface.Singleton.GetEditorSettings();
```







## 属性

| [`bool`](class_bool.md) | [`distraction_free_mode`](#class_editorinterface_property_distraction_free_mode) |
| [`bool`](class_bool.md) | [`movie_maker_enabled`](#class_editorinterface_property_movie_maker_enabled)     |

## 方法

| `void`                                                    | [`edit_node`](#class_editorinterface_method_edit_node) ( node: [`Node`](class_node.md) )                                                                                                                                                                 |
| `void`                                                    | [`edit_resource`](#class_editorinterface_method_edit_resource) ( resource: [`Resource`](class_resource.md) )                                                                                                                                             |
| `void`                                                    | [`edit_script`](#class_editorinterface_method_edit_script) ( script: [`Script`](class_script.md), line: [`int`](class_int.md) = -1, column: [`int`](class_int.md) = 0, grab_focus: [`bool`](class_bool.md) = true )                                      |
| [`Control`](class_control.md)                             | [`get_base_control`](#class_editorinterface_method_get_base_control) ( ) const[^const]                                                                                                                                                                   |
| [`EditorCommandPalette`](class_editorcommandpalette.md)   | [`get_command_palette`](#class_editorinterface_method_get_command_palette) ( ) const[^const]                                                                                                                                                             |
| [`String`](class_string.md)                               | [`get_current_directory`](#class_editorinterface_method_get_current_directory) ( ) const[^const]                                                                                                                                                         |
| [`String`](class_string.md)                               | [`get_current_feature_profile`](#class_editorinterface_method_get_current_feature_profile) ( ) const[^const]                                                                                                                                             |
| [`String`](class_string.md)                               | [`get_current_path`](#class_editorinterface_method_get_current_path) ( ) const[^const]                                                                                                                                                                   |
| [`Node`](class_node.md)                                   | [`get_edited_scene_root`](#class_editorinterface_method_get_edited_scene_root) ( ) const[^const]                                                                                                                                                         |
| [`VBoxContainer`](class_vboxcontainer.md)                 | [`get_editor_main_screen`](#class_editorinterface_method_get_editor_main_screen) ( ) const[^const]                                                                                                                                                       |
| [`EditorPaths`](class_editorpaths.md)                     | [`get_editor_paths`](#class_editorinterface_method_get_editor_paths) ( ) const[^const]                                                                                                                                                                   |
| [`float`](class_float.md)                                 | [`get_editor_scale`](#class_editorinterface_method_get_editor_scale) ( ) const[^const]                                                                                                                                                                   |
| [`EditorSettings`](class_editorsettings.md)               | [`get_editor_settings`](#class_editorinterface_method_get_editor_settings) ( ) const[^const]                                                                                                                                                             |
| [`Theme`](class_theme.md)                                 | [`get_editor_theme`](#class_editorinterface_method_get_editor_theme) ( ) const[^const]                                                                                                                                                                   |
| [`SubViewport`](class_subviewport.md)                     | [`get_editor_viewport_2d`](#class_editorinterface_method_get_editor_viewport_2d) ( ) const[^const]                                                                                                                                                       |
| [`SubViewport`](class_subviewport.md)                     | [`get_editor_viewport_3d`](#class_editorinterface_method_get_editor_viewport_3d) ( idx: [`int`](class_int.md) = 0 ) const[^const]                                                                                                                        |
| [`FileSystemDock`](class_filesystemdock.md)               | [`get_file_system_dock`](#class_editorinterface_method_get_file_system_dock) ( ) const[^const]                                                                                                                                                           |
| [`EditorInspector`](class_editorinspector.md)             | [`get_inspector`](#class_editorinterface_method_get_inspector) ( ) const[^const]                                                                                                                                                                         |
| [`PackedStringArray`](class_packedstringarray.md)         | [`get_open_scenes`](#class_editorinterface_method_get_open_scenes) ( ) const[^const]                                                                                                                                                                     |
| [`String`](class_string.md)                               | [`get_playing_scene`](#class_editorinterface_method_get_playing_scene) ( ) const[^const]                                                                                                                                                                 |
| [`EditorFileSystem`](class_editorfilesystem.md)           | [`get_resource_filesystem`](#class_editorinterface_method_get_resource_filesystem) ( ) const[^const]                                                                                                                                                     |
| [`EditorResourcePreview`](class_editorresourcepreview.md) | [`get_resource_previewer`](#class_editorinterface_method_get_resource_previewer) ( ) const[^const]                                                                                                                                                       |
| [`ScriptEditor`](class_scripteditor.md)                   | [`get_script_editor`](#class_editorinterface_method_get_script_editor) ( ) const[^const]                                                                                                                                                                 |
| [`PackedStringArray`](class_packedstringarray.md)         | [`get_selected_paths`](#class_editorinterface_method_get_selected_paths) ( ) const[^const]                                                                                                                                                               |
| [`EditorSelection`](class_editorselection.md)             | [`get_selection`](#class_editorinterface_method_get_selection) ( ) const[^const]                                                                                                                                                                         |
| `void`                                                    | [`inspect_object`](#class_editorinterface_method_inspect_object) ( object: [`Object`](class_object.md), for_property: [`String`](class_string.md) = "", inspector_only: [`bool`](class_bool.md) = false )                                                |
| [`bool`](class_bool.md)                                   | [`is_multi_window_enabled`](#class_editorinterface_method_is_multi_window_enabled) ( ) const[^const]                                                                                                                                                     |
| [`bool`](class_bool.md)                                   | [`is_playing_scene`](#class_editorinterface_method_is_playing_scene) ( ) const[^const]                                                                                                                                                                   |
| [`bool`](class_bool.md)                                   | [`is_plugin_enabled`](#class_editorinterface_method_is_plugin_enabled) ( plugin: [`String`](class_string.md) ) const[^const]                                                                                                                             |
| [Array](class_array.md) [`Texture2D`](class_texture2d.md) | [`make_mesh_previews`](#class_editorinterface_method_make_mesh_previews) ( meshes: [Array](class_array.md) [`Mesh`](class_mesh.md), preview_size: [`int`](class_int.md) )                                                                                |
| `void`                                                    | [`mark_scene_as_unsaved`](#class_editorinterface_method_mark_scene_as_unsaved) ( )                                                                                                                                                                       |
| `void`                                                    | [`open_scene_from_path`](#class_editorinterface_method_open_scene_from_path) ( scene_filepath: [`String`](class_string.md) )                                                                                                                             |
| `void`                                                    | [`play_current_scene`](#class_editorinterface_method_play_current_scene) ( )                                                                                                                                                                             |
| `void`                                                    | [`play_custom_scene`](#class_editorinterface_method_play_custom_scene) ( scene_filepath: [`String`](class_string.md) )                                                                                                                                   |
| `void`                                                    | [`play_main_scene`](#class_editorinterface_method_play_main_scene) ( )                                                                                                                                                                                   |
| `void`                                                    | [`popup_dialog`](#class_editorinterface_method_popup_dialog) ( dialog: [`Window`](class_window.md), rect: [`Rect2i`](class_rect2i.md) = Rect2i(0, 0, 0, 0) )                                                                                             |
| `void`                                                    | [`popup_dialog_centered`](#class_editorinterface_method_popup_dialog_centered) ( dialog: [`Window`](class_window.md), minsize: [`Vector2i`](class_vector2i.md) = Vector2i(0, 0) )                                                                        |
| `void`                                                    | [`popup_dialog_centered_clamped`](#class_editorinterface_method_popup_dialog_centered_clamped) ( dialog: [`Window`](class_window.md), minsize: [`Vector2i`](class_vector2i.md) = Vector2i(0, 0), fallback_ratio: [`float`](class_float.md) = 0.75 )      |
| `void`                                                    | [`popup_dialog_centered_ratio`](#class_editorinterface_method_popup_dialog_centered_ratio) ( dialog: [`Window`](class_window.md), ratio: [`float`](class_float.md) = 0.8 )                                                                               |
| `void`                                                    | [`popup_node_selector`](#class_editorinterface_method_popup_node_selector) ( callback: [`Callable`](class_callable.md), valid_types: [Array](class_array.md) [`StringName`](class_stringname.md) = [] )                                                  |
| `void`                                                    | [`popup_property_selector`](#class_editorinterface_method_popup_property_selector) ( object: [`Object`](class_object.md), callback: [`Callable`](class_callable.md), type_filter: [`PackedInt32Array`](class_packedint32array.md) = PackedInt32Array() ) |
| `void`                                                    | [`reload_scene_from_path`](#class_editorinterface_method_reload_scene_from_path) ( scene_filepath: [`String`](class_string.md) )                                                                                                                         |
| `void`                                                    | [`restart_editor`](#class_editorinterface_method_restart_editor) ( save: [`bool`](class_bool.md) = true )                                                                                                                                                |
| `void`                                                    | [`save_all_scenes`](#class_editorinterface_method_save_all_scenes) ( )                                                                                                                                                                                   |
| [Error](#enum_@globalscope_error)                         | [`save_scene`](#class_editorinterface_method_save_scene) ( )                                                                                                                                                                                             |
| `void`                                                    | [`save_scene_as`](#class_editorinterface_method_save_scene_as) ( path: [`String`](class_string.md), with_preview: [`bool`](class_bool.md) = true )                                                                                                       |
| `void`                                                    | [`select_file`](#class_editorinterface_method_select_file) ( file: [`String`](class_string.md) )                                                                                                                                                         |
| `void`                                                    | [`set_current_feature_profile`](#class_editorinterface_method_set_current_feature_profile) ( profile_name: [`String`](class_string.md) )                                                                                                                 |
| `void`                                                    | [`set_main_screen_editor`](#class_editorinterface_method_set_main_screen_editor) ( name: [`String`](class_string.md) )                                                                                                                                   |
| `void`                                                    | [`set_plugin_enabled`](#class_editorinterface_method_set_plugin_enabled) ( plugin: [`String`](class_string.md), enabled: [`bool`](class_bool.md) )                                                                                                       |
| `void`                                                    | [`stop_playing_scene`](#class_editorinterface_method_stop_playing_scene) ( )                                                                                                                                                                             |

<!-- rst-class:: classref-section-separator -->

---

## 属性说明

<div id="_class_editorinterface_property_distraction_free_mode"></div>

[`bool`](class_bool.md) **distraction_free_mode** <div id="class_editorinterface_property_distraction_free_mode"></div>

- `void` **set_distraction_free_mode** ( value: [`bool`](class_bool.md) )
- [`bool`](class_bool.md) **is_distraction_free_mode_enabled** ( )

If `true`, enables distraction-free mode which hides side docks to increase the space available for the main view.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorinterface_property_movie_maker_enabled"></div>

[`bool`](class_bool.md) **movie_maker_enabled** <div id="class_editorinterface_property_movie_maker_enabled"></div>

- `void` **set_movie_maker_enabled** ( value: [`bool`](class_bool.md) )
- [`bool`](class_bool.md) **is_movie_maker_enabled** ( )

If `true`, the Movie Maker mode is enabled in the editor. See [`MovieWriter`](class_moviewriter.md) for more information.

<!-- rst-class:: classref-section-separator -->

---

## 方法说明

<div id="_class_editorinterface_method_edit_node"></div>

`void` **edit_node** ( node: [`Node`](class_node.md) )<div id="class_editorinterface_method_edit_node"></div>

Edits the given [`Node`](class_node.md). The node will be also selected if it's inside the scene tree.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorinterface_method_edit_resource"></div>

`void` **edit_resource** ( resource: [`Resource`](class_resource.md) )<div id="class_editorinterface_method_edit_resource"></div>

Edits the given [`Resource`](class_resource.md). If the resource is a [`Script`](class_script.md) you can also edit it with [`edit_script`](#class_editorinterface_method_edit_script) to specify the line and column position.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorinterface_method_edit_script"></div>

`void` **edit_script** ( script: [`Script`](class_script.md), line: [`int`](class_int.md) = -1, column: [`int`](class_int.md) = 0, grab_focus: [`bool`](class_bool.md) = true )<div id="class_editorinterface_method_edit_script"></div>

Edits the given [`Script`](class_script.md). The line and column on which to open the script can also be specified. The script will be open with the user-configured editor for the script's language which may be an external editor.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorinterface_method_get_base_control"></div>

[`Control`](class_control.md) **get_base_control** ( ) const[^const]<div id="class_editorinterface_method_get_base_control"></div>

Returns the main container of Godot editor's window. For example, you can use it to retrieve the size of the container and place your controls accordingly.

 **Warning:** Removing and freeing this node will render the editor useless and may cause a crash.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorinterface_method_get_command_palette"></div>

[`EditorCommandPalette`](class_editorcommandpalette.md) **get_command_palette** ( ) const[^const]<div id="class_editorinterface_method_get_command_palette"></div>

Returns the editor's [`EditorCommandPalette`](class_editorcommandpalette.md) instance.

 **Warning:** Removing and freeing this node will render a part of the editor useless and may cause a crash.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorinterface_method_get_current_directory"></div>

[`String`](class_string.md) **get_current_directory** ( ) const[^const]<div id="class_editorinterface_method_get_current_directory"></div>

Returns the current directory being viewed in the [`FileSystemDock`](class_filesystemdock.md). If a file is selected, its base directory will be returned using [`String.get_base_dir`](#class_string_method_get_base_dir) instead.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorinterface_method_get_current_feature_profile"></div>

[`String`](class_string.md) **get_current_feature_profile** ( ) const[^const]<div id="class_editorinterface_method_get_current_feature_profile"></div>

Returns the name of the currently activated feature profile. If the default profile is currently active, an empty string is returned instead.

In order to get a reference to the [`EditorFeatureProfile`](class_editorfeatureprofile.md), you must load the feature profile using [`EditorFeatureProfile.load_from_file`](#class_editorfeatureprofile_method_load_from_file).

 **Note:** Feature profiles created via the user interface are loaded from the `feature_profiles` directory, as a file with the `.profile` extension. The editor configuration folder can be found by using [`EditorPaths.get_config_dir`](#class_editorpaths_method_get_config_dir).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorinterface_method_get_current_path"></div>

[`String`](class_string.md) **get_current_path** ( ) const[^const]<div id="class_editorinterface_method_get_current_path"></div>

Returns the current path being viewed in the [`FileSystemDock`](class_filesystemdock.md).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorinterface_method_get_edited_scene_root"></div>

[`Node`](class_node.md) **get_edited_scene_root** ( ) const[^const]<div id="class_editorinterface_method_get_edited_scene_root"></div>

Returns the edited (current) scene's root [`Node`](class_node.md).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorinterface_method_get_editor_main_screen"></div>

[`VBoxContainer`](class_vboxcontainer.md) **get_editor_main_screen** ( ) const[^const]<div id="class_editorinterface_method_get_editor_main_screen"></div>

Returns the editor control responsible for main screen plugins and tools. Use it with plugins that implement [`EditorPlugin._has_main_screen`](#class_editorplugin_private_method__has_main_screen).

 **Note:** This node is a [`VBoxContainer`](class_vboxcontainer.md), which means that if you add a [`Control`](class_control.md) child to it, you need to set the child's [`Control.size_flags_vertical`](#class_control_property_size_flags_vertical) to [`Control.SIZE_EXPAND_FILL`](#class_control_constant_size_expand_fill) to make it use the full available space.

 **Warning:** Removing and freeing this node will render a part of the editor useless and may cause a crash.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorinterface_method_get_editor_paths"></div>

[`EditorPaths`](class_editorpaths.md) **get_editor_paths** ( ) const[^const]<div id="class_editorinterface_method_get_editor_paths"></div>

Returns the [`EditorPaths`](class_editorpaths.md) singleton.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorinterface_method_get_editor_scale"></div>

[`float`](class_float.md) **get_editor_scale** ( ) const[^const]<div id="class_editorinterface_method_get_editor_scale"></div>

Returns the actual scale of the editor UI (`1.0` being 100% scale). This can be used to adjust position and dimensions of the UI added by plugins.

 **Note:** This value is set via the `interface/editor/display_scale` and `interface/editor/custom_display_scale` editor settings. Editor must be restarted for changes to be properly applied.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorinterface_method_get_editor_settings"></div>

[`EditorSettings`](class_editorsettings.md) **get_editor_settings** ( ) const[^const]<div id="class_editorinterface_method_get_editor_settings"></div>

Returns the editor's [`EditorSettings`](class_editorsettings.md) instance.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorinterface_method_get_editor_theme"></div>

[`Theme`](class_theme.md) **get_editor_theme** ( ) const[^const]<div id="class_editorinterface_method_get_editor_theme"></div>

Returns the editor's [`Theme`](class_theme.md).

 **Note:** When creating custom editor UI, prefer accessing theme items directly from your GUI nodes using the `get_theme_*` methods.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorinterface_method_get_editor_viewport_2d"></div>

[`SubViewport`](class_subviewport.md) **get_editor_viewport_2d** ( ) const[^const]<div id="class_editorinterface_method_get_editor_viewport_2d"></div>

Returns the 2D editor [`SubViewport`](class_subviewport.md). It does not have a camera. Instead, the view transforms are done directly and can be accessed with [`Viewport.global_canvas_transform`](#class_viewport_property_global_canvas_transform).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorinterface_method_get_editor_viewport_3d"></div>

[`SubViewport`](class_subviewport.md) **get_editor_viewport_3d** ( idx: [`int`](class_int.md) = 0 ) const[^const]<div id="class_editorinterface_method_get_editor_viewport_3d"></div>

Returns the specified 3D editor [`SubViewport`](class_subviewport.md), from `0` to `3`. The viewport can be used to access the active editor cameras with [`Viewport.get_camera_3d`](#class_viewport_method_get_camera_3d).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorinterface_method_get_file_system_dock"></div>

[`FileSystemDock`](class_filesystemdock.md) **get_file_system_dock** ( ) const[^const]<div id="class_editorinterface_method_get_file_system_dock"></div>

Returns the editor's [`FileSystemDock`](class_filesystemdock.md) instance.

 **Warning:** Removing and freeing this node will render a part of the editor useless and may cause a crash.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorinterface_method_get_inspector"></div>

[`EditorInspector`](class_editorinspector.md) **get_inspector** ( ) const[^const]<div id="class_editorinterface_method_get_inspector"></div>

Returns the editor's [`EditorInspector`](class_editorinspector.md) instance.

 **Warning:** Removing and freeing this node will render a part of the editor useless and may cause a crash.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorinterface_method_get_open_scenes"></div>

[`PackedStringArray`](class_packedstringarray.md) **get_open_scenes** ( ) const[^const]<div id="class_editorinterface_method_get_open_scenes"></div>

Returns an [`Array`](class_array.md) with the file paths of the currently opened scenes.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorinterface_method_get_playing_scene"></div>

[`String`](class_string.md) **get_playing_scene** ( ) const[^const]<div id="class_editorinterface_method_get_playing_scene"></div>

Returns the name of the scene that is being played. If no scene is currently being played, returns an empty string.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorinterface_method_get_resource_filesystem"></div>

[`EditorFileSystem`](class_editorfilesystem.md) **get_resource_filesystem** ( ) const[^const]<div id="class_editorinterface_method_get_resource_filesystem"></div>

Returns the editor's [`EditorFileSystem`](class_editorfilesystem.md) instance.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorinterface_method_get_resource_previewer"></div>

[`EditorResourcePreview`](class_editorresourcepreview.md) **get_resource_previewer** ( ) const[^const]<div id="class_editorinterface_method_get_resource_previewer"></div>

Returns the editor's [`EditorResourcePreview`](class_editorresourcepreview.md) instance.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorinterface_method_get_script_editor"></div>

[`ScriptEditor`](class_scripteditor.md) **get_script_editor** ( ) const[^const]<div id="class_editorinterface_method_get_script_editor"></div>

Returns the editor's [`ScriptEditor`](class_scripteditor.md) instance.

 **Warning:** Removing and freeing this node will render a part of the editor useless and may cause a crash.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorinterface_method_get_selected_paths"></div>

[`PackedStringArray`](class_packedstringarray.md) **get_selected_paths** ( ) const[^const]<div id="class_editorinterface_method_get_selected_paths"></div>

Returns an array containing the paths of the currently selected files (and directories) in the [`FileSystemDock`](class_filesystemdock.md).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorinterface_method_get_selection"></div>

[`EditorSelection`](class_editorselection.md) **get_selection** ( ) const[^const]<div id="class_editorinterface_method_get_selection"></div>

Returns the editor's [`EditorSelection`](class_editorselection.md) instance.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorinterface_method_inspect_object"></div>

`void` **inspect_object** ( object: [`Object`](class_object.md), for_property: [`String`](class_string.md) = "", inspector_only: [`bool`](class_bool.md) = false )<div id="class_editorinterface_method_inspect_object"></div>

Shows the given property on the given `object` in the editor's Inspector dock. If `inspector_only` is `true`, plugins will not attempt to edit `object`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorinterface_method_is_multi_window_enabled"></div>

[`bool`](class_bool.md) **is_multi_window_enabled** ( ) const[^const]<div id="class_editorinterface_method_is_multi_window_enabled"></div>

Returns `true` if multiple window support is enabled in the editor. Multiple window support is enabled if *all* of these statements are true:

- [`EditorSettings.interface/multi_window/enable`](#class_editorsettings_property_interface/multi_window/enable) is `true`.

- [`EditorSettings.interface/editor/single_window_mode`](#class_editorsettings_property_interface/editor/single_window_mode) is `false`.

- [`Viewport.gui_embed_subwindows`](#class_viewport_property_gui_embed_subwindows) is `false`. This is forced to `true` on platforms that don't support multiple windows such as Web, or when the `--single-window` [*command line argument*](../tutorials/editor/command_line_tutorial) is used.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorinterface_method_is_playing_scene"></div>

[`bool`](class_bool.md) **is_playing_scene** ( ) const[^const]<div id="class_editorinterface_method_is_playing_scene"></div>

Returns `true` if a scene is currently being played, `false` otherwise. Paused scenes are considered as being played.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorinterface_method_is_plugin_enabled"></div>

[`bool`](class_bool.md) **is_plugin_enabled** ( plugin: [`String`](class_string.md) ) const[^const]<div id="class_editorinterface_method_is_plugin_enabled"></div>

Returns `true` if the specified `plugin` is enabled. The plugin name is the same as its directory name.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorinterface_method_make_mesh_previews"></div>

[Array](class_array.md) [`Texture2D`](class_texture2d.md) **make_mesh_previews** ( meshes: [Array](class_array.md) [`Mesh`](class_mesh.md), preview_size: [`int`](class_int.md) )<div id="class_editorinterface_method_make_mesh_previews"></div>

Returns mesh previews rendered at the given size as an [`Array`](class_array.md) of [`Texture2D`](class_texture2d.md) s.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorinterface_method_mark_scene_as_unsaved"></div>

`void` **mark_scene_as_unsaved** ( )<div id="class_editorinterface_method_mark_scene_as_unsaved"></div>

Marks the current scene tab as unsaved.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorinterface_method_open_scene_from_path"></div>

`void` **open_scene_from_path** ( scene_filepath: [`String`](class_string.md) )<div id="class_editorinterface_method_open_scene_from_path"></div>

Opens the scene at the given path.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorinterface_method_play_current_scene"></div>

`void` **play_current_scene** ( )<div id="class_editorinterface_method_play_current_scene"></div>

Plays the currently active scene.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorinterface_method_play_custom_scene"></div>

`void` **play_custom_scene** ( scene_filepath: [`String`](class_string.md) )<div id="class_editorinterface_method_play_custom_scene"></div>

Plays the scene specified by its filepath.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorinterface_method_play_main_scene"></div>

`void` **play_main_scene** ( )<div id="class_editorinterface_method_play_main_scene"></div>

Plays the main scene.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorinterface_method_popup_dialog"></div>

`void` **popup_dialog** ( dialog: [`Window`](class_window.md), rect: [`Rect2i`](class_rect2i.md) = Rect2i(0, 0, 0, 0) )<div id="class_editorinterface_method_popup_dialog"></div>

Pops up the `dialog` in the editor UI with [`Window.popup_exclusive`](#class_window_method_popup_exclusive). The dialog must have no current parent, otherwise the method fails.

See also [`Window.set_unparent_when_invisible`](#class_window_method_set_unparent_when_invisible).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorinterface_method_popup_dialog_centered"></div>

`void` **popup_dialog_centered** ( dialog: [`Window`](class_window.md), minsize: [`Vector2i`](class_vector2i.md) = Vector2i(0, 0) )<div id="class_editorinterface_method_popup_dialog_centered"></div>

Pops up the `dialog` in the editor UI with [`Window.popup_exclusive_centered`](#class_window_method_popup_exclusive_centered). The dialog must have no current parent, otherwise the method fails.

See also [`Window.set_unparent_when_invisible`](#class_window_method_set_unparent_when_invisible).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorinterface_method_popup_dialog_centered_clamped"></div>

`void` **popup_dialog_centered_clamped** ( dialog: [`Window`](class_window.md), minsize: [`Vector2i`](class_vector2i.md) = Vector2i(0, 0), fallback_ratio: [`float`](class_float.md) = 0.75 )<div id="class_editorinterface_method_popup_dialog_centered_clamped"></div>

Pops up the `dialog` in the editor UI with [`Window.popup_exclusive_centered_clamped`](#class_window_method_popup_exclusive_centered_clamped). The dialog must have no current parent, otherwise the method fails.

See also [`Window.set_unparent_when_invisible`](#class_window_method_set_unparent_when_invisible).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorinterface_method_popup_dialog_centered_ratio"></div>

`void` **popup_dialog_centered_ratio** ( dialog: [`Window`](class_window.md), ratio: [`float`](class_float.md) = 0.8 )<div id="class_editorinterface_method_popup_dialog_centered_ratio"></div>

Pops up the `dialog` in the editor UI with [`Window.popup_exclusive_centered_ratio`](#class_window_method_popup_exclusive_centered_ratio). The dialog must have no current parent, otherwise the method fails.

See also [`Window.set_unparent_when_invisible`](#class_window_method_set_unparent_when_invisible).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorinterface_method_popup_node_selector"></div>

`void` **popup_node_selector** ( callback: [`Callable`](class_callable.md), valid_types: [Array](class_array.md) [`StringName`](class_stringname.md) = [] )<div id="class_editorinterface_method_popup_node_selector"></div>

Pops up an editor dialog for selecting a [`Node`](class_node.md) from the edited scene. The `callback` must take a single argument of type [`NodePath`](class_nodepath.md). It is called on the selected [`NodePath`](class_nodepath.md) or the empty path `^""` if the dialog is canceled. If `valid_types` is provided, the dialog will only show Nodes that match one of the listed Node types.

 **Example:** 

```

    func _ready():
        if Engine.is_editor_hint():
            EditorInterface.popup_node_selector(_on_node_selected, ["Button"])
    
    func _on_node_selected(node_path):
        if node_path.is_empty():
            print("node selection canceled")
        else:
            print("selected ", node_path)
```



<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorinterface_method_popup_property_selector"></div>

`void` **popup_property_selector** ( object: [`Object`](class_object.md), callback: [`Callable`](class_callable.md), type_filter: [`PackedInt32Array`](class_packedint32array.md) = PackedInt32Array() )<div id="class_editorinterface_method_popup_property_selector"></div>

Pops up an editor dialog for selecting properties from `object`. The `callback` must take a single argument of type [`NodePath`](class_nodepath.md). It is called on the selected property path (see [`NodePath.get_as_property_path`](#class_nodepath_method_get_as_property_path)) or the empty path `^""` if the dialog is canceled. If `type_filter` is provided, the dialog will only show properties that match one of the listed [Variant.Type](#enum_@globalscope_variant.type) values.

 **Example:** 

```

    func _ready():
        if Engine.is_editor_hint():
            EditorInterface.popup_property_selector(this, _on_property_selected, [TYPE_INT])
    
    func _on_property_selected(property_path):
        if property_path.is_empty():
            print("property selection canceled")
        else:
            print("selected ", property_path)
```



<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorinterface_method_reload_scene_from_path"></div>

`void` **reload_scene_from_path** ( scene_filepath: [`String`](class_string.md) )<div id="class_editorinterface_method_reload_scene_from_path"></div>

Reloads the scene at the given path.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorinterface_method_restart_editor"></div>

`void` **restart_editor** ( save: [`bool`](class_bool.md) = true )<div id="class_editorinterface_method_restart_editor"></div>

Restarts the editor. This closes the editor and then opens the same project. If `save` is `true`, the project will be saved before restarting.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorinterface_method_save_all_scenes"></div>

`void` **save_all_scenes** ( )<div id="class_editorinterface_method_save_all_scenes"></div>

Saves all opened scenes in the editor.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorinterface_method_save_scene"></div>

[Error](#enum_@globalscope_error) **save_scene** ( )<div id="class_editorinterface_method_save_scene"></div>

Saves the currently active scene. Returns either [`@GlobalScope.OK`](#class_@globalscope_constant_ok) or [`@GlobalScope.ERR_CANT_CREATE`](#class_@globalscope_constant_err_cant_create).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorinterface_method_save_scene_as"></div>

`void` **save_scene_as** ( path: [`String`](class_string.md), with_preview: [`bool`](class_bool.md) = true )<div id="class_editorinterface_method_save_scene_as"></div>

Saves the currently active scene as a file at `path`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorinterface_method_select_file"></div>

`void` **select_file** ( file: [`String`](class_string.md) )<div id="class_editorinterface_method_select_file"></div>

Selects the file, with the path provided by `file`, in the FileSystem dock.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorinterface_method_set_current_feature_profile"></div>

`void` **set_current_feature_profile** ( profile_name: [`String`](class_string.md) )<div id="class_editorinterface_method_set_current_feature_profile"></div>

Selects and activates the specified feature profile with the given `profile_name`. Set `profile_name` to an empty string to reset to the default feature profile.

A feature profile can be created programmatically using the [`EditorFeatureProfile`](class_editorfeatureprofile.md) class.

 **Note:** The feature profile that gets activated must be located in the `feature_profiles` directory, as a file with the `.profile` extension. If a profile could not be found, an error occurs. The editor configuration folder can be found by using [`EditorPaths.get_config_dir`](#class_editorpaths_method_get_config_dir).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorinterface_method_set_main_screen_editor"></div>

`void` **set_main_screen_editor** ( name: [`String`](class_string.md) )<div id="class_editorinterface_method_set_main_screen_editor"></div>

Sets the editor's current main screen to the one specified in `name`. `name` must match the title of the tab in question exactly (e.g. `2D`, `3D`, `Script`, or `AssetLib` for default tabs).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorinterface_method_set_plugin_enabled"></div>

`void` **set_plugin_enabled** ( plugin: [`String`](class_string.md), enabled: [`bool`](class_bool.md) )<div id="class_editorinterface_method_set_plugin_enabled"></div>

Sets the enabled status of a plugin. The plugin name is the same as its directory name.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorinterface_method_stop_playing_scene"></div>

`void` **stop_playing_scene** ( )<div id="class_editorinterface_method_stop_playing_scene"></div>

Stops the scene that is currently playing.

[^virtual]: 本方法通常需要用户覆盖才能生效。
[^const]: 本方法无副作用，不会修改该实例的任何成员变量。
[^vararg]: 本方法除了能接受在此处描述的参数外，还能够继续接受任意数量的参数。
[^constructor]: 本方法用于构造某个类型。
[^static]: 调用本方法无需实例，可直接使用类名进行调用。
[^operator]: 本方法描述的是使用本类型作为左操作数的有效运算符。
[^bitfield]: 这个值是由下列位标志构成位掩码的整数。
[^void]: 无返回值。
