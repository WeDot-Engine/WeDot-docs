<!-- ⚠ 请勿编辑本文件 ⚠ -->
<!-- 本文档使用脚本从 WeDot 引擎源码仓库生成。 -->
<!-- 生成脚本：https://github.com/WeDot-Engine/WeDot/tree/4.3/doc/tools/make_md.py； -->
<!-- 原文件：https://github.com/WeDot-Engine/WeDot/tree/4.3/doc/classes/IP.xml。 -->

<div id="_class_ip"></div>

# IP

**继承：** [`Object`](class_object.md)

Internet protocol (IP) support functions such as DNS resolution.

## 描述

IP contains support functions for the Internet Protocol (IP). TCP/IP support is in different classes (see [`StreamPeerTCP`](class_streampeertcp.md) and [`TCPServer`](class_tcpserver.md)). IP provides DNS hostname resolution support, both blocking and threaded.

## 方法

| `void`                                                      | [`clear_cache`](#class_ip_method_clear_cache) ( hostname: [`String`](class_string.md) = "" )                                                            |
| `void`                                                      | [`erase_resolve_item`](#class_ip_method_erase_resolve_item) ( id: [`int`](class_int.md) )                                                               |
| [`PackedStringArray`](class_packedstringarray.md)           | [`get_local_addresses`](#class_ip_method_get_local_addresses) ( ) const[^const]                                                                         |
| [Array](class_array.md) [`Dictionary`](class_dictionary.md) | [`get_local_interfaces`](#class_ip_method_get_local_interfaces) ( ) const[^const]                                                                       |
| [`String`](class_string.md)                                 | [`get_resolve_item_address`](#class_ip_method_get_resolve_item_address) ( id: [`int`](class_int.md) ) const[^const]                                     |
| [`Array`](class_array.md)                                   | [`get_resolve_item_addresses`](#class_ip_method_get_resolve_item_addresses) ( id: [`int`](class_int.md) ) const[^const]                                 |
| [ResolverStatus](#enum_ip_resolverstatus)                   | [`get_resolve_item_status`](#class_ip_method_get_resolve_item_status) ( id: [`int`](class_int.md) ) const[^const]                                       |
| [`String`](class_string.md)                                 | [`resolve_hostname`](#class_ip_method_resolve_hostname) ( host: [`String`](class_string.md), ip_type: [Type](#enum_ip_type) = 3 )                       |
| [`PackedStringArray`](class_packedstringarray.md)           | [`resolve_hostname_addresses`](#class_ip_method_resolve_hostname_addresses) ( host: [`String`](class_string.md), ip_type: [Type](#enum_ip_type) = 3 )   |
| [`int`](class_int.md)                                       | [`resolve_hostname_queue_item`](#class_ip_method_resolve_hostname_queue_item) ( host: [`String`](class_string.md), ip_type: [Type](#enum_ip_type) = 3 ) |

<!-- rst-class:: classref-section-separator -->

---

## 枚举

<div id="_class_enum_ip_resolverstatus"></div>

enum **ResolverStatus**: <div id="enum_ip_resolverstatus"></div>

<div id="_class_ip_constant_resolver_status_none"></div>

[ResolverStatus](#enum_ip_resolverstatus) **RESOLVER_STATUS_NONE** = ``0``

DNS hostname resolver status: No status.

<div id="_class_ip_constant_resolver_status_waiting"></div>

[ResolverStatus](#enum_ip_resolverstatus) **RESOLVER_STATUS_WAITING** = ``1``

DNS hostname resolver status: Waiting.

<div id="_class_ip_constant_resolver_status_done"></div>

[ResolverStatus](#enum_ip_resolverstatus) **RESOLVER_STATUS_DONE** = ``2``

DNS hostname resolver status: Done.

<div id="_class_ip_constant_resolver_status_error"></div>

[ResolverStatus](#enum_ip_resolverstatus) **RESOLVER_STATUS_ERROR** = ``3``

DNS hostname resolver status: Error.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_enum_ip_type"></div>

enum **Type**: <div id="enum_ip_type"></div>

<div id="_class_ip_constant_type_none"></div>

[Type](#enum_ip_type) **TYPE_NONE** = ``0``

Address type: None.

<div id="_class_ip_constant_type_ipv4"></div>

[Type](#enum_ip_type) **TYPE_IPV4** = ``1``

Address type: Internet protocol version 4 (IPv4).

<div id="_class_ip_constant_type_ipv6"></div>

[Type](#enum_ip_type) **TYPE_IPV6** = ``2``

Address type: Internet protocol version 6 (IPv6).

<div id="_class_ip_constant_type_any"></div>

[Type](#enum_ip_type) **TYPE_ANY** = ``3``

Address type: Any.

<!-- rst-class:: classref-section-separator -->

---

## 常量

<div id="_class_ip_constant_resolver_max_queries"></div>

**RESOLVER_MAX_QUERIES** = ``256`` <div id="class_ip_constant_resolver_max_queries"></div>

Maximum number of concurrent DNS resolver queries allowed, [`RESOLVER_INVALID_ID`](#class_ip_constant_resolver_invalid_id) is returned if exceeded.

<div id="_class_ip_constant_resolver_invalid_id"></div>

**RESOLVER_INVALID_ID** = ``-1`` <div id="class_ip_constant_resolver_invalid_id"></div>

Invalid ID constant. Returned if [`RESOLVER_MAX_QUERIES`](#class_ip_constant_resolver_max_queries) is exceeded.

<!-- rst-class:: classref-section-separator -->

---

## 方法说明

<div id="_class_ip_method_clear_cache"></div>

`void` **clear_cache** ( hostname: [`String`](class_string.md) = "" )<div id="class_ip_method_clear_cache"></div>

Removes all of a `hostname`'s cached references. If no `hostname` is given, all cached IP addresses are removed.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_ip_method_erase_resolve_item"></div>

`void` **erase_resolve_item** ( id: [`int`](class_int.md) )<div id="class_ip_method_erase_resolve_item"></div>

Removes a given item `id` from the queue. This should be used to free a queue after it has completed to enable more queries to happen.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_ip_method_get_local_addresses"></div>

[`PackedStringArray`](class_packedstringarray.md) **get_local_addresses** ( ) const[^const]<div id="class_ip_method_get_local_addresses"></div>

Returns all the user's current IPv4 and IPv6 addresses as an array.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_ip_method_get_local_interfaces"></div>

[Array](class_array.md) [`Dictionary`](class_dictionary.md) **get_local_interfaces** ( ) const[^const]<div id="class_ip_method_get_local_interfaces"></div>

Returns all network adapters as an array.

Each adapter is a dictionary of the form:

```

    {
        "index": "1", # Interface index.
        "name": "eth0", # Interface name.
        "friendly": "Ethernet One", # A friendly name (might be empty).
        "addresses": ["192.168.1.101"], # An array of IP addresses associated to this interface.
    }
```



<!-- rst-class:: classref-item-separator -->

---

<div id="_class_ip_method_get_resolve_item_address"></div>

[`String`](class_string.md) **get_resolve_item_address** ( id: [`int`](class_int.md) ) const[^const]<div id="class_ip_method_get_resolve_item_address"></div>

Returns a queued hostname's IP address, given its queue `id`. Returns an empty string on error or if resolution hasn't happened yet (see [`get_resolve_item_status`](#class_ip_method_get_resolve_item_status)).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_ip_method_get_resolve_item_addresses"></div>

[`Array`](class_array.md) **get_resolve_item_addresses** ( id: [`int`](class_int.md) ) const[^const]<div id="class_ip_method_get_resolve_item_addresses"></div>

Returns resolved addresses, or an empty array if an error happened or resolution didn't happen yet (see [`get_resolve_item_status`](#class_ip_method_get_resolve_item_status)).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_ip_method_get_resolve_item_status"></div>

[ResolverStatus](#enum_ip_resolverstatus) **get_resolve_item_status** ( id: [`int`](class_int.md) ) const[^const]<div id="class_ip_method_get_resolve_item_status"></div>

Returns a queued hostname's status as a [ResolverStatus](#enum_ip_resolverstatus) constant, given its queue `id`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_ip_method_resolve_hostname"></div>

[`String`](class_string.md) **resolve_hostname** ( host: [`String`](class_string.md), ip_type: [Type](#enum_ip_type) = 3 )<div id="class_ip_method_resolve_hostname"></div>

Returns a given hostname's IPv4 or IPv6 address when resolved (blocking-type method). The address type returned depends on the [Type](#enum_ip_type) constant given as `ip_type`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_ip_method_resolve_hostname_addresses"></div>

[`PackedStringArray`](class_packedstringarray.md) **resolve_hostname_addresses** ( host: [`String`](class_string.md), ip_type: [Type](#enum_ip_type) = 3 )<div id="class_ip_method_resolve_hostname_addresses"></div>

Resolves a given hostname in a blocking way. Addresses are returned as an [`Array`](class_array.md) of IPv4 or IPv6 addresses depending on `ip_type`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_ip_method_resolve_hostname_queue_item"></div>

[`int`](class_int.md) **resolve_hostname_queue_item** ( host: [`String`](class_string.md), ip_type: [Type](#enum_ip_type) = 3 )<div id="class_ip_method_resolve_hostname_queue_item"></div>

Creates a queue item to resolve a hostname to an IPv4 or IPv6 address depending on the [Type](#enum_ip_type) constant given as `ip_type`. Returns the queue ID if successful, or [`RESOLVER_INVALID_ID`](#class_ip_constant_resolver_invalid_id) on error.

[^virtual]: 本方法通常需要用户覆盖才能生效。
[^const]: 本方法无副作用，不会修改该实例的任何成员变量。
[^vararg]: 本方法除了能接受在此处描述的参数外，还能够继续接受任意数量的参数。
[^constructor]: 本方法用于构造某个类型。
[^static]: 调用本方法无需实例，可直接使用类名进行调用。
[^operator]: 本方法描述的是使用本类型作为左操作数的有效运算符。
[^bitfield]: 这个值是由下列位标志构成位掩码的整数。
[^void]: 无返回值。
