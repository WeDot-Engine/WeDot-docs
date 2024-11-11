<!-- ⚠ 请勿编辑本文件 ⚠ -->
<!-- 本文档使用脚本从 WeDot 引擎源码仓库生成。 -->
<!-- 生成脚本：https://github.com/WeDot-Engine/WeDot/tree/master/doc/tools/make_md.py； -->
<!-- 原文件：https://github.com/WeDot-Engine/WeDot/tree/master/modules/gltf/doc_classes/GLTFSkeleton.xml。 -->

<div id="_class_gltfskeleton"></div>

# GLTFSkeleton

**继承：** [`Resource`](class_resource.md) **<** [`RefCounted`](class_refcounted.md) **<** [`Object`](class_object.md)

该类目前没有描述，请帮我们\ :ref:`贡献一个 <doc_updating_the_class_reference>`\ 吧！

## 属性

|||
|:-:|:--|
| [`PackedInt32Array`](class_packedint32array.md) | [`joints`](class_gltfskeleton.md#class_gltfskeleton_property_joints) | ``PackedInt32Array()`` |
| [`PackedInt32Array`](class_packedint32array.md) | [`roots`](class_gltfskeleton.md#class_gltfskeleton_property_roots)   | ``PackedInt32Array()`` |

## 方法

|||
|:-:|:--|
| [`BoneAttachment3D`](class_boneattachment3d.md)     | [`get_bone_attachment`](class_gltfskeleton.md#class_gltfskeleton_method_get_bone_attachment) ( idx: [`int`](class_int.md) )                                  |
| [`int`](class_int.md)                               | [`get_bone_attachment_count`](class_gltfskeleton.md#class_gltfskeleton_method_get_bone_attachment_count) ( )                                                 |
| [`Dictionary`](class_dictionary.md)                 | [`get_godot_bone_node`](class_gltfskeleton.md#class_gltfskeleton_method_get_godot_bone_node) ( )                                                             |
| [`Skeleton3D`](class_skeleton3d.md)                 | [`get_godot_skeleton`](class_gltfskeleton.md#class_gltfskeleton_method_get_godot_skeleton) ( )                                                               |
| [Array](class_array.md) [`String`](class_string.md) | [`get_unique_names`](class_gltfskeleton.md#class_gltfskeleton_method_get_unique_names) ( )                                                                   |
| `void`                                              | [`set_godot_bone_node`](class_gltfskeleton.md#class_gltfskeleton_method_set_godot_bone_node) ( godot_bone_node: [`Dictionary`](class_dictionary.md) )        |
| `void`                                              | [`set_unique_names`](class_gltfskeleton.md#class_gltfskeleton_method_set_unique_names) ( unique_names: [Array](class_array.md) [`String`](class_string.md) ) |

<!-- rst-class:: classref-section-separator -->

---

## 属性说明

<div id="_class_gltfskeleton_property_joints"></div>

[`PackedInt32Array`](class_packedint32array.md) **joints** = ``PackedInt32Array()`` <div id="class_gltfskeleton_property_joints"></div>

- `void` **set_joints** ( value: [`PackedInt32Array`](class_packedint32array.md) )
- [`PackedInt32Array`](class_packedint32array.md) **get_joints** ( )

该属性目前没有描述，请帮我们\ :ref:`贡献一个 <doc_updating_the_class_reference>`\ 吧！

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_gltfskeleton_property_roots"></div>

[`PackedInt32Array`](class_packedint32array.md) **roots** = ``PackedInt32Array()`` <div id="class_gltfskeleton_property_roots"></div>

- `void` **set_roots** ( value: [`PackedInt32Array`](class_packedint32array.md) )
- [`PackedInt32Array`](class_packedint32array.md) **get_roots** ( )

该属性目前没有描述，请帮我们\ :ref:`贡献一个 <doc_updating_the_class_reference>`\ 吧！

<!-- rst-class:: classref-section-separator -->

---

## 方法说明

<div id="_class_gltfskeleton_method_get_bone_attachment"></div>

[`BoneAttachment3D`](class_boneattachment3d.md) **get_bone_attachment** ( idx: [`int`](class_int.md) )<div id="class_gltfskeleton_method_get_bone_attachment"></div>

该方法目前没有描述，请帮我们\ :ref:`贡献一个 <doc_updating_the_class_reference>`\ 吧！

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_gltfskeleton_method_get_bone_attachment_count"></div>

[`int`](class_int.md) **get_bone_attachment_count** ( )<div id="class_gltfskeleton_method_get_bone_attachment_count"></div>

该方法目前没有描述，请帮我们\ :ref:`贡献一个 <doc_updating_the_class_reference>`\ 吧！

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_gltfskeleton_method_get_godot_bone_node"></div>

[`Dictionary`](class_dictionary.md) **get_godot_bone_node** ( )<div id="class_gltfskeleton_method_get_godot_bone_node"></div>

Returns a [`Dictionary`](class_dictionary.md) that maps skeleton bone indices to the indices of glTF nodes. This property is unused during import, and only set during export. In a glTF file, a bone is a node, so Godot converts skeleton bones to glTF nodes.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_gltfskeleton_method_get_godot_skeleton"></div>

[`Skeleton3D`](class_skeleton3d.md) **get_godot_skeleton** ( )<div id="class_gltfskeleton_method_get_godot_skeleton"></div>

该方法目前没有描述，请帮我们\ :ref:`贡献一个 <doc_updating_the_class_reference>`\ 吧！

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_gltfskeleton_method_get_unique_names"></div>

[Array](class_array.md) [`String`](class_string.md) **get_unique_names** ( )<div id="class_gltfskeleton_method_get_unique_names"></div>

该方法目前没有描述，请帮我们\ :ref:`贡献一个 <doc_updating_the_class_reference>`\ 吧！

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_gltfskeleton_method_set_godot_bone_node"></div>

`void` **set_godot_bone_node** ( godot_bone_node: [`Dictionary`](class_dictionary.md) )<div id="class_gltfskeleton_method_set_godot_bone_node"></div>

Sets a [`Dictionary`](class_dictionary.md) that maps skeleton bone indices to the indices of glTF nodes. This property is unused during import, and only set during export. In a glTF file, a bone is a node, so Godot converts skeleton bones to glTF nodes.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_gltfskeleton_method_set_unique_names"></div>

`void` **set_unique_names** ( unique_names: [Array](class_array.md) [`String`](class_string.md) )<div id="class_gltfskeleton_method_set_unique_names"></div>

该方法目前没有描述，请帮我们\ :ref:`贡献一个 <doc_updating_the_class_reference>`\ 吧！

[^virtual]: 本方法通常需要用户覆盖才能生效。
[^const]: 本方法无副作用，不会修改该实例的任何成员变量。
[^vararg]: 本方法除了能接受在此处描述的参数外，还能够继续接受任意数量的参数。
[^constructor]: 本方法用于构造某个类型。
[^static]: 调用本方法无需实例，可直接使用类名进行调用。
[^operator]: 本方法描述的是使用本类型作为左操作数的有效运算符。
[^bitfield]: 这个值是由下列位标志构成位掩码的整数。
[^void]: 无返回值。
