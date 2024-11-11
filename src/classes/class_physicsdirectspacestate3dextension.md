<!-- ⚠ 请勿编辑本文件 ⚠ -->
<!-- 本文档使用脚本从 WeDot 引擎源码仓库生成。 -->
<!-- 生成脚本：https://github.com/WeDot-Engine/WeDot/tree/master/doc/tools/make_md.py； -->
<!-- 原文件：https://github.com/WeDot-Engine/WeDot/tree/master/doc/classes/PhysicsDirectSpaceState3DExtension.xml。 -->

<div id="_class_physicsdirectspacestate3dextension"></div>

# PhysicsDirectSpaceState3DExtension

**继承：** [`PhysicsDirectSpaceState3D`](class_physicsdirectspacestate3d.md) **<** [`Object`](class_object.md)

Provides virtual methods that can be overridden to create custom [`PhysicsDirectSpaceState3D`](class_physicsdirectspacestate3d.md) implementations.

## 描述

This class extends [`PhysicsDirectSpaceState3D`](class_physicsdirectspacestate3d.md) by providing additional virtual methods that can be overridden. When these methods are overridden, they will be called instead of the internal methods of the physics server.

Intended for use with GDExtension to create custom implementations of [`PhysicsDirectSpaceState3D`](class_physicsdirectspacestate3d.md).

## 方法

