<!-- ⚠ 请勿编辑本文件 ⚠ -->
<!-- 本文档使用脚本从 WeDot 引擎源码仓库生成。 -->
<!-- 生成脚本：https://github.com/WeDot-Engine/WeDot/tree/4.3/doc/tools/make_md.py； -->
<!-- 原文件：https://github.com/WeDot-Engine/WeDot/tree/4.3/doc/classes/AcceptDialog.xml。 -->

<div id="_class_acceptdialog"></div>

# AcceptDialog

**继承：** [`Window`](class_window.md) **<** [`Viewport`](class_viewport.md) **<** [`Node`](class_node.md) **<** [`Object`](class_object.md)

**派生：** [`ConfirmationDialog`](class_confirmationdialog.md)

A base dialog used for user notification.

## 描述

The default use of **AcceptDialog** is to allow it to only be accepted or closed, with the same result. However, the [`confirmed`](#class_acceptdialog_signal_confirmed) and [`canceled`](#class_acceptdialog_signal_canceled) signals allow to make the two actions different, and the [`add_button`](#class_acceptdialog_method_add_button) method allows to add custom buttons and actions.

## 属性

| [`bool`](class_bool.md)     | [`dialog_autowrap`](#class_acceptdialog_property_dialog_autowrap)               | ``false``                                                                  |
| [`bool`](class_bool.md)     | [`dialog_close_on_escape`](#class_acceptdialog_property_dialog_close_on_escape) | ``true``                                                                   |
| [`bool`](class_bool.md)     | [`dialog_hide_on_ok`](#class_acceptdialog_property_dialog_hide_on_ok)           | ``true``                                                                   |
| [`String`](class_string.md) | [`dialog_text`](#class_acceptdialog_property_dialog_text)                       | ``""``                                                                     |
| [`bool`](class_bool.md)     | exclusive                                                                       | ``true`` (overrides [`Window`](#class_window_property_exclusive))          |
| [`bool`](class_bool.md)     | keep_title_visible                                                              | ``true`` (overrides [`Window`](#class_window_property_keep_title_visible)) |
| [`String`](class_string.md) | [`ok_button_text`](#class_acceptdialog_property_ok_button_text)                 | ``"OK"``                                                                   |
| [`String`](class_string.md) | title                                                                           | ``"Alert!"`` (overrides [`Window`](#class_window_property_title))          |
| [`bool`](class_bool.md)     | transient                                                                       | ``true`` (overrides [`Window`](#class_window_property_transient))          |
| [`bool`](class_bool.md)     | visible                                                                         | ``false`` (overrides [`Window`](#class_window_property_visible))           |
| [`bool`](class_bool.md)     | wrap_controls                                                                   | ``true`` (overrides [`Window`](#class_window_property_wrap_controls))      |

## 方法

| [`Button`](class_button.md) | [`add_button`](#class_acceptdialog_method_add_button) ( text: [`String`](class_string.md), right: [`bool`](class_bool.md) = false, action: [`String`](class_string.md) = "" ) |
| [`Button`](class_button.md) | [`add_cancel_button`](#class_acceptdialog_method_add_cancel_button) ( name: [`String`](class_string.md) )                                                                     |
| [`Label`](class_label.md)   | [`get_label`](#class_acceptdialog_method_get_label) ( )                                                                                                                       |
| [`Button`](class_button.md) | [`get_ok_button`](#class_acceptdialog_method_get_ok_button) ( )                                                                                                               |
| `void`                      | [`register_text_enter`](#class_acceptdialog_method_register_text_enter) ( line_edit: [`LineEdit`](class_lineedit.md) )                                                        |
| `void`                      | [`remove_button`](#class_acceptdialog_method_remove_button) ( button: [`Button`](class_button.md) )                                                                           |

## 主题属性

| [`int`](class_int.md)           | [`buttons_min_height`](#class_acceptdialog_theme_constant_buttons_min_height) | ``0``  |
| [`int`](class_int.md)           | [`buttons_min_width`](#class_acceptdialog_theme_constant_buttons_min_width)   | ``0``  |
| [`int`](class_int.md)           | [`buttons_separation`](#class_acceptdialog_theme_constant_buttons_separation) | ``10`` |
| [`StyleBox`](class_stylebox.md) | [`panel`](#class_acceptdialog_theme_style_panel)                              |        |

<!-- rst-class:: classref-section-separator -->

---

## 信号

<div id="_class_class_acceptdialog_signal_canceled"></div>

**canceled** ( ) <div id="class_acceptdialog_signal_canceled"></div>

Emitted when the dialog is closed or the button created with [`add_cancel_button`](#class_acceptdialog_method_add_cancel_button) is pressed.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_class_acceptdialog_signal_confirmed"></div>

**confirmed** ( ) <div id="class_acceptdialog_signal_confirmed"></div>

Emitted when the dialog is accepted, i.e. the OK button is pressed.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_class_acceptdialog_signal_custom_action"></div>

**custom_action** ( action: [`StringName`](class_stringname.md) ) <div id="class_acceptdialog_signal_custom_action"></div>

Emitted when a custom button is pressed. See [`add_button`](#class_acceptdialog_method_add_button).

<!-- rst-class:: classref-section-separator -->

---

## 属性说明

<div id="_class_acceptdialog_property_dialog_autowrap"></div>

[`bool`](class_bool.md) **dialog_autowrap** = ``false`` <div id="class_acceptdialog_property_dialog_autowrap"></div>

- `void` **set_autowrap** ( value: [`bool`](class_bool.md) )
- [`bool`](class_bool.md) **has_autowrap** ( )

Sets autowrapping for the text in the dialog.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_acceptdialog_property_dialog_close_on_escape"></div>

[`bool`](class_bool.md) **dialog_close_on_escape** = ``true`` <div id="class_acceptdialog_property_dialog_close_on_escape"></div>

- `void` **set_close_on_escape** ( value: [`bool`](class_bool.md) )
- [`bool`](class_bool.md) **get_close_on_escape** ( )

If `true`, the dialog will be hidden when the escape key ([`@GlobalScope.KEY_ESCAPE`](#class_@globalscope_constant_key_escape)) is pressed.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_acceptdialog_property_dialog_hide_on_ok"></div>

[`bool`](class_bool.md) **dialog_hide_on_ok** = ``true`` <div id="class_acceptdialog_property_dialog_hide_on_ok"></div>

- `void` **set_hide_on_ok** ( value: [`bool`](class_bool.md) )
- [`bool`](class_bool.md) **get_hide_on_ok** ( )

If `true`, the dialog is hidden when the OK button is pressed. You can set it to `false` if you want to do e.g. input validation when receiving the [`confirmed`](#class_acceptdialog_signal_confirmed) signal, and handle hiding the dialog in your own logic.

 **Note:** Some nodes derived from this class can have a different default value, and potentially their own built-in logic overriding this setting. For example [`FileDialog`](class_filedialog.md) defaults to `false`, and has its own input validation code that is called when you press OK, which eventually hides the dialog if the input is valid. As such, this property can't be used in [`FileDialog`](class_filedialog.md) to disable hiding the dialog when pressing OK.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_acceptdialog_property_dialog_text"></div>

[`String`](class_string.md) **dialog_text** = ``""`` <div id="class_acceptdialog_property_dialog_text"></div>

- `void` **set_text** ( value: [`String`](class_string.md) )
- [`String`](class_string.md) **get_text** ( )

The text displayed by the dialog.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_acceptdialog_property_ok_button_text"></div>

[`String`](class_string.md) **ok_button_text** = ``"OK"`` <div id="class_acceptdialog_property_ok_button_text"></div>

- `void` **set_ok_button_text** ( value: [`String`](class_string.md) )
- [`String`](class_string.md) **get_ok_button_text** ( )

The text displayed by the OK button (see [`get_ok_button`](#class_acceptdialog_method_get_ok_button)).

<!-- rst-class:: classref-section-separator -->

---

## 方法说明

<div id="_class_acceptdialog_method_add_button"></div>

[`Button`](class_button.md) **add_button** ( text: [`String`](class_string.md), right: [`bool`](class_bool.md) = false, action: [`String`](class_string.md) = "" )<div id="class_acceptdialog_method_add_button"></div>

Adds a button with label `text` and a custom `action` to the dialog and returns the created button. `action` will be passed to the [`custom_action`](#class_acceptdialog_signal_custom_action) signal when pressed.

If `true`, `right` will place the button to the right of any sibling buttons.

You can use [`remove_button`](#class_acceptdialog_method_remove_button) method to remove a button created with this method from the dialog.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_acceptdialog_method_add_cancel_button"></div>

[`Button`](class_button.md) **add_cancel_button** ( name: [`String`](class_string.md) )<div id="class_acceptdialog_method_add_cancel_button"></div>

Adds a button with label `name` and a cancel action to the dialog and returns the created button.

You can use [`remove_button`](#class_acceptdialog_method_remove_button) method to remove a button created with this method from the dialog.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_acceptdialog_method_get_label"></div>

[`Label`](class_label.md) **get_label** ( )<div id="class_acceptdialog_method_get_label"></div>

Returns the label used for built-in text.

 **Warning:** This is a required internal node, removing and freeing it may cause a crash. If you wish to hide it or any of its children, use their [`CanvasItem.visible`](#class_canvasitem_property_visible) property.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_acceptdialog_method_get_ok_button"></div>

[`Button`](class_button.md) **get_ok_button** ( )<div id="class_acceptdialog_method_get_ok_button"></div>

Returns the OK [`Button`](class_button.md) instance.

 **Warning:** This is a required internal node, removing and freeing it may cause a crash. If you wish to hide it or any of its children, use their [`CanvasItem.visible`](#class_canvasitem_property_visible) property.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_acceptdialog_method_register_text_enter"></div>

`void` **register_text_enter** ( line_edit: [`LineEdit`](class_lineedit.md) )<div id="class_acceptdialog_method_register_text_enter"></div>

Registers a [`LineEdit`](class_lineedit.md) in the dialog. When the enter key is pressed, the dialog will be accepted.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_acceptdialog_method_remove_button"></div>

`void` **remove_button** ( button: [`Button`](class_button.md) )<div id="class_acceptdialog_method_remove_button"></div>

Removes the `button` from the dialog. Does NOT free the `button`. The `button` must be a [`Button`](class_button.md) added with [`add_button`](#class_acceptdialog_method_add_button) or [`add_cancel_button`](#class_acceptdialog_method_add_cancel_button) method. After removal, pressing the `button` will no longer emit this dialog's [`custom_action`](#class_acceptdialog_signal_custom_action) or [`canceled`](#class_acceptdialog_signal_canceled) signals.

<!-- rst-class:: classref-section-separator -->

---

## 主题属性说明

<div id="_class_acceptdialog_theme_constant_buttons_min_height"></div>

[`int`](class_int.md) **buttons_min_height** = ``0`` <div id="class_acceptdialog_theme_constant_buttons_min_height"></div>

The minimum height of each button in the bottom row (such as OK/Cancel) in pixels. This can be increased to make buttons with short texts easier to click/tap.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_acceptdialog_theme_constant_buttons_min_width"></div>

[`int`](class_int.md) **buttons_min_width** = ``0`` <div id="class_acceptdialog_theme_constant_buttons_min_width"></div>

The minimum width of each button in the bottom row (such as OK/Cancel) in pixels. This can be increased to make buttons with short texts easier to click/tap.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_acceptdialog_theme_constant_buttons_separation"></div>

[`int`](class_int.md) **buttons_separation** = ``10`` <div id="class_acceptdialog_theme_constant_buttons_separation"></div>

The size of the vertical space between the dialog's content and the button row.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_acceptdialog_theme_style_panel"></div>

[`StyleBox`](class_stylebox.md) **panel** <div id="class_acceptdialog_theme_style_panel"></div>

The panel that fills the background of the window.

[^virtual]: 本方法通常需要用户覆盖才能生效。
[^const]: 本方法无副作用，不会修改该实例的任何成员变量。
[^vararg]: 本方法除了能接受在此处描述的参数外，还能够继续接受任意数量的参数。
[^constructor]: 本方法用于构造某个类型。
[^static]: 调用本方法无需实例，可直接使用类名进行调用。
[^operator]: 本方法描述的是使用本类型作为左操作数的有效运算符。
[^bitfield]: 这个值是由下列位标志构成位掩码的整数。
[^void]: 无返回值。
