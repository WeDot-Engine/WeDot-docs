<!-- ⚠ 请勿编辑本文件 ⚠ -->
<!-- 本文档使用脚本从 WeDot 引擎源码仓库生成。 -->
<!-- 生成脚本：https://github.com/WeDot-Engine/WeDot/tree/4.3/doc/tools/make_md.py； -->
<!-- 原文件：https://github.com/WeDot-Engine/WeDot/tree/4.3/doc/classes/NavigationPathQueryResult3D.xml。 -->

<div id="_class_navigationpathqueryresult3d"></div>

# NavigationPathQueryResult3D

**实验性：** This class may be changed or removed in future versions.

**继承：** [`RefCounted`](class_refcounted.md) **<** [`Object`](class_object.md)

Represents the result of a 3D pathfinding query.

## 描述

This class stores the result of a 3D navigation path query from the [`NavigationServer3D`](class_navigationserver3d.md).

## 属性

| [`PackedVector3Array`](class_packedvector3array.md) | [`path`](#class_navigationpathqueryresult3d_property_path)                     | ``PackedVector3Array()`` |
| [`PackedInt64Array`](class_packedint64array.md)     | [`path_owner_ids`](#class_navigationpathqueryresult3d_property_path_owner_ids) | ``PackedInt64Array()``   |
| [Array](class_array.md) [`RID`](class_rid.md)       | [`path_rids`](#class_navigationpathqueryresult3d_property_path_rids)           | ``[]``                   |
| [`PackedInt32Array`](class_packedint32array.md)     | [`path_types`](#class_navigationpathqueryresult3d_property_path_types)         | ``PackedInt32Array()``   |

## 方法

| `void` | [`reset`](#class_navigationpathqueryresult3d_method_reset) ( ) |

<!-- rst-class:: classref-section-separator -->

---

## 枚举

<div id="_class_enum_navigationpathqueryresult3d_pathsegmenttype"></div>

enum **PathSegmentType**: <div id="enum_navigationpathqueryresult3d_pathsegmenttype"></div>

<div id="_class_navigationpathqueryresult3d_constant_path_segment_type_region"></div>

[PathSegmentType](#enum_navigationpathqueryresult3d_pathsegmenttype) **PATH_SEGMENT_TYPE_REGION** = ``0``

This segment of the path goes through a region.

<div id="_class_navigationpathqueryresult3d_constant_path_segment_type_link"></div>

[PathSegmentType](#enum_navigationpathqueryresult3d_pathsegmenttype) **PATH_SEGMENT_TYPE_LINK** = ``1``

This segment of the path goes through a link.

<!-- rst-class:: classref-section-separator -->

---

## 属性说明

<div id="_class_navigationpathqueryresult3d_property_path"></div>

[`PackedVector3Array`](class_packedvector3array.md) **path** = ``PackedVector3Array()`` <div id="class_navigationpathqueryresult3d_property_path"></div>

- `void` **set_path** ( value: [`PackedVector3Array`](class_packedvector3array.md) )
- [`PackedVector3Array`](class_packedvector3array.md) **get_path** ( )

The resulting path array from the navigation query. All path array positions are in global coordinates. Without customized query parameters this is the same path as returned by [`NavigationServer3D.map_get_path`](#class_navigationserver3d_method_map_get_path).

**Note:** The returned array is *copied* and any changes to it will not update the original property value. See [`PackedVector3Array`](class_packedvector3array.md) for more details.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_navigationpathqueryresult3d_property_path_owner_ids"></div>

[`PackedInt64Array`](class_packedint64array.md) **path_owner_ids** = ``PackedInt64Array()`` <div id="class_navigationpathqueryresult3d_property_path_owner_ids"></div>

- `void` **set_path_owner_ids** ( value: [`PackedInt64Array`](class_packedint64array.md) )
- [`PackedInt64Array`](class_packedint64array.md) **get_path_owner_ids** ( )

The `ObjectID` s of the [`Object`](class_object.md) s which manage the regions and links each point of the path goes through.

**Note:** The returned array is *copied* and any changes to it will not update the original property value. See [`PackedInt64Array`](class_packedint64array.md) for more details.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_navigationpathqueryresult3d_property_path_rids"></div>

[Array](class_array.md) [`RID`](class_rid.md) **path_rids** = ``[]`` <div id="class_navigationpathqueryresult3d_property_path_rids"></div>

- `void` **set_path_rids** ( value: [Array](class_array.md) [`RID`](class_rid.md) )
- [Array](class_array.md) [`RID`](class_rid.md) **get_path_rids** ( )

The [`RID`](class_rid.md) s of the regions and links that each point of the path goes through.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_navigationpathqueryresult3d_property_path_types"></div>

[`PackedInt32Array`](class_packedint32array.md) **path_types** = ``PackedInt32Array()`` <div id="class_navigationpathqueryresult3d_property_path_types"></div>

- `void` **set_path_types** ( value: [`PackedInt32Array`](class_packedint32array.md) )
- [`PackedInt32Array`](class_packedint32array.md) **get_path_types** ( )

The type of navigation primitive (region or link) that each point of the path goes through.

**Note:** The returned array is *copied* and any changes to it will not update the original property value. See [`PackedInt32Array`](class_packedint32array.md) for more details.

<!-- rst-class:: classref-section-separator -->

---

## 方法说明

<div id="_class_navigationpathqueryresult3d_method_reset"></div>

`void` **reset** ( )<div id="class_navigationpathqueryresult3d_method_reset"></div>

Reset the result object to its initial state. This is useful to reuse the object across multiple queries.

[^virtual]: 本方法通常需要用户覆盖才能生效。
[^const]: 本方法无副作用，不会修改该实例的任何成员变量。
[^vararg]: 本方法除了能接受在此处描述的参数外，还能够继续接受任意数量的参数。
[^constructor]: 本方法用于构造某个类型。
[^static]: 调用本方法无需实例，可直接使用类名进行调用。
[^operator]: 本方法描述的是使用本类型作为左操作数的有效运算符。
[^bitfield]: 这个值是由下列位标志构成位掩码的整数。
[^void]: 无返回值。
