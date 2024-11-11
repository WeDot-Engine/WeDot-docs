<!-- ⚠ 请勿编辑本文件 ⚠ -->
<!-- 本文档使用脚本从 WeDot 引擎源码仓库生成。 -->
<!-- 生成脚本：https://github.com/WeDot-Engine/WeDot/tree/master/doc/tools/make_md.py； -->
<!-- 原文件：https://github.com/WeDot-Engine/WeDot/tree/master/doc/classes/AnimationPlayer.xml。 -->

<div id="_class_animationplayer"></div>

# AnimationPlayer

**继承：** [`AnimationMixer`](class_animationmixer.md) **<** [`Node`](class_node.md) **<** [`Object`](class_object.md)

A node used for animation playback.

## 描述

An animation player is used for general-purpose playback of animations. It contains a dictionary of [`AnimationLibrary`](class_animationlibrary.md) resources and custom blend times between animation transitions.

Some methods and properties use a single key to reference an animation directly. These keys are formatted as the key for the library, followed by a forward slash, then the key for the animation within the library, for example `"movement/run"`. If the library's key is an empty string (known as the default library), the forward slash is omitted, being the same key used by the library.

 **AnimationPlayer** is better-suited than [`Tween`](class_tween.md) for more complex animations, for example ones with non-trivial timings. It can also be used over [`Tween`](class_tween.md) if the animation track editor is more convenient than doing it in code.

Updating the target properties of animations occurs at the process frame.

## 属性

