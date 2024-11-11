<!-- ⚠ 请勿编辑本文件 ⚠ -->
<!-- 本文档使用脚本从 WeDot 引擎源码仓库生成。 -->
<!-- 生成脚本：https://github.com/WeDot-Engine/WeDot/tree/master/doc/tools/make_md.py； -->
<!-- 原文件：https://github.com/WeDot-Engine/WeDot/tree/master/modules/mobile_vr/doc_classes/MobileVRInterface.xml。 -->

<div id="_class_mobilevrinterface"></div>

# MobileVRInterface

**继承：** [`XRInterface`](class_xrinterface.md) **<** [`RefCounted`](class_refcounted.md) **<** [`Object`](class_object.md)

Generic mobile VR implementation.

## 描述

This is a generic mobile VR implementation where you need to provide details about the phone and HMD used. It does not rely on any existing framework. This is the most basic interface we have. For the best effect, you need a mobile phone with a gyroscope and accelerometer.

Note that even though there is no positional tracking, the camera will assume the headset is at a height of 1.85 meters. You can change this by setting [`eye_height`](class_mobilevrinterface.md#class_mobilevrinterface_property_eye_height).

You can initialize this interface as follows:

```

    var interface = XRServer.find_interface("Native mobile")
    if interface and interface.initialize():
        get_viewport().use_xr = true
```



## 属性

|||
|:-:|:--|
| [`float`](class_float.md)                      | [`display_to_lens`](class_mobilevrinterface.md#class_mobilevrinterface_property_display_to_lens) | ``4.0``                                                                                              |
| [`float`](class_float.md)                      | [`display_width`](class_mobilevrinterface.md#class_mobilevrinterface_property_display_width)     | ``14.5``                                                                                             |
| [`float`](class_float.md)                      | [`eye_height`](class_mobilevrinterface.md#class_mobilevrinterface_property_eye_height)           | ``1.85``                                                                                             |
| [`float`](class_float.md)                      | [`iod`](class_mobilevrinterface.md#class_mobilevrinterface_property_iod)                         | ``6.0``                                                                                              |
| [`float`](class_float.md)                      | [`k1`](class_mobilevrinterface.md#class_mobilevrinterface_property_k1)                           | ``0.215``                                                                                            |
| [`float`](class_float.md)                      | [`k2`](class_mobilevrinterface.md#class_mobilevrinterface_property_k2)                           | ``0.215``                                                                                            |
| [`Rect2`](class_rect2.md)                      | [`offset_rect`](class_mobilevrinterface.md#class_mobilevrinterface_property_offset_rect)         | ``Rect2(0, 0, 1, 1)``                                                                                |
| [`float`](class_float.md)                      | [`oversample`](class_mobilevrinterface.md#class_mobilevrinterface_property_oversample)           | ``1.5``                                                                                              |
| [`float`](class_float.md)                      | [`vrs_min_radius`](class_mobilevrinterface.md#class_mobilevrinterface_property_vrs_min_radius)   | ``20.0``                                                                                             |
| [`float`](class_float.md)                      | [`vrs_strength`](class_mobilevrinterface.md#class_mobilevrinterface_property_vrs_strength)       | ``1.0``                                                                                              |
| [PlayAreaMode](#enum_xrinterface_playareamode) | xr_play_area_mode                                                                                | ``1`` (overrides [`XRInterface`](class_xrinterface.md#class_xrinterface_property_xr_play_area_mode)) |

<!-- rst-class:: classref-section-separator -->

---

## 属性说明

<div id="_class_mobilevrinterface_property_display_to_lens"></div>

[`float`](class_float.md) **display_to_lens** = ``4.0`` <div id="class_mobilevrinterface_property_display_to_lens"></div>

- `void` **set_display_to_lens** ( value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_display_to_lens** ( )

The distance between the display and the lenses inside of the device in centimeters.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_mobilevrinterface_property_display_width"></div>

[`float`](class_float.md) **display_width** = ``14.5`` <div id="class_mobilevrinterface_property_display_width"></div>

- `void` **set_display_width** ( value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_display_width** ( )

The width of the display in centimeters.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_mobilevrinterface_property_eye_height"></div>

[`float`](class_float.md) **eye_height** = ``1.85`` <div id="class_mobilevrinterface_property_eye_height"></div>

- `void` **set_eye_height** ( value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_eye_height** ( )

The height at which the camera is placed in relation to the ground (i.e. [`XROrigin3D`](class_xrorigin3d.md) node).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_mobilevrinterface_property_iod"></div>

[`float`](class_float.md) **iod** = ``6.0`` <div id="class_mobilevrinterface_property_iod"></div>

- `void` **set_iod** ( value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_iod** ( )

The interocular distance, also known as the interpupillary distance. The distance between the pupils of the left and right eye.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_mobilevrinterface_property_k1"></div>

[`float`](class_float.md) **k1** = ``0.215`` <div id="class_mobilevrinterface_property_k1"></div>

- `void` **set_k1** ( value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_k1** ( )

The k1 lens factor is one of the two constants that define the strength of the lens used and directly influences the lens distortion effect.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_mobilevrinterface_property_k2"></div>

[`float`](class_float.md) **k2** = ``0.215`` <div id="class_mobilevrinterface_property_k2"></div>

- `void` **set_k2** ( value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_k2** ( )

The k2 lens factor, see k1.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_mobilevrinterface_property_offset_rect"></div>

[`Rect2`](class_rect2.md) **offset_rect** = ``Rect2(0, 0, 1, 1)`` <div id="class_mobilevrinterface_property_offset_rect"></div>

- `void` **set_offset_rect** ( value: [`Rect2`](class_rect2.md) )
- [`Rect2`](class_rect2.md) **get_offset_rect** ( )

Set the offset rect relative to the area being rendered. A length of 1 represents the whole rendering area on that axis.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_mobilevrinterface_property_oversample"></div>

[`float`](class_float.md) **oversample** = ``1.5`` <div id="class_mobilevrinterface_property_oversample"></div>

- `void` **set_oversample** ( value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_oversample** ( )

The oversample setting. Because of the lens distortion we have to render our buffers at a higher resolution then the screen can natively handle. A value between 1.5 and 2.0 often provides good results but at the cost of performance.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_mobilevrinterface_property_vrs_min_radius"></div>

[`float`](class_float.md) **vrs_min_radius** = ``20.0`` <div id="class_mobilevrinterface_property_vrs_min_radius"></div>

- `void` **set_vrs_min_radius** ( value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_vrs_min_radius** ( )

The minimum radius around the focal point where full quality is guaranteed if VRS is used as a percentage of screen size.

 **Note:** Mobile and Forward+ renderers only. Requires [`Viewport.vrs_mode`](class_viewport.md#class_viewport_property_vrs_mode) to be set to [`Viewport.VRS_XR`](class_viewport.md#class_viewport_constant_vrs_xr).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_mobilevrinterface_property_vrs_strength"></div>

[`float`](class_float.md) **vrs_strength** = ``1.0`` <div id="class_mobilevrinterface_property_vrs_strength"></div>

- `void` **set_vrs_strength** ( value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_vrs_strength** ( )

The strength used to calculate the VRS density map. The greater this value, the more noticeable VRS is. This improves performance at the cost of quality.

 **Note:** Mobile and Forward+ renderers only. Requires [`Viewport.vrs_mode`](class_viewport.md#class_viewport_property_vrs_mode) to be set to [`Viewport.VRS_XR`](class_viewport.md#class_viewport_constant_vrs_xr).

[^virtual]: 本方法通常需要用户覆盖才能生效。
[^const]: 本方法无副作用，不会修改该实例的任何成员变量。
[^vararg]: 本方法除了能接受在此处描述的参数外，还能够继续接受任意数量的参数。
[^constructor]: 本方法用于构造某个类型。
[^static]: 调用本方法无需实例，可直接使用类名进行调用。
[^operator]: 本方法描述的是使用本类型作为左操作数的有效运算符。
[^bitfield]: 这个值是由下列位标志构成位掩码的整数。
[^void]: 无返回值。
