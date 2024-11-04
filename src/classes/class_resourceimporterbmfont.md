<!-- ⚠ 请勿编辑本文件 ⚠ -->
<!-- 本文档使用脚本从 WeDot 引擎源码仓库生成。 -->
<!-- 生成脚本：https://github.com/WeDot-Engine/WeDot/tree/4.3/doc/tools/make_md.py； -->
<!-- 原文件：https://github.com/WeDot-Engine/WeDot/tree/4.3/doc/classes/ResourceImporterBMFont.xml。 -->

<div id="_class_resourceimporterbmfont"></div>

# ResourceImporterBMFont

**继承：** [`ResourceImporter`](class_resourceimporter.md) **<** [`RefCounted`](class_refcounted.md) **<** [`Object`](class_object.md)

Imports a bitmap font in the BMFont (`.fnt`) format.

## 描述

The BMFont format is a format created by the [*BMFont*](https://www.angelcode.com/products/bmfont/) program. Many BMFont-compatible programs also exist, like [*BMGlyph*](https://www.bmglyph.com/).

Compared to [`ResourceImporterImageFont`](class_resourceimporterimagefont.md), **ResourceImporterBMFont** supports bitmap fonts with varying glyph widths/heights.

See also [`ResourceImporterDynamicFont`](class_resourceimporterdynamicfont.md).

## 属性

| [`bool`](class_bool.md)   | [`compress`](#class_resourceimporterbmfont_property_compress)         | ``true`` |
| [`Array`](class_array.md) | [`fallbacks`](#class_resourceimporterbmfont_property_fallbacks)       | ``[]``   |
| [`int`](class_int.md)     | [`scaling_mode`](#class_resourceimporterbmfont_property_scaling_mode) | ``2``    |

<!-- rst-class:: classref-section-separator -->

---

## 属性说明

<div id="_class_resourceimporterbmfont_property_compress"></div>

[`bool`](class_bool.md) **compress** = ``true`` <div id="class_resourceimporterbmfont_property_compress"></div>

If `true`, uses lossless compression for the resulting font.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_resourceimporterbmfont_property_fallbacks"></div>

[`Array`](class_array.md) **fallbacks** = ``[]`` <div id="class_resourceimporterbmfont_property_fallbacks"></div>

List of font fallbacks to use if a glyph isn't found in this bitmap font. Fonts at the beginning of the array are attempted first.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_resourceimporterbmfont_property_scaling_mode"></div>

[`int`](class_int.md) **scaling_mode** = ``2`` <div id="class_resourceimporterbmfont_property_scaling_mode"></div>

Font scaling mode.

[^virtual]: 本方法通常需要用户覆盖才能生效。
[^const]: 本方法无副作用，不会修改该实例的任何成员变量。
[^vararg]: 本方法除了能接受在此处描述的参数外，还能够继续接受任意数量的参数。
[^constructor]: 本方法用于构造某个类型。
[^static]: 调用本方法无需实例，可直接使用类名进行调用。
[^operator]: 本方法描述的是使用本类型作为左操作数的有效运算符。
[^bitfield]: 这个值是由下列位标志构成位掩码的整数。
[^void]: 无返回值。
