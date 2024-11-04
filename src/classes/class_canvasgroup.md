<!-- ⚠ 请勿编辑本文件 ⚠ -->
<!-- 本文档使用脚本从 WeDot 引擎源码仓库生成。 -->
<!-- 生成脚本：https://github.com/WeDot-Engine/WeDot/tree/4.3/doc/tools/make_md.py； -->
<!-- 原文件：https://github.com/WeDot-Engine/WeDot/tree/4.3/doc/classes/CanvasGroup.xml。 -->

<div id="_class_canvasgroup"></div>

# CanvasGroup

**继承：** [`Node2D`](class_node2d.md) **<** [`CanvasItem`](class_canvasitem.md) **<** [`Node`](class_node.md) **<** [`Object`](class_object.md)

Merges several 2D nodes into a single draw operation.

## 描述

Child [`CanvasItem`](class_canvasitem.md) nodes of a **CanvasGroup** are drawn as a single object. It allows to e.g. draw overlapping translucent 2D nodes without blending (set [`CanvasItem.self_modulate`](#class_canvasitem_property_self_modulate) property of **CanvasGroup** to achieve this effect).

 **Note:** The **CanvasGroup** uses a custom shader to read from the backbuffer to draw its children. Assigning a [`Material`](class_material.md) to the **CanvasGroup** overrides the builtin shader. To duplicate the behavior of the builtin shader in a custom [`Shader`](class_shader.md) use the following:

```

    shader_type canvas_item;
    render_mode unshaded;
    
    uniform sampler2D screen_texture : hint_screen_texture, repeat_disable, filter_nearest;
    
    void fragment() {
        vec4 c = textureLod(screen_texture, SCREEN_UV, 0.0);
    
        if (c.a > 0.0001) {
            c.rgb /= c.a;
        }
    
        COLOR *= c;
    }
```

 **Note:** Since **CanvasGroup** and [`CanvasItem.clip_children`](#class_canvasitem_property_clip_children) both utilize the backbuffer, children of a **CanvasGroup** who have their [`CanvasItem.clip_children`](#class_canvasitem_property_clip_children) set to anything other than [`CanvasItem.CLIP_CHILDREN_DISABLED`](#class_canvasitem_constant_clip_children_disabled) will not function correctly.



## 属性

| [`float`](class_float.md) | [`clear_margin`](#class_canvasgroup_property_clear_margin) | ``10.0``  |
| [`float`](class_float.md) | [`fit_margin`](#class_canvasgroup_property_fit_margin)     | ``10.0``  |
| [`bool`](class_bool.md)   | [`use_mipmaps`](#class_canvasgroup_property_use_mipmaps)   | ``false`` |

<!-- rst-class:: classref-section-separator -->

---

## 属性说明

<div id="_class_canvasgroup_property_clear_margin"></div>

[`float`](class_float.md) **clear_margin** = ``10.0`` <div id="class_canvasgroup_property_clear_margin"></div>

- `void` **set_clear_margin** ( value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_clear_margin** ( )

Sets the size of the margin used to expand the clearing rect of this **CanvasGroup**. This expands the area of the backbuffer that will be used by the **CanvasGroup**. A smaller margin will reduce the area of the backbuffer used which can increase performance, however if [`use_mipmaps`](#class_canvasgroup_property_use_mipmaps) is enabled, a small margin may result in mipmap errors at the edge of the **CanvasGroup**. Accordingly, this should be left as small as possible, but should be increased if artifacts appear along the edges of the canvas group.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_canvasgroup_property_fit_margin"></div>

[`float`](class_float.md) **fit_margin** = ``10.0`` <div id="class_canvasgroup_property_fit_margin"></div>

- `void` **set_fit_margin** ( value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_fit_margin** ( )

Sets the size of a margin used to expand the drawable rect of this **CanvasGroup**. The size of the **CanvasGroup** is determined by fitting a rect around its children then expanding that rect by [`fit_margin`](#class_canvasgroup_property_fit_margin). This increases both the backbuffer area used and the area covered by the **CanvasGroup** both of which can reduce performance. This should be kept as small as possible and should only be expanded when an increased size is needed (e.g. for custom shader effects).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_canvasgroup_property_use_mipmaps"></div>

[`bool`](class_bool.md) **use_mipmaps** = ``false`` <div id="class_canvasgroup_property_use_mipmaps"></div>

- `void` **set_use_mipmaps** ( value: [`bool`](class_bool.md) )
- [`bool`](class_bool.md) **is_using_mipmaps** ( )

If `true`, calculates mipmaps for the backbuffer before drawing the **CanvasGroup** so that mipmaps can be used in a custom [`ShaderMaterial`](class_shadermaterial.md) attached to the **CanvasGroup**. Generating mipmaps has a performance cost so this should not be enabled unless required.

[^virtual]: 本方法通常需要用户覆盖才能生效。
[^const]: 本方法无副作用，不会修改该实例的任何成员变量。
[^vararg]: 本方法除了能接受在此处描述的参数外，还能够继续接受任意数量的参数。
[^constructor]: 本方法用于构造某个类型。
[^static]: 调用本方法无需实例，可直接使用类名进行调用。
[^operator]: 本方法描述的是使用本类型作为左操作数的有效运算符。
[^bitfield]: 这个值是由下列位标志构成位掩码的整数。
[^void]: 无返回值。
