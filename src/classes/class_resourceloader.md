<!-- ⚠ 请勿编辑本文件 ⚠ -->
<!-- 本文档使用脚本从 WeDot 引擎源码仓库生成。 -->
<!-- 生成脚本：https://github.com/WeDot-Engine/WeDot/tree/4.3/doc/tools/make_md.py； -->
<!-- 原文件：https://github.com/WeDot-Engine/WeDot/tree/4.3/doc/classes/ResourceLoader.xml。 -->

<div id="_class_resourceloader"></div>

# ResourceLoader

**继承：** [`Object`](class_object.md)

A singleton for loading resource files.

## 描述

A singleton used to load resource files from the filesystem.

It uses the many [`ResourceFormatLoader`](class_resourceformatloader.md) classes registered in the engine (either built-in or from a plugin) to load files into memory and convert them to a format that can be used by the engine.

 **Note:** You have to import the files into the engine first to load them using [`load`](#class_resourceloader_method_load). If you want to load [`Image`](class_image.md) s at run-time, you may use [`Image.load`](#class_image_method_load). If you want to import audio files, you can use the snippet described in [`AudioStreamMP3.data`](#class_audiostreammp3_property_data).

## 方法

| `void`                                                    | [`add_resource_format_loader`](#class_resourceloader_method_add_resource_format_loader) ( format_loader: [`ResourceFormatLoader`](class_resourceformatloader.md), at_front: [`bool`](class_bool.md) = false )                                                                   |
| [`bool`](class_bool.md)                                   | [`exists`](#class_resourceloader_method_exists) ( path: [`String`](class_string.md), type_hint: [`String`](class_string.md) = "" )                                                                                                                                              |
| [`PackedStringArray`](class_packedstringarray.md)         | [`get_dependencies`](#class_resourceloader_method_get_dependencies) ( path: [`String`](class_string.md) )                                                                                                                                                                       |
| [`PackedStringArray`](class_packedstringarray.md)         | [`get_recognized_extensions_for_type`](#class_resourceloader_method_get_recognized_extensions_for_type) ( type: [`String`](class_string.md) )                                                                                                                                   |
| [`int`](class_int.md)                                     | [`get_resource_uid`](#class_resourceloader_method_get_resource_uid) ( path: [`String`](class_string.md) )                                                                                                                                                                       |
| [`bool`](class_bool.md)                                   | [`has_cached`](#class_resourceloader_method_has_cached) ( path: [`String`](class_string.md) )                                                                                                                                                                                   |
| [`Resource`](class_resource.md)                           | [`load`](#class_resourceloader_method_load) ( path: [`String`](class_string.md), type_hint: [`String`](class_string.md) = "", cache_mode: [CacheMode](#enum_resourceloader_cachemode) = 1 )                                                                                     |
| [`Resource`](class_resource.md)                           | [`load_threaded_get`](#class_resourceloader_method_load_threaded_get) ( path: [`String`](class_string.md) )                                                                                                                                                                     |
| [ThreadLoadStatus](#enum_resourceloader_threadloadstatus) | [`load_threaded_get_status`](#class_resourceloader_method_load_threaded_get_status) ( path: [`String`](class_string.md), progress: [`Array`](class_array.md) = [] )                                                                                                             |
| [Error](#enum_@globalscope_error)                         | [`load_threaded_request`](#class_resourceloader_method_load_threaded_request) ( path: [`String`](class_string.md), type_hint: [`String`](class_string.md) = "", use_sub_threads: [`bool`](class_bool.md) = false, cache_mode: [CacheMode](#enum_resourceloader_cachemode) = 1 ) |
| `void`                                                    | [`remove_resource_format_loader`](#class_resourceloader_method_remove_resource_format_loader) ( format_loader: [`ResourceFormatLoader`](class_resourceformatloader.md) )                                                                                                        |
| `void`                                                    | [`set_abort_on_missing_resources`](#class_resourceloader_method_set_abort_on_missing_resources) ( abort: [`bool`](class_bool.md) )                                                                                                                                              |

<!-- rst-class:: classref-section-separator -->

---

## 枚举

<div id="_class_enum_resourceloader_threadloadstatus"></div>

enum **ThreadLoadStatus**: <div id="enum_resourceloader_threadloadstatus"></div>

<div id="_class_resourceloader_constant_thread_load_invalid_resource"></div>

[ThreadLoadStatus](#enum_resourceloader_threadloadstatus) **THREAD_LOAD_INVALID_RESOURCE** = ``0``

The resource is invalid, or has not been loaded with [`load_threaded_request`](#class_resourceloader_method_load_threaded_request).

<div id="_class_resourceloader_constant_thread_load_in_progress"></div>

[ThreadLoadStatus](#enum_resourceloader_threadloadstatus) **THREAD_LOAD_IN_PROGRESS** = ``1``

The resource is still being loaded.

<div id="_class_resourceloader_constant_thread_load_failed"></div>

[ThreadLoadStatus](#enum_resourceloader_threadloadstatus) **THREAD_LOAD_FAILED** = ``2``

Some error occurred during loading and it failed.

<div id="_class_resourceloader_constant_thread_load_loaded"></div>

[ThreadLoadStatus](#enum_resourceloader_threadloadstatus) **THREAD_LOAD_LOADED** = ``3``

The resource was loaded successfully and can be accessed via [`load_threaded_get`](#class_resourceloader_method_load_threaded_get).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_enum_resourceloader_cachemode"></div>

enum **CacheMode**: <div id="enum_resourceloader_cachemode"></div>

<div id="_class_resourceloader_constant_cache_mode_ignore"></div>

[CacheMode](#enum_resourceloader_cachemode) **CACHE_MODE_IGNORE** = ``0``

Neither the main resource (the one requested to be loaded) nor any of its subresources are retrieved from cache nor stored into it. Dependencies (external resources) are loaded with [`CACHE_MODE_REUSE`](#class_resourceloader_constant_cache_mode_reuse).

<div id="_class_resourceloader_constant_cache_mode_reuse"></div>

[CacheMode](#enum_resourceloader_cachemode) **CACHE_MODE_REUSE** = ``1``

The main resource (the one requested to be loaded), its subresources, and its dependencies (external resources) are retrieved from cache if present, instead of loaded. Those not cached are loaded and then stored into the cache. The same rules are propagated recursively down the tree of dependencies (external resources).

<div id="_class_resourceloader_constant_cache_mode_replace"></div>

[CacheMode](#enum_resourceloader_cachemode) **CACHE_MODE_REPLACE** = ``2``

Like [`CACHE_MODE_REUSE`](#class_resourceloader_constant_cache_mode_reuse), but the cache is checked for the main resource (the one requested to be loaded) as well as for each of its subresources. Those already in the cache, as long as the loaded and cached types match, have their data refreshed from storage into the already existing instances. Otherwise, they are recreated as completely new objects.

<div id="_class_resourceloader_constant_cache_mode_ignore_deep"></div>

[CacheMode](#enum_resourceloader_cachemode) **CACHE_MODE_IGNORE_DEEP** = ``3``

Like [`CACHE_MODE_IGNORE`](#class_resourceloader_constant_cache_mode_ignore), but propagated recursively down the tree of dependencies (external resources).

<div id="_class_resourceloader_constant_cache_mode_replace_deep"></div>

[CacheMode](#enum_resourceloader_cachemode) **CACHE_MODE_REPLACE_DEEP** = ``4``

Like [`CACHE_MODE_REPLACE`](#class_resourceloader_constant_cache_mode_replace), but propagated recursively down the tree of dependencies (external resources).

<!-- rst-class:: classref-section-separator -->

---

## 方法说明

<div id="_class_resourceloader_method_add_resource_format_loader"></div>

`void` **add_resource_format_loader** ( format_loader: [`ResourceFormatLoader`](class_resourceformatloader.md), at_front: [`bool`](class_bool.md) = false )<div id="class_resourceloader_method_add_resource_format_loader"></div>

Registers a new [`ResourceFormatLoader`](class_resourceformatloader.md). The ResourceLoader will use the ResourceFormatLoader as described in [`load`](#class_resourceloader_method_load).

This method is performed implicitly for ResourceFormatLoaders written in GDScript (see [`ResourceFormatLoader`](class_resourceformatloader.md) for more information).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_resourceloader_method_exists"></div>

[`bool`](class_bool.md) **exists** ( path: [`String`](class_string.md), type_hint: [`String`](class_string.md) = "" )<div id="class_resourceloader_method_exists"></div>

Returns whether a recognized resource exists for the given `path`.

An optional `type_hint` can be used to further specify the [`Resource`](class_resource.md) type that should be handled by the [`ResourceFormatLoader`](class_resourceformatloader.md). Anything that inherits from [`Resource`](class_resource.md) can be used as a type hint, for example [`Image`](class_image.md).

 **Note:** If you use [`Resource.take_over_path`](#class_resource_method_take_over_path), this method will return `true` for the taken path even if the resource wasn't saved (i.e. exists only in resource cache).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_resourceloader_method_get_dependencies"></div>

[`PackedStringArray`](class_packedstringarray.md) **get_dependencies** ( path: [`String`](class_string.md) )<div id="class_resourceloader_method_get_dependencies"></div>

Returns the dependencies for the resource at the given `path`.

 **Note:** The dependencies are returned with slices separated by `::`. You can use [`String.get_slice`](#class_string_method_get_slice) to get their components.

```

    for dep in ResourceLoader.get_dependencies(path):
        print(dep.get_slice("::", 0)) # Prints UID.
        print(dep.get_slice("::", 2)) # Prints path.
```



<!-- rst-class:: classref-item-separator -->

---

<div id="_class_resourceloader_method_get_recognized_extensions_for_type"></div>

[`PackedStringArray`](class_packedstringarray.md) **get_recognized_extensions_for_type** ( type: [`String`](class_string.md) )<div id="class_resourceloader_method_get_recognized_extensions_for_type"></div>

Returns the list of recognized extensions for a resource type.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_resourceloader_method_get_resource_uid"></div>

[`int`](class_int.md) **get_resource_uid** ( path: [`String`](class_string.md) )<div id="class_resourceloader_method_get_resource_uid"></div>

Returns the ID associated with a given resource path, or `-1` when no such ID exists.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_resourceloader_method_has_cached"></div>

[`bool`](class_bool.md) **has_cached** ( path: [`String`](class_string.md) )<div id="class_resourceloader_method_has_cached"></div>

Returns whether a cached resource is available for the given `path`.

Once a resource has been loaded by the engine, it is cached in memory for faster access, and future calls to the [`load`](#class_resourceloader_method_load) method will use the cached version. The cached resource can be overridden by using [`Resource.take_over_path`](#class_resource_method_take_over_path) on a new resource for that same path.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_resourceloader_method_load"></div>

[`Resource`](class_resource.md) **load** ( path: [`String`](class_string.md), type_hint: [`String`](class_string.md) = "", cache_mode: [CacheMode](#enum_resourceloader_cachemode) = 1 )<div id="class_resourceloader_method_load"></div>

Loads a resource at the given `path`, caching the result for further access.

The registered [`ResourceFormatLoader`](class_resourceformatloader.md) s are queried sequentially to find the first one which can handle the file's extension, and then attempt loading. If loading fails, the remaining ResourceFormatLoaders are also attempted.

An optional `type_hint` can be used to further specify the [`Resource`](class_resource.md) type that should be handled by the [`ResourceFormatLoader`](class_resourceformatloader.md). Anything that inherits from [`Resource`](class_resource.md) can be used as a type hint, for example [`Image`](class_image.md).

The `cache_mode` property defines whether and how the cache should be used or updated when loading the resource. See [CacheMode](#enum_resourceloader_cachemode) for details.

Returns an empty resource if no [`ResourceFormatLoader`](class_resourceformatloader.md) could handle the file, and prints an error if no file is found at the specified path.

GDScript has a simplified [`@GDScript.load`](#class_@gdscript_method_load) built-in method which can be used in most situations, leaving the use of **ResourceLoader** for more advanced scenarios.

 **Note:** If [`ProjectSettings.editor/export/convert_text_resources_to_binary`](#class_projectsettings_property_editor/export/convert_text_resources_to_binary) is `true`, [`@GDScript.load`](#class_@gdscript_method_load) will not be able to read converted files in an exported project. If you rely on run-time loading of files present within the PCK, set [`ProjectSettings.editor/export/convert_text_resources_to_binary`](#class_projectsettings_property_editor/export/convert_text_resources_to_binary) to `false`.

 **Note:** Relative paths will be prefixed with `"res://"` before loading, to avoid unexpected results make sure your paths are absolute.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_resourceloader_method_load_threaded_get"></div>

[`Resource`](class_resource.md) **load_threaded_get** ( path: [`String`](class_string.md) )<div id="class_resourceloader_method_load_threaded_get"></div>

Returns the resource loaded by [`load_threaded_request`](#class_resourceloader_method_load_threaded_request).

If this is called before the loading thread is done (i.e. [`load_threaded_get_status`](#class_resourceloader_method_load_threaded_get_status) is not [`THREAD_LOAD_LOADED`](#class_resourceloader_constant_thread_load_loaded)), the calling thread will be blocked until the resource has finished loading. However, it's recommended to use [`load_threaded_get_status`](#class_resourceloader_method_load_threaded_get_status) to known when the load has actually completed.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_resourceloader_method_load_threaded_get_status"></div>

[ThreadLoadStatus](#enum_resourceloader_threadloadstatus) **load_threaded_get_status** ( path: [`String`](class_string.md), progress: [`Array`](class_array.md) = [] )<div id="class_resourceloader_method_load_threaded_get_status"></div>

Returns the status of a threaded loading operation started with [`load_threaded_request`](#class_resourceloader_method_load_threaded_request) for the resource at `path`. See [ThreadLoadStatus](#enum_resourceloader_threadloadstatus) for possible return values.

An array variable can optionally be passed via `progress`, and will return a one-element array containing the percentage of completion of the threaded loading.

 **Note:** The recommended way of using this method is to call it during different frames (e.g., in [`Node._process`](#class_node_private_method__process), instead of a loop).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_resourceloader_method_load_threaded_request"></div>

[Error](#enum_@globalscope_error) **load_threaded_request** ( path: [`String`](class_string.md), type_hint: [`String`](class_string.md) = "", use_sub_threads: [`bool`](class_bool.md) = false, cache_mode: [CacheMode](#enum_resourceloader_cachemode) = 1 )<div id="class_resourceloader_method_load_threaded_request"></div>

Loads the resource using threads. If `use_sub_threads` is `true`, multiple threads will be used to load the resource, which makes loading faster, but may affect the main thread (and thus cause game slowdowns).

The `cache_mode` property defines whether and how the cache should be used or updated when loading the resource. See [CacheMode](#enum_resourceloader_cachemode) for details.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_resourceloader_method_remove_resource_format_loader"></div>

`void` **remove_resource_format_loader** ( format_loader: [`ResourceFormatLoader`](class_resourceformatloader.md) )<div id="class_resourceloader_method_remove_resource_format_loader"></div>

Unregisters the given [`ResourceFormatLoader`](class_resourceformatloader.md).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_resourceloader_method_set_abort_on_missing_resources"></div>

`void` **set_abort_on_missing_resources** ( abort: [`bool`](class_bool.md) )<div id="class_resourceloader_method_set_abort_on_missing_resources"></div>

Changes the behavior on missing sub-resources. The default behavior is to abort loading.

[^virtual]: 本方法通常需要用户覆盖才能生效。
[^const]: 本方法无副作用，不会修改该实例的任何成员变量。
[^vararg]: 本方法除了能接受在此处描述的参数外，还能够继续接受任意数量的参数。
[^constructor]: 本方法用于构造某个类型。
[^static]: 调用本方法无需实例，可直接使用类名进行调用。
[^operator]: 本方法描述的是使用本类型作为左操作数的有效运算符。
[^bitfield]: 这个值是由下列位标志构成位掩码的整数。
[^void]: 无返回值。
