<!-- ⚠ 请勿编辑本文件 ⚠ -->
<!-- 本文档使用脚本从 WeDot 引擎源码仓库生成。 -->
<!-- 生成脚本：https://github.com/WeDot-Engine/WeDot/tree/4.3/doc/tools/make_md.py； -->
<!-- 原文件：https://github.com/WeDot-Engine/WeDot/tree/4.3/doc/classes/Signal.xml。 -->

<div id="_class_signal"></div>

# Signal

A built-in type representing a signal of an [`Object`](class_object.md).

## 描述

**Signal** is a built-in [`Variant`](class_variant.md) type that represents a signal of an [`Object`](class_object.md) instance. Like all [`Variant`](class_variant.md) types, it can be stored in variables and passed to functions. Signals allow all connected [`Callable`](class_callable.md) s (and by extension their respective objects) to listen and react to events, without directly referencing one another. This keeps the code flexible and easier to manage.

In GDScript, signals can be declared with the `signal` keyword. In C#, you may use the `[Signal]` attribute on a delegate.



```gdscript

    signal attacked
    
    # Additional arguments may be declared.
    # These arguments must be passed when the signal is emitted.
    signal item_dropped(item_name, amount)
```

```csharp

    [Signal]
    delegate void AttackedEventHandler();
    
    // Additional arguments may be declared.
    // These arguments must be passed when the signal is emitted.
    [Signal]
    delegate void ItemDroppedEventHandler(string itemName, int amount);
```







通过 C# 使用该 API 时会有显著不同，详见 :ref:`doc_c_sharp_differences`\ 。

## 构造函数

