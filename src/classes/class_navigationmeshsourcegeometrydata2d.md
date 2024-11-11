<!-- ⚠ 请勿编辑本文件 ⚠ -->
<!-- 本文档使用脚本从 WeDot 引擎源码仓库生成。 -->
<!-- 生成脚本：https://github.com/WeDot-Engine/WeDot/tree/master/doc/tools/make_md.py； -->
<!-- 原文件：https://github.com/WeDot-Engine/WeDot/tree/master/doc/classes/NavigationMeshSourceGeometryData2D.xml。 -->

<div id="_class_navigationmeshsourcegeometrydata2d"></div>

# NavigationMeshSourceGeometryData2D

**实验性：** This class may be changed or removed in future versions.

**继承：** [`Resource`](class_resource.md) **<** [`RefCounted`](class_refcounted.md) **<** [`Object`](class_object.md)

Container for parsed source geometry data used in navigation mesh baking.

## 描述

Container for parsed source geometry data used in navigation mesh baking.

## 方法

|||
|:-:|:--|
| `void`                                                                      | [`add_obstruction_outline`](class_navigationmeshsourcegeometrydata2d.md#class_navigationmeshsourcegeometrydata2d_method_add_obstruction_outline) ( shape_outline: [`PackedVector2Array`](class_packedvector2array.md) )                                        |
| `void`                                                                      | [`add_projected_obstruction`](class_navigationmeshsourcegeometrydata2d.md#class_navigationmeshsourcegeometrydata2d_method_add_projected_obstruction) ( vertices: [`PackedVector2Array`](class_packedvector2array.md), carve: [`bool`](class_bool.md) )         |
| `void`                                                                      | [`add_traversable_outline`](class_navigationmeshsourcegeometrydata2d.md#class_navigationmeshsourcegeometrydata2d_method_add_traversable_outline) ( shape_outline: [`PackedVector2Array`](class_packedvector2array.md) )                                        |
| `void`                                                                      | [`append_obstruction_outlines`](class_navigationmeshsourcegeometrydata2d.md#class_navigationmeshsourcegeometrydata2d_method_append_obstruction_outlines) ( obstruction_outlines: [Array](class_array.md) [`PackedVector2Array`](class_packedvector2array.md) ) |
| `void`                                                                      | [`append_traversable_outlines`](class_navigationmeshsourcegeometrydata2d.md#class_navigationmeshsourcegeometrydata2d_method_append_traversable_outlines) ( traversable_outlines: [Array](class_array.md) [`PackedVector2Array`](class_packedvector2array.md) ) |
| `void`                                                                      | [`clear`](class_navigationmeshsourcegeometrydata2d.md#class_navigationmeshsourcegeometrydata2d_method_clear) ( )                                                                                                                                               |
| `void`                                                                      | [`clear_projected_obstructions`](class_navigationmeshsourcegeometrydata2d.md#class_navigationmeshsourcegeometrydata2d_method_clear_projected_obstructions) ( )                                                                                                 |
| [`Rect2`](class_rect2.md)                                                   | [`get_bounds`](class_navigationmeshsourcegeometrydata2d.md#class_navigationmeshsourcegeometrydata2d_method_get_bounds) ( )                                                                                                                                     |
| [Array](class_array.md) [`PackedVector2Array`](class_packedvector2array.md) | [`get_obstruction_outlines`](class_navigationmeshsourcegeometrydata2d.md#class_navigationmeshsourcegeometrydata2d_method_get_obstruction_outlines) ( ) const[^const]                                                                                           |
| [`Array`](class_array.md)                                                   | [`get_projected_obstructions`](class_navigationmeshsourcegeometrydata2d.md#class_navigationmeshsourcegeometrydata2d_method_get_projected_obstructions) ( ) const[^const]                                                                                       |
| [Array](class_array.md) [`PackedVector2Array`](class_packedvector2array.md) | [`get_traversable_outlines`](class_navigationmeshsourcegeometrydata2d.md#class_navigationmeshsourcegeometrydata2d_method_get_traversable_outlines) ( ) const[^const]                                                                                           |
| [`bool`](class_bool.md)                                                     | [`has_data`](class_navigationmeshsourcegeometrydata2d.md#class_navigationmeshsourcegeometrydata2d_method_has_data) ( )                                                                                                                                         |
| `void`                                                                      | [`merge`](class_navigationmeshsourcegeometrydata2d.md#class_navigationmeshsourcegeometrydata2d_method_merge) ( other_geometry: [`NavigationMeshSourceGeometryData2D`](class_navigationmeshsourcegeometrydata2d.md) )                                           |
| `void`                                                                      | [`set_obstruction_outlines`](class_navigationmeshsourcegeometrydata2d.md#class_navigationmeshsourcegeometrydata2d_method_set_obstruction_outlines) ( obstruction_outlines: [Array](class_array.md) [`PackedVector2Array`](class_packedvector2array.md) )       |
| `void`                                                                      | [`set_projected_obstructions`](class_navigationmeshsourcegeometrydata2d.md#class_navigationmeshsourcegeometrydata2d_method_set_projected_obstructions) ( projected_obstructions: [`Array`](class_array.md) )                                                   |
| `void`                                                                      | [`set_traversable_outlines`](class_navigationmeshsourcegeometrydata2d.md#class_navigationmeshsourcegeometrydata2d_method_set_traversable_outlines) ( traversable_outlines: [Array](class_array.md) [`PackedVector2Array`](class_packedvector2array.md) )       |

<!-- rst-class:: classref-section-separator -->

---

## 方法说明

<div id="_class_navigationmeshsourcegeometrydata2d_method_add_obstruction_outline"></div>

`void` **add_obstruction_outline** ( shape_outline: [`PackedVector2Array`](class_packedvector2array.md) )<div id="class_navigationmeshsourcegeometrydata2d_method_add_obstruction_outline"></div>

Adds the outline points of a shape as obstructed area.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_navigationmeshsourcegeometrydata2d_method_add_projected_obstruction"></div>

`void` **add_projected_obstruction** ( vertices: [`PackedVector2Array`](class_packedvector2array.md), carve: [`bool`](class_bool.md) )<div id="class_navigationmeshsourcegeometrydata2d_method_add_projected_obstruction"></div>

Adds a projected obstruction shape to the source geometry. If `carve` is `true` the carved shape will not be affected by additional offsets (e.g. agent radius) of the navigation mesh baking process.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_navigationmeshsourcegeometrydata2d_method_add_traversable_outline"></div>

`void` **add_traversable_outline** ( shape_outline: [`PackedVector2Array`](class_packedvector2array.md) )<div id="class_navigationmeshsourcegeometrydata2d_method_add_traversable_outline"></div>

Adds the outline points of a shape as traversable area.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_navigationmeshsourcegeometrydata2d_method_append_obstruction_outlines"></div>

`void` **append_obstruction_outlines** ( obstruction_outlines: [Array](class_array.md) [`PackedVector2Array`](class_packedvector2array.md) )<div id="class_navigationmeshsourcegeometrydata2d_method_append_obstruction_outlines"></div>

Appends another array of `obstruction_outlines` at the end of the existing obstruction outlines array.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_navigationmeshsourcegeometrydata2d_method_append_traversable_outlines"></div>

`void` **append_traversable_outlines** ( traversable_outlines: [Array](class_array.md) [`PackedVector2Array`](class_packedvector2array.md) )<div id="class_navigationmeshsourcegeometrydata2d_method_append_traversable_outlines"></div>

Appends another array of `traversable_outlines` at the end of the existing traversable outlines array.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_navigationmeshsourcegeometrydata2d_method_clear"></div>

`void` **clear** ( )<div id="class_navigationmeshsourcegeometrydata2d_method_clear"></div>

Clears the internal data.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_navigationmeshsourcegeometrydata2d_method_clear_projected_obstructions"></div>

`void` **clear_projected_obstructions** ( )<div id="class_navigationmeshsourcegeometrydata2d_method_clear_projected_obstructions"></div>

Clears all projected obstructions.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_navigationmeshsourcegeometrydata2d_method_get_bounds"></div>

[`Rect2`](class_rect2.md) **get_bounds** ( )<div id="class_navigationmeshsourcegeometrydata2d_method_get_bounds"></div>

Returns an axis-aligned bounding box that covers all the stored geometry data. The bounds are calculated when calling this function with the result cached until further geometry changes are made.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_navigationmeshsourcegeometrydata2d_method_get_obstruction_outlines"></div>

[Array](class_array.md) [`PackedVector2Array`](class_packedvector2array.md) **get_obstruction_outlines** ( ) const[^const]<div id="class_navigationmeshsourcegeometrydata2d_method_get_obstruction_outlines"></div>

Returns all the obstructed area outlines arrays.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_navigationmeshsourcegeometrydata2d_method_get_projected_obstructions"></div>

[`Array`](class_array.md) **get_projected_obstructions** ( ) const[^const]<div id="class_navigationmeshsourcegeometrydata2d_method_get_projected_obstructions"></div>

Returns the projected obstructions as an [`Array`](class_array.md) of dictionaries. Each [`Dictionary`](class_dictionary.md) contains the following entries:

- `vertices` - A [`PackedFloat32Array`](class_packedfloat32array.md) that defines the outline points of the projected shape.

- `carve` - A [`bool`](class_bool.md) that defines how the projected shape affects the navigation mesh baking. If `true` the projected shape will not be affected by addition offsets, e.g. agent radius.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_navigationmeshsourcegeometrydata2d_method_get_traversable_outlines"></div>

[Array](class_array.md) [`PackedVector2Array`](class_packedvector2array.md) **get_traversable_outlines** ( ) const[^const]<div id="class_navigationmeshsourcegeometrydata2d_method_get_traversable_outlines"></div>

Returns all the traversable area outlines arrays.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_navigationmeshsourcegeometrydata2d_method_has_data"></div>

[`bool`](class_bool.md) **has_data** ( )<div id="class_navigationmeshsourcegeometrydata2d_method_has_data"></div>

Returns `true` when parsed source geometry data exists.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_navigationmeshsourcegeometrydata2d_method_merge"></div>

`void` **merge** ( other_geometry: [`NavigationMeshSourceGeometryData2D`](class_navigationmeshsourcegeometrydata2d.md) )<div id="class_navigationmeshsourcegeometrydata2d_method_merge"></div>

Adds the geometry data of another **NavigationMeshSourceGeometryData2D** to the navigation mesh baking data.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_navigationmeshsourcegeometrydata2d_method_set_obstruction_outlines"></div>

`void` **set_obstruction_outlines** ( obstruction_outlines: [Array](class_array.md) [`PackedVector2Array`](class_packedvector2array.md) )<div id="class_navigationmeshsourcegeometrydata2d_method_set_obstruction_outlines"></div>

Sets all the obstructed area outlines arrays.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_navigationmeshsourcegeometrydata2d_method_set_projected_obstructions"></div>

`void` **set_projected_obstructions** ( projected_obstructions: [`Array`](class_array.md) )<div id="class_navigationmeshsourcegeometrydata2d_method_set_projected_obstructions"></div>

Sets the projected obstructions with an Array of Dictionaries with the following key value pairs:



```gdscript

    "vertices" : PackedFloat32Array
    "carve" : bool
```





<!-- rst-class:: classref-item-separator -->

---

<div id="_class_navigationmeshsourcegeometrydata2d_method_set_traversable_outlines"></div>

`void` **set_traversable_outlines** ( traversable_outlines: [Array](class_array.md) [`PackedVector2Array`](class_packedvector2array.md) )<div id="class_navigationmeshsourcegeometrydata2d_method_set_traversable_outlines"></div>

Sets all the traversable area outlines arrays.

[^virtual]: 本方法通常需要用户覆盖才能生效。
[^const]: 本方法无副作用，不会修改该实例的任何成员变量。
[^vararg]: 本方法除了能接受在此处描述的参数外，还能够继续接受任意数量的参数。
[^constructor]: 本方法用于构造某个类型。
[^static]: 调用本方法无需实例，可直接使用类名进行调用。
[^operator]: 本方法描述的是使用本类型作为左操作数的有效运算符。
[^bitfield]: 这个值是由下列位标志构成位掩码的整数。
[^void]: 无返回值。
