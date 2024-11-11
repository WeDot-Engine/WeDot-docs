<!-- ⚠ 请勿编辑本文件 ⚠ -->
<!-- 本文档使用脚本从 WeDot 引擎源码仓库生成。 -->
<!-- 生成脚本：https://github.com/WeDot-Engine/WeDot/tree/master/doc/tools/make_md.py； -->
<!-- 原文件：https://github.com/WeDot-Engine/WeDot/tree/master/doc/classes/ViewportTexture.xml。 -->

<div id="_class_viewporttexture"></div>

# ViewportTexture

**继承：** [`Texture2D`](class_texture2d.md) **<** [`Texture`](class_texture.md) **<** [`Resource`](class_resource.md) **<** [`RefCounted`](class_refcounted.md) **<** [`Object`](class_object.md)

Provides the content of a [`Viewport`](class_viewport.md) as a dynamic texture.

## 描述

A **ViewportTexture** provides the content of a [`Viewport`](class_viewport.md) as a dynamic [`Texture2D`](class_texture2d.md). This can be used to combine the rendering of [`Control`](class_control.md), [`Node2D`](class_node2d.md) and [`Node3D`](class_node3d.md) nodes. For example, you can use this texture to display a 3D scene inside a [`TextureRect`](class_texturerect.md), or a 2D overlay in a [`Sprite3D`](class_sprite3d.md).

To get a **ViewportTexture** in code, use the [`Viewport.get_texture`](class_viewport.md#class_viewport_method_get_texture) method on the target viewport.

 **Note:** A **ViewportTexture** is always local to its scene (see [`Resource.resource_local_to_scene`](class_resource.md#class_resource_property_resource_local_to_scene)). If the scene root is not ready, it may return incorrect data (see [`Node.ready`](class_node.md#class_node_signal_ready)).

 **Note:** Instantiating scenes containing a high-resolution **ViewportTexture** may cause noticeable stutter.

 **Note:** When using a [`Viewport`](class_viewport.md) with [`Viewport.use_hdr_2d`](class_viewport.md#class_viewport_property_use_hdr_2d) set to `true` the returned texture will be an HDR image encoded in linear space. This may look darker than normal when displayed directly on screen. To convert to gamma space, you can do the following:

```

    img.convert(Image.FORMAT_RGBA8)
    imb.linear_to_srgb()
```



## 属性

|||
|:-:|:--|
| [`NodePath`](class_nodepath.md) | [`viewport_path`](class_viewporttexture.md#class_viewporttexture_property_viewport_path) | ``NodePath("")`` |

<!-- rst-class:: classref-section-separator -->

---

## 属性说明

<div id="_class_viewporttexture_property_viewport_path"></div>

[`NodePath`](class_nodepath.md) **viewport_path** = ``NodePath("")`` <div id="class_viewporttexture_property_viewport_path"></div>

- `void` **set_viewport_path_in_scene** ( value: [`NodePath`](class_nodepath.md) )
- [`NodePath`](class_nodepath.md) **get_viewport_path_in_scene** ( )

The path to the [`Viewport`](class_viewport.md) node to display. This is relative to the local scene root (see [`Resource.get_local_scene`](class_resource.md#class_resource_method_get_local_scene)), **not** to the nodes that use this texture.

 **Note:** In the editor, this path is automatically updated when the target viewport or one of its ancestors is renamed or moved. At runtime, this path may not automatically update if the scene root cannot be found.

[^virtual]: 本方法通常需要用户覆盖才能生效。
[^const]: 本方法无副作用，不会修改该实例的任何成员变量。
[^vararg]: 本方法除了能接受在此处描述的参数外，还能够继续接受任意数量的参数。
[^constructor]: 本方法用于构造某个类型。
[^static]: 调用本方法无需实例，可直接使用类名进行调用。
[^operator]: 本方法描述的是使用本类型作为左操作数的有效运算符。
[^bitfield]: 这个值是由下列位标志构成位掩码的整数。
[^void]: 无返回值。
