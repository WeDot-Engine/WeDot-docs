<!-- ⚠ 请勿编辑本文件 ⚠ -->
<!-- 本文档使用脚本从 WeDot 引擎源码仓库生成。 -->
<!-- 生成脚本：https://github.com/WeDot-Engine/WeDot/tree/4.3/doc/tools/make_md.py； -->
<!-- 原文件：https://github.com/WeDot-Engine/WeDot/tree/4.3/modules/openxr/doc_classes/OpenXRCompositionLayerQuad.xml。 -->

<div id="_class_openxrcompositionlayerquad"></div>

# OpenXRCompositionLayerQuad

**实验性：** This class may be changed or removed in future versions.

**继承：** [`OpenXRCompositionLayer`](class_openxrcompositionlayer.md) **<** [`Node3D`](class_node3d.md) **<** [`Node`](class_node.md) **<** [`Object`](class_object.md)

An OpenXR composition layer that is rendered as a quad.

## 描述

An OpenXR composition layer that allows rendering a [`SubViewport`](class_subviewport.md) on a quad.

## 属性

| [`Vector2`](class_vector2.md) | [`quad_size`](#class_openxrcompositionlayerquad_property_quad_size) | ``Vector2(1, 1)`` |

<!-- rst-class:: classref-section-separator -->

---

## 属性说明

<div id="_class_openxrcompositionlayerquad_property_quad_size"></div>

[`Vector2`](class_vector2.md) **quad_size** = ``Vector2(1, 1)`` <div id="class_openxrcompositionlayerquad_property_quad_size"></div>

- `void` **set_quad_size** ( value: [`Vector2`](class_vector2.md) )
- [`Vector2`](class_vector2.md) **get_quad_size** ( )

The dimensions of the quad.

[^virtual]: 本方法通常需要用户覆盖才能生效。
[^const]: 本方法无副作用，不会修改该实例的任何成员变量。
[^vararg]: 本方法除了能接受在此处描述的参数外，还能够继续接受任意数量的参数。
[^constructor]: 本方法用于构造某个类型。
[^static]: 调用本方法无需实例，可直接使用类名进行调用。
[^operator]: 本方法描述的是使用本类型作为左操作数的有效运算符。
[^bitfield]: 这个值是由下列位标志构成位掩码的整数。
[^void]: 无返回值。