| [`Signal`](class_signal.md) | [`Signal`](#class_signal_constructor_signal) ( )                                                                                  |
| [`Signal`](class_signal.md) | [`Signal`](#class_signal_constructor_signal) ( from: [`Signal`](class_signal.md) )                                                |
| [`Signal`](class_signal.md) | [`Signal`](#class_signal_constructor_signal) ( object: [`Object`](class_object.md), signal: [`StringName`](class_stringname.md) ) |

## 方法

| [`int`](class_int.md)               | [`connect`](#class_signal_method_connect) ( callable: [`Callable`](class_callable.md), flags: [`int`](class_int.md) = 0 ) |
| `void`                              | [`disconnect`](#class_signal_method_disconnect) ( callable: [`Callable`](class_callable.md) )                             |
| `void`                              | [`emit`](#class_signal_method_emit) ( ... ) vararg[^vararg] const[^const]                                                 |
| [`Array`](class_array.md)           | [`get_connections`](#class_signal_method_get_connections) ( ) const[^const]                                               |
| [`StringName`](class_stringname.md) | [`get_name`](#class_signal_method_get_name) ( ) const[^const]                                                             |
| [`Object`](class_object.md)         | [`get_object`](#class_signal_method_get_object) ( ) const[^const]                                                         |
| [`int`](class_int.md)               | [`get_object_id`](#class_signal_method_get_object_id) ( ) const[^const]                                                   |
| [`bool`](class_bool.md)             | [`is_connected`](#class_signal_method_is_connected) ( callable: [`Callable`](class_callable.md) ) const[^const]           |
| [`bool`](class_bool.md)             | [`is_null`](#class_signal_method_is_null) ( ) const[^const]                                                               |

## 运算符

| [`bool`](class_bool.md) | [`operator !=`](class_Signal.md#operator_neq_Signal) ( right: [`Signal`](class_signal.md) ) |
| [`bool`](class_bool.md) | [`operator ==`](class_Signal.md#operator_eq_Signal) ( right: [`Signal`](class_signal.md) )  |

<!-- rst-class:: classref-section-separator -->

---

## 构造函数说明

<div id="_class_signal_constructor_signal"></div>

[`Signal`](class_signal.md) **Signal** ( )<div id="class_signal_constructor_signal"></div>

Constructs an empty **Signal** with no object nor signal name bound.

<!-- rst-class:: classref-item-separator -->

---

[`Signal`](class_signal.md) **Signal** ( from: [`Signal`](class_signal.md) )

Constructs a **Signal** as a copy of the given **Signal**.

<!-- rst-class:: classref-item-separator -->

---

[`Signal`](class_signal.md) **Signal** ( object: [`Object`](class_object.md), signal: [`StringName`](class_stringname.md) )

Creates a new **Signal** named `signal` in the specified `object`.

<!-- rst-class:: classref-section-separator -->

---

## 方法说明

<div id="_class_signal_method_connect"></div>

[`int`](class_int.md) **connect** ( callable: [`Callable`](class_callable.md), flags: [`int`](class_int.md) = 0 )<div id="class_signal_method_connect"></div>

Connects this signal to the specified `callable`. Optional `flags` can be also added to configure the connection's behavior (see [ConnectFlags](#enum_object_connectflags) constants). You can provide additional arguments to the connected `callable` by using [`Callable.bind`](#class_callable_method_bind).

A signal can only be connected once to the same [`Callable`](class_callable.md). If the signal is already connected, returns [`@GlobalScope.ERR_INVALID_PARAMETER`](#class_@globalscope_constant_err_invalid_parameter) and pushes an error message, unless the signal is connected with [`Object.CONNECT_REFERENCE_COUNTED`](#class_object_constant_connect_reference_counted). To prevent this, use [`is_connected`](#class_signal_method_is_connected) first to check for existing connections.

```

    for button in $Buttons.get_children():
        button.pressed.connect(_on_pressed.bind(button))
    
    func _on_pressed(button):
        print(button.name, " was pressed")
```



<!-- rst-class:: classref-item-separator -->

---

<div id="_class_signal_method_disconnect"></div>

`void` **disconnect** ( callable: [`Callable`](class_callable.md) )<div id="class_signal_method_disconnect"></div>

Disconnects this signal from the specified [`Callable`](class_callable.md). If the connection does not exist, generates an error. Use [`is_connected`](#class_signal_method_is_connected) to make sure that the connection exists.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_signal_method_emit"></div>

`void` **emit** ( ... ) vararg[^vararg] const[^const]<div id="class_signal_method_emit"></div>

Emits this signal. All [`Callable`](class_callable.md) s connected to this signal will be triggered. This method supports a variable number of arguments, so parameters can be passed as a comma separated list.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_signal_method_get_connections"></div>

[`Array`](class_array.md) **get_connections** ( ) const[^const]<div id="class_signal_method_get_connections"></div>

Returns an [`Array`](class_array.md) of connections for this signal. Each connection is represented as a [`Dictionary`](class_dictionary.md) that contains three entries:

- `signal` is a reference to this signal;

- `callable` is a reference to the connected [`Callable`](class_callable.md);

- `flags` is a combination of [ConnectFlags](#enum_object_connectflags).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_signal_method_get_name"></div>

[`StringName`](class_stringname.md) **get_name** ( ) const[^const]<div id="class_signal_method_get_name"></div>

Returns the name of this signal.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_signal_method_get_object"></div>

[`Object`](class_object.md) **get_object** ( ) const[^const]<div id="class_signal_method_get_object"></div>

Returns the object emitting this signal.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_signal_method_get_object_id"></div>

[`int`](class_int.md) **get_object_id** ( ) const[^const]<div id="class_signal_method_get_object_id"></div>

Returns the ID of the object emitting this signal (see [`Object.get_instance_id`](#class_object_method_get_instance_id)).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_signal_method_is_connected"></div>

[`bool`](class_bool.md) **is_connected** ( callable: [`Callable`](class_callable.md) ) const[^const]<div id="class_signal_method_is_connected"></div>

Returns `true` if the specified [`Callable`](class_callable.md) is connected to this signal.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_signal_method_is_null"></div>

[`bool`](class_bool.md) **is_null** ( ) const[^const]<div id="class_signal_method_is_null"></div>

Returns `true` if the signal's name does not exist in its object, or the object is not valid.

<!-- rst-class:: classref-section-separator -->

---

## 运算符说明

<div id="_class_signal_operator_neq_signal"></div>

[`bool`](class_bool.md) **operator !=** ( right: [`Signal`](class_signal.md) ) <div id="class_signal_operator_neq_signal"></div>

Returns `true` if the signals do not share the same object and name.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_signal_operator_eq_signal"></div>

[`bool`](class_bool.md) **operator ==** ( right: [`Signal`](class_signal.md) ) <div id="class_signal_operator_eq_signal"></div>

Returns `true` if both signals share the same object and name.

[^virtual]: 本方法通常需要用户覆盖才能生效。
[^const]: 本方法无副作用，不会修改该实例的任何成员变量。
[^vararg]: 本方法除了能接受在此处描述的参数外，还能够继续接受任意数量的参数。
[^constructor]: 本方法用于构造某个类型。
[^static]: 调用本方法无需实例，可直接使用类名进行调用。
[^operator]: 本方法描述的是使用本类型作为左操作数的有效运算符。
[^bitfield]: 这个值是由下列位标志构成位掩码的整数。
[^void]: 无返回值。
