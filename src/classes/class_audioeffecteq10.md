<!-- ⚠ 请勿编辑本文件 ⚠ -->
<!-- 本文档使用脚本从 WeDot 引擎源码仓库生成。 -->
<!-- 生成脚本：https://github.com/WeDot-Engine/WeDot/tree/master/doc/tools/make_md.py； -->
<!-- 原文件：https://github.com/WeDot-Engine/WeDot/tree/master/doc/classes/AudioEffectEQ10.xml。 -->

<div id="_class_audioeffecteq10"></div>

# AudioEffectEQ10

**继承：** [`AudioEffectEQ`](class_audioeffecteq.md) **<** [`AudioEffect`](class_audioeffect.md) **<** [`Resource`](class_resource.md) **<** [`RefCounted`](class_refcounted.md) **<** [`Object`](class_object.md)

Adds a 10-band equalizer audio effect to an Audio bus. Gives you control over frequencies from 31 Hz to 16000 Hz.

Each frequency can be modulated between -60/+24 dB.

## 描述

Frequency bands:

Band 1: 31 Hz

Band 2: 62 Hz

Band 3: 125 Hz

Band 4: 250 Hz

Band 5: 500 Hz

Band 6: 1000 Hz

Band 7: 2000 Hz

Band 8: 4000 Hz

Band 9: 8000 Hz

Band 10: 16000 Hz

See also [`AudioEffectEQ`](class_audioeffecteq.md), [`AudioEffectEQ6`](class_audioeffecteq6.md), [`AudioEffectEQ21`](class_audioeffecteq21.md).

[^virtual]: 本方法通常需要用户覆盖才能生效。
[^const]: 本方法无副作用，不会修改该实例的任何成员变量。
[^vararg]: 本方法除了能接受在此处描述的参数外，还能够继续接受任意数量的参数。
[^constructor]: 本方法用于构造某个类型。
[^static]: 调用本方法无需实例，可直接使用类名进行调用。
[^operator]: 本方法描述的是使用本类型作为左操作数的有效运算符。
[^bitfield]: 这个值是由下列位标志构成位掩码的整数。
[^void]: 无返回值。
