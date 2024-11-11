<!-- ⚠ 请勿编辑本文件 ⚠ -->
<!-- 本文档使用脚本从 WeDot 引擎源码仓库生成。 -->
<!-- 生成脚本：https://github.com/WeDot-Engine/WeDot/tree/master/doc/tools/make_md.py； -->
<!-- 原文件：https://github.com/WeDot-Engine/WeDot/tree/master/doc/classes/ColorPickerButton.xml。 -->

<div id="_class_colorpickerbutton"></div>

# ColorPickerButton

**继承：** [`Button`](class_button.md) **<** [`BaseButton`](class_basebutton.md) **<** [`Control`](class_control.md) **<** [`CanvasItem`](class_canvasitem.md) **<** [`Node`](class_node.md) **<** [`Object`](class_object.md)

A button that brings up a [`ColorPicker`](class_colorpicker.md) when pressed.

## 描述

Encapsulates a [`ColorPicker`](class_colorpicker.md), making it accessible by pressing a button. Pressing the button will toggle the [`ColorPicker`](class_colorpicker.md)'s visibility.

See also [`BaseButton`](class_basebutton.md) which contains common properties and methods associated with this node.

 **Note:** By default, the button may not be wide enough for the color preview swatch to be visible. Make sure to set [`Control.custom_minimum_size`](class_control.md#class_control_property_custom_minimum_size) to a big enough value to give the button enough space.

## 属性

|||
|:-:|:--|
| [`Color`](class_color.md) | [`color`](class_colorpickerbutton.md#class_colorpickerbutton_property_color)           | ``Color(0, 0, 0, 1)``                                                                          |
| [`bool`](class_bool.md)   | [`edit_alpha`](class_colorpickerbutton.md#class_colorpickerbutton_property_edit_alpha) | ``true``                                                                                       |
| [`bool`](class_bool.md)   | toggle_mode                                                                            | ``true`` (overrides [`BaseButton`](class_basebutton.md#class_basebutton_property_toggle_mode)) |

## 方法

|||
|:-:|:--|
| [`ColorPicker`](class_colorpicker.md) | [`get_picker`](class_colorpickerbutton.md#class_colorpickerbutton_method_get_picker) ( ) |
| [`PopupPanel`](class_popuppanel.md)   | [`get_popup`](class_colorpickerbutton.md#class_colorpickerbutton_method_get_popup) ( )   |

## 主题属性

|||
|:-:|:--|
| [`Texture2D`](class_texture2d.md) | [`bg`](class_colorpickerbutton.md#class_colorpickerbutton_theme_icon_bg) |

<!-- rst-class:: classref-section-separator -->

---

## 信号

<div id="_class_class_colorpickerbutton_signal_color_changed"></div>

**color_changed** ( color: [`Color`](class_color.md) ) <div id="class_colorpickerbutton_signal_color_changed"></div>

Emitted when the color changes.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_class_colorpickerbutton_signal_picker_created"></div>

**picker_created** ( ) <div id="class_colorpickerbutton_signal_picker_created"></div>

Emitted when the [`ColorPicker`](class_colorpicker.md) is created (the button is pressed for the first time).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_class_colorpickerbutton_signal_popup_closed"></div>

**popup_closed** ( ) <div id="class_colorpickerbutton_signal_popup_closed"></div>

Emitted when the [`ColorPicker`](class_colorpicker.md) is closed.

<!-- rst-class:: classref-section-separator -->

---

## 属性说明

<div id="_class_colorpickerbutton_property_color"></div>

[`Color`](class_color.md) **color** = ``Color(0, 0, 0, 1)`` <div id="class_colorpickerbutton_property_color"></div>

- `void` **set_pick_color** ( value: [`Color`](class_color.md) )
- [`Color`](class_color.md) **get_pick_color** ( )

The currently selected color.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_colorpickerbutton_property_edit_alpha"></div>

[`bool`](class_bool.md) **edit_alpha** = ``true`` <div id="class_colorpickerbutton_property_edit_alpha"></div>

- `void` **set_edit_alpha** ( value: [`bool`](class_bool.md) )
- [`bool`](class_bool.md) **is_editing_alpha** ( )

If `true`, the alpha channel in the displayed [`ColorPicker`](class_colorpicker.md) will be visible.

<!-- rst-class:: classref-section-separator -->

---

## 方法说明

<div id="_class_colorpickerbutton_method_get_picker"></div>

[`ColorPicker`](class_colorpicker.md) **get_picker** ( )<div id="class_colorpickerbutton_method_get_picker"></div>

Returns the [`ColorPicker`](class_colorpicker.md) that this node toggles.

 **Warning:** This is a required internal node, removing and freeing it may cause a crash. If you wish to hide it or any of its children, use their [`CanvasItem.visible`](class_canvasitem.md#class_canvasitem_property_visible) property.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_colorpickerbutton_method_get_popup"></div>

[`PopupPanel`](class_popuppanel.md) **get_popup** ( )<div id="class_colorpickerbutton_method_get_popup"></div>

Returns the control's [`PopupPanel`](class_popuppanel.md) which allows you to connect to popup signals. This allows you to handle events when the ColorPicker is shown or hidden.

 **Warning:** This is a required internal node, removing and freeing it may cause a crash. If you wish to hide it or any of its children, use their [`Window.visible`](class_window.md#class_window_property_visible) property.

<!-- rst-class:: classref-section-separator -->

---

## 主题属性说明

<div id="_class_colorpickerbutton_theme_icon_bg"></div>

[`Texture2D`](class_texture2d.md) **bg** <div id="class_colorpickerbutton_theme_icon_bg"></div>

The background of the color preview rect on the button.

[^virtual]: 本方法通常需要用户覆盖才能生效。
[^const]: 本方法无副作用，不会修改该实例的任何成员变量。
[^vararg]: 本方法除了能接受在此处描述的参数外，还能够继续接受任意数量的参数。
[^constructor]: 本方法用于构造某个类型。
[^static]: 调用本方法无需实例，可直接使用类名进行调用。
[^operator]: 本方法描述的是使用本类型作为左操作数的有效运算符。
[^bitfield]: 这个值是由下列位标志构成位掩码的整数。
[^void]: 无返回值。