|||
|:-:|:--|
| [`String`](class_string.md)                  | [`assigned_animation`](class_animationplayer.md#class_animationplayer_property_assigned_animation)                                       |           |
| [`String`](class_string.md)                  | [`autoplay`](class_animationplayer.md#class_animationplayer_property_autoplay)                                                           | ``""``    |
| [`String`](class_string.md)                  | [`current_animation`](class_animationplayer.md#class_animationplayer_property_current_animation)                                         | ``""``    |
| [`float`](class_float.md)                    | [`current_animation_length`](class_animationplayer.md#class_animationplayer_property_current_animation_length)                           |           |
| [`float`](class_float.md)                    | [`current_animation_position`](class_animationplayer.md#class_animationplayer_property_current_animation_position)                       |           |
| [`bool`](class_bool.md)                      | [`movie_quit_on_finish`](class_animationplayer.md#class_animationplayer_property_movie_quit_on_finish)                                   | ``false`` |
| [`bool`](class_bool.md)                      | [`playback_auto_capture`](class_animationplayer.md#class_animationplayer_property_playback_auto_capture)                                 | ``true``  |
| [`float`](class_float.md)                    | [`playback_auto_capture_duration`](class_animationplayer.md#class_animationplayer_property_playback_auto_capture_duration)               | ``-1.0``  |
| [EaseType](#enum_tween_easetype)             | [`playback_auto_capture_ease_type`](class_animationplayer.md#class_animationplayer_property_playback_auto_capture_ease_type)             | ``0``     |
| [TransitionType](#enum_tween_transitiontype) | [`playback_auto_capture_transition_type`](class_animationplayer.md#class_animationplayer_property_playback_auto_capture_transition_type) | ``0``     |
| [`float`](class_float.md)                    | [`playback_default_blend_time`](class_animationplayer.md#class_animationplayer_property_playback_default_blend_time)                     | ``0.0``   |
| [`float`](class_float.md)                    | [`speed_scale`](class_animationplayer.md#class_animationplayer_property_speed_scale)                                                     | ``1.0``   |

## 方法

|||
|:-:|:--|
| [`StringName`](class_stringname.md)                                        | [`animation_get_next`](class_animationplayer.md#class_animationplayer_method_animation_get_next) ( animation_from: [`StringName`](class_stringname.md) ) const[^const]                                                                                                                                                                                                                                                                                |
| `void`                                                                     | [`animation_set_next`](class_animationplayer.md#class_animationplayer_method_animation_set_next) ( animation_from: [`StringName`](class_stringname.md), animation_to: [`StringName`](class_stringname.md) )                                                                                                                                                                                                                                           |
| `void`                                                                     | [`clear_queue`](class_animationplayer.md#class_animationplayer_method_clear_queue) ( )                                                                                                                                                                                                                                                                                                                                                                |
| [`float`](class_float.md)                                                  | [`get_blend_time`](class_animationplayer.md#class_animationplayer_method_get_blend_time) ( animation_from: [`StringName`](class_stringname.md), animation_to: [`StringName`](class_stringname.md) ) const[^const]                                                                                                                                                                                                                                     |
| [AnimationMethodCallMode](#enum_animationplayer_animationmethodcallmode)   | [`get_method_call_mode`](class_animationplayer.md#class_animationplayer_method_get_method_call_mode) ( ) const[^const]                                                                                                                                                                                                                                                                                                                                |
| [`float`](class_float.md)                                                  | [`get_playing_speed`](class_animationplayer.md#class_animationplayer_method_get_playing_speed) ( ) const[^const]                                                                                                                                                                                                                                                                                                                                      |
| [AnimationProcessCallback](#enum_animationplayer_animationprocesscallback) | [`get_process_callback`](class_animationplayer.md#class_animationplayer_method_get_process_callback) ( ) const[^const]                                                                                                                                                                                                                                                                                                                                |
| [`PackedStringArray`](class_packedstringarray.md)                          | [`get_queue`](class_animationplayer.md#class_animationplayer_method_get_queue) ( )                                                                                                                                                                                                                                                                                                                                                                    |
| [`NodePath`](class_nodepath.md)                                            | [`get_root`](class_animationplayer.md#class_animationplayer_method_get_root) ( ) const[^const]                                                                                                                                                                                                                                                                                                                                                        |
| [`float`](class_float.md)                                                  | [`get_section_end_time`](class_animationplayer.md#class_animationplayer_method_get_section_end_time) ( ) const[^const]                                                                                                                                                                                                                                                                                                                                |
| [`float`](class_float.md)                                                  | [`get_section_start_time`](class_animationplayer.md#class_animationplayer_method_get_section_start_time) ( ) const[^const]                                                                                                                                                                                                                                                                                                                            |
| [`bool`](class_bool.md)                                                    | [`has_section`](class_animationplayer.md#class_animationplayer_method_has_section) ( ) const[^const]                                                                                                                                                                                                                                                                                                                                                  |
| [`bool`](class_bool.md)                                                    | [`is_playing`](class_animationplayer.md#class_animationplayer_method_is_playing) ( ) const[^const]                                                                                                                                                                                                                                                                                                                                                    |
| `void`                                                                     | [`pause`](class_animationplayer.md#class_animationplayer_method_pause) ( )                                                                                                                                                                                                                                                                                                                                                                            |
| `void`                                                                     | [`play`](class_animationplayer.md#class_animationplayer_method_play) ( name: [`StringName`](class_stringname.md) = &"", custom_blend: [`float`](class_float.md) = -1, custom_speed: [`float`](class_float.md) = 1.0, from_end: [`bool`](class_bool.md) = false )                                                                                                                                                                                      |
| `void`                                                                     | [`play_backwards`](class_animationplayer.md#class_animationplayer_method_play_backwards) ( name: [`StringName`](class_stringname.md) = &"", custom_blend: [`float`](class_float.md) = -1 )                                                                                                                                                                                                                                                            |
| `void`                                                                     | [`play_section`](class_animationplayer.md#class_animationplayer_method_play_section) ( name: [`StringName`](class_stringname.md) = &"", start_time: [`float`](class_float.md) = -1, end_time: [`float`](class_float.md) = -1, custom_blend: [`float`](class_float.md) = -1, custom_speed: [`float`](class_float.md) = 1.0, from_end: [`bool`](class_bool.md) = false )                                                                                |
| `void`                                                                     | [`play_section_backwards`](class_animationplayer.md#class_animationplayer_method_play_section_backwards) ( name: [`StringName`](class_stringname.md) = &"", start_time: [`float`](class_float.md) = -1, end_time: [`float`](class_float.md) = -1, custom_blend: [`float`](class_float.md) = -1 )                                                                                                                                                      |
| `void`                                                                     | [`play_section_with_markers`](class_animationplayer.md#class_animationplayer_method_play_section_with_markers) ( name: [`StringName`](class_stringname.md) = &"", start_marker: [`StringName`](class_stringname.md) = &"", end_marker: [`StringName`](class_stringname.md) = &"", custom_blend: [`float`](class_float.md) = -1, custom_speed: [`float`](class_float.md) = 1.0, from_end: [`bool`](class_bool.md) = false )                            |
| `void`                                                                     | [`play_section_with_markers_backwards`](class_animationplayer.md#class_animationplayer_method_play_section_with_markers_backwards) ( name: [`StringName`](class_stringname.md) = &"", start_marker: [`StringName`](class_stringname.md) = &"", end_marker: [`StringName`](class_stringname.md) = &"", custom_blend: [`float`](class_float.md) = -1 )                                                                                                  |
| `void`                                                                     | [`play_with_capture`](class_animationplayer.md#class_animationplayer_method_play_with_capture) ( name: [`StringName`](class_stringname.md) = &"", duration: [`float`](class_float.md) = -1.0, custom_blend: [`float`](class_float.md) = -1, custom_speed: [`float`](class_float.md) = 1.0, from_end: [`bool`](class_bool.md) = false, trans_type: [TransitionType](#enum_tween_transitiontype) = 0, ease_type: [EaseType](#enum_tween_easetype) = 0 ) |
| `void`                                                                     | [`queue`](class_animationplayer.md#class_animationplayer_method_queue) ( name: [`StringName`](class_stringname.md) )                                                                                                                                                                                                                                                                                                                                  |
| `void`                                                                     | [`reset_section`](class_animationplayer.md#class_animationplayer_method_reset_section) ( )                                                                                                                                                                                                                                                                                                                                                            |
| `void`                                                                     | [`seek`](class_animationplayer.md#class_animationplayer_method_seek) ( seconds: [`float`](class_float.md), update: [`bool`](class_bool.md) = false, update_only: [`bool`](class_bool.md) = false )                                                                                                                                                                                                                                                    |
| `void`                                                                     | [`set_blend_time`](class_animationplayer.md#class_animationplayer_method_set_blend_time) ( animation_from: [`StringName`](class_stringname.md), animation_to: [`StringName`](class_stringname.md), sec: [`float`](class_float.md) )                                                                                                                                                                                                                   |
| `void`                                                                     | [`set_method_call_mode`](class_animationplayer.md#class_animationplayer_method_set_method_call_mode) ( mode: [AnimationMethodCallMode](#enum_animationplayer_animationmethodcallmode) )                                                                                                                                                                                                                                                               |
| `void`                                                                     | [`set_process_callback`](class_animationplayer.md#class_animationplayer_method_set_process_callback) ( mode: [AnimationProcessCallback](#enum_animationplayer_animationprocesscallback) )                                                                                                                                                                                                                                                             |
| `void`                                                                     | [`set_root`](class_animationplayer.md#class_animationplayer_method_set_root) ( path: [`NodePath`](class_nodepath.md) )                                                                                                                                                                                                                                                                                                                                |
| `void`                                                                     | [`set_section`](class_animationplayer.md#class_animationplayer_method_set_section) ( start_time: [`float`](class_float.md) = -1, end_time: [`float`](class_float.md) = -1 )                                                                                                                                                                                                                                                                           |
| `void`                                                                     | [`set_section_with_markers`](class_animationplayer.md#class_animationplayer_method_set_section_with_markers) ( start_marker: [`StringName`](class_stringname.md) = &"", end_marker: [`StringName`](class_stringname.md) = &"" )                                                                                                                                                                                                                       |
| `void`                                                                     | [`stop`](class_animationplayer.md#class_animationplayer_method_stop) ( keep_state: [`bool`](class_bool.md) = false )                                                                                                                                                                                                                                                                                                                                  |

<!-- rst-class:: classref-section-separator -->

---

## 信号

<div id="_class_class_animationplayer_signal_animation_changed"></div>

**animation_changed** ( old_name: [`StringName`](class_stringname.md), new_name: [`StringName`](class_stringname.md) ) <div id="class_animationplayer_signal_animation_changed"></div>

Emitted when a queued animation plays after the previous animation finished. See also [`queue`](class_animationplayer.md#class_animationplayer_method_queue).

 **Note:** The signal is not emitted when the animation is changed via [`play`](class_animationplayer.md#class_animationplayer_method_play) or by an [`AnimationTree`](class_animationtree.md).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_class_animationplayer_signal_current_animation_changed"></div>

**current_animation_changed** ( name: [`String`](class_string.md) ) <div id="class_animationplayer_signal_current_animation_changed"></div>

Emitted when [`current_animation`](class_animationplayer.md#class_animationplayer_property_current_animation) changes.

<!-- rst-class:: classref-section-separator -->

---

## 枚举

<div id="_class_enum_animationplayer_animationprocesscallback"></div>

enum **AnimationProcessCallback**: <div id="enum_animationplayer_animationprocesscallback"></div>

<div id="_class_animationplayer_constant_animation_process_physics"></div>

[AnimationProcessCallback](#enum_animationplayer_animationprocesscallback) **ANIMATION_PROCESS_PHYSICS** = ``0``

**已弃用：** See [`AnimationMixer.ANIMATION_CALLBACK_MODE_PROCESS_PHYSICS`](class_animationmixer.md#class_animationmixer_constant_animation_callback_mode_process_physics).



<div id="_class_animationplayer_constant_animation_process_idle"></div>

[AnimationProcessCallback](#enum_animationplayer_animationprocesscallback) **ANIMATION_PROCESS_IDLE** = ``1``

**已弃用：** See [`AnimationMixer.ANIMATION_CALLBACK_MODE_PROCESS_IDLE`](class_animationmixer.md#class_animationmixer_constant_animation_callback_mode_process_idle).



<div id="_class_animationplayer_constant_animation_process_manual"></div>

[AnimationProcessCallback](#enum_animationplayer_animationprocesscallback) **ANIMATION_PROCESS_MANUAL** = ``2``

**已弃用：** See [`AnimationMixer.ANIMATION_CALLBACK_MODE_PROCESS_MANUAL`](class_animationmixer.md#class_animationmixer_constant_animation_callback_mode_process_manual).



<!-- rst-class:: classref-item-separator -->

---

<div id="_class_enum_animationplayer_animationmethodcallmode"></div>

enum **AnimationMethodCallMode**: <div id="enum_animationplayer_animationmethodcallmode"></div>

<div id="_class_animationplayer_constant_animation_method_call_deferred"></div>

[AnimationMethodCallMode](#enum_animationplayer_animationmethodcallmode) **ANIMATION_METHOD_CALL_DEFERRED** = ``0``

**已弃用：** See [`AnimationMixer.ANIMATION_CALLBACK_MODE_METHOD_DEFERRED`](class_animationmixer.md#class_animationmixer_constant_animation_callback_mode_method_deferred).



<div id="_class_animationplayer_constant_animation_method_call_immediate"></div>

[AnimationMethodCallMode](#enum_animationplayer_animationmethodcallmode) **ANIMATION_METHOD_CALL_IMMEDIATE** = ``1``

**已弃用：** See [`AnimationMixer.ANIMATION_CALLBACK_MODE_METHOD_IMMEDIATE`](class_animationmixer.md#class_animationmixer_constant_animation_callback_mode_method_immediate).



<!-- rst-class:: classref-section-separator -->

---

## 属性说明

<div id="_class_animationplayer_property_assigned_animation"></div>

[`String`](class_string.md) **assigned_animation** <div id="class_animationplayer_property_assigned_animation"></div>

- `void` **set_assigned_animation** ( value: [`String`](class_string.md) )
- [`String`](class_string.md) **get_assigned_animation** ( )

If playing, the current animation's key, otherwise, the animation last played. When set, this changes the animation, but will not play it unless already playing. See also [`current_animation`](class_animationplayer.md#class_animationplayer_property_current_animation).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_animationplayer_property_autoplay"></div>

[`String`](class_string.md) **autoplay** = ``""`` <div id="class_animationplayer_property_autoplay"></div>

- `void` **set_autoplay** ( value: [`String`](class_string.md) )
- [`String`](class_string.md) **get_autoplay** ( )

The key of the animation to play when the scene loads.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_animationplayer_property_current_animation"></div>

[`String`](class_string.md) **current_animation** = ``""`` <div id="class_animationplayer_property_current_animation"></div>

- `void` **set_current_animation** ( value: [`String`](class_string.md) )
- [`String`](class_string.md) **get_current_animation** ( )

The key of the currently playing animation. If no animation is playing, the property's value is an empty string. Changing this value does not restart the animation. See [`play`](class_animationplayer.md#class_animationplayer_method_play) for more information on playing animations.

 **Note:** While this property appears in the Inspector, it's not meant to be edited, and it's not saved in the scene. This property is mainly used to get the currently playing animation, and internally for animation playback tracks. For more information, see [`Animation`](class_animation.md).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_animationplayer_property_current_animation_length"></div>

[`float`](class_float.md) **current_animation_length** <div id="class_animationplayer_property_current_animation_length"></div>

- [`float`](class_float.md) **get_current_animation_length** ( )

The length (in seconds) of the currently playing animation.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_animationplayer_property_current_animation_position"></div>

[`float`](class_float.md) **current_animation_position** <div id="class_animationplayer_property_current_animation_position"></div>

- [`float`](class_float.md) **get_current_animation_position** ( )

The position (in seconds) of the currently playing animation.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_animationplayer_property_movie_quit_on_finish"></div>

[`bool`](class_bool.md) **movie_quit_on_finish** = ``false`` <div id="class_animationplayer_property_movie_quit_on_finish"></div>

- `void` **set_movie_quit_on_finish_enabled** ( value: [`bool`](class_bool.md) )
- [`bool`](class_bool.md) **is_movie_quit_on_finish_enabled** ( )

If `true` and the engine is running in Movie Maker mode (see [`MovieWriter`](class_moviewriter.md)), exits the engine with [`SceneTree.quit`](class_scenetree.md#class_scenetree_method_quit) as soon as an animation is done playing in this **AnimationPlayer**. A message is printed when the engine quits for this reason.

 **Note:** This obeys the same logic as the [`AnimationMixer.animation_finished`](class_animationmixer.md#class_animationmixer_signal_animation_finished) signal, so it will not quit the engine if the animation is set to be looping.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_animationplayer_property_playback_auto_capture"></div>

[`bool`](class_bool.md) **playback_auto_capture** = ``true`` <div id="class_animationplayer_property_playback_auto_capture"></div>

- `void` **set_auto_capture** ( value: [`bool`](class_bool.md) )
- [`bool`](class_bool.md) **is_auto_capture** ( )

If `true`, performs [`AnimationMixer.capture`](class_animationmixer.md#class_animationmixer_method_capture) before playback automatically. This means just [`play_with_capture`](class_animationplayer.md#class_animationplayer_method_play_with_capture) is executed with default arguments instead of [`play`](class_animationplayer.md#class_animationplayer_method_play).

 **Note:** Capture interpolation is only performed if the animation contains a capture track. See also [`Animation.UPDATE_CAPTURE`](class_animation.md#class_animation_constant_update_capture).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_animationplayer_property_playback_auto_capture_duration"></div>

[`float`](class_float.md) **playback_auto_capture_duration** = ``-1.0`` <div id="class_animationplayer_property_playback_auto_capture_duration"></div>

- `void` **set_auto_capture_duration** ( value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_auto_capture_duration** ( )

See also [`play_with_capture`](class_animationplayer.md#class_animationplayer_method_play_with_capture) and [`AnimationMixer.capture`](class_animationmixer.md#class_animationmixer_method_capture).

If [`playback_auto_capture_duration`](class_animationplayer.md#class_animationplayer_property_playback_auto_capture_duration) is negative value, the duration is set to the interval between the current position and the first key.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_animationplayer_property_playback_auto_capture_ease_type"></div>

[EaseType](#enum_tween_easetype) **playback_auto_capture_ease_type** = ``0`` <div id="class_animationplayer_property_playback_auto_capture_ease_type"></div>

- `void` **set_auto_capture_ease_type** ( value: [EaseType](#enum_tween_easetype) )
- [EaseType](#enum_tween_easetype) **get_auto_capture_ease_type** ( )

The ease type of the capture interpolation. See also [EaseType](#enum_tween_easetype).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_animationplayer_property_playback_auto_capture_transition_type"></div>

[TransitionType](#enum_tween_transitiontype) **playback_auto_capture_transition_type** = ``0`` <div id="class_animationplayer_property_playback_auto_capture_transition_type"></div>

- `void` **set_auto_capture_transition_type** ( value: [TransitionType](#enum_tween_transitiontype) )
- [TransitionType](#enum_tween_transitiontype) **get_auto_capture_transition_type** ( )

The transition type of the capture interpolation. See also [TransitionType](#enum_tween_transitiontype).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_animationplayer_property_playback_default_blend_time"></div>

[`float`](class_float.md) **playback_default_blend_time** = ``0.0`` <div id="class_animationplayer_property_playback_default_blend_time"></div>

- `void` **set_default_blend_time** ( value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_default_blend_time** ( )

The default time in which to blend animations. Ranges from 0 to 4096 with 0.01 precision.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_animationplayer_property_speed_scale"></div>

[`float`](class_float.md) **speed_scale** = ``1.0`` <div id="class_animationplayer_property_speed_scale"></div>

- `void` **set_speed_scale** ( value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_speed_scale** ( )

The speed scaling ratio. For example, if this value is `1`, then the animation plays at normal speed. If it's `0.5`, then it plays at half speed. If it's `2`, then it plays at double speed.

If set to a negative value, the animation is played in reverse. If set to `0`, the animation will not advance.

<!-- rst-class:: classref-section-separator -->

---

## 方法说明

<div id="_class_animationplayer_method_animation_get_next"></div>

[`StringName`](class_stringname.md) **animation_get_next** ( animation_from: [`StringName`](class_stringname.md) ) const[^const]<div id="class_animationplayer_method_animation_get_next"></div>

Returns the key of the animation which is queued to play after the `animation_from` animation.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_animationplayer_method_animation_set_next"></div>

`void` **animation_set_next** ( animation_from: [`StringName`](class_stringname.md), animation_to: [`StringName`](class_stringname.md) )<div id="class_animationplayer_method_animation_set_next"></div>

Triggers the `animation_to` animation when the `animation_from` animation completes.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_animationplayer_method_clear_queue"></div>

`void` **clear_queue** ( )<div id="class_animationplayer_method_clear_queue"></div>

Clears all queued, unplayed animations.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_animationplayer_method_get_blend_time"></div>

[`float`](class_float.md) **get_blend_time** ( animation_from: [`StringName`](class_stringname.md), animation_to: [`StringName`](class_stringname.md) ) const[^const]<div id="class_animationplayer_method_get_blend_time"></div>

Returns the blend time (in seconds) between two animations, referenced by their keys.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_animationplayer_method_get_method_call_mode"></div>

[AnimationMethodCallMode](#enum_animationplayer_animationmethodcallmode) **get_method_call_mode** ( ) const[^const]<div id="class_animationplayer_method_get_method_call_mode"></div>

**已弃用：** Use [`AnimationMixer.callback_mode_method`](class_animationmixer.md#class_animationmixer_property_callback_mode_method) instead.

Returns the call mode used for "Call Method" tracks.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_animationplayer_method_get_playing_speed"></div>

[`float`](class_float.md) **get_playing_speed** ( ) const[^const]<div id="class_animationplayer_method_get_playing_speed"></div>

Returns the actual playing speed of current animation or `0` if not playing. This speed is the [`speed_scale`](class_animationplayer.md#class_animationplayer_property_speed_scale) property multiplied by `custom_speed` argument specified when calling the [`play`](class_animationplayer.md#class_animationplayer_method_play) method.

Returns a negative value if the current animation is playing backwards.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_animationplayer_method_get_process_callback"></div>

[AnimationProcessCallback](#enum_animationplayer_animationprocesscallback) **get_process_callback** ( ) const[^const]<div id="class_animationplayer_method_get_process_callback"></div>

**已弃用：** Use [`AnimationMixer.callback_mode_process`](class_animationmixer.md#class_animationmixer_property_callback_mode_process) instead.

Returns the process notification in which to update animations.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_animationplayer_method_get_queue"></div>

[`PackedStringArray`](class_packedstringarray.md) **get_queue** ( )<div id="class_animationplayer_method_get_queue"></div>

Returns a list of the animation keys that are currently queued to play.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_animationplayer_method_get_root"></div>

[`NodePath`](class_nodepath.md) **get_root** ( ) const[^const]<div id="class_animationplayer_method_get_root"></div>

**已弃用：** Use [`AnimationMixer.root_node`](class_animationmixer.md#class_animationmixer_property_root_node) instead.

Returns the node which node path references will travel from.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_animationplayer_method_get_section_end_time"></div>

[`float`](class_float.md) **get_section_end_time** ( ) const[^const]<div id="class_animationplayer_method_get_section_end_time"></div>

Returns the end time of the section currently being played.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_animationplayer_method_get_section_start_time"></div>

[`float`](class_float.md) **get_section_start_time** ( ) const[^const]<div id="class_animationplayer_method_get_section_start_time"></div>

Returns the start time of the section currently being played.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_animationplayer_method_has_section"></div>

[`bool`](class_bool.md) **has_section** ( ) const[^const]<div id="class_animationplayer_method_has_section"></div>

Returns `true` if an animation is currently playing with section.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_animationplayer_method_is_playing"></div>

[`bool`](class_bool.md) **is_playing** ( ) const[^const]<div id="class_animationplayer_method_is_playing"></div>

Returns `true` if an animation is currently playing (even if [`speed_scale`](class_animationplayer.md#class_animationplayer_property_speed_scale) and/or `custom_speed` are `0`).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_animationplayer_method_pause"></div>

`void` **pause** ( )<div id="class_animationplayer_method_pause"></div>

Pauses the currently playing animation. The [`current_animation_position`](class_animationplayer.md#class_animationplayer_property_current_animation_position) will be kept and calling [`play`](class_animationplayer.md#class_animationplayer_method_play) or [`play_backwards`](class_animationplayer.md#class_animationplayer_method_play_backwards) without arguments or with the same animation name as [`assigned_animation`](class_animationplayer.md#class_animationplayer_property_assigned_animation) will resume the animation.

See also [`stop`](class_animationplayer.md#class_animationplayer_method_stop).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_animationplayer_method_play"></div>

`void` **play** ( name: [`StringName`](class_stringname.md) = &"", custom_blend: [`float`](class_float.md) = -1, custom_speed: [`float`](class_float.md) = 1.0, from_end: [`bool`](class_bool.md) = false )<div id="class_animationplayer_method_play"></div>

Plays the animation with key `name`. Custom blend times and speed can be set.

The `from_end` option only affects when switching to a new animation track, or if the same track but at the start or end. It does not affect resuming playback that was paused in the middle of an animation. If `custom_speed` is negative and `from_end` is `true`, the animation will play backwards (which is equivalent to calling [`play_backwards`](class_animationplayer.md#class_animationplayer_method_play_backwards)).

The **AnimationPlayer** keeps track of its current or last played animation with [`assigned_animation`](class_animationplayer.md#class_animationplayer_property_assigned_animation). If this method is called with that same animation `name`, or with no `name` parameter, the assigned animation will resume playing if it was paused.

 **Note:** The animation will be updated the next time the **AnimationPlayer** is processed. If other variables are updated at the same time this is called, they may be updated too early. To perform the update immediately, call `advance(0)`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_animationplayer_method_play_backwards"></div>

`void` **play_backwards** ( name: [`StringName`](class_stringname.md) = &"", custom_blend: [`float`](class_float.md) = -1 )<div id="class_animationplayer_method_play_backwards"></div>

Plays the animation with key `name` in reverse.

This method is a shorthand for [`play`](class_animationplayer.md#class_animationplayer_method_play) with `custom_speed = -1.0` and `from_end = true`, so see its description for more information.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_animationplayer_method_play_section"></div>

`void` **play_section** ( name: [`StringName`](class_stringname.md) = &"", start_time: [`float`](class_float.md) = -1, end_time: [`float`](class_float.md) = -1, custom_blend: [`float`](class_float.md) = -1, custom_speed: [`float`](class_float.md) = 1.0, from_end: [`bool`](class_bool.md) = false )<div id="class_animationplayer_method_play_section"></div>

Plays the animation with key `name` and the section starting from `start_time` and ending on `end_time`. See also [`play`](class_animationplayer.md#class_animationplayer_method_play).

Setting `start_time` to a value outside the range of the animation means the start of the animation will be used instead, and setting `end_time` to a value outside the range of the animation means the end of the animation will be used instead. `start_time` cannot be equal to `end_time`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_animationplayer_method_play_section_backwards"></div>

`void` **play_section_backwards** ( name: [`StringName`](class_stringname.md) = &"", start_time: [`float`](class_float.md) = -1, end_time: [`float`](class_float.md) = -1, custom_blend: [`float`](class_float.md) = -1 )<div id="class_animationplayer_method_play_section_backwards"></div>

Plays the animation with key `name` and the section starting from `start_time` and ending on `end_time` in reverse.

This method is a shorthand for [`play_section`](class_animationplayer.md#class_animationplayer_method_play_section) with `custom_speed = -1.0` and `from_end = true`, see its description for more information.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_animationplayer_method_play_section_with_markers"></div>

`void` **play_section_with_markers** ( name: [`StringName`](class_stringname.md) = &"", start_marker: [`StringName`](class_stringname.md) = &"", end_marker: [`StringName`](class_stringname.md) = &"", custom_blend: [`float`](class_float.md) = -1, custom_speed: [`float`](class_float.md) = 1.0, from_end: [`bool`](class_bool.md) = false )<div id="class_animationplayer_method_play_section_with_markers"></div>

Plays the animation with key `name` and the section starting from `start_marker` and ending on `end_marker`.

If the start marker is empty, the section starts from the beginning of the animation. If the end marker is empty, the section ends on the end of the animation. See also [`play`](class_animationplayer.md#class_animationplayer_method_play).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_animationplayer_method_play_section_with_markers_backwards"></div>

`void` **play_section_with_markers_backwards** ( name: [`StringName`](class_stringname.md) = &"", start_marker: [`StringName`](class_stringname.md) = &"", end_marker: [`StringName`](class_stringname.md) = &"", custom_blend: [`float`](class_float.md) = -1 )<div id="class_animationplayer_method_play_section_with_markers_backwards"></div>

Plays the animation with key `name` and the section starting from `start_marker` and ending on `end_marker` in reverse.

This method is a shorthand for [`play_section_with_markers`](class_animationplayer.md#class_animationplayer_method_play_section_with_markers) with `custom_speed = -1.0` and `from_end = true`, see its description for more information.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_animationplayer_method_play_with_capture"></div>

`void` **play_with_capture** ( name: [`StringName`](class_stringname.md) = &"", duration: [`float`](class_float.md) = -1.0, custom_blend: [`float`](class_float.md) = -1, custom_speed: [`float`](class_float.md) = 1.0, from_end: [`bool`](class_bool.md) = false, trans_type: [TransitionType](#enum_tween_transitiontype) = 0, ease_type: [EaseType](#enum_tween_easetype) = 0 )<div id="class_animationplayer_method_play_with_capture"></div>

See also [`AnimationMixer.capture`](class_animationmixer.md#class_animationmixer_method_capture).

You can use this method to use more detailed options for capture than those performed by [`playback_auto_capture`](class_animationplayer.md#class_animationplayer_property_playback_auto_capture). When [`playback_auto_capture`](class_animationplayer.md#class_animationplayer_property_playback_auto_capture) is `false`, this method is almost the same as the following:

```

    capture(name, duration, trans_type, ease_type)
    play(name, custom_blend, custom_speed, from_end)
```

If `name` is blank, it specifies [`assigned_animation`](class_animationplayer.md#class_animationplayer_property_assigned_animation).

If `duration` is a negative value, the duration is set to the interval between the current position and the first key, when `from_end` is `true`, uses the interval between the current position and the last key instead.

 **Note:** The `duration` takes [`speed_scale`](class_animationplayer.md#class_animationplayer_property_speed_scale) into account, but `custom_speed` does not, because the capture cache is interpolated with the blend result and the result may contain multiple animations.



<!-- rst-class:: classref-item-separator -->

---

<div id="_class_animationplayer_method_queue"></div>

`void` **queue** ( name: [`StringName`](class_stringname.md) )<div id="class_animationplayer_method_queue"></div>

Queues an animation for playback once the current animation and all previously queued animations are done.

 **Note:** If a looped animation is currently playing, the queued animation will never play unless the looped animation is stopped somehow.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_animationplayer_method_reset_section"></div>

`void` **reset_section** ( )<div id="class_animationplayer_method_reset_section"></div>

Resets the current section if section is set.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_animationplayer_method_seek"></div>

`void` **seek** ( seconds: [`float`](class_float.md), update: [`bool`](class_bool.md) = false, update_only: [`bool`](class_bool.md) = false )<div id="class_animationplayer_method_seek"></div>

Seeks the animation to the `seconds` point in time (in seconds). If `update` is `true`, the animation updates too, otherwise it updates at process time. Events between the current frame and `seconds` are skipped.

If `update_only` is `true`, the method / audio / animation playback tracks will not be processed.

 **Note:** Seeking to the end of the animation doesn't emit [`AnimationMixer.animation_finished`](class_animationmixer.md#class_animationmixer_signal_animation_finished). If you want to skip animation and emit the signal, use [`AnimationMixer.advance`](class_animationmixer.md#class_animationmixer_method_advance).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_animationplayer_method_set_blend_time"></div>

`void` **set_blend_time** ( animation_from: [`StringName`](class_stringname.md), animation_to: [`StringName`](class_stringname.md), sec: [`float`](class_float.md) )<div id="class_animationplayer_method_set_blend_time"></div>

Specifies a blend time (in seconds) between two animations, referenced by their keys.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_animationplayer_method_set_method_call_mode"></div>

`void` **set_method_call_mode** ( mode: [AnimationMethodCallMode](#enum_animationplayer_animationmethodcallmode) )<div id="class_animationplayer_method_set_method_call_mode"></div>

**已弃用：** Use [`AnimationMixer.callback_mode_method`](class_animationmixer.md#class_animationmixer_property_callback_mode_method) instead.

Sets the call mode used for "Call Method" tracks.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_animationplayer_method_set_process_callback"></div>

`void` **set_process_callback** ( mode: [AnimationProcessCallback](#enum_animationplayer_animationprocesscallback) )<div id="class_animationplayer_method_set_process_callback"></div>

**已弃用：** Use [`AnimationMixer.callback_mode_process`](class_animationmixer.md#class_animationmixer_property_callback_mode_process) instead.

Sets the process notification in which to update animations.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_animationplayer_method_set_root"></div>

`void` **set_root** ( path: [`NodePath`](class_nodepath.md) )<div id="class_animationplayer_method_set_root"></div>

**已弃用：** Use [`AnimationMixer.root_node`](class_animationmixer.md#class_animationmixer_property_root_node) instead.

Sets the node which node path references will travel from.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_animationplayer_method_set_section"></div>

`void` **set_section** ( start_time: [`float`](class_float.md) = -1, end_time: [`float`](class_float.md) = -1 )<div id="class_animationplayer_method_set_section"></div>

Changes the start and end times of the section being played. The current playback position will be clamped within the new section. See also [`play_section`](class_animationplayer.md#class_animationplayer_method_play_section).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_animationplayer_method_set_section_with_markers"></div>

`void` **set_section_with_markers** ( start_marker: [`StringName`](class_stringname.md) = &"", end_marker: [`StringName`](class_stringname.md) = &"" )<div id="class_animationplayer_method_set_section_with_markers"></div>

Changes the start and end markers of the section being played. The current playback position will be clamped within the new section. See also [`play_section_with_markers`](class_animationplayer.md#class_animationplayer_method_play_section_with_markers).

If the argument is empty, the section uses the beginning or end of the animation. If both are empty, it means that the section is not set.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_animationplayer_method_stop"></div>

`void` **stop** ( keep_state: [`bool`](class_bool.md) = false )<div id="class_animationplayer_method_stop"></div>

Stops the currently playing animation. The animation position is reset to `0` and the `custom_speed` is reset to `1.0`. See also [`pause`](class_animationplayer.md#class_animationplayer_method_pause).

If `keep_state` is `true`, the animation state is not updated visually.

 **Note:** The method / audio / animation playback tracks will not be processed by this method.

[^virtual]: 本方法通常需要用户覆盖才能生效。
[^const]: 本方法无副作用，不会修改该实例的任何成员变量。
[^vararg]: 本方法除了能接受在此处描述的参数外，还能够继续接受任意数量的参数。
[^constructor]: 本方法用于构造某个类型。
[^static]: 调用本方法无需实例，可直接使用类名进行调用。
[^operator]: 本方法描述的是使用本类型作为左操作数的有效运算符。
[^bitfield]: 这个值是由下列位标志构成位掩码的整数。
[^void]: 无返回值。
