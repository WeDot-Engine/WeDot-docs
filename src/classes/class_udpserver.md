<!-- ⚠ 请勿编辑本文件 ⚠ -->
<!-- 本文档使用脚本从 WeDot 引擎源码仓库生成。 -->
<!-- 生成脚本：https://github.com/WeDot-Engine/WeDot/tree/4.3/doc/tools/make_md.py； -->
<!-- 原文件：https://github.com/WeDot-Engine/WeDot/tree/4.3/doc/classes/UDPServer.xml。 -->

<div id="_class_udpserver"></div>

# UDPServer

**继承：** [`RefCounted`](class_refcounted.md) **<** [`Object`](class_object.md)

Helper class to implement a UDP server.

## 描述

A simple server that opens a UDP socket and returns connected [`PacketPeerUDP`](class_packetpeerudp.md) upon receiving new packets. See also [`PacketPeerUDP.connect_to_host`](#class_packetpeerudp_method_connect_to_host).

After starting the server ([`listen`](#class_udpserver_method_listen)), you will need to [`poll`](#class_udpserver_method_poll) it at regular intervals (e.g. inside [`Node._process`](#class_node_private_method__process)) for it to process new packets, delivering them to the appropriate [`PacketPeerUDP`](class_packetpeerudp.md), and taking new connections.

Below a small example of how it can be used:



```gdscript

    # server_node.gd
    class_name ServerNode
    extends Node
    
    var server := UDPServer.new()
    var peers = []
    
    func _ready():
        server.listen(4242)
    
    func _process(delta):
        server.poll() # Important!
        if server.is_connection_available():
            var peer: PacketPeerUDP = server.take_connection()
            var packet = peer.get_packet()
            print("Accepted peer: %s:%s" % [peer.get_packet_ip(), peer.get_packet_port()])
            print("Received data: %s" % [packet.get_string_from_utf8()])
            # Reply so it knows we received the message.
            peer.put_packet(packet)
            # Keep a reference so we can keep contacting the remote peer.
            peers.append(peer)
    
        for i in range(0, peers.size()):
            pass # Do something with the connected peers.
```

```csharp

    // ServerNode.cs
    using Godot;
    using System.Collections.Generic;
    
    public partial class ServerNode : Node
    {
        private UdpServer _server = new UdpServer();
        private List<PacketPeerUdp> _peers  = new List<PacketPeerUdp>();
    
        public override void _Ready()
        {
            _server.Listen(4242);
        }
    
        public override void _Process(double delta)
        {
            _server.Poll(); // Important!
            if (_server.IsConnectionAvailable())
            {
                PacketPeerUdp peer = _server.TakeConnection();
                byte[] packet = peer.GetPacket();
                GD.Print($"Accepted Peer: {peer.GetPacketIP()}:{peer.GetPacketPort()}");
                GD.Print($"Received Data: {packet.GetStringFromUtf8()}");
                // Reply so it knows we received the message.
                peer.PutPacket(packet);
                // Keep a reference so we can keep contacting the remote peer.
                _peers.Add(peer);
            }
            foreach (var peer in _peers)
            {
                // Do something with the peers.
            }
        }
    }
```





```gdscript

    # client_node.gd
    class_name ClientNode
    extends Node
    
    var udp := PacketPeerUDP.new()
    var connected = false
    
    func _ready():
        udp.connect_to_host("127.0.0.1", 4242)
    
    func _process(delta):
        if !connected:
            # Try to contact server
            udp.put_packet("The answer is... 42!".to_utf8_buffer())
        if udp.get_available_packet_count() > 0:
            print("Connected: %s" % udp.get_packet().get_string_from_utf8())
            connected = true
```

```csharp

    // ClientNode.cs
    using Godot;
    
    public partial class ClientNode : Node
    {
        private PacketPeerUdp _udp = new PacketPeerUdp();
        private bool _connected = false;
    
        public override void _Ready()
        {
            _udp.ConnectToHost("127.0.0.1", 4242);
        }
    
        public override void _Process(double delta)
        {
            if (!_connected)
            {
                // Try to contact server
                _udp.PutPacket("The Answer Is..42!".ToUtf8Buffer());
            }
            if (_udp.GetAvailablePacketCount() > 0)
            {
                GD.Print($"Connected: {_udp.GetPacket().GetStringFromUtf8()}");
                _connected = true;
            }
        }
    }
```











## 属性

| [`int`](class_int.md) | [`max_pending_connections`](#class_udpserver_property_max_pending_connections) | ``16`` |

## 方法

| [`int`](class_int.md)                     | [`get_local_port`](#class_udpserver_method_get_local_port) ( ) const[^const]                                                |
| [`bool`](class_bool.md)                   | [`is_connection_available`](#class_udpserver_method_is_connection_available) ( ) const[^const]                              |
| [`bool`](class_bool.md)                   | [`is_listening`](#class_udpserver_method_is_listening) ( ) const[^const]                                                    |
| [Error](#enum_@globalscope_error)         | [`listen`](#class_udpserver_method_listen) ( port: [`int`](class_int.md), bind_address: [`String`](class_string.md) = "*" ) |
| [Error](#enum_@globalscope_error)         | [`poll`](#class_udpserver_method_poll) ( )                                                                                  |
| `void`                                    | [`stop`](#class_udpserver_method_stop) ( )                                                                                  |
| [`PacketPeerUDP`](class_packetpeerudp.md) | [`take_connection`](#class_udpserver_method_take_connection) ( )                                                            |

<!-- rst-class:: classref-section-separator -->

---

## 属性说明

<div id="_class_udpserver_property_max_pending_connections"></div>

[`int`](class_int.md) **max_pending_connections** = ``16`` <div id="class_udpserver_property_max_pending_connections"></div>

- `void` **set_max_pending_connections** ( value: [`int`](class_int.md) )
- [`int`](class_int.md) **get_max_pending_connections** ( )

Define the maximum number of pending connections, during [`poll`](#class_udpserver_method_poll), any new pending connection exceeding that value will be automatically dropped. Setting this value to `0` effectively prevents any new pending connection to be accepted (e.g. when all your players have connected).

<!-- rst-class:: classref-section-separator -->

---

## 方法说明

<div id="_class_udpserver_method_get_local_port"></div>

[`int`](class_int.md) **get_local_port** ( ) const[^const]<div id="class_udpserver_method_get_local_port"></div>

Returns the local port this server is listening to.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_udpserver_method_is_connection_available"></div>

[`bool`](class_bool.md) **is_connection_available** ( ) const[^const]<div id="class_udpserver_method_is_connection_available"></div>

Returns `true` if a packet with a new address/port combination was received on the socket.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_udpserver_method_is_listening"></div>

[`bool`](class_bool.md) **is_listening** ( ) const[^const]<div id="class_udpserver_method_is_listening"></div>

Returns `true` if the socket is open and listening on a port.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_udpserver_method_listen"></div>

[Error](#enum_@globalscope_error) **listen** ( port: [`int`](class_int.md), bind_address: [`String`](class_string.md) = "*" )<div id="class_udpserver_method_listen"></div>

Starts the server by opening a UDP socket listening on the given `port`. You can optionally specify a `bind_address` to only listen for packets sent to that address. See also [`PacketPeerUDP.bind`](#class_packetpeerudp_method_bind).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_udpserver_method_poll"></div>

[Error](#enum_@globalscope_error) **poll** ( )<div id="class_udpserver_method_poll"></div>

Call this method at regular intervals (e.g. inside [`Node._process`](#class_node_private_method__process)) to process new packets. And packet from known address/port pair will be delivered to the appropriate [`PacketPeerUDP`](class_packetpeerudp.md), any packet received from an unknown address/port pair will be added as a pending connection (see [`is_connection_available`](#class_udpserver_method_is_connection_available), [`take_connection`](#class_udpserver_method_take_connection)). The maximum number of pending connection is defined via [`max_pending_connections`](#class_udpserver_property_max_pending_connections).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_udpserver_method_stop"></div>

`void` **stop** ( )<div id="class_udpserver_method_stop"></div>

Stops the server, closing the UDP socket if open. Will close all connected [`PacketPeerUDP`](class_packetpeerudp.md) accepted via [`take_connection`](#class_udpserver_method_take_connection) (remote peers will not be notified).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_udpserver_method_take_connection"></div>

[`PacketPeerUDP`](class_packetpeerudp.md) **take_connection** ( )<div id="class_udpserver_method_take_connection"></div>

Returns the first pending connection (connected to the appropriate address/port). Will return `null` if no new connection is available. See also [`is_connection_available`](#class_udpserver_method_is_connection_available), [`PacketPeerUDP.connect_to_host`](#class_packetpeerudp_method_connect_to_host).

[^virtual]: 本方法通常需要用户覆盖才能生效。
[^const]: 本方法无副作用，不会修改该实例的任何成员变量。
[^vararg]: 本方法除了能接受在此处描述的参数外，还能够继续接受任意数量的参数。
[^constructor]: 本方法用于构造某个类型。
[^static]: 调用本方法无需实例，可直接使用类名进行调用。
[^operator]: 本方法描述的是使用本类型作为左操作数的有效运算符。
[^bitfield]: 这个值是由下列位标志构成位掩码的整数。
[^void]: 无返回值。
