<!-- ⚠ 请勿编辑本文件 ⚠ -->
<!-- 本文档使用脚本从 WeDot 引擎源码仓库生成。 -->
<!-- 生成脚本：https://github.com/WeDot-Engine/WeDot/tree/4.3/doc/tools/make_md.py； -->
<!-- 原文件：https://github.com/WeDot-Engine/WeDot/tree/4.3/doc/classes/GPUParticlesCollisionHeightField3D.xml。 -->

<div id="_class_gpuparticlescollisionheightfield3d"></div>

# GPUParticlesCollisionHeightField3D

**继承：** [`GPUParticlesCollision3D`](class_gpuparticlescollision3d.md) **<** [`VisualInstance3D`](class_visualinstance3d.md) **<** [`Node3D`](class_node3d.md) **<** [`Node`](class_node.md) **<** [`Object`](class_object.md)

A real-time heightmap-shaped 3D particle collision shape affecting [`GPUParticles3D`](class_gpuparticles3d.md) nodes.

## 描述

A real-time heightmap-shaped 3D particle collision shape affecting [`GPUParticles3D`](class_gpuparticles3d.md) nodes.

Heightmap shapes allow for efficiently representing collisions for convex and concave objects with a single "floor" (such as terrain). This is less flexible than [`GPUParticlesCollisionSDF3D`](class_gpuparticlescollisionsdf3d.md), but it doesn't require a baking step.

 **GPUParticlesCollisionHeightField3D** can also be regenerated in real-time when it is moved, when the camera moves, or even continuously. This makes **GPUParticlesCollisionHeightField3D** a good choice for weather effects such as rain and snow and games with highly dynamic geometry. However, this class is limited since heightmaps cannot represent overhangs (e.g. indoors or caves).

 **Note:** [`ParticleProcessMaterial.collision_mode`](#class_particleprocessmaterial_property_collision_mode) must be `true` on the [`GPUParticles3D`](class_gpuparticles3d.md)'s process material for collision to work.

 **Note:** Particle collision only affects [`GPUParticles3D`](class_gpuparticles3d.md), not [`CPUParticles3D`](class_cpuparticles3d.md).

## 属性

| [`bool`](class_bool.md)                                           | [`follow_camera_enabled`](#class_gpuparticlescollisionheightfield3d_property_follow_camera_enabled) | ``false``            |
| [Resolution](#enum_gpuparticlescollisionheightfield3d_resolution) | [`resolution`](#class_gpuparticlescollisionheightfield3d_property_resolution)                       | ``2``                |
| [`Vector3`](class_vector3.md)                                     | [`size`](#class_gpuparticlescollisionheightfield3d_property_size)                                   | ``Vector3(2, 2, 2)`` |
| [UpdateMode](#enum_gpuparticlescollisionheightfield3d_updatemode) | [`update_mode`](#class_gpuparticlescollisionheightfield3d_property_update_mode)                     | ``0``                |

<!-- rst-class:: classref-section-separator -->

---

## 枚举

<div id="_class_enum_gpuparticlescollisionheightfield3d_resolution"></div>

enum **Resolution**: <div id="enum_gpuparticlescollisionheightfield3d_resolution"></div>

<div id="_class_gpuparticlescollisionheightfield3d_constant_resolution_256"></div>

[Resolution](#enum_gpuparticlescollisionheightfield3d_resolution) **RESOLUTION_256** = ``0``

Generate a 256×256 heightmap. Intended for small-scale scenes, or larger scenes with no distant particles.

<div id="_class_gpuparticlescollisionheightfield3d_constant_resolution_512"></div>

[Resolution](#enum_gpuparticlescollisionheightfield3d_resolution) **RESOLUTION_512** = ``1``

Generate a 512×512 heightmap. Intended for medium-scale scenes, or larger scenes with no distant particles.

<div id="_class_gpuparticlescollisionheightfield3d_constant_resolution_1024"></div>

[Resolution](#enum_gpuparticlescollisionheightfield3d_resolution) **RESOLUTION_1024** = ``2``

Generate a 1024×1024 heightmap. Intended for large scenes with distant particles.

<div id="_class_gpuparticlescollisionheightfield3d_constant_resolution_2048"></div>

[Resolution](#enum_gpuparticlescollisionheightfield3d_resolution) **RESOLUTION_2048** = ``3``

Generate a 2048×2048 heightmap. Intended for very large scenes with distant particles.

<div id="_class_gpuparticlescollisionheightfield3d_constant_resolution_4096"></div>

[Resolution](#enum_gpuparticlescollisionheightfield3d_resolution) **RESOLUTION_4096** = ``4``

Generate a 4096×4096 heightmap. Intended for huge scenes with distant particles.

<div id="_class_gpuparticlescollisionheightfield3d_constant_resolution_8192"></div>

[Resolution](#enum_gpuparticlescollisionheightfield3d_resolution) **RESOLUTION_8192** = ``5``

Generate a 8192×8192 heightmap. Intended for gigantic scenes with distant particles.

<div id="_class_gpuparticlescollisionheightfield3d_constant_resolution_max"></div>

[Resolution](#enum_gpuparticlescollisionheightfield3d_resolution) **RESOLUTION_MAX** = ``6``

Represents the size of the [Resolution](#enum_gpuparticlescollisionheightfield3d_resolution) enum.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_enum_gpuparticlescollisionheightfield3d_updatemode"></div>

enum **UpdateMode**: <div id="enum_gpuparticlescollisionheightfield3d_updatemode"></div>

<div id="_class_gpuparticlescollisionheightfield3d_constant_update_mode_when_moved"></div>

[UpdateMode](#enum_gpuparticlescollisionheightfield3d_updatemode) **UPDATE_MODE_WHEN_MOVED** = ``0``

Only update the heightmap when the **GPUParticlesCollisionHeightField3D** node is moved, or when the camera moves if [`follow_camera_enabled`](#class_gpuparticlescollisionheightfield3d_property_follow_camera_enabled) is `true`. An update can be forced by slightly moving the **GPUParticlesCollisionHeightField3D** in any direction, or by calling [`RenderingServer.particles_collision_height_field_update`](#class_renderingserver_method_particles_collision_height_field_update).

<div id="_class_gpuparticlescollisionheightfield3d_constant_update_mode_always"></div>

[UpdateMode](#enum_gpuparticlescollisionheightfield3d_updatemode) **UPDATE_MODE_ALWAYS** = ``1``

Update the heightmap every frame. This has a significant performance cost. This update should only be used when geometry that particles can collide with changes significantly during gameplay.

<!-- rst-class:: classref-section-separator -->

---

## 属性说明

<div id="_class_gpuparticlescollisionheightfield3d_property_follow_camera_enabled"></div>

[`bool`](class_bool.md) **follow_camera_enabled** = ``false`` <div id="class_gpuparticlescollisionheightfield3d_property_follow_camera_enabled"></div>

- `void` **set_follow_camera_enabled** ( value: [`bool`](class_bool.md) )
- [`bool`](class_bool.md) **is_follow_camera_enabled** ( )

If `true`, the **GPUParticlesCollisionHeightField3D** will follow the current camera in global space. The **GPUParticlesCollisionHeightField3D** does not need to be a child of the [`Camera3D`](class_camera3d.md) node for this to work.

Following the camera has a performance cost, as it will force the heightmap to update whenever the camera moves. Consider lowering [`resolution`](#class_gpuparticlescollisionheightfield3d_property_resolution) to improve performance if [`follow_camera_enabled`](#class_gpuparticlescollisionheightfield3d_property_follow_camera_enabled) is `true`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_gpuparticlescollisionheightfield3d_property_resolution"></div>

[Resolution](#enum_gpuparticlescollisionheightfield3d_resolution) **resolution** = ``2`` <div id="class_gpuparticlescollisionheightfield3d_property_resolution"></div>

- `void` **set_resolution** ( value: [Resolution](#enum_gpuparticlescollisionheightfield3d_resolution) )
- [Resolution](#enum_gpuparticlescollisionheightfield3d_resolution) **get_resolution** ( )

Higher resolutions can represent small details more accurately in large scenes, at the cost of lower performance. If [`update_mode`](#class_gpuparticlescollisionheightfield3d_property_update_mode) is [`UPDATE_MODE_ALWAYS`](#class_gpuparticlescollisionheightfield3d_constant_update_mode_always), consider using the lowest resolution possible.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_gpuparticlescollisionheightfield3d_property_size"></div>

[`Vector3`](class_vector3.md) **size** = ``Vector3(2, 2, 2)`` <div id="class_gpuparticlescollisionheightfield3d_property_size"></div>

- `void` **set_size** ( value: [`Vector3`](class_vector3.md) )
- [`Vector3`](class_vector3.md) **get_size** ( )

The collision heightmap's size in 3D units. To improve heightmap quality, [`size`](#class_gpuparticlescollisionheightfield3d_property_size) should be set as small as possible while covering the parts of the scene you need.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_gpuparticlescollisionheightfield3d_property_update_mode"></div>

[UpdateMode](#enum_gpuparticlescollisionheightfield3d_updatemode) **update_mode** = ``0`` <div id="class_gpuparticlescollisionheightfield3d_property_update_mode"></div>

- `void` **set_update_mode** ( value: [UpdateMode](#enum_gpuparticlescollisionheightfield3d_updatemode) )
- [UpdateMode](#enum_gpuparticlescollisionheightfield3d_updatemode) **get_update_mode** ( )

The update policy to use for the generated heightmap.

[^virtual]: 本方法通常需要用户覆盖才能生效。
[^const]: 本方法无副作用，不会修改该实例的任何成员变量。
[^vararg]: 本方法除了能接受在此处描述的参数外，还能够继续接受任意数量的参数。
[^constructor]: 本方法用于构造某个类型。
[^static]: 调用本方法无需实例，可直接使用类名进行调用。
[^operator]: 本方法描述的是使用本类型作为左操作数的有效运算符。
[^bitfield]: 这个值是由下列位标志构成位掩码的整数。
[^void]: 无返回值。
