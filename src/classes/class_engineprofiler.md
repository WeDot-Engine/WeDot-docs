<!-- ⚠ 请勿编辑本文件 ⚠ -->
<!-- 本文档使用脚本从 WeDot 引擎源码仓库生成。 -->
<!-- 生成脚本：https://github.com/WeDot-Engine/WeDot/tree/master/doc/tools/make_md.py； -->
<!-- 原文件：https://github.com/WeDot-Engine/WeDot/tree/master/doc/classes/EngineProfiler.xml。 -->

<div id="_class_engineprofiler"></div>

# EngineProfiler

**继承：** [`RefCounted`](class_refcounted.md) **<** [`Object`](class_object.md)

Base class for creating custom profilers.

## 描述

This class can be used to implement custom profilers that are able to interact with the engine and editor debugger.

See [`EngineDebugger`](class_enginedebugger.md) and [`EditorDebuggerPlugin`](class_editordebuggerplugin.md) for more information.

## 方法

|||
|:-:|:--|
| `void` | [`_add_frame`](class_engineprofiler.md#class_engineprofiler_private_method__add_frame) ( data: [`Array`](class_array.md) ) virtual[^virtual]                                                                                                                              |
| `void` | [`_tick`](class_engineprofiler.md#class_engineprofiler_private_method__tick) ( frame_time: [`float`](class_float.md), process_time: [`float`](class_float.md), physics_time: [`float`](class_float.md), physics_frame_time: [`float`](class_float.md) ) virtual[^virtual] |
| `void` | [`_toggle`](class_engineprofiler.md#class_engineprofiler_private_method__toggle) ( enable: [`bool`](class_bool.md), options: [`Array`](class_array.md) ) virtual[^virtual]                                                                                                |

<!-- rst-class:: classref-section-separator -->

---

## 方法说明

<div id="_class_engineprofiler_private_method__add_frame"></div>

`void` **_add_frame** ( data: [`Array`](class_array.md) ) virtual[^virtual]<div id="class_engineprofiler_private_method__add_frame"></div>

Called when data is added to profiler using [`EngineDebugger.profiler_add_frame_data`](class_enginedebugger.md#class_enginedebugger_method_profiler_add_frame_data).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_engineprofiler_private_method__tick"></div>

`void` **_tick** ( frame_time: [`float`](class_float.md), process_time: [`float`](class_float.md), physics_time: [`float`](class_float.md), physics_frame_time: [`float`](class_float.md) ) virtual[^virtual]<div id="class_engineprofiler_private_method__tick"></div>

Called once every engine iteration when the profiler is active with information about the current frame. All time values are in seconds. Lower values represent faster processing times and are therefore considered better.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_engineprofiler_private_method__toggle"></div>

`void` **_toggle** ( enable: [`bool`](class_bool.md), options: [`Array`](class_array.md) ) virtual[^virtual]<div id="class_engineprofiler_private_method__toggle"></div>

Called when the profiler is enabled/disabled, along with a set of `options`.

[^virtual]: 本方法通常需要用户覆盖才能生效。
[^const]: 本方法无副作用，不会修改该实例的任何成员变量。
[^vararg]: 本方法除了能接受在此处描述的参数外，还能够继续接受任意数量的参数。
[^constructor]: 本方法用于构造某个类型。
[^static]: 调用本方法无需实例，可直接使用类名进行调用。
[^operator]: 本方法描述的是使用本类型作为左操作数的有效运算符。
[^bitfield]: 这个值是由下列位标志构成位掩码的整数。
[^void]: 无返回值。
