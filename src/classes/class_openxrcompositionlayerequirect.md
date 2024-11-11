<!-- ⚠ 请勿编辑本文件 ⚠ -->
<!-- 本文档使用脚本从 WeDot 引擎源码仓库生成。 -->
<!-- 生成脚本：https://github.com/WeDot-Engine/WeDot/tree/master/doc/tools/make_md.py； -->
<!-- 原文件：https://github.com/WeDot-Engine/WeDot/tree/master/modules/openxr/doc_classes/OpenXRCompositionLayerEquirect.xml。 -->

<div id="_class_openxrcompositionlayerequirect"></div>

# OpenXRCompositionLayerEquirect

**实验性：** This class may be changed or removed in future versions.

**继承：** [`OpenXRCompositionLayer`](class_openxrcompositionlayer.md) **<** [`Node3D`](class_node3d.md) **<** [`Node`](class_node.md) **<** [`Object`](class_object.md)

An OpenXR composition layer that is rendered as an internal slice of a sphere.

## 描述

An OpenXR composition layer that allows rendering a [`SubViewport`](class_subviewport.md) on an internal slice of a sphere.

## 属性

|||
|:-:|:--|
| [`float`](class_float.md) | [`central_horizontal_angle`](class_openxrcompositionlayerequirect.md#class_openxrcompositionlayerequirect_property_central_horizontal_angle) | ``1.5708``   |
| [`int`](class_int.md)     | [`fallback_segments`](class_openxrcompositionlayerequirect.md#class_openxrcompositionlayerequirect_property_fallback_segments)               | ``10``       |
| [`float`](class_float.md) | [`lower_vertical_angle`](class_openxrcompositionlayerequirect.md#class_openxrcompositionlayerequirect_property_lower_vertical_angle)         | ``0.785398`` |
| [`float`](class_float.md) | [`radius`](class_openxrcompositionlayerequirect.md#class_openxrcompositionlayerequirect_property_radius)                                     | ``1.0``      |
| [`float`](class_float.md) | [`upper_vertical_angle`](class_openxrcompositionlayerequirect.md#class_openxrcompositionlayerequirect_property_upper_vertical_angle)         | ``0.785398`` |

<!-- rst-class:: classref-section-separator -->

---

## 属性说明

<div id="_class_openxrcompositionlayerequirect_property_central_horizontal_angle"></div>

[`float`](class_float.md) **central_horizontal_angle** = ``1.5708`` <div id="class_openxrcompositionlayerequirect_property_central_horizontal_angle"></div>

- `void` **set_central_horizontal_angle** ( value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_central_horizontal_angle** ( )

The central horizontal angle of the sphere. Used to set the width.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_openxrcompositionlayerequirect_property_fallback_segments"></div>

[`int`](class_int.md) **fallback_segments** = ``10`` <div id="class_openxrcompositionlayerequirect_property_fallback_segments"></div>

- `void` **set_fallback_segments** ( value: [`int`](class_int.md) )
- [`int`](class_int.md) **get_fallback_segments** ( )

The number of segments to use in the fallback mesh.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_openxrcompositionlayerequirect_property_lower_vertical_angle"></div>

[`float`](class_float.md) **lower_vertical_angle** = ``0.785398`` <div id="class_openxrcompositionlayerequirect_property_lower_vertical_angle"></div>

- `void` **set_lower_vertical_angle** ( value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_lower_vertical_angle** ( )

The lower vertical angle of the sphere. Used (together with [`upper_vertical_angle`](class_openxrcompositionlayerequirect.md#class_openxrcompositionlayerequirect_property_upper_vertical_angle)) to set the height.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_openxrcompositionlayerequirect_property_radius"></div>

[`float`](class_float.md) **radius** = ``1.0`` <div id="class_openxrcompositionlayerequirect_property_radius"></div>

- `void` **set_radius** ( value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_radius** ( )

The radius of the sphere.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_openxrcompositionlayerequirect_property_upper_vertical_angle"></div>

[`float`](class_float.md) **upper_vertical_angle** = ``0.785398`` <div id="class_openxrcompositionlayerequirect_property_upper_vertical_angle"></div>

- `void` **set_upper_vertical_angle** ( value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_upper_vertical_angle** ( )

The upper vertical angle of the sphere. Used (together with [`lower_vertical_angle`](class_openxrcompositionlayerequirect.md#class_openxrcompositionlayerequirect_property_lower_vertical_angle)) to set the height.

[^virtual]: 本方法通常需要用户覆盖才能生效。
[^const]: 本方法无副作用，不会修改该实例的任何成员变量。
[^vararg]: 本方法除了能接受在此处描述的参数外，还能够继续接受任意数量的参数。
[^constructor]: 本方法用于构造某个类型。
[^static]: 调用本方法无需实例，可直接使用类名进行调用。
[^operator]: 本方法描述的是使用本类型作为左操作数的有效运算符。
[^bitfield]: 这个值是由下列位标志构成位掩码的整数。
[^void]: 无返回值。
