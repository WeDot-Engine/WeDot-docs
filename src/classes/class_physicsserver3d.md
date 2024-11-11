<!-- ⚠ 请勿编辑本文件 ⚠ -->
<!-- 本文档使用脚本从 WeDot 引擎源码仓库生成。 -->
<!-- 生成脚本：https://github.com/WeDot-Engine/WeDot/tree/master/doc/tools/make_md.py； -->
<!-- 原文件：https://github.com/WeDot-Engine/WeDot/tree/master/doc/classes/PhysicsServer3D.xml。 -->

<div id="_class_physicsserver3d"></div>

# PhysicsServer3D

**继承：** [`Object`](class_object.md)

**派生：** [`PhysicsServer3DExtension`](class_physicsserver3dextension.md)

A server interface for low-level 3D physics access.

## 描述

PhysicsServer3D is the server responsible for all 3D physics. It can directly create and manipulate all physics objects:

- A *space* is a self-contained world for a physics simulation. It contains bodies, areas, and joints. Its state can be queried for collision and intersection information, and several parameters of the simulation can be modified.

- A *shape* is a geometric shape such as a sphere, a box, a cylinder, or a polygon. It can be used for collision detection by adding it to a body/area, possibly with an extra transformation relative to the body/area's origin. Bodies/areas can have multiple (transformed) shapes added to them, and a single shape can be added to bodies/areas multiple times with different local transformations.

- A *body* is a physical object which can be in static, kinematic, or rigid mode. Its state (such as position and velocity) can be queried and updated. A force integration callback can be set to customize the body's physics.

- An *area* is a region in space which can be used to detect bodies and areas entering and exiting it. A body monitoring callback can be set to report entering/exiting body shapes, and similarly an area monitoring callback can be set. Gravity and damping can be overridden within the area by setting area parameters.

- A *joint* is a constraint, either between two bodies or on one body relative to a point. Parameters such as the joint bias and the rest length of a spring joint can be adjusted.

Physics objects in **PhysicsServer3D** may be created and manipulated independently; they do not have to be tied to nodes in the scene tree.

 **Note:** All the 3D physics nodes use the physics server internally. Adding a physics node to the scene tree will cause a corresponding physics object to be created in the physics server. A rigid body node registers a callback that updates the node's transform with the transform of the respective body object in the physics server (every physics update). An area node registers a callback to inform the area node about overlaps with the respective area object in the physics server. The raycast node queries the direct state of the relevant space in the physics server.

## 方法

