<!-- ⚠ 请勿编辑本文件 ⚠ -->
<!-- 本文档使用脚本从 WeDot 引擎源码仓库生成。 -->
<!-- 生成脚本：https://github.com/WeDot-Engine/WeDot/tree/master/doc/tools/make_md.py； -->
<!-- 原文件：https://github.com/WeDot-Engine/WeDot/tree/master/doc/classes/AESContext.xml。 -->

<div id="_class_aescontext"></div>

# AESContext

**继承：** [`RefCounted`](class_refcounted.md) **<** [`Object`](class_object.md)

Provides access to AES encryption/decryption of raw data.

## 描述

This class holds the context information required for encryption and decryption operations with AES (Advanced Encryption Standard). Both AES-ECB and AES-CBC modes are supported.



```gdscript

    extends Node
    
    var aes = AESContext.new()
    
    func _ready():
        var key = "My secret key!!!" # Key must be either 16 or 32 bytes.
        var data = "My secret text!!" # Data size must be multiple of 16 bytes, apply padding if needed.
        # Encrypt ECB
        aes.start(AESContext.MODE_ECB_ENCRYPT, key.to_utf8_buffer())
        var encrypted = aes.update(data.to_utf8_buffer())
        aes.finish()
        # Decrypt ECB
        aes.start(AESContext.MODE_ECB_DECRYPT, key.to_utf8_buffer())
        var decrypted = aes.update(encrypted)
        aes.finish()
        # Check ECB
        assert(decrypted == data.to_utf8_buffer())
    
        var iv = "My secret iv!!!!" # IV must be of exactly 16 bytes.
        # Encrypt CBC
        aes.start(AESContext.MODE_CBC_ENCRYPT, key.to_utf8_buffer(), iv.to_utf8_buffer())
        encrypted = aes.update(data.to_utf8_buffer())
        aes.finish()
        # Decrypt CBC
        aes.start(AESContext.MODE_CBC_DECRYPT, key.to_utf8_buffer(), iv.to_utf8_buffer())
        decrypted = aes.update(encrypted)
        aes.finish()
        # Check CBC
        assert(decrypted == data.to_utf8_buffer())
```

```csharp

    using Godot;
    using System.Diagnostics;
    
    public partial class MyNode : Node
    {
        private AesContext _aes = new AesContext();
    
        public override void _Ready()
        {
            string key = "My secret key!!!"; // Key must be either 16 or 32 bytes.
            string data = "My secret text!!"; // Data size must be multiple of 16 bytes, apply padding if needed.
            // Encrypt ECB
            _aes.Start(AesContext.Mode.EcbEncrypt, key.ToUtf8Buffer());
            byte[] encrypted = _aes.Update(data.ToUtf8Buffer());
            _aes.Finish();
            // Decrypt ECB
            _aes.Start(AesContext.Mode.EcbDecrypt, key.ToUtf8Buffer());
            byte[] decrypted = _aes.Update(encrypted);
            _aes.Finish();
            // Check ECB
            Debug.Assert(decrypted == data.ToUtf8Buffer());
    
            string iv = "My secret iv!!!!"; // IV must be of exactly 16 bytes.
            // Encrypt CBC
            _aes.Start(AesContext.Mode.EcbEncrypt, key.ToUtf8Buffer(), iv.ToUtf8Buffer());
            encrypted = _aes.Update(data.ToUtf8Buffer());
            _aes.Finish();
            // Decrypt CBC
            _aes.Start(AesContext.Mode.EcbDecrypt, key.ToUtf8Buffer(), iv.ToUtf8Buffer());
            decrypted = _aes.Update(encrypted);
            _aes.Finish();
            // Check CBC
            Debug.Assert(decrypted == data.ToUtf8Buffer());
        }
    }
```







## 方法

