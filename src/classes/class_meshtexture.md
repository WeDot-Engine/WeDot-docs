<!-- ⚠ 请勿编辑本文件 ⚠ -->
<!-- 本文档使用脚本从 WeDot 引擎源码仓库生成。 -->
<!-- 生成脚本：https://github.com/WeDot-Engine/WeDot/tree/master/doc/tools/make_md.py； -->
<!-- 原文件：https://github.com/WeDot-Engine/WeDot/tree/master/doc/classes/MeshTexture.xml。 -->

<div id="_class_meshtexture"></div>

# MeshTexture

**继承：** [`Texture2D`](class_texture2d.md) **<** [`Texture`](class_texture.md) **<** [`Resource`](class_resource.md) **<** [`RefCounted`](class_refcounted.md) **<** [`Object`](class_object.md)

Simple texture that uses a mesh to draw itself.

## 描述

Simple texture that uses a mesh to draw itself. It's limited because flags can't be changed and region drawing is not supported.

## 属性

|||
|:-:|:--|
| [`Texture2D`](class_texture2d.md) | [`base_texture`](class_meshtexture.md#class_meshtexture_property_base_texture) |                                                                                                       |
| [`Vector2`](class_vector2.md)     | [`image_size`](class_meshtexture.md#class_meshtexture_property_image_size)     | ``Vector2(0, 0)``                                                                                     |
| [`Mesh`](class_mesh.md)           | [`mesh`](class_meshtexture.md#class_meshtexture_property_mesh)                 |                                                                                                       |
| [`bool`](class_bool.md)           | resource_local_to_scene                                                        | ``false`` (overrides [`Resource`](class_resource.md#class_resource_property_resource_local_to_scene)) |

<!-- rst-class:: classref-section-separator -->

---

## 属性说明

<div id="_class_meshtexture_property_base_texture"></div>

[`Texture2D`](class_texture2d.md) **base_texture** <div id="class_meshtexture_property_base_texture"></div>

- `void` **set_base_texture** ( value: [`Texture2D`](class_texture2d.md) )
- [`Texture2D`](class_texture2d.md) **get_base_texture** ( )

Sets the base texture that the Mesh will use to draw.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_meshtexture_property_image_size"></div>

[`Vector2`](class_vector2.md) **image_size** = ``Vector2(0, 0)`` <div id="class_meshtexture_property_image_size"></div>

- `void` **set_image_size** ( value: [`Vector2`](class_vector2.md) )
- [`Vector2`](class_vector2.md) **get_image_size** ( )

Sets the size of the image, needed for reference.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_meshtexture_property_mesh"></div>

[`Mesh`](class_mesh.md) **mesh** <div id="class_meshtexture_property_mesh"></div>

- `void` **set_mesh** ( value: [`Mesh`](class_mesh.md) )
- [`Mesh`](class_mesh.md) **get_mesh** ( )

Sets the mesh used to draw. It must be a mesh using 2D vertices.

[^virtual]: 本方法通常需要用户覆盖才能生效。
[^const]: 本方法无副作用，不会修改该实例的任何成员变量。
[^vararg]: 本方法除了能接受在此处描述的参数外，还能够继续接受任意数量的参数。
[^constructor]: 本方法用于构造某个类型。
[^static]: 调用本方法无需实例，可直接使用类名进行调用。
[^operator]: 本方法描述的是使用本类型作为左操作数的有效运算符。
[^bitfield]: 这个值是由下列位标志构成位掩码的整数。
[^void]: 无返回值。
