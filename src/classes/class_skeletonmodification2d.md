<!-- ⚠ 请勿编辑本文件 ⚠ -->
<!-- 本文档使用脚本从 WeDot 引擎源码仓库生成。 -->
<!-- 生成脚本：https://github.com/WeDot-Engine/WeDot/tree/4.3/doc/tools/make_md.py； -->
<!-- 原文件：https://github.com/WeDot-Engine/WeDot/tree/4.3/doc/classes/SkeletonModification2D.xml。 -->

<div id="_class_skeletonmodification2d"></div>

# SkeletonModification2D

**实验性：** This class may be changed or removed in future versions.

**继承：** [`Resource`](class_resource.md) **<** [`RefCounted`](class_refcounted.md) **<** [`Object`](class_object.md)

**派生：** [`SkeletonModification2DCCDIK`](class_skeletonmodification2dccdik.md), [`SkeletonModification2DFABRIK`](class_skeletonmodification2dfabrik.md), [`SkeletonModification2DJiggle`](class_skeletonmodification2djiggle.md), [`SkeletonModification2DLookAt`](class_skeletonmodification2dlookat.md), [`SkeletonModification2DPhysicalBones`](class_skeletonmodification2dphysicalbones.md), [`SkeletonModification2DStackHolder`](class_skeletonmodification2dstackholder.md), [`SkeletonModification2DTwoBoneIK`](class_skeletonmodification2dtwoboneik.md)

Base class for resources that operate on [`Bone2D`](class_bone2d.md) s in a [`Skeleton2D`](class_skeleton2d.md).

## 描述

This resource provides an interface that can be expanded so code that operates on [`Bone2D`](class_bone2d.md) nodes in a [`Skeleton2D`](class_skeleton2d.md) can be mixed and matched together to create complex interactions.

This is used to provide Godot with a flexible and powerful Inverse Kinematics solution that can be adapted for many different uses.

## 属性

