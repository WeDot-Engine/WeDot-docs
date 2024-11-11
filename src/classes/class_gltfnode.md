<!-- ⚠ 请勿编辑本文件 ⚠ -->
<!-- 本文档使用脚本从 WeDot 引擎源码仓库生成。 -->
<!-- 生成脚本：https://github.com/WeDot-Engine/WeDot/tree/master/doc/tools/make_md.py； -->
<!-- 原文件：https://github.com/WeDot-Engine/WeDot/tree/master/modules/gltf/doc_classes/GLTFNode.xml。 -->

<div id="_class_gltfnode"></div>

# GLTFNode

**继承：** [`Resource`](class_resource.md) **<** [`RefCounted`](class_refcounted.md) **<** [`Object`](class_object.md)

glTF node class.

## 描述

Represents a glTF node. glTF nodes may have names, transforms, children (other glTF nodes), and more specialized properties (represented by their own classes).

glTF nodes generally exist inside of [`GLTFState`](class_gltfstate.md) which represents all data of a glTF file. Most of GLTFNode's properties are indices of other data in the glTF file. You can extend a glTF node with additional properties by using [`get_additional_data`](class_gltfnode.md#class_gltfnode_method_get_additional_data) and [`set_additional_data`](class_gltfnode.md#class_gltfnode_method_set_additional_data).

## 属性

