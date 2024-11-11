<!-- ⚠ 请勿编辑本文件 ⚠ -->
<!-- 本文档使用脚本从 WeDot 引擎源码仓库生成。 -->
<!-- 生成脚本：https://github.com/WeDot-Engine/WeDot/tree/master/doc/tools/make_md.py； -->
<!-- 原文件：https://github.com/WeDot-Engine/WeDot/tree/master/doc/classes/RDUniform.xml。 -->

<div id="_class_rduniform"></div>

# RDUniform

**继承：** [`RefCounted`](class_refcounted.md) **<** [`Object`](class_object.md)

Shader uniform (used by [`RenderingDevice`](class_renderingdevice.md)).

## 描述

This object is used by [`RenderingDevice`](class_renderingdevice.md).

## 属性

|||
|:-:|:--|
| [`int`](class_int.md)                            | [`binding`](class_rduniform.md#class_rduniform_property_binding)           | ``0`` |
| [UniformType](#enum_renderingdevice_uniformtype) | [`uniform_type`](class_rduniform.md#class_rduniform_property_uniform_type) | ``3`` |

## 方法

|||
|:-:|:--|
| `void`                                        | [`add_id`](class_rduniform.md#class_rduniform_method_add_id) ( id: [`RID`](class_rid.md) ) |
| `void`                                        | [`clear_ids`](class_rduniform.md#class_rduniform_method_clear_ids) ( )                     |
| [Array](class_array.md) [`RID`](class_rid.md) | [`get_ids`](class_rduniform.md#class_rduniform_method_get_ids) ( ) const[^const]           |

<!-- rst-class:: classref-section-separator -->

---

## 属性说明

<div id="_class_rduniform_property_binding"></div>

[`int`](class_int.md) **binding** = ``0`` <div id="class_rduniform_property_binding"></div>

- `void` **set_binding** ( value: [`int`](class_int.md) )
- [`int`](class_int.md) **get_binding** ( )

The uniform's binding.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_rduniform_property_uniform_type"></div>

[UniformType](#enum_renderingdevice_uniformtype) **uniform_type** = ``3`` <div id="class_rduniform_property_uniform_type"></div>

- `void` **set_uniform_type** ( value: [UniformType](#enum_renderingdevice_uniformtype) )
- [UniformType](#enum_renderingdevice_uniformtype) **get_uniform_type** ( )

The uniform's data type.

<!-- rst-class:: classref-section-separator -->

---

## 方法说明

<div id="_class_rduniform_method_add_id"></div>

`void` **add_id** ( id: [`RID`](class_rid.md) )<div id="class_rduniform_method_add_id"></div>

Binds the given id to the uniform. The data associated with the id is then used when the uniform is passed to a shader.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_rduniform_method_clear_ids"></div>

`void` **clear_ids** ( )<div id="class_rduniform_method_clear_ids"></div>

Unbinds all ids currently bound to the uniform.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_rduniform_method_get_ids"></div>

[Array](class_array.md) [`RID`](class_rid.md) **get_ids** ( ) const[^const]<div id="class_rduniform_method_get_ids"></div>

Returns an array of all ids currently bound to the uniform.

[^virtual]: 本方法通常需要用户覆盖才能生效。
[^const]: 本方法无副作用，不会修改该实例的任何成员变量。
[^vararg]: 本方法除了能接受在此处描述的参数外，还能够继续接受任意数量的参数。
[^constructor]: 本方法用于构造某个类型。
[^static]: 调用本方法无需实例，可直接使用类名进行调用。
[^operator]: 本方法描述的是使用本类型作为左操作数的有效运算符。
[^bitfield]: 这个值是由下列位标志构成位掩码的整数。
[^void]: 无返回值。
