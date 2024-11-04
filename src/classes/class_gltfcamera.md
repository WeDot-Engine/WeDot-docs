<!-- ⚠ 请勿编辑本文件 ⚠ -->
<!-- 本文档使用脚本从 WeDot 引擎源码仓库生成。 -->
<!-- 生成脚本：https://github.com/WeDot-Engine/WeDot/tree/4.3/doc/tools/make_md.py； -->
<!-- 原文件：https://github.com/WeDot-Engine/WeDot/tree/4.3/modules/gltf/doc_classes/GLTFCamera.xml。 -->

<div id="_class_gltfcamera"></div>

# GLTFCamera

**继承：** [`Resource`](class_resource.md) **<** [`RefCounted`](class_refcounted.md) **<** [`Object`](class_object.md)

Represents a GLTF camera.

## 描述

Represents a camera as defined by the base GLTF spec.

## 属性

| [`float`](class_float.md) | [`depth_far`](#class_gltfcamera_property_depth_far)     | ``4000.0`` |
| [`float`](class_float.md) | [`depth_near`](#class_gltfcamera_property_depth_near)   | ``0.05``   |
| [`float`](class_float.md) | [`fov`](#class_gltfcamera_property_fov)                 | ``1.309``  |
| [`bool`](class_bool.md)   | [`perspective`](#class_gltfcamera_property_perspective) | ``true``   |
| [`float`](class_float.md) | [`size_mag`](#class_gltfcamera_property_size_mag)       | ``0.5``    |

## 方法

| [`GLTFCamera`](class_gltfcamera.md) | [`from_dictionary`](#class_gltfcamera_method_from_dictionary) ( dictionary: [`Dictionary`](class_dictionary.md) ) static[^static] |
| [`GLTFCamera`](class_gltfcamera.md) | [`from_node`](#class_gltfcamera_method_from_node) ( camera_node: [`Camera3D`](class_camera3d.md) ) static[^static]                |
| [`Dictionary`](class_dictionary.md) | [`to_dictionary`](#class_gltfcamera_method_to_dictionary) ( ) const[^const]                                                       |
| [`Camera3D`](class_camera3d.md)     | [`to_node`](#class_gltfcamera_method_to_node) ( ) const[^const]                                                                   |

<!-- rst-class:: classref-section-separator -->

---

## 属性说明

<div id="_class_gltfcamera_property_depth_far"></div>

[`float`](class_float.md) **depth_far** = ``4000.0`` <div id="class_gltfcamera_property_depth_far"></div>

- `void` **set_depth_far** ( value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_depth_far** ( )

The distance to the far culling boundary for this camera relative to its local Z axis, in meters. This maps to GLTF's `zfar` property.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_gltfcamera_property_depth_near"></div>

[`float`](class_float.md) **depth_near** = ``0.05`` <div id="class_gltfcamera_property_depth_near"></div>

- `void` **set_depth_near** ( value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_depth_near** ( )

The distance to the near culling boundary for this camera relative to its local Z axis, in meters. This maps to GLTF's `znear` property.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_gltfcamera_property_fov"></div>

[`float`](class_float.md) **fov** = ``1.309`` <div id="class_gltfcamera_property_fov"></div>

- `void` **set_fov** ( value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_fov** ( )

The FOV of the camera. This class and GLTF define the camera FOV in radians, while Godot uses degrees. This maps to GLTF's `yfov` property. This value is only used for perspective cameras, when [`perspective`](#class_gltfcamera_property_perspective) is true.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_gltfcamera_property_perspective"></div>

[`bool`](class_bool.md) **perspective** = ``true`` <div id="class_gltfcamera_property_perspective"></div>

- `void` **set_perspective** ( value: [`bool`](class_bool.md) )
- [`bool`](class_bool.md) **get_perspective** ( )

Whether or not the camera is in perspective mode. If false, the camera is in orthographic/orthogonal mode. This maps to GLTF's camera `type` property. See [`Camera3D.projection`](#class_camera3d_property_projection) and the GLTF spec for more information.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_gltfcamera_property_size_mag"></div>

[`float`](class_float.md) **size_mag** = ``0.5`` <div id="class_gltfcamera_property_size_mag"></div>

- `void` **set_size_mag** ( value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_size_mag** ( )

The size of the camera. This class and GLTF define the camera size magnitude as a radius in meters, while Godot defines it as a diameter in meters. This maps to GLTF's `ymag` property. This value is only used for orthographic/orthogonal cameras, when [`perspective`](#class_gltfcamera_property_perspective) is false.

<!-- rst-class:: classref-section-separator -->

---

## 方法说明

<div id="_class_gltfcamera_method_from_dictionary"></div>

[`GLTFCamera`](class_gltfcamera.md) **from_dictionary** ( dictionary: [`Dictionary`](class_dictionary.md) ) static[^static]<div id="class_gltfcamera_method_from_dictionary"></div>

Creates a new GLTFCamera instance by parsing the given [`Dictionary`](class_dictionary.md).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_gltfcamera_method_from_node"></div>

[`GLTFCamera`](class_gltfcamera.md) **from_node** ( camera_node: [`Camera3D`](class_camera3d.md) ) static[^static]<div id="class_gltfcamera_method_from_node"></div>

Create a new GLTFCamera instance from the given Godot [`Camera3D`](class_camera3d.md) node.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_gltfcamera_method_to_dictionary"></div>

[`Dictionary`](class_dictionary.md) **to_dictionary** ( ) const[^const]<div id="class_gltfcamera_method_to_dictionary"></div>

Serializes this GLTFCamera instance into a [`Dictionary`](class_dictionary.md).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_gltfcamera_method_to_node"></div>

[`Camera3D`](class_camera3d.md) **to_node** ( ) const[^const]<div id="class_gltfcamera_method_to_node"></div>

Converts this GLTFCamera instance into a Godot [`Camera3D`](class_camera3d.md) node.

[^virtual]: 本方法通常需要用户覆盖才能生效。
[^const]: 本方法无副作用，不会修改该实例的任何成员变量。
[^vararg]: 本方法除了能接受在此处描述的参数外，还能够继续接受任意数量的参数。
[^constructor]: 本方法用于构造某个类型。
[^static]: 调用本方法无需实例，可直接使用类名进行调用。
[^operator]: 本方法描述的是使用本类型作为左操作数的有效运算符。
[^bitfield]: 这个值是由下列位标志构成位掩码的整数。
[^void]: 无返回值。
