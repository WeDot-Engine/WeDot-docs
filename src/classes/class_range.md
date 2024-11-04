<!-- ⚠ 请勿编辑本文件 ⚠ -->
<!-- 本文档使用脚本从 WeDot 引擎源码仓库生成。 -->
<!-- 生成脚本：https://github.com/WeDot-Engine/WeDot/tree/4.3/doc/tools/make_md.py； -->
<!-- 原文件：https://github.com/WeDot-Engine/WeDot/tree/4.3/doc/classes/Range.xml。 -->

<div id="_class_range"></div>

# Range

**继承：** [`Control`](class_control.md) **<** [`CanvasItem`](class_canvasitem.md) **<** [`Node`](class_node.md) **<** [`Object`](class_object.md)

**派生：** [`EditorSpinSlider`](class_editorspinslider.md), [`ProgressBar`](class_progressbar.md), [`ScrollBar`](class_scrollbar.md), [`Slider`](class_slider.md), [`SpinBox`](class_spinbox.md), [`TextureProgressBar`](class_textureprogressbar.md)

Abstract base class for controls that represent a number within a range.

## 描述

Range is an abstract base class for controls that represent a number within a range, using a configured [`step`](#class_range_property_step) and [`page`](#class_range_property_page) size. See e.g. [`ScrollBar`](class_scrollbar.md) and [`Slider`](class_slider.md) for examples of higher-level nodes using Range.

## 属性

| [`bool`](class_bool.md)              | [`allow_greater`](#class_range_property_allow_greater) | ``false``                                                                  |
| [`bool`](class_bool.md)              | [`allow_lesser`](#class_range_property_allow_lesser)   | ``false``                                                                  |
| [`bool`](class_bool.md)              | [`exp_edit`](#class_range_property_exp_edit)           | ``false``                                                                  |
| [`float`](class_float.md)            | [`max_value`](#class_range_property_max_value)         | ``100.0``                                                                  |
| [`float`](class_float.md)            | [`min_value`](#class_range_property_min_value)         | ``0.0``                                                                    |
| [`float`](class_float.md)            | [`page`](#class_range_property_page)                   | ``0.0``                                                                    |
| [`float`](class_float.md)            | [`ratio`](#class_range_property_ratio)                 |                                                                            |
| [`bool`](class_bool.md)              | [`rounded`](#class_range_property_rounded)             | ``false``                                                                  |
| [SizeFlags](#enum_control_sizeflags) | size_flags_vertical                                    | ``0`` (overrides [`Control`](#class_control_property_size_flags_vertical)) |
| [`float`](class_float.md)            | [`step`](#class_range_property_step)                   | ``0.01``                                                                   |
| [`float`](class_float.md)            | [`value`](#class_range_property_value)                 | ``0.0``                                                                    |

## 方法

| `void` | [`_value_changed`](#class_range_private_method__value_changed) ( new_value: [`float`](class_float.md) ) virtual[^virtual] |
| `void` | [`set_value_no_signal`](#class_range_method_set_value_no_signal) ( value: [`float`](class_float.md) )                     |
| `void` | [`share`](#class_range_method_share) ( with: [`Node`](class_node.md) )                                                    |
| `void` | [`unshare`](#class_range_method_unshare) ( )                                                                              |

<!-- rst-class:: classref-section-separator -->

---

## 信号

<div id="_class_class_range_signal_changed"></div>

**changed** ( ) <div id="class_range_signal_changed"></div>

Emitted when [`min_value`](#class_range_property_min_value), [`max_value`](#class_range_property_max_value), [`page`](#class_range_property_page), or [`step`](#class_range_property_step) change.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_class_range_signal_value_changed"></div>

**value_changed** ( value: [`float`](class_float.md) ) <div id="class_range_signal_value_changed"></div>

Emitted when [`value`](#class_range_property_value) changes. When used on a [`Slider`](class_slider.md), this is called continuously while dragging (potentially every frame). If you are performing an expensive operation in a function connected to [`value_changed`](#class_range_signal_value_changed), consider using a *debouncing* [`Timer`](class_timer.md) to call the function less often.

 **Note:** Unlike signals such as [`LineEdit.text_changed`](#class_lineedit_signal_text_changed), [`value_changed`](#class_range_signal_value_changed) is also emitted when `value` is set directly via code.

<!-- rst-class:: classref-section-separator -->

---

## 属性说明

<div id="_class_range_property_allow_greater"></div>

[`bool`](class_bool.md) **allow_greater** = ``false`` <div id="class_range_property_allow_greater"></div>

- `void` **set_allow_greater** ( value: [`bool`](class_bool.md) )
- [`bool`](class_bool.md) **is_greater_allowed** ( )

If `true`, [`value`](#class_range_property_value) may be greater than [`max_value`](#class_range_property_max_value).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_range_property_allow_lesser"></div>

[`bool`](class_bool.md) **allow_lesser** = ``false`` <div id="class_range_property_allow_lesser"></div>

- `void` **set_allow_lesser** ( value: [`bool`](class_bool.md) )
- [`bool`](class_bool.md) **is_lesser_allowed** ( )

If `true`, [`value`](#class_range_property_value) may be less than [`min_value`](#class_range_property_min_value).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_range_property_exp_edit"></div>

[`bool`](class_bool.md) **exp_edit** = ``false`` <div id="class_range_property_exp_edit"></div>

- `void` **set_exp_ratio** ( value: [`bool`](class_bool.md) )
- [`bool`](class_bool.md) **is_ratio_exp** ( )

If `true`, and [`min_value`](#class_range_property_min_value) is greater than 0, [`value`](#class_range_property_value) will be represented exponentially rather than linearly.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_range_property_max_value"></div>

[`float`](class_float.md) **max_value** = ``100.0`` <div id="class_range_property_max_value"></div>

- `void` **set_max** ( value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_max** ( )

Maximum value. Range is clamped if [`value`](#class_range_property_value) is greater than [`max_value`](#class_range_property_max_value).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_range_property_min_value"></div>

[`float`](class_float.md) **min_value** = ``0.0`` <div id="class_range_property_min_value"></div>

- `void` **set_min** ( value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_min** ( )

Minimum value. Range is clamped if [`value`](#class_range_property_value) is less than [`min_value`](#class_range_property_min_value).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_range_property_page"></div>

[`float`](class_float.md) **page** = ``0.0`` <div id="class_range_property_page"></div>

- `void` **set_page** ( value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_page** ( )

Page size. Used mainly for [`ScrollBar`](class_scrollbar.md). ScrollBar's length is its size multiplied by [`page`](#class_range_property_page) over the difference between [`min_value`](#class_range_property_min_value) and [`max_value`](#class_range_property_max_value).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_range_property_ratio"></div>

[`float`](class_float.md) **ratio** <div id="class_range_property_ratio"></div>

- `void` **set_as_ratio** ( value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_as_ratio** ( )

The value mapped between 0 and 1.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_range_property_rounded"></div>

[`bool`](class_bool.md) **rounded** = ``false`` <div id="class_range_property_rounded"></div>

- `void` **set_use_rounded_values** ( value: [`bool`](class_bool.md) )
- [`bool`](class_bool.md) **is_using_rounded_values** ( )

If `true`, [`value`](#class_range_property_value) will always be rounded to the nearest integer.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_range_property_step"></div>

[`float`](class_float.md) **step** = ``0.01`` <div id="class_range_property_step"></div>

- `void` **set_step** ( value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_step** ( )

If greater than 0, [`value`](#class_range_property_value) will always be rounded to a multiple of this property's value. If [`rounded`](#class_range_property_rounded) is also `true`, [`value`](#class_range_property_value) will first be rounded to a multiple of this property's value, then rounded to the nearest integer.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_range_property_value"></div>

[`float`](class_float.md) **value** = ``0.0`` <div id="class_range_property_value"></div>

- `void` **set_value** ( value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_value** ( )

Range's current value. Changing this property (even via code) will trigger [`value_changed`](#class_range_signal_value_changed) signal. Use [`set_value_no_signal`](#class_range_method_set_value_no_signal) if you want to avoid it.

<!-- rst-class:: classref-section-separator -->

---

## 方法说明

<div id="_class_range_private_method__value_changed"></div>

`void` **_value_changed** ( new_value: [`float`](class_float.md) ) virtual[^virtual]<div id="class_range_private_method__value_changed"></div>

Called when the **Range**'s value is changed (following the same conditions as [`value_changed`](#class_range_signal_value_changed)).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_range_method_set_value_no_signal"></div>

`void` **set_value_no_signal** ( value: [`float`](class_float.md) )<div id="class_range_method_set_value_no_signal"></div>

Sets the **Range**'s current value to the specified `value`, without emitting the [`value_changed`](#class_range_signal_value_changed) signal.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_range_method_share"></div>

`void` **share** ( with: [`Node`](class_node.md) )<div id="class_range_method_share"></div>

Binds two **Range** s together along with any ranges previously grouped with either of them. When any of range's member variables change, it will share the new value with all other ranges in its group.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_range_method_unshare"></div>

`void` **unshare** ( )<div id="class_range_method_unshare"></div>

Stops the **Range** from sharing its member variables with any other.

[^virtual]: 本方法通常需要用户覆盖才能生效。
[^const]: 本方法无副作用，不会修改该实例的任何成员变量。
[^vararg]: 本方法除了能接受在此处描述的参数外，还能够继续接受任意数量的参数。
[^constructor]: 本方法用于构造某个类型。
[^static]: 调用本方法无需实例，可直接使用类名进行调用。
[^operator]: 本方法描述的是使用本类型作为左操作数的有效运算符。
[^bitfield]: 这个值是由下列位标志构成位掩码的整数。
[^void]: 无返回值。
