<!-- ⚠ 请勿编辑本文件 ⚠ -->
<!-- 本文档使用脚本从 WeDot 引擎源码仓库生成。 -->
<!-- 生成脚本：https://github.com/WeDot-Engine/WeDot/tree/4.3/doc/tools/make_md.py； -->
<!-- 原文件：https://github.com/WeDot-Engine/WeDot/tree/4.3/doc/classes/FileDialog.xml。 -->

<div id="_class_filedialog"></div>

# FileDialog

**继承：** [`ConfirmationDialog`](class_confirmationdialog.md) **<** [`AcceptDialog`](class_acceptdialog.md) **<** [`Window`](class_window.md) **<** [`Viewport`](class_viewport.md) **<** [`Node`](class_node.md) **<** [`Object`](class_object.md)

A dialog for selecting files or directories in the filesystem.

## 描述

**FileDialog** is a preset dialog used to choose files and directories in the filesystem. It supports filter masks. **FileDialog** automatically sets its window title according to the [`file_mode`](#class_filedialog_property_file_mode). If you want to use a custom title, disable this by setting [`mode_overrides_title`](#class_filedialog_property_mode_overrides_title) to `false`.

## 属性

| [Access](#enum_filedialog_access)                 | [`access`](#class_filedialog_property_access)                             | ``0``                                                                                  |
| [`String`](class_string.md)                       | [`current_dir`](#class_filedialog_property_current_dir)                   |                                                                                        |
| [`String`](class_string.md)                       | [`current_file`](#class_filedialog_property_current_file)                 |                                                                                        |
| [`String`](class_string.md)                       | [`current_path`](#class_filedialog_property_current_path)                 |                                                                                        |
| [`bool`](class_bool.md)                           | dialog_hide_on_ok                                                         | ``false`` (overrides [`AcceptDialog`](#class_acceptdialog_property_dialog_hide_on_ok)) |
| [FileMode](#enum_filedialog_filemode)             | [`file_mode`](#class_filedialog_property_file_mode)                       | ``4``                                                                                  |
| [`PackedStringArray`](class_packedstringarray.md) | [`filters`](#class_filedialog_property_filters)                           | ``PackedStringArray()``                                                                |
| [`bool`](class_bool.md)                           | [`mode_overrides_title`](#class_filedialog_property_mode_overrides_title) | ``true``                                                                               |
| [`int`](class_int.md)                             | [`option_count`](#class_filedialog_property_option_count)                 | ``0``                                                                                  |
| [`String`](class_string.md)                       | [`root_subfolder`](#class_filedialog_property_root_subfolder)             | ``""``                                                                                 |
| [`bool`](class_bool.md)                           | [`show_hidden_files`](#class_filedialog_property_show_hidden_files)       | ``false``                                                                              |
| [`String`](class_string.md)                       | title                                                                     | ``"Save a File"`` (overrides [`Window`](#class_window_property_title))                 |
| [`bool`](class_bool.md)                           | [`use_native_dialog`](#class_filedialog_property_use_native_dialog)       | ``false``                                                                              |

## 方法

| `void`                                            | [`add_filter`](#class_filedialog_method_add_filter) ( filter: [`String`](class_string.md), description: [`String`](class_string.md) = "" )                                                       |
| `void`                                            | [`add_option`](#class_filedialog_method_add_option) ( name: [`String`](class_string.md), values: [`PackedStringArray`](class_packedstringarray.md), default_value_index: [`int`](class_int.md) ) |
| `void`                                            | [`clear_filters`](#class_filedialog_method_clear_filters) ( )                                                                                                                                    |
| `void`                                            | [`deselect_all`](#class_filedialog_method_deselect_all) ( )                                                                                                                                      |
| [`LineEdit`](class_lineedit.md)                   | [`get_line_edit`](#class_filedialog_method_get_line_edit) ( )                                                                                                                                    |
| [`int`](class_int.md)                             | [`get_option_default`](#class_filedialog_method_get_option_default) ( option: [`int`](class_int.md) ) const[^const]                                                                              |
| [`String`](class_string.md)                       | [`get_option_name`](#class_filedialog_method_get_option_name) ( option: [`int`](class_int.md) ) const[^const]                                                                                    |
| [`PackedStringArray`](class_packedstringarray.md) | [`get_option_values`](#class_filedialog_method_get_option_values) ( option: [`int`](class_int.md) ) const[^const]                                                                                |
| [`Dictionary`](class_dictionary.md)               | [`get_selected_options`](#class_filedialog_method_get_selected_options) ( ) const[^const]                                                                                                        |
| [`VBoxContainer`](class_vboxcontainer.md)         | [`get_vbox`](#class_filedialog_method_get_vbox) ( )                                                                                                                                              |
| `void`                                            | [`invalidate`](#class_filedialog_method_invalidate) ( )                                                                                                                                          |
| `void`                                            | [`set_option_default`](#class_filedialog_method_set_option_default) ( option: [`int`](class_int.md), default_value_index: [`int`](class_int.md) )                                                |
| `void`                                            | [`set_option_name`](#class_filedialog_method_set_option_name) ( option: [`int`](class_int.md), name: [`String`](class_string.md) )                                                               |
| `void`                                            | [`set_option_values`](#class_filedialog_method_set_option_values) ( option: [`int`](class_int.md), values: [`PackedStringArray`](class_packedstringarray.md) )                                   |

## 主题属性

| [`Color`](class_color.md)         | [`file_disabled_color`](#class_filedialog_theme_color_file_disabled_color) | ``Color(1, 1, 1, 0.25)`` |
| [`Color`](class_color.md)         | [`file_icon_color`](#class_filedialog_theme_color_file_icon_color)         | ``Color(1, 1, 1, 1)``    |
| [`Color`](class_color.md)         | [`folder_icon_color`](#class_filedialog_theme_color_folder_icon_color)     | ``Color(1, 1, 1, 1)``    |
| [`Texture2D`](class_texture2d.md) | [`back_folder`](#class_filedialog_theme_icon_back_folder)                  |                          |
| [`Texture2D`](class_texture2d.md) | [`create_folder`](#class_filedialog_theme_icon_create_folder)              |                          |
| [`Texture2D`](class_texture2d.md) | [`file`](#class_filedialog_theme_icon_file)                                |                          |
| [`Texture2D`](class_texture2d.md) | [`folder`](#class_filedialog_theme_icon_folder)                            |                          |
| [`Texture2D`](class_texture2d.md) | [`forward_folder`](#class_filedialog_theme_icon_forward_folder)            |                          |
| [`Texture2D`](class_texture2d.md) | [`parent_folder`](#class_filedialog_theme_icon_parent_folder)              |                          |
| [`Texture2D`](class_texture2d.md) | [`reload`](#class_filedialog_theme_icon_reload)                            |                          |
| [`Texture2D`](class_texture2d.md) | [`toggle_hidden`](#class_filedialog_theme_icon_toggle_hidden)              |                          |

<!-- rst-class:: classref-section-separator -->

---

## 信号

<div id="_class_class_filedialog_signal_dir_selected"></div>

**dir_selected** ( dir: [`String`](class_string.md) ) <div id="class_filedialog_signal_dir_selected"></div>

Emitted when the user selects a directory.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_class_filedialog_signal_file_selected"></div>

**file_selected** ( path: [`String`](class_string.md) ) <div id="class_filedialog_signal_file_selected"></div>

Emitted when the user selects a file by double-clicking it or pressing the **OK** button.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_class_filedialog_signal_files_selected"></div>

**files_selected** ( paths: [`PackedStringArray`](class_packedstringarray.md) ) <div id="class_filedialog_signal_files_selected"></div>

Emitted when the user selects multiple files.

<!-- rst-class:: classref-section-separator -->

---

## 枚举

<div id="_class_enum_filedialog_filemode"></div>

enum **FileMode**: <div id="enum_filedialog_filemode"></div>

<div id="_class_filedialog_constant_file_mode_open_file"></div>

[FileMode](#enum_filedialog_filemode) **FILE_MODE_OPEN_FILE** = ``0``

The dialog allows selecting one, and only one file.

<div id="_class_filedialog_constant_file_mode_open_files"></div>

[FileMode](#enum_filedialog_filemode) **FILE_MODE_OPEN_FILES** = ``1``

The dialog allows selecting multiple files.

<div id="_class_filedialog_constant_file_mode_open_dir"></div>

[FileMode](#enum_filedialog_filemode) **FILE_MODE_OPEN_DIR** = ``2``

The dialog only allows selecting a directory, disallowing the selection of any file.

<div id="_class_filedialog_constant_file_mode_open_any"></div>

[FileMode](#enum_filedialog_filemode) **FILE_MODE_OPEN_ANY** = ``3``

The dialog allows selecting one file or directory.

<div id="_class_filedialog_constant_file_mode_save_file"></div>

[FileMode](#enum_filedialog_filemode) **FILE_MODE_SAVE_FILE** = ``4``

The dialog will warn when a file exists.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_enum_filedialog_access"></div>

enum **Access**: <div id="enum_filedialog_access"></div>

<div id="_class_filedialog_constant_access_resources"></div>

[Access](#enum_filedialog_access) **ACCESS_RESOURCES** = ``0``

The dialog only allows accessing files under the [`Resource`](class_resource.md) path (`res://`).

<div id="_class_filedialog_constant_access_userdata"></div>

[Access](#enum_filedialog_access) **ACCESS_USERDATA** = ``1``

The dialog only allows accessing files under user data path (`user://`).

<div id="_class_filedialog_constant_access_filesystem"></div>

[Access](#enum_filedialog_access) **ACCESS_FILESYSTEM** = ``2``

The dialog allows accessing files on the whole file system.

<!-- rst-class:: classref-section-separator -->

---

## 属性说明

<div id="_class_filedialog_property_access"></div>

[Access](#enum_filedialog_access) **access** = ``0`` <div id="class_filedialog_property_access"></div>

- `void` **set_access** ( value: [Access](#enum_filedialog_access) )
- [Access](#enum_filedialog_access) **get_access** ( )

The file system access scope. See [Access](#enum_filedialog_access) constants.

 **Warning:** In Web builds, FileDialog cannot access the host file system. In sandboxed Linux and macOS environments, [`use_native_dialog`](#class_filedialog_property_use_native_dialog) is automatically used to allow limited access to host file system.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_filedialog_property_current_dir"></div>

[`String`](class_string.md) **current_dir** <div id="class_filedialog_property_current_dir"></div>

- `void` **set_current_dir** ( value: [`String`](class_string.md) )
- [`String`](class_string.md) **get_current_dir** ( )

The current working directory of the file dialog.

 **Note:** For native file dialogs, this property is only treated as a hint and may not be respected by specific OS implementations.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_filedialog_property_current_file"></div>

[`String`](class_string.md) **current_file** <div id="class_filedialog_property_current_file"></div>

- `void` **set_current_file** ( value: [`String`](class_string.md) )
- [`String`](class_string.md) **get_current_file** ( )

The currently selected file of the file dialog.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_filedialog_property_current_path"></div>

[`String`](class_string.md) **current_path** <div id="class_filedialog_property_current_path"></div>

- `void` **set_current_path** ( value: [`String`](class_string.md) )
- [`String`](class_string.md) **get_current_path** ( )

The currently selected file path of the file dialog.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_filedialog_property_file_mode"></div>

[FileMode](#enum_filedialog_filemode) **file_mode** = ``4`` <div id="class_filedialog_property_file_mode"></div>

- `void` **set_file_mode** ( value: [FileMode](#enum_filedialog_filemode) )
- [FileMode](#enum_filedialog_filemode) **get_file_mode** ( )

The dialog's open or save mode, which affects the selection behavior. See [FileMode](#enum_filedialog_filemode).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_filedialog_property_filters"></div>

[`PackedStringArray`](class_packedstringarray.md) **filters** = ``PackedStringArray()`` <div id="class_filedialog_property_filters"></div>

- `void` **set_filters** ( value: [`PackedStringArray`](class_packedstringarray.md) )
- [`PackedStringArray`](class_packedstringarray.md) **get_filters** ( )

The available file type filters. Each filter string in the array should be formatted like this: `*.txt,*.doc;Text Files`. The description text of the filter is optional and can be omitted.

**Note:** The returned array is *copied* and any changes to it will not update the original property value. See [`PackedStringArray`](class_packedstringarray.md) for more details.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_filedialog_property_mode_overrides_title"></div>

[`bool`](class_bool.md) **mode_overrides_title** = ``true`` <div id="class_filedialog_property_mode_overrides_title"></div>

- `void` **set_mode_overrides_title** ( value: [`bool`](class_bool.md) )
- [`bool`](class_bool.md) **is_mode_overriding_title** ( )

If `true`, changing the [`file_mode`](#class_filedialog_property_file_mode) property will set the window title accordingly (e.g. setting [`file_mode`](#class_filedialog_property_file_mode) to [`FILE_MODE_OPEN_FILE`](#class_filedialog_constant_file_mode_open_file) will change the window title to "Open a File").

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_filedialog_property_option_count"></div>

[`int`](class_int.md) **option_count** = ``0`` <div id="class_filedialog_property_option_count"></div>

- `void` **set_option_count** ( value: [`int`](class_int.md) )
- [`int`](class_int.md) **get_option_count** ( )

The number of additional [`OptionButton`](class_optionbutton.md) s and [`CheckBox`](class_checkbox.md) es in the dialog.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_filedialog_property_root_subfolder"></div>

[`String`](class_string.md) **root_subfolder** = ``""`` <div id="class_filedialog_property_root_subfolder"></div>

- `void` **set_root_subfolder** ( value: [`String`](class_string.md) )
- [`String`](class_string.md) **get_root_subfolder** ( )

If non-empty, the given sub-folder will be "root" of this **FileDialog**, i.e. user won't be able to go to its parent directory.

 **Note:** This property is ignored by native file dialogs.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_filedialog_property_show_hidden_files"></div>

[`bool`](class_bool.md) **show_hidden_files** = ``false`` <div id="class_filedialog_property_show_hidden_files"></div>

- `void` **set_show_hidden_files** ( value: [`bool`](class_bool.md) )
- [`bool`](class_bool.md) **is_showing_hidden_files** ( )

If `true`, the dialog will show hidden files.

 **Note:** This property is ignored by native file dialogs on Linux.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_filedialog_property_use_native_dialog"></div>

[`bool`](class_bool.md) **use_native_dialog** = ``false`` <div id="class_filedialog_property_use_native_dialog"></div>

- `void` **set_use_native_dialog** ( value: [`bool`](class_bool.md) )
- [`bool`](class_bool.md) **get_use_native_dialog** ( )

If `true`, [`access`](#class_filedialog_property_access) is set to [`ACCESS_FILESYSTEM`](#class_filedialog_constant_access_filesystem), and it is supported by the current [`DisplayServer`](class_displayserver.md), OS native dialog will be used instead of custom one.

 **Note:** On Linux and macOS, sandboxed apps always use native dialogs to access the host file system.

 **Note:** On macOS, sandboxed apps will save security-scoped bookmarks to retain access to the opened folders across multiple sessions. Use [`OS.get_granted_permissions`](#class_os_method_get_granted_permissions) to get a list of saved bookmarks.

 **Note:** Native dialogs are isolated from the base process, file dialog properties can't be modified once the dialog is shown.

<!-- rst-class:: classref-section-separator -->

---

## 方法说明

<div id="_class_filedialog_method_add_filter"></div>

`void` **add_filter** ( filter: [`String`](class_string.md), description: [`String`](class_string.md) = "" )<div id="class_filedialog_method_add_filter"></div>

Adds a comma-delimited file name `filter` option to the **FileDialog** with an optional `description`, which restricts what files can be picked.

A `filter` should be of the form `"filename.extension"`, where filename and extension can be `*` to match any string. Filters starting with `.` (i.e. empty filenames) are not allowed.

For example, a `filter` of `"*.png, *.jpg"` and a `description` of `"Images"` results in filter text "Images (*.png, *.jpg)".

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_filedialog_method_add_option"></div>

`void` **add_option** ( name: [`String`](class_string.md), values: [`PackedStringArray`](class_packedstringarray.md), default_value_index: [`int`](class_int.md) )<div id="class_filedialog_method_add_option"></div>

Adds an additional [`OptionButton`](class_optionbutton.md) to the file dialog. If `values` is empty, a [`CheckBox`](class_checkbox.md) is added instead.

 `default_value_index` should be an index of the value in the `values`. If `values` is empty it should be either `1` (checked), or `0` (unchecked).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_filedialog_method_clear_filters"></div>

`void` **clear_filters** ( )<div id="class_filedialog_method_clear_filters"></div>

Clear all the added filters in the dialog.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_filedialog_method_deselect_all"></div>

`void` **deselect_all** ( )<div id="class_filedialog_method_deselect_all"></div>

Clear all currently selected items in the dialog.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_filedialog_method_get_line_edit"></div>

[`LineEdit`](class_lineedit.md) **get_line_edit** ( )<div id="class_filedialog_method_get_line_edit"></div>

Returns the LineEdit for the selected file.

 **Warning:** This is a required internal node, removing and freeing it may cause a crash. If you wish to hide it or any of its children, use their [`CanvasItem.visible`](#class_canvasitem_property_visible) property.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_filedialog_method_get_option_default"></div>

[`int`](class_int.md) **get_option_default** ( option: [`int`](class_int.md) ) const[^const]<div id="class_filedialog_method_get_option_default"></div>

Returns the default value index of the [`OptionButton`](class_optionbutton.md) or [`CheckBox`](class_checkbox.md) with index `option`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_filedialog_method_get_option_name"></div>

[`String`](class_string.md) **get_option_name** ( option: [`int`](class_int.md) ) const[^const]<div id="class_filedialog_method_get_option_name"></div>

Returns the name of the [`OptionButton`](class_optionbutton.md) or [`CheckBox`](class_checkbox.md) with index `option`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_filedialog_method_get_option_values"></div>

[`PackedStringArray`](class_packedstringarray.md) **get_option_values** ( option: [`int`](class_int.md) ) const[^const]<div id="class_filedialog_method_get_option_values"></div>

Returns an array of values of the [`OptionButton`](class_optionbutton.md) with index `option`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_filedialog_method_get_selected_options"></div>

[`Dictionary`](class_dictionary.md) **get_selected_options** ( ) const[^const]<div id="class_filedialog_method_get_selected_options"></div>

Returns a [`Dictionary`](class_dictionary.md) with the selected values of the additional [`OptionButton`](class_optionbutton.md) s and/or [`CheckBox`](class_checkbox.md) es. [`Dictionary`](class_dictionary.md) keys are names and values are selected value indices.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_filedialog_method_get_vbox"></div>

[`VBoxContainer`](class_vboxcontainer.md) **get_vbox** ( )<div id="class_filedialog_method_get_vbox"></div>

Returns the vertical box container of the dialog, custom controls can be added to it.

 **Warning:** This is a required internal node, removing and freeing it may cause a crash. If you wish to hide it or any of its children, use their [`CanvasItem.visible`](#class_canvasitem_property_visible) property.

 **Note:** Changes to this node are ignored by native file dialogs, use [`add_option`](#class_filedialog_method_add_option) to add custom elements to the dialog instead.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_filedialog_method_invalidate"></div>

`void` **invalidate** ( )<div id="class_filedialog_method_invalidate"></div>

Invalidate and update the current dialog content list.

 **Note:** This method does nothing on native file dialogs.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_filedialog_method_set_option_default"></div>

`void` **set_option_default** ( option: [`int`](class_int.md), default_value_index: [`int`](class_int.md) )<div id="class_filedialog_method_set_option_default"></div>

Sets the default value index of the [`OptionButton`](class_optionbutton.md) or [`CheckBox`](class_checkbox.md) with index `option`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_filedialog_method_set_option_name"></div>

`void` **set_option_name** ( option: [`int`](class_int.md), name: [`String`](class_string.md) )<div id="class_filedialog_method_set_option_name"></div>

Sets the name of the [`OptionButton`](class_optionbutton.md) or [`CheckBox`](class_checkbox.md) with index `option`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_filedialog_method_set_option_values"></div>

`void` **set_option_values** ( option: [`int`](class_int.md), values: [`PackedStringArray`](class_packedstringarray.md) )<div id="class_filedialog_method_set_option_values"></div>

Sets the option values of the [`OptionButton`](class_optionbutton.md) with index `option`.

<!-- rst-class:: classref-section-separator -->

---

## 主题属性说明

<div id="_class_filedialog_theme_color_file_disabled_color"></div>

[`Color`](class_color.md) **file_disabled_color** = ``Color(1, 1, 1, 0.25)`` <div id="class_filedialog_theme_color_file_disabled_color"></div>

The color tint for disabled files (when the **FileDialog** is used in open folder mode).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_filedialog_theme_color_file_icon_color"></div>

[`Color`](class_color.md) **file_icon_color** = ``Color(1, 1, 1, 1)`` <div id="class_filedialog_theme_color_file_icon_color"></div>

The color modulation applied to the file icon.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_filedialog_theme_color_folder_icon_color"></div>

[`Color`](class_color.md) **folder_icon_color** = ``Color(1, 1, 1, 1)`` <div id="class_filedialog_theme_color_folder_icon_color"></div>

The color modulation applied to the folder icon.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_filedialog_theme_icon_back_folder"></div>

[`Texture2D`](class_texture2d.md) **back_folder** <div id="class_filedialog_theme_icon_back_folder"></div>

Custom icon for the back arrow.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_filedialog_theme_icon_create_folder"></div>

[`Texture2D`](class_texture2d.md) **create_folder** <div id="class_filedialog_theme_icon_create_folder"></div>

Custom icon for the create folder button.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_filedialog_theme_icon_file"></div>

[`Texture2D`](class_texture2d.md) **file** <div id="class_filedialog_theme_icon_file"></div>

Custom icon for files.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_filedialog_theme_icon_folder"></div>

[`Texture2D`](class_texture2d.md) **folder** <div id="class_filedialog_theme_icon_folder"></div>

Custom icon for folders.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_filedialog_theme_icon_forward_folder"></div>

[`Texture2D`](class_texture2d.md) **forward_folder** <div id="class_filedialog_theme_icon_forward_folder"></div>

Custom icon for the forward arrow.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_filedialog_theme_icon_parent_folder"></div>

[`Texture2D`](class_texture2d.md) **parent_folder** <div id="class_filedialog_theme_icon_parent_folder"></div>

Custom icon for the parent folder arrow.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_filedialog_theme_icon_reload"></div>

[`Texture2D`](class_texture2d.md) **reload** <div id="class_filedialog_theme_icon_reload"></div>

Custom icon for the reload button.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_filedialog_theme_icon_toggle_hidden"></div>

[`Texture2D`](class_texture2d.md) **toggle_hidden** <div id="class_filedialog_theme_icon_toggle_hidden"></div>

Custom icon for the toggle hidden button.

[^virtual]: 本方法通常需要用户覆盖才能生效。
[^const]: 本方法无副作用，不会修改该实例的任何成员变量。
[^vararg]: 本方法除了能接受在此处描述的参数外，还能够继续接受任意数量的参数。
[^constructor]: 本方法用于构造某个类型。
[^static]: 调用本方法无需实例，可直接使用类名进行调用。
[^operator]: 本方法描述的是使用本类型作为左操作数的有效运算符。
[^bitfield]: 这个值是由下列位标志构成位掩码的整数。
[^void]: 无返回值。
