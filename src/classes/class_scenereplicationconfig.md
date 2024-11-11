<!-- ⚠ 请勿编辑本文件 ⚠ -->
<!-- 本文档使用脚本从 WeDot 引擎源码仓库生成。 -->
<!-- 生成脚本：https://github.com/WeDot-Engine/WeDot/tree/master/doc/tools/make_md.py； -->
<!-- 原文件：https://github.com/WeDot-Engine/WeDot/tree/master/modules/multiplayer/doc_classes/SceneReplicationConfig.xml。 -->

<div id="_class_scenereplicationconfig"></div>

# SceneReplicationConfig

**继承：** [`Resource`](class_resource.md) **<** [`RefCounted`](class_refcounted.md) **<** [`Object`](class_object.md)

Configuration for properties to synchronize with a [`MultiplayerSynchronizer`](class_multiplayersynchronizer.md).

## 方法

|||
|:-:|:--|
| `void`                                                          | [`add_property`](class_scenereplicationconfig.md#class_scenereplicationconfig_method_add_property) ( path: [`NodePath`](class_nodepath.md), index: [`int`](class_int.md) = -1 )                                                                       |
| [Array](class_array.md) [`NodePath`](class_nodepath.md)         | [`get_properties`](class_scenereplicationconfig.md#class_scenereplicationconfig_method_get_properties) ( ) const[^const]                                                                                                                              |
| [`bool`](class_bool.md)                                         | [`has_property`](class_scenereplicationconfig.md#class_scenereplicationconfig_method_has_property) ( path: [`NodePath`](class_nodepath.md) ) const[^const]                                                                                            |
| [`int`](class_int.md)                                           | [`property_get_index`](class_scenereplicationconfig.md#class_scenereplicationconfig_method_property_get_index) ( path: [`NodePath`](class_nodepath.md) ) const[^const]                                                                                |
| [ReplicationMode](#enum_scenereplicationconfig_replicationmode) | [`property_get_replication_mode`](class_scenereplicationconfig.md#class_scenereplicationconfig_method_property_get_replication_mode) ( path: [`NodePath`](class_nodepath.md) )                                                                        |
| [`bool`](class_bool.md)                                         | [`property_get_spawn`](class_scenereplicationconfig.md#class_scenereplicationconfig_method_property_get_spawn) ( path: [`NodePath`](class_nodepath.md) )                                                                                              |
| [`bool`](class_bool.md)                                         | [`property_get_sync`](class_scenereplicationconfig.md#class_scenereplicationconfig_method_property_get_sync) ( path: [`NodePath`](class_nodepath.md) )                                                                                                |
| [`bool`](class_bool.md)                                         | [`property_get_watch`](class_scenereplicationconfig.md#class_scenereplicationconfig_method_property_get_watch) ( path: [`NodePath`](class_nodepath.md) )                                                                                              |
| `void`                                                          | [`property_set_replication_mode`](class_scenereplicationconfig.md#class_scenereplicationconfig_method_property_set_replication_mode) ( path: [`NodePath`](class_nodepath.md), mode: [ReplicationMode](#enum_scenereplicationconfig_replicationmode) ) |
| `void`                                                          | [`property_set_spawn`](class_scenereplicationconfig.md#class_scenereplicationconfig_method_property_set_spawn) ( path: [`NodePath`](class_nodepath.md), enabled: [`bool`](class_bool.md) )                                                            |
| `void`                                                          | [`property_set_sync`](class_scenereplicationconfig.md#class_scenereplicationconfig_method_property_set_sync) ( path: [`NodePath`](class_nodepath.md), enabled: [`bool`](class_bool.md) )                                                              |
| `void`                                                          | [`property_set_watch`](class_scenereplicationconfig.md#class_scenereplicationconfig_method_property_set_watch) ( path: [`NodePath`](class_nodepath.md), enabled: [`bool`](class_bool.md) )                                                            |
| `void`                                                          | [`remove_property`](class_scenereplicationconfig.md#class_scenereplicationconfig_method_remove_property) ( path: [`NodePath`](class_nodepath.md) )                                                                                                    |

<!-- rst-class:: classref-section-separator -->

---

## 枚举

<div id="_class_enum_scenereplicationconfig_replicationmode"></div>

enum **ReplicationMode**: <div id="enum_scenereplicationconfig_replicationmode"></div>

<div id="_class_scenereplicationconfig_constant_replication_mode_never"></div>

[ReplicationMode](#enum_scenereplicationconfig_replicationmode) **REPLICATION_MODE_NEVER** = ``0``

Do not keep the given property synchronized.

<div id="_class_scenereplicationconfig_constant_replication_mode_always"></div>

[ReplicationMode](#enum_scenereplicationconfig_replicationmode) **REPLICATION_MODE_ALWAYS** = ``1``

Replicate the given property on process by constantly sending updates using unreliable transfer mode.

<div id="_class_scenereplicationconfig_constant_replication_mode_on_change"></div>

[ReplicationMode](#enum_scenereplicationconfig_replicationmode) **REPLICATION_MODE_ON_CHANGE** = ``2``

Replicate the given property on process by sending updates using reliable transfer mode when its value changes.

<!-- rst-class:: classref-section-separator -->

---

## 方法说明

<div id="_class_scenereplicationconfig_method_add_property"></div>

`void` **add_property** ( path: [`NodePath`](class_nodepath.md), index: [`int`](class_int.md) = -1 )<div id="class_scenereplicationconfig_method_add_property"></div>

Adds the property identified by the given `path` to the list of the properties being synchronized, optionally passing an `index`.

 **Note:** For details on restrictions and limitations on property synchronization, see [`MultiplayerSynchronizer`](class_multiplayersynchronizer.md).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_scenereplicationconfig_method_get_properties"></div>

[Array](class_array.md) [`NodePath`](class_nodepath.md) **get_properties** ( ) const[^const]<div id="class_scenereplicationconfig_method_get_properties"></div>

Returns a list of synchronized property [`NodePath`](class_nodepath.md) s.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_scenereplicationconfig_method_has_property"></div>

[`bool`](class_bool.md) **has_property** ( path: [`NodePath`](class_nodepath.md) ) const[^const]<div id="class_scenereplicationconfig_method_has_property"></div>

Returns `true` if the given `path` is configured for synchronization.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_scenereplicationconfig_method_property_get_index"></div>

[`int`](class_int.md) **property_get_index** ( path: [`NodePath`](class_nodepath.md) ) const[^const]<div id="class_scenereplicationconfig_method_property_get_index"></div>

Finds the index of the given `path`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_scenereplicationconfig_method_property_get_replication_mode"></div>

[ReplicationMode](#enum_scenereplicationconfig_replicationmode) **property_get_replication_mode** ( path: [`NodePath`](class_nodepath.md) )<div id="class_scenereplicationconfig_method_property_get_replication_mode"></div>

Returns the replication mode for the property identified by the given `path`. See [ReplicationMode](#enum_scenereplicationconfig_replicationmode).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_scenereplicationconfig_method_property_get_spawn"></div>

[`bool`](class_bool.md) **property_get_spawn** ( path: [`NodePath`](class_nodepath.md) )<div id="class_scenereplicationconfig_method_property_get_spawn"></div>

Returns `true` if the property identified by the given `path` is configured to be synchronized on spawn.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_scenereplicationconfig_method_property_get_sync"></div>

[`bool`](class_bool.md) **property_get_sync** ( path: [`NodePath`](class_nodepath.md) )<div id="class_scenereplicationconfig_method_property_get_sync"></div>

**已弃用：** Use [`property_get_replication_mode`](class_scenereplicationconfig.md#class_scenereplicationconfig_method_property_get_replication_mode) instead.

Returns `true` if the property identified by the given `path` is configured to be synchronized on process.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_scenereplicationconfig_method_property_get_watch"></div>

[`bool`](class_bool.md) **property_get_watch** ( path: [`NodePath`](class_nodepath.md) )<div id="class_scenereplicationconfig_method_property_get_watch"></div>

**已弃用：** Use [`property_get_replication_mode`](class_scenereplicationconfig.md#class_scenereplicationconfig_method_property_get_replication_mode) instead.

Returns `true` if the property identified by the given `path` is configured to be reliably synchronized when changes are detected on process.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_scenereplicationconfig_method_property_set_replication_mode"></div>

`void` **property_set_replication_mode** ( path: [`NodePath`](class_nodepath.md), mode: [ReplicationMode](#enum_scenereplicationconfig_replicationmode) )<div id="class_scenereplicationconfig_method_property_set_replication_mode"></div>

Sets the synchronization mode for the property identified by the given `path`. See [ReplicationMode](#enum_scenereplicationconfig_replicationmode).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_scenereplicationconfig_method_property_set_spawn"></div>

`void` **property_set_spawn** ( path: [`NodePath`](class_nodepath.md), enabled: [`bool`](class_bool.md) )<div id="class_scenereplicationconfig_method_property_set_spawn"></div>

Sets whether the property identified by the given `path` is configured to be synchronized on spawn.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_scenereplicationconfig_method_property_set_sync"></div>

`void` **property_set_sync** ( path: [`NodePath`](class_nodepath.md), enabled: [`bool`](class_bool.md) )<div id="class_scenereplicationconfig_method_property_set_sync"></div>

**已弃用：** Use [`property_set_replication_mode`](class_scenereplicationconfig.md#class_scenereplicationconfig_method_property_set_replication_mode) with [`REPLICATION_MODE_ALWAYS`](class_scenereplicationconfig.md#class_scenereplicationconfig_constant_replication_mode_always) instead.

Sets whether the property identified by the given `path` is configured to be synchronized on process.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_scenereplicationconfig_method_property_set_watch"></div>

`void` **property_set_watch** ( path: [`NodePath`](class_nodepath.md), enabled: [`bool`](class_bool.md) )<div id="class_scenereplicationconfig_method_property_set_watch"></div>

**已弃用：** Use [`property_set_replication_mode`](class_scenereplicationconfig.md#class_scenereplicationconfig_method_property_set_replication_mode) with [`REPLICATION_MODE_ON_CHANGE`](class_scenereplicationconfig.md#class_scenereplicationconfig_constant_replication_mode_on_change) instead.

Sets whether the property identified by the given `path` is configured to be reliably synchronized when changes are detected on process.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_scenereplicationconfig_method_remove_property"></div>

`void` **remove_property** ( path: [`NodePath`](class_nodepath.md) )<div id="class_scenereplicationconfig_method_remove_property"></div>

Removes the property identified by the given `path` from the configuration.

[^virtual]: 本方法通常需要用户覆盖才能生效。
[^const]: 本方法无副作用，不会修改该实例的任何成员变量。
[^vararg]: 本方法除了能接受在此处描述的参数外，还能够继续接受任意数量的参数。
[^constructor]: 本方法用于构造某个类型。
[^static]: 调用本方法无需实例，可直接使用类名进行调用。
[^operator]: 本方法描述的是使用本类型作为左操作数的有效运算符。
[^bitfield]: 这个值是由下列位标志构成位掩码的整数。
[^void]: 无返回值。
