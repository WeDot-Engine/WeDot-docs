<!-- ⚠ 请勿编辑本文件 ⚠ -->
<!-- 本文档使用脚本从 WeDot 引擎源码仓库生成。 -->
<!-- 生成脚本：https://github.com/WeDot-Engine/WeDot/tree/master/doc/tools/make_md.py； -->
<!-- 原文件：https://github.com/WeDot-Engine/WeDot/tree/master/doc/classes/MultiplayerAPIExtension.xml。 -->

<div id="_class_multiplayerapiextension"></div>

# MultiplayerAPIExtension

**继承：** [`MultiplayerAPI`](class_multiplayerapi.md) **<** [`RefCounted`](class_refcounted.md) **<** [`Object`](class_object.md)

Base class used for extending the [`MultiplayerAPI`](class_multiplayerapi.md).

## 描述

This class can be used to augment or replace the default [`MultiplayerAPI`](class_multiplayerapi.md) implementation via script or extensions.

The following example augment the default implementation ([`SceneMultiplayer`](class_scenemultiplayer.md)) by logging every RPC being made, and every object being configured for replication.



```gdscript

    extends MultiplayerAPIExtension
    class_name LogMultiplayer
    
    # We want to augment the default SceneMultiplayer.
    var base_multiplayer = SceneMultiplayer.new()
    
    func _init():
        # Just passthrough base signals (copied to var to avoid cyclic reference)
        var cts = connected_to_server
        var cf = connection_failed
        var pc = peer_connected
        var pd = peer_disconnected
        base_multiplayer.connected_to_server.connect(func(): cts.emit())
        base_multiplayer.connection_failed.connect(func(): cf.emit())
        base_multiplayer.peer_connected.connect(func(id): pc.emit(id))
        base_multiplayer.peer_disconnected.connect(func(id): pd.emit(id))
    
    func _poll():
        return base_multiplayer.poll()
    
    # Log RPC being made and forward it to the default multiplayer.
    func _rpc(peer: int, object: Object, method: StringName, args: Array) -> Error:
        print("Got RPC for %d: %s::%s(%s)" % [peer, object, method, args])
        return base_multiplayer.rpc(peer, object, method, args)
    
    # Log configuration add. E.g. root path (nullptr, NodePath), replication (Node, Spawner|Synchronizer), custom.
    func _object_configuration_add(object, config: Variant) -> Error:
        if config is MultiplayerSynchronizer:
            print("Adding synchronization configuration for %s. Synchronizer: %s" % [object, config])
        elif config is MultiplayerSpawner:
            print("Adding node %s to the spawn list. Spawner: %s" % [object, config])
        return base_multiplayer.object_configuration_add(object, config)
    
    # Log configuration remove. E.g. root path (nullptr, NodePath), replication (Node, Spawner|Synchronizer), custom.
    func _object_configuration_remove(object, config: Variant) -> Error:
        if config is MultiplayerSynchronizer:
            print("Removing synchronization configuration for %s. Synchronizer: %s" % [object, config])
        elif config is MultiplayerSpawner:
            print("Removing node %s from the spawn list. Spawner: %s" % [object, config])
        return base_multiplayer.object_configuration_remove(object, config)
    
    # These can be optional, but in our case we want to augment SceneMultiplayer, so forward everything.
    func _set_multiplayer_peer(p_peer: MultiplayerPeer):
        base_multiplayer.multiplayer_peer = p_peer
    
    func _get_multiplayer_peer() -> MultiplayerPeer:
        return base_multiplayer.multiplayer_peer
    
    func _get_unique_id() -> int:
        return base_multiplayer.get_unique_id()
    
    func _get_peer_ids() -> PackedInt32Array:
        return base_multiplayer.get_peers()
```



