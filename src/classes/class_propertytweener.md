<!-- ⚠ 请勿编辑本文件 ⚠ -->
<!-- 本文档使用脚本从 WeDot 引擎源码仓库生成。 -->
<!-- 生成脚本：https://github.com/WeDot-Engine/WeDot/tree/4.3/doc/tools/make_md.py； -->
<!-- 原文件：https://github.com/WeDot-Engine/WeDot/tree/4.3/doc/classes/PropertyTweener.xml。 -->

<div id="_class_propertytweener"></div>

# PropertyTweener

**继承：** [`Tweener`](class_tweener.md) **<** [`RefCounted`](class_refcounted.md) **<** [`Object`](class_object.md)

Interpolates an [`Object`](class_object.md)'s property over time.

## 描述

**PropertyTweener** is used to interpolate a property in an object. See [`Tween.tween_property`](#class_tween_method_tween_property) for more usage information.

 **Note:** [`Tween.tween_property`](#class_tween_method_tween_property) is the only correct way to create **PropertyTweener**. Any **PropertyTweener** created manually will not function correctly.

## 方法

| [`PropertyTweener`](class_propertytweener.md) | [`as_relative`](#class_propertytweener_method_as_relative) ( )                                                                              |
| [`PropertyTweener`](class_propertytweener.md) | [`from`](#class_propertytweener_method_from) ( value: [`Variant`](class_variant.md) )                                                       |
| [`PropertyTweener`](class_propertytweener.md) | [`from_current`](#class_propertytweener_method_from_current) ( )                                                                            |
| [`PropertyTweener`](class_propertytweener.md) | [`set_custom_interpolator`](#class_propertytweener_method_set_custom_interpolator) ( interpolator_method: [`Callable`](class_callable.md) ) |
| [`PropertyTweener`](class_propertytweener.md) | [`set_delay`](#class_propertytweener_method_set_delay) ( delay: [`float`](class_float.md) )                                                 |
| [`PropertyTweener`](class_propertytweener.md) | [`set_ease`](#class_propertytweener_method_set_ease) ( ease: [EaseType](#enum_tween_easetype) )                                             |
| [`PropertyTweener`](class_propertytweener.md) | [`set_trans`](#class_propertytweener_method_set_trans) ( trans: [TransitionType](#enum_tween_transitiontype) )                              |

<!-- rst-class:: classref-section-separator -->

---

## 方法说明

<div id="_class_propertytweener_method_as_relative"></div>

[`PropertyTweener`](class_propertytweener.md) **as_relative** ( )<div id="class_propertytweener_method_as_relative"></div>

When called, the final value will be used as a relative value instead.

 **Example:** 

```

    var tween = get_tree().create_tween()
    tween.tween_property(self, "position", Vector2.RIGHT * 100, 1).as_relative() #the node will move by 100 pixels to the right
```



<!-- rst-class:: classref-item-separator -->

---

<div id="_class_propertytweener_method_from"></div>

[`PropertyTweener`](class_propertytweener.md) **from** ( value: [`Variant`](class_variant.md) )<div id="class_propertytweener_method_from"></div>

Sets a custom initial value to the **PropertyTweener**.

 **Example:** 

```

    var tween = get_tree().create_tween()
    tween.tween_property(self, "position", Vector2(200, 100), 1).from(Vector2(100, 100)) #this will move the node from position (100, 100) to (200, 100)
```



<!-- rst-class:: classref-item-separator -->

---

<div id="_class_propertytweener_method_from_current"></div>

[`PropertyTweener`](class_propertytweener.md) **from_current** ( )<div id="class_propertytweener_method_from_current"></div>

Makes the **PropertyTweener** use the current property value (i.e. at the time of creating this **PropertyTweener**) as a starting point. This is equivalent of using [`from`](#class_propertytweener_method_from) with the current value. These two calls will do the same:

```

    tween.tween_property(self, "position", Vector2(200, 100), 1).from(position)
    tween.tween_property(self, "position", Vector2(200, 100), 1).from_current()
```



<!-- rst-class:: classref-item-separator -->

---

<div id="_class_propertytweener_method_set_custom_interpolator"></div>

[`PropertyTweener`](class_propertytweener.md) **set_custom_interpolator** ( interpolator_method: [`Callable`](class_callable.md) )<div id="class_propertytweener_method_set_custom_interpolator"></div>

Allows interpolating the value with a custom easing function. The provided `interpolator_method` will be called with a value ranging from `0.0` to `1.0` and is expected to return a value within the same range (values outside the range can be used for overshoot). The return value of the method is then used for interpolation between initial and final value. Note that the parameter passed to the method is still subject to the tweener's own easing.

 **Example:** 

```

    @export var curve: Curve
    
    func _ready():
        var tween = create_tween()
        # Interpolate the value using a custom curve.
        tween.tween_property(self, "position:x", 300, 1).as_relative().set_custom_interpolator(tween_curve)
    
    func tween_curve(v):
        return curve.sample_baked(v)
```



<!-- rst-class:: classref-item-separator -->

---

<div id="_class_propertytweener_method_set_delay"></div>

[`PropertyTweener`](class_propertytweener.md) **set_delay** ( delay: [`float`](class_float.md) )<div id="class_propertytweener_method_set_delay"></div>

Sets the time in seconds after which the **PropertyTweener** will start interpolating. By default there's no delay.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_propertytweener_method_set_ease"></div>

[`PropertyTweener`](class_propertytweener.md) **set_ease** ( ease: [EaseType](#enum_tween_easetype) )<div id="class_propertytweener_method_set_ease"></div>

Sets the type of used easing from [EaseType](#enum_tween_easetype). If not set, the default easing is used from the [`Tween`](class_tween.md) that contains this Tweener.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_propertytweener_method_set_trans"></div>

[`PropertyTweener`](class_propertytweener.md) **set_trans** ( trans: [TransitionType](#enum_tween_transitiontype) )<div id="class_propertytweener_method_set_trans"></div>

Sets the type of used transition from [TransitionType](#enum_tween_transitiontype). If not set, the default transition is used from the [`Tween`](class_tween.md) that contains this Tweener.

[^virtual]: 本方法通常需要用户覆盖才能生效。
[^const]: 本方法无副作用，不会修改该实例的任何成员变量。
[^vararg]: 本方法除了能接受在此处描述的参数外，还能够继续接受任意数量的参数。
[^constructor]: 本方法用于构造某个类型。
[^static]: 调用本方法无需实例，可直接使用类名进行调用。
[^operator]: 本方法描述的是使用本类型作为左操作数的有效运算符。
[^bitfield]: 这个值是由下列位标志构成位掩码的整数。
[^void]: 无返回值。
