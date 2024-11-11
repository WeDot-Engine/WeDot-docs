<!-- ⚠ 请勿编辑本文件 ⚠ -->
<!-- 本文档使用脚本从 WeDot 引擎源码仓库生成。 -->
<!-- 生成脚本：https://github.com/WeDot-Engine/WeDot/tree/master/doc/tools/make_md.py； -->
<!-- 原文件：https://github.com/WeDot-Engine/WeDot/tree/master/doc/classes/ResourceImporter.xml。 -->

<div id="_class_resourceimporter"></div>

# ResourceImporter

**继承：** [`RefCounted`](class_refcounted.md) **<** [`Object`](class_object.md)

**派生：** [`EditorImportPlugin`](class_editorimportplugin.md), [`ResourceImporterBitMap`](class_resourceimporterbitmap.md), [`ResourceImporterBMFont`](class_resourceimporterbmfont.md), [`ResourceImporterCSVTranslation`](class_resourceimportercsvtranslation.md), [`ResourceImporterDynamicFont`](class_resourceimporterdynamicfont.md), [`ResourceImporterImage`](class_resourceimporterimage.md), [`ResourceImporterImageFont`](class_resourceimporterimagefont.md), [`ResourceImporterLayeredTexture`](class_resourceimporterlayeredtexture.md), [`ResourceImporterMP3`](class_resourceimportermp3.md), [`ResourceImporterOBJ`](class_resourceimporterobj.md), [`ResourceImporterOggVorbis`](class_resourceimporteroggvorbis.md), [`ResourceImporterScene`](class_resourceimporterscene.md), [`ResourceImporterShaderFile`](class_resourceimportershaderfile.md), [`ResourceImporterTexture`](class_resourceimportertexture.md), [`ResourceImporterTextureAtlas`](class_resourceimportertextureatlas.md), [`ResourceImporterWAV`](class_resourceimporterwav.md)

Base class for resource importers.

## 描述

This is the base class for Godot's resource importers. To implement your own resource importers using editor plugins, see [`EditorImportPlugin`](class_editorimportplugin.md).

<!-- rst-class:: classref-section-separator -->

---

## 枚举

<div id="_class_enum_resourceimporter_importorder"></div>

enum **ImportOrder**: <div id="enum_resourceimporter_importorder"></div>

<div id="_class_resourceimporter_constant_import_order_default"></div>

[ImportOrder](#enum_resourceimporter_importorder) **IMPORT_ORDER_DEFAULT** = ``0``

The default import order.

<div id="_class_resourceimporter_constant_import_order_scene"></div>

[ImportOrder](#enum_resourceimporter_importorder) **IMPORT_ORDER_SCENE** = ``100``

The import order for scenes, which ensures scenes are imported *after* all other core resources such as textures. Custom importers should generally have an import order lower than `100` to avoid issues when importing scenes that rely on custom resources.

[^virtual]: 本方法通常需要用户覆盖才能生效。
[^const]: 本方法无副作用，不会修改该实例的任何成员变量。
[^vararg]: 本方法除了能接受在此处描述的参数外，还能够继续接受任意数量的参数。
[^constructor]: 本方法用于构造某个类型。
[^static]: 调用本方法无需实例，可直接使用类名进行调用。
[^operator]: 本方法描述的是使用本类型作为左操作数的有效运算符。
[^bitfield]: 这个值是由下列位标志构成位掩码的整数。
[^void]: 无返回值。
