<!-- ⚠ 请勿编辑本文件 ⚠ -->
<!-- 本文档使用脚本从 WeDot 引擎源码仓库生成。 -->
<!-- 生成脚本：https://github.com/WeDot-Engine/WeDot/tree/4.3/doc/tools/make_md.py； -->
<!-- 原文件：https://github.com/WeDot-Engine/WeDot/tree/4.3/doc/classes/DTLSServer.xml。 -->

<div id="_class_dtlsserver"></div>

# DTLSServer

**继承：** [`RefCounted`](class_refcounted.md) **<** [`Object`](class_object.md)

Helper class to implement a DTLS server.

## 描述

This class is used to store the state of a DTLS server. Upon [`setup`](#class_dtlsserver_method_setup) it converts connected [`PacketPeerUDP`](class_packetpeerudp.md) to [`PacketPeerDTLS`](class_packetpeerdtls.md) accepting them via [`take_connection`](#class_dtlsserver_method_take_connection) as DTLS clients. Under the hood, this class is used to store the DTLS state and cookies of the server. The reason of why the state and cookies are needed is outside of the scope of this documentation.

Below a small example of how to use it:



```gdscript

    # server_node.gd
    extends Node
    
    var dtls := DTLSServer.new()
    var server := UDPServer.new()
    var peers = []
    
    func _ready():
        server.listen(4242)
        var key = load("key.key") # Your private key.
        var cert = load("cert.crt") # Your X509 certificate.
        dtls.setup(key, cert)
    
    func _process(delta):
        while server.is_connection_available():
            var peer: PacketPeerUDP = server.take_connection()
            var dtls_peer: PacketPeerDTLS = dtls.take_connection(peer)
            if dtls_peer.get_status() != PacketPeerDTLS.STATUS_HANDSHAKING:
                continue # It is normal that 50% of the connections fails due to cookie exchange.
            print("Peer connected!")
            peers.append(dtls_peer)
    
        for p in peers:
            p.poll() # Must poll to update the state.
            if p.get_status() == PacketPeerDTLS.STATUS_CONNECTED:
                while p.get_available_packet_count() > 0:
                    print("Received message from client: %s" % p.get_packet().get_string_from_utf8())
                    p.put_packet("Hello DTLS client".to_utf8_buffer())
```

```csharp

    // ServerNode.cs
    using Godot;
    
    public partial class ServerNode : Node
    {
        private DtlsServer _dtls = new DtlsServer();
        private UdpServer _server = new UdpServer();
        private Godot.Collections.Array<PacketPeerDtls> _peers = new Godot.Collections.Array<PacketPeerDtls>();
    
        public override void _Ready()
        {
            _server.Listen(4242);
            var key = GD.Load<CryptoKey>("key.key"); // Your private key.
            var cert = GD.Load<X509Certificate>("cert.crt"); // Your X509 certificate.
            _dtls.Setup(key, cert);
        }
    
        public override void _Process(double delta)
        {
            while (Server.IsConnectionAvailable())
            {
                PacketPeerUdp peer = _server.TakeConnection();
                PacketPeerDtls dtlsPeer = _dtls.TakeConnection(peer);
                if (dtlsPeer.GetStatus() != PacketPeerDtls.Status.Handshaking)
                {
                    continue; // It is normal that 50% of the connections fails due to cookie exchange.
                }
                GD.Print("Peer connected!");
                _peers.Add(dtlsPeer);
            }
    
            foreach (var p in _peers)
            {
                p.Poll(); // Must poll to update the state.
                if (p.GetStatus() == PacketPeerDtls.Status.Connected)
                {
                    while (p.GetAvailablePacketCount() > 0)
                    {
                        GD.Print($"Received Message From Client: {p.GetPacket().GetStringFromUtf8()}");
                        p.PutPacket("Hello DTLS Client".ToUtf8Buffer());
                    }
                }
            }
        }
    }
```





```gdscript

    # client_node.gd
    extends Node
    
    var dtls := PacketPeerDTLS.new()
    var udp := PacketPeerUDP.new()
    var connected = false
    
    func _ready():
        udp.connect_to_host("127.0.0.1", 4242)
        dtls.connect_to_peer(udp, false) # Use true in production for certificate validation!
    
    func _process(delta):
        dtls.poll()
        if dtls.get_status() == PacketPeerDTLS.STATUS_CONNECTED:
            if !connected:
                # Try to contact server
                dtls.put_packet("The answer is... 42!".to_utf8_buffer())
            while dtls.get_available_packet_count() > 0:
                print("Connected: %s" % dtls.get_packet().get_string_from_utf8())
                connected = true
```

```csharp

    // ClientNode.cs
    using Godot;
    using System.Text;
    
    public partial class ClientNode : Node
    {
        private PacketPeerDtls _dtls = new PacketPeerDtls();
        private PacketPeerUdp _udp = new PacketPeerUdp();
        private bool _connected = false;
    
        public override void _Ready()
        {
            _udp.ConnectToHost("127.0.0.1", 4242);
            _dtls.ConnectToPeer(_udp, validateCerts: false); // Use true in production for certificate validation!
        }
    
        public override void _Process(double delta)
        {
            _dtls.Poll();
            if (_dtls.GetStatus() == PacketPeerDtls.Status.Connected)
            {
                if (!_connected)
                {
                    // Try to contact server
                    _dtls.PutPacket("The Answer Is..42!".ToUtf8Buffer());
                }
                while (_dtls.GetAvailablePacketCount() > 0)
                {
                    GD.Print($"Connected: {_dtls.GetPacket().GetStringFromUtf8()}");
                    _connected = true;
                }
            }
        }
    }
```











## 方法

| [Error](#enum_@globalscope_error)           | [`setup`](#class_dtlsserver_method_setup) ( server_options: [`TLSOptions`](class_tlsoptions.md) )                     |
| [`PacketPeerDTLS`](class_packetpeerdtls.md) | [`take_connection`](#class_dtlsserver_method_take_connection) ( udp_peer: [`PacketPeerUDP`](class_packetpeerudp.md) ) |

<!-- rst-class:: classref-section-separator -->

---

## 方法说明

<div id="_class_dtlsserver_method_setup"></div>

[Error](#enum_@globalscope_error) **setup** ( server_options: [`TLSOptions`](class_tlsoptions.md) )<div id="class_dtlsserver_method_setup"></div>

Setup the DTLS server to use the given `server_options`. See [`TLSOptions.server`](#class_tlsoptions_method_server).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_dtlsserver_method_take_connection"></div>

[`PacketPeerDTLS`](class_packetpeerdtls.md) **take_connection** ( udp_peer: [`PacketPeerUDP`](class_packetpeerudp.md) )<div id="class_dtlsserver_method_take_connection"></div>

Try to initiate the DTLS handshake with the given `udp_peer` which must be already connected (see [`PacketPeerUDP.connect_to_host`](#class_packetpeerudp_method_connect_to_host)).

 **Note:** You must check that the state of the return PacketPeerUDP is [`PacketPeerDTLS.STATUS_HANDSHAKING`](#class_packetpeerdtls_constant_status_handshaking), as it is normal that 50% of the new connections will be invalid due to cookie exchange.

[^virtual]: 本方法通常需要用户覆盖才能生效。
[^const]: 本方法无副作用，不会修改该实例的任何成员变量。
[^vararg]: 本方法除了能接受在此处描述的参数外，还能够继续接受任意数量的参数。
[^constructor]: 本方法用于构造某个类型。
[^static]: 调用本方法无需实例，可直接使用类名进行调用。
[^operator]: 本方法描述的是使用本类型作为左操作数的有效运算符。
[^bitfield]: 这个值是由下列位标志构成位掩码的整数。
[^void]: 无返回值。