|||
|:-:|:--|
| `void`                                                            | [`area_add_shape`](class_physicsserver3d.md#class_physicsserver3d_method_area_add_shape) ( area: [`RID`](class_rid.md), shape: [`RID`](class_rid.md), transform: [`Transform3D`](class_transform3d.md) = Transform3D(1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0), disabled: [`bool`](class_bool.md) = false )             |
| `void`                                                            | [`area_attach_object_instance_id`](class_physicsserver3d.md#class_physicsserver3d_method_area_attach_object_instance_id) ( area: [`RID`](class_rid.md), id: [`int`](class_int.md) )                                                                                                                               |
| `void`                                                            | [`area_clear_shapes`](class_physicsserver3d.md#class_physicsserver3d_method_area_clear_shapes) ( area: [`RID`](class_rid.md) )                                                                                                                                                                                    |
| [`RID`](class_rid.md)                                             | [`area_create`](class_physicsserver3d.md#class_physicsserver3d_method_area_create) ( )                                                                                                                                                                                                                            |
| [`int`](class_int.md)                                             | [`area_get_collision_layer`](class_physicsserver3d.md#class_physicsserver3d_method_area_get_collision_layer) ( area: [`RID`](class_rid.md) ) const[^const]                                                                                                                                                        |
| [`int`](class_int.md)                                             | [`area_get_collision_mask`](class_physicsserver3d.md#class_physicsserver3d_method_area_get_collision_mask) ( area: [`RID`](class_rid.md) ) const[^const]                                                                                                                                                          |
| [`int`](class_int.md)                                             | [`area_get_object_instance_id`](class_physicsserver3d.md#class_physicsserver3d_method_area_get_object_instance_id) ( area: [`RID`](class_rid.md) ) const[^const]                                                                                                                                                  |
| [`Variant`](class_variant.md)                                     | [`area_get_param`](class_physicsserver3d.md#class_physicsserver3d_method_area_get_param) ( area: [`RID`](class_rid.md), param: [AreaParameter](#enum_physicsserver3d_areaparameter) ) const[^const]                                                                                                               |
| [`RID`](class_rid.md)                                             | [`area_get_shape`](class_physicsserver3d.md#class_physicsserver3d_method_area_get_shape) ( area: [`RID`](class_rid.md), shape_idx: [`int`](class_int.md) ) const[^const]                                                                                                                                          |
| [`int`](class_int.md)                                             | [`area_get_shape_count`](class_physicsserver3d.md#class_physicsserver3d_method_area_get_shape_count) ( area: [`RID`](class_rid.md) ) const[^const]                                                                                                                                                                |
| [`Transform3D`](class_transform3d.md)                             | [`area_get_shape_transform`](class_physicsserver3d.md#class_physicsserver3d_method_area_get_shape_transform) ( area: [`RID`](class_rid.md), shape_idx: [`int`](class_int.md) ) const[^const]                                                                                                                      |
| [`RID`](class_rid.md)                                             | [`area_get_space`](class_physicsserver3d.md#class_physicsserver3d_method_area_get_space) ( area: [`RID`](class_rid.md) ) const[^const]                                                                                                                                                                            |
| [`Transform3D`](class_transform3d.md)                             | [`area_get_transform`](class_physicsserver3d.md#class_physicsserver3d_method_area_get_transform) ( area: [`RID`](class_rid.md) ) const[^const]                                                                                                                                                                    |
| `void`                                                            | [`area_remove_shape`](class_physicsserver3d.md#class_physicsserver3d_method_area_remove_shape) ( area: [`RID`](class_rid.md), shape_idx: [`int`](class_int.md) )                                                                                                                                                  |
| `void`                                                            | [`area_set_area_monitor_callback`](class_physicsserver3d.md#class_physicsserver3d_method_area_set_area_monitor_callback) ( area: [`RID`](class_rid.md), callback: [`Callable`](class_callable.md) )                                                                                                               |
| `void`                                                            | [`area_set_collision_layer`](class_physicsserver3d.md#class_physicsserver3d_method_area_set_collision_layer) ( area: [`RID`](class_rid.md), layer: [`int`](class_int.md) )                                                                                                                                        |
| `void`                                                            | [`area_set_collision_mask`](class_physicsserver3d.md#class_physicsserver3d_method_area_set_collision_mask) ( area: [`RID`](class_rid.md), mask: [`int`](class_int.md) )                                                                                                                                           |
| `void`                                                            | [`area_set_monitor_callback`](class_physicsserver3d.md#class_physicsserver3d_method_area_set_monitor_callback) ( area: [`RID`](class_rid.md), callback: [`Callable`](class_callable.md) )                                                                                                                         |
| `void`                                                            | [`area_set_monitorable`](class_physicsserver3d.md#class_physicsserver3d_method_area_set_monitorable) ( area: [`RID`](class_rid.md), monitorable: [`bool`](class_bool.md) )                                                                                                                                        |
| `void`                                                            | [`area_set_param`](class_physicsserver3d.md#class_physicsserver3d_method_area_set_param) ( area: [`RID`](class_rid.md), param: [AreaParameter](#enum_physicsserver3d_areaparameter), value: [`Variant`](class_variant.md) )                                                                                       |
| `void`                                                            | [`area_set_ray_pickable`](class_physicsserver3d.md#class_physicsserver3d_method_area_set_ray_pickable) ( area: [`RID`](class_rid.md), enable: [`bool`](class_bool.md) )                                                                                                                                           |
| `void`                                                            | [`area_set_shape`](class_physicsserver3d.md#class_physicsserver3d_method_area_set_shape) ( area: [`RID`](class_rid.md), shape_idx: [`int`](class_int.md), shape: [`RID`](class_rid.md) )                                                                                                                          |
| `void`                                                            | [`area_set_shape_disabled`](class_physicsserver3d.md#class_physicsserver3d_method_area_set_shape_disabled) ( area: [`RID`](class_rid.md), shape_idx: [`int`](class_int.md), disabled: [`bool`](class_bool.md) )                                                                                                   |
| `void`                                                            | [`area_set_shape_transform`](class_physicsserver3d.md#class_physicsserver3d_method_area_set_shape_transform) ( area: [`RID`](class_rid.md), shape_idx: [`int`](class_int.md), transform: [`Transform3D`](class_transform3d.md) )                                                                                  |
| `void`                                                            | [`area_set_space`](class_physicsserver3d.md#class_physicsserver3d_method_area_set_space) ( area: [`RID`](class_rid.md), space: [`RID`](class_rid.md) )                                                                                                                                                            |
| `void`                                                            | [`area_set_transform`](class_physicsserver3d.md#class_physicsserver3d_method_area_set_transform) ( area: [`RID`](class_rid.md), transform: [`Transform3D`](class_transform3d.md) )                                                                                                                                |
| `void`                                                            | [`body_add_collision_exception`](class_physicsserver3d.md#class_physicsserver3d_method_body_add_collision_exception) ( body: [`RID`](class_rid.md), excepted_body: [`RID`](class_rid.md) )                                                                                                                        |
| `void`                                                            | [`body_add_constant_central_force`](class_physicsserver3d.md#class_physicsserver3d_method_body_add_constant_central_force) ( body: [`RID`](class_rid.md), force: [`Vector3`](class_vector3.md) )                                                                                                                  |
| `void`                                                            | [`body_add_constant_force`](class_physicsserver3d.md#class_physicsserver3d_method_body_add_constant_force) ( body: [`RID`](class_rid.md), force: [`Vector3`](class_vector3.md), position: [`Vector3`](class_vector3.md) = Vector3(0, 0, 0) )                                                                      |
| `void`                                                            | [`body_add_constant_torque`](class_physicsserver3d.md#class_physicsserver3d_method_body_add_constant_torque) ( body: [`RID`](class_rid.md), torque: [`Vector3`](class_vector3.md) )                                                                                                                               |
| `void`                                                            | [`body_add_shape`](class_physicsserver3d.md#class_physicsserver3d_method_body_add_shape) ( body: [`RID`](class_rid.md), shape: [`RID`](class_rid.md), transform: [`Transform3D`](class_transform3d.md) = Transform3D(1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0), disabled: [`bool`](class_bool.md) = false )             |
| `void`                                                            | [`body_apply_central_force`](class_physicsserver3d.md#class_physicsserver3d_method_body_apply_central_force) ( body: [`RID`](class_rid.md), force: [`Vector3`](class_vector3.md) )                                                                                                                                |
| `void`                                                            | [`body_apply_central_impulse`](class_physicsserver3d.md#class_physicsserver3d_method_body_apply_central_impulse) ( body: [`RID`](class_rid.md), impulse: [`Vector3`](class_vector3.md) )                                                                                                                          |
| `void`                                                            | [`body_apply_force`](class_physicsserver3d.md#class_physicsserver3d_method_body_apply_force) ( body: [`RID`](class_rid.md), force: [`Vector3`](class_vector3.md), position: [`Vector3`](class_vector3.md) = Vector3(0, 0, 0) )                                                                                    |
| `void`                                                            | [`body_apply_impulse`](class_physicsserver3d.md#class_physicsserver3d_method_body_apply_impulse) ( body: [`RID`](class_rid.md), impulse: [`Vector3`](class_vector3.md), position: [`Vector3`](class_vector3.md) = Vector3(0, 0, 0) )                                                                              |
| `void`                                                            | [`body_apply_torque`](class_physicsserver3d.md#class_physicsserver3d_method_body_apply_torque) ( body: [`RID`](class_rid.md), torque: [`Vector3`](class_vector3.md) )                                                                                                                                             |
| `void`                                                            | [`body_apply_torque_impulse`](class_physicsserver3d.md#class_physicsserver3d_method_body_apply_torque_impulse) ( body: [`RID`](class_rid.md), impulse: [`Vector3`](class_vector3.md) )                                                                                                                            |
| `void`                                                            | [`body_attach_object_instance_id`](class_physicsserver3d.md#class_physicsserver3d_method_body_attach_object_instance_id) ( body: [`RID`](class_rid.md), id: [`int`](class_int.md) )                                                                                                                               |
| `void`                                                            | [`body_clear_shapes`](class_physicsserver3d.md#class_physicsserver3d_method_body_clear_shapes) ( body: [`RID`](class_rid.md) )                                                                                                                                                                                    |
| [`RID`](class_rid.md)                                             | [`body_create`](class_physicsserver3d.md#class_physicsserver3d_method_body_create) ( )                                                                                                                                                                                                                            |
| [`int`](class_int.md)                                             | [`body_get_collision_layer`](class_physicsserver3d.md#class_physicsserver3d_method_body_get_collision_layer) ( body: [`RID`](class_rid.md) ) const[^const]                                                                                                                                                        |
| [`int`](class_int.md)                                             | [`body_get_collision_mask`](class_physicsserver3d.md#class_physicsserver3d_method_body_get_collision_mask) ( body: [`RID`](class_rid.md) ) const[^const]                                                                                                                                                          |
| [`float`](class_float.md)                                         | [`body_get_collision_priority`](class_physicsserver3d.md#class_physicsserver3d_method_body_get_collision_priority) ( body: [`RID`](class_rid.md) ) const[^const]                                                                                                                                                  |
| [`Vector3`](class_vector3.md)                                     | [`body_get_constant_force`](class_physicsserver3d.md#class_physicsserver3d_method_body_get_constant_force) ( body: [`RID`](class_rid.md) ) const[^const]                                                                                                                                                          |
| [`Vector3`](class_vector3.md)                                     | [`body_get_constant_torque`](class_physicsserver3d.md#class_physicsserver3d_method_body_get_constant_torque) ( body: [`RID`](class_rid.md) ) const[^const]                                                                                                                                                        |
| [`PhysicsDirectBodyState3D`](class_physicsdirectbodystate3d.md)   | [`body_get_direct_state`](class_physicsserver3d.md#class_physicsserver3d_method_body_get_direct_state) ( body: [`RID`](class_rid.md) )                                                                                                                                                                            |
| [`int`](class_int.md)                                             | [`body_get_max_contacts_reported`](class_physicsserver3d.md#class_physicsserver3d_method_body_get_max_contacts_reported) ( body: [`RID`](class_rid.md) ) const[^const]                                                                                                                                            |
| [BodyMode](#enum_physicsserver3d_bodymode)                        | [`body_get_mode`](class_physicsserver3d.md#class_physicsserver3d_method_body_get_mode) ( body: [`RID`](class_rid.md) ) const[^const]                                                                                                                                                                              |
| [`int`](class_int.md)                                             | [`body_get_object_instance_id`](class_physicsserver3d.md#class_physicsserver3d_method_body_get_object_instance_id) ( body: [`RID`](class_rid.md) ) const[^const]                                                                                                                                                  |
| [`Variant`](class_variant.md)                                     | [`body_get_param`](class_physicsserver3d.md#class_physicsserver3d_method_body_get_param) ( body: [`RID`](class_rid.md), param: [BodyParameter](#enum_physicsserver3d_bodyparameter) ) const[^const]                                                                                                               |
| [`RID`](class_rid.md)                                             | [`body_get_shape`](class_physicsserver3d.md#class_physicsserver3d_method_body_get_shape) ( body: [`RID`](class_rid.md), shape_idx: [`int`](class_int.md) ) const[^const]                                                                                                                                          |
| [`int`](class_int.md)                                             | [`body_get_shape_count`](class_physicsserver3d.md#class_physicsserver3d_method_body_get_shape_count) ( body: [`RID`](class_rid.md) ) const[^const]                                                                                                                                                                |
| [`Transform3D`](class_transform3d.md)                             | [`body_get_shape_transform`](class_physicsserver3d.md#class_physicsserver3d_method_body_get_shape_transform) ( body: [`RID`](class_rid.md), shape_idx: [`int`](class_int.md) ) const[^const]                                                                                                                      |
| [`RID`](class_rid.md)                                             | [`body_get_space`](class_physicsserver3d.md#class_physicsserver3d_method_body_get_space) ( body: [`RID`](class_rid.md) ) const[^const]                                                                                                                                                                            |
| [`Variant`](class_variant.md)                                     | [`body_get_state`](class_physicsserver3d.md#class_physicsserver3d_method_body_get_state) ( body: [`RID`](class_rid.md), state: [BodyState](#enum_physicsserver3d_bodystate) ) const[^const]                                                                                                                       |
| [`bool`](class_bool.md)                                           | [`body_is_axis_locked`](class_physicsserver3d.md#class_physicsserver3d_method_body_is_axis_locked) ( body: [`RID`](class_rid.md), axis: [BodyAxis](#enum_physicsserver3d_bodyaxis) ) const[^const]                                                                                                                |
| [`bool`](class_bool.md)                                           | [`body_is_continuous_collision_detection_enabled`](class_physicsserver3d.md#class_physicsserver3d_method_body_is_continuous_collision_detection_enabled) ( body: [`RID`](class_rid.md) ) const[^const]                                                                                                            |
| [`bool`](class_bool.md)                                           | [`body_is_omitting_force_integration`](class_physicsserver3d.md#class_physicsserver3d_method_body_is_omitting_force_integration) ( body: [`RID`](class_rid.md) ) const[^const]                                                                                                                                    |
| `void`                                                            | [`body_remove_collision_exception`](class_physicsserver3d.md#class_physicsserver3d_method_body_remove_collision_exception) ( body: [`RID`](class_rid.md), excepted_body: [`RID`](class_rid.md) )                                                                                                                  |
| `void`                                                            | [`body_remove_shape`](class_physicsserver3d.md#class_physicsserver3d_method_body_remove_shape) ( body: [`RID`](class_rid.md), shape_idx: [`int`](class_int.md) )                                                                                                                                                  |
| `void`                                                            | [`body_reset_mass_properties`](class_physicsserver3d.md#class_physicsserver3d_method_body_reset_mass_properties) ( body: [`RID`](class_rid.md) )                                                                                                                                                                  |
| `void`                                                            | [`body_set_axis_lock`](class_physicsserver3d.md#class_physicsserver3d_method_body_set_axis_lock) ( body: [`RID`](class_rid.md), axis: [BodyAxis](#enum_physicsserver3d_bodyaxis), lock: [`bool`](class_bool.md) )                                                                                                 |
| `void`                                                            | [`body_set_axis_velocity`](class_physicsserver3d.md#class_physicsserver3d_method_body_set_axis_velocity) ( body: [`RID`](class_rid.md), axis_velocity: [`Vector3`](class_vector3.md) )                                                                                                                            |
| `void`                                                            | [`body_set_collision_layer`](class_physicsserver3d.md#class_physicsserver3d_method_body_set_collision_layer) ( body: [`RID`](class_rid.md), layer: [`int`](class_int.md) )                                                                                                                                        |
| `void`                                                            | [`body_set_collision_mask`](class_physicsserver3d.md#class_physicsserver3d_method_body_set_collision_mask) ( body: [`RID`](class_rid.md), mask: [`int`](class_int.md) )                                                                                                                                           |
| `void`                                                            | [`body_set_collision_priority`](class_physicsserver3d.md#class_physicsserver3d_method_body_set_collision_priority) ( body: [`RID`](class_rid.md), priority: [`float`](class_float.md) )                                                                                                                           |
| `void`                                                            | [`body_set_constant_force`](class_physicsserver3d.md#class_physicsserver3d_method_body_set_constant_force) ( body: [`RID`](class_rid.md), force: [`Vector3`](class_vector3.md) )                                                                                                                                  |
| `void`                                                            | [`body_set_constant_torque`](class_physicsserver3d.md#class_physicsserver3d_method_body_set_constant_torque) ( body: [`RID`](class_rid.md), torque: [`Vector3`](class_vector3.md) )                                                                                                                               |
| `void`                                                            | [`body_set_enable_continuous_collision_detection`](class_physicsserver3d.md#class_physicsserver3d_method_body_set_enable_continuous_collision_detection) ( body: [`RID`](class_rid.md), enable: [`bool`](class_bool.md) )                                                                                         |
| `void`                                                            | [`body_set_force_integration_callback`](class_physicsserver3d.md#class_physicsserver3d_method_body_set_force_integration_callback) ( body: [`RID`](class_rid.md), callable: [`Callable`](class_callable.md), userdata: [`Variant`](class_variant.md) = null )                                                     |
| `void`                                                            | [`body_set_max_contacts_reported`](class_physicsserver3d.md#class_physicsserver3d_method_body_set_max_contacts_reported) ( body: [`RID`](class_rid.md), amount: [`int`](class_int.md) )                                                                                                                           |
| `void`                                                            | [`body_set_mode`](class_physicsserver3d.md#class_physicsserver3d_method_body_set_mode) ( body: [`RID`](class_rid.md), mode: [BodyMode](#enum_physicsserver3d_bodymode) )                                                                                                                                          |
| `void`                                                            | [`body_set_omit_force_integration`](class_physicsserver3d.md#class_physicsserver3d_method_body_set_omit_force_integration) ( body: [`RID`](class_rid.md), enable: [`bool`](class_bool.md) )                                                                                                                       |
| `void`                                                            | [`body_set_param`](class_physicsserver3d.md#class_physicsserver3d_method_body_set_param) ( body: [`RID`](class_rid.md), param: [BodyParameter](#enum_physicsserver3d_bodyparameter), value: [`Variant`](class_variant.md) )                                                                                       |
| `void`                                                            | [`body_set_ray_pickable`](class_physicsserver3d.md#class_physicsserver3d_method_body_set_ray_pickable) ( body: [`RID`](class_rid.md), enable: [`bool`](class_bool.md) )                                                                                                                                           |
| `void`                                                            | [`body_set_shape`](class_physicsserver3d.md#class_physicsserver3d_method_body_set_shape) ( body: [`RID`](class_rid.md), shape_idx: [`int`](class_int.md), shape: [`RID`](class_rid.md) )                                                                                                                          |
| `void`                                                            | [`body_set_shape_disabled`](class_physicsserver3d.md#class_physicsserver3d_method_body_set_shape_disabled) ( body: [`RID`](class_rid.md), shape_idx: [`int`](class_int.md), disabled: [`bool`](class_bool.md) )                                                                                                   |
| `void`                                                            | [`body_set_shape_transform`](class_physicsserver3d.md#class_physicsserver3d_method_body_set_shape_transform) ( body: [`RID`](class_rid.md), shape_idx: [`int`](class_int.md), transform: [`Transform3D`](class_transform3d.md) )                                                                                  |
| `void`                                                            | [`body_set_space`](class_physicsserver3d.md#class_physicsserver3d_method_body_set_space) ( body: [`RID`](class_rid.md), space: [`RID`](class_rid.md) )                                                                                                                                                            |
| `void`                                                            | [`body_set_state`](class_physicsserver3d.md#class_physicsserver3d_method_body_set_state) ( body: [`RID`](class_rid.md), state: [BodyState](#enum_physicsserver3d_bodystate), value: [`Variant`](class_variant.md) )                                                                                               |
| `void`                                                            | [`body_set_state_sync_callback`](class_physicsserver3d.md#class_physicsserver3d_method_body_set_state_sync_callback) ( body: [`RID`](class_rid.md), callable: [`Callable`](class_callable.md) )                                                                                                                   |
| [`bool`](class_bool.md)                                           | [`body_test_motion`](class_physicsserver3d.md#class_physicsserver3d_method_body_test_motion) ( body: [`RID`](class_rid.md), parameters: [`PhysicsTestMotionParameters3D`](class_physicstestmotionparameters3d.md), result: [`PhysicsTestMotionResult3D`](class_physicstestmotionresult3d.md) = null )             |
| [`RID`](class_rid.md)                                             | [`box_shape_create`](class_physicsserver3d.md#class_physicsserver3d_method_box_shape_create) ( )                                                                                                                                                                                                                  |
| [`RID`](class_rid.md)                                             | [`capsule_shape_create`](class_physicsserver3d.md#class_physicsserver3d_method_capsule_shape_create) ( )                                                                                                                                                                                                          |
| [`RID`](class_rid.md)                                             | [`concave_polygon_shape_create`](class_physicsserver3d.md#class_physicsserver3d_method_concave_polygon_shape_create) ( )                                                                                                                                                                                          |
| [`float`](class_float.md)                                         | [`cone_twist_joint_get_param`](class_physicsserver3d.md#class_physicsserver3d_method_cone_twist_joint_get_param) ( joint: [`RID`](class_rid.md), param: [ConeTwistJointParam](#enum_physicsserver3d_conetwistjointparam) ) const[^const]                                                                          |
| `void`                                                            | [`cone_twist_joint_set_param`](class_physicsserver3d.md#class_physicsserver3d_method_cone_twist_joint_set_param) ( joint: [`RID`](class_rid.md), param: [ConeTwistJointParam](#enum_physicsserver3d_conetwistjointparam), value: [`float`](class_float.md) )                                                      |
| [`RID`](class_rid.md)                                             | [`convex_polygon_shape_create`](class_physicsserver3d.md#class_physicsserver3d_method_convex_polygon_shape_create) ( )                                                                                                                                                                                            |
| [`RID`](class_rid.md)                                             | [`custom_shape_create`](class_physicsserver3d.md#class_physicsserver3d_method_custom_shape_create) ( )                                                                                                                                                                                                            |
| [`RID`](class_rid.md)                                             | [`cylinder_shape_create`](class_physicsserver3d.md#class_physicsserver3d_method_cylinder_shape_create) ( )                                                                                                                                                                                                        |
| `void`                                                            | [`free_rid`](class_physicsserver3d.md#class_physicsserver3d_method_free_rid) ( rid: [`RID`](class_rid.md) )                                                                                                                                                                                                       |
| [`bool`](class_bool.md)                                           | [`generic_6dof_joint_get_flag`](class_physicsserver3d.md#class_physicsserver3d_method_generic_6dof_joint_get_flag) ( joint: [`RID`](class_rid.md), axis: Vector3.Axis, flag: [G6DOFJointAxisFlag](#enum_physicsserver3d_g6dofjointaxisflag) ) const[^const]                                                       |
| [`float`](class_float.md)                                         | [`generic_6dof_joint_get_param`](class_physicsserver3d.md#class_physicsserver3d_method_generic_6dof_joint_get_param) ( joint: [`RID`](class_rid.md), axis: Vector3.Axis, param: [G6DOFJointAxisParam](#enum_physicsserver3d_g6dofjointaxisparam) ) const[^const]                                                  |
| `void`                                                            | [`generic_6dof_joint_set_flag`](class_physicsserver3d.md#class_physicsserver3d_method_generic_6dof_joint_set_flag) ( joint: [`RID`](class_rid.md), axis: Vector3.Axis, flag: [G6DOFJointAxisFlag](#enum_physicsserver3d_g6dofjointaxisflag), enable: [`bool`](class_bool.md) )                                    |
| `void`                                                            | [`generic_6dof_joint_set_param`](class_physicsserver3d.md#class_physicsserver3d_method_generic_6dof_joint_set_param) ( joint: [`RID`](class_rid.md), axis: Vector3.Axis, param: [G6DOFJointAxisParam](#enum_physicsserver3d_g6dofjointaxisparam), value: [`float`](class_float.md) )                              |
| [`int`](class_int.md)                                             | [`get_process_info`](class_physicsserver3d.md#class_physicsserver3d_method_get_process_info) ( process_info: [ProcessInfo](#enum_physicsserver3d_processinfo) )                                                                                                                                                   |
| [`RID`](class_rid.md)                                             | [`heightmap_shape_create`](class_physicsserver3d.md#class_physicsserver3d_method_heightmap_shape_create) ( )                                                                                                                                                                                                      |
| [`bool`](class_bool.md)                                           | [`hinge_joint_get_flag`](class_physicsserver3d.md#class_physicsserver3d_method_hinge_joint_get_flag) ( joint: [`RID`](class_rid.md), flag: [HingeJointFlag](#enum_physicsserver3d_hingejointflag) ) const[^const]                                                                                                 |
| [`float`](class_float.md)                                         | [`hinge_joint_get_param`](class_physicsserver3d.md#class_physicsserver3d_method_hinge_joint_get_param) ( joint: [`RID`](class_rid.md), param: [HingeJointParam](#enum_physicsserver3d_hingejointparam) ) const[^const]                                                                                            |
| `void`                                                            | [`hinge_joint_set_flag`](class_physicsserver3d.md#class_physicsserver3d_method_hinge_joint_set_flag) ( joint: [`RID`](class_rid.md), flag: [HingeJointFlag](#enum_physicsserver3d_hingejointflag), enabled: [`bool`](class_bool.md) )                                                                             |
| `void`                                                            | [`hinge_joint_set_param`](class_physicsserver3d.md#class_physicsserver3d_method_hinge_joint_set_param) ( joint: [`RID`](class_rid.md), param: [HingeJointParam](#enum_physicsserver3d_hingejointparam), value: [`float`](class_float.md) )                                                                        |
| `void`                                                            | [`joint_clear`](class_physicsserver3d.md#class_physicsserver3d_method_joint_clear) ( joint: [`RID`](class_rid.md) )                                                                                                                                                                                               |
| [`RID`](class_rid.md)                                             | [`joint_create`](class_physicsserver3d.md#class_physicsserver3d_method_joint_create) ( )                                                                                                                                                                                                                          |
| `void`                                                            | [`joint_disable_collisions_between_bodies`](class_physicsserver3d.md#class_physicsserver3d_method_joint_disable_collisions_between_bodies) ( joint: [`RID`](class_rid.md), disable: [`bool`](class_bool.md) )                                                                                                     |
| [`int`](class_int.md)                                             | [`joint_get_solver_priority`](class_physicsserver3d.md#class_physicsserver3d_method_joint_get_solver_priority) ( joint: [`RID`](class_rid.md) ) const[^const]                                                                                                                                                     |
| [JointType](#enum_physicsserver3d_jointtype)                      | [`joint_get_type`](class_physicsserver3d.md#class_physicsserver3d_method_joint_get_type) ( joint: [`RID`](class_rid.md) ) const[^const]                                                                                                                                                                           |
| [`bool`](class_bool.md)                                           | [`joint_is_disabled_collisions_between_bodies`](class_physicsserver3d.md#class_physicsserver3d_method_joint_is_disabled_collisions_between_bodies) ( joint: [`RID`](class_rid.md) ) const[^const]                                                                                                                 |
| `void`                                                            | [`joint_make_cone_twist`](class_physicsserver3d.md#class_physicsserver3d_method_joint_make_cone_twist) ( joint: [`RID`](class_rid.md), body_A: [`RID`](class_rid.md), local_ref_A: [`Transform3D`](class_transform3d.md), body_B: [`RID`](class_rid.md), local_ref_B: [`Transform3D`](class_transform3d.md) )     |
| `void`                                                            | [`joint_make_generic_6dof`](class_physicsserver3d.md#class_physicsserver3d_method_joint_make_generic_6dof) ( joint: [`RID`](class_rid.md), body_A: [`RID`](class_rid.md), local_ref_A: [`Transform3D`](class_transform3d.md), body_B: [`RID`](class_rid.md), local_ref_B: [`Transform3D`](class_transform3d.md) ) |
| `void`                                                            | [`joint_make_hinge`](class_physicsserver3d.md#class_physicsserver3d_method_joint_make_hinge) ( joint: [`RID`](class_rid.md), body_A: [`RID`](class_rid.md), hinge_A: [`Transform3D`](class_transform3d.md), body_B: [`RID`](class_rid.md), hinge_B: [`Transform3D`](class_transform3d.md) )                       |
| `void`                                                            | [`joint_make_pin`](class_physicsserver3d.md#class_physicsserver3d_method_joint_make_pin) ( joint: [`RID`](class_rid.md), body_A: [`RID`](class_rid.md), local_A: [`Vector3`](class_vector3.md), body_B: [`RID`](class_rid.md), local_B: [`Vector3`](class_vector3.md) )                                           |
| `void`                                                            | [`joint_make_slider`](class_physicsserver3d.md#class_physicsserver3d_method_joint_make_slider) ( joint: [`RID`](class_rid.md), body_A: [`RID`](class_rid.md), local_ref_A: [`Transform3D`](class_transform3d.md), body_B: [`RID`](class_rid.md), local_ref_B: [`Transform3D`](class_transform3d.md) )             |
| `void`                                                            | [`joint_set_solver_priority`](class_physicsserver3d.md#class_physicsserver3d_method_joint_set_solver_priority) ( joint: [`RID`](class_rid.md), priority: [`int`](class_int.md) )                                                                                                                                  |
| [`Vector3`](class_vector3.md)                                     | [`pin_joint_get_local_a`](class_physicsserver3d.md#class_physicsserver3d_method_pin_joint_get_local_a) ( joint: [`RID`](class_rid.md) ) const[^const]                                                                                                                                                             |
| [`Vector3`](class_vector3.md)                                     | [`pin_joint_get_local_b`](class_physicsserver3d.md#class_physicsserver3d_method_pin_joint_get_local_b) ( joint: [`RID`](class_rid.md) ) const[^const]                                                                                                                                                             |
| [`float`](class_float.md)                                         | [`pin_joint_get_param`](class_physicsserver3d.md#class_physicsserver3d_method_pin_joint_get_param) ( joint: [`RID`](class_rid.md), param: [PinJointParam](#enum_physicsserver3d_pinjointparam) ) const[^const]                                                                                                    |
| `void`                                                            | [`pin_joint_set_local_a`](class_physicsserver3d.md#class_physicsserver3d_method_pin_joint_set_local_a) ( joint: [`RID`](class_rid.md), local_A: [`Vector3`](class_vector3.md) )                                                                                                                                   |
| `void`                                                            | [`pin_joint_set_local_b`](class_physicsserver3d.md#class_physicsserver3d_method_pin_joint_set_local_b) ( joint: [`RID`](class_rid.md), local_B: [`Vector3`](class_vector3.md) )                                                                                                                                   |
| `void`                                                            | [`pin_joint_set_param`](class_physicsserver3d.md#class_physicsserver3d_method_pin_joint_set_param) ( joint: [`RID`](class_rid.md), param: [PinJointParam](#enum_physicsserver3d_pinjointparam), value: [`float`](class_float.md) )                                                                                |
| [`RID`](class_rid.md)                                             | [`separation_ray_shape_create`](class_physicsserver3d.md#class_physicsserver3d_method_separation_ray_shape_create) ( )                                                                                                                                                                                            |
| `void`                                                            | [`set_active`](class_physicsserver3d.md#class_physicsserver3d_method_set_active) ( active: [`bool`](class_bool.md) )                                                                                                                                                                                              |
| [`Variant`](class_variant.md)                                     | [`shape_get_data`](class_physicsserver3d.md#class_physicsserver3d_method_shape_get_data) ( shape: [`RID`](class_rid.md) ) const[^const]                                                                                                                                                                           |
| [`float`](class_float.md)                                         | [`shape_get_margin`](class_physicsserver3d.md#class_physicsserver3d_method_shape_get_margin) ( shape: [`RID`](class_rid.md) ) const[^const]                                                                                                                                                                       |
| [ShapeType](#enum_physicsserver3d_shapetype)                      | [`shape_get_type`](class_physicsserver3d.md#class_physicsserver3d_method_shape_get_type) ( shape: [`RID`](class_rid.md) ) const[^const]                                                                                                                                                                           |
| `void`                                                            | [`shape_set_data`](class_physicsserver3d.md#class_physicsserver3d_method_shape_set_data) ( shape: [`RID`](class_rid.md), data: [`Variant`](class_variant.md) )                                                                                                                                                    |
| `void`                                                            | [`shape_set_margin`](class_physicsserver3d.md#class_physicsserver3d_method_shape_set_margin) ( shape: [`RID`](class_rid.md), margin: [`float`](class_float.md) )                                                                                                                                                  |
| [`float`](class_float.md)                                         | [`slider_joint_get_param`](class_physicsserver3d.md#class_physicsserver3d_method_slider_joint_get_param) ( joint: [`RID`](class_rid.md), param: [SliderJointParam](#enum_physicsserver3d_sliderjointparam) ) const[^const]                                                                                        |
| `void`                                                            | [`slider_joint_set_param`](class_physicsserver3d.md#class_physicsserver3d_method_slider_joint_set_param) ( joint: [`RID`](class_rid.md), param: [SliderJointParam](#enum_physicsserver3d_sliderjointparam), value: [`float`](class_float.md) )                                                                    |
| `void`                                                            | [`soft_body_add_collision_exception`](class_physicsserver3d.md#class_physicsserver3d_method_soft_body_add_collision_exception) ( body: [`RID`](class_rid.md), body_b: [`RID`](class_rid.md) )                                                                                                                     |
| [`RID`](class_rid.md)                                             | [`soft_body_create`](class_physicsserver3d.md#class_physicsserver3d_method_soft_body_create) ( )                                                                                                                                                                                                                  |
| [`AABB`](class_aabb.md)                                           | [`soft_body_get_bounds`](class_physicsserver3d.md#class_physicsserver3d_method_soft_body_get_bounds) ( body: [`RID`](class_rid.md) ) const[^const]                                                                                                                                                                |
| [`int`](class_int.md)                                             | [`soft_body_get_collision_layer`](class_physicsserver3d.md#class_physicsserver3d_method_soft_body_get_collision_layer) ( body: [`RID`](class_rid.md) ) const[^const]                                                                                                                                              |
| [`int`](class_int.md)                                             | [`soft_body_get_collision_mask`](class_physicsserver3d.md#class_physicsserver3d_method_soft_body_get_collision_mask) ( body: [`RID`](class_rid.md) ) const[^const]                                                                                                                                                |
| [`float`](class_float.md)                                         | [`soft_body_get_damping_coefficient`](class_physicsserver3d.md#class_physicsserver3d_method_soft_body_get_damping_coefficient) ( body: [`RID`](class_rid.md) ) const[^const]                                                                                                                                      |
| [`float`](class_float.md)                                         | [`soft_body_get_drag_coefficient`](class_physicsserver3d.md#class_physicsserver3d_method_soft_body_get_drag_coefficient) ( body: [`RID`](class_rid.md) ) const[^const]                                                                                                                                            |
| [`float`](class_float.md)                                         | [`soft_body_get_linear_stiffness`](class_physicsserver3d.md#class_physicsserver3d_method_soft_body_get_linear_stiffness) ( body: [`RID`](class_rid.md) ) const[^const]                                                                                                                                            |
| [`Vector3`](class_vector3.md)                                     | [`soft_body_get_point_global_position`](class_physicsserver3d.md#class_physicsserver3d_method_soft_body_get_point_global_position) ( body: [`RID`](class_rid.md), point_index: [`int`](class_int.md) ) const[^const]                                                                                              |
| [`float`](class_float.md)                                         | [`soft_body_get_pressure_coefficient`](class_physicsserver3d.md#class_physicsserver3d_method_soft_body_get_pressure_coefficient) ( body: [`RID`](class_rid.md) ) const[^const]                                                                                                                                    |
| [`int`](class_int.md)                                             | [`soft_body_get_simulation_precision`](class_physicsserver3d.md#class_physicsserver3d_method_soft_body_get_simulation_precision) ( body: [`RID`](class_rid.md) ) const[^const]                                                                                                                                    |
| [`RID`](class_rid.md)                                             | [`soft_body_get_space`](class_physicsserver3d.md#class_physicsserver3d_method_soft_body_get_space) ( body: [`RID`](class_rid.md) ) const[^const]                                                                                                                                                                  |
| [`Variant`](class_variant.md)                                     | [`soft_body_get_state`](class_physicsserver3d.md#class_physicsserver3d_method_soft_body_get_state) ( body: [`RID`](class_rid.md), state: [BodyState](#enum_physicsserver3d_bodystate) ) const[^const]                                                                                                             |
| [`float`](class_float.md)                                         | [`soft_body_get_total_mass`](class_physicsserver3d.md#class_physicsserver3d_method_soft_body_get_total_mass) ( body: [`RID`](class_rid.md) ) const[^const]                                                                                                                                                        |
| [`bool`](class_bool.md)                                           | [`soft_body_is_point_pinned`](class_physicsserver3d.md#class_physicsserver3d_method_soft_body_is_point_pinned) ( body: [`RID`](class_rid.md), point_index: [`int`](class_int.md) ) const[^const]                                                                                                                  |
| `void`                                                            | [`soft_body_move_point`](class_physicsserver3d.md#class_physicsserver3d_method_soft_body_move_point) ( body: [`RID`](class_rid.md), point_index: [`int`](class_int.md), global_position: [`Vector3`](class_vector3.md) )                                                                                          |
| `void`                                                            | [`soft_body_pin_point`](class_physicsserver3d.md#class_physicsserver3d_method_soft_body_pin_point) ( body: [`RID`](class_rid.md), point_index: [`int`](class_int.md), pin: [`bool`](class_bool.md) )                                                                                                              |
| `void`                                                            | [`soft_body_remove_all_pinned_points`](class_physicsserver3d.md#class_physicsserver3d_method_soft_body_remove_all_pinned_points) ( body: [`RID`](class_rid.md) )                                                                                                                                                  |
| `void`                                                            | [`soft_body_remove_collision_exception`](class_physicsserver3d.md#class_physicsserver3d_method_soft_body_remove_collision_exception) ( body: [`RID`](class_rid.md), body_b: [`RID`](class_rid.md) )                                                                                                               |
| `void`                                                            | [`soft_body_set_collision_layer`](class_physicsserver3d.md#class_physicsserver3d_method_soft_body_set_collision_layer) ( body: [`RID`](class_rid.md), layer: [`int`](class_int.md) )                                                                                                                              |
| `void`                                                            | [`soft_body_set_collision_mask`](class_physicsserver3d.md#class_physicsserver3d_method_soft_body_set_collision_mask) ( body: [`RID`](class_rid.md), mask: [`int`](class_int.md) )                                                                                                                                 |
| `void`                                                            | [`soft_body_set_damping_coefficient`](class_physicsserver3d.md#class_physicsserver3d_method_soft_body_set_damping_coefficient) ( body: [`RID`](class_rid.md), damping_coefficient: [`float`](class_float.md) )                                                                                                    |
| `void`                                                            | [`soft_body_set_drag_coefficient`](class_physicsserver3d.md#class_physicsserver3d_method_soft_body_set_drag_coefficient) ( body: [`RID`](class_rid.md), drag_coefficient: [`float`](class_float.md) )                                                                                                             |
| `void`                                                            | [`soft_body_set_linear_stiffness`](class_physicsserver3d.md#class_physicsserver3d_method_soft_body_set_linear_stiffness) ( body: [`RID`](class_rid.md), stiffness: [`float`](class_float.md) )                                                                                                                    |
| `void`                                                            | [`soft_body_set_mesh`](class_physicsserver3d.md#class_physicsserver3d_method_soft_body_set_mesh) ( body: [`RID`](class_rid.md), mesh: [`RID`](class_rid.md) )                                                                                                                                                     |
| `void`                                                            | [`soft_body_set_pressure_coefficient`](class_physicsserver3d.md#class_physicsserver3d_method_soft_body_set_pressure_coefficient) ( body: [`RID`](class_rid.md), pressure_coefficient: [`float`](class_float.md) )                                                                                                 |
| `void`                                                            | [`soft_body_set_ray_pickable`](class_physicsserver3d.md#class_physicsserver3d_method_soft_body_set_ray_pickable) ( body: [`RID`](class_rid.md), enable: [`bool`](class_bool.md) )                                                                                                                                 |
| `void`                                                            | [`soft_body_set_simulation_precision`](class_physicsserver3d.md#class_physicsserver3d_method_soft_body_set_simulation_precision) ( body: [`RID`](class_rid.md), simulation_precision: [`int`](class_int.md) )                                                                                                     |
| `void`                                                            | [`soft_body_set_space`](class_physicsserver3d.md#class_physicsserver3d_method_soft_body_set_space) ( body: [`RID`](class_rid.md), space: [`RID`](class_rid.md) )                                                                                                                                                  |
| `void`                                                            | [`soft_body_set_state`](class_physicsserver3d.md#class_physicsserver3d_method_soft_body_set_state) ( body: [`RID`](class_rid.md), state: [BodyState](#enum_physicsserver3d_bodystate), variant: [`Variant`](class_variant.md) )                                                                                   |
| `void`                                                            | [`soft_body_set_total_mass`](class_physicsserver3d.md#class_physicsserver3d_method_soft_body_set_total_mass) ( body: [`RID`](class_rid.md), total_mass: [`float`](class_float.md) )                                                                                                                               |
| `void`                                                            | [`soft_body_set_transform`](class_physicsserver3d.md#class_physicsserver3d_method_soft_body_set_transform) ( body: [`RID`](class_rid.md), transform: [`Transform3D`](class_transform3d.md) )                                                                                                                      |
| `void`                                                            | [`soft_body_update_rendering_server`](class_physicsserver3d.md#class_physicsserver3d_method_soft_body_update_rendering_server) ( body: [`RID`](class_rid.md), rendering_server_handler: [`PhysicsServer3DRenderingServerHandler`](class_physicsserver3drenderingserverhandler.md) )                               |
| [`RID`](class_rid.md)                                             | [`space_create`](class_physicsserver3d.md#class_physicsserver3d_method_space_create) ( )                                                                                                                                                                                                                          |
| [`PhysicsDirectSpaceState3D`](class_physicsdirectspacestate3d.md) | [`space_get_direct_state`](class_physicsserver3d.md#class_physicsserver3d_method_space_get_direct_state) ( space: [`RID`](class_rid.md) )                                                                                                                                                                         |
| [`float`](class_float.md)                                         | [`space_get_param`](class_physicsserver3d.md#class_physicsserver3d_method_space_get_param) ( space: [`RID`](class_rid.md), param: [SpaceParameter](#enum_physicsserver3d_spaceparameter) ) const[^const]                                                                                                          |
| [`bool`](class_bool.md)                                           | [`space_is_active`](class_physicsserver3d.md#class_physicsserver3d_method_space_is_active) ( space: [`RID`](class_rid.md) ) const[^const]                                                                                                                                                                         |
| `void`                                                            | [`space_set_active`](class_physicsserver3d.md#class_physicsserver3d_method_space_set_active) ( space: [`RID`](class_rid.md), active: [`bool`](class_bool.md) )                                                                                                                                                    |
| `void`                                                            | [`space_set_param`](class_physicsserver3d.md#class_physicsserver3d_method_space_set_param) ( space: [`RID`](class_rid.md), param: [SpaceParameter](#enum_physicsserver3d_spaceparameter), value: [`float`](class_float.md) )                                                                                      |
| [`RID`](class_rid.md)                                             | [`sphere_shape_create`](class_physicsserver3d.md#class_physicsserver3d_method_sphere_shape_create) ( )                                                                                                                                                                                                            |
| [`RID`](class_rid.md)                                             | [`world_boundary_shape_create`](class_physicsserver3d.md#class_physicsserver3d_method_world_boundary_shape_create) ( )                                                                                                                                                                                            |

<!-- rst-class:: classref-section-separator -->

---

## 枚举

<div id="_class_enum_physicsserver3d_jointtype"></div>

enum **JointType**: <div id="enum_physicsserver3d_jointtype"></div>

<div id="_class_physicsserver3d_constant_joint_type_pin"></div>

[JointType](#enum_physicsserver3d_jointtype) **JOINT_TYPE_PIN** = ``0``

The [`Joint3D`](class_joint3d.md) is a [`PinJoint3D`](class_pinjoint3d.md).

<div id="_class_physicsserver3d_constant_joint_type_hinge"></div>

[JointType](#enum_physicsserver3d_jointtype) **JOINT_TYPE_HINGE** = ``1``

The [`Joint3D`](class_joint3d.md) is a [`HingeJoint3D`](class_hingejoint3d.md).

<div id="_class_physicsserver3d_constant_joint_type_slider"></div>

[JointType](#enum_physicsserver3d_jointtype) **JOINT_TYPE_SLIDER** = ``2``

The [`Joint3D`](class_joint3d.md) is a [`SliderJoint3D`](class_sliderjoint3d.md).

<div id="_class_physicsserver3d_constant_joint_type_cone_twist"></div>

[JointType](#enum_physicsserver3d_jointtype) **JOINT_TYPE_CONE_TWIST** = ``3``

The [`Joint3D`](class_joint3d.md) is a [`ConeTwistJoint3D`](class_conetwistjoint3d.md).

<div id="_class_physicsserver3d_constant_joint_type_6dof"></div>

[JointType](#enum_physicsserver3d_jointtype) **JOINT_TYPE_6DOF** = ``4``

The [`Joint3D`](class_joint3d.md) is a [`Generic6DOFJoint3D`](class_generic6dofjoint3d.md).

<div id="_class_physicsserver3d_constant_joint_type_max"></div>

[JointType](#enum_physicsserver3d_jointtype) **JOINT_TYPE_MAX** = ``5``

Represents the size of the [JointType](#enum_physicsserver3d_jointtype) enum.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_enum_physicsserver3d_pinjointparam"></div>

enum **PinJointParam**: <div id="enum_physicsserver3d_pinjointparam"></div>

<div id="_class_physicsserver3d_constant_pin_joint_bias"></div>

[PinJointParam](#enum_physicsserver3d_pinjointparam) **PIN_JOINT_BIAS** = ``0``

The strength with which the pinned objects try to stay in positional relation to each other.

The higher, the stronger.

<div id="_class_physicsserver3d_constant_pin_joint_damping"></div>

[PinJointParam](#enum_physicsserver3d_pinjointparam) **PIN_JOINT_DAMPING** = ``1``

The strength with which the pinned objects try to stay in velocity relation to each other.

The higher, the stronger.

<div id="_class_physicsserver3d_constant_pin_joint_impulse_clamp"></div>

[PinJointParam](#enum_physicsserver3d_pinjointparam) **PIN_JOINT_IMPULSE_CLAMP** = ``2``

If above 0, this value is the maximum value for an impulse that this Joint3D puts on its ends.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_enum_physicsserver3d_hingejointparam"></div>

enum **HingeJointParam**: <div id="enum_physicsserver3d_hingejointparam"></div>

<div id="_class_physicsserver3d_constant_hinge_joint_bias"></div>

[HingeJointParam](#enum_physicsserver3d_hingejointparam) **HINGE_JOINT_BIAS** = ``0``

The speed with which the two bodies get pulled together when they move in different directions.

<div id="_class_physicsserver3d_constant_hinge_joint_limit_upper"></div>

[HingeJointParam](#enum_physicsserver3d_hingejointparam) **HINGE_JOINT_LIMIT_UPPER** = ``1``

The maximum rotation across the Hinge.

<div id="_class_physicsserver3d_constant_hinge_joint_limit_lower"></div>

[HingeJointParam](#enum_physicsserver3d_hingejointparam) **HINGE_JOINT_LIMIT_LOWER** = ``2``

The minimum rotation across the Hinge.

<div id="_class_physicsserver3d_constant_hinge_joint_limit_bias"></div>

[HingeJointParam](#enum_physicsserver3d_hingejointparam) **HINGE_JOINT_LIMIT_BIAS** = ``3``

The speed with which the rotation across the axis perpendicular to the hinge gets corrected.

<div id="_class_physicsserver3d_constant_hinge_joint_limit_softness"></div>

[HingeJointParam](#enum_physicsserver3d_hingejointparam) **HINGE_JOINT_LIMIT_SOFTNESS** = ``4``

该枚举目前没有描述，请帮我们\ :ref:`贡献一个 <doc_updating_the_class_reference>`\ 吧！



<div id="_class_physicsserver3d_constant_hinge_joint_limit_relaxation"></div>

[HingeJointParam](#enum_physicsserver3d_hingejointparam) **HINGE_JOINT_LIMIT_RELAXATION** = ``5``

The lower this value, the more the rotation gets slowed down.

<div id="_class_physicsserver3d_constant_hinge_joint_motor_target_velocity"></div>

[HingeJointParam](#enum_physicsserver3d_hingejointparam) **HINGE_JOINT_MOTOR_TARGET_VELOCITY** = ``6``

Target speed for the motor.

<div id="_class_physicsserver3d_constant_hinge_joint_motor_max_impulse"></div>

[HingeJointParam](#enum_physicsserver3d_hingejointparam) **HINGE_JOINT_MOTOR_MAX_IMPULSE** = ``7``

Maximum acceleration for the motor.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_enum_physicsserver3d_hingejointflag"></div>

enum **HingeJointFlag**: <div id="enum_physicsserver3d_hingejointflag"></div>

<div id="_class_physicsserver3d_constant_hinge_joint_flag_use_limit"></div>

[HingeJointFlag](#enum_physicsserver3d_hingejointflag) **HINGE_JOINT_FLAG_USE_LIMIT** = ``0``

If `true`, the Hinge has a maximum and a minimum rotation.

<div id="_class_physicsserver3d_constant_hinge_joint_flag_enable_motor"></div>

[HingeJointFlag](#enum_physicsserver3d_hingejointflag) **HINGE_JOINT_FLAG_ENABLE_MOTOR** = ``1``

If `true`, a motor turns the Hinge.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_enum_physicsserver3d_sliderjointparam"></div>

enum **SliderJointParam**: <div id="enum_physicsserver3d_sliderjointparam"></div>

<div id="_class_physicsserver3d_constant_slider_joint_linear_limit_upper"></div>

[SliderJointParam](#enum_physicsserver3d_sliderjointparam) **SLIDER_JOINT_LINEAR_LIMIT_UPPER** = ``0``

The maximum difference between the pivot points on their X axis before damping happens.

<div id="_class_physicsserver3d_constant_slider_joint_linear_limit_lower"></div>

[SliderJointParam](#enum_physicsserver3d_sliderjointparam) **SLIDER_JOINT_LINEAR_LIMIT_LOWER** = ``1``

The minimum difference between the pivot points on their X axis before damping happens.

<div id="_class_physicsserver3d_constant_slider_joint_linear_limit_softness"></div>

[SliderJointParam](#enum_physicsserver3d_sliderjointparam) **SLIDER_JOINT_LINEAR_LIMIT_SOFTNESS** = ``2``

A factor applied to the movement across the slider axis once the limits get surpassed. The lower, the slower the movement.

<div id="_class_physicsserver3d_constant_slider_joint_linear_limit_restitution"></div>

[SliderJointParam](#enum_physicsserver3d_sliderjointparam) **SLIDER_JOINT_LINEAR_LIMIT_RESTITUTION** = ``3``

The amount of restitution once the limits are surpassed. The lower, the more velocity-energy gets lost.

<div id="_class_physicsserver3d_constant_slider_joint_linear_limit_damping"></div>

[SliderJointParam](#enum_physicsserver3d_sliderjointparam) **SLIDER_JOINT_LINEAR_LIMIT_DAMPING** = ``4``

The amount of damping once the slider limits are surpassed.

<div id="_class_physicsserver3d_constant_slider_joint_linear_motion_softness"></div>

[SliderJointParam](#enum_physicsserver3d_sliderjointparam) **SLIDER_JOINT_LINEAR_MOTION_SOFTNESS** = ``5``

A factor applied to the movement across the slider axis as long as the slider is in the limits. The lower, the slower the movement.

<div id="_class_physicsserver3d_constant_slider_joint_linear_motion_restitution"></div>

[SliderJointParam](#enum_physicsserver3d_sliderjointparam) **SLIDER_JOINT_LINEAR_MOTION_RESTITUTION** = ``6``

The amount of restitution inside the slider limits.

<div id="_class_physicsserver3d_constant_slider_joint_linear_motion_damping"></div>

[SliderJointParam](#enum_physicsserver3d_sliderjointparam) **SLIDER_JOINT_LINEAR_MOTION_DAMPING** = ``7``

The amount of damping inside the slider limits.

<div id="_class_physicsserver3d_constant_slider_joint_linear_orthogonal_softness"></div>

[SliderJointParam](#enum_physicsserver3d_sliderjointparam) **SLIDER_JOINT_LINEAR_ORTHOGONAL_SOFTNESS** = ``8``

A factor applied to the movement across axes orthogonal to the slider.

<div id="_class_physicsserver3d_constant_slider_joint_linear_orthogonal_restitution"></div>

[SliderJointParam](#enum_physicsserver3d_sliderjointparam) **SLIDER_JOINT_LINEAR_ORTHOGONAL_RESTITUTION** = ``9``

The amount of restitution when movement is across axes orthogonal to the slider.

<div id="_class_physicsserver3d_constant_slider_joint_linear_orthogonal_damping"></div>

[SliderJointParam](#enum_physicsserver3d_sliderjointparam) **SLIDER_JOINT_LINEAR_ORTHOGONAL_DAMPING** = ``10``

The amount of damping when movement is across axes orthogonal to the slider.

<div id="_class_physicsserver3d_constant_slider_joint_angular_limit_upper"></div>

[SliderJointParam](#enum_physicsserver3d_sliderjointparam) **SLIDER_JOINT_ANGULAR_LIMIT_UPPER** = ``11``

The upper limit of rotation in the slider.

<div id="_class_physicsserver3d_constant_slider_joint_angular_limit_lower"></div>

[SliderJointParam](#enum_physicsserver3d_sliderjointparam) **SLIDER_JOINT_ANGULAR_LIMIT_LOWER** = ``12``

The lower limit of rotation in the slider.

<div id="_class_physicsserver3d_constant_slider_joint_angular_limit_softness"></div>

[SliderJointParam](#enum_physicsserver3d_sliderjointparam) **SLIDER_JOINT_ANGULAR_LIMIT_SOFTNESS** = ``13``

A factor applied to the all rotation once the limit is surpassed.

<div id="_class_physicsserver3d_constant_slider_joint_angular_limit_restitution"></div>

[SliderJointParam](#enum_physicsserver3d_sliderjointparam) **SLIDER_JOINT_ANGULAR_LIMIT_RESTITUTION** = ``14``

The amount of restitution of the rotation when the limit is surpassed.

<div id="_class_physicsserver3d_constant_slider_joint_angular_limit_damping"></div>

[SliderJointParam](#enum_physicsserver3d_sliderjointparam) **SLIDER_JOINT_ANGULAR_LIMIT_DAMPING** = ``15``

The amount of damping of the rotation when the limit is surpassed.

<div id="_class_physicsserver3d_constant_slider_joint_angular_motion_softness"></div>

[SliderJointParam](#enum_physicsserver3d_sliderjointparam) **SLIDER_JOINT_ANGULAR_MOTION_SOFTNESS** = ``16``

A factor that gets applied to the all rotation in the limits.

<div id="_class_physicsserver3d_constant_slider_joint_angular_motion_restitution"></div>

[SliderJointParam](#enum_physicsserver3d_sliderjointparam) **SLIDER_JOINT_ANGULAR_MOTION_RESTITUTION** = ``17``

The amount of restitution of the rotation in the limits.

<div id="_class_physicsserver3d_constant_slider_joint_angular_motion_damping"></div>

[SliderJointParam](#enum_physicsserver3d_sliderjointparam) **SLIDER_JOINT_ANGULAR_MOTION_DAMPING** = ``18``

The amount of damping of the rotation in the limits.

<div id="_class_physicsserver3d_constant_slider_joint_angular_orthogonal_softness"></div>

[SliderJointParam](#enum_physicsserver3d_sliderjointparam) **SLIDER_JOINT_ANGULAR_ORTHOGONAL_SOFTNESS** = ``19``

A factor that gets applied to the all rotation across axes orthogonal to the slider.

<div id="_class_physicsserver3d_constant_slider_joint_angular_orthogonal_restitution"></div>

[SliderJointParam](#enum_physicsserver3d_sliderjointparam) **SLIDER_JOINT_ANGULAR_ORTHOGONAL_RESTITUTION** = ``20``

The amount of restitution of the rotation across axes orthogonal to the slider.

<div id="_class_physicsserver3d_constant_slider_joint_angular_orthogonal_damping"></div>

[SliderJointParam](#enum_physicsserver3d_sliderjointparam) **SLIDER_JOINT_ANGULAR_ORTHOGONAL_DAMPING** = ``21``

The amount of damping of the rotation across axes orthogonal to the slider.

<div id="_class_physicsserver3d_constant_slider_joint_max"></div>

[SliderJointParam](#enum_physicsserver3d_sliderjointparam) **SLIDER_JOINT_MAX** = ``22``

Represents the size of the [SliderJointParam](#enum_physicsserver3d_sliderjointparam) enum.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_enum_physicsserver3d_conetwistjointparam"></div>

enum **ConeTwistJointParam**: <div id="enum_physicsserver3d_conetwistjointparam"></div>

<div id="_class_physicsserver3d_constant_cone_twist_joint_swing_span"></div>

[ConeTwistJointParam](#enum_physicsserver3d_conetwistjointparam) **CONE_TWIST_JOINT_SWING_SPAN** = ``0``

Swing is rotation from side to side, around the axis perpendicular to the twist axis.

The swing span defines, how much rotation will not get corrected along the swing axis.

Could be defined as looseness in the [`ConeTwistJoint3D`](class_conetwistjoint3d.md).

If below 0.05, this behavior is locked.

<div id="_class_physicsserver3d_constant_cone_twist_joint_twist_span"></div>

[ConeTwistJointParam](#enum_physicsserver3d_conetwistjointparam) **CONE_TWIST_JOINT_TWIST_SPAN** = ``1``

Twist is the rotation around the twist axis, this value defined how far the joint can twist.

Twist is locked if below 0.05.

<div id="_class_physicsserver3d_constant_cone_twist_joint_bias"></div>

[ConeTwistJointParam](#enum_physicsserver3d_conetwistjointparam) **CONE_TWIST_JOINT_BIAS** = ``2``

The speed with which the swing or twist will take place.

The higher, the faster.

<div id="_class_physicsserver3d_constant_cone_twist_joint_softness"></div>

[ConeTwistJointParam](#enum_physicsserver3d_conetwistjointparam) **CONE_TWIST_JOINT_SOFTNESS** = ``3``

The ease with which the Joint3D twists, if it's too low, it takes more force to twist the joint.

<div id="_class_physicsserver3d_constant_cone_twist_joint_relaxation"></div>

[ConeTwistJointParam](#enum_physicsserver3d_conetwistjointparam) **CONE_TWIST_JOINT_RELAXATION** = ``4``

Defines, how fast the swing- and twist-speed-difference on both sides gets synced.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_enum_physicsserver3d_g6dofjointaxisparam"></div>

enum **G6DOFJointAxisParam**: <div id="enum_physicsserver3d_g6dofjointaxisparam"></div>

<div id="_class_physicsserver3d_constant_g6dof_joint_linear_lower_limit"></div>

[G6DOFJointAxisParam](#enum_physicsserver3d_g6dofjointaxisparam) **G6DOF_JOINT_LINEAR_LOWER_LIMIT** = ``0``

The minimum difference between the pivot points' axes.

<div id="_class_physicsserver3d_constant_g6dof_joint_linear_upper_limit"></div>

[G6DOFJointAxisParam](#enum_physicsserver3d_g6dofjointaxisparam) **G6DOF_JOINT_LINEAR_UPPER_LIMIT** = ``1``

The maximum difference between the pivot points' axes.

<div id="_class_physicsserver3d_constant_g6dof_joint_linear_limit_softness"></div>

[G6DOFJointAxisParam](#enum_physicsserver3d_g6dofjointaxisparam) **G6DOF_JOINT_LINEAR_LIMIT_SOFTNESS** = ``2``

A factor that gets applied to the movement across the axes. The lower, the slower the movement.

<div id="_class_physicsserver3d_constant_g6dof_joint_linear_restitution"></div>

[G6DOFJointAxisParam](#enum_physicsserver3d_g6dofjointaxisparam) **G6DOF_JOINT_LINEAR_RESTITUTION** = ``3``

The amount of restitution on the axes movement. The lower, the more velocity-energy gets lost.

<div id="_class_physicsserver3d_constant_g6dof_joint_linear_damping"></div>

[G6DOFJointAxisParam](#enum_physicsserver3d_g6dofjointaxisparam) **G6DOF_JOINT_LINEAR_DAMPING** = ``4``

The amount of damping that happens at the linear motion across the axes.

<div id="_class_physicsserver3d_constant_g6dof_joint_linear_motor_target_velocity"></div>

[G6DOFJointAxisParam](#enum_physicsserver3d_g6dofjointaxisparam) **G6DOF_JOINT_LINEAR_MOTOR_TARGET_VELOCITY** = ``5``

The velocity that the joint's linear motor will attempt to reach.

<div id="_class_physicsserver3d_constant_g6dof_joint_linear_motor_force_limit"></div>

[G6DOFJointAxisParam](#enum_physicsserver3d_g6dofjointaxisparam) **G6DOF_JOINT_LINEAR_MOTOR_FORCE_LIMIT** = ``6``

The maximum force that the linear motor can apply while trying to reach the target velocity.

<div id="_class_physicsserver3d_constant_g6dof_joint_linear_spring_stiffness"></div>

[G6DOFJointAxisParam](#enum_physicsserver3d_g6dofjointaxisparam) **G6DOF_JOINT_LINEAR_SPRING_STIFFNESS** = ``7``

该枚举目前没有描述，请帮我们\ :ref:`贡献一个 <doc_updating_the_class_reference>`\ 吧！



<div id="_class_physicsserver3d_constant_g6dof_joint_linear_spring_damping"></div>

[G6DOFJointAxisParam](#enum_physicsserver3d_g6dofjointaxisparam) **G6DOF_JOINT_LINEAR_SPRING_DAMPING** = ``8``

该枚举目前没有描述，请帮我们\ :ref:`贡献一个 <doc_updating_the_class_reference>`\ 吧！



<div id="_class_physicsserver3d_constant_g6dof_joint_linear_spring_equilibrium_point"></div>

[G6DOFJointAxisParam](#enum_physicsserver3d_g6dofjointaxisparam) **G6DOF_JOINT_LINEAR_SPRING_EQUILIBRIUM_POINT** = ``9``

该枚举目前没有描述，请帮我们\ :ref:`贡献一个 <doc_updating_the_class_reference>`\ 吧！



<div id="_class_physicsserver3d_constant_g6dof_joint_angular_lower_limit"></div>

[G6DOFJointAxisParam](#enum_physicsserver3d_g6dofjointaxisparam) **G6DOF_JOINT_ANGULAR_LOWER_LIMIT** = ``10``

The minimum rotation in negative direction to break loose and rotate around the axes.

<div id="_class_physicsserver3d_constant_g6dof_joint_angular_upper_limit"></div>

[G6DOFJointAxisParam](#enum_physicsserver3d_g6dofjointaxisparam) **G6DOF_JOINT_ANGULAR_UPPER_LIMIT** = ``11``

The minimum rotation in positive direction to break loose and rotate around the axes.

<div id="_class_physicsserver3d_constant_g6dof_joint_angular_limit_softness"></div>

[G6DOFJointAxisParam](#enum_physicsserver3d_g6dofjointaxisparam) **G6DOF_JOINT_ANGULAR_LIMIT_SOFTNESS** = ``12``

A factor that gets multiplied onto all rotations across the axes.

<div id="_class_physicsserver3d_constant_g6dof_joint_angular_damping"></div>

[G6DOFJointAxisParam](#enum_physicsserver3d_g6dofjointaxisparam) **G6DOF_JOINT_ANGULAR_DAMPING** = ``13``

The amount of rotational damping across the axes. The lower, the more damping occurs.

<div id="_class_physicsserver3d_constant_g6dof_joint_angular_restitution"></div>

[G6DOFJointAxisParam](#enum_physicsserver3d_g6dofjointaxisparam) **G6DOF_JOINT_ANGULAR_RESTITUTION** = ``14``

The amount of rotational restitution across the axes. The lower, the more restitution occurs.

<div id="_class_physicsserver3d_constant_g6dof_joint_angular_force_limit"></div>

[G6DOFJointAxisParam](#enum_physicsserver3d_g6dofjointaxisparam) **G6DOF_JOINT_ANGULAR_FORCE_LIMIT** = ``15``

The maximum amount of force that can occur, when rotating around the axes.

<div id="_class_physicsserver3d_constant_g6dof_joint_angular_erp"></div>

[G6DOFJointAxisParam](#enum_physicsserver3d_g6dofjointaxisparam) **G6DOF_JOINT_ANGULAR_ERP** = ``16``

When correcting the crossing of limits in rotation across the axes, this error tolerance factor defines how much the correction gets slowed down. The lower, the slower.

<div id="_class_physicsserver3d_constant_g6dof_joint_angular_motor_target_velocity"></div>

[G6DOFJointAxisParam](#enum_physicsserver3d_g6dofjointaxisparam) **G6DOF_JOINT_ANGULAR_MOTOR_TARGET_VELOCITY** = ``17``

Target speed for the motor at the axes.

<div id="_class_physicsserver3d_constant_g6dof_joint_angular_motor_force_limit"></div>

[G6DOFJointAxisParam](#enum_physicsserver3d_g6dofjointaxisparam) **G6DOF_JOINT_ANGULAR_MOTOR_FORCE_LIMIT** = ``18``

Maximum acceleration for the motor at the axes.

<div id="_class_physicsserver3d_constant_g6dof_joint_angular_spring_stiffness"></div>

[G6DOFJointAxisParam](#enum_physicsserver3d_g6dofjointaxisparam) **G6DOF_JOINT_ANGULAR_SPRING_STIFFNESS** = ``19``

该枚举目前没有描述，请帮我们\ :ref:`贡献一个 <doc_updating_the_class_reference>`\ 吧！



<div id="_class_physicsserver3d_constant_g6dof_joint_angular_spring_damping"></div>

[G6DOFJointAxisParam](#enum_physicsserver3d_g6dofjointaxisparam) **G6DOF_JOINT_ANGULAR_SPRING_DAMPING** = ``20``

该枚举目前没有描述，请帮我们\ :ref:`贡献一个 <doc_updating_the_class_reference>`\ 吧！



<div id="_class_physicsserver3d_constant_g6dof_joint_angular_spring_equilibrium_point"></div>

[G6DOFJointAxisParam](#enum_physicsserver3d_g6dofjointaxisparam) **G6DOF_JOINT_ANGULAR_SPRING_EQUILIBRIUM_POINT** = ``21``

该枚举目前没有描述，请帮我们\ :ref:`贡献一个 <doc_updating_the_class_reference>`\ 吧！



<div id="_class_physicsserver3d_constant_g6dof_joint_max"></div>

[G6DOFJointAxisParam](#enum_physicsserver3d_g6dofjointaxisparam) **G6DOF_JOINT_MAX** = ``22``

Represents the size of the [G6DOFJointAxisParam](#enum_physicsserver3d_g6dofjointaxisparam) enum.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_enum_physicsserver3d_g6dofjointaxisflag"></div>

enum **G6DOFJointAxisFlag**: <div id="enum_physicsserver3d_g6dofjointaxisflag"></div>

<div id="_class_physicsserver3d_constant_g6dof_joint_flag_enable_linear_limit"></div>

[G6DOFJointAxisFlag](#enum_physicsserver3d_g6dofjointaxisflag) **G6DOF_JOINT_FLAG_ENABLE_LINEAR_LIMIT** = ``0``

If set, linear motion is possible within the given limits.

<div id="_class_physicsserver3d_constant_g6dof_joint_flag_enable_angular_limit"></div>

[G6DOFJointAxisFlag](#enum_physicsserver3d_g6dofjointaxisflag) **G6DOF_JOINT_FLAG_ENABLE_ANGULAR_LIMIT** = ``1``

If set, rotational motion is possible.

<div id="_class_physicsserver3d_constant_g6dof_joint_flag_enable_angular_spring"></div>

[G6DOFJointAxisFlag](#enum_physicsserver3d_g6dofjointaxisflag) **G6DOF_JOINT_FLAG_ENABLE_ANGULAR_SPRING** = ``2``

该枚举目前没有描述，请帮我们\ :ref:`贡献一个 <doc_updating_the_class_reference>`\ 吧！



<div id="_class_physicsserver3d_constant_g6dof_joint_flag_enable_linear_spring"></div>

[G6DOFJointAxisFlag](#enum_physicsserver3d_g6dofjointaxisflag) **G6DOF_JOINT_FLAG_ENABLE_LINEAR_SPRING** = ``3``

该枚举目前没有描述，请帮我们\ :ref:`贡献一个 <doc_updating_the_class_reference>`\ 吧！



<div id="_class_physicsserver3d_constant_g6dof_joint_flag_enable_motor"></div>

[G6DOFJointAxisFlag](#enum_physicsserver3d_g6dofjointaxisflag) **G6DOF_JOINT_FLAG_ENABLE_MOTOR** = ``4``

If set, there is a rotational motor across these axes.

<div id="_class_physicsserver3d_constant_g6dof_joint_flag_enable_linear_motor"></div>

[G6DOFJointAxisFlag](#enum_physicsserver3d_g6dofjointaxisflag) **G6DOF_JOINT_FLAG_ENABLE_LINEAR_MOTOR** = ``5``

If set, there is a linear motor on this axis that targets a specific velocity.

<div id="_class_physicsserver3d_constant_g6dof_joint_flag_max"></div>

[G6DOFJointAxisFlag](#enum_physicsserver3d_g6dofjointaxisflag) **G6DOF_JOINT_FLAG_MAX** = ``6``

Represents the size of the [G6DOFJointAxisFlag](#enum_physicsserver3d_g6dofjointaxisflag) enum.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_enum_physicsserver3d_shapetype"></div>

enum **ShapeType**: <div id="enum_physicsserver3d_shapetype"></div>

<div id="_class_physicsserver3d_constant_shape_world_boundary"></div>

[ShapeType](#enum_physicsserver3d_shapetype) **SHAPE_WORLD_BOUNDARY** = ``0``

The [`Shape3D`](class_shape3d.md) is a [`WorldBoundaryShape3D`](class_worldboundaryshape3d.md).

<div id="_class_physicsserver3d_constant_shape_separation_ray"></div>

[ShapeType](#enum_physicsserver3d_shapetype) **SHAPE_SEPARATION_RAY** = ``1``

The [`Shape3D`](class_shape3d.md) is a [`SeparationRayShape3D`](class_separationrayshape3d.md).

<div id="_class_physicsserver3d_constant_shape_sphere"></div>

[ShapeType](#enum_physicsserver3d_shapetype) **SHAPE_SPHERE** = ``2``

The [`Shape3D`](class_shape3d.md) is a [`SphereShape3D`](class_sphereshape3d.md).

<div id="_class_physicsserver3d_constant_shape_box"></div>

[ShapeType](#enum_physicsserver3d_shapetype) **SHAPE_BOX** = ``3``

The [`Shape3D`](class_shape3d.md) is a [`BoxShape3D`](class_boxshape3d.md).

<div id="_class_physicsserver3d_constant_shape_capsule"></div>

[ShapeType](#enum_physicsserver3d_shapetype) **SHAPE_CAPSULE** = ``4``

The [`Shape3D`](class_shape3d.md) is a [`CapsuleShape3D`](class_capsuleshape3d.md).

<div id="_class_physicsserver3d_constant_shape_cylinder"></div>

[ShapeType](#enum_physicsserver3d_shapetype) **SHAPE_CYLINDER** = ``5``

The [`Shape3D`](class_shape3d.md) is a [`CylinderShape3D`](class_cylindershape3d.md).

<div id="_class_physicsserver3d_constant_shape_convex_polygon"></div>

[ShapeType](#enum_physicsserver3d_shapetype) **SHAPE_CONVEX_POLYGON** = ``6``

The [`Shape3D`](class_shape3d.md) is a [`ConvexPolygonShape3D`](class_convexpolygonshape3d.md).

<div id="_class_physicsserver3d_constant_shape_concave_polygon"></div>

[ShapeType](#enum_physicsserver3d_shapetype) **SHAPE_CONCAVE_POLYGON** = ``7``

The [`Shape3D`](class_shape3d.md) is a [`ConcavePolygonShape3D`](class_concavepolygonshape3d.md).

<div id="_class_physicsserver3d_constant_shape_heightmap"></div>

[ShapeType](#enum_physicsserver3d_shapetype) **SHAPE_HEIGHTMAP** = ``8``

The [`Shape3D`](class_shape3d.md) is a [`HeightMapShape3D`](class_heightmapshape3d.md).

<div id="_class_physicsserver3d_constant_shape_soft_body"></div>

[ShapeType](#enum_physicsserver3d_shapetype) **SHAPE_SOFT_BODY** = ``9``

The [`Shape3D`](class_shape3d.md) is used internally for a soft body. Any attempt to create this kind of shape results in an error.

<div id="_class_physicsserver3d_constant_shape_custom"></div>

[ShapeType](#enum_physicsserver3d_shapetype) **SHAPE_CUSTOM** = ``10``

This constant is used internally by the engine. Any attempt to create this kind of shape results in an error.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_enum_physicsserver3d_areaparameter"></div>

enum **AreaParameter**: <div id="enum_physicsserver3d_areaparameter"></div>

<div id="_class_physicsserver3d_constant_area_param_gravity_override_mode"></div>

[AreaParameter](#enum_physicsserver3d_areaparameter) **AREA_PARAM_GRAVITY_OVERRIDE_MODE** = ``0``

Constant to set/get gravity override mode in an area. See [AreaSpaceOverrideMode](#enum_physicsserver3d_areaspaceoverridemode) for possible values.

<div id="_class_physicsserver3d_constant_area_param_gravity"></div>

[AreaParameter](#enum_physicsserver3d_areaparameter) **AREA_PARAM_GRAVITY** = ``1``

Constant to set/get gravity strength in an area.

<div id="_class_physicsserver3d_constant_area_param_gravity_vector"></div>

[AreaParameter](#enum_physicsserver3d_areaparameter) **AREA_PARAM_GRAVITY_VECTOR** = ``2``

Constant to set/get gravity vector/center in an area.

<div id="_class_physicsserver3d_constant_area_param_gravity_is_point"></div>

[AreaParameter](#enum_physicsserver3d_areaparameter) **AREA_PARAM_GRAVITY_IS_POINT** = ``3``

Constant to set/get whether the gravity vector of an area is a direction, or a center point.

<div id="_class_physicsserver3d_constant_area_param_gravity_point_unit_distance"></div>

[AreaParameter](#enum_physicsserver3d_areaparameter) **AREA_PARAM_GRAVITY_POINT_UNIT_DISTANCE** = ``4``

Constant to set/get the distance at which the gravity strength is equal to the gravity controlled by [`AREA_PARAM_GRAVITY`](class_physicsserver3d.md#class_physicsserver3d_constant_area_param_gravity). For example, on a planet 100 meters in radius with a surface gravity of 4.0 m/s², set the gravity to 4.0 and the unit distance to 100.0. The gravity will have falloff according to the inverse square law, so in the example, at 200 meters from the center the gravity will be 1.0 m/s² (twice the distance, 1/4th the gravity), at 50 meters it will be 16.0 m/s² (half the distance, 4x the gravity), and so on.

The above is true only when the unit distance is a positive number. When this is set to 0.0, the gravity will be constant regardless of distance.

<div id="_class_physicsserver3d_constant_area_param_linear_damp_override_mode"></div>

[AreaParameter](#enum_physicsserver3d_areaparameter) **AREA_PARAM_LINEAR_DAMP_OVERRIDE_MODE** = ``5``

Constant to set/get linear damping override mode in an area. See [AreaSpaceOverrideMode](#enum_physicsserver3d_areaspaceoverridemode) for possible values.

<div id="_class_physicsserver3d_constant_area_param_linear_damp"></div>

[AreaParameter](#enum_physicsserver3d_areaparameter) **AREA_PARAM_LINEAR_DAMP** = ``6``

Constant to set/get the linear damping factor of an area.

<div id="_class_physicsserver3d_constant_area_param_angular_damp_override_mode"></div>

[AreaParameter](#enum_physicsserver3d_areaparameter) **AREA_PARAM_ANGULAR_DAMP_OVERRIDE_MODE** = ``7``

Constant to set/get angular damping override mode in an area. See [AreaSpaceOverrideMode](#enum_physicsserver3d_areaspaceoverridemode) for possible values.

<div id="_class_physicsserver3d_constant_area_param_angular_damp"></div>

[AreaParameter](#enum_physicsserver3d_areaparameter) **AREA_PARAM_ANGULAR_DAMP** = ``8``

Constant to set/get the angular damping factor of an area.

<div id="_class_physicsserver3d_constant_area_param_priority"></div>

[AreaParameter](#enum_physicsserver3d_areaparameter) **AREA_PARAM_PRIORITY** = ``9``

Constant to set/get the priority (order of processing) of an area.

<div id="_class_physicsserver3d_constant_area_param_wind_force_magnitude"></div>

[AreaParameter](#enum_physicsserver3d_areaparameter) **AREA_PARAM_WIND_FORCE_MAGNITUDE** = ``10``

Constant to set/get the magnitude of area-specific wind force. This wind force only applies to [`SoftBody3D`](class_softbody3d.md) nodes. Other physics bodies are currently not affected by wind.

<div id="_class_physicsserver3d_constant_area_param_wind_source"></div>

[AreaParameter](#enum_physicsserver3d_areaparameter) **AREA_PARAM_WIND_SOURCE** = ``11``

Constant to set/get the 3D vector that specifies the origin from which an area-specific wind blows.

<div id="_class_physicsserver3d_constant_area_param_wind_direction"></div>

[AreaParameter](#enum_physicsserver3d_areaparameter) **AREA_PARAM_WIND_DIRECTION** = ``12``

Constant to set/get the 3D vector that specifies the direction in which an area-specific wind blows.

<div id="_class_physicsserver3d_constant_area_param_wind_attenuation_factor"></div>

[AreaParameter](#enum_physicsserver3d_areaparameter) **AREA_PARAM_WIND_ATTENUATION_FACTOR** = ``13``

Constant to set/get the exponential rate at which wind force decreases with distance from its origin.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_enum_physicsserver3d_areaspaceoverridemode"></div>

enum **AreaSpaceOverrideMode**: <div id="enum_physicsserver3d_areaspaceoverridemode"></div>

<div id="_class_physicsserver3d_constant_area_space_override_disabled"></div>

[AreaSpaceOverrideMode](#enum_physicsserver3d_areaspaceoverridemode) **AREA_SPACE_OVERRIDE_DISABLED** = ``0``

This area does not affect gravity/damp. These are generally areas that exist only to detect collisions, and objects entering or exiting them.

<div id="_class_physicsserver3d_constant_area_space_override_combine"></div>

[AreaSpaceOverrideMode](#enum_physicsserver3d_areaspaceoverridemode) **AREA_SPACE_OVERRIDE_COMBINE** = ``1``

This area adds its gravity/damp values to whatever has been calculated so far. This way, many overlapping areas can combine their physics to make interesting effects.

<div id="_class_physicsserver3d_constant_area_space_override_combine_replace"></div>

[AreaSpaceOverrideMode](#enum_physicsserver3d_areaspaceoverridemode) **AREA_SPACE_OVERRIDE_COMBINE_REPLACE** = ``2``

This area adds its gravity/damp values to whatever has been calculated so far. Then stops taking into account the rest of the areas, even the default one.

<div id="_class_physicsserver3d_constant_area_space_override_replace"></div>

[AreaSpaceOverrideMode](#enum_physicsserver3d_areaspaceoverridemode) **AREA_SPACE_OVERRIDE_REPLACE** = ``3``

This area replaces any gravity/damp, even the default one, and stops taking into account the rest of the areas.

<div id="_class_physicsserver3d_constant_area_space_override_replace_combine"></div>

[AreaSpaceOverrideMode](#enum_physicsserver3d_areaspaceoverridemode) **AREA_SPACE_OVERRIDE_REPLACE_COMBINE** = ``4``

This area replaces any gravity/damp calculated so far, but keeps calculating the rest of the areas, down to the default one.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_enum_physicsserver3d_bodymode"></div>

enum **BodyMode**: <div id="enum_physicsserver3d_bodymode"></div>

<div id="_class_physicsserver3d_constant_body_mode_static"></div>

[BodyMode](#enum_physicsserver3d_bodymode) **BODY_MODE_STATIC** = ``0``

Constant for static bodies. In this mode, a body can be only moved by user code and doesn't collide with other bodies along its path when moved.

<div id="_class_physicsserver3d_constant_body_mode_kinematic"></div>

[BodyMode](#enum_physicsserver3d_bodymode) **BODY_MODE_KINEMATIC** = ``1``

Constant for kinematic bodies. In this mode, a body can be only moved by user code and collides with other bodies along its path.

<div id="_class_physicsserver3d_constant_body_mode_rigid"></div>

[BodyMode](#enum_physicsserver3d_bodymode) **BODY_MODE_RIGID** = ``2``

Constant for rigid bodies. In this mode, a body can be pushed by other bodies and has forces applied.

<div id="_class_physicsserver3d_constant_body_mode_rigid_linear"></div>

[BodyMode](#enum_physicsserver3d_bodymode) **BODY_MODE_RIGID_LINEAR** = ``3``

Constant for linear rigid bodies. In this mode, a body can not rotate, and only its linear velocity is affected by external forces.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_enum_physicsserver3d_bodyparameter"></div>

enum **BodyParameter**: <div id="enum_physicsserver3d_bodyparameter"></div>

<div id="_class_physicsserver3d_constant_body_param_bounce"></div>

[BodyParameter](#enum_physicsserver3d_bodyparameter) **BODY_PARAM_BOUNCE** = ``0``

Constant to set/get a body's bounce factor.

<div id="_class_physicsserver3d_constant_body_param_friction"></div>

[BodyParameter](#enum_physicsserver3d_bodyparameter) **BODY_PARAM_FRICTION** = ``1``

Constant to set/get a body's friction.

<div id="_class_physicsserver3d_constant_body_param_mass"></div>

[BodyParameter](#enum_physicsserver3d_bodyparameter) **BODY_PARAM_MASS** = ``2``

Constant to set/get a body's mass.

<div id="_class_physicsserver3d_constant_body_param_inertia"></div>

[BodyParameter](#enum_physicsserver3d_bodyparameter) **BODY_PARAM_INERTIA** = ``3``

Constant to set/get a body's inertia.

<div id="_class_physicsserver3d_constant_body_param_center_of_mass"></div>

[BodyParameter](#enum_physicsserver3d_bodyparameter) **BODY_PARAM_CENTER_OF_MASS** = ``4``

Constant to set/get a body's center of mass position in the body's local coordinate system.

<div id="_class_physicsserver3d_constant_body_param_gravity_scale"></div>

[BodyParameter](#enum_physicsserver3d_bodyparameter) **BODY_PARAM_GRAVITY_SCALE** = ``5``

Constant to set/get a body's gravity multiplier.

<div id="_class_physicsserver3d_constant_body_param_linear_damp_mode"></div>

[BodyParameter](#enum_physicsserver3d_bodyparameter) **BODY_PARAM_LINEAR_DAMP_MODE** = ``6``

Constant to set/get a body's linear damping mode. See [BodyDampMode](#enum_physicsserver3d_bodydampmode) for possible values.

<div id="_class_physicsserver3d_constant_body_param_angular_damp_mode"></div>

[BodyParameter](#enum_physicsserver3d_bodyparameter) **BODY_PARAM_ANGULAR_DAMP_MODE** = ``7``

Constant to set/get a body's angular damping mode. See [BodyDampMode](#enum_physicsserver3d_bodydampmode) for possible values.

<div id="_class_physicsserver3d_constant_body_param_linear_damp"></div>

[BodyParameter](#enum_physicsserver3d_bodyparameter) **BODY_PARAM_LINEAR_DAMP** = ``8``

Constant to set/get a body's linear damping factor.

<div id="_class_physicsserver3d_constant_body_param_angular_damp"></div>

[BodyParameter](#enum_physicsserver3d_bodyparameter) **BODY_PARAM_ANGULAR_DAMP** = ``9``

Constant to set/get a body's angular damping factor.

<div id="_class_physicsserver3d_constant_body_param_max"></div>

[BodyParameter](#enum_physicsserver3d_bodyparameter) **BODY_PARAM_MAX** = ``10``

Represents the size of the [BodyParameter](#enum_physicsserver3d_bodyparameter) enum.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_enum_physicsserver3d_bodydampmode"></div>

enum **BodyDampMode**: <div id="enum_physicsserver3d_bodydampmode"></div>

<div id="_class_physicsserver3d_constant_body_damp_mode_combine"></div>

[BodyDampMode](#enum_physicsserver3d_bodydampmode) **BODY_DAMP_MODE_COMBINE** = ``0``

The body's damping value is added to any value set in areas or the default value.

<div id="_class_physicsserver3d_constant_body_damp_mode_replace"></div>

[BodyDampMode](#enum_physicsserver3d_bodydampmode) **BODY_DAMP_MODE_REPLACE** = ``1``

The body's damping value replaces any value set in areas or the default value.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_enum_physicsserver3d_bodystate"></div>

enum **BodyState**: <div id="enum_physicsserver3d_bodystate"></div>

<div id="_class_physicsserver3d_constant_body_state_transform"></div>

[BodyState](#enum_physicsserver3d_bodystate) **BODY_STATE_TRANSFORM** = ``0``

Constant to set/get the current transform matrix of the body.

<div id="_class_physicsserver3d_constant_body_state_linear_velocity"></div>

[BodyState](#enum_physicsserver3d_bodystate) **BODY_STATE_LINEAR_VELOCITY** = ``1``

Constant to set/get the current linear velocity of the body.

<div id="_class_physicsserver3d_constant_body_state_angular_velocity"></div>

[BodyState](#enum_physicsserver3d_bodystate) **BODY_STATE_ANGULAR_VELOCITY** = ``2``

Constant to set/get the current angular velocity of the body.

<div id="_class_physicsserver3d_constant_body_state_sleeping"></div>

[BodyState](#enum_physicsserver3d_bodystate) **BODY_STATE_SLEEPING** = ``3``

Constant to sleep/wake up a body, or to get whether it is sleeping.

<div id="_class_physicsserver3d_constant_body_state_can_sleep"></div>

[BodyState](#enum_physicsserver3d_bodystate) **BODY_STATE_CAN_SLEEP** = ``4``

Constant to set/get whether the body can sleep.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_enum_physicsserver3d_areabodystatus"></div>

enum **AreaBodyStatus**: <div id="enum_physicsserver3d_areabodystatus"></div>

<div id="_class_physicsserver3d_constant_area_body_added"></div>

[AreaBodyStatus](#enum_physicsserver3d_areabodystatus) **AREA_BODY_ADDED** = ``0``

The value of the first parameter and area callback function receives, when an object enters one of its shapes.

<div id="_class_physicsserver3d_constant_area_body_removed"></div>

[AreaBodyStatus](#enum_physicsserver3d_areabodystatus) **AREA_BODY_REMOVED** = ``1``

The value of the first parameter and area callback function receives, when an object exits one of its shapes.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_enum_physicsserver3d_processinfo"></div>

enum **ProcessInfo**: <div id="enum_physicsserver3d_processinfo"></div>

<div id="_class_physicsserver3d_constant_info_active_objects"></div>

[ProcessInfo](#enum_physicsserver3d_processinfo) **INFO_ACTIVE_OBJECTS** = ``0``

Constant to get the number of objects that are not sleeping.

<div id="_class_physicsserver3d_constant_info_collision_pairs"></div>

[ProcessInfo](#enum_physicsserver3d_processinfo) **INFO_COLLISION_PAIRS** = ``1``

Constant to get the number of possible collisions.

<div id="_class_physicsserver3d_constant_info_island_count"></div>

[ProcessInfo](#enum_physicsserver3d_processinfo) **INFO_ISLAND_COUNT** = ``2``

Constant to get the number of space regions where a collision could occur.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_enum_physicsserver3d_spaceparameter"></div>

enum **SpaceParameter**: <div id="enum_physicsserver3d_spaceparameter"></div>

<div id="_class_physicsserver3d_constant_space_param_contact_recycle_radius"></div>

[SpaceParameter](#enum_physicsserver3d_spaceparameter) **SPACE_PARAM_CONTACT_RECYCLE_RADIUS** = ``0``

Constant to set/get the maximum distance a pair of bodies has to move before their collision status has to be recalculated.

<div id="_class_physicsserver3d_constant_space_param_contact_max_separation"></div>

[SpaceParameter](#enum_physicsserver3d_spaceparameter) **SPACE_PARAM_CONTACT_MAX_SEPARATION** = ``1``

Constant to set/get the maximum distance a shape can be from another before they are considered separated and the contact is discarded.

<div id="_class_physicsserver3d_constant_space_param_contact_max_allowed_penetration"></div>

[SpaceParameter](#enum_physicsserver3d_spaceparameter) **SPACE_PARAM_CONTACT_MAX_ALLOWED_PENETRATION** = ``2``

Constant to set/get the maximum distance a shape can penetrate another shape before it is considered a collision.

<div id="_class_physicsserver3d_constant_space_param_contact_default_bias"></div>

[SpaceParameter](#enum_physicsserver3d_spaceparameter) **SPACE_PARAM_CONTACT_DEFAULT_BIAS** = ``3``

Constant to set/get the default solver bias for all physics contacts. A solver bias is a factor controlling how much two objects "rebound", after overlapping, to avoid leaving them in that state because of numerical imprecision.

<div id="_class_physicsserver3d_constant_space_param_body_linear_velocity_sleep_threshold"></div>

[SpaceParameter](#enum_physicsserver3d_spaceparameter) **SPACE_PARAM_BODY_LINEAR_VELOCITY_SLEEP_THRESHOLD** = ``4``

Constant to set/get the threshold linear velocity of activity. A body marked as potentially inactive for both linear and angular velocity will be put to sleep after the time given.

<div id="_class_physicsserver3d_constant_space_param_body_angular_velocity_sleep_threshold"></div>

[SpaceParameter](#enum_physicsserver3d_spaceparameter) **SPACE_PARAM_BODY_ANGULAR_VELOCITY_SLEEP_THRESHOLD** = ``5``

Constant to set/get the threshold angular velocity of activity. A body marked as potentially inactive for both linear and angular velocity will be put to sleep after the time given.

<div id="_class_physicsserver3d_constant_space_param_body_time_to_sleep"></div>

[SpaceParameter](#enum_physicsserver3d_spaceparameter) **SPACE_PARAM_BODY_TIME_TO_SLEEP** = ``6``

Constant to set/get the maximum time of activity. A body marked as potentially inactive for both linear and angular velocity will be put to sleep after this time.

<div id="_class_physicsserver3d_constant_space_param_solver_iterations"></div>

[SpaceParameter](#enum_physicsserver3d_spaceparameter) **SPACE_PARAM_SOLVER_ITERATIONS** = ``7``

Constant to set/get the number of solver iterations for contacts and constraints. The greater the number of iterations, the more accurate the collisions and constraints will be. However, a greater number of iterations requires more CPU power, which can decrease performance.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_enum_physicsserver3d_bodyaxis"></div>

enum **BodyAxis**: <div id="enum_physicsserver3d_bodyaxis"></div>

<div id="_class_physicsserver3d_constant_body_axis_linear_x"></div>

[BodyAxis](#enum_physicsserver3d_bodyaxis) **BODY_AXIS_LINEAR_X** = ``1``

该枚举目前没有描述，请帮我们\ :ref:`贡献一个 <doc_updating_the_class_reference>`\ 吧！



<div id="_class_physicsserver3d_constant_body_axis_linear_y"></div>

[BodyAxis](#enum_physicsserver3d_bodyaxis) **BODY_AXIS_LINEAR_Y** = ``2``

该枚举目前没有描述，请帮我们\ :ref:`贡献一个 <doc_updating_the_class_reference>`\ 吧！



<div id="_class_physicsserver3d_constant_body_axis_linear_z"></div>

[BodyAxis](#enum_physicsserver3d_bodyaxis) **BODY_AXIS_LINEAR_Z** = ``4``

该枚举目前没有描述，请帮我们\ :ref:`贡献一个 <doc_updating_the_class_reference>`\ 吧！



<div id="_class_physicsserver3d_constant_body_axis_angular_x"></div>

[BodyAxis](#enum_physicsserver3d_bodyaxis) **BODY_AXIS_ANGULAR_X** = ``8``

该枚举目前没有描述，请帮我们\ :ref:`贡献一个 <doc_updating_the_class_reference>`\ 吧！



<div id="_class_physicsserver3d_constant_body_axis_angular_y"></div>

[BodyAxis](#enum_physicsserver3d_bodyaxis) **BODY_AXIS_ANGULAR_Y** = ``16``

该枚举目前没有描述，请帮我们\ :ref:`贡献一个 <doc_updating_the_class_reference>`\ 吧！



<div id="_class_physicsserver3d_constant_body_axis_angular_z"></div>

[BodyAxis](#enum_physicsserver3d_bodyaxis) **BODY_AXIS_ANGULAR_Z** = ``32``

该枚举目前没有描述，请帮我们\ :ref:`贡献一个 <doc_updating_the_class_reference>`\ 吧！



<!-- rst-class:: classref-section-separator -->

---

## 方法说明

<div id="_class_physicsserver3d_method_area_add_shape"></div>

`void` **area_add_shape** ( area: [`RID`](class_rid.md), shape: [`RID`](class_rid.md), transform: [`Transform3D`](class_transform3d.md) = Transform3D(1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0), disabled: [`bool`](class_bool.md) = false )<div id="class_physicsserver3d_method_area_add_shape"></div>

Adds a shape to the area, along with a transform matrix. Shapes are usually referenced by their index, so you should track which shape has a given index.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsserver3d_method_area_attach_object_instance_id"></div>

`void` **area_attach_object_instance_id** ( area: [`RID`](class_rid.md), id: [`int`](class_int.md) )<div id="class_physicsserver3d_method_area_attach_object_instance_id"></div>

Assigns the area to a descendant of [`Object`](class_object.md), so it can exist in the node tree.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsserver3d_method_area_clear_shapes"></div>

`void` **area_clear_shapes** ( area: [`RID`](class_rid.md) )<div id="class_physicsserver3d_method_area_clear_shapes"></div>

Removes all shapes from an area. It does not delete the shapes, so they can be reassigned later.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsserver3d_method_area_create"></div>

[`RID`](class_rid.md) **area_create** ( )<div id="class_physicsserver3d_method_area_create"></div>

Creates a 3D area object in the physics server, and returns the [`RID`](class_rid.md) that identifies it. The default settings for the created area include a collision layer and mask set to `1`, and `monitorable` set to `false`.

Use [`area_add_shape`](class_physicsserver3d.md#class_physicsserver3d_method_area_add_shape) to add shapes to it, use [`area_set_transform`](class_physicsserver3d.md#class_physicsserver3d_method_area_set_transform) to set its transform, and use [`area_set_space`](class_physicsserver3d.md#class_physicsserver3d_method_area_set_space) to add the area to a space. If you want the area to be detectable use [`area_set_monitorable`](class_physicsserver3d.md#class_physicsserver3d_method_area_set_monitorable).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsserver3d_method_area_get_collision_layer"></div>

[`int`](class_int.md) **area_get_collision_layer** ( area: [`RID`](class_rid.md) ) const[^const]<div id="class_physicsserver3d_method_area_get_collision_layer"></div>

Returns the physics layer or layers an area belongs to.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsserver3d_method_area_get_collision_mask"></div>

[`int`](class_int.md) **area_get_collision_mask** ( area: [`RID`](class_rid.md) ) const[^const]<div id="class_physicsserver3d_method_area_get_collision_mask"></div>

Returns the physics layer or layers an area can contact with.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsserver3d_method_area_get_object_instance_id"></div>

[`int`](class_int.md) **area_get_object_instance_id** ( area: [`RID`](class_rid.md) ) const[^const]<div id="class_physicsserver3d_method_area_get_object_instance_id"></div>

Gets the instance ID of the object the area is assigned to.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsserver3d_method_area_get_param"></div>

[`Variant`](class_variant.md) **area_get_param** ( area: [`RID`](class_rid.md), param: [AreaParameter](#enum_physicsserver3d_areaparameter) ) const[^const]<div id="class_physicsserver3d_method_area_get_param"></div>

Returns an area parameter value. A list of available parameters is on the [AreaParameter](#enum_physicsserver3d_areaparameter) constants.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsserver3d_method_area_get_shape"></div>

[`RID`](class_rid.md) **area_get_shape** ( area: [`RID`](class_rid.md), shape_idx: [`int`](class_int.md) ) const[^const]<div id="class_physicsserver3d_method_area_get_shape"></div>

Returns the [`RID`](class_rid.md) of the nth shape of an area.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsserver3d_method_area_get_shape_count"></div>

[`int`](class_int.md) **area_get_shape_count** ( area: [`RID`](class_rid.md) ) const[^const]<div id="class_physicsserver3d_method_area_get_shape_count"></div>

Returns the number of shapes assigned to an area.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsserver3d_method_area_get_shape_transform"></div>

[`Transform3D`](class_transform3d.md) **area_get_shape_transform** ( area: [`RID`](class_rid.md), shape_idx: [`int`](class_int.md) ) const[^const]<div id="class_physicsserver3d_method_area_get_shape_transform"></div>

Returns the transform matrix of a shape within an area.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsserver3d_method_area_get_space"></div>

[`RID`](class_rid.md) **area_get_space** ( area: [`RID`](class_rid.md) ) const[^const]<div id="class_physicsserver3d_method_area_get_space"></div>

Returns the space assigned to the area.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsserver3d_method_area_get_transform"></div>

[`Transform3D`](class_transform3d.md) **area_get_transform** ( area: [`RID`](class_rid.md) ) const[^const]<div id="class_physicsserver3d_method_area_get_transform"></div>

Returns the transform matrix for an area.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsserver3d_method_area_remove_shape"></div>

`void` **area_remove_shape** ( area: [`RID`](class_rid.md), shape_idx: [`int`](class_int.md) )<div id="class_physicsserver3d_method_area_remove_shape"></div>

Removes a shape from an area. It does not delete the shape, so it can be reassigned later.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsserver3d_method_area_set_area_monitor_callback"></div>

`void` **area_set_area_monitor_callback** ( area: [`RID`](class_rid.md), callback: [`Callable`](class_callable.md) )<div id="class_physicsserver3d_method_area_set_area_monitor_callback"></div>

Sets the area's area monitor callback. This callback will be called when any other (shape of an) area enters or exits (a shape of) the given area, and must take the following five parameters:

1. an integer `status`: either [`AREA_BODY_ADDED`](class_physicsserver3d.md#class_physicsserver3d_constant_area_body_added) or [`AREA_BODY_REMOVED`](class_physicsserver3d.md#class_physicsserver3d_constant_area_body_removed) depending on whether the other area's shape entered or exited the area,

2. an [`RID`](class_rid.md) `area_rid`: the [`RID`](class_rid.md) of the other area that entered or exited the area,

3. an integer `instance_id`: the `ObjectID` attached to the other area,

4. an integer `area_shape_idx`: the index of the shape of the other area that entered or exited the area,

5. an integer `self_shape_idx`: the index of the shape of the area where the other area entered or exited.

By counting (or keeping track of) the shapes that enter and exit, it can be determined if an area (with all its shapes) is entering for the first time or exiting for the last time.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsserver3d_method_area_set_collision_layer"></div>

`void` **area_set_collision_layer** ( area: [`RID`](class_rid.md), layer: [`int`](class_int.md) )<div id="class_physicsserver3d_method_area_set_collision_layer"></div>

Assigns the area to one or many physics layers.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsserver3d_method_area_set_collision_mask"></div>

`void` **area_set_collision_mask** ( area: [`RID`](class_rid.md), mask: [`int`](class_int.md) )<div id="class_physicsserver3d_method_area_set_collision_mask"></div>

Sets which physics layers the area will monitor.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsserver3d_method_area_set_monitor_callback"></div>

`void` **area_set_monitor_callback** ( area: [`RID`](class_rid.md), callback: [`Callable`](class_callable.md) )<div id="class_physicsserver3d_method_area_set_monitor_callback"></div>

Sets the area's body monitor callback. This callback will be called when any other (shape of a) body enters or exits (a shape of) the given area, and must take the following five parameters:

1. an integer `status`: either [`AREA_BODY_ADDED`](class_physicsserver3d.md#class_physicsserver3d_constant_area_body_added) or [`AREA_BODY_REMOVED`](class_physicsserver3d.md#class_physicsserver3d_constant_area_body_removed) depending on whether the other body shape entered or exited the area,

2. an [`RID`](class_rid.md) `body_rid`: the [`RID`](class_rid.md) of the body that entered or exited the area,

3. an integer `instance_id`: the `ObjectID` attached to the body,

4. an integer `body_shape_idx`: the index of the shape of the body that entered or exited the area,

5. an integer `self_shape_idx`: the index of the shape of the area where the body entered or exited.

By counting (or keeping track of) the shapes that enter and exit, it can be determined if a body (with all its shapes) is entering for the first time or exiting for the last time.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsserver3d_method_area_set_monitorable"></div>

`void` **area_set_monitorable** ( area: [`RID`](class_rid.md), monitorable: [`bool`](class_bool.md) )<div id="class_physicsserver3d_method_area_set_monitorable"></div>

该方法目前没有描述，请帮我们\ :ref:`贡献一个 <doc_updating_the_class_reference>`\ 吧！

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsserver3d_method_area_set_param"></div>

`void` **area_set_param** ( area: [`RID`](class_rid.md), param: [AreaParameter](#enum_physicsserver3d_areaparameter), value: [`Variant`](class_variant.md) )<div id="class_physicsserver3d_method_area_set_param"></div>

Sets the value for an area parameter. A list of available parameters is on the [AreaParameter](#enum_physicsserver3d_areaparameter) constants.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsserver3d_method_area_set_ray_pickable"></div>

`void` **area_set_ray_pickable** ( area: [`RID`](class_rid.md), enable: [`bool`](class_bool.md) )<div id="class_physicsserver3d_method_area_set_ray_pickable"></div>

Sets object pickable with rays.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsserver3d_method_area_set_shape"></div>

`void` **area_set_shape** ( area: [`RID`](class_rid.md), shape_idx: [`int`](class_int.md), shape: [`RID`](class_rid.md) )<div id="class_physicsserver3d_method_area_set_shape"></div>

Substitutes a given area shape by another. The old shape is selected by its index, the new one by its [`RID`](class_rid.md).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsserver3d_method_area_set_shape_disabled"></div>

`void` **area_set_shape_disabled** ( area: [`RID`](class_rid.md), shape_idx: [`int`](class_int.md), disabled: [`bool`](class_bool.md) )<div id="class_physicsserver3d_method_area_set_shape_disabled"></div>

该方法目前没有描述，请帮我们\ :ref:`贡献一个 <doc_updating_the_class_reference>`\ 吧！

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsserver3d_method_area_set_shape_transform"></div>

`void` **area_set_shape_transform** ( area: [`RID`](class_rid.md), shape_idx: [`int`](class_int.md), transform: [`Transform3D`](class_transform3d.md) )<div id="class_physicsserver3d_method_area_set_shape_transform"></div>

Sets the transform matrix for an area shape.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsserver3d_method_area_set_space"></div>

`void` **area_set_space** ( area: [`RID`](class_rid.md), space: [`RID`](class_rid.md) )<div id="class_physicsserver3d_method_area_set_space"></div>

Assigns a space to the area.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsserver3d_method_area_set_transform"></div>

`void` **area_set_transform** ( area: [`RID`](class_rid.md), transform: [`Transform3D`](class_transform3d.md) )<div id="class_physicsserver3d_method_area_set_transform"></div>

Sets the transform matrix for an area.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsserver3d_method_body_add_collision_exception"></div>

`void` **body_add_collision_exception** ( body: [`RID`](class_rid.md), excepted_body: [`RID`](class_rid.md) )<div id="class_physicsserver3d_method_body_add_collision_exception"></div>

Adds a body to the list of bodies exempt from collisions.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsserver3d_method_body_add_constant_central_force"></div>

`void` **body_add_constant_central_force** ( body: [`RID`](class_rid.md), force: [`Vector3`](class_vector3.md) )<div id="class_physicsserver3d_method_body_add_constant_central_force"></div>

Adds a constant directional force without affecting rotation that keeps being applied over time until cleared with `body_set_constant_force(body, Vector3(0, 0, 0))`.

This is equivalent to using [`body_add_constant_force`](class_physicsserver3d.md#class_physicsserver3d_method_body_add_constant_force) at the body's center of mass.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsserver3d_method_body_add_constant_force"></div>

`void` **body_add_constant_force** ( body: [`RID`](class_rid.md), force: [`Vector3`](class_vector3.md), position: [`Vector3`](class_vector3.md) = Vector3(0, 0, 0) )<div id="class_physicsserver3d_method_body_add_constant_force"></div>

Adds a constant positioned force to the body that keeps being applied over time until cleared with `body_set_constant_force(body, Vector3(0, 0, 0))`.

 `position` is the offset from the body origin in global coordinates.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsserver3d_method_body_add_constant_torque"></div>

`void` **body_add_constant_torque** ( body: [`RID`](class_rid.md), torque: [`Vector3`](class_vector3.md) )<div id="class_physicsserver3d_method_body_add_constant_torque"></div>

Adds a constant rotational force without affecting position that keeps being applied over time until cleared with `body_set_constant_torque(body, Vector3(0, 0, 0))`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsserver3d_method_body_add_shape"></div>

`void` **body_add_shape** ( body: [`RID`](class_rid.md), shape: [`RID`](class_rid.md), transform: [`Transform3D`](class_transform3d.md) = Transform3D(1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0), disabled: [`bool`](class_bool.md) = false )<div id="class_physicsserver3d_method_body_add_shape"></div>

Adds a shape to the body, along with a transform matrix. Shapes are usually referenced by their index, so you should track which shape has a given index.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsserver3d_method_body_apply_central_force"></div>

`void` **body_apply_central_force** ( body: [`RID`](class_rid.md), force: [`Vector3`](class_vector3.md) )<div id="class_physicsserver3d_method_body_apply_central_force"></div>

Applies a directional force without affecting rotation. A force is time dependent and meant to be applied every physics update.

This is equivalent to using [`body_apply_force`](class_physicsserver3d.md#class_physicsserver3d_method_body_apply_force) at the body's center of mass.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsserver3d_method_body_apply_central_impulse"></div>

`void` **body_apply_central_impulse** ( body: [`RID`](class_rid.md), impulse: [`Vector3`](class_vector3.md) )<div id="class_physicsserver3d_method_body_apply_central_impulse"></div>

Applies a directional impulse without affecting rotation.

An impulse is time-independent! Applying an impulse every frame would result in a framerate-dependent force. For this reason, it should only be used when simulating one-time impacts (use the "_force" functions otherwise).

This is equivalent to using [`body_apply_impulse`](class_physicsserver3d.md#class_physicsserver3d_method_body_apply_impulse) at the body's center of mass.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsserver3d_method_body_apply_force"></div>

`void` **body_apply_force** ( body: [`RID`](class_rid.md), force: [`Vector3`](class_vector3.md), position: [`Vector3`](class_vector3.md) = Vector3(0, 0, 0) )<div id="class_physicsserver3d_method_body_apply_force"></div>

Applies a positioned force to the body. A force is time dependent and meant to be applied every physics update.

 `position` is the offset from the body origin in global coordinates.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsserver3d_method_body_apply_impulse"></div>

`void` **body_apply_impulse** ( body: [`RID`](class_rid.md), impulse: [`Vector3`](class_vector3.md), position: [`Vector3`](class_vector3.md) = Vector3(0, 0, 0) )<div id="class_physicsserver3d_method_body_apply_impulse"></div>

Applies a positioned impulse to the body.

An impulse is time-independent! Applying an impulse every frame would result in a framerate-dependent force. For this reason, it should only be used when simulating one-time impacts (use the "_force" functions otherwise).

 `position` is the offset from the body origin in global coordinates.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsserver3d_method_body_apply_torque"></div>

`void` **body_apply_torque** ( body: [`RID`](class_rid.md), torque: [`Vector3`](class_vector3.md) )<div id="class_physicsserver3d_method_body_apply_torque"></div>

Applies a rotational force without affecting position. A force is time dependent and meant to be applied every physics update.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsserver3d_method_body_apply_torque_impulse"></div>

`void` **body_apply_torque_impulse** ( body: [`RID`](class_rid.md), impulse: [`Vector3`](class_vector3.md) )<div id="class_physicsserver3d_method_body_apply_torque_impulse"></div>

Applies a rotational impulse to the body without affecting the position.

An impulse is time-independent! Applying an impulse every frame would result in a framerate-dependent force. For this reason, it should only be used when simulating one-time impacts (use the "_force" functions otherwise).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsserver3d_method_body_attach_object_instance_id"></div>

`void` **body_attach_object_instance_id** ( body: [`RID`](class_rid.md), id: [`int`](class_int.md) )<div id="class_physicsserver3d_method_body_attach_object_instance_id"></div>

Assigns the area to a descendant of [`Object`](class_object.md), so it can exist in the node tree.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsserver3d_method_body_clear_shapes"></div>

`void` **body_clear_shapes** ( body: [`RID`](class_rid.md) )<div id="class_physicsserver3d_method_body_clear_shapes"></div>

Removes all shapes from a body.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsserver3d_method_body_create"></div>

[`RID`](class_rid.md) **body_create** ( )<div id="class_physicsserver3d_method_body_create"></div>

Creates a 3D body object in the physics server, and returns the [`RID`](class_rid.md) that identifies it. The default settings for the created area include a collision layer and mask set to `1`, and body mode set to [`BODY_MODE_RIGID`](class_physicsserver3d.md#class_physicsserver3d_constant_body_mode_rigid).

Use [`body_add_shape`](class_physicsserver3d.md#class_physicsserver3d_method_body_add_shape) to add shapes to it, use [`body_set_state`](class_physicsserver3d.md#class_physicsserver3d_method_body_set_state) to set its transform, and use [`body_set_space`](class_physicsserver3d.md#class_physicsserver3d_method_body_set_space) to add the body to a space.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsserver3d_method_body_get_collision_layer"></div>

[`int`](class_int.md) **body_get_collision_layer** ( body: [`RID`](class_rid.md) ) const[^const]<div id="class_physicsserver3d_method_body_get_collision_layer"></div>

Returns the physics layer or layers a body belongs to.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsserver3d_method_body_get_collision_mask"></div>

[`int`](class_int.md) **body_get_collision_mask** ( body: [`RID`](class_rid.md) ) const[^const]<div id="class_physicsserver3d_method_body_get_collision_mask"></div>

Returns the physics layer or layers a body can collide with.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsserver3d_method_body_get_collision_priority"></div>

[`float`](class_float.md) **body_get_collision_priority** ( body: [`RID`](class_rid.md) ) const[^const]<div id="class_physicsserver3d_method_body_get_collision_priority"></div>

Returns the body's collision priority.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsserver3d_method_body_get_constant_force"></div>

[`Vector3`](class_vector3.md) **body_get_constant_force** ( body: [`RID`](class_rid.md) ) const[^const]<div id="class_physicsserver3d_method_body_get_constant_force"></div>

Returns the body's total constant positional forces applied during each physics update.

See [`body_add_constant_force`](class_physicsserver3d.md#class_physicsserver3d_method_body_add_constant_force) and [`body_add_constant_central_force`](class_physicsserver3d.md#class_physicsserver3d_method_body_add_constant_central_force).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsserver3d_method_body_get_constant_torque"></div>

[`Vector3`](class_vector3.md) **body_get_constant_torque** ( body: [`RID`](class_rid.md) ) const[^const]<div id="class_physicsserver3d_method_body_get_constant_torque"></div>

Returns the body's total constant rotational forces applied during each physics update.

See [`body_add_constant_torque`](class_physicsserver3d.md#class_physicsserver3d_method_body_add_constant_torque).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsserver3d_method_body_get_direct_state"></div>

[`PhysicsDirectBodyState3D`](class_physicsdirectbodystate3d.md) **body_get_direct_state** ( body: [`RID`](class_rid.md) )<div id="class_physicsserver3d_method_body_get_direct_state"></div>

Returns the [`PhysicsDirectBodyState3D`](class_physicsdirectbodystate3d.md) of the body. Returns `null` if the body is destroyed or removed from the physics space.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsserver3d_method_body_get_max_contacts_reported"></div>

[`int`](class_int.md) **body_get_max_contacts_reported** ( body: [`RID`](class_rid.md) ) const[^const]<div id="class_physicsserver3d_method_body_get_max_contacts_reported"></div>

Returns the maximum contacts that can be reported. See [`body_set_max_contacts_reported`](class_physicsserver3d.md#class_physicsserver3d_method_body_set_max_contacts_reported).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsserver3d_method_body_get_mode"></div>

[BodyMode](#enum_physicsserver3d_bodymode) **body_get_mode** ( body: [`RID`](class_rid.md) ) const[^const]<div id="class_physicsserver3d_method_body_get_mode"></div>

Returns the body mode.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsserver3d_method_body_get_object_instance_id"></div>

[`int`](class_int.md) **body_get_object_instance_id** ( body: [`RID`](class_rid.md) ) const[^const]<div id="class_physicsserver3d_method_body_get_object_instance_id"></div>

Gets the instance ID of the object the area is assigned to.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsserver3d_method_body_get_param"></div>

[`Variant`](class_variant.md) **body_get_param** ( body: [`RID`](class_rid.md), param: [BodyParameter](#enum_physicsserver3d_bodyparameter) ) const[^const]<div id="class_physicsserver3d_method_body_get_param"></div>

Returns the value of a body parameter. A list of available parameters is on the [BodyParameter](#enum_physicsserver3d_bodyparameter) constants.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsserver3d_method_body_get_shape"></div>

[`RID`](class_rid.md) **body_get_shape** ( body: [`RID`](class_rid.md), shape_idx: [`int`](class_int.md) ) const[^const]<div id="class_physicsserver3d_method_body_get_shape"></div>

Returns the [`RID`](class_rid.md) of the nth shape of a body.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsserver3d_method_body_get_shape_count"></div>

[`int`](class_int.md) **body_get_shape_count** ( body: [`RID`](class_rid.md) ) const[^const]<div id="class_physicsserver3d_method_body_get_shape_count"></div>

Returns the number of shapes assigned to a body.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsserver3d_method_body_get_shape_transform"></div>

[`Transform3D`](class_transform3d.md) **body_get_shape_transform** ( body: [`RID`](class_rid.md), shape_idx: [`int`](class_int.md) ) const[^const]<div id="class_physicsserver3d_method_body_get_shape_transform"></div>

Returns the transform matrix of a body shape.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsserver3d_method_body_get_space"></div>

[`RID`](class_rid.md) **body_get_space** ( body: [`RID`](class_rid.md) ) const[^const]<div id="class_physicsserver3d_method_body_get_space"></div>

Returns the [`RID`](class_rid.md) of the space assigned to a body.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsserver3d_method_body_get_state"></div>

[`Variant`](class_variant.md) **body_get_state** ( body: [`RID`](class_rid.md), state: [BodyState](#enum_physicsserver3d_bodystate) ) const[^const]<div id="class_physicsserver3d_method_body_get_state"></div>

Returns a body state.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsserver3d_method_body_is_axis_locked"></div>

[`bool`](class_bool.md) **body_is_axis_locked** ( body: [`RID`](class_rid.md), axis: [BodyAxis](#enum_physicsserver3d_bodyaxis) ) const[^const]<div id="class_physicsserver3d_method_body_is_axis_locked"></div>

该方法目前没有描述，请帮我们\ :ref:`贡献一个 <doc_updating_the_class_reference>`\ 吧！

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsserver3d_method_body_is_continuous_collision_detection_enabled"></div>

[`bool`](class_bool.md) **body_is_continuous_collision_detection_enabled** ( body: [`RID`](class_rid.md) ) const[^const]<div id="class_physicsserver3d_method_body_is_continuous_collision_detection_enabled"></div>

If `true`, the continuous collision detection mode is enabled.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsserver3d_method_body_is_omitting_force_integration"></div>

[`bool`](class_bool.md) **body_is_omitting_force_integration** ( body: [`RID`](class_rid.md) ) const[^const]<div id="class_physicsserver3d_method_body_is_omitting_force_integration"></div>

Returns `true` if the body is omitting the standard force integration. See [`body_set_omit_force_integration`](class_physicsserver3d.md#class_physicsserver3d_method_body_set_omit_force_integration).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsserver3d_method_body_remove_collision_exception"></div>

`void` **body_remove_collision_exception** ( body: [`RID`](class_rid.md), excepted_body: [`RID`](class_rid.md) )<div id="class_physicsserver3d_method_body_remove_collision_exception"></div>

Removes a body from the list of bodies exempt from collisions.

Continuous collision detection tries to predict where a moving body will collide, instead of moving it and correcting its movement if it collided.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsserver3d_method_body_remove_shape"></div>

`void` **body_remove_shape** ( body: [`RID`](class_rid.md), shape_idx: [`int`](class_int.md) )<div id="class_physicsserver3d_method_body_remove_shape"></div>

Removes a shape from a body. The shape is not deleted, so it can be reused afterwards.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsserver3d_method_body_reset_mass_properties"></div>

`void` **body_reset_mass_properties** ( body: [`RID`](class_rid.md) )<div id="class_physicsserver3d_method_body_reset_mass_properties"></div>

Restores the default inertia and center of mass based on shapes to cancel any custom values previously set using [`body_set_param`](class_physicsserver3d.md#class_physicsserver3d_method_body_set_param).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsserver3d_method_body_set_axis_lock"></div>

`void` **body_set_axis_lock** ( body: [`RID`](class_rid.md), axis: [BodyAxis](#enum_physicsserver3d_bodyaxis), lock: [`bool`](class_bool.md) )<div id="class_physicsserver3d_method_body_set_axis_lock"></div>

该方法目前没有描述，请帮我们\ :ref:`贡献一个 <doc_updating_the_class_reference>`\ 吧！

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsserver3d_method_body_set_axis_velocity"></div>

`void` **body_set_axis_velocity** ( body: [`RID`](class_rid.md), axis_velocity: [`Vector3`](class_vector3.md) )<div id="class_physicsserver3d_method_body_set_axis_velocity"></div>

Sets an axis velocity. The velocity in the given vector axis will be set as the given vector length. This is useful for jumping behavior.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsserver3d_method_body_set_collision_layer"></div>

`void` **body_set_collision_layer** ( body: [`RID`](class_rid.md), layer: [`int`](class_int.md) )<div id="class_physicsserver3d_method_body_set_collision_layer"></div>

Sets the physics layer or layers a body belongs to.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsserver3d_method_body_set_collision_mask"></div>

`void` **body_set_collision_mask** ( body: [`RID`](class_rid.md), mask: [`int`](class_int.md) )<div id="class_physicsserver3d_method_body_set_collision_mask"></div>

Sets the physics layer or layers a body can collide with.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsserver3d_method_body_set_collision_priority"></div>

`void` **body_set_collision_priority** ( body: [`RID`](class_rid.md), priority: [`float`](class_float.md) )<div id="class_physicsserver3d_method_body_set_collision_priority"></div>

Sets the body's collision priority.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsserver3d_method_body_set_constant_force"></div>

`void` **body_set_constant_force** ( body: [`RID`](class_rid.md), force: [`Vector3`](class_vector3.md) )<div id="class_physicsserver3d_method_body_set_constant_force"></div>

Sets the body's total constant positional forces applied during each physics update.

See [`body_add_constant_force`](class_physicsserver3d.md#class_physicsserver3d_method_body_add_constant_force) and [`body_add_constant_central_force`](class_physicsserver3d.md#class_physicsserver3d_method_body_add_constant_central_force).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsserver3d_method_body_set_constant_torque"></div>

`void` **body_set_constant_torque** ( body: [`RID`](class_rid.md), torque: [`Vector3`](class_vector3.md) )<div id="class_physicsserver3d_method_body_set_constant_torque"></div>

Sets the body's total constant rotational forces applied during each physics update.

See [`body_add_constant_torque`](class_physicsserver3d.md#class_physicsserver3d_method_body_add_constant_torque).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsserver3d_method_body_set_enable_continuous_collision_detection"></div>

`void` **body_set_enable_continuous_collision_detection** ( body: [`RID`](class_rid.md), enable: [`bool`](class_bool.md) )<div id="class_physicsserver3d_method_body_set_enable_continuous_collision_detection"></div>

If `true`, the continuous collision detection mode is enabled.

Continuous collision detection tries to predict where a moving body will collide, instead of moving it and correcting its movement if it collided.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsserver3d_method_body_set_force_integration_callback"></div>

`void` **body_set_force_integration_callback** ( body: [`RID`](class_rid.md), callable: [`Callable`](class_callable.md), userdata: [`Variant`](class_variant.md) = null )<div id="class_physicsserver3d_method_body_set_force_integration_callback"></div>

Sets the body's custom force integration callback function to `callable`. Use an empty [`Callable`](class_callable.md) (`Callable()`) to clear the custom callback.

The function `callable` will be called every physics tick, before the standard force integration (see [`body_set_omit_force_integration`](class_physicsserver3d.md#class_physicsserver3d_method_body_set_omit_force_integration)). It can be used for example to update the body's linear and angular velocity based on contact with other bodies.

If `userdata` is not `null`, the function `callable` must take the following two parameters:

1. `state`: a [`PhysicsDirectBodyState3D`](class_physicsdirectbodystate3d.md), used to retrieve and modify the body's state,

2. `userdata`: a [`Variant`](class_variant.md); its value will be the `userdata` passed into this method.

If `userdata` is `null`, then `callable` must take only the `state` parameter.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsserver3d_method_body_set_max_contacts_reported"></div>

`void` **body_set_max_contacts_reported** ( body: [`RID`](class_rid.md), amount: [`int`](class_int.md) )<div id="class_physicsserver3d_method_body_set_max_contacts_reported"></div>

Sets the maximum contacts to report. Bodies can keep a log of the contacts with other bodies. This is enabled by setting the maximum number of contacts reported to a number greater than 0.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsserver3d_method_body_set_mode"></div>

`void` **body_set_mode** ( body: [`RID`](class_rid.md), mode: [BodyMode](#enum_physicsserver3d_bodymode) )<div id="class_physicsserver3d_method_body_set_mode"></div>

Sets the body mode, from one of the [BodyMode](#enum_physicsserver3d_bodymode) constants.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsserver3d_method_body_set_omit_force_integration"></div>

`void` **body_set_omit_force_integration** ( body: [`RID`](class_rid.md), enable: [`bool`](class_bool.md) )<div id="class_physicsserver3d_method_body_set_omit_force_integration"></div>

Sets whether the body omits the standard force integration. If `enable` is `true`, the body will not automatically use applied forces, torques, and damping to update the body's linear and angular velocity. In this case, [`body_set_force_integration_callback`](class_physicsserver3d.md#class_physicsserver3d_method_body_set_force_integration_callback) can be used to manually update the linear and angular velocity instead.

This method is called when the property [`RigidBody3D.custom_integrator`](class_rigidbody3d.md#class_rigidbody3d_property_custom_integrator) is set.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsserver3d_method_body_set_param"></div>

`void` **body_set_param** ( body: [`RID`](class_rid.md), param: [BodyParameter](#enum_physicsserver3d_bodyparameter), value: [`Variant`](class_variant.md) )<div id="class_physicsserver3d_method_body_set_param"></div>

Sets a body parameter. A list of available parameters is on the [BodyParameter](#enum_physicsserver3d_bodyparameter) constants.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsserver3d_method_body_set_ray_pickable"></div>

`void` **body_set_ray_pickable** ( body: [`RID`](class_rid.md), enable: [`bool`](class_bool.md) )<div id="class_physicsserver3d_method_body_set_ray_pickable"></div>

Sets the body pickable with rays if `enable` is set.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsserver3d_method_body_set_shape"></div>

`void` **body_set_shape** ( body: [`RID`](class_rid.md), shape_idx: [`int`](class_int.md), shape: [`RID`](class_rid.md) )<div id="class_physicsserver3d_method_body_set_shape"></div>

Substitutes a given body shape by another. The old shape is selected by its index, the new one by its [`RID`](class_rid.md).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsserver3d_method_body_set_shape_disabled"></div>

`void` **body_set_shape_disabled** ( body: [`RID`](class_rid.md), shape_idx: [`int`](class_int.md), disabled: [`bool`](class_bool.md) )<div id="class_physicsserver3d_method_body_set_shape_disabled"></div>

该方法目前没有描述，请帮我们\ :ref:`贡献一个 <doc_updating_the_class_reference>`\ 吧！

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsserver3d_method_body_set_shape_transform"></div>

`void` **body_set_shape_transform** ( body: [`RID`](class_rid.md), shape_idx: [`int`](class_int.md), transform: [`Transform3D`](class_transform3d.md) )<div id="class_physicsserver3d_method_body_set_shape_transform"></div>

Sets the transform matrix for a body shape.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsserver3d_method_body_set_space"></div>

`void` **body_set_space** ( body: [`RID`](class_rid.md), space: [`RID`](class_rid.md) )<div id="class_physicsserver3d_method_body_set_space"></div>

Assigns a space to the body (see [`space_create`](class_physicsserver3d.md#class_physicsserver3d_method_space_create)).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsserver3d_method_body_set_state"></div>

`void` **body_set_state** ( body: [`RID`](class_rid.md), state: [BodyState](#enum_physicsserver3d_bodystate), value: [`Variant`](class_variant.md) )<div id="class_physicsserver3d_method_body_set_state"></div>

Sets a body state (see [BodyState](#enum_physicsserver3d_bodystate) constants).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsserver3d_method_body_set_state_sync_callback"></div>

`void` **body_set_state_sync_callback** ( body: [`RID`](class_rid.md), callable: [`Callable`](class_callable.md) )<div id="class_physicsserver3d_method_body_set_state_sync_callback"></div>

Sets the body's state synchronization callback function to `callable`. Use an empty [`Callable`](class_callable.md) (`Callable()`) to clear the callback.

The function `callable` will be called every physics frame, assuming that the body was active during the previous physics tick, and can be used to fetch the latest state from the physics server.

The function `callable` must take the following parameters:

1. `state`: a [`PhysicsDirectBodyState3D`](class_physicsdirectbodystate3d.md), used to retrieve the body's state.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsserver3d_method_body_test_motion"></div>

[`bool`](class_bool.md) **body_test_motion** ( body: [`RID`](class_rid.md), parameters: [`PhysicsTestMotionParameters3D`](class_physicstestmotionparameters3d.md), result: [`PhysicsTestMotionResult3D`](class_physicstestmotionresult3d.md) = null )<div id="class_physicsserver3d_method_body_test_motion"></div>

Returns `true` if a collision would result from moving along a motion vector from a given point in space. [`PhysicsTestMotionParameters3D`](class_physicstestmotionparameters3d.md) is passed to set motion parameters. [`PhysicsTestMotionResult3D`](class_physicstestmotionresult3d.md) can be passed to return additional information.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsserver3d_method_box_shape_create"></div>

[`RID`](class_rid.md) **box_shape_create** ( )<div id="class_physicsserver3d_method_box_shape_create"></div>

该方法目前没有描述，请帮我们\ :ref:`贡献一个 <doc_updating_the_class_reference>`\ 吧！

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsserver3d_method_capsule_shape_create"></div>

[`RID`](class_rid.md) **capsule_shape_create** ( )<div id="class_physicsserver3d_method_capsule_shape_create"></div>

该方法目前没有描述，请帮我们\ :ref:`贡献一个 <doc_updating_the_class_reference>`\ 吧！

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsserver3d_method_concave_polygon_shape_create"></div>

[`RID`](class_rid.md) **concave_polygon_shape_create** ( )<div id="class_physicsserver3d_method_concave_polygon_shape_create"></div>

该方法目前没有描述，请帮我们\ :ref:`贡献一个 <doc_updating_the_class_reference>`\ 吧！

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsserver3d_method_cone_twist_joint_get_param"></div>

[`float`](class_float.md) **cone_twist_joint_get_param** ( joint: [`RID`](class_rid.md), param: [ConeTwistJointParam](#enum_physicsserver3d_conetwistjointparam) ) const[^const]<div id="class_physicsserver3d_method_cone_twist_joint_get_param"></div>

Gets a cone_twist_joint parameter (see [ConeTwistJointParam](#enum_physicsserver3d_conetwistjointparam) constants).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsserver3d_method_cone_twist_joint_set_param"></div>

`void` **cone_twist_joint_set_param** ( joint: [`RID`](class_rid.md), param: [ConeTwistJointParam](#enum_physicsserver3d_conetwistjointparam), value: [`float`](class_float.md) )<div id="class_physicsserver3d_method_cone_twist_joint_set_param"></div>

Sets a cone_twist_joint parameter (see [ConeTwistJointParam](#enum_physicsserver3d_conetwistjointparam) constants).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsserver3d_method_convex_polygon_shape_create"></div>

[`RID`](class_rid.md) **convex_polygon_shape_create** ( )<div id="class_physicsserver3d_method_convex_polygon_shape_create"></div>

该方法目前没有描述，请帮我们\ :ref:`贡献一个 <doc_updating_the_class_reference>`\ 吧！

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsserver3d_method_custom_shape_create"></div>

[`RID`](class_rid.md) **custom_shape_create** ( )<div id="class_physicsserver3d_method_custom_shape_create"></div>

该方法目前没有描述，请帮我们\ :ref:`贡献一个 <doc_updating_the_class_reference>`\ 吧！

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsserver3d_method_cylinder_shape_create"></div>

[`RID`](class_rid.md) **cylinder_shape_create** ( )<div id="class_physicsserver3d_method_cylinder_shape_create"></div>

该方法目前没有描述，请帮我们\ :ref:`贡献一个 <doc_updating_the_class_reference>`\ 吧！

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsserver3d_method_free_rid"></div>

`void` **free_rid** ( rid: [`RID`](class_rid.md) )<div id="class_physicsserver3d_method_free_rid"></div>

Destroys any of the objects created by PhysicsServer3D. If the [`RID`](class_rid.md) passed is not one of the objects that can be created by PhysicsServer3D, an error will be sent to the console.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsserver3d_method_generic_6dof_joint_get_flag"></div>

[`bool`](class_bool.md) **generic_6dof_joint_get_flag** ( joint: [`RID`](class_rid.md), axis: Vector3.Axis, flag: [G6DOFJointAxisFlag](#enum_physicsserver3d_g6dofjointaxisflag) ) const[^const]<div id="class_physicsserver3d_method_generic_6dof_joint_get_flag"></div>

Returns the value of a generic 6DOF joint flag. See [G6DOFJointAxisFlag](#enum_physicsserver3d_g6dofjointaxisflag) for the list of available flags.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsserver3d_method_generic_6dof_joint_get_param"></div>

[`float`](class_float.md) **generic_6dof_joint_get_param** ( joint: [`RID`](class_rid.md), axis: Vector3.Axis, param: [G6DOFJointAxisParam](#enum_physicsserver3d_g6dofjointaxisparam) ) const[^const]<div id="class_physicsserver3d_method_generic_6dof_joint_get_param"></div>

Returns the value of a generic 6DOF joint parameter. See [G6DOFJointAxisParam](#enum_physicsserver3d_g6dofjointaxisparam) for the list of available parameters.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsserver3d_method_generic_6dof_joint_set_flag"></div>

`void` **generic_6dof_joint_set_flag** ( joint: [`RID`](class_rid.md), axis: Vector3.Axis, flag: [G6DOFJointAxisFlag](#enum_physicsserver3d_g6dofjointaxisflag), enable: [`bool`](class_bool.md) )<div id="class_physicsserver3d_method_generic_6dof_joint_set_flag"></div>

Sets the value of a given generic 6DOF joint flag. See [G6DOFJointAxisFlag](#enum_physicsserver3d_g6dofjointaxisflag) for the list of available flags.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsserver3d_method_generic_6dof_joint_set_param"></div>

`void` **generic_6dof_joint_set_param** ( joint: [`RID`](class_rid.md), axis: Vector3.Axis, param: [G6DOFJointAxisParam](#enum_physicsserver3d_g6dofjointaxisparam), value: [`float`](class_float.md) )<div id="class_physicsserver3d_method_generic_6dof_joint_set_param"></div>

Sets the value of a given generic 6DOF joint parameter. See [G6DOFJointAxisParam](#enum_physicsserver3d_g6dofjointaxisparam) for the list of available parameters.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsserver3d_method_get_process_info"></div>

[`int`](class_int.md) **get_process_info** ( process_info: [ProcessInfo](#enum_physicsserver3d_processinfo) )<div id="class_physicsserver3d_method_get_process_info"></div>

Returns information about the current state of the 3D physics engine. See [ProcessInfo](#enum_physicsserver3d_processinfo) for a list of available states.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsserver3d_method_heightmap_shape_create"></div>

[`RID`](class_rid.md) **heightmap_shape_create** ( )<div id="class_physicsserver3d_method_heightmap_shape_create"></div>

该方法目前没有描述，请帮我们\ :ref:`贡献一个 <doc_updating_the_class_reference>`\ 吧！

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsserver3d_method_hinge_joint_get_flag"></div>

[`bool`](class_bool.md) **hinge_joint_get_flag** ( joint: [`RID`](class_rid.md), flag: [HingeJointFlag](#enum_physicsserver3d_hingejointflag) ) const[^const]<div id="class_physicsserver3d_method_hinge_joint_get_flag"></div>

Gets a hinge_joint flag (see [HingeJointFlag](#enum_physicsserver3d_hingejointflag) constants).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsserver3d_method_hinge_joint_get_param"></div>

[`float`](class_float.md) **hinge_joint_get_param** ( joint: [`RID`](class_rid.md), param: [HingeJointParam](#enum_physicsserver3d_hingejointparam) ) const[^const]<div id="class_physicsserver3d_method_hinge_joint_get_param"></div>

Gets a hinge_joint parameter (see [HingeJointParam](#enum_physicsserver3d_hingejointparam)).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsserver3d_method_hinge_joint_set_flag"></div>

`void` **hinge_joint_set_flag** ( joint: [`RID`](class_rid.md), flag: [HingeJointFlag](#enum_physicsserver3d_hingejointflag), enabled: [`bool`](class_bool.md) )<div id="class_physicsserver3d_method_hinge_joint_set_flag"></div>

Sets a hinge_joint flag (see [HingeJointFlag](#enum_physicsserver3d_hingejointflag) constants).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsserver3d_method_hinge_joint_set_param"></div>

`void` **hinge_joint_set_param** ( joint: [`RID`](class_rid.md), param: [HingeJointParam](#enum_physicsserver3d_hingejointparam), value: [`float`](class_float.md) )<div id="class_physicsserver3d_method_hinge_joint_set_param"></div>

Sets a hinge_joint parameter (see [HingeJointParam](#enum_physicsserver3d_hingejointparam) constants).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsserver3d_method_joint_clear"></div>

`void` **joint_clear** ( joint: [`RID`](class_rid.md) )<div id="class_physicsserver3d_method_joint_clear"></div>

该方法目前没有描述，请帮我们\ :ref:`贡献一个 <doc_updating_the_class_reference>`\ 吧！

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsserver3d_method_joint_create"></div>

[`RID`](class_rid.md) **joint_create** ( )<div id="class_physicsserver3d_method_joint_create"></div>

该方法目前没有描述，请帮我们\ :ref:`贡献一个 <doc_updating_the_class_reference>`\ 吧！

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsserver3d_method_joint_disable_collisions_between_bodies"></div>

`void` **joint_disable_collisions_between_bodies** ( joint: [`RID`](class_rid.md), disable: [`bool`](class_bool.md) )<div id="class_physicsserver3d_method_joint_disable_collisions_between_bodies"></div>

Sets whether the bodies attached to the [`Joint3D`](class_joint3d.md) will collide with each other.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsserver3d_method_joint_get_solver_priority"></div>

[`int`](class_int.md) **joint_get_solver_priority** ( joint: [`RID`](class_rid.md) ) const[^const]<div id="class_physicsserver3d_method_joint_get_solver_priority"></div>

Gets the priority value of the Joint3D.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsserver3d_method_joint_get_type"></div>

[JointType](#enum_physicsserver3d_jointtype) **joint_get_type** ( joint: [`RID`](class_rid.md) ) const[^const]<div id="class_physicsserver3d_method_joint_get_type"></div>

Returns the type of the Joint3D.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsserver3d_method_joint_is_disabled_collisions_between_bodies"></div>

[`bool`](class_bool.md) **joint_is_disabled_collisions_between_bodies** ( joint: [`RID`](class_rid.md) ) const[^const]<div id="class_physicsserver3d_method_joint_is_disabled_collisions_between_bodies"></div>

Returns whether the bodies attached to the [`Joint3D`](class_joint3d.md) will collide with each other.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsserver3d_method_joint_make_cone_twist"></div>

`void` **joint_make_cone_twist** ( joint: [`RID`](class_rid.md), body_A: [`RID`](class_rid.md), local_ref_A: [`Transform3D`](class_transform3d.md), body_B: [`RID`](class_rid.md), local_ref_B: [`Transform3D`](class_transform3d.md) )<div id="class_physicsserver3d_method_joint_make_cone_twist"></div>

该方法目前没有描述，请帮我们\ :ref:`贡献一个 <doc_updating_the_class_reference>`\ 吧！

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsserver3d_method_joint_make_generic_6dof"></div>

`void` **joint_make_generic_6dof** ( joint: [`RID`](class_rid.md), body_A: [`RID`](class_rid.md), local_ref_A: [`Transform3D`](class_transform3d.md), body_B: [`RID`](class_rid.md), local_ref_B: [`Transform3D`](class_transform3d.md) )<div id="class_physicsserver3d_method_joint_make_generic_6dof"></div>

Make the joint a generic six degrees of freedom (6DOF) joint. Use [`generic_6dof_joint_set_flag`](class_physicsserver3d.md#class_physicsserver3d_method_generic_6dof_joint_set_flag) and [`generic_6dof_joint_set_param`](class_physicsserver3d.md#class_physicsserver3d_method_generic_6dof_joint_set_param) to set the joint's flags and parameters respectively.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsserver3d_method_joint_make_hinge"></div>

`void` **joint_make_hinge** ( joint: [`RID`](class_rid.md), body_A: [`RID`](class_rid.md), hinge_A: [`Transform3D`](class_transform3d.md), body_B: [`RID`](class_rid.md), hinge_B: [`Transform3D`](class_transform3d.md) )<div id="class_physicsserver3d_method_joint_make_hinge"></div>

该方法目前没有描述，请帮我们\ :ref:`贡献一个 <doc_updating_the_class_reference>`\ 吧！

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsserver3d_method_joint_make_pin"></div>

`void` **joint_make_pin** ( joint: [`RID`](class_rid.md), body_A: [`RID`](class_rid.md), local_A: [`Vector3`](class_vector3.md), body_B: [`RID`](class_rid.md), local_B: [`Vector3`](class_vector3.md) )<div id="class_physicsserver3d_method_joint_make_pin"></div>

该方法目前没有描述，请帮我们\ :ref:`贡献一个 <doc_updating_the_class_reference>`\ 吧！

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsserver3d_method_joint_make_slider"></div>

`void` **joint_make_slider** ( joint: [`RID`](class_rid.md), body_A: [`RID`](class_rid.md), local_ref_A: [`Transform3D`](class_transform3d.md), body_B: [`RID`](class_rid.md), local_ref_B: [`Transform3D`](class_transform3d.md) )<div id="class_physicsserver3d_method_joint_make_slider"></div>

该方法目前没有描述，请帮我们\ :ref:`贡献一个 <doc_updating_the_class_reference>`\ 吧！

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsserver3d_method_joint_set_solver_priority"></div>

`void` **joint_set_solver_priority** ( joint: [`RID`](class_rid.md), priority: [`int`](class_int.md) )<div id="class_physicsserver3d_method_joint_set_solver_priority"></div>

Sets the priority value of the Joint3D.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsserver3d_method_pin_joint_get_local_a"></div>

[`Vector3`](class_vector3.md) **pin_joint_get_local_a** ( joint: [`RID`](class_rid.md) ) const[^const]<div id="class_physicsserver3d_method_pin_joint_get_local_a"></div>

Returns position of the joint in the local space of body a of the joint.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsserver3d_method_pin_joint_get_local_b"></div>

[`Vector3`](class_vector3.md) **pin_joint_get_local_b** ( joint: [`RID`](class_rid.md) ) const[^const]<div id="class_physicsserver3d_method_pin_joint_get_local_b"></div>

Returns position of the joint in the local space of body b of the joint.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsserver3d_method_pin_joint_get_param"></div>

[`float`](class_float.md) **pin_joint_get_param** ( joint: [`RID`](class_rid.md), param: [PinJointParam](#enum_physicsserver3d_pinjointparam) ) const[^const]<div id="class_physicsserver3d_method_pin_joint_get_param"></div>

Gets a pin_joint parameter (see [PinJointParam](#enum_physicsserver3d_pinjointparam) constants).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsserver3d_method_pin_joint_set_local_a"></div>

`void` **pin_joint_set_local_a** ( joint: [`RID`](class_rid.md), local_A: [`Vector3`](class_vector3.md) )<div id="class_physicsserver3d_method_pin_joint_set_local_a"></div>

Sets position of the joint in the local space of body a of the joint.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsserver3d_method_pin_joint_set_local_b"></div>

`void` **pin_joint_set_local_b** ( joint: [`RID`](class_rid.md), local_B: [`Vector3`](class_vector3.md) )<div id="class_physicsserver3d_method_pin_joint_set_local_b"></div>

Sets position of the joint in the local space of body b of the joint.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsserver3d_method_pin_joint_set_param"></div>

`void` **pin_joint_set_param** ( joint: [`RID`](class_rid.md), param: [PinJointParam](#enum_physicsserver3d_pinjointparam), value: [`float`](class_float.md) )<div id="class_physicsserver3d_method_pin_joint_set_param"></div>

Sets a pin_joint parameter (see [PinJointParam](#enum_physicsserver3d_pinjointparam) constants).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsserver3d_method_separation_ray_shape_create"></div>

[`RID`](class_rid.md) **separation_ray_shape_create** ( )<div id="class_physicsserver3d_method_separation_ray_shape_create"></div>

该方法目前没有描述，请帮我们\ :ref:`贡献一个 <doc_updating_the_class_reference>`\ 吧！

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsserver3d_method_set_active"></div>

`void` **set_active** ( active: [`bool`](class_bool.md) )<div id="class_physicsserver3d_method_set_active"></div>

Activates or deactivates the 3D physics engine.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsserver3d_method_shape_get_data"></div>

[`Variant`](class_variant.md) **shape_get_data** ( shape: [`RID`](class_rid.md) ) const[^const]<div id="class_physicsserver3d_method_shape_get_data"></div>

Returns the shape data.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsserver3d_method_shape_get_margin"></div>

[`float`](class_float.md) **shape_get_margin** ( shape: [`RID`](class_rid.md) ) const[^const]<div id="class_physicsserver3d_method_shape_get_margin"></div>

Returns the collision margin for the shape.

 **Note:** This is not used in Godot Physics, so will always return `0`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsserver3d_method_shape_get_type"></div>

[ShapeType](#enum_physicsserver3d_shapetype) **shape_get_type** ( shape: [`RID`](class_rid.md) ) const[^const]<div id="class_physicsserver3d_method_shape_get_type"></div>

Returns the type of shape (see [ShapeType](#enum_physicsserver3d_shapetype) constants).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsserver3d_method_shape_set_data"></div>

`void` **shape_set_data** ( shape: [`RID`](class_rid.md), data: [`Variant`](class_variant.md) )<div id="class_physicsserver3d_method_shape_set_data"></div>

Sets the shape data that defines its shape and size. The data to be passed depends on the kind of shape created [`shape_get_type`](class_physicsserver3d.md#class_physicsserver3d_method_shape_get_type).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsserver3d_method_shape_set_margin"></div>

`void` **shape_set_margin** ( shape: [`RID`](class_rid.md), margin: [`float`](class_float.md) )<div id="class_physicsserver3d_method_shape_set_margin"></div>

Sets the collision margin for the shape.

 **Note:** This is not used in Godot Physics.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsserver3d_method_slider_joint_get_param"></div>

[`float`](class_float.md) **slider_joint_get_param** ( joint: [`RID`](class_rid.md), param: [SliderJointParam](#enum_physicsserver3d_sliderjointparam) ) const[^const]<div id="class_physicsserver3d_method_slider_joint_get_param"></div>

Gets a slider_joint parameter (see [SliderJointParam](#enum_physicsserver3d_sliderjointparam) constants).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsserver3d_method_slider_joint_set_param"></div>

`void` **slider_joint_set_param** ( joint: [`RID`](class_rid.md), param: [SliderJointParam](#enum_physicsserver3d_sliderjointparam), value: [`float`](class_float.md) )<div id="class_physicsserver3d_method_slider_joint_set_param"></div>

Gets a slider_joint parameter (see [SliderJointParam](#enum_physicsserver3d_sliderjointparam) constants).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsserver3d_method_soft_body_add_collision_exception"></div>

`void` **soft_body_add_collision_exception** ( body: [`RID`](class_rid.md), body_b: [`RID`](class_rid.md) )<div id="class_physicsserver3d_method_soft_body_add_collision_exception"></div>

Adds the given body to the list of bodies exempt from collisions.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsserver3d_method_soft_body_create"></div>

[`RID`](class_rid.md) **soft_body_create** ( )<div id="class_physicsserver3d_method_soft_body_create"></div>

Creates a new soft body and returns its internal [`RID`](class_rid.md).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsserver3d_method_soft_body_get_bounds"></div>

[`AABB`](class_aabb.md) **soft_body_get_bounds** ( body: [`RID`](class_rid.md) ) const[^const]<div id="class_physicsserver3d_method_soft_body_get_bounds"></div>

Returns the bounds of the given soft body in global coordinates.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsserver3d_method_soft_body_get_collision_layer"></div>

[`int`](class_int.md) **soft_body_get_collision_layer** ( body: [`RID`](class_rid.md) ) const[^const]<div id="class_physicsserver3d_method_soft_body_get_collision_layer"></div>

Returns the physics layer or layers that the given soft body belongs to.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsserver3d_method_soft_body_get_collision_mask"></div>

[`int`](class_int.md) **soft_body_get_collision_mask** ( body: [`RID`](class_rid.md) ) const[^const]<div id="class_physicsserver3d_method_soft_body_get_collision_mask"></div>

Returns the physics layer or layers that the given soft body can collide with.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsserver3d_method_soft_body_get_damping_coefficient"></div>

[`float`](class_float.md) **soft_body_get_damping_coefficient** ( body: [`RID`](class_rid.md) ) const[^const]<div id="class_physicsserver3d_method_soft_body_get_damping_coefficient"></div>

Returns the damping coefficient of the given soft body.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsserver3d_method_soft_body_get_drag_coefficient"></div>

[`float`](class_float.md) **soft_body_get_drag_coefficient** ( body: [`RID`](class_rid.md) ) const[^const]<div id="class_physicsserver3d_method_soft_body_get_drag_coefficient"></div>

Returns the drag coefficient of the given soft body.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsserver3d_method_soft_body_get_linear_stiffness"></div>

[`float`](class_float.md) **soft_body_get_linear_stiffness** ( body: [`RID`](class_rid.md) ) const[^const]<div id="class_physicsserver3d_method_soft_body_get_linear_stiffness"></div>

Returns the linear stiffness of the given soft body.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsserver3d_method_soft_body_get_point_global_position"></div>

[`Vector3`](class_vector3.md) **soft_body_get_point_global_position** ( body: [`RID`](class_rid.md), point_index: [`int`](class_int.md) ) const[^const]<div id="class_physicsserver3d_method_soft_body_get_point_global_position"></div>

Returns the current position of the given soft body point in global coordinates.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsserver3d_method_soft_body_get_pressure_coefficient"></div>

[`float`](class_float.md) **soft_body_get_pressure_coefficient** ( body: [`RID`](class_rid.md) ) const[^const]<div id="class_physicsserver3d_method_soft_body_get_pressure_coefficient"></div>

Returns the pressure coefficient of the given soft body.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsserver3d_method_soft_body_get_simulation_precision"></div>

[`int`](class_int.md) **soft_body_get_simulation_precision** ( body: [`RID`](class_rid.md) ) const[^const]<div id="class_physicsserver3d_method_soft_body_get_simulation_precision"></div>

Returns the simulation precision of the given soft body.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsserver3d_method_soft_body_get_space"></div>

[`RID`](class_rid.md) **soft_body_get_space** ( body: [`RID`](class_rid.md) ) const[^const]<div id="class_physicsserver3d_method_soft_body_get_space"></div>

Returns the [`RID`](class_rid.md) of the space assigned to the given soft body.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsserver3d_method_soft_body_get_state"></div>

[`Variant`](class_variant.md) **soft_body_get_state** ( body: [`RID`](class_rid.md), state: [BodyState](#enum_physicsserver3d_bodystate) ) const[^const]<div id="class_physicsserver3d_method_soft_body_get_state"></div>

Returns the given soft body state (see [BodyState](#enum_physicsserver3d_bodystate) constants).

 **Note:** Godot's default physics implementation does not support [`BODY_STATE_LINEAR_VELOCITY`](class_physicsserver3d.md#class_physicsserver3d_constant_body_state_linear_velocity), [`BODY_STATE_ANGULAR_VELOCITY`](class_physicsserver3d.md#class_physicsserver3d_constant_body_state_angular_velocity), [`BODY_STATE_SLEEPING`](class_physicsserver3d.md#class_physicsserver3d_constant_body_state_sleeping), or [`BODY_STATE_CAN_SLEEP`](class_physicsserver3d.md#class_physicsserver3d_constant_body_state_can_sleep).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsserver3d_method_soft_body_get_total_mass"></div>

[`float`](class_float.md) **soft_body_get_total_mass** ( body: [`RID`](class_rid.md) ) const[^const]<div id="class_physicsserver3d_method_soft_body_get_total_mass"></div>

Returns the total mass assigned to the given soft body.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsserver3d_method_soft_body_is_point_pinned"></div>

[`bool`](class_bool.md) **soft_body_is_point_pinned** ( body: [`RID`](class_rid.md), point_index: [`int`](class_int.md) ) const[^const]<div id="class_physicsserver3d_method_soft_body_is_point_pinned"></div>

Returns whether the given soft body point is pinned.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsserver3d_method_soft_body_move_point"></div>

`void` **soft_body_move_point** ( body: [`RID`](class_rid.md), point_index: [`int`](class_int.md), global_position: [`Vector3`](class_vector3.md) )<div id="class_physicsserver3d_method_soft_body_move_point"></div>

Moves the given soft body point to a position in global coordinates.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsserver3d_method_soft_body_pin_point"></div>

`void` **soft_body_pin_point** ( body: [`RID`](class_rid.md), point_index: [`int`](class_int.md), pin: [`bool`](class_bool.md) )<div id="class_physicsserver3d_method_soft_body_pin_point"></div>

Pins or unpins the given soft body point based on the value of `pin`.

 **Note:** Pinning a point effectively makes it kinematic, preventing it from being affected by forces, but you can still move it using [`soft_body_move_point`](class_physicsserver3d.md#class_physicsserver3d_method_soft_body_move_point).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsserver3d_method_soft_body_remove_all_pinned_points"></div>

`void` **soft_body_remove_all_pinned_points** ( body: [`RID`](class_rid.md) )<div id="class_physicsserver3d_method_soft_body_remove_all_pinned_points"></div>

Unpins all points of the given soft body.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsserver3d_method_soft_body_remove_collision_exception"></div>

`void` **soft_body_remove_collision_exception** ( body: [`RID`](class_rid.md), body_b: [`RID`](class_rid.md) )<div id="class_physicsserver3d_method_soft_body_remove_collision_exception"></div>

Removes the given body from the list of bodies exempt from collisions.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsserver3d_method_soft_body_set_collision_layer"></div>

`void` **soft_body_set_collision_layer** ( body: [`RID`](class_rid.md), layer: [`int`](class_int.md) )<div id="class_physicsserver3d_method_soft_body_set_collision_layer"></div>

Sets the physics layer or layers the given soft body belongs to.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsserver3d_method_soft_body_set_collision_mask"></div>

`void` **soft_body_set_collision_mask** ( body: [`RID`](class_rid.md), mask: [`int`](class_int.md) )<div id="class_physicsserver3d_method_soft_body_set_collision_mask"></div>

Sets the physics layer or layers the given soft body can collide with.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsserver3d_method_soft_body_set_damping_coefficient"></div>

`void` **soft_body_set_damping_coefficient** ( body: [`RID`](class_rid.md), damping_coefficient: [`float`](class_float.md) )<div id="class_physicsserver3d_method_soft_body_set_damping_coefficient"></div>

Sets the damping coefficient of the given soft body. Higher values will slow down the body more noticeably when forces are applied.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsserver3d_method_soft_body_set_drag_coefficient"></div>

`void` **soft_body_set_drag_coefficient** ( body: [`RID`](class_rid.md), drag_coefficient: [`float`](class_float.md) )<div id="class_physicsserver3d_method_soft_body_set_drag_coefficient"></div>

Sets the drag coefficient of the given soft body. Higher values increase this body's air resistance.

 **Note:** This value is currently unused by Godot's default physics implementation.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsserver3d_method_soft_body_set_linear_stiffness"></div>

`void` **soft_body_set_linear_stiffness** ( body: [`RID`](class_rid.md), stiffness: [`float`](class_float.md) )<div id="class_physicsserver3d_method_soft_body_set_linear_stiffness"></div>

Sets the linear stiffness of the given soft body. Higher values will result in a stiffer body, while lower values will increase the body's ability to bend. The value can be between `0.0` and `1.0` (inclusive).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsserver3d_method_soft_body_set_mesh"></div>

`void` **soft_body_set_mesh** ( body: [`RID`](class_rid.md), mesh: [`RID`](class_rid.md) )<div id="class_physicsserver3d_method_soft_body_set_mesh"></div>

Sets the mesh of the given soft body.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsserver3d_method_soft_body_set_pressure_coefficient"></div>

`void` **soft_body_set_pressure_coefficient** ( body: [`RID`](class_rid.md), pressure_coefficient: [`float`](class_float.md) )<div id="class_physicsserver3d_method_soft_body_set_pressure_coefficient"></div>

Sets the pressure coefficient of the given soft body. Simulates pressure build-up from inside this body. Higher values increase the strength of this effect.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsserver3d_method_soft_body_set_ray_pickable"></div>

`void` **soft_body_set_ray_pickable** ( body: [`RID`](class_rid.md), enable: [`bool`](class_bool.md) )<div id="class_physicsserver3d_method_soft_body_set_ray_pickable"></div>

Sets whether the given soft body will be pickable when using object picking.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsserver3d_method_soft_body_set_simulation_precision"></div>

`void` **soft_body_set_simulation_precision** ( body: [`RID`](class_rid.md), simulation_precision: [`int`](class_int.md) )<div id="class_physicsserver3d_method_soft_body_set_simulation_precision"></div>

Sets the simulation precision of the given soft body. Increasing this value will improve the resulting simulation, but can affect performance. Use with care.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsserver3d_method_soft_body_set_space"></div>

`void` **soft_body_set_space** ( body: [`RID`](class_rid.md), space: [`RID`](class_rid.md) )<div id="class_physicsserver3d_method_soft_body_set_space"></div>

Assigns a space to the given soft body (see [`space_create`](class_physicsserver3d.md#class_physicsserver3d_method_space_create)).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsserver3d_method_soft_body_set_state"></div>

`void` **soft_body_set_state** ( body: [`RID`](class_rid.md), state: [BodyState](#enum_physicsserver3d_bodystate), variant: [`Variant`](class_variant.md) )<div id="class_physicsserver3d_method_soft_body_set_state"></div>

Sets the given body state for the given body (see [BodyState](#enum_physicsserver3d_bodystate) constants).

 **Note:** Godot's default physics implementation does not support [`BODY_STATE_LINEAR_VELOCITY`](class_physicsserver3d.md#class_physicsserver3d_constant_body_state_linear_velocity), [`BODY_STATE_ANGULAR_VELOCITY`](class_physicsserver3d.md#class_physicsserver3d_constant_body_state_angular_velocity), [`BODY_STATE_SLEEPING`](class_physicsserver3d.md#class_physicsserver3d_constant_body_state_sleeping), or [`BODY_STATE_CAN_SLEEP`](class_physicsserver3d.md#class_physicsserver3d_constant_body_state_can_sleep).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsserver3d_method_soft_body_set_total_mass"></div>

`void` **soft_body_set_total_mass** ( body: [`RID`](class_rid.md), total_mass: [`float`](class_float.md) )<div id="class_physicsserver3d_method_soft_body_set_total_mass"></div>

Sets the total mass for the given soft body.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsserver3d_method_soft_body_set_transform"></div>

`void` **soft_body_set_transform** ( body: [`RID`](class_rid.md), transform: [`Transform3D`](class_transform3d.md) )<div id="class_physicsserver3d_method_soft_body_set_transform"></div>

Sets the global transform of the given soft body.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsserver3d_method_soft_body_update_rendering_server"></div>

`void` **soft_body_update_rendering_server** ( body: [`RID`](class_rid.md), rendering_server_handler: [`PhysicsServer3DRenderingServerHandler`](class_physicsserver3drenderingserverhandler.md) )<div id="class_physicsserver3d_method_soft_body_update_rendering_server"></div>

Requests that the physics server updates the rendering server with the latest positions of the given soft body's points through the `rendering_server_handler` interface.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsserver3d_method_space_create"></div>

[`RID`](class_rid.md) **space_create** ( )<div id="class_physicsserver3d_method_space_create"></div>

Creates a space. A space is a collection of parameters for the physics engine that can be assigned to an area or a body. It can be assigned to an area with [`area_set_space`](class_physicsserver3d.md#class_physicsserver3d_method_area_set_space), or to a body with [`body_set_space`](class_physicsserver3d.md#class_physicsserver3d_method_body_set_space).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsserver3d_method_space_get_direct_state"></div>

[`PhysicsDirectSpaceState3D`](class_physicsdirectspacestate3d.md) **space_get_direct_state** ( space: [`RID`](class_rid.md) )<div id="class_physicsserver3d_method_space_get_direct_state"></div>

Returns the state of a space, a [`PhysicsDirectSpaceState3D`](class_physicsdirectspacestate3d.md). This object can be used to make collision/intersection queries.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsserver3d_method_space_get_param"></div>

[`float`](class_float.md) **space_get_param** ( space: [`RID`](class_rid.md), param: [SpaceParameter](#enum_physicsserver3d_spaceparameter) ) const[^const]<div id="class_physicsserver3d_method_space_get_param"></div>

Returns the value of a space parameter.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsserver3d_method_space_is_active"></div>

[`bool`](class_bool.md) **space_is_active** ( space: [`RID`](class_rid.md) ) const[^const]<div id="class_physicsserver3d_method_space_is_active"></div>

Returns whether the space is active.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsserver3d_method_space_set_active"></div>

`void` **space_set_active** ( space: [`RID`](class_rid.md), active: [`bool`](class_bool.md) )<div id="class_physicsserver3d_method_space_set_active"></div>

Marks a space as active. It will not have an effect, unless it is assigned to an area or body.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsserver3d_method_space_set_param"></div>

`void` **space_set_param** ( space: [`RID`](class_rid.md), param: [SpaceParameter](#enum_physicsserver3d_spaceparameter), value: [`float`](class_float.md) )<div id="class_physicsserver3d_method_space_set_param"></div>

Sets the value for a space parameter. A list of available parameters is on the [SpaceParameter](#enum_physicsserver3d_spaceparameter) constants.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsserver3d_method_sphere_shape_create"></div>

[`RID`](class_rid.md) **sphere_shape_create** ( )<div id="class_physicsserver3d_method_sphere_shape_create"></div>

该方法目前没有描述，请帮我们\ :ref:`贡献一个 <doc_updating_the_class_reference>`\ 吧！

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsserver3d_method_world_boundary_shape_create"></div>

[`RID`](class_rid.md) **world_boundary_shape_create** ( )<div id="class_physicsserver3d_method_world_boundary_shape_create"></div>

该方法目前没有描述，请帮我们\ :ref:`贡献一个 <doc_updating_the_class_reference>`\ 吧！

[^virtual]: 本方法通常需要用户覆盖才能生效。
[^const]: 本方法无副作用，不会修改该实例的任何成员变量。
[^vararg]: 本方法除了能接受在此处描述的参数外，还能够继续接受任意数量的参数。
[^constructor]: 本方法用于构造某个类型。
[^static]: 调用本方法无需实例，可直接使用类名进行调用。
[^operator]: 本方法描述的是使用本类型作为左操作数的有效运算符。
[^bitfield]: 这个值是由下列位标志构成位掩码的整数。
[^void]: 无返回值。
