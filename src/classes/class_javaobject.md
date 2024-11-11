<!-- ⚠ 请勿编辑本文件 ⚠ -->
<!-- 本文档使用脚本从 WeDot 引擎源码仓库生成。 -->
<!-- 生成脚本：https://github.com/WeDot-Engine/WeDot/tree/master/doc/tools/make_md.py； -->
<!-- 原文件：https://github.com/WeDot-Engine/WeDot/tree/master/doc/classes/JavaObject.xml。 -->

<div id="_class_javaobject"></div>

# JavaObject

**继承：** [`RefCounted`](class_refcounted.md) **<** [`Object`](class_object.md)

Represents an object from the Java Native Interface.

## 描述

Represents an object from the Java Native Interface. It can be returned from Java methods called on [`JavaClass`](class_javaclass.md) or other **JavaObject** s. See [`JavaClassWrapper`](class_javaclasswrapper.md) for an example.

 **Note:** This class only works on Android. On any other platform, this class does nothing.

 **Note:** This class is not to be confused with [`JavaScriptObject`](class_javascriptobject.md).

## 方法

|||
|:-:|:--|
| [`JavaClass`](class_javaclass.md) | [`get_java_class`](class_javaobject.md#class_javaobject_method_get_java_class) ( ) const[^const] |

<!-- rst-class:: classref-section-separator -->

---

## 方法说明

<div id="_class_javaobject_method_get_java_class"></div>

[`JavaClass`](class_javaclass.md) **get_java_class** ( ) const[^const]<div id="class_javaobject_method_get_java_class"></div>

Returns the [`JavaClass`](class_javaclass.md) that this object is an instance of.

[^virtual]: 本方法通常需要用户覆盖才能生效。
[^const]: 本方法无副作用，不会修改该实例的任何成员变量。
[^vararg]: 本方法除了能接受在此处描述的参数外，还能够继续接受任意数量的参数。
[^constructor]: 本方法用于构造某个类型。
[^static]: 调用本方法无需实例，可直接使用类名进行调用。
[^operator]: 本方法描述的是使用本类型作为左操作数的有效运算符。
[^bitfield]: 这个值是由下列位标志构成位掩码的整数。
[^void]: 无返回值。
