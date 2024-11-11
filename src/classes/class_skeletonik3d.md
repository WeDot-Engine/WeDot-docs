<!-- ⚠ 请勿编辑本文件 ⚠ -->
<!-- 本文档使用脚本从 WeDot 引擎源码仓库生成。 -->
<!-- 生成脚本：https://github.com/WeDot-Engine/WeDot/tree/master/doc/tools/make_md.py； -->
<!-- 原文件：https://github.com/WeDot-Engine/WeDot/tree/master/doc/classes/SkeletonIK3D.xml。 -->

<div id="_class_skeletonik3d"></div>

# SkeletonIK3D

**已弃用：** This class may be changed or removed in future versions.

**继承：** [`SkeletonModifier3D`](class_skeletonmodifier3d.md) **<** [`Node3D`](class_node3d.md) **<** [`Node`](class_node.md) **<** [`Object`](class_object.md)

A node used to rotate all bones of a [`Skeleton3D`](class_skeleton3d.md) bone chain a way that places the end bone at a desired 3D position.

## 描述

SkeletonIK3D is used to rotate all bones of a [`Skeleton3D`](class_skeleton3d.md) bone chain a way that places the end bone at a desired 3D position. A typical scenario for IK in games is to place a character's feet on the ground or a character's hands on a currently held object. SkeletonIK uses FabrikInverseKinematic internally to solve the bone chain and applies the results to the [`Skeleton3D`](class_skeleton3d.md) `bones_global_pose_override` property for all affected bones in the chain. If fully applied, this overwrites any bone transform from [`Animation`](class_animation.md) s or bone custom poses set by users. The applied amount can be controlled with the [`SkeletonModifier3D.influence`](class_skeletonmodifier3d.md#class_skeletonmodifier3d_property_influence) property.

```

    # Apply IK effect automatically on every new frame (not the current)
    skeleton_ik_node.start()
    
    # Apply IK effect only on the current frame
    skeleton_ik_node.start(true)
    
    # Stop IK effect and reset bones_global_pose_override on Skeleton
    skeleton_ik_node.stop()
    
    # Apply full IK effect
    skeleton_ik_node.set_influence(1.0)
    
    # Apply half IK effect
    skeleton_ik_node.set_influence(0.5)
    
    # Apply zero IK effect (a value at or below 0.01 also removes bones_global_pose_override on Skeleton)
    skeleton_ik_node.set_influence(0.0)
```



## 属性

|||
|:-:|:--|
| [`float`](class_float.md)             | [`interpolation`](class_skeletonik3d.md#class_skeletonik3d_property_interpolation)           |                                                     |
| [`Vector3`](class_vector3.md)         | [`magnet`](class_skeletonik3d.md#class_skeletonik3d_property_magnet)                         | ``Vector3(0, 0, 0)``                                |
| [`int`](class_int.md)                 | [`max_iterations`](class_skeletonik3d.md#class_skeletonik3d_property_max_iterations)         | ``10``                                              |
| [`float`](class_float.md)             | [`min_distance`](class_skeletonik3d.md#class_skeletonik3d_property_min_distance)             | ``0.01``                                            |
| [`bool`](class_bool.md)               | [`override_tip_basis`](class_skeletonik3d.md#class_skeletonik3d_property_override_tip_basis) | ``true``                                            |
| [`StringName`](class_stringname.md)   | [`root_bone`](class_skeletonik3d.md#class_skeletonik3d_property_root_bone)                   | ``&""``                                             |
| [`Transform3D`](class_transform3d.md) | [`target`](class_skeletonik3d.md#class_skeletonik3d_property_target)                         | ``Transform3D(1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0)`` |
| [`NodePath`](class_nodepath.md)       | [`target_node`](class_skeletonik3d.md#class_skeletonik3d_property_target_node)               | ``NodePath("")``                                    |
| [`StringName`](class_stringname.md)   | [`tip_bone`](class_skeletonik3d.md#class_skeletonik3d_property_tip_bone)                     | ``&""``                                             |
| [`bool`](class_bool.md)               | [`use_magnet`](class_skeletonik3d.md#class_skeletonik3d_property_use_magnet)                 | ``false``                                           |

## 方法

|||
|:-:|:--|
| [`Skeleton3D`](class_skeleton3d.md) | [`get_parent_skeleton`](class_skeletonik3d.md#class_skeletonik3d_method_get_parent_skeleton) ( ) const[^const] |
| [`bool`](class_bool.md)             | [`is_running`](class_skeletonik3d.md#class_skeletonik3d_method_is_running) ( )                                 |
| `void`                              | [`start`](class_skeletonik3d.md#class_skeletonik3d_method_start) ( one_time: [`bool`](class_bool.md) = false ) |
| `void`                              | [`stop`](class_skeletonik3d.md#class_skeletonik3d_method_stop) ( )                                             |

<!-- rst-class:: classref-section-separator -->

---

## 属性说明

<div id="_class_skeletonik3d_property_interpolation"></div>

[`float`](class_float.md) **interpolation** <div id="class_skeletonik3d_property_interpolation"></div>

- `void` **set_interpolation** ( value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_interpolation** ( )

**已弃用：** Use [`SkeletonModifier3D.influence`](class_skeletonmodifier3d.md#class_skeletonmodifier3d_property_influence) instead.

Interpolation value for how much the IK results are applied to the current skeleton bone chain. A value of `1.0` will overwrite all skeleton bone transforms completely while a value of `0.0` will visually disable the SkeletonIK.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_skeletonik3d_property_magnet"></div>

[`Vector3`](class_vector3.md) **magnet** = ``Vector3(0, 0, 0)`` <div id="class_skeletonik3d_property_magnet"></div>

- `void` **set_magnet_position** ( value: [`Vector3`](class_vector3.md) )
- [`Vector3`](class_vector3.md) **get_magnet_position** ( )

Secondary target position (first is [`target`](class_skeletonik3d.md#class_skeletonik3d_property_target) property or [`target_node`](class_skeletonik3d.md#class_skeletonik3d_property_target_node)) for the IK chain. Use magnet position (pole target) to control the bending of the IK chain. Only works if the bone chain has more than 2 bones. The middle chain bone position will be linearly interpolated with the magnet position.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_skeletonik3d_property_max_iterations"></div>

[`int`](class_int.md) **max_iterations** = ``10`` <div id="class_skeletonik3d_property_max_iterations"></div>

- `void` **set_max_iterations** ( value: [`int`](class_int.md) )
- [`int`](class_int.md) **get_max_iterations** ( )

Number of iteration loops used by the IK solver to produce more accurate (and elegant) bone chain results.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_skeletonik3d_property_min_distance"></div>

[`float`](class_float.md) **min_distance** = ``0.01`` <div id="class_skeletonik3d_property_min_distance"></div>

- `void` **set_min_distance** ( value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_min_distance** ( )

The minimum distance between bone and goal target. If the distance is below this value, the IK solver stops further iterations.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_skeletonik3d_property_override_tip_basis"></div>

[`bool`](class_bool.md) **override_tip_basis** = ``true`` <div id="class_skeletonik3d_property_override_tip_basis"></div>

- `void` **set_override_tip_basis** ( value: [`bool`](class_bool.md) )
- [`bool`](class_bool.md) **is_override_tip_basis** ( )

If `true` overwrites the rotation of the tip bone with the rotation of the [`target`](class_skeletonik3d.md#class_skeletonik3d_property_target) (or [`target_node`](class_skeletonik3d.md#class_skeletonik3d_property_target_node) if defined).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_skeletonik3d_property_root_bone"></div>

[`StringName`](class_stringname.md) **root_bone** = ``&""`` <div id="class_skeletonik3d_property_root_bone"></div>

- `void` **set_root_bone** ( value: [`StringName`](class_stringname.md) )
- [`StringName`](class_stringname.md) **get_root_bone** ( )

The name of the current root bone, the first bone in the IK chain.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_skeletonik3d_property_target"></div>

[`Transform3D`](class_transform3d.md) **target** = ``Transform3D(1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0)`` <div id="class_skeletonik3d_property_target"></div>

- `void` **set_target_transform** ( value: [`Transform3D`](class_transform3d.md) )
- [`Transform3D`](class_transform3d.md) **get_target_transform** ( )

First target of the IK chain where the tip bone is placed and, if [`override_tip_basis`](class_skeletonik3d.md#class_skeletonik3d_property_override_tip_basis) is `true`, how the tip bone is rotated. If a [`target_node`](class_skeletonik3d.md#class_skeletonik3d_property_target_node) path is available the nodes transform is used instead and this property is ignored.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_skeletonik3d_property_target_node"></div>

[`NodePath`](class_nodepath.md) **target_node** = ``NodePath("")`` <div id="class_skeletonik3d_property_target_node"></div>

- `void` **set_target_node** ( value: [`NodePath`](class_nodepath.md) )
- [`NodePath`](class_nodepath.md) **get_target_node** ( )

Target node [`NodePath`](class_nodepath.md) for the IK chain. If available, the node's current [`Transform3D`](class_transform3d.md) is used instead of the [`target`](class_skeletonik3d.md#class_skeletonik3d_property_target) property.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_skeletonik3d_property_tip_bone"></div>

[`StringName`](class_stringname.md) **tip_bone** = ``&""`` <div id="class_skeletonik3d_property_tip_bone"></div>

- `void` **set_tip_bone** ( value: [`StringName`](class_stringname.md) )
- [`StringName`](class_stringname.md) **get_tip_bone** ( )

The name of the current tip bone, the last bone in the IK chain placed at the [`target`](class_skeletonik3d.md#class_skeletonik3d_property_target) transform (or [`target_node`](class_skeletonik3d.md#class_skeletonik3d_property_target_node) if defined).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_skeletonik3d_property_use_magnet"></div>

[`bool`](class_bool.md) **use_magnet** = ``false`` <div id="class_skeletonik3d_property_use_magnet"></div>

- `void` **set_use_magnet** ( value: [`bool`](class_bool.md) )
- [`bool`](class_bool.md) **is_using_magnet** ( )

If `true`, instructs the IK solver to consider the secondary magnet target (pole target) when calculating the bone chain. Use the magnet position (pole target) to control the bending of the IK chain.

<!-- rst-class:: classref-section-separator -->

---

## 方法说明

<div id="_class_skeletonik3d_method_get_parent_skeleton"></div>

[`Skeleton3D`](class_skeleton3d.md) **get_parent_skeleton** ( ) const[^const]<div id="class_skeletonik3d_method_get_parent_skeleton"></div>

Returns the parent [`Skeleton3D`](class_skeleton3d.md) Node that was present when SkeletonIK entered the [`SceneTree`](class_scenetree.md). Returns null if the parent node was not a [`Skeleton3D`](class_skeleton3d.md) Node when SkeletonIK3D entered the [`SceneTree`](class_scenetree.md).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_skeletonik3d_method_is_running"></div>

[`bool`](class_bool.md) **is_running** ( )<div id="class_skeletonik3d_method_is_running"></div>

Returns `true` if SkeletonIK is applying IK effects on continues frames to the [`Skeleton3D`](class_skeleton3d.md) bones. Returns `false` if SkeletonIK is stopped or [`start`](class_skeletonik3d.md#class_skeletonik3d_method_start) was used with the `one_time` parameter set to `true`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_skeletonik3d_method_start"></div>

`void` **start** ( one_time: [`bool`](class_bool.md) = false )<div id="class_skeletonik3d_method_start"></div>

Starts applying IK effects on each frame to the [`Skeleton3D`](class_skeleton3d.md) bones but will only take effect starting on the next frame. If `one_time` is `true`, this will take effect immediately but also reset on the next frame.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_skeletonik3d_method_stop"></div>

`void` **stop** ( )<div id="class_skeletonik3d_method_stop"></div>

Stops applying IK effects on each frame to the [`Skeleton3D`](class_skeleton3d.md) bones and also calls [`Skeleton3D.clear_bones_global_pose_override`](class_skeleton3d.md#class_skeleton3d_method_clear_bones_global_pose_override) to remove existing overrides on all bones.

[^virtual]: 本方法通常需要用户覆盖才能生效。
[^const]: 本方法无副作用，不会修改该实例的任何成员变量。
[^vararg]: 本方法除了能接受在此处描述的参数外，还能够继续接受任意数量的参数。
[^constructor]: 本方法用于构造某个类型。
[^static]: 调用本方法无需实例，可直接使用类名进行调用。
[^operator]: 本方法描述的是使用本类型作为左操作数的有效运算符。
[^bitfield]: 这个值是由下列位标志构成位掩码的整数。
[^void]: 无返回值。
