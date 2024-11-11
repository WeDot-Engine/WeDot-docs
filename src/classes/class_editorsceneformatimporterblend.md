<!-- ⚠ 请勿编辑本文件 ⚠ -->
<!-- 本文档使用脚本从 WeDot 引擎源码仓库生成。 -->
<!-- 生成脚本：https://github.com/WeDot-Engine/WeDot/tree/master/doc/tools/make_md.py； -->
<!-- 原文件：https://github.com/WeDot-Engine/WeDot/tree/master/modules/gltf/doc_classes/EditorSceneFormatImporterBlend.xml。 -->

<div id="_class_editorsceneformatimporterblend"></div>

# EditorSceneFormatImporterBlend

**继承：** [`EditorSceneFormatImporter`](class_editorsceneformatimporter.md) **<** [`RefCounted`](class_refcounted.md) **<** [`Object`](class_object.md)

Importer for Blender's `.blend` scene file format.

## 描述

Imports Blender scenes in the `.blend` file format through the glTF 2.0 3D import pipeline. This importer requires Blender to be installed by the user, so that it can be used to export the scene as glTF 2.0.

The location of the Blender binary is set via the `filesystem/import/blender/blender_path` editor setting.

This importer is only used if [`ProjectSettings.filesystem/import/blender/enabled`](class_projectsettings.md#class_projectsettings_property_filesystem/import/blender/enabled) is enabled, otherwise `.blend` files present in the project folder are not imported.

Blend import requires Blender 3.0.

Internally, the EditorSceneFormatImporterBlend uses the Blender glTF "Use Original" mode to reference external textures.

[^virtual]: 本方法通常需要用户覆盖才能生效。
[^const]: 本方法无副作用，不会修改该实例的任何成员变量。
[^vararg]: 本方法除了能接受在此处描述的参数外，还能够继续接受任意数量的参数。
[^constructor]: 本方法用于构造某个类型。
[^static]: 调用本方法无需实例，可直接使用类名进行调用。
[^operator]: 本方法描述的是使用本类型作为左操作数的有效运算符。
[^bitfield]: 这个值是由下列位标志构成位掩码的整数。
[^void]: 无返回值。
