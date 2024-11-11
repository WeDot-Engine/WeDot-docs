<!-- ⚠ 请勿编辑本文件 ⚠ -->
<!-- 本文档使用脚本从 WeDot 引擎源码仓库生成。 -->
<!-- 生成脚本：https://github.com/WeDot-Engine/WeDot/tree/master/doc/tools/make_md.py； -->
<!-- 原文件：https://github.com/WeDot-Engine/WeDot/tree/master/doc/classes/AnimationNode.xml。 -->

<div id="_class_animationnode"></div>

# AnimationNode

**继承：** [`Resource`](class_resource.md) **<** [`RefCounted`](class_refcounted.md) **<** [`Object`](class_object.md)

**派生：** [`AnimationNodeOutput`](class_animationnodeoutput.md), [`AnimationNodeSync`](class_animationnodesync.md), [`AnimationNodeTimeScale`](class_animationnodetimescale.md), [`AnimationNodeTimeSeek`](class_animationnodetimeseek.md), [`AnimationRootNode`](class_animationrootnode.md)

Base class for [`AnimationTree`](class_animationtree.md) nodes. Not related to scene nodes.

## 描述

Base resource for [`AnimationTree`](class_animationtree.md) nodes. In general, it's not used directly, but you can create custom ones with custom blending formulas.

Inherit this when creating animation nodes mainly for use in [`AnimationNodeBlendTree`](class_animationnodeblendtree.md), otherwise [`AnimationRootNode`](class_animationrootnode.md) should be used instead.

You can access the time information as read-only parameter which is processed and stored in the previous frame for all nodes except [`AnimationNodeOutput`](class_animationnodeoutput.md).

 **Note:** If multiple inputs exist in the **AnimationNode**, which time information takes precedence depends on the type of **AnimationNode**.

```

    var current_length = $AnimationTree[parameters/AnimationNodeName/current_length]
    var current_position = $AnimationTree[parameters/AnimationNodeName/current_position]
    var current_delta = $AnimationTree[parameters/AnimationNodeName/current_delta]
```



## 属性

