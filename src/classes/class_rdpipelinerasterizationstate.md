<!-- ⚠ 请勿编辑本文件 ⚠ -->
<!-- 本文档使用脚本从 WeDot 引擎源码仓库生成。 -->
<!-- 生成脚本：https://github.com/WeDot-Engine/WeDot/tree/master/doc/tools/make_md.py； -->
<!-- 原文件：https://github.com/WeDot-Engine/WeDot/tree/master/doc/classes/RDPipelineRasterizationState.xml。 -->

<div id="_class_rdpipelinerasterizationstate"></div>

# RDPipelineRasterizationState

**继承：** [`RefCounted`](class_refcounted.md) **<** [`Object`](class_object.md)

Pipeline rasterization state (used by [`RenderingDevice`](class_renderingdevice.md)).

## 描述

This object is used by [`RenderingDevice`](class_renderingdevice.md).

## 属性

|||
|:-:|:--|
| [PolygonCullMode](#enum_renderingdevice_polygoncullmode)   | [`cull_mode`](class_rdpipelinerasterizationstate.md#class_rdpipelinerasterizationstate_property_cull_mode)                                   | ``0``     |
| [`float`](class_float.md)                                  | [`depth_bias_clamp`](class_rdpipelinerasterizationstate.md#class_rdpipelinerasterizationstate_property_depth_bias_clamp)                     | ``0.0``   |
| [`float`](class_float.md)                                  | [`depth_bias_constant_factor`](class_rdpipelinerasterizationstate.md#class_rdpipelinerasterizationstate_property_depth_bias_constant_factor) | ``0.0``   |
| [`bool`](class_bool.md)                                    | [`depth_bias_enabled`](class_rdpipelinerasterizationstate.md#class_rdpipelinerasterizationstate_property_depth_bias_enabled)                 | ``false`` |
| [`float`](class_float.md)                                  | [`depth_bias_slope_factor`](class_rdpipelinerasterizationstate.md#class_rdpipelinerasterizationstate_property_depth_bias_slope_factor)       | ``0.0``   |
| [`bool`](class_bool.md)                                    | [`discard_primitives`](class_rdpipelinerasterizationstate.md#class_rdpipelinerasterizationstate_property_discard_primitives)                 | ``false`` |
| [`bool`](class_bool.md)                                    | [`enable_depth_clamp`](class_rdpipelinerasterizationstate.md#class_rdpipelinerasterizationstate_property_enable_depth_clamp)                 | ``false`` |
| [PolygonFrontFace](#enum_renderingdevice_polygonfrontface) | [`front_face`](class_rdpipelinerasterizationstate.md#class_rdpipelinerasterizationstate_property_front_face)                                 | ``0``     |
| [`float`](class_float.md)                                  | [`line_width`](class_rdpipelinerasterizationstate.md#class_rdpipelinerasterizationstate_property_line_width)                                 | ``1.0``   |
| [`int`](class_int.md)                                      | [`patch_control_points`](class_rdpipelinerasterizationstate.md#class_rdpipelinerasterizationstate_property_patch_control_points)             | ``1``     |
| [`bool`](class_bool.md)                                    | [`wireframe`](class_rdpipelinerasterizationstate.md#class_rdpipelinerasterizationstate_property_wireframe)                                   | ``false`` |

<!-- rst-class:: classref-section-separator -->

---

## 属性说明

<div id="_class_rdpipelinerasterizationstate_property_cull_mode"></div>

[PolygonCullMode](#enum_renderingdevice_polygoncullmode) **cull_mode** = ``0`` <div id="class_rdpipelinerasterizationstate_property_cull_mode"></div>

- `void` **set_cull_mode** ( value: [PolygonCullMode](#enum_renderingdevice_polygoncullmode) )
- [PolygonCullMode](#enum_renderingdevice_polygoncullmode) **get_cull_mode** ( )

The cull mode to use when drawing polygons, which determines whether front faces or backfaces are hidden.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_rdpipelinerasterizationstate_property_depth_bias_clamp"></div>

[`float`](class_float.md) **depth_bias_clamp** = ``0.0`` <div id="class_rdpipelinerasterizationstate_property_depth_bias_clamp"></div>

- `void` **set_depth_bias_clamp** ( value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_depth_bias_clamp** ( )

A limit for how much each depth value can be offset. If negative, it serves as a minimum value, but if positive, it serves as a maximum value.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_rdpipelinerasterizationstate_property_depth_bias_constant_factor"></div>

[`float`](class_float.md) **depth_bias_constant_factor** = ``0.0`` <div id="class_rdpipelinerasterizationstate_property_depth_bias_constant_factor"></div>

- `void` **set_depth_bias_constant_factor** ( value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_depth_bias_constant_factor** ( )

A constant offset added to each depth value. Applied after [`depth_bias_slope_factor`](class_rdpipelinerasterizationstate.md#class_rdpipelinerasterizationstate_property_depth_bias_slope_factor).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_rdpipelinerasterizationstate_property_depth_bias_enabled"></div>

[`bool`](class_bool.md) **depth_bias_enabled** = ``false`` <div id="class_rdpipelinerasterizationstate_property_depth_bias_enabled"></div>

- `void` **set_depth_bias_enabled** ( value: [`bool`](class_bool.md) )
- [`bool`](class_bool.md) **get_depth_bias_enabled** ( )

If `true`, each generated depth value will by offset by some amount. The specific amount is generated per polygon based on the values of [`depth_bias_slope_factor`](class_rdpipelinerasterizationstate.md#class_rdpipelinerasterizationstate_property_depth_bias_slope_factor) and [`depth_bias_constant_factor`](class_rdpipelinerasterizationstate.md#class_rdpipelinerasterizationstate_property_depth_bias_constant_factor).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_rdpipelinerasterizationstate_property_depth_bias_slope_factor"></div>

[`float`](class_float.md) **depth_bias_slope_factor** = ``0.0`` <div id="class_rdpipelinerasterizationstate_property_depth_bias_slope_factor"></div>

- `void` **set_depth_bias_slope_factor** ( value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_depth_bias_slope_factor** ( )

A constant scale applied to the slope of each polygons' depth. Applied before [`depth_bias_constant_factor`](class_rdpipelinerasterizationstate.md#class_rdpipelinerasterizationstate_property_depth_bias_constant_factor).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_rdpipelinerasterizationstate_property_discard_primitives"></div>

[`bool`](class_bool.md) **discard_primitives** = ``false`` <div id="class_rdpipelinerasterizationstate_property_discard_primitives"></div>

- `void` **set_discard_primitives** ( value: [`bool`](class_bool.md) )
- [`bool`](class_bool.md) **get_discard_primitives** ( )

If `true`, primitives are discarded immediately before the rasterization stage.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_rdpipelinerasterizationstate_property_enable_depth_clamp"></div>

[`bool`](class_bool.md) **enable_depth_clamp** = ``false`` <div id="class_rdpipelinerasterizationstate_property_enable_depth_clamp"></div>

- `void` **set_enable_depth_clamp** ( value: [`bool`](class_bool.md) )
- [`bool`](class_bool.md) **get_enable_depth_clamp** ( )

If `true`, clamps depth values according to the minimum and maximum depth of the associated viewport.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_rdpipelinerasterizationstate_property_front_face"></div>

[PolygonFrontFace](#enum_renderingdevice_polygonfrontface) **front_face** = ``0`` <div id="class_rdpipelinerasterizationstate_property_front_face"></div>

- `void` **set_front_face** ( value: [PolygonFrontFace](#enum_renderingdevice_polygonfrontface) )
- [PolygonFrontFace](#enum_renderingdevice_polygonfrontface) **get_front_face** ( )

The winding order to use to determine which face of a triangle is considered its front face.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_rdpipelinerasterizationstate_property_line_width"></div>

[`float`](class_float.md) **line_width** = ``1.0`` <div id="class_rdpipelinerasterizationstate_property_line_width"></div>

- `void` **set_line_width** ( value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_line_width** ( )

The line width to use when drawing lines (in pixels). Thick lines may not be supported on all hardware.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_rdpipelinerasterizationstate_property_patch_control_points"></div>

[`int`](class_int.md) **patch_control_points** = ``1`` <div id="class_rdpipelinerasterizationstate_property_patch_control_points"></div>

- `void` **set_patch_control_points** ( value: [`int`](class_int.md) )
- [`int`](class_int.md) **get_patch_control_points** ( )

The number of control points to use when drawing a patch with tessellation enabled. Higher values result in higher quality at the cost of performance.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_rdpipelinerasterizationstate_property_wireframe"></div>

[`bool`](class_bool.md) **wireframe** = ``false`` <div id="class_rdpipelinerasterizationstate_property_wireframe"></div>

- `void` **set_wireframe** ( value: [`bool`](class_bool.md) )
- [`bool`](class_bool.md) **get_wireframe** ( )

If `true`, performs wireframe rendering for triangles instead of flat or textured rendering.

[^virtual]: 本方法通常需要用户覆盖才能生效。
[^const]: 本方法无副作用，不会修改该实例的任何成员变量。
[^vararg]: 本方法除了能接受在此处描述的参数外，还能够继续接受任意数量的参数。
[^constructor]: 本方法用于构造某个类型。
[^static]: 调用本方法无需实例，可直接使用类名进行调用。
[^operator]: 本方法描述的是使用本类型作为左操作数的有效运算符。
[^bitfield]: 这个值是由下列位标志构成位掩码的整数。
[^void]: 无返回值。
