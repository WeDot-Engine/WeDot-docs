<!-- ⚠ 请勿编辑本文件 ⚠ -->
<!-- 本文档使用脚本从 WeDot 引擎源码仓库生成。 -->
<!-- 生成脚本：https://github.com/WeDot-Engine/WeDot/tree/master/doc/tools/make_md.py； -->
<!-- 原文件：https://github.com/WeDot-Engine/WeDot/tree/master/doc/classes/JavaClass.xml。 -->

<div id="_class_javaclass"></div>

# JavaClass

**继承：** [`RefCounted`](class_refcounted.md) **<** [`Object`](class_object.md)

Represents a class from the Java Native Interface.

## 描述

Represents a class from the Java Native Interface. It is returned from [`JavaClassWrapper.wrap`](class_javaclasswrapper.md#class_javaclasswrapper_method_wrap).

 **Note:** This class only works on Android. On any other platform, this class does nothing.

 **Note:** This class is not to be confused with [`JavaScriptObject`](class_javascriptobject.md).

## 方法

|||
|:-:|:--|
| [`String`](class_string.md)                                 | [`get_java_class_name`](class_javaclass.md#class_javaclass_method_get_java_class_name) ( ) const[^const]     |
| [Array](class_array.md) [`Dictionary`](class_dictionary.md) | [`get_java_method_list`](class_javaclass.md#class_javaclass_method_get_java_method_list) ( ) const[^const]   |
| [`JavaClass`](class_javaclass.md)                           | [`get_java_parent_class`](class_javaclass.md#class_javaclass_method_get_java_parent_class) ( ) const[^const] |

<!-- rst-class:: classref-section-separator -->

---

## 方法说明

<div id="_class_javaclass_method_get_java_class_name"></div>

[`String`](class_string.md) **get_java_class_name** ( ) const[^const]<div id="class_javaclass_method_get_java_class_name"></div>

Returns the Java class name.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_javaclass_method_get_java_method_list"></div>

[Array](class_array.md) [`Dictionary`](class_dictionary.md) **get_java_method_list** ( ) const[^const]<div id="class_javaclass_method_get_java_method_list"></div>

Returns the object's Java methods and their signatures as an [`Array`](class_array.md) of dictionaries, in the same format as [`Object.get_method_list`](class_object.md#class_object_method_get_method_list).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_javaclass_method_get_java_parent_class"></div>

[`JavaClass`](class_javaclass.md) **get_java_parent_class** ( ) const[^const]<div id="class_javaclass_method_get_java_parent_class"></div>

Returns a **JavaClass** representing the Java parent class of this class.

[^virtual]: 本方法通常需要用户覆盖才能生效。
[^const]: 本方法无副作用，不会修改该实例的任何成员变量。
[^vararg]: 本方法除了能接受在此处描述的参数外，还能够继续接受任意数量的参数。
[^constructor]: 本方法用于构造某个类型。
[^static]: 调用本方法无需实例，可直接使用类名进行调用。
[^operator]: 本方法描述的是使用本类型作为左操作数的有效运算符。
[^bitfield]: 这个值是由下列位标志构成位掩码的整数。
[^void]: 无返回值。
