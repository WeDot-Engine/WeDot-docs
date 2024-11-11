<!-- ⚠ 请勿编辑本文件 ⚠ -->
<!-- 本文档使用脚本从 WeDot 引擎源码仓库生成。 -->
<!-- 生成脚本：https://github.com/WeDot-Engine/WeDot/tree/master/doc/tools/make_md.py； -->
<!-- 原文件：https://github.com/WeDot-Engine/WeDot/tree/master/doc/classes/SkeletonModificationStack2D.xml。 -->

<div id="_class_skeletonmodificationstack2d"></div>

# SkeletonModificationStack2D

**实验性：** This class may be changed or removed in future versions.

**继承：** [`Resource`](class_resource.md) **<** [`RefCounted`](class_refcounted.md) **<** [`Object`](class_object.md)

A resource that holds a stack of [`SkeletonModification2D`](class_skeletonmodification2d.md) s.

## 描述

This resource is used by the Skeleton and holds a stack of [`SkeletonModification2D`](class_skeletonmodification2d.md) s.

This controls the order of the modifications and how they are applied. Modification order is especially important for full-body IK setups, as you need to execute the modifications in the correct order to get the desired results. For example, you want to execute a modification on the spine *before* the arms on a humanoid skeleton.

This resource also controls how strongly all of the modifications are applied to the [`Skeleton2D`](class_skeleton2d.md).

## 属性

