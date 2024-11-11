<!-- ⚠ 请勿编辑本文件 ⚠ -->
<!-- 本文档使用脚本从 WeDot 引擎源码仓库生成。 -->
<!-- 生成脚本：https://github.com/WeDot-Engine/WeDot/tree/master/doc/tools/make_md.py； -->
<!-- 原文件：https://github.com/WeDot-Engine/WeDot/tree/master/modules/gltf/doc_classes/GLTFAnimation.xml。 -->

<div id="_class_gltfanimation"></div>

# GLTFAnimation

**继承：** [`Resource`](class_resource.md) **<** [`RefCounted`](class_refcounted.md) **<** [`Object`](class_object.md)

该类目前没有描述，请帮我们\ :ref:`贡献一个 <doc_updating_the_class_reference>`\ 吧！

## 属性

|||
|:-:|:--|
| [`bool`](class_bool.md)     | [`loop`](class_gltfanimation.md#class_gltfanimation_property_loop)                   | ``false`` |
| [`String`](class_string.md) | [`original_name`](class_gltfanimation.md#class_gltfanimation_property_original_name) | ``""``    |

## 方法

|||
|:-:|:--|
| [`Variant`](class_variant.md) | [`get_additional_data`](class_gltfanimation.md#class_gltfanimation_method_get_additional_data) ( extension_name: [`StringName`](class_stringname.md) )                                                 |
| `void`                        | [`set_additional_data`](class_gltfanimation.md#class_gltfanimation_method_set_additional_data) ( extension_name: [`StringName`](class_stringname.md), additional_data: [`Variant`](class_variant.md) ) |

<!-- rst-class:: classref-section-separator -->

---

## 属性说明

<div id="_class_gltfanimation_property_loop"></div>

[`bool`](class_bool.md) **loop** = ``false`` <div id="class_gltfanimation_property_loop"></div>

- `void` **set_loop** ( value: [`bool`](class_bool.md) )
- [`bool`](class_bool.md) **get_loop** ( )

该属性目前没有描述，请帮我们\ :ref:`贡献一个 <doc_updating_the_class_reference>`\ 吧！

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_gltfanimation_property_original_name"></div>

[`String`](class_string.md) **original_name** = ``""`` <div id="class_gltfanimation_property_original_name"></div>

- `void` **set_original_name** ( value: [`String`](class_string.md) )
- [`String`](class_string.md) **get_original_name** ( )

The original name of the animation.

<!-- rst-class:: classref-section-separator -->

---

## 方法说明

<div id="_class_gltfanimation_method_get_additional_data"></div>

[`Variant`](class_variant.md) **get_additional_data** ( extension_name: [`StringName`](class_stringname.md) )<div id="class_gltfanimation_method_get_additional_data"></div>

Gets additional arbitrary data in this **GLTFAnimation** instance. This can be used to keep per-node state data in [`GLTFDocumentExtension`](class_gltfdocumentextension.md) classes, which is important because they are stateless.

The argument should be the [`GLTFDocumentExtension`](class_gltfdocumentextension.md) name (does not have to match the extension name in the glTF file), and the return value can be anything you set. If nothing was set, the return value is null.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_gltfanimation_method_set_additional_data"></div>

`void` **set_additional_data** ( extension_name: [`StringName`](class_stringname.md), additional_data: [`Variant`](class_variant.md) )<div id="class_gltfanimation_method_set_additional_data"></div>

Sets additional arbitrary data in this **GLTFAnimation** instance. This can be used to keep per-node state data in [`GLTFDocumentExtension`](class_gltfdocumentextension.md) classes, which is important because they are stateless.

The first argument should be the [`GLTFDocumentExtension`](class_gltfdocumentextension.md) name (does not have to match the extension name in the glTF file), and the second argument can be anything you want.

[^virtual]: 本方法通常需要用户覆盖才能生效。
[^const]: 本方法无副作用，不会修改该实例的任何成员变量。
[^vararg]: 本方法除了能接受在此处描述的参数外，还能够继续接受任意数量的参数。
[^constructor]: 本方法用于构造某个类型。
[^static]: 调用本方法无需实例，可直接使用类名进行调用。
[^operator]: 本方法描述的是使用本类型作为左操作数的有效运算符。
[^bitfield]: 这个值是由下列位标志构成位掩码的整数。
[^void]: 无返回值。
