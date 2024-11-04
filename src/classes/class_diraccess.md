<!-- ⚠ 请勿编辑本文件 ⚠ -->
<!-- 本文档使用脚本从 WeDot 引擎源码仓库生成。 -->
<!-- 生成脚本：https://github.com/WeDot-Engine/WeDot/tree/4.3/doc/tools/make_md.py； -->
<!-- 原文件：https://github.com/WeDot-Engine/WeDot/tree/4.3/doc/classes/DirAccess.xml。 -->

<div id="_class_diraccess"></div>

# DirAccess

**继承：** [`RefCounted`](class_refcounted.md) **<** [`Object`](class_object.md)

Provides methods for managing directories and their content.

## 描述

This class is used to manage directories and their content, even outside of the project folder.

 **DirAccess** can't be instantiated directly. Instead it is created with a static method that takes a path for which it will be opened.

Most of the methods have a static alternative that can be used without creating a **DirAccess**. Static methods only support absolute paths (including `res://` and `user://`).

```

    # Standard
    var dir = DirAccess.open("user://levels")
    dir.make_dir("world1")
    # Static
    DirAccess.make_dir_absolute("user://levels/world1")
```

 **Note:** Many resources types are imported (e.g. textures or sound files), and their source asset will not be included in the exported game, as only the imported version is used. Use [`ResourceLoader`](class_resourceloader.md) to access imported resources.

Here is an example on how to iterate through the files of a directory:



```gdscript

    func dir_contents(path):
        var dir = DirAccess.open(path)
        if dir:
            dir.list_dir_begin()
            var file_name = dir.get_next()
            while file_name != "":
                if dir.current_is_dir():
                    print("Found directory: " + file_name)
                else:
                    print("Found file: " + file_name)
                file_name = dir.get_next()
        else:
            print("An error occurred when trying to access the path.")
```

```csharp

    public void DirContents(string path)
    {
        using var dir = DirAccess.Open(path);
        if (dir != null)
        {
            dir.ListDirBegin();
            string fileName = dir.GetNext();
            while (fileName != "")
            {
                if (dir.CurrentIsDir())
                {
                    GD.Print($"Found directory: {fileName}");
                }
                else
                {
                    GD.Print($"Found file: {fileName}");
                }
                fileName = dir.GetNext();
            }
        }
        else
        {
            GD.Print("An error occurred when trying to access the path.");
        }
    }
```









## 属性

