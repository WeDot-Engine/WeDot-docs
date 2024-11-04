<!-- ⚠ 请勿编辑本文件 ⚠ -->
<!-- 本文档使用脚本从 WeDot 引擎源码仓库生成。 -->
<!-- 生成脚本：https://github.com/WeDot-Engine/WeDot/tree/4.3/doc/tools/make_md.py； -->
<!-- 原文件：https://github.com/WeDot-Engine/WeDot/tree/4.3/doc/classes/InputMap.xml。 -->

<div id="_class_inputmap"></div>

# InputMap

**继承：** [`Object`](class_object.md)

A singleton that manages all [`InputEventAction`](class_inputeventaction.md) s.

## 描述

Manages all [`InputEventAction`](class_inputeventaction.md) which can be created/modified from the project settings menu **Project > Project Settings > Input Map** or in code with [`add_action`](#class_inputmap_method_add_action) and [`action_add_event`](#class_inputmap_method_action_add_event). See [`Node._input`](#class_node_private_method__input).

## 方法

| `void`                                                      | [`action_add_event`](#class_inputmap_method_action_add_event) ( action: [`StringName`](class_stringname.md), event: [`InputEvent`](class_inputevent.md) )                                                           |
| `void`                                                      | [`action_erase_event`](#class_inputmap_method_action_erase_event) ( action: [`StringName`](class_stringname.md), event: [`InputEvent`](class_inputevent.md) )                                                       |
| `void`                                                      | [`action_erase_events`](#class_inputmap_method_action_erase_events) ( action: [`StringName`](class_stringname.md) )                                                                                                 |
| [`float`](class_float.md)                                   | [`action_get_deadzone`](#class_inputmap_method_action_get_deadzone) ( action: [`StringName`](class_stringname.md) )                                                                                                 |
| [Array](class_array.md) [`InputEvent`](class_inputevent.md) | [`action_get_events`](#class_inputmap_method_action_get_events) ( action: [`StringName`](class_stringname.md) )                                                                                                     |
| [`bool`](class_bool.md)                                     | [`action_has_event`](#class_inputmap_method_action_has_event) ( action: [`StringName`](class_stringname.md), event: [`InputEvent`](class_inputevent.md) )                                                           |
| `void`                                                      | [`action_set_deadzone`](#class_inputmap_method_action_set_deadzone) ( action: [`StringName`](class_stringname.md), deadzone: [`float`](class_float.md) )                                                            |
| `void`                                                      | [`add_action`](#class_inputmap_method_add_action) ( action: [`StringName`](class_stringname.md), deadzone: [`float`](class_float.md) = 0.5 )                                                                        |
| `void`                                                      | [`erase_action`](#class_inputmap_method_erase_action) ( action: [`StringName`](class_stringname.md) )                                                                                                               |
| [`bool`](class_bool.md)                                     | [`event_is_action`](#class_inputmap_method_event_is_action) ( event: [`InputEvent`](class_inputevent.md), action: [`StringName`](class_stringname.md), exact_match: [`bool`](class_bool.md) = false ) const[^const] |
| [Array](class_array.md) [`StringName`](class_stringname.md) | [`get_actions`](#class_inputmap_method_get_actions) ( )                                                                                                                                                             |
| [`bool`](class_bool.md)                                     | [`has_action`](#class_inputmap_method_has_action) ( action: [`StringName`](class_stringname.md) ) const[^const]                                                                                                     |
| `void`                                                      | [`load_from_project_settings`](#class_inputmap_method_load_from_project_settings) ( )                                                                                                                               |

<!-- rst-class:: classref-section-separator -->

---

## 方法说明

<div id="_class_inputmap_method_action_add_event"></div>

`void` **action_add_event** ( action: [`StringName`](class_stringname.md), event: [`InputEvent`](class_inputevent.md) )<div id="class_inputmap_method_action_add_event"></div>

Adds an [`InputEvent`](class_inputevent.md) to an action. This [`InputEvent`](class_inputevent.md) will trigger the action.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_inputmap_method_action_erase_event"></div>

`void` **action_erase_event** ( action: [`StringName`](class_stringname.md), event: [`InputEvent`](class_inputevent.md) )<div id="class_inputmap_method_action_erase_event"></div>

Removes an [`InputEvent`](class_inputevent.md) from an action.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_inputmap_method_action_erase_events"></div>

`void` **action_erase_events** ( action: [`StringName`](class_stringname.md) )<div id="class_inputmap_method_action_erase_events"></div>

Removes all events from an action.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_inputmap_method_action_get_deadzone"></div>

[`float`](class_float.md) **action_get_deadzone** ( action: [`StringName`](class_stringname.md) )<div id="class_inputmap_method_action_get_deadzone"></div>

Returns a deadzone value for the action.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_inputmap_method_action_get_events"></div>

[Array](class_array.md) [`InputEvent`](class_inputevent.md) **action_get_events** ( action: [`StringName`](class_stringname.md) )<div id="class_inputmap_method_action_get_events"></div>

Returns an array of [`InputEvent`](class_inputevent.md) s associated with a given action.

 **Note:** When used in the editor (e.g. a tool script or [`EditorPlugin`](class_editorplugin.md)), this method will return events for the editor action. If you want to access your project's input binds from the editor, read the `input/*` settings from [`ProjectSettings`](class_projectsettings.md).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_inputmap_method_action_has_event"></div>

[`bool`](class_bool.md) **action_has_event** ( action: [`StringName`](class_stringname.md), event: [`InputEvent`](class_inputevent.md) )<div id="class_inputmap_method_action_has_event"></div>

Returns `true` if the action has the given [`InputEvent`](class_inputevent.md) associated with it.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_inputmap_method_action_set_deadzone"></div>

`void` **action_set_deadzone** ( action: [`StringName`](class_stringname.md), deadzone: [`float`](class_float.md) )<div id="class_inputmap_method_action_set_deadzone"></div>

Sets a deadzone value for the action.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_inputmap_method_add_action"></div>

`void` **add_action** ( action: [`StringName`](class_stringname.md), deadzone: [`float`](class_float.md) = 0.5 )<div id="class_inputmap_method_add_action"></div>

Adds an empty action to the **InputMap** with a configurable `deadzone`.

An [`InputEvent`](class_inputevent.md) can then be added to this action with [`action_add_event`](#class_inputmap_method_action_add_event).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_inputmap_method_erase_action"></div>

`void` **erase_action** ( action: [`StringName`](class_stringname.md) )<div id="class_inputmap_method_erase_action"></div>

Removes an action from the **InputMap**.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_inputmap_method_event_is_action"></div>

[`bool`](class_bool.md) **event_is_action** ( event: [`InputEvent`](class_inputevent.md), action: [`StringName`](class_stringname.md), exact_match: [`bool`](class_bool.md) = false ) const[^const]<div id="class_inputmap_method_event_is_action"></div>

Returns `true` if the given event is part of an existing action. This method ignores keyboard modifiers if the given [`InputEvent`](class_inputevent.md) is not pressed (for proper release detection). See [`action_has_event`](#class_inputmap_method_action_has_event) if you don't want this behavior.

If `exact_match` is `false`, it ignores additional input modifiers for [`InputEventKey`](class_inputeventkey.md) and [`InputEventMouseButton`](class_inputeventmousebutton.md) events, and the direction for [`InputEventJoypadMotion`](class_inputeventjoypadmotion.md) events.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_inputmap_method_get_actions"></div>

[Array](class_array.md) [`StringName`](class_stringname.md) **get_actions** ( )<div id="class_inputmap_method_get_actions"></div>

Returns an array of all actions in the **InputMap**.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_inputmap_method_has_action"></div>

[`bool`](class_bool.md) **has_action** ( action: [`StringName`](class_stringname.md) ) const[^const]<div id="class_inputmap_method_has_action"></div>

Returns `true` if the **InputMap** has a registered action with the given name.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_inputmap_method_load_from_project_settings"></div>

`void` **load_from_project_settings** ( )<div id="class_inputmap_method_load_from_project_settings"></div>

Clears all [`InputEventAction`](class_inputeventaction.md) in the **InputMap** and load it anew from [`ProjectSettings`](class_projectsettings.md).

[^virtual]: 本方法通常需要用户覆盖才能生效。
[^const]: 本方法无副作用，不会修改该实例的任何成员变量。
[^vararg]: 本方法除了能接受在此处描述的参数外，还能够继续接受任意数量的参数。
[^constructor]: 本方法用于构造某个类型。
[^static]: 调用本方法无需实例，可直接使用类名进行调用。
[^operator]: 本方法描述的是使用本类型作为左操作数的有效运算符。
[^bitfield]: 这个值是由下列位标志构成位掩码的整数。
[^void]: 无返回值。
