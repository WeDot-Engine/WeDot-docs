<!-- ⚠ 请勿编辑本文件 ⚠ -->
<!-- 本文档使用脚本从 WeDot 引擎源码仓库生成。 -->
<!-- 生成脚本：https://github.com/WeDot-Engine/WeDot/tree/master/doc/tools/make_md.py； -->
<!-- 原文件：https://github.com/WeDot-Engine/WeDot/tree/master/doc/classes/InputEventKey.xml。 -->

<div id="_class_inputeventkey"></div>

# InputEventKey

**继承：** [`InputEventWithModifiers`](class_inputeventwithmodifiers.md) **<** [`InputEventFromWindow`](class_inputeventfromwindow.md) **<** [`InputEvent`](class_inputevent.md) **<** [`Resource`](class_resource.md) **<** [`RefCounted`](class_refcounted.md) **<** [`Object`](class_object.md)

Represents a key on a keyboard being pressed or released.

## 描述

An input event for keys on a keyboard. Supports key presses, key releases and [`echo`](class_inputeventkey.md#class_inputeventkey_property_echo) events. It can also be received in [`Node._unhandled_key_input`](class_node.md#class_node_private_method__unhandled_key_input).

 **Note:** Events received from the keyboard usually have all properties set. Event mappings should have only one of the [`keycode`](class_inputeventkey.md#class_inputeventkey_property_keycode), [`physical_keycode`](class_inputeventkey.md#class_inputeventkey_property_physical_keycode) or [`unicode`](class_inputeventkey.md#class_inputeventkey_property_unicode) set.

When events are compared, properties are checked in the following priority - [`keycode`](class_inputeventkey.md#class_inputeventkey_property_keycode), [`physical_keycode`](class_inputeventkey.md#class_inputeventkey_property_physical_keycode) and [`unicode`](class_inputeventkey.md#class_inputeventkey_property_unicode). Events with the first matching value will be considered equal.

## 属性

|||
|:-:|:--|
| [`bool`](class_bool.md)                       | [`echo`](class_inputeventkey.md#class_inputeventkey_property_echo)                         | ``false`` |
| [Key](#enum_@globalscope_key)                 | [`key_label`](class_inputeventkey.md#class_inputeventkey_property_key_label)               | ``0``     |
| [Key](#enum_@globalscope_key)                 | [`keycode`](class_inputeventkey.md#class_inputeventkey_property_keycode)                   | ``0``     |
| [KeyLocation](#enum_@globalscope_keylocation) | [`location`](class_inputeventkey.md#class_inputeventkey_property_location)                 | ``0``     |
| [Key](#enum_@globalscope_key)                 | [`physical_keycode`](class_inputeventkey.md#class_inputeventkey_property_physical_keycode) | ``0``     |
| [`bool`](class_bool.md)                       | [`pressed`](class_inputeventkey.md#class_inputeventkey_property_pressed)                   | ``false`` |
| [`int`](class_int.md)                         | [`unicode`](class_inputeventkey.md#class_inputeventkey_property_unicode)                   | ``0``     |

## 方法

|||
|:-:|:--|
| [`String`](class_string.md)   | [`as_text_key_label`](class_inputeventkey.md#class_inputeventkey_method_as_text_key_label) ( ) const[^const]                                     |
| [`String`](class_string.md)   | [`as_text_keycode`](class_inputeventkey.md#class_inputeventkey_method_as_text_keycode) ( ) const[^const]                                         |
| [`String`](class_string.md)   | [`as_text_location`](class_inputeventkey.md#class_inputeventkey_method_as_text_location) ( ) const[^const]                                       |
| [`String`](class_string.md)   | [`as_text_physical_keycode`](class_inputeventkey.md#class_inputeventkey_method_as_text_physical_keycode) ( ) const[^const]                       |
| [Key](#enum_@globalscope_key) | [`get_key_label_with_modifiers`](class_inputeventkey.md#class_inputeventkey_method_get_key_label_with_modifiers) ( ) const[^const]               |
| [Key](#enum_@globalscope_key) | [`get_keycode_with_modifiers`](class_inputeventkey.md#class_inputeventkey_method_get_keycode_with_modifiers) ( ) const[^const]                   |
| [Key](#enum_@globalscope_key) | [`get_physical_keycode_with_modifiers`](class_inputeventkey.md#class_inputeventkey_method_get_physical_keycode_with_modifiers) ( ) const[^const] |

<!-- rst-class:: classref-section-separator -->

---

## 属性说明

<div id="_class_inputeventkey_property_echo"></div>

[`bool`](class_bool.md) **echo** = ``false`` <div id="class_inputeventkey_property_echo"></div>

- `void` **set_echo** ( value: [`bool`](class_bool.md) )
- [`bool`](class_bool.md) **is_echo** ( )

If `true`, the key was already pressed before this event. An echo event is a repeated key event sent when the user is holding down the key.

 **Note:** The rate at which echo events are sent is typically around 20 events per second (after holding down the key for roughly half a second). However, the key repeat delay/speed can be changed by the user or disabled entirely in the operating system settings. To ensure your project works correctly on all configurations, do not assume the user has a specific key repeat configuration in your project's behavior.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_inputeventkey_property_key_label"></div>

[Key](#enum_@globalscope_key) **key_label** = ``0`` <div id="class_inputeventkey_property_key_label"></div>

- `void` **set_key_label** ( value: [Key](#enum_@globalscope_key) )
- [Key](#enum_@globalscope_key) **get_key_label** ( )

Represents the localized label printed on the key in the current keyboard layout, which corresponds to one of the [Key](#enum_@globalscope_key) constants or any valid Unicode character.

For keyboard layouts with a single label on the key, it is equivalent to [`keycode`](class_inputeventkey.md#class_inputeventkey_property_keycode).

To get a human-readable representation of the **InputEventKey**, use `OS.get_keycode_string(event.key_label)` where `event` is the **InputEventKey**.

```text

        +-----+ +-----+
        | Q   | | Q   | - "Q" - keycode
        |   Й | |  ض | - "Й" and "ض" - key_label
        +-----+ +-----+
```



<!-- rst-class:: classref-item-separator -->

---

<div id="_class_inputeventkey_property_keycode"></div>

[Key](#enum_@globalscope_key) **keycode** = ``0`` <div id="class_inputeventkey_property_keycode"></div>

- `void` **set_keycode** ( value: [Key](#enum_@globalscope_key) )
- [Key](#enum_@globalscope_key) **get_keycode** ( )

Latin label printed on the key in the current keyboard layout, which corresponds to one of the [Key](#enum_@globalscope_key) constants.

To get a human-readable representation of the **InputEventKey**, use `OS.get_keycode_string(event.keycode)` where `event` is the **InputEventKey**.

```text

        +-----+ +-----+
        | Q   | | Q   | - "Q" - keycode
        |   Й | |  ض | - "Й" and "ض" - key_label
        +-----+ +-----+
```



<!-- rst-class:: classref-item-separator -->

---

<div id="_class_inputeventkey_property_location"></div>

[KeyLocation](#enum_@globalscope_keylocation) **location** = ``0`` <div id="class_inputeventkey_property_location"></div>

- `void` **set_location** ( value: [KeyLocation](#enum_@globalscope_keylocation) )
- [KeyLocation](#enum_@globalscope_keylocation) **get_location** ( )

Represents the location of a key which has both left and right versions, such as <i class="fa fa-gamepad"></i>`Shift` or <i class="fa fa-gamepad"></i>`Alt`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_inputeventkey_property_physical_keycode"></div>

[Key](#enum_@globalscope_key) **physical_keycode** = ``0`` <div id="class_inputeventkey_property_physical_keycode"></div>

- `void` **set_physical_keycode** ( value: [Key](#enum_@globalscope_key) )
- [Key](#enum_@globalscope_key) **get_physical_keycode** ( )

Represents the physical location of a key on the 101/102-key US QWERTY keyboard, which corresponds to one of the [Key](#enum_@globalscope_key) constants.

To get a human-readable representation of the **InputEventKey**, use [`OS.get_keycode_string`](class_os.md#class_os_method_get_keycode_string) in combination with [`DisplayServer.keyboard_get_keycode_from_physical`](class_displayserver.md#class_displayserver_method_keyboard_get_keycode_from_physical):



```gdscript

    func _input(event):
        if event is InputEventKey:
            var keycode = DisplayServer.keyboard_get_keycode_from_physical(event.physical_keycode)
            print(OS.get_keycode_string(keycode))
```

```csharp

    public override void _Input(InputEvent @event)
    {
        if (@event is InputEventKey inputEventKey)
        {
            var keycode = DisplayServer.KeyboardGetKeycodeFromPhysical(inputEventKey.PhysicalKeycode);
            GD.Print(OS.GetKeycodeString(keycode));
        }
    }
```







<!-- rst-class:: classref-item-separator -->

---

<div id="_class_inputeventkey_property_pressed"></div>

[`bool`](class_bool.md) **pressed** = ``false`` <div id="class_inputeventkey_property_pressed"></div>

- `void` **set_pressed** ( value: [`bool`](class_bool.md) )
- [`bool`](class_bool.md) **is_pressed** ( )

If `true`, the key's state is pressed. If `false`, the key's state is released.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_inputeventkey_property_unicode"></div>

[`int`](class_int.md) **unicode** = ``0`` <div id="class_inputeventkey_property_unicode"></div>

- `void` **set_unicode** ( value: [`int`](class_int.md) )
- [`int`](class_int.md) **get_unicode** ( )

The key Unicode character code (when relevant), shifted by modifier keys. Unicode character codes for composite characters and complex scripts may not be available unless IME input mode is active. See [`Window.set_ime_active`](class_window.md#class_window_method_set_ime_active) for more information.

<!-- rst-class:: classref-section-separator -->

---

## 方法说明

<div id="_class_inputeventkey_method_as_text_key_label"></div>

[`String`](class_string.md) **as_text_key_label** ( ) const[^const]<div id="class_inputeventkey_method_as_text_key_label"></div>

Returns a [`String`](class_string.md) representation of the event's [`key_label`](class_inputeventkey.md#class_inputeventkey_property_key_label) and modifiers.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_inputeventkey_method_as_text_keycode"></div>

[`String`](class_string.md) **as_text_keycode** ( ) const[^const]<div id="class_inputeventkey_method_as_text_keycode"></div>

Returns a [`String`](class_string.md) representation of the event's [`keycode`](class_inputeventkey.md#class_inputeventkey_property_keycode) and modifiers.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_inputeventkey_method_as_text_location"></div>

[`String`](class_string.md) **as_text_location** ( ) const[^const]<div id="class_inputeventkey_method_as_text_location"></div>

Returns a [`String`](class_string.md) representation of the event's [`location`](class_inputeventkey.md#class_inputeventkey_property_location). This will be a blank string if the event is not specific to a location.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_inputeventkey_method_as_text_physical_keycode"></div>

[`String`](class_string.md) **as_text_physical_keycode** ( ) const[^const]<div id="class_inputeventkey_method_as_text_physical_keycode"></div>

Returns a [`String`](class_string.md) representation of the event's [`physical_keycode`](class_inputeventkey.md#class_inputeventkey_property_physical_keycode) and modifiers.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_inputeventkey_method_get_key_label_with_modifiers"></div>

[Key](#enum_@globalscope_key) **get_key_label_with_modifiers** ( ) const[^const]<div id="class_inputeventkey_method_get_key_label_with_modifiers"></div>

Returns the localized key label combined with modifier keys such as <i class="fa fa-gamepad"></i>`Shift` or <i class="fa fa-gamepad"></i>`Alt`. See also [`InputEventWithModifiers`](class_inputeventwithmodifiers.md).

To get a human-readable representation of the **InputEventKey** with modifiers, use `OS.get_keycode_string(event.get_key_label_with_modifiers())` where `event` is the **InputEventKey**.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_inputeventkey_method_get_keycode_with_modifiers"></div>

[Key](#enum_@globalscope_key) **get_keycode_with_modifiers** ( ) const[^const]<div id="class_inputeventkey_method_get_keycode_with_modifiers"></div>

Returns the Latin keycode combined with modifier keys such as <i class="fa fa-gamepad"></i>`Shift` or <i class="fa fa-gamepad"></i>`Alt`. See also [`InputEventWithModifiers`](class_inputeventwithmodifiers.md).

To get a human-readable representation of the **InputEventKey** with modifiers, use `OS.get_keycode_string(event.get_keycode_with_modifiers())` where `event` is the **InputEventKey**.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_inputeventkey_method_get_physical_keycode_with_modifiers"></div>

[Key](#enum_@globalscope_key) **get_physical_keycode_with_modifiers** ( ) const[^const]<div id="class_inputeventkey_method_get_physical_keycode_with_modifiers"></div>

Returns the physical keycode combined with modifier keys such as <i class="fa fa-gamepad"></i>`Shift` or <i class="fa fa-gamepad"></i>`Alt`. See also [`InputEventWithModifiers`](class_inputeventwithmodifiers.md).

To get a human-readable representation of the **InputEventKey** with modifiers, use `OS.get_keycode_string(event.get_physical_keycode_with_modifiers())` where `event` is the **InputEventKey**.

[^virtual]: 本方法通常需要用户覆盖才能生效。
[^const]: 本方法无副作用，不会修改该实例的任何成员变量。
[^vararg]: 本方法除了能接受在此处描述的参数外，还能够继续接受任意数量的参数。
[^constructor]: 本方法用于构造某个类型。
[^static]: 调用本方法无需实例，可直接使用类名进行调用。
[^operator]: 本方法描述的是使用本类型作为左操作数的有效运算符。
[^bitfield]: 这个值是由下列位标志构成位掩码的整数。
[^void]: 无返回值。
