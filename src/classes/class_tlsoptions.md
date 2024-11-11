<!-- ⚠ 请勿编辑本文件 ⚠ -->
<!-- 本文档使用脚本从 WeDot 引擎源码仓库生成。 -->
<!-- 生成脚本：https://github.com/WeDot-Engine/WeDot/tree/master/doc/tools/make_md.py； -->
<!-- 原文件：https://github.com/WeDot-Engine/WeDot/tree/master/doc/classes/TLSOptions.xml。 -->

<div id="_class_tlsoptions"></div>

# TLSOptions

**继承：** [`RefCounted`](class_refcounted.md) **<** [`Object`](class_object.md)

TLS configuration for clients and servers.

## 描述

TLSOptions abstracts the configuration options for the [`StreamPeerTLS`](class_streampeertls.md) and [`PacketPeerDTLS`](class_packetpeerdtls.md) classes.

Objects of this class cannot be instantiated directly, and one of the static methods [`client`](class_tlsoptions.md#class_tlsoptions_method_client), [`client_unsafe`](class_tlsoptions.md#class_tlsoptions_method_client_unsafe), or [`server`](class_tlsoptions.md#class_tlsoptions_method_server) should be used instead.



```gdscript

    # Create a TLS client configuration which uses our custom trusted CA chain.
    var client_trusted_cas = load("res://my_trusted_cas.crt")
    var client_tls_options = TLSOptions.client(client_trusted_cas)
    
    # Create a TLS server configuration.
    var server_certs = load("res://my_server_cas.crt")
    var server_key = load("res://my_server_key.key")
    var server_tls_options = TLSOptions.server(server_key, server_certs)
```





## 方法

|||
|:-:|:--|
| [`TLSOptions`](class_tlsoptions.md)           | [`client`](class_tlsoptions.md#class_tlsoptions_method_client) ( trusted_chain: [`X509Certificate`](class_x509certificate.md) = null, common_name_override: [`String`](class_string.md) = "" ) static[^static] |
| [`TLSOptions`](class_tlsoptions.md)           | [`client_unsafe`](class_tlsoptions.md#class_tlsoptions_method_client_unsafe) ( trusted_chain: [`X509Certificate`](class_x509certificate.md) = null ) static[^static]                                           |
| [`String`](class_string.md)                   | [`get_common_name_override`](class_tlsoptions.md#class_tlsoptions_method_get_common_name_override) ( ) const[^const]                                                                                           |
| [`X509Certificate`](class_x509certificate.md) | [`get_own_certificate`](class_tlsoptions.md#class_tlsoptions_method_get_own_certificate) ( ) const[^const]                                                                                                     |
| [`CryptoKey`](class_cryptokey.md)             | [`get_private_key`](class_tlsoptions.md#class_tlsoptions_method_get_private_key) ( ) const[^const]                                                                                                             |
| [`X509Certificate`](class_x509certificate.md) | [`get_trusted_ca_chain`](class_tlsoptions.md#class_tlsoptions_method_get_trusted_ca_chain) ( ) const[^const]                                                                                                   |
| [`bool`](class_bool.md)                       | [`is_server`](class_tlsoptions.md#class_tlsoptions_method_is_server) ( ) const[^const]                                                                                                                         |
| [`bool`](class_bool.md)                       | [`is_unsafe_client`](class_tlsoptions.md#class_tlsoptions_method_is_unsafe_client) ( ) const[^const]                                                                                                           |
| [`TLSOptions`](class_tlsoptions.md)           | [`server`](class_tlsoptions.md#class_tlsoptions_method_server) ( key: [`CryptoKey`](class_cryptokey.md), certificate: [`X509Certificate`](class_x509certificate.md) ) static[^static]                          |

<!-- rst-class:: classref-section-separator -->

---

## 方法说明

<div id="_class_tlsoptions_method_client"></div>

[`TLSOptions`](class_tlsoptions.md) **client** ( trusted_chain: [`X509Certificate`](class_x509certificate.md) = null, common_name_override: [`String`](class_string.md) = "" ) static[^static]<div id="class_tlsoptions_method_client"></div>

Creates a TLS client configuration which validates certificates and their common names (fully qualified domain names).

You can specify a custom `trusted_chain` of certification authorities (the default CA list will be used if `null`), and optionally provide a `common_name_override` if you expect the certificate to have a common name other than the server FQDN.

 **Note:** On the Web platform, TLS verification is always enforced against the CA list of the web browser. This is considered a security feature.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_tlsoptions_method_client_unsafe"></div>

[`TLSOptions`](class_tlsoptions.md) **client_unsafe** ( trusted_chain: [`X509Certificate`](class_x509certificate.md) = null ) static[^static]<div id="class_tlsoptions_method_client_unsafe"></div>

Creates an **unsafe** TLS client configuration where certificate validation is optional. You can optionally provide a valid `trusted_chain`, but the common name of the certificates will never be checked. Using this configuration for purposes other than testing **is not recommended**.

 **Note:** On the Web platform, TLS verification is always enforced against the CA list of the web browser. This is considered a security feature.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_tlsoptions_method_get_common_name_override"></div>

[`String`](class_string.md) **get_common_name_override** ( ) const[^const]<div id="class_tlsoptions_method_get_common_name_override"></div>

Returns the common name (domain name) override specified when creating with [`client`](class_tlsoptions.md#class_tlsoptions_method_client).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_tlsoptions_method_get_own_certificate"></div>

[`X509Certificate`](class_x509certificate.md) **get_own_certificate** ( ) const[^const]<div id="class_tlsoptions_method_get_own_certificate"></div>

Returns the [`X509Certificate`](class_x509certificate.md) specified when creating with [`server`](class_tlsoptions.md#class_tlsoptions_method_server).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_tlsoptions_method_get_private_key"></div>

[`CryptoKey`](class_cryptokey.md) **get_private_key** ( ) const[^const]<div id="class_tlsoptions_method_get_private_key"></div>

Returns the [`CryptoKey`](class_cryptokey.md) specified when creating with [`server`](class_tlsoptions.md#class_tlsoptions_method_server).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_tlsoptions_method_get_trusted_ca_chain"></div>

[`X509Certificate`](class_x509certificate.md) **get_trusted_ca_chain** ( ) const[^const]<div id="class_tlsoptions_method_get_trusted_ca_chain"></div>

Returns the CA [`X509Certificate`](class_x509certificate.md) chain specified when creating with [`client`](class_tlsoptions.md#class_tlsoptions_method_client) or [`client_unsafe`](class_tlsoptions.md#class_tlsoptions_method_client_unsafe).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_tlsoptions_method_is_server"></div>

[`bool`](class_bool.md) **is_server** ( ) const[^const]<div id="class_tlsoptions_method_is_server"></div>

Returns `true` if created with [`server`](class_tlsoptions.md#class_tlsoptions_method_server), `false` otherwise.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_tlsoptions_method_is_unsafe_client"></div>

[`bool`](class_bool.md) **is_unsafe_client** ( ) const[^const]<div id="class_tlsoptions_method_is_unsafe_client"></div>

Returns `true` if created with [`client_unsafe`](class_tlsoptions.md#class_tlsoptions_method_client_unsafe), `false` otherwise.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_tlsoptions_method_server"></div>

[`TLSOptions`](class_tlsoptions.md) **server** ( key: [`CryptoKey`](class_cryptokey.md), certificate: [`X509Certificate`](class_x509certificate.md) ) static[^static]<div id="class_tlsoptions_method_server"></div>

Creates a TLS server configuration using the provided `key` and `certificate`.

 **Note:** The `certificate` should include the full certificate chain up to the signing CA (certificates file can be concatenated using a general purpose text editor).

[^virtual]: 本方法通常需要用户覆盖才能生效。
[^const]: 本方法无副作用，不会修改该实例的任何成员变量。
[^vararg]: 本方法除了能接受在此处描述的参数外，还能够继续接受任意数量的参数。
[^constructor]: 本方法用于构造某个类型。
[^static]: 调用本方法无需实例，可直接使用类名进行调用。
[^operator]: 本方法描述的是使用本类型作为左操作数的有效运算符。
[^bitfield]: 这个值是由下列位标志构成位掩码的整数。
[^void]: 无返回值。
