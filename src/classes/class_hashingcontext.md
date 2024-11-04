<!-- ⚠ 请勿编辑本文件 ⚠ -->
<!-- 本文档使用脚本从 WeDot 引擎源码仓库生成。 -->
<!-- 生成脚本：https://github.com/WeDot-Engine/WeDot/tree/4.3/doc/tools/make_md.py； -->
<!-- 原文件：https://github.com/WeDot-Engine/WeDot/tree/4.3/doc/classes/HashingContext.xml。 -->

<div id="_class_hashingcontext"></div>

# HashingContext

**继承：** [`RefCounted`](class_refcounted.md) **<** [`Object`](class_object.md)

Provides functionality for computing cryptographic hashes chunk by chunk.

## 描述

The HashingContext class provides an interface for computing cryptographic hashes over multiple iterations. Useful for computing hashes of big files (so you don't have to load them all in memory), network streams, and data streams in general (so you don't have to hold buffers).

The [HashType](#enum_hashingcontext_hashtype) enum shows the supported hashing algorithms.



```gdscript

    const CHUNK_SIZE = 1024
    
    func hash_file(path):
        # Check that file exists.
        if not FileAccess.file_exists(path):
            return
        # Start an SHA-256 context.
        var ctx = HashingContext.new()
        ctx.start(HashingContext.HASH_SHA256)
        # Open the file to hash.
        var file = FileAccess.open(path, FileAccess.READ)
        # Update the context after reading each chunk.
        while file.get_position() < file.get_length():
            var remaining = file.get_length() - file.get_position()
            ctx.update(file.get_buffer(min(remaining, CHUNK_SIZE)))
        # Get the computed hash.
        var res = ctx.finish()
        # Print the result as hex string and array.
        printt(res.hex_encode(), Array(res))
```

```csharp

    public const int ChunkSize = 1024;
    
    public void HashFile(string path)
    {
        // Check that file exists.
        if (!FileAccess.FileExists(path))
        {
            return;
        }
        // Start an SHA-256 context.
        var ctx = new HashingContext();
        ctx.Start(HashingContext.HashType.Sha256);
        // Open the file to hash.
        using var file = FileAccess.Open(path, FileAccess.ModeFlags.Read);
        // Update the context after reading each chunk.
        while (file.GetPosition() < file.GetLength())
        {
            int remaining = (int)(file.GetLength() - file.GetPosition());
            ctx.Update(file.GetBuffer(Mathf.Min(remaining, ChunkSize)));
        }
        // Get the computed hash.
        byte[] res = ctx.Finish();
        // Print the result as hex string and array.
        GD.PrintT(res.HexEncode(), (Variant)res);
    }
```







## 方法

| [`PackedByteArray`](class_packedbytearray.md) | [`finish`](#class_hashingcontext_method_finish) ( )                                                      |
| [Error](#enum_@globalscope_error)             | [`start`](#class_hashingcontext_method_start) ( type: [HashType](#enum_hashingcontext_hashtype) )        |
| [Error](#enum_@globalscope_error)             | [`update`](#class_hashingcontext_method_update) ( chunk: [`PackedByteArray`](class_packedbytearray.md) ) |

<!-- rst-class:: classref-section-separator -->

---

## 枚举

<div id="_class_enum_hashingcontext_hashtype"></div>

enum **HashType**: <div id="enum_hashingcontext_hashtype"></div>

<div id="_class_hashingcontext_constant_hash_md5"></div>

[HashType](#enum_hashingcontext_hashtype) **HASH_MD5** = ``0``

Hashing algorithm: MD5.

<div id="_class_hashingcontext_constant_hash_sha1"></div>

[HashType](#enum_hashingcontext_hashtype) **HASH_SHA1** = ``1``

Hashing algorithm: SHA-1.

<div id="_class_hashingcontext_constant_hash_sha256"></div>

[HashType](#enum_hashingcontext_hashtype) **HASH_SHA256** = ``2``

Hashing algorithm: SHA-256.

<!-- rst-class:: classref-section-separator -->

---

## 方法说明

<div id="_class_hashingcontext_method_finish"></div>

[`PackedByteArray`](class_packedbytearray.md) **finish** ( )<div id="class_hashingcontext_method_finish"></div>

Closes the current context, and return the computed hash.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_hashingcontext_method_start"></div>

[Error](#enum_@globalscope_error) **start** ( type: [HashType](#enum_hashingcontext_hashtype) )<div id="class_hashingcontext_method_start"></div>

Starts a new hash computation of the given `type` (e.g. [`HASH_SHA256`](#class_hashingcontext_constant_hash_sha256) to start computation of an SHA-256).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_hashingcontext_method_update"></div>

[Error](#enum_@globalscope_error) **update** ( chunk: [`PackedByteArray`](class_packedbytearray.md) )<div id="class_hashingcontext_method_update"></div>

Updates the computation with the given `chunk` of data.

[^virtual]: 本方法通常需要用户覆盖才能生效。
[^const]: 本方法无副作用，不会修改该实例的任何成员变量。
[^vararg]: 本方法除了能接受在此处描述的参数外，还能够继续接受任意数量的参数。
[^constructor]: 本方法用于构造某个类型。
[^static]: 调用本方法无需实例，可直接使用类名进行调用。
[^operator]: 本方法描述的是使用本类型作为左操作数的有效运算符。
[^bitfield]: 这个值是由下列位标志构成位掩码的整数。
[^void]: 无返回值。
