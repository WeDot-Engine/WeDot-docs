<!-- ⚠ 请勿编辑本文件 ⚠ -->
<!-- 本文档使用脚本从 WeDot 引擎源码仓库生成。 -->
<!-- 生成脚本：https://github.com/WeDot-Engine/WeDot/tree/4.3/doc/tools/make_md.py； -->
<!-- 原文件：https://github.com/WeDot-Engine/WeDot/tree/4.3/doc/classes/GPUParticlesCollisionSDF3D.xml。 -->

<div id="_class_gpuparticlescollisionsdf3d"></div>

# GPUParticlesCollisionSDF3D

**继承：** [`GPUParticlesCollision3D`](class_gpuparticlescollision3d.md) **<** [`VisualInstance3D`](class_visualinstance3d.md) **<** [`Node3D`](class_node3d.md) **<** [`Node`](class_node.md) **<** [`Object`](class_object.md)

A baked signed distance field 3D particle collision shape affecting [`GPUParticles3D`](class_gpuparticles3d.md) nodes.

## 描述

A baked signed distance field 3D particle collision shape affecting [`GPUParticles3D`](class_gpuparticles3d.md) nodes.

Signed distance fields (SDF) allow for efficiently representing approximate collision shapes for convex and concave objects of any shape. This is more flexible than [`GPUParticlesCollisionHeightField3D`](class_gpuparticlescollisionheightfield3d.md), but it requires a baking step.

 **Baking:** The signed distance field texture can be baked by selecting the **GPUParticlesCollisionSDF3D** node in the editor, then clicking **Bake SDF** at the top of the 3D viewport. Any *visible* [`MeshInstance3D`](class_meshinstance3d.md) s within the [`size`](#class_gpuparticlescollisionsdf3d_property_size) will be taken into account for baking, regardless of their [`GeometryInstance3D.gi_mode`](#class_geometryinstance3d_property_gi_mode).

 **Note:** Baking a **GPUParticlesCollisionSDF3D**'s [`texture`](#class_gpuparticlescollisionsdf3d_property_texture) is only possible within the editor, as there is no bake method exposed for use in exported projects. However, it's still possible to load pre-baked [`Texture3D`](class_texture3d.md) s into its [`texture`](#class_gpuparticlescollisionsdf3d_property_texture) property in an exported project.

 **Note:** [`ParticleProcessMaterial.collision_mode`](#class_particleprocessmaterial_property_collision_mode) must be [`ParticleProcessMaterial.COLLISION_RIGID`](#class_particleprocessmaterial_constant_collision_rigid) or [`ParticleProcessMaterial.COLLISION_HIDE_ON_CONTACT`](#class_particleprocessmaterial_constant_collision_hide_on_contact) on the [`GPUParticles3D`](class_gpuparticles3d.md)'s process material for collision to work.

 **Note:** Particle collision only affects [`GPUParticles3D`](class_gpuparticles3d.md), not [`CPUParticles3D`](class_cpuparticles3d.md).

## 属性

| [`int`](class_int.md)                                     | [`bake_mask`](#class_gpuparticlescollisionsdf3d_property_bake_mask)   | ``4294967295``       |
| [Resolution](#enum_gpuparticlescollisionsdf3d_resolution) | [`resolution`](#class_gpuparticlescollisionsdf3d_property_resolution) | ``2``                |
| [`Vector3`](class_vector3.md)                             | [`size`](#class_gpuparticlescollisionsdf3d_property_size)             | ``Vector3(2, 2, 2)`` |
| [`Texture3D`](class_texture3d.md)                         | [`texture`](#class_gpuparticlescollisionsdf3d_property_texture)       |                      |
| [`float`](class_float.md)                                 | [`thickness`](#class_gpuparticlescollisionsdf3d_property_thickness)   | ``1.0``              |

## 方法

| [`bool`](class_bool.md) | [`get_bake_mask_value`](#class_gpuparticlescollisionsdf3d_method_get_bake_mask_value) ( layer_number: [`int`](class_int.md) ) const[^const]                   |
| `void`                  | [`set_bake_mask_value`](#class_gpuparticlescollisionsdf3d_method_set_bake_mask_value) ( layer_number: [`int`](class_int.md), value: [`bool`](class_bool.md) ) |

<!-- rst-class:: classref-section-separator -->

---

## 枚举

<div id="_class_enum_gpuparticlescollisionsdf3d_resolution"></div>

enum **Resolution**: <div id="enum_gpuparticlescollisionsdf3d_resolution"></div>

<div id="_class_gpuparticlescollisionsdf3d_constant_resolution_16"></div>

[Resolution](#enum_gpuparticlescollisionsdf3d_resolution) **RESOLUTION_16** = ``0``

Bake a 16×16×16 signed distance field. This is the fastest option, but also the least precise.

<div id="_class_gpuparticlescollisionsdf3d_constant_resolution_32"></div>

[Resolution](#enum_gpuparticlescollisionsdf3d_resolution) **RESOLUTION_32** = ``1``

Bake a 32×32×32 signed distance field.

<div id="_class_gpuparticlescollisionsdf3d_constant_resolution_64"></div>

[Resolution](#enum_gpuparticlescollisionsdf3d_resolution) **RESOLUTION_64** = ``2``

Bake a 64×64×64 signed distance field.

<div id="_class_gpuparticlescollisionsdf3d_constant_resolution_128"></div>

[Resolution](#enum_gpuparticlescollisionsdf3d_resolution) **RESOLUTION_128** = ``3``

Bake a 128×128×128 signed distance field.

<div id="_class_gpuparticlescollisionsdf3d_constant_resolution_256"></div>

[Resolution](#enum_gpuparticlescollisionsdf3d_resolution) **RESOLUTION_256** = ``4``

Bake a 256×256×256 signed distance field.

<div id="_class_gpuparticlescollisionsdf3d_constant_resolution_512"></div>

[Resolution](#enum_gpuparticlescollisionsdf3d_resolution) **RESOLUTION_512** = ``5``

Bake a 512×512×512 signed distance field. This is the slowest option, but also the most precise.

<div id="_class_gpuparticlescollisionsdf3d_constant_resolution_max"></div>

[Resolution](#enum_gpuparticlescollisionsdf3d_resolution) **RESOLUTION_MAX** = ``6``

Represents the size of the [Resolution](#enum_gpuparticlescollisionsdf3d_resolution) enum.

<!-- rst-class:: classref-section-separator -->

---

## 属性说明

<div id="_class_gpuparticlescollisionsdf3d_property_bake_mask"></div>

[`int`](class_int.md) **bake_mask** = ``4294967295`` <div id="class_gpuparticlescollisionsdf3d_property_bake_mask"></div>

- `void` **set_bake_mask** ( value: [`int`](class_int.md) )
- [`int`](class_int.md) **get_bake_mask** ( )

The visual layers to account for when baking the particle collision SDF. Only [`MeshInstance3D`](class_meshinstance3d.md) s whose [`VisualInstance3D.layers`](#class_visualinstance3d_property_layers) match with this [`bake_mask`](#class_gpuparticlescollisionsdf3d_property_bake_mask) will be included in the generated particle collision SDF. By default, all objects are taken into account for the particle collision SDF baking.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_gpuparticlescollisionsdf3d_property_resolution"></div>

[Resolution](#enum_gpuparticlescollisionsdf3d_resolution) **resolution** = ``2`` <div id="class_gpuparticlescollisionsdf3d_property_resolution"></div>

- `void` **set_resolution** ( value: [Resolution](#enum_gpuparticlescollisionsdf3d_resolution) )
- [Resolution](#enum_gpuparticlescollisionsdf3d_resolution) **get_resolution** ( )

The bake resolution to use for the signed distance field [`texture`](#class_gpuparticlescollisionsdf3d_property_texture). The texture must be baked again for changes to the [`resolution`](#class_gpuparticlescollisionsdf3d_property_resolution) property to be effective. Higher resolutions have a greater performance cost and take more time to bake. Higher resolutions also result in larger baked textures, leading to increased VRAM and storage space requirements. To improve performance and reduce bake times, use the lowest resolution possible for the object you're representing the collision of.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_gpuparticlescollisionsdf3d_property_size"></div>

[`Vector3`](class_vector3.md) **size** = ``Vector3(2, 2, 2)`` <div id="class_gpuparticlescollisionsdf3d_property_size"></div>

- `void` **set_size** ( value: [`Vector3`](class_vector3.md) )
- [`Vector3`](class_vector3.md) **get_size** ( )

The collision SDF's size in 3D units. To improve SDF quality, the [`size`](#class_gpuparticlescollisionsdf3d_property_size) should be set as small as possible while covering the parts of the scene you need.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_gpuparticlescollisionsdf3d_property_texture"></div>

[`Texture3D`](class_texture3d.md) **texture** <div id="class_gpuparticlescollisionsdf3d_property_texture"></div>

- `void` **set_texture** ( value: [`Texture3D`](class_texture3d.md) )
- [`Texture3D`](class_texture3d.md) **get_texture** ( )

The 3D texture representing the signed distance field.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_gpuparticlescollisionsdf3d_property_thickness"></div>

[`float`](class_float.md) **thickness** = ``1.0`` <div id="class_gpuparticlescollisionsdf3d_property_thickness"></div>

- `void` **set_thickness** ( value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_thickness** ( )

The collision shape's thickness. Unlike other particle colliders, **GPUParticlesCollisionSDF3D** is actually hollow on the inside. [`thickness`](#class_gpuparticlescollisionsdf3d_property_thickness) can be increased to prevent particles from tunneling through the collision shape at high speeds, or when the **GPUParticlesCollisionSDF3D** is moved.

<!-- rst-class:: classref-section-separator -->

---

## 方法说明

<div id="_class_gpuparticlescollisionsdf3d_method_get_bake_mask_value"></div>

[`bool`](class_bool.md) **get_bake_mask_value** ( layer_number: [`int`](class_int.md) ) const[^const]<div id="class_gpuparticlescollisionsdf3d_method_get_bake_mask_value"></div>

Returns whether or not the specified layer of the [`bake_mask`](#class_gpuparticlescollisionsdf3d_property_bake_mask) is enabled, given a `layer_number` between 1 and 32.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_gpuparticlescollisionsdf3d_method_set_bake_mask_value"></div>

`void` **set_bake_mask_value** ( layer_number: [`int`](class_int.md), value: [`bool`](class_bool.md) )<div id="class_gpuparticlescollisionsdf3d_method_set_bake_mask_value"></div>

Based on `value`, enables or disables the specified layer in the [`bake_mask`](#class_gpuparticlescollisionsdf3d_property_bake_mask), given a `layer_number` between 1 and 32.

[^virtual]: 本方法通常需要用户覆盖才能生效。
[^const]: 本方法无副作用，不会修改该实例的任何成员变量。
[^vararg]: 本方法除了能接受在此处描述的参数外，还能够继续接受任意数量的参数。
[^constructor]: 本方法用于构造某个类型。
[^static]: 调用本方法无需实例，可直接使用类名进行调用。
[^operator]: 本方法描述的是使用本类型作为左操作数的有效运算符。
[^bitfield]: 这个值是由下列位标志构成位掩码的整数。
[^void]: 无返回值。
