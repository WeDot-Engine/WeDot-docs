<!-- ⚠ 请勿编辑本文件 ⚠ -->
<!-- 本文档使用脚本从 WeDot 引擎源码仓库生成。 -->
<!-- 生成脚本：https://github.com/WeDot-Engine/WeDot/tree/master/doc/tools/make_md.py； -->
<!-- 原文件：https://github.com/WeDot-Engine/WeDot/tree/master/doc/classes/StaticBody3D.xml。 -->

<div id="_class_staticbody3d"></div>

# StaticBody3D

**继承：** [`PhysicsBody3D`](class_physicsbody3d.md) **<** [`CollisionObject3D`](class_collisionobject3d.md) **<** [`Node3D`](class_node3d.md) **<** [`Node`](class_node.md) **<** [`Object`](class_object.md)

**派生：** [`AnimatableBody3D`](class_animatablebody3d.md)

A 3D physics body that can't be moved by external forces. When moved manually, it doesn't affect other bodies in its path.

## 描述

A static 3D physics body. It can't be moved by external forces or contacts, but can be moved manually by other means such as code, [`AnimationMixer`](class_animationmixer.md) s (with [`AnimationMixer.callback_mode_process`](class_animationmixer.md#class_animationmixer_property_callback_mode_process) set to [`AnimationMixer.ANIMATION_CALLBACK_MODE_PROCESS_PHYSICS`](class_animationmixer.md#class_animationmixer_constant_animation_callback_mode_process_physics)), and [`RemoteTransform3D`](class_remotetransform3d.md).

When **StaticBody3D** is moved, it is teleported to its new position without affecting other physics bodies in its path. If this is not desired, use [`AnimatableBody3D`](class_animatablebody3d.md) instead.

 **StaticBody3D** is useful for completely static objects like floors and walls, as well as moving surfaces like conveyor belts and circular revolving platforms (by using [`constant_linear_velocity`](class_staticbody3d.md#class_staticbody3d_property_constant_linear_velocity) and [`constant_angular_velocity`](class_staticbody3d.md#class_staticbody3d_property_constant_angular_velocity)).

## 属性

|||
|:-:|:--|
| [`Vector3`](class_vector3.md)                 | [`constant_angular_velocity`](class_staticbody3d.md#class_staticbody3d_property_constant_angular_velocity) | ``Vector3(0, 0, 0)`` |
| [`Vector3`](class_vector3.md)                 | [`constant_linear_velocity`](class_staticbody3d.md#class_staticbody3d_property_constant_linear_velocity)   | ``Vector3(0, 0, 0)`` |
| [`PhysicsMaterial`](class_physicsmaterial.md) | [`physics_material_override`](class_staticbody3d.md#class_staticbody3d_property_physics_material_override) |                      |

<!-- rst-class:: classref-section-separator -->

---

## 属性说明

<div id="_class_staticbody3d_property_constant_angular_velocity"></div>

[`Vector3`](class_vector3.md) **constant_angular_velocity** = ``Vector3(0, 0, 0)`` <div id="class_staticbody3d_property_constant_angular_velocity"></div>

- `void` **set_constant_angular_velocity** ( value: [`Vector3`](class_vector3.md) )
- [`Vector3`](class_vector3.md) **get_constant_angular_velocity** ( )

The body's constant angular velocity. This does not rotate the body, but affects touching bodies, as if it were rotating.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_staticbody3d_property_constant_linear_velocity"></div>

[`Vector3`](class_vector3.md) **constant_linear_velocity** = ``Vector3(0, 0, 0)`` <div id="class_staticbody3d_property_constant_linear_velocity"></div>

- `void` **set_constant_linear_velocity** ( value: [`Vector3`](class_vector3.md) )
- [`Vector3`](class_vector3.md) **get_constant_linear_velocity** ( )

The body's constant linear velocity. This does not move the body, but affects touching bodies, as if it were moving.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_staticbody3d_property_physics_material_override"></div>

[`PhysicsMaterial`](class_physicsmaterial.md) **physics_material_override** <div id="class_staticbody3d_property_physics_material_override"></div>

- `void` **set_physics_material_override** ( value: [`PhysicsMaterial`](class_physicsmaterial.md) )
- [`PhysicsMaterial`](class_physicsmaterial.md) **get_physics_material_override** ( )

The physics material override for the body.

If a material is assigned to this property, it will be used instead of any other physics material, such as an inherited one.

[^virtual]: 本方法通常需要用户覆盖才能生效。
[^const]: 本方法无副作用，不会修改该实例的任何成员变量。
[^vararg]: 本方法除了能接受在此处描述的参数外，还能够继续接受任意数量的参数。
[^constructor]: 本方法用于构造某个类型。
[^static]: 调用本方法无需实例，可直接使用类名进行调用。
[^operator]: 本方法描述的是使用本类型作为左操作数的有效运算符。
[^bitfield]: 这个值是由下列位标志构成位掩码的整数。
[^void]: 无返回值。
