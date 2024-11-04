<!-- ⚠ 请勿编辑本文件 ⚠ -->
<!-- 本文档使用脚本从 WeDot 引擎源码仓库生成。 -->
<!-- 生成脚本：https://github.com/WeDot-Engine/WeDot/tree/4.3/doc/tools/make_md.py； -->
<!-- 原文件：https://github.com/WeDot-Engine/WeDot/tree/4.3/doc/classes/PhysicsServer2D.xml。 -->

<div id="_class_physicsserver2d"></div>

# PhysicsServer2D

**继承：** [`Object`](class_object.md)

**派生：** [`PhysicsServer2DExtension`](class_physicsserver2dextension.md)

A server interface for low-level 2D physics access.

## 描述

PhysicsServer2D is the server responsible for all 2D physics. It can directly create and manipulate all physics objects:

- A *space* is a self-contained world for a physics simulation. It contains bodies, areas, and joints. Its state can be queried for collision and intersection information, and several parameters of the simulation can be modified.

- A *shape* is a geometric shape such as a circle, a rectangle, a capsule, or a polygon. It can be used for collision detection by adding it to a body/area, possibly with an extra transformation relative to the body/area's origin. Bodies/areas can have multiple (transformed) shapes added to them, and a single shape can be added to bodies/areas multiple times with different local transformations.

- A *body* is a physical object which can be in static, kinematic, or rigid mode. Its state (such as position and velocity) can be queried and updated. A force integration callback can be set to customize the body's physics.

- An *area* is a region in space which can be used to detect bodies and areas entering and exiting it. A body monitoring callback can be set to report entering/exiting body shapes, and similarly an area monitoring callback can be set. Gravity and damping can be overridden within the area by setting area parameters.

- A *joint* is a constraint, either between two bodies or on one body relative to a point. Parameters such as the joint bias and the rest length of a spring joint can be adjusted.

Physics objects in **PhysicsServer2D** may be created and manipulated independently; they do not have to be tied to nodes in the scene tree.

 **Note:** All the 2D physics nodes use the physics server internally. Adding a physics node to the scene tree will cause a corresponding physics object to be created in the physics server. A rigid body node registers a callback that updates the node's transform with the transform of the respective body object in the physics server (every physics update). An area node registers a callback to inform the area node about overlaps with the respective area object in the physics server. The raycast node queries the direct state of the relevant space in the physics server.

## 方法

