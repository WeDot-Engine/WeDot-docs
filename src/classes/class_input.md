<!-- ⚠ 请勿编辑本文件 ⚠ -->
<!-- 本文档使用脚本从 WeDot 引擎源码仓库生成。 -->
<!-- 生成脚本：https://github.com/WeDot-Engine/WeDot/tree/4.3/doc/tools/make_md.py； -->
<!-- 原文件：https://github.com/WeDot-Engine/WeDot/tree/4.3/doc/classes/Input.xml。 -->

<div id="_class_input"></div>

# Input

**继承：** [`Object`](class_object.md)

A singleton for handling inputs.

## 描述

The **Input** singleton handles key presses, mouse buttons and movement, gamepads, and input actions. Actions and their events can be set in the **Input Map** tab in **Project > Project Settings**, or with the [`InputMap`](class_inputmap.md) class.

 **Note:** **Input**'s methods reflect the global input state and are not affected by [`Control.accept_event`](#class_control_method_accept_event) or [`Viewport.set_input_as_handled`](#class_viewport_method_set_input_as_handled), as those methods only deal with the way input is propagated in the [`SceneTree`](class_scenetree.md).

## 属性

| [`bool`](class_bool.md)            | [`emulate_mouse_from_touch`](#class_input_property_emulate_mouse_from_touch) |
| [`bool`](class_bool.md)            | [`emulate_touch_from_mouse`](#class_input_property_emulate_touch_from_mouse) |
| [MouseMode](#enum_input_mousemode) | [`mouse_mode`](#class_input_property_mouse_mode)                             |
| [`bool`](class_bool.md)            | [`use_accumulated_input`](#class_input_property_use_accumulated_input)       |

## 方法

| `void`                                                | [`action_press`](#class_input_method_action_press) ( action: [`StringName`](class_stringname.md), strength: [`float`](class_float.md) = 1.0 )                                                                                                                                                                   |
| `void`                                                | [`action_release`](#class_input_method_action_release) ( action: [`StringName`](class_stringname.md) )                                                                                                                                                                                                          |
| `void`                                                | [`add_joy_mapping`](#class_input_method_add_joy_mapping) ( mapping: [`String`](class_string.md), update_existing: [`bool`](class_bool.md) = false )                                                                                                                                                             |
| `void`                                                | [`flush_buffered_events`](#class_input_method_flush_buffered_events) ( )                                                                                                                                                                                                                                        |
| [`Vector3`](class_vector3.md)                         | [`get_accelerometer`](#class_input_method_get_accelerometer) ( ) const[^const]                                                                                                                                                                                                                                  |
| [`float`](class_float.md)                             | [`get_action_raw_strength`](#class_input_method_get_action_raw_strength) ( action: [`StringName`](class_stringname.md), exact_match: [`bool`](class_bool.md) = false ) const[^const]                                                                                                                            |
| [`float`](class_float.md)                             | [`get_action_strength`](#class_input_method_get_action_strength) ( action: [`StringName`](class_stringname.md), exact_match: [`bool`](class_bool.md) = false ) const[^const]                                                                                                                                    |
| [`float`](class_float.md)                             | [`get_axis`](#class_input_method_get_axis) ( negative_action: [`StringName`](class_stringname.md), positive_action: [`StringName`](class_stringname.md) ) const[^const]                                                                                                                                         |
| [Array](class_array.md) [`int`](class_int.md)         | [`get_connected_joypads`](#class_input_method_get_connected_joypads) ( )                                                                                                                                                                                                                                        |
| [CursorShape](#enum_input_cursorshape)                | [`get_current_cursor_shape`](#class_input_method_get_current_cursor_shape) ( ) const[^const]                                                                                                                                                                                                                    |
| [`Vector3`](class_vector3.md)                         | [`get_gravity`](#class_input_method_get_gravity) ( ) const[^const]                                                                                                                                                                                                                                              |
| [`Vector3`](class_vector3.md)                         | [`get_gyroscope`](#class_input_method_get_gyroscope) ( ) const[^const]                                                                                                                                                                                                                                          |
| [`float`](class_float.md)                             | [`get_joy_axis`](#class_input_method_get_joy_axis) ( device: [`int`](class_int.md), axis: [JoyAxis](#enum_@globalscope_joyaxis) ) const[^const]                                                                                                                                                                 |
| [`String`](class_string.md)                           | [`get_joy_guid`](#class_input_method_get_joy_guid) ( device: [`int`](class_int.md) ) const[^const]                                                                                                                                                                                                              |
| [`Dictionary`](class_dictionary.md)                   | [`get_joy_info`](#class_input_method_get_joy_info) ( device: [`int`](class_int.md) ) const[^const]                                                                                                                                                                                                              |
| [`String`](class_string.md)                           | [`get_joy_name`](#class_input_method_get_joy_name) ( device: [`int`](class_int.md) )                                                                                                                                                                                                                            |
| [`float`](class_float.md)                             | [`get_joy_vibration_duration`](#class_input_method_get_joy_vibration_duration) ( device: [`int`](class_int.md) )                                                                                                                                                                                                |
| [`Vector2`](class_vector2.md)                         | [`get_joy_vibration_strength`](#class_input_method_get_joy_vibration_strength) ( device: [`int`](class_int.md) )                                                                                                                                                                                                |
| [`Vector2`](class_vector2.md)                         | [`get_last_mouse_screen_velocity`](#class_input_method_get_last_mouse_screen_velocity) ( )                                                                                                                                                                                                                      |
| [`Vector2`](class_vector2.md)                         | [`get_last_mouse_velocity`](#class_input_method_get_last_mouse_velocity) ( )                                                                                                                                                                                                                                    |
| [`Vector3`](class_vector3.md)                         | [`get_magnetometer`](#class_input_method_get_magnetometer) ( ) const[^const]                                                                                                                                                                                                                                    |
| [MouseButtonMask](#enum_@globalscope_mousebuttonmask) | [`get_mouse_button_mask`](#class_input_method_get_mouse_button_mask) ( ) const[^const]                                                                                                                                                                                                                          |
| [`Vector2`](class_vector2.md)                         | [`get_vector`](#class_input_method_get_vector) ( negative_x: [`StringName`](class_stringname.md), positive_x: [`StringName`](class_stringname.md), negative_y: [`StringName`](class_stringname.md), positive_y: [`StringName`](class_stringname.md), deadzone: [`float`](class_float.md) = -1.0 ) const[^const] |
| [`bool`](class_bool.md)                               | [`is_action_just_pressed`](#class_input_method_is_action_just_pressed) ( action: [`StringName`](class_stringname.md), exact_match: [`bool`](class_bool.md) = false ) const[^const]                                                                                                                              |
| [`bool`](class_bool.md)                               | [`is_action_just_released`](#class_input_method_is_action_just_released) ( action: [`StringName`](class_stringname.md), exact_match: [`bool`](class_bool.md) = false ) const[^const]                                                                                                                            |
| [`bool`](class_bool.md)                               | [`is_action_pressed`](#class_input_method_is_action_pressed) ( action: [`StringName`](class_stringname.md), exact_match: [`bool`](class_bool.md) = false ) const[^const]                                                                                                                                        |
| [`bool`](class_bool.md)                               | [`is_anything_pressed`](#class_input_method_is_anything_pressed) ( ) const[^const]                                                                                                                                                                                                                              |
| [`bool`](class_bool.md)                               | [`is_joy_button_pressed`](#class_input_method_is_joy_button_pressed) ( device: [`int`](class_int.md), button: [JoyButton](#enum_@globalscope_joybutton) ) const[^const]                                                                                                                                         |
| [`bool`](class_bool.md)                               | [`is_joy_known`](#class_input_method_is_joy_known) ( device: [`int`](class_int.md) )                                                                                                                                                                                                                            |
| [`bool`](class_bool.md)                               | [`is_key_label_pressed`](#class_input_method_is_key_label_pressed) ( keycode: [Key](#enum_@globalscope_key) ) const[^const]                                                                                                                                                                                     |
| [`bool`](class_bool.md)                               | [`is_key_pressed`](#class_input_method_is_key_pressed) ( keycode: [Key](#enum_@globalscope_key) ) const[^const]                                                                                                                                                                                                 |
| [`bool`](class_bool.md)                               | [`is_mouse_button_pressed`](#class_input_method_is_mouse_button_pressed) ( button: [MouseButton](#enum_@globalscope_mousebutton) ) const[^const]                                                                                                                                                                |
| [`bool`](class_bool.md)                               | [`is_physical_key_pressed`](#class_input_method_is_physical_key_pressed) ( keycode: [Key](#enum_@globalscope_key) ) const[^const]                                                                                                                                                                               |
| `void`                                                | [`parse_input_event`](#class_input_method_parse_input_event) ( event: [`InputEvent`](class_inputevent.md) )                                                                                                                                                                                                     |
| `void`                                                | [`remove_joy_mapping`](#class_input_method_remove_joy_mapping) ( guid: [`String`](class_string.md) )                                                                                                                                                                                                            |
| `void`                                                | [`set_accelerometer`](#class_input_method_set_accelerometer) ( value: [`Vector3`](class_vector3.md) )                                                                                                                                                                                                           |
| `void`                                                | [`set_custom_mouse_cursor`](#class_input_method_set_custom_mouse_cursor) ( image: [`Resource`](class_resource.md), shape: [CursorShape](#enum_input_cursorshape) = 0, hotspot: [`Vector2`](class_vector2.md) = Vector2(0, 0) )                                                                                  |
| `void`                                                | [`set_default_cursor_shape`](#class_input_method_set_default_cursor_shape) ( shape: [CursorShape](#enum_input_cursorshape) = 0 )                                                                                                                                                                                |
| `void`                                                | [`set_gravity`](#class_input_method_set_gravity) ( value: [`Vector3`](class_vector3.md) )                                                                                                                                                                                                                       |
| `void`                                                | [`set_gyroscope`](#class_input_method_set_gyroscope) ( value: [`Vector3`](class_vector3.md) )                                                                                                                                                                                                                   |
| `void`                                                | [`set_magnetometer`](#class_input_method_set_magnetometer) ( value: [`Vector3`](class_vector3.md) )                                                                                                                                                                                                             |
| [`bool`](class_bool.md)                               | [`should_ignore_device`](#class_input_method_should_ignore_device) ( vendor_id: [`int`](class_int.md), product_id: [`int`](class_int.md) ) const[^const]                                                                                                                                                        |
| `void`                                                | [`start_joy_vibration`](#class_input_method_start_joy_vibration) ( device: [`int`](class_int.md), weak_magnitude: [`float`](class_float.md), strong_magnitude: [`float`](class_float.md), duration: [`float`](class_float.md) = 0 )                                                                             |
| `void`                                                | [`stop_joy_vibration`](#class_input_method_stop_joy_vibration) ( device: [`int`](class_int.md) )                                                                                                                                                                                                                |
| `void`                                                | [`vibrate_handheld`](#class_input_method_vibrate_handheld) ( duration_ms: [`int`](class_int.md) = 500, amplitude: [`float`](class_float.md) = -1.0 )                                                                                                                                                            |
| `void`                                                | [`warp_mouse`](#class_input_method_warp_mouse) ( position: [`Vector2`](class_vector2.md) )                                                                                                                                                                                                                      |

<!-- rst-class:: classref-section-separator -->

---

## 信号

<div id="_class_class_input_signal_joy_connection_changed"></div>

**joy_connection_changed** ( device: [`int`](class_int.md), connected: [`bool`](class_bool.md) ) <div id="class_input_signal_joy_connection_changed"></div>

Emitted when a joypad device has been connected or disconnected.

<!-- rst-class:: classref-section-separator -->

---

## 枚举

<div id="_class_enum_input_mousemode"></div>

enum **MouseMode**: <div id="enum_input_mousemode"></div>

<div id="_class_input_constant_mouse_mode_visible"></div>

[MouseMode](#enum_input_mousemode) **MOUSE_MODE_VISIBLE** = ``0``

Makes the mouse cursor visible if it is hidden.

<div id="_class_input_constant_mouse_mode_hidden"></div>

[MouseMode](#enum_input_mousemode) **MOUSE_MODE_HIDDEN** = ``1``

Makes the mouse cursor hidden if it is visible.

<div id="_class_input_constant_mouse_mode_captured"></div>

[MouseMode](#enum_input_mousemode) **MOUSE_MODE_CAPTURED** = ``2``

Captures the mouse. The mouse will be hidden and its position locked at the center of the window manager's window.

 **Note:** If you want to process the mouse's movement in this mode, you need to use [`InputEventMouseMotion.relative`](#class_inputeventmousemotion_property_relative).

<div id="_class_input_constant_mouse_mode_confined"></div>

[MouseMode](#enum_input_mousemode) **MOUSE_MODE_CONFINED** = ``3``

Confines the mouse cursor to the game window, and make it visible.

<div id="_class_input_constant_mouse_mode_confined_hidden"></div>

[MouseMode](#enum_input_mousemode) **MOUSE_MODE_CONFINED_HIDDEN** = ``4``

Confines the mouse cursor to the game window, and make it hidden.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_enum_input_cursorshape"></div>

enum **CursorShape**: <div id="enum_input_cursorshape"></div>

<div id="_class_input_constant_cursor_arrow"></div>

[CursorShape](#enum_input_cursorshape) **CURSOR_ARROW** = ``0``

Arrow cursor. Standard, default pointing cursor.

<div id="_class_input_constant_cursor_ibeam"></div>

[CursorShape](#enum_input_cursorshape) **CURSOR_IBEAM** = ``1``

I-beam cursor. Usually used to show where the text cursor will appear when the mouse is clicked.

<div id="_class_input_constant_cursor_pointing_hand"></div>

[CursorShape](#enum_input_cursorshape) **CURSOR_POINTING_HAND** = ``2``

Pointing hand cursor. Usually used to indicate the pointer is over a link or other interactable item.

<div id="_class_input_constant_cursor_cross"></div>

[CursorShape](#enum_input_cursorshape) **CURSOR_CROSS** = ``3``

Cross cursor. Typically appears over regions in which a drawing operation can be performed or for selections.

<div id="_class_input_constant_cursor_wait"></div>

[CursorShape](#enum_input_cursorshape) **CURSOR_WAIT** = ``4``

Wait cursor. Indicates that the application is busy performing an operation, and that it cannot be used during the operation (e.g. something is blocking its main thread).

<div id="_class_input_constant_cursor_busy"></div>

[CursorShape](#enum_input_cursorshape) **CURSOR_BUSY** = ``5``

Busy cursor. Indicates that the application is busy performing an operation, and that it is still usable during the operation.

<div id="_class_input_constant_cursor_drag"></div>

[CursorShape](#enum_input_cursorshape) **CURSOR_DRAG** = ``6``

Drag cursor. Usually displayed when dragging something.

 **Note:** Windows lacks a dragging cursor, so [`CURSOR_DRAG`](#class_input_constant_cursor_drag) is the same as [`CURSOR_MOVE`](#class_input_constant_cursor_move) for this platform.

<div id="_class_input_constant_cursor_can_drop"></div>

[CursorShape](#enum_input_cursorshape) **CURSOR_CAN_DROP** = ``7``

Can drop cursor. Usually displayed when dragging something to indicate that it can be dropped at the current position.

<div id="_class_input_constant_cursor_forbidden"></div>

[CursorShape](#enum_input_cursorshape) **CURSOR_FORBIDDEN** = ``8``

Forbidden cursor. Indicates that the current action is forbidden (for example, when dragging something) or that the control at a position is disabled.

<div id="_class_input_constant_cursor_vsize"></div>

[CursorShape](#enum_input_cursorshape) **CURSOR_VSIZE** = ``9``

Vertical resize mouse cursor. A double-headed vertical arrow. It tells the user they can resize the window or the panel vertically.

<div id="_class_input_constant_cursor_hsize"></div>

[CursorShape](#enum_input_cursorshape) **CURSOR_HSIZE** = ``10``

Horizontal resize mouse cursor. A double-headed horizontal arrow. It tells the user they can resize the window or the panel horizontally.

<div id="_class_input_constant_cursor_bdiagsize"></div>

[CursorShape](#enum_input_cursorshape) **CURSOR_BDIAGSIZE** = ``11``

Window resize mouse cursor. The cursor is a double-headed arrow that goes from the bottom left to the top right. It tells the user they can resize the window or the panel both horizontally and vertically.

<div id="_class_input_constant_cursor_fdiagsize"></div>

[CursorShape](#enum_input_cursorshape) **CURSOR_FDIAGSIZE** = ``12``

Window resize mouse cursor. The cursor is a double-headed arrow that goes from the top left to the bottom right, the opposite of [`CURSOR_BDIAGSIZE`](#class_input_constant_cursor_bdiagsize). It tells the user they can resize the window or the panel both horizontally and vertically.

<div id="_class_input_constant_cursor_move"></div>

[CursorShape](#enum_input_cursorshape) **CURSOR_MOVE** = ``13``

Move cursor. Indicates that something can be moved.

<div id="_class_input_constant_cursor_vsplit"></div>

[CursorShape](#enum_input_cursorshape) **CURSOR_VSPLIT** = ``14``

Vertical split mouse cursor. On Windows, it's the same as [`CURSOR_VSIZE`](#class_input_constant_cursor_vsize).

<div id="_class_input_constant_cursor_hsplit"></div>

[CursorShape](#enum_input_cursorshape) **CURSOR_HSPLIT** = ``15``

Horizontal split mouse cursor. On Windows, it's the same as [`CURSOR_HSIZE`](#class_input_constant_cursor_hsize).

<div id="_class_input_constant_cursor_help"></div>

[CursorShape](#enum_input_cursorshape) **CURSOR_HELP** = ``16``

Help cursor. Usually a question mark.

<!-- rst-class:: classref-section-separator -->

---

## 属性说明

<div id="_class_input_property_emulate_mouse_from_touch"></div>

[`bool`](class_bool.md) **emulate_mouse_from_touch** <div id="class_input_property_emulate_mouse_from_touch"></div>

- `void` **set_emulate_mouse_from_touch** ( value: [`bool`](class_bool.md) )
- [`bool`](class_bool.md) **is_emulating_mouse_from_touch** ( )

If `true`, sends mouse input events when tapping or swiping on the touchscreen. See also [`ProjectSettings.input_devices/pointing/emulate_mouse_from_touch`](#class_projectsettings_property_input_devices/pointing/emulate_mouse_from_touch).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_input_property_emulate_touch_from_mouse"></div>

[`bool`](class_bool.md) **emulate_touch_from_mouse** <div id="class_input_property_emulate_touch_from_mouse"></div>

- `void` **set_emulate_touch_from_mouse** ( value: [`bool`](class_bool.md) )
- [`bool`](class_bool.md) **is_emulating_touch_from_mouse** ( )

If `true`, sends touch input events when clicking or dragging the mouse. See also [`ProjectSettings.input_devices/pointing/emulate_touch_from_mouse`](#class_projectsettings_property_input_devices/pointing/emulate_touch_from_mouse).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_input_property_mouse_mode"></div>

[MouseMode](#enum_input_mousemode) **mouse_mode** <div id="class_input_property_mouse_mode"></div>

- `void` **set_mouse_mode** ( value: [MouseMode](#enum_input_mousemode) )
- [MouseMode](#enum_input_mousemode) **get_mouse_mode** ( )

Controls the mouse mode. See [MouseMode](#enum_input_mousemode) for more information.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_input_property_use_accumulated_input"></div>

[`bool`](class_bool.md) **use_accumulated_input** <div id="class_input_property_use_accumulated_input"></div>

- `void` **set_use_accumulated_input** ( value: [`bool`](class_bool.md) )
- [`bool`](class_bool.md) **is_using_accumulated_input** ( )

If `true`, similar input events sent by the operating system are accumulated. When input accumulation is enabled, all input events generated during a frame will be merged and emitted when the frame is done rendering. Therefore, this limits the number of input method calls per second to the rendering FPS.

Input accumulation can be disabled to get slightly more precise/reactive input at the cost of increased CPU usage. In applications where drawing freehand lines is required, input accumulation should generally be disabled while the user is drawing the line to get results that closely follow the actual input.

 **Note:** Input accumulation is *enabled* by default.

<!-- rst-class:: classref-section-separator -->

---

## 方法说明

<div id="_class_input_method_action_press"></div>

`void` **action_press** ( action: [`StringName`](class_stringname.md), strength: [`float`](class_float.md) = 1.0 )<div id="class_input_method_action_press"></div>

This will simulate pressing the specified action.

The strength can be used for non-boolean actions, it's ranged between 0 and 1 representing the intensity of the given action.

 **Note:** This method will not cause any [`Node._input`](#class_node_private_method__input) calls. It is intended to be used with [`is_action_pressed`](#class_input_method_is_action_pressed) and [`is_action_just_pressed`](#class_input_method_is_action_just_pressed). If you want to simulate `_input`, use [`parse_input_event`](#class_input_method_parse_input_event) instead.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_input_method_action_release"></div>

`void` **action_release** ( action: [`StringName`](class_stringname.md) )<div id="class_input_method_action_release"></div>

If the specified action is already pressed, this will release it.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_input_method_add_joy_mapping"></div>

`void` **add_joy_mapping** ( mapping: [`String`](class_string.md), update_existing: [`bool`](class_bool.md) = false )<div id="class_input_method_add_joy_mapping"></div>

Adds a new mapping entry (in SDL2 format) to the mapping database. Optionally update already connected devices.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_input_method_flush_buffered_events"></div>

`void` **flush_buffered_events** ( )<div id="class_input_method_flush_buffered_events"></div>

Sends all input events which are in the current buffer to the game loop. These events may have been buffered as a result of accumulated input ([`use_accumulated_input`](#class_input_property_use_accumulated_input)) or agile input flushing ([`ProjectSettings.input_devices/buffering/agile_event_flushing`](#class_projectsettings_property_input_devices/buffering/agile_event_flushing)).

The engine will already do this itself at key execution points (at least once per frame). However, this can be useful in advanced cases where you want precise control over the timing of event handling.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_input_method_get_accelerometer"></div>

[`Vector3`](class_vector3.md) **get_accelerometer** ( ) const[^const]<div id="class_input_method_get_accelerometer"></div>

Returns the acceleration in m/s² of the device's accelerometer sensor, if the device has one. Otherwise, the method returns [`Vector3.ZERO`](#class_vector3_constant_zero).

Note this method returns an empty [`Vector3`](class_vector3.md) when running from the editor even when your device has an accelerometer. You must export your project to a supported device to read values from the accelerometer.

 **Note:** This method only works on Android and iOS. On other platforms, it always returns [`Vector3.ZERO`](#class_vector3_constant_zero).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_input_method_get_action_raw_strength"></div>

[`float`](class_float.md) **get_action_raw_strength** ( action: [`StringName`](class_stringname.md), exact_match: [`bool`](class_bool.md) = false ) const[^const]<div id="class_input_method_get_action_raw_strength"></div>

Returns a value between 0 and 1 representing the raw intensity of the given action, ignoring the action's deadzone. In most cases, you should use [`get_action_strength`](#class_input_method_get_action_strength) instead.

If `exact_match` is `false`, it ignores additional input modifiers for [`InputEventKey`](class_inputeventkey.md) and [`InputEventMouseButton`](class_inputeventmousebutton.md) events, and the direction for [`InputEventJoypadMotion`](class_inputeventjoypadmotion.md) events.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_input_method_get_action_strength"></div>

[`float`](class_float.md) **get_action_strength** ( action: [`StringName`](class_stringname.md), exact_match: [`bool`](class_bool.md) = false ) const[^const]<div id="class_input_method_get_action_strength"></div>

Returns a value between 0 and 1 representing the intensity of the given action. In a joypad, for example, the further away the axis (analog sticks or L2, R2 triggers) is from the dead zone, the closer the value will be to 1. If the action is mapped to a control that has no axis such as the keyboard, the value returned will be 0 or 1.

If `exact_match` is `false`, it ignores additional input modifiers for [`InputEventKey`](class_inputeventkey.md) and [`InputEventMouseButton`](class_inputeventmousebutton.md) events, and the direction for [`InputEventJoypadMotion`](class_inputeventjoypadmotion.md) events.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_input_method_get_axis"></div>

[`float`](class_float.md) **get_axis** ( negative_action: [`StringName`](class_stringname.md), positive_action: [`StringName`](class_stringname.md) ) const[^const]<div id="class_input_method_get_axis"></div>

Get axis input by specifying two actions, one negative and one positive.

This is a shorthand for writing `Input.get_action_strength("positive_action") - Input.get_action_strength("negative_action")`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_input_method_get_connected_joypads"></div>

[Array](class_array.md) [`int`](class_int.md) **get_connected_joypads** ( )<div id="class_input_method_get_connected_joypads"></div>

Returns an [`Array`](class_array.md) containing the device IDs of all currently connected joypads.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_input_method_get_current_cursor_shape"></div>

[CursorShape](#enum_input_cursorshape) **get_current_cursor_shape** ( ) const[^const]<div id="class_input_method_get_current_cursor_shape"></div>

Returns the currently assigned cursor shape (see [CursorShape](#enum_input_cursorshape)).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_input_method_get_gravity"></div>

[`Vector3`](class_vector3.md) **get_gravity** ( ) const[^const]<div id="class_input_method_get_gravity"></div>

Returns the gravity in m/s² of the device's accelerometer sensor, if the device has one. Otherwise, the method returns [`Vector3.ZERO`](#class_vector3_constant_zero).

 **Note:** This method only works on Android and iOS. On other platforms, it always returns [`Vector3.ZERO`](#class_vector3_constant_zero).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_input_method_get_gyroscope"></div>

[`Vector3`](class_vector3.md) **get_gyroscope** ( ) const[^const]<div id="class_input_method_get_gyroscope"></div>

Returns the rotation rate in rad/s around a device's X, Y, and Z axes of the gyroscope sensor, if the device has one. Otherwise, the method returns [`Vector3.ZERO`](#class_vector3_constant_zero).

 **Note:** This method only works on Android and iOS. On other platforms, it always returns [`Vector3.ZERO`](#class_vector3_constant_zero).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_input_method_get_joy_axis"></div>

[`float`](class_float.md) **get_joy_axis** ( device: [`int`](class_int.md), axis: [JoyAxis](#enum_@globalscope_joyaxis) ) const[^const]<div id="class_input_method_get_joy_axis"></div>

Returns the current value of the joypad axis at given index (see [JoyAxis](#enum_@globalscope_joyaxis)).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_input_method_get_joy_guid"></div>

[`String`](class_string.md) **get_joy_guid** ( device: [`int`](class_int.md) ) const[^const]<div id="class_input_method_get_joy_guid"></div>

Returns an SDL2-compatible device GUID on platforms that use gamepad remapping, e.g. `030000004c050000c405000000010000`. Returns `"Default Gamepad"` otherwise. Godot uses the [*SDL2 game controller database*](https://github.com/gabomdq/SDL_GameControllerDB) to determine gamepad names and mappings based on this GUID.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_input_method_get_joy_info"></div>

[`Dictionary`](class_dictionary.md) **get_joy_info** ( device: [`int`](class_int.md) ) const[^const]<div id="class_input_method_get_joy_info"></div>

Returns a dictionary with extra platform-specific information about the device, e.g. the raw gamepad name from the OS or the Steam Input index.

On Windows the dictionary contains the following fields:

 `xinput_index`: The index of the controller in the XInput system.

On Linux:

 `raw_name`: The name of the controller as it came from the OS, before getting renamed by the godot controller database.

 `vendor_id`: The USB vendor ID of the device.

 `product_id`: The USB product ID of the device.

 `steam_input_index`: The Steam Input gamepad index, if the device is not a Steam Input device this key won't be present.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_input_method_get_joy_name"></div>

[`String`](class_string.md) **get_joy_name** ( device: [`int`](class_int.md) )<div id="class_input_method_get_joy_name"></div>

Returns the name of the joypad at the specified device index, e.g. `PS4 Controller`. Godot uses the [*SDL2 game controller database*](https://github.com/gabomdq/SDL_GameControllerDB) to determine gamepad names.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_input_method_get_joy_vibration_duration"></div>

[`float`](class_float.md) **get_joy_vibration_duration** ( device: [`int`](class_int.md) )<div id="class_input_method_get_joy_vibration_duration"></div>

Returns the duration of the current vibration effect in seconds.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_input_method_get_joy_vibration_strength"></div>

[`Vector2`](class_vector2.md) **get_joy_vibration_strength** ( device: [`int`](class_int.md) )<div id="class_input_method_get_joy_vibration_strength"></div>

Returns the strength of the joypad vibration: x is the strength of the weak motor, and y is the strength of the strong motor.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_input_method_get_last_mouse_screen_velocity"></div>

[`Vector2`](class_vector2.md) **get_last_mouse_screen_velocity** ( )<div id="class_input_method_get_last_mouse_screen_velocity"></div>

Returns the last mouse velocity in screen coordinates. To provide a precise and jitter-free velocity, mouse velocity is only calculated every 0.1s. Therefore, mouse velocity will lag mouse movements.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_input_method_get_last_mouse_velocity"></div>

[`Vector2`](class_vector2.md) **get_last_mouse_velocity** ( )<div id="class_input_method_get_last_mouse_velocity"></div>

Returns the last mouse velocity. To provide a precise and jitter-free velocity, mouse velocity is only calculated every 0.1s. Therefore, mouse velocity will lag mouse movements.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_input_method_get_magnetometer"></div>

[`Vector3`](class_vector3.md) **get_magnetometer** ( ) const[^const]<div id="class_input_method_get_magnetometer"></div>

Returns the magnetic field strength in micro-Tesla for all axes of the device's magnetometer sensor, if the device has one. Otherwise, the method returns [`Vector3.ZERO`](#class_vector3_constant_zero).

 **Note:** This method only works on Android and iOS. On other platforms, it always returns [`Vector3.ZERO`](#class_vector3_constant_zero).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_input_method_get_mouse_button_mask"></div>

[MouseButtonMask](#enum_@globalscope_mousebuttonmask) **get_mouse_button_mask** ( ) const[^const]<div id="class_input_method_get_mouse_button_mask"></div>

Returns mouse buttons as a bitmask. If multiple mouse buttons are pressed at the same time, the bits are added together. Equivalent to [`DisplayServer.mouse_get_button_state`](#class_displayserver_method_mouse_get_button_state).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_input_method_get_vector"></div>

[`Vector2`](class_vector2.md) **get_vector** ( negative_x: [`StringName`](class_stringname.md), positive_x: [`StringName`](class_stringname.md), negative_y: [`StringName`](class_stringname.md), positive_y: [`StringName`](class_stringname.md), deadzone: [`float`](class_float.md) = -1.0 ) const[^const]<div id="class_input_method_get_vector"></div>

Gets an input vector by specifying four actions for the positive and negative X and Y axes.

This method is useful when getting vector input, such as from a joystick, directional pad, arrows, or WASD. The vector has its length limited to 1 and has a circular deadzone, which is useful for using vector input as movement.

By default, the deadzone is automatically calculated from the average of the action deadzones. However, you can override the deadzone to be whatever you want (on the range of 0 to 1).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_input_method_is_action_just_pressed"></div>

[`bool`](class_bool.md) **is_action_just_pressed** ( action: [`StringName`](class_stringname.md), exact_match: [`bool`](class_bool.md) = false ) const[^const]<div id="class_input_method_is_action_just_pressed"></div>

Returns `true` when the user has *started* pressing the action event in the current frame or physics tick. It will only return `true` on the frame or tick that the user pressed down the button.

This is useful for code that needs to run only once when an action is pressed, instead of every frame while it's pressed.

If `exact_match` is `false`, it ignores additional input modifiers for [`InputEventKey`](class_inputeventkey.md) and [`InputEventMouseButton`](class_inputeventmousebutton.md) events, and the direction for [`InputEventJoypadMotion`](class_inputeventjoypadmotion.md) events.

 **Note:** Returning `true` does not imply that the action is *still* pressed. An action can be pressed and released again rapidly, and `true` will still be returned so as not to miss input.

 **Note:** Due to keyboard ghosting, [`is_action_just_pressed`](#class_input_method_is_action_just_pressed) may return `false` even if one of the action's keys is pressed. See [*Input examples*](../tutorials/inputs/input_examples.md#keyboard-events) in the documentation for more information.

 **Note:** During input handling (e.g. [`Node._input`](#class_node_private_method__input)), use [`InputEvent.is_action_pressed`](#class_inputevent_method_is_action_pressed) instead to query the action state of the current event.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_input_method_is_action_just_released"></div>

[`bool`](class_bool.md) **is_action_just_released** ( action: [`StringName`](class_stringname.md), exact_match: [`bool`](class_bool.md) = false ) const[^const]<div id="class_input_method_is_action_just_released"></div>

Returns `true` when the user *stops* pressing the action event in the current frame or physics tick. It will only return `true` on the frame or tick that the user releases the button.

 **Note:** Returning `true` does not imply that the action is *still* not pressed. An action can be released and pressed again rapidly, and `true` will still be returned so as not to miss input.

If `exact_match` is `false`, it ignores additional input modifiers for [`InputEventKey`](class_inputeventkey.md) and [`InputEventMouseButton`](class_inputeventmousebutton.md) events, and the direction for [`InputEventJoypadMotion`](class_inputeventjoypadmotion.md) events.

 **Note:** During input handling (e.g. [`Node._input`](#class_node_private_method__input)), use [`InputEvent.is_action_released`](#class_inputevent_method_is_action_released) instead to query the action state of the current event.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_input_method_is_action_pressed"></div>

[`bool`](class_bool.md) **is_action_pressed** ( action: [`StringName`](class_stringname.md), exact_match: [`bool`](class_bool.md) = false ) const[^const]<div id="class_input_method_is_action_pressed"></div>

Returns `true` if you are pressing the action event.

If `exact_match` is `false`, it ignores additional input modifiers for [`InputEventKey`](class_inputeventkey.md) and [`InputEventMouseButton`](class_inputeventmousebutton.md) events, and the direction for [`InputEventJoypadMotion`](class_inputeventjoypadmotion.md) events.

 **Note:** Due to keyboard ghosting, [`is_action_pressed`](#class_input_method_is_action_pressed) may return `false` even if one of the action's keys is pressed. See [*Input examples*](../tutorials/inputs/input_examples.md#keyboard-events) in the documentation for more information.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_input_method_is_anything_pressed"></div>

[`bool`](class_bool.md) **is_anything_pressed** ( ) const[^const]<div id="class_input_method_is_anything_pressed"></div>

Returns `true` if any action, key, joypad button, or mouse button is being pressed. This will also return `true` if any action is simulated via code by calling [`action_press`](#class_input_method_action_press).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_input_method_is_joy_button_pressed"></div>

[`bool`](class_bool.md) **is_joy_button_pressed** ( device: [`int`](class_int.md), button: [JoyButton](#enum_@globalscope_joybutton) ) const[^const]<div id="class_input_method_is_joy_button_pressed"></div>

Returns `true` if you are pressing the joypad button (see [JoyButton](#enum_@globalscope_joybutton)).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_input_method_is_joy_known"></div>

[`bool`](class_bool.md) **is_joy_known** ( device: [`int`](class_int.md) )<div id="class_input_method_is_joy_known"></div>

Returns `true` if the system knows the specified device. This means that it sets all button and axis indices. Unknown joypads are not expected to match these constants, but you can still retrieve events from them.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_input_method_is_key_label_pressed"></div>

[`bool`](class_bool.md) **is_key_label_pressed** ( keycode: [Key](#enum_@globalscope_key) ) const[^const]<div id="class_input_method_is_key_label_pressed"></div>

Returns `true` if you are pressing the key with the `keycode` printed on it. You can pass a [Key](#enum_@globalscope_key) constant or any Unicode character code.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_input_method_is_key_pressed"></div>

[`bool`](class_bool.md) **is_key_pressed** ( keycode: [Key](#enum_@globalscope_key) ) const[^const]<div id="class_input_method_is_key_pressed"></div>

Returns `true` if you are pressing the Latin key in the current keyboard layout. You can pass a [Key](#enum_@globalscope_key) constant.

 [`is_key_pressed`](#class_input_method_is_key_pressed) is only recommended over [`is_physical_key_pressed`](#class_input_method_is_physical_key_pressed) in non-game applications. This ensures that shortcut keys behave as expected depending on the user's keyboard layout, as keyboard shortcuts are generally dependent on the keyboard layout in non-game applications. If in doubt, use [`is_physical_key_pressed`](#class_input_method_is_physical_key_pressed).

 **Note:** Due to keyboard ghosting, [`is_key_pressed`](#class_input_method_is_key_pressed) may return `false` even if one of the action's keys is pressed. See [*Input examples*](../tutorials/inputs/input_examples.md#keyboard-events) in the documentation for more information.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_input_method_is_mouse_button_pressed"></div>

[`bool`](class_bool.md) **is_mouse_button_pressed** ( button: [MouseButton](#enum_@globalscope_mousebutton) ) const[^const]<div id="class_input_method_is_mouse_button_pressed"></div>

Returns `true` if you are pressing the mouse button specified with [MouseButton](#enum_@globalscope_mousebutton).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_input_method_is_physical_key_pressed"></div>

[`bool`](class_bool.md) **is_physical_key_pressed** ( keycode: [Key](#enum_@globalscope_key) ) const[^const]<div id="class_input_method_is_physical_key_pressed"></div>

Returns `true` if you are pressing the key in the physical location on the 101/102-key US QWERTY keyboard. You can pass a [Key](#enum_@globalscope_key) constant.

 [`is_physical_key_pressed`](#class_input_method_is_physical_key_pressed) is recommended over [`is_key_pressed`](#class_input_method_is_key_pressed) for in-game actions, as it will make <i class="fa fa-gamepad"></i>`W`/<i class="fa fa-gamepad"></i>`A`/<i class="fa fa-gamepad"></i>`S`/<i class="fa fa-gamepad"></i>`D` layouts work regardless of the user's keyboard layout. [`is_physical_key_pressed`](#class_input_method_is_physical_key_pressed) will also ensure that the top row number keys work on any keyboard layout. If in doubt, use [`is_physical_key_pressed`](#class_input_method_is_physical_key_pressed).

 **Note:** Due to keyboard ghosting, [`is_physical_key_pressed`](#class_input_method_is_physical_key_pressed) may return `false` even if one of the action's keys is pressed. See [*Input examples*](../tutorials/inputs/input_examples.md#keyboard-events) in the documentation for more information.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_input_method_parse_input_event"></div>

`void` **parse_input_event** ( event: [`InputEvent`](class_inputevent.md) )<div id="class_input_method_parse_input_event"></div>

Feeds an [`InputEvent`](class_inputevent.md) to the game. Can be used to artificially trigger input events from code. Also generates [`Node._input`](#class_node_private_method__input) calls.

 **Example:** 



```gdscript

    var cancel_event = InputEventAction.new()
    cancel_event.action = "ui_cancel"
    cancel_event.pressed = true
    Input.parse_input_event(cancel_event)
```

```csharp

    var cancelEvent = new InputEventAction();
    cancelEvent.Action = "ui_cancel";
    cancelEvent.Pressed = true;
    Input.ParseInputEvent(cancelEvent);
```



 **Note:** Calling this function has no influence on the operating system. So for example sending an [`InputEventMouseMotion`](class_inputeventmousemotion.md) will not move the OS mouse cursor to the specified position (use [`warp_mouse`](#class_input_method_warp_mouse) instead) and sending <i class="fa fa-gamepad"></i>`Alt/Cmd + Tab` as [`InputEventKey`](class_inputeventkey.md) won't toggle between active windows.





<!-- rst-class:: classref-item-separator -->

---

<div id="_class_input_method_remove_joy_mapping"></div>

`void` **remove_joy_mapping** ( guid: [`String`](class_string.md) )<div id="class_input_method_remove_joy_mapping"></div>

Removes all mappings from the internal database that match the given GUID.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_input_method_set_accelerometer"></div>

`void` **set_accelerometer** ( value: [`Vector3`](class_vector3.md) )<div id="class_input_method_set_accelerometer"></div>

Sets the acceleration value of the accelerometer sensor. Can be used for debugging on devices without a hardware sensor, for example in an editor on a PC.

 **Note:** This value can be immediately overwritten by the hardware sensor value on Android and iOS.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_input_method_set_custom_mouse_cursor"></div>

`void` **set_custom_mouse_cursor** ( image: [`Resource`](class_resource.md), shape: [CursorShape](#enum_input_cursorshape) = 0, hotspot: [`Vector2`](class_vector2.md) = Vector2(0, 0) )<div id="class_input_method_set_custom_mouse_cursor"></div>

Sets a custom mouse cursor image, which is only visible inside the game window. The hotspot can also be specified. Passing `null` to the image parameter resets to the system cursor. See [CursorShape](#enum_input_cursorshape) for the list of shapes.

 `image` can be either [`Texture2D`](class_texture2d.md) or [`Image`](class_image.md) and its size must be lower than or equal to 256×256. To avoid rendering issues, sizes lower than or equal to 128×128 are recommended.

 `hotspot` must be within `image`'s size.

 **Note:** [`AnimatedTexture`](class_animatedtexture.md) s aren't supported as custom mouse cursors. If using an [`AnimatedTexture`](class_animatedtexture.md), only the first frame will be displayed.

 **Note:** The **Lossless**, **Lossy** or **Uncompressed** compression modes are recommended. The **Video RAM** compression mode can be used, but it will be decompressed on the CPU, which means loading times are slowed down and no memory is saved compared to lossless modes.

 **Note:** On the web platform, the maximum allowed cursor image size is 128×128. Cursor images larger than 32×32 will also only be displayed if the mouse cursor image is entirely located within the page for [*security reasons*](https://chromestatus.com/feature/5825971391299584).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_input_method_set_default_cursor_shape"></div>

`void` **set_default_cursor_shape** ( shape: [CursorShape](#enum_input_cursorshape) = 0 )<div id="class_input_method_set_default_cursor_shape"></div>

Sets the default cursor shape to be used in the viewport instead of [`CURSOR_ARROW`](#class_input_constant_cursor_arrow).

 **Note:** If you want to change the default cursor shape for [`Control`](class_control.md)'s nodes, use [`Control.mouse_default_cursor_shape`](#class_control_property_mouse_default_cursor_shape) instead.

 **Note:** This method generates an [`InputEventMouseMotion`](class_inputeventmousemotion.md) to update cursor immediately.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_input_method_set_gravity"></div>

`void` **set_gravity** ( value: [`Vector3`](class_vector3.md) )<div id="class_input_method_set_gravity"></div>

Sets the gravity value of the accelerometer sensor. Can be used for debugging on devices without a hardware sensor, for example in an editor on a PC.

 **Note:** This value can be immediately overwritten by the hardware sensor value on Android and iOS.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_input_method_set_gyroscope"></div>

`void` **set_gyroscope** ( value: [`Vector3`](class_vector3.md) )<div id="class_input_method_set_gyroscope"></div>

Sets the value of the rotation rate of the gyroscope sensor. Can be used for debugging on devices without a hardware sensor, for example in an editor on a PC.

 **Note:** This value can be immediately overwritten by the hardware sensor value on Android and iOS.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_input_method_set_magnetometer"></div>

`void` **set_magnetometer** ( value: [`Vector3`](class_vector3.md) )<div id="class_input_method_set_magnetometer"></div>

Sets the value of the magnetic field of the magnetometer sensor. Can be used for debugging on devices without a hardware sensor, for example in an editor on a PC.

 **Note:** This value can be immediately overwritten by the hardware sensor value on Android and iOS.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_input_method_should_ignore_device"></div>

[`bool`](class_bool.md) **should_ignore_device** ( vendor_id: [`int`](class_int.md), product_id: [`int`](class_int.md) ) const[^const]<div id="class_input_method_should_ignore_device"></div>

Queries whether an input device should be ignored or not. Devices can be ignored by setting the environment variable `SDL_GAMECONTROLLER_IGNORE_DEVICES`. Read the [*SDL documentation*](https://wiki.libsdl.org/SDL2) for more information.

 **Note:** Some 3rd party tools can contribute to the list of ignored devices. For example, *SteamInput* creates virtual devices from physical devices for remapping purposes. To avoid handling the same input device twice, the original device is added to the ignore list.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_input_method_start_joy_vibration"></div>

`void` **start_joy_vibration** ( device: [`int`](class_int.md), weak_magnitude: [`float`](class_float.md), strong_magnitude: [`float`](class_float.md), duration: [`float`](class_float.md) = 0 )<div id="class_input_method_start_joy_vibration"></div>

Starts to vibrate the joypad. Joypads usually come with two rumble motors, a strong and a weak one. `weak_magnitude` is the strength of the weak motor (between 0 and 1) and `strong_magnitude` is the strength of the strong motor (between 0 and 1). `duration` is the duration of the effect in seconds (a duration of 0 will try to play the vibration indefinitely). The vibration can be stopped early by calling [`stop_joy_vibration`](#class_input_method_stop_joy_vibration).

 **Note:** Not every hardware is compatible with long effect durations; it is recommended to restart an effect if it has to be played for more than a few seconds.

 **Note:** For macOS, vibration is only supported in macOS 11 and later.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_input_method_stop_joy_vibration"></div>

`void` **stop_joy_vibration** ( device: [`int`](class_int.md) )<div id="class_input_method_stop_joy_vibration"></div>

Stops the vibration of the joypad started with [`start_joy_vibration`](#class_input_method_start_joy_vibration).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_input_method_vibrate_handheld"></div>

`void` **vibrate_handheld** ( duration_ms: [`int`](class_int.md) = 500, amplitude: [`float`](class_float.md) = -1.0 )<div id="class_input_method_vibrate_handheld"></div>

Vibrate the handheld device for the specified duration in milliseconds.

 `amplitude` is the strength of the vibration, as a value between `0.0` and `1.0`. If set to `-1.0`, the default vibration strength of the device is used.

 **Note:** This method is implemented on Android, iOS, and Web. It has no effect on other platforms.

 **Note:** For Android, [`vibrate_handheld`](#class_input_method_vibrate_handheld) requires enabling the `VIBRATE` permission in the export preset. Otherwise, [`vibrate_handheld`](#class_input_method_vibrate_handheld) will have no effect.

 **Note:** For iOS, specifying the duration is only supported in iOS 13 and later.

 **Note:** For Web, the amplitude cannot be changed.

 **Note:** Some web browsers such as Safari and Firefox for Android do not support [`vibrate_handheld`](#class_input_method_vibrate_handheld).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_input_method_warp_mouse"></div>

`void` **warp_mouse** ( position: [`Vector2`](class_vector2.md) )<div id="class_input_method_warp_mouse"></div>

Sets the mouse position to the specified vector, provided in pixels and relative to an origin at the upper left corner of the currently focused Window Manager game window.

Mouse position is clipped to the limits of the screen resolution, or to the limits of the game window if [MouseMode](#enum_input_mousemode) is set to [`MOUSE_MODE_CONFINED`](#class_input_constant_mouse_mode_confined) or [`MOUSE_MODE_CONFINED_HIDDEN`](#class_input_constant_mouse_mode_confined_hidden).

 **Note:** [`warp_mouse`](#class_input_method_warp_mouse) is only supported on Windows, macOS and Linux. It has no effect on Android, iOS and Web.

[^virtual]: 本方法通常需要用户覆盖才能生效。
[^const]: 本方法无副作用，不会修改该实例的任何成员变量。
[^vararg]: 本方法除了能接受在此处描述的参数外，还能够继续接受任意数量的参数。
[^constructor]: 本方法用于构造某个类型。
[^static]: 调用本方法无需实例，可直接使用类名进行调用。
[^operator]: 本方法描述的是使用本类型作为左操作数的有效运算符。
[^bitfield]: 这个值是由下列位标志构成位掩码的整数。
[^void]: 无返回值。
