<!-- ⚠ 请勿编辑本文件 ⚠ -->
<!-- 本文档使用脚本从 WeDot 引擎源码仓库生成。 -->
<!-- 生成脚本：https://github.com/WeDot-Engine/WeDot/tree/master/doc/tools/make_md.py； -->
<!-- 原文件：https://github.com/WeDot-Engine/WeDot/tree/master/modules/gltf/doc_classes/GLTFMesh.xml。 -->

<div id="_class_gltfmesh"></div>

# GLTFMesh

**继承：** [`Resource`](class_resource.md) **<** [`RefCounted`](class_refcounted.md) **<** [`Object`](class_object.md)

GLTFMesh represents a glTF mesh.

## 描述

GLTFMesh handles 3D mesh data imported from glTF files. It includes properties for blend channels, blend weights, instance materials, and the mesh itself.

## 属性

|||
|:-:|:--|
| [`PackedFloat32Array`](class_packedfloat32array.md)     | [`blend_weights`](class_gltfmesh.md#class_gltfmesh_property_blend_weights)           | ``PackedFloat32Array()`` |
| [Array](class_array.md) [`Material`](class_material.md) | [`instance_materials`](class_gltfmesh.md#class_gltfmesh_property_instance_materials) | ``[]``                   |
| [`ImporterMesh`](class_importermesh.md)                 | [`mesh`](class_gltfmesh.md#class_gltfmesh_property_mesh)                             |                          |
| [`String`](class_string.md)                             | [`original_name`](class_gltfmesh.md#class_gltfmesh_property_original_name)           | ``""``                   |

## 方法

|||
|:-:|:--|
| [`Variant`](class_variant.md) | [`get_additional_data`](class_gltfmesh.md#class_gltfmesh_method_get_additional_data) ( extension_name: [`StringName`](class_stringname.md) )                                                 |
| `void`                        | [`set_additional_data`](class_gltfmesh.md#class_gltfmesh_method_set_additional_data) ( extension_name: [`StringName`](class_stringname.md), additional_data: [`Variant`](class_variant.md) ) |

<!-- rst-class:: classref-section-separator -->

---

## 属性说明

<div id="_class_gltfmesh_property_blend_weights"></div>

[`PackedFloat32Array`](class_packedfloat32array.md) **blend_weights** = ``PackedFloat32Array()`` <div id="class_gltfmesh_property_blend_weights"></div>

- `void` **set_blend_weights** ( value: [`PackedFloat32Array`](class_packedfloat32array.md) )
- [`PackedFloat32Array`](class_packedfloat32array.md) **get_blend_weights** ( )

An array of floats representing the blend weights of the mesh.

**Note:** The returned array is *copied* and any changes to it will not update the original property value. See [`PackedFloat32Array`](class_packedfloat32array.md) for more details.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_gltfmesh_property_instance_materials"></div>

[Array](class_array.md) [`Material`](class_material.md) **instance_materials** = ``[]`` <div id="class_gltfmesh_property_instance_materials"></div>

- `void` **set_instance_materials** ( value: [Array](class_array.md) [`Material`](class_material.md) )
- [Array](class_array.md) [`Material`](class_material.md) **get_instance_materials** ( )

An array of Material objects representing the materials used in the mesh.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_gltfmesh_property_mesh"></div>

[`ImporterMesh`](class_importermesh.md) **mesh** <div id="class_gltfmesh_property_mesh"></div>

- `void` **set_mesh** ( value: [`ImporterMesh`](class_importermesh.md) )
- [`ImporterMesh`](class_importermesh.md) **get_mesh** ( )

The [`ImporterMesh`](class_importermesh.md) object representing the mesh itself.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_gltfmesh_property_original_name"></div>

[`String`](class_string.md) **original_name** = ``""`` <div id="class_gltfmesh_property_original_name"></div>

- `void` **set_original_name** ( value: [`String`](class_string.md) )
- [`String`](class_string.md) **get_original_name** ( )

The original name of the mesh.

<!-- rst-class:: classref-section-separator -->

---

## 方法说明

<div id="_class_gltfmesh_method_get_additional_data"></div>

[`Variant`](class_variant.md) **get_additional_data** ( extension_name: [`StringName`](class_stringname.md) )<div id="class_gltfmesh_method_get_additional_data"></div>

Gets additional arbitrary data in this **GLTFMesh** instance. This can be used to keep per-node state data in [`GLTFDocumentExtension`](class_gltfdocumentextension.md) classes, which is important because they are stateless.

The argument should be the [`GLTFDocumentExtension`](class_gltfdocumentextension.md) name (does not have to match the extension name in the glTF file), and the return value can be anything you set. If nothing was set, the return value is null.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_gltfmesh_method_set_additional_data"></div>

`void` **set_additional_data** ( extension_name: [`StringName`](class_stringname.md), additional_data: [`Variant`](class_variant.md) )<div id="class_gltfmesh_method_set_additional_data"></div>

Sets additional arbitrary data in this **GLTFMesh** instance. This can be used to keep per-node state data in [`GLTFDocumentExtension`](class_gltfdocumentextension.md) classes, which is important because they are stateless.

The first argument should be the [`GLTFDocumentExtension`](class_gltfdocumentextension.md) name (does not have to match the extension name in the glTF file), and the second argument can be anything you want.

[^virtual]: 本方法通常需要用户覆盖才能生效。
[^const]: 本方法无副作用，不会修改该实例的任何成员变量。
[^vararg]: 本方法除了能接受在此处描述的参数外，还能够继续接受任意数量的参数。
[^constructor]: 本方法用于构造某个类型。
[^static]: 调用本方法无需实例，可直接使用类名进行调用。
[^operator]: 本方法描述的是使用本类型作为左操作数的有效运算符。
[^bitfield]: 这个值是由下列位标志构成位掩码的整数。
[^void]: 无返回值。
