<!-- ⚠ 请勿编辑本文件 ⚠ -->
<!-- 本文档使用脚本从 WeDot 引擎源码仓库生成。 -->
<!-- 生成脚本：https://github.com/WeDot-Engine/WeDot/tree/master/doc/tools/make_md.py； -->
<!-- 原文件：https://github.com/WeDot-Engine/WeDot/tree/master/modules/multiplayer/doc_classes/MultiplayerSynchronizer.xml。 -->

<div id="_class_multiplayersynchronizer"></div>

# MultiplayerSynchronizer

**继承：** [`Node`](class_node.md) **<** [`Object`](class_object.md)

Synchronizes properties from the multiplayer authority to the remote peers.

## 描述

By default, **MultiplayerSynchronizer** synchronizes configured properties to all peers.

Visibility can be handled directly with [`set_visibility_for`](class_multiplayersynchronizer.md#class_multiplayersynchronizer_method_set_visibility_for) or as-needed with [`add_visibility_filter`](class_multiplayersynchronizer.md#class_multiplayersynchronizer_method_add_visibility_filter) and [`update_visibility`](class_multiplayersynchronizer.md#class_multiplayersynchronizer_method_update_visibility).

 [`MultiplayerSpawner`](class_multiplayerspawner.md) s will handle nodes according to visibility of synchronizers as long as the node at [`root_path`](class_multiplayersynchronizer.md#class_multiplayersynchronizer_property_root_path) was spawned by one.

Internally, **MultiplayerSynchronizer** uses [`MultiplayerAPI.object_configuration_add`](class_multiplayerapi.md#class_multiplayerapi_method_object_configuration_add) to notify synchronization start passing the [`Node`](class_node.md) at [`root_path`](class_multiplayersynchronizer.md#class_multiplayersynchronizer_property_root_path) as the `object` and itself as the `configuration`, and uses [`MultiplayerAPI.object_configuration_remove`](class_multiplayerapi.md#class_multiplayerapi_method_object_configuration_remove) to notify synchronization end in a similar way.

 **Note:** Synchronization is not supported for [`Object`](class_object.md) type properties, like [`Resource`](class_resource.md). Properties that are unique to each peer, like the instance IDs of [`Object`](class_object.md) s (see [`Object.get_instance_id`](class_object.md#class_object_method_get_instance_id)) or [`RID`](class_rid.md) s, will also not work in synchronization.

## 属性

|||
|:-:|:--|
| [`float`](class_float.md)                                                  | [`delta_interval`](class_multiplayersynchronizer.md#class_multiplayersynchronizer_property_delta_interval)                 | ``0.0``            |
| [`bool`](class_bool.md)                                                    | [`public_visibility`](class_multiplayersynchronizer.md#class_multiplayersynchronizer_property_public_visibility)           | ``true``           |
| [`SceneReplicationConfig`](class_scenereplicationconfig.md)                | [`replication_config`](class_multiplayersynchronizer.md#class_multiplayersynchronizer_property_replication_config)         |                    |
| [`float`](class_float.md)                                                  | [`replication_interval`](class_multiplayersynchronizer.md#class_multiplayersynchronizer_property_replication_interval)     | ``0.0``            |
| [`NodePath`](class_nodepath.md)                                            | [`root_path`](class_multiplayersynchronizer.md#class_multiplayersynchronizer_property_root_path)                           | ``NodePath("..")`` |
| [VisibilityUpdateMode](#enum_multiplayersynchronizer_visibilityupdatemode) | [`visibility_update_mode`](class_multiplayersynchronizer.md#class_multiplayersynchronizer_property_visibility_update_mode) | ``0``              |

## 方法

|||
|:-:|:--|
| `void`                  | [`add_visibility_filter`](class_multiplayersynchronizer.md#class_multiplayersynchronizer_method_add_visibility_filter) ( filter: [`Callable`](class_callable.md) )                 |
| [`bool`](class_bool.md) | [`get_visibility_for`](class_multiplayersynchronizer.md#class_multiplayersynchronizer_method_get_visibility_for) ( peer: [`int`](class_int.md) ) const[^const]                     |
| `void`                  | [`remove_visibility_filter`](class_multiplayersynchronizer.md#class_multiplayersynchronizer_method_remove_visibility_filter) ( filter: [`Callable`](class_callable.md) )           |
| `void`                  | [`set_visibility_for`](class_multiplayersynchronizer.md#class_multiplayersynchronizer_method_set_visibility_for) ( peer: [`int`](class_int.md), visible: [`bool`](class_bool.md) ) |
| `void`                  | [`update_visibility`](class_multiplayersynchronizer.md#class_multiplayersynchronizer_method_update_visibility) ( for_peer: [`int`](class_int.md) = 0 )                             |

<!-- rst-class:: classref-section-separator -->

---

## 信号

<div id="_class_class_multiplayersynchronizer_signal_delta_synchronized"></div>

**delta_synchronized** ( ) <div id="class_multiplayersynchronizer_signal_delta_synchronized"></div>

Emitted when a new delta synchronization state is received by this synchronizer after the properties have been updated.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_class_multiplayersynchronizer_signal_synchronized"></div>

**synchronized** ( ) <div id="class_multiplayersynchronizer_signal_synchronized"></div>

Emitted when a new synchronization state is received by this synchronizer after the properties have been updated.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_class_multiplayersynchronizer_signal_visibility_changed"></div>

**visibility_changed** ( for_peer: [`int`](class_int.md) ) <div id="class_multiplayersynchronizer_signal_visibility_changed"></div>

Emitted when visibility of `for_peer` is updated. See [`update_visibility`](class_multiplayersynchronizer.md#class_multiplayersynchronizer_method_update_visibility).

<!-- rst-class:: classref-section-separator -->

---

## 枚举

<div id="_class_enum_multiplayersynchronizer_visibilityupdatemode"></div>

enum **VisibilityUpdateMode**: <div id="enum_multiplayersynchronizer_visibilityupdatemode"></div>

<div id="_class_multiplayersynchronizer_constant_visibility_process_idle"></div>

[VisibilityUpdateMode](#enum_multiplayersynchronizer_visibilityupdatemode) **VISIBILITY_PROCESS_IDLE** = ``0``

Visibility filters are updated during process frames (see [`Node.NOTIFICATION_INTERNAL_PROCESS`](class_node.md#class_node_constant_notification_internal_process)).

<div id="_class_multiplayersynchronizer_constant_visibility_process_physics"></div>

[VisibilityUpdateMode](#enum_multiplayersynchronizer_visibilityupdatemode) **VISIBILITY_PROCESS_PHYSICS** = ``1``

Visibility filters are updated during physics frames (see [`Node.NOTIFICATION_INTERNAL_PHYSICS_PROCESS`](class_node.md#class_node_constant_notification_internal_physics_process)).

<div id="_class_multiplayersynchronizer_constant_visibility_process_none"></div>

[VisibilityUpdateMode](#enum_multiplayersynchronizer_visibilityupdatemode) **VISIBILITY_PROCESS_NONE** = ``2``

Visibility filters are not updated automatically, and must be updated manually by calling [`update_visibility`](class_multiplayersynchronizer.md#class_multiplayersynchronizer_method_update_visibility).

<!-- rst-class:: classref-section-separator -->

---

## 属性说明

<div id="_class_multiplayersynchronizer_property_delta_interval"></div>

[`float`](class_float.md) **delta_interval** = ``0.0`` <div id="class_multiplayersynchronizer_property_delta_interval"></div>

- `void` **set_delta_interval** ( value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_delta_interval** ( )

Time interval between delta synchronizations. When set to `0.0` (the default), delta synchronizations happen every network process frame.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_multiplayersynchronizer_property_public_visibility"></div>

[`bool`](class_bool.md) **public_visibility** = ``true`` <div id="class_multiplayersynchronizer_property_public_visibility"></div>

- `void` **set_visibility_public** ( value: [`bool`](class_bool.md) )
- [`bool`](class_bool.md) **is_visibility_public** ( )

Whether synchronization should be visible to all peers by default. See [`set_visibility_for`](class_multiplayersynchronizer.md#class_multiplayersynchronizer_method_set_visibility_for) and [`add_visibility_filter`](class_multiplayersynchronizer.md#class_multiplayersynchronizer_method_add_visibility_filter) for ways of configuring fine-grained visibility options.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_multiplayersynchronizer_property_replication_config"></div>

[`SceneReplicationConfig`](class_scenereplicationconfig.md) **replication_config** <div id="class_multiplayersynchronizer_property_replication_config"></div>

- `void` **set_replication_config** ( value: [`SceneReplicationConfig`](class_scenereplicationconfig.md) )
- [`SceneReplicationConfig`](class_scenereplicationconfig.md) **get_replication_config** ( )

Resource containing which properties to synchronize.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_multiplayersynchronizer_property_replication_interval"></div>

[`float`](class_float.md) **replication_interval** = ``0.0`` <div id="class_multiplayersynchronizer_property_replication_interval"></div>

- `void` **set_replication_interval** ( value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_replication_interval** ( )

Time interval between synchronizations. When set to `0.0` (the default), synchronizations happen every network process frame.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_multiplayersynchronizer_property_root_path"></div>

[`NodePath`](class_nodepath.md) **root_path** = ``NodePath("..")`` <div id="class_multiplayersynchronizer_property_root_path"></div>

- `void` **set_root_path** ( value: [`NodePath`](class_nodepath.md) )
- [`NodePath`](class_nodepath.md) **get_root_path** ( )

Node path that replicated properties are relative to.

If [`root_path`](class_multiplayersynchronizer.md#class_multiplayersynchronizer_property_root_path) was spawned by a [`MultiplayerSpawner`](class_multiplayerspawner.md), the node will be also be spawned and despawned based on this synchronizer visibility options.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_multiplayersynchronizer_property_visibility_update_mode"></div>

[VisibilityUpdateMode](#enum_multiplayersynchronizer_visibilityupdatemode) **visibility_update_mode** = ``0`` <div id="class_multiplayersynchronizer_property_visibility_update_mode"></div>

- `void` **set_visibility_update_mode** ( value: [VisibilityUpdateMode](#enum_multiplayersynchronizer_visibilityupdatemode) )
- [VisibilityUpdateMode](#enum_multiplayersynchronizer_visibilityupdatemode) **get_visibility_update_mode** ( )

Specifies when visibility filters are updated (see [VisibilityUpdateMode](#enum_multiplayersynchronizer_visibilityupdatemode) for options).

<!-- rst-class:: classref-section-separator -->

---

## 方法说明

<div id="_class_multiplayersynchronizer_method_add_visibility_filter"></div>

`void` **add_visibility_filter** ( filter: [`Callable`](class_callable.md) )<div id="class_multiplayersynchronizer_method_add_visibility_filter"></div>

Adds a peer visibility filter for this synchronizer.

 `filter` should take a peer ID [`int`](class_int.md) and return a [`bool`](class_bool.md).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_multiplayersynchronizer_method_get_visibility_for"></div>

[`bool`](class_bool.md) **get_visibility_for** ( peer: [`int`](class_int.md) ) const[^const]<div id="class_multiplayersynchronizer_method_get_visibility_for"></div>

Queries the current visibility for peer `peer`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_multiplayersynchronizer_method_remove_visibility_filter"></div>

`void` **remove_visibility_filter** ( filter: [`Callable`](class_callable.md) )<div id="class_multiplayersynchronizer_method_remove_visibility_filter"></div>

Removes a peer visibility filter from this synchronizer.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_multiplayersynchronizer_method_set_visibility_for"></div>

`void` **set_visibility_for** ( peer: [`int`](class_int.md), visible: [`bool`](class_bool.md) )<div id="class_multiplayersynchronizer_method_set_visibility_for"></div>

Sets the visibility of `peer` to `visible`. If `peer` is `0`, the value of [`public_visibility`](class_multiplayersynchronizer.md#class_multiplayersynchronizer_property_public_visibility) will be updated instead.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_multiplayersynchronizer_method_update_visibility"></div>

`void` **update_visibility** ( for_peer: [`int`](class_int.md) = 0 )<div id="class_multiplayersynchronizer_method_update_visibility"></div>

Updates the visibility of `for_peer` according to visibility filters. If `for_peer` is `0` (the default), all peers' visibilties are updated.

[^virtual]: 本方法通常需要用户覆盖才能生效。
[^const]: 本方法无副作用，不会修改该实例的任何成员变量。
[^vararg]: 本方法除了能接受在此处描述的参数外，还能够继续接受任意数量的参数。
[^constructor]: 本方法用于构造某个类型。
[^static]: 调用本方法无需实例，可直接使用类名进行调用。
[^operator]: 本方法描述的是使用本类型作为左操作数的有效运算符。
[^bitfield]: 这个值是由下列位标志构成位掩码的整数。
[^void]: 无返回值。