|||
|:-:|:--|
| `void`                                        | [`finish`](class_aescontext.md#class_aescontext_method_finish) ( )                                                                                                                                                              |
| [`PackedByteArray`](class_packedbytearray.md) | [`get_iv_state`](class_aescontext.md#class_aescontext_method_get_iv_state) ( )                                                                                                                                                  |
| [Error](#enum_@globalscope_error)             | [`start`](class_aescontext.md#class_aescontext_method_start) ( mode: [Mode](#enum_aescontext_mode), key: [`PackedByteArray`](class_packedbytearray.md), iv: [`PackedByteArray`](class_packedbytearray.md) = PackedByteArray() ) |
| [`PackedByteArray`](class_packedbytearray.md) | [`update`](class_aescontext.md#class_aescontext_method_update) ( src: [`PackedByteArray`](class_packedbytearray.md) )                                                                                                           |

<!-- rst-class:: classref-section-separator -->

---

## 枚举

<div id="_class_enum_aescontext_mode"></div>

enum **Mode**: <div id="enum_aescontext_mode"></div>

<div id="_class_aescontext_constant_mode_ecb_encrypt"></div>

[Mode](#enum_aescontext_mode) **MODE_ECB_ENCRYPT** = ``0``

AES electronic codebook encryption mode.

<div id="_class_aescontext_constant_mode_ecb_decrypt"></div>

[Mode](#enum_aescontext_mode) **MODE_ECB_DECRYPT** = ``1``

AES electronic codebook decryption mode.

<div id="_class_aescontext_constant_mode_cbc_encrypt"></div>

[Mode](#enum_aescontext_mode) **MODE_CBC_ENCRYPT** = ``2``

AES cipher blocker chaining encryption mode.

<div id="_class_aescontext_constant_mode_cbc_decrypt"></div>

[Mode](#enum_aescontext_mode) **MODE_CBC_DECRYPT** = ``3``

AES cipher blocker chaining decryption mode.

<div id="_class_aescontext_constant_mode_max"></div>

[Mode](#enum_aescontext_mode) **MODE_MAX** = ``4``

Maximum value for the mode enum.

<!-- rst-class:: classref-section-separator -->

---

## 方法说明

<div id="_class_aescontext_method_finish"></div>

`void` **finish** ( )<div id="class_aescontext_method_finish"></div>

Close this AES context so it can be started again. See [`start`](class_aescontext.md#class_aescontext_method_start).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_aescontext_method_get_iv_state"></div>

[`PackedByteArray`](class_packedbytearray.md) **get_iv_state** ( )<div id="class_aescontext_method_get_iv_state"></div>

Get the current IV state for this context (IV gets updated when calling [`update`](class_aescontext.md#class_aescontext_method_update)). You normally don't need this function.

 **Note:** This function only makes sense when the context is started with [`MODE_CBC_ENCRYPT`](class_aescontext.md#class_aescontext_constant_mode_cbc_encrypt) or [`MODE_CBC_DECRYPT`](class_aescontext.md#class_aescontext_constant_mode_cbc_decrypt).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_aescontext_method_start"></div>

[Error](#enum_@globalscope_error) **start** ( mode: [Mode](#enum_aescontext_mode), key: [`PackedByteArray`](class_packedbytearray.md), iv: [`PackedByteArray`](class_packedbytearray.md) = PackedByteArray() )<div id="class_aescontext_method_start"></div>

Start the AES context in the given `mode`. A `key` of either 16 or 32 bytes must always be provided, while an `iv` (initialization vector) of exactly 16 bytes, is only needed when `mode` is either [`MODE_CBC_ENCRYPT`](class_aescontext.md#class_aescontext_constant_mode_cbc_encrypt) or [`MODE_CBC_DECRYPT`](class_aescontext.md#class_aescontext_constant_mode_cbc_decrypt).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_aescontext_method_update"></div>

[`PackedByteArray`](class_packedbytearray.md) **update** ( src: [`PackedByteArray`](class_packedbytearray.md) )<div id="class_aescontext_method_update"></div>

Run the desired operation for this AES context. Will return a [`PackedByteArray`](class_packedbytearray.md) containing the result of encrypting (or decrypting) the given `src`. See [`start`](class_aescontext.md#class_aescontext_method_start) for mode of operation.

 **Note:** The size of `src` must be a multiple of 16. Apply some padding if needed.

[^virtual]: 本方法通常需要用户覆盖才能生效。
[^const]: 本方法无副作用，不会修改该实例的任何成员变量。
[^vararg]: 本方法除了能接受在此处描述的参数外，还能够继续接受任意数量的参数。
[^constructor]: 本方法用于构造某个类型。
[^static]: 调用本方法无需实例，可直接使用类名进行调用。
[^operator]: 本方法描述的是使用本类型作为左操作数的有效运算符。
[^bitfield]: 这个值是由下列位标志构成位掩码的整数。
[^void]: 无返回值。
