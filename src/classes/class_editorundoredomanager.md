<!-- ⚠ 请勿编辑本文件 ⚠ -->
<!-- 本文档使用脚本从 WeDot 引擎源码仓库生成。 -->
<!-- 生成脚本：https://github.com/WeDot-Engine/WeDot/tree/master/doc/tools/make_md.py； -->
<!-- 原文件：https://github.com/WeDot-Engine/WeDot/tree/master/doc/classes/EditorUndoRedoManager.xml。 -->

<div id="_class_editorundoredomanager"></div>

# EditorUndoRedoManager

**继承：** [`Object`](class_object.md)

Manages undo history of scenes opened in the editor.

## 描述

**EditorUndoRedoManager** is a manager for [`UndoRedo`](class_undoredo.md) objects associated with edited scenes. Each scene has its own undo history and **EditorUndoRedoManager** ensures that each action performed in the editor gets associated with a proper scene. For actions not related to scenes ([`ProjectSettings`](class_projectsettings.md) edits, external resources, etc.), a separate global history is used.

The usage is mostly the same as [`UndoRedo`](class_undoredo.md). You create and commit actions and the manager automatically decides under-the-hood what scenes it belongs to. The scene is deduced based on the first operation in an action, using the object from the operation. The rules are as follows:

- If the object is a [`Node`](class_node.md), use the currently edited scene;

- If the object is a built-in resource, use the scene from its path;

- If the object is external resource or anything else, use global history.

