<!-- ⚠ 请勿编辑本文件 ⚠ -->
<!-- 本文档使用脚本从 WeDot 引擎源码仓库生成。 -->
<!-- 生成脚本：https://github.com/WeDot-Engine/WeDot/tree/4.3/doc/tools/make_md.py； -->
<!-- 原文件：https://github.com/WeDot-Engine/WeDot/tree/4.3/doc/classes/WeakRef.xml。 -->

<div id="_class_weakref"></div>

# WeakRef

**继承：** [`RefCounted`](class_refcounted.md) **<** [`Object`](class_object.md)

Holds an [`Object`](class_object.md). If the object is [`RefCounted`](class_refcounted.md), it doesn't update the reference count.

## 描述

A weakref can hold a [`RefCounted`](class_refcounted.md) without contributing to the reference counter. A weakref can be created from an [`Object`](class_object.md) using [`@GlobalScope.weakref`](#class_@globalscope_method_weakref). If this object is not a reference, weakref still works, however, it does not have any effect on the object. Weakrefs are useful in cases where multiple classes have variables that refer to each other. Without weakrefs, using these classes could lead to memory leaks, since both references keep each other from being released. Making part of the variables a weakref can prevent this cyclic dependency, and allows the references to be released.

## 方法

| [`Variant`](class_variant.md) | [`get_ref`](#class_weakref_method_get_ref) ( ) const[^const] |

<!-- rst-class:: classref-section-separator -->

---

## 方法说明

<div id="_class_weakref_method_get_ref"></div>

[`Variant`](class_variant.md) **get_ref** ( ) const[^const]<div id="class_weakref_method_get_ref"></div>

Returns the [`Object`](class_object.md) this weakref is referring to. Returns `null` if that object no longer exists.

[^virtual]: 本方法通常需要用户覆盖才能生效。
[^const]: 本方法无副作用，不会修改该实例的任何成员变量。
[^vararg]: 本方法除了能接受在此处描述的参数外，还能够继续接受任意数量的参数。
[^constructor]: 本方法用于构造某个类型。
[^static]: 调用本方法无需实例，可直接使用类名进行调用。
[^operator]: 本方法描述的是使用本类型作为左操作数的有效运算符。
[^bitfield]: 这个值是由下列位标志构成位掩码的整数。
[^void]: 无返回值。
