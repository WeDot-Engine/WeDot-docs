<!-- ⚠ 请勿编辑本文件 ⚠ -->
<!-- 本文档使用脚本从 WeDot 引擎源码仓库生成。 -->
<!-- 生成脚本：https://github.com/WeDot-Engine/WeDot/tree/master/doc/tools/make_md.py； -->
<!-- 原文件：https://github.com/WeDot-Engine/WeDot/tree/master/doc/classes/PlaceholderTextureLayered.xml。 -->

<div id="_class_placeholdertexturelayered"></div>

# PlaceholderTextureLayered

**继承：** [`TextureLayered`](class_texturelayered.md) **<** [`Texture`](class_texture.md) **<** [`Resource`](class_resource.md) **<** [`RefCounted`](class_refcounted.md) **<** [`Object`](class_object.md)

**派生：** [`PlaceholderCubemap`](class_placeholdercubemap.md), [`PlaceholderCubemapArray`](class_placeholdercubemaparray.md), [`PlaceholderTexture2DArray`](class_placeholdertexture2darray.md)

Placeholder class for a 2-dimensional texture array.

## 描述

This class is used when loading a project that uses a [`TextureLayered`](class_texturelayered.md) subclass in 2 conditions:

- When running the project exported in dedicated server mode, only the texture's dimensions are kept (as they may be relied upon for gameplay purposes or positioning of other elements). This allows reducing the exported PCK's size significantly.

- When this subclass is missing due to using a different engine version or build (e.g. modules disabled).

 **Note:** This is not intended to be used as an actual texture for rendering. It is not guaranteed to work like one in shaders or materials (for example when calculating UV).

## 属性

|||
|:-:|:--|
| [`int`](class_int.md)           | [`layers`](class_placeholdertexturelayered.md#class_placeholdertexturelayered_property_layers) | ``1``              |
| [`Vector2i`](class_vector2i.md) | [`size`](class_placeholdertexturelayered.md#class_placeholdertexturelayered_property_size)     | ``Vector2i(1, 1)`` |

<!-- rst-class:: classref-section-separator -->

---

## 属性说明

<div id="_class_placeholdertexturelayered_property_layers"></div>

[`int`](class_int.md) **layers** = ``1`` <div id="class_placeholdertexturelayered_property_layers"></div>

- `void` **set_layers** ( value: [`int`](class_int.md) )
- [`int`](class_int.md) **get_layers** ( )

The number of layers in the texture array.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_placeholdertexturelayered_property_size"></div>

[`Vector2i`](class_vector2i.md) **size** = ``Vector2i(1, 1)`` <div id="class_placeholdertexturelayered_property_size"></div>

- `void` **set_size** ( value: [`Vector2i`](class_vector2i.md) )
- [`Vector2i`](class_vector2i.md) **get_size** ( )

The size of each texture layer (in pixels).

[^virtual]: 本方法通常需要用户覆盖才能生效。
[^const]: 本方法无副作用，不会修改该实例的任何成员变量。
[^vararg]: 本方法除了能接受在此处描述的参数外，还能够继续接受任意数量的参数。
[^constructor]: 本方法用于构造某个类型。
[^static]: 调用本方法无需实例，可直接使用类名进行调用。
[^operator]: 本方法描述的是使用本类型作为左操作数的有效运算符。
[^bitfield]: 这个值是由下列位标志构成位掩码的整数。
[^void]: 无返回值。
