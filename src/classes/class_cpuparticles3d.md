<!-- ⚠ 请勿编辑本文件 ⚠ -->
<!-- 本文档使用脚本从 WeDot 引擎源码仓库生成。 -->
<!-- 生成脚本：https://github.com/WeDot-Engine/WeDot/tree/4.3/doc/tools/make_md.py； -->
<!-- 原文件：https://github.com/WeDot-Engine/WeDot/tree/4.3/doc/classes/CPUParticles3D.xml。 -->

<div id="_class_cpuparticles3d"></div>

# CPUParticles3D

**继承：** [`GeometryInstance3D`](class_geometryinstance3d.md) **<** [`VisualInstance3D`](class_visualinstance3d.md) **<** [`Node3D`](class_node3d.md) **<** [`Node`](class_node.md) **<** [`Object`](class_object.md)

A CPU-based 3D particle emitter.

## 描述

CPU-based 3D particle node used to create a variety of particle systems and effects.

See also [`GPUParticles3D`](class_gpuparticles3d.md), which provides the same functionality with hardware acceleration, but may not run on older devices.

## 属性

| [`int`](class_int.md)                               | [`amount`](#class_cpuparticles3d_property_amount)                                         | ``8``                      |
| [`Curve`](class_curve.md)                           | [`angle_curve`](#class_cpuparticles3d_property_angle_curve)                               |                            |
| [`float`](class_float.md)                           | [`angle_max`](#class_cpuparticles3d_property_angle_max)                                   | ``0.0``                    |
| [`float`](class_float.md)                           | [`angle_min`](#class_cpuparticles3d_property_angle_min)                                   | ``0.0``                    |
| [`Curve`](class_curve.md)                           | [`angular_velocity_curve`](#class_cpuparticles3d_property_angular_velocity_curve)         |                            |
| [`float`](class_float.md)                           | [`angular_velocity_max`](#class_cpuparticles3d_property_angular_velocity_max)             | ``0.0``                    |
| [`float`](class_float.md)                           | [`angular_velocity_min`](#class_cpuparticles3d_property_angular_velocity_min)             | ``0.0``                    |
| [`Curve`](class_curve.md)                           | [`anim_offset_curve`](#class_cpuparticles3d_property_anim_offset_curve)                   |                            |
| [`float`](class_float.md)                           | [`anim_offset_max`](#class_cpuparticles3d_property_anim_offset_max)                       | ``0.0``                    |
| [`float`](class_float.md)                           | [`anim_offset_min`](#class_cpuparticles3d_property_anim_offset_min)                       | ``0.0``                    |
| [`Curve`](class_curve.md)                           | [`anim_speed_curve`](#class_cpuparticles3d_property_anim_speed_curve)                     |                            |
| [`float`](class_float.md)                           | [`anim_speed_max`](#class_cpuparticles3d_property_anim_speed_max)                         | ``0.0``                    |
| [`float`](class_float.md)                           | [`anim_speed_min`](#class_cpuparticles3d_property_anim_speed_min)                         | ``0.0``                    |
| [`Color`](class_color.md)                           | [`color`](#class_cpuparticles3d_property_color)                                           | ``Color(1, 1, 1, 1)``      |
| [`Gradient`](class_gradient.md)                     | [`color_initial_ramp`](#class_cpuparticles3d_property_color_initial_ramp)                 |                            |
| [`Gradient`](class_gradient.md)                     | [`color_ramp`](#class_cpuparticles3d_property_color_ramp)                                 |                            |
| [`Curve`](class_curve.md)                           | [`damping_curve`](#class_cpuparticles3d_property_damping_curve)                           |                            |
| [`float`](class_float.md)                           | [`damping_max`](#class_cpuparticles3d_property_damping_max)                               | ``0.0``                    |
| [`float`](class_float.md)                           | [`damping_min`](#class_cpuparticles3d_property_damping_min)                               | ``0.0``                    |
| [`Vector3`](class_vector3.md)                       | [`direction`](#class_cpuparticles3d_property_direction)                                   | ``Vector3(1, 0, 0)``       |
| [DrawOrder](#enum_cpuparticles3d_draworder)         | [`draw_order`](#class_cpuparticles3d_property_draw_order)                                 | ``0``                      |
| [`Vector3`](class_vector3.md)                       | [`emission_box_extents`](#class_cpuparticles3d_property_emission_box_extents)             |                            |
| [`PackedColorArray`](class_packedcolorarray.md)     | [`emission_colors`](#class_cpuparticles3d_property_emission_colors)                       | ``PackedColorArray()``     |
| [`PackedVector3Array`](class_packedvector3array.md) | [`emission_normals`](#class_cpuparticles3d_property_emission_normals)                     |                            |
| [`PackedVector3Array`](class_packedvector3array.md) | [`emission_points`](#class_cpuparticles3d_property_emission_points)                       |                            |
| [`Vector3`](class_vector3.md)                       | [`emission_ring_axis`](#class_cpuparticles3d_property_emission_ring_axis)                 |                            |
| [`float`](class_float.md)                           | [`emission_ring_height`](#class_cpuparticles3d_property_emission_ring_height)             |                            |
| [`float`](class_float.md)                           | [`emission_ring_inner_radius`](#class_cpuparticles3d_property_emission_ring_inner_radius) |                            |
| [`float`](class_float.md)                           | [`emission_ring_radius`](#class_cpuparticles3d_property_emission_ring_radius)             |                            |
| [EmissionShape](#enum_cpuparticles3d_emissionshape) | [`emission_shape`](#class_cpuparticles3d_property_emission_shape)                         | ``0``                      |
| [`float`](class_float.md)                           | [`emission_sphere_radius`](#class_cpuparticles3d_property_emission_sphere_radius)         |                            |
| [`bool`](class_bool.md)                             | [`emitting`](#class_cpuparticles3d_property_emitting)                                     | ``true``                   |
| [`float`](class_float.md)                           | [`explosiveness`](#class_cpuparticles3d_property_explosiveness)                           | ``0.0``                    |
| [`int`](class_int.md)                               | [`fixed_fps`](#class_cpuparticles3d_property_fixed_fps)                                   | ``0``                      |
| [`float`](class_float.md)                           | [`flatness`](#class_cpuparticles3d_property_flatness)                                     | ``0.0``                    |
| [`bool`](class_bool.md)                             | [`fract_delta`](#class_cpuparticles3d_property_fract_delta)                               | ``true``                   |
| [`Vector3`](class_vector3.md)                       | [`gravity`](#class_cpuparticles3d_property_gravity)                                       | ``Vector3(0, -9.8, 0)``    |
| [`Curve`](class_curve.md)                           | [`hue_variation_curve`](#class_cpuparticles3d_property_hue_variation_curve)               |                            |
| [`float`](class_float.md)                           | [`hue_variation_max`](#class_cpuparticles3d_property_hue_variation_max)                   | ``0.0``                    |
| [`float`](class_float.md)                           | [`hue_variation_min`](#class_cpuparticles3d_property_hue_variation_min)                   | ``0.0``                    |
| [`float`](class_float.md)                           | [`initial_velocity_max`](#class_cpuparticles3d_property_initial_velocity_max)             | ``0.0``                    |
| [`float`](class_float.md)                           | [`initial_velocity_min`](#class_cpuparticles3d_property_initial_velocity_min)             | ``0.0``                    |
| [`float`](class_float.md)                           | [`lifetime`](#class_cpuparticles3d_property_lifetime)                                     | ``1.0``                    |
| [`float`](class_float.md)                           | [`lifetime_randomness`](#class_cpuparticles3d_property_lifetime_randomness)               | ``0.0``                    |
| [`Curve`](class_curve.md)                           | [`linear_accel_curve`](#class_cpuparticles3d_property_linear_accel_curve)                 |                            |
| [`float`](class_float.md)                           | [`linear_accel_max`](#class_cpuparticles3d_property_linear_accel_max)                     | ``0.0``                    |
| [`float`](class_float.md)                           | [`linear_accel_min`](#class_cpuparticles3d_property_linear_accel_min)                     | ``0.0``                    |
| [`bool`](class_bool.md)                             | [`local_coords`](#class_cpuparticles3d_property_local_coords)                             | ``false``                  |
| [`Mesh`](class_mesh.md)                             | [`mesh`](#class_cpuparticles3d_property_mesh)                                             |                            |
| [`bool`](class_bool.md)                             | [`one_shot`](#class_cpuparticles3d_property_one_shot)                                     | ``false``                  |
| [`Curve`](class_curve.md)                           | [`orbit_velocity_curve`](#class_cpuparticles3d_property_orbit_velocity_curve)             |                            |
| [`float`](class_float.md)                           | [`orbit_velocity_max`](#class_cpuparticles3d_property_orbit_velocity_max)                 |                            |
| [`float`](class_float.md)                           | [`orbit_velocity_min`](#class_cpuparticles3d_property_orbit_velocity_min)                 |                            |
| [`bool`](class_bool.md)                             | [`particle_flag_align_y`](#class_cpuparticles3d_property_particle_flag_align_y)           | ``false``                  |
| [`bool`](class_bool.md)                             | [`particle_flag_disable_z`](#class_cpuparticles3d_property_particle_flag_disable_z)       | ``false``                  |
| [`bool`](class_bool.md)                             | [`particle_flag_rotate_y`](#class_cpuparticles3d_property_particle_flag_rotate_y)         | ``false``                  |
| [`float`](class_float.md)                           | [`preprocess`](#class_cpuparticles3d_property_preprocess)                                 | ``0.0``                    |
| [`Curve`](class_curve.md)                           | [`radial_accel_curve`](#class_cpuparticles3d_property_radial_accel_curve)                 |                            |
| [`float`](class_float.md)                           | [`radial_accel_max`](#class_cpuparticles3d_property_radial_accel_max)                     | ``0.0``                    |
| [`float`](class_float.md)                           | [`radial_accel_min`](#class_cpuparticles3d_property_radial_accel_min)                     | ``0.0``                    |
| [`float`](class_float.md)                           | [`randomness`](#class_cpuparticles3d_property_randomness)                                 | ``0.0``                    |
| [`Curve`](class_curve.md)                           | [`scale_amount_curve`](#class_cpuparticles3d_property_scale_amount_curve)                 |                            |
| [`float`](class_float.md)                           | [`scale_amount_max`](#class_cpuparticles3d_property_scale_amount_max)                     | ``1.0``                    |
| [`float`](class_float.md)                           | [`scale_amount_min`](#class_cpuparticles3d_property_scale_amount_min)                     | ``1.0``                    |
| [`Curve`](class_curve.md)                           | [`scale_curve_x`](#class_cpuparticles3d_property_scale_curve_x)                           |                            |
| [`Curve`](class_curve.md)                           | [`scale_curve_y`](#class_cpuparticles3d_property_scale_curve_y)                           |                            |
| [`Curve`](class_curve.md)                           | [`scale_curve_z`](#class_cpuparticles3d_property_scale_curve_z)                           |                            |
| [`float`](class_float.md)                           | [`speed_scale`](#class_cpuparticles3d_property_speed_scale)                               | ``1.0``                    |
| [`bool`](class_bool.md)                             | [`split_scale`](#class_cpuparticles3d_property_split_scale)                               | ``false``                  |
| [`float`](class_float.md)                           | [`spread`](#class_cpuparticles3d_property_spread)                                         | ``45.0``                   |
| [`Curve`](class_curve.md)                           | [`tangential_accel_curve`](#class_cpuparticles3d_property_tangential_accel_curve)         |                            |
| [`float`](class_float.md)                           | [`tangential_accel_max`](#class_cpuparticles3d_property_tangential_accel_max)             | ``0.0``                    |
| [`float`](class_float.md)                           | [`tangential_accel_min`](#class_cpuparticles3d_property_tangential_accel_min)             | ``0.0``                    |
| [`AABB`](class_aabb.md)                             | [`visibility_aabb`](#class_cpuparticles3d_property_visibility_aabb)                       | ``AABB(0, 0, 0, 0, 0, 0)`` |

## 方法

| `void`                    | [`convert_from_particles`](#class_cpuparticles3d_method_convert_from_particles) ( particles: [`Node`](class_node.md) )                                                        |
| [`Curve`](class_curve.md) | [`get_param_curve`](#class_cpuparticles3d_method_get_param_curve) ( param: [Parameter](#enum_cpuparticles3d_parameter) ) const[^const]                                        |
| [`float`](class_float.md) | [`get_param_max`](#class_cpuparticles3d_method_get_param_max) ( param: [Parameter](#enum_cpuparticles3d_parameter) ) const[^const]                                            |
| [`float`](class_float.md) | [`get_param_min`](#class_cpuparticles3d_method_get_param_min) ( param: [Parameter](#enum_cpuparticles3d_parameter) ) const[^const]                                            |
| [`bool`](class_bool.md)   | [`get_particle_flag`](#class_cpuparticles3d_method_get_particle_flag) ( particle_flag: [ParticleFlags](#enum_cpuparticles3d_particleflags) ) const[^const]                    |
| `void`                    | [`restart`](#class_cpuparticles3d_method_restart) ( )                                                                                                                         |
| `void`                    | [`set_param_curve`](#class_cpuparticles3d_method_set_param_curve) ( param: [Parameter](#enum_cpuparticles3d_parameter), curve: [`Curve`](class_curve.md) )                    |
| `void`                    | [`set_param_max`](#class_cpuparticles3d_method_set_param_max) ( param: [Parameter](#enum_cpuparticles3d_parameter), value: [`float`](class_float.md) )                        |
| `void`                    | [`set_param_min`](#class_cpuparticles3d_method_set_param_min) ( param: [Parameter](#enum_cpuparticles3d_parameter), value: [`float`](class_float.md) )                        |
| `void`                    | [`set_particle_flag`](#class_cpuparticles3d_method_set_particle_flag) ( particle_flag: [ParticleFlags](#enum_cpuparticles3d_particleflags), enable: [`bool`](class_bool.md) ) |

<!-- rst-class:: classref-section-separator -->

---

## 信号

<div id="_class_class_cpuparticles3d_signal_finished"></div>

**finished** ( ) <div id="class_cpuparticles3d_signal_finished"></div>

Emitted when all active particles have finished processing. When [`one_shot`](#class_cpuparticles3d_property_one_shot) is disabled, particles will process continuously, so this is never emitted.

<!-- rst-class:: classref-section-separator -->

---

## 枚举

<div id="_class_enum_cpuparticles3d_draworder"></div>

enum **DrawOrder**: <div id="enum_cpuparticles3d_draworder"></div>

<div id="_class_cpuparticles3d_constant_draw_order_index"></div>

[DrawOrder](#enum_cpuparticles3d_draworder) **DRAW_ORDER_INDEX** = ``0``

Particles are drawn in the order emitted.

<div id="_class_cpuparticles3d_constant_draw_order_lifetime"></div>

[DrawOrder](#enum_cpuparticles3d_draworder) **DRAW_ORDER_LIFETIME** = ``1``

Particles are drawn in order of remaining lifetime. In other words, the particle with the highest lifetime is drawn at the front.

<div id="_class_cpuparticles3d_constant_draw_order_view_depth"></div>

[DrawOrder](#enum_cpuparticles3d_draworder) **DRAW_ORDER_VIEW_DEPTH** = ``2``

Particles are drawn in order of depth.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_enum_cpuparticles3d_parameter"></div>

enum **Parameter**: <div id="enum_cpuparticles3d_parameter"></div>

<div id="_class_cpuparticles3d_constant_param_initial_linear_velocity"></div>

[Parameter](#enum_cpuparticles3d_parameter) **PARAM_INITIAL_LINEAR_VELOCITY** = ``0``

Use with [`set_param_min`](#class_cpuparticles3d_method_set_param_min), [`set_param_max`](#class_cpuparticles3d_method_set_param_max), and [`set_param_curve`](#class_cpuparticles3d_method_set_param_curve) to set initial velocity properties.

<div id="_class_cpuparticles3d_constant_param_angular_velocity"></div>

[Parameter](#enum_cpuparticles3d_parameter) **PARAM_ANGULAR_VELOCITY** = ``1``

Use with [`set_param_min`](#class_cpuparticles3d_method_set_param_min), [`set_param_max`](#class_cpuparticles3d_method_set_param_max), and [`set_param_curve`](#class_cpuparticles3d_method_set_param_curve) to set angular velocity properties.

<div id="_class_cpuparticles3d_constant_param_orbit_velocity"></div>

[Parameter](#enum_cpuparticles3d_parameter) **PARAM_ORBIT_VELOCITY** = ``2``

Use with [`set_param_min`](#class_cpuparticles3d_method_set_param_min), [`set_param_max`](#class_cpuparticles3d_method_set_param_max), and [`set_param_curve`](#class_cpuparticles3d_method_set_param_curve) to set orbital velocity properties.

<div id="_class_cpuparticles3d_constant_param_linear_accel"></div>

[Parameter](#enum_cpuparticles3d_parameter) **PARAM_LINEAR_ACCEL** = ``3``

Use with [`set_param_min`](#class_cpuparticles3d_method_set_param_min), [`set_param_max`](#class_cpuparticles3d_method_set_param_max), and [`set_param_curve`](#class_cpuparticles3d_method_set_param_curve) to set linear acceleration properties.

<div id="_class_cpuparticles3d_constant_param_radial_accel"></div>

[Parameter](#enum_cpuparticles3d_parameter) **PARAM_RADIAL_ACCEL** = ``4``

Use with [`set_param_min`](#class_cpuparticles3d_method_set_param_min), [`set_param_max`](#class_cpuparticles3d_method_set_param_max), and [`set_param_curve`](#class_cpuparticles3d_method_set_param_curve) to set radial acceleration properties.

<div id="_class_cpuparticles3d_constant_param_tangential_accel"></div>

[Parameter](#enum_cpuparticles3d_parameter) **PARAM_TANGENTIAL_ACCEL** = ``5``

Use with [`set_param_min`](#class_cpuparticles3d_method_set_param_min), [`set_param_max`](#class_cpuparticles3d_method_set_param_max), and [`set_param_curve`](#class_cpuparticles3d_method_set_param_curve) to set tangential acceleration properties.

<div id="_class_cpuparticles3d_constant_param_damping"></div>

[Parameter](#enum_cpuparticles3d_parameter) **PARAM_DAMPING** = ``6``

Use with [`set_param_min`](#class_cpuparticles3d_method_set_param_min), [`set_param_max`](#class_cpuparticles3d_method_set_param_max), and [`set_param_curve`](#class_cpuparticles3d_method_set_param_curve) to set damping properties.

<div id="_class_cpuparticles3d_constant_param_angle"></div>

[Parameter](#enum_cpuparticles3d_parameter) **PARAM_ANGLE** = ``7``

Use with [`set_param_min`](#class_cpuparticles3d_method_set_param_min), [`set_param_max`](#class_cpuparticles3d_method_set_param_max), and [`set_param_curve`](#class_cpuparticles3d_method_set_param_curve) to set angle properties.

<div id="_class_cpuparticles3d_constant_param_scale"></div>

[Parameter](#enum_cpuparticles3d_parameter) **PARAM_SCALE** = ``8``

Use with [`set_param_min`](#class_cpuparticles3d_method_set_param_min), [`set_param_max`](#class_cpuparticles3d_method_set_param_max), and [`set_param_curve`](#class_cpuparticles3d_method_set_param_curve) to set scale properties.

<div id="_class_cpuparticles3d_constant_param_hue_variation"></div>

[Parameter](#enum_cpuparticles3d_parameter) **PARAM_HUE_VARIATION** = ``9``

Use with [`set_param_min`](#class_cpuparticles3d_method_set_param_min), [`set_param_max`](#class_cpuparticles3d_method_set_param_max), and [`set_param_curve`](#class_cpuparticles3d_method_set_param_curve) to set hue variation properties.

<div id="_class_cpuparticles3d_constant_param_anim_speed"></div>

[Parameter](#enum_cpuparticles3d_parameter) **PARAM_ANIM_SPEED** = ``10``

Use with [`set_param_min`](#class_cpuparticles3d_method_set_param_min), [`set_param_max`](#class_cpuparticles3d_method_set_param_max), and [`set_param_curve`](#class_cpuparticles3d_method_set_param_curve) to set animation speed properties.

<div id="_class_cpuparticles3d_constant_param_anim_offset"></div>

[Parameter](#enum_cpuparticles3d_parameter) **PARAM_ANIM_OFFSET** = ``11``

Use with [`set_param_min`](#class_cpuparticles3d_method_set_param_min), [`set_param_max`](#class_cpuparticles3d_method_set_param_max), and [`set_param_curve`](#class_cpuparticles3d_method_set_param_curve) to set animation offset properties.

<div id="_class_cpuparticles3d_constant_param_max"></div>

[Parameter](#enum_cpuparticles3d_parameter) **PARAM_MAX** = ``12``

Represents the size of the [Parameter](#enum_cpuparticles3d_parameter) enum.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_enum_cpuparticles3d_particleflags"></div>

enum **ParticleFlags**: <div id="enum_cpuparticles3d_particleflags"></div>

<div id="_class_cpuparticles3d_constant_particle_flag_align_y_to_velocity"></div>

[ParticleFlags](#enum_cpuparticles3d_particleflags) **PARTICLE_FLAG_ALIGN_Y_TO_VELOCITY** = ``0``

Use with [`set_particle_flag`](#class_cpuparticles3d_method_set_particle_flag) to set [`particle_flag_align_y`](#class_cpuparticles3d_property_particle_flag_align_y).

<div id="_class_cpuparticles3d_constant_particle_flag_rotate_y"></div>

[ParticleFlags](#enum_cpuparticles3d_particleflags) **PARTICLE_FLAG_ROTATE_Y** = ``1``

Use with [`set_particle_flag`](#class_cpuparticles3d_method_set_particle_flag) to set [`particle_flag_rotate_y`](#class_cpuparticles3d_property_particle_flag_rotate_y).

<div id="_class_cpuparticles3d_constant_particle_flag_disable_z"></div>

[ParticleFlags](#enum_cpuparticles3d_particleflags) **PARTICLE_FLAG_DISABLE_Z** = ``2``

Use with [`set_particle_flag`](#class_cpuparticles3d_method_set_particle_flag) to set [`particle_flag_disable_z`](#class_cpuparticles3d_property_particle_flag_disable_z).

<div id="_class_cpuparticles3d_constant_particle_flag_max"></div>

[ParticleFlags](#enum_cpuparticles3d_particleflags) **PARTICLE_FLAG_MAX** = ``3``

Represents the size of the [ParticleFlags](#enum_cpuparticles3d_particleflags) enum.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_enum_cpuparticles3d_emissionshape"></div>

enum **EmissionShape**: <div id="enum_cpuparticles3d_emissionshape"></div>

<div id="_class_cpuparticles3d_constant_emission_shape_point"></div>

[EmissionShape](#enum_cpuparticles3d_emissionshape) **EMISSION_SHAPE_POINT** = ``0``

All particles will be emitted from a single point.

<div id="_class_cpuparticles3d_constant_emission_shape_sphere"></div>

[EmissionShape](#enum_cpuparticles3d_emissionshape) **EMISSION_SHAPE_SPHERE** = ``1``

Particles will be emitted in the volume of a sphere.

<div id="_class_cpuparticles3d_constant_emission_shape_sphere_surface"></div>

[EmissionShape](#enum_cpuparticles3d_emissionshape) **EMISSION_SHAPE_SPHERE_SURFACE** = ``2``

Particles will be emitted on the surface of a sphere.

<div id="_class_cpuparticles3d_constant_emission_shape_box"></div>

[EmissionShape](#enum_cpuparticles3d_emissionshape) **EMISSION_SHAPE_BOX** = ``3``

Particles will be emitted in the volume of a box.

<div id="_class_cpuparticles3d_constant_emission_shape_points"></div>

[EmissionShape](#enum_cpuparticles3d_emissionshape) **EMISSION_SHAPE_POINTS** = ``4``

Particles will be emitted at a position chosen randomly among [`emission_points`](#class_cpuparticles3d_property_emission_points). Particle color will be modulated by [`emission_colors`](#class_cpuparticles3d_property_emission_colors).

<div id="_class_cpuparticles3d_constant_emission_shape_directed_points"></div>

[EmissionShape](#enum_cpuparticles3d_emissionshape) **EMISSION_SHAPE_DIRECTED_POINTS** = ``5``

Particles will be emitted at a position chosen randomly among [`emission_points`](#class_cpuparticles3d_property_emission_points). Particle velocity and rotation will be set based on [`emission_normals`](#class_cpuparticles3d_property_emission_normals). Particle color will be modulated by [`emission_colors`](#class_cpuparticles3d_property_emission_colors).

<div id="_class_cpuparticles3d_constant_emission_shape_ring"></div>

[EmissionShape](#enum_cpuparticles3d_emissionshape) **EMISSION_SHAPE_RING** = ``6``

Particles will be emitted in a ring or cylinder.

<div id="_class_cpuparticles3d_constant_emission_shape_max"></div>

[EmissionShape](#enum_cpuparticles3d_emissionshape) **EMISSION_SHAPE_MAX** = ``7``

Represents the size of the [EmissionShape](#enum_cpuparticles3d_emissionshape) enum.

<!-- rst-class:: classref-section-separator -->

---

## 属性说明

<div id="_class_cpuparticles3d_property_amount"></div>

[`int`](class_int.md) **amount** = ``8`` <div id="class_cpuparticles3d_property_amount"></div>

- `void` **set_amount** ( value: [`int`](class_int.md) )
- [`int`](class_int.md) **get_amount** ( )

Number of particles emitted in one emission cycle.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_cpuparticles3d_property_angle_curve"></div>

[`Curve`](class_curve.md) **angle_curve** <div id="class_cpuparticles3d_property_angle_curve"></div>

- `void` **set_param_curve** ( param: [Parameter](#enum_cpuparticles3d_parameter), curve: [`Curve`](class_curve.md) )
- [`Curve`](class_curve.md) **get_param_curve** ( param: [Parameter](#enum_cpuparticles3d_parameter) ) const[^const]

Each particle's rotation will be animated along this [`Curve`](class_curve.md).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_cpuparticles3d_property_angle_max"></div>

[`float`](class_float.md) **angle_max** = ``0.0`` <div id="class_cpuparticles3d_property_angle_max"></div>

- `void` **set_param_max** ( param: [Parameter](#enum_cpuparticles3d_parameter), value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_param_max** ( param: [Parameter](#enum_cpuparticles3d_parameter) ) const[^const]

Maximum angle.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_cpuparticles3d_property_angle_min"></div>

[`float`](class_float.md) **angle_min** = ``0.0`` <div id="class_cpuparticles3d_property_angle_min"></div>

- `void` **set_param_min** ( param: [Parameter](#enum_cpuparticles3d_parameter), value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_param_min** ( param: [Parameter](#enum_cpuparticles3d_parameter) ) const[^const]

Minimum angle.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_cpuparticles3d_property_angular_velocity_curve"></div>

[`Curve`](class_curve.md) **angular_velocity_curve** <div id="class_cpuparticles3d_property_angular_velocity_curve"></div>

- `void` **set_param_curve** ( param: [Parameter](#enum_cpuparticles3d_parameter), curve: [`Curve`](class_curve.md) )
- [`Curve`](class_curve.md) **get_param_curve** ( param: [Parameter](#enum_cpuparticles3d_parameter) ) const[^const]

Each particle's angular velocity (rotation speed) will vary along this [`Curve`](class_curve.md) over its lifetime.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_cpuparticles3d_property_angular_velocity_max"></div>

[`float`](class_float.md) **angular_velocity_max** = ``0.0`` <div id="class_cpuparticles3d_property_angular_velocity_max"></div>

- `void` **set_param_max** ( param: [Parameter](#enum_cpuparticles3d_parameter), value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_param_max** ( param: [Parameter](#enum_cpuparticles3d_parameter) ) const[^const]

Maximum initial angular velocity (rotation speed) applied to each particle in *degrees* per second.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_cpuparticles3d_property_angular_velocity_min"></div>

[`float`](class_float.md) **angular_velocity_min** = ``0.0`` <div id="class_cpuparticles3d_property_angular_velocity_min"></div>

- `void` **set_param_min** ( param: [Parameter](#enum_cpuparticles3d_parameter), value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_param_min** ( param: [Parameter](#enum_cpuparticles3d_parameter) ) const[^const]

Minimum initial angular velocity (rotation speed) applied to each particle in *degrees* per second.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_cpuparticles3d_property_anim_offset_curve"></div>

[`Curve`](class_curve.md) **anim_offset_curve** <div id="class_cpuparticles3d_property_anim_offset_curve"></div>

- `void` **set_param_curve** ( param: [Parameter](#enum_cpuparticles3d_parameter), curve: [`Curve`](class_curve.md) )
- [`Curve`](class_curve.md) **get_param_curve** ( param: [Parameter](#enum_cpuparticles3d_parameter) ) const[^const]

Each particle's animation offset will vary along this [`Curve`](class_curve.md).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_cpuparticles3d_property_anim_offset_max"></div>

[`float`](class_float.md) **anim_offset_max** = ``0.0`` <div id="class_cpuparticles3d_property_anim_offset_max"></div>

- `void` **set_param_max** ( param: [Parameter](#enum_cpuparticles3d_parameter), value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_param_max** ( param: [Parameter](#enum_cpuparticles3d_parameter) ) const[^const]

Maximum animation offset.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_cpuparticles3d_property_anim_offset_min"></div>

[`float`](class_float.md) **anim_offset_min** = ``0.0`` <div id="class_cpuparticles3d_property_anim_offset_min"></div>

- `void` **set_param_min** ( param: [Parameter](#enum_cpuparticles3d_parameter), value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_param_min** ( param: [Parameter](#enum_cpuparticles3d_parameter) ) const[^const]

Minimum animation offset.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_cpuparticles3d_property_anim_speed_curve"></div>

[`Curve`](class_curve.md) **anim_speed_curve** <div id="class_cpuparticles3d_property_anim_speed_curve"></div>

- `void` **set_param_curve** ( param: [Parameter](#enum_cpuparticles3d_parameter), curve: [`Curve`](class_curve.md) )
- [`Curve`](class_curve.md) **get_param_curve** ( param: [Parameter](#enum_cpuparticles3d_parameter) ) const[^const]

Each particle's animation speed will vary along this [`Curve`](class_curve.md).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_cpuparticles3d_property_anim_speed_max"></div>

[`float`](class_float.md) **anim_speed_max** = ``0.0`` <div id="class_cpuparticles3d_property_anim_speed_max"></div>

- `void` **set_param_max** ( param: [Parameter](#enum_cpuparticles3d_parameter), value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_param_max** ( param: [Parameter](#enum_cpuparticles3d_parameter) ) const[^const]

Maximum particle animation speed.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_cpuparticles3d_property_anim_speed_min"></div>

[`float`](class_float.md) **anim_speed_min** = ``0.0`` <div id="class_cpuparticles3d_property_anim_speed_min"></div>

- `void` **set_param_min** ( param: [Parameter](#enum_cpuparticles3d_parameter), value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_param_min** ( param: [Parameter](#enum_cpuparticles3d_parameter) ) const[^const]

Minimum particle animation speed.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_cpuparticles3d_property_color"></div>

[`Color`](class_color.md) **color** = ``Color(1, 1, 1, 1)`` <div id="class_cpuparticles3d_property_color"></div>

- `void` **set_color** ( value: [`Color`](class_color.md) )
- [`Color`](class_color.md) **get_color** ( )

Each particle's initial color.

 **Note:** [`color`](#class_cpuparticles3d_property_color) multiplies the particle mesh's vertex colors. To have a visible effect on a [`BaseMaterial3D`](class_basematerial3d.md), [`BaseMaterial3D.vertex_color_use_as_albedo`](#class_basematerial3d_property_vertex_color_use_as_albedo) *must* be `true`. For a [`ShaderMaterial`](class_shadermaterial.md), `ALBEDO *= COLOR.rgb;` must be inserted in the shader's `fragment()` function. Otherwise, [`color`](#class_cpuparticles3d_property_color) will have no visible effect.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_cpuparticles3d_property_color_initial_ramp"></div>

[`Gradient`](class_gradient.md) **color_initial_ramp** <div id="class_cpuparticles3d_property_color_initial_ramp"></div>

- `void` **set_color_initial_ramp** ( value: [`Gradient`](class_gradient.md) )
- [`Gradient`](class_gradient.md) **get_color_initial_ramp** ( )

Each particle's initial color will vary along this [`GradientTexture1D`](class_gradienttexture1d.md) (multiplied with [`color`](#class_cpuparticles3d_property_color)).

 **Note:** [`color_initial_ramp`](#class_cpuparticles3d_property_color_initial_ramp) multiplies the particle mesh's vertex colors. To have a visible effect on a [`BaseMaterial3D`](class_basematerial3d.md), [`BaseMaterial3D.vertex_color_use_as_albedo`](#class_basematerial3d_property_vertex_color_use_as_albedo) *must* be `true`. For a [`ShaderMaterial`](class_shadermaterial.md), `ALBEDO *= COLOR.rgb;` must be inserted in the shader's `fragment()` function. Otherwise, [`color_initial_ramp`](#class_cpuparticles3d_property_color_initial_ramp) will have no visible effect.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_cpuparticles3d_property_color_ramp"></div>

[`Gradient`](class_gradient.md) **color_ramp** <div id="class_cpuparticles3d_property_color_ramp"></div>

- `void` **set_color_ramp** ( value: [`Gradient`](class_gradient.md) )
- [`Gradient`](class_gradient.md) **get_color_ramp** ( )

Each particle's color will vary along this [`GradientTexture1D`](class_gradienttexture1d.md) over its lifetime (multiplied with [`color`](#class_cpuparticles3d_property_color)).

 **Note:** [`color_ramp`](#class_cpuparticles3d_property_color_ramp) multiplies the particle mesh's vertex colors. To have a visible effect on a [`BaseMaterial3D`](class_basematerial3d.md), [`BaseMaterial3D.vertex_color_use_as_albedo`](#class_basematerial3d_property_vertex_color_use_as_albedo) *must* be `true`. For a [`ShaderMaterial`](class_shadermaterial.md), `ALBEDO *= COLOR.rgb;` must be inserted in the shader's `fragment()` function. Otherwise, [`color_ramp`](#class_cpuparticles3d_property_color_ramp) will have no visible effect.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_cpuparticles3d_property_damping_curve"></div>

[`Curve`](class_curve.md) **damping_curve** <div id="class_cpuparticles3d_property_damping_curve"></div>

- `void` **set_param_curve** ( param: [Parameter](#enum_cpuparticles3d_parameter), curve: [`Curve`](class_curve.md) )
- [`Curve`](class_curve.md) **get_param_curve** ( param: [Parameter](#enum_cpuparticles3d_parameter) ) const[^const]

Damping will vary along this [`Curve`](class_curve.md).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_cpuparticles3d_property_damping_max"></div>

[`float`](class_float.md) **damping_max** = ``0.0`` <div id="class_cpuparticles3d_property_damping_max"></div>

- `void` **set_param_max** ( param: [Parameter](#enum_cpuparticles3d_parameter), value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_param_max** ( param: [Parameter](#enum_cpuparticles3d_parameter) ) const[^const]

Maximum damping.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_cpuparticles3d_property_damping_min"></div>

[`float`](class_float.md) **damping_min** = ``0.0`` <div id="class_cpuparticles3d_property_damping_min"></div>

- `void` **set_param_min** ( param: [Parameter](#enum_cpuparticles3d_parameter), value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_param_min** ( param: [Parameter](#enum_cpuparticles3d_parameter) ) const[^const]

Minimum damping.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_cpuparticles3d_property_direction"></div>

[`Vector3`](class_vector3.md) **direction** = ``Vector3(1, 0, 0)`` <div id="class_cpuparticles3d_property_direction"></div>

- `void` **set_direction** ( value: [`Vector3`](class_vector3.md) )
- [`Vector3`](class_vector3.md) **get_direction** ( )

Unit vector specifying the particles' emission direction.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_cpuparticles3d_property_draw_order"></div>

[DrawOrder](#enum_cpuparticles3d_draworder) **draw_order** = ``0`` <div id="class_cpuparticles3d_property_draw_order"></div>

- `void` **set_draw_order** ( value: [DrawOrder](#enum_cpuparticles3d_draworder) )
- [DrawOrder](#enum_cpuparticles3d_draworder) **get_draw_order** ( )

Particle draw order. Uses [DrawOrder](#enum_cpuparticles3d_draworder) values.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_cpuparticles3d_property_emission_box_extents"></div>

[`Vector3`](class_vector3.md) **emission_box_extents** <div id="class_cpuparticles3d_property_emission_box_extents"></div>

- `void` **set_emission_box_extents** ( value: [`Vector3`](class_vector3.md) )
- [`Vector3`](class_vector3.md) **get_emission_box_extents** ( )

The rectangle's extents if [`emission_shape`](#class_cpuparticles3d_property_emission_shape) is set to [`EMISSION_SHAPE_BOX`](#class_cpuparticles3d_constant_emission_shape_box).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_cpuparticles3d_property_emission_colors"></div>

[`PackedColorArray`](class_packedcolorarray.md) **emission_colors** = ``PackedColorArray()`` <div id="class_cpuparticles3d_property_emission_colors"></div>

- `void` **set_emission_colors** ( value: [`PackedColorArray`](class_packedcolorarray.md) )
- [`PackedColorArray`](class_packedcolorarray.md) **get_emission_colors** ( )

Sets the [`Color`](class_color.md) s to modulate particles by when using [`EMISSION_SHAPE_POINTS`](#class_cpuparticles3d_constant_emission_shape_points) or [`EMISSION_SHAPE_DIRECTED_POINTS`](#class_cpuparticles3d_constant_emission_shape_directed_points).

 **Note:** [`emission_colors`](#class_cpuparticles3d_property_emission_colors) multiplies the particle mesh's vertex colors. To have a visible effect on a [`BaseMaterial3D`](class_basematerial3d.md), [`BaseMaterial3D.vertex_color_use_as_albedo`](#class_basematerial3d_property_vertex_color_use_as_albedo) *must* be `true`. For a [`ShaderMaterial`](class_shadermaterial.md), `ALBEDO *= COLOR.rgb;` must be inserted in the shader's `fragment()` function. Otherwise, [`emission_colors`](#class_cpuparticles3d_property_emission_colors) will have no visible effect.

**Note:** The returned array is *copied* and any changes to it will not update the original property value. See [`PackedColorArray`](class_packedcolorarray.md) for more details.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_cpuparticles3d_property_emission_normals"></div>

[`PackedVector3Array`](class_packedvector3array.md) **emission_normals** <div id="class_cpuparticles3d_property_emission_normals"></div>

- `void` **set_emission_normals** ( value: [`PackedVector3Array`](class_packedvector3array.md) )
- [`PackedVector3Array`](class_packedvector3array.md) **get_emission_normals** ( )

Sets the direction the particles will be emitted in when using [`EMISSION_SHAPE_DIRECTED_POINTS`](#class_cpuparticles3d_constant_emission_shape_directed_points).

**Note:** The returned array is *copied* and any changes to it will not update the original property value. See [`PackedVector3Array`](class_packedvector3array.md) for more details.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_cpuparticles3d_property_emission_points"></div>

[`PackedVector3Array`](class_packedvector3array.md) **emission_points** <div id="class_cpuparticles3d_property_emission_points"></div>

- `void` **set_emission_points** ( value: [`PackedVector3Array`](class_packedvector3array.md) )
- [`PackedVector3Array`](class_packedvector3array.md) **get_emission_points** ( )

Sets the initial positions to spawn particles when using [`EMISSION_SHAPE_POINTS`](#class_cpuparticles3d_constant_emission_shape_points) or [`EMISSION_SHAPE_DIRECTED_POINTS`](#class_cpuparticles3d_constant_emission_shape_directed_points).

**Note:** The returned array is *copied* and any changes to it will not update the original property value. See [`PackedVector3Array`](class_packedvector3array.md) for more details.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_cpuparticles3d_property_emission_ring_axis"></div>

[`Vector3`](class_vector3.md) **emission_ring_axis** <div id="class_cpuparticles3d_property_emission_ring_axis"></div>

- `void` **set_emission_ring_axis** ( value: [`Vector3`](class_vector3.md) )
- [`Vector3`](class_vector3.md) **get_emission_ring_axis** ( )

The axis of the ring when using the emitter [`EMISSION_SHAPE_RING`](#class_cpuparticles3d_constant_emission_shape_ring).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_cpuparticles3d_property_emission_ring_height"></div>

[`float`](class_float.md) **emission_ring_height** <div id="class_cpuparticles3d_property_emission_ring_height"></div>

- `void` **set_emission_ring_height** ( value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_emission_ring_height** ( )

The height of the ring when using the emitter [`EMISSION_SHAPE_RING`](#class_cpuparticles3d_constant_emission_shape_ring).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_cpuparticles3d_property_emission_ring_inner_radius"></div>

[`float`](class_float.md) **emission_ring_inner_radius** <div id="class_cpuparticles3d_property_emission_ring_inner_radius"></div>

- `void` **set_emission_ring_inner_radius** ( value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_emission_ring_inner_radius** ( )

The inner radius of the ring when using the emitter [`EMISSION_SHAPE_RING`](#class_cpuparticles3d_constant_emission_shape_ring).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_cpuparticles3d_property_emission_ring_radius"></div>

[`float`](class_float.md) **emission_ring_radius** <div id="class_cpuparticles3d_property_emission_ring_radius"></div>

- `void` **set_emission_ring_radius** ( value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_emission_ring_radius** ( )

The radius of the ring when using the emitter [`EMISSION_SHAPE_RING`](#class_cpuparticles3d_constant_emission_shape_ring).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_cpuparticles3d_property_emission_shape"></div>

[EmissionShape](#enum_cpuparticles3d_emissionshape) **emission_shape** = ``0`` <div id="class_cpuparticles3d_property_emission_shape"></div>

- `void` **set_emission_shape** ( value: [EmissionShape](#enum_cpuparticles3d_emissionshape) )
- [EmissionShape](#enum_cpuparticles3d_emissionshape) **get_emission_shape** ( )

Particles will be emitted inside this region. See [EmissionShape](#enum_cpuparticles3d_emissionshape) for possible values.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_cpuparticles3d_property_emission_sphere_radius"></div>

[`float`](class_float.md) **emission_sphere_radius** <div id="class_cpuparticles3d_property_emission_sphere_radius"></div>

- `void` **set_emission_sphere_radius** ( value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_emission_sphere_radius** ( )

The sphere's radius if [EmissionShape](#enum_cpuparticles3d_emissionshape) is set to [`EMISSION_SHAPE_SPHERE`](#class_cpuparticles3d_constant_emission_shape_sphere).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_cpuparticles3d_property_emitting"></div>

[`bool`](class_bool.md) **emitting** = ``true`` <div id="class_cpuparticles3d_property_emitting"></div>

- `void` **set_emitting** ( value: [`bool`](class_bool.md) )
- [`bool`](class_bool.md) **is_emitting** ( )

If `true`, particles are being emitted. [`emitting`](#class_cpuparticles3d_property_emitting) can be used to start and stop particles from emitting. However, if [`one_shot`](#class_cpuparticles3d_property_one_shot) is `true` setting [`emitting`](#class_cpuparticles3d_property_emitting) to `true` will not restart the emission cycle until after all active particles finish processing. You can use the [`finished`](#class_cpuparticles3d_signal_finished) signal to be notified once all active particles finish processing.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_cpuparticles3d_property_explosiveness"></div>

[`float`](class_float.md) **explosiveness** = ``0.0`` <div id="class_cpuparticles3d_property_explosiveness"></div>

- `void` **set_explosiveness_ratio** ( value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_explosiveness_ratio** ( )

How rapidly particles in an emission cycle are emitted. If greater than `0`, there will be a gap in emissions before the next cycle begins.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_cpuparticles3d_property_fixed_fps"></div>

[`int`](class_int.md) **fixed_fps** = ``0`` <div id="class_cpuparticles3d_property_fixed_fps"></div>

- `void` **set_fixed_fps** ( value: [`int`](class_int.md) )
- [`int`](class_int.md) **get_fixed_fps** ( )

The particle system's frame rate is fixed to a value. For example, changing the value to 2 will make the particles render at 2 frames per second. Note this does not slow down the particle system itself.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_cpuparticles3d_property_flatness"></div>

[`float`](class_float.md) **flatness** = ``0.0`` <div id="class_cpuparticles3d_property_flatness"></div>

- `void` **set_flatness** ( value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_flatness** ( )

Amount of [`spread`](#class_cpuparticles3d_property_spread) in Y/Z plane. A value of `1` restricts particles to X/Z plane.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_cpuparticles3d_property_fract_delta"></div>

[`bool`](class_bool.md) **fract_delta** = ``true`` <div id="class_cpuparticles3d_property_fract_delta"></div>

- `void` **set_fractional_delta** ( value: [`bool`](class_bool.md) )
- [`bool`](class_bool.md) **get_fractional_delta** ( )

If `true`, results in fractional delta calculation which has a smoother particles display effect.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_cpuparticles3d_property_gravity"></div>

[`Vector3`](class_vector3.md) **gravity** = ``Vector3(0, -9.8, 0)`` <div id="class_cpuparticles3d_property_gravity"></div>

- `void` **set_gravity** ( value: [`Vector3`](class_vector3.md) )
- [`Vector3`](class_vector3.md) **get_gravity** ( )

Gravity applied to every particle.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_cpuparticles3d_property_hue_variation_curve"></div>

[`Curve`](class_curve.md) **hue_variation_curve** <div id="class_cpuparticles3d_property_hue_variation_curve"></div>

- `void` **set_param_curve** ( param: [Parameter](#enum_cpuparticles3d_parameter), curve: [`Curve`](class_curve.md) )
- [`Curve`](class_curve.md) **get_param_curve** ( param: [Parameter](#enum_cpuparticles3d_parameter) ) const[^const]

Each particle's hue will vary along this [`Curve`](class_curve.md).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_cpuparticles3d_property_hue_variation_max"></div>

[`float`](class_float.md) **hue_variation_max** = ``0.0`` <div id="class_cpuparticles3d_property_hue_variation_max"></div>

- `void` **set_param_max** ( param: [Parameter](#enum_cpuparticles3d_parameter), value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_param_max** ( param: [Parameter](#enum_cpuparticles3d_parameter) ) const[^const]

Maximum hue variation.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_cpuparticles3d_property_hue_variation_min"></div>

[`float`](class_float.md) **hue_variation_min** = ``0.0`` <div id="class_cpuparticles3d_property_hue_variation_min"></div>

- `void` **set_param_min** ( param: [Parameter](#enum_cpuparticles3d_parameter), value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_param_min** ( param: [Parameter](#enum_cpuparticles3d_parameter) ) const[^const]

Minimum hue variation.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_cpuparticles3d_property_initial_velocity_max"></div>

[`float`](class_float.md) **initial_velocity_max** = ``0.0`` <div id="class_cpuparticles3d_property_initial_velocity_max"></div>

- `void` **set_param_max** ( param: [Parameter](#enum_cpuparticles3d_parameter), value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_param_max** ( param: [Parameter](#enum_cpuparticles3d_parameter) ) const[^const]

Maximum value of the initial velocity.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_cpuparticles3d_property_initial_velocity_min"></div>

[`float`](class_float.md) **initial_velocity_min** = ``0.0`` <div id="class_cpuparticles3d_property_initial_velocity_min"></div>

- `void` **set_param_min** ( param: [Parameter](#enum_cpuparticles3d_parameter), value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_param_min** ( param: [Parameter](#enum_cpuparticles3d_parameter) ) const[^const]

Minimum value of the initial velocity.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_cpuparticles3d_property_lifetime"></div>

[`float`](class_float.md) **lifetime** = ``1.0`` <div id="class_cpuparticles3d_property_lifetime"></div>

- `void` **set_lifetime** ( value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_lifetime** ( )

Amount of time each particle will exist.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_cpuparticles3d_property_lifetime_randomness"></div>

[`float`](class_float.md) **lifetime_randomness** = ``0.0`` <div id="class_cpuparticles3d_property_lifetime_randomness"></div>

- `void` **set_lifetime_randomness** ( value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_lifetime_randomness** ( )

Particle lifetime randomness ratio.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_cpuparticles3d_property_linear_accel_curve"></div>

[`Curve`](class_curve.md) **linear_accel_curve** <div id="class_cpuparticles3d_property_linear_accel_curve"></div>

- `void` **set_param_curve** ( param: [Parameter](#enum_cpuparticles3d_parameter), curve: [`Curve`](class_curve.md) )
- [`Curve`](class_curve.md) **get_param_curve** ( param: [Parameter](#enum_cpuparticles3d_parameter) ) const[^const]

Each particle's linear acceleration will vary along this [`Curve`](class_curve.md).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_cpuparticles3d_property_linear_accel_max"></div>

[`float`](class_float.md) **linear_accel_max** = ``0.0`` <div id="class_cpuparticles3d_property_linear_accel_max"></div>

- `void` **set_param_max** ( param: [Parameter](#enum_cpuparticles3d_parameter), value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_param_max** ( param: [Parameter](#enum_cpuparticles3d_parameter) ) const[^const]

Maximum linear acceleration.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_cpuparticles3d_property_linear_accel_min"></div>

[`float`](class_float.md) **linear_accel_min** = ``0.0`` <div id="class_cpuparticles3d_property_linear_accel_min"></div>

- `void` **set_param_min** ( param: [Parameter](#enum_cpuparticles3d_parameter), value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_param_min** ( param: [Parameter](#enum_cpuparticles3d_parameter) ) const[^const]

Minimum linear acceleration.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_cpuparticles3d_property_local_coords"></div>

[`bool`](class_bool.md) **local_coords** = ``false`` <div id="class_cpuparticles3d_property_local_coords"></div>

- `void` **set_use_local_coordinates** ( value: [`bool`](class_bool.md) )
- [`bool`](class_bool.md) **get_use_local_coordinates** ( )

If `true`, particles use the parent node's coordinate space (known as local coordinates). This will cause particles to move and rotate along the **CPUParticles3D** node (and its parents) when it is moved or rotated. If `false`, particles use global coordinates; they will not move or rotate along the **CPUParticles3D** node (and its parents) when it is moved or rotated.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_cpuparticles3d_property_mesh"></div>

[`Mesh`](class_mesh.md) **mesh** <div id="class_cpuparticles3d_property_mesh"></div>

- `void` **set_mesh** ( value: [`Mesh`](class_mesh.md) )
- [`Mesh`](class_mesh.md) **get_mesh** ( )

The [`Mesh`](class_mesh.md) used for each particle. If `null`, particles will be spheres.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_cpuparticles3d_property_one_shot"></div>

[`bool`](class_bool.md) **one_shot** = ``false`` <div id="class_cpuparticles3d_property_one_shot"></div>

- `void` **set_one_shot** ( value: [`bool`](class_bool.md) )
- [`bool`](class_bool.md) **get_one_shot** ( )

If `true`, only one emission cycle occurs. If set `true` during a cycle, emission will stop at the cycle's end.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_cpuparticles3d_property_orbit_velocity_curve"></div>

[`Curve`](class_curve.md) **orbit_velocity_curve** <div id="class_cpuparticles3d_property_orbit_velocity_curve"></div>

- `void` **set_param_curve** ( param: [Parameter](#enum_cpuparticles3d_parameter), curve: [`Curve`](class_curve.md) )
- [`Curve`](class_curve.md) **get_param_curve** ( param: [Parameter](#enum_cpuparticles3d_parameter) ) const[^const]

Each particle's orbital velocity will vary along this [`Curve`](class_curve.md).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_cpuparticles3d_property_orbit_velocity_max"></div>

[`float`](class_float.md) **orbit_velocity_max** <div id="class_cpuparticles3d_property_orbit_velocity_max"></div>

- `void` **set_param_max** ( param: [Parameter](#enum_cpuparticles3d_parameter), value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_param_max** ( param: [Parameter](#enum_cpuparticles3d_parameter) ) const[^const]

Maximum orbit velocity.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_cpuparticles3d_property_orbit_velocity_min"></div>

[`float`](class_float.md) **orbit_velocity_min** <div id="class_cpuparticles3d_property_orbit_velocity_min"></div>

- `void` **set_param_min** ( param: [Parameter](#enum_cpuparticles3d_parameter), value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_param_min** ( param: [Parameter](#enum_cpuparticles3d_parameter) ) const[^const]

Minimum orbit velocity.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_cpuparticles3d_property_particle_flag_align_y"></div>

[`bool`](class_bool.md) **particle_flag_align_y** = ``false`` <div id="class_cpuparticles3d_property_particle_flag_align_y"></div>

- `void` **set_particle_flag** ( particle_flag: [ParticleFlags](#enum_cpuparticles3d_particleflags), enable: [`bool`](class_bool.md) )
- [`bool`](class_bool.md) **get_particle_flag** ( particle_flag: [ParticleFlags](#enum_cpuparticles3d_particleflags) ) const[^const]

Align Y axis of particle with the direction of its velocity.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_cpuparticles3d_property_particle_flag_disable_z"></div>

[`bool`](class_bool.md) **particle_flag_disable_z** = ``false`` <div id="class_cpuparticles3d_property_particle_flag_disable_z"></div>

- `void` **set_particle_flag** ( particle_flag: [ParticleFlags](#enum_cpuparticles3d_particleflags), enable: [`bool`](class_bool.md) )
- [`bool`](class_bool.md) **get_particle_flag** ( particle_flag: [ParticleFlags](#enum_cpuparticles3d_particleflags) ) const[^const]

If `true`, particles will not move on the Z axis.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_cpuparticles3d_property_particle_flag_rotate_y"></div>

[`bool`](class_bool.md) **particle_flag_rotate_y** = ``false`` <div id="class_cpuparticles3d_property_particle_flag_rotate_y"></div>

- `void` **set_particle_flag** ( particle_flag: [ParticleFlags](#enum_cpuparticles3d_particleflags), enable: [`bool`](class_bool.md) )
- [`bool`](class_bool.md) **get_particle_flag** ( particle_flag: [ParticleFlags](#enum_cpuparticles3d_particleflags) ) const[^const]

If `true`, particles rotate around Y axis by [`angle_min`](#class_cpuparticles3d_property_angle_min).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_cpuparticles3d_property_preprocess"></div>

[`float`](class_float.md) **preprocess** = ``0.0`` <div id="class_cpuparticles3d_property_preprocess"></div>

- `void` **set_pre_process_time** ( value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_pre_process_time** ( )

Particle system starts as if it had already run for this many seconds.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_cpuparticles3d_property_radial_accel_curve"></div>

[`Curve`](class_curve.md) **radial_accel_curve** <div id="class_cpuparticles3d_property_radial_accel_curve"></div>

- `void` **set_param_curve** ( param: [Parameter](#enum_cpuparticles3d_parameter), curve: [`Curve`](class_curve.md) )
- [`Curve`](class_curve.md) **get_param_curve** ( param: [Parameter](#enum_cpuparticles3d_parameter) ) const[^const]

Each particle's radial acceleration will vary along this [`Curve`](class_curve.md).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_cpuparticles3d_property_radial_accel_max"></div>

[`float`](class_float.md) **radial_accel_max** = ``0.0`` <div id="class_cpuparticles3d_property_radial_accel_max"></div>

- `void` **set_param_max** ( param: [Parameter](#enum_cpuparticles3d_parameter), value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_param_max** ( param: [Parameter](#enum_cpuparticles3d_parameter) ) const[^const]

Maximum radial acceleration.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_cpuparticles3d_property_radial_accel_min"></div>

[`float`](class_float.md) **radial_accel_min** = ``0.0`` <div id="class_cpuparticles3d_property_radial_accel_min"></div>

- `void` **set_param_min** ( param: [Parameter](#enum_cpuparticles3d_parameter), value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_param_min** ( param: [Parameter](#enum_cpuparticles3d_parameter) ) const[^const]

Minimum radial acceleration.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_cpuparticles3d_property_randomness"></div>

[`float`](class_float.md) **randomness** = ``0.0`` <div id="class_cpuparticles3d_property_randomness"></div>

- `void` **set_randomness_ratio** ( value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_randomness_ratio** ( )

Emission lifetime randomness ratio.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_cpuparticles3d_property_scale_amount_curve"></div>

[`Curve`](class_curve.md) **scale_amount_curve** <div id="class_cpuparticles3d_property_scale_amount_curve"></div>

- `void` **set_param_curve** ( param: [Parameter](#enum_cpuparticles3d_parameter), curve: [`Curve`](class_curve.md) )
- [`Curve`](class_curve.md) **get_param_curve** ( param: [Parameter](#enum_cpuparticles3d_parameter) ) const[^const]

Each particle's scale will vary along this [`Curve`](class_curve.md).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_cpuparticles3d_property_scale_amount_max"></div>

[`float`](class_float.md) **scale_amount_max** = ``1.0`` <div id="class_cpuparticles3d_property_scale_amount_max"></div>

- `void` **set_param_max** ( param: [Parameter](#enum_cpuparticles3d_parameter), value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_param_max** ( param: [Parameter](#enum_cpuparticles3d_parameter) ) const[^const]

Maximum scale.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_cpuparticles3d_property_scale_amount_min"></div>

[`float`](class_float.md) **scale_amount_min** = ``1.0`` <div id="class_cpuparticles3d_property_scale_amount_min"></div>

- `void` **set_param_min** ( param: [Parameter](#enum_cpuparticles3d_parameter), value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_param_min** ( param: [Parameter](#enum_cpuparticles3d_parameter) ) const[^const]

Minimum scale.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_cpuparticles3d_property_scale_curve_x"></div>

[`Curve`](class_curve.md) **scale_curve_x** <div id="class_cpuparticles3d_property_scale_curve_x"></div>

- `void` **set_scale_curve_x** ( value: [`Curve`](class_curve.md) )
- [`Curve`](class_curve.md) **get_scale_curve_x** ( )

Curve for the scale over life, along the x axis.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_cpuparticles3d_property_scale_curve_y"></div>

[`Curve`](class_curve.md) **scale_curve_y** <div id="class_cpuparticles3d_property_scale_curve_y"></div>

- `void` **set_scale_curve_y** ( value: [`Curve`](class_curve.md) )
- [`Curve`](class_curve.md) **get_scale_curve_y** ( )

Curve for the scale over life, along the y axis.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_cpuparticles3d_property_scale_curve_z"></div>

[`Curve`](class_curve.md) **scale_curve_z** <div id="class_cpuparticles3d_property_scale_curve_z"></div>

- `void` **set_scale_curve_z** ( value: [`Curve`](class_curve.md) )
- [`Curve`](class_curve.md) **get_scale_curve_z** ( )

Curve for the scale over life, along the z axis.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_cpuparticles3d_property_speed_scale"></div>

[`float`](class_float.md) **speed_scale** = ``1.0`` <div id="class_cpuparticles3d_property_speed_scale"></div>

- `void` **set_speed_scale** ( value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_speed_scale** ( )

Particle system's running speed scaling ratio. A value of `0` can be used to pause the particles.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_cpuparticles3d_property_split_scale"></div>

[`bool`](class_bool.md) **split_scale** = ``false`` <div id="class_cpuparticles3d_property_split_scale"></div>

- `void` **set_split_scale** ( value: [`bool`](class_bool.md) )
- [`bool`](class_bool.md) **get_split_scale** ( )

If set to `true`, three different scale curves can be specified, one per scale axis.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_cpuparticles3d_property_spread"></div>

[`float`](class_float.md) **spread** = ``45.0`` <div id="class_cpuparticles3d_property_spread"></div>

- `void` **set_spread** ( value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_spread** ( )

Each particle's initial direction range from `+spread` to `-spread` degrees. Applied to X/Z plane and Y/Z planes.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_cpuparticles3d_property_tangential_accel_curve"></div>

[`Curve`](class_curve.md) **tangential_accel_curve** <div id="class_cpuparticles3d_property_tangential_accel_curve"></div>

- `void` **set_param_curve** ( param: [Parameter](#enum_cpuparticles3d_parameter), curve: [`Curve`](class_curve.md) )
- [`Curve`](class_curve.md) **get_param_curve** ( param: [Parameter](#enum_cpuparticles3d_parameter) ) const[^const]

Each particle's tangential acceleration will vary along this [`Curve`](class_curve.md).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_cpuparticles3d_property_tangential_accel_max"></div>

[`float`](class_float.md) **tangential_accel_max** = ``0.0`` <div id="class_cpuparticles3d_property_tangential_accel_max"></div>

- `void` **set_param_max** ( param: [Parameter](#enum_cpuparticles3d_parameter), value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_param_max** ( param: [Parameter](#enum_cpuparticles3d_parameter) ) const[^const]

Maximum tangent acceleration.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_cpuparticles3d_property_tangential_accel_min"></div>

[`float`](class_float.md) **tangential_accel_min** = ``0.0`` <div id="class_cpuparticles3d_property_tangential_accel_min"></div>

- `void` **set_param_min** ( param: [Parameter](#enum_cpuparticles3d_parameter), value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_param_min** ( param: [Parameter](#enum_cpuparticles3d_parameter) ) const[^const]

Minimum tangent acceleration.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_cpuparticles3d_property_visibility_aabb"></div>

[`AABB`](class_aabb.md) **visibility_aabb** = ``AABB(0, 0, 0, 0, 0, 0)`` <div id="class_cpuparticles3d_property_visibility_aabb"></div>

- `void` **set_visibility_aabb** ( value: [`AABB`](class_aabb.md) )
- [`AABB`](class_aabb.md) **get_visibility_aabb** ( )

The [`AABB`](class_aabb.md) that determines the node's region which needs to be visible on screen for the particle system to be active.

Grow the box if particles suddenly appear/disappear when the node enters/exits the screen. The [`AABB`](class_aabb.md) can be grown via code or with the **Particles → Generate AABB** editor tool.

<!-- rst-class:: classref-section-separator -->

---

## 方法说明

<div id="_class_cpuparticles3d_method_convert_from_particles"></div>

`void` **convert_from_particles** ( particles: [`Node`](class_node.md) )<div id="class_cpuparticles3d_method_convert_from_particles"></div>

Sets this node's properties to match a given [`GPUParticles3D`](class_gpuparticles3d.md) node with an assigned [`ParticleProcessMaterial`](class_particleprocessmaterial.md).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_cpuparticles3d_method_get_param_curve"></div>

[`Curve`](class_curve.md) **get_param_curve** ( param: [Parameter](#enum_cpuparticles3d_parameter) ) const[^const]<div id="class_cpuparticles3d_method_get_param_curve"></div>

Returns the [`Curve`](class_curve.md) of the parameter specified by [Parameter](#enum_cpuparticles3d_parameter).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_cpuparticles3d_method_get_param_max"></div>

[`float`](class_float.md) **get_param_max** ( param: [Parameter](#enum_cpuparticles3d_parameter) ) const[^const]<div id="class_cpuparticles3d_method_get_param_max"></div>

Returns the maximum value range for the given parameter.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_cpuparticles3d_method_get_param_min"></div>

[`float`](class_float.md) **get_param_min** ( param: [Parameter](#enum_cpuparticles3d_parameter) ) const[^const]<div id="class_cpuparticles3d_method_get_param_min"></div>

Returns the minimum value range for the given parameter.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_cpuparticles3d_method_get_particle_flag"></div>

[`bool`](class_bool.md) **get_particle_flag** ( particle_flag: [ParticleFlags](#enum_cpuparticles3d_particleflags) ) const[^const]<div id="class_cpuparticles3d_method_get_particle_flag"></div>

Returns the enabled state of the given particle flag (see [ParticleFlags](#enum_cpuparticles3d_particleflags) for options).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_cpuparticles3d_method_restart"></div>

`void` **restart** ( )<div id="class_cpuparticles3d_method_restart"></div>

Restarts the particle emitter.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_cpuparticles3d_method_set_param_curve"></div>

`void` **set_param_curve** ( param: [Parameter](#enum_cpuparticles3d_parameter), curve: [`Curve`](class_curve.md) )<div id="class_cpuparticles3d_method_set_param_curve"></div>

Sets the [`Curve`](class_curve.md) of the parameter specified by [Parameter](#enum_cpuparticles3d_parameter).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_cpuparticles3d_method_set_param_max"></div>

`void` **set_param_max** ( param: [Parameter](#enum_cpuparticles3d_parameter), value: [`float`](class_float.md) )<div id="class_cpuparticles3d_method_set_param_max"></div>

Sets the maximum value for the given parameter.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_cpuparticles3d_method_set_param_min"></div>

`void` **set_param_min** ( param: [Parameter](#enum_cpuparticles3d_parameter), value: [`float`](class_float.md) )<div id="class_cpuparticles3d_method_set_param_min"></div>

Sets the minimum value for the given parameter.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_cpuparticles3d_method_set_particle_flag"></div>

`void` **set_particle_flag** ( particle_flag: [ParticleFlags](#enum_cpuparticles3d_particleflags), enable: [`bool`](class_bool.md) )<div id="class_cpuparticles3d_method_set_particle_flag"></div>

Enables or disables the given particle flag (see [ParticleFlags](#enum_cpuparticles3d_particleflags) for options).

[^virtual]: 本方法通常需要用户覆盖才能生效。
[^const]: 本方法无副作用，不会修改该实例的任何成员变量。
[^vararg]: 本方法除了能接受在此处描述的参数外，还能够继续接受任意数量的参数。
[^constructor]: 本方法用于构造某个类型。
[^static]: 调用本方法无需实例，可直接使用类名进行调用。
[^operator]: 本方法描述的是使用本类型作为左操作数的有效运算符。
[^bitfield]: 这个值是由下列位标志构成位掩码的整数。
[^void]: 无返回值。
