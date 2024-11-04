<!-- ⚠ 请勿编辑本文件 ⚠ -->
<!-- 本文档使用脚本从 WeDot 引擎源码仓库生成。 -->
<!-- 生成脚本：https://github.com/WeDot-Engine/WeDot/tree/4.3/doc/tools/make_md.py； -->
<!-- 原文件：https://github.com/WeDot-Engine/WeDot/tree/4.3/doc/classes/AudioEffectInstance.xml。 -->

<div id="_class_audioeffectinstance"></div>

# AudioEffectInstance

**继承：** [`RefCounted`](class_refcounted.md) **<** [`Object`](class_object.md)

**派生：** [`AudioEffectSpectrumAnalyzerInstance`](class_audioeffectspectrumanalyzerinstance.md)

Manipulates the audio it receives for a given effect.

## 描述

An audio effect instance manipulates the audio it receives for a given effect. This instance is automatically created by an [`AudioEffect`](class_audioeffect.md) when it is added to a bus, and should usually not be created directly. If necessary, it can be fetched at run-time with [`AudioServer.get_bus_effect_instance`](#class_audioserver_method_get_bus_effect_instance).

## 方法

| `void`                  | [`_process`](#class_audioeffectinstance_private_method__process) ( src_buffer: `const void*`, dst_buffer: `AudioFrame*`, frame_count: [`int`](class_int.md) ) virtual[^virtual] |
| [`bool`](class_bool.md) | [`_process_silence`](#class_audioeffectinstance_private_method__process_silence) ( ) virtual[^virtual] const[^const]                                                            |

<!-- rst-class:: classref-section-separator -->

---

## 方法说明

<div id="_class_audioeffectinstance_private_method__process"></div>

`void` **_process** ( src_buffer: `const void*`, dst_buffer: `AudioFrame*`, frame_count: [`int`](class_int.md) ) virtual[^virtual]<div id="class_audioeffectinstance_private_method__process"></div>

Called by the [`AudioServer`](class_audioserver.md) to process this effect. When [`_process_silence`](#class_audioeffectinstance_private_method__process_silence) is not overridden or it returns `false`, this method is called only when the bus is active.

 **Note:** It is not useful to override this method in GDScript or C#. Only GDExtension can take advantage of it.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_audioeffectinstance_private_method__process_silence"></div>

[`bool`](class_bool.md) **_process_silence** ( ) virtual[^virtual] const[^const]<div id="class_audioeffectinstance_private_method__process_silence"></div>

Override this method to customize the processing behavior of this effect instance.

Should return `true` to force the [`AudioServer`](class_audioserver.md) to always call [`_process`](#class_audioeffectinstance_private_method__process), even if the bus has been muted or cannot otherwise be heard.

[^virtual]: 本方法通常需要用户覆盖才能生效。
[^const]: 本方法无副作用，不会修改该实例的任何成员变量。
[^vararg]: 本方法除了能接受在此处描述的参数外，还能够继续接受任意数量的参数。
[^constructor]: 本方法用于构造某个类型。
[^static]: 调用本方法无需实例，可直接使用类名进行调用。
[^operator]: 本方法描述的是使用本类型作为左操作数的有效运算符。
[^bitfield]: 这个值是由下列位标志构成位掩码的整数。
[^void]: 无返回值。
