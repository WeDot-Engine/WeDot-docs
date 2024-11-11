<!-- ⚠ 请勿编辑本文件 ⚠ -->
<!-- 本文档使用脚本从 WeDot 引擎源码仓库生成。 -->
<!-- 生成脚本：https://github.com/WeDot-Engine/WeDot/tree/master/doc/tools/make_md.py； -->
<!-- 原文件：https://github.com/WeDot-Engine/WeDot/tree/master/modules/gdscript/doc_classes/GDScript.xml。 -->

<div id="_class_gdscript"></div>

# GDScript

**继承：** [`Script`](class_script.md) **<** [`Resource`](class_resource.md) **<** [`RefCounted`](class_refcounted.md) **<** [`Object`](class_object.md)

A script implemented in the GDScript programming language.

## 描述

A script implemented in the GDScript programming language, saved with the `.gd` extension. The script extends the functionality of all objects that instantiate it.

Calling [`new`](class_gdscript.md#class_gdscript_method_new) creates a new instance of the script. [`Object.set_script`](class_object.md#class_object_method_set_script) extends an existing object, if that object's class matches one of the script's base classes.

If you are looking for GDScript's built-in functions, see [`@GDScript`](class_@gdscript.md) instead.

## 方法

|||
|:-:|:--|
| [`Variant`](class_variant.md) | [`new`](class_gdscript.md#class_gdscript_method_new) ( ... ) vararg[^vararg] |

<!-- rst-class:: classref-section-separator -->

---

## 方法说明

<div id="_class_gdscript_method_new"></div>

[`Variant`](class_variant.md) **new** ( ... ) vararg[^vararg]<div id="class_gdscript_method_new"></div>

Returns a new instance of the script.

For example:

```

    var MyClass = load("myclass.gd")
    var instance = MyClass.new()
    assert(instance.get_script() == MyClass)
```



[^virtual]: 本方法通常需要用户覆盖才能生效。
[^const]: 本方法无副作用，不会修改该实例的任何成员变量。
[^vararg]: 本方法除了能接受在此处描述的参数外，还能够继续接受任意数量的参数。
[^constructor]: 本方法用于构造某个类型。
[^static]: 调用本方法无需实例，可直接使用类名进行调用。
[^operator]: 本方法描述的是使用本类型作为左操作数的有效运算符。
[^bitfield]: 这个值是由下列位标志构成位掩码的整数。
[^void]: 无返回值。
