<!-- ⚠ 请勿编辑本文件 ⚠ -->
<!-- 本文档使用脚本从 WeDot 引擎源码仓库生成。 -->
<!-- 生成脚本：https://github.com/WeDot-Engine/WeDot/tree/4.3/doc/tools/make_md.py； -->
<!-- 原文件：https://github.com/WeDot-Engine/WeDot/tree/4.3/doc/classes/EditorPaths.xml。 -->

<div id="_class_editorpaths"></div>

# EditorPaths

**继承：** [`Object`](class_object.md)

Editor-only singleton that returns paths to various OS-specific data folders and files.

## 描述

This editor-only singleton returns OS-specific paths to various data folders and files. It can be used in editor plugins to ensure files are saved in the correct location on each operating system.

 **Note:** This singleton is not accessible in exported projects. Attempting to access it in an exported project will result in a script error as the singleton won't be declared. To prevent script errors in exported projects, use [`Engine.has_singleton`](#class_engine_method_has_singleton) to check whether the singleton is available before using it.

 **Note:** On the Linux/BSD platform, Godot complies with the [*XDG Base Directory Specification*](https://specifications.freedesktop.org/basedir-spec/basedir-spec-latest.html). You can override environment variables following the specification to change the editor and project data paths.

## 方法

| [`String`](class_string.md) | [`get_cache_dir`](#class_editorpaths_method_get_cache_dir) ( ) const[^const]                       |
| [`String`](class_string.md) | [`get_config_dir`](#class_editorpaths_method_get_config_dir) ( ) const[^const]                     |
| [`String`](class_string.md) | [`get_data_dir`](#class_editorpaths_method_get_data_dir) ( ) const[^const]                         |
| [`String`](class_string.md) | [`get_project_settings_dir`](#class_editorpaths_method_get_project_settings_dir) ( ) const[^const] |
| [`String`](class_string.md) | [`get_self_contained_file`](#class_editorpaths_method_get_self_contained_file) ( ) const[^const]   |
| [`bool`](class_bool.md)     | [`is_self_contained`](#class_editorpaths_method_is_self_contained) ( ) const[^const]               |

<!-- rst-class:: classref-section-separator -->

---

## 方法说明

<div id="_class_editorpaths_method_get_cache_dir"></div>

[`String`](class_string.md) **get_cache_dir** ( ) const[^const]<div id="class_editorpaths_method_get_cache_dir"></div>

Returns the absolute path to the user's cache folder. This folder should be used for temporary data that can be removed safely whenever the editor is closed (such as generated resource thumbnails).

 **Default paths per platform:** 

```text

    - Windows: %LOCALAPPDATA%\Godot\
    - macOS: ~/Library/Caches/Godot/
    - Linux: ~/.cache/godot/
```



<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorpaths_method_get_config_dir"></div>

[`String`](class_string.md) **get_config_dir** ( ) const[^const]<div id="class_editorpaths_method_get_config_dir"></div>

Returns the absolute path to the user's configuration folder. This folder should be used for *persistent* user configuration files.

 **Default paths per platform:** 

```text

    - Windows: %APPDATA%\Godot\                    (same as `get_data_dir()`)
    - macOS: ~/Library/Application Support/Godot/  (same as `get_data_dir()`)
    - Linux: ~/.config/godot/
```



<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorpaths_method_get_data_dir"></div>

[`String`](class_string.md) **get_data_dir** ( ) const[^const]<div id="class_editorpaths_method_get_data_dir"></div>

Returns the absolute path to the user's data folder. This folder should be used for *persistent* user data files such as installed export templates.

 **Default paths per platform:** 

```text

    - Windows: %APPDATA%\Godot\                    (same as `get_config_dir()`)
    - macOS: ~/Library/Application Support/Godot/  (same as `get_config_dir()`)
    - Linux: ~/.local/share/godot/
```



<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorpaths_method_get_project_settings_dir"></div>

[`String`](class_string.md) **get_project_settings_dir** ( ) const[^const]<div id="class_editorpaths_method_get_project_settings_dir"></div>

Returns the project-specific editor settings path. Projects all have a unique subdirectory inside the settings path where project-specific editor settings are saved.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorpaths_method_get_self_contained_file"></div>

[`String`](class_string.md) **get_self_contained_file** ( ) const[^const]<div id="class_editorpaths_method_get_self_contained_file"></div>

Returns the absolute path to the self-contained file that makes the current Godot editor instance be considered as self-contained. Returns an empty string if the current Godot editor instance isn't self-contained. See also [`is_self_contained`](#class_editorpaths_method_is_self_contained).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorpaths_method_is_self_contained"></div>

[`bool`](class_bool.md) **is_self_contained** ( ) const[^const]<div id="class_editorpaths_method_is_self_contained"></div>

Returns `true` if the editor is marked as self-contained, `false` otherwise. When self-contained mode is enabled, user configuration, data and cache files are saved in an `editor_data/` folder next to the editor binary. This makes portable usage easier and ensures the Godot editor minimizes file writes outside its own folder. Self-contained mode is not available for exported projects.

Self-contained mode can be enabled by creating a file named `._sc_` or `_sc_` in the same folder as the editor binary or macOS .app bundle while the editor is not running. See also [`get_self_contained_file`](#class_editorpaths_method_get_self_contained_file).

 **Note:** On macOS, quarantine flag should be manually removed before using self-contained mode, see [*Running on macOS*](https://docs.godotengine.org/en/stable/tutorials/export/running_on_macos.html).

 **Note:** On macOS, placing `_sc_` or any other file inside .app bundle will break digital signature and make it non-portable, consider placing it in the same folder as the .app bundle instead.

 **Note:** The Steam release of Godot uses self-contained mode by default.

[^virtual]: 本方法通常需要用户覆盖才能生效。
[^const]: 本方法无副作用，不会修改该实例的任何成员变量。
[^vararg]: 本方法除了能接受在此处描述的参数外，还能够继续接受任意数量的参数。
[^constructor]: 本方法用于构造某个类型。
[^static]: 调用本方法无需实例，可直接使用类名进行调用。
[^operator]: 本方法描述的是使用本类型作为左操作数的有效运算符。
[^bitfield]: 这个值是由下列位标志构成位掩码的整数。
[^void]: 无返回值。
