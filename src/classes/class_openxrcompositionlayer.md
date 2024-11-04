<!-- ⚠ 请勿编辑本文件 ⚠ -->
<!-- 本文档使用脚本从 WeDot 引擎源码仓库生成。 -->
<!-- 生成脚本：https://github.com/WeDot-Engine/WeDot/tree/4.3/doc/tools/make_md.py； -->
<!-- 原文件：https://github.com/WeDot-Engine/WeDot/tree/4.3/modules/openxr/doc_classes/OpenXRCompositionLayer.xml。 -->

<div id="_class_openxrcompositionlayer"></div>

# OpenXRCompositionLayer

**实验性：** This class may be changed or removed in future versions.

**继承：** [`Node3D`](class_node3d.md) **<** [`Node`](class_node.md) **<** [`Object`](class_object.md)

**派生：** [`OpenXRCompositionLayerCylinder`](class_openxrcompositionlayercylinder.md), [`OpenXRCompositionLayerEquirect`](class_openxrcompositionlayerequirect.md), [`OpenXRCompositionLayerQuad`](class_openxrcompositionlayerquad.md)

The parent class of all OpenXR composition layer nodes.

## 描述

Composition layers allow 2D viewports to be displayed inside of the headset by the XR compositor through special projections that retain their quality. This allows for rendering clear text while keeping the layer at a native resolution.

 **Note:** If the OpenXR runtime doesn't support the given composition layer type, a fallback mesh can be generated with a [`ViewportTexture`](class_viewporttexture.md), in order to emulate the composition layer.

## 属性

| [`bool`](class_bool.md)               | [`alpha_blend`](#class_openxrcompositionlayer_property_alpha_blend)             | ``false`` |
| [`bool`](class_bool.md)               | [`enable_hole_punch`](#class_openxrcompositionlayer_property_enable_hole_punch) | ``false`` |
| [`SubViewport`](class_subviewport.md) | [`layer_viewport`](#class_openxrcompositionlayer_property_layer_viewport)       |           |
| [`int`](class_int.md)                 | [`sort_order`](#class_openxrcompositionlayer_property_sort_order)               | ``1``     |

## 方法

| [`Vector2`](class_vector2.md) | [`intersects_ray`](#class_openxrcompositionlayer_method_intersects_ray) ( origin: [`Vector3`](class_vector3.md), direction: [`Vector3`](class_vector3.md) ) const[^const] |
| [`bool`](class_bool.md)       | [`is_natively_supported`](#class_openxrcompositionlayer_method_is_natively_supported) ( ) const[^const]                                                                   |

<!-- rst-class:: classref-section-separator -->

---

## 属性说明

<div id="_class_openxrcompositionlayer_property_alpha_blend"></div>

[`bool`](class_bool.md) **alpha_blend** = ``false`` <div id="class_openxrcompositionlayer_property_alpha_blend"></div>

- `void` **set_alpha_blend** ( value: [`bool`](class_bool.md) )
- [`bool`](class_bool.md) **get_alpha_blend** ( )

Enables the blending the layer using its alpha channel.

Can be combined with [`Viewport.transparent_bg`](#class_viewport_property_transparent_bg) to give the layer a transparent background.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_openxrcompositionlayer_property_enable_hole_punch"></div>

[`bool`](class_bool.md) **enable_hole_punch** = ``false`` <div id="class_openxrcompositionlayer_property_enable_hole_punch"></div>

- `void` **set_enable_hole_punch** ( value: [`bool`](class_bool.md) )
- [`bool`](class_bool.md) **get_enable_hole_punch** ( )

Enables a technique called "hole punching", which allows putting the composition layer behind the main projection layer (i.e. setting [`sort_order`](#class_openxrcompositionlayer_property_sort_order) to a negative value) while "punching a hole" through everything rendered by Godot so that the layer is still visible.

This can be used to create the illusion that the composition layer exists in the same 3D space as everything rendered by Godot, allowing objects to appear to pass both behind or in front of the composition layer.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_openxrcompositionlayer_property_layer_viewport"></div>

[`SubViewport`](class_subviewport.md) **layer_viewport** <div id="class_openxrcompositionlayer_property_layer_viewport"></div>

- `void` **set_layer_viewport** ( value: [`SubViewport`](class_subviewport.md) )
- [`SubViewport`](class_subviewport.md) **get_layer_viewport** ( )

The [`SubViewport`](class_subviewport.md) to render on the composition layer.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_openxrcompositionlayer_property_sort_order"></div>

[`int`](class_int.md) **sort_order** = ``1`` <div id="class_openxrcompositionlayer_property_sort_order"></div>

- `void` **set_sort_order** ( value: [`int`](class_int.md) )
- [`int`](class_int.md) **get_sort_order** ( )

The sort order for this composition layer. Higher numbers will be shown in front of lower numbers.

 **Note:** This will have no effect if a fallback mesh is being used.

<!-- rst-class:: classref-section-separator -->

---

## 方法说明

<div id="_class_openxrcompositionlayer_method_intersects_ray"></div>

[`Vector2`](class_vector2.md) **intersects_ray** ( origin: [`Vector3`](class_vector3.md), direction: [`Vector3`](class_vector3.md) ) const[^const]<div id="class_openxrcompositionlayer_method_intersects_ray"></div>

Returns UV coordinates where the given ray intersects with the composition layer. `origin` and `direction` must be in global space.

Returns `Vector2(-1.0, -1.0)` if the ray doesn't intersect.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_openxrcompositionlayer_method_is_natively_supported"></div>

[`bool`](class_bool.md) **is_natively_supported** ( ) const[^const]<div id="class_openxrcompositionlayer_method_is_natively_supported"></div>

Returns true if the OpenXR runtime natively supports this composition layer type.

 **Note:** This will only return an accurate result after the OpenXR session has started.

[^virtual]: 本方法通常需要用户覆盖才能生效。
[^const]: 本方法无副作用，不会修改该实例的任何成员变量。
[^vararg]: 本方法除了能接受在此处描述的参数外，还能够继续接受任意数量的参数。
[^constructor]: 本方法用于构造某个类型。
[^static]: 调用本方法无需实例，可直接使用类名进行调用。
[^operator]: 本方法描述的是使用本类型作为左操作数的有效运算符。
[^bitfield]: 这个值是由下列位标志构成位掩码的整数。
[^void]: 无返回值。
