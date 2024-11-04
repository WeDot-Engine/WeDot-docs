<!-- ⚠ 请勿编辑本文件 ⚠ -->
<!-- 本文档使用脚本从 WeDot 引擎源码仓库生成。 -->
<!-- 生成脚本：https://github.com/WeDot-Engine/WeDot/tree/4.3/doc/tools/make_md.py； -->
<!-- 原文件：https://github.com/WeDot-Engine/WeDot/tree/4.3/doc/classes/AnimationNodeOneShot.xml。 -->

<div id="_class_animationnodeoneshot"></div>

# AnimationNodeOneShot

**继承：** [`AnimationNodeSync`](class_animationnodesync.md) **<** [`AnimationNode`](class_animationnode.md) **<** [`Resource`](class_resource.md) **<** [`RefCounted`](class_refcounted.md) **<** [`Object`](class_object.md)

Plays an animation once in an [`AnimationNodeBlendTree`](class_animationnodeblendtree.md).

## 描述

A resource to add to an [`AnimationNodeBlendTree`](class_animationnodeblendtree.md). This animation node will execute a sub-animation and return once it finishes. Blend times for fading in and out can be customized, as well as filters.

After setting the request and changing the animation playback, the one-shot node automatically clears the request on the next process frame by setting its `request` value to [`ONE_SHOT_REQUEST_NONE`](#class_animationnodeoneshot_constant_one_shot_request_none).



```gdscript

    # Play child animation connected to "shot" port.
    animation_tree.set("parameters/OneShot/request", AnimationNodeOneShot.ONE_SHOT_REQUEST_FIRE)
    # Alternative syntax (same result as above).
    animation_tree["parameters/OneShot/request"] = AnimationNodeOneShot.ONE_SHOT_REQUEST_FIRE
    
    # Abort child animation connected to "shot" port.
    animation_tree.set("parameters/OneShot/request", AnimationNodeOneShot.ONE_SHOT_REQUEST_ABORT)
    # Alternative syntax (same result as above).
    animation_tree["parameters/OneShot/request"] = AnimationNodeOneShot.ONE_SHOT_REQUEST_ABORT
    
    # Abort child animation with fading out connected to "shot" port.
    animation_tree.set("parameters/OneShot/request", AnimationNodeOneShot.ONE_SHOT_REQUEST_FADE_OUT)
    # Alternative syntax (same result as above).
    animation_tree["parameters/OneShot/request"] = AnimationNodeOneShot.ONE_SHOT_REQUEST_FADE_OUT
    
    # Get current state (read-only).
    animation_tree.get("parameters/OneShot/active")
    # Alternative syntax (same result as above).
    animation_tree["parameters/OneShot/active"]
    
    # Get current internal state (read-only).
    animation_tree.get("parameters/OneShot/internal_active")
    # Alternative syntax (same result as above).
    animation_tree["parameters/OneShot/internal_active"]
```

```csharp

    // Play child animation connected to "shot" port.
    animationTree.Set("parameters/OneShot/request", (int)AnimationNodeOneShot.OneShotRequest.Fire);
    
    // Abort child animation connected to "shot" port.
    animationTree.Set("parameters/OneShot/request", (int)AnimationNodeOneShot.OneShotRequest.Abort);
    
    // Abort child animation with fading out connected to "shot" port.
    animationTree.Set("parameters/OneShot/request", (int)AnimationNodeOneShot.OneShotRequest.FadeOut);
    
    // Get current state (read-only).
    animationTree.Get("parameters/OneShot/active");
    
    // Get current internal state (read-only).
    animationTree.Get("parameters/OneShot/internal_active");
```







## 属性

| [`bool`](class_bool.md)                       | [`autorestart`](#class_animationnodeoneshot_property_autorestart)                           | ``false`` |
| [`float`](class_float.md)                     | [`autorestart_delay`](#class_animationnodeoneshot_property_autorestart_delay)               | ``1.0``   |
| [`float`](class_float.md)                     | [`autorestart_random_delay`](#class_animationnodeoneshot_property_autorestart_random_delay) | ``0.0``   |
| [`bool`](class_bool.md)                       | [`break_loop_at_end`](#class_animationnodeoneshot_property_break_loop_at_end)               | ``false`` |
| [`Curve`](class_curve.md)                     | [`fadein_curve`](#class_animationnodeoneshot_property_fadein_curve)                         |           |
| [`float`](class_float.md)                     | [`fadein_time`](#class_animationnodeoneshot_property_fadein_time)                           | ``0.0``   |
| [`Curve`](class_curve.md)                     | [`fadeout_curve`](#class_animationnodeoneshot_property_fadeout_curve)                       |           |
| [`float`](class_float.md)                     | [`fadeout_time`](#class_animationnodeoneshot_property_fadeout_time)                         | ``0.0``   |
| [MixMode](#enum_animationnodeoneshot_mixmode) | [`mix_mode`](#class_animationnodeoneshot_property_mix_mode)                                 | ``0``     |

<!-- rst-class:: classref-section-separator -->

---

## 枚举

<div id="_class_enum_animationnodeoneshot_oneshotrequest"></div>

enum **OneShotRequest**: <div id="enum_animationnodeoneshot_oneshotrequest"></div>

<div id="_class_animationnodeoneshot_constant_one_shot_request_none"></div>

[OneShotRequest](#enum_animationnodeoneshot_oneshotrequest) **ONE_SHOT_REQUEST_NONE** = ``0``

The default state of the request. Nothing is done.

<div id="_class_animationnodeoneshot_constant_one_shot_request_fire"></div>

[OneShotRequest](#enum_animationnodeoneshot_oneshotrequest) **ONE_SHOT_REQUEST_FIRE** = ``1``

The request to play the animation connected to "shot" port.

<div id="_class_animationnodeoneshot_constant_one_shot_request_abort"></div>

[OneShotRequest](#enum_animationnodeoneshot_oneshotrequest) **ONE_SHOT_REQUEST_ABORT** = ``2``

The request to stop the animation connected to "shot" port.

<div id="_class_animationnodeoneshot_constant_one_shot_request_fade_out"></div>

[OneShotRequest](#enum_animationnodeoneshot_oneshotrequest) **ONE_SHOT_REQUEST_FADE_OUT** = ``3``

The request to fade out the animation connected to "shot" port.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_enum_animationnodeoneshot_mixmode"></div>

enum **MixMode**: <div id="enum_animationnodeoneshot_mixmode"></div>

<div id="_class_animationnodeoneshot_constant_mix_mode_blend"></div>

[MixMode](#enum_animationnodeoneshot_mixmode) **MIX_MODE_BLEND** = ``0``

Blends two animations. See also [`AnimationNodeBlend2`](class_animationnodeblend2.md).

<div id="_class_animationnodeoneshot_constant_mix_mode_add"></div>

[MixMode](#enum_animationnodeoneshot_mixmode) **MIX_MODE_ADD** = ``1``

Blends two animations additively. See also [`AnimationNodeAdd2`](class_animationnodeadd2.md).

<!-- rst-class:: classref-section-separator -->

---

## 属性说明

<div id="_class_animationnodeoneshot_property_autorestart"></div>

[`bool`](class_bool.md) **autorestart** = ``false`` <div id="class_animationnodeoneshot_property_autorestart"></div>

- `void` **set_autorestart** ( value: [`bool`](class_bool.md) )
- [`bool`](class_bool.md) **has_autorestart** ( )

If `true`, the sub-animation will restart automatically after finishing.

In other words, to start auto restarting, the animation must be played once with the [`ONE_SHOT_REQUEST_FIRE`](#class_animationnodeoneshot_constant_one_shot_request_fire) request. The [`ONE_SHOT_REQUEST_ABORT`](#class_animationnodeoneshot_constant_one_shot_request_abort) request stops the auto restarting, but it does not disable the [`autorestart`](#class_animationnodeoneshot_property_autorestart) itself. So, the [`ONE_SHOT_REQUEST_FIRE`](#class_animationnodeoneshot_constant_one_shot_request_fire) request will start auto restarting again.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_animationnodeoneshot_property_autorestart_delay"></div>

[`float`](class_float.md) **autorestart_delay** = ``1.0`` <div id="class_animationnodeoneshot_property_autorestart_delay"></div>

- `void` **set_autorestart_delay** ( value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_autorestart_delay** ( )

The delay after which the automatic restart is triggered, in seconds.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_animationnodeoneshot_property_autorestart_random_delay"></div>

[`float`](class_float.md) **autorestart_random_delay** = ``0.0`` <div id="class_animationnodeoneshot_property_autorestart_random_delay"></div>

- `void` **set_autorestart_random_delay** ( value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_autorestart_random_delay** ( )

If [`autorestart`](#class_animationnodeoneshot_property_autorestart) is `true`, a random additional delay (in seconds) between 0 and this value will be added to [`autorestart_delay`](#class_animationnodeoneshot_property_autorestart_delay).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_animationnodeoneshot_property_break_loop_at_end"></div>

[`bool`](class_bool.md) **break_loop_at_end** = ``false`` <div id="class_animationnodeoneshot_property_break_loop_at_end"></div>

- `void` **set_break_loop_at_end** ( value: [`bool`](class_bool.md) )
- [`bool`](class_bool.md) **is_loop_broken_at_end** ( )

If `true`, breaks the loop at the end of the loop cycle for transition, even if the animation is looping.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_animationnodeoneshot_property_fadein_curve"></div>

[`Curve`](class_curve.md) **fadein_curve** <div id="class_animationnodeoneshot_property_fadein_curve"></div>

- `void` **set_fadein_curve** ( value: [`Curve`](class_curve.md) )
- [`Curve`](class_curve.md) **get_fadein_curve** ( )

Determines how cross-fading between animations is eased. If empty, the transition will be linear.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_animationnodeoneshot_property_fadein_time"></div>

[`float`](class_float.md) **fadein_time** = ``0.0`` <div id="class_animationnodeoneshot_property_fadein_time"></div>

- `void` **set_fadein_time** ( value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_fadein_time** ( )

The fade-in duration. For example, setting this to `1.0` for a 5 second length animation will produce a cross-fade that starts at 0 second and ends at 1 second during the animation.

 **Note:** **AnimationNodeOneShot** transitions the current state after the end of the fading. When [`AnimationNodeOutput`](class_animationnodeoutput.md) is considered as the most upstream, so the [`fadein_time`](#class_animationnodeoneshot_property_fadein_time) is scaled depending on the downstream delta. For example, if this value is set to `1.0` and a [`AnimationNodeTimeScale`](class_animationnodetimescale.md) with a value of `2.0` is chained downstream, the actual processing time will be 0.5 second.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_animationnodeoneshot_property_fadeout_curve"></div>

[`Curve`](class_curve.md) **fadeout_curve** <div id="class_animationnodeoneshot_property_fadeout_curve"></div>

- `void` **set_fadeout_curve** ( value: [`Curve`](class_curve.md) )
- [`Curve`](class_curve.md) **get_fadeout_curve** ( )

Determines how cross-fading between animations is eased. If empty, the transition will be linear.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_animationnodeoneshot_property_fadeout_time"></div>

[`float`](class_float.md) **fadeout_time** = ``0.0`` <div id="class_animationnodeoneshot_property_fadeout_time"></div>

- `void` **set_fadeout_time** ( value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_fadeout_time** ( )

The fade-out duration. For example, setting this to `1.0` for a 5 second length animation will produce a cross-fade that starts at 4 second and ends at 5 second during the animation.

 **Note:** **AnimationNodeOneShot** transitions the current state after the end of the fading. When [`AnimationNodeOutput`](class_animationnodeoutput.md) is considered as the most upstream, so the [`fadeout_time`](#class_animationnodeoneshot_property_fadeout_time) is scaled depending on the downstream delta. For example, if this value is set to `1.0` and an [`AnimationNodeTimeScale`](class_animationnodetimescale.md) with a value of `2.0` is chained downstream, the actual processing time will be 0.5 second.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_animationnodeoneshot_property_mix_mode"></div>

[MixMode](#enum_animationnodeoneshot_mixmode) **mix_mode** = ``0`` <div id="class_animationnodeoneshot_property_mix_mode"></div>

- `void` **set_mix_mode** ( value: [MixMode](#enum_animationnodeoneshot_mixmode) )
- [MixMode](#enum_animationnodeoneshot_mixmode) **get_mix_mode** ( )

The blend type.

[^virtual]: 本方法通常需要用户覆盖才能生效。
[^const]: 本方法无副作用，不会修改该实例的任何成员变量。
[^vararg]: 本方法除了能接受在此处描述的参数外，还能够继续接受任意数量的参数。
[^constructor]: 本方法用于构造某个类型。
[^static]: 调用本方法无需实例，可直接使用类名进行调用。
[^operator]: 本方法描述的是使用本类型作为左操作数的有效运算符。
[^bitfield]: 这个值是由下列位标志构成位掩码的整数。
[^void]: 无返回值。
