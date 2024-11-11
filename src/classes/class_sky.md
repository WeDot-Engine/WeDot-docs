<!-- ⚠ 请勿编辑本文件 ⚠ -->
<!-- 本文档使用脚本从 WeDot 引擎源码仓库生成。 -->
<!-- 生成脚本：https://github.com/WeDot-Engine/WeDot/tree/master/doc/tools/make_md.py； -->
<!-- 原文件：https://github.com/WeDot-Engine/WeDot/tree/master/doc/classes/Sky.xml。 -->

<div id="_class_sky"></div>

# Sky

**继承：** [`Resource`](class_resource.md) **<** [`RefCounted`](class_refcounted.md) **<** [`Object`](class_object.md)

Defines a 3D environment's background by using a [`Material`](class_material.md).

## 描述

The **Sky** class uses a [`Material`](class_material.md) to render a 3D environment's background and the light it emits by updating the reflection/radiance cubemaps.

## 属性

|||
|:-:|:--|
| [ProcessMode](#enum_sky_processmode)   | [`process_mode`](class_sky.md#class_sky_property_process_mode)   | ``0`` |
| [RadianceSize](#enum_sky_radiancesize) | [`radiance_size`](class_sky.md#class_sky_property_radiance_size) | ``3`` |
| [`Material`](class_material.md)        | [`sky_material`](class_sky.md#class_sky_property_sky_material)   |       |

<!-- rst-class:: classref-section-separator -->

---

## 枚举

<div id="_class_enum_sky_radiancesize"></div>

enum **RadianceSize**: <div id="enum_sky_radiancesize"></div>

<div id="_class_sky_constant_radiance_size_32"></div>

[RadianceSize](#enum_sky_radiancesize) **RADIANCE_SIZE_32** = ``0``

Radiance texture size is 32×32 pixels.

<div id="_class_sky_constant_radiance_size_64"></div>

[RadianceSize](#enum_sky_radiancesize) **RADIANCE_SIZE_64** = ``1``

Radiance texture size is 64×64 pixels.

<div id="_class_sky_constant_radiance_size_128"></div>

[RadianceSize](#enum_sky_radiancesize) **RADIANCE_SIZE_128** = ``2``

Radiance texture size is 128×128 pixels.

<div id="_class_sky_constant_radiance_size_256"></div>

[RadianceSize](#enum_sky_radiancesize) **RADIANCE_SIZE_256** = ``3``

Radiance texture size is 256×256 pixels.

<div id="_class_sky_constant_radiance_size_512"></div>

[RadianceSize](#enum_sky_radiancesize) **RADIANCE_SIZE_512** = ``4``

Radiance texture size is 512×512 pixels.

<div id="_class_sky_constant_radiance_size_1024"></div>

[RadianceSize](#enum_sky_radiancesize) **RADIANCE_SIZE_1024** = ``5``

Radiance texture size is 1024×1024 pixels.

<div id="_class_sky_constant_radiance_size_2048"></div>

[RadianceSize](#enum_sky_radiancesize) **RADIANCE_SIZE_2048** = ``6``

Radiance texture size is 2048×2048 pixels.

<div id="_class_sky_constant_radiance_size_max"></div>

[RadianceSize](#enum_sky_radiancesize) **RADIANCE_SIZE_MAX** = ``7``

Represents the size of the [RadianceSize](#enum_sky_radiancesize) enum.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_enum_sky_processmode"></div>

enum **ProcessMode**: <div id="enum_sky_processmode"></div>

<div id="_class_sky_constant_process_mode_automatic"></div>

[ProcessMode](#enum_sky_processmode) **PROCESS_MODE_AUTOMATIC** = ``0``

Automatically selects the appropriate process mode based on your sky shader. If your shader uses `TIME` or `POSITION`, this will use [`PROCESS_MODE_REALTIME`](class_sky.md#class_sky_constant_process_mode_realtime). If your shader uses any of the `LIGHT_*` variables or any custom uniforms, this uses [`PROCESS_MODE_INCREMENTAL`](class_sky.md#class_sky_constant_process_mode_incremental). Otherwise, this defaults to [`PROCESS_MODE_QUALITY`](class_sky.md#class_sky_constant_process_mode_quality).

<div id="_class_sky_constant_process_mode_quality"></div>

[ProcessMode](#enum_sky_processmode) **PROCESS_MODE_QUALITY** = ``1``

Uses high quality importance sampling to process the radiance map. In general, this results in much higher quality than [`PROCESS_MODE_REALTIME`](class_sky.md#class_sky_constant_process_mode_realtime) but takes much longer to generate. This should not be used if you plan on changing the sky at runtime. If you are finding that the reflection is not blurry enough and is showing sparkles or fireflies, try increasing [`ProjectSettings.rendering/reflections/sky_reflections/ggx_samples`](class_projectsettings.md#class_projectsettings_property_rendering/reflections/sky_reflections/ggx_samples).

<div id="_class_sky_constant_process_mode_incremental"></div>

[ProcessMode](#enum_sky_processmode) **PROCESS_MODE_INCREMENTAL** = ``2``

Uses the same high quality importance sampling to process the radiance map as [`PROCESS_MODE_QUALITY`](class_sky.md#class_sky_constant_process_mode_quality), but updates over several frames. The number of frames is determined by [`ProjectSettings.rendering/reflections/sky_reflections/roughness_layers`](class_projectsettings.md#class_projectsettings_property_rendering/reflections/sky_reflections/roughness_layers). Use this when you need highest quality radiance maps, but have a sky that updates slowly.

<div id="_class_sky_constant_process_mode_realtime"></div>

[ProcessMode](#enum_sky_processmode) **PROCESS_MODE_REALTIME** = ``3``

Uses the fast filtering algorithm to process the radiance map. In general this results in lower quality, but substantially faster run times. If you need better quality, but still need to update the sky every frame, consider turning on [`ProjectSettings.rendering/reflections/sky_reflections/fast_filter_high_quality`](class_projectsettings.md#class_projectsettings_property_rendering/reflections/sky_reflections/fast_filter_high_quality).

 **Note:** The fast filtering algorithm is limited to 256×256 cubemaps, so [`radiance_size`](class_sky.md#class_sky_property_radiance_size) must be set to [`RADIANCE_SIZE_256`](class_sky.md#class_sky_constant_radiance_size_256). Otherwise, a warning is printed and the overridden radiance size is ignored.

<!-- rst-class:: classref-section-separator -->

---

## 属性说明

<div id="_class_sky_property_process_mode"></div>

[ProcessMode](#enum_sky_processmode) **process_mode** = ``0`` <div id="class_sky_property_process_mode"></div>

- `void` **set_process_mode** ( value: [ProcessMode](#enum_sky_processmode) )
- [ProcessMode](#enum_sky_processmode) **get_process_mode** ( )

Sets the method for generating the radiance map from the sky. The radiance map is a cubemap with increasingly blurry versions of the sky corresponding to different levels of roughness. Radiance maps can be expensive to calculate. See [ProcessMode](#enum_sky_processmode) for options.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_sky_property_radiance_size"></div>

[RadianceSize](#enum_sky_radiancesize) **radiance_size** = ``3`` <div id="class_sky_property_radiance_size"></div>

- `void` **set_radiance_size** ( value: [RadianceSize](#enum_sky_radiancesize) )
- [RadianceSize](#enum_sky_radiancesize) **get_radiance_size** ( )

The **Sky**'s radiance map size. The higher the radiance map size, the more detailed the lighting from the **Sky** will be.

See [RadianceSize](#enum_sky_radiancesize) constants for values.

 **Note:** Some hardware will have trouble with higher radiance sizes, especially [`RADIANCE_SIZE_512`](class_sky.md#class_sky_constant_radiance_size_512) and above. Only use such high values on high-end hardware.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_sky_property_sky_material"></div>

[`Material`](class_material.md) **sky_material** <div id="class_sky_property_sky_material"></div>

- `void` **set_material** ( value: [`Material`](class_material.md) )
- [`Material`](class_material.md) **get_material** ( )

[`Material`](class_material.md) used to draw the background. Can be [`PanoramaSkyMaterial`](class_panoramaskymaterial.md), [`ProceduralSkyMaterial`](class_proceduralskymaterial.md), [`PhysicalSkyMaterial`](class_physicalskymaterial.md), or even a [`ShaderMaterial`](class_shadermaterial.md) if you want to use your own custom shader.

[^virtual]: 本方法通常需要用户覆盖才能生效。
[^const]: 本方法无副作用，不会修改该实例的任何成员变量。
[^vararg]: 本方法除了能接受在此处描述的参数外，还能够继续接受任意数量的参数。
[^constructor]: 本方法用于构造某个类型。
[^static]: 调用本方法无需实例，可直接使用类名进行调用。
[^operator]: 本方法描述的是使用本类型作为左操作数的有效运算符。
[^bitfield]: 这个值是由下列位标志构成位掩码的整数。
[^void]: 无返回值。
