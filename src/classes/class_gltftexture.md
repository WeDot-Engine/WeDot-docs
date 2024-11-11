<!-- ⚠ 请勿编辑本文件 ⚠ -->
<!-- 本文档使用脚本从 WeDot 引擎源码仓库生成。 -->
<!-- 生成脚本：https://github.com/WeDot-Engine/WeDot/tree/master/doc/tools/make_md.py； -->
<!-- 原文件：https://github.com/WeDot-Engine/WeDot/tree/master/modules/gltf/doc_classes/GLTFTexture.xml。 -->

<div id="_class_gltftexture"></div>

# GLTFTexture

**继承：** [`Resource`](class_resource.md) **<** [`RefCounted`](class_refcounted.md) **<** [`Object`](class_object.md)

GLTFTexture represents a texture in a glTF file.

## 属性

|||
|:-:|:--|
| [`int`](class_int.md) | [`sampler`](class_gltftexture.md#class_gltftexture_property_sampler)     | ``-1`` |
| [`int`](class_int.md) | [`src_image`](class_gltftexture.md#class_gltftexture_property_src_image) | ``-1`` |

<!-- rst-class:: classref-section-separator -->

---

## 属性说明

<div id="_class_gltftexture_property_sampler"></div>

[`int`](class_int.md) **sampler** = ``-1`` <div id="class_gltftexture_property_sampler"></div>

- `void` **set_sampler** ( value: [`int`](class_int.md) )
- [`int`](class_int.md) **get_sampler** ( )

ID of the texture sampler to use when sampling the image. If -1, then the default texture sampler is used (linear filtering, and repeat wrapping in both axes).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_gltftexture_property_src_image"></div>

[`int`](class_int.md) **src_image** = ``-1`` <div id="class_gltftexture_property_src_image"></div>

- `void` **set_src_image** ( value: [`int`](class_int.md) )
- [`int`](class_int.md) **get_src_image** ( )

The index of the image associated with this texture, see [`GLTFState.get_images`](class_gltfstate.md#class_gltfstate_method_get_images). If -1, then this texture does not have an image assigned.

[^virtual]: 本方法通常需要用户覆盖才能生效。
[^const]: 本方法无副作用，不会修改该实例的任何成员变量。
[^vararg]: 本方法除了能接受在此处描述的参数外，还能够继续接受任意数量的参数。
[^constructor]: 本方法用于构造某个类型。
[^static]: 调用本方法无需实例，可直接使用类名进行调用。
[^operator]: 本方法描述的是使用本类型作为左操作数的有效运算符。
[^bitfield]: 这个值是由下列位标志构成位掩码的整数。
[^void]: 无返回值。
