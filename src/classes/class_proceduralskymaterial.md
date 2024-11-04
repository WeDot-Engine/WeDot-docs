<!-- ⚠ 请勿编辑本文件 ⚠ -->
<!-- 本文档使用脚本从 WeDot 引擎源码仓库生成。 -->
<!-- 生成脚本：https://github.com/WeDot-Engine/WeDot/tree/4.3/doc/tools/make_md.py； -->
<!-- 原文件：https://github.com/WeDot-Engine/WeDot/tree/4.3/doc/classes/ProceduralSkyMaterial.xml。 -->

<div id="_class_proceduralskymaterial"></div>

# ProceduralSkyMaterial

**继承：** [`Material`](class_material.md) **<** [`Resource`](class_resource.md) **<** [`RefCounted`](class_refcounted.md) **<** [`Object`](class_object.md)

A material that defines a simple sky for a [`Sky`](class_sky.md) resource.

## 描述

**ProceduralSkyMaterial** provides a way to create an effective background quickly by defining procedural parameters for the sun, the sky and the ground. The sky and ground are defined by a main color, a color at the horizon, and an easing curve to interpolate between them. Suns are described by a position in the sky, a color, and a max angle from the sun at which the easing curve ends. The max angle therefore defines the size of the sun in the sky.

 **ProceduralSkyMaterial** supports up to 4 suns, using the color, and energy, direction, and angular distance of the first four [`DirectionalLight3D`](class_directionallight3d.md) nodes in the scene. This means that the suns are defined individually by the properties of their corresponding [`DirectionalLight3D`](class_directionallight3d.md) s and globally by [`sun_angle_max`](#class_proceduralskymaterial_property_sun_angle_max) and [`sun_curve`](#class_proceduralskymaterial_property_sun_curve).

 **ProceduralSkyMaterial** uses a lightweight shader to draw the sky and is therefore suited for real-time updates. This makes it a great option for a sky that is simple and computationally cheap, but unrealistic. If you need a more realistic procedural option, use [`PhysicalSkyMaterial`](class_physicalskymaterial.md).

## 属性

| [`float`](class_float.md)         | [`energy_multiplier`](#class_proceduralskymaterial_property_energy_multiplier)               | ``1.0``                              |
| [`Color`](class_color.md)         | [`ground_bottom_color`](#class_proceduralskymaterial_property_ground_bottom_color)           | ``Color(0.2, 0.169, 0.133, 1)``      |
| [`float`](class_float.md)         | [`ground_curve`](#class_proceduralskymaterial_property_ground_curve)                         | ``0.02``                             |
| [`float`](class_float.md)         | [`ground_energy_multiplier`](#class_proceduralskymaterial_property_ground_energy_multiplier) | ``1.0``                              |
| [`Color`](class_color.md)         | [`ground_horizon_color`](#class_proceduralskymaterial_property_ground_horizon_color)         | ``Color(0.6463, 0.6558, 0.6708, 1)`` |
| [`Texture2D`](class_texture2d.md) | [`sky_cover`](#class_proceduralskymaterial_property_sky_cover)                               |                                      |
| [`Color`](class_color.md)         | [`sky_cover_modulate`](#class_proceduralskymaterial_property_sky_cover_modulate)             | ``Color(1, 1, 1, 1)``                |
| [`float`](class_float.md)         | [`sky_curve`](#class_proceduralskymaterial_property_sky_curve)                               | ``0.15``                             |
| [`float`](class_float.md)         | [`sky_energy_multiplier`](#class_proceduralskymaterial_property_sky_energy_multiplier)       | ``1.0``                              |
| [`Color`](class_color.md)         | [`sky_horizon_color`](#class_proceduralskymaterial_property_sky_horizon_color)               | ``Color(0.6463, 0.6558, 0.6708, 1)`` |
| [`Color`](class_color.md)         | [`sky_top_color`](#class_proceduralskymaterial_property_sky_top_color)                       | ``Color(0.385, 0.454, 0.55, 1)``     |
| [`float`](class_float.md)         | [`sun_angle_max`](#class_proceduralskymaterial_property_sun_angle_max)                       | ``30.0``                             |
| [`float`](class_float.md)         | [`sun_curve`](#class_proceduralskymaterial_property_sun_curve)                               | ``0.15``                             |
| [`bool`](class_bool.md)           | [`use_debanding`](#class_proceduralskymaterial_property_use_debanding)                       | ``true``                             |

<!-- rst-class:: classref-section-separator -->

---

## 属性说明

<div id="_class_proceduralskymaterial_property_energy_multiplier"></div>

[`float`](class_float.md) **energy_multiplier** = ``1.0`` <div id="class_proceduralskymaterial_property_energy_multiplier"></div>

- `void` **set_energy_multiplier** ( value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_energy_multiplier** ( )

The sky's overall brightness multiplier. Higher values result in a brighter sky.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_proceduralskymaterial_property_ground_bottom_color"></div>

[`Color`](class_color.md) **ground_bottom_color** = ``Color(0.2, 0.169, 0.133, 1)`` <div id="class_proceduralskymaterial_property_ground_bottom_color"></div>

- `void` **set_ground_bottom_color** ( value: [`Color`](class_color.md) )
- [`Color`](class_color.md) **get_ground_bottom_color** ( )

Color of the ground at the bottom. Blends with [`ground_horizon_color`](#class_proceduralskymaterial_property_ground_horizon_color).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_proceduralskymaterial_property_ground_curve"></div>

[`float`](class_float.md) **ground_curve** = ``0.02`` <div id="class_proceduralskymaterial_property_ground_curve"></div>

- `void` **set_ground_curve** ( value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_ground_curve** ( )

How quickly the [`ground_horizon_color`](#class_proceduralskymaterial_property_ground_horizon_color) fades into the [`ground_bottom_color`](#class_proceduralskymaterial_property_ground_bottom_color).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_proceduralskymaterial_property_ground_energy_multiplier"></div>

[`float`](class_float.md) **ground_energy_multiplier** = ``1.0`` <div id="class_proceduralskymaterial_property_ground_energy_multiplier"></div>

- `void` **set_ground_energy_multiplier** ( value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_ground_energy_multiplier** ( )

Multiplier for ground color. A higher value will make the ground brighter.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_proceduralskymaterial_property_ground_horizon_color"></div>

[`Color`](class_color.md) **ground_horizon_color** = ``Color(0.6463, 0.6558, 0.6708, 1)`` <div id="class_proceduralskymaterial_property_ground_horizon_color"></div>

- `void` **set_ground_horizon_color** ( value: [`Color`](class_color.md) )
- [`Color`](class_color.md) **get_ground_horizon_color** ( )

Color of the ground at the horizon. Blends with [`ground_bottom_color`](#class_proceduralskymaterial_property_ground_bottom_color).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_proceduralskymaterial_property_sky_cover"></div>

[`Texture2D`](class_texture2d.md) **sky_cover** <div id="class_proceduralskymaterial_property_sky_cover"></div>

- `void` **set_sky_cover** ( value: [`Texture2D`](class_texture2d.md) )
- [`Texture2D`](class_texture2d.md) **get_sky_cover** ( )

The sky cover texture to use. This texture must use an equirectangular projection (similar to [`PanoramaSkyMaterial`](class_panoramaskymaterial.md)). The texture's colors will be *added* to the existing sky color, and will be multiplied by [`sky_energy_multiplier`](#class_proceduralskymaterial_property_sky_energy_multiplier) and [`sky_cover_modulate`](#class_proceduralskymaterial_property_sky_cover_modulate). This is mainly suited to displaying stars at night, but it can also be used to display clouds at day or night (with a non-physically-accurate look).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_proceduralskymaterial_property_sky_cover_modulate"></div>

[`Color`](class_color.md) **sky_cover_modulate** = ``Color(1, 1, 1, 1)`` <div id="class_proceduralskymaterial_property_sky_cover_modulate"></div>

- `void` **set_sky_cover_modulate** ( value: [`Color`](class_color.md) )
- [`Color`](class_color.md) **get_sky_cover_modulate** ( )

The tint to apply to the [`sky_cover`](#class_proceduralskymaterial_property_sky_cover) texture. This can be used to change the sky cover's colors or opacity independently of the sky energy, which is useful for day/night or weather transitions. Only effective if a texture is defined in [`sky_cover`](#class_proceduralskymaterial_property_sky_cover).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_proceduralskymaterial_property_sky_curve"></div>

[`float`](class_float.md) **sky_curve** = ``0.15`` <div id="class_proceduralskymaterial_property_sky_curve"></div>

- `void` **set_sky_curve** ( value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_sky_curve** ( )

How quickly the [`sky_horizon_color`](#class_proceduralskymaterial_property_sky_horizon_color) fades into the [`sky_top_color`](#class_proceduralskymaterial_property_sky_top_color).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_proceduralskymaterial_property_sky_energy_multiplier"></div>

[`float`](class_float.md) **sky_energy_multiplier** = ``1.0`` <div id="class_proceduralskymaterial_property_sky_energy_multiplier"></div>

- `void` **set_sky_energy_multiplier** ( value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_sky_energy_multiplier** ( )

Multiplier for sky color. A higher value will make the sky brighter.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_proceduralskymaterial_property_sky_horizon_color"></div>

[`Color`](class_color.md) **sky_horizon_color** = ``Color(0.6463, 0.6558, 0.6708, 1)`` <div id="class_proceduralskymaterial_property_sky_horizon_color"></div>

- `void` **set_sky_horizon_color** ( value: [`Color`](class_color.md) )
- [`Color`](class_color.md) **get_sky_horizon_color** ( )

Color of the sky at the horizon. Blends with [`sky_top_color`](#class_proceduralskymaterial_property_sky_top_color).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_proceduralskymaterial_property_sky_top_color"></div>

[`Color`](class_color.md) **sky_top_color** = ``Color(0.385, 0.454, 0.55, 1)`` <div id="class_proceduralskymaterial_property_sky_top_color"></div>

- `void` **set_sky_top_color** ( value: [`Color`](class_color.md) )
- [`Color`](class_color.md) **get_sky_top_color** ( )

Color of the sky at the top. Blends with [`sky_horizon_color`](#class_proceduralskymaterial_property_sky_horizon_color).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_proceduralskymaterial_property_sun_angle_max"></div>

[`float`](class_float.md) **sun_angle_max** = ``30.0`` <div id="class_proceduralskymaterial_property_sun_angle_max"></div>

- `void` **set_sun_angle_max** ( value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_sun_angle_max** ( )

Distance from center of sun where it fades out completely.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_proceduralskymaterial_property_sun_curve"></div>

[`float`](class_float.md) **sun_curve** = ``0.15`` <div id="class_proceduralskymaterial_property_sun_curve"></div>

- `void` **set_sun_curve** ( value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_sun_curve** ( )

How quickly the sun fades away between the edge of the sun disk and [`sun_angle_max`](#class_proceduralskymaterial_property_sun_angle_max).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_proceduralskymaterial_property_use_debanding"></div>

[`bool`](class_bool.md) **use_debanding** = ``true`` <div id="class_proceduralskymaterial_property_use_debanding"></div>

- `void` **set_use_debanding** ( value: [`bool`](class_bool.md) )
- [`bool`](class_bool.md) **get_use_debanding** ( )

If `true`, enables debanding. Debanding adds a small amount of noise which helps reduce banding that appears from the smooth changes in color in the sky.

[^virtual]: 本方法通常需要用户覆盖才能生效。
[^const]: 本方法无副作用，不会修改该实例的任何成员变量。
[^vararg]: 本方法除了能接受在此处描述的参数外，还能够继续接受任意数量的参数。
[^constructor]: 本方法用于构造某个类型。
[^static]: 调用本方法无需实例，可直接使用类名进行调用。
[^operator]: 本方法描述的是使用本类型作为左操作数的有效运算符。
[^bitfield]: 这个值是由下列位标志构成位掩码的整数。
[^void]: 无返回值。