|||
|:-:|:--|
| [`bool`](class_bool.md) | [`filter_enabled`](class_animationnode.md#class_animationnode_property_filter_enabled) |

## 方法

|||
|:-:|:--|
| [`String`](class_string.md)               | [`_get_caption`](class_animationnode.md#class_animationnode_private_method__get_caption) ( ) virtual[^virtual] const[^const]                                                                                                                                                                                                                                                                                                                                                |
| [`AnimationNode`](class_animationnode.md) | [`_get_child_by_name`](class_animationnode.md#class_animationnode_private_method__get_child_by_name) ( name: [`StringName`](class_stringname.md) ) virtual[^virtual] const[^const]                                                                                                                                                                                                                                                                                          |
| [`Dictionary`](class_dictionary.md)       | [`_get_child_nodes`](class_animationnode.md#class_animationnode_private_method__get_child_nodes) ( ) virtual[^virtual] const[^const]                                                                                                                                                                                                                                                                                                                                        |
| [`Variant`](class_variant.md)             | [`_get_parameter_default_value`](class_animationnode.md#class_animationnode_private_method__get_parameter_default_value) ( parameter: [`StringName`](class_stringname.md) ) virtual[^virtual] const[^const]                                                                                                                                                                                                                                                                 |
| [`Array`](class_array.md)                 | [`_get_parameter_list`](class_animationnode.md#class_animationnode_private_method__get_parameter_list) ( ) virtual[^virtual] const[^const]                                                                                                                                                                                                                                                                                                                                  |
| [`bool`](class_bool.md)                   | [`_has_filter`](class_animationnode.md#class_animationnode_private_method__has_filter) ( ) virtual[^virtual] const[^const]                                                                                                                                                                                                                                                                                                                                                  |
| [`bool`](class_bool.md)                   | [`_is_parameter_read_only`](class_animationnode.md#class_animationnode_private_method__is_parameter_read_only) ( parameter: [`StringName`](class_stringname.md) ) virtual[^virtual] const[^const]                                                                                                                                                                                                                                                                           |
| [`float`](class_float.md)                 | [`_process`](class_animationnode.md#class_animationnode_private_method__process) ( time: [`float`](class_float.md), seek: [`bool`](class_bool.md), is_external_seeking: [`bool`](class_bool.md), test_only: [`bool`](class_bool.md) ) virtual[^virtual]                                                                                                                                                                                                                     |
| [`bool`](class_bool.md)                   | [`add_input`](class_animationnode.md#class_animationnode_method_add_input) ( name: [`String`](class_string.md) )                                                                                                                                                                                                                                                                                                                                                            |
| `void`                                    | [`blend_animation`](class_animationnode.md#class_animationnode_method_blend_animation) ( animation: [`StringName`](class_stringname.md), time: [`float`](class_float.md), delta: [`float`](class_float.md), seeked: [`bool`](class_bool.md), is_external_seeking: [`bool`](class_bool.md), blend: [`float`](class_float.md), looped_flag: [LoopedFlag](#enum_animation_loopedflag) = 0 )                                                                                    |
| [`float`](class_float.md)                 | [`blend_input`](class_animationnode.md#class_animationnode_method_blend_input) ( input_index: [`int`](class_int.md), time: [`float`](class_float.md), seek: [`bool`](class_bool.md), is_external_seeking: [`bool`](class_bool.md), blend: [`float`](class_float.md), filter: [FilterAction](#enum_animationnode_filteraction) = 0, sync: [`bool`](class_bool.md) = true, test_only: [`bool`](class_bool.md) = false )                                                       |
| [`float`](class_float.md)                 | [`blend_node`](class_animationnode.md#class_animationnode_method_blend_node) ( name: [`StringName`](class_stringname.md), node: [`AnimationNode`](class_animationnode.md), time: [`float`](class_float.md), seek: [`bool`](class_bool.md), is_external_seeking: [`bool`](class_bool.md), blend: [`float`](class_float.md), filter: [FilterAction](#enum_animationnode_filteraction) = 0, sync: [`bool`](class_bool.md) = true, test_only: [`bool`](class_bool.md) = false ) |
| [`int`](class_int.md)                     | [`find_input`](class_animationnode.md#class_animationnode_method_find_input) ( name: [`String`](class_string.md) ) const[^const]                                                                                                                                                                                                                                                                                                                                            |
| [`int`](class_int.md)                     | [`get_input_count`](class_animationnode.md#class_animationnode_method_get_input_count) ( ) const[^const]                                                                                                                                                                                                                                                                                                                                                                    |
| [`String`](class_string.md)               | [`get_input_name`](class_animationnode.md#class_animationnode_method_get_input_name) ( input: [`int`](class_int.md) ) const[^const]                                                                                                                                                                                                                                                                                                                                         |
| [`Variant`](class_variant.md)             | [`get_parameter`](class_animationnode.md#class_animationnode_method_get_parameter) ( name: [`StringName`](class_stringname.md) ) const[^const]                                                                                                                                                                                                                                                                                                                              |
| [`bool`](class_bool.md)                   | [`is_path_filtered`](class_animationnode.md#class_animationnode_method_is_path_filtered) ( path: [`NodePath`](class_nodepath.md) ) const[^const]                                                                                                                                                                                                                                                                                                                            |
| `void`                                    | [`remove_input`](class_animationnode.md#class_animationnode_method_remove_input) ( index: [`int`](class_int.md) )                                                                                                                                                                                                                                                                                                                                                           |
| `void`                                    | [`set_filter_path`](class_animationnode.md#class_animationnode_method_set_filter_path) ( path: [`NodePath`](class_nodepath.md), enable: [`bool`](class_bool.md) )                                                                                                                                                                                                                                                                                                           |
| [`bool`](class_bool.md)                   | [`set_input_name`](class_animationnode.md#class_animationnode_method_set_input_name) ( input: [`int`](class_int.md), name: [`String`](class_string.md) )                                                                                                                                                                                                                                                                                                                    |
| `void`                                    | [`set_parameter`](class_animationnode.md#class_animationnode_method_set_parameter) ( name: [`StringName`](class_stringname.md), value: [`Variant`](class_variant.md) )                                                                                                                                                                                                                                                                                                      |

<!-- rst-class:: classref-section-separator -->

---

## 信号

<div id="_class_class_animationnode_signal_animation_node_removed"></div>

**animation_node_removed** ( object_id: [`int`](class_int.md), name: [`String`](class_string.md) ) <div id="class_animationnode_signal_animation_node_removed"></div>

Emitted by nodes that inherit from this class and that have an internal tree when one of their animation nodes removes. The animation nodes that emit this signal are [`AnimationNodeBlendSpace1D`](class_animationnodeblendspace1d.md), [`AnimationNodeBlendSpace2D`](class_animationnodeblendspace2d.md), [`AnimationNodeStateMachine`](class_animationnodestatemachine.md), and [`AnimationNodeBlendTree`](class_animationnodeblendtree.md).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_class_animationnode_signal_animation_node_renamed"></div>

**animation_node_renamed** ( object_id: [`int`](class_int.md), old_name: [`String`](class_string.md), new_name: [`String`](class_string.md) ) <div id="class_animationnode_signal_animation_node_renamed"></div>

Emitted by nodes that inherit from this class and that have an internal tree when one of their animation node names changes. The animation nodes that emit this signal are [`AnimationNodeBlendSpace1D`](class_animationnodeblendspace1d.md), [`AnimationNodeBlendSpace2D`](class_animationnodeblendspace2d.md), [`AnimationNodeStateMachine`](class_animationnodestatemachine.md), and [`AnimationNodeBlendTree`](class_animationnodeblendtree.md).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_class_animationnode_signal_tree_changed"></div>

**tree_changed** ( ) <div id="class_animationnode_signal_tree_changed"></div>

Emitted by nodes that inherit from this class and that have an internal tree when one of their animation nodes changes. The animation nodes that emit this signal are [`AnimationNodeBlendSpace1D`](class_animationnodeblendspace1d.md), [`AnimationNodeBlendSpace2D`](class_animationnodeblendspace2d.md), [`AnimationNodeStateMachine`](class_animationnodestatemachine.md), [`AnimationNodeBlendTree`](class_animationnodeblendtree.md) and [`AnimationNodeTransition`](class_animationnodetransition.md).

<!-- rst-class:: classref-section-separator -->

---

## 枚举

<div id="_class_enum_animationnode_filteraction"></div>

enum **FilterAction**: <div id="enum_animationnode_filteraction"></div>

<div id="_class_animationnode_constant_filter_ignore"></div>

[FilterAction](#enum_animationnode_filteraction) **FILTER_IGNORE** = ``0``

Do not use filtering.

<div id="_class_animationnode_constant_filter_pass"></div>

[FilterAction](#enum_animationnode_filteraction) **FILTER_PASS** = ``1``

Paths matching the filter will be allowed to pass.

<div id="_class_animationnode_constant_filter_stop"></div>

[FilterAction](#enum_animationnode_filteraction) **FILTER_STOP** = ``2``

Paths matching the filter will be discarded.

<div id="_class_animationnode_constant_filter_blend"></div>

[FilterAction](#enum_animationnode_filteraction) **FILTER_BLEND** = ``3``

Paths matching the filter will be blended (by the blend value).

<!-- rst-class:: classref-section-separator -->

---

## 属性说明

<div id="_class_animationnode_property_filter_enabled"></div>

[`bool`](class_bool.md) **filter_enabled** <div id="class_animationnode_property_filter_enabled"></div>

- `void` **set_filter_enabled** ( value: [`bool`](class_bool.md) )
- [`bool`](class_bool.md) **is_filter_enabled** ( )

If `true`, filtering is enabled.

<!-- rst-class:: classref-section-separator -->

---

## 方法说明

<div id="_class_animationnode_private_method__get_caption"></div>

[`String`](class_string.md) **_get_caption** ( ) virtual[^virtual] const[^const]<div id="class_animationnode_private_method__get_caption"></div>

When inheriting from [`AnimationRootNode`](class_animationrootnode.md), implement this virtual method to override the text caption for this animation node.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_animationnode_private_method__get_child_by_name"></div>

[`AnimationNode`](class_animationnode.md) **_get_child_by_name** ( name: [`StringName`](class_stringname.md) ) virtual[^virtual] const[^const]<div id="class_animationnode_private_method__get_child_by_name"></div>

When inheriting from [`AnimationRootNode`](class_animationrootnode.md), implement this virtual method to return a child animation node by its `name`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_animationnode_private_method__get_child_nodes"></div>

[`Dictionary`](class_dictionary.md) **_get_child_nodes** ( ) virtual[^virtual] const[^const]<div id="class_animationnode_private_method__get_child_nodes"></div>

When inheriting from [`AnimationRootNode`](class_animationrootnode.md), implement this virtual method to return all child animation nodes in order as a `name: node` dictionary.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_animationnode_private_method__get_parameter_default_value"></div>

[`Variant`](class_variant.md) **_get_parameter_default_value** ( parameter: [`StringName`](class_stringname.md) ) virtual[^virtual] const[^const]<div id="class_animationnode_private_method__get_parameter_default_value"></div>

When inheriting from [`AnimationRootNode`](class_animationrootnode.md), implement this virtual method to return the default value of a `parameter`. Parameters are custom local memory used for your animation nodes, given a resource can be reused in multiple trees.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_animationnode_private_method__get_parameter_list"></div>

[`Array`](class_array.md) **_get_parameter_list** ( ) virtual[^virtual] const[^const]<div id="class_animationnode_private_method__get_parameter_list"></div>

When inheriting from [`AnimationRootNode`](class_animationrootnode.md), implement this virtual method to return a list of the properties on this animation node. Parameters are custom local memory used for your animation nodes, given a resource can be reused in multiple trees. Format is similar to [`Object.get_property_list`](class_object.md#class_object_method_get_property_list).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_animationnode_private_method__has_filter"></div>

[`bool`](class_bool.md) **_has_filter** ( ) virtual[^virtual] const[^const]<div id="class_animationnode_private_method__has_filter"></div>

When inheriting from [`AnimationRootNode`](class_animationrootnode.md), implement this virtual method to return whether the blend tree editor should display filter editing on this animation node.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_animationnode_private_method__is_parameter_read_only"></div>

[`bool`](class_bool.md) **_is_parameter_read_only** ( parameter: [`StringName`](class_stringname.md) ) virtual[^virtual] const[^const]<div id="class_animationnode_private_method__is_parameter_read_only"></div>

When inheriting from [`AnimationRootNode`](class_animationrootnode.md), implement this virtual method to return whether the `parameter` is read-only. Parameters are custom local memory used for your animation nodes, given a resource can be reused in multiple trees.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_animationnode_private_method__process"></div>

[`float`](class_float.md) **_process** ( time: [`float`](class_float.md), seek: [`bool`](class_bool.md), is_external_seeking: [`bool`](class_bool.md), test_only: [`bool`](class_bool.md) ) virtual[^virtual]<div id="class_animationnode_private_method__process"></div>

**已弃用：** Currently this is mostly useless as there is a lack of many APIs to extend AnimationNode by GDScript. It is planned that a more flexible API using structures will be provided in the future.

When inheriting from [`AnimationRootNode`](class_animationrootnode.md), implement this virtual method to run some code when this animation node is processed. The `time` parameter is a relative delta, unless `seek` is `true`, in which case it is absolute.

Here, call the [`blend_input`](class_animationnode.md#class_animationnode_method_blend_input), [`blend_node`](class_animationnode.md#class_animationnode_method_blend_node) or [`blend_animation`](class_animationnode.md#class_animationnode_method_blend_animation) functions. You can also use [`get_parameter`](class_animationnode.md#class_animationnode_method_get_parameter) and [`set_parameter`](class_animationnode.md#class_animationnode_method_set_parameter) to modify local memory.

This function should return the delta.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_animationnode_method_add_input"></div>

[`bool`](class_bool.md) **add_input** ( name: [`String`](class_string.md) )<div id="class_animationnode_method_add_input"></div>

Adds an input to the animation node. This is only useful for animation nodes created for use in an [`AnimationNodeBlendTree`](class_animationnodeblendtree.md). If the addition fails, returns `false`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_animationnode_method_blend_animation"></div>

`void` **blend_animation** ( animation: [`StringName`](class_stringname.md), time: [`float`](class_float.md), delta: [`float`](class_float.md), seeked: [`bool`](class_bool.md), is_external_seeking: [`bool`](class_bool.md), blend: [`float`](class_float.md), looped_flag: [LoopedFlag](#enum_animation_loopedflag) = 0 )<div id="class_animationnode_method_blend_animation"></div>

Blend an animation by `blend` amount (name must be valid in the linked [`AnimationPlayer`](class_animationplayer.md)). A `time` and `delta` may be passed, as well as whether `seeked` happened.

A `looped_flag` is used by internal processing immediately after the loop. See also [LoopedFlag](#enum_animation_loopedflag).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_animationnode_method_blend_input"></div>

[`float`](class_float.md) **blend_input** ( input_index: [`int`](class_int.md), time: [`float`](class_float.md), seek: [`bool`](class_bool.md), is_external_seeking: [`bool`](class_bool.md), blend: [`float`](class_float.md), filter: [FilterAction](#enum_animationnode_filteraction) = 0, sync: [`bool`](class_bool.md) = true, test_only: [`bool`](class_bool.md) = false )<div id="class_animationnode_method_blend_input"></div>

Blend an input. This is only useful for animation nodes created for an [`AnimationNodeBlendTree`](class_animationnodeblendtree.md). The `time` parameter is a relative delta, unless `seek` is `true`, in which case it is absolute. A filter mode may be optionally passed (see [FilterAction](#enum_animationnode_filteraction) for options).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_animationnode_method_blend_node"></div>

[`float`](class_float.md) **blend_node** ( name: [`StringName`](class_stringname.md), node: [`AnimationNode`](class_animationnode.md), time: [`float`](class_float.md), seek: [`bool`](class_bool.md), is_external_seeking: [`bool`](class_bool.md), blend: [`float`](class_float.md), filter: [FilterAction](#enum_animationnode_filteraction) = 0, sync: [`bool`](class_bool.md) = true, test_only: [`bool`](class_bool.md) = false )<div id="class_animationnode_method_blend_node"></div>

Blend another animation node (in case this animation node contains child animation nodes). This function is only useful if you inherit from [`AnimationRootNode`](class_animationrootnode.md) instead, otherwise editors will not display your animation node for addition.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_animationnode_method_find_input"></div>

[`int`](class_int.md) **find_input** ( name: [`String`](class_string.md) ) const[^const]<div id="class_animationnode_method_find_input"></div>

Returns the input index which corresponds to `name`. If not found, returns `-1`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_animationnode_method_get_input_count"></div>

[`int`](class_int.md) **get_input_count** ( ) const[^const]<div id="class_animationnode_method_get_input_count"></div>

Amount of inputs in this animation node, only useful for animation nodes that go into [`AnimationNodeBlendTree`](class_animationnodeblendtree.md).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_animationnode_method_get_input_name"></div>

[`String`](class_string.md) **get_input_name** ( input: [`int`](class_int.md) ) const[^const]<div id="class_animationnode_method_get_input_name"></div>

Gets the name of an input by index.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_animationnode_method_get_parameter"></div>

[`Variant`](class_variant.md) **get_parameter** ( name: [`StringName`](class_stringname.md) ) const[^const]<div id="class_animationnode_method_get_parameter"></div>

Gets the value of a parameter. Parameters are custom local memory used for your animation nodes, given a resource can be reused in multiple trees.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_animationnode_method_is_path_filtered"></div>

[`bool`](class_bool.md) **is_path_filtered** ( path: [`NodePath`](class_nodepath.md) ) const[^const]<div id="class_animationnode_method_is_path_filtered"></div>

Returns whether the given path is filtered.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_animationnode_method_remove_input"></div>

`void` **remove_input** ( index: [`int`](class_int.md) )<div id="class_animationnode_method_remove_input"></div>

Removes an input, call this only when inactive.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_animationnode_method_set_filter_path"></div>

`void` **set_filter_path** ( path: [`NodePath`](class_nodepath.md), enable: [`bool`](class_bool.md) )<div id="class_animationnode_method_set_filter_path"></div>

Adds or removes a path for the filter.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_animationnode_method_set_input_name"></div>

[`bool`](class_bool.md) **set_input_name** ( input: [`int`](class_int.md), name: [`String`](class_string.md) )<div id="class_animationnode_method_set_input_name"></div>

Sets the name of the input at the given `input` index. If the setting fails, returns `false`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_animationnode_method_set_parameter"></div>

`void` **set_parameter** ( name: [`StringName`](class_stringname.md), value: [`Variant`](class_variant.md) )<div id="class_animationnode_method_set_parameter"></div>

Sets a custom parameter. These are used as local memory, because resources can be reused across the tree or scenes.

[^virtual]: 本方法通常需要用户覆盖才能生效。
[^const]: 本方法无副作用，不会修改该实例的任何成员变量。
[^vararg]: 本方法除了能接受在此处描述的参数外，还能够继续接受任意数量的参数。
[^constructor]: 本方法用于构造某个类型。
[^static]: 调用本方法无需实例，可直接使用类名进行调用。
[^operator]: 本方法描述的是使用本类型作为左操作数的有效运算符。
[^bitfield]: 这个值是由下列位标志构成位掩码的整数。
[^void]: 无返回值。
