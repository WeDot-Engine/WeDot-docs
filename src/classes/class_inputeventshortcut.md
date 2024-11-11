<!-- ⚠ 请勿编辑本文件 ⚠ -->
<!-- 本文档使用脚本从 WeDot 引擎源码仓库生成。 -->
<!-- 生成脚本：https://github.com/WeDot-Engine/WeDot/tree/master/doc/tools/make_md.py； -->
<!-- 原文件：https://github.com/WeDot-Engine/WeDot/tree/master/doc/classes/InputEventShortcut.xml。 -->

<div id="_class_inputeventshortcut"></div>

# InputEventShortcut

**继承：** [`InputEvent`](class_inputevent.md) **<** [`Resource`](class_resource.md) **<** [`RefCounted`](class_refcounted.md) **<** [`Object`](class_object.md)

Represents a triggered keyboard [`Shortcut`](class_shortcut.md).

## 描述

InputEventShortcut is a special event that can be received in [`Node._input`](class_node.md#class_node_private_method__input), [`Node._shortcut_input`](class_node.md#class_node_private_method__shortcut_input), and [`Node._unhandled_input`](class_node.md#class_node_private_method__unhandled_input). It is typically sent by the editor's Command Palette to trigger actions, but can also be sent manually using [`Viewport.push_input`](class_viewport.md#class_viewport_method_push_input).

## 属性

|||
|:-:|:--|
| [`Shortcut`](class_shortcut.md) | [`shortcut`](class_inputeventshortcut.md#class_inputeventshortcut_property_shortcut) |

<!-- rst-class:: classref-section-separator -->

---

## 属性说明

<div id="_class_inputeventshortcut_property_shortcut"></div>

[`Shortcut`](class_shortcut.md) **shortcut** <div id="class_inputeventshortcut_property_shortcut"></div>

- `void` **set_shortcut** ( value: [`Shortcut`](class_shortcut.md) )
- [`Shortcut`](class_shortcut.md) **get_shortcut** ( )

The [`Shortcut`](class_shortcut.md) represented by this event. Its [`Shortcut.matches_event`](class_shortcut.md#class_shortcut_method_matches_event) method will always return `true` for this event.

[^virtual]: 本方法通常需要用户覆盖才能生效。
[^const]: 本方法无副作用，不会修改该实例的任何成员变量。
[^vararg]: 本方法除了能接受在此处描述的参数外，还能够继续接受任意数量的参数。
[^constructor]: 本方法用于构造某个类型。
[^static]: 调用本方法无需实例，可直接使用类名进行调用。
[^operator]: 本方法描述的是使用本类型作为左操作数的有效运算符。
[^bitfield]: 这个值是由下列位标志构成位掩码的整数。
[^void]: 无返回值。
