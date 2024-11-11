<!-- ⚠ 请勿编辑本文件 ⚠ -->
<!-- 本文档使用脚本从 WeDot 引擎源码仓库生成。 -->
<!-- 生成脚本：https://github.com/WeDot-Engine/WeDot/tree/master/doc/tools/make_md.py； -->
<!-- 原文件：https://github.com/WeDot-Engine/WeDot/tree/master/doc/classes/PackedDataContainer.xml。 -->

<div id="_class_packeddatacontainer"></div>

# PackedDataContainer

**继承：** [`Resource`](class_resource.md) **<** [`RefCounted`](class_refcounted.md) **<** [`Object`](class_object.md)

Efficiently packs and serializes [`Array`](class_array.md) or [`Dictionary`](class_dictionary.md).

## 描述

**PackedDataContainer** can be used to efficiently store data from untyped containers. The data is packed into raw bytes and can be saved to file. Only [`Array`](class_array.md) and [`Dictionary`](class_dictionary.md) can be stored this way.

You can retrieve the data by iterating on the container, which will work as if iterating on the packed data itself. If the packed container is a [`Dictionary`](class_dictionary.md), the data can be retrieved by key names ([`String`](class_string.md)/[`StringName`](class_stringname.md) only).

```

    var data = { "key": "value", "another_key": 123, "lock": Vector2() }
    var packed = PackedDataContainer.new()
    packed.pack(data)
    ResourceSaver.save(packed, "packed_data.res")
```

```

    var container = load("packed_data.res")
    for key in container:
        prints(key, container[key])
    
    # Prints:
    # key value
    # lock (0, 0)
    # another_key 123
```

Nested containers will be packed recursively. While iterating, they will be returned as [`PackedDataContainerRef`](class_packeddatacontainerref.md).





## 方法

|||
|:-:|:--|
| [Error](#enum_@globalscope_error) | [`pack`](class_packeddatacontainer.md#class_packeddatacontainer_method_pack) ( value: [`Variant`](class_variant.md) ) |
| [`int`](class_int.md)             | [`size`](class_packeddatacontainer.md#class_packeddatacontainer_method_size) ( ) const[^const]                        |

<!-- rst-class:: classref-section-separator -->

---

## 方法说明

<div id="_class_packeddatacontainer_method_pack"></div>

[Error](#enum_@globalscope_error) **pack** ( value: [`Variant`](class_variant.md) )<div id="class_packeddatacontainer_method_pack"></div>

Packs the given container into a binary representation. The `value` must be either [`Array`](class_array.md) or [`Dictionary`](class_dictionary.md), any other type will result in invalid data error.

 **Note:** Subsequent calls to this method will overwrite the existing data.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_packeddatacontainer_method_size"></div>

[`int`](class_int.md) **size** ( ) const[^const]<div id="class_packeddatacontainer_method_size"></div>

Returns the size of the packed container (see [`Array.size`](class_array.md#class_array_method_size) and [`Dictionary.size`](class_dictionary.md#class_dictionary_method_size)).

[^virtual]: 本方法通常需要用户覆盖才能生效。
[^const]: 本方法无副作用，不会修改该实例的任何成员变量。
[^vararg]: 本方法除了能接受在此处描述的参数外，还能够继续接受任意数量的参数。
[^constructor]: 本方法用于构造某个类型。
[^static]: 调用本方法无需实例，可直接使用类名进行调用。
[^operator]: 本方法描述的是使用本类型作为左操作数的有效运算符。
[^bitfield]: 这个值是由下列位标志构成位掩码的整数。
[^void]: 无返回值。
