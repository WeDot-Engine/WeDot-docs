<!-- ⚠ 请勿编辑本文件 ⚠ -->
<!-- 本文档使用脚本从 WeDot 引擎源码仓库生成。 -->
<!-- 生成脚本：https://github.com/WeDot-Engine/WeDot/tree/4.3/doc/tools/make_md.py； -->
<!-- 原文件：https://github.com/WeDot-Engine/WeDot/tree/4.3/doc/classes/PackedDataContainerRef.xml。 -->

<div id="_class_packeddatacontainerref"></div>

# PackedDataContainerRef

**继承：** [`RefCounted`](class_refcounted.md) **<** [`Object`](class_object.md)

An internal class used by [`PackedDataContainer`](class_packeddatacontainer.md) to pack nested arrays and dictionaries.

## 描述

When packing nested containers using [`PackedDataContainer`](class_packeddatacontainer.md), they are recursively packed into **PackedDataContainerRef** (only applies to [`Array`](class_array.md) and [`Dictionary`](class_dictionary.md)). Their data can be retrieved the same way as from [`PackedDataContainer`](class_packeddatacontainer.md).

```

    var packed = PackedDataContainer.new()
    packed.pack([1, 2, 3, ["abc", "def"], 4, 5, 6])
    
    for element in packed:
        if element is PackedDataContainerRef:
            for subelement in element:
                print("::", subelement)
        else:
            print(element)
    
    # Prints:
    # 1
    # 2
    # 3
    # ::abc
    # ::def
    # 4
    # 5
    # 6
```



## 方法

|||
|:-:|:--|
| [`int`](class_int.md) | [`size`](class_packeddatacontainerrefmd#class_packeddatacontainerref_method_size) ( ) const[^const] |

<!-- rst-class:: classref-section-separator -->

---

## 方法说明

<div id="_class_packeddatacontainerref_method_size"></div>

[`int`](class_int.md) **size** ( ) const[^const]<div id="class_packeddatacontainerref_method_size"></div>

Returns the size of the packed container (see [`Array.size`](#class_array_method_size) and [`Dictionary.size`](#class_dictionary_method_size)).

[^virtual]: 本方法通常需要用户覆盖才能生效。
[^const]: 本方法无副作用，不会修改该实例的任何成员变量。
[^vararg]: 本方法除了能接受在此处描述的参数外，还能够继续接受任意数量的参数。
[^constructor]: 本方法用于构造某个类型。
[^static]: 调用本方法无需实例，可直接使用类名进行调用。
[^operator]: 本方法描述的是使用本类型作为左操作数的有效运算符。
[^bitfield]: 这个值是由下列位标志构成位掩码的整数。
[^void]: 无返回值。
