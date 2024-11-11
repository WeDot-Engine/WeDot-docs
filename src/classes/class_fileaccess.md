<!-- ⚠ 请勿编辑本文件 ⚠ -->
<!-- 本文档使用脚本从 WeDot 引擎源码仓库生成。 -->
<!-- 生成脚本：https://github.com/WeDot-Engine/WeDot/tree/master/doc/tools/make_md.py； -->
<!-- 原文件：https://github.com/WeDot-Engine/WeDot/tree/master/doc/classes/FileAccess.xml。 -->

<div id="_class_fileaccess"></div>

# FileAccess

**继承：** [`RefCounted`](class_refcounted.md) **<** [`Object`](class_object.md)

Provides methods for file reading and writing operations.

## 描述

This class can be used to permanently store data in the user device's file system and to read from it. This is useful for store game save data or player configuration files.

Here's a sample on how to write and read from a file:



```gdscript

    func save_to_file(content):
        var file = FileAccess.open("user://save_game.dat", FileAccess.WRITE)
        file.store_string(content)
    
    func load_from_file():
        var file = FileAccess.open("user://save_game.dat", FileAccess.READ)
        var content = file.get_as_text()
        return content
```

```csharp

    public void SaveToFile(string content)
    {
        using var file = FileAccess.Open("user://save_game.dat", FileAccess.ModeFlags.Write);
        file.StoreString(content);
    }
    
    public string LoadFromFile()
    {
        using var file = FileAccess.Open("user://save_game.dat", FileAccess.ModeFlags.Read);
        string content = file.GetAsText();
        return content;
    }
```



