<!-- ⚠ 请勿编辑本文件 ⚠ -->
<!-- 本文档使用脚本从 WeDot 引擎源码仓库生成。 -->
<!-- 生成脚本：https://github.com/WeDot-Engine/WeDot/tree/master/doc/tools/make_md.py； -->
<!-- 原文件：https://github.com/WeDot-Engine/WeDot/tree/master/doc/classes/ImageFormatLoaderExtension.xml。 -->

<div id="_class_imageformatloaderextension"></div>

# ImageFormatLoaderExtension

**继承：** [`ImageFormatLoader`](class_imageformatloader.md) **<** [`RefCounted`](class_refcounted.md) **<** [`Object`](class_object.md)

Base class for creating [`ImageFormatLoader`](class_imageformatloader.md) extensions (adding support for extra image formats).

## 描述

The engine supports multiple image formats out of the box (PNG, SVG, JPEG, WebP to name a few), but you can choose to implement support for additional image formats by extending this class.

Be sure to respect the documented return types and values. You should create an instance of it, and call [`add_format_loader`](class_imageformatloaderextension.md#class_imageformatloaderextension_method_add_format_loader) to register that loader during the initialization phase.

## 方法

|||
|:-:|:--|
| [`PackedStringArray`](class_packedstringarray.md) | [`_get_recognized_extensions`](class_imageformatloaderextension.md#class_imageformatloaderextension_private_method__get_recognized_extensions) ( ) virtual[^virtual] const[^const]                                                                                                                                    |
| [Error](#enum_@globalscope_error)                 | [`_load_image`](class_imageformatloaderextension.md#class_imageformatloaderextension_private_method__load_image) ( image: [`Image`](class_image.md), fileaccess: [`FileAccess`](class_fileaccess.md), flags: [LoaderFlags](#enum_imageformatloader_loaderflags), scale: [`float`](class_float.md) ) virtual[^virtual] |
| `void`                                            | [`add_format_loader`](class_imageformatloaderextension.md#class_imageformatloaderextension_method_add_format_loader) ( )                                                                                                                                                                                              |
| `void`                                            | [`remove_format_loader`](class_imageformatloaderextension.md#class_imageformatloaderextension_method_remove_format_loader) ( )                                                                                                                                                                                        |

<!-- rst-class:: classref-section-separator -->

---

## 方法说明

<div id="_class_imageformatloaderextension_private_method__get_recognized_extensions"></div>

[`PackedStringArray`](class_packedstringarray.md) **_get_recognized_extensions** ( ) virtual[^virtual] const[^const]<div id="class_imageformatloaderextension_private_method__get_recognized_extensions"></div>

Returns the list of file extensions for this image format. Files with the given extensions will be treated as image file and loaded using this class.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_imageformatloaderextension_private_method__load_image"></div>

[Error](#enum_@globalscope_error) **_load_image** ( image: [`Image`](class_image.md), fileaccess: [`FileAccess`](class_fileaccess.md), flags: [LoaderFlags](#enum_imageformatloader_loaderflags), scale: [`float`](class_float.md) ) virtual[^virtual]<div id="class_imageformatloaderextension_private_method__load_image"></div>

Loads the content of `fileaccess` into the provided `image`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_imageformatloaderextension_method_add_format_loader"></div>

`void` **add_format_loader** ( )<div id="class_imageformatloaderextension_method_add_format_loader"></div>

Add this format loader to the engine, allowing it to recognize the file extensions returned by [`_get_recognized_extensions`](class_imageformatloaderextension.md#class_imageformatloaderextension_private_method__get_recognized_extensions).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_imageformatloaderextension_method_remove_format_loader"></div>

`void` **remove_format_loader** ( )<div id="class_imageformatloaderextension_method_remove_format_loader"></div>

Remove this format loader from the engine.

[^virtual]: 本方法通常需要用户覆盖才能生效。
[^const]: 本方法无副作用，不会修改该实例的任何成员变量。
[^vararg]: 本方法除了能接受在此处描述的参数外，还能够继续接受任意数量的参数。
[^constructor]: 本方法用于构造某个类型。
[^static]: 调用本方法无需实例，可直接使用类名进行调用。
[^operator]: 本方法描述的是使用本类型作为左操作数的有效运算符。
[^bitfield]: 这个值是由下列位标志构成位掩码的整数。
[^void]: 无返回值。