|||
|:-:|:--|
| [`bool`](class_bool.md)       | [`_cast_motion`](class_physicsdirectspacestate3dextension.md#class_physicsdirectspacestate3dextension_private_method__cast_motion) ( shape_rid: [`RID`](class_rid.md), transform: [`Transform3D`](class_transform3d.md), motion: [`Vector3`](class_vector3.md), margin: [`float`](class_float.md), collision_mask: [`int`](class_int.md), collide_with_bodies: [`bool`](class_bool.md), collide_with_areas: [`bool`](class_bool.md), closest_safe: `float*`, closest_unsafe: `float*`, info: `PhysicsServer3DExtensionShapeRestInfo*` ) virtual[^virtual] |
| [`bool`](class_bool.md)       | [`_collide_shape`](class_physicsdirectspacestate3dextension.md#class_physicsdirectspacestate3dextension_private_method__collide_shape) ( shape_rid: [`RID`](class_rid.md), transform: [`Transform3D`](class_transform3d.md), motion: [`Vector3`](class_vector3.md), margin: [`float`](class_float.md), collision_mask: [`int`](class_int.md), collide_with_bodies: [`bool`](class_bool.md), collide_with_areas: [`bool`](class_bool.md), results: `void*`, max_results: [`int`](class_int.md), result_count: `int32_t*` ) virtual[^virtual]               |
| [`Vector3`](class_vector3.md) | [`_get_closest_point_to_object_volume`](class_physicsdirectspacestate3dextension.md#class_physicsdirectspacestate3dextension_private_method__get_closest_point_to_object_volume) ( object: [`RID`](class_rid.md), point: [`Vector3`](class_vector3.md) ) virtual[^virtual] const[^const]                                                                                                                                                                                                                                                                  |
| [`int`](class_int.md)         | [`_intersect_point`](class_physicsdirectspacestate3dextension.md#class_physicsdirectspacestate3dextension_private_method__intersect_point) ( position: [`Vector3`](class_vector3.md), collision_mask: [`int`](class_int.md), collide_with_bodies: [`bool`](class_bool.md), collide_with_areas: [`bool`](class_bool.md), results: `PhysicsServer3DExtensionShapeResult*`, max_results: [`int`](class_int.md) ) virtual[^virtual]                                                                                                                           |
| [`bool`](class_bool.md)       | [`_intersect_ray`](class_physicsdirectspacestate3dextension.md#class_physicsdirectspacestate3dextension_private_method__intersect_ray) ( from: [`Vector3`](class_vector3.md), to: [`Vector3`](class_vector3.md), collision_mask: [`int`](class_int.md), collide_with_bodies: [`bool`](class_bool.md), collide_with_areas: [`bool`](class_bool.md), hit_from_inside: [`bool`](class_bool.md), hit_back_faces: [`bool`](class_bool.md), pick_ray: [`bool`](class_bool.md), result: `PhysicsServer3DExtensionRayResult*` ) virtual[^virtual]                 |
| [`int`](class_int.md)         | [`_intersect_shape`](class_physicsdirectspacestate3dextension.md#class_physicsdirectspacestate3dextension_private_method__intersect_shape) ( shape_rid: [`RID`](class_rid.md), transform: [`Transform3D`](class_transform3d.md), motion: [`Vector3`](class_vector3.md), margin: [`float`](class_float.md), collision_mask: [`int`](class_int.md), collide_with_bodies: [`bool`](class_bool.md), collide_with_areas: [`bool`](class_bool.md), result_count: `PhysicsServer3DExtensionShapeResult*`, max_results: [`int`](class_int.md) ) virtual[^virtual] |
| [`bool`](class_bool.md)       | [`_rest_info`](class_physicsdirectspacestate3dextension.md#class_physicsdirectspacestate3dextension_private_method__rest_info) ( shape_rid: [`RID`](class_rid.md), transform: [`Transform3D`](class_transform3d.md), motion: [`Vector3`](class_vector3.md), margin: [`float`](class_float.md), collision_mask: [`int`](class_int.md), collide_with_bodies: [`bool`](class_bool.md), collide_with_areas: [`bool`](class_bool.md), rest_info: `PhysicsServer3DExtensionShapeRestInfo*` ) virtual[^virtual]                                                  |
| [`bool`](class_bool.md)       | [`is_body_excluded_from_query`](class_physicsdirectspacestate3dextension.md#class_physicsdirectspacestate3dextension_method_is_body_excluded_from_query) ( body: [`RID`](class_rid.md) ) const[^const]                                                                                                                                                                                                                                                                                                                                                    |

<!-- rst-class:: classref-section-separator -->

---

## 方法说明

<div id="_class_physicsdirectspacestate3dextension_private_method__cast_motion"></div>

[`bool`](class_bool.md) **_cast_motion** ( shape_rid: [`RID`](class_rid.md), transform: [`Transform3D`](class_transform3d.md), motion: [`Vector3`](class_vector3.md), margin: [`float`](class_float.md), collision_mask: [`int`](class_int.md), collide_with_bodies: [`bool`](class_bool.md), collide_with_areas: [`bool`](class_bool.md), closest_safe: `float*`, closest_unsafe: `float*`, info: `PhysicsServer3DExtensionShapeRestInfo*` ) virtual[^virtual]<div id="class_physicsdirectspacestate3dextension_private_method__cast_motion"></div>

该方法目前没有描述，请帮我们\ :ref:`贡献一个 <doc_updating_the_class_reference>`\ 吧！

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsdirectspacestate3dextension_private_method__collide_shape"></div>

[`bool`](class_bool.md) **_collide_shape** ( shape_rid: [`RID`](class_rid.md), transform: [`Transform3D`](class_transform3d.md), motion: [`Vector3`](class_vector3.md), margin: [`float`](class_float.md), collision_mask: [`int`](class_int.md), collide_with_bodies: [`bool`](class_bool.md), collide_with_areas: [`bool`](class_bool.md), results: `void*`, max_results: [`int`](class_int.md), result_count: `int32_t*` ) virtual[^virtual]<div id="class_physicsdirectspacestate3dextension_private_method__collide_shape"></div>

该方法目前没有描述，请帮我们\ :ref:`贡献一个 <doc_updating_the_class_reference>`\ 吧！

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsdirectspacestate3dextension_private_method__get_closest_point_to_object_volume"></div>

[`Vector3`](class_vector3.md) **_get_closest_point_to_object_volume** ( object: [`RID`](class_rid.md), point: [`Vector3`](class_vector3.md) ) virtual[^virtual] const[^const]<div id="class_physicsdirectspacestate3dextension_private_method__get_closest_point_to_object_volume"></div>

该方法目前没有描述，请帮我们\ :ref:`贡献一个 <doc_updating_the_class_reference>`\ 吧！

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsdirectspacestate3dextension_private_method__intersect_point"></div>

[`int`](class_int.md) **_intersect_point** ( position: [`Vector3`](class_vector3.md), collision_mask: [`int`](class_int.md), collide_with_bodies: [`bool`](class_bool.md), collide_with_areas: [`bool`](class_bool.md), results: `PhysicsServer3DExtensionShapeResult*`, max_results: [`int`](class_int.md) ) virtual[^virtual]<div id="class_physicsdirectspacestate3dextension_private_method__intersect_point"></div>

该方法目前没有描述，请帮我们\ :ref:`贡献一个 <doc_updating_the_class_reference>`\ 吧！

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsdirectspacestate3dextension_private_method__intersect_ray"></div>

[`bool`](class_bool.md) **_intersect_ray** ( from: [`Vector3`](class_vector3.md), to: [`Vector3`](class_vector3.md), collision_mask: [`int`](class_int.md), collide_with_bodies: [`bool`](class_bool.md), collide_with_areas: [`bool`](class_bool.md), hit_from_inside: [`bool`](class_bool.md), hit_back_faces: [`bool`](class_bool.md), pick_ray: [`bool`](class_bool.md), result: `PhysicsServer3DExtensionRayResult*` ) virtual[^virtual]<div id="class_physicsdirectspacestate3dextension_private_method__intersect_ray"></div>

该方法目前没有描述，请帮我们\ :ref:`贡献一个 <doc_updating_the_class_reference>`\ 吧！

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsdirectspacestate3dextension_private_method__intersect_shape"></div>

[`int`](class_int.md) **_intersect_shape** ( shape_rid: [`RID`](class_rid.md), transform: [`Transform3D`](class_transform3d.md), motion: [`Vector3`](class_vector3.md), margin: [`float`](class_float.md), collision_mask: [`int`](class_int.md), collide_with_bodies: [`bool`](class_bool.md), collide_with_areas: [`bool`](class_bool.md), result_count: `PhysicsServer3DExtensionShapeResult*`, max_results: [`int`](class_int.md) ) virtual[^virtual]<div id="class_physicsdirectspacestate3dextension_private_method__intersect_shape"></div>

该方法目前没有描述，请帮我们\ :ref:`贡献一个 <doc_updating_the_class_reference>`\ 吧！

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsdirectspacestate3dextension_private_method__rest_info"></div>

[`bool`](class_bool.md) **_rest_info** ( shape_rid: [`RID`](class_rid.md), transform: [`Transform3D`](class_transform3d.md), motion: [`Vector3`](class_vector3.md), margin: [`float`](class_float.md), collision_mask: [`int`](class_int.md), collide_with_bodies: [`bool`](class_bool.md), collide_with_areas: [`bool`](class_bool.md), rest_info: `PhysicsServer3DExtensionShapeRestInfo*` ) virtual[^virtual]<div id="class_physicsdirectspacestate3dextension_private_method__rest_info"></div>

该方法目前没有描述，请帮我们\ :ref:`贡献一个 <doc_updating_the_class_reference>`\ 吧！

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsdirectspacestate3dextension_method_is_body_excluded_from_query"></div>

[`bool`](class_bool.md) **is_body_excluded_from_query** ( body: [`RID`](class_rid.md) ) const[^const]<div id="class_physicsdirectspacestate3dextension_method_is_body_excluded_from_query"></div>

该方法目前没有描述，请帮我们\ :ref:`贡献一个 <doc_updating_the_class_reference>`\ 吧！

[^virtual]: 本方法通常需要用户覆盖才能生效。
[^const]: 本方法无副作用，不会修改该实例的任何成员变量。
[^vararg]: 本方法除了能接受在此处描述的参数外，还能够继续接受任意数量的参数。
[^constructor]: 本方法用于构造某个类型。
[^static]: 调用本方法无需实例，可直接使用类名进行调用。
[^operator]: 本方法描述的是使用本类型作为左操作数的有效运算符。
[^bitfield]: 这个值是由下列位标志构成位掩码的整数。
[^void]: 无返回值。
