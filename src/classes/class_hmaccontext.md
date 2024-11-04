<!-- ⚠ 请勿编辑本文件 ⚠ -->
<!-- 本文档使用脚本从 WeDot 引擎源码仓库生成。 -->
<!-- 生成脚本：https://github.com/WeDot-Engine/WeDot/tree/4.3/doc/tools/make_md.py； -->
<!-- 原文件：https://github.com/WeDot-Engine/WeDot/tree/4.3/doc/classes/HMACContext.xml。 -->

<div id="_class_hmaccontext"></div>

# HMACContext

**继承：** [`RefCounted`](class_refcounted.md) **<** [`Object`](class_object.md)

Used to create an HMAC for a message using a key.

## 描述

The HMACContext class is useful for advanced HMAC use cases, such as streaming the message as it supports creating the message over time rather than providing it all at once.



```gdscript

    extends Node
    var ctx = HMACContext.new()
    
    func _ready():
        var key = "supersecret".to_utf8_buffer()
        var err = ctx.start(HashingContext.HASH_SHA256, key)
        assert(err == OK)
        var msg1 = "this is ".to_utf8_buffer()
        var msg2 = "super duper secret".to_utf8_buffer()
        err = ctx.update(msg1)
        assert(err == OK)
        err = ctx.update(msg2)
        assert(err == OK)
        var hmac = ctx.finish()
        print(hmac.hex_encode())
    
```

```csharp

    using Godot;
    using System.Diagnostics;
    
    public partial class MyNode : Node
    {
        private HmacContext _ctx = new HmacContext();
    
        public override void _Ready()
        {
            byte[] key = "supersecret".ToUtf8Buffer();
            Error err = _ctx.Start(HashingContext.HashType.Sha256, key);
            Debug.Assert(err == Error.Ok);
            byte[] msg1 = "this is ".ToUtf8Buffer();
            byte[] msg2 = "super duper secret".ToUtf8Buffer();
            err = _ctx.Update(msg1);
            Debug.Assert(err == Error.Ok);
            err = _ctx.Update(msg2);
            Debug.Assert(err == Error.Ok);
            byte[] hmac = _ctx.Finish();
            GD.Print(hmac.HexEncode());
        }
    }
```







## 方法

| [`PackedByteArray`](class_packedbytearray.md) | [`finish`](#class_hmaccontext_method_finish) ( )                                                                                                        |
| [Error](#enum_@globalscope_error)             | [`start`](#class_hmaccontext_method_start) ( hash_type: [HashType](#enum_hashingcontext_hashtype), key: [`PackedByteArray`](class_packedbytearray.md) ) |
| [Error](#enum_@globalscope_error)             | [`update`](#class_hmaccontext_method_update) ( data: [`PackedByteArray`](class_packedbytearray.md) )                                                    |

<!-- rst-class:: classref-section-separator -->

---

## 方法说明

<div id="_class_hmaccontext_method_finish"></div>

[`PackedByteArray`](class_packedbytearray.md) **finish** ( )<div id="class_hmaccontext_method_finish"></div>

Returns the resulting HMAC. If the HMAC failed, an empty [`PackedByteArray`](class_packedbytearray.md) is returned.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_hmaccontext_method_start"></div>

[Error](#enum_@globalscope_error) **start** ( hash_type: [HashType](#enum_hashingcontext_hashtype), key: [`PackedByteArray`](class_packedbytearray.md) )<div id="class_hmaccontext_method_start"></div>

Initializes the HMACContext. This method cannot be called again on the same HMACContext until [`finish`](#class_hmaccontext_method_finish) has been called.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_hmaccontext_method_update"></div>

[Error](#enum_@globalscope_error) **update** ( data: [`PackedByteArray`](class_packedbytearray.md) )<div id="class_hmaccontext_method_update"></div>

Updates the message to be HMACed. This can be called multiple times before [`finish`](#class_hmaccontext_method_finish) is called to append `data` to the message, but cannot be called until [`start`](#class_hmaccontext_method_start) has been called.

[^virtual]: 本方法通常需要用户覆盖才能生效。
[^const]: 本方法无副作用，不会修改该实例的任何成员变量。
[^vararg]: 本方法除了能接受在此处描述的参数外，还能够继续接受任意数量的参数。
[^constructor]: 本方法用于构造某个类型。
[^static]: 调用本方法无需实例，可直接使用类名进行调用。
[^operator]: 本方法描述的是使用本类型作为左操作数的有效运算符。
[^bitfield]: 这个值是由下列位标志构成位掩码的整数。
[^void]: 无返回值。
