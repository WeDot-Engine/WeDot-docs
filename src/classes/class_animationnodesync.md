<!-- ⚠ 请勿编辑本文件 ⚠ -->
<!-- 本文档使用脚本从 WeDot 引擎源码仓库生成。 -->
<!-- 生成脚本：https://github.com/WeDot-Engine/WeDot/tree/4.3/doc/tools/make_md.py； -->
<!-- 原文件：https://github.com/WeDot-Engine/WeDot/tree/4.3/doc/classes/AnimationNodeSync.xml。 -->

<div id="_class_animationnodesync"></div>

# AnimationNodeSync

**继承：** [`AnimationNode`](class_animationnode.md) **<** [`Resource`](class_resource.md) **<** [`RefCounted`](class_refcounted.md) **<** [`Object`](class_object.md)

**派生：** [`AnimationNodeAdd2`](class_animationnodeadd2.md), [`AnimationNodeAdd3`](class_animationnodeadd3.md), [`AnimationNodeBlend2`](class_animationnodeblend2.md), [`AnimationNodeBlend3`](class_animationnodeblend3.md), [`AnimationNodeOneShot`](class_animationnodeoneshot.md), [`AnimationNodeSub2`](class_animationnodesub2.md), [`AnimationNodeTransition`](class_animationnodetransition.md)

Base class for [`AnimationNode`](class_animationnode.md) s with multiple input ports that must be synchronized.

## 描述

An animation node used to combine, mix, or blend two or more animations together while keeping them synchronized within an [`AnimationTree`](class_animationtree.md).

## 属性

| [`bool`](class_bool.md) | [`sync`](#class_animationnodesync_property_sync) | ``false`` |

<!-- rst-class:: classref-section-separator -->

---

## 属性说明

<div id="_class_animationnodesync_property_sync"></div>

[`bool`](class_bool.md) **sync** = ``false`` <div id="class_animationnodesync_property_sync"></div>

- `void` **set_use_sync** ( value: [`bool`](class_bool.md) )
- [`bool`](class_bool.md) **is_using_sync** ( )

If `false`, the blended animations' frame are stopped when the blend value is `0`.

If `true`, forcing the blended animations to advance frame.

[^virtual]: 本方法通常需要用户覆盖才能生效。
[^const]: 本方法无副作用，不会修改该实例的任何成员变量。
[^vararg]: 本方法除了能接受在此处描述的参数外，还能够继续接受任意数量的参数。
[^constructor]: 本方法用于构造某个类型。
[^static]: 调用本方法无需实例，可直接使用类名进行调用。
[^operator]: 本方法描述的是使用本类型作为左操作数的有效运算符。
[^bitfield]: 这个值是由下列位标志构成位掩码的整数。
[^void]: 无返回值。
