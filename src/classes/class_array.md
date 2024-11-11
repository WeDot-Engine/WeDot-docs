<!-- ⚠ 请勿编辑本文件 ⚠ -->
<!-- 本文档使用脚本从 WeDot 引擎源码仓库生成。 -->
<!-- 生成脚本：https://github.com/WeDot-Engine/WeDot/tree/master/doc/tools/make_md.py； -->
<!-- 原文件：https://github.com/WeDot-Engine/WeDot/tree/master/doc/classes/Array.xml。 -->

<div id="_class_array"></div>

# Array

A built-in data structure that holds a sequence of elements.

## 描述

An array data structure that can contain a sequence of elements of any [`Variant`](class_variant.md) type. Elements are accessed by a numerical index starting at `0`. Negative indices are used to count from the back (`-1` is the last element, `-2` is the second to last, etc.).



```gdscript

    var array = ["First", 2, 3, "Last"]
    print(array[0])  # Prints "First"
    print(array[2])  # Prints 3
    print(array[-1]) # Prints "Last"
    
    array[1] = "Second"
    print(array[1])  # Prints "Second"
    print(array[-3]) # Prints "Second"
```

```csharp

    var array = new Godot.Collections.Array{"First", 2, 3, "Last"};
    GD.Print(array[0]); // Prints "First"
    GD.Print(array[2]); // Prints 3
    GD.Print(array[array.Count - 1]); // Prints "Last"
    
    array[2] = "Second";
    GD.Print(array[1]); // Prints "Second"
    GD.Print(array[array.Count - 3]); // Prints "Second"
```



 **Note:** Arrays are always passed by **reference**. To get a copy of an array that can be modified independently of the original array, use [`duplicate`](class_array.md#class_array_method_duplicate).

 **Note:** Erasing elements while iterating over arrays is **not** supported and will result in unpredictable behavior.

 **Differences between packed arrays, typed arrays, and untyped arrays:** Packed arrays are generally faster to iterate on and modify compared to a typed array of the same type (e.g. [`PackedInt64Array`](class_packedint64array.md) versus `Array[int]`). Also, packed arrays consume less memory. As a downside, packed arrays are less flexible as they don't offer as many convenience methods such as [`map`](class_array.md#class_array_method_map). Typed arrays are in turn faster to iterate on and modify than untyped arrays.





通过 C# 使用该 API 时会有显著不同，详见 :ref:`doc_c_sharp_differences`\ 。

## 构造函数

|||
|:-:|:--|
| [`Array`](class_array.md) | [`Array`](class_array.md#class_array_constructor_array) ( )                                                                                                                                                      |
| [`Array`](class_array.md) | [`Array`](class_array.md#class_array_constructor_array) ( base: [`Array`](class_array.md), type: [`int`](class_int.md), class_name: [`StringName`](class_stringname.md), script: [`Variant`](class_variant.md) ) |
| [`Array`](class_array.md) | [`Array`](class_array.md#class_array_constructor_array) ( from: [`Array`](class_array.md) )                                                                                                                      |
| [`Array`](class_array.md) | [`Array`](class_array.md#class_array_constructor_array) ( from: [`PackedByteArray`](class_packedbytearray.md) )                                                                                                  |
| [`Array`](class_array.md) | [`Array`](class_array.md#class_array_constructor_array) ( from: [`PackedColorArray`](class_packedcolorarray.md) )                                                                                                |
| [`Array`](class_array.md) | [`Array`](class_array.md#class_array_constructor_array) ( from: [`PackedFloat32Array`](class_packedfloat32array.md) )                                                                                            |
| [`Array`](class_array.md) | [`Array`](class_array.md#class_array_constructor_array) ( from: [`PackedFloat64Array`](class_packedfloat64array.md) )                                                                                            |
| [`Array`](class_array.md) | [`Array`](class_array.md#class_array_constructor_array) ( from: [`PackedInt32Array`](class_packedint32array.md) )                                                                                                |
| [`Array`](class_array.md) | [`Array`](class_array.md#class_array_constructor_array) ( from: [`PackedInt64Array`](class_packedint64array.md) )                                                                                                |
| [`Array`](class_array.md) | [`Array`](class_array.md#class_array_constructor_array) ( from: [`PackedStringArray`](class_packedstringarray.md) )                                                                                              |
| [`Array`](class_array.md) | [`Array`](class_array.md#class_array_constructor_array) ( from: [`PackedVector2Array`](class_packedvector2array.md) )                                                                                            |
| [`Array`](class_array.md) | [`Array`](class_array.md#class_array_constructor_array) ( from: [`PackedVector3Array`](class_packedvector3array.md) )                                                                                            |
| [`Array`](class_array.md) | [`Array`](class_array.md#class_array_constructor_array) ( from: [`PackedVector4Array`](class_packedvector4array.md) )                                                                                            |

## 方法

|||
|:-:|:--|
| [`bool`](class_bool.md)             | [`all`](class_array.md#class_array_method_all) ( method: [`Callable`](class_callable.md) ) const[^const]                                                                                                           |
| [`bool`](class_bool.md)             | [`any`](class_array.md#class_array_method_any) ( method: [`Callable`](class_callable.md) ) const[^const]                                                                                                           |
| `void`                              | [`append`](class_array.md#class_array_method_append) ( value: [`Variant`](class_variant.md) )                                                                                                                      |
| `void`                              | [`append_array`](class_array.md#class_array_method_append_array) ( array: [`Array`](class_array.md) )                                                                                                              |
| `void`                              | [`assign`](class_array.md#class_array_method_assign) ( array: [`Array`](class_array.md) )                                                                                                                          |
| [`Variant`](class_variant.md)       | [`back`](class_array.md#class_array_method_back) ( ) const[^const]                                                                                                                                                 |
| [`int`](class_int.md)               | [`bsearch`](class_array.md#class_array_method_bsearch) ( value: [`Variant`](class_variant.md), before: [`bool`](class_bool.md) = true ) const[^const]                                                              |
| [`int`](class_int.md)               | [`bsearch_custom`](class_array.md#class_array_method_bsearch_custom) ( value: [`Variant`](class_variant.md), func: [`Callable`](class_callable.md), before: [`bool`](class_bool.md) = true ) const[^const]         |
| `void`                              | [`clear`](class_array.md#class_array_method_clear) ( )                                                                                                                                                             |
| [`int`](class_int.md)               | [`count`](class_array.md#class_array_method_count) ( value: [`Variant`](class_variant.md) ) const[^const]                                                                                                          |
| [`Array`](class_array.md)           | [`duplicate`](class_array.md#class_array_method_duplicate) ( deep: [`bool`](class_bool.md) = false ) const[^const]                                                                                                 |
| `void`                              | [`erase`](class_array.md#class_array_method_erase) ( value: [`Variant`](class_variant.md) )                                                                                                                        |
| `void`                              | [`fill`](class_array.md#class_array_method_fill) ( value: [`Variant`](class_variant.md) )                                                                                                                          |
| [`Array`](class_array.md)           | [`filter`](class_array.md#class_array_method_filter) ( method: [`Callable`](class_callable.md) ) const[^const]                                                                                                     |
| [`int`](class_int.md)               | [`find`](class_array.md#class_array_method_find) ( what: [`Variant`](class_variant.md), from: [`int`](class_int.md) = 0 ) const[^const]                                                                            |
| [`int`](class_int.md)               | [`find_custom`](class_array.md#class_array_method_find_custom) ( method: [`Callable`](class_callable.md), from: [`int`](class_int.md) = 0 ) const[^const]                                                          |
| [`Variant`](class_variant.md)       | [`front`](class_array.md#class_array_method_front) ( ) const[^const]                                                                                                                                               |
| [`Variant`](class_variant.md)       | [`get`](class_array.md#class_array_method_get) ( index: [`int`](class_int.md) ) const[^const]                                                                                                                      |
| [`int`](class_int.md)               | [`get_typed_builtin`](class_array.md#class_array_method_get_typed_builtin) ( ) const[^const]                                                                                                                       |
| [`StringName`](class_stringname.md) | [`get_typed_class_name`](class_array.md#class_array_method_get_typed_class_name) ( ) const[^const]                                                                                                                 |
| [`Variant`](class_variant.md)       | [`get_typed_script`](class_array.md#class_array_method_get_typed_script) ( ) const[^const]                                                                                                                         |
| [`bool`](class_bool.md)             | [`has`](class_array.md#class_array_method_has) ( value: [`Variant`](class_variant.md) ) const[^const]                                                                                                              |
| [`int`](class_int.md)               | [`hash`](class_array.md#class_array_method_hash) ( ) const[^const]                                                                                                                                                 |
| [`int`](class_int.md)               | [`insert`](class_array.md#class_array_method_insert) ( position: [`int`](class_int.md), value: [`Variant`](class_variant.md) )                                                                                     |
| [`bool`](class_bool.md)             | [`is_empty`](class_array.md#class_array_method_is_empty) ( ) const[^const]                                                                                                                                         |
| [`bool`](class_bool.md)             | [`is_read_only`](class_array.md#class_array_method_is_read_only) ( ) const[^const]                                                                                                                                 |
| [`bool`](class_bool.md)             | [`is_same_typed`](class_array.md#class_array_method_is_same_typed) ( array: [`Array`](class_array.md) ) const[^const]                                                                                              |
| [`bool`](class_bool.md)             | [`is_typed`](class_array.md#class_array_method_is_typed) ( ) const[^const]                                                                                                                                         |
| `void`                              | [`make_read_only`](class_array.md#class_array_method_make_read_only) ( )                                                                                                                                           |
| [`Array`](class_array.md)           | [`map`](class_array.md#class_array_method_map) ( method: [`Callable`](class_callable.md) ) const[^const]                                                                                                           |
| [`Variant`](class_variant.md)       | [`max`](class_array.md#class_array_method_max) ( ) const[^const]                                                                                                                                                   |
| [`Variant`](class_variant.md)       | [`min`](class_array.md#class_array_method_min) ( ) const[^const]                                                                                                                                                   |
| [`Variant`](class_variant.md)       | [`pick_random`](class_array.md#class_array_method_pick_random) ( ) const[^const]                                                                                                                                   |
| [`Variant`](class_variant.md)       | [`pop_at`](class_array.md#class_array_method_pop_at) ( position: [`int`](class_int.md) )                                                                                                                           |
| [`Variant`](class_variant.md)       | [`pop_back`](class_array.md#class_array_method_pop_back) ( )                                                                                                                                                       |
| [`Variant`](class_variant.md)       | [`pop_front`](class_array.md#class_array_method_pop_front) ( )                                                                                                                                                     |
| `void`                              | [`push_back`](class_array.md#class_array_method_push_back) ( value: [`Variant`](class_variant.md) )                                                                                                                |
| `void`                              | [`push_front`](class_array.md#class_array_method_push_front) ( value: [`Variant`](class_variant.md) )                                                                                                              |
| [`Variant`](class_variant.md)       | [`reduce`](class_array.md#class_array_method_reduce) ( method: [`Callable`](class_callable.md), accum: [`Variant`](class_variant.md) = null ) const[^const]                                                        |
| `void`                              | [`remove_at`](class_array.md#class_array_method_remove_at) ( position: [`int`](class_int.md) )                                                                                                                     |
| [`int`](class_int.md)               | [`resize`](class_array.md#class_array_method_resize) ( size: [`int`](class_int.md) )                                                                                                                               |
| `void`                              | [`reverse`](class_array.md#class_array_method_reverse) ( )                                                                                                                                                         |
| [`int`](class_int.md)               | [`rfind`](class_array.md#class_array_method_rfind) ( what: [`Variant`](class_variant.md), from: [`int`](class_int.md) = -1 ) const[^const]                                                                         |
| [`int`](class_int.md)               | [`rfind_custom`](class_array.md#class_array_method_rfind_custom) ( method: [`Callable`](class_callable.md), from: [`int`](class_int.md) = -1 ) const[^const]                                                       |
| `void`                              | [`set`](class_array.md#class_array_method_set) ( index: [`int`](class_int.md), value: [`Variant`](class_variant.md) )                                                                                              |
| `void`                              | [`shuffle`](class_array.md#class_array_method_shuffle) ( )                                                                                                                                                         |
| [`int`](class_int.md)               | [`size`](class_array.md#class_array_method_size) ( ) const[^const]                                                                                                                                                 |
| [`Array`](class_array.md)           | [`slice`](class_array.md#class_array_method_slice) ( begin: [`int`](class_int.md), end: [`int`](class_int.md) = 2147483647, step: [`int`](class_int.md) = 1, deep: [`bool`](class_bool.md) = false ) const[^const] |
| `void`                              | [`sort`](class_array.md#class_array_method_sort) ( )                                                                                                                                                               |
| `void`                              | [`sort_custom`](class_array.md#class_array_method_sort_custom) ( func: [`Callable`](class_callable.md) )                                                                                                           |

## 运算符

|||
|:-:|:--|
| [`bool`](class_bool.md)       | [`operator !=`](class_Array.md#operator_neq_Array) ( right: [`Array`](class_array.md) ) |
| [`Array`](class_array.md)     | [`operator +`](class_Array.md#operator_sum_Array) ( right: [`Array`](class_array.md) )  |
| [`bool`](class_bool.md)       | [`operator <`](class_Array.md#operator_lt_Array) ( right: [`Array`](class_array.md) )   |
| [`bool`](class_bool.md)       | [`operator <=`](class_Array.md#operator_lte_Array) ( right: [`Array`](class_array.md) ) |
| [`bool`](class_bool.md)       | [`operator ==`](class_Array.md#operator_eq_Array) ( right: [`Array`](class_array.md) )  |
| [`bool`](class_bool.md)       | [`operator >`](class_Array.md#operator_gt_Array) ( right: [`Array`](class_array.md) )   |
| [`bool`](class_bool.md)       | [`operator >=`](class_Array.md#operator_gte_Array) ( right: [`Array`](class_array.md) ) |
| [`Variant`](class_variant.md) | [`operator []`](class_Array.md#operator_idx_int) ( index: [`int`](class_int.md) )       |

<!-- rst-class:: classref-section-separator -->

---

## 构造函数说明

<div id="_class_array_constructor_array"></div>

[`Array`](class_array.md) **Array** ( )<div id="class_array_constructor_array"></div>

Constructs an empty **Array**.

<!-- rst-class:: classref-item-separator -->

---

[`Array`](class_array.md) **Array** ( base: [`Array`](class_array.md), type: [`int`](class_int.md), class_name: [`StringName`](class_stringname.md), script: [`Variant`](class_variant.md) )

Creates a typed array from the `base` array. A typed array can only contain elements of the given type, or that inherit from the given class, as described by this constructor's parameters:

- `type` is the built-in [`Variant`](class_variant.md) type, as one the [Variant.Type](#enum_@globalscope_variant.type) constants.

- `class_name` is the built-in class name (see [`Object.get_class`](class_object.md#class_object_method_get_class)).

- `script` is the associated script. It must be a [`Script`](class_script.md) instance or `null`.

If `type` is not [`@GlobalScope.TYPE_OBJECT`](class_@globalscope.md#class_@globalscope_constant_type_object), `class_name` must be an empty [`StringName`](class_stringname.md) and `script` must be `null`.

```

    class_name Sword
    extends Node
    
    class Stats:
        pass
    
    func _ready():
        var a = Array([], TYPE_INT, "", null)               # Array[int]
        var b = Array([], TYPE_OBJECT, "Node", null)        # Array[Node]
        var c = Array([], TYPE_OBJECT, "Node", Sword)       # Array[Sword]
        var d = Array([], TYPE_OBJECT, "RefCounted", Stats) # Array[Stats]
```

The `base` array's elements are converted when necessary. If this is not possible or `base` is already typed, this constructor fails and returns an empty **Array**.

In GDScript, this constructor is usually not necessary, as it is possible to create a typed array through static typing:

```

    var numbers: Array[float] = []
    var children: Array[Node] = [$Node, $Sprite2D, $RigidBody3D]
    
    var integers: Array[int] = [0.2, 4.5, -2.0]
    print(integers) # Prints [0, 4, -2]
```





<!-- rst-class:: classref-item-separator -->

---

[`Array`](class_array.md) **Array** ( from: [`Array`](class_array.md) )

Returns the same array as `from`. If you need a copy of the array, use [`duplicate`](class_array.md#class_array_method_duplicate).

<!-- rst-class:: classref-item-separator -->

---

[`Array`](class_array.md) **Array** ( from: [`PackedByteArray`](class_packedbytearray.md) )

Constructs an array from a [`PackedByteArray`](class_packedbytearray.md).

<!-- rst-class:: classref-item-separator -->

---

[`Array`](class_array.md) **Array** ( from: [`PackedColorArray`](class_packedcolorarray.md) )

Constructs an array from a [`PackedColorArray`](class_packedcolorarray.md).

<!-- rst-class:: classref-item-separator -->

---

[`Array`](class_array.md) **Array** ( from: [`PackedFloat32Array`](class_packedfloat32array.md) )

Constructs an array from a [`PackedFloat32Array`](class_packedfloat32array.md).

<!-- rst-class:: classref-item-separator -->

---

[`Array`](class_array.md) **Array** ( from: [`PackedFloat64Array`](class_packedfloat64array.md) )

Constructs an array from a [`PackedFloat64Array`](class_packedfloat64array.md).

<!-- rst-class:: classref-item-separator -->

---

[`Array`](class_array.md) **Array** ( from: [`PackedInt32Array`](class_packedint32array.md) )

Constructs an array from a [`PackedInt32Array`](class_packedint32array.md).

<!-- rst-class:: classref-item-separator -->

---

[`Array`](class_array.md) **Array** ( from: [`PackedInt64Array`](class_packedint64array.md) )

Constructs an array from a [`PackedInt64Array`](class_packedint64array.md).

<!-- rst-class:: classref-item-separator -->

---

[`Array`](class_array.md) **Array** ( from: [`PackedStringArray`](class_packedstringarray.md) )

Constructs an array from a [`PackedStringArray`](class_packedstringarray.md).

<!-- rst-class:: classref-item-separator -->

---

[`Array`](class_array.md) **Array** ( from: [`PackedVector2Array`](class_packedvector2array.md) )

Constructs an array from a [`PackedVector2Array`](class_packedvector2array.md).

<!-- rst-class:: classref-item-separator -->

---

[`Array`](class_array.md) **Array** ( from: [`PackedVector3Array`](class_packedvector3array.md) )

Constructs an array from a [`PackedVector3Array`](class_packedvector3array.md).

<!-- rst-class:: classref-item-separator -->

---

[`Array`](class_array.md) **Array** ( from: [`PackedVector4Array`](class_packedvector4array.md) )

Constructs an array from a [`PackedVector4Array`](class_packedvector4array.md).

<!-- rst-class:: classref-section-separator -->

---

## 方法说明

<div id="_class_array_method_all"></div>

[`bool`](class_bool.md) **all** ( method: [`Callable`](class_callable.md) ) const[^const]<div id="class_array_method_all"></div>

Calls the given [`Callable`](class_callable.md) on each element in the array and returns `true` if the [`Callable`](class_callable.md) returns `true` for *all* elements in the array. If the [`Callable`](class_callable.md) returns `false` for one array element or more, this method returns `false`.

The `method` should take one [`Variant`](class_variant.md) parameter (the current array element) and return a [`bool`](class_bool.md).



```gdscript

    func greater_than_5(number):
        return number > 5
    
    func _ready():
        print([6, 10, 6].all(greater_than_5)) # Prints true (3/3 elements evaluate to true).
        print([4, 10, 4].all(greater_than_5)) # Prints false (1/3 elements evaluate to true).
        print([4, 4, 4].all(greater_than_5))  # Prints false (0/3 elements evaluate to true).
        print([].all(greater_than_5))         # Prints true (0/0 elements evaluate to true).
    
        # Same as the first line above, but using a lambda function.
        print([6, 10, 6].all(func(element): return element > 5)) # Prints true
```

```csharp

    private static bool GreaterThan5(int number)
    {
        return number > 5;
    }
    
    public override void _Ready()
    {
        // Prints true (3/3 elements evaluate to true).
        GD.Print(new Godot.Collections.Array>int< { 6, 10, 6 }.All(GreaterThan5));
        // Prints false (1/3 elements evaluate to true).
        GD.Print(new Godot.Collections.Array>int< { 4, 10, 4 }.All(GreaterThan5));
        // Prints false (0/3 elements evaluate to true).
        GD.Print(new Godot.Collections.Array>int< { 4, 4, 4 }.All(GreaterThan5));
        // Prints true (0/0 elements evaluate to true).
        GD.Print(new Godot.Collections.Array>int< { }.All(GreaterThan5));
    
        // Same as the first line above, but using a lambda function.
        GD.Print(new Godot.Collections.Array>int< { 6, 10, 6 }.All(element => element > 5)); // Prints true
    }
```



See also [`any`](class_array.md#class_array_method_any), [`filter`](class_array.md#class_array_method_filter), [`map`](class_array.md#class_array_method_map) and [`reduce`](class_array.md#class_array_method_reduce).

 **Note:** Unlike relying on the size of an array returned by [`filter`](class_array.md#class_array_method_filter), this method will return as early as possible to improve performance (especially with large arrays).

 **Note:** For an empty array, this method [*always*](https://en.wikipedia.org/wiki/Vacuous_truth) returns `true`.





<!-- rst-class:: classref-item-separator -->

---

<div id="_class_array_method_any"></div>

[`bool`](class_bool.md) **any** ( method: [`Callable`](class_callable.md) ) const[^const]<div id="class_array_method_any"></div>

Calls the given [`Callable`](class_callable.md) on each element in the array and returns `true` if the [`Callable`](class_callable.md) returns `true` for *one or more* elements in the array. If the [`Callable`](class_callable.md) returns `false` for all elements in the array, this method returns `false`.

The `method` should take one [`Variant`](class_variant.md) parameter (the current array element) and return a [`bool`](class_bool.md).

```

    func greater_than_5(number):
        return number > 5
    
    func _ready():
        print([6, 10, 6].any(greater_than_5)) # Prints true (3 elements evaluate to true).
        print([4, 10, 4].any(greater_than_5)) # Prints true (1 elements evaluate to true).
        print([4, 4, 4].any(greater_than_5))  # Prints false (0 elements evaluate to true).
        print([].any(greater_than_5))         # Prints false (0 elements evaluate to true).
    
        # Same as the first line above, but using a lambda function.
        print([6, 10, 6].any(func(number): return number > 5)) # Prints true
```

See also [`all`](class_array.md#class_array_method_all), [`filter`](class_array.md#class_array_method_filter), [`map`](class_array.md#class_array_method_map) and [`reduce`](class_array.md#class_array_method_reduce).

 **Note:** Unlike relying on the size of an array returned by [`filter`](class_array.md#class_array_method_filter), this method will return as early as possible to improve performance (especially with large arrays).

 **Note:** For an empty array, this method always returns `false`.



<!-- rst-class:: classref-item-separator -->

---

<div id="_class_array_method_append"></div>

`void` **append** ( value: [`Variant`](class_variant.md) )<div id="class_array_method_append"></div>

Appends `value` at the end of the array (alias of [`push_back`](class_array.md#class_array_method_push_back)).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_array_method_append_array"></div>

`void` **append_array** ( array: [`Array`](class_array.md) )<div id="class_array_method_append_array"></div>

Appends another `array` at the end of this array.

```

    var numbers = [1, 2, 3]
    var extra = [4, 5, 6]
    numbers.append_array(extra)
    print(numbers) # Prints [1, 2, 3, 4, 5, 6]
```



<!-- rst-class:: classref-item-separator -->

---

<div id="_class_array_method_assign"></div>

`void` **assign** ( array: [`Array`](class_array.md) )<div id="class_array_method_assign"></div>

Assigns elements of another `array` into the array. Resizes the array to match `array`. Performs type conversions if the array is typed.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_array_method_back"></div>

[`Variant`](class_variant.md) **back** ( ) const[^const]<div id="class_array_method_back"></div>

Returns the last element of the array. If the array is empty, fails and returns `null`. See also [`front`](class_array.md#class_array_method_front).

 **Note:** Unlike with the `[]` operator (`array[-1]`), an error is generated without stopping project execution.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_array_method_bsearch"></div>

[`int`](class_int.md) **bsearch** ( value: [`Variant`](class_variant.md), before: [`bool`](class_bool.md) = true ) const[^const]<div id="class_array_method_bsearch"></div>

Returns the index of `value` in the sorted array. If it cannot be found, returns where `value` should be inserted to keep the array sorted. The algorithm used is [*binary search*](https://en.wikipedia.org/wiki/Binary_search_algorithm).

If `before` is `true` (as by default), the returned index comes before all existing elements equal to `value` in the array.

```

    var numbers = [2, 4, 8, 10]
    var idx = numbers.bsearch(7)
    
    numbers.insert(idx, 7)
    print(numbers) # Prints [2, 4, 7, 8, 10]
    
    var fruits = ["Apple", "Lemon", "Lemon", "Orange"]
    print(fruits.bsearch("Lemon", true))  # Prints 1, points at the first "Lemon".
    print(fruits.bsearch("Lemon", false)) # Prints 3, points at "Orange".
```

 **Note:** Calling [`bsearch`](class_array.md#class_array_method_bsearch) on an *unsorted* array will result in unexpected behavior. Use [`sort`](class_array.md#class_array_method_sort) before calling this method.



<!-- rst-class:: classref-item-separator -->

---

<div id="_class_array_method_bsearch_custom"></div>

[`int`](class_int.md) **bsearch_custom** ( value: [`Variant`](class_variant.md), func: [`Callable`](class_callable.md), before: [`bool`](class_bool.md) = true ) const[^const]<div id="class_array_method_bsearch_custom"></div>

Returns the index of `value` in the sorted array. If it cannot be found, returns where `value` should be inserted to keep the array sorted (using `func` for the comparisons). The algorithm used is [*binary search*](https://en.wikipedia.org/wiki/Binary_search_algorithm).

Similar to [`sort_custom`](class_array.md#class_array_method_sort_custom), `func` is called as many times as necessary, receiving one array element and `value` as arguments. The function should return `true` if the array element should be *behind* `value`, otherwise it should return `false`.

If `before` is `true` (as by default), the returned index comes before all existing elements equal to `value` in the array.

```

    func sort_by_amount(a, b):
        if a[1] < b[1]:
            return true
        return false
    
    func _ready():
        var my_items = [["Tomato", 2], ["Kiwi", 5], ["Rice", 9]]
    
        var apple = ["Apple", 5]
        # "Apple" is inserted before "Kiwi".
        my_items.insert(my_items.bsearch_custom(apple, sort_by_amount, true), apple)
    
        var banana = ["Banana", 5]
        # "Banana" is inserted after "Kiwi".
        my_items.insert(my_items.bsearch_custom(banana, sort_by_amount, false), banana)
    
        # Prints [["Tomato", 2], ["Apple", 5], ["Kiwi", 5], ["Banana", 5], ["Rice", 9]]
        print(my_items)
```

 **Note:** Calling [`bsearch_custom`](class_array.md#class_array_method_bsearch_custom) on an *unsorted* array will result in unexpected behavior. Use [`sort_custom`](class_array.md#class_array_method_sort_custom) with `func` before calling this method.



<!-- rst-class:: classref-item-separator -->

---

<div id="_class_array_method_clear"></div>

`void` **clear** ( )<div id="class_array_method_clear"></div>

Removes all elements from the array. This is equivalent to using [`resize`](class_array.md#class_array_method_resize) with a size of `0`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_array_method_count"></div>

[`int`](class_int.md) **count** ( value: [`Variant`](class_variant.md) ) const[^const]<div id="class_array_method_count"></div>

Returns the number of times an element is in the array.

To count how many elements in an array satisfy a condition, see [`reduce`](class_array.md#class_array_method_reduce).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_array_method_duplicate"></div>

[`Array`](class_array.md) **duplicate** ( deep: [`bool`](class_bool.md) = false ) const[^const]<div id="class_array_method_duplicate"></div>

Returns a new copy of the array.

By default, a **shallow** copy is returned: all nested **Array** and [`Dictionary`](class_dictionary.md) elements are shared with the original array. Modifying them in one array will also affect them in the other.

If `deep` is `true`, a **deep** copy is returned: all nested arrays and dictionaries are also duplicated (recursively).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_array_method_erase"></div>

`void` **erase** ( value: [`Variant`](class_variant.md) )<div id="class_array_method_erase"></div>

Finds and removes the first occurrence of `value` from the array. If `value` does not exist in the array, nothing happens. To remove an element by index, use [`remove_at`](class_array.md#class_array_method_remove_at) instead.

 **Note:** This method shifts every element's index after the removed `value` back, which may have a noticeable performance cost, especially on larger arrays.

 **Note:** Erasing elements while iterating over arrays is **not** supported and will result in unpredictable behavior.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_array_method_fill"></div>

`void` **fill** ( value: [`Variant`](class_variant.md) )<div id="class_array_method_fill"></div>

Assigns the given `value` to all elements in the array.

This method can often be combined with [`resize`](class_array.md#class_array_method_resize) to create an array with a given size and initialized elements:



```gdscript

    var array = []
    array.resize(5)
    array.fill(2)
    print(array) # Prints [2, 2, 2, 2, 2]
```

```csharp

    var array = new Godot.Collections.Array();
    array.Resize(5);
    array.Fill(2);
    GD.Print(array); // Prints [2, 2, 2, 2, 2]
```



 **Note:** If `value` is a [`Variant`](class_variant.md) passed by reference ([`Object`](class_object.md)-derived, **Array**, [`Dictionary`](class_dictionary.md), etc.), the array will be filled with references to the same `value`, which are not duplicates.





<!-- rst-class:: classref-item-separator -->

---

<div id="_class_array_method_filter"></div>

[`Array`](class_array.md) **filter** ( method: [`Callable`](class_callable.md) ) const[^const]<div id="class_array_method_filter"></div>

Calls the given [`Callable`](class_callable.md) on each element in the array and returns a new, filtered **Array**.

The `method` receives one of the array elements as an argument, and should return `true` to add the element to the filtered array, or `false` to exclude it.

```

    func is_even(number):
        return number % 2 == 0
    
    func _ready():
        print([1, 4, 5, 8].filter(is_even)) # Prints [4, 8]
    
        # Same as above, but using a lambda function.
        print([1, 4, 5, 8].filter(func(number): return number % 2 == 0))
```

See also [`any`](class_array.md#class_array_method_any), [`all`](class_array.md#class_array_method_all), [`map`](class_array.md#class_array_method_map) and [`reduce`](class_array.md#class_array_method_reduce).



<!-- rst-class:: classref-item-separator -->

---

<div id="_class_array_method_find"></div>

[`int`](class_int.md) **find** ( what: [`Variant`](class_variant.md), from: [`int`](class_int.md) = 0 ) const[^const]<div id="class_array_method_find"></div>

Returns the index of the **first** occurrence of `what` in this array, or `-1` if there are none. The search's start can be specified with `from`, continuing to the end of the array.

 **Note:** If you just want to know whether the array contains `what`, use [`has`](class_array.md#class_array_method_has) (`Contains` in C#). In GDScript, you may also use the `in` operator.

 **Note:** For performance reasons, the search is affected by `what`'s [Variant.Type](#enum_@globalscope_variant.type). For example, `7` ([`int`](class_int.md)) and `7.0` ([`float`](class_float.md)) are not considered equal for this method.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_array_method_find_custom"></div>

[`int`](class_int.md) **find_custom** ( method: [`Callable`](class_callable.md), from: [`int`](class_int.md) = 0 ) const[^const]<div id="class_array_method_find_custom"></div>

Returns the index of the **first** element in the array that causes `method` to return `true`, or `-1` if there are none. The search's start can be specified with `from`, continuing to the end of the array.

 `method` is a callable that takes an element of the array, and returns a [`bool`](class_bool.md).

 **Note:** If you just want to know whether the array contains *anything* that satisfies `method`, use [`any`](class_array.md#class_array_method_any).



```gdscript

    func is_even(number):
        return number % 2 == 0
    
    func _ready():
        print([1, 3, 4, 7].find_custom(is_even.bind())) # prints 2
```





<!-- rst-class:: classref-item-separator -->

---

<div id="_class_array_method_front"></div>

[`Variant`](class_variant.md) **front** ( ) const[^const]<div id="class_array_method_front"></div>

Returns the first element of the array. If the array is empty, fails and returns `null`. See also [`back`](class_array.md#class_array_method_back).

 **Note:** Unlike with the `[]` operator (`array[0]`), an error is generated without stopping project execution.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_array_method_get"></div>

[`Variant`](class_variant.md) **get** ( index: [`int`](class_int.md) ) const[^const]<div id="class_array_method_get"></div>

Returns the element at the given `index` in the array. This is the same as using the `[]` operator (`array[index]`).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_array_method_get_typed_builtin"></div>

[`int`](class_int.md) **get_typed_builtin** ( ) const[^const]<div id="class_array_method_get_typed_builtin"></div>

Returns the built-in [`Variant`](class_variant.md) type of the typed array as a [Variant.Type](#enum_@globalscope_variant.type) constant. If the array is not typed, returns [`@GlobalScope.TYPE_NIL`](class_@globalscope.md#class_@globalscope_constant_type_nil). See also [`is_typed`](class_array.md#class_array_method_is_typed).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_array_method_get_typed_class_name"></div>

[`StringName`](class_stringname.md) **get_typed_class_name** ( ) const[^const]<div id="class_array_method_get_typed_class_name"></div>

Returns the **built-in** class name of the typed array, if the built-in [`Variant`](class_variant.md) type [`@GlobalScope.TYPE_OBJECT`](class_@globalscope.md#class_@globalscope_constant_type_object). Otherwise, returns an empty [`StringName`](class_stringname.md). See also [`is_typed`](class_array.md#class_array_method_is_typed) and [`Object.get_class`](class_object.md#class_object_method_get_class).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_array_method_get_typed_script"></div>

[`Variant`](class_variant.md) **get_typed_script** ( ) const[^const]<div id="class_array_method_get_typed_script"></div>

Returns the [`Script`](class_script.md) instance associated with this typed array, or `null` if it does not exist. See also [`is_typed`](class_array.md#class_array_method_is_typed).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_array_method_has"></div>

[`bool`](class_bool.md) **has** ( value: [`Variant`](class_variant.md) ) const[^const]<div id="class_array_method_has"></div>

Returns `true` if the array contains the given `value`.



```gdscript

    print(["inside", 7].has("inside"))  # Prints true
    print(["inside", 7].has("outside")) # Prints false
    print(["inside", 7].has(7))         # Prints true
    print(["inside", 7].has("7"))       # Prints false
```

```csharp

    var arr = new Godot.Collections.Array { "inside", 7 };
    // By C# convention, this method is renamed to `Contains`.
    GD.Print(arr.Contains("inside"));  // Prints true
    GD.Print(arr.Contains("outside")); // Prints false
    GD.Print(arr.Contains(7));         // Prints true
    GD.Print(arr.Contains("7"));       // Prints false
```



In GDScript, this is equivalent to the `in` operator:

```

    if 4 in [2, 4, 6, 8]:
        print("4 is here!") # Will be printed.
```

 **Note:** For performance reasons, the search is affected by the `value`'s [Variant.Type](#enum_@globalscope_variant.type). For example, `7` ([`int`](class_int.md)) and `7.0` ([`float`](class_float.md)) are not considered equal for this method.







<!-- rst-class:: classref-item-separator -->

---

<div id="_class_array_method_hash"></div>

[`int`](class_int.md) **hash** ( ) const[^const]<div id="class_array_method_hash"></div>

Returns a hashed 32-bit integer value representing the array and its contents.

 **Note:** Arrays with equal hash values are *not* guaranteed to be the same, as a result of hash collisions. On the countrary, arrays with different hash values are guaranteed to be different.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_array_method_insert"></div>

[`int`](class_int.md) **insert** ( position: [`int`](class_int.md), value: [`Variant`](class_variant.md) )<div id="class_array_method_insert"></div>

Inserts a new element (`value`) at a given index (`position`) in the array. `position` should be between `0` and the array's [`size`](class_array.md#class_array_method_size).

Returns [`@GlobalScope.OK`](class_@globalscope.md#class_@globalscope_constant_ok) on success, or one of the other [Error](#enum_@globalscope_error) constants if this method fails.

 **Note:** Every element's index after `position` needs to be shifted forward, which may have a noticeable performance cost, especially on larger arrays.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_array_method_is_empty"></div>

[`bool`](class_bool.md) **is_empty** ( ) const[^const]<div id="class_array_method_is_empty"></div>

Returns `true` if the array is empty (`[]`). See also [`size`](class_array.md#class_array_method_size).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_array_method_is_read_only"></div>

[`bool`](class_bool.md) **is_read_only** ( ) const[^const]<div id="class_array_method_is_read_only"></div>

Returns `true` if the array is read-only. See [`make_read_only`](class_array.md#class_array_method_make_read_only).

In GDScript, arrays are automatically read-only if declared with the `const` keyword.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_array_method_is_same_typed"></div>

[`bool`](class_bool.md) **is_same_typed** ( array: [`Array`](class_array.md) ) const[^const]<div id="class_array_method_is_same_typed"></div>

Returns `true` if this array is typed the same as the given `array`. See also [`is_typed`](class_array.md#class_array_method_is_typed).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_array_method_is_typed"></div>

[`bool`](class_bool.md) **is_typed** ( ) const[^const]<div id="class_array_method_is_typed"></div>

Returns `true` if the array is typed. Typed arrays can only contain elements of a specific type, as defined by the typed array constructor. The methods of a typed array are still expected to return a generic [`Variant`](class_variant.md).

In GDScript, it is possible to define a typed array with static typing:

```

    var numbers: Array[float] = [0.2, 4.2, -2.0]
    print(numbers.is_typed()) # Prints true
```



<!-- rst-class:: classref-item-separator -->

---

<div id="_class_array_method_make_read_only"></div>

`void` **make_read_only** ( )<div id="class_array_method_make_read_only"></div>

Makes the array read-only. The array's elements cannot be overridden with different values, and their order cannot change. Does not apply to nested elements, such as dictionaries.

In GDScript, arrays are automatically read-only if declared with the `const` keyword.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_array_method_map"></div>

[`Array`](class_array.md) **map** ( method: [`Callable`](class_callable.md) ) const[^const]<div id="class_array_method_map"></div>

Calls the given [`Callable`](class_callable.md) for each element in the array and returns a new array filled with values returned by the `method`.

The `method` should take one [`Variant`](class_variant.md) parameter (the current array element) and can return any [`Variant`](class_variant.md).

```

    func double(number):
        return number * 2
    
    func _ready():
        print([1, 2, 3].map(double)) # Prints [2, 4, 6]
    
        # Same as above, but using a lambda function.
        print([1, 2, 3].map(func(element): return element * 2))
```

See also [`filter`](class_array.md#class_array_method_filter), [`reduce`](class_array.md#class_array_method_reduce), [`any`](class_array.md#class_array_method_any) and [`all`](class_array.md#class_array_method_all).



<!-- rst-class:: classref-item-separator -->

---

<div id="_class_array_method_max"></div>

[`Variant`](class_variant.md) **max** ( ) const[^const]<div id="class_array_method_max"></div>

Returns the maximum value contained in the array, if all elements can be compared. Otherwise, returns `null`. See also [`min`](class_array.md#class_array_method_min).

To find the maximum value using a custom comparator, you can use [`reduce`](class_array.md#class_array_method_reduce).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_array_method_min"></div>

[`Variant`](class_variant.md) **min** ( ) const[^const]<div id="class_array_method_min"></div>

Returns the minimum value contained in the array, if all elements can be compared. Otherwise, returns `null`. See also [`max`](class_array.md#class_array_method_max).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_array_method_pick_random"></div>

[`Variant`](class_variant.md) **pick_random** ( ) const[^const]<div id="class_array_method_pick_random"></div>

Returns a random element from the array. Generates an error and returns `null` if the array is empty.



```gdscript

    # May print 1, 2, 3.25, or "Hi".
    print([1, 2, 3.25, "Hi"].pick_random())
```

```csharp

    var array = new Godot.Collections.Array { 1, 2, 3.25f, "Hi" };
    GD.Print(array.PickRandom()); // May print 1, 2, 3.25, or "Hi".
```



 **Note:** Like many similar functions in the engine (such as [`@GlobalScope.randi`](class_@globalscope.md#class_@globalscope_method_randi) or [`shuffle`](class_array.md#class_array_method_shuffle)), this method uses a common, global random seed. To get a predictable outcome from this method, see [`@GlobalScope.seed`](class_@globalscope.md#class_@globalscope_method_seed).





<!-- rst-class:: classref-item-separator -->

---

<div id="_class_array_method_pop_at"></div>

[`Variant`](class_variant.md) **pop_at** ( position: [`int`](class_int.md) )<div id="class_array_method_pop_at"></div>

Removes and returns the element of the array at index `position`. If negative, `position` is considered relative to the end of the array. Returns `null` if the array is empty. If `position` is out of bounds, an error message is also generated.

 **Note:** This method shifts every element's index after `position` back, which may have a noticeable performance cost, especially on larger arrays.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_array_method_pop_back"></div>

[`Variant`](class_variant.md) **pop_back** ( )<div id="class_array_method_pop_back"></div>

Removes and returns the last element of the array. Returns `null` if the array is empty, without generating an error. See also [`pop_front`](class_array.md#class_array_method_pop_front).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_array_method_pop_front"></div>

[`Variant`](class_variant.md) **pop_front** ( )<div id="class_array_method_pop_front"></div>

Removes and returns the first element of the array. Returns `null` if the array is empty, without generating an error. See also [`pop_back`](class_array.md#class_array_method_pop_back).

 **Note:** This method shifts every other element's index back, which may have a noticeable performance cost, especially on larger arrays.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_array_method_push_back"></div>

`void` **push_back** ( value: [`Variant`](class_variant.md) )<div id="class_array_method_push_back"></div>

Appends an element at the end of the array. See also [`push_front`](class_array.md#class_array_method_push_front).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_array_method_push_front"></div>

`void` **push_front** ( value: [`Variant`](class_variant.md) )<div id="class_array_method_push_front"></div>

Adds an element at the beginning of the array. See also [`push_back`](class_array.md#class_array_method_push_back).

 **Note:** This method shifts every other element's index forward, which may have a noticeable performance cost, especially on larger arrays.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_array_method_reduce"></div>

[`Variant`](class_variant.md) **reduce** ( method: [`Callable`](class_callable.md), accum: [`Variant`](class_variant.md) = null ) const[^const]<div id="class_array_method_reduce"></div>

Calls the given [`Callable`](class_callable.md) for each element in array, accumulates the result in `accum`, then returns it.

The `method` takes two arguments: the current value of `accum` and the current array element. If `accum` is `null` (as by default), the iteration will start from the second element, with the first one used as initial value of `accum`.

```

    func sum(accum, number):
        return accum + number
    
    func _ready():
        print([1, 2, 3].reduce(sum, 0))  # Prints 6
        print([1, 2, 3].reduce(sum, 10)) # Prints 16
    
        # Same as above, but using a lambda function.
        print([1, 2, 3].reduce(func(accum, number): return accum + number, 10))
```

If [`max`](class_array.md#class_array_method_max) is not desirable, this method may also be used to implement a custom comparator:

```

    func _ready():
        var arr = [Vector2(5, 0), Vector2(3, 4), Vector2(1, 2)]
    
        var longest_vec = arr.reduce(func(max, vec): return vec if is_length_greater(vec, max) else max)
        print(longest_vec) # Prints Vector2(3, 4).
    
    func is_length_greater(a, b):
        return a.length() > b.length()
```

This method can also be used to count how many elements in an array satisfy a certain condition, similar to [`count`](class_array.md#class_array_method_count):

```

    func is_even(number):
        return number % 2 == 0
    
    func _ready():
        var arr = [1, 2, 3, 4, 5]
        # Increment count if it's even, else leaves count the same.
        var even_count = arr.reduce(func(count, next): return count + 1 if is_even(next) else count, 0)
        print(even_count) # Prints 2
```

See also [`map`](class_array.md#class_array_method_map), [`filter`](class_array.md#class_array_method_filter), [`any`](class_array.md#class_array_method_any) and [`all`](class_array.md#class_array_method_all).







<!-- rst-class:: classref-item-separator -->

---

<div id="_class_array_method_remove_at"></div>

`void` **remove_at** ( position: [`int`](class_int.md) )<div id="class_array_method_remove_at"></div>

Removes the element from the array at the given index (`position`). If the index is out of bounds, this method fails.

If you need to return the removed element, use [`pop_at`](class_array.md#class_array_method_pop_at). To remove an element by value, use [`erase`](class_array.md#class_array_method_erase) instead.

 **Note:** This method shifts every element's index after `position` back, which may have a noticeable performance cost, especially on larger arrays.

 **Note:** The `position` cannot be negative. To remove an element relative to the end of the array, use `arr.remove_at(arr.size() - (i + 1))`. To remove the last element from the array, use `arr.resize(arr.size() - 1)`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_array_method_resize"></div>

[`int`](class_int.md) **resize** ( size: [`int`](class_int.md) )<div id="class_array_method_resize"></div>

Sets the array's number of elements to `size`. If `size` is smaller than the array's current size, the elements at the end are removed. If `size` is greater, new default elements (usually `null`) are added, depending on the array's type.

Returns [`@GlobalScope.OK`](class_@globalscope.md#class_@globalscope_constant_ok) on success, or one of the other [Error](#enum_@globalscope_error) constants if this method fails.

 **Note:** Calling this method once and assigning the new values is faster than calling [`append`](class_array.md#class_array_method_append) for every new element.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_array_method_reverse"></div>

`void` **reverse** ( )<div id="class_array_method_reverse"></div>

Reverses the order of all elements in the array.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_array_method_rfind"></div>

[`int`](class_int.md) **rfind** ( what: [`Variant`](class_variant.md), from: [`int`](class_int.md) = -1 ) const[^const]<div id="class_array_method_rfind"></div>

Returns the index of the **last** occurrence of `what` in this array, or `-1` if there are none. The search's start can be specified with `from`, continuing to the beginning of the array. This method is the reverse of [`find`](class_array.md#class_array_method_find).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_array_method_rfind_custom"></div>

[`int`](class_int.md) **rfind_custom** ( method: [`Callable`](class_callable.md), from: [`int`](class_int.md) = -1 ) const[^const]<div id="class_array_method_rfind_custom"></div>

Returns the index of the **last** element of the array that causes `method` to return `true`, or `-1` if there are none. The search's start can be specified with `from`, continuing to the beginning of the array. This method is the reverse of [`find_custom`](class_array.md#class_array_method_find_custom).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_array_method_set"></div>

`void` **set** ( index: [`int`](class_int.md), value: [`Variant`](class_variant.md) )<div id="class_array_method_set"></div>

Sets the value of the element at the given `index` to the given `value`. This will not change the size of the array, it only changes the value at an index already in the array. This is the same as using the `[]` operator (`array[index] = value`).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_array_method_shuffle"></div>

`void` **shuffle** ( )<div id="class_array_method_shuffle"></div>

Shuffles all elements of the array in a random order.

 **Note:** Like many similar functions in the engine (such as [`@GlobalScope.randi`](class_@globalscope.md#class_@globalscope_method_randi) or [`pick_random`](class_array.md#class_array_method_pick_random)), this method uses a common, global random seed. To get a predictable outcome from this method, see [`@GlobalScope.seed`](class_@globalscope.md#class_@globalscope_method_seed).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_array_method_size"></div>

[`int`](class_int.md) **size** ( ) const[^const]<div id="class_array_method_size"></div>

Returns the number of elements in the array. Empty arrays (`[]`) always return `0`. See also [`is_empty`](class_array.md#class_array_method_is_empty).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_array_method_slice"></div>

[`Array`](class_array.md) **slice** ( begin: [`int`](class_int.md), end: [`int`](class_int.md) = 2147483647, step: [`int`](class_int.md) = 1, deep: [`bool`](class_bool.md) = false ) const[^const]<div id="class_array_method_slice"></div>

Returns a new **Array** containing this array's elements, from index `begin` (inclusive) to `end` (exclusive), every `step` elements.

If either `begin` or `end` are negative, their value is relative to the end of the array.

If `step` is negative, this method iterates through the array in reverse, returning a slice ordered backwards. For this to work, `begin` must be greater than `end`.

If `deep` is `true`, all nested **Array** and [`Dictionary`](class_dictionary.md) elements in the slice are duplicated from the original, recursively. See also [`duplicate`](class_array.md#class_array_method_duplicate)).

```

    var letters = ["A", "B", "C", "D", "E", "F"]
    
    print(letters.slice(0, 2))  # Prints ["A", "B"]
    print(letters.slice(2, -2)) # Prints ["C", "D"]
    print(letters.slice(-2, 6)) # Prints ["E", "F"]
    
    print(letters.slice(0, 6, 2))  # Prints ["A", "C", "E"]
    print(letters.slice(4, 1, -1)) # Prints ["E", "D", "C"]
```



<!-- rst-class:: classref-item-separator -->

---

<div id="_class_array_method_sort"></div>

`void` **sort** ( )<div id="class_array_method_sort"></div>

Sorts the array in ascending order. The final order is dependent on the "less than" (`<`) comparison between elements.



```gdscript

    var numbers = [10, 5, 2.5, 8]
    numbers.sort()
    print(numbers) # Prints [2.5, 5, 8, 10]
```

```csharp

    var numbers = new Godot.Collections.Array { 10, 5, 2.5, 8 };
    numbers.Sort();
    GD.Print(numbers); // Prints [2.5, 5, 8, 10]
```



 **Note:** The sorting algorithm used is not [*stable*](https://en.wikipedia.org/wiki/Sorting_algorithm#Stability). This means that equivalent elements (such as `2` and `2.0`) may have their order changed when calling [`sort`](class_array.md#class_array_method_sort).





<!-- rst-class:: classref-item-separator -->

---

<div id="_class_array_method_sort_custom"></div>

`void` **sort_custom** ( func: [`Callable`](class_callable.md) )<div id="class_array_method_sort_custom"></div>

Sorts the array using a custom [`Callable`](class_callable.md).

 `func` is called as many times as necessary, receiving two array elements as arguments. The function should return `true` if the first element should be moved *before* the second one, otherwise it should return `false`.

```

    func sort_ascending(a, b):
        if a[1] < b[1]:
            return true
        return false
    
    func _ready():
        var my_items = [["Tomato", 5], ["Apple", 9], ["Rice", 4]]
        my_items.sort_custom(sort_ascending)
        print(my_items) # Prints [["Rice", 4], ["Tomato", 5], ["Apple", 9]]
    
        # Sort descending, using a lambda function.
        my_items.sort_custom(func(a, b): return a[1] > b[1])
        print(my_items) # Prints [["Apple", 9], ["Tomato", 5], ["Rice", 4]]
```

It may also be necessary to use this method to sort strings by natural order, with [`String.naturalnocasecmp_to`](class_string.md#class_string_method_naturalnocasecmp_to), as in the following example:

```

    var files = ["newfile1", "newfile2", "newfile10", "newfile11"]
    files.sort_custom(func(a, b): return a.naturalnocasecmp_to(b) < 0)
    print(files) # Prints ["newfile1", "newfile2", "newfile10", "newfile11"]
```

 **Note:** In C#, this method is not supported.

 **Note:** The sorting algorithm used is not [*stable*](https://en.wikipedia.org/wiki/Sorting_algorithm#Stability). This means that values considered equal may have their order changed when calling this method.

 **Note:** You should not randomize the return value of `func`, as the heapsort algorithm expects a consistent result. Randomizing the return value will result in unexpected behavior.





<!-- rst-class:: classref-section-separator -->

---

## 运算符说明

<div id="_class_array_operator_neq_array"></div>

[`bool`](class_bool.md) **operator !=** ( right: [`Array`](class_array.md) ) <div id="class_array_operator_neq_array"></div>

Returns `true` if the array's size or its elements are different than `right`'s.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_array_operator_sum_array"></div>

[`Array`](class_array.md) **operator +** ( right: [`Array`](class_array.md) ) <div id="class_array_operator_sum_array"></div>

Appends the `right` array to the left operand, creating a new **Array**. This is also known as an array concatenation.



```gdscript

    var array1 = ["One", 2]
    var array2 = [3, "Four"]
    print(array1 + array2) # Prints ["One", 2, 3, "Four"]
```

```csharp

    // Note that concatenation is not possible with C#'s native Array type.
    var array1 = new Godot.Collections.Array{"One", 2};
    var array2 = new Godot.Collections.Array{3, "Four"};
    GD.Print(array1 + array2); // Prints ["One", 2, 3, "Four"]
```



 **Note:** For existing arrays, [`append_array`](class_array.md#class_array_method_append_array) is much more efficient than concatenation and assignment with the `+=` operator.





<!-- rst-class:: classref-item-separator -->

---

<div id="_class_array_operator_lt_array"></div>

[`bool`](class_bool.md) **operator <** ( right: [`Array`](class_array.md) ) <div id="class_array_operator_lt_array"></div>

Compares the elements of both arrays in order, starting from index `0` and ending on the last index in common between both arrays. For each pair of elements, returns `true` if this array's element is less than `right`'s, `false` if this element is greater. Otherwise, continues to the next pair.

If all searched elements are equal, returns `true` if this array's size is less than `right`'s, otherwise returns `false`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_array_operator_lte_array"></div>

[`bool`](class_bool.md) **operator <=** ( right: [`Array`](class_array.md) ) <div id="class_array_operator_lte_array"></div>

Compares the elements of both arrays in order, starting from index `0` and ending on the last index in common between both arrays. For each pair of elements, returns `true` if this array's element is less than `right`'s, `false` if this element is greater. Otherwise, continues to the next pair.

If all searched elements are equal, returns `true` if this array's size is less or equal to `right`'s, otherwise returns `false`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_array_operator_eq_array"></div>

[`bool`](class_bool.md) **operator ==** ( right: [`Array`](class_array.md) ) <div id="class_array_operator_eq_array"></div>

Compares the left operand **Array** against the `right` **Array**. Returns `true` if the sizes and contents of the arrays are equal, `false` otherwise.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_array_operator_gt_array"></div>

[`bool`](class_bool.md) **operator >** ( right: [`Array`](class_array.md) ) <div id="class_array_operator_gt_array"></div>

Compares the elements of both arrays in order, starting from index `0` and ending on the last index in common between both arrays. For each pair of elements, returns `true` if this array's element is greater than `right`'s, `false` if this element is less. Otherwise, continues to the next pair.

If all searched elements are equal, returns `true` if this array's size is greater than `right`'s, otherwise returns `false`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_array_operator_gte_array"></div>

[`bool`](class_bool.md) **operator >=** ( right: [`Array`](class_array.md) ) <div id="class_array_operator_gte_array"></div>

Compares the elements of both arrays in order, starting from index `0` and ending on the last index in common between both arrays. For each pair of elements, returns `true` if this array's element is greater than `right`'s, `false` if this element is less. Otherwise, continues to the next pair.

If all searched elements are equal, returns `true` if this array's size is greater or equal to `right`'s, otherwise returns `false`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_array_operator_idx_int"></div>

[`Variant`](class_variant.md) **operator []** ( index: [`int`](class_int.md) ) <div id="class_array_operator_idx_int"></div>

Returns the [`Variant`](class_variant.md) element at the specified `index`. Arrays start at index 0. If `index` is greater or equal to `0`, the element is fetched starting from the beginning of the array. If `index` is a negative value, the element is fetched starting from the end. Accessing an array out-of-bounds will cause a run-time error, pausing the project execution if run from the editor.

[^virtual]: 本方法通常需要用户覆盖才能生效。
[^const]: 本方法无副作用，不会修改该实例的任何成员变量。
[^vararg]: 本方法除了能接受在此处描述的参数外，还能够继续接受任意数量的参数。
[^constructor]: 本方法用于构造某个类型。
[^static]: 调用本方法无需实例，可直接使用类名进行调用。
[^operator]: 本方法描述的是使用本类型作为左操作数的有效运算符。
[^bitfield]: 这个值是由下列位标志构成位掩码的整数。
[^void]: 无返回值。