Then in your main scene or in an autoload call [`SceneTree.set_multiplayer`](class_scenetree.md#class_scenetree_method_set_multiplayer) to start using your custom [`MultiplayerAPI`](class_multiplayerapi.md):



```gdscript

    # autoload.gd
    func _enter_tree():
        # Sets our custom multiplayer as the main one in SceneTree.
    get_tree().set_multiplayer(LogMultiplayer.new())
```



Native extensions can alternatively use the [`MultiplayerAPI.set_default_interface`](class_multiplayerapi.md#class_multiplayerapi_method_set_default_interface) method during initialization to configure themselves as the default implementation.





## 方法

|||
|:-:|:--|
| [`MultiplayerPeer`](class_multiplayerpeer.md)   | [`_get_multiplayer_peer`](class_multiplayerapiextension.md#class_multiplayerapiextension_private_method__get_multiplayer_peer) ( ) virtual[^virtual]                                                                                                              |
| [`PackedInt32Array`](class_packedint32array.md) | [`_get_peer_ids`](class_multiplayerapiextension.md#class_multiplayerapiextension_private_method__get_peer_ids) ( ) virtual[^virtual] const[^const]                                                                                                                |
| [`int`](class_int.md)                           | [`_get_remote_sender_id`](class_multiplayerapiextension.md#class_multiplayerapiextension_private_method__get_remote_sender_id) ( ) virtual[^virtual] const[^const]                                                                                                |
| [`int`](class_int.md)                           | [`_get_unique_id`](class_multiplayerapiextension.md#class_multiplayerapiextension_private_method__get_unique_id) ( ) virtual[^virtual] const[^const]                                                                                                              |
| [Error](#enum_@globalscope_error)               | [`_object_configuration_add`](class_multiplayerapiextension.md#class_multiplayerapiextension_private_method__object_configuration_add) ( object: [`Object`](class_object.md), configuration: [`Variant`](class_variant.md) ) virtual[^virtual]                    |
| [Error](#enum_@globalscope_error)               | [`_object_configuration_remove`](class_multiplayerapiextension.md#class_multiplayerapiextension_private_method__object_configuration_remove) ( object: [`Object`](class_object.md), configuration: [`Variant`](class_variant.md) ) virtual[^virtual]              |
| [Error](#enum_@globalscope_error)               | [`_poll`](class_multiplayerapiextension.md#class_multiplayerapiextension_private_method__poll) ( ) virtual[^virtual]                                                                                                                                              |
| [Error](#enum_@globalscope_error)               | [`_rpc`](class_multiplayerapiextension.md#class_multiplayerapiextension_private_method__rpc) ( peer: [`int`](class_int.md), object: [`Object`](class_object.md), method: [`StringName`](class_stringname.md), args: [`Array`](class_array.md) ) virtual[^virtual] |
| `void`                                          | [`_set_multiplayer_peer`](class_multiplayerapiextension.md#class_multiplayerapiextension_private_method__set_multiplayer_peer) ( multiplayer_peer: [`MultiplayerPeer`](class_multiplayerpeer.md) ) virtual[^virtual]                                              |

<!-- rst-class:: classref-section-separator -->

---

## 方法说明

<div id="_class_multiplayerapiextension_private_method__get_multiplayer_peer"></div>

[`MultiplayerPeer`](class_multiplayerpeer.md) **_get_multiplayer_peer** ( ) virtual[^virtual]<div id="class_multiplayerapiextension_private_method__get_multiplayer_peer"></div>

Called when the [`MultiplayerAPI.multiplayer_peer`](class_multiplayerapi.md#class_multiplayerapi_property_multiplayer_peer) is retrieved.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_multiplayerapiextension_private_method__get_peer_ids"></div>

[`PackedInt32Array`](class_packedint32array.md) **_get_peer_ids** ( ) virtual[^virtual] const[^const]<div id="class_multiplayerapiextension_private_method__get_peer_ids"></div>

Callback for [`MultiplayerAPI.get_peers`](class_multiplayerapi.md#class_multiplayerapi_method_get_peers).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_multiplayerapiextension_private_method__get_remote_sender_id"></div>

[`int`](class_int.md) **_get_remote_sender_id** ( ) virtual[^virtual] const[^const]<div id="class_multiplayerapiextension_private_method__get_remote_sender_id"></div>

Callback for [`MultiplayerAPI.get_remote_sender_id`](class_multiplayerapi.md#class_multiplayerapi_method_get_remote_sender_id).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_multiplayerapiextension_private_method__get_unique_id"></div>

[`int`](class_int.md) **_get_unique_id** ( ) virtual[^virtual] const[^const]<div id="class_multiplayerapiextension_private_method__get_unique_id"></div>

Callback for [`MultiplayerAPI.get_unique_id`](class_multiplayerapi.md#class_multiplayerapi_method_get_unique_id).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_multiplayerapiextension_private_method__object_configuration_add"></div>

[Error](#enum_@globalscope_error) **_object_configuration_add** ( object: [`Object`](class_object.md), configuration: [`Variant`](class_variant.md) ) virtual[^virtual]<div id="class_multiplayerapiextension_private_method__object_configuration_add"></div>

Callback for [`MultiplayerAPI.object_configuration_add`](class_multiplayerapi.md#class_multiplayerapi_method_object_configuration_add).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_multiplayerapiextension_private_method__object_configuration_remove"></div>

[Error](#enum_@globalscope_error) **_object_configuration_remove** ( object: [`Object`](class_object.md), configuration: [`Variant`](class_variant.md) ) virtual[^virtual]<div id="class_multiplayerapiextension_private_method__object_configuration_remove"></div>

Callback for [`MultiplayerAPI.object_configuration_remove`](class_multiplayerapi.md#class_multiplayerapi_method_object_configuration_remove).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_multiplayerapiextension_private_method__poll"></div>

[Error](#enum_@globalscope_error) **_poll** ( ) virtual[^virtual]<div id="class_multiplayerapiextension_private_method__poll"></div>

Callback for [`MultiplayerAPI.poll`](class_multiplayerapi.md#class_multiplayerapi_method_poll).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_multiplayerapiextension_private_method__rpc"></div>

[Error](#enum_@globalscope_error) **_rpc** ( peer: [`int`](class_int.md), object: [`Object`](class_object.md), method: [`StringName`](class_stringname.md), args: [`Array`](class_array.md) ) virtual[^virtual]<div id="class_multiplayerapiextension_private_method__rpc"></div>

Callback for [`MultiplayerAPI.rpc`](class_multiplayerapi.md#class_multiplayerapi_method_rpc).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_multiplayerapiextension_private_method__set_multiplayer_peer"></div>

`void` **_set_multiplayer_peer** ( multiplayer_peer: [`MultiplayerPeer`](class_multiplayerpeer.md) ) virtual[^virtual]<div id="class_multiplayerapiextension_private_method__set_multiplayer_peer"></div>

Called when the [`MultiplayerAPI.multiplayer_peer`](class_multiplayerapi.md#class_multiplayerapi_property_multiplayer_peer) is set.

[^virtual]: 本方法通常需要用户覆盖才能生效。
[^const]: 本方法无副作用，不会修改该实例的任何成员变量。
[^vararg]: 本方法除了能接受在此处描述的参数外，还能够继续接受任意数量的参数。
[^constructor]: 本方法用于构造某个类型。
[^static]: 调用本方法无需实例，可直接使用类名进行调用。
[^operator]: 本方法描述的是使用本类型作为左操作数的有效运算符。
[^bitfield]: 这个值是由下列位标志构成位掩码的整数。
[^void]: 无返回值。
