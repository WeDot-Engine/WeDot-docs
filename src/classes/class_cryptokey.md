<!-- ⚠ 请勿编辑本文件 ⚠ -->
<!-- 本文档使用脚本从 WeDot 引擎源码仓库生成。 -->
<!-- 生成脚本：https://github.com/WeDot-Engine/WeDot/tree/master/doc/tools/make_md.py； -->
<!-- 原文件：https://github.com/WeDot-Engine/WeDot/tree/master/doc/classes/CryptoKey.xml。 -->

<div id="_class_cryptokey"></div>

# CryptoKey

**继承：** [`Resource`](class_resource.md) **<** [`RefCounted`](class_refcounted.md) **<** [`Object`](class_object.md)

A cryptographic key (RSA or elliptic-curve).

## 描述

The CryptoKey class represents a cryptographic key. Keys can be loaded and saved like any other [`Resource`](class_resource.md).

They can be used to generate a self-signed [`X509Certificate`](class_x509certificate.md) via [`Crypto.generate_self_signed_certificate`](class_crypto.md#class_crypto_method_generate_self_signed_certificate) and as private key in [`StreamPeerTLS.accept_stream`](class_streampeertls.md#class_streampeertls_method_accept_stream) along with the appropriate certificate.

## 方法

|||
|:-:|:--|
| [`bool`](class_bool.md)           | [`is_public_only`](class_cryptokey.md#class_cryptokey_method_is_public_only) ( ) const[^const]                                                                             |
| [Error](#enum_@globalscope_error) | [`load`](class_cryptokey.md#class_cryptokey_method_load) ( path: [`String`](class_string.md), public_only: [`bool`](class_bool.md) = false )                               |
| [Error](#enum_@globalscope_error) | [`load_from_string`](class_cryptokey.md#class_cryptokey_method_load_from_string) ( string_key: [`String`](class_string.md), public_only: [`bool`](class_bool.md) = false ) |
| [Error](#enum_@globalscope_error) | [`save`](class_cryptokey.md#class_cryptokey_method_save) ( path: [`String`](class_string.md), public_only: [`bool`](class_bool.md) = false )                               |
| [`String`](class_string.md)       | [`save_to_string`](class_cryptokey.md#class_cryptokey_method_save_to_string) ( public_only: [`bool`](class_bool.md) = false )                                              |

<!-- rst-class:: classref-section-separator -->

---

## 方法说明

<div id="_class_cryptokey_method_is_public_only"></div>

[`bool`](class_bool.md) **is_public_only** ( ) const[^const]<div id="class_cryptokey_method_is_public_only"></div>

Returns `true` if this CryptoKey only has the public part, and not the private one.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_cryptokey_method_load"></div>

[Error](#enum_@globalscope_error) **load** ( path: [`String`](class_string.md), public_only: [`bool`](class_bool.md) = false )<div id="class_cryptokey_method_load"></div>

Loads a key from `path`. If `public_only` is `true`, only the public key will be loaded.

 **Note:** `path` should be a "*.pub" file if `public_only` is `true`, a "*.key" file otherwise.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_cryptokey_method_load_from_string"></div>

[Error](#enum_@globalscope_error) **load_from_string** ( string_key: [`String`](class_string.md), public_only: [`bool`](class_bool.md) = false )<div id="class_cryptokey_method_load_from_string"></div>

Loads a key from the given `string_key`. If `public_only` is `true`, only the public key will be loaded.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_cryptokey_method_save"></div>

[Error](#enum_@globalscope_error) **save** ( path: [`String`](class_string.md), public_only: [`bool`](class_bool.md) = false )<div id="class_cryptokey_method_save"></div>

Saves a key to the given `path`. If `public_only` is `true`, only the public key will be saved.

 **Note:** `path` should be a "*.pub" file if `public_only` is `true`, a "*.key" file otherwise.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_cryptokey_method_save_to_string"></div>

[`String`](class_string.md) **save_to_string** ( public_only: [`bool`](class_bool.md) = false )<div id="class_cryptokey_method_save_to_string"></div>

Returns a string containing the key in PEM format. If `public_only` is `true`, only the public key will be included.

[^virtual]: 本方法通常需要用户覆盖才能生效。
[^const]: 本方法无副作用，不会修改该实例的任何成员变量。
[^vararg]: 本方法除了能接受在此处描述的参数外，还能够继续接受任意数量的参数。
[^constructor]: 本方法用于构造某个类型。
[^static]: 调用本方法无需实例，可直接使用类名进行调用。
[^operator]: 本方法描述的是使用本类型作为左操作数的有效运算符。
[^bitfield]: 这个值是由下列位标志构成位掩码的整数。
[^void]: 无返回值。
