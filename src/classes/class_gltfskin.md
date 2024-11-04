<!-- ⚠ 请勿编辑本文件 ⚠ -->
<!-- 本文档使用脚本从 WeDot 引擎源码仓库生成。 -->
<!-- 生成脚本：https://github.com/WeDot-Engine/WeDot/tree/4.3/doc/tools/make_md.py； -->
<!-- 原文件：https://github.com/WeDot-Engine/WeDot/tree/4.3/modules/gltf/doc_classes/GLTFSkin.xml。 -->

<div id="_class_gltfskin"></div>

# GLTFSkin

**继承：** [`Resource`](class_resource.md) **<** [`RefCounted`](class_refcounted.md) **<** [`Object`](class_object.md)

该类目前没有描述，请帮我们\ :ref:`贡献一个 <doc_updating_the_class_reference>`\ 吧！

## 属性

| [`Skin`](class_skin.md)                         | [`godot_skin`](#class_gltfskin_property_godot_skin)           |                        |
| [`PackedInt32Array`](class_packedint32array.md) | [`joints`](#class_gltfskin_property_joints)                   | ``PackedInt32Array()`` |
| [`PackedInt32Array`](class_packedint32array.md) | [`joints_original`](#class_gltfskin_property_joints_original) | ``PackedInt32Array()`` |
| [`PackedInt32Array`](class_packedint32array.md) | [`non_joints`](#class_gltfskin_property_non_joints)           | ``PackedInt32Array()`` |
| [`PackedInt32Array`](class_packedint32array.md) | [`roots`](#class_gltfskin_property_roots)                     | ``PackedInt32Array()`` |
| [`int`](class_int.md)                           | [`skeleton`](#class_gltfskin_property_skeleton)               | ``-1``                 |
| [`int`](class_int.md)                           | [`skin_root`](#class_gltfskin_property_skin_root)             | ``-1``                 |

## 方法

| [Array](class_array.md) [`Transform3D`](class_transform3d.md) | [`get_inverse_binds`](#class_gltfskin_method_get_inverse_binds) ( )                                                                              |
| [`Dictionary`](class_dictionary.md)                           | [`get_joint_i_to_bone_i`](#class_gltfskin_method_get_joint_i_to_bone_i) ( )                                                                      |
| [`Dictionary`](class_dictionary.md)                           | [`get_joint_i_to_name`](#class_gltfskin_method_get_joint_i_to_name) ( )                                                                          |
| `void`                                                        | [`set_inverse_binds`](#class_gltfskin_method_set_inverse_binds) ( inverse_binds: [Array](class_array.md) [`Transform3D`](class_transform3d.md) ) |
| `void`                                                        | [`set_joint_i_to_bone_i`](#class_gltfskin_method_set_joint_i_to_bone_i) ( joint_i_to_bone_i: [`Dictionary`](class_dictionary.md) )               |
| `void`                                                        | [`set_joint_i_to_name`](#class_gltfskin_method_set_joint_i_to_name) ( joint_i_to_name: [`Dictionary`](class_dictionary.md) )                     |

<!-- rst-class:: classref-section-separator -->

---

## 属性说明

<div id="_class_gltfskin_property_godot_skin"></div>

[`Skin`](class_skin.md) **godot_skin** <div id="class_gltfskin_property_godot_skin"></div>

- `void` **set_godot_skin** ( value: [`Skin`](class_skin.md) )
- [`Skin`](class_skin.md) **get_godot_skin** ( )

该属性目前没有描述，请帮我们\ :ref:`贡献一个 <doc_updating_the_class_reference>`\ 吧！

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_gltfskin_property_joints"></div>

[`PackedInt32Array`](class_packedint32array.md) **joints** = ``PackedInt32Array()`` <div id="class_gltfskin_property_joints"></div>

- `void` **set_joints** ( value: [`PackedInt32Array`](class_packedint32array.md) )
- [`PackedInt32Array`](class_packedint32array.md) **get_joints** ( )

该属性目前没有描述，请帮我们\ :ref:`贡献一个 <doc_updating_the_class_reference>`\ 吧！

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_gltfskin_property_joints_original"></div>

[`PackedInt32Array`](class_packedint32array.md) **joints_original** = ``PackedInt32Array()`` <div id="class_gltfskin_property_joints_original"></div>

- `void` **set_joints_original** ( value: [`PackedInt32Array`](class_packedint32array.md) )
- [`PackedInt32Array`](class_packedint32array.md) **get_joints_original** ( )

该属性目前没有描述，请帮我们\ :ref:`贡献一个 <doc_updating_the_class_reference>`\ 吧！

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_gltfskin_property_non_joints"></div>

[`PackedInt32Array`](class_packedint32array.md) **non_joints** = ``PackedInt32Array()`` <div id="class_gltfskin_property_non_joints"></div>

- `void` **set_non_joints** ( value: [`PackedInt32Array`](class_packedint32array.md) )
- [`PackedInt32Array`](class_packedint32array.md) **get_non_joints** ( )

该属性目前没有描述，请帮我们\ :ref:`贡献一个 <doc_updating_the_class_reference>`\ 吧！

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_gltfskin_property_roots"></div>

[`PackedInt32Array`](class_packedint32array.md) **roots** = ``PackedInt32Array()`` <div id="class_gltfskin_property_roots"></div>

- `void` **set_roots** ( value: [`PackedInt32Array`](class_packedint32array.md) )
- [`PackedInt32Array`](class_packedint32array.md) **get_roots** ( )

该属性目前没有描述，请帮我们\ :ref:`贡献一个 <doc_updating_the_class_reference>`\ 吧！

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_gltfskin_property_skeleton"></div>

[`int`](class_int.md) **skeleton** = ``-1`` <div id="class_gltfskin_property_skeleton"></div>

- `void` **set_skeleton** ( value: [`int`](class_int.md) )
- [`int`](class_int.md) **get_skeleton** ( )

该属性目前没有描述，请帮我们\ :ref:`贡献一个 <doc_updating_the_class_reference>`\ 吧！

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_gltfskin_property_skin_root"></div>

[`int`](class_int.md) **skin_root** = ``-1`` <div id="class_gltfskin_property_skin_root"></div>

- `void` **set_skin_root** ( value: [`int`](class_int.md) )
- [`int`](class_int.md) **get_skin_root** ( )

该属性目前没有描述，请帮我们\ :ref:`贡献一个 <doc_updating_the_class_reference>`\ 吧！

<!-- rst-class:: classref-section-separator -->

---

## 方法说明

<div id="_class_gltfskin_method_get_inverse_binds"></div>

[Array](class_array.md) [`Transform3D`](class_transform3d.md) **get_inverse_binds** ( )<div id="class_gltfskin_method_get_inverse_binds"></div>

该方法目前没有描述，请帮我们\ :ref:`贡献一个 <doc_updating_the_class_reference>`\ 吧！

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_gltfskin_method_get_joint_i_to_bone_i"></div>

[`Dictionary`](class_dictionary.md) **get_joint_i_to_bone_i** ( )<div id="class_gltfskin_method_get_joint_i_to_bone_i"></div>

该方法目前没有描述，请帮我们\ :ref:`贡献一个 <doc_updating_the_class_reference>`\ 吧！

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_gltfskin_method_get_joint_i_to_name"></div>

[`Dictionary`](class_dictionary.md) **get_joint_i_to_name** ( )<div id="class_gltfskin_method_get_joint_i_to_name"></div>

该方法目前没有描述，请帮我们\ :ref:`贡献一个 <doc_updating_the_class_reference>`\ 吧！

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_gltfskin_method_set_inverse_binds"></div>

`void` **set_inverse_binds** ( inverse_binds: [Array](class_array.md) [`Transform3D`](class_transform3d.md) )<div id="class_gltfskin_method_set_inverse_binds"></div>

该方法目前没有描述，请帮我们\ :ref:`贡献一个 <doc_updating_the_class_reference>`\ 吧！

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_gltfskin_method_set_joint_i_to_bone_i"></div>

`void` **set_joint_i_to_bone_i** ( joint_i_to_bone_i: [`Dictionary`](class_dictionary.md) )<div id="class_gltfskin_method_set_joint_i_to_bone_i"></div>

该方法目前没有描述，请帮我们\ :ref:`贡献一个 <doc_updating_the_class_reference>`\ 吧！

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_gltfskin_method_set_joint_i_to_name"></div>

`void` **set_joint_i_to_name** ( joint_i_to_name: [`Dictionary`](class_dictionary.md) )<div id="class_gltfskin_method_set_joint_i_to_name"></div>

该方法目前没有描述，请帮我们\ :ref:`贡献一个 <doc_updating_the_class_reference>`\ 吧！

[^virtual]: 本方法通常需要用户覆盖才能生效。
[^const]: 本方法无副作用，不会修改该实例的任何成员变量。
[^vararg]: 本方法除了能接受在此处描述的参数外，还能够继续接受任意数量的参数。
[^constructor]: 本方法用于构造某个类型。
[^static]: 调用本方法无需实例，可直接使用类名进行调用。
[^operator]: 本方法描述的是使用本类型作为左操作数的有效运算符。
[^bitfield]: 这个值是由下列位标志构成位掩码的整数。
[^void]: 无返回值。
