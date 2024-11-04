<!-- ⚠ 请勿编辑本文件 ⚠ -->
<!-- 本文档使用脚本从 WeDot 引擎源码仓库生成。 -->
<!-- 生成脚本：https://github.com/WeDot-Engine/WeDot/tree/4.3/doc/tools/make_md.py； -->
<!-- 原文件：https://github.com/WeDot-Engine/WeDot/tree/4.3/doc/classes/ColorPicker.xml。 -->

<div id="_class_colorpicker"></div>

# ColorPicker

**继承：** [`VBoxContainer`](class_vboxcontainer.md) **<** [`BoxContainer`](class_boxcontainer.md) **<** [`Container`](class_container.md) **<** [`Control`](class_control.md) **<** [`CanvasItem`](class_canvasitem.md) **<** [`Node`](class_node.md) **<** [`Object`](class_object.md)

A widget that provides an interface for selecting or modifying a color.

## 描述

A widget that provides an interface for selecting or modifying a color. It can optionally provide functionalities like a color sampler (eyedropper), color modes, and presets.

 **Note:** This control is the color picker widget itself. You can use a [`ColorPickerButton`](class_colorpickerbutton.md) instead if you need a button that brings up a **ColorPicker** in a popup.

## 属性

| [`bool`](class_bool.md)                              | [`can_add_swatches`](#class_colorpicker_property_can_add_swatches)       | ``true``              |
| [`Color`](class_color.md)                            | [`color`](#class_colorpicker_property_color)                             | ``Color(1, 1, 1, 1)`` |
| [ColorModeType](#enum_colorpicker_colormodetype)     | [`color_mode`](#class_colorpicker_property_color_mode)                   | ``0``                 |
| [`bool`](class_bool.md)                              | [`color_modes_visible`](#class_colorpicker_property_color_modes_visible) | ``true``              |
| [`bool`](class_bool.md)                              | [`deferred_mode`](#class_colorpicker_property_deferred_mode)             | ``false``             |
| [`bool`](class_bool.md)                              | [`edit_alpha`](#class_colorpicker_property_edit_alpha)                   | ``true``              |
| [`bool`](class_bool.md)                              | [`hex_visible`](#class_colorpicker_property_hex_visible)                 | ``true``              |
| [PickerShapeType](#enum_colorpicker_pickershapetype) | [`picker_shape`](#class_colorpicker_property_picker_shape)               | ``0``                 |
| [`bool`](class_bool.md)                              | [`presets_visible`](#class_colorpicker_property_presets_visible)         | ``true``              |
| [`bool`](class_bool.md)                              | [`sampler_visible`](#class_colorpicker_property_sampler_visible)         | ``true``              |
| [`bool`](class_bool.md)                              | [`sliders_visible`](#class_colorpicker_property_sliders_visible)         | ``true``              |

## 方法

| `void`                                          | [`add_preset`](#class_colorpicker_method_add_preset) ( color: [`Color`](class_color.md) )                   |
| `void`                                          | [`add_recent_preset`](#class_colorpicker_method_add_recent_preset) ( color: [`Color`](class_color.md) )     |
| `void`                                          | [`erase_preset`](#class_colorpicker_method_erase_preset) ( color: [`Color`](class_color.md) )               |
| `void`                                          | [`erase_recent_preset`](#class_colorpicker_method_erase_recent_preset) ( color: [`Color`](class_color.md) ) |
| [`PackedColorArray`](class_packedcolorarray.md) | [`get_presets`](#class_colorpicker_method_get_presets) ( ) const[^const]                                    |
| [`PackedColorArray`](class_packedcolorarray.md) | [`get_recent_presets`](#class_colorpicker_method_get_recent_presets) ( ) const[^const]                      |

## 主题属性

| [`int`](class_int.md)             | [`center_slider_grabbers`](#class_colorpicker_theme_constant_center_slider_grabbers) | ``1``   |
| [`int`](class_int.md)             | [`h_width`](#class_colorpicker_theme_constant_h_width)                               | ``30``  |
| [`int`](class_int.md)             | [`label_width`](#class_colorpicker_theme_constant_label_width)                       | ``10``  |
| [`int`](class_int.md)             | [`margin`](#class_colorpicker_theme_constant_margin)                                 | ``4``   |
| [`int`](class_int.md)             | [`sv_height`](#class_colorpicker_theme_constant_sv_height)                           | ``256`` |
| [`int`](class_int.md)             | [`sv_width`](#class_colorpicker_theme_constant_sv_width)                             | ``256`` |
| [`Texture2D`](class_texture2d.md) | [`add_preset`](#class_colorpicker_theme_icon_add_preset)                             |         |
| [`Texture2D`](class_texture2d.md) | [`bar_arrow`](#class_colorpicker_theme_icon_bar_arrow)                               |         |
| [`Texture2D`](class_texture2d.md) | [`color_hue`](#class_colorpicker_theme_icon_color_hue)                               |         |
| [`Texture2D`](class_texture2d.md) | [`color_okhsl_hue`](#class_colorpicker_theme_icon_color_okhsl_hue)                   |         |
| [`Texture2D`](class_texture2d.md) | [`expanded_arrow`](#class_colorpicker_theme_icon_expanded_arrow)                     |         |
| [`Texture2D`](class_texture2d.md) | [`folded_arrow`](#class_colorpicker_theme_icon_folded_arrow)                         |         |
| [`Texture2D`](class_texture2d.md) | [`overbright_indicator`](#class_colorpicker_theme_icon_overbright_indicator)         |         |
| [`Texture2D`](class_texture2d.md) | [`picker_cursor`](#class_colorpicker_theme_icon_picker_cursor)                       |         |
| [`Texture2D`](class_texture2d.md) | [`sample_bg`](#class_colorpicker_theme_icon_sample_bg)                               |         |
| [`Texture2D`](class_texture2d.md) | [`sample_revert`](#class_colorpicker_theme_icon_sample_revert)                       |         |
| [`Texture2D`](class_texture2d.md) | [`screen_picker`](#class_colorpicker_theme_icon_screen_picker)                       |         |
| [`Texture2D`](class_texture2d.md) | [`shape_circle`](#class_colorpicker_theme_icon_shape_circle)                         |         |
| [`Texture2D`](class_texture2d.md) | [`shape_rect`](#class_colorpicker_theme_icon_shape_rect)                             |         |
| [`Texture2D`](class_texture2d.md) | [`shape_rect_wheel`](#class_colorpicker_theme_icon_shape_rect_wheel)                 |         |

<!-- rst-class:: classref-section-separator -->

---

## 信号

<div id="_class_class_colorpicker_signal_color_changed"></div>

**color_changed** ( color: [`Color`](class_color.md) ) <div id="class_colorpicker_signal_color_changed"></div>

Emitted when the color is changed.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_class_colorpicker_signal_preset_added"></div>

**preset_added** ( color: [`Color`](class_color.md) ) <div id="class_colorpicker_signal_preset_added"></div>

Emitted when a preset is added.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_class_colorpicker_signal_preset_removed"></div>

**preset_removed** ( color: [`Color`](class_color.md) ) <div id="class_colorpicker_signal_preset_removed"></div>

Emitted when a preset is removed.

<!-- rst-class:: classref-section-separator -->

---

## 枚举

<div id="_class_enum_colorpicker_colormodetype"></div>

enum **ColorModeType**: <div id="enum_colorpicker_colormodetype"></div>

<div id="_class_colorpicker_constant_mode_rgb"></div>

[ColorModeType](#enum_colorpicker_colormodetype) **MODE_RGB** = ``0``

Allows editing the color with Red/Green/Blue sliders.

<div id="_class_colorpicker_constant_mode_hsv"></div>

[ColorModeType](#enum_colorpicker_colormodetype) **MODE_HSV** = ``1``

Allows editing the color with Hue/Saturation/Value sliders.

<div id="_class_colorpicker_constant_mode_raw"></div>

[ColorModeType](#enum_colorpicker_colormodetype) **MODE_RAW** = ``2``

Allows the color R, G, B component values to go beyond 1.0, which can be used for certain special operations that require it (like tinting without darkening or rendering sprites in HDR).

<div id="_class_colorpicker_constant_mode_okhsl"></div>

[ColorModeType](#enum_colorpicker_colormodetype) **MODE_OKHSL** = ``3``

Allows editing the color with Hue/Saturation/Lightness sliders.

OKHSL is a new color space similar to HSL but that better match perception by leveraging the Oklab color space which is designed to be simple to use, while doing a good job at predicting perceived lightness, chroma and hue.

 [*Okhsv and Okhsl color spaces*](https://bottosson.github.io/posts/colorpicker/)

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_enum_colorpicker_pickershapetype"></div>

enum **PickerShapeType**: <div id="enum_colorpicker_pickershapetype"></div>

<div id="_class_colorpicker_constant_shape_hsv_rectangle"></div>

[PickerShapeType](#enum_colorpicker_pickershapetype) **SHAPE_HSV_RECTANGLE** = ``0``

HSV Color Model rectangle color space.

<div id="_class_colorpicker_constant_shape_hsv_wheel"></div>

[PickerShapeType](#enum_colorpicker_pickershapetype) **SHAPE_HSV_WHEEL** = ``1``

HSV Color Model rectangle color space with a wheel.

<div id="_class_colorpicker_constant_shape_vhs_circle"></div>

[PickerShapeType](#enum_colorpicker_pickershapetype) **SHAPE_VHS_CIRCLE** = ``2``

HSV Color Model circle color space. Use Saturation as a radius.

<div id="_class_colorpicker_constant_shape_okhsl_circle"></div>

[PickerShapeType](#enum_colorpicker_pickershapetype) **SHAPE_OKHSL_CIRCLE** = ``3``

HSL OK Color Model circle color space.

<div id="_class_colorpicker_constant_shape_none"></div>

[PickerShapeType](#enum_colorpicker_pickershapetype) **SHAPE_NONE** = ``4``

The color space shape and the shape select button are hidden. Can't be selected from the shapes popup.

<!-- rst-class:: classref-section-separator -->

---

## 属性说明

<div id="_class_colorpicker_property_can_add_swatches"></div>

[`bool`](class_bool.md) **can_add_swatches** = ``true`` <div id="class_colorpicker_property_can_add_swatches"></div>

- `void` **set_can_add_swatches** ( value: [`bool`](class_bool.md) )
- [`bool`](class_bool.md) **are_swatches_enabled** ( )

If `true`, it's possible to add presets under Swatches. If `false`, the button to add presets is disabled.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_colorpicker_property_color"></div>

[`Color`](class_color.md) **color** = ``Color(1, 1, 1, 1)`` <div id="class_colorpicker_property_color"></div>

- `void` **set_pick_color** ( value: [`Color`](class_color.md) )
- [`Color`](class_color.md) **get_pick_color** ( )

The currently selected color.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_colorpicker_property_color_mode"></div>

[ColorModeType](#enum_colorpicker_colormodetype) **color_mode** = ``0`` <div id="class_colorpicker_property_color_mode"></div>

- `void` **set_color_mode** ( value: [ColorModeType](#enum_colorpicker_colormodetype) )
- [ColorModeType](#enum_colorpicker_colormodetype) **get_color_mode** ( )

The currently selected color mode. See [ColorModeType](#enum_colorpicker_colormodetype).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_colorpicker_property_color_modes_visible"></div>

[`bool`](class_bool.md) **color_modes_visible** = ``true`` <div id="class_colorpicker_property_color_modes_visible"></div>

- `void` **set_modes_visible** ( value: [`bool`](class_bool.md) )
- [`bool`](class_bool.md) **are_modes_visible** ( )

If `true`, the color mode buttons are visible.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_colorpicker_property_deferred_mode"></div>

[`bool`](class_bool.md) **deferred_mode** = ``false`` <div id="class_colorpicker_property_deferred_mode"></div>

- `void` **set_deferred_mode** ( value: [`bool`](class_bool.md) )
- [`bool`](class_bool.md) **is_deferred_mode** ( )

If `true`, the color will apply only after the user releases the mouse button, otherwise it will apply immediately even in mouse motion event (which can cause performance issues).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_colorpicker_property_edit_alpha"></div>

[`bool`](class_bool.md) **edit_alpha** = ``true`` <div id="class_colorpicker_property_edit_alpha"></div>

- `void` **set_edit_alpha** ( value: [`bool`](class_bool.md) )
- [`bool`](class_bool.md) **is_editing_alpha** ( )

If `true`, shows an alpha channel slider (opacity).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_colorpicker_property_hex_visible"></div>

[`bool`](class_bool.md) **hex_visible** = ``true`` <div id="class_colorpicker_property_hex_visible"></div>

- `void` **set_hex_visible** ( value: [`bool`](class_bool.md) )
- [`bool`](class_bool.md) **is_hex_visible** ( )

If `true`, the hex color code input field is visible.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_colorpicker_property_picker_shape"></div>

[PickerShapeType](#enum_colorpicker_pickershapetype) **picker_shape** = ``0`` <div id="class_colorpicker_property_picker_shape"></div>

- `void` **set_picker_shape** ( value: [PickerShapeType](#enum_colorpicker_pickershapetype) )
- [PickerShapeType](#enum_colorpicker_pickershapetype) **get_picker_shape** ( )

The shape of the color space view. See [PickerShapeType](#enum_colorpicker_pickershapetype).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_colorpicker_property_presets_visible"></div>

[`bool`](class_bool.md) **presets_visible** = ``true`` <div id="class_colorpicker_property_presets_visible"></div>

- `void` **set_presets_visible** ( value: [`bool`](class_bool.md) )
- [`bool`](class_bool.md) **are_presets_visible** ( )

If `true`, the Swatches and Recent Colors presets are visible.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_colorpicker_property_sampler_visible"></div>

[`bool`](class_bool.md) **sampler_visible** = ``true`` <div id="class_colorpicker_property_sampler_visible"></div>

- `void` **set_sampler_visible** ( value: [`bool`](class_bool.md) )
- [`bool`](class_bool.md) **is_sampler_visible** ( )

If `true`, the color sampler and color preview are visible.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_colorpicker_property_sliders_visible"></div>

[`bool`](class_bool.md) **sliders_visible** = ``true`` <div id="class_colorpicker_property_sliders_visible"></div>

- `void` **set_sliders_visible** ( value: [`bool`](class_bool.md) )
- [`bool`](class_bool.md) **are_sliders_visible** ( )

If `true`, the color sliders are visible.

<!-- rst-class:: classref-section-separator -->

---

## 方法说明

<div id="_class_colorpicker_method_add_preset"></div>

`void` **add_preset** ( color: [`Color`](class_color.md) )<div id="class_colorpicker_method_add_preset"></div>

Adds the given color to a list of color presets. The presets are displayed in the color picker and the user will be able to select them.

 **Note:** The presets list is only for *this* color picker.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_colorpicker_method_add_recent_preset"></div>

`void` **add_recent_preset** ( color: [`Color`](class_color.md) )<div id="class_colorpicker_method_add_recent_preset"></div>

Adds the given color to a list of color recent presets so that it can be picked later. Recent presets are the colors that were picked recently, a new preset is automatically created and added to recent presets when you pick a new color.

 **Note:** The recent presets list is only for *this* color picker.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_colorpicker_method_erase_preset"></div>

`void` **erase_preset** ( color: [`Color`](class_color.md) )<div id="class_colorpicker_method_erase_preset"></div>

Removes the given color from the list of color presets of this color picker.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_colorpicker_method_erase_recent_preset"></div>

`void` **erase_recent_preset** ( color: [`Color`](class_color.md) )<div id="class_colorpicker_method_erase_recent_preset"></div>

Removes the given color from the list of color recent presets of this color picker.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_colorpicker_method_get_presets"></div>

[`PackedColorArray`](class_packedcolorarray.md) **get_presets** ( ) const[^const]<div id="class_colorpicker_method_get_presets"></div>

Returns the list of colors in the presets of the color picker.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_colorpicker_method_get_recent_presets"></div>

[`PackedColorArray`](class_packedcolorarray.md) **get_recent_presets** ( ) const[^const]<div id="class_colorpicker_method_get_recent_presets"></div>

Returns the list of colors in the recent presets of the color picker.

<!-- rst-class:: classref-section-separator -->

---

## 主题属性说明

<div id="_class_colorpicker_theme_constant_center_slider_grabbers"></div>

[`int`](class_int.md) **center_slider_grabbers** = ``1`` <div id="class_colorpicker_theme_constant_center_slider_grabbers"></div>

Overrides the [`Slider.center_grabber`](#class_slider_theme_constant_center_grabber) theme property of the sliders.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_colorpicker_theme_constant_h_width"></div>

[`int`](class_int.md) **h_width** = ``30`` <div id="class_colorpicker_theme_constant_h_width"></div>

The width of the hue selection slider.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_colorpicker_theme_constant_label_width"></div>

[`int`](class_int.md) **label_width** = ``10`` <div id="class_colorpicker_theme_constant_label_width"></div>

The minimum width of the color labels next to sliders.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_colorpicker_theme_constant_margin"></div>

[`int`](class_int.md) **margin** = ``4`` <div id="class_colorpicker_theme_constant_margin"></div>

The margin around the **ColorPicker**.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_colorpicker_theme_constant_sv_height"></div>

[`int`](class_int.md) **sv_height** = ``256`` <div id="class_colorpicker_theme_constant_sv_height"></div>

The height of the saturation-value selection box.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_colorpicker_theme_constant_sv_width"></div>

[`int`](class_int.md) **sv_width** = ``256`` <div id="class_colorpicker_theme_constant_sv_width"></div>

The width of the saturation-value selection box.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_colorpicker_theme_icon_add_preset"></div>

[`Texture2D`](class_texture2d.md) **add_preset** <div id="class_colorpicker_theme_icon_add_preset"></div>

The icon for the "Add Preset" button.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_colorpicker_theme_icon_bar_arrow"></div>

[`Texture2D`](class_texture2d.md) **bar_arrow** <div id="class_colorpicker_theme_icon_bar_arrow"></div>

The texture for the arrow grabber.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_colorpicker_theme_icon_color_hue"></div>

[`Texture2D`](class_texture2d.md) **color_hue** <div id="class_colorpicker_theme_icon_color_hue"></div>

Custom texture for the hue selection slider on the right.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_colorpicker_theme_icon_color_okhsl_hue"></div>

[`Texture2D`](class_texture2d.md) **color_okhsl_hue** <div id="class_colorpicker_theme_icon_color_okhsl_hue"></div>

Custom texture for the H slider in the OKHSL color mode.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_colorpicker_theme_icon_expanded_arrow"></div>

[`Texture2D`](class_texture2d.md) **expanded_arrow** <div id="class_colorpicker_theme_icon_expanded_arrow"></div>

The icon for color preset drop down menu when expanded.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_colorpicker_theme_icon_folded_arrow"></div>

[`Texture2D`](class_texture2d.md) **folded_arrow** <div id="class_colorpicker_theme_icon_folded_arrow"></div>

The icon for color preset drop down menu when folded.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_colorpicker_theme_icon_overbright_indicator"></div>

[`Texture2D`](class_texture2d.md) **overbright_indicator** <div id="class_colorpicker_theme_icon_overbright_indicator"></div>

The indicator used to signalize that the color value is outside the 0-1 range.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_colorpicker_theme_icon_picker_cursor"></div>

[`Texture2D`](class_texture2d.md) **picker_cursor** <div id="class_colorpicker_theme_icon_picker_cursor"></div>

The image displayed over the color box/circle (depending on the [`picker_shape`](#class_colorpicker_property_picker_shape)), marking the currently selected color.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_colorpicker_theme_icon_sample_bg"></div>

[`Texture2D`](class_texture2d.md) **sample_bg** <div id="class_colorpicker_theme_icon_sample_bg"></div>

Background panel for the color preview box (visible when the color is translucent).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_colorpicker_theme_icon_sample_revert"></div>

[`Texture2D`](class_texture2d.md) **sample_revert** <div id="class_colorpicker_theme_icon_sample_revert"></div>

The icon for the revert button (visible on the middle of the "old" color when it differs from the currently selected color). This icon is modulated with a dark color if the "old" color is bright enough, so the icon should be bright to ensure visibility in both scenarios.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_colorpicker_theme_icon_screen_picker"></div>

[`Texture2D`](class_texture2d.md) **screen_picker** <div id="class_colorpicker_theme_icon_screen_picker"></div>

The icon for the screen color picker button.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_colorpicker_theme_icon_shape_circle"></div>

[`Texture2D`](class_texture2d.md) **shape_circle** <div id="class_colorpicker_theme_icon_shape_circle"></div>

The icon for circular picker shapes.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_colorpicker_theme_icon_shape_rect"></div>

[`Texture2D`](class_texture2d.md) **shape_rect** <div id="class_colorpicker_theme_icon_shape_rect"></div>

The icon for rectangular picker shapes.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_colorpicker_theme_icon_shape_rect_wheel"></div>

[`Texture2D`](class_texture2d.md) **shape_rect_wheel** <div id="class_colorpicker_theme_icon_shape_rect_wheel"></div>

The icon for rectangular wheel picker shapes.

[^virtual]: 本方法通常需要用户覆盖才能生效。
[^const]: 本方法无副作用，不会修改该实例的任何成员变量。
[^vararg]: 本方法除了能接受在此处描述的参数外，还能够继续接受任意数量的参数。
[^constructor]: 本方法用于构造某个类型。
[^static]: 调用本方法无需实例，可直接使用类名进行调用。
[^operator]: 本方法描述的是使用本类型作为左操作数的有效运算符。
[^bitfield]: 这个值是由下列位标志构成位掩码的整数。
[^void]: 无返回值。
