<!-- ⚠ 请勿编辑本文件 ⚠ -->
<!-- 本文档使用脚本从 WeDot 引擎源码仓库生成。 -->
<!-- 生成脚本：https://github.com/WeDot-Engine/WeDot/tree/master/doc/tools/make_md.py； -->
<!-- 原文件：https://github.com/WeDot-Engine/WeDot/tree/master/doc/classes/ResourceFormatLoader.xml。 -->

<div id="_class_resourceformatloader"></div>

# ResourceFormatLoader

**继承：** [`RefCounted`](class_refcounted.md) **<** [`Object`](class_object.md)

Loads a specific resource type from a file.

## 描述

Godot loads resources in the editor or in exported games using ResourceFormatLoaders. They are queried automatically via the [`ResourceLoader`](class_resourceloader.md) singleton, or when a resource with internal dependencies is loaded. Each file type may load as a different resource type, so multiple ResourceFormatLoaders are registered in the engine.

Extending this class allows you to define your own loader. Be sure to respect the documented return types and values. You should give it a global class name with `class_name` for it to be registered. Like built-in ResourceFormatLoaders, it will be called automatically when loading resources of its handled type(s). You may also implement a [`ResourceFormatSaver`](class_resourceformatsaver.md).

 **Note:** You can also extend [`EditorImportPlugin`](class_editorimportplugin.md) if the resource type you need exists but Godot is unable to load its format. Choosing one way over another depends on if the format is suitable or not for the final exported game. For example, it's better to import `.png` textures as `.ctex` ([`CompressedTexture2D`](class_compressedtexture2d.md)) first, so they can be loaded with better efficiency on the graphics card.

## 方法

