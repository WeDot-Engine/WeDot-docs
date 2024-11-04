<!-- ⚠ 请勿编辑本文件 ⚠ -->
<!-- 本文档使用脚本从 WeDot 引擎源码仓库生成。 -->
<!-- 生成脚本：https://github.com/WeDot-Engine/WeDot/tree/4.3/doc/tools/make_md.py； -->
<!-- 原文件：https://github.com/WeDot-Engine/WeDot/tree/4.3/doc/classes/EditorSelection.xml。 -->

<div id="_class_editorselection"></div>

# EditorSelection

**继承：** [`Object`](class_object.md)

Manages the SceneTree selection in the editor.

## 描述

This object manages the SceneTree selection in the editor.

 **Note:** This class shouldn't be instantiated directly. Instead, access the singleton using [`EditorInterface.get_selection`](#class_editorinterface_method_get_selection).

## 方法

| `void`                                          | [`add_node`](#class_editorselection_method_add_node) ( node: [`Node`](class_node.md) )                   |
| `void`                                          | [`clear`](#class_editorselection_method_clear) ( )                                                       |
| [Array](class_array.md) [`Node`](class_node.md) | [`get_selected_nodes`](#class_editorselection_method_get_selected_nodes) ( )                             |
| [Array](class_array.md) [`Node`](class_node.md) | [`get_transformable_selected_nodes`](#class_editorselection_method_get_transformable_selected_nodes) ( ) |
| `void`                                          | [`remove_node`](#class_editorselection_method_remove_node) ( node: [`Node`](class_node.md) )             |

<!-- rst-class:: classref-section-separator -->

---

## 信号

<div id="_class_class_editorselection_signal_selection_changed"></div>

**selection_changed** ( ) <div id="class_editorselection_signal_selection_changed"></div>

Emitted when the selection changes.

<!-- rst-class:: classref-section-separator -->

---

## 方法说明

<div id="_class_editorselection_method_add_node"></div>

`void` **add_node** ( node: [`Node`](class_node.md) )<div id="class_editorselection_method_add_node"></div>

Adds a node to the selection.

 **Note:** The newly selected node will not be automatically edited in the inspector. If you want to edit a node, use [`EditorInterface.edit_node`](#class_editorinterface_method_edit_node).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorselection_method_clear"></div>

`void` **clear** ( )<div id="class_editorselection_method_clear"></div>

Clear the selection.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorselection_method_get_selected_nodes"></div>

[Array](class_array.md) [`Node`](class_node.md) **get_selected_nodes** ( )<div id="class_editorselection_method_get_selected_nodes"></div>

Returns the list of selected nodes.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorselection_method_get_transformable_selected_nodes"></div>

[Array](class_array.md) [`Node`](class_node.md) **get_transformable_selected_nodes** ( )<div id="class_editorselection_method_get_transformable_selected_nodes"></div>

Returns the list of selected nodes, optimized for transform operations (i.e. moving them, rotating, etc.). This list can be used to avoid situations where a node is selected and is also a child/grandchild.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorselection_method_remove_node"></div>

`void` **remove_node** ( node: [`Node`](class_node.md) )<div id="class_editorselection_method_remove_node"></div>

Removes a node from the selection.

[^virtual]: 本方法通常需要用户覆盖才能生效。
[^const]: 本方法无副作用，不会修改该实例的任何成员变量。
[^vararg]: 本方法除了能接受在此处描述的参数外，还能够继续接受任意数量的参数。
[^constructor]: 本方法用于构造某个类型。
[^static]: 调用本方法无需实例，可直接使用类名进行调用。
[^operator]: 本方法描述的是使用本类型作为左操作数的有效运算符。
[^bitfield]: 这个值是由下列位标志构成位掩码的整数。
[^void]: 无返回值。
