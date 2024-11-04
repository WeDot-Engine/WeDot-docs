<!-- ⚠ 请勿编辑本文件 ⚠ -->
<!-- 本文档使用脚本从 WeDot 引擎源码仓库生成。 -->
<!-- 生成脚本：https://github.com/WeDot-Engine/WeDot/tree/4.3/doc/tools/make_md.py； -->
<!-- 原文件：https://github.com/WeDot-Engine/WeDot/tree/4.3/doc/classes/JavaScriptObject.xml。 -->

<div id="_class_javascriptobject"></div>

# JavaScriptObject

**继承：** [`RefCounted`](class_refcounted.md) **<** [`Object`](class_object.md)

A wrapper class for web native JavaScript objects.

## 描述

JavaScriptObject is used to interact with JavaScript objects retrieved or created via [`JavaScriptBridge.get_interface`](#class_javascriptbridge_method_get_interface), [`JavaScriptBridge.create_object`](#class_javascriptbridge_method_create_object), or [`JavaScriptBridge.create_callback`](#class_javascriptbridge_method_create_callback).

 **Example:** 

```

    extends Node
    
    var _my_js_callback = JavaScriptBridge.create_callback(myCallback) # This reference must be kept
    var console = JavaScriptBridge.get_interface("console")
    
    func _init():
        var buf = JavaScriptBridge.create_object("ArrayBuffer", 10) # new ArrayBuffer(10)
        print(buf) # prints [JavaScriptObject:OBJECT_ID]
        var uint8arr = JavaScriptBridge.create_object("Uint8Array", buf) # new Uint8Array(buf)
        uint8arr[1] = 255
        prints(uint8arr[1], uint8arr.byteLength) # prints 255 10
        console.log(uint8arr) # prints in browser console "Uint8Array(10) [ 0, 255, 0, 0, 0, 0, 0, 0, 0, 0 ]"
    
        # Equivalent of JavaScriptBridge: Array.from(uint8arr).forEach(myCallback)
        JavaScriptBridge.get_interface("Array").from(uint8arr).forEach(_my_js_callback)
    
    func myCallback(args):
        # Will be called with the parameters passed to the "forEach" callback
        # [0, 0, [JavaScriptObject:1173]]
        # [255, 1, [JavaScriptObject:1173]]
        # ...
        # [0, 9, [JavaScriptObject:1180]]
        print(args)
```

 **Note:** Only available in the Web platform.



[^virtual]: 本方法通常需要用户覆盖才能生效。
[^const]: 本方法无副作用，不会修改该实例的任何成员变量。
[^vararg]: 本方法除了能接受在此处描述的参数外，还能够继续接受任意数量的参数。
[^constructor]: 本方法用于构造某个类型。
[^static]: 调用本方法无需实例，可直接使用类名进行调用。
[^operator]: 本方法描述的是使用本类型作为左操作数的有效运算符。
[^bitfield]: 这个值是由下列位标志构成位掩码的整数。
[^void]: 无返回值。
