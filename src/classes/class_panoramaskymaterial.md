<!-- ⚠ 请勿编辑本文件 ⚠ -->
<!-- 本文档使用脚本从 WeDot 引擎源码仓库生成。 -->
<!-- 生成脚本：https://github.com/WeDot-Engine/WeDot/tree/master/doc/tools/make_md.py； -->
<!-- 原文件：https://github.com/WeDot-Engine/WeDot/tree/master/doc/classes/PanoramaSkyMaterial.xml。 -->

<div id="_class_panoramaskymaterial"></div>

# PanoramaSkyMaterial

**继承：** [`Material`](class_material.md) **<** [`Resource`](class_resource.md) **<** [`RefCounted`](class_refcounted.md) **<** [`Object`](class_object.md)

A material that provides a special texture to a [`Sky`](class_sky.md), usually an HDR panorama.

## 描述

A resource referenced in a [`Sky`](class_sky.md) that is used to draw a background. **PanoramaSkyMaterial** functions similar to skyboxes in other engines, except it uses an equirectangular sky map instead of a [`Cubemap`](class_cubemap.md).

Using an HDR panorama is strongly recommended for accurate, high-quality reflections. Godot supports the Radiance HDR (`.hdr`) and OpenEXR (`.exr`) image formats for this purpose.

You can use [*this tool*](https://danilw.github.io/GLSL-howto/cubemap_to_panorama_js/cubemap_to_panorama.html) to convert a cubemap to an equirectangular sky map.

## 属性

|||
|:-:|:--|
| [`float`](class_float.md)         | [`energy_multiplier`](class_panoramaskymaterial.md#class_panoramaskymaterial_property_energy_multiplier) | ``1.0``  |
| [`bool`](class_bool.md)           | [`filter`](class_panoramaskymaterial.md#class_panoramaskymaterial_property_filter)                       | ``true`` |
| [`Texture2D`](class_texture2d.md) | [`panorama`](class_panoramaskymaterial.md#class_panoramaskymaterial_property_panorama)                   |          |

<!-- rst-class:: classref-section-separator -->

---

## 属性说明

<div id="_class_panoramaskymaterial_property_energy_multiplier"></div>

[`float`](class_float.md) **energy_multiplier** = ``1.0`` <div id="class_panoramaskymaterial_property_energy_multiplier"></div>

- `void` **set_energy_multiplier** ( value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_energy_multiplier** ( )

The sky's overall brightness multiplier. Higher values result in a brighter sky.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_panoramaskymaterial_property_filter"></div>

[`bool`](class_bool.md) **filter** = ``true`` <div id="class_panoramaskymaterial_property_filter"></div>

- `void` **set_filtering_enabled** ( value: [`bool`](class_bool.md) )
- [`bool`](class_bool.md) **is_filtering_enabled** ( )

A boolean value to determine if the background texture should be filtered or not.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_panoramaskymaterial_property_panorama"></div>

[`Texture2D`](class_texture2d.md) **panorama** <div id="class_panoramaskymaterial_property_panorama"></div>

- `void` **set_panorama** ( value: [`Texture2D`](class_texture2d.md) )
- [`Texture2D`](class_texture2d.md) **get_panorama** ( )

[`Texture2D`](class_texture2d.md) to be applied to the **PanoramaSkyMaterial**.

[^virtual]: 本方法通常需要用户覆盖才能生效。
[^const]: 本方法无副作用，不会修改该实例的任何成员变量。
[^vararg]: 本方法除了能接受在此处描述的参数外，还能够继续接受任意数量的参数。
[^constructor]: 本方法用于构造某个类型。
[^static]: 调用本方法无需实例，可直接使用类名进行调用。
[^operator]: 本方法描述的是使用本类型作为左操作数的有效运算符。
[^bitfield]: 这个值是由下列位标志构成位掩码的整数。
[^void]: 无返回值。
