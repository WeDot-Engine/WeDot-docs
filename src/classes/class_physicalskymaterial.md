<!-- ⚠ 请勿编辑本文件 ⚠ -->
<!-- 本文档使用脚本从 WeDot 引擎源码仓库生成。 -->
<!-- 生成脚本：https://github.com/WeDot-Engine/WeDot/tree/4.3/doc/tools/make_md.py； -->
<!-- 原文件：https://github.com/WeDot-Engine/WeDot/tree/4.3/doc/classes/PhysicalSkyMaterial.xml。 -->

<div id="_class_physicalskymaterial"></div>

# PhysicalSkyMaterial

**继承：** [`Material`](class_material.md) **<** [`Resource`](class_resource.md) **<** [`RefCounted`](class_refcounted.md) **<** [`Object`](class_object.md)

A material that defines a sky for a [`Sky`](class_sky.md) resource by a set of physical properties.

## 描述

The **PhysicalSkyMaterial** uses the Preetham analytic daylight model to draw a sky based on physical properties. This results in a substantially more realistic sky than the [`ProceduralSkyMaterial`](class_proceduralskymaterial.md), but it is slightly slower and less flexible.

The **PhysicalSkyMaterial** only supports one sun. The color, energy, and direction of the sun are taken from the first [`DirectionalLight3D`](class_directionallight3d.md) in the scene tree.

## 属性

