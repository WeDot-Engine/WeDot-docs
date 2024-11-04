<!-- ⚠ 请勿编辑本文件 ⚠ -->
<!-- 本文档使用脚本从 WeDot 引擎源码仓库生成。 -->
<!-- 生成脚本：https://github.com/WeDot-Engine/WeDot/tree/4.3/doc/tools/make_md.py； -->
<!-- 原文件：https://github.com/WeDot-Engine/WeDot/tree/4.3/doc/classes/VisualShaderNodeColorOp.xml。 -->

<div id="_class_visualshadernodecolorop"></div>

# VisualShaderNodeColorOp

**继承：** [`VisualShaderNode`](class_visualshadernode.md) **<** [`Resource`](class_resource.md) **<** [`RefCounted`](class_refcounted.md) **<** [`Object`](class_object.md)

A [`Color`](class_color.md) operator to be used within the visual shader graph.

## 描述

Applies [`operator`](#class_visualshadernodecolorop_property_operator) to two color inputs.

## 属性

| [Operator](#enum_visualshadernodecolorop_operator) | [`operator`](#class_visualshadernodecolorop_property_operator) | ``0`` |

<!-- rst-class:: classref-section-separator -->

---

## 枚举

<div id="_class_enum_visualshadernodecolorop_operator"></div>

enum **Operator**: <div id="enum_visualshadernodecolorop_operator"></div>

<div id="_class_visualshadernodecolorop_constant_op_screen"></div>

[Operator](#enum_visualshadernodecolorop_operator) **OP_SCREEN** = ``0``

Produce a screen effect with the following formula:

```

    result = vec3(1.0) - (vec3(1.0) - a) * (vec3(1.0) - b);
```



<div id="_class_visualshadernodecolorop_constant_op_difference"></div>

[Operator](#enum_visualshadernodecolorop_operator) **OP_DIFFERENCE** = ``1``

Produce a difference effect with the following formula:

```

    result = abs(a - b);
```



<div id="_class_visualshadernodecolorop_constant_op_darken"></div>

[Operator](#enum_visualshadernodecolorop_operator) **OP_DARKEN** = ``2``

Produce a darken effect with the following formula:

```

    result = min(a, b);
```



<div id="_class_visualshadernodecolorop_constant_op_lighten"></div>

[Operator](#enum_visualshadernodecolorop_operator) **OP_LIGHTEN** = ``3``

Produce a lighten effect with the following formula:

```

    result = max(a, b);
```



<div id="_class_visualshadernodecolorop_constant_op_overlay"></div>

[Operator](#enum_visualshadernodecolorop_operator) **OP_OVERLAY** = ``4``

Produce an overlay effect with the following formula:

```

    for (int i = 0; i < 3; i++) {
        float base = a[i];
        float blend = b[i];
        if (base < 0.5) {
            result[i] = 2.0 * base * blend;
        } else {
            result[i] = 1.0 - 2.0 * (1.0 - blend) * (1.0 - base);
        }
    }
```



<div id="_class_visualshadernodecolorop_constant_op_dodge"></div>

[Operator](#enum_visualshadernodecolorop_operator) **OP_DODGE** = ``5``

Produce a dodge effect with the following formula:

```

    result = a / (vec3(1.0) - b);
```



<div id="_class_visualshadernodecolorop_constant_op_burn"></div>

[Operator](#enum_visualshadernodecolorop_operator) **OP_BURN** = ``6``

Produce a burn effect with the following formula:

```

    result = vec3(1.0) - (vec3(1.0) - a) / b;
```



<div id="_class_visualshadernodecolorop_constant_op_soft_light"></div>

[Operator](#enum_visualshadernodecolorop_operator) **OP_SOFT_LIGHT** = ``7``

Produce a soft light effect with the following formula:

```

    for (int i = 0; i < 3; i++) {
        float base = a[i];
        float blend = b[i];
        if (base < 0.5) {
            result[i] = base * (blend + 0.5);
        } else {
            result[i] = 1.0 - (1.0 - base) * (1.0 - (blend - 0.5));
        }
    }
```



<div id="_class_visualshadernodecolorop_constant_op_hard_light"></div>

[Operator](#enum_visualshadernodecolorop_operator) **OP_HARD_LIGHT** = ``8``

Produce a hard light effect with the following formula:

```

    for (int i = 0; i < 3; i++) {
        float base = a[i];
        float blend = b[i];
        if (base < 0.5) {
            result[i] = base * (2.0 * blend);
        } else {
            result[i] = 1.0 - (1.0 - base) * (1.0 - 2.0 * (blend - 0.5));
        }
    }
```



<div id="_class_visualshadernodecolorop_constant_op_max"></div>

[Operator](#enum_visualshadernodecolorop_operator) **OP_MAX** = ``9``

Represents the size of the [Operator](#enum_visualshadernodecolorop_operator) enum.

<!-- rst-class:: classref-section-separator -->

---

## 属性说明

<div id="_class_visualshadernodecolorop_property_operator"></div>

[Operator](#enum_visualshadernodecolorop_operator) **operator** = ``0`` <div id="class_visualshadernodecolorop_property_operator"></div>

- `void` **set_operator** ( value: [Operator](#enum_visualshadernodecolorop_operator) )
- [Operator](#enum_visualshadernodecolorop_operator) **get_operator** ( )

An operator to be applied to the inputs. See [Operator](#enum_visualshadernodecolorop_operator) for options.

[^virtual]: 本方法通常需要用户覆盖才能生效。
[^const]: 本方法无副作用，不会修改该实例的任何成员变量。
[^vararg]: 本方法除了能接受在此处描述的参数外，还能够继续接受任意数量的参数。
[^constructor]: 本方法用于构造某个类型。
[^static]: 调用本方法无需实例，可直接使用类名进行调用。
[^operator]: 本方法描述的是使用本类型作为左操作数的有效运算符。
[^bitfield]: 这个值是由下列位标志构成位掩码的整数。
[^void]: 无返回值。
