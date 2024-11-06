<!-- ⚠ 请勿编辑本文件 ⚠ -->
<!-- 本文档使用脚本从 WeDot 引擎源码仓库生成。 -->
<!-- 生成脚本：https://github.com/WeDot-Engine/WeDot/tree/4.3/doc/tools/make_md.py； -->
<!-- 原文件：https://github.com/WeDot-Engine/WeDot/tree/4.3/doc/classes/SpinBox.xml。 -->

<div id="_class_spinbox"></div>

# SpinBox

**继承：** [`Range`](class_range.md) **<** [`Control`](class_control.md) **<** [`CanvasItem`](class_canvasitem.md) **<** [`Node`](class_node.md) **<** [`Object`](class_object.md)

An input field for numbers.

## 描述

**SpinBox** is a numerical input text field. It allows entering integers and floating-point numbers.

 **Example:** 



```gdscript

    var spin_box = SpinBox.new()
    add_child(spin_box)
    var line_edit = spin_box.get_line_edit()
    line_edit.context_menu_enabled = false
    spin_box.horizontal_alignment = LineEdit.HORIZONTAL_ALIGNMENT_RIGHT
```

```csharp

    var spinBox = new SpinBox();
    AddChild(spinBox);
    var lineEdit = spinBox.GetLineEdit();
    lineEdit.ContextMenuEnabled = false;
    spinBox.AlignHorizontal = LineEdit.HorizontalAlignEnum.Right;
```



The above code will create a **SpinBox**, disable context menu on it and set the text alignment to right.