| [`float`](class_float.md)         | [`energy_multiplier`](#class_physicalskymaterial_property_energy_multiplier)       | ``1.0``                          |
| [`Color`](class_color.md)         | [`ground_color`](#class_physicalskymaterial_property_ground_color)                 | ``Color(0.1, 0.07, 0.034, 1)``   |
| [`float`](class_float.md)         | [`mie_coefficient`](#class_physicalskymaterial_property_mie_coefficient)           | ``0.005``                        |
| [`Color`](class_color.md)         | [`mie_color`](#class_physicalskymaterial_property_mie_color)                       | ``Color(0.69, 0.729, 0.812, 1)`` |
| [`float`](class_float.md)         | [`mie_eccentricity`](#class_physicalskymaterial_property_mie_eccentricity)         | ``0.8``                          |
| [`Texture2D`](class_texture2d.md) | [`night_sky`](#class_physicalskymaterial_property_night_sky)                       |                                  |
| [`float`](class_float.md)         | [`rayleigh_coefficient`](#class_physicalskymaterial_property_rayleigh_coefficient) | ``2.0``                          |
| [`Color`](class_color.md)         | [`rayleigh_color`](#class_physicalskymaterial_property_rayleigh_color)             | ``Color(0.3, 0.405, 0.6, 1)``    |
| [`float`](class_float.md)         | [`sun_disk_scale`](#class_physicalskymaterial_property_sun_disk_scale)             | ``1.0``                          |
| [`float`](class_float.md)         | [`turbidity`](#class_physicalskymaterial_property_turbidity)                       | ``10.0``                         |
| [`bool`](class_bool.md)           | [`use_debanding`](#class_physicalskymaterial_property_use_debanding)               | ``true``                         |

<!-- rst-class:: classref-section-separator -->

---

## 属性说明

<div id="_class_physicalskymaterial_property_energy_multiplier"></div>

[`float`](class_float.md) **energy_multiplier** = ``1.0`` <div id="class_physicalskymaterial_property_energy_multiplier"></div>

- `void` **set_energy_multiplier** ( value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_energy_multiplier** ( )

The sky's overall brightness multiplier. Higher values result in a brighter sky.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicalskymaterial_property_ground_color"></div>

[`Color`](class_color.md) **ground_color** = ``Color(0.1, 0.07, 0.034, 1)`` <div id="class_physicalskymaterial_property_ground_color"></div>

- `void` **set_ground_color** ( value: [`Color`](class_color.md) )
- [`Color`](class_color.md) **get_ground_color** ( )

Modulates the [`Color`](class_color.md) on the bottom half of the sky to represent the ground.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicalskymaterial_property_mie_coefficient"></div>

[`float`](class_float.md) **mie_coefficient** = ``0.005`` <div id="class_physicalskymaterial_property_mie_coefficient"></div>

- `void` **set_mie_coefficient** ( value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_mie_coefficient** ( )

Controls the strength of [*Mie scattering*](https://en.wikipedia.org/wiki/Mie_scattering) for the sky. Mie scattering results from light colliding with larger particles (like water). On earth, Mie scattering results in a whitish color around the sun and horizon.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicalskymaterial_property_mie_color"></div>

[`Color`](class_color.md) **mie_color** = ``Color(0.69, 0.729, 0.812, 1)`` <div id="class_physicalskymaterial_property_mie_color"></div>

- `void` **set_mie_color** ( value: [`Color`](class_color.md) )
- [`Color`](class_color.md) **get_mie_color** ( )

Controls the [`Color`](class_color.md) of the [*Mie scattering*](https://en.wikipedia.org/wiki/Mie_scattering) effect. While not physically accurate, this allows for the creation of alien-looking planets.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicalskymaterial_property_mie_eccentricity"></div>

[`float`](class_float.md) **mie_eccentricity** = ``0.8`` <div id="class_physicalskymaterial_property_mie_eccentricity"></div>

- `void` **set_mie_eccentricity** ( value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_mie_eccentricity** ( )

Controls the direction of the [*Mie scattering*](https://en.wikipedia.org/wiki/Mie_scattering). A value of `1` means that when light hits a particle it's passing through straight forward. A value of `-1` means that all light is scatter backwards.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicalskymaterial_property_night_sky"></div>

[`Texture2D`](class_texture2d.md) **night_sky** <div id="class_physicalskymaterial_property_night_sky"></div>

- `void` **set_night_sky** ( value: [`Texture2D`](class_texture2d.md) )
- [`Texture2D`](class_texture2d.md) **get_night_sky** ( )

[`Texture2D`](class_texture2d.md) for the night sky. This is added to the sky, so if it is bright enough, it may be visible during the day.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicalskymaterial_property_rayleigh_coefficient"></div>

[`float`](class_float.md) **rayleigh_coefficient** = ``2.0`` <div id="class_physicalskymaterial_property_rayleigh_coefficient"></div>

- `void` **set_rayleigh_coefficient** ( value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_rayleigh_coefficient** ( )

Controls the strength of the [*Rayleigh scattering*](https://en.wikipedia.org/wiki/Rayleigh_scattering). Rayleigh scattering results from light colliding with small particles. It is responsible for the blue color of the sky.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicalskymaterial_property_rayleigh_color"></div>

[`Color`](class_color.md) **rayleigh_color** = ``Color(0.3, 0.405, 0.6, 1)`` <div id="class_physicalskymaterial_property_rayleigh_color"></div>

- `void` **set_rayleigh_color** ( value: [`Color`](class_color.md) )
- [`Color`](class_color.md) **get_rayleigh_color** ( )

Controls the [`Color`](class_color.md) of the [*Rayleigh scattering*](https://en.wikipedia.org/wiki/Rayleigh_scattering). While not physically accurate, this allows for the creation of alien-looking planets. For example, setting this to a red [`Color`](class_color.md) results in a Mars-looking atmosphere with a corresponding blue sunset.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicalskymaterial_property_sun_disk_scale"></div>

[`float`](class_float.md) **sun_disk_scale** = ``1.0`` <div id="class_physicalskymaterial_property_sun_disk_scale"></div>

- `void` **set_sun_disk_scale** ( value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_sun_disk_scale** ( )

Sets the size of the sun disk. Default value is based on Sol's perceived size from Earth.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicalskymaterial_property_turbidity"></div>

[`float`](class_float.md) **turbidity** = ``10.0`` <div id="class_physicalskymaterial_property_turbidity"></div>

- `void` **set_turbidity** ( value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_turbidity** ( )

Sets the thickness of the atmosphere. High turbidity creates a foggy-looking atmosphere, while a low turbidity results in a clearer atmosphere.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicalskymaterial_property_use_debanding"></div>

[`bool`](class_bool.md) **use_debanding** = ``true`` <div id="class_physicalskymaterial_property_use_debanding"></div>

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
