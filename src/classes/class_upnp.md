<!-- ⚠ 请勿编辑本文件 ⚠ -->
<!-- 本文档使用脚本从 WeDot 引擎源码仓库生成。 -->
<!-- 生成脚本：https://github.com/WeDot-Engine/WeDot/tree/4.3/doc/tools/make_md.py； -->
<!-- 原文件：https://github.com/WeDot-Engine/WeDot/tree/4.3/modules/upnp/doc_classes/UPNP.xml。 -->

<div id="_class_upnp"></div>

# UPNP

**继承：** [`RefCounted`](class_refcounted.md) **<** [`Object`](class_object.md)

Universal Plug and Play (UPnP) functions for network device discovery, querying and port forwarding.

## 描述

This class can be used to discover compatible [`UPNPDevice`](class_upnpdevice.md) s on the local network and execute commands on them, like managing port mappings (for port forwarding/NAT traversal) and querying the local and remote network IP address. Note that methods on this class are synchronous and block the calling thread.

To forward a specific port (here `7777`, note both [`discover`](#class_upnp_method_discover) and [`add_port_mapping`](#class_upnp_method_add_port_mapping) can return errors that should be checked):

```

    var upnp = UPNP.new()
    upnp.discover()
    upnp.add_port_mapping(7777)
```

To close a specific port (e.g. after you have finished using it):

```

    upnp.delete_port_mapping(port)
```

 **Note:** UPnP discovery blocks the current thread. To perform discovery without blocking the main thread, use [`Thread`](class_thread.md) s like this:

```

    # Emitted when UPnP port mapping setup is completed (regardless of success or failure).
    signal upnp_completed(error)
    
    # Replace this with your own server port number between 1024 and 65535.
    const SERVER_PORT = 3928
    var thread = null
    
    func _upnp_setup(server_port):
        # UPNP queries take some time.
        var upnp = UPNP.new()
        var err = upnp.discover()
    
        if err != OK:
            push_error(str(err))
            emit_signal("upnp_completed", err)
            return
    
        if upnp.get_gateway() and upnp.get_gateway().is_valid_gateway():
            upnp.add_port_mapping(server_port, server_port, ProjectSettings.get_setting("application/config/name"), "UDP")
            upnp.add_port_mapping(server_port, server_port, ProjectSettings.get_setting("application/config/name"), "TCP")
            emit_signal("upnp_completed", OK)
    
    func _ready():
        thread = Thread.new()
        thread.start(_upnp_setup.bind(SERVER_PORT))
    
    func _exit_tree():
        # Wait for thread finish here to handle game exit while the thread is running.
        thread.wait_to_finish()
```

 **Terminology:** In the context of UPnP networking, "gateway" (or "internet gateway device", short IGD) refers to network devices that allow computers in the local network to access the internet ("wide area network", WAN). These gateways are often also called "routers".

 **Pitfalls:** 

- As explained above, these calls are blocking and shouldn't be run on the main thread, especially as they can block for multiple seconds at a time. Use threading!

- Networking is physical and messy. Packets get lost in transit or get filtered, addresses, free ports and assigned mappings change, and devices may leave or join the network at any time. Be mindful of this, be diligent when checking and handling errors, and handle these gracefully if you can: add clear error UI, timeouts and re-try handling.

- Port mappings may change (and be removed) at any time, and the remote/external IP address of the gateway can change likewise. You should consider re-querying the external IP and try to update/refresh the port mapping periodically (for example, every 5 minutes and on networking failures).

- Not all devices support UPnP, and some users disable UPnP support. You need to handle this (e.g. documenting and requiring the user to manually forward ports, or adding alternative methods of NAT traversal, like a relay/mirror server, or NAT hole punching, STUN/TURN, etc.).

- Consider what happens on mapping conflicts. Maybe multiple users on the same network would like to play your game at the same time, or maybe another application uses the same port. Make the port configurable, and optimally choose a port automatically (re-trying with a different port on failure).

 **Further reading:** If you want to know more about UPnP (and the Internet Gateway Device (IGD) and Port Control Protocol (PCP) specifically), [*Wikipedia*](https://en.wikipedia.org/wiki/Universal_Plug_and_Play) is a good first stop, the specification can be found at the [*Open Connectivity Foundation*](https://openconnectivity.org/developer/specifications/upnp-resources/upnp/) and Godot's implementation is based on the [*MiniUPnP client*](https://github.com/miniupnp/miniupnp).







## 属性

| [`bool`](class_bool.md)     | [`discover_ipv6`](#class_upnp_property_discover_ipv6)                 | ``false`` |
| [`int`](class_int.md)       | [`discover_local_port`](#class_upnp_property_discover_local_port)     | ``0``     |
| [`String`](class_string.md) | [`discover_multicast_if`](#class_upnp_property_discover_multicast_if) | ``""``    |

## 方法

| `void`                              | [`add_device`](#class_upnp_method_add_device) ( device: [`UPNPDevice`](class_upnpdevice.md) )                                                                                                                                                                              |
| [`int`](class_int.md)               | [`add_port_mapping`](#class_upnp_method_add_port_mapping) ( port: [`int`](class_int.md), port_internal: [`int`](class_int.md) = 0, desc: [`String`](class_string.md) = "", proto: [`String`](class_string.md) = "UDP", duration: [`int`](class_int.md) = 0 ) const[^const] |
| `void`                              | [`clear_devices`](#class_upnp_method_clear_devices) ( )                                                                                                                                                                                                                    |
| [`int`](class_int.md)               | [`delete_port_mapping`](#class_upnp_method_delete_port_mapping) ( port: [`int`](class_int.md), proto: [`String`](class_string.md) = "UDP" ) const[^const]                                                                                                                  |
| [`int`](class_int.md)               | [`discover`](#class_upnp_method_discover) ( timeout: [`int`](class_int.md) = 2000, ttl: [`int`](class_int.md) = 2, device_filter: [`String`](class_string.md) = "InternetGatewayDevice" )                                                                                  |
| [`UPNPDevice`](class_upnpdevice.md) | [`get_device`](#class_upnp_method_get_device) ( index: [`int`](class_int.md) ) const[^const]                                                                                                                                                                               |
| [`int`](class_int.md)               | [`get_device_count`](#class_upnp_method_get_device_count) ( ) const[^const]                                                                                                                                                                                                |
| [`UPNPDevice`](class_upnpdevice.md) | [`get_gateway`](#class_upnp_method_get_gateway) ( ) const[^const]                                                                                                                                                                                                          |
| [`String`](class_string.md)         | [`query_external_address`](#class_upnp_method_query_external_address) ( ) const[^const]                                                                                                                                                                                    |
| `void`                              | [`remove_device`](#class_upnp_method_remove_device) ( index: [`int`](class_int.md) )                                                                                                                                                                                       |
| `void`                              | [`set_device`](#class_upnp_method_set_device) ( index: [`int`](class_int.md), device: [`UPNPDevice`](class_upnpdevice.md) )                                                                                                                                                |

<!-- rst-class:: classref-section-separator -->

---

## 枚举

<div id="_class_enum_upnp_upnpresult"></div>

enum **UPNPResult**: <div id="enum_upnp_upnpresult"></div>

<div id="_class_upnp_constant_upnp_result_success"></div>

[UPNPResult](#enum_upnp_upnpresult) **UPNP_RESULT_SUCCESS** = ``0``

UPNP command or discovery was successful.

<div id="_class_upnp_constant_upnp_result_not_authorized"></div>

[UPNPResult](#enum_upnp_upnpresult) **UPNP_RESULT_NOT_AUTHORIZED** = ``1``

Not authorized to use the command on the [`UPNPDevice`](class_upnpdevice.md). May be returned when the user disabled UPNP on their router.

<div id="_class_upnp_constant_upnp_result_port_mapping_not_found"></div>

[UPNPResult](#enum_upnp_upnpresult) **UPNP_RESULT_PORT_MAPPING_NOT_FOUND** = ``2``

No port mapping was found for the given port, protocol combination on the given [`UPNPDevice`](class_upnpdevice.md).

<div id="_class_upnp_constant_upnp_result_inconsistent_parameters"></div>

[UPNPResult](#enum_upnp_upnpresult) **UPNP_RESULT_INCONSISTENT_PARAMETERS** = ``3``

Inconsistent parameters.

<div id="_class_upnp_constant_upnp_result_no_such_entry_in_array"></div>

[UPNPResult](#enum_upnp_upnpresult) **UPNP_RESULT_NO_SUCH_ENTRY_IN_ARRAY** = ``4``

No such entry in array. May be returned if a given port, protocol combination is not found on an [`UPNPDevice`](class_upnpdevice.md).

<div id="_class_upnp_constant_upnp_result_action_failed"></div>

[UPNPResult](#enum_upnp_upnpresult) **UPNP_RESULT_ACTION_FAILED** = ``5``

The action failed.

<div id="_class_upnp_constant_upnp_result_src_ip_wildcard_not_permitted"></div>

[UPNPResult](#enum_upnp_upnpresult) **UPNP_RESULT_SRC_IP_WILDCARD_NOT_PERMITTED** = ``6``

The [`UPNPDevice`](class_upnpdevice.md) does not allow wildcard values for the source IP address.

<div id="_class_upnp_constant_upnp_result_ext_port_wildcard_not_permitted"></div>

[UPNPResult](#enum_upnp_upnpresult) **UPNP_RESULT_EXT_PORT_WILDCARD_NOT_PERMITTED** = ``7``

The [`UPNPDevice`](class_upnpdevice.md) does not allow wildcard values for the external port.

<div id="_class_upnp_constant_upnp_result_int_port_wildcard_not_permitted"></div>

[UPNPResult](#enum_upnp_upnpresult) **UPNP_RESULT_INT_PORT_WILDCARD_NOT_PERMITTED** = ``8``

The [`UPNPDevice`](class_upnpdevice.md) does not allow wildcard values for the internal port.

<div id="_class_upnp_constant_upnp_result_remote_host_must_be_wildcard"></div>

[UPNPResult](#enum_upnp_upnpresult) **UPNP_RESULT_REMOTE_HOST_MUST_BE_WILDCARD** = ``9``

The remote host value must be a wildcard.

<div id="_class_upnp_constant_upnp_result_ext_port_must_be_wildcard"></div>

[UPNPResult](#enum_upnp_upnpresult) **UPNP_RESULT_EXT_PORT_MUST_BE_WILDCARD** = ``10``

The external port value must be a wildcard.

<div id="_class_upnp_constant_upnp_result_no_port_maps_available"></div>

[UPNPResult](#enum_upnp_upnpresult) **UPNP_RESULT_NO_PORT_MAPS_AVAILABLE** = ``11``

No port maps are available. May also be returned if port mapping functionality is not available.

<div id="_class_upnp_constant_upnp_result_conflict_with_other_mechanism"></div>

[UPNPResult](#enum_upnp_upnpresult) **UPNP_RESULT_CONFLICT_WITH_OTHER_MECHANISM** = ``12``

Conflict with other mechanism. May be returned instead of [`UPNP_RESULT_CONFLICT_WITH_OTHER_MAPPING`](#class_upnp_constant_upnp_result_conflict_with_other_mapping) if a port mapping conflicts with an existing one.

<div id="_class_upnp_constant_upnp_result_conflict_with_other_mapping"></div>

[UPNPResult](#enum_upnp_upnpresult) **UPNP_RESULT_CONFLICT_WITH_OTHER_MAPPING** = ``13``

Conflict with an existing port mapping.

<div id="_class_upnp_constant_upnp_result_same_port_values_required"></div>

[UPNPResult](#enum_upnp_upnpresult) **UPNP_RESULT_SAME_PORT_VALUES_REQUIRED** = ``14``

External and internal port values must be the same.

<div id="_class_upnp_constant_upnp_result_only_permanent_lease_supported"></div>

[UPNPResult](#enum_upnp_upnpresult) **UPNP_RESULT_ONLY_PERMANENT_LEASE_SUPPORTED** = ``15``

Only permanent leases are supported. Do not use the `duration` parameter when adding port mappings.

<div id="_class_upnp_constant_upnp_result_invalid_gateway"></div>

[UPNPResult](#enum_upnp_upnpresult) **UPNP_RESULT_INVALID_GATEWAY** = ``16``

Invalid gateway.

<div id="_class_upnp_constant_upnp_result_invalid_port"></div>

[UPNPResult](#enum_upnp_upnpresult) **UPNP_RESULT_INVALID_PORT** = ``17``

Invalid port.

<div id="_class_upnp_constant_upnp_result_invalid_protocol"></div>

[UPNPResult](#enum_upnp_upnpresult) **UPNP_RESULT_INVALID_PROTOCOL** = ``18``

Invalid protocol.

<div id="_class_upnp_constant_upnp_result_invalid_duration"></div>

[UPNPResult](#enum_upnp_upnpresult) **UPNP_RESULT_INVALID_DURATION** = ``19``

Invalid duration.

<div id="_class_upnp_constant_upnp_result_invalid_args"></div>

[UPNPResult](#enum_upnp_upnpresult) **UPNP_RESULT_INVALID_ARGS** = ``20``

Invalid arguments.

<div id="_class_upnp_constant_upnp_result_invalid_response"></div>

[UPNPResult](#enum_upnp_upnpresult) **UPNP_RESULT_INVALID_RESPONSE** = ``21``

Invalid response.

<div id="_class_upnp_constant_upnp_result_invalid_param"></div>

[UPNPResult](#enum_upnp_upnpresult) **UPNP_RESULT_INVALID_PARAM** = ``22``

Invalid parameter.

<div id="_class_upnp_constant_upnp_result_http_error"></div>

[UPNPResult](#enum_upnp_upnpresult) **UPNP_RESULT_HTTP_ERROR** = ``23``

HTTP error.

<div id="_class_upnp_constant_upnp_result_socket_error"></div>

[UPNPResult](#enum_upnp_upnpresult) **UPNP_RESULT_SOCKET_ERROR** = ``24``

Socket error.

<div id="_class_upnp_constant_upnp_result_mem_alloc_error"></div>

[UPNPResult](#enum_upnp_upnpresult) **UPNP_RESULT_MEM_ALLOC_ERROR** = ``25``

Error allocating memory.

<div id="_class_upnp_constant_upnp_result_no_gateway"></div>

[UPNPResult](#enum_upnp_upnpresult) **UPNP_RESULT_NO_GATEWAY** = ``26``

No gateway available. You may need to call [`discover`](#class_upnp_method_discover) first, or discovery didn't detect any valid IGDs (InternetGatewayDevices).

<div id="_class_upnp_constant_upnp_result_no_devices"></div>

[UPNPResult](#enum_upnp_upnpresult) **UPNP_RESULT_NO_DEVICES** = ``27``

No devices available. You may need to call [`discover`](#class_upnp_method_discover) first, or discovery didn't detect any valid [`UPNPDevice`](class_upnpdevice.md) s.

<div id="_class_upnp_constant_upnp_result_unknown_error"></div>

[UPNPResult](#enum_upnp_upnpresult) **UPNP_RESULT_UNKNOWN_ERROR** = ``28``

Unknown error.

<!-- rst-class:: classref-section-separator -->

---

## 属性说明

<div id="_class_upnp_property_discover_ipv6"></div>

[`bool`](class_bool.md) **discover_ipv6** = ``false`` <div id="class_upnp_property_discover_ipv6"></div>

- `void` **set_discover_ipv6** ( value: [`bool`](class_bool.md) )
- [`bool`](class_bool.md) **is_discover_ipv6** ( )

If `true`, IPv6 is used for [`UPNPDevice`](class_upnpdevice.md) discovery.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_upnp_property_discover_local_port"></div>

[`int`](class_int.md) **discover_local_port** = ``0`` <div id="class_upnp_property_discover_local_port"></div>

- `void` **set_discover_local_port** ( value: [`int`](class_int.md) )
- [`int`](class_int.md) **get_discover_local_port** ( )

If `0`, the local port to use for discovery is chosen automatically by the system. If `1`, discovery will be done from the source port 1900 (same as destination port). Otherwise, the value will be used as the port.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_upnp_property_discover_multicast_if"></div>

[`String`](class_string.md) **discover_multicast_if** = ``""`` <div id="class_upnp_property_discover_multicast_if"></div>

- `void` **set_discover_multicast_if** ( value: [`String`](class_string.md) )
- [`String`](class_string.md) **get_discover_multicast_if** ( )

Multicast interface to use for discovery. Uses the default multicast interface if empty.

<!-- rst-class:: classref-section-separator -->

---

## 方法说明

<div id="_class_upnp_method_add_device"></div>

`void` **add_device** ( device: [`UPNPDevice`](class_upnpdevice.md) )<div id="class_upnp_method_add_device"></div>

Adds the given [`UPNPDevice`](class_upnpdevice.md) to the list of discovered devices.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_upnp_method_add_port_mapping"></div>

[`int`](class_int.md) **add_port_mapping** ( port: [`int`](class_int.md), port_internal: [`int`](class_int.md) = 0, desc: [`String`](class_string.md) = "", proto: [`String`](class_string.md) = "UDP", duration: [`int`](class_int.md) = 0 ) const[^const]<div id="class_upnp_method_add_port_mapping"></div>

Adds a mapping to forward the external `port` (between 1 and 65535, although recommended to use port 1024 or above) on the default gateway (see [`get_gateway`](#class_upnp_method_get_gateway)) to the `port_internal` on the local machine for the given protocol `proto` (either `"TCP"` or `"UDP"`, with UDP being the default). If a port mapping for the given port and protocol combination already exists on that gateway device, this method tries to overwrite it. If that is not desired, you can retrieve the gateway manually with [`get_gateway`](#class_upnp_method_get_gateway) and call [`add_port_mapping`](#class_upnp_method_add_port_mapping) on it, if any. Note that forwarding a well-known port (below 1024) with UPnP may fail depending on the device.

Depending on the gateway device, if a mapping for that port already exists, it will either be updated or it will refuse this command due to that conflict, especially if the existing mapping for that port wasn't created via UPnP or points to a different network address (or device) than this one.

If `port_internal` is `0` (the default), the same port number is used for both the external and the internal port (the `port` value).

The description (`desc`) is shown in some routers management UIs and can be used to point out which application added the mapping.

The mapping's lease `duration` can be limited by specifying a duration in seconds. The default of `0` means no duration, i.e. a permanent lease and notably some devices only support these permanent leases. Note that whether permanent or not, this is only a request and the gateway may still decide at any point to remove the mapping (which usually happens on a reboot of the gateway, when its external IP address changes, or on some models when it detects a port mapping has become inactive, i.e. had no traffic for multiple minutes). If not `0` (permanent), the allowed range according to spec is between `120` (2 minutes) and `86400` seconds (24 hours).

See [UPNPResult](#enum_upnp_upnpresult) for possible return values.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_upnp_method_clear_devices"></div>

`void` **clear_devices** ( )<div id="class_upnp_method_clear_devices"></div>

Clears the list of discovered devices.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_upnp_method_delete_port_mapping"></div>

[`int`](class_int.md) **delete_port_mapping** ( port: [`int`](class_int.md), proto: [`String`](class_string.md) = "UDP" ) const[^const]<div id="class_upnp_method_delete_port_mapping"></div>

Deletes the port mapping for the given port and protocol combination on the default gateway (see [`get_gateway`](#class_upnp_method_get_gateway)) if one exists. `port` must be a valid port between 1 and 65535, `proto` can be either `"TCP"` or `"UDP"`. May be refused for mappings pointing to addresses other than this one, for well-known ports (below 1024), or for mappings not added via UPnP. See [UPNPResult](#enum_upnp_upnpresult) for possible return values.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_upnp_method_discover"></div>

[`int`](class_int.md) **discover** ( timeout: [`int`](class_int.md) = 2000, ttl: [`int`](class_int.md) = 2, device_filter: [`String`](class_string.md) = "InternetGatewayDevice" )<div id="class_upnp_method_discover"></div>

Discovers local [`UPNPDevice`](class_upnpdevice.md) s. Clears the list of previously discovered devices.

Filters for IGD (InternetGatewayDevice) type devices by default, as those manage port forwarding. `timeout` is the time to wait for responses in milliseconds. `ttl` is the time-to-live; only touch this if you know what you're doing.

See [UPNPResult](#enum_upnp_upnpresult) for possible return values.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_upnp_method_get_device"></div>

[`UPNPDevice`](class_upnpdevice.md) **get_device** ( index: [`int`](class_int.md) ) const[^const]<div id="class_upnp_method_get_device"></div>

Returns the [`UPNPDevice`](class_upnpdevice.md) at the given `index`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_upnp_method_get_device_count"></div>

[`int`](class_int.md) **get_device_count** ( ) const[^const]<div id="class_upnp_method_get_device_count"></div>

Returns the number of discovered [`UPNPDevice`](class_upnpdevice.md) s.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_upnp_method_get_gateway"></div>

[`UPNPDevice`](class_upnpdevice.md) **get_gateway** ( ) const[^const]<div id="class_upnp_method_get_gateway"></div>

Returns the default gateway. That is the first discovered [`UPNPDevice`](class_upnpdevice.md) that is also a valid IGD (InternetGatewayDevice).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_upnp_method_query_external_address"></div>

[`String`](class_string.md) **query_external_address** ( ) const[^const]<div id="class_upnp_method_query_external_address"></div>

Returns the external [`IP`](class_ip.md) address of the default gateway (see [`get_gateway`](#class_upnp_method_get_gateway)) as string. Returns an empty string on error.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_upnp_method_remove_device"></div>

`void` **remove_device** ( index: [`int`](class_int.md) )<div id="class_upnp_method_remove_device"></div>

Removes the device at `index` from the list of discovered devices.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_upnp_method_set_device"></div>

`void` **set_device** ( index: [`int`](class_int.md), device: [`UPNPDevice`](class_upnpdevice.md) )<div id="class_upnp_method_set_device"></div>

Sets the device at `index` from the list of discovered devices to `device`.

[^virtual]: 本方法通常需要用户覆盖才能生效。
[^const]: 本方法无副作用，不会修改该实例的任何成员变量。
[^vararg]: 本方法除了能接受在此处描述的参数外，还能够继续接受任意数量的参数。
[^constructor]: 本方法用于构造某个类型。
[^static]: 调用本方法无需实例，可直接使用类名进行调用。
[^operator]: 本方法描述的是使用本类型作为左操作数的有效运算符。
[^bitfield]: 这个值是由下列位标志构成位掩码的整数。
[^void]: 无返回值。
