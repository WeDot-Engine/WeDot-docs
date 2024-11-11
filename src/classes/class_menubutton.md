<!-- ⚠ 请勿编辑本文件 ⚠ -->
<!-- 本文档使用脚本从 WeDot 引擎源码仓库生成。 -->
<!-- 生成脚本：https://github.com/WeDot-Engine/WeDot/tree/master/doc/tools/make_md.py； -->
<!-- 原文件：https://github.com/WeDot-Engine/WeDot/tree/master/doc/classes/MenuButton.xml。 -->

<div id="_class_menubutton"></div>

# MenuButton

**继承：** [`Button`](class_button.md) **<** [`BaseButton`](class_basebutton.md) **<** [`Control`](class_control.md) **<** [`CanvasItem`](class_canvasitem.md) **<** [`Node`](class_node.md) **<** [`Object`](class_object.md)

A button that brings up a [`PopupMenu`](class_popupmenu.md) when clicked.

## 描述

A button that brings up a [`PopupMenu`](class_popupmenu.md) when clicked. To create new items inside this [`PopupMenu`](class_popupmenu.md), use `get_popup().add_item("My Item Name")`. You can also create them directly from Godot editor's inspector.

See also [`BaseButton`](class_basebutton.md) which contains common properties and methods associated with this node.

## 属性

|||
|:-:|:--|
| [ActionMode](#enum_basebutton_actionmode) | action_mode                                                                        | ``0`` (overrides [`BaseButton`](class_basebutton.md#class_basebutton_property_action_mode))    |
| [`bool`](class_bool.md)                   | flat                                                                               | ``true`` (overrides [`Button`](class_button.md#class_button_property_flat))                    |
| [FocusMode](#enum_control_focusmode)      | focus_mode                                                                         | ``0`` (overrides [`Control`](class_control.md#class_control_property_focus_mode))              |
| [`int`](class_int.md)                     | [`item_count`](class_menubutton.md#class_menubutton_property_item_count)           | ``0``                                                                                          |
| [`bool`](class_bool.md)                   | [`switch_on_hover`](class_menubutton.md#class_menubutton_property_switch_on_hover) | ``false``                                                                                      |
| [`bool`](class_bool.md)                   | toggle_mode                                                                        | ``true`` (overrides [`BaseButton`](class_basebutton.md#class_basebutton_property_toggle_mode)) |

## 方法

|||
|:-:|:--|
| [`PopupMenu`](class_popupmenu.md) | [`get_popup`](class_menubutton.md#class_menubutton_method_get_popup) ( ) const[^const]                                             |
| `void`                            | [`set_disable_shortcuts`](class_menubutton.md#class_menubutton_method_set_disable_shortcuts) ( disabled: [`bool`](class_bool.md) ) |
| `void`                            | [`show_popup`](class_menubutton.md#class_menubutton_method_show_popup) ( )                                                         |

<!-- rst-class:: classref-section-separator -->

---

## 信号

<div id="_class_class_menubutton_signal_about_to_popup"></div>

**about_to_popup** ( ) <div id="class_menubutton_signal_about_to_popup"></div>

Emitted when the [`PopupMenu`](class_popupmenu.md) of this MenuButton is about to show.

<!-- rst-class:: classref-section-separator -->

---

## 属性说明

<div id="_class_menubutton_property_item_count"></div>

[`int`](class_int.md) **item_count** = ``0`` <div id="class_menubutton_property_item_count"></div>

- `void` **set_item_count** ( value: [`int`](class_int.md) )
- [`int`](class_int.md) **get_item_count** ( )

The number of items currently in the list.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_menubutton_property_switch_on_hover"></div>

[`bool`](class_bool.md) **switch_on_hover** = ``false`` <div id="class_menubutton_property_switch_on_hover"></div>

- `void` **set_switch_on_hover** ( value: [`bool`](class_bool.md) )
- [`bool`](class_bool.md) **is_switch_on_hover** ( )

If `true`, when the cursor hovers above another **MenuButton** within the same parent which also has [`switch_on_hover`](class_menubutton.md#class_menubutton_property_switch_on_hover) enabled, it will close the current **MenuButton** and open the other one.

<!-- rst-class:: classref-section-separator -->

---

## 方法说明

<div id="_class_menubutton_method_get_popup"></div>

[`PopupMenu`](class_popupmenu.md) **get_popup** ( ) const[^const]<div id="class_menubutton_method_get_popup"></div>

Returns the [`PopupMenu`](class_popupmenu.md) contained in this button.

 **Warning:** This is a required internal node, removing and freeing it may cause a crash. If you wish to hide it or any of its children, use their [`Window.visible`](class_window.md#class_window_property_visible) property.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_menubutton_method_set_disable_shortcuts"></div>

`void` **set_disable_shortcuts** ( disabled: [`bool`](class_bool.md) )<div id="class_menubutton_method_set_disable_shortcuts"></div>

If `true`, shortcuts are disabled and cannot be used to trigger the button.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_menubutton_method_show_popup"></div>

`void` **show_popup** ( )<div id="class_menubutton_method_show_popup"></div>

Adjusts popup position and sizing for the **MenuButton**, then shows the [`PopupMenu`](class_popupmenu.md). Prefer this over using `get_popup().popup()`.

[^virtual]: 本方法通常需要用户覆盖才能生效。
[^const]: 本方法无副作用，不会修改该实例的任何成员变量。
[^vararg]: 本方法除了能接受在此处描述的参数外，还能够继续接受任意数量的参数。
[^constructor]: 本方法用于构造某个类型。
[^static]: 调用本方法无需实例，可直接使用类名进行调用。
[^operator]: 本方法描述的是使用本类型作为左操作数的有效运算符。
[^bitfield]: 这个值是由下列位标志构成位掩码的整数。
[^void]: 无返回值。
