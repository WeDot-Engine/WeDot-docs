<!-- ⚠ 请勿编辑本文件 ⚠ -->
<!-- 本文档使用脚本从 WeDot 引擎源码仓库生成。 -->
<!-- 生成脚本：https://github.com/WeDot-Engine/WeDot/tree/4.3/doc/tools/make_md.py； -->
<!-- 原文件：https://github.com/WeDot-Engine/WeDot/tree/4.3/doc/classes/PhysicsServer3DExtension.xml。 -->

<div id="_class_physicsserver3dextension"></div>

# PhysicsServer3DExtension

**继承：** [`PhysicsServer3D`](class_physicsserver3d.md) **<** [`Object`](class_object.md)

Provides virtual methods that can be overridden to create custom [`PhysicsServer3D`](class_physicsserver3d.md) implementations.

## 描述

This class extends [`PhysicsServer3D`](class_physicsserver3d.md) by providing additional virtual methods that can be overridden. When these methods are overridden, they will be called instead of the internal methods of the physics server.

Intended for use with GDExtension to create custom implementations of [`PhysicsServer3D`](class_physicsserver3d.md).

## 方法

| `void`                                                            | [`_area_add_shape`](#class_physicsserver3dextension_private_method__area_add_shape) ( area: [`RID`](class_rid.md), shape: [`RID`](class_rid.md), transform: [`Transform3D`](class_transform3d.md), disabled: [`bool`](class_bool.md) ) virtual[^virtual]                                                                                                                                                                                                                |
| `void`                                                            | [`_area_attach_object_instance_id`](#class_physicsserver3dextension_private_method__area_attach_object_instance_id) ( area: [`RID`](class_rid.md), id: [`int`](class_int.md) ) virtual[^virtual]                                                                                                                                                                                                                                                                        |
| `void`                                                            | [`_area_clear_shapes`](#class_physicsserver3dextension_private_method__area_clear_shapes) ( area: [`RID`](class_rid.md) ) virtual[^virtual]                                                                                                                                                                                                                                                                                                                             |
| [`RID`](class_rid.md)                                             | [`_area_create`](#class_physicsserver3dextension_private_method__area_create) ( ) virtual[^virtual]                                                                                                                                                                                                                                                                                                                                                                     |
| [`int`](class_int.md)                                             | [`_area_get_collision_layer`](#class_physicsserver3dextension_private_method__area_get_collision_layer) ( area: [`RID`](class_rid.md) ) virtual[^virtual] const[^const]                                                                                                                                                                                                                                                                                                 |
| [`int`](class_int.md)                                             | [`_area_get_collision_mask`](#class_physicsserver3dextension_private_method__area_get_collision_mask) ( area: [`RID`](class_rid.md) ) virtual[^virtual] const[^const]                                                                                                                                                                                                                                                                                                   |
| [`int`](class_int.md)                                             | [`_area_get_object_instance_id`](#class_physicsserver3dextension_private_method__area_get_object_instance_id) ( area: [`RID`](class_rid.md) ) virtual[^virtual] const[^const]                                                                                                                                                                                                                                                                                           |
| [`Variant`](class_variant.md)                                     | [`_area_get_param`](#class_physicsserver3dextension_private_method__area_get_param) ( area: [`RID`](class_rid.md), param: [AreaParameter](#enum_physicsserver3d_areaparameter) ) virtual[^virtual] const[^const]                                                                                                                                                                                                                                                        |
| [`RID`](class_rid.md)                                             | [`_area_get_shape`](#class_physicsserver3dextension_private_method__area_get_shape) ( area: [`RID`](class_rid.md), shape_idx: [`int`](class_int.md) ) virtual[^virtual] const[^const]                                                                                                                                                                                                                                                                                   |
| [`int`](class_int.md)                                             | [`_area_get_shape_count`](#class_physicsserver3dextension_private_method__area_get_shape_count) ( area: [`RID`](class_rid.md) ) virtual[^virtual] const[^const]                                                                                                                                                                                                                                                                                                         |
| [`Transform3D`](class_transform3d.md)                             | [`_area_get_shape_transform`](#class_physicsserver3dextension_private_method__area_get_shape_transform) ( area: [`RID`](class_rid.md), shape_idx: [`int`](class_int.md) ) virtual[^virtual] const[^const]                                                                                                                                                                                                                                                               |
| [`RID`](class_rid.md)                                             | [`_area_get_space`](#class_physicsserver3dextension_private_method__area_get_space) ( area: [`RID`](class_rid.md) ) virtual[^virtual] const[^const]                                                                                                                                                                                                                                                                                                                     |
| [`Transform3D`](class_transform3d.md)                             | [`_area_get_transform`](#class_physicsserver3dextension_private_method__area_get_transform) ( area: [`RID`](class_rid.md) ) virtual[^virtual] const[^const]                                                                                                                                                                                                                                                                                                             |
| `void`                                                            | [`_area_remove_shape`](#class_physicsserver3dextension_private_method__area_remove_shape) ( area: [`RID`](class_rid.md), shape_idx: [`int`](class_int.md) ) virtual[^virtual]                                                                                                                                                                                                                                                                                           |
| `void`                                                            | [`_area_set_area_monitor_callback`](#class_physicsserver3dextension_private_method__area_set_area_monitor_callback) ( area: [`RID`](class_rid.md), callback: [`Callable`](class_callable.md) ) virtual[^virtual]                                                                                                                                                                                                                                                        |
| `void`                                                            | [`_area_set_collision_layer`](#class_physicsserver3dextension_private_method__area_set_collision_layer) ( area: [`RID`](class_rid.md), layer: [`int`](class_int.md) ) virtual[^virtual]                                                                                                                                                                                                                                                                                 |
| `void`                                                            | [`_area_set_collision_mask`](#class_physicsserver3dextension_private_method__area_set_collision_mask) ( area: [`RID`](class_rid.md), mask: [`int`](class_int.md) ) virtual[^virtual]                                                                                                                                                                                                                                                                                    |
| `void`                                                            | [`_area_set_monitor_callback`](#class_physicsserver3dextension_private_method__area_set_monitor_callback) ( area: [`RID`](class_rid.md), callback: [`Callable`](class_callable.md) ) virtual[^virtual]                                                                                                                                                                                                                                                                  |
| `void`                                                            | [`_area_set_monitorable`](#class_physicsserver3dextension_private_method__area_set_monitorable) ( area: [`RID`](class_rid.md), monitorable: [`bool`](class_bool.md) ) virtual[^virtual]                                                                                                                                                                                                                                                                                 |
| `void`                                                            | [`_area_set_param`](#class_physicsserver3dextension_private_method__area_set_param) ( area: [`RID`](class_rid.md), param: [AreaParameter](#enum_physicsserver3d_areaparameter), value: [`Variant`](class_variant.md) ) virtual[^virtual]                                                                                                                                                                                                                                |
| `void`                                                            | [`_area_set_ray_pickable`](#class_physicsserver3dextension_private_method__area_set_ray_pickable) ( area: [`RID`](class_rid.md), enable: [`bool`](class_bool.md) ) virtual[^virtual]                                                                                                                                                                                                                                                                                    |
| `void`                                                            | [`_area_set_shape`](#class_physicsserver3dextension_private_method__area_set_shape) ( area: [`RID`](class_rid.md), shape_idx: [`int`](class_int.md), shape: [`RID`](class_rid.md) ) virtual[^virtual]                                                                                                                                                                                                                                                                   |
| `void`                                                            | [`_area_set_shape_disabled`](#class_physicsserver3dextension_private_method__area_set_shape_disabled) ( area: [`RID`](class_rid.md), shape_idx: [`int`](class_int.md), disabled: [`bool`](class_bool.md) ) virtual[^virtual]                                                                                                                                                                                                                                            |
| `void`                                                            | [`_area_set_shape_transform`](#class_physicsserver3dextension_private_method__area_set_shape_transform) ( area: [`RID`](class_rid.md), shape_idx: [`int`](class_int.md), transform: [`Transform3D`](class_transform3d.md) ) virtual[^virtual]                                                                                                                                                                                                                           |
| `void`                                                            | [`_area_set_space`](#class_physicsserver3dextension_private_method__area_set_space) ( area: [`RID`](class_rid.md), space: [`RID`](class_rid.md) ) virtual[^virtual]                                                                                                                                                                                                                                                                                                     |
| `void`                                                            | [`_area_set_transform`](#class_physicsserver3dextension_private_method__area_set_transform) ( area: [`RID`](class_rid.md), transform: [`Transform3D`](class_transform3d.md) ) virtual[^virtual]                                                                                                                                                                                                                                                                         |
| `void`                                                            | [`_body_add_collision_exception`](#class_physicsserver3dextension_private_method__body_add_collision_exception) ( body: [`RID`](class_rid.md), excepted_body: [`RID`](class_rid.md) ) virtual[^virtual]                                                                                                                                                                                                                                                                 |
| `void`                                                            | [`_body_add_constant_central_force`](#class_physicsserver3dextension_private_method__body_add_constant_central_force) ( body: [`RID`](class_rid.md), force: [`Vector3`](class_vector3.md) ) virtual[^virtual]                                                                                                                                                                                                                                                           |
| `void`                                                            | [`_body_add_constant_force`](#class_physicsserver3dextension_private_method__body_add_constant_force) ( body: [`RID`](class_rid.md), force: [`Vector3`](class_vector3.md), position: [`Vector3`](class_vector3.md) ) virtual[^virtual]                                                                                                                                                                                                                                  |
| `void`                                                            | [`_body_add_constant_torque`](#class_physicsserver3dextension_private_method__body_add_constant_torque) ( body: [`RID`](class_rid.md), torque: [`Vector3`](class_vector3.md) ) virtual[^virtual]                                                                                                                                                                                                                                                                        |
| `void`                                                            | [`_body_add_shape`](#class_physicsserver3dextension_private_method__body_add_shape) ( body: [`RID`](class_rid.md), shape: [`RID`](class_rid.md), transform: [`Transform3D`](class_transform3d.md), disabled: [`bool`](class_bool.md) ) virtual[^virtual]                                                                                                                                                                                                                |
| `void`                                                            | [`_body_apply_central_force`](#class_physicsserver3dextension_private_method__body_apply_central_force) ( body: [`RID`](class_rid.md), force: [`Vector3`](class_vector3.md) ) virtual[^virtual]                                                                                                                                                                                                                                                                         |
| `void`                                                            | [`_body_apply_central_impulse`](#class_physicsserver3dextension_private_method__body_apply_central_impulse) ( body: [`RID`](class_rid.md), impulse: [`Vector3`](class_vector3.md) ) virtual[^virtual]                                                                                                                                                                                                                                                                   |
| `void`                                                            | [`_body_apply_force`](#class_physicsserver3dextension_private_method__body_apply_force) ( body: [`RID`](class_rid.md), force: [`Vector3`](class_vector3.md), position: [`Vector3`](class_vector3.md) ) virtual[^virtual]                                                                                                                                                                                                                                                |
| `void`                                                            | [`_body_apply_impulse`](#class_physicsserver3dextension_private_method__body_apply_impulse) ( body: [`RID`](class_rid.md), impulse: [`Vector3`](class_vector3.md), position: [`Vector3`](class_vector3.md) ) virtual[^virtual]                                                                                                                                                                                                                                          |
| `void`                                                            | [`_body_apply_torque`](#class_physicsserver3dextension_private_method__body_apply_torque) ( body: [`RID`](class_rid.md), torque: [`Vector3`](class_vector3.md) ) virtual[^virtual]                                                                                                                                                                                                                                                                                      |
| `void`                                                            | [`_body_apply_torque_impulse`](#class_physicsserver3dextension_private_method__body_apply_torque_impulse) ( body: [`RID`](class_rid.md), impulse: [`Vector3`](class_vector3.md) ) virtual[^virtual]                                                                                                                                                                                                                                                                     |
| `void`                                                            | [`_body_attach_object_instance_id`](#class_physicsserver3dextension_private_method__body_attach_object_instance_id) ( body: [`RID`](class_rid.md), id: [`int`](class_int.md) ) virtual[^virtual]                                                                                                                                                                                                                                                                        |
| `void`                                                            | [`_body_clear_shapes`](#class_physicsserver3dextension_private_method__body_clear_shapes) ( body: [`RID`](class_rid.md) ) virtual[^virtual]                                                                                                                                                                                                                                                                                                                             |
| [`RID`](class_rid.md)                                             | [`_body_create`](#class_physicsserver3dextension_private_method__body_create) ( ) virtual[^virtual]                                                                                                                                                                                                                                                                                                                                                                     |
| [Array](class_array.md) [`RID`](class_rid.md)                     | [`_body_get_collision_exceptions`](#class_physicsserver3dextension_private_method__body_get_collision_exceptions) ( body: [`RID`](class_rid.md) ) virtual[^virtual] const[^const]                                                                                                                                                                                                                                                                                       |
| [`int`](class_int.md)                                             | [`_body_get_collision_layer`](#class_physicsserver3dextension_private_method__body_get_collision_layer) ( body: [`RID`](class_rid.md) ) virtual[^virtual] const[^const]                                                                                                                                                                                                                                                                                                 |
| [`int`](class_int.md)                                             | [`_body_get_collision_mask`](#class_physicsserver3dextension_private_method__body_get_collision_mask) ( body: [`RID`](class_rid.md) ) virtual[^virtual] const[^const]                                                                                                                                                                                                                                                                                                   |
| [`float`](class_float.md)                                         | [`_body_get_collision_priority`](#class_physicsserver3dextension_private_method__body_get_collision_priority) ( body: [`RID`](class_rid.md) ) virtual[^virtual] const[^const]                                                                                                                                                                                                                                                                                           |
| [`Vector3`](class_vector3.md)                                     | [`_body_get_constant_force`](#class_physicsserver3dextension_private_method__body_get_constant_force) ( body: [`RID`](class_rid.md) ) virtual[^virtual] const[^const]                                                                                                                                                                                                                                                                                                   |
| [`Vector3`](class_vector3.md)                                     | [`_body_get_constant_torque`](#class_physicsserver3dextension_private_method__body_get_constant_torque) ( body: [`RID`](class_rid.md) ) virtual[^virtual] const[^const]                                                                                                                                                                                                                                                                                                 |
| [`float`](class_float.md)                                         | [`_body_get_contacts_reported_depth_threshold`](#class_physicsserver3dextension_private_method__body_get_contacts_reported_depth_threshold) ( body: [`RID`](class_rid.md) ) virtual[^virtual] const[^const]                                                                                                                                                                                                                                                             |
| [`PhysicsDirectBodyState3D`](class_physicsdirectbodystate3d.md)   | [`_body_get_direct_state`](#class_physicsserver3dextension_private_method__body_get_direct_state) ( body: [`RID`](class_rid.md) ) virtual[^virtual]                                                                                                                                                                                                                                                                                                                     |
| [`int`](class_int.md)                                             | [`_body_get_max_contacts_reported`](#class_physicsserver3dextension_private_method__body_get_max_contacts_reported) ( body: [`RID`](class_rid.md) ) virtual[^virtual] const[^const]                                                                                                                                                                                                                                                                                     |
| [BodyMode](#enum_physicsserver3d_bodymode)                        | [`_body_get_mode`](#class_physicsserver3dextension_private_method__body_get_mode) ( body: [`RID`](class_rid.md) ) virtual[^virtual] const[^const]                                                                                                                                                                                                                                                                                                                       |
| [`int`](class_int.md)                                             | [`_body_get_object_instance_id`](#class_physicsserver3dextension_private_method__body_get_object_instance_id) ( body: [`RID`](class_rid.md) ) virtual[^virtual] const[^const]                                                                                                                                                                                                                                                                                           |
| [`Variant`](class_variant.md)                                     | [`_body_get_param`](#class_physicsserver3dextension_private_method__body_get_param) ( body: [`RID`](class_rid.md), param: [BodyParameter](#enum_physicsserver3d_bodyparameter) ) virtual[^virtual] const[^const]                                                                                                                                                                                                                                                        |
| [`RID`](class_rid.md)                                             | [`_body_get_shape`](#class_physicsserver3dextension_private_method__body_get_shape) ( body: [`RID`](class_rid.md), shape_idx: [`int`](class_int.md) ) virtual[^virtual] const[^const]                                                                                                                                                                                                                                                                                   |
| [`int`](class_int.md)                                             | [`_body_get_shape_count`](#class_physicsserver3dextension_private_method__body_get_shape_count) ( body: [`RID`](class_rid.md) ) virtual[^virtual] const[^const]                                                                                                                                                                                                                                                                                                         |
| [`Transform3D`](class_transform3d.md)                             | [`_body_get_shape_transform`](#class_physicsserver3dextension_private_method__body_get_shape_transform) ( body: [`RID`](class_rid.md), shape_idx: [`int`](class_int.md) ) virtual[^virtual] const[^const]                                                                                                                                                                                                                                                               |
| [`RID`](class_rid.md)                                             | [`_body_get_space`](#class_physicsserver3dextension_private_method__body_get_space) ( body: [`RID`](class_rid.md) ) virtual[^virtual] const[^const]                                                                                                                                                                                                                                                                                                                     |
| [`Variant`](class_variant.md)                                     | [`_body_get_state`](#class_physicsserver3dextension_private_method__body_get_state) ( body: [`RID`](class_rid.md), state: [BodyState](#enum_physicsserver3d_bodystate) ) virtual[^virtual] const[^const]                                                                                                                                                                                                                                                                |
| [`int`](class_int.md)                                             | [`_body_get_user_flags`](#class_physicsserver3dextension_private_method__body_get_user_flags) ( body: [`RID`](class_rid.md) ) virtual[^virtual] const[^const]                                                                                                                                                                                                                                                                                                           |
| [`bool`](class_bool.md)                                           | [`_body_is_axis_locked`](#class_physicsserver3dextension_private_method__body_is_axis_locked) ( body: [`RID`](class_rid.md), axis: [BodyAxis](#enum_physicsserver3d_bodyaxis) ) virtual[^virtual] const[^const]                                                                                                                                                                                                                                                         |
| [`bool`](class_bool.md)                                           | [`_body_is_continuous_collision_detection_enabled`](#class_physicsserver3dextension_private_method__body_is_continuous_collision_detection_enabled) ( body: [`RID`](class_rid.md) ) virtual[^virtual] const[^const]                                                                                                                                                                                                                                                     |
| [`bool`](class_bool.md)                                           | [`_body_is_omitting_force_integration`](#class_physicsserver3dextension_private_method__body_is_omitting_force_integration) ( body: [`RID`](class_rid.md) ) virtual[^virtual] const[^const]                                                                                                                                                                                                                                                                             |
| `void`                                                            | [`_body_remove_collision_exception`](#class_physicsserver3dextension_private_method__body_remove_collision_exception) ( body: [`RID`](class_rid.md), excepted_body: [`RID`](class_rid.md) ) virtual[^virtual]                                                                                                                                                                                                                                                           |
| `void`                                                            | [`_body_remove_shape`](#class_physicsserver3dextension_private_method__body_remove_shape) ( body: [`RID`](class_rid.md), shape_idx: [`int`](class_int.md) ) virtual[^virtual]                                                                                                                                                                                                                                                                                           |
| `void`                                                            | [`_body_reset_mass_properties`](#class_physicsserver3dextension_private_method__body_reset_mass_properties) ( body: [`RID`](class_rid.md) ) virtual[^virtual]                                                                                                                                                                                                                                                                                                           |
| `void`                                                            | [`_body_set_axis_lock`](#class_physicsserver3dextension_private_method__body_set_axis_lock) ( body: [`RID`](class_rid.md), axis: [BodyAxis](#enum_physicsserver3d_bodyaxis), lock: [`bool`](class_bool.md) ) virtual[^virtual]                                                                                                                                                                                                                                          |
| `void`                                                            | [`_body_set_axis_velocity`](#class_physicsserver3dextension_private_method__body_set_axis_velocity) ( body: [`RID`](class_rid.md), axis_velocity: [`Vector3`](class_vector3.md) ) virtual[^virtual]                                                                                                                                                                                                                                                                     |
| `void`                                                            | [`_body_set_collision_layer`](#class_physicsserver3dextension_private_method__body_set_collision_layer) ( body: [`RID`](class_rid.md), layer: [`int`](class_int.md) ) virtual[^virtual]                                                                                                                                                                                                                                                                                 |
| `void`                                                            | [`_body_set_collision_mask`](#class_physicsserver3dextension_private_method__body_set_collision_mask) ( body: [`RID`](class_rid.md), mask: [`int`](class_int.md) ) virtual[^virtual]                                                                                                                                                                                                                                                                                    |
| `void`                                                            | [`_body_set_collision_priority`](#class_physicsserver3dextension_private_method__body_set_collision_priority) ( body: [`RID`](class_rid.md), priority: [`float`](class_float.md) ) virtual[^virtual]                                                                                                                                                                                                                                                                    |
| `void`                                                            | [`_body_set_constant_force`](#class_physicsserver3dextension_private_method__body_set_constant_force) ( body: [`RID`](class_rid.md), force: [`Vector3`](class_vector3.md) ) virtual[^virtual]                                                                                                                                                                                                                                                                           |
| `void`                                                            | [`_body_set_constant_torque`](#class_physicsserver3dextension_private_method__body_set_constant_torque) ( body: [`RID`](class_rid.md), torque: [`Vector3`](class_vector3.md) ) virtual[^virtual]                                                                                                                                                                                                                                                                        |
| `void`                                                            | [`_body_set_contacts_reported_depth_threshold`](#class_physicsserver3dextension_private_method__body_set_contacts_reported_depth_threshold) ( body: [`RID`](class_rid.md), threshold: [`float`](class_float.md) ) virtual[^virtual]                                                                                                                                                                                                                                     |
| `void`                                                            | [`_body_set_enable_continuous_collision_detection`](#class_physicsserver3dextension_private_method__body_set_enable_continuous_collision_detection) ( body: [`RID`](class_rid.md), enable: [`bool`](class_bool.md) ) virtual[^virtual]                                                                                                                                                                                                                                  |
| `void`                                                            | [`_body_set_force_integration_callback`](#class_physicsserver3dextension_private_method__body_set_force_integration_callback) ( body: [`RID`](class_rid.md), callable: [`Callable`](class_callable.md), userdata: [`Variant`](class_variant.md) ) virtual[^virtual]                                                                                                                                                                                                     |
| `void`                                                            | [`_body_set_max_contacts_reported`](#class_physicsserver3dextension_private_method__body_set_max_contacts_reported) ( body: [`RID`](class_rid.md), amount: [`int`](class_int.md) ) virtual[^virtual]                                                                                                                                                                                                                                                                    |
| `void`                                                            | [`_body_set_mode`](#class_physicsserver3dextension_private_method__body_set_mode) ( body: [`RID`](class_rid.md), mode: [BodyMode](#enum_physicsserver3d_bodymode) ) virtual[^virtual]                                                                                                                                                                                                                                                                                   |
| `void`                                                            | [`_body_set_omit_force_integration`](#class_physicsserver3dextension_private_method__body_set_omit_force_integration) ( body: [`RID`](class_rid.md), enable: [`bool`](class_bool.md) ) virtual[^virtual]                                                                                                                                                                                                                                                                |
| `void`                                                            | [`_body_set_param`](#class_physicsserver3dextension_private_method__body_set_param) ( body: [`RID`](class_rid.md), param: [BodyParameter](#enum_physicsserver3d_bodyparameter), value: [`Variant`](class_variant.md) ) virtual[^virtual]                                                                                                                                                                                                                                |
| `void`                                                            | [`_body_set_ray_pickable`](#class_physicsserver3dextension_private_method__body_set_ray_pickable) ( body: [`RID`](class_rid.md), enable: [`bool`](class_bool.md) ) virtual[^virtual]                                                                                                                                                                                                                                                                                    |
| `void`                                                            | [`_body_set_shape`](#class_physicsserver3dextension_private_method__body_set_shape) ( body: [`RID`](class_rid.md), shape_idx: [`int`](class_int.md), shape: [`RID`](class_rid.md) ) virtual[^virtual]                                                                                                                                                                                                                                                                   |
| `void`                                                            | [`_body_set_shape_disabled`](#class_physicsserver3dextension_private_method__body_set_shape_disabled) ( body: [`RID`](class_rid.md), shape_idx: [`int`](class_int.md), disabled: [`bool`](class_bool.md) ) virtual[^virtual]                                                                                                                                                                                                                                            |
| `void`                                                            | [`_body_set_shape_transform`](#class_physicsserver3dextension_private_method__body_set_shape_transform) ( body: [`RID`](class_rid.md), shape_idx: [`int`](class_int.md), transform: [`Transform3D`](class_transform3d.md) ) virtual[^virtual]                                                                                                                                                                                                                           |
| `void`                                                            | [`_body_set_space`](#class_physicsserver3dextension_private_method__body_set_space) ( body: [`RID`](class_rid.md), space: [`RID`](class_rid.md) ) virtual[^virtual]                                                                                                                                                                                                                                                                                                     |
| `void`                                                            | [`_body_set_state`](#class_physicsserver3dextension_private_method__body_set_state) ( body: [`RID`](class_rid.md), state: [BodyState](#enum_physicsserver3d_bodystate), value: [`Variant`](class_variant.md) ) virtual[^virtual]                                                                                                                                                                                                                                        |
| `void`                                                            | [`_body_set_state_sync_callback`](#class_physicsserver3dextension_private_method__body_set_state_sync_callback) ( body: [`RID`](class_rid.md), callable: [`Callable`](class_callable.md) ) virtual[^virtual]                                                                                                                                                                                                                                                            |
| `void`                                                            | [`_body_set_user_flags`](#class_physicsserver3dextension_private_method__body_set_user_flags) ( body: [`RID`](class_rid.md), flags: [`int`](class_int.md) ) virtual[^virtual]                                                                                                                                                                                                                                                                                           |
| [`bool`](class_bool.md)                                           | [`_body_test_motion`](#class_physicsserver3dextension_private_method__body_test_motion) ( body: [`RID`](class_rid.md), from: [`Transform3D`](class_transform3d.md), motion: [`Vector3`](class_vector3.md), margin: [`float`](class_float.md), max_collisions: [`int`](class_int.md), collide_separation_ray: [`bool`](class_bool.md), recovery_as_collision: [`bool`](class_bool.md), result: `PhysicsServer3DExtensionMotionResult*` ) virtual[^virtual] const[^const] |
| [`RID`](class_rid.md)                                             | [`_box_shape_create`](#class_physicsserver3dextension_private_method__box_shape_create) ( ) virtual[^virtual]                                                                                                                                                                                                                                                                                                                                                           |
| [`RID`](class_rid.md)                                             | [`_capsule_shape_create`](#class_physicsserver3dextension_private_method__capsule_shape_create) ( ) virtual[^virtual]                                                                                                                                                                                                                                                                                                                                                   |
| [`RID`](class_rid.md)                                             | [`_concave_polygon_shape_create`](#class_physicsserver3dextension_private_method__concave_polygon_shape_create) ( ) virtual[^virtual]                                                                                                                                                                                                                                                                                                                                   |
| [`float`](class_float.md)                                         | [`_cone_twist_joint_get_param`](#class_physicsserver3dextension_private_method__cone_twist_joint_get_param) ( joint: [`RID`](class_rid.md), param: [ConeTwistJointParam](#enum_physicsserver3d_conetwistjointparam) ) virtual[^virtual] const[^const]                                                                                                                                                                                                                   |
| `void`                                                            | [`_cone_twist_joint_set_param`](#class_physicsserver3dextension_private_method__cone_twist_joint_set_param) ( joint: [`RID`](class_rid.md), param: [ConeTwistJointParam](#enum_physicsserver3d_conetwistjointparam), value: [`float`](class_float.md) ) virtual[^virtual]                                                                                                                                                                                               |
| [`RID`](class_rid.md)                                             | [`_convex_polygon_shape_create`](#class_physicsserver3dextension_private_method__convex_polygon_shape_create) ( ) virtual[^virtual]                                                                                                                                                                                                                                                                                                                                     |
| [`RID`](class_rid.md)                                             | [`_custom_shape_create`](#class_physicsserver3dextension_private_method__custom_shape_create) ( ) virtual[^virtual]                                                                                                                                                                                                                                                                                                                                                     |
| [`RID`](class_rid.md)                                             | [`_cylinder_shape_create`](#class_physicsserver3dextension_private_method__cylinder_shape_create) ( ) virtual[^virtual]                                                                                                                                                                                                                                                                                                                                                 |
| `void`                                                            | [`_end_sync`](#class_physicsserver3dextension_private_method__end_sync) ( ) virtual[^virtual]                                                                                                                                                                                                                                                                                                                                                                           |
| `void`                                                            | [`_finish`](#class_physicsserver3dextension_private_method__finish) ( ) virtual[^virtual]                                                                                                                                                                                                                                                                                                                                                                               |
| `void`                                                            | [`_flush_queries`](#class_physicsserver3dextension_private_method__flush_queries) ( ) virtual[^virtual]                                                                                                                                                                                                                                                                                                                                                                 |
| `void`                                                            | [`_free_rid`](#class_physicsserver3dextension_private_method__free_rid) ( rid: [`RID`](class_rid.md) ) virtual[^virtual]                                                                                                                                                                                                                                                                                                                                                |
| [`bool`](class_bool.md)                                           | [`_generic_6dof_joint_get_flag`](#class_physicsserver3dextension_private_method__generic_6dof_joint_get_flag) ( joint: [`RID`](class_rid.md), axis: Vector3.Axis, flag: [G6DOFJointAxisFlag](#enum_physicsserver3d_g6dofjointaxisflag) ) virtual[^virtual] const[^const]                                                                                                                                                                                                |
| [`float`](class_float.md)                                         | [`_generic_6dof_joint_get_param`](#class_physicsserver3dextension_private_method__generic_6dof_joint_get_param) ( joint: [`RID`](class_rid.md), axis: Vector3.Axis, param: [G6DOFJointAxisParam](#enum_physicsserver3d_g6dofjointaxisparam) ) virtual[^virtual] const[^const]                                                                                                                                                                                           |
| `void`                                                            | [`_generic_6dof_joint_set_flag`](#class_physicsserver3dextension_private_method__generic_6dof_joint_set_flag) ( joint: [`RID`](class_rid.md), axis: Vector3.Axis, flag: [G6DOFJointAxisFlag](#enum_physicsserver3d_g6dofjointaxisflag), enable: [`bool`](class_bool.md) ) virtual[^virtual]                                                                                                                                                                             |
| `void`                                                            | [`_generic_6dof_joint_set_param`](#class_physicsserver3dextension_private_method__generic_6dof_joint_set_param) ( joint: [`RID`](class_rid.md), axis: Vector3.Axis, param: [G6DOFJointAxisParam](#enum_physicsserver3d_g6dofjointaxisparam), value: [`float`](class_float.md) ) virtual[^virtual]                                                                                                                                                                       |
| [`int`](class_int.md)                                             | [`_get_process_info`](#class_physicsserver3dextension_private_method__get_process_info) ( process_info: [ProcessInfo](#enum_physicsserver3d_processinfo) ) virtual[^virtual]                                                                                                                                                                                                                                                                                            |
| [`RID`](class_rid.md)                                             | [`_heightmap_shape_create`](#class_physicsserver3dextension_private_method__heightmap_shape_create) ( ) virtual[^virtual]                                                                                                                                                                                                                                                                                                                                               |
| [`bool`](class_bool.md)                                           | [`_hinge_joint_get_flag`](#class_physicsserver3dextension_private_method__hinge_joint_get_flag) ( joint: [`RID`](class_rid.md), flag: [HingeJointFlag](#enum_physicsserver3d_hingejointflag) ) virtual[^virtual] const[^const]                                                                                                                                                                                                                                          |
| [`float`](class_float.md)                                         | [`_hinge_joint_get_param`](#class_physicsserver3dextension_private_method__hinge_joint_get_param) ( joint: [`RID`](class_rid.md), param: [HingeJointParam](#enum_physicsserver3d_hingejointparam) ) virtual[^virtual] const[^const]                                                                                                                                                                                                                                     |
| `void`                                                            | [`_hinge_joint_set_flag`](#class_physicsserver3dextension_private_method__hinge_joint_set_flag) ( joint: [`RID`](class_rid.md), flag: [HingeJointFlag](#enum_physicsserver3d_hingejointflag), enabled: [`bool`](class_bool.md) ) virtual[^virtual]                                                                                                                                                                                                                      |
| `void`                                                            | [`_hinge_joint_set_param`](#class_physicsserver3dextension_private_method__hinge_joint_set_param) ( joint: [`RID`](class_rid.md), param: [HingeJointParam](#enum_physicsserver3d_hingejointparam), value: [`float`](class_float.md) ) virtual[^virtual]                                                                                                                                                                                                                 |
| `void`                                                            | [`_init`](#class_physicsserver3dextension_private_method__init) ( ) virtual[^virtual]                                                                                                                                                                                                                                                                                                                                                                                   |
| [`bool`](class_bool.md)                                           | [`_is_flushing_queries`](#class_physicsserver3dextension_private_method__is_flushing_queries) ( ) virtual[^virtual] const[^const]                                                                                                                                                                                                                                                                                                                                       |
| `void`                                                            | [`_joint_clear`](#class_physicsserver3dextension_private_method__joint_clear) ( joint: [`RID`](class_rid.md) ) virtual[^virtual]                                                                                                                                                                                                                                                                                                                                        |
| [`RID`](class_rid.md)                                             | [`_joint_create`](#class_physicsserver3dextension_private_method__joint_create) ( ) virtual[^virtual]                                                                                                                                                                                                                                                                                                                                                                   |
| `void`                                                            | [`_joint_disable_collisions_between_bodies`](#class_physicsserver3dextension_private_method__joint_disable_collisions_between_bodies) ( joint: [`RID`](class_rid.md), disable: [`bool`](class_bool.md) ) virtual[^virtual]                                                                                                                                                                                                                                              |
| [`int`](class_int.md)                                             | [`_joint_get_solver_priority`](#class_physicsserver3dextension_private_method__joint_get_solver_priority) ( joint: [`RID`](class_rid.md) ) virtual[^virtual] const[^const]                                                                                                                                                                                                                                                                                              |
| [JointType](#enum_physicsserver3d_jointtype)                      | [`_joint_get_type`](#class_physicsserver3dextension_private_method__joint_get_type) ( joint: [`RID`](class_rid.md) ) virtual[^virtual] const[^const]                                                                                                                                                                                                                                                                                                                    |
| [`bool`](class_bool.md)                                           | [`_joint_is_disabled_collisions_between_bodies`](#class_physicsserver3dextension_private_method__joint_is_disabled_collisions_between_bodies) ( joint: [`RID`](class_rid.md) ) virtual[^virtual] const[^const]                                                                                                                                                                                                                                                          |
| `void`                                                            | [`_joint_make_cone_twist`](#class_physicsserver3dextension_private_method__joint_make_cone_twist) ( joint: [`RID`](class_rid.md), body_A: [`RID`](class_rid.md), local_ref_A: [`Transform3D`](class_transform3d.md), body_B: [`RID`](class_rid.md), local_ref_B: [`Transform3D`](class_transform3d.md) ) virtual[^virtual]                                                                                                                                              |
| `void`                                                            | [`_joint_make_generic_6dof`](#class_physicsserver3dextension_private_method__joint_make_generic_6dof) ( joint: [`RID`](class_rid.md), body_A: [`RID`](class_rid.md), local_ref_A: [`Transform3D`](class_transform3d.md), body_B: [`RID`](class_rid.md), local_ref_B: [`Transform3D`](class_transform3d.md) ) virtual[^virtual]                                                                                                                                          |
| `void`                                                            | [`_joint_make_hinge`](#class_physicsserver3dextension_private_method__joint_make_hinge) ( joint: [`RID`](class_rid.md), body_A: [`RID`](class_rid.md), hinge_A: [`Transform3D`](class_transform3d.md), body_B: [`RID`](class_rid.md), hinge_B: [`Transform3D`](class_transform3d.md) ) virtual[^virtual]                                                                                                                                                                |
| `void`                                                            | [`_joint_make_hinge_simple`](#class_physicsserver3dextension_private_method__joint_make_hinge_simple) ( joint: [`RID`](class_rid.md), body_A: [`RID`](class_rid.md), pivot_A: [`Vector3`](class_vector3.md), axis_A: [`Vector3`](class_vector3.md), body_B: [`RID`](class_rid.md), pivot_B: [`Vector3`](class_vector3.md), axis_B: [`Vector3`](class_vector3.md) ) virtual[^virtual]                                                                                    |
| `void`                                                            | [`_joint_make_pin`](#class_physicsserver3dextension_private_method__joint_make_pin) ( joint: [`RID`](class_rid.md), body_A: [`RID`](class_rid.md), local_A: [`Vector3`](class_vector3.md), body_B: [`RID`](class_rid.md), local_B: [`Vector3`](class_vector3.md) ) virtual[^virtual]                                                                                                                                                                                    |
| `void`                                                            | [`_joint_make_slider`](#class_physicsserver3dextension_private_method__joint_make_slider) ( joint: [`RID`](class_rid.md), body_A: [`RID`](class_rid.md), local_ref_A: [`Transform3D`](class_transform3d.md), body_B: [`RID`](class_rid.md), local_ref_B: [`Transform3D`](class_transform3d.md) ) virtual[^virtual]                                                                                                                                                      |
| `void`                                                            | [`_joint_set_solver_priority`](#class_physicsserver3dextension_private_method__joint_set_solver_priority) ( joint: [`RID`](class_rid.md), priority: [`int`](class_int.md) ) virtual[^virtual]                                                                                                                                                                                                                                                                           |
| [`Vector3`](class_vector3.md)                                     | [`_pin_joint_get_local_a`](#class_physicsserver3dextension_private_method__pin_joint_get_local_a) ( joint: [`RID`](class_rid.md) ) virtual[^virtual] const[^const]                                                                                                                                                                                                                                                                                                      |
| [`Vector3`](class_vector3.md)                                     | [`_pin_joint_get_local_b`](#class_physicsserver3dextension_private_method__pin_joint_get_local_b) ( joint: [`RID`](class_rid.md) ) virtual[^virtual] const[^const]                                                                                                                                                                                                                                                                                                      |
| [`float`](class_float.md)                                         | [`_pin_joint_get_param`](#class_physicsserver3dextension_private_method__pin_joint_get_param) ( joint: [`RID`](class_rid.md), param: [PinJointParam](#enum_physicsserver3d_pinjointparam) ) virtual[^virtual] const[^const]                                                                                                                                                                                                                                             |
| `void`                                                            | [`_pin_joint_set_local_a`](#class_physicsserver3dextension_private_method__pin_joint_set_local_a) ( joint: [`RID`](class_rid.md), local_A: [`Vector3`](class_vector3.md) ) virtual[^virtual]                                                                                                                                                                                                                                                                            |
| `void`                                                            | [`_pin_joint_set_local_b`](#class_physicsserver3dextension_private_method__pin_joint_set_local_b) ( joint: [`RID`](class_rid.md), local_B: [`Vector3`](class_vector3.md) ) virtual[^virtual]                                                                                                                                                                                                                                                                            |
| `void`                                                            | [`_pin_joint_set_param`](#class_physicsserver3dextension_private_method__pin_joint_set_param) ( joint: [`RID`](class_rid.md), param: [PinJointParam](#enum_physicsserver3d_pinjointparam), value: [`float`](class_float.md) ) virtual[^virtual]                                                                                                                                                                                                                         |
| [`RID`](class_rid.md)                                             | [`_separation_ray_shape_create`](#class_physicsserver3dextension_private_method__separation_ray_shape_create) ( ) virtual[^virtual]                                                                                                                                                                                                                                                                                                                                     |
| `void`                                                            | [`_set_active`](#class_physicsserver3dextension_private_method__set_active) ( active: [`bool`](class_bool.md) ) virtual[^virtual]                                                                                                                                                                                                                                                                                                                                       |
| [`float`](class_float.md)                                         | [`_shape_get_custom_solver_bias`](#class_physicsserver3dextension_private_method__shape_get_custom_solver_bias) ( shape: [`RID`](class_rid.md) ) virtual[^virtual] const[^const]                                                                                                                                                                                                                                                                                        |
| [`Variant`](class_variant.md)                                     | [`_shape_get_data`](#class_physicsserver3dextension_private_method__shape_get_data) ( shape: [`RID`](class_rid.md) ) virtual[^virtual] const[^const]                                                                                                                                                                                                                                                                                                                    |
| [`float`](class_float.md)                                         | [`_shape_get_margin`](#class_physicsserver3dextension_private_method__shape_get_margin) ( shape: [`RID`](class_rid.md) ) virtual[^virtual] const[^const]                                                                                                                                                                                                                                                                                                                |
| [ShapeType](#enum_physicsserver3d_shapetype)                      | [`_shape_get_type`](#class_physicsserver3dextension_private_method__shape_get_type) ( shape: [`RID`](class_rid.md) ) virtual[^virtual] const[^const]                                                                                                                                                                                                                                                                                                                    |
| `void`                                                            | [`_shape_set_custom_solver_bias`](#class_physicsserver3dextension_private_method__shape_set_custom_solver_bias) ( shape: [`RID`](class_rid.md), bias: [`float`](class_float.md) ) virtual[^virtual]                                                                                                                                                                                                                                                                     |
| `void`                                                            | [`_shape_set_data`](#class_physicsserver3dextension_private_method__shape_set_data) ( shape: [`RID`](class_rid.md), data: [`Variant`](class_variant.md) ) virtual[^virtual]                                                                                                                                                                                                                                                                                             |
| `void`                                                            | [`_shape_set_margin`](#class_physicsserver3dextension_private_method__shape_set_margin) ( shape: [`RID`](class_rid.md), margin: [`float`](class_float.md) ) virtual[^virtual]                                                                                                                                                                                                                                                                                           |
| [`float`](class_float.md)                                         | [`_slider_joint_get_param`](#class_physicsserver3dextension_private_method__slider_joint_get_param) ( joint: [`RID`](class_rid.md), param: [SliderJointParam](#enum_physicsserver3d_sliderjointparam) ) virtual[^virtual] const[^const]                                                                                                                                                                                                                                 |
| `void`                                                            | [`_slider_joint_set_param`](#class_physicsserver3dextension_private_method__slider_joint_set_param) ( joint: [`RID`](class_rid.md), param: [SliderJointParam](#enum_physicsserver3d_sliderjointparam), value: [`float`](class_float.md) ) virtual[^virtual]                                                                                                                                                                                                             |
| `void`                                                            | [`_soft_body_add_collision_exception`](#class_physicsserver3dextension_private_method__soft_body_add_collision_exception) ( body: [`RID`](class_rid.md), body_b: [`RID`](class_rid.md) ) virtual[^virtual]                                                                                                                                                                                                                                                              |
| [`RID`](class_rid.md)                                             | [`_soft_body_create`](#class_physicsserver3dextension_private_method__soft_body_create) ( ) virtual[^virtual]                                                                                                                                                                                                                                                                                                                                                           |
| [`AABB`](class_aabb.md)                                           | [`_soft_body_get_bounds`](#class_physicsserver3dextension_private_method__soft_body_get_bounds) ( body: [`RID`](class_rid.md) ) virtual[^virtual] const[^const]                                                                                                                                                                                                                                                                                                         |
| [Array](class_array.md) [`RID`](class_rid.md)                     | [`_soft_body_get_collision_exceptions`](#class_physicsserver3dextension_private_method__soft_body_get_collision_exceptions) ( body: [`RID`](class_rid.md) ) virtual[^virtual] const[^const]                                                                                                                                                                                                                                                                             |
| [`int`](class_int.md)                                             | [`_soft_body_get_collision_layer`](#class_physicsserver3dextension_private_method__soft_body_get_collision_layer) ( body: [`RID`](class_rid.md) ) virtual[^virtual] const[^const]                                                                                                                                                                                                                                                                                       |
| [`int`](class_int.md)                                             | [`_soft_body_get_collision_mask`](#class_physicsserver3dextension_private_method__soft_body_get_collision_mask) ( body: [`RID`](class_rid.md) ) virtual[^virtual] const[^const]                                                                                                                                                                                                                                                                                         |
| [`float`](class_float.md)                                         | [`_soft_body_get_damping_coefficient`](#class_physicsserver3dextension_private_method__soft_body_get_damping_coefficient) ( body: [`RID`](class_rid.md) ) virtual[^virtual] const[^const]                                                                                                                                                                                                                                                                               |
| [`float`](class_float.md)                                         | [`_soft_body_get_drag_coefficient`](#class_physicsserver3dextension_private_method__soft_body_get_drag_coefficient) ( body: [`RID`](class_rid.md) ) virtual[^virtual] const[^const]                                                                                                                                                                                                                                                                                     |
| [`float`](class_float.md)                                         | [`_soft_body_get_linear_stiffness`](#class_physicsserver3dextension_private_method__soft_body_get_linear_stiffness) ( body: [`RID`](class_rid.md) ) virtual[^virtual] const[^const]                                                                                                                                                                                                                                                                                     |
| [`Vector3`](class_vector3.md)                                     | [`_soft_body_get_point_global_position`](#class_physicsserver3dextension_private_method__soft_body_get_point_global_position) ( body: [`RID`](class_rid.md), point_index: [`int`](class_int.md) ) virtual[^virtual] const[^const]                                                                                                                                                                                                                                       |
| [`float`](class_float.md)                                         | [`_soft_body_get_pressure_coefficient`](#class_physicsserver3dextension_private_method__soft_body_get_pressure_coefficient) ( body: [`RID`](class_rid.md) ) virtual[^virtual] const[^const]                                                                                                                                                                                                                                                                             |
| [`int`](class_int.md)                                             | [`_soft_body_get_simulation_precision`](#class_physicsserver3dextension_private_method__soft_body_get_simulation_precision) ( body: [`RID`](class_rid.md) ) virtual[^virtual] const[^const]                                                                                                                                                                                                                                                                             |
| [`RID`](class_rid.md)                                             | [`_soft_body_get_space`](#class_physicsserver3dextension_private_method__soft_body_get_space) ( body: [`RID`](class_rid.md) ) virtual[^virtual] const[^const]                                                                                                                                                                                                                                                                                                           |
| [`Variant`](class_variant.md)                                     | [`_soft_body_get_state`](#class_physicsserver3dextension_private_method__soft_body_get_state) ( body: [`RID`](class_rid.md), state: [BodyState](#enum_physicsserver3d_bodystate) ) virtual[^virtual] const[^const]                                                                                                                                                                                                                                                      |
| [`float`](class_float.md)                                         | [`_soft_body_get_total_mass`](#class_physicsserver3dextension_private_method__soft_body_get_total_mass) ( body: [`RID`](class_rid.md) ) virtual[^virtual] const[^const]                                                                                                                                                                                                                                                                                                 |
| [`bool`](class_bool.md)                                           | [`_soft_body_is_point_pinned`](#class_physicsserver3dextension_private_method__soft_body_is_point_pinned) ( body: [`RID`](class_rid.md), point_index: [`int`](class_int.md) ) virtual[^virtual] const[^const]                                                                                                                                                                                                                                                           |
| `void`                                                            | [`_soft_body_move_point`](#class_physicsserver3dextension_private_method__soft_body_move_point) ( body: [`RID`](class_rid.md), point_index: [`int`](class_int.md), global_position: [`Vector3`](class_vector3.md) ) virtual[^virtual]                                                                                                                                                                                                                                   |
| `void`                                                            | [`_soft_body_pin_point`](#class_physicsserver3dextension_private_method__soft_body_pin_point) ( body: [`RID`](class_rid.md), point_index: [`int`](class_int.md), pin: [`bool`](class_bool.md) ) virtual[^virtual]                                                                                                                                                                                                                                                       |
| `void`                                                            | [`_soft_body_remove_all_pinned_points`](#class_physicsserver3dextension_private_method__soft_body_remove_all_pinned_points) ( body: [`RID`](class_rid.md) ) virtual[^virtual]                                                                                                                                                                                                                                                                                           |
| `void`                                                            | [`_soft_body_remove_collision_exception`](#class_physicsserver3dextension_private_method__soft_body_remove_collision_exception) ( body: [`RID`](class_rid.md), body_b: [`RID`](class_rid.md) ) virtual[^virtual]                                                                                                                                                                                                                                                        |
| `void`                                                            | [`_soft_body_set_collision_layer`](#class_physicsserver3dextension_private_method__soft_body_set_collision_layer) ( body: [`RID`](class_rid.md), layer: [`int`](class_int.md) ) virtual[^virtual]                                                                                                                                                                                                                                                                       |
| `void`                                                            | [`_soft_body_set_collision_mask`](#class_physicsserver3dextension_private_method__soft_body_set_collision_mask) ( body: [`RID`](class_rid.md), mask: [`int`](class_int.md) ) virtual[^virtual]                                                                                                                                                                                                                                                                          |
| `void`                                                            | [`_soft_body_set_damping_coefficient`](#class_physicsserver3dextension_private_method__soft_body_set_damping_coefficient) ( body: [`RID`](class_rid.md), damping_coefficient: [`float`](class_float.md) ) virtual[^virtual]                                                                                                                                                                                                                                             |
| `void`                                                            | [`_soft_body_set_drag_coefficient`](#class_physicsserver3dextension_private_method__soft_body_set_drag_coefficient) ( body: [`RID`](class_rid.md), drag_coefficient: [`float`](class_float.md) ) virtual[^virtual]                                                                                                                                                                                                                                                      |
| `void`                                                            | [`_soft_body_set_linear_stiffness`](#class_physicsserver3dextension_private_method__soft_body_set_linear_stiffness) ( body: [`RID`](class_rid.md), linear_stiffness: [`float`](class_float.md) ) virtual[^virtual]                                                                                                                                                                                                                                                      |
| `void`                                                            | [`_soft_body_set_mesh`](#class_physicsserver3dextension_private_method__soft_body_set_mesh) ( body: [`RID`](class_rid.md), mesh: [`RID`](class_rid.md) ) virtual[^virtual]                                                                                                                                                                                                                                                                                              |
| `void`                                                            | [`_soft_body_set_pressure_coefficient`](#class_physicsserver3dextension_private_method__soft_body_set_pressure_coefficient) ( body: [`RID`](class_rid.md), pressure_coefficient: [`float`](class_float.md) ) virtual[^virtual]                                                                                                                                                                                                                                          |
| `void`                                                            | [`_soft_body_set_ray_pickable`](#class_physicsserver3dextension_private_method__soft_body_set_ray_pickable) ( body: [`RID`](class_rid.md), enable: [`bool`](class_bool.md) ) virtual[^virtual]                                                                                                                                                                                                                                                                          |
| `void`                                                            | [`_soft_body_set_simulation_precision`](#class_physicsserver3dextension_private_method__soft_body_set_simulation_precision) ( body: [`RID`](class_rid.md), simulation_precision: [`int`](class_int.md) ) virtual[^virtual]                                                                                                                                                                                                                                              |
| `void`                                                            | [`_soft_body_set_space`](#class_physicsserver3dextension_private_method__soft_body_set_space) ( body: [`RID`](class_rid.md), space: [`RID`](class_rid.md) ) virtual[^virtual]                                                                                                                                                                                                                                                                                           |
| `void`                                                            | [`_soft_body_set_state`](#class_physicsserver3dextension_private_method__soft_body_set_state) ( body: [`RID`](class_rid.md), state: [BodyState](#enum_physicsserver3d_bodystate), variant: [`Variant`](class_variant.md) ) virtual[^virtual]                                                                                                                                                                                                                            |
| `void`                                                            | [`_soft_body_set_total_mass`](#class_physicsserver3dextension_private_method__soft_body_set_total_mass) ( body: [`RID`](class_rid.md), total_mass: [`float`](class_float.md) ) virtual[^virtual]                                                                                                                                                                                                                                                                        |
| `void`                                                            | [`_soft_body_set_transform`](#class_physicsserver3dextension_private_method__soft_body_set_transform) ( body: [`RID`](class_rid.md), transform: [`Transform3D`](class_transform3d.md) ) virtual[^virtual]                                                                                                                                                                                                                                                               |
| `void`                                                            | [`_soft_body_update_rendering_server`](#class_physicsserver3dextension_private_method__soft_body_update_rendering_server) ( body: [`RID`](class_rid.md), rendering_server_handler: [`PhysicsServer3DRenderingServerHandler`](class_physicsserver3drenderingserverhandler.md) ) virtual[^virtual]                                                                                                                                                                        |
| [`RID`](class_rid.md)                                             | [`_space_create`](#class_physicsserver3dextension_private_method__space_create) ( ) virtual[^virtual]                                                                                                                                                                                                                                                                                                                                                                   |
| [`int`](class_int.md)                                             | [`_space_get_contact_count`](#class_physicsserver3dextension_private_method__space_get_contact_count) ( space: [`RID`](class_rid.md) ) virtual[^virtual] const[^const]                                                                                                                                                                                                                                                                                                  |
| [`PackedVector3Array`](class_packedvector3array.md)               | [`_space_get_contacts`](#class_physicsserver3dextension_private_method__space_get_contacts) ( space: [`RID`](class_rid.md) ) virtual[^virtual] const[^const]                                                                                                                                                                                                                                                                                                            |
| [`PhysicsDirectSpaceState3D`](class_physicsdirectspacestate3d.md) | [`_space_get_direct_state`](#class_physicsserver3dextension_private_method__space_get_direct_state) ( space: [`RID`](class_rid.md) ) virtual[^virtual]                                                                                                                                                                                                                                                                                                                  |
| [`float`](class_float.md)                                         | [`_space_get_param`](#class_physicsserver3dextension_private_method__space_get_param) ( space: [`RID`](class_rid.md), param: [SpaceParameter](#enum_physicsserver3d_spaceparameter) ) virtual[^virtual] const[^const]                                                                                                                                                                                                                                                   |
| [`bool`](class_bool.md)                                           | [`_space_is_active`](#class_physicsserver3dextension_private_method__space_is_active) ( space: [`RID`](class_rid.md) ) virtual[^virtual] const[^const]                                                                                                                                                                                                                                                                                                                  |
| `void`                                                            | [`_space_set_active`](#class_physicsserver3dextension_private_method__space_set_active) ( space: [`RID`](class_rid.md), active: [`bool`](class_bool.md) ) virtual[^virtual]                                                                                                                                                                                                                                                                                             |
| `void`                                                            | [`_space_set_debug_contacts`](#class_physicsserver3dextension_private_method__space_set_debug_contacts) ( space: [`RID`](class_rid.md), max_contacts: [`int`](class_int.md) ) virtual[^virtual]                                                                                                                                                                                                                                                                         |
| `void`                                                            | [`_space_set_param`](#class_physicsserver3dextension_private_method__space_set_param) ( space: [`RID`](class_rid.md), param: [SpaceParameter](#enum_physicsserver3d_spaceparameter), value: [`float`](class_float.md) ) virtual[^virtual]                                                                                                                                                                                                                               |
| [`RID`](class_rid.md)                                             | [`_sphere_shape_create`](#class_physicsserver3dextension_private_method__sphere_shape_create) ( ) virtual[^virtual]                                                                                                                                                                                                                                                                                                                                                     |
| `void`                                                            | [`_step`](#class_physicsserver3dextension_private_method__step) ( step: [`float`](class_float.md) ) virtual[^virtual]                                                                                                                                                                                                                                                                                                                                                   |
| `void`                                                            | [`_sync`](#class_physicsserver3dextension_private_method__sync) ( ) virtual[^virtual]                                                                                                                                                                                                                                                                                                                                                                                   |
| [`RID`](class_rid.md)                                             | [`_world_boundary_shape_create`](#class_physicsserver3dextension_private_method__world_boundary_shape_create) ( ) virtual[^virtual]                                                                                                                                                                                                                                                                                                                                     |
| [`bool`](class_bool.md)                                           | [`body_test_motion_is_excluding_body`](#class_physicsserver3dextension_method_body_test_motion_is_excluding_body) ( body: [`RID`](class_rid.md) ) const[^const]                                                                                                                                                                                                                                                                                                         |
| [`bool`](class_bool.md)                                           | [`body_test_motion_is_excluding_object`](#class_physicsserver3dextension_method_body_test_motion_is_excluding_object) ( object: [`int`](class_int.md) ) const[^const]                                                                                                                                                                                                                                                                                                   |

<!-- rst-class:: classref-section-separator -->

---

## 方法说明

<div id="_class_physicsserver3dextension_private_method__area_add_shape"></div>

`void` **_area_add_shape** ( area: [`RID`](class_rid.md), shape: [`RID`](class_rid.md), transform: [`Transform3D`](class_transform3d.md), disabled: [`bool`](class_bool.md) ) virtual[^virtual]<div id="class_physicsserver3dextension_private_method__area_add_shape"></div>

该方法目前没有描述，请帮我们\ :ref:`贡献一个 <doc_updating_the_class_reference>`\ 吧！

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsserver3dextension_private_method__area_attach_object_instance_id"></div>

`void` **_area_attach_object_instance_id** ( area: [`RID`](class_rid.md), id: [`int`](class_int.md) ) virtual[^virtual]<div id="class_physicsserver3dextension_private_method__area_attach_object_instance_id"></div>

该方法目前没有描述，请帮我们\ :ref:`贡献一个 <doc_updating_the_class_reference>`\ 吧！

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsserver3dextension_private_method__area_clear_shapes"></div>

`void` **_area_clear_shapes** ( area: [`RID`](class_rid.md) ) virtual[^virtual]<div id="class_physicsserver3dextension_private_method__area_clear_shapes"></div>

该方法目前没有描述，请帮我们\ :ref:`贡献一个 <doc_updating_the_class_reference>`\ 吧！

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsserver3dextension_private_method__area_create"></div>

[`RID`](class_rid.md) **_area_create** ( ) virtual[^virtual]<div id="class_physicsserver3dextension_private_method__area_create"></div>

该方法目前没有描述，请帮我们\ :ref:`贡献一个 <doc_updating_the_class_reference>`\ 吧！

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsserver3dextension_private_method__area_get_collision_layer"></div>

[`int`](class_int.md) **_area_get_collision_layer** ( area: [`RID`](class_rid.md) ) virtual[^virtual] const[^const]<div id="class_physicsserver3dextension_private_method__area_get_collision_layer"></div>

该方法目前没有描述，请帮我们\ :ref:`贡献一个 <doc_updating_the_class_reference>`\ 吧！

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsserver3dextension_private_method__area_get_collision_mask"></div>

[`int`](class_int.md) **_area_get_collision_mask** ( area: [`RID`](class_rid.md) ) virtual[^virtual] const[^const]<div id="class_physicsserver3dextension_private_method__area_get_collision_mask"></div>

该方法目前没有描述，请帮我们\ :ref:`贡献一个 <doc_updating_the_class_reference>`\ 吧！

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsserver3dextension_private_method__area_get_object_instance_id"></div>

[`int`](class_int.md) **_area_get_object_instance_id** ( area: [`RID`](class_rid.md) ) virtual[^virtual] const[^const]<div id="class_physicsserver3dextension_private_method__area_get_object_instance_id"></div>

该方法目前没有描述，请帮我们\ :ref:`贡献一个 <doc_updating_the_class_reference>`\ 吧！

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsserver3dextension_private_method__area_get_param"></div>

[`Variant`](class_variant.md) **_area_get_param** ( area: [`RID`](class_rid.md), param: [AreaParameter](#enum_physicsserver3d_areaparameter) ) virtual[^virtual] const[^const]<div id="class_physicsserver3dextension_private_method__area_get_param"></div>

该方法目前没有描述，请帮我们\ :ref:`贡献一个 <doc_updating_the_class_reference>`\ 吧！

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsserver3dextension_private_method__area_get_shape"></div>

[`RID`](class_rid.md) **_area_get_shape** ( area: [`RID`](class_rid.md), shape_idx: [`int`](class_int.md) ) virtual[^virtual] const[^const]<div id="class_physicsserver3dextension_private_method__area_get_shape"></div>

该方法目前没有描述，请帮我们\ :ref:`贡献一个 <doc_updating_the_class_reference>`\ 吧！

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsserver3dextension_private_method__area_get_shape_count"></div>

[`int`](class_int.md) **_area_get_shape_count** ( area: [`RID`](class_rid.md) ) virtual[^virtual] const[^const]<div id="class_physicsserver3dextension_private_method__area_get_shape_count"></div>

该方法目前没有描述，请帮我们\ :ref:`贡献一个 <doc_updating_the_class_reference>`\ 吧！

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsserver3dextension_private_method__area_get_shape_transform"></div>

[`Transform3D`](class_transform3d.md) **_area_get_shape_transform** ( area: [`RID`](class_rid.md), shape_idx: [`int`](class_int.md) ) virtual[^virtual] const[^const]<div id="class_physicsserver3dextension_private_method__area_get_shape_transform"></div>

该方法目前没有描述，请帮我们\ :ref:`贡献一个 <doc_updating_the_class_reference>`\ 吧！

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsserver3dextension_private_method__area_get_space"></div>

[`RID`](class_rid.md) **_area_get_space** ( area: [`RID`](class_rid.md) ) virtual[^virtual] const[^const]<div id="class_physicsserver3dextension_private_method__area_get_space"></div>

该方法目前没有描述，请帮我们\ :ref:`贡献一个 <doc_updating_the_class_reference>`\ 吧！

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsserver3dextension_private_method__area_get_transform"></div>

[`Transform3D`](class_transform3d.md) **_area_get_transform** ( area: [`RID`](class_rid.md) ) virtual[^virtual] const[^const]<div id="class_physicsserver3dextension_private_method__area_get_transform"></div>

该方法目前没有描述，请帮我们\ :ref:`贡献一个 <doc_updating_the_class_reference>`\ 吧！

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsserver3dextension_private_method__area_remove_shape"></div>

`void` **_area_remove_shape** ( area: [`RID`](class_rid.md), shape_idx: [`int`](class_int.md) ) virtual[^virtual]<div id="class_physicsserver3dextension_private_method__area_remove_shape"></div>

该方法目前没有描述，请帮我们\ :ref:`贡献一个 <doc_updating_the_class_reference>`\ 吧！

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsserver3dextension_private_method__area_set_area_monitor_callback"></div>

`void` **_area_set_area_monitor_callback** ( area: [`RID`](class_rid.md), callback: [`Callable`](class_callable.md) ) virtual[^virtual]<div id="class_physicsserver3dextension_private_method__area_set_area_monitor_callback"></div>

该方法目前没有描述，请帮我们\ :ref:`贡献一个 <doc_updating_the_class_reference>`\ 吧！

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsserver3dextension_private_method__area_set_collision_layer"></div>

`void` **_area_set_collision_layer** ( area: [`RID`](class_rid.md), layer: [`int`](class_int.md) ) virtual[^virtual]<div id="class_physicsserver3dextension_private_method__area_set_collision_layer"></div>

该方法目前没有描述，请帮我们\ :ref:`贡献一个 <doc_updating_the_class_reference>`\ 吧！

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsserver3dextension_private_method__area_set_collision_mask"></div>

`void` **_area_set_collision_mask** ( area: [`RID`](class_rid.md), mask: [`int`](class_int.md) ) virtual[^virtual]<div id="class_physicsserver3dextension_private_method__area_set_collision_mask"></div>

该方法目前没有描述，请帮我们\ :ref:`贡献一个 <doc_updating_the_class_reference>`\ 吧！

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsserver3dextension_private_method__area_set_monitor_callback"></div>

`void` **_area_set_monitor_callback** ( area: [`RID`](class_rid.md), callback: [`Callable`](class_callable.md) ) virtual[^virtual]<div id="class_physicsserver3dextension_private_method__area_set_monitor_callback"></div>

该方法目前没有描述，请帮我们\ :ref:`贡献一个 <doc_updating_the_class_reference>`\ 吧！

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsserver3dextension_private_method__area_set_monitorable"></div>

`void` **_area_set_monitorable** ( area: [`RID`](class_rid.md), monitorable: [`bool`](class_bool.md) ) virtual[^virtual]<div id="class_physicsserver3dextension_private_method__area_set_monitorable"></div>

该方法目前没有描述，请帮我们\ :ref:`贡献一个 <doc_updating_the_class_reference>`\ 吧！

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsserver3dextension_private_method__area_set_param"></div>

`void` **_area_set_param** ( area: [`RID`](class_rid.md), param: [AreaParameter](#enum_physicsserver3d_areaparameter), value: [`Variant`](class_variant.md) ) virtual[^virtual]<div id="class_physicsserver3dextension_private_method__area_set_param"></div>

该方法目前没有描述，请帮我们\ :ref:`贡献一个 <doc_updating_the_class_reference>`\ 吧！

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsserver3dextension_private_method__area_set_ray_pickable"></div>

`void` **_area_set_ray_pickable** ( area: [`RID`](class_rid.md), enable: [`bool`](class_bool.md) ) virtual[^virtual]<div id="class_physicsserver3dextension_private_method__area_set_ray_pickable"></div>

该方法目前没有描述，请帮我们\ :ref:`贡献一个 <doc_updating_the_class_reference>`\ 吧！

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsserver3dextension_private_method__area_set_shape"></div>

`void` **_area_set_shape** ( area: [`RID`](class_rid.md), shape_idx: [`int`](class_int.md), shape: [`RID`](class_rid.md) ) virtual[^virtual]<div id="class_physicsserver3dextension_private_method__area_set_shape"></div>

该方法目前没有描述，请帮我们\ :ref:`贡献一个 <doc_updating_the_class_reference>`\ 吧！

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsserver3dextension_private_method__area_set_shape_disabled"></div>

`void` **_area_set_shape_disabled** ( area: [`RID`](class_rid.md), shape_idx: [`int`](class_int.md), disabled: [`bool`](class_bool.md) ) virtual[^virtual]<div id="class_physicsserver3dextension_private_method__area_set_shape_disabled"></div>

该方法目前没有描述，请帮我们\ :ref:`贡献一个 <doc_updating_the_class_reference>`\ 吧！

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsserver3dextension_private_method__area_set_shape_transform"></div>

`void` **_area_set_shape_transform** ( area: [`RID`](class_rid.md), shape_idx: [`int`](class_int.md), transform: [`Transform3D`](class_transform3d.md) ) virtual[^virtual]<div id="class_physicsserver3dextension_private_method__area_set_shape_transform"></div>

该方法目前没有描述，请帮我们\ :ref:`贡献一个 <doc_updating_the_class_reference>`\ 吧！

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsserver3dextension_private_method__area_set_space"></div>

`void` **_area_set_space** ( area: [`RID`](class_rid.md), space: [`RID`](class_rid.md) ) virtual[^virtual]<div id="class_physicsserver3dextension_private_method__area_set_space"></div>

该方法目前没有描述，请帮我们\ :ref:`贡献一个 <doc_updating_the_class_reference>`\ 吧！

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsserver3dextension_private_method__area_set_transform"></div>

`void` **_area_set_transform** ( area: [`RID`](class_rid.md), transform: [`Transform3D`](class_transform3d.md) ) virtual[^virtual]<div id="class_physicsserver3dextension_private_method__area_set_transform"></div>

该方法目前没有描述，请帮我们\ :ref:`贡献一个 <doc_updating_the_class_reference>`\ 吧！

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsserver3dextension_private_method__body_add_collision_exception"></div>

`void` **_body_add_collision_exception** ( body: [`RID`](class_rid.md), excepted_body: [`RID`](class_rid.md) ) virtual[^virtual]<div id="class_physicsserver3dextension_private_method__body_add_collision_exception"></div>

该方法目前没有描述，请帮我们\ :ref:`贡献一个 <doc_updating_the_class_reference>`\ 吧！

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsserver3dextension_private_method__body_add_constant_central_force"></div>

`void` **_body_add_constant_central_force** ( body: [`RID`](class_rid.md), force: [`Vector3`](class_vector3.md) ) virtual[^virtual]<div id="class_physicsserver3dextension_private_method__body_add_constant_central_force"></div>

该方法目前没有描述，请帮我们\ :ref:`贡献一个 <doc_updating_the_class_reference>`\ 吧！

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsserver3dextension_private_method__body_add_constant_force"></div>

`void` **_body_add_constant_force** ( body: [`RID`](class_rid.md), force: [`Vector3`](class_vector3.md), position: [`Vector3`](class_vector3.md) ) virtual[^virtual]<div id="class_physicsserver3dextension_private_method__body_add_constant_force"></div>

该方法目前没有描述，请帮我们\ :ref:`贡献一个 <doc_updating_the_class_reference>`\ 吧！

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsserver3dextension_private_method__body_add_constant_torque"></div>

`void` **_body_add_constant_torque** ( body: [`RID`](class_rid.md), torque: [`Vector3`](class_vector3.md) ) virtual[^virtual]<div id="class_physicsserver3dextension_private_method__body_add_constant_torque"></div>

该方法目前没有描述，请帮我们\ :ref:`贡献一个 <doc_updating_the_class_reference>`\ 吧！

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsserver3dextension_private_method__body_add_shape"></div>

`void` **_body_add_shape** ( body: [`RID`](class_rid.md), shape: [`RID`](class_rid.md), transform: [`Transform3D`](class_transform3d.md), disabled: [`bool`](class_bool.md) ) virtual[^virtual]<div id="class_physicsserver3dextension_private_method__body_add_shape"></div>

该方法目前没有描述，请帮我们\ :ref:`贡献一个 <doc_updating_the_class_reference>`\ 吧！

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsserver3dextension_private_method__body_apply_central_force"></div>

`void` **_body_apply_central_force** ( body: [`RID`](class_rid.md), force: [`Vector3`](class_vector3.md) ) virtual[^virtual]<div id="class_physicsserver3dextension_private_method__body_apply_central_force"></div>

该方法目前没有描述，请帮我们\ :ref:`贡献一个 <doc_updating_the_class_reference>`\ 吧！

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsserver3dextension_private_method__body_apply_central_impulse"></div>

`void` **_body_apply_central_impulse** ( body: [`RID`](class_rid.md), impulse: [`Vector3`](class_vector3.md) ) virtual[^virtual]<div id="class_physicsserver3dextension_private_method__body_apply_central_impulse"></div>

该方法目前没有描述，请帮我们\ :ref:`贡献一个 <doc_updating_the_class_reference>`\ 吧！

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsserver3dextension_private_method__body_apply_force"></div>

`void` **_body_apply_force** ( body: [`RID`](class_rid.md), force: [`Vector3`](class_vector3.md), position: [`Vector3`](class_vector3.md) ) virtual[^virtual]<div id="class_physicsserver3dextension_private_method__body_apply_force"></div>

该方法目前没有描述，请帮我们\ :ref:`贡献一个 <doc_updating_the_class_reference>`\ 吧！

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsserver3dextension_private_method__body_apply_impulse"></div>

`void` **_body_apply_impulse** ( body: [`RID`](class_rid.md), impulse: [`Vector3`](class_vector3.md), position: [`Vector3`](class_vector3.md) ) virtual[^virtual]<div id="class_physicsserver3dextension_private_method__body_apply_impulse"></div>

该方法目前没有描述，请帮我们\ :ref:`贡献一个 <doc_updating_the_class_reference>`\ 吧！

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsserver3dextension_private_method__body_apply_torque"></div>

`void` **_body_apply_torque** ( body: [`RID`](class_rid.md), torque: [`Vector3`](class_vector3.md) ) virtual[^virtual]<div id="class_physicsserver3dextension_private_method__body_apply_torque"></div>

该方法目前没有描述，请帮我们\ :ref:`贡献一个 <doc_updating_the_class_reference>`\ 吧！

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsserver3dextension_private_method__body_apply_torque_impulse"></div>

`void` **_body_apply_torque_impulse** ( body: [`RID`](class_rid.md), impulse: [`Vector3`](class_vector3.md) ) virtual[^virtual]<div id="class_physicsserver3dextension_private_method__body_apply_torque_impulse"></div>

该方法目前没有描述，请帮我们\ :ref:`贡献一个 <doc_updating_the_class_reference>`\ 吧！

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsserver3dextension_private_method__body_attach_object_instance_id"></div>

`void` **_body_attach_object_instance_id** ( body: [`RID`](class_rid.md), id: [`int`](class_int.md) ) virtual[^virtual]<div id="class_physicsserver3dextension_private_method__body_attach_object_instance_id"></div>

该方法目前没有描述，请帮我们\ :ref:`贡献一个 <doc_updating_the_class_reference>`\ 吧！

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsserver3dextension_private_method__body_clear_shapes"></div>

`void` **_body_clear_shapes** ( body: [`RID`](class_rid.md) ) virtual[^virtual]<div id="class_physicsserver3dextension_private_method__body_clear_shapes"></div>

该方法目前没有描述，请帮我们\ :ref:`贡献一个 <doc_updating_the_class_reference>`\ 吧！

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsserver3dextension_private_method__body_create"></div>

[`RID`](class_rid.md) **_body_create** ( ) virtual[^virtual]<div id="class_physicsserver3dextension_private_method__body_create"></div>

该方法目前没有描述，请帮我们\ :ref:`贡献一个 <doc_updating_the_class_reference>`\ 吧！

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsserver3dextension_private_method__body_get_collision_exceptions"></div>

[Array](class_array.md) [`RID`](class_rid.md) **_body_get_collision_exceptions** ( body: [`RID`](class_rid.md) ) virtual[^virtual] const[^const]<div id="class_physicsserver3dextension_private_method__body_get_collision_exceptions"></div>

该方法目前没有描述，请帮我们\ :ref:`贡献一个 <doc_updating_the_class_reference>`\ 吧！

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsserver3dextension_private_method__body_get_collision_layer"></div>

[`int`](class_int.md) **_body_get_collision_layer** ( body: [`RID`](class_rid.md) ) virtual[^virtual] const[^const]<div id="class_physicsserver3dextension_private_method__body_get_collision_layer"></div>

该方法目前没有描述，请帮我们\ :ref:`贡献一个 <doc_updating_the_class_reference>`\ 吧！

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsserver3dextension_private_method__body_get_collision_mask"></div>

[`int`](class_int.md) **_body_get_collision_mask** ( body: [`RID`](class_rid.md) ) virtual[^virtual] const[^const]<div id="class_physicsserver3dextension_private_method__body_get_collision_mask"></div>

该方法目前没有描述，请帮我们\ :ref:`贡献一个 <doc_updating_the_class_reference>`\ 吧！

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsserver3dextension_private_method__body_get_collision_priority"></div>

[`float`](class_float.md) **_body_get_collision_priority** ( body: [`RID`](class_rid.md) ) virtual[^virtual] const[^const]<div id="class_physicsserver3dextension_private_method__body_get_collision_priority"></div>

该方法目前没有描述，请帮我们\ :ref:`贡献一个 <doc_updating_the_class_reference>`\ 吧！

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsserver3dextension_private_method__body_get_constant_force"></div>

[`Vector3`](class_vector3.md) **_body_get_constant_force** ( body: [`RID`](class_rid.md) ) virtual[^virtual] const[^const]<div id="class_physicsserver3dextension_private_method__body_get_constant_force"></div>

该方法目前没有描述，请帮我们\ :ref:`贡献一个 <doc_updating_the_class_reference>`\ 吧！

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsserver3dextension_private_method__body_get_constant_torque"></div>

[`Vector3`](class_vector3.md) **_body_get_constant_torque** ( body: [`RID`](class_rid.md) ) virtual[^virtual] const[^const]<div id="class_physicsserver3dextension_private_method__body_get_constant_torque"></div>

该方法目前没有描述，请帮我们\ :ref:`贡献一个 <doc_updating_the_class_reference>`\ 吧！

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsserver3dextension_private_method__body_get_contacts_reported_depth_threshold"></div>

[`float`](class_float.md) **_body_get_contacts_reported_depth_threshold** ( body: [`RID`](class_rid.md) ) virtual[^virtual] const[^const]<div id="class_physicsserver3dextension_private_method__body_get_contacts_reported_depth_threshold"></div>

该方法目前没有描述，请帮我们\ :ref:`贡献一个 <doc_updating_the_class_reference>`\ 吧！

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsserver3dextension_private_method__body_get_direct_state"></div>

[`PhysicsDirectBodyState3D`](class_physicsdirectbodystate3d.md) **_body_get_direct_state** ( body: [`RID`](class_rid.md) ) virtual[^virtual]<div id="class_physicsserver3dextension_private_method__body_get_direct_state"></div>

该方法目前没有描述，请帮我们\ :ref:`贡献一个 <doc_updating_the_class_reference>`\ 吧！

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsserver3dextension_private_method__body_get_max_contacts_reported"></div>

[`int`](class_int.md) **_body_get_max_contacts_reported** ( body: [`RID`](class_rid.md) ) virtual[^virtual] const[^const]<div id="class_physicsserver3dextension_private_method__body_get_max_contacts_reported"></div>

该方法目前没有描述，请帮我们\ :ref:`贡献一个 <doc_updating_the_class_reference>`\ 吧！

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsserver3dextension_private_method__body_get_mode"></div>

[BodyMode](#enum_physicsserver3d_bodymode) **_body_get_mode** ( body: [`RID`](class_rid.md) ) virtual[^virtual] const[^const]<div id="class_physicsserver3dextension_private_method__body_get_mode"></div>

该方法目前没有描述，请帮我们\ :ref:`贡献一个 <doc_updating_the_class_reference>`\ 吧！

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsserver3dextension_private_method__body_get_object_instance_id"></div>

[`int`](class_int.md) **_body_get_object_instance_id** ( body: [`RID`](class_rid.md) ) virtual[^virtual] const[^const]<div id="class_physicsserver3dextension_private_method__body_get_object_instance_id"></div>

该方法目前没有描述，请帮我们\ :ref:`贡献一个 <doc_updating_the_class_reference>`\ 吧！

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsserver3dextension_private_method__body_get_param"></div>

[`Variant`](class_variant.md) **_body_get_param** ( body: [`RID`](class_rid.md), param: [BodyParameter](#enum_physicsserver3d_bodyparameter) ) virtual[^virtual] const[^const]<div id="class_physicsserver3dextension_private_method__body_get_param"></div>

该方法目前没有描述，请帮我们\ :ref:`贡献一个 <doc_updating_the_class_reference>`\ 吧！

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsserver3dextension_private_method__body_get_shape"></div>

[`RID`](class_rid.md) **_body_get_shape** ( body: [`RID`](class_rid.md), shape_idx: [`int`](class_int.md) ) virtual[^virtual] const[^const]<div id="class_physicsserver3dextension_private_method__body_get_shape"></div>

该方法目前没有描述，请帮我们\ :ref:`贡献一个 <doc_updating_the_class_reference>`\ 吧！

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsserver3dextension_private_method__body_get_shape_count"></div>

[`int`](class_int.md) **_body_get_shape_count** ( body: [`RID`](class_rid.md) ) virtual[^virtual] const[^const]<div id="class_physicsserver3dextension_private_method__body_get_shape_count"></div>

该方法目前没有描述，请帮我们\ :ref:`贡献一个 <doc_updating_the_class_reference>`\ 吧！

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsserver3dextension_private_method__body_get_shape_transform"></div>

[`Transform3D`](class_transform3d.md) **_body_get_shape_transform** ( body: [`RID`](class_rid.md), shape_idx: [`int`](class_int.md) ) virtual[^virtual] const[^const]<div id="class_physicsserver3dextension_private_method__body_get_shape_transform"></div>

该方法目前没有描述，请帮我们\ :ref:`贡献一个 <doc_updating_the_class_reference>`\ 吧！

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsserver3dextension_private_method__body_get_space"></div>

[`RID`](class_rid.md) **_body_get_space** ( body: [`RID`](class_rid.md) ) virtual[^virtual] const[^const]<div id="class_physicsserver3dextension_private_method__body_get_space"></div>

该方法目前没有描述，请帮我们\ :ref:`贡献一个 <doc_updating_the_class_reference>`\ 吧！

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsserver3dextension_private_method__body_get_state"></div>

[`Variant`](class_variant.md) **_body_get_state** ( body: [`RID`](class_rid.md), state: [BodyState](#enum_physicsserver3d_bodystate) ) virtual[^virtual] const[^const]<div id="class_physicsserver3dextension_private_method__body_get_state"></div>

该方法目前没有描述，请帮我们\ :ref:`贡献一个 <doc_updating_the_class_reference>`\ 吧！

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsserver3dextension_private_method__body_get_user_flags"></div>

[`int`](class_int.md) **_body_get_user_flags** ( body: [`RID`](class_rid.md) ) virtual[^virtual] const[^const]<div id="class_physicsserver3dextension_private_method__body_get_user_flags"></div>

该方法目前没有描述，请帮我们\ :ref:`贡献一个 <doc_updating_the_class_reference>`\ 吧！

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsserver3dextension_private_method__body_is_axis_locked"></div>

[`bool`](class_bool.md) **_body_is_axis_locked** ( body: [`RID`](class_rid.md), axis: [BodyAxis](#enum_physicsserver3d_bodyaxis) ) virtual[^virtual] const[^const]<div id="class_physicsserver3dextension_private_method__body_is_axis_locked"></div>

该方法目前没有描述，请帮我们\ :ref:`贡献一个 <doc_updating_the_class_reference>`\ 吧！

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsserver3dextension_private_method__body_is_continuous_collision_detection_enabled"></div>

[`bool`](class_bool.md) **_body_is_continuous_collision_detection_enabled** ( body: [`RID`](class_rid.md) ) virtual[^virtual] const[^const]<div id="class_physicsserver3dextension_private_method__body_is_continuous_collision_detection_enabled"></div>

该方法目前没有描述，请帮我们\ :ref:`贡献一个 <doc_updating_the_class_reference>`\ 吧！

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsserver3dextension_private_method__body_is_omitting_force_integration"></div>

[`bool`](class_bool.md) **_body_is_omitting_force_integration** ( body: [`RID`](class_rid.md) ) virtual[^virtual] const[^const]<div id="class_physicsserver3dextension_private_method__body_is_omitting_force_integration"></div>

该方法目前没有描述，请帮我们\ :ref:`贡献一个 <doc_updating_the_class_reference>`\ 吧！

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsserver3dextension_private_method__body_remove_collision_exception"></div>

`void` **_body_remove_collision_exception** ( body: [`RID`](class_rid.md), excepted_body: [`RID`](class_rid.md) ) virtual[^virtual]<div id="class_physicsserver3dextension_private_method__body_remove_collision_exception"></div>

该方法目前没有描述，请帮我们\ :ref:`贡献一个 <doc_updating_the_class_reference>`\ 吧！

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsserver3dextension_private_method__body_remove_shape"></div>

`void` **_body_remove_shape** ( body: [`RID`](class_rid.md), shape_idx: [`int`](class_int.md) ) virtual[^virtual]<div id="class_physicsserver3dextension_private_method__body_remove_shape"></div>

该方法目前没有描述，请帮我们\ :ref:`贡献一个 <doc_updating_the_class_reference>`\ 吧！

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsserver3dextension_private_method__body_reset_mass_properties"></div>

`void` **_body_reset_mass_properties** ( body: [`RID`](class_rid.md) ) virtual[^virtual]<div id="class_physicsserver3dextension_private_method__body_reset_mass_properties"></div>

该方法目前没有描述，请帮我们\ :ref:`贡献一个 <doc_updating_the_class_reference>`\ 吧！

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsserver3dextension_private_method__body_set_axis_lock"></div>

`void` **_body_set_axis_lock** ( body: [`RID`](class_rid.md), axis: [BodyAxis](#enum_physicsserver3d_bodyaxis), lock: [`bool`](class_bool.md) ) virtual[^virtual]<div id="class_physicsserver3dextension_private_method__body_set_axis_lock"></div>

该方法目前没有描述，请帮我们\ :ref:`贡献一个 <doc_updating_the_class_reference>`\ 吧！

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsserver3dextension_private_method__body_set_axis_velocity"></div>

`void` **_body_set_axis_velocity** ( body: [`RID`](class_rid.md), axis_velocity: [`Vector3`](class_vector3.md) ) virtual[^virtual]<div id="class_physicsserver3dextension_private_method__body_set_axis_velocity"></div>

该方法目前没有描述，请帮我们\ :ref:`贡献一个 <doc_updating_the_class_reference>`\ 吧！

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsserver3dextension_private_method__body_set_collision_layer"></div>

`void` **_body_set_collision_layer** ( body: [`RID`](class_rid.md), layer: [`int`](class_int.md) ) virtual[^virtual]<div id="class_physicsserver3dextension_private_method__body_set_collision_layer"></div>

该方法目前没有描述，请帮我们\ :ref:`贡献一个 <doc_updating_the_class_reference>`\ 吧！

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsserver3dextension_private_method__body_set_collision_mask"></div>

`void` **_body_set_collision_mask** ( body: [`RID`](class_rid.md), mask: [`int`](class_int.md) ) virtual[^virtual]<div id="class_physicsserver3dextension_private_method__body_set_collision_mask"></div>

该方法目前没有描述，请帮我们\ :ref:`贡献一个 <doc_updating_the_class_reference>`\ 吧！

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsserver3dextension_private_method__body_set_collision_priority"></div>

`void` **_body_set_collision_priority** ( body: [`RID`](class_rid.md), priority: [`float`](class_float.md) ) virtual[^virtual]<div id="class_physicsserver3dextension_private_method__body_set_collision_priority"></div>

该方法目前没有描述，请帮我们\ :ref:`贡献一个 <doc_updating_the_class_reference>`\ 吧！

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsserver3dextension_private_method__body_set_constant_force"></div>

`void` **_body_set_constant_force** ( body: [`RID`](class_rid.md), force: [`Vector3`](class_vector3.md) ) virtual[^virtual]<div id="class_physicsserver3dextension_private_method__body_set_constant_force"></div>

该方法目前没有描述，请帮我们\ :ref:`贡献一个 <doc_updating_the_class_reference>`\ 吧！

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsserver3dextension_private_method__body_set_constant_torque"></div>

`void` **_body_set_constant_torque** ( body: [`RID`](class_rid.md), torque: [`Vector3`](class_vector3.md) ) virtual[^virtual]<div id="class_physicsserver3dextension_private_method__body_set_constant_torque"></div>

该方法目前没有描述，请帮我们\ :ref:`贡献一个 <doc_updating_the_class_reference>`\ 吧！

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsserver3dextension_private_method__body_set_contacts_reported_depth_threshold"></div>

`void` **_body_set_contacts_reported_depth_threshold** ( body: [`RID`](class_rid.md), threshold: [`float`](class_float.md) ) virtual[^virtual]<div id="class_physicsserver3dextension_private_method__body_set_contacts_reported_depth_threshold"></div>

该方法目前没有描述，请帮我们\ :ref:`贡献一个 <doc_updating_the_class_reference>`\ 吧！

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsserver3dextension_private_method__body_set_enable_continuous_collision_detection"></div>

`void` **_body_set_enable_continuous_collision_detection** ( body: [`RID`](class_rid.md), enable: [`bool`](class_bool.md) ) virtual[^virtual]<div id="class_physicsserver3dextension_private_method__body_set_enable_continuous_collision_detection"></div>

该方法目前没有描述，请帮我们\ :ref:`贡献一个 <doc_updating_the_class_reference>`\ 吧！

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsserver3dextension_private_method__body_set_force_integration_callback"></div>

`void` **_body_set_force_integration_callback** ( body: [`RID`](class_rid.md), callable: [`Callable`](class_callable.md), userdata: [`Variant`](class_variant.md) ) virtual[^virtual]<div id="class_physicsserver3dextension_private_method__body_set_force_integration_callback"></div>

该方法目前没有描述，请帮我们\ :ref:`贡献一个 <doc_updating_the_class_reference>`\ 吧！

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsserver3dextension_private_method__body_set_max_contacts_reported"></div>

`void` **_body_set_max_contacts_reported** ( body: [`RID`](class_rid.md), amount: [`int`](class_int.md) ) virtual[^virtual]<div id="class_physicsserver3dextension_private_method__body_set_max_contacts_reported"></div>

该方法目前没有描述，请帮我们\ :ref:`贡献一个 <doc_updating_the_class_reference>`\ 吧！

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsserver3dextension_private_method__body_set_mode"></div>

`void` **_body_set_mode** ( body: [`RID`](class_rid.md), mode: [BodyMode](#enum_physicsserver3d_bodymode) ) virtual[^virtual]<div id="class_physicsserver3dextension_private_method__body_set_mode"></div>

该方法目前没有描述，请帮我们\ :ref:`贡献一个 <doc_updating_the_class_reference>`\ 吧！

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsserver3dextension_private_method__body_set_omit_force_integration"></div>

`void` **_body_set_omit_force_integration** ( body: [`RID`](class_rid.md), enable: [`bool`](class_bool.md) ) virtual[^virtual]<div id="class_physicsserver3dextension_private_method__body_set_omit_force_integration"></div>

该方法目前没有描述，请帮我们\ :ref:`贡献一个 <doc_updating_the_class_reference>`\ 吧！

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsserver3dextension_private_method__body_set_param"></div>

`void` **_body_set_param** ( body: [`RID`](class_rid.md), param: [BodyParameter](#enum_physicsserver3d_bodyparameter), value: [`Variant`](class_variant.md) ) virtual[^virtual]<div id="class_physicsserver3dextension_private_method__body_set_param"></div>

该方法目前没有描述，请帮我们\ :ref:`贡献一个 <doc_updating_the_class_reference>`\ 吧！

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsserver3dextension_private_method__body_set_ray_pickable"></div>

`void` **_body_set_ray_pickable** ( body: [`RID`](class_rid.md), enable: [`bool`](class_bool.md) ) virtual[^virtual]<div id="class_physicsserver3dextension_private_method__body_set_ray_pickable"></div>

该方法目前没有描述，请帮我们\ :ref:`贡献一个 <doc_updating_the_class_reference>`\ 吧！

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsserver3dextension_private_method__body_set_shape"></div>

`void` **_body_set_shape** ( body: [`RID`](class_rid.md), shape_idx: [`int`](class_int.md), shape: [`RID`](class_rid.md) ) virtual[^virtual]<div id="class_physicsserver3dextension_private_method__body_set_shape"></div>

该方法目前没有描述，请帮我们\ :ref:`贡献一个 <doc_updating_the_class_reference>`\ 吧！

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsserver3dextension_private_method__body_set_shape_disabled"></div>

`void` **_body_set_shape_disabled** ( body: [`RID`](class_rid.md), shape_idx: [`int`](class_int.md), disabled: [`bool`](class_bool.md) ) virtual[^virtual]<div id="class_physicsserver3dextension_private_method__body_set_shape_disabled"></div>

该方法目前没有描述，请帮我们\ :ref:`贡献一个 <doc_updating_the_class_reference>`\ 吧！

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsserver3dextension_private_method__body_set_shape_transform"></div>

`void` **_body_set_shape_transform** ( body: [`RID`](class_rid.md), shape_idx: [`int`](class_int.md), transform: [`Transform3D`](class_transform3d.md) ) virtual[^virtual]<div id="class_physicsserver3dextension_private_method__body_set_shape_transform"></div>

该方法目前没有描述，请帮我们\ :ref:`贡献一个 <doc_updating_the_class_reference>`\ 吧！

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsserver3dextension_private_method__body_set_space"></div>

`void` **_body_set_space** ( body: [`RID`](class_rid.md), space: [`RID`](class_rid.md) ) virtual[^virtual]<div id="class_physicsserver3dextension_private_method__body_set_space"></div>

该方法目前没有描述，请帮我们\ :ref:`贡献一个 <doc_updating_the_class_reference>`\ 吧！

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsserver3dextension_private_method__body_set_state"></div>

`void` **_body_set_state** ( body: [`RID`](class_rid.md), state: [BodyState](#enum_physicsserver3d_bodystate), value: [`Variant`](class_variant.md) ) virtual[^virtual]<div id="class_physicsserver3dextension_private_method__body_set_state"></div>

该方法目前没有描述，请帮我们\ :ref:`贡献一个 <doc_updating_the_class_reference>`\ 吧！

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsserver3dextension_private_method__body_set_state_sync_callback"></div>

`void` **_body_set_state_sync_callback** ( body: [`RID`](class_rid.md), callable: [`Callable`](class_callable.md) ) virtual[^virtual]<div id="class_physicsserver3dextension_private_method__body_set_state_sync_callback"></div>

该方法目前没有描述，请帮我们\ :ref:`贡献一个 <doc_updating_the_class_reference>`\ 吧！

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsserver3dextension_private_method__body_set_user_flags"></div>

`void` **_body_set_user_flags** ( body: [`RID`](class_rid.md), flags: [`int`](class_int.md) ) virtual[^virtual]<div id="class_physicsserver3dextension_private_method__body_set_user_flags"></div>

该方法目前没有描述，请帮我们\ :ref:`贡献一个 <doc_updating_the_class_reference>`\ 吧！

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsserver3dextension_private_method__body_test_motion"></div>

[`bool`](class_bool.md) **_body_test_motion** ( body: [`RID`](class_rid.md), from: [`Transform3D`](class_transform3d.md), motion: [`Vector3`](class_vector3.md), margin: [`float`](class_float.md), max_collisions: [`int`](class_int.md), collide_separation_ray: [`bool`](class_bool.md), recovery_as_collision: [`bool`](class_bool.md), result: `PhysicsServer3DExtensionMotionResult*` ) virtual[^virtual] const[^const]<div id="class_physicsserver3dextension_private_method__body_test_motion"></div>

该方法目前没有描述，请帮我们\ :ref:`贡献一个 <doc_updating_the_class_reference>`\ 吧！

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsserver3dextension_private_method__box_shape_create"></div>

[`RID`](class_rid.md) **_box_shape_create** ( ) virtual[^virtual]<div id="class_physicsserver3dextension_private_method__box_shape_create"></div>

该方法目前没有描述，请帮我们\ :ref:`贡献一个 <doc_updating_the_class_reference>`\ 吧！

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsserver3dextension_private_method__capsule_shape_create"></div>

[`RID`](class_rid.md) **_capsule_shape_create** ( ) virtual[^virtual]<div id="class_physicsserver3dextension_private_method__capsule_shape_create"></div>

该方法目前没有描述，请帮我们\ :ref:`贡献一个 <doc_updating_the_class_reference>`\ 吧！

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsserver3dextension_private_method__concave_polygon_shape_create"></div>

[`RID`](class_rid.md) **_concave_polygon_shape_create** ( ) virtual[^virtual]<div id="class_physicsserver3dextension_private_method__concave_polygon_shape_create"></div>

该方法目前没有描述，请帮我们\ :ref:`贡献一个 <doc_updating_the_class_reference>`\ 吧！

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsserver3dextension_private_method__cone_twist_joint_get_param"></div>

[`float`](class_float.md) **_cone_twist_joint_get_param** ( joint: [`RID`](class_rid.md), param: [ConeTwistJointParam](#enum_physicsserver3d_conetwistjointparam) ) virtual[^virtual] const[^const]<div id="class_physicsserver3dextension_private_method__cone_twist_joint_get_param"></div>

该方法目前没有描述，请帮我们\ :ref:`贡献一个 <doc_updating_the_class_reference>`\ 吧！

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsserver3dextension_private_method__cone_twist_joint_set_param"></div>

`void` **_cone_twist_joint_set_param** ( joint: [`RID`](class_rid.md), param: [ConeTwistJointParam](#enum_physicsserver3d_conetwistjointparam), value: [`float`](class_float.md) ) virtual[^virtual]<div id="class_physicsserver3dextension_private_method__cone_twist_joint_set_param"></div>

该方法目前没有描述，请帮我们\ :ref:`贡献一个 <doc_updating_the_class_reference>`\ 吧！

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsserver3dextension_private_method__convex_polygon_shape_create"></div>

[`RID`](class_rid.md) **_convex_polygon_shape_create** ( ) virtual[^virtual]<div id="class_physicsserver3dextension_private_method__convex_polygon_shape_create"></div>

该方法目前没有描述，请帮我们\ :ref:`贡献一个 <doc_updating_the_class_reference>`\ 吧！

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsserver3dextension_private_method__custom_shape_create"></div>

[`RID`](class_rid.md) **_custom_shape_create** ( ) virtual[^virtual]<div id="class_physicsserver3dextension_private_method__custom_shape_create"></div>

该方法目前没有描述，请帮我们\ :ref:`贡献一个 <doc_updating_the_class_reference>`\ 吧！

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsserver3dextension_private_method__cylinder_shape_create"></div>

[`RID`](class_rid.md) **_cylinder_shape_create** ( ) virtual[^virtual]<div id="class_physicsserver3dextension_private_method__cylinder_shape_create"></div>

该方法目前没有描述，请帮我们\ :ref:`贡献一个 <doc_updating_the_class_reference>`\ 吧！

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsserver3dextension_private_method__end_sync"></div>

`void` **_end_sync** ( ) virtual[^virtual]<div id="class_physicsserver3dextension_private_method__end_sync"></div>

该方法目前没有描述，请帮我们\ :ref:`贡献一个 <doc_updating_the_class_reference>`\ 吧！

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsserver3dextension_private_method__finish"></div>

`void` **_finish** ( ) virtual[^virtual]<div id="class_physicsserver3dextension_private_method__finish"></div>

该方法目前没有描述，请帮我们\ :ref:`贡献一个 <doc_updating_the_class_reference>`\ 吧！

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsserver3dextension_private_method__flush_queries"></div>

`void` **_flush_queries** ( ) virtual[^virtual]<div id="class_physicsserver3dextension_private_method__flush_queries"></div>

该方法目前没有描述，请帮我们\ :ref:`贡献一个 <doc_updating_the_class_reference>`\ 吧！

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsserver3dextension_private_method__free_rid"></div>

`void` **_free_rid** ( rid: [`RID`](class_rid.md) ) virtual[^virtual]<div id="class_physicsserver3dextension_private_method__free_rid"></div>

该方法目前没有描述，请帮我们\ :ref:`贡献一个 <doc_updating_the_class_reference>`\ 吧！

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsserver3dextension_private_method__generic_6dof_joint_get_flag"></div>

[`bool`](class_bool.md) **_generic_6dof_joint_get_flag** ( joint: [`RID`](class_rid.md), axis: Vector3.Axis, flag: [G6DOFJointAxisFlag](#enum_physicsserver3d_g6dofjointaxisflag) ) virtual[^virtual] const[^const]<div id="class_physicsserver3dextension_private_method__generic_6dof_joint_get_flag"></div>

该方法目前没有描述，请帮我们\ :ref:`贡献一个 <doc_updating_the_class_reference>`\ 吧！

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsserver3dextension_private_method__generic_6dof_joint_get_param"></div>

[`float`](class_float.md) **_generic_6dof_joint_get_param** ( joint: [`RID`](class_rid.md), axis: Vector3.Axis, param: [G6DOFJointAxisParam](#enum_physicsserver3d_g6dofjointaxisparam) ) virtual[^virtual] const[^const]<div id="class_physicsserver3dextension_private_method__generic_6dof_joint_get_param"></div>

该方法目前没有描述，请帮我们\ :ref:`贡献一个 <doc_updating_the_class_reference>`\ 吧！

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsserver3dextension_private_method__generic_6dof_joint_set_flag"></div>

`void` **_generic_6dof_joint_set_flag** ( joint: [`RID`](class_rid.md), axis: Vector3.Axis, flag: [G6DOFJointAxisFlag](#enum_physicsserver3d_g6dofjointaxisflag), enable: [`bool`](class_bool.md) ) virtual[^virtual]<div id="class_physicsserver3dextension_private_method__generic_6dof_joint_set_flag"></div>

该方法目前没有描述，请帮我们\ :ref:`贡献一个 <doc_updating_the_class_reference>`\ 吧！

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsserver3dextension_private_method__generic_6dof_joint_set_param"></div>

`void` **_generic_6dof_joint_set_param** ( joint: [`RID`](class_rid.md), axis: Vector3.Axis, param: [G6DOFJointAxisParam](#enum_physicsserver3d_g6dofjointaxisparam), value: [`float`](class_float.md) ) virtual[^virtual]<div id="class_physicsserver3dextension_private_method__generic_6dof_joint_set_param"></div>

该方法目前没有描述，请帮我们\ :ref:`贡献一个 <doc_updating_the_class_reference>`\ 吧！

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsserver3dextension_private_method__get_process_info"></div>

[`int`](class_int.md) **_get_process_info** ( process_info: [ProcessInfo](#enum_physicsserver3d_processinfo) ) virtual[^virtual]<div id="class_physicsserver3dextension_private_method__get_process_info"></div>

该方法目前没有描述，请帮我们\ :ref:`贡献一个 <doc_updating_the_class_reference>`\ 吧！

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsserver3dextension_private_method__heightmap_shape_create"></div>

[`RID`](class_rid.md) **_heightmap_shape_create** ( ) virtual[^virtual]<div id="class_physicsserver3dextension_private_method__heightmap_shape_create"></div>

该方法目前没有描述，请帮我们\ :ref:`贡献一个 <doc_updating_the_class_reference>`\ 吧！

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsserver3dextension_private_method__hinge_joint_get_flag"></div>

[`bool`](class_bool.md) **_hinge_joint_get_flag** ( joint: [`RID`](class_rid.md), flag: [HingeJointFlag](#enum_physicsserver3d_hingejointflag) ) virtual[^virtual] const[^const]<div id="class_physicsserver3dextension_private_method__hinge_joint_get_flag"></div>

该方法目前没有描述，请帮我们\ :ref:`贡献一个 <doc_updating_the_class_reference>`\ 吧！

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsserver3dextension_private_method__hinge_joint_get_param"></div>

[`float`](class_float.md) **_hinge_joint_get_param** ( joint: [`RID`](class_rid.md), param: [HingeJointParam](#enum_physicsserver3d_hingejointparam) ) virtual[^virtual] const[^const]<div id="class_physicsserver3dextension_private_method__hinge_joint_get_param"></div>

该方法目前没有描述，请帮我们\ :ref:`贡献一个 <doc_updating_the_class_reference>`\ 吧！

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsserver3dextension_private_method__hinge_joint_set_flag"></div>

`void` **_hinge_joint_set_flag** ( joint: [`RID`](class_rid.md), flag: [HingeJointFlag](#enum_physicsserver3d_hingejointflag), enabled: [`bool`](class_bool.md) ) virtual[^virtual]<div id="class_physicsserver3dextension_private_method__hinge_joint_set_flag"></div>

该方法目前没有描述，请帮我们\ :ref:`贡献一个 <doc_updating_the_class_reference>`\ 吧！

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsserver3dextension_private_method__hinge_joint_set_param"></div>

`void` **_hinge_joint_set_param** ( joint: [`RID`](class_rid.md), param: [HingeJointParam](#enum_physicsserver3d_hingejointparam), value: [`float`](class_float.md) ) virtual[^virtual]<div id="class_physicsserver3dextension_private_method__hinge_joint_set_param"></div>

该方法目前没有描述，请帮我们\ :ref:`贡献一个 <doc_updating_the_class_reference>`\ 吧！

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsserver3dextension_private_method__init"></div>

`void` **_init** ( ) virtual[^virtual]<div id="class_physicsserver3dextension_private_method__init"></div>

该方法目前没有描述，请帮我们\ :ref:`贡献一个 <doc_updating_the_class_reference>`\ 吧！

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsserver3dextension_private_method__is_flushing_queries"></div>

[`bool`](class_bool.md) **_is_flushing_queries** ( ) virtual[^virtual] const[^const]<div id="class_physicsserver3dextension_private_method__is_flushing_queries"></div>

该方法目前没有描述，请帮我们\ :ref:`贡献一个 <doc_updating_the_class_reference>`\ 吧！

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsserver3dextension_private_method__joint_clear"></div>

`void` **_joint_clear** ( joint: [`RID`](class_rid.md) ) virtual[^virtual]<div id="class_physicsserver3dextension_private_method__joint_clear"></div>

该方法目前没有描述，请帮我们\ :ref:`贡献一个 <doc_updating_the_class_reference>`\ 吧！

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsserver3dextension_private_method__joint_create"></div>

[`RID`](class_rid.md) **_joint_create** ( ) virtual[^virtual]<div id="class_physicsserver3dextension_private_method__joint_create"></div>

该方法目前没有描述，请帮我们\ :ref:`贡献一个 <doc_updating_the_class_reference>`\ 吧！

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsserver3dextension_private_method__joint_disable_collisions_between_bodies"></div>

`void` **_joint_disable_collisions_between_bodies** ( joint: [`RID`](class_rid.md), disable: [`bool`](class_bool.md) ) virtual[^virtual]<div id="class_physicsserver3dextension_private_method__joint_disable_collisions_between_bodies"></div>

该方法目前没有描述，请帮我们\ :ref:`贡献一个 <doc_updating_the_class_reference>`\ 吧！

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsserver3dextension_private_method__joint_get_solver_priority"></div>

[`int`](class_int.md) **_joint_get_solver_priority** ( joint: [`RID`](class_rid.md) ) virtual[^virtual] const[^const]<div id="class_physicsserver3dextension_private_method__joint_get_solver_priority"></div>

该方法目前没有描述，请帮我们\ :ref:`贡献一个 <doc_updating_the_class_reference>`\ 吧！

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsserver3dextension_private_method__joint_get_type"></div>

[JointType](#enum_physicsserver3d_jointtype) **_joint_get_type** ( joint: [`RID`](class_rid.md) ) virtual[^virtual] const[^const]<div id="class_physicsserver3dextension_private_method__joint_get_type"></div>

该方法目前没有描述，请帮我们\ :ref:`贡献一个 <doc_updating_the_class_reference>`\ 吧！

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsserver3dextension_private_method__joint_is_disabled_collisions_between_bodies"></div>

[`bool`](class_bool.md) **_joint_is_disabled_collisions_between_bodies** ( joint: [`RID`](class_rid.md) ) virtual[^virtual] const[^const]<div id="class_physicsserver3dextension_private_method__joint_is_disabled_collisions_between_bodies"></div>

该方法目前没有描述，请帮我们\ :ref:`贡献一个 <doc_updating_the_class_reference>`\ 吧！

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsserver3dextension_private_method__joint_make_cone_twist"></div>

`void` **_joint_make_cone_twist** ( joint: [`RID`](class_rid.md), body_A: [`RID`](class_rid.md), local_ref_A: [`Transform3D`](class_transform3d.md), body_B: [`RID`](class_rid.md), local_ref_B: [`Transform3D`](class_transform3d.md) ) virtual[^virtual]<div id="class_physicsserver3dextension_private_method__joint_make_cone_twist"></div>

该方法目前没有描述，请帮我们\ :ref:`贡献一个 <doc_updating_the_class_reference>`\ 吧！

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsserver3dextension_private_method__joint_make_generic_6dof"></div>

`void` **_joint_make_generic_6dof** ( joint: [`RID`](class_rid.md), body_A: [`RID`](class_rid.md), local_ref_A: [`Transform3D`](class_transform3d.md), body_B: [`RID`](class_rid.md), local_ref_B: [`Transform3D`](class_transform3d.md) ) virtual[^virtual]<div id="class_physicsserver3dextension_private_method__joint_make_generic_6dof"></div>

该方法目前没有描述，请帮我们\ :ref:`贡献一个 <doc_updating_the_class_reference>`\ 吧！

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsserver3dextension_private_method__joint_make_hinge"></div>

`void` **_joint_make_hinge** ( joint: [`RID`](class_rid.md), body_A: [`RID`](class_rid.md), hinge_A: [`Transform3D`](class_transform3d.md), body_B: [`RID`](class_rid.md), hinge_B: [`Transform3D`](class_transform3d.md) ) virtual[^virtual]<div id="class_physicsserver3dextension_private_method__joint_make_hinge"></div>

该方法目前没有描述，请帮我们\ :ref:`贡献一个 <doc_updating_the_class_reference>`\ 吧！

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsserver3dextension_private_method__joint_make_hinge_simple"></div>

`void` **_joint_make_hinge_simple** ( joint: [`RID`](class_rid.md), body_A: [`RID`](class_rid.md), pivot_A: [`Vector3`](class_vector3.md), axis_A: [`Vector3`](class_vector3.md), body_B: [`RID`](class_rid.md), pivot_B: [`Vector3`](class_vector3.md), axis_B: [`Vector3`](class_vector3.md) ) virtual[^virtual]<div id="class_physicsserver3dextension_private_method__joint_make_hinge_simple"></div>

该方法目前没有描述，请帮我们\ :ref:`贡献一个 <doc_updating_the_class_reference>`\ 吧！

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsserver3dextension_private_method__joint_make_pin"></div>

`void` **_joint_make_pin** ( joint: [`RID`](class_rid.md), body_A: [`RID`](class_rid.md), local_A: [`Vector3`](class_vector3.md), body_B: [`RID`](class_rid.md), local_B: [`Vector3`](class_vector3.md) ) virtual[^virtual]<div id="class_physicsserver3dextension_private_method__joint_make_pin"></div>

该方法目前没有描述，请帮我们\ :ref:`贡献一个 <doc_updating_the_class_reference>`\ 吧！

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsserver3dextension_private_method__joint_make_slider"></div>

`void` **_joint_make_slider** ( joint: [`RID`](class_rid.md), body_A: [`RID`](class_rid.md), local_ref_A: [`Transform3D`](class_transform3d.md), body_B: [`RID`](class_rid.md), local_ref_B: [`Transform3D`](class_transform3d.md) ) virtual[^virtual]<div id="class_physicsserver3dextension_private_method__joint_make_slider"></div>

该方法目前没有描述，请帮我们\ :ref:`贡献一个 <doc_updating_the_class_reference>`\ 吧！

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsserver3dextension_private_method__joint_set_solver_priority"></div>

`void` **_joint_set_solver_priority** ( joint: [`RID`](class_rid.md), priority: [`int`](class_int.md) ) virtual[^virtual]<div id="class_physicsserver3dextension_private_method__joint_set_solver_priority"></div>

该方法目前没有描述，请帮我们\ :ref:`贡献一个 <doc_updating_the_class_reference>`\ 吧！

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsserver3dextension_private_method__pin_joint_get_local_a"></div>

[`Vector3`](class_vector3.md) **_pin_joint_get_local_a** ( joint: [`RID`](class_rid.md) ) virtual[^virtual] const[^const]<div id="class_physicsserver3dextension_private_method__pin_joint_get_local_a"></div>

该方法目前没有描述，请帮我们\ :ref:`贡献一个 <doc_updating_the_class_reference>`\ 吧！

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsserver3dextension_private_method__pin_joint_get_local_b"></div>

[`Vector3`](class_vector3.md) **_pin_joint_get_local_b** ( joint: [`RID`](class_rid.md) ) virtual[^virtual] const[^const]<div id="class_physicsserver3dextension_private_method__pin_joint_get_local_b"></div>

该方法目前没有描述，请帮我们\ :ref:`贡献一个 <doc_updating_the_class_reference>`\ 吧！

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsserver3dextension_private_method__pin_joint_get_param"></div>

[`float`](class_float.md) **_pin_joint_get_param** ( joint: [`RID`](class_rid.md), param: [PinJointParam](#enum_physicsserver3d_pinjointparam) ) virtual[^virtual] const[^const]<div id="class_physicsserver3dextension_private_method__pin_joint_get_param"></div>

该方法目前没有描述，请帮我们\ :ref:`贡献一个 <doc_updating_the_class_reference>`\ 吧！

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsserver3dextension_private_method__pin_joint_set_local_a"></div>

`void` **_pin_joint_set_local_a** ( joint: [`RID`](class_rid.md), local_A: [`Vector3`](class_vector3.md) ) virtual[^virtual]<div id="class_physicsserver3dextension_private_method__pin_joint_set_local_a"></div>

该方法目前没有描述，请帮我们\ :ref:`贡献一个 <doc_updating_the_class_reference>`\ 吧！

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsserver3dextension_private_method__pin_joint_set_local_b"></div>

`void` **_pin_joint_set_local_b** ( joint: [`RID`](class_rid.md), local_B: [`Vector3`](class_vector3.md) ) virtual[^virtual]<div id="class_physicsserver3dextension_private_method__pin_joint_set_local_b"></div>

该方法目前没有描述，请帮我们\ :ref:`贡献一个 <doc_updating_the_class_reference>`\ 吧！

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsserver3dextension_private_method__pin_joint_set_param"></div>

`void` **_pin_joint_set_param** ( joint: [`RID`](class_rid.md), param: [PinJointParam](#enum_physicsserver3d_pinjointparam), value: [`float`](class_float.md) ) virtual[^virtual]<div id="class_physicsserver3dextension_private_method__pin_joint_set_param"></div>

该方法目前没有描述，请帮我们\ :ref:`贡献一个 <doc_updating_the_class_reference>`\ 吧！

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsserver3dextension_private_method__separation_ray_shape_create"></div>

[`RID`](class_rid.md) **_separation_ray_shape_create** ( ) virtual[^virtual]<div id="class_physicsserver3dextension_private_method__separation_ray_shape_create"></div>

该方法目前没有描述，请帮我们\ :ref:`贡献一个 <doc_updating_the_class_reference>`\ 吧！

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsserver3dextension_private_method__set_active"></div>

`void` **_set_active** ( active: [`bool`](class_bool.md) ) virtual[^virtual]<div id="class_physicsserver3dextension_private_method__set_active"></div>

该方法目前没有描述，请帮我们\ :ref:`贡献一个 <doc_updating_the_class_reference>`\ 吧！

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsserver3dextension_private_method__shape_get_custom_solver_bias"></div>

[`float`](class_float.md) **_shape_get_custom_solver_bias** ( shape: [`RID`](class_rid.md) ) virtual[^virtual] const[^const]<div id="class_physicsserver3dextension_private_method__shape_get_custom_solver_bias"></div>

该方法目前没有描述，请帮我们\ :ref:`贡献一个 <doc_updating_the_class_reference>`\ 吧！

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsserver3dextension_private_method__shape_get_data"></div>

[`Variant`](class_variant.md) **_shape_get_data** ( shape: [`RID`](class_rid.md) ) virtual[^virtual] const[^const]<div id="class_physicsserver3dextension_private_method__shape_get_data"></div>

该方法目前没有描述，请帮我们\ :ref:`贡献一个 <doc_updating_the_class_reference>`\ 吧！

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsserver3dextension_private_method__shape_get_margin"></div>

[`float`](class_float.md) **_shape_get_margin** ( shape: [`RID`](class_rid.md) ) virtual[^virtual] const[^const]<div id="class_physicsserver3dextension_private_method__shape_get_margin"></div>

该方法目前没有描述，请帮我们\ :ref:`贡献一个 <doc_updating_the_class_reference>`\ 吧！

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsserver3dextension_private_method__shape_get_type"></div>

[ShapeType](#enum_physicsserver3d_shapetype) **_shape_get_type** ( shape: [`RID`](class_rid.md) ) virtual[^virtual] const[^const]<div id="class_physicsserver3dextension_private_method__shape_get_type"></div>

该方法目前没有描述，请帮我们\ :ref:`贡献一个 <doc_updating_the_class_reference>`\ 吧！

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsserver3dextension_private_method__shape_set_custom_solver_bias"></div>

`void` **_shape_set_custom_solver_bias** ( shape: [`RID`](class_rid.md), bias: [`float`](class_float.md) ) virtual[^virtual]<div id="class_physicsserver3dextension_private_method__shape_set_custom_solver_bias"></div>

该方法目前没有描述，请帮我们\ :ref:`贡献一个 <doc_updating_the_class_reference>`\ 吧！

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsserver3dextension_private_method__shape_set_data"></div>

`void` **_shape_set_data** ( shape: [`RID`](class_rid.md), data: [`Variant`](class_variant.md) ) virtual[^virtual]<div id="class_physicsserver3dextension_private_method__shape_set_data"></div>

该方法目前没有描述，请帮我们\ :ref:`贡献一个 <doc_updating_the_class_reference>`\ 吧！

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsserver3dextension_private_method__shape_set_margin"></div>

`void` **_shape_set_margin** ( shape: [`RID`](class_rid.md), margin: [`float`](class_float.md) ) virtual[^virtual]<div id="class_physicsserver3dextension_private_method__shape_set_margin"></div>

该方法目前没有描述，请帮我们\ :ref:`贡献一个 <doc_updating_the_class_reference>`\ 吧！

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsserver3dextension_private_method__slider_joint_get_param"></div>

[`float`](class_float.md) **_slider_joint_get_param** ( joint: [`RID`](class_rid.md), param: [SliderJointParam](#enum_physicsserver3d_sliderjointparam) ) virtual[^virtual] const[^const]<div id="class_physicsserver3dextension_private_method__slider_joint_get_param"></div>

该方法目前没有描述，请帮我们\ :ref:`贡献一个 <doc_updating_the_class_reference>`\ 吧！

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsserver3dextension_private_method__slider_joint_set_param"></div>

`void` **_slider_joint_set_param** ( joint: [`RID`](class_rid.md), param: [SliderJointParam](#enum_physicsserver3d_sliderjointparam), value: [`float`](class_float.md) ) virtual[^virtual]<div id="class_physicsserver3dextension_private_method__slider_joint_set_param"></div>

该方法目前没有描述，请帮我们\ :ref:`贡献一个 <doc_updating_the_class_reference>`\ 吧！

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsserver3dextension_private_method__soft_body_add_collision_exception"></div>

`void` **_soft_body_add_collision_exception** ( body: [`RID`](class_rid.md), body_b: [`RID`](class_rid.md) ) virtual[^virtual]<div id="class_physicsserver3dextension_private_method__soft_body_add_collision_exception"></div>

该方法目前没有描述，请帮我们\ :ref:`贡献一个 <doc_updating_the_class_reference>`\ 吧！

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsserver3dextension_private_method__soft_body_create"></div>

[`RID`](class_rid.md) **_soft_body_create** ( ) virtual[^virtual]<div id="class_physicsserver3dextension_private_method__soft_body_create"></div>

该方法目前没有描述，请帮我们\ :ref:`贡献一个 <doc_updating_the_class_reference>`\ 吧！

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsserver3dextension_private_method__soft_body_get_bounds"></div>

[`AABB`](class_aabb.md) **_soft_body_get_bounds** ( body: [`RID`](class_rid.md) ) virtual[^virtual] const[^const]<div id="class_physicsserver3dextension_private_method__soft_body_get_bounds"></div>

该方法目前没有描述，请帮我们\ :ref:`贡献一个 <doc_updating_the_class_reference>`\ 吧！

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsserver3dextension_private_method__soft_body_get_collision_exceptions"></div>

[Array](class_array.md) [`RID`](class_rid.md) **_soft_body_get_collision_exceptions** ( body: [`RID`](class_rid.md) ) virtual[^virtual] const[^const]<div id="class_physicsserver3dextension_private_method__soft_body_get_collision_exceptions"></div>

该方法目前没有描述，请帮我们\ :ref:`贡献一个 <doc_updating_the_class_reference>`\ 吧！

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsserver3dextension_private_method__soft_body_get_collision_layer"></div>

[`int`](class_int.md) **_soft_body_get_collision_layer** ( body: [`RID`](class_rid.md) ) virtual[^virtual] const[^const]<div id="class_physicsserver3dextension_private_method__soft_body_get_collision_layer"></div>

该方法目前没有描述，请帮我们\ :ref:`贡献一个 <doc_updating_the_class_reference>`\ 吧！

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsserver3dextension_private_method__soft_body_get_collision_mask"></div>

[`int`](class_int.md) **_soft_body_get_collision_mask** ( body: [`RID`](class_rid.md) ) virtual[^virtual] const[^const]<div id="class_physicsserver3dextension_private_method__soft_body_get_collision_mask"></div>

该方法目前没有描述，请帮我们\ :ref:`贡献一个 <doc_updating_the_class_reference>`\ 吧！

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsserver3dextension_private_method__soft_body_get_damping_coefficient"></div>

[`float`](class_float.md) **_soft_body_get_damping_coefficient** ( body: [`RID`](class_rid.md) ) virtual[^virtual] const[^const]<div id="class_physicsserver3dextension_private_method__soft_body_get_damping_coefficient"></div>

该方法目前没有描述，请帮我们\ :ref:`贡献一个 <doc_updating_the_class_reference>`\ 吧！

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsserver3dextension_private_method__soft_body_get_drag_coefficient"></div>

[`float`](class_float.md) **_soft_body_get_drag_coefficient** ( body: [`RID`](class_rid.md) ) virtual[^virtual] const[^const]<div id="class_physicsserver3dextension_private_method__soft_body_get_drag_coefficient"></div>

该方法目前没有描述，请帮我们\ :ref:`贡献一个 <doc_updating_the_class_reference>`\ 吧！

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsserver3dextension_private_method__soft_body_get_linear_stiffness"></div>

[`float`](class_float.md) **_soft_body_get_linear_stiffness** ( body: [`RID`](class_rid.md) ) virtual[^virtual] const[^const]<div id="class_physicsserver3dextension_private_method__soft_body_get_linear_stiffness"></div>

该方法目前没有描述，请帮我们\ :ref:`贡献一个 <doc_updating_the_class_reference>`\ 吧！

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsserver3dextension_private_method__soft_body_get_point_global_position"></div>

[`Vector3`](class_vector3.md) **_soft_body_get_point_global_position** ( body: [`RID`](class_rid.md), point_index: [`int`](class_int.md) ) virtual[^virtual] const[^const]<div id="class_physicsserver3dextension_private_method__soft_body_get_point_global_position"></div>

该方法目前没有描述，请帮我们\ :ref:`贡献一个 <doc_updating_the_class_reference>`\ 吧！

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsserver3dextension_private_method__soft_body_get_pressure_coefficient"></div>

[`float`](class_float.md) **_soft_body_get_pressure_coefficient** ( body: [`RID`](class_rid.md) ) virtual[^virtual] const[^const]<div id="class_physicsserver3dextension_private_method__soft_body_get_pressure_coefficient"></div>

该方法目前没有描述，请帮我们\ :ref:`贡献一个 <doc_updating_the_class_reference>`\ 吧！

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsserver3dextension_private_method__soft_body_get_simulation_precision"></div>

[`int`](class_int.md) **_soft_body_get_simulation_precision** ( body: [`RID`](class_rid.md) ) virtual[^virtual] const[^const]<div id="class_physicsserver3dextension_private_method__soft_body_get_simulation_precision"></div>

该方法目前没有描述，请帮我们\ :ref:`贡献一个 <doc_updating_the_class_reference>`\ 吧！

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsserver3dextension_private_method__soft_body_get_space"></div>

[`RID`](class_rid.md) **_soft_body_get_space** ( body: [`RID`](class_rid.md) ) virtual[^virtual] const[^const]<div id="class_physicsserver3dextension_private_method__soft_body_get_space"></div>

该方法目前没有描述，请帮我们\ :ref:`贡献一个 <doc_updating_the_class_reference>`\ 吧！

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsserver3dextension_private_method__soft_body_get_state"></div>

[`Variant`](class_variant.md) **_soft_body_get_state** ( body: [`RID`](class_rid.md), state: [BodyState](#enum_physicsserver3d_bodystate) ) virtual[^virtual] const[^const]<div id="class_physicsserver3dextension_private_method__soft_body_get_state"></div>

该方法目前没有描述，请帮我们\ :ref:`贡献一个 <doc_updating_the_class_reference>`\ 吧！

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsserver3dextension_private_method__soft_body_get_total_mass"></div>

[`float`](class_float.md) **_soft_body_get_total_mass** ( body: [`RID`](class_rid.md) ) virtual[^virtual] const[^const]<div id="class_physicsserver3dextension_private_method__soft_body_get_total_mass"></div>

该方法目前没有描述，请帮我们\ :ref:`贡献一个 <doc_updating_the_class_reference>`\ 吧！

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsserver3dextension_private_method__soft_body_is_point_pinned"></div>

[`bool`](class_bool.md) **_soft_body_is_point_pinned** ( body: [`RID`](class_rid.md), point_index: [`int`](class_int.md) ) virtual[^virtual] const[^const]<div id="class_physicsserver3dextension_private_method__soft_body_is_point_pinned"></div>

该方法目前没有描述，请帮我们\ :ref:`贡献一个 <doc_updating_the_class_reference>`\ 吧！

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsserver3dextension_private_method__soft_body_move_point"></div>

`void` **_soft_body_move_point** ( body: [`RID`](class_rid.md), point_index: [`int`](class_int.md), global_position: [`Vector3`](class_vector3.md) ) virtual[^virtual]<div id="class_physicsserver3dextension_private_method__soft_body_move_point"></div>

该方法目前没有描述，请帮我们\ :ref:`贡献一个 <doc_updating_the_class_reference>`\ 吧！

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsserver3dextension_private_method__soft_body_pin_point"></div>

`void` **_soft_body_pin_point** ( body: [`RID`](class_rid.md), point_index: [`int`](class_int.md), pin: [`bool`](class_bool.md) ) virtual[^virtual]<div id="class_physicsserver3dextension_private_method__soft_body_pin_point"></div>

该方法目前没有描述，请帮我们\ :ref:`贡献一个 <doc_updating_the_class_reference>`\ 吧！

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsserver3dextension_private_method__soft_body_remove_all_pinned_points"></div>

`void` **_soft_body_remove_all_pinned_points** ( body: [`RID`](class_rid.md) ) virtual[^virtual]<div id="class_physicsserver3dextension_private_method__soft_body_remove_all_pinned_points"></div>

该方法目前没有描述，请帮我们\ :ref:`贡献一个 <doc_updating_the_class_reference>`\ 吧！

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsserver3dextension_private_method__soft_body_remove_collision_exception"></div>

`void` **_soft_body_remove_collision_exception** ( body: [`RID`](class_rid.md), body_b: [`RID`](class_rid.md) ) virtual[^virtual]<div id="class_physicsserver3dextension_private_method__soft_body_remove_collision_exception"></div>

该方法目前没有描述，请帮我们\ :ref:`贡献一个 <doc_updating_the_class_reference>`\ 吧！

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsserver3dextension_private_method__soft_body_set_collision_layer"></div>

`void` **_soft_body_set_collision_layer** ( body: [`RID`](class_rid.md), layer: [`int`](class_int.md) ) virtual[^virtual]<div id="class_physicsserver3dextension_private_method__soft_body_set_collision_layer"></div>

该方法目前没有描述，请帮我们\ :ref:`贡献一个 <doc_updating_the_class_reference>`\ 吧！

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsserver3dextension_private_method__soft_body_set_collision_mask"></div>

`void` **_soft_body_set_collision_mask** ( body: [`RID`](class_rid.md), mask: [`int`](class_int.md) ) virtual[^virtual]<div id="class_physicsserver3dextension_private_method__soft_body_set_collision_mask"></div>

该方法目前没有描述，请帮我们\ :ref:`贡献一个 <doc_updating_the_class_reference>`\ 吧！

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsserver3dextension_private_method__soft_body_set_damping_coefficient"></div>

`void` **_soft_body_set_damping_coefficient** ( body: [`RID`](class_rid.md), damping_coefficient: [`float`](class_float.md) ) virtual[^virtual]<div id="class_physicsserver3dextension_private_method__soft_body_set_damping_coefficient"></div>

该方法目前没有描述，请帮我们\ :ref:`贡献一个 <doc_updating_the_class_reference>`\ 吧！

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsserver3dextension_private_method__soft_body_set_drag_coefficient"></div>

`void` **_soft_body_set_drag_coefficient** ( body: [`RID`](class_rid.md), drag_coefficient: [`float`](class_float.md) ) virtual[^virtual]<div id="class_physicsserver3dextension_private_method__soft_body_set_drag_coefficient"></div>

该方法目前没有描述，请帮我们\ :ref:`贡献一个 <doc_updating_the_class_reference>`\ 吧！

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsserver3dextension_private_method__soft_body_set_linear_stiffness"></div>

`void` **_soft_body_set_linear_stiffness** ( body: [`RID`](class_rid.md), linear_stiffness: [`float`](class_float.md) ) virtual[^virtual]<div id="class_physicsserver3dextension_private_method__soft_body_set_linear_stiffness"></div>

该方法目前没有描述，请帮我们\ :ref:`贡献一个 <doc_updating_the_class_reference>`\ 吧！

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsserver3dextension_private_method__soft_body_set_mesh"></div>

`void` **_soft_body_set_mesh** ( body: [`RID`](class_rid.md), mesh: [`RID`](class_rid.md) ) virtual[^virtual]<div id="class_physicsserver3dextension_private_method__soft_body_set_mesh"></div>

该方法目前没有描述，请帮我们\ :ref:`贡献一个 <doc_updating_the_class_reference>`\ 吧！

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsserver3dextension_private_method__soft_body_set_pressure_coefficient"></div>

`void` **_soft_body_set_pressure_coefficient** ( body: [`RID`](class_rid.md), pressure_coefficient: [`float`](class_float.md) ) virtual[^virtual]<div id="class_physicsserver3dextension_private_method__soft_body_set_pressure_coefficient"></div>

该方法目前没有描述，请帮我们\ :ref:`贡献一个 <doc_updating_the_class_reference>`\ 吧！

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsserver3dextension_private_method__soft_body_set_ray_pickable"></div>

`void` **_soft_body_set_ray_pickable** ( body: [`RID`](class_rid.md), enable: [`bool`](class_bool.md) ) virtual[^virtual]<div id="class_physicsserver3dextension_private_method__soft_body_set_ray_pickable"></div>

该方法目前没有描述，请帮我们\ :ref:`贡献一个 <doc_updating_the_class_reference>`\ 吧！

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsserver3dextension_private_method__soft_body_set_simulation_precision"></div>

`void` **_soft_body_set_simulation_precision** ( body: [`RID`](class_rid.md), simulation_precision: [`int`](class_int.md) ) virtual[^virtual]<div id="class_physicsserver3dextension_private_method__soft_body_set_simulation_precision"></div>

该方法目前没有描述，请帮我们\ :ref:`贡献一个 <doc_updating_the_class_reference>`\ 吧！

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsserver3dextension_private_method__soft_body_set_space"></div>

`void` **_soft_body_set_space** ( body: [`RID`](class_rid.md), space: [`RID`](class_rid.md) ) virtual[^virtual]<div id="class_physicsserver3dextension_private_method__soft_body_set_space"></div>

该方法目前没有描述，请帮我们\ :ref:`贡献一个 <doc_updating_the_class_reference>`\ 吧！

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsserver3dextension_private_method__soft_body_set_state"></div>

`void` **_soft_body_set_state** ( body: [`RID`](class_rid.md), state: [BodyState](#enum_physicsserver3d_bodystate), variant: [`Variant`](class_variant.md) ) virtual[^virtual]<div id="class_physicsserver3dextension_private_method__soft_body_set_state"></div>

该方法目前没有描述，请帮我们\ :ref:`贡献一个 <doc_updating_the_class_reference>`\ 吧！

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsserver3dextension_private_method__soft_body_set_total_mass"></div>

`void` **_soft_body_set_total_mass** ( body: [`RID`](class_rid.md), total_mass: [`float`](class_float.md) ) virtual[^virtual]<div id="class_physicsserver3dextension_private_method__soft_body_set_total_mass"></div>

该方法目前没有描述，请帮我们\ :ref:`贡献一个 <doc_updating_the_class_reference>`\ 吧！

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsserver3dextension_private_method__soft_body_set_transform"></div>

`void` **_soft_body_set_transform** ( body: [`RID`](class_rid.md), transform: [`Transform3D`](class_transform3d.md) ) virtual[^virtual]<div id="class_physicsserver3dextension_private_method__soft_body_set_transform"></div>

该方法目前没有描述，请帮我们\ :ref:`贡献一个 <doc_updating_the_class_reference>`\ 吧！

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsserver3dextension_private_method__soft_body_update_rendering_server"></div>

`void` **_soft_body_update_rendering_server** ( body: [`RID`](class_rid.md), rendering_server_handler: [`PhysicsServer3DRenderingServerHandler`](class_physicsserver3drenderingserverhandler.md) ) virtual[^virtual]<div id="class_physicsserver3dextension_private_method__soft_body_update_rendering_server"></div>

该方法目前没有描述，请帮我们\ :ref:`贡献一个 <doc_updating_the_class_reference>`\ 吧！

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsserver3dextension_private_method__space_create"></div>

[`RID`](class_rid.md) **_space_create** ( ) virtual[^virtual]<div id="class_physicsserver3dextension_private_method__space_create"></div>

该方法目前没有描述，请帮我们\ :ref:`贡献一个 <doc_updating_the_class_reference>`\ 吧！

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsserver3dextension_private_method__space_get_contact_count"></div>

[`int`](class_int.md) **_space_get_contact_count** ( space: [`RID`](class_rid.md) ) virtual[^virtual] const[^const]<div id="class_physicsserver3dextension_private_method__space_get_contact_count"></div>

该方法目前没有描述，请帮我们\ :ref:`贡献一个 <doc_updating_the_class_reference>`\ 吧！

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsserver3dextension_private_method__space_get_contacts"></div>

[`PackedVector3Array`](class_packedvector3array.md) **_space_get_contacts** ( space: [`RID`](class_rid.md) ) virtual[^virtual] const[^const]<div id="class_physicsserver3dextension_private_method__space_get_contacts"></div>

该方法目前没有描述，请帮我们\ :ref:`贡献一个 <doc_updating_the_class_reference>`\ 吧！

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsserver3dextension_private_method__space_get_direct_state"></div>

[`PhysicsDirectSpaceState3D`](class_physicsdirectspacestate3d.md) **_space_get_direct_state** ( space: [`RID`](class_rid.md) ) virtual[^virtual]<div id="class_physicsserver3dextension_private_method__space_get_direct_state"></div>

该方法目前没有描述，请帮我们\ :ref:`贡献一个 <doc_updating_the_class_reference>`\ 吧！

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsserver3dextension_private_method__space_get_param"></div>

[`float`](class_float.md) **_space_get_param** ( space: [`RID`](class_rid.md), param: [SpaceParameter](#enum_physicsserver3d_spaceparameter) ) virtual[^virtual] const[^const]<div id="class_physicsserver3dextension_private_method__space_get_param"></div>

该方法目前没有描述，请帮我们\ :ref:`贡献一个 <doc_updating_the_class_reference>`\ 吧！

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsserver3dextension_private_method__space_is_active"></div>

[`bool`](class_bool.md) **_space_is_active** ( space: [`RID`](class_rid.md) ) virtual[^virtual] const[^const]<div id="class_physicsserver3dextension_private_method__space_is_active"></div>

该方法目前没有描述，请帮我们\ :ref:`贡献一个 <doc_updating_the_class_reference>`\ 吧！

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsserver3dextension_private_method__space_set_active"></div>

`void` **_space_set_active** ( space: [`RID`](class_rid.md), active: [`bool`](class_bool.md) ) virtual[^virtual]<div id="class_physicsserver3dextension_private_method__space_set_active"></div>

该方法目前没有描述，请帮我们\ :ref:`贡献一个 <doc_updating_the_class_reference>`\ 吧！

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsserver3dextension_private_method__space_set_debug_contacts"></div>

`void` **_space_set_debug_contacts** ( space: [`RID`](class_rid.md), max_contacts: [`int`](class_int.md) ) virtual[^virtual]<div id="class_physicsserver3dextension_private_method__space_set_debug_contacts"></div>

该方法目前没有描述，请帮我们\ :ref:`贡献一个 <doc_updating_the_class_reference>`\ 吧！

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsserver3dextension_private_method__space_set_param"></div>

`void` **_space_set_param** ( space: [`RID`](class_rid.md), param: [SpaceParameter](#enum_physicsserver3d_spaceparameter), value: [`float`](class_float.md) ) virtual[^virtual]<div id="class_physicsserver3dextension_private_method__space_set_param"></div>

该方法目前没有描述，请帮我们\ :ref:`贡献一个 <doc_updating_the_class_reference>`\ 吧！

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsserver3dextension_private_method__sphere_shape_create"></div>

[`RID`](class_rid.md) **_sphere_shape_create** ( ) virtual[^virtual]<div id="class_physicsserver3dextension_private_method__sphere_shape_create"></div>

该方法目前没有描述，请帮我们\ :ref:`贡献一个 <doc_updating_the_class_reference>`\ 吧！

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsserver3dextension_private_method__step"></div>

`void` **_step** ( step: [`float`](class_float.md) ) virtual[^virtual]<div id="class_physicsserver3dextension_private_method__step"></div>

该方法目前没有描述，请帮我们\ :ref:`贡献一个 <doc_updating_the_class_reference>`\ 吧！

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsserver3dextension_private_method__sync"></div>

`void` **_sync** ( ) virtual[^virtual]<div id="class_physicsserver3dextension_private_method__sync"></div>

该方法目前没有描述，请帮我们\ :ref:`贡献一个 <doc_updating_the_class_reference>`\ 吧！

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsserver3dextension_private_method__world_boundary_shape_create"></div>

[`RID`](class_rid.md) **_world_boundary_shape_create** ( ) virtual[^virtual]<div id="class_physicsserver3dextension_private_method__world_boundary_shape_create"></div>

该方法目前没有描述，请帮我们\ :ref:`贡献一个 <doc_updating_the_class_reference>`\ 吧！

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsserver3dextension_method_body_test_motion_is_excluding_body"></div>

[`bool`](class_bool.md) **body_test_motion_is_excluding_body** ( body: [`RID`](class_rid.md) ) const[^const]<div id="class_physicsserver3dextension_method_body_test_motion_is_excluding_body"></div>

该方法目前没有描述，请帮我们\ :ref:`贡献一个 <doc_updating_the_class_reference>`\ 吧！

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsserver3dextension_method_body_test_motion_is_excluding_object"></div>

[`bool`](class_bool.md) **body_test_motion_is_excluding_object** ( object: [`int`](class_int.md) ) const[^const]<div id="class_physicsserver3dextension_method_body_test_motion_is_excluding_object"></div>

该方法目前没有描述，请帮我们\ :ref:`贡献一个 <doc_updating_the_class_reference>`\ 吧！

[^virtual]: 本方法通常需要用户覆盖才能生效。
[^const]: 本方法无副作用，不会修改该实例的任何成员变量。
[^vararg]: 本方法除了能接受在此处描述的参数外，还能够继续接受任意数量的参数。
[^constructor]: 本方法用于构造某个类型。
[^static]: 调用本方法无需实例，可直接使用类名进行调用。
[^operator]: 本方法描述的是使用本类型作为左操作数的有效运算符。
[^bitfield]: 这个值是由下列位标志构成位掩码的整数。
[^void]: 无返回值。
