<!-- ⚠ 请勿编辑本文件 ⚠ -->
<!-- 本文档使用脚本从 WeDot 引擎源码仓库生成。 -->
<!-- 生成脚本：https://github.com/WeDot-Engine/WeDot/tree/4.3/doc/tools/make_md.py； -->
<!-- 原文件：https://github.com/WeDot-Engine/WeDot/tree/4.3/doc/classes/ImageTexture.xml。 -->

<div id="_class_imagetexture"></div>

# ImageTexture

**继承：** [`Texture2D`](class_texture2d.md) **<** [`Texture`](class_texture.md) **<** [`Resource`](class_resource.md) **<** [`RefCounted`](class_refcounted.md) **<** [`Object`](class_object.md)

A [`Texture2D`](class_texture2d.md) based on an [`Image`](class_image.md).

## 描述

A [`Texture2D`](class_texture2d.md) based on an [`Image`](class_image.md). For an image to be displayed, an **ImageTexture** has to be created from it using the [`create_from_image`](#class_imagetexture_method_create_from_image) method:

```

    var image = Image.load_from_file("res://icon.svg")
    var texture = ImageTexture.create_from_image(image)
    $Sprite2D.texture = texture
```

This way, textures can be created at run-time by loading images both from within the editor and externally.

 **Warning:** Prefer to load imported textures with [`@GDScript.load`](#class_@gdscript_method_load) over loading them from within the filesystem dynamically with [`Image.load`](#class_image_method_load), as it may not work in exported projects:

```

    var texture = load("res://icon.svg")
    $Sprite2D.texture = texture
```

This is because images have to be imported as a [`CompressedTexture2D`](class_compressedtexture2d.md) first to be loaded with [`@GDScript.load`](#class_@gdscript_method_load). If you'd still like to load an image file just like any other [`Resource`](class_resource.md), import it as an [`Image`](class_image.md) resource instead, and then load it normally using the [`@GDScript.load`](#class_@gdscript_method_load) method.

 **Note:** The image can be retrieved from an imported texture using the [`Texture2D.get_image`](#class_texture2d_method_get_image) method, which returns a copy of the image:

```

    var texture = load("res://icon.svg")
    var image: Image = texture.get_image()
```

An **ImageTexture** is not meant to be operated from within the editor interface directly, and is mostly useful for rendering images on screen dynamically via code. If you need to generate images procedurally from within the editor, consider saving and importing images as custom texture resources implementing a new [`EditorImportPlugin`](class_editorimportplugin.md).

 **Note:** The maximum texture size is 16384×16384 pixels due to graphics hardware limitations.







## 属性

| [`bool`](class_bool.md) | resource_local_to_scene | ``false`` (overrides [`Resource`](#class_resource_property_resource_local_to_scene)) |

## 方法

| [`ImageTexture`](class_imagetexture.md) | [`create_from_image`](#class_imagetexture_method_create_from_image) ( image: [`Image`](class_image.md) ) static[^static] |
| [Format](#enum_image_format)            | [`get_format`](#class_imagetexture_method_get_format) ( ) const[^const]                                                  |
| `void`                                  | [`set_image`](#class_imagetexture_method_set_image) ( image: [`Image`](class_image.md) )                                 |
| `void`                                  | [`set_size_override`](#class_imagetexture_method_set_size_override) ( size: [`Vector2i`](class_vector2i.md) )            |
| `void`                                  | [`update`](#class_imagetexture_method_update) ( image: [`Image`](class_image.md) )                                       |

<!-- rst-class:: classref-section-separator -->

---

## 方法说明

<div id="_class_imagetexture_method_create_from_image"></div>

[`ImageTexture`](class_imagetexture.md) **create_from_image** ( image: [`Image`](class_image.md) ) static[^static]<div id="class_imagetexture_method_create_from_image"></div>

Creates a new **ImageTexture** and initializes it by allocating and setting the data from an [`Image`](class_image.md).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_imagetexture_method_get_format"></div>

[Format](#enum_image_format) **get_format** ( ) const[^const]<div id="class_imagetexture_method_get_format"></div>

Returns the format of the texture, one of [Format](#enum_image_format).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_imagetexture_method_set_image"></div>

`void` **set_image** ( image: [`Image`](class_image.md) )<div id="class_imagetexture_method_set_image"></div>

Replaces the texture's data with a new [`Image`](class_image.md). This will re-allocate new memory for the texture.

If you want to update the image, but don't need to change its parameters (format, size), use [`update`](#class_imagetexture_method_update) instead for better performance.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_imagetexture_method_set_size_override"></div>

`void` **set_size_override** ( size: [`Vector2i`](class_vector2i.md) )<div id="class_imagetexture_method_set_size_override"></div>

Resizes the texture to the specified dimensions.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_imagetexture_method_update"></div>

`void` **update** ( image: [`Image`](class_image.md) )<div id="class_imagetexture_method_update"></div>

Replaces the texture's data with a new [`Image`](class_image.md).

 **Note:** The texture has to be created using [`create_from_image`](#class_imagetexture_method_create_from_image) or initialized first with the [`set_image`](#class_imagetexture_method_set_image) method before it can be updated. The new image dimensions, format, and mipmaps configuration should match the existing texture's image configuration.

Use this method over [`set_image`](#class_imagetexture_method_set_image) if you need to update the texture frequently, which is faster than allocating additional memory for a new texture each time.

[^virtual]: 本方法通常需要用户覆盖才能生效。
[^const]: 本方法无副作用，不会修改该实例的任何成员变量。
[^vararg]: 本方法除了能接受在此处描述的参数外，还能够继续接受任意数量的参数。
[^constructor]: 本方法用于构造某个类型。
[^static]: 调用本方法无需实例，可直接使用类名进行调用。
[^operator]: 本方法描述的是使用本类型作为左操作数的有效运算符。
[^bitfield]: 这个值是由下列位标志构成位掩码的整数。
[^void]: 无返回值。
