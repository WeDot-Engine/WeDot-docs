<!-- ⚠ 请勿编辑本文件 ⚠ -->
<!-- 本文档使用脚本从 WeDot 引擎源码仓库生成。 -->
<!-- 生成脚本：https://github.com/WeDot-Engine/WeDot/tree/4.3/doc/tools/make_md.py； -->
<!-- 原文件：https://github.com/WeDot-Engine/WeDot/tree/4.3/doc/classes/Decal.xml。 -->

<div id="_class_decal"></div>

# Decal

**继承：** [`VisualInstance3D`](class_visualinstance3d.md) **<** [`Node3D`](class_node3d.md) **<** [`Node`](class_node.md) **<** [`Object`](class_object.md)

Node that projects a texture onto a [`MeshInstance3D`](class_meshinstance3d.md).

## 描述

**Decal** s are used to project a texture onto a [`Mesh`](class_mesh.md) in the scene. Use Decals to add detail to a scene without affecting the underlying [`Mesh`](class_mesh.md). They are often used to add weathering to building, add dirt or mud to the ground, or add variety to props. Decals can be moved at any time, making them suitable for things like blob shadows or laser sight dots.

They are made of an [`AABB`](class_aabb.md) and a group of [`Texture2D`](class_texture2d.md) s specifying [`Color`](class_color.md), normal, ORM (ambient occlusion, roughness, metallic), and emission. Decals are projected within their [`AABB`](class_aabb.md) so altering the orientation of the Decal affects the direction in which they are projected. By default, Decals are projected down (i.e. from positive Y to negative Y).

The [`Texture2D`](class_texture2d.md) s associated with the Decal are automatically stored in a texture atlas which is used for drawing the decals so all decals can be drawn at once. Godot uses clustered decals, meaning they are stored in cluster data and drawn when the mesh is drawn, they are not drawn as a post-processing effect after.

 **Note:** Decals cannot affect an underlying material's transparency, regardless of its transparency mode (alpha blend, alpha scissor, alpha hash, opaque pre-pass). This means translucent or transparent areas of a material will remain translucent or transparent even if an opaque decal is applied on them.

 **Note:** Decals are only supported in the Forward+ and Mobile rendering methods, not Compatibility. When using the Mobile rendering method, only 8 decals can be displayed on each mesh resource. Attempting to display more than 8 decals on a single mesh resource will result in decals flickering in and out as the camera moves.

 **Note:** When using the Mobile rendering method, decals will only correctly affect meshes whose visibility AABB intersects with the decal's AABB. If using a shader to deform the mesh in a way that makes it go outside its AABB, [`GeometryInstance3D.extra_cull_margin`](#class_geometryinstance3d_property_extra_cull_margin) must be increased on the mesh. Otherwise, the decal may not be visible on the mesh.

## 属性

