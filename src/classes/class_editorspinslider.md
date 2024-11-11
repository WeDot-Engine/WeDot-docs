<!-- ⚠ 请勿编辑本文件 ⚠ -->
<!-- 本文档使用脚本从 WeDot 引擎源码仓库生成。 -->
<!-- 生成脚本：https://github.com/WeDot-Engine/WeDot/tree/master/doc/tools/make_md.py； -->
<!-- 原文件：https://github.com/WeDot-Engine/WeDot/tree/master/doc/classes/EditorSpinSlider.xml。 -->

<div id="_class_editorspinslider"></div>

# EditorSpinSlider

**继承：** [`Range`](class_range.md) **<** [`Control`](class_control.md) **<** [`CanvasItem`](class_canvasitem.md) **<** [`Node`](class_node.md) **<** [`Object`](class_object.md)

Godot editor's control for editing numeric values.

## 描述

This [`Control`](class_control.md) node is used in the editor's Inspector dock to allow editing of numeric values. Can be used with [`EditorInspectorPlugin`](class_editorinspectorplugin.md) to recreate the same behavior.

If the [`Range.step`](class_range.md#class_range_property_step) value is `1`, the **EditorSpinSlider** will display up/down arrows, similar to [`SpinBox`](class_spinbox.md). If the [`Range.step`](class_range.md#class_range_property_step) value is not `1`, a slider will be displayed instead.

## 属性

|||
|:-:|:--|
| [`bool`](class_bool.md)              | [`flat`](class_editorspinslider.md#class_editorspinslider_property_flat)               | ``false``                                                                                  |
| [FocusMode](#enum_control_focusmode) | focus_mode                                                                             | ``2`` (overrides [`Control`](class_control.md#class_control_property_focus_mode))          |
| [`bool`](class_bool.md)              | [`hide_slider`](class_editorspinslider.md#class_editorspinslider_property_hide_slider) | ``false``                                                                                  |
| [`String`](class_string.md)          | [`label`](class_editorspinslider.md#class_editorspinslider_property_label)             | ``""``                                                                                     |
| [`bool`](class_bool.md)              | [`read_only`](class_editorspinslider.md#class_editorspinslider_property_read_only)     | ``false``                                                                                  |
| [SizeFlags](#enum_control_sizeflags) | size_flags_vertical                                                                    | ``1`` (overrides [`Control`](class_control.md#class_control_property_size_flags_vertical)) |
| [`float`](class_float.md)            | step                                                                                   | ``1.0`` (overrides [`Range`](class_range.md#class_range_property_step))                    |
| [`String`](class_string.md)          | [`suffix`](class_editorspinslider.md#class_editorspinslider_property_suffix)           | ``""``                                                                                     |

## 主题属性

|||
|:-:|:--|
| [`Texture2D`](class_texture2d.md) | [`updown`](class_editorspinslider.md#class_editorspinslider_theme_icon_updown)                   |
| [`Texture2D`](class_texture2d.md) | [`updown_disabled`](class_editorspinslider.md#class_editorspinslider_theme_icon_updown_disabled) |

<!-- rst-class:: classref-section-separator -->

---

## 信号

<div id="_class_class_editorspinslider_signal_grabbed"></div>

**grabbed** ( ) <div id="class_editorspinslider_signal_grabbed"></div>

Emitted when the spinner/slider is grabbed.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_class_editorspinslider_signal_ungrabbed"></div>

**ungrabbed** ( ) <div id="class_editorspinslider_signal_ungrabbed"></div>

Emitted when the spinner/slider is ungrabbed.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_class_editorspinslider_signal_value_focus_entered"></div>

**value_focus_entered** ( ) <div id="class_editorspinslider_signal_value_focus_entered"></div>

Emitted when the value form gains focus.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_class_editorspinslider_signal_value_focus_exited"></div>

**value_focus_exited** ( ) <div id="class_editorspinslider_signal_value_focus_exited"></div>

Emitted when the value form loses focus.

<!-- rst-class:: classref-section-separator -->

---

## 属性说明

<div id="_class_editorspinslider_property_flat"></div>

[`bool`](class_bool.md) **flat** = ``false`` <div id="class_editorspinslider_property_flat"></div>

- `void` **set_flat** ( value: [`bool`](class_bool.md) )
- [`bool`](class_bool.md) **is_flat** ( )

If `true`, the slider will not draw background.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorspinslider_property_hide_slider"></div>

[`bool`](class_bool.md) **hide_slider** = ``false`` <div id="class_editorspinslider_property_hide_slider"></div>

- `void` **set_hide_slider** ( value: [`bool`](class_bool.md) )
- [`bool`](class_bool.md) **is_hiding_slider** ( )

If `true`, the slider and up/down arrows are hidden.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorspinslider_property_label"></div>

[`String`](class_string.md) **label** = ``""`` <div id="class_editorspinslider_property_label"></div>

- `void` **set_label** ( value: [`String`](class_string.md) )
- [`String`](class_string.md) **get_label** ( )

The text that displays to the left of the value.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorspinslider_property_read_only"></div>

[`bool`](class_bool.md) **read_only** = ``false`` <div id="class_editorspinslider_property_read_only"></div>

- `void` **set_read_only** ( value: [`bool`](class_bool.md) )
- [`bool`](class_bool.md) **is_read_only** ( )

If `true`, the slider can't be interacted with.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorspinslider_property_suffix"></div>

[`String`](class_string.md) **suffix** = ``""`` <div id="class_editorspinslider_property_suffix"></div>

- `void` **set_suffix** ( value: [`String`](class_string.md) )
- [`String`](class_string.md) **get_suffix** ( )

The suffix to display after the value (in a faded color). This should generally be a plural word. You may have to use an abbreviation if the suffix is too long to be displayed.

<!-- rst-class:: classref-section-separator -->

---

## 主题属性说明

<div id="_class_editorspinslider_theme_icon_updown"></div>

[`Texture2D`](class_texture2d.md) **updown** <div id="class_editorspinslider_theme_icon_updown"></div>

Single texture representing both the up and down buttons.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorspinslider_theme_icon_updown_disabled"></div>

[`Texture2D`](class_texture2d.md) **updown_disabled** <div id="class_editorspinslider_theme_icon_updown_disabled"></div>

Single texture representing both the up and down buttons, when the control is readonly or disabled.

[^virtual]: 本方法通常需要用户覆盖才能生效。
[^const]: 本方法无副作用，不会修改该实例的任何成员变量。
[^vararg]: 本方法除了能接受在此处描述的参数外，还能够继续接受任意数量的参数。
[^constructor]: 本方法用于构造某个类型。
[^static]: 调用本方法无需实例，可直接使用类名进行调用。
[^operator]: 本方法描述的是使用本类型作为左操作数的有效运算符。
[^bitfield]: 这个值是由下列位标志构成位掩码的整数。
[^void]: 无返回值。
