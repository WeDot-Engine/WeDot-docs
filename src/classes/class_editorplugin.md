<!-- ⚠ 请勿编辑本文件 ⚠ -->
<!-- 本文档使用脚本从 WeDot 引擎源码仓库生成。 -->
<!-- 生成脚本：https://github.com/WeDot-Engine/WeDot/tree/master/doc/tools/make_md.py； -->
<!-- 原文件：https://github.com/WeDot-Engine/WeDot/tree/master/doc/classes/EditorPlugin.xml。 -->

<div id="_class_editorplugin"></div>

# EditorPlugin

**继承：** [`Node`](class_node.md) **<** [`Object`](class_object.md)

Used by the editor to extend its functionality.

## 描述

Plugins are used by the editor to extend functionality. The most common types of plugins are those which edit a given node or resource type, import plugins and export plugins. See also [`EditorScript`](class_editorscript.md) to add functions to the editor.

 **Note:** Some names in this class contain "left" or "right" (e.g. [`DOCK_SLOT_LEFT_UL`](class_editorplugin.md#class_editorplugin_constant_dock_slot_left_ul)). These APIs assume left-to-right layout, and would be backwards when using right-to-left layout. These names are kept for compatibility reasons.

## 方法

|||
|:-:|:--|
| `void`                                                    | [`_apply_changes`](class_editorplugin.md#class_editorplugin_private_method__apply_changes) ( ) virtual[^virtual]                                                                                                                                                     |
| [`bool`](class_bool.md)                                   | [`_build`](class_editorplugin.md#class_editorplugin_private_method__build) ( ) virtual[^virtual]                                                                                                                                                                     |
| `void`                                                    | [`_clear`](class_editorplugin.md#class_editorplugin_private_method__clear) ( ) virtual[^virtual]                                                                                                                                                                     |
| `void`                                                    | [`_disable_plugin`](class_editorplugin.md#class_editorplugin_private_method__disable_plugin) ( ) virtual[^virtual]                                                                                                                                                   |
| `void`                                                    | [`_edit`](class_editorplugin.md#class_editorplugin_private_method__edit) ( object: [`Object`](class_object.md) ) virtual[^virtual]                                                                                                                                   |
| `void`                                                    | [`_enable_plugin`](class_editorplugin.md#class_editorplugin_private_method__enable_plugin) ( ) virtual[^virtual]                                                                                                                                                     |
| `void`                                                    | [`_forward_3d_draw_over_viewport`](class_editorplugin.md#class_editorplugin_private_method__forward_3d_draw_over_viewport) ( viewport_control: [`Control`](class_control.md) ) virtual[^virtual]                                                                     |
| `void`                                                    | [`_forward_3d_force_draw_over_viewport`](class_editorplugin.md#class_editorplugin_private_method__forward_3d_force_draw_over_viewport) ( viewport_control: [`Control`](class_control.md) ) virtual[^virtual]                                                         |
| [`int`](class_int.md)                                     | [`_forward_3d_gui_input`](class_editorplugin.md#class_editorplugin_private_method__forward_3d_gui_input) ( viewport_camera: [`Camera3D`](class_camera3d.md), event: [`InputEvent`](class_inputevent.md) ) virtual[^virtual]                                          |
| `void`                                                    | [`_forward_canvas_draw_over_viewport`](class_editorplugin.md#class_editorplugin_private_method__forward_canvas_draw_over_viewport) ( viewport_control: [`Control`](class_control.md) ) virtual[^virtual]                                                             |
| `void`                                                    | [`_forward_canvas_force_draw_over_viewport`](class_editorplugin.md#class_editorplugin_private_method__forward_canvas_force_draw_over_viewport) ( viewport_control: [`Control`](class_control.md) ) virtual[^virtual]                                                 |
| [`bool`](class_bool.md)                                   | [`_forward_canvas_gui_input`](class_editorplugin.md#class_editorplugin_private_method__forward_canvas_gui_input) ( event: [`InputEvent`](class_inputevent.md) ) virtual[^virtual]                                                                                    |
| [`PackedStringArray`](class_packedstringarray.md)         | [`_get_breakpoints`](class_editorplugin.md#class_editorplugin_private_method__get_breakpoints) ( ) virtual[^virtual] const[^const]                                                                                                                                   |
| [`Texture2D`](class_texture2d.md)                         | [`_get_plugin_icon`](class_editorplugin.md#class_editorplugin_private_method__get_plugin_icon) ( ) virtual[^virtual] const[^const]                                                                                                                                   |
| [`String`](class_string.md)                               | [`_get_plugin_name`](class_editorplugin.md#class_editorplugin_private_method__get_plugin_name) ( ) virtual[^virtual] const[^const]                                                                                                                                   |
| [`Dictionary`](class_dictionary.md)                       | [`_get_state`](class_editorplugin.md#class_editorplugin_private_method__get_state) ( ) virtual[^virtual] const[^const]                                                                                                                                               |
| [`String`](class_string.md)                               | [`_get_unsaved_status`](class_editorplugin.md#class_editorplugin_private_method__get_unsaved_status) ( for_scene: [`String`](class_string.md) ) virtual[^virtual] const[^const]                                                                                      |
| `void`                                                    | [`_get_window_layout`](class_editorplugin.md#class_editorplugin_private_method__get_window_layout) ( configuration: [`ConfigFile`](class_configfile.md) ) virtual[^virtual]                                                                                          |
| [`bool`](class_bool.md)                                   | [`_handles`](class_editorplugin.md#class_editorplugin_private_method__handles) ( object: [`Object`](class_object.md) ) virtual[^virtual] const[^const]                                                                                                               |
| [`bool`](class_bool.md)                                   | [`_has_main_screen`](class_editorplugin.md#class_editorplugin_private_method__has_main_screen) ( ) virtual[^virtual] const[^const]                                                                                                                                   |
| `void`                                                    | [`_make_visible`](class_editorplugin.md#class_editorplugin_private_method__make_visible) ( visible: [`bool`](class_bool.md) ) virtual[^virtual]                                                                                                                      |
| `void`                                                    | [`_save_external_data`](class_editorplugin.md#class_editorplugin_private_method__save_external_data) ( ) virtual[^virtual]                                                                                                                                           |
| `void`                                                    | [`_set_state`](class_editorplugin.md#class_editorplugin_private_method__set_state) ( state: [`Dictionary`](class_dictionary.md) ) virtual[^virtual]                                                                                                                  |
| `void`                                                    | [`_set_window_layout`](class_editorplugin.md#class_editorplugin_private_method__set_window_layout) ( configuration: [`ConfigFile`](class_configfile.md) ) virtual[^virtual]                                                                                          |
| `void`                                                    | [`add_autoload_singleton`](class_editorplugin.md#class_editorplugin_method_add_autoload_singleton) ( name: [`String`](class_string.md), path: [`String`](class_string.md) )                                                                                          |
| `void`                                                    | [`add_context_menu_plugin`](class_editorplugin.md#class_editorplugin_method_add_context_menu_plugin) ( slot: [ContextMenuSlot](#enum_editorcontextmenuplugin_contextmenuslot), plugin: [`EditorContextMenuPlugin`](class_editorcontextmenuplugin.md) )               |
| [`Button`](class_button.md)                               | [`add_control_to_bottom_panel`](class_editorplugin.md#class_editorplugin_method_add_control_to_bottom_panel) ( control: [`Control`](class_control.md), title: [`String`](class_string.md), shortcut: [`Shortcut`](class_shortcut.md) = null )                        |
| `void`                                                    | [`add_control_to_container`](class_editorplugin.md#class_editorplugin_method_add_control_to_container) ( container: [CustomControlContainer](#enum_editorplugin_customcontrolcontainer), control: [`Control`](class_control.md) )                                    |
| `void`                                                    | [`add_control_to_dock`](class_editorplugin.md#class_editorplugin_method_add_control_to_dock) ( slot: [DockSlot](#enum_editorplugin_dockslot), control: [`Control`](class_control.md), shortcut: [`Shortcut`](class_shortcut.md) = null )                             |
| `void`                                                    | [`add_custom_type`](class_editorplugin.md#class_editorplugin_method_add_custom_type) ( type: [`String`](class_string.md), base: [`String`](class_string.md), script: [`Script`](class_script.md), icon: [`Texture2D`](class_texture2d.md) )                          |
| `void`                                                    | [`add_debugger_plugin`](class_editorplugin.md#class_editorplugin_method_add_debugger_plugin) ( script: [`EditorDebuggerPlugin`](class_editordebuggerplugin.md) )                                                                                                     |
| `void`                                                    | [`add_export_platform`](class_editorplugin.md#class_editorplugin_method_add_export_platform) ( platform: [`EditorExportPlatform`](class_editorexportplatform.md) )                                                                                                   |
| `void`                                                    | [`add_export_plugin`](class_editorplugin.md#class_editorplugin_method_add_export_plugin) ( plugin: [`EditorExportPlugin`](class_editorexportplugin.md) )                                                                                                             |
| `void`                                                    | [`add_import_plugin`](class_editorplugin.md#class_editorplugin_method_add_import_plugin) ( importer: [`EditorImportPlugin`](class_editorimportplugin.md), first_priority: [`bool`](class_bool.md) = false )                                                          |
| `void`                                                    | [`add_inspector_plugin`](class_editorplugin.md#class_editorplugin_method_add_inspector_plugin) ( plugin: [`EditorInspectorPlugin`](class_editorinspectorplugin.md) )                                                                                                 |
| `void`                                                    | [`add_node_3d_gizmo_plugin`](class_editorplugin.md#class_editorplugin_method_add_node_3d_gizmo_plugin) ( plugin: [`EditorNode3DGizmoPlugin`](class_editornode3dgizmoplugin.md) )                                                                                     |
| `void`                                                    | [`add_resource_conversion_plugin`](class_editorplugin.md#class_editorplugin_method_add_resource_conversion_plugin) ( plugin: [`EditorResourceConversionPlugin`](class_editorresourceconversionplugin.md) )                                                           |
| `void`                                                    | [`add_scene_format_importer_plugin`](class_editorplugin.md#class_editorplugin_method_add_scene_format_importer_plugin) ( scene_format_importer: [`EditorSceneFormatImporter`](class_editorsceneformatimporter.md), first_priority: [`bool`](class_bool.md) = false ) |
| `void`                                                    | [`add_scene_post_import_plugin`](class_editorplugin.md#class_editorplugin_method_add_scene_post_import_plugin) ( scene_import_plugin: [`EditorScenePostImportPlugin`](class_editorscenepostimportplugin.md), first_priority: [`bool`](class_bool.md) = false )       |
| `void`                                                    | [`add_tool_menu_item`](class_editorplugin.md#class_editorplugin_method_add_tool_menu_item) ( name: [`String`](class_string.md), callable: [`Callable`](class_callable.md) )                                                                                          |
| `void`                                                    | [`add_tool_submenu_item`](class_editorplugin.md#class_editorplugin_method_add_tool_submenu_item) ( name: [`String`](class_string.md), submenu: [`PopupMenu`](class_popupmenu.md) )                                                                                   |
| `void`                                                    | [`add_translation_parser_plugin`](class_editorplugin.md#class_editorplugin_method_add_translation_parser_plugin) ( parser: [`EditorTranslationParserPlugin`](class_editortranslationparserplugin.md) )                                                               |
| `void`                                                    | [`add_undo_redo_inspector_hook_callback`](class_editorplugin.md#class_editorplugin_method_add_undo_redo_inspector_hook_callback) ( callable: [`Callable`](class_callable.md) )                                                                                       |
| [`EditorInterface`](class_editorinterface.md)             | [`get_editor_interface`](class_editorplugin.md#class_editorplugin_method_get_editor_interface) ( )                                                                                                                                                                   |
| [`PopupMenu`](class_popupmenu.md)                         | [`get_export_as_menu`](class_editorplugin.md#class_editorplugin_method_get_export_as_menu) ( )                                                                                                                                                                       |
| [`String`](class_string.md)                               | [`get_plugin_version`](class_editorplugin.md#class_editorplugin_method_get_plugin_version) ( ) const[^const]                                                                                                                                                         |
| [`ScriptCreateDialog`](class_scriptcreatedialog.md)       | [`get_script_create_dialog`](class_editorplugin.md#class_editorplugin_method_get_script_create_dialog) ( )                                                                                                                                                           |
| [`EditorUndoRedoManager`](class_editorundoredomanager.md) | [`get_undo_redo`](class_editorplugin.md#class_editorplugin_method_get_undo_redo) ( )                                                                                                                                                                                 |
| `void`                                                    | [`hide_bottom_panel`](class_editorplugin.md#class_editorplugin_method_hide_bottom_panel) ( )                                                                                                                                                                         |
| `void`                                                    | [`make_bottom_panel_item_visible`](class_editorplugin.md#class_editorplugin_method_make_bottom_panel_item_visible) ( item: [`Control`](class_control.md) )                                                                                                           |
| `void`                                                    | [`queue_save_layout`](class_editorplugin.md#class_editorplugin_method_queue_save_layout) ( )                                                                                                                                                                         |
| `void`                                                    | [`remove_autoload_singleton`](class_editorplugin.md#class_editorplugin_method_remove_autoload_singleton) ( name: [`String`](class_string.md) )                                                                                                                       |
| `void`                                                    | [`remove_context_menu_plugin`](class_editorplugin.md#class_editorplugin_method_remove_context_menu_plugin) ( plugin: [`EditorContextMenuPlugin`](class_editorcontextmenuplugin.md) )                                                                                 |
| `void`                                                    | [`remove_control_from_bottom_panel`](class_editorplugin.md#class_editorplugin_method_remove_control_from_bottom_panel) ( control: [`Control`](class_control.md) )                                                                                                    |
| `void`                                                    | [`remove_control_from_container`](class_editorplugin.md#class_editorplugin_method_remove_control_from_container) ( container: [CustomControlContainer](#enum_editorplugin_customcontrolcontainer), control: [`Control`](class_control.md) )                          |
| `void`                                                    | [`remove_control_from_docks`](class_editorplugin.md#class_editorplugin_method_remove_control_from_docks) ( control: [`Control`](class_control.md) )                                                                                                                  |
| `void`                                                    | [`remove_custom_type`](class_editorplugin.md#class_editorplugin_method_remove_custom_type) ( type: [`String`](class_string.md) )                                                                                                                                     |
| `void`                                                    | [`remove_debugger_plugin`](class_editorplugin.md#class_editorplugin_method_remove_debugger_plugin) ( script: [`EditorDebuggerPlugin`](class_editordebuggerplugin.md) )                                                                                               |
| `void`                                                    | [`remove_export_platform`](class_editorplugin.md#class_editorplugin_method_remove_export_platform) ( platform: [`EditorExportPlatform`](class_editorexportplatform.md) )                                                                                             |
| `void`                                                    | [`remove_export_plugin`](class_editorplugin.md#class_editorplugin_method_remove_export_plugin) ( plugin: [`EditorExportPlugin`](class_editorexportplugin.md) )                                                                                                       |
| `void`                                                    | [`remove_import_plugin`](class_editorplugin.md#class_editorplugin_method_remove_import_plugin) ( importer: [`EditorImportPlugin`](class_editorimportplugin.md) )                                                                                                     |
| `void`                                                    | [`remove_inspector_plugin`](class_editorplugin.md#class_editorplugin_method_remove_inspector_plugin) ( plugin: [`EditorInspectorPlugin`](class_editorinspectorplugin.md) )                                                                                           |
| `void`                                                    | [`remove_node_3d_gizmo_plugin`](class_editorplugin.md#class_editorplugin_method_remove_node_3d_gizmo_plugin) ( plugin: [`EditorNode3DGizmoPlugin`](class_editornode3dgizmoplugin.md) )                                                                               |
| `void`                                                    | [`remove_resource_conversion_plugin`](class_editorplugin.md#class_editorplugin_method_remove_resource_conversion_plugin) ( plugin: [`EditorResourceConversionPlugin`](class_editorresourceconversionplugin.md) )                                                     |
| `void`                                                    | [`remove_scene_format_importer_plugin`](class_editorplugin.md#class_editorplugin_method_remove_scene_format_importer_plugin) ( scene_format_importer: [`EditorSceneFormatImporter`](class_editorsceneformatimporter.md) )                                            |
| `void`                                                    | [`remove_scene_post_import_plugin`](class_editorplugin.md#class_editorplugin_method_remove_scene_post_import_plugin) ( scene_import_plugin: [`EditorScenePostImportPlugin`](class_editorscenepostimportplugin.md) )                                                  |
| `void`                                                    | [`remove_tool_menu_item`](class_editorplugin.md#class_editorplugin_method_remove_tool_menu_item) ( name: [`String`](class_string.md) )                                                                                                                               |
| `void`                                                    | [`remove_translation_parser_plugin`](class_editorplugin.md#class_editorplugin_method_remove_translation_parser_plugin) ( parser: [`EditorTranslationParserPlugin`](class_editortranslationparserplugin.md) )                                                         |
| `void`                                                    | [`remove_undo_redo_inspector_hook_callback`](class_editorplugin.md#class_editorplugin_method_remove_undo_redo_inspector_hook_callback) ( callable: [`Callable`](class_callable.md) )                                                                                 |
| `void`                                                    | [`set_dock_tab_icon`](class_editorplugin.md#class_editorplugin_method_set_dock_tab_icon) ( control: [`Control`](class_control.md), icon: [`Texture2D`](class_texture2d.md) )                                                                                         |
| `void`                                                    | [`set_force_draw_over_forwarding_enabled`](class_editorplugin.md#class_editorplugin_method_set_force_draw_over_forwarding_enabled) ( )                                                                                                                               |
| `void`                                                    | [`set_input_event_forwarding_always_enabled`](class_editorplugin.md#class_editorplugin_method_set_input_event_forwarding_always_enabled) ( )                                                                                                                         |
| [`int`](class_int.md)                                     | [`update_overlays`](class_editorplugin.md#class_editorplugin_method_update_overlays) ( ) const[^const]                                                                                                                                                               |

<!-- rst-class:: classref-section-separator -->

---

## 信号

<div id="_class_class_editorplugin_signal_main_screen_changed"></div>

**main_screen_changed** ( screen_name: [`String`](class_string.md) ) <div id="class_editorplugin_signal_main_screen_changed"></div>

Emitted when user changes the workspace (**2D**, **3D**, **Script**, **AssetLib**). Also works with custom screens defined by plugins.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_class_editorplugin_signal_project_settings_changed"></div>

**project_settings_changed** ( ) <div id="class_editorplugin_signal_project_settings_changed"></div>

**已弃用：** Use [`ProjectSettings.settings_changed`](class_projectsettings.md#class_projectsettings_signal_settings_changed) instead.

Emitted when any project setting has changed.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_class_editorplugin_signal_resource_saved"></div>

**resource_saved** ( resource: [`Resource`](class_resource.md) ) <div id="class_editorplugin_signal_resource_saved"></div>

Emitted when the given `resource` was saved on disc. See also [`scene_saved`](class_editorplugin.md#class_editorplugin_signal_scene_saved).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_class_editorplugin_signal_scene_changed"></div>

**scene_changed** ( scene_root: [`Node`](class_node.md) ) <div id="class_editorplugin_signal_scene_changed"></div>

Emitted when the scene is changed in the editor. The argument will return the root node of the scene that has just become active. If this scene is new and empty, the argument will be `null`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_class_editorplugin_signal_scene_closed"></div>

**scene_closed** ( filepath: [`String`](class_string.md) ) <div id="class_editorplugin_signal_scene_closed"></div>

Emitted when user closes a scene. The argument is a file path to the closed scene.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_class_editorplugin_signal_scene_saved"></div>

**scene_saved** ( filepath: [`String`](class_string.md) ) <div id="class_editorplugin_signal_scene_saved"></div>

Emitted when a scene was saved on disc. The argument is a file path to the saved scene. See also [`resource_saved`](class_editorplugin.md#class_editorplugin_signal_resource_saved).

<!-- rst-class:: classref-section-separator -->

---

## 枚举

<div id="_class_enum_editorplugin_customcontrolcontainer"></div>

enum **CustomControlContainer**: <div id="enum_editorplugin_customcontrolcontainer"></div>

<div id="_class_editorplugin_constant_container_toolbar"></div>

[CustomControlContainer](#enum_editorplugin_customcontrolcontainer) **CONTAINER_TOOLBAR** = ``0``

Main editor toolbar, next to play buttons.

<div id="_class_editorplugin_constant_container_spatial_editor_menu"></div>

[CustomControlContainer](#enum_editorplugin_customcontrolcontainer) **CONTAINER_SPATIAL_EDITOR_MENU** = ``1``

The toolbar that appears when 3D editor is active.

<div id="_class_editorplugin_constant_container_spatial_editor_side_left"></div>

[CustomControlContainer](#enum_editorplugin_customcontrolcontainer) **CONTAINER_SPATIAL_EDITOR_SIDE_LEFT** = ``2``

Left sidebar of the 3D editor.

<div id="_class_editorplugin_constant_container_spatial_editor_side_right"></div>

[CustomControlContainer](#enum_editorplugin_customcontrolcontainer) **CONTAINER_SPATIAL_EDITOR_SIDE_RIGHT** = ``3``

Right sidebar of the 3D editor.

<div id="_class_editorplugin_constant_container_spatial_editor_bottom"></div>

[CustomControlContainer](#enum_editorplugin_customcontrolcontainer) **CONTAINER_SPATIAL_EDITOR_BOTTOM** = ``4``

Bottom panel of the 3D editor.

<div id="_class_editorplugin_constant_container_canvas_editor_menu"></div>

[CustomControlContainer](#enum_editorplugin_customcontrolcontainer) **CONTAINER_CANVAS_EDITOR_MENU** = ``5``

The toolbar that appears when 2D editor is active.

<div id="_class_editorplugin_constant_container_canvas_editor_side_left"></div>

[CustomControlContainer](#enum_editorplugin_customcontrolcontainer) **CONTAINER_CANVAS_EDITOR_SIDE_LEFT** = ``6``

Left sidebar of the 2D editor.

<div id="_class_editorplugin_constant_container_canvas_editor_side_right"></div>

[CustomControlContainer](#enum_editorplugin_customcontrolcontainer) **CONTAINER_CANVAS_EDITOR_SIDE_RIGHT** = ``7``

Right sidebar of the 2D editor.

<div id="_class_editorplugin_constant_container_canvas_editor_bottom"></div>

[CustomControlContainer](#enum_editorplugin_customcontrolcontainer) **CONTAINER_CANVAS_EDITOR_BOTTOM** = ``8``

Bottom panel of the 2D editor.

<div id="_class_editorplugin_constant_container_inspector_bottom"></div>

[CustomControlContainer](#enum_editorplugin_customcontrolcontainer) **CONTAINER_INSPECTOR_BOTTOM** = ``9``

Bottom section of the inspector.

<div id="_class_editorplugin_constant_container_project_setting_tab_left"></div>

[CustomControlContainer](#enum_editorplugin_customcontrolcontainer) **CONTAINER_PROJECT_SETTING_TAB_LEFT** = ``10``

Tab of Project Settings dialog, to the left of other tabs.

<div id="_class_editorplugin_constant_container_project_setting_tab_right"></div>

[CustomControlContainer](#enum_editorplugin_customcontrolcontainer) **CONTAINER_PROJECT_SETTING_TAB_RIGHT** = ``11``

Tab of Project Settings dialog, to the right of other tabs.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_enum_editorplugin_dockslot"></div>

enum **DockSlot**: <div id="enum_editorplugin_dockslot"></div>

<div id="_class_editorplugin_constant_dock_slot_left_ul"></div>

[DockSlot](#enum_editorplugin_dockslot) **DOCK_SLOT_LEFT_UL** = ``0``

Dock slot, left side, upper-left (empty in default layout).

<div id="_class_editorplugin_constant_dock_slot_left_bl"></div>

[DockSlot](#enum_editorplugin_dockslot) **DOCK_SLOT_LEFT_BL** = ``1``

Dock slot, left side, bottom-left (empty in default layout).

<div id="_class_editorplugin_constant_dock_slot_left_ur"></div>

[DockSlot](#enum_editorplugin_dockslot) **DOCK_SLOT_LEFT_UR** = ``2``

Dock slot, left side, upper-right (in default layout includes Scene and Import docks).

<div id="_class_editorplugin_constant_dock_slot_left_br"></div>

[DockSlot](#enum_editorplugin_dockslot) **DOCK_SLOT_LEFT_BR** = ``3``

Dock slot, left side, bottom-right (in default layout includes FileSystem dock).

<div id="_class_editorplugin_constant_dock_slot_right_ul"></div>

[DockSlot](#enum_editorplugin_dockslot) **DOCK_SLOT_RIGHT_UL** = ``4``

Dock slot, right side, upper-left (in default layout includes Inspector, Node, and History docks).

<div id="_class_editorplugin_constant_dock_slot_right_bl"></div>

[DockSlot](#enum_editorplugin_dockslot) **DOCK_SLOT_RIGHT_BL** = ``5``

Dock slot, right side, bottom-left (empty in default layout).

<div id="_class_editorplugin_constant_dock_slot_right_ur"></div>

[DockSlot](#enum_editorplugin_dockslot) **DOCK_SLOT_RIGHT_UR** = ``6``

Dock slot, right side, upper-right (empty in default layout).

<div id="_class_editorplugin_constant_dock_slot_right_br"></div>

[DockSlot](#enum_editorplugin_dockslot) **DOCK_SLOT_RIGHT_BR** = ``7``

Dock slot, right side, bottom-right (empty in default layout).

<div id="_class_editorplugin_constant_dock_slot_max"></div>

[DockSlot](#enum_editorplugin_dockslot) **DOCK_SLOT_MAX** = ``8``

Represents the size of the [DockSlot](#enum_editorplugin_dockslot) enum.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_enum_editorplugin_afterguiinput"></div>

enum **AfterGUIInput**: <div id="enum_editorplugin_afterguiinput"></div>

<div id="_class_editorplugin_constant_after_gui_input_pass"></div>

[AfterGUIInput](#enum_editorplugin_afterguiinput) **AFTER_GUI_INPUT_PASS** = ``0``

Forwards the [`InputEvent`](class_inputevent.md) to other EditorPlugins.

<div id="_class_editorplugin_constant_after_gui_input_stop"></div>

[AfterGUIInput](#enum_editorplugin_afterguiinput) **AFTER_GUI_INPUT_STOP** = ``1``

Prevents the [`InputEvent`](class_inputevent.md) from reaching other Editor classes.

<div id="_class_editorplugin_constant_after_gui_input_custom"></div>

[AfterGUIInput](#enum_editorplugin_afterguiinput) **AFTER_GUI_INPUT_CUSTOM** = ``2``

Pass the [`InputEvent`](class_inputevent.md) to other editor plugins except the main [`Node3D`](class_node3d.md) one. This can be used to prevent node selection changes and work with sub-gizmos instead.

<!-- rst-class:: classref-section-separator -->

---

## 方法说明

<div id="_class_editorplugin_private_method__apply_changes"></div>

`void` **_apply_changes** ( ) virtual[^virtual]<div id="class_editorplugin_private_method__apply_changes"></div>

This method is called when the editor is about to save the project, switch to another tab, etc. It asks the plugin to apply any pending state changes to ensure consistency.

This is used, for example, in shader editors to let the plugin know that it must apply the shader code being written by the user to the object.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorplugin_private_method__build"></div>

[`bool`](class_bool.md) **_build** ( ) virtual[^virtual]<div id="class_editorplugin_private_method__build"></div>

This method is called when the editor is about to run the project. The plugin can then perform required operations before the project runs.

This method must return a boolean. If this method returns `false`, the project will not run. The run is aborted immediately, so this also prevents all other plugins' [`_build`](class_editorplugin.md#class_editorplugin_private_method__build) methods from running.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorplugin_private_method__clear"></div>

`void` **_clear** ( ) virtual[^virtual]<div id="class_editorplugin_private_method__clear"></div>

Clear all the state and reset the object being edited to zero. This ensures your plugin does not keep editing a currently existing node, or a node from the wrong scene.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorplugin_private_method__disable_plugin"></div>

`void` **_disable_plugin** ( ) virtual[^virtual]<div id="class_editorplugin_private_method__disable_plugin"></div>

Called by the engine when the user disables the **EditorPlugin** in the Plugin tab of the project settings window.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorplugin_private_method__edit"></div>

`void` **_edit** ( object: [`Object`](class_object.md) ) virtual[^virtual]<div id="class_editorplugin_private_method__edit"></div>

This function is used for plugins that edit specific object types (nodes or resources). It requests the editor to edit the given object.

 `object` can be `null` if the plugin was editing an object, but there is no longer any selected object handled by this plugin. It can be used to cleanup editing state.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorplugin_private_method__enable_plugin"></div>

`void` **_enable_plugin** ( ) virtual[^virtual]<div id="class_editorplugin_private_method__enable_plugin"></div>

Called by the engine when the user enables the **EditorPlugin** in the Plugin tab of the project settings window.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorplugin_private_method__forward_3d_draw_over_viewport"></div>

`void` **_forward_3d_draw_over_viewport** ( viewport_control: [`Control`](class_control.md) ) virtual[^virtual]<div id="class_editorplugin_private_method__forward_3d_draw_over_viewport"></div>

Called by the engine when the 3D editor's viewport is updated. Use the `overlay` [`Control`](class_control.md) for drawing. You can update the viewport manually by calling [`update_overlays`](class_editorplugin.md#class_editorplugin_method_update_overlays).



```gdscript

    func _forward_3d_draw_over_viewport(overlay):
        # Draw a circle at cursor position.
        overlay.draw_circle(overlay.get_local_mouse_position(), 64, Color.WHITE)
    
    func _forward_3d_gui_input(camera, event):
        if event is InputEventMouseMotion:
            # Redraw viewport when cursor is moved.
            update_overlays()
            return EditorPlugin.AFTER_GUI_INPUT_STOP
        return EditorPlugin.AFTER_GUI_INPUT_PASS
```

```csharp

    public override void _Forward3DDrawOverViewport(Control viewportControl)
    {
        // Draw a circle at cursor position.
        viewportControl.DrawCircle(viewportControl.GetLocalMousePosition(), 64, Colors.White);
    }
    
    public override EditorPlugin.AfterGuiInput _Forward3DGuiInput(Camera3D viewportCamera, InputEvent @event)
    {
        if (@event is InputEventMouseMotion)
        {
            // Redraw viewport when cursor is moved.
            UpdateOverlays();
            return EditorPlugin.AfterGuiInput.Stop;
        }
        return EditorPlugin.AfterGuiInput.Pass;
    }
```







<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorplugin_private_method__forward_3d_force_draw_over_viewport"></div>

`void` **_forward_3d_force_draw_over_viewport** ( viewport_control: [`Control`](class_control.md) ) virtual[^virtual]<div id="class_editorplugin_private_method__forward_3d_force_draw_over_viewport"></div>

This method is the same as [`_forward_3d_draw_over_viewport`](class_editorplugin.md#class_editorplugin_private_method__forward_3d_draw_over_viewport), except it draws on top of everything. Useful when you need an extra layer that shows over anything else.

You need to enable calling of this method by using [`set_force_draw_over_forwarding_enabled`](class_editorplugin.md#class_editorplugin_method_set_force_draw_over_forwarding_enabled).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorplugin_private_method__forward_3d_gui_input"></div>

[`int`](class_int.md) **_forward_3d_gui_input** ( viewport_camera: [`Camera3D`](class_camera3d.md), event: [`InputEvent`](class_inputevent.md) ) virtual[^virtual]<div id="class_editorplugin_private_method__forward_3d_gui_input"></div>

Called when there is a root node in the current edited scene, [`_handles`](class_editorplugin.md#class_editorplugin_private_method__handles) is implemented, and an [`InputEvent`](class_inputevent.md) happens in the 3D viewport. The return value decides whether the [`InputEvent`](class_inputevent.md) is consumed or forwarded to other **EditorPlugin** s. See [AfterGUIInput](#enum_editorplugin_afterguiinput) for options.



```gdscript

    # Prevents the InputEvent from reaching other Editor classes.
    func _forward_3d_gui_input(camera, event):
        return EditorPlugin.AFTER_GUI_INPUT_STOP
```

```csharp

    // Prevents the InputEvent from reaching other Editor classes.
    public override EditorPlugin.AfterGuiInput _Forward3DGuiInput(Camera3D camera, InputEvent @event)
    {
        return EditorPlugin.AfterGuiInput.Stop;
    }
```



This method must return [`AFTER_GUI_INPUT_PASS`](class_editorplugin.md#class_editorplugin_constant_after_gui_input_pass) in order to forward the [`InputEvent`](class_inputevent.md) to other Editor classes.



```gdscript

    # Consumes InputEventMouseMotion and forwards other InputEvent types.
    func _forward_3d_gui_input(camera, event):
        return EditorPlugin.AFTER_GUI_INPUT_STOP if event is InputEventMouseMotion else EditorPlugin.AFTER_GUI_INPUT_PASS
```

```csharp

    // Consumes InputEventMouseMotion and forwards other InputEvent types.
    public override EditorPlugin.AfterGuiInput _Forward3DGuiInput(Camera3D camera, InputEvent @event)
    {
        return @event is InputEventMouseMotion ? EditorPlugin.AfterGuiInput.Stop : EditorPlugin.AfterGuiInput.Pass;
    }
```











<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorplugin_private_method__forward_canvas_draw_over_viewport"></div>

`void` **_forward_canvas_draw_over_viewport** ( viewport_control: [`Control`](class_control.md) ) virtual[^virtual]<div id="class_editorplugin_private_method__forward_canvas_draw_over_viewport"></div>

Called by the engine when the 2D editor's viewport is updated. Use the `overlay` [`Control`](class_control.md) for drawing. You can update the viewport manually by calling [`update_overlays`](class_editorplugin.md#class_editorplugin_method_update_overlays).



```gdscript

    func _forward_canvas_draw_over_viewport(overlay):
        # Draw a circle at cursor position.
        overlay.draw_circle(overlay.get_local_mouse_position(), 64, Color.WHITE)
    
    func _forward_canvas_gui_input(event):
        if event is InputEventMouseMotion:
            # Redraw viewport when cursor is moved.
            update_overlays()
            return true
        return false
```

```csharp

    public override void _ForwardCanvasDrawOverViewport(Control viewportControl)
    {
        // Draw a circle at cursor position.
        viewportControl.DrawCircle(viewportControl.GetLocalMousePosition(), 64, Colors.White);
    }
    
    public override bool _ForwardCanvasGuiInput(InputEvent @event)
    {
        if (@event is InputEventMouseMotion)
        {
            // Redraw viewport when cursor is moved.
            UpdateOverlays();
            return true;
        }
        return false;
    }
```







<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorplugin_private_method__forward_canvas_force_draw_over_viewport"></div>

`void` **_forward_canvas_force_draw_over_viewport** ( viewport_control: [`Control`](class_control.md) ) virtual[^virtual]<div id="class_editorplugin_private_method__forward_canvas_force_draw_over_viewport"></div>

This method is the same as [`_forward_canvas_draw_over_viewport`](class_editorplugin.md#class_editorplugin_private_method__forward_canvas_draw_over_viewport), except it draws on top of everything. Useful when you need an extra layer that shows over anything else.

You need to enable calling of this method by using [`set_force_draw_over_forwarding_enabled`](class_editorplugin.md#class_editorplugin_method_set_force_draw_over_forwarding_enabled).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorplugin_private_method__forward_canvas_gui_input"></div>

[`bool`](class_bool.md) **_forward_canvas_gui_input** ( event: [`InputEvent`](class_inputevent.md) ) virtual[^virtual]<div id="class_editorplugin_private_method__forward_canvas_gui_input"></div>

Called when there is a root node in the current edited scene, [`_handles`](class_editorplugin.md#class_editorplugin_private_method__handles) is implemented, and an [`InputEvent`](class_inputevent.md) happens in the 2D viewport. If this method returns `true`, `event` is intercepted by this **EditorPlugin**, otherwise `event` is forwarded to other Editor classes.



```gdscript

    # Prevents the InputEvent from reaching other Editor classes.
    func _forward_canvas_gui_input(event):
        return true
```

```csharp

    // Prevents the InputEvent from reaching other Editor classes.
    public override bool ForwardCanvasGuiInput(InputEvent @event)
    {
        return true;
    }
```



This method must return `false` in order to forward the [`InputEvent`](class_inputevent.md) to other Editor classes.



```gdscript

    # Consumes InputEventMouseMotion and forwards other InputEvent types.
    func _forward_canvas_gui_input(event):
        if (event is InputEventMouseMotion):
            return true
        return false
```

```csharp

    // Consumes InputEventMouseMotion and forwards other InputEvent types.
    public override bool _ForwardCanvasGuiInput(InputEvent @event)
    {
        if (@event is InputEventMouseMotion)
        {
            return true;
        }
        return false;
    }
```











<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorplugin_private_method__get_breakpoints"></div>

[`PackedStringArray`](class_packedstringarray.md) **_get_breakpoints** ( ) virtual[^virtual] const[^const]<div id="class_editorplugin_private_method__get_breakpoints"></div>

This is for editors that edit script-based objects. You can return a list of breakpoints in the format (`script:line`), for example: `res://path_to_script.gd:25`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorplugin_private_method__get_plugin_icon"></div>

[`Texture2D`](class_texture2d.md) **_get_plugin_icon** ( ) virtual[^virtual] const[^const]<div id="class_editorplugin_private_method__get_plugin_icon"></div>

Override this method in your plugin to return a [`Texture2D`](class_texture2d.md) in order to give it an icon.

For main screen plugins, this appears at the top of the screen, to the right of the "2D", "3D", "Script", and "AssetLib" buttons.

Ideally, the plugin icon should be white with a transparent background and 16×16 pixels in size.



```gdscript

    func _get_plugin_icon():
        # You can use a custom icon:
        return preload("res://addons/my_plugin/my_plugin_icon.svg")
        # Or use a built-in icon:
        return EditorInterface.get_editor_theme().get_icon("Node", "EditorIcons")
```

```csharp

    public override Texture2D _GetPluginIcon()
    {
        // You can use a custom icon:
        return ResourceLoader.Load<Texture2D>("res://addons/my_plugin/my_plugin_icon.svg");
        // Or use a built-in icon:
        return EditorInterface.Singleton.GetEditorTheme().GetIcon("Node", "EditorIcons");
    }
```







<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorplugin_private_method__get_plugin_name"></div>

[`String`](class_string.md) **_get_plugin_name** ( ) virtual[^virtual] const[^const]<div id="class_editorplugin_private_method__get_plugin_name"></div>

Override this method in your plugin to provide the name of the plugin when displayed in the Godot editor.

For main screen plugins, this appears at the top of the screen, to the right of the "2D", "3D", "Script", and "AssetLib" buttons.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorplugin_private_method__get_state"></div>

[`Dictionary`](class_dictionary.md) **_get_state** ( ) virtual[^virtual] const[^const]<div id="class_editorplugin_private_method__get_state"></div>

Override this method to provide a state data you want to be saved, like view position, grid settings, folding, etc. This is used when saving the scene (so state is kept when opening it again) and for switching tabs (so state can be restored when the tab returns). This data is automatically saved for each scene in an `editstate` file in the editor metadata folder. If you want to store global (scene-independent) editor data for your plugin, you can use [`_get_window_layout`](class_editorplugin.md#class_editorplugin_private_method__get_window_layout) instead.

Use [`_set_state`](class_editorplugin.md#class_editorplugin_private_method__set_state) to restore your saved state.

 **Note:** This method should not be used to save important settings that should persist with the project.

 **Note:** You must implement [`_get_plugin_name`](class_editorplugin.md#class_editorplugin_private_method__get_plugin_name) for the state to be stored and restored correctly.

```

    func _get_state():
        var state = {"zoom": zoom, "preferred_color": my_color}
        return state
```



<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorplugin_private_method__get_unsaved_status"></div>

[`String`](class_string.md) **_get_unsaved_status** ( for_scene: [`String`](class_string.md) ) virtual[^virtual] const[^const]<div id="class_editorplugin_private_method__get_unsaved_status"></div>

Override this method to provide a custom message that lists unsaved changes. The editor will call this method when exiting or when closing a scene, and display the returned string in a confirmation dialog. Return empty string if the plugin has no unsaved changes.

When closing a scene, `for_scene` is the path to the scene being closed. You can use it to handle built-in resources in that scene.

If the user confirms saving, [`_save_external_data`](class_editorplugin.md#class_editorplugin_private_method__save_external_data) will be called, before closing the editor.

```

    func _get_unsaved_status(for_scene):
        if not unsaved:
            return ""
    
        if for_scene.is_empty():
            return "Save changes in MyCustomPlugin before closing?"
        else:
            return "Scene %s has changes from MyCustomPlugin. Save before closing?" % for_scene.get_file()
    
    func _save_external_data():
        unsaved = false
```

If the plugin has no scene-specific changes, you can ignore the calls when closing scenes:

```

    func _get_unsaved_status(for_scene):
        if not for_scene.is_empty():
            return ""
```





<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorplugin_private_method__get_window_layout"></div>

`void` **_get_window_layout** ( configuration: [`ConfigFile`](class_configfile.md) ) virtual[^virtual]<div id="class_editorplugin_private_method__get_window_layout"></div>

Override this method to provide the GUI layout of the plugin or any other data you want to be stored. This is used to save the project's editor layout when [`queue_save_layout`](class_editorplugin.md#class_editorplugin_method_queue_save_layout) is called or the editor layout was changed (for example changing the position of a dock). The data is stored in the `editor_layout.cfg` file in the editor metadata directory.

Use [`_set_window_layout`](class_editorplugin.md#class_editorplugin_private_method__set_window_layout) to restore your saved layout.

```

    func _get_window_layout(configuration):
        configuration.set_value("MyPlugin", "window_position", $Window.position)
        configuration.set_value("MyPlugin", "icon_color", $Icon.modulate)
```



<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorplugin_private_method__handles"></div>

[`bool`](class_bool.md) **_handles** ( object: [`Object`](class_object.md) ) virtual[^virtual] const[^const]<div id="class_editorplugin_private_method__handles"></div>

Implement this function if your plugin edits a specific type of object (Resource or Node). If you return `true`, then you will get the functions [`_edit`](class_editorplugin.md#class_editorplugin_private_method__edit) and [`_make_visible`](class_editorplugin.md#class_editorplugin_private_method__make_visible) called when the editor requests them. If you have declared the methods [`_forward_canvas_gui_input`](class_editorplugin.md#class_editorplugin_private_method__forward_canvas_gui_input) and [`_forward_3d_gui_input`](class_editorplugin.md#class_editorplugin_private_method__forward_3d_gui_input) these will be called too.

 **Note:** Each plugin should handle only one type of objects at a time. If a plugin handles more types of objects and they are edited at the same time, it will result in errors.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorplugin_private_method__has_main_screen"></div>

[`bool`](class_bool.md) **_has_main_screen** ( ) virtual[^virtual] const[^const]<div id="class_editorplugin_private_method__has_main_screen"></div>

Returns `true` if this is a main screen editor plugin (it goes in the workspace selector together with **2D**, **3D**, **Script** and **AssetLib**).

When the plugin's workspace is selected, other main screen plugins will be hidden, but your plugin will not appear automatically. It needs to be added as a child of [`EditorInterface.get_editor_main_screen`](class_editorinterface.md#class_editorinterface_method_get_editor_main_screen) and made visible inside [`_make_visible`](class_editorplugin.md#class_editorplugin_private_method__make_visible).

Use [`_get_plugin_name`](class_editorplugin.md#class_editorplugin_private_method__get_plugin_name) and [`_get_plugin_icon`](class_editorplugin.md#class_editorplugin_private_method__get_plugin_icon) to customize the plugin button's appearance.

```

    var plugin_control
    
    func _enter_tree():
        plugin_control = preload("my_plugin_control.tscn").instantiate()
        EditorInterface.get_editor_main_screen().add_child(plugin_control)
        plugin_control.hide()
    
    func _has_main_screen():
        return true
    
    func _make_visible(visible):
        plugin_control.visible = visible
    
    func _get_plugin_name():
        return "My Super Cool Plugin 3000"
    
    func _get_plugin_icon():
        return EditorInterface.get_editor_theme().get_icon("Node", "EditorIcons")
```



<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorplugin_private_method__make_visible"></div>

`void` **_make_visible** ( visible: [`bool`](class_bool.md) ) virtual[^virtual]<div id="class_editorplugin_private_method__make_visible"></div>

This function will be called when the editor is requested to become visible. It is used for plugins that edit a specific object type.

Remember that you have to manage the visibility of all your editor controls manually.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorplugin_private_method__save_external_data"></div>

`void` **_save_external_data** ( ) virtual[^virtual]<div id="class_editorplugin_private_method__save_external_data"></div>

This method is called after the editor saves the project or when it's closed. It asks the plugin to save edited external scenes/resources.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorplugin_private_method__set_state"></div>

`void` **_set_state** ( state: [`Dictionary`](class_dictionary.md) ) virtual[^virtual]<div id="class_editorplugin_private_method__set_state"></div>

Restore the state saved by [`_get_state`](class_editorplugin.md#class_editorplugin_private_method__get_state). This method is called when the current scene tab is changed in the editor.

 **Note:** Your plugin must implement [`_get_plugin_name`](class_editorplugin.md#class_editorplugin_private_method__get_plugin_name), otherwise it will not be recognized and this method will not be called.

```

    func _set_state(data):
        zoom = data.get("zoom", 1.0)
        preferred_color = data.get("my_color", Color.WHITE)
```



<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorplugin_private_method__set_window_layout"></div>

`void` **_set_window_layout** ( configuration: [`ConfigFile`](class_configfile.md) ) virtual[^virtual]<div id="class_editorplugin_private_method__set_window_layout"></div>

Restore the plugin GUI layout and data saved by [`_get_window_layout`](class_editorplugin.md#class_editorplugin_private_method__get_window_layout). This method is called for every plugin on editor startup. Use the provided `configuration` file to read your saved data.

```

    func _set_window_layout(configuration):
        $Window.position = configuration.get_value("MyPlugin", "window_position", Vector2())
        $Icon.modulate = configuration.get_value("MyPlugin", "icon_color", Color.WHITE)
```



<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorplugin_method_add_autoload_singleton"></div>

`void` **add_autoload_singleton** ( name: [`String`](class_string.md), path: [`String`](class_string.md) )<div id="class_editorplugin_method_add_autoload_singleton"></div>

Adds a script at `path` to the Autoload list as `name`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorplugin_method_add_context_menu_plugin"></div>

`void` **add_context_menu_plugin** ( slot: [ContextMenuSlot](#enum_editorcontextmenuplugin_contextmenuslot), plugin: [`EditorContextMenuPlugin`](class_editorcontextmenuplugin.md) )<div id="class_editorplugin_method_add_context_menu_plugin"></div>

Adds a plugin to the context menu. `slot` is the context menu where the plugin will be added.

See [ContextMenuSlot](#enum_editorcontextmenuplugin_contextmenuslot) for available context menus. A plugin instance can belong only to a single context menu slot.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorplugin_method_add_control_to_bottom_panel"></div>

[`Button`](class_button.md) **add_control_to_bottom_panel** ( control: [`Control`](class_control.md), title: [`String`](class_string.md), shortcut: [`Shortcut`](class_shortcut.md) = null )<div id="class_editorplugin_method_add_control_to_bottom_panel"></div>

Adds a control to the bottom panel (together with Output, Debug, Animation, etc). Returns a reference to the button added. It's up to you to hide/show the button when needed. When your plugin is deactivated, make sure to remove your custom control with [`remove_control_from_bottom_panel`](class_editorplugin.md#class_editorplugin_method_remove_control_from_bottom_panel) and free it with [`Node.queue_free`](class_node.md#class_node_method_queue_free).

Optionally, you can specify a shortcut parameter. When pressed, this shortcut will toggle the bottom panel's visibility. See the default editor bottom panel shortcuts in the Editor Settings for inspiration. Per convention, they all use <i class="fa fa-gamepad"></i>`Alt` modifier.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorplugin_method_add_control_to_container"></div>

`void` **add_control_to_container** ( container: [CustomControlContainer](#enum_editorplugin_customcontrolcontainer), control: [`Control`](class_control.md) )<div id="class_editorplugin_method_add_control_to_container"></div>

Adds a custom control to a container (see [CustomControlContainer](#enum_editorplugin_customcontrolcontainer)). There are many locations where custom controls can be added in the editor UI.

Please remember that you have to manage the visibility of your custom controls yourself (and likely hide it after adding it).

When your plugin is deactivated, make sure to remove your custom control with [`remove_control_from_container`](class_editorplugin.md#class_editorplugin_method_remove_control_from_container) and free it with [`Node.queue_free`](class_node.md#class_node_method_queue_free).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorplugin_method_add_control_to_dock"></div>

`void` **add_control_to_dock** ( slot: [DockSlot](#enum_editorplugin_dockslot), control: [`Control`](class_control.md), shortcut: [`Shortcut`](class_shortcut.md) = null )<div id="class_editorplugin_method_add_control_to_dock"></div>

Adds the control to a specific dock slot (see [DockSlot](#enum_editorplugin_dockslot) for options).

If the dock is repositioned and as long as the plugin is active, the editor will save the dock position on further sessions.

When your plugin is deactivated, make sure to remove your custom control with [`remove_control_from_docks`](class_editorplugin.md#class_editorplugin_method_remove_control_from_docks) and free it with [`Node.queue_free`](class_node.md#class_node_method_queue_free).

Optionally, you can specify a shortcut parameter. When pressed, this shortcut will toggle the dock's visibility once it's moved to the bottom panel (this shortcut does not affect the dock otherwise). See the default editor bottom panel shortcuts in the Editor Settings for inspiration. Per convention, they all use <i class="fa fa-gamepad"></i>`Alt` modifier.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorplugin_method_add_custom_type"></div>

`void` **add_custom_type** ( type: [`String`](class_string.md), base: [`String`](class_string.md), script: [`Script`](class_script.md), icon: [`Texture2D`](class_texture2d.md) )<div id="class_editorplugin_method_add_custom_type"></div>

Adds a custom type, which will appear in the list of nodes or resources.

When a given node or resource is selected, the base type will be instantiated (e.g. "Node3D", "Control", "Resource"), then the script will be loaded and set to this object.

 **Note:** The base type is the base engine class which this type's class hierarchy inherits, not any custom type parent classes.

You can use the virtual method [`_handles`](class_editorplugin.md#class_editorplugin_private_method__handles) to check if your custom object is being edited by checking the script or using the `is` keyword.

During run-time, this will be a simple object with a script so this function does not need to be called then.

 **Note:** Custom types added this way are not true classes. They are just a helper to create a node with specific script.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorplugin_method_add_debugger_plugin"></div>

`void` **add_debugger_plugin** ( script: [`EditorDebuggerPlugin`](class_editordebuggerplugin.md) )<div id="class_editorplugin_method_add_debugger_plugin"></div>

Adds a [`Script`](class_script.md) as debugger plugin to the Debugger. The script must extend [`EditorDebuggerPlugin`](class_editordebuggerplugin.md).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorplugin_method_add_export_platform"></div>

`void` **add_export_platform** ( platform: [`EditorExportPlatform`](class_editorexportplatform.md) )<div id="class_editorplugin_method_add_export_platform"></div>

Registers a new [`EditorExportPlatform`](class_editorexportplatform.md). Export platforms provides functionality of exporting to the specific platform.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorplugin_method_add_export_plugin"></div>

`void` **add_export_plugin** ( plugin: [`EditorExportPlugin`](class_editorexportplugin.md) )<div id="class_editorplugin_method_add_export_plugin"></div>

Registers a new [`EditorExportPlugin`](class_editorexportplugin.md). Export plugins are used to perform tasks when the project is being exported.

See [`add_inspector_plugin`](class_editorplugin.md#class_editorplugin_method_add_inspector_plugin) for an example of how to register a plugin.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorplugin_method_add_import_plugin"></div>

`void` **add_import_plugin** ( importer: [`EditorImportPlugin`](class_editorimportplugin.md), first_priority: [`bool`](class_bool.md) = false )<div id="class_editorplugin_method_add_import_plugin"></div>

Registers a new [`EditorImportPlugin`](class_editorimportplugin.md). Import plugins are used to import custom and unsupported assets as a custom [`Resource`](class_resource.md) type.

If `first_priority` is `true`, the new import plugin is inserted first in the list and takes precedence over pre-existing plugins.

 **Note:** If you want to import custom 3D asset formats use [`add_scene_format_importer_plugin`](class_editorplugin.md#class_editorplugin_method_add_scene_format_importer_plugin) instead.

See [`add_inspector_plugin`](class_editorplugin.md#class_editorplugin_method_add_inspector_plugin) for an example of how to register a plugin.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorplugin_method_add_inspector_plugin"></div>

`void` **add_inspector_plugin** ( plugin: [`EditorInspectorPlugin`](class_editorinspectorplugin.md) )<div id="class_editorplugin_method_add_inspector_plugin"></div>

Registers a new [`EditorInspectorPlugin`](class_editorinspectorplugin.md). Inspector plugins are used to extend [`EditorInspector`](class_editorinspector.md) and provide custom configuration tools for your object's properties.

 **Note:** Always use [`remove_inspector_plugin`](class_editorplugin.md#class_editorplugin_method_remove_inspector_plugin) to remove the registered [`EditorInspectorPlugin`](class_editorinspectorplugin.md) when your **EditorPlugin** is disabled to prevent leaks and an unexpected behavior.



```gdscript

    const MyInspectorPlugin = preload("res://addons/your_addon/path/to/your/script.gd")
    var inspector_plugin = MyInspectorPlugin.new()
    
    func _enter_tree():
        add_inspector_plugin(inspector_plugin)
    
    func _exit_tree():
        remove_inspector_plugin(inspector_plugin)
```





<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorplugin_method_add_node_3d_gizmo_plugin"></div>

`void` **add_node_3d_gizmo_plugin** ( plugin: [`EditorNode3DGizmoPlugin`](class_editornode3dgizmoplugin.md) )<div id="class_editorplugin_method_add_node_3d_gizmo_plugin"></div>

Registers a new [`EditorNode3DGizmoPlugin`](class_editornode3dgizmoplugin.md). Gizmo plugins are used to add custom gizmos to the 3D preview viewport for a [`Node3D`](class_node3d.md).

See [`add_inspector_plugin`](class_editorplugin.md#class_editorplugin_method_add_inspector_plugin) for an example of how to register a plugin.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorplugin_method_add_resource_conversion_plugin"></div>

`void` **add_resource_conversion_plugin** ( plugin: [`EditorResourceConversionPlugin`](class_editorresourceconversionplugin.md) )<div id="class_editorplugin_method_add_resource_conversion_plugin"></div>

Registers a new [`EditorResourceConversionPlugin`](class_editorresourceconversionplugin.md). Resource conversion plugins are used to add custom resource converters to the editor inspector.

See [`EditorResourceConversionPlugin`](class_editorresourceconversionplugin.md) for an example of how to create a resource conversion plugin.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorplugin_method_add_scene_format_importer_plugin"></div>

`void` **add_scene_format_importer_plugin** ( scene_format_importer: [`EditorSceneFormatImporter`](class_editorsceneformatimporter.md), first_priority: [`bool`](class_bool.md) = false )<div id="class_editorplugin_method_add_scene_format_importer_plugin"></div>

Registers a new [`EditorSceneFormatImporter`](class_editorsceneformatimporter.md). Scene importers are used to import custom 3D asset formats as scenes.

If `first_priority` is `true`, the new import plugin is inserted first in the list and takes precedence over pre-existing plugins.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorplugin_method_add_scene_post_import_plugin"></div>

`void` **add_scene_post_import_plugin** ( scene_import_plugin: [`EditorScenePostImportPlugin`](class_editorscenepostimportplugin.md), first_priority: [`bool`](class_bool.md) = false )<div id="class_editorplugin_method_add_scene_post_import_plugin"></div>

Add a [`EditorScenePostImportPlugin`](class_editorscenepostimportplugin.md). These plugins allow customizing the import process of 3D assets by adding new options to the import dialogs.

If `first_priority` is `true`, the new import plugin is inserted first in the list and takes precedence over pre-existing plugins.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorplugin_method_add_tool_menu_item"></div>

`void` **add_tool_menu_item** ( name: [`String`](class_string.md), callable: [`Callable`](class_callable.md) )<div id="class_editorplugin_method_add_tool_menu_item"></div>

Adds a custom menu item to **Project > Tools** named `name`. When clicked, the provided `callable` will be called.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorplugin_method_add_tool_submenu_item"></div>

`void` **add_tool_submenu_item** ( name: [`String`](class_string.md), submenu: [`PopupMenu`](class_popupmenu.md) )<div id="class_editorplugin_method_add_tool_submenu_item"></div>

Adds a custom [`PopupMenu`](class_popupmenu.md) submenu under **Project > Tools >** `name`. Use [`remove_tool_menu_item`](class_editorplugin.md#class_editorplugin_method_remove_tool_menu_item) on plugin clean up to remove the menu.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorplugin_method_add_translation_parser_plugin"></div>

`void` **add_translation_parser_plugin** ( parser: [`EditorTranslationParserPlugin`](class_editortranslationparserplugin.md) )<div id="class_editorplugin_method_add_translation_parser_plugin"></div>

Registers a custom translation parser plugin for extracting translatable strings from custom files.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorplugin_method_add_undo_redo_inspector_hook_callback"></div>

`void` **add_undo_redo_inspector_hook_callback** ( callable: [`Callable`](class_callable.md) )<div id="class_editorplugin_method_add_undo_redo_inspector_hook_callback"></div>

Hooks a callback into the undo/redo action creation when a property is modified in the inspector. This allows, for example, to save other properties that may be lost when a given property is modified.

The callback should have 4 arguments: [`Object`](class_object.md) `undo_redo`, [`Object`](class_object.md) `modified_object`, [`String`](class_string.md) `property` and [`Variant`](class_variant.md) `new_value`. They are, respectively, the [`UndoRedo`](class_undoredo.md) object used by the inspector, the currently modified object, the name of the modified property and the new value the property is about to take.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorplugin_method_get_editor_interface"></div>

[`EditorInterface`](class_editorinterface.md) **get_editor_interface** ( )<div id="class_editorplugin_method_get_editor_interface"></div>

**已弃用：** [`EditorInterface`](class_editorinterface.md) is a global singleton and can be accessed directly by its name.

Returns the [`EditorInterface`](class_editorinterface.md) singleton instance.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorplugin_method_get_export_as_menu"></div>

[`PopupMenu`](class_popupmenu.md) **get_export_as_menu** ( )<div id="class_editorplugin_method_get_export_as_menu"></div>

Returns the [`PopupMenu`](class_popupmenu.md) under **Scene > Export As...**.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorplugin_method_get_plugin_version"></div>

[`String`](class_string.md) **get_plugin_version** ( ) const[^const]<div id="class_editorplugin_method_get_plugin_version"></div>

Provide the version of the plugin declared in the `plugin.cfg` config file.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorplugin_method_get_script_create_dialog"></div>

[`ScriptCreateDialog`](class_scriptcreatedialog.md) **get_script_create_dialog** ( )<div id="class_editorplugin_method_get_script_create_dialog"></div>

Gets the Editor's dialog used for making scripts.

 **Note:** Users can configure it before use.

 **Warning:** Removing and freeing this node will render a part of the editor useless and may cause a crash.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorplugin_method_get_undo_redo"></div>

[`EditorUndoRedoManager`](class_editorundoredomanager.md) **get_undo_redo** ( )<div id="class_editorplugin_method_get_undo_redo"></div>

Gets the undo/redo object. Most actions in the editor can be undoable, so use this object to make sure this happens when it's worth it.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorplugin_method_hide_bottom_panel"></div>

`void` **hide_bottom_panel** ( )<div id="class_editorplugin_method_hide_bottom_panel"></div>

Minimizes the bottom panel.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorplugin_method_make_bottom_panel_item_visible"></div>

`void` **make_bottom_panel_item_visible** ( item: [`Control`](class_control.md) )<div id="class_editorplugin_method_make_bottom_panel_item_visible"></div>

Makes a specific item in the bottom panel visible.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorplugin_method_queue_save_layout"></div>

`void` **queue_save_layout** ( )<div id="class_editorplugin_method_queue_save_layout"></div>

Queue save the project's editor layout.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorplugin_method_remove_autoload_singleton"></div>

`void` **remove_autoload_singleton** ( name: [`String`](class_string.md) )<div id="class_editorplugin_method_remove_autoload_singleton"></div>

Removes an Autoload `name` from the list.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorplugin_method_remove_context_menu_plugin"></div>

`void` **remove_context_menu_plugin** ( plugin: [`EditorContextMenuPlugin`](class_editorcontextmenuplugin.md) )<div id="class_editorplugin_method_remove_context_menu_plugin"></div>

Removes the specified context menu plugin.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorplugin_method_remove_control_from_bottom_panel"></div>

`void` **remove_control_from_bottom_panel** ( control: [`Control`](class_control.md) )<div id="class_editorplugin_method_remove_control_from_bottom_panel"></div>

Removes the control from the bottom panel. You have to manually [`Node.queue_free`](class_node.md#class_node_method_queue_free) the control.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorplugin_method_remove_control_from_container"></div>

`void` **remove_control_from_container** ( container: [CustomControlContainer](#enum_editorplugin_customcontrolcontainer), control: [`Control`](class_control.md) )<div id="class_editorplugin_method_remove_control_from_container"></div>

Removes the control from the specified container. You have to manually [`Node.queue_free`](class_node.md#class_node_method_queue_free) the control.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorplugin_method_remove_control_from_docks"></div>

`void` **remove_control_from_docks** ( control: [`Control`](class_control.md) )<div id="class_editorplugin_method_remove_control_from_docks"></div>

Removes the control from the dock. You have to manually [`Node.queue_free`](class_node.md#class_node_method_queue_free) the control.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorplugin_method_remove_custom_type"></div>

`void` **remove_custom_type** ( type: [`String`](class_string.md) )<div id="class_editorplugin_method_remove_custom_type"></div>

Removes a custom type added by [`add_custom_type`](class_editorplugin.md#class_editorplugin_method_add_custom_type).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorplugin_method_remove_debugger_plugin"></div>

`void` **remove_debugger_plugin** ( script: [`EditorDebuggerPlugin`](class_editordebuggerplugin.md) )<div id="class_editorplugin_method_remove_debugger_plugin"></div>

Removes the debugger plugin with given script from the Debugger.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorplugin_method_remove_export_platform"></div>

`void` **remove_export_platform** ( platform: [`EditorExportPlatform`](class_editorexportplatform.md) )<div id="class_editorplugin_method_remove_export_platform"></div>

Removes an export platform registered by [`add_export_platform`](class_editorplugin.md#class_editorplugin_method_add_export_platform).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorplugin_method_remove_export_plugin"></div>

`void` **remove_export_plugin** ( plugin: [`EditorExportPlugin`](class_editorexportplugin.md) )<div id="class_editorplugin_method_remove_export_plugin"></div>

Removes an export plugin registered by [`add_export_plugin`](class_editorplugin.md#class_editorplugin_method_add_export_plugin).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorplugin_method_remove_import_plugin"></div>

`void` **remove_import_plugin** ( importer: [`EditorImportPlugin`](class_editorimportplugin.md) )<div id="class_editorplugin_method_remove_import_plugin"></div>

Removes an import plugin registered by [`add_import_plugin`](class_editorplugin.md#class_editorplugin_method_add_import_plugin).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorplugin_method_remove_inspector_plugin"></div>

`void` **remove_inspector_plugin** ( plugin: [`EditorInspectorPlugin`](class_editorinspectorplugin.md) )<div id="class_editorplugin_method_remove_inspector_plugin"></div>

Removes an inspector plugin registered by [`add_inspector_plugin`](class_editorplugin.md#class_editorplugin_method_add_inspector_plugin).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorplugin_method_remove_node_3d_gizmo_plugin"></div>

`void` **remove_node_3d_gizmo_plugin** ( plugin: [`EditorNode3DGizmoPlugin`](class_editornode3dgizmoplugin.md) )<div id="class_editorplugin_method_remove_node_3d_gizmo_plugin"></div>

Removes a gizmo plugin registered by [`add_node_3d_gizmo_plugin`](class_editorplugin.md#class_editorplugin_method_add_node_3d_gizmo_plugin).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorplugin_method_remove_resource_conversion_plugin"></div>

`void` **remove_resource_conversion_plugin** ( plugin: [`EditorResourceConversionPlugin`](class_editorresourceconversionplugin.md) )<div id="class_editorplugin_method_remove_resource_conversion_plugin"></div>

Removes a resource conversion plugin registered by [`add_resource_conversion_plugin`](class_editorplugin.md#class_editorplugin_method_add_resource_conversion_plugin).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorplugin_method_remove_scene_format_importer_plugin"></div>

`void` **remove_scene_format_importer_plugin** ( scene_format_importer: [`EditorSceneFormatImporter`](class_editorsceneformatimporter.md) )<div id="class_editorplugin_method_remove_scene_format_importer_plugin"></div>

Removes a scene format importer registered by [`add_scene_format_importer_plugin`](class_editorplugin.md#class_editorplugin_method_add_scene_format_importer_plugin).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorplugin_method_remove_scene_post_import_plugin"></div>

`void` **remove_scene_post_import_plugin** ( scene_import_plugin: [`EditorScenePostImportPlugin`](class_editorscenepostimportplugin.md) )<div id="class_editorplugin_method_remove_scene_post_import_plugin"></div>

Remove the [`EditorScenePostImportPlugin`](class_editorscenepostimportplugin.md), added with [`add_scene_post_import_plugin`](class_editorplugin.md#class_editorplugin_method_add_scene_post_import_plugin).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorplugin_method_remove_tool_menu_item"></div>

`void` **remove_tool_menu_item** ( name: [`String`](class_string.md) )<div id="class_editorplugin_method_remove_tool_menu_item"></div>

Removes a menu `name` from **Project > Tools**.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorplugin_method_remove_translation_parser_plugin"></div>

`void` **remove_translation_parser_plugin** ( parser: [`EditorTranslationParserPlugin`](class_editortranslationparserplugin.md) )<div id="class_editorplugin_method_remove_translation_parser_plugin"></div>

Removes a custom translation parser plugin registered by [`add_translation_parser_plugin`](class_editorplugin.md#class_editorplugin_method_add_translation_parser_plugin).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorplugin_method_remove_undo_redo_inspector_hook_callback"></div>

`void` **remove_undo_redo_inspector_hook_callback** ( callable: [`Callable`](class_callable.md) )<div id="class_editorplugin_method_remove_undo_redo_inspector_hook_callback"></div>

Removes a callback previously added by [`add_undo_redo_inspector_hook_callback`](class_editorplugin.md#class_editorplugin_method_add_undo_redo_inspector_hook_callback).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorplugin_method_set_dock_tab_icon"></div>

`void` **set_dock_tab_icon** ( control: [`Control`](class_control.md), icon: [`Texture2D`](class_texture2d.md) )<div id="class_editorplugin_method_set_dock_tab_icon"></div>

Sets the tab icon for the given control in a dock slot. Setting to `null` removes the icon.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorplugin_method_set_force_draw_over_forwarding_enabled"></div>

`void` **set_force_draw_over_forwarding_enabled** ( )<div id="class_editorplugin_method_set_force_draw_over_forwarding_enabled"></div>

Enables calling of [`_forward_canvas_force_draw_over_viewport`](class_editorplugin.md#class_editorplugin_private_method__forward_canvas_force_draw_over_viewport) for the 2D editor and [`_forward_3d_force_draw_over_viewport`](class_editorplugin.md#class_editorplugin_private_method__forward_3d_force_draw_over_viewport) for the 3D editor when their viewports are updated. You need to call this method only once and it will work permanently for this plugin.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorplugin_method_set_input_event_forwarding_always_enabled"></div>

`void` **set_input_event_forwarding_always_enabled** ( )<div id="class_editorplugin_method_set_input_event_forwarding_always_enabled"></div>

Use this method if you always want to receive inputs from 3D view screen inside [`_forward_3d_gui_input`](class_editorplugin.md#class_editorplugin_private_method__forward_3d_gui_input). It might be especially usable if your plugin will want to use raycast in the scene.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorplugin_method_update_overlays"></div>

[`int`](class_int.md) **update_overlays** ( ) const[^const]<div id="class_editorplugin_method_update_overlays"></div>

Updates the overlays of the 2D and 3D editor viewport. Causes methods [`_forward_canvas_draw_over_viewport`](class_editorplugin.md#class_editorplugin_private_method__forward_canvas_draw_over_viewport), [`_forward_canvas_force_draw_over_viewport`](class_editorplugin.md#class_editorplugin_private_method__forward_canvas_force_draw_over_viewport), [`_forward_3d_draw_over_viewport`](class_editorplugin.md#class_editorplugin_private_method__forward_3d_draw_over_viewport) and [`_forward_3d_force_draw_over_viewport`](class_editorplugin.md#class_editorplugin_private_method__forward_3d_force_draw_over_viewport) to be called.

[^virtual]: 本方法通常需要用户覆盖才能生效。
[^const]: 本方法无副作用，不会修改该实例的任何成员变量。
[^vararg]: 本方法除了能接受在此处描述的参数外，还能够继续接受任意数量的参数。
[^constructor]: 本方法用于构造某个类型。
[^static]: 调用本方法无需实例，可直接使用类名进行调用。
[^operator]: 本方法描述的是使用本类型作为左操作数的有效运算符。
[^bitfield]: 这个值是由下列位标志构成位掩码的整数。
[^void]: 无返回值。
