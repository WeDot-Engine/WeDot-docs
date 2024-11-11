<!-- ⚠ 请勿编辑本文件 ⚠ -->
<!-- 本文档使用脚本从 WeDot 引擎源码仓库生成。 -->
<!-- 生成脚本：https://github.com/WeDot-Engine/WeDot/tree/master/doc/tools/make_md.py； -->
<!-- 原文件：https://github.com/WeDot-Engine/WeDot/tree/master/doc/classes/Node2D.xml。 -->

<div id="_class_node2d"></div>

# Node2D

**继承：** [`CanvasItem`](class_canvasitem.md) **<** [`Node`](class_node.md) **<** [`Object`](class_object.md)

**派生：** [`AnimatedSprite2D`](class_animatedsprite2d.md), [`AudioListener2D`](class_audiolistener2d.md), [`AudioStreamPlayer2D`](class_audiostreamplayer2d.md), [`BackBufferCopy`](class_backbuffercopy.md), [`Bone2D`](class_bone2d.md), [`Camera2D`](class_camera2d.md), [`CanvasGroup`](class_canvasgroup.md), [`CanvasModulate`](class_canvasmodulate.md), [`CollisionObject2D`](class_collisionobject2d.md), [`CollisionPolygon2D`](class_collisionpolygon2d.md), [`CollisionShape2D`](class_collisionshape2d.md), [`CPUParticles2D`](class_cpuparticles2d.md), [`GPUParticles2D`](class_gpuparticles2d.md), [`Joint2D`](class_joint2d.md), [`Light2D`](class_light2d.md), [`LightOccluder2D`](class_lightoccluder2d.md), [`Line2D`](class_line2d.md), [`Marker2D`](class_marker2d.md), [`MeshInstance2D`](class_meshinstance2d.md), [`MultiMeshInstance2D`](class_multimeshinstance2d.md), [`NavigationLink2D`](class_navigationlink2d.md), [`NavigationObstacle2D`](class_navigationobstacle2d.md), [`NavigationRegion2D`](class_navigationregion2d.md), [`Parallax2D`](class_parallax2d.md), [`ParallaxLayer`](class_parallaxlayer.md), [`Path2D`](class_path2d.md), [`PathFollow2D`](class_pathfollow2d.md), [`Polygon2D`](class_polygon2d.md), [`RayCast2D`](class_raycast2d.md), [`RemoteTransform2D`](class_remotetransform2d.md), [`ShapeCast2D`](class_shapecast2d.md), [`Skeleton2D`](class_skeleton2d.md), [`Sprite2D`](class_sprite2d.md), [`TileMap`](class_tilemap.md), [`TileMapLayer`](class_tilemaplayer.md), [`TouchScreenButton`](class_touchscreenbutton.md), [`VisibleOnScreenNotifier2D`](class_visibleonscreennotifier2d.md)

A 2D game object, inherited by all 2D-related nodes. Has a position, rotation, scale, and Z index.

## 描述

A 2D game object, with a transform (position, rotation, and scale). All 2D nodes, including physics objects and sprites, inherit from Node2D. Use Node2D as a parent node to move, scale and rotate children in a 2D project. Also gives control of the node's render order.

## 属性

