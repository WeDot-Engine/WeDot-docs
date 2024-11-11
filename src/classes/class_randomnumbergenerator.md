<!-- ⚠ 请勿编辑本文件 ⚠ -->
<!-- 本文档使用脚本从 WeDot 引擎源码仓库生成。 -->
<!-- 生成脚本：https://github.com/WeDot-Engine/WeDot/tree/master/doc/tools/make_md.py； -->
<!-- 原文件：https://github.com/WeDot-Engine/WeDot/tree/master/doc/classes/RandomNumberGenerator.xml。 -->

<div id="_class_randomnumbergenerator"></div>

# RandomNumberGenerator

**继承：** [`RefCounted`](class_refcounted.md) **<** [`Object`](class_object.md)

Provides methods for generating pseudo-random numbers.

## 描述

RandomNumberGenerator is a class for generating pseudo-random numbers. It currently uses [*PCG32*](https://www.pcg-random.org/).

 **Note:** The underlying algorithm is an implementation detail and should not be depended upon.

To generate a random float number (within a given range) based on a time-dependent seed:

```

    var rng = RandomNumberGenerator.new()
    func _ready():
        var my_random_number = rng.randf_range(-10.0, 10.0)
```



## 属性

|||
|:-:|:--|
| [`int`](class_int.md) | [`seed`](class_randomnumbergenerator.md#class_randomnumbergenerator_property_seed)   | ``0`` |
| [`int`](class_int.md) | [`state`](class_randomnumbergenerator.md#class_randomnumbergenerator_property_state) | ``0`` |

## 方法

|||
|:-:|:--|
| [`int`](class_int.md)     | [`rand_weighted`](class_randomnumbergenerator.md#class_randomnumbergenerator_method_rand_weighted) ( weights: [`PackedFloat32Array`](class_packedfloat32array.md) )        |
| [`float`](class_float.md) | [`randf`](class_randomnumbergenerator.md#class_randomnumbergenerator_method_randf) ( )                                                                                     |
| [`float`](class_float.md) | [`randf_range`](class_randomnumbergenerator.md#class_randomnumbergenerator_method_randf_range) ( from: [`float`](class_float.md), to: [`float`](class_float.md) )          |
| [`float`](class_float.md) | [`randfn`](class_randomnumbergenerator.md#class_randomnumbergenerator_method_randfn) ( mean: [`float`](class_float.md) = 0.0, deviation: [`float`](class_float.md) = 1.0 ) |
| [`int`](class_int.md)     | [`randi`](class_randomnumbergenerator.md#class_randomnumbergenerator_method_randi) ( )                                                                                     |
| [`int`](class_int.md)     | [`randi_range`](class_randomnumbergenerator.md#class_randomnumbergenerator_method_randi_range) ( from: [`int`](class_int.md), to: [`int`](class_int.md) )                  |
| `void`                    | [`randomize`](class_randomnumbergenerator.md#class_randomnumbergenerator_method_randomize) ( )                                                                             |

<!-- rst-class:: classref-section-separator -->

---

## 属性说明

<div id="_class_randomnumbergenerator_property_seed"></div>

[`int`](class_int.md) **seed** = ``0`` <div id="class_randomnumbergenerator_property_seed"></div>

- `void` **set_seed** ( value: [`int`](class_int.md) )
- [`int`](class_int.md) **get_seed** ( )

Initializes the random number generator state based on the given seed value. A given seed will give a reproducible sequence of pseudo-random numbers.

 **Note:** The RNG does not have an avalanche effect, and can output similar random streams given similar seeds. Consider using a hash function to improve your seed quality if they're sourced externally.

 **Note:** Setting this property produces a side effect of changing the internal [`state`](class_randomnumbergenerator.md#class_randomnumbergenerator_property_state), so make sure to initialize the seed *before* modifying the [`state`](class_randomnumbergenerator.md#class_randomnumbergenerator_property_state):

 **Note:** The default value of this property is pseudo-random, and changes when calling [`randomize`](class_randomnumbergenerator.md#class_randomnumbergenerator_method_randomize). The `0` value documented here is a placeholder, and not the actual default seed.

```

    var rng = RandomNumberGenerator.new()
    rng.seed = hash("Godot")
    rng.state = 100 # Restore to some previously saved state.
```



<!-- rst-class:: classref-item-separator -->

---

<div id="_class_randomnumbergenerator_property_state"></div>

[`int`](class_int.md) **state** = ``0`` <div id="class_randomnumbergenerator_property_state"></div>

- `void` **set_state** ( value: [`int`](class_int.md) )
- [`int`](class_int.md) **get_state** ( )

The current state of the random number generator. Save and restore this property to restore the generator to a previous state:

```

    var rng = RandomNumberGenerator.new()
    print(rng.randf())
    var saved_state = rng.state # Store current state.
    print(rng.randf()) # Advance internal state.
    rng.state = saved_state # Restore the state.
    print(rng.randf()) # Prints the same value as in previous.
```

 **Note:** Do not set state to arbitrary values, since the random number generator requires the state to have certain qualities to behave properly. It should only be set to values that came from the state property itself. To initialize the random number generator with arbitrary input, use [`seed`](class_randomnumbergenerator.md#class_randomnumbergenerator_property_seed) instead.

 **Note:** The default value of this property is pseudo-random, and changes when calling [`randomize`](class_randomnumbergenerator.md#class_randomnumbergenerator_method_randomize). The `0` value documented here is a placeholder, and not the actual default seed.



<!-- rst-class:: classref-section-separator -->

---

## 方法说明

<div id="_class_randomnumbergenerator_method_rand_weighted"></div>

[`int`](class_int.md) **rand_weighted** ( weights: [`PackedFloat32Array`](class_packedfloat32array.md) )<div id="class_randomnumbergenerator_method_rand_weighted"></div>

Returns a random index with non-uniform weights. Prints an error and returns `-1` if the array is empty.



```gdscript

    var rng = RandomNumberGenerator.new()
    
    var my_array = ["one", "two", "three", "four"]
    var weights = PackedFloat32Array([0.5, 1, 1, 2])
    
    # Prints one of the four elements in `my_array`.
    # It is more likely to print "four", and less likely to print "one".
    print(my_array[rng.rand_weighted(weights)])
```





<!-- rst-class:: classref-item-separator -->

---

<div id="_class_randomnumbergenerator_method_randf"></div>

[`float`](class_float.md) **randf** ( )<div id="class_randomnumbergenerator_method_randf"></div>

Returns a pseudo-random float between `0.0` and `1.0` (inclusive).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_randomnumbergenerator_method_randf_range"></div>

[`float`](class_float.md) **randf_range** ( from: [`float`](class_float.md), to: [`float`](class_float.md) )<div id="class_randomnumbergenerator_method_randf_range"></div>

Returns a pseudo-random float between `from` and `to` (inclusive).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_randomnumbergenerator_method_randfn"></div>

[`float`](class_float.md) **randfn** ( mean: [`float`](class_float.md) = 0.0, deviation: [`float`](class_float.md) = 1.0 )<div id="class_randomnumbergenerator_method_randfn"></div>

Returns a [*normally-distributed*](https://en.wikipedia.org/wiki/Normal_distribution), pseudo-random floating-point number from the specified `mean` and a standard `deviation`. This is also known as a Gaussian distribution.

 **Note:** This method uses the [*Box-Muller transform*](https://en.wikipedia.org/wiki/Box%E2%80%93Muller_transform) algorithm.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_randomnumbergenerator_method_randi"></div>

[`int`](class_int.md) **randi** ( )<div id="class_randomnumbergenerator_method_randi"></div>

Returns a pseudo-random 32-bit unsigned integer between `0` and `4294967295` (inclusive).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_randomnumbergenerator_method_randi_range"></div>

[`int`](class_int.md) **randi_range** ( from: [`int`](class_int.md), to: [`int`](class_int.md) )<div id="class_randomnumbergenerator_method_randi_range"></div>

Returns a pseudo-random 32-bit signed integer between `from` and `to` (inclusive).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_randomnumbergenerator_method_randomize"></div>

`void` **randomize** ( )<div id="class_randomnumbergenerator_method_randomize"></div>

Sets up a time-based seed for this **RandomNumberGenerator** instance. Unlike the [`@GlobalScope`](class_@globalscope.md) random number generation functions, different **RandomNumberGenerator** instances can use different seeds.

[^virtual]: 本方法通常需要用户覆盖才能生效。
[^const]: 本方法无副作用，不会修改该实例的任何成员变量。
[^vararg]: 本方法除了能接受在此处描述的参数外，还能够继续接受任意数量的参数。
[^constructor]: 本方法用于构造某个类型。
[^static]: 调用本方法无需实例，可直接使用类名进行调用。
[^operator]: 本方法描述的是使用本类型作为左操作数的有效运算符。
[^bitfield]: 这个值是由下列位标志构成位掩码的整数。
[^void]: 无返回值。
