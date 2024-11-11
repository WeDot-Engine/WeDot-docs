<!-- ⚠ 请勿编辑本文件 ⚠ -->
<!-- 本文档使用脚本从 WeDot 引擎源码仓库生成。 -->
<!-- 生成脚本：https://github.com/WeDot-Engine/WeDot/tree/master/doc/tools/make_md.py； -->
<!-- 原文件：https://github.com/WeDot-Engine/WeDot/tree/master/doc/classes/Crypto.xml。 -->

<div id="_class_crypto"></div>

# Crypto

**继承：** [`RefCounted`](class_refcounted.md) **<** [`Object`](class_object.md)

Provides access to advanced cryptographic functionalities.

## 描述

The Crypto class provides access to advanced cryptographic functionalities.

Currently, this includes asymmetric key encryption/decryption, signing/verification, and generating cryptographically secure random bytes, RSA keys, HMAC digests, and self-signed [`X509Certificate`](class_x509certificate.md) s.



```gdscript

    var crypto = Crypto.new()
    
    # Generate new RSA key.
    var key = crypto.generate_rsa(4096)
    
    # Generate new self-signed certificate with the given key.
    var cert = crypto.generate_self_signed_certificate(key, "CN=mydomain.com,O=My Game Company,C=IT")
    
    # Save key and certificate in the user folder.
    key.save("user://generated.key")
    cert.save("user://generated.crt")
    
    # Encryption
    var data = "Some data"
    var encrypted = crypto.encrypt(key, data.to_utf8_buffer())
    
    # Decryption
    var decrypted = crypto.decrypt(key, encrypted)
    
    # Signing
    var signature = crypto.sign(HashingContext.HASH_SHA256, data.sha256_buffer(), key)
    
    # Verifying
    var verified = crypto.verify(HashingContext.HASH_SHA256, data.sha256_buffer(), signature, key)
    
    # Checks
    assert(verified)
    assert(data.to_utf8_buffer() == decrypted)
```

```csharp

    using Godot;
    using System.Diagnostics;
    
    Crypto crypto = new Crypto();
    
    // Generate new RSA key.
    CryptoKey key = crypto.GenerateRsa(4096);
    
    // Generate new self-signed certificate with the given key.
    X509Certificate cert = crypto.GenerateSelfSignedCertificate(key, "CN=mydomain.com,O=My Game Company,C=IT");
    
    // Save key and certificate in the user folder.
    key.Save("user://generated.key");
    cert.Save("user://generated.crt");
    
    // Encryption
    string data = "Some data";
    byte[] encrypted = crypto.Encrypt(key, data.ToUtf8Buffer());
    
    // Decryption
    byte[] decrypted = crypto.Decrypt(key, encrypted);
    
    // Signing
    byte[] signature = crypto.Sign(HashingContext.HashType.Sha256, Data.Sha256Buffer(), key);
    
    // Verifying
    bool verified = crypto.Verify(HashingContext.HashType.Sha256, Data.Sha256Buffer(), signature, key);
    
    // Checks
    Debug.Assert(verified);
    Debug.Assert(data.ToUtf8Buffer() == decrypted);
```







## 方法

