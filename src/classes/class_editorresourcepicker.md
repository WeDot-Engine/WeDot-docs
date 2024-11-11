<!-- ⚠ 请勿编辑本文件 ⚠ -->
<!-- 本文档使用脚本从 WeDot 引擎源码仓库生成。 -->
<!-- 生成脚本：https://github.com/WeDot-Engine/WeDot/tree/master/doc/tools/make_md.py； -->
<!-- 原文件：https://github.com/WeDot-Engine/WeDot/tree/master/doc/classes/EditorResourcePicker.xml。 -->

<div id="_class_editorresourcepicker"></div>

# EditorResourcePicker

**继承：** [`HBoxContainer`](class_hboxcontainer.md) **<** [`BoxContainer`](class_boxcontainer.md) **<** [`Container`](class_container.md) **<** [`Control`](class_control.md) **<** [`CanvasItem`](class_canvasitem.md) **<** [`Node`](class_node.md) **<** [`Object`](class_object.md)

**派生：** [`EditorScriptPicker`](class_editorscriptpicker.md)

Godot editor's control for selecting [`Resource`](class_resource.md) type properties.

## 描述

This [`Control`](class_control.md) node is used in the editor's Inspector dock to allow editing of [`Resource`](class_resource.md) type properties. It provides options for creating, loading, saving and converting resources. Can be used with [`EditorInspectorPlugin`](class_editorinspectorplugin.md) to recreate the same behavior.

 **Note:** This [`Control`](class_control.md) does not include any editor for the resource, as editing is controlled by the Inspector dock itself or sub-Inspectors.

## 属性

