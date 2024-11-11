<!-- ⚠ 请勿编辑本文件 ⚠ -->
<!-- 本文档使用脚本从 WeDot 引擎源码仓库生成。 -->
<!-- 生成脚本：https://github.com/WeDot-Engine/WeDot/tree/master/doc/tools/make_md.py； -->
<!-- 原文件：https://github.com/WeDot-Engine/WeDot/tree/master/doc/classes/EditorResourceConversionPlugin.xml。 -->

<div id="_class_editorresourceconversionplugin"></div>

# EditorResourceConversionPlugin

**继承：** [`RefCounted`](class_refcounted.md) **<** [`Object`](class_object.md)

Plugin for adding custom converters from one resource format to another in the editor resource picker context menu; for example, converting a [`StandardMaterial3D`](class_standardmaterial3d.md) to a [`ShaderMaterial`](class_shadermaterial.md).

## 描述

**EditorResourceConversionPlugin** is invoked when the context menu is brought up for a resource in the editor inspector. Relevant conversion plugins will appear as menu options to convert the given resource to a target type.

Below shows an example of a basic plugin that will convert an [`ImageTexture`](class_imagetexture.md) to a [`PortableCompressedTexture2D`](class_portablecompressedtexture2d.md).



```gdscript

    extends EditorResourceConversionPlugin
    
    func _handles(resource: Resource):
        return resource is ImageTexture
    
    func _converts_to():
        return "PortableCompressedTexture2D"
    
    func _convert(itex: Resource):
        var ptex = PortableCompressedTexture2D.new()
        ptex.create_from_image(itex.get_image(), PortableCompressedTexture2D.COMPRESSION_MODE_LOSSLESS)
        return ptex
```



To use an **EditorResourceConversionPlugin**, register it using the [`EditorPlugin.add_resource_conversion_plugin`](class_editorplugin.md#class_editorplugin_method_add_resource_conversion_plugin) method first.



## 方法

|||
|:-:|:--|
| [`Resource`](class_resource.md) | [`_convert`](class_editorresourceconversionplugin.md#class_editorresourceconversionplugin_private_method__convert) ( resource: [`Resource`](class_resource.md) ) virtual[^virtual] const[^const] |
| [`String`](class_string.md)     | [`_converts_to`](class_editorresourceconversionplugin.md#class_editorresourceconversionplugin_private_method__converts_to) ( ) virtual[^virtual] const[^const]                                   |
| [`bool`](class_bool.md)         | [`_handles`](class_editorresourceconversionplugin.md#class_editorresourceconversionplugin_private_method__handles) ( resource: [`Resource`](class_resource.md) ) virtual[^virtual] const[^const] |

<!-- rst-class:: classref-section-separator -->

---

## 方法说明

<div id="_class_editorresourceconversionplugin_private_method__convert"></div>

[`Resource`](class_resource.md) **_convert** ( resource: [`Resource`](class_resource.md) ) virtual[^virtual] const[^const]<div id="class_editorresourceconversionplugin_private_method__convert"></div>

Takes an input [`Resource`](class_resource.md) and converts it to the type given in [`_converts_to`](class_editorresourceconversionplugin.md#class_editorresourceconversionplugin_private_method__converts_to). The returned [`Resource`](class_resource.md) is the result of the conversion, and the input [`Resource`](class_resource.md) remains unchanged.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorresourceconversionplugin_private_method__converts_to"></div>

[`String`](class_string.md) **_converts_to** ( ) virtual[^virtual] const[^const]<div id="class_editorresourceconversionplugin_private_method__converts_to"></div>

Returns the class name of the target type of [`Resource`](class_resource.md) that this plugin converts source resources to.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorresourceconversionplugin_private_method__handles"></div>

[`bool`](class_bool.md) **_handles** ( resource: [`Resource`](class_resource.md) ) virtual[^virtual] const[^const]<div id="class_editorresourceconversionplugin_private_method__handles"></div>

Called to determine whether a particular [`Resource`](class_resource.md) can be converted to the target resource type by this plugin.

[^virtual]: 本方法通常需要用户覆盖才能生效。
[^const]: 本方法无副作用，不会修改该实例的任何成员变量。
[^vararg]: 本方法除了能接受在此处描述的参数外，还能够继续接受任意数量的参数。
[^constructor]: 本方法用于构造某个类型。
[^static]: 调用本方法无需实例，可直接使用类名进行调用。
[^operator]: 本方法描述的是使用本类型作为左操作数的有效运算符。
[^bitfield]: 这个值是由下列位标志构成位掩码的整数。
[^void]: 无返回值。
