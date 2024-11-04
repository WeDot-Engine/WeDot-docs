<!-- ⚠ 请勿编辑本文件 ⚠ -->
<!-- 本文档使用脚本从 WeDot 引擎源码仓库生成。 -->
<!-- 生成脚本：https://github.com/WeDot-Engine/WeDot/tree/4.3/doc/tools/make_md.py； -->
<!-- 原文件：https://github.com/WeDot-Engine/WeDot/tree/4.3/doc/classes/EditorResourcePreviewGenerator.xml。 -->

<div id="_class_editorresourcepreviewgenerator"></div>

# EditorResourcePreviewGenerator

**继承：** [`RefCounted`](class_refcounted.md) **<** [`Object`](class_object.md)

Custom generator of previews.

## 描述

Custom code to generate previews. Please check `file_dialog/thumbnail_size` in [`EditorSettings`](class_editorsettings.md) to find out the right size to do previews at.

## 方法

| [`bool`](class_bool.md)           | [`_can_generate_small_preview`](#class_editorresourcepreviewgenerator_private_method__can_generate_small_preview) ( ) virtual[^virtual] const[^const]                                                                                                         |
| [`Texture2D`](class_texture2d.md) | [`_generate`](#class_editorresourcepreviewgenerator_private_method__generate) ( resource: [`Resource`](class_resource.md), size: [`Vector2i`](class_vector2i.md), metadata: [`Dictionary`](class_dictionary.md) ) virtual[^virtual] const[^const]             |
| [`Texture2D`](class_texture2d.md) | [`_generate_from_path`](#class_editorresourcepreviewgenerator_private_method__generate_from_path) ( path: [`String`](class_string.md), size: [`Vector2i`](class_vector2i.md), metadata: [`Dictionary`](class_dictionary.md) ) virtual[^virtual] const[^const] |
| [`bool`](class_bool.md)           | [`_generate_small_preview_automatically`](#class_editorresourcepreviewgenerator_private_method__generate_small_preview_automatically) ( ) virtual[^virtual] const[^const]                                                                                     |
| [`bool`](class_bool.md)           | [`_handles`](#class_editorresourcepreviewgenerator_private_method__handles) ( type: [`String`](class_string.md) ) virtual[^virtual] const[^const]                                                                                                             |

<!-- rst-class:: classref-section-separator -->

---

## 方法说明

<div id="_class_editorresourcepreviewgenerator_private_method__can_generate_small_preview"></div>

[`bool`](class_bool.md) **_can_generate_small_preview** ( ) virtual[^virtual] const[^const]<div id="class_editorresourcepreviewgenerator_private_method__can_generate_small_preview"></div>

If this function returns `true`, the generator will call [`_generate`](#class_editorresourcepreviewgenerator_private_method__generate) or [`_generate_from_path`](#class_editorresourcepreviewgenerator_private_method__generate_from_path) for small previews as well.

By default, it returns `false`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorresourcepreviewgenerator_private_method__generate"></div>

[`Texture2D`](class_texture2d.md) **_generate** ( resource: [`Resource`](class_resource.md), size: [`Vector2i`](class_vector2i.md), metadata: [`Dictionary`](class_dictionary.md) ) virtual[^virtual] const[^const]<div id="class_editorresourcepreviewgenerator_private_method__generate"></div>

Generate a preview from a given resource with the specified size. This must always be implemented.

Returning an empty texture is an OK way to fail and let another generator take care.

Care must be taken because this function is always called from a thread (not the main thread).

 `metadata` dictionary can be modified to store file-specific metadata that can be used in [`EditorResourceTooltipPlugin._make_tooltip_for_path`](#class_editorresourcetooltipplugin_private_method__make_tooltip_for_path) (like image size, sample length etc.).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorresourcepreviewgenerator_private_method__generate_from_path"></div>

[`Texture2D`](class_texture2d.md) **_generate_from_path** ( path: [`String`](class_string.md), size: [`Vector2i`](class_vector2i.md), metadata: [`Dictionary`](class_dictionary.md) ) virtual[^virtual] const[^const]<div id="class_editorresourcepreviewgenerator_private_method__generate_from_path"></div>

Generate a preview directly from a path with the specified size. Implementing this is optional, as default code will load and call [`_generate`](#class_editorresourcepreviewgenerator_private_method__generate).

Returning an empty texture is an OK way to fail and let another generator take care.

Care must be taken because this function is always called from a thread (not the main thread).

 `metadata` dictionary can be modified to store file-specific metadata that can be used in [`EditorResourceTooltipPlugin._make_tooltip_for_path`](#class_editorresourcetooltipplugin_private_method__make_tooltip_for_path) (like image size, sample length etc.).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorresourcepreviewgenerator_private_method__generate_small_preview_automatically"></div>

[`bool`](class_bool.md) **_generate_small_preview_automatically** ( ) virtual[^virtual] const[^const]<div id="class_editorresourcepreviewgenerator_private_method__generate_small_preview_automatically"></div>

If this function returns `true`, the generator will automatically generate the small previews from the normal preview texture generated by the methods [`_generate`](#class_editorresourcepreviewgenerator_private_method__generate) or [`_generate_from_path`](#class_editorresourcepreviewgenerator_private_method__generate_from_path).

By default, it returns `false`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorresourcepreviewgenerator_private_method__handles"></div>

[`bool`](class_bool.md) **_handles** ( type: [`String`](class_string.md) ) virtual[^virtual] const[^const]<div id="class_editorresourcepreviewgenerator_private_method__handles"></div>

Returns `true` if your generator supports the resource of type `type`.

[^virtual]: 本方法通常需要用户覆盖才能生效。
[^const]: 本方法无副作用，不会修改该实例的任何成员变量。
[^vararg]: 本方法除了能接受在此处描述的参数外，还能够继续接受任意数量的参数。
[^constructor]: 本方法用于构造某个类型。
[^static]: 调用本方法无需实例，可直接使用类名进行调用。
[^operator]: 本方法描述的是使用本类型作为左操作数的有效运算符。
[^bitfield]: 这个值是由下列位标志构成位掩码的整数。
[^void]: 无返回值。
