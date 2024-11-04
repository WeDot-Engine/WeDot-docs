<!-- ⚠ 请勿编辑本文件 ⚠ -->
<!-- 本文档使用脚本从 WeDot 引擎源码仓库生成。 -->
<!-- 生成脚本：https://github.com/WeDot-Engine/WeDot/tree/4.3/doc/tools/make_md.py； -->
<!-- 原文件：https://github.com/WeDot-Engine/WeDot/tree/4.3/doc/classes/AnimatedSprite3D.xml。 -->

<div id="_class_animatedsprite3d"></div>

# AnimatedSprite3D

**继承：** [`SpriteBase3D`](class_spritebase3d.md) **<** [`GeometryInstance3D`](class_geometryinstance3d.md) **<** [`VisualInstance3D`](class_visualinstance3d.md) **<** [`Node3D`](class_node3d.md) **<** [`Node`](class_node.md) **<** [`Object`](class_object.md)

2D sprite node in 3D world, that can use multiple 2D textures for animation.

## 描述

**AnimatedSprite3D** is similar to the [`Sprite3D`](class_sprite3d.md) node, except it carries multiple textures as animation [`sprite_frames`](#class_animatedsprite3d_property_sprite_frames). Animations are created using a [`SpriteFrames`](class_spriteframes.md) resource, which allows you to import image files (or a folder containing said files) to provide the animation frames for the sprite. The [`SpriteFrames`](class_spriteframes.md) resource can be configured in the editor via the SpriteFrames bottom panel.

## 属性

| [`StringName`](class_stringname.md)     | [`animation`](#class_animatedsprite3d_property_animation)           | ``&"default"`` |
| [`String`](class_string.md)             | [`autoplay`](#class_animatedsprite3d_property_autoplay)             | ``""``         |
| [`int`](class_int.md)                   | [`frame`](#class_animatedsprite3d_property_frame)                   | ``0``          |
| [`float`](class_float.md)               | [`frame_progress`](#class_animatedsprite3d_property_frame_progress) | ``0.0``        |
| [`float`](class_float.md)               | [`speed_scale`](#class_animatedsprite3d_property_speed_scale)       | ``1.0``        |
| [`SpriteFrames`](class_spriteframes.md) | [`sprite_frames`](#class_animatedsprite3d_property_sprite_frames)   |                |

## 方法

| [`float`](class_float.md) | [`get_playing_speed`](#class_animatedsprite3d_method_get_playing_speed) ( ) const[^const]                                                                                                   |
| [`bool`](class_bool.md)   | [`is_playing`](#class_animatedsprite3d_method_is_playing) ( ) const[^const]                                                                                                                 |
| `void`                    | [`pause`](#class_animatedsprite3d_method_pause) ( )                                                                                                                                         |
| `void`                    | [`play`](#class_animatedsprite3d_method_play) ( name: [`StringName`](class_stringname.md) = &"", custom_speed: [`float`](class_float.md) = 1.0, from_end: [`bool`](class_bool.md) = false ) |
| `void`                    | [`play_backwards`](#class_animatedsprite3d_method_play_backwards) ( name: [`StringName`](class_stringname.md) = &"" )                                                                       |
| `void`                    | [`set_frame_and_progress`](#class_animatedsprite3d_method_set_frame_and_progress) ( frame: [`int`](class_int.md), progress: [`float`](class_float.md) )                                     |
| `void`                    | [`stop`](#class_animatedsprite3d_method_stop) ( )                                                                                                                                           |

<!-- rst-class:: classref-section-separator -->

---

## 信号

<div id="_class_class_animatedsprite3d_signal_animation_changed"></div>

**animation_changed** ( ) <div id="class_animatedsprite3d_signal_animation_changed"></div>

Emitted when [`animation`](#class_animatedsprite3d_property_animation) changes.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_class_animatedsprite3d_signal_animation_finished"></div>

**animation_finished** ( ) <div id="class_animatedsprite3d_signal_animation_finished"></div>

Emitted when the animation reaches the end, or the start if it is played in reverse. When the animation finishes, it pauses the playback.

 **Note:** This signal is not emitted if an animation is looping.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_class_animatedsprite3d_signal_animation_looped"></div>

**animation_looped** ( ) <div id="class_animatedsprite3d_signal_animation_looped"></div>

Emitted when the animation loops.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_class_animatedsprite3d_signal_frame_changed"></div>

**frame_changed** ( ) <div id="class_animatedsprite3d_signal_frame_changed"></div>

Emitted when [`frame`](#class_animatedsprite3d_property_frame) changes.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_class_animatedsprite3d_signal_sprite_frames_changed"></div>

**sprite_frames_changed** ( ) <div id="class_animatedsprite3d_signal_sprite_frames_changed"></div>

Emitted when [`sprite_frames`](#class_animatedsprite3d_property_sprite_frames) changes.

<!-- rst-class:: classref-section-separator -->

---

## 属性说明

<div id="_class_animatedsprite3d_property_animation"></div>

[`StringName`](class_stringname.md) **animation** = ``&"default"`` <div id="class_animatedsprite3d_property_animation"></div>

- `void` **set_animation** ( value: [`StringName`](class_stringname.md) )
- [`StringName`](class_stringname.md) **get_animation** ( )

The current animation from the [`sprite_frames`](#class_animatedsprite3d_property_sprite_frames) resource. If this value is changed, the [`frame`](#class_animatedsprite3d_property_frame) counter and the [`frame_progress`](#class_animatedsprite3d_property_frame_progress) are reset.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_animatedsprite3d_property_autoplay"></div>

[`String`](class_string.md) **autoplay** = ``""`` <div id="class_animatedsprite3d_property_autoplay"></div>

- `void` **set_autoplay** ( value: [`String`](class_string.md) )
- [`String`](class_string.md) **get_autoplay** ( )

The key of the animation to play when the scene loads.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_animatedsprite3d_property_frame"></div>

[`int`](class_int.md) **frame** = ``0`` <div id="class_animatedsprite3d_property_frame"></div>

- `void` **set_frame** ( value: [`int`](class_int.md) )
- [`int`](class_int.md) **get_frame** ( )

The displayed animation frame's index. Setting this property also resets [`frame_progress`](#class_animatedsprite3d_property_frame_progress). If this is not desired, use [`set_frame_and_progress`](#class_animatedsprite3d_method_set_frame_and_progress).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_animatedsprite3d_property_frame_progress"></div>

[`float`](class_float.md) **frame_progress** = ``0.0`` <div id="class_animatedsprite3d_property_frame_progress"></div>

- `void` **set_frame_progress** ( value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_frame_progress** ( )

The progress value between `0.0` and `1.0` until the current frame transitions to the next frame. If the animation is playing backwards, the value transitions from `1.0` to `0.0`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_animatedsprite3d_property_speed_scale"></div>

[`float`](class_float.md) **speed_scale** = ``1.0`` <div id="class_animatedsprite3d_property_speed_scale"></div>

- `void` **set_speed_scale** ( value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_speed_scale** ( )

The speed scaling ratio. For example, if this value is `1`, then the animation plays at normal speed. If it's `0.5`, then it plays at half speed. If it's `2`, then it plays at double speed.

If set to a negative value, the animation is played in reverse. If set to `0`, the animation will not advance.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_animatedsprite3d_property_sprite_frames"></div>

[`SpriteFrames`](class_spriteframes.md) **sprite_frames** <div id="class_animatedsprite3d_property_sprite_frames"></div>

- `void` **set_sprite_frames** ( value: [`SpriteFrames`](class_spriteframes.md) )
- [`SpriteFrames`](class_spriteframes.md) **get_sprite_frames** ( )

The [`SpriteFrames`](class_spriteframes.md) resource containing the animation(s). Allows you the option to load, edit, clear, make unique and save the states of the [`SpriteFrames`](class_spriteframes.md) resource.

<!-- rst-class:: classref-section-separator -->

---

## 方法说明

<div id="_class_animatedsprite3d_method_get_playing_speed"></div>

[`float`](class_float.md) **get_playing_speed** ( ) const[^const]<div id="class_animatedsprite3d_method_get_playing_speed"></div>

Returns the actual playing speed of current animation or `0` if not playing. This speed is the [`speed_scale`](#class_animatedsprite3d_property_speed_scale) property multiplied by `custom_speed` argument specified when calling the [`play`](#class_animatedsprite3d_method_play) method.

Returns a negative value if the current animation is playing backwards.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_animatedsprite3d_method_is_playing"></div>

[`bool`](class_bool.md) **is_playing** ( ) const[^const]<div id="class_animatedsprite3d_method_is_playing"></div>

Returns `true` if an animation is currently playing (even if [`speed_scale`](#class_animatedsprite3d_property_speed_scale) and/or `custom_speed` are `0`).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_animatedsprite3d_method_pause"></div>

`void` **pause** ( )<div id="class_animatedsprite3d_method_pause"></div>

Pauses the currently playing animation. The [`frame`](#class_animatedsprite3d_property_frame) and [`frame_progress`](#class_animatedsprite3d_property_frame_progress) will be kept and calling [`play`](#class_animatedsprite3d_method_play) or [`play_backwards`](#class_animatedsprite3d_method_play_backwards) without arguments will resume the animation from the current playback position.

See also [`stop`](#class_animatedsprite3d_method_stop).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_animatedsprite3d_method_play"></div>

`void` **play** ( name: [`StringName`](class_stringname.md) = &"", custom_speed: [`float`](class_float.md) = 1.0, from_end: [`bool`](class_bool.md) = false )<div id="class_animatedsprite3d_method_play"></div>

Plays the animation with key `name`. If `custom_speed` is negative and `from_end` is `true`, the animation will play backwards (which is equivalent to calling [`play_backwards`](#class_animatedsprite3d_method_play_backwards)).

If this method is called with that same animation `name`, or with no `name` parameter, the assigned animation will resume playing if it was paused.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_animatedsprite3d_method_play_backwards"></div>

`void` **play_backwards** ( name: [`StringName`](class_stringname.md) = &"" )<div id="class_animatedsprite3d_method_play_backwards"></div>

Plays the animation with key `name` in reverse.

This method is a shorthand for [`play`](#class_animatedsprite3d_method_play) with `custom_speed = -1.0` and `from_end = true`, so see its description for more information.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_animatedsprite3d_method_set_frame_and_progress"></div>

`void` **set_frame_and_progress** ( frame: [`int`](class_int.md), progress: [`float`](class_float.md) )<div id="class_animatedsprite3d_method_set_frame_and_progress"></div>

The setter of [`frame`](#class_animatedsprite3d_property_frame) resets the [`frame_progress`](#class_animatedsprite3d_property_frame_progress) to `0.0` implicitly, but this method avoids that.

This is useful when you want to carry over the current [`frame_progress`](#class_animatedsprite3d_property_frame_progress) to another [`frame`](#class_animatedsprite3d_property_frame).

 **Example:** 



```gdscript

    # Change the animation with keeping the frame index and progress.
    var current_frame = animated_sprite.get_frame()
    var current_progress = animated_sprite.get_frame_progress()
    animated_sprite.play("walk_another_skin")
    animated_sprite.set_frame_and_progress(current_frame, current_progress)
```





<!-- rst-class:: classref-item-separator -->

---

<div id="_class_animatedsprite3d_method_stop"></div>

`void` **stop** ( )<div id="class_animatedsprite3d_method_stop"></div>

Stops the currently playing animation. The animation position is reset to `0` and the `custom_speed` is reset to `1.0`. See also [`pause`](#class_animatedsprite3d_method_pause).

[^virtual]: 本方法通常需要用户覆盖才能生效。
[^const]: 本方法无副作用，不会修改该实例的任何成员变量。
[^vararg]: 本方法除了能接受在此处描述的参数外，还能够继续接受任意数量的参数。
[^constructor]: 本方法用于构造某个类型。
[^static]: 调用本方法无需实例，可直接使用类名进行调用。
[^operator]: 本方法描述的是使用本类型作为左操作数的有效运算符。
[^bitfield]: 这个值是由下列位标志构成位掩码的整数。
[^void]: 无返回值。
