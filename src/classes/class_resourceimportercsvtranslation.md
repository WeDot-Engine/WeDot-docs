<!-- ⚠ 请勿编辑本文件 ⚠ -->
<!-- 本文档使用脚本从 WeDot 引擎源码仓库生成。 -->
<!-- 生成脚本：https://github.com/WeDot-Engine/WeDot/tree/4.3/doc/tools/make_md.py； -->
<!-- 原文件：https://github.com/WeDot-Engine/WeDot/tree/4.3/doc/classes/ResourceImporterCSVTranslation.xml。 -->

<div id="_class_resourceimportercsvtranslation"></div>

# ResourceImporterCSVTranslation

**继承：** [`ResourceImporter`](class_resourceimporter.md) **<** [`RefCounted`](class_refcounted.md) **<** [`Object`](class_object.md)

Imports comma-separated values

## 描述

Comma-separated values are a plain text table storage format. The format's simplicity makes it easy to edit in any text editor or spreadsheet software. This makes it a common choice for game localization.

 **Example CSV file:** 

```text

    keys,en,es,ja
    GREET,"Hello, friend!","Hola, amigo!",こんにちは
    ASK,How are you?,Cómo está?,元気ですか
    BYE,Goodbye,Adiós,さようなら
    QUOTE,"""Hello"" said the man.","""Hola"" dijo el hombre.",「こんにちは」男は言いました
```



## 属性

| [`bool`](class_bool.md) | [`compress`](#class_resourceimportercsvtranslation_property_compress)   | ``true`` |
| [`int`](class_int.md)   | [`delimiter`](#class_resourceimportercsvtranslation_property_delimiter) | ``0``    |

<!-- rst-class:: classref-section-separator -->

---

## 属性说明

<div id="_class_resourceimportercsvtranslation_property_compress"></div>

[`bool`](class_bool.md) **compress** = ``true`` <div id="class_resourceimportercsvtranslation_property_compress"></div>

If `true`, creates an [`OptimizedTranslation`](class_optimizedtranslation.md) instead of a [`Translation`](class_translation.md). This makes the resulting file smaller at the cost of a small CPU overhead.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_resourceimportercsvtranslation_property_delimiter"></div>

[`int`](class_int.md) **delimiter** = ``0`` <div id="class_resourceimportercsvtranslation_property_delimiter"></div>

The delimiter to use in the CSV file. The default value matches the common CSV convention. Tab-separated values are sometimes called TSV files.

[^virtual]: 本方法通常需要用户覆盖才能生效。
[^const]: 本方法无副作用，不会修改该实例的任何成员变量。
[^vararg]: 本方法除了能接受在此处描述的参数外，还能够继续接受任意数量的参数。
[^constructor]: 本方法用于构造某个类型。
[^static]: 调用本方法无需实例，可直接使用类名进行调用。
[^operator]: 本方法描述的是使用本类型作为左操作数的有效运算符。
[^bitfield]: 这个值是由下列位标志构成位掩码的整数。
[^void]: 无返回值。
