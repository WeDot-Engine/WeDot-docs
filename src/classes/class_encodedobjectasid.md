<!-- ⚠ 请勿编辑本文件 ⚠ -->
<!-- 本文档使用脚本从 WeDot 引擎源码仓库生成。 -->
<!-- 生成脚本：https://github.com/WeDot-Engine/WeDot/tree/master/doc/tools/make_md.py； -->
<!-- 原文件：https://github.com/WeDot-Engine/WeDot/tree/master/doc/classes/EncodedObjectAsID.xml。 -->

<div id="_class_encodedobjectasid"></div>

# EncodedObjectAsID

**继承：** [`RefCounted`](class_refcounted.md) **<** [`Object`](class_object.md)

Holds a reference to an [`Object`](class_object.md)'s instance ID.

## 描述

Utility class which holds a reference to the internal identifier of an [`Object`](class_object.md) instance, as given by [`Object.get_instance_id`](class_object.md#class_object_method_get_instance_id). This ID can then be used to retrieve the object instance with [`@GlobalScope.instance_from_id`](class_@globalscope.md#class_@globalscope_method_instance_from_id).

This class is used internally by the editor inspector and script debugger, but can also be used in plugins to pass and display objects as their IDs.

## 属性

|||
|:-:|:--|
| [`int`](class_int.md) | [`object_id`](class_encodedobjectasid.md#class_encodedobjectasid_property_object_id) | ``0`` |

<!-- rst-class:: classref-section-separator -->

---

## 属性说明

<div id="_class_encodedobjectasid_property_object_id"></div>

[`int`](class_int.md) **object_id** = ``0`` <div id="class_encodedobjectasid_property_object_id"></div>

- `void` **set_object_id** ( value: [`int`](class_int.md) )
- [`int`](class_int.md) **get_object_id** ( )

The [`Object`](class_object.md) identifier stored in this **EncodedObjectAsID** instance. The object instance can be retrieved with [`@GlobalScope.instance_from_id`](class_@globalscope.md#class_@globalscope_method_instance_from_id).

[^virtual]: 本方法通常需要用户覆盖才能生效。
[^const]: 本方法无副作用，不会修改该实例的任何成员变量。
[^vararg]: 本方法除了能接受在此处描述的参数外，还能够继续接受任意数量的参数。
[^constructor]: 本方法用于构造某个类型。
[^static]: 调用本方法无需实例，可直接使用类名进行调用。
[^operator]: 本方法描述的是使用本类型作为左操作数的有效运算符。
[^bitfield]: 这个值是由下列位标志构成位掩码的整数。
[^void]: 无返回值。
