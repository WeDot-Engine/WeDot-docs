<!-- ⚠ 请勿编辑本文件 ⚠ -->
<!-- 本文档使用脚本从 WeDot 引擎源码仓库生成。 -->
<!-- 生成脚本：https://github.com/WeDot-Engine/WeDot/tree/4.3/doc/tools/make_md.py； -->
<!-- 原文件：https://github.com/WeDot-Engine/WeDot/tree/4.3/doc/classes/UndoRedo.xml。 -->

<div id="_class_undoredo"></div>

# UndoRedo

**继承：** [`Object`](class_object.md)

Provides a high-level interface for implementing undo and redo operations.

## 描述

UndoRedo works by registering methods and property changes inside "actions". You can create an action, then provide ways to do and undo this action using function calls and property changes, then commit the action.

When an action is committed, all of the `do_*` methods will run. If the [`undo`](#class_undoredo_method_undo) method is used, the `undo_*` methods will run. If the [`redo`](#class_undoredo_method_redo) method is used, once again, all of the `do_*` methods will run.

Here's an example on how to add an action:



```gdscript

    var undo_redo = UndoRedo.new()
    
    func do_something():
        pass # Put your code here.
    
    func undo_something():
        pass # Put here the code that reverts what's done by "do_something()".
    
    func _on_my_button_pressed():
        var node = get_node("MyNode2D")
        undo_redo.create_action("Move the node")
        undo_redo.add_do_method(do_something)
        undo_redo.add_undo_method(undo_something)
        undo_redo.add_do_property(node, "position", Vector2(100,100))
        undo_redo.add_undo_property(node, "position", node.position)
        undo_redo.commit_action()
```

```csharp

    private UndoRedo _undoRedo;
    
    public override void _Ready()
    {
        _undoRedo = new UndoRedo();
    }
    
    public void DoSomething()
    {
        // Put your code here.
    }
    
    public void UndoSomething()
    {
        // Put here the code that reverts what's done by "DoSomething()".
    }
    
    private void OnMyButtonPressed()
    {
        var node = GetNode<Node2D>("MyNode2D");
        _undoRedo.CreateAction("Move the node");
        _undoRedo.AddDoMethod(new Callable(this, MethodName.DoSomething));
        _undoRedo.AddUndoMethod(new Callable(this, MethodName.UndoSomething));
        _undoRedo.AddDoProperty(node, "position", new Vector2(100, 100));
        _undoRedo.AddUndoProperty(node, "position", node.Position);
        _undoRedo.CommitAction();
    }
```



Before calling any of the `add_(un)do_*` methods, you need to first call [`create_action`](#class_undoredo_method_create_action). Afterwards you need to call [`commit_action`](#class_undoredo_method_commit_action).

If you don't need to register a method, you can leave [`add_do_method`](#class_undoredo_method_add_do_method) and [`add_undo_method`](#class_undoredo_method_add_undo_method) out; the same goes for properties. You can also register more than one method/property.

If you are making an [`EditorPlugin`](class_editorplugin.md) and want to integrate into the editor's undo history, use [`EditorUndoRedoManager`](class_editorundoredomanager.md) instead.

If you are registering multiple properties/method which depend on one another, be aware that by default undo operation are called in the same order they have been added. Therefore instead of grouping do operation with their undo operations it is better to group do on one side and undo on the other as shown below.



```gdscript

    undo_redo.create_action("Add object")
    
    # DO
    undo_redo.add_do_method(_create_object)
    undo_redo.add_do_method(_add_object_to_singleton)
    
    # UNDO
    undo_redo.add_undo_method(_remove_object_from_singleton)
    undo_redo.add_undo_method(_destroy_that_object)
    
    undo_redo.commit_action()
```

```csharp

    _undo_redo.CreateAction("Add object");
    
    // DO
    _undo_redo.AddDoMethod(new Callable(this, MethodName.CreateObject));
    _undo_redo.AddDoMethod(new Callable(this, MethodName.AddObjectToSingleton));
    
    // UNDO
    _undo_redo.AddUndoMethod(new Callable(this, MethodName.RemoveObjectFromSingleton));
    _undo_redo.AddUndoMethod(new Callable(this, MethodName.DestroyThatObject));
    
    _undo_redo.CommitAction();
```











## 属性

| [`int`](class_int.md) | [`max_steps`](#class_undoredo_property_max_steps) | ``0`` |

## 方法

| `void`                      | [`add_do_method`](#class_undoredo_method_add_do_method) ( callable: [`Callable`](class_callable.md) )                                                                                                    |
| `void`                      | [`add_do_property`](#class_undoredo_method_add_do_property) ( object: [`Object`](class_object.md), property: [`StringName`](class_stringname.md), value: [`Variant`](class_variant.md) )                 |
| `void`                      | [`add_do_reference`](#class_undoredo_method_add_do_reference) ( object: [`Object`](class_object.md) )                                                                                                    |
| `void`                      | [`add_undo_method`](#class_undoredo_method_add_undo_method) ( callable: [`Callable`](class_callable.md) )                                                                                                |
| `void`                      | [`add_undo_property`](#class_undoredo_method_add_undo_property) ( object: [`Object`](class_object.md), property: [`StringName`](class_stringname.md), value: [`Variant`](class_variant.md) )             |
| `void`                      | [`add_undo_reference`](#class_undoredo_method_add_undo_reference) ( object: [`Object`](class_object.md) )                                                                                                |
| `void`                      | [`clear_history`](#class_undoredo_method_clear_history) ( increase_version: [`bool`](class_bool.md) = true )                                                                                             |
| `void`                      | [`commit_action`](#class_undoredo_method_commit_action) ( execute: [`bool`](class_bool.md) = true )                                                                                                      |
| `void`                      | [`create_action`](#class_undoredo_method_create_action) ( name: [`String`](class_string.md), merge_mode: [MergeMode](#enum_undoredo_mergemode) = 0, backward_undo_ops: [`bool`](class_bool.md) = false ) |
| `void`                      | [`end_force_keep_in_merge_ends`](#class_undoredo_method_end_force_keep_in_merge_ends) ( )                                                                                                                |
| [`String`](class_string.md) | [`get_action_name`](#class_undoredo_method_get_action_name) ( id: [`int`](class_int.md) )                                                                                                                |
| [`int`](class_int.md)       | [`get_current_action`](#class_undoredo_method_get_current_action) ( )                                                                                                                                    |
| [`String`](class_string.md) | [`get_current_action_name`](#class_undoredo_method_get_current_action_name) ( ) const[^const]                                                                                                            |
| [`int`](class_int.md)       | [`get_history_count`](#class_undoredo_method_get_history_count) ( )                                                                                                                                      |
| [`int`](class_int.md)       | [`get_version`](#class_undoredo_method_get_version) ( ) const[^const]                                                                                                                                    |
| [`bool`](class_bool.md)     | [`has_redo`](#class_undoredo_method_has_redo) ( ) const[^const]                                                                                                                                          |
| [`bool`](class_bool.md)     | [`has_undo`](#class_undoredo_method_has_undo) ( ) const[^const]                                                                                                                                          |
| [`bool`](class_bool.md)     | [`is_committing_action`](#class_undoredo_method_is_committing_action) ( ) const[^const]                                                                                                                  |
| [`bool`](class_bool.md)     | [`redo`](#class_undoredo_method_redo) ( )                                                                                                                                                                |
| `void`                      | [`start_force_keep_in_merge_ends`](#class_undoredo_method_start_force_keep_in_merge_ends) ( )                                                                                                            |
| [`bool`](class_bool.md)     | [`undo`](#class_undoredo_method_undo) ( )                                                                                                                                                                |

<!-- rst-class:: classref-section-separator -->

---

## 信号

<div id="_class_class_undoredo_signal_version_changed"></div>

**version_changed** ( ) <div id="class_undoredo_signal_version_changed"></div>

Called when [`undo`](#class_undoredo_method_undo) or [`redo`](#class_undoredo_method_redo) was called.

<!-- rst-class:: classref-section-separator -->

---

## 枚举

<div id="_class_enum_undoredo_mergemode"></div>

enum **MergeMode**: <div id="enum_undoredo_mergemode"></div>

<div id="_class_undoredo_constant_merge_disable"></div>

[MergeMode](#enum_undoredo_mergemode) **MERGE_DISABLE** = ``0``

Makes "do"/"undo" operations stay in separate actions.

<div id="_class_undoredo_constant_merge_ends"></div>

[MergeMode](#enum_undoredo_mergemode) **MERGE_ENDS** = ``1``

Merges this action with the previous one if they have the same name. Keeps only the first action's "undo" operations and the last action's "do" operations. Useful for sequential changes to a single value.

<div id="_class_undoredo_constant_merge_all"></div>

[MergeMode](#enum_undoredo_mergemode) **MERGE_ALL** = ``2``

Merges this action with the previous one if they have the same name.

<!-- rst-class:: classref-section-separator -->

---

## 属性说明

<div id="_class_undoredo_property_max_steps"></div>

[`int`](class_int.md) **max_steps** = ``0`` <div id="class_undoredo_property_max_steps"></div>

- `void` **set_max_steps** ( value: [`int`](class_int.md) )
- [`int`](class_int.md) **get_max_steps** ( )

The maximum number of steps that can be stored in the undo/redo history. If the number of stored steps exceeds this limit, older steps are removed from history and can no longer be reached by calling [`undo`](#class_undoredo_method_undo). A value of `0` or lower means no limit.

<!-- rst-class:: classref-section-separator -->

---

## 方法说明

<div id="_class_undoredo_method_add_do_method"></div>

`void` **add_do_method** ( callable: [`Callable`](class_callable.md) )<div id="class_undoredo_method_add_do_method"></div>

Register a [`Callable`](class_callable.md) that will be called when the action is committed.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_undoredo_method_add_do_property"></div>

`void` **add_do_property** ( object: [`Object`](class_object.md), property: [`StringName`](class_stringname.md), value: [`Variant`](class_variant.md) )<div id="class_undoredo_method_add_do_property"></div>

Register a `property` that would change its value to `value` when the action is committed.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_undoredo_method_add_do_reference"></div>

`void` **add_do_reference** ( object: [`Object`](class_object.md) )<div id="class_undoredo_method_add_do_reference"></div>

Register a reference to an object that will be erased if the "do" history is deleted. This is useful for objects added by the "do" action and removed by the "undo" action.

When the "do" history is deleted, if the object is a [`RefCounted`](class_refcounted.md), it will be unreferenced. Otherwise, it will be freed. Do not use for resources.

```

    var node = Node2D.new()
    undo_redo.create_action("Add node")
    undo_redo.add_do_method(add_child.bind(node))
    undo_redo.add_do_reference(node)
    undo_redo.add_undo_method(remove_child.bind(node))
    undo_redo.commit_action()
```



<!-- rst-class:: classref-item-separator -->

---

<div id="_class_undoredo_method_add_undo_method"></div>

`void` **add_undo_method** ( callable: [`Callable`](class_callable.md) )<div id="class_undoredo_method_add_undo_method"></div>

Register a [`Callable`](class_callable.md) that will be called when the action is undone.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_undoredo_method_add_undo_property"></div>

`void` **add_undo_property** ( object: [`Object`](class_object.md), property: [`StringName`](class_stringname.md), value: [`Variant`](class_variant.md) )<div id="class_undoredo_method_add_undo_property"></div>

Register a `property` that would change its value to `value` when the action is undone.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_undoredo_method_add_undo_reference"></div>

`void` **add_undo_reference** ( object: [`Object`](class_object.md) )<div id="class_undoredo_method_add_undo_reference"></div>

Register a reference to an object that will be erased if the "undo" history is deleted. This is useful for objects added by the "undo" action and removed by the "do" action.

When the "undo" history is deleted, if the object is a [`RefCounted`](class_refcounted.md), it will be unreferenced. Otherwise, it will be freed. Do not use for resources.

```

    var node = $Node2D
    undo_redo.create_action("Remove node")
    undo_redo.add_do_method(remove_child.bind(node))
    undo_redo.add_undo_method(add_child.bind(node))
    undo_redo.add_undo_reference(node)
    undo_redo.commit_action()
```



<!-- rst-class:: classref-item-separator -->

---

<div id="_class_undoredo_method_clear_history"></div>

`void` **clear_history** ( increase_version: [`bool`](class_bool.md) = true )<div id="class_undoredo_method_clear_history"></div>

Clear the undo/redo history and associated references.

Passing `false` to `increase_version` will prevent the version number from increasing when the history is cleared.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_undoredo_method_commit_action"></div>

`void` **commit_action** ( execute: [`bool`](class_bool.md) = true )<div id="class_undoredo_method_commit_action"></div>

Commit the action. If `execute` is `true` (which it is by default), all "do" methods/properties are called/set when this function is called.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_undoredo_method_create_action"></div>

`void` **create_action** ( name: [`String`](class_string.md), merge_mode: [MergeMode](#enum_undoredo_mergemode) = 0, backward_undo_ops: [`bool`](class_bool.md) = false )<div id="class_undoredo_method_create_action"></div>

Create a new action. After this is called, do all your calls to [`add_do_method`](#class_undoredo_method_add_do_method), [`add_undo_method`](#class_undoredo_method_add_undo_method), [`add_do_property`](#class_undoredo_method_add_do_property), and [`add_undo_property`](#class_undoredo_method_add_undo_property), then commit the action with [`commit_action`](#class_undoredo_method_commit_action).

The way actions are merged is dictated by `merge_mode`. See [MergeMode](#enum_undoredo_mergemode) for details.

The way undo operation are ordered in actions is dictated by `backward_undo_ops`. When `backward_undo_ops` is `false` undo option are ordered in the same order they were added. Which means the first operation to be added will be the first to be undone.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_undoredo_method_end_force_keep_in_merge_ends"></div>

`void` **end_force_keep_in_merge_ends** ( )<div id="class_undoredo_method_end_force_keep_in_merge_ends"></div>

Stops marking operations as to be processed even if the action gets merged with another in the [`MERGE_ENDS`](#class_undoredo_constant_merge_ends) mode. See [`start_force_keep_in_merge_ends`](#class_undoredo_method_start_force_keep_in_merge_ends).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_undoredo_method_get_action_name"></div>

[`String`](class_string.md) **get_action_name** ( id: [`int`](class_int.md) )<div id="class_undoredo_method_get_action_name"></div>

Gets the action name from its index.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_undoredo_method_get_current_action"></div>

[`int`](class_int.md) **get_current_action** ( )<div id="class_undoredo_method_get_current_action"></div>

Gets the index of the current action.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_undoredo_method_get_current_action_name"></div>

[`String`](class_string.md) **get_current_action_name** ( ) const[^const]<div id="class_undoredo_method_get_current_action_name"></div>

Gets the name of the current action, equivalent to `get_action_name(get_current_action())`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_undoredo_method_get_history_count"></div>

[`int`](class_int.md) **get_history_count** ( )<div id="class_undoredo_method_get_history_count"></div>

Returns how many elements are in the history.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_undoredo_method_get_version"></div>

[`int`](class_int.md) **get_version** ( ) const[^const]<div id="class_undoredo_method_get_version"></div>

Gets the version. Every time a new action is committed, the **UndoRedo**'s version number is increased automatically.

This is useful mostly to check if something changed from a saved version.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_undoredo_method_has_redo"></div>

[`bool`](class_bool.md) **has_redo** ( ) const[^const]<div id="class_undoredo_method_has_redo"></div>

Returns `true` if a "redo" action is available.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_undoredo_method_has_undo"></div>

[`bool`](class_bool.md) **has_undo** ( ) const[^const]<div id="class_undoredo_method_has_undo"></div>

Returns `true` if an "undo" action is available.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_undoredo_method_is_committing_action"></div>

[`bool`](class_bool.md) **is_committing_action** ( ) const[^const]<div id="class_undoredo_method_is_committing_action"></div>

Returns `true` if the **UndoRedo** is currently committing the action, i.e. running its "do" method or property change (see [`commit_action`](#class_undoredo_method_commit_action)).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_undoredo_method_redo"></div>

[`bool`](class_bool.md) **redo** ( )<div id="class_undoredo_method_redo"></div>

Redo the last action.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_undoredo_method_start_force_keep_in_merge_ends"></div>

`void` **start_force_keep_in_merge_ends** ( )<div id="class_undoredo_method_start_force_keep_in_merge_ends"></div>

Marks the next "do" and "undo" operations to be processed even if the action gets merged with another in the [`MERGE_ENDS`](#class_undoredo_constant_merge_ends) mode. Return to normal operation using [`end_force_keep_in_merge_ends`](#class_undoredo_method_end_force_keep_in_merge_ends).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_undoredo_method_undo"></div>

[`bool`](class_bool.md) **undo** ( )<div id="class_undoredo_method_undo"></div>

Undo the last action.

[^virtual]: 本方法通常需要用户覆盖才能生效。
[^const]: 本方法无副作用，不会修改该实例的任何成员变量。
[^vararg]: 本方法除了能接受在此处描述的参数外，还能够继续接受任意数量的参数。
[^constructor]: 本方法用于构造某个类型。
[^static]: 调用本方法无需实例，可直接使用类名进行调用。
[^operator]: 本方法描述的是使用本类型作为左操作数的有效运算符。
[^bitfield]: 这个值是由下列位标志构成位掩码的整数。
[^void]: 无返回值。
