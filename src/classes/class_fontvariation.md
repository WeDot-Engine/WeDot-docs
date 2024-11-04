<!-- ⚠ 请勿编辑本文件 ⚠ -->
<!-- 本文档使用脚本从 WeDot 引擎源码仓库生成。 -->
<!-- 生成脚本：https://github.com/WeDot-Engine/WeDot/tree/4.3/doc/tools/make_md.py； -->
<!-- 原文件：https://github.com/WeDot-Engine/WeDot/tree/4.3/doc/classes/FontVariation.xml。 -->

<div id="_class_fontvariation"></div>

# FontVariation

**继承：** [`Font`](class_font.md) **<** [`Resource`](class_resource.md) **<** [`RefCounted`](class_refcounted.md) **<** [`Object`](class_object.md)

A variation of a font with additional settings.

## 描述

Provides OpenType variations, simulated bold / slant, and additional font settings like OpenType features and extra spacing.

To use simulated bold font variant:



```gdscript

    var fv = FontVariation.new()
    fv.base_font = load("res://BarlowCondensed-Regular.ttf")
    fv.variation_embolden = 1.2
    $Label.add_theme_font_override("font", fv)
    $Label.add_theme_font_size_override("font_size", 64)
```

```csharp

    var fv = new FontVariation();
    fv.SetBaseFont(ResourceLoader.Load<FontFile>("res://BarlowCondensed-Regular.ttf"));
    fv.SetVariationEmbolden(1.2);
    GetNode("Label").AddThemeFontOverride("font", fv);
    GetNode("Label").AddThemeFontSizeOverride("font_size", 64);
```



To set the coordinate of multiple variation axes:

```

    var fv = FontVariation.new();
    var ts = TextServerManager.get_primary_interface()
    fv.base_font = load("res://BarlowCondensed-Regular.ttf")
    fv.variation_opentype = { ts.name_to_tag("wght"): 900, ts.name_to_tag("custom_hght"): 900 }
```







## 属性

