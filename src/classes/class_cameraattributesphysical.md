<!-- ⚠ 请勿编辑本文件 ⚠ -->
<!-- 本文档使用脚本从 WeDot 引擎源码仓库生成。 -->
<!-- 生成脚本：https://github.com/WeDot-Engine/WeDot/tree/4.3/doc/tools/make_md.py； -->
<!-- 原文件：https://github.com/WeDot-Engine/WeDot/tree/4.3/doc/classes/CameraAttributesPhysical.xml。 -->

<div id="_class_cameraattributesphysical"></div>

# CameraAttributesPhysical

**继承：** [`CameraAttributes`](class_cameraattributes.md) **<** [`Resource`](class_resource.md) **<** [`RefCounted`](class_refcounted.md) **<** [`Object`](class_object.md)

Physically-based camera settings.

## 描述

**CameraAttributesPhysical** is used to set rendering settings based on a physically-based camera's settings. It is responsible for exposure, auto-exposure, and depth of field.

When used in a [`WorldEnvironment`](class_worldenvironment.md) it provides default settings for exposure, auto-exposure, and depth of field that will be used by all cameras without their own [`CameraAttributes`](class_cameraattributes.md), including the editor camera. When used in a [`Camera3D`](class_camera3d.md) it will override any [`CameraAttributes`](class_cameraattributes.md) set in the [`WorldEnvironment`](class_worldenvironment.md) and will override the [`Camera3D`](class_camera3d.md) s [`Camera3D.far`](#class_camera3d_property_far), [`Camera3D.near`](#class_camera3d_property_near), [`Camera3D.fov`](#class_camera3d_property_fov), and [`Camera3D.keep_aspect`](#class_camera3d_property_keep_aspect) properties. When used in [`VoxelGI`](class_voxelgi.md) or [`LightmapGI`](class_lightmapgi.md), only the exposure settings will be used.

The default settings are intended for use in an outdoor environment, tips for settings for use in an indoor environment can be found in each setting's documentation.

 **Note:** Depth of field blur is only supported in the Forward+ and Mobile rendering methods, not Compatibility.

## 属性

| [`float`](class_float.md) | [`auto_exposure_max_exposure_value`](#class_cameraattributesphysical_property_auto_exposure_max_exposure_value) | ``10.0``   |
| [`float`](class_float.md) | [`auto_exposure_min_exposure_value`](#class_cameraattributesphysical_property_auto_exposure_min_exposure_value) | ``-8.0``   |
| [`float`](class_float.md) | [`exposure_aperture`](#class_cameraattributesphysical_property_exposure_aperture)                               | ``16.0``   |
| [`float`](class_float.md) | [`exposure_shutter_speed`](#class_cameraattributesphysical_property_exposure_shutter_speed)                     | ``100.0``  |
| [`float`](class_float.md) | [`frustum_far`](#class_cameraattributesphysical_property_frustum_far)                                           | ``4000.0`` |
| [`float`](class_float.md) | [`frustum_focal_length`](#class_cameraattributesphysical_property_frustum_focal_length)                         | ``35.0``   |
| [`float`](class_float.md) | [`frustum_focus_distance`](#class_cameraattributesphysical_property_frustum_focus_distance)                     | ``10.0``   |
| [`float`](class_float.md) | [`frustum_near`](#class_cameraattributesphysical_property_frustum_near)                                         | ``0.05``   |

## 方法

| [`float`](class_float.md) | [`get_fov`](#class_cameraattributesphysical_method_get_fov) ( ) const[^const] |

<!-- rst-class:: classref-section-separator -->

---

## 属性说明

<div id="_class_cameraattributesphysical_property_auto_exposure_max_exposure_value"></div>

[`float`](class_float.md) **auto_exposure_max_exposure_value** = ``10.0`` <div id="class_cameraattributesphysical_property_auto_exposure_max_exposure_value"></div>

- `void` **set_auto_exposure_max_exposure_value** ( value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_auto_exposure_max_exposure_value** ( )

The maximum luminance (in EV100) used when calculating auto exposure. When calculating scene average luminance, color values will be clamped to at least this value. This limits the auto-exposure from exposing below a certain brightness, resulting in a cut off point where the scene will remain bright.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_cameraattributesphysical_property_auto_exposure_min_exposure_value"></div>

[`float`](class_float.md) **auto_exposure_min_exposure_value** = ``-8.0`` <div id="class_cameraattributesphysical_property_auto_exposure_min_exposure_value"></div>

- `void` **set_auto_exposure_min_exposure_value** ( value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_auto_exposure_min_exposure_value** ( )

The minimum luminance luminance (in EV100) used when calculating auto exposure. When calculating scene average luminance, color values will be clamped to at least this value. This limits the auto-exposure from exposing above a certain brightness, resulting in a cut off point where the scene will remain dark.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_cameraattributesphysical_property_exposure_aperture"></div>

[`float`](class_float.md) **exposure_aperture** = ``16.0`` <div id="class_cameraattributesphysical_property_exposure_aperture"></div>

- `void` **set_aperture** ( value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_aperture** ( )

Size of the aperture of the camera, measured in f-stops. An f-stop is a unitless ratio between the focal length of the camera and the diameter of the aperture. A high aperture setting will result in a smaller aperture which leads to a dimmer image and sharper focus. A low aperture results in a wide aperture which lets in more light resulting in a brighter, less-focused image. Default is appropriate for outdoors at daytime (i.e. for use with a default [`DirectionalLight3D`](class_directionallight3d.md)), for indoor lighting, a value between 2 and 4 is more appropriate.

Only available when [`ProjectSettings.rendering/lights_and_shadows/use_physical_light_units`](#class_projectsettings_property_rendering/lights_and_shadows/use_physical_light_units) is enabled.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_cameraattributesphysical_property_exposure_shutter_speed"></div>

[`float`](class_float.md) **exposure_shutter_speed** = ``100.0`` <div id="class_cameraattributesphysical_property_exposure_shutter_speed"></div>

- `void` **set_shutter_speed** ( value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_shutter_speed** ( )

Time for shutter to open and close, evaluated as `1 / shutter_speed` seconds. A higher value will allow less light (leading to a darker image), while a lower value will allow more light (leading to a brighter image).

Only available when [`ProjectSettings.rendering/lights_and_shadows/use_physical_light_units`](#class_projectsettings_property_rendering/lights_and_shadows/use_physical_light_units) is enabled.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_cameraattributesphysical_property_frustum_far"></div>

[`float`](class_float.md) **frustum_far** = ``4000.0`` <div id="class_cameraattributesphysical_property_frustum_far"></div>

- `void` **set_far** ( value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_far** ( )

Override value for [`Camera3D.far`](#class_camera3d_property_far). Used internally when calculating depth of field. When attached to a [`Camera3D`](class_camera3d.md) as its [`Camera3D.attributes`](#class_camera3d_property_attributes), it will override the [`Camera3D.far`](#class_camera3d_property_far) property.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_cameraattributesphysical_property_frustum_focal_length"></div>

[`float`](class_float.md) **frustum_focal_length** = ``35.0`` <div id="class_cameraattributesphysical_property_frustum_focal_length"></div>

- `void` **set_focal_length** ( value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_focal_length** ( )

Distance between camera lens and camera aperture, measured in millimeters. Controls field of view and depth of field. A larger focal length will result in a smaller field of view and a narrower depth of field meaning fewer objects will be in focus. A smaller focal length will result in a wider field of view and a larger depth of field meaning more objects will be in focus. When attached to a [`Camera3D`](class_camera3d.md) as its [`Camera3D.attributes`](#class_camera3d_property_attributes), it will override the [`Camera3D.fov`](#class_camera3d_property_fov) property and the [`Camera3D.keep_aspect`](#class_camera3d_property_keep_aspect) property.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_cameraattributesphysical_property_frustum_focus_distance"></div>

[`float`](class_float.md) **frustum_focus_distance** = ``10.0`` <div id="class_cameraattributesphysical_property_frustum_focus_distance"></div>

- `void` **set_focus_distance** ( value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_focus_distance** ( )

Distance from camera of object that will be in focus, measured in meters. Internally this will be clamped to be at least 1 millimeter larger than [`frustum_focal_length`](#class_cameraattributesphysical_property_frustum_focal_length).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_cameraattributesphysical_property_frustum_near"></div>

[`float`](class_float.md) **frustum_near** = ``0.05`` <div id="class_cameraattributesphysical_property_frustum_near"></div>

- `void` **set_near** ( value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_near** ( )

Override value for [`Camera3D.near`](#class_camera3d_property_near). Used internally when calculating depth of field. When attached to a [`Camera3D`](class_camera3d.md) as its [`Camera3D.attributes`](#class_camera3d_property_attributes), it will override the [`Camera3D.near`](#class_camera3d_property_near) property.

<!-- rst-class:: classref-section-separator -->

---

## 方法说明

<div id="_class_cameraattributesphysical_method_get_fov"></div>

[`float`](class_float.md) **get_fov** ( ) const[^const]<div id="class_cameraattributesphysical_method_get_fov"></div>

Returns the vertical field of view that corresponds to the [`frustum_focal_length`](#class_cameraattributesphysical_property_frustum_focal_length). This value is calculated internally whenever [`frustum_focal_length`](#class_cameraattributesphysical_property_frustum_focal_length) is changed.

[^virtual]: 本方法通常需要用户覆盖才能生效。
[^const]: 本方法无副作用，不会修改该实例的任何成员变量。
[^vararg]: 本方法除了能接受在此处描述的参数外，还能够继续接受任意数量的参数。
[^constructor]: 本方法用于构造某个类型。
[^static]: 调用本方法无需实例，可直接使用类名进行调用。
[^operator]: 本方法描述的是使用本类型作为左操作数的有效运算符。
[^bitfield]: 这个值是由下列位标志构成位掩码的整数。
[^void]: 无返回值。