|||
|:-:|:--|
| [`bool`](class_bool.md)                       | [`constant_time_compare`](class_crypto.md#class_crypto_method_constant_time_compare) ( trusted: [`PackedByteArray`](class_packedbytearray.md), received: [`PackedByteArray`](class_packedbytearray.md) )                                                                                                                                                     |
| [`PackedByteArray`](class_packedbytearray.md) | [`decrypt`](class_crypto.md#class_crypto_method_decrypt) ( key: [`CryptoKey`](class_cryptokey.md), ciphertext: [`PackedByteArray`](class_packedbytearray.md) )                                                                                                                                                                                               |
| [`PackedByteArray`](class_packedbytearray.md) | [`encrypt`](class_crypto.md#class_crypto_method_encrypt) ( key: [`CryptoKey`](class_cryptokey.md), plaintext: [`PackedByteArray`](class_packedbytearray.md) )                                                                                                                                                                                                |
| [`PackedByteArray`](class_packedbytearray.md) | [`generate_random_bytes`](class_crypto.md#class_crypto_method_generate_random_bytes) ( size: [`int`](class_int.md) )                                                                                                                                                                                                                                         |
| [`CryptoKey`](class_cryptokey.md)             | [`generate_rsa`](class_crypto.md#class_crypto_method_generate_rsa) ( size: [`int`](class_int.md) )                                                                                                                                                                                                                                                           |
| [`X509Certificate`](class_x509certificate.md) | [`generate_self_signed_certificate`](class_crypto.md#class_crypto_method_generate_self_signed_certificate) ( key: [`CryptoKey`](class_cryptokey.md), issuer_name: [`String`](class_string.md) = "CN=myserver,O=myorganisation,C=IT", not_before: [`String`](class_string.md) = "20140101000000", not_after: [`String`](class_string.md) = "20340101000000" ) |
| [`PackedByteArray`](class_packedbytearray.md) | [`hmac_digest`](class_crypto.md#class_crypto_method_hmac_digest) ( hash_type: [HashType](#enum_hashingcontext_hashtype), key: [`PackedByteArray`](class_packedbytearray.md), msg: [`PackedByteArray`](class_packedbytearray.md) )                                                                                                                            |
| [`PackedByteArray`](class_packedbytearray.md) | [`sign`](class_crypto.md#class_crypto_method_sign) ( hash_type: [HashType](#enum_hashingcontext_hashtype), hash: [`PackedByteArray`](class_packedbytearray.md), key: [`CryptoKey`](class_cryptokey.md) )                                                                                                                                                     |
| [`bool`](class_bool.md)                       | [`verify`](class_crypto.md#class_crypto_method_verify) ( hash_type: [HashType](#enum_hashingcontext_hashtype), hash: [`PackedByteArray`](class_packedbytearray.md), signature: [`PackedByteArray`](class_packedbytearray.md), key: [`CryptoKey`](class_cryptokey.md) )                                                                                       |

<!-- rst-class:: classref-section-separator -->

---

## 方法说明

<div id="_class_crypto_method_constant_time_compare"></div>

[`bool`](class_bool.md) **constant_time_compare** ( trusted: [`PackedByteArray`](class_packedbytearray.md), received: [`PackedByteArray`](class_packedbytearray.md) )<div id="class_crypto_method_constant_time_compare"></div>

Compares two [`PackedByteArray`](class_packedbytearray.md) s for equality without leaking timing information in order to prevent timing attacks.

See [*this blog post*](https://paragonie.com/blog/2015/11/preventing-timing-attacks-on-string-comparison-with-double-hmac-strategy) for more information.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_crypto_method_decrypt"></div>

[`PackedByteArray`](class_packedbytearray.md) **decrypt** ( key: [`CryptoKey`](class_cryptokey.md), ciphertext: [`PackedByteArray`](class_packedbytearray.md) )<div id="class_crypto_method_decrypt"></div>

Decrypt the given `ciphertext` with the provided private `key`.

 **Note:** The maximum size of accepted ciphertext is limited by the key size.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_crypto_method_encrypt"></div>

[`PackedByteArray`](class_packedbytearray.md) **encrypt** ( key: [`CryptoKey`](class_cryptokey.md), plaintext: [`PackedByteArray`](class_packedbytearray.md) )<div id="class_crypto_method_encrypt"></div>

Encrypt the given `plaintext` with the provided public `key`.

 **Note:** The maximum size of accepted plaintext is limited by the key size.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_crypto_method_generate_random_bytes"></div>

[`PackedByteArray`](class_packedbytearray.md) **generate_random_bytes** ( size: [`int`](class_int.md) )<div id="class_crypto_method_generate_random_bytes"></div>

Generates a [`PackedByteArray`](class_packedbytearray.md) of cryptographically secure random bytes with given `size`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_crypto_method_generate_rsa"></div>

[`CryptoKey`](class_cryptokey.md) **generate_rsa** ( size: [`int`](class_int.md) )<div id="class_crypto_method_generate_rsa"></div>

Generates an RSA [`CryptoKey`](class_cryptokey.md) that can be used for creating self-signed certificates and passed to [`StreamPeerTLS.accept_stream`](class_streampeertls.md#class_streampeertls_method_accept_stream).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_crypto_method_generate_self_signed_certificate"></div>

[`X509Certificate`](class_x509certificate.md) **generate_self_signed_certificate** ( key: [`CryptoKey`](class_cryptokey.md), issuer_name: [`String`](class_string.md) = "CN=myserver,O=myorganisation,C=IT", not_before: [`String`](class_string.md) = "20140101000000", not_after: [`String`](class_string.md) = "20340101000000" )<div id="class_crypto_method_generate_self_signed_certificate"></div>

Generates a self-signed [`X509Certificate`](class_x509certificate.md) from the given [`CryptoKey`](class_cryptokey.md) and `issuer_name`. The certificate validity will be defined by `not_before` and `not_after` (first valid date and last valid date). The `issuer_name` must contain at least "CN=" (common name, i.e. the domain name), "O=" (organization, i.e. your company name), "C=" (country, i.e. 2 lettered ISO-3166 code of the country the organization is based in).

A small example to generate an RSA key and an X509 self-signed certificate.



```gdscript

    var crypto = Crypto.new()
    # Generate 4096 bits RSA key.
    var key = crypto.generate_rsa(4096)
    # Generate self-signed certificate using the given key.
    var cert = crypto.generate_self_signed_certificate(key, "CN=example.com,O=A Game Company,C=IT")
```

```csharp

    var crypto = new Crypto();
    // Generate 4096 bits RSA key.
    CryptoKey key = crypto.GenerateRsa(4096);
    // Generate self-signed certificate using the given key.
    X509Certificate cert = crypto.GenerateSelfSignedCertificate(key, "CN=mydomain.com,O=My Game Company,C=IT");
```







<!-- rst-class:: classref-item-separator -->

---

<div id="_class_crypto_method_hmac_digest"></div>

[`PackedByteArray`](class_packedbytearray.md) **hmac_digest** ( hash_type: [HashType](#enum_hashingcontext_hashtype), key: [`PackedByteArray`](class_packedbytearray.md), msg: [`PackedByteArray`](class_packedbytearray.md) )<div id="class_crypto_method_hmac_digest"></div>

Generates an [*HMAC*](https://en.wikipedia.org/wiki/HMAC) digest of `msg` using `key`. The `hash_type` parameter is the hashing algorithm that is used for the inner and outer hashes.

Currently, only [`HashingContext.HASH_SHA256`](class_hashingcontext.md#class_hashingcontext_constant_hash_sha256) and [`HashingContext.HASH_SHA1`](class_hashingcontext.md#class_hashingcontext_constant_hash_sha1) are supported.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_crypto_method_sign"></div>

[`PackedByteArray`](class_packedbytearray.md) **sign** ( hash_type: [HashType](#enum_hashingcontext_hashtype), hash: [`PackedByteArray`](class_packedbytearray.md), key: [`CryptoKey`](class_cryptokey.md) )<div id="class_crypto_method_sign"></div>

Sign a given `hash` of type `hash_type` with the provided private `key`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_crypto_method_verify"></div>

[`bool`](class_bool.md) **verify** ( hash_type: [HashType](#enum_hashingcontext_hashtype), hash: [`PackedByteArray`](class_packedbytearray.md), signature: [`PackedByteArray`](class_packedbytearray.md), key: [`CryptoKey`](class_cryptokey.md) )<div id="class_crypto_method_verify"></div>

Verify that a given `signature` for `hash` of type `hash_type` against the provided public `key`.

[^virtual]: 本方法通常需要用户覆盖才能生效。
[^const]: 本方法无副作用，不会修改该实例的任何成员变量。
[^vararg]: 本方法除了能接受在此处描述的参数外，还能够继续接受任意数量的参数。
[^constructor]: 本方法用于构造某个类型。
[^static]: 调用本方法无需实例，可直接使用类名进行调用。
[^operator]: 本方法描述的是使用本类型作为左操作数的有效运算符。
[^bitfield]: 这个值是由下列位标志构成位掩码的整数。
[^void]: 无返回值。
