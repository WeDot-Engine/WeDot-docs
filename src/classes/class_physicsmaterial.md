<!-- ⚠ 请勿编辑本文件 ⚠ -->
<!-- 本文档使用脚本从 WeDot 引擎源码仓库生成。 -->
<!-- 生成脚本：https://github.com/WeDot-Engine/WeDot/tree/4.3/doc/tools/make_md.py； -->
<!-- 原文件：https://github.com/WeDot-Engine/WeDot/tree/4.3/doc/classes/PhysicsMaterial.xml。 -->

<div id="_class_physicsmaterial"></div>

# PhysicsMaterial

**继承：** [`Resource`](class_resource.md) **<** [`RefCounted`](class_refcounted.md) **<** [`Object`](class_object.md)

Holds physics-related properties of a surface, namely its roughness and bounciness.

## 描述

Holds physics-related properties of a surface, namely its roughness and bounciness. This class is used to apply these properties to a physics body.

## 属性

| [`bool`](class_bool.md)   | [`absorbent`](#class_physicsmaterial_property_absorbent) | ``false`` |
| [`float`](class_float.md) | [`bounce`](#class_physicsmaterial_property_bounce)       | ``0.0``   |
| [`float`](class_float.md) | [`friction`](#class_physicsmaterial_property_friction)   | ``1.0``   |
| [`bool`](class_bool.md)   | [`rough`](#class_physicsmaterial_property_rough)         | ``false`` |

<!-- rst-class:: classref-section-separator -->

---

## 属性说明

<div id="_class_physicsmaterial_property_absorbent"></div>

[`bool`](class_bool.md) **absorbent** = ``false`` <div id="class_physicsmaterial_property_absorbent"></div>

- `void` **set_absorbent** ( value: [`bool`](class_bool.md) )
- [`bool`](class_bool.md) **is_absorbent** ( )

If `true`, subtracts the bounciness from the colliding object's bounciness instead of adding it.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsmaterial_property_bounce"></div>

[`float`](class_float.md) **bounce** = ``0.0`` <div id="class_physicsmaterial_property_bounce"></div>

- `void` **set_bounce** ( value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_bounce** ( )

The body's bounciness. Values range from `0` (no bounce) to `1` (full bounciness).

 **Note:** Even with [`bounce`](#class_physicsmaterial_property_bounce) set to `1.0`, some energy will be lost over time due to linear and angular damping. To have a physics body that preserves all its energy over time, set [`bounce`](#class_physicsmaterial_property_bounce) to `1.0`, the body's linear damp mode to **Replace** (if applicable), its linear damp to `0.0`, its angular damp mode to **Replace** (if applicable), and its angular damp to `0.0`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsmaterial_property_friction"></div>

[`float`](class_float.md) **friction** = ``1.0`` <div id="class_physicsmaterial_property_friction"></div>

- `void` **set_friction** ( value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_friction** ( )

The body's friction. Values range from `0` (frictionless) to `1` (maximum friction).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsmaterial_property_rough"></div>

[`bool`](class_bool.md) **rough** = ``false`` <div id="class_physicsmaterial_property_rough"></div>

- `void` **set_rough** ( value: [`bool`](class_bool.md) )
- [`bool`](class_bool.md) **is_rough** ( )

If `true`, the physics engine will use the friction of the object marked as "rough" when two objects collide. If `false`, the physics engine will use the lowest friction of all colliding objects instead. If `true` for both colliding objects, the physics engine will use the highest friction.

[^virtual]: 本方法通常需要用户覆盖才能生效。
[^const]: 本方法无副作用，不会修改该实例的任何成员变量。
[^vararg]: 本方法除了能接受在此处描述的参数外，还能够继续接受任意数量的参数。
[^constructor]: 本方法用于构造某个类型。
[^static]: 调用本方法无需实例，可直接使用类名进行调用。
[^operator]: 本方法描述的是使用本类型作为左操作数的有效运算符。
[^bitfield]: 这个值是由下列位标志构成位掩码的整数。
[^void]: 无返回值。
