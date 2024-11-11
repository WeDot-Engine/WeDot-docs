<!-- ⚠ 请勿编辑本文件 ⚠ -->
<!-- 本文档使用脚本从 WeDot 引擎源码仓库生成。 -->
<!-- 生成脚本：https://github.com/WeDot-Engine/WeDot/tree/master/doc/tools/make_md.py； -->
<!-- 原文件：https://github.com/WeDot-Engine/WeDot/tree/master/doc/classes/InstancePlaceholder.xml。 -->

<div id="_class_instanceplaceholder"></div>

# InstancePlaceholder

**继承：** [`Node`](class_node.md) **<** [`Object`](class_object.md)

Placeholder for the root [`Node`](class_node.md) of a [`PackedScene`](class_packedscene.md).

## 描述

Turning on the option **Load As Placeholder** for an instantiated scene in the editor causes it to be replaced by an **InstancePlaceholder** when running the game, this will not replace the node in the editor. This makes it possible to delay actually loading the scene until calling [`create_instance`](class_instanceplaceholder.md#class_instanceplaceholder_method_create_instance). This is useful to avoid loading large scenes all at once by loading parts of it selectively.

The **InstancePlaceholder** does not have a transform. This causes any child nodes to be positioned relatively to the [`Viewport`](class_viewport.md) from point (0,0), rather than their parent as displayed in the editor. Replacing the placeholder with a scene with a transform will transform children relatively to their parent again.

## 方法

|||
|:-:|:--|
| [`Node`](class_node.md)             | [`create_instance`](class_instanceplaceholder.md#class_instanceplaceholder_method_create_instance) ( replace: [`bool`](class_bool.md) = false, custom_scene: [`PackedScene`](class_packedscene.md) = null ) |
| [`String`](class_string.md)         | [`get_instance_path`](class_instanceplaceholder.md#class_instanceplaceholder_method_get_instance_path) ( ) const[^const]                                                                                    |
| [`Dictionary`](class_dictionary.md) | [`get_stored_values`](class_instanceplaceholder.md#class_instanceplaceholder_method_get_stored_values) ( with_order: [`bool`](class_bool.md) = false )                                                      |

<!-- rst-class:: classref-section-separator -->

---

## 方法说明

<div id="_class_instanceplaceholder_method_create_instance"></div>

[`Node`](class_node.md) **create_instance** ( replace: [`bool`](class_bool.md) = false, custom_scene: [`PackedScene`](class_packedscene.md) = null )<div id="class_instanceplaceholder_method_create_instance"></div>

Call this method to actually load in the node. The created node will be placed as a sibling *above* the **InstancePlaceholder** in the scene tree. The [`Node`](class_node.md)'s reference is also returned for convenience.

 **Note:** [`create_instance`](class_instanceplaceholder.md#class_instanceplaceholder_method_create_instance) is not thread-safe. Use [`Object.call_deferred`](class_object.md#class_object_method_call_deferred) if calling from a thread.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_instanceplaceholder_method_get_instance_path"></div>

[`String`](class_string.md) **get_instance_path** ( ) const[^const]<div id="class_instanceplaceholder_method_get_instance_path"></div>

Gets the path to the [`PackedScene`](class_packedscene.md) resource file that is loaded by default when calling [`create_instance`](class_instanceplaceholder.md#class_instanceplaceholder_method_create_instance). Not thread-safe. Use [`Object.call_deferred`](class_object.md#class_object_method_call_deferred) if calling from a thread.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_instanceplaceholder_method_get_stored_values"></div>

[`Dictionary`](class_dictionary.md) **get_stored_values** ( with_order: [`bool`](class_bool.md) = false )<div id="class_instanceplaceholder_method_get_stored_values"></div>

Returns the list of properties that will be applied to the node when [`create_instance`](class_instanceplaceholder.md#class_instanceplaceholder_method_create_instance) is called.

If `with_order` is `true`, a key named `.order` (note the leading period) is added to the dictionary. This `.order` key is an [`Array`](class_array.md) of [`String`](class_string.md) property names specifying the order in which properties will be applied (with index 0 being the first).

[^virtual]: 本方法通常需要用户覆盖才能生效。
[^const]: 本方法无副作用，不会修改该实例的任何成员变量。
[^vararg]: 本方法除了能接受在此处描述的参数外，还能够继续接受任意数量的参数。
[^constructor]: 本方法用于构造某个类型。
[^static]: 调用本方法无需实例，可直接使用类名进行调用。
[^operator]: 本方法描述的是使用本类型作为左操作数的有效运算符。
[^bitfield]: 这个值是由下列位标志构成位掩码的整数。
[^void]: 无返回值。
