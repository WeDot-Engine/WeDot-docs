<!-- ⚠ 请勿编辑本文件 ⚠ -->
<!-- 本文档使用脚本从 WeDot 引擎源码仓库生成。 -->
<!-- 生成脚本：https://github.com/WeDot-Engine/WeDot/tree/4.3/doc/tools/make_md.py； -->
<!-- 原文件：https://github.com/WeDot-Engine/WeDot/tree/4.3/doc/classes/ResourcePreloader.xml。 -->

<div id="_class_resourcepreloader"></div>

# ResourcePreloader

**继承：** [`Node`](class_node.md) **<** [`Object`](class_object.md)

A node used to preload sub-resources inside a scene.

## 描述

This node is used to preload sub-resources inside a scene, so when the scene is loaded, all the resources are ready to use and can be retrieved from the preloader. You can add the resources using the ResourcePreloader tab when the node is selected.

GDScript has a simplified [`@GDScript.preload`](#class_@gdscript_method_preload) built-in method which can be used in most situations, leaving the use of **ResourcePreloader** for more advanced scenarios.

## 方法

| `void`                                            | [`add_resource`](#class_resourcepreloader_method_add_resource) ( name: [`StringName`](class_stringname.md), resource: [`Resource`](class_resource.md) )          |
| [`Resource`](class_resource.md)                   | [`get_resource`](#class_resourcepreloader_method_get_resource) ( name: [`StringName`](class_stringname.md) ) const[^const]                                       |
| [`PackedStringArray`](class_packedstringarray.md) | [`get_resource_list`](#class_resourcepreloader_method_get_resource_list) ( ) const[^const]                                                                       |
| [`bool`](class_bool.md)                           | [`has_resource`](#class_resourcepreloader_method_has_resource) ( name: [`StringName`](class_stringname.md) ) const[^const]                                       |
| `void`                                            | [`remove_resource`](#class_resourcepreloader_method_remove_resource) ( name: [`StringName`](class_stringname.md) )                                               |
| `void`                                            | [`rename_resource`](#class_resourcepreloader_method_rename_resource) ( name: [`StringName`](class_stringname.md), newname: [`StringName`](class_stringname.md) ) |

<!-- rst-class:: classref-section-separator -->

---

## 方法说明

<div id="_class_resourcepreloader_method_add_resource"></div>

`void` **add_resource** ( name: [`StringName`](class_stringname.md), resource: [`Resource`](class_resource.md) )<div id="class_resourcepreloader_method_add_resource"></div>

Adds a resource to the preloader with the given `name`. If a resource with the given `name` already exists, the new resource will be renamed to "`name` N" where N is an incrementing number starting from 2.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_resourcepreloader_method_get_resource"></div>

[`Resource`](class_resource.md) **get_resource** ( name: [`StringName`](class_stringname.md) ) const[^const]<div id="class_resourcepreloader_method_get_resource"></div>

Returns the resource associated to `name`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_resourcepreloader_method_get_resource_list"></div>

[`PackedStringArray`](class_packedstringarray.md) **get_resource_list** ( ) const[^const]<div id="class_resourcepreloader_method_get_resource_list"></div>

Returns the list of resources inside the preloader.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_resourcepreloader_method_has_resource"></div>

[`bool`](class_bool.md) **has_resource** ( name: [`StringName`](class_stringname.md) ) const[^const]<div id="class_resourcepreloader_method_has_resource"></div>

Returns `true` if the preloader contains a resource associated to `name`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_resourcepreloader_method_remove_resource"></div>

`void` **remove_resource** ( name: [`StringName`](class_stringname.md) )<div id="class_resourcepreloader_method_remove_resource"></div>

Removes the resource associated to `name` from the preloader.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_resourcepreloader_method_rename_resource"></div>

`void` **rename_resource** ( name: [`StringName`](class_stringname.md), newname: [`StringName`](class_stringname.md) )<div id="class_resourcepreloader_method_rename_resource"></div>

Renames a resource inside the preloader from `name` to `newname`.

[^virtual]: 本方法通常需要用户覆盖才能生效。
[^const]: 本方法无副作用，不会修改该实例的任何成员变量。
[^vararg]: 本方法除了能接受在此处描述的参数外，还能够继续接受任意数量的参数。
[^constructor]: 本方法用于构造某个类型。
[^static]: 调用本方法无需实例，可直接使用类名进行调用。
[^operator]: 本方法描述的是使用本类型作为左操作数的有效运算符。
[^bitfield]: 这个值是由下列位标志构成位掩码的整数。
[^void]: 无返回值。
