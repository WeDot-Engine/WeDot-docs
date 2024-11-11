<!-- ⚠ 请勿编辑本文件 ⚠ -->
<!-- 本文档使用脚本从 WeDot 引擎源码仓库生成。 -->
<!-- 生成脚本：https://github.com/WeDot-Engine/WeDot/tree/master/doc/tools/make_md.py； -->
<!-- 原文件：https://github.com/WeDot-Engine/WeDot/tree/master/doc/classes/CallbackTweener.xml。 -->

<div id="_class_callbacktweener"></div>

# CallbackTweener

**继承：** [`Tweener`](class_tweener.md) **<** [`RefCounted`](class_refcounted.md) **<** [`Object`](class_object.md)

Calls the specified method after optional delay.

## 描述

**CallbackTweener** is used to call a method in a tweening sequence. See [`Tween.tween_callback`](class_tween.md#class_tween_method_tween_callback) for more usage information.

The tweener will finish automatically if the callback's target object is freed.

 **Note:** [`Tween.tween_callback`](class_tween.md#class_tween_method_tween_callback) is the only correct way to create **CallbackTweener**. Any **CallbackTweener** created manually will not function correctly.

## 方法

|||
|:-:|:--|
| [`CallbackTweener`](class_callbacktweener.md) | [`set_delay`](class_callbacktweener.md#class_callbacktweener_method_set_delay) ( delay: [`float`](class_float.md) ) |

<!-- rst-class:: classref-section-separator -->

---

## 方法说明

<div id="_class_callbacktweener_method_set_delay"></div>

[`CallbackTweener`](class_callbacktweener.md) **set_delay** ( delay: [`float`](class_float.md) )<div id="class_callbacktweener_method_set_delay"></div>

Makes the callback call delayed by given time in seconds.

 **Example:** Call [`Node.queue_free`](class_node.md#class_node_method_queue_free) after 2 seconds.

```

    var tween = get_tree().create_tween()
    tween.tween_callback(queue_free).set_delay(2)
```



[^virtual]: 本方法通常需要用户覆盖才能生效。
[^const]: 本方法无副作用，不会修改该实例的任何成员变量。
[^vararg]: 本方法除了能接受在此处描述的参数外，还能够继续接受任意数量的参数。
[^constructor]: 本方法用于构造某个类型。
[^static]: 调用本方法无需实例，可直接使用类名进行调用。
[^operator]: 本方法描述的是使用本类型作为左操作数的有效运算符。
[^bitfield]: 这个值是由下列位标志构成位掩码的整数。
[^void]: 无返回值。
