<!-- ⚠ 请勿编辑本文件 ⚠ -->
<!-- 本文档使用脚本从 WeDot 引擎源码仓库生成。 -->
<!-- 生成脚本：https://github.com/WeDot-Engine/WeDot/tree/4.3/doc/tools/make_md.py； -->
<!-- 原文件：https://github.com/WeDot-Engine/WeDot/tree/4.3/doc/classes/LightmapProbe.xml。 -->

<div id="_class_lightmapprobe"></div>

# LightmapProbe

**继承：** [`Node3D`](class_node3d.md) **<** [`Node`](class_node.md) **<** [`Object`](class_object.md)

Represents a single manually placed probe for dynamic object lighting with [`LightmapGI`](class_lightmapgi.md).

## 描述

**LightmapProbe** represents the position of a single manually placed probe for dynamic object lighting with [`LightmapGI`](class_lightmapgi.md). Lightmap probes affect the lighting of [`GeometryInstance3D`](class_geometryinstance3d.md)-derived nodes that have their [`GeometryInstance3D.gi_mode`](#class_geometryinstance3d_property_gi_mode) set to [`GeometryInstance3D.GI_MODE_DYNAMIC`](#class_geometryinstance3d_constant_gi_mode_dynamic).

Typically, [`LightmapGI`](class_lightmapgi.md) probes are placed automatically by setting [`LightmapGI.generate_probes_subdiv`](#class_lightmapgi_property_generate_probes_subdiv) to a value other than [`LightmapGI.GENERATE_PROBES_DISABLED`](#class_lightmapgi_constant_generate_probes_disabled). By creating **LightmapProbe** nodes before baking lightmaps, you can add more probes in specific areas for greater detail, or disable automatic generation and rely only on manually placed probes instead.

 **Note:** **LightmapProbe** nodes that are placed after baking lightmaps are ignored by dynamic objects. You must bake lightmaps again after creating or modifying **LightmapProbe** s for the probes to be effective.

[^virtual]: 本方法通常需要用户覆盖才能生效。
[^const]: 本方法无副作用，不会修改该实例的任何成员变量。
[^vararg]: 本方法除了能接受在此处描述的参数外，还能够继续接受任意数量的参数。
[^constructor]: 本方法用于构造某个类型。
[^static]: 调用本方法无需实例，可直接使用类名进行调用。
[^operator]: 本方法描述的是使用本类型作为左操作数的有效运算符。
[^bitfield]: 这个值是由下列位标志构成位掩码的整数。
[^void]: 无返回值。
