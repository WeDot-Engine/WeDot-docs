<!-- ⚠ 请勿编辑本文件 ⚠ -->
<!-- 本文档使用脚本从 WeDot 引擎源码仓库生成。 -->
<!-- 生成脚本：https://github.com/WeDot-Engine/WeDot/tree/master/doc/tools/make_md.py； -->
<!-- 原文件：https://github.com/WeDot-Engine/WeDot/tree/master/doc/classes/ResourceImporterDynamicFont.xml。 -->

<div id="_class_resourceimporterdynamicfont"></div>

# ResourceImporterDynamicFont

**继承：** [`ResourceImporter`](class_resourceimporter.md) **<** [`RefCounted`](class_refcounted.md) **<** [`Object`](class_object.md)

Imports a TTF, TTC, OTF, OTC, WOFF or WOFF2 font file for font rendering that adapts to any size.

## 描述

Unlike bitmap fonts, dynamic fonts can be resized to any size and still look crisp. Dynamic fonts also optionally support MSDF font rendering, which allows for run-time scale changes with no re-rasterization cost.

While WOFF and especially WOFF2 tend to result in smaller file sizes, there is no universally "better" font format. In most situations, it's recommended to use the font format that was shipped on the font developer's website.

See also [`ResourceImporterBMFont`](class_resourceimporterbmfont.md) and [`ResourceImporterImageFont`](class_resourceimporterimagefont.md).

## 属性

