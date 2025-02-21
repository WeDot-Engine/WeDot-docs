<!-- ⚠ 请勿编辑本文件 ⚠ -->
<!-- 本文档使用脚本从 WeDot 引擎源码仓库生成。 -->
<!-- 生成脚本：https://github.com/WeDot-Engine/WeDot/tree/master/doc/tools/make_md.py； -->
<!-- 原文件：https://github.com/WeDot-Engine/WeDot/tree/master/doc/classes/VisualShaderNodeTexture2DArray.xml。 -->

<div id="_class_visualshadernodetexture2darray"></div>

# VisualShaderNodeTexture2DArray

**继承：** [`VisualShaderNodeSample3D`](class_visualshadernodesample3d.md) **<** [`VisualShaderNode`](class_visualshadernode.md) **<** [`Resource`](class_resource.md) **<** [`RefCounted`](class_refcounted.md) **<** [`Object`](class_object.md)

A 2D texture uniform array to be used within the visual shader graph.

## 描述

Translated to `uniform sampler2DArray` in the shader language.

## 属性

|||
|:-:|:--|
| [`TextureLayered`](class_texturelayered.md) | [`texture_array`](class_visualshadernodetexture2darray.md#class_visualshadernodetexture2darray_property_texture_array) |

<!-- rst-class:: classref-section-separator -->

---

## 属性说明

<div id="_class_visualshadernodetexture2darray_property_texture_array"></div>

[`TextureLayered`](class_texturelayered.md) **texture_array** <div id="class_visualshadernodetexture2darray_property_texture_array"></div>

- `void` **set_texture_array** ( value: [`TextureLayered`](class_texturelayered.md) )
- [`TextureLayered`](class_texturelayered.md) **get_texture_array** ( )

A source texture array. Used if [`VisualShaderNodeSample3D.source`](class_visualshadernodesample3d.md#class_visualshadernodesample3d_property_source) is set to [`VisualShaderNodeSample3D.SOURCE_TEXTURE`](class_visualshadernodesample3d.md#class_visualshadernodesample3d_constant_source_texture).

[^virtual]: 本方法通常需要用户覆盖才能生效。
[^const]: 本方法无副作用，不会修改该实例的任何成员变量。
[^vararg]: 本方法除了能接受在此处描述的参数外，还能够继续接受任意数量的参数。
[^constructor]: 本方法用于构造某个类型。
[^static]: 调用本方法无需实例，可直接使用类名进行调用。
[^operator]: 本方法描述的是使用本类型作为左操作数的有效运算符。
[^bitfield]: 这个值是由下列位标志构成位掩码的整数。
[^void]: 无返回值。
