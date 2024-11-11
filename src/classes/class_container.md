<!-- ⚠ 请勿编辑本文件 ⚠ -->
<!-- 本文档使用脚本从 WeDot 引擎源码仓库生成。 -->
<!-- 生成脚本：https://github.com/WeDot-Engine/WeDot/tree/master/doc/tools/make_md.py； -->
<!-- 原文件：https://github.com/WeDot-Engine/WeDot/tree/master/doc/classes/Container.xml。 -->

<div id="_class_container"></div>

# Container

**继承：** [`Control`](class_control.md) **<** [`CanvasItem`](class_canvasitem.md) **<** [`Node`](class_node.md) **<** [`Object`](class_object.md)

**派生：** [`AspectRatioContainer`](class_aspectratiocontainer.md), [`BoxContainer`](class_boxcontainer.md), [`CenterContainer`](class_centercontainer.md), [`EditorProperty`](class_editorproperty.md), [`FlowContainer`](class_flowcontainer.md), [`GraphElement`](class_graphelement.md), [`GridContainer`](class_gridcontainer.md), [`MarginContainer`](class_margincontainer.md), [`PanelContainer`](class_panelcontainer.md), [`ScrollContainer`](class_scrollcontainer.md), [`SplitContainer`](class_splitcontainer.md), [`SubViewportContainer`](class_subviewportcontainer.md), [`TabContainer`](class_tabcontainer.md)

Base class for all GUI containers.

## 描述

Base class for all GUI containers. A **Container** automatically arranges its child controls in a certain way. This class can be inherited to make custom container types.

## 属性

|||
|:-:|:--|
| [MouseFilter](#enum_control_mousefilter) | mouse_filter | ``1`` (overrides [`Control`](class_control.md#class_control_property_mouse_filter)) |

## 方法

|||
|:-:|:--|
| [`PackedInt32Array`](class_packedint32array.md) | [`_get_allowed_size_flags_horizontal`](class_container.md#class_container_private_method__get_allowed_size_flags_horizontal) ( ) virtual[^virtual] const[^const] |
| [`PackedInt32Array`](class_packedint32array.md) | [`_get_allowed_size_flags_vertical`](class_container.md#class_container_private_method__get_allowed_size_flags_vertical) ( ) virtual[^virtual] const[^const]     |
| `void`                                          | [`fit_child_in_rect`](class_container.md#class_container_method_fit_child_in_rect) ( child: [`Control`](class_control.md), rect: [`Rect2`](class_rect2.md) )     |
| `void`                                          | [`queue_sort`](class_container.md#class_container_method_queue_sort) ( )                                                                                         |

<!-- rst-class:: classref-section-separator -->

---

## 信号

<div id="_class_class_container_signal_pre_sort_children"></div>

**pre_sort_children** ( ) <div id="class_container_signal_pre_sort_children"></div>

Emitted when children are going to be sorted.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_class_container_signal_sort_children"></div>

**sort_children** ( ) <div id="class_container_signal_sort_children"></div>

Emitted when sorting the children is needed.

<!-- rst-class:: classref-section-separator -->

---

## 常量

<div id="_class_container_constant_notification_pre_sort_children"></div>

**NOTIFICATION_PRE_SORT_CHILDREN** = ``50`` <div id="class_container_constant_notification_pre_sort_children"></div>

Notification just before children are going to be sorted, in case there's something to process beforehand.

<div id="_class_container_constant_notification_sort_children"></div>

**NOTIFICATION_SORT_CHILDREN** = ``51`` <div id="class_container_constant_notification_sort_children"></div>

Notification for when sorting the children, it must be obeyed immediately.

<!-- rst-class:: classref-section-separator -->

---

## 方法说明

<div id="_class_container_private_method__get_allowed_size_flags_horizontal"></div>

[`PackedInt32Array`](class_packedint32array.md) **_get_allowed_size_flags_horizontal** ( ) virtual[^virtual] const[^const]<div id="class_container_private_method__get_allowed_size_flags_horizontal"></div>

Implement to return a list of allowed horizontal [SizeFlags](#enum_control_sizeflags) for child nodes. This doesn't technically prevent the usages of any other size flags, if your implementation requires that. This only limits the options available to the user in the Inspector dock.

 **Note:** Having no size flags is equal to having [`Control.SIZE_SHRINK_BEGIN`](class_control.md#class_control_constant_size_shrink_begin). As such, this value is always implicitly allowed.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_container_private_method__get_allowed_size_flags_vertical"></div>

[`PackedInt32Array`](class_packedint32array.md) **_get_allowed_size_flags_vertical** ( ) virtual[^virtual] const[^const]<div id="class_container_private_method__get_allowed_size_flags_vertical"></div>

Implement to return a list of allowed vertical [SizeFlags](#enum_control_sizeflags) for child nodes. This doesn't technically prevent the usages of any other size flags, if your implementation requires that. This only limits the options available to the user in the Inspector dock.

 **Note:** Having no size flags is equal to having [`Control.SIZE_SHRINK_BEGIN`](class_control.md#class_control_constant_size_shrink_begin). As such, this value is always implicitly allowed.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_container_method_fit_child_in_rect"></div>

`void` **fit_child_in_rect** ( child: [`Control`](class_control.md), rect: [`Rect2`](class_rect2.md) )<div id="class_container_method_fit_child_in_rect"></div>

Fit a child control in a given rect. This is mainly a helper for creating custom container classes.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_container_method_queue_sort"></div>

`void` **queue_sort** ( )<div id="class_container_method_queue_sort"></div>

Queue resort of the contained children. This is called automatically anyway, but can be called upon request.

[^virtual]: 本方法通常需要用户覆盖才能生效。
[^const]: 本方法无副作用，不会修改该实例的任何成员变量。
[^vararg]: 本方法除了能接受在此处描述的参数外，还能够继续接受任意数量的参数。
[^constructor]: 本方法用于构造某个类型。
[^static]: 调用本方法无需实例，可直接使用类名进行调用。
[^operator]: 本方法描述的是使用本类型作为左操作数的有效运算符。
[^bitfield]: 这个值是由下列位标志构成位掩码的整数。
[^void]: 无返回值。
