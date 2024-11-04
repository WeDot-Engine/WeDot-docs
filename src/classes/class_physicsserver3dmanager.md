<!-- ⚠ 请勿编辑本文件 ⚠ -->
<!-- 本文档使用脚本从 WeDot 引擎源码仓库生成。 -->
<!-- 生成脚本：https://github.com/WeDot-Engine/WeDot/tree/4.3/doc/tools/make_md.py； -->
<!-- 原文件：https://github.com/WeDot-Engine/WeDot/tree/4.3/doc/classes/PhysicsServer3DManager.xml。 -->

<div id="_class_physicsserver3dmanager"></div>

# PhysicsServer3DManager

**继承：** [`Object`](class_object.md)

A singleton for managing [`PhysicsServer3D`](class_physicsserver3d.md) implementations.

## 描述

**PhysicsServer3DManager** is the API for registering [`PhysicsServer3D`](class_physicsserver3d.md) implementations and for setting the default implementation.

 **Note:** It is not possible to switch physics servers at runtime. This class is only used on startup at the server initialization level, by Godot itself and possibly by GDExtensions.

## 方法

| `void` | [`register_server`](#class_physicsserver3dmanager_method_register_server) ( name: [`String`](class_string.md), create_callback: [`Callable`](class_callable.md) ) |
| `void` | [`set_default_server`](#class_physicsserver3dmanager_method_set_default_server) ( name: [`String`](class_string.md), priority: [`int`](class_int.md) )            |

<!-- rst-class:: classref-section-separator -->

---

## 方法说明

<div id="_class_physicsserver3dmanager_method_register_server"></div>

`void` **register_server** ( name: [`String`](class_string.md), create_callback: [`Callable`](class_callable.md) )<div id="class_physicsserver3dmanager_method_register_server"></div>

Register a [`PhysicsServer3D`](class_physicsserver3d.md) implementation by passing a `name` and a [`Callable`](class_callable.md) that returns a [`PhysicsServer3D`](class_physicsserver3d.md) object.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsserver3dmanager_method_set_default_server"></div>

`void` **set_default_server** ( name: [`String`](class_string.md), priority: [`int`](class_int.md) )<div id="class_physicsserver3dmanager_method_set_default_server"></div>

Set the default [`PhysicsServer3D`](class_physicsserver3d.md) implementation to the one identified by `name`, if `priority` is greater than the priority of the current default implementation.

[^virtual]: 本方法通常需要用户覆盖才能生效。
[^const]: 本方法无副作用，不会修改该实例的任何成员变量。
[^vararg]: 本方法除了能接受在此处描述的参数外，还能够继续接受任意数量的参数。
[^constructor]: 本方法用于构造某个类型。
[^static]: 调用本方法无需实例，可直接使用类名进行调用。
[^operator]: 本方法描述的是使用本类型作为左操作数的有效运算符。
[^bitfield]: 这个值是由下列位标志构成位掩码的整数。
[^void]: 无返回值。
