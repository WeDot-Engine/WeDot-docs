<!-- ⚠ 请勿编辑本文件 ⚠ -->
<!-- 本文档使用脚本从 WeDot 引擎源码仓库生成。 -->
<!-- 生成脚本：https://github.com/WeDot-Engine/WeDot/tree/4.3/doc/tools/make_md.py； -->
<!-- 原文件：https://github.com/WeDot-Engine/WeDot/tree/4.3/doc/classes/CameraAttributesPractical.xml。 -->

<div id="_class_cameraattributespractical"></div>

# CameraAttributesPractical

**继承：** [`CameraAttributes`](class_cameraattributes.md) **<** [`Resource`](class_resource.md) **<** [`RefCounted`](class_refcounted.md) **<** [`Object`](class_object.md)

Camera settings in an easy to use format.

## 描述

Controls camera-specific attributes such as auto-exposure, depth of field, and exposure override.

When used in a [`WorldEnvironment`](class_worldenvironment.md) it provides default settings for exposure, auto-exposure, and depth of field that will be used by all cameras without their own [`CameraAttributes`](class_cameraattributes.md), including the editor camera. When used in a [`Camera3D`](class_camera3d.md) it will override any [`CameraAttributes`](class_cameraattributes.md) set in the [`WorldEnvironment`](class_worldenvironment.md). When used in [`VoxelGI`](class_voxelgi.md) or [`LightmapGI`](class_lightmapgi.md), only the exposure settings will be used.

## 属性