| [`bool`](class_bool.md) | [`enabled`](#class_skeletonmodification2d_property_enabled)               | ``true`` |
| [`int`](class_int.md)   | [`execution_mode`](#class_skeletonmodification2d_property_execution_mode) | ``0``    |

## 方法

| `void`                                                                | [`_draw_editor_gizmo`](#class_skeletonmodification2d_private_method__draw_editor_gizmo) ( ) virtual[^virtual]                                                                                             |
| `void`                                                                | [`_execute`](#class_skeletonmodification2d_private_method__execute) ( delta: [`float`](class_float.md) ) virtual[^virtual]                                                                                |
| `void`                                                                | [`_setup_modification`](#class_skeletonmodification2d_private_method__setup_modification) ( modification_stack: [`SkeletonModificationStack2D`](class_skeletonmodificationstack2d.md) ) virtual[^virtual] |
| [`float`](class_float.md)                                             | [`clamp_angle`](#class_skeletonmodification2d_method_clamp_angle) ( angle: [`float`](class_float.md), min: [`float`](class_float.md), max: [`float`](class_float.md), invert: [`bool`](class_bool.md) )   |
| [`bool`](class_bool.md)                                               | [`get_editor_draw_gizmo`](#class_skeletonmodification2d_method_get_editor_draw_gizmo) ( ) const[^const]                                                                                                   |
| [`bool`](class_bool.md)                                               | [`get_is_setup`](#class_skeletonmodification2d_method_get_is_setup) ( ) const[^const]                                                                                                                     |
| [`SkeletonModificationStack2D`](class_skeletonmodificationstack2d.md) | [`get_modification_stack`](#class_skeletonmodification2d_method_get_modification_stack) ( )                                                                                                               |
| `void`                                                                | [`set_editor_draw_gizmo`](#class_skeletonmodification2d_method_set_editor_draw_gizmo) ( draw_gizmo: [`bool`](class_bool.md) )                                                                             |
| `void`                                                                | [`set_is_setup`](#class_skeletonmodification2d_method_set_is_setup) ( is_setup: [`bool`](class_bool.md) )                                                                                                 |

<!-- rst-class:: classref-section-separator -->

---

## 属性说明

<div id="_class_skeletonmodification2d_property_enabled"></div>

[`bool`](class_bool.md) **enabled** = ``true`` <div id="class_skeletonmodification2d_property_enabled"></div>

- `void` **set_enabled** ( value: [`bool`](class_bool.md) )
- [`bool`](class_bool.md) **get_enabled** ( )

If `true`, the modification's [`_execute`](#class_skeletonmodification2d_private_method__execute) function will be called by the [`SkeletonModificationStack2D`](class_skeletonmodificationstack2d.md).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_skeletonmodification2d_property_execution_mode"></div>

[`int`](class_int.md) **execution_mode** = ``0`` <div id="class_skeletonmodification2d_property_execution_mode"></div>

- `void` **set_execution_mode** ( value: [`int`](class_int.md) )
- [`int`](class_int.md) **get_execution_mode** ( )

The execution mode for the modification. This tells the modification stack when to execute the modification. Some modifications have settings that are only available in certain execution modes.

<!-- rst-class:: classref-section-separator -->

---

## 方法说明

<div id="_class_skeletonmodification2d_private_method__draw_editor_gizmo"></div>

`void` **_draw_editor_gizmo** ( ) virtual[^virtual]<div id="class_skeletonmodification2d_private_method__draw_editor_gizmo"></div>

Used for drawing **editor-only** modification gizmos. This function will only be called in the Godot editor and can be overridden to draw custom gizmos.

 **Note:** You will need to use the Skeleton2D from [`SkeletonModificationStack2D.get_skeleton`](#class_skeletonmodificationstack2d_method_get_skeleton) and it's draw functions, as the **SkeletonModification2D** resource cannot draw on its own.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_skeletonmodification2d_private_method__execute"></div>

`void` **_execute** ( delta: [`float`](class_float.md) ) virtual[^virtual]<div id="class_skeletonmodification2d_private_method__execute"></div>

Executes the given modification. This is where the modification performs whatever function it is designed to do.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_skeletonmodification2d_private_method__setup_modification"></div>

`void` **_setup_modification** ( modification_stack: [`SkeletonModificationStack2D`](class_skeletonmodificationstack2d.md) ) virtual[^virtual]<div id="class_skeletonmodification2d_private_method__setup_modification"></div>

Called when the modification is setup. This is where the modification performs initialization.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_skeletonmodification2d_method_clamp_angle"></div>

[`float`](class_float.md) **clamp_angle** ( angle: [`float`](class_float.md), min: [`float`](class_float.md), max: [`float`](class_float.md), invert: [`bool`](class_bool.md) )<div id="class_skeletonmodification2d_method_clamp_angle"></div>

Takes an angle and clamps it so it is within the passed-in `min` and `max` range. `invert` will inversely clamp the angle, clamping it to the range outside of the given bounds.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_skeletonmodification2d_method_get_editor_draw_gizmo"></div>

[`bool`](class_bool.md) **get_editor_draw_gizmo** ( ) const[^const]<div id="class_skeletonmodification2d_method_get_editor_draw_gizmo"></div>

Returns whether this modification will call [`_draw_editor_gizmo`](#class_skeletonmodification2d_private_method__draw_editor_gizmo) in the Godot editor to draw modification-specific gizmos.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_skeletonmodification2d_method_get_is_setup"></div>

[`bool`](class_bool.md) **get_is_setup** ( ) const[^const]<div id="class_skeletonmodification2d_method_get_is_setup"></div>

Returns whether this modification has been successfully setup or not.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_skeletonmodification2d_method_get_modification_stack"></div>

[`SkeletonModificationStack2D`](class_skeletonmodificationstack2d.md) **get_modification_stack** ( )<div id="class_skeletonmodification2d_method_get_modification_stack"></div>

Returns the [`SkeletonModificationStack2D`](class_skeletonmodificationstack2d.md) that this modification is bound to. Through the modification stack, you can access the Skeleton2D the modification is operating on.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_skeletonmodification2d_method_set_editor_draw_gizmo"></div>

`void` **set_editor_draw_gizmo** ( draw_gizmo: [`bool`](class_bool.md) )<div id="class_skeletonmodification2d_method_set_editor_draw_gizmo"></div>

Sets whether this modification will call [`_draw_editor_gizmo`](#class_skeletonmodification2d_private_method__draw_editor_gizmo) in the Godot editor to draw modification-specific gizmos.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_skeletonmodification2d_method_set_is_setup"></div>

`void` **set_is_setup** ( is_setup: [`bool`](class_bool.md) )<div id="class_skeletonmodification2d_method_set_is_setup"></div>

Manually allows you to set the setup state of the modification. This function should only rarely be used, as the [`SkeletonModificationStack2D`](class_skeletonmodificationstack2d.md) the modification is bound to should handle setting the modification up.

[^virtual]: 本方法通常需要用户覆盖才能生效。
[^const]: 本方法无副作用，不会修改该实例的任何成员变量。
[^vararg]: 本方法除了能接受在此处描述的参数外，还能够继续接受任意数量的参数。
[^constructor]: 本方法用于构造某个类型。
[^static]: 调用本方法无需实例，可直接使用类名进行调用。
[^operator]: 本方法描述的是使用本类型作为左操作数的有效运算符。
[^bitfield]: 这个值是由下列位标志构成位掩码的整数。
[^void]: 无返回值。
