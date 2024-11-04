<!-- ⚠ 请勿编辑本文件 ⚠ -->
<!-- 本文档使用脚本从 WeDot 引擎源码仓库生成。 -->
<!-- 生成脚本：https://github.com/WeDot-Engine/WeDot/tree/4.3/doc/tools/make_md.py； -->
<!-- 原文件：https://github.com/WeDot-Engine/WeDot/tree/4.3/doc/classes/Color.xml。 -->

<div id="_class_color"></div>

# Color

A color represented in RGBA format.

## 描述

A color represented in RGBA format by a red ([`r`](#class_color_property_r)), green ([`g`](#class_color_property_g)), blue ([`b`](#class_color_property_b)), and alpha ([`a`](#class_color_property_a)) component. Each component is a 32-bit floating-point value, usually ranging from `0.0` to `1.0`. Some properties (such as [`CanvasItem.modulate`](#class_canvasitem_property_modulate)) may support values greater than `1.0`, for overbright or HDR (High Dynamic Range) colors.

Colors can be created in various ways: By the various **Color** constructors, by static methods such as [`from_hsv`](#class_color_method_from_hsv), and by using a name from the set of standardized colors based on [*X11 color names*](https://en.wikipedia.org/wiki/X11_color_names) with the addition of [`TRANSPARENT`](#class_color_constant_transparent). GDScript also provides [`@GDScript.Color8`](#class_@gdscript_method_color8), which uses integers from `0` to `255` and doesn't support overbright colors.

 **Note:** In a boolean context, a Color will evaluate to `false` if it is equal to `Color(0, 0, 0, 1)` (opaque black). Otherwise, a Color will always evaluate to `true`.

 [*Color constants cheatsheet*](https://raw.githubusercontent.com/godotengine/godot-docs/master/img/color_constants.png)

通过 C# 使用该 API 时会有显著不同，详见 :ref:`doc_c_sharp_differences`\ 。

## 属性

| [`float`](class_float.md) | [`a`](#class_color_property_a)   | ``1.0`` |
| [`int`](class_int.md)     | [`a8`](#class_color_property_a8) | ``255`` |
| [`float`](class_float.md) | [`b`](#class_color_property_b)   | ``0.0`` |
| [`int`](class_int.md)     | [`b8`](#class_color_property_b8) | ``0``   |
| [`float`](class_float.md) | [`g`](#class_color_property_g)   | ``0.0`` |
| [`int`](class_int.md)     | [`g8`](#class_color_property_g8) | ``0``   |
| [`float`](class_float.md) | [`h`](#class_color_property_h)   | ``0.0`` |
| [`float`](class_float.md) | [`r`](#class_color_property_r)   | ``0.0`` |
| [`int`](class_int.md)     | [`r8`](#class_color_property_r8) | ``0``   |
| [`float`](class_float.md) | [`s`](#class_color_property_s)   | ``0.0`` |
| [`float`](class_float.md) | [`v`](#class_color_property_v)   | ``0.0`` |

## 构造函数

| [`Color`](class_color.md) | [`Color`](#class_color_constructor_color) ( )                                                                                                                        |
| [`Color`](class_color.md) | [`Color`](#class_color_constructor_color) ( from: [`Color`](class_color.md), alpha: [`float`](class_float.md) )                                                      |
| [`Color`](class_color.md) | [`Color`](#class_color_constructor_color) ( from: [`Color`](class_color.md) )                                                                                        |
| [`Color`](class_color.md) | [`Color`](#class_color_constructor_color) ( code: [`String`](class_string.md) )                                                                                      |
| [`Color`](class_color.md) | [`Color`](#class_color_constructor_color) ( code: [`String`](class_string.md), alpha: [`float`](class_float.md) )                                                    |
| [`Color`](class_color.md) | [`Color`](#class_color_constructor_color) ( r: [`float`](class_float.md), g: [`float`](class_float.md), b: [`float`](class_float.md) )                               |
| [`Color`](class_color.md) | [`Color`](#class_color_constructor_color) ( r: [`float`](class_float.md), g: [`float`](class_float.md), b: [`float`](class_float.md), a: [`float`](class_float.md) ) |

## 方法

| [`Color`](class_color.md)   | [`blend`](#class_color_method_blend) ( over: [`Color`](class_color.md) ) const[^const]                                                                                                                |
| [`Color`](class_color.md)   | [`clamp`](#class_color_method_clamp) ( min: [`Color`](class_color.md) = Color(0, 0, 0, 0), max: [`Color`](class_color.md) = Color(1, 1, 1, 1) ) const[^const]                                         |
| [`Color`](class_color.md)   | [`darkened`](#class_color_method_darkened) ( amount: [`float`](class_float.md) ) const[^const]                                                                                                        |
| [`Color`](class_color.md)   | [`from_hsv`](#class_color_method_from_hsv) ( h: [`float`](class_float.md), s: [`float`](class_float.md), v: [`float`](class_float.md), alpha: [`float`](class_float.md) = 1.0 ) static[^static]       |
| [`Color`](class_color.md)   | [`from_ok_hsl`](#class_color_method_from_ok_hsl) ( h: [`float`](class_float.md), s: [`float`](class_float.md), l: [`float`](class_float.md), alpha: [`float`](class_float.md) = 1.0 ) static[^static] |
| [`Color`](class_color.md)   | [`from_rgbe9995`](#class_color_method_from_rgbe9995) ( rgbe: [`int`](class_int.md) ) static[^static]                                                                                                  |
| [`Color`](class_color.md)   | [`from_string`](#class_color_method_from_string) ( str: [`String`](class_string.md), default: [`Color`](class_color.md) ) static[^static]                                                             |
| [`float`](class_float.md)   | [`get_luminance`](#class_color_method_get_luminance) ( ) const[^const]                                                                                                                                |
| [`Color`](class_color.md)   | [`hex`](#class_color_method_hex) ( hex: [`int`](class_int.md) ) static[^static]                                                                                                                       |
| [`Color`](class_color.md)   | [`hex64`](#class_color_method_hex64) ( hex: [`int`](class_int.md) ) static[^static]                                                                                                                   |
| [`Color`](class_color.md)   | [`html`](#class_color_method_html) ( rgba: [`String`](class_string.md) ) static[^static]                                                                                                              |
| [`bool`](class_bool.md)     | [`html_is_valid`](#class_color_method_html_is_valid) ( color: [`String`](class_string.md) ) static[^static]                                                                                           |
| [`Color`](class_color.md)   | [`inverted`](#class_color_method_inverted) ( ) const[^const]                                                                                                                                          |
| [`bool`](class_bool.md)     | [`is_equal_approx`](#class_color_method_is_equal_approx) ( to: [`Color`](class_color.md) ) const[^const]                                                                                              |
| [`Color`](class_color.md)   | [`lerp`](#class_color_method_lerp) ( to: [`Color`](class_color.md), weight: [`float`](class_float.md) ) const[^const]                                                                                 |
| [`Color`](class_color.md)   | [`lightened`](#class_color_method_lightened) ( amount: [`float`](class_float.md) ) const[^const]                                                                                                      |
| [`Color`](class_color.md)   | [`linear_to_srgb`](#class_color_method_linear_to_srgb) ( ) const[^const]                                                                                                                              |
| [`Color`](class_color.md)   | [`srgb_to_linear`](#class_color_method_srgb_to_linear) ( ) const[^const]                                                                                                                              |
| [`int`](class_int.md)       | [`to_abgr32`](#class_color_method_to_abgr32) ( ) const[^const]                                                                                                                                        |
| [`int`](class_int.md)       | [`to_abgr64`](#class_color_method_to_abgr64) ( ) const[^const]                                                                                                                                        |
| [`int`](class_int.md)       | [`to_argb32`](#class_color_method_to_argb32) ( ) const[^const]                                                                                                                                        |
| [`int`](class_int.md)       | [`to_argb64`](#class_color_method_to_argb64) ( ) const[^const]                                                                                                                                        |
| [`String`](class_string.md) | [`to_html`](#class_color_method_to_html) ( with_alpha: [`bool`](class_bool.md) = true ) const[^const]                                                                                                 |
| [`int`](class_int.md)       | [`to_rgba32`](#class_color_method_to_rgba32) ( ) const[^const]                                                                                                                                        |
| [`int`](class_int.md)       | [`to_rgba64`](#class_color_method_to_rgba64) ( ) const[^const]                                                                                                                                        |

## 运算符

| [`bool`](class_bool.md)   | [`operator !=`](class_Color.md#operator_neq_Color) ( right: [`Color`](class_color.md) ) |
| [`Color`](class_color.md) | [`operator *`](class_Color.md#operator_mul_Color) ( right: [`Color`](class_color.md) )  |
| [`Color`](class_color.md) | [`operator *`](class_Color.md#operator_mul_float) ( right: [`float`](class_float.md) )  |
| [`Color`](class_color.md) | [`operator *`](class_Color.md#operator_mul_int) ( right: [`int`](class_int.md) )        |
| [`Color`](class_color.md) | [`operator +`](class_Color.md#operator_sum_Color) ( right: [`Color`](class_color.md) )  |
| [`Color`](class_color.md) | [`operator -`](class_Color.md#operator_dif_Color) ( right: [`Color`](class_color.md) )  |
| [`Color`](class_color.md) | [`operator /`](class_Color.md#operator_div_Color) ( right: [`Color`](class_color.md) )  |
| [`Color`](class_color.md) | [`operator /`](class_Color.md#operator_div_float) ( right: [`float`](class_float.md) )  |
| [`Color`](class_color.md) | [`operator /`](class_Color.md#operator_div_int) ( right: [`int`](class_int.md) )        |
| [`bool`](class_bool.md)   | [`operator ==`](class_Color.md#operator_eq_Color) ( right: [`Color`](class_color.md) )  |
| [`float`](class_float.md) | [`operator []`](class_Color.md#operator_idx_int) ( index: [`int`](class_int.md) )       |
| [`Color`](class_color.md) | [`operator unary+`](class_Color.md#operator_unplus) ( )                                 |
| [`Color`](class_color.md) | [`operator unary-`](class_Color.md#operator_unminus) ( )                                |

<!-- rst-class:: classref-section-separator -->

---

## 常量

<div id="_class_color_constant_alice_blue"></div>

**ALICE_BLUE** = ``Color(0.941176, 0.972549, 1, 1)`` <div id="class_color_constant_alice_blue"></div>

Alice blue color.

<div id="_class_color_constant_antique_white"></div>

**ANTIQUE_WHITE** = ``Color(0.980392, 0.921569, 0.843137, 1)`` <div id="class_color_constant_antique_white"></div>

Antique white color.

<div id="_class_color_constant_aqua"></div>

**AQUA** = ``Color(0, 1, 1, 1)`` <div id="class_color_constant_aqua"></div>

Aqua color.

<div id="_class_color_constant_aquamarine"></div>

**AQUAMARINE** = ``Color(0.498039, 1, 0.831373, 1)`` <div id="class_color_constant_aquamarine"></div>

Aquamarine color.

<div id="_class_color_constant_azure"></div>

**AZURE** = ``Color(0.941176, 1, 1, 1)`` <div id="class_color_constant_azure"></div>

Azure color.

<div id="_class_color_constant_beige"></div>

**BEIGE** = ``Color(0.960784, 0.960784, 0.862745, 1)`` <div id="class_color_constant_beige"></div>

Beige color.

<div id="_class_color_constant_bisque"></div>

**BISQUE** = ``Color(1, 0.894118, 0.768627, 1)`` <div id="class_color_constant_bisque"></div>

Bisque color.

<div id="_class_color_constant_black"></div>

**BLACK** = ``Color(0, 0, 0, 1)`` <div id="class_color_constant_black"></div>

Black color. In GDScript, this is the default value of any color.

<div id="_class_color_constant_blanched_almond"></div>

**BLANCHED_ALMOND** = ``Color(1, 0.921569, 0.803922, 1)`` <div id="class_color_constant_blanched_almond"></div>

Blanched almond color.

<div id="_class_color_constant_blue"></div>

**BLUE** = ``Color(0, 0, 1, 1)`` <div id="class_color_constant_blue"></div>

Blue color.

<div id="_class_color_constant_blue_violet"></div>

**BLUE_VIOLET** = ``Color(0.541176, 0.168627, 0.886275, 1)`` <div id="class_color_constant_blue_violet"></div>

Blue violet color.

<div id="_class_color_constant_brown"></div>

**BROWN** = ``Color(0.647059, 0.164706, 0.164706, 1)`` <div id="class_color_constant_brown"></div>

Brown color.

<div id="_class_color_constant_burlywood"></div>

**BURLYWOOD** = ``Color(0.870588, 0.721569, 0.529412, 1)`` <div id="class_color_constant_burlywood"></div>

Burlywood color.

<div id="_class_color_constant_cadet_blue"></div>

**CADET_BLUE** = ``Color(0.372549, 0.619608, 0.627451, 1)`` <div id="class_color_constant_cadet_blue"></div>

Cadet blue color.

<div id="_class_color_constant_chartreuse"></div>

**CHARTREUSE** = ``Color(0.498039, 1, 0, 1)`` <div id="class_color_constant_chartreuse"></div>

Chartreuse color.

<div id="_class_color_constant_chocolate"></div>

**CHOCOLATE** = ``Color(0.823529, 0.411765, 0.117647, 1)`` <div id="class_color_constant_chocolate"></div>

Chocolate color.

<div id="_class_color_constant_coral"></div>

**CORAL** = ``Color(1, 0.498039, 0.313726, 1)`` <div id="class_color_constant_coral"></div>

Coral color.

<div id="_class_color_constant_cornflower_blue"></div>

**CORNFLOWER_BLUE** = ``Color(0.392157, 0.584314, 0.929412, 1)`` <div id="class_color_constant_cornflower_blue"></div>

Cornflower blue color.

<div id="_class_color_constant_cornsilk"></div>

**CORNSILK** = ``Color(1, 0.972549, 0.862745, 1)`` <div id="class_color_constant_cornsilk"></div>

Cornsilk color.

<div id="_class_color_constant_crimson"></div>

**CRIMSON** = ``Color(0.862745, 0.0784314, 0.235294, 1)`` <div id="class_color_constant_crimson"></div>

Crimson color.

<div id="_class_color_constant_cyan"></div>

**CYAN** = ``Color(0, 1, 1, 1)`` <div id="class_color_constant_cyan"></div>

Cyan color.

<div id="_class_color_constant_dark_blue"></div>

**DARK_BLUE** = ``Color(0, 0, 0.545098, 1)`` <div id="class_color_constant_dark_blue"></div>

Dark blue color.

<div id="_class_color_constant_dark_cyan"></div>

**DARK_CYAN** = ``Color(0, 0.545098, 0.545098, 1)`` <div id="class_color_constant_dark_cyan"></div>

Dark cyan color.

<div id="_class_color_constant_dark_goldenrod"></div>

**DARK_GOLDENROD** = ``Color(0.721569, 0.52549, 0.0431373, 1)`` <div id="class_color_constant_dark_goldenrod"></div>

Dark goldenrod color.

<div id="_class_color_constant_dark_gray"></div>

**DARK_GRAY** = ``Color(0.662745, 0.662745, 0.662745, 1)`` <div id="class_color_constant_dark_gray"></div>

Dark gray color.

<div id="_class_color_constant_dark_green"></div>

**DARK_GREEN** = ``Color(0, 0.392157, 0, 1)`` <div id="class_color_constant_dark_green"></div>

Dark green color.

<div id="_class_color_constant_dark_khaki"></div>

**DARK_KHAKI** = ``Color(0.741176, 0.717647, 0.419608, 1)`` <div id="class_color_constant_dark_khaki"></div>

Dark khaki color.

<div id="_class_color_constant_dark_magenta"></div>

**DARK_MAGENTA** = ``Color(0.545098, 0, 0.545098, 1)`` <div id="class_color_constant_dark_magenta"></div>

Dark magenta color.

<div id="_class_color_constant_dark_olive_green"></div>

**DARK_OLIVE_GREEN** = ``Color(0.333333, 0.419608, 0.184314, 1)`` <div id="class_color_constant_dark_olive_green"></div>

Dark olive green color.

<div id="_class_color_constant_dark_orange"></div>

**DARK_ORANGE** = ``Color(1, 0.54902, 0, 1)`` <div id="class_color_constant_dark_orange"></div>

Dark orange color.

<div id="_class_color_constant_dark_orchid"></div>

**DARK_ORCHID** = ``Color(0.6, 0.196078, 0.8, 1)`` <div id="class_color_constant_dark_orchid"></div>

Dark orchid color.

<div id="_class_color_constant_dark_red"></div>

**DARK_RED** = ``Color(0.545098, 0, 0, 1)`` <div id="class_color_constant_dark_red"></div>

Dark red color.

<div id="_class_color_constant_dark_salmon"></div>

**DARK_SALMON** = ``Color(0.913725, 0.588235, 0.478431, 1)`` <div id="class_color_constant_dark_salmon"></div>

Dark salmon color.

<div id="_class_color_constant_dark_sea_green"></div>

**DARK_SEA_GREEN** = ``Color(0.560784, 0.737255, 0.560784, 1)`` <div id="class_color_constant_dark_sea_green"></div>

Dark sea green color.

<div id="_class_color_constant_dark_slate_blue"></div>

**DARK_SLATE_BLUE** = ``Color(0.282353, 0.239216, 0.545098, 1)`` <div id="class_color_constant_dark_slate_blue"></div>

Dark slate blue color.

<div id="_class_color_constant_dark_slate_gray"></div>

**DARK_SLATE_GRAY** = ``Color(0.184314, 0.309804, 0.309804, 1)`` <div id="class_color_constant_dark_slate_gray"></div>

Dark slate gray color.

<div id="_class_color_constant_dark_turquoise"></div>

**DARK_TURQUOISE** = ``Color(0, 0.807843, 0.819608, 1)`` <div id="class_color_constant_dark_turquoise"></div>

Dark turquoise color.

<div id="_class_color_constant_dark_violet"></div>

**DARK_VIOLET** = ``Color(0.580392, 0, 0.827451, 1)`` <div id="class_color_constant_dark_violet"></div>

Dark violet color.

<div id="_class_color_constant_deep_pink"></div>

**DEEP_PINK** = ``Color(1, 0.0784314, 0.576471, 1)`` <div id="class_color_constant_deep_pink"></div>

Deep pink color.

<div id="_class_color_constant_deep_sky_blue"></div>

**DEEP_SKY_BLUE** = ``Color(0, 0.74902, 1, 1)`` <div id="class_color_constant_deep_sky_blue"></div>

Deep sky blue color.

<div id="_class_color_constant_dim_gray"></div>

**DIM_GRAY** = ``Color(0.411765, 0.411765, 0.411765, 1)`` <div id="class_color_constant_dim_gray"></div>

Dim gray color.

<div id="_class_color_constant_dodger_blue"></div>

**DODGER_BLUE** = ``Color(0.117647, 0.564706, 1, 1)`` <div id="class_color_constant_dodger_blue"></div>

Dodger blue color.

<div id="_class_color_constant_firebrick"></div>

**FIREBRICK** = ``Color(0.698039, 0.133333, 0.133333, 1)`` <div id="class_color_constant_firebrick"></div>

Firebrick color.

<div id="_class_color_constant_floral_white"></div>

**FLORAL_WHITE** = ``Color(1, 0.980392, 0.941176, 1)`` <div id="class_color_constant_floral_white"></div>

Floral white color.

<div id="_class_color_constant_forest_green"></div>

**FOREST_GREEN** = ``Color(0.133333, 0.545098, 0.133333, 1)`` <div id="class_color_constant_forest_green"></div>

Forest green color.

<div id="_class_color_constant_fuchsia"></div>

**FUCHSIA** = ``Color(1, 0, 1, 1)`` <div id="class_color_constant_fuchsia"></div>

Fuchsia color.

<div id="_class_color_constant_gainsboro"></div>

**GAINSBORO** = ``Color(0.862745, 0.862745, 0.862745, 1)`` <div id="class_color_constant_gainsboro"></div>

Gainsboro color.

<div id="_class_color_constant_ghost_white"></div>

**GHOST_WHITE** = ``Color(0.972549, 0.972549, 1, 1)`` <div id="class_color_constant_ghost_white"></div>

Ghost white color.

<div id="_class_color_constant_gold"></div>

**GOLD** = ``Color(1, 0.843137, 0, 1)`` <div id="class_color_constant_gold"></div>

Gold color.

<div id="_class_color_constant_goldenrod"></div>

**GOLDENROD** = ``Color(0.854902, 0.647059, 0.12549, 1)`` <div id="class_color_constant_goldenrod"></div>

Goldenrod color.

<div id="_class_color_constant_gray"></div>

**GRAY** = ``Color(0.745098, 0.745098, 0.745098, 1)`` <div id="class_color_constant_gray"></div>

Gray color.

<div id="_class_color_constant_green"></div>

**GREEN** = ``Color(0, 1, 0, 1)`` <div id="class_color_constant_green"></div>

Green color.

<div id="_class_color_constant_green_yellow"></div>

**GREEN_YELLOW** = ``Color(0.678431, 1, 0.184314, 1)`` <div id="class_color_constant_green_yellow"></div>

Green yellow color.

<div id="_class_color_constant_honeydew"></div>

**HONEYDEW** = ``Color(0.941176, 1, 0.941176, 1)`` <div id="class_color_constant_honeydew"></div>

Honeydew color.

<div id="_class_color_constant_hot_pink"></div>

**HOT_PINK** = ``Color(1, 0.411765, 0.705882, 1)`` <div id="class_color_constant_hot_pink"></div>

Hot pink color.

<div id="_class_color_constant_indian_red"></div>

**INDIAN_RED** = ``Color(0.803922, 0.360784, 0.360784, 1)`` <div id="class_color_constant_indian_red"></div>

Indian red color.

<div id="_class_color_constant_indigo"></div>

**INDIGO** = ``Color(0.294118, 0, 0.509804, 1)`` <div id="class_color_constant_indigo"></div>

Indigo color.

<div id="_class_color_constant_ivory"></div>

**IVORY** = ``Color(1, 1, 0.941176, 1)`` <div id="class_color_constant_ivory"></div>

Ivory color.

<div id="_class_color_constant_khaki"></div>

**KHAKI** = ``Color(0.941176, 0.901961, 0.54902, 1)`` <div id="class_color_constant_khaki"></div>

Khaki color.

<div id="_class_color_constant_lavender"></div>

**LAVENDER** = ``Color(0.901961, 0.901961, 0.980392, 1)`` <div id="class_color_constant_lavender"></div>

Lavender color.

<div id="_class_color_constant_lavender_blush"></div>

**LAVENDER_BLUSH** = ``Color(1, 0.941176, 0.960784, 1)`` <div id="class_color_constant_lavender_blush"></div>

Lavender blush color.

<div id="_class_color_constant_lawn_green"></div>

**LAWN_GREEN** = ``Color(0.486275, 0.988235, 0, 1)`` <div id="class_color_constant_lawn_green"></div>

Lawn green color.

<div id="_class_color_constant_lemon_chiffon"></div>

**LEMON_CHIFFON** = ``Color(1, 0.980392, 0.803922, 1)`` <div id="class_color_constant_lemon_chiffon"></div>

Lemon chiffon color.

<div id="_class_color_constant_light_blue"></div>

**LIGHT_BLUE** = ``Color(0.678431, 0.847059, 0.901961, 1)`` <div id="class_color_constant_light_blue"></div>

Light blue color.

<div id="_class_color_constant_light_coral"></div>

**LIGHT_CORAL** = ``Color(0.941176, 0.501961, 0.501961, 1)`` <div id="class_color_constant_light_coral"></div>

Light coral color.

<div id="_class_color_constant_light_cyan"></div>

**LIGHT_CYAN** = ``Color(0.878431, 1, 1, 1)`` <div id="class_color_constant_light_cyan"></div>

Light cyan color.

<div id="_class_color_constant_light_goldenrod"></div>

**LIGHT_GOLDENROD** = ``Color(0.980392, 0.980392, 0.823529, 1)`` <div id="class_color_constant_light_goldenrod"></div>

Light goldenrod color.

<div id="_class_color_constant_light_gray"></div>

**LIGHT_GRAY** = ``Color(0.827451, 0.827451, 0.827451, 1)`` <div id="class_color_constant_light_gray"></div>

Light gray color.

<div id="_class_color_constant_light_green"></div>

**LIGHT_GREEN** = ``Color(0.564706, 0.933333, 0.564706, 1)`` <div id="class_color_constant_light_green"></div>

Light green color.

<div id="_class_color_constant_light_pink"></div>

**LIGHT_PINK** = ``Color(1, 0.713726, 0.756863, 1)`` <div id="class_color_constant_light_pink"></div>

Light pink color.

<div id="_class_color_constant_light_salmon"></div>

**LIGHT_SALMON** = ``Color(1, 0.627451, 0.478431, 1)`` <div id="class_color_constant_light_salmon"></div>

Light salmon color.

<div id="_class_color_constant_light_sea_green"></div>

**LIGHT_SEA_GREEN** = ``Color(0.12549, 0.698039, 0.666667, 1)`` <div id="class_color_constant_light_sea_green"></div>

Light sea green color.

<div id="_class_color_constant_light_sky_blue"></div>

**LIGHT_SKY_BLUE** = ``Color(0.529412, 0.807843, 0.980392, 1)`` <div id="class_color_constant_light_sky_blue"></div>

Light sky blue color.

<div id="_class_color_constant_light_slate_gray"></div>

**LIGHT_SLATE_GRAY** = ``Color(0.466667, 0.533333, 0.6, 1)`` <div id="class_color_constant_light_slate_gray"></div>

Light slate gray color.

<div id="_class_color_constant_light_steel_blue"></div>

**LIGHT_STEEL_BLUE** = ``Color(0.690196, 0.768627, 0.870588, 1)`` <div id="class_color_constant_light_steel_blue"></div>

Light steel blue color.

<div id="_class_color_constant_light_yellow"></div>

**LIGHT_YELLOW** = ``Color(1, 1, 0.878431, 1)`` <div id="class_color_constant_light_yellow"></div>

Light yellow color.

<div id="_class_color_constant_lime"></div>

**LIME** = ``Color(0, 1, 0, 1)`` <div id="class_color_constant_lime"></div>

Lime color.

<div id="_class_color_constant_lime_green"></div>

**LIME_GREEN** = ``Color(0.196078, 0.803922, 0.196078, 1)`` <div id="class_color_constant_lime_green"></div>

Lime green color.

<div id="_class_color_constant_linen"></div>

**LINEN** = ``Color(0.980392, 0.941176, 0.901961, 1)`` <div id="class_color_constant_linen"></div>

Linen color.

<div id="_class_color_constant_magenta"></div>

**MAGENTA** = ``Color(1, 0, 1, 1)`` <div id="class_color_constant_magenta"></div>

Magenta color.

<div id="_class_color_constant_maroon"></div>

**MAROON** = ``Color(0.690196, 0.188235, 0.376471, 1)`` <div id="class_color_constant_maroon"></div>

Maroon color.

<div id="_class_color_constant_medium_aquamarine"></div>

**MEDIUM_AQUAMARINE** = ``Color(0.4, 0.803922, 0.666667, 1)`` <div id="class_color_constant_medium_aquamarine"></div>

Medium aquamarine color.

<div id="_class_color_constant_medium_blue"></div>

**MEDIUM_BLUE** = ``Color(0, 0, 0.803922, 1)`` <div id="class_color_constant_medium_blue"></div>

Medium blue color.

<div id="_class_color_constant_medium_orchid"></div>

**MEDIUM_ORCHID** = ``Color(0.729412, 0.333333, 0.827451, 1)`` <div id="class_color_constant_medium_orchid"></div>

Medium orchid color.

<div id="_class_color_constant_medium_purple"></div>

**MEDIUM_PURPLE** = ``Color(0.576471, 0.439216, 0.858824, 1)`` <div id="class_color_constant_medium_purple"></div>

Medium purple color.

<div id="_class_color_constant_medium_sea_green"></div>

**MEDIUM_SEA_GREEN** = ``Color(0.235294, 0.701961, 0.443137, 1)`` <div id="class_color_constant_medium_sea_green"></div>

Medium sea green color.

<div id="_class_color_constant_medium_slate_blue"></div>

**MEDIUM_SLATE_BLUE** = ``Color(0.482353, 0.407843, 0.933333, 1)`` <div id="class_color_constant_medium_slate_blue"></div>

Medium slate blue color.

<div id="_class_color_constant_medium_spring_green"></div>

**MEDIUM_SPRING_GREEN** = ``Color(0, 0.980392, 0.603922, 1)`` <div id="class_color_constant_medium_spring_green"></div>

Medium spring green color.

<div id="_class_color_constant_medium_turquoise"></div>

**MEDIUM_TURQUOISE** = ``Color(0.282353, 0.819608, 0.8, 1)`` <div id="class_color_constant_medium_turquoise"></div>

Medium turquoise color.

<div id="_class_color_constant_medium_violet_red"></div>

**MEDIUM_VIOLET_RED** = ``Color(0.780392, 0.0823529, 0.521569, 1)`` <div id="class_color_constant_medium_violet_red"></div>

Medium violet red color.

<div id="_class_color_constant_midnight_blue"></div>

**MIDNIGHT_BLUE** = ``Color(0.0980392, 0.0980392, 0.439216, 1)`` <div id="class_color_constant_midnight_blue"></div>

Midnight blue color.

<div id="_class_color_constant_mint_cream"></div>

**MINT_CREAM** = ``Color(0.960784, 1, 0.980392, 1)`` <div id="class_color_constant_mint_cream"></div>

Mint cream color.

<div id="_class_color_constant_misty_rose"></div>

**MISTY_ROSE** = ``Color(1, 0.894118, 0.882353, 1)`` <div id="class_color_constant_misty_rose"></div>

Misty rose color.

<div id="_class_color_constant_moccasin"></div>

**MOCCASIN** = ``Color(1, 0.894118, 0.709804, 1)`` <div id="class_color_constant_moccasin"></div>

Moccasin color.

<div id="_class_color_constant_navajo_white"></div>

**NAVAJO_WHITE** = ``Color(1, 0.870588, 0.678431, 1)`` <div id="class_color_constant_navajo_white"></div>

Navajo white color.

<div id="_class_color_constant_navy_blue"></div>

**NAVY_BLUE** = ``Color(0, 0, 0.501961, 1)`` <div id="class_color_constant_navy_blue"></div>

Navy blue color.

<div id="_class_color_constant_old_lace"></div>

**OLD_LACE** = ``Color(0.992157, 0.960784, 0.901961, 1)`` <div id="class_color_constant_old_lace"></div>

Old lace color.

<div id="_class_color_constant_olive"></div>

**OLIVE** = ``Color(0.501961, 0.501961, 0, 1)`` <div id="class_color_constant_olive"></div>

Olive color.

<div id="_class_color_constant_olive_drab"></div>

**OLIVE_DRAB** = ``Color(0.419608, 0.556863, 0.137255, 1)`` <div id="class_color_constant_olive_drab"></div>

Olive drab color.

<div id="_class_color_constant_orange"></div>

**ORANGE** = ``Color(1, 0.647059, 0, 1)`` <div id="class_color_constant_orange"></div>

Orange color.

<div id="_class_color_constant_orange_red"></div>

**ORANGE_RED** = ``Color(1, 0.270588, 0, 1)`` <div id="class_color_constant_orange_red"></div>

Orange red color.

<div id="_class_color_constant_orchid"></div>

**ORCHID** = ``Color(0.854902, 0.439216, 0.839216, 1)`` <div id="class_color_constant_orchid"></div>

Orchid color.

<div id="_class_color_constant_pale_goldenrod"></div>

**PALE_GOLDENROD** = ``Color(0.933333, 0.909804, 0.666667, 1)`` <div id="class_color_constant_pale_goldenrod"></div>

Pale goldenrod color.

<div id="_class_color_constant_pale_green"></div>

**PALE_GREEN** = ``Color(0.596078, 0.984314, 0.596078, 1)`` <div id="class_color_constant_pale_green"></div>

Pale green color.

<div id="_class_color_constant_pale_turquoise"></div>

**PALE_TURQUOISE** = ``Color(0.686275, 0.933333, 0.933333, 1)`` <div id="class_color_constant_pale_turquoise"></div>

Pale turquoise color.

<div id="_class_color_constant_pale_violet_red"></div>

**PALE_VIOLET_RED** = ``Color(0.858824, 0.439216, 0.576471, 1)`` <div id="class_color_constant_pale_violet_red"></div>

Pale violet red color.

<div id="_class_color_constant_papaya_whip"></div>

**PAPAYA_WHIP** = ``Color(1, 0.937255, 0.835294, 1)`` <div id="class_color_constant_papaya_whip"></div>

Papaya whip color.

<div id="_class_color_constant_peach_puff"></div>

**PEACH_PUFF** = ``Color(1, 0.854902, 0.72549, 1)`` <div id="class_color_constant_peach_puff"></div>

Peach puff color.

<div id="_class_color_constant_peru"></div>

**PERU** = ``Color(0.803922, 0.521569, 0.247059, 1)`` <div id="class_color_constant_peru"></div>

Peru color.

<div id="_class_color_constant_pink"></div>

**PINK** = ``Color(1, 0.752941, 0.796078, 1)`` <div id="class_color_constant_pink"></div>

Pink color.

<div id="_class_color_constant_plum"></div>

**PLUM** = ``Color(0.866667, 0.627451, 0.866667, 1)`` <div id="class_color_constant_plum"></div>

Plum color.

<div id="_class_color_constant_powder_blue"></div>

**POWDER_BLUE** = ``Color(0.690196, 0.878431, 0.901961, 1)`` <div id="class_color_constant_powder_blue"></div>

Powder blue color.

<div id="_class_color_constant_purple"></div>

**PURPLE** = ``Color(0.627451, 0.12549, 0.941176, 1)`` <div id="class_color_constant_purple"></div>

Purple color.

<div id="_class_color_constant_rebecca_purple"></div>

**REBECCA_PURPLE** = ``Color(0.4, 0.2, 0.6, 1)`` <div id="class_color_constant_rebecca_purple"></div>

Rebecca purple color.

<div id="_class_color_constant_red"></div>

**RED** = ``Color(1, 0, 0, 1)`` <div id="class_color_constant_red"></div>

Red color.

<div id="_class_color_constant_rosy_brown"></div>

**ROSY_BROWN** = ``Color(0.737255, 0.560784, 0.560784, 1)`` <div id="class_color_constant_rosy_brown"></div>

Rosy brown color.

<div id="_class_color_constant_royal_blue"></div>

**ROYAL_BLUE** = ``Color(0.254902, 0.411765, 0.882353, 1)`` <div id="class_color_constant_royal_blue"></div>

Royal blue color.

<div id="_class_color_constant_saddle_brown"></div>

**SADDLE_BROWN** = ``Color(0.545098, 0.270588, 0.0745098, 1)`` <div id="class_color_constant_saddle_brown"></div>

Saddle brown color.

<div id="_class_color_constant_salmon"></div>

**SALMON** = ``Color(0.980392, 0.501961, 0.447059, 1)`` <div id="class_color_constant_salmon"></div>

Salmon color.

<div id="_class_color_constant_sandy_brown"></div>

**SANDY_BROWN** = ``Color(0.956863, 0.643137, 0.376471, 1)`` <div id="class_color_constant_sandy_brown"></div>

Sandy brown color.

<div id="_class_color_constant_sea_green"></div>

**SEA_GREEN** = ``Color(0.180392, 0.545098, 0.341176, 1)`` <div id="class_color_constant_sea_green"></div>

Sea green color.

<div id="_class_color_constant_seashell"></div>

**SEASHELL** = ``Color(1, 0.960784, 0.933333, 1)`` <div id="class_color_constant_seashell"></div>

Seashell color.

<div id="_class_color_constant_sienna"></div>

**SIENNA** = ``Color(0.627451, 0.321569, 0.176471, 1)`` <div id="class_color_constant_sienna"></div>

Sienna color.

<div id="_class_color_constant_silver"></div>

**SILVER** = ``Color(0.752941, 0.752941, 0.752941, 1)`` <div id="class_color_constant_silver"></div>

Silver color.

<div id="_class_color_constant_sky_blue"></div>

**SKY_BLUE** = ``Color(0.529412, 0.807843, 0.921569, 1)`` <div id="class_color_constant_sky_blue"></div>

Sky blue color.

<div id="_class_color_constant_slate_blue"></div>

**SLATE_BLUE** = ``Color(0.415686, 0.352941, 0.803922, 1)`` <div id="class_color_constant_slate_blue"></div>

Slate blue color.

<div id="_class_color_constant_slate_gray"></div>

**SLATE_GRAY** = ``Color(0.439216, 0.501961, 0.564706, 1)`` <div id="class_color_constant_slate_gray"></div>

Slate gray color.

<div id="_class_color_constant_snow"></div>

**SNOW** = ``Color(1, 0.980392, 0.980392, 1)`` <div id="class_color_constant_snow"></div>

Snow color.

<div id="_class_color_constant_spring_green"></div>

**SPRING_GREEN** = ``Color(0, 1, 0.498039, 1)`` <div id="class_color_constant_spring_green"></div>

Spring green color.

<div id="_class_color_constant_steel_blue"></div>

**STEEL_BLUE** = ``Color(0.27451, 0.509804, 0.705882, 1)`` <div id="class_color_constant_steel_blue"></div>

Steel blue color.

<div id="_class_color_constant_tan"></div>

**TAN** = ``Color(0.823529, 0.705882, 0.54902, 1)`` <div id="class_color_constant_tan"></div>

Tan color.

<div id="_class_color_constant_teal"></div>

**TEAL** = ``Color(0, 0.501961, 0.501961, 1)`` <div id="class_color_constant_teal"></div>

Teal color.

<div id="_class_color_constant_thistle"></div>

**THISTLE** = ``Color(0.847059, 0.74902, 0.847059, 1)`` <div id="class_color_constant_thistle"></div>

Thistle color.

<div id="_class_color_constant_tomato"></div>

**TOMATO** = ``Color(1, 0.388235, 0.278431, 1)`` <div id="class_color_constant_tomato"></div>

Tomato color.

<div id="_class_color_constant_transparent"></div>

**TRANSPARENT** = ``Color(1, 1, 1, 0)`` <div id="class_color_constant_transparent"></div>

Transparent color (white with zero alpha).

<div id="_class_color_constant_turquoise"></div>

**TURQUOISE** = ``Color(0.25098, 0.878431, 0.815686, 1)`` <div id="class_color_constant_turquoise"></div>

Turquoise color.

<div id="_class_color_constant_violet"></div>

**VIOLET** = ``Color(0.933333, 0.509804, 0.933333, 1)`` <div id="class_color_constant_violet"></div>

Violet color.

<div id="_class_color_constant_web_gray"></div>

**WEB_GRAY** = ``Color(0.501961, 0.501961, 0.501961, 1)`` <div id="class_color_constant_web_gray"></div>

Web gray color.

<div id="_class_color_constant_web_green"></div>

**WEB_GREEN** = ``Color(0, 0.501961, 0, 1)`` <div id="class_color_constant_web_green"></div>

Web green color.

<div id="_class_color_constant_web_maroon"></div>

**WEB_MAROON** = ``Color(0.501961, 0, 0, 1)`` <div id="class_color_constant_web_maroon"></div>

Web maroon color.

<div id="_class_color_constant_web_purple"></div>

**WEB_PURPLE** = ``Color(0.501961, 0, 0.501961, 1)`` <div id="class_color_constant_web_purple"></div>

Web purple color.

<div id="_class_color_constant_wheat"></div>

**WHEAT** = ``Color(0.960784, 0.870588, 0.701961, 1)`` <div id="class_color_constant_wheat"></div>

Wheat color.

<div id="_class_color_constant_white"></div>

**WHITE** = ``Color(1, 1, 1, 1)`` <div id="class_color_constant_white"></div>

White color.

<div id="_class_color_constant_white_smoke"></div>

**WHITE_SMOKE** = ``Color(0.960784, 0.960784, 0.960784, 1)`` <div id="class_color_constant_white_smoke"></div>

White smoke color.

<div id="_class_color_constant_yellow"></div>

**YELLOW** = ``Color(1, 1, 0, 1)`` <div id="class_color_constant_yellow"></div>

Yellow color.

<div id="_class_color_constant_yellow_green"></div>

**YELLOW_GREEN** = ``Color(0.603922, 0.803922, 0.196078, 1)`` <div id="class_color_constant_yellow_green"></div>

Yellow green color.

<!-- rst-class:: classref-section-separator -->

---

## 属性说明

<div id="_class_color_property_a"></div>

[`float`](class_float.md) **a** = ``1.0`` <div id="class_color_property_a"></div>

The color's alpha component, typically on the range of 0 to 1. A value of 0 means that the color is fully transparent. A value of 1 means that the color is fully opaque.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_color_property_a8"></div>

[`int`](class_int.md) **a8** = ``255`` <div id="class_color_property_a8"></div>

Wrapper for [`a`](#class_color_property_a) that uses the range 0 to 255, instead of 0 to 1.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_color_property_b"></div>

[`float`](class_float.md) **b** = ``0.0`` <div id="class_color_property_b"></div>

The color's blue component, typically on the range of 0 to 1.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_color_property_b8"></div>

[`int`](class_int.md) **b8** = ``0`` <div id="class_color_property_b8"></div>

Wrapper for [`b`](#class_color_property_b) that uses the range 0 to 255, instead of 0 to 1.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_color_property_g"></div>

[`float`](class_float.md) **g** = ``0.0`` <div id="class_color_property_g"></div>

The color's green component, typically on the range of 0 to 1.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_color_property_g8"></div>

[`int`](class_int.md) **g8** = ``0`` <div id="class_color_property_g8"></div>

Wrapper for [`g`](#class_color_property_g) that uses the range 0 to 255, instead of 0 to 1.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_color_property_h"></div>

[`float`](class_float.md) **h** = ``0.0`` <div id="class_color_property_h"></div>

The HSV hue of this color, on the range 0 to 1.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_color_property_r"></div>

[`float`](class_float.md) **r** = ``0.0`` <div id="class_color_property_r"></div>

The color's red component, typically on the range of 0 to 1.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_color_property_r8"></div>

[`int`](class_int.md) **r8** = ``0`` <div id="class_color_property_r8"></div>

Wrapper for [`r`](#class_color_property_r) that uses the range 0 to 255, instead of 0 to 1.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_color_property_s"></div>

[`float`](class_float.md) **s** = ``0.0`` <div id="class_color_property_s"></div>

The HSV saturation of this color, on the range 0 to 1.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_color_property_v"></div>

[`float`](class_float.md) **v** = ``0.0`` <div id="class_color_property_v"></div>

The HSV value (brightness) of this color, on the range 0 to 1.

<!-- rst-class:: classref-section-separator -->

---

## 构造函数说明

<div id="_class_color_constructor_color"></div>

[`Color`](class_color.md) **Color** ( )<div id="class_color_constructor_color"></div>

Constructs a default **Color** from opaque black. This is the same as [`BLACK`](#class_color_constant_black).

 **Note:** in C#, constructs an empty color with all of its components set to `0.0` (transparent black).

<!-- rst-class:: classref-item-separator -->

---

[`Color`](class_color.md) **Color** ( from: [`Color`](class_color.md), alpha: [`float`](class_float.md) )

Constructs a **Color** from the existing color, with [`a`](#class_color_property_a) set to the given `alpha` value.



```gdscript

    var red = Color(Color.RED, 0.2) # 20% opaque red.
```

```csharp

    var red = new Color(Colors.Red, 0.2f); // 20% opaque red.
```







<!-- rst-class:: classref-item-separator -->

---

[`Color`](class_color.md) **Color** ( from: [`Color`](class_color.md) )

Constructs a **Color** as a copy of the given **Color**.

<!-- rst-class:: classref-item-separator -->

---

[`Color`](class_color.md) **Color** ( code: [`String`](class_string.md) )

Constructs a **Color** either from an HTML color code or from a standardized color name. The supported color names are the same as the constants.

<!-- rst-class:: classref-item-separator -->

---

[`Color`](class_color.md) **Color** ( code: [`String`](class_string.md), alpha: [`float`](class_float.md) )

Constructs a **Color** either from an HTML color code or from a standardized color name, with `alpha` on the range of 0.0 to 1.0. The supported color names are the same as the constants.

<!-- rst-class:: classref-item-separator -->

---

[`Color`](class_color.md) **Color** ( r: [`float`](class_float.md), g: [`float`](class_float.md), b: [`float`](class_float.md) )

Constructs a **Color** from RGB values, typically between 0.0 and 1.0. [`a`](#class_color_property_a) is set to 1.0.



```gdscript

    var color = Color(0.2, 1.0, 0.7) # Similar to `Color8(51, 255, 178, 255)`
```

```csharp

    var color = new Color(0.2f, 1.0f, 0.7f); // Similar to `Color.Color8(51, 255, 178, 255)`
```







<!-- rst-class:: classref-item-separator -->

---

[`Color`](class_color.md) **Color** ( r: [`float`](class_float.md), g: [`float`](class_float.md), b: [`float`](class_float.md), a: [`float`](class_float.md) )

Constructs a **Color** from RGBA values, typically between 0.0 and 1.0.



```gdscript

    var color = Color(0.2, 1.0, 0.7, 0.8) # Similar to `Color8(51, 255, 178, 204)`
```

```csharp

    var color = new Color(0.2f, 1.0f, 0.7f, 0.8f); // Similar to `Color.Color8(51, 255, 178, 255, 204)`
```







<!-- rst-class:: classref-section-separator -->

---

## 方法说明

<div id="_class_color_method_blend"></div>

[`Color`](class_color.md) **blend** ( over: [`Color`](class_color.md) ) const[^const]<div id="class_color_method_blend"></div>

Returns a new color resulting from overlaying this color over the given color. In a painting program, you can imagine it as the `over` color painted over this color (including alpha).



```gdscript

    var bg = Color(0.0, 1.0, 0.0, 0.5) # Green with alpha of 50%
    var fg = Color(1.0, 0.0, 0.0, 0.5) # Red with alpha of 50%
    var blended_color = bg.blend(fg) # Brown with alpha of 75%
```

```csharp

    var bg = new Color(0.0f, 1.0f, 0.0f, 0.5f); // Green with alpha of 50%
    var fg = new Color(1.0f, 0.0f, 0.0f, 0.5f); // Red with alpha of 50%
    Color blendedColor = bg.Blend(fg); // Brown with alpha of 75%
```







<!-- rst-class:: classref-item-separator -->

---

<div id="_class_color_method_clamp"></div>

[`Color`](class_color.md) **clamp** ( min: [`Color`](class_color.md) = Color(0, 0, 0, 0), max: [`Color`](class_color.md) = Color(1, 1, 1, 1) ) const[^const]<div id="class_color_method_clamp"></div>

Returns a new color with all components clamped between the components of `min` and `max`, by running [`@GlobalScope.clamp`](#class_@globalscope_method_clamp) on each component.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_color_method_darkened"></div>

[`Color`](class_color.md) **darkened** ( amount: [`float`](class_float.md) ) const[^const]<div id="class_color_method_darkened"></div>

Returns a new color resulting from making this color darker by the specified `amount` (ratio from 0.0 to 1.0). See also [`lightened`](#class_color_method_lightened).



```gdscript

    var green = Color(0.0, 1.0, 0.0)
    var darkgreen = green.darkened(0.2) # 20% darker than regular green
```

```csharp

    var green = new Color(0.0f, 1.0f, 0.0f);
    Color darkgreen = green.Darkened(0.2f); // 20% darker than regular green
```







<!-- rst-class:: classref-item-separator -->

---

<div id="_class_color_method_from_hsv"></div>

[`Color`](class_color.md) **from_hsv** ( h: [`float`](class_float.md), s: [`float`](class_float.md), v: [`float`](class_float.md), alpha: [`float`](class_float.md) = 1.0 ) static[^static]<div id="class_color_method_from_hsv"></div>

Constructs a color from an [*HSV profile*](https://en.wikipedia.org/wiki/HSL_and_HSV). The hue (`h`), saturation (`s`), and value (`v`) are typically between 0.0 and 1.0.



```gdscript

    var color = Color.from_hsv(0.58, 0.5, 0.79, 0.8)
```

```csharp

    var color = Color.FromHsv(0.58f, 0.5f, 0.79f, 0.8f);
```







<!-- rst-class:: classref-item-separator -->

---

<div id="_class_color_method_from_ok_hsl"></div>

[`Color`](class_color.md) **from_ok_hsl** ( h: [`float`](class_float.md), s: [`float`](class_float.md), l: [`float`](class_float.md), alpha: [`float`](class_float.md) = 1.0 ) static[^static]<div id="class_color_method_from_ok_hsl"></div>

Constructs a color from an [*OK HSL profile*](https://bottosson.github.io/posts/colorpicker/). The hue (`h`), saturation (`s`), and lightness (`l`) are typically between 0.0 and 1.0.



```gdscript

    var color = Color.from_ok_hsl(0.58, 0.5, 0.79, 0.8)
```

```csharp

    var color = Color.FromOkHsl(0.58f, 0.5f, 0.79f, 0.8f);
```







<!-- rst-class:: classref-item-separator -->

---

<div id="_class_color_method_from_rgbe9995"></div>

[`Color`](class_color.md) **from_rgbe9995** ( rgbe: [`int`](class_int.md) ) static[^static]<div id="class_color_method_from_rgbe9995"></div>

Decodes a **Color** from an RGBE9995 format integer. See [`Image.FORMAT_RGBE9995`](#class_image_constant_format_rgbe9995).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_color_method_from_string"></div>

[`Color`](class_color.md) **from_string** ( str: [`String`](class_string.md), default: [`Color`](class_color.md) ) static[^static]<div id="class_color_method_from_string"></div>

Creates a **Color** from the given string, which can be either an HTML color code or a named color (case-insensitive). Returns `default` if the color cannot be inferred from the string.

If you want to create a color from String in a constant expression, use the equivalent constructor instead (i.e. `Color("color string")`).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_color_method_get_luminance"></div>

[`float`](class_float.md) **get_luminance** ( ) const[^const]<div id="class_color_method_get_luminance"></div>

Returns the light intensity of the color, as a value between 0.0 and 1.0 (inclusive). This is useful when determining light or dark color. Colors with a luminance smaller than 0.5 can be generally considered dark.

 **Note:** [`get_luminance`](#class_color_method_get_luminance) relies on the color being in the linear color space to return an accurate relative luminance value. If the color is in the sRGB color space, use [`srgb_to_linear`](#class_color_method_srgb_to_linear) to convert it to the linear color space first.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_color_method_hex"></div>

[`Color`](class_color.md) **hex** ( hex: [`int`](class_int.md) ) static[^static]<div id="class_color_method_hex"></div>

Returns the **Color** associated with the provided `hex` integer in 32-bit RGBA format (8 bits per channel). This method is the inverse of [`to_rgba32`](#class_color_method_to_rgba32).

In GDScript and C#, the [`int`](class_int.md) is best visualized with hexadecimal notation (`"0x"` prefix, making it `"0xRRGGBBAA"`).



```gdscript

    var red = Color.hex(0xff0000ff)
    var dark_cyan = Color.hex(0x008b8bff)
    var my_color = Color.hex(0xbbefd2a4)
```

```csharp

    var red = new Color(0xff0000ff);
    var dark_cyan = new Color(0x008b8bff);
    var my_color = new Color(0xbbefd2a4);
```



If you want to use hex notation in a constant expression, use the equivalent constructor instead (i.e. `Color(0xRRGGBBAA)`).





<!-- rst-class:: classref-item-separator -->

---

<div id="_class_color_method_hex64"></div>

[`Color`](class_color.md) **hex64** ( hex: [`int`](class_int.md) ) static[^static]<div id="class_color_method_hex64"></div>

Returns the **Color** associated with the provided `hex` integer in 64-bit RGBA format (16 bits per channel). This method is the inverse of [`to_rgba64`](#class_color_method_to_rgba64).

In GDScript and C#, the [`int`](class_int.md) is best visualized with hexadecimal notation (`"0x"` prefix, making it `"0xRRRRGGGGBBBBAAAA"`).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_color_method_html"></div>

[`Color`](class_color.md) **html** ( rgba: [`String`](class_string.md) ) static[^static]<div id="class_color_method_html"></div>

Returns a new color from `rgba`, an HTML hexadecimal color string. `rgba` is not case-sensitive, and may be prefixed by a hash sign (`#`).

 `rgba` must be a valid three-digit or six-digit hexadecimal color string, and may contain an alpha channel value. If `rgba` does not contain an alpha channel value, an alpha channel value of 1.0 is applied. If `rgba` is invalid, returns an empty color.



```gdscript

    var blue = Color.html("#0000ff") # blue is Color(0.0, 0.0, 1.0, 1.0)
    var green = Color.html("#0F0")   # green is Color(0.0, 1.0, 0.0, 1.0)
    var col = Color.html("663399cc") # col is Color(0.4, 0.2, 0.6, 0.8)
```

```csharp

    var blue = Color.FromHtml("#0000ff"); // blue is Color(0.0, 0.0, 1.0, 1.0)
    var green = Color.FromHtml("#0F0");   // green is Color(0.0, 1.0, 0.0, 1.0)
    var col = Color.FromHtml("663399cc"); // col is Color(0.4, 0.2, 0.6, 0.8)
```







<!-- rst-class:: classref-item-separator -->

---

<div id="_class_color_method_html_is_valid"></div>

[`bool`](class_bool.md) **html_is_valid** ( color: [`String`](class_string.md) ) static[^static]<div id="class_color_method_html_is_valid"></div>

Returns `true` if `color` is a valid HTML hexadecimal color string. The string must be a hexadecimal value (case-insensitive) of either 3, 4, 6 or 8 digits, and may be prefixed by a hash sign (`#`). This method is identical to [`String.is_valid_html_color`](#class_string_method_is_valid_html_color).



```gdscript

    Color.html_is_valid("#55aaFF")   # Returns true
    Color.html_is_valid("#55AAFF20") # Returns true
    Color.html_is_valid("55AAFF")    # Returns true
    Color.html_is_valid("#F2C")      # Returns true
    
    Color.html_is_valid("#AABBC")    # Returns false
    Color.html_is_valid("#55aaFF5")  # Returns false
```

```csharp

    Color.HtmlIsValid("#55AAFF");   // Returns true
    Color.HtmlIsValid("#55AAFF20"); // Returns true
    Color.HtmlIsValid("55AAFF");    // Returns true
    Color.HtmlIsValid("#F2C");      // Returns true
    
    Color.HtmlIsValid("#AABBC");    // Returns false
    Color.HtmlIsValid("#55aaFF5");  // Returns false
```







<!-- rst-class:: classref-item-separator -->

---

<div id="_class_color_method_inverted"></div>

[`Color`](class_color.md) **inverted** ( ) const[^const]<div id="class_color_method_inverted"></div>

Returns the color with its [`r`](#class_color_property_r), [`g`](#class_color_property_g), and [`b`](#class_color_property_b) components inverted (`(1 - r, 1 - g, 1 - b, a)`).



```gdscript

    var black = Color.WHITE.inverted()
    var color = Color(0.3, 0.4, 0.9)
    var inverted_color = color.inverted() # Equivalent to `Color(0.7, 0.6, 0.1)`
```

```csharp

    var black = Colors.White.Inverted();
    var color = new Color(0.3f, 0.4f, 0.9f);
    Color invertedColor = color.Inverted(); // Equivalent to `new Color(0.7f, 0.6f, 0.1f)`
```







<!-- rst-class:: classref-item-separator -->

---

<div id="_class_color_method_is_equal_approx"></div>

[`bool`](class_bool.md) **is_equal_approx** ( to: [`Color`](class_color.md) ) const[^const]<div id="class_color_method_is_equal_approx"></div>

Returns `true` if this color and `to` are approximately equal, by running [`@GlobalScope.is_equal_approx`](#class_@globalscope_method_is_equal_approx) on each component.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_color_method_lerp"></div>

[`Color`](class_color.md) **lerp** ( to: [`Color`](class_color.md), weight: [`float`](class_float.md) ) const[^const]<div id="class_color_method_lerp"></div>

Returns the linear interpolation between this color's components and `to`'s components. The interpolation factor `weight` should be between 0.0 and 1.0 (inclusive). See also [`@GlobalScope.lerp`](#class_@globalscope_method_lerp).



```gdscript

    var red = Color(1.0, 0.0, 0.0)
    var aqua = Color(0.0, 1.0, 0.8)
    
    red.lerp(aqua, 0.2) # Returns Color(0.8, 0.2, 0.16)
    red.lerp(aqua, 0.5) # Returns Color(0.5, 0.5, 0.4)
    red.lerp(aqua, 1.0) # Returns Color(0.0, 1.0, 0.8)
```

```csharp

    var red = new Color(1.0f, 0.0f, 0.0f);
    var aqua = new Color(0.0f, 1.0f, 0.8f);
    
    red.Lerp(aqua, 0.2f); // Returns Color(0.8f, 0.2f, 0.16f)
    red.Lerp(aqua, 0.5f); // Returns Color(0.5f, 0.5f, 0.4f)
    red.Lerp(aqua, 1.0f); // Returns Color(0.0f, 1.0f, 0.8f)
```







<!-- rst-class:: classref-item-separator -->

---

<div id="_class_color_method_lightened"></div>

[`Color`](class_color.md) **lightened** ( amount: [`float`](class_float.md) ) const[^const]<div id="class_color_method_lightened"></div>

Returns a new color resulting from making this color lighter by the specified `amount`, which should be a ratio from 0.0 to 1.0. See also [`darkened`](#class_color_method_darkened).



```gdscript

    var green = Color(0.0, 1.0, 0.0)
    var light_green = green.lightened(0.2) # 20% lighter than regular green
```

```csharp

    var green = new Color(0.0f, 1.0f, 0.0f);
    Color lightGreen = green.Lightened(0.2f); // 20% lighter than regular green
```







<!-- rst-class:: classref-item-separator -->

---

<div id="_class_color_method_linear_to_srgb"></div>

[`Color`](class_color.md) **linear_to_srgb** ( ) const[^const]<div id="class_color_method_linear_to_srgb"></div>

Returns the color converted to the [*sRGB*](https://en.wikipedia.org/wiki/SRGB) color space. This method assumes the original color is in the linear color space. See also [`srgb_to_linear`](#class_color_method_srgb_to_linear) which performs the opposite operation.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_color_method_srgb_to_linear"></div>

[`Color`](class_color.md) **srgb_to_linear** ( ) const[^const]<div id="class_color_method_srgb_to_linear"></div>

Returns the color converted to the linear color space. This method assumes the original color already is in the sRGB color space. See also [`linear_to_srgb`](#class_color_method_linear_to_srgb) which performs the opposite operation.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_color_method_to_abgr32"></div>

[`int`](class_int.md) **to_abgr32** ( ) const[^const]<div id="class_color_method_to_abgr32"></div>

Returns the color converted to a 32-bit integer in ABGR format (each component is 8 bits). ABGR is the reversed version of the default RGBA format.



```gdscript

    var color = Color(1, 0.5, 0.2)
    print(color.to_abgr32()) # Prints 4281565439
```

```csharp

    var color = new Color(1.0f, 0.5f, 0.2f);
    GD.Print(color.ToAbgr32()); // Prints 4281565439
```







<!-- rst-class:: classref-item-separator -->

---

<div id="_class_color_method_to_abgr64"></div>

[`int`](class_int.md) **to_abgr64** ( ) const[^const]<div id="class_color_method_to_abgr64"></div>

Returns the color converted to a 64-bit integer in ABGR format (each component is 16 bits). ABGR is the reversed version of the default RGBA format.



```gdscript

    var color = Color(1, 0.5, 0.2)
    print(color.to_abgr64()) # Prints -225178692812801
```

```csharp

    var color = new Color(1.0f, 0.5f, 0.2f);
    GD.Print(color.ToAbgr64()); // Prints -225178692812801
```







<!-- rst-class:: classref-item-separator -->

---

<div id="_class_color_method_to_argb32"></div>

[`int`](class_int.md) **to_argb32** ( ) const[^const]<div id="class_color_method_to_argb32"></div>

Returns the color converted to a 32-bit integer in ARGB format (each component is 8 bits). ARGB is more compatible with DirectX.



```gdscript

    var color = Color(1, 0.5, 0.2)
    print(color.to_argb32()) # Prints 4294934323
```

```csharp

    var color = new Color(1.0f, 0.5f, 0.2f);
    GD.Print(color.ToArgb32()); // Prints 4294934323
```







<!-- rst-class:: classref-item-separator -->

---

<div id="_class_color_method_to_argb64"></div>

[`int`](class_int.md) **to_argb64** ( ) const[^const]<div id="class_color_method_to_argb64"></div>

Returns the color converted to a 64-bit integer in ARGB format (each component is 16 bits). ARGB is more compatible with DirectX.



```gdscript

    var color = Color(1, 0.5, 0.2)
    print(color.to_argb64()) # Prints -2147470541
```

```csharp

    var color = new Color(1.0f, 0.5f, 0.2f);
    GD.Print(color.ToArgb64()); // Prints -2147470541
```







<!-- rst-class:: classref-item-separator -->

---

<div id="_class_color_method_to_html"></div>

[`String`](class_string.md) **to_html** ( with_alpha: [`bool`](class_bool.md) = true ) const[^const]<div id="class_color_method_to_html"></div>

Returns the color converted to an HTML hexadecimal color [`String`](class_string.md) in RGBA format, without the hash (`#`) prefix.

Setting `with_alpha` to `false`, excludes alpha from the hexadecimal string, using RGB format instead of RGBA format.



```gdscript

    var white = Color(1, 1, 1, 0.5)
    var with_alpha = white.to_html() # Returns "ffffff7f"
    var without_alpha = white.to_html(false) # Returns "ffffff"
```

```csharp

    var white = new Color(1, 1, 1, 0.5f);
    string withAlpha = white.ToHtml(); // Returns "ffffff7f"
    string withoutAlpha = white.ToHtml(false); // Returns "ffffff"
```







<!-- rst-class:: classref-item-separator -->

---

<div id="_class_color_method_to_rgba32"></div>

[`int`](class_int.md) **to_rgba32** ( ) const[^const]<div id="class_color_method_to_rgba32"></div>

Returns the color converted to a 32-bit integer in RGBA format (each component is 8 bits). RGBA is Godot's default format. This method is the inverse of [`hex`](#class_color_method_hex).



```gdscript

    var color = Color(1, 0.5, 0.2)
    print(color.to_rgba32()) # Prints 4286526463
```

```csharp

    var color = new Color(1, 0.5f, 0.2f);
    GD.Print(color.ToRgba32()); // Prints 4286526463
```







<!-- rst-class:: classref-item-separator -->

---

<div id="_class_color_method_to_rgba64"></div>

[`int`](class_int.md) **to_rgba64** ( ) const[^const]<div id="class_color_method_to_rgba64"></div>

Returns the color converted to a 64-bit integer in RGBA format (each component is 16 bits). RGBA is Godot's default format. This method is the inverse of [`hex64`](#class_color_method_hex64).



```gdscript

    var color = Color(1, 0.5, 0.2)
    print(color.to_rgba64()) # Prints -140736629309441
```

```csharp

    var color = new Color(1, 0.5f, 0.2f);
    GD.Print(color.ToRgba64()); // Prints -140736629309441
```







<!-- rst-class:: classref-section-separator -->

---

## 运算符说明

<div id="_class_color_operator_neq_color"></div>

[`bool`](class_bool.md) **operator !=** ( right: [`Color`](class_color.md) ) <div id="class_color_operator_neq_color"></div>

Returns `true` if the colors are not exactly equal.

 **Note:** Due to floating-point precision errors, consider using [`is_equal_approx`](#class_color_method_is_equal_approx) instead, which is more reliable.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_color_operator_mul_color"></div>

[`Color`](class_color.md) **operator *** ( right: [`Color`](class_color.md) ) <div id="class_color_operator_mul_color"></div>

Multiplies each component of the **Color** by the components of the given **Color**.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_color_operator_mul_float"></div>

[`Color`](class_color.md) **operator *** ( right: [`float`](class_float.md) ) <div id="class_color_operator_mul_float"></div>

Multiplies each component of the **Color** by the given [`float`](class_float.md).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_color_operator_mul_int"></div>

[`Color`](class_color.md) **operator *** ( right: [`int`](class_int.md) ) <div id="class_color_operator_mul_int"></div>

Multiplies each component of the **Color** by the given [`int`](class_int.md).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_color_operator_sum_color"></div>

[`Color`](class_color.md) **operator +** ( right: [`Color`](class_color.md) ) <div id="class_color_operator_sum_color"></div>

Adds each component of the **Color** with the components of the given **Color**.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_color_operator_dif_color"></div>

[`Color`](class_color.md) **operator -** ( right: [`Color`](class_color.md) ) <div id="class_color_operator_dif_color"></div>

Subtracts each component of the **Color** by the components of the given **Color**.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_color_operator_div_color"></div>

[`Color`](class_color.md) **operator /** ( right: [`Color`](class_color.md) ) <div id="class_color_operator_div_color"></div>

Divides each component of the **Color** by the components of the given **Color**.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_color_operator_div_float"></div>

[`Color`](class_color.md) **operator /** ( right: [`float`](class_float.md) ) <div id="class_color_operator_div_float"></div>

Divides each component of the **Color** by the given [`float`](class_float.md).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_color_operator_div_int"></div>

[`Color`](class_color.md) **operator /** ( right: [`int`](class_int.md) ) <div id="class_color_operator_div_int"></div>

Divides each component of the **Color** by the given [`int`](class_int.md).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_color_operator_eq_color"></div>

[`bool`](class_bool.md) **operator ==** ( right: [`Color`](class_color.md) ) <div id="class_color_operator_eq_color"></div>

Returns `true` if the colors are exactly equal.

 **Note:** Due to floating-point precision errors, consider using [`is_equal_approx`](#class_color_method_is_equal_approx) instead, which is more reliable.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_color_operator_idx_int"></div>

[`float`](class_float.md) **operator []** ( index: [`int`](class_int.md) ) <div id="class_color_operator_idx_int"></div>

Access color components using their index. `[0]` is equivalent to [`r`](#class_color_property_r), `[1]` is equivalent to [`g`](#class_color_property_g), `[2]` is equivalent to [`b`](#class_color_property_b), and `[3]` is equivalent to [`a`](#class_color_property_a).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_color_operator_unplus"></div>

[`Color`](class_color.md) **operator unary+** ( ) <div id="class_color_operator_unplus"></div>

Returns the same value as if the `+` was not there. Unary `+` does nothing, but sometimes it can make your code more readable.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_color_operator_unminus"></div>

[`Color`](class_color.md) **operator unary-** ( ) <div id="class_color_operator_unminus"></div>

Inverts the given color. This is equivalent to `Color.WHITE - c` or `Color(1 - c.r, 1 - c.g, 1 - c.b, 1 - c.a)`. Unlike with [`inverted`](#class_color_method_inverted), the [`a`](#class_color_property_a) component is inverted, too.

[^virtual]: 本方法通常需要用户覆盖才能生效。
[^const]: 本方法无副作用，不会修改该实例的任何成员变量。
[^vararg]: 本方法除了能接受在此处描述的参数外，还能够继续接受任意数量的参数。
[^constructor]: 本方法用于构造某个类型。
[^static]: 调用本方法无需实例，可直接使用类名进行调用。
[^operator]: 本方法描述的是使用本类型作为左操作数的有效运算符。
[^bitfield]: 这个值是由下列位标志构成位掩码的整数。
[^void]: 无返回值。
