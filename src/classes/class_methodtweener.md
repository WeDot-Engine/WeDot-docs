<!-- ⚠ 请勿编辑本文件 ⚠ -->
<!-- 本文档使用脚本从 WeDot 引擎源码仓库生成。 -->
<!-- 生成脚本：https://github.com/WeDot-Engine/WeDot/tree/4.3/doc/tools/make_md.py； -->
<!-- 原文件：https://github.com/WeDot-Engine/WeDot/tree/4.3/doc/classes/MethodTweener.xml。 -->

<div id="_class_methodtweener"></div>

# MethodTweener

**继承：** [`Tweener`](class_tweener.md) **<** [`RefCounted`](class_refcounted.md) **<** [`Object`](class_object.md)

Interpolates an abstract value and supplies it to a method called over time.

## 描述

**MethodTweener** is similar to a combination of [`CallbackTweener`](class_callbacktweener.md) and [`PropertyTweener`](class_propertytweener.md). It calls a method providing an interpolated value as a parameter. See [`Tween.tween_method`](#class_tween_method_tween_method) for more usage information.

The tweener will finish automatically if the callback's target object is freed.

 **Note:** [`Tween.tween_method`](#class_tween_method_tween_method) is the only correct way to create **MethodTweener**. Any **MethodTweener** created manually will not function correctly.

## 方法

| [`MethodTweener`](class_methodtweener.md) | [`set_delay`](#class_methodtweener_method_set_delay) ( delay: [`float`](class_float.md) )                    |
| [`MethodTweener`](class_methodtweener.md) | [`set_ease`](#class_methodtweener_method_set_ease) ( ease: [EaseType](#enum_tween_easetype) )                |
| [`MethodTweener`](class_methodtweener.md) | [`set_trans`](#class_methodtweener_method_set_trans) ( trans: [TransitionType](#enum_tween_transitiontype) ) |

<!-- rst-class:: classref-section-separator -->

---

## 方法说明

<div id="_class_methodtweener_method_set_delay"></div>

[`MethodTweener`](class_methodtweener.md) **set_delay** ( delay: [`float`](class_float.md) )<div id="class_methodtweener_method_set_delay"></div>

Sets the time in seconds after which the **MethodTweener** will start interpolating. By default there's no delay.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_methodtweener_method_set_ease"></div>

[`MethodTweener`](class_methodtweener.md) **set_ease** ( ease: [EaseType](#enum_tween_easetype) )<div id="class_methodtweener_method_set_ease"></div>

Sets the type of used easing from [EaseType](#enum_tween_easetype). If not set, the default easing is used from the [`Tween`](class_tween.md) that contains this Tweener.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_methodtweener_method_set_trans"></div>

[`MethodTweener`](class_methodtweener.md) **set_trans** ( trans: [TransitionType](#enum_tween_transitiontype) )<div id="class_methodtweener_method_set_trans"></div>

Sets the type of used transition from [TransitionType](#enum_tween_transitiontype). If not set, the default transition is used from the [`Tween`](class_tween.md) that contains this Tweener.

[^virtual]: 本方法通常需要用户覆盖才能生效。
[^const]: 本方法无副作用，不会修改该实例的任何成员变量。
[^vararg]: 本方法除了能接受在此处描述的参数外，还能够继续接受任意数量的参数。
[^constructor]: 本方法用于构造某个类型。
[^static]: 调用本方法无需实例，可直接使用类名进行调用。
[^operator]: 本方法描述的是使用本类型作为左操作数的有效运算符。
[^bitfield]: 这个值是由下列位标志构成位掩码的整数。
[^void]: 无返回值。