| `void`                                                            | [`area_add_shape`](#class_physicsserver2d_method_area_add_shape) ( area: [`RID`](class_rid.md), shape: [`RID`](class_rid.md), transform: [`Transform2D`](class_transform2d.md) = Transform2D(1, 0, 0, 1, 0, 0), disabled: [`bool`](class_bool.md) = false )                                                        |
| `void`                                                            | [`area_attach_canvas_instance_id`](#class_physicsserver2d_method_area_attach_canvas_instance_id) ( area: [`RID`](class_rid.md), id: [`int`](class_int.md) )                                                                                                                                                        |
| `void`                                                            | [`area_attach_object_instance_id`](#class_physicsserver2d_method_area_attach_object_instance_id) ( area: [`RID`](class_rid.md), id: [`int`](class_int.md) )                                                                                                                                                        |
| `void`                                                            | [`area_clear_shapes`](#class_physicsserver2d_method_area_clear_shapes) ( area: [`RID`](class_rid.md) )                                                                                                                                                                                                             |
| [`RID`](class_rid.md)                                             | [`area_create`](#class_physicsserver2d_method_area_create) ( )                                                                                                                                                                                                                                                     |
| [`int`](class_int.md)                                             | [`area_get_canvas_instance_id`](#class_physicsserver2d_method_area_get_canvas_instance_id) ( area: [`RID`](class_rid.md) ) const[^const]                                                                                                                                                                           |
| [`int`](class_int.md)                                             | [`area_get_collision_layer`](#class_physicsserver2d_method_area_get_collision_layer) ( area: [`RID`](class_rid.md) ) const[^const]                                                                                                                                                                                 |
| [`int`](class_int.md)                                             | [`area_get_collision_mask`](#class_physicsserver2d_method_area_get_collision_mask) ( area: [`RID`](class_rid.md) ) const[^const]                                                                                                                                                                                   |
| [`int`](class_int.md)                                             | [`area_get_object_instance_id`](#class_physicsserver2d_method_area_get_object_instance_id) ( area: [`RID`](class_rid.md) ) const[^const]                                                                                                                                                                           |
| [`Variant`](class_variant.md)                                     | [`area_get_param`](#class_physicsserver2d_method_area_get_param) ( area: [`RID`](class_rid.md), param: [AreaParameter](#enum_physicsserver2d_areaparameter) ) const[^const]                                                                                                                                        |
| [`RID`](class_rid.md)                                             | [`area_get_shape`](#class_physicsserver2d_method_area_get_shape) ( area: [`RID`](class_rid.md), shape_idx: [`int`](class_int.md) ) const[^const]                                                                                                                                                                   |
| [`int`](class_int.md)                                             | [`area_get_shape_count`](#class_physicsserver2d_method_area_get_shape_count) ( area: [`RID`](class_rid.md) ) const[^const]                                                                                                                                                                                         |
| [`Transform2D`](class_transform2d.md)                             | [`area_get_shape_transform`](#class_physicsserver2d_method_area_get_shape_transform) ( area: [`RID`](class_rid.md), shape_idx: [`int`](class_int.md) ) const[^const]                                                                                                                                               |
| [`RID`](class_rid.md)                                             | [`area_get_space`](#class_physicsserver2d_method_area_get_space) ( area: [`RID`](class_rid.md) ) const[^const]                                                                                                                                                                                                     |
| [`Transform2D`](class_transform2d.md)                             | [`area_get_transform`](#class_physicsserver2d_method_area_get_transform) ( area: [`RID`](class_rid.md) ) const[^const]                                                                                                                                                                                             |
| `void`                                                            | [`area_remove_shape`](#class_physicsserver2d_method_area_remove_shape) ( area: [`RID`](class_rid.md), shape_idx: [`int`](class_int.md) )                                                                                                                                                                           |
| `void`                                                            | [`area_set_area_monitor_callback`](#class_physicsserver2d_method_area_set_area_monitor_callback) ( area: [`RID`](class_rid.md), callback: [`Callable`](class_callable.md) )                                                                                                                                        |
| `void`                                                            | [`area_set_collision_layer`](#class_physicsserver2d_method_area_set_collision_layer) ( area: [`RID`](class_rid.md), layer: [`int`](class_int.md) )                                                                                                                                                                 |
| `void`                                                            | [`area_set_collision_mask`](#class_physicsserver2d_method_area_set_collision_mask) ( area: [`RID`](class_rid.md), mask: [`int`](class_int.md) )                                                                                                                                                                    |
| `void`                                                            | [`area_set_monitor_callback`](#class_physicsserver2d_method_area_set_monitor_callback) ( area: [`RID`](class_rid.md), callback: [`Callable`](class_callable.md) )                                                                                                                                                  |
| `void`                                                            | [`area_set_monitorable`](#class_physicsserver2d_method_area_set_monitorable) ( area: [`RID`](class_rid.md), monitorable: [`bool`](class_bool.md) )                                                                                                                                                                 |
| `void`                                                            | [`area_set_param`](#class_physicsserver2d_method_area_set_param) ( area: [`RID`](class_rid.md), param: [AreaParameter](#enum_physicsserver2d_areaparameter), value: [`Variant`](class_variant.md) )                                                                                                                |
| `void`                                                            | [`area_set_shape`](#class_physicsserver2d_method_area_set_shape) ( area: [`RID`](class_rid.md), shape_idx: [`int`](class_int.md), shape: [`RID`](class_rid.md) )                                                                                                                                                   |
| `void`                                                            | [`area_set_shape_disabled`](#class_physicsserver2d_method_area_set_shape_disabled) ( area: [`RID`](class_rid.md), shape_idx: [`int`](class_int.md), disabled: [`bool`](class_bool.md) )                                                                                                                            |
| `void`                                                            | [`area_set_shape_transform`](#class_physicsserver2d_method_area_set_shape_transform) ( area: [`RID`](class_rid.md), shape_idx: [`int`](class_int.md), transform: [`Transform2D`](class_transform2d.md) )                                                                                                           |
| `void`                                                            | [`area_set_space`](#class_physicsserver2d_method_area_set_space) ( area: [`RID`](class_rid.md), space: [`RID`](class_rid.md) )                                                                                                                                                                                     |
| `void`                                                            | [`area_set_transform`](#class_physicsserver2d_method_area_set_transform) ( area: [`RID`](class_rid.md), transform: [`Transform2D`](class_transform2d.md) )                                                                                                                                                         |
| `void`                                                            | [`body_add_collision_exception`](#class_physicsserver2d_method_body_add_collision_exception) ( body: [`RID`](class_rid.md), excepted_body: [`RID`](class_rid.md) )                                                                                                                                                 |
| `void`                                                            | [`body_add_constant_central_force`](#class_physicsserver2d_method_body_add_constant_central_force) ( body: [`RID`](class_rid.md), force: [`Vector2`](class_vector2.md) )                                                                                                                                           |
| `void`                                                            | [`body_add_constant_force`](#class_physicsserver2d_method_body_add_constant_force) ( body: [`RID`](class_rid.md), force: [`Vector2`](class_vector2.md), position: [`Vector2`](class_vector2.md) = Vector2(0, 0) )                                                                                                  |
| `void`                                                            | [`body_add_constant_torque`](#class_physicsserver2d_method_body_add_constant_torque) ( body: [`RID`](class_rid.md), torque: [`float`](class_float.md) )                                                                                                                                                            |
| `void`                                                            | [`body_add_shape`](#class_physicsserver2d_method_body_add_shape) ( body: [`RID`](class_rid.md), shape: [`RID`](class_rid.md), transform: [`Transform2D`](class_transform2d.md) = Transform2D(1, 0, 0, 1, 0, 0), disabled: [`bool`](class_bool.md) = false )                                                        |
| `void`                                                            | [`body_apply_central_force`](#class_physicsserver2d_method_body_apply_central_force) ( body: [`RID`](class_rid.md), force: [`Vector2`](class_vector2.md) )                                                                                                                                                         |
| `void`                                                            | [`body_apply_central_impulse`](#class_physicsserver2d_method_body_apply_central_impulse) ( body: [`RID`](class_rid.md), impulse: [`Vector2`](class_vector2.md) )                                                                                                                                                   |
| `void`                                                            | [`body_apply_force`](#class_physicsserver2d_method_body_apply_force) ( body: [`RID`](class_rid.md), force: [`Vector2`](class_vector2.md), position: [`Vector2`](class_vector2.md) = Vector2(0, 0) )                                                                                                                |
| `void`                                                            | [`body_apply_impulse`](#class_physicsserver2d_method_body_apply_impulse) ( body: [`RID`](class_rid.md), impulse: [`Vector2`](class_vector2.md), position: [`Vector2`](class_vector2.md) = Vector2(0, 0) )                                                                                                          |
| `void`                                                            | [`body_apply_torque`](#class_physicsserver2d_method_body_apply_torque) ( body: [`RID`](class_rid.md), torque: [`float`](class_float.md) )                                                                                                                                                                          |
| `void`                                                            | [`body_apply_torque_impulse`](#class_physicsserver2d_method_body_apply_torque_impulse) ( body: [`RID`](class_rid.md), impulse: [`float`](class_float.md) )                                                                                                                                                         |
| `void`                                                            | [`body_attach_canvas_instance_id`](#class_physicsserver2d_method_body_attach_canvas_instance_id) ( body: [`RID`](class_rid.md), id: [`int`](class_int.md) )                                                                                                                                                        |
| `void`                                                            | [`body_attach_object_instance_id`](#class_physicsserver2d_method_body_attach_object_instance_id) ( body: [`RID`](class_rid.md), id: [`int`](class_int.md) )                                                                                                                                                        |
| `void`                                                            | [`body_clear_shapes`](#class_physicsserver2d_method_body_clear_shapes) ( body: [`RID`](class_rid.md) )                                                                                                                                                                                                             |
| [`RID`](class_rid.md)                                             | [`body_create`](#class_physicsserver2d_method_body_create) ( )                                                                                                                                                                                                                                                     |
| [`int`](class_int.md)                                             | [`body_get_canvas_instance_id`](#class_physicsserver2d_method_body_get_canvas_instance_id) ( body: [`RID`](class_rid.md) ) const[^const]                                                                                                                                                                           |
| [`int`](class_int.md)                                             | [`body_get_collision_layer`](#class_physicsserver2d_method_body_get_collision_layer) ( body: [`RID`](class_rid.md) ) const[^const]                                                                                                                                                                                 |
| [`int`](class_int.md)                                             | [`body_get_collision_mask`](#class_physicsserver2d_method_body_get_collision_mask) ( body: [`RID`](class_rid.md) ) const[^const]                                                                                                                                                                                   |
| [`float`](class_float.md)                                         | [`body_get_collision_priority`](#class_physicsserver2d_method_body_get_collision_priority) ( body: [`RID`](class_rid.md) ) const[^const]                                                                                                                                                                           |
| [`Vector2`](class_vector2.md)                                     | [`body_get_constant_force`](#class_physicsserver2d_method_body_get_constant_force) ( body: [`RID`](class_rid.md) ) const[^const]                                                                                                                                                                                   |
| [`float`](class_float.md)                                         | [`body_get_constant_torque`](#class_physicsserver2d_method_body_get_constant_torque) ( body: [`RID`](class_rid.md) ) const[^const]                                                                                                                                                                                 |
| [CCDMode](#enum_physicsserver2d_ccdmode)                          | [`body_get_continuous_collision_detection_mode`](#class_physicsserver2d_method_body_get_continuous_collision_detection_mode) ( body: [`RID`](class_rid.md) ) const[^const]                                                                                                                                         |
| [`PhysicsDirectBodyState2D`](class_physicsdirectbodystate2d.md)   | [`body_get_direct_state`](#class_physicsserver2d_method_body_get_direct_state) ( body: [`RID`](class_rid.md) )                                                                                                                                                                                                     |
| [`int`](class_int.md)                                             | [`body_get_max_contacts_reported`](#class_physicsserver2d_method_body_get_max_contacts_reported) ( body: [`RID`](class_rid.md) ) const[^const]                                                                                                                                                                     |
| [BodyMode](#enum_physicsserver2d_bodymode)                        | [`body_get_mode`](#class_physicsserver2d_method_body_get_mode) ( body: [`RID`](class_rid.md) ) const[^const]                                                                                                                                                                                                       |
| [`int`](class_int.md)                                             | [`body_get_object_instance_id`](#class_physicsserver2d_method_body_get_object_instance_id) ( body: [`RID`](class_rid.md) ) const[^const]                                                                                                                                                                           |
| [`Variant`](class_variant.md)                                     | [`body_get_param`](#class_physicsserver2d_method_body_get_param) ( body: [`RID`](class_rid.md), param: [BodyParameter](#enum_physicsserver2d_bodyparameter) ) const[^const]                                                                                                                                        |
| [`RID`](class_rid.md)                                             | [`body_get_shape`](#class_physicsserver2d_method_body_get_shape) ( body: [`RID`](class_rid.md), shape_idx: [`int`](class_int.md) ) const[^const]                                                                                                                                                                   |
| [`int`](class_int.md)                                             | [`body_get_shape_count`](#class_physicsserver2d_method_body_get_shape_count) ( body: [`RID`](class_rid.md) ) const[^const]                                                                                                                                                                                         |
| [`Transform2D`](class_transform2d.md)                             | [`body_get_shape_transform`](#class_physicsserver2d_method_body_get_shape_transform) ( body: [`RID`](class_rid.md), shape_idx: [`int`](class_int.md) ) const[^const]                                                                                                                                               |
| [`RID`](class_rid.md)                                             | [`body_get_space`](#class_physicsserver2d_method_body_get_space) ( body: [`RID`](class_rid.md) ) const[^const]                                                                                                                                                                                                     |
| [`Variant`](class_variant.md)                                     | [`body_get_state`](#class_physicsserver2d_method_body_get_state) ( body: [`RID`](class_rid.md), state: [BodyState](#enum_physicsserver2d_bodystate) ) const[^const]                                                                                                                                                |
| [`bool`](class_bool.md)                                           | [`body_is_omitting_force_integration`](#class_physicsserver2d_method_body_is_omitting_force_integration) ( body: [`RID`](class_rid.md) ) const[^const]                                                                                                                                                             |
| `void`                                                            | [`body_remove_collision_exception`](#class_physicsserver2d_method_body_remove_collision_exception) ( body: [`RID`](class_rid.md), excepted_body: [`RID`](class_rid.md) )                                                                                                                                           |
| `void`                                                            | [`body_remove_shape`](#class_physicsserver2d_method_body_remove_shape) ( body: [`RID`](class_rid.md), shape_idx: [`int`](class_int.md) )                                                                                                                                                                           |
| `void`                                                            | [`body_reset_mass_properties`](#class_physicsserver2d_method_body_reset_mass_properties) ( body: [`RID`](class_rid.md) )                                                                                                                                                                                           |
| `void`                                                            | [`body_set_axis_velocity`](#class_physicsserver2d_method_body_set_axis_velocity) ( body: [`RID`](class_rid.md), axis_velocity: [`Vector2`](class_vector2.md) )                                                                                                                                                     |
| `void`                                                            | [`body_set_collision_layer`](#class_physicsserver2d_method_body_set_collision_layer) ( body: [`RID`](class_rid.md), layer: [`int`](class_int.md) )                                                                                                                                                                 |
| `void`                                                            | [`body_set_collision_mask`](#class_physicsserver2d_method_body_set_collision_mask) ( body: [`RID`](class_rid.md), mask: [`int`](class_int.md) )                                                                                                                                                                    |
| `void`                                                            | [`body_set_collision_priority`](#class_physicsserver2d_method_body_set_collision_priority) ( body: [`RID`](class_rid.md), priority: [`float`](class_float.md) )                                                                                                                                                    |
| `void`                                                            | [`body_set_constant_force`](#class_physicsserver2d_method_body_set_constant_force) ( body: [`RID`](class_rid.md), force: [`Vector2`](class_vector2.md) )                                                                                                                                                           |
| `void`                                                            | [`body_set_constant_torque`](#class_physicsserver2d_method_body_set_constant_torque) ( body: [`RID`](class_rid.md), torque: [`float`](class_float.md) )                                                                                                                                                            |
| `void`                                                            | [`body_set_continuous_collision_detection_mode`](#class_physicsserver2d_method_body_set_continuous_collision_detection_mode) ( body: [`RID`](class_rid.md), mode: [CCDMode](#enum_physicsserver2d_ccdmode) )                                                                                                       |
| `void`                                                            | [`body_set_force_integration_callback`](#class_physicsserver2d_method_body_set_force_integration_callback) ( body: [`RID`](class_rid.md), callable: [`Callable`](class_callable.md), userdata: [`Variant`](class_variant.md) = null )                                                                              |
| `void`                                                            | [`body_set_max_contacts_reported`](#class_physicsserver2d_method_body_set_max_contacts_reported) ( body: [`RID`](class_rid.md), amount: [`int`](class_int.md) )                                                                                                                                                    |
| `void`                                                            | [`body_set_mode`](#class_physicsserver2d_method_body_set_mode) ( body: [`RID`](class_rid.md), mode: [BodyMode](#enum_physicsserver2d_bodymode) )                                                                                                                                                                   |
| `void`                                                            | [`body_set_omit_force_integration`](#class_physicsserver2d_method_body_set_omit_force_integration) ( body: [`RID`](class_rid.md), enable: [`bool`](class_bool.md) )                                                                                                                                                |
| `void`                                                            | [`body_set_param`](#class_physicsserver2d_method_body_set_param) ( body: [`RID`](class_rid.md), param: [BodyParameter](#enum_physicsserver2d_bodyparameter), value: [`Variant`](class_variant.md) )                                                                                                                |
| `void`                                                            | [`body_set_shape`](#class_physicsserver2d_method_body_set_shape) ( body: [`RID`](class_rid.md), shape_idx: [`int`](class_int.md), shape: [`RID`](class_rid.md) )                                                                                                                                                   |
| `void`                                                            | [`body_set_shape_as_one_way_collision`](#class_physicsserver2d_method_body_set_shape_as_one_way_collision) ( body: [`RID`](class_rid.md), shape_idx: [`int`](class_int.md), enable: [`bool`](class_bool.md), margin: [`float`](class_float.md) )                                                                   |
| `void`                                                            | [`body_set_shape_disabled`](#class_physicsserver2d_method_body_set_shape_disabled) ( body: [`RID`](class_rid.md), shape_idx: [`int`](class_int.md), disabled: [`bool`](class_bool.md) )                                                                                                                            |
| `void`                                                            | [`body_set_shape_transform`](#class_physicsserver2d_method_body_set_shape_transform) ( body: [`RID`](class_rid.md), shape_idx: [`int`](class_int.md), transform: [`Transform2D`](class_transform2d.md) )                                                                                                           |
| `void`                                                            | [`body_set_space`](#class_physicsserver2d_method_body_set_space) ( body: [`RID`](class_rid.md), space: [`RID`](class_rid.md) )                                                                                                                                                                                     |
| `void`                                                            | [`body_set_state`](#class_physicsserver2d_method_body_set_state) ( body: [`RID`](class_rid.md), state: [BodyState](#enum_physicsserver2d_bodystate), value: [`Variant`](class_variant.md) )                                                                                                                        |
| `void`                                                            | [`body_set_state_sync_callback`](#class_physicsserver2d_method_body_set_state_sync_callback) ( body: [`RID`](class_rid.md), callable: [`Callable`](class_callable.md) )                                                                                                                                            |
| [`bool`](class_bool.md)                                           | [`body_test_motion`](#class_physicsserver2d_method_body_test_motion) ( body: [`RID`](class_rid.md), parameters: [`PhysicsTestMotionParameters2D`](class_physicstestmotionparameters2d.md), result: [`PhysicsTestMotionResult2D`](class_physicstestmotionresult2d.md) = null )                                      |
| [`RID`](class_rid.md)                                             | [`capsule_shape_create`](#class_physicsserver2d_method_capsule_shape_create) ( )                                                                                                                                                                                                                                   |
| [`RID`](class_rid.md)                                             | [`circle_shape_create`](#class_physicsserver2d_method_circle_shape_create) ( )                                                                                                                                                                                                                                     |
| [`RID`](class_rid.md)                                             | [`concave_polygon_shape_create`](#class_physicsserver2d_method_concave_polygon_shape_create) ( )                                                                                                                                                                                                                   |
| [`RID`](class_rid.md)                                             | [`convex_polygon_shape_create`](#class_physicsserver2d_method_convex_polygon_shape_create) ( )                                                                                                                                                                                                                     |
| [`float`](class_float.md)                                         | [`damped_spring_joint_get_param`](#class_physicsserver2d_method_damped_spring_joint_get_param) ( joint: [`RID`](class_rid.md), param: [DampedSpringParam](#enum_physicsserver2d_dampedspringparam) ) const[^const]                                                                                                 |
| `void`                                                            | [`damped_spring_joint_set_param`](#class_physicsserver2d_method_damped_spring_joint_set_param) ( joint: [`RID`](class_rid.md), param: [DampedSpringParam](#enum_physicsserver2d_dampedspringparam), value: [`float`](class_float.md) )                                                                             |
| `void`                                                            | [`free_rid`](#class_physicsserver2d_method_free_rid) ( rid: [`RID`](class_rid.md) )                                                                                                                                                                                                                                |
| [`int`](class_int.md)                                             | [`get_process_info`](#class_physicsserver2d_method_get_process_info) ( process_info: [ProcessInfo](#enum_physicsserver2d_processinfo) )                                                                                                                                                                            |
| `void`                                                            | [`joint_clear`](#class_physicsserver2d_method_joint_clear) ( joint: [`RID`](class_rid.md) )                                                                                                                                                                                                                        |
| [`RID`](class_rid.md)                                             | [`joint_create`](#class_physicsserver2d_method_joint_create) ( )                                                                                                                                                                                                                                                   |
| `void`                                                            | [`joint_disable_collisions_between_bodies`](#class_physicsserver2d_method_joint_disable_collisions_between_bodies) ( joint: [`RID`](class_rid.md), disable: [`bool`](class_bool.md) )                                                                                                                              |
| [`float`](class_float.md)                                         | [`joint_get_param`](#class_physicsserver2d_method_joint_get_param) ( joint: [`RID`](class_rid.md), param: [JointParam](#enum_physicsserver2d_jointparam) ) const[^const]                                                                                                                                           |
| [JointType](#enum_physicsserver2d_jointtype)                      | [`joint_get_type`](#class_physicsserver2d_method_joint_get_type) ( joint: [`RID`](class_rid.md) ) const[^const]                                                                                                                                                                                                    |
| [`bool`](class_bool.md)                                           | [`joint_is_disabled_collisions_between_bodies`](#class_physicsserver2d_method_joint_is_disabled_collisions_between_bodies) ( joint: [`RID`](class_rid.md) ) const[^const]                                                                                                                                          |
| `void`                                                            | [`joint_make_damped_spring`](#class_physicsserver2d_method_joint_make_damped_spring) ( joint: [`RID`](class_rid.md), anchor_a: [`Vector2`](class_vector2.md), anchor_b: [`Vector2`](class_vector2.md), body_a: [`RID`](class_rid.md), body_b: [`RID`](class_rid.md) = RID() )                                      |
| `void`                                                            | [`joint_make_groove`](#class_physicsserver2d_method_joint_make_groove) ( joint: [`RID`](class_rid.md), groove1_a: [`Vector2`](class_vector2.md), groove2_a: [`Vector2`](class_vector2.md), anchor_b: [`Vector2`](class_vector2.md), body_a: [`RID`](class_rid.md) = RID(), body_b: [`RID`](class_rid.md) = RID() ) |
| `void`                                                            | [`joint_make_pin`](#class_physicsserver2d_method_joint_make_pin) ( joint: [`RID`](class_rid.md), anchor: [`Vector2`](class_vector2.md), body_a: [`RID`](class_rid.md), body_b: [`RID`](class_rid.md) = RID() )                                                                                                     |
| `void`                                                            | [`joint_set_param`](#class_physicsserver2d_method_joint_set_param) ( joint: [`RID`](class_rid.md), param: [JointParam](#enum_physicsserver2d_jointparam), value: [`float`](class_float.md) )                                                                                                                       |
| [`bool`](class_bool.md)                                           | [`pin_joint_get_flag`](#class_physicsserver2d_method_pin_joint_get_flag) ( joint: [`RID`](class_rid.md), flag: [PinJointFlag](#enum_physicsserver2d_pinjointflag) ) const[^const]                                                                                                                                  |
| [`float`](class_float.md)                                         | [`pin_joint_get_param`](#class_physicsserver2d_method_pin_joint_get_param) ( joint: [`RID`](class_rid.md), param: [PinJointParam](#enum_physicsserver2d_pinjointparam) ) const[^const]                                                                                                                             |
| `void`                                                            | [`pin_joint_set_flag`](#class_physicsserver2d_method_pin_joint_set_flag) ( joint: [`RID`](class_rid.md), flag: [PinJointFlag](#enum_physicsserver2d_pinjointflag), enabled: [`bool`](class_bool.md) )                                                                                                              |
| `void`                                                            | [`pin_joint_set_param`](#class_physicsserver2d_method_pin_joint_set_param) ( joint: [`RID`](class_rid.md), param: [PinJointParam](#enum_physicsserver2d_pinjointparam), value: [`float`](class_float.md) )                                                                                                         |
| [`RID`](class_rid.md)                                             | [`rectangle_shape_create`](#class_physicsserver2d_method_rectangle_shape_create) ( )                                                                                                                                                                                                                               |
| [`RID`](class_rid.md)                                             | [`segment_shape_create`](#class_physicsserver2d_method_segment_shape_create) ( )                                                                                                                                                                                                                                   |
| [`RID`](class_rid.md)                                             | [`separation_ray_shape_create`](#class_physicsserver2d_method_separation_ray_shape_create) ( )                                                                                                                                                                                                                     |
| `void`                                                            | [`set_active`](#class_physicsserver2d_method_set_active) ( active: [`bool`](class_bool.md) )                                                                                                                                                                                                                       |
| [`Variant`](class_variant.md)                                     | [`shape_get_data`](#class_physicsserver2d_method_shape_get_data) ( shape: [`RID`](class_rid.md) ) const[^const]                                                                                                                                                                                                    |
| [ShapeType](#enum_physicsserver2d_shapetype)                      | [`shape_get_type`](#class_physicsserver2d_method_shape_get_type) ( shape: [`RID`](class_rid.md) ) const[^const]                                                                                                                                                                                                    |
| `void`                                                            | [`shape_set_data`](#class_physicsserver2d_method_shape_set_data) ( shape: [`RID`](class_rid.md), data: [`Variant`](class_variant.md) )                                                                                                                                                                             |
| [`RID`](class_rid.md)                                             | [`space_create`](#class_physicsserver2d_method_space_create) ( )                                                                                                                                                                                                                                                   |
| [`PhysicsDirectSpaceState2D`](class_physicsdirectspacestate2d.md) | [`space_get_direct_state`](#class_physicsserver2d_method_space_get_direct_state) ( space: [`RID`](class_rid.md) )                                                                                                                                                                                                  |
| [`float`](class_float.md)                                         | [`space_get_param`](#class_physicsserver2d_method_space_get_param) ( space: [`RID`](class_rid.md), param: [SpaceParameter](#enum_physicsserver2d_spaceparameter) ) const[^const]                                                                                                                                   |
| [`bool`](class_bool.md)                                           | [`space_is_active`](#class_physicsserver2d_method_space_is_active) ( space: [`RID`](class_rid.md) ) const[^const]                                                                                                                                                                                                  |
| `void`                                                            | [`space_set_active`](#class_physicsserver2d_method_space_set_active) ( space: [`RID`](class_rid.md), active: [`bool`](class_bool.md) )                                                                                                                                                                             |
| `void`                                                            | [`space_set_param`](#class_physicsserver2d_method_space_set_param) ( space: [`RID`](class_rid.md), param: [SpaceParameter](#enum_physicsserver2d_spaceparameter), value: [`float`](class_float.md) )                                                                                                               |
| [`RID`](class_rid.md)                                             | [`world_boundary_shape_create`](#class_physicsserver2d_method_world_boundary_shape_create) ( )                                                                                                                                                                                                                     |

<!-- rst-class:: classref-section-separator -->

---

## 枚举

<div id="_class_enum_physicsserver2d_spaceparameter"></div>

enum **SpaceParameter**: <div id="enum_physicsserver2d_spaceparameter"></div>

<div id="_class_physicsserver2d_constant_space_param_contact_recycle_radius"></div>

[SpaceParameter](#enum_physicsserver2d_spaceparameter) **SPACE_PARAM_CONTACT_RECYCLE_RADIUS** = ``0``

Constant to set/get the maximum distance a pair of bodies has to move before their collision status has to be recalculated. The default value of this parameter is [`ProjectSettings.physics/2d/solver/contact_recycle_radius`](#class_projectsettings_property_physics/2d/solver/contact_recycle_radius).

<div id="_class_physicsserver2d_constant_space_param_contact_max_separation"></div>

[SpaceParameter](#enum_physicsserver2d_spaceparameter) **SPACE_PARAM_CONTACT_MAX_SEPARATION** = ``1``

Constant to set/get the maximum distance a shape can be from another before they are considered separated and the contact is discarded. The default value of this parameter is [`ProjectSettings.physics/2d/solver/contact_max_separation`](#class_projectsettings_property_physics/2d/solver/contact_max_separation).

<div id="_class_physicsserver2d_constant_space_param_contact_max_allowed_penetration"></div>

[SpaceParameter](#enum_physicsserver2d_spaceparameter) **SPACE_PARAM_CONTACT_MAX_ALLOWED_PENETRATION** = ``2``

Constant to set/get the maximum distance a shape can penetrate another shape before it is considered a collision. The default value of this parameter is [`ProjectSettings.physics/2d/solver/contact_max_allowed_penetration`](#class_projectsettings_property_physics/2d/solver/contact_max_allowed_penetration).

<div id="_class_physicsserver2d_constant_space_param_contact_default_bias"></div>

[SpaceParameter](#enum_physicsserver2d_spaceparameter) **SPACE_PARAM_CONTACT_DEFAULT_BIAS** = ``3``

Constant to set/get the default solver bias for all physics contacts. A solver bias is a factor controlling how much two objects "rebound", after overlapping, to avoid leaving them in that state because of numerical imprecision. The default value of this parameter is [`ProjectSettings.physics/2d/solver/default_contact_bias`](#class_projectsettings_property_physics/2d/solver/default_contact_bias).

<div id="_class_physicsserver2d_constant_space_param_body_linear_velocity_sleep_threshold"></div>

[SpaceParameter](#enum_physicsserver2d_spaceparameter) **SPACE_PARAM_BODY_LINEAR_VELOCITY_SLEEP_THRESHOLD** = ``4``

Constant to set/get the threshold linear velocity of activity. A body marked as potentially inactive for both linear and angular velocity will be put to sleep after the time given. The default value of this parameter is [`ProjectSettings.physics/2d/sleep_threshold_linear`](#class_projectsettings_property_physics/2d/sleep_threshold_linear).

<div id="_class_physicsserver2d_constant_space_param_body_angular_velocity_sleep_threshold"></div>

[SpaceParameter](#enum_physicsserver2d_spaceparameter) **SPACE_PARAM_BODY_ANGULAR_VELOCITY_SLEEP_THRESHOLD** = ``5``

Constant to set/get the threshold angular velocity of activity. A body marked as potentially inactive for both linear and angular velocity will be put to sleep after the time given. The default value of this parameter is [`ProjectSettings.physics/2d/sleep_threshold_angular`](#class_projectsettings_property_physics/2d/sleep_threshold_angular).

<div id="_class_physicsserver2d_constant_space_param_body_time_to_sleep"></div>

[SpaceParameter](#enum_physicsserver2d_spaceparameter) **SPACE_PARAM_BODY_TIME_TO_SLEEP** = ``6``

Constant to set/get the maximum time of activity. A body marked as potentially inactive for both linear and angular velocity will be put to sleep after this time. The default value of this parameter is [`ProjectSettings.physics/2d/time_before_sleep`](#class_projectsettings_property_physics/2d/time_before_sleep).

<div id="_class_physicsserver2d_constant_space_param_constraint_default_bias"></div>

[SpaceParameter](#enum_physicsserver2d_spaceparameter) **SPACE_PARAM_CONSTRAINT_DEFAULT_BIAS** = ``7``

Constant to set/get the default solver bias for all physics constraints. A solver bias is a factor controlling how much two objects "rebound", after violating a constraint, to avoid leaving them in that state because of numerical imprecision. The default value of this parameter is [`ProjectSettings.physics/2d/solver/default_constraint_bias`](#class_projectsettings_property_physics/2d/solver/default_constraint_bias).

<div id="_class_physicsserver2d_constant_space_param_solver_iterations"></div>

[SpaceParameter](#enum_physicsserver2d_spaceparameter) **SPACE_PARAM_SOLVER_ITERATIONS** = ``8``

Constant to set/get the number of solver iterations for all contacts and constraints. The greater the number of iterations, the more accurate the collisions will be. However, a greater number of iterations requires more CPU power, which can decrease performance. The default value of this parameter is [`ProjectSettings.physics/2d/solver/solver_iterations`](#class_projectsettings_property_physics/2d/solver/solver_iterations).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_enum_physicsserver2d_shapetype"></div>

enum **ShapeType**: <div id="enum_physicsserver2d_shapetype"></div>

<div id="_class_physicsserver2d_constant_shape_world_boundary"></div>

[ShapeType](#enum_physicsserver2d_shapetype) **SHAPE_WORLD_BOUNDARY** = ``0``

This is the constant for creating world boundary shapes. A world boundary shape is an *infinite* line with an origin point, and a normal. Thus, it can be used for front/behind checks.

<div id="_class_physicsserver2d_constant_shape_separation_ray"></div>

[ShapeType](#enum_physicsserver2d_shapetype) **SHAPE_SEPARATION_RAY** = ``1``

This is the constant for creating separation ray shapes. A separation ray is defined by a length and separates itself from what is touching its far endpoint. Useful for character controllers.

<div id="_class_physicsserver2d_constant_shape_segment"></div>

[ShapeType](#enum_physicsserver2d_shapetype) **SHAPE_SEGMENT** = ``2``

This is the constant for creating segment shapes. A segment shape is a *finite* line from a point A to a point B. It can be checked for intersections.

<div id="_class_physicsserver2d_constant_shape_circle"></div>

[ShapeType](#enum_physicsserver2d_shapetype) **SHAPE_CIRCLE** = ``3``

This is the constant for creating circle shapes. A circle shape only has a radius. It can be used for intersections and inside/outside checks.

<div id="_class_physicsserver2d_constant_shape_rectangle"></div>

[ShapeType](#enum_physicsserver2d_shapetype) **SHAPE_RECTANGLE** = ``4``

This is the constant for creating rectangle shapes. A rectangle shape is defined by a width and a height. It can be used for intersections and inside/outside checks.

<div id="_class_physicsserver2d_constant_shape_capsule"></div>

[ShapeType](#enum_physicsserver2d_shapetype) **SHAPE_CAPSULE** = ``5``

This is the constant for creating capsule shapes. A capsule shape is defined by a radius and a length. It can be used for intersections and inside/outside checks.

<div id="_class_physicsserver2d_constant_shape_convex_polygon"></div>

[ShapeType](#enum_physicsserver2d_shapetype) **SHAPE_CONVEX_POLYGON** = ``6``

This is the constant for creating convex polygon shapes. A polygon is defined by a list of points. It can be used for intersections and inside/outside checks.

<div id="_class_physicsserver2d_constant_shape_concave_polygon"></div>

[ShapeType](#enum_physicsserver2d_shapetype) **SHAPE_CONCAVE_POLYGON** = ``7``

This is the constant for creating concave polygon shapes. A polygon is defined by a list of points. It can be used for intersections checks, but not for inside/outside checks.

<div id="_class_physicsserver2d_constant_shape_custom"></div>

[ShapeType](#enum_physicsserver2d_shapetype) **SHAPE_CUSTOM** = ``8``

This constant is used internally by the engine. Any attempt to create this kind of shape results in an error.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_enum_physicsserver2d_areaparameter"></div>

enum **AreaParameter**: <div id="enum_physicsserver2d_areaparameter"></div>

<div id="_class_physicsserver2d_constant_area_param_gravity_override_mode"></div>

[AreaParameter](#enum_physicsserver2d_areaparameter) **AREA_PARAM_GRAVITY_OVERRIDE_MODE** = ``0``

Constant to set/get gravity override mode in an area. See [AreaSpaceOverrideMode](#enum_physicsserver2d_areaspaceoverridemode) for possible values. The default value of this parameter is [`AREA_SPACE_OVERRIDE_DISABLED`](#class_physicsserver2d_constant_area_space_override_disabled).

<div id="_class_physicsserver2d_constant_area_param_gravity"></div>

[AreaParameter](#enum_physicsserver2d_areaparameter) **AREA_PARAM_GRAVITY** = ``1``

Constant to set/get gravity strength in an area. The default value of this parameter is `9.80665`.

<div id="_class_physicsserver2d_constant_area_param_gravity_vector"></div>

[AreaParameter](#enum_physicsserver2d_areaparameter) **AREA_PARAM_GRAVITY_VECTOR** = ``2``

Constant to set/get gravity vector/center in an area. The default value of this parameter is `Vector2(0, -1)`.

<div id="_class_physicsserver2d_constant_area_param_gravity_is_point"></div>

[AreaParameter](#enum_physicsserver2d_areaparameter) **AREA_PARAM_GRAVITY_IS_POINT** = ``3``

Constant to set/get whether the gravity vector of an area is a direction, or a center point. The default value of this parameter is `false`.

<div id="_class_physicsserver2d_constant_area_param_gravity_point_unit_distance"></div>

[AreaParameter](#enum_physicsserver2d_areaparameter) **AREA_PARAM_GRAVITY_POINT_UNIT_DISTANCE** = ``4``

Constant to set/get the distance at which the gravity strength is equal to the gravity controlled by [`AREA_PARAM_GRAVITY`](#class_physicsserver2d_constant_area_param_gravity). For example, on a planet 100 pixels in radius with a surface gravity of 4.0 px/s², set the gravity to 4.0 and the unit distance to 100.0. The gravity will have falloff according to the inverse square law, so in the example, at 200 pixels from the center the gravity will be 1.0 px/s² (twice the distance, 1/4th the gravity), at 50 pixels it will be 16.0 px/s² (half the distance, 4x the gravity), and so on.

The above is true only when the unit distance is a positive number. When the unit distance is set to 0.0, the gravity will be constant regardless of distance. The default value of this parameter is `0.0`.

<div id="_class_physicsserver2d_constant_area_param_linear_damp_override_mode"></div>

[AreaParameter](#enum_physicsserver2d_areaparameter) **AREA_PARAM_LINEAR_DAMP_OVERRIDE_MODE** = ``5``

Constant to set/get linear damping override mode in an area. See [AreaSpaceOverrideMode](#enum_physicsserver2d_areaspaceoverridemode) for possible values. The default value of this parameter is [`AREA_SPACE_OVERRIDE_DISABLED`](#class_physicsserver2d_constant_area_space_override_disabled).

<div id="_class_physicsserver2d_constant_area_param_linear_damp"></div>

[AreaParameter](#enum_physicsserver2d_areaparameter) **AREA_PARAM_LINEAR_DAMP** = ``6``

Constant to set/get the linear damping factor of an area. The default value of this parameter is `0.1`.

<div id="_class_physicsserver2d_constant_area_param_angular_damp_override_mode"></div>

[AreaParameter](#enum_physicsserver2d_areaparameter) **AREA_PARAM_ANGULAR_DAMP_OVERRIDE_MODE** = ``7``

Constant to set/get angular damping override mode in an area. See [AreaSpaceOverrideMode](#enum_physicsserver2d_areaspaceoverridemode) for possible values. The default value of this parameter is [`AREA_SPACE_OVERRIDE_DISABLED`](#class_physicsserver2d_constant_area_space_override_disabled).

<div id="_class_physicsserver2d_constant_area_param_angular_damp"></div>

[AreaParameter](#enum_physicsserver2d_areaparameter) **AREA_PARAM_ANGULAR_DAMP** = ``8``

Constant to set/get the angular damping factor of an area. The default value of this parameter is `1.0`.

<div id="_class_physicsserver2d_constant_area_param_priority"></div>

[AreaParameter](#enum_physicsserver2d_areaparameter) **AREA_PARAM_PRIORITY** = ``9``

Constant to set/get the priority (order of processing) of an area. The default value of this parameter is `0`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_enum_physicsserver2d_areaspaceoverridemode"></div>

enum **AreaSpaceOverrideMode**: <div id="enum_physicsserver2d_areaspaceoverridemode"></div>

<div id="_class_physicsserver2d_constant_area_space_override_disabled"></div>

[AreaSpaceOverrideMode](#enum_physicsserver2d_areaspaceoverridemode) **AREA_SPACE_OVERRIDE_DISABLED** = ``0``

This area does not affect gravity/damp. These are generally areas that exist only to detect collisions, and objects entering or exiting them.

<div id="_class_physicsserver2d_constant_area_space_override_combine"></div>

[AreaSpaceOverrideMode](#enum_physicsserver2d_areaspaceoverridemode) **AREA_SPACE_OVERRIDE_COMBINE** = ``1``

This area adds its gravity/damp values to whatever has been calculated so far. This way, many overlapping areas can combine their physics to make interesting effects.

<div id="_class_physicsserver2d_constant_area_space_override_combine_replace"></div>

[AreaSpaceOverrideMode](#enum_physicsserver2d_areaspaceoverridemode) **AREA_SPACE_OVERRIDE_COMBINE_REPLACE** = ``2``

This area adds its gravity/damp values to whatever has been calculated so far. Then stops taking into account the rest of the areas, even the default one.

<div id="_class_physicsserver2d_constant_area_space_override_replace"></div>

[AreaSpaceOverrideMode](#enum_physicsserver2d_areaspaceoverridemode) **AREA_SPACE_OVERRIDE_REPLACE** = ``3``

This area replaces any gravity/damp, even the default one, and stops taking into account the rest of the areas.

<div id="_class_physicsserver2d_constant_area_space_override_replace_combine"></div>

[AreaSpaceOverrideMode](#enum_physicsserver2d_areaspaceoverridemode) **AREA_SPACE_OVERRIDE_REPLACE_COMBINE** = ``4``

This area replaces any gravity/damp calculated so far, but keeps calculating the rest of the areas, down to the default one.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_enum_physicsserver2d_bodymode"></div>

enum **BodyMode**: <div id="enum_physicsserver2d_bodymode"></div>

<div id="_class_physicsserver2d_constant_body_mode_static"></div>

[BodyMode](#enum_physicsserver2d_bodymode) **BODY_MODE_STATIC** = ``0``

Constant for static bodies. In this mode, a body can be only moved by user code and doesn't collide with other bodies along its path when moved.

<div id="_class_physicsserver2d_constant_body_mode_kinematic"></div>

[BodyMode](#enum_physicsserver2d_bodymode) **BODY_MODE_KINEMATIC** = ``1``

Constant for kinematic bodies. In this mode, a body can be only moved by user code and collides with other bodies along its path.

<div id="_class_physicsserver2d_constant_body_mode_rigid"></div>

[BodyMode](#enum_physicsserver2d_bodymode) **BODY_MODE_RIGID** = ``2``

Constant for rigid bodies. In this mode, a body can be pushed by other bodies and has forces applied.

<div id="_class_physicsserver2d_constant_body_mode_rigid_linear"></div>

[BodyMode](#enum_physicsserver2d_bodymode) **BODY_MODE_RIGID_LINEAR** = ``3``

Constant for linear rigid bodies. In this mode, a body can not rotate, and only its linear velocity is affected by external forces.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_enum_physicsserver2d_bodyparameter"></div>

enum **BodyParameter**: <div id="enum_physicsserver2d_bodyparameter"></div>

<div id="_class_physicsserver2d_constant_body_param_bounce"></div>

[BodyParameter](#enum_physicsserver2d_bodyparameter) **BODY_PARAM_BOUNCE** = ``0``

Constant to set/get a body's bounce factor. The default value of this parameter is `0.0`.

<div id="_class_physicsserver2d_constant_body_param_friction"></div>

[BodyParameter](#enum_physicsserver2d_bodyparameter) **BODY_PARAM_FRICTION** = ``1``

Constant to set/get a body's friction. The default value of this parameter is `1.0`.

<div id="_class_physicsserver2d_constant_body_param_mass"></div>

[BodyParameter](#enum_physicsserver2d_bodyparameter) **BODY_PARAM_MASS** = ``2``

Constant to set/get a body's mass. The default value of this parameter is `1.0`. If the body's mode is set to [`BODY_MODE_RIGID`](#class_physicsserver2d_constant_body_mode_rigid), then setting this parameter will have the following additional effects:

- If the parameter [`BODY_PARAM_CENTER_OF_MASS`](#class_physicsserver2d_constant_body_param_center_of_mass) has never been set explicitly, then the value of that parameter will be recalculated based on the body's shapes.

- If the parameter [`BODY_PARAM_INERTIA`](#class_physicsserver2d_constant_body_param_inertia) is set to a value `<= 0.0`, then the value of that parameter will be recalculated based on the body's shapes, mass, and center of mass.

<div id="_class_physicsserver2d_constant_body_param_inertia"></div>

[BodyParameter](#enum_physicsserver2d_bodyparameter) **BODY_PARAM_INERTIA** = ``3``

Constant to set/get a body's inertia. The default value of this parameter is `0.0`. If the body's inertia is set to a value `<= 0.0`, then the inertia will be recalculated based on the body's shapes, mass, and center of mass.

<div id="_class_physicsserver2d_constant_body_param_center_of_mass"></div>

[BodyParameter](#enum_physicsserver2d_bodyparameter) **BODY_PARAM_CENTER_OF_MASS** = ``4``

Constant to set/get a body's center of mass position in the body's local coordinate system. The default value of this parameter is `Vector2(0,0)`. If this parameter is never set explicitly, then it is recalculated based on the body's shapes when setting the parameter [`BODY_PARAM_MASS`](#class_physicsserver2d_constant_body_param_mass) or when calling [`body_set_space`](#class_physicsserver2d_method_body_set_space).

<div id="_class_physicsserver2d_constant_body_param_gravity_scale"></div>

[BodyParameter](#enum_physicsserver2d_bodyparameter) **BODY_PARAM_GRAVITY_SCALE** = ``5``

Constant to set/get a body's gravity multiplier. The default value of this parameter is `1.0`.

<div id="_class_physicsserver2d_constant_body_param_linear_damp_mode"></div>

[BodyParameter](#enum_physicsserver2d_bodyparameter) **BODY_PARAM_LINEAR_DAMP_MODE** = ``6``

Constant to set/get a body's linear damping mode. See [BodyDampMode](#enum_physicsserver2d_bodydampmode) for possible values. The default value of this parameter is [`BODY_DAMP_MODE_COMBINE`](#class_physicsserver2d_constant_body_damp_mode_combine).

<div id="_class_physicsserver2d_constant_body_param_angular_damp_mode"></div>

[BodyParameter](#enum_physicsserver2d_bodyparameter) **BODY_PARAM_ANGULAR_DAMP_MODE** = ``7``

Constant to set/get a body's angular damping mode. See [BodyDampMode](#enum_physicsserver2d_bodydampmode) for possible values. The default value of this parameter is [`BODY_DAMP_MODE_COMBINE`](#class_physicsserver2d_constant_body_damp_mode_combine).

<div id="_class_physicsserver2d_constant_body_param_linear_damp"></div>

[BodyParameter](#enum_physicsserver2d_bodyparameter) **BODY_PARAM_LINEAR_DAMP** = ``8``

Constant to set/get a body's linear damping factor. The default value of this parameter is `0.0`.

<div id="_class_physicsserver2d_constant_body_param_angular_damp"></div>

[BodyParameter](#enum_physicsserver2d_bodyparameter) **BODY_PARAM_ANGULAR_DAMP** = ``9``

Constant to set/get a body's angular damping factor. The default value of this parameter is `0.0`.

<div id="_class_physicsserver2d_constant_body_param_max"></div>

[BodyParameter](#enum_physicsserver2d_bodyparameter) **BODY_PARAM_MAX** = ``10``

Represents the size of the [BodyParameter](#enum_physicsserver2d_bodyparameter) enum.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_enum_physicsserver2d_bodydampmode"></div>

enum **BodyDampMode**: <div id="enum_physicsserver2d_bodydampmode"></div>

<div id="_class_physicsserver2d_constant_body_damp_mode_combine"></div>

[BodyDampMode](#enum_physicsserver2d_bodydampmode) **BODY_DAMP_MODE_COMBINE** = ``0``

The body's damping value is added to any value set in areas or the default value.

<div id="_class_physicsserver2d_constant_body_damp_mode_replace"></div>

[BodyDampMode](#enum_physicsserver2d_bodydampmode) **BODY_DAMP_MODE_REPLACE** = ``1``

The body's damping value replaces any value set in areas or the default value.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_enum_physicsserver2d_bodystate"></div>

enum **BodyState**: <div id="enum_physicsserver2d_bodystate"></div>

<div id="_class_physicsserver2d_constant_body_state_transform"></div>

[BodyState](#enum_physicsserver2d_bodystate) **BODY_STATE_TRANSFORM** = ``0``

Constant to set/get the current transform matrix of the body.

<div id="_class_physicsserver2d_constant_body_state_linear_velocity"></div>

[BodyState](#enum_physicsserver2d_bodystate) **BODY_STATE_LINEAR_VELOCITY** = ``1``

Constant to set/get the current linear velocity of the body.

<div id="_class_physicsserver2d_constant_body_state_angular_velocity"></div>

[BodyState](#enum_physicsserver2d_bodystate) **BODY_STATE_ANGULAR_VELOCITY** = ``2``

Constant to set/get the current angular velocity of the body.

<div id="_class_physicsserver2d_constant_body_state_sleeping"></div>

[BodyState](#enum_physicsserver2d_bodystate) **BODY_STATE_SLEEPING** = ``3``

Constant to sleep/wake up a body, or to get whether it is sleeping.

<div id="_class_physicsserver2d_constant_body_state_can_sleep"></div>

[BodyState](#enum_physicsserver2d_bodystate) **BODY_STATE_CAN_SLEEP** = ``4``

Constant to set/get whether the body can sleep.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_enum_physicsserver2d_jointtype"></div>

enum **JointType**: <div id="enum_physicsserver2d_jointtype"></div>

<div id="_class_physicsserver2d_constant_joint_type_pin"></div>

[JointType](#enum_physicsserver2d_jointtype) **JOINT_TYPE_PIN** = ``0``

Constant to create pin joints.

<div id="_class_physicsserver2d_constant_joint_type_groove"></div>

[JointType](#enum_physicsserver2d_jointtype) **JOINT_TYPE_GROOVE** = ``1``

Constant to create groove joints.

<div id="_class_physicsserver2d_constant_joint_type_damped_spring"></div>

[JointType](#enum_physicsserver2d_jointtype) **JOINT_TYPE_DAMPED_SPRING** = ``2``

Constant to create damped spring joints.

<div id="_class_physicsserver2d_constant_joint_type_max"></div>

[JointType](#enum_physicsserver2d_jointtype) **JOINT_TYPE_MAX** = ``3``

Represents the size of the [JointType](#enum_physicsserver2d_jointtype) enum.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_enum_physicsserver2d_jointparam"></div>

enum **JointParam**: <div id="enum_physicsserver2d_jointparam"></div>

<div id="_class_physicsserver2d_constant_joint_param_bias"></div>

[JointParam](#enum_physicsserver2d_jointparam) **JOINT_PARAM_BIAS** = ``0``

Constant to set/get how fast the joint pulls the bodies back to satisfy the joint constraint. The lower the value, the more the two bodies can pull on the joint. The default value of this parameter is `0.0`.

 **Note:** In Godot Physics, this parameter is only used for pin joints and groove joints.

<div id="_class_physicsserver2d_constant_joint_param_max_bias"></div>

[JointParam](#enum_physicsserver2d_jointparam) **JOINT_PARAM_MAX_BIAS** = ``1``

Constant to set/get the maximum speed with which the joint can apply corrections. The default value of this parameter is `3.40282e+38`.

 **Note:** In Godot Physics, this parameter is only used for groove joints.

<div id="_class_physicsserver2d_constant_joint_param_max_force"></div>

[JointParam](#enum_physicsserver2d_jointparam) **JOINT_PARAM_MAX_FORCE** = ``2``

Constant to set/get the maximum force that the joint can use to act on the two bodies. The default value of this parameter is `3.40282e+38`.

 **Note:** In Godot Physics, this parameter is only used for groove joints.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_enum_physicsserver2d_pinjointparam"></div>

enum **PinJointParam**: <div id="enum_physicsserver2d_pinjointparam"></div>

<div id="_class_physicsserver2d_constant_pin_joint_softness"></div>

[PinJointParam](#enum_physicsserver2d_pinjointparam) **PIN_JOINT_SOFTNESS** = ``0``

Constant to set/get a how much the bond of the pin joint can flex. The default value of this parameter is `0.0`.

<div id="_class_physicsserver2d_constant_pin_joint_limit_upper"></div>

[PinJointParam](#enum_physicsserver2d_pinjointparam) **PIN_JOINT_LIMIT_UPPER** = ``1``

The maximum rotation around the pin.

<div id="_class_physicsserver2d_constant_pin_joint_limit_lower"></div>

[PinJointParam](#enum_physicsserver2d_pinjointparam) **PIN_JOINT_LIMIT_LOWER** = ``2``

The minimum rotation around the pin.

<div id="_class_physicsserver2d_constant_pin_joint_motor_target_velocity"></div>

[PinJointParam](#enum_physicsserver2d_pinjointparam) **PIN_JOINT_MOTOR_TARGET_VELOCITY** = ``3``

Target speed for the motor. In radians per second.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_enum_physicsserver2d_pinjointflag"></div>

enum **PinJointFlag**: <div id="enum_physicsserver2d_pinjointflag"></div>

<div id="_class_physicsserver2d_constant_pin_joint_flag_angular_limit_enabled"></div>

[PinJointFlag](#enum_physicsserver2d_pinjointflag) **PIN_JOINT_FLAG_ANGULAR_LIMIT_ENABLED** = ``0``

If `true`, the pin has a maximum and a minimum rotation.

<div id="_class_physicsserver2d_constant_pin_joint_flag_motor_enabled"></div>

[PinJointFlag](#enum_physicsserver2d_pinjointflag) **PIN_JOINT_FLAG_MOTOR_ENABLED** = ``1``

If `true`, a motor turns the pin.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_enum_physicsserver2d_dampedspringparam"></div>

enum **DampedSpringParam**: <div id="enum_physicsserver2d_dampedspringparam"></div>

<div id="_class_physicsserver2d_constant_damped_spring_rest_length"></div>

[DampedSpringParam](#enum_physicsserver2d_dampedspringparam) **DAMPED_SPRING_REST_LENGTH** = ``0``

Sets the resting length of the spring joint. The joint will always try to go to back this length when pulled apart. The default value of this parameter is the distance between the joint's anchor points.

<div id="_class_physicsserver2d_constant_damped_spring_stiffness"></div>

[DampedSpringParam](#enum_physicsserver2d_dampedspringparam) **DAMPED_SPRING_STIFFNESS** = ``1``

Sets the stiffness of the spring joint. The joint applies a force equal to the stiffness times the distance from its resting length. The default value of this parameter is `20.0`.

<div id="_class_physicsserver2d_constant_damped_spring_damping"></div>

[DampedSpringParam](#enum_physicsserver2d_dampedspringparam) **DAMPED_SPRING_DAMPING** = ``2``

Sets the damping ratio of the spring joint. A value of 0 indicates an undamped spring, while 1 causes the system to reach equilibrium as fast as possible (critical damping). The default value of this parameter is `1.5`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_enum_physicsserver2d_ccdmode"></div>

enum **CCDMode**: <div id="enum_physicsserver2d_ccdmode"></div>

<div id="_class_physicsserver2d_constant_ccd_mode_disabled"></div>

[CCDMode](#enum_physicsserver2d_ccdmode) **CCD_MODE_DISABLED** = ``0``

Disables continuous collision detection. This is the fastest way to detect body collisions, but it can miss small and/or fast-moving objects.

<div id="_class_physicsserver2d_constant_ccd_mode_cast_ray"></div>

[CCDMode](#enum_physicsserver2d_ccdmode) **CCD_MODE_CAST_RAY** = ``1``

Enables continuous collision detection by raycasting. It is faster than shapecasting, but less precise.

<div id="_class_physicsserver2d_constant_ccd_mode_cast_shape"></div>

[CCDMode](#enum_physicsserver2d_ccdmode) **CCD_MODE_CAST_SHAPE** = ``2``

Enables continuous collision detection by shapecasting. It is the slowest CCD method, and the most precise.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_enum_physicsserver2d_areabodystatus"></div>

enum **AreaBodyStatus**: <div id="enum_physicsserver2d_areabodystatus"></div>

<div id="_class_physicsserver2d_constant_area_body_added"></div>

[AreaBodyStatus](#enum_physicsserver2d_areabodystatus) **AREA_BODY_ADDED** = ``0``

The value of the first parameter and area callback function receives, when an object enters one of its shapes.

<div id="_class_physicsserver2d_constant_area_body_removed"></div>

[AreaBodyStatus](#enum_physicsserver2d_areabodystatus) **AREA_BODY_REMOVED** = ``1``

The value of the first parameter and area callback function receives, when an object exits one of its shapes.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_enum_physicsserver2d_processinfo"></div>

enum **ProcessInfo**: <div id="enum_physicsserver2d_processinfo"></div>

<div id="_class_physicsserver2d_constant_info_active_objects"></div>

[ProcessInfo](#enum_physicsserver2d_processinfo) **INFO_ACTIVE_OBJECTS** = ``0``

Constant to get the number of objects that are not sleeping.

<div id="_class_physicsserver2d_constant_info_collision_pairs"></div>

[ProcessInfo](#enum_physicsserver2d_processinfo) **INFO_COLLISION_PAIRS** = ``1``

Constant to get the number of possible collisions.

<div id="_class_physicsserver2d_constant_info_island_count"></div>

[ProcessInfo](#enum_physicsserver2d_processinfo) **INFO_ISLAND_COUNT** = ``2``

Constant to get the number of space regions where a collision could occur.

<!-- rst-class:: classref-section-separator -->

---

## 方法说明

<div id="_class_physicsserver2d_method_area_add_shape"></div>

`void` **area_add_shape** ( area: [`RID`](class_rid.md), shape: [`RID`](class_rid.md), transform: [`Transform2D`](class_transform2d.md) = Transform2D(1, 0, 0, 1, 0, 0), disabled: [`bool`](class_bool.md) = false )<div id="class_physicsserver2d_method_area_add_shape"></div>

Adds a shape to the area, with the given local transform. The shape (together with its `transform` and `disabled` properties) is added to an array of shapes, and the shapes of an area are usually referenced by their index in this array.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsserver2d_method_area_attach_canvas_instance_id"></div>

`void` **area_attach_canvas_instance_id** ( area: [`RID`](class_rid.md), id: [`int`](class_int.md) )<div id="class_physicsserver2d_method_area_attach_canvas_instance_id"></div>

Attaches the `ObjectID` of a canvas to the area. Use [`Object.get_instance_id`](#class_object_method_get_instance_id) to get the `ObjectID` of a [`CanvasLayer`](class_canvaslayer.md).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsserver2d_method_area_attach_object_instance_id"></div>

`void` **area_attach_object_instance_id** ( area: [`RID`](class_rid.md), id: [`int`](class_int.md) )<div id="class_physicsserver2d_method_area_attach_object_instance_id"></div>

Attaches the `ObjectID` of an [`Object`](class_object.md) to the area. Use [`Object.get_instance_id`](#class_object_method_get_instance_id) to get the `ObjectID` of a [`CollisionObject2D`](class_collisionobject2d.md).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsserver2d_method_area_clear_shapes"></div>

`void` **area_clear_shapes** ( area: [`RID`](class_rid.md) )<div id="class_physicsserver2d_method_area_clear_shapes"></div>

Removes all shapes from the area. This does not delete the shapes themselves, so they can continue to be used elsewhere or added back later.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsserver2d_method_area_create"></div>

[`RID`](class_rid.md) **area_create** ( )<div id="class_physicsserver2d_method_area_create"></div>

Creates a 2D area object in the physics server, and returns the [`RID`](class_rid.md) that identifies it. The default settings for the created area include a collision layer and mask set to `1`, and `monitorable` set to `false`.

Use [`area_add_shape`](#class_physicsserver2d_method_area_add_shape) to add shapes to it, use [`area_set_transform`](#class_physicsserver2d_method_area_set_transform) to set its transform, and use [`area_set_space`](#class_physicsserver2d_method_area_set_space) to add the area to a space. If you want the area to be detectable use [`area_set_monitorable`](#class_physicsserver2d_method_area_set_monitorable).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsserver2d_method_area_get_canvas_instance_id"></div>

[`int`](class_int.md) **area_get_canvas_instance_id** ( area: [`RID`](class_rid.md) ) const[^const]<div id="class_physicsserver2d_method_area_get_canvas_instance_id"></div>

Returns the `ObjectID` of the canvas attached to the area. Use [`@GlobalScope.instance_from_id`](#class_@globalscope_method_instance_from_id) to retrieve a [`CanvasLayer`](class_canvaslayer.md) from a nonzero `ObjectID`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsserver2d_method_area_get_collision_layer"></div>

[`int`](class_int.md) **area_get_collision_layer** ( area: [`RID`](class_rid.md) ) const[^const]<div id="class_physicsserver2d_method_area_get_collision_layer"></div>

Returns the physics layer or layers the area belongs to, as a bitmask.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsserver2d_method_area_get_collision_mask"></div>

[`int`](class_int.md) **area_get_collision_mask** ( area: [`RID`](class_rid.md) ) const[^const]<div id="class_physicsserver2d_method_area_get_collision_mask"></div>

Returns the physics layer or layers the area can contact with, as a bitmask.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsserver2d_method_area_get_object_instance_id"></div>

[`int`](class_int.md) **area_get_object_instance_id** ( area: [`RID`](class_rid.md) ) const[^const]<div id="class_physicsserver2d_method_area_get_object_instance_id"></div>

Returns the `ObjectID` attached to the area. Use [`@GlobalScope.instance_from_id`](#class_@globalscope_method_instance_from_id) to retrieve an [`Object`](class_object.md) from a nonzero `ObjectID`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsserver2d_method_area_get_param"></div>

[`Variant`](class_variant.md) **area_get_param** ( area: [`RID`](class_rid.md), param: [AreaParameter](#enum_physicsserver2d_areaparameter) ) const[^const]<div id="class_physicsserver2d_method_area_get_param"></div>

Returns the value of the given area parameter. See [AreaParameter](#enum_physicsserver2d_areaparameter) for the list of available parameters.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsserver2d_method_area_get_shape"></div>

[`RID`](class_rid.md) **area_get_shape** ( area: [`RID`](class_rid.md), shape_idx: [`int`](class_int.md) ) const[^const]<div id="class_physicsserver2d_method_area_get_shape"></div>

Returns the [`RID`](class_rid.md) of the shape with the given index in the area's array of shapes.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsserver2d_method_area_get_shape_count"></div>

[`int`](class_int.md) **area_get_shape_count** ( area: [`RID`](class_rid.md) ) const[^const]<div id="class_physicsserver2d_method_area_get_shape_count"></div>

Returns the number of shapes added to the area.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsserver2d_method_area_get_shape_transform"></div>

[`Transform2D`](class_transform2d.md) **area_get_shape_transform** ( area: [`RID`](class_rid.md), shape_idx: [`int`](class_int.md) ) const[^const]<div id="class_physicsserver2d_method_area_get_shape_transform"></div>

Returns the local transform matrix of the shape with the given index in the area's array of shapes.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsserver2d_method_area_get_space"></div>

[`RID`](class_rid.md) **area_get_space** ( area: [`RID`](class_rid.md) ) const[^const]<div id="class_physicsserver2d_method_area_get_space"></div>

Returns the [`RID`](class_rid.md) of the space assigned to the area. Returns an empty [`RID`](class_rid.md) if no space is assigned.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsserver2d_method_area_get_transform"></div>

[`Transform2D`](class_transform2d.md) **area_get_transform** ( area: [`RID`](class_rid.md) ) const[^const]<div id="class_physicsserver2d_method_area_get_transform"></div>

Returns the transform matrix of the area.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsserver2d_method_area_remove_shape"></div>

`void` **area_remove_shape** ( area: [`RID`](class_rid.md), shape_idx: [`int`](class_int.md) )<div id="class_physicsserver2d_method_area_remove_shape"></div>

Removes the shape with the given index from the area's array of shapes. The shape itself is not deleted, so it can continue to be used elsewhere or added back later. As a result of this operation, the area's shapes which used to have indices higher than `shape_idx` will have their index decreased by one.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsserver2d_method_area_set_area_monitor_callback"></div>

`void` **area_set_area_monitor_callback** ( area: [`RID`](class_rid.md), callback: [`Callable`](class_callable.md) )<div id="class_physicsserver2d_method_area_set_area_monitor_callback"></div>

Sets the area's area monitor callback. This callback will be called when any other (shape of an) area enters or exits (a shape of) the given area, and must take the following five parameters:

1. an integer `status`: either [`AREA_BODY_ADDED`](#class_physicsserver2d_constant_area_body_added) or [`AREA_BODY_REMOVED`](#class_physicsserver2d_constant_area_body_removed) depending on whether the other area's shape entered or exited the area,

2. an [`RID`](class_rid.md) `area_rid`: the [`RID`](class_rid.md) of the other area that entered or exited the area,

3. an integer `instance_id`: the `ObjectID` attached to the other area,

4. an integer `area_shape_idx`: the index of the shape of the other area that entered or exited the area,

5. an integer `self_shape_idx`: the index of the shape of the area where the other area entered or exited.

By counting (or keeping track of) the shapes that enter and exit, it can be determined if an area (with all its shapes) is entering for the first time or exiting for the last time.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsserver2d_method_area_set_collision_layer"></div>

`void` **area_set_collision_layer** ( area: [`RID`](class_rid.md), layer: [`int`](class_int.md) )<div id="class_physicsserver2d_method_area_set_collision_layer"></div>

Assigns the area to one or many physics layers, via a bitmask.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsserver2d_method_area_set_collision_mask"></div>

`void` **area_set_collision_mask** ( area: [`RID`](class_rid.md), mask: [`int`](class_int.md) )<div id="class_physicsserver2d_method_area_set_collision_mask"></div>

Sets which physics layers the area will monitor, via a bitmask.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsserver2d_method_area_set_monitor_callback"></div>

`void` **area_set_monitor_callback** ( area: [`RID`](class_rid.md), callback: [`Callable`](class_callable.md) )<div id="class_physicsserver2d_method_area_set_monitor_callback"></div>

Sets the area's body monitor callback. This callback will be called when any other (shape of a) body enters or exits (a shape of) the given area, and must take the following five parameters:

1. an integer `status`: either [`AREA_BODY_ADDED`](#class_physicsserver2d_constant_area_body_added) or [`AREA_BODY_REMOVED`](#class_physicsserver2d_constant_area_body_removed) depending on whether the other body shape entered or exited the area,

2. an [`RID`](class_rid.md) `body_rid`: the [`RID`](class_rid.md) of the body that entered or exited the area,

3. an integer `instance_id`: the `ObjectID` attached to the body,

4. an integer `body_shape_idx`: the index of the shape of the body that entered or exited the area,

5. an integer `self_shape_idx`: the index of the shape of the area where the body entered or exited.

By counting (or keeping track of) the shapes that enter and exit, it can be determined if a body (with all its shapes) is entering for the first time or exiting for the last time.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsserver2d_method_area_set_monitorable"></div>

`void` **area_set_monitorable** ( area: [`RID`](class_rid.md), monitorable: [`bool`](class_bool.md) )<div id="class_physicsserver2d_method_area_set_monitorable"></div>

Sets whether the area is monitorable or not. If `monitorable` is `true`, the area monitoring callback of other areas will be called when this area enters or exits them.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsserver2d_method_area_set_param"></div>

`void` **area_set_param** ( area: [`RID`](class_rid.md), param: [AreaParameter](#enum_physicsserver2d_areaparameter), value: [`Variant`](class_variant.md) )<div id="class_physicsserver2d_method_area_set_param"></div>

Sets the value of the given area parameter. See [AreaParameter](#enum_physicsserver2d_areaparameter) for the list of available parameters.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsserver2d_method_area_set_shape"></div>

`void` **area_set_shape** ( area: [`RID`](class_rid.md), shape_idx: [`int`](class_int.md), shape: [`RID`](class_rid.md) )<div id="class_physicsserver2d_method_area_set_shape"></div>

Replaces the area's shape at the given index by another shape, while not affecting the `transform` and `disabled` properties at the same index.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsserver2d_method_area_set_shape_disabled"></div>

`void` **area_set_shape_disabled** ( area: [`RID`](class_rid.md), shape_idx: [`int`](class_int.md), disabled: [`bool`](class_bool.md) )<div id="class_physicsserver2d_method_area_set_shape_disabled"></div>

Sets the disabled property of the area's shape with the given index. If `disabled` is `true`, then the shape will not detect any other shapes entering or exiting it.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsserver2d_method_area_set_shape_transform"></div>

`void` **area_set_shape_transform** ( area: [`RID`](class_rid.md), shape_idx: [`int`](class_int.md), transform: [`Transform2D`](class_transform2d.md) )<div id="class_physicsserver2d_method_area_set_shape_transform"></div>

Sets the local transform matrix of the area's shape with the given index.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsserver2d_method_area_set_space"></div>

`void` **area_set_space** ( area: [`RID`](class_rid.md), space: [`RID`](class_rid.md) )<div id="class_physicsserver2d_method_area_set_space"></div>

Adds the area to the given space, after removing the area from the previously assigned space (if any).

 **Note:** To remove an area from a space without immediately adding it back elsewhere, use `PhysicsServer2D.area_set_space(area, RID())`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsserver2d_method_area_set_transform"></div>

`void` **area_set_transform** ( area: [`RID`](class_rid.md), transform: [`Transform2D`](class_transform2d.md) )<div id="class_physicsserver2d_method_area_set_transform"></div>

Sets the transform matrix of the area.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsserver2d_method_body_add_collision_exception"></div>

`void` **body_add_collision_exception** ( body: [`RID`](class_rid.md), excepted_body: [`RID`](class_rid.md) )<div id="class_physicsserver2d_method_body_add_collision_exception"></div>

Adds `excepted_body` to the body's list of collision exceptions, so that collisions with it are ignored.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsserver2d_method_body_add_constant_central_force"></div>

`void` **body_add_constant_central_force** ( body: [`RID`](class_rid.md), force: [`Vector2`](class_vector2.md) )<div id="class_physicsserver2d_method_body_add_constant_central_force"></div>

Adds a constant directional force to the body. The force does not affect rotation. The force remains applied over time until cleared with `PhysicsServer2D.body_set_constant_force(body, Vector2(0, 0))`.

This is equivalent to using [`body_add_constant_force`](#class_physicsserver2d_method_body_add_constant_force) at the body's center of mass.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsserver2d_method_body_add_constant_force"></div>

`void` **body_add_constant_force** ( body: [`RID`](class_rid.md), force: [`Vector2`](class_vector2.md), position: [`Vector2`](class_vector2.md) = Vector2(0, 0) )<div id="class_physicsserver2d_method_body_add_constant_force"></div>

Adds a constant positioned force to the body. The force can affect rotation if `position` is different from the body's center of mass. The force remains applied over time until cleared with `PhysicsServer2D.body_set_constant_force(body, Vector2(0, 0))`.

 `position` is the offset from the body origin in global coordinates.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsserver2d_method_body_add_constant_torque"></div>

`void` **body_add_constant_torque** ( body: [`RID`](class_rid.md), torque: [`float`](class_float.md) )<div id="class_physicsserver2d_method_body_add_constant_torque"></div>

Adds a constant rotational force to the body. The force does not affect position. The force remains applied over time until cleared with `PhysicsServer2D.body_set_constant_torque(body, 0)`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsserver2d_method_body_add_shape"></div>

`void` **body_add_shape** ( body: [`RID`](class_rid.md), shape: [`RID`](class_rid.md), transform: [`Transform2D`](class_transform2d.md) = Transform2D(1, 0, 0, 1, 0, 0), disabled: [`bool`](class_bool.md) = false )<div id="class_physicsserver2d_method_body_add_shape"></div>

Adds a shape to the area, with the given local transform. The shape (together with its `transform` and `disabled` properties) is added to an array of shapes, and the shapes of a body are usually referenced by their index in this array.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsserver2d_method_body_apply_central_force"></div>

`void` **body_apply_central_force** ( body: [`RID`](class_rid.md), force: [`Vector2`](class_vector2.md) )<div id="class_physicsserver2d_method_body_apply_central_force"></div>

Applies a directional force to the body, at the body's center of mass. The force does not affect rotation. A force is time dependent and meant to be applied every physics update.

This is equivalent to using [`body_apply_force`](#class_physicsserver2d_method_body_apply_force) at the body's center of mass.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsserver2d_method_body_apply_central_impulse"></div>

`void` **body_apply_central_impulse** ( body: [`RID`](class_rid.md), impulse: [`Vector2`](class_vector2.md) )<div id="class_physicsserver2d_method_body_apply_central_impulse"></div>

Applies a directional impulse to the body, at the body's center of mass. The impulse does not affect rotation.

An impulse is time-independent! Applying an impulse every frame would result in a framerate-dependent force. For this reason, it should only be used when simulating one-time impacts (use the "_force" functions otherwise).

This is equivalent to using [`body_apply_impulse`](#class_physicsserver2d_method_body_apply_impulse) at the body's center of mass.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsserver2d_method_body_apply_force"></div>

`void` **body_apply_force** ( body: [`RID`](class_rid.md), force: [`Vector2`](class_vector2.md), position: [`Vector2`](class_vector2.md) = Vector2(0, 0) )<div id="class_physicsserver2d_method_body_apply_force"></div>

Applies a positioned force to the body. The force can affect rotation if `position` is different from the body's center of mass. A force is time dependent and meant to be applied every physics update.

 `position` is the offset from the body origin in global coordinates.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsserver2d_method_body_apply_impulse"></div>

`void` **body_apply_impulse** ( body: [`RID`](class_rid.md), impulse: [`Vector2`](class_vector2.md), position: [`Vector2`](class_vector2.md) = Vector2(0, 0) )<div id="class_physicsserver2d_method_body_apply_impulse"></div>

Applies a positioned impulse to the body. The impulse can affect rotation if `position` is different from the body's center of mass.

An impulse is time-independent! Applying an impulse every frame would result in a framerate-dependent force. For this reason, it should only be used when simulating one-time impacts (use the "_force" functions otherwise).

 `position` is the offset from the body origin in global coordinates.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsserver2d_method_body_apply_torque"></div>

`void` **body_apply_torque** ( body: [`RID`](class_rid.md), torque: [`float`](class_float.md) )<div id="class_physicsserver2d_method_body_apply_torque"></div>

Applies a rotational force to the body. The force does not affect position. A force is time dependent and meant to be applied every physics update.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsserver2d_method_body_apply_torque_impulse"></div>

`void` **body_apply_torque_impulse** ( body: [`RID`](class_rid.md), impulse: [`float`](class_float.md) )<div id="class_physicsserver2d_method_body_apply_torque_impulse"></div>

Applies a rotational impulse to the body. The impulse does not affect position.

An impulse is time-independent! Applying an impulse every frame would result in a framerate-dependent force. For this reason, it should only be used when simulating one-time impacts (use the "_force" functions otherwise).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsserver2d_method_body_attach_canvas_instance_id"></div>

`void` **body_attach_canvas_instance_id** ( body: [`RID`](class_rid.md), id: [`int`](class_int.md) )<div id="class_physicsserver2d_method_body_attach_canvas_instance_id"></div>

Attaches the `ObjectID` of a canvas to the body. Use [`Object.get_instance_id`](#class_object_method_get_instance_id) to get the `ObjectID` of a [`CanvasLayer`](class_canvaslayer.md).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsserver2d_method_body_attach_object_instance_id"></div>

`void` **body_attach_object_instance_id** ( body: [`RID`](class_rid.md), id: [`int`](class_int.md) )<div id="class_physicsserver2d_method_body_attach_object_instance_id"></div>

Attaches the `ObjectID` of an [`Object`](class_object.md) to the body. Use [`Object.get_instance_id`](#class_object_method_get_instance_id) to get the `ObjectID` of a [`CollisionObject2D`](class_collisionobject2d.md).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsserver2d_method_body_clear_shapes"></div>

`void` **body_clear_shapes** ( body: [`RID`](class_rid.md) )<div id="class_physicsserver2d_method_body_clear_shapes"></div>

Removes all shapes from the body. This does not delete the shapes themselves, so they can continue to be used elsewhere or added back later.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsserver2d_method_body_create"></div>

[`RID`](class_rid.md) **body_create** ( )<div id="class_physicsserver2d_method_body_create"></div>

Creates a 2D body object in the physics server, and returns the [`RID`](class_rid.md) that identifies it. The default settings for the created area include a collision layer and mask set to `1`, and body mode set to [`BODY_MODE_RIGID`](#class_physicsserver2d_constant_body_mode_rigid).

Use [`body_add_shape`](#class_physicsserver2d_method_body_add_shape) to add shapes to it, use [`body_set_state`](#class_physicsserver2d_method_body_set_state) to set its transform, and use [`body_set_space`](#class_physicsserver2d_method_body_set_space) to add the body to a space.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsserver2d_method_body_get_canvas_instance_id"></div>

[`int`](class_int.md) **body_get_canvas_instance_id** ( body: [`RID`](class_rid.md) ) const[^const]<div id="class_physicsserver2d_method_body_get_canvas_instance_id"></div>

Returns the `ObjectID` of the canvas attached to the body. Use [`@GlobalScope.instance_from_id`](#class_@globalscope_method_instance_from_id) to retrieve a [`CanvasLayer`](class_canvaslayer.md) from a nonzero `ObjectID`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsserver2d_method_body_get_collision_layer"></div>

[`int`](class_int.md) **body_get_collision_layer** ( body: [`RID`](class_rid.md) ) const[^const]<div id="class_physicsserver2d_method_body_get_collision_layer"></div>

Returns the physics layer or layers the body belongs to, as a bitmask.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsserver2d_method_body_get_collision_mask"></div>

[`int`](class_int.md) **body_get_collision_mask** ( body: [`RID`](class_rid.md) ) const[^const]<div id="class_physicsserver2d_method_body_get_collision_mask"></div>

Returns the physics layer or layers the body can collide with, as a bitmask.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsserver2d_method_body_get_collision_priority"></div>

[`float`](class_float.md) **body_get_collision_priority** ( body: [`RID`](class_rid.md) ) const[^const]<div id="class_physicsserver2d_method_body_get_collision_priority"></div>

Returns the body's collision priority. This is used in the depenetration phase of [`body_test_motion`](#class_physicsserver2d_method_body_test_motion). The higher the priority is, the lower the penetration into the body will be.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsserver2d_method_body_get_constant_force"></div>

[`Vector2`](class_vector2.md) **body_get_constant_force** ( body: [`RID`](class_rid.md) ) const[^const]<div id="class_physicsserver2d_method_body_get_constant_force"></div>

Returns the body's total constant positional force applied during each physics update.

See [`body_add_constant_force`](#class_physicsserver2d_method_body_add_constant_force) and [`body_add_constant_central_force`](#class_physicsserver2d_method_body_add_constant_central_force).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsserver2d_method_body_get_constant_torque"></div>

[`float`](class_float.md) **body_get_constant_torque** ( body: [`RID`](class_rid.md) ) const[^const]<div id="class_physicsserver2d_method_body_get_constant_torque"></div>

Returns the body's total constant rotational force applied during each physics update.

See [`body_add_constant_torque`](#class_physicsserver2d_method_body_add_constant_torque).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsserver2d_method_body_get_continuous_collision_detection_mode"></div>

[CCDMode](#enum_physicsserver2d_ccdmode) **body_get_continuous_collision_detection_mode** ( body: [`RID`](class_rid.md) ) const[^const]<div id="class_physicsserver2d_method_body_get_continuous_collision_detection_mode"></div>

Returns the body's continuous collision detection mode (see [CCDMode](#enum_physicsserver2d_ccdmode)).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsserver2d_method_body_get_direct_state"></div>

[`PhysicsDirectBodyState2D`](class_physicsdirectbodystate2d.md) **body_get_direct_state** ( body: [`RID`](class_rid.md) )<div id="class_physicsserver2d_method_body_get_direct_state"></div>

Returns the [`PhysicsDirectBodyState2D`](class_physicsdirectbodystate2d.md) of the body. Returns `null` if the body is destroyed or not assigned to a space.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsserver2d_method_body_get_max_contacts_reported"></div>

[`int`](class_int.md) **body_get_max_contacts_reported** ( body: [`RID`](class_rid.md) ) const[^const]<div id="class_physicsserver2d_method_body_get_max_contacts_reported"></div>

Returns the maximum number of contacts that the body can report. See [`body_set_max_contacts_reported`](#class_physicsserver2d_method_body_set_max_contacts_reported).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsserver2d_method_body_get_mode"></div>

[BodyMode](#enum_physicsserver2d_bodymode) **body_get_mode** ( body: [`RID`](class_rid.md) ) const[^const]<div id="class_physicsserver2d_method_body_get_mode"></div>

Returns the body's mode (see [BodyMode](#enum_physicsserver2d_bodymode)).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsserver2d_method_body_get_object_instance_id"></div>

[`int`](class_int.md) **body_get_object_instance_id** ( body: [`RID`](class_rid.md) ) const[^const]<div id="class_physicsserver2d_method_body_get_object_instance_id"></div>

Returns the `ObjectID` attached to the body. Use [`@GlobalScope.instance_from_id`](#class_@globalscope_method_instance_from_id) to retrieve an [`Object`](class_object.md) from a nonzero `ObjectID`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsserver2d_method_body_get_param"></div>

[`Variant`](class_variant.md) **body_get_param** ( body: [`RID`](class_rid.md), param: [BodyParameter](#enum_physicsserver2d_bodyparameter) ) const[^const]<div id="class_physicsserver2d_method_body_get_param"></div>

Returns the value of the given body parameter. See [BodyParameter](#enum_physicsserver2d_bodyparameter) for the list of available parameters.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsserver2d_method_body_get_shape"></div>

[`RID`](class_rid.md) **body_get_shape** ( body: [`RID`](class_rid.md), shape_idx: [`int`](class_int.md) ) const[^const]<div id="class_physicsserver2d_method_body_get_shape"></div>

Returns the [`RID`](class_rid.md) of the shape with the given index in the body's array of shapes.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsserver2d_method_body_get_shape_count"></div>

[`int`](class_int.md) **body_get_shape_count** ( body: [`RID`](class_rid.md) ) const[^const]<div id="class_physicsserver2d_method_body_get_shape_count"></div>

Returns the number of shapes added to the body.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsserver2d_method_body_get_shape_transform"></div>

[`Transform2D`](class_transform2d.md) **body_get_shape_transform** ( body: [`RID`](class_rid.md), shape_idx: [`int`](class_int.md) ) const[^const]<div id="class_physicsserver2d_method_body_get_shape_transform"></div>

Returns the local transform matrix of the shape with the given index in the area's array of shapes.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsserver2d_method_body_get_space"></div>

[`RID`](class_rid.md) **body_get_space** ( body: [`RID`](class_rid.md) ) const[^const]<div id="class_physicsserver2d_method_body_get_space"></div>

Returns the [`RID`](class_rid.md) of the space assigned to the body. Returns an empty [`RID`](class_rid.md) if no space is assigned.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsserver2d_method_body_get_state"></div>

[`Variant`](class_variant.md) **body_get_state** ( body: [`RID`](class_rid.md), state: [BodyState](#enum_physicsserver2d_bodystate) ) const[^const]<div id="class_physicsserver2d_method_body_get_state"></div>

Returns the value of the given state of the body. See [BodyState](#enum_physicsserver2d_bodystate) for the list of available states.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsserver2d_method_body_is_omitting_force_integration"></div>

[`bool`](class_bool.md) **body_is_omitting_force_integration** ( body: [`RID`](class_rid.md) ) const[^const]<div id="class_physicsserver2d_method_body_is_omitting_force_integration"></div>

Returns `true` if the body is omitting the standard force integration. See [`body_set_omit_force_integration`](#class_physicsserver2d_method_body_set_omit_force_integration).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsserver2d_method_body_remove_collision_exception"></div>

`void` **body_remove_collision_exception** ( body: [`RID`](class_rid.md), excepted_body: [`RID`](class_rid.md) )<div id="class_physicsserver2d_method_body_remove_collision_exception"></div>

Removes `excepted_body` from the body's list of collision exceptions, so that collisions with it are no longer ignored.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsserver2d_method_body_remove_shape"></div>

`void` **body_remove_shape** ( body: [`RID`](class_rid.md), shape_idx: [`int`](class_int.md) )<div id="class_physicsserver2d_method_body_remove_shape"></div>

Removes the shape with the given index from the body's array of shapes. The shape itself is not deleted, so it can continue to be used elsewhere or added back later. As a result of this operation, the body's shapes which used to have indices higher than `shape_idx` will have their index decreased by one.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsserver2d_method_body_reset_mass_properties"></div>

`void` **body_reset_mass_properties** ( body: [`RID`](class_rid.md) )<div id="class_physicsserver2d_method_body_reset_mass_properties"></div>

Restores the default inertia and center of mass of the body based on its shapes. This undoes any custom values previously set using [`body_set_param`](#class_physicsserver2d_method_body_set_param).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsserver2d_method_body_set_axis_velocity"></div>

`void` **body_set_axis_velocity** ( body: [`RID`](class_rid.md), axis_velocity: [`Vector2`](class_vector2.md) )<div id="class_physicsserver2d_method_body_set_axis_velocity"></div>

Modifies the body's linear velocity so that its projection to the axis `axis_velocity.normalized()` is exactly `axis_velocity.length()`. This is useful for jumping behavior.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsserver2d_method_body_set_collision_layer"></div>

`void` **body_set_collision_layer** ( body: [`RID`](class_rid.md), layer: [`int`](class_int.md) )<div id="class_physicsserver2d_method_body_set_collision_layer"></div>

Sets the physics layer or layers the body belongs to, via a bitmask.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsserver2d_method_body_set_collision_mask"></div>

`void` **body_set_collision_mask** ( body: [`RID`](class_rid.md), mask: [`int`](class_int.md) )<div id="class_physicsserver2d_method_body_set_collision_mask"></div>

Sets the physics layer or layers the body can collide with, via a bitmask.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsserver2d_method_body_set_collision_priority"></div>

`void` **body_set_collision_priority** ( body: [`RID`](class_rid.md), priority: [`float`](class_float.md) )<div id="class_physicsserver2d_method_body_set_collision_priority"></div>

Sets the body's collision priority. This is used in the depenetration phase of [`body_test_motion`](#class_physicsserver2d_method_body_test_motion). The higher the priority is, the lower the penetration into the body will be.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsserver2d_method_body_set_constant_force"></div>

`void` **body_set_constant_force** ( body: [`RID`](class_rid.md), force: [`Vector2`](class_vector2.md) )<div id="class_physicsserver2d_method_body_set_constant_force"></div>

Sets the body's total constant positional force applied during each physics update.

See [`body_add_constant_force`](#class_physicsserver2d_method_body_add_constant_force) and [`body_add_constant_central_force`](#class_physicsserver2d_method_body_add_constant_central_force).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsserver2d_method_body_set_constant_torque"></div>

`void` **body_set_constant_torque** ( body: [`RID`](class_rid.md), torque: [`float`](class_float.md) )<div id="class_physicsserver2d_method_body_set_constant_torque"></div>

Sets the body's total constant rotational force applied during each physics update.

See [`body_add_constant_torque`](#class_physicsserver2d_method_body_add_constant_torque).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsserver2d_method_body_set_continuous_collision_detection_mode"></div>

`void` **body_set_continuous_collision_detection_mode** ( body: [`RID`](class_rid.md), mode: [CCDMode](#enum_physicsserver2d_ccdmode) )<div id="class_physicsserver2d_method_body_set_continuous_collision_detection_mode"></div>

Sets the continuous collision detection mode using one of the [CCDMode](#enum_physicsserver2d_ccdmode) constants.

Continuous collision detection tries to predict where a moving body would collide in between physics updates, instead of moving it and correcting its movement if it collided.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsserver2d_method_body_set_force_integration_callback"></div>

`void` **body_set_force_integration_callback** ( body: [`RID`](class_rid.md), callable: [`Callable`](class_callable.md), userdata: [`Variant`](class_variant.md) = null )<div id="class_physicsserver2d_method_body_set_force_integration_callback"></div>

Sets the body's custom force integration callback function to `callable`. Use an empty [`Callable`](class_callable.md) (`Callable()`) to clear the custom callback.

The function `callable` will be called every physics tick, before the standard force integration (see [`body_set_omit_force_integration`](#class_physicsserver2d_method_body_set_omit_force_integration)). It can be used for example to update the body's linear and angular velocity based on contact with other bodies.

If `userdata` is not `null`, the function `callable` must take the following two parameters:

1. `state`: a [`PhysicsDirectBodyState2D`](class_physicsdirectbodystate2d.md) used to retrieve and modify the body's state,

2. `userdata`: a [`Variant`](class_variant.md); its value will be the `userdata` passed into this method.

If `userdata` is `null`, then `callable` must take only the `state` parameter.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsserver2d_method_body_set_max_contacts_reported"></div>

`void` **body_set_max_contacts_reported** ( body: [`RID`](class_rid.md), amount: [`int`](class_int.md) )<div id="class_physicsserver2d_method_body_set_max_contacts_reported"></div>

Sets the maximum number of contacts that the body can report. If `amount` is greater than zero, then the body will keep track of at most this many contacts with other bodies.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsserver2d_method_body_set_mode"></div>

`void` **body_set_mode** ( body: [`RID`](class_rid.md), mode: [BodyMode](#enum_physicsserver2d_bodymode) )<div id="class_physicsserver2d_method_body_set_mode"></div>

Sets the body's mode. See [BodyMode](#enum_physicsserver2d_bodymode) for the list of available modes.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsserver2d_method_body_set_omit_force_integration"></div>

`void` **body_set_omit_force_integration** ( body: [`RID`](class_rid.md), enable: [`bool`](class_bool.md) )<div id="class_physicsserver2d_method_body_set_omit_force_integration"></div>

Sets whether the body omits the standard force integration. If `enable` is `true`, the body will not automatically use applied forces, torques, and damping to update the body's linear and angular velocity. In this case, [`body_set_force_integration_callback`](#class_physicsserver2d_method_body_set_force_integration_callback) can be used to manually update the linear and angular velocity instead.

This method is called when the property [`RigidBody2D.custom_integrator`](#class_rigidbody2d_property_custom_integrator) is set.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsserver2d_method_body_set_param"></div>

`void` **body_set_param** ( body: [`RID`](class_rid.md), param: [BodyParameter](#enum_physicsserver2d_bodyparameter), value: [`Variant`](class_variant.md) )<div id="class_physicsserver2d_method_body_set_param"></div>

Sets the value of the given body parameter. See [BodyParameter](#enum_physicsserver2d_bodyparameter) for the list of available parameters.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsserver2d_method_body_set_shape"></div>

`void` **body_set_shape** ( body: [`RID`](class_rid.md), shape_idx: [`int`](class_int.md), shape: [`RID`](class_rid.md) )<div id="class_physicsserver2d_method_body_set_shape"></div>

Replaces the body's shape at the given index by another shape, while not affecting the `transform`, `disabled`, and one-way collision properties at the same index.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsserver2d_method_body_set_shape_as_one_way_collision"></div>

`void` **body_set_shape_as_one_way_collision** ( body: [`RID`](class_rid.md), shape_idx: [`int`](class_int.md), enable: [`bool`](class_bool.md), margin: [`float`](class_float.md) )<div id="class_physicsserver2d_method_body_set_shape_as_one_way_collision"></div>

Sets the one-way collision properties of the body's shape with the given index. If `enable` is `true`, the one-way collision direction given by the shape's local upward axis `body_get_shape_transform(body, shape_idx).y` will be used to ignore collisions with the shape in the opposite direction, and to ensure depenetration of kinematic bodies happens in this direction.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsserver2d_method_body_set_shape_disabled"></div>

`void` **body_set_shape_disabled** ( body: [`RID`](class_rid.md), shape_idx: [`int`](class_int.md), disabled: [`bool`](class_bool.md) )<div id="class_physicsserver2d_method_body_set_shape_disabled"></div>

Sets the disabled property of the body's shape with the given index. If `disabled` is `true`, then the shape will be ignored in all collision detection.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsserver2d_method_body_set_shape_transform"></div>

`void` **body_set_shape_transform** ( body: [`RID`](class_rid.md), shape_idx: [`int`](class_int.md), transform: [`Transform2D`](class_transform2d.md) )<div id="class_physicsserver2d_method_body_set_shape_transform"></div>

Sets the local transform matrix of the body's shape with the given index.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsserver2d_method_body_set_space"></div>

`void` **body_set_space** ( body: [`RID`](class_rid.md), space: [`RID`](class_rid.md) )<div id="class_physicsserver2d_method_body_set_space"></div>

Adds the body to the given space, after removing the body from the previously assigned space (if any). If the body's mode is set to [`BODY_MODE_RIGID`](#class_physicsserver2d_constant_body_mode_rigid), then adding the body to a space will have the following additional effects:

- If the parameter [`BODY_PARAM_CENTER_OF_MASS`](#class_physicsserver2d_constant_body_param_center_of_mass) has never been set explicitly, then the value of that parameter will be recalculated based on the body's shapes.

- If the parameter [`BODY_PARAM_INERTIA`](#class_physicsserver2d_constant_body_param_inertia) is set to a value `<= 0.0`, then the value of that parameter will be recalculated based on the body's shapes, mass, and center of mass.

 **Note:** To remove a body from a space without immediately adding it back elsewhere, use `PhysicsServer2D.body_set_space(body, RID())`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsserver2d_method_body_set_state"></div>

`void` **body_set_state** ( body: [`RID`](class_rid.md), state: [BodyState](#enum_physicsserver2d_bodystate), value: [`Variant`](class_variant.md) )<div id="class_physicsserver2d_method_body_set_state"></div>

Sets the value of a body's state. See [BodyState](#enum_physicsserver2d_bodystate) for the list of available states.

 **Note:** The state change doesn't take effect immediately. The state will change on the next physics frame.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsserver2d_method_body_set_state_sync_callback"></div>

`void` **body_set_state_sync_callback** ( body: [`RID`](class_rid.md), callable: [`Callable`](class_callable.md) )<div id="class_physicsserver2d_method_body_set_state_sync_callback"></div>

Sets the body's state synchronization callback function to `callable`. Use an empty [`Callable`](class_callable.md) (`Callable()`) to clear the callback.

The function `callable` will be called every physics frame, assuming that the body was active during the previous physics tick, and can be used to fetch the latest state from the physics server.

The function `callable` must take the following parameters:

1. `state`: a [`PhysicsDirectBodyState2D`](class_physicsdirectbodystate2d.md), used to retrieve the body's state.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsserver2d_method_body_test_motion"></div>

[`bool`](class_bool.md) **body_test_motion** ( body: [`RID`](class_rid.md), parameters: [`PhysicsTestMotionParameters2D`](class_physicstestmotionparameters2d.md), result: [`PhysicsTestMotionResult2D`](class_physicstestmotionresult2d.md) = null )<div id="class_physicsserver2d_method_body_test_motion"></div>

Returns `true` if a collision would result from moving the body along a motion vector from a given point in space. See [`PhysicsTestMotionParameters2D`](class_physicstestmotionparameters2d.md) for the available motion parameters. Optionally a [`PhysicsTestMotionResult2D`](class_physicstestmotionresult2d.md) object can be passed, which will be used to store the information about the resulting collision.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsserver2d_method_capsule_shape_create"></div>

[`RID`](class_rid.md) **capsule_shape_create** ( )<div id="class_physicsserver2d_method_capsule_shape_create"></div>

Creates a 2D capsule shape in the physics server, and returns the [`RID`](class_rid.md) that identifies it. Use [`shape_set_data`](#class_physicsserver2d_method_shape_set_data) to set the capsule's height and radius.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsserver2d_method_circle_shape_create"></div>

[`RID`](class_rid.md) **circle_shape_create** ( )<div id="class_physicsserver2d_method_circle_shape_create"></div>

Creates a 2D circle shape in the physics server, and returns the [`RID`](class_rid.md) that identifies it. Use [`shape_set_data`](#class_physicsserver2d_method_shape_set_data) to set the circle's radius.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsserver2d_method_concave_polygon_shape_create"></div>

[`RID`](class_rid.md) **concave_polygon_shape_create** ( )<div id="class_physicsserver2d_method_concave_polygon_shape_create"></div>

Creates a 2D concave polygon shape in the physics server, and returns the [`RID`](class_rid.md) that identifies it. Use [`shape_set_data`](#class_physicsserver2d_method_shape_set_data) to set the concave polygon's segments.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsserver2d_method_convex_polygon_shape_create"></div>

[`RID`](class_rid.md) **convex_polygon_shape_create** ( )<div id="class_physicsserver2d_method_convex_polygon_shape_create"></div>

Creates a 2D convex polygon shape in the physics server, and returns the [`RID`](class_rid.md) that identifies it. Use [`shape_set_data`](#class_physicsserver2d_method_shape_set_data) to set the convex polygon's points.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsserver2d_method_damped_spring_joint_get_param"></div>

[`float`](class_float.md) **damped_spring_joint_get_param** ( joint: [`RID`](class_rid.md), param: [DampedSpringParam](#enum_physicsserver2d_dampedspringparam) ) const[^const]<div id="class_physicsserver2d_method_damped_spring_joint_get_param"></div>

Returns the value of the given damped spring joint parameter. See [DampedSpringParam](#enum_physicsserver2d_dampedspringparam) for the list of available parameters.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsserver2d_method_damped_spring_joint_set_param"></div>

`void` **damped_spring_joint_set_param** ( joint: [`RID`](class_rid.md), param: [DampedSpringParam](#enum_physicsserver2d_dampedspringparam), value: [`float`](class_float.md) )<div id="class_physicsserver2d_method_damped_spring_joint_set_param"></div>

Sets the value of the given damped spring joint parameter. See [DampedSpringParam](#enum_physicsserver2d_dampedspringparam) for the list of available parameters.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsserver2d_method_free_rid"></div>

`void` **free_rid** ( rid: [`RID`](class_rid.md) )<div id="class_physicsserver2d_method_free_rid"></div>

Destroys any of the objects created by PhysicsServer2D. If the [`RID`](class_rid.md) passed is not one of the objects that can be created by PhysicsServer2D, an error will be printed to the console.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsserver2d_method_get_process_info"></div>

[`int`](class_int.md) **get_process_info** ( process_info: [ProcessInfo](#enum_physicsserver2d_processinfo) )<div id="class_physicsserver2d_method_get_process_info"></div>

Returns information about the current state of the 2D physics engine. See [ProcessInfo](#enum_physicsserver2d_processinfo) for the list of available states.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsserver2d_method_joint_clear"></div>

`void` **joint_clear** ( joint: [`RID`](class_rid.md) )<div id="class_physicsserver2d_method_joint_clear"></div>

Destroys the joint with the given [`RID`](class_rid.md), creates a new uninitialized joint, and makes the [`RID`](class_rid.md) refer to this new joint.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsserver2d_method_joint_create"></div>

[`RID`](class_rid.md) **joint_create** ( )<div id="class_physicsserver2d_method_joint_create"></div>

Creates a 2D joint in the physics server, and returns the [`RID`](class_rid.md) that identifies it. To set the joint type, use [`joint_make_damped_spring`](#class_physicsserver2d_method_joint_make_damped_spring), [`joint_make_groove`](#class_physicsserver2d_method_joint_make_groove) or [`joint_make_pin`](#class_physicsserver2d_method_joint_make_pin). Use [`joint_set_param`](#class_physicsserver2d_method_joint_set_param) to set generic joint parameters.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsserver2d_method_joint_disable_collisions_between_bodies"></div>

`void` **joint_disable_collisions_between_bodies** ( joint: [`RID`](class_rid.md), disable: [`bool`](class_bool.md) )<div id="class_physicsserver2d_method_joint_disable_collisions_between_bodies"></div>

Sets whether the bodies attached to the [`Joint2D`](class_joint2d.md) will collide with each other.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsserver2d_method_joint_get_param"></div>

[`float`](class_float.md) **joint_get_param** ( joint: [`RID`](class_rid.md), param: [JointParam](#enum_physicsserver2d_jointparam) ) const[^const]<div id="class_physicsserver2d_method_joint_get_param"></div>

Returns the value of the given joint parameter. See [JointParam](#enum_physicsserver2d_jointparam) for the list of available parameters.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsserver2d_method_joint_get_type"></div>

[JointType](#enum_physicsserver2d_jointtype) **joint_get_type** ( joint: [`RID`](class_rid.md) ) const[^const]<div id="class_physicsserver2d_method_joint_get_type"></div>

Returns the joint's type (see [JointType](#enum_physicsserver2d_jointtype)).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsserver2d_method_joint_is_disabled_collisions_between_bodies"></div>

[`bool`](class_bool.md) **joint_is_disabled_collisions_between_bodies** ( joint: [`RID`](class_rid.md) ) const[^const]<div id="class_physicsserver2d_method_joint_is_disabled_collisions_between_bodies"></div>

Returns whether the bodies attached to the [`Joint2D`](class_joint2d.md) will collide with each other.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsserver2d_method_joint_make_damped_spring"></div>

`void` **joint_make_damped_spring** ( joint: [`RID`](class_rid.md), anchor_a: [`Vector2`](class_vector2.md), anchor_b: [`Vector2`](class_vector2.md), body_a: [`RID`](class_rid.md), body_b: [`RID`](class_rid.md) = RID() )<div id="class_physicsserver2d_method_joint_make_damped_spring"></div>

Makes the joint a damped spring joint, attached at the point `anchor_a` (given in global coordinates) on the body `body_a` and at the point `anchor_b` (given in global coordinates) on the body `body_b`. To set the parameters which are specific to the damped spring, see [`damped_spring_joint_set_param`](#class_physicsserver2d_method_damped_spring_joint_set_param).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsserver2d_method_joint_make_groove"></div>

`void` **joint_make_groove** ( joint: [`RID`](class_rid.md), groove1_a: [`Vector2`](class_vector2.md), groove2_a: [`Vector2`](class_vector2.md), anchor_b: [`Vector2`](class_vector2.md), body_a: [`RID`](class_rid.md) = RID(), body_b: [`RID`](class_rid.md) = RID() )<div id="class_physicsserver2d_method_joint_make_groove"></div>

Makes the joint a groove joint.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsserver2d_method_joint_make_pin"></div>

`void` **joint_make_pin** ( joint: [`RID`](class_rid.md), anchor: [`Vector2`](class_vector2.md), body_a: [`RID`](class_rid.md), body_b: [`RID`](class_rid.md) = RID() )<div id="class_physicsserver2d_method_joint_make_pin"></div>

Makes the joint a pin joint. If `body_b` is an empty [`RID`](class_rid.md), then `body_a` is pinned to the point `anchor` (given in global coordinates); otherwise, `body_a` is pinned to `body_b` at the point `anchor` (given in global coordinates). To set the parameters which are specific to the pin joint, see [`pin_joint_set_param`](#class_physicsserver2d_method_pin_joint_set_param).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsserver2d_method_joint_set_param"></div>

`void` **joint_set_param** ( joint: [`RID`](class_rid.md), param: [JointParam](#enum_physicsserver2d_jointparam), value: [`float`](class_float.md) )<div id="class_physicsserver2d_method_joint_set_param"></div>

Sets the value of the given joint parameter. See [JointParam](#enum_physicsserver2d_jointparam) for the list of available parameters.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsserver2d_method_pin_joint_get_flag"></div>

[`bool`](class_bool.md) **pin_joint_get_flag** ( joint: [`RID`](class_rid.md), flag: [PinJointFlag](#enum_physicsserver2d_pinjointflag) ) const[^const]<div id="class_physicsserver2d_method_pin_joint_get_flag"></div>

Gets a pin joint flag (see [PinJointFlag](#enum_physicsserver2d_pinjointflag) constants).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsserver2d_method_pin_joint_get_param"></div>

[`float`](class_float.md) **pin_joint_get_param** ( joint: [`RID`](class_rid.md), param: [PinJointParam](#enum_physicsserver2d_pinjointparam) ) const[^const]<div id="class_physicsserver2d_method_pin_joint_get_param"></div>

Returns the value of a pin joint parameter. See [PinJointParam](#enum_physicsserver2d_pinjointparam) for a list of available parameters.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsserver2d_method_pin_joint_set_flag"></div>

`void` **pin_joint_set_flag** ( joint: [`RID`](class_rid.md), flag: [PinJointFlag](#enum_physicsserver2d_pinjointflag), enabled: [`bool`](class_bool.md) )<div id="class_physicsserver2d_method_pin_joint_set_flag"></div>

Sets a pin joint flag (see [PinJointFlag](#enum_physicsserver2d_pinjointflag) constants).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsserver2d_method_pin_joint_set_param"></div>

`void` **pin_joint_set_param** ( joint: [`RID`](class_rid.md), param: [PinJointParam](#enum_physicsserver2d_pinjointparam), value: [`float`](class_float.md) )<div id="class_physicsserver2d_method_pin_joint_set_param"></div>

Sets a pin joint parameter. See [PinJointParam](#enum_physicsserver2d_pinjointparam) for a list of available parameters.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsserver2d_method_rectangle_shape_create"></div>

[`RID`](class_rid.md) **rectangle_shape_create** ( )<div id="class_physicsserver2d_method_rectangle_shape_create"></div>

Creates a 2D rectangle shape in the physics server, and returns the [`RID`](class_rid.md) that identifies it. Use [`shape_set_data`](#class_physicsserver2d_method_shape_set_data) to set the rectangle's half-extents.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsserver2d_method_segment_shape_create"></div>

[`RID`](class_rid.md) **segment_shape_create** ( )<div id="class_physicsserver2d_method_segment_shape_create"></div>

Creates a 2D segment shape in the physics server, and returns the [`RID`](class_rid.md) that identifies it. Use [`shape_set_data`](#class_physicsserver2d_method_shape_set_data) to set the segment's start and end points.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsserver2d_method_separation_ray_shape_create"></div>

[`RID`](class_rid.md) **separation_ray_shape_create** ( )<div id="class_physicsserver2d_method_separation_ray_shape_create"></div>

Creates a 2D separation ray shape in the physics server, and returns the [`RID`](class_rid.md) that identifies it. Use [`shape_set_data`](#class_physicsserver2d_method_shape_set_data) to set the shape's `length` and `slide_on_slope` properties.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsserver2d_method_set_active"></div>

`void` **set_active** ( active: [`bool`](class_bool.md) )<div id="class_physicsserver2d_method_set_active"></div>

Activates or deactivates the 2D physics server. If `active` is `false`, then the physics server will not do anything in its physics step.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsserver2d_method_shape_get_data"></div>

[`Variant`](class_variant.md) **shape_get_data** ( shape: [`RID`](class_rid.md) ) const[^const]<div id="class_physicsserver2d_method_shape_get_data"></div>

Returns the shape data that defines the configuration of the shape, such as the half-extents of a rectangle or the segments of a concave shape. See [`shape_set_data`](#class_physicsserver2d_method_shape_set_data) for the precise format of this data in each case.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsserver2d_method_shape_get_type"></div>

[ShapeType](#enum_physicsserver2d_shapetype) **shape_get_type** ( shape: [`RID`](class_rid.md) ) const[^const]<div id="class_physicsserver2d_method_shape_get_type"></div>

Returns the shape's type (see [ShapeType](#enum_physicsserver2d_shapetype)).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsserver2d_method_shape_set_data"></div>

`void` **shape_set_data** ( shape: [`RID`](class_rid.md), data: [`Variant`](class_variant.md) )<div id="class_physicsserver2d_method_shape_set_data"></div>

Sets the shape data that defines the configuration of the shape. The `data` to be passed depends on the shape's type (see [`shape_get_type`](#class_physicsserver2d_method_shape_get_type)):

- [`SHAPE_WORLD_BOUNDARY`](#class_physicsserver2d_constant_shape_world_boundary): an array of length two containing a [`Vector2`](class_vector2.md) `normal` direction and a [`float`](class_float.md) distance `d`,

- [`SHAPE_SEPARATION_RAY`](#class_physicsserver2d_constant_shape_separation_ray): a dictionary containing the key `length` with a [`float`](class_float.md) value and the key `slide_on_slope` with a [`bool`](class_bool.md) value,

- [`SHAPE_SEGMENT`](#class_physicsserver2d_constant_shape_segment): a [`Rect2`](class_rect2.md) `rect` containing the first point of the segment in `rect.position` and the second point of the segment in `rect.size`,

- [`SHAPE_CIRCLE`](#class_physicsserver2d_constant_shape_circle): a [`float`](class_float.md) `radius`,

- [`SHAPE_RECTANGLE`](#class_physicsserver2d_constant_shape_rectangle): a [`Vector2`](class_vector2.md) `half_extents`,

- [`SHAPE_CAPSULE`](#class_physicsserver2d_constant_shape_capsule): an array of length two (or a [`Vector2`](class_vector2.md)) containing a [`float`](class_float.md) `height` and a [`float`](class_float.md) `radius`,

- [`SHAPE_CONVEX_POLYGON`](#class_physicsserver2d_constant_shape_convex_polygon): either a [`PackedVector2Array`](class_packedvector2array.md) of points defining a convex polygon in counterclockwise order (the clockwise outward normal of each segment formed by consecutive points is calculated internally), or a [`PackedFloat32Array`](class_packedfloat32array.md) of length divisible by four so that every 4-tuple of [`float`](class_float.md) s contains the coordinates of a point followed by the coordinates of the clockwise outward normal vector to the segment between the current point and the next point,

- [`SHAPE_CONCAVE_POLYGON`](#class_physicsserver2d_constant_shape_concave_polygon): a [`PackedVector2Array`](class_packedvector2array.md) of length divisible by two (each pair of points forms one segment).

 **Warning:** In the case of [`SHAPE_CONVEX_POLYGON`](#class_physicsserver2d_constant_shape_convex_polygon), this method does not check if the points supplied actually form a convex polygon (unlike the [`CollisionPolygon2D.polygon`](#class_collisionpolygon2d_property_polygon) property).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsserver2d_method_space_create"></div>

[`RID`](class_rid.md) **space_create** ( )<div id="class_physicsserver2d_method_space_create"></div>

Creates a 2D space in the physics server, and returns the [`RID`](class_rid.md) that identifies it. A space contains bodies and areas, and controls the stepping of the physics simulation of the objects in it.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsserver2d_method_space_get_direct_state"></div>

[`PhysicsDirectSpaceState2D`](class_physicsdirectspacestate2d.md) **space_get_direct_state** ( space: [`RID`](class_rid.md) )<div id="class_physicsserver2d_method_space_get_direct_state"></div>

Returns the state of a space, a [`PhysicsDirectSpaceState2D`](class_physicsdirectspacestate2d.md). This object can be used for collision/intersection queries.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsserver2d_method_space_get_param"></div>

[`float`](class_float.md) **space_get_param** ( space: [`RID`](class_rid.md), param: [SpaceParameter](#enum_physicsserver2d_spaceparameter) ) const[^const]<div id="class_physicsserver2d_method_space_get_param"></div>

Returns the value of the given space parameter. See [SpaceParameter](#enum_physicsserver2d_spaceparameter) for the list of available parameters.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsserver2d_method_space_is_active"></div>

[`bool`](class_bool.md) **space_is_active** ( space: [`RID`](class_rid.md) ) const[^const]<div id="class_physicsserver2d_method_space_is_active"></div>

Returns `true` if the space is active.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsserver2d_method_space_set_active"></div>

`void` **space_set_active** ( space: [`RID`](class_rid.md), active: [`bool`](class_bool.md) )<div id="class_physicsserver2d_method_space_set_active"></div>

Activates or deactivates the space. If `active` is `false`, then the physics server will not do anything with this space in its physics step.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsserver2d_method_space_set_param"></div>

`void` **space_set_param** ( space: [`RID`](class_rid.md), param: [SpaceParameter](#enum_physicsserver2d_spaceparameter), value: [`float`](class_float.md) )<div id="class_physicsserver2d_method_space_set_param"></div>

Sets the value of the given space parameter. See [SpaceParameter](#enum_physicsserver2d_spaceparameter) for the list of available parameters.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsserver2d_method_world_boundary_shape_create"></div>

[`RID`](class_rid.md) **world_boundary_shape_create** ( )<div id="class_physicsserver2d_method_world_boundary_shape_create"></div>

Creates a 2D world boundary shape in the physics server, and returns the [`RID`](class_rid.md) that identifies it. Use [`shape_set_data`](#class_physicsserver2d_method_shape_set_data) to set the shape's normal direction and distance properties.

[^virtual]: 本方法通常需要用户覆盖才能生效。
[^const]: 本方法无副作用，不会修改该实例的任何成员变量。
[^vararg]: 本方法除了能接受在此处描述的参数外，还能够继续接受任意数量的参数。
[^constructor]: 本方法用于构造某个类型。
[^static]: 调用本方法无需实例，可直接使用类名进行调用。
[^operator]: 本方法描述的是使用本类型作为左操作数的有效运算符。
[^bitfield]: 这个值是由下列位标志构成位掩码的整数。
[^void]: 无返回值。
