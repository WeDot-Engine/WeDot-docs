<!-- ⚠ 请勿编辑本文件 ⚠ -->
<!-- 本文档使用脚本从 WeDot 引擎源码仓库生成。 -->
<!-- 生成脚本：https://github.com/WeDot-Engine/WeDot/tree/master/doc/tools/make_md.py； -->
<!-- 原文件：https://github.com/WeDot-Engine/WeDot/tree/master/doc/classes/SkinReference.xml。 -->

<div id="_class_skinreference"></div>

# SkinReference

**继承：** [`RefCounted`](class_refcounted.md) **<** [`Object`](class_object.md)

A reference-counted holder object for a skeleton RID used in the [`RenderingServer`](class_renderingserver.md).

## 描述

An internal object containing a mapping from a [`Skin`](class_skin.md) used within the context of a particular [`MeshInstance3D`](class_meshinstance3d.md) to refer to the skeleton's [`RID`](class_rid.md) in the RenderingServer.

See also [`MeshInstance3D.get_skin_reference`](class_meshinstance3d.md#class_meshinstance3d_method_get_skin_reference) and [`RenderingServer.instance_attach_skeleton`](class_renderingserver.md#class_renderingserver_method_instance_attach_skeleton).

Note that despite the similar naming, the skeleton RID used in the [`RenderingServer`](class_renderingserver.md) does not have a direct one-to-one correspondence to a [`Skeleton3D`](class_skeleton3d.md) node.

In particular, a [`Skeleton3D`](class_skeleton3d.md) node with no [`MeshInstance3D`](class_meshinstance3d.md) children may be unknown to the [`RenderingServer`](class_renderingserver.md).

On the other hand, a [`Skeleton3D`](class_skeleton3d.md) with multiple [`MeshInstance3D`](class_meshinstance3d.md) nodes which each have different [`MeshInstance3D.skin`](class_meshinstance3d.md#class_meshinstance3d_property_skin) objects may have multiple SkinReference instances (and hence, multiple skeleton [`RID`](class_rid.md) s).

## 方法

|||
|:-:|:--|
| [`RID`](class_rid.md)   | [`get_skeleton`](class_skinreference.md#class_skinreference_method_get_skeleton) ( ) const[^const] |
| [`Skin`](class_skin.md) | [`get_skin`](class_skinreference.md#class_skinreference_method_get_skin) ( ) const[^const]         |

<!-- rst-class:: classref-section-separator -->

---

## 方法说明

<div id="_class_skinreference_method_get_skeleton"></div>

[`RID`](class_rid.md) **get_skeleton** ( ) const[^const]<div id="class_skinreference_method_get_skeleton"></div>

Returns the [`RID`](class_rid.md) owned by this SkinReference, as returned by [`RenderingServer.skeleton_create`](class_renderingserver.md#class_renderingserver_method_skeleton_create).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_skinreference_method_get_skin"></div>

[`Skin`](class_skin.md) **get_skin** ( ) const[^const]<div id="class_skinreference_method_get_skin"></div>

Returns the [`Skin`](class_skin.md) connected to this SkinReference. In the case of [`MeshInstance3D`](class_meshinstance3d.md) with no [`MeshInstance3D.skin`](class_meshinstance3d.md#class_meshinstance3d_property_skin) assigned, this will reference an internal default [`Skin`](class_skin.md) owned by that [`MeshInstance3D`](class_meshinstance3d.md).

Note that a single [`Skin`](class_skin.md) may have more than one **SkinReference** in the case that it is shared by meshes across multiple [`Skeleton3D`](class_skeleton3d.md) nodes.

[^virtual]: 本方法通常需要用户覆盖才能生效。
[^const]: 本方法无副作用，不会修改该实例的任何成员变量。
[^vararg]: 本方法除了能接受在此处描述的参数外，还能够继续接受任意数量的参数。
[^constructor]: 本方法用于构造某个类型。
[^static]: 调用本方法无需实例，可直接使用类名进行调用。
[^operator]: 本方法描述的是使用本类型作为左操作数的有效运算符。
[^bitfield]: 这个值是由下列位标志构成位掩码的整数。
[^void]: 无返回值。
