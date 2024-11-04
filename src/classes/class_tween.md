<!-- ⚠ 请勿编辑本文件 ⚠ -->
<!-- 本文档使用脚本从 WeDot 引擎源码仓库生成。 -->
<!-- 生成脚本：https://github.com/WeDot-Engine/WeDot/tree/4.3/doc/tools/make_md.py； -->
<!-- 原文件：https://github.com/WeDot-Engine/WeDot/tree/4.3/doc/classes/Tween.xml。 -->

<div id="_class_tween"></div>

# Tween

**继承：** [`RefCounted`](class_refcounted.md) **<** [`Object`](class_object.md)

Lightweight object used for general-purpose animation via script, using [`Tweener`](class_tweener.md) s.

## 描述

Tweens are mostly useful for animations requiring a numerical property to be interpolated over a range of values. The name *tween* comes from *in-betweening*, an animation technique where you specify *keyframes* and the computer interpolates the frames that appear between them. Animating something with a **Tween** is called tweening.

 **Tween** is more suited than [`AnimationPlayer`](class_animationplayer.md) for animations where you don't know the final values in advance. For example, interpolating a dynamically-chosen camera zoom value is best done with a **Tween**; it would be difficult to do the same thing with an [`AnimationPlayer`](class_animationplayer.md) node. Tweens are also more light-weight than [`AnimationPlayer`](class_animationplayer.md), so they are very much suited for simple animations or general tasks that don't require visual tweaking provided by the editor. They can be used in a "fire-and-forget" manner for some logic that normally would be done by code. You can e.g. make something shoot periodically by using a looped [`CallbackTweener`](class_callbacktweener.md) with a delay.

