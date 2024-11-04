<!-- ⚠ 请勿编辑本文件 ⚠ -->
<!-- 本文档使用脚本从 WeDot 引擎源码仓库生成。 -->
<!-- 生成脚本：https://github.com/WeDot-Engine/WeDot/tree/4.3/doc/tools/make_md.py； -->
<!-- 原文件：https://github.com/WeDot-Engine/WeDot/tree/4.3/doc/classes/CameraAttributes.xml。 -->

<div id="_class_cameraattributes"></div>

# CameraAttributes

**继承：** [`Resource`](class_resource.md) **<** [`RefCounted`](class_refcounted.md) **<** [`Object`](class_object.md)

**派生：** [`CameraAttributesPhysical`](class_cameraattributesphysical.md), [`CameraAttributesPractical`](class_cameraattributespractical.md)

Parent class for camera settings.

## 描述

Controls camera-specific attributes such as depth of field and exposure override.

When used in a [`WorldEnvironment`](class_worldenvironment.md) it provides default settings for exposure, auto-exposure, and depth of field that will be used by all cameras without their own **CameraAttributes**, including the editor camera. When used in a [`Camera3D`](class_camera3d.md) it will override any **CameraAttributes** set in the [`WorldEnvironment`](class_worldenvironment.md). When used in [`VoxelGI`](class_voxelgi.md) or [`LightmapGI`](class_lightmapgi.md), only the exposure settings will be used.

See also [`Environment`](class_environment.md) for general 3D environment settings.

This is a pure virtual class that is inherited by [`CameraAttributesPhysical`](class_cameraattributesphysical.md) and [`CameraAttributesPractical`](class_cameraattributespractical.md).

## 属性

| [`bool`](class_bool.md)   | [`auto_exposure_enabled`](#class_cameraattributes_property_auto_exposure_enabled) | ``false`` |
| [`float`](class_float.md) | [`auto_exposure_scale`](#class_cameraattributes_property_auto_exposure_scale)     | ``0.4``   |
| [`float`](class_float.md) | [`auto_exposure_speed`](#class_cameraattributes_property_auto_exposure_speed)     | ``0.5``   |
| [`float`](class_float.md) | [`exposure_multiplier`](#class_cameraattributes_property_exposure_multiplier)     | ``1.0``   |
| [`float`](class_float.md) | [`exposure_sensitivity`](#class_cameraattributes_property_exposure_sensitivity)   | ``100.0`` |

<!-- rst-class:: classref-section-separator -->

---

## 属性说明

<div id="_class_cameraattributes_property_auto_exposure_enabled"></div>

[`bool`](class_bool.md) **auto_exposure_enabled** = ``false`` <div id="class_cameraattributes_property_auto_exposure_enabled"></div>

- `void` **set_auto_exposure_enabled** ( value: [`bool`](class_bool.md) )
- [`bool`](class_bool.md) **is_auto_exposure_enabled** ( )

If `true`, enables the tonemapping auto exposure mode of the scene renderer. If `true`, the renderer will automatically determine the exposure setting to adapt to the scene's illumination and the observed light.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_cameraattributes_property_auto_exposure_scale"></div>

[`float`](class_float.md) **auto_exposure_scale** = ``0.4`` <div id="class_cameraattributes_property_auto_exposure_scale"></div>

- `void` **set_auto_exposure_scale** ( value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_auto_exposure_scale** ( )

The scale of the auto exposure effect. Affects the intensity of auto exposure.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_cameraattributes_property_auto_exposure_speed"></div>

[`float`](class_float.md) **auto_exposure_speed** = ``0.5`` <div id="class_cameraattributes_property_auto_exposure_speed"></div>

- `void` **set_auto_exposure_speed** ( value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_auto_exposure_speed** ( )

The speed of the auto exposure effect. Affects the time needed for the camera to perform auto exposure.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_cameraattributes_property_exposure_multiplier"></div>

[`float`](class_float.md) **exposure_multiplier** = ``1.0`` <div id="class_cameraattributes_property_exposure_multiplier"></div>

- `void` **set_exposure_multiplier** ( value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_exposure_multiplier** ( )

Multiplier for the exposure amount. A higher value results in a brighter image.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_cameraattributes_property_exposure_sensitivity"></div>

[`float`](class_float.md) **exposure_sensitivity** = ``100.0`` <div id="class_cameraattributes_property_exposure_sensitivity"></div>

- `void` **set_exposure_sensitivity** ( value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_exposure_sensitivity** ( )

Sensitivity of camera sensors, measured in ISO. A higher sensitivity results in a brighter image. Only available when [`ProjectSettings.rendering/lights_and_shadows/use_physical_light_units`](#class_projectsettings_property_rendering/lights_and_shadows/use_physical_light_units) is enabled. When [`auto_exposure_enabled`](#class_cameraattributes_property_auto_exposure_enabled) this can be used as a method of exposure compensation, doubling the value will increase the exposure value (measured in EV100) by 1 stop.

[^virtual]: 本方法通常需要用户覆盖才能生效。
[^const]: 本方法无副作用，不会修改该实例的任何成员变量。
[^vararg]: 本方法除了能接受在此处描述的参数外，还能够继续接受任意数量的参数。
[^constructor]: 本方法用于构造某个类型。
[^static]: 调用本方法无需实例，可直接使用类名进行调用。
[^operator]: 本方法描述的是使用本类型作为左操作数的有效运算符。
[^bitfield]: 这个值是由下列位标志构成位掩码的整数。
[^void]: 无返回值。
