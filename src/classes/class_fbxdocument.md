<!-- ⚠ 请勿编辑本文件 ⚠ -->
<!-- 本文档使用脚本从 WeDot 引擎源码仓库生成。 -->
<!-- 生成脚本：https://github.com/WeDot-Engine/WeDot/tree/master/doc/tools/make_md.py； -->
<!-- 原文件：https://github.com/WeDot-Engine/WeDot/tree/master/modules/fbx/doc_classes/FBXDocument.xml。 -->

<div id="_class_fbxdocument"></div>

# FBXDocument

**实验性：** This class may be changed or removed in future versions.

**继承：** [`GLTFDocument`](class_gltfdocument.md) **<** [`Resource`](class_resource.md) **<** [`RefCounted`](class_refcounted.md) **<** [`Object`](class_object.md)

Handles FBX documents.

## 描述

The FBXDocument handles FBX documents. It provides methods to append data from buffers or files, generate scenes, and register/unregister document extensions.

When exporting FBX from Blender, use the "FBX Units Scale" option. The "FBX Units Scale" option sets the correct scale factor and avoids manual adjustments when re-importing into Blender, such as through glTF export.

[^virtual]: 本方法通常需要用户覆盖才能生效。
[^const]: 本方法无副作用，不会修改该实例的任何成员变量。
[^vararg]: 本方法除了能接受在此处描述的参数外，还能够继续接受任意数量的参数。
[^constructor]: 本方法用于构造某个类型。
[^static]: 调用本方法无需实例，可直接使用类名进行调用。
[^operator]: 本方法描述的是使用本类型作为左操作数的有效运算符。
[^bitfield]: 这个值是由下列位标志构成位掩码的整数。
[^void]: 无返回值。
