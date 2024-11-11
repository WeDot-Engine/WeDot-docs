<!-- ⚠ 请勿编辑本文件 ⚠ -->
<!-- 本文档使用脚本从 WeDot 引擎源码仓库生成。 -->
<!-- 生成脚本：https://github.com/WeDot-Engine/WeDot/tree/master/doc/tools/make_md.py； -->
<!-- 原文件：https://github.com/WeDot-Engine/WeDot/tree/master/doc/classes/FogVolume.xml。 -->

<div id="_class_fogvolume"></div>

# FogVolume

**继承：** [`VisualInstance3D`](class_visualinstance3d.md) **<** [`Node3D`](class_node3d.md) **<** [`Node`](class_node.md) **<** [`Object`](class_object.md)

A region that contributes to the default volumetric fog from the world environment.

## 描述

**FogVolume** s are used to add localized fog into the global volumetric fog effect. **FogVolume** s can also remove volumetric fog from specific areas if using a [`FogMaterial`](class_fogmaterial.md) with a negative [`FogMaterial.density`](class_fogmaterial.md#class_fogmaterial_property_density).

Performance of **FogVolume** s is directly related to their relative size on the screen and the complexity of their attached [`FogMaterial`](class_fogmaterial.md). It is best to keep **FogVolume** s relatively small and simple where possible.

 **Note:** **FogVolume** s only have a visible effect if [`Environment.volumetric_fog_enabled`](class_environment.md#class_environment_property_volumetric_fog_enabled) is `true`. If you don't want fog to be globally visible (but only within **FogVolume** nodes), set [`Environment.volumetric_fog_density`](class_environment.md#class_environment_property_volumetric_fog_density) to `0.0`.

## 属性

|||
|:-:|:--|
| [`Material`](class_material.md)                        | [`material`](class_fogvolume.md#class_fogvolume_property_material) |                      |
| [FogVolumeShape](#enum_renderingserver_fogvolumeshape) | [`shape`](class_fogvolume.md#class_fogvolume_property_shape)       | ``3``                |
| [`Vector3`](class_vector3.md)                          | [`size`](class_fogvolume.md#class_fogvolume_property_size)         | ``Vector3(2, 2, 2)`` |

<!-- rst-class:: classref-section-separator -->

---

## 属性说明

<div id="_class_fogvolume_property_material"></div>

[`Material`](class_material.md) **material** <div id="class_fogvolume_property_material"></div>

- `void` **set_material** ( value: [`Material`](class_material.md) )
- [`Material`](class_material.md) **get_material** ( )

The [`Material`](class_material.md) used by the **FogVolume**. Can be either a built-in [`FogMaterial`](class_fogmaterial.md) or a custom [`ShaderMaterial`](class_shadermaterial.md).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_fogvolume_property_shape"></div>

[FogVolumeShape](#enum_renderingserver_fogvolumeshape) **shape** = ``3`` <div id="class_fogvolume_property_shape"></div>

- `void` **set_shape** ( value: [FogVolumeShape](#enum_renderingserver_fogvolumeshape) )
- [FogVolumeShape](#enum_renderingserver_fogvolumeshape) **get_shape** ( )

The shape of the **FogVolume**. This can be set to either [`RenderingServer.FOG_VOLUME_SHAPE_ELLIPSOID`](class_renderingserver.md#class_renderingserver_constant_fog_volume_shape_ellipsoid), [`RenderingServer.FOG_VOLUME_SHAPE_CONE`](class_renderingserver.md#class_renderingserver_constant_fog_volume_shape_cone), [`RenderingServer.FOG_VOLUME_SHAPE_CYLINDER`](class_renderingserver.md#class_renderingserver_constant_fog_volume_shape_cylinder), [`RenderingServer.FOG_VOLUME_SHAPE_BOX`](class_renderingserver.md#class_renderingserver_constant_fog_volume_shape_box) or [`RenderingServer.FOG_VOLUME_SHAPE_WORLD`](class_renderingserver.md#class_renderingserver_constant_fog_volume_shape_world).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_fogvolume_property_size"></div>

[`Vector3`](class_vector3.md) **size** = ``Vector3(2, 2, 2)`` <div id="class_fogvolume_property_size"></div>

- `void` **set_size** ( value: [`Vector3`](class_vector3.md) )
- [`Vector3`](class_vector3.md) **get_size** ( )

The size of the **FogVolume** when [`shape`](class_fogvolume.md#class_fogvolume_property_shape) is [`RenderingServer.FOG_VOLUME_SHAPE_ELLIPSOID`](class_renderingserver.md#class_renderingserver_constant_fog_volume_shape_ellipsoid), [`RenderingServer.FOG_VOLUME_SHAPE_CONE`](class_renderingserver.md#class_renderingserver_constant_fog_volume_shape_cone), [`RenderingServer.FOG_VOLUME_SHAPE_CYLINDER`](class_renderingserver.md#class_renderingserver_constant_fog_volume_shape_cylinder) or [`RenderingServer.FOG_VOLUME_SHAPE_BOX`](class_renderingserver.md#class_renderingserver_constant_fog_volume_shape_box).

 **Note:** Thin fog volumes may appear to flicker when the camera moves or rotates. This can be alleviated by increasing [`ProjectSettings.rendering/environment/volumetric_fog/volume_depth`](class_projectsettings.md#class_projectsettings_property_rendering/environment/volumetric_fog/volume_depth) (at a performance cost) or by decreasing [`Environment.volumetric_fog_length`](class_environment.md#class_environment_property_volumetric_fog_length) (at no performance cost, but at the cost of lower fog range). Alternatively, the **FogVolume** can be made thicker and use a lower density in the [`material`](class_fogvolume.md#class_fogvolume_property_material).

 **Note:** If [`shape`](class_fogvolume.md#class_fogvolume_property_shape) is [`RenderingServer.FOG_VOLUME_SHAPE_CONE`](class_renderingserver.md#class_renderingserver_constant_fog_volume_shape_cone) or [`RenderingServer.FOG_VOLUME_SHAPE_CYLINDER`](class_renderingserver.md#class_renderingserver_constant_fog_volume_shape_cylinder), the cone/cylinder will be adjusted to fit within the size. Non-uniform scaling of cone/cylinder shapes via the [`size`](class_fogvolume.md#class_fogvolume_property_size) property is not supported, but you can scale the **FogVolume** node instead.

[^virtual]: 本方法通常需要用户覆盖才能生效。
[^const]: 本方法无副作用，不会修改该实例的任何成员变量。
[^vararg]: 本方法除了能接受在此处描述的参数外，还能够继续接受任意数量的参数。
[^constructor]: 本方法用于构造某个类型。
[^static]: 调用本方法无需实例，可直接使用类名进行调用。
[^operator]: 本方法描述的是使用本类型作为左操作数的有效运算符。
[^bitfield]: 这个值是由下列位标志构成位掩码的整数。
[^void]: 无返回值。
