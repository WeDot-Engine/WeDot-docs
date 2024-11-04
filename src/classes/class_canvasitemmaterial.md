<!-- ⚠ 请勿编辑本文件 ⚠ -->
<!-- 本文档使用脚本从 WeDot 引擎源码仓库生成。 -->
<!-- 生成脚本：https://github.com/WeDot-Engine/WeDot/tree/4.3/doc/tools/make_md.py； -->
<!-- 原文件：https://github.com/WeDot-Engine/WeDot/tree/4.3/doc/classes/CanvasItemMaterial.xml。 -->

<div id="_class_canvasitemmaterial"></div>

# CanvasItemMaterial

**继承：** [`Material`](class_material.md) **<** [`Resource`](class_resource.md) **<** [`RefCounted`](class_refcounted.md) **<** [`Object`](class_object.md)

A material for [`CanvasItem`](class_canvasitem.md) s.

## 描述

**CanvasItemMaterial** s provide a means of modifying the textures associated with a CanvasItem. They specialize in describing blend and lighting behaviors for textures. Use a [`ShaderMaterial`](class_shadermaterial.md) to more fully customize a material's interactions with a [`CanvasItem`](class_canvasitem.md).

## 属性

| [BlendMode](#enum_canvasitemmaterial_blendmode) | [`blend_mode`](#class_canvasitemmaterial_property_blend_mode)                           | ``0``     |
| [LightMode](#enum_canvasitemmaterial_lightmode) | [`light_mode`](#class_canvasitemmaterial_property_light_mode)                           | ``0``     |
| [`int`](class_int.md)                           | [`particles_anim_h_frames`](#class_canvasitemmaterial_property_particles_anim_h_frames) |           |
| [`bool`](class_bool.md)                         | [`particles_anim_loop`](#class_canvasitemmaterial_property_particles_anim_loop)         |           |
| [`int`](class_int.md)                           | [`particles_anim_v_frames`](#class_canvasitemmaterial_property_particles_anim_v_frames) |           |
| [`bool`](class_bool.md)                         | [`particles_animation`](#class_canvasitemmaterial_property_particles_animation)         | ``false`` |

<!-- rst-class:: classref-section-separator -->

---

## 枚举

<div id="_class_enum_canvasitemmaterial_blendmode"></div>

enum **BlendMode**: <div id="enum_canvasitemmaterial_blendmode"></div>

<div id="_class_canvasitemmaterial_constant_blend_mode_mix"></div>

[BlendMode](#enum_canvasitemmaterial_blendmode) **BLEND_MODE_MIX** = ``0``

Mix blending mode. Colors are assumed to be independent of the alpha (opacity) value.

<div id="_class_canvasitemmaterial_constant_blend_mode_add"></div>

[BlendMode](#enum_canvasitemmaterial_blendmode) **BLEND_MODE_ADD** = ``1``

Additive blending mode.

<div id="_class_canvasitemmaterial_constant_blend_mode_sub"></div>

[BlendMode](#enum_canvasitemmaterial_blendmode) **BLEND_MODE_SUB** = ``2``

Subtractive blending mode.

<div id="_class_canvasitemmaterial_constant_blend_mode_mul"></div>

[BlendMode](#enum_canvasitemmaterial_blendmode) **BLEND_MODE_MUL** = ``3``

Multiplicative blending mode.

<div id="_class_canvasitemmaterial_constant_blend_mode_premult_alpha"></div>

[BlendMode](#enum_canvasitemmaterial_blendmode) **BLEND_MODE_PREMULT_ALPHA** = ``4``

Mix blending mode. Colors are assumed to be premultiplied by the alpha (opacity) value.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_enum_canvasitemmaterial_lightmode"></div>

enum **LightMode**: <div id="enum_canvasitemmaterial_lightmode"></div>

<div id="_class_canvasitemmaterial_constant_light_mode_normal"></div>

[LightMode](#enum_canvasitemmaterial_lightmode) **LIGHT_MODE_NORMAL** = ``0``

Render the material using both light and non-light sensitive material properties.

<div id="_class_canvasitemmaterial_constant_light_mode_unshaded"></div>

[LightMode](#enum_canvasitemmaterial_lightmode) **LIGHT_MODE_UNSHADED** = ``1``

Render the material as if there were no light.

<div id="_class_canvasitemmaterial_constant_light_mode_light_only"></div>

[LightMode](#enum_canvasitemmaterial_lightmode) **LIGHT_MODE_LIGHT_ONLY** = ``2``

Render the material as if there were only light.

<!-- rst-class:: classref-section-separator -->

---

## 属性说明

<div id="_class_canvasitemmaterial_property_blend_mode"></div>

[BlendMode](#enum_canvasitemmaterial_blendmode) **blend_mode** = ``0`` <div id="class_canvasitemmaterial_property_blend_mode"></div>

- `void` **set_blend_mode** ( value: [BlendMode](#enum_canvasitemmaterial_blendmode) )
- [BlendMode](#enum_canvasitemmaterial_blendmode) **get_blend_mode** ( )

The manner in which a material's rendering is applied to underlying textures.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_canvasitemmaterial_property_light_mode"></div>

[LightMode](#enum_canvasitemmaterial_lightmode) **light_mode** = ``0`` <div id="class_canvasitemmaterial_property_light_mode"></div>

- `void` **set_light_mode** ( value: [LightMode](#enum_canvasitemmaterial_lightmode) )
- [LightMode](#enum_canvasitemmaterial_lightmode) **get_light_mode** ( )

The manner in which material reacts to lighting.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_canvasitemmaterial_property_particles_anim_h_frames"></div>

[`int`](class_int.md) **particles_anim_h_frames** <div id="class_canvasitemmaterial_property_particles_anim_h_frames"></div>

- `void` **set_particles_anim_h_frames** ( value: [`int`](class_int.md) )
- [`int`](class_int.md) **get_particles_anim_h_frames** ( )

The number of columns in the spritesheet assigned as [`Texture2D`](class_texture2d.md) for a [`GPUParticles2D`](class_gpuparticles2d.md) or [`CPUParticles2D`](class_cpuparticles2d.md).

 **Note:** This property is only used and visible in the editor if [`particles_animation`](#class_canvasitemmaterial_property_particles_animation) is `true`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_canvasitemmaterial_property_particles_anim_loop"></div>

[`bool`](class_bool.md) **particles_anim_loop** <div id="class_canvasitemmaterial_property_particles_anim_loop"></div>

- `void` **set_particles_anim_loop** ( value: [`bool`](class_bool.md) )
- [`bool`](class_bool.md) **get_particles_anim_loop** ( )

If `true`, the particles animation will loop.

 **Note:** This property is only used and visible in the editor if [`particles_animation`](#class_canvasitemmaterial_property_particles_animation) is `true`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_canvasitemmaterial_property_particles_anim_v_frames"></div>

[`int`](class_int.md) **particles_anim_v_frames** <div id="class_canvasitemmaterial_property_particles_anim_v_frames"></div>

- `void` **set_particles_anim_v_frames** ( value: [`int`](class_int.md) )
- [`int`](class_int.md) **get_particles_anim_v_frames** ( )

The number of rows in the spritesheet assigned as [`Texture2D`](class_texture2d.md) for a [`GPUParticles2D`](class_gpuparticles2d.md) or [`CPUParticles2D`](class_cpuparticles2d.md).

 **Note:** This property is only used and visible in the editor if [`particles_animation`](#class_canvasitemmaterial_property_particles_animation) is `true`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_canvasitemmaterial_property_particles_animation"></div>

[`bool`](class_bool.md) **particles_animation** = ``false`` <div id="class_canvasitemmaterial_property_particles_animation"></div>

- `void` **set_particles_animation** ( value: [`bool`](class_bool.md) )
- [`bool`](class_bool.md) **get_particles_animation** ( )

If `true`, enable spritesheet-based animation features when assigned to [`GPUParticles2D`](class_gpuparticles2d.md) and [`CPUParticles2D`](class_cpuparticles2d.md) nodes. The [`ParticleProcessMaterial.anim_speed_max`](#class_particleprocessmaterial_property_anim_speed_max) or [`CPUParticles2D.anim_speed_max`](#class_cpuparticles2d_property_anim_speed_max) should also be set to a positive value for the animation to play.

This property (and other `particles_anim_*` properties that depend on it) has no effect on other types of nodes.

[^virtual]: 本方法通常需要用户覆盖才能生效。
[^const]: 本方法无副作用，不会修改该实例的任何成员变量。
[^vararg]: 本方法除了能接受在此处描述的参数外，还能够继续接受任意数量的参数。
[^constructor]: 本方法用于构造某个类型。
[^static]: 调用本方法无需实例，可直接使用类名进行调用。
[^operator]: 本方法描述的是使用本类型作为左操作数的有效运算符。
[^bitfield]: 这个值是由下列位标志构成位掩码的整数。
[^void]: 无返回值。
