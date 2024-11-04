<!-- ⚠ 请勿编辑本文件 ⚠ -->
<!-- 本文档使用脚本从 WeDot 引擎源码仓库生成。 -->
<!-- 生成脚本：https://github.com/WeDot-Engine/WeDot/tree/4.3/doc/tools/make_md.py； -->
<!-- 原文件：https://github.com/WeDot-Engine/WeDot/tree/4.3/doc/classes/XRControllerTracker.xml。 -->

<div id="_class_xrcontrollertracker"></div>

# XRControllerTracker

**继承：** [`XRPositionalTracker`](class_xrpositionaltracker.md) **<** [`XRTracker`](class_xrtracker.md) **<** [`RefCounted`](class_refcounted.md) **<** [`Object`](class_object.md)

A tracked controller.

## 描述

An instance of this object represents a controller that is tracked.

As controllers are turned on and the [`XRInterface`](class_xrinterface.md) detects them, instances of this object are automatically added to this list of active tracking objects accessible through the [`XRServer`](class_xrserver.md).

The [`XRController3D`](class_xrcontroller3d.md) consumes objects of this type and should be used in your project.

## 属性

| [TrackerType](#enum_xrserver_trackertype) | type | ``2`` (overrides [`XRTracker`](#class_xrtracker_property_type)) |

[^virtual]: 本方法通常需要用户覆盖才能生效。
[^const]: 本方法无副作用，不会修改该实例的任何成员变量。
[^vararg]: 本方法除了能接受在此处描述的参数外，还能够继续接受任意数量的参数。
[^constructor]: 本方法用于构造某个类型。
[^static]: 调用本方法无需实例，可直接使用类名进行调用。
[^operator]: 本方法描述的是使用本类型作为左操作数的有效运算符。
[^bitfield]: 这个值是由下列位标志构成位掩码的整数。
[^void]: 无返回值。
