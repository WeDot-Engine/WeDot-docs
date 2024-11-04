<!-- ⚠ 请勿编辑本文件 ⚠ -->
<!-- 本文档使用脚本从 WeDot 引擎源码仓库生成。 -->
<!-- 生成脚本：https://github.com/WeDot-Engine/WeDot/tree/4.3/doc/tools/make_md.py； -->
<!-- 原文件：https://github.com/WeDot-Engine/WeDot/tree/4.3/doc/classes/MarginContainer.xml。 -->

<div id="_class_margincontainer"></div>

# MarginContainer

**继承：** [`Container`](class_container.md) **<** [`Control`](class_control.md) **<** [`CanvasItem`](class_canvasitem.md) **<** [`Node`](class_node.md) **<** [`Object`](class_object.md)

A container that keeps a margin around its child controls.

## 描述

**MarginContainer** adds an adjustable margin on each side of its child controls. The margins are added around all children, not around each individual one. To control the **MarginContainer**'s margins, use the `margin_*` theme properties listed below.

 **Note:** The margin sizes are theme overrides, not normal properties. This is an example of how to change them in code:



```gdscript

    # This code sample assumes the current script is extending MarginContainer.
    var margin_value = 100
    add_theme_constant_override("margin_top", margin_value)
    add_theme_constant_override("margin_left", margin_value)
    add_theme_constant_override("margin_bottom", margin_value)
    add_theme_constant_override("margin_right", margin_value)
```

```csharp

    // This code sample assumes the current script is extending MarginContainer.
    int marginValue = 100;
    AddThemeConstantOverride("margin_top", marginValue);
    AddThemeConstantOverride("margin_left", marginValue);
    AddThemeConstantOverride("margin_bottom", marginValue);
    AddThemeConstantOverride("margin_right", marginValue);
```







## 主题属性

| [`int`](class_int.md) | [`margin_bottom`](#class_margincontainer_theme_constant_margin_bottom) | ``0`` |
| [`int`](class_int.md) | [`margin_left`](#class_margincontainer_theme_constant_margin_left)     | ``0`` |
| [`int`](class_int.md) | [`margin_right`](#class_margincontainer_theme_constant_margin_right)   | ``0`` |
| [`int`](class_int.md) | [`margin_top`](#class_margincontainer_theme_constant_margin_top)       | ``0`` |

<!-- rst-class:: classref-section-separator -->

---

## 主题属性说明

<div id="_class_margincontainer_theme_constant_margin_bottom"></div>

[`int`](class_int.md) **margin_bottom** = ``0`` <div id="class_margincontainer_theme_constant_margin_bottom"></div>

Offsets towards the inside direct children of the container by this amount of pixels from the bottom.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_margincontainer_theme_constant_margin_left"></div>

[`int`](class_int.md) **margin_left** = ``0`` <div id="class_margincontainer_theme_constant_margin_left"></div>

Offsets towards the inside direct children of the container by this amount of pixels from the left.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_margincontainer_theme_constant_margin_right"></div>

[`int`](class_int.md) **margin_right** = ``0`` <div id="class_margincontainer_theme_constant_margin_right"></div>

Offsets towards the inside direct children of the container by this amount of pixels from the right.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_margincontainer_theme_constant_margin_top"></div>

[`int`](class_int.md) **margin_top** = ``0`` <div id="class_margincontainer_theme_constant_margin_top"></div>

Offsets towards the inside direct children of the container by this amount of pixels from the top.

[^virtual]: 本方法通常需要用户覆盖才能生效。
[^const]: 本方法无副作用，不会修改该实例的任何成员变量。
[^vararg]: 本方法除了能接受在此处描述的参数外，还能够继续接受任意数量的参数。
[^constructor]: 本方法用于构造某个类型。
[^static]: 调用本方法无需实例，可直接使用类名进行调用。
[^operator]: 本方法描述的是使用本类型作为左操作数的有效运算符。
[^bitfield]: 这个值是由下列位标志构成位掩码的整数。
[^void]: 无返回值。