This guessing can sometimes yield false results, so you can provide a custom context object when creating an action.

 **EditorUndoRedoManager** is intended to be used by Godot editor plugins. You can obtain it using [`EditorPlugin.get_undo_redo`](class_editorplugin.md#class_editorplugin_method_get_undo_redo). For non-editor uses or plugins that don't need to integrate with the editor's undo history, use [`UndoRedo`](class_undoredo.md) instead.

The manager's API is mostly the same as in [`UndoRedo`](class_undoredo.md), so you can refer to its documentation for more examples. The main difference is that **EditorUndoRedoManager** uses object + method name for actions, instead of [`Callable`](class_callable.md).

## 方法

|||
|:-:|:--|
| `void`                          | [`add_do_method`](class_editorundoredomanager.md#class_editorundoredomanager_method_add_do_method) ( object: [`Object`](class_object.md), method: [`StringName`](class_stringname.md), ... ) vararg[^vararg]                                                                                            |
| `void`                          | [`add_do_property`](class_editorundoredomanager.md#class_editorundoredomanager_method_add_do_property) ( object: [`Object`](class_object.md), property: [`StringName`](class_stringname.md), value: [`Variant`](class_variant.md) )                                                                     |
| `void`                          | [`add_do_reference`](class_editorundoredomanager.md#class_editorundoredomanager_method_add_do_reference) ( object: [`Object`](class_object.md) )                                                                                                                                                        |
| `void`                          | [`add_undo_method`](class_editorundoredomanager.md#class_editorundoredomanager_method_add_undo_method) ( object: [`Object`](class_object.md), method: [`StringName`](class_stringname.md), ... ) vararg[^vararg]                                                                                        |
| `void`                          | [`add_undo_property`](class_editorundoredomanager.md#class_editorundoredomanager_method_add_undo_property) ( object: [`Object`](class_object.md), property: [`StringName`](class_stringname.md), value: [`Variant`](class_variant.md) )                                                                 |
| `void`                          | [`add_undo_reference`](class_editorundoredomanager.md#class_editorundoredomanager_method_add_undo_reference) ( object: [`Object`](class_object.md) )                                                                                                                                                    |
| `void`                          | [`clear_history`](class_editorundoredomanager.md#class_editorundoredomanager_method_clear_history) ( id: [`int`](class_int.md) = -99, increase_version: [`bool`](class_bool.md) = true )                                                                                                                |
| `void`                          | [`commit_action`](class_editorundoredomanager.md#class_editorundoredomanager_method_commit_action) ( execute: [`bool`](class_bool.md) = true )                                                                                                                                                          |
| `void`                          | [`create_action`](class_editorundoredomanager.md#class_editorundoredomanager_method_create_action) ( name: [`String`](class_string.md), merge_mode: [MergeMode](#enum_undoredo_mergemode) = 0, custom_context: [`Object`](class_object.md) = null, backward_undo_ops: [`bool`](class_bool.md) = false ) |
| `void`                          | [`force_fixed_history`](class_editorundoredomanager.md#class_editorundoredomanager_method_force_fixed_history) ( )                                                                                                                                                                                      |
| [`UndoRedo`](class_undoredo.md) | [`get_history_undo_redo`](class_editorundoredomanager.md#class_editorundoredomanager_method_get_history_undo_redo) ( id: [`int`](class_int.md) ) const[^const]                                                                                                                                          |
| [`int`](class_int.md)           | [`get_object_history_id`](class_editorundoredomanager.md#class_editorundoredomanager_method_get_object_history_id) ( object: [`Object`](class_object.md) ) const[^const]                                                                                                                                |
| [`bool`](class_bool.md)         | [`is_committing_action`](class_editorundoredomanager.md#class_editorundoredomanager_method_is_committing_action) ( ) const[^const]                                                                                                                                                                      |

<!-- rst-class:: classref-section-separator -->

---

## 信号

<div id="_class_class_editorundoredomanager_signal_history_changed"></div>

**history_changed** ( ) <div id="class_editorundoredomanager_signal_history_changed"></div>

Emitted when the list of actions in any history has changed, either when an action is committed or a history is cleared.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_class_editorundoredomanager_signal_version_changed"></div>

**version_changed** ( ) <div id="class_editorundoredomanager_signal_version_changed"></div>

Emitted when the version of any history has changed as a result of undo or redo call.

<!-- rst-class:: classref-section-separator -->

---

## 枚举

<div id="_class_enum_editorundoredomanager_specialhistory"></div>

enum **SpecialHistory**: <div id="enum_editorundoredomanager_specialhistory"></div>

<div id="_class_editorundoredomanager_constant_global_history"></div>

[SpecialHistory](#enum_editorundoredomanager_specialhistory) **GLOBAL_HISTORY** = ``0``

Global history not associated with any scene, but with external resources etc.

<div id="_class_editorundoredomanager_constant_remote_history"></div>

[SpecialHistory](#enum_editorundoredomanager_specialhistory) **REMOTE_HISTORY** = ``-9``

History associated with remote inspector. Used when live editing a running project.

<div id="_class_editorundoredomanager_constant_invalid_history"></div>

[SpecialHistory](#enum_editorundoredomanager_specialhistory) **INVALID_HISTORY** = ``-99``

Invalid "null" history. It's a special value, not associated with any object.

<!-- rst-class:: classref-section-separator -->

---

## 方法说明

<div id="_class_editorundoredomanager_method_add_do_method"></div>

`void` **add_do_method** ( object: [`Object`](class_object.md), method: [`StringName`](class_stringname.md), ... ) vararg[^vararg]<div id="class_editorundoredomanager_method_add_do_method"></div>

Register a method that will be called when the action is committed (i.e. the "do" action).

If this is the first operation, the `object` will be used to deduce target undo history.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorundoredomanager_method_add_do_property"></div>

`void` **add_do_property** ( object: [`Object`](class_object.md), property: [`StringName`](class_stringname.md), value: [`Variant`](class_variant.md) )<div id="class_editorundoredomanager_method_add_do_property"></div>

Register a property value change for "do".

If this is the first operation, the `object` will be used to deduce target undo history.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorundoredomanager_method_add_do_reference"></div>

`void` **add_do_reference** ( object: [`Object`](class_object.md) )<div id="class_editorundoredomanager_method_add_do_reference"></div>

Register a reference for "do" that will be erased if the "do" history is lost. This is useful mostly for new nodes created for the "do" call. Do not use for resources.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorundoredomanager_method_add_undo_method"></div>

`void` **add_undo_method** ( object: [`Object`](class_object.md), method: [`StringName`](class_stringname.md), ... ) vararg[^vararg]<div id="class_editorundoredomanager_method_add_undo_method"></div>

Register a method that will be called when the action is undone (i.e. the "undo" action).

If this is the first operation, the `object` will be used to deduce target undo history.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorundoredomanager_method_add_undo_property"></div>

`void` **add_undo_property** ( object: [`Object`](class_object.md), property: [`StringName`](class_stringname.md), value: [`Variant`](class_variant.md) )<div id="class_editorundoredomanager_method_add_undo_property"></div>

Register a property value change for "undo".

If this is the first operation, the `object` will be used to deduce target undo history.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorundoredomanager_method_add_undo_reference"></div>

`void` **add_undo_reference** ( object: [`Object`](class_object.md) )<div id="class_editorundoredomanager_method_add_undo_reference"></div>

Register a reference for "undo" that will be erased if the "undo" history is lost. This is useful mostly for nodes removed with the "do" call (not the "undo" call!).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorundoredomanager_method_clear_history"></div>

`void` **clear_history** ( id: [`int`](class_int.md) = -99, increase_version: [`bool`](class_bool.md) = true )<div id="class_editorundoredomanager_method_clear_history"></div>

Clears the given undo history. You can clear history for a specific scene, global history, or for all scenes at once if `id` is [`INVALID_HISTORY`](class_editorundoredomanager.md#class_editorundoredomanager_constant_invalid_history).

If `increase_version` is `true`, the undo history version will be increased, marking it as unsaved. Useful for operations that modify the scene, but don't support undo.

```

    var scene_root = EditorInterface.get_edited_scene_root()
    var undo_redo = EditorInterface.get_editor_undo_redo()
    undo_redo.clear_history(undo_redo.get_object_history_id(scene_root))
```

 **Note:** If you want to mark an edited scene as unsaved without clearing its history, use [`EditorInterface.mark_scene_as_unsaved`](class_editorinterface.md#class_editorinterface_method_mark_scene_as_unsaved) instead.



<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorundoredomanager_method_commit_action"></div>

`void` **commit_action** ( execute: [`bool`](class_bool.md) = true )<div id="class_editorundoredomanager_method_commit_action"></div>

Commit the action. If `execute` is true (default), all "do" methods/properties are called/set when this function is called.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorundoredomanager_method_create_action"></div>

`void` **create_action** ( name: [`String`](class_string.md), merge_mode: [MergeMode](#enum_undoredo_mergemode) = 0, custom_context: [`Object`](class_object.md) = null, backward_undo_ops: [`bool`](class_bool.md) = false )<div id="class_editorundoredomanager_method_create_action"></div>

Create a new action. After this is called, do all your calls to [`add_do_method`](class_editorundoredomanager.md#class_editorundoredomanager_method_add_do_method), [`add_undo_method`](class_editorundoredomanager.md#class_editorundoredomanager_method_add_undo_method), [`add_do_property`](class_editorundoredomanager.md#class_editorundoredomanager_method_add_do_property), and [`add_undo_property`](class_editorundoredomanager.md#class_editorundoredomanager_method_add_undo_property), then commit the action with [`commit_action`](class_editorundoredomanager.md#class_editorundoredomanager_method_commit_action).

The way actions are merged is dictated by the `merge_mode` argument. See [MergeMode](#enum_undoredo_mergemode) for details.

If `custom_context` object is provided, it will be used for deducing target history (instead of using the first operation).

The way undo operation are ordered in actions is dictated by `backward_undo_ops`. When `backward_undo_ops` is `false` undo option are ordered in the same order they were added. Which means the first operation to be added will be the first to be undone.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorundoredomanager_method_force_fixed_history"></div>

`void` **force_fixed_history** ( )<div id="class_editorundoredomanager_method_force_fixed_history"></div>

Forces the next operation (e.g. [`add_do_method`](class_editorundoredomanager.md#class_editorundoredomanager_method_add_do_method)) to use the action's history rather than guessing it from the object. This is sometimes needed when a history can't be correctly determined, like for a nested resource that doesn't have a path yet.

This method should only be used when absolutely necessary, otherwise it might cause invalid history state. For most of complex cases, the `custom_context` parameter of [`create_action`](class_editorundoredomanager.md#class_editorundoredomanager_method_create_action) is sufficient.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorundoredomanager_method_get_history_undo_redo"></div>

[`UndoRedo`](class_undoredo.md) **get_history_undo_redo** ( id: [`int`](class_int.md) ) const[^const]<div id="class_editorundoredomanager_method_get_history_undo_redo"></div>

Returns the [`UndoRedo`](class_undoredo.md) object associated with the given history `id`.

 `id` above `0` are mapped to the opened scene tabs (but it doesn't match their order). `id` of `0` or lower have special meaning (see [SpecialHistory](#enum_editorundoredomanager_specialhistory)).

Best used with [`get_object_history_id`](class_editorundoredomanager.md#class_editorundoredomanager_method_get_object_history_id). This method is only provided in case you need some more advanced methods of [`UndoRedo`](class_undoredo.md) (but keep in mind that directly operating on the [`UndoRedo`](class_undoredo.md) object might affect editor's stability).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorundoredomanager_method_get_object_history_id"></div>

[`int`](class_int.md) **get_object_history_id** ( object: [`Object`](class_object.md) ) const[^const]<div id="class_editorundoredomanager_method_get_object_history_id"></div>

Returns the history ID deduced from the given `object`. It can be used with [`get_history_undo_redo`](class_editorundoredomanager.md#class_editorundoredomanager_method_get_history_undo_redo).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorundoredomanager_method_is_committing_action"></div>

[`bool`](class_bool.md) **is_committing_action** ( ) const[^const]<div id="class_editorundoredomanager_method_is_committing_action"></div>

Returns `true` if the **EditorUndoRedoManager** is currently committing the action, i.e. running its "do" method or property change (see [`commit_action`](class_editorundoredomanager.md#class_editorundoredomanager_method_commit_action)).

[^virtual]: 本方法通常需要用户覆盖才能生效。
[^const]: 本方法无副作用，不会修改该实例的任何成员变量。
[^vararg]: 本方法除了能接受在此处描述的参数外，还能够继续接受任意数量的参数。
[^constructor]: 本方法用于构造某个类型。
[^static]: 调用本方法无需实例，可直接使用类名进行调用。
[^operator]: 本方法描述的是使用本类型作为左操作数的有效运算符。
[^bitfield]: 这个值是由下列位标志构成位掩码的整数。
[^void]: 无返回值。
