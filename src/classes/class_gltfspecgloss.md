<!-- ⚠ 请勿编辑本文件 ⚠ -->
<!-- 本文档使用脚本从 WeDot 引擎源码仓库生成。 -->
<!-- 生成脚本：https://github.com/WeDot-Engine/WeDot/tree/master/doc/tools/make_md.py； -->
<!-- 原文件：https://github.com/WeDot-Engine/WeDot/tree/master/modules/gltf/doc_classes/GLTFSpecGloss.xml。 -->

<div id="_class_gltfspecgloss"></div>

# GLTFSpecGloss

**继承：** [`Resource`](class_resource.md) **<** [`RefCounted`](class_refcounted.md) **<** [`Object`](class_object.md)

Archived glTF extension for specular/glossy materials.

## 描述

KHR_materials_pbrSpecularGlossiness is an archived glTF extension. This means that it is deprecated and not recommended for new files. However, it is still supported for loading old files.

## 属性

|||
|:-:|:--|
| [`Color`](class_color.md) | [`diffuse_factor`](class_gltfspecgloss.md#class_gltfspecgloss_property_diffuse_factor)   | ``Color(1, 1, 1, 1)`` |
| [`Image`](class_image.md) | [`diffuse_img`](class_gltfspecgloss.md#class_gltfspecgloss_property_diffuse_img)         |                       |
| [`float`](class_float.md) | [`gloss_factor`](class_gltfspecgloss.md#class_gltfspecgloss_property_gloss_factor)       | ``1.0``               |
| [`Image`](class_image.md) | [`spec_gloss_img`](class_gltfspecgloss.md#class_gltfspecgloss_property_spec_gloss_img)   |                       |
| [`Color`](class_color.md) | [`specular_factor`](class_gltfspecgloss.md#class_gltfspecgloss_property_specular_factor) | ``Color(1, 1, 1, 1)`` |

<!-- rst-class:: classref-section-separator -->

---

## 属性说明

<div id="_class_gltfspecgloss_property_diffuse_factor"></div>

[`Color`](class_color.md) **diffuse_factor** = ``Color(1, 1, 1, 1)`` <div id="class_gltfspecgloss_property_diffuse_factor"></div>

- `void` **set_diffuse_factor** ( value: [`Color`](class_color.md) )
- [`Color`](class_color.md) **get_diffuse_factor** ( )

The reflected diffuse factor of the material.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_gltfspecgloss_property_diffuse_img"></div>

[`Image`](class_image.md) **diffuse_img** <div id="class_gltfspecgloss_property_diffuse_img"></div>

- `void` **set_diffuse_img** ( value: [`Image`](class_image.md) )
- [`Image`](class_image.md) **get_diffuse_img** ( )

The diffuse texture.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_gltfspecgloss_property_gloss_factor"></div>

[`float`](class_float.md) **gloss_factor** = ``1.0`` <div id="class_gltfspecgloss_property_gloss_factor"></div>

- `void` **set_gloss_factor** ( value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_gloss_factor** ( )

The glossiness or smoothness of the material.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_gltfspecgloss_property_spec_gloss_img"></div>

[`Image`](class_image.md) **spec_gloss_img** <div id="class_gltfspecgloss_property_spec_gloss_img"></div>

- `void` **set_spec_gloss_img** ( value: [`Image`](class_image.md) )
- [`Image`](class_image.md) **get_spec_gloss_img** ( )

The specular-glossiness texture.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_gltfspecgloss_property_specular_factor"></div>

[`Color`](class_color.md) **specular_factor** = ``Color(1, 1, 1, 1)`` <div id="class_gltfspecgloss_property_specular_factor"></div>

- `void` **set_specular_factor** ( value: [`Color`](class_color.md) )
- [`Color`](class_color.md) **get_specular_factor** ( )

The specular RGB color of the material. The alpha channel is unused.

[^virtual]: 本方法通常需要用户覆盖才能生效。
[^const]: 本方法无副作用，不会修改该实例的任何成员变量。
[^vararg]: 本方法除了能接受在此处描述的参数外，还能够继续接受任意数量的参数。
[^constructor]: 本方法用于构造某个类型。
[^static]: 调用本方法无需实例，可直接使用类名进行调用。
[^operator]: 本方法描述的是使用本类型作为左操作数的有效运算符。
[^bitfield]: 这个值是由下列位标志构成位掩码的整数。
[^void]: 无返回值。
