<!-- ⚠ 请勿编辑本文件 ⚠ -->
<!-- 本文档使用脚本从 WeDot 引擎源码仓库生成。 -->
<!-- 生成脚本：https://github.com/WeDot-Engine/WeDot/tree/master/doc/tools/make_md.py； -->
<!-- 原文件：https://github.com/WeDot-Engine/WeDot/tree/master/doc/classes/BaseButton.xml。 -->

<div id="_class_basebutton"></div>

# BaseButton

**继承：** [`Control`](class_control.md) **<** [`CanvasItem`](class_canvasitem.md) **<** [`Node`](class_node.md) **<** [`Object`](class_object.md)

**派生：** [`Button`](class_button.md), [`LinkButton`](class_linkbutton.md), [`TextureButton`](class_texturebutton.md)

Abstract base class for GUI buttons.

## 描述

**BaseButton** is an abstract base class for GUI buttons. It doesn't display anything by itself.

## 属性

|||
|:-:|:--|
| [ActionMode](#enum_basebutton_actionmode)             | [`action_mode`](class_basebutton.md#class_basebutton_property_action_mode)                   | ``1``                                                                             |
| [`ButtonGroup`](class_buttongroup.md)                 | [`button_group`](class_basebutton.md#class_basebutton_property_button_group)                 |                                                                                   |
| [MouseButtonMask](#enum_@globalscope_mousebuttonmask) | [`button_mask`](class_basebutton.md#class_basebutton_property_button_mask)                   | ``1``                                                                             |
| [`bool`](class_bool.md)                               | [`button_pressed`](class_basebutton.md#class_basebutton_property_button_pressed)             | ``false``                                                                         |
| [`bool`](class_bool.md)                               | [`disabled`](class_basebutton.md#class_basebutton_property_disabled)                         | ``false``                                                                         |
| [FocusMode](#enum_control_focusmode)                  | focus_mode                                                                                   | ``2`` (overrides [`Control`](class_control.md#class_control_property_focus_mode)) |
| [`bool`](class_bool.md)                               | [`keep_pressed_outside`](class_basebutton.md#class_basebutton_property_keep_pressed_outside) | ``false``                                                                         |
| [`Shortcut`](class_shortcut.md)                       | [`shortcut`](class_basebutton.md#class_basebutton_property_shortcut)                         |                                                                                   |
| [`bool`](class_bool.md)                               | [`shortcut_feedback`](class_basebutton.md#class_basebutton_property_shortcut_feedback)       | ``true``                                                                          |
| [`bool`](class_bool.md)                               | [`shortcut_in_tooltip`](class_basebutton.md#class_basebutton_property_shortcut_in_tooltip)   | ``true``                                                                          |
| [`bool`](class_bool.md)                               | [`toggle_mode`](class_basebutton.md#class_basebutton_property_toggle_mode)                   | ``false``                                                                         |

## 方法

|||
|:-:|:--|
| `void`                                | [`_pressed`](class_basebutton.md#class_basebutton_private_method__pressed) ( ) virtual[^virtual]                                     |
| `void`                                | [`_toggled`](class_basebutton.md#class_basebutton_private_method__toggled) ( toggled_on: [`bool`](class_bool.md) ) virtual[^virtual] |
| [DrawMode](#enum_basebutton_drawmode) | [`get_draw_mode`](class_basebutton.md#class_basebutton_method_get_draw_mode) ( ) const[^const]                                       |
| [`bool`](class_bool.md)               | [`is_hovered`](class_basebutton.md#class_basebutton_method_is_hovered) ( ) const[^const]                                             |
| `void`                                | [`set_pressed_no_signal`](class_basebutton.md#class_basebutton_method_set_pressed_no_signal) ( pressed: [`bool`](class_bool.md) )    |

<!-- rst-class:: classref-section-separator -->

---

## 信号

<div id="_class_class_basebutton_signal_button_down"></div>

**button_down** ( ) <div id="class_basebutton_signal_button_down"></div>

Emitted when the button starts being held down.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_class_basebutton_signal_button_up"></div>

**button_up** ( ) <div id="class_basebutton_signal_button_up"></div>

Emitted when the button stops being held down.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_class_basebutton_signal_pressed"></div>

**pressed** ( ) <div id="class_basebutton_signal_pressed"></div>

Emitted when the button is toggled or pressed. This is on [`button_down`](class_basebutton.md#class_basebutton_signal_button_down) if [`action_mode`](class_basebutton.md#class_basebutton_property_action_mode) is [`ACTION_MODE_BUTTON_PRESS`](class_basebutton.md#class_basebutton_constant_action_mode_button_press) and on [`button_up`](class_basebutton.md#class_basebutton_signal_button_up) otherwise.

If you need to know the button's pressed state (and [`toggle_mode`](class_basebutton.md#class_basebutton_property_toggle_mode) is active), use [`toggled`](class_basebutton.md#class_basebutton_signal_toggled) instead.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_class_basebutton_signal_toggled"></div>

**toggled** ( toggled_on: [`bool`](class_bool.md) ) <div id="class_basebutton_signal_toggled"></div>

Emitted when the button was just toggled between pressed and normal states (only if [`toggle_mode`](class_basebutton.md#class_basebutton_property_toggle_mode) is active). The new state is contained in the `toggled_on` argument.

<!-- rst-class:: classref-section-separator -->

---

## 枚举

<div id="_class_enum_basebutton_drawmode"></div>

enum **DrawMode**: <div id="enum_basebutton_drawmode"></div>

<div id="_class_basebutton_constant_draw_normal"></div>

[DrawMode](#enum_basebutton_drawmode) **DRAW_NORMAL** = ``0``

The normal state (i.e. not pressed, not hovered, not toggled and enabled) of buttons.

<div id="_class_basebutton_constant_draw_pressed"></div>

[DrawMode](#enum_basebutton_drawmode) **DRAW_PRESSED** = ``1``

The state of buttons are pressed.

<div id="_class_basebutton_constant_draw_hover"></div>

[DrawMode](#enum_basebutton_drawmode) **DRAW_HOVER** = ``2``

The state of buttons are hovered.

<div id="_class_basebutton_constant_draw_disabled"></div>

[DrawMode](#enum_basebutton_drawmode) **DRAW_DISABLED** = ``3``

The state of buttons are disabled.

<div id="_class_basebutton_constant_draw_hover_pressed"></div>

[DrawMode](#enum_basebutton_drawmode) **DRAW_HOVER_PRESSED** = ``4``

The state of buttons are both hovered and pressed.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_enum_basebutton_actionmode"></div>

enum **ActionMode**: <div id="enum_basebutton_actionmode"></div>

<div id="_class_basebutton_constant_action_mode_button_press"></div>

[ActionMode](#enum_basebutton_actionmode) **ACTION_MODE_BUTTON_PRESS** = ``0``

Require just a press to consider the button clicked.

<div id="_class_basebutton_constant_action_mode_button_release"></div>

[ActionMode](#enum_basebutton_actionmode) **ACTION_MODE_BUTTON_RELEASE** = ``1``

Require a press and a subsequent release before considering the button clicked.

<!-- rst-class:: classref-section-separator -->

---

## 属性说明

<div id="_class_basebutton_property_action_mode"></div>

[ActionMode](#enum_basebutton_actionmode) **action_mode** = ``1`` <div id="class_basebutton_property_action_mode"></div>

- `void` **set_action_mode** ( value: [ActionMode](#enum_basebutton_actionmode) )
- [ActionMode](#enum_basebutton_actionmode) **get_action_mode** ( )

Determines when the button is considered clicked, one of the [ActionMode](#enum_basebutton_actionmode) constants.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_basebutton_property_button_group"></div>

[`ButtonGroup`](class_buttongroup.md) **button_group** <div id="class_basebutton_property_button_group"></div>

- `void` **set_button_group** ( value: [`ButtonGroup`](class_buttongroup.md) )
- [`ButtonGroup`](class_buttongroup.md) **get_button_group** ( )

The [`ButtonGroup`](class_buttongroup.md) associated with the button. Not to be confused with node groups.

 **Note:** The button will be configured as a radio button if a [`ButtonGroup`](class_buttongroup.md) is assigned to it.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_basebutton_property_button_mask"></div>

[MouseButtonMask](#enum_@globalscope_mousebuttonmask) **button_mask** = ``1`` <div id="class_basebutton_property_button_mask"></div>

- `void` **set_button_mask** ( value: [MouseButtonMask](#enum_@globalscope_mousebuttonmask) )
- [MouseButtonMask](#enum_@globalscope_mousebuttonmask) **get_button_mask** ( )

Binary mask to choose which mouse buttons this button will respond to.

To allow both left-click and right-click, use `MOUSE_BUTTON_MASK_LEFT | MOUSE_BUTTON_MASK_RIGHT`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_basebutton_property_button_pressed"></div>

[`bool`](class_bool.md) **button_pressed** = ``false`` <div id="class_basebutton_property_button_pressed"></div>

- `void` **set_pressed** ( value: [`bool`](class_bool.md) )
- [`bool`](class_bool.md) **is_pressed** ( )

If `true`, the button's state is pressed. Means the button is pressed down or toggled (if [`toggle_mode`](class_basebutton.md#class_basebutton_property_toggle_mode) is active). Only works if [`toggle_mode`](class_basebutton.md#class_basebutton_property_toggle_mode) is `true`.

 **Note:** Changing the value of [`button_pressed`](class_basebutton.md#class_basebutton_property_button_pressed) will result in [`toggled`](class_basebutton.md#class_basebutton_signal_toggled) to be emitted. If you want to change the pressed state without emitting that signal, use [`set_pressed_no_signal`](class_basebutton.md#class_basebutton_method_set_pressed_no_signal).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_basebutton_property_disabled"></div>

[`bool`](class_bool.md) **disabled** = ``false`` <div id="class_basebutton_property_disabled"></div>

- `void` **set_disabled** ( value: [`bool`](class_bool.md) )
- [`bool`](class_bool.md) **is_disabled** ( )

If `true`, the button is in disabled state and can't be clicked or toggled.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_basebutton_property_keep_pressed_outside"></div>

[`bool`](class_bool.md) **keep_pressed_outside** = ``false`` <div id="class_basebutton_property_keep_pressed_outside"></div>

- `void` **set_keep_pressed_outside** ( value: [`bool`](class_bool.md) )
- [`bool`](class_bool.md) **is_keep_pressed_outside** ( )

If `true`, the button stays pressed when moving the cursor outside the button while pressing it.

 **Note:** This property only affects the button's visual appearance. Signals will be emitted at the same moment regardless of this property's value.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_basebutton_property_shortcut"></div>

[`Shortcut`](class_shortcut.md) **shortcut** <div id="class_basebutton_property_shortcut"></div>

- `void` **set_shortcut** ( value: [`Shortcut`](class_shortcut.md) )
- [`Shortcut`](class_shortcut.md) **get_shortcut** ( )

[`Shortcut`](class_shortcut.md) associated to the button.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_basebutton_property_shortcut_feedback"></div>

[`bool`](class_bool.md) **shortcut_feedback** = ``true`` <div id="class_basebutton_property_shortcut_feedback"></div>

- `void` **set_shortcut_feedback** ( value: [`bool`](class_bool.md) )
- [`bool`](class_bool.md) **is_shortcut_feedback** ( )

If `true`, the button will highlight for a short amount of time when its shortcut is activated. If `false` and [`toggle_mode`](class_basebutton.md#class_basebutton_property_toggle_mode) is `false`, the shortcut will activate without any visual feedback.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_basebutton_property_shortcut_in_tooltip"></div>

[`bool`](class_bool.md) **shortcut_in_tooltip** = ``true`` <div id="class_basebutton_property_shortcut_in_tooltip"></div>

- `void` **set_shortcut_in_tooltip** ( value: [`bool`](class_bool.md) )
- [`bool`](class_bool.md) **is_shortcut_in_tooltip_enabled** ( )

If `true`, the button will add information about its shortcut in the tooltip.

 **Note:** This property does nothing when the tooltip control is customized using [`Control._make_custom_tooltip`](class_control.md#class_control_private_method__make_custom_tooltip).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_basebutton_property_toggle_mode"></div>

[`bool`](class_bool.md) **toggle_mode** = ``false`` <div id="class_basebutton_property_toggle_mode"></div>

- `void` **set_toggle_mode** ( value: [`bool`](class_bool.md) )
- [`bool`](class_bool.md) **is_toggle_mode** ( )

If `true`, the button is in toggle mode. Makes the button flip state between pressed and unpressed each time its area is clicked.

<!-- rst-class:: classref-section-separator -->

---

## 方法说明

<div id="_class_basebutton_private_method__pressed"></div>

`void` **_pressed** ( ) virtual[^virtual]<div id="class_basebutton_private_method__pressed"></div>

Called when the button is pressed. If you need to know the button's pressed state (and [`toggle_mode`](class_basebutton.md#class_basebutton_property_toggle_mode) is active), use [`_toggled`](class_basebutton.md#class_basebutton_private_method__toggled) instead.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_basebutton_private_method__toggled"></div>

`void` **_toggled** ( toggled_on: [`bool`](class_bool.md) ) virtual[^virtual]<div id="class_basebutton_private_method__toggled"></div>

Called when the button is toggled (only if [`toggle_mode`](class_basebutton.md#class_basebutton_property_toggle_mode) is active).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_basebutton_method_get_draw_mode"></div>

[DrawMode](#enum_basebutton_drawmode) **get_draw_mode** ( ) const[^const]<div id="class_basebutton_method_get_draw_mode"></div>

Returns the visual state used to draw the button. This is useful mainly when implementing your own draw code by either overriding _draw() or connecting to "draw" signal. The visual state of the button is defined by the [DrawMode](#enum_basebutton_drawmode) enum.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_basebutton_method_is_hovered"></div>

[`bool`](class_bool.md) **is_hovered** ( ) const[^const]<div id="class_basebutton_method_is_hovered"></div>

Returns `true` if the mouse has entered the button and has not left it yet.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_basebutton_method_set_pressed_no_signal"></div>

`void` **set_pressed_no_signal** ( pressed: [`bool`](class_bool.md) )<div id="class_basebutton_method_set_pressed_no_signal"></div>

Changes the [`button_pressed`](class_basebutton.md#class_basebutton_property_button_pressed) state of the button, without emitting [`toggled`](class_basebutton.md#class_basebutton_signal_toggled). Use when you just want to change the state of the button without sending the pressed event (e.g. when initializing scene). Only works if [`toggle_mode`](class_basebutton.md#class_basebutton_property_toggle_mode) is `true`.

 **Note:** This method doesn't unpress other buttons in [`button_group`](class_basebutton.md#class_basebutton_property_button_group).

[^virtual]: 本方法通常需要用户覆盖才能生效。
[^const]: 本方法无副作用，不会修改该实例的任何成员变量。
[^vararg]: 本方法除了能接受在此处描述的参数外，还能够继续接受任意数量的参数。
[^constructor]: 本方法用于构造某个类型。
[^static]: 调用本方法无需实例，可直接使用类名进行调用。
[^operator]: 本方法描述的是使用本类型作为左操作数的有效运算符。
[^bitfield]: 这个值是由下列位标志构成位掩码的整数。
[^void]: 无返回值。
