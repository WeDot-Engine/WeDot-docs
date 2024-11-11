<!-- ⚠ 请勿编辑本文件 ⚠ -->
<!-- 本文档使用脚本从 WeDot 引擎源码仓库生成。 -->
<!-- 生成脚本：https://github.com/WeDot-Engine/WeDot/tree/master/doc/tools/make_md.py； -->
<!-- 原文件：https://github.com/WeDot-Engine/WeDot/tree/master/doc/classes/CompositorEffect.xml。 -->

<div id="_class_compositoreffect"></div>

# CompositorEffect

**实验性：** The implementation may change as more of the rendering internals are exposed over time.

**继承：** [`Resource`](class_resource.md) **<** [`RefCounted`](class_refcounted.md) **<** [`Object`](class_object.md)

This resource allows for creating a custom rendering effect.

## 描述

This resource defines a custom rendering effect that can be applied to [`Viewport`](class_viewport.md) s through the viewports' [`Environment`](class_environment.md). You can implement a callback that is called during rendering at a given stage of the rendering pipeline and allows you to insert additional passes. Note that this callback happens on the rendering thread. CompositorEffect is an abstract base class and must be extended to implement specific rendering logic.

## 属性

|||
|:-:|:--|
| [`bool`](class_bool.md)                                         | [`access_resolved_color`](class_compositoreffect.md#class_compositoreffect_property_access_resolved_color)     |
| [`bool`](class_bool.md)                                         | [`access_resolved_depth`](class_compositoreffect.md#class_compositoreffect_property_access_resolved_depth)     |
| [EffectCallbackType](#enum_compositoreffect_effectcallbacktype) | [`effect_callback_type`](class_compositoreffect.md#class_compositoreffect_property_effect_callback_type)       |
| [`bool`](class_bool.md)                                         | [`enabled`](class_compositoreffect.md#class_compositoreffect_property_enabled)                                 |
| [`bool`](class_bool.md)                                         | [`needs_motion_vectors`](class_compositoreffect.md#class_compositoreffect_property_needs_motion_vectors)       |
| [`bool`](class_bool.md)                                         | [`needs_normal_roughness`](class_compositoreffect.md#class_compositoreffect_property_needs_normal_roughness)   |
| [`bool`](class_bool.md)                                         | [`needs_separate_specular`](class_compositoreffect.md#class_compositoreffect_property_needs_separate_specular) |

## 方法

|||
|:-:|:--|
| `void` | [`_render_callback`](class_compositoreffect.md#class_compositoreffect_private_method__render_callback) ( effect_callback_type: [`int`](class_int.md), render_data: [`RenderData`](class_renderdata.md) ) virtual[^virtual] |

<!-- rst-class:: classref-section-separator -->

---

## 枚举

<div id="_class_enum_compositoreffect_effectcallbacktype"></div>

enum **EffectCallbackType**: <div id="enum_compositoreffect_effectcallbacktype"></div>

<div id="_class_compositoreffect_constant_effect_callback_type_pre_opaque"></div>

[EffectCallbackType](#enum_compositoreffect_effectcallbacktype) **EFFECT_CALLBACK_TYPE_PRE_OPAQUE** = ``0``

The callback is called before our opaque rendering pass, but after depth prepass (if applicable).

<div id="_class_compositoreffect_constant_effect_callback_type_post_opaque"></div>

[EffectCallbackType](#enum_compositoreffect_effectcallbacktype) **EFFECT_CALLBACK_TYPE_POST_OPAQUE** = ``1``

The callback is called after our opaque rendering pass, but before our sky is rendered.

<div id="_class_compositoreffect_constant_effect_callback_type_post_sky"></div>

[EffectCallbackType](#enum_compositoreffect_effectcallbacktype) **EFFECT_CALLBACK_TYPE_POST_SKY** = ``2``

The callback is called after our sky is rendered, but before our back buffers are created (and if enabled, before subsurface scattering and/or screen space reflections).

<div id="_class_compositoreffect_constant_effect_callback_type_pre_transparent"></div>

[EffectCallbackType](#enum_compositoreffect_effectcallbacktype) **EFFECT_CALLBACK_TYPE_PRE_TRANSPARENT** = ``3``

The callback is called before our transparent rendering pass, but after our sky is rendered and we've created our back buffers.

<div id="_class_compositoreffect_constant_effect_callback_type_post_transparent"></div>

[EffectCallbackType](#enum_compositoreffect_effectcallbacktype) **EFFECT_CALLBACK_TYPE_POST_TRANSPARENT** = ``4``

The callback is called after our transparent rendering pass, but before any built-in post-processing effects and output to our render target.

<div id="_class_compositoreffect_constant_effect_callback_type_max"></div>

[EffectCallbackType](#enum_compositoreffect_effectcallbacktype) **EFFECT_CALLBACK_TYPE_MAX** = ``5``

Represents the size of the [EffectCallbackType](#enum_compositoreffect_effectcallbacktype) enum.

<!-- rst-class:: classref-section-separator -->

---

## 属性说明

<div id="_class_compositoreffect_property_access_resolved_color"></div>

[`bool`](class_bool.md) **access_resolved_color** <div id="class_compositoreffect_property_access_resolved_color"></div>

- `void` **set_access_resolved_color** ( value: [`bool`](class_bool.md) )
- [`bool`](class_bool.md) **get_access_resolved_color** ( )

If `true` and MSAA is enabled, this will trigger a color buffer resolve before the effect is run.

 **Note:** In [`_render_callback`](class_compositoreffect.md#class_compositoreffect_private_method__render_callback), to access the resolved buffer use:

```

    var render_scene_buffers : RenderSceneBuffersRD = render_data.get_render_scene_buffers()
    var color_buffer = render_scene_buffers.get_texture("render_buffers", "color")
```



<!-- rst-class:: classref-item-separator -->

---

<div id="_class_compositoreffect_property_access_resolved_depth"></div>

[`bool`](class_bool.md) **access_resolved_depth** <div id="class_compositoreffect_property_access_resolved_depth"></div>

- `void` **set_access_resolved_depth** ( value: [`bool`](class_bool.md) )
- [`bool`](class_bool.md) **get_access_resolved_depth** ( )

If `true` and MSAA is enabled, this will trigger a depth buffer resolve before the effect is run.

 **Note:** In [`_render_callback`](class_compositoreffect.md#class_compositoreffect_private_method__render_callback), to access the resolved buffer use:

```

    var render_scene_buffers : RenderSceneBuffersRD = render_data.get_render_scene_buffers()
    var depth_buffer = render_scene_buffers.get_texture("render_buffers", "depth")
```



<!-- rst-class:: classref-item-separator -->

---

<div id="_class_compositoreffect_property_effect_callback_type"></div>

[EffectCallbackType](#enum_compositoreffect_effectcallbacktype) **effect_callback_type** <div id="class_compositoreffect_property_effect_callback_type"></div>

- `void` **set_effect_callback_type** ( value: [EffectCallbackType](#enum_compositoreffect_effectcallbacktype) )
- [EffectCallbackType](#enum_compositoreffect_effectcallbacktype) **get_effect_callback_type** ( )

The type of effect that is implemented, determines at what stage of rendering the callback is called.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_compositoreffect_property_enabled"></div>

[`bool`](class_bool.md) **enabled** <div id="class_compositoreffect_property_enabled"></div>

- `void` **set_enabled** ( value: [`bool`](class_bool.md) )
- [`bool`](class_bool.md) **get_enabled** ( )

If `true` this rendering effect is applied to any viewport it is added to.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_compositoreffect_property_needs_motion_vectors"></div>

[`bool`](class_bool.md) **needs_motion_vectors** <div id="class_compositoreffect_property_needs_motion_vectors"></div>

- `void` **set_needs_motion_vectors** ( value: [`bool`](class_bool.md) )
- [`bool`](class_bool.md) **get_needs_motion_vectors** ( )

If `true` this triggers motion vectors being calculated during the opaque render state.

 **Note:** In [`_render_callback`](class_compositoreffect.md#class_compositoreffect_private_method__render_callback), to access the motion vector buffer use:

```

    var render_scene_buffers : RenderSceneBuffersRD = render_data.get_render_scene_buffers()
    var motion_buffer = render_scene_buffers.get_velocity_texture()
```



<!-- rst-class:: classref-item-separator -->

---

<div id="_class_compositoreffect_property_needs_normal_roughness"></div>

[`bool`](class_bool.md) **needs_normal_roughness** <div id="class_compositoreffect_property_needs_normal_roughness"></div>

- `void` **set_needs_normal_roughness** ( value: [`bool`](class_bool.md) )
- [`bool`](class_bool.md) **get_needs_normal_roughness** ( )

If `true` this triggers normal and roughness data to be output during our depth pre-pass, only applicable for the Forward+ renderer.

 **Note:** In [`_render_callback`](class_compositoreffect.md#class_compositoreffect_private_method__render_callback), to access the roughness buffer use:

```

    var render_scene_buffers : RenderSceneBuffersRD = render_data.get_render_scene_buffers()
    var roughness_buffer = render_scene_buffers.get_texture("forward_clustered", "normal_roughness")
```

The raw normal and roughness buffer is stored in an optimized format, different than the one available in Spatial shaders. When sampling the buffer, a conversion function must be applied. Use this function, copied from [*here*](https://github.com/godotengine/godot/blob/da5f39889f155658cef7f7ec3cc1abb94e17d815/servers/rendering/renderer_rd/shaders/forward_clustered/scene_forward_clustered_inc.glsl#L334-L341):

```

    vec4 normal_roughness_compatibility(vec4 p_normal_roughness) {
        float roughness = p_normal_roughness.w;
        if (roughness > 0.5) {
            roughness = 1.0 - roughness;
        }
        roughness /= (127.0 / 255.0);
        return vec4(normalize(p_normal_roughness.xyz * 2.0 - 1.0) * 0.5 + 0.5, roughness);
    }
```





<!-- rst-class:: classref-item-separator -->

---

<div id="_class_compositoreffect_property_needs_separate_specular"></div>

[`bool`](class_bool.md) **needs_separate_specular** <div id="class_compositoreffect_property_needs_separate_specular"></div>

- `void` **set_needs_separate_specular** ( value: [`bool`](class_bool.md) )
- [`bool`](class_bool.md) **get_needs_separate_specular** ( )

If `true` this triggers specular data being rendered to a separate buffer and combined after effects have been applied, only applicable for the Forward+ renderer.

<!-- rst-class:: classref-section-separator -->

---

## 方法说明

<div id="_class_compositoreffect_private_method__render_callback"></div>

`void` **_render_callback** ( effect_callback_type: [`int`](class_int.md), render_data: [`RenderData`](class_renderdata.md) ) virtual[^virtual]<div id="class_compositoreffect_private_method__render_callback"></div>

Implement this function with your custom rendering code. `effect_callback_type` should always match the effect callback type you've specified in [`effect_callback_type`](class_compositoreffect.md#class_compositoreffect_property_effect_callback_type). `render_data` provides access to the rendering state, it is only valid during rendering and should not be stored.

[^virtual]: 本方法通常需要用户覆盖才能生效。
[^const]: 本方法无副作用，不会修改该实例的任何成员变量。
[^vararg]: 本方法除了能接受在此处描述的参数外，还能够继续接受任意数量的参数。
[^constructor]: 本方法用于构造某个类型。
[^static]: 调用本方法无需实例，可直接使用类名进行调用。
[^operator]: 本方法描述的是使用本类型作为左操作数的有效运算符。
[^bitfield]: 这个值是由下列位标志构成位掩码的整数。
[^void]: 无返回值。