|||
|:-:|:--|
| [`bool`](class_bool.md)                           | [`_exists`](class_resourceformatloader.md#class_resourceformatloader_private_method__exists) ( path: [`String`](class_string.md) ) virtual[^virtual] const[^const]                                                                                                                      |
| [`PackedStringArray`](class_packedstringarray.md) | [`_get_classes_used`](class_resourceformatloader.md#class_resourceformatloader_private_method__get_classes_used) ( path: [`String`](class_string.md) ) virtual[^virtual] const[^const]                                                                                                  |
| [`PackedStringArray`](class_packedstringarray.md) | [`_get_dependencies`](class_resourceformatloader.md#class_resourceformatloader_private_method__get_dependencies) ( path: [`String`](class_string.md), add_types: [`bool`](class_bool.md) ) virtual[^virtual] const[^const]                                                              |
| [`PackedStringArray`](class_packedstringarray.md) | [`_get_recognized_extensions`](class_resourceformatloader.md#class_resourceformatloader_private_method__get_recognized_extensions) ( ) virtual[^virtual] const[^const]                                                                                                                  |
| [`String`](class_string.md)                       | [`_get_resource_script_class`](class_resourceformatloader.md#class_resourceformatloader_private_method__get_resource_script_class) ( path: [`String`](class_string.md) ) virtual[^virtual] const[^const]                                                                                |
| [`String`](class_string.md)                       | [`_get_resource_type`](class_resourceformatloader.md#class_resourceformatloader_private_method__get_resource_type) ( path: [`String`](class_string.md) ) virtual[^virtual] const[^const]                                                                                                |
| [`int`](class_int.md)                             | [`_get_resource_uid`](class_resourceformatloader.md#class_resourceformatloader_private_method__get_resource_uid) ( path: [`String`](class_string.md) ) virtual[^virtual] const[^const]                                                                                                  |
| [`bool`](class_bool.md)                           | [`_handles_type`](class_resourceformatloader.md#class_resourceformatloader_private_method__handles_type) ( type: [`StringName`](class_stringname.md) ) virtual[^virtual] const[^const]                                                                                                  |
| [`Variant`](class_variant.md)                     | [`_load`](class_resourceformatloader.md#class_resourceformatloader_private_method__load) ( path: [`String`](class_string.md), original_path: [`String`](class_string.md), use_sub_threads: [`bool`](class_bool.md), cache_mode: [`int`](class_int.md) ) virtual[^virtual] const[^const] |
| [`bool`](class_bool.md)                           | [`_recognize_path`](class_resourceformatloader.md#class_resourceformatloader_private_method__recognize_path) ( path: [`String`](class_string.md), type: [`StringName`](class_stringname.md) ) virtual[^virtual] const[^const]                                                           |
| [Error](#enum_@globalscope_error)                 | [`_rename_dependencies`](class_resourceformatloader.md#class_resourceformatloader_private_method__rename_dependencies) ( path: [`String`](class_string.md), renames: [`Dictionary`](class_dictionary.md) ) virtual[^virtual] const[^const]                                              |

<!-- rst-class:: classref-section-separator -->

---

## 枚举

<div id="_class_enum_resourceformatloader_cachemode"></div>

enum **CacheMode**: <div id="enum_resourceformatloader_cachemode"></div>

<div id="_class_resourceformatloader_constant_cache_mode_ignore"></div>

[CacheMode](#enum_resourceformatloader_cachemode) **CACHE_MODE_IGNORE** = ``0``

Neither the main resource (the one requested to be loaded) nor any of its subresources are retrieved from cache nor stored into it. Dependencies (external resources) are loaded with [`CACHE_MODE_REUSE`](class_resourceformatloader.md#class_resourceformatloader_constant_cache_mode_reuse).

<div id="_class_resourceformatloader_constant_cache_mode_reuse"></div>

[CacheMode](#enum_resourceformatloader_cachemode) **CACHE_MODE_REUSE** = ``1``

The main resource (the one requested to be loaded), its subresources, and its dependencies (external resources) are retrieved from cache if present, instead of loaded. Those not cached are loaded and then stored into the cache. The same rules are propagated recursively down the tree of dependencies (external resources).

<div id="_class_resourceformatloader_constant_cache_mode_replace"></div>

[CacheMode](#enum_resourceformatloader_cachemode) **CACHE_MODE_REPLACE** = ``2``

Like [`CACHE_MODE_REUSE`](class_resourceformatloader.md#class_resourceformatloader_constant_cache_mode_reuse), but the cache is checked for the main resource (the one requested to be loaded) as well as for each of its subresources. Those already in the cache, as long as the loaded and cached types match, have their data refreshed from storage into the already existing instances. Otherwise, they are recreated as completely new objects.

<div id="_class_resourceformatloader_constant_cache_mode_ignore_deep"></div>

[CacheMode](#enum_resourceformatloader_cachemode) **CACHE_MODE_IGNORE_DEEP** = ``3``

Like [`CACHE_MODE_IGNORE`](class_resourceformatloader.md#class_resourceformatloader_constant_cache_mode_ignore), but propagated recursively down the tree of dependencies (external resources).

<div id="_class_resourceformatloader_constant_cache_mode_replace_deep"></div>

[CacheMode](#enum_resourceformatloader_cachemode) **CACHE_MODE_REPLACE_DEEP** = ``4``

Like [`CACHE_MODE_REPLACE`](class_resourceformatloader.md#class_resourceformatloader_constant_cache_mode_replace), but propagated recursively down the tree of dependencies (external resources).

<!-- rst-class:: classref-section-separator -->

---

## 方法说明

<div id="_class_resourceformatloader_private_method__exists"></div>

[`bool`](class_bool.md) **_exists** ( path: [`String`](class_string.md) ) virtual[^virtual] const[^const]<div id="class_resourceformatloader_private_method__exists"></div>

该方法目前没有描述，请帮我们\ :ref:`贡献一个 <doc_updating_the_class_reference>`\ 吧！

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_resourceformatloader_private_method__get_classes_used"></div>

[`PackedStringArray`](class_packedstringarray.md) **_get_classes_used** ( path: [`String`](class_string.md) ) virtual[^virtual] const[^const]<div id="class_resourceformatloader_private_method__get_classes_used"></div>

该方法目前没有描述，请帮我们\ :ref:`贡献一个 <doc_updating_the_class_reference>`\ 吧！

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_resourceformatloader_private_method__get_dependencies"></div>

[`PackedStringArray`](class_packedstringarray.md) **_get_dependencies** ( path: [`String`](class_string.md), add_types: [`bool`](class_bool.md) ) virtual[^virtual] const[^const]<div id="class_resourceformatloader_private_method__get_dependencies"></div>

If implemented, gets the dependencies of a given resource. If `add_types` is `true`, paths should be appended `::TypeName`, where `TypeName` is the class name of the dependency.

 **Note:** Custom resource types defined by scripts aren't known by the [`ClassDB`](class_classdb.md), so you might just return `"Resource"` for them.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_resourceformatloader_private_method__get_recognized_extensions"></div>

[`PackedStringArray`](class_packedstringarray.md) **_get_recognized_extensions** ( ) virtual[^virtual] const[^const]<div id="class_resourceformatloader_private_method__get_recognized_extensions"></div>

Gets the list of extensions for files this loader is able to read.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_resourceformatloader_private_method__get_resource_script_class"></div>

[`String`](class_string.md) **_get_resource_script_class** ( path: [`String`](class_string.md) ) virtual[^virtual] const[^const]<div id="class_resourceformatloader_private_method__get_resource_script_class"></div>

Returns the script class name associated with the [`Resource`](class_resource.md) under the given `path`. If the resource has no script or the script isn't a named class, it should return `""`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_resourceformatloader_private_method__get_resource_type"></div>

[`String`](class_string.md) **_get_resource_type** ( path: [`String`](class_string.md) ) virtual[^virtual] const[^const]<div id="class_resourceformatloader_private_method__get_resource_type"></div>

Gets the class name of the resource associated with the given path. If the loader cannot handle it, it should return `""`.

 **Note:** Custom resource types defined by scripts aren't known by the [`ClassDB`](class_classdb.md), so you might just return `"Resource"` for them.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_resourceformatloader_private_method__get_resource_uid"></div>

[`int`](class_int.md) **_get_resource_uid** ( path: [`String`](class_string.md) ) virtual[^virtual] const[^const]<div id="class_resourceformatloader_private_method__get_resource_uid"></div>

该方法目前没有描述，请帮我们\ :ref:`贡献一个 <doc_updating_the_class_reference>`\ 吧！

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_resourceformatloader_private_method__handles_type"></div>

[`bool`](class_bool.md) **_handles_type** ( type: [`StringName`](class_stringname.md) ) virtual[^virtual] const[^const]<div id="class_resourceformatloader_private_method__handles_type"></div>

Tells which resource class this loader can load.

 **Note:** Custom resource types defined by scripts aren't known by the [`ClassDB`](class_classdb.md), so you might just handle `"Resource"` for them.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_resourceformatloader_private_method__load"></div>

[`Variant`](class_variant.md) **_load** ( path: [`String`](class_string.md), original_path: [`String`](class_string.md), use_sub_threads: [`bool`](class_bool.md), cache_mode: [`int`](class_int.md) ) virtual[^virtual] const[^const]<div id="class_resourceformatloader_private_method__load"></div>

Loads a resource when the engine finds this loader to be compatible. If the loaded resource is the result of an import, `original_path` will target the source file. Returns a [`Resource`](class_resource.md) object on success, or an [Error](#enum_@globalscope_error) constant in case of failure.

The `cache_mode` property defines whether and how the cache should be used or updated when loading the resource. See [CacheMode](#enum_resourceformatloader_cachemode) for details.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_resourceformatloader_private_method__recognize_path"></div>

[`bool`](class_bool.md) **_recognize_path** ( path: [`String`](class_string.md), type: [`StringName`](class_stringname.md) ) virtual[^virtual] const[^const]<div id="class_resourceformatloader_private_method__recognize_path"></div>

Tells whether or not this loader should load a resource from its resource path for a given type.

If it is not implemented, the default behavior returns whether the path's extension is within the ones provided by [`_get_recognized_extensions`](class_resourceformatloader.md#class_resourceformatloader_private_method__get_recognized_extensions), and if the type is within the ones provided by [`_get_resource_type`](class_resourceformatloader.md#class_resourceformatloader_private_method__get_resource_type).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_resourceformatloader_private_method__rename_dependencies"></div>

[Error](#enum_@globalscope_error) **_rename_dependencies** ( path: [`String`](class_string.md), renames: [`Dictionary`](class_dictionary.md) ) virtual[^virtual] const[^const]<div id="class_resourceformatloader_private_method__rename_dependencies"></div>

If implemented, renames dependencies within the given resource and saves it. `renames` is a dictionary `{ String => String }` mapping old dependency paths to new paths.

Returns [`@GlobalScope.OK`](class_@globalscope.md#class_@globalscope_constant_ok) on success, or an [Error](#enum_@globalscope_error) constant in case of failure.

[^virtual]: 本方法通常需要用户覆盖才能生效。
[^const]: 本方法无副作用，不会修改该实例的任何成员变量。
[^vararg]: 本方法除了能接受在此处描述的参数外，还能够继续接受任意数量的参数。
[^constructor]: 本方法用于构造某个类型。
[^static]: 调用本方法无需实例，可直接使用类名进行调用。
[^operator]: 本方法描述的是使用本类型作为左操作数的有效运算符。
[^bitfield]: 这个值是由下列位标志构成位掩码的整数。
[^void]: 无返回值。
