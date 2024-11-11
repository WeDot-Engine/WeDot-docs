<!-- ⚠ 请勿编辑本文件 ⚠ -->
<!-- 本文档使用脚本从 WeDot 引擎源码仓库生成。 -->
<!-- 生成脚本：https://github.com/WeDot-Engine/WeDot/tree/master/doc/tools/make_md.py； -->
<!-- 原文件：https://github.com/WeDot-Engine/WeDot/tree/master/doc/classes/AnimationRootNode.xml。 -->

<div id="_class_animationrootnode"></div>

# AnimationRootNode

**继承：** [`AnimationNode`](class_animationnode.md) **<** [`Resource`](class_resource.md) **<** [`RefCounted`](class_refcounted.md) **<** [`Object`](class_object.md)

**派生：** [`AnimationNodeAnimation`](class_animationnodeanimation.md), [`AnimationNodeBlendSpace1D`](class_animationnodeblendspace1d.md), [`AnimationNodeBlendSpace2D`](class_animationnodeblendspace2d.md), [`AnimationNodeBlendTree`](class_animationnodeblendtree.md), [`AnimationNodeStateMachine`](class_animationnodestatemachine.md)

Base class for [`AnimationNode`](class_animationnode.md) s that hold one or multiple composite animations. Usually used for [`AnimationTree.tree_root`](class_animationtree.md#class_animationtree_property_tree_root).

## 描述

**AnimationRootNode** is a base class for [`AnimationNode`](class_animationnode.md) s that hold a complete animation. A complete animation refers to the output of an [`AnimationNodeOutput`](class_animationnodeoutput.md) in an [`AnimationNodeBlendTree`](class_animationnodeblendtree.md) or the output of another **AnimationRootNode**. Used for [`AnimationTree.tree_root`](class_animationtree.md#class_animationtree_property_tree_root) or in other **AnimationRootNode** s.

Examples of built-in root nodes include [`AnimationNodeBlendTree`](class_animationnodeblendtree.md) (allows blending nodes between each other using various modes), [`AnimationNodeStateMachine`](class_animationnodestatemachine.md) (allows to configure blending and transitions between nodes using a state machine pattern), [`AnimationNodeBlendSpace2D`](class_animationnodeblendspace2d.md) (allows linear blending between **three** [`AnimationNode`](class_animationnode.md) s), [`AnimationNodeBlendSpace1D`](class_animationnodeblendspace1d.md) (allows linear blending only between **two** [`AnimationNode`](class_animationnode.md) s).

[^virtual]: 本方法通常需要用户覆盖才能生效。
[^const]: 本方法无副作用，不会修改该实例的任何成员变量。
[^vararg]: 本方法除了能接受在此处描述的参数外，还能够继续接受任意数量的参数。
[^constructor]: 本方法用于构造某个类型。
[^static]: 调用本方法无需实例，可直接使用类名进行调用。
[^operator]: 本方法描述的是使用本类型作为左操作数的有效运算符。
[^bitfield]: 这个值是由下列位标志构成位掩码的整数。
[^void]: 无返回值。