|||
|:-:|:--|
| [`bool`](class_bool.md)   | [`enabled`](class_skeletonmodificationstack2d.md#class_skeletonmodificationstack2d_property_enabled)                       | ``false`` |
| [`int`](class_int.md)     | [`modification_count`](class_skeletonmodificationstack2d.md#class_skeletonmodificationstack2d_property_modification_count) | ``0``     |
| [`float`](class_float.md) | [`strength`](class_skeletonmodificationstack2d.md#class_skeletonmodificationstack2d_property_strength)                     | ``1.0``   |

## 方法

|||
|:-:|:--|
| `void`                                                      | [`add_modification`](class_skeletonmodificationstack2d.md#class_skeletonmodificationstack2d_method_add_modification) ( modification: [`SkeletonModification2D`](class_skeletonmodification2d.md) )                                 |
| `void`                                                      | [`delete_modification`](class_skeletonmodificationstack2d.md#class_skeletonmodificationstack2d_method_delete_modification) ( mod_idx: [`int`](class_int.md) )                                                                      |
| `void`                                                      | [`enable_all_modifications`](class_skeletonmodificationstack2d.md#class_skeletonmodificationstack2d_method_enable_all_modifications) ( enabled: [`bool`](class_bool.md) )                                                          |
| `void`                                                      | [`execute`](class_skeletonmodificationstack2d.md#class_skeletonmodificationstack2d_method_execute) ( delta: [`float`](class_float.md), execution_mode: [`int`](class_int.md) )                                                     |
| [`bool`](class_bool.md)                                     | [`get_is_setup`](class_skeletonmodificationstack2d.md#class_skeletonmodificationstack2d_method_get_is_setup) ( ) const[^const]                                                                                                     |
| [`SkeletonModification2D`](class_skeletonmodification2d.md) | [`get_modification`](class_skeletonmodificationstack2d.md#class_skeletonmodificationstack2d_method_get_modification) ( mod_idx: [`int`](class_int.md) ) const[^const]                                                              |
| [`Skeleton2D`](class_skeleton2d.md)                         | [`get_skeleton`](class_skeletonmodificationstack2d.md#class_skeletonmodificationstack2d_method_get_skeleton) ( ) const[^const]                                                                                                     |
| `void`                                                      | [`set_modification`](class_skeletonmodificationstack2d.md#class_skeletonmodificationstack2d_method_set_modification) ( mod_idx: [`int`](class_int.md), modification: [`SkeletonModification2D`](class_skeletonmodification2d.md) ) |
| `void`                                                      | [`setup`](class_skeletonmodificationstack2d.md#class_skeletonmodificationstack2d_method_setup) ( )                                                                                                                                 |

<!-- rst-class:: classref-section-separator -->

---

## 属性说明

<div id="_class_skeletonmodificationstack2d_property_enabled"></div>

[`bool`](class_bool.md) **enabled** = ``false`` <div id="class_skeletonmodificationstack2d_property_enabled"></div>

- `void` **set_enabled** ( value: [`bool`](class_bool.md) )
- [`bool`](class_bool.md) **get_enabled** ( )

If `true`, the modification's in the stack will be called. This is handled automatically through the [`Skeleton2D`](class_skeleton2d.md) node.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_skeletonmodificationstack2d_property_modification_count"></div>

[`int`](class_int.md) **modification_count** = ``0`` <div id="class_skeletonmodificationstack2d_property_modification_count"></div>

- `void` **set_modification_count** ( value: [`int`](class_int.md) )
- [`int`](class_int.md) **get_modification_count** ( )

The number of modifications in the stack.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_skeletonmodificationstack2d_property_strength"></div>

[`float`](class_float.md) **strength** = ``1.0`` <div id="class_skeletonmodificationstack2d_property_strength"></div>

- `void` **set_strength** ( value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_strength** ( )

The interpolation strength of the modifications in stack. A value of `0` will make it where the modifications are not applied, a strength of `0.5` will be half applied, and a strength of `1` will allow the modifications to be fully applied and override the [`Skeleton2D`](class_skeleton2d.md) [`Bone2D`](class_bone2d.md) poses.

<!-- rst-class:: classref-section-separator -->

---

## 方法说明

<div id="_class_skeletonmodificationstack2d_method_add_modification"></div>

`void` **add_modification** ( modification: [`SkeletonModification2D`](class_skeletonmodification2d.md) )<div id="class_skeletonmodificationstack2d_method_add_modification"></div>

Adds the passed-in [`SkeletonModification2D`](class_skeletonmodification2d.md) to the stack.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_skeletonmodificationstack2d_method_delete_modification"></div>

`void` **delete_modification** ( mod_idx: [`int`](class_int.md) )<div id="class_skeletonmodificationstack2d_method_delete_modification"></div>

Deletes the [`SkeletonModification2D`](class_skeletonmodification2d.md) at the index position `mod_idx`, if it exists.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_skeletonmodificationstack2d_method_enable_all_modifications"></div>

`void` **enable_all_modifications** ( enabled: [`bool`](class_bool.md) )<div id="class_skeletonmodificationstack2d_method_enable_all_modifications"></div>

Enables all [`SkeletonModification2D`](class_skeletonmodification2d.md) s in the stack.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_skeletonmodificationstack2d_method_execute"></div>

`void` **execute** ( delta: [`float`](class_float.md), execution_mode: [`int`](class_int.md) )<div id="class_skeletonmodificationstack2d_method_execute"></div>

Executes all of the [`SkeletonModification2D`](class_skeletonmodification2d.md) s in the stack that use the same execution mode as the passed-in `execution_mode`, starting from index `0` to [`modification_count`](class_skeletonmodificationstack2d.md#class_skeletonmodificationstack2d_property_modification_count).

 **Note:** The order of the modifications can matter depending on the modifications. For example, modifications on a spine should operate before modifications on the arms in order to get proper results.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_skeletonmodificationstack2d_method_get_is_setup"></div>

[`bool`](class_bool.md) **get_is_setup** ( ) const[^const]<div id="class_skeletonmodificationstack2d_method_get_is_setup"></div>

Returns a boolean that indicates whether the modification stack is setup and can execute.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_skeletonmodificationstack2d_method_get_modification"></div>

[`SkeletonModification2D`](class_skeletonmodification2d.md) **get_modification** ( mod_idx: [`int`](class_int.md) ) const[^const]<div id="class_skeletonmodificationstack2d_method_get_modification"></div>

Returns the [`SkeletonModification2D`](class_skeletonmodification2d.md) at the passed-in index, `mod_idx`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_skeletonmodificationstack2d_method_get_skeleton"></div>

[`Skeleton2D`](class_skeleton2d.md) **get_skeleton** ( ) const[^const]<div id="class_skeletonmodificationstack2d_method_get_skeleton"></div>

Returns the [`Skeleton2D`](class_skeleton2d.md) node that the SkeletonModificationStack2D is bound to.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_skeletonmodificationstack2d_method_set_modification"></div>

`void` **set_modification** ( mod_idx: [`int`](class_int.md), modification: [`SkeletonModification2D`](class_skeletonmodification2d.md) )<div id="class_skeletonmodificationstack2d_method_set_modification"></div>

Sets the modification at `mod_idx` to the passed-in modification, `modification`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_skeletonmodificationstack2d_method_setup"></div>

`void` **setup** ( )<div id="class_skeletonmodificationstack2d_method_setup"></div>

Sets up the modification stack so it can execute. This function should be called by [`Skeleton2D`](class_skeleton2d.md) and shouldn't be manually called unless you know what you are doing.

[^virtual]: 本方法通常需要用户覆盖才能生效。
[^const]: 本方法无副作用，不会修改该实例的任何成员变量。
[^vararg]: 本方法除了能接受在此处描述的参数外，还能够继续接受任意数量的参数。
[^constructor]: 本方法用于构造某个类型。
[^static]: 调用本方法无需实例，可直接使用类名进行调用。
[^operator]: 本方法描述的是使用本类型作为左操作数的有效运算符。
[^bitfield]: 这个值是由下列位标志构成位掩码的整数。
[^void]: 无返回值。
