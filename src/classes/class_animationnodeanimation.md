<!-- ⚠ 请勿编辑本文件 ⚠ -->
<!-- 本文档使用脚本从 WeDot 引擎源码仓库生成。 -->
<!-- 生成脚本：https://github.com/WeDot-Engine/WeDot/tree/master/doc/tools/make_md.py； -->
<!-- 原文件：https://github.com/WeDot-Engine/WeDot/tree/master/doc/classes/AnimationNodeAnimation.xml。 -->

<div id="_class_animationnodeanimation"></div>

# AnimationNodeAnimation

**继承：** [`AnimationRootNode`](class_animationrootnode.md) **<** [`AnimationNode`](class_animationnode.md) **<** [`Resource`](class_resource.md) **<** [`RefCounted`](class_refcounted.md) **<** [`Object`](class_object.md)

An input animation for an [`AnimationNodeBlendTree`](class_animationnodeblendtree.md).

## 描述

A resource to add to an [`AnimationNodeBlendTree`](class_animationnodeblendtree.md). Only has one output port using the [`animation`](class_animationnodeanimation.md#class_animationnodeanimation_property_animation) property. Used as an input for [`AnimationNode`](class_animationnode.md) s that blend animations together.

## 属性

|||
|:-:|:--|
| [`StringName`](class_stringname.md)               | [`animation`](class_animationnodeanimation.md#class_animationnodeanimation_property_animation)                     | ``&""``   |
| [LoopMode](#enum_animation_loopmode)              | [`loop_mode`](class_animationnodeanimation.md#class_animationnodeanimation_property_loop_mode)                     |           |
| [PlayMode](#enum_animationnodeanimation_playmode) | [`play_mode`](class_animationnodeanimation.md#class_animationnodeanimation_property_play_mode)                     | ``0``     |
| [`float`](class_float.md)                         | [`start_offset`](class_animationnodeanimation.md#class_animationnodeanimation_property_start_offset)               |           |
| [`bool`](class_bool.md)                           | [`stretch_time_scale`](class_animationnodeanimation.md#class_animationnodeanimation_property_stretch_time_scale)   |           |
| [`float`](class_float.md)                         | [`timeline_length`](class_animationnodeanimation.md#class_animationnodeanimation_property_timeline_length)         |           |
| [`bool`](class_bool.md)                           | [`use_custom_timeline`](class_animationnodeanimation.md#class_animationnodeanimation_property_use_custom_timeline) | ``false`` |

<!-- rst-class:: classref-section-separator -->

---

## 枚举

<div id="_class_enum_animationnodeanimation_playmode"></div>

enum **PlayMode**: <div id="enum_animationnodeanimation_playmode"></div>

<div id="_class_animationnodeanimation_constant_play_mode_forward"></div>

[PlayMode](#enum_animationnodeanimation_playmode) **PLAY_MODE_FORWARD** = ``0``

Plays animation in forward direction.

<div id="_class_animationnodeanimation_constant_play_mode_backward"></div>

[PlayMode](#enum_animationnodeanimation_playmode) **PLAY_MODE_BACKWARD** = ``1``

Plays animation in backward direction.

<!-- rst-class:: classref-section-separator -->

---

## 属性说明

<div id="_class_animationnodeanimation_property_animation"></div>

[`StringName`](class_stringname.md) **animation** = ``&""`` <div id="class_animationnodeanimation_property_animation"></div>

- `void` **set_animation** ( value: [`StringName`](class_stringname.md) )
- [`StringName`](class_stringname.md) **get_animation** ( )

Animation to use as an output. It is one of the animations provided by [`AnimationTree.anim_player`](class_animationtree.md#class_animationtree_property_anim_player).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_animationnodeanimation_property_loop_mode"></div>

[LoopMode](#enum_animation_loopmode) **loop_mode** <div id="class_animationnodeanimation_property_loop_mode"></div>

- `void` **set_loop_mode** ( value: [LoopMode](#enum_animation_loopmode) )
- [LoopMode](#enum_animation_loopmode) **get_loop_mode** ( )

If [`use_custom_timeline`](class_animationnodeanimation.md#class_animationnodeanimation_property_use_custom_timeline) is `true`, override the loop settings of the original [`Animation`](class_animation.md) resource with the value.

 **Note:** If the [`Animation.loop_mode`](class_animation.md#class_animation_property_loop_mode) isn't set to looping, the [`Animation.track_set_interpolation_loop_wrap`](class_animation.md#class_animation_method_track_set_interpolation_loop_wrap) option will not be respected. If you cannot get the expected behavior, consider duplicating the [`Animation`](class_animation.md) resource and changing the loop settings.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_animationnodeanimation_property_play_mode"></div>

[PlayMode](#enum_animationnodeanimation_playmode) **play_mode** = ``0`` <div id="class_animationnodeanimation_property_play_mode"></div>

- `void` **set_play_mode** ( value: [PlayMode](#enum_animationnodeanimation_playmode) )
- [PlayMode](#enum_animationnodeanimation_playmode) **get_play_mode** ( )

Determines the playback direction of the animation.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_animationnodeanimation_property_start_offset"></div>

[`float`](class_float.md) **start_offset** <div id="class_animationnodeanimation_property_start_offset"></div>

- `void` **set_start_offset** ( value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_start_offset** ( )

If [`use_custom_timeline`](class_animationnodeanimation.md#class_animationnodeanimation_property_use_custom_timeline) is `true`, offset the start position of the animation.

This is useful for adjusting which foot steps first in 3D walking animations.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_animationnodeanimation_property_stretch_time_scale"></div>

[`bool`](class_bool.md) **stretch_time_scale** <div id="class_animationnodeanimation_property_stretch_time_scale"></div>

- `void` **set_stretch_time_scale** ( value: [`bool`](class_bool.md) )
- [`bool`](class_bool.md) **is_stretching_time_scale** ( )

If `true`, scales the time so that the length specified in [`timeline_length`](class_animationnodeanimation.md#class_animationnodeanimation_property_timeline_length) is one cycle.

This is useful for matching the periods of walking and running animations.

If `false`, the original animation length is respected. If you set the loop to [`loop_mode`](class_animationnodeanimation.md#class_animationnodeanimation_property_loop_mode), the animation will loop in [`timeline_length`](class_animationnodeanimation.md#class_animationnodeanimation_property_timeline_length).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_animationnodeanimation_property_timeline_length"></div>

[`float`](class_float.md) **timeline_length** <div id="class_animationnodeanimation_property_timeline_length"></div>

- `void` **set_timeline_length** ( value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_timeline_length** ( )

If [`use_custom_timeline`](class_animationnodeanimation.md#class_animationnodeanimation_property_use_custom_timeline) is `true`, offset the start position of the animation.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_animationnodeanimation_property_use_custom_timeline"></div>

[`bool`](class_bool.md) **use_custom_timeline** = ``false`` <div id="class_animationnodeanimation_property_use_custom_timeline"></div>

- `void` **set_use_custom_timeline** ( value: [`bool`](class_bool.md) )
- [`bool`](class_bool.md) **is_using_custom_timeline** ( )

If `true`, [`AnimationNode`](class_animationnode.md) provides an animation based on the [`Animation`](class_animation.md) resource with some parameters adjusted.

[^virtual]: 本方法通常需要用户覆盖才能生效。
[^const]: 本方法无副作用，不会修改该实例的任何成员变量。
[^vararg]: 本方法除了能接受在此处描述的参数外，还能够继续接受任意数量的参数。
[^constructor]: 本方法用于构造某个类型。
[^static]: 调用本方法无需实例，可直接使用类名进行调用。
[^operator]: 本方法描述的是使用本类型作为左操作数的有效运算符。
[^bitfield]: 这个值是由下列位标志构成位掩码的整数。
[^void]: 无返回值。
