<!-- ⚠ 请勿编辑本文件 ⚠ -->
<!-- 本文档使用脚本从 WeDot 引擎源码仓库生成。 -->
<!-- 生成脚本：https://github.com/WeDot-Engine/WeDot/tree/master/doc/tools/make_md.py； -->
<!-- 原文件：https://github.com/WeDot-Engine/WeDot/tree/master/doc/classes/X509Certificate.xml。 -->

<div id="_class_x509certificate"></div>

# X509Certificate

**继承：** [`Resource`](class_resource.md) **<** [`RefCounted`](class_refcounted.md) **<** [`Object`](class_object.md)

An X509 certificate (e.g. for TLS).

## 描述

The X509Certificate class represents an X509 certificate. Certificates can be loaded and saved like any other [`Resource`](class_resource.md).

They can be used as the server certificate in [`StreamPeerTLS.accept_stream`](class_streampeertls.md#class_streampeertls_method_accept_stream) (along with the proper [`CryptoKey`](class_cryptokey.md)), and to specify the only certificate that should be accepted when connecting to a TLS server via [`StreamPeerTLS.connect_to_stream`](class_streampeertls.md#class_streampeertls_method_connect_to_stream).

## 方法

|||
|:-:|:--|
| [Error](#enum_@globalscope_error) | [`load`](class_x509certificate.md#class_x509certificate_method_load) ( path: [`String`](class_string.md) )                           |
| [Error](#enum_@globalscope_error) | [`load_from_string`](class_x509certificate.md#class_x509certificate_method_load_from_string) ( string: [`String`](class_string.md) ) |
| [Error](#enum_@globalscope_error) | [`save`](class_x509certificate.md#class_x509certificate_method_save) ( path: [`String`](class_string.md) )                           |
| [`String`](class_string.md)       | [`save_to_string`](class_x509certificate.md#class_x509certificate_method_save_to_string) ( )                                         |

<!-- rst-class:: classref-section-separator -->

---

## 方法说明

<div id="_class_x509certificate_method_load"></div>

[Error](#enum_@globalscope_error) **load** ( path: [`String`](class_string.md) )<div id="class_x509certificate_method_load"></div>

Loads a certificate from `path` ("*.crt" file).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_x509certificate_method_load_from_string"></div>

[Error](#enum_@globalscope_error) **load_from_string** ( string: [`String`](class_string.md) )<div id="class_x509certificate_method_load_from_string"></div>

Loads a certificate from the given `string`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_x509certificate_method_save"></div>

[Error](#enum_@globalscope_error) **save** ( path: [`String`](class_string.md) )<div id="class_x509certificate_method_save"></div>

Saves a certificate to the given `path` (should be a "*.crt" file).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_x509certificate_method_save_to_string"></div>

[`String`](class_string.md) **save_to_string** ( )<div id="class_x509certificate_method_save_to_string"></div>

Returns a string representation of the certificate, or an empty string if the certificate is invalid.

[^virtual]: 本方法通常需要用户覆盖才能生效。
[^const]: 本方法无副作用，不会修改该实例的任何成员变量。
[^vararg]: 本方法除了能接受在此处描述的参数外，还能够继续接受任意数量的参数。
[^constructor]: 本方法用于构造某个类型。
[^static]: 调用本方法无需实例，可直接使用类名进行调用。
[^operator]: 本方法描述的是使用本类型作为左操作数的有效运算符。
[^bitfield]: 这个值是由下列位标志构成位掩码的整数。
[^void]: 无返回值。
