<!-- ⚠ 请勿编辑本文件 ⚠ -->
<!-- 本文档使用脚本从 WeDot 引擎源码仓库生成。 -->
<!-- 生成脚本：https://github.com/WeDot-Engine/WeDot/tree/4.3/doc/tools/make_md.py； -->
<!-- 原文件：https://github.com/WeDot-Engine/WeDot/tree/4.3/modules/interactive_music/doc_classes/AudioStreamInteractive.xml。 -->

<div id="_class_audiostreaminteractive"></div>

# AudioStreamInteractive

**继承：** [`AudioStream`](class_audiostream.md) **<** [`Resource`](class_resource.md) **<** [`RefCounted`](class_refcounted.md) **<** [`Object`](class_object.md)

Audio stream that can playback music interactively, combining clips and a transition table.

## 描述

This is an audio stream that can playback music interactively, combining clips and a transition table. Clips must be added first, and the transition rules via the [`add_transition`](#class_audiostreaminteractive_method_add_transition). Additionally, this stream export a property parameter to control the playback via [`AudioStreamPlayer`](class_audiostreamplayer.md), [`AudioStreamPlayer2D`](class_audiostreamplayer2d.md), or [`AudioStreamPlayer3D`](class_audiostreamplayer3d.md).

The way this is used is by filling a number of clips, then configuring the transition table. From there, clips are selected for playback and the music will smoothly go from the current to the new one while using the corresponding transition rule defined in the transition table.

## 属性

| [`int`](class_int.md) | [`clip_count`](#class_audiostreaminteractive_property_clip_count)     | ``0`` |
| [`int`](class_int.md) | [`initial_clip`](#class_audiostreaminteractive_property_initial_clip) | ``0`` |

## 方法

| `void`                                                                | [`add_transition`](#class_audiostreaminteractive_method_add_transition) ( from_clip: [`int`](class_int.md), to_clip: [`int`](class_int.md), from_time: [TransitionFromTime](#enum_audiostreaminteractive_transitionfromtime), to_time: [TransitionToTime](#enum_audiostreaminteractive_transitiontotime), fade_mode: [FadeMode](#enum_audiostreaminteractive_fademode), fade_beats: [`float`](class_float.md), use_filler_clip: [`bool`](class_bool.md) = false, filler_clip: [`int`](class_int.md) = -1, hold_previous: [`bool`](class_bool.md) = false ) |
| `void`                                                                | [`erase_transition`](#class_audiostreaminteractive_method_erase_transition) ( from_clip: [`int`](class_int.md), to_clip: [`int`](class_int.md) )                                                                                                                                                                                                                                                                                                                                                                                                           |
| [AutoAdvanceMode](#enum_audiostreaminteractive_autoadvancemode)       | [`get_clip_auto_advance`](#class_audiostreaminteractive_method_get_clip_auto_advance) ( clip_index: [`int`](class_int.md) ) const[^const]                                                                                                                                                                                                                                                                                                                                                                                                                  |
| [`int`](class_int.md)                                                 | [`get_clip_auto_advance_next_clip`](#class_audiostreaminteractive_method_get_clip_auto_advance_next_clip) ( clip_index: [`int`](class_int.md) ) const[^const]                                                                                                                                                                                                                                                                                                                                                                                              |
| [`StringName`](class_stringname.md)                                   | [`get_clip_name`](#class_audiostreaminteractive_method_get_clip_name) ( clip_index: [`int`](class_int.md) ) const[^const]                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| [`AudioStream`](class_audiostream.md)                                 | [`get_clip_stream`](#class_audiostreaminteractive_method_get_clip_stream) ( clip_index: [`int`](class_int.md) ) const[^const]                                                                                                                                                                                                                                                                                                                                                                                                                              |
| [`float`](class_float.md)                                             | [`get_transition_fade_beats`](#class_audiostreaminteractive_method_get_transition_fade_beats) ( from_clip: [`int`](class_int.md), to_clip: [`int`](class_int.md) ) const[^const]                                                                                                                                                                                                                                                                                                                                                                           |
| [FadeMode](#enum_audiostreaminteractive_fademode)                     | [`get_transition_fade_mode`](#class_audiostreaminteractive_method_get_transition_fade_mode) ( from_clip: [`int`](class_int.md), to_clip: [`int`](class_int.md) ) const[^const]                                                                                                                                                                                                                                                                                                                                                                             |
| [`int`](class_int.md)                                                 | [`get_transition_filler_clip`](#class_audiostreaminteractive_method_get_transition_filler_clip) ( from_clip: [`int`](class_int.md), to_clip: [`int`](class_int.md) ) const[^const]                                                                                                                                                                                                                                                                                                                                                                         |
| [TransitionFromTime](#enum_audiostreaminteractive_transitionfromtime) | [`get_transition_from_time`](#class_audiostreaminteractive_method_get_transition_from_time) ( from_clip: [`int`](class_int.md), to_clip: [`int`](class_int.md) ) const[^const]                                                                                                                                                                                                                                                                                                                                                                             |
| [`PackedInt32Array`](class_packedint32array.md)                       | [`get_transition_list`](#class_audiostreaminteractive_method_get_transition_list) ( ) const[^const]                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| [TransitionToTime](#enum_audiostreaminteractive_transitiontotime)     | [`get_transition_to_time`](#class_audiostreaminteractive_method_get_transition_to_time) ( from_clip: [`int`](class_int.md), to_clip: [`int`](class_int.md) ) const[^const]                                                                                                                                                                                                                                                                                                                                                                                 |
| [`bool`](class_bool.md)                                               | [`has_transition`](#class_audiostreaminteractive_method_has_transition) ( from_clip: [`int`](class_int.md), to_clip: [`int`](class_int.md) ) const[^const]                                                                                                                                                                                                                                                                                                                                                                                                 |
| [`bool`](class_bool.md)                                               | [`is_transition_holding_previous`](#class_audiostreaminteractive_method_is_transition_holding_previous) ( from_clip: [`int`](class_int.md), to_clip: [`int`](class_int.md) ) const[^const]                                                                                                                                                                                                                                                                                                                                                                 |
| [`bool`](class_bool.md)                                               | [`is_transition_using_filler_clip`](#class_audiostreaminteractive_method_is_transition_using_filler_clip) ( from_clip: [`int`](class_int.md), to_clip: [`int`](class_int.md) ) const[^const]                                                                                                                                                                                                                                                                                                                                                               |
| `void`                                                                | [`set_clip_auto_advance`](#class_audiostreaminteractive_method_set_clip_auto_advance) ( clip_index: [`int`](class_int.md), mode: [AutoAdvanceMode](#enum_audiostreaminteractive_autoadvancemode) )                                                                                                                                                                                                                                                                                                                                                         |
| `void`                                                                | [`set_clip_auto_advance_next_clip`](#class_audiostreaminteractive_method_set_clip_auto_advance_next_clip) ( clip_index: [`int`](class_int.md), auto_advance_next_clip: [`int`](class_int.md) )                                                                                                                                                                                                                                                                                                                                                             |
| `void`                                                                | [`set_clip_name`](#class_audiostreaminteractive_method_set_clip_name) ( clip_index: [`int`](class_int.md), name: [`StringName`](class_stringname.md) )                                                                                                                                                                                                                                                                                                                                                                                                     |
| `void`                                                                | [`set_clip_stream`](#class_audiostreaminteractive_method_set_clip_stream) ( clip_index: [`int`](class_int.md), stream: [`AudioStream`](class_audiostream.md) )                                                                                                                                                                                                                                                                                                                                                                                             |

<!-- rst-class:: classref-section-separator -->

---

## 枚举

<div id="_class_enum_audiostreaminteractive_transitionfromtime"></div>

enum **TransitionFromTime**: <div id="enum_audiostreaminteractive_transitionfromtime"></div>

<div id="_class_audiostreaminteractive_constant_transition_from_time_immediate"></div>

[TransitionFromTime](#enum_audiostreaminteractive_transitionfromtime) **TRANSITION_FROM_TIME_IMMEDIATE** = ``0``

Start transition as soon as possible, don't wait for any specific time position.

<div id="_class_audiostreaminteractive_constant_transition_from_time_next_beat"></div>

[TransitionFromTime](#enum_audiostreaminteractive_transitionfromtime) **TRANSITION_FROM_TIME_NEXT_BEAT** = ``1``

Transition when the clip playback position reaches the next beat.

<div id="_class_audiostreaminteractive_constant_transition_from_time_next_bar"></div>

[TransitionFromTime](#enum_audiostreaminteractive_transitionfromtime) **TRANSITION_FROM_TIME_NEXT_BAR** = ``2``

Transition when the clip playback position reaches the next bar.

<div id="_class_audiostreaminteractive_constant_transition_from_time_end"></div>

[TransitionFromTime](#enum_audiostreaminteractive_transitionfromtime) **TRANSITION_FROM_TIME_END** = ``3``

Transition when the current clip finished playing.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_enum_audiostreaminteractive_transitiontotime"></div>

enum **TransitionToTime**: <div id="enum_audiostreaminteractive_transitiontotime"></div>

<div id="_class_audiostreaminteractive_constant_transition_to_time_same_position"></div>

[TransitionToTime](#enum_audiostreaminteractive_transitiontotime) **TRANSITION_TO_TIME_SAME_POSITION** = ``0``

Transition to the same position in the destination clip. This is useful when both clips have exactly the same length and the music should fade between them.

<div id="_class_audiostreaminteractive_constant_transition_to_time_start"></div>

[TransitionToTime](#enum_audiostreaminteractive_transitiontotime) **TRANSITION_TO_TIME_START** = ``1``

Transition to the start of the destination clip.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_enum_audiostreaminteractive_fademode"></div>

enum **FadeMode**: <div id="enum_audiostreaminteractive_fademode"></div>

<div id="_class_audiostreaminteractive_constant_fade_disabled"></div>

[FadeMode](#enum_audiostreaminteractive_fademode) **FADE_DISABLED** = ``0``

Do not use fade for the transition. This is useful when transitioning from a clip-end to clip-beginning, and each clip has their begin/end.

<div id="_class_audiostreaminteractive_constant_fade_in"></div>

[FadeMode](#enum_audiostreaminteractive_fademode) **FADE_IN** = ``1``

Use a fade-in in the next clip, let the current clip finish.

<div id="_class_audiostreaminteractive_constant_fade_out"></div>

[FadeMode](#enum_audiostreaminteractive_fademode) **FADE_OUT** = ``2``

Use a fade-out in the current clip, the next clip will start by itself.

<div id="_class_audiostreaminteractive_constant_fade_cross"></div>

[FadeMode](#enum_audiostreaminteractive_fademode) **FADE_CROSS** = ``3``

Use a cross-fade between clips.

<div id="_class_audiostreaminteractive_constant_fade_automatic"></div>

[FadeMode](#enum_audiostreaminteractive_fademode) **FADE_AUTOMATIC** = ``4``

Use automatic fade logic depending on the transition from/to. It is recommended to use this by default.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_enum_audiostreaminteractive_autoadvancemode"></div>

enum **AutoAdvanceMode**: <div id="enum_audiostreaminteractive_autoadvancemode"></div>

<div id="_class_audiostreaminteractive_constant_auto_advance_disabled"></div>

[AutoAdvanceMode](#enum_audiostreaminteractive_autoadvancemode) **AUTO_ADVANCE_DISABLED** = ``0``

Disable auto-advance (default).

<div id="_class_audiostreaminteractive_constant_auto_advance_enabled"></div>

[AutoAdvanceMode](#enum_audiostreaminteractive_autoadvancemode) **AUTO_ADVANCE_ENABLED** = ``1``

Enable auto-advance, a clip must be specified.

<div id="_class_audiostreaminteractive_constant_auto_advance_return_to_hold"></div>

[AutoAdvanceMode](#enum_audiostreaminteractive_autoadvancemode) **AUTO_ADVANCE_RETURN_TO_HOLD** = ``2``

Enable auto-advance, but instead of specifying a clip, the playback will return to hold (see [`add_transition`](#class_audiostreaminteractive_method_add_transition)).

<!-- rst-class:: classref-section-separator -->

---

## 常量

<div id="_class_audiostreaminteractive_constant_clip_any"></div>

**CLIP_ANY** = ``-1`` <div id="class_audiostreaminteractive_constant_clip_any"></div>

This constant describes that any clip is valid for a specific transition as either source or destination.

<!-- rst-class:: classref-section-separator -->

---

## 属性说明

<div id="_class_audiostreaminteractive_property_clip_count"></div>

[`int`](class_int.md) **clip_count** = ``0`` <div id="class_audiostreaminteractive_property_clip_count"></div>

- `void` **set_clip_count** ( value: [`int`](class_int.md) )
- [`int`](class_int.md) **get_clip_count** ( )

Amount of clips contained in this interactive player.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_audiostreaminteractive_property_initial_clip"></div>

[`int`](class_int.md) **initial_clip** = ``0`` <div id="class_audiostreaminteractive_property_initial_clip"></div>

- `void` **set_initial_clip** ( value: [`int`](class_int.md) )
- [`int`](class_int.md) **get_initial_clip** ( )

Index of the initial clip, which will be played first when this stream is played.

<!-- rst-class:: classref-section-separator -->

---

## 方法说明

<div id="_class_audiostreaminteractive_method_add_transition"></div>

`void` **add_transition** ( from_clip: [`int`](class_int.md), to_clip: [`int`](class_int.md), from_time: [TransitionFromTime](#enum_audiostreaminteractive_transitionfromtime), to_time: [TransitionToTime](#enum_audiostreaminteractive_transitiontotime), fade_mode: [FadeMode](#enum_audiostreaminteractive_fademode), fade_beats: [`float`](class_float.md), use_filler_clip: [`bool`](class_bool.md) = false, filler_clip: [`int`](class_int.md) = -1, hold_previous: [`bool`](class_bool.md) = false )<div id="class_audiostreaminteractive_method_add_transition"></div>

Add a transition between two clips. Provide the indices of the source and destination clips, or use the [`CLIP_ANY`](#class_audiostreaminteractive_constant_clip_any) constant to indicate that transition happens to/from any clip to this one.

* `from_time` indicates the moment in the current clip the transition will begin after triggered.

* `to_time` indicates the time in the next clip that the playback will start from.

* `fade_mode` indicates how the fade will happen between clips. If unsure, just use [`FADE_AUTOMATIC`](#class_audiostreaminteractive_constant_fade_automatic) which uses the most common type of fade for each situation.

* `fade_beats` indicates how many beats the fade will take. Using decimals is allowed.

* `use_filler_clip` indicates that there will be a filler clip used between the source and destination clips.

* `filler_clip` the index of the filler clip.

* If `hold_previous` is used, then this clip will be remembered. This can be used together with [`AUTO_ADVANCE_RETURN_TO_HOLD`](#class_audiostreaminteractive_constant_auto_advance_return_to_hold) to return to this clip after another is done playing.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_audiostreaminteractive_method_erase_transition"></div>

`void` **erase_transition** ( from_clip: [`int`](class_int.md), to_clip: [`int`](class_int.md) )<div id="class_audiostreaminteractive_method_erase_transition"></div>

Erase a transition by providing `from_clip` and `to_clip` clip indices. [`CLIP_ANY`](#class_audiostreaminteractive_constant_clip_any) can be used for either argument or both.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_audiostreaminteractive_method_get_clip_auto_advance"></div>

[AutoAdvanceMode](#enum_audiostreaminteractive_autoadvancemode) **get_clip_auto_advance** ( clip_index: [`int`](class_int.md) ) const[^const]<div id="class_audiostreaminteractive_method_get_clip_auto_advance"></div>

Return whether a clip has auto-advance enabled. See [`set_clip_auto_advance`](#class_audiostreaminteractive_method_set_clip_auto_advance).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_audiostreaminteractive_method_get_clip_auto_advance_next_clip"></div>

[`int`](class_int.md) **get_clip_auto_advance_next_clip** ( clip_index: [`int`](class_int.md) ) const[^const]<div id="class_audiostreaminteractive_method_get_clip_auto_advance_next_clip"></div>

Return the clip towards which the clip referenced by `clip_index` will auto-advance to.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_audiostreaminteractive_method_get_clip_name"></div>

[`StringName`](class_stringname.md) **get_clip_name** ( clip_index: [`int`](class_int.md) ) const[^const]<div id="class_audiostreaminteractive_method_get_clip_name"></div>

Return the name of a clip.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_audiostreaminteractive_method_get_clip_stream"></div>

[`AudioStream`](class_audiostream.md) **get_clip_stream** ( clip_index: [`int`](class_int.md) ) const[^const]<div id="class_audiostreaminteractive_method_get_clip_stream"></div>

Return the [`AudioStream`](class_audiostream.md) associated with a clip.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_audiostreaminteractive_method_get_transition_fade_beats"></div>

[`float`](class_float.md) **get_transition_fade_beats** ( from_clip: [`int`](class_int.md), to_clip: [`int`](class_int.md) ) const[^const]<div id="class_audiostreaminteractive_method_get_transition_fade_beats"></div>

Return the time (in beats) for a transition (see [`add_transition`](#class_audiostreaminteractive_method_add_transition)).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_audiostreaminteractive_method_get_transition_fade_mode"></div>

[FadeMode](#enum_audiostreaminteractive_fademode) **get_transition_fade_mode** ( from_clip: [`int`](class_int.md), to_clip: [`int`](class_int.md) ) const[^const]<div id="class_audiostreaminteractive_method_get_transition_fade_mode"></div>

Return the mode for a transition (see [`add_transition`](#class_audiostreaminteractive_method_add_transition)).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_audiostreaminteractive_method_get_transition_filler_clip"></div>

[`int`](class_int.md) **get_transition_filler_clip** ( from_clip: [`int`](class_int.md), to_clip: [`int`](class_int.md) ) const[^const]<div id="class_audiostreaminteractive_method_get_transition_filler_clip"></div>

Return the filler clip for a transition (see [`add_transition`](#class_audiostreaminteractive_method_add_transition)).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_audiostreaminteractive_method_get_transition_from_time"></div>

[TransitionFromTime](#enum_audiostreaminteractive_transitionfromtime) **get_transition_from_time** ( from_clip: [`int`](class_int.md), to_clip: [`int`](class_int.md) ) const[^const]<div id="class_audiostreaminteractive_method_get_transition_from_time"></div>

Return the source time position for a transition (see [`add_transition`](#class_audiostreaminteractive_method_add_transition)).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_audiostreaminteractive_method_get_transition_list"></div>

[`PackedInt32Array`](class_packedint32array.md) **get_transition_list** ( ) const[^const]<div id="class_audiostreaminteractive_method_get_transition_list"></div>

Return the list of transitions (from, to interleaved).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_audiostreaminteractive_method_get_transition_to_time"></div>

[TransitionToTime](#enum_audiostreaminteractive_transitiontotime) **get_transition_to_time** ( from_clip: [`int`](class_int.md), to_clip: [`int`](class_int.md) ) const[^const]<div id="class_audiostreaminteractive_method_get_transition_to_time"></div>

Return the destination time position for a transition (see [`add_transition`](#class_audiostreaminteractive_method_add_transition)).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_audiostreaminteractive_method_has_transition"></div>

[`bool`](class_bool.md) **has_transition** ( from_clip: [`int`](class_int.md), to_clip: [`int`](class_int.md) ) const[^const]<div id="class_audiostreaminteractive_method_has_transition"></div>

Return true if a given transition exists (was added via [`add_transition`](#class_audiostreaminteractive_method_add_transition)).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_audiostreaminteractive_method_is_transition_holding_previous"></div>

[`bool`](class_bool.md) **is_transition_holding_previous** ( from_clip: [`int`](class_int.md), to_clip: [`int`](class_int.md) ) const[^const]<div id="class_audiostreaminteractive_method_is_transition_holding_previous"></div>

Return whether a transition uses the *hold previous* functionality (see [`add_transition`](#class_audiostreaminteractive_method_add_transition)).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_audiostreaminteractive_method_is_transition_using_filler_clip"></div>

[`bool`](class_bool.md) **is_transition_using_filler_clip** ( from_clip: [`int`](class_int.md), to_clip: [`int`](class_int.md) ) const[^const]<div id="class_audiostreaminteractive_method_is_transition_using_filler_clip"></div>

Return whether a transition uses the *filler clip* functionality (see [`add_transition`](#class_audiostreaminteractive_method_add_transition)).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_audiostreaminteractive_method_set_clip_auto_advance"></div>

`void` **set_clip_auto_advance** ( clip_index: [`int`](class_int.md), mode: [AutoAdvanceMode](#enum_audiostreaminteractive_autoadvancemode) )<div id="class_audiostreaminteractive_method_set_clip_auto_advance"></div>

Set whether a clip will auto-advance by changing the auto-advance mode.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_audiostreaminteractive_method_set_clip_auto_advance_next_clip"></div>

`void` **set_clip_auto_advance_next_clip** ( clip_index: [`int`](class_int.md), auto_advance_next_clip: [`int`](class_int.md) )<div id="class_audiostreaminteractive_method_set_clip_auto_advance_next_clip"></div>

Set the index of the next clip towards which this clip will auto advance to when finished. If the clip being played loops, then auto-advance will be ignored.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_audiostreaminteractive_method_set_clip_name"></div>

`void` **set_clip_name** ( clip_index: [`int`](class_int.md), name: [`StringName`](class_stringname.md) )<div id="class_audiostreaminteractive_method_set_clip_name"></div>

Set the name of the current clip (for easier identification).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_audiostreaminteractive_method_set_clip_stream"></div>

`void` **set_clip_stream** ( clip_index: [`int`](class_int.md), stream: [`AudioStream`](class_audiostream.md) )<div id="class_audiostreaminteractive_method_set_clip_stream"></div>

Set the [`AudioStream`](class_audiostream.md) associated with the current clip.

[^virtual]: 本方法通常需要用户覆盖才能生效。
[^const]: 本方法无副作用，不会修改该实例的任何成员变量。
[^vararg]: 本方法除了能接受在此处描述的参数外，还能够继续接受任意数量的参数。
[^constructor]: 本方法用于构造某个类型。
[^static]: 调用本方法无需实例，可直接使用类名进行调用。
[^operator]: 本方法描述的是使用本类型作为左操作数的有效运算符。
[^bitfield]: 这个值是由下列位标志构成位掩码的整数。
[^void]: 无返回值。
