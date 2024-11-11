<!-- ⚠ 请勿编辑本文件 ⚠ -->
<!-- 本文档使用脚本从 WeDot 引擎源码仓库生成。 -->
<!-- 生成脚本：https://github.com/WeDot-Engine/WeDot/tree/master/doc/tools/make_md.py； -->
<!-- 原文件：https://github.com/WeDot-Engine/WeDot/tree/master/doc/classes/OfflineMultiplayerPeer.xml。 -->

<div id="_class_offlinemultiplayerpeer"></div>

# OfflineMultiplayerPeer

**继承：** [`MultiplayerPeer`](class_multiplayerpeer.md) **<** [`PacketPeer`](class_packetpeer.md) **<** [`RefCounted`](class_refcounted.md) **<** [`Object`](class_object.md)

A [`MultiplayerPeer`](class_multiplayerpeer.md) which is always connected and acts as a server.

## 描述

This is the default [`MultiplayerAPI.multiplayer_peer`](class_multiplayerapi.md#class_multiplayerapi_property_multiplayer_peer) for the [`Node.multiplayer`](class_node.md#class_node_property_multiplayer). It mimics the behavior of a server with no peers connected.

This means that the [`SceneTree`](class_scenetree.md) will act as the multiplayer authority by default. Calls to [`MultiplayerAPI.is_server`](class_multiplayerapi.md#class_multiplayerapi_method_is_server) will return `true`, and calls to [`MultiplayerAPI.get_unique_id`](class_multiplayerapi.md#class_multiplayerapi_method_get_unique_id) will return [`MultiplayerPeer.TARGET_PEER_SERVER`](class_multiplayerpeer.md#class_multiplayerpeer_constant_target_peer_server).

[^virtual]: 本方法通常需要用户覆盖才能生效。
[^const]: 本方法无副作用，不会修改该实例的任何成员变量。
[^vararg]: 本方法除了能接受在此处描述的参数外，还能够继续接受任意数量的参数。
[^constructor]: 本方法用于构造某个类型。
[^static]: 调用本方法无需实例，可直接使用类名进行调用。
[^operator]: 本方法描述的是使用本类型作为左操作数的有效运算符。
[^bitfield]: 这个值是由下列位标志构成位掩码的整数。
[^void]: 无返回值。
