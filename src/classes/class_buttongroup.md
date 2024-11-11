<!-- ⚠ 请勿编辑本文件 ⚠ -->
<!-- 本文档使用脚本从 WeDot 引擎源码仓库生成。 -->
<!-- 生成脚本：https://github.com/WeDot-Engine/WeDot/tree/master/doc/tools/make_md.py； -->
<!-- 原文件：https://github.com/WeDot-Engine/WeDot/tree/master/doc/classes/ButtonGroup.xml。 -->

<div id="_class_buttongroup"></div>

# ButtonGroup

**继承：** [`Resource`](class_resource.md) **<** [`RefCounted`](class_refcounted.md) **<** [`Object`](class_object.md)

A group of buttons that doesn't allow more than one button to be pressed at a time.

## 描述

A group of [`BaseButton`](class_basebutton.md)-derived buttons. The buttons in a **ButtonGroup** are treated like radio buttons: No more than one button can be pressed at a time. Some types of buttons (such as [`CheckBox`](class_checkbox.md)) may have a special appearance in this state.

Every member of a **ButtonGroup** should have [`BaseButton.toggle_mode`](class_basebutton.md#class_basebutton_property_toggle_mode) set to `true`.

## 属性

|||
|:-:|:--|
| [`bool`](class_bool.md) | [`allow_unpress`](class_buttongroup.md#class_buttongroup_property_allow_unpress) | ``false``                                                                                            |
| [`bool`](class_bool.md) | resource_local_to_scene                                                          | ``true`` (overrides [`Resource`](class_resource.md#class_resource_property_resource_local_to_scene)) |

## 方法

|||
|:-:|:--|
| [Array](class_array.md) [`BaseButton`](class_basebutton.md) | [`get_buttons`](class_buttongroup.md#class_buttongroup_method_get_buttons) ( )               |
| [`BaseButton`](class_basebutton.md)                         | [`get_pressed_button`](class_buttongroup.md#class_buttongroup_method_get_pressed_button) ( ) |

<!-- rst-class:: classref-section-separator -->

---

## 信号

<div id="_class_class_buttongroup_signal_pressed"></div>

**pressed** ( button: [`BaseButton`](class_basebutton.md) ) <div id="class_buttongroup_signal_pressed"></div>

Emitted when one of the buttons of the group is pressed.

<!-- rst-class:: classref-section-separator -->

---

## 属性说明

<div id="_class_buttongroup_property_allow_unpress"></div>

[`bool`](class_bool.md) **allow_unpress** = ``false`` <div id="class_buttongroup_property_allow_unpress"></div>

- `void` **set_allow_unpress** ( value: [`bool`](class_bool.md) )
- [`bool`](class_bool.md) **is_allow_unpress** ( )

If `true`, it is possible to unpress all buttons in this **ButtonGroup**.

<!-- rst-class:: classref-section-separator -->

---

## 方法说明

<div id="_class_buttongroup_method_get_buttons"></div>

[Array](class_array.md) [`BaseButton`](class_basebutton.md) **get_buttons** ( )<div id="class_buttongroup_method_get_buttons"></div>

Returns an [`Array`](class_array.md) of [`Button`](class_button.md) s who have this as their **ButtonGroup** (see [`BaseButton.button_group`](class_basebutton.md#class_basebutton_property_button_group)).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_buttongroup_method_get_pressed_button"></div>

[`BaseButton`](class_basebutton.md) **get_pressed_button** ( )<div id="class_buttongroup_method_get_pressed_button"></div>

Returns the current pressed button.

[^virtual]: 本方法通常需要用户覆盖才能生效。
[^const]: 本方法无副作用，不会修改该实例的任何成员变量。
[^vararg]: 本方法除了能接受在此处描述的参数外，还能够继续接受任意数量的参数。
[^constructor]: 本方法用于构造某个类型。
[^static]: 调用本方法无需实例，可直接使用类名进行调用。
[^operator]: 本方法描述的是使用本类型作为左操作数的有效运算符。
[^bitfield]: 这个值是由下列位标志构成位掩码的整数。
[^void]: 无返回值。
