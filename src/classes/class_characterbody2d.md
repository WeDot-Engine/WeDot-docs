<!-- ⚠ 请勿编辑本文件 ⚠ -->
<!-- 本文档使用脚本从 WeDot 引擎源码仓库生成。 -->
<!-- 生成脚本：https://github.com/WeDot-Engine/WeDot/tree/4.3/doc/tools/make_md.py； -->
<!-- 原文件：https://github.com/WeDot-Engine/WeDot/tree/4.3/doc/classes/CharacterBody2D.xml。 -->

<div id="_class_characterbody2d"></div>

# CharacterBody2D

**继承：** [`PhysicsBody2D`](class_physicsbody2d.md) **<** [`CollisionObject2D`](class_collisionobject2d.md) **<** [`Node2D`](class_node2d.md) **<** [`CanvasItem`](class_canvasitem.md) **<** [`Node`](class_node.md) **<** [`Object`](class_object.md)

A 2D physics body specialized for characters moved by script.

## 描述

**CharacterBody2D** is a specialized class for physics bodies that are meant to be user-controlled. They are not affected by physics at all, but they affect other physics bodies in their path. They are mainly used to provide high-level API to move objects with wall and slope detection ([`move_and_slide`](#class_characterbody2d_method_move_and_slide) method) in addition to the general collision detection provided by [`PhysicsBody2D.move_and_collide`](#class_physicsbody2d_method_move_and_collide). This makes it useful for highly configurable physics bodies that must move in specific ways and collide with the world, as is often the case with user-controlled characters.

For game objects that don't require complex movement or collision detection, such as moving platforms, [`AnimatableBody2D`](class_animatablebody2d.md) is simpler to configure.

## 属性

| [`bool`](class_bool.md)                                  | [`floor_block_on_wall`](#class_characterbody2d_property_floor_block_on_wall)     | ``true``           |
| [`bool`](class_bool.md)                                  | [`floor_constant_speed`](#class_characterbody2d_property_floor_constant_speed)   | ``false``          |
| [`float`](class_float.md)                                | [`floor_max_angle`](#class_characterbody2d_property_floor_max_angle)             | ``0.785398``       |
| [`float`](class_float.md)                                | [`floor_snap_length`](#class_characterbody2d_property_floor_snap_length)         | ``1.0``            |
| [`bool`](class_bool.md)                                  | [`floor_stop_on_slope`](#class_characterbody2d_property_floor_stop_on_slope)     | ``true``           |
| [`int`](class_int.md)                                    | [`max_slides`](#class_characterbody2d_property_max_slides)                       | ``4``              |
| [MotionMode](#enum_characterbody2d_motionmode)           | [`motion_mode`](#class_characterbody2d_property_motion_mode)                     | ``0``              |
| [`int`](class_int.md)                                    | [`platform_floor_layers`](#class_characterbody2d_property_platform_floor_layers) | ``4294967295``     |
| [PlatformOnLeave](#enum_characterbody2d_platformonleave) | [`platform_on_leave`](#class_characterbody2d_property_platform_on_leave)         | ``0``              |
| [`int`](class_int.md)                                    | [`platform_wall_layers`](#class_characterbody2d_property_platform_wall_layers)   | ``0``              |
| [`float`](class_float.md)                                | [`safe_margin`](#class_characterbody2d_property_safe_margin)                     | ``0.08``           |
| [`bool`](class_bool.md)                                  | [`slide_on_ceiling`](#class_characterbody2d_property_slide_on_ceiling)           | ``true``           |
| [`Vector2`](class_vector2.md)                            | [`up_direction`](#class_characterbody2d_property_up_direction)                   | ``Vector2(0, -1)`` |
| [`Vector2`](class_vector2.md)                            | [`velocity`](#class_characterbody2d_property_velocity)                           | ``Vector2(0, 0)``  |
| [`float`](class_float.md)                                | [`wall_min_slide_angle`](#class_characterbody2d_property_wall_min_slide_angle)   | ``0.261799``       |

## 方法

| `void`                                                  | [`apply_floor_snap`](#class_characterbody2d_method_apply_floor_snap) ( )                                                                          |
| [`float`](class_float.md)                               | [`get_floor_angle`](#class_characterbody2d_method_get_floor_angle) ( up_direction: [`Vector2`](class_vector2.md) = Vector2(0, -1) ) const[^const] |
| [`Vector2`](class_vector2.md)                           | [`get_floor_normal`](#class_characterbody2d_method_get_floor_normal) ( ) const[^const]                                                            |
| [`Vector2`](class_vector2.md)                           | [`get_last_motion`](#class_characterbody2d_method_get_last_motion) ( ) const[^const]                                                              |
| [`KinematicCollision2D`](class_kinematiccollision2d.md) | [`get_last_slide_collision`](#class_characterbody2d_method_get_last_slide_collision) ( )                                                          |
| [`Vector2`](class_vector2.md)                           | [`get_platform_velocity`](#class_characterbody2d_method_get_platform_velocity) ( ) const[^const]                                                  |
| [`Vector2`](class_vector2.md)                           | [`get_position_delta`](#class_characterbody2d_method_get_position_delta) ( ) const[^const]                                                        |
| [`Vector2`](class_vector2.md)                           | [`get_real_velocity`](#class_characterbody2d_method_get_real_velocity) ( ) const[^const]                                                          |
| [`KinematicCollision2D`](class_kinematiccollision2d.md) | [`get_slide_collision`](#class_characterbody2d_method_get_slide_collision) ( slide_idx: [`int`](class_int.md) )                                   |
| [`int`](class_int.md)                                   | [`get_slide_collision_count`](#class_characterbody2d_method_get_slide_collision_count) ( ) const[^const]                                          |
| [`Vector2`](class_vector2.md)                           | [`get_wall_normal`](#class_characterbody2d_method_get_wall_normal) ( ) const[^const]                                                              |
| [`bool`](class_bool.md)                                 | [`is_on_ceiling`](#class_characterbody2d_method_is_on_ceiling) ( ) const[^const]                                                                  |
| [`bool`](class_bool.md)                                 | [`is_on_ceiling_only`](#class_characterbody2d_method_is_on_ceiling_only) ( ) const[^const]                                                        |
| [`bool`](class_bool.md)                                 | [`is_on_floor`](#class_characterbody2d_method_is_on_floor) ( ) const[^const]                                                                      |
| [`bool`](class_bool.md)                                 | [`is_on_floor_only`](#class_characterbody2d_method_is_on_floor_only) ( ) const[^const]                                                            |
| [`bool`](class_bool.md)                                 | [`is_on_wall`](#class_characterbody2d_method_is_on_wall) ( ) const[^const]                                                                        |
| [`bool`](class_bool.md)                                 | [`is_on_wall_only`](#class_characterbody2d_method_is_on_wall_only) ( ) const[^const]                                                              |
| [`bool`](class_bool.md)                                 | [`move_and_slide`](#class_characterbody2d_method_move_and_slide) ( )                                                                              |

<!-- rst-class:: classref-section-separator -->

---

## 枚举

<div id="_class_enum_characterbody2d_motionmode"></div>

enum **MotionMode**: <div id="enum_characterbody2d_motionmode"></div>

<div id="_class_characterbody2d_constant_motion_mode_grounded"></div>

[MotionMode](#enum_characterbody2d_motionmode) **MOTION_MODE_GROUNDED** = ``0``

Apply when notions of walls, ceiling and floor are relevant. In this mode the body motion will react to slopes (acceleration/slowdown). This mode is suitable for sided games like platformers.

<div id="_class_characterbody2d_constant_motion_mode_floating"></div>

[MotionMode](#enum_characterbody2d_motionmode) **MOTION_MODE_FLOATING** = ``1``

Apply when there is no notion of floor or ceiling. All collisions will be reported as `on_wall`. In this mode, when you slide, the speed will always be constant. This mode is suitable for top-down games.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_enum_characterbody2d_platformonleave"></div>

enum **PlatformOnLeave**: <div id="enum_characterbody2d_platformonleave"></div>

<div id="_class_characterbody2d_constant_platform_on_leave_add_velocity"></div>

[PlatformOnLeave](#enum_characterbody2d_platformonleave) **PLATFORM_ON_LEAVE_ADD_VELOCITY** = ``0``

Add the last platform velocity to the [`velocity`](#class_characterbody2d_property_velocity) when you leave a moving platform.

<div id="_class_characterbody2d_constant_platform_on_leave_add_upward_velocity"></div>

[PlatformOnLeave](#enum_characterbody2d_platformonleave) **PLATFORM_ON_LEAVE_ADD_UPWARD_VELOCITY** = ``1``

Add the last platform velocity to the [`velocity`](#class_characterbody2d_property_velocity) when you leave a moving platform, but any downward motion is ignored. It's useful to keep full jump height even when the platform is moving down.

<div id="_class_characterbody2d_constant_platform_on_leave_do_nothing"></div>

[PlatformOnLeave](#enum_characterbody2d_platformonleave) **PLATFORM_ON_LEAVE_DO_NOTHING** = ``2``

Do nothing when leaving a platform.

<!-- rst-class:: classref-section-separator -->

---

## 属性说明

<div id="_class_characterbody2d_property_floor_block_on_wall"></div>

[`bool`](class_bool.md) **floor_block_on_wall** = ``true`` <div id="class_characterbody2d_property_floor_block_on_wall"></div>

- `void` **set_floor_block_on_wall_enabled** ( value: [`bool`](class_bool.md) )
- [`bool`](class_bool.md) **is_floor_block_on_wall_enabled** ( )

If `true`, the body will be able to move on the floor only. This option avoids to be able to walk on walls, it will however allow to slide down along them.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_characterbody2d_property_floor_constant_speed"></div>

[`bool`](class_bool.md) **floor_constant_speed** = ``false`` <div id="class_characterbody2d_property_floor_constant_speed"></div>

- `void` **set_floor_constant_speed_enabled** ( value: [`bool`](class_bool.md) )
- [`bool`](class_bool.md) **is_floor_constant_speed_enabled** ( )

If `false` (by default), the body will move faster on downward slopes and slower on upward slopes.

If `true`, the body will always move at the same speed on the ground no matter the slope. Note that you need to use [`floor_snap_length`](#class_characterbody2d_property_floor_snap_length) to stick along a downward slope at constant speed.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_characterbody2d_property_floor_max_angle"></div>

[`float`](class_float.md) **floor_max_angle** = ``0.785398`` <div id="class_characterbody2d_property_floor_max_angle"></div>

- `void` **set_floor_max_angle** ( value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_floor_max_angle** ( )

Maximum angle (in radians) where a slope is still considered a floor (or a ceiling), rather than a wall, when calling [`move_and_slide`](#class_characterbody2d_method_move_and_slide). The default value equals 45 degrees.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_characterbody2d_property_floor_snap_length"></div>

[`float`](class_float.md) **floor_snap_length** = ``1.0`` <div id="class_characterbody2d_property_floor_snap_length"></div>

- `void` **set_floor_snap_length** ( value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_floor_snap_length** ( )

Sets a snapping distance. When set to a value different from `0.0`, the body is kept attached to slopes when calling [`move_and_slide`](#class_characterbody2d_method_move_and_slide). The snapping vector is determined by the given distance along the opposite direction of the [`up_direction`](#class_characterbody2d_property_up_direction).

As long as the snapping vector is in contact with the ground and the body moves against [`up_direction`](#class_characterbody2d_property_up_direction), the body will remain attached to the surface. Snapping is not applied if the body moves along [`up_direction`](#class_characterbody2d_property_up_direction), meaning it contains vertical rising velocity, so it will be able to detach from the ground when jumping or when the body is pushed up by something. If you want to apply a snap without taking into account the velocity, use [`apply_floor_snap`](#class_characterbody2d_method_apply_floor_snap).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_characterbody2d_property_floor_stop_on_slope"></div>

[`bool`](class_bool.md) **floor_stop_on_slope** = ``true`` <div id="class_characterbody2d_property_floor_stop_on_slope"></div>

- `void` **set_floor_stop_on_slope_enabled** ( value: [`bool`](class_bool.md) )
- [`bool`](class_bool.md) **is_floor_stop_on_slope_enabled** ( )

If `true`, the body will not slide on slopes when calling [`move_and_slide`](#class_characterbody2d_method_move_and_slide) when the body is standing still.

If `false`, the body will slide on floor's slopes when [`velocity`](#class_characterbody2d_property_velocity) applies a downward force.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_characterbody2d_property_max_slides"></div>

[`int`](class_int.md) **max_slides** = ``4`` <div id="class_characterbody2d_property_max_slides"></div>

- `void` **set_max_slides** ( value: [`int`](class_int.md) )
- [`int`](class_int.md) **get_max_slides** ( )

Maximum number of times the body can change direction before it stops when calling [`move_and_slide`](#class_characterbody2d_method_move_and_slide).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_characterbody2d_property_motion_mode"></div>

[MotionMode](#enum_characterbody2d_motionmode) **motion_mode** = ``0`` <div id="class_characterbody2d_property_motion_mode"></div>

- `void` **set_motion_mode** ( value: [MotionMode](#enum_characterbody2d_motionmode) )
- [MotionMode](#enum_characterbody2d_motionmode) **get_motion_mode** ( )

Sets the motion mode which defines the behavior of [`move_and_slide`](#class_characterbody2d_method_move_and_slide). See [MotionMode](#enum_characterbody2d_motionmode) constants for available modes.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_characterbody2d_property_platform_floor_layers"></div>

[`int`](class_int.md) **platform_floor_layers** = ``4294967295`` <div id="class_characterbody2d_property_platform_floor_layers"></div>

- `void` **set_platform_floor_layers** ( value: [`int`](class_int.md) )
- [`int`](class_int.md) **get_platform_floor_layers** ( )

Collision layers that will be included for detecting floor bodies that will act as moving platforms to be followed by the **CharacterBody2D**. By default, all floor bodies are detected and propagate their velocity.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_characterbody2d_property_platform_on_leave"></div>

[PlatformOnLeave](#enum_characterbody2d_platformonleave) **platform_on_leave** = ``0`` <div id="class_characterbody2d_property_platform_on_leave"></div>

- `void` **set_platform_on_leave** ( value: [PlatformOnLeave](#enum_characterbody2d_platformonleave) )
- [PlatformOnLeave](#enum_characterbody2d_platformonleave) **get_platform_on_leave** ( )

Sets the behavior to apply when you leave a moving platform. By default, to be physically accurate, when you leave the last platform velocity is applied. See [PlatformOnLeave](#enum_characterbody2d_platformonleave) constants for available behavior.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_characterbody2d_property_platform_wall_layers"></div>

[`int`](class_int.md) **platform_wall_layers** = ``0`` <div id="class_characterbody2d_property_platform_wall_layers"></div>

- `void` **set_platform_wall_layers** ( value: [`int`](class_int.md) )
- [`int`](class_int.md) **get_platform_wall_layers** ( )

Collision layers that will be included for detecting wall bodies that will act as moving platforms to be followed by the **CharacterBody2D**. By default, all wall bodies are ignored.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_characterbody2d_property_safe_margin"></div>

[`float`](class_float.md) **safe_margin** = ``0.08`` <div id="class_characterbody2d_property_safe_margin"></div>

- `void` **set_safe_margin** ( value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_safe_margin** ( )

Extra margin used for collision recovery when calling [`move_and_slide`](#class_characterbody2d_method_move_and_slide).

If the body is at least this close to another body, it will consider them to be colliding and will be pushed away before performing the actual motion.

A higher value means it's more flexible for detecting collision, which helps with consistently detecting walls and floors.

A lower value forces the collision algorithm to use more exact detection, so it can be used in cases that specifically require precision, e.g at very low scale to avoid visible jittering, or for stability with a stack of character bodies.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_characterbody2d_property_slide_on_ceiling"></div>

[`bool`](class_bool.md) **slide_on_ceiling** = ``true`` <div id="class_characterbody2d_property_slide_on_ceiling"></div>

- `void` **set_slide_on_ceiling_enabled** ( value: [`bool`](class_bool.md) )
- [`bool`](class_bool.md) **is_slide_on_ceiling_enabled** ( )

If `true`, during a jump against the ceiling, the body will slide, if `false` it will be stopped and will fall vertically.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_characterbody2d_property_up_direction"></div>

[`Vector2`](class_vector2.md) **up_direction** = ``Vector2(0, -1)`` <div id="class_characterbody2d_property_up_direction"></div>

- `void` **set_up_direction** ( value: [`Vector2`](class_vector2.md) )
- [`Vector2`](class_vector2.md) **get_up_direction** ( )

Vector pointing upwards, used to determine what is a wall and what is a floor (or a ceiling) when calling [`move_and_slide`](#class_characterbody2d_method_move_and_slide). Defaults to [`Vector2.UP`](#class_vector2_constant_up). As the vector will be normalized it can't be equal to [`Vector2.ZERO`](#class_vector2_constant_zero), if you want all collisions to be reported as walls, consider using [`MOTION_MODE_FLOATING`](#class_characterbody2d_constant_motion_mode_floating) as [`motion_mode`](#class_characterbody2d_property_motion_mode).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_characterbody2d_property_velocity"></div>

[`Vector2`](class_vector2.md) **velocity** = ``Vector2(0, 0)`` <div id="class_characterbody2d_property_velocity"></div>

- `void` **set_velocity** ( value: [`Vector2`](class_vector2.md) )
- [`Vector2`](class_vector2.md) **get_velocity** ( )

Current velocity vector in pixels per second, used and modified during calls to [`move_and_slide`](#class_characterbody2d_method_move_and_slide).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_characterbody2d_property_wall_min_slide_angle"></div>

[`float`](class_float.md) **wall_min_slide_angle** = ``0.261799`` <div id="class_characterbody2d_property_wall_min_slide_angle"></div>

- `void` **set_wall_min_slide_angle** ( value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_wall_min_slide_angle** ( )

Minimum angle (in radians) where the body is allowed to slide when it encounters a slope. The default value equals 15 degrees. This property only affects movement when [`motion_mode`](#class_characterbody2d_property_motion_mode) is [`MOTION_MODE_FLOATING`](#class_characterbody2d_constant_motion_mode_floating).

<!-- rst-class:: classref-section-separator -->

---

## 方法说明

<div id="_class_characterbody2d_method_apply_floor_snap"></div>

`void` **apply_floor_snap** ( )<div id="class_characterbody2d_method_apply_floor_snap"></div>

Allows to manually apply a snap to the floor regardless of the body's velocity. This function does nothing when [`is_on_floor`](#class_characterbody2d_method_is_on_floor) returns `true`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_characterbody2d_method_get_floor_angle"></div>

[`float`](class_float.md) **get_floor_angle** ( up_direction: [`Vector2`](class_vector2.md) = Vector2(0, -1) ) const[^const]<div id="class_characterbody2d_method_get_floor_angle"></div>

Returns the floor's collision angle at the last collision point according to `up_direction`, which is [`Vector2.UP`](#class_vector2_constant_up) by default. This value is always positive and only valid after calling [`move_and_slide`](#class_characterbody2d_method_move_and_slide) and when [`is_on_floor`](#class_characterbody2d_method_is_on_floor) returns `true`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_characterbody2d_method_get_floor_normal"></div>

[`Vector2`](class_vector2.md) **get_floor_normal** ( ) const[^const]<div id="class_characterbody2d_method_get_floor_normal"></div>

Returns the collision normal of the floor at the last collision point. Only valid after calling [`move_and_slide`](#class_characterbody2d_method_move_and_slide) and when [`is_on_floor`](#class_characterbody2d_method_is_on_floor) returns `true`.

 **Warning:** The collision normal is not always the same as the surface normal.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_characterbody2d_method_get_last_motion"></div>

[`Vector2`](class_vector2.md) **get_last_motion** ( ) const[^const]<div id="class_characterbody2d_method_get_last_motion"></div>

Returns the last motion applied to the **CharacterBody2D** during the last call to [`move_and_slide`](#class_characterbody2d_method_move_and_slide). The movement can be split into multiple motions when sliding occurs, and this method return the last one, which is useful to retrieve the current direction of the movement.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_characterbody2d_method_get_last_slide_collision"></div>

[`KinematicCollision2D`](class_kinematiccollision2d.md) **get_last_slide_collision** ( )<div id="class_characterbody2d_method_get_last_slide_collision"></div>

Returns a [`KinematicCollision2D`](class_kinematiccollision2d.md), which contains information about the latest collision that occurred during the last call to [`move_and_slide`](#class_characterbody2d_method_move_and_slide).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_characterbody2d_method_get_platform_velocity"></div>

[`Vector2`](class_vector2.md) **get_platform_velocity** ( ) const[^const]<div id="class_characterbody2d_method_get_platform_velocity"></div>

Returns the linear velocity of the platform at the last collision point. Only valid after calling [`move_and_slide`](#class_characterbody2d_method_move_and_slide).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_characterbody2d_method_get_position_delta"></div>

[`Vector2`](class_vector2.md) **get_position_delta** ( ) const[^const]<div id="class_characterbody2d_method_get_position_delta"></div>

Returns the travel (position delta) that occurred during the last call to [`move_and_slide`](#class_characterbody2d_method_move_and_slide).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_characterbody2d_method_get_real_velocity"></div>

[`Vector2`](class_vector2.md) **get_real_velocity** ( ) const[^const]<div id="class_characterbody2d_method_get_real_velocity"></div>

Returns the current real velocity since the last call to [`move_and_slide`](#class_characterbody2d_method_move_and_slide). For example, when you climb a slope, you will move diagonally even though the velocity is horizontal. This method returns the diagonal movement, as opposed to [`velocity`](#class_characterbody2d_property_velocity) which returns the requested velocity.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_characterbody2d_method_get_slide_collision"></div>

[`KinematicCollision2D`](class_kinematiccollision2d.md) **get_slide_collision** ( slide_idx: [`int`](class_int.md) )<div id="class_characterbody2d_method_get_slide_collision"></div>

Returns a [`KinematicCollision2D`](class_kinematiccollision2d.md), which contains information about a collision that occurred during the last call to [`move_and_slide`](#class_characterbody2d_method_move_and_slide). Since the body can collide several times in a single call to [`move_and_slide`](#class_characterbody2d_method_move_and_slide), you must specify the index of the collision in the range 0 to ([`get_slide_collision_count`](#class_characterbody2d_method_get_slide_collision_count) - 1).

 **Example usage:** 



```gdscript

    for i in get_slide_collision_count():
        var collision = get_slide_collision(i)
        print("Collided with: ", collision.get_collider().name)
```

```csharp

    for (int i = 0; i < GetSlideCollisionCount(); i++)
    {
        KinematicCollision2D collision = GetSlideCollision(i);
        GD.Print("Collided with: ", (collision.GetCollider() as Node).Name);
    }
```







<!-- rst-class:: classref-item-separator -->

---

<div id="_class_characterbody2d_method_get_slide_collision_count"></div>

[`int`](class_int.md) **get_slide_collision_count** ( ) const[^const]<div id="class_characterbody2d_method_get_slide_collision_count"></div>

Returns the number of times the body collided and changed direction during the last call to [`move_and_slide`](#class_characterbody2d_method_move_and_slide).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_characterbody2d_method_get_wall_normal"></div>

[`Vector2`](class_vector2.md) **get_wall_normal** ( ) const[^const]<div id="class_characterbody2d_method_get_wall_normal"></div>

Returns the collision normal of the wall at the last collision point. Only valid after calling [`move_and_slide`](#class_characterbody2d_method_move_and_slide) and when [`is_on_wall`](#class_characterbody2d_method_is_on_wall) returns `true`.

 **Warning:** The collision normal is not always the same as the surface normal.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_characterbody2d_method_is_on_ceiling"></div>

[`bool`](class_bool.md) **is_on_ceiling** ( ) const[^const]<div id="class_characterbody2d_method_is_on_ceiling"></div>

Returns `true` if the body collided with the ceiling on the last call of [`move_and_slide`](#class_characterbody2d_method_move_and_slide). Otherwise, returns `false`. The [`up_direction`](#class_characterbody2d_property_up_direction) and [`floor_max_angle`](#class_characterbody2d_property_floor_max_angle) are used to determine whether a surface is "ceiling" or not.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_characterbody2d_method_is_on_ceiling_only"></div>

[`bool`](class_bool.md) **is_on_ceiling_only** ( ) const[^const]<div id="class_characterbody2d_method_is_on_ceiling_only"></div>

Returns `true` if the body collided only with the ceiling on the last call of [`move_and_slide`](#class_characterbody2d_method_move_and_slide). Otherwise, returns `false`. The [`up_direction`](#class_characterbody2d_property_up_direction) and [`floor_max_angle`](#class_characterbody2d_property_floor_max_angle) are used to determine whether a surface is "ceiling" or not.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_characterbody2d_method_is_on_floor"></div>

[`bool`](class_bool.md) **is_on_floor** ( ) const[^const]<div id="class_characterbody2d_method_is_on_floor"></div>

Returns `true` if the body collided with the floor on the last call of [`move_and_slide`](#class_characterbody2d_method_move_and_slide). Otherwise, returns `false`. The [`up_direction`](#class_characterbody2d_property_up_direction) and [`floor_max_angle`](#class_characterbody2d_property_floor_max_angle) are used to determine whether a surface is "floor" or not.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_characterbody2d_method_is_on_floor_only"></div>

[`bool`](class_bool.md) **is_on_floor_only** ( ) const[^const]<div id="class_characterbody2d_method_is_on_floor_only"></div>

Returns `true` if the body collided only with the floor on the last call of [`move_and_slide`](#class_characterbody2d_method_move_and_slide). Otherwise, returns `false`. The [`up_direction`](#class_characterbody2d_property_up_direction) and [`floor_max_angle`](#class_characterbody2d_property_floor_max_angle) are used to determine whether a surface is "floor" or not.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_characterbody2d_method_is_on_wall"></div>

[`bool`](class_bool.md) **is_on_wall** ( ) const[^const]<div id="class_characterbody2d_method_is_on_wall"></div>

Returns `true` if the body collided with a wall on the last call of [`move_and_slide`](#class_characterbody2d_method_move_and_slide). Otherwise, returns `false`. The [`up_direction`](#class_characterbody2d_property_up_direction) and [`floor_max_angle`](#class_characterbody2d_property_floor_max_angle) are used to determine whether a surface is "wall" or not.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_characterbody2d_method_is_on_wall_only"></div>

[`bool`](class_bool.md) **is_on_wall_only** ( ) const[^const]<div id="class_characterbody2d_method_is_on_wall_only"></div>

Returns `true` if the body collided only with a wall on the last call of [`move_and_slide`](#class_characterbody2d_method_move_and_slide). Otherwise, returns `false`. The [`up_direction`](#class_characterbody2d_property_up_direction) and [`floor_max_angle`](#class_characterbody2d_property_floor_max_angle) are used to determine whether a surface is "wall" or not.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_characterbody2d_method_move_and_slide"></div>

[`bool`](class_bool.md) **move_and_slide** ( )<div id="class_characterbody2d_method_move_and_slide"></div>

Moves the body based on [`velocity`](#class_characterbody2d_property_velocity). If the body collides with another, it will slide along the other body (by default only on floor) rather than stop immediately. If the other body is a **CharacterBody2D** or [`RigidBody2D`](class_rigidbody2d.md), it will also be affected by the motion of the other body. You can use this to make moving and rotating platforms, or to make nodes push other nodes.

Modifies [`velocity`](#class_characterbody2d_property_velocity) if a slide collision occurred. To get the latest collision call [`get_last_slide_collision`](#class_characterbody2d_method_get_last_slide_collision), for detailed information about collisions that occurred, use [`get_slide_collision`](#class_characterbody2d_method_get_slide_collision).

When the body touches a moving platform, the platform's velocity is automatically added to the body motion. If a collision occurs due to the platform's motion, it will always be first in the slide collisions.

The general behavior and available properties change according to the [`motion_mode`](#class_characterbody2d_property_motion_mode).

Returns `true` if the body collided, otherwise, returns `false`.

[^virtual]: 本方法通常需要用户覆盖才能生效。
[^const]: 本方法无副作用，不会修改该实例的任何成员变量。
[^vararg]: 本方法除了能接受在此处描述的参数外，还能够继续接受任意数量的参数。
[^constructor]: 本方法用于构造某个类型。
[^static]: 调用本方法无需实例，可直接使用类名进行调用。
[^operator]: 本方法描述的是使用本类型作为左操作数的有效运算符。
[^bitfield]: 这个值是由下列位标志构成位掩码的整数。
[^void]: 无返回值。
