<!-- ⚠ 请勿编辑本文件 ⚠ -->
<!-- 本文档使用脚本从 WeDot 引擎源码仓库生成。 -->
<!-- 生成脚本：https://github.com/WeDot-Engine/WeDot/tree/master/doc/tools/make_md.py； -->
<!-- 原文件：https://github.com/WeDot-Engine/WeDot/tree/master/doc/classes/JavaClassWrapper.xml。 -->

<div id="_class_javaclasswrapper"></div>

# JavaClassWrapper

**继承：** [`Object`](class_object.md)

Provides access to the Java Native Interface.

## 描述

The JavaClassWrapper singleton provides a way for the Godot application to send and receive data through the [*Java Native Interface*](https://developer.android.com/training/articles/perf-jni) (JNI).

 **Note:** This singleton is only available in Android builds.

```

    var LocalDateTime = JavaClassWrapper.wrap("java.time.LocalDateTime")
    var DateTimeFormatter = JavaClassWrapper.wrap("java.time.format.DateTimeFormatter")
    
    var datetime = LocalDateTime.now()
    var formatter = DateTimeFormatter.ofPattern("dd-MM-yyyy HH:mm:ss")
    
    print(datetime.format(formatter))
```



## 方法

|||
|:-:|:--|
| [`JavaClass`](class_javaclass.md) | [`wrap`](class_javaclasswrapper.md#class_javaclasswrapper_method_wrap) ( name: [`String`](class_string.md) ) |

<!-- rst-class:: classref-section-separator -->

---

## 方法说明

<div id="_class_javaclasswrapper_method_wrap"></div>

[`JavaClass`](class_javaclass.md) **wrap** ( name: [`String`](class_string.md) )<div id="class_javaclasswrapper_method_wrap"></div>

Wraps a class defined in Java, and returns it as a [`JavaClass`](class_javaclass.md) [`Object`](class_object.md) type that Godot can interact with.

 **Note:** This method only works on Android. On every other platform, this method does nothing and returns an empty [`JavaClass`](class_javaclass.md).

[^virtual]: 本方法通常需要用户覆盖才能生效。
[^const]: 本方法无副作用，不会修改该实例的任何成员变量。
[^vararg]: 本方法除了能接受在此处描述的参数外，还能够继续接受任意数量的参数。
[^constructor]: 本方法用于构造某个类型。
[^static]: 调用本方法无需实例，可直接使用类名进行调用。
[^operator]: 本方法描述的是使用本类型作为左操作数的有效运算符。
[^bitfield]: 这个值是由下列位标志构成位掩码的整数。
[^void]: 无返回值。
