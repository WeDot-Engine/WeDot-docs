<!-- ⚠ 请勿编辑本文件 ⚠ -->
<!-- 本文档使用脚本从 WeDot 引擎源码仓库生成。 -->
<!-- 生成脚本：https://github.com/WeDot-Engine/WeDot/tree/4.3/doc/tools/make_md.py； -->
<!-- 原文件：https://github.com/WeDot-Engine/WeDot/tree/4.3/doc/classes/PlaceholderTexture3D.xml。 -->

<div id="_class_placeholdertexture3d"></div>

# PlaceholderTexture3D

**继承：** [`Texture3D`](class_texture3d.md) **<** [`Texture`](class_texture.md) **<** [`Resource`](class_resource.md) **<** [`RefCounted`](class_refcounted.md) **<** [`Object`](class_object.md)

Placeholder class for a 3-dimensional texture.

## 描述

This class is used when loading a project that uses a [`Texture3D`](class_texture3d.md) subclass in 2 conditions:

- When running the project exported in dedicated server mode, only the texture's dimensions are kept (as they may be relied upon for gameplay purposes or positioning of other elements). This allows reducing the exported PCK's size significantly.

- When this subclass is missing due to using a different engine version or build (e.g. modules disabled).

 **Note:** This is not intended to be used as an actual texture for rendering. It is not guaranteed to work like one in shaders or materials (for example when calculating UV).

## 属性

| [`Vector3i`](class_vector3i.md) | [`size`](#class_placeholdertexture3d_property_size) | ``Vector3i(1, 1, 1)`` |

<!-- rst-class:: classref-section-separator -->

---

## 属性说明

<div id="_class_placeholdertexture3d_property_size"></div>

[`Vector3i`](class_vector3i.md) **size** = ``Vector3i(1, 1, 1)`` <div id="class_placeholdertexture3d_property_size"></div>

- `void` **set_size** ( value: [`Vector3i`](class_vector3i.md) )
- [`Vector3i`](class_vector3i.md) **get_size** ( )

The texture's size (in pixels).

[^virtual]: 本方法通常需要用户覆盖才能生效。
[^const]: 本方法无副作用，不会修改该实例的任何成员变量。
[^vararg]: 本方法除了能接受在此处描述的参数外，还能够继续接受任意数量的参数。
[^constructor]: 本方法用于构造某个类型。
[^static]: 调用本方法无需实例，可直接使用类名进行调用。
[^operator]: 本方法描述的是使用本类型作为左操作数的有效运算符。
[^bitfield]: 这个值是由下列位标志构成位掩码的整数。
[^void]: 无返回值。
