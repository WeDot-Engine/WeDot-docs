<!-- ⚠ 请勿编辑本文件 ⚠ -->
<!-- 本文档使用脚本从 WeDot 引擎源码仓库生成。 -->
<!-- 生成脚本：https://github.com/WeDot-Engine/WeDot/tree/4.3/doc/tools/make_md.py； -->
<!-- 原文件：https://github.com/WeDot-Engine/WeDot/tree/4.3/doc/classes/SkeletonProfileHumanoid.xml。 -->

<div id="_class_skeletonprofilehumanoid"></div>

# SkeletonProfileHumanoid

**继承：** [`SkeletonProfile`](class_skeletonprofile.md) **<** [`Resource`](class_resource.md) **<** [`RefCounted`](class_refcounted.md) **<** [`Object`](class_object.md)

A humanoid [`SkeletonProfile`](class_skeletonprofile.md) preset.

## 描述

A [`SkeletonProfile`](class_skeletonprofile.md) as a preset that is optimized for the human form. This exists for standardization, so all parameters are read-only.

A humanoid skeleton profile contains 54 bones divided in 4 groups: `"Body"`, `"Face"`, `"LeftHand"`, and `"RightHand"`. It is structured as follows:

```text

    Root
    └─ Hips
        ├─ LeftUpperLeg
        │  └─ LeftLowerLeg
        │     └─ LeftFoot
        │        └─ LeftToes
        ├─ RightUpperLeg
        │  └─ RightLowerLeg
        │     └─ RightFoot
        │        └─ RightToes
        └─ Spine
            └─ Chest
                └─ UpperChest
                    ├─ Neck
                    │   └─ Head
                    │       ├─ Jaw
                    │       ├─ LeftEye
                    │       └─ RightEye
                    ├─ LeftShoulder
                    │  └─ LeftUpperArm
                    │     └─ LeftLowerArm
                    │        └─ LeftHand
                    │           ├─ LeftThumbMetacarpal
                    │           │  └─ LeftThumbProximal
                    │           ├─ LeftIndexProximal
                    │           │  └─ LeftIndexIntermediate
                    │           │    └─ LeftIndexDistal
                    │           ├─ LeftMiddleProximal
                    │           │  └─ LeftMiddleIntermediate
                    │           │    └─ LeftMiddleDistal
                    │           ├─ LeftRingProximal
                    │           │  └─ LeftRingIntermediate
                    │           │    └─ LeftRingDistal
                    │           └─ LeftLittleProximal
                    │              └─ LeftLittleIntermediate
                    │                └─ LeftLittleDistal
                    └─ RightShoulder
                       └─ RightUpperArm
                          └─ RightLowerArm
                             └─ RightHand
                                ├─ RightThumbMetacarpal
                                │  └─ RightThumbProximal
                                ├─ RightIndexProximal
                                │  └─ RightIndexIntermediate
                                │     └─ RightIndexDistal
                                ├─ RightMiddleProximal
                                │  └─ RightMiddleIntermediate
                                │     └─ RightMiddleDistal
                                ├─ RightRingProximal
                                │  └─ RightRingIntermediate
                                │     └─ RightRingDistal
                                └─ RightLittleProximal
                                   └─ RightLittleIntermediate
                                     └─ RightLittleDistal
```



## 属性

| [`int`](class_int.md)               | bone_size       | ``56`` (overrides [`SkeletonProfile`](#class_skeletonprofile_property_bone_size))            |
| [`int`](class_int.md)               | group_size      | ``4`` (overrides [`SkeletonProfile`](#class_skeletonprofile_property_group_size))            |
| [`StringName`](class_stringname.md) | root_bone       | ``&"Root"`` (overrides [`SkeletonProfile`](#class_skeletonprofile_property_root_bone))       |
| [`StringName`](class_stringname.md) | scale_base_bone | ``&"Hips"`` (overrides [`SkeletonProfile`](#class_skeletonprofile_property_scale_base_bone)) |

[^virtual]: 本方法通常需要用户覆盖才能生效。
[^const]: 本方法无副作用，不会修改该实例的任何成员变量。
[^vararg]: 本方法除了能接受在此处描述的参数外，还能够继续接受任意数量的参数。
[^constructor]: 本方法用于构造某个类型。
[^static]: 调用本方法无需实例，可直接使用类名进行调用。
[^operator]: 本方法描述的是使用本类型作为左操作数的有效运算符。
[^bitfield]: 这个值是由下列位标志构成位掩码的整数。
[^void]: 无返回值。
