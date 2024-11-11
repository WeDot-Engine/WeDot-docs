<!-- ⚠ 请勿编辑本文件 ⚠ -->
<!-- 本文档使用脚本从 WeDot 引擎源码仓库生成。 -->
<!-- 生成脚本：https://github.com/WeDot-Engine/WeDot/tree/master/doc/tools/make_md.py； -->
<!-- 原文件：https://github.com/WeDot-Engine/WeDot/tree/master/doc/classes/AnimatedTexture.xml。 -->

<div id="_class_animatedtexture"></div>

# AnimatedTexture

**已弃用：** This class does not work properly in current versions and may be removed in the future. There is currently no equivalent workaround.

**继承：** [`Texture2D`](class_texture2d.md) **<** [`Texture`](class_texture.md) **<** [`Resource`](class_resource.md) **<** [`RefCounted`](class_refcounted.md) **<** [`Object`](class_object.md)

Proxy texture for simple frame-based animations.

## 描述

**AnimatedTexture** is a resource format for frame-based animations, where multiple textures can be chained automatically with a predefined delay for each frame. Unlike [`AnimationPlayer`](class_animationplayer.md) or [`AnimatedSprite2D`](class_animatedsprite2d.md), it isn't a [`Node`](class_node.md), but has the advantage of being usable anywhere a [`Texture2D`](class_texture2d.md) resource can be used, e.g. in a [`TileSet`](class_tileset.md).

