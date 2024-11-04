<!-- ⚠ 请勿编辑本文件 ⚠ -->
<!-- 本文档使用脚本从 WeDot 引擎源码仓库生成。 -->
<!-- 生成脚本：https://github.com/WeDot-Engine/WeDot/tree/4.3/doc/tools/make_md.py； -->
<!-- 原文件：https://github.com/WeDot-Engine/WeDot/tree/4.3/doc/classes/AnimationMixer.xml。 -->

<div id="_class_animationmixer"></div>

# AnimationMixer

**继承：** [`Node`](class_node.md) **<** [`Object`](class_object.md)

**派生：** [`AnimationPlayer`](class_animationplayer.md), [`AnimationTree`](class_animationtree.md)

Base class for [`AnimationPlayer`](class_animationplayer.md) and [`AnimationTree`](class_animationtree.md).

## 描述

Base class for [`AnimationPlayer`](class_animationplayer.md) and [`AnimationTree`](class_animationtree.md) to manage animation lists. It also has general properties and methods for playback and blending.

After instantiating the playback information data within the extended class, the blending is processed by the **AnimationMixer**.

## 属性

| [`bool`](class_bool.md)                                                             | [`active`](#class_animationmixer_property_active)                                 | ``true``           |
| [`int`](class_int.md)                                                               | [`audio_max_polyphony`](#class_animationmixer_property_audio_max_polyphony)       | ``32``             |
| [AnimationCallbackModeDiscrete](#enum_animationmixer_animationcallbackmodediscrete) | [`callback_mode_discrete`](#class_animationmixer_property_callback_mode_discrete) | ``1``              |
| [AnimationCallbackModeMethod](#enum_animationmixer_animationcallbackmodemethod)     | [`callback_mode_method`](#class_animationmixer_property_callback_mode_method)     | ``0``              |
| [AnimationCallbackModeProcess](#enum_animationmixer_animationcallbackmodeprocess)   | [`callback_mode_process`](#class_animationmixer_property_callback_mode_process)   | ``1``              |
| [`bool`](class_bool.md)                                                             | [`deterministic`](#class_animationmixer_property_deterministic)                   | ``false``          |
| [`bool`](class_bool.md)                                                             | [`reset_on_save`](#class_animationmixer_property_reset_on_save)                   | ``true``           |
| [`NodePath`](class_nodepath.md)                                                     | [`root_motion_track`](#class_animationmixer_property_root_motion_track)           | ``NodePath("")``   |
| [`NodePath`](class_nodepath.md)                                                     | [`root_node`](#class_animationmixer_property_root_node)                           | ``NodePath("..")`` |

## 方法

| [`Variant`](class_variant.md)                               | [`_post_process_key_value`](#class_animationmixer_private_method__post_process_key_value) ( animation: [`Animation`](class_animation.md), track: [`int`](class_int.md), value: [`Variant`](class_variant.md), object_id: [`int`](class_int.md), object_sub_idx: [`int`](class_int.md) ) virtual[^virtual] const[^const] |
| [Error](#enum_@globalscope_error)                           | [`add_animation_library`](#class_animationmixer_method_add_animation_library) ( name: [`StringName`](class_stringname.md), library: [`AnimationLibrary`](class_animationlibrary.md) )                                                                                                                                   |
| `void`                                                      | [`advance`](#class_animationmixer_method_advance) ( delta: [`float`](class_float.md) )                                                                                                                                                                                                                                  |
| `void`                                                      | [`capture`](#class_animationmixer_method_capture) ( name: [`StringName`](class_stringname.md), duration: [`float`](class_float.md), trans_type: [TransitionType](#enum_tween_transitiontype) = 0, ease_type: [EaseType](#enum_tween_easetype) = 0 )                                                                     |
| `void`                                                      | [`clear_caches`](#class_animationmixer_method_clear_caches) ( )                                                                                                                                                                                                                                                         |
| [`StringName`](class_stringname.md)                         | [`find_animation`](#class_animationmixer_method_find_animation) ( animation: [`Animation`](class_animation.md) ) const[^const]                                                                                                                                                                                          |
| [`StringName`](class_stringname.md)                         | [`find_animation_library`](#class_animationmixer_method_find_animation_library) ( animation: [`Animation`](class_animation.md) ) const[^const]                                                                                                                                                                          |
| [`Animation`](class_animation.md)                           | [`get_animation`](#class_animationmixer_method_get_animation) ( name: [`StringName`](class_stringname.md) ) const[^const]                                                                                                                                                                                               |
| [`AnimationLibrary`](class_animationlibrary.md)             | [`get_animation_library`](#class_animationmixer_method_get_animation_library) ( name: [`StringName`](class_stringname.md) ) const[^const]                                                                                                                                                                               |
| [Array](class_array.md) [`StringName`](class_stringname.md) | [`get_animation_library_list`](#class_animationmixer_method_get_animation_library_list) ( ) const[^const]                                                                                                                                                                                                               |
| [`PackedStringArray`](class_packedstringarray.md)           | [`get_animation_list`](#class_animationmixer_method_get_animation_list) ( ) const[^const]                                                                                                                                                                                                                               |
| [`Vector3`](class_vector3.md)                               | [`get_root_motion_position`](#class_animationmixer_method_get_root_motion_position) ( ) const[^const]                                                                                                                                                                                                                   |
| [`Vector3`](class_vector3.md)                               | [`get_root_motion_position_accumulator`](#class_animationmixer_method_get_root_motion_position_accumulator) ( ) const[^const]                                                                                                                                                                                           |
| [`Quaternion`](class_quaternion.md)                         | [`get_root_motion_rotation`](#class_animationmixer_method_get_root_motion_rotation) ( ) const[^const]                                                                                                                                                                                                                   |
| [`Quaternion`](class_quaternion.md)                         | [`get_root_motion_rotation_accumulator`](#class_animationmixer_method_get_root_motion_rotation_accumulator) ( ) const[^const]                                                                                                                                                                                           |
| [`Vector3`](class_vector3.md)                               | [`get_root_motion_scale`](#class_animationmixer_method_get_root_motion_scale) ( ) const[^const]                                                                                                                                                                                                                         |
| [`Vector3`](class_vector3.md)                               | [`get_root_motion_scale_accumulator`](#class_animationmixer_method_get_root_motion_scale_accumulator) ( ) const[^const]                                                                                                                                                                                                 |
| [`bool`](class_bool.md)                                     | [`has_animation`](#class_animationmixer_method_has_animation) ( name: [`StringName`](class_stringname.md) ) const[^const]                                                                                                                                                                                               |
| [`bool`](class_bool.md)                                     | [`has_animation_library`](#class_animationmixer_method_has_animation_library) ( name: [`StringName`](class_stringname.md) ) const[^const]                                                                                                                                                                               |
| `void`                                                      | [`remove_animation_library`](#class_animationmixer_method_remove_animation_library) ( name: [`StringName`](class_stringname.md) )                                                                                                                                                                                       |
| `void`                                                      | [`rename_animation_library`](#class_animationmixer_method_rename_animation_library) ( name: [`StringName`](class_stringname.md), newname: [`StringName`](class_stringname.md) )                                                                                                                                         |

<!-- rst-class:: classref-section-separator -->

---

## 信号

<div id="_class_class_animationmixer_signal_animation_finished"></div>

**animation_finished** ( anim_name: [`StringName`](class_stringname.md) ) <div id="class_animationmixer_signal_animation_finished"></div>

Notifies when an animation finished playing.

 **Note:** This signal is not emitted if an animation is looping.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_class_animationmixer_signal_animation_libraries_updated"></div>

**animation_libraries_updated** ( ) <div id="class_animationmixer_signal_animation_libraries_updated"></div>

Notifies when the animation libraries have changed.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_class_animationmixer_signal_animation_list_changed"></div>

**animation_list_changed** ( ) <div id="class_animationmixer_signal_animation_list_changed"></div>

Notifies when an animation list is changed.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_class_animationmixer_signal_animation_started"></div>

**animation_started** ( anim_name: [`StringName`](class_stringname.md) ) <div id="class_animationmixer_signal_animation_started"></div>

Notifies when an animation starts playing.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_class_animationmixer_signal_caches_cleared"></div>

**caches_cleared** ( ) <div id="class_animationmixer_signal_caches_cleared"></div>

Notifies when the caches have been cleared, either automatically, or manually via [`clear_caches`](#class_animationmixer_method_clear_caches).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_class_animationmixer_signal_mixer_applied"></div>

**mixer_applied** ( ) <div id="class_animationmixer_signal_mixer_applied"></div>

Notifies when the blending result related have been applied to the target objects.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_class_animationmixer_signal_mixer_updated"></div>

**mixer_updated** ( ) <div id="class_animationmixer_signal_mixer_updated"></div>

Notifies when the property related process have been updated.

<!-- rst-class:: classref-section-separator -->

---

## 枚举

<div id="_class_enum_animationmixer_animationcallbackmodeprocess"></div>

enum **AnimationCallbackModeProcess**: <div id="enum_animationmixer_animationcallbackmodeprocess"></div>

<div id="_class_animationmixer_constant_animation_callback_mode_process_physics"></div>

[AnimationCallbackModeProcess](#enum_animationmixer_animationcallbackmodeprocess) **ANIMATION_CALLBACK_MODE_PROCESS_PHYSICS** = ``0``

Process animation during physics frames (see [`Node.NOTIFICATION_INTERNAL_PHYSICS_PROCESS`](#class_node_constant_notification_internal_physics_process)). This is especially useful when animating physics bodies.

<div id="_class_animationmixer_constant_animation_callback_mode_process_idle"></div>

[AnimationCallbackModeProcess](#enum_animationmixer_animationcallbackmodeprocess) **ANIMATION_CALLBACK_MODE_PROCESS_IDLE** = ``1``

Process animation during process frames (see [`Node.NOTIFICATION_INTERNAL_PROCESS`](#class_node_constant_notification_internal_process)).

<div id="_class_animationmixer_constant_animation_callback_mode_process_manual"></div>

[AnimationCallbackModeProcess](#enum_animationmixer_animationcallbackmodeprocess) **ANIMATION_CALLBACK_MODE_PROCESS_MANUAL** = ``2``

Do not process animation. Use [`advance`](#class_animationmixer_method_advance) to process the animation manually.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_enum_animationmixer_animationcallbackmodemethod"></div>

enum **AnimationCallbackModeMethod**: <div id="enum_animationmixer_animationcallbackmodemethod"></div>

<div id="_class_animationmixer_constant_animation_callback_mode_method_deferred"></div>

[AnimationCallbackModeMethod](#enum_animationmixer_animationcallbackmodemethod) **ANIMATION_CALLBACK_MODE_METHOD_DEFERRED** = ``0``

Batch method calls during the animation process, then do the calls after events are processed. This avoids bugs involving deleting nodes or modifying the AnimationPlayer while playing.

<div id="_class_animationmixer_constant_animation_callback_mode_method_immediate"></div>

[AnimationCallbackModeMethod](#enum_animationmixer_animationcallbackmodemethod) **ANIMATION_CALLBACK_MODE_METHOD_IMMEDIATE** = ``1``

Make method calls immediately when reached in the animation.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_enum_animationmixer_animationcallbackmodediscrete"></div>

enum **AnimationCallbackModeDiscrete**: <div id="enum_animationmixer_animationcallbackmodediscrete"></div>

<div id="_class_animationmixer_constant_animation_callback_mode_discrete_dominant"></div>

[AnimationCallbackModeDiscrete](#enum_animationmixer_animationcallbackmodediscrete) **ANIMATION_CALLBACK_MODE_DISCRETE_DOMINANT** = ``0``

An [`Animation.UPDATE_DISCRETE`](#class_animation_constant_update_discrete) track value takes precedence when blending [`Animation.UPDATE_CONTINUOUS`](#class_animation_constant_update_continuous) or [`Animation.UPDATE_CAPTURE`](#class_animation_constant_update_capture) track values and [`Animation.UPDATE_DISCRETE`](#class_animation_constant_update_discrete) track values.

<div id="_class_animationmixer_constant_animation_callback_mode_discrete_recessive"></div>

[AnimationCallbackModeDiscrete](#enum_animationmixer_animationcallbackmodediscrete) **ANIMATION_CALLBACK_MODE_DISCRETE_RECESSIVE** = ``1``

An [`Animation.UPDATE_CONTINUOUS`](#class_animation_constant_update_continuous) or [`Animation.UPDATE_CAPTURE`](#class_animation_constant_update_capture) track value takes precedence when blending the [`Animation.UPDATE_CONTINUOUS`](#class_animation_constant_update_continuous) or [`Animation.UPDATE_CAPTURE`](#class_animation_constant_update_capture) track values and the [`Animation.UPDATE_DISCRETE`](#class_animation_constant_update_discrete) track values. This is the default behavior for [`AnimationPlayer`](class_animationplayer.md).

<div id="_class_animationmixer_constant_animation_callback_mode_discrete_force_continuous"></div>

[AnimationCallbackModeDiscrete](#enum_animationmixer_animationcallbackmodediscrete) **ANIMATION_CALLBACK_MODE_DISCRETE_FORCE_CONTINUOUS** = ``2``

Always treat the [`Animation.UPDATE_DISCRETE`](#class_animation_constant_update_discrete) track value as [`Animation.UPDATE_CONTINUOUS`](#class_animation_constant_update_continuous) with [`Animation.INTERPOLATION_NEAREST`](#class_animation_constant_interpolation_nearest). This is the default behavior for [`AnimationTree`](class_animationtree.md).

If a value track has non-numeric type key values, it is internally converted to use [`ANIMATION_CALLBACK_MODE_DISCRETE_RECESSIVE`](#class_animationmixer_constant_animation_callback_mode_discrete_recessive) with [`Animation.UPDATE_DISCRETE`](#class_animation_constant_update_discrete).

<!-- rst-class:: classref-section-separator -->

---

## 属性说明

<div id="_class_animationmixer_property_active"></div>

[`bool`](class_bool.md) **active** = ``true`` <div id="class_animationmixer_property_active"></div>

- `void` **set_active** ( value: [`bool`](class_bool.md) )
- [`bool`](class_bool.md) **is_active** ( )

If `true`, the **AnimationMixer** will be processing.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_animationmixer_property_audio_max_polyphony"></div>

[`int`](class_int.md) **audio_max_polyphony** = ``32`` <div id="class_animationmixer_property_audio_max_polyphony"></div>

- `void` **set_audio_max_polyphony** ( value: [`int`](class_int.md) )
- [`int`](class_int.md) **get_audio_max_polyphony** ( )

The number of possible simultaneous sounds for each of the assigned AudioStreamPlayers.

For example, if this value is `32` and the animation has two audio tracks, the two [`AudioStreamPlayer`](class_audiostreamplayer.md) s assigned can play simultaneously up to `32` voices each.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_animationmixer_property_callback_mode_discrete"></div>

[AnimationCallbackModeDiscrete](#enum_animationmixer_animationcallbackmodediscrete) **callback_mode_discrete** = ``1`` <div id="class_animationmixer_property_callback_mode_discrete"></div>

- `void` **set_callback_mode_discrete** ( value: [AnimationCallbackModeDiscrete](#enum_animationmixer_animationcallbackmodediscrete) )
- [AnimationCallbackModeDiscrete](#enum_animationmixer_animationcallbackmodediscrete) **get_callback_mode_discrete** ( )

Ordinarily, tracks can be set to [`Animation.UPDATE_DISCRETE`](#class_animation_constant_update_discrete) to update infrequently, usually when using nearest interpolation.

However, when blending with [`Animation.UPDATE_CONTINUOUS`](#class_animation_constant_update_continuous) several results are considered. The [`callback_mode_discrete`](#class_animationmixer_property_callback_mode_discrete) specify it explicitly. See also [AnimationCallbackModeDiscrete](#enum_animationmixer_animationcallbackmodediscrete).

To make the blended results look good, it is recommended to set this to [`ANIMATION_CALLBACK_MODE_DISCRETE_FORCE_CONTINUOUS`](#class_animationmixer_constant_animation_callback_mode_discrete_force_continuous) to update every frame during blending. Other values exist for compatibility and they are fine if there is no blending, but not so, may produce artifacts.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_animationmixer_property_callback_mode_method"></div>

[AnimationCallbackModeMethod](#enum_animationmixer_animationcallbackmodemethod) **callback_mode_method** = ``0`` <div id="class_animationmixer_property_callback_mode_method"></div>

- `void` **set_callback_mode_method** ( value: [AnimationCallbackModeMethod](#enum_animationmixer_animationcallbackmodemethod) )
- [AnimationCallbackModeMethod](#enum_animationmixer_animationcallbackmodemethod) **get_callback_mode_method** ( )

The call mode used for "Call Method" tracks.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_animationmixer_property_callback_mode_process"></div>

[AnimationCallbackModeProcess](#enum_animationmixer_animationcallbackmodeprocess) **callback_mode_process** = ``1`` <div id="class_animationmixer_property_callback_mode_process"></div>

- `void` **set_callback_mode_process** ( value: [AnimationCallbackModeProcess](#enum_animationmixer_animationcallbackmodeprocess) )
- [AnimationCallbackModeProcess](#enum_animationmixer_animationcallbackmodeprocess) **get_callback_mode_process** ( )

The process notification in which to update animations.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_animationmixer_property_deterministic"></div>

[`bool`](class_bool.md) **deterministic** = ``false`` <div id="class_animationmixer_property_deterministic"></div>

- `void` **set_deterministic** ( value: [`bool`](class_bool.md) )
- [`bool`](class_bool.md) **is_deterministic** ( )

If `true`, the blending uses the deterministic algorithm. The total weight is not normalized and the result is accumulated with an initial value (`0` or a `"RESET"` animation if present).

This means that if the total amount of blending is `0.0`, the result is equal to the `"RESET"` animation.

If the number of tracks between the blended animations is different, the animation with the missing track is treated as if it had the initial value.

If `false`, The blend does not use the deterministic algorithm. The total weight is normalized and always `1.0`. If the number of tracks between the blended animations is different, nothing is done about the animation that is missing a track.

 **Note:** In [`AnimationTree`](class_animationtree.md), the blending with [`AnimationNodeAdd2`](class_animationnodeadd2.md), [`AnimationNodeAdd3`](class_animationnodeadd3.md), [`AnimationNodeSub2`](class_animationnodesub2.md) or the weight greater than `1.0` may produce unexpected results.

For example, if [`AnimationNodeAdd2`](class_animationnodeadd2.md) blends two nodes with the amount `1.0`, then total weight is `2.0` but it will be normalized to make the total amount `1.0` and the result will be equal to [`AnimationNodeBlend2`](class_animationnodeblend2.md) with the amount `0.5`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_animationmixer_property_reset_on_save"></div>

[`bool`](class_bool.md) **reset_on_save** = ``true`` <div id="class_animationmixer_property_reset_on_save"></div>

- `void` **set_reset_on_save_enabled** ( value: [`bool`](class_bool.md) )
- [`bool`](class_bool.md) **is_reset_on_save_enabled** ( )

This is used by the editor. If set to `true`, the scene will be saved with the effects of the reset animation (the animation with the key `"RESET"`) applied as if it had been seeked to time 0, with the editor keeping the values that the scene had before saving.

This makes it more convenient to preview and edit animations in the editor, as changes to the scene will not be saved as long as they are set in the reset animation.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_animationmixer_property_root_motion_track"></div>

[`NodePath`](class_nodepath.md) **root_motion_track** = ``NodePath("")`` <div id="class_animationmixer_property_root_motion_track"></div>

- `void` **set_root_motion_track** ( value: [`NodePath`](class_nodepath.md) )
- [`NodePath`](class_nodepath.md) **get_root_motion_track** ( )

The path to the Animation track used for root motion. Paths must be valid scene-tree paths to a node, and must be specified starting from the parent node of the node that will reproduce the animation. The [`root_motion_track`](#class_animationmixer_property_root_motion_track) uses the same format as [`Animation.track_set_path`](#class_animation_method_track_set_path), but note that a bone must be specified.

If the track has type [`Animation.TYPE_POSITION_3D`](#class_animation_constant_type_position_3d), [`Animation.TYPE_ROTATION_3D`](#class_animation_constant_type_rotation_3d), or [`Animation.TYPE_SCALE_3D`](#class_animation_constant_type_scale_3d) the transformation will be canceled visually, and the animation will appear to stay in place. See also [`get_root_motion_position`](#class_animationmixer_method_get_root_motion_position), [`get_root_motion_rotation`](#class_animationmixer_method_get_root_motion_rotation), [`get_root_motion_scale`](#class_animationmixer_method_get_root_motion_scale), and [`RootMotionView`](class_rootmotionview.md).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_animationmixer_property_root_node"></div>

[`NodePath`](class_nodepath.md) **root_node** = ``NodePath("..")`` <div id="class_animationmixer_property_root_node"></div>

- `void` **set_root_node** ( value: [`NodePath`](class_nodepath.md) )
- [`NodePath`](class_nodepath.md) **get_root_node** ( )

The node which node path references will travel from.

<!-- rst-class:: classref-section-separator -->

---

## 方法说明

<div id="_class_animationmixer_private_method__post_process_key_value"></div>

[`Variant`](class_variant.md) **_post_process_key_value** ( animation: [`Animation`](class_animation.md), track: [`int`](class_int.md), value: [`Variant`](class_variant.md), object_id: [`int`](class_int.md), object_sub_idx: [`int`](class_int.md) ) virtual[^virtual] const[^const]<div id="class_animationmixer_private_method__post_process_key_value"></div>

A virtual function for processing after getting a key during playback.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_animationmixer_method_add_animation_library"></div>

[Error](#enum_@globalscope_error) **add_animation_library** ( name: [`StringName`](class_stringname.md), library: [`AnimationLibrary`](class_animationlibrary.md) )<div id="class_animationmixer_method_add_animation_library"></div>

Adds `library` to the animation player, under the key `name`.

AnimationMixer has a global library by default with an empty string as key. For adding an animation to the global library:



```gdscript

    var global_library = mixer.get_animation_library("")
    global_library.add_animation("animation_name", animation_resource)
```





<!-- rst-class:: classref-item-separator -->

---

<div id="_class_animationmixer_method_advance"></div>

`void` **advance** ( delta: [`float`](class_float.md) )<div id="class_animationmixer_method_advance"></div>

Manually advance the animations by the specified time (in seconds).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_animationmixer_method_capture"></div>

`void` **capture** ( name: [`StringName`](class_stringname.md), duration: [`float`](class_float.md), trans_type: [TransitionType](#enum_tween_transitiontype) = 0, ease_type: [EaseType](#enum_tween_easetype) = 0 )<div id="class_animationmixer_method_capture"></div>

If the animation track specified by `name` has an option [`Animation.UPDATE_CAPTURE`](#class_animation_constant_update_capture), stores current values of the objects indicated by the track path as a cache. If there is already a captured cache, the old cache is discarded.

After this it will interpolate with current animation blending result during the playback process for the time specified by `duration`, working like a crossfade.

You can specify `trans_type` as the curve for the interpolation. For better results, it may be appropriate to specify [`Tween.TRANS_LINEAR`](#class_tween_constant_trans_linear) for cases where the first key of the track begins with a non-zero value or where the key value does not change, and [`Tween.TRANS_QUAD`](#class_tween_constant_trans_quad) for cases where the key value changes linearly.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_animationmixer_method_clear_caches"></div>

`void` **clear_caches** ( )<div id="class_animationmixer_method_clear_caches"></div>

**AnimationMixer** caches animated nodes. It may not notice if a node disappears; [`clear_caches`](#class_animationmixer_method_clear_caches) forces it to update the cache again.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_animationmixer_method_find_animation"></div>

[`StringName`](class_stringname.md) **find_animation** ( animation: [`Animation`](class_animation.md) ) const[^const]<div id="class_animationmixer_method_find_animation"></div>

Returns the key of `animation` or an empty [`StringName`](class_stringname.md) if not found.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_animationmixer_method_find_animation_library"></div>

[`StringName`](class_stringname.md) **find_animation_library** ( animation: [`Animation`](class_animation.md) ) const[^const]<div id="class_animationmixer_method_find_animation_library"></div>

Returns the key for the [`AnimationLibrary`](class_animationlibrary.md) that contains `animation` or an empty [`StringName`](class_stringname.md) if not found.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_animationmixer_method_get_animation"></div>

[`Animation`](class_animation.md) **get_animation** ( name: [`StringName`](class_stringname.md) ) const[^const]<div id="class_animationmixer_method_get_animation"></div>

Returns the [`Animation`](class_animation.md) with the key `name`. If the animation does not exist, `null` is returned and an error is logged.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_animationmixer_method_get_animation_library"></div>

[`AnimationLibrary`](class_animationlibrary.md) **get_animation_library** ( name: [`StringName`](class_stringname.md) ) const[^const]<div id="class_animationmixer_method_get_animation_library"></div>

Returns the first [`AnimationLibrary`](class_animationlibrary.md) with key `name` or `null` if not found.

To get the **AnimationMixer**'s global animation library, use `get_animation_library("")`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_animationmixer_method_get_animation_library_list"></div>

[Array](class_array.md) [`StringName`](class_stringname.md) **get_animation_library_list** ( ) const[^const]<div id="class_animationmixer_method_get_animation_library_list"></div>

Returns the list of stored library keys.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_animationmixer_method_get_animation_list"></div>

[`PackedStringArray`](class_packedstringarray.md) **get_animation_list** ( ) const[^const]<div id="class_animationmixer_method_get_animation_list"></div>

Returns the list of stored animation keys.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_animationmixer_method_get_root_motion_position"></div>

[`Vector3`](class_vector3.md) **get_root_motion_position** ( ) const[^const]<div id="class_animationmixer_method_get_root_motion_position"></div>

Retrieve the motion delta of position with the [`root_motion_track`](#class_animationmixer_property_root_motion_track) as a [`Vector3`](class_vector3.md) that can be used elsewhere.

If [`root_motion_track`](#class_animationmixer_property_root_motion_track) is not a path to a track of type [`Animation.TYPE_POSITION_3D`](#class_animation_constant_type_position_3d), returns `Vector3(0, 0, 0)`.

See also [`root_motion_track`](#class_animationmixer_property_root_motion_track) and [`RootMotionView`](class_rootmotionview.md).

The most basic example is applying position to [`CharacterBody3D`](class_characterbody3d.md):



```gdscript

    var current_rotation: Quaternion
    
    func _process(delta):
        if Input.is_action_just_pressed("animate"):
            current_rotation = get_quaternion()
            state_machine.travel("Animate")
        var velocity: Vector3 = current_rotation * animation_tree.get_root_motion_position() / delta
        set_velocity(velocity)
        move_and_slide()
```



By using this in combination with [`get_root_motion_rotation_accumulator`](#class_animationmixer_method_get_root_motion_rotation_accumulator), you can apply the root motion position more correctly to account for the rotation of the node.



```gdscript

    func _process(delta):
        if Input.is_action_just_pressed("animate"):
            state_machine.travel("Animate")
        set_quaternion(get_quaternion() * animation_tree.get_root_motion_rotation())
        var velocity: Vector3 = (animation_tree.get_root_motion_rotation_accumulator().inverse() * get_quaternion()) * animation_tree.get_root_motion_position() / delta
        set_velocity(velocity)
        move_and_slide()
```







<!-- rst-class:: classref-item-separator -->

---

<div id="_class_animationmixer_method_get_root_motion_position_accumulator"></div>

[`Vector3`](class_vector3.md) **get_root_motion_position_accumulator** ( ) const[^const]<div id="class_animationmixer_method_get_root_motion_position_accumulator"></div>

Retrieve the blended value of the position tracks with the [`root_motion_track`](#class_animationmixer_property_root_motion_track) as a [`Vector3`](class_vector3.md) that can be used elsewhere.

This is useful in cases where you want to respect the initial key values of the animation.

For example, if an animation with only one key `Vector3(0, 0, 0)` is played in the previous frame and then an animation with only one key `Vector3(1, 0, 1)` is played in the next frame, the difference can be calculated as follows:



```gdscript

    var prev_root_motion_position_accumulator: Vector3
    
    func _process(delta):
        if Input.is_action_just_pressed("animate"):
            state_machine.travel("Animate")
        var current_root_motion_position_accumulator: Vector3 = animation_tree.get_root_motion_position_accumulator()
        var difference: Vector3 = current_root_motion_position_accumulator - prev_root_motion_position_accumulator
        prev_root_motion_position_accumulator = current_root_motion_position_accumulator
        transform.origin += difference
```



However, if the animation loops, an unintended discrete change may occur, so this is only useful for some simple use cases.



<!-- rst-class:: classref-item-separator -->

---

<div id="_class_animationmixer_method_get_root_motion_rotation"></div>

[`Quaternion`](class_quaternion.md) **get_root_motion_rotation** ( ) const[^const]<div id="class_animationmixer_method_get_root_motion_rotation"></div>

Retrieve the motion delta of rotation with the [`root_motion_track`](#class_animationmixer_property_root_motion_track) as a [`Quaternion`](class_quaternion.md) that can be used elsewhere.

If [`root_motion_track`](#class_animationmixer_property_root_motion_track) is not a path to a track of type [`Animation.TYPE_ROTATION_3D`](#class_animation_constant_type_rotation_3d), returns `Quaternion(0, 0, 0, 1)`.

See also [`root_motion_track`](#class_animationmixer_property_root_motion_track) and [`RootMotionView`](class_rootmotionview.md).

The most basic example is applying rotation to [`CharacterBody3D`](class_characterbody3d.md):



```gdscript

    func _process(delta):
        if Input.is_action_just_pressed("animate"):
            state_machine.travel("Animate")
        set_quaternion(get_quaternion() * animation_tree.get_root_motion_rotation())
```





<!-- rst-class:: classref-item-separator -->

---

<div id="_class_animationmixer_method_get_root_motion_rotation_accumulator"></div>

[`Quaternion`](class_quaternion.md) **get_root_motion_rotation_accumulator** ( ) const[^const]<div id="class_animationmixer_method_get_root_motion_rotation_accumulator"></div>

Retrieve the blended value of the rotation tracks with the [`root_motion_track`](#class_animationmixer_property_root_motion_track) as a [`Quaternion`](class_quaternion.md) that can be used elsewhere.

This is necessary to apply the root motion position correctly, taking rotation into account. See also [`get_root_motion_position`](#class_animationmixer_method_get_root_motion_position).

Also, this is useful in cases where you want to respect the initial key values of the animation.

For example, if an animation with only one key `Quaternion(0, 0, 0, 1)` is played in the previous frame and then an animation with only one key `Quaternion(0, 0.707, 0, 0.707)` is played in the next frame, the difference can be calculated as follows:



```gdscript

    var prev_root_motion_rotation_accumulator: Quaternion
    
    func _process(delta):
        if Input.is_action_just_pressed("animate"):
            state_machine.travel("Animate")
        var current_root_motion_rotation_accumulator: Quaternion = animation_tree.get_root_motion_rotation_accumulator()
        var difference: Quaternion = prev_root_motion_rotation_accumulator.inverse() * current_root_motion_rotation_accumulator
        prev_root_motion_rotation_accumulator = current_root_motion_rotation_accumulator
        transform.basis *=  Basis(difference)
```



However, if the animation loops, an unintended discrete change may occur, so this is only useful for some simple use cases.



<!-- rst-class:: classref-item-separator -->

---

<div id="_class_animationmixer_method_get_root_motion_scale"></div>

[`Vector3`](class_vector3.md) **get_root_motion_scale** ( ) const[^const]<div id="class_animationmixer_method_get_root_motion_scale"></div>

Retrieve the motion delta of scale with the [`root_motion_track`](#class_animationmixer_property_root_motion_track) as a [`Vector3`](class_vector3.md) that can be used elsewhere.

If [`root_motion_track`](#class_animationmixer_property_root_motion_track) is not a path to a track of type [`Animation.TYPE_SCALE_3D`](#class_animation_constant_type_scale_3d), returns `Vector3(0, 0, 0)`.

See also [`root_motion_track`](#class_animationmixer_property_root_motion_track) and [`RootMotionView`](class_rootmotionview.md).

The most basic example is applying scale to [`CharacterBody3D`](class_characterbody3d.md):



```gdscript

    var current_scale: Vector3 = Vector3(1, 1, 1)
    var scale_accum: Vector3 = Vector3(1, 1, 1)
    
    func _process(delta):
        if Input.is_action_just_pressed("animate"):
            current_scale = get_scale()
            scale_accum = Vector3(1, 1, 1)
            state_machine.travel("Animate")
        scale_accum += animation_tree.get_root_motion_scale()
        set_scale(current_scale * scale_accum)
```





<!-- rst-class:: classref-item-separator -->

---

<div id="_class_animationmixer_method_get_root_motion_scale_accumulator"></div>

[`Vector3`](class_vector3.md) **get_root_motion_scale_accumulator** ( ) const[^const]<div id="class_animationmixer_method_get_root_motion_scale_accumulator"></div>

Retrieve the blended value of the scale tracks with the [`root_motion_track`](#class_animationmixer_property_root_motion_track) as a [`Vector3`](class_vector3.md) that can be used elsewhere.

For example, if an animation with only one key `Vector3(1, 1, 1)` is played in the previous frame and then an animation with only one key `Vector3(2, 2, 2)` is played in the next frame, the difference can be calculated as follows:



```gdscript

    var prev_root_motion_scale_accumulator: Vector3
    
    func _process(delta):
        if Input.is_action_just_pressed("animate"):
            state_machine.travel("Animate")
        var current_root_motion_scale_accumulator: Vector3 = animation_tree.get_root_motion_scale_accumulator()
        var difference: Vector3 = current_root_motion_scale_accumulator - prev_root_motion_scale_accumulator
        prev_root_motion_scale_accumulator = current_root_motion_scale_accumulator
        transform.basis = transform.basis.scaled(difference)
```



However, if the animation loops, an unintended discrete change may occur, so this is only useful for some simple use cases.



<!-- rst-class:: classref-item-separator -->

---

<div id="_class_animationmixer_method_has_animation"></div>

[`bool`](class_bool.md) **has_animation** ( name: [`StringName`](class_stringname.md) ) const[^const]<div id="class_animationmixer_method_has_animation"></div>

Returns `true` if the **AnimationMixer** stores an [`Animation`](class_animation.md) with key `name`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_animationmixer_method_has_animation_library"></div>

[`bool`](class_bool.md) **has_animation_library** ( name: [`StringName`](class_stringname.md) ) const[^const]<div id="class_animationmixer_method_has_animation_library"></div>

Returns `true` if the **AnimationMixer** stores an [`AnimationLibrary`](class_animationlibrary.md) with key `name`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_animationmixer_method_remove_animation_library"></div>

`void` **remove_animation_library** ( name: [`StringName`](class_stringname.md) )<div id="class_animationmixer_method_remove_animation_library"></div>

Removes the [`AnimationLibrary`](class_animationlibrary.md) associated with the key `name`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_animationmixer_method_rename_animation_library"></div>

`void` **rename_animation_library** ( name: [`StringName`](class_stringname.md), newname: [`StringName`](class_stringname.md) )<div id="class_animationmixer_method_rename_animation_library"></div>

Moves the [`AnimationLibrary`](class_animationlibrary.md) associated with the key `name` to the key `newname`.

[^virtual]: 本方法通常需要用户覆盖才能生效。
[^const]: 本方法无副作用，不会修改该实例的任何成员变量。
[^vararg]: 本方法除了能接受在此处描述的参数外，还能够继续接受任意数量的参数。
[^constructor]: 本方法用于构造某个类型。
[^static]: 调用本方法无需实例，可直接使用类名进行调用。
[^operator]: 本方法描述的是使用本类型作为左操作数的有效运算符。
[^bitfield]: 这个值是由下列位标志构成位掩码的整数。
[^void]: 无返回值。
