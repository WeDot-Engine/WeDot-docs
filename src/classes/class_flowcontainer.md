<!-- ⚠ 请勿编辑本文件 ⚠ -->
<!-- 本文档使用脚本从 WeDot 引擎源码仓库生成。 -->
<!-- 生成脚本：https://github.com/WeDot-Engine/WeDot/tree/master/doc/tools/make_md.py； -->
<!-- 原文件：https://github.com/WeDot-Engine/WeDot/tree/master/doc/classes/FlowContainer.xml。 -->

<div id="_class_flowcontainer"></div>

# FlowContainer

**继承：** [`Container`](class_container.md) **<** [`Control`](class_control.md) **<** [`CanvasItem`](class_canvasitem.md) **<** [`Node`](class_node.md) **<** [`Object`](class_object.md)

**派生：** [`HFlowContainer`](class_hflowcontainer.md), [`VFlowContainer`](class_vflowcontainer.md)

A container that arranges its child controls horizontally or vertically and wraps them around at the borders.

## 描述

A container that arranges its child controls horizontally or vertically and wraps them around at the borders. This is similar to how text in a book wraps around when no more words can fit on a line.

## 属性

|||
|:-:|:--|
| [AlignmentMode](#enum_flowcontainer_alignmentmode)                 | [`alignment`](class_flowcontainer.md#class_flowcontainer_property_alignment)                     | ``0``     |
| [LastWrapAlignmentMode](#enum_flowcontainer_lastwrapalignmentmode) | [`last_wrap_alignment`](class_flowcontainer.md#class_flowcontainer_property_last_wrap_alignment) | ``0``     |
| [`bool`](class_bool.md)                                            | [`reverse_fill`](class_flowcontainer.md#class_flowcontainer_property_reverse_fill)               | ``false`` |
| [`bool`](class_bool.md)                                            | [`vertical`](class_flowcontainer.md#class_flowcontainer_property_vertical)                       | ``false`` |

## 方法

|||
|:-:|:--|
| [`int`](class_int.md) | [`get_line_count`](class_flowcontainer.md#class_flowcontainer_method_get_line_count) ( ) const[^const] |

## 主题属性

|||
|:-:|:--|
| [`int`](class_int.md) | [`h_separation`](class_flowcontainer.md#class_flowcontainer_theme_constant_h_separation) | ``4`` |
| [`int`](class_int.md) | [`v_separation`](class_flowcontainer.md#class_flowcontainer_theme_constant_v_separation) | ``4`` |

<!-- rst-class:: classref-section-separator -->

---

## 枚举

<div id="_class_enum_flowcontainer_alignmentmode"></div>

enum **AlignmentMode**: <div id="enum_flowcontainer_alignmentmode"></div>

<div id="_class_flowcontainer_constant_alignment_begin"></div>

[AlignmentMode](#enum_flowcontainer_alignmentmode) **ALIGNMENT_BEGIN** = ``0``

The child controls will be arranged at the beginning of the container, i.e. top if orientation is vertical, left if orientation is horizontal (right for RTL layout).

<div id="_class_flowcontainer_constant_alignment_center"></div>

[AlignmentMode](#enum_flowcontainer_alignmentmode) **ALIGNMENT_CENTER** = ``1``

The child controls will be centered in the container.

<div id="_class_flowcontainer_constant_alignment_end"></div>

[AlignmentMode](#enum_flowcontainer_alignmentmode) **ALIGNMENT_END** = ``2``

The child controls will be arranged at the end of the container, i.e. bottom if orientation is vertical, right if orientation is horizontal (left for RTL layout).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_enum_flowcontainer_lastwrapalignmentmode"></div>

enum **LastWrapAlignmentMode**: <div id="enum_flowcontainer_lastwrapalignmentmode"></div>

<div id="_class_flowcontainer_constant_last_wrap_alignment_inherit"></div>

[LastWrapAlignmentMode](#enum_flowcontainer_lastwrapalignmentmode) **LAST_WRAP_ALIGNMENT_INHERIT** = ``0``

The last partially filled row or column will wrap aligned to the previous row or column in accordance with [`alignment`](class_flowcontainer.md#class_flowcontainer_property_alignment).

<div id="_class_flowcontainer_constant_last_wrap_alignment_begin"></div>

[LastWrapAlignmentMode](#enum_flowcontainer_lastwrapalignmentmode) **LAST_WRAP_ALIGNMENT_BEGIN** = ``1``

The last partially filled row or column will wrap aligned to the beginning of the previous row or column.

<div id="_class_flowcontainer_constant_last_wrap_alignment_center"></div>

[LastWrapAlignmentMode](#enum_flowcontainer_lastwrapalignmentmode) **LAST_WRAP_ALIGNMENT_CENTER** = ``2``

The last partially filled row or column will wrap aligned to the center of the previous row or column.

<div id="_class_flowcontainer_constant_last_wrap_alignment_end"></div>

[LastWrapAlignmentMode](#enum_flowcontainer_lastwrapalignmentmode) **LAST_WRAP_ALIGNMENT_END** = ``3``

The last partially filled row or column will wrap aligned to the end of the previous row or column.

<!-- rst-class:: classref-section-separator -->

---

## 属性说明

<div id="_class_flowcontainer_property_alignment"></div>

[AlignmentMode](#enum_flowcontainer_alignmentmode) **alignment** = ``0`` <div id="class_flowcontainer_property_alignment"></div>

- `void` **set_alignment** ( value: [AlignmentMode](#enum_flowcontainer_alignmentmode) )
- [AlignmentMode](#enum_flowcontainer_alignmentmode) **get_alignment** ( )

The alignment of the container's children (must be one of [`ALIGNMENT_BEGIN`](class_flowcontainer.md#class_flowcontainer_constant_alignment_begin), [`ALIGNMENT_CENTER`](class_flowcontainer.md#class_flowcontainer_constant_alignment_center), or [`ALIGNMENT_END`](class_flowcontainer.md#class_flowcontainer_constant_alignment_end)).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_flowcontainer_property_last_wrap_alignment"></div>

[LastWrapAlignmentMode](#enum_flowcontainer_lastwrapalignmentmode) **last_wrap_alignment** = ``0`` <div id="class_flowcontainer_property_last_wrap_alignment"></div>

- `void` **set_last_wrap_alignment** ( value: [LastWrapAlignmentMode](#enum_flowcontainer_lastwrapalignmentmode) )
- [LastWrapAlignmentMode](#enum_flowcontainer_lastwrapalignmentmode) **get_last_wrap_alignment** ( )

The wrap behavior of the last, partially filled row or column (must be one of [`LAST_WRAP_ALIGNMENT_INHERIT`](class_flowcontainer.md#class_flowcontainer_constant_last_wrap_alignment_inherit), [`LAST_WRAP_ALIGNMENT_BEGIN`](class_flowcontainer.md#class_flowcontainer_constant_last_wrap_alignment_begin), [`LAST_WRAP_ALIGNMENT_CENTER`](class_flowcontainer.md#class_flowcontainer_constant_last_wrap_alignment_center), or [`LAST_WRAP_ALIGNMENT_END`](class_flowcontainer.md#class_flowcontainer_constant_last_wrap_alignment_end)).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_flowcontainer_property_reverse_fill"></div>

[`bool`](class_bool.md) **reverse_fill** = ``false`` <div id="class_flowcontainer_property_reverse_fill"></div>

- `void` **set_reverse_fill** ( value: [`bool`](class_bool.md) )
- [`bool`](class_bool.md) **is_reverse_fill** ( )

If `true`, reverses fill direction. Horizontal **FlowContainer** s will fill rows bottom to top, vertical **FlowContainer** s will fill columns right to left.

When using a vertical **FlowContainer** with a right to left [`Control.layout_direction`](class_control.md#class_control_property_layout_direction), columns will fill left to right instead.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_flowcontainer_property_vertical"></div>

[`bool`](class_bool.md) **vertical** = ``false`` <div id="class_flowcontainer_property_vertical"></div>

- `void` **set_vertical** ( value: [`bool`](class_bool.md) )
- [`bool`](class_bool.md) **is_vertical** ( )

If `true`, the **FlowContainer** will arrange its children vertically, rather than horizontally.

Can't be changed when using [`HFlowContainer`](class_hflowcontainer.md) and [`VFlowContainer`](class_vflowcontainer.md).

<!-- rst-class:: classref-section-separator -->

---

## 方法说明

<div id="_class_flowcontainer_method_get_line_count"></div>

[`int`](class_int.md) **get_line_count** ( ) const[^const]<div id="class_flowcontainer_method_get_line_count"></div>

Returns the current line count.

<!-- rst-class:: classref-section-separator -->

---

## 主题属性说明

<div id="_class_flowcontainer_theme_constant_h_separation"></div>

[`int`](class_int.md) **h_separation** = ``4`` <div id="class_flowcontainer_theme_constant_h_separation"></div>

The horizontal separation of child nodes.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_flowcontainer_theme_constant_v_separation"></div>

[`int`](class_int.md) **v_separation** = ``4`` <div id="class_flowcontainer_theme_constant_v_separation"></div>

The vertical separation of child nodes.

[^virtual]: 本方法通常需要用户覆盖才能生效。
[^const]: 本方法无副作用，不会修改该实例的任何成员变量。
[^vararg]: 本方法除了能接受在此处描述的参数外，还能够继续接受任意数量的参数。
[^constructor]: 本方法用于构造某个类型。
[^static]: 调用本方法无需实例，可直接使用类名进行调用。
[^operator]: 本方法描述的是使用本类型作为左操作数的有效运算符。
[^bitfield]: 这个值是由下列位标志构成位掩码的整数。
[^void]: 无返回值。
