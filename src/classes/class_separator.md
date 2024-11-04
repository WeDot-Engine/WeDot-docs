<!-- ⚠ 请勿编辑本文件 ⚠ -->
<!-- 本文档使用脚本从 WeDot 引擎源码仓库生成。 -->
<!-- 生成脚本：https://github.com/WeDot-Engine/WeDot/tree/4.3/doc/tools/make_md.py； -->
<!-- 原文件：https://github.com/WeDot-Engine/WeDot/tree/4.3/doc/classes/Separator.xml。 -->

<div id="_class_separator"></div>

# Separator

**继承：** [`Control`](class_control.md) **<** [`CanvasItem`](class_canvasitem.md) **<** [`Node`](class_node.md) **<** [`Object`](class_object.md)

**派生：** [`HSeparator`](class_hseparator.md), [`VSeparator`](class_vseparator.md)

Abstract base class for separators.

## 描述

Abstract base class for separators, used for separating other controls. **Separator** s are purely visual and normally drawn as a [`StyleBoxLine`](class_styleboxline.md).

## 主题属性

| [`int`](class_int.md)           | [`separation`](#class_separator_theme_constant_separation) | ``0`` |
| [`StyleBox`](class_stylebox.md) | [`separator`](#class_separator_theme_style_separator)      |       |

<!-- rst-class:: classref-section-separator -->

---

## 主题属性说明

<div id="_class_separator_theme_constant_separation"></div>

[`int`](class_int.md) **separation** = ``0`` <div id="class_separator_theme_constant_separation"></div>

The size of the area covered by the separator. Effectively works like a minimum width/height.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_separator_theme_style_separator"></div>

[`StyleBox`](class_stylebox.md) **separator** <div id="class_separator_theme_style_separator"></div>

The style for the separator line. Works best with [`StyleBoxLine`](class_styleboxline.md) (remember to enable [`StyleBoxLine.vertical`](#class_styleboxline_property_vertical) for [`VSeparator`](class_vseparator.md)).

[^virtual]: 本方法通常需要用户覆盖才能生效。
[^const]: 本方法无副作用，不会修改该实例的任何成员变量。
[^vararg]: 本方法除了能接受在此处描述的参数外，还能够继续接受任意数量的参数。
[^constructor]: 本方法用于构造某个类型。
[^static]: 调用本方法无需实例，可直接使用类名进行调用。
[^operator]: 本方法描述的是使用本类型作为左操作数的有效运算符。
[^bitfield]: 这个值是由下列位标志构成位掩码的整数。
[^void]: 无返回值。
