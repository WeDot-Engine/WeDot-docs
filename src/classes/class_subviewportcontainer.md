<!-- ⚠ 请勿编辑本文件 ⚠ -->
<!-- 本文档使用脚本从 WeDot 引擎源码仓库生成。 -->
<!-- 生成脚本：https://github.com/WeDot-Engine/WeDot/tree/4.3/doc/tools/make_md.py； -->
<!-- 原文件：https://github.com/WeDot-Engine/WeDot/tree/4.3/doc/classes/SubViewportContainer.xml。 -->

<div id="_class_subviewportcontainer"></div>

# SubViewportContainer

**继承：** [`Container`](class_container.md) **<** [`Control`](class_control.md) **<** [`CanvasItem`](class_canvasitem.md) **<** [`Node`](class_node.md) **<** [`Object`](class_object.md)

A container used for displaying the contents of a [`SubViewport`](class_subviewport.md).

## 描述

A container that displays the contents of underlying [`SubViewport`](class_subviewport.md) child nodes. It uses the combined size of the [`SubViewport`](class_subviewport.md) s as minimum size, unless [`stretch`](#class_subviewportcontainer_property_stretch) is enabled.

 **Note:** Changing a **SubViewportContainer**'s [`Control.scale`](#class_control_property_scale) will cause its contents to appear distorted. To change its visual size without causing distortion, adjust the node's margins instead (if it's not already in a container).

 **Note:** The **SubViewportContainer** forwards mouse-enter and mouse-exit notifications to its sub-viewports.

## 属性

| [FocusMode](#enum_control_focusmode) | focus_mode                                                              | ``1`` (overrides [`Control`](#class_control_property_focus_mode)) |
| [`bool`](class_bool.md)              | [`stretch`](#class_subviewportcontainer_property_stretch)               | ``false``                                                         |
| [`int`](class_int.md)                | [`stretch_shrink`](#class_subviewportcontainer_property_stretch_shrink) | ``1``                                                             |

## 方法

| [`bool`](class_bool.md) | [`_propagate_input_event`](#class_subviewportcontainer_private_method__propagate_input_event) ( event: [`InputEvent`](class_inputevent.md) ) virtual[^virtual] const[^const] |

<!-- rst-class:: classref-section-separator -->

---

## 属性说明

<div id="_class_subviewportcontainer_property_stretch"></div>

[`bool`](class_bool.md) **stretch** = ``false`` <div id="class_subviewportcontainer_property_stretch"></div>

- `void` **set_stretch** ( value: [`bool`](class_bool.md) )
- [`bool`](class_bool.md) **is_stretch_enabled** ( )

If `true`, the sub-viewport will be automatically resized to the control's size.

 **Note:** If `true`, this will prohibit changing [`SubViewport.size`](#class_subviewport_property_size) of its children manually.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_subviewportcontainer_property_stretch_shrink"></div>

[`int`](class_int.md) **stretch_shrink** = ``1`` <div id="class_subviewportcontainer_property_stretch_shrink"></div>

- `void` **set_stretch_shrink** ( value: [`int`](class_int.md) )
- [`int`](class_int.md) **get_stretch_shrink** ( )

Divides the sub-viewport's effective resolution by this value while preserving its scale. This can be used to speed up rendering.

For example, a 1280×720 sub-viewport with [`stretch_shrink`](#class_subviewportcontainer_property_stretch_shrink) set to `2` will be rendered at 640×360 while occupying the same size in the container.

 **Note:** [`stretch`](#class_subviewportcontainer_property_stretch) must be `true` for this property to work.

<!-- rst-class:: classref-section-separator -->

---

## 方法说明

<div id="_class_subviewportcontainer_private_method__propagate_input_event"></div>

[`bool`](class_bool.md) **_propagate_input_event** ( event: [`InputEvent`](class_inputevent.md) ) virtual[^virtual] const[^const]<div id="class_subviewportcontainer_private_method__propagate_input_event"></div>

**实验性：** 未来版本中可能会修改或移除该方法。

Virtual method to be implemented by the user. If it returns `true`, the `event` is propagated to [`SubViewport`](class_subviewport.md) children. Propagation doesn't happen if it returns `false`. If the function is not implemented, all events are propagated to SubViewports.

[^virtual]: 本方法通常需要用户覆盖才能生效。
[^const]: 本方法无副作用，不会修改该实例的任何成员变量。
[^vararg]: 本方法除了能接受在此处描述的参数外，还能够继续接受任意数量的参数。
[^constructor]: 本方法用于构造某个类型。
[^static]: 调用本方法无需实例，可直接使用类名进行调用。
[^operator]: 本方法描述的是使用本类型作为左操作数的有效运算符。
[^bitfield]: 这个值是由下列位标志构成位掩码的整数。
[^void]: 无返回值。
