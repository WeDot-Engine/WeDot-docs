<!-- ⚠ 请勿编辑本文件 ⚠ -->
<!-- 本文档使用脚本从 WeDot 引擎源码仓库生成。 -->
<!-- 生成脚本：https://github.com/WeDot-Engine/WeDot/tree/4.3/doc/tools/make_md.py； -->
<!-- 原文件：https://github.com/WeDot-Engine/WeDot/tree/4.3/modules/upnp/doc_classes/UPNPDevice.xml。 -->

<div id="_class_upnpdevice"></div>

# UPNPDevice

**继承：** [`RefCounted`](class_refcounted.md) **<** [`Object`](class_object.md)

Universal Plug and Play (UPnP) device.

## 描述

Universal Plug and Play (UPnP) device. See [`UPNP`](class_upnp.md) for UPnP discovery and utility functions. Provides low-level access to UPNP control commands. Allows to manage port mappings (port forwarding) and to query network information of the device (like local and external IP address and status). Note that methods on this class are synchronous and block the calling thread.

## 属性

| [`String`](class_string.md)             | [`description_url`](#class_upnpdevice_property_description_url)   | ``""`` |
| [`String`](class_string.md)             | [`igd_control_url`](#class_upnpdevice_property_igd_control_url)   | ``""`` |
| [`String`](class_string.md)             | [`igd_our_addr`](#class_upnpdevice_property_igd_our_addr)         | ``""`` |
| [`String`](class_string.md)             | [`igd_service_type`](#class_upnpdevice_property_igd_service_type) | ``""`` |
| [IGDStatus](#enum_upnpdevice_igdstatus) | [`igd_status`](#class_upnpdevice_property_igd_status)             | ``9``  |
| [`String`](class_string.md)             | [`service_type`](#class_upnpdevice_property_service_type)         | ``""`` |

## 方法

| [`int`](class_int.md)       | [`add_port_mapping`](#class_upnpdevice_method_add_port_mapping) ( port: [`int`](class_int.md), port_internal: [`int`](class_int.md) = 0, desc: [`String`](class_string.md) = "", proto: [`String`](class_string.md) = "UDP", duration: [`int`](class_int.md) = 0 ) const[^const] |
| [`int`](class_int.md)       | [`delete_port_mapping`](#class_upnpdevice_method_delete_port_mapping) ( port: [`int`](class_int.md), proto: [`String`](class_string.md) = "UDP" ) const[^const]                                                                                                                  |
| [`bool`](class_bool.md)     | [`is_valid_gateway`](#class_upnpdevice_method_is_valid_gateway) ( ) const[^const]                                                                                                                                                                                                |
| [`String`](class_string.md) | [`query_external_address`](#class_upnpdevice_method_query_external_address) ( ) const[^const]                                                                                                                                                                                    |

<!-- rst-class:: classref-section-separator -->

---

## 枚举

<div id="_class_enum_upnpdevice_igdstatus"></div>

enum **IGDStatus**: <div id="enum_upnpdevice_igdstatus"></div>

<div id="_class_upnpdevice_constant_igd_status_ok"></div>

[IGDStatus](#enum_upnpdevice_igdstatus) **IGD_STATUS_OK** = ``0``

OK.

<div id="_class_upnpdevice_constant_igd_status_http_error"></div>

[IGDStatus](#enum_upnpdevice_igdstatus) **IGD_STATUS_HTTP_ERROR** = ``1``

HTTP error.

<div id="_class_upnpdevice_constant_igd_status_http_empty"></div>

[IGDStatus](#enum_upnpdevice_igdstatus) **IGD_STATUS_HTTP_EMPTY** = ``2``

Empty HTTP response.

<div id="_class_upnpdevice_constant_igd_status_no_urls"></div>

[IGDStatus](#enum_upnpdevice_igdstatus) **IGD_STATUS_NO_URLS** = ``3``

**已弃用：** This value is no longer used.

Returned response contained no URLs.

<div id="_class_upnpdevice_constant_igd_status_no_igd"></div>

[IGDStatus](#enum_upnpdevice_igdstatus) **IGD_STATUS_NO_IGD** = ``4``

Not a valid IGD.

<div id="_class_upnpdevice_constant_igd_status_disconnected"></div>

[IGDStatus](#enum_upnpdevice_igdstatus) **IGD_STATUS_DISCONNECTED** = ``5``

Disconnected.

<div id="_class_upnpdevice_constant_igd_status_unknown_device"></div>

[IGDStatus](#enum_upnpdevice_igdstatus) **IGD_STATUS_UNKNOWN_DEVICE** = ``6``

Unknown device.

<div id="_class_upnpdevice_constant_igd_status_invalid_control"></div>

[IGDStatus](#enum_upnpdevice_igdstatus) **IGD_STATUS_INVALID_CONTROL** = ``7``

Invalid control.

<div id="_class_upnpdevice_constant_igd_status_malloc_error"></div>

[IGDStatus](#enum_upnpdevice_igdstatus) **IGD_STATUS_MALLOC_ERROR** = ``8``

**已弃用：** This value is no longer used.

Memory allocation error.

<div id="_class_upnpdevice_constant_igd_status_unknown_error"></div>

[IGDStatus](#enum_upnpdevice_igdstatus) **IGD_STATUS_UNKNOWN_ERROR** = ``9``

Unknown error.

<!-- rst-class:: classref-section-separator -->

---

## 属性说明

<div id="_class_upnpdevice_property_description_url"></div>

[`String`](class_string.md) **description_url** = ``""`` <div id="class_upnpdevice_property_description_url"></div>

- `void` **set_description_url** ( value: [`String`](class_string.md) )
- [`String`](class_string.md) **get_description_url** ( )

URL to the device description.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_upnpdevice_property_igd_control_url"></div>

[`String`](class_string.md) **igd_control_url** = ``""`` <div id="class_upnpdevice_property_igd_control_url"></div>

- `void` **set_igd_control_url** ( value: [`String`](class_string.md) )
- [`String`](class_string.md) **get_igd_control_url** ( )

IDG control URL.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_upnpdevice_property_igd_our_addr"></div>

[`String`](class_string.md) **igd_our_addr** = ``""`` <div id="class_upnpdevice_property_igd_our_addr"></div>

- `void` **set_igd_our_addr** ( value: [`String`](class_string.md) )
- [`String`](class_string.md) **get_igd_our_addr** ( )

Address of the local machine in the network connecting it to this **UPNPDevice**.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_upnpdevice_property_igd_service_type"></div>

[`String`](class_string.md) **igd_service_type** = ``""`` <div id="class_upnpdevice_property_igd_service_type"></div>

- `void` **set_igd_service_type** ( value: [`String`](class_string.md) )
- [`String`](class_string.md) **get_igd_service_type** ( )

IGD service type.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_upnpdevice_property_igd_status"></div>

[IGDStatus](#enum_upnpdevice_igdstatus) **igd_status** = ``9`` <div id="class_upnpdevice_property_igd_status"></div>

- `void` **set_igd_status** ( value: [IGDStatus](#enum_upnpdevice_igdstatus) )
- [IGDStatus](#enum_upnpdevice_igdstatus) **get_igd_status** ( )

IGD status. See [IGDStatus](#enum_upnpdevice_igdstatus).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_upnpdevice_property_service_type"></div>

[`String`](class_string.md) **service_type** = ``""`` <div id="class_upnpdevice_property_service_type"></div>

- `void` **set_service_type** ( value: [`String`](class_string.md) )
- [`String`](class_string.md) **get_service_type** ( )

Service type.

<!-- rst-class:: classref-section-separator -->

---

## 方法说明

<div id="_class_upnpdevice_method_add_port_mapping"></div>

[`int`](class_int.md) **add_port_mapping** ( port: [`int`](class_int.md), port_internal: [`int`](class_int.md) = 0, desc: [`String`](class_string.md) = "", proto: [`String`](class_string.md) = "UDP", duration: [`int`](class_int.md) = 0 ) const[^const]<div id="class_upnpdevice_method_add_port_mapping"></div>

Adds a port mapping to forward the given external port on this **UPNPDevice** for the given protocol to the local machine. See [`UPNP.add_port_mapping`](#class_upnp_method_add_port_mapping).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_upnpdevice_method_delete_port_mapping"></div>

[`int`](class_int.md) **delete_port_mapping** ( port: [`int`](class_int.md), proto: [`String`](class_string.md) = "UDP" ) const[^const]<div id="class_upnpdevice_method_delete_port_mapping"></div>

Deletes the port mapping identified by the given port and protocol combination on this device. See [`UPNP.delete_port_mapping`](#class_upnp_method_delete_port_mapping).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_upnpdevice_method_is_valid_gateway"></div>

[`bool`](class_bool.md) **is_valid_gateway** ( ) const[^const]<div id="class_upnpdevice_method_is_valid_gateway"></div>

Returns `true` if this is a valid IGD (InternetGatewayDevice) which potentially supports port forwarding.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_upnpdevice_method_query_external_address"></div>

[`String`](class_string.md) **query_external_address** ( ) const[^const]<div id="class_upnpdevice_method_query_external_address"></div>

Returns the external IP address of this **UPNPDevice** or an empty string.

[^virtual]: 本方法通常需要用户覆盖才能生效。
[^const]: 本方法无副作用，不会修改该实例的任何成员变量。
[^vararg]: 本方法除了能接受在此处描述的参数外，还能够继续接受任意数量的参数。
[^constructor]: 本方法用于构造某个类型。
[^static]: 调用本方法无需实例，可直接使用类名进行调用。
[^operator]: 本方法描述的是使用本类型作为左操作数的有效运算符。
[^bitfield]: 这个值是由下列位标志构成位掩码的整数。
[^void]: 无返回值。
