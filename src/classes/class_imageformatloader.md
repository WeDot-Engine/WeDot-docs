<!-- ⚠ 请勿编辑本文件 ⚠ -->
<!-- 本文档使用脚本从 WeDot 引擎源码仓库生成。 -->
<!-- 生成脚本：https://github.com/WeDot-Engine/WeDot/tree/master/doc/tools/make_md.py； -->
<!-- 原文件：https://github.com/WeDot-Engine/WeDot/tree/master/doc/classes/ImageFormatLoader.xml。 -->

<div id="_class_imageformatloader"></div>

# ImageFormatLoader

**继承：** [`RefCounted`](class_refcounted.md) **<** [`Object`](class_object.md)

**派生：** [`ImageFormatLoaderExtension`](class_imageformatloaderextension.md)

Base class to add support for specific image formats.

## 描述

The engine supports multiple image formats out of the box (PNG, SVG, JPEG, WebP to name a few), but you can choose to implement support for additional image formats by extending [`ImageFormatLoaderExtension`](class_imageformatloaderextension.md).

<!-- rst-class:: classref-section-separator -->

---

## 枚举

<div id="_class_enum_imageformatloader_loaderflags"></div>

flags **LoaderFlags**: <div id="enum_imageformatloader_loaderflags"></div>

<div id="_class_imageformatloader_constant_flag_none"></div>

[LoaderFlags](#enum_imageformatloader_loaderflags) **FLAG_NONE** = ``0``

该枚举目前没有描述，请帮我们\ :ref:`贡献一个 <doc_updating_the_class_reference>`\ 吧！



<div id="_class_imageformatloader_constant_flag_force_linear"></div>

[LoaderFlags](#enum_imageformatloader_loaderflags) **FLAG_FORCE_LINEAR** = ``1``

该枚举目前没有描述，请帮我们\ :ref:`贡献一个 <doc_updating_the_class_reference>`\ 吧！



<div id="_class_imageformatloader_constant_flag_convert_colors"></div>

[LoaderFlags](#enum_imageformatloader_loaderflags) **FLAG_CONVERT_COLORS** = ``2``

该枚举目前没有描述，请帮我们\ :ref:`贡献一个 <doc_updating_the_class_reference>`\ 吧！



[^virtual]: 本方法通常需要用户覆盖才能生效。
[^const]: 本方法无副作用，不会修改该实例的任何成员变量。
[^vararg]: 本方法除了能接受在此处描述的参数外，还能够继续接受任意数量的参数。
[^constructor]: 本方法用于构造某个类型。
[^static]: 调用本方法无需实例，可直接使用类名进行调用。
[^operator]: 本方法描述的是使用本类型作为左操作数的有效运算符。
[^bitfield]: 这个值是由下列位标志构成位掩码的整数。
[^void]: 无返回值。