| [`bool`](class_bool.md) | [`include_hidden`](#class_diraccess_property_include_hidden)             |
| [`bool`](class_bool.md) | [`include_navigational`](#class_diraccess_property_include_navigational) |

## 方法

| [Error](#enum_@globalscope_error)                 | [`change_dir`](#class_diraccess_method_change_dir) ( to_dir: [`String`](class_string.md) )                                                                                               |
| [Error](#enum_@globalscope_error)                 | [`copy`](#class_diraccess_method_copy) ( from: [`String`](class_string.md), to: [`String`](class_string.md), chmod_flags: [`int`](class_int.md) = -1 )                                   |
| [Error](#enum_@globalscope_error)                 | [`copy_absolute`](#class_diraccess_method_copy_absolute) ( from: [`String`](class_string.md), to: [`String`](class_string.md), chmod_flags: [`int`](class_int.md) = -1 ) static[^static] |
| [Error](#enum_@globalscope_error)                 | [`create_link`](#class_diraccess_method_create_link) ( source: [`String`](class_string.md), target: [`String`](class_string.md) )                                                        |
| [`bool`](class_bool.md)                           | [`current_is_dir`](#class_diraccess_method_current_is_dir) ( ) const[^const]                                                                                                             |
| [`bool`](class_bool.md)                           | [`dir_exists`](#class_diraccess_method_dir_exists) ( path: [`String`](class_string.md) )                                                                                                 |
| [`bool`](class_bool.md)                           | [`dir_exists_absolute`](#class_diraccess_method_dir_exists_absolute) ( path: [`String`](class_string.md) ) static[^static]                                                               |
| [`bool`](class_bool.md)                           | [`file_exists`](#class_diraccess_method_file_exists) ( path: [`String`](class_string.md) )                                                                                               |
| [`String`](class_string.md)                       | [`get_current_dir`](#class_diraccess_method_get_current_dir) ( include_drive: [`bool`](class_bool.md) = true ) const[^const]                                                             |
| [`int`](class_int.md)                             | [`get_current_drive`](#class_diraccess_method_get_current_drive) ( )                                                                                                                     |
| [`PackedStringArray`](class_packedstringarray.md) | [`get_directories`](#class_diraccess_method_get_directories) ( )                                                                                                                         |
| [`PackedStringArray`](class_packedstringarray.md) | [`get_directories_at`](#class_diraccess_method_get_directories_at) ( path: [`String`](class_string.md) ) static[^static]                                                                 |
| [`int`](class_int.md)                             | [`get_drive_count`](#class_diraccess_method_get_drive_count) ( ) static[^static]                                                                                                         |
| [`String`](class_string.md)                       | [`get_drive_name`](#class_diraccess_method_get_drive_name) ( idx: [`int`](class_int.md) ) static[^static]                                                                                |
| [`PackedStringArray`](class_packedstringarray.md) | [`get_files`](#class_diraccess_method_get_files) ( )                                                                                                                                     |
| [`PackedStringArray`](class_packedstringarray.md) | [`get_files_at`](#class_diraccess_method_get_files_at) ( path: [`String`](class_string.md) ) static[^static]                                                                             |
| [`String`](class_string.md)                       | [`get_next`](#class_diraccess_method_get_next) ( )                                                                                                                                       |
| [Error](#enum_@globalscope_error)                 | [`get_open_error`](#class_diraccess_method_get_open_error) ( ) static[^static]                                                                                                           |
| [`int`](class_int.md)                             | [`get_space_left`](#class_diraccess_method_get_space_left) ( )                                                                                                                           |
| [`bool`](class_bool.md)                           | [`is_case_sensitive`](#class_diraccess_method_is_case_sensitive) ( path: [`String`](class_string.md) ) const[^const]                                                                     |
| [`bool`](class_bool.md)                           | [`is_link`](#class_diraccess_method_is_link) ( path: [`String`](class_string.md) )                                                                                                       |
| [Error](#enum_@globalscope_error)                 | [`list_dir_begin`](#class_diraccess_method_list_dir_begin) ( )                                                                                                                           |
| `void`                                            | [`list_dir_end`](#class_diraccess_method_list_dir_end) ( )                                                                                                                               |
| [Error](#enum_@globalscope_error)                 | [`make_dir`](#class_diraccess_method_make_dir) ( path: [`String`](class_string.md) )                                                                                                     |
| [Error](#enum_@globalscope_error)                 | [`make_dir_absolute`](#class_diraccess_method_make_dir_absolute) ( path: [`String`](class_string.md) ) static[^static]                                                                   |
| [Error](#enum_@globalscope_error)                 | [`make_dir_recursive`](#class_diraccess_method_make_dir_recursive) ( path: [`String`](class_string.md) )                                                                                 |
| [Error](#enum_@globalscope_error)                 | [`make_dir_recursive_absolute`](#class_diraccess_method_make_dir_recursive_absolute) ( path: [`String`](class_string.md) ) static[^static]                                               |
| [`DirAccess`](class_diraccess.md)                 | [`open`](#class_diraccess_method_open) ( path: [`String`](class_string.md) ) static[^static]                                                                                             |
| [`String`](class_string.md)                       | [`read_link`](#class_diraccess_method_read_link) ( path: [`String`](class_string.md) )                                                                                                   |
| [Error](#enum_@globalscope_error)                 | [`remove`](#class_diraccess_method_remove) ( path: [`String`](class_string.md) )                                                                                                         |
| [Error](#enum_@globalscope_error)                 | [`remove_absolute`](#class_diraccess_method_remove_absolute) ( path: [`String`](class_string.md) ) static[^static]                                                                       |
| [Error](#enum_@globalscope_error)                 | [`rename`](#class_diraccess_method_rename) ( from: [`String`](class_string.md), to: [`String`](class_string.md) )                                                                        |
| [Error](#enum_@globalscope_error)                 | [`rename_absolute`](#class_diraccess_method_rename_absolute) ( from: [`String`](class_string.md), to: [`String`](class_string.md) ) static[^static]                                      |

<!-- rst-class:: classref-section-separator -->

---

## 属性说明

<div id="_class_diraccess_property_include_hidden"></div>

[`bool`](class_bool.md) **include_hidden** <div id="class_diraccess_property_include_hidden"></div>

- `void` **set_include_hidden** ( value: [`bool`](class_bool.md) )
- [`bool`](class_bool.md) **get_include_hidden** ( )

If `true`, hidden files are included when navigating the directory.

Affects [`list_dir_begin`](#class_diraccess_method_list_dir_begin), [`get_directories`](#class_diraccess_method_get_directories) and [`get_files`](#class_diraccess_method_get_files).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_diraccess_property_include_navigational"></div>

[`bool`](class_bool.md) **include_navigational** <div id="class_diraccess_property_include_navigational"></div>

- `void` **set_include_navigational** ( value: [`bool`](class_bool.md) )
- [`bool`](class_bool.md) **get_include_navigational** ( )

If `true`, `.` and `..` are included when navigating the directory.

Affects [`list_dir_begin`](#class_diraccess_method_list_dir_begin) and [`get_directories`](#class_diraccess_method_get_directories).

<!-- rst-class:: classref-section-separator -->

---

## 方法说明

<div id="_class_diraccess_method_change_dir"></div>

[Error](#enum_@globalscope_error) **change_dir** ( to_dir: [`String`](class_string.md) )<div id="class_diraccess_method_change_dir"></div>

Changes the currently opened directory to the one passed as an argument. The argument can be relative to the current directory (e.g. `newdir` or `../newdir`), or an absolute path (e.g. `/tmp/newdir` or `res://somedir/newdir`).

Returns one of the [Error](#enum_@globalscope_error) code constants ([`@GlobalScope.OK`](#class_@globalscope_constant_ok) on success).

 **Note:** The new directory must be within the same scope, e.g. when you had opened a directory inside `res://`, you can't change it to `user://` directory. If you need to open a directory in another access scope, use [`open`](#class_diraccess_method_open) to create a new instance instead.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_diraccess_method_copy"></div>

[Error](#enum_@globalscope_error) **copy** ( from: [`String`](class_string.md), to: [`String`](class_string.md), chmod_flags: [`int`](class_int.md) = -1 )<div id="class_diraccess_method_copy"></div>

Copies the `from` file to the `to` destination. Both arguments should be paths to files, either relative or absolute. If the destination file exists and is not access-protected, it will be overwritten.

If `chmod_flags` is different than `-1`, the Unix permissions for the destination path will be set to the provided value, if available on the current operating system.

Returns one of the [Error](#enum_@globalscope_error) code constants ([`@GlobalScope.OK`](#class_@globalscope_constant_ok) on success).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_diraccess_method_copy_absolute"></div>

[Error](#enum_@globalscope_error) **copy_absolute** ( from: [`String`](class_string.md), to: [`String`](class_string.md), chmod_flags: [`int`](class_int.md) = -1 ) static[^static]<div id="class_diraccess_method_copy_absolute"></div>

Static version of [`copy`](#class_diraccess_method_copy). Supports only absolute paths.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_diraccess_method_create_link"></div>

[Error](#enum_@globalscope_error) **create_link** ( source: [`String`](class_string.md), target: [`String`](class_string.md) )<div id="class_diraccess_method_create_link"></div>

Creates symbolic link between files or folders.

 **Note:** On Windows, this method works only if the application is running with elevated privileges or Developer Mode is enabled.

 **Note:** This method is implemented on macOS, Linux, and Windows.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_diraccess_method_current_is_dir"></div>

[`bool`](class_bool.md) **current_is_dir** ( ) const[^const]<div id="class_diraccess_method_current_is_dir"></div>

Returns whether the current item processed with the last [`get_next`](#class_diraccess_method_get_next) call is a directory (`.` and `..` are considered directories).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_diraccess_method_dir_exists"></div>

[`bool`](class_bool.md) **dir_exists** ( path: [`String`](class_string.md) )<div id="class_diraccess_method_dir_exists"></div>

Returns whether the target directory exists. The argument can be relative to the current directory, or an absolute path.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_diraccess_method_dir_exists_absolute"></div>

[`bool`](class_bool.md) **dir_exists_absolute** ( path: [`String`](class_string.md) ) static[^static]<div id="class_diraccess_method_dir_exists_absolute"></div>

Static version of [`dir_exists`](#class_diraccess_method_dir_exists). Supports only absolute paths.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_diraccess_method_file_exists"></div>

[`bool`](class_bool.md) **file_exists** ( path: [`String`](class_string.md) )<div id="class_diraccess_method_file_exists"></div>

Returns whether the target file exists. The argument can be relative to the current directory, or an absolute path.

For a static equivalent, use [`FileAccess.file_exists`](#class_fileaccess_method_file_exists).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_diraccess_method_get_current_dir"></div>

[`String`](class_string.md) **get_current_dir** ( include_drive: [`bool`](class_bool.md) = true ) const[^const]<div id="class_diraccess_method_get_current_dir"></div>

Returns the absolute path to the currently opened directory (e.g. `res://folder` or `C:\tmp\folder`).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_diraccess_method_get_current_drive"></div>

[`int`](class_int.md) **get_current_drive** ( )<div id="class_diraccess_method_get_current_drive"></div>

Returns the currently opened directory's drive index. See [`get_drive_name`](#class_diraccess_method_get_drive_name) to convert returned index to the name of the drive.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_diraccess_method_get_directories"></div>

[`PackedStringArray`](class_packedstringarray.md) **get_directories** ( )<div id="class_diraccess_method_get_directories"></div>

Returns a [`PackedStringArray`](class_packedstringarray.md) containing filenames of the directory contents, excluding files. The array is sorted alphabetically.

Affected by [`include_hidden`](#class_diraccess_property_include_hidden) and [`include_navigational`](#class_diraccess_property_include_navigational).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_diraccess_method_get_directories_at"></div>

[`PackedStringArray`](class_packedstringarray.md) **get_directories_at** ( path: [`String`](class_string.md) ) static[^static]<div id="class_diraccess_method_get_directories_at"></div>

Returns a [`PackedStringArray`](class_packedstringarray.md) containing filenames of the directory contents, excluding files, at the given `path`. The array is sorted alphabetically.

Use [`get_directories`](#class_diraccess_method_get_directories) if you want more control of what gets included.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_diraccess_method_get_drive_count"></div>

[`int`](class_int.md) **get_drive_count** ( ) static[^static]<div id="class_diraccess_method_get_drive_count"></div>

On Windows, returns the number of drives (partitions) mounted on the current filesystem.

On macOS, returns the number of mounted volumes.

On Linux, returns the number of mounted volumes and GTK 3 bookmarks.

On other platforms, the method returns 0.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_diraccess_method_get_drive_name"></div>

[`String`](class_string.md) **get_drive_name** ( idx: [`int`](class_int.md) ) static[^static]<div id="class_diraccess_method_get_drive_name"></div>

On Windows, returns the name of the drive (partition) passed as an argument (e.g. `C:`).

On macOS, returns the path to the mounted volume passed as an argument.

On Linux, returns the path to the mounted volume or GTK 3 bookmark passed as an argument.

On other platforms, or if the requested drive does not exist, the method returns an empty String.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_diraccess_method_get_files"></div>

[`PackedStringArray`](class_packedstringarray.md) **get_files** ( )<div id="class_diraccess_method_get_files"></div>

Returns a [`PackedStringArray`](class_packedstringarray.md) containing filenames of the directory contents, excluding directories. The array is sorted alphabetically.

Affected by [`include_hidden`](#class_diraccess_property_include_hidden).

 **Note:** When used on a `res://` path in an exported project, only the files actually included in the PCK at the given folder level are returned. In practice, this means that since imported resources are stored in a top-level `.godot/` folder, only paths to `*.gd` and `*.import` files are returned (plus a few files such as `project.godot` or `project.binary` and the project icon). In an exported project, the list of returned files will also vary depending on whether [`ProjectSettings.editor/export/convert_text_resources_to_binary`](#class_projectsettings_property_editor/export/convert_text_resources_to_binary) is `true`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_diraccess_method_get_files_at"></div>

[`PackedStringArray`](class_packedstringarray.md) **get_files_at** ( path: [`String`](class_string.md) ) static[^static]<div id="class_diraccess_method_get_files_at"></div>

Returns a [`PackedStringArray`](class_packedstringarray.md) containing filenames of the directory contents, excluding directories, at the given `path`. The array is sorted alphabetically.

Use [`get_files`](#class_diraccess_method_get_files) if you want more control of what gets included.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_diraccess_method_get_next"></div>

[`String`](class_string.md) **get_next** ( )<div id="class_diraccess_method_get_next"></div>

Returns the next element (file or directory) in the current directory.

The name of the file or directory is returned (and not its full path). Once the stream has been fully processed, the method returns an empty [`String`](class_string.md) and closes the stream automatically (i.e. [`list_dir_end`](#class_diraccess_method_list_dir_end) would not be mandatory in such a case).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_diraccess_method_get_open_error"></div>

[Error](#enum_@globalscope_error) **get_open_error** ( ) static[^static]<div id="class_diraccess_method_get_open_error"></div>

Returns the result of the last [`open`](#class_diraccess_method_open) call in the current thread.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_diraccess_method_get_space_left"></div>

[`int`](class_int.md) **get_space_left** ( )<div id="class_diraccess_method_get_space_left"></div>

Returns the available space on the current directory's disk, in bytes. Returns `0` if the platform-specific method to query the available space fails.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_diraccess_method_is_case_sensitive"></div>

[`bool`](class_bool.md) **is_case_sensitive** ( path: [`String`](class_string.md) ) const[^const]<div id="class_diraccess_method_is_case_sensitive"></div>

Returns `true` if the file system or directory use case sensitive file names.

 **Note:** This method is implemented on macOS, Linux (for EXT4 and F2FS filesystems only) and Windows. On other platforms, it always returns `true`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_diraccess_method_is_link"></div>

[`bool`](class_bool.md) **is_link** ( path: [`String`](class_string.md) )<div id="class_diraccess_method_is_link"></div>

Returns `true` if the file or directory is a symbolic link, directory junction, or other reparse point.

 **Note:** This method is implemented on macOS, Linux, and Windows.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_diraccess_method_list_dir_begin"></div>

[Error](#enum_@globalscope_error) **list_dir_begin** ( )<div id="class_diraccess_method_list_dir_begin"></div>

Initializes the stream used to list all files and directories using the [`get_next`](#class_diraccess_method_get_next) function, closing the currently opened stream if needed. Once the stream has been processed, it should typically be closed with [`list_dir_end`](#class_diraccess_method_list_dir_end).

Affected by [`include_hidden`](#class_diraccess_property_include_hidden) and [`include_navigational`](#class_diraccess_property_include_navigational).

 **Note:** The order of files and directories returned by this method is not deterministic, and can vary between operating systems. If you want a list of all files or folders sorted alphabetically, use [`get_files`](#class_diraccess_method_get_files) or [`get_directories`](#class_diraccess_method_get_directories).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_diraccess_method_list_dir_end"></div>

`void` **list_dir_end** ( )<div id="class_diraccess_method_list_dir_end"></div>

Closes the current stream opened with [`list_dir_begin`](#class_diraccess_method_list_dir_begin) (whether it has been fully processed with [`get_next`](#class_diraccess_method_get_next) does not matter).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_diraccess_method_make_dir"></div>

[Error](#enum_@globalscope_error) **make_dir** ( path: [`String`](class_string.md) )<div id="class_diraccess_method_make_dir"></div>

Creates a directory. The argument can be relative to the current directory, or an absolute path. The target directory should be placed in an already existing directory (to create the full path recursively, see [`make_dir_recursive`](#class_diraccess_method_make_dir_recursive)).

Returns one of the [Error](#enum_@globalscope_error) code constants ([`@GlobalScope.OK`](#class_@globalscope_constant_ok) on success).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_diraccess_method_make_dir_absolute"></div>

[Error](#enum_@globalscope_error) **make_dir_absolute** ( path: [`String`](class_string.md) ) static[^static]<div id="class_diraccess_method_make_dir_absolute"></div>

Static version of [`make_dir`](#class_diraccess_method_make_dir). Supports only absolute paths.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_diraccess_method_make_dir_recursive"></div>

[Error](#enum_@globalscope_error) **make_dir_recursive** ( path: [`String`](class_string.md) )<div id="class_diraccess_method_make_dir_recursive"></div>

Creates a target directory and all necessary intermediate directories in its path, by calling [`make_dir`](#class_diraccess_method_make_dir) recursively. The argument can be relative to the current directory, or an absolute path.

Returns one of the [Error](#enum_@globalscope_error) code constants ([`@GlobalScope.OK`](#class_@globalscope_constant_ok) on success).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_diraccess_method_make_dir_recursive_absolute"></div>

[Error](#enum_@globalscope_error) **make_dir_recursive_absolute** ( path: [`String`](class_string.md) ) static[^static]<div id="class_diraccess_method_make_dir_recursive_absolute"></div>

Static version of [`make_dir_recursive`](#class_diraccess_method_make_dir_recursive). Supports only absolute paths.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_diraccess_method_open"></div>

[`DirAccess`](class_diraccess.md) **open** ( path: [`String`](class_string.md) ) static[^static]<div id="class_diraccess_method_open"></div>

Creates a new **DirAccess** object and opens an existing directory of the filesystem. The `path` argument can be within the project tree (`res://folder`), the user directory (`user://folder`) or an absolute path of the user filesystem (e.g. `/tmp/folder` or `C:\tmp\folder`).

Returns `null` if opening the directory failed. You can use [`get_open_error`](#class_diraccess_method_get_open_error) to check the error that occurred.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_diraccess_method_read_link"></div>

[`String`](class_string.md) **read_link** ( path: [`String`](class_string.md) )<div id="class_diraccess_method_read_link"></div>

Returns target of the symbolic link.

 **Note:** This method is implemented on macOS, Linux, and Windows.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_diraccess_method_remove"></div>

[Error](#enum_@globalscope_error) **remove** ( path: [`String`](class_string.md) )<div id="class_diraccess_method_remove"></div>

Permanently deletes the target file or an empty directory. The argument can be relative to the current directory, or an absolute path. If the target directory is not empty, the operation will fail.

If you don't want to delete the file/directory permanently, use [`OS.move_to_trash`](#class_os_method_move_to_trash) instead.

Returns one of the [Error](#enum_@globalscope_error) code constants ([`@GlobalScope.OK`](#class_@globalscope_constant_ok) on success).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_diraccess_method_remove_absolute"></div>

[Error](#enum_@globalscope_error) **remove_absolute** ( path: [`String`](class_string.md) ) static[^static]<div id="class_diraccess_method_remove_absolute"></div>

Static version of [`remove`](#class_diraccess_method_remove). Supports only absolute paths.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_diraccess_method_rename"></div>

[Error](#enum_@globalscope_error) **rename** ( from: [`String`](class_string.md), to: [`String`](class_string.md) )<div id="class_diraccess_method_rename"></div>

Renames (move) the `from` file or directory to the `to` destination. Both arguments should be paths to files or directories, either relative or absolute. If the destination file or directory exists and is not access-protected, it will be overwritten.

Returns one of the [Error](#enum_@globalscope_error) code constants ([`@GlobalScope.OK`](#class_@globalscope_constant_ok) on success).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_diraccess_method_rename_absolute"></div>

[Error](#enum_@globalscope_error) **rename_absolute** ( from: [`String`](class_string.md), to: [`String`](class_string.md) ) static[^static]<div id="class_diraccess_method_rename_absolute"></div>

Static version of [`rename`](#class_diraccess_method_rename). Supports only absolute paths.

[^virtual]: 本方法通常需要用户覆盖才能生效。
[^const]: 本方法无副作用，不会修改该实例的任何成员变量。
[^vararg]: 本方法除了能接受在此处描述的参数外，还能够继续接受任意数量的参数。
[^constructor]: 本方法用于构造某个类型。
[^static]: 调用本方法无需实例，可直接使用类名进行调用。
[^operator]: 本方法描述的是使用本类型作为左操作数的有效运算符。
[^bitfield]: 这个值是由下列位标志构成位掩码的整数。
[^void]: 无返回值。
