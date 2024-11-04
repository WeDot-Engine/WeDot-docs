<!-- ⚠ 请勿编辑本文件 ⚠ -->
<!-- 本文档使用脚本从 WeDot 引擎源码仓库生成。 -->
<!-- 生成脚本：https://github.com/WeDot-Engine/WeDot/tree/4.3/doc/tools/make_md.py； -->
<!-- 原文件：https://github.com/WeDot-Engine/WeDot/tree/4.3/modules/zip/doc_classes/ZIPPacker.xml。 -->

<div id="_class_zippacker"></div>

# ZIPPacker

**继承：** [`RefCounted`](class_refcounted.md) **<** [`Object`](class_object.md)

Allows the creation of zip files.

## 描述

This class implements a writer that allows storing the multiple blobs in a zip archive.

```

    func write_zip_file():
        var writer := ZIPPacker.new()
        var err := writer.open("user://archive.zip")
        if err != OK:
            return err
        writer.start_file("hello.txt")
        writer.write_file("Hello World".to_utf8_buffer())
        writer.close_file()
    
        writer.close()
        return OK
```



## 方法

| [Error](#enum_@globalscope_error) | [`close`](#class_zippacker_method_close) ( )                                                                                     |
| [Error](#enum_@globalscope_error) | [`close_file`](#class_zippacker_method_close_file) ( )                                                                           |
| [Error](#enum_@globalscope_error) | [`open`](#class_zippacker_method_open) ( path: [`String`](class_string.md), append: [ZipAppend](#enum_zippacker_zipappend) = 0 ) |
| [Error](#enum_@globalscope_error) | [`start_file`](#class_zippacker_method_start_file) ( path: [`String`](class_string.md) )                                         |
| [Error](#enum_@globalscope_error) | [`write_file`](#class_zippacker_method_write_file) ( data: [`PackedByteArray`](class_packedbytearray.md) )                       |

<!-- rst-class:: classref-section-separator -->

---

## 枚举

<div id="_class_enum_zippacker_zipappend"></div>

enum **ZipAppend**: <div id="enum_zippacker_zipappend"></div>

<div id="_class_zippacker_constant_append_create"></div>

[ZipAppend](#enum_zippacker_zipappend) **APPEND_CREATE** = ``0``

Create a new zip archive at the given path.

<div id="_class_zippacker_constant_append_createafter"></div>

[ZipAppend](#enum_zippacker_zipappend) **APPEND_CREATEAFTER** = ``1``

Append a new zip archive to the end of the already existing file at the given path.

<div id="_class_zippacker_constant_append_addinzip"></div>

[ZipAppend](#enum_zippacker_zipappend) **APPEND_ADDINZIP** = ``2``

Add new files to the existing zip archive at the given path.

<!-- rst-class:: classref-section-separator -->

---

## 方法说明

<div id="_class_zippacker_method_close"></div>

[Error](#enum_@globalscope_error) **close** ( )<div id="class_zippacker_method_close"></div>

Closes the underlying resources used by this instance.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_zippacker_method_close_file"></div>

[Error](#enum_@globalscope_error) **close_file** ( )<div id="class_zippacker_method_close_file"></div>

Stops writing to a file within the archive.

It will fail if there is no open file.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_zippacker_method_open"></div>

[Error](#enum_@globalscope_error) **open** ( path: [`String`](class_string.md), append: [ZipAppend](#enum_zippacker_zipappend) = 0 )<div id="class_zippacker_method_open"></div>

Opens a zip file for writing at the given path using the specified write mode.

This must be called before everything else.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_zippacker_method_start_file"></div>

[Error](#enum_@globalscope_error) **start_file** ( path: [`String`](class_string.md) )<div id="class_zippacker_method_start_file"></div>

Starts writing to a file within the archive. Only one file can be written at the same time.

Must be called after [`open`](#class_zippacker_method_open).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_zippacker_method_write_file"></div>

[Error](#enum_@globalscope_error) **write_file** ( data: [`PackedByteArray`](class_packedbytearray.md) )<div id="class_zippacker_method_write_file"></div>

Write the given `data` to the file.

Needs to be called after [`start_file`](#class_zippacker_method_start_file).

[^virtual]: 本方法通常需要用户覆盖才能生效。
[^const]: 本方法无副作用，不会修改该实例的任何成员变量。
[^vararg]: 本方法除了能接受在此处描述的参数外，还能够继续接受任意数量的参数。
[^constructor]: 本方法用于构造某个类型。
[^static]: 调用本方法无需实例，可直接使用类名进行调用。
[^operator]: 本方法描述的是使用本类型作为左操作数的有效运算符。
[^bitfield]: 这个值是由下列位标志构成位掩码的整数。
[^void]: 无返回值。
