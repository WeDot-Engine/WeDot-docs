<!-- ⚠ 请勿编辑本文件 ⚠ -->
<!-- 本文档使用脚本从 WeDot 引擎源码仓库生成。 -->
<!-- 生成脚本：https://github.com/WeDot-Engine/WeDot/tree/master/doc/tools/make_md.py； -->
<!-- 原文件：https://github.com/WeDot-Engine/WeDot/tree/master/doc/classes/AnimationLibrary.xml。 -->

<div id="_class_animationlibrary"></div>

# AnimationLibrary

**继承：** [`Resource`](class_resource.md) **<** [`RefCounted`](class_refcounted.md) **<** [`Object`](class_object.md)

Container for [`Animation`](class_animation.md) resources.

## 描述

An animation library stores a set of animations accessible through [`StringName`](class_stringname.md) keys, for use with [`AnimationPlayer`](class_animationplayer.md) nodes.

## 方法

|||
|:-:|:--|
| [Error](#enum_@globalscope_error)                           | [`add_animation`](class_animationlibrary.md#class_animationlibrary_method_add_animation) ( name: [`StringName`](class_stringname.md), animation: [`Animation`](class_animation.md) )       |
| [`Animation`](class_animation.md)                           | [`get_animation`](class_animationlibrary.md#class_animationlibrary_method_get_animation) ( name: [`StringName`](class_stringname.md) ) const[^const]                                       |
| [Array](class_array.md) [`StringName`](class_stringname.md) | [`get_animation_list`](class_animationlibrary.md#class_animationlibrary_method_get_animation_list) ( ) const[^const]                                                                       |
| [`bool`](class_bool.md)                                     | [`has_animation`](class_animationlibrary.md#class_animationlibrary_method_has_animation) ( name: [`StringName`](class_stringname.md) ) const[^const]                                       |
| `void`                                                      | [`remove_animation`](class_animationlibrary.md#class_animationlibrary_method_remove_animation) ( name: [`StringName`](class_stringname.md) )                                               |
| `void`                                                      | [`rename_animation`](class_animationlibrary.md#class_animationlibrary_method_rename_animation) ( name: [`StringName`](class_stringname.md), newname: [`StringName`](class_stringname.md) ) |

<!-- rst-class:: classref-section-separator -->

---

## 信号

<div id="_class_class_animationlibrary_signal_animation_added"></div>

**animation_added** ( name: [`StringName`](class_stringname.md) ) <div id="class_animationlibrary_signal_animation_added"></div>

Emitted when an [`Animation`](class_animation.md) is added, under the key `name`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_class_animationlibrary_signal_animation_changed"></div>

**animation_changed** ( name: [`StringName`](class_stringname.md) ) <div id="class_animationlibrary_signal_animation_changed"></div>

Emitted when there's a change in one of the animations, e.g. tracks are added, moved or have changed paths. `name` is the key of the animation that was changed.

See also [`Resource.changed`](class_resource.md#class_resource_signal_changed), which this acts as a relay for.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_class_animationlibrary_signal_animation_removed"></div>

**animation_removed** ( name: [`StringName`](class_stringname.md) ) <div id="class_animationlibrary_signal_animation_removed"></div>

Emitted when an [`Animation`](class_animation.md) stored with the key `name` is removed.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_class_animationlibrary_signal_animation_renamed"></div>

**animation_renamed** ( name: [`StringName`](class_stringname.md), to_name: [`StringName`](class_stringname.md) ) <div id="class_animationlibrary_signal_animation_renamed"></div>

Emitted when the key for an [`Animation`](class_animation.md) is changed, from `name` to `to_name`.

<!-- rst-class:: classref-section-separator -->

---

## 方法说明

<div id="_class_animationlibrary_method_add_animation"></div>

[Error](#enum_@globalscope_error) **add_animation** ( name: [`StringName`](class_stringname.md), animation: [`Animation`](class_animation.md) )<div id="class_animationlibrary_method_add_animation"></div>

Adds the `animation` to the library, accessible by the key `name`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_animationlibrary_method_get_animation"></div>

[`Animation`](class_animation.md) **get_animation** ( name: [`StringName`](class_stringname.md) ) const[^const]<div id="class_animationlibrary_method_get_animation"></div>

Returns the [`Animation`](class_animation.md) with the key `name`. If the animation does not exist, `null` is returned and an error is logged.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_animationlibrary_method_get_animation_list"></div>

[Array](class_array.md) [`StringName`](class_stringname.md) **get_animation_list** ( ) const[^const]<div id="class_animationlibrary_method_get_animation_list"></div>

Returns the keys for the [`Animation`](class_animation.md) s stored in the library.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_animationlibrary_method_has_animation"></div>

[`bool`](class_bool.md) **has_animation** ( name: [`StringName`](class_stringname.md) ) const[^const]<div id="class_animationlibrary_method_has_animation"></div>

Returns `true` if the library stores an [`Animation`](class_animation.md) with `name` as the key.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_animationlibrary_method_remove_animation"></div>

`void` **remove_animation** ( name: [`StringName`](class_stringname.md) )<div id="class_animationlibrary_method_remove_animation"></div>

Removes the [`Animation`](class_animation.md) with the key `name`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_animationlibrary_method_rename_animation"></div>

`void` **rename_animation** ( name: [`StringName`](class_stringname.md), newname: [`StringName`](class_stringname.md) )<div id="class_animationlibrary_method_rename_animation"></div>

Changes the key of the [`Animation`](class_animation.md) associated with the key `name` to `newname`.

[^virtual]: 本方法通常需要用户覆盖才能生效。
[^const]: 本方法无副作用，不会修改该实例的任何成员变量。
[^vararg]: 本方法除了能接受在此处描述的参数外，还能够继续接受任意数量的参数。
[^constructor]: 本方法用于构造某个类型。
[^static]: 调用本方法无需实例，可直接使用类名进行调用。
[^operator]: 本方法描述的是使用本类型作为左操作数的有效运算符。
[^bitfield]: 这个值是由下列位标志构成位掩码的整数。
[^void]: 无返回值。
