<!-- ⚠ 请勿编辑本文件 ⚠ -->
<!-- 本文档使用脚本从 WeDot 引擎源码仓库生成。 -->
<!-- 生成脚本：https://github.com/WeDot-Engine/WeDot/tree/master/doc/tools/make_md.py； -->
<!-- 原文件：https://github.com/WeDot-Engine/WeDot/tree/master/doc/classes/VisualShaderNodeColorFunc.xml。 -->

<div id="_class_visualshadernodecolorfunc"></div>

# VisualShaderNodeColorFunc

**继承：** [`VisualShaderNode`](class_visualshadernode.md) **<** [`Resource`](class_resource.md) **<** [`RefCounted`](class_refcounted.md) **<** [`Object`](class_object.md)

A [`Color`](class_color.md) function to be used within the visual shader graph.

## 描述

Accept a [`Color`](class_color.md) to the input port and transform it according to [`function`](class_visualshadernodecolorfunc.md#class_visualshadernodecolorfunc_property_function).

## 属性

|||
|:-:|:--|
| [Function](#enum_visualshadernodecolorfunc_function) | [`function`](class_visualshadernodecolorfunc.md#class_visualshadernodecolorfunc_property_function) | ``0`` |

<!-- rst-class:: classref-section-separator -->

---

## 枚举

<div id="_class_enum_visualshadernodecolorfunc_function"></div>

enum **Function**: <div id="enum_visualshadernodecolorfunc_function"></div>

<div id="_class_visualshadernodecolorfunc_constant_func_grayscale"></div>

[Function](#enum_visualshadernodecolorfunc_function) **FUNC_GRAYSCALE** = ``0``

Converts the color to grayscale using the following formula:

```

    vec3 c = input;
    float max1 = max(c.r, c.g);
    float max2 = max(max1, c.b);
    float max3 = max(max1, max2);
    return vec3(max3, max3, max3);
```



<div id="_class_visualshadernodecolorfunc_constant_func_hsv2rgb"></div>

[Function](#enum_visualshadernodecolorfunc_function) **FUNC_HSV2RGB** = ``1``

Converts HSV vector to RGB equivalent.

<div id="_class_visualshadernodecolorfunc_constant_func_rgb2hsv"></div>

[Function](#enum_visualshadernodecolorfunc_function) **FUNC_RGB2HSV** = ``2``

Converts RGB vector to HSV equivalent.

<div id="_class_visualshadernodecolorfunc_constant_func_sepia"></div>

[Function](#enum_visualshadernodecolorfunc_function) **FUNC_SEPIA** = ``3``

Applies sepia tone effect using the following formula:

```

    vec3 c = input;
    float r = (c.r * 0.393) + (c.g * 0.769) + (c.b * 0.189);
    float g = (c.r * 0.349) + (c.g * 0.686) + (c.b * 0.168);
    float b = (c.r * 0.272) + (c.g * 0.534) + (c.b * 0.131);
    return vec3(r, g, b);
```



<div id="_class_visualshadernodecolorfunc_constant_func_max"></div>

[Function](#enum_visualshadernodecolorfunc_function) **FUNC_MAX** = ``4``

Represents the size of the [Function](#enum_visualshadernodecolorfunc_function) enum.

<!-- rst-class:: classref-section-separator -->

---

## 属性说明

<div id="_class_visualshadernodecolorfunc_property_function"></div>

[Function](#enum_visualshadernodecolorfunc_function) **function** = ``0`` <div id="class_visualshadernodecolorfunc_property_function"></div>

- `void` **set_function** ( value: [Function](#enum_visualshadernodecolorfunc_function) )
- [Function](#enum_visualshadernodecolorfunc_function) **get_function** ( )

A function to be applied to the input color. See [Function](#enum_visualshadernodecolorfunc_function) for options.

[^virtual]: 本方法通常需要用户覆盖才能生效。
[^const]: 本方法无副作用，不会修改该实例的任何成员变量。
[^vararg]: 本方法除了能接受在此处描述的参数外，还能够继续接受任意数量的参数。
[^constructor]: 本方法用于构造某个类型。
[^static]: 调用本方法无需实例，可直接使用类名进行调用。
[^operator]: 本方法描述的是使用本类型作为左操作数的有效运算符。
[^bitfield]: 这个值是由下列位标志构成位掩码的整数。
[^void]: 无返回值。
