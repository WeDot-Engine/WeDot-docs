<!-- ⚠ 请勿编辑本文件 ⚠ -->
<!-- 本文档使用脚本从 WeDot 引擎源码仓库生成。 -->
<!-- 生成脚本：https://github.com/WeDot-Engine/WeDot/tree/master/doc/tools/make_md.py； -->
<!-- 原文件：https://github.com/WeDot-Engine/WeDot/tree/master/doc/classes/ParticleProcessMaterial.xml。 -->

<div id="_class_particleprocessmaterial"></div>

# ParticleProcessMaterial

**继承：** [`Material`](class_material.md) **<** [`Resource`](class_resource.md) **<** [`RefCounted`](class_refcounted.md) **<** [`Object`](class_object.md)

Holds a particle configuration for [`GPUParticles2D`](class_gpuparticles2d.md) or [`GPUParticles3D`](class_gpuparticles3d.md) nodes.

## 描述

**ParticleProcessMaterial** defines particle properties and behavior. It is used in the `process_material` of the [`GPUParticles2D`](class_gpuparticles2d.md) and [`GPUParticles3D`](class_gpuparticles3d.md) nodes. Some of this material's properties are applied to each particle when emitted, while others can have a [`CurveTexture`](class_curvetexture.md) or a [`GradientTexture1D`](class_gradienttexture1d.md) applied to vary numerical or color values over the lifetime of the particle.

## 属性

