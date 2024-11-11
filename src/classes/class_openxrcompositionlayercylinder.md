<!-- ⚠ 请勿编辑本文件 ⚠ -->
<!-- 本文档使用脚本从 WeDot 引擎源码仓库生成。 -->
<!-- 生成脚本：https://github.com/WeDot-Engine/WeDot/tree/master/doc/tools/make_md.py； -->
<!-- 原文件：https://github.com/WeDot-Engine/WeDot/tree/master/modules/openxr/doc_classes/OpenXRCompositionLayerCylinder.xml。 -->

<div id="_class_openxrcompositionlayercylinder"></div>

# OpenXRCompositionLayerCylinder

**实验性：** This class may be changed or removed in future versions.

**继承：** [`OpenXRCompositionLayer`](class_openxrcompositionlayer.md) **<** [`Node3D`](class_node3d.md) **<** [`Node`](class_node.md) **<** [`Object`](class_object.md)

An OpenXR composition layer that is rendered as an internal slice of a cylinder.

## 描述

An OpenXR composition layer that allows rendering a [`SubViewport`](class_subviewport.md) on an internal slice of a cylinder.

## 属性

|||
|:-:|:--|
| [`float`](class_float.md) | [`aspect_ratio`](class_openxrcompositionlayercylinder.md#class_openxrcompositionlayercylinder_property_aspect_ratio)           | ``1.0``    |
| [`float`](class_float.md) | [`central_angle`](class_openxrcompositionlayercylinder.md#class_openxrcompositionlayercylinder_property_central_angle)         | ``1.5708`` |
| [`int`](class_int.md)     | [`fallback_segments`](class_openxrcompositionlayercylinder.md#class_openxrcompositionlayercylinder_property_fallback_segments) | ``10``     |
| [`float`](class_float.md) | [`radius`](class_openxrcompositionlayercylinder.md#class_openxrcompositionlayercylinder_property_radius)                       | ``1.0``    |

<!-- rst-class:: classref-section-separator -->

---

## 属性说明

<div id="_class_openxrcompositionlayercylinder_property_aspect_ratio"></div>

[`float`](class_float.md) **aspect_ratio** = ``1.0`` <div id="class_openxrcompositionlayercylinder_property_aspect_ratio"></div>

- `void` **set_aspect_ratio** ( value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_aspect_ratio** ( )

The aspect ratio of the slice. Used to set the height relative to the width.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_openxrcompositionlayercylinder_property_central_angle"></div>

[`float`](class_float.md) **central_angle** = ``1.5708`` <div id="class_openxrcompositionlayercylinder_property_central_angle"></div>

- `void` **set_central_angle** ( value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_central_angle** ( )

The central angle of the cylinder. Used to set the width.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_openxrcompositionlayercylinder_property_fallback_segments"></div>

[`int`](class_int.md) **fallback_segments** = ``10`` <div id="class_openxrcompositionlayercylinder_property_fallback_segments"></div>

- `void` **set_fallback_segments** ( value: [`int`](class_int.md) )
- [`int`](class_int.md) **get_fallback_segments** ( )

The number of segments to use in the fallback mesh.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_openxrcompositionlayercylinder_property_radius"></div>

[`float`](class_float.md) **radius** = ``1.0`` <div id="class_openxrcompositionlayercylinder_property_radius"></div>

- `void` **set_radius** ( value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_radius** ( )

The radius of the cylinder.

[^virtual]: 本方法通常需要用户覆盖才能生效。
[^const]: 本方法无副作用，不会修改该实例的任何成员变量。
[^vararg]: 本方法除了能接受在此处描述的参数外，还能够继续接受任意数量的参数。
[^constructor]: 本方法用于构造某个类型。
[^static]: 调用本方法无需实例，可直接使用类名进行调用。
[^operator]: 本方法描述的是使用本类型作为左操作数的有效运算符。
[^bitfield]: 这个值是由下列位标志构成位掩码的整数。
[^void]: 无返回值。
