<!-- ⚠ 请勿编辑本文件 ⚠ -->
<!-- 本文档使用脚本从 WeDot 引擎源码仓库生成。 -->
<!-- 生成脚本：https://github.com/WeDot-Engine/WeDot/tree/4.3/doc/tools/make_md.py； -->
<!-- 原文件：https://github.com/WeDot-Engine/WeDot/tree/4.3/modules/noise/doc_classes/FastNoiseLite.xml。 -->

<div id="_class_fastnoiselite"></div>

# FastNoiseLite

**继承：** [`Noise`](class_noise.md) **<** [`Resource`](class_resource.md) **<** [`RefCounted`](class_refcounted.md) **<** [`Object`](class_object.md)

Generates noise using the FastNoiseLite library.

## 描述

This class generates noise using the FastNoiseLite library, which is a collection of several noise algorithms including Cellular, Perlin, Value, and more.

Most generated noise values are in the range of `[-1, 1]`, but not always. Some of the cellular noise algorithms return results above `1`.

## 属性

| [CellularDistanceFunction](#enum_fastnoiselite_cellulardistancefunction) | [`cellular_distance_function`](#class_fastnoiselite_property_cellular_distance_function)         | ``0``                |
| [`float`](class_float.md)                                                | [`cellular_jitter`](#class_fastnoiselite_property_cellular_jitter)                               | ``1.0``              |
| [CellularReturnType](#enum_fastnoiselite_cellularreturntype)             | [`cellular_return_type`](#class_fastnoiselite_property_cellular_return_type)                     | ``1``                |
| [`float`](class_float.md)                                                | [`domain_warp_amplitude`](#class_fastnoiselite_property_domain_warp_amplitude)                   | ``30.0``             |
| [`bool`](class_bool.md)                                                  | [`domain_warp_enabled`](#class_fastnoiselite_property_domain_warp_enabled)                       | ``false``            |
| [`float`](class_float.md)                                                | [`domain_warp_fractal_gain`](#class_fastnoiselite_property_domain_warp_fractal_gain)             | ``0.5``              |
| [`float`](class_float.md)                                                | [`domain_warp_fractal_lacunarity`](#class_fastnoiselite_property_domain_warp_fractal_lacunarity) | ``6.0``              |
| [`int`](class_int.md)                                                    | [`domain_warp_fractal_octaves`](#class_fastnoiselite_property_domain_warp_fractal_octaves)       | ``5``                |
| [DomainWarpFractalType](#enum_fastnoiselite_domainwarpfractaltype)       | [`domain_warp_fractal_type`](#class_fastnoiselite_property_domain_warp_fractal_type)             | ``1``                |
| [`float`](class_float.md)                                                | [`domain_warp_frequency`](#class_fastnoiselite_property_domain_warp_frequency)                   | ``0.05``             |
| [DomainWarpType](#enum_fastnoiselite_domainwarptype)                     | [`domain_warp_type`](#class_fastnoiselite_property_domain_warp_type)                             | ``0``                |
| [`float`](class_float.md)                                                | [`fractal_gain`](#class_fastnoiselite_property_fractal_gain)                                     | ``0.5``              |
| [`float`](class_float.md)                                                | [`fractal_lacunarity`](#class_fastnoiselite_property_fractal_lacunarity)                         | ``2.0``              |
| [`int`](class_int.md)                                                    | [`fractal_octaves`](#class_fastnoiselite_property_fractal_octaves)                               | ``5``                |
| [`float`](class_float.md)                                                | [`fractal_ping_pong_strength`](#class_fastnoiselite_property_fractal_ping_pong_strength)         | ``2.0``              |
| [FractalType](#enum_fastnoiselite_fractaltype)                           | [`fractal_type`](#class_fastnoiselite_property_fractal_type)                                     | ``1``                |
| [`float`](class_float.md)                                                | [`fractal_weighted_strength`](#class_fastnoiselite_property_fractal_weighted_strength)           | ``0.0``              |
| [`float`](class_float.md)                                                | [`frequency`](#class_fastnoiselite_property_frequency)                                           | ``0.01``             |
| [NoiseType](#enum_fastnoiselite_noisetype)                               | [`noise_type`](#class_fastnoiselite_property_noise_type)                                         | ``1``                |
| [`Vector3`](class_vector3.md)                                            | [`offset`](#class_fastnoiselite_property_offset)                                                 | ``Vector3(0, 0, 0)`` |
| [`int`](class_int.md)                                                    | [`seed`](#class_fastnoiselite_property_seed)                                                     | ``0``                |

<!-- rst-class:: classref-section-separator -->

---

## 枚举

<div id="_class_enum_fastnoiselite_noisetype"></div>

enum **NoiseType**: <div id="enum_fastnoiselite_noisetype"></div>

<div id="_class_fastnoiselite_constant_type_value"></div>

[NoiseType](#enum_fastnoiselite_noisetype) **TYPE_VALUE** = ``5``

A lattice of points are assigned random values then interpolated based on neighboring values.

<div id="_class_fastnoiselite_constant_type_value_cubic"></div>

[NoiseType](#enum_fastnoiselite_noisetype) **TYPE_VALUE_CUBIC** = ``4``

Similar to Value noise, but slower. Has more variance in peaks and valleys.

Cubic noise can be used to avoid certain artifacts when using value noise to create a bumpmap. In general, you should always use this mode if the value noise is being used for a heightmap or bumpmap.

<div id="_class_fastnoiselite_constant_type_perlin"></div>

[NoiseType](#enum_fastnoiselite_noisetype) **TYPE_PERLIN** = ``3``

A lattice of random gradients. Their dot products are interpolated to obtain values in between the lattices.

<div id="_class_fastnoiselite_constant_type_cellular"></div>

[NoiseType](#enum_fastnoiselite_noisetype) **TYPE_CELLULAR** = ``2``

Cellular includes both Worley noise and Voronoi diagrams which creates various regions of the same value.

<div id="_class_fastnoiselite_constant_type_simplex"></div>

[NoiseType](#enum_fastnoiselite_noisetype) **TYPE_SIMPLEX** = ``0``

As opposed to [`TYPE_PERLIN`](#class_fastnoiselite_constant_type_perlin), gradients exist in a simplex lattice rather than a grid lattice, avoiding directional artifacts.

<div id="_class_fastnoiselite_constant_type_simplex_smooth"></div>

[NoiseType](#enum_fastnoiselite_noisetype) **TYPE_SIMPLEX_SMOOTH** = ``1``

Modified, higher quality version of [`TYPE_SIMPLEX`](#class_fastnoiselite_constant_type_simplex), but slower.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_enum_fastnoiselite_fractaltype"></div>

enum **FractalType**: <div id="enum_fastnoiselite_fractaltype"></div>

<div id="_class_fastnoiselite_constant_fractal_none"></div>

[FractalType](#enum_fastnoiselite_fractaltype) **FRACTAL_NONE** = ``0``

No fractal noise.

<div id="_class_fastnoiselite_constant_fractal_fbm"></div>

[FractalType](#enum_fastnoiselite_fractaltype) **FRACTAL_FBM** = ``1``

Method using Fractional Brownian Motion to combine octaves into a fractal.

<div id="_class_fastnoiselite_constant_fractal_ridged"></div>

[FractalType](#enum_fastnoiselite_fractaltype) **FRACTAL_RIDGED** = ``2``

Method of combining octaves into a fractal resulting in a "ridged" look.

<div id="_class_fastnoiselite_constant_fractal_ping_pong"></div>

[FractalType](#enum_fastnoiselite_fractaltype) **FRACTAL_PING_PONG** = ``3``

Method of combining octaves into a fractal with a ping pong effect.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_enum_fastnoiselite_cellulardistancefunction"></div>

enum **CellularDistanceFunction**: <div id="enum_fastnoiselite_cellulardistancefunction"></div>

<div id="_class_fastnoiselite_constant_distance_euclidean"></div>

[CellularDistanceFunction](#enum_fastnoiselite_cellulardistancefunction) **DISTANCE_EUCLIDEAN** = ``0``

Euclidean distance to the nearest point.

<div id="_class_fastnoiselite_constant_distance_euclidean_squared"></div>

[CellularDistanceFunction](#enum_fastnoiselite_cellulardistancefunction) **DISTANCE_EUCLIDEAN_SQUARED** = ``1``

Squared Euclidean distance to the nearest point.

<div id="_class_fastnoiselite_constant_distance_manhattan"></div>

[CellularDistanceFunction](#enum_fastnoiselite_cellulardistancefunction) **DISTANCE_MANHATTAN** = ``2``

Manhattan distance (taxicab metric) to the nearest point.

<div id="_class_fastnoiselite_constant_distance_hybrid"></div>

[CellularDistanceFunction](#enum_fastnoiselite_cellulardistancefunction) **DISTANCE_HYBRID** = ``3``

Blend of [`DISTANCE_EUCLIDEAN`](#class_fastnoiselite_constant_distance_euclidean) and [`DISTANCE_MANHATTAN`](#class_fastnoiselite_constant_distance_manhattan) to give curved cell boundaries

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_enum_fastnoiselite_cellularreturntype"></div>

enum **CellularReturnType**: <div id="enum_fastnoiselite_cellularreturntype"></div>

<div id="_class_fastnoiselite_constant_return_cell_value"></div>

[CellularReturnType](#enum_fastnoiselite_cellularreturntype) **RETURN_CELL_VALUE** = ``0``

The cellular distance function will return the same value for all points within a cell.

<div id="_class_fastnoiselite_constant_return_distance"></div>

[CellularReturnType](#enum_fastnoiselite_cellularreturntype) **RETURN_DISTANCE** = ``1``

The cellular distance function will return a value determined by the distance to the nearest point.

<div id="_class_fastnoiselite_constant_return_distance2"></div>

[CellularReturnType](#enum_fastnoiselite_cellularreturntype) **RETURN_DISTANCE2** = ``2``

The cellular distance function returns the distance to the second-nearest point.

<div id="_class_fastnoiselite_constant_return_distance2_add"></div>

[CellularReturnType](#enum_fastnoiselite_cellularreturntype) **RETURN_DISTANCE2_ADD** = ``3``

The distance to the nearest point is added to the distance to the second-nearest point.

<div id="_class_fastnoiselite_constant_return_distance2_sub"></div>

[CellularReturnType](#enum_fastnoiselite_cellularreturntype) **RETURN_DISTANCE2_SUB** = ``4``

The distance to the nearest point is subtracted from the distance to the second-nearest point.

<div id="_class_fastnoiselite_constant_return_distance2_mul"></div>

[CellularReturnType](#enum_fastnoiselite_cellularreturntype) **RETURN_DISTANCE2_MUL** = ``5``

The distance to the nearest point is multiplied with the distance to the second-nearest point.

<div id="_class_fastnoiselite_constant_return_distance2_div"></div>

[CellularReturnType](#enum_fastnoiselite_cellularreturntype) **RETURN_DISTANCE2_DIV** = ``6``

The distance to the nearest point is divided by the distance to the second-nearest point.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_enum_fastnoiselite_domainwarptype"></div>

enum **DomainWarpType**: <div id="enum_fastnoiselite_domainwarptype"></div>

<div id="_class_fastnoiselite_constant_domain_warp_simplex"></div>

[DomainWarpType](#enum_fastnoiselite_domainwarptype) **DOMAIN_WARP_SIMPLEX** = ``0``

The domain is warped using the simplex noise algorithm.

<div id="_class_fastnoiselite_constant_domain_warp_simplex_reduced"></div>

[DomainWarpType](#enum_fastnoiselite_domainwarptype) **DOMAIN_WARP_SIMPLEX_REDUCED** = ``1``

The domain is warped using a simplified version of the simplex noise algorithm.

<div id="_class_fastnoiselite_constant_domain_warp_basic_grid"></div>

[DomainWarpType](#enum_fastnoiselite_domainwarptype) **DOMAIN_WARP_BASIC_GRID** = ``2``

The domain is warped using a simple noise grid (not as smooth as the other methods, but more performant).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_enum_fastnoiselite_domainwarpfractaltype"></div>

enum **DomainWarpFractalType**: <div id="enum_fastnoiselite_domainwarpfractaltype"></div>

<div id="_class_fastnoiselite_constant_domain_warp_fractal_none"></div>

[DomainWarpFractalType](#enum_fastnoiselite_domainwarpfractaltype) **DOMAIN_WARP_FRACTAL_NONE** = ``0``

No fractal noise for warping the space.

<div id="_class_fastnoiselite_constant_domain_warp_fractal_progressive"></div>

[DomainWarpFractalType](#enum_fastnoiselite_domainwarpfractaltype) **DOMAIN_WARP_FRACTAL_PROGRESSIVE** = ``1``

Warping the space progressively, octave for octave, resulting in a more "liquified" distortion.

<div id="_class_fastnoiselite_constant_domain_warp_fractal_independent"></div>

[DomainWarpFractalType](#enum_fastnoiselite_domainwarpfractaltype) **DOMAIN_WARP_FRACTAL_INDEPENDENT** = ``2``

Warping the space independently for each octave, resulting in a more chaotic distortion.

<!-- rst-class:: classref-section-separator -->

---

## 属性说明

<div id="_class_fastnoiselite_property_cellular_distance_function"></div>

[CellularDistanceFunction](#enum_fastnoiselite_cellulardistancefunction) **cellular_distance_function** = ``0`` <div id="class_fastnoiselite_property_cellular_distance_function"></div>

- `void` **set_cellular_distance_function** ( value: [CellularDistanceFunction](#enum_fastnoiselite_cellulardistancefunction) )
- [CellularDistanceFunction](#enum_fastnoiselite_cellulardistancefunction) **get_cellular_distance_function** ( )

Determines how the distance to the nearest/second-nearest point is computed. See [CellularDistanceFunction](#enum_fastnoiselite_cellulardistancefunction) for options.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_fastnoiselite_property_cellular_jitter"></div>

[`float`](class_float.md) **cellular_jitter** = ``1.0`` <div id="class_fastnoiselite_property_cellular_jitter"></div>

- `void` **set_cellular_jitter** ( value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_cellular_jitter** ( )

Maximum distance a point can move off of its grid position. Set to `0` for an even grid.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_fastnoiselite_property_cellular_return_type"></div>

[CellularReturnType](#enum_fastnoiselite_cellularreturntype) **cellular_return_type** = ``1`` <div id="class_fastnoiselite_property_cellular_return_type"></div>

- `void` **set_cellular_return_type** ( value: [CellularReturnType](#enum_fastnoiselite_cellularreturntype) )
- [CellularReturnType](#enum_fastnoiselite_cellularreturntype) **get_cellular_return_type** ( )

Return type from cellular noise calculations. See [CellularReturnType](#enum_fastnoiselite_cellularreturntype).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_fastnoiselite_property_domain_warp_amplitude"></div>

[`float`](class_float.md) **domain_warp_amplitude** = ``30.0`` <div id="class_fastnoiselite_property_domain_warp_amplitude"></div>

- `void` **set_domain_warp_amplitude** ( value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_domain_warp_amplitude** ( )

Sets the maximum warp distance from the origin.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_fastnoiselite_property_domain_warp_enabled"></div>

[`bool`](class_bool.md) **domain_warp_enabled** = ``false`` <div id="class_fastnoiselite_property_domain_warp_enabled"></div>

- `void` **set_domain_warp_enabled** ( value: [`bool`](class_bool.md) )
- [`bool`](class_bool.md) **is_domain_warp_enabled** ( )

If enabled, another FastNoiseLite instance is used to warp the space, resulting in a distortion of the noise.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_fastnoiselite_property_domain_warp_fractal_gain"></div>

[`float`](class_float.md) **domain_warp_fractal_gain** = ``0.5`` <div id="class_fastnoiselite_property_domain_warp_fractal_gain"></div>

- `void` **set_domain_warp_fractal_gain** ( value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_domain_warp_fractal_gain** ( )

Determines the strength of each subsequent layer of the noise which is used to warp the space.

A low value places more emphasis on the lower frequency base layers, while a high value puts more emphasis on the higher frequency layers.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_fastnoiselite_property_domain_warp_fractal_lacunarity"></div>

[`float`](class_float.md) **domain_warp_fractal_lacunarity** = ``6.0`` <div id="class_fastnoiselite_property_domain_warp_fractal_lacunarity"></div>

- `void` **set_domain_warp_fractal_lacunarity** ( value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_domain_warp_fractal_lacunarity** ( )

Octave lacunarity of the fractal noise which warps the space. Increasing this value results in higher octaves producing noise with finer details and a rougher appearance.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_fastnoiselite_property_domain_warp_fractal_octaves"></div>

[`int`](class_int.md) **domain_warp_fractal_octaves** = ``5`` <div id="class_fastnoiselite_property_domain_warp_fractal_octaves"></div>

- `void` **set_domain_warp_fractal_octaves** ( value: [`int`](class_int.md) )
- [`int`](class_int.md) **get_domain_warp_fractal_octaves** ( )

The number of noise layers that are sampled to get the final value for the fractal noise which warps the space.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_fastnoiselite_property_domain_warp_fractal_type"></div>

[DomainWarpFractalType](#enum_fastnoiselite_domainwarpfractaltype) **domain_warp_fractal_type** = ``1`` <div id="class_fastnoiselite_property_domain_warp_fractal_type"></div>

- `void` **set_domain_warp_fractal_type** ( value: [DomainWarpFractalType](#enum_fastnoiselite_domainwarpfractaltype) )
- [DomainWarpFractalType](#enum_fastnoiselite_domainwarpfractaltype) **get_domain_warp_fractal_type** ( )

The method for combining octaves into a fractal which is used to warp the space. See [DomainWarpFractalType](#enum_fastnoiselite_domainwarpfractaltype).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_fastnoiselite_property_domain_warp_frequency"></div>

[`float`](class_float.md) **domain_warp_frequency** = ``0.05`` <div id="class_fastnoiselite_property_domain_warp_frequency"></div>

- `void` **set_domain_warp_frequency** ( value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_domain_warp_frequency** ( )

Frequency of the noise which warps the space. Low frequency results in smooth noise while high frequency results in rougher, more granular noise.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_fastnoiselite_property_domain_warp_type"></div>

[DomainWarpType](#enum_fastnoiselite_domainwarptype) **domain_warp_type** = ``0`` <div id="class_fastnoiselite_property_domain_warp_type"></div>

- `void` **set_domain_warp_type** ( value: [DomainWarpType](#enum_fastnoiselite_domainwarptype) )
- [DomainWarpType](#enum_fastnoiselite_domainwarptype) **get_domain_warp_type** ( )

Sets the warp algorithm. See [DomainWarpType](#enum_fastnoiselite_domainwarptype).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_fastnoiselite_property_fractal_gain"></div>

[`float`](class_float.md) **fractal_gain** = ``0.5`` <div id="class_fastnoiselite_property_fractal_gain"></div>

- `void` **set_fractal_gain** ( value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_fractal_gain** ( )

Determines the strength of each subsequent layer of noise in fractal noise.

A low value places more emphasis on the lower frequency base layers, while a high value puts more emphasis on the higher frequency layers.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_fastnoiselite_property_fractal_lacunarity"></div>

[`float`](class_float.md) **fractal_lacunarity** = ``2.0`` <div id="class_fastnoiselite_property_fractal_lacunarity"></div>

- `void` **set_fractal_lacunarity** ( value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_fractal_lacunarity** ( )

Frequency multiplier between subsequent octaves. Increasing this value results in higher octaves producing noise with finer details and a rougher appearance.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_fastnoiselite_property_fractal_octaves"></div>

[`int`](class_int.md) **fractal_octaves** = ``5`` <div id="class_fastnoiselite_property_fractal_octaves"></div>

- `void` **set_fractal_octaves** ( value: [`int`](class_int.md) )
- [`int`](class_int.md) **get_fractal_octaves** ( )

The number of noise layers that are sampled to get the final value for fractal noise types.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_fastnoiselite_property_fractal_ping_pong_strength"></div>

[`float`](class_float.md) **fractal_ping_pong_strength** = ``2.0`` <div id="class_fastnoiselite_property_fractal_ping_pong_strength"></div>

- `void` **set_fractal_ping_pong_strength** ( value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_fractal_ping_pong_strength** ( )

Sets the strength of the fractal ping pong type.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_fastnoiselite_property_fractal_type"></div>

[FractalType](#enum_fastnoiselite_fractaltype) **fractal_type** = ``1`` <div id="class_fastnoiselite_property_fractal_type"></div>

- `void` **set_fractal_type** ( value: [FractalType](#enum_fastnoiselite_fractaltype) )
- [FractalType](#enum_fastnoiselite_fractaltype) **get_fractal_type** ( )

The method for combining octaves into a fractal. See [FractalType](#enum_fastnoiselite_fractaltype).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_fastnoiselite_property_fractal_weighted_strength"></div>

[`float`](class_float.md) **fractal_weighted_strength** = ``0.0`` <div id="class_fastnoiselite_property_fractal_weighted_strength"></div>

- `void` **set_fractal_weighted_strength** ( value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_fractal_weighted_strength** ( )

Higher weighting means higher octaves have less impact if lower octaves have a large impact.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_fastnoiselite_property_frequency"></div>

[`float`](class_float.md) **frequency** = ``0.01`` <div id="class_fastnoiselite_property_frequency"></div>

- `void` **set_frequency** ( value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_frequency** ( )

The frequency for all noise types. Low frequency results in smooth noise while high frequency results in rougher, more granular noise.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_fastnoiselite_property_noise_type"></div>

[NoiseType](#enum_fastnoiselite_noisetype) **noise_type** = ``1`` <div id="class_fastnoiselite_property_noise_type"></div>

- `void` **set_noise_type** ( value: [NoiseType](#enum_fastnoiselite_noisetype) )
- [NoiseType](#enum_fastnoiselite_noisetype) **get_noise_type** ( )

The noise algorithm used. See [NoiseType](#enum_fastnoiselite_noisetype).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_fastnoiselite_property_offset"></div>

[`Vector3`](class_vector3.md) **offset** = ``Vector3(0, 0, 0)`` <div id="class_fastnoiselite_property_offset"></div>

- `void` **set_offset** ( value: [`Vector3`](class_vector3.md) )
- [`Vector3`](class_vector3.md) **get_offset** ( )

Translate the noise input coordinates by the given [`Vector3`](class_vector3.md).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_fastnoiselite_property_seed"></div>

[`int`](class_int.md) **seed** = ``0`` <div id="class_fastnoiselite_property_seed"></div>

- `void` **set_seed** ( value: [`int`](class_int.md) )
- [`int`](class_int.md) **get_seed** ( )

The random number seed for all noise types.

[^virtual]: 本方法通常需要用户覆盖才能生效。
[^const]: 本方法无副作用，不会修改该实例的任何成员变量。
[^vararg]: 本方法除了能接受在此处描述的参数外，还能够继续接受任意数量的参数。
[^constructor]: 本方法用于构造某个类型。
[^static]: 调用本方法无需实例，可直接使用类名进行调用。
[^operator]: 本方法描述的是使用本类型作为左操作数的有效运算符。
[^bitfield]: 这个值是由下列位标志构成位掩码的整数。
[^void]: 无返回值。
