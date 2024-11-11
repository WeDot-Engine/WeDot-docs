<!-- ⚠ 请勿编辑本文件 ⚠ -->
<!-- 本文档使用脚本从 WeDot 引擎源码仓库生成。 -->
<!-- 生成脚本：https://github.com/WeDot-Engine/WeDot/tree/master/doc/tools/make_md.py； -->
<!-- 原文件：https://github.com/WeDot-Engine/WeDot/tree/master/doc/classes/Animation.xml。 -->

<div id="_class_animation"></div>

# Animation

**继承：** [`Resource`](class_resource.md) **<** [`RefCounted`](class_refcounted.md) **<** [`Object`](class_object.md)

Holds data that can be used to animate anything in the engine.

## 描述

This resource holds data that can be used to animate anything in the engine. Animations are divided into tracks and each track must be linked to a node. The state of that node can be changed through time, by adding timed keys (events) to the track.



```gdscript

    # This creates an animation that makes the node "Enemy" move to the right by
    # 100 pixels in 2.0 seconds.
    var animation = Animation.new()
    var track_index = animation.add_track(Animation.TYPE_VALUE)
    animation.track_set_path(track_index, "Enemy:position:x")
    animation.track_insert_key(track_index, 0.0, 0)
    animation.track_insert_key(track_index, 2.0, 100)
    animation.length = 2.0
```

```csharp

    // This creates an animation that makes the node "Enemy" move to the right by
    // 100 pixels in 2.0 seconds.
    var animation = new Animation();
    int trackIndex = animation.AddTrack(Animation.TrackType.Value);
    animation.TrackSetPath(trackIndex, "Enemy:position:x");
    animation.TrackInsertKey(trackIndex, 0.0f, 0);
    animation.TrackInsertKey(trackIndex, 2.0f, 100);
    animation.Length = 2.0f;
```



