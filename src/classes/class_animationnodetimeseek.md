<!-- ⚠ 请勿编辑本文件 ⚠ -->
<!-- 本文档使用脚本从 WeDot 引擎源码仓库生成。 -->
<!-- 生成脚本：https://github.com/WeDot-Engine/WeDot/tree/4.3/doc/tools/make_md.py； -->
<!-- 原文件：https://github.com/WeDot-Engine/WeDot/tree/4.3/doc/classes/AnimationNodeTimeSeek.xml。 -->

<div id="_class_animationnodetimeseek"></div>

# AnimationNodeTimeSeek

**继承：** [`AnimationNode`](class_animationnode.md) **<** [`Resource`](class_resource.md) **<** [`RefCounted`](class_refcounted.md) **<** [`Object`](class_object.md)

A time-seeking animation node used in [`AnimationTree`](class_animationtree.md).

## 描述

This animation node can be used to cause a seek command to happen to any sub-children of the animation graph. Use to play an [`Animation`](class_animation.md) from the start or a certain playback position inside the [`AnimationNodeBlendTree`](class_animationnodeblendtree.md).

After setting the time and changing the animation playback, the time seek node automatically goes into sleep mode on the next process frame by setting its `seek_request` value to `-1.0`.



```gdscript

    # Play child animation from the start.
    animation_tree.set("parameters/TimeSeek/seek_request", 0.0)
    # Alternative syntax (same result as above).
    animation_tree["parameters/TimeSeek/seek_request"] = 0.0
    
    # Play child animation from 12 second timestamp.
    animation_tree.set("parameters/TimeSeek/seek_request", 12.0)
    # Alternative syntax (same result as above).
    animation_tree["parameters/TimeSeek/seek_request"] = 12.0
```

```csharp

    // Play child animation from the start.
    animationTree.Set("parameters/TimeSeek/seek_request", 0.0);
    
    // Play child animation from 12 second timestamp.
    animationTree.Set("parameters/TimeSeek/seek_request", 12.0);
```







[^virtual]: 本方法通常需要用户覆盖才能生效。
[^const]: 本方法无副作用，不会修改该实例的任何成员变量。
[^vararg]: 本方法除了能接受在此处描述的参数外，还能够继续接受任意数量的参数。
[^constructor]: 本方法用于构造某个类型。
[^static]: 调用本方法无需实例，可直接使用类名进行调用。
[^operator]: 本方法描述的是使用本类型作为左操作数的有效运算符。
[^bitfield]: 这个值是由下列位标志构成位掩码的整数。
[^void]: 无返回值。
