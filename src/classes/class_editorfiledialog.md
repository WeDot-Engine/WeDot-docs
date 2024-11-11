<!-- ⚠ 请勿编辑本文件 ⚠ -->
<!-- 本文档使用脚本从 WeDot 引擎源码仓库生成。 -->
<!-- 生成脚本：https://github.com/WeDot-Engine/WeDot/tree/master/doc/tools/make_md.py； -->
<!-- 原文件：https://github.com/WeDot-Engine/WeDot/tree/master/doc/classes/EditorFileDialog.xml。 -->

<div id="_class_editorfiledialog"></div>

# EditorFileDialog

**继承：** [`ConfirmationDialog`](class_confirmationdialog.md) **<** [`AcceptDialog`](class_acceptdialog.md) **<** [`Window`](class_window.md) **<** [`Viewport`](class_viewport.md) **<** [`Node`](class_node.md) **<** [`Object`](class_object.md)

A modified version of [`FileDialog`](class_filedialog.md) used by the editor.

## 描述

**EditorFileDialog** is an enhanced version of [`FileDialog`](class_filedialog.md) available only to editor plugins. Additional features include list of favorited/recent files and the ability to see files as thumbnails grid instead of list.

## 属性

|||
|:-:|:--|
| [Access](#enum_editorfiledialog_access)           | [`access`](class_editorfiledialog.md#class_editorfiledialog_property_access)                                       | ``0``                                                                                                       |
| [`String`](class_string.md)                       | [`current_dir`](class_editorfiledialog.md#class_editorfiledialog_property_current_dir)                             |                                                                                                             |
| [`String`](class_string.md)                       | [`current_file`](class_editorfiledialog.md#class_editorfiledialog_property_current_file)                           |                                                                                                             |
| [`String`](class_string.md)                       | [`current_path`](class_editorfiledialog.md#class_editorfiledialog_property_current_path)                           |                                                                                                             |
| [`bool`](class_bool.md)                           | dialog_hide_on_ok                                                                                                  | ``false`` (overrides [`AcceptDialog`](class_acceptdialog.md#class_acceptdialog_property_dialog_hide_on_ok)) |
| [`bool`](class_bool.md)                           | [`disable_overwrite_warning`](class_editorfiledialog.md#class_editorfiledialog_property_disable_overwrite_warning) | ``false``                                                                                                   |
| [DisplayMode](#enum_editorfiledialog_displaymode) | [`display_mode`](class_editorfiledialog.md#class_editorfiledialog_property_display_mode)                           | ``0``                                                                                                       |
| [FileMode](#enum_editorfiledialog_filemode)       | [`file_mode`](class_editorfiledialog.md#class_editorfiledialog_property_file_mode)                                 | ``4``                                                                                                       |
| [`PackedStringArray`](class_packedstringarray.md) | [`filters`](class_editorfiledialog.md#class_editorfiledialog_property_filters)                                     | ``PackedStringArray()``                                                                                     |
| [`int`](class_int.md)                             | [`option_count`](class_editorfiledialog.md#class_editorfiledialog_property_option_count)                           | ``0``                                                                                                       |
| [`bool`](class_bool.md)                           | [`show_hidden_files`](class_editorfiledialog.md#class_editorfiledialog_property_show_hidden_files)                 | ``false``                                                                                                   |
| [`String`](class_string.md)                       | title                                                                                                              | ``"Save a File"`` (overrides [`Window`](class_window.md#class_window_property_title))                       |

## 方法

|||
|:-:|:--|
| `void`                                            | [`add_filter`](class_editorfiledialog.md#class_editorfiledialog_method_add_filter) ( filter: [`String`](class_string.md), description: [`String`](class_string.md) = "" )                                                       |
| `void`                                            | [`add_option`](class_editorfiledialog.md#class_editorfiledialog_method_add_option) ( name: [`String`](class_string.md), values: [`PackedStringArray`](class_packedstringarray.md), default_value_index: [`int`](class_int.md) ) |
| `void`                                            | [`add_side_menu`](class_editorfiledialog.md#class_editorfiledialog_method_add_side_menu) ( menu: [`Control`](class_control.md), title: [`String`](class_string.md) = "" )                                                       |
| `void`                                            | [`clear_filters`](class_editorfiledialog.md#class_editorfiledialog_method_clear_filters) ( )                                                                                                                                    |
| [`LineEdit`](class_lineedit.md)                   | [`get_line_edit`](class_editorfiledialog.md#class_editorfiledialog_method_get_line_edit) ( )                                                                                                                                    |
| [`int`](class_int.md)                             | [`get_option_default`](class_editorfiledialog.md#class_editorfiledialog_method_get_option_default) ( option: [`int`](class_int.md) ) const[^const]                                                                              |
| [`String`](class_string.md)                       | [`get_option_name`](class_editorfiledialog.md#class_editorfiledialog_method_get_option_name) ( option: [`int`](class_int.md) ) const[^const]                                                                                    |
| [`PackedStringArray`](class_packedstringarray.md) | [`get_option_values`](class_editorfiledialog.md#class_editorfiledialog_method_get_option_values) ( option: [`int`](class_int.md) ) const[^const]                                                                                |
| [`Dictionary`](class_dictionary.md)               | [`get_selected_options`](class_editorfiledialog.md#class_editorfiledialog_method_get_selected_options) ( ) const[^const]                                                                                                        |
| [`VBoxContainer`](class_vboxcontainer.md)         | [`get_vbox`](class_editorfiledialog.md#class_editorfiledialog_method_get_vbox) ( )                                                                                                                                              |
| `void`                                            | [`invalidate`](class_editorfiledialog.md#class_editorfiledialog_method_invalidate) ( )                                                                                                                                          |
| `void`                                            | [`popup_file_dialog`](class_editorfiledialog.md#class_editorfiledialog_method_popup_file_dialog) ( )                                                                                                                            |
| `void`                                            | [`set_option_default`](class_editorfiledialog.md#class_editorfiledialog_method_set_option_default) ( option: [`int`](class_int.md), default_value_index: [`int`](class_int.md) )                                                |
| `void`                                            | [`set_option_name`](class_editorfiledialog.md#class_editorfiledialog_method_set_option_name) ( option: [`int`](class_int.md), name: [`String`](class_string.md) )                                                               |
| `void`                                            | [`set_option_values`](class_editorfiledialog.md#class_editorfiledialog_method_set_option_values) ( option: [`int`](class_int.md), values: [`PackedStringArray`](class_packedstringarray.md) )                                   |

<!-- rst-class:: classref-section-separator -->

---

## 信号

<div id="_class_class_editorfiledialog_signal_dir_selected"></div>

**dir_selected** ( dir: [`String`](class_string.md) ) <div id="class_editorfiledialog_signal_dir_selected"></div>

Emitted when a directory is selected.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_class_editorfiledialog_signal_file_selected"></div>

**file_selected** ( path: [`String`](class_string.md) ) <div id="class_editorfiledialog_signal_file_selected"></div>

Emitted when a file is selected.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_class_editorfiledialog_signal_files_selected"></div>

**files_selected** ( paths: [`PackedStringArray`](class_packedstringarray.md) ) <div id="class_editorfiledialog_signal_files_selected"></div>

Emitted when multiple files are selected.

<!-- rst-class:: classref-section-separator -->

---

## 枚举

<div id="_class_enum_editorfiledialog_filemode"></div>

enum **FileMode**: <div id="enum_editorfiledialog_filemode"></div>

<div id="_class_editorfiledialog_constant_file_mode_open_file"></div>

[FileMode](#enum_editorfiledialog_filemode) **FILE_MODE_OPEN_FILE** = ``0``

The **EditorFileDialog** can select only one file. Accepting the window will open the file.

<div id="_class_editorfiledialog_constant_file_mode_open_files"></div>

[FileMode](#enum_editorfiledialog_filemode) **FILE_MODE_OPEN_FILES** = ``1``

The **EditorFileDialog** can select multiple files. Accepting the window will open all files.

<div id="_class_editorfiledialog_constant_file_mode_open_dir"></div>

[FileMode](#enum_editorfiledialog_filemode) **FILE_MODE_OPEN_DIR** = ``2``

The **EditorFileDialog** can select only one directory. Accepting the window will open the directory.

<div id="_class_editorfiledialog_constant_file_mode_open_any"></div>

[FileMode](#enum_editorfiledialog_filemode) **FILE_MODE_OPEN_ANY** = ``3``

The **EditorFileDialog** can select a file or directory. Accepting the window will open it.

<div id="_class_editorfiledialog_constant_file_mode_save_file"></div>

[FileMode](#enum_editorfiledialog_filemode) **FILE_MODE_SAVE_FILE** = ``4``

The **EditorFileDialog** can select only one file. Accepting the window will save the file.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_enum_editorfiledialog_access"></div>

enum **Access**: <div id="enum_editorfiledialog_access"></div>

<div id="_class_editorfiledialog_constant_access_resources"></div>

[Access](#enum_editorfiledialog_access) **ACCESS_RESOURCES** = ``0``

The **EditorFileDialog** can only view `res://` directory contents.

<div id="_class_editorfiledialog_constant_access_userdata"></div>

[Access](#enum_editorfiledialog_access) **ACCESS_USERDATA** = ``1``

The **EditorFileDialog** can only view `user://` directory contents.

<div id="_class_editorfiledialog_constant_access_filesystem"></div>

[Access](#enum_editorfiledialog_access) **ACCESS_FILESYSTEM** = ``2``

The **EditorFileDialog** can view the entire local file system.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_enum_editorfiledialog_displaymode"></div>

enum **DisplayMode**: <div id="enum_editorfiledialog_displaymode"></div>

<div id="_class_editorfiledialog_constant_display_thumbnails"></div>

[DisplayMode](#enum_editorfiledialog_displaymode) **DISPLAY_THUMBNAILS** = ``0``

The **EditorFileDialog** displays resources as thumbnails.

<div id="_class_editorfiledialog_constant_display_list"></div>

[DisplayMode](#enum_editorfiledialog_displaymode) **DISPLAY_LIST** = ``1``

The **EditorFileDialog** displays resources as a list of filenames.

<!-- rst-class:: classref-section-separator -->

---

## 属性说明

<div id="_class_editorfiledialog_property_access"></div>

[Access](#enum_editorfiledialog_access) **access** = ``0`` <div id="class_editorfiledialog_property_access"></div>

- `void` **set_access** ( value: [Access](#enum_editorfiledialog_access) )
- [Access](#enum_editorfiledialog_access) **get_access** ( )

The location from which the user may select a file, including `res://`, `user://`, and the local file system.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorfiledialog_property_current_dir"></div>

[`String`](class_string.md) **current_dir** <div id="class_editorfiledialog_property_current_dir"></div>

- `void` **set_current_dir** ( value: [`String`](class_string.md) )
- [`String`](class_string.md) **get_current_dir** ( )

The currently occupied directory.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorfiledialog_property_current_file"></div>

[`String`](class_string.md) **current_file** <div id="class_editorfiledialog_property_current_file"></div>

- `void` **set_current_file** ( value: [`String`](class_string.md) )
- [`String`](class_string.md) **get_current_file** ( )

The currently selected file.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorfiledialog_property_current_path"></div>

[`String`](class_string.md) **current_path** <div id="class_editorfiledialog_property_current_path"></div>

- `void` **set_current_path** ( value: [`String`](class_string.md) )
- [`String`](class_string.md) **get_current_path** ( )

The file system path in the address bar.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorfiledialog_property_disable_overwrite_warning"></div>

[`bool`](class_bool.md) **disable_overwrite_warning** = ``false`` <div id="class_editorfiledialog_property_disable_overwrite_warning"></div>

- `void` **set_disable_overwrite_warning** ( value: [`bool`](class_bool.md) )
- [`bool`](class_bool.md) **is_overwrite_warning_disabled** ( )

If `true`, the **EditorFileDialog** will not warn the user before overwriting files.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorfiledialog_property_display_mode"></div>

[DisplayMode](#enum_editorfiledialog_displaymode) **display_mode** = ``0`` <div id="class_editorfiledialog_property_display_mode"></div>

- `void` **set_display_mode** ( value: [DisplayMode](#enum_editorfiledialog_displaymode) )
- [DisplayMode](#enum_editorfiledialog_displaymode) **get_display_mode** ( )

The view format in which the **EditorFileDialog** displays resources to the user.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorfiledialog_property_file_mode"></div>

[FileMode](#enum_editorfiledialog_filemode) **file_mode** = ``4`` <div id="class_editorfiledialog_property_file_mode"></div>

- `void` **set_file_mode** ( value: [FileMode](#enum_editorfiledialog_filemode) )
- [FileMode](#enum_editorfiledialog_filemode) **get_file_mode** ( )

The dialog's open or save mode, which affects the selection behavior. See [FileMode](#enum_editorfiledialog_filemode).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorfiledialog_property_filters"></div>

[`PackedStringArray`](class_packedstringarray.md) **filters** = ``PackedStringArray()`` <div id="class_editorfiledialog_property_filters"></div>

- `void` **set_filters** ( value: [`PackedStringArray`](class_packedstringarray.md) )
- [`PackedStringArray`](class_packedstringarray.md) **get_filters** ( )

The available file type filters. For example, this shows only `.png` and `.gd` files: `set_filters(PackedStringArray(["*.png ; PNG Images","*.gd ; GDScript Files"]))`. Multiple file types can also be specified in a single filter. `"*.png, *.jpg, *.jpeg ; Supported Images"` will show both PNG and JPEG files when selected.

**Note:** The returned array is *copied* and any changes to it will not update the original property value. See [`PackedStringArray`](class_packedstringarray.md) for more details.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorfiledialog_property_option_count"></div>

[`int`](class_int.md) **option_count** = ``0`` <div id="class_editorfiledialog_property_option_count"></div>

- `void` **set_option_count** ( value: [`int`](class_int.md) )
- [`int`](class_int.md) **get_option_count** ( )

The number of additional [`OptionButton`](class_optionbutton.md) s and [`CheckBox`](class_checkbox.md) es in the dialog.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorfiledialog_property_show_hidden_files"></div>

[`bool`](class_bool.md) **show_hidden_files** = ``false`` <div id="class_editorfiledialog_property_show_hidden_files"></div>

- `void` **set_show_hidden_files** ( value: [`bool`](class_bool.md) )
- [`bool`](class_bool.md) **is_showing_hidden_files** ( )

If `true`, hidden files and directories will be visible in the **EditorFileDialog**. This property is synchronized with [`EditorSettings.filesystem/file_dialog/show_hidden_files`](class_editorsettings.md#class_editorsettings_property_filesystem/file_dialog/show_hidden_files).

<!-- rst-class:: classref-section-separator -->

---

## 方法说明

<div id="_class_editorfiledialog_method_add_filter"></div>

`void` **add_filter** ( filter: [`String`](class_string.md), description: [`String`](class_string.md) = "" )<div id="class_editorfiledialog_method_add_filter"></div>

Adds a comma-delimited file name `filter` option to the **EditorFileDialog** with an optional `description`, which restricts what files can be picked.

A `filter` should be of the form `"filename.extension"`, where filename and extension can be `*` to match any string. Filters starting with `.` (i.e. empty filenames) are not allowed.

For example, a `filter` of `"*.tscn, *.scn"` and a `description` of `"Scenes"` results in filter text "Scenes (*.tscn, *.scn)".

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorfiledialog_method_add_option"></div>

`void` **add_option** ( name: [`String`](class_string.md), values: [`PackedStringArray`](class_packedstringarray.md), default_value_index: [`int`](class_int.md) )<div id="class_editorfiledialog_method_add_option"></div>

Adds an additional [`OptionButton`](class_optionbutton.md) to the file dialog. If `values` is empty, a [`CheckBox`](class_checkbox.md) is added instead.

 `default_value_index` should be an index of the value in the `values`. If `values` is empty it should be either `1` (checked), or `0` (unchecked).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorfiledialog_method_add_side_menu"></div>

`void` **add_side_menu** ( menu: [`Control`](class_control.md), title: [`String`](class_string.md) = "" )<div id="class_editorfiledialog_method_add_side_menu"></div>

Adds the given `menu` to the side of the file dialog with the given `title` text on top. Only one side menu is allowed.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorfiledialog_method_clear_filters"></div>

`void` **clear_filters** ( )<div id="class_editorfiledialog_method_clear_filters"></div>

Removes all filters except for "All Files (\*)".

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorfiledialog_method_get_line_edit"></div>

[`LineEdit`](class_lineedit.md) **get_line_edit** ( )<div id="class_editorfiledialog_method_get_line_edit"></div>

Returns the LineEdit for the selected file.

 **Warning:** This is a required internal node, removing and freeing it may cause a crash. If you wish to hide it or any of its children, use their [`CanvasItem.visible`](class_canvasitem.md#class_canvasitem_property_visible) property.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorfiledialog_method_get_option_default"></div>

[`int`](class_int.md) **get_option_default** ( option: [`int`](class_int.md) ) const[^const]<div id="class_editorfiledialog_method_get_option_default"></div>

Returns the default value index of the [`OptionButton`](class_optionbutton.md) or [`CheckBox`](class_checkbox.md) with index `option`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorfiledialog_method_get_option_name"></div>

[`String`](class_string.md) **get_option_name** ( option: [`int`](class_int.md) ) const[^const]<div id="class_editorfiledialog_method_get_option_name"></div>

Returns the name of the [`OptionButton`](class_optionbutton.md) or [`CheckBox`](class_checkbox.md) with index `option`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorfiledialog_method_get_option_values"></div>

[`PackedStringArray`](class_packedstringarray.md) **get_option_values** ( option: [`int`](class_int.md) ) const[^const]<div id="class_editorfiledialog_method_get_option_values"></div>

Returns an array of values of the [`OptionButton`](class_optionbutton.md) with index `option`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorfiledialog_method_get_selected_options"></div>

[`Dictionary`](class_dictionary.md) **get_selected_options** ( ) const[^const]<div id="class_editorfiledialog_method_get_selected_options"></div>

Returns a [`Dictionary`](class_dictionary.md) with the selected values of the additional [`OptionButton`](class_optionbutton.md) s and/or [`CheckBox`](class_checkbox.md) es. [`Dictionary`](class_dictionary.md) keys are names and values are selected value indices.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorfiledialog_method_get_vbox"></div>

[`VBoxContainer`](class_vboxcontainer.md) **get_vbox** ( )<div id="class_editorfiledialog_method_get_vbox"></div>

Returns the [`VBoxContainer`](class_vboxcontainer.md) used to display the file system.

 **Warning:** This is a required internal node, removing and freeing it may cause a crash. If you wish to hide it or any of its children, use their [`CanvasItem.visible`](class_canvasitem.md#class_canvasitem_property_visible) property.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorfiledialog_method_invalidate"></div>

`void` **invalidate** ( )<div id="class_editorfiledialog_method_invalidate"></div>

Notify the **EditorFileDialog** that its view of the data is no longer accurate. Updates the view contents on next view update.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorfiledialog_method_popup_file_dialog"></div>

`void` **popup_file_dialog** ( )<div id="class_editorfiledialog_method_popup_file_dialog"></div>

Shows the **EditorFileDialog** at the default size and position for file dialogs in the editor, and selects the file name if there is a current file.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorfiledialog_method_set_option_default"></div>

`void` **set_option_default** ( option: [`int`](class_int.md), default_value_index: [`int`](class_int.md) )<div id="class_editorfiledialog_method_set_option_default"></div>

Sets the default value index of the [`OptionButton`](class_optionbutton.md) or [`CheckBox`](class_checkbox.md) with index `option`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorfiledialog_method_set_option_name"></div>

`void` **set_option_name** ( option: [`int`](class_int.md), name: [`String`](class_string.md) )<div id="class_editorfiledialog_method_set_option_name"></div>

Sets the name of the [`OptionButton`](class_optionbutton.md) or [`CheckBox`](class_checkbox.md) with index `option`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorfiledialog_method_set_option_values"></div>

`void` **set_option_values** ( option: [`int`](class_int.md), values: [`PackedStringArray`](class_packedstringarray.md) )<div id="class_editorfiledialog_method_set_option_values"></div>

Sets the option values of the [`OptionButton`](class_optionbutton.md) with index `option`.

[^virtual]: 本方法通常需要用户覆盖才能生效。
[^const]: 本方法无副作用，不会修改该实例的任何成员变量。
[^vararg]: 本方法除了能接受在此处描述的参数外，还能够继续接受任意数量的参数。
[^constructor]: 本方法用于构造某个类型。
[^static]: 调用本方法无需实例，可直接使用类名进行调用。
[^operator]: 本方法描述的是使用本类型作为左操作数的有效运算符。
[^bitfield]: 这个值是由下列位标志构成位掩码的整数。
[^void]: 无返回值。
