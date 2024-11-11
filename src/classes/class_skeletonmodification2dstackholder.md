<!-- ⚠ 请勿编辑本文件 ⚠ -->
<!-- 本文档使用脚本从 WeDot 引擎源码仓库生成。 -->
<!-- 生成脚本：https://github.com/WeDot-Engine/WeDot/tree/master/doc/tools/make_md.py； -->
<!-- 原文件：https://github.com/WeDot-Engine/WeDot/tree/master/doc/classes/SkeletonModification2DStackHolder.xml。 -->

<div id="_class_skeletonmodification2dstackholder"></div>

# SkeletonModification2DStackHolder

**实验性：** This class may be changed or removed in future versions.

**继承：** [`SkeletonModification2D`](class_skeletonmodification2d.md) **<** [`Resource`](class_resource.md) **<** [`RefCounted`](class_refcounted.md) **<** [`Object`](class_object.md)

A modification that holds and executes a [`SkeletonModificationStack2D`](class_skeletonmodificationstack2d.md).

## 描述

This [`SkeletonModification2D`](class_skeletonmodification2d.md) holds a reference to a [`SkeletonModificationStack2D`](class_skeletonmodificationstack2d.md), allowing you to use multiple modification stacks on a single [`Skeleton2D`](class_skeleton2d.md).

 **Note:** The modifications in the held [`SkeletonModificationStack2D`](class_skeletonmodificationstack2d.md) will only be executed if their execution mode matches the execution mode of the SkeletonModification2DStackHolder.

## 方法

|||
|:-:|:--|
| [`SkeletonModificationStack2D`](class_skeletonmodificationstack2d.md) | [`get_held_modification_stack`](class_skeletonmodification2dstackholder.md#class_skeletonmodification2dstackholder_method_get_held_modification_stack) ( ) const[^const]                                                                                  |
| `void`                                                                | [`set_held_modification_stack`](class_skeletonmodification2dstackholder.md#class_skeletonmodification2dstackholder_method_set_held_modification_stack) ( held_modification_stack: [`SkeletonModificationStack2D`](class_skeletonmodificationstack2d.md) ) |

<!-- rst-class:: classref-section-separator -->

---

## 方法说明

<div id="_class_skeletonmodification2dstackholder_method_get_held_modification_stack"></div>

[`SkeletonModificationStack2D`](class_skeletonmodificationstack2d.md) **get_held_modification_stack** ( ) const[^const]<div id="class_skeletonmodification2dstackholder_method_get_held_modification_stack"></div>

Returns the [`SkeletonModificationStack2D`](class_skeletonmodificationstack2d.md) that this modification is holding.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_skeletonmodification2dstackholder_method_set_held_modification_stack"></div>

`void` **set_held_modification_stack** ( held_modification_stack: [`SkeletonModificationStack2D`](class_skeletonmodificationstack2d.md) )<div id="class_skeletonmodification2dstackholder_method_set_held_modification_stack"></div>

Sets the [`SkeletonModificationStack2D`](class_skeletonmodificationstack2d.md) that this modification is holding. This modification stack will then be executed when this modification is executed.

[^virtual]: 本方法通常需要用户覆盖才能生效。
[^const]: 本方法无副作用，不会修改该实例的任何成员变量。
[^vararg]: 本方法除了能接受在此处描述的参数外，还能够继续接受任意数量的参数。
[^constructor]: 本方法用于构造某个类型。
[^static]: 调用本方法无需实例，可直接使用类名进行调用。
[^operator]: 本方法描述的是使用本类型作为左操作数的有效运算符。
[^bitfield]: 这个值是由下列位标志构成位掩码的整数。
[^void]: 无返回值。
