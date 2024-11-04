<!-- ⚠ 请勿编辑本文件 ⚠ -->
<!-- 本文档使用脚本从 WeDot 引擎源码仓库生成。 -->
<!-- 生成脚本：https://github.com/WeDot-Engine/WeDot/tree/4.3/doc/tools/make_md.py； -->
<!-- 原文件：https://github.com/WeDot-Engine/WeDot/tree/4.3/doc/classes/AudioEffect.xml。 -->

<div id="_class_audioeffect"></div>

# AudioEffect

**继承：** [`Resource`](class_resource.md) **<** [`RefCounted`](class_refcounted.md) **<** [`Object`](class_object.md)

**派生：** [`AudioEffectAmplify`](class_audioeffectamplify.md), [`AudioEffectCapture`](class_audioeffectcapture.md), [`AudioEffectChorus`](class_audioeffectchorus.md), [`AudioEffectCompressor`](class_audioeffectcompressor.md), [`AudioEffectDelay`](class_audioeffectdelay.md), [`AudioEffectDistortion`](class_audioeffectdistortion.md), [`AudioEffectEQ`](class_audioeffecteq.md), [`AudioEffectFilter`](class_audioeffectfilter.md), [`AudioEffectHardLimiter`](class_audioeffecthardlimiter.md), [`AudioEffectLimiter`](class_audioeffectlimiter.md), [`AudioEffectPanner`](class_audioeffectpanner.md), [`AudioEffectPhaser`](class_audioeffectphaser.md), [`AudioEffectPitchShift`](class_audioeffectpitchshift.md), [`AudioEffectRecord`](class_audioeffectrecord.md), [`AudioEffectReverb`](class_audioeffectreverb.md), [`AudioEffectSpectrumAnalyzer`](class_audioeffectspectrumanalyzer.md), [`AudioEffectStereoEnhance`](class_audioeffectstereoenhance.md)

Base class for audio effect resources.

## 描述

The base [`Resource`](class_resource.md) for every audio effect. In the editor, an audio effect can be added to the current bus layout through the Audio panel. At run-time, it is also possible to manipulate audio effects through [`AudioServer.add_bus_effect`](#class_audioserver_method_add_bus_effect), [`AudioServer.remove_bus_effect`](#class_audioserver_method_remove_bus_effect), and [`AudioServer.get_bus_effect`](#class_audioserver_method_get_bus_effect).

When applied on a bus, an audio effect creates a corresponding [`AudioEffectInstance`](class_audioeffectinstance.md). The instance is directly responsible for manipulating the sound, based on the original audio effect's properties.

## 方法

| [`AudioEffectInstance`](class_audioeffectinstance.md) | [`_instantiate`](#class_audioeffect_private_method__instantiate) ( ) virtual[^virtual] |

<!-- rst-class:: classref-section-separator -->

---

## 方法说明

<div id="_class_audioeffect_private_method__instantiate"></div>

[`AudioEffectInstance`](class_audioeffectinstance.md) **_instantiate** ( ) virtual[^virtual]<div id="class_audioeffect_private_method__instantiate"></div>

Override this method to customize the [`AudioEffectInstance`](class_audioeffectinstance.md) created when this effect is applied on a bus in the editor's Audio panel, or through [`AudioServer.add_bus_effect`](#class_audioserver_method_add_bus_effect).

```

    extends AudioEffect
    
    @export var strength = 4.0
    
    func _instantiate():
        var effect = CustomAudioEffectInstance.new()
        effect.base = self
    
        return effect
```

 **Note:** It is recommended to keep a reference to the original **AudioEffect** in the new instance. Depending on the implementation this allows the effect instance to listen for changes at run-time and be modified accordingly.



[^virtual]: 本方法通常需要用户覆盖才能生效。
[^const]: 本方法无副作用，不会修改该实例的任何成员变量。
[^vararg]: 本方法除了能接受在此处描述的参数外，还能够继续接受任意数量的参数。
[^constructor]: 本方法用于构造某个类型。
[^static]: 调用本方法无需实例，可直接使用类名进行调用。
[^operator]: 本方法描述的是使用本类型作为左操作数的有效运算符。
[^bitfield]: 这个值是由下列位标志构成位掩码的整数。
[^void]: 无返回值。
