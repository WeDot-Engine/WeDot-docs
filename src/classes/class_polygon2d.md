<!-- ⚠ 请勿编辑本文件 ⚠ -->
<!-- 本文档使用脚本从 WeDot 引擎源码仓库生成。 -->
<!-- 生成脚本：https://github.com/WeDot-Engine/WeDot/tree/4.3/doc/tools/make_md.py； -->
<!-- 原文件：https://github.com/WeDot-Engine/WeDot/tree/4.3/doc/classes/Polygon2D.xml。 -->

<div id="_class_polygon2d"></div>

# Polygon2D

**继承：** [`Node2D`](class_node2d.md) **<** [`CanvasItem`](class_canvasitem.md) **<** [`Node`](class_node.md) **<** [`Object`](class_object.md)

A 2D polygon.

## 描述

A Polygon2D is defined by a set of points. Each point is connected to the next, with the final point being connected to the first, resulting in a closed polygon. Polygon2Ds can be filled with color (solid or gradient) or filled with a given texture.

## 属性

| [`bool`](class_bool.md)                             | [`antialiased`](#class_polygon2d_property_antialiased)                     | ``false``                |
| [`Array`](class_array.md)                           | [`bones`](#class_polygon2d_property_bones)                                 | ``[]``                   |
| [`Color`](class_color.md)                           | [`color`](#class_polygon2d_property_color)                                 | ``Color(1, 1, 1, 1)``    |
| [`int`](class_int.md)                               | [`internal_vertex_count`](#class_polygon2d_property_internal_vertex_count) | ``0``                    |
| [`float`](class_float.md)                           | [`invert_border`](#class_polygon2d_property_invert_border)                 | ``100.0``                |
| [`bool`](class_bool.md)                             | [`invert_enabled`](#class_polygon2d_property_invert_enabled)               | ``false``                |
| [`Vector2`](class_vector2.md)                       | [`offset`](#class_polygon2d_property_offset)                               | ``Vector2(0, 0)``        |
| [`PackedVector2Array`](class_packedvector2array.md) | [`polygon`](#class_polygon2d_property_polygon)                             | ``PackedVector2Array()`` |
| [`Array`](class_array.md)                           | [`polygons`](#class_polygon2d_property_polygons)                           | ``[]``                   |
| [`NodePath`](class_nodepath.md)                     | [`skeleton`](#class_polygon2d_property_skeleton)                           | ``NodePath("")``         |
| [`Texture2D`](class_texture2d.md)                   | [`texture`](#class_polygon2d_property_texture)                             |                          |
| [`Vector2`](class_vector2.md)                       | [`texture_offset`](#class_polygon2d_property_texture_offset)               | ``Vector2(0, 0)``        |
| [`float`](class_float.md)                           | [`texture_rotation`](#class_polygon2d_property_texture_rotation)           | ``0.0``                  |
| [`Vector2`](class_vector2.md)                       | [`texture_scale`](#class_polygon2d_property_texture_scale)                 | ``Vector2(1, 1)``        |
| [`PackedVector2Array`](class_packedvector2array.md) | [`uv`](#class_polygon2d_property_uv)                                       | ``PackedVector2Array()`` |
| [`PackedColorArray`](class_packedcolorarray.md)     | [`vertex_colors`](#class_polygon2d_property_vertex_colors)                 | ``PackedColorArray()``   |

## 方法

| `void`                                              | [`add_bone`](#class_polygon2d_method_add_bone) ( path: [`NodePath`](class_nodepath.md), weights: [`PackedFloat32Array`](class_packedfloat32array.md) )        |
| `void`                                              | [`clear_bones`](#class_polygon2d_method_clear_bones) ( )                                                                                                      |
| `void`                                              | [`erase_bone`](#class_polygon2d_method_erase_bone) ( index: [`int`](class_int.md) )                                                                           |
| [`int`](class_int.md)                               | [`get_bone_count`](#class_polygon2d_method_get_bone_count) ( ) const[^const]                                                                                  |
| [`NodePath`](class_nodepath.md)                     | [`get_bone_path`](#class_polygon2d_method_get_bone_path) ( index: [`int`](class_int.md) ) const[^const]                                                       |
| [`PackedFloat32Array`](class_packedfloat32array.md) | [`get_bone_weights`](#class_polygon2d_method_get_bone_weights) ( index: [`int`](class_int.md) ) const[^const]                                                 |
| `void`                                              | [`set_bone_path`](#class_polygon2d_method_set_bone_path) ( index: [`int`](class_int.md), path: [`NodePath`](class_nodepath.md) )                              |
| `void`                                              | [`set_bone_weights`](#class_polygon2d_method_set_bone_weights) ( index: [`int`](class_int.md), weights: [`PackedFloat32Array`](class_packedfloat32array.md) ) |

<!-- rst-class:: classref-section-separator -->

---

## 属性说明

<div id="_class_polygon2d_property_antialiased"></div>

[`bool`](class_bool.md) **antialiased** = ``false`` <div id="class_polygon2d_property_antialiased"></div>

- `void` **set_antialiased** ( value: [`bool`](class_bool.md) )
- [`bool`](class_bool.md) **get_antialiased** ( )

If `true`, polygon edges will be anti-aliased.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_polygon2d_property_bones"></div>

[`Array`](class_array.md) **bones** = ``[]`` <div id="class_polygon2d_property_bones"></div>

Internal list of [`Bone2D`](class_bone2d.md) nodes used by the assigned [`skeleton`](#class_polygon2d_property_skeleton). Edited using the Polygon2D editor ("UV" button on the top toolbar).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_polygon2d_property_color"></div>

[`Color`](class_color.md) **color** = ``Color(1, 1, 1, 1)`` <div id="class_polygon2d_property_color"></div>

- `void` **set_color** ( value: [`Color`](class_color.md) )
- [`Color`](class_color.md) **get_color** ( )

The polygon's fill color. If [`texture`](#class_polygon2d_property_texture) is set, it will be multiplied by this color. It will also be the default color for vertices not set in [`vertex_colors`](#class_polygon2d_property_vertex_colors).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_polygon2d_property_internal_vertex_count"></div>

[`int`](class_int.md) **internal_vertex_count** = ``0`` <div id="class_polygon2d_property_internal_vertex_count"></div>

- `void` **set_internal_vertex_count** ( value: [`int`](class_int.md) )
- [`int`](class_int.md) **get_internal_vertex_count** ( )

Number of internal vertices, used for UV mapping.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_polygon2d_property_invert_border"></div>

[`float`](class_float.md) **invert_border** = ``100.0`` <div id="class_polygon2d_property_invert_border"></div>

- `void` **set_invert_border** ( value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_invert_border** ( )

Added padding applied to the bounding box when [`invert_enabled`](#class_polygon2d_property_invert_enabled) is set to `true`. Setting this value too small may result in a "Bad Polygon" error.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_polygon2d_property_invert_enabled"></div>

[`bool`](class_bool.md) **invert_enabled** = ``false`` <div id="class_polygon2d_property_invert_enabled"></div>

- `void` **set_invert_enabled** ( value: [`bool`](class_bool.md) )
- [`bool`](class_bool.md) **get_invert_enabled** ( )

If `true`, the polygon will be inverted, containing the area outside the defined points and extending to the [`invert_border`](#class_polygon2d_property_invert_border).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_polygon2d_property_offset"></div>

[`Vector2`](class_vector2.md) **offset** = ``Vector2(0, 0)`` <div id="class_polygon2d_property_offset"></div>

- `void` **set_offset** ( value: [`Vector2`](class_vector2.md) )
- [`Vector2`](class_vector2.md) **get_offset** ( )

The offset applied to each vertex.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_polygon2d_property_polygon"></div>

[`PackedVector2Array`](class_packedvector2array.md) **polygon** = ``PackedVector2Array()`` <div id="class_polygon2d_property_polygon"></div>

- `void` **set_polygon** ( value: [`PackedVector2Array`](class_packedvector2array.md) )
- [`PackedVector2Array`](class_packedvector2array.md) **get_polygon** ( )

The polygon's list of vertices. The final point will be connected to the first.

**Note:** The returned array is *copied* and any changes to it will not update the original property value. See [`PackedVector2Array`](class_packedvector2array.md) for more details.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_polygon2d_property_polygons"></div>

[`Array`](class_array.md) **polygons** = ``[]`` <div id="class_polygon2d_property_polygons"></div>

- `void` **set_polygons** ( value: [`Array`](class_array.md) )
- [`Array`](class_array.md) **get_polygons** ( )

The list of polygons, in case more than one is being represented. Every individual polygon is stored as a [`PackedInt32Array`](class_packedint32array.md) where each [`int`](class_int.md) is an index to a point in [`polygon`](#class_polygon2d_property_polygon). If empty, this property will be ignored, and the resulting single polygon will be composed of all points in [`polygon`](#class_polygon2d_property_polygon), using the order they are stored in.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_polygon2d_property_skeleton"></div>

[`NodePath`](class_nodepath.md) **skeleton** = ``NodePath("")`` <div id="class_polygon2d_property_skeleton"></div>

- `void` **set_skeleton** ( value: [`NodePath`](class_nodepath.md) )
- [`NodePath`](class_nodepath.md) **get_skeleton** ( )

Path to a [`Skeleton2D`](class_skeleton2d.md) node used for skeleton-based deformations of this polygon. If empty or invalid, skeletal deformations will not be used.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_polygon2d_property_texture"></div>

[`Texture2D`](class_texture2d.md) **texture** <div id="class_polygon2d_property_texture"></div>

- `void` **set_texture** ( value: [`Texture2D`](class_texture2d.md) )
- [`Texture2D`](class_texture2d.md) **get_texture** ( )

The polygon's fill texture. Use [`uv`](#class_polygon2d_property_uv) to set texture coordinates.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_polygon2d_property_texture_offset"></div>

[`Vector2`](class_vector2.md) **texture_offset** = ``Vector2(0, 0)`` <div id="class_polygon2d_property_texture_offset"></div>

- `void` **set_texture_offset** ( value: [`Vector2`](class_vector2.md) )
- [`Vector2`](class_vector2.md) **get_texture_offset** ( )

Amount to offset the polygon's [`texture`](#class_polygon2d_property_texture). If set to `Vector2(0, 0)`, the texture's origin (its top-left corner) will be placed at the polygon's position.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_polygon2d_property_texture_rotation"></div>

[`float`](class_float.md) **texture_rotation** = ``0.0`` <div id="class_polygon2d_property_texture_rotation"></div>

- `void` **set_texture_rotation** ( value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_texture_rotation** ( )

The texture's rotation in radians.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_polygon2d_property_texture_scale"></div>

[`Vector2`](class_vector2.md) **texture_scale** = ``Vector2(1, 1)`` <div id="class_polygon2d_property_texture_scale"></div>

- `void` **set_texture_scale** ( value: [`Vector2`](class_vector2.md) )
- [`Vector2`](class_vector2.md) **get_texture_scale** ( )

Amount to multiply the [`uv`](#class_polygon2d_property_uv) coordinates when using [`texture`](#class_polygon2d_property_texture). Larger values make the texture smaller, and vice versa.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_polygon2d_property_uv"></div>

[`PackedVector2Array`](class_packedvector2array.md) **uv** = ``PackedVector2Array()`` <div id="class_polygon2d_property_uv"></div>

- `void` **set_uv** ( value: [`PackedVector2Array`](class_packedvector2array.md) )
- [`PackedVector2Array`](class_packedvector2array.md) **get_uv** ( )

Texture coordinates for each vertex of the polygon. There should be one UV value per polygon vertex. If there are fewer, undefined vertices will use `Vector2(0, 0)`.

**Note:** The returned array is *copied* and any changes to it will not update the original property value. See [`PackedVector2Array`](class_packedvector2array.md) for more details.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_polygon2d_property_vertex_colors"></div>

[`PackedColorArray`](class_packedcolorarray.md) **vertex_colors** = ``PackedColorArray()`` <div id="class_polygon2d_property_vertex_colors"></div>

- `void` **set_vertex_colors** ( value: [`PackedColorArray`](class_packedcolorarray.md) )
- [`PackedColorArray`](class_packedcolorarray.md) **get_vertex_colors** ( )

Color for each vertex. Colors are interpolated between vertices, resulting in smooth gradients. There should be one per polygon vertex. If there are fewer, undefined vertices will use [`color`](#class_polygon2d_property_color).

**Note:** The returned array is *copied* and any changes to it will not update the original property value. See [`PackedColorArray`](class_packedcolorarray.md) for more details.

<!-- rst-class:: classref-section-separator -->

---

## 方法说明

<div id="_class_polygon2d_method_add_bone"></div>

`void` **add_bone** ( path: [`NodePath`](class_nodepath.md), weights: [`PackedFloat32Array`](class_packedfloat32array.md) )<div id="class_polygon2d_method_add_bone"></div>

Adds a bone with the specified `path` and `weights`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_polygon2d_method_clear_bones"></div>

`void` **clear_bones** ( )<div id="class_polygon2d_method_clear_bones"></div>

Removes all bones from this **Polygon2D**.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_polygon2d_method_erase_bone"></div>

`void` **erase_bone** ( index: [`int`](class_int.md) )<div id="class_polygon2d_method_erase_bone"></div>

Removes the specified bone from this **Polygon2D**.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_polygon2d_method_get_bone_count"></div>

[`int`](class_int.md) **get_bone_count** ( ) const[^const]<div id="class_polygon2d_method_get_bone_count"></div>

Returns the number of bones in this **Polygon2D**.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_polygon2d_method_get_bone_path"></div>

[`NodePath`](class_nodepath.md) **get_bone_path** ( index: [`int`](class_int.md) ) const[^const]<div id="class_polygon2d_method_get_bone_path"></div>

Returns the path to the node associated with the specified bone.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_polygon2d_method_get_bone_weights"></div>

[`PackedFloat32Array`](class_packedfloat32array.md) **get_bone_weights** ( index: [`int`](class_int.md) ) const[^const]<div id="class_polygon2d_method_get_bone_weights"></div>

Returns the weight values of the specified bone.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_polygon2d_method_set_bone_path"></div>

`void` **set_bone_path** ( index: [`int`](class_int.md), path: [`NodePath`](class_nodepath.md) )<div id="class_polygon2d_method_set_bone_path"></div>

Sets the path to the node associated with the specified bone.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_polygon2d_method_set_bone_weights"></div>

`void` **set_bone_weights** ( index: [`int`](class_int.md), weights: [`PackedFloat32Array`](class_packedfloat32array.md) )<div id="class_polygon2d_method_set_bone_weights"></div>

Sets the weight values for the specified bone.

[^virtual]: 本方法通常需要用户覆盖才能生效。
[^const]: 本方法无副作用，不会修改该实例的任何成员变量。
[^vararg]: 本方法除了能接受在此处描述的参数外，还能够继续接受任意数量的参数。
[^constructor]: 本方法用于构造某个类型。
[^static]: 调用本方法无需实例，可直接使用类名进行调用。
[^operator]: 本方法描述的是使用本类型作为左操作数的有效运算符。
[^bitfield]: 这个值是由下列位标志构成位掩码的整数。
[^void]: 无返回值。
