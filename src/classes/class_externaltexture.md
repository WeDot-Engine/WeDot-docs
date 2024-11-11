<!-- ⚠ 请勿编辑本文件 ⚠ -->
<!-- 本文档使用脚本从 WeDot 引擎源码仓库生成。 -->
<!-- 生成脚本：https://github.com/WeDot-Engine/WeDot/tree/master/doc/tools/make_md.py； -->
<!-- 原文件：https://github.com/WeDot-Engine/WeDot/tree/master/doc/classes/ExternalTexture.xml。 -->

<div id="_class_externaltexture"></div>

# ExternalTexture

**继承：** [`Texture2D`](class_texture2d.md) **<** [`Texture`](class_texture.md) **<** [`Resource`](class_resource.md) **<** [`RefCounted`](class_refcounted.md) **<** [`Object`](class_object.md)

Texture which displays the content of an external buffer.

## 描述

Displays the content of an external buffer provided by the platform.

Requires the [*OES_EGL_image_external*](https://registry.khronos.org/OpenGL/extensions/OES/OES_EGL_image_external.txt) extension (OpenGL) or [*VK_ANDROID_external_memory_android_hardware_buffer*](https://registry.khronos.org/vulkan/specs/1.1-extensions/html/vkspec.html#VK_ANDROID_external_memory_android_hardware_buffer) extension (Vulkan).

 **Note:** This is currently only supported in Android builds.

## 属性

|||
|:-:|:--|
| [`bool`](class_bool.md)       | resource_local_to_scene                                                | ``false`` (overrides [`Resource`](class_resource.md#class_resource_property_resource_local_to_scene)) |
| [`Vector2`](class_vector2.md) | [`size`](class_externaltexture.md#class_externaltexture_property_size) | ``Vector2(256, 256)``                                                                                 |

## 方法

|||
|:-:|:--|
| [`int`](class_int.md) | [`get_external_texture_id`](class_externaltexture.md#class_externaltexture_method_get_external_texture_id) ( ) const[^const]                           |
| `void`                | [`set_external_buffer_id`](class_externaltexture.md#class_externaltexture_method_set_external_buffer_id) ( external_buffer_id: [`int`](class_int.md) ) |

<!-- rst-class:: classref-section-separator -->

---

## 属性说明

<div id="_class_externaltexture_property_size"></div>

[`Vector2`](class_vector2.md) **size** = ``Vector2(256, 256)`` <div id="class_externaltexture_property_size"></div>

- `void` **set_size** ( value: [`Vector2`](class_vector2.md) )
- [`Vector2`](class_vector2.md) **get_size** ( )

External texture size.

<!-- rst-class:: classref-section-separator -->

---

## 方法说明

<div id="_class_externaltexture_method_get_external_texture_id"></div>

[`int`](class_int.md) **get_external_texture_id** ( ) const[^const]<div id="class_externaltexture_method_get_external_texture_id"></div>

Returns the external texture ID.

Depending on your use case, you may need to pass this to platform APIs, for example, when creating an `android.graphics.SurfaceTexture` on Android.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_externaltexture_method_set_external_buffer_id"></div>

`void` **set_external_buffer_id** ( external_buffer_id: [`int`](class_int.md) )<div id="class_externaltexture_method_set_external_buffer_id"></div>

Sets the external buffer ID.

Depending on your use case, you may need to call this with data received from a platform API, for example, `SurfaceTexture.getHardwareBuffer()` on Android.

[^virtual]: 本方法通常需要用户覆盖才能生效。
[^const]: 本方法无副作用，不会修改该实例的任何成员变量。
[^vararg]: 本方法除了能接受在此处描述的参数外，还能够继续接受任意数量的参数。
[^constructor]: 本方法用于构造某个类型。
[^static]: 调用本方法无需实例，可直接使用类名进行调用。
[^operator]: 本方法描述的是使用本类型作为左操作数的有效运算符。
[^bitfield]: 这个值是由下列位标志构成位掩码的整数。
[^void]: 无返回值。
