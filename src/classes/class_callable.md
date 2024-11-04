<!-- ⚠ 请勿编辑本文件 ⚠ -->
<!-- 本文档使用脚本从 WeDot 引擎源码仓库生成。 -->
<!-- 生成脚本：https://github.com/WeDot-Engine/WeDot/tree/4.3/doc/tools/make_md.py； -->
<!-- 原文件：https://github.com/WeDot-Engine/WeDot/tree/4.3/doc/classes/Callable.xml。 -->

<div id="_class_callable"></div>

# Callable

A built-in type representing a method or a standalone function.

## 描述

**Callable** is a built-in [`Variant`](class_variant.md) type that represents a function. It can either be a method within an [`Object`](class_object.md) instance, or a custom callable used for different purposes (see [`is_custom`](#class_callable_method_is_custom)). Like all [`Variant`](class_variant.md) types, it can be stored in variables and passed to other functions. It is most commonly used for signal callbacks.

 **Example:** 



```gdscript

    func print_args(arg1, arg2, arg3 = ""):
        prints(arg1, arg2, arg3)
    
    func test():
        var callable = Callable(self, "print_args")
        callable.call("hello", "world")  # Prints "hello world ".
        callable.call(Vector2.UP, 42, callable)  # Prints "(0, -1) 42 Node(node.gd)::print_args".
        callable.call("invalid")  # Invalid call, should have at least 2 arguments.
```

```csharp

    // Default parameter values are not supported.
    public void PrintArgs(Variant arg1, Variant arg2, Variant arg3 = default)
    {
        GD.PrintS(arg1, arg2, arg3);
    }
    
    public void Test()
    {
        // Invalid calls fail silently.
        Callable callable = new Callable(this, MethodName.PrintArgs);
        callable.Call("hello", "world"); // Default parameter values are not supported, should have 3 arguments.
        callable.Call(Vector2.Up, 42, callable); // Prints "(0, -1) 42 Node(Node.cs)::PrintArgs".
        callable.Call("invalid"); // Invalid call, should have 3 arguments.
    }
```



In GDScript, it's possible to create lambda functions within a method. Lambda functions are custom callables that are not associated with an [`Object`](class_object.md) instance. Optionally, lambda functions can also be named. The name will be displayed in the debugger, or when calling [`get_method`](#class_callable_method_get_method).

```

    func _init():
        var my_lambda = func (message):
            print(message)
    
        # Prints Hello everyone!
        my_lambda.call("Hello everyone!")
    
        # Prints "Attack!", when the button_pressed signal is emitted.
        button_pressed.connect(func(): print("Attack!"))
```

In GDScript, you can access methods and global functions as **Callable** s:

```

    tween.tween_callback(node.queue_free)  # Object methods.
    tween.tween_callback(array.clear)  # Methods of built-in types.
    tween.tween_callback(print.bind("Test"))  # Global functions.
```

 **Note:** [`Dictionary`](class_dictionary.md) does not support the above due to ambiguity with keys.

```

    var dictionary = {"hello": "world"}
    
    # This will not work, `clear` is treated as a key.
    tween.tween_callback(dictionary.clear)
    
    # This will work.
    tween.tween_callback(Callable.create(dictionary, "clear"))
```











通过 C# 使用该 API 时会有显著不同，详见 :ref:`doc_c_sharp_differences`\ 。

## 构造函数

| [`Callable`](class_callable.md) | [`Callable`](#class_callable_constructor_callable) ( )                                                                                  |
| [`Callable`](class_callable.md) | [`Callable`](#class_callable_constructor_callable) ( from: [`Callable`](class_callable.md) )                                            |
| [`Callable`](class_callable.md) | [`Callable`](#class_callable_constructor_callable) ( object: [`Object`](class_object.md), method: [`StringName`](class_stringname.md) ) |

## 方法

| [`Callable`](class_callable.md)     | [`bind`](#class_callable_method_bind) ( ... ) vararg[^vararg] const[^const]                                                                       |
| [`Callable`](class_callable.md)     | [`bindv`](#class_callable_method_bindv) ( arguments: [`Array`](class_array.md) )                                                                  |
| [`Variant`](class_variant.md)       | [`call`](#class_callable_method_call) ( ... ) vararg[^vararg] const[^const]                                                                       |
| `void`                              | [`call_deferred`](#class_callable_method_call_deferred) ( ... ) vararg[^vararg] const[^const]                                                     |
| [`Variant`](class_variant.md)       | [`callv`](#class_callable_method_callv) ( arguments: [`Array`](class_array.md) ) const[^const]                                                    |
| [`Callable`](class_callable.md)     | [`create`](#class_callable_method_create) ( variant: [`Variant`](class_variant.md), method: [`StringName`](class_stringname.md) ) static[^static] |
| [`int`](class_int.md)               | [`get_argument_count`](#class_callable_method_get_argument_count) ( ) const[^const]                                                               |
| [`Array`](class_array.md)           | [`get_bound_arguments`](#class_callable_method_get_bound_arguments) ( ) const[^const]                                                             |
| [`int`](class_int.md)               | [`get_bound_arguments_count`](#class_callable_method_get_bound_arguments_count) ( ) const[^const]                                                 |
| [`StringName`](class_stringname.md) | [`get_method`](#class_callable_method_get_method) ( ) const[^const]                                                                               |
| [`Object`](class_object.md)         | [`get_object`](#class_callable_method_get_object) ( ) const[^const]                                                                               |
| [`int`](class_int.md)               | [`get_object_id`](#class_callable_method_get_object_id) ( ) const[^const]                                                                         |
| [`int`](class_int.md)               | [`hash`](#class_callable_method_hash) ( ) const[^const]                                                                                           |
| [`bool`](class_bool.md)             | [`is_custom`](#class_callable_method_is_custom) ( ) const[^const]                                                                                 |
| [`bool`](class_bool.md)             | [`is_null`](#class_callable_method_is_null) ( ) const[^const]                                                                                     |
| [`bool`](class_bool.md)             | [`is_standard`](#class_callable_method_is_standard) ( ) const[^const]                                                                             |
| [`bool`](class_bool.md)             | [`is_valid`](#class_callable_method_is_valid) ( ) const[^const]                                                                                   |
| `void`                              | [`rpc`](#class_callable_method_rpc) ( ... ) vararg[^vararg] const[^const]                                                                         |
| `void`                              | [`rpc_id`](#class_callable_method_rpc_id) ( peer_id: [`int`](class_int.md), ... ) vararg[^vararg] const[^const]                                   |
| [`Callable`](class_callable.md)     | [`unbind`](#class_callable_method_unbind) ( argcount: [`int`](class_int.md) ) const[^const]                                                       |

## 运算符

| [`bool`](class_bool.md) | [`operator !=`](class_Callable.md#operator_neq_Callable) ( right: [`Callable`](class_callable.md) ) |
| [`bool`](class_bool.md) | [`operator ==`](class_Callable.md#operator_eq_Callable) ( right: [`Callable`](class_callable.md) )  |

<!-- rst-class:: classref-section-separator -->

---

## 构造函数说明

<div id="_class_callable_constructor_callable"></div>

[`Callable`](class_callable.md) **Callable** ( )<div id="class_callable_constructor_callable"></div>

Constructs an empty **Callable**, with no object nor method bound.

<!-- rst-class:: classref-item-separator -->

---

[`Callable`](class_callable.md) **Callable** ( from: [`Callable`](class_callable.md) )

Constructs a **Callable** as a copy of the given **Callable**.

<!-- rst-class:: classref-item-separator -->

---

[`Callable`](class_callable.md) **Callable** ( object: [`Object`](class_object.md), method: [`StringName`](class_stringname.md) )

Creates a new **Callable** for the method named `method` in the specified `object`.

 **Note:** For methods of built-in [`Variant`](class_variant.md) types, use [`create`](#class_callable_method_create) instead.

<!-- rst-class:: classref-section-separator -->

---

## 方法说明

<div id="_class_callable_method_bind"></div>

[`Callable`](class_callable.md) **bind** ( ... ) vararg[^vararg] const[^const]<div id="class_callable_method_bind"></div>

Returns a copy of this **Callable** with one or more arguments bound. When called, the bound arguments are passed *after* the arguments supplied by [`call`](#class_callable_method_call). See also [`unbind`](#class_callable_method_unbind).

 **Note:** When this method is chained with other similar methods, the order in which the argument list is modified is read from right to left.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_callable_method_bindv"></div>

[`Callable`](class_callable.md) **bindv** ( arguments: [`Array`](class_array.md) )<div id="class_callable_method_bindv"></div>

Returns a copy of this **Callable** with one or more arguments bound, reading them from an array. When called, the bound arguments are passed *after* the arguments supplied by [`call`](#class_callable_method_call). See also [`unbind`](#class_callable_method_unbind).

 **Note:** When this method is chained with other similar methods, the order in which the argument list is modified is read from right to left.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_callable_method_call"></div>

[`Variant`](class_variant.md) **call** ( ... ) vararg[^vararg] const[^const]<div id="class_callable_method_call"></div>

Calls the method represented by this **Callable**. Arguments can be passed and should match the method's signature.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_callable_method_call_deferred"></div>

`void` **call_deferred** ( ... ) vararg[^vararg] const[^const]<div id="class_callable_method_call_deferred"></div>

Calls the method represented by this **Callable** in deferred mode, i.e. at the end of the current frame. Arguments can be passed and should match the method's signature.



```gdscript

    func _ready():
        grab_focus.call_deferred()
```

```csharp

    public override void _Ready()
    {
        Callable.From(GrabFocus).CallDeferred();
    }
```



 **Note:** Deferred calls are processed at idle time. Idle time happens mainly at the end of process and physics frames. In it, deferred calls will be run until there are none left, which means you can defer calls from other deferred calls and they'll still be run in the current idle time cycle. This means you should not call a method deferred from itself (or from a method called by it), as this causes infinite recursion the same way as if you had called the method directly.

See also [`Object.call_deferred`](#class_object_method_call_deferred).





<!-- rst-class:: classref-item-separator -->

---

<div id="_class_callable_method_callv"></div>

[`Variant`](class_variant.md) **callv** ( arguments: [`Array`](class_array.md) ) const[^const]<div id="class_callable_method_callv"></div>

Calls the method represented by this **Callable**. Unlike [`call`](#class_callable_method_call), this method expects all arguments to be contained inside the `arguments` [`Array`](class_array.md).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_callable_method_create"></div>

[`Callable`](class_callable.md) **create** ( variant: [`Variant`](class_variant.md), method: [`StringName`](class_stringname.md) ) static[^static]<div id="class_callable_method_create"></div>

Creates a new **Callable** for the method named `method` in the specified `variant`. To represent a method of a built-in [`Variant`](class_variant.md) type, a custom callable is used (see [`is_custom`](#class_callable_method_is_custom)). If `variant` is [`Object`](class_object.md), then a standard callable will be created instead.

 **Note:** This method is always necessary for the [`Dictionary`](class_dictionary.md) type, as property syntax is used to access its entries. You may also use this method when `variant`'s type is not known in advance (for polymorphism).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_callable_method_get_argument_count"></div>

[`int`](class_int.md) **get_argument_count** ( ) const[^const]<div id="class_callable_method_get_argument_count"></div>

Returns the total number of arguments this **Callable** should take, including optional arguments. This means that any arguments bound with [`bind`](#class_callable_method_bind) are *subtracted* from the result, and any arguments unbound with [`unbind`](#class_callable_method_unbind) are *added* to the result.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_callable_method_get_bound_arguments"></div>

[`Array`](class_array.md) **get_bound_arguments** ( ) const[^const]<div id="class_callable_method_get_bound_arguments"></div>

Return the bound arguments (as long as [`get_bound_arguments_count`](#class_callable_method_get_bound_arguments_count) is greater than zero), or empty (if [`get_bound_arguments_count`](#class_callable_method_get_bound_arguments_count) is less than or equal to zero).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_callable_method_get_bound_arguments_count"></div>

[`int`](class_int.md) **get_bound_arguments_count** ( ) const[^const]<div id="class_callable_method_get_bound_arguments_count"></div>

Returns the total amount of arguments bound (or unbound) via successive [`bind`](#class_callable_method_bind) or [`unbind`](#class_callable_method_unbind) calls. If the amount of arguments unbound is greater than the ones bound, this function returns a value less than zero.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_callable_method_get_method"></div>

[`StringName`](class_stringname.md) **get_method** ( ) const[^const]<div id="class_callable_method_get_method"></div>

Returns the name of the method represented by this **Callable**. If the callable is a GDScript lambda function, returns the function's name or `"<anonymous lambda>"`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_callable_method_get_object"></div>

[`Object`](class_object.md) **get_object** ( ) const[^const]<div id="class_callable_method_get_object"></div>

Returns the object on which this **Callable** is called.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_callable_method_get_object_id"></div>

[`int`](class_int.md) **get_object_id** ( ) const[^const]<div id="class_callable_method_get_object_id"></div>

Returns the ID of this **Callable**'s object (see [`Object.get_instance_id`](#class_object_method_get_instance_id)).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_callable_method_hash"></div>

[`int`](class_int.md) **hash** ( ) const[^const]<div id="class_callable_method_hash"></div>

Returns the 32-bit hash value of this **Callable**'s object.

 **Note:** **Callable** s with equal content will always produce identical hash values. However, the reverse is not true. Returning identical hash values does *not* imply the callables are equal, because different callables can have identical hash values due to hash collisions. The engine uses a 32-bit hash algorithm for [`hash`](#class_callable_method_hash).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_callable_method_is_custom"></div>

[`bool`](class_bool.md) **is_custom** ( ) const[^const]<div id="class_callable_method_is_custom"></div>

Returns `true` if this **Callable** is a custom callable. Custom callables are used:

- for binding/unbinding arguments (see [`bind`](#class_callable_method_bind) and [`unbind`](#class_callable_method_unbind));

- for representing methods of built-in [`Variant`](class_variant.md) types (see [`create`](#class_callable_method_create));

- for representing global, lambda, and RPC functions in GDScript;

- for other purposes in the core, GDExtension, and C#.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_callable_method_is_null"></div>

[`bool`](class_bool.md) **is_null** ( ) const[^const]<div id="class_callable_method_is_null"></div>

Returns `true` if this **Callable** has no target to call the method on.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_callable_method_is_standard"></div>

[`bool`](class_bool.md) **is_standard** ( ) const[^const]<div id="class_callable_method_is_standard"></div>

Returns `true` if this **Callable** is a standard callable. This method is the opposite of [`is_custom`](#class_callable_method_is_custom). Returns `false` if this callable is a lambda function.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_callable_method_is_valid"></div>

[`bool`](class_bool.md) **is_valid** ( ) const[^const]<div id="class_callable_method_is_valid"></div>

Returns `true` if the callable's object exists and has a valid method name assigned, or is a custom callable.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_callable_method_rpc"></div>

`void` **rpc** ( ... ) vararg[^vararg] const[^const]<div id="class_callable_method_rpc"></div>

Perform an RPC (Remote Procedure Call) on all connected peers. This is used for multiplayer and is normally not available, unless the function being called has been marked as *RPC* (using [`@GDScript.@rpc`](#class_@gdscript_annotation_@rpc) or [`Node.rpc_config`](#class_node_method_rpc_config)). Calling this method on unsupported functions will result in an error. See [`Node.rpc`](#class_node_method_rpc).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_callable_method_rpc_id"></div>

`void` **rpc_id** ( peer_id: [`int`](class_int.md), ... ) vararg[^vararg] const[^const]<div id="class_callable_method_rpc_id"></div>

Perform an RPC (Remote Procedure Call) on a specific peer ID (see multiplayer documentation for reference). This is used for multiplayer and is normally not available unless the function being called has been marked as *RPC* (using [`@GDScript.@rpc`](#class_@gdscript_annotation_@rpc) or [`Node.rpc_config`](#class_node_method_rpc_config)). Calling this method on unsupported functions will result in an error. See [`Node.rpc_id`](#class_node_method_rpc_id).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_callable_method_unbind"></div>

[`Callable`](class_callable.md) **unbind** ( argcount: [`int`](class_int.md) ) const[^const]<div id="class_callable_method_unbind"></div>

Returns a copy of this **Callable** with a number of arguments unbound. In other words, when the new callable is called the last few arguments supplied by the user are ignored, according to `argcount`. The remaining arguments are passed to the callable. This allows to use the original callable in a context that attempts to pass more arguments than this callable can handle, e.g. a signal with a fixed number of arguments. See also [`bind`](#class_callable_method_bind).

 **Note:** When this method is chained with other similar methods, the order in which the argument list is modified is read from right to left.

```

    func _ready():
        foo.unbind(1).call(1, 2) # Calls foo(1).
        foo.bind(3, 4).unbind(1).call(1, 2) # Calls foo(1, 3, 4), note that it does not change the arguments from bind.
```



<!-- rst-class:: classref-section-separator -->

---

## 运算符说明

<div id="_class_callable_operator_neq_callable"></div>

[`bool`](class_bool.md) **operator !=** ( right: [`Callable`](class_callable.md) ) <div id="class_callable_operator_neq_callable"></div>

Returns `true` if both **Callable** s invoke different targets.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_callable_operator_eq_callable"></div>

[`bool`](class_bool.md) **operator ==** ( right: [`Callable`](class_callable.md) ) <div id="class_callable_operator_eq_callable"></div>

Returns `true` if both **Callable** s invoke the same custom target.

[^virtual]: 本方法通常需要用户覆盖才能生效。
[^const]: 本方法无副作用，不会修改该实例的任何成员变量。
[^vararg]: 本方法除了能接受在此处描述的参数外，还能够继续接受任意数量的参数。
[^constructor]: 本方法用于构造某个类型。
[^static]: 调用本方法无需实例，可直接使用类名进行调用。
[^operator]: 本方法描述的是使用本类型作为左操作数的有效运算符。
[^bitfield]: 这个值是由下列位标志构成位掩码的整数。
[^void]: 无返回值。