|||
|:-:|:--|
| [`Texture2D`](class_texture2d.md)                              | [`alpha_curve`](class_particleprocessmaterial.md#class_particleprocessmaterial_property_alpha_curve)                                                 |                         |
| [`Texture2D`](class_texture2d.md)                              | [`angle_curve`](class_particleprocessmaterial.md#class_particleprocessmaterial_property_angle_curve)                                                 |                         |
| [`float`](class_float.md)                                      | [`angle_max`](class_particleprocessmaterial.md#class_particleprocessmaterial_property_angle_max)                                                     | ``0.0``                 |
| [`float`](class_float.md)                                      | [`angle_min`](class_particleprocessmaterial.md#class_particleprocessmaterial_property_angle_min)                                                     | ``0.0``                 |
| [`Texture2D`](class_texture2d.md)                              | [`angular_velocity_curve`](class_particleprocessmaterial.md#class_particleprocessmaterial_property_angular_velocity_curve)                           |                         |
| [`float`](class_float.md)                                      | [`angular_velocity_max`](class_particleprocessmaterial.md#class_particleprocessmaterial_property_angular_velocity_max)                               | ``0.0``                 |
| [`float`](class_float.md)                                      | [`angular_velocity_min`](class_particleprocessmaterial.md#class_particleprocessmaterial_property_angular_velocity_min)                               | ``0.0``                 |
| [`Texture2D`](class_texture2d.md)                              | [`anim_offset_curve`](class_particleprocessmaterial.md#class_particleprocessmaterial_property_anim_offset_curve)                                     |                         |
| [`float`](class_float.md)                                      | [`anim_offset_max`](class_particleprocessmaterial.md#class_particleprocessmaterial_property_anim_offset_max)                                         | ``0.0``                 |
| [`float`](class_float.md)                                      | [`anim_offset_min`](class_particleprocessmaterial.md#class_particleprocessmaterial_property_anim_offset_min)                                         | ``0.0``                 |
| [`Texture2D`](class_texture2d.md)                              | [`anim_speed_curve`](class_particleprocessmaterial.md#class_particleprocessmaterial_property_anim_speed_curve)                                       |                         |
| [`float`](class_float.md)                                      | [`anim_speed_max`](class_particleprocessmaterial.md#class_particleprocessmaterial_property_anim_speed_max)                                           | ``0.0``                 |
| [`float`](class_float.md)                                      | [`anim_speed_min`](class_particleprocessmaterial.md#class_particleprocessmaterial_property_anim_speed_min)                                           | ``0.0``                 |
| [`bool`](class_bool.md)                                        | [`attractor_interaction_enabled`](class_particleprocessmaterial.md#class_particleprocessmaterial_property_attractor_interaction_enabled)             | ``true``                |
| [`float`](class_float.md)                                      | [`collision_bounce`](class_particleprocessmaterial.md#class_particleprocessmaterial_property_collision_bounce)                                       |                         |
| [`float`](class_float.md)                                      | [`collision_friction`](class_particleprocessmaterial.md#class_particleprocessmaterial_property_collision_friction)                                   |                         |
| [CollisionMode](#enum_particleprocessmaterial_collisionmode)   | [`collision_mode`](class_particleprocessmaterial.md#class_particleprocessmaterial_property_collision_mode)                                           | ``0``                   |
| [`bool`](class_bool.md)                                        | [`collision_use_scale`](class_particleprocessmaterial.md#class_particleprocessmaterial_property_collision_use_scale)                                 | ``false``               |
| [`Color`](class_color.md)                                      | [`color`](class_particleprocessmaterial.md#class_particleprocessmaterial_property_color)                                                             | ``Color(1, 1, 1, 1)``   |
| [`Texture2D`](class_texture2d.md)                              | [`color_initial_ramp`](class_particleprocessmaterial.md#class_particleprocessmaterial_property_color_initial_ramp)                                   |                         |
| [`Texture2D`](class_texture2d.md)                              | [`color_ramp`](class_particleprocessmaterial.md#class_particleprocessmaterial_property_color_ramp)                                                   |                         |
| [`Texture2D`](class_texture2d.md)                              | [`damping_curve`](class_particleprocessmaterial.md#class_particleprocessmaterial_property_damping_curve)                                             |                         |
| [`float`](class_float.md)                                      | [`damping_max`](class_particleprocessmaterial.md#class_particleprocessmaterial_property_damping_max)                                                 | ``0.0``                 |
| [`float`](class_float.md)                                      | [`damping_min`](class_particleprocessmaterial.md#class_particleprocessmaterial_property_damping_min)                                                 | ``0.0``                 |
| [`Vector3`](class_vector3.md)                                  | [`direction`](class_particleprocessmaterial.md#class_particleprocessmaterial_property_direction)                                                     | ``Vector3(1, 0, 0)``    |
| [`Texture2D`](class_texture2d.md)                              | [`directional_velocity_curve`](class_particleprocessmaterial.md#class_particleprocessmaterial_property_directional_velocity_curve)                   |                         |
| [`float`](class_float.md)                                      | [`directional_velocity_max`](class_particleprocessmaterial.md#class_particleprocessmaterial_property_directional_velocity_max)                       |                         |
| [`float`](class_float.md)                                      | [`directional_velocity_min`](class_particleprocessmaterial.md#class_particleprocessmaterial_property_directional_velocity_min)                       |                         |
| [`Vector3`](class_vector3.md)                                  | [`emission_box_extents`](class_particleprocessmaterial.md#class_particleprocessmaterial_property_emission_box_extents)                               |                         |
| [`Texture2D`](class_texture2d.md)                              | [`emission_color_texture`](class_particleprocessmaterial.md#class_particleprocessmaterial_property_emission_color_texture)                           |                         |
| [`Texture2D`](class_texture2d.md)                              | [`emission_curve`](class_particleprocessmaterial.md#class_particleprocessmaterial_property_emission_curve)                                           |                         |
| [`Texture2D`](class_texture2d.md)                              | [`emission_normal_texture`](class_particleprocessmaterial.md#class_particleprocessmaterial_property_emission_normal_texture)                         |                         |
| [`int`](class_int.md)                                          | [`emission_point_count`](class_particleprocessmaterial.md#class_particleprocessmaterial_property_emission_point_count)                               |                         |
| [`Texture2D`](class_texture2d.md)                              | [`emission_point_texture`](class_particleprocessmaterial.md#class_particleprocessmaterial_property_emission_point_texture)                           |                         |
| [`Vector3`](class_vector3.md)                                  | [`emission_ring_axis`](class_particleprocessmaterial.md#class_particleprocessmaterial_property_emission_ring_axis)                                   |                         |
| [`float`](class_float.md)                                      | [`emission_ring_cone_angle`](class_particleprocessmaterial.md#class_particleprocessmaterial_property_emission_ring_cone_angle)                       |                         |
| [`float`](class_float.md)                                      | [`emission_ring_height`](class_particleprocessmaterial.md#class_particleprocessmaterial_property_emission_ring_height)                               |                         |
| [`float`](class_float.md)                                      | [`emission_ring_inner_radius`](class_particleprocessmaterial.md#class_particleprocessmaterial_property_emission_ring_inner_radius)                   |                         |
| [`float`](class_float.md)                                      | [`emission_ring_radius`](class_particleprocessmaterial.md#class_particleprocessmaterial_property_emission_ring_radius)                               |                         |
| [EmissionShape](#enum_particleprocessmaterial_emissionshape)   | [`emission_shape`](class_particleprocessmaterial.md#class_particleprocessmaterial_property_emission_shape)                                           | ``0``                   |
| [`Vector3`](class_vector3.md)                                  | [`emission_shape_offset`](class_particleprocessmaterial.md#class_particleprocessmaterial_property_emission_shape_offset)                             | ``Vector3(0, 0, 0)``    |
| [`Vector3`](class_vector3.md)                                  | [`emission_shape_scale`](class_particleprocessmaterial.md#class_particleprocessmaterial_property_emission_shape_scale)                               | ``Vector3(1, 1, 1)``    |
| [`float`](class_float.md)                                      | [`emission_sphere_radius`](class_particleprocessmaterial.md#class_particleprocessmaterial_property_emission_sphere_radius)                           |                         |
| [`float`](class_float.md)                                      | [`flatness`](class_particleprocessmaterial.md#class_particleprocessmaterial_property_flatness)                                                       | ``0.0``                 |
| [`Vector3`](class_vector3.md)                                  | [`gravity`](class_particleprocessmaterial.md#class_particleprocessmaterial_property_gravity)                                                         | ``Vector3(0, -9.8, 0)`` |
| [`Texture2D`](class_texture2d.md)                              | [`hue_variation_curve`](class_particleprocessmaterial.md#class_particleprocessmaterial_property_hue_variation_curve)                                 |                         |
| [`float`](class_float.md)                                      | [`hue_variation_max`](class_particleprocessmaterial.md#class_particleprocessmaterial_property_hue_variation_max)                                     | ``0.0``                 |
| [`float`](class_float.md)                                      | [`hue_variation_min`](class_particleprocessmaterial.md#class_particleprocessmaterial_property_hue_variation_min)                                     | ``0.0``                 |
| [`float`](class_float.md)                                      | [`inherit_velocity_ratio`](class_particleprocessmaterial.md#class_particleprocessmaterial_property_inherit_velocity_ratio)                           | ``0.0``                 |
| [`float`](class_float.md)                                      | [`initial_velocity_max`](class_particleprocessmaterial.md#class_particleprocessmaterial_property_initial_velocity_max)                               | ``0.0``                 |
| [`float`](class_float.md)                                      | [`initial_velocity_min`](class_particleprocessmaterial.md#class_particleprocessmaterial_property_initial_velocity_min)                               | ``0.0``                 |
| [`float`](class_float.md)                                      | [`lifetime_randomness`](class_particleprocessmaterial.md#class_particleprocessmaterial_property_lifetime_randomness)                                 | ``0.0``                 |
| [`Texture2D`](class_texture2d.md)                              | [`linear_accel_curve`](class_particleprocessmaterial.md#class_particleprocessmaterial_property_linear_accel_curve)                                   |                         |
| [`float`](class_float.md)                                      | [`linear_accel_max`](class_particleprocessmaterial.md#class_particleprocessmaterial_property_linear_accel_max)                                       | ``0.0``                 |
| [`float`](class_float.md)                                      | [`linear_accel_min`](class_particleprocessmaterial.md#class_particleprocessmaterial_property_linear_accel_min)                                       | ``0.0``                 |
| [`Texture2D`](class_texture2d.md)                              | [`orbit_velocity_curve`](class_particleprocessmaterial.md#class_particleprocessmaterial_property_orbit_velocity_curve)                               |                         |
| [`float`](class_float.md)                                      | [`orbit_velocity_max`](class_particleprocessmaterial.md#class_particleprocessmaterial_property_orbit_velocity_max)                                   | ``0.0``                 |
| [`float`](class_float.md)                                      | [`orbit_velocity_min`](class_particleprocessmaterial.md#class_particleprocessmaterial_property_orbit_velocity_min)                                   | ``0.0``                 |
| [`bool`](class_bool.md)                                        | [`particle_flag_align_y`](class_particleprocessmaterial.md#class_particleprocessmaterial_property_particle_flag_align_y)                             | ``false``               |
| [`bool`](class_bool.md)                                        | [`particle_flag_damping_as_friction`](class_particleprocessmaterial.md#class_particleprocessmaterial_property_particle_flag_damping_as_friction)     | ``false``               |
| [`bool`](class_bool.md)                                        | [`particle_flag_disable_z`](class_particleprocessmaterial.md#class_particleprocessmaterial_property_particle_flag_disable_z)                         | ``false``               |
| [`bool`](class_bool.md)                                        | [`particle_flag_rotate_y`](class_particleprocessmaterial.md#class_particleprocessmaterial_property_particle_flag_rotate_y)                           | ``false``               |
| [`Texture2D`](class_texture2d.md)                              | [`radial_accel_curve`](class_particleprocessmaterial.md#class_particleprocessmaterial_property_radial_accel_curve)                                   |                         |
| [`float`](class_float.md)                                      | [`radial_accel_max`](class_particleprocessmaterial.md#class_particleprocessmaterial_property_radial_accel_max)                                       | ``0.0``                 |
| [`float`](class_float.md)                                      | [`radial_accel_min`](class_particleprocessmaterial.md#class_particleprocessmaterial_property_radial_accel_min)                                       | ``0.0``                 |
| [`Texture2D`](class_texture2d.md)                              | [`radial_velocity_curve`](class_particleprocessmaterial.md#class_particleprocessmaterial_property_radial_velocity_curve)                             |                         |
| [`float`](class_float.md)                                      | [`radial_velocity_max`](class_particleprocessmaterial.md#class_particleprocessmaterial_property_radial_velocity_max)                                 | ``0.0``                 |
| [`float`](class_float.md)                                      | [`radial_velocity_min`](class_particleprocessmaterial.md#class_particleprocessmaterial_property_radial_velocity_min)                                 | ``0.0``                 |
| [`Texture2D`](class_texture2d.md)                              | [`scale_curve`](class_particleprocessmaterial.md#class_particleprocessmaterial_property_scale_curve)                                                 |                         |
| [`float`](class_float.md)                                      | [`scale_max`](class_particleprocessmaterial.md#class_particleprocessmaterial_property_scale_max)                                                     | ``1.0``                 |
| [`float`](class_float.md)                                      | [`scale_min`](class_particleprocessmaterial.md#class_particleprocessmaterial_property_scale_min)                                                     | ``1.0``                 |
| [`Texture2D`](class_texture2d.md)                              | [`scale_over_velocity_curve`](class_particleprocessmaterial.md#class_particleprocessmaterial_property_scale_over_velocity_curve)                     |                         |
| [`float`](class_float.md)                                      | [`scale_over_velocity_max`](class_particleprocessmaterial.md#class_particleprocessmaterial_property_scale_over_velocity_max)                         | ``0.0``                 |
| [`float`](class_float.md)                                      | [`scale_over_velocity_min`](class_particleprocessmaterial.md#class_particleprocessmaterial_property_scale_over_velocity_min)                         | ``0.0``                 |
| [`float`](class_float.md)                                      | [`spread`](class_particleprocessmaterial.md#class_particleprocessmaterial_property_spread)                                                           | ``45.0``                |
| [`int`](class_int.md)                                          | [`sub_emitter_amount_at_collision`](class_particleprocessmaterial.md#class_particleprocessmaterial_property_sub_emitter_amount_at_collision)         |                         |
| [`int`](class_int.md)                                          | [`sub_emitter_amount_at_end`](class_particleprocessmaterial.md#class_particleprocessmaterial_property_sub_emitter_amount_at_end)                     |                         |
| [`float`](class_float.md)                                      | [`sub_emitter_frequency`](class_particleprocessmaterial.md#class_particleprocessmaterial_property_sub_emitter_frequency)                             |                         |
| [`bool`](class_bool.md)                                        | [`sub_emitter_keep_velocity`](class_particleprocessmaterial.md#class_particleprocessmaterial_property_sub_emitter_keep_velocity)                     | ``false``               |
| [SubEmitterMode](#enum_particleprocessmaterial_subemittermode) | [`sub_emitter_mode`](class_particleprocessmaterial.md#class_particleprocessmaterial_property_sub_emitter_mode)                                       | ``0``                   |
| [`Texture2D`](class_texture2d.md)                              | [`tangential_accel_curve`](class_particleprocessmaterial.md#class_particleprocessmaterial_property_tangential_accel_curve)                           |                         |
| [`float`](class_float.md)                                      | [`tangential_accel_max`](class_particleprocessmaterial.md#class_particleprocessmaterial_property_tangential_accel_max)                               | ``0.0``                 |
| [`float`](class_float.md)                                      | [`tangential_accel_min`](class_particleprocessmaterial.md#class_particleprocessmaterial_property_tangential_accel_min)                               | ``0.0``                 |
| [`bool`](class_bool.md)                                        | [`turbulence_enabled`](class_particleprocessmaterial.md#class_particleprocessmaterial_property_turbulence_enabled)                                   | ``false``               |
| [`float`](class_float.md)                                      | [`turbulence_influence_max`](class_particleprocessmaterial.md#class_particleprocessmaterial_property_turbulence_influence_max)                       | ``0.1``                 |
| [`float`](class_float.md)                                      | [`turbulence_influence_min`](class_particleprocessmaterial.md#class_particleprocessmaterial_property_turbulence_influence_min)                       | ``0.1``                 |
| [`Texture2D`](class_texture2d.md)                              | [`turbulence_influence_over_life`](class_particleprocessmaterial.md#class_particleprocessmaterial_property_turbulence_influence_over_life)           |                         |
| [`float`](class_float.md)                                      | [`turbulence_initial_displacement_max`](class_particleprocessmaterial.md#class_particleprocessmaterial_property_turbulence_initial_displacement_max) | ``0.0``                 |
| [`float`](class_float.md)                                      | [`turbulence_initial_displacement_min`](class_particleprocessmaterial.md#class_particleprocessmaterial_property_turbulence_initial_displacement_min) | ``0.0``                 |
| [`float`](class_float.md)                                      | [`turbulence_noise_scale`](class_particleprocessmaterial.md#class_particleprocessmaterial_property_turbulence_noise_scale)                           | ``9.0``                 |
| [`Vector3`](class_vector3.md)                                  | [`turbulence_noise_speed`](class_particleprocessmaterial.md#class_particleprocessmaterial_property_turbulence_noise_speed)                           | ``Vector3(0, 0, 0)``    |
| [`float`](class_float.md)                                      | [`turbulence_noise_speed_random`](class_particleprocessmaterial.md#class_particleprocessmaterial_property_turbulence_noise_speed_random)             | ``0.2``                 |
| [`float`](class_float.md)                                      | [`turbulence_noise_strength`](class_particleprocessmaterial.md#class_particleprocessmaterial_property_turbulence_noise_strength)                     | ``1.0``                 |
| [`Texture2D`](class_texture2d.md)                              | [`velocity_limit_curve`](class_particleprocessmaterial.md#class_particleprocessmaterial_property_velocity_limit_curve)                               |                         |
| [`Vector3`](class_vector3.md)                                  | [`velocity_pivot`](class_particleprocessmaterial.md#class_particleprocessmaterial_property_velocity_pivot)                                           | ``Vector3(0, 0, 0)``    |

## 方法

|||
|:-:|:--|
| [`Vector2`](class_vector2.md)     | [`get_param`](class_particleprocessmaterial.md#class_particleprocessmaterial_method_get_param) ( param: [Parameter](#enum_particleprocessmaterial_parameter) ) const[^const]                                                    |
| [`float`](class_float.md)         | [`get_param_max`](class_particleprocessmaterial.md#class_particleprocessmaterial_method_get_param_max) ( param: [Parameter](#enum_particleprocessmaterial_parameter) ) const[^const]                                            |
| [`float`](class_float.md)         | [`get_param_min`](class_particleprocessmaterial.md#class_particleprocessmaterial_method_get_param_min) ( param: [Parameter](#enum_particleprocessmaterial_parameter) ) const[^const]                                            |
| [`Texture2D`](class_texture2d.md) | [`get_param_texture`](class_particleprocessmaterial.md#class_particleprocessmaterial_method_get_param_texture) ( param: [Parameter](#enum_particleprocessmaterial_parameter) ) const[^const]                                    |
| [`bool`](class_bool.md)           | [`get_particle_flag`](class_particleprocessmaterial.md#class_particleprocessmaterial_method_get_particle_flag) ( particle_flag: [ParticleFlags](#enum_particleprocessmaterial_particleflags) ) const[^const]                    |
| `void`                            | [`set_param`](class_particleprocessmaterial.md#class_particleprocessmaterial_method_set_param) ( param: [Parameter](#enum_particleprocessmaterial_parameter), value: [`Vector2`](class_vector2.md) )                            |
| `void`                            | [`set_param_max`](class_particleprocessmaterial.md#class_particleprocessmaterial_method_set_param_max) ( param: [Parameter](#enum_particleprocessmaterial_parameter), value: [`float`](class_float.md) )                        |
| `void`                            | [`set_param_min`](class_particleprocessmaterial.md#class_particleprocessmaterial_method_set_param_min) ( param: [Parameter](#enum_particleprocessmaterial_parameter), value: [`float`](class_float.md) )                        |
| `void`                            | [`set_param_texture`](class_particleprocessmaterial.md#class_particleprocessmaterial_method_set_param_texture) ( param: [Parameter](#enum_particleprocessmaterial_parameter), texture: [`Texture2D`](class_texture2d.md) )      |
| `void`                            | [`set_particle_flag`](class_particleprocessmaterial.md#class_particleprocessmaterial_method_set_particle_flag) ( particle_flag: [ParticleFlags](#enum_particleprocessmaterial_particleflags), enable: [`bool`](class_bool.md) ) |

<!-- rst-class:: classref-section-separator -->

---

## 枚举

<div id="_class_enum_particleprocessmaterial_parameter"></div>

enum **Parameter**: <div id="enum_particleprocessmaterial_parameter"></div>

<div id="_class_particleprocessmaterial_constant_param_initial_linear_velocity"></div>

[Parameter](#enum_particleprocessmaterial_parameter) **PARAM_INITIAL_LINEAR_VELOCITY** = ``0``

Use with [`set_param_min`](class_particleprocessmaterial.md#class_particleprocessmaterial_method_set_param_min), [`set_param_max`](class_particleprocessmaterial.md#class_particleprocessmaterial_method_set_param_max), and [`set_param_texture`](class_particleprocessmaterial.md#class_particleprocessmaterial_method_set_param_texture) to set initial velocity properties.

<div id="_class_particleprocessmaterial_constant_param_angular_velocity"></div>

[Parameter](#enum_particleprocessmaterial_parameter) **PARAM_ANGULAR_VELOCITY** = ``1``

Use with [`set_param_min`](class_particleprocessmaterial.md#class_particleprocessmaterial_method_set_param_min), [`set_param_max`](class_particleprocessmaterial.md#class_particleprocessmaterial_method_set_param_max), and [`set_param_texture`](class_particleprocessmaterial.md#class_particleprocessmaterial_method_set_param_texture) to set angular velocity properties.

<div id="_class_particleprocessmaterial_constant_param_orbit_velocity"></div>

[Parameter](#enum_particleprocessmaterial_parameter) **PARAM_ORBIT_VELOCITY** = ``2``

Use with [`set_param_min`](class_particleprocessmaterial.md#class_particleprocessmaterial_method_set_param_min), [`set_param_max`](class_particleprocessmaterial.md#class_particleprocessmaterial_method_set_param_max), and [`set_param_texture`](class_particleprocessmaterial.md#class_particleprocessmaterial_method_set_param_texture) to set orbital velocity properties.

<div id="_class_particleprocessmaterial_constant_param_linear_accel"></div>

[Parameter](#enum_particleprocessmaterial_parameter) **PARAM_LINEAR_ACCEL** = ``3``

Use with [`set_param_min`](class_particleprocessmaterial.md#class_particleprocessmaterial_method_set_param_min), [`set_param_max`](class_particleprocessmaterial.md#class_particleprocessmaterial_method_set_param_max), and [`set_param_texture`](class_particleprocessmaterial.md#class_particleprocessmaterial_method_set_param_texture) to set linear acceleration properties.

<div id="_class_particleprocessmaterial_constant_param_radial_accel"></div>

[Parameter](#enum_particleprocessmaterial_parameter) **PARAM_RADIAL_ACCEL** = ``4``

Use with [`set_param_min`](class_particleprocessmaterial.md#class_particleprocessmaterial_method_set_param_min), [`set_param_max`](class_particleprocessmaterial.md#class_particleprocessmaterial_method_set_param_max), and [`set_param_texture`](class_particleprocessmaterial.md#class_particleprocessmaterial_method_set_param_texture) to set radial acceleration properties.

<div id="_class_particleprocessmaterial_constant_param_tangential_accel"></div>

[Parameter](#enum_particleprocessmaterial_parameter) **PARAM_TANGENTIAL_ACCEL** = ``5``

Use with [`set_param_min`](class_particleprocessmaterial.md#class_particleprocessmaterial_method_set_param_min), [`set_param_max`](class_particleprocessmaterial.md#class_particleprocessmaterial_method_set_param_max), and [`set_param_texture`](class_particleprocessmaterial.md#class_particleprocessmaterial_method_set_param_texture) to set tangential acceleration properties.

<div id="_class_particleprocessmaterial_constant_param_damping"></div>

[Parameter](#enum_particleprocessmaterial_parameter) **PARAM_DAMPING** = ``6``

Use with [`set_param_min`](class_particleprocessmaterial.md#class_particleprocessmaterial_method_set_param_min), [`set_param_max`](class_particleprocessmaterial.md#class_particleprocessmaterial_method_set_param_max), and [`set_param_texture`](class_particleprocessmaterial.md#class_particleprocessmaterial_method_set_param_texture) to set damping properties.

<div id="_class_particleprocessmaterial_constant_param_angle"></div>

[Parameter](#enum_particleprocessmaterial_parameter) **PARAM_ANGLE** = ``7``

Use with [`set_param_min`](class_particleprocessmaterial.md#class_particleprocessmaterial_method_set_param_min), [`set_param_max`](class_particleprocessmaterial.md#class_particleprocessmaterial_method_set_param_max), and [`set_param_texture`](class_particleprocessmaterial.md#class_particleprocessmaterial_method_set_param_texture) to set angle properties.

<div id="_class_particleprocessmaterial_constant_param_scale"></div>

[Parameter](#enum_particleprocessmaterial_parameter) **PARAM_SCALE** = ``8``

Use with [`set_param_min`](class_particleprocessmaterial.md#class_particleprocessmaterial_method_set_param_min), [`set_param_max`](class_particleprocessmaterial.md#class_particleprocessmaterial_method_set_param_max), and [`set_param_texture`](class_particleprocessmaterial.md#class_particleprocessmaterial_method_set_param_texture) to set scale properties.

<div id="_class_particleprocessmaterial_constant_param_hue_variation"></div>

[Parameter](#enum_particleprocessmaterial_parameter) **PARAM_HUE_VARIATION** = ``9``

Use with [`set_param_min`](class_particleprocessmaterial.md#class_particleprocessmaterial_method_set_param_min), [`set_param_max`](class_particleprocessmaterial.md#class_particleprocessmaterial_method_set_param_max), and [`set_param_texture`](class_particleprocessmaterial.md#class_particleprocessmaterial_method_set_param_texture) to set hue variation properties.

<div id="_class_particleprocessmaterial_constant_param_anim_speed"></div>

[Parameter](#enum_particleprocessmaterial_parameter) **PARAM_ANIM_SPEED** = ``10``

Use with [`set_param_min`](class_particleprocessmaterial.md#class_particleprocessmaterial_method_set_param_min), [`set_param_max`](class_particleprocessmaterial.md#class_particleprocessmaterial_method_set_param_max), and [`set_param_texture`](class_particleprocessmaterial.md#class_particleprocessmaterial_method_set_param_texture) to set animation speed properties.

<div id="_class_particleprocessmaterial_constant_param_anim_offset"></div>

[Parameter](#enum_particleprocessmaterial_parameter) **PARAM_ANIM_OFFSET** = ``11``

Use with [`set_param_min`](class_particleprocessmaterial.md#class_particleprocessmaterial_method_set_param_min), [`set_param_max`](class_particleprocessmaterial.md#class_particleprocessmaterial_method_set_param_max), and [`set_param_texture`](class_particleprocessmaterial.md#class_particleprocessmaterial_method_set_param_texture) to set animation offset properties.

<div id="_class_particleprocessmaterial_constant_param_radial_velocity"></div>

[Parameter](#enum_particleprocessmaterial_parameter) **PARAM_RADIAL_VELOCITY** = ``15``

Use with [`set_param_min`](class_particleprocessmaterial.md#class_particleprocessmaterial_method_set_param_min), [`set_param_max`](class_particleprocessmaterial.md#class_particleprocessmaterial_method_set_param_max), and [`set_param_texture`](class_particleprocessmaterial.md#class_particleprocessmaterial_method_set_param_texture) to set radial velocity properties.

<div id="_class_particleprocessmaterial_constant_param_directional_velocity"></div>

[Parameter](#enum_particleprocessmaterial_parameter) **PARAM_DIRECTIONAL_VELOCITY** = ``16``

Use with [`set_param_min`](class_particleprocessmaterial.md#class_particleprocessmaterial_method_set_param_min), [`set_param_max`](class_particleprocessmaterial.md#class_particleprocessmaterial_method_set_param_max), and [`set_param_texture`](class_particleprocessmaterial.md#class_particleprocessmaterial_method_set_param_texture) to set directional velocity properties.

<div id="_class_particleprocessmaterial_constant_param_scale_over_velocity"></div>

[Parameter](#enum_particleprocessmaterial_parameter) **PARAM_SCALE_OVER_VELOCITY** = ``17``

Use with [`set_param_min`](class_particleprocessmaterial.md#class_particleprocessmaterial_method_set_param_min), [`set_param_max`](class_particleprocessmaterial.md#class_particleprocessmaterial_method_set_param_max), and [`set_param_texture`](class_particleprocessmaterial.md#class_particleprocessmaterial_method_set_param_texture) to set scale over velocity properties.

<div id="_class_particleprocessmaterial_constant_param_max"></div>

[Parameter](#enum_particleprocessmaterial_parameter) **PARAM_MAX** = ``18``

Represents the size of the [Parameter](#enum_particleprocessmaterial_parameter) enum.

<div id="_class_particleprocessmaterial_constant_param_turb_vel_influence"></div>

[Parameter](#enum_particleprocessmaterial_parameter) **PARAM_TURB_VEL_INFLUENCE** = ``13``

Use with [`set_param_min`](class_particleprocessmaterial.md#class_particleprocessmaterial_method_set_param_min) and [`set_param_max`](class_particleprocessmaterial.md#class_particleprocessmaterial_method_set_param_max) to set the turbulence minimum und maximum influence on each particles velocity.

<div id="_class_particleprocessmaterial_constant_param_turb_init_displacement"></div>

[Parameter](#enum_particleprocessmaterial_parameter) **PARAM_TURB_INIT_DISPLACEMENT** = ``14``

Use with [`set_param_min`](class_particleprocessmaterial.md#class_particleprocessmaterial_method_set_param_min) and [`set_param_max`](class_particleprocessmaterial.md#class_particleprocessmaterial_method_set_param_max) to set the turbulence minimum and maximum displacement of the particles spawn position.

<div id="_class_particleprocessmaterial_constant_param_turb_influence_over_life"></div>

[Parameter](#enum_particleprocessmaterial_parameter) **PARAM_TURB_INFLUENCE_OVER_LIFE** = ``12``

Use with [`set_param_texture`](class_particleprocessmaterial.md#class_particleprocessmaterial_method_set_param_texture) to set the turbulence influence over the particles life time.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_enum_particleprocessmaterial_particleflags"></div>

enum **ParticleFlags**: <div id="enum_particleprocessmaterial_particleflags"></div>

<div id="_class_particleprocessmaterial_constant_particle_flag_align_y_to_velocity"></div>

[ParticleFlags](#enum_particleprocessmaterial_particleflags) **PARTICLE_FLAG_ALIGN_Y_TO_VELOCITY** = ``0``

Use with [`set_particle_flag`](class_particleprocessmaterial.md#class_particleprocessmaterial_method_set_particle_flag) to set [`particle_flag_align_y`](class_particleprocessmaterial.md#class_particleprocessmaterial_property_particle_flag_align_y).

<div id="_class_particleprocessmaterial_constant_particle_flag_rotate_y"></div>

[ParticleFlags](#enum_particleprocessmaterial_particleflags) **PARTICLE_FLAG_ROTATE_Y** = ``1``

Use with [`set_particle_flag`](class_particleprocessmaterial.md#class_particleprocessmaterial_method_set_particle_flag) to set [`particle_flag_rotate_y`](class_particleprocessmaterial.md#class_particleprocessmaterial_property_particle_flag_rotate_y).

<div id="_class_particleprocessmaterial_constant_particle_flag_disable_z"></div>

[ParticleFlags](#enum_particleprocessmaterial_particleflags) **PARTICLE_FLAG_DISABLE_Z** = ``2``

Use with [`set_particle_flag`](class_particleprocessmaterial.md#class_particleprocessmaterial_method_set_particle_flag) to set [`particle_flag_disable_z`](class_particleprocessmaterial.md#class_particleprocessmaterial_property_particle_flag_disable_z).

<div id="_class_particleprocessmaterial_constant_particle_flag_damping_as_friction"></div>

[ParticleFlags](#enum_particleprocessmaterial_particleflags) **PARTICLE_FLAG_DAMPING_AS_FRICTION** = ``3``

该枚举目前没有描述，请帮我们\ :ref:`贡献一个 <doc_updating_the_class_reference>`\ 吧！



<div id="_class_particleprocessmaterial_constant_particle_flag_max"></div>

[ParticleFlags](#enum_particleprocessmaterial_particleflags) **PARTICLE_FLAG_MAX** = ``4``

Represents the size of the [ParticleFlags](#enum_particleprocessmaterial_particleflags) enum.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_enum_particleprocessmaterial_emissionshape"></div>

enum **EmissionShape**: <div id="enum_particleprocessmaterial_emissionshape"></div>

<div id="_class_particleprocessmaterial_constant_emission_shape_point"></div>

[EmissionShape](#enum_particleprocessmaterial_emissionshape) **EMISSION_SHAPE_POINT** = ``0``

All particles will be emitted from a single point.

<div id="_class_particleprocessmaterial_constant_emission_shape_sphere"></div>

[EmissionShape](#enum_particleprocessmaterial_emissionshape) **EMISSION_SHAPE_SPHERE** = ``1``

Particles will be emitted in the volume of a sphere.

<div id="_class_particleprocessmaterial_constant_emission_shape_sphere_surface"></div>

[EmissionShape](#enum_particleprocessmaterial_emissionshape) **EMISSION_SHAPE_SPHERE_SURFACE** = ``2``

Particles will be emitted on the surface of a sphere.

<div id="_class_particleprocessmaterial_constant_emission_shape_box"></div>

[EmissionShape](#enum_particleprocessmaterial_emissionshape) **EMISSION_SHAPE_BOX** = ``3``

Particles will be emitted in the volume of a box.

<div id="_class_particleprocessmaterial_constant_emission_shape_points"></div>

[EmissionShape](#enum_particleprocessmaterial_emissionshape) **EMISSION_SHAPE_POINTS** = ``4``

Particles will be emitted at a position determined by sampling a random point on the [`emission_point_texture`](class_particleprocessmaterial.md#class_particleprocessmaterial_property_emission_point_texture). Particle color will be modulated by [`emission_color_texture`](class_particleprocessmaterial.md#class_particleprocessmaterial_property_emission_color_texture).

<div id="_class_particleprocessmaterial_constant_emission_shape_directed_points"></div>

[EmissionShape](#enum_particleprocessmaterial_emissionshape) **EMISSION_SHAPE_DIRECTED_POINTS** = ``5``

Particles will be emitted at a position determined by sampling a random point on the [`emission_point_texture`](class_particleprocessmaterial.md#class_particleprocessmaterial_property_emission_point_texture). Particle velocity and rotation will be set based on [`emission_normal_texture`](class_particleprocessmaterial.md#class_particleprocessmaterial_property_emission_normal_texture). Particle color will be modulated by [`emission_color_texture`](class_particleprocessmaterial.md#class_particleprocessmaterial_property_emission_color_texture).

<div id="_class_particleprocessmaterial_constant_emission_shape_ring"></div>

[EmissionShape](#enum_particleprocessmaterial_emissionshape) **EMISSION_SHAPE_RING** = ``6``

Particles will be emitted in a ring or cylinder.

<div id="_class_particleprocessmaterial_constant_emission_shape_max"></div>

[EmissionShape](#enum_particleprocessmaterial_emissionshape) **EMISSION_SHAPE_MAX** = ``7``

Represents the size of the [EmissionShape](#enum_particleprocessmaterial_emissionshape) enum.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_enum_particleprocessmaterial_subemittermode"></div>

enum **SubEmitterMode**: <div id="enum_particleprocessmaterial_subemittermode"></div>

<div id="_class_particleprocessmaterial_constant_sub_emitter_disabled"></div>

[SubEmitterMode](#enum_particleprocessmaterial_subemittermode) **SUB_EMITTER_DISABLED** = ``0``

该枚举目前没有描述，请帮我们\ :ref:`贡献一个 <doc_updating_the_class_reference>`\ 吧！



<div id="_class_particleprocessmaterial_constant_sub_emitter_constant"></div>

[SubEmitterMode](#enum_particleprocessmaterial_subemittermode) **SUB_EMITTER_CONSTANT** = ``1``

该枚举目前没有描述，请帮我们\ :ref:`贡献一个 <doc_updating_the_class_reference>`\ 吧！



<div id="_class_particleprocessmaterial_constant_sub_emitter_at_end"></div>

[SubEmitterMode](#enum_particleprocessmaterial_subemittermode) **SUB_EMITTER_AT_END** = ``2``

该枚举目前没有描述，请帮我们\ :ref:`贡献一个 <doc_updating_the_class_reference>`\ 吧！



<div id="_class_particleprocessmaterial_constant_sub_emitter_at_collision"></div>

[SubEmitterMode](#enum_particleprocessmaterial_subemittermode) **SUB_EMITTER_AT_COLLISION** = ``3``

该枚举目前没有描述，请帮我们\ :ref:`贡献一个 <doc_updating_the_class_reference>`\ 吧！



<div id="_class_particleprocessmaterial_constant_sub_emitter_max"></div>

[SubEmitterMode](#enum_particleprocessmaterial_subemittermode) **SUB_EMITTER_MAX** = ``4``

Represents the size of the [SubEmitterMode](#enum_particleprocessmaterial_subemittermode) enum.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_enum_particleprocessmaterial_collisionmode"></div>

enum **CollisionMode**: <div id="enum_particleprocessmaterial_collisionmode"></div>

<div id="_class_particleprocessmaterial_constant_collision_disabled"></div>

[CollisionMode](#enum_particleprocessmaterial_collisionmode) **COLLISION_DISABLED** = ``0``

No collision for particles. Particles will go through [`GPUParticlesCollision3D`](class_gpuparticlescollision3d.md) nodes.

<div id="_class_particleprocessmaterial_constant_collision_rigid"></div>

[CollisionMode](#enum_particleprocessmaterial_collisionmode) **COLLISION_RIGID** = ``1``

[`RigidBody3D`](class_rigidbody3d.md)-style collision for particles using [`GPUParticlesCollision3D`](class_gpuparticlescollision3d.md) nodes.

<div id="_class_particleprocessmaterial_constant_collision_hide_on_contact"></div>

[CollisionMode](#enum_particleprocessmaterial_collisionmode) **COLLISION_HIDE_ON_CONTACT** = ``2``

Hide particles instantly when colliding with a [`GPUParticlesCollision3D`](class_gpuparticlescollision3d.md) node. This can be combined with a subemitter that uses the [`COLLISION_RIGID`](class_particleprocessmaterial.md#class_particleprocessmaterial_constant_collision_rigid) collision mode to "replace" the parent particle with the subemitter on impact.

<div id="_class_particleprocessmaterial_constant_collision_max"></div>

[CollisionMode](#enum_particleprocessmaterial_collisionmode) **COLLISION_MAX** = ``3``

Represents the size of the [CollisionMode](#enum_particleprocessmaterial_collisionmode) enum.

<!-- rst-class:: classref-section-separator -->

---

## 属性说明

<div id="_class_particleprocessmaterial_property_alpha_curve"></div>

[`Texture2D`](class_texture2d.md) **alpha_curve** <div id="class_particleprocessmaterial_property_alpha_curve"></div>

- `void` **set_alpha_curve** ( value: [`Texture2D`](class_texture2d.md) )
- [`Texture2D`](class_texture2d.md) **get_alpha_curve** ( )

The alpha value of each particle's color will be multiplied by this [`CurveTexture`](class_curvetexture.md) over its lifetime.

 **Note:** [`alpha_curve`](class_particleprocessmaterial.md#class_particleprocessmaterial_property_alpha_curve) multiplies the particle mesh's vertex colors. To have a visible effect on a [`BaseMaterial3D`](class_basematerial3d.md), [`BaseMaterial3D.vertex_color_use_as_albedo`](class_basematerial3d.md#class_basematerial3d_property_vertex_color_use_as_albedo) *must* be `true`. For a [`ShaderMaterial`](class_shadermaterial.md), `ALBEDO *= COLOR.rgb;` must be inserted in the shader's `fragment()` function. Otherwise, [`alpha_curve`](class_particleprocessmaterial.md#class_particleprocessmaterial_property_alpha_curve) will have no visible effect.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_particleprocessmaterial_property_angle_curve"></div>

[`Texture2D`](class_texture2d.md) **angle_curve** <div id="class_particleprocessmaterial_property_angle_curve"></div>

- `void` **set_param_texture** ( param: [Parameter](#enum_particleprocessmaterial_parameter), texture: [`Texture2D`](class_texture2d.md) )
- [`Texture2D`](class_texture2d.md) **get_param_texture** ( param: [Parameter](#enum_particleprocessmaterial_parameter) ) const[^const]

Each particle's rotation will be animated along this [`CurveTexture`](class_curvetexture.md).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_particleprocessmaterial_property_angle_max"></div>

[`float`](class_float.md) **angle_max** = ``0.0`` <div id="class_particleprocessmaterial_property_angle_max"></div>

- `void` **set_param_max** ( param: [Parameter](#enum_particleprocessmaterial_parameter), value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_param_max** ( param: [Parameter](#enum_particleprocessmaterial_parameter) ) const[^const]

Maximum initial rotation applied to each particle, in degrees.

Only applied when [`particle_flag_disable_z`](class_particleprocessmaterial.md#class_particleprocessmaterial_property_particle_flag_disable_z) or [`particle_flag_rotate_y`](class_particleprocessmaterial.md#class_particleprocessmaterial_property_particle_flag_rotate_y) are `true` or the [`BaseMaterial3D`](class_basematerial3d.md) being used to draw the particle is using [`BaseMaterial3D.BILLBOARD_PARTICLES`](class_basematerial3d.md#class_basematerial3d_constant_billboard_particles).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_particleprocessmaterial_property_angle_min"></div>

[`float`](class_float.md) **angle_min** = ``0.0`` <div id="class_particleprocessmaterial_property_angle_min"></div>

- `void` **set_param_min** ( param: [Parameter](#enum_particleprocessmaterial_parameter), value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_param_min** ( param: [Parameter](#enum_particleprocessmaterial_parameter) ) const[^const]

Minimum equivalent of [`angle_max`](class_particleprocessmaterial.md#class_particleprocessmaterial_property_angle_max).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_particleprocessmaterial_property_angular_velocity_curve"></div>

[`Texture2D`](class_texture2d.md) **angular_velocity_curve** <div id="class_particleprocessmaterial_property_angular_velocity_curve"></div>

- `void` **set_param_texture** ( param: [Parameter](#enum_particleprocessmaterial_parameter), texture: [`Texture2D`](class_texture2d.md) )
- [`Texture2D`](class_texture2d.md) **get_param_texture** ( param: [Parameter](#enum_particleprocessmaterial_parameter) ) const[^const]

Each particle's angular velocity (rotation speed) will vary along this [`CurveTexture`](class_curvetexture.md) over its lifetime.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_particleprocessmaterial_property_angular_velocity_max"></div>

[`float`](class_float.md) **angular_velocity_max** = ``0.0`` <div id="class_particleprocessmaterial_property_angular_velocity_max"></div>

- `void` **set_param_max** ( param: [Parameter](#enum_particleprocessmaterial_parameter), value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_param_max** ( param: [Parameter](#enum_particleprocessmaterial_parameter) ) const[^const]

Maximum initial angular velocity (rotation speed) applied to each particle in *degrees* per second.

Only applied when [`particle_flag_disable_z`](class_particleprocessmaterial.md#class_particleprocessmaterial_property_particle_flag_disable_z) or [`particle_flag_rotate_y`](class_particleprocessmaterial.md#class_particleprocessmaterial_property_particle_flag_rotate_y) are `true` or the [`BaseMaterial3D`](class_basematerial3d.md) being used to draw the particle is using [`BaseMaterial3D.BILLBOARD_PARTICLES`](class_basematerial3d.md#class_basematerial3d_constant_billboard_particles).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_particleprocessmaterial_property_angular_velocity_min"></div>

[`float`](class_float.md) **angular_velocity_min** = ``0.0`` <div id="class_particleprocessmaterial_property_angular_velocity_min"></div>

- `void` **set_param_min** ( param: [Parameter](#enum_particleprocessmaterial_parameter), value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_param_min** ( param: [Parameter](#enum_particleprocessmaterial_parameter) ) const[^const]

Minimum equivalent of [`angular_velocity_max`](class_particleprocessmaterial.md#class_particleprocessmaterial_property_angular_velocity_max).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_particleprocessmaterial_property_anim_offset_curve"></div>

[`Texture2D`](class_texture2d.md) **anim_offset_curve** <div id="class_particleprocessmaterial_property_anim_offset_curve"></div>

- `void` **set_param_texture** ( param: [Parameter](#enum_particleprocessmaterial_parameter), texture: [`Texture2D`](class_texture2d.md) )
- [`Texture2D`](class_texture2d.md) **get_param_texture** ( param: [Parameter](#enum_particleprocessmaterial_parameter) ) const[^const]

Each particle's animation offset will vary along this [`CurveTexture`](class_curvetexture.md).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_particleprocessmaterial_property_anim_offset_max"></div>

[`float`](class_float.md) **anim_offset_max** = ``0.0`` <div id="class_particleprocessmaterial_property_anim_offset_max"></div>

- `void` **set_param_max** ( param: [Parameter](#enum_particleprocessmaterial_parameter), value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_param_max** ( param: [Parameter](#enum_particleprocessmaterial_parameter) ) const[^const]

Maximum animation offset that corresponds to frame index in the texture. `0` is the first frame, `1` is the last one. See [`CanvasItemMaterial.particles_animation`](class_canvasitemmaterial.md#class_canvasitemmaterial_property_particles_animation).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_particleprocessmaterial_property_anim_offset_min"></div>

[`float`](class_float.md) **anim_offset_min** = ``0.0`` <div id="class_particleprocessmaterial_property_anim_offset_min"></div>

- `void` **set_param_min** ( param: [Parameter](#enum_particleprocessmaterial_parameter), value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_param_min** ( param: [Parameter](#enum_particleprocessmaterial_parameter) ) const[^const]

Minimum equivalent of [`anim_offset_max`](class_particleprocessmaterial.md#class_particleprocessmaterial_property_anim_offset_max).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_particleprocessmaterial_property_anim_speed_curve"></div>

[`Texture2D`](class_texture2d.md) **anim_speed_curve** <div id="class_particleprocessmaterial_property_anim_speed_curve"></div>

- `void` **set_param_texture** ( param: [Parameter](#enum_particleprocessmaterial_parameter), texture: [`Texture2D`](class_texture2d.md) )
- [`Texture2D`](class_texture2d.md) **get_param_texture** ( param: [Parameter](#enum_particleprocessmaterial_parameter) ) const[^const]

Each particle's animation speed will vary along this [`CurveTexture`](class_curvetexture.md).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_particleprocessmaterial_property_anim_speed_max"></div>

[`float`](class_float.md) **anim_speed_max** = ``0.0`` <div id="class_particleprocessmaterial_property_anim_speed_max"></div>

- `void` **set_param_max** ( param: [Parameter](#enum_particleprocessmaterial_parameter), value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_param_max** ( param: [Parameter](#enum_particleprocessmaterial_parameter) ) const[^const]

Maximum particle animation speed. Animation speed of `1` means that the particles will make full `0` to `1` offset cycle during lifetime, `2` means `2` cycles etc.

With animation speed greater than `1`, remember to enable [`CanvasItemMaterial.particles_anim_loop`](class_canvasitemmaterial.md#class_canvasitemmaterial_property_particles_anim_loop) property if you want the animation to repeat.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_particleprocessmaterial_property_anim_speed_min"></div>

[`float`](class_float.md) **anim_speed_min** = ``0.0`` <div id="class_particleprocessmaterial_property_anim_speed_min"></div>

- `void` **set_param_min** ( param: [Parameter](#enum_particleprocessmaterial_parameter), value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_param_min** ( param: [Parameter](#enum_particleprocessmaterial_parameter) ) const[^const]

Minimum equivalent of [`anim_speed_max`](class_particleprocessmaterial.md#class_particleprocessmaterial_property_anim_speed_max).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_particleprocessmaterial_property_attractor_interaction_enabled"></div>

[`bool`](class_bool.md) **attractor_interaction_enabled** = ``true`` <div id="class_particleprocessmaterial_property_attractor_interaction_enabled"></div>

- `void` **set_attractor_interaction_enabled** ( value: [`bool`](class_bool.md) )
- [`bool`](class_bool.md) **is_attractor_interaction_enabled** ( )

If `true`, interaction with particle attractors is enabled. In 3D, attraction only occurs within the area defined by the [`GPUParticles3D`](class_gpuparticles3d.md) node's [`GPUParticles3D.visibility_aabb`](class_gpuparticles3d.md#class_gpuparticles3d_property_visibility_aabb).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_particleprocessmaterial_property_collision_bounce"></div>

[`float`](class_float.md) **collision_bounce** <div id="class_particleprocessmaterial_property_collision_bounce"></div>

- `void` **set_collision_bounce** ( value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_collision_bounce** ( )

The particles' bounciness. Values range from `0` (no bounce) to `1` (full bounciness). Only effective if [`collision_mode`](class_particleprocessmaterial.md#class_particleprocessmaterial_property_collision_mode) is [`COLLISION_RIGID`](class_particleprocessmaterial.md#class_particleprocessmaterial_constant_collision_rigid).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_particleprocessmaterial_property_collision_friction"></div>

[`float`](class_float.md) **collision_friction** <div id="class_particleprocessmaterial_property_collision_friction"></div>

- `void` **set_collision_friction** ( value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_collision_friction** ( )

The particles' friction. Values range from `0` (frictionless) to `1` (maximum friction). Only effective if [`collision_mode`](class_particleprocessmaterial.md#class_particleprocessmaterial_property_collision_mode) is [`COLLISION_RIGID`](class_particleprocessmaterial.md#class_particleprocessmaterial_constant_collision_rigid).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_particleprocessmaterial_property_collision_mode"></div>

[CollisionMode](#enum_particleprocessmaterial_collisionmode) **collision_mode** = ``0`` <div id="class_particleprocessmaterial_property_collision_mode"></div>

- `void` **set_collision_mode** ( value: [CollisionMode](#enum_particleprocessmaterial_collisionmode) )
- [CollisionMode](#enum_particleprocessmaterial_collisionmode) **get_collision_mode** ( )

The particles' collision mode.

 **Note:** 3D Particles can only collide with [`GPUParticlesCollision3D`](class_gpuparticlescollision3d.md) nodes, not [`PhysicsBody3D`](class_physicsbody3d.md) nodes. To make particles collide with various objects, you can add [`GPUParticlesCollision3D`](class_gpuparticlescollision3d.md) nodes as children of [`PhysicsBody3D`](class_physicsbody3d.md) nodes. In 3D, collisions only occur within the area defined by the [`GPUParticles3D`](class_gpuparticles3d.md) node's [`GPUParticles3D.visibility_aabb`](class_gpuparticles3d.md#class_gpuparticles3d_property_visibility_aabb).

 **Note:** 2D Particles can only collide with [`LightOccluder2D`](class_lightoccluder2d.md) nodes, not [`PhysicsBody2D`](class_physicsbody2d.md) nodes.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_particleprocessmaterial_property_collision_use_scale"></div>

[`bool`](class_bool.md) **collision_use_scale** = ``false`` <div id="class_particleprocessmaterial_property_collision_use_scale"></div>

- `void` **set_collision_use_scale** ( value: [`bool`](class_bool.md) )
- [`bool`](class_bool.md) **is_collision_using_scale** ( )

If `true`, [`GPUParticles3D.collision_base_size`](class_gpuparticles3d.md#class_gpuparticles3d_property_collision_base_size) is multiplied by the particle's effective scale (see [`scale_min`](class_particleprocessmaterial.md#class_particleprocessmaterial_property_scale_min), [`scale_max`](class_particleprocessmaterial.md#class_particleprocessmaterial_property_scale_max), [`scale_curve`](class_particleprocessmaterial.md#class_particleprocessmaterial_property_scale_curve), and [`scale_over_velocity_curve`](class_particleprocessmaterial.md#class_particleprocessmaterial_property_scale_over_velocity_curve)).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_particleprocessmaterial_property_color"></div>

[`Color`](class_color.md) **color** = ``Color(1, 1, 1, 1)`` <div id="class_particleprocessmaterial_property_color"></div>

- `void` **set_color** ( value: [`Color`](class_color.md) )
- [`Color`](class_color.md) **get_color** ( )

Each particle's initial color. If the [`GPUParticles2D`](class_gpuparticles2d.md)'s `texture` is defined, it will be multiplied by this color.

 **Note:** [`color`](class_particleprocessmaterial.md#class_particleprocessmaterial_property_color) multiplies the particle mesh's vertex colors. To have a visible effect on a [`BaseMaterial3D`](class_basematerial3d.md), [`BaseMaterial3D.vertex_color_use_as_albedo`](class_basematerial3d.md#class_basematerial3d_property_vertex_color_use_as_albedo) *must* be `true`. For a [`ShaderMaterial`](class_shadermaterial.md), `ALBEDO *= COLOR.rgb;` must be inserted in the shader's `fragment()` function. Otherwise, [`color`](class_particleprocessmaterial.md#class_particleprocessmaterial_property_color) will have no visible effect.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_particleprocessmaterial_property_color_initial_ramp"></div>

[`Texture2D`](class_texture2d.md) **color_initial_ramp** <div id="class_particleprocessmaterial_property_color_initial_ramp"></div>

- `void` **set_color_initial_ramp** ( value: [`Texture2D`](class_texture2d.md) )
- [`Texture2D`](class_texture2d.md) **get_color_initial_ramp** ( )

Each particle's initial color will vary along this [`GradientTexture1D`](class_gradienttexture1d.md) (multiplied with [`color`](class_particleprocessmaterial.md#class_particleprocessmaterial_property_color)).

 **Note:** [`color_initial_ramp`](class_particleprocessmaterial.md#class_particleprocessmaterial_property_color_initial_ramp) multiplies the particle mesh's vertex colors. To have a visible effect on a [`BaseMaterial3D`](class_basematerial3d.md), [`BaseMaterial3D.vertex_color_use_as_albedo`](class_basematerial3d.md#class_basematerial3d_property_vertex_color_use_as_albedo) *must* be `true`. For a [`ShaderMaterial`](class_shadermaterial.md), `ALBEDO *= COLOR.rgb;` must be inserted in the shader's `fragment()` function. Otherwise, [`color_initial_ramp`](class_particleprocessmaterial.md#class_particleprocessmaterial_property_color_initial_ramp) will have no visible effect.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_particleprocessmaterial_property_color_ramp"></div>

[`Texture2D`](class_texture2d.md) **color_ramp** <div id="class_particleprocessmaterial_property_color_ramp"></div>

- `void` **set_color_ramp** ( value: [`Texture2D`](class_texture2d.md) )
- [`Texture2D`](class_texture2d.md) **get_color_ramp** ( )

Each particle's color will vary along this [`GradientTexture1D`](class_gradienttexture1d.md) over its lifetime (multiplied with [`color`](class_particleprocessmaterial.md#class_particleprocessmaterial_property_color)).

 **Note:** [`color_ramp`](class_particleprocessmaterial.md#class_particleprocessmaterial_property_color_ramp) multiplies the particle mesh's vertex colors. To have a visible effect on a [`BaseMaterial3D`](class_basematerial3d.md), [`BaseMaterial3D.vertex_color_use_as_albedo`](class_basematerial3d.md#class_basematerial3d_property_vertex_color_use_as_albedo) *must* be `true`. For a [`ShaderMaterial`](class_shadermaterial.md), `ALBEDO *= COLOR.rgb;` must be inserted in the shader's `fragment()` function. Otherwise, [`color_ramp`](class_particleprocessmaterial.md#class_particleprocessmaterial_property_color_ramp) will have no visible effect.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_particleprocessmaterial_property_damping_curve"></div>

[`Texture2D`](class_texture2d.md) **damping_curve** <div id="class_particleprocessmaterial_property_damping_curve"></div>

- `void` **set_param_texture** ( param: [Parameter](#enum_particleprocessmaterial_parameter), texture: [`Texture2D`](class_texture2d.md) )
- [`Texture2D`](class_texture2d.md) **get_param_texture** ( param: [Parameter](#enum_particleprocessmaterial_parameter) ) const[^const]

Damping will vary along this [`CurveTexture`](class_curvetexture.md).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_particleprocessmaterial_property_damping_max"></div>

[`float`](class_float.md) **damping_max** = ``0.0`` <div id="class_particleprocessmaterial_property_damping_max"></div>

- `void` **set_param_max** ( param: [Parameter](#enum_particleprocessmaterial_parameter), value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_param_max** ( param: [Parameter](#enum_particleprocessmaterial_parameter) ) const[^const]

The maximum rate at which particles lose velocity. For example value of `100` means that the particle will go from `100` velocity to `0` in `1` second.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_particleprocessmaterial_property_damping_min"></div>

[`float`](class_float.md) **damping_min** = ``0.0`` <div id="class_particleprocessmaterial_property_damping_min"></div>

- `void` **set_param_min** ( param: [Parameter](#enum_particleprocessmaterial_parameter), value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_param_min** ( param: [Parameter](#enum_particleprocessmaterial_parameter) ) const[^const]

Minimum equivalent of [`damping_max`](class_particleprocessmaterial.md#class_particleprocessmaterial_property_damping_max).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_particleprocessmaterial_property_direction"></div>

[`Vector3`](class_vector3.md) **direction** = ``Vector3(1, 0, 0)`` <div id="class_particleprocessmaterial_property_direction"></div>

- `void` **set_direction** ( value: [`Vector3`](class_vector3.md) )
- [`Vector3`](class_vector3.md) **get_direction** ( )

Unit vector specifying the particles' emission direction.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_particleprocessmaterial_property_directional_velocity_curve"></div>

[`Texture2D`](class_texture2d.md) **directional_velocity_curve** <div id="class_particleprocessmaterial_property_directional_velocity_curve"></div>

- `void` **set_param_texture** ( param: [Parameter](#enum_particleprocessmaterial_parameter), texture: [`Texture2D`](class_texture2d.md) )
- [`Texture2D`](class_texture2d.md) **get_param_texture** ( param: [Parameter](#enum_particleprocessmaterial_parameter) ) const[^const]

A curve that specifies the velocity along each of the axes of the particle system along its lifetime.

 **Note:** Animated velocities will not be affected by damping, use [`velocity_limit_curve`](class_particleprocessmaterial.md#class_particleprocessmaterial_property_velocity_limit_curve) instead.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_particleprocessmaterial_property_directional_velocity_max"></div>

[`float`](class_float.md) **directional_velocity_max** <div id="class_particleprocessmaterial_property_directional_velocity_max"></div>

- `void` **set_param_max** ( param: [Parameter](#enum_particleprocessmaterial_parameter), value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_param_max** ( param: [Parameter](#enum_particleprocessmaterial_parameter) ) const[^const]

Maximum directional velocity value, which is multiplied by [`directional_velocity_curve`](class_particleprocessmaterial.md#class_particleprocessmaterial_property_directional_velocity_curve).

 **Note:** Animated velocities will not be affected by damping, use [`velocity_limit_curve`](class_particleprocessmaterial.md#class_particleprocessmaterial_property_velocity_limit_curve) instead.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_particleprocessmaterial_property_directional_velocity_min"></div>

[`float`](class_float.md) **directional_velocity_min** <div id="class_particleprocessmaterial_property_directional_velocity_min"></div>

- `void` **set_param_min** ( param: [Parameter](#enum_particleprocessmaterial_parameter), value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_param_min** ( param: [Parameter](#enum_particleprocessmaterial_parameter) ) const[^const]

Minimum directional velocity value, which is multiplied by [`directional_velocity_curve`](class_particleprocessmaterial.md#class_particleprocessmaterial_property_directional_velocity_curve).

 **Note:** Animated velocities will not be affected by damping, use [`velocity_limit_curve`](class_particleprocessmaterial.md#class_particleprocessmaterial_property_velocity_limit_curve) instead.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_particleprocessmaterial_property_emission_box_extents"></div>

[`Vector3`](class_vector3.md) **emission_box_extents** <div id="class_particleprocessmaterial_property_emission_box_extents"></div>

- `void` **set_emission_box_extents** ( value: [`Vector3`](class_vector3.md) )
- [`Vector3`](class_vector3.md) **get_emission_box_extents** ( )

The box's extents if [`emission_shape`](class_particleprocessmaterial.md#class_particleprocessmaterial_property_emission_shape) is set to [`EMISSION_SHAPE_BOX`](class_particleprocessmaterial.md#class_particleprocessmaterial_constant_emission_shape_box).

 **Note:** [`emission_box_extents`](class_particleprocessmaterial.md#class_particleprocessmaterial_property_emission_box_extents) starts from the center point and applies the X, Y, and Z values in both directions. The size is twice the area of the extents.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_particleprocessmaterial_property_emission_color_texture"></div>

[`Texture2D`](class_texture2d.md) **emission_color_texture** <div id="class_particleprocessmaterial_property_emission_color_texture"></div>

- `void` **set_emission_color_texture** ( value: [`Texture2D`](class_texture2d.md) )
- [`Texture2D`](class_texture2d.md) **get_emission_color_texture** ( )

Particle color will be modulated by color determined by sampling this texture at the same point as the [`emission_point_texture`](class_particleprocessmaterial.md#class_particleprocessmaterial_property_emission_point_texture).

 **Note:** [`emission_color_texture`](class_particleprocessmaterial.md#class_particleprocessmaterial_property_emission_color_texture) multiplies the particle mesh's vertex colors. To have a visible effect on a [`BaseMaterial3D`](class_basematerial3d.md), [`BaseMaterial3D.vertex_color_use_as_albedo`](class_basematerial3d.md#class_basematerial3d_property_vertex_color_use_as_albedo) *must* be `true`. For a [`ShaderMaterial`](class_shadermaterial.md), `ALBEDO *= COLOR.rgb;` must be inserted in the shader's `fragment()` function. Otherwise, [`emission_color_texture`](class_particleprocessmaterial.md#class_particleprocessmaterial_property_emission_color_texture) will have no visible effect.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_particleprocessmaterial_property_emission_curve"></div>

[`Texture2D`](class_texture2d.md) **emission_curve** <div id="class_particleprocessmaterial_property_emission_curve"></div>

- `void` **set_emission_curve** ( value: [`Texture2D`](class_texture2d.md) )
- [`Texture2D`](class_texture2d.md) **get_emission_curve** ( )

Each particle's color will be multiplied by this [`CurveTexture`](class_curvetexture.md) over its lifetime.

 **Note:** [`emission_curve`](class_particleprocessmaterial.md#class_particleprocessmaterial_property_emission_curve) multiplies the particle mesh's vertex colors. To have a visible effect on a [`BaseMaterial3D`](class_basematerial3d.md), [`BaseMaterial3D.vertex_color_use_as_albedo`](class_basematerial3d.md#class_basematerial3d_property_vertex_color_use_as_albedo) *must* be `true`. For a [`ShaderMaterial`](class_shadermaterial.md), `ALBEDO *= COLOR.rgb;` must be inserted in the shader's `fragment()` function. Otherwise, [`emission_curve`](class_particleprocessmaterial.md#class_particleprocessmaterial_property_emission_curve) will have no visible effect.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_particleprocessmaterial_property_emission_normal_texture"></div>

[`Texture2D`](class_texture2d.md) **emission_normal_texture** <div id="class_particleprocessmaterial_property_emission_normal_texture"></div>

- `void` **set_emission_normal_texture** ( value: [`Texture2D`](class_texture2d.md) )
- [`Texture2D`](class_texture2d.md) **get_emission_normal_texture** ( )

Particle velocity and rotation will be set by sampling this texture at the same point as the [`emission_point_texture`](class_particleprocessmaterial.md#class_particleprocessmaterial_property_emission_point_texture). Used only in [`EMISSION_SHAPE_DIRECTED_POINTS`](class_particleprocessmaterial.md#class_particleprocessmaterial_constant_emission_shape_directed_points). Can be created automatically from mesh or node by selecting "Create Emission Points from Mesh/Node" under the "Particles" tool in the toolbar.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_particleprocessmaterial_property_emission_point_count"></div>

[`int`](class_int.md) **emission_point_count** <div id="class_particleprocessmaterial_property_emission_point_count"></div>

- `void` **set_emission_point_count** ( value: [`int`](class_int.md) )
- [`int`](class_int.md) **get_emission_point_count** ( )

The number of emission points if [`emission_shape`](class_particleprocessmaterial.md#class_particleprocessmaterial_property_emission_shape) is set to [`EMISSION_SHAPE_POINTS`](class_particleprocessmaterial.md#class_particleprocessmaterial_constant_emission_shape_points) or [`EMISSION_SHAPE_DIRECTED_POINTS`](class_particleprocessmaterial.md#class_particleprocessmaterial_constant_emission_shape_directed_points).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_particleprocessmaterial_property_emission_point_texture"></div>

[`Texture2D`](class_texture2d.md) **emission_point_texture** <div id="class_particleprocessmaterial_property_emission_point_texture"></div>

- `void` **set_emission_point_texture** ( value: [`Texture2D`](class_texture2d.md) )
- [`Texture2D`](class_texture2d.md) **get_emission_point_texture** ( )

Particles will be emitted at positions determined by sampling this texture at a random position. Used with [`EMISSION_SHAPE_POINTS`](class_particleprocessmaterial.md#class_particleprocessmaterial_constant_emission_shape_points) and [`EMISSION_SHAPE_DIRECTED_POINTS`](class_particleprocessmaterial.md#class_particleprocessmaterial_constant_emission_shape_directed_points). Can be created automatically from mesh or node by selecting "Create Emission Points from Mesh/Node" under the "Particles" tool in the toolbar.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_particleprocessmaterial_property_emission_ring_axis"></div>

[`Vector3`](class_vector3.md) **emission_ring_axis** <div id="class_particleprocessmaterial_property_emission_ring_axis"></div>

- `void` **set_emission_ring_axis** ( value: [`Vector3`](class_vector3.md) )
- [`Vector3`](class_vector3.md) **get_emission_ring_axis** ( )

The axis of the ring when using the emitter [`EMISSION_SHAPE_RING`](class_particleprocessmaterial.md#class_particleprocessmaterial_constant_emission_shape_ring).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_particleprocessmaterial_property_emission_ring_cone_angle"></div>

[`float`](class_float.md) **emission_ring_cone_angle** <div id="class_particleprocessmaterial_property_emission_ring_cone_angle"></div>

- `void` **set_emission_ring_cone_angle** ( value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_emission_ring_cone_angle** ( )

The angle of the cone when using the emitter [`EMISSION_SHAPE_RING`](class_particleprocessmaterial.md#class_particleprocessmaterial_constant_emission_shape_ring). The default angle of 90 degrees results in a ring, while an angle of 0 degrees results in a cone. Intermediate values will result in a ring where one end is larger than the other.

 **Note:** Depending on [`emission_ring_height`](class_particleprocessmaterial.md#class_particleprocessmaterial_property_emission_ring_height), the angle may be clamped if the ring's end is reached to form a perfect cone.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_particleprocessmaterial_property_emission_ring_height"></div>

[`float`](class_float.md) **emission_ring_height** <div id="class_particleprocessmaterial_property_emission_ring_height"></div>

- `void` **set_emission_ring_height** ( value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_emission_ring_height** ( )

The height of the ring when using the emitter [`EMISSION_SHAPE_RING`](class_particleprocessmaterial.md#class_particleprocessmaterial_constant_emission_shape_ring).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_particleprocessmaterial_property_emission_ring_inner_radius"></div>

[`float`](class_float.md) **emission_ring_inner_radius** <div id="class_particleprocessmaterial_property_emission_ring_inner_radius"></div>

- `void` **set_emission_ring_inner_radius** ( value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_emission_ring_inner_radius** ( )

The inner radius of the ring when using the emitter [`EMISSION_SHAPE_RING`](class_particleprocessmaterial.md#class_particleprocessmaterial_constant_emission_shape_ring).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_particleprocessmaterial_property_emission_ring_radius"></div>

[`float`](class_float.md) **emission_ring_radius** <div id="class_particleprocessmaterial_property_emission_ring_radius"></div>

- `void` **set_emission_ring_radius** ( value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_emission_ring_radius** ( )

The radius of the ring when using the emitter [`EMISSION_SHAPE_RING`](class_particleprocessmaterial.md#class_particleprocessmaterial_constant_emission_shape_ring).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_particleprocessmaterial_property_emission_shape"></div>

[EmissionShape](#enum_particleprocessmaterial_emissionshape) **emission_shape** = ``0`` <div id="class_particleprocessmaterial_property_emission_shape"></div>

- `void` **set_emission_shape** ( value: [EmissionShape](#enum_particleprocessmaterial_emissionshape) )
- [EmissionShape](#enum_particleprocessmaterial_emissionshape) **get_emission_shape** ( )

Particles will be emitted inside this region. Use [EmissionShape](#enum_particleprocessmaterial_emissionshape) constants for values.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_particleprocessmaterial_property_emission_shape_offset"></div>

[`Vector3`](class_vector3.md) **emission_shape_offset** = ``Vector3(0, 0, 0)`` <div id="class_particleprocessmaterial_property_emission_shape_offset"></div>

- `void` **set_emission_shape_offset** ( value: [`Vector3`](class_vector3.md) )
- [`Vector3`](class_vector3.md) **get_emission_shape_offset** ( )

The offset for the [`emission_shape`](class_particleprocessmaterial.md#class_particleprocessmaterial_property_emission_shape), in local space.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_particleprocessmaterial_property_emission_shape_scale"></div>

[`Vector3`](class_vector3.md) **emission_shape_scale** = ``Vector3(1, 1, 1)`` <div id="class_particleprocessmaterial_property_emission_shape_scale"></div>

- `void` **set_emission_shape_scale** ( value: [`Vector3`](class_vector3.md) )
- [`Vector3`](class_vector3.md) **get_emission_shape_scale** ( )

The scale of the [`emission_shape`](class_particleprocessmaterial.md#class_particleprocessmaterial_property_emission_shape), in local space.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_particleprocessmaterial_property_emission_sphere_radius"></div>

[`float`](class_float.md) **emission_sphere_radius** <div id="class_particleprocessmaterial_property_emission_sphere_radius"></div>

- `void` **set_emission_sphere_radius** ( value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_emission_sphere_radius** ( )

The sphere's radius if [`emission_shape`](class_particleprocessmaterial.md#class_particleprocessmaterial_property_emission_shape) is set to [`EMISSION_SHAPE_SPHERE`](class_particleprocessmaterial.md#class_particleprocessmaterial_constant_emission_shape_sphere).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_particleprocessmaterial_property_flatness"></div>

[`float`](class_float.md) **flatness** = ``0.0`` <div id="class_particleprocessmaterial_property_flatness"></div>

- `void` **set_flatness** ( value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_flatness** ( )

Amount of [`spread`](class_particleprocessmaterial.md#class_particleprocessmaterial_property_spread) along the Y axis.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_particleprocessmaterial_property_gravity"></div>

[`Vector3`](class_vector3.md) **gravity** = ``Vector3(0, -9.8, 0)`` <div id="class_particleprocessmaterial_property_gravity"></div>

- `void` **set_gravity** ( value: [`Vector3`](class_vector3.md) )
- [`Vector3`](class_vector3.md) **get_gravity** ( )

Gravity applied to every particle.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_particleprocessmaterial_property_hue_variation_curve"></div>

[`Texture2D`](class_texture2d.md) **hue_variation_curve** <div id="class_particleprocessmaterial_property_hue_variation_curve"></div>

- `void` **set_param_texture** ( param: [Parameter](#enum_particleprocessmaterial_parameter), texture: [`Texture2D`](class_texture2d.md) )
- [`Texture2D`](class_texture2d.md) **get_param_texture** ( param: [Parameter](#enum_particleprocessmaterial_parameter) ) const[^const]

Each particle's hue will vary along this [`CurveTexture`](class_curvetexture.md).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_particleprocessmaterial_property_hue_variation_max"></div>

[`float`](class_float.md) **hue_variation_max** = ``0.0`` <div id="class_particleprocessmaterial_property_hue_variation_max"></div>

- `void` **set_param_max** ( param: [Parameter](#enum_particleprocessmaterial_parameter), value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_param_max** ( param: [Parameter](#enum_particleprocessmaterial_parameter) ) const[^const]

Maximum initial hue variation applied to each particle. It will shift the particle color's hue.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_particleprocessmaterial_property_hue_variation_min"></div>

[`float`](class_float.md) **hue_variation_min** = ``0.0`` <div id="class_particleprocessmaterial_property_hue_variation_min"></div>

- `void` **set_param_min** ( param: [Parameter](#enum_particleprocessmaterial_parameter), value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_param_min** ( param: [Parameter](#enum_particleprocessmaterial_parameter) ) const[^const]

Minimum equivalent of [`hue_variation_max`](class_particleprocessmaterial.md#class_particleprocessmaterial_property_hue_variation_max).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_particleprocessmaterial_property_inherit_velocity_ratio"></div>

[`float`](class_float.md) **inherit_velocity_ratio** = ``0.0`` <div id="class_particleprocessmaterial_property_inherit_velocity_ratio"></div>

- `void` **set_inherit_velocity_ratio** ( value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_inherit_velocity_ratio** ( )

Percentage of the velocity of the respective [`GPUParticles2D`](class_gpuparticles2d.md) or [`GPUParticles3D`](class_gpuparticles3d.md) inherited by each particle when spawning.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_particleprocessmaterial_property_initial_velocity_max"></div>

[`float`](class_float.md) **initial_velocity_max** = ``0.0`` <div id="class_particleprocessmaterial_property_initial_velocity_max"></div>

- `void` **set_param_max** ( param: [Parameter](#enum_particleprocessmaterial_parameter), value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_param_max** ( param: [Parameter](#enum_particleprocessmaterial_parameter) ) const[^const]

Maximum initial velocity magnitude for each particle. Direction comes from [`direction`](class_particleprocessmaterial.md#class_particleprocessmaterial_property_direction) and [`spread`](class_particleprocessmaterial.md#class_particleprocessmaterial_property_spread).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_particleprocessmaterial_property_initial_velocity_min"></div>

[`float`](class_float.md) **initial_velocity_min** = ``0.0`` <div id="class_particleprocessmaterial_property_initial_velocity_min"></div>

- `void` **set_param_min** ( param: [Parameter](#enum_particleprocessmaterial_parameter), value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_param_min** ( param: [Parameter](#enum_particleprocessmaterial_parameter) ) const[^const]

Minimum equivalent of [`initial_velocity_max`](class_particleprocessmaterial.md#class_particleprocessmaterial_property_initial_velocity_max).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_particleprocessmaterial_property_lifetime_randomness"></div>

[`float`](class_float.md) **lifetime_randomness** = ``0.0`` <div id="class_particleprocessmaterial_property_lifetime_randomness"></div>

- `void` **set_lifetime_randomness** ( value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_lifetime_randomness** ( )

Particle lifetime randomness ratio. The equation for the lifetime of a particle is `lifetime * (1.0 - randf() * lifetime_randomness)`. For example, a [`lifetime_randomness`](class_particleprocessmaterial.md#class_particleprocessmaterial_property_lifetime_randomness) of `0.4` scales the lifetime between `0.6` to `1.0` of its original value.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_particleprocessmaterial_property_linear_accel_curve"></div>

[`Texture2D`](class_texture2d.md) **linear_accel_curve** <div id="class_particleprocessmaterial_property_linear_accel_curve"></div>

- `void` **set_param_texture** ( param: [Parameter](#enum_particleprocessmaterial_parameter), texture: [`Texture2D`](class_texture2d.md) )
- [`Texture2D`](class_texture2d.md) **get_param_texture** ( param: [Parameter](#enum_particleprocessmaterial_parameter) ) const[^const]

Each particle's linear acceleration will vary along this [`CurveTexture`](class_curvetexture.md).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_particleprocessmaterial_property_linear_accel_max"></div>

[`float`](class_float.md) **linear_accel_max** = ``0.0`` <div id="class_particleprocessmaterial_property_linear_accel_max"></div>

- `void` **set_param_max** ( param: [Parameter](#enum_particleprocessmaterial_parameter), value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_param_max** ( param: [Parameter](#enum_particleprocessmaterial_parameter) ) const[^const]

Maximum linear acceleration applied to each particle in the direction of motion.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_particleprocessmaterial_property_linear_accel_min"></div>

[`float`](class_float.md) **linear_accel_min** = ``0.0`` <div id="class_particleprocessmaterial_property_linear_accel_min"></div>

- `void` **set_param_min** ( param: [Parameter](#enum_particleprocessmaterial_parameter), value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_param_min** ( param: [Parameter](#enum_particleprocessmaterial_parameter) ) const[^const]

Minimum equivalent of [`linear_accel_max`](class_particleprocessmaterial.md#class_particleprocessmaterial_property_linear_accel_max).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_particleprocessmaterial_property_orbit_velocity_curve"></div>

[`Texture2D`](class_texture2d.md) **orbit_velocity_curve** <div id="class_particleprocessmaterial_property_orbit_velocity_curve"></div>

- `void` **set_param_texture** ( param: [Parameter](#enum_particleprocessmaterial_parameter), texture: [`Texture2D`](class_texture2d.md) )
- [`Texture2D`](class_texture2d.md) **get_param_texture** ( param: [Parameter](#enum_particleprocessmaterial_parameter) ) const[^const]

Each particle's orbital velocity will vary along this [`CurveTexture`](class_curvetexture.md).

 **Note:** For 3D orbital velocity, use a [`CurveXYZTexture`](class_curvexyztexture.md).

 **Note:** Animated velocities will not be affected by damping, use [`velocity_limit_curve`](class_particleprocessmaterial.md#class_particleprocessmaterial_property_velocity_limit_curve) instead.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_particleprocessmaterial_property_orbit_velocity_max"></div>

[`float`](class_float.md) **orbit_velocity_max** = ``0.0`` <div id="class_particleprocessmaterial_property_orbit_velocity_max"></div>

- `void` **set_param_max** ( param: [Parameter](#enum_particleprocessmaterial_parameter), value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_param_max** ( param: [Parameter](#enum_particleprocessmaterial_parameter) ) const[^const]

Maximum orbital velocity applied to each particle. Makes the particles circle around origin. Specified in number of full rotations around origin per second.

 **Note:** Animated velocities will not be affected by damping, use [`velocity_limit_curve`](class_particleprocessmaterial.md#class_particleprocessmaterial_property_velocity_limit_curve) instead.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_particleprocessmaterial_property_orbit_velocity_min"></div>

[`float`](class_float.md) **orbit_velocity_min** = ``0.0`` <div id="class_particleprocessmaterial_property_orbit_velocity_min"></div>

- `void` **set_param_min** ( param: [Parameter](#enum_particleprocessmaterial_parameter), value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_param_min** ( param: [Parameter](#enum_particleprocessmaterial_parameter) ) const[^const]

Minimum equivalent of [`orbit_velocity_max`](class_particleprocessmaterial.md#class_particleprocessmaterial_property_orbit_velocity_max).

 **Note:** Animated velocities will not be affected by damping, use [`velocity_limit_curve`](class_particleprocessmaterial.md#class_particleprocessmaterial_property_velocity_limit_curve) instead.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_particleprocessmaterial_property_particle_flag_align_y"></div>

[`bool`](class_bool.md) **particle_flag_align_y** = ``false`` <div id="class_particleprocessmaterial_property_particle_flag_align_y"></div>

- `void` **set_particle_flag** ( particle_flag: [ParticleFlags](#enum_particleprocessmaterial_particleflags), enable: [`bool`](class_bool.md) )
- [`bool`](class_bool.md) **get_particle_flag** ( particle_flag: [ParticleFlags](#enum_particleprocessmaterial_particleflags) ) const[^const]

Align Y axis of particle with the direction of its velocity.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_particleprocessmaterial_property_particle_flag_damping_as_friction"></div>

[`bool`](class_bool.md) **particle_flag_damping_as_friction** = ``false`` <div id="class_particleprocessmaterial_property_particle_flag_damping_as_friction"></div>

- `void` **set_particle_flag** ( particle_flag: [ParticleFlags](#enum_particleprocessmaterial_particleflags), enable: [`bool`](class_bool.md) )
- [`bool`](class_bool.md) **get_particle_flag** ( particle_flag: [ParticleFlags](#enum_particleprocessmaterial_particleflags) ) const[^const]

Changes the behavior of the damping properties from a linear deceleration to a deceleration based on speed percentage.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_particleprocessmaterial_property_particle_flag_disable_z"></div>

[`bool`](class_bool.md) **particle_flag_disable_z** = ``false`` <div id="class_particleprocessmaterial_property_particle_flag_disable_z"></div>

- `void` **set_particle_flag** ( particle_flag: [ParticleFlags](#enum_particleprocessmaterial_particleflags), enable: [`bool`](class_bool.md) )
- [`bool`](class_bool.md) **get_particle_flag** ( particle_flag: [ParticleFlags](#enum_particleprocessmaterial_particleflags) ) const[^const]

If `true`, particles will not move on the z axis.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_particleprocessmaterial_property_particle_flag_rotate_y"></div>

[`bool`](class_bool.md) **particle_flag_rotate_y** = ``false`` <div id="class_particleprocessmaterial_property_particle_flag_rotate_y"></div>

- `void` **set_particle_flag** ( particle_flag: [ParticleFlags](#enum_particleprocessmaterial_particleflags), enable: [`bool`](class_bool.md) )
- [`bool`](class_bool.md) **get_particle_flag** ( particle_flag: [ParticleFlags](#enum_particleprocessmaterial_particleflags) ) const[^const]

If `true`, particles rotate around Y axis by [`angle_min`](class_particleprocessmaterial.md#class_particleprocessmaterial_property_angle_min).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_particleprocessmaterial_property_radial_accel_curve"></div>

[`Texture2D`](class_texture2d.md) **radial_accel_curve** <div id="class_particleprocessmaterial_property_radial_accel_curve"></div>

- `void` **set_param_texture** ( param: [Parameter](#enum_particleprocessmaterial_parameter), texture: [`Texture2D`](class_texture2d.md) )
- [`Texture2D`](class_texture2d.md) **get_param_texture** ( param: [Parameter](#enum_particleprocessmaterial_parameter) ) const[^const]

Each particle's radial acceleration will vary along this [`CurveTexture`](class_curvetexture.md).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_particleprocessmaterial_property_radial_accel_max"></div>

[`float`](class_float.md) **radial_accel_max** = ``0.0`` <div id="class_particleprocessmaterial_property_radial_accel_max"></div>

- `void` **set_param_max** ( param: [Parameter](#enum_particleprocessmaterial_parameter), value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_param_max** ( param: [Parameter](#enum_particleprocessmaterial_parameter) ) const[^const]

Maximum radial acceleration applied to each particle. Makes particle accelerate away from the origin or towards it if negative.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_particleprocessmaterial_property_radial_accel_min"></div>

[`float`](class_float.md) **radial_accel_min** = ``0.0`` <div id="class_particleprocessmaterial_property_radial_accel_min"></div>

- `void` **set_param_min** ( param: [Parameter](#enum_particleprocessmaterial_parameter), value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_param_min** ( param: [Parameter](#enum_particleprocessmaterial_parameter) ) const[^const]

Minimum equivalent of [`radial_accel_max`](class_particleprocessmaterial.md#class_particleprocessmaterial_property_radial_accel_max).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_particleprocessmaterial_property_radial_velocity_curve"></div>

[`Texture2D`](class_texture2d.md) **radial_velocity_curve** <div id="class_particleprocessmaterial_property_radial_velocity_curve"></div>

- `void` **set_param_texture** ( param: [Parameter](#enum_particleprocessmaterial_parameter), texture: [`Texture2D`](class_texture2d.md) )
- [`Texture2D`](class_texture2d.md) **get_param_texture** ( param: [Parameter](#enum_particleprocessmaterial_parameter) ) const[^const]

A [`CurveTexture`](class_curvetexture.md) that defines the velocity over the particle's lifetime away (or toward) the [`velocity_pivot`](class_particleprocessmaterial.md#class_particleprocessmaterial_property_velocity_pivot).

 **Note:** Animated velocities will not be affected by damping, use [`velocity_limit_curve`](class_particleprocessmaterial.md#class_particleprocessmaterial_property_velocity_limit_curve) instead.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_particleprocessmaterial_property_radial_velocity_max"></div>

[`float`](class_float.md) **radial_velocity_max** = ``0.0`` <div id="class_particleprocessmaterial_property_radial_velocity_max"></div>

- `void` **set_param_max** ( param: [Parameter](#enum_particleprocessmaterial_parameter), value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_param_max** ( param: [Parameter](#enum_particleprocessmaterial_parameter) ) const[^const]

Maximum radial velocity applied to each particle. Makes particles move away from the [`velocity_pivot`](class_particleprocessmaterial.md#class_particleprocessmaterial_property_velocity_pivot), or toward it if negative.

 **Note:** Animated velocities will not be affected by damping, use [`velocity_limit_curve`](class_particleprocessmaterial.md#class_particleprocessmaterial_property_velocity_limit_curve) instead.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_particleprocessmaterial_property_radial_velocity_min"></div>

[`float`](class_float.md) **radial_velocity_min** = ``0.0`` <div id="class_particleprocessmaterial_property_radial_velocity_min"></div>

- `void` **set_param_min** ( param: [Parameter](#enum_particleprocessmaterial_parameter), value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_param_min** ( param: [Parameter](#enum_particleprocessmaterial_parameter) ) const[^const]

Minimum radial velocity applied to each particle. Makes particles move away from the [`velocity_pivot`](class_particleprocessmaterial.md#class_particleprocessmaterial_property_velocity_pivot), or toward it if negative.

 **Note:** Animated velocities will not be affected by damping, use [`velocity_limit_curve`](class_particleprocessmaterial.md#class_particleprocessmaterial_property_velocity_limit_curve) instead.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_particleprocessmaterial_property_scale_curve"></div>

[`Texture2D`](class_texture2d.md) **scale_curve** <div id="class_particleprocessmaterial_property_scale_curve"></div>

- `void` **set_param_texture** ( param: [Parameter](#enum_particleprocessmaterial_parameter), texture: [`Texture2D`](class_texture2d.md) )
- [`Texture2D`](class_texture2d.md) **get_param_texture** ( param: [Parameter](#enum_particleprocessmaterial_parameter) ) const[^const]

Each particle's scale will vary along this [`CurveTexture`](class_curvetexture.md) over its lifetime. If a [`CurveXYZTexture`](class_curvexyztexture.md) is supplied instead, the scale will be separated per-axis.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_particleprocessmaterial_property_scale_max"></div>

[`float`](class_float.md) **scale_max** = ``1.0`` <div id="class_particleprocessmaterial_property_scale_max"></div>

- `void` **set_param_max** ( param: [Parameter](#enum_particleprocessmaterial_parameter), value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_param_max** ( param: [Parameter](#enum_particleprocessmaterial_parameter) ) const[^const]

Maximum initial scale applied to each particle.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_particleprocessmaterial_property_scale_min"></div>

[`float`](class_float.md) **scale_min** = ``1.0`` <div id="class_particleprocessmaterial_property_scale_min"></div>

- `void` **set_param_min** ( param: [Parameter](#enum_particleprocessmaterial_parameter), value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_param_min** ( param: [Parameter](#enum_particleprocessmaterial_parameter) ) const[^const]

Minimum equivalent of [`scale_max`](class_particleprocessmaterial.md#class_particleprocessmaterial_property_scale_max).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_particleprocessmaterial_property_scale_over_velocity_curve"></div>

[`Texture2D`](class_texture2d.md) **scale_over_velocity_curve** <div id="class_particleprocessmaterial_property_scale_over_velocity_curve"></div>

- `void` **set_param_texture** ( param: [Parameter](#enum_particleprocessmaterial_parameter), texture: [`Texture2D`](class_texture2d.md) )
- [`Texture2D`](class_texture2d.md) **get_param_texture** ( param: [Parameter](#enum_particleprocessmaterial_parameter) ) const[^const]

Either a [`CurveTexture`](class_curvetexture.md) or a [`CurveXYZTexture`](class_curvexyztexture.md) that scales each particle based on its velocity.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_particleprocessmaterial_property_scale_over_velocity_max"></div>

[`float`](class_float.md) **scale_over_velocity_max** = ``0.0`` <div id="class_particleprocessmaterial_property_scale_over_velocity_max"></div>

- `void` **set_param_max** ( param: [Parameter](#enum_particleprocessmaterial_parameter), value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_param_max** ( param: [Parameter](#enum_particleprocessmaterial_parameter) ) const[^const]

Maximum velocity value reference for [`scale_over_velocity_curve`](class_particleprocessmaterial.md#class_particleprocessmaterial_property_scale_over_velocity_curve).

 [`scale_over_velocity_curve`](class_particleprocessmaterial.md#class_particleprocessmaterial_property_scale_over_velocity_curve) will be interpolated between [`scale_over_velocity_min`](class_particleprocessmaterial.md#class_particleprocessmaterial_property_scale_over_velocity_min) and [`scale_over_velocity_max`](class_particleprocessmaterial.md#class_particleprocessmaterial_property_scale_over_velocity_max).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_particleprocessmaterial_property_scale_over_velocity_min"></div>

[`float`](class_float.md) **scale_over_velocity_min** = ``0.0`` <div id="class_particleprocessmaterial_property_scale_over_velocity_min"></div>

- `void` **set_param_min** ( param: [Parameter](#enum_particleprocessmaterial_parameter), value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_param_min** ( param: [Parameter](#enum_particleprocessmaterial_parameter) ) const[^const]

Minimum velocity value reference for [`scale_over_velocity_curve`](class_particleprocessmaterial.md#class_particleprocessmaterial_property_scale_over_velocity_curve).

 [`scale_over_velocity_curve`](class_particleprocessmaterial.md#class_particleprocessmaterial_property_scale_over_velocity_curve) will be interpolated between [`scale_over_velocity_min`](class_particleprocessmaterial.md#class_particleprocessmaterial_property_scale_over_velocity_min) and [`scale_over_velocity_max`](class_particleprocessmaterial.md#class_particleprocessmaterial_property_scale_over_velocity_max).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_particleprocessmaterial_property_spread"></div>

[`float`](class_float.md) **spread** = ``45.0`` <div id="class_particleprocessmaterial_property_spread"></div>

- `void` **set_spread** ( value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_spread** ( )

Each particle's initial direction range from `+spread` to `-spread` degrees.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_particleprocessmaterial_property_sub_emitter_amount_at_collision"></div>

[`int`](class_int.md) **sub_emitter_amount_at_collision** <div id="class_particleprocessmaterial_property_sub_emitter_amount_at_collision"></div>

- `void` **set_sub_emitter_amount_at_collision** ( value: [`int`](class_int.md) )
- [`int`](class_int.md) **get_sub_emitter_amount_at_collision** ( )

The amount of particles to spawn from the subemitter node when a collision occurs. When combined with [`COLLISION_HIDE_ON_CONTACT`](class_particleprocessmaterial.md#class_particleprocessmaterial_constant_collision_hide_on_contact) on the main particles material, this can be used to achieve effects such as raindrops hitting the ground.

 **Note:** This value shouldn't exceed [`GPUParticles2D.amount`](class_gpuparticles2d.md#class_gpuparticles2d_property_amount) or [`GPUParticles3D.amount`](class_gpuparticles3d.md#class_gpuparticles3d_property_amount) defined on the *subemitter node* (not the main node), relative to the subemitter's particle lifetime. If the number of particles is exceeded, no new particles will spawn from the subemitter until enough particles have expired.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_particleprocessmaterial_property_sub_emitter_amount_at_end"></div>

[`int`](class_int.md) **sub_emitter_amount_at_end** <div id="class_particleprocessmaterial_property_sub_emitter_amount_at_end"></div>

- `void` **set_sub_emitter_amount_at_end** ( value: [`int`](class_int.md) )
- [`int`](class_int.md) **get_sub_emitter_amount_at_end** ( )

The amount of particles to spawn from the subemitter node when the particle expires.

 **Note:** This value shouldn't exceed [`GPUParticles2D.amount`](class_gpuparticles2d.md#class_gpuparticles2d_property_amount) or [`GPUParticles3D.amount`](class_gpuparticles3d.md#class_gpuparticles3d_property_amount) defined on the *subemitter node* (not the main node), relative to the subemitter's particle lifetime. If the number of particles is exceeded, no new particles will spawn from the subemitter until enough particles have expired.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_particleprocessmaterial_property_sub_emitter_frequency"></div>

[`float`](class_float.md) **sub_emitter_frequency** <div id="class_particleprocessmaterial_property_sub_emitter_frequency"></div>

- `void` **set_sub_emitter_frequency** ( value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_sub_emitter_frequency** ( )

The frequency at which particles should be emitted from the subemitter node. One particle will be spawned every [`sub_emitter_frequency`](class_particleprocessmaterial.md#class_particleprocessmaterial_property_sub_emitter_frequency) seconds.

 **Note:** This value shouldn't exceed [`GPUParticles2D.amount`](class_gpuparticles2d.md#class_gpuparticles2d_property_amount) or [`GPUParticles3D.amount`](class_gpuparticles3d.md#class_gpuparticles3d_property_amount) defined on the *subemitter node* (not the main node), relative to the subemitter's particle lifetime. If the number of particles is exceeded, no new particles will spawn from the subemitter until enough particles have expired.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_particleprocessmaterial_property_sub_emitter_keep_velocity"></div>

[`bool`](class_bool.md) **sub_emitter_keep_velocity** = ``false`` <div id="class_particleprocessmaterial_property_sub_emitter_keep_velocity"></div>

- `void` **set_sub_emitter_keep_velocity** ( value: [`bool`](class_bool.md) )
- [`bool`](class_bool.md) **get_sub_emitter_keep_velocity** ( )

If `true`, the subemitter inherits the parent particle's velocity when it spawns.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_particleprocessmaterial_property_sub_emitter_mode"></div>

[SubEmitterMode](#enum_particleprocessmaterial_subemittermode) **sub_emitter_mode** = ``0`` <div id="class_particleprocessmaterial_property_sub_emitter_mode"></div>

- `void` **set_sub_emitter_mode** ( value: [SubEmitterMode](#enum_particleprocessmaterial_subemittermode) )
- [SubEmitterMode](#enum_particleprocessmaterial_subemittermode) **get_sub_emitter_mode** ( )

The particle subemitter mode (see [`GPUParticles2D.sub_emitter`](class_gpuparticles2d.md#class_gpuparticles2d_property_sub_emitter) and [`GPUParticles3D.sub_emitter`](class_gpuparticles3d.md#class_gpuparticles3d_property_sub_emitter)).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_particleprocessmaterial_property_tangential_accel_curve"></div>

[`Texture2D`](class_texture2d.md) **tangential_accel_curve** <div id="class_particleprocessmaterial_property_tangential_accel_curve"></div>

- `void` **set_param_texture** ( param: [Parameter](#enum_particleprocessmaterial_parameter), texture: [`Texture2D`](class_texture2d.md) )
- [`Texture2D`](class_texture2d.md) **get_param_texture** ( param: [Parameter](#enum_particleprocessmaterial_parameter) ) const[^const]

Each particle's tangential acceleration will vary along this [`CurveTexture`](class_curvetexture.md).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_particleprocessmaterial_property_tangential_accel_max"></div>

[`float`](class_float.md) **tangential_accel_max** = ``0.0`` <div id="class_particleprocessmaterial_property_tangential_accel_max"></div>

- `void` **set_param_max** ( param: [Parameter](#enum_particleprocessmaterial_parameter), value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_param_max** ( param: [Parameter](#enum_particleprocessmaterial_parameter) ) const[^const]

Maximum tangential acceleration applied to each particle. Tangential acceleration is perpendicular to the particle's velocity giving the particles a swirling motion.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_particleprocessmaterial_property_tangential_accel_min"></div>

[`float`](class_float.md) **tangential_accel_min** = ``0.0`` <div id="class_particleprocessmaterial_property_tangential_accel_min"></div>

- `void` **set_param_min** ( param: [Parameter](#enum_particleprocessmaterial_parameter), value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_param_min** ( param: [Parameter](#enum_particleprocessmaterial_parameter) ) const[^const]

Minimum equivalent of [`tangential_accel_max`](class_particleprocessmaterial.md#class_particleprocessmaterial_property_tangential_accel_max).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_particleprocessmaterial_property_turbulence_enabled"></div>

[`bool`](class_bool.md) **turbulence_enabled** = ``false`` <div id="class_particleprocessmaterial_property_turbulence_enabled"></div>

- `void` **set_turbulence_enabled** ( value: [`bool`](class_bool.md) )
- [`bool`](class_bool.md) **get_turbulence_enabled** ( )

If `true`, enables turbulence for the particle system. Turbulence can be used to vary particle movement according to its position (based on a 3D noise pattern). In 3D, [`GPUParticlesAttractorVectorField3D`](class_gpuparticlesattractorvectorfield3d.md) with [`NoiseTexture3D`](class_noisetexture3d.md) can be used as an alternative to turbulence that works in world space and with multiple particle systems reacting in the same way.

 **Note:** Enabling turbulence has a high performance cost on the GPU. Only enable turbulence on a few particle systems at once at most, and consider disabling it when targeting mobile/web platforms.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_particleprocessmaterial_property_turbulence_influence_max"></div>

[`float`](class_float.md) **turbulence_influence_max** = ``0.1`` <div id="class_particleprocessmaterial_property_turbulence_influence_max"></div>

- `void` **set_param_max** ( param: [Parameter](#enum_particleprocessmaterial_parameter), value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_param_max** ( param: [Parameter](#enum_particleprocessmaterial_parameter) ) const[^const]

Maximum turbulence influence on each particle.

The actual amount of turbulence influence on each particle is calculated as a random value between [`turbulence_influence_min`](class_particleprocessmaterial.md#class_particleprocessmaterial_property_turbulence_influence_min) and [`turbulence_influence_max`](class_particleprocessmaterial.md#class_particleprocessmaterial_property_turbulence_influence_max) and multiplied by the amount of turbulence influence from [`turbulence_influence_over_life`](class_particleprocessmaterial.md#class_particleprocessmaterial_property_turbulence_influence_over_life).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_particleprocessmaterial_property_turbulence_influence_min"></div>

[`float`](class_float.md) **turbulence_influence_min** = ``0.1`` <div id="class_particleprocessmaterial_property_turbulence_influence_min"></div>

- `void` **set_param_min** ( param: [Parameter](#enum_particleprocessmaterial_parameter), value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_param_min** ( param: [Parameter](#enum_particleprocessmaterial_parameter) ) const[^const]

Minimum turbulence influence on each particle.

The actual amount of turbulence influence on each particle is calculated as a random value between [`turbulence_influence_min`](class_particleprocessmaterial.md#class_particleprocessmaterial_property_turbulence_influence_min) and [`turbulence_influence_max`](class_particleprocessmaterial.md#class_particleprocessmaterial_property_turbulence_influence_max) and multiplied by the amount of turbulence influence from [`turbulence_influence_over_life`](class_particleprocessmaterial.md#class_particleprocessmaterial_property_turbulence_influence_over_life).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_particleprocessmaterial_property_turbulence_influence_over_life"></div>

[`Texture2D`](class_texture2d.md) **turbulence_influence_over_life** <div id="class_particleprocessmaterial_property_turbulence_influence_over_life"></div>

- `void` **set_param_texture** ( param: [Parameter](#enum_particleprocessmaterial_parameter), texture: [`Texture2D`](class_texture2d.md) )
- [`Texture2D`](class_texture2d.md) **get_param_texture** ( param: [Parameter](#enum_particleprocessmaterial_parameter) ) const[^const]

Each particle's amount of turbulence will be influenced along this [`CurveTexture`](class_curvetexture.md) over its life time.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_particleprocessmaterial_property_turbulence_initial_displacement_max"></div>

[`float`](class_float.md) **turbulence_initial_displacement_max** = ``0.0`` <div id="class_particleprocessmaterial_property_turbulence_initial_displacement_max"></div>

- `void` **set_param_max** ( param: [Parameter](#enum_particleprocessmaterial_parameter), value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_param_max** ( param: [Parameter](#enum_particleprocessmaterial_parameter) ) const[^const]

Maximum displacement of each particle's spawn position by the turbulence.

The actual amount of displacement will be a factor of the underlying turbulence multiplied by a random value between [`turbulence_initial_displacement_min`](class_particleprocessmaterial.md#class_particleprocessmaterial_property_turbulence_initial_displacement_min) and [`turbulence_initial_displacement_max`](class_particleprocessmaterial.md#class_particleprocessmaterial_property_turbulence_initial_displacement_max).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_particleprocessmaterial_property_turbulence_initial_displacement_min"></div>

[`float`](class_float.md) **turbulence_initial_displacement_min** = ``0.0`` <div id="class_particleprocessmaterial_property_turbulence_initial_displacement_min"></div>

- `void` **set_param_min** ( param: [Parameter](#enum_particleprocessmaterial_parameter), value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_param_min** ( param: [Parameter](#enum_particleprocessmaterial_parameter) ) const[^const]

Minimum displacement of each particle's spawn position by the turbulence.

The actual amount of displacement will be a factor of the underlying turbulence multiplied by a random value between [`turbulence_initial_displacement_min`](class_particleprocessmaterial.md#class_particleprocessmaterial_property_turbulence_initial_displacement_min) and [`turbulence_initial_displacement_max`](class_particleprocessmaterial.md#class_particleprocessmaterial_property_turbulence_initial_displacement_max).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_particleprocessmaterial_property_turbulence_noise_scale"></div>

[`float`](class_float.md) **turbulence_noise_scale** = ``9.0`` <div id="class_particleprocessmaterial_property_turbulence_noise_scale"></div>

- `void` **set_turbulence_noise_scale** ( value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_turbulence_noise_scale** ( )

This value controls the overall scale/frequency of the turbulence noise pattern.

A small scale will result in smaller features with more detail while a high scale will result in smoother noise with larger features.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_particleprocessmaterial_property_turbulence_noise_speed"></div>

[`Vector3`](class_vector3.md) **turbulence_noise_speed** = ``Vector3(0, 0, 0)`` <div id="class_particleprocessmaterial_property_turbulence_noise_speed"></div>

- `void` **set_turbulence_noise_speed** ( value: [`Vector3`](class_vector3.md) )
- [`Vector3`](class_vector3.md) **get_turbulence_noise_speed** ( )

A scrolling velocity for the turbulence field. This sets a directional trend for the pattern to move in over time.

The default value of `Vector3(0, 0, 0)` turns off the scrolling.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_particleprocessmaterial_property_turbulence_noise_speed_random"></div>

[`float`](class_float.md) **turbulence_noise_speed_random** = ``0.2`` <div id="class_particleprocessmaterial_property_turbulence_noise_speed_random"></div>

- `void` **set_turbulence_noise_speed_random** ( value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_turbulence_noise_speed_random** ( )

The in-place rate of change of the turbulence field. This defines how quickly the noise pattern varies over time.

A value of 0.0 will result in a fixed pattern.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_particleprocessmaterial_property_turbulence_noise_strength"></div>

[`float`](class_float.md) **turbulence_noise_strength** = ``1.0`` <div id="class_particleprocessmaterial_property_turbulence_noise_strength"></div>

- `void` **set_turbulence_noise_strength** ( value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_turbulence_noise_strength** ( )

The turbulence noise strength. Increasing this will result in a stronger, more contrasting, flow pattern.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_particleprocessmaterial_property_velocity_limit_curve"></div>

[`Texture2D`](class_texture2d.md) **velocity_limit_curve** <div id="class_particleprocessmaterial_property_velocity_limit_curve"></div>

- `void` **set_velocity_limit_curve** ( value: [`Texture2D`](class_texture2d.md) )
- [`Texture2D`](class_texture2d.md) **get_velocity_limit_curve** ( )

A [`CurveTexture`](class_curvetexture.md) that defines the maximum velocity of a particle during its lifetime.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_particleprocessmaterial_property_velocity_pivot"></div>

[`Vector3`](class_vector3.md) **velocity_pivot** = ``Vector3(0, 0, 0)`` <div id="class_particleprocessmaterial_property_velocity_pivot"></div>

- `void` **set_velocity_pivot** ( value: [`Vector3`](class_vector3.md) )
- [`Vector3`](class_vector3.md) **get_velocity_pivot** ( )

A pivot point used to calculate radial and orbital velocity of particles.

<!-- rst-class:: classref-section-separator -->

---

## 方法说明

<div id="_class_particleprocessmaterial_method_get_param"></div>

[`Vector2`](class_vector2.md) **get_param** ( param: [Parameter](#enum_particleprocessmaterial_parameter) ) const[^const]<div id="class_particleprocessmaterial_method_get_param"></div>

Returns the minimum and maximum values of the given `param` as a vector.

The `x` component of the returned vector corresponds to minimum and the `y` component corresponds to maximum.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_particleprocessmaterial_method_get_param_max"></div>

[`float`](class_float.md) **get_param_max** ( param: [Parameter](#enum_particleprocessmaterial_parameter) ) const[^const]<div id="class_particleprocessmaterial_method_get_param_max"></div>

Returns the maximum value range for the given parameter.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_particleprocessmaterial_method_get_param_min"></div>

[`float`](class_float.md) **get_param_min** ( param: [Parameter](#enum_particleprocessmaterial_parameter) ) const[^const]<div id="class_particleprocessmaterial_method_get_param_min"></div>

Returns the minimum value range for the given parameter.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_particleprocessmaterial_method_get_param_texture"></div>

[`Texture2D`](class_texture2d.md) **get_param_texture** ( param: [Parameter](#enum_particleprocessmaterial_parameter) ) const[^const]<div id="class_particleprocessmaterial_method_get_param_texture"></div>

Returns the [`Texture2D`](class_texture2d.md) used by the specified parameter.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_particleprocessmaterial_method_get_particle_flag"></div>

[`bool`](class_bool.md) **get_particle_flag** ( particle_flag: [ParticleFlags](#enum_particleprocessmaterial_particleflags) ) const[^const]<div id="class_particleprocessmaterial_method_get_particle_flag"></div>

Returns `true` if the specified particle flag is enabled. See [ParticleFlags](#enum_particleprocessmaterial_particleflags) for options.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_particleprocessmaterial_method_set_param"></div>

`void` **set_param** ( param: [Parameter](#enum_particleprocessmaterial_parameter), value: [`Vector2`](class_vector2.md) )<div id="class_particleprocessmaterial_method_set_param"></div>

Sets the minimum and maximum values of the given `param`.

The `x` component of the argument vector corresponds to minimum and the `y` component corresponds to maximum.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_particleprocessmaterial_method_set_param_max"></div>

`void` **set_param_max** ( param: [Parameter](#enum_particleprocessmaterial_parameter), value: [`float`](class_float.md) )<div id="class_particleprocessmaterial_method_set_param_max"></div>

Sets the maximum value range for the given parameter.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_particleprocessmaterial_method_set_param_min"></div>

`void` **set_param_min** ( param: [Parameter](#enum_particleprocessmaterial_parameter), value: [`float`](class_float.md) )<div id="class_particleprocessmaterial_method_set_param_min"></div>

Sets the minimum value range for the given parameter.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_particleprocessmaterial_method_set_param_texture"></div>

`void` **set_param_texture** ( param: [Parameter](#enum_particleprocessmaterial_parameter), texture: [`Texture2D`](class_texture2d.md) )<div id="class_particleprocessmaterial_method_set_param_texture"></div>

Sets the [`Texture2D`](class_texture2d.md) for the specified [Parameter](#enum_particleprocessmaterial_parameter).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_particleprocessmaterial_method_set_particle_flag"></div>

`void` **set_particle_flag** ( particle_flag: [ParticleFlags](#enum_particleprocessmaterial_particleflags), enable: [`bool`](class_bool.md) )<div id="class_particleprocessmaterial_method_set_particle_flag"></div>

If `true`, enables the specified particle flag. See [ParticleFlags](#enum_particleprocessmaterial_particleflags) for options.

[^virtual]: 本方法通常需要用户覆盖才能生效。
[^const]: 本方法无副作用，不会修改该实例的任何成员变量。
[^vararg]: 本方法除了能接受在此处描述的参数外，还能够继续接受任意数量的参数。
[^constructor]: 本方法用于构造某个类型。
[^static]: 调用本方法无需实例，可直接使用类名进行调用。
[^operator]: 本方法描述的是使用本类型作为左操作数的有效运算符。
[^bitfield]: 这个值是由下列位标志构成位掩码的整数。
[^void]: 无返回值。