|||
|:-:|:--|
| [`float`](class_float.md)         | [`albedo_mix`](#class_decal_property_albedo_mix)                       | ``1.0``               |
| [`int`](class_int.md)             | [`cull_mask`](#class_decal_property_cull_mask)                         | ``1048575``           |
| [`float`](class_float.md)         | [`distance_fade_begin`](#class_decal_property_distance_fade_begin)     | ``40.0``              |
| [`bool`](class_bool.md)           | [`distance_fade_enabled`](#class_decal_property_distance_fade_enabled) | ``false``             |
| [`float`](class_float.md)         | [`distance_fade_length`](#class_decal_property_distance_fade_length)   | ``10.0``              |
| [`float`](class_float.md)         | [`emission_energy`](#class_decal_property_emission_energy)             | ``1.0``               |
| [`float`](class_float.md)         | [`lower_fade`](#class_decal_property_lower_fade)                       | ``0.3``               |
| [`Color`](class_color.md)         | [`modulate`](#class_decal_property_modulate)                           | ``Color(1, 1, 1, 1)`` |
| [`float`](class_float.md)         | [`normal_fade`](#class_decal_property_normal_fade)                     | ``0.0``               |
| [`Vector3`](class_vector3.md)     | [`size`](#class_decal_property_size)                                   | ``Vector3(2, 2, 2)``  |
| [`Texture2D`](class_texture2d.md) | [`texture_albedo`](#class_decal_property_texture_albedo)               |                       |
| [`Texture2D`](class_texture2d.md) | [`texture_emission`](#class_decal_property_texture_emission)           |                       |
| [`Texture2D`](class_texture2d.md) | [`texture_normal`](#class_decal_property_texture_normal)               |                       |
| [`Texture2D`](class_texture2d.md) | [`texture_orm`](#class_decal_property_texture_orm)                     |                       |
| [`float`](class_float.md)         | [`upper_fade`](#class_decal_property_upper_fade)                       | ``0.3``               |

## 方法

|||
|:-:|:--|
| [`Texture2D`](class_texture2d.md) | [`get_texture`](class_decalmd#class_decal_method_get_texture) ( type: [DecalTexture](#enum_decal_decaltexture) ) const[^const]                               |
| `void`                            | [`set_texture`](class_decalmd#class_decal_method_set_texture) ( type: [DecalTexture](#enum_decal_decaltexture), texture: [`Texture2D`](class_texture2d.md) ) |

<!-- rst-class:: classref-section-separator -->

---

## 枚举

<div id="_class_enum_decal_decaltexture"></div>

enum **DecalTexture**: <div id="enum_decal_decaltexture"></div>

<div id="_class_decal_constant_texture_albedo"></div>

[DecalTexture](#enum_decal_decaltexture) **TEXTURE_ALBEDO** = ``0``

[`Texture2D`](class_texture2d.md) corresponding to [`texture_albedo`](#class_decal_property_texture_albedo).

<div id="_class_decal_constant_texture_normal"></div>

[DecalTexture](#enum_decal_decaltexture) **TEXTURE_NORMAL** = ``1``

[`Texture2D`](class_texture2d.md) corresponding to [`texture_normal`](#class_decal_property_texture_normal).

<div id="_class_decal_constant_texture_orm"></div>

[DecalTexture](#enum_decal_decaltexture) **TEXTURE_ORM** = ``2``

[`Texture2D`](class_texture2d.md) corresponding to [`texture_orm`](#class_decal_property_texture_orm).

<div id="_class_decal_constant_texture_emission"></div>

[DecalTexture](#enum_decal_decaltexture) **TEXTURE_EMISSION** = ``3``

[`Texture2D`](class_texture2d.md) corresponding to [`texture_emission`](#class_decal_property_texture_emission).

<div id="_class_decal_constant_texture_max"></div>

[DecalTexture](#enum_decal_decaltexture) **TEXTURE_MAX** = ``4``

Max size of [DecalTexture](#enum_decal_decaltexture) enum.

<!-- rst-class:: classref-section-separator -->

---

## 属性说明

<div id="_class_decal_property_albedo_mix"></div>

[`float`](class_float.md) **albedo_mix** = ``1.0`` <div id="class_decal_property_albedo_mix"></div>

- `void` **set_albedo_mix** ( value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_albedo_mix** ( )

Blends the albedo [`Color`](class_color.md) of the decal with albedo [`Color`](class_color.md) of the underlying mesh. This can be set to `0.0` to create a decal that only affects normal or ORM. In this case, an albedo texture is still required as its alpha channel will determine where the normal and ORM will be overridden. See also [`modulate`](#class_decal_property_modulate).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_decal_property_cull_mask"></div>

[`int`](class_int.md) **cull_mask** = ``1048575`` <div id="class_decal_property_cull_mask"></div>

- `void` **set_cull_mask** ( value: [`int`](class_int.md) )
- [`int`](class_int.md) **get_cull_mask** ( )

Specifies which [`VisualInstance3D.layers`](#class_visualinstance3d_property_layers) this decal will project on. By default, Decals affect all layers. This is used so you can specify which types of objects receive the Decal and which do not. This is especially useful so you can ensure that dynamic objects don't accidentally receive a Decal intended for the terrain under them.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_decal_property_distance_fade_begin"></div>

[`float`](class_float.md) **distance_fade_begin** = ``40.0`` <div id="class_decal_property_distance_fade_begin"></div>

- `void` **set_distance_fade_begin** ( value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_distance_fade_begin** ( )

The distance from the camera at which the Decal begins to fade away (in 3D units).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_decal_property_distance_fade_enabled"></div>

[`bool`](class_bool.md) **distance_fade_enabled** = ``false`` <div id="class_decal_property_distance_fade_enabled"></div>

- `void` **set_enable_distance_fade** ( value: [`bool`](class_bool.md) )
- [`bool`](class_bool.md) **is_distance_fade_enabled** ( )

If `true`, decals will smoothly fade away when far from the active [`Camera3D`](class_camera3d.md) starting at [`distance_fade_begin`](#class_decal_property_distance_fade_begin). The Decal will fade out over [`distance_fade_begin`](#class_decal_property_distance_fade_begin) + [`distance_fade_length`](#class_decal_property_distance_fade_length), after which it will be culled and not sent to the shader at all. Use this to reduce the number of active Decals in a scene and thus improve performance.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_decal_property_distance_fade_length"></div>

[`float`](class_float.md) **distance_fade_length** = ``10.0`` <div id="class_decal_property_distance_fade_length"></div>

- `void` **set_distance_fade_length** ( value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_distance_fade_length** ( )

The distance over which the Decal fades (in 3D units). The Decal becomes slowly more transparent over this distance and is completely invisible at the end. Higher values result in a smoother fade-out transition, which is more suited when the camera moves fast.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_decal_property_emission_energy"></div>

[`float`](class_float.md) **emission_energy** = ``1.0`` <div id="class_decal_property_emission_energy"></div>

- `void` **set_emission_energy** ( value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_emission_energy** ( )

Energy multiplier for the emission texture. This will make the decal emit light at a higher or lower intensity, independently of the albedo color. See also [`modulate`](#class_decal_property_modulate).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_decal_property_lower_fade"></div>

[`float`](class_float.md) **lower_fade** = ``0.3`` <div id="class_decal_property_lower_fade"></div>

- `void` **set_lower_fade** ( value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_lower_fade** ( )

Sets the curve over which the decal will fade as the surface gets further from the center of the [`AABB`](class_aabb.md). Only positive values are valid (negative values will be clamped to `0.0`). See also [`upper_fade`](#class_decal_property_upper_fade).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_decal_property_modulate"></div>

[`Color`](class_color.md) **modulate** = ``Color(1, 1, 1, 1)`` <div id="class_decal_property_modulate"></div>

- `void` **set_modulate** ( value: [`Color`](class_color.md) )
- [`Color`](class_color.md) **get_modulate** ( )

Changes the [`Color`](class_color.md) of the Decal by multiplying the albedo and emission colors with this value. The alpha component is only taken into account when multiplying the albedo color, not the emission color. See also [`emission_energy`](#class_decal_property_emission_energy) and [`albedo_mix`](#class_decal_property_albedo_mix) to change the emission and albedo intensity independently of each other.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_decal_property_normal_fade"></div>

[`float`](class_float.md) **normal_fade** = ``0.0`` <div id="class_decal_property_normal_fade"></div>

- `void` **set_normal_fade** ( value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_normal_fade** ( )

Fades the Decal if the angle between the Decal's [`AABB`](class_aabb.md) and the target surface becomes too large. A value of `0` projects the Decal regardless of angle, a value of `1` limits the Decal to surfaces that are nearly perpendicular.

 **Note:** Setting [`normal_fade`](#class_decal_property_normal_fade) to a value greater than `0.0` has a small performance cost due to the added normal angle computations.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_decal_property_size"></div>

[`Vector3`](class_vector3.md) **size** = ``Vector3(2, 2, 2)`` <div id="class_decal_property_size"></div>

- `void` **set_size** ( value: [`Vector3`](class_vector3.md) )
- [`Vector3`](class_vector3.md) **get_size** ( )

Sets the size of the [`AABB`](class_aabb.md) used by the decal. All dimensions must be set to a value greater than zero (they will be clamped to `0.001` if this is not the case). The AABB goes from `-size/2` to `size/2`.

 **Note:** To improve culling efficiency of "hard surface" decals, set their [`upper_fade`](#class_decal_property_upper_fade) and [`lower_fade`](#class_decal_property_lower_fade) to `0.0` and set the Y component of the [`size`](#class_decal_property_size) as low as possible. This will reduce the decals' AABB size without affecting their appearance.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_decal_property_texture_albedo"></div>

[`Texture2D`](class_texture2d.md) **texture_albedo** <div id="class_decal_property_texture_albedo"></div>

- `void` **set_texture** ( type: [DecalTexture](#enum_decal_decaltexture), texture: [`Texture2D`](class_texture2d.md) )
- [`Texture2D`](class_texture2d.md) **get_texture** ( type: [DecalTexture](#enum_decal_decaltexture) ) const[^const]

[`Texture2D`](class_texture2d.md) with the base [`Color`](class_color.md) of the Decal. Either this or the [`texture_emission`](#class_decal_property_texture_emission) must be set for the Decal to be visible. Use the alpha channel like a mask to smoothly blend the edges of the decal with the underlying object.

 **Note:** Unlike [`BaseMaterial3D`](class_basematerial3d.md) whose filter mode can be adjusted on a per-material basis, the filter mode for **Decal** textures is set globally with [`ProjectSettings.rendering/textures/decals/filter`](#class_projectsettings_property_rendering/textures/decals/filter).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_decal_property_texture_emission"></div>

[`Texture2D`](class_texture2d.md) **texture_emission** <div id="class_decal_property_texture_emission"></div>

- `void` **set_texture** ( type: [DecalTexture](#enum_decal_decaltexture), texture: [`Texture2D`](class_texture2d.md) )
- [`Texture2D`](class_texture2d.md) **get_texture** ( type: [DecalTexture](#enum_decal_decaltexture) ) const[^const]

[`Texture2D`](class_texture2d.md) with the emission [`Color`](class_color.md) of the Decal. Either this or the [`texture_albedo`](#class_decal_property_texture_albedo) must be set for the Decal to be visible. Use the alpha channel like a mask to smoothly blend the edges of the decal with the underlying object.

 **Note:** Unlike [`BaseMaterial3D`](class_basematerial3d.md) whose filter mode can be adjusted on a per-material basis, the filter mode for **Decal** textures is set globally with [`ProjectSettings.rendering/textures/decals/filter`](#class_projectsettings_property_rendering/textures/decals/filter).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_decal_property_texture_normal"></div>

[`Texture2D`](class_texture2d.md) **texture_normal** <div id="class_decal_property_texture_normal"></div>

- `void` **set_texture** ( type: [DecalTexture](#enum_decal_decaltexture), texture: [`Texture2D`](class_texture2d.md) )
- [`Texture2D`](class_texture2d.md) **get_texture** ( type: [DecalTexture](#enum_decal_decaltexture) ) const[^const]

[`Texture2D`](class_texture2d.md) with the per-pixel normal map for the decal. Use this to add extra detail to decals.

 **Note:** Unlike [`BaseMaterial3D`](class_basematerial3d.md) whose filter mode can be adjusted on a per-material basis, the filter mode for **Decal** textures is set globally with [`ProjectSettings.rendering/textures/decals/filter`](#class_projectsettings_property_rendering/textures/decals/filter).

 **Note:** Setting this texture alone will not result in a visible decal, as [`texture_albedo`](#class_decal_property_texture_albedo) must also be set. To create a normal-only decal, load an albedo texture into [`texture_albedo`](#class_decal_property_texture_albedo) and set [`albedo_mix`](#class_decal_property_albedo_mix) to `0.0`. The albedo texture's alpha channel will be used to determine where the underlying surface's normal map should be overridden (and its intensity).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_decal_property_texture_orm"></div>

[`Texture2D`](class_texture2d.md) **texture_orm** <div id="class_decal_property_texture_orm"></div>

- `void` **set_texture** ( type: [DecalTexture](#enum_decal_decaltexture), texture: [`Texture2D`](class_texture2d.md) )
- [`Texture2D`](class_texture2d.md) **get_texture** ( type: [DecalTexture](#enum_decal_decaltexture) ) const[^const]

[`Texture2D`](class_texture2d.md) storing ambient occlusion, roughness, and metallic for the decal. Use this to add extra detail to decals.

 **Note:** Unlike [`BaseMaterial3D`](class_basematerial3d.md) whose filter mode can be adjusted on a per-material basis, the filter mode for **Decal** textures is set globally with [`ProjectSettings.rendering/textures/decals/filter`](#class_projectsettings_property_rendering/textures/decals/filter).

 **Note:** Setting this texture alone will not result in a visible decal, as [`texture_albedo`](#class_decal_property_texture_albedo) must also be set. To create an ORM-only decal, load an albedo texture into [`texture_albedo`](#class_decal_property_texture_albedo) and set [`albedo_mix`](#class_decal_property_albedo_mix) to `0.0`. The albedo texture's alpha channel will be used to determine where the underlying surface's ORM map should be overridden (and its intensity).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_decal_property_upper_fade"></div>

[`float`](class_float.md) **upper_fade** = ``0.3`` <div id="class_decal_property_upper_fade"></div>

- `void` **set_upper_fade** ( value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_upper_fade** ( )

Sets the curve over which the decal will fade as the surface gets further from the center of the [`AABB`](class_aabb.md). Only positive values are valid (negative values will be clamped to `0.0`). See also [`lower_fade`](#class_decal_property_lower_fade).

<!-- rst-class:: classref-section-separator -->

---

## 方法说明

<div id="_class_decal_method_get_texture"></div>

[`Texture2D`](class_texture2d.md) **get_texture** ( type: [DecalTexture](#enum_decal_decaltexture) ) const[^const]<div id="class_decal_method_get_texture"></div>

Returns the [`Texture2D`](class_texture2d.md) associated with the specified [DecalTexture](#enum_decal_decaltexture). This is a convenience method, in most cases you should access the texture directly.

For example, instead of `albedo_tex = $Decal.get_texture(Decal.TEXTURE_ALBEDO)`, use `albedo_tex = $Decal.texture_albedo`.

One case where this is better than accessing the texture directly is when you want to copy one Decal's textures to another. For example:



```gdscript

    for i in Decal.TEXTURE_MAX:
        $NewDecal.set_texture(i, $OldDecal.get_texture(i))
```

```csharp

    for (int i = 0; i < (int)Decal.DecalTexture.Max; i++)
    {
        GetNode<Decal>("NewDecal").SetTexture(i, GetNode<Decal>("OldDecal").GetTexture(i));
    }
```







<!-- rst-class:: classref-item-separator -->

---

<div id="_class_decal_method_set_texture"></div>

`void` **set_texture** ( type: [DecalTexture](#enum_decal_decaltexture), texture: [`Texture2D`](class_texture2d.md) )<div id="class_decal_method_set_texture"></div>

Sets the [`Texture2D`](class_texture2d.md) associated with the specified [DecalTexture](#enum_decal_decaltexture). This is a convenience method, in most cases you should access the texture directly.

For example, instead of `$Decal.set_texture(Decal.TEXTURE_ALBEDO, albedo_tex)`, use `$Decal.texture_albedo = albedo_tex`.

One case where this is better than accessing the texture directly is when you want to copy one Decal's textures to another. For example:



```gdscript

    for i in Decal.TEXTURE_MAX:
        $NewDecal.set_texture(i, $OldDecal.get_texture(i))
```

```csharp

    for (int i = 0; i < (int)Decal.DecalTexture.Max; i++)
    {
        GetNode<Decal>("NewDecal").SetTexture(i, GetNode<Decal>("OldDecal").GetTexture(i));
    }
```







[^virtual]: 本方法通常需要用户覆盖才能生效。
[^const]: 本方法无副作用，不会修改该实例的任何成员变量。
[^vararg]: 本方法除了能接受在此处描述的参数外，还能够继续接受任意数量的参数。
[^constructor]: 本方法用于构造某个类型。
[^static]: 调用本方法无需实例，可直接使用类名进行调用。
[^operator]: 本方法描述的是使用本类型作为左操作数的有效运算符。
[^bitfield]: 这个值是由下列位标志构成位掩码的整数。
[^void]: 无返回值。
