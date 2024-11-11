<!-- ⚠ 请勿编辑本文件 ⚠ -->
<!-- 本文档使用脚本从 WeDot 引擎源码仓库生成。 -->
<!-- 生成脚本：https://github.com/WeDot-Engine/WeDot/tree/master/doc/tools/make_md.py； -->
<!-- 原文件：https://github.com/WeDot-Engine/WeDot/tree/master/doc/classes/VisualShaderNodeGlobalExpression.xml。 -->

<div id="_class_visualshadernodeglobalexpression"></div>

# VisualShaderNodeGlobalExpression

**继承：** [`VisualShaderNodeExpression`](class_visualshadernodeexpression.md) **<** [`VisualShaderNodeGroupBase`](class_visualshadernodegroupbase.md) **<** [`VisualShaderNodeResizableBase`](class_visualshadernoderesizablebase.md) **<** [`VisualShaderNode`](class_visualshadernode.md) **<** [`Resource`](class_resource.md) **<** [`RefCounted`](class_refcounted.md) **<** [`Object`](class_object.md)

A custom global visual shader graph expression written in Godot Shading Language.

## 描述

Custom Godot Shader Language expression, which is placed on top of the generated shader. You can place various function definitions inside to call later in [`VisualShaderNodeExpression`](class_visualshadernodeexpression.md) s (which are injected in the main shader functions). You can also declare varyings, uniforms and global constants.

[^virtual]: 本方法通常需要用户覆盖才能生效。
[^const]: 本方法无副作用，不会修改该实例的任何成员变量。
[^vararg]: 本方法除了能接受在此处描述的参数外，还能够继续接受任意数量的参数。
[^constructor]: 本方法用于构造某个类型。
[^static]: 调用本方法无需实例，可直接使用类名进行调用。
[^operator]: 本方法描述的是使用本类型作为左操作数的有效运算符。
[^bitfield]: 这个值是由下列位标志构成位掩码的整数。
[^void]: 无返回值。