|||
|:-:|:--|
| [`int`](class_int.md)                           | [`camera`](class_gltfnode.md#class_gltfnode_property_camera)               | ``-1``                                              |
| [`PackedInt32Array`](class_packedint32array.md) | [`children`](class_gltfnode.md#class_gltfnode_property_children)           | ``PackedInt32Array()``                              |
| [`int`](class_int.md)                           | [`height`](class_gltfnode.md#class_gltfnode_property_height)               | ``-1``                                              |
| [`int`](class_int.md)                           | [`light`](class_gltfnode.md#class_gltfnode_property_light)                 | ``-1``                                              |
| [`int`](class_int.md)                           | [`mesh`](class_gltfnode.md#class_gltfnode_property_mesh)                   | ``-1``                                              |
| [`String`](class_string.md)                     | [`original_name`](class_gltfnode.md#class_gltfnode_property_original_name) | ``""``                                              |
| [`int`](class_int.md)                           | [`parent`](class_gltfnode.md#class_gltfnode_property_parent)               | ``-1``                                              |
| [`Vector3`](class_vector3.md)                   | [`position`](class_gltfnode.md#class_gltfnode_property_position)           | ``Vector3(0, 0, 0)``                                |
| [`Quaternion`](class_quaternion.md)             | [`rotation`](class_gltfnode.md#class_gltfnode_property_rotation)           | ``Quaternion(0, 0, 0, 1)``                          |
| [`Vector3`](class_vector3.md)                   | [`scale`](class_gltfnode.md#class_gltfnode_property_scale)                 | ``Vector3(1, 1, 1)``                                |
| [`int`](class_int.md)                           | [`skeleton`](class_gltfnode.md#class_gltfnode_property_skeleton)           | ``-1``                                              |
| [`int`](class_int.md)                           | [`skin`](class_gltfnode.md#class_gltfnode_property_skin)                   | ``-1``                                              |
| [`Transform3D`](class_transform3d.md)           | [`xform`](class_gltfnode.md#class_gltfnode_property_xform)                 | ``Transform3D(1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0)`` |

## 方法

|||
|:-:|:--|
| `void`                          | [`append_child_index`](class_gltfnode.md#class_gltfnode_method_append_child_index) ( child_index: [`int`](class_int.md) )                                                                    |
| [`Variant`](class_variant.md)   | [`get_additional_data`](class_gltfnode.md#class_gltfnode_method_get_additional_data) ( extension_name: [`StringName`](class_stringname.md) )                                                 |
| [`NodePath`](class_nodepath.md) | [`get_scene_node_path`](class_gltfnode.md#class_gltfnode_method_get_scene_node_path) ( gltf_state: [`GLTFState`](class_gltfstate.md), handle_skeletons: [`bool`](class_bool.md) = true )     |
| `void`                          | [`set_additional_data`](class_gltfnode.md#class_gltfnode_method_set_additional_data) ( extension_name: [`StringName`](class_stringname.md), additional_data: [`Variant`](class_variant.md) ) |

<!-- rst-class:: classref-section-separator -->

---

## 属性说明

<div id="_class_gltfnode_property_camera"></div>

[`int`](class_int.md) **camera** = ``-1`` <div id="class_gltfnode_property_camera"></div>

- `void` **set_camera** ( value: [`int`](class_int.md) )
- [`int`](class_int.md) **get_camera** ( )

If this glTF node is a camera, the index of the [`GLTFCamera`](class_gltfcamera.md) in the [`GLTFState`](class_gltfstate.md) that describes the camera's properties. If -1, this node is not a camera.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_gltfnode_property_children"></div>

[`PackedInt32Array`](class_packedint32array.md) **children** = ``PackedInt32Array()`` <div id="class_gltfnode_property_children"></div>

- `void` **set_children** ( value: [`PackedInt32Array`](class_packedint32array.md) )
- [`PackedInt32Array`](class_packedint32array.md) **get_children** ( )

The indices of the child nodes in the [`GLTFState`](class_gltfstate.md). If this glTF node has no children, this will be an empty array.

**Note:** The returned array is *copied* and any changes to it will not update the original property value. See [`PackedInt32Array`](class_packedint32array.md) for more details.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_gltfnode_property_height"></div>

[`int`](class_int.md) **height** = ``-1`` <div id="class_gltfnode_property_height"></div>

- `void` **set_height** ( value: [`int`](class_int.md) )
- [`int`](class_int.md) **get_height** ( )

How deep into the node hierarchy this node is. A root node will have a height of 0, its children will have a height of 1, and so on. If -1, the height has not been calculated.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_gltfnode_property_light"></div>

[`int`](class_int.md) **light** = ``-1`` <div id="class_gltfnode_property_light"></div>

- `void` **set_light** ( value: [`int`](class_int.md) )
- [`int`](class_int.md) **get_light** ( )

If this glTF node is a light, the index of the [`GLTFLight`](class_gltflight.md) in the [`GLTFState`](class_gltfstate.md) that describes the light's properties. If -1, this node is not a light.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_gltfnode_property_mesh"></div>

[`int`](class_int.md) **mesh** = ``-1`` <div id="class_gltfnode_property_mesh"></div>

- `void` **set_mesh** ( value: [`int`](class_int.md) )
- [`int`](class_int.md) **get_mesh** ( )

If this glTF node is a mesh, the index of the [`GLTFMesh`](class_gltfmesh.md) in the [`GLTFState`](class_gltfstate.md) that describes the mesh's properties. If -1, this node is not a mesh.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_gltfnode_property_original_name"></div>

[`String`](class_string.md) **original_name** = ``""`` <div id="class_gltfnode_property_original_name"></div>

- `void` **set_original_name** ( value: [`String`](class_string.md) )
- [`String`](class_string.md) **get_original_name** ( )

The original name of the node.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_gltfnode_property_parent"></div>

[`int`](class_int.md) **parent** = ``-1`` <div id="class_gltfnode_property_parent"></div>

- `void` **set_parent** ( value: [`int`](class_int.md) )
- [`int`](class_int.md) **get_parent** ( )

The index of the parent node in the [`GLTFState`](class_gltfstate.md). If -1, this node is a root node.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_gltfnode_property_position"></div>

[`Vector3`](class_vector3.md) **position** = ``Vector3(0, 0, 0)`` <div id="class_gltfnode_property_position"></div>

- `void` **set_position** ( value: [`Vector3`](class_vector3.md) )
- [`Vector3`](class_vector3.md) **get_position** ( )

The position of the glTF node relative to its parent.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_gltfnode_property_rotation"></div>

[`Quaternion`](class_quaternion.md) **rotation** = ``Quaternion(0, 0, 0, 1)`` <div id="class_gltfnode_property_rotation"></div>

- `void` **set_rotation** ( value: [`Quaternion`](class_quaternion.md) )
- [`Quaternion`](class_quaternion.md) **get_rotation** ( )

The rotation of the glTF node relative to its parent.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_gltfnode_property_scale"></div>

[`Vector3`](class_vector3.md) **scale** = ``Vector3(1, 1, 1)`` <div id="class_gltfnode_property_scale"></div>

- `void` **set_scale** ( value: [`Vector3`](class_vector3.md) )
- [`Vector3`](class_vector3.md) **get_scale** ( )

The scale of the glTF node relative to its parent.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_gltfnode_property_skeleton"></div>

[`int`](class_int.md) **skeleton** = ``-1`` <div id="class_gltfnode_property_skeleton"></div>

- `void` **set_skeleton** ( value: [`int`](class_int.md) )
- [`int`](class_int.md) **get_skeleton** ( )

If this glTF node has a skeleton, the index of the [`GLTFSkeleton`](class_gltfskeleton.md) in the [`GLTFState`](class_gltfstate.md) that describes the skeleton's properties. If -1, this node does not have a skeleton.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_gltfnode_property_skin"></div>

[`int`](class_int.md) **skin** = ``-1`` <div id="class_gltfnode_property_skin"></div>

- `void` **set_skin** ( value: [`int`](class_int.md) )
- [`int`](class_int.md) **get_skin** ( )

If this glTF node has a skin, the index of the [`GLTFSkin`](class_gltfskin.md) in the [`GLTFState`](class_gltfstate.md) that describes the skin's properties. If -1, this node does not have a skin.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_gltfnode_property_xform"></div>

[`Transform3D`](class_transform3d.md) **xform** = ``Transform3D(1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0)`` <div id="class_gltfnode_property_xform"></div>

- `void` **set_xform** ( value: [`Transform3D`](class_transform3d.md) )
- [`Transform3D`](class_transform3d.md) **get_xform** ( )

The transform of the glTF node relative to its parent. This property is usually unused since the position, rotation, and scale properties are preferred.

<!-- rst-class:: classref-section-separator -->

---

## 方法说明

<div id="_class_gltfnode_method_append_child_index"></div>

`void` **append_child_index** ( child_index: [`int`](class_int.md) )<div id="class_gltfnode_method_append_child_index"></div>

Appends the given child node index to the [`children`](class_gltfnode.md#class_gltfnode_property_children) array.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_gltfnode_method_get_additional_data"></div>

[`Variant`](class_variant.md) **get_additional_data** ( extension_name: [`StringName`](class_stringname.md) )<div id="class_gltfnode_method_get_additional_data"></div>

Gets additional arbitrary data in this **GLTFNode** instance. This can be used to keep per-node state data in [`GLTFDocumentExtension`](class_gltfdocumentextension.md) classes, which is important because they are stateless.

The argument should be the [`GLTFDocumentExtension`](class_gltfdocumentextension.md) name (does not have to match the extension name in the glTF file), and the return value can be anything you set. If nothing was set, the return value is null.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_gltfnode_method_get_scene_node_path"></div>

[`NodePath`](class_nodepath.md) **get_scene_node_path** ( gltf_state: [`GLTFState`](class_gltfstate.md), handle_skeletons: [`bool`](class_bool.md) = true )<div id="class_gltfnode_method_get_scene_node_path"></div>

Returns the [`NodePath`](class_nodepath.md) that this GLTF node will have in the Godot scene tree after being imported. This is useful when importing glTF object model pointers with [`GLTFObjectModelProperty`](class_gltfobjectmodelproperty.md), for handling extensions such as `KHR_animation_pointer` or `KHR_interactivity`.

If `handle_skeletons` is true, paths to skeleton bone glTF nodes will be resolved properly. For example, a path that would be `^"A/B/C/Bone1/Bone2/Bone3"` if false will become `^"A/B/C/Skeleton3D:Bone3"`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_gltfnode_method_set_additional_data"></div>

`void` **set_additional_data** ( extension_name: [`StringName`](class_stringname.md), additional_data: [`Variant`](class_variant.md) )<div id="class_gltfnode_method_set_additional_data"></div>

Sets additional arbitrary data in this **GLTFNode** instance. This can be used to keep per-node state data in [`GLTFDocumentExtension`](class_gltfdocumentextension.md) classes, which is important because they are stateless.

The first argument should be the [`GLTFDocumentExtension`](class_gltfdocumentextension.md) name (does not have to match the extension name in the glTF file), and the second argument can be anything you want.

[^virtual]: 本方法通常需要用户覆盖才能生效。
[^const]: 本方法无副作用，不会修改该实例的任何成员变量。
[^vararg]: 本方法除了能接受在此处描述的参数外，还能够继续接受任意数量的参数。
[^constructor]: 本方法用于构造某个类型。
[^static]: 调用本方法无需实例，可直接使用类名进行调用。
[^operator]: 本方法描述的是使用本类型作为左操作数的有效运算符。
[^bitfield]: 这个值是由下列位标志构成位掩码的整数。
[^void]: 无返回值。
