<!-- ⚠ 请勿编辑本文件 ⚠ -->
<!-- 本文档使用脚本从 WeDot 引擎源码仓库生成。 -->
<!-- 生成脚本：https://github.com/WeDot-Engine/WeDot/tree/master/doc/tools/make_md.py； -->
<!-- 原文件：https://github.com/WeDot-Engine/WeDot/tree/master/doc/classes/PCKPacker.xml。 -->

<div id="_class_pckpacker"></div>

# PCKPacker

**继承：** [`RefCounted`](class_refcounted.md) **<** [`Object`](class_object.md)

Creates packages that can be loaded into a running project.

## 描述

The **PCKPacker** is used to create packages that can be loaded into a running project using [`ProjectSettings.load_resource_pack`](class_projectsettings.md#class_projectsettings_method_load_resource_pack).



```gdscript

    var packer = PCKPacker.new()
    packer.pck_start("test.pck")
    packer.add_file("res://text.txt", "text.txt")
    packer.flush()
```

```csharp

    var packer = new PckPacker();
    packer.PckStart("test.pck");
    packer.AddFile("res://text.txt", "text.txt");
    packer.Flush();
```



The above **PCKPacker** creates package `test.pck`, then adds a file named `text.txt` at the root of the package.





## 方法

|||
|:-:|:--|
| [Error](#enum_@globalscope_error) | [`add_file`](class_pckpacker.md#class_pckpacker_method_add_file) ( pck_path: [`String`](class_string.md), source_path: [`String`](class_string.md), encrypt: [`bool`](class_bool.md) = false )                                                                                                                 |
| [Error](#enum_@globalscope_error) | [`flush`](class_pckpacker.md#class_pckpacker_method_flush) ( verbose: [`bool`](class_bool.md) = false )                                                                                                                                                                                                        |
| [Error](#enum_@globalscope_error) | [`pck_start`](class_pckpacker.md#class_pckpacker_method_pck_start) ( pck_path: [`String`](class_string.md), alignment: [`int`](class_int.md) = 32, key: [`String`](class_string.md) = "0000000000000000000000000000000000000000000000000000000000000000", encrypt_directory: [`bool`](class_bool.md) = false ) |

<!-- rst-class:: classref-section-separator -->

---

## 方法说明

<div id="_class_pckpacker_method_add_file"></div>

[Error](#enum_@globalscope_error) **add_file** ( pck_path: [`String`](class_string.md), source_path: [`String`](class_string.md), encrypt: [`bool`](class_bool.md) = false )<div id="class_pckpacker_method_add_file"></div>

Adds the `source_path` file to the current PCK package at the `pck_path` internal path (should start with `res://`).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_pckpacker_method_flush"></div>

[Error](#enum_@globalscope_error) **flush** ( verbose: [`bool`](class_bool.md) = false )<div id="class_pckpacker_method_flush"></div>

Writes the files specified using all [`add_file`](class_pckpacker.md#class_pckpacker_method_add_file) calls since the last flush. If `verbose` is `true`, a list of files added will be printed to the console for easier debugging.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_pckpacker_method_pck_start"></div>

[Error](#enum_@globalscope_error) **pck_start** ( pck_path: [`String`](class_string.md), alignment: [`int`](class_int.md) = 32, key: [`String`](class_string.md) = "0000000000000000000000000000000000000000000000000000000000000000", encrypt_directory: [`bool`](class_bool.md) = false )<div id="class_pckpacker_method_pck_start"></div>

Creates a new PCK file at the file path `pck_path`. The `.pck` file extension isn't added automatically, so it should be part of `pck_path` (even though it's not required).

[^virtual]: 本方法通常需要用户覆盖才能生效。
[^const]: 本方法无副作用，不会修改该实例的任何成员变量。
[^vararg]: 本方法除了能接受在此处描述的参数外，还能够继续接受任意数量的参数。
[^constructor]: 本方法用于构造某个类型。
[^static]: 调用本方法无需实例，可直接使用类名进行调用。
[^operator]: 本方法描述的是使用本类型作为左操作数的有效运算符。
[^bitfield]: 这个值是由下列位标志构成位掩码的整数。
[^void]: 无返回值。