In the example above, the file will be saved in the user data folder as specified in the [*Data paths*](../tutorials/io/data_paths) documentation.

 **FileAccess** will close when it's freed, which happens when it goes out of scope or when it gets assigned with `null`. [`close`](class_fileaccess.md#class_fileaccess_method_close) can be used to close it before then explicitly. In C# the reference must be disposed manually, which can be done with the `using` statement or by calling the `Dispose` method directly.

 **Note:** To access project resources once exported, it is recommended to use [`ResourceLoader`](class_resourceloader.md) instead of **FileAccess**, as some files are converted to engine-specific formats and their original source files might not be present in the exported PCK package.

 **Note:** Files are automatically closed only if the process exits "normally" (such as by clicking the window manager's close button or pressing **Alt + F4**). If you stop the project execution by pressing **F8** while the project is running, the file won't be closed as the game process will be killed. You can work around this by calling [`flush`](class_fileaccess.md#class_fileaccess_method_flush) at regular intervals.





## 属性

|||
|:-:|:--|
| [`bool`](class_bool.md) | [`big_endian`](class_fileaccess.md#class_fileaccess_property_big_endian) |

## 方法

|||
|:-:|:--|
| `void`                                                      | [`close`](class_fileaccess.md#class_fileaccess_method_close) ( )                                                                                                                                                                                                       |
| [`bool`](class_bool.md)                                     | [`eof_reached`](class_fileaccess.md#class_fileaccess_method_eof_reached) ( ) const[^const]                                                                                                                                                                             |
| [`bool`](class_bool.md)                                     | [`file_exists`](class_fileaccess.md#class_fileaccess_method_file_exists) ( path: [`String`](class_string.md) ) static[^static]                                                                                                                                         |
| `void`                                                      | [`flush`](class_fileaccess.md#class_fileaccess_method_flush) ( )                                                                                                                                                                                                       |
| [`int`](class_int.md)                                       | [`get_8`](class_fileaccess.md#class_fileaccess_method_get_8) ( ) const[^const]                                                                                                                                                                                         |
| [`int`](class_int.md)                                       | [`get_16`](class_fileaccess.md#class_fileaccess_method_get_16) ( ) const[^const]                                                                                                                                                                                       |
| [`int`](class_int.md)                                       | [`get_32`](class_fileaccess.md#class_fileaccess_method_get_32) ( ) const[^const]                                                                                                                                                                                       |
| [`int`](class_int.md)                                       | [`get_64`](class_fileaccess.md#class_fileaccess_method_get_64) ( ) const[^const]                                                                                                                                                                                       |
| [`String`](class_string.md)                                 | [`get_as_text`](class_fileaccess.md#class_fileaccess_method_get_as_text) ( skip_cr: [`bool`](class_bool.md) = false ) const[^const]                                                                                                                                    |
| [`PackedByteArray`](class_packedbytearray.md)               | [`get_buffer`](class_fileaccess.md#class_fileaccess_method_get_buffer) ( length: [`int`](class_int.md) ) const[^const]                                                                                                                                                 |
| [`PackedStringArray`](class_packedstringarray.md)           | [`get_csv_line`](class_fileaccess.md#class_fileaccess_method_get_csv_line) ( delim: [`String`](class_string.md) = "," ) const[^const]                                                                                                                                  |
| [`float`](class_float.md)                                   | [`get_double`](class_fileaccess.md#class_fileaccess_method_get_double) ( ) const[^const]                                                                                                                                                                               |
| [Error](#enum_@globalscope_error)                           | [`get_error`](class_fileaccess.md#class_fileaccess_method_get_error) ( ) const[^const]                                                                                                                                                                                 |
| [`PackedByteArray`](class_packedbytearray.md)               | [`get_file_as_bytes`](class_fileaccess.md#class_fileaccess_method_get_file_as_bytes) ( path: [`String`](class_string.md) ) static[^static]                                                                                                                             |
| [`String`](class_string.md)                                 | [`get_file_as_string`](class_fileaccess.md#class_fileaccess_method_get_file_as_string) ( path: [`String`](class_string.md) ) static[^static]                                                                                                                           |
| [`float`](class_float.md)                                   | [`get_float`](class_fileaccess.md#class_fileaccess_method_get_float) ( ) const[^const]                                                                                                                                                                                 |
| [`bool`](class_bool.md)                                     | [`get_hidden_attribute`](class_fileaccess.md#class_fileaccess_method_get_hidden_attribute) ( file: [`String`](class_string.md) ) static[^static]                                                                                                                       |
| [`int`](class_int.md)                                       | [`get_length`](class_fileaccess.md#class_fileaccess_method_get_length) ( ) const[^const]                                                                                                                                                                               |
| [`String`](class_string.md)                                 | [`get_line`](class_fileaccess.md#class_fileaccess_method_get_line) ( ) const[^const]                                                                                                                                                                                   |
| [`String`](class_string.md)                                 | [`get_md5`](class_fileaccess.md#class_fileaccess_method_get_md5) ( path: [`String`](class_string.md) ) static[^static]                                                                                                                                                 |
| [`int`](class_int.md)                                       | [`get_modified_time`](class_fileaccess.md#class_fileaccess_method_get_modified_time) ( file: [`String`](class_string.md) ) static[^static]                                                                                                                             |
| [Error](#enum_@globalscope_error)                           | [`get_open_error`](class_fileaccess.md#class_fileaccess_method_get_open_error) ( ) static[^static]                                                                                                                                                                     |
| [`String`](class_string.md)                                 | [`get_pascal_string`](class_fileaccess.md#class_fileaccess_method_get_pascal_string) ( )                                                                                                                                                                               |
| [`String`](class_string.md)                                 | [`get_path`](class_fileaccess.md#class_fileaccess_method_get_path) ( ) const[^const]                                                                                                                                                                                   |
| [`String`](class_string.md)                                 | [`get_path_absolute`](class_fileaccess.md#class_fileaccess_method_get_path_absolute) ( ) const[^const]                                                                                                                                                                 |
| [`int`](class_int.md)                                       | [`get_position`](class_fileaccess.md#class_fileaccess_method_get_position) ( ) const[^const]                                                                                                                                                                           |
| [`bool`](class_bool.md)                                     | [`get_read_only_attribute`](class_fileaccess.md#class_fileaccess_method_get_read_only_attribute) ( file: [`String`](class_string.md) ) static[^static]                                                                                                                 |
| [`float`](class_float.md)                                   | [`get_real`](class_fileaccess.md#class_fileaccess_method_get_real) ( ) const[^const]                                                                                                                                                                                   |
| [`String`](class_string.md)                                 | [`get_sha256`](class_fileaccess.md#class_fileaccess_method_get_sha256) ( path: [`String`](class_string.md) ) static[^static]                                                                                                                                           |
| [UnixPermissionFlags](#enum_fileaccess_unixpermissionflags) | [`get_unix_permissions`](class_fileaccess.md#class_fileaccess_method_get_unix_permissions) ( file: [`String`](class_string.md) ) static[^static]                                                                                                                       |
| [`Variant`](class_variant.md)                               | [`get_var`](class_fileaccess.md#class_fileaccess_method_get_var) ( allow_objects: [`bool`](class_bool.md) = false ) const[^const]                                                                                                                                      |
| [`bool`](class_bool.md)                                     | [`is_open`](class_fileaccess.md#class_fileaccess_method_is_open) ( ) const[^const]                                                                                                                                                                                     |
| [`FileAccess`](class_fileaccess.md)                         | [`open`](class_fileaccess.md#class_fileaccess_method_open) ( path: [`String`](class_string.md), flags: [ModeFlags](#enum_fileaccess_modeflags) ) static[^static]                                                                                                       |
| [`FileAccess`](class_fileaccess.md)                         | [`open_compressed`](class_fileaccess.md#class_fileaccess_method_open_compressed) ( path: [`String`](class_string.md), mode_flags: [ModeFlags](#enum_fileaccess_modeflags), compression_mode: [CompressionMode](#enum_fileaccess_compressionmode) = 0 ) static[^static] |
| [`FileAccess`](class_fileaccess.md)                         | [`open_encrypted`](class_fileaccess.md#class_fileaccess_method_open_encrypted) ( path: [`String`](class_string.md), mode_flags: [ModeFlags](#enum_fileaccess_modeflags), key: [`PackedByteArray`](class_packedbytearray.md) ) static[^static]                          |
| [`FileAccess`](class_fileaccess.md)                         | [`open_encrypted_with_pass`](class_fileaccess.md#class_fileaccess_method_open_encrypted_with_pass) ( path: [`String`](class_string.md), mode_flags: [ModeFlags](#enum_fileaccess_modeflags), pass: [`String`](class_string.md) ) static[^static]                       |
| [Error](#enum_@globalscope_error)                           | [`resize`](class_fileaccess.md#class_fileaccess_method_resize) ( length: [`int`](class_int.md) )                                                                                                                                                                       |
| `void`                                                      | [`seek`](class_fileaccess.md#class_fileaccess_method_seek) ( position: [`int`](class_int.md) )                                                                                                                                                                         |
| `void`                                                      | [`seek_end`](class_fileaccess.md#class_fileaccess_method_seek_end) ( position: [`int`](class_int.md) = 0 )                                                                                                                                                             |
| [Error](#enum_@globalscope_error)                           | [`set_hidden_attribute`](class_fileaccess.md#class_fileaccess_method_set_hidden_attribute) ( file: [`String`](class_string.md), hidden: [`bool`](class_bool.md) ) static[^static]                                                                                      |
| [Error](#enum_@globalscope_error)                           | [`set_read_only_attribute`](class_fileaccess.md#class_fileaccess_method_set_read_only_attribute) ( file: [`String`](class_string.md), ro: [`bool`](class_bool.md) ) static[^static]                                                                                    |
| [Error](#enum_@globalscope_error)                           | [`set_unix_permissions`](class_fileaccess.md#class_fileaccess_method_set_unix_permissions) ( file: [`String`](class_string.md), permissions: [UnixPermissionFlags](#enum_fileaccess_unixpermissionflags) ) static[^static]                                             |
| `void`                                                      | [`store_8`](class_fileaccess.md#class_fileaccess_method_store_8) ( value: [`int`](class_int.md) )                                                                                                                                                                      |
| `void`                                                      | [`store_16`](class_fileaccess.md#class_fileaccess_method_store_16) ( value: [`int`](class_int.md) )                                                                                                                                                                    |
| `void`                                                      | [`store_32`](class_fileaccess.md#class_fileaccess_method_store_32) ( value: [`int`](class_int.md) )                                                                                                                                                                    |
| `void`                                                      | [`store_64`](class_fileaccess.md#class_fileaccess_method_store_64) ( value: [`int`](class_int.md) )                                                                                                                                                                    |
| `void`                                                      | [`store_buffer`](class_fileaccess.md#class_fileaccess_method_store_buffer) ( buffer: [`PackedByteArray`](class_packedbytearray.md) )                                                                                                                                   |
| `void`                                                      | [`store_csv_line`](class_fileaccess.md#class_fileaccess_method_store_csv_line) ( values: [`PackedStringArray`](class_packedstringarray.md), delim: [`String`](class_string.md) = "," )                                                                                 |
| `void`                                                      | [`store_double`](class_fileaccess.md#class_fileaccess_method_store_double) ( value: [`float`](class_float.md) )                                                                                                                                                        |
| `void`                                                      | [`store_float`](class_fileaccess.md#class_fileaccess_method_store_float) ( value: [`float`](class_float.md) )                                                                                                                                                          |
| `void`                                                      | [`store_line`](class_fileaccess.md#class_fileaccess_method_store_line) ( line: [`String`](class_string.md) )                                                                                                                                                           |
| `void`                                                      | [`store_pascal_string`](class_fileaccess.md#class_fileaccess_method_store_pascal_string) ( string: [`String`](class_string.md) )                                                                                                                                       |
| `void`                                                      | [`store_real`](class_fileaccess.md#class_fileaccess_method_store_real) ( value: [`float`](class_float.md) )                                                                                                                                                            |
| `void`                                                      | [`store_string`](class_fileaccess.md#class_fileaccess_method_store_string) ( string: [`String`](class_string.md) )                                                                                                                                                     |
| `void`                                                      | [`store_var`](class_fileaccess.md#class_fileaccess_method_store_var) ( value: [`Variant`](class_variant.md), full_objects: [`bool`](class_bool.md) = false )                                                                                                           |

<!-- rst-class:: classref-section-separator -->

---

## 枚举

<div id="_class_enum_fileaccess_modeflags"></div>

enum **ModeFlags**: <div id="enum_fileaccess_modeflags"></div>

<div id="_class_fileaccess_constant_read"></div>

[ModeFlags](#enum_fileaccess_modeflags) **READ** = ``1``

Opens the file for read operations. The cursor is positioned at the beginning of the file.

<div id="_class_fileaccess_constant_write"></div>

[ModeFlags](#enum_fileaccess_modeflags) **WRITE** = ``2``

Opens the file for write operations. The file is created if it does not exist, and truncated if it does.

 **Note:** When creating a file it must be in an already existing directory. To recursively create directories for a file path, see [`DirAccess.make_dir_recursive`](class_diraccess.md#class_diraccess_method_make_dir_recursive).

<div id="_class_fileaccess_constant_read_write"></div>

[ModeFlags](#enum_fileaccess_modeflags) **READ_WRITE** = ``3``

Opens the file for read and write operations. Does not truncate the file. The cursor is positioned at the beginning of the file.

<div id="_class_fileaccess_constant_write_read"></div>

[ModeFlags](#enum_fileaccess_modeflags) **WRITE_READ** = ``7``

Opens the file for read and write operations. The file is created if it does not exist, and truncated if it does. The cursor is positioned at the beginning of the file.

 **Note:** When creating a file it must be in an already existing directory. To recursively create directories for a file path, see [`DirAccess.make_dir_recursive`](class_diraccess.md#class_diraccess_method_make_dir_recursive).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_enum_fileaccess_compressionmode"></div>

enum **CompressionMode**: <div id="enum_fileaccess_compressionmode"></div>

<div id="_class_fileaccess_constant_compression_fastlz"></div>

[CompressionMode](#enum_fileaccess_compressionmode) **COMPRESSION_FASTLZ** = ``0``

Uses the [*FastLZ*](https://fastlz.org/) compression method.

<div id="_class_fileaccess_constant_compression_deflate"></div>

[CompressionMode](#enum_fileaccess_compressionmode) **COMPRESSION_DEFLATE** = ``1``

Uses the [*DEFLATE*](https://en.wikipedia.org/wiki/DEFLATE) compression method.

<div id="_class_fileaccess_constant_compression_zstd"></div>

[CompressionMode](#enum_fileaccess_compressionmode) **COMPRESSION_ZSTD** = ``2``

Uses the [*Zstandard*](https://facebook.github.io/zstd/) compression method.

<div id="_class_fileaccess_constant_compression_gzip"></div>

[CompressionMode](#enum_fileaccess_compressionmode) **COMPRESSION_GZIP** = ``3``

Uses the [*gzip*](https://www.gzip.org/) compression method.

<div id="_class_fileaccess_constant_compression_brotli"></div>

[CompressionMode](#enum_fileaccess_compressionmode) **COMPRESSION_BROTLI** = ``4``

Uses the [*brotli*](https://github.com/google/brotli) compression method (only decompression is supported).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_enum_fileaccess_unixpermissionflags"></div>

flags **UnixPermissionFlags**: <div id="enum_fileaccess_unixpermissionflags"></div>

<div id="_class_fileaccess_constant_unix_read_owner"></div>

[UnixPermissionFlags](#enum_fileaccess_unixpermissionflags) **UNIX_READ_OWNER** = ``256``

Read for owner bit.

<div id="_class_fileaccess_constant_unix_write_owner"></div>

[UnixPermissionFlags](#enum_fileaccess_unixpermissionflags) **UNIX_WRITE_OWNER** = ``128``

Write for owner bit.

<div id="_class_fileaccess_constant_unix_execute_owner"></div>

[UnixPermissionFlags](#enum_fileaccess_unixpermissionflags) **UNIX_EXECUTE_OWNER** = ``64``

Execute for owner bit.

<div id="_class_fileaccess_constant_unix_read_group"></div>

[UnixPermissionFlags](#enum_fileaccess_unixpermissionflags) **UNIX_READ_GROUP** = ``32``

Read for group bit.

<div id="_class_fileaccess_constant_unix_write_group"></div>

[UnixPermissionFlags](#enum_fileaccess_unixpermissionflags) **UNIX_WRITE_GROUP** = ``16``

Write for group bit.

<div id="_class_fileaccess_constant_unix_execute_group"></div>

[UnixPermissionFlags](#enum_fileaccess_unixpermissionflags) **UNIX_EXECUTE_GROUP** = ``8``

Execute for group bit.

<div id="_class_fileaccess_constant_unix_read_other"></div>

[UnixPermissionFlags](#enum_fileaccess_unixpermissionflags) **UNIX_READ_OTHER** = ``4``

Read for other bit.

<div id="_class_fileaccess_constant_unix_write_other"></div>

[UnixPermissionFlags](#enum_fileaccess_unixpermissionflags) **UNIX_WRITE_OTHER** = ``2``

Write for other bit.

<div id="_class_fileaccess_constant_unix_execute_other"></div>

[UnixPermissionFlags](#enum_fileaccess_unixpermissionflags) **UNIX_EXECUTE_OTHER** = ``1``

Execute for other bit.

<div id="_class_fileaccess_constant_unix_set_user_id"></div>

[UnixPermissionFlags](#enum_fileaccess_unixpermissionflags) **UNIX_SET_USER_ID** = ``2048``

Set user id on execution bit.

<div id="_class_fileaccess_constant_unix_set_group_id"></div>

[UnixPermissionFlags](#enum_fileaccess_unixpermissionflags) **UNIX_SET_GROUP_ID** = ``1024``

Set group id on execution bit.

<div id="_class_fileaccess_constant_unix_restricted_delete"></div>

[UnixPermissionFlags](#enum_fileaccess_unixpermissionflags) **UNIX_RESTRICTED_DELETE** = ``512``

Restricted deletion (sticky) bit.

<!-- rst-class:: classref-section-separator -->

---

## 属性说明

<div id="_class_fileaccess_property_big_endian"></div>

[`bool`](class_bool.md) **big_endian** <div id="class_fileaccess_property_big_endian"></div>

- `void` **set_big_endian** ( value: [`bool`](class_bool.md) )
- [`bool`](class_bool.md) **is_big_endian** ( )

If `true`, the file is read with big-endian [*endianness*](https://en.wikipedia.org/wiki/Endianness). If `false`, the file is read with little-endian endianness. If in doubt, leave this to `false` as most files are written with little-endian endianness.

 **Note:** [`big_endian`](class_fileaccess.md#class_fileaccess_property_big_endian) is only about the file format, not the CPU type. The CPU endianness doesn't affect the default endianness for files written.

 **Note:** This is always reset to `false` whenever you open the file. Therefore, you must set [`big_endian`](class_fileaccess.md#class_fileaccess_property_big_endian) *after* opening the file, not before.

<!-- rst-class:: classref-section-separator -->

---

## 方法说明

<div id="_class_fileaccess_method_close"></div>

`void` **close** ( )<div id="class_fileaccess_method_close"></div>

Closes the currently opened file and prevents subsequent read/write operations. Use [`flush`](class_fileaccess.md#class_fileaccess_method_flush) to persist the data to disk without closing the file.

 **Note:** **FileAccess** will automatically close when it's freed, which happens when it goes out of scope or when it gets assigned with `null`. In C# the reference must be disposed after we are done using it, this can be done with the `using` statement or calling the `Dispose` method directly.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_fileaccess_method_eof_reached"></div>

[`bool`](class_bool.md) **eof_reached** ( ) const[^const]<div id="class_fileaccess_method_eof_reached"></div>

Returns `true` if the file cursor has already read past the end of the file.

 **Note:** `eof_reached() == false` cannot be used to check whether there is more data available. To loop while there is more data available, use:



```gdscript

    while file.get_position() < file.get_length():
        # Read data
```

```csharp

    while (file.GetPosition() < file.GetLength())
    {
        // Read data
    }
```







<!-- rst-class:: classref-item-separator -->

---

<div id="_class_fileaccess_method_file_exists"></div>

[`bool`](class_bool.md) **file_exists** ( path: [`String`](class_string.md) ) static[^static]<div id="class_fileaccess_method_file_exists"></div>

Returns `true` if the file exists in the given path.

 **Note:** Many resources types are imported (e.g. textures or sound files), and their source asset will not be included in the exported game, as only the imported version is used. See [`ResourceLoader.exists`](class_resourceloader.md#class_resourceloader_method_exists) for an alternative approach that takes resource remapping into account.

For a non-static, relative equivalent, use [`DirAccess.file_exists`](class_diraccess.md#class_diraccess_method_file_exists).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_fileaccess_method_flush"></div>

`void` **flush** ( )<div id="class_fileaccess_method_flush"></div>

Writes the file's buffer to disk. Flushing is automatically performed when the file is closed. This means you don't need to call [`flush`](class_fileaccess.md#class_fileaccess_method_flush) manually before closing a file. Still, calling [`flush`](class_fileaccess.md#class_fileaccess_method_flush) can be used to ensure the data is safe even if the project crashes instead of being closed gracefully.

 **Note:** Only call [`flush`](class_fileaccess.md#class_fileaccess_method_flush) when you actually need it. Otherwise, it will decrease performance due to constant disk writes.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_fileaccess_method_get_8"></div>

[`int`](class_int.md) **get_8** ( ) const[^const]<div id="class_fileaccess_method_get_8"></div>

Returns the next 8 bits from the file as an integer. See [`store_8`](class_fileaccess.md#class_fileaccess_method_store_8) for details on what values can be stored and retrieved this way.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_fileaccess_method_get_16"></div>

[`int`](class_int.md) **get_16** ( ) const[^const]<div id="class_fileaccess_method_get_16"></div>

Returns the next 16 bits from the file as an integer. See [`store_16`](class_fileaccess.md#class_fileaccess_method_store_16) for details on what values can be stored and retrieved this way.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_fileaccess_method_get_32"></div>

[`int`](class_int.md) **get_32** ( ) const[^const]<div id="class_fileaccess_method_get_32"></div>

Returns the next 32 bits from the file as an integer. See [`store_32`](class_fileaccess.md#class_fileaccess_method_store_32) for details on what values can be stored and retrieved this way.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_fileaccess_method_get_64"></div>

[`int`](class_int.md) **get_64** ( ) const[^const]<div id="class_fileaccess_method_get_64"></div>

Returns the next 64 bits from the file as an integer. See [`store_64`](class_fileaccess.md#class_fileaccess_method_store_64) for details on what values can be stored and retrieved this way.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_fileaccess_method_get_as_text"></div>

[`String`](class_string.md) **get_as_text** ( skip_cr: [`bool`](class_bool.md) = false ) const[^const]<div id="class_fileaccess_method_get_as_text"></div>

Returns the whole file as a [`String`](class_string.md). Text is interpreted as being UTF-8 encoded.

If `skip_cr` is `true`, carriage return characters (`\r`, CR) will be ignored when parsing the UTF-8, so that only line feed characters (`\n`, LF) represent a new line (Unix convention).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_fileaccess_method_get_buffer"></div>

[`PackedByteArray`](class_packedbytearray.md) **get_buffer** ( length: [`int`](class_int.md) ) const[^const]<div id="class_fileaccess_method_get_buffer"></div>

Returns next `length` bytes of the file as a [`PackedByteArray`](class_packedbytearray.md).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_fileaccess_method_get_csv_line"></div>

[`PackedStringArray`](class_packedstringarray.md) **get_csv_line** ( delim: [`String`](class_string.md) = "," ) const[^const]<div id="class_fileaccess_method_get_csv_line"></div>

Returns the next value of the file in CSV (Comma-Separated Values) format. You can pass a different delimiter `delim` to use other than the default `","` (comma). This delimiter must be one-character long, and cannot be a double quotation mark.

Text is interpreted as being UTF-8 encoded. Text values must be enclosed in double quotes if they include the delimiter character. Double quotes within a text value can be escaped by doubling their occurrence.

For example, the following CSV lines are valid and will be properly parsed as two strings each:

```text

    Alice,"Hello, Bob!"
    Bob,Alice! What a surprise!
    Alice,"I thought you'd reply with ""Hello, world""."
```

Note how the second line can omit the enclosing quotes as it does not include the delimiter. However it *could* very well use quotes, it was only written without for demonstration purposes. The third line must use `""` for each quotation mark that needs to be interpreted as such instead of the end of a text value.



<!-- rst-class:: classref-item-separator -->

---

<div id="_class_fileaccess_method_get_double"></div>

[`float`](class_float.md) **get_double** ( ) const[^const]<div id="class_fileaccess_method_get_double"></div>

Returns the next 64 bits from the file as a floating-point number.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_fileaccess_method_get_error"></div>

[Error](#enum_@globalscope_error) **get_error** ( ) const[^const]<div id="class_fileaccess_method_get_error"></div>

Returns the last error that happened when trying to perform operations. Compare with the `ERR_FILE_*` constants from [Error](#enum_@globalscope_error).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_fileaccess_method_get_file_as_bytes"></div>

[`PackedByteArray`](class_packedbytearray.md) **get_file_as_bytes** ( path: [`String`](class_string.md) ) static[^static]<div id="class_fileaccess_method_get_file_as_bytes"></div>

Returns the whole `path` file contents as a [`PackedByteArray`](class_packedbytearray.md) without any decoding.

Returns an empty [`PackedByteArray`](class_packedbytearray.md) if an error occurred while opening the file. You can use [`get_open_error`](class_fileaccess.md#class_fileaccess_method_get_open_error) to check the error that occurred.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_fileaccess_method_get_file_as_string"></div>

[`String`](class_string.md) **get_file_as_string** ( path: [`String`](class_string.md) ) static[^static]<div id="class_fileaccess_method_get_file_as_string"></div>

Returns the whole `path` file contents as a [`String`](class_string.md). Text is interpreted as being UTF-8 encoded.

Returns an empty [`String`](class_string.md) if an error occurred while opening the file. You can use [`get_open_error`](class_fileaccess.md#class_fileaccess_method_get_open_error) to check the error that occurred.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_fileaccess_method_get_float"></div>

[`float`](class_float.md) **get_float** ( ) const[^const]<div id="class_fileaccess_method_get_float"></div>

Returns the next 32 bits from the file as a floating-point number.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_fileaccess_method_get_hidden_attribute"></div>

[`bool`](class_bool.md) **get_hidden_attribute** ( file: [`String`](class_string.md) ) static[^static]<div id="class_fileaccess_method_get_hidden_attribute"></div>

Returns `true`, if file `hidden` attribute is set.

 **Note:** This method is implemented on iOS, BSD, macOS, and Windows.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_fileaccess_method_get_length"></div>

[`int`](class_int.md) **get_length** ( ) const[^const]<div id="class_fileaccess_method_get_length"></div>

Returns the size of the file in bytes.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_fileaccess_method_get_line"></div>

[`String`](class_string.md) **get_line** ( ) const[^const]<div id="class_fileaccess_method_get_line"></div>

Returns the next line of the file as a [`String`](class_string.md). The returned string doesn't include newline (`\n`) or carriage return (`\r`) characters, but does include any other leading or trailing whitespace.

Text is interpreted as being UTF-8 encoded.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_fileaccess_method_get_md5"></div>

[`String`](class_string.md) **get_md5** ( path: [`String`](class_string.md) ) static[^static]<div id="class_fileaccess_method_get_md5"></div>

Returns an MD5 String representing the file at the given path or an empty [`String`](class_string.md) on failure.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_fileaccess_method_get_modified_time"></div>

[`int`](class_int.md) **get_modified_time** ( file: [`String`](class_string.md) ) static[^static]<div id="class_fileaccess_method_get_modified_time"></div>

Returns the last time the `file` was modified in Unix timestamp format, or `0` on error. This Unix timestamp can be converted to another format using the [`Time`](class_time.md) singleton.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_fileaccess_method_get_open_error"></div>

[Error](#enum_@globalscope_error) **get_open_error** ( ) static[^static]<div id="class_fileaccess_method_get_open_error"></div>

Returns the result of the last [`open`](class_fileaccess.md#class_fileaccess_method_open) call in the current thread.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_fileaccess_method_get_pascal_string"></div>

[`String`](class_string.md) **get_pascal_string** ( )<div id="class_fileaccess_method_get_pascal_string"></div>

Returns a [`String`](class_string.md) saved in Pascal format from the file.

Text is interpreted as being UTF-8 encoded.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_fileaccess_method_get_path"></div>

[`String`](class_string.md) **get_path** ( ) const[^const]<div id="class_fileaccess_method_get_path"></div>

Returns the path as a [`String`](class_string.md) for the current open file.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_fileaccess_method_get_path_absolute"></div>

[`String`](class_string.md) **get_path_absolute** ( ) const[^const]<div id="class_fileaccess_method_get_path_absolute"></div>

Returns the absolute path as a [`String`](class_string.md) for the current open file.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_fileaccess_method_get_position"></div>

[`int`](class_int.md) **get_position** ( ) const[^const]<div id="class_fileaccess_method_get_position"></div>

Returns the file cursor's position.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_fileaccess_method_get_read_only_attribute"></div>

[`bool`](class_bool.md) **get_read_only_attribute** ( file: [`String`](class_string.md) ) static[^static]<div id="class_fileaccess_method_get_read_only_attribute"></div>

Returns `true`, if file `read only` attribute is set.

 **Note:** This method is implemented on iOS, BSD, macOS, and Windows.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_fileaccess_method_get_real"></div>

[`float`](class_float.md) **get_real** ( ) const[^const]<div id="class_fileaccess_method_get_real"></div>

Returns the next bits from the file as a floating-point number.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_fileaccess_method_get_sha256"></div>

[`String`](class_string.md) **get_sha256** ( path: [`String`](class_string.md) ) static[^static]<div id="class_fileaccess_method_get_sha256"></div>

Returns an SHA-256 [`String`](class_string.md) representing the file at the given path or an empty [`String`](class_string.md) on failure.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_fileaccess_method_get_unix_permissions"></div>

[UnixPermissionFlags](#enum_fileaccess_unixpermissionflags) **get_unix_permissions** ( file: [`String`](class_string.md) ) static[^static]<div id="class_fileaccess_method_get_unix_permissions"></div>

Returns file UNIX permissions.

 **Note:** This method is implemented on iOS, Linux/BSD, and macOS.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_fileaccess_method_get_var"></div>

[`Variant`](class_variant.md) **get_var** ( allow_objects: [`bool`](class_bool.md) = false ) const[^const]<div id="class_fileaccess_method_get_var"></div>

Returns the next [`Variant`](class_variant.md) value from the file. If `allow_objects` is `true`, decoding objects is allowed.

Internally, this uses the same decoding mechanism as the [`@GlobalScope.bytes_to_var`](class_@globalscope.md#class_@globalscope_method_bytes_to_var) method.

 **Warning:** Deserialized objects can contain code which gets executed. Do not use this option if the serialized object comes from untrusted sources to avoid potential security threats such as remote code execution.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_fileaccess_method_is_open"></div>

[`bool`](class_bool.md) **is_open** ( ) const[^const]<div id="class_fileaccess_method_is_open"></div>

Returns `true` if the file is currently opened.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_fileaccess_method_open"></div>

[`FileAccess`](class_fileaccess.md) **open** ( path: [`String`](class_string.md), flags: [ModeFlags](#enum_fileaccess_modeflags) ) static[^static]<div id="class_fileaccess_method_open"></div>

Creates a new **FileAccess** object and opens the file for writing or reading, depending on the flags.

Returns `null` if opening the file failed. You can use [`get_open_error`](class_fileaccess.md#class_fileaccess_method_get_open_error) to check the error that occurred.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_fileaccess_method_open_compressed"></div>

[`FileAccess`](class_fileaccess.md) **open_compressed** ( path: [`String`](class_string.md), mode_flags: [ModeFlags](#enum_fileaccess_modeflags), compression_mode: [CompressionMode](#enum_fileaccess_compressionmode) = 0 ) static[^static]<div id="class_fileaccess_method_open_compressed"></div>

Creates a new **FileAccess** object and opens a compressed file for reading or writing.

 **Note:** [`open_compressed`](class_fileaccess.md#class_fileaccess_method_open_compressed) can only read files that were saved by Godot, not third-party compression formats. See [*GitHub issue #28999*](https://github.com/godotengine/godot/issues/28999) for a workaround.

Returns `null` if opening the file failed. You can use [`get_open_error`](class_fileaccess.md#class_fileaccess_method_get_open_error) to check the error that occurred.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_fileaccess_method_open_encrypted"></div>

[`FileAccess`](class_fileaccess.md) **open_encrypted** ( path: [`String`](class_string.md), mode_flags: [ModeFlags](#enum_fileaccess_modeflags), key: [`PackedByteArray`](class_packedbytearray.md) ) static[^static]<div id="class_fileaccess_method_open_encrypted"></div>

Creates a new **FileAccess** object and opens an encrypted file in write or read mode. You need to pass a binary key to encrypt/decrypt it.

 **Note:** The provided key must be 32 bytes long.

Returns `null` if opening the file failed. You can use [`get_open_error`](class_fileaccess.md#class_fileaccess_method_get_open_error) to check the error that occurred.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_fileaccess_method_open_encrypted_with_pass"></div>

[`FileAccess`](class_fileaccess.md) **open_encrypted_with_pass** ( path: [`String`](class_string.md), mode_flags: [ModeFlags](#enum_fileaccess_modeflags), pass: [`String`](class_string.md) ) static[^static]<div id="class_fileaccess_method_open_encrypted_with_pass"></div>

Creates a new **FileAccess** object and opens an encrypted file in write or read mode. You need to pass a password to encrypt/decrypt it.

Returns `null` if opening the file failed. You can use [`get_open_error`](class_fileaccess.md#class_fileaccess_method_get_open_error) to check the error that occurred.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_fileaccess_method_resize"></div>

[Error](#enum_@globalscope_error) **resize** ( length: [`int`](class_int.md) )<div id="class_fileaccess_method_resize"></div>

Resizes the file to a specified length. The file must be open in a mode that permits writing. If the file is extended, NUL characters are appended. If the file is truncated, all data from the end file to the original length of the file is lost.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_fileaccess_method_seek"></div>

`void` **seek** ( position: [`int`](class_int.md) )<div id="class_fileaccess_method_seek"></div>

Changes the file reading/writing cursor to the specified position (in bytes from the beginning of the file).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_fileaccess_method_seek_end"></div>

`void` **seek_end** ( position: [`int`](class_int.md) = 0 )<div id="class_fileaccess_method_seek_end"></div>

Changes the file reading/writing cursor to the specified position (in bytes from the end of the file).

 **Note:** This is an offset, so you should use negative numbers or the cursor will be at the end of the file.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_fileaccess_method_set_hidden_attribute"></div>

[Error](#enum_@globalscope_error) **set_hidden_attribute** ( file: [`String`](class_string.md), hidden: [`bool`](class_bool.md) ) static[^static]<div id="class_fileaccess_method_set_hidden_attribute"></div>

Sets file **hidden** attribute.

 **Note:** This method is implemented on iOS, BSD, macOS, and Windows.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_fileaccess_method_set_read_only_attribute"></div>

[Error](#enum_@globalscope_error) **set_read_only_attribute** ( file: [`String`](class_string.md), ro: [`bool`](class_bool.md) ) static[^static]<div id="class_fileaccess_method_set_read_only_attribute"></div>

Sets file **read only** attribute.

 **Note:** This method is implemented on iOS, BSD, macOS, and Windows.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_fileaccess_method_set_unix_permissions"></div>

[Error](#enum_@globalscope_error) **set_unix_permissions** ( file: [`String`](class_string.md), permissions: [UnixPermissionFlags](#enum_fileaccess_unixpermissionflags) ) static[^static]<div id="class_fileaccess_method_set_unix_permissions"></div>

Sets file UNIX permissions.

 **Note:** This method is implemented on iOS, Linux/BSD, and macOS.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_fileaccess_method_store_8"></div>

`void` **store_8** ( value: [`int`](class_int.md) )<div id="class_fileaccess_method_store_8"></div>

Stores an integer as 8 bits in the file.

 **Note:** The `value` should lie in the interval `[0, 255]`. Any other value will overflow and wrap around.

To store a signed integer, use [`store_64`](class_fileaccess.md#class_fileaccess_method_store_64), or convert it manually (see [`store_16`](class_fileaccess.md#class_fileaccess_method_store_16) for an example).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_fileaccess_method_store_16"></div>

`void` **store_16** ( value: [`int`](class_int.md) )<div id="class_fileaccess_method_store_16"></div>

Stores an integer as 16 bits in the file.

 **Note:** The `value` should lie in the interval `[0, 2^16 - 1]`. Any other value will overflow and wrap around.

To store a signed integer, use [`store_64`](class_fileaccess.md#class_fileaccess_method_store_64) or store a signed integer from the interval `[-2^15, 2^15 - 1]` (i.e. keeping one bit for the signedness) and compute its sign manually when reading. For example:



```gdscript

    const MAX_15B = 1 << 15
    const MAX_16B = 1 << 16
    
    func unsigned16_to_signed(unsigned):
        return (unsigned + MAX_15B) % MAX_16B - MAX_15B
    
    func _ready():
        var f = FileAccess.open("user://file.dat", FileAccess.WRITE_READ)
        f.store_16(-42) # This wraps around and stores 65494 (2^16 - 42).
        f.store_16(121) # In bounds, will store 121.
        f.seek(0) # Go back to start to read the stored value.
        var read1 = f.get_16() # 65494
        var read2 = f.get_16() # 121
        var converted1 = unsigned16_to_signed(read1) # -42
        var converted2 = unsigned16_to_signed(read2) # 121
```

```csharp

    public override void _Ready()
    {
        using var f = FileAccess.Open("user://file.dat", FileAccess.ModeFlags.WriteRead);
        f.Store16(unchecked((ushort)-42)); // This wraps around and stores 65494 (2^16 - 42).
        f.Store16(121); // In bounds, will store 121.
        f.Seek(0); // Go back to start to read the stored value.
        ushort read1 = f.Get16(); // 65494
        ushort read2 = f.Get16(); // 121
        short converted1 = (short)read1; // -42
        short converted2 = (short)read2; // 121
    }
```







<!-- rst-class:: classref-item-separator -->

---

<div id="_class_fileaccess_method_store_32"></div>

`void` **store_32** ( value: [`int`](class_int.md) )<div id="class_fileaccess_method_store_32"></div>

Stores an integer as 32 bits in the file.

 **Note:** The `value` should lie in the interval `[0, 2^32 - 1]`. Any other value will overflow and wrap around.

To store a signed integer, use [`store_64`](class_fileaccess.md#class_fileaccess_method_store_64), or convert it manually (see [`store_16`](class_fileaccess.md#class_fileaccess_method_store_16) for an example).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_fileaccess_method_store_64"></div>

`void` **store_64** ( value: [`int`](class_int.md) )<div id="class_fileaccess_method_store_64"></div>

Stores an integer as 64 bits in the file.

 **Note:** The `value` must lie in the interval `[-2^63, 2^63 - 1]` (i.e. be a valid [`int`](class_int.md) value).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_fileaccess_method_store_buffer"></div>

`void` **store_buffer** ( buffer: [`PackedByteArray`](class_packedbytearray.md) )<div id="class_fileaccess_method_store_buffer"></div>

Stores the given array of bytes in the file.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_fileaccess_method_store_csv_line"></div>

`void` **store_csv_line** ( values: [`PackedStringArray`](class_packedstringarray.md), delim: [`String`](class_string.md) = "," )<div id="class_fileaccess_method_store_csv_line"></div>

Store the given [`PackedStringArray`](class_packedstringarray.md) in the file as a line formatted in the CSV (Comma-Separated Values) format. You can pass a different delimiter `delim` to use other than the default `","` (comma). This delimiter must be one-character long.

Text will be encoded as UTF-8.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_fileaccess_method_store_double"></div>

`void` **store_double** ( value: [`float`](class_float.md) )<div id="class_fileaccess_method_store_double"></div>

Stores a floating-point number as 64 bits in the file.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_fileaccess_method_store_float"></div>

`void` **store_float** ( value: [`float`](class_float.md) )<div id="class_fileaccess_method_store_float"></div>

Stores a floating-point number as 32 bits in the file.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_fileaccess_method_store_line"></div>

`void` **store_line** ( line: [`String`](class_string.md) )<div id="class_fileaccess_method_store_line"></div>

Stores `line` in the file followed by a newline character (`\n`), encoding the text as UTF-8.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_fileaccess_method_store_pascal_string"></div>

`void` **store_pascal_string** ( string: [`String`](class_string.md) )<div id="class_fileaccess_method_store_pascal_string"></div>

Stores the given [`String`](class_string.md) as a line in the file in Pascal format (i.e. also store the length of the string).

Text will be encoded as UTF-8.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_fileaccess_method_store_real"></div>

`void` **store_real** ( value: [`float`](class_float.md) )<div id="class_fileaccess_method_store_real"></div>

Stores a floating-point number in the file.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_fileaccess_method_store_string"></div>

`void` **store_string** ( string: [`String`](class_string.md) )<div id="class_fileaccess_method_store_string"></div>

Stores `string` in the file without a newline character (`\n`), encoding the text as UTF-8.

 **Note:** This method is intended to be used to write text files. The string is stored as a UTF-8 encoded buffer without string length or terminating zero, which means that it can't be loaded back easily. If you want to store a retrievable string in a binary file, consider using [`store_pascal_string`](class_fileaccess.md#class_fileaccess_method_store_pascal_string) instead. For retrieving strings from a text file, you can use `get_buffer(length).get_string_from_utf8()` (if you know the length) or [`get_as_text`](class_fileaccess.md#class_fileaccess_method_get_as_text).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_fileaccess_method_store_var"></div>

`void` **store_var** ( value: [`Variant`](class_variant.md), full_objects: [`bool`](class_bool.md) = false )<div id="class_fileaccess_method_store_var"></div>

Stores any Variant value in the file. If `full_objects` is `true`, encoding objects is allowed (and can potentially include code).

Internally, this uses the same encoding mechanism as the [`@GlobalScope.var_to_bytes`](class_@globalscope.md#class_@globalscope_method_var_to_bytes) method.

 **Note:** Not all properties are included. Only properties that are configured with the [`@GlobalScope.PROPERTY_USAGE_STORAGE`](class_@globalscope.md#class_@globalscope_constant_property_usage_storage) flag set will be serialized. You can add a new usage flag to a property by overriding the [`Object._get_property_list`](class_object.md#class_object_private_method__get_property_list) method in your class. You can also check how property usage is configured by calling [`Object._get_property_list`](class_object.md#class_object_private_method__get_property_list). See [PropertyUsageFlags](#enum_@globalscope_propertyusageflags) for the possible usage flags.

[^virtual]: 本方法通常需要用户覆盖才能生效。
[^const]: 本方法无副作用，不会修改该实例的任何成员变量。
[^vararg]: 本方法除了能接受在此处描述的参数外，还能够继续接受任意数量的参数。
[^constructor]: 本方法用于构造某个类型。
[^static]: 调用本方法无需实例，可直接使用类名进行调用。
[^operator]: 本方法描述的是使用本类型作为左操作数的有效运算符。
[^bitfield]: 这个值是由下列位标志构成位掩码的整数。
[^void]: 无返回值。
