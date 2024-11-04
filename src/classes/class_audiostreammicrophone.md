<!-- ⚠ 请勿编辑本文件 ⚠ -->
<!-- 本文档使用脚本从 WeDot 引擎源码仓库生成。 -->
<!-- 生成脚本：https://github.com/WeDot-Engine/WeDot/tree/4.3/doc/tools/make_md.py； -->
<!-- 原文件：https://github.com/WeDot-Engine/WeDot/tree/4.3/doc/classes/AudioStreamMicrophone.xml。 -->

<div id="_class_audiostreammicrophone"></div>

# AudioStreamMicrophone

**继承：** [`AudioStream`](class_audiostream.md) **<** [`Resource`](class_resource.md) **<** [`RefCounted`](class_refcounted.md) **<** [`Object`](class_object.md)

Plays real-time audio input data.

## 描述

When used directly in an [`AudioStreamPlayer`](class_audiostreamplayer.md) node, **AudioStreamMicrophone** plays back microphone input in real-time. This can be used in conjunction with [`AudioEffectCapture`](class_audioeffectcapture.md) to process the data or save it.

 **Note:** [`ProjectSettings.audio/driver/enable_input`](#class_projectsettings_property_audio/driver/enable_input) must be `true` for audio input to work. See also that setting's description for caveats related to permissions and operating system privacy settings.

[^virtual]: 本方法通常需要用户覆盖才能生效。
[^const]: 本方法无副作用，不会修改该实例的任何成员变量。
[^vararg]: 本方法除了能接受在此处描述的参数外，还能够继续接受任意数量的参数。
[^constructor]: 本方法用于构造某个类型。
[^static]: 调用本方法无需实例，可直接使用类名进行调用。
[^operator]: 本方法描述的是使用本类型作为左操作数的有效运算符。
[^bitfield]: 这个值是由下列位标志构成位掩码的整数。
[^void]: 无返回值。