The playback of the animation is controlled by the [`speed_scale`](class_animatedtexture.md#class_animatedtexture_property_speed_scale) property, as well as each frame's duration (see [`set_frame_duration`](class_animatedtexture.md#class_animatedtexture_method_set_frame_duration)). The animation loops, i.e. it will restart at frame 0 automatically after playing the last frame.

 **AnimatedTexture** currently requires all frame textures to have the same size, otherwise the bigger ones will be cropped to match the smallest one.

 **Note:** AnimatedTexture doesn't support using [`AtlasTexture`](class_atlastexture.md) s. Each frame needs to be a separate [`Texture2D`](class_texture2d.md).

 **Warning:** The current implementation is not efficient for the modern renderers.

## 属性

|||
|:-:|:--|
| [`int`](class_int.md)     | [`current_frame`](class_animatedtexture.md#class_animatedtexture_property_current_frame) |                                                                                                       |
| [`int`](class_int.md)     | [`frames`](class_animatedtexture.md#class_animatedtexture_property_frames)               | ``1``                                                                                                 |
| [`bool`](class_bool.md)   | [`one_shot`](class_animatedtexture.md#class_animatedtexture_property_one_shot)           | ``false``                                                                                             |
| [`bool`](class_bool.md)   | [`pause`](class_animatedtexture.md#class_animatedtexture_property_pause)                 | ``false``                                                                                             |
| [`bool`](class_bool.md)   | resource_local_to_scene                                                                  | ``false`` (overrides [`Resource`](class_resource.md#class_resource_property_resource_local_to_scene)) |
| [`float`](class_float.md) | [`speed_scale`](class_animatedtexture.md#class_animatedtexture_property_speed_scale)     | ``1.0``                                                                                               |

## 方法

|||
|:-:|:--|
| [`float`](class_float.md)         | [`get_frame_duration`](class_animatedtexture.md#class_animatedtexture_method_get_frame_duration) ( frame: [`int`](class_int.md) ) const[^const]                             |
| [`Texture2D`](class_texture2d.md) | [`get_frame_texture`](class_animatedtexture.md#class_animatedtexture_method_get_frame_texture) ( frame: [`int`](class_int.md) ) const[^const]                               |
| `void`                            | [`set_frame_duration`](class_animatedtexture.md#class_animatedtexture_method_set_frame_duration) ( frame: [`int`](class_int.md), duration: [`float`](class_float.md) )      |
| `void`                            | [`set_frame_texture`](class_animatedtexture.md#class_animatedtexture_method_set_frame_texture) ( frame: [`int`](class_int.md), texture: [`Texture2D`](class_texture2d.md) ) |

<!-- rst-class:: classref-section-separator -->

---

## 常量

<div id="_class_animatedtexture_constant_max_frames"></div>

**MAX_FRAMES** = ``256`` <div id="class_animatedtexture_constant_max_frames"></div>

The maximum number of frames supported by **AnimatedTexture**. If you need more frames in your animation, use [`AnimationPlayer`](class_animationplayer.md) or [`AnimatedSprite2D`](class_animatedsprite2d.md).

<!-- rst-class:: classref-section-separator -->

---

## 属性说明

<div id="_class_animatedtexture_property_current_frame"></div>

[`int`](class_int.md) **current_frame** <div id="class_animatedtexture_property_current_frame"></div>

- `void` **set_current_frame** ( value: [`int`](class_int.md) )
- [`int`](class_int.md) **get_current_frame** ( )

Sets the currently visible frame of the texture. Setting this frame while playing resets the current frame time, so the newly selected frame plays for its whole configured frame duration.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_animatedtexture_property_frames"></div>

[`int`](class_int.md) **frames** = ``1`` <div id="class_animatedtexture_property_frames"></div>

- `void` **set_frames** ( value: [`int`](class_int.md) )
- [`int`](class_int.md) **get_frames** ( )

Number of frames to use in the animation. While you can create the frames independently with [`set_frame_texture`](class_animatedtexture.md#class_animatedtexture_method_set_frame_texture), you need to set this value for the animation to take new frames into account. The maximum number of frames is [`MAX_FRAMES`](class_animatedtexture.md#class_animatedtexture_constant_max_frames).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_animatedtexture_property_one_shot"></div>

[`bool`](class_bool.md) **one_shot** = ``false`` <div id="class_animatedtexture_property_one_shot"></div>

- `void` **set_one_shot** ( value: [`bool`](class_bool.md) )
- [`bool`](class_bool.md) **get_one_shot** ( )

If `true`, the animation will only play once and will not loop back to the first frame after reaching the end. Note that reaching the end will not set [`pause`](class_animatedtexture.md#class_animatedtexture_property_pause) to `true`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_animatedtexture_property_pause"></div>

[`bool`](class_bool.md) **pause** = ``false`` <div id="class_animatedtexture_property_pause"></div>

- `void` **set_pause** ( value: [`bool`](class_bool.md) )
- [`bool`](class_bool.md) **get_pause** ( )

If `true`, the animation will pause where it currently is (i.e. at [`current_frame`](class_animatedtexture.md#class_animatedtexture_property_current_frame)). The animation will continue from where it was paused when changing this property to `false`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_animatedtexture_property_speed_scale"></div>

[`float`](class_float.md) **speed_scale** = ``1.0`` <div id="class_animatedtexture_property_speed_scale"></div>

- `void` **set_speed_scale** ( value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_speed_scale** ( )

The animation speed is multiplied by this value. If set to a negative value, the animation is played in reverse.

<!-- rst-class:: classref-section-separator -->

---

## 方法说明

<div id="_class_animatedtexture_method_get_frame_duration"></div>

[`float`](class_float.md) **get_frame_duration** ( frame: [`int`](class_int.md) ) const[^const]<div id="class_animatedtexture_method_get_frame_duration"></div>

Returns the given `frame`'s duration, in seconds.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_animatedtexture_method_get_frame_texture"></div>

[`Texture2D`](class_texture2d.md) **get_frame_texture** ( frame: [`int`](class_int.md) ) const[^const]<div id="class_animatedtexture_method_get_frame_texture"></div>

Returns the given frame's [`Texture2D`](class_texture2d.md).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_animatedtexture_method_set_frame_duration"></div>

`void` **set_frame_duration** ( frame: [`int`](class_int.md), duration: [`float`](class_float.md) )<div id="class_animatedtexture_method_set_frame_duration"></div>

Sets the duration of any given `frame`. The final duration is affected by the [`speed_scale`](class_animatedtexture.md#class_animatedtexture_property_speed_scale). If set to `0`, the frame is skipped during playback.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_animatedtexture_method_set_frame_texture"></div>

`void` **set_frame_texture** ( frame: [`int`](class_int.md), texture: [`Texture2D`](class_texture2d.md) )<div id="class_animatedtexture_method_set_frame_texture"></div>

Assigns a [`Texture2D`](class_texture2d.md) to the given frame. Frame IDs start at 0, so the first frame has ID 0, and the last frame of the animation has ID [`frames`](class_animatedtexture.md#class_animatedtexture_property_frames) - 1.

You can define any number of textures up to [`MAX_FRAMES`](class_animatedtexture.md#class_animatedtexture_constant_max_frames), but keep in mind that only frames from 0 to [`frames`](class_animatedtexture.md#class_animatedtexture_property_frames) - 1 will be part of the animation.

[^virtual]: 本方法通常需要用户覆盖才能生效。
[^const]: 本方法无副作用，不会修改该实例的任何成员变量。
[^vararg]: 本方法除了能接受在此处描述的参数外，还能够继续接受任意数量的参数。
[^constructor]: 本方法用于构造某个类型。
[^static]: 调用本方法无需实例，可直接使用类名进行调用。
[^operator]: 本方法描述的是使用本类型作为左操作数的有效运算符。
[^bitfield]: 这个值是由下列位标志构成位掩码的整数。
[^void]: 无返回值。
