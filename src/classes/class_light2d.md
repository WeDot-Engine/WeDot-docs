<!-- ⚠ 请勿编辑本文件 ⚠ -->
<!-- 本文档使用脚本从 WeDot 引擎源码仓库生成。 -->
<!-- 生成脚本：https://github.com/WeDot-Engine/WeDot/tree/4.3/doc/tools/make_md.py； -->
<!-- 原文件：https://github.com/WeDot-Engine/WeDot/tree/4.3/doc/classes/Light2D.xml。 -->

<div id="_class_light2d"></div>

# Light2D

**继承：** [`Node2D`](class_node2d.md) **<** [`CanvasItem`](class_canvasitem.md) **<** [`Node`](class_node.md) **<** [`Object`](class_object.md)

**派生：** [`DirectionalLight2D`](class_directionallight2d.md), [`PointLight2D`](class_pointlight2d.md)

Casts light in a 2D environment.

## 描述

Casts light in a 2D environment. A light is defined as a color, an energy value, a mode (see constants), and various other parameters (range and shadows-related).

## 属性

| [BlendMode](#enum_light2d_blendmode)       | [`blend_mode`](#class_light2d_property_blend_mode)                       | ``0``                 |
| [`Color`](class_color.md)                  | [`color`](#class_light2d_property_color)                                 | ``Color(1, 1, 1, 1)`` |
| [`bool`](class_bool.md)                    | [`editor_only`](#class_light2d_property_editor_only)                     | ``false``             |
| [`bool`](class_bool.md)                    | [`enabled`](#class_light2d_property_enabled)                             | ``true``              |
| [`float`](class_float.md)                  | [`energy`](#class_light2d_property_energy)                               | ``1.0``               |
| [`int`](class_int.md)                      | [`range_item_cull_mask`](#class_light2d_property_range_item_cull_mask)   | ``1``                 |
| [`int`](class_int.md)                      | [`range_layer_max`](#class_light2d_property_range_layer_max)             | ``0``                 |
| [`int`](class_int.md)                      | [`range_layer_min`](#class_light2d_property_range_layer_min)             | ``0``                 |
| [`int`](class_int.md)                      | [`range_z_max`](#class_light2d_property_range_z_max)                     | ``1024``              |
| [`int`](class_int.md)                      | [`range_z_min`](#class_light2d_property_range_z_min)                     | ``-1024``             |
| [`Color`](class_color.md)                  | [`shadow_color`](#class_light2d_property_shadow_color)                   | ``Color(0, 0, 0, 0)`` |
| [`bool`](class_bool.md)                    | [`shadow_enabled`](#class_light2d_property_shadow_enabled)               | ``false``             |
| [ShadowFilter](#enum_light2d_shadowfilter) | [`shadow_filter`](#class_light2d_property_shadow_filter)                 | ``0``                 |
| [`float`](class_float.md)                  | [`shadow_filter_smooth`](#class_light2d_property_shadow_filter_smooth)   | ``0.0``               |
| [`int`](class_int.md)                      | [`shadow_item_cull_mask`](#class_light2d_property_shadow_item_cull_mask) | ``1``                 |

## 方法

| [`float`](class_float.md) | [`get_height`](#class_light2d_method_get_height) ( ) const[^const]                     |
| `void`                    | [`set_height`](#class_light2d_method_set_height) ( height: [`float`](class_float.md) ) |

<!-- rst-class:: classref-section-separator -->

---

## 枚举

<div id="_class_enum_light2d_shadowfilter"></div>

enum **ShadowFilter**: <div id="enum_light2d_shadowfilter"></div>

<div id="_class_light2d_constant_shadow_filter_none"></div>

[ShadowFilter](#enum_light2d_shadowfilter) **SHADOW_FILTER_NONE** = ``0``

No filter applies to the shadow map. This provides hard shadow edges and is the fastest to render. See [`shadow_filter`](#class_light2d_property_shadow_filter).

<div id="_class_light2d_constant_shadow_filter_pcf5"></div>

[ShadowFilter](#enum_light2d_shadowfilter) **SHADOW_FILTER_PCF5** = ``1``

Percentage closer filtering (5 samples) applies to the shadow map. This is slower compared to hard shadow rendering. See [`shadow_filter`](#class_light2d_property_shadow_filter).

<div id="_class_light2d_constant_shadow_filter_pcf13"></div>

[ShadowFilter](#enum_light2d_shadowfilter) **SHADOW_FILTER_PCF13** = ``2``

Percentage closer filtering (13 samples) applies to the shadow map. This is the slowest shadow filtering mode, and should be used sparingly. See [`shadow_filter`](#class_light2d_property_shadow_filter).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_enum_light2d_blendmode"></div>

enum **BlendMode**: <div id="enum_light2d_blendmode"></div>

<div id="_class_light2d_constant_blend_mode_add"></div>

[BlendMode](#enum_light2d_blendmode) **BLEND_MODE_ADD** = ``0``

Adds the value of pixels corresponding to the Light2D to the values of pixels under it. This is the common behavior of a light.

<div id="_class_light2d_constant_blend_mode_sub"></div>

[BlendMode](#enum_light2d_blendmode) **BLEND_MODE_SUB** = ``1``

Subtracts the value of pixels corresponding to the Light2D to the values of pixels under it, resulting in inversed light effect.

<div id="_class_light2d_constant_blend_mode_mix"></div>

[BlendMode](#enum_light2d_blendmode) **BLEND_MODE_MIX** = ``2``

Mix the value of pixels corresponding to the Light2D to the values of pixels under it by linear interpolation.

<!-- rst-class:: classref-section-separator -->

---

## 属性说明

<div id="_class_light2d_property_blend_mode"></div>

[BlendMode](#enum_light2d_blendmode) **blend_mode** = ``0`` <div id="class_light2d_property_blend_mode"></div>

- `void` **set_blend_mode** ( value: [BlendMode](#enum_light2d_blendmode) )
- [BlendMode](#enum_light2d_blendmode) **get_blend_mode** ( )

The Light2D's blend mode. See [BlendMode](#enum_light2d_blendmode) constants for values.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_light2d_property_color"></div>

[`Color`](class_color.md) **color** = ``Color(1, 1, 1, 1)`` <div id="class_light2d_property_color"></div>

- `void` **set_color** ( value: [`Color`](class_color.md) )
- [`Color`](class_color.md) **get_color** ( )

The Light2D's [`Color`](class_color.md).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_light2d_property_editor_only"></div>

[`bool`](class_bool.md) **editor_only** = ``false`` <div id="class_light2d_property_editor_only"></div>

- `void` **set_editor_only** ( value: [`bool`](class_bool.md) )
- [`bool`](class_bool.md) **is_editor_only** ( )

If `true`, Light2D will only appear when editing the scene.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_light2d_property_enabled"></div>

[`bool`](class_bool.md) **enabled** = ``true`` <div id="class_light2d_property_enabled"></div>

- `void` **set_enabled** ( value: [`bool`](class_bool.md) )
- [`bool`](class_bool.md) **is_enabled** ( )

If `true`, Light2D will emit light.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_light2d_property_energy"></div>

[`float`](class_float.md) **energy** = ``1.0`` <div id="class_light2d_property_energy"></div>

- `void` **set_energy** ( value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_energy** ( )

The Light2D's energy value. The larger the value, the stronger the light.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_light2d_property_range_item_cull_mask"></div>

[`int`](class_int.md) **range_item_cull_mask** = ``1`` <div id="class_light2d_property_range_item_cull_mask"></div>

- `void` **set_item_cull_mask** ( value: [`int`](class_int.md) )
- [`int`](class_int.md) **get_item_cull_mask** ( )

The layer mask. Only objects with a matching [`CanvasItem.light_mask`](#class_canvasitem_property_light_mask) will be affected by the Light2D. See also [`shadow_item_cull_mask`](#class_light2d_property_shadow_item_cull_mask), which affects which objects can cast shadows.

 **Note:** [`range_item_cull_mask`](#class_light2d_property_range_item_cull_mask) is ignored by [`DirectionalLight2D`](class_directionallight2d.md), which will always light a 2D node regardless of the 2D node's [`CanvasItem.light_mask`](#class_canvasitem_property_light_mask).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_light2d_property_range_layer_max"></div>

[`int`](class_int.md) **range_layer_max** = ``0`` <div id="class_light2d_property_range_layer_max"></div>

- `void` **set_layer_range_max** ( value: [`int`](class_int.md) )
- [`int`](class_int.md) **get_layer_range_max** ( )

Maximum layer value of objects that are affected by the Light2D.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_light2d_property_range_layer_min"></div>

[`int`](class_int.md) **range_layer_min** = ``0`` <div id="class_light2d_property_range_layer_min"></div>

- `void` **set_layer_range_min** ( value: [`int`](class_int.md) )
- [`int`](class_int.md) **get_layer_range_min** ( )

Minimum layer value of objects that are affected by the Light2D.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_light2d_property_range_z_max"></div>

[`int`](class_int.md) **range_z_max** = ``1024`` <div id="class_light2d_property_range_z_max"></div>

- `void` **set_z_range_max** ( value: [`int`](class_int.md) )
- [`int`](class_int.md) **get_z_range_max** ( )

Maximum `z` value of objects that are affected by the Light2D.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_light2d_property_range_z_min"></div>

[`int`](class_int.md) **range_z_min** = ``-1024`` <div id="class_light2d_property_range_z_min"></div>

- `void` **set_z_range_min** ( value: [`int`](class_int.md) )
- [`int`](class_int.md) **get_z_range_min** ( )

Minimum `z` value of objects that are affected by the Light2D.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_light2d_property_shadow_color"></div>

[`Color`](class_color.md) **shadow_color** = ``Color(0, 0, 0, 0)`` <div id="class_light2d_property_shadow_color"></div>

- `void` **set_shadow_color** ( value: [`Color`](class_color.md) )
- [`Color`](class_color.md) **get_shadow_color** ( )

[`Color`](class_color.md) of shadows cast by the Light2D.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_light2d_property_shadow_enabled"></div>

[`bool`](class_bool.md) **shadow_enabled** = ``false`` <div id="class_light2d_property_shadow_enabled"></div>

- `void` **set_shadow_enabled** ( value: [`bool`](class_bool.md) )
- [`bool`](class_bool.md) **is_shadow_enabled** ( )

If `true`, the Light2D will cast shadows.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_light2d_property_shadow_filter"></div>

[ShadowFilter](#enum_light2d_shadowfilter) **shadow_filter** = ``0`` <div id="class_light2d_property_shadow_filter"></div>

- `void` **set_shadow_filter** ( value: [ShadowFilter](#enum_light2d_shadowfilter) )
- [ShadowFilter](#enum_light2d_shadowfilter) **get_shadow_filter** ( )

Shadow filter type. See [ShadowFilter](#enum_light2d_shadowfilter) for possible values.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_light2d_property_shadow_filter_smooth"></div>

[`float`](class_float.md) **shadow_filter_smooth** = ``0.0`` <div id="class_light2d_property_shadow_filter_smooth"></div>

- `void` **set_shadow_smooth** ( value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_shadow_smooth** ( )

Smoothing value for shadows. Higher values will result in softer shadows, at the cost of visible streaks that can appear in shadow rendering. [`shadow_filter_smooth`](#class_light2d_property_shadow_filter_smooth) only has an effect if [`shadow_filter`](#class_light2d_property_shadow_filter) is [`SHADOW_FILTER_PCF5`](#class_light2d_constant_shadow_filter_pcf5) or [`SHADOW_FILTER_PCF13`](#class_light2d_constant_shadow_filter_pcf13).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_light2d_property_shadow_item_cull_mask"></div>

[`int`](class_int.md) **shadow_item_cull_mask** = ``1`` <div id="class_light2d_property_shadow_item_cull_mask"></div>

- `void` **set_item_shadow_cull_mask** ( value: [`int`](class_int.md) )
- [`int`](class_int.md) **get_item_shadow_cull_mask** ( )

The shadow mask. Used with [`LightOccluder2D`](class_lightoccluder2d.md) to cast shadows. Only occluders with a matching [`CanvasItem.light_mask`](#class_canvasitem_property_light_mask) will cast shadows. See also [`range_item_cull_mask`](#class_light2d_property_range_item_cull_mask), which affects which objects can *receive* the light.

<!-- rst-class:: classref-section-separator -->

---

## 方法说明

<div id="_class_light2d_method_get_height"></div>

[`float`](class_float.md) **get_height** ( ) const[^const]<div id="class_light2d_method_get_height"></div>

Returns the light's height, which is used in 2D normal mapping. See [`PointLight2D.height`](#class_pointlight2d_property_height) and [`DirectionalLight2D.height`](#class_directionallight2d_property_height).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_light2d_method_set_height"></div>

`void` **set_height** ( height: [`float`](class_float.md) )<div id="class_light2d_method_set_height"></div>

Sets the light's height, which is used in 2D normal mapping. See [`PointLight2D.height`](#class_pointlight2d_property_height) and [`DirectionalLight2D.height`](#class_directionallight2d_property_height).

[^virtual]: 本方法通常需要用户覆盖才能生效。
[^const]: 本方法无副作用，不会修改该实例的任何成员变量。
[^vararg]: 本方法除了能接受在此处描述的参数外，还能够继续接受任意数量的参数。
[^constructor]: 本方法用于构造某个类型。
[^static]: 调用本方法无需实例，可直接使用类名进行调用。
[^operator]: 本方法描述的是使用本类型作为左操作数的有效运算符。
[^bitfield]: 这个值是由下列位标志构成位掩码的整数。
[^void]: 无返回值。
