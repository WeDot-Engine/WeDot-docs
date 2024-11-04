<!-- ⚠ 请勿编辑本文件 ⚠ -->
<!-- 本文档使用脚本从 WeDot 引擎源码仓库生成。 -->
<!-- 生成脚本：https://github.com/WeDot-Engine/WeDot/tree/4.3/doc/tools/make_md.py； -->
<!-- 原文件：https://github.com/WeDot-Engine/WeDot/tree/4.3/doc/classes/BoxContainer.xml。 -->

<div id="_class_boxcontainer"></div>

# BoxContainer

**继承：** [`Container`](class_container.md) **<** [`Control`](class_control.md) **<** [`CanvasItem`](class_canvasitem.md) **<** [`Node`](class_node.md) **<** [`Object`](class_object.md)

**派生：** [`HBoxContainer`](class_hboxcontainer.md), [`VBoxContainer`](class_vboxcontainer.md)

A container that arranges its child controls horizontally or vertically.

## 描述

A container that arranges its child controls horizontally or vertically, rearranging them automatically when their minimum size changes.

## 属性

| [AlignmentMode](#enum_boxcontainer_alignmentmode) | [`alignment`](#class_boxcontainer_property_alignment) | ``0``     |
| [`bool`](class_bool.md)                           | [`vertical`](#class_boxcontainer_property_vertical)   | ``false`` |

## 方法

| [`Control`](class_control.md) | [`add_spacer`](#class_boxcontainer_method_add_spacer) ( begin: [`bool`](class_bool.md) ) |

## 主题属性

| [`int`](class_int.md) | [`separation`](#class_boxcontainer_theme_constant_separation) | ``4`` |

<!-- rst-class:: classref-section-separator -->

---

## 枚举

<div id="_class_enum_boxcontainer_alignmentmode"></div>

enum **AlignmentMode**: <div id="enum_boxcontainer_alignmentmode"></div>

<div id="_class_boxcontainer_constant_alignment_begin"></div>

[AlignmentMode](#enum_boxcontainer_alignmentmode) **ALIGNMENT_BEGIN** = ``0``

The child controls will be arranged at the beginning of the container, i.e. top if orientation is vertical, left if orientation is horizontal (right for RTL layout).

<div id="_class_boxcontainer_constant_alignment_center"></div>

[AlignmentMode](#enum_boxcontainer_alignmentmode) **ALIGNMENT_CENTER** = ``1``

The child controls will be centered in the container.

<div id="_class_boxcontainer_constant_alignment_end"></div>

[AlignmentMode](#enum_boxcontainer_alignmentmode) **ALIGNMENT_END** = ``2``

The child controls will be arranged at the end of the container, i.e. bottom if orientation is vertical, right if orientation is horizontal (left for RTL layout).

<!-- rst-class:: classref-section-separator -->

---

## 属性说明

<div id="_class_boxcontainer_property_alignment"></div>

[AlignmentMode](#enum_boxcontainer_alignmentmode) **alignment** = ``0`` <div id="class_boxcontainer_property_alignment"></div>

- `void` **set_alignment** ( value: [AlignmentMode](#enum_boxcontainer_alignmentmode) )
- [AlignmentMode](#enum_boxcontainer_alignmentmode) **get_alignment** ( )

The alignment of the container's children (must be one of [`ALIGNMENT_BEGIN`](#class_boxcontainer_constant_alignment_begin), [`ALIGNMENT_CENTER`](#class_boxcontainer_constant_alignment_center), or [`ALIGNMENT_END`](#class_boxcontainer_constant_alignment_end)).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_boxcontainer_property_vertical"></div>

[`bool`](class_bool.md) **vertical** = ``false`` <div id="class_boxcontainer_property_vertical"></div>

- `void` **set_vertical** ( value: [`bool`](class_bool.md) )
- [`bool`](class_bool.md) **is_vertical** ( )

If `true`, the **BoxContainer** will arrange its children vertically, rather than horizontally.

Can't be changed when using [`HBoxContainer`](class_hboxcontainer.md) and [`VBoxContainer`](class_vboxcontainer.md).

<!-- rst-class:: classref-section-separator -->

---

## 方法说明

<div id="_class_boxcontainer_method_add_spacer"></div>

[`Control`](class_control.md) **add_spacer** ( begin: [`bool`](class_bool.md) )<div id="class_boxcontainer_method_add_spacer"></div>

Adds a [`Control`](class_control.md) node to the box as a spacer. If `begin` is `true`, it will insert the [`Control`](class_control.md) node in front of all other children.

<!-- rst-class:: classref-section-separator -->

---

## 主题属性说明

<div id="_class_boxcontainer_theme_constant_separation"></div>

[`int`](class_int.md) **separation** = ``4`` <div id="class_boxcontainer_theme_constant_separation"></div>

The space between the **BoxContainer**'s elements, in pixels.

[^virtual]: 本方法通常需要用户覆盖才能生效。
[^const]: 本方法无副作用，不会修改该实例的任何成员变量。
[^vararg]: 本方法除了能接受在此处描述的参数外，还能够继续接受任意数量的参数。
[^constructor]: 本方法用于构造某个类型。
[^static]: 调用本方法无需实例，可直接使用类名进行调用。
[^operator]: 本方法描述的是使用本类型作为左操作数的有效运算符。
[^bitfield]: 这个值是由下列位标志构成位掩码的整数。
[^void]: 无返回值。
