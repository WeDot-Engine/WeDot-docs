<!-- ⚠ 请勿编辑本文件 ⚠ -->
<!-- 本文档使用脚本从 WeDot 引擎源码仓库生成。 -->
<!-- 生成脚本：https://github.com/WeDot-Engine/WeDot/tree/4.3/doc/tools/make_md.py； -->
<!-- 原文件：https://github.com/WeDot-Engine/WeDot/tree/4.3/modules/zip/doc_classes/ZIPReader.xml。 -->

<div id="_class_zipreader"></div>

# ZIPReader

**继承：** [`RefCounted`](class_refcounted.md) **<** [`Object`](class_object.md)

Allows reading the content of a zip file.

## 描述

This class implements a reader that can extract the content of individual files inside a zip archive.

```

    func read_zip_file():
        var reader := ZIPReader.new()
        var err := reader.open("user://archive.zip")
        if err != OK:
            return PackedByteArray()
        var res := reader.read_file("hello.txt")
        reader.close()
        return res
```



## 方法

|||
|:-:|:--|
| [Error](#enum_@globalscope_error)                 | [`close`](class_zipreadermd#class_zipreader_method_close) ( )                                                                                               |
| [`bool`](class_bool.md)                           | [`file_exists`](class_zipreadermd#class_zipreader_method_file_exists) ( path: [`String`](class_string.md), case_sensitive: [`bool`](class_bool.md) = true ) |
| [`PackedStringArray`](class_packedstringarray.md) | [`get_files`](class_zipreadermd#class_zipreader_method_get_files) ( )                                                                                       |
| [Error](#enum_@globalscope_error)                 | [`open`](class_zipreadermd#class_zipreader_method_open) ( path: [`String`](class_string.md) )                                                               |
| [`PackedByteArray`](class_packedbytearray.md)     | [`read_file`](class_zipreadermd#class_zipreader_method_read_file) ( path: [`String`](class_string.md), case_sensitive: [`bool`](class_bool.md) = true )     |

<!-- rst-class:: classref-section-separator -->

---

## 方法说明

<div id="_class_zipreader_method_close"></div>

[Error](#enum_@globalscope_error) **close** ( )<div id="class_zipreader_method_close"></div>

Closes the underlying resources used by this instance.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_zipreader_method_file_exists"></div>

[`bool`](class_bool.md) **file_exists** ( path: [`String`](class_string.md), case_sensitive: [`bool`](class_bool.md) = true )<div id="class_zipreader_method_file_exists"></div>

Returns `true` if the file exists in the loaded zip archive.

Must be called after [`open`](#class_zipreader_method_open).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_zipreader_method_get_files"></div>

[`PackedStringArray`](class_packedstringarray.md) **get_files** ( )<div id="class_zipreader_method_get_files"></div>

Returns the list of names of all files in the loaded archive.

Must be called after [`open`](#class_zipreader_method_open).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_zipreader_method_open"></div>

[Error](#enum_@globalscope_error) **open** ( path: [`String`](class_string.md) )<div id="class_zipreader_method_open"></div>

Opens the zip archive at the given `path` and reads its file index.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_zipreader_method_read_file"></div>

[`PackedByteArray`](class_packedbytearray.md) **read_file** ( path: [`String`](class_string.md), case_sensitive: [`bool`](class_bool.md) = true )<div id="class_zipreader_method_read_file"></div>

Loads the whole content of a file in the loaded zip archive into memory and returns it.

Must be called after [`open`](#class_zipreader_method_open).

[^virtual]: 本方法通常需要用户覆盖才能生效。
[^const]: 本方法无副作用，不会修改该实例的任何成员变量。
[^vararg]: 本方法除了能接受在此处描述的参数外，还能够继续接受任意数量的参数。
[^constructor]: 本方法用于构造某个类型。
[^static]: 调用本方法无需实例，可直接使用类名进行调用。
[^operator]: 本方法描述的是使用本类型作为左操作数的有效运算符。
[^bitfield]: 这个值是由下列位标志构成位掩码的整数。
[^void]: 无返回值。