|||
|:-:|:--|
| [`String`](class_string.md)     | [`base_type`](class_editorresourcepicker.md#class_editorresourcepicker_property_base_type)             | ``""``    |
| [`bool`](class_bool.md)         | [`editable`](class_editorresourcepicker.md#class_editorresourcepicker_property_editable)               | ``true``  |
| [`Resource`](class_resource.md) | [`edited_resource`](class_editorresourcepicker.md#class_editorresourcepicker_property_edited_resource) |           |
| [`bool`](class_bool.md)         | [`toggle_mode`](class_editorresourcepicker.md#class_editorresourcepicker_property_toggle_mode)         | ``false`` |

## 方法

|||
|:-:|:--|
| [`bool`](class_bool.md)                           | [`_handle_menu_selected`](class_editorresourcepicker.md#class_editorresourcepicker_private_method__handle_menu_selected) ( id: [`int`](class_int.md) ) virtual[^virtual]          |
| `void`                                            | [`_set_create_options`](class_editorresourcepicker.md#class_editorresourcepicker_private_method__set_create_options) ( menu_node: [`Object`](class_object.md) ) virtual[^virtual] |
| [`PackedStringArray`](class_packedstringarray.md) | [`get_allowed_types`](class_editorresourcepicker.md#class_editorresourcepicker_method_get_allowed_types) ( ) const[^const]                                                        |
| `void`                                            | [`set_toggle_pressed`](class_editorresourcepicker.md#class_editorresourcepicker_method_set_toggle_pressed) ( pressed: [`bool`](class_bool.md) )                                   |

<!-- rst-class:: classref-section-separator -->

---

## 信号

<div id="_class_class_editorresourcepicker_signal_resource_changed"></div>

**resource_changed** ( resource: [`Resource`](class_resource.md) ) <div id="class_editorresourcepicker_signal_resource_changed"></div>

Emitted when the value of the edited resource was changed.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_class_editorresourcepicker_signal_resource_selected"></div>

**resource_selected** ( resource: [`Resource`](class_resource.md), inspect: [`bool`](class_bool.md) ) <div id="class_editorresourcepicker_signal_resource_selected"></div>

Emitted when the resource value was set and user clicked to edit it. When `inspect` is `true`, the signal was caused by the context menu "Edit" or "Inspect" option.

<!-- rst-class:: classref-section-separator -->

---

## 属性说明

<div id="_class_editorresourcepicker_property_base_type"></div>

[`String`](class_string.md) **base_type** = ``""`` <div id="class_editorresourcepicker_property_base_type"></div>

- `void` **set_base_type** ( value: [`String`](class_string.md) )
- [`String`](class_string.md) **get_base_type** ( )

The base type of allowed resource types. Can be a comma-separated list of several options.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorresourcepicker_property_editable"></div>

[`bool`](class_bool.md) **editable** = ``true`` <div id="class_editorresourcepicker_property_editable"></div>

- `void` **set_editable** ( value: [`bool`](class_bool.md) )
- [`bool`](class_bool.md) **is_editable** ( )

If `true`, the value can be selected and edited.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorresourcepicker_property_edited_resource"></div>

[`Resource`](class_resource.md) **edited_resource** <div id="class_editorresourcepicker_property_edited_resource"></div>

- `void` **set_edited_resource** ( value: [`Resource`](class_resource.md) )
- [`Resource`](class_resource.md) **get_edited_resource** ( )

The edited resource value.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorresourcepicker_property_toggle_mode"></div>

[`bool`](class_bool.md) **toggle_mode** = ``false`` <div id="class_editorresourcepicker_property_toggle_mode"></div>

- `void` **set_toggle_mode** ( value: [`bool`](class_bool.md) )
- [`bool`](class_bool.md) **is_toggle_mode** ( )

If `true`, the main button with the resource preview works in the toggle mode. Use [`set_toggle_pressed`](class_editorresourcepicker.md#class_editorresourcepicker_method_set_toggle_pressed) to manually set the state.

<!-- rst-class:: classref-section-separator -->

---

## 方法说明

<div id="_class_editorresourcepicker_private_method__handle_menu_selected"></div>

[`bool`](class_bool.md) **_handle_menu_selected** ( id: [`int`](class_int.md) ) virtual[^virtual]<div id="class_editorresourcepicker_private_method__handle_menu_selected"></div>

This virtual method can be implemented to handle context menu items not handled by default. See [`_set_create_options`](class_editorresourcepicker.md#class_editorresourcepicker_private_method__set_create_options).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorresourcepicker_private_method__set_create_options"></div>

`void` **_set_create_options** ( menu_node: [`Object`](class_object.md) ) virtual[^virtual]<div id="class_editorresourcepicker_private_method__set_create_options"></div>

This virtual method is called when updating the context menu of **EditorResourcePicker**. Implement this method to override the "New ..." items with your own options. `menu_node` is a reference to the [`PopupMenu`](class_popupmenu.md) node.

 **Note:** Implement [`_handle_menu_selected`](class_editorresourcepicker.md#class_editorresourcepicker_private_method__handle_menu_selected) to handle these custom items.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorresourcepicker_method_get_allowed_types"></div>

[`PackedStringArray`](class_packedstringarray.md) **get_allowed_types** ( ) const[^const]<div id="class_editorresourcepicker_method_get_allowed_types"></div>

Returns a list of all allowed types and subtypes corresponding to the [`base_type`](class_editorresourcepicker.md#class_editorresourcepicker_property_base_type). If the [`base_type`](class_editorresourcepicker.md#class_editorresourcepicker_property_base_type) is empty, an empty list is returned.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorresourcepicker_method_set_toggle_pressed"></div>

`void` **set_toggle_pressed** ( pressed: [`bool`](class_bool.md) )<div id="class_editorresourcepicker_method_set_toggle_pressed"></div>

Sets the toggle mode state for the main button. Works only if [`toggle_mode`](class_editorresourcepicker.md#class_editorresourcepicker_property_toggle_mode) is set to `true`.

[^virtual]: 本方法通常需要用户覆盖才能生效。
[^const]: 本方法无副作用，不会修改该实例的任何成员变量。
[^vararg]: 本方法除了能接受在此处描述的参数外，还能够继续接受任意数量的参数。
[^constructor]: 本方法用于构造某个类型。
[^static]: 调用本方法无需实例，可直接使用类名进行调用。
[^operator]: 本方法描述的是使用本类型作为左操作数的有效运算符。
[^bitfield]: 这个值是由下列位标志构成位掩码的整数。
[^void]: 无返回值。
