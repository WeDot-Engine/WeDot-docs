<!-- ⚠ 请勿编辑本文件 ⚠ -->
<!-- 本文档使用脚本从 WeDot 引擎源码仓库生成。 -->
<!-- 生成脚本：https://github.com/WeDot-Engine/WeDot/tree/master/doc/tools/make_md.py； -->
<!-- 原文件：https://github.com/WeDot-Engine/WeDot/tree/master/doc/classes/AnimatableBody2D.xml。 -->

<div id="_class_animatablebody2d"></div>

# AnimatableBody2D

**继承：** [`StaticBody2D`](class_staticbody2d.md) **<** [`PhysicsBody2D`](class_physicsbody2d.md) **<** [`CollisionObject2D`](class_collisionobject2d.md) **<** [`Node2D`](class_node2d.md) **<** [`CanvasItem`](class_canvasitem.md) **<** [`Node`](class_node.md) **<** [`Object`](class_object.md)

A 2D physics body that can't be moved by external forces. When moved manually, it affects other bodies in its path.

## 描述

An animatable 2D physics body. It can't be moved by external forces or contacts, but can be moved manually by other means such as code, [`AnimationMixer`](class_animationmixer.md) s (with [`AnimationMixer.callback_mode_process`](class_animationmixer.md#class_animationmixer_property_callback_mode_process) set to [`AnimationMixer.ANIMATION_CALLBACK_MODE_PROCESS_PHYSICS`](class_animationmixer.md#class_animationmixer_constant_animation_callback_mode_process_physics)), and [`RemoteTransform2D`](class_remotetransform2d.md).

When **AnimatableBody2D** is moved, its linear and angular velocity are estimated and used to affect other physics bodies in its path. This makes it useful for moving platforms, doors, and other moving objects.

## 属性

|||
|:-:|:--|
| [`bool`](class_bool.md) | [`sync_to_physics`](class_animatablebody2d.md#class_animatablebody2d_property_sync_to_physics) | ``true`` |

<!-- rst-class:: classref-section-separator -->

---

## 属性说明

<div id="_class_animatablebody2d_property_sync_to_physics"></div>

[`bool`](class_bool.md) **sync_to_physics** = ``true`` <div id="class_animatablebody2d_property_sync_to_physics"></div>

- `void` **set_sync_to_physics** ( value: [`bool`](class_bool.md) )
- [`bool`](class_bool.md) **is_sync_to_physics_enabled** ( )

If `true`, the body's movement will be synchronized to the physics frame. This is useful when animating movement via [`AnimationPlayer`](class_animationplayer.md), for example on moving platforms. Do **not** use together with [`PhysicsBody2D.move_and_collide`](class_physicsbody2d.md#class_physicsbody2d_method_move_and_collide).

[^virtual]: 本方法通常需要用户覆盖才能生效。
[^const]: 本方法无副作用，不会修改该实例的任何成员变量。
[^vararg]: 本方法除了能接受在此处描述的参数外，还能够继续接受任意数量的参数。
[^constructor]: 本方法用于构造某个类型。
[^static]: 调用本方法无需实例，可直接使用类名进行调用。
[^operator]: 本方法描述的是使用本类型作为左操作数的有效运算符。
[^bitfield]: 这个值是由下列位标志构成位掩码的整数。
[^void]: 无返回值。
