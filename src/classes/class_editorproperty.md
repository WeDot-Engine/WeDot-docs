<!-- ⚠ 请勿编辑本文件 ⚠ -->
<!-- 本文档使用脚本从 WeDot 引擎源码仓库生成。 -->
<!-- 生成脚本：https://github.com/WeDot-Engine/WeDot/tree/master/doc/tools/make_md.py； -->
<!-- 原文件：https://github.com/WeDot-Engine/WeDot/tree/master/doc/classes/EditorProperty.xml。 -->

<div id="_class_editorproperty"></div>

# EditorProperty

**继承：** [`Container`](class_container.md) **<** [`Control`](class_control.md) **<** [`CanvasItem`](class_canvasitem.md) **<** [`Node`](class_node.md) **<** [`Object`](class_object.md)

Custom control for editing properties that can be added to the [`EditorInspector`](class_editorinspector.md).

## 描述

A custom control for editing properties that can be added to the [`EditorInspector`](class_editorinspector.md). It is added via [`EditorInspectorPlugin`](class_editorinspectorplugin.md).

## 属性

|||
|:-:|:--|
| [`bool`](class_bool.md)     | [`checkable`](class_editorproperty.md#class_editorproperty_property_checkable)       | ``false`` |
| [`bool`](class_bool.md)     | [`checked`](class_editorproperty.md#class_editorproperty_property_checked)           | ``false`` |
| [`bool`](class_bool.md)     | [`deletable`](class_editorproperty.md#class_editorproperty_property_deletable)       | ``false`` |
| [`bool`](class_bool.md)     | [`draw_warning`](class_editorproperty.md#class_editorproperty_property_draw_warning) | ``false`` |
| [`bool`](class_bool.md)     | [`keying`](class_editorproperty.md#class_editorproperty_property_keying)             | ``false`` |
| [`String`](class_string.md) | [`label`](class_editorproperty.md#class_editorproperty_property_label)               | ``""``    |
| [`bool`](class_bool.md)     | [`read_only`](class_editorproperty.md#class_editorproperty_property_read_only)       | ``false`` |

## 方法

|||
|:-:|:--|
| `void`                              | [`_set_read_only`](class_editorproperty.md#class_editorproperty_private_method__set_read_only) ( read_only: [`bool`](class_bool.md) ) virtual[^virtual]                                                                                                                 |
| `void`                              | [`_update_property`](class_editorproperty.md#class_editorproperty_private_method__update_property) ( ) virtual[^virtual]                                                                                                                                                |
| `void`                              | [`add_focusable`](class_editorproperty.md#class_editorproperty_method_add_focusable) ( control: [`Control`](class_control.md) )                                                                                                                                         |
| `void`                              | [`emit_changed`](class_editorproperty.md#class_editorproperty_method_emit_changed) ( property: [`StringName`](class_stringname.md), value: [`Variant`](class_variant.md), field: [`StringName`](class_stringname.md) = &"", changing: [`bool`](class_bool.md) = false ) |
| [`Object`](class_object.md)         | [`get_edited_object`](class_editorproperty.md#class_editorproperty_method_get_edited_object) ( )                                                                                                                                                                        |
| [`StringName`](class_stringname.md) | [`get_edited_property`](class_editorproperty.md#class_editorproperty_method_get_edited_property) ( ) const[^const]                                                                                                                                                      |
| `void`                              | [`set_bottom_editor`](class_editorproperty.md#class_editorproperty_method_set_bottom_editor) ( editor: [`Control`](class_control.md) )                                                                                                                                  |
| `void`                              | [`update_property`](class_editorproperty.md#class_editorproperty_method_update_property) ( )                                                                                                                                                                            |

<!-- rst-class:: classref-section-separator -->

---

## 信号

<div id="_class_class_editorproperty_signal_multiple_properties_changed"></div>

**multiple_properties_changed** ( properties: [`PackedStringArray`](class_packedstringarray.md), value: [`Array`](class_array.md) ) <div id="class_editorproperty_signal_multiple_properties_changed"></div>

Emit it if you want multiple properties modified at the same time. Do not use if added via [`EditorInspectorPlugin._parse_property`](class_editorinspectorplugin.md#class_editorinspectorplugin_private_method__parse_property).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_class_editorproperty_signal_object_id_selected"></div>

**object_id_selected** ( property: [`StringName`](class_stringname.md), id: [`int`](class_int.md) ) <div id="class_editorproperty_signal_object_id_selected"></div>

Used by sub-inspectors. Emit it if what was selected was an Object ID.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_class_editorproperty_signal_property_can_revert_changed"></div>

**property_can_revert_changed** ( property: [`StringName`](class_stringname.md), can_revert: [`bool`](class_bool.md) ) <div id="class_editorproperty_signal_property_can_revert_changed"></div>

Emitted when the revertability (i.e., whether it has a non-default value and thus is displayed with a revert icon) of a property has changed.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_class_editorproperty_signal_property_changed"></div>

**property_changed** ( property: [`StringName`](class_stringname.md), value: [`Variant`](class_variant.md), field: [`StringName`](class_stringname.md), changing: [`bool`](class_bool.md) ) <div id="class_editorproperty_signal_property_changed"></div>

Do not emit this manually, use the [`emit_changed`](class_editorproperty.md#class_editorproperty_method_emit_changed) method instead.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_class_editorproperty_signal_property_checked"></div>

**property_checked** ( property: [`StringName`](class_stringname.md), checked: [`bool`](class_bool.md) ) <div id="class_editorproperty_signal_property_checked"></div>

Emitted when a property was checked. Used internally.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_class_editorproperty_signal_property_deleted"></div>

**property_deleted** ( property: [`StringName`](class_stringname.md) ) <div id="class_editorproperty_signal_property_deleted"></div>

Emitted when a property was deleted. Used internally.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_class_editorproperty_signal_property_keyed"></div>

**property_keyed** ( property: [`StringName`](class_stringname.md) ) <div id="class_editorproperty_signal_property_keyed"></div>

Emit it if you want to add this value as an animation key (check for keying being enabled first).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_class_editorproperty_signal_property_keyed_with_value"></div>

**property_keyed_with_value** ( property: [`StringName`](class_stringname.md), value: [`Variant`](class_variant.md) ) <div id="class_editorproperty_signal_property_keyed_with_value"></div>

Emit it if you want to key a property with a single value.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_class_editorproperty_signal_property_pinned"></div>

**property_pinned** ( property: [`StringName`](class_stringname.md), pinned: [`bool`](class_bool.md) ) <div id="class_editorproperty_signal_property_pinned"></div>

Emit it if you want to mark (or unmark) the value of a property for being saved regardless of being equal to the default value.

The default value is the one the property will get when the node is just instantiated and can come from an ancestor scene in the inheritance/instantiation chain, a script or a builtin class.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_class_editorproperty_signal_resource_selected"></div>

**resource_selected** ( path: [`String`](class_string.md), resource: [`Resource`](class_resource.md) ) <div id="class_editorproperty_signal_resource_selected"></div>

If you want a sub-resource to be edited, emit this signal with the resource.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_class_editorproperty_signal_selected"></div>

**selected** ( path: [`String`](class_string.md), focusable_idx: [`int`](class_int.md) ) <div id="class_editorproperty_signal_selected"></div>

Emitted when selected. Used internally.

<!-- rst-class:: classref-section-separator -->

---

## 属性说明

<div id="_class_editorproperty_property_checkable"></div>

[`bool`](class_bool.md) **checkable** = ``false`` <div id="class_editorproperty_property_checkable"></div>

- `void` **set_checkable** ( value: [`bool`](class_bool.md) )
- [`bool`](class_bool.md) **is_checkable** ( )

Used by the inspector, set to `true` when the property is checkable.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorproperty_property_checked"></div>

[`bool`](class_bool.md) **checked** = ``false`` <div id="class_editorproperty_property_checked"></div>

- `void` **set_checked** ( value: [`bool`](class_bool.md) )
- [`bool`](class_bool.md) **is_checked** ( )

Used by the inspector, set to `true` when the property is checked.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorproperty_property_deletable"></div>

[`bool`](class_bool.md) **deletable** = ``false`` <div id="class_editorproperty_property_deletable"></div>

- `void` **set_deletable** ( value: [`bool`](class_bool.md) )
- [`bool`](class_bool.md) **is_deletable** ( )

Used by the inspector, set to `true` when the property can be deleted by the user.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorproperty_property_draw_warning"></div>

[`bool`](class_bool.md) **draw_warning** = ``false`` <div id="class_editorproperty_property_draw_warning"></div>

- `void` **set_draw_warning** ( value: [`bool`](class_bool.md) )
- [`bool`](class_bool.md) **is_draw_warning** ( )

Used by the inspector, set to `true` when the property is drawn with the editor theme's warning color. This is used for editable children's properties.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorproperty_property_keying"></div>

[`bool`](class_bool.md) **keying** = ``false`` <div id="class_editorproperty_property_keying"></div>

- `void` **set_keying** ( value: [`bool`](class_bool.md) )
- [`bool`](class_bool.md) **is_keying** ( )

Used by the inspector, set to `true` when the property can add keys for animation.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorproperty_property_label"></div>

[`String`](class_string.md) **label** = ``""`` <div id="class_editorproperty_property_label"></div>

- `void` **set_label** ( value: [`String`](class_string.md) )
- [`String`](class_string.md) **get_label** ( )

Set this property to change the label (if you want to show one).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorproperty_property_read_only"></div>

[`bool`](class_bool.md) **read_only** = ``false`` <div id="class_editorproperty_property_read_only"></div>

- `void` **set_read_only** ( value: [`bool`](class_bool.md) )
- [`bool`](class_bool.md) **is_read_only** ( )

Used by the inspector, set to `true` when the property is read-only.

<!-- rst-class:: classref-section-separator -->

---

## 方法说明

<div id="_class_editorproperty_private_method__set_read_only"></div>

`void` **_set_read_only** ( read_only: [`bool`](class_bool.md) ) virtual[^virtual]<div id="class_editorproperty_private_method__set_read_only"></div>

Called when the read-only status of the property is changed. It may be used to change custom controls into a read-only or modifiable state.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorproperty_private_method__update_property"></div>

`void` **_update_property** ( ) virtual[^virtual]<div id="class_editorproperty_private_method__update_property"></div>

When this virtual function is called, you must update your editor.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorproperty_method_add_focusable"></div>

`void` **add_focusable** ( control: [`Control`](class_control.md) )<div id="class_editorproperty_method_add_focusable"></div>

If any of the controls added can gain keyboard focus, add it here. This ensures that focus will be restored if the inspector is refreshed.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorproperty_method_emit_changed"></div>

`void` **emit_changed** ( property: [`StringName`](class_stringname.md), value: [`Variant`](class_variant.md), field: [`StringName`](class_stringname.md) = &"", changing: [`bool`](class_bool.md) = false )<div id="class_editorproperty_method_emit_changed"></div>

If one or several properties have changed, this must be called. `field` is used in case your editor can modify fields separately (as an example, Vector3.x). The `changing` argument avoids the editor requesting this property to be refreshed (leave as `false` if unsure).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorproperty_method_get_edited_object"></div>

[`Object`](class_object.md) **get_edited_object** ( )<div id="class_editorproperty_method_get_edited_object"></div>

Gets the edited object.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorproperty_method_get_edited_property"></div>

[`StringName`](class_stringname.md) **get_edited_property** ( ) const[^const]<div id="class_editorproperty_method_get_edited_property"></div>

Gets the edited property. If your editor is for a single property (added via [`EditorInspectorPlugin._parse_property`](class_editorinspectorplugin.md#class_editorinspectorplugin_private_method__parse_property)), then this will return the property.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorproperty_method_set_bottom_editor"></div>

`void` **set_bottom_editor** ( editor: [`Control`](class_control.md) )<div id="class_editorproperty_method_set_bottom_editor"></div>

Puts the `editor` control below the property label. The control must be previously added using [`Node.add_child`](class_node.md#class_node_method_add_child).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorproperty_method_update_property"></div>

`void` **update_property** ( )<div id="class_editorproperty_method_update_property"></div>

Forces refresh of the property display.

[^virtual]: 本方法通常需要用户覆盖才能生效。
[^const]: 本方法无副作用，不会修改该实例的任何成员变量。
[^vararg]: 本方法除了能接受在此处描述的参数外，还能够继续接受任意数量的参数。
[^constructor]: 本方法用于构造某个类型。
[^static]: 调用本方法无需实例，可直接使用类名进行调用。
[^operator]: 本方法描述的是使用本类型作为左操作数的有效运算符。
[^bitfield]: 这个值是由下列位标志构成位掩码的整数。
[^void]: 无返回值。
