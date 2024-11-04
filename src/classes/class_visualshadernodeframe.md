<!-- ⚠ 请勿编辑本文件 ⚠ -->
<!-- 本文档使用脚本从 WeDot 引擎源码仓库生成。 -->
<!-- 生成脚本：https://github.com/WeDot-Engine/WeDot/tree/4.3/doc/tools/make_md.py； -->
<!-- 原文件：https://github.com/WeDot-Engine/WeDot/tree/4.3/doc/classes/VisualShaderNodeFrame.xml。 -->

<div id="_class_visualshadernodeframe"></div>

# VisualShaderNodeFrame

**继承：** [`VisualShaderNodeResizableBase`](class_visualshadernoderesizablebase.md) **<** [`VisualShaderNode`](class_visualshadernode.md) **<** [`Resource`](class_resource.md) **<** [`RefCounted`](class_refcounted.md) **<** [`Object`](class_object.md)

**派生：** [`VisualShaderNodeComment`](class_visualshadernodecomment.md)

A frame other visual shader nodes can be attached to for better organization.

## 描述

A rectangular frame that can be used to group visual shader nodes together to improve organization.

Nodes attached to the frame will move with it when it is dragged and it can automatically resize to enclose all attached nodes.

Its title, description and color can be customized.

## 属性

| [`PackedInt32Array`](class_packedint32array.md) | [`attached_nodes`](#class_visualshadernodeframe_property_attached_nodes)         | ``PackedInt32Array()``         |
| [`bool`](class_bool.md)                         | [`autoshrink`](#class_visualshadernodeframe_property_autoshrink)                 | ``true``                       |
| [`Color`](class_color.md)                       | [`tint_color`](#class_visualshadernodeframe_property_tint_color)                 | ``Color(0.3, 0.3, 0.3, 0.75)`` |
| [`bool`](class_bool.md)                         | [`tint_color_enabled`](#class_visualshadernodeframe_property_tint_color_enabled) | ``false``                      |
| [`String`](class_string.md)                     | [`title`](#class_visualshadernodeframe_property_title)                           | ``"Title"``                    |

## 方法

| `void` | [`add_attached_node`](#class_visualshadernodeframe_method_add_attached_node) ( node: [`int`](class_int.md) )       |
| `void` | [`remove_attached_node`](#class_visualshadernodeframe_method_remove_attached_node) ( node: [`int`](class_int.md) ) |

<!-- rst-class:: classref-section-separator -->

---

## 属性说明

<div id="_class_visualshadernodeframe_property_attached_nodes"></div>

[`PackedInt32Array`](class_packedint32array.md) **attached_nodes** = ``PackedInt32Array()`` <div id="class_visualshadernodeframe_property_attached_nodes"></div>

- `void` **set_attached_nodes** ( value: [`PackedInt32Array`](class_packedint32array.md) )
- [`PackedInt32Array`](class_packedint32array.md) **get_attached_nodes** ( )

The list of nodes attached to the frame.

**Note:** The returned array is *copied* and any changes to it will not update the original property value. See [`PackedInt32Array`](class_packedint32array.md) for more details.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_visualshadernodeframe_property_autoshrink"></div>

[`bool`](class_bool.md) **autoshrink** = ``true`` <div id="class_visualshadernodeframe_property_autoshrink"></div>

- `void` **set_autoshrink_enabled** ( value: [`bool`](class_bool.md) )
- [`bool`](class_bool.md) **is_autoshrink_enabled** ( )

If `true`, the frame will automatically resize to enclose all attached nodes.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_visualshadernodeframe_property_tint_color"></div>

[`Color`](class_color.md) **tint_color** = ``Color(0.3, 0.3, 0.3, 0.75)`` <div id="class_visualshadernodeframe_property_tint_color"></div>

- `void` **set_tint_color** ( value: [`Color`](class_color.md) )
- [`Color`](class_color.md) **get_tint_color** ( )

The color of the frame when [`tint_color_enabled`](#class_visualshadernodeframe_property_tint_color_enabled) is `true`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_visualshadernodeframe_property_tint_color_enabled"></div>

[`bool`](class_bool.md) **tint_color_enabled** = ``false`` <div id="class_visualshadernodeframe_property_tint_color_enabled"></div>

- `void` **set_tint_color_enabled** ( value: [`bool`](class_bool.md) )
- [`bool`](class_bool.md) **is_tint_color_enabled** ( )

If `true`, the frame will be tinted with the color specified in [`tint_color`](#class_visualshadernodeframe_property_tint_color).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_visualshadernodeframe_property_title"></div>

[`String`](class_string.md) **title** = ``"Title"`` <div id="class_visualshadernodeframe_property_title"></div>

- `void` **set_title** ( value: [`String`](class_string.md) )
- [`String`](class_string.md) **get_title** ( )

The title of the node.

<!-- rst-class:: classref-section-separator -->

---

## 方法说明

<div id="_class_visualshadernodeframe_method_add_attached_node"></div>

`void` **add_attached_node** ( node: [`int`](class_int.md) )<div id="class_visualshadernodeframe_method_add_attached_node"></div>

Adds a node to the list of nodes attached to the frame. Should not be called directly, use the [`VisualShader.attach_node_to_frame`](#class_visualshader_method_attach_node_to_frame) method instead.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_visualshadernodeframe_method_remove_attached_node"></div>

`void` **remove_attached_node** ( node: [`int`](class_int.md) )<div id="class_visualshadernodeframe_method_remove_attached_node"></div>

Removes a node from the list of nodes attached to the frame. Should not be called directly, use the [`VisualShader.detach_node_from_frame`](#class_visualshader_method_detach_node_from_frame) method instead.

[^virtual]: 本方法通常需要用户覆盖才能生效。
[^const]: 本方法无副作用，不会修改该实例的任何成员变量。
[^vararg]: 本方法除了能接受在此处描述的参数外，还能够继续接受任意数量的参数。
[^constructor]: 本方法用于构造某个类型。
[^static]: 调用本方法无需实例，可直接使用类名进行调用。
[^operator]: 本方法描述的是使用本类型作为左操作数的有效运算符。
[^bitfield]: 这个值是由下列位标志构成位掩码的整数。
[^void]: 无返回值。
