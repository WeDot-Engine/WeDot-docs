<!-- ⚠ 请勿编辑本文件 ⚠ -->
<!-- 本文档使用脚本从 WeDot 引擎源码仓库生成。 -->
<!-- 生成脚本：https://github.com/WeDot-Engine/WeDot/tree/master/doc/tools/make_md.py； -->
<!-- 原文件：https://github.com/WeDot-Engine/WeDot/tree/master/doc/classes/GPUParticles2D.xml。 -->

<div id="_class_gpuparticles2d"></div>

# GPUParticles2D

**继承：** [`Node2D`](class_node2d.md) **<** [`CanvasItem`](class_canvasitem.md) **<** [`Node`](class_node.md) **<** [`Object`](class_object.md)

A 2D particle emitter.

## 描述

2D particle node used to create a variety of particle systems and effects. **GPUParticles2D** features an emitter that generates some number of particles at a given rate.

Use the [`process_material`](class_gpuparticles2d.md#class_gpuparticles2d_property_process_material) property to add a [`ParticleProcessMaterial`](class_particleprocessmaterial.md) to configure particle appearance and behavior. Alternatively, you can add a [`ShaderMaterial`](class_shadermaterial.md) which will be applied to all particles.

2D particles can optionally collide with [`LightOccluder2D`](class_lightoccluder2d.md), but they don't collide with [`PhysicsBody2D`](class_physicsbody2d.md) nodes.

## 属性

|||
|:-:|:--|
| [`int`](class_int.md)                       | [`amount`](class_gpuparticles2d.md#class_gpuparticles2d_property_amount)                                         | ``8``                           |
| [`float`](class_float.md)                   | [`amount_ratio`](class_gpuparticles2d.md#class_gpuparticles2d_property_amount_ratio)                             | ``1.0``                         |
| [`float`](class_float.md)                   | [`collision_base_size`](class_gpuparticles2d.md#class_gpuparticles2d_property_collision_base_size)               | ``1.0``                         |
| [DrawOrder](#enum_gpuparticles2d_draworder) | [`draw_order`](class_gpuparticles2d.md#class_gpuparticles2d_property_draw_order)                                 | ``1``                           |
| [`bool`](class_bool.md)                     | [`emitting`](class_gpuparticles2d.md#class_gpuparticles2d_property_emitting)                                     | ``true``                        |
| [`float`](class_float.md)                   | [`explosiveness`](class_gpuparticles2d.md#class_gpuparticles2d_property_explosiveness)                           | ``0.0``                         |
| [`int`](class_int.md)                       | [`fixed_fps`](class_gpuparticles2d.md#class_gpuparticles2d_property_fixed_fps)                                   | ``30``                          |
| [`bool`](class_bool.md)                     | [`fract_delta`](class_gpuparticles2d.md#class_gpuparticles2d_property_fract_delta)                               | ``true``                        |
| [`float`](class_float.md)                   | [`interp_to_end`](class_gpuparticles2d.md#class_gpuparticles2d_property_interp_to_end)                           | ``0.0``                         |
| [`bool`](class_bool.md)                     | [`interpolate`](class_gpuparticles2d.md#class_gpuparticles2d_property_interpolate)                               | ``true``                        |
| [`float`](class_float.md)                   | [`lifetime`](class_gpuparticles2d.md#class_gpuparticles2d_property_lifetime)                                     | ``1.0``                         |
| [`bool`](class_bool.md)                     | [`local_coords`](class_gpuparticles2d.md#class_gpuparticles2d_property_local_coords)                             | ``false``                       |
| [`bool`](class_bool.md)                     | [`one_shot`](class_gpuparticles2d.md#class_gpuparticles2d_property_one_shot)                                     | ``false``                       |
| [`float`](class_float.md)                   | [`preprocess`](class_gpuparticles2d.md#class_gpuparticles2d_property_preprocess)                                 | ``0.0``                         |
| [`Material`](class_material.md)             | [`process_material`](class_gpuparticles2d.md#class_gpuparticles2d_property_process_material)                     |                                 |
| [`float`](class_float.md)                   | [`randomness`](class_gpuparticles2d.md#class_gpuparticles2d_property_randomness)                                 | ``0.0``                         |
| [`float`](class_float.md)                   | [`speed_scale`](class_gpuparticles2d.md#class_gpuparticles2d_property_speed_scale)                               | ``1.0``                         |
| [`NodePath`](class_nodepath.md)             | [`sub_emitter`](class_gpuparticles2d.md#class_gpuparticles2d_property_sub_emitter)                               | ``NodePath("")``                |
| [`Texture2D`](class_texture2d.md)           | [`texture`](class_gpuparticles2d.md#class_gpuparticles2d_property_texture)                                       |                                 |
| [`bool`](class_bool.md)                     | [`trail_enabled`](class_gpuparticles2d.md#class_gpuparticles2d_property_trail_enabled)                           | ``false``                       |
| [`float`](class_float.md)                   | [`trail_lifetime`](class_gpuparticles2d.md#class_gpuparticles2d_property_trail_lifetime)                         | ``0.3``                         |
| [`int`](class_int.md)                       | [`trail_section_subdivisions`](class_gpuparticles2d.md#class_gpuparticles2d_property_trail_section_subdivisions) | ``4``                           |
| [`int`](class_int.md)                       | [`trail_sections`](class_gpuparticles2d.md#class_gpuparticles2d_property_trail_sections)                         | ``8``                           |
| [`Rect2`](class_rect2.md)                   | [`visibility_rect`](class_gpuparticles2d.md#class_gpuparticles2d_property_visibility_rect)                       | ``Rect2(-100, -100, 200, 200)`` |

## 方法

|||
|:-:|:--|
| [`Rect2`](class_rect2.md) | [`capture_rect`](class_gpuparticles2d.md#class_gpuparticles2d_method_capture_rect) ( ) const[^const]                                                                                                                                                                              |
| `void`                    | [`convert_from_particles`](class_gpuparticles2d.md#class_gpuparticles2d_method_convert_from_particles) ( particles: [`Node`](class_node.md) )                                                                                                                                     |
| `void`                    | [`emit_particle`](class_gpuparticles2d.md#class_gpuparticles2d_method_emit_particle) ( xform: [`Transform2D`](class_transform2d.md), velocity: [`Vector2`](class_vector2.md), color: [`Color`](class_color.md), custom: [`Color`](class_color.md), flags: [`int`](class_int.md) ) |
| `void`                    | [`restart`](class_gpuparticles2d.md#class_gpuparticles2d_method_restart) ( )                                                                                                                                                                                                      |

<!-- rst-class:: classref-section-separator -->

---

## 信号

<div id="_class_class_gpuparticles2d_signal_finished"></div>

**finished** ( ) <div id="class_gpuparticles2d_signal_finished"></div>

Emitted when all active particles have finished processing. To immediately restart the emission cycle, call [`restart`](class_gpuparticles2d.md#class_gpuparticles2d_method_restart).

Never emitted when [`one_shot`](class_gpuparticles2d.md#class_gpuparticles2d_property_one_shot) is disabled, as particles will be emitted and processed continuously.

 **Note:** For [`one_shot`](class_gpuparticles2d.md#class_gpuparticles2d_property_one_shot) emitters, due to the particles being computed on the GPU, there may be a short period after receiving the signal during which setting [`emitting`](class_gpuparticles2d.md#class_gpuparticles2d_property_emitting) to `true` will not restart the emission cycle. This delay is avoided by instead calling [`restart`](class_gpuparticles2d.md#class_gpuparticles2d_method_restart).

<!-- rst-class:: classref-section-separator -->

---

## 枚举

<div id="_class_enum_gpuparticles2d_draworder"></div>

enum **DrawOrder**: <div id="enum_gpuparticles2d_draworder"></div>

<div id="_class_gpuparticles2d_constant_draw_order_index"></div>

[DrawOrder](#enum_gpuparticles2d_draworder) **DRAW_ORDER_INDEX** = ``0``

Particles are drawn in the order emitted.

<div id="_class_gpuparticles2d_constant_draw_order_lifetime"></div>

[DrawOrder](#enum_gpuparticles2d_draworder) **DRAW_ORDER_LIFETIME** = ``1``

Particles are drawn in order of remaining lifetime. In other words, the particle with the highest lifetime is drawn at the front.

<div id="_class_gpuparticles2d_constant_draw_order_reverse_lifetime"></div>

[DrawOrder](#enum_gpuparticles2d_draworder) **DRAW_ORDER_REVERSE_LIFETIME** = ``2``

Particles are drawn in reverse order of remaining lifetime. In other words, the particle with the lowest lifetime is drawn at the front.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_enum_gpuparticles2d_emitflags"></div>

enum **EmitFlags**: <div id="enum_gpuparticles2d_emitflags"></div>

<div id="_class_gpuparticles2d_constant_emit_flag_position"></div>

[EmitFlags](#enum_gpuparticles2d_emitflags) **EMIT_FLAG_POSITION** = ``1``

Particle starts at the specified position.

<div id="_class_gpuparticles2d_constant_emit_flag_rotation_scale"></div>

[EmitFlags](#enum_gpuparticles2d_emitflags) **EMIT_FLAG_ROTATION_SCALE** = ``2``

Particle starts with specified rotation and scale.

<div id="_class_gpuparticles2d_constant_emit_flag_velocity"></div>

[EmitFlags](#enum_gpuparticles2d_emitflags) **EMIT_FLAG_VELOCITY** = ``4``

Particle starts with the specified velocity vector, which defines the emission direction and speed.

<div id="_class_gpuparticles2d_constant_emit_flag_color"></div>

[EmitFlags](#enum_gpuparticles2d_emitflags) **EMIT_FLAG_COLOR** = ``8``

Particle starts with specified color.

<div id="_class_gpuparticles2d_constant_emit_flag_custom"></div>

[EmitFlags](#enum_gpuparticles2d_emitflags) **EMIT_FLAG_CUSTOM** = ``16``

Particle starts with specified `CUSTOM` data.

<!-- rst-class:: classref-section-separator -->

---

## 属性说明

<div id="_class_gpuparticles2d_property_amount"></div>

[`int`](class_int.md) **amount** = ``8`` <div id="class_gpuparticles2d_property_amount"></div>

- `void` **set_amount** ( value: [`int`](class_int.md) )
- [`int`](class_int.md) **get_amount** ( )

The number of particles to emit in one emission cycle. The effective emission rate is `(amount * amount_ratio) / lifetime` particles per second. Higher values will increase GPU requirements, even if not all particles are visible at a given time or if [`amount_ratio`](class_gpuparticles2d.md#class_gpuparticles2d_property_amount_ratio) is decreased.

 **Note:** Changing this value will cause the particle system to restart. To avoid this, change [`amount_ratio`](class_gpuparticles2d.md#class_gpuparticles2d_property_amount_ratio) instead.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_gpuparticles2d_property_amount_ratio"></div>

[`float`](class_float.md) **amount_ratio** = ``1.0`` <div id="class_gpuparticles2d_property_amount_ratio"></div>

- `void` **set_amount_ratio** ( value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_amount_ratio** ( )

The ratio of particles that should actually be emitted. If set to a value lower than `1.0`, this will set the amount of emitted particles throughout the lifetime to `amount * amount_ratio`. Unlike changing [`amount`](class_gpuparticles2d.md#class_gpuparticles2d_property_amount), changing [`amount_ratio`](class_gpuparticles2d.md#class_gpuparticles2d_property_amount_ratio) while emitting does not affect already-emitted particles and doesn't cause the particle system to restart. [`amount_ratio`](class_gpuparticles2d.md#class_gpuparticles2d_property_amount_ratio) can be used to create effects that make the number of emitted particles vary over time.

 **Note:** Reducing the [`amount_ratio`](class_gpuparticles2d.md#class_gpuparticles2d_property_amount_ratio) has no performance benefit, since resources need to be allocated and processed for the total [`amount`](class_gpuparticles2d.md#class_gpuparticles2d_property_amount) of particles regardless of the [`amount_ratio`](class_gpuparticles2d.md#class_gpuparticles2d_property_amount_ratio). If you don't intend to change the number of particles emitted while the particles are emitting, make sure [`amount_ratio`](class_gpuparticles2d.md#class_gpuparticles2d_property_amount_ratio) is set to `1` and change [`amount`](class_gpuparticles2d.md#class_gpuparticles2d_property_amount) to your liking instead.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_gpuparticles2d_property_collision_base_size"></div>

[`float`](class_float.md) **collision_base_size** = ``1.0`` <div id="class_gpuparticles2d_property_collision_base_size"></div>

- `void` **set_collision_base_size** ( value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_collision_base_size** ( )

Multiplier for particle's collision radius. `1.0` corresponds to the size of the sprite. If particles appear to sink into the ground when colliding, increase this value. If particles appear to float when colliding, decrease this value. Only effective if [`ParticleProcessMaterial.collision_mode`](class_particleprocessmaterial.md#class_particleprocessmaterial_property_collision_mode) is [`ParticleProcessMaterial.COLLISION_RIGID`](class_particleprocessmaterial.md#class_particleprocessmaterial_constant_collision_rigid) or [`ParticleProcessMaterial.COLLISION_HIDE_ON_CONTACT`](class_particleprocessmaterial.md#class_particleprocessmaterial_constant_collision_hide_on_contact).

 **Note:** Particles always have a spherical collision shape.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_gpuparticles2d_property_draw_order"></div>

[DrawOrder](#enum_gpuparticles2d_draworder) **draw_order** = ``1`` <div id="class_gpuparticles2d_property_draw_order"></div>

- `void` **set_draw_order** ( value: [DrawOrder](#enum_gpuparticles2d_draworder) )
- [DrawOrder](#enum_gpuparticles2d_draworder) **get_draw_order** ( )

Particle draw order. Uses [DrawOrder](#enum_gpuparticles2d_draworder) values.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_gpuparticles2d_property_emitting"></div>

[`bool`](class_bool.md) **emitting** = ``true`` <div id="class_gpuparticles2d_property_emitting"></div>

- `void` **set_emitting** ( value: [`bool`](class_bool.md) )
- [`bool`](class_bool.md) **is_emitting** ( )

If `true`, particles are being emitted. [`emitting`](class_gpuparticles2d.md#class_gpuparticles2d_property_emitting) can be used to start and stop particles from emitting. However, if [`one_shot`](class_gpuparticles2d.md#class_gpuparticles2d_property_one_shot) is `true` setting [`emitting`](class_gpuparticles2d.md#class_gpuparticles2d_property_emitting) to `true` will not restart the emission cycle unless all active particles have finished processing. Use the [`finished`](class_gpuparticles2d.md#class_gpuparticles2d_signal_finished) signal to be notified once all active particles finish processing.

 **Note:** For [`one_shot`](class_gpuparticles2d.md#class_gpuparticles2d_property_one_shot) emitters, due to the particles being computed on the GPU, there may be a short period after receiving the [`finished`](class_gpuparticles2d.md#class_gpuparticles2d_signal_finished) signal during which setting this to `true` will not restart the emission cycle.

 **Tip:** If your [`one_shot`](class_gpuparticles2d.md#class_gpuparticles2d_property_one_shot) emitter needs to immediately restart emitting particles once [`finished`](class_gpuparticles2d.md#class_gpuparticles2d_signal_finished) signal is received, consider calling [`restart`](class_gpuparticles2d.md#class_gpuparticles2d_method_restart) instead of setting [`emitting`](class_gpuparticles2d.md#class_gpuparticles2d_property_emitting).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_gpuparticles2d_property_explosiveness"></div>

[`float`](class_float.md) **explosiveness** = ``0.0`` <div id="class_gpuparticles2d_property_explosiveness"></div>

- `void` **set_explosiveness_ratio** ( value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_explosiveness_ratio** ( )

How rapidly particles in an emission cycle are emitted. If greater than `0`, there will be a gap in emissions before the next cycle begins.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_gpuparticles2d_property_fixed_fps"></div>

[`int`](class_int.md) **fixed_fps** = ``30`` <div id="class_gpuparticles2d_property_fixed_fps"></div>

- `void` **set_fixed_fps** ( value: [`int`](class_int.md) )
- [`int`](class_int.md) **get_fixed_fps** ( )

The particle system's frame rate is fixed to a value. For example, changing the value to 2 will make the particles render at 2 frames per second. Note this does not slow down the simulation of the particle system itself.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_gpuparticles2d_property_fract_delta"></div>

[`bool`](class_bool.md) **fract_delta** = ``true`` <div id="class_gpuparticles2d_property_fract_delta"></div>

- `void` **set_fractional_delta** ( value: [`bool`](class_bool.md) )
- [`bool`](class_bool.md) **get_fractional_delta** ( )

If `true`, results in fractional delta calculation which has a smoother particles display effect.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_gpuparticles2d_property_interp_to_end"></div>

[`float`](class_float.md) **interp_to_end** = ``0.0`` <div id="class_gpuparticles2d_property_interp_to_end"></div>

- `void` **set_interp_to_end** ( value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_interp_to_end** ( )

Causes all the particles in this node to interpolate towards the end of their lifetime.

 **Note:** This only works when used with a [`ParticleProcessMaterial`](class_particleprocessmaterial.md). It needs to be manually implemented for custom process shaders.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_gpuparticles2d_property_interpolate"></div>

[`bool`](class_bool.md) **interpolate** = ``true`` <div id="class_gpuparticles2d_property_interpolate"></div>

- `void` **set_interpolate** ( value: [`bool`](class_bool.md) )
- [`bool`](class_bool.md) **get_interpolate** ( )

Enables particle interpolation, which makes the particle movement smoother when their [`fixed_fps`](class_gpuparticles2d.md#class_gpuparticles2d_property_fixed_fps) is lower than the screen refresh rate.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_gpuparticles2d_property_lifetime"></div>

[`float`](class_float.md) **lifetime** = ``1.0`` <div id="class_gpuparticles2d_property_lifetime"></div>

- `void` **set_lifetime** ( value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_lifetime** ( )

The amount of time each particle will exist (in seconds). The effective emission rate is `(amount * amount_ratio) / lifetime` particles per second.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_gpuparticles2d_property_local_coords"></div>

[`bool`](class_bool.md) **local_coords** = ``false`` <div id="class_gpuparticles2d_property_local_coords"></div>

- `void` **set_use_local_coordinates** ( value: [`bool`](class_bool.md) )
- [`bool`](class_bool.md) **get_use_local_coordinates** ( )

If `true`, particles use the parent node's coordinate space (known as local coordinates). This will cause particles to move and rotate along the **GPUParticles2D** node (and its parents) when it is moved or rotated. If `false`, particles use global coordinates; they will not move or rotate along the **GPUParticles2D** node (and its parents) when it is moved or rotated.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_gpuparticles2d_property_one_shot"></div>

[`bool`](class_bool.md) **one_shot** = ``false`` <div id="class_gpuparticles2d_property_one_shot"></div>

- `void` **set_one_shot** ( value: [`bool`](class_bool.md) )
- [`bool`](class_bool.md) **get_one_shot** ( )

If `true`, only one emission cycle occurs. If set `true` during a cycle, emission will stop at the cycle's end.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_gpuparticles2d_property_preprocess"></div>

[`float`](class_float.md) **preprocess** = ``0.0`` <div id="class_gpuparticles2d_property_preprocess"></div>

- `void` **set_pre_process_time** ( value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_pre_process_time** ( )

Particle system starts as if it had already run for this many seconds.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_gpuparticles2d_property_process_material"></div>

[`Material`](class_material.md) **process_material** <div id="class_gpuparticles2d_property_process_material"></div>

- `void` **set_process_material** ( value: [`Material`](class_material.md) )
- [`Material`](class_material.md) **get_process_material** ( )

[`Material`](class_material.md) for processing particles. Can be a [`ParticleProcessMaterial`](class_particleprocessmaterial.md) or a [`ShaderMaterial`](class_shadermaterial.md).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_gpuparticles2d_property_randomness"></div>

[`float`](class_float.md) **randomness** = ``0.0`` <div id="class_gpuparticles2d_property_randomness"></div>

- `void` **set_randomness_ratio** ( value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_randomness_ratio** ( )

Emission lifetime randomness ratio.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_gpuparticles2d_property_speed_scale"></div>

[`float`](class_float.md) **speed_scale** = ``1.0`` <div id="class_gpuparticles2d_property_speed_scale"></div>

- `void` **set_speed_scale** ( value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_speed_scale** ( )

Particle system's running speed scaling ratio. A value of `0` can be used to pause the particles.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_gpuparticles2d_property_sub_emitter"></div>

[`NodePath`](class_nodepath.md) **sub_emitter** = ``NodePath("")`` <div id="class_gpuparticles2d_property_sub_emitter"></div>

- `void` **set_sub_emitter** ( value: [`NodePath`](class_nodepath.md) )
- [`NodePath`](class_nodepath.md) **get_sub_emitter** ( )

Path to another **GPUParticles2D** node that will be used as a subemitter (see [`ParticleProcessMaterial.sub_emitter_mode`](class_particleprocessmaterial.md#class_particleprocessmaterial_property_sub_emitter_mode)). Subemitters can be used to achieve effects such as fireworks, sparks on collision, bubbles popping into water drops, and more.

 **Note:** When [`sub_emitter`](class_gpuparticles2d.md#class_gpuparticles2d_property_sub_emitter) is set, the target **GPUParticles2D** node will no longer emit particles on its own.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_gpuparticles2d_property_texture"></div>

[`Texture2D`](class_texture2d.md) **texture** <div id="class_gpuparticles2d_property_texture"></div>

- `void` **set_texture** ( value: [`Texture2D`](class_texture2d.md) )
- [`Texture2D`](class_texture2d.md) **get_texture** ( )

Particle texture. If `null`, particles will be squares with a size of 1×1 pixels.

 **Note:** To use a flipbook texture, assign a new [`CanvasItemMaterial`](class_canvasitemmaterial.md) to the **GPUParticles2D**'s [`CanvasItem.material`](class_canvasitem.md#class_canvasitem_property_material) property, then enable [`CanvasItemMaterial.particles_animation`](class_canvasitemmaterial.md#class_canvasitemmaterial_property_particles_animation) and set [`CanvasItemMaterial.particles_anim_h_frames`](class_canvasitemmaterial.md#class_canvasitemmaterial_property_particles_anim_h_frames), [`CanvasItemMaterial.particles_anim_v_frames`](class_canvasitemmaterial.md#class_canvasitemmaterial_property_particles_anim_v_frames), and [`CanvasItemMaterial.particles_anim_loop`](class_canvasitemmaterial.md#class_canvasitemmaterial_property_particles_anim_loop) to match the flipbook texture.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_gpuparticles2d_property_trail_enabled"></div>

[`bool`](class_bool.md) **trail_enabled** = ``false`` <div id="class_gpuparticles2d_property_trail_enabled"></div>

- `void` **set_trail_enabled** ( value: [`bool`](class_bool.md) )
- [`bool`](class_bool.md) **is_trail_enabled** ( )

If `true`, enables particle trails using a mesh skinning system.

 **Note:** Unlike [`GPUParticles3D`](class_gpuparticles3d.md), the number of trail sections and subdivisions is set with the [`trail_sections`](class_gpuparticles2d.md#class_gpuparticles2d_property_trail_sections) and [`trail_section_subdivisions`](class_gpuparticles2d.md#class_gpuparticles2d_property_trail_section_subdivisions) properties.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_gpuparticles2d_property_trail_lifetime"></div>

[`float`](class_float.md) **trail_lifetime** = ``0.3`` <div id="class_gpuparticles2d_property_trail_lifetime"></div>

- `void` **set_trail_lifetime** ( value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_trail_lifetime** ( )

The amount of time the particle's trail should represent (in seconds). Only effective if [`trail_enabled`](class_gpuparticles2d.md#class_gpuparticles2d_property_trail_enabled) is `true`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_gpuparticles2d_property_trail_section_subdivisions"></div>

[`int`](class_int.md) **trail_section_subdivisions** = ``4`` <div id="class_gpuparticles2d_property_trail_section_subdivisions"></div>

- `void` **set_trail_section_subdivisions** ( value: [`int`](class_int.md) )
- [`int`](class_int.md) **get_trail_section_subdivisions** ( )

The number of subdivisions to use for the particle trail rendering. Higher values can result in smoother trail curves, at the cost of performance due to increased mesh complexity. See also [`trail_sections`](class_gpuparticles2d.md#class_gpuparticles2d_property_trail_sections). Only effective if [`trail_enabled`](class_gpuparticles2d.md#class_gpuparticles2d_property_trail_enabled) is `true`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_gpuparticles2d_property_trail_sections"></div>

[`int`](class_int.md) **trail_sections** = ``8`` <div id="class_gpuparticles2d_property_trail_sections"></div>

- `void` **set_trail_sections** ( value: [`int`](class_int.md) )
- [`int`](class_int.md) **get_trail_sections** ( )

The number of sections to use for the particle trail rendering. Higher values can result in smoother trail curves, at the cost of performance due to increased mesh complexity. See also [`trail_section_subdivisions`](class_gpuparticles2d.md#class_gpuparticles2d_property_trail_section_subdivisions). Only effective if [`trail_enabled`](class_gpuparticles2d.md#class_gpuparticles2d_property_trail_enabled) is `true`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_gpuparticles2d_property_visibility_rect"></div>

[`Rect2`](class_rect2.md) **visibility_rect** = ``Rect2(-100, -100, 200, 200)`` <div id="class_gpuparticles2d_property_visibility_rect"></div>

- `void` **set_visibility_rect** ( value: [`Rect2`](class_rect2.md) )
- [`Rect2`](class_rect2.md) **get_visibility_rect** ( )

The [`Rect2`](class_rect2.md) that determines the node's region which needs to be visible on screen for the particle system to be active.

Grow the rect if particles suddenly appear/disappear when the node enters/exits the screen. The [`Rect2`](class_rect2.md) can be grown via code or with the **Particles → Generate Visibility Rect** editor tool.

<!-- rst-class:: classref-section-separator -->

---

## 方法说明

<div id="_class_gpuparticles2d_method_capture_rect"></div>

[`Rect2`](class_rect2.md) **capture_rect** ( ) const[^const]<div id="class_gpuparticles2d_method_capture_rect"></div>

Returns a rectangle containing the positions of all existing particles.

 **Note:** When using threaded rendering this method synchronizes the rendering thread. Calling it often may have a negative impact on performance.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_gpuparticles2d_method_convert_from_particles"></div>

`void` **convert_from_particles** ( particles: [`Node`](class_node.md) )<div id="class_gpuparticles2d_method_convert_from_particles"></div>

Sets this node's properties to match a given [`CPUParticles2D`](class_cpuparticles2d.md) node.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_gpuparticles2d_method_emit_particle"></div>

`void` **emit_particle** ( xform: [`Transform2D`](class_transform2d.md), velocity: [`Vector2`](class_vector2.md), color: [`Color`](class_color.md), custom: [`Color`](class_color.md), flags: [`int`](class_int.md) )<div id="class_gpuparticles2d_method_emit_particle"></div>

Emits a single particle. Whether `xform`, `velocity`, `color` and `custom` are applied depends on the value of `flags`. See [EmitFlags](#enum_gpuparticles2d_emitflags).

The default ParticleProcessMaterial will overwrite `color` and use the contents of `custom` as `(rotation, age, animation, lifetime)`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_gpuparticles2d_method_restart"></div>

`void` **restart** ( )<div id="class_gpuparticles2d_method_restart"></div>

Restarts the particle emission cycle, clearing existing particles. To avoid particles vanishing from the viewport, wait for the [`finished`](class_gpuparticles2d.md#class_gpuparticles2d_signal_finished) signal before calling.

 **Note:** The [`finished`](class_gpuparticles2d.md#class_gpuparticles2d_signal_finished) signal is only emitted by [`one_shot`](class_gpuparticles2d.md#class_gpuparticles2d_property_one_shot) emitters.

[^virtual]: 本方法通常需要用户覆盖才能生效。
[^const]: 本方法无副作用，不会修改该实例的任何成员变量。
[^vararg]: 本方法除了能接受在此处描述的参数外，还能够继续接受任意数量的参数。
[^constructor]: 本方法用于构造某个类型。
[^static]: 调用本方法无需实例，可直接使用类名进行调用。
[^operator]: 本方法描述的是使用本类型作为左操作数的有效运算符。
[^bitfield]: 这个值是由下列位标志构成位掩码的整数。
[^void]: 无返回值。
