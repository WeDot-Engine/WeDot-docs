<!-- ⚠ 请勿编辑本文件 ⚠ -->
<!-- 本文档使用脚本从 WeDot 引擎源码仓库生成。 -->
<!-- 生成脚本：https://github.com/WeDot-Engine/WeDot/tree/4.3/doc/tools/make_md.py； -->
<!-- 原文件：https://github.com/WeDot-Engine/WeDot/tree/4.3/doc/classes/RichTextEffect.xml。 -->

<div id="_class_richtexteffect"></div>

# RichTextEffect

**继承：** [`Resource`](class_resource.md) **<** [`RefCounted`](class_refcounted.md) **<** [`Object`](class_object.md)

A custom effect for a [`RichTextLabel`](class_richtextlabel.md).

## 描述

A custom effect for a [`RichTextLabel`](class_richtextlabel.md), which can be loaded in the [`RichTextLabel`](class_richtextlabel.md) inspector or using [`RichTextLabel.install_effect`](#class_richtextlabel_method_install_effect).

 **Note:** For a **RichTextEffect** to be usable, a BBCode tag must be defined as a member variable called `bbcode` in the script.



```gdscript

    # The RichTextEffect will be usable like this: `[example]Some text[/example]`
    var bbcode = "example"
```

```csharp

    // The RichTextEffect will be usable like this: `[example]Some text[/example]`
    string bbcode = "example";
```



 **Note:** As soon as a [`RichTextLabel`](class_richtextlabel.md) contains at least one **RichTextEffect**, it will continuously process the effect unless the project is paused. This may impact battery life negatively.





## 方法

|||
|:-:|:--|
| [`bool`](class_bool.md) | [`_process_custom_fx`](class_richtexteffectmd#class_richtexteffect_private_method__process_custom_fx) ( char_fx: [`CharFXTransform`](class_charfxtransform.md) ) virtual[^virtual] const[^const] |

<!-- rst-class:: classref-section-separator -->

---

## 方法说明

<div id="_class_richtexteffect_private_method__process_custom_fx"></div>

[`bool`](class_bool.md) **_process_custom_fx** ( char_fx: [`CharFXTransform`](class_charfxtransform.md) ) virtual[^virtual] const[^const]<div id="class_richtexteffect_private_method__process_custom_fx"></div>

Override this method to modify properties in `char_fx`. The method must return `true` if the character could be transformed successfully. If the method returns `false`, it will skip transformation to avoid displaying broken text.

[^virtual]: 本方法通常需要用户覆盖才能生效。
[^const]: 本方法无副作用，不会修改该实例的任何成员变量。
[^vararg]: 本方法除了能接受在此处描述的参数外，还能够继续接受任意数量的参数。
[^constructor]: 本方法用于构造某个类型。
[^static]: 调用本方法无需实例，可直接使用类名进行调用。
[^operator]: 本方法描述的是使用本类型作为左操作数的有效运算符。
[^bitfield]: 这个值是由下列位标志构成位掩码的整数。
[^void]: 无返回值。
