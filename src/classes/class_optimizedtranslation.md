<!-- ⚠ 请勿编辑本文件 ⚠ -->
<!-- 本文档使用脚本从 WeDot 引擎源码仓库生成。 -->
<!-- 生成脚本：https://github.com/WeDot-Engine/WeDot/tree/master/doc/tools/make_md.py； -->
<!-- 原文件：https://github.com/WeDot-Engine/WeDot/tree/master/doc/classes/OptimizedTranslation.xml。 -->

<div id="_class_optimizedtranslation"></div>

# OptimizedTranslation

**继承：** [`Translation`](class_translation.md) **<** [`Resource`](class_resource.md) **<** [`RefCounted`](class_refcounted.md) **<** [`Object`](class_object.md)

An optimized translation, used by default for CSV Translations.

## 描述

An optimized translation, used by default for CSV Translations. Uses real-time compressed translations, which results in very small dictionaries.

## 方法

|||
|:-:|:--|
| `void` | [`generate`](class_optimizedtranslation.md#class_optimizedtranslation_method_generate) ( from: [`Translation`](class_translation.md) ) |

<!-- rst-class:: classref-section-separator -->

---

## 方法说明

<div id="_class_optimizedtranslation_method_generate"></div>

`void` **generate** ( from: [`Translation`](class_translation.md) )<div id="class_optimizedtranslation_method_generate"></div>

Generates and sets an optimized translation from the given [`Translation`](class_translation.md) resource.

 **Note:** This method is intended to be used in the editor. It does nothing when called from an exported project.

[^virtual]: 本方法通常需要用户覆盖才能生效。
[^const]: 本方法无副作用，不会修改该实例的任何成员变量。
[^vararg]: 本方法除了能接受在此处描述的参数外，还能够继续接受任意数量的参数。
[^constructor]: 本方法用于构造某个类型。
[^static]: 调用本方法无需实例，可直接使用类名进行调用。
[^operator]: 本方法描述的是使用本类型作为左操作数的有效运算符。
[^bitfield]: 这个值是由下列位标志构成位掩码的整数。
[^void]: 无返回值。
