<!-- ⚠ 请勿编辑本文件 ⚠ -->
<!-- 本文档使用脚本从 WeDot 引擎源码仓库生成。 -->
<!-- 生成脚本：https://github.com/WeDot-Engine/WeDot/tree/4.3/doc/tools/make_md.py； -->
<!-- 原文件：https://github.com/WeDot-Engine/WeDot/tree/4.3/modules/interactive_music/doc_classes/AudioStreamPlaybackInteractive.xml。 -->

<div id="_class_audiostreamplaybackinteractive"></div>

# AudioStreamPlaybackInteractive

**继承：** [`AudioStreamPlayback`](class_audiostreamplayback.md) **<** [`RefCounted`](class_refcounted.md) **<** [`Object`](class_object.md)

Playback component of [`AudioStreamInteractive`](class_audiostreaminteractive.md).

## 描述

Playback component of [`AudioStreamInteractive`](class_audiostreaminteractive.md). Contains functions to change the currently played clip.

## 方法

| `void` | [`switch_to_clip`](#class_audiostreamplaybackinteractive_method_switch_to_clip) ( clip_index: [`int`](class_int.md) )                              |
| `void` | [`switch_to_clip_by_name`](#class_audiostreamplaybackinteractive_method_switch_to_clip_by_name) ( clip_name: [`StringName`](class_stringname.md) ) |

<!-- rst-class:: classref-section-separator -->

---

## 方法说明

<div id="_class_audiostreamplaybackinteractive_method_switch_to_clip"></div>

`void` **switch_to_clip** ( clip_index: [`int`](class_int.md) )<div id="class_audiostreamplaybackinteractive_method_switch_to_clip"></div>

Switch to a clip (by index).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_audiostreamplaybackinteractive_method_switch_to_clip_by_name"></div>

`void` **switch_to_clip_by_name** ( clip_name: [`StringName`](class_stringname.md) )<div id="class_audiostreamplaybackinteractive_method_switch_to_clip_by_name"></div>

Switch to a clip (by name).

[^virtual]: 本方法通常需要用户覆盖才能生效。
[^const]: 本方法无副作用，不会修改该实例的任何成员变量。
[^vararg]: 本方法除了能接受在此处描述的参数外，还能够继续接受任意数量的参数。
[^constructor]: 本方法用于构造某个类型。
[^static]: 调用本方法无需实例，可直接使用类名进行调用。
[^operator]: 本方法描述的是使用本类型作为左操作数的有效运算符。
[^bitfield]: 这个值是由下列位标志构成位掩码的整数。
[^void]: 无返回值。
