<!-- ⚠ 请勿编辑本文件 ⚠ -->
<!-- 本文档使用脚本从 WeDot 引擎源码仓库生成。 -->
<!-- 生成脚本：https://github.com/WeDot-Engine/WeDot/tree/4.3/doc/tools/make_md.py； -->
<!-- 原文件：https://github.com/WeDot-Engine/WeDot/tree/4.3/doc/classes/VisualShaderNodeBillboard.xml。 -->

<div id="_class_visualshadernodebillboard"></div>

# VisualShaderNodeBillboard

**继承：** [`VisualShaderNode`](class_visualshadernode.md) **<** [`Resource`](class_resource.md) **<** [`RefCounted`](class_refcounted.md) **<** [`Object`](class_object.md)

A node that controls how the object faces the camera to be used within the visual shader graph.

## 描述

The output port of this node needs to be connected to `Model View Matrix` port of [`VisualShaderNodeOutput`](class_visualshadernodeoutput.md).

## 属性

| [BillboardType](#enum_visualshadernodebillboard_billboardtype) | [`billboard_type`](#class_visualshadernodebillboard_property_billboard_type) | ``1``     |
| [`bool`](class_bool.md)                                        | [`keep_scale`](#class_visualshadernodebillboard_property_keep_scale)         | ``false`` |

<!-- rst-class:: classref-section-separator -->

---

## 枚举

<div id="_class_enum_visualshadernodebillboard_billboardtype"></div>

enum **BillboardType**: <div id="enum_visualshadernodebillboard_billboardtype"></div>

<div id="_class_visualshadernodebillboard_constant_billboard_type_disabled"></div>

[BillboardType](#enum_visualshadernodebillboard_billboardtype) **BILLBOARD_TYPE_DISABLED** = ``0``

Billboarding is disabled and the node does nothing.

<div id="_class_visualshadernodebillboard_constant_billboard_type_enabled"></div>

[BillboardType](#enum_visualshadernodebillboard_billboardtype) **BILLBOARD_TYPE_ENABLED** = ``1``

A standard billboarding algorithm is enabled.

<div id="_class_visualshadernodebillboard_constant_billboard_type_fixed_y"></div>

[BillboardType](#enum_visualshadernodebillboard_billboardtype) **BILLBOARD_TYPE_FIXED_Y** = ``2``

A billboarding algorithm to rotate around Y-axis is enabled.

<div id="_class_visualshadernodebillboard_constant_billboard_type_particles"></div>

[BillboardType](#enum_visualshadernodebillboard_billboardtype) **BILLBOARD_TYPE_PARTICLES** = ``3``

A billboarding algorithm designed to use on particles is enabled.

<div id="_class_visualshadernodebillboard_constant_billboard_type_max"></div>

[BillboardType](#enum_visualshadernodebillboard_billboardtype) **BILLBOARD_TYPE_MAX** = ``4``

Represents the size of the [BillboardType](#enum_visualshadernodebillboard_billboardtype) enum.

<!-- rst-class:: classref-section-separator -->

---

## 属性说明

<div id="_class_visualshadernodebillboard_property_billboard_type"></div>

[BillboardType](#enum_visualshadernodebillboard_billboardtype) **billboard_type** = ``1`` <div id="class_visualshadernodebillboard_property_billboard_type"></div>

- `void` **set_billboard_type** ( value: [BillboardType](#enum_visualshadernodebillboard_billboardtype) )
- [BillboardType](#enum_visualshadernodebillboard_billboardtype) **get_billboard_type** ( )

Controls how the object faces the camera. See [BillboardType](#enum_visualshadernodebillboard_billboardtype).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_visualshadernodebillboard_property_keep_scale"></div>

[`bool`](class_bool.md) **keep_scale** = ``false`` <div id="class_visualshadernodebillboard_property_keep_scale"></div>

- `void` **set_keep_scale_enabled** ( value: [`bool`](class_bool.md) )
- [`bool`](class_bool.md) **is_keep_scale_enabled** ( )

If `true`, the shader will keep the scale set for the mesh. Otherwise, the scale is lost when billboarding.

[^virtual]: 本方法通常需要用户覆盖才能生效。
[^const]: 本方法无副作用，不会修改该实例的任何成员变量。
[^vararg]: 本方法除了能接受在此处描述的参数外，还能够继续接受任意数量的参数。
[^constructor]: 本方法用于构造某个类型。
[^static]: 调用本方法无需实例，可直接使用类名进行调用。
[^operator]: 本方法描述的是使用本类型作为左操作数的有效运算符。
[^bitfield]: 这个值是由下列位标志构成位掩码的整数。
[^void]: 无返回值。
