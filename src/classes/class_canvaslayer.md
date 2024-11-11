<!-- ⚠ 请勿编辑本文件 ⚠ -->
<!-- 本文档使用脚本从 WeDot 引擎源码仓库生成。 -->
<!-- 生成脚本：https://github.com/WeDot-Engine/WeDot/tree/master/doc/tools/make_md.py； -->
<!-- 原文件：https://github.com/WeDot-Engine/WeDot/tree/master/doc/classes/CanvasLayer.xml。 -->

<div id="_class_canvaslayer"></div>

# CanvasLayer

**继承：** [`Node`](class_node.md) **<** [`Object`](class_object.md)

**派生：** [`ParallaxBackground`](class_parallaxbackground.md)

A node used for independent rendering of objects within a 2D scene.

## 描述

[`CanvasItem`](class_canvasitem.md)-derived nodes that are direct or indirect children of a **CanvasLayer** will be drawn in that layer. The layer is a numeric index that defines the draw order. The default 2D scene renders with index `0`, so a **CanvasLayer** with index `-1` will be drawn below, and a **CanvasLayer** with index `1` will be drawn above. This order will hold regardless of the [`CanvasItem.z_index`](class_canvasitem.md#class_canvasitem_property_z_index) of the nodes within each layer.

 **CanvasLayer** s can be hidden and they can also optionally follow the viewport. This makes them useful for HUDs like health bar overlays (on layers `1` and higher) or backgrounds (on layers `-1` and lower).

 **Note:** Embedded [`Window`](class_window.md) s are placed on layer `1024`. [`CanvasItem`](class_canvasitem.md) s on layers `1025` and higher appear in front of embedded windows.

 **Note:** Each **CanvasLayer** is drawn on one specific [`Viewport`](class_viewport.md) and cannot be shared between multiple [`Viewport`](class_viewport.md) s, see [`custom_viewport`](class_canvaslayer.md#class_canvaslayer_property_custom_viewport). When using multiple [`Viewport`](class_viewport.md) s, for example in a split-screen game, you need create an individual **CanvasLayer** for each [`Viewport`](class_viewport.md) you want it to be drawn on.

## 属性

|||
|:-:|:--|
| [`Node`](class_node.md)               | [`custom_viewport`](class_canvaslayer.md#class_canvaslayer_property_custom_viewport)                 |                                   |
| [`bool`](class_bool.md)               | [`follow_viewport_enabled`](class_canvaslayer.md#class_canvaslayer_property_follow_viewport_enabled) | ``false``                         |
| [`float`](class_float.md)             | [`follow_viewport_scale`](class_canvaslayer.md#class_canvaslayer_property_follow_viewport_scale)     | ``1.0``                           |
| [`int`](class_int.md)                 | [`layer`](class_canvaslayer.md#class_canvaslayer_property_layer)                                     | ``1``                             |
| [`Vector2`](class_vector2.md)         | [`offset`](class_canvaslayer.md#class_canvaslayer_property_offset)                                   | ``Vector2(0, 0)``                 |
| [`float`](class_float.md)             | [`rotation`](class_canvaslayer.md#class_canvaslayer_property_rotation)                               | ``0.0``                           |
| [`Vector2`](class_vector2.md)         | [`scale`](class_canvaslayer.md#class_canvaslayer_property_scale)                                     | ``Vector2(1, 1)``                 |
| [`Transform2D`](class_transform2d.md) | [`transform`](class_canvaslayer.md#class_canvaslayer_property_transform)                             | ``Transform2D(1, 0, 0, 1, 0, 0)`` |
| [`bool`](class_bool.md)               | [`visible`](class_canvaslayer.md#class_canvaslayer_property_visible)                                 | ``true``                          |

## 方法

|||
|:-:|:--|
| [`RID`](class_rid.md)                 | [`get_canvas`](class_canvaslayer.md#class_canvaslayer_method_get_canvas) ( ) const[^const]                   |
| [`Transform2D`](class_transform2d.md) | [`get_final_transform`](class_canvaslayer.md#class_canvaslayer_method_get_final_transform) ( ) const[^const] |
| `void`                                | [`hide`](class_canvaslayer.md#class_canvaslayer_method_hide) ( )                                             |
| `void`                                | [`show`](class_canvaslayer.md#class_canvaslayer_method_show) ( )                                             |

<!-- rst-class:: classref-section-separator -->

---

## 信号

<div id="_class_class_canvaslayer_signal_visibility_changed"></div>

**visibility_changed** ( ) <div id="class_canvaslayer_signal_visibility_changed"></div>

Emitted when visibility of the layer is changed. See [`visible`](class_canvaslayer.md#class_canvaslayer_property_visible).

<!-- rst-class:: classref-section-separator -->

---

## 属性说明

<div id="_class_canvaslayer_property_custom_viewport"></div>

[`Node`](class_node.md) **custom_viewport** <div id="class_canvaslayer_property_custom_viewport"></div>

- `void` **set_custom_viewport** ( value: [`Node`](class_node.md) )
- [`Node`](class_node.md) **get_custom_viewport** ( )

The custom [`Viewport`](class_viewport.md) node assigned to the **CanvasLayer**. If `null`, uses the default viewport instead.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_canvaslayer_property_follow_viewport_enabled"></div>

[`bool`](class_bool.md) **follow_viewport_enabled** = ``false`` <div id="class_canvaslayer_property_follow_viewport_enabled"></div>

- `void` **set_follow_viewport** ( value: [`bool`](class_bool.md) )
- [`bool`](class_bool.md) **is_following_viewport** ( )

If enabled, the **CanvasLayer** will use the viewport's transform, so it will move when camera moves instead of being anchored in a fixed position on the screen.

Together with [`follow_viewport_scale`](class_canvaslayer.md#class_canvaslayer_property_follow_viewport_scale) it can be used for a pseudo 3D effect.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_canvaslayer_property_follow_viewport_scale"></div>

[`float`](class_float.md) **follow_viewport_scale** = ``1.0`` <div id="class_canvaslayer_property_follow_viewport_scale"></div>

- `void` **set_follow_viewport_scale** ( value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_follow_viewport_scale** ( )

Scales the layer when using [`follow_viewport_enabled`](class_canvaslayer.md#class_canvaslayer_property_follow_viewport_enabled). Layers moving into the foreground should have increasing scales, while layers moving into the background should have decreasing scales.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_canvaslayer_property_layer"></div>

[`int`](class_int.md) **layer** = ``1`` <div id="class_canvaslayer_property_layer"></div>

- `void` **set_layer** ( value: [`int`](class_int.md) )
- [`int`](class_int.md) **get_layer** ( )

Layer index for draw order. Lower values are drawn behind higher values.

 **Note:** If multiple CanvasLayers have the same layer index, [`CanvasItem`](class_canvasitem.md) children of one CanvasLayer are drawn behind the [`CanvasItem`](class_canvasitem.md) children of the other CanvasLayer. Which CanvasLayer is drawn in front is non-deterministic.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_canvaslayer_property_offset"></div>

[`Vector2`](class_vector2.md) **offset** = ``Vector2(0, 0)`` <div id="class_canvaslayer_property_offset"></div>

- `void` **set_offset** ( value: [`Vector2`](class_vector2.md) )
- [`Vector2`](class_vector2.md) **get_offset** ( )

The layer's base offset.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_canvaslayer_property_rotation"></div>

[`float`](class_float.md) **rotation** = ``0.0`` <div id="class_canvaslayer_property_rotation"></div>

- `void` **set_rotation** ( value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_rotation** ( )

The layer's rotation in radians.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_canvaslayer_property_scale"></div>

[`Vector2`](class_vector2.md) **scale** = ``Vector2(1, 1)`` <div id="class_canvaslayer_property_scale"></div>

- `void` **set_scale** ( value: [`Vector2`](class_vector2.md) )
- [`Vector2`](class_vector2.md) **get_scale** ( )

The layer's scale.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_canvaslayer_property_transform"></div>

[`Transform2D`](class_transform2d.md) **transform** = ``Transform2D(1, 0, 0, 1, 0, 0)`` <div id="class_canvaslayer_property_transform"></div>

- `void` **set_transform** ( value: [`Transform2D`](class_transform2d.md) )
- [`Transform2D`](class_transform2d.md) **get_transform** ( )

The layer's transform.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_canvaslayer_property_visible"></div>

[`bool`](class_bool.md) **visible** = ``true`` <div id="class_canvaslayer_property_visible"></div>

- `void` **set_visible** ( value: [`bool`](class_bool.md) )
- [`bool`](class_bool.md) **is_visible** ( )

If `false`, any [`CanvasItem`](class_canvasitem.md) under this **CanvasLayer** will be hidden.

Unlike [`CanvasItem.visible`](class_canvasitem.md#class_canvasitem_property_visible), visibility of a **CanvasLayer** isn't propagated to underlying layers.

<!-- rst-class:: classref-section-separator -->

---

## 方法说明

<div id="_class_canvaslayer_method_get_canvas"></div>

[`RID`](class_rid.md) **get_canvas** ( ) const[^const]<div id="class_canvaslayer_method_get_canvas"></div>

Returns the RID of the canvas used by this layer.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_canvaslayer_method_get_final_transform"></div>

[`Transform2D`](class_transform2d.md) **get_final_transform** ( ) const[^const]<div id="class_canvaslayer_method_get_final_transform"></div>

Returns the transform from the **CanvasLayer** s coordinate system to the [`Viewport`](class_viewport.md) s coordinate system.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_canvaslayer_method_hide"></div>

`void` **hide** ( )<div id="class_canvaslayer_method_hide"></div>

Hides any [`CanvasItem`](class_canvasitem.md) under this **CanvasLayer**. This is equivalent to setting [`visible`](class_canvaslayer.md#class_canvaslayer_property_visible) to `false`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_canvaslayer_method_show"></div>

`void` **show** ( )<div id="class_canvaslayer_method_show"></div>

Shows any [`CanvasItem`](class_canvasitem.md) under this **CanvasLayer**. This is equivalent to setting [`visible`](class_canvaslayer.md#class_canvaslayer_property_visible) to `true`.

[^virtual]: 本方法通常需要用户覆盖才能生效。
[^const]: 本方法无副作用，不会修改该实例的任何成员变量。
[^vararg]: 本方法除了能接受在此处描述的参数外，还能够继续接受任意数量的参数。
[^constructor]: 本方法用于构造某个类型。
[^static]: 调用本方法无需实例，可直接使用类名进行调用。
[^operator]: 本方法描述的是使用本类型作为左操作数的有效运算符。
[^bitfield]: 这个值是由下列位标志构成位掩码的整数。
[^void]: 无返回值。