A **Tween** can be created by using either [`SceneTree.create_tween`](#class_scenetree_method_create_tween) or [`Node.create_tween`](#class_node_method_create_tween). **Tween** s created manually (i.e. by using `Tween.new()`) are invalid and can't be used for tweening values.

A tween animation is created by adding [`Tweener`](class_tweener.md) s to the **Tween** object, using [`tween_property`](#class_tween_method_tween_property), [`tween_interval`](#class_tween_method_tween_interval), [`tween_callback`](#class_tween_method_tween_callback) or [`tween_method`](#class_tween_method_tween_method):



```gdscript

    var tween = get_tree().create_tween()
    tween.tween_property($Sprite, "modulate", Color.RED, 1)
    tween.tween_property($Sprite, "scale", Vector2(), 1)
    tween.tween_callback($Sprite.queue_free)
```

```csharp

    Tween tween = GetTree().CreateTween();
    tween.TweenProperty(GetNode("Sprite"), "modulate", Colors.Red, 1.0f);
    tween.TweenProperty(GetNode("Sprite"), "scale", Vector2.Zero, 1.0f);
    tween.TweenCallback(Callable.From(GetNode("Sprite").QueueFree));
```



This sequence will make the `$Sprite` node turn red, then shrink, before finally calling [`Node.queue_free`](#class_node_method_queue_free) to free the sprite. [`Tweener`](class_tweener.md) s are executed one after another by default. This behavior can be changed using [`parallel`](#class_tween_method_parallel) and [`set_parallel`](#class_tween_method_set_parallel).

When a [`Tweener`](class_tweener.md) is created with one of the `tween_*` methods, a chained method call can be used to tweak the properties of this [`Tweener`](class_tweener.md). For example, if you want to set a different transition type in the above example, you can use [`set_trans`](#class_tween_method_set_trans):



```gdscript

    var tween = get_tree().create_tween()
    tween.tween_property($Sprite, "modulate", Color.RED, 1).set_trans(Tween.TRANS_SINE)
    tween.tween_property($Sprite, "scale", Vector2(), 1).set_trans(Tween.TRANS_BOUNCE)
    tween.tween_callback($Sprite.queue_free)
```

```csharp

    Tween tween = GetTree().CreateTween();
    tween.TweenProperty(GetNode("Sprite"), "modulate", Colors.Red, 1.0f).SetTrans(Tween.TransitionType.Sine);
    tween.TweenProperty(GetNode("Sprite"), "scale", Vector2.Zero, 1.0f).SetTrans(Tween.TransitionType.Bounce);
    tween.TweenCallback(Callable.From(GetNode("Sprite").QueueFree));
```



Most of the **Tween** methods can be chained this way too. In the following example the **Tween** is bound to the running script's node and a default transition is set for its [`Tweener`](class_tweener.md) s:



```gdscript

    var tween = get_tree().create_tween().bind_node(self).set_trans(Tween.TRANS_ELASTIC)
    tween.tween_property($Sprite, "modulate", Color.RED, 1)
    tween.tween_property($Sprite, "scale", Vector2(), 1)
    tween.tween_callback($Sprite.queue_free)
```

```csharp

    var tween = GetTree().CreateTween().BindNode(this).SetTrans(Tween.TransitionType.Elastic);
    tween.TweenProperty(GetNode("Sprite"), "modulate", Colors.Red, 1.0f);
    tween.TweenProperty(GetNode("Sprite"), "scale", Vector2.Zero, 1.0f);
    tween.TweenCallback(Callable.From(GetNode("Sprite").QueueFree));
```



Another interesting use for **Tween** s is animating arbitrary sets of objects:



```gdscript

    var tween = create_tween()
    for sprite in get_children():
        tween.tween_property(sprite, "position", Vector2(0, 0), 1)
```

```csharp

    Tween tween = CreateTween();
    foreach (Node sprite in GetChildren())
        tween.TweenProperty(sprite, "position", Vector2.Zero, 1.0f);
```



In the example above, all children of a node are moved one after another to position (0, 0).

You should avoid using more than one **Tween** per object's property. If two or more tweens animate one property at the same time, the last one created will take priority and assign the final value. If you want to interrupt and restart an animation, consider assigning the **Tween** to a variable:



```gdscript

    var tween
    func animate():
        if tween:
            tween.kill() # Abort the previous animation.
        tween = create_tween()
```

```csharp

    private Tween _tween;
    
    public void Animate()
    {
        if (_tween != null)
            _tween.Kill(); // Abort the previous animation
        _tween = CreateTween();
    }
```



Some [`Tweener`](class_tweener.md) s use transitions and eases. The first accepts a [TransitionType](#enum_tween_transitiontype) constant, and refers to the way the timing of the animation is handled (see [*easings.net*](https://easings.net/) for some examples). The second accepts an [EaseType](#enum_tween_easetype) constant, and controls where the `trans_type` is applied to the interpolation (in the beginning, the end, or both). If you don't know which transition and easing to pick, you can try different [TransitionType](#enum_tween_transitiontype) constants with [`EASE_IN_OUT`](#class_tween_constant_ease_in_out), and use the one that looks best.

 [*Tween easing and transition types cheatsheet*](https://raw.githubusercontent.com/godotengine/godot-docs/master/img/tween_cheatsheet.webp) 

 **Note:** Tweens are not designed to be re-used and trying to do so results in an undefined behavior. Create a new Tween for each animation and every time you replay an animation from start. Keep in mind that Tweens start immediately, so only create a Tween when you want to start animating.

 **Note:** The tween is processed after all of the nodes in the current frame, i.e. node's [`Node._process`](#class_node_private_method__process) method would be called before the tween (or [`Node._physics_process`](#class_node_private_method__physics_process) depending on the value passed to [`set_process_mode`](#class_tween_method_set_process_mode)).





















## 方法

| [`Tween`](class_tween.md)                     | [`bind_node`](#class_tween_method_bind_node) ( node: [`Node`](class_node.md) )                                                                                                                                                                                                                                                                                 |
| [`Tween`](class_tween.md)                     | [`chain`](#class_tween_method_chain) ( )                                                                                                                                                                                                                                                                                                                       |
| [`bool`](class_bool.md)                       | [`custom_step`](#class_tween_method_custom_step) ( delta: [`float`](class_float.md) )                                                                                                                                                                                                                                                                          |
| [`int`](class_int.md)                         | [`get_loops_left`](#class_tween_method_get_loops_left) ( ) const[^const]                                                                                                                                                                                                                                                                                       |
| [`float`](class_float.md)                     | [`get_total_elapsed_time`](#class_tween_method_get_total_elapsed_time) ( ) const[^const]                                                                                                                                                                                                                                                                       |
| [`Variant`](class_variant.md)                 | [`interpolate_value`](#class_tween_method_interpolate_value) ( initial_value: [`Variant`](class_variant.md), delta_value: [`Variant`](class_variant.md), elapsed_time: [`float`](class_float.md), duration: [`float`](class_float.md), trans_type: [TransitionType](#enum_tween_transitiontype), ease_type: [EaseType](#enum_tween_easetype) ) static[^static] |
| [`bool`](class_bool.md)                       | [`is_running`](#class_tween_method_is_running) ( )                                                                                                                                                                                                                                                                                                             |
| [`bool`](class_bool.md)                       | [`is_valid`](#class_tween_method_is_valid) ( )                                                                                                                                                                                                                                                                                                                 |
| `void`                                        | [`kill`](#class_tween_method_kill) ( )                                                                                                                                                                                                                                                                                                                         |
| [`Tween`](class_tween.md)                     | [`parallel`](#class_tween_method_parallel) ( )                                                                                                                                                                                                                                                                                                                 |
| `void`                                        | [`pause`](#class_tween_method_pause) ( )                                                                                                                                                                                                                                                                                                                       |
| `void`                                        | [`play`](#class_tween_method_play) ( )                                                                                                                                                                                                                                                                                                                         |
| [`Tween`](class_tween.md)                     | [`set_ease`](#class_tween_method_set_ease) ( ease: [EaseType](#enum_tween_easetype) )                                                                                                                                                                                                                                                                          |
| [`Tween`](class_tween.md)                     | [`set_loops`](#class_tween_method_set_loops) ( loops: [`int`](class_int.md) = 0 )                                                                                                                                                                                                                                                                              |
| [`Tween`](class_tween.md)                     | [`set_parallel`](#class_tween_method_set_parallel) ( parallel: [`bool`](class_bool.md) = true )                                                                                                                                                                                                                                                                |
| [`Tween`](class_tween.md)                     | [`set_pause_mode`](#class_tween_method_set_pause_mode) ( mode: [TweenPauseMode](#enum_tween_tweenpausemode) )                                                                                                                                                                                                                                                  |
| [`Tween`](class_tween.md)                     | [`set_process_mode`](#class_tween_method_set_process_mode) ( mode: [TweenProcessMode](#enum_tween_tweenprocessmode) )                                                                                                                                                                                                                                          |
| [`Tween`](class_tween.md)                     | [`set_speed_scale`](#class_tween_method_set_speed_scale) ( speed: [`float`](class_float.md) )                                                                                                                                                                                                                                                                  |
| [`Tween`](class_tween.md)                     | [`set_trans`](#class_tween_method_set_trans) ( trans: [TransitionType](#enum_tween_transitiontype) )                                                                                                                                                                                                                                                           |
| `void`                                        | [`stop`](#class_tween_method_stop) ( )                                                                                                                                                                                                                                                                                                                         |
| [`CallbackTweener`](class_callbacktweener.md) | [`tween_callback`](#class_tween_method_tween_callback) ( callback: [`Callable`](class_callable.md) )                                                                                                                                                                                                                                                           |
| [`IntervalTweener`](class_intervaltweener.md) | [`tween_interval`](#class_tween_method_tween_interval) ( time: [`float`](class_float.md) )                                                                                                                                                                                                                                                                     |
| [`MethodTweener`](class_methodtweener.md)     | [`tween_method`](#class_tween_method_tween_method) ( method: [`Callable`](class_callable.md), from: [`Variant`](class_variant.md), to: [`Variant`](class_variant.md), duration: [`float`](class_float.md) )                                                                                                                                                    |
| [`PropertyTweener`](class_propertytweener.md) | [`tween_property`](#class_tween_method_tween_property) ( object: [`Object`](class_object.md), property: [`NodePath`](class_nodepath.md), final_val: [`Variant`](class_variant.md), duration: [`float`](class_float.md) )                                                                                                                                       |

<!-- rst-class:: classref-section-separator -->

---

## 信号

<div id="_class_class_tween_signal_finished"></div>

**finished** ( ) <div id="class_tween_signal_finished"></div>

Emitted when the **Tween** has finished all tweening. Never emitted when the **Tween** is set to infinite looping (see [`set_loops`](#class_tween_method_set_loops)).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_class_tween_signal_loop_finished"></div>

**loop_finished** ( loop_count: [`int`](class_int.md) ) <div id="class_tween_signal_loop_finished"></div>

Emitted when a full loop is complete (see [`set_loops`](#class_tween_method_set_loops)), providing the loop index. This signal is not emitted after the final loop, use [`finished`](#class_tween_signal_finished) instead for this case.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_class_tween_signal_step_finished"></div>

**step_finished** ( idx: [`int`](class_int.md) ) <div id="class_tween_signal_step_finished"></div>

Emitted when one step of the **Tween** is complete, providing the step index. One step is either a single [`Tweener`](class_tweener.md) or a group of [`Tweener`](class_tweener.md) s running in parallel.

<!-- rst-class:: classref-section-separator -->

---

## 枚举

<div id="_class_enum_tween_tweenprocessmode"></div>

enum **TweenProcessMode**: <div id="enum_tween_tweenprocessmode"></div>

<div id="_class_tween_constant_tween_process_physics"></div>

[TweenProcessMode](#enum_tween_tweenprocessmode) **TWEEN_PROCESS_PHYSICS** = ``0``

The **Tween** updates after each physics frame (see [`Node._physics_process`](#class_node_private_method__physics_process)).

<div id="_class_tween_constant_tween_process_idle"></div>

[TweenProcessMode](#enum_tween_tweenprocessmode) **TWEEN_PROCESS_IDLE** = ``1``

The **Tween** updates after each process frame (see [`Node._process`](#class_node_private_method__process)).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_enum_tween_tweenpausemode"></div>

enum **TweenPauseMode**: <div id="enum_tween_tweenpausemode"></div>

<div id="_class_tween_constant_tween_pause_bound"></div>

[TweenPauseMode](#enum_tween_tweenpausemode) **TWEEN_PAUSE_BOUND** = ``0``

If the **Tween** has a bound node, it will process when that node can process (see [`Node.process_mode`](#class_node_property_process_mode)). Otherwise it's the same as [`TWEEN_PAUSE_STOP`](#class_tween_constant_tween_pause_stop).

<div id="_class_tween_constant_tween_pause_stop"></div>

[TweenPauseMode](#enum_tween_tweenpausemode) **TWEEN_PAUSE_STOP** = ``1``

If [`SceneTree`](class_scenetree.md) is paused, the **Tween** will also pause.

<div id="_class_tween_constant_tween_pause_process"></div>

[TweenPauseMode](#enum_tween_tweenpausemode) **TWEEN_PAUSE_PROCESS** = ``2``

The **Tween** will process regardless of whether [`SceneTree`](class_scenetree.md) is paused.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_enum_tween_transitiontype"></div>

enum **TransitionType**: <div id="enum_tween_transitiontype"></div>

<div id="_class_tween_constant_trans_linear"></div>

[TransitionType](#enum_tween_transitiontype) **TRANS_LINEAR** = ``0``

The animation is interpolated linearly.

<div id="_class_tween_constant_trans_sine"></div>

[TransitionType](#enum_tween_transitiontype) **TRANS_SINE** = ``1``

The animation is interpolated using a sine function.

<div id="_class_tween_constant_trans_quint"></div>

[TransitionType](#enum_tween_transitiontype) **TRANS_QUINT** = ``2``

The animation is interpolated with a quintic (to the power of 5) function.

<div id="_class_tween_constant_trans_quart"></div>

[TransitionType](#enum_tween_transitiontype) **TRANS_QUART** = ``3``

The animation is interpolated with a quartic (to the power of 4) function.

<div id="_class_tween_constant_trans_quad"></div>

[TransitionType](#enum_tween_transitiontype) **TRANS_QUAD** = ``4``

The animation is interpolated with a quadratic (to the power of 2) function.

<div id="_class_tween_constant_trans_expo"></div>

[TransitionType](#enum_tween_transitiontype) **TRANS_EXPO** = ``5``

The animation is interpolated with an exponential (to the power of x) function.

<div id="_class_tween_constant_trans_elastic"></div>

[TransitionType](#enum_tween_transitiontype) **TRANS_ELASTIC** = ``6``

The animation is interpolated with elasticity, wiggling around the edges.

<div id="_class_tween_constant_trans_cubic"></div>

[TransitionType](#enum_tween_transitiontype) **TRANS_CUBIC** = ``7``

The animation is interpolated with a cubic (to the power of 3) function.

<div id="_class_tween_constant_trans_circ"></div>

[TransitionType](#enum_tween_transitiontype) **TRANS_CIRC** = ``8``

The animation is interpolated with a function using square roots.

<div id="_class_tween_constant_trans_bounce"></div>

[TransitionType](#enum_tween_transitiontype) **TRANS_BOUNCE** = ``9``

The animation is interpolated by bouncing at the end.

<div id="_class_tween_constant_trans_back"></div>

[TransitionType](#enum_tween_transitiontype) **TRANS_BACK** = ``10``

The animation is interpolated backing out at ends.

<div id="_class_tween_constant_trans_spring"></div>

[TransitionType](#enum_tween_transitiontype) **TRANS_SPRING** = ``11``

The animation is interpolated like a spring towards the end.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_enum_tween_easetype"></div>

enum **EaseType**: <div id="enum_tween_easetype"></div>

<div id="_class_tween_constant_ease_in"></div>

[EaseType](#enum_tween_easetype) **EASE_IN** = ``0``

The interpolation starts slowly and speeds up towards the end.

<div id="_class_tween_constant_ease_out"></div>

[EaseType](#enum_tween_easetype) **EASE_OUT** = ``1``

The interpolation starts quickly and slows down towards the end.

<div id="_class_tween_constant_ease_in_out"></div>

[EaseType](#enum_tween_easetype) **EASE_IN_OUT** = ``2``

A combination of [`EASE_IN`](#class_tween_constant_ease_in) and [`EASE_OUT`](#class_tween_constant_ease_out). The interpolation is slowest at both ends.

<div id="_class_tween_constant_ease_out_in"></div>

[EaseType](#enum_tween_easetype) **EASE_OUT_IN** = ``3``

A combination of [`EASE_IN`](#class_tween_constant_ease_in) and [`EASE_OUT`](#class_tween_constant_ease_out). The interpolation is fastest at both ends.

<!-- rst-class:: classref-section-separator -->

---

## 方法说明

<div id="_class_tween_method_bind_node"></div>

[`Tween`](class_tween.md) **bind_node** ( node: [`Node`](class_node.md) )<div id="class_tween_method_bind_node"></div>

Binds this **Tween** with the given `node`. **Tween** s are processed directly by the [`SceneTree`](class_scenetree.md), so they run independently of the animated nodes. When you bind a [`Node`](class_node.md) with the **Tween**, the **Tween** will halt the animation when the object is not inside tree and the **Tween** will be automatically killed when the bound object is freed. Also [`TWEEN_PAUSE_BOUND`](#class_tween_constant_tween_pause_bound) will make the pausing behavior dependent on the bound node.

For a shorter way to create and bind a **Tween**, you can use [`Node.create_tween`](#class_node_method_create_tween).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_tween_method_chain"></div>

[`Tween`](class_tween.md) **chain** ( )<div id="class_tween_method_chain"></div>

Used to chain two [`Tweener`](class_tweener.md) s after [`set_parallel`](#class_tween_method_set_parallel) is called with `true`.



```gdscript

    var tween = create_tween().set_parallel(true)
    tween.tween_property(...)
    tween.tween_property(...) # Will run parallelly with above.
    tween.chain().tween_property(...) # Will run after two above are finished.
```

```csharp

    Tween tween = CreateTween().SetParallel(true);
    tween.TweenProperty(...);
    tween.TweenProperty(...); // Will run parallelly with above.
    tween.Chain().TweenProperty(...); // Will run after two above are finished.
```







<!-- rst-class:: classref-item-separator -->

---

<div id="_class_tween_method_custom_step"></div>

[`bool`](class_bool.md) **custom_step** ( delta: [`float`](class_float.md) )<div id="class_tween_method_custom_step"></div>

Processes the **Tween** by the given `delta` value, in seconds. This is mostly useful for manual control when the **Tween** is paused. It can also be used to end the **Tween** animation immediately, by setting `delta` longer than the whole duration of the **Tween** animation.

Returns `true` if the **Tween** still has [`Tweener`](class_tweener.md) s that haven't finished.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_tween_method_get_loops_left"></div>

[`int`](class_int.md) **get_loops_left** ( ) const[^const]<div id="class_tween_method_get_loops_left"></div>

Returns the number of remaining loops for this **Tween** (see [`set_loops`](#class_tween_method_set_loops)). A return value of `-1` indicates an infinitely looping **Tween**, and a return value of `0` indicates that the **Tween** has already finished.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_tween_method_get_total_elapsed_time"></div>

[`float`](class_float.md) **get_total_elapsed_time** ( ) const[^const]<div id="class_tween_method_get_total_elapsed_time"></div>

Returns the total time in seconds the **Tween** has been animating (i.e. the time since it started, not counting pauses etc.). The time is affected by [`set_speed_scale`](#class_tween_method_set_speed_scale), and [`stop`](#class_tween_method_stop) will reset it to `0`.

 **Note:** As it results from accumulating frame deltas, the time returned after the **Tween** has finished animating will be slightly greater than the actual **Tween** duration.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_tween_method_interpolate_value"></div>

[`Variant`](class_variant.md) **interpolate_value** ( initial_value: [`Variant`](class_variant.md), delta_value: [`Variant`](class_variant.md), elapsed_time: [`float`](class_float.md), duration: [`float`](class_float.md), trans_type: [TransitionType](#enum_tween_transitiontype), ease_type: [EaseType](#enum_tween_easetype) ) static[^static]<div id="class_tween_method_interpolate_value"></div>

This method can be used for manual interpolation of a value, when you don't want **Tween** to do animating for you. It's similar to [`@GlobalScope.lerp`](#class_@globalscope_method_lerp), but with support for custom transition and easing.

 `initial_value` is the starting value of the interpolation.

 `delta_value` is the change of the value in the interpolation, i.e. it's equal to `final_value - initial_value`.

 `elapsed_time` is the time in seconds that passed after the interpolation started and it's used to control the position of the interpolation. E.g. when it's equal to half of the `duration`, the interpolated value will be halfway between initial and final values. This value can also be greater than `duration` or lower than 0, which will extrapolate the value.

 `duration` is the total time of the interpolation.

 **Note:** If `duration` is equal to `0`, the method will always return the final value, regardless of `elapsed_time` provided.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_tween_method_is_running"></div>

[`bool`](class_bool.md) **is_running** ( )<div id="class_tween_method_is_running"></div>

Returns whether the **Tween** is currently running, i.e. it wasn't paused and it's not finished.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_tween_method_is_valid"></div>

[`bool`](class_bool.md) **is_valid** ( )<div id="class_tween_method_is_valid"></div>

Returns whether the **Tween** is valid. A valid **Tween** is a **Tween** contained by the scene tree (i.e. the array from [`SceneTree.get_processed_tweens`](#class_scenetree_method_get_processed_tweens) will contain this **Tween**). A **Tween** might become invalid when it has finished tweening, is killed, or when created with `Tween.new()`. Invalid **Tween** s can't have [`Tweener`](class_tweener.md) s appended.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_tween_method_kill"></div>

`void` **kill** ( )<div id="class_tween_method_kill"></div>

Aborts all tweening operations and invalidates the **Tween**.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_tween_method_parallel"></div>

[`Tween`](class_tween.md) **parallel** ( )<div id="class_tween_method_parallel"></div>

Makes the next [`Tweener`](class_tweener.md) run parallelly to the previous one.

 **Example:** 



```gdscript

    var tween = create_tween()
    tween.tween_property(...)
    tween.parallel().tween_property(...)
    tween.parallel().tween_property(...)
```

```csharp

    Tween tween = CreateTween();
    tween.TweenProperty(...);
    tween.Parallel().TweenProperty(...);
    tween.Parallel().TweenProperty(...);
```



All [`Tweener`](class_tweener.md) s in the example will run at the same time.

You can make the **Tween** parallel by default by using [`set_parallel`](#class_tween_method_set_parallel).





<!-- rst-class:: classref-item-separator -->

---

<div id="_class_tween_method_pause"></div>

`void` **pause** ( )<div id="class_tween_method_pause"></div>

Pauses the tweening. The animation can be resumed by using [`play`](#class_tween_method_play).

 **Note:** If a Tween is paused and not bound to any node, it will exist indefinitely until manually started or invalidated. If you lose a reference to such Tween, you can retrieve it using [`SceneTree.get_processed_tweens`](#class_scenetree_method_get_processed_tweens).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_tween_method_play"></div>

`void` **play** ( )<div id="class_tween_method_play"></div>

Resumes a paused or stopped **Tween**.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_tween_method_set_ease"></div>

[`Tween`](class_tween.md) **set_ease** ( ease: [EaseType](#enum_tween_easetype) )<div id="class_tween_method_set_ease"></div>

Sets the default ease type for [`PropertyTweener`](class_propertytweener.md) s and [`MethodTweener`](class_methodtweener.md) s animated by this **Tween**.

If not specified, the default value is [`EASE_IN_OUT`](#class_tween_constant_ease_in_out).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_tween_method_set_loops"></div>

[`Tween`](class_tween.md) **set_loops** ( loops: [`int`](class_int.md) = 0 )<div id="class_tween_method_set_loops"></div>

Sets the number of times the tweening sequence will be repeated, i.e. `set_loops(2)` will run the animation twice.

Calling this method without arguments will make the **Tween** run infinitely, until either it is killed with [`kill`](#class_tween_method_kill), the **Tween**'s bound node is freed, or all the animated objects have been freed (which makes further animation impossible).

 **Warning:** Make sure to always add some duration/delay when using infinite loops. To prevent the game freezing, 0-duration looped animations (e.g. a single [`CallbackTweener`](class_callbacktweener.md) with no delay) are stopped after a small number of loops, which may produce unexpected results. If a **Tween**'s lifetime depends on some node, always use [`bind_node`](#class_tween_method_bind_node).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_tween_method_set_parallel"></div>

[`Tween`](class_tween.md) **set_parallel** ( parallel: [`bool`](class_bool.md) = true )<div id="class_tween_method_set_parallel"></div>

If `parallel` is `true`, the [`Tweener`](class_tweener.md) s appended after this method will by default run simultaneously, as opposed to sequentially.

 **Note:** Just like with [`parallel`](#class_tween_method_parallel), the tweener added right before this method will also be part of the parallel step.

```

    tween.tween_property(self, "position", Vector2(300, 0), 0.5)
    tween.set_parallel()
    tween.tween_property(self, "modulate", Color.GREEN, 0.5) # Runs together with the position tweener.
```



<!-- rst-class:: classref-item-separator -->

---

<div id="_class_tween_method_set_pause_mode"></div>

[`Tween`](class_tween.md) **set_pause_mode** ( mode: [TweenPauseMode](#enum_tween_tweenpausemode) )<div id="class_tween_method_set_pause_mode"></div>

Determines the behavior of the **Tween** when the [`SceneTree`](class_scenetree.md) is paused. Check [TweenPauseMode](#enum_tween_tweenpausemode) for options.

Default value is [`TWEEN_PAUSE_BOUND`](#class_tween_constant_tween_pause_bound).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_tween_method_set_process_mode"></div>

[`Tween`](class_tween.md) **set_process_mode** ( mode: [TweenProcessMode](#enum_tween_tweenprocessmode) )<div id="class_tween_method_set_process_mode"></div>

Determines whether the **Tween** should run after process frames (see [`Node._process`](#class_node_private_method__process)) or physics frames (see [`Node._physics_process`](#class_node_private_method__physics_process)).

Default value is [`TWEEN_PROCESS_IDLE`](#class_tween_constant_tween_process_idle).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_tween_method_set_speed_scale"></div>

[`Tween`](class_tween.md) **set_speed_scale** ( speed: [`float`](class_float.md) )<div id="class_tween_method_set_speed_scale"></div>

Scales the speed of tweening. This affects all [`Tweener`](class_tweener.md) s and their delays.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_tween_method_set_trans"></div>

[`Tween`](class_tween.md) **set_trans** ( trans: [TransitionType](#enum_tween_transitiontype) )<div id="class_tween_method_set_trans"></div>

Sets the default transition type for [`PropertyTweener`](class_propertytweener.md) s and [`MethodTweener`](class_methodtweener.md) s animated by this **Tween**.

If not specified, the default value is [`TRANS_LINEAR`](#class_tween_constant_trans_linear).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_tween_method_stop"></div>

`void` **stop** ( )<div id="class_tween_method_stop"></div>

Stops the tweening and resets the **Tween** to its initial state. This will not remove any appended [`Tweener`](class_tweener.md) s.

 **Note:** If a Tween is stopped and not bound to any node, it will exist indefinitely until manually started or invalidated. If you lose a reference to such Tween, you can retrieve it using [`SceneTree.get_processed_tweens`](#class_scenetree_method_get_processed_tweens).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_tween_method_tween_callback"></div>

[`CallbackTweener`](class_callbacktweener.md) **tween_callback** ( callback: [`Callable`](class_callable.md) )<div id="class_tween_method_tween_callback"></div>

Creates and appends a [`CallbackTweener`](class_callbacktweener.md). This method can be used to call an arbitrary method in any object. Use [`Callable.bind`](#class_callable_method_bind) to bind additional arguments for the call.

 **Example:** Object that keeps shooting every 1 second:



```gdscript

    var tween = get_tree().create_tween().set_loops()
    tween.tween_callback(shoot).set_delay(1)
```

```csharp

    Tween tween = GetTree().CreateTween().SetLoops();
    tween.TweenCallback(Callable.From(Shoot)).SetDelay(1.0f);
```



 **Example:** Turning a sprite red and then blue, with 2 second delay:



```gdscript

    var tween = get_tree().create_tween()
    tween.tween_callback($Sprite.set_modulate.bind(Color.RED)).set_delay(2)
    tween.tween_callback($Sprite.set_modulate.bind(Color.BLUE)).set_delay(2)
```

```csharp

    Tween tween = GetTree().CreateTween();
    Sprite2D sprite = GetNode<Sprite2D>("Sprite");
    tween.TweenCallback(Callable.From(() => sprite.Modulate = Colors.Red)).SetDelay(2.0f);
    tween.TweenCallback(Callable.From(() => sprite.Modulate = Colors.Blue)).SetDelay(2.0f);
```











<!-- rst-class:: classref-item-separator -->

---

<div id="_class_tween_method_tween_interval"></div>

[`IntervalTweener`](class_intervaltweener.md) **tween_interval** ( time: [`float`](class_float.md) )<div id="class_tween_method_tween_interval"></div>

Creates and appends an [`IntervalTweener`](class_intervaltweener.md). This method can be used to create delays in the tween animation, as an alternative to using the delay in other [`Tweener`](class_tweener.md) s, or when there's no animation (in which case the **Tween** acts as a timer). `time` is the length of the interval, in seconds.

 **Example:** Creating an interval in code execution:



```gdscript

    # ... some code
    await create_tween().tween_interval(2).finished
    # ... more code
```

```csharp

    // ... some code
    await ToSignal(CreateTween().TweenInterval(2.0f), Tween.SignalName.Finished);
    // ... more code
```



 **Example:** Creating an object that moves back and forth and jumps every few seconds:



```gdscript

    var tween = create_tween().set_loops()
    tween.tween_property($Sprite, "position:x", 200.0, 1).as_relative()
    tween.tween_callback(jump)
    tween.tween_interval(2)
    tween.tween_property($Sprite, "position:x", -200.0, 1).as_relative()
    tween.tween_callback(jump)
    tween.tween_interval(2)
```

```csharp

    Tween tween = CreateTween().SetLoops();
    tween.TweenProperty(GetNode("Sprite"), "position:x", 200.0f, 1.0f).AsRelative();
    tween.TweenCallback(Callable.From(Jump));
    tween.TweenInterval(2.0f);
    tween.TweenProperty(GetNode("Sprite"), "position:x", -200.0f, 1.0f).AsRelative();
    tween.TweenCallback(Callable.From(Jump));
    tween.TweenInterval(2.0f);
```











<!-- rst-class:: classref-item-separator -->

---

<div id="_class_tween_method_tween_method"></div>

[`MethodTweener`](class_methodtweener.md) **tween_method** ( method: [`Callable`](class_callable.md), from: [`Variant`](class_variant.md), to: [`Variant`](class_variant.md), duration: [`float`](class_float.md) )<div id="class_tween_method_tween_method"></div>

Creates and appends a [`MethodTweener`](class_methodtweener.md). This method is similar to a combination of [`tween_callback`](#class_tween_method_tween_callback) and [`tween_property`](#class_tween_method_tween_property). It calls a method over time with a tweened value provided as an argument. The value is tweened between `from` and `to` over the time specified by `duration`, in seconds. Use [`Callable.bind`](#class_callable_method_bind) to bind additional arguments for the call. You can use [`MethodTweener.set_ease`](#class_methodtweener_method_set_ease) and [`MethodTweener.set_trans`](#class_methodtweener_method_set_trans) to tweak the easing and transition of the value or [`MethodTweener.set_delay`](#class_methodtweener_method_set_delay) to delay the tweening.

 **Example:** Making a 3D object look from one point to another point:



```gdscript

    var tween = create_tween()
    tween.tween_method(look_at.bind(Vector3.UP), Vector3(-1, 0, -1), Vector3(1, 0, -1), 1) # The look_at() method takes up vector as second argument.
```

```csharp

    Tween tween = CreateTween();
    tween.TweenMethod(Callable.From((Vector3 target) => LookAt(target, Vector3.Up)), new Vector3(-1.0f, 0.0f, -1.0f), new Vector3(1.0f, 0.0f, -1.0f), 1.0f); // Use lambdas to bind additional arguments for the call.
```



 **Example:** Setting the text of a [`Label`](class_label.md), using an intermediate method and after a delay:



```gdscript

    func _ready():
        var tween = create_tween()
        tween.tween_method(set_label_text, 0, 10, 1).set_delay(1)
    
    func set_label_text(value: int):
        $Label.text = "Counting " + str(value)
```

```csharp

    public override void _Ready()
    {
        base._Ready();
    
        Tween tween = CreateTween();
        tween.TweenMethod(Callable.From<int>(SetLabelText), 0.0f, 10.0f, 1.0f).SetDelay(1.0f);
    }
    
    private void SetLabelText(int value)
    {
        GetNode<Label>("Label").Text = $"Counting {value}";
    }
```











<!-- rst-class:: classref-item-separator -->

---

<div id="_class_tween_method_tween_property"></div>

[`PropertyTweener`](class_propertytweener.md) **tween_property** ( object: [`Object`](class_object.md), property: [`NodePath`](class_nodepath.md), final_val: [`Variant`](class_variant.md), duration: [`float`](class_float.md) )<div id="class_tween_method_tween_property"></div>

Creates and appends a [`PropertyTweener`](class_propertytweener.md). This method tweens a `property` of an `object` between an initial value and `final_val` in a span of time equal to `duration`, in seconds. The initial value by default is the property's value at the time the tweening of the [`PropertyTweener`](class_propertytweener.md) starts.

 **Example:** 



```gdscript

    var tween = create_tween()
    tween.tween_property($Sprite, "position", Vector2(100, 200), 1)
    tween.tween_property($Sprite, "position", Vector2(200, 300), 1)
```

```csharp

    Tween tween = CreateTween();
    tween.TweenProperty(GetNode("Sprite"), "position", new Vector2(100.0f, 200.0f), 1.0f);
    tween.TweenProperty(GetNode("Sprite"), "position", new Vector2(200.0f, 300.0f), 1.0f);
```



will move the sprite to position (100, 200) and then to (200, 300). If you use [`PropertyTweener.from`](#class_propertytweener_method_from) or [`PropertyTweener.from_current`](#class_propertytweener_method_from_current), the starting position will be overwritten by the given value instead. See other methods in [`PropertyTweener`](class_propertytweener.md) to see how the tweening can be tweaked further.

 **Note:** You can find the correct property name by hovering over the property in the Inspector. You can also provide the components of a property directly by using `"property:component"` (eg. `position:x`), where it would only apply to that particular component.

 **Example:** Moving an object twice from the same position, with different transition types:



```gdscript

    var tween = create_tween()
    tween.tween_property($Sprite, "position", Vector2.RIGHT * 300, 1).as_relative().set_trans(Tween.TRANS_SINE)
    tween.tween_property($Sprite, "position", Vector2.RIGHT * 300, 1).as_relative().from_current().set_trans(Tween.TRANS_EXPO)
```

```csharp

    Tween tween = CreateTween();
    tween.TweenProperty(GetNode("Sprite"), "position", Vector2.Right * 300.0f, 1.0f).AsRelative().SetTrans(Tween.TransitionType.Sine);
    tween.TweenProperty(GetNode("Sprite"), "position", Vector2.Right * 300.0f, 1.0f).AsRelative().FromCurrent().SetTrans(Tween.TransitionType.Expo);
```











[^virtual]: 本方法通常需要用户覆盖才能生效。
[^const]: 本方法无副作用，不会修改该实例的任何成员变量。
[^vararg]: 本方法除了能接受在此处描述的参数外，还能够继续接受任意数量的参数。
[^constructor]: 本方法用于构造某个类型。
[^static]: 调用本方法无需实例，可直接使用类名进行调用。
[^operator]: 本方法描述的是使用本类型作为左操作数的有效运算符。
[^bitfield]: 这个值是由下列位标志构成位掩码的整数。
[^void]: 无返回值。