|||
|:-:|:--|
| [`bool`](class_bool.md)             | [`allow_system_fallback`](class_resourceimporterdynamicfont.md#class_resourceimporterdynamicfont_property_allow_system_fallback)                           | ``true``  |
| [`int`](class_int.md)               | [`antialiasing`](class_resourceimporterdynamicfont.md#class_resourceimporterdynamicfont_property_antialiasing)                                             | ``1``     |
| [`bool`](class_bool.md)             | [`compress`](class_resourceimporterdynamicfont.md#class_resourceimporterdynamicfont_property_compress)                                                     | ``true``  |
| [`bool`](class_bool.md)             | [`disable_embedded_bitmaps`](class_resourceimporterdynamicfont.md#class_resourceimporterdynamicfont_property_disable_embedded_bitmaps)                     | ``true``  |
| [`Array`](class_array.md)           | [`fallbacks`](class_resourceimporterdynamicfont.md#class_resourceimporterdynamicfont_property_fallbacks)                                                   | ``[]``    |
| [`bool`](class_bool.md)             | [`force_autohinter`](class_resourceimporterdynamicfont.md#class_resourceimporterdynamicfont_property_force_autohinter)                                     | ``false`` |
| [`bool`](class_bool.md)             | [`generate_mipmaps`](class_resourceimporterdynamicfont.md#class_resourceimporterdynamicfont_property_generate_mipmaps)                                     | ``false`` |
| [`int`](class_int.md)               | [`hinting`](class_resourceimporterdynamicfont.md#class_resourceimporterdynamicfont_property_hinting)                                                       | ``1``     |
| [`Dictionary`](class_dictionary.md) | [`language_support`](class_resourceimporterdynamicfont.md#class_resourceimporterdynamicfont_property_language_support)                                     | ``{}``    |
| [`int`](class_int.md)               | [`msdf_pixel_range`](class_resourceimporterdynamicfont.md#class_resourceimporterdynamicfont_property_msdf_pixel_range)                                     | ``8``     |
| [`int`](class_int.md)               | [`msdf_size`](class_resourceimporterdynamicfont.md#class_resourceimporterdynamicfont_property_msdf_size)                                                   | ``48``    |
| [`bool`](class_bool.md)             | [`multichannel_signed_distance_field`](class_resourceimporterdynamicfont.md#class_resourceimporterdynamicfont_property_multichannel_signed_distance_field) | ``false`` |
| [`Dictionary`](class_dictionary.md) | [`opentype_features`](class_resourceimporterdynamicfont.md#class_resourceimporterdynamicfont_property_opentype_features)                                   | ``{}``    |
| [`float`](class_float.md)           | [`oversampling`](class_resourceimporterdynamicfont.md#class_resourceimporterdynamicfont_property_oversampling)                                             | ``0.0``   |
| [`Array`](class_array.md)           | [`preload`](class_resourceimporterdynamicfont.md#class_resourceimporterdynamicfont_property_preload)                                                       | ``[]``    |
| [`Dictionary`](class_dictionary.md) | [`script_support`](class_resourceimporterdynamicfont.md#class_resourceimporterdynamicfont_property_script_support)                                         | ``{}``    |
| [`int`](class_int.md)               | [`subpixel_positioning`](class_resourceimporterdynamicfont.md#class_resourceimporterdynamicfont_property_subpixel_positioning)                             | ``4``     |

<!-- rst-class:: classref-section-separator -->

---

## 属性说明

<div id="_class_resourceimporterdynamicfont_property_allow_system_fallback"></div>

[`bool`](class_bool.md) **allow_system_fallback** = ``true`` <div id="class_resourceimporterdynamicfont_property_allow_system_fallback"></div>

If `true`, automatically use system fonts as a fallback if a glyph isn't found in this dynamic font. This makes supporting CJK characters or emoji more straightforward, as you don't need to include a CJK/emoji font in your project. See also [`fallbacks`](class_resourceimporterdynamicfont.md#class_resourceimporterdynamicfont_property_fallbacks).

 **Note:** The appearance of system fonts varies across platforms. Loading system fonts is only supported on Windows, macOS, Linux, Android and iOS.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_resourceimporterdynamicfont_property_antialiasing"></div>

[`int`](class_int.md) **antialiasing** = ``1`` <div id="class_resourceimporterdynamicfont_property_antialiasing"></div>

The font antialiasing method to use.

 **Disabled:** Most suited for pixel art fonts, although you do not *have* to change the antialiasing from the default **Grayscale** if the font file was well-created and the font is used at an integer multiple of its intended size. If pixel art fonts have a bad appearance at their intended size, try setting [`subpixel_positioning`](class_resourceimporterdynamicfont.md#class_resourceimporterdynamicfont_property_subpixel_positioning) to **Disabled** instead.

 **Grayscale:** Use grayscale antialiasing. This is the approach used by the operating system on macOS, Android and iOS.

 **LCD Subpixel:** Use antialiasing with subpixel patterns to make fonts sharper on LCD displays. This is the approach used by the operating system on Windows and most Linux distributions. The downside is that this can introduce "fringing" on edges, especially on display technologies that don't use standard RGB subpixels (such as OLED displays). The LCD subpixel layout is globally controlled by [`ProjectSettings.gui/theme/lcd_subpixel_layout`](class_projectsettings.md#class_projectsettings_property_gui/theme/lcd_subpixel_layout), which also allows falling back to grayscale antialiasing.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_resourceimporterdynamicfont_property_compress"></div>

[`bool`](class_bool.md) **compress** = ``true`` <div id="class_resourceimporterdynamicfont_property_compress"></div>

If `true`, uses lossless compression for the resulting font.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_resourceimporterdynamicfont_property_disable_embedded_bitmaps"></div>

[`bool`](class_bool.md) **disable_embedded_bitmaps** = ``true`` <div id="class_resourceimporterdynamicfont_property_disable_embedded_bitmaps"></div>

If set to `true`, embedded font bitmap loading is disabled (bitmap-only and color fonts ignore this property).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_resourceimporterdynamicfont_property_fallbacks"></div>

[`Array`](class_array.md) **fallbacks** = ``[]`` <div id="class_resourceimporterdynamicfont_property_fallbacks"></div>

List of font fallbacks to use if a glyph isn't found in this dynamic font. Fonts at the beginning of the array are attempted first, but fallback fonts that don't support the glyph's language and script are attempted last (see [`language_support`](class_resourceimporterdynamicfont.md#class_resourceimporterdynamicfont_property_language_support) and [`script_support`](class_resourceimporterdynamicfont.md#class_resourceimporterdynamicfont_property_script_support)). See also [`allow_system_fallback`](class_resourceimporterdynamicfont.md#class_resourceimporterdynamicfont_property_allow_system_fallback).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_resourceimporterdynamicfont_property_force_autohinter"></div>

[`bool`](class_bool.md) **force_autohinter** = ``false`` <div id="class_resourceimporterdynamicfont_property_force_autohinter"></div>

If `true`, forces generation of hinting data for the font using [*FreeType*](https://freetype.org/)'s autohinter. This will make [`hinting`](class_resourceimporterdynamicfont.md#class_resourceimporterdynamicfont_property_hinting) effective with fonts that don't include hinting data.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_resourceimporterdynamicfont_property_generate_mipmaps"></div>

[`bool`](class_bool.md) **generate_mipmaps** = ``false`` <div id="class_resourceimporterdynamicfont_property_generate_mipmaps"></div>

If `true`, this font will have mipmaps generated. This prevents text from looking grainy when a [`Control`](class_control.md) is scaled down, or when a [`Label3D`](class_label3d.md) is viewed from a long distance (if [`Label3D.texture_filter`](class_label3d.md#class_label3d_property_texture_filter) is set to a mode that displays mipmaps).

Enabling [`generate_mipmaps`](class_resourceimporterdynamicfont.md#class_resourceimporterdynamicfont_property_generate_mipmaps) increases font generation time and memory usage. Only enable this setting if you actually need it.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_resourceimporterdynamicfont_property_hinting"></div>

[`int`](class_int.md) **hinting** = ``1`` <div id="class_resourceimporterdynamicfont_property_hinting"></div>

The hinting mode to use. This controls how aggressively glyph edges should be snapped to pixels when rasterizing the font. Depending on personal preference, you may prefer using one hinting mode over the other. Hinting modes other than **None** are only effective if the font contains hinting data (see [`force_autohinter`](class_resourceimporterdynamicfont.md#class_resourceimporterdynamicfont_property_force_autohinter)).

 **None:** Smoothest appearance, which can make the font look blurry at small sizes.

 **Light:** Sharp result by snapping glyph edges to pixels on the Y axis only.

 **Full:** Sharpest by snapping glyph edges to pixels on both X and Y axes.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_resourceimporterdynamicfont_property_language_support"></div>

[`Dictionary`](class_dictionary.md) **language_support** = ``{}`` <div id="class_resourceimporterdynamicfont_property_language_support"></div>

Override the list of languages supported by this font. If left empty, this is supplied by the font metadata. There is usually no need to change this. See also [`script_support`](class_resourceimporterdynamicfont.md#class_resourceimporterdynamicfont_property_script_support).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_resourceimporterdynamicfont_property_msdf_pixel_range"></div>

[`int`](class_int.md) **msdf_pixel_range** = ``8`` <div id="class_resourceimporterdynamicfont_property_msdf_pixel_range"></div>

The width of the range around the shape between the minimum and maximum representable signed distance. If using font outlines, [`msdf_pixel_range`](class_resourceimporterdynamicfont.md#class_resourceimporterdynamicfont_property_msdf_pixel_range) must be set to at least *twice* the size of the largest font outline. The default [`msdf_pixel_range`](class_resourceimporterdynamicfont.md#class_resourceimporterdynamicfont_property_msdf_pixel_range) value of `8` allows outline sizes up to `4` to look correct.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_resourceimporterdynamicfont_property_msdf_size"></div>

[`int`](class_int.md) **msdf_size** = ``48`` <div id="class_resourceimporterdynamicfont_property_msdf_size"></div>

Source font size used to generate MSDF textures. Higher values allow for more precision, but are slower to render and require more memory. Only increase this value if you notice a visible lack of precision in glyph rendering. Only effective if [`multichannel_signed_distance_field`](class_resourceimporterdynamicfont.md#class_resourceimporterdynamicfont_property_multichannel_signed_distance_field) is `true`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_resourceimporterdynamicfont_property_multichannel_signed_distance_field"></div>

[`bool`](class_bool.md) **multichannel_signed_distance_field** = ``false`` <div id="class_resourceimporterdynamicfont_property_multichannel_signed_distance_field"></div>

If set to `true`, the font will use multichannel signed distance field (MSDF) for crisp rendering at any size. Since this approach does not rely on rasterizing the font every time its size changes, this allows for resizing the font in real-time without any performance penalty. Text will also not look grainy for [`Control`](class_control.md) s that are scaled down (or for [`Label3D`](class_label3d.md) s viewed from a long distance).

MSDF font rendering can be combined with [`generate_mipmaps`](class_resourceimporterdynamicfont.md#class_resourceimporterdynamicfont_property_generate_mipmaps) to further improve font rendering quality when scaled down.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_resourceimporterdynamicfont_property_opentype_features"></div>

[`Dictionary`](class_dictionary.md) **opentype_features** = ``{}`` <div id="class_resourceimporterdynamicfont_property_opentype_features"></div>

The OpenType features to enable, disable or set a value for this font. This can be used to enable optional features provided by the font, such as ligatures or alternative glyphs. The list of supported OpenType features varies on a per-font basis.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_resourceimporterdynamicfont_property_oversampling"></div>

[`float`](class_float.md) **oversampling** = ``0.0`` <div id="class_resourceimporterdynamicfont_property_oversampling"></div>

If set to a value greater than `0.0`, overrides the oversampling factor for the font. This can be used to render the font at a higher or lower resolution than intended without affecting its physical size. In most cases, this should be left at `0.0`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_resourceimporterdynamicfont_property_preload"></div>

[`Array`](class_array.md) **preload** = ``[]`` <div id="class_resourceimporterdynamicfont_property_preload"></div>

The glyph ranges to prerender. This can avoid stuttering during gameplay when new characters need to be rendered, especially if [`subpixel_positioning`](class_resourceimporterdynamicfont.md#class_resourceimporterdynamicfont_property_subpixel_positioning) is enabled. The downside of using preloading is that initial project load times will increase, as well as memory usage.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_resourceimporterdynamicfont_property_script_support"></div>

[`Dictionary`](class_dictionary.md) **script_support** = ``{}`` <div id="class_resourceimporterdynamicfont_property_script_support"></div>

Override the list of language scripts supported by this font. If left empty, this is supplied by the font metadata. There is usually no need to change this. See also [`language_support`](class_resourceimporterdynamicfont.md#class_resourceimporterdynamicfont_property_language_support).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_resourceimporterdynamicfont_property_subpixel_positioning"></div>

[`int`](class_int.md) **subpixel_positioning** = ``4`` <div id="class_resourceimporterdynamicfont_property_subpixel_positioning"></div>

Subpixel positioning improves font rendering appearance, especially at smaller font sizes. The downside is that it takes more time to initially render the font, which can cause stuttering during gameplay, especially if used with large font sizes. This should be set to **Disabled** for fonts with a pixel art appearance.

 **Disabled:** No subpixel positioning. Lowest quality, fastest rendering.

 **Auto:** Use subpixel positioning at small font sizes (the chosen quality varies depending on font size). Large fonts will not use subpixel positioning. This is a good tradeoff between performance and quality.

 **One Half of a Pixel:** Always perform intermediate subpixel positioning regardless of font size. High quality, slow rendering.

 **One Quarter of a Pixel:** Always perform precise subpixel positioning regardless of font size. Highest quality, slowest rendering.

 **Auto (Except Pixel Fonts):** **Disabled** for the pixel style fonts (each glyph contours contain only straight horizontal and vertical lines), **Auto** for the other fonts.

[^virtual]: 本方法通常需要用户覆盖才能生效。
[^const]: 本方法无副作用，不会修改该实例的任何成员变量。
[^vararg]: 本方法除了能接受在此处描述的参数外，还能够继续接受任意数量的参数。
[^constructor]: 本方法用于构造某个类型。
[^static]: 调用本方法无需实例，可直接使用类名进行调用。
[^operator]: 本方法描述的是使用本类型作为左操作数的有效运算符。
[^bitfield]: 这个值是由下列位标志构成位掩码的整数。
[^void]: 无返回值。