|||
|:-:|:--|
| [`Vector2`](class_vector2.md)         | [`global_position`](class_node2d.md#class_node2d_property_global_position)                 |                   |
| [`float`](class_float.md)             | [`global_rotation`](class_node2d.md#class_node2d_property_global_rotation)                 |                   |
| [`float`](class_float.md)             | [`global_rotation_degrees`](class_node2d.md#class_node2d_property_global_rotation_degrees) |                   |
| [`Vector2`](class_vector2.md)         | [`global_scale`](class_node2d.md#class_node2d_property_global_scale)                       |                   |
| [`float`](class_float.md)             | [`global_skew`](class_node2d.md#class_node2d_property_global_skew)                         |                   |
| [`Transform2D`](class_transform2d.md) | [`global_transform`](class_node2d.md#class_node2d_property_global_transform)               |                   |
| [`Vector2`](class_vector2.md)         | [`position`](class_node2d.md#class_node2d_property_position)                               | ``Vector2(0, 0)`` |
| [`float`](class_float.md)             | [`rotation`](class_node2d.md#class_node2d_property_rotation)                               | ``0.0``           |
| [`float`](class_float.md)             | [`rotation_degrees`](class_node2d.md#class_node2d_property_rotation_degrees)               |                   |
| [`Vector2`](class_vector2.md)         | [`scale`](class_node2d.md#class_node2d_property_scale)                                     | ``Vector2(1, 1)`` |
| [`float`](class_float.md)             | [`skew`](class_node2d.md#class_node2d_property_skew)                                       | ``0.0``           |
| [`Transform2D`](class_transform2d.md) | [`transform`](class_node2d.md#class_node2d_property_transform)                             |                   |

## 方法

|||
|:-:|:--|
| `void`                                | [`apply_scale`](class_node2d.md#class_node2d_method_apply_scale) ( ratio: [`Vector2`](class_vector2.md) )                                                    |
| [`float`](class_float.md)             | [`get_angle_to`](class_node2d.md#class_node2d_method_get_angle_to) ( point: [`Vector2`](class_vector2.md) ) const[^const]                                    |
| [`Transform2D`](class_transform2d.md) | [`get_relative_transform_to_parent`](class_node2d.md#class_node2d_method_get_relative_transform_to_parent) ( parent: [`Node`](class_node.md) ) const[^const] |
| `void`                                | [`global_translate`](class_node2d.md#class_node2d_method_global_translate) ( offset: [`Vector2`](class_vector2.md) )                                         |
| `void`                                | [`look_at`](class_node2d.md#class_node2d_method_look_at) ( point: [`Vector2`](class_vector2.md) )                                                            |
| `void`                                | [`move_local_x`](class_node2d.md#class_node2d_method_move_local_x) ( delta: [`float`](class_float.md), scaled: [`bool`](class_bool.md) = false )             |
| `void`                                | [`move_local_y`](class_node2d.md#class_node2d_method_move_local_y) ( delta: [`float`](class_float.md), scaled: [`bool`](class_bool.md) = false )             |
| `void`                                | [`rotate`](class_node2d.md#class_node2d_method_rotate) ( radians: [`float`](class_float.md) )                                                                |
| [`Vector2`](class_vector2.md)         | [`to_global`](class_node2d.md#class_node2d_method_to_global) ( local_point: [`Vector2`](class_vector2.md) ) const[^const]                                    |
| [`Vector2`](class_vector2.md)         | [`to_local`](class_node2d.md#class_node2d_method_to_local) ( global_point: [`Vector2`](class_vector2.md) ) const[^const]                                     |
| `void`                                | [`translate`](class_node2d.md#class_node2d_method_translate) ( offset: [`Vector2`](class_vector2.md) )                                                       |

<!-- rst-class:: classref-section-separator -->

---

## 属性说明

<div id="_class_node2d_property_global_position"></div>

[`Vector2`](class_vector2.md) **global_position** <div id="class_node2d_property_global_position"></div>

- `void` **set_global_position** ( value: [`Vector2`](class_vector2.md) )
- [`Vector2`](class_vector2.md) **get_global_position** ( )

Global position. See also [`position`](class_node2d.md#class_node2d_property_position).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_node2d_property_global_rotation"></div>

[`float`](class_float.md) **global_rotation** <div id="class_node2d_property_global_rotation"></div>

- `void` **set_global_rotation** ( value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_global_rotation** ( )

Global rotation in radians. See also [`rotation`](class_node2d.md#class_node2d_property_rotation).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_node2d_property_global_rotation_degrees"></div>

[`float`](class_float.md) **global_rotation_degrees** <div id="class_node2d_property_global_rotation_degrees"></div>

- `void` **set_global_rotation_degrees** ( value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_global_rotation_degrees** ( )

Helper property to access [`global_rotation`](class_node2d.md#class_node2d_property_global_rotation) in degrees instead of radians. See also [`rotation_degrees`](class_node2d.md#class_node2d_property_rotation_degrees).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_node2d_property_global_scale"></div>

[`Vector2`](class_vector2.md) **global_scale** <div id="class_node2d_property_global_scale"></div>

- `void` **set_global_scale** ( value: [`Vector2`](class_vector2.md) )
- [`Vector2`](class_vector2.md) **get_global_scale** ( )

Global scale. See also [`scale`](class_node2d.md#class_node2d_property_scale).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_node2d_property_global_skew"></div>

[`float`](class_float.md) **global_skew** <div id="class_node2d_property_global_skew"></div>

- `void` **set_global_skew** ( value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_global_skew** ( )

Global skew in radians. See also [`skew`](class_node2d.md#class_node2d_property_skew).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_node2d_property_global_transform"></div>

[`Transform2D`](class_transform2d.md) **global_transform** <div id="class_node2d_property_global_transform"></div>

- `void` **set_global_transform** ( value: [`Transform2D`](class_transform2d.md) )
- [`Transform2D`](class_transform2d.md) **get_global_transform** ( )

Global [`Transform2D`](class_transform2d.md). See also [`transform`](class_node2d.md#class_node2d_property_transform).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_node2d_property_position"></div>

[`Vector2`](class_vector2.md) **position** = ``Vector2(0, 0)`` <div id="class_node2d_property_position"></div>

- `void` **set_position** ( value: [`Vector2`](class_vector2.md) )
- [`Vector2`](class_vector2.md) **get_position** ( )

Position, relative to the node's parent. See also [`global_position`](class_node2d.md#class_node2d_property_global_position).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_node2d_property_rotation"></div>

[`float`](class_float.md) **rotation** = ``0.0`` <div id="class_node2d_property_rotation"></div>

- `void` **set_rotation** ( value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_rotation** ( )

Rotation in radians, relative to the node's parent. See also [`global_rotation`](class_node2d.md#class_node2d_property_global_rotation).

 **Note:** This property is edited in the inspector in degrees. If you want to use degrees in a script, use [`rotation_degrees`](class_node2d.md#class_node2d_property_rotation_degrees).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_node2d_property_rotation_degrees"></div>

[`float`](class_float.md) **rotation_degrees** <div id="class_node2d_property_rotation_degrees"></div>

- `void` **set_rotation_degrees** ( value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_rotation_degrees** ( )

Helper property to access [`rotation`](class_node2d.md#class_node2d_property_rotation) in degrees instead of radians. See also [`global_rotation_degrees`](class_node2d.md#class_node2d_property_global_rotation_degrees).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_node2d_property_scale"></div>

[`Vector2`](class_vector2.md) **scale** = ``Vector2(1, 1)`` <div id="class_node2d_property_scale"></div>

- `void` **set_scale** ( value: [`Vector2`](class_vector2.md) )
- [`Vector2`](class_vector2.md) **get_scale** ( )

The node's scale, relative to the node's parent. Unscaled value: `(1, 1)`. See also [`global_scale`](class_node2d.md#class_node2d_property_global_scale).

 **Note:** Negative X scales in 2D are not decomposable from the transformation matrix. Due to the way scale is represented with transformation matrices in Godot, negative scales on the X axis will be changed to negative scales on the Y axis and a rotation of 180 degrees when decomposed.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_node2d_property_skew"></div>

[`float`](class_float.md) **skew** = ``0.0`` <div id="class_node2d_property_skew"></div>

- `void` **set_skew** ( value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_skew** ( )

If set to a non-zero value, slants the node in one direction or another. This can be used for pseudo-3D effects. See also [`global_skew`](class_node2d.md#class_node2d_property_global_skew).

 **Note:** Skew is performed on the X axis only, and *between* rotation and scaling.

 **Note:** This property is edited in the inspector in degrees. If you want to use degrees in a script, use `skew = deg_to_rad(value_in_degrees)`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_node2d_property_transform"></div>

[`Transform2D`](class_transform2d.md) **transform** <div id="class_node2d_property_transform"></div>

- `void` **set_transform** ( value: [`Transform2D`](class_transform2d.md) )
- [`Transform2D`](class_transform2d.md) **get_transform** ( )

The node's [`Transform2D`](class_transform2d.md), relative to the node's parent. See also [`global_transform`](class_node2d.md#class_node2d_property_global_transform).

<!-- rst-class:: classref-section-separator -->

---

## 方法说明

<div id="_class_node2d_method_apply_scale"></div>

`void` **apply_scale** ( ratio: [`Vector2`](class_vector2.md) )<div id="class_node2d_method_apply_scale"></div>

Multiplies the current scale by the `ratio` vector.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_node2d_method_get_angle_to"></div>

[`float`](class_float.md) **get_angle_to** ( point: [`Vector2`](class_vector2.md) ) const[^const]<div id="class_node2d_method_get_angle_to"></div>

Returns the angle between the node and the `point` in radians.

 [*Illustration of the returned angle.*](https://raw.githubusercontent.com/godotengine/godot-docs/master/img/node2d_get_angle_to.png)

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_node2d_method_get_relative_transform_to_parent"></div>

[`Transform2D`](class_transform2d.md) **get_relative_transform_to_parent** ( parent: [`Node`](class_node.md) ) const[^const]<div id="class_node2d_method_get_relative_transform_to_parent"></div>

Returns the [`Transform2D`](class_transform2d.md) relative to this node's parent.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_node2d_method_global_translate"></div>

`void` **global_translate** ( offset: [`Vector2`](class_vector2.md) )<div id="class_node2d_method_global_translate"></div>

Adds the `offset` vector to the node's global position.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_node2d_method_look_at"></div>

`void` **look_at** ( point: [`Vector2`](class_vector2.md) )<div id="class_node2d_method_look_at"></div>

Rotates the node so that its local +X axis points towards the `point`, which is expected to use global coordinates.

 `point` should not be the same as the node's position, otherwise the node always looks to the right.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_node2d_method_move_local_x"></div>

`void` **move_local_x** ( delta: [`float`](class_float.md), scaled: [`bool`](class_bool.md) = false )<div id="class_node2d_method_move_local_x"></div>

Applies a local translation on the node's X axis based on the [`Node._process`](class_node.md#class_node_private_method__process)'s `delta`. If `scaled` is `false`, normalizes the movement.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_node2d_method_move_local_y"></div>

`void` **move_local_y** ( delta: [`float`](class_float.md), scaled: [`bool`](class_bool.md) = false )<div id="class_node2d_method_move_local_y"></div>

Applies a local translation on the node's Y axis based on the [`Node._process`](class_node.md#class_node_private_method__process)'s `delta`. If `scaled` is `false`, normalizes the movement.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_node2d_method_rotate"></div>

`void` **rotate** ( radians: [`float`](class_float.md) )<div id="class_node2d_method_rotate"></div>

Applies a rotation to the node, in radians, starting from its current rotation.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_node2d_method_to_global"></div>

[`Vector2`](class_vector2.md) **to_global** ( local_point: [`Vector2`](class_vector2.md) ) const[^const]<div id="class_node2d_method_to_global"></div>

Transforms the provided local position into a position in global coordinate space. The input is expected to be local relative to the **Node2D** it is called on. e.g. Applying this method to the positions of child nodes will correctly transform their positions into the global coordinate space, but applying it to a node's own position will give an incorrect result, as it will incorporate the node's own transformation into its global position.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_node2d_method_to_local"></div>

[`Vector2`](class_vector2.md) **to_local** ( global_point: [`Vector2`](class_vector2.md) ) const[^const]<div id="class_node2d_method_to_local"></div>

Transforms the provided global position into a position in local coordinate space. The output will be local relative to the **Node2D** it is called on. e.g. It is appropriate for determining the positions of child nodes, but it is not appropriate for determining its own position relative to its parent.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_node2d_method_translate"></div>

`void` **translate** ( offset: [`Vector2`](class_vector2.md) )<div id="class_node2d_method_translate"></div>

Translates the node by the given `offset` in local coordinates.

[^virtual]: 本方法通常需要用户覆盖才能生效。
[^const]: 本方法无副作用，不会修改该实例的任何成员变量。
[^vararg]: 本方法除了能接受在此处描述的参数外，还能够继续接受任意数量的参数。
[^constructor]: 本方法用于构造某个类型。
[^static]: 调用本方法无需实例，可直接使用类名进行调用。
[^operator]: 本方法描述的是使用本类型作为左操作数的有效运算符。
[^bitfield]: 这个值是由下列位标志构成位掩码的整数。
[^void]: 无返回值。