See [`Range`](class_range.md) class for more options over the **SpinBox**.

 **Note:** With the **SpinBox**'s context menu disabled, you can right-click the bottom half of the spinbox to set the value to its minimum, while right-clicking the top half sets the value to its maximum.

 **Note:** **SpinBox** relies on an underlying [`LineEdit`](class_lineedit.md) node. To theme a **SpinBox**'s background, add theme items for [`LineEdit`](class_lineedit.md) and customize them.

 **Note:** If you want to implement drag and drop for the underlying [`LineEdit`](class_lineedit.md), you can use [`Control.set_drag_forwarding`](#class_control_method_set_drag_forwarding) on the node returned by [`get_line_edit`](#class_spinbox_method_get_line_edit).





## 属性

|||
|:-:|:--|
| [HorizontalAlignment](#enum_@globalscope_horizontalalignment) | [`alignment`](#class_spinbox_property_alignment)                           | ``0``                                                                      |
| [`float`](class_float.md)                                     | [`custom_arrow_step`](#class_spinbox_property_custom_arrow_step)           | ``0.0``                                                                    |
| [`bool`](class_bool.md)                                       | [`editable`](#class_spinbox_property_editable)                             | ``true``                                                                   |
| [`String`](class_string.md)                                   | [`prefix`](#class_spinbox_property_prefix)                                 | ``""``                                                                     |
| [`bool`](class_bool.md)                                       | [`select_all_on_focus`](#class_spinbox_property_select_all_on_focus)       | ``false``                                                                  |
| [SizeFlags](#enum_control_sizeflags)                          | size_flags_vertical                                                        | ``1`` (overrides [`Control`](#class_control_property_size_flags_vertical)) |
| [`float`](class_float.md)                                     | step                                                                       | ``1.0`` (overrides [`Range`](#class_range_property_step))                  |
| [`String`](class_string.md)                                   | [`suffix`](#class_spinbox_property_suffix)                                 | ``""``                                                                     |
| [`bool`](class_bool.md)                                       | [`update_on_text_changed`](#class_spinbox_property_update_on_text_changed) | ``false``                                                                  |

## 方法

|||
|:-:|:--|
| `void`                          | [`apply`](class_spinboxmd#class_spinbox_method_apply) ( )                 |
| [`LineEdit`](class_lineedit.md) | [`get_line_edit`](class_spinboxmd#class_spinbox_method_get_line_edit) ( ) |

## 主题属性

|||
|:-:|:--|
| [`Texture2D`](class_texture2d.md) | [`updown`](#class_spinbox_theme_icon_updown) |

<!-- rst-class:: classref-section-separator -->

---

## 属性说明

<div id="_class_spinbox_property_alignment"></div>

[HorizontalAlignment](#enum_@globalscope_horizontalalignment) **alignment** = ``0`` <div id="class_spinbox_property_alignment"></div>

- `void` **set_horizontal_alignment** ( value: [HorizontalAlignment](#enum_@globalscope_horizontalalignment) )
- [HorizontalAlignment](#enum_@globalscope_horizontalalignment) **get_horizontal_alignment** ( )

Changes the alignment of the underlying [`LineEdit`](class_lineedit.md).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_spinbox_property_custom_arrow_step"></div>

[`float`](class_float.md) **custom_arrow_step** = ``0.0`` <div id="class_spinbox_property_custom_arrow_step"></div>

- `void` **set_custom_arrow_step** ( value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_custom_arrow_step** ( )

If not `0`, [`Range.value`](#class_range_property_value) will always be rounded to a multiple of [`custom_arrow_step`](#class_spinbox_property_custom_arrow_step) when interacting with the arrow buttons of the **SpinBox**.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_spinbox_property_editable"></div>

[`bool`](class_bool.md) **editable** = ``true`` <div id="class_spinbox_property_editable"></div>

- `void` **set_editable** ( value: [`bool`](class_bool.md) )
- [`bool`](class_bool.md) **is_editable** ( )

If `true`, the **SpinBox** will be editable. Otherwise, it will be read only.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_spinbox_property_prefix"></div>

[`String`](class_string.md) **prefix** = ``""`` <div id="class_spinbox_property_prefix"></div>

- `void` **set_prefix** ( value: [`String`](class_string.md) )
- [`String`](class_string.md) **get_prefix** ( )

Adds the specified prefix string before the numerical value of the **SpinBox**.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_spinbox_property_select_all_on_focus"></div>

[`bool`](class_bool.md) **select_all_on_focus** = ``false`` <div id="class_spinbox_property_select_all_on_focus"></div>

- `void` **set_select_all_on_focus** ( value: [`bool`](class_bool.md) )
- [`bool`](class_bool.md) **is_select_all_on_focus** ( )

If `true`, the **SpinBox** will select the whole text when the [`LineEdit`](class_lineedit.md) gains focus. Clicking the up and down arrows won't trigger this behavior.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_spinbox_property_suffix"></div>

[`String`](class_string.md) **suffix** = ``""`` <div id="class_spinbox_property_suffix"></div>

- `void` **set_suffix** ( value: [`String`](class_string.md) )
- [`String`](class_string.md) **get_suffix** ( )

Adds the specified suffix string after the numerical value of the **SpinBox**.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_spinbox_property_update_on_text_changed"></div>

[`bool`](class_bool.md) **update_on_text_changed** = ``false`` <div id="class_spinbox_property_update_on_text_changed"></div>

- `void` **set_update_on_text_changed** ( value: [`bool`](class_bool.md) )
- [`bool`](class_bool.md) **get_update_on_text_changed** ( )

Sets the value of the [`Range`](class_range.md) for this **SpinBox** when the [`LineEdit`](class_lineedit.md) text is *changed* instead of *submitted*. See [`LineEdit.text_changed`](#class_lineedit_signal_text_changed) and [`LineEdit.text_submitted`](#class_lineedit_signal_text_submitted).

<!-- rst-class:: classref-section-separator -->

---

## 方法说明

<div id="_class_spinbox_method_apply"></div>

`void` **apply** ( )<div id="class_spinbox_method_apply"></div>

Applies the current value of this **SpinBox**.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_spinbox_method_get_line_edit"></div>

[`LineEdit`](class_lineedit.md) **get_line_edit** ( )<div id="class_spinbox_method_get_line_edit"></div>

Returns the [`LineEdit`](class_lineedit.md) instance from this **SpinBox**. You can use it to access properties and methods of [`LineEdit`](class_lineedit.md).

 **Warning:** This is a required internal node, removing and freeing it may cause a crash. If you wish to hide it or any of its children, use their [`CanvasItem.visible`](#class_canvasitem_property_visible) property.

<!-- rst-class:: classref-section-separator -->

---

## 主题属性说明

<div id="_class_spinbox_theme_icon_updown"></div>

[`Texture2D`](class_texture2d.md) **updown** <div id="class_spinbox_theme_icon_updown"></div>

Sets a custom [`Texture2D`](class_texture2d.md) for up and down arrows of the **SpinBox**.

[^virtual]: 本方法通常需要用户覆盖才能生效。
[^const]: 本方法无副作用，不会修改该实例的任何成员变量。
[^vararg]: 本方法除了能接受在此处描述的参数外，还能够继续接受任意数量的参数。
[^constructor]: 本方法用于构造某个类型。
[^static]: 调用本方法无需实例，可直接使用类名进行调用。
[^operator]: 本方法描述的是使用本类型作为左操作数的有效运算符。
[^bitfield]: 这个值是由下列位标志构成位掩码的整数。
[^void]: 无返回值。
