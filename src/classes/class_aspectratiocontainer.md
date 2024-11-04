<!-- ⚠ 请勿编辑本文件 ⚠ -->
<!-- 本文档使用脚本从 WeDot 引擎源码仓库生成。 -->
<!-- 生成脚本：https://github.com/WeDot-Engine/WeDot/tree/4.3/doc/tools/make_md.py； -->
<!-- 原文件：https://github.com/WeDot-Engine/WeDot/tree/4.3/doc/classes/AspectRatioContainer.xml。 -->

<div id="_class_aspectratiocontainer"></div>

# AspectRatioContainer

**继承：** [`Container`](class_container.md) **<** [`Control`](class_control.md) **<** [`CanvasItem`](class_canvasitem.md) **<** [`Node`](class_node.md) **<** [`Object`](class_object.md)

A container that preserves the proportions of its child controls.

## 描述

A container type that arranges its child controls in a way that preserves their proportions automatically when the container is resized. Useful when a container has a dynamic size and the child nodes must adjust their sizes accordingly without losing their aspect ratios.

## 属性

| [AlignmentMode](#enum_aspectratiocontainer_alignmentmode) | [`alignment_horizontal`](#class_aspectratiocontainer_property_alignment_horizontal) | ``1``   |
| [AlignmentMode](#enum_aspectratiocontainer_alignmentmode) | [`alignment_vertical`](#class_aspectratiocontainer_property_alignment_vertical)     | ``1``   |
| [`float`](class_float.md)                                 | [`ratio`](#class_aspectratiocontainer_property_ratio)                               | ``1.0`` |
| [StretchMode](#enum_aspectratiocontainer_stretchmode)     | [`stretch_mode`](#class_aspectratiocontainer_property_stretch_mode)                 | ``2``   |

<!-- rst-class:: classref-section-separator -->

---

## 枚举

<div id="_class_enum_aspectratiocontainer_stretchmode"></div>

enum **StretchMode**: <div id="enum_aspectratiocontainer_stretchmode"></div>

<div id="_class_aspectratiocontainer_constant_stretch_width_controls_height"></div>

[StretchMode](#enum_aspectratiocontainer_stretchmode) **STRETCH_WIDTH_CONTROLS_HEIGHT** = ``0``

The height of child controls is automatically adjusted based on the width of the container.

<div id="_class_aspectratiocontainer_constant_stretch_height_controls_width"></div>

[StretchMode](#enum_aspectratiocontainer_stretchmode) **STRETCH_HEIGHT_CONTROLS_WIDTH** = ``1``

The width of child controls is automatically adjusted based on the height of the container.

<div id="_class_aspectratiocontainer_constant_stretch_fit"></div>

[StretchMode](#enum_aspectratiocontainer_stretchmode) **STRETCH_FIT** = ``2``

The bounding rectangle of child controls is automatically adjusted to fit inside the container while keeping the aspect ratio.

<div id="_class_aspectratiocontainer_constant_stretch_cover"></div>

[StretchMode](#enum_aspectratiocontainer_stretchmode) **STRETCH_COVER** = ``3``

The width and height of child controls is automatically adjusted to make their bounding rectangle cover the entire area of the container while keeping the aspect ratio.

When the bounding rectangle of child controls exceed the container's size and [`Control.clip_contents`](#class_control_property_clip_contents) is enabled, this allows to show only the container's area restricted by its own bounding rectangle.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_enum_aspectratiocontainer_alignmentmode"></div>

enum **AlignmentMode**: <div id="enum_aspectratiocontainer_alignmentmode"></div>

<div id="_class_aspectratiocontainer_constant_alignment_begin"></div>

[AlignmentMode](#enum_aspectratiocontainer_alignmentmode) **ALIGNMENT_BEGIN** = ``0``

Aligns child controls with the beginning (left or top) of the container.

<div id="_class_aspectratiocontainer_constant_alignment_center"></div>

[AlignmentMode](#enum_aspectratiocontainer_alignmentmode) **ALIGNMENT_CENTER** = ``1``

Aligns child controls with the center of the container.

<div id="_class_aspectratiocontainer_constant_alignment_end"></div>

[AlignmentMode](#enum_aspectratiocontainer_alignmentmode) **ALIGNMENT_END** = ``2``

Aligns child controls with the end (right or bottom) of the container.

<!-- rst-class:: classref-section-separator -->

---

## 属性说明

<div id="_class_aspectratiocontainer_property_alignment_horizontal"></div>

[AlignmentMode](#enum_aspectratiocontainer_alignmentmode) **alignment_horizontal** = ``1`` <div id="class_aspectratiocontainer_property_alignment_horizontal"></div>

- `void` **set_alignment_horizontal** ( value: [AlignmentMode](#enum_aspectratiocontainer_alignmentmode) )
- [AlignmentMode](#enum_aspectratiocontainer_alignmentmode) **get_alignment_horizontal** ( )

Specifies the horizontal relative position of child controls.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_aspectratiocontainer_property_alignment_vertical"></div>

[AlignmentMode](#enum_aspectratiocontainer_alignmentmode) **alignment_vertical** = ``1`` <div id="class_aspectratiocontainer_property_alignment_vertical"></div>

- `void` **set_alignment_vertical** ( value: [AlignmentMode](#enum_aspectratiocontainer_alignmentmode) )
- [AlignmentMode](#enum_aspectratiocontainer_alignmentmode) **get_alignment_vertical** ( )

Specifies the vertical relative position of child controls.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_aspectratiocontainer_property_ratio"></div>

[`float`](class_float.md) **ratio** = ``1.0`` <div id="class_aspectratiocontainer_property_ratio"></div>

- `void` **set_ratio** ( value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_ratio** ( )

The aspect ratio to enforce on child controls. This is the width divided by the height. The ratio depends on the [`stretch_mode`](#class_aspectratiocontainer_property_stretch_mode).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_aspectratiocontainer_property_stretch_mode"></div>

[StretchMode](#enum_aspectratiocontainer_stretchmode) **stretch_mode** = ``2`` <div id="class_aspectratiocontainer_property_stretch_mode"></div>

- `void` **set_stretch_mode** ( value: [StretchMode](#enum_aspectratiocontainer_stretchmode) )
- [StretchMode](#enum_aspectratiocontainer_stretchmode) **get_stretch_mode** ( )

The stretch mode used to align child controls.

[^virtual]: 本方法通常需要用户覆盖才能生效。
[^const]: 本方法无副作用，不会修改该实例的任何成员变量。
[^vararg]: 本方法除了能接受在此处描述的参数外，还能够继续接受任意数量的参数。
[^constructor]: 本方法用于构造某个类型。
[^static]: 调用本方法无需实例，可直接使用类名进行调用。
[^operator]: 本方法描述的是使用本类型作为左操作数的有效运算符。
[^bitfield]: 这个值是由下列位标志构成位掩码的整数。
[^void]: 无返回值。
