<!-- ⚠ 请勿编辑本文件 ⚠ -->
<!-- 本文档使用脚本从 WeDot 引擎源码仓库生成。 -->
<!-- 生成脚本：https://github.com/WeDot-Engine/WeDot/tree/master/doc/tools/make_md.py； -->
<!-- 原文件：https://github.com/WeDot-Engine/WeDot/tree/master/doc/classes/InputEventMIDI.xml。 -->

<div id="_class_inputeventmidi"></div>

# InputEventMIDI

**继承：** [`InputEvent`](class_inputevent.md) **<** [`Resource`](class_resource.md) **<** [`RefCounted`](class_refcounted.md) **<** [`Object`](class_object.md)

Represents a MIDI message from a MIDI device, such as a musical keyboard.

## 描述

InputEventMIDI stores information about messages from [*MIDI*](https://en.wikipedia.org/wiki/MIDI) (Musical Instrument Digital Interface) devices. These may include musical keyboards, synthesizers, and drum machines.

MIDI messages can be received over a 5-pin MIDI connector or over USB. If your device supports both be sure to check the settings in the device to see which output it is using.

By default, Godot does not detect MIDI devices. You need to call [`OS.open_midi_inputs`](class_os.md#class_os_method_open_midi_inputs), first. You can check which devices are detected with [`OS.get_connected_midi_inputs`](class_os.md#class_os_method_get_connected_midi_inputs), and close the connection with [`OS.close_midi_inputs`](class_os.md#class_os_method_close_midi_inputs).



```gdscript

    func _ready():
        OS.open_midi_inputs()
        print(OS.get_connected_midi_inputs())
    
    func _input(input_event):
        if input_event is InputEventMIDI:
            _print_midi_info(input_event)
    
    func _print_midi_info(midi_event):
        print(midi_event)
        print("Channel ", midi_event.channel)
        print("Message ", midi_event.message)
        print("Pitch ", midi_event.pitch)
        print("Velocity ", midi_event.velocity)
        print("Instrument ", midi_event.instrument)
        print("Pressure ", midi_event.pressure)
        print("Controller number: ", midi_event.controller_number)
        print("Controller value: ", midi_event.controller_value)
```

```csharp

    public override void _Ready()
    {
        OS.OpenMidiInputs();
        GD.Print(OS.GetConnectedMidiInputs());
    }
    
    public override void _Input(InputEvent inputEvent)
    {
        if (inputEvent is InputEventMidi midiEvent)
        {
            PrintMIDIInfo(midiEvent);
        }
    }
    
    private void PrintMIDIInfo(InputEventMidi midiEvent)
    {
        GD.Print(midiEvent);
        GD.Print($"Channel {midiEvent.Channel}");
        GD.Print($"Message {midiEvent.Message}");
        GD.Print($"Pitch {midiEvent.Pitch}");
        GD.Print($"Velocity {midiEvent.Velocity}");
        GD.Print($"Instrument {midiEvent.Instrument}");
        GD.Print($"Pressure {midiEvent.Pressure}");
        GD.Print($"Controller number: {midiEvent.ControllerNumber}");
        GD.Print($"Controller value: {midiEvent.ControllerValue}");
    }
```



 **Note:** Godot does not support MIDI output, so there is no way to emit MIDI messages from Godot. Only MIDI input is supported.





## 属性

|||
|:-:|:--|
| [`int`](class_int.md)                         | [`channel`](class_inputeventmidi.md#class_inputeventmidi_property_channel)                     | ``0`` |
| [`int`](class_int.md)                         | [`controller_number`](class_inputeventmidi.md#class_inputeventmidi_property_controller_number) | ``0`` |
| [`int`](class_int.md)                         | [`controller_value`](class_inputeventmidi.md#class_inputeventmidi_property_controller_value)   | ``0`` |
| [`int`](class_int.md)                         | [`instrument`](class_inputeventmidi.md#class_inputeventmidi_property_instrument)               | ``0`` |
| [MIDIMessage](#enum_@globalscope_midimessage) | [`message`](class_inputeventmidi.md#class_inputeventmidi_property_message)                     | ``0`` |
| [`int`](class_int.md)                         | [`pitch`](class_inputeventmidi.md#class_inputeventmidi_property_pitch)                         | ``0`` |
| [`int`](class_int.md)                         | [`pressure`](class_inputeventmidi.md#class_inputeventmidi_property_pressure)                   | ``0`` |
| [`int`](class_int.md)                         | [`velocity`](class_inputeventmidi.md#class_inputeventmidi_property_velocity)                   | ``0`` |

<!-- rst-class:: classref-section-separator -->

---

## 属性说明

<div id="_class_inputeventmidi_property_channel"></div>

[`int`](class_int.md) **channel** = ``0`` <div id="class_inputeventmidi_property_channel"></div>

- `void` **set_channel** ( value: [`int`](class_int.md) )
- [`int`](class_int.md) **get_channel** ( )

The MIDI channel of this message, ranging from `0` to `15`. MIDI channel `9` is reserved for percussion instruments.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_inputeventmidi_property_controller_number"></div>

[`int`](class_int.md) **controller_number** = ``0`` <div id="class_inputeventmidi_property_controller_number"></div>

- `void` **set_controller_number** ( value: [`int`](class_int.md) )
- [`int`](class_int.md) **get_controller_number** ( )

The unique number of the controller, if [`message`](class_inputeventmidi.md#class_inputeventmidi_property_message) is [`@GlobalScope.MIDI_MESSAGE_CONTROL_CHANGE`](class_@globalscope.md#class_@globalscope_constant_midi_message_control_change), otherwise this is `0`. This value can be used to identify sliders for volume, balance, and panning, as well as switches and pedals on the MIDI device. See the [*General MIDI specification*](https://en.wikipedia.org/wiki/General_MIDI#Controller_events) for a small list.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_inputeventmidi_property_controller_value"></div>

[`int`](class_int.md) **controller_value** = ``0`` <div id="class_inputeventmidi_property_controller_value"></div>

- `void` **set_controller_value** ( value: [`int`](class_int.md) )
- [`int`](class_int.md) **get_controller_value** ( )

The value applied to the controller. If [`message`](class_inputeventmidi.md#class_inputeventmidi_property_message) is [`@GlobalScope.MIDI_MESSAGE_CONTROL_CHANGE`](class_@globalscope.md#class_@globalscope_constant_midi_message_control_change), this value ranges from `0` to `127`, otherwise it is `0`. See also [`controller_value`](class_inputeventmidi.md#class_inputeventmidi_property_controller_value).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_inputeventmidi_property_instrument"></div>

[`int`](class_int.md) **instrument** = ``0`` <div id="class_inputeventmidi_property_instrument"></div>

- `void` **set_instrument** ( value: [`int`](class_int.md) )
- [`int`](class_int.md) **get_instrument** ( )

The instrument (also called *program* or *preset*) used on this MIDI message. This value ranges from `0` to `127`.

To see what each value means, refer to the [*General MIDI's instrument list*](https://en.wikipedia.org/wiki/General_MIDI#Program_change_events). Keep in mind that the list is off by 1 because it does not begin from 0. A value of `0` corresponds to the acoustic grand piano.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_inputeventmidi_property_message"></div>

[MIDIMessage](#enum_@globalscope_midimessage) **message** = ``0`` <div id="class_inputeventmidi_property_message"></div>

- `void` **set_message** ( value: [MIDIMessage](#enum_@globalscope_midimessage) )
- [MIDIMessage](#enum_@globalscope_midimessage) **get_message** ( )

Represents the type of MIDI message (see the [MIDIMessage](#enum_@globalscope_midimessage) enum).

For more information, see the [*MIDI message status byte list chart*](https://www.midi.org/specifications-old/item/table-2-expanded-messages-list-status-bytes).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_inputeventmidi_property_pitch"></div>

[`int`](class_int.md) **pitch** = ``0`` <div id="class_inputeventmidi_property_pitch"></div>

- `void` **set_pitch** ( value: [`int`](class_int.md) )
- [`int`](class_int.md) **get_pitch** ( )

The pitch index number of this MIDI message. This value ranges from `0` to `127`.

On a piano, the **middle C** is `60`, followed by a **C-sharp** (`61`), then a **D** (`62`), and so on. Each octave is split in offsets of 12. See the "MIDI note number" column of the [*piano key frequency chart*](https://en.wikipedia.org/wiki/Piano_key_frequencies) a full list.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_inputeventmidi_property_pressure"></div>

[`int`](class_int.md) **pressure** = ``0`` <div id="class_inputeventmidi_property_pressure"></div>

- `void` **set_pressure** ( value: [`int`](class_int.md) )
- [`int`](class_int.md) **get_pressure** ( )

The strength of the key being pressed. This value ranges from `0` to `127`.

 **Note:** For many devices, this value is always `0`. Other devices such as musical keyboards may simulate pressure by changing the [`velocity`](class_inputeventmidi.md#class_inputeventmidi_property_velocity), instead.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_inputeventmidi_property_velocity"></div>

[`int`](class_int.md) **velocity** = ``0`` <div id="class_inputeventmidi_property_velocity"></div>

- `void` **set_velocity** ( value: [`int`](class_int.md) )
- [`int`](class_int.md) **get_velocity** ( )

The velocity of the MIDI message. This value ranges from `0` to `127`. For a musical keyboard, this corresponds to how quickly the key was pressed, and is rarely above `110` in practice.

 **Note:** Some MIDI devices may send a [`@GlobalScope.MIDI_MESSAGE_NOTE_ON`](class_@globalscope.md#class_@globalscope_constant_midi_message_note_on) message with `0` velocity and expect it to be treated the same as a [`@GlobalScope.MIDI_MESSAGE_NOTE_OFF`](class_@globalscope.md#class_@globalscope_constant_midi_message_note_off) message. If necessary, this can be handled with a few lines of code:

```

    func _input(event):
        if event is InputEventMIDI:
            if event.message == MIDI_MESSAGE_NOTE_ON and event.velocity > 0:
                print("Note pressed!")
```



[^virtual]: 本方法通常需要用户覆盖才能生效。
[^const]: 本方法无副作用，不会修改该实例的任何成员变量。
[^vararg]: 本方法除了能接受在此处描述的参数外，还能够继续接受任意数量的参数。
[^constructor]: 本方法用于构造某个类型。
[^static]: 调用本方法无需实例，可直接使用类名进行调用。
[^operator]: 本方法描述的是使用本类型作为左操作数的有效运算符。
[^bitfield]: 这个值是由下列位标志构成位掩码的整数。
[^void]: 无返回值。
