<!-- ⚠ 请勿编辑本文件 ⚠ -->
<!-- 本文档使用脚本从 WeDot 引擎源码仓库生成。 -->
<!-- 生成脚本：https://github.com/WeDot-Engine/WeDot/tree/master/doc/tools/make_md.py； -->
<!-- 原文件：https://github.com/WeDot-Engine/WeDot/tree/master/doc/classes/XRVRS.xml。 -->

<div id="_class_xrvrs"></div>

# XRVRS

**继承：** [`Object`](class_object.md)

Helper class for XR interfaces that generates VRS images.

## 描述

This class is used by various XR interfaces to generate VRS textures that can be used to speed up rendering.

## 属性

|||
|:-:|:--|
| [`float`](class_float.md) | [`vrs_min_radius`](class_xrvrs.md#class_xrvrs_property_vrs_min_radius) | ``20.0`` |
| [`float`](class_float.md) | [`vrs_strength`](class_xrvrs.md#class_xrvrs_property_vrs_strength)     | ``1.0``  |

## 方法

|||
|:-:|:--|
| [`RID`](class_rid.md) | [`make_vrs_texture`](class_xrvrs.md#class_xrvrs_method_make_vrs_texture) ( target_size: [`Vector2`](class_vector2.md), eye_foci: [`PackedVector2Array`](class_packedvector2array.md) ) |

<!-- rst-class:: classref-section-separator -->

---

## 属性说明

<div id="_class_xrvrs_property_vrs_min_radius"></div>

[`float`](class_float.md) **vrs_min_radius** = ``20.0`` <div id="class_xrvrs_property_vrs_min_radius"></div>

- `void` **set_vrs_min_radius** ( value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_vrs_min_radius** ( )

The minimum radius around the focal point where full quality is guaranteed if VRS is used as a percentage of screen size.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_xrvrs_property_vrs_strength"></div>

[`float`](class_float.md) **vrs_strength** = ``1.0`` <div id="class_xrvrs_property_vrs_strength"></div>

- `void` **set_vrs_strength** ( value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_vrs_strength** ( )

The strength used to calculate the VRS density map. The greater this value, the more noticeable VRS is.

<!-- rst-class:: classref-section-separator -->

---

## 方法说明

<div id="_class_xrvrs_method_make_vrs_texture"></div>

[`RID`](class_rid.md) **make_vrs_texture** ( target_size: [`Vector2`](class_vector2.md), eye_foci: [`PackedVector2Array`](class_packedvector2array.md) )<div id="class_xrvrs_method_make_vrs_texture"></div>

Generates the VRS texture based on a render `target_size` adjusted by our VRS tile size. For each eyes focal point passed in `eye_foci` a layer is created. Focal point should be in NDC.

The result will be cached, requesting a VRS texture with unchanged parameters and settings will return the cached RID.

[^virtual]: 本方法通常需要用户覆盖才能生效。
[^const]: 本方法无副作用，不会修改该实例的任何成员变量。
[^vararg]: 本方法除了能接受在此处描述的参数外，还能够继续接受任意数量的参数。
[^constructor]: 本方法用于构造某个类型。
[^static]: 调用本方法无需实例，可直接使用类名进行调用。
[^operator]: 本方法描述的是使用本类型作为左操作数的有效运算符。
[^bitfield]: 这个值是由下列位标志构成位掩码的整数。
[^void]: 无返回值。
