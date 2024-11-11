<!-- ⚠ 请勿编辑本文件 ⚠ -->
<!-- 本文档使用脚本从 WeDot 引擎源码仓库生成。 -->
<!-- 生成脚本：https://github.com/WeDot-Engine/WeDot/tree/master/doc/tools/make_md.py； -->
<!-- 原文件：https://github.com/WeDot-Engine/WeDot/tree/master/doc/classes/MissingNode.xml。 -->

<div id="_class_missingnode"></div>

# MissingNode

**继承：** [`Node`](class_node.md) **<** [`Object`](class_object.md)

An internal editor class intended for keeping the data of unrecognized nodes.

## 描述

This is an internal editor class intended for keeping data of nodes of unknown type (most likely this type was supplied by an extension that is no longer loaded). It can't be manually instantiated or placed in a scene.

 **Warning:** Ignore missing nodes unless you know what you are doing. Existing properties on a missing node can be freely modified in code, regardless of the type they are intended to be.

## 属性

|||
|:-:|:--|
| [`String`](class_string.md) | [`original_class`](class_missingnode.md#class_missingnode_property_original_class)             |
| [`String`](class_string.md) | [`original_scene`](class_missingnode.md#class_missingnode_property_original_scene)             |
| [`bool`](class_bool.md)     | [`recording_properties`](class_missingnode.md#class_missingnode_property_recording_properties) |

<!-- rst-class:: classref-section-separator -->

---

## 属性说明

<div id="_class_missingnode_property_original_class"></div>

[`String`](class_string.md) **original_class** <div id="class_missingnode_property_original_class"></div>

- `void` **set_original_class** ( value: [`String`](class_string.md) )
- [`String`](class_string.md) **get_original_class** ( )

The name of the class this node was supposed to be (see [`Object.get_class`](class_object.md#class_object_method_get_class)).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_missingnode_property_original_scene"></div>

[`String`](class_string.md) **original_scene** <div id="class_missingnode_property_original_scene"></div>

- `void` **set_original_scene** ( value: [`String`](class_string.md) )
- [`String`](class_string.md) **get_original_scene** ( )

Returns the path of the scene this node was instance of originally.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_missingnode_property_recording_properties"></div>

[`bool`](class_bool.md) **recording_properties** <div id="class_missingnode_property_recording_properties"></div>

- `void` **set_recording_properties** ( value: [`bool`](class_bool.md) )
- [`bool`](class_bool.md) **is_recording_properties** ( )

If `true`, allows new properties to be set along with existing ones. If `false`, only existing properties' values can be set, and new properties cannot be added.

[^virtual]: 本方法通常需要用户覆盖才能生效。
[^const]: 本方法无副作用，不会修改该实例的任何成员变量。
[^vararg]: 本方法除了能接受在此处描述的参数外，还能够继续接受任意数量的参数。
[^constructor]: 本方法用于构造某个类型。
[^static]: 调用本方法无需实例，可直接使用类名进行调用。
[^operator]: 本方法描述的是使用本类型作为左操作数的有效运算符。
[^bitfield]: 这个值是由下列位标志构成位掩码的整数。
[^void]: 无返回值。
