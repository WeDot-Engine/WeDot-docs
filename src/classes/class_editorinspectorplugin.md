<!-- ⚠ 请勿编辑本文件 ⚠ -->
<!-- 本文档使用脚本从 WeDot 引擎源码仓库生成。 -->
<!-- 生成脚本：https://github.com/WeDot-Engine/WeDot/tree/4.3/doc/tools/make_md.py； -->
<!-- 原文件：https://github.com/WeDot-Engine/WeDot/tree/4.3/doc/classes/EditorInspectorPlugin.xml。 -->

<div id="_class_editorinspectorplugin"></div>

# EditorInspectorPlugin

**继承：** [`RefCounted`](class_refcounted.md) **<** [`Object`](class_object.md)

Plugin for adding custom property editors on the inspector.

## 描述

**EditorInspectorPlugin** allows adding custom property editors to [`EditorInspector`](class_editorinspector.md).

When an object is edited, the [`_can_handle`](#class_editorinspectorplugin_private_method__can_handle) function is called and must return `true` if the object type is supported.

If supported, the function [`_parse_begin`](#class_editorinspectorplugin_private_method__parse_begin) will be called, allowing to place custom controls at the beginning of the class.

Subsequently, the [`_parse_category`](#class_editorinspectorplugin_private_method__parse_category) and [`_parse_property`](#class_editorinspectorplugin_private_method__parse_property) are called for every category and property. They offer the ability to add custom controls to the inspector too.

Finally, [`_parse_end`](#class_editorinspectorplugin_private_method__parse_end) will be called.

On each of these calls, the "add" functions can be called.

To use **EditorInspectorPlugin**, register it using the [`EditorPlugin.add_inspector_plugin`](#class_editorplugin_method_add_inspector_plugin) method first.

## 方法

| [`bool`](class_bool.md) | [`_can_handle`](#class_editorinspectorplugin_private_method__can_handle) ( object: [`Object`](class_object.md) ) virtual[^virtual] const[^const]                                                                                                                                                                                                                                                                                                    |
| `void`                  | [`_parse_begin`](#class_editorinspectorplugin_private_method__parse_begin) ( object: [`Object`](class_object.md) ) virtual[^virtual]                                                                                                                                                                                                                                                                                                                |
| `void`                  | [`_parse_category`](#class_editorinspectorplugin_private_method__parse_category) ( object: [`Object`](class_object.md), category: [`String`](class_string.md) ) virtual[^virtual]                                                                                                                                                                                                                                                                   |
| `void`                  | [`_parse_end`](#class_editorinspectorplugin_private_method__parse_end) ( object: [`Object`](class_object.md) ) virtual[^virtual]                                                                                                                                                                                                                                                                                                                    |
| `void`                  | [`_parse_group`](#class_editorinspectorplugin_private_method__parse_group) ( object: [`Object`](class_object.md), group: [`String`](class_string.md) ) virtual[^virtual]                                                                                                                                                                                                                                                                            |
| [`bool`](class_bool.md) | [`_parse_property`](#class_editorinspectorplugin_private_method__parse_property) ( object: [`Object`](class_object.md), type: [Variant.Type](#enum_@globalscope_variant.type), name: [`String`](class_string.md), hint_type: [PropertyHint](#enum_@globalscope_propertyhint), hint_string: [`String`](class_string.md), usage_flags: [PropertyUsageFlags](#enum_@globalscope_propertyusageflags), wide: [`bool`](class_bool.md) ) virtual[^virtual] |
| `void`                  | [`add_custom_control`](#class_editorinspectorplugin_method_add_custom_control) ( control: [`Control`](class_control.md) )                                                                                                                                                                                                                                                                                                                           |
| `void`                  | [`add_property_editor`](#class_editorinspectorplugin_method_add_property_editor) ( property: [`String`](class_string.md), editor: [`Control`](class_control.md), add_to_end: [`bool`](class_bool.md) = false, label: [`String`](class_string.md) = "" )                                                                                                                                                                                             |
| `void`                  | [`add_property_editor_for_multiple_properties`](#class_editorinspectorplugin_method_add_property_editor_for_multiple_properties) ( label: [`String`](class_string.md), properties: [`PackedStringArray`](class_packedstringarray.md), editor: [`Control`](class_control.md) )                                                                                                                                                                       |

<!-- rst-class:: classref-section-separator -->

---

## 方法说明

<div id="_class_editorinspectorplugin_private_method__can_handle"></div>

[`bool`](class_bool.md) **_can_handle** ( object: [`Object`](class_object.md) ) virtual[^virtual] const[^const]<div id="class_editorinspectorplugin_private_method__can_handle"></div>

Returns `true` if this object can be handled by this plugin.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorinspectorplugin_private_method__parse_begin"></div>

`void` **_parse_begin** ( object: [`Object`](class_object.md) ) virtual[^virtual]<div id="class_editorinspectorplugin_private_method__parse_begin"></div>

Called to allow adding controls at the beginning of the property list for `object`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorinspectorplugin_private_method__parse_category"></div>

`void` **_parse_category** ( object: [`Object`](class_object.md), category: [`String`](class_string.md) ) virtual[^virtual]<div id="class_editorinspectorplugin_private_method__parse_category"></div>

Called to allow adding controls at the beginning of a category in the property list for `object`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorinspectorplugin_private_method__parse_end"></div>

`void` **_parse_end** ( object: [`Object`](class_object.md) ) virtual[^virtual]<div id="class_editorinspectorplugin_private_method__parse_end"></div>

Called to allow adding controls at the end of the property list for `object`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorinspectorplugin_private_method__parse_group"></div>

`void` **_parse_group** ( object: [`Object`](class_object.md), group: [`String`](class_string.md) ) virtual[^virtual]<div id="class_editorinspectorplugin_private_method__parse_group"></div>

Called to allow adding controls at the beginning of a group or a sub-group in the property list for `object`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorinspectorplugin_private_method__parse_property"></div>

[`bool`](class_bool.md) **_parse_property** ( object: [`Object`](class_object.md), type: [Variant.Type](#enum_@globalscope_variant.type), name: [`String`](class_string.md), hint_type: [PropertyHint](#enum_@globalscope_propertyhint), hint_string: [`String`](class_string.md), usage_flags: [PropertyUsageFlags](#enum_@globalscope_propertyusageflags), wide: [`bool`](class_bool.md) ) virtual[^virtual]<div id="class_editorinspectorplugin_private_method__parse_property"></div>

Called to allow adding property-specific editors to the property list for `object`. The added editor control must extend [`EditorProperty`](class_editorproperty.md). Returning `true` removes the built-in editor for this property, otherwise allows to insert a custom editor before the built-in one.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorinspectorplugin_method_add_custom_control"></div>

`void` **add_custom_control** ( control: [`Control`](class_control.md) )<div id="class_editorinspectorplugin_method_add_custom_control"></div>

Adds a custom control, which is not necessarily a property editor.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorinspectorplugin_method_add_property_editor"></div>

`void` **add_property_editor** ( property: [`String`](class_string.md), editor: [`Control`](class_control.md), add_to_end: [`bool`](class_bool.md) = false, label: [`String`](class_string.md) = "" )<div id="class_editorinspectorplugin_method_add_property_editor"></div>

Adds a property editor for an individual property. The `editor` control must extend [`EditorProperty`](class_editorproperty.md).

There can be multiple property editors for a property. If `add_to_end` is `true`, this newly added editor will be displayed after all the other editors of the property whose `add_to_end` is `false`. For example, the editor uses this parameter to add an "Edit Region" button for [`Sprite2D.region_rect`](#class_sprite2d_property_region_rect) below the regular [`Rect2`](class_rect2.md) editor.

 `label` can be used to choose a custom label for the property editor in the inspector. If left empty, the label is computed from the name of the property instead.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorinspectorplugin_method_add_property_editor_for_multiple_properties"></div>

`void` **add_property_editor_for_multiple_properties** ( label: [`String`](class_string.md), properties: [`PackedStringArray`](class_packedstringarray.md), editor: [`Control`](class_control.md) )<div id="class_editorinspectorplugin_method_add_property_editor_for_multiple_properties"></div>

Adds an editor that allows modifying multiple properties. The `editor` control must extend [`EditorProperty`](class_editorproperty.md).

[^virtual]: 本方法通常需要用户覆盖才能生效。
[^const]: 本方法无副作用，不会修改该实例的任何成员变量。
[^vararg]: 本方法除了能接受在此处描述的参数外，还能够继续接受任意数量的参数。
[^constructor]: 本方法用于构造某个类型。
[^static]: 调用本方法无需实例，可直接使用类名进行调用。
[^operator]: 本方法描述的是使用本类型作为左操作数的有效运算符。
[^bitfield]: 这个值是由下列位标志构成位掩码的整数。
[^void]: 无返回值。
