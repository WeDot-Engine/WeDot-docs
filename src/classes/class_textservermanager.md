<!-- ⚠ 请勿编辑本文件 ⚠ -->
<!-- 本文档使用脚本从 WeDot 引擎源码仓库生成。 -->
<!-- 生成脚本：https://github.com/WeDot-Engine/WeDot/tree/master/doc/tools/make_md.py； -->
<!-- 原文件：https://github.com/WeDot-Engine/WeDot/tree/master/doc/classes/TextServerManager.xml。 -->

<div id="_class_textservermanager"></div>

# TextServerManager

**继承：** [`Object`](class_object.md)

A singleton for managing [`TextServer`](class_textserver.md) implementations.

## 描述

**TextServerManager** is the API backend for loading, enumerating, and switching [`TextServer`](class_textserver.md) s.

 **Note:** Switching text server at runtime is possible, but will invalidate all fonts and text buffers. Make sure to unload all controls, fonts, and themes before doing so.

## 方法

|||
|:-:|:--|
| `void`                                                      | [`add_interface`](class_textservermanager.md#class_textservermanager_method_add_interface) ( interface: [`TextServer`](class_textserver.md) )             |
| [`TextServer`](class_textserver.md)                         | [`find_interface`](class_textservermanager.md#class_textservermanager_method_find_interface) ( name: [`String`](class_string.md) ) const[^const]          |
| [`TextServer`](class_textserver.md)                         | [`get_interface`](class_textservermanager.md#class_textservermanager_method_get_interface) ( idx: [`int`](class_int.md) ) const[^const]                   |
| [`int`](class_int.md)                                       | [`get_interface_count`](class_textservermanager.md#class_textservermanager_method_get_interface_count) ( ) const[^const]                                  |
| [Array](class_array.md) [`Dictionary`](class_dictionary.md) | [`get_interfaces`](class_textservermanager.md#class_textservermanager_method_get_interfaces) ( ) const[^const]                                            |
| [`TextServer`](class_textserver.md)                         | [`get_primary_interface`](class_textservermanager.md#class_textservermanager_method_get_primary_interface) ( ) const[^const]                              |
| `void`                                                      | [`remove_interface`](class_textservermanager.md#class_textservermanager_method_remove_interface) ( interface: [`TextServer`](class_textserver.md) )       |
| `void`                                                      | [`set_primary_interface`](class_textservermanager.md#class_textservermanager_method_set_primary_interface) ( index: [`TextServer`](class_textserver.md) ) |

<!-- rst-class:: classref-section-separator -->

---

## 信号

<div id="_class_class_textservermanager_signal_interface_added"></div>

**interface_added** ( interface_name: [`StringName`](class_stringname.md) ) <div id="class_textservermanager_signal_interface_added"></div>

Emitted when a new interface has been added.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_class_textservermanager_signal_interface_removed"></div>

**interface_removed** ( interface_name: [`StringName`](class_stringname.md) ) <div id="class_textservermanager_signal_interface_removed"></div>

Emitted when an interface is removed.

<!-- rst-class:: classref-section-separator -->

---

## 方法说明

<div id="_class_textservermanager_method_add_interface"></div>

`void` **add_interface** ( interface: [`TextServer`](class_textserver.md) )<div id="class_textservermanager_method_add_interface"></div>

Registers a [`TextServer`](class_textserver.md) interface.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_textservermanager_method_find_interface"></div>

[`TextServer`](class_textserver.md) **find_interface** ( name: [`String`](class_string.md) ) const[^const]<div id="class_textservermanager_method_find_interface"></div>

Finds an interface by its `name`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_textservermanager_method_get_interface"></div>

[`TextServer`](class_textserver.md) **get_interface** ( idx: [`int`](class_int.md) ) const[^const]<div id="class_textservermanager_method_get_interface"></div>

Returns the interface registered at a given index.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_textservermanager_method_get_interface_count"></div>

[`int`](class_int.md) **get_interface_count** ( ) const[^const]<div id="class_textservermanager_method_get_interface_count"></div>

Returns the number of interfaces currently registered.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_textservermanager_method_get_interfaces"></div>

[Array](class_array.md) [`Dictionary`](class_dictionary.md) **get_interfaces** ( ) const[^const]<div id="class_textservermanager_method_get_interfaces"></div>

Returns a list of available interfaces, with the index and name of each interface.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_textservermanager_method_get_primary_interface"></div>

[`TextServer`](class_textserver.md) **get_primary_interface** ( ) const[^const]<div id="class_textservermanager_method_get_primary_interface"></div>

Returns the primary [`TextServer`](class_textserver.md) interface currently in use.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_textservermanager_method_remove_interface"></div>

`void` **remove_interface** ( interface: [`TextServer`](class_textserver.md) )<div id="class_textservermanager_method_remove_interface"></div>

Removes an interface. All fonts and shaped text caches should be freed before removing an interface.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_textservermanager_method_set_primary_interface"></div>

`void` **set_primary_interface** ( index: [`TextServer`](class_textserver.md) )<div id="class_textservermanager_method_set_primary_interface"></div>

Sets the primary [`TextServer`](class_textserver.md) interface.

[^virtual]: 本方法通常需要用户覆盖才能生效。
[^const]: 本方法无副作用，不会修改该实例的任何成员变量。
[^vararg]: 本方法除了能接受在此处描述的参数外，还能够继续接受任意数量的参数。
[^constructor]: 本方法用于构造某个类型。
[^static]: 调用本方法无需实例，可直接使用类名进行调用。
[^operator]: 本方法描述的是使用本类型作为左操作数的有效运算符。
[^bitfield]: 这个值是由下列位标志构成位掩码的整数。
[^void]: 无返回值。
