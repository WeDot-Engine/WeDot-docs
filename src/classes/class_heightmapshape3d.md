<!-- ⚠ 请勿编辑本文件 ⚠ -->
<!-- 本文档使用脚本从 WeDot 引擎源码仓库生成。 -->
<!-- 生成脚本：https://github.com/WeDot-Engine/WeDot/tree/4.3/doc/tools/make_md.py； -->
<!-- 原文件：https://github.com/WeDot-Engine/WeDot/tree/4.3/doc/classes/HeightMapShape3D.xml。 -->

<div id="_class_heightmapshape3d"></div>

# HeightMapShape3D

**继承：** [`Shape3D`](class_shape3d.md) **<** [`Resource`](class_resource.md) **<** [`RefCounted`](class_refcounted.md) **<** [`Object`](class_object.md)

A 3D height map shape used for physics collision.

## 描述

A 3D heightmap shape, intended for use in physics. Usually used to provide a shape for a [`CollisionShape3D`](class_collisionshape3d.md). This is useful for terrain, but it is limited as overhangs (such as caves) cannot be stored. Holes in a **HeightMapShape3D** are created by assigning very low values to points in the desired area.

 **Performance:** **HeightMapShape3D** is faster to check collisions against than [`ConcavePolygonShape3D`](class_concavepolygonshape3d.md), but it is significantly slower than primitive shapes like [`BoxShape3D`](class_boxshape3d.md).

A heightmap collision shape can also be build by using an [`Image`](class_image.md) reference:



```gdscript

    var heightmap_texture: Texture = ResourceLoader.load("res://heightmap_image.exr")
    var heightmap_image: Image = heightmap_texture.get_image()
    heightmap_image.convert(Image.FORMAT_RF)
    
    var height_min: float = 0.0
    var height_max: float = 10.0
    
    update_map_data_from_image(heightmap_image, height_min, height_max)
```





## 属性

| [`PackedFloat32Array`](class_packedfloat32array.md) | [`map_data`](#class_heightmapshape3d_property_map_data)   | ``PackedFloat32Array(0, 0, 0, 0)`` |
| [`int`](class_int.md)                               | [`map_depth`](#class_heightmapshape3d_property_map_depth) | ``2``                              |
| [`int`](class_int.md)                               | [`map_width`](#class_heightmapshape3d_property_map_width) | ``2``                              |

## 方法

| [`float`](class_float.md) | [`get_max_height`](#class_heightmapshape3d_method_get_max_height) ( ) const[^const]                                                                                                                          |
| [`float`](class_float.md) | [`get_min_height`](#class_heightmapshape3d_method_get_min_height) ( ) const[^const]                                                                                                                          |
| `void`                    | [`update_map_data_from_image`](#class_heightmapshape3d_method_update_map_data_from_image) ( image: [`Image`](class_image.md), height_min: [`float`](class_float.md), height_max: [`float`](class_float.md) ) |

<!-- rst-class:: classref-section-separator -->

---

## 属性说明

<div id="_class_heightmapshape3d_property_map_data"></div>

[`PackedFloat32Array`](class_packedfloat32array.md) **map_data** = ``PackedFloat32Array(0, 0, 0, 0)`` <div id="class_heightmapshape3d_property_map_data"></div>

- `void` **set_map_data** ( value: [`PackedFloat32Array`](class_packedfloat32array.md) )
- [`PackedFloat32Array`](class_packedfloat32array.md) **get_map_data** ( )

Height map data. The array's size must be equal to [`map_width`](#class_heightmapshape3d_property_map_width) multiplied by [`map_depth`](#class_heightmapshape3d_property_map_depth).

**Note:** The returned array is *copied* and any changes to it will not update the original property value. See [`PackedFloat32Array`](class_packedfloat32array.md) for more details.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_heightmapshape3d_property_map_depth"></div>

[`int`](class_int.md) **map_depth** = ``2`` <div id="class_heightmapshape3d_property_map_depth"></div>

- `void` **set_map_depth** ( value: [`int`](class_int.md) )
- [`int`](class_int.md) **get_map_depth** ( )

Number of vertices in the depth of the height map. Changing this will resize the [`map_data`](#class_heightmapshape3d_property_map_data).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_heightmapshape3d_property_map_width"></div>

[`int`](class_int.md) **map_width** = ``2`` <div id="class_heightmapshape3d_property_map_width"></div>

- `void` **set_map_width** ( value: [`int`](class_int.md) )
- [`int`](class_int.md) **get_map_width** ( )

Number of vertices in the width of the height map. Changing this will resize the [`map_data`](#class_heightmapshape3d_property_map_data).

<!-- rst-class:: classref-section-separator -->

---

## 方法说明

<div id="_class_heightmapshape3d_method_get_max_height"></div>

[`float`](class_float.md) **get_max_height** ( ) const[^const]<div id="class_heightmapshape3d_method_get_max_height"></div>

Returns the largest height value found in [`map_data`](#class_heightmapshape3d_property_map_data). Recalculates only when [`map_data`](#class_heightmapshape3d_property_map_data) changes.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_heightmapshape3d_method_get_min_height"></div>

[`float`](class_float.md) **get_min_height** ( ) const[^const]<div id="class_heightmapshape3d_method_get_min_height"></div>

Returns the smallest height value found in [`map_data`](#class_heightmapshape3d_property_map_data). Recalculates only when [`map_data`](#class_heightmapshape3d_property_map_data) changes.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_heightmapshape3d_method_update_map_data_from_image"></div>

`void` **update_map_data_from_image** ( image: [`Image`](class_image.md), height_min: [`float`](class_float.md), height_max: [`float`](class_float.md) )<div id="class_heightmapshape3d_method_update_map_data_from_image"></div>

Updates [`map_data`](#class_heightmapshape3d_property_map_data) with data read from an [`Image`](class_image.md) reference. Automatically resizes heightmap [`map_width`](#class_heightmapshape3d_property_map_width) and [`map_depth`](#class_heightmapshape3d_property_map_depth) to fit the full image width and height.

The image needs to be in either [`Image.FORMAT_RF`](#class_image_constant_format_rf) (32 bit), [`Image.FORMAT_RH`](#class_image_constant_format_rh) (16 bit), or [`Image.FORMAT_R8`](#class_image_constant_format_r8) (8 bit).

Each image pixel is read in as a float on the range from `0.0` (black pixel) to `1.0` (white pixel). This range value gets remapped to `height_min` and `height_max` to form the final height value.

[^virtual]: 本方法通常需要用户覆盖才能生效。
[^const]: 本方法无副作用，不会修改该实例的任何成员变量。
[^vararg]: 本方法除了能接受在此处描述的参数外，还能够继续接受任意数量的参数。
[^constructor]: 本方法用于构造某个类型。
[^static]: 调用本方法无需实例，可直接使用类名进行调用。
[^operator]: 本方法描述的是使用本类型作为左操作数的有效运算符。
[^bitfield]: 这个值是由下列位标志构成位掩码的整数。
[^void]: 无返回值。
