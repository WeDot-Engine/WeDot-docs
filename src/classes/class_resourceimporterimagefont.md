<!-- ⚠ 请勿编辑本文件 ⚠ -->
<!-- 本文档使用脚本从 WeDot 引擎源码仓库生成。 -->
<!-- 生成脚本：https://github.com/WeDot-Engine/WeDot/tree/master/doc/tools/make_md.py； -->
<!-- 原文件：https://github.com/WeDot-Engine/WeDot/tree/master/doc/classes/ResourceImporterImageFont.xml。 -->

<div id="_class_resourceimporterimagefont"></div>

# ResourceImporterImageFont

**继承：** [`ResourceImporter`](class_resourceimporter.md) **<** [`RefCounted`](class_refcounted.md) **<** [`Object`](class_object.md)

Imports a bitmap font where all glyphs have the same width and height.

## 描述

This image-based workflow can be easier to use than [`ResourceImporterBMFont`](class_resourceimporterbmfont.md), but it requires all glyphs to have the same width and height, glyph advances and drawing offsets can be customized. This makes **ResourceImporterImageFont** most suited to fixed-width fonts.

See also [`ResourceImporterDynamicFont`](class_resourceimporterdynamicfont.md).

## 属性

|||
|:-:|:--|
| [`int`](class_int.md)                             | [`ascent`](class_resourceimporterimagefont.md#class_resourceimporterimagefont_property_ascent)                     | ``0``                   |
| [`Rect2i`](class_rect2i.md)                       | [`character_margin`](class_resourceimporterimagefont.md#class_resourceimporterimagefont_property_character_margin) | ``Rect2i(0, 0, 0, 0)``  |
| [`PackedStringArray`](class_packedstringarray.md) | [`character_ranges`](class_resourceimporterimagefont.md#class_resourceimporterimagefont_property_character_ranges) | ``PackedStringArray()`` |
| [`int`](class_int.md)                             | [`columns`](class_resourceimporterimagefont.md#class_resourceimporterimagefont_property_columns)                   | ``1``                   |
| [`bool`](class_bool.md)                           | [`compress`](class_resourceimporterimagefont.md#class_resourceimporterimagefont_property_compress)                 | ``true``                |
| [`int`](class_int.md)                             | [`descent`](class_resourceimporterimagefont.md#class_resourceimporterimagefont_property_descent)                   | ``0``                   |
| [`Array`](class_array.md)                         | [`fallbacks`](class_resourceimporterimagefont.md#class_resourceimporterimagefont_property_fallbacks)               | ``[]``                  |
| [`Rect2i`](class_rect2i.md)                       | [`image_margin`](class_resourceimporterimagefont.md#class_resourceimporterimagefont_property_image_margin)         | ``Rect2i(0, 0, 0, 0)``  |
| [`PackedStringArray`](class_packedstringarray.md) | [`kerning_pairs`](class_resourceimporterimagefont.md#class_resourceimporterimagefont_property_kerning_pairs)       | ``PackedStringArray()`` |
| [`int`](class_int.md)                             | [`rows`](class_resourceimporterimagefont.md#class_resourceimporterimagefont_property_rows)                         | ``1``                   |
| [`int`](class_int.md)                             | [`scaling_mode`](class_resourceimporterimagefont.md#class_resourceimporterimagefont_property_scaling_mode)         | ``2``                   |

<!-- rst-class:: classref-section-separator -->

---

## 属性说明

<div id="_class_resourceimporterimagefont_property_ascent"></div>

[`int`](class_int.md) **ascent** = ``0`` <div id="class_resourceimporterimagefont_property_ascent"></div>

Font ascent (number of pixels above the baseline). If set to `0`, half of the character height is used.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_resourceimporterimagefont_property_character_margin"></div>

[`Rect2i`](class_rect2i.md) **character_margin** = ``Rect2i(0, 0, 0, 0)`` <div id="class_resourceimporterimagefont_property_character_margin"></div>

Margin applied around every imported glyph. If your font image contains guides (in the form of lines between glyphs) or if spacing between characters appears incorrect, try adjusting [`character_margin`](class_resourceimporterimagefont.md#class_resourceimporterimagefont_property_character_margin).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_resourceimporterimagefont_property_character_ranges"></div>

[`PackedStringArray`](class_packedstringarray.md) **character_ranges** = ``PackedStringArray()`` <div id="class_resourceimporterimagefont_property_character_ranges"></div>

The character ranges to import from the font image. This is an array that maps each position on the image (in tile coordinates, not pixels). The font atlas is traversed from left to right and top to bottom. Characters can be specified with decimal numbers (127), hexadecimal numbers (`0x007f`, or `U+007f`) or between single quotes (`'~'`). Ranges can be specified with a hyphen between characters.

For example, `0-127` represents the full ASCII range. It can also be written as `0x0000-0x007f` (or `U+0000-U+007f`). As another example, `' '-'~'` is equivalent to `32-127` and represents the range of printable (visible) ASCII characters.

For any range, the character advance and offset can be customized by appending three space-separated integer values (additional advance, x offset, y offset) to the end. For example `'a'-'b' 4 5 2` sets the advance to `char_width + 4` and offset to `Vector2(5, 2)` for both `a` and `b` characters.

Make sure [`character_ranges`](class_resourceimporterimagefont.md#class_resourceimporterimagefont_property_character_ranges) doesn't exceed the number of [`columns`](class_resourceimporterimagefont.md#class_resourceimporterimagefont_property_columns) * [`rows`](class_resourceimporterimagefont.md#class_resourceimporterimagefont_property_rows) defined. Otherwise, the font will fail to import.

**Note:** The returned array is *copied* and any changes to it will not update the original property value. See [`PackedStringArray`](class_packedstringarray.md) for more details.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_resourceimporterimagefont_property_columns"></div>

[`int`](class_int.md) **columns** = ``1`` <div id="class_resourceimporterimagefont_property_columns"></div>

Number of columns in the font image. See also [`rows`](class_resourceimporterimagefont.md#class_resourceimporterimagefont_property_rows).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_resourceimporterimagefont_property_compress"></div>

[`bool`](class_bool.md) **compress** = ``true`` <div id="class_resourceimporterimagefont_property_compress"></div>

If `true`, uses lossless compression for the resulting font.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_resourceimporterimagefont_property_descent"></div>

[`int`](class_int.md) **descent** = ``0`` <div id="class_resourceimporterimagefont_property_descent"></div>

Font descent (number of pixels below the baseline). If set to `0`, half of the character height is used.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_resourceimporterimagefont_property_fallbacks"></div>

[`Array`](class_array.md) **fallbacks** = ``[]`` <div id="class_resourceimporterimagefont_property_fallbacks"></div>

List of font fallbacks to use if a glyph isn't found in this bitmap font. Fonts at the beginning of the array are attempted first.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_resourceimporterimagefont_property_image_margin"></div>

[`Rect2i`](class_rect2i.md) **image_margin** = ``Rect2i(0, 0, 0, 0)`` <div id="class_resourceimporterimagefont_property_image_margin"></div>

Margin to cut on the sides of the entire image. This can be used to cut parts of the image that contain attribution information or similar.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_resourceimporterimagefont_property_kerning_pairs"></div>

[`PackedStringArray`](class_packedstringarray.md) **kerning_pairs** = ``PackedStringArray()`` <div id="class_resourceimporterimagefont_property_kerning_pairs"></div>

Kerning pairs for the font. Kerning pair adjust the spacing between two characters.

Each string consist of three space separated values: "from" string, "to" string and integer offset. Each combination form the two string for a kerning pair, e.g, `ab cd -3` will create kerning pairs `ac`, `ad`, `bc`, and `bd` with offset `-3`. `\uXXXX` escape sequences can be used to add Unicode characters.

**Note:** The returned array is *copied* and any changes to it will not update the original property value. See [`PackedStringArray`](class_packedstringarray.md) for more details.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_resourceimporterimagefont_property_rows"></div>

[`int`](class_int.md) **rows** = ``1`` <div id="class_resourceimporterimagefont_property_rows"></div>

Number of rows in the font image. See also [`columns`](class_resourceimporterimagefont.md#class_resourceimporterimagefont_property_columns).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_resourceimporterimagefont_property_scaling_mode"></div>

[`int`](class_int.md) **scaling_mode** = ``2`` <div id="class_resourceimporterimagefont_property_scaling_mode"></div>

Font scaling mode.

[^virtual]: 本方法通常需要用户覆盖才能生效。
[^const]: 本方法无副作用，不会修改该实例的任何成员变量。
[^vararg]: 本方法除了能接受在此处描述的参数外，还能够继续接受任意数量的参数。
[^constructor]: 本方法用于构造某个类型。
[^static]: 调用本方法无需实例，可直接使用类名进行调用。
[^operator]: 本方法描述的是使用本类型作为左操作数的有效运算符。
[^bitfield]: 这个值是由下列位标志构成位掩码的整数。
[^void]: 无返回值。
