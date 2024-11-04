<!-- ⚠ 请勿编辑本文件 ⚠ -->
<!-- 本文档使用脚本从 WeDot 引擎源码仓库生成。 -->
<!-- 生成脚本：https://github.com/WeDot-Engine/WeDot/tree/4.3/doc/tools/make_md.py； -->
<!-- 原文件：https://github.com/WeDot-Engine/WeDot/tree/4.3/doc/classes/ResourceSaver.xml。 -->

<div id="_class_resourcesaver"></div>

# ResourceSaver

**继承：** [`Object`](class_object.md)

A singleton for saving [`Resource`](class_resource.md) s to the filesystem.

## 描述

A singleton for saving resource types to the filesystem.

It uses the many [`ResourceFormatSaver`](class_resourceformatsaver.md) classes registered in the engine (either built-in or from a plugin) to save resource data to text-based (e.g. `.tres` or `.tscn`) or binary files (e.g. `.res` or `.scn`).

## 方法

| `void`                                            | [`add_resource_format_saver`](#class_resourcesaver_method_add_resource_format_saver) ( format_saver: [`ResourceFormatSaver`](class_resourceformatsaver.md), at_front: [`bool`](class_bool.md) = false ) |
| [`PackedStringArray`](class_packedstringarray.md) | [`get_recognized_extensions`](#class_resourcesaver_method_get_recognized_extensions) ( type: [`Resource`](class_resource.md) )                                                                          |
| `void`                                            | [`remove_resource_format_saver`](#class_resourcesaver_method_remove_resource_format_saver) ( format_saver: [`ResourceFormatSaver`](class_resourceformatsaver.md) )                                      |
| [Error](#enum_@globalscope_error)                 | [`save`](#class_resourcesaver_method_save) ( resource: [`Resource`](class_resource.md), path: [`String`](class_string.md) = "", flags: [SaverFlags](#enum_resourcesaver_saverflags) = 0 )               |

<!-- rst-class:: classref-section-separator -->

---

## 枚举

<div id="_class_enum_resourcesaver_saverflags"></div>

flags **SaverFlags**: <div id="enum_resourcesaver_saverflags"></div>

<div id="_class_resourcesaver_constant_flag_none"></div>

[SaverFlags](#enum_resourcesaver_saverflags) **FLAG_NONE** = ``0``

No resource saving option.

<div id="_class_resourcesaver_constant_flag_relative_paths"></div>

[SaverFlags](#enum_resourcesaver_saverflags) **FLAG_RELATIVE_PATHS** = ``1``

Save the resource with a path relative to the scene which uses it.

<div id="_class_resourcesaver_constant_flag_bundle_resources"></div>

[SaverFlags](#enum_resourcesaver_saverflags) **FLAG_BUNDLE_RESOURCES** = ``2``

Bundles external resources.

<div id="_class_resourcesaver_constant_flag_change_path"></div>

[SaverFlags](#enum_resourcesaver_saverflags) **FLAG_CHANGE_PATH** = ``4``

Changes the [`Resource.resource_path`](#class_resource_property_resource_path) of the saved resource to match its new location.

<div id="_class_resourcesaver_constant_flag_omit_editor_properties"></div>

[SaverFlags](#enum_resourcesaver_saverflags) **FLAG_OMIT_EDITOR_PROPERTIES** = ``8``

Do not save editor-specific metadata (identified by their `__editor` prefix).

<div id="_class_resourcesaver_constant_flag_save_big_endian"></div>

[SaverFlags](#enum_resourcesaver_saverflags) **FLAG_SAVE_BIG_ENDIAN** = ``16``

Save as big endian (see [`FileAccess.big_endian`](#class_fileaccess_property_big_endian)).

<div id="_class_resourcesaver_constant_flag_compress"></div>

[SaverFlags](#enum_resourcesaver_saverflags) **FLAG_COMPRESS** = ``32``

Compress the resource on save using [`FileAccess.COMPRESSION_ZSTD`](#class_fileaccess_constant_compression_zstd). Only available for binary resource types.

<div id="_class_resourcesaver_constant_flag_replace_subresource_paths"></div>

[SaverFlags](#enum_resourcesaver_saverflags) **FLAG_REPLACE_SUBRESOURCE_PATHS** = ``64``

Take over the paths of the saved subresources (see [`Resource.take_over_path`](#class_resource_method_take_over_path)).

<!-- rst-class:: classref-section-separator -->

---

## 方法说明

<div id="_class_resourcesaver_method_add_resource_format_saver"></div>

`void` **add_resource_format_saver** ( format_saver: [`ResourceFormatSaver`](class_resourceformatsaver.md), at_front: [`bool`](class_bool.md) = false )<div id="class_resourcesaver_method_add_resource_format_saver"></div>

Registers a new [`ResourceFormatSaver`](class_resourceformatsaver.md). The ResourceSaver will use the ResourceFormatSaver as described in [`save`](#class_resourcesaver_method_save).

This method is performed implicitly for ResourceFormatSavers written in GDScript (see [`ResourceFormatSaver`](class_resourceformatsaver.md) for more information).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_resourcesaver_method_get_recognized_extensions"></div>

[`PackedStringArray`](class_packedstringarray.md) **get_recognized_extensions** ( type: [`Resource`](class_resource.md) )<div id="class_resourcesaver_method_get_recognized_extensions"></div>

Returns the list of extensions available for saving a resource of a given type.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_resourcesaver_method_remove_resource_format_saver"></div>

`void` **remove_resource_format_saver** ( format_saver: [`ResourceFormatSaver`](class_resourceformatsaver.md) )<div id="class_resourcesaver_method_remove_resource_format_saver"></div>

Unregisters the given [`ResourceFormatSaver`](class_resourceformatsaver.md).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_resourcesaver_method_save"></div>

[Error](#enum_@globalscope_error) **save** ( resource: [`Resource`](class_resource.md), path: [`String`](class_string.md) = "", flags: [SaverFlags](#enum_resourcesaver_saverflags) = 0 )<div id="class_resourcesaver_method_save"></div>

Saves a resource to disk to the given path, using a [`ResourceFormatSaver`](class_resourceformatsaver.md) that recognizes the resource object. If `path` is empty, **ResourceSaver** will try to use [`Resource.resource_path`](#class_resource_property_resource_path).

The `flags` bitmask can be specified to customize the save behavior using [SaverFlags](#enum_resourcesaver_saverflags) flags.

Returns [`@GlobalScope.OK`](#class_@globalscope_constant_ok) on success.

 **Note:** When the project is running, any generated UID associated with the resource will not be saved as the required code is only executed in editor mode.

[^virtual]: 本方法通常需要用户覆盖才能生效。
[^const]: 本方法无副作用，不会修改该实例的任何成员变量。
[^vararg]: 本方法除了能接受在此处描述的参数外，还能够继续接受任意数量的参数。
[^constructor]: 本方法用于构造某个类型。
[^static]: 调用本方法无需实例，可直接使用类名进行调用。
[^operator]: 本方法描述的是使用本类型作为左操作数的有效运算符。
[^bitfield]: 这个值是由下列位标志构成位掩码的整数。
[^void]: 无返回值。