| [`Font`](class_font.md)               | [`base_font`](#class_fontvariation_property_base_font)                       |                                   |
| [`float`](class_float.md)             | [`baseline_offset`](#class_fontvariation_property_baseline_offset)           | ``0.0``                           |
| [`Dictionary`](class_dictionary.md)   | [`opentype_features`](#class_fontvariation_property_opentype_features)       | ``{}``                            |
| [`int`](class_int.md)                 | [`spacing_bottom`](#class_fontvariation_property_spacing_bottom)             | ``0``                             |
| [`int`](class_int.md)                 | [`spacing_glyph`](#class_fontvariation_property_spacing_glyph)               | ``0``                             |
| [`int`](class_int.md)                 | [`spacing_space`](#class_fontvariation_property_spacing_space)               | ``0``                             |
| [`int`](class_int.md)                 | [`spacing_top`](#class_fontvariation_property_spacing_top)                   | ``0``                             |
| [`float`](class_float.md)             | [`variation_embolden`](#class_fontvariation_property_variation_embolden)     | ``0.0``                           |
| [`int`](class_int.md)                 | [`variation_face_index`](#class_fontvariation_property_variation_face_index) | ``0``                             |
| [`Dictionary`](class_dictionary.md)   | [`variation_opentype`](#class_fontvariation_property_variation_opentype)     | ``{}``                            |
| [`Transform2D`](class_transform2d.md) | [`variation_transform`](#class_fontvariation_property_variation_transform)   | ``Transform2D(1, 0, 0, 1, 0, 0)`` |

## 方法

| `void` | [`set_spacing`](#class_fontvariation_method_set_spacing) ( spacing: [SpacingType](#enum_textserver_spacingtype), value: [`int`](class_int.md) ) |

<!-- rst-class:: classref-section-separator -->

---

## 属性说明

<div id="_class_fontvariation_property_base_font"></div>

[`Font`](class_font.md) **base_font** <div id="class_fontvariation_property_base_font"></div>

- `void` **set_base_font** ( value: [`Font`](class_font.md) )
- [`Font`](class_font.md) **get_base_font** ( )

Base font used to create a variation. If not set, default [`Theme`](class_theme.md) font is used.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_fontvariation_property_baseline_offset"></div>

[`float`](class_float.md) **baseline_offset** = ``0.0`` <div id="class_fontvariation_property_baseline_offset"></div>

- `void` **set_baseline_offset** ( value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_baseline_offset** ( )

Extra baseline offset (as a fraction of font height).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_fontvariation_property_opentype_features"></div>

[`Dictionary`](class_dictionary.md) **opentype_features** = ``{}`` <div id="class_fontvariation_property_opentype_features"></div>

- `void` **set_opentype_features** ( value: [`Dictionary`](class_dictionary.md) )
- [`Dictionary`](class_dictionary.md) **get_opentype_features** ( )

A set of OpenType feature tags. More info: [*OpenType feature tags*](https://docs.microsoft.com/en-us/typography/opentype/spec/featuretags).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_fontvariation_property_spacing_bottom"></div>

[`int`](class_int.md) **spacing_bottom** = ``0`` <div id="class_fontvariation_property_spacing_bottom"></div>

- `void` **set_spacing** ( spacing: [SpacingType](#enum_textserver_spacingtype), value: [`int`](class_int.md) )
- [`int`](class_int.md) **get_spacing** ( )

Extra spacing at the bottom of the line in pixels.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_fontvariation_property_spacing_glyph"></div>

[`int`](class_int.md) **spacing_glyph** = ``0`` <div id="class_fontvariation_property_spacing_glyph"></div>

- `void` **set_spacing** ( spacing: [SpacingType](#enum_textserver_spacingtype), value: [`int`](class_int.md) )
- [`int`](class_int.md) **get_spacing** ( )

Extra spacing between graphical glyphs.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_fontvariation_property_spacing_space"></div>

[`int`](class_int.md) **spacing_space** = ``0`` <div id="class_fontvariation_property_spacing_space"></div>

- `void` **set_spacing** ( spacing: [SpacingType](#enum_textserver_spacingtype), value: [`int`](class_int.md) )
- [`int`](class_int.md) **get_spacing** ( )

Extra width of the space glyphs.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_fontvariation_property_spacing_top"></div>

[`int`](class_int.md) **spacing_top** = ``0`` <div id="class_fontvariation_property_spacing_top"></div>

- `void` **set_spacing** ( spacing: [SpacingType](#enum_textserver_spacingtype), value: [`int`](class_int.md) )
- [`int`](class_int.md) **get_spacing** ( )

Extra spacing at the top of the line in pixels.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_fontvariation_property_variation_embolden"></div>

[`float`](class_float.md) **variation_embolden** = ``0.0`` <div id="class_fontvariation_property_variation_embolden"></div>

- `void` **set_variation_embolden** ( value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_variation_embolden** ( )

If is not equal to zero, emboldens the font outlines. Negative values reduce the outline thickness.

 **Note:** Emboldened fonts might have self-intersecting outlines, which will prevent MSDF fonts and [`TextMesh`](class_textmesh.md) from working correctly.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_fontvariation_property_variation_face_index"></div>

[`int`](class_int.md) **variation_face_index** = ``0`` <div id="class_fontvariation_property_variation_face_index"></div>

- `void` **set_variation_face_index** ( value: [`int`](class_int.md) )
- [`int`](class_int.md) **get_variation_face_index** ( )

Active face index in the TrueType / OpenType collection file.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_fontvariation_property_variation_opentype"></div>

[`Dictionary`](class_dictionary.md) **variation_opentype** = ``{}`` <div id="class_fontvariation_property_variation_opentype"></div>

- `void` **set_variation_opentype** ( value: [`Dictionary`](class_dictionary.md) )
- [`Dictionary`](class_dictionary.md) **get_variation_opentype** ( )

Font OpenType variation coordinates. More info: [*OpenType variation tags*](https://docs.microsoft.com/en-us/typography/opentype/spec/dvaraxisreg).

 **Note:** This [`Dictionary`](class_dictionary.md) uses OpenType tags as keys. Variation axes can be identified both by tags ([`int`](class_int.md), e.g. `0x77678674`) and names ([`String`](class_string.md), e.g. `wght`). Some axes might be accessible by multiple names. For example, `wght` refers to the same axis as `weight`. Tags on the other hand are unique. To convert between names and tags, use [`TextServer.name_to_tag`](#class_textserver_method_name_to_tag) and [`TextServer.tag_to_name`](#class_textserver_method_tag_to_name).

 **Note:** To get available variation axes of a font, use [`Font.get_supported_variation_list`](#class_font_method_get_supported_variation_list).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_fontvariation_property_variation_transform"></div>

[`Transform2D`](class_transform2d.md) **variation_transform** = ``Transform2D(1, 0, 0, 1, 0, 0)`` <div id="class_fontvariation_property_variation_transform"></div>

- `void` **set_variation_transform** ( value: [`Transform2D`](class_transform2d.md) )
- [`Transform2D`](class_transform2d.md) **get_variation_transform** ( )

2D transform, applied to the font outlines, can be used for slanting, flipping and rotating glyphs.

For example, to simulate italic typeface by slanting, apply the following transform `Transform2D(1.0, slant, 0.0, 1.0, 0.0, 0.0)`.

<!-- rst-class:: classref-section-separator -->

---

## 方法说明

<div id="_class_fontvariation_method_set_spacing"></div>

`void` **set_spacing** ( spacing: [SpacingType](#enum_textserver_spacingtype), value: [`int`](class_int.md) )<div id="class_fontvariation_method_set_spacing"></div>

Sets the spacing for `spacing` (see [SpacingType](#enum_textserver_spacingtype)) to `value` in pixels (not relative to the font size).

[^virtual]: 本方法通常需要用户覆盖才能生效。
[^const]: 本方法无副作用，不会修改该实例的任何成员变量。
[^vararg]: 本方法除了能接受在此处描述的参数外，还能够继续接受任意数量的参数。
[^constructor]: 本方法用于构造某个类型。
[^static]: 调用本方法无需实例，可直接使用类名进行调用。
[^operator]: 本方法描述的是使用本类型作为左操作数的有效运算符。
[^bitfield]: 这个值是由下列位标志构成位掩码的整数。
[^void]: 无返回值。
