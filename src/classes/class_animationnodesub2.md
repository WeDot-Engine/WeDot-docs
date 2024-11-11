<!-- ⚠ 请勿编辑本文件 ⚠ -->
<!-- 本文档使用脚本从 WeDot 引擎源码仓库生成。 -->
<!-- 生成脚本：https://github.com/WeDot-Engine/WeDot/tree/master/doc/tools/make_md.py； -->
<!-- 原文件：https://github.com/WeDot-Engine/WeDot/tree/master/doc/classes/AnimationNodeSub2.xml。 -->

<div id="_class_animationnodesub2"></div>

# AnimationNodeSub2

**继承：** [`AnimationNodeSync`](class_animationnodesync.md) **<** [`AnimationNode`](class_animationnode.md) **<** [`Resource`](class_resource.md) **<** [`RefCounted`](class_refcounted.md) **<** [`Object`](class_object.md)

Blends two animations subtractively inside of an [`AnimationNodeBlendTree`](class_animationnodeblendtree.md).

## 描述

A resource to add to an [`AnimationNodeBlendTree`](class_animationnodeblendtree.md). Blends two animations subtractively based on the amount value.

This animation node is usually used for pre-calculation to cancel out any extra poses from the animation for the "add" animation source in [`AnimationNodeAdd2`](class_animationnodeadd2.md) or [`AnimationNodeAdd3`](class_animationnodeadd3.md).

In general, the blend value should be in the `[0.0, 1.0]` range, but values outside of this range can be used for amplified or inverted animations.

 **Note:** This calculation is different from using a negative value in [`AnimationNodeAdd2`](class_animationnodeadd2.md), since the transformation matrices do not satisfy the commutative law. **AnimationNodeSub2** multiplies the transformation matrix of the inverted animation from the left side, while negative [`AnimationNodeAdd2`](class_animationnodeadd2.md) multiplies it from the right side.

[^virtual]: 本方法通常需要用户覆盖才能生效。
[^const]: 本方法无副作用，不会修改该实例的任何成员变量。
[^vararg]: 本方法除了能接受在此处描述的参数外，还能够继续接受任意数量的参数。
[^constructor]: 本方法用于构造某个类型。
[^static]: 调用本方法无需实例，可直接使用类名进行调用。
[^operator]: 本方法描述的是使用本类型作为左操作数的有效运算符。
[^bitfield]: 这个值是由下列位标志构成位掩码的整数。
[^void]: 无返回值。
