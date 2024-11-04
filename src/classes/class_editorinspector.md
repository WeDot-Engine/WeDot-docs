<!-- ⚠ 请勿编辑本文件 ⚠ -->
<!-- 本文档使用脚本从 WeDot 引擎源码仓库生成。 -->
<!-- 生成脚本：https://github.com/WeDot-Engine/WeDot/tree/4.3/doc/tools/make_md.py； -->
<!-- 原文件：https://github.com/WeDot-Engine/WeDot/tree/4.3/doc/classes/EditorInspector.xml。 -->

<div id="_class_editorinspector"></div>

# EditorInspector

**继承：** [`ScrollContainer`](class_scrollcontainer.md) **<** [`Container`](class_container.md) **<** [`Control`](class_control.md) **<** [`CanvasItem`](class_canvasitem.md) **<** [`Node`](class_node.md) **<** [`Object`](class_object.md)

A control used to edit properties of an object.

## 描述

This is the control that implements property editing in the editor's Settings dialogs, the Inspector dock, etc. To get the **EditorInspector** used in the editor's Inspector dock, use [`EditorInterface.get_inspector`](#class_editorinterface_method_get_inspector).

 **EditorInspector** will show properties in the same order as the array returned by [`Object.get_property_list`](#class_object_method_get_property_list).

If a property's name is path-like (i.e. if it contains forward slashes), **EditorInspector** will create nested sections for "directories" along the path. For example, if a property is named `highlighting/gdscript/node_path_color`, it will be shown as "Node Path Color" inside the "GDScript" section nested inside the "Highlighting" section.

If a property has [`@GlobalScope.PROPERTY_USAGE_GROUP`](#class_@globalscope_constant_property_usage_group) usage, it will group subsequent properties whose name starts with the property's hint string. The group ends when a property does not start with that hint string or when a new group starts. An empty group name effectively ends the current group. **EditorInspector** will create a top-level section for each group. For example, if a property with group usage is named `Collide With` and its hint string is `collide_with_`, a subsequent `collide_with_area` property will be shown as "Area" inside the "Collide With" section. There is also a special case: when the hint string contains the name of a property, that property is grouped too. This is mainly to help grouping properties like `font`, `font_color` and `font_size` (using the hint string `font_`).

If a property has [`@GlobalScope.PROPERTY_USAGE_SUBGROUP`](#class_@globalscope_constant_property_usage_subgroup) usage, a subgroup will be created in the same way as a group, and a second-level section will be created for each subgroup.

 **Note:** Unlike sections created from path-like property names, **EditorInspector** won't capitalize the name for sections created from groups. So properties with group usage usually use capitalized names instead of snake_cased names.

## 属性

| [ScrollMode](#enum_scrollcontainer_scrollmode) | horizontal_scroll_mode | ``0`` (overrides [`ScrollContainer`](#class_scrollcontainer_property_horizontal_scroll_mode)) |

## 方法

| [`Object`](class_object.md) | [`get_edited_object`](#class_editorinspector_method_get_edited_object) ( )               |
| [`String`](class_string.md) | [`get_selected_path`](#class_editorinspector_method_get_selected_path) ( ) const[^const] |

<!-- rst-class:: classref-section-separator -->

---

## 信号

<div id="_class_class_editorinspector_signal_edited_object_changed"></div>

**edited_object_changed** ( ) <div id="class_editorinspector_signal_edited_object_changed"></div>

Emitted when the object being edited by the inspector has changed.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_class_editorinspector_signal_object_id_selected"></div>

**object_id_selected** ( id: [`int`](class_int.md) ) <div id="class_editorinspector_signal_object_id_selected"></div>

Emitted when the Edit button of an [`Object`](class_object.md) has been pressed in the inspector. This is mainly used in the remote scene tree Inspector.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_class_editorinspector_signal_property_deleted"></div>

**property_deleted** ( property: [`String`](class_string.md) ) <div id="class_editorinspector_signal_property_deleted"></div>

Emitted when a property is removed from the inspector.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_class_editorinspector_signal_property_edited"></div>

**property_edited** ( property: [`String`](class_string.md) ) <div id="class_editorinspector_signal_property_edited"></div>

Emitted when a property is edited in the inspector.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_class_editorinspector_signal_property_keyed"></div>

**property_keyed** ( property: [`String`](class_string.md), value: [`Variant`](class_variant.md), advance: [`bool`](class_bool.md) ) <div id="class_editorinspector_signal_property_keyed"></div>

Emitted when a property is keyed in the inspector. Properties can be keyed by clicking the "key" icon next to a property when the Animation panel is toggled.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_class_editorinspector_signal_property_selected"></div>

**property_selected** ( property: [`String`](class_string.md) ) <div id="class_editorinspector_signal_property_selected"></div>

Emitted when a property is selected in the inspector.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_class_editorinspector_signal_property_toggled"></div>

**property_toggled** ( property: [`String`](class_string.md), checked: [`bool`](class_bool.md) ) <div id="class_editorinspector_signal_property_toggled"></div>

Emitted when a boolean property is toggled in the inspector.

 **Note:** This signal is never emitted if the internal `autoclear` property enabled. Since this property is always enabled in the editor inspector, this signal is never emitted by the editor itself.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_class_editorinspector_signal_resource_selected"></div>

**resource_selected** ( resource: [`Resource`](class_resource.md), path: [`String`](class_string.md) ) <div id="class_editorinspector_signal_resource_selected"></div>

Emitted when a resource is selected in the inspector.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_class_editorinspector_signal_restart_requested"></div>

**restart_requested** ( ) <div id="class_editorinspector_signal_restart_requested"></div>

Emitted when a property that requires a restart to be applied is edited in the inspector. This is only used in the Project Settings and Editor Settings.

<!-- rst-class:: classref-section-separator -->

---

## 方法说明

<div id="_class_editorinspector_method_get_edited_object"></div>

[`Object`](class_object.md) **get_edited_object** ( )<div id="class_editorinspector_method_get_edited_object"></div>

Returns the object currently selected in this inspector.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorinspector_method_get_selected_path"></div>

[`String`](class_string.md) **get_selected_path** ( ) const[^const]<div id="class_editorinspector_method_get_selected_path"></div>

Gets the path of the currently selected property.

[^virtual]: 本方法通常需要用户覆盖才能生效。
[^const]: 本方法无副作用，不会修改该实例的任何成员变量。
[^vararg]: 本方法除了能接受在此处描述的参数外，还能够继续接受任意数量的参数。
[^constructor]: 本方法用于构造某个类型。
[^static]: 调用本方法无需实例，可直接使用类名进行调用。
[^operator]: 本方法描述的是使用本类型作为左操作数的有效运算符。
[^bitfield]: 这个值是由下列位标志构成位掩码的整数。
[^void]: 无返回值。
