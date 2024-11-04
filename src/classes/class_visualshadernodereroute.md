<!-- ⚠ 请勿编辑本文件 ⚠ -->
<!-- 本文档使用脚本从 WeDot 引擎源码仓库生成。 -->
<!-- 生成脚本：https://github.com/WeDot-Engine/WeDot/tree/4.3/doc/tools/make_md.py； -->
<!-- 原文件：https://github.com/WeDot-Engine/WeDot/tree/4.3/doc/classes/VisualShaderNodeReroute.xml。 -->

<div id="_class_visualshadernodereroute"></div>

# VisualShaderNodeReroute

**继承：** [`VisualShaderNode`](class_visualshadernode.md) **<** [`Resource`](class_resource.md) **<** [`RefCounted`](class_refcounted.md) **<** [`Object`](class_object.md)

A node that allows rerouting a connection within the visual shader graph.

## 描述

Automatically adapts its port type to the type of the incoming connection and ensures valid connections.

## 方法

| [PortType](#enum_visualshadernode_porttype) | [`get_port_type`](#class_visualshadernodereroute_method_get_port_type) ( ) const[^const] |

<!-- rst-class:: classref-section-separator -->

---

## 方法说明

<div id="_class_visualshadernodereroute_method_get_port_type"></div>

[PortType](#enum_visualshadernode_porttype) **get_port_type** ( ) const[^const]<div id="class_visualshadernodereroute_method_get_port_type"></div>

Returns the port type of the reroute node.

[^virtual]: 本方法通常需要用户覆盖才能生效。
[^const]: 本方法无副作用，不会修改该实例的任何成员变量。
[^vararg]: 本方法除了能接受在此处描述的参数外，还能够继续接受任意数量的参数。
[^constructor]: 本方法用于构造某个类型。
[^static]: 调用本方法无需实例，可直接使用类名进行调用。
[^operator]: 本方法描述的是使用本类型作为左操作数的有效运算符。
[^bitfield]: 这个值是由下列位标志构成位掩码的整数。
[^void]: 无返回值。
