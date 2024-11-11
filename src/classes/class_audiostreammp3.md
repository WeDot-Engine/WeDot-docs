<!-- ⚠ 请勿编辑本文件 ⚠ -->
<!-- 本文档使用脚本从 WeDot 引擎源码仓库生成。 -->
<!-- 生成脚本：https://github.com/WeDot-Engine/WeDot/tree/master/doc/tools/make_md.py； -->
<!-- 原文件：https://github.com/WeDot-Engine/WeDot/tree/master/modules/minimp3/doc_classes/AudioStreamMP3.xml。 -->

<div id="_class_audiostreammp3"></div>

# AudioStreamMP3

**继承：** [`AudioStream`](class_audiostream.md) **<** [`Resource`](class_resource.md) **<** [`RefCounted`](class_refcounted.md) **<** [`Object`](class_object.md)

MP3 audio stream driver.

## 描述

MP3 audio stream driver. See [`data`](class_audiostreammp3.md#class_audiostreammp3_property_data) if you want to load an MP3 file at run-time.

## 属性

|||
|:-:|:--|
| [`int`](class_int.md)                         | [`bar_beats`](class_audiostreammp3.md#class_audiostreammp3_property_bar_beats)     | ``4``                 |
| [`int`](class_int.md)                         | [`beat_count`](class_audiostreammp3.md#class_audiostreammp3_property_beat_count)   | ``0``                 |
| [`float`](class_float.md)                     | [`bpm`](class_audiostreammp3.md#class_audiostreammp3_property_bpm)                 | ``0.0``               |
| [`PackedByteArray`](class_packedbytearray.md) | [`data`](class_audiostreammp3.md#class_audiostreammp3_property_data)               | ``PackedByteArray()`` |
| [`bool`](class_bool.md)                       | [`loop`](class_audiostreammp3.md#class_audiostreammp3_property_loop)               | ``false``             |
| [`float`](class_float.md)                     | [`loop_offset`](class_audiostreammp3.md#class_audiostreammp3_property_loop_offset) | ``0.0``               |

<!-- rst-class:: classref-section-separator -->

---

## 属性说明

<div id="_class_audiostreammp3_property_bar_beats"></div>

[`int`](class_int.md) **bar_beats** = ``4`` <div id="class_audiostreammp3_property_bar_beats"></div>

- `void` **set_bar_beats** ( value: [`int`](class_int.md) )
- [`int`](class_int.md) **get_bar_beats** ( )

该属性目前没有描述，请帮我们\ :ref:`贡献一个 <doc_updating_the_class_reference>`\ 吧！

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_audiostreammp3_property_beat_count"></div>

[`int`](class_int.md) **beat_count** = ``0`` <div id="class_audiostreammp3_property_beat_count"></div>

- `void` **set_beat_count** ( value: [`int`](class_int.md) )
- [`int`](class_int.md) **get_beat_count** ( )

该属性目前没有描述，请帮我们\ :ref:`贡献一个 <doc_updating_the_class_reference>`\ 吧！

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_audiostreammp3_property_bpm"></div>

[`float`](class_float.md) **bpm** = ``0.0`` <div id="class_audiostreammp3_property_bpm"></div>

- `void` **set_bpm** ( value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_bpm** ( )

该属性目前没有描述，请帮我们\ :ref:`贡献一个 <doc_updating_the_class_reference>`\ 吧！

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_audiostreammp3_property_data"></div>

[`PackedByteArray`](class_packedbytearray.md) **data** = ``PackedByteArray()`` <div id="class_audiostreammp3_property_data"></div>

- `void` **set_data** ( value: [`PackedByteArray`](class_packedbytearray.md) )
- [`PackedByteArray`](class_packedbytearray.md) **get_data** ( )

Contains the audio data in bytes.

You can load a file without having to import it beforehand using the code snippet below. Keep in mind that this snippet loads the whole file into memory and may not be ideal for huge files (hundreds of megabytes or more).



```gdscript

    func load_mp3(path):
        var file = FileAccess.open(path, FileAccess.READ)
        var sound = AudioStreamMP3.new()
        sound.data = file.get_buffer(file.get_length())
        return sound
```

```csharp

    public AudioStreamMP3 LoadMP3(string path)
    {
        using var file = FileAccess.Open(path, FileAccess.ModeFlags.Read);
        var sound = new AudioStreamMP3();
        sound.Data = file.GetBuffer(file.GetLength());
        return sound;
    }
```







**Note:** The returned array is *copied* and any changes to it will not update the original property value. See [`PackedByteArray`](class_packedbytearray.md) for more details.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_audiostreammp3_property_loop"></div>

[`bool`](class_bool.md) **loop** = ``false`` <div id="class_audiostreammp3_property_loop"></div>

- `void` **set_loop** ( value: [`bool`](class_bool.md) )
- [`bool`](class_bool.md) **has_loop** ( )

If `true`, the stream will automatically loop when it reaches the end.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_audiostreammp3_property_loop_offset"></div>

[`float`](class_float.md) **loop_offset** = ``0.0`` <div id="class_audiostreammp3_property_loop_offset"></div>

- `void` **set_loop_offset** ( value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_loop_offset** ( )

Time in seconds at which the stream starts after being looped.

[^virtual]: 本方法通常需要用户覆盖才能生效。
[^const]: 本方法无副作用，不会修改该实例的任何成员变量。
[^vararg]: 本方法除了能接受在此处描述的参数外，还能够继续接受任意数量的参数。
[^constructor]: 本方法用于构造某个类型。
[^static]: 调用本方法无需实例，可直接使用类名进行调用。
[^operator]: 本方法描述的是使用本类型作为左操作数的有效运算符。
[^bitfield]: 这个值是由下列位标志构成位掩码的整数。
[^void]: 无返回值。
