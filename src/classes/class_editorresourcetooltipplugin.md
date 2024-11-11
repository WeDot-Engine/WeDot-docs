<!-- ⚠ 请勿编辑本文件 ⚠ -->
<!-- 本文档使用脚本从 WeDot 引擎源码仓库生成。 -->
<!-- 生成脚本：https://github.com/WeDot-Engine/WeDot/tree/master/doc/tools/make_md.py； -->
<!-- 原文件：https://github.com/WeDot-Engine/WeDot/tree/master/doc/classes/EditorResourceTooltipPlugin.xml。 -->

<div id="_class_editorresourcetooltipplugin"></div>

# EditorResourceTooltipPlugin

**继承：** [`RefCounted`](class_refcounted.md) **<** [`Object`](class_object.md)

A plugin that advanced tooltip for its handled resource type.

## 描述

Resource tooltip plugins are used by [`FileSystemDock`](class_filesystemdock.md) to generate customized tooltips for specific resources. E.g. tooltip for a [`Texture2D`](class_texture2d.md) displays a bigger preview and the texture's dimensions.

A plugin must be first registered with [`FileSystemDock.add_resource_tooltip_plugin`](class_filesystemdock.md#class_filesystemdock_method_add_resource_tooltip_plugin). When the user hovers a resource in filesystem dock which is handled by the plugin, [`_make_tooltip_for_path`](class_editorresourcetooltipplugin.md#class_editorresourcetooltipplugin_private_method__make_tooltip_for_path) is called to create the tooltip. It works similarly to [`Control._make_custom_tooltip`](class_control.md#class_control_private_method__make_custom_tooltip).

## 方法

|||
|:-:|:--|
| [`bool`](class_bool.md)       | [`_handles`](class_editorresourcetooltipplugin.md#class_editorresourcetooltipplugin_private_method__handles) ( type: [`String`](class_string.md) ) virtual[^virtual] const[^const]                                                                                                                 |
| [`Control`](class_control.md) | [`_make_tooltip_for_path`](class_editorresourcetooltipplugin.md#class_editorresourcetooltipplugin_private_method__make_tooltip_for_path) ( path: [`String`](class_string.md), metadata: [`Dictionary`](class_dictionary.md), base: [`Control`](class_control.md) ) virtual[^virtual] const[^const] |
| `void`                        | [`request_thumbnail`](class_editorresourcetooltipplugin.md#class_editorresourcetooltipplugin_method_request_thumbnail) ( path: [`String`](class_string.md), control: [`TextureRect`](class_texturerect.md) ) const[^const]                                                                         |

<!-- rst-class:: classref-section-separator -->

---

## 方法说明

<div id="_class_editorresourcetooltipplugin_private_method__handles"></div>

[`bool`](class_bool.md) **_handles** ( type: [`String`](class_string.md) ) virtual[^virtual] const[^const]<div id="class_editorresourcetooltipplugin_private_method__handles"></div>

Return `true` if the plugin is going to handle the given [`Resource`](class_resource.md) `type`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorresourcetooltipplugin_private_method__make_tooltip_for_path"></div>

[`Control`](class_control.md) **_make_tooltip_for_path** ( path: [`String`](class_string.md), metadata: [`Dictionary`](class_dictionary.md), base: [`Control`](class_control.md) ) virtual[^virtual] const[^const]<div id="class_editorresourcetooltipplugin_private_method__make_tooltip_for_path"></div>

Create and return a tooltip that will be displayed when the user hovers a resource under the given `path` in filesystem dock.

The `metadata` dictionary is provided by preview generator (see [`EditorResourcePreviewGenerator._generate`](class_editorresourcepreviewgenerator.md#class_editorresourcepreviewgenerator_private_method__generate)).

 `base` is the base default tooltip, which is a [`VBoxContainer`](class_vboxcontainer.md) with a file name, type and size labels. If another plugin handled the same file type, `base` will be output from the previous plugin. For best result, make sure the base tooltip is part of the returned [`Control`](class_control.md).

 **Note:** It's unadvised to use [`ResourceLoader.load`](class_resourceloader.md#class_resourceloader_method_load), especially with heavy resources like models or textures, because it will make the editor unresponsive when creating the tooltip. You can use [`request_thumbnail`](class_editorresourcetooltipplugin.md#class_editorresourcetooltipplugin_method_request_thumbnail) if you want to display a preview in your tooltip.

 **Note:** If you decide to discard the `base`, make sure to call [`Node.queue_free`](class_node.md#class_node_method_queue_free), because it's not freed automatically.

```

    func _make_tooltip_for_path(path, metadata, base):
        var t_rect = TextureRect.new()
        request_thumbnail(path, t_rect)
        base.add_child(t_rect) # The TextureRect will appear at the bottom of the tooltip.
        return base
```



<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorresourcetooltipplugin_method_request_thumbnail"></div>

`void` **request_thumbnail** ( path: [`String`](class_string.md), control: [`TextureRect`](class_texturerect.md) ) const[^const]<div id="class_editorresourcetooltipplugin_method_request_thumbnail"></div>

Requests a thumbnail for the given [`TextureRect`](class_texturerect.md). The thumbnail is created asynchronously by [`EditorResourcePreview`](class_editorresourcepreview.md) and automatically set when available.

[^virtual]: 本方法通常需要用户覆盖才能生效。
[^const]: 本方法无副作用，不会修改该实例的任何成员变量。
[^vararg]: 本方法除了能接受在此处描述的参数外，还能够继续接受任意数量的参数。
[^constructor]: 本方法用于构造某个类型。
[^static]: 调用本方法无需实例，可直接使用类名进行调用。
[^operator]: 本方法描述的是使用本类型作为左操作数的有效运算符。
[^bitfield]: 这个值是由下列位标志构成位掩码的整数。
[^void]: 无返回值。
