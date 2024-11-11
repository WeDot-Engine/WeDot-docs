<!-- ⚠ 请勿编辑本文件 ⚠ -->
<!-- 本文档使用脚本从 WeDot 引擎源码仓库生成。 -->
<!-- 生成脚本：https://github.com/WeDot-Engine/WeDot/tree/master/doc/tools/make_md.py； -->
<!-- 原文件：https://github.com/WeDot-Engine/WeDot/tree/master/doc/classes/RDPipelineDepthStencilState.xml。 -->

<div id="_class_rdpipelinedepthstencilstate"></div>

# RDPipelineDepthStencilState

**继承：** [`RefCounted`](class_refcounted.md) **<** [`Object`](class_object.md)

Pipeline depth/stencil state (used by [`RenderingDevice`](class_renderingdevice.md)).

## 描述

**RDPipelineDepthStencilState** controls the way depth and stencil comparisons are performed when sampling those values using [`RenderingDevice`](class_renderingdevice.md).

## 属性

|||
|:-:|:--|
| [CompareOperator](#enum_renderingdevice_compareoperator)   | [`back_op_compare`](class_rdpipelinedepthstencilstate.md#class_rdpipelinedepthstencilstate_property_back_op_compare)               | ``7``     |
| [`int`](class_int.md)                                      | [`back_op_compare_mask`](class_rdpipelinedepthstencilstate.md#class_rdpipelinedepthstencilstate_property_back_op_compare_mask)     | ``0``     |
| [StencilOperation](#enum_renderingdevice_stenciloperation) | [`back_op_depth_fail`](class_rdpipelinedepthstencilstate.md#class_rdpipelinedepthstencilstate_property_back_op_depth_fail)         | ``1``     |
| [StencilOperation](#enum_renderingdevice_stenciloperation) | [`back_op_fail`](class_rdpipelinedepthstencilstate.md#class_rdpipelinedepthstencilstate_property_back_op_fail)                     | ``1``     |
| [StencilOperation](#enum_renderingdevice_stenciloperation) | [`back_op_pass`](class_rdpipelinedepthstencilstate.md#class_rdpipelinedepthstencilstate_property_back_op_pass)                     | ``1``     |
| [`int`](class_int.md)                                      | [`back_op_reference`](class_rdpipelinedepthstencilstate.md#class_rdpipelinedepthstencilstate_property_back_op_reference)           | ``0``     |
| [`int`](class_int.md)                                      | [`back_op_write_mask`](class_rdpipelinedepthstencilstate.md#class_rdpipelinedepthstencilstate_property_back_op_write_mask)         | ``0``     |
| [CompareOperator](#enum_renderingdevice_compareoperator)   | [`depth_compare_operator`](class_rdpipelinedepthstencilstate.md#class_rdpipelinedepthstencilstate_property_depth_compare_operator) | ``7``     |
| [`float`](class_float.md)                                  | [`depth_range_max`](class_rdpipelinedepthstencilstate.md#class_rdpipelinedepthstencilstate_property_depth_range_max)               | ``0.0``   |
| [`float`](class_float.md)                                  | [`depth_range_min`](class_rdpipelinedepthstencilstate.md#class_rdpipelinedepthstencilstate_property_depth_range_min)               | ``0.0``   |
| [`bool`](class_bool.md)                                    | [`enable_depth_range`](class_rdpipelinedepthstencilstate.md#class_rdpipelinedepthstencilstate_property_enable_depth_range)         | ``false`` |
| [`bool`](class_bool.md)                                    | [`enable_depth_test`](class_rdpipelinedepthstencilstate.md#class_rdpipelinedepthstencilstate_property_enable_depth_test)           | ``false`` |
| [`bool`](class_bool.md)                                    | [`enable_depth_write`](class_rdpipelinedepthstencilstate.md#class_rdpipelinedepthstencilstate_property_enable_depth_write)         | ``false`` |
| [`bool`](class_bool.md)                                    | [`enable_stencil`](class_rdpipelinedepthstencilstate.md#class_rdpipelinedepthstencilstate_property_enable_stencil)                 | ``false`` |
| [CompareOperator](#enum_renderingdevice_compareoperator)   | [`front_op_compare`](class_rdpipelinedepthstencilstate.md#class_rdpipelinedepthstencilstate_property_front_op_compare)             | ``7``     |
| [`int`](class_int.md)                                      | [`front_op_compare_mask`](class_rdpipelinedepthstencilstate.md#class_rdpipelinedepthstencilstate_property_front_op_compare_mask)   | ``0``     |
| [StencilOperation](#enum_renderingdevice_stenciloperation) | [`front_op_depth_fail`](class_rdpipelinedepthstencilstate.md#class_rdpipelinedepthstencilstate_property_front_op_depth_fail)       | ``1``     |
| [StencilOperation](#enum_renderingdevice_stenciloperation) | [`front_op_fail`](class_rdpipelinedepthstencilstate.md#class_rdpipelinedepthstencilstate_property_front_op_fail)                   | ``1``     |
| [StencilOperation](#enum_renderingdevice_stenciloperation) | [`front_op_pass`](class_rdpipelinedepthstencilstate.md#class_rdpipelinedepthstencilstate_property_front_op_pass)                   | ``1``     |
| [`int`](class_int.md)                                      | [`front_op_reference`](class_rdpipelinedepthstencilstate.md#class_rdpipelinedepthstencilstate_property_front_op_reference)         | ``0``     |
| [`int`](class_int.md)                                      | [`front_op_write_mask`](class_rdpipelinedepthstencilstate.md#class_rdpipelinedepthstencilstate_property_front_op_write_mask)       | ``0``     |

<!-- rst-class:: classref-section-separator -->

---

## 属性说明

<div id="_class_rdpipelinedepthstencilstate_property_back_op_compare"></div>

[CompareOperator](#enum_renderingdevice_compareoperator) **back_op_compare** = ``7`` <div id="class_rdpipelinedepthstencilstate_property_back_op_compare"></div>

- `void` **set_back_op_compare** ( value: [CompareOperator](#enum_renderingdevice_compareoperator) )
- [CompareOperator](#enum_renderingdevice_compareoperator) **get_back_op_compare** ( )

The method used for comparing the previous back stencil value and [`back_op_reference`](class_rdpipelinedepthstencilstate.md#class_rdpipelinedepthstencilstate_property_back_op_reference).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_rdpipelinedepthstencilstate_property_back_op_compare_mask"></div>

[`int`](class_int.md) **back_op_compare_mask** = ``0`` <div id="class_rdpipelinedepthstencilstate_property_back_op_compare_mask"></div>

- `void` **set_back_op_compare_mask** ( value: [`int`](class_int.md) )
- [`int`](class_int.md) **get_back_op_compare_mask** ( )

Selects which bits from the back stencil value will be compared.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_rdpipelinedepthstencilstate_property_back_op_depth_fail"></div>

[StencilOperation](#enum_renderingdevice_stenciloperation) **back_op_depth_fail** = ``1`` <div id="class_rdpipelinedepthstencilstate_property_back_op_depth_fail"></div>

- `void` **set_back_op_depth_fail** ( value: [StencilOperation](#enum_renderingdevice_stenciloperation) )
- [StencilOperation](#enum_renderingdevice_stenciloperation) **get_back_op_depth_fail** ( )

The operation to perform on the stencil buffer for back pixels that pass the stencil test but fail the depth test.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_rdpipelinedepthstencilstate_property_back_op_fail"></div>

[StencilOperation](#enum_renderingdevice_stenciloperation) **back_op_fail** = ``1`` <div id="class_rdpipelinedepthstencilstate_property_back_op_fail"></div>

- `void` **set_back_op_fail** ( value: [StencilOperation](#enum_renderingdevice_stenciloperation) )
- [StencilOperation](#enum_renderingdevice_stenciloperation) **get_back_op_fail** ( )

The operation to perform on the stencil buffer for back pixels that fail the stencil test.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_rdpipelinedepthstencilstate_property_back_op_pass"></div>

[StencilOperation](#enum_renderingdevice_stenciloperation) **back_op_pass** = ``1`` <div id="class_rdpipelinedepthstencilstate_property_back_op_pass"></div>

- `void` **set_back_op_pass** ( value: [StencilOperation](#enum_renderingdevice_stenciloperation) )
- [StencilOperation](#enum_renderingdevice_stenciloperation) **get_back_op_pass** ( )

The operation to perform on the stencil buffer for back pixels that pass the stencil test.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_rdpipelinedepthstencilstate_property_back_op_reference"></div>

[`int`](class_int.md) **back_op_reference** = ``0`` <div id="class_rdpipelinedepthstencilstate_property_back_op_reference"></div>

- `void` **set_back_op_reference** ( value: [`int`](class_int.md) )
- [`int`](class_int.md) **get_back_op_reference** ( )

The value the previous back stencil value will be compared to.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_rdpipelinedepthstencilstate_property_back_op_write_mask"></div>

[`int`](class_int.md) **back_op_write_mask** = ``0`` <div id="class_rdpipelinedepthstencilstate_property_back_op_write_mask"></div>

- `void` **set_back_op_write_mask** ( value: [`int`](class_int.md) )
- [`int`](class_int.md) **get_back_op_write_mask** ( )

Selects which bits from the back stencil value will be changed.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_rdpipelinedepthstencilstate_property_depth_compare_operator"></div>

[CompareOperator](#enum_renderingdevice_compareoperator) **depth_compare_operator** = ``7`` <div id="class_rdpipelinedepthstencilstate_property_depth_compare_operator"></div>

- `void` **set_depth_compare_operator** ( value: [CompareOperator](#enum_renderingdevice_compareoperator) )
- [CompareOperator](#enum_renderingdevice_compareoperator) **get_depth_compare_operator** ( )

The method used for comparing the previous and current depth values.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_rdpipelinedepthstencilstate_property_depth_range_max"></div>

[`float`](class_float.md) **depth_range_max** = ``0.0`` <div id="class_rdpipelinedepthstencilstate_property_depth_range_max"></div>

- `void` **set_depth_range_max** ( value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_depth_range_max** ( )

The maximum depth that returns true for [`enable_depth_range`](class_rdpipelinedepthstencilstate.md#class_rdpipelinedepthstencilstate_property_enable_depth_range).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_rdpipelinedepthstencilstate_property_depth_range_min"></div>

[`float`](class_float.md) **depth_range_min** = ``0.0`` <div id="class_rdpipelinedepthstencilstate_property_depth_range_min"></div>

- `void` **set_depth_range_min** ( value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_depth_range_min** ( )

The minimum depth that returns true for [`enable_depth_range`](class_rdpipelinedepthstencilstate.md#class_rdpipelinedepthstencilstate_property_enable_depth_range).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_rdpipelinedepthstencilstate_property_enable_depth_range"></div>

[`bool`](class_bool.md) **enable_depth_range** = ``false`` <div id="class_rdpipelinedepthstencilstate_property_enable_depth_range"></div>

- `void` **set_enable_depth_range** ( value: [`bool`](class_bool.md) )
- [`bool`](class_bool.md) **get_enable_depth_range** ( )

If `true`, each depth value will be tested to see if it is between [`depth_range_min`](class_rdpipelinedepthstencilstate.md#class_rdpipelinedepthstencilstate_property_depth_range_min) and [`depth_range_max`](class_rdpipelinedepthstencilstate.md#class_rdpipelinedepthstencilstate_property_depth_range_max). If it is outside of these values, it is discarded.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_rdpipelinedepthstencilstate_property_enable_depth_test"></div>

[`bool`](class_bool.md) **enable_depth_test** = ``false`` <div id="class_rdpipelinedepthstencilstate_property_enable_depth_test"></div>

- `void` **set_enable_depth_test** ( value: [`bool`](class_bool.md) )
- [`bool`](class_bool.md) **get_enable_depth_test** ( )

If `true`, enables depth testing which allows objects to be automatically occluded by other objects based on their depth. This also allows objects to be partially occluded by other objects. If `false`, objects will appear in the order they were drawn (like in Godot's 2D renderer).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_rdpipelinedepthstencilstate_property_enable_depth_write"></div>

[`bool`](class_bool.md) **enable_depth_write** = ``false`` <div id="class_rdpipelinedepthstencilstate_property_enable_depth_write"></div>

- `void` **set_enable_depth_write** ( value: [`bool`](class_bool.md) )
- [`bool`](class_bool.md) **get_enable_depth_write** ( )

If `true`, writes to the depth buffer whenever the depth test returns true. Only works when enable_depth_test is also true.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_rdpipelinedepthstencilstate_property_enable_stencil"></div>

[`bool`](class_bool.md) **enable_stencil** = ``false`` <div id="class_rdpipelinedepthstencilstate_property_enable_stencil"></div>

- `void` **set_enable_stencil** ( value: [`bool`](class_bool.md) )
- [`bool`](class_bool.md) **get_enable_stencil** ( )

If `true`, enables stencil testing. There are separate stencil buffers for front-facing triangles and back-facing triangles. See properties that begin with "front_op" and properties with "back_op" for each.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_rdpipelinedepthstencilstate_property_front_op_compare"></div>

[CompareOperator](#enum_renderingdevice_compareoperator) **front_op_compare** = ``7`` <div id="class_rdpipelinedepthstencilstate_property_front_op_compare"></div>

- `void` **set_front_op_compare** ( value: [CompareOperator](#enum_renderingdevice_compareoperator) )
- [CompareOperator](#enum_renderingdevice_compareoperator) **get_front_op_compare** ( )

The method used for comparing the previous front stencil value and [`front_op_reference`](class_rdpipelinedepthstencilstate.md#class_rdpipelinedepthstencilstate_property_front_op_reference).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_rdpipelinedepthstencilstate_property_front_op_compare_mask"></div>

[`int`](class_int.md) **front_op_compare_mask** = ``0`` <div id="class_rdpipelinedepthstencilstate_property_front_op_compare_mask"></div>

- `void` **set_front_op_compare_mask** ( value: [`int`](class_int.md) )
- [`int`](class_int.md) **get_front_op_compare_mask** ( )

Selects which bits from the front stencil value will be compared.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_rdpipelinedepthstencilstate_property_front_op_depth_fail"></div>

[StencilOperation](#enum_renderingdevice_stenciloperation) **front_op_depth_fail** = ``1`` <div id="class_rdpipelinedepthstencilstate_property_front_op_depth_fail"></div>

- `void` **set_front_op_depth_fail** ( value: [StencilOperation](#enum_renderingdevice_stenciloperation) )
- [StencilOperation](#enum_renderingdevice_stenciloperation) **get_front_op_depth_fail** ( )

The operation to perform on the stencil buffer for front pixels that pass the stencil test but fail the depth test.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_rdpipelinedepthstencilstate_property_front_op_fail"></div>

[StencilOperation](#enum_renderingdevice_stenciloperation) **front_op_fail** = ``1`` <div id="class_rdpipelinedepthstencilstate_property_front_op_fail"></div>

- `void` **set_front_op_fail** ( value: [StencilOperation](#enum_renderingdevice_stenciloperation) )
- [StencilOperation](#enum_renderingdevice_stenciloperation) **get_front_op_fail** ( )

The operation to perform on the stencil buffer for front pixels that fail the stencil test.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_rdpipelinedepthstencilstate_property_front_op_pass"></div>

[StencilOperation](#enum_renderingdevice_stenciloperation) **front_op_pass** = ``1`` <div id="class_rdpipelinedepthstencilstate_property_front_op_pass"></div>

- `void` **set_front_op_pass** ( value: [StencilOperation](#enum_renderingdevice_stenciloperation) )
- [StencilOperation](#enum_renderingdevice_stenciloperation) **get_front_op_pass** ( )

The operation to perform on the stencil buffer for front pixels that pass the stencil test.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_rdpipelinedepthstencilstate_property_front_op_reference"></div>

[`int`](class_int.md) **front_op_reference** = ``0`` <div id="class_rdpipelinedepthstencilstate_property_front_op_reference"></div>

- `void` **set_front_op_reference** ( value: [`int`](class_int.md) )
- [`int`](class_int.md) **get_front_op_reference** ( )

The value the previous front stencil value will be compared to.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_rdpipelinedepthstencilstate_property_front_op_write_mask"></div>

[`int`](class_int.md) **front_op_write_mask** = ``0`` <div id="class_rdpipelinedepthstencilstate_property_front_op_write_mask"></div>

- `void` **set_front_op_write_mask** ( value: [`int`](class_int.md) )
- [`int`](class_int.md) **get_front_op_write_mask** ( )

Selects which bits from the front stencil value will be changed.

[^virtual]: 本方法通常需要用户覆盖才能生效。
[^const]: 本方法无副作用，不会修改该实例的任何成员变量。
[^vararg]: 本方法除了能接受在此处描述的参数外，还能够继续接受任意数量的参数。
[^constructor]: 本方法用于构造某个类型。
[^static]: 调用本方法无需实例，可直接使用类名进行调用。
[^operator]: 本方法描述的是使用本类型作为左操作数的有效运算符。
[^bitfield]: 这个值是由下列位标志构成位掩码的整数。
[^void]: 无返回值。
