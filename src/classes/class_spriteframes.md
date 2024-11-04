<!-- ⚠ 请勿编辑本文件 ⚠ -->
<!-- 本文档使用脚本从 WeDot 引擎源码仓库生成。 -->
<!-- 生成脚本：https://github.com/WeDot-Engine/WeDot/tree/4.3/doc/tools/make_md.py； -->
<!-- 原文件：https://github.com/WeDot-Engine/WeDot/tree/4.3/doc/classes/SpriteFrames.xml。 -->

<div id="_class_spriteframes"></div>

# SpriteFrames

**继承：** [`Resource`](class_resource.md) **<** [`RefCounted`](class_refcounted.md) **<** [`Object`](class_object.md)

Sprite frame library for AnimatedSprite2D and AnimatedSprite3D.

## 描述

Sprite frame library for an [`AnimatedSprite2D`](class_animatedsprite2d.md) or [`AnimatedSprite3D`](class_animatedsprite3d.md) node. Contains frames and animation data for playback.

## 方法

| `void`                                            | [`add_animation`](#class_spriteframes_method_add_animation) ( anim: [`StringName`](class_stringname.md) )                                                                                                                         |
| `void`                                            | [`add_frame`](#class_spriteframes_method_add_frame) ( anim: [`StringName`](class_stringname.md), texture: [`Texture2D`](class_texture2d.md), duration: [`float`](class_float.md) = 1.0, at_position: [`int`](class_int.md) = -1 ) |
| `void`                                            | [`clear`](#class_spriteframes_method_clear) ( anim: [`StringName`](class_stringname.md) )                                                                                                                                         |
| `void`                                            | [`clear_all`](#class_spriteframes_method_clear_all) ( )                                                                                                                                                                           |
| [`bool`](class_bool.md)                           | [`get_animation_loop`](#class_spriteframes_method_get_animation_loop) ( anim: [`StringName`](class_stringname.md) ) const[^const]                                                                                                 |
| [`PackedStringArray`](class_packedstringarray.md) | [`get_animation_names`](#class_spriteframes_method_get_animation_names) ( ) const[^const]                                                                                                                                         |
| [`float`](class_float.md)                         | [`get_animation_speed`](#class_spriteframes_method_get_animation_speed) ( anim: [`StringName`](class_stringname.md) ) const[^const]                                                                                               |
| [`int`](class_int.md)                             | [`get_frame_count`](#class_spriteframes_method_get_frame_count) ( anim: [`StringName`](class_stringname.md) ) const[^const]                                                                                                       |
| [`float`](class_float.md)                         | [`get_frame_duration`](#class_spriteframes_method_get_frame_duration) ( anim: [`StringName`](class_stringname.md), idx: [`int`](class_int.md) ) const[^const]                                                                     |
| [`Texture2D`](class_texture2d.md)                 | [`get_frame_texture`](#class_spriteframes_method_get_frame_texture) ( anim: [`StringName`](class_stringname.md), idx: [`int`](class_int.md) ) const[^const]                                                                       |
| [`bool`](class_bool.md)                           | [`has_animation`](#class_spriteframes_method_has_animation) ( anim: [`StringName`](class_stringname.md) ) const[^const]                                                                                                           |
| `void`                                            | [`remove_animation`](#class_spriteframes_method_remove_animation) ( anim: [`StringName`](class_stringname.md) )                                                                                                                   |
| `void`                                            | [`remove_frame`](#class_spriteframes_method_remove_frame) ( anim: [`StringName`](class_stringname.md), idx: [`int`](class_int.md) )                                                                                               |
| `void`                                            | [`rename_animation`](#class_spriteframes_method_rename_animation) ( anim: [`StringName`](class_stringname.md), newname: [`StringName`](class_stringname.md) )                                                                     |
| `void`                                            | [`set_animation_loop`](#class_spriteframes_method_set_animation_loop) ( anim: [`StringName`](class_stringname.md), loop: [`bool`](class_bool.md) )                                                                                |
| `void`                                            | [`set_animation_speed`](#class_spriteframes_method_set_animation_speed) ( anim: [`StringName`](class_stringname.md), fps: [`float`](class_float.md) )                                                                             |
| `void`                                            | [`set_frame`](#class_spriteframes_method_set_frame) ( anim: [`StringName`](class_stringname.md), idx: [`int`](class_int.md), texture: [`Texture2D`](class_texture2d.md), duration: [`float`](class_float.md) = 1.0 )              |

<!-- rst-class:: classref-section-separator -->

---

## 方法说明

<div id="_class_spriteframes_method_add_animation"></div>

`void` **add_animation** ( anim: [`StringName`](class_stringname.md) )<div id="class_spriteframes_method_add_animation"></div>

Adds a new `anim` animation to the library.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_spriteframes_method_add_frame"></div>

`void` **add_frame** ( anim: [`StringName`](class_stringname.md), texture: [`Texture2D`](class_texture2d.md), duration: [`float`](class_float.md) = 1.0, at_position: [`int`](class_int.md) = -1 )<div id="class_spriteframes_method_add_frame"></div>

Adds a frame to the `anim` animation. If `at_position` is `-1`, the frame will be added to the end of the animation. `duration` specifies the relative duration, see [`get_frame_duration`](#class_spriteframes_method_get_frame_duration) for details.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_spriteframes_method_clear"></div>

`void` **clear** ( anim: [`StringName`](class_stringname.md) )<div id="class_spriteframes_method_clear"></div>

Removes all frames from the `anim` animation.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_spriteframes_method_clear_all"></div>

`void` **clear_all** ( )<div id="class_spriteframes_method_clear_all"></div>

Removes all animations. An empty `default` animation will be created.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_spriteframes_method_get_animation_loop"></div>

[`bool`](class_bool.md) **get_animation_loop** ( anim: [`StringName`](class_stringname.md) ) const[^const]<div id="class_spriteframes_method_get_animation_loop"></div>

Returns `true` if the given animation is configured to loop when it finishes playing. Otherwise, returns `false`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_spriteframes_method_get_animation_names"></div>

[`PackedStringArray`](class_packedstringarray.md) **get_animation_names** ( ) const[^const]<div id="class_spriteframes_method_get_animation_names"></div>

Returns an array containing the names associated to each animation. Values are placed in alphabetical order.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_spriteframes_method_get_animation_speed"></div>

[`float`](class_float.md) **get_animation_speed** ( anim: [`StringName`](class_stringname.md) ) const[^const]<div id="class_spriteframes_method_get_animation_speed"></div>

Returns the speed in frames per second for the `anim` animation.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_spriteframes_method_get_frame_count"></div>

[`int`](class_int.md) **get_frame_count** ( anim: [`StringName`](class_stringname.md) ) const[^const]<div id="class_spriteframes_method_get_frame_count"></div>

Returns the number of frames for the `anim` animation.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_spriteframes_method_get_frame_duration"></div>

[`float`](class_float.md) **get_frame_duration** ( anim: [`StringName`](class_stringname.md), idx: [`int`](class_int.md) ) const[^const]<div id="class_spriteframes_method_get_frame_duration"></div>

Returns a relative duration of the frame `idx` in the `anim` animation (defaults to `1.0`). For example, a frame with a duration of `2.0` is displayed twice as long as a frame with a duration of `1.0`. You can calculate the absolute duration (in seconds) of a frame using the following formula:

```

    absolute_duration = relative_duration / (animation_fps * abs(playing_speed))
```

In this example, `playing_speed` refers to either [`AnimatedSprite2D.get_playing_speed`](#class_animatedsprite2d_method_get_playing_speed) or [`AnimatedSprite3D.get_playing_speed`](#class_animatedsprite3d_method_get_playing_speed).



<!-- rst-class:: classref-item-separator -->

---

<div id="_class_spriteframes_method_get_frame_texture"></div>

[`Texture2D`](class_texture2d.md) **get_frame_texture** ( anim: [`StringName`](class_stringname.md), idx: [`int`](class_int.md) ) const[^const]<div id="class_spriteframes_method_get_frame_texture"></div>

Returns the texture of the frame `idx` in the `anim` animation.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_spriteframes_method_has_animation"></div>

[`bool`](class_bool.md) **has_animation** ( anim: [`StringName`](class_stringname.md) ) const[^const]<div id="class_spriteframes_method_has_animation"></div>

Returns `true` if the `anim` animation exists.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_spriteframes_method_remove_animation"></div>

`void` **remove_animation** ( anim: [`StringName`](class_stringname.md) )<div id="class_spriteframes_method_remove_animation"></div>

Removes the `anim` animation.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_spriteframes_method_remove_frame"></div>

`void` **remove_frame** ( anim: [`StringName`](class_stringname.md), idx: [`int`](class_int.md) )<div id="class_spriteframes_method_remove_frame"></div>

Removes the `anim` animation's frame `idx`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_spriteframes_method_rename_animation"></div>

`void` **rename_animation** ( anim: [`StringName`](class_stringname.md), newname: [`StringName`](class_stringname.md) )<div id="class_spriteframes_method_rename_animation"></div>

Changes the `anim` animation's name to `newname`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_spriteframes_method_set_animation_loop"></div>

`void` **set_animation_loop** ( anim: [`StringName`](class_stringname.md), loop: [`bool`](class_bool.md) )<div id="class_spriteframes_method_set_animation_loop"></div>

If `loop` is `true`, the `anim` animation will loop when it reaches the end, or the start if it is played in reverse.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_spriteframes_method_set_animation_speed"></div>

`void` **set_animation_speed** ( anim: [`StringName`](class_stringname.md), fps: [`float`](class_float.md) )<div id="class_spriteframes_method_set_animation_speed"></div>

Sets the speed for the `anim` animation in frames per second.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_spriteframes_method_set_frame"></div>

`void` **set_frame** ( anim: [`StringName`](class_stringname.md), idx: [`int`](class_int.md), texture: [`Texture2D`](class_texture2d.md), duration: [`float`](class_float.md) = 1.0 )<div id="class_spriteframes_method_set_frame"></div>

Sets the `texture` and the `duration` of the frame `idx` in the `anim` animation. `duration` specifies the relative duration, see [`get_frame_duration`](#class_spriteframes_method_get_frame_duration) for details.

[^virtual]: 本方法通常需要用户覆盖才能生效。
[^const]: 本方法无副作用，不会修改该实例的任何成员变量。
[^vararg]: 本方法除了能接受在此处描述的参数外，还能够继续接受任意数量的参数。
[^constructor]: 本方法用于构造某个类型。
[^static]: 调用本方法无需实例，可直接使用类名进行调用。
[^operator]: 本方法描述的是使用本类型作为左操作数的有效运算符。
[^bitfield]: 这个值是由下列位标志构成位掩码的整数。
[^void]: 无返回值。
