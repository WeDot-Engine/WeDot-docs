<!-- ⚠ 请勿编辑本文件 ⚠ -->
<!-- 本文档使用脚本从 WeDot 引擎源码仓库生成。 -->
<!-- 生成脚本：https://github.com/WeDot-Engine/WeDot/tree/4.3/doc/tools/make_md.py； -->
<!-- 原文件：https://github.com/WeDot-Engine/WeDot/tree/4.3/doc/classes/EditorResourcePreview.xml。 -->

<div id="_class_editorresourcepreview"></div>

# EditorResourcePreview

**继承：** [`Node`](class_node.md) **<** [`Object`](class_object.md)

A node used to generate previews of resources or files.

## 描述

This node is used to generate previews for resources or files.

 **Note:** This class shouldn't be instantiated directly. Instead, access the singleton using [`EditorInterface.get_resource_previewer`](#class_editorinterface_method_get_resource_previewer).

## 方法

| `void` | [`add_preview_generator`](#class_editorresourcepreview_method_add_preview_generator) ( generator: [`EditorResourcePreviewGenerator`](class_editorresourcepreviewgenerator.md) )                                                                                                        |
| `void` | [`check_for_invalidation`](#class_editorresourcepreview_method_check_for_invalidation) ( path: [`String`](class_string.md) )                                                                                                                                                           |
| `void` | [`queue_edited_resource_preview`](#class_editorresourcepreview_method_queue_edited_resource_preview) ( resource: [`Resource`](class_resource.md), receiver: [`Object`](class_object.md), receiver_func: [`StringName`](class_stringname.md), userdata: [`Variant`](class_variant.md) ) |
| `void` | [`queue_resource_preview`](#class_editorresourcepreview_method_queue_resource_preview) ( path: [`String`](class_string.md), receiver: [`Object`](class_object.md), receiver_func: [`StringName`](class_stringname.md), userdata: [`Variant`](class_variant.md) )                       |
| `void` | [`remove_preview_generator`](#class_editorresourcepreview_method_remove_preview_generator) ( generator: [`EditorResourcePreviewGenerator`](class_editorresourcepreviewgenerator.md) )                                                                                                  |

<!-- rst-class:: classref-section-separator -->

---

## 信号

<div id="_class_class_editorresourcepreview_signal_preview_invalidated"></div>

**preview_invalidated** ( path: [`String`](class_string.md) ) <div id="class_editorresourcepreview_signal_preview_invalidated"></div>

Emitted if a preview was invalidated (changed). `path` corresponds to the path of the preview.

<!-- rst-class:: classref-section-separator -->

---

## 方法说明

<div id="_class_editorresourcepreview_method_add_preview_generator"></div>

`void` **add_preview_generator** ( generator: [`EditorResourcePreviewGenerator`](class_editorresourcepreviewgenerator.md) )<div id="class_editorresourcepreview_method_add_preview_generator"></div>

Create an own, custom preview generator.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorresourcepreview_method_check_for_invalidation"></div>

`void` **check_for_invalidation** ( path: [`String`](class_string.md) )<div id="class_editorresourcepreview_method_check_for_invalidation"></div>

Check if the resource changed, if so, it will be invalidated and the corresponding signal emitted.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorresourcepreview_method_queue_edited_resource_preview"></div>

`void` **queue_edited_resource_preview** ( resource: [`Resource`](class_resource.md), receiver: [`Object`](class_object.md), receiver_func: [`StringName`](class_stringname.md), userdata: [`Variant`](class_variant.md) )<div id="class_editorresourcepreview_method_queue_edited_resource_preview"></div>

Queue the `resource` being edited for preview. Once the preview is ready, the `receiver`'s `receiver_func` will be called. The `receiver_func` must take the following four arguments: [`String`](class_string.md) path, [`Texture2D`](class_texture2d.md) preview, [`Texture2D`](class_texture2d.md) thumbnail_preview, [`Variant`](class_variant.md) userdata. `userdata` can be anything, and will be returned when `receiver_func` is called.

 **Note:** If it was not possible to create the preview the `receiver_func` will still be called, but the preview will be null.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorresourcepreview_method_queue_resource_preview"></div>

`void` **queue_resource_preview** ( path: [`String`](class_string.md), receiver: [`Object`](class_object.md), receiver_func: [`StringName`](class_stringname.md), userdata: [`Variant`](class_variant.md) )<div id="class_editorresourcepreview_method_queue_resource_preview"></div>

Queue a resource file located at `path` for preview. Once the preview is ready, the `receiver`'s `receiver_func` will be called. The `receiver_func` must take the following four arguments: [`String`](class_string.md) path, [`Texture2D`](class_texture2d.md) preview, [`Texture2D`](class_texture2d.md) thumbnail_preview, [`Variant`](class_variant.md) userdata. `userdata` can be anything, and will be returned when `receiver_func` is called.

 **Note:** If it was not possible to create the preview the `receiver_func` will still be called, but the preview will be null.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorresourcepreview_method_remove_preview_generator"></div>

`void` **remove_preview_generator** ( generator: [`EditorResourcePreviewGenerator`](class_editorresourcepreviewgenerator.md) )<div id="class_editorresourcepreview_method_remove_preview_generator"></div>

Removes a custom preview generator.

[^virtual]: 本方法通常需要用户覆盖才能生效。
[^const]: 本方法无副作用，不会修改该实例的任何成员变量。
[^vararg]: 本方法除了能接受在此处描述的参数外，还能够继续接受任意数量的参数。
[^constructor]: 本方法用于构造某个类型。
[^static]: 调用本方法无需实例，可直接使用类名进行调用。
[^operator]: 本方法描述的是使用本类型作为左操作数的有效运算符。
[^bitfield]: 这个值是由下列位标志构成位掩码的整数。
[^void]: 无返回值。
