<!-- ⚠ 请勿编辑本文件 ⚠ -->
<!-- 本文档使用脚本从 WeDot 引擎源码仓库生成。 -->
<!-- 生成脚本：https://github.com/WeDot-Engine/WeDot/tree/master/doc/tools/make_md.py； -->
<!-- 原文件：https://github.com/WeDot-Engine/WeDot/tree/master/doc/classes/PhysicsServer2DExtension.xml。 -->

<div id="_class_physicsserver2dextension"></div>

# PhysicsServer2DExtension

**继承：** [`PhysicsServer2D`](class_physicsserver2d.md) **<** [`Object`](class_object.md)

Provides virtual methods that can be overridden to create custom [`PhysicsServer2D`](class_physicsserver2d.md) implementations.

## 描述

This class extends [`PhysicsServer2D`](class_physicsserver2d.md) by providing additional virtual methods that can be overridden. When these methods are overridden, they will be called instead of the internal methods of the physics server.

Intended for use with GDExtension to create custom implementations of [`PhysicsServer2D`](class_physicsserver2d.md).

## 方法

|||
|:-:|:--|
| `void`                                                            | [`_area_add_shape`](class_physicsserver2dextension.md#class_physicsserver2dextension_private_method__area_add_shape) ( area: [`RID`](class_rid.md), shape: [`RID`](class_rid.md), transform: [`Transform2D`](class_transform2d.md), disabled: [`bool`](class_bool.md) ) virtual[^virtual]                                                                                                                                                                                |
| `void`                                                            | [`_area_attach_canvas_instance_id`](class_physicsserver2dextension.md#class_physicsserver2dextension_private_method__area_attach_canvas_instance_id) ( area: [`RID`](class_rid.md), id: [`int`](class_int.md) ) virtual[^virtual]                                                                                                                                                                                                                                        |
| `void`                                                            | [`_area_attach_object_instance_id`](class_physicsserver2dextension.md#class_physicsserver2dextension_private_method__area_attach_object_instance_id) ( area: [`RID`](class_rid.md), id: [`int`](class_int.md) ) virtual[^virtual]                                                                                                                                                                                                                                        |
| `void`                                                            | [`_area_clear_shapes`](class_physicsserver2dextension.md#class_physicsserver2dextension_private_method__area_clear_shapes) ( area: [`RID`](class_rid.md) ) virtual[^virtual]                                                                                                                                                                                                                                                                                             |
| [`RID`](class_rid.md)                                             | [`_area_create`](class_physicsserver2dextension.md#class_physicsserver2dextension_private_method__area_create) ( ) virtual[^virtual]                                                                                                                                                                                                                                                                                                                                     |
| [`int`](class_int.md)                                             | [`_area_get_canvas_instance_id`](class_physicsserver2dextension.md#class_physicsserver2dextension_private_method__area_get_canvas_instance_id) ( area: [`RID`](class_rid.md) ) virtual[^virtual] const[^const]                                                                                                                                                                                                                                                           |
| [`int`](class_int.md)                                             | [`_area_get_collision_layer`](class_physicsserver2dextension.md#class_physicsserver2dextension_private_method__area_get_collision_layer) ( area: [`RID`](class_rid.md) ) virtual[^virtual] const[^const]                                                                                                                                                                                                                                                                 |
| [`int`](class_int.md)                                             | [`_area_get_collision_mask`](class_physicsserver2dextension.md#class_physicsserver2dextension_private_method__area_get_collision_mask) ( area: [`RID`](class_rid.md) ) virtual[^virtual] const[^const]                                                                                                                                                                                                                                                                   |
| [`int`](class_int.md)                                             | [`_area_get_object_instance_id`](class_physicsserver2dextension.md#class_physicsserver2dextension_private_method__area_get_object_instance_id) ( area: [`RID`](class_rid.md) ) virtual[^virtual] const[^const]                                                                                                                                                                                                                                                           |
| [`Variant`](class_variant.md)                                     | [`_area_get_param`](class_physicsserver2dextension.md#class_physicsserver2dextension_private_method__area_get_param) ( area: [`RID`](class_rid.md), param: [AreaParameter](#enum_physicsserver2d_areaparameter) ) virtual[^virtual] const[^const]                                                                                                                                                                                                                        |
| [`RID`](class_rid.md)                                             | [`_area_get_shape`](class_physicsserver2dextension.md#class_physicsserver2dextension_private_method__area_get_shape) ( area: [`RID`](class_rid.md), shape_idx: [`int`](class_int.md) ) virtual[^virtual] const[^const]                                                                                                                                                                                                                                                   |
| [`int`](class_int.md)                                             | [`_area_get_shape_count`](class_physicsserver2dextension.md#class_physicsserver2dextension_private_method__area_get_shape_count) ( area: [`RID`](class_rid.md) ) virtual[^virtual] const[^const]                                                                                                                                                                                                                                                                         |
| [`Transform2D`](class_transform2d.md)                             | [`_area_get_shape_transform`](class_physicsserver2dextension.md#class_physicsserver2dextension_private_method__area_get_shape_transform) ( area: [`RID`](class_rid.md), shape_idx: [`int`](class_int.md) ) virtual[^virtual] const[^const]                                                                                                                                                                                                                               |
| [`RID`](class_rid.md)                                             | [`_area_get_space`](class_physicsserver2dextension.md#class_physicsserver2dextension_private_method__area_get_space) ( area: [`RID`](class_rid.md) ) virtual[^virtual] const[^const]                                                                                                                                                                                                                                                                                     |
| [`Transform2D`](class_transform2d.md)                             | [`_area_get_transform`](class_physicsserver2dextension.md#class_physicsserver2dextension_private_method__area_get_transform) ( area: [`RID`](class_rid.md) ) virtual[^virtual] const[^const]                                                                                                                                                                                                                                                                             |
| `void`                                                            | [`_area_remove_shape`](class_physicsserver2dextension.md#class_physicsserver2dextension_private_method__area_remove_shape) ( area: [`RID`](class_rid.md), shape_idx: [`int`](class_int.md) ) virtual[^virtual]                                                                                                                                                                                                                                                           |
| `void`                                                            | [`_area_set_area_monitor_callback`](class_physicsserver2dextension.md#class_physicsserver2dextension_private_method__area_set_area_monitor_callback) ( area: [`RID`](class_rid.md), callback: [`Callable`](class_callable.md) ) virtual[^virtual]                                                                                                                                                                                                                        |
| `void`                                                            | [`_area_set_collision_layer`](class_physicsserver2dextension.md#class_physicsserver2dextension_private_method__area_set_collision_layer) ( area: [`RID`](class_rid.md), layer: [`int`](class_int.md) ) virtual[^virtual]                                                                                                                                                                                                                                                 |
| `void`                                                            | [`_area_set_collision_mask`](class_physicsserver2dextension.md#class_physicsserver2dextension_private_method__area_set_collision_mask) ( area: [`RID`](class_rid.md), mask: [`int`](class_int.md) ) virtual[^virtual]                                                                                                                                                                                                                                                    |
| `void`                                                            | [`_area_set_monitor_callback`](class_physicsserver2dextension.md#class_physicsserver2dextension_private_method__area_set_monitor_callback) ( area: [`RID`](class_rid.md), callback: [`Callable`](class_callable.md) ) virtual[^virtual]                                                                                                                                                                                                                                  |
| `void`                                                            | [`_area_set_monitorable`](class_physicsserver2dextension.md#class_physicsserver2dextension_private_method__area_set_monitorable) ( area: [`RID`](class_rid.md), monitorable: [`bool`](class_bool.md) ) virtual[^virtual]                                                                                                                                                                                                                                                 |
| `void`                                                            | [`_area_set_param`](class_physicsserver2dextension.md#class_physicsserver2dextension_private_method__area_set_param) ( area: [`RID`](class_rid.md), param: [AreaParameter](#enum_physicsserver2d_areaparameter), value: [`Variant`](class_variant.md) ) virtual[^virtual]                                                                                                                                                                                                |
| `void`                                                            | [`_area_set_pickable`](class_physicsserver2dextension.md#class_physicsserver2dextension_private_method__area_set_pickable) ( area: [`RID`](class_rid.md), pickable: [`bool`](class_bool.md) ) virtual[^virtual]                                                                                                                                                                                                                                                          |
| `void`                                                            | [`_area_set_shape`](class_physicsserver2dextension.md#class_physicsserver2dextension_private_method__area_set_shape) ( area: [`RID`](class_rid.md), shape_idx: [`int`](class_int.md), shape: [`RID`](class_rid.md) ) virtual[^virtual]                                                                                                                                                                                                                                   |
| `void`                                                            | [`_area_set_shape_disabled`](class_physicsserver2dextension.md#class_physicsserver2dextension_private_method__area_set_shape_disabled) ( area: [`RID`](class_rid.md), shape_idx: [`int`](class_int.md), disabled: [`bool`](class_bool.md) ) virtual[^virtual]                                                                                                                                                                                                            |
| `void`                                                            | [`_area_set_shape_transform`](class_physicsserver2dextension.md#class_physicsserver2dextension_private_method__area_set_shape_transform) ( area: [`RID`](class_rid.md), shape_idx: [`int`](class_int.md), transform: [`Transform2D`](class_transform2d.md) ) virtual[^virtual]                                                                                                                                                                                           |
| `void`                                                            | [`_area_set_space`](class_physicsserver2dextension.md#class_physicsserver2dextension_private_method__area_set_space) ( area: [`RID`](class_rid.md), space: [`RID`](class_rid.md) ) virtual[^virtual]                                                                                                                                                                                                                                                                     |
| `void`                                                            | [`_area_set_transform`](class_physicsserver2dextension.md#class_physicsserver2dextension_private_method__area_set_transform) ( area: [`RID`](class_rid.md), transform: [`Transform2D`](class_transform2d.md) ) virtual[^virtual]                                                                                                                                                                                                                                         |
| `void`                                                            | [`_body_add_collision_exception`](class_physicsserver2dextension.md#class_physicsserver2dextension_private_method__body_add_collision_exception) ( body: [`RID`](class_rid.md), excepted_body: [`RID`](class_rid.md) ) virtual[^virtual]                                                                                                                                                                                                                                 |
| `void`                                                            | [`_body_add_constant_central_force`](class_physicsserver2dextension.md#class_physicsserver2dextension_private_method__body_add_constant_central_force) ( body: [`RID`](class_rid.md), force: [`Vector2`](class_vector2.md) ) virtual[^virtual]                                                                                                                                                                                                                           |
| `void`                                                            | [`_body_add_constant_force`](class_physicsserver2dextension.md#class_physicsserver2dextension_private_method__body_add_constant_force) ( body: [`RID`](class_rid.md), force: [`Vector2`](class_vector2.md), position: [`Vector2`](class_vector2.md) ) virtual[^virtual]                                                                                                                                                                                                  |
| `void`                                                            | [`_body_add_constant_torque`](class_physicsserver2dextension.md#class_physicsserver2dextension_private_method__body_add_constant_torque) ( body: [`RID`](class_rid.md), torque: [`float`](class_float.md) ) virtual[^virtual]                                                                                                                                                                                                                                            |
| `void`                                                            | [`_body_add_shape`](class_physicsserver2dextension.md#class_physicsserver2dextension_private_method__body_add_shape) ( body: [`RID`](class_rid.md), shape: [`RID`](class_rid.md), transform: [`Transform2D`](class_transform2d.md), disabled: [`bool`](class_bool.md) ) virtual[^virtual]                                                                                                                                                                                |
| `void`                                                            | [`_body_apply_central_force`](class_physicsserver2dextension.md#class_physicsserver2dextension_private_method__body_apply_central_force) ( body: [`RID`](class_rid.md), force: [`Vector2`](class_vector2.md) ) virtual[^virtual]                                                                                                                                                                                                                                         |
| `void`                                                            | [`_body_apply_central_impulse`](class_physicsserver2dextension.md#class_physicsserver2dextension_private_method__body_apply_central_impulse) ( body: [`RID`](class_rid.md), impulse: [`Vector2`](class_vector2.md) ) virtual[^virtual]                                                                                                                                                                                                                                   |
| `void`                                                            | [`_body_apply_force`](class_physicsserver2dextension.md#class_physicsserver2dextension_private_method__body_apply_force) ( body: [`RID`](class_rid.md), force: [`Vector2`](class_vector2.md), position: [`Vector2`](class_vector2.md) ) virtual[^virtual]                                                                                                                                                                                                                |
| `void`                                                            | [`_body_apply_impulse`](class_physicsserver2dextension.md#class_physicsserver2dextension_private_method__body_apply_impulse) ( body: [`RID`](class_rid.md), impulse: [`Vector2`](class_vector2.md), position: [`Vector2`](class_vector2.md) ) virtual[^virtual]                                                                                                                                                                                                          |
| `void`                                                            | [`_body_apply_torque`](class_physicsserver2dextension.md#class_physicsserver2dextension_private_method__body_apply_torque) ( body: [`RID`](class_rid.md), torque: [`float`](class_float.md) ) virtual[^virtual]                                                                                                                                                                                                                                                          |
| `void`                                                            | [`_body_apply_torque_impulse`](class_physicsserver2dextension.md#class_physicsserver2dextension_private_method__body_apply_torque_impulse) ( body: [`RID`](class_rid.md), impulse: [`float`](class_float.md) ) virtual[^virtual]                                                                                                                                                                                                                                         |
| `void`                                                            | [`_body_attach_canvas_instance_id`](class_physicsserver2dextension.md#class_physicsserver2dextension_private_method__body_attach_canvas_instance_id) ( body: [`RID`](class_rid.md), id: [`int`](class_int.md) ) virtual[^virtual]                                                                                                                                                                                                                                        |
| `void`                                                            | [`_body_attach_object_instance_id`](class_physicsserver2dextension.md#class_physicsserver2dextension_private_method__body_attach_object_instance_id) ( body: [`RID`](class_rid.md), id: [`int`](class_int.md) ) virtual[^virtual]                                                                                                                                                                                                                                        |
| `void`                                                            | [`_body_clear_shapes`](class_physicsserver2dextension.md#class_physicsserver2dextension_private_method__body_clear_shapes) ( body: [`RID`](class_rid.md) ) virtual[^virtual]                                                                                                                                                                                                                                                                                             |
| [`bool`](class_bool.md)                                           | [`_body_collide_shape`](class_physicsserver2dextension.md#class_physicsserver2dextension_private_method__body_collide_shape) ( body: [`RID`](class_rid.md), body_shape: [`int`](class_int.md), shape: [`RID`](class_rid.md), shape_xform: [`Transform2D`](class_transform2d.md), motion: [`Vector2`](class_vector2.md), results: `void*`, result_max: [`int`](class_int.md), result_count: `int32_t*` ) virtual[^virtual]                                                |
| [`RID`](class_rid.md)                                             | [`_body_create`](class_physicsserver2dextension.md#class_physicsserver2dextension_private_method__body_create) ( ) virtual[^virtual]                                                                                                                                                                                                                                                                                                                                     |
| [`int`](class_int.md)                                             | [`_body_get_canvas_instance_id`](class_physicsserver2dextension.md#class_physicsserver2dextension_private_method__body_get_canvas_instance_id) ( body: [`RID`](class_rid.md) ) virtual[^virtual] const[^const]                                                                                                                                                                                                                                                           |
| [Array](class_array.md) [`RID`](class_rid.md)                     | [`_body_get_collision_exceptions`](class_physicsserver2dextension.md#class_physicsserver2dextension_private_method__body_get_collision_exceptions) ( body: [`RID`](class_rid.md) ) virtual[^virtual] const[^const]                                                                                                                                                                                                                                                       |
| [`int`](class_int.md)                                             | [`_body_get_collision_layer`](class_physicsserver2dextension.md#class_physicsserver2dextension_private_method__body_get_collision_layer) ( body: [`RID`](class_rid.md) ) virtual[^virtual] const[^const]                                                                                                                                                                                                                                                                 |
| [`int`](class_int.md)                                             | [`_body_get_collision_mask`](class_physicsserver2dextension.md#class_physicsserver2dextension_private_method__body_get_collision_mask) ( body: [`RID`](class_rid.md) ) virtual[^virtual] const[^const]                                                                                                                                                                                                                                                                   |
| [`float`](class_float.md)                                         | [`_body_get_collision_priority`](class_physicsserver2dextension.md#class_physicsserver2dextension_private_method__body_get_collision_priority) ( body: [`RID`](class_rid.md) ) virtual[^virtual] const[^const]                                                                                                                                                                                                                                                           |
| [`Vector2`](class_vector2.md)                                     | [`_body_get_constant_force`](class_physicsserver2dextension.md#class_physicsserver2dextension_private_method__body_get_constant_force) ( body: [`RID`](class_rid.md) ) virtual[^virtual] const[^const]                                                                                                                                                                                                                                                                   |
| [`float`](class_float.md)                                         | [`_body_get_constant_torque`](class_physicsserver2dextension.md#class_physicsserver2dextension_private_method__body_get_constant_torque) ( body: [`RID`](class_rid.md) ) virtual[^virtual] const[^const]                                                                                                                                                                                                                                                                 |
| [`float`](class_float.md)                                         | [`_body_get_contacts_reported_depth_threshold`](class_physicsserver2dextension.md#class_physicsserver2dextension_private_method__body_get_contacts_reported_depth_threshold) ( body: [`RID`](class_rid.md) ) virtual[^virtual] const[^const]                                                                                                                                                                                                                             |
| [CCDMode](#enum_physicsserver2d_ccdmode)                          | [`_body_get_continuous_collision_detection_mode`](class_physicsserver2dextension.md#class_physicsserver2dextension_private_method__body_get_continuous_collision_detection_mode) ( body: [`RID`](class_rid.md) ) virtual[^virtual] const[^const]                                                                                                                                                                                                                         |
| [`PhysicsDirectBodyState2D`](class_physicsdirectbodystate2d.md)   | [`_body_get_direct_state`](class_physicsserver2dextension.md#class_physicsserver2dextension_private_method__body_get_direct_state) ( body: [`RID`](class_rid.md) ) virtual[^virtual]                                                                                                                                                                                                                                                                                     |
| [`int`](class_int.md)                                             | [`_body_get_max_contacts_reported`](class_physicsserver2dextension.md#class_physicsserver2dextension_private_method__body_get_max_contacts_reported) ( body: [`RID`](class_rid.md) ) virtual[^virtual] const[^const]                                                                                                                                                                                                                                                     |
| [BodyMode](#enum_physicsserver2d_bodymode)                        | [`_body_get_mode`](class_physicsserver2dextension.md#class_physicsserver2dextension_private_method__body_get_mode) ( body: [`RID`](class_rid.md) ) virtual[^virtual] const[^const]                                                                                                                                                                                                                                                                                       |
| [`int`](class_int.md)                                             | [`_body_get_object_instance_id`](class_physicsserver2dextension.md#class_physicsserver2dextension_private_method__body_get_object_instance_id) ( body: [`RID`](class_rid.md) ) virtual[^virtual] const[^const]                                                                                                                                                                                                                                                           |
| [`Variant`](class_variant.md)                                     | [`_body_get_param`](class_physicsserver2dextension.md#class_physicsserver2dextension_private_method__body_get_param) ( body: [`RID`](class_rid.md), param: [BodyParameter](#enum_physicsserver2d_bodyparameter) ) virtual[^virtual] const[^const]                                                                                                                                                                                                                        |
| [`RID`](class_rid.md)                                             | [`_body_get_shape`](class_physicsserver2dextension.md#class_physicsserver2dextension_private_method__body_get_shape) ( body: [`RID`](class_rid.md), shape_idx: [`int`](class_int.md) ) virtual[^virtual] const[^const]                                                                                                                                                                                                                                                   |
| [`int`](class_int.md)                                             | [`_body_get_shape_count`](class_physicsserver2dextension.md#class_physicsserver2dextension_private_method__body_get_shape_count) ( body: [`RID`](class_rid.md) ) virtual[^virtual] const[^const]                                                                                                                                                                                                                                                                         |
| [`Transform2D`](class_transform2d.md)                             | [`_body_get_shape_transform`](class_physicsserver2dextension.md#class_physicsserver2dextension_private_method__body_get_shape_transform) ( body: [`RID`](class_rid.md), shape_idx: [`int`](class_int.md) ) virtual[^virtual] const[^const]                                                                                                                                                                                                                               |
| [`RID`](class_rid.md)                                             | [`_body_get_space`](class_physicsserver2dextension.md#class_physicsserver2dextension_private_method__body_get_space) ( body: [`RID`](class_rid.md) ) virtual[^virtual] const[^const]                                                                                                                                                                                                                                                                                     |
| [`Variant`](class_variant.md)                                     | [`_body_get_state`](class_physicsserver2dextension.md#class_physicsserver2dextension_private_method__body_get_state) ( body: [`RID`](class_rid.md), state: [BodyState](#enum_physicsserver2d_bodystate) ) virtual[^virtual] const[^const]                                                                                                                                                                                                                                |
| [`bool`](class_bool.md)                                           | [`_body_is_omitting_force_integration`](class_physicsserver2dextension.md#class_physicsserver2dextension_private_method__body_is_omitting_force_integration) ( body: [`RID`](class_rid.md) ) virtual[^virtual] const[^const]                                                                                                                                                                                                                                             |
| `void`                                                            | [`_body_remove_collision_exception`](class_physicsserver2dextension.md#class_physicsserver2dextension_private_method__body_remove_collision_exception) ( body: [`RID`](class_rid.md), excepted_body: [`RID`](class_rid.md) ) virtual[^virtual]                                                                                                                                                                                                                           |
| `void`                                                            | [`_body_remove_shape`](class_physicsserver2dextension.md#class_physicsserver2dextension_private_method__body_remove_shape) ( body: [`RID`](class_rid.md), shape_idx: [`int`](class_int.md) ) virtual[^virtual]                                                                                                                                                                                                                                                           |
| `void`                                                            | [`_body_reset_mass_properties`](class_physicsserver2dextension.md#class_physicsserver2dextension_private_method__body_reset_mass_properties) ( body: [`RID`](class_rid.md) ) virtual[^virtual]                                                                                                                                                                                                                                                                           |
| `void`                                                            | [`_body_set_axis_velocity`](class_physicsserver2dextension.md#class_physicsserver2dextension_private_method__body_set_axis_velocity) ( body: [`RID`](class_rid.md), axis_velocity: [`Vector2`](class_vector2.md) ) virtual[^virtual]                                                                                                                                                                                                                                     |
| `void`                                                            | [`_body_set_collision_layer`](class_physicsserver2dextension.md#class_physicsserver2dextension_private_method__body_set_collision_layer) ( body: [`RID`](class_rid.md), layer: [`int`](class_int.md) ) virtual[^virtual]                                                                                                                                                                                                                                                 |
| `void`                                                            | [`_body_set_collision_mask`](class_physicsserver2dextension.md#class_physicsserver2dextension_private_method__body_set_collision_mask) ( body: [`RID`](class_rid.md), mask: [`int`](class_int.md) ) virtual[^virtual]                                                                                                                                                                                                                                                    |
| `void`                                                            | [`_body_set_collision_priority`](class_physicsserver2dextension.md#class_physicsserver2dextension_private_method__body_set_collision_priority) ( body: [`RID`](class_rid.md), priority: [`float`](class_float.md) ) virtual[^virtual]                                                                                                                                                                                                                                    |
| `void`                                                            | [`_body_set_constant_force`](class_physicsserver2dextension.md#class_physicsserver2dextension_private_method__body_set_constant_force) ( body: [`RID`](class_rid.md), force: [`Vector2`](class_vector2.md) ) virtual[^virtual]                                                                                                                                                                                                                                           |
| `void`                                                            | [`_body_set_constant_torque`](class_physicsserver2dextension.md#class_physicsserver2dextension_private_method__body_set_constant_torque) ( body: [`RID`](class_rid.md), torque: [`float`](class_float.md) ) virtual[^virtual]                                                                                                                                                                                                                                            |
| `void`                                                            | [`_body_set_contacts_reported_depth_threshold`](class_physicsserver2dextension.md#class_physicsserver2dextension_private_method__body_set_contacts_reported_depth_threshold) ( body: [`RID`](class_rid.md), threshold: [`float`](class_float.md) ) virtual[^virtual]                                                                                                                                                                                                     |
| `void`                                                            | [`_body_set_continuous_collision_detection_mode`](class_physicsserver2dextension.md#class_physicsserver2dextension_private_method__body_set_continuous_collision_detection_mode) ( body: [`RID`](class_rid.md), mode: [CCDMode](#enum_physicsserver2d_ccdmode) ) virtual[^virtual]                                                                                                                                                                                       |
| `void`                                                            | [`_body_set_force_integration_callback`](class_physicsserver2dextension.md#class_physicsserver2dextension_private_method__body_set_force_integration_callback) ( body: [`RID`](class_rid.md), callable: [`Callable`](class_callable.md), userdata: [`Variant`](class_variant.md) ) virtual[^virtual]                                                                                                                                                                     |
| `void`                                                            | [`_body_set_max_contacts_reported`](class_physicsserver2dextension.md#class_physicsserver2dextension_private_method__body_set_max_contacts_reported) ( body: [`RID`](class_rid.md), amount: [`int`](class_int.md) ) virtual[^virtual]                                                                                                                                                                                                                                    |
| `void`                                                            | [`_body_set_mode`](class_physicsserver2dextension.md#class_physicsserver2dextension_private_method__body_set_mode) ( body: [`RID`](class_rid.md), mode: [BodyMode](#enum_physicsserver2d_bodymode) ) virtual[^virtual]                                                                                                                                                                                                                                                   |
| `void`                                                            | [`_body_set_omit_force_integration`](class_physicsserver2dextension.md#class_physicsserver2dextension_private_method__body_set_omit_force_integration) ( body: [`RID`](class_rid.md), enable: [`bool`](class_bool.md) ) virtual[^virtual]                                                                                                                                                                                                                                |
| `void`                                                            | [`_body_set_param`](class_physicsserver2dextension.md#class_physicsserver2dextension_private_method__body_set_param) ( body: [`RID`](class_rid.md), param: [BodyParameter](#enum_physicsserver2d_bodyparameter), value: [`Variant`](class_variant.md) ) virtual[^virtual]                                                                                                                                                                                                |
| `void`                                                            | [`_body_set_pickable`](class_physicsserver2dextension.md#class_physicsserver2dextension_private_method__body_set_pickable) ( body: [`RID`](class_rid.md), pickable: [`bool`](class_bool.md) ) virtual[^virtual]                                                                                                                                                                                                                                                          |
| `void`                                                            | [`_body_set_shape`](class_physicsserver2dextension.md#class_physicsserver2dextension_private_method__body_set_shape) ( body: [`RID`](class_rid.md), shape_idx: [`int`](class_int.md), shape: [`RID`](class_rid.md) ) virtual[^virtual]                                                                                                                                                                                                                                   |
| `void`                                                            | [`_body_set_shape_as_one_way_collision`](class_physicsserver2dextension.md#class_physicsserver2dextension_private_method__body_set_shape_as_one_way_collision) ( body: [`RID`](class_rid.md), shape_idx: [`int`](class_int.md), enable: [`bool`](class_bool.md), margin: [`float`](class_float.md) ) virtual[^virtual]                                                                                                                                                   |
| `void`                                                            | [`_body_set_shape_disabled`](class_physicsserver2dextension.md#class_physicsserver2dextension_private_method__body_set_shape_disabled) ( body: [`RID`](class_rid.md), shape_idx: [`int`](class_int.md), disabled: [`bool`](class_bool.md) ) virtual[^virtual]                                                                                                                                                                                                            |
| `void`                                                            | [`_body_set_shape_transform`](class_physicsserver2dextension.md#class_physicsserver2dextension_private_method__body_set_shape_transform) ( body: [`RID`](class_rid.md), shape_idx: [`int`](class_int.md), transform: [`Transform2D`](class_transform2d.md) ) virtual[^virtual]                                                                                                                                                                                           |
| `void`                                                            | [`_body_set_space`](class_physicsserver2dextension.md#class_physicsserver2dextension_private_method__body_set_space) ( body: [`RID`](class_rid.md), space: [`RID`](class_rid.md) ) virtual[^virtual]                                                                                                                                                                                                                                                                     |
| `void`                                                            | [`_body_set_state`](class_physicsserver2dextension.md#class_physicsserver2dextension_private_method__body_set_state) ( body: [`RID`](class_rid.md), state: [BodyState](#enum_physicsserver2d_bodystate), value: [`Variant`](class_variant.md) ) virtual[^virtual]                                                                                                                                                                                                        |
| `void`                                                            | [`_body_set_state_sync_callback`](class_physicsserver2dextension.md#class_physicsserver2dextension_private_method__body_set_state_sync_callback) ( body: [`RID`](class_rid.md), callable: [`Callable`](class_callable.md) ) virtual[^virtual]                                                                                                                                                                                                                            |
| [`bool`](class_bool.md)                                           | [`_body_test_motion`](class_physicsserver2dextension.md#class_physicsserver2dextension_private_method__body_test_motion) ( body: [`RID`](class_rid.md), from: [`Transform2D`](class_transform2d.md), motion: [`Vector2`](class_vector2.md), margin: [`float`](class_float.md), collide_separation_ray: [`bool`](class_bool.md), recovery_as_collision: [`bool`](class_bool.md), result: `PhysicsServer2DExtensionMotionResult*` ) virtual[^virtual] const[^const]        |
| [`RID`](class_rid.md)                                             | [`_capsule_shape_create`](class_physicsserver2dextension.md#class_physicsserver2dextension_private_method__capsule_shape_create) ( ) virtual[^virtual]                                                                                                                                                                                                                                                                                                                   |
| [`RID`](class_rid.md)                                             | [`_circle_shape_create`](class_physicsserver2dextension.md#class_physicsserver2dextension_private_method__circle_shape_create) ( ) virtual[^virtual]                                                                                                                                                                                                                                                                                                                     |
| [`RID`](class_rid.md)                                             | [`_concave_polygon_shape_create`](class_physicsserver2dextension.md#class_physicsserver2dextension_private_method__concave_polygon_shape_create) ( ) virtual[^virtual]                                                                                                                                                                                                                                                                                                   |
| [`RID`](class_rid.md)                                             | [`_convex_polygon_shape_create`](class_physicsserver2dextension.md#class_physicsserver2dextension_private_method__convex_polygon_shape_create) ( ) virtual[^virtual]                                                                                                                                                                                                                                                                                                     |
| [`float`](class_float.md)                                         | [`_damped_spring_joint_get_param`](class_physicsserver2dextension.md#class_physicsserver2dextension_private_method__damped_spring_joint_get_param) ( joint: [`RID`](class_rid.md), param: [DampedSpringParam](#enum_physicsserver2d_dampedspringparam) ) virtual[^virtual] const[^const]                                                                                                                                                                                 |
| `void`                                                            | [`_damped_spring_joint_set_param`](class_physicsserver2dextension.md#class_physicsserver2dextension_private_method__damped_spring_joint_set_param) ( joint: [`RID`](class_rid.md), param: [DampedSpringParam](#enum_physicsserver2d_dampedspringparam), value: [`float`](class_float.md) ) virtual[^virtual]                                                                                                                                                             |
| `void`                                                            | [`_end_sync`](class_physicsserver2dextension.md#class_physicsserver2dextension_private_method__end_sync) ( ) virtual[^virtual]                                                                                                                                                                                                                                                                                                                                           |
| `void`                                                            | [`_finish`](class_physicsserver2dextension.md#class_physicsserver2dextension_private_method__finish) ( ) virtual[^virtual]                                                                                                                                                                                                                                                                                                                                               |
| `void`                                                            | [`_flush_queries`](class_physicsserver2dextension.md#class_physicsserver2dextension_private_method__flush_queries) ( ) virtual[^virtual]                                                                                                                                                                                                                                                                                                                                 |
| `void`                                                            | [`_free_rid`](class_physicsserver2dextension.md#class_physicsserver2dextension_private_method__free_rid) ( rid: [`RID`](class_rid.md) ) virtual[^virtual]                                                                                                                                                                                                                                                                                                                |
| [`int`](class_int.md)                                             | [`_get_process_info`](class_physicsserver2dextension.md#class_physicsserver2dextension_private_method__get_process_info) ( process_info: [ProcessInfo](#enum_physicsserver2d_processinfo) ) virtual[^virtual]                                                                                                                                                                                                                                                            |
| `void`                                                            | [`_init`](class_physicsserver2dextension.md#class_physicsserver2dextension_private_method__init) ( ) virtual[^virtual]                                                                                                                                                                                                                                                                                                                                                   |
| [`bool`](class_bool.md)                                           | [`_is_flushing_queries`](class_physicsserver2dextension.md#class_physicsserver2dextension_private_method__is_flushing_queries) ( ) virtual[^virtual] const[^const]                                                                                                                                                                                                                                                                                                       |
| `void`                                                            | [`_joint_clear`](class_physicsserver2dextension.md#class_physicsserver2dextension_private_method__joint_clear) ( joint: [`RID`](class_rid.md) ) virtual[^virtual]                                                                                                                                                                                                                                                                                                        |
| [`RID`](class_rid.md)                                             | [`_joint_create`](class_physicsserver2dextension.md#class_physicsserver2dextension_private_method__joint_create) ( ) virtual[^virtual]                                                                                                                                                                                                                                                                                                                                   |
| `void`                                                            | [`_joint_disable_collisions_between_bodies`](class_physicsserver2dextension.md#class_physicsserver2dextension_private_method__joint_disable_collisions_between_bodies) ( joint: [`RID`](class_rid.md), disable: [`bool`](class_bool.md) ) virtual[^virtual]                                                                                                                                                                                                              |
| [`float`](class_float.md)                                         | [`_joint_get_param`](class_physicsserver2dextension.md#class_physicsserver2dextension_private_method__joint_get_param) ( joint: [`RID`](class_rid.md), param: [JointParam](#enum_physicsserver2d_jointparam) ) virtual[^virtual] const[^const]                                                                                                                                                                                                                           |
| [JointType](#enum_physicsserver2d_jointtype)                      | [`_joint_get_type`](class_physicsserver2dextension.md#class_physicsserver2dextension_private_method__joint_get_type) ( joint: [`RID`](class_rid.md) ) virtual[^virtual] const[^const]                                                                                                                                                                                                                                                                                    |
| [`bool`](class_bool.md)                                           | [`_joint_is_disabled_collisions_between_bodies`](class_physicsserver2dextension.md#class_physicsserver2dextension_private_method__joint_is_disabled_collisions_between_bodies) ( joint: [`RID`](class_rid.md) ) virtual[^virtual] const[^const]                                                                                                                                                                                                                          |
| `void`                                                            | [`_joint_make_damped_spring`](class_physicsserver2dextension.md#class_physicsserver2dextension_private_method__joint_make_damped_spring) ( joint: [`RID`](class_rid.md), anchor_a: [`Vector2`](class_vector2.md), anchor_b: [`Vector2`](class_vector2.md), body_a: [`RID`](class_rid.md), body_b: [`RID`](class_rid.md) ) virtual[^virtual]                                                                                                                              |
| `void`                                                            | [`_joint_make_groove`](class_physicsserver2dextension.md#class_physicsserver2dextension_private_method__joint_make_groove) ( joint: [`RID`](class_rid.md), a_groove1: [`Vector2`](class_vector2.md), a_groove2: [`Vector2`](class_vector2.md), b_anchor: [`Vector2`](class_vector2.md), body_a: [`RID`](class_rid.md), body_b: [`RID`](class_rid.md) ) virtual[^virtual]                                                                                                 |
| `void`                                                            | [`_joint_make_pin`](class_physicsserver2dextension.md#class_physicsserver2dextension_private_method__joint_make_pin) ( joint: [`RID`](class_rid.md), anchor: [`Vector2`](class_vector2.md), body_a: [`RID`](class_rid.md), body_b: [`RID`](class_rid.md) ) virtual[^virtual]                                                                                                                                                                                             |
| `void`                                                            | [`_joint_set_param`](class_physicsserver2dextension.md#class_physicsserver2dextension_private_method__joint_set_param) ( joint: [`RID`](class_rid.md), param: [JointParam](#enum_physicsserver2d_jointparam), value: [`float`](class_float.md) ) virtual[^virtual]                                                                                                                                                                                                       |
| [`bool`](class_bool.md)                                           | [`_pin_joint_get_flag`](class_physicsserver2dextension.md#class_physicsserver2dextension_private_method__pin_joint_get_flag) ( joint: [`RID`](class_rid.md), flag: [PinJointFlag](#enum_physicsserver2d_pinjointflag) ) virtual[^virtual] const[^const]                                                                                                                                                                                                                  |
| [`float`](class_float.md)                                         | [`_pin_joint_get_param`](class_physicsserver2dextension.md#class_physicsserver2dextension_private_method__pin_joint_get_param) ( joint: [`RID`](class_rid.md), param: [PinJointParam](#enum_physicsserver2d_pinjointparam) ) virtual[^virtual] const[^const]                                                                                                                                                                                                             |
| `void`                                                            | [`_pin_joint_set_flag`](class_physicsserver2dextension.md#class_physicsserver2dextension_private_method__pin_joint_set_flag) ( joint: [`RID`](class_rid.md), flag: [PinJointFlag](#enum_physicsserver2d_pinjointflag), enabled: [`bool`](class_bool.md) ) virtual[^virtual]                                                                                                                                                                                              |
| `void`                                                            | [`_pin_joint_set_param`](class_physicsserver2dextension.md#class_physicsserver2dextension_private_method__pin_joint_set_param) ( joint: [`RID`](class_rid.md), param: [PinJointParam](#enum_physicsserver2d_pinjointparam), value: [`float`](class_float.md) ) virtual[^virtual]                                                                                                                                                                                         |
| [`RID`](class_rid.md)                                             | [`_rectangle_shape_create`](class_physicsserver2dextension.md#class_physicsserver2dextension_private_method__rectangle_shape_create) ( ) virtual[^virtual]                                                                                                                                                                                                                                                                                                               |
| [`RID`](class_rid.md)                                             | [`_segment_shape_create`](class_physicsserver2dextension.md#class_physicsserver2dextension_private_method__segment_shape_create) ( ) virtual[^virtual]                                                                                                                                                                                                                                                                                                                   |
| [`RID`](class_rid.md)                                             | [`_separation_ray_shape_create`](class_physicsserver2dextension.md#class_physicsserver2dextension_private_method__separation_ray_shape_create) ( ) virtual[^virtual]                                                                                                                                                                                                                                                                                                     |
| `void`                                                            | [`_set_active`](class_physicsserver2dextension.md#class_physicsserver2dextension_private_method__set_active) ( active: [`bool`](class_bool.md) ) virtual[^virtual]                                                                                                                                                                                                                                                                                                       |
| [`bool`](class_bool.md)                                           | [`_shape_collide`](class_physicsserver2dextension.md#class_physicsserver2dextension_private_method__shape_collide) ( shape_A: [`RID`](class_rid.md), xform_A: [`Transform2D`](class_transform2d.md), motion_A: [`Vector2`](class_vector2.md), shape_B: [`RID`](class_rid.md), xform_B: [`Transform2D`](class_transform2d.md), motion_B: [`Vector2`](class_vector2.md), results: `void*`, result_max: [`int`](class_int.md), result_count: `int32_t*` ) virtual[^virtual] |
| [`float`](class_float.md)                                         | [`_shape_get_custom_solver_bias`](class_physicsserver2dextension.md#class_physicsserver2dextension_private_method__shape_get_custom_solver_bias) ( shape: [`RID`](class_rid.md) ) virtual[^virtual] const[^const]                                                                                                                                                                                                                                                        |
| [`Variant`](class_variant.md)                                     | [`_shape_get_data`](class_physicsserver2dextension.md#class_physicsserver2dextension_private_method__shape_get_data) ( shape: [`RID`](class_rid.md) ) virtual[^virtual] const[^const]                                                                                                                                                                                                                                                                                    |
| [ShapeType](#enum_physicsserver2d_shapetype)                      | [`_shape_get_type`](class_physicsserver2dextension.md#class_physicsserver2dextension_private_method__shape_get_type) ( shape: [`RID`](class_rid.md) ) virtual[^virtual] const[^const]                                                                                                                                                                                                                                                                                    |
| `void`                                                            | [`_shape_set_custom_solver_bias`](class_physicsserver2dextension.md#class_physicsserver2dextension_private_method__shape_set_custom_solver_bias) ( shape: [`RID`](class_rid.md), bias: [`float`](class_float.md) ) virtual[^virtual]                                                                                                                                                                                                                                     |
| `void`                                                            | [`_shape_set_data`](class_physicsserver2dextension.md#class_physicsserver2dextension_private_method__shape_set_data) ( shape: [`RID`](class_rid.md), data: [`Variant`](class_variant.md) ) virtual[^virtual]                                                                                                                                                                                                                                                             |
| [`RID`](class_rid.md)                                             | [`_space_create`](class_physicsserver2dextension.md#class_physicsserver2dextension_private_method__space_create) ( ) virtual[^virtual]                                                                                                                                                                                                                                                                                                                                   |
| [`int`](class_int.md)                                             | [`_space_get_contact_count`](class_physicsserver2dextension.md#class_physicsserver2dextension_private_method__space_get_contact_count) ( space: [`RID`](class_rid.md) ) virtual[^virtual] const[^const]                                                                                                                                                                                                                                                                  |
| [`PackedVector2Array`](class_packedvector2array.md)               | [`_space_get_contacts`](class_physicsserver2dextension.md#class_physicsserver2dextension_private_method__space_get_contacts) ( space: [`RID`](class_rid.md) ) virtual[^virtual] const[^const]                                                                                                                                                                                                                                                                            |
| [`PhysicsDirectSpaceState2D`](class_physicsdirectspacestate2d.md) | [`_space_get_direct_state`](class_physicsserver2dextension.md#class_physicsserver2dextension_private_method__space_get_direct_state) ( space: [`RID`](class_rid.md) ) virtual[^virtual]                                                                                                                                                                                                                                                                                  |
| [`float`](class_float.md)                                         | [`_space_get_param`](class_physicsserver2dextension.md#class_physicsserver2dextension_private_method__space_get_param) ( space: [`RID`](class_rid.md), param: [SpaceParameter](#enum_physicsserver2d_spaceparameter) ) virtual[^virtual] const[^const]                                                                                                                                                                                                                   |
| [`bool`](class_bool.md)                                           | [`_space_is_active`](class_physicsserver2dextension.md#class_physicsserver2dextension_private_method__space_is_active) ( space: [`RID`](class_rid.md) ) virtual[^virtual] const[^const]                                                                                                                                                                                                                                                                                  |
| `void`                                                            | [`_space_set_active`](class_physicsserver2dextension.md#class_physicsserver2dextension_private_method__space_set_active) ( space: [`RID`](class_rid.md), active: [`bool`](class_bool.md) ) virtual[^virtual]                                                                                                                                                                                                                                                             |
| `void`                                                            | [`_space_set_debug_contacts`](class_physicsserver2dextension.md#class_physicsserver2dextension_private_method__space_set_debug_contacts) ( space: [`RID`](class_rid.md), max_contacts: [`int`](class_int.md) ) virtual[^virtual]                                                                                                                                                                                                                                         |
| `void`                                                            | [`_space_set_param`](class_physicsserver2dextension.md#class_physicsserver2dextension_private_method__space_set_param) ( space: [`RID`](class_rid.md), param: [SpaceParameter](#enum_physicsserver2d_spaceparameter), value: [`float`](class_float.md) ) virtual[^virtual]                                                                                                                                                                                               |
| `void`                                                            | [`_step`](class_physicsserver2dextension.md#class_physicsserver2dextension_private_method__step) ( step: [`float`](class_float.md) ) virtual[^virtual]                                                                                                                                                                                                                                                                                                                   |
| `void`                                                            | [`_sync`](class_physicsserver2dextension.md#class_physicsserver2dextension_private_method__sync) ( ) virtual[^virtual]                                                                                                                                                                                                                                                                                                                                                   |
| [`RID`](class_rid.md)                                             | [`_world_boundary_shape_create`](class_physicsserver2dextension.md#class_physicsserver2dextension_private_method__world_boundary_shape_create) ( ) virtual[^virtual]                                                                                                                                                                                                                                                                                                     |
| [`bool`](class_bool.md)                                           | [`body_test_motion_is_excluding_body`](class_physicsserver2dextension.md#class_physicsserver2dextension_method_body_test_motion_is_excluding_body) ( body: [`RID`](class_rid.md) ) const[^const]                                                                                                                                                                                                                                                                         |
| [`bool`](class_bool.md)                                           | [`body_test_motion_is_excluding_object`](class_physicsserver2dextension.md#class_physicsserver2dextension_method_body_test_motion_is_excluding_object) ( object: [`int`](class_int.md) ) const[^const]                                                                                                                                                                                                                                                                   |

<!-- rst-class:: classref-section-separator -->

---

## 方法说明

<div id="_class_physicsserver2dextension_private_method__area_add_shape"></div>

`void` **_area_add_shape** ( area: [`RID`](class_rid.md), shape: [`RID`](class_rid.md), transform: [`Transform2D`](class_transform2d.md), disabled: [`bool`](class_bool.md) ) virtual[^virtual]<div id="class_physicsserver2dextension_private_method__area_add_shape"></div>

Overridable version of [`PhysicsServer2D.area_add_shape`](class_physicsserver2d.md#class_physicsserver2d_method_area_add_shape).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsserver2dextension_private_method__area_attach_canvas_instance_id"></div>

`void` **_area_attach_canvas_instance_id** ( area: [`RID`](class_rid.md), id: [`int`](class_int.md) ) virtual[^virtual]<div id="class_physicsserver2dextension_private_method__area_attach_canvas_instance_id"></div>

Overridable version of [`PhysicsServer2D.area_attach_canvas_instance_id`](class_physicsserver2d.md#class_physicsserver2d_method_area_attach_canvas_instance_id).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsserver2dextension_private_method__area_attach_object_instance_id"></div>

`void` **_area_attach_object_instance_id** ( area: [`RID`](class_rid.md), id: [`int`](class_int.md) ) virtual[^virtual]<div id="class_physicsserver2dextension_private_method__area_attach_object_instance_id"></div>

Overridable version of [`PhysicsServer2D.area_attach_object_instance_id`](class_physicsserver2d.md#class_physicsserver2d_method_area_attach_object_instance_id).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsserver2dextension_private_method__area_clear_shapes"></div>

`void` **_area_clear_shapes** ( area: [`RID`](class_rid.md) ) virtual[^virtual]<div id="class_physicsserver2dextension_private_method__area_clear_shapes"></div>

Overridable version of [`PhysicsServer2D.area_clear_shapes`](class_physicsserver2d.md#class_physicsserver2d_method_area_clear_shapes).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsserver2dextension_private_method__area_create"></div>

[`RID`](class_rid.md) **_area_create** ( ) virtual[^virtual]<div id="class_physicsserver2dextension_private_method__area_create"></div>

Overridable version of [`PhysicsServer2D.area_create`](class_physicsserver2d.md#class_physicsserver2d_method_area_create).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsserver2dextension_private_method__area_get_canvas_instance_id"></div>

[`int`](class_int.md) **_area_get_canvas_instance_id** ( area: [`RID`](class_rid.md) ) virtual[^virtual] const[^const]<div id="class_physicsserver2dextension_private_method__area_get_canvas_instance_id"></div>

Overridable version of [`PhysicsServer2D.area_get_canvas_instance_id`](class_physicsserver2d.md#class_physicsserver2d_method_area_get_canvas_instance_id).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsserver2dextension_private_method__area_get_collision_layer"></div>

[`int`](class_int.md) **_area_get_collision_layer** ( area: [`RID`](class_rid.md) ) virtual[^virtual] const[^const]<div id="class_physicsserver2dextension_private_method__area_get_collision_layer"></div>

Overridable version of [`PhysicsServer2D.area_get_collision_layer`](class_physicsserver2d.md#class_physicsserver2d_method_area_get_collision_layer).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsserver2dextension_private_method__area_get_collision_mask"></div>

[`int`](class_int.md) **_area_get_collision_mask** ( area: [`RID`](class_rid.md) ) virtual[^virtual] const[^const]<div id="class_physicsserver2dextension_private_method__area_get_collision_mask"></div>

Overridable version of [`PhysicsServer2D.area_get_collision_mask`](class_physicsserver2d.md#class_physicsserver2d_method_area_get_collision_mask).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsserver2dextension_private_method__area_get_object_instance_id"></div>

[`int`](class_int.md) **_area_get_object_instance_id** ( area: [`RID`](class_rid.md) ) virtual[^virtual] const[^const]<div id="class_physicsserver2dextension_private_method__area_get_object_instance_id"></div>

Overridable version of [`PhysicsServer2D.area_get_object_instance_id`](class_physicsserver2d.md#class_physicsserver2d_method_area_get_object_instance_id).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsserver2dextension_private_method__area_get_param"></div>

[`Variant`](class_variant.md) **_area_get_param** ( area: [`RID`](class_rid.md), param: [AreaParameter](#enum_physicsserver2d_areaparameter) ) virtual[^virtual] const[^const]<div id="class_physicsserver2dextension_private_method__area_get_param"></div>

Overridable version of [`PhysicsServer2D.area_get_param`](class_physicsserver2d.md#class_physicsserver2d_method_area_get_param).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsserver2dextension_private_method__area_get_shape"></div>

[`RID`](class_rid.md) **_area_get_shape** ( area: [`RID`](class_rid.md), shape_idx: [`int`](class_int.md) ) virtual[^virtual] const[^const]<div id="class_physicsserver2dextension_private_method__area_get_shape"></div>

Overridable version of [`PhysicsServer2D.area_get_shape`](class_physicsserver2d.md#class_physicsserver2d_method_area_get_shape).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsserver2dextension_private_method__area_get_shape_count"></div>

[`int`](class_int.md) **_area_get_shape_count** ( area: [`RID`](class_rid.md) ) virtual[^virtual] const[^const]<div id="class_physicsserver2dextension_private_method__area_get_shape_count"></div>

Overridable version of [`PhysicsServer2D.area_get_shape_count`](class_physicsserver2d.md#class_physicsserver2d_method_area_get_shape_count).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsserver2dextension_private_method__area_get_shape_transform"></div>

[`Transform2D`](class_transform2d.md) **_area_get_shape_transform** ( area: [`RID`](class_rid.md), shape_idx: [`int`](class_int.md) ) virtual[^virtual] const[^const]<div id="class_physicsserver2dextension_private_method__area_get_shape_transform"></div>

Overridable version of [`PhysicsServer2D.area_get_shape_transform`](class_physicsserver2d.md#class_physicsserver2d_method_area_get_shape_transform).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsserver2dextension_private_method__area_get_space"></div>

[`RID`](class_rid.md) **_area_get_space** ( area: [`RID`](class_rid.md) ) virtual[^virtual] const[^const]<div id="class_physicsserver2dextension_private_method__area_get_space"></div>

Overridable version of [`PhysicsServer2D.area_get_space`](class_physicsserver2d.md#class_physicsserver2d_method_area_get_space).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsserver2dextension_private_method__area_get_transform"></div>

[`Transform2D`](class_transform2d.md) **_area_get_transform** ( area: [`RID`](class_rid.md) ) virtual[^virtual] const[^const]<div id="class_physicsserver2dextension_private_method__area_get_transform"></div>

Overridable version of [`PhysicsServer2D.area_get_transform`](class_physicsserver2d.md#class_physicsserver2d_method_area_get_transform).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsserver2dextension_private_method__area_remove_shape"></div>

`void` **_area_remove_shape** ( area: [`RID`](class_rid.md), shape_idx: [`int`](class_int.md) ) virtual[^virtual]<div id="class_physicsserver2dextension_private_method__area_remove_shape"></div>

Overridable version of [`PhysicsServer2D.area_remove_shape`](class_physicsserver2d.md#class_physicsserver2d_method_area_remove_shape).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsserver2dextension_private_method__area_set_area_monitor_callback"></div>

`void` **_area_set_area_monitor_callback** ( area: [`RID`](class_rid.md), callback: [`Callable`](class_callable.md) ) virtual[^virtual]<div id="class_physicsserver2dextension_private_method__area_set_area_monitor_callback"></div>

Overridable version of [`PhysicsServer2D.area_set_area_monitor_callback`](class_physicsserver2d.md#class_physicsserver2d_method_area_set_area_monitor_callback).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsserver2dextension_private_method__area_set_collision_layer"></div>

`void` **_area_set_collision_layer** ( area: [`RID`](class_rid.md), layer: [`int`](class_int.md) ) virtual[^virtual]<div id="class_physicsserver2dextension_private_method__area_set_collision_layer"></div>

Overridable version of [`PhysicsServer2D.area_set_collision_layer`](class_physicsserver2d.md#class_physicsserver2d_method_area_set_collision_layer).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsserver2dextension_private_method__area_set_collision_mask"></div>

`void` **_area_set_collision_mask** ( area: [`RID`](class_rid.md), mask: [`int`](class_int.md) ) virtual[^virtual]<div id="class_physicsserver2dextension_private_method__area_set_collision_mask"></div>

Overridable version of [`PhysicsServer2D.area_set_collision_mask`](class_physicsserver2d.md#class_physicsserver2d_method_area_set_collision_mask).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsserver2dextension_private_method__area_set_monitor_callback"></div>

`void` **_area_set_monitor_callback** ( area: [`RID`](class_rid.md), callback: [`Callable`](class_callable.md) ) virtual[^virtual]<div id="class_physicsserver2dextension_private_method__area_set_monitor_callback"></div>

Overridable version of [`PhysicsServer2D.area_set_monitor_callback`](class_physicsserver2d.md#class_physicsserver2d_method_area_set_monitor_callback).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsserver2dextension_private_method__area_set_monitorable"></div>

`void` **_area_set_monitorable** ( area: [`RID`](class_rid.md), monitorable: [`bool`](class_bool.md) ) virtual[^virtual]<div id="class_physicsserver2dextension_private_method__area_set_monitorable"></div>

Overridable version of [`PhysicsServer2D.area_set_monitorable`](class_physicsserver2d.md#class_physicsserver2d_method_area_set_monitorable).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsserver2dextension_private_method__area_set_param"></div>

`void` **_area_set_param** ( area: [`RID`](class_rid.md), param: [AreaParameter](#enum_physicsserver2d_areaparameter), value: [`Variant`](class_variant.md) ) virtual[^virtual]<div id="class_physicsserver2dextension_private_method__area_set_param"></div>

Overridable version of [`PhysicsServer2D.area_set_param`](class_physicsserver2d.md#class_physicsserver2d_method_area_set_param).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsserver2dextension_private_method__area_set_pickable"></div>

`void` **_area_set_pickable** ( area: [`RID`](class_rid.md), pickable: [`bool`](class_bool.md) ) virtual[^virtual]<div id="class_physicsserver2dextension_private_method__area_set_pickable"></div>

If set to `true`, allows the area with the given [`RID`](class_rid.md) to detect mouse inputs when the mouse cursor is hovering on it.

Overridable version of [`PhysicsServer2D`](class_physicsserver2d.md)'s internal `area_set_pickable` method. Corresponds to [`CollisionObject2D.input_pickable`](class_collisionobject2d.md#class_collisionobject2d_property_input_pickable).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsserver2dextension_private_method__area_set_shape"></div>

`void` **_area_set_shape** ( area: [`RID`](class_rid.md), shape_idx: [`int`](class_int.md), shape: [`RID`](class_rid.md) ) virtual[^virtual]<div id="class_physicsserver2dextension_private_method__area_set_shape"></div>

Overridable version of [`PhysicsServer2D.area_set_shape`](class_physicsserver2d.md#class_physicsserver2d_method_area_set_shape).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsserver2dextension_private_method__area_set_shape_disabled"></div>

`void` **_area_set_shape_disabled** ( area: [`RID`](class_rid.md), shape_idx: [`int`](class_int.md), disabled: [`bool`](class_bool.md) ) virtual[^virtual]<div id="class_physicsserver2dextension_private_method__area_set_shape_disabled"></div>

Overridable version of [`PhysicsServer2D.area_set_shape_disabled`](class_physicsserver2d.md#class_physicsserver2d_method_area_set_shape_disabled).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsserver2dextension_private_method__area_set_shape_transform"></div>

`void` **_area_set_shape_transform** ( area: [`RID`](class_rid.md), shape_idx: [`int`](class_int.md), transform: [`Transform2D`](class_transform2d.md) ) virtual[^virtual]<div id="class_physicsserver2dextension_private_method__area_set_shape_transform"></div>

Overridable version of [`PhysicsServer2D.area_set_shape_transform`](class_physicsserver2d.md#class_physicsserver2d_method_area_set_shape_transform).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsserver2dextension_private_method__area_set_space"></div>

`void` **_area_set_space** ( area: [`RID`](class_rid.md), space: [`RID`](class_rid.md) ) virtual[^virtual]<div id="class_physicsserver2dextension_private_method__area_set_space"></div>

Overridable version of [`PhysicsServer2D.area_set_space`](class_physicsserver2d.md#class_physicsserver2d_method_area_set_space).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsserver2dextension_private_method__area_set_transform"></div>

`void` **_area_set_transform** ( area: [`RID`](class_rid.md), transform: [`Transform2D`](class_transform2d.md) ) virtual[^virtual]<div id="class_physicsserver2dextension_private_method__area_set_transform"></div>

Overridable version of [`PhysicsServer2D.area_set_transform`](class_physicsserver2d.md#class_physicsserver2d_method_area_set_transform).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsserver2dextension_private_method__body_add_collision_exception"></div>

`void` **_body_add_collision_exception** ( body: [`RID`](class_rid.md), excepted_body: [`RID`](class_rid.md) ) virtual[^virtual]<div id="class_physicsserver2dextension_private_method__body_add_collision_exception"></div>

Overridable version of [`PhysicsServer2D.body_add_collision_exception`](class_physicsserver2d.md#class_physicsserver2d_method_body_add_collision_exception).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsserver2dextension_private_method__body_add_constant_central_force"></div>

`void` **_body_add_constant_central_force** ( body: [`RID`](class_rid.md), force: [`Vector2`](class_vector2.md) ) virtual[^virtual]<div id="class_physicsserver2dextension_private_method__body_add_constant_central_force"></div>

Overridable version of [`PhysicsServer2D.body_add_constant_central_force`](class_physicsserver2d.md#class_physicsserver2d_method_body_add_constant_central_force).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsserver2dextension_private_method__body_add_constant_force"></div>

`void` **_body_add_constant_force** ( body: [`RID`](class_rid.md), force: [`Vector2`](class_vector2.md), position: [`Vector2`](class_vector2.md) ) virtual[^virtual]<div id="class_physicsserver2dextension_private_method__body_add_constant_force"></div>

Overridable version of [`PhysicsServer2D.body_add_constant_force`](class_physicsserver2d.md#class_physicsserver2d_method_body_add_constant_force).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsserver2dextension_private_method__body_add_constant_torque"></div>

`void` **_body_add_constant_torque** ( body: [`RID`](class_rid.md), torque: [`float`](class_float.md) ) virtual[^virtual]<div id="class_physicsserver2dextension_private_method__body_add_constant_torque"></div>

Overridable version of [`PhysicsServer2D.body_add_constant_torque`](class_physicsserver2d.md#class_physicsserver2d_method_body_add_constant_torque).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsserver2dextension_private_method__body_add_shape"></div>

`void` **_body_add_shape** ( body: [`RID`](class_rid.md), shape: [`RID`](class_rid.md), transform: [`Transform2D`](class_transform2d.md), disabled: [`bool`](class_bool.md) ) virtual[^virtual]<div id="class_physicsserver2dextension_private_method__body_add_shape"></div>

Overridable version of [`PhysicsServer2D.body_add_shape`](class_physicsserver2d.md#class_physicsserver2d_method_body_add_shape).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsserver2dextension_private_method__body_apply_central_force"></div>

`void` **_body_apply_central_force** ( body: [`RID`](class_rid.md), force: [`Vector2`](class_vector2.md) ) virtual[^virtual]<div id="class_physicsserver2dextension_private_method__body_apply_central_force"></div>

Overridable version of [`PhysicsServer2D.body_apply_central_force`](class_physicsserver2d.md#class_physicsserver2d_method_body_apply_central_force).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsserver2dextension_private_method__body_apply_central_impulse"></div>

`void` **_body_apply_central_impulse** ( body: [`RID`](class_rid.md), impulse: [`Vector2`](class_vector2.md) ) virtual[^virtual]<div id="class_physicsserver2dextension_private_method__body_apply_central_impulse"></div>

Overridable version of [`PhysicsServer2D.body_apply_central_impulse`](class_physicsserver2d.md#class_physicsserver2d_method_body_apply_central_impulse).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsserver2dextension_private_method__body_apply_force"></div>

`void` **_body_apply_force** ( body: [`RID`](class_rid.md), force: [`Vector2`](class_vector2.md), position: [`Vector2`](class_vector2.md) ) virtual[^virtual]<div id="class_physicsserver2dextension_private_method__body_apply_force"></div>

Overridable version of [`PhysicsServer2D.body_apply_force`](class_physicsserver2d.md#class_physicsserver2d_method_body_apply_force).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsserver2dextension_private_method__body_apply_impulse"></div>

`void` **_body_apply_impulse** ( body: [`RID`](class_rid.md), impulse: [`Vector2`](class_vector2.md), position: [`Vector2`](class_vector2.md) ) virtual[^virtual]<div id="class_physicsserver2dextension_private_method__body_apply_impulse"></div>

Overridable version of [`PhysicsServer2D.body_apply_impulse`](class_physicsserver2d.md#class_physicsserver2d_method_body_apply_impulse).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsserver2dextension_private_method__body_apply_torque"></div>

`void` **_body_apply_torque** ( body: [`RID`](class_rid.md), torque: [`float`](class_float.md) ) virtual[^virtual]<div id="class_physicsserver2dextension_private_method__body_apply_torque"></div>

Overridable version of [`PhysicsServer2D.body_apply_torque`](class_physicsserver2d.md#class_physicsserver2d_method_body_apply_torque).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsserver2dextension_private_method__body_apply_torque_impulse"></div>

`void` **_body_apply_torque_impulse** ( body: [`RID`](class_rid.md), impulse: [`float`](class_float.md) ) virtual[^virtual]<div id="class_physicsserver2dextension_private_method__body_apply_torque_impulse"></div>

Overridable version of [`PhysicsServer2D.body_apply_torque_impulse`](class_physicsserver2d.md#class_physicsserver2d_method_body_apply_torque_impulse).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsserver2dextension_private_method__body_attach_canvas_instance_id"></div>

`void` **_body_attach_canvas_instance_id** ( body: [`RID`](class_rid.md), id: [`int`](class_int.md) ) virtual[^virtual]<div id="class_physicsserver2dextension_private_method__body_attach_canvas_instance_id"></div>

Overridable version of [`PhysicsServer2D.body_attach_canvas_instance_id`](class_physicsserver2d.md#class_physicsserver2d_method_body_attach_canvas_instance_id).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsserver2dextension_private_method__body_attach_object_instance_id"></div>

`void` **_body_attach_object_instance_id** ( body: [`RID`](class_rid.md), id: [`int`](class_int.md) ) virtual[^virtual]<div id="class_physicsserver2dextension_private_method__body_attach_object_instance_id"></div>

Overridable version of [`PhysicsServer2D.body_attach_object_instance_id`](class_physicsserver2d.md#class_physicsserver2d_method_body_attach_object_instance_id).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsserver2dextension_private_method__body_clear_shapes"></div>

`void` **_body_clear_shapes** ( body: [`RID`](class_rid.md) ) virtual[^virtual]<div id="class_physicsserver2dextension_private_method__body_clear_shapes"></div>

Overridable version of [`PhysicsServer2D.body_clear_shapes`](class_physicsserver2d.md#class_physicsserver2d_method_body_clear_shapes).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsserver2dextension_private_method__body_collide_shape"></div>

[`bool`](class_bool.md) **_body_collide_shape** ( body: [`RID`](class_rid.md), body_shape: [`int`](class_int.md), shape: [`RID`](class_rid.md), shape_xform: [`Transform2D`](class_transform2d.md), motion: [`Vector2`](class_vector2.md), results: `void*`, result_max: [`int`](class_int.md), result_count: `int32_t*` ) virtual[^virtual]<div id="class_physicsserver2dextension_private_method__body_collide_shape"></div>

Given a `body`, a `shape`, and their respective parameters, this method should return `true` if a collision between the two would occur, with additional details passed in `results`.

Overridable version of [`PhysicsServer2D`](class_physicsserver2d.md)'s internal `shape_collide` method. Corresponds to [`PhysicsDirectSpaceState2D.collide_shape`](class_physicsdirectspacestate2d.md#class_physicsdirectspacestate2d_method_collide_shape).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsserver2dextension_private_method__body_create"></div>

[`RID`](class_rid.md) **_body_create** ( ) virtual[^virtual]<div id="class_physicsserver2dextension_private_method__body_create"></div>

Overridable version of [`PhysicsServer2D.body_create`](class_physicsserver2d.md#class_physicsserver2d_method_body_create).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsserver2dextension_private_method__body_get_canvas_instance_id"></div>

[`int`](class_int.md) **_body_get_canvas_instance_id** ( body: [`RID`](class_rid.md) ) virtual[^virtual] const[^const]<div id="class_physicsserver2dextension_private_method__body_get_canvas_instance_id"></div>

Overridable version of [`PhysicsServer2D.body_get_canvas_instance_id`](class_physicsserver2d.md#class_physicsserver2d_method_body_get_canvas_instance_id).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsserver2dextension_private_method__body_get_collision_exceptions"></div>

[Array](class_array.md) [`RID`](class_rid.md) **_body_get_collision_exceptions** ( body: [`RID`](class_rid.md) ) virtual[^virtual] const[^const]<div id="class_physicsserver2dextension_private_method__body_get_collision_exceptions"></div>

Returns the [`RID`](class_rid.md) s of all bodies added as collision exceptions for the given `body`. See also [`_body_add_collision_exception`](class_physicsserver2dextension.md#class_physicsserver2dextension_private_method__body_add_collision_exception) and [`_body_remove_collision_exception`](class_physicsserver2dextension.md#class_physicsserver2dextension_private_method__body_remove_collision_exception).

Overridable version of [`PhysicsServer2D`](class_physicsserver2d.md)'s internal `body_get_collision_exceptions` method. Corresponds to [`PhysicsBody2D.get_collision_exceptions`](class_physicsbody2d.md#class_physicsbody2d_method_get_collision_exceptions).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsserver2dextension_private_method__body_get_collision_layer"></div>

[`int`](class_int.md) **_body_get_collision_layer** ( body: [`RID`](class_rid.md) ) virtual[^virtual] const[^const]<div id="class_physicsserver2dextension_private_method__body_get_collision_layer"></div>

Overridable version of [`PhysicsServer2D.body_get_collision_layer`](class_physicsserver2d.md#class_physicsserver2d_method_body_get_collision_layer).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsserver2dextension_private_method__body_get_collision_mask"></div>

[`int`](class_int.md) **_body_get_collision_mask** ( body: [`RID`](class_rid.md) ) virtual[^virtual] const[^const]<div id="class_physicsserver2dextension_private_method__body_get_collision_mask"></div>

Overridable version of [`PhysicsServer2D.body_get_collision_mask`](class_physicsserver2d.md#class_physicsserver2d_method_body_get_collision_mask).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsserver2dextension_private_method__body_get_collision_priority"></div>

[`float`](class_float.md) **_body_get_collision_priority** ( body: [`RID`](class_rid.md) ) virtual[^virtual] const[^const]<div id="class_physicsserver2dextension_private_method__body_get_collision_priority"></div>

Overridable version of [`PhysicsServer2D.body_get_collision_priority`](class_physicsserver2d.md#class_physicsserver2d_method_body_get_collision_priority).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsserver2dextension_private_method__body_get_constant_force"></div>

[`Vector2`](class_vector2.md) **_body_get_constant_force** ( body: [`RID`](class_rid.md) ) virtual[^virtual] const[^const]<div id="class_physicsserver2dextension_private_method__body_get_constant_force"></div>

Overridable version of [`PhysicsServer2D.body_get_constant_force`](class_physicsserver2d.md#class_physicsserver2d_method_body_get_constant_force).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsserver2dextension_private_method__body_get_constant_torque"></div>

[`float`](class_float.md) **_body_get_constant_torque** ( body: [`RID`](class_rid.md) ) virtual[^virtual] const[^const]<div id="class_physicsserver2dextension_private_method__body_get_constant_torque"></div>

Overridable version of [`PhysicsServer2D.body_get_constant_torque`](class_physicsserver2d.md#class_physicsserver2d_method_body_get_constant_torque).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsserver2dextension_private_method__body_get_contacts_reported_depth_threshold"></div>

[`float`](class_float.md) **_body_get_contacts_reported_depth_threshold** ( body: [`RID`](class_rid.md) ) virtual[^virtual] const[^const]<div id="class_physicsserver2dextension_private_method__body_get_contacts_reported_depth_threshold"></div>

Overridable version of [`PhysicsServer2D`](class_physicsserver2d.md)'s internal `body_get_contacts_reported_depth_threshold` method.

 **Note:** This method is currently unused by Godot's default physics implementation.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsserver2dextension_private_method__body_get_continuous_collision_detection_mode"></div>

[CCDMode](#enum_physicsserver2d_ccdmode) **_body_get_continuous_collision_detection_mode** ( body: [`RID`](class_rid.md) ) virtual[^virtual] const[^const]<div id="class_physicsserver2dextension_private_method__body_get_continuous_collision_detection_mode"></div>

Overridable version of [`PhysicsServer2D.body_get_continuous_collision_detection_mode`](class_physicsserver2d.md#class_physicsserver2d_method_body_get_continuous_collision_detection_mode).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsserver2dextension_private_method__body_get_direct_state"></div>

[`PhysicsDirectBodyState2D`](class_physicsdirectbodystate2d.md) **_body_get_direct_state** ( body: [`RID`](class_rid.md) ) virtual[^virtual]<div id="class_physicsserver2dextension_private_method__body_get_direct_state"></div>

Overridable version of [`PhysicsServer2D.body_get_direct_state`](class_physicsserver2d.md#class_physicsserver2d_method_body_get_direct_state).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsserver2dextension_private_method__body_get_max_contacts_reported"></div>

[`int`](class_int.md) **_body_get_max_contacts_reported** ( body: [`RID`](class_rid.md) ) virtual[^virtual] const[^const]<div id="class_physicsserver2dextension_private_method__body_get_max_contacts_reported"></div>

Overridable version of [`PhysicsServer2D.body_get_max_contacts_reported`](class_physicsserver2d.md#class_physicsserver2d_method_body_get_max_contacts_reported).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsserver2dextension_private_method__body_get_mode"></div>

[BodyMode](#enum_physicsserver2d_bodymode) **_body_get_mode** ( body: [`RID`](class_rid.md) ) virtual[^virtual] const[^const]<div id="class_physicsserver2dextension_private_method__body_get_mode"></div>

Overridable version of [`PhysicsServer2D.body_get_mode`](class_physicsserver2d.md#class_physicsserver2d_method_body_get_mode).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsserver2dextension_private_method__body_get_object_instance_id"></div>

[`int`](class_int.md) **_body_get_object_instance_id** ( body: [`RID`](class_rid.md) ) virtual[^virtual] const[^const]<div id="class_physicsserver2dextension_private_method__body_get_object_instance_id"></div>

Overridable version of [`PhysicsServer2D.body_get_object_instance_id`](class_physicsserver2d.md#class_physicsserver2d_method_body_get_object_instance_id).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsserver2dextension_private_method__body_get_param"></div>

[`Variant`](class_variant.md) **_body_get_param** ( body: [`RID`](class_rid.md), param: [BodyParameter](#enum_physicsserver2d_bodyparameter) ) virtual[^virtual] const[^const]<div id="class_physicsserver2dextension_private_method__body_get_param"></div>

Overridable version of [`PhysicsServer2D.body_get_param`](class_physicsserver2d.md#class_physicsserver2d_method_body_get_param).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsserver2dextension_private_method__body_get_shape"></div>

[`RID`](class_rid.md) **_body_get_shape** ( body: [`RID`](class_rid.md), shape_idx: [`int`](class_int.md) ) virtual[^virtual] const[^const]<div id="class_physicsserver2dextension_private_method__body_get_shape"></div>

Overridable version of [`PhysicsServer2D.body_get_shape`](class_physicsserver2d.md#class_physicsserver2d_method_body_get_shape).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsserver2dextension_private_method__body_get_shape_count"></div>

[`int`](class_int.md) **_body_get_shape_count** ( body: [`RID`](class_rid.md) ) virtual[^virtual] const[^const]<div id="class_physicsserver2dextension_private_method__body_get_shape_count"></div>

Overridable version of [`PhysicsServer2D.body_get_shape_count`](class_physicsserver2d.md#class_physicsserver2d_method_body_get_shape_count).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsserver2dextension_private_method__body_get_shape_transform"></div>

[`Transform2D`](class_transform2d.md) **_body_get_shape_transform** ( body: [`RID`](class_rid.md), shape_idx: [`int`](class_int.md) ) virtual[^virtual] const[^const]<div id="class_physicsserver2dextension_private_method__body_get_shape_transform"></div>

Overridable version of [`PhysicsServer2D.body_get_shape_transform`](class_physicsserver2d.md#class_physicsserver2d_method_body_get_shape_transform).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsserver2dextension_private_method__body_get_space"></div>

[`RID`](class_rid.md) **_body_get_space** ( body: [`RID`](class_rid.md) ) virtual[^virtual] const[^const]<div id="class_physicsserver2dextension_private_method__body_get_space"></div>

Overridable version of [`PhysicsServer2D.body_get_space`](class_physicsserver2d.md#class_physicsserver2d_method_body_get_space).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsserver2dextension_private_method__body_get_state"></div>

[`Variant`](class_variant.md) **_body_get_state** ( body: [`RID`](class_rid.md), state: [BodyState](#enum_physicsserver2d_bodystate) ) virtual[^virtual] const[^const]<div id="class_physicsserver2dextension_private_method__body_get_state"></div>

Overridable version of [`PhysicsServer2D.body_get_state`](class_physicsserver2d.md#class_physicsserver2d_method_body_get_state).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsserver2dextension_private_method__body_is_omitting_force_integration"></div>

[`bool`](class_bool.md) **_body_is_omitting_force_integration** ( body: [`RID`](class_rid.md) ) virtual[^virtual] const[^const]<div id="class_physicsserver2dextension_private_method__body_is_omitting_force_integration"></div>

Overridable version of [`PhysicsServer2D.body_is_omitting_force_integration`](class_physicsserver2d.md#class_physicsserver2d_method_body_is_omitting_force_integration).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsserver2dextension_private_method__body_remove_collision_exception"></div>

`void` **_body_remove_collision_exception** ( body: [`RID`](class_rid.md), excepted_body: [`RID`](class_rid.md) ) virtual[^virtual]<div id="class_physicsserver2dextension_private_method__body_remove_collision_exception"></div>

Overridable version of [`PhysicsServer2D.body_remove_collision_exception`](class_physicsserver2d.md#class_physicsserver2d_method_body_remove_collision_exception).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsserver2dextension_private_method__body_remove_shape"></div>

`void` **_body_remove_shape** ( body: [`RID`](class_rid.md), shape_idx: [`int`](class_int.md) ) virtual[^virtual]<div id="class_physicsserver2dextension_private_method__body_remove_shape"></div>

Overridable version of [`PhysicsServer2D.body_remove_shape`](class_physicsserver2d.md#class_physicsserver2d_method_body_remove_shape).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsserver2dextension_private_method__body_reset_mass_properties"></div>

`void` **_body_reset_mass_properties** ( body: [`RID`](class_rid.md) ) virtual[^virtual]<div id="class_physicsserver2dextension_private_method__body_reset_mass_properties"></div>

Overridable version of [`PhysicsServer2D.body_reset_mass_properties`](class_physicsserver2d.md#class_physicsserver2d_method_body_reset_mass_properties).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsserver2dextension_private_method__body_set_axis_velocity"></div>

`void` **_body_set_axis_velocity** ( body: [`RID`](class_rid.md), axis_velocity: [`Vector2`](class_vector2.md) ) virtual[^virtual]<div id="class_physicsserver2dextension_private_method__body_set_axis_velocity"></div>

Overridable version of [`PhysicsServer2D.body_set_axis_velocity`](class_physicsserver2d.md#class_physicsserver2d_method_body_set_axis_velocity).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsserver2dextension_private_method__body_set_collision_layer"></div>

`void` **_body_set_collision_layer** ( body: [`RID`](class_rid.md), layer: [`int`](class_int.md) ) virtual[^virtual]<div id="class_physicsserver2dextension_private_method__body_set_collision_layer"></div>

Overridable version of [`PhysicsServer2D.body_set_collision_layer`](class_physicsserver2d.md#class_physicsserver2d_method_body_set_collision_layer).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsserver2dextension_private_method__body_set_collision_mask"></div>

`void` **_body_set_collision_mask** ( body: [`RID`](class_rid.md), mask: [`int`](class_int.md) ) virtual[^virtual]<div id="class_physicsserver2dextension_private_method__body_set_collision_mask"></div>

Overridable version of [`PhysicsServer2D.body_set_collision_mask`](class_physicsserver2d.md#class_physicsserver2d_method_body_set_collision_mask).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsserver2dextension_private_method__body_set_collision_priority"></div>

`void` **_body_set_collision_priority** ( body: [`RID`](class_rid.md), priority: [`float`](class_float.md) ) virtual[^virtual]<div id="class_physicsserver2dextension_private_method__body_set_collision_priority"></div>

Overridable version of [`PhysicsServer2D.body_set_collision_priority`](class_physicsserver2d.md#class_physicsserver2d_method_body_set_collision_priority).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsserver2dextension_private_method__body_set_constant_force"></div>

`void` **_body_set_constant_force** ( body: [`RID`](class_rid.md), force: [`Vector2`](class_vector2.md) ) virtual[^virtual]<div id="class_physicsserver2dextension_private_method__body_set_constant_force"></div>

Overridable version of [`PhysicsServer2D.body_set_constant_force`](class_physicsserver2d.md#class_physicsserver2d_method_body_set_constant_force).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsserver2dextension_private_method__body_set_constant_torque"></div>

`void` **_body_set_constant_torque** ( body: [`RID`](class_rid.md), torque: [`float`](class_float.md) ) virtual[^virtual]<div id="class_physicsserver2dextension_private_method__body_set_constant_torque"></div>

Overridable version of [`PhysicsServer2D.body_set_constant_torque`](class_physicsserver2d.md#class_physicsserver2d_method_body_set_constant_torque).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsserver2dextension_private_method__body_set_contacts_reported_depth_threshold"></div>

`void` **_body_set_contacts_reported_depth_threshold** ( body: [`RID`](class_rid.md), threshold: [`float`](class_float.md) ) virtual[^virtual]<div id="class_physicsserver2dextension_private_method__body_set_contacts_reported_depth_threshold"></div>

Overridable version of [`PhysicsServer2D`](class_physicsserver2d.md)'s internal `body_set_contacts_reported_depth_threshold` method.

 **Note:** This method is currently unused by Godot's default physics implementation.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsserver2dextension_private_method__body_set_continuous_collision_detection_mode"></div>

`void` **_body_set_continuous_collision_detection_mode** ( body: [`RID`](class_rid.md), mode: [CCDMode](#enum_physicsserver2d_ccdmode) ) virtual[^virtual]<div id="class_physicsserver2dextension_private_method__body_set_continuous_collision_detection_mode"></div>

Overridable version of [`PhysicsServer2D.body_set_continuous_collision_detection_mode`](class_physicsserver2d.md#class_physicsserver2d_method_body_set_continuous_collision_detection_mode).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsserver2dextension_private_method__body_set_force_integration_callback"></div>

`void` **_body_set_force_integration_callback** ( body: [`RID`](class_rid.md), callable: [`Callable`](class_callable.md), userdata: [`Variant`](class_variant.md) ) virtual[^virtual]<div id="class_physicsserver2dextension_private_method__body_set_force_integration_callback"></div>

Overridable version of [`PhysicsServer2D.body_set_force_integration_callback`](class_physicsserver2d.md#class_physicsserver2d_method_body_set_force_integration_callback).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsserver2dextension_private_method__body_set_max_contacts_reported"></div>

`void` **_body_set_max_contacts_reported** ( body: [`RID`](class_rid.md), amount: [`int`](class_int.md) ) virtual[^virtual]<div id="class_physicsserver2dextension_private_method__body_set_max_contacts_reported"></div>

Overridable version of [`PhysicsServer2D.body_set_max_contacts_reported`](class_physicsserver2d.md#class_physicsserver2d_method_body_set_max_contacts_reported).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsserver2dextension_private_method__body_set_mode"></div>

`void` **_body_set_mode** ( body: [`RID`](class_rid.md), mode: [BodyMode](#enum_physicsserver2d_bodymode) ) virtual[^virtual]<div id="class_physicsserver2dextension_private_method__body_set_mode"></div>

Overridable version of [`PhysicsServer2D.body_set_mode`](class_physicsserver2d.md#class_physicsserver2d_method_body_set_mode).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsserver2dextension_private_method__body_set_omit_force_integration"></div>

`void` **_body_set_omit_force_integration** ( body: [`RID`](class_rid.md), enable: [`bool`](class_bool.md) ) virtual[^virtual]<div id="class_physicsserver2dextension_private_method__body_set_omit_force_integration"></div>

Overridable version of [`PhysicsServer2D.body_set_omit_force_integration`](class_physicsserver2d.md#class_physicsserver2d_method_body_set_omit_force_integration).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsserver2dextension_private_method__body_set_param"></div>

`void` **_body_set_param** ( body: [`RID`](class_rid.md), param: [BodyParameter](#enum_physicsserver2d_bodyparameter), value: [`Variant`](class_variant.md) ) virtual[^virtual]<div id="class_physicsserver2dextension_private_method__body_set_param"></div>

Overridable version of [`PhysicsServer2D.body_set_param`](class_physicsserver2d.md#class_physicsserver2d_method_body_set_param).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsserver2dextension_private_method__body_set_pickable"></div>

`void` **_body_set_pickable** ( body: [`RID`](class_rid.md), pickable: [`bool`](class_bool.md) ) virtual[^virtual]<div id="class_physicsserver2dextension_private_method__body_set_pickable"></div>

If set to `true`, allows the body with the given [`RID`](class_rid.md) to detect mouse inputs when the mouse cursor is hovering on it.

Overridable version of [`PhysicsServer2D`](class_physicsserver2d.md)'s internal `body_set_pickable` method. Corresponds to [`CollisionObject2D.input_pickable`](class_collisionobject2d.md#class_collisionobject2d_property_input_pickable).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsserver2dextension_private_method__body_set_shape"></div>

`void` **_body_set_shape** ( body: [`RID`](class_rid.md), shape_idx: [`int`](class_int.md), shape: [`RID`](class_rid.md) ) virtual[^virtual]<div id="class_physicsserver2dextension_private_method__body_set_shape"></div>

Overridable version of [`PhysicsServer2D.body_set_shape`](class_physicsserver2d.md#class_physicsserver2d_method_body_set_shape).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsserver2dextension_private_method__body_set_shape_as_one_way_collision"></div>

`void` **_body_set_shape_as_one_way_collision** ( body: [`RID`](class_rid.md), shape_idx: [`int`](class_int.md), enable: [`bool`](class_bool.md), margin: [`float`](class_float.md) ) virtual[^virtual]<div id="class_physicsserver2dextension_private_method__body_set_shape_as_one_way_collision"></div>

Overridable version of [`PhysicsServer2D.body_set_shape_as_one_way_collision`](class_physicsserver2d.md#class_physicsserver2d_method_body_set_shape_as_one_way_collision).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsserver2dextension_private_method__body_set_shape_disabled"></div>

`void` **_body_set_shape_disabled** ( body: [`RID`](class_rid.md), shape_idx: [`int`](class_int.md), disabled: [`bool`](class_bool.md) ) virtual[^virtual]<div id="class_physicsserver2dextension_private_method__body_set_shape_disabled"></div>

Overridable version of [`PhysicsServer2D.body_set_shape_disabled`](class_physicsserver2d.md#class_physicsserver2d_method_body_set_shape_disabled).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsserver2dextension_private_method__body_set_shape_transform"></div>

`void` **_body_set_shape_transform** ( body: [`RID`](class_rid.md), shape_idx: [`int`](class_int.md), transform: [`Transform2D`](class_transform2d.md) ) virtual[^virtual]<div id="class_physicsserver2dextension_private_method__body_set_shape_transform"></div>

Overridable version of [`PhysicsServer2D.body_set_shape_transform`](class_physicsserver2d.md#class_physicsserver2d_method_body_set_shape_transform).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsserver2dextension_private_method__body_set_space"></div>

`void` **_body_set_space** ( body: [`RID`](class_rid.md), space: [`RID`](class_rid.md) ) virtual[^virtual]<div id="class_physicsserver2dextension_private_method__body_set_space"></div>

Overridable version of [`PhysicsServer2D.body_set_space`](class_physicsserver2d.md#class_physicsserver2d_method_body_set_space).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsserver2dextension_private_method__body_set_state"></div>

`void` **_body_set_state** ( body: [`RID`](class_rid.md), state: [BodyState](#enum_physicsserver2d_bodystate), value: [`Variant`](class_variant.md) ) virtual[^virtual]<div id="class_physicsserver2dextension_private_method__body_set_state"></div>

Overridable version of [`PhysicsServer2D.body_set_state`](class_physicsserver2d.md#class_physicsserver2d_method_body_set_state).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsserver2dextension_private_method__body_set_state_sync_callback"></div>

`void` **_body_set_state_sync_callback** ( body: [`RID`](class_rid.md), callable: [`Callable`](class_callable.md) ) virtual[^virtual]<div id="class_physicsserver2dextension_private_method__body_set_state_sync_callback"></div>

Assigns the `body` to call the given `callable` during the synchronization phase of the loop, before [`_step`](class_physicsserver2dextension.md#class_physicsserver2dextension_private_method__step) is called. See also [`_sync`](class_physicsserver2dextension.md#class_physicsserver2dextension_private_method__sync).

Overridable version of [`PhysicsServer2D.body_set_state_sync_callback`](class_physicsserver2d.md#class_physicsserver2d_method_body_set_state_sync_callback).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsserver2dextension_private_method__body_test_motion"></div>

[`bool`](class_bool.md) **_body_test_motion** ( body: [`RID`](class_rid.md), from: [`Transform2D`](class_transform2d.md), motion: [`Vector2`](class_vector2.md), margin: [`float`](class_float.md), collide_separation_ray: [`bool`](class_bool.md), recovery_as_collision: [`bool`](class_bool.md), result: `PhysicsServer2DExtensionMotionResult*` ) virtual[^virtual] const[^const]<div id="class_physicsserver2dextension_private_method__body_test_motion"></div>

Overridable version of [`PhysicsServer2D.body_test_motion`](class_physicsserver2d.md#class_physicsserver2d_method_body_test_motion). Unlike the exposed implementation, this method does not receive all of the arguments inside a [`PhysicsTestMotionParameters2D`](class_physicstestmotionparameters2d.md).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsserver2dextension_private_method__capsule_shape_create"></div>

[`RID`](class_rid.md) **_capsule_shape_create** ( ) virtual[^virtual]<div id="class_physicsserver2dextension_private_method__capsule_shape_create"></div>

Overridable version of [`PhysicsServer2D.capsule_shape_create`](class_physicsserver2d.md#class_physicsserver2d_method_capsule_shape_create).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsserver2dextension_private_method__circle_shape_create"></div>

[`RID`](class_rid.md) **_circle_shape_create** ( ) virtual[^virtual]<div id="class_physicsserver2dextension_private_method__circle_shape_create"></div>

Overridable version of [`PhysicsServer2D.circle_shape_create`](class_physicsserver2d.md#class_physicsserver2d_method_circle_shape_create).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsserver2dextension_private_method__concave_polygon_shape_create"></div>

[`RID`](class_rid.md) **_concave_polygon_shape_create** ( ) virtual[^virtual]<div id="class_physicsserver2dextension_private_method__concave_polygon_shape_create"></div>

Overridable version of [`PhysicsServer2D.concave_polygon_shape_create`](class_physicsserver2d.md#class_physicsserver2d_method_concave_polygon_shape_create).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsserver2dextension_private_method__convex_polygon_shape_create"></div>

[`RID`](class_rid.md) **_convex_polygon_shape_create** ( ) virtual[^virtual]<div id="class_physicsserver2dextension_private_method__convex_polygon_shape_create"></div>

Overridable version of [`PhysicsServer2D.convex_polygon_shape_create`](class_physicsserver2d.md#class_physicsserver2d_method_convex_polygon_shape_create).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsserver2dextension_private_method__damped_spring_joint_get_param"></div>

[`float`](class_float.md) **_damped_spring_joint_get_param** ( joint: [`RID`](class_rid.md), param: [DampedSpringParam](#enum_physicsserver2d_dampedspringparam) ) virtual[^virtual] const[^const]<div id="class_physicsserver2dextension_private_method__damped_spring_joint_get_param"></div>

Overridable version of [`PhysicsServer2D.damped_spring_joint_get_param`](class_physicsserver2d.md#class_physicsserver2d_method_damped_spring_joint_get_param).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsserver2dextension_private_method__damped_spring_joint_set_param"></div>

`void` **_damped_spring_joint_set_param** ( joint: [`RID`](class_rid.md), param: [DampedSpringParam](#enum_physicsserver2d_dampedspringparam), value: [`float`](class_float.md) ) virtual[^virtual]<div id="class_physicsserver2dextension_private_method__damped_spring_joint_set_param"></div>

Overridable version of [`PhysicsServer2D.damped_spring_joint_set_param`](class_physicsserver2d.md#class_physicsserver2d_method_damped_spring_joint_set_param).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsserver2dextension_private_method__end_sync"></div>

`void` **_end_sync** ( ) virtual[^virtual]<div id="class_physicsserver2dextension_private_method__end_sync"></div>

Called to indicate that the physics server has stopped synchronizing. It is in the loop's iteration/physics phase, and can access physics objects even if running on a separate thread. See also [`_sync`](class_physicsserver2dextension.md#class_physicsserver2dextension_private_method__sync).

Overridable version of [`PhysicsServer2D`](class_physicsserver2d.md)'s internal `end_sync` method.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsserver2dextension_private_method__finish"></div>

`void` **_finish** ( ) virtual[^virtual]<div id="class_physicsserver2dextension_private_method__finish"></div>

Called when the main loop finalizes to shut down the physics server. See also [`MainLoop._finalize`](class_mainloop.md#class_mainloop_private_method__finalize) and [`_init`](class_physicsserver2dextension.md#class_physicsserver2dextension_private_method__init).

Overridable version of [`PhysicsServer2D`](class_physicsserver2d.md)'s internal `finish` method.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsserver2dextension_private_method__flush_queries"></div>

`void` **_flush_queries** ( ) virtual[^virtual]<div id="class_physicsserver2dextension_private_method__flush_queries"></div>

Called every physics step before [`_step`](class_physicsserver2dextension.md#class_physicsserver2dextension_private_method__step) to process all remaining queries.

Overridable version of [`PhysicsServer2D`](class_physicsserver2d.md)'s internal `flush_queries` method.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsserver2dextension_private_method__free_rid"></div>

`void` **_free_rid** ( rid: [`RID`](class_rid.md) ) virtual[^virtual]<div id="class_physicsserver2dextension_private_method__free_rid"></div>

Overridable version of [`PhysicsServer2D.free_rid`](class_physicsserver2d.md#class_physicsserver2d_method_free_rid).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsserver2dextension_private_method__get_process_info"></div>

[`int`](class_int.md) **_get_process_info** ( process_info: [ProcessInfo](#enum_physicsserver2d_processinfo) ) virtual[^virtual]<div id="class_physicsserver2dextension_private_method__get_process_info"></div>

Overridable version of [`PhysicsServer2D.get_process_info`](class_physicsserver2d.md#class_physicsserver2d_method_get_process_info).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsserver2dextension_private_method__init"></div>

`void` **_init** ( ) virtual[^virtual]<div id="class_physicsserver2dextension_private_method__init"></div>

Called when the main loop is initialized and creates a new instance of this physics server. See also [`MainLoop._initialize`](class_mainloop.md#class_mainloop_private_method__initialize) and [`_finish`](class_physicsserver2dextension.md#class_physicsserver2dextension_private_method__finish).

Overridable version of [`PhysicsServer2D`](class_physicsserver2d.md)'s internal `init` method.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsserver2dextension_private_method__is_flushing_queries"></div>

[`bool`](class_bool.md) **_is_flushing_queries** ( ) virtual[^virtual] const[^const]<div id="class_physicsserver2dextension_private_method__is_flushing_queries"></div>

Overridable method that should return `true` when the physics server is processing queries. See also [`_flush_queries`](class_physicsserver2dextension.md#class_physicsserver2dextension_private_method__flush_queries).

Overridable version of [`PhysicsServer2D`](class_physicsserver2d.md)'s internal `is_flushing_queries` method.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsserver2dextension_private_method__joint_clear"></div>

`void` **_joint_clear** ( joint: [`RID`](class_rid.md) ) virtual[^virtual]<div id="class_physicsserver2dextension_private_method__joint_clear"></div>

Overridable version of [`PhysicsServer2D.joint_clear`](class_physicsserver2d.md#class_physicsserver2d_method_joint_clear).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsserver2dextension_private_method__joint_create"></div>

[`RID`](class_rid.md) **_joint_create** ( ) virtual[^virtual]<div id="class_physicsserver2dextension_private_method__joint_create"></div>

Overridable version of [`PhysicsServer2D.joint_create`](class_physicsserver2d.md#class_physicsserver2d_method_joint_create).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsserver2dextension_private_method__joint_disable_collisions_between_bodies"></div>

`void` **_joint_disable_collisions_between_bodies** ( joint: [`RID`](class_rid.md), disable: [`bool`](class_bool.md) ) virtual[^virtual]<div id="class_physicsserver2dextension_private_method__joint_disable_collisions_between_bodies"></div>

Overridable version of [`PhysicsServer2D.joint_disable_collisions_between_bodies`](class_physicsserver2d.md#class_physicsserver2d_method_joint_disable_collisions_between_bodies).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsserver2dextension_private_method__joint_get_param"></div>

[`float`](class_float.md) **_joint_get_param** ( joint: [`RID`](class_rid.md), param: [JointParam](#enum_physicsserver2d_jointparam) ) virtual[^virtual] const[^const]<div id="class_physicsserver2dextension_private_method__joint_get_param"></div>

Overridable version of [`PhysicsServer2D.joint_get_param`](class_physicsserver2d.md#class_physicsserver2d_method_joint_get_param).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsserver2dextension_private_method__joint_get_type"></div>

[JointType](#enum_physicsserver2d_jointtype) **_joint_get_type** ( joint: [`RID`](class_rid.md) ) virtual[^virtual] const[^const]<div id="class_physicsserver2dextension_private_method__joint_get_type"></div>

Overridable version of [`PhysicsServer2D.joint_get_type`](class_physicsserver2d.md#class_physicsserver2d_method_joint_get_type).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsserver2dextension_private_method__joint_is_disabled_collisions_between_bodies"></div>

[`bool`](class_bool.md) **_joint_is_disabled_collisions_between_bodies** ( joint: [`RID`](class_rid.md) ) virtual[^virtual] const[^const]<div id="class_physicsserver2dextension_private_method__joint_is_disabled_collisions_between_bodies"></div>

Overridable version of [`PhysicsServer2D.joint_is_disabled_collisions_between_bodies`](class_physicsserver2d.md#class_physicsserver2d_method_joint_is_disabled_collisions_between_bodies).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsserver2dextension_private_method__joint_make_damped_spring"></div>

`void` **_joint_make_damped_spring** ( joint: [`RID`](class_rid.md), anchor_a: [`Vector2`](class_vector2.md), anchor_b: [`Vector2`](class_vector2.md), body_a: [`RID`](class_rid.md), body_b: [`RID`](class_rid.md) ) virtual[^virtual]<div id="class_physicsserver2dextension_private_method__joint_make_damped_spring"></div>

Overridable version of [`PhysicsServer2D.joint_make_damped_spring`](class_physicsserver2d.md#class_physicsserver2d_method_joint_make_damped_spring).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsserver2dextension_private_method__joint_make_groove"></div>

`void` **_joint_make_groove** ( joint: [`RID`](class_rid.md), a_groove1: [`Vector2`](class_vector2.md), a_groove2: [`Vector2`](class_vector2.md), b_anchor: [`Vector2`](class_vector2.md), body_a: [`RID`](class_rid.md), body_b: [`RID`](class_rid.md) ) virtual[^virtual]<div id="class_physicsserver2dextension_private_method__joint_make_groove"></div>

Overridable version of [`PhysicsServer2D.joint_make_groove`](class_physicsserver2d.md#class_physicsserver2d_method_joint_make_groove).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsserver2dextension_private_method__joint_make_pin"></div>

`void` **_joint_make_pin** ( joint: [`RID`](class_rid.md), anchor: [`Vector2`](class_vector2.md), body_a: [`RID`](class_rid.md), body_b: [`RID`](class_rid.md) ) virtual[^virtual]<div id="class_physicsserver2dextension_private_method__joint_make_pin"></div>

Overridable version of [`PhysicsServer2D.joint_make_pin`](class_physicsserver2d.md#class_physicsserver2d_method_joint_make_pin).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsserver2dextension_private_method__joint_set_param"></div>

`void` **_joint_set_param** ( joint: [`RID`](class_rid.md), param: [JointParam](#enum_physicsserver2d_jointparam), value: [`float`](class_float.md) ) virtual[^virtual]<div id="class_physicsserver2dextension_private_method__joint_set_param"></div>

Overridable version of [`PhysicsServer2D.joint_set_param`](class_physicsserver2d.md#class_physicsserver2d_method_joint_set_param).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsserver2dextension_private_method__pin_joint_get_flag"></div>

[`bool`](class_bool.md) **_pin_joint_get_flag** ( joint: [`RID`](class_rid.md), flag: [PinJointFlag](#enum_physicsserver2d_pinjointflag) ) virtual[^virtual] const[^const]<div id="class_physicsserver2dextension_private_method__pin_joint_get_flag"></div>

Overridable version of [`PhysicsServer2D.pin_joint_get_flag`](class_physicsserver2d.md#class_physicsserver2d_method_pin_joint_get_flag).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsserver2dextension_private_method__pin_joint_get_param"></div>

[`float`](class_float.md) **_pin_joint_get_param** ( joint: [`RID`](class_rid.md), param: [PinJointParam](#enum_physicsserver2d_pinjointparam) ) virtual[^virtual] const[^const]<div id="class_physicsserver2dextension_private_method__pin_joint_get_param"></div>

Overridable version of [`PhysicsServer2D.pin_joint_get_param`](class_physicsserver2d.md#class_physicsserver2d_method_pin_joint_get_param).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsserver2dextension_private_method__pin_joint_set_flag"></div>

`void` **_pin_joint_set_flag** ( joint: [`RID`](class_rid.md), flag: [PinJointFlag](#enum_physicsserver2d_pinjointflag), enabled: [`bool`](class_bool.md) ) virtual[^virtual]<div id="class_physicsserver2dextension_private_method__pin_joint_set_flag"></div>

Overridable version of [`PhysicsServer2D.pin_joint_set_flag`](class_physicsserver2d.md#class_physicsserver2d_method_pin_joint_set_flag).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsserver2dextension_private_method__pin_joint_set_param"></div>

`void` **_pin_joint_set_param** ( joint: [`RID`](class_rid.md), param: [PinJointParam](#enum_physicsserver2d_pinjointparam), value: [`float`](class_float.md) ) virtual[^virtual]<div id="class_physicsserver2dextension_private_method__pin_joint_set_param"></div>

Overridable version of [`PhysicsServer2D.pin_joint_set_param`](class_physicsserver2d.md#class_physicsserver2d_method_pin_joint_set_param).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsserver2dextension_private_method__rectangle_shape_create"></div>

[`RID`](class_rid.md) **_rectangle_shape_create** ( ) virtual[^virtual]<div id="class_physicsserver2dextension_private_method__rectangle_shape_create"></div>

Overridable version of [`PhysicsServer2D.rectangle_shape_create`](class_physicsserver2d.md#class_physicsserver2d_method_rectangle_shape_create).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsserver2dextension_private_method__segment_shape_create"></div>

[`RID`](class_rid.md) **_segment_shape_create** ( ) virtual[^virtual]<div id="class_physicsserver2dextension_private_method__segment_shape_create"></div>

Overridable version of [`PhysicsServer2D.segment_shape_create`](class_physicsserver2d.md#class_physicsserver2d_method_segment_shape_create).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsserver2dextension_private_method__separation_ray_shape_create"></div>

[`RID`](class_rid.md) **_separation_ray_shape_create** ( ) virtual[^virtual]<div id="class_physicsserver2dextension_private_method__separation_ray_shape_create"></div>

Overridable version of [`PhysicsServer2D.separation_ray_shape_create`](class_physicsserver2d.md#class_physicsserver2d_method_separation_ray_shape_create).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsserver2dextension_private_method__set_active"></div>

`void` **_set_active** ( active: [`bool`](class_bool.md) ) virtual[^virtual]<div id="class_physicsserver2dextension_private_method__set_active"></div>

Overridable version of [`PhysicsServer2D.set_active`](class_physicsserver2d.md#class_physicsserver2d_method_set_active).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsserver2dextension_private_method__shape_collide"></div>

[`bool`](class_bool.md) **_shape_collide** ( shape_A: [`RID`](class_rid.md), xform_A: [`Transform2D`](class_transform2d.md), motion_A: [`Vector2`](class_vector2.md), shape_B: [`RID`](class_rid.md), xform_B: [`Transform2D`](class_transform2d.md), motion_B: [`Vector2`](class_vector2.md), results: `void*`, result_max: [`int`](class_int.md), result_count: `int32_t*` ) virtual[^virtual]<div id="class_physicsserver2dextension_private_method__shape_collide"></div>

Given two shapes and their parameters, should return `true` if a collision between the two would occur, with additional details passed in `results`.

Overridable version of [`PhysicsServer2D`](class_physicsserver2d.md)'s internal `shape_collide` method. Corresponds to [`PhysicsDirectSpaceState2D.collide_shape`](class_physicsdirectspacestate2d.md#class_physicsdirectspacestate2d_method_collide_shape).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsserver2dextension_private_method__shape_get_custom_solver_bias"></div>

[`float`](class_float.md) **_shape_get_custom_solver_bias** ( shape: [`RID`](class_rid.md) ) virtual[^virtual] const[^const]<div id="class_physicsserver2dextension_private_method__shape_get_custom_solver_bias"></div>

Should return the custom solver bias of the given `shape`, which defines how much bodies are forced to separate on contact when this shape is involved.

Overridable version of [`PhysicsServer2D`](class_physicsserver2d.md)'s internal `shape_get_custom_solver_bias` method. Corresponds to [`Shape2D.custom_solver_bias`](class_shape2d.md#class_shape2d_property_custom_solver_bias).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsserver2dextension_private_method__shape_get_data"></div>

[`Variant`](class_variant.md) **_shape_get_data** ( shape: [`RID`](class_rid.md) ) virtual[^virtual] const[^const]<div id="class_physicsserver2dextension_private_method__shape_get_data"></div>

Overridable version of [`PhysicsServer2D.shape_get_data`](class_physicsserver2d.md#class_physicsserver2d_method_shape_get_data).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsserver2dextension_private_method__shape_get_type"></div>

[ShapeType](#enum_physicsserver2d_shapetype) **_shape_get_type** ( shape: [`RID`](class_rid.md) ) virtual[^virtual] const[^const]<div id="class_physicsserver2dextension_private_method__shape_get_type"></div>

Overridable version of [`PhysicsServer2D.shape_get_type`](class_physicsserver2d.md#class_physicsserver2d_method_shape_get_type).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsserver2dextension_private_method__shape_set_custom_solver_bias"></div>

`void` **_shape_set_custom_solver_bias** ( shape: [`RID`](class_rid.md), bias: [`float`](class_float.md) ) virtual[^virtual]<div id="class_physicsserver2dextension_private_method__shape_set_custom_solver_bias"></div>

Should set the custom solver bias for the given `shape`. It defines how much bodies are forced to separate on contact.

Overridable version of [`PhysicsServer2D`](class_physicsserver2d.md)'s internal `shape_get_custom_solver_bias` method. Corresponds to [`Shape2D.custom_solver_bias`](class_shape2d.md#class_shape2d_property_custom_solver_bias).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsserver2dextension_private_method__shape_set_data"></div>

`void` **_shape_set_data** ( shape: [`RID`](class_rid.md), data: [`Variant`](class_variant.md) ) virtual[^virtual]<div id="class_physicsserver2dextension_private_method__shape_set_data"></div>

Overridable version of [`PhysicsServer2D.shape_set_data`](class_physicsserver2d.md#class_physicsserver2d_method_shape_set_data).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsserver2dextension_private_method__space_create"></div>

[`RID`](class_rid.md) **_space_create** ( ) virtual[^virtual]<div id="class_physicsserver2dextension_private_method__space_create"></div>

Overridable version of [`PhysicsServer2D.space_create`](class_physicsserver2d.md#class_physicsserver2d_method_space_create).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsserver2dextension_private_method__space_get_contact_count"></div>

[`int`](class_int.md) **_space_get_contact_count** ( space: [`RID`](class_rid.md) ) virtual[^virtual] const[^const]<div id="class_physicsserver2dextension_private_method__space_get_contact_count"></div>

Should return how many contacts have occurred during the last physics step in the given `space`. See also [`_space_get_contacts`](class_physicsserver2dextension.md#class_physicsserver2dextension_private_method__space_get_contacts) and [`_space_set_debug_contacts`](class_physicsserver2dextension.md#class_physicsserver2dextension_private_method__space_set_debug_contacts).

Overridable version of [`PhysicsServer2D`](class_physicsserver2d.md)'s internal `space_get_contact_count` method.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsserver2dextension_private_method__space_get_contacts"></div>

[`PackedVector2Array`](class_packedvector2array.md) **_space_get_contacts** ( space: [`RID`](class_rid.md) ) virtual[^virtual] const[^const]<div id="class_physicsserver2dextension_private_method__space_get_contacts"></div>

Should return the positions of all contacts that have occurred during the last physics step in the given `space`. See also [`_space_get_contact_count`](class_physicsserver2dextension.md#class_physicsserver2dextension_private_method__space_get_contact_count) and [`_space_set_debug_contacts`](class_physicsserver2dextension.md#class_physicsserver2dextension_private_method__space_set_debug_contacts).

Overridable version of [`PhysicsServer2D`](class_physicsserver2d.md)'s internal `space_get_contacts` method.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsserver2dextension_private_method__space_get_direct_state"></div>

[`PhysicsDirectSpaceState2D`](class_physicsdirectspacestate2d.md) **_space_get_direct_state** ( space: [`RID`](class_rid.md) ) virtual[^virtual]<div id="class_physicsserver2dextension_private_method__space_get_direct_state"></div>

Overridable version of [`PhysicsServer2D.space_get_direct_state`](class_physicsserver2d.md#class_physicsserver2d_method_space_get_direct_state).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsserver2dextension_private_method__space_get_param"></div>

[`float`](class_float.md) **_space_get_param** ( space: [`RID`](class_rid.md), param: [SpaceParameter](#enum_physicsserver2d_spaceparameter) ) virtual[^virtual] const[^const]<div id="class_physicsserver2dextension_private_method__space_get_param"></div>

Overridable version of [`PhysicsServer2D.space_get_param`](class_physicsserver2d.md#class_physicsserver2d_method_space_get_param).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsserver2dextension_private_method__space_is_active"></div>

[`bool`](class_bool.md) **_space_is_active** ( space: [`RID`](class_rid.md) ) virtual[^virtual] const[^const]<div id="class_physicsserver2dextension_private_method__space_is_active"></div>

Overridable version of [`PhysicsServer2D.space_is_active`](class_physicsserver2d.md#class_physicsserver2d_method_space_is_active).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsserver2dextension_private_method__space_set_active"></div>

`void` **_space_set_active** ( space: [`RID`](class_rid.md), active: [`bool`](class_bool.md) ) virtual[^virtual]<div id="class_physicsserver2dextension_private_method__space_set_active"></div>

Overridable version of [`PhysicsServer2D.space_set_active`](class_physicsserver2d.md#class_physicsserver2d_method_space_set_active).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsserver2dextension_private_method__space_set_debug_contacts"></div>

`void` **_space_set_debug_contacts** ( space: [`RID`](class_rid.md), max_contacts: [`int`](class_int.md) ) virtual[^virtual]<div id="class_physicsserver2dextension_private_method__space_set_debug_contacts"></div>

Used internally to allow the given `space` to store contact points, up to `max_contacts`. This is automatically set for the main [`World2D`](class_world2d.md)'s space when [`SceneTree.debug_collisions_hint`](class_scenetree.md#class_scenetree_property_debug_collisions_hint) is `true`, or by checking "Visible Collision Shapes" in the editor. Only works in debug builds.

Overridable version of [`PhysicsServer2D`](class_physicsserver2d.md)'s internal `space_set_debug_contacts` method.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsserver2dextension_private_method__space_set_param"></div>

`void` **_space_set_param** ( space: [`RID`](class_rid.md), param: [SpaceParameter](#enum_physicsserver2d_spaceparameter), value: [`float`](class_float.md) ) virtual[^virtual]<div id="class_physicsserver2dextension_private_method__space_set_param"></div>

Overridable version of [`PhysicsServer2D.space_set_param`](class_physicsserver2d.md#class_physicsserver2d_method_space_set_param).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsserver2dextension_private_method__step"></div>

`void` **_step** ( step: [`float`](class_float.md) ) virtual[^virtual]<div id="class_physicsserver2dextension_private_method__step"></div>

Called every physics step to process the physics simulation. `step` is the time elapsed since the last physics step, in seconds. It is usually the same as [`Node.get_physics_process_delta_time`](class_node.md#class_node_method_get_physics_process_delta_time).

Overridable version of [`PhysicsServer2D`](class_physicsserver2d.md)'s internal `step` method.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsserver2dextension_private_method__sync"></div>

`void` **_sync** ( ) virtual[^virtual]<div id="class_physicsserver2dextension_private_method__sync"></div>

Called to indicate that the physics server is synchronizing and cannot access physics states if running on a separate thread. See also [`_end_sync`](class_physicsserver2dextension.md#class_physicsserver2dextension_private_method__end_sync).

Overridable version of [`PhysicsServer2D`](class_physicsserver2d.md)'s internal `sync` method.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsserver2dextension_private_method__world_boundary_shape_create"></div>

[`RID`](class_rid.md) **_world_boundary_shape_create** ( ) virtual[^virtual]<div id="class_physicsserver2dextension_private_method__world_boundary_shape_create"></div>

Overridable version of [`PhysicsServer2D.world_boundary_shape_create`](class_physicsserver2d.md#class_physicsserver2d_method_world_boundary_shape_create).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsserver2dextension_method_body_test_motion_is_excluding_body"></div>

[`bool`](class_bool.md) **body_test_motion_is_excluding_body** ( body: [`RID`](class_rid.md) ) const[^const]<div id="class_physicsserver2dextension_method_body_test_motion_is_excluding_body"></div>

Returns `true` if the body with the given [`RID`](class_rid.md) is being excluded from [`_body_test_motion`](class_physicsserver2dextension.md#class_physicsserver2dextension_private_method__body_test_motion). See also [`Object.get_instance_id`](class_object.md#class_object_method_get_instance_id).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsserver2dextension_method_body_test_motion_is_excluding_object"></div>

[`bool`](class_bool.md) **body_test_motion_is_excluding_object** ( object: [`int`](class_int.md) ) const[^const]<div id="class_physicsserver2dextension_method_body_test_motion_is_excluding_object"></div>

Returns `true` if the object with the given instance ID is being excluded from [`_body_test_motion`](class_physicsserver2dextension.md#class_physicsserver2dextension_private_method__body_test_motion). See also [`Object.get_instance_id`](class_object.md#class_object_method_get_instance_id).

[^virtual]: 本方法通常需要用户覆盖才能生效。
[^const]: 本方法无副作用，不会修改该实例的任何成员变量。
[^vararg]: 本方法除了能接受在此处描述的参数外，还能够继续接受任意数量的参数。
[^constructor]: 本方法用于构造某个类型。
[^static]: 调用本方法无需实例，可直接使用类名进行调用。
[^operator]: 本方法描述的是使用本类型作为左操作数的有效运算符。
[^bitfield]: 这个值是由下列位标志构成位掩码的整数。
[^void]: 无返回值。
