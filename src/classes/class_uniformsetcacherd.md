<!-- ⚠ 请勿编辑本文件 ⚠ -->
<!-- 本文档使用脚本从 WeDot 引擎源码仓库生成。 -->
<!-- 生成脚本：https://github.com/WeDot-Engine/WeDot/tree/master/doc/tools/make_md.py； -->
<!-- 原文件：https://github.com/WeDot-Engine/WeDot/tree/master/doc/classes/UniformSetCacheRD.xml。 -->

<div id="_class_uniformsetcacherd"></div>

# UniformSetCacheRD

**继承：** [`Object`](class_object.md)

Uniform set cache manager for Rendering Device based renderers.

## 描述

Uniform set cache manager for Rendering Device based renderers. Provides a way to create a uniform set and reuse it in subsequent calls for as long as the uniform set exists. Uniform set will automatically be cleaned up when dependent objects are freed.

## 方法

|||
|:-:|:--|
| [`RID`](class_rid.md) | [`get_cache`](class_uniformsetcacherd.md#class_uniformsetcacherd_method_get_cache) ( shader: [`RID`](class_rid.md), set: [`int`](class_int.md), uniforms: [Array](class_array.md) [`RDUniform`](class_rduniform.md) ) static[^static] |

<!-- rst-class:: classref-section-separator -->

---

## 方法说明

<div id="_class_uniformsetcacherd_method_get_cache"></div>

[`RID`](class_rid.md) **get_cache** ( shader: [`RID`](class_rid.md), set: [`int`](class_int.md), uniforms: [Array](class_array.md) [`RDUniform`](class_rduniform.md) ) static[^static]<div id="class_uniformsetcacherd_method_get_cache"></div>

Creates/returns a cached uniform set based on the provided uniforms for a given shader.

[^virtual]: 本方法通常需要用户覆盖才能生效。
[^const]: 本方法无副作用，不会修改该实例的任何成员变量。
[^vararg]: 本方法除了能接受在此处描述的参数外，还能够继续接受任意数量的参数。
[^constructor]: 本方法用于构造某个类型。
[^static]: 调用本方法无需实例，可直接使用类名进行调用。
[^operator]: 本方法描述的是使用本类型作为左操作数的有效运算符。
[^bitfield]: 这个值是由下列位标志构成位掩码的整数。
[^void]: 无返回值。
