<!-- ⚠ 请勿编辑本文件 ⚠ -->
<!-- 本文档使用脚本从 WeDot 引擎源码仓库生成。 -->
<!-- 生成脚本：https://github.com/WeDot-Engine/WeDot/tree/master/doc/tools/make_md.py； -->
<!-- 原文件：https://github.com/WeDot-Engine/WeDot/tree/master/doc/classes/GridContainer.xml。 -->

<div id="_class_gridcontainer"></div>

# GridContainer

**继承：** [`Container`](class_container.md) **<** [`Control`](class_control.md) **<** [`CanvasItem`](class_canvasitem.md) **<** [`Node`](class_node.md) **<** [`Object`](class_object.md)

A container that arranges its child controls in a grid layout.

## 描述

**GridContainer** arranges its child controls in a grid layout. The number of columns is specified by the [`columns`](class_gridcontainer.md#class_gridcontainer_property_columns) property, whereas the number of rows depends on how many are needed for the child controls. The number of rows and columns is preserved for every size of the container.

 **Note:** **GridContainer** only works with child nodes inheriting from [`Control`](class_control.md). It won't rearrange child nodes inheriting from [`Node2D`](class_node2d.md).

## 属性

|||
|:-:|:--|
| [`int`](class_int.md) | [`columns`](class_gridcontainer.md#class_gridcontainer_property_columns) | ``1`` |

## 主题属性

|||
|:-:|:--|
| [`int`](class_int.md) | [`h_separation`](class_gridcontainer.md#class_gridcontainer_theme_constant_h_separation) | ``4`` |
| [`int`](class_int.md) | [`v_separation`](class_gridcontainer.md#class_gridcontainer_theme_constant_v_separation) | ``4`` |

<!-- rst-class:: classref-section-separator -->

---

## 属性说明

<div id="_class_gridcontainer_property_columns"></div>

[`int`](class_int.md) **columns** = ``1`` <div id="class_gridcontainer_property_columns"></div>

- `void` **set_columns** ( value: [`int`](class_int.md) )
- [`int`](class_int.md) **get_columns** ( )

The number of columns in the **GridContainer**. If modified, **GridContainer** reorders its Control-derived children to accommodate the new layout.

<!-- rst-class:: classref-section-separator -->

---

## 主题属性说明

<div id="_class_gridcontainer_theme_constant_h_separation"></div>

[`int`](class_int.md) **h_separation** = ``4`` <div id="class_gridcontainer_theme_constant_h_separation"></div>

The horizontal separation of child nodes.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_gridcontainer_theme_constant_v_separation"></div>

[`int`](class_int.md) **v_separation** = ``4`` <div id="class_gridcontainer_theme_constant_v_separation"></div>

The vertical separation of child nodes.

[^virtual]: 本方法通常需要用户覆盖才能生效。
[^const]: 本方法无副作用，不会修改该实例的任何成员变量。
[^vararg]: 本方法除了能接受在此处描述的参数外，还能够继续接受任意数量的参数。
[^constructor]: 本方法用于构造某个类型。
[^static]: 调用本方法无需实例，可直接使用类名进行调用。
[^operator]: 本方法描述的是使用本类型作为左操作数的有效运算符。
[^bitfield]: 这个值是由下列位标志构成位掩码的整数。
[^void]: 无返回值。