| [`float`](class_float.md) | [`auto_exposure_max_sensitivity`](#class_cameraattributespractical_property_auto_exposure_max_sensitivity) | ``800.0`` |
| [`float`](class_float.md) | [`auto_exposure_min_sensitivity`](#class_cameraattributespractical_property_auto_exposure_min_sensitivity) | ``0.0``   |
| [`float`](class_float.md) | [`dof_blur_amount`](#class_cameraattributespractical_property_dof_blur_amount)                             | ``0.1``   |
| [`float`](class_float.md) | [`dof_blur_far_distance`](#class_cameraattributespractical_property_dof_blur_far_distance)                 | ``10.0``  |
| [`bool`](class_bool.md)   | [`dof_blur_far_enabled`](#class_cameraattributespractical_property_dof_blur_far_enabled)                   | ``false`` |
| [`float`](class_float.md) | [`dof_blur_far_transition`](#class_cameraattributespractical_property_dof_blur_far_transition)             | ``5.0``   |
| [`float`](class_float.md) | [`dof_blur_near_distance`](#class_cameraattributespractical_property_dof_blur_near_distance)               | ``2.0``   |
| [`bool`](class_bool.md)   | [`dof_blur_near_enabled`](#class_cameraattributespractical_property_dof_blur_near_enabled)                 | ``false`` |
| [`float`](class_float.md) | [`dof_blur_near_transition`](#class_cameraattributespractical_property_dof_blur_near_transition)           | ``1.0``   |

<!-- rst-class:: classref-section-separator -->

---

## 属性说明

<div id="_class_cameraattributespractical_property_auto_exposure_max_sensitivity"></div>

[`float`](class_float.md) **auto_exposure_max_sensitivity** = ``800.0`` <div id="class_cameraattributespractical_property_auto_exposure_max_sensitivity"></div>

- `void` **set_auto_exposure_max_sensitivity** ( value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_auto_exposure_max_sensitivity** ( )

The maximum sensitivity (in ISO) used when calculating auto exposure. When calculating scene average luminance, color values will be clamped to at least this value. This limits the auto-exposure from exposing below a certain brightness, resulting in a cut off point where the scene will remain bright.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_cameraattributespractical_property_auto_exposure_min_sensitivity"></div>

[`float`](class_float.md) **auto_exposure_min_sensitivity** = ``0.0`` <div id="class_cameraattributespractical_property_auto_exposure_min_sensitivity"></div>

- `void` **set_auto_exposure_min_sensitivity** ( value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_auto_exposure_min_sensitivity** ( )

The minimum sensitivity (in ISO) used when calculating auto exposure. When calculating scene average luminance, color values will be clamped to at least this value. This limits the auto-exposure from exposing above a certain brightness, resulting in a cut off point where the scene will remain dark.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_cameraattributespractical_property_dof_blur_amount"></div>

[`float`](class_float.md) **dof_blur_amount** = ``0.1`` <div id="class_cameraattributespractical_property_dof_blur_amount"></div>

- `void` **set_dof_blur_amount** ( value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_dof_blur_amount** ( )

Sets the maximum amount of blur. When using physically-based blur amounts, will instead act as a multiplier. High values lead to an increased amount of blurriness, but can be much more expensive to calculate. It is best to keep this as low as possible for a given art style.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_cameraattributespractical_property_dof_blur_far_distance"></div>

[`float`](class_float.md) **dof_blur_far_distance** = ``10.0`` <div id="class_cameraattributespractical_property_dof_blur_far_distance"></div>

- `void` **set_dof_blur_far_distance** ( value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_dof_blur_far_distance** ( )

Objects further from the [`Camera3D`](class_camera3d.md) by this amount will be blurred by the depth of field effect. Measured in meters.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_cameraattributespractical_property_dof_blur_far_enabled"></div>

[`bool`](class_bool.md) **dof_blur_far_enabled** = ``false`` <div id="class_cameraattributespractical_property_dof_blur_far_enabled"></div>

- `void` **set_dof_blur_far_enabled** ( value: [`bool`](class_bool.md) )
- [`bool`](class_bool.md) **is_dof_blur_far_enabled** ( )

Enables depth of field blur for objects further than [`dof_blur_far_distance`](#class_cameraattributespractical_property_dof_blur_far_distance). Strength of blur is controlled by [`dof_blur_amount`](#class_cameraattributespractical_property_dof_blur_amount) and modulated by [`dof_blur_far_transition`](#class_cameraattributespractical_property_dof_blur_far_transition).

 **Note:** Depth of field blur is only supported in the Forward+ and Mobile rendering methods, not Compatibility.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_cameraattributespractical_property_dof_blur_far_transition"></div>

[`float`](class_float.md) **dof_blur_far_transition** = ``5.0`` <div id="class_cameraattributespractical_property_dof_blur_far_transition"></div>

- `void` **set_dof_blur_far_transition** ( value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_dof_blur_far_transition** ( )

When positive, distance over which (starting from [`dof_blur_far_distance`](#class_cameraattributespractical_property_dof_blur_far_distance)) blur effect will scale from 0 to [`dof_blur_amount`](#class_cameraattributespractical_property_dof_blur_amount). When negative, uses physically-based scaling so depth of field effect will scale from 0 at [`dof_blur_far_distance`](#class_cameraattributespractical_property_dof_blur_far_distance) and will increase in a physically accurate way as objects get further from the [`Camera3D`](class_camera3d.md).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_cameraattributespractical_property_dof_blur_near_distance"></div>

[`float`](class_float.md) **dof_blur_near_distance** = ``2.0`` <div id="class_cameraattributespractical_property_dof_blur_near_distance"></div>

- `void` **set_dof_blur_near_distance** ( value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_dof_blur_near_distance** ( )

Objects closer from the [`Camera3D`](class_camera3d.md) by this amount will be blurred by the depth of field effect. Measured in meters.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_cameraattributespractical_property_dof_blur_near_enabled"></div>

[`bool`](class_bool.md) **dof_blur_near_enabled** = ``false`` <div id="class_cameraattributespractical_property_dof_blur_near_enabled"></div>

- `void` **set_dof_blur_near_enabled** ( value: [`bool`](class_bool.md) )
- [`bool`](class_bool.md) **is_dof_blur_near_enabled** ( )

Enables depth of field blur for objects closer than [`dof_blur_near_distance`](#class_cameraattributespractical_property_dof_blur_near_distance). Strength of blur is controlled by [`dof_blur_amount`](#class_cameraattributespractical_property_dof_blur_amount) and modulated by [`dof_blur_near_transition`](#class_cameraattributespractical_property_dof_blur_near_transition).

 **Note:** Depth of field blur is only supported in the Forward+ and Mobile rendering methods, not Compatibility.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_cameraattributespractical_property_dof_blur_near_transition"></div>

[`float`](class_float.md) **dof_blur_near_transition** = ``1.0`` <div id="class_cameraattributespractical_property_dof_blur_near_transition"></div>

- `void` **set_dof_blur_near_transition** ( value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_dof_blur_near_transition** ( )

When positive, distance over which blur effect will scale from 0 to [`dof_blur_amount`](#class_cameraattributespractical_property_dof_blur_amount), ending at [`dof_blur_near_distance`](#class_cameraattributespractical_property_dof_blur_near_distance). When negative, uses physically-based scaling so depth of field effect will scale from 0 at [`dof_blur_near_distance`](#class_cameraattributespractical_property_dof_blur_near_distance) and will increase in a physically accurate way as objects get closer to the [`Camera3D`](class_camera3d.md).

[^virtual]: 本方法通常需要用户覆盖才能生效。
[^const]: 本方法无副作用，不会修改该实例的任何成员变量。
[^vararg]: 本方法除了能接受在此处描述的参数外，还能够继续接受任意数量的参数。
[^constructor]: 本方法用于构造某个类型。
[^static]: 调用本方法无需实例，可直接使用类名进行调用。
[^operator]: 本方法描述的是使用本类型作为左操作数的有效运算符。
[^bitfield]: 这个值是由下列位标志构成位掩码的整数。
[^void]: 无返回值。
