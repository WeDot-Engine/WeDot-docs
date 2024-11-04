<!-- ⚠ 请勿编辑本文件 ⚠ -->
<!-- 本文档使用脚本从 WeDot 引擎源码仓库生成。 -->
<!-- 生成脚本：https://github.com/WeDot-Engine/WeDot/tree/4.3/doc/tools/make_md.py； -->
<!-- 原文件：https://github.com/WeDot-Engine/WeDot/tree/4.3/doc/classes/ResourceImporterBitMap.xml。 -->

<div id="_class_resourceimporterbitmap"></div>

# ResourceImporterBitMap

**继承：** [`ResourceImporter`](class_resourceimporter.md) **<** [`RefCounted`](class_refcounted.md) **<** [`Object`](class_object.md)

Imports a [`BitMap`](class_bitmap.md) resource (2D array of boolean values).

## 描述

[`BitMap`](class_bitmap.md) resources are typically used as click masks in [`TextureButton`](class_texturebutton.md) and [`TouchScreenButton`](class_touchscreenbutton.md).

## 属性

| [`int`](class_int.md)     | [`create_from`](#class_resourceimporterbitmap_property_create_from) | ``0``   |
| [`float`](class_float.md) | [`threshold`](#class_resourceimporterbitmap_property_threshold)     | ``0.5`` |

<!-- rst-class:: classref-section-separator -->

---

## 属性说明

<div id="_class_resourceimporterbitmap_property_create_from"></div>

[`int`](class_int.md) **create_from** = ``0`` <div id="class_resourceimporterbitmap_property_create_from"></div>

The data source to use for generating the bitmap.

 **Black & White:** Pixels whose HSV value is greater than the [`threshold`](#class_resourceimporterbitmap_property_threshold) will be considered as "enabled" (bit is `true`). If the pixel is lower than or equal to the threshold, it will be considered as "disabled" (bit is `false`).

 **Alpha:** Pixels whose alpha value is greater than the [`threshold`](#class_resourceimporterbitmap_property_threshold) will be considered as "enabled" (bit is `true`). If the pixel is lower than or equal to the threshold, it will be considered as "disabled" (bit is `false`).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_resourceimporterbitmap_property_threshold"></div>

[`float`](class_float.md) **threshold** = ``0.5`` <div id="class_resourceimporterbitmap_property_threshold"></div>

The threshold to use to determine which bits should be considered enabled or disabled. See also [`create_from`](#class_resourceimporterbitmap_property_create_from).

[^virtual]: 本方法通常需要用户覆盖才能生效。
[^const]: 本方法无副作用，不会修改该实例的任何成员变量。
[^vararg]: 本方法除了能接受在此处描述的参数外，还能够继续接受任意数量的参数。
[^constructor]: 本方法用于构造某个类型。
[^static]: 调用本方法无需实例，可直接使用类名进行调用。
[^operator]: 本方法描述的是使用本类型作为左操作数的有效运算符。
[^bitfield]: 这个值是由下列位标志构成位掩码的整数。
[^void]: 无返回值。
