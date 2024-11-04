<!-- ⚠ 请勿编辑本文件 ⚠ -->
<!-- 本文档使用脚本从 WeDot 引擎源码仓库生成。 -->
<!-- 生成脚本：https://github.com/WeDot-Engine/WeDot/tree/4.3/doc/tools/make_md.py； -->
<!-- 原文件：https://github.com/WeDot-Engine/WeDot/tree/4.3/doc/classes/RemoteTransform2D.xml。 -->

<div id="_class_remotetransform2d"></div>

# RemoteTransform2D

**继承：** [`Node2D`](class_node2d.md) **<** [`CanvasItem`](class_canvasitem.md) **<** [`Node`](class_node.md) **<** [`Object`](class_object.md)

RemoteTransform2D pushes its own [`Transform2D`](class_transform2d.md) to another [`Node2D`](class_node2d.md) derived node in the scene.

## 描述

RemoteTransform2D pushes its own [`Transform2D`](class_transform2d.md) to another [`Node2D`](class_node2d.md) derived node (called the remote node) in the scene.

It can be set to update another node's position, rotation and/or scale. It can use either global or local coordinates.

## 属性

| [`NodePath`](class_nodepath.md) | [`remote_path`](#class_remotetransform2d_property_remote_path)                       | ``NodePath("")`` |
| [`bool`](class_bool.md)         | [`update_position`](#class_remotetransform2d_property_update_position)               | ``true``         |
| [`bool`](class_bool.md)         | [`update_rotation`](#class_remotetransform2d_property_update_rotation)               | ``true``         |
| [`bool`](class_bool.md)         | [`update_scale`](#class_remotetransform2d_property_update_scale)                     | ``true``         |
| [`bool`](class_bool.md)         | [`use_global_coordinates`](#class_remotetransform2d_property_use_global_coordinates) | ``true``         |

## 方法

| `void` | [`force_update_cache`](#class_remotetransform2d_method_force_update_cache) ( ) |

<!-- rst-class:: classref-section-separator -->

---

## 属性说明

<div id="_class_remotetransform2d_property_remote_path"></div>

[`NodePath`](class_nodepath.md) **remote_path** = ``NodePath("")`` <div id="class_remotetransform2d_property_remote_path"></div>

- `void` **set_remote_node** ( value: [`NodePath`](class_nodepath.md) )
- [`NodePath`](class_nodepath.md) **get_remote_node** ( )

The [`NodePath`](class_nodepath.md) to the remote node, relative to the RemoteTransform2D's position in the scene.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_remotetransform2d_property_update_position"></div>

[`bool`](class_bool.md) **update_position** = ``true`` <div id="class_remotetransform2d_property_update_position"></div>

- `void` **set_update_position** ( value: [`bool`](class_bool.md) )
- [`bool`](class_bool.md) **get_update_position** ( )

If `true`, the remote node's position is updated.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_remotetransform2d_property_update_rotation"></div>

[`bool`](class_bool.md) **update_rotation** = ``true`` <div id="class_remotetransform2d_property_update_rotation"></div>

- `void` **set_update_rotation** ( value: [`bool`](class_bool.md) )
- [`bool`](class_bool.md) **get_update_rotation** ( )

If `true`, the remote node's rotation is updated.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_remotetransform2d_property_update_scale"></div>

[`bool`](class_bool.md) **update_scale** = ``true`` <div id="class_remotetransform2d_property_update_scale"></div>

- `void` **set_update_scale** ( value: [`bool`](class_bool.md) )
- [`bool`](class_bool.md) **get_update_scale** ( )

If `true`, the remote node's scale is updated.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_remotetransform2d_property_use_global_coordinates"></div>

[`bool`](class_bool.md) **use_global_coordinates** = ``true`` <div id="class_remotetransform2d_property_use_global_coordinates"></div>

- `void` **set_use_global_coordinates** ( value: [`bool`](class_bool.md) )
- [`bool`](class_bool.md) **get_use_global_coordinates** ( )

If `true`, global coordinates are used. If `false`, local coordinates are used.

<!-- rst-class:: classref-section-separator -->

---

## 方法说明

<div id="_class_remotetransform2d_method_force_update_cache"></div>

`void` **force_update_cache** ( )<div id="class_remotetransform2d_method_force_update_cache"></div>

**RemoteTransform2D** caches the remote node. It may not notice if the remote node disappears; [`force_update_cache`](#class_remotetransform2d_method_force_update_cache) forces it to update the cache again.

[^virtual]: 本方法通常需要用户覆盖才能生效。
[^const]: 本方法无副作用，不会修改该实例的任何成员变量。
[^vararg]: 本方法除了能接受在此处描述的参数外，还能够继续接受任意数量的参数。
[^constructor]: 本方法用于构造某个类型。
[^static]: 调用本方法无需实例，可直接使用类名进行调用。
[^operator]: 本方法描述的是使用本类型作为左操作数的有效运算符。
[^bitfield]: 这个值是由下列位标志构成位掩码的整数。
[^void]: 无返回值。