Animations are just data containers, and must be added to nodes such as an [`AnimationPlayer`](class_animationplayer.md) to be played back. Animation tracks have different types, each with its own set of dedicated methods. Check [TrackType](#enum_animation_tracktype) to see available types.

 **Note:** For 3D position/rotation/scale, using the dedicated [`TYPE_POSITION_3D`](class_animation.md#class_animation_constant_type_position_3d), [`TYPE_ROTATION_3D`](class_animation.md#class_animation_constant_type_rotation_3d) and [`TYPE_SCALE_3D`](class_animation.md#class_animation_constant_type_scale_3d) track types instead of [`TYPE_VALUE`](class_animation.md#class_animation_constant_type_value) is recommended for performance reasons.





## 属性

|||
|:-:|:--|
| [`bool`](class_bool.md)              | [`capture_included`](class_animation.md#class_animation_property_capture_included) | ``false``     |
| [`float`](class_float.md)            | [`length`](class_animation.md#class_animation_property_length)                     | ``1.0``       |
| [LoopMode](#enum_animation_loopmode) | [`loop_mode`](class_animation.md#class_animation_property_loop_mode)               | ``0``         |
| [`float`](class_float.md)            | [`step`](class_animation.md#class_animation_property_step)                         | ``0.0333333`` |

## 方法

|||
|:-:|:--|
| `void`                                                 | [`add_marker`](class_animation.md#class_animation_method_add_marker) ( name: [`StringName`](class_stringname.md), time: [`float`](class_float.md) )                                                                                                                                                                         |
| [`int`](class_int.md)                                  | [`add_track`](class_animation.md#class_animation_method_add_track) ( type: [TrackType](#enum_animation_tracktype), at_position: [`int`](class_int.md) = -1 )                                                                                                                                                                |
| [`StringName`](class_stringname.md)                    | [`animation_track_get_key_animation`](class_animation.md#class_animation_method_animation_track_get_key_animation) ( track_idx: [`int`](class_int.md), key_idx: [`int`](class_int.md) ) const[^const]                                                                                                                       |
| [`int`](class_int.md)                                  | [`animation_track_insert_key`](class_animation.md#class_animation_method_animation_track_insert_key) ( track_idx: [`int`](class_int.md), time: [`float`](class_float.md), animation: [`StringName`](class_stringname.md) )                                                                                                  |
| `void`                                                 | [`animation_track_set_key_animation`](class_animation.md#class_animation_method_animation_track_set_key_animation) ( track_idx: [`int`](class_int.md), key_idx: [`int`](class_int.md), animation: [`StringName`](class_stringname.md) )                                                                                     |
| [`float`](class_float.md)                              | [`audio_track_get_key_end_offset`](class_animation.md#class_animation_method_audio_track_get_key_end_offset) ( track_idx: [`int`](class_int.md), key_idx: [`int`](class_int.md) ) const[^const]                                                                                                                             |
| [`float`](class_float.md)                              | [`audio_track_get_key_start_offset`](class_animation.md#class_animation_method_audio_track_get_key_start_offset) ( track_idx: [`int`](class_int.md), key_idx: [`int`](class_int.md) ) const[^const]                                                                                                                         |
| [`Resource`](class_resource.md)                        | [`audio_track_get_key_stream`](class_animation.md#class_animation_method_audio_track_get_key_stream) ( track_idx: [`int`](class_int.md), key_idx: [`int`](class_int.md) ) const[^const]                                                                                                                                     |
| [`int`](class_int.md)                                  | [`audio_track_insert_key`](class_animation.md#class_animation_method_audio_track_insert_key) ( track_idx: [`int`](class_int.md), time: [`float`](class_float.md), stream: [`Resource`](class_resource.md), start_offset: [`float`](class_float.md) = 0, end_offset: [`float`](class_float.md) = 0 )                         |
| [`bool`](class_bool.md)                                | [`audio_track_is_use_blend`](class_animation.md#class_animation_method_audio_track_is_use_blend) ( track_idx: [`int`](class_int.md) ) const[^const]                                                                                                                                                                         |
| `void`                                                 | [`audio_track_set_key_end_offset`](class_animation.md#class_animation_method_audio_track_set_key_end_offset) ( track_idx: [`int`](class_int.md), key_idx: [`int`](class_int.md), offset: [`float`](class_float.md) )                                                                                                        |
| `void`                                                 | [`audio_track_set_key_start_offset`](class_animation.md#class_animation_method_audio_track_set_key_start_offset) ( track_idx: [`int`](class_int.md), key_idx: [`int`](class_int.md), offset: [`float`](class_float.md) )                                                                                                    |
| `void`                                                 | [`audio_track_set_key_stream`](class_animation.md#class_animation_method_audio_track_set_key_stream) ( track_idx: [`int`](class_int.md), key_idx: [`int`](class_int.md), stream: [`Resource`](class_resource.md) )                                                                                                          |
| `void`                                                 | [`audio_track_set_use_blend`](class_animation.md#class_animation_method_audio_track_set_use_blend) ( track_idx: [`int`](class_int.md), enable: [`bool`](class_bool.md) )                                                                                                                                                    |
| [`Vector2`](class_vector2.md)                          | [`bezier_track_get_key_in_handle`](class_animation.md#class_animation_method_bezier_track_get_key_in_handle) ( track_idx: [`int`](class_int.md), key_idx: [`int`](class_int.md) ) const[^const]                                                                                                                             |
| [`Vector2`](class_vector2.md)                          | [`bezier_track_get_key_out_handle`](class_animation.md#class_animation_method_bezier_track_get_key_out_handle) ( track_idx: [`int`](class_int.md), key_idx: [`int`](class_int.md) ) const[^const]                                                                                                                           |
| [`float`](class_float.md)                              | [`bezier_track_get_key_value`](class_animation.md#class_animation_method_bezier_track_get_key_value) ( track_idx: [`int`](class_int.md), key_idx: [`int`](class_int.md) ) const[^const]                                                                                                                                     |
| [`int`](class_int.md)                                  | [`bezier_track_insert_key`](class_animation.md#class_animation_method_bezier_track_insert_key) ( track_idx: [`int`](class_int.md), time: [`float`](class_float.md), value: [`float`](class_float.md), in_handle: [`Vector2`](class_vector2.md) = Vector2(0, 0), out_handle: [`Vector2`](class_vector2.md) = Vector2(0, 0) ) |
| [`float`](class_float.md)                              | [`bezier_track_interpolate`](class_animation.md#class_animation_method_bezier_track_interpolate) ( track_idx: [`int`](class_int.md), time: [`float`](class_float.md) ) const[^const]                                                                                                                                        |
| `void`                                                 | [`bezier_track_set_key_in_handle`](class_animation.md#class_animation_method_bezier_track_set_key_in_handle) ( track_idx: [`int`](class_int.md), key_idx: [`int`](class_int.md), in_handle: [`Vector2`](class_vector2.md), balanced_value_time_ratio: [`float`](class_float.md) = 1.0 )                                     |
| `void`                                                 | [`bezier_track_set_key_out_handle`](class_animation.md#class_animation_method_bezier_track_set_key_out_handle) ( track_idx: [`int`](class_int.md), key_idx: [`int`](class_int.md), out_handle: [`Vector2`](class_vector2.md), balanced_value_time_ratio: [`float`](class_float.md) = 1.0 )                                  |
| `void`                                                 | [`bezier_track_set_key_value`](class_animation.md#class_animation_method_bezier_track_set_key_value) ( track_idx: [`int`](class_int.md), key_idx: [`int`](class_int.md), value: [`float`](class_float.md) )                                                                                                                 |
| [`int`](class_int.md)                                  | [`blend_shape_track_insert_key`](class_animation.md#class_animation_method_blend_shape_track_insert_key) ( track_idx: [`int`](class_int.md), time: [`float`](class_float.md), amount: [`float`](class_float.md) )                                                                                                           |
| [`float`](class_float.md)                              | [`blend_shape_track_interpolate`](class_animation.md#class_animation_method_blend_shape_track_interpolate) ( track_idx: [`int`](class_int.md), time_sec: [`float`](class_float.md), backward: [`bool`](class_bool.md) = false ) const[^const]                                                                               |
| `void`                                                 | [`clear`](class_animation.md#class_animation_method_clear) ( )                                                                                                                                                                                                                                                              |
| `void`                                                 | [`compress`](class_animation.md#class_animation_method_compress) ( page_size: [`int`](class_int.md) = 8192, fps: [`int`](class_int.md) = 120, split_tolerance: [`float`](class_float.md) = 4.0 )                                                                                                                            |
| `void`                                                 | [`copy_track`](class_animation.md#class_animation_method_copy_track) ( track_idx: [`int`](class_int.md), to_animation: [`Animation`](class_animation.md) )                                                                                                                                                                  |
| [`int`](class_int.md)                                  | [`find_track`](class_animation.md#class_animation_method_find_track) ( path: [`NodePath`](class_nodepath.md), type: [TrackType](#enum_animation_tracktype) ) const[^const]                                                                                                                                                  |
| [`StringName`](class_stringname.md)                    | [`get_marker_at_time`](class_animation.md#class_animation_method_get_marker_at_time) ( time: [`float`](class_float.md) ) const[^const]                                                                                                                                                                                      |
| [`Color`](class_color.md)                              | [`get_marker_color`](class_animation.md#class_animation_method_get_marker_color) ( name: [`StringName`](class_stringname.md) ) const[^const]                                                                                                                                                                                |
| [`PackedStringArray`](class_packedstringarray.md)      | [`get_marker_names`](class_animation.md#class_animation_method_get_marker_names) ( ) const[^const]                                                                                                                                                                                                                          |
| [`float`](class_float.md)                              | [`get_marker_time`](class_animation.md#class_animation_method_get_marker_time) ( name: [`StringName`](class_stringname.md) ) const[^const]                                                                                                                                                                                  |
| [`StringName`](class_stringname.md)                    | [`get_next_marker`](class_animation.md#class_animation_method_get_next_marker) ( time: [`float`](class_float.md) ) const[^const]                                                                                                                                                                                            |
| [`StringName`](class_stringname.md)                    | [`get_prev_marker`](class_animation.md#class_animation_method_get_prev_marker) ( time: [`float`](class_float.md) ) const[^const]                                                                                                                                                                                            |
| [`int`](class_int.md)                                  | [`get_track_count`](class_animation.md#class_animation_method_get_track_count) ( ) const[^const]                                                                                                                                                                                                                            |
| [`bool`](class_bool.md)                                | [`has_marker`](class_animation.md#class_animation_method_has_marker) ( name: [`StringName`](class_stringname.md) ) const[^const]                                                                                                                                                                                            |
| [`StringName`](class_stringname.md)                    | [`method_track_get_name`](class_animation.md#class_animation_method_method_track_get_name) ( track_idx: [`int`](class_int.md), key_idx: [`int`](class_int.md) ) const[^const]                                                                                                                                               |
| [`Array`](class_array.md)                              | [`method_track_get_params`](class_animation.md#class_animation_method_method_track_get_params) ( track_idx: [`int`](class_int.md), key_idx: [`int`](class_int.md) ) const[^const]                                                                                                                                           |
| `void`                                                 | [`optimize`](class_animation.md#class_animation_method_optimize) ( allowed_velocity_err: [`float`](class_float.md) = 0.01, allowed_angular_err: [`float`](class_float.md) = 0.01, precision: [`int`](class_int.md) = 3 )                                                                                                    |
| [`int`](class_int.md)                                  | [`position_track_insert_key`](class_animation.md#class_animation_method_position_track_insert_key) ( track_idx: [`int`](class_int.md), time: [`float`](class_float.md), position: [`Vector3`](class_vector3.md) )                                                                                                           |
| [`Vector3`](class_vector3.md)                          | [`position_track_interpolate`](class_animation.md#class_animation_method_position_track_interpolate) ( track_idx: [`int`](class_int.md), time_sec: [`float`](class_float.md), backward: [`bool`](class_bool.md) = false ) const[^const]                                                                                     |
| `void`                                                 | [`remove_marker`](class_animation.md#class_animation_method_remove_marker) ( name: [`StringName`](class_stringname.md) )                                                                                                                                                                                                    |
| `void`                                                 | [`remove_track`](class_animation.md#class_animation_method_remove_track) ( track_idx: [`int`](class_int.md) )                                                                                                                                                                                                               |
| [`int`](class_int.md)                                  | [`rotation_track_insert_key`](class_animation.md#class_animation_method_rotation_track_insert_key) ( track_idx: [`int`](class_int.md), time: [`float`](class_float.md), rotation: [`Quaternion`](class_quaternion.md) )                                                                                                     |
| [`Quaternion`](class_quaternion.md)                    | [`rotation_track_interpolate`](class_animation.md#class_animation_method_rotation_track_interpolate) ( track_idx: [`int`](class_int.md), time_sec: [`float`](class_float.md), backward: [`bool`](class_bool.md) = false ) const[^const]                                                                                     |
| [`int`](class_int.md)                                  | [`scale_track_insert_key`](class_animation.md#class_animation_method_scale_track_insert_key) ( track_idx: [`int`](class_int.md), time: [`float`](class_float.md), scale: [`Vector3`](class_vector3.md) )                                                                                                                    |
| [`Vector3`](class_vector3.md)                          | [`scale_track_interpolate`](class_animation.md#class_animation_method_scale_track_interpolate) ( track_idx: [`int`](class_int.md), time_sec: [`float`](class_float.md), backward: [`bool`](class_bool.md) = false ) const[^const]                                                                                           |
| `void`                                                 | [`set_marker_color`](class_animation.md#class_animation_method_set_marker_color) ( name: [`StringName`](class_stringname.md), color: [`Color`](class_color.md) )                                                                                                                                                            |
| [`int`](class_int.md)                                  | [`track_find_key`](class_animation.md#class_animation_method_track_find_key) ( track_idx: [`int`](class_int.md), time: [`float`](class_float.md), find_mode: [FindMode](#enum_animation_findmode) = 0, limit: [`bool`](class_bool.md) = false, backward: [`bool`](class_bool.md) = false ) const[^const]                    |
| [`bool`](class_bool.md)                                | [`track_get_interpolation_loop_wrap`](class_animation.md#class_animation_method_track_get_interpolation_loop_wrap) ( track_idx: [`int`](class_int.md) ) const[^const]                                                                                                                                                       |
| [InterpolationType](#enum_animation_interpolationtype) | [`track_get_interpolation_type`](class_animation.md#class_animation_method_track_get_interpolation_type) ( track_idx: [`int`](class_int.md) ) const[^const]                                                                                                                                                                 |
| [`int`](class_int.md)                                  | [`track_get_key_count`](class_animation.md#class_animation_method_track_get_key_count) ( track_idx: [`int`](class_int.md) ) const[^const]                                                                                                                                                                                   |
| [`float`](class_float.md)                              | [`track_get_key_time`](class_animation.md#class_animation_method_track_get_key_time) ( track_idx: [`int`](class_int.md), key_idx: [`int`](class_int.md) ) const[^const]                                                                                                                                                     |
| [`float`](class_float.md)                              | [`track_get_key_transition`](class_animation.md#class_animation_method_track_get_key_transition) ( track_idx: [`int`](class_int.md), key_idx: [`int`](class_int.md) ) const[^const]                                                                                                                                         |
| [`Variant`](class_variant.md)                          | [`track_get_key_value`](class_animation.md#class_animation_method_track_get_key_value) ( track_idx: [`int`](class_int.md), key_idx: [`int`](class_int.md) ) const[^const]                                                                                                                                                   |
| [`NodePath`](class_nodepath.md)                        | [`track_get_path`](class_animation.md#class_animation_method_track_get_path) ( track_idx: [`int`](class_int.md) ) const[^const]                                                                                                                                                                                             |
| [TrackType](#enum_animation_tracktype)                 | [`track_get_type`](class_animation.md#class_animation_method_track_get_type) ( track_idx: [`int`](class_int.md) ) const[^const]                                                                                                                                                                                             |
| [`int`](class_int.md)                                  | [`track_insert_key`](class_animation.md#class_animation_method_track_insert_key) ( track_idx: [`int`](class_int.md), time: [`float`](class_float.md), key: [`Variant`](class_variant.md), transition: [`float`](class_float.md) = 1 )                                                                                       |
| [`bool`](class_bool.md)                                | [`track_is_compressed`](class_animation.md#class_animation_method_track_is_compressed) ( track_idx: [`int`](class_int.md) ) const[^const]                                                                                                                                                                                   |
| [`bool`](class_bool.md)                                | [`track_is_enabled`](class_animation.md#class_animation_method_track_is_enabled) ( track_idx: [`int`](class_int.md) ) const[^const]                                                                                                                                                                                         |
| [`bool`](class_bool.md)                                | [`track_is_imported`](class_animation.md#class_animation_method_track_is_imported) ( track_idx: [`int`](class_int.md) ) const[^const]                                                                                                                                                                                       |
| `void`                                                 | [`track_move_down`](class_animation.md#class_animation_method_track_move_down) ( track_idx: [`int`](class_int.md) )                                                                                                                                                                                                         |
| `void`                                                 | [`track_move_to`](class_animation.md#class_animation_method_track_move_to) ( track_idx: [`int`](class_int.md), to_idx: [`int`](class_int.md) )                                                                                                                                                                              |
| `void`                                                 | [`track_move_up`](class_animation.md#class_animation_method_track_move_up) ( track_idx: [`int`](class_int.md) )                                                                                                                                                                                                             |
| `void`                                                 | [`track_remove_key`](class_animation.md#class_animation_method_track_remove_key) ( track_idx: [`int`](class_int.md), key_idx: [`int`](class_int.md) )                                                                                                                                                                       |
| `void`                                                 | [`track_remove_key_at_time`](class_animation.md#class_animation_method_track_remove_key_at_time) ( track_idx: [`int`](class_int.md), time: [`float`](class_float.md) )                                                                                                                                                      |
| `void`                                                 | [`track_set_enabled`](class_animation.md#class_animation_method_track_set_enabled) ( track_idx: [`int`](class_int.md), enabled: [`bool`](class_bool.md) )                                                                                                                                                                   |
| `void`                                                 | [`track_set_imported`](class_animation.md#class_animation_method_track_set_imported) ( track_idx: [`int`](class_int.md), imported: [`bool`](class_bool.md) )                                                                                                                                                                |
| `void`                                                 | [`track_set_interpolation_loop_wrap`](class_animation.md#class_animation_method_track_set_interpolation_loop_wrap) ( track_idx: [`int`](class_int.md), interpolation: [`bool`](class_bool.md) )                                                                                                                             |
| `void`                                                 | [`track_set_interpolation_type`](class_animation.md#class_animation_method_track_set_interpolation_type) ( track_idx: [`int`](class_int.md), interpolation: [InterpolationType](#enum_animation_interpolationtype) )                                                                                                        |
| `void`                                                 | [`track_set_key_time`](class_animation.md#class_animation_method_track_set_key_time) ( track_idx: [`int`](class_int.md), key_idx: [`int`](class_int.md), time: [`float`](class_float.md) )                                                                                                                                  |
| `void`                                                 | [`track_set_key_transition`](class_animation.md#class_animation_method_track_set_key_transition) ( track_idx: [`int`](class_int.md), key_idx: [`int`](class_int.md), transition: [`float`](class_float.md) )                                                                                                                |
| `void`                                                 | [`track_set_key_value`](class_animation.md#class_animation_method_track_set_key_value) ( track_idx: [`int`](class_int.md), key: [`int`](class_int.md), value: [`Variant`](class_variant.md) )                                                                                                                               |
| `void`                                                 | [`track_set_path`](class_animation.md#class_animation_method_track_set_path) ( track_idx: [`int`](class_int.md), path: [`NodePath`](class_nodepath.md) )                                                                                                                                                                    |
| `void`                                                 | [`track_swap`](class_animation.md#class_animation_method_track_swap) ( track_idx: [`int`](class_int.md), with_idx: [`int`](class_int.md) )                                                                                                                                                                                  |
| [UpdateMode](#enum_animation_updatemode)               | [`value_track_get_update_mode`](class_animation.md#class_animation_method_value_track_get_update_mode) ( track_idx: [`int`](class_int.md) ) const[^const]                                                                                                                                                                   |
| [`Variant`](class_variant.md)                          | [`value_track_interpolate`](class_animation.md#class_animation_method_value_track_interpolate) ( track_idx: [`int`](class_int.md), time_sec: [`float`](class_float.md), backward: [`bool`](class_bool.md) = false ) const[^const]                                                                                           |
| `void`                                                 | [`value_track_set_update_mode`](class_animation.md#class_animation_method_value_track_set_update_mode) ( track_idx: [`int`](class_int.md), mode: [UpdateMode](#enum_animation_updatemode) )                                                                                                                                 |

<!-- rst-class:: classref-section-separator -->

---

## 枚举

<div id="_class_enum_animation_tracktype"></div>

enum **TrackType**: <div id="enum_animation_tracktype"></div>

<div id="_class_animation_constant_type_value"></div>

[TrackType](#enum_animation_tracktype) **TYPE_VALUE** = ``0``

Value tracks set values in node properties, but only those which can be interpolated. For 3D position/rotation/scale, using the dedicated [`TYPE_POSITION_3D`](class_animation.md#class_animation_constant_type_position_3d), [`TYPE_ROTATION_3D`](class_animation.md#class_animation_constant_type_rotation_3d) and [`TYPE_SCALE_3D`](class_animation.md#class_animation_constant_type_scale_3d) track types instead of [`TYPE_VALUE`](class_animation.md#class_animation_constant_type_value) is recommended for performance reasons.

<div id="_class_animation_constant_type_position_3d"></div>

[TrackType](#enum_animation_tracktype) **TYPE_POSITION_3D** = ``1``

3D position track (values are stored in [`Vector3`](class_vector3.md) s).

<div id="_class_animation_constant_type_rotation_3d"></div>

[TrackType](#enum_animation_tracktype) **TYPE_ROTATION_3D** = ``2``

3D rotation track (values are stored in [`Quaternion`](class_quaternion.md) s).

<div id="_class_animation_constant_type_scale_3d"></div>

[TrackType](#enum_animation_tracktype) **TYPE_SCALE_3D** = ``3``

3D scale track (values are stored in [`Vector3`](class_vector3.md) s).

<div id="_class_animation_constant_type_blend_shape"></div>

[TrackType](#enum_animation_tracktype) **TYPE_BLEND_SHAPE** = ``4``

Blend shape track.

<div id="_class_animation_constant_type_method"></div>

[TrackType](#enum_animation_tracktype) **TYPE_METHOD** = ``5``

Method tracks call functions with given arguments per key.

<div id="_class_animation_constant_type_bezier"></div>

[TrackType](#enum_animation_tracktype) **TYPE_BEZIER** = ``6``

Bezier tracks are used to interpolate a value using custom curves. They can also be used to animate sub-properties of vectors and colors (e.g. alpha value of a [`Color`](class_color.md)).

<div id="_class_animation_constant_type_audio"></div>

[TrackType](#enum_animation_tracktype) **TYPE_AUDIO** = ``7``

Audio tracks are used to play an audio stream with either type of [`AudioStreamPlayer`](class_audiostreamplayer.md). The stream can be trimmed and previewed in the animation.

<div id="_class_animation_constant_type_animation"></div>

[TrackType](#enum_animation_tracktype) **TYPE_ANIMATION** = ``8``

Animation tracks play animations in other [`AnimationPlayer`](class_animationplayer.md) nodes.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_enum_animation_interpolationtype"></div>

enum **InterpolationType**: <div id="enum_animation_interpolationtype"></div>

<div id="_class_animation_constant_interpolation_nearest"></div>

[InterpolationType](#enum_animation_interpolationtype) **INTERPOLATION_NEAREST** = ``0``

No interpolation (nearest value).

<div id="_class_animation_constant_interpolation_linear"></div>

[InterpolationType](#enum_animation_interpolationtype) **INTERPOLATION_LINEAR** = ``1``

Linear interpolation.

<div id="_class_animation_constant_interpolation_cubic"></div>

[InterpolationType](#enum_animation_interpolationtype) **INTERPOLATION_CUBIC** = ``2``

Cubic interpolation. This looks smoother than linear interpolation, but is more expensive to interpolate. Stick to [`INTERPOLATION_LINEAR`](class_animation.md#class_animation_constant_interpolation_linear) for complex 3D animations imported from external software, even if it requires using a higher animation framerate in return.

<div id="_class_animation_constant_interpolation_linear_angle"></div>

[InterpolationType](#enum_animation_interpolationtype) **INTERPOLATION_LINEAR_ANGLE** = ``3``

Linear interpolation with shortest path rotation.

 **Note:** The result value is always normalized and may not match the key value.

<div id="_class_animation_constant_interpolation_cubic_angle"></div>

[InterpolationType](#enum_animation_interpolationtype) **INTERPOLATION_CUBIC_ANGLE** = ``4``

Cubic interpolation with shortest path rotation.

 **Note:** The result value is always normalized and may not match the key value.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_enum_animation_updatemode"></div>

enum **UpdateMode**: <div id="enum_animation_updatemode"></div>

<div id="_class_animation_constant_update_continuous"></div>

[UpdateMode](#enum_animation_updatemode) **UPDATE_CONTINUOUS** = ``0``

Update between keyframes and hold the value.

<div id="_class_animation_constant_update_discrete"></div>

[UpdateMode](#enum_animation_updatemode) **UPDATE_DISCRETE** = ``1``

Update at the keyframes.

<div id="_class_animation_constant_update_capture"></div>

[UpdateMode](#enum_animation_updatemode) **UPDATE_CAPTURE** = ``2``

Same as [`UPDATE_CONTINUOUS`](class_animation.md#class_animation_constant_update_continuous) but works as a flag to capture the value of the current object and perform interpolation in some methods. See also [`AnimationMixer.capture`](class_animationmixer.md#class_animationmixer_method_capture), [`AnimationPlayer.playback_auto_capture`](class_animationplayer.md#class_animationplayer_property_playback_auto_capture), and [`AnimationPlayer.play_with_capture`](class_animationplayer.md#class_animationplayer_method_play_with_capture).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_enum_animation_loopmode"></div>

enum **LoopMode**: <div id="enum_animation_loopmode"></div>

<div id="_class_animation_constant_loop_none"></div>

[LoopMode](#enum_animation_loopmode) **LOOP_NONE** = ``0``

At both ends of the animation, the animation will stop playing.

<div id="_class_animation_constant_loop_linear"></div>

[LoopMode](#enum_animation_loopmode) **LOOP_LINEAR** = ``1``

At both ends of the animation, the animation will be repeated without changing the playback direction.

<div id="_class_animation_constant_loop_pingpong"></div>

[LoopMode](#enum_animation_loopmode) **LOOP_PINGPONG** = ``2``

Repeats playback and reverse playback at both ends of the animation.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_enum_animation_loopedflag"></div>

enum **LoopedFlag**: <div id="enum_animation_loopedflag"></div>

<div id="_class_animation_constant_looped_flag_none"></div>

[LoopedFlag](#enum_animation_loopedflag) **LOOPED_FLAG_NONE** = ``0``

This flag indicates that the animation proceeds without any looping.

<div id="_class_animation_constant_looped_flag_end"></div>

[LoopedFlag](#enum_animation_loopedflag) **LOOPED_FLAG_END** = ``1``

This flag indicates that the animation has reached the end of the animation and just after loop processed.

<div id="_class_animation_constant_looped_flag_start"></div>

[LoopedFlag](#enum_animation_loopedflag) **LOOPED_FLAG_START** = ``2``

This flag indicates that the animation has reached the start of the animation and just after loop processed.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_enum_animation_findmode"></div>

enum **FindMode**: <div id="enum_animation_findmode"></div>

<div id="_class_animation_constant_find_mode_nearest"></div>

[FindMode](#enum_animation_findmode) **FIND_MODE_NEAREST** = ``0``

Finds the nearest time key.

<div id="_class_animation_constant_find_mode_approx"></div>

[FindMode](#enum_animation_findmode) **FIND_MODE_APPROX** = ``1``

Finds only the key with approximating the time.

<div id="_class_animation_constant_find_mode_exact"></div>

[FindMode](#enum_animation_findmode) **FIND_MODE_EXACT** = ``2``

Finds only the key with matching the time.

<!-- rst-class:: classref-section-separator -->

---

## 属性说明

<div id="_class_animation_property_capture_included"></div>

[`bool`](class_bool.md) **capture_included** = ``false`` <div id="class_animation_property_capture_included"></div>

- [`bool`](class_bool.md) **is_capture_included** ( )

Returns `true` if the capture track is included. This is a cached readonly value for performance.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_animation_property_length"></div>

[`float`](class_float.md) **length** = ``1.0`` <div id="class_animation_property_length"></div>

- `void` **set_length** ( value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_length** ( )

The total length of the animation (in seconds).

 **Note:** Length is not delimited by the last key, as this one may be before or after the end to ensure correct interpolation and looping.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_animation_property_loop_mode"></div>

[LoopMode](#enum_animation_loopmode) **loop_mode** = ``0`` <div id="class_animation_property_loop_mode"></div>

- `void` **set_loop_mode** ( value: [LoopMode](#enum_animation_loopmode) )
- [LoopMode](#enum_animation_loopmode) **get_loop_mode** ( )

Determines the behavior of both ends of the animation timeline during animation playback. This is used for correct interpolation of animation cycles, and for hinting the player that it must restart the animation.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_animation_property_step"></div>

[`float`](class_float.md) **step** = ``0.0333333`` <div id="class_animation_property_step"></div>

- `void` **set_step** ( value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_step** ( )

The animation step value.

<!-- rst-class:: classref-section-separator -->

---

## 方法说明

<div id="_class_animation_method_add_marker"></div>

`void` **add_marker** ( name: [`StringName`](class_stringname.md), time: [`float`](class_float.md) )<div id="class_animation_method_add_marker"></div>

Adds a marker to this Animation.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_animation_method_add_track"></div>

[`int`](class_int.md) **add_track** ( type: [TrackType](#enum_animation_tracktype), at_position: [`int`](class_int.md) = -1 )<div id="class_animation_method_add_track"></div>

Adds a track to the Animation.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_animation_method_animation_track_get_key_animation"></div>

[`StringName`](class_stringname.md) **animation_track_get_key_animation** ( track_idx: [`int`](class_int.md), key_idx: [`int`](class_int.md) ) const[^const]<div id="class_animation_method_animation_track_get_key_animation"></div>

Returns the animation name at the key identified by `key_idx`. The `track_idx` must be the index of an Animation Track.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_animation_method_animation_track_insert_key"></div>

[`int`](class_int.md) **animation_track_insert_key** ( track_idx: [`int`](class_int.md), time: [`float`](class_float.md), animation: [`StringName`](class_stringname.md) )<div id="class_animation_method_animation_track_insert_key"></div>

Inserts a key with value `animation` at the given `time` (in seconds). The `track_idx` must be the index of an Animation Track.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_animation_method_animation_track_set_key_animation"></div>

`void` **animation_track_set_key_animation** ( track_idx: [`int`](class_int.md), key_idx: [`int`](class_int.md), animation: [`StringName`](class_stringname.md) )<div id="class_animation_method_animation_track_set_key_animation"></div>

Sets the key identified by `key_idx` to value `animation`. The `track_idx` must be the index of an Animation Track.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_animation_method_audio_track_get_key_end_offset"></div>

[`float`](class_float.md) **audio_track_get_key_end_offset** ( track_idx: [`int`](class_int.md), key_idx: [`int`](class_int.md) ) const[^const]<div id="class_animation_method_audio_track_get_key_end_offset"></div>

Returns the end offset of the key identified by `key_idx`. The `track_idx` must be the index of an Audio Track.

End offset is the number of seconds cut off at the ending of the audio stream.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_animation_method_audio_track_get_key_start_offset"></div>

[`float`](class_float.md) **audio_track_get_key_start_offset** ( track_idx: [`int`](class_int.md), key_idx: [`int`](class_int.md) ) const[^const]<div id="class_animation_method_audio_track_get_key_start_offset"></div>

Returns the start offset of the key identified by `key_idx`. The `track_idx` must be the index of an Audio Track.

Start offset is the number of seconds cut off at the beginning of the audio stream.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_animation_method_audio_track_get_key_stream"></div>

[`Resource`](class_resource.md) **audio_track_get_key_stream** ( track_idx: [`int`](class_int.md), key_idx: [`int`](class_int.md) ) const[^const]<div id="class_animation_method_audio_track_get_key_stream"></div>

Returns the audio stream of the key identified by `key_idx`. The `track_idx` must be the index of an Audio Track.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_animation_method_audio_track_insert_key"></div>

[`int`](class_int.md) **audio_track_insert_key** ( track_idx: [`int`](class_int.md), time: [`float`](class_float.md), stream: [`Resource`](class_resource.md), start_offset: [`float`](class_float.md) = 0, end_offset: [`float`](class_float.md) = 0 )<div id="class_animation_method_audio_track_insert_key"></div>

Inserts an Audio Track key at the given `time` in seconds. The `track_idx` must be the index of an Audio Track.

 `stream` is the [`AudioStream`](class_audiostream.md) resource to play. `start_offset` is the number of seconds cut off at the beginning of the audio stream, while `end_offset` is at the ending.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_animation_method_audio_track_is_use_blend"></div>

[`bool`](class_bool.md) **audio_track_is_use_blend** ( track_idx: [`int`](class_int.md) ) const[^const]<div id="class_animation_method_audio_track_is_use_blend"></div>

Returns `true` if the track at `track_idx` will be blended with other animations.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_animation_method_audio_track_set_key_end_offset"></div>

`void` **audio_track_set_key_end_offset** ( track_idx: [`int`](class_int.md), key_idx: [`int`](class_int.md), offset: [`float`](class_float.md) )<div id="class_animation_method_audio_track_set_key_end_offset"></div>

Sets the end offset of the key identified by `key_idx` to value `offset`. The `track_idx` must be the index of an Audio Track.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_animation_method_audio_track_set_key_start_offset"></div>

`void` **audio_track_set_key_start_offset** ( track_idx: [`int`](class_int.md), key_idx: [`int`](class_int.md), offset: [`float`](class_float.md) )<div id="class_animation_method_audio_track_set_key_start_offset"></div>

Sets the start offset of the key identified by `key_idx` to value `offset`. The `track_idx` must be the index of an Audio Track.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_animation_method_audio_track_set_key_stream"></div>

`void` **audio_track_set_key_stream** ( track_idx: [`int`](class_int.md), key_idx: [`int`](class_int.md), stream: [`Resource`](class_resource.md) )<div id="class_animation_method_audio_track_set_key_stream"></div>

Sets the stream of the key identified by `key_idx` to value `stream`. The `track_idx` must be the index of an Audio Track.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_animation_method_audio_track_set_use_blend"></div>

`void` **audio_track_set_use_blend** ( track_idx: [`int`](class_int.md), enable: [`bool`](class_bool.md) )<div id="class_animation_method_audio_track_set_use_blend"></div>

Sets whether the track will be blended with other animations. If `true`, the audio playback volume changes depending on the blend value.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_animation_method_bezier_track_get_key_in_handle"></div>

[`Vector2`](class_vector2.md) **bezier_track_get_key_in_handle** ( track_idx: [`int`](class_int.md), key_idx: [`int`](class_int.md) ) const[^const]<div id="class_animation_method_bezier_track_get_key_in_handle"></div>

Returns the in handle of the key identified by `key_idx`. The `track_idx` must be the index of a Bezier Track.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_animation_method_bezier_track_get_key_out_handle"></div>

[`Vector2`](class_vector2.md) **bezier_track_get_key_out_handle** ( track_idx: [`int`](class_int.md), key_idx: [`int`](class_int.md) ) const[^const]<div id="class_animation_method_bezier_track_get_key_out_handle"></div>

Returns the out handle of the key identified by `key_idx`. The `track_idx` must be the index of a Bezier Track.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_animation_method_bezier_track_get_key_value"></div>

[`float`](class_float.md) **bezier_track_get_key_value** ( track_idx: [`int`](class_int.md), key_idx: [`int`](class_int.md) ) const[^const]<div id="class_animation_method_bezier_track_get_key_value"></div>

Returns the value of the key identified by `key_idx`. The `track_idx` must be the index of a Bezier Track.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_animation_method_bezier_track_insert_key"></div>

[`int`](class_int.md) **bezier_track_insert_key** ( track_idx: [`int`](class_int.md), time: [`float`](class_float.md), value: [`float`](class_float.md), in_handle: [`Vector2`](class_vector2.md) = Vector2(0, 0), out_handle: [`Vector2`](class_vector2.md) = Vector2(0, 0) )<div id="class_animation_method_bezier_track_insert_key"></div>

Inserts a Bezier Track key at the given `time` in seconds. The `track_idx` must be the index of a Bezier Track.

 `in_handle` is the left-side weight of the added Bezier curve point, `out_handle` is the right-side one, while `value` is the actual value at this point.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_animation_method_bezier_track_interpolate"></div>

[`float`](class_float.md) **bezier_track_interpolate** ( track_idx: [`int`](class_int.md), time: [`float`](class_float.md) ) const[^const]<div id="class_animation_method_bezier_track_interpolate"></div>

Returns the interpolated value at the given `time` (in seconds). The `track_idx` must be the index of a Bezier Track.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_animation_method_bezier_track_set_key_in_handle"></div>

`void` **bezier_track_set_key_in_handle** ( track_idx: [`int`](class_int.md), key_idx: [`int`](class_int.md), in_handle: [`Vector2`](class_vector2.md), balanced_value_time_ratio: [`float`](class_float.md) = 1.0 )<div id="class_animation_method_bezier_track_set_key_in_handle"></div>

Sets the in handle of the key identified by `key_idx` to value `in_handle`. The `track_idx` must be the index of a Bezier Track.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_animation_method_bezier_track_set_key_out_handle"></div>

`void` **bezier_track_set_key_out_handle** ( track_idx: [`int`](class_int.md), key_idx: [`int`](class_int.md), out_handle: [`Vector2`](class_vector2.md), balanced_value_time_ratio: [`float`](class_float.md) = 1.0 )<div id="class_animation_method_bezier_track_set_key_out_handle"></div>

Sets the out handle of the key identified by `key_idx` to value `out_handle`. The `track_idx` must be the index of a Bezier Track.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_animation_method_bezier_track_set_key_value"></div>

`void` **bezier_track_set_key_value** ( track_idx: [`int`](class_int.md), key_idx: [`int`](class_int.md), value: [`float`](class_float.md) )<div id="class_animation_method_bezier_track_set_key_value"></div>

Sets the value of the key identified by `key_idx` to the given value. The `track_idx` must be the index of a Bezier Track.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_animation_method_blend_shape_track_insert_key"></div>

[`int`](class_int.md) **blend_shape_track_insert_key** ( track_idx: [`int`](class_int.md), time: [`float`](class_float.md), amount: [`float`](class_float.md) )<div id="class_animation_method_blend_shape_track_insert_key"></div>

Inserts a key in a given blend shape track. Returns the key index.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_animation_method_blend_shape_track_interpolate"></div>

[`float`](class_float.md) **blend_shape_track_interpolate** ( track_idx: [`int`](class_int.md), time_sec: [`float`](class_float.md), backward: [`bool`](class_bool.md) = false ) const[^const]<div id="class_animation_method_blend_shape_track_interpolate"></div>

Returns the interpolated blend shape value at the given time (in seconds). The `track_idx` must be the index of a blend shape track.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_animation_method_clear"></div>

`void` **clear** ( )<div id="class_animation_method_clear"></div>

Clear the animation (clear all tracks and reset all).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_animation_method_compress"></div>

`void` **compress** ( page_size: [`int`](class_int.md) = 8192, fps: [`int`](class_int.md) = 120, split_tolerance: [`float`](class_float.md) = 4.0 )<div id="class_animation_method_compress"></div>

Compress the animation and all its tracks in-place. This will make [`track_is_compressed`](class_animation.md#class_animation_method_track_is_compressed) return `true` once called on this **Animation**. Compressed tracks require less memory to be played, and are designed to be used for complex 3D animations (such as cutscenes) imported from external 3D software. Compression is lossy, but the difference is usually not noticeable in real world conditions.

 **Note:** Compressed tracks have various limitations (such as not being editable from the editor), so only use compressed animations if you actually need them.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_animation_method_copy_track"></div>

`void` **copy_track** ( track_idx: [`int`](class_int.md), to_animation: [`Animation`](class_animation.md) )<div id="class_animation_method_copy_track"></div>

Adds a new track to `to_animation` that is a copy of the given track from this animation.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_animation_method_find_track"></div>

[`int`](class_int.md) **find_track** ( path: [`NodePath`](class_nodepath.md), type: [TrackType](#enum_animation_tracktype) ) const[^const]<div id="class_animation_method_find_track"></div>

Returns the index of the specified track. If the track is not found, return -1.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_animation_method_get_marker_at_time"></div>

[`StringName`](class_stringname.md) **get_marker_at_time** ( time: [`float`](class_float.md) ) const[^const]<div id="class_animation_method_get_marker_at_time"></div>

Returns the name of the marker located at the given time.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_animation_method_get_marker_color"></div>

[`Color`](class_color.md) **get_marker_color** ( name: [`StringName`](class_stringname.md) ) const[^const]<div id="class_animation_method_get_marker_color"></div>

Returns the given marker's color.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_animation_method_get_marker_names"></div>

[`PackedStringArray`](class_packedstringarray.md) **get_marker_names** ( ) const[^const]<div id="class_animation_method_get_marker_names"></div>

Returns every marker in this Animation, sorted ascending by time.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_animation_method_get_marker_time"></div>

[`float`](class_float.md) **get_marker_time** ( name: [`StringName`](class_stringname.md) ) const[^const]<div id="class_animation_method_get_marker_time"></div>

Returns the given marker's time.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_animation_method_get_next_marker"></div>

[`StringName`](class_stringname.md) **get_next_marker** ( time: [`float`](class_float.md) ) const[^const]<div id="class_animation_method_get_next_marker"></div>

Returns the closest marker that comes after the given time. If no such marker exists, an empty string is returned.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_animation_method_get_prev_marker"></div>

[`StringName`](class_stringname.md) **get_prev_marker** ( time: [`float`](class_float.md) ) const[^const]<div id="class_animation_method_get_prev_marker"></div>

Returns the closest marker that comes before the given time. If no such marker exists, an empty string is returned.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_animation_method_get_track_count"></div>

[`int`](class_int.md) **get_track_count** ( ) const[^const]<div id="class_animation_method_get_track_count"></div>

Returns the amount of tracks in the animation.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_animation_method_has_marker"></div>

[`bool`](class_bool.md) **has_marker** ( name: [`StringName`](class_stringname.md) ) const[^const]<div id="class_animation_method_has_marker"></div>

Returns `true` if this Animation contains a marker with the given name.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_animation_method_method_track_get_name"></div>

[`StringName`](class_stringname.md) **method_track_get_name** ( track_idx: [`int`](class_int.md), key_idx: [`int`](class_int.md) ) const[^const]<div id="class_animation_method_method_track_get_name"></div>

Returns the method name of a method track.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_animation_method_method_track_get_params"></div>

[`Array`](class_array.md) **method_track_get_params** ( track_idx: [`int`](class_int.md), key_idx: [`int`](class_int.md) ) const[^const]<div id="class_animation_method_method_track_get_params"></div>

Returns the arguments values to be called on a method track for a given key in a given track.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_animation_method_optimize"></div>

`void` **optimize** ( allowed_velocity_err: [`float`](class_float.md) = 0.01, allowed_angular_err: [`float`](class_float.md) = 0.01, precision: [`int`](class_int.md) = 3 )<div id="class_animation_method_optimize"></div>

Optimize the animation and all its tracks in-place. This will preserve only as many keys as are necessary to keep the animation within the specified bounds.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_animation_method_position_track_insert_key"></div>

[`int`](class_int.md) **position_track_insert_key** ( track_idx: [`int`](class_int.md), time: [`float`](class_float.md), position: [`Vector3`](class_vector3.md) )<div id="class_animation_method_position_track_insert_key"></div>

Inserts a key in a given 3D position track. Returns the key index.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_animation_method_position_track_interpolate"></div>

[`Vector3`](class_vector3.md) **position_track_interpolate** ( track_idx: [`int`](class_int.md), time_sec: [`float`](class_float.md), backward: [`bool`](class_bool.md) = false ) const[^const]<div id="class_animation_method_position_track_interpolate"></div>

Returns the interpolated position value at the given time (in seconds). The `track_idx` must be the index of a 3D position track.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_animation_method_remove_marker"></div>

`void` **remove_marker** ( name: [`StringName`](class_stringname.md) )<div id="class_animation_method_remove_marker"></div>

Removes the marker with the given name from this Animation.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_animation_method_remove_track"></div>

`void` **remove_track** ( track_idx: [`int`](class_int.md) )<div id="class_animation_method_remove_track"></div>

Removes a track by specifying the track index.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_animation_method_rotation_track_insert_key"></div>

[`int`](class_int.md) **rotation_track_insert_key** ( track_idx: [`int`](class_int.md), time: [`float`](class_float.md), rotation: [`Quaternion`](class_quaternion.md) )<div id="class_animation_method_rotation_track_insert_key"></div>

Inserts a key in a given 3D rotation track. Returns the key index.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_animation_method_rotation_track_interpolate"></div>

[`Quaternion`](class_quaternion.md) **rotation_track_interpolate** ( track_idx: [`int`](class_int.md), time_sec: [`float`](class_float.md), backward: [`bool`](class_bool.md) = false ) const[^const]<div id="class_animation_method_rotation_track_interpolate"></div>

Returns the interpolated rotation value at the given time (in seconds). The `track_idx` must be the index of a 3D rotation track.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_animation_method_scale_track_insert_key"></div>

[`int`](class_int.md) **scale_track_insert_key** ( track_idx: [`int`](class_int.md), time: [`float`](class_float.md), scale: [`Vector3`](class_vector3.md) )<div id="class_animation_method_scale_track_insert_key"></div>

Inserts a key in a given 3D scale track. Returns the key index.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_animation_method_scale_track_interpolate"></div>

[`Vector3`](class_vector3.md) **scale_track_interpolate** ( track_idx: [`int`](class_int.md), time_sec: [`float`](class_float.md), backward: [`bool`](class_bool.md) = false ) const[^const]<div id="class_animation_method_scale_track_interpolate"></div>

Returns the interpolated scale value at the given time (in seconds). The `track_idx` must be the index of a 3D scale track.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_animation_method_set_marker_color"></div>

`void` **set_marker_color** ( name: [`StringName`](class_stringname.md), color: [`Color`](class_color.md) )<div id="class_animation_method_set_marker_color"></div>

Sets the given marker's color.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_animation_method_track_find_key"></div>

[`int`](class_int.md) **track_find_key** ( track_idx: [`int`](class_int.md), time: [`float`](class_float.md), find_mode: [FindMode](#enum_animation_findmode) = 0, limit: [`bool`](class_bool.md) = false, backward: [`bool`](class_bool.md) = false ) const[^const]<div id="class_animation_method_track_find_key"></div>

Finds the key index by time in a given track. Optionally, only find it if the approx/exact time is given.

If `limit` is `true`, it does not return keys outside the animation range.

If `backward` is `true`, the direction is reversed in methods that rely on one directional processing.

For example, in case `find_mode` is [`FIND_MODE_NEAREST`](class_animation.md#class_animation_constant_find_mode_nearest), if there is no key in the current position just after seeked, the first key found is retrieved by searching before the position, but if `backward` is `true`, the first key found is retrieved after the position.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_animation_method_track_get_interpolation_loop_wrap"></div>

[`bool`](class_bool.md) **track_get_interpolation_loop_wrap** ( track_idx: [`int`](class_int.md) ) const[^const]<div id="class_animation_method_track_get_interpolation_loop_wrap"></div>

Returns `true` if the track at `track_idx` wraps the interpolation loop. New tracks wrap the interpolation loop by default.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_animation_method_track_get_interpolation_type"></div>

[InterpolationType](#enum_animation_interpolationtype) **track_get_interpolation_type** ( track_idx: [`int`](class_int.md) ) const[^const]<div id="class_animation_method_track_get_interpolation_type"></div>

Returns the interpolation type of a given track.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_animation_method_track_get_key_count"></div>

[`int`](class_int.md) **track_get_key_count** ( track_idx: [`int`](class_int.md) ) const[^const]<div id="class_animation_method_track_get_key_count"></div>

Returns the number of keys in a given track.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_animation_method_track_get_key_time"></div>

[`float`](class_float.md) **track_get_key_time** ( track_idx: [`int`](class_int.md), key_idx: [`int`](class_int.md) ) const[^const]<div id="class_animation_method_track_get_key_time"></div>

Returns the time at which the key is located.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_animation_method_track_get_key_transition"></div>

[`float`](class_float.md) **track_get_key_transition** ( track_idx: [`int`](class_int.md), key_idx: [`int`](class_int.md) ) const[^const]<div id="class_animation_method_track_get_key_transition"></div>

Returns the transition curve (easing) for a specific key (see the built-in math function [`@GlobalScope.ease`](class_@globalscope.md#class_@globalscope_method_ease)).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_animation_method_track_get_key_value"></div>

[`Variant`](class_variant.md) **track_get_key_value** ( track_idx: [`int`](class_int.md), key_idx: [`int`](class_int.md) ) const[^const]<div id="class_animation_method_track_get_key_value"></div>

Returns the value of a given key in a given track.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_animation_method_track_get_path"></div>

[`NodePath`](class_nodepath.md) **track_get_path** ( track_idx: [`int`](class_int.md) ) const[^const]<div id="class_animation_method_track_get_path"></div>

Gets the path of a track. For more information on the path format, see [`track_set_path`](class_animation.md#class_animation_method_track_set_path).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_animation_method_track_get_type"></div>

[TrackType](#enum_animation_tracktype) **track_get_type** ( track_idx: [`int`](class_int.md) ) const[^const]<div id="class_animation_method_track_get_type"></div>

Gets the type of a track.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_animation_method_track_insert_key"></div>

[`int`](class_int.md) **track_insert_key** ( track_idx: [`int`](class_int.md), time: [`float`](class_float.md), key: [`Variant`](class_variant.md), transition: [`float`](class_float.md) = 1 )<div id="class_animation_method_track_insert_key"></div>

Inserts a generic key in a given track. Returns the key index.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_animation_method_track_is_compressed"></div>

[`bool`](class_bool.md) **track_is_compressed** ( track_idx: [`int`](class_int.md) ) const[^const]<div id="class_animation_method_track_is_compressed"></div>

Returns `true` if the track is compressed, `false` otherwise. See also [`compress`](class_animation.md#class_animation_method_compress).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_animation_method_track_is_enabled"></div>

[`bool`](class_bool.md) **track_is_enabled** ( track_idx: [`int`](class_int.md) ) const[^const]<div id="class_animation_method_track_is_enabled"></div>

Returns `true` if the track at index `track_idx` is enabled.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_animation_method_track_is_imported"></div>

[`bool`](class_bool.md) **track_is_imported** ( track_idx: [`int`](class_int.md) ) const[^const]<div id="class_animation_method_track_is_imported"></div>

Returns `true` if the given track is imported. Else, return `false`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_animation_method_track_move_down"></div>

`void` **track_move_down** ( track_idx: [`int`](class_int.md) )<div id="class_animation_method_track_move_down"></div>

Moves a track down.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_animation_method_track_move_to"></div>

`void` **track_move_to** ( track_idx: [`int`](class_int.md), to_idx: [`int`](class_int.md) )<div id="class_animation_method_track_move_to"></div>

Changes the index position of track `track_idx` to the one defined in `to_idx`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_animation_method_track_move_up"></div>

`void` **track_move_up** ( track_idx: [`int`](class_int.md) )<div id="class_animation_method_track_move_up"></div>

Moves a track up.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_animation_method_track_remove_key"></div>

`void` **track_remove_key** ( track_idx: [`int`](class_int.md), key_idx: [`int`](class_int.md) )<div id="class_animation_method_track_remove_key"></div>

Removes a key by index in a given track.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_animation_method_track_remove_key_at_time"></div>

`void` **track_remove_key_at_time** ( track_idx: [`int`](class_int.md), time: [`float`](class_float.md) )<div id="class_animation_method_track_remove_key_at_time"></div>

Removes a key at `time` in a given track.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_animation_method_track_set_enabled"></div>

`void` **track_set_enabled** ( track_idx: [`int`](class_int.md), enabled: [`bool`](class_bool.md) )<div id="class_animation_method_track_set_enabled"></div>

Enables/disables the given track. Tracks are enabled by default.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_animation_method_track_set_imported"></div>

`void` **track_set_imported** ( track_idx: [`int`](class_int.md), imported: [`bool`](class_bool.md) )<div id="class_animation_method_track_set_imported"></div>

Sets the given track as imported or not.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_animation_method_track_set_interpolation_loop_wrap"></div>

`void` **track_set_interpolation_loop_wrap** ( track_idx: [`int`](class_int.md), interpolation: [`bool`](class_bool.md) )<div id="class_animation_method_track_set_interpolation_loop_wrap"></div>

If `true`, the track at `track_idx` wraps the interpolation loop.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_animation_method_track_set_interpolation_type"></div>

`void` **track_set_interpolation_type** ( track_idx: [`int`](class_int.md), interpolation: [InterpolationType](#enum_animation_interpolationtype) )<div id="class_animation_method_track_set_interpolation_type"></div>

Sets the interpolation type of a given track.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_animation_method_track_set_key_time"></div>

`void` **track_set_key_time** ( track_idx: [`int`](class_int.md), key_idx: [`int`](class_int.md), time: [`float`](class_float.md) )<div id="class_animation_method_track_set_key_time"></div>

Sets the time of an existing key.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_animation_method_track_set_key_transition"></div>

`void` **track_set_key_transition** ( track_idx: [`int`](class_int.md), key_idx: [`int`](class_int.md), transition: [`float`](class_float.md) )<div id="class_animation_method_track_set_key_transition"></div>

Sets the transition curve (easing) for a specific key (see the built-in math function [`@GlobalScope.ease`](class_@globalscope.md#class_@globalscope_method_ease)).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_animation_method_track_set_key_value"></div>

`void` **track_set_key_value** ( track_idx: [`int`](class_int.md), key: [`int`](class_int.md), value: [`Variant`](class_variant.md) )<div id="class_animation_method_track_set_key_value"></div>

Sets the value of an existing key.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_animation_method_track_set_path"></div>

`void` **track_set_path** ( track_idx: [`int`](class_int.md), path: [`NodePath`](class_nodepath.md) )<div id="class_animation_method_track_set_path"></div>

Sets the path of a track. Paths must be valid scene-tree paths to a node and must be specified starting from the [`AnimationMixer.root_node`](class_animationmixer.md#class_animationmixer_property_root_node) that will reproduce the animation. Tracks that control properties or bones must append their name after the path, separated by `":"`.

For example, `"character/skeleton:ankle"` or `"character/mesh:transform/local"`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_animation_method_track_swap"></div>

`void` **track_swap** ( track_idx: [`int`](class_int.md), with_idx: [`int`](class_int.md) )<div id="class_animation_method_track_swap"></div>

Swaps the track `track_idx`'s index position with the track `with_idx`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_animation_method_value_track_get_update_mode"></div>

[UpdateMode](#enum_animation_updatemode) **value_track_get_update_mode** ( track_idx: [`int`](class_int.md) ) const[^const]<div id="class_animation_method_value_track_get_update_mode"></div>

Returns the update mode of a value track.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_animation_method_value_track_interpolate"></div>

[`Variant`](class_variant.md) **value_track_interpolate** ( track_idx: [`int`](class_int.md), time_sec: [`float`](class_float.md), backward: [`bool`](class_bool.md) = false ) const[^const]<div id="class_animation_method_value_track_interpolate"></div>

Returns the interpolated value at the given time (in seconds). The `track_idx` must be the index of a value track.

A `backward` mainly affects the direction of key retrieval of the track with [`UPDATE_DISCRETE`](class_animation.md#class_animation_constant_update_discrete) converted by [`AnimationMixer.ANIMATION_CALLBACK_MODE_DISCRETE_FORCE_CONTINUOUS`](class_animationmixer.md#class_animationmixer_constant_animation_callback_mode_discrete_force_continuous) to match the result with [`track_find_key`](class_animation.md#class_animation_method_track_find_key).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_animation_method_value_track_set_update_mode"></div>

`void` **value_track_set_update_mode** ( track_idx: [`int`](class_int.md), mode: [UpdateMode](#enum_animation_updatemode) )<div id="class_animation_method_value_track_set_update_mode"></div>

Sets the update mode (see [UpdateMode](#enum_animation_updatemode)) of a value track.

[^virtual]: 本方法通常需要用户覆盖才能生效。
[^const]: 本方法无副作用，不会修改该实例的任何成员变量。
[^vararg]: 本方法除了能接受在此处描述的参数外，还能够继续接受任意数量的参数。
[^constructor]: 本方法用于构造某个类型。
[^static]: 调用本方法无需实例，可直接使用类名进行调用。
[^operator]: 本方法描述的是使用本类型作为左操作数的有效运算符。
[^bitfield]: 这个值是由下列位标志构成位掩码的整数。
[^void]: 无返回值。
