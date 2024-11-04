<!-- ⚠ 请勿编辑本文件 ⚠ -->
<!-- 本文档使用脚本从 WeDot 引擎源码仓库生成。 -->
<!-- 生成脚本：https://github.com/WeDot-Engine/WeDot/tree/4.3/doc/tools/make_md.py； -->
<!-- 原文件：https://github.com/WeDot-Engine/WeDot/tree/4.3/doc/classes/VehicleWheel3D.xml。 -->

<div id="_class_vehiclewheel3d"></div>

# VehicleWheel3D

**继承：** [`Node3D`](class_node3d.md) **<** [`Node`](class_node.md) **<** [`Object`](class_object.md)

A 3D physics body for a [`VehicleBody3D`](class_vehiclebody3d.md) that simulates the behavior of a wheel.

## 描述

A node used as a child of a [`VehicleBody3D`](class_vehiclebody3d.md) parent to simulate the behavior of one of its wheels. This node also acts as a collider to detect if the wheel is touching a surface.

 **Note:** This class has known issues and isn't designed to provide realistic 3D vehicle physics. If you want advanced vehicle physics, you may need to write your own physics integration using another [`PhysicsBody3D`](class_physicsbody3d.md) class.

## 属性

| [`float`](class_float.md) | [`brake`](#class_vehiclewheel3d_property_brake)                               | ``0.0``    |
| [`float`](class_float.md) | [`damping_compression`](#class_vehiclewheel3d_property_damping_compression)   | ``0.83``   |
| [`float`](class_float.md) | [`damping_relaxation`](#class_vehiclewheel3d_property_damping_relaxation)     | ``0.88``   |
| [`float`](class_float.md) | [`engine_force`](#class_vehiclewheel3d_property_engine_force)                 | ``0.0``    |
| [`float`](class_float.md) | [`steering`](#class_vehiclewheel3d_property_steering)                         | ``0.0``    |
| [`float`](class_float.md) | [`suspension_max_force`](#class_vehiclewheel3d_property_suspension_max_force) | ``6000.0`` |
| [`float`](class_float.md) | [`suspension_stiffness`](#class_vehiclewheel3d_property_suspension_stiffness) | ``5.88``   |
| [`float`](class_float.md) | [`suspension_travel`](#class_vehiclewheel3d_property_suspension_travel)       | ``0.2``    |
| [`bool`](class_bool.md)   | [`use_as_steering`](#class_vehiclewheel3d_property_use_as_steering)           | ``false``  |
| [`bool`](class_bool.md)   | [`use_as_traction`](#class_vehiclewheel3d_property_use_as_traction)           | ``false``  |
| [`float`](class_float.md) | [`wheel_friction_slip`](#class_vehiclewheel3d_property_wheel_friction_slip)   | ``10.5``   |
| [`float`](class_float.md) | [`wheel_radius`](#class_vehiclewheel3d_property_wheel_radius)                 | ``0.5``    |
| [`float`](class_float.md) | [`wheel_rest_length`](#class_vehiclewheel3d_property_wheel_rest_length)       | ``0.15``   |
| [`float`](class_float.md) | [`wheel_roll_influence`](#class_vehiclewheel3d_property_wheel_roll_influence) | ``0.1``    |

## 方法

| [`Node3D`](class_node3d.md) | [`get_contact_body`](#class_vehiclewheel3d_method_get_contact_body) ( ) const[^const] |
| [`float`](class_float.md)   | [`get_rpm`](#class_vehiclewheel3d_method_get_rpm) ( ) const[^const]                   |
| [`float`](class_float.md)   | [`get_skidinfo`](#class_vehiclewheel3d_method_get_skidinfo) ( ) const[^const]         |
| [`bool`](class_bool.md)     | [`is_in_contact`](#class_vehiclewheel3d_method_is_in_contact) ( ) const[^const]       |

<!-- rst-class:: classref-section-separator -->

---

## 属性说明

<div id="_class_vehiclewheel3d_property_brake"></div>

[`float`](class_float.md) **brake** = ``0.0`` <div id="class_vehiclewheel3d_property_brake"></div>

- `void` **set_brake** ( value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_brake** ( )

Slows down the wheel by applying a braking force. The wheel is only slowed down if it is in contact with a surface. The force you need to apply to adequately slow down your vehicle depends on the [`RigidBody3D.mass`](#class_rigidbody3d_property_mass) of the vehicle. For a vehicle with a mass set to 1000, try a value in the 25 - 30 range for hard braking.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_vehiclewheel3d_property_damping_compression"></div>

[`float`](class_float.md) **damping_compression** = ``0.83`` <div id="class_vehiclewheel3d_property_damping_compression"></div>

- `void` **set_damping_compression** ( value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_damping_compression** ( )

The damping applied to the spring when the spring is being compressed. This value should be between 0.0 (no damping) and 1.0. A value of 0.0 means the car will keep bouncing as the spring keeps its energy. A good value for this is around 0.3 for a normal car, 0.5 for a race car.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_vehiclewheel3d_property_damping_relaxation"></div>

[`float`](class_float.md) **damping_relaxation** = ``0.88`` <div id="class_vehiclewheel3d_property_damping_relaxation"></div>

- `void` **set_damping_relaxation** ( value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_damping_relaxation** ( )

The damping applied to the spring when relaxing. This value should be between 0.0 (no damping) and 1.0. This value should always be slightly higher than the [`damping_compression`](#class_vehiclewheel3d_property_damping_compression) property. For a [`damping_compression`](#class_vehiclewheel3d_property_damping_compression) value of 0.3, try a relaxation value of 0.5.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_vehiclewheel3d_property_engine_force"></div>

[`float`](class_float.md) **engine_force** = ``0.0`` <div id="class_vehiclewheel3d_property_engine_force"></div>

- `void` **set_engine_force** ( value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_engine_force** ( )

Accelerates the wheel by applying an engine force. The wheel is only sped up if it is in contact with a surface. The [`RigidBody3D.mass`](#class_rigidbody3d_property_mass) of the vehicle has an effect on the acceleration of the vehicle. For a vehicle with a mass set to 1000, try a value in the 25 - 50 range for acceleration.

 **Note:** The simulation does not take the effect of gears into account, you will need to add logic for this if you wish to simulate gears.

A negative value will result in the wheel reversing.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_vehiclewheel3d_property_steering"></div>

[`float`](class_float.md) **steering** = ``0.0`` <div id="class_vehiclewheel3d_property_steering"></div>

- `void` **set_steering** ( value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_steering** ( )

The steering angle for the wheel, in radians. Setting this to a non-zero value will result in the vehicle turning when it's moving.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_vehiclewheel3d_property_suspension_max_force"></div>

[`float`](class_float.md) **suspension_max_force** = ``6000.0`` <div id="class_vehiclewheel3d_property_suspension_max_force"></div>

- `void` **set_suspension_max_force** ( value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_suspension_max_force** ( )

The maximum force the spring can resist. This value should be higher than a quarter of the [`RigidBody3D.mass`](#class_rigidbody3d_property_mass) of the [`VehicleBody3D`](class_vehiclebody3d.md) or the spring will not carry the weight of the vehicle. Good results are often obtained by a value that is about 3× to 4× this number.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_vehiclewheel3d_property_suspension_stiffness"></div>

[`float`](class_float.md) **suspension_stiffness** = ``5.88`` <div id="class_vehiclewheel3d_property_suspension_stiffness"></div>

- `void` **set_suspension_stiffness** ( value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_suspension_stiffness** ( )

This value defines the stiffness of the suspension. Use a value lower than 50 for an off-road car, a value between 50 and 100 for a race car and try something around 200 for something like a Formula 1 car.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_vehiclewheel3d_property_suspension_travel"></div>

[`float`](class_float.md) **suspension_travel** = ``0.2`` <div id="class_vehiclewheel3d_property_suspension_travel"></div>

- `void` **set_suspension_travel** ( value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_suspension_travel** ( )

This is the distance the suspension can travel. As Godot units are equivalent to meters, keep this setting relatively low. Try a value between 0.1 and 0.3 depending on the type of car.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_vehiclewheel3d_property_use_as_steering"></div>

[`bool`](class_bool.md) **use_as_steering** = ``false`` <div id="class_vehiclewheel3d_property_use_as_steering"></div>

- `void` **set_use_as_steering** ( value: [`bool`](class_bool.md) )
- [`bool`](class_bool.md) **is_used_as_steering** ( )

If `true`, this wheel will be turned when the car steers. This value is used in conjunction with [`VehicleBody3D.steering`](#class_vehiclebody3d_property_steering) and ignored if you are using the per-wheel [`steering`](#class_vehiclewheel3d_property_steering) value instead.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_vehiclewheel3d_property_use_as_traction"></div>

[`bool`](class_bool.md) **use_as_traction** = ``false`` <div id="class_vehiclewheel3d_property_use_as_traction"></div>

- `void` **set_use_as_traction** ( value: [`bool`](class_bool.md) )
- [`bool`](class_bool.md) **is_used_as_traction** ( )

If `true`, this wheel transfers engine force to the ground to propel the vehicle forward. This value is used in conjunction with [`VehicleBody3D.engine_force`](#class_vehiclebody3d_property_engine_force) and ignored if you are using the per-wheel [`engine_force`](#class_vehiclewheel3d_property_engine_force) value instead.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_vehiclewheel3d_property_wheel_friction_slip"></div>

[`float`](class_float.md) **wheel_friction_slip** = ``10.5`` <div id="class_vehiclewheel3d_property_wheel_friction_slip"></div>

- `void` **set_friction_slip** ( value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_friction_slip** ( )

This determines how much grip this wheel has. It is combined with the friction setting of the surface the wheel is in contact with. 0.0 means no grip, 1.0 is normal grip. For a drift car setup, try setting the grip of the rear wheels slightly lower than the front wheels, or use a lower value to simulate tire wear.

It's best to set this to 1.0 when starting out.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_vehiclewheel3d_property_wheel_radius"></div>

[`float`](class_float.md) **wheel_radius** = ``0.5`` <div id="class_vehiclewheel3d_property_wheel_radius"></div>

- `void` **set_radius** ( value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_radius** ( )

The radius of the wheel in meters.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_vehiclewheel3d_property_wheel_rest_length"></div>

[`float`](class_float.md) **wheel_rest_length** = ``0.15`` <div id="class_vehiclewheel3d_property_wheel_rest_length"></div>

- `void` **set_suspension_rest_length** ( value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_suspension_rest_length** ( )

This is the distance in meters the wheel is lowered from its origin point. Don't set this to 0.0 and move the wheel into position, instead move the origin point of your wheel (the gizmo in Godot) to the position the wheel will take when bottoming out, then use the rest length to move the wheel down to the position it should be in when the car is in rest.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_vehiclewheel3d_property_wheel_roll_influence"></div>

[`float`](class_float.md) **wheel_roll_influence** = ``0.1`` <div id="class_vehiclewheel3d_property_wheel_roll_influence"></div>

- `void` **set_roll_influence** ( value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_roll_influence** ( )

This value affects the roll of your vehicle. If set to 1.0 for all wheels, your vehicle will resist body roll, while a value of 0.0 will be prone to rolling over.

<!-- rst-class:: classref-section-separator -->

---

## 方法说明

<div id="_class_vehiclewheel3d_method_get_contact_body"></div>

[`Node3D`](class_node3d.md) **get_contact_body** ( ) const[^const]<div id="class_vehiclewheel3d_method_get_contact_body"></div>

Returns the contacting body node if valid in the tree, as [`Node3D`](class_node3d.md). At the moment, [`GridMap`](class_gridmap.md) is not supported so the node will be always of type [`PhysicsBody3D`](class_physicsbody3d.md).

Returns `null` if the wheel is not in contact with a surface, or the contact body is not a [`PhysicsBody3D`](class_physicsbody3d.md).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_vehiclewheel3d_method_get_rpm"></div>

[`float`](class_float.md) **get_rpm** ( ) const[^const]<div id="class_vehiclewheel3d_method_get_rpm"></div>

Returns the rotational speed of the wheel in revolutions per minute.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_vehiclewheel3d_method_get_skidinfo"></div>

[`float`](class_float.md) **get_skidinfo** ( ) const[^const]<div id="class_vehiclewheel3d_method_get_skidinfo"></div>

Returns a value between 0.0 and 1.0 that indicates whether this wheel is skidding. 0.0 is skidding (the wheel has lost grip, e.g. icy terrain), 1.0 means not skidding (the wheel has full grip, e.g. dry asphalt road).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_vehiclewheel3d_method_is_in_contact"></div>

[`bool`](class_bool.md) **is_in_contact** ( ) const[^const]<div id="class_vehiclewheel3d_method_is_in_contact"></div>

Returns `true` if this wheel is in contact with a surface.

[^virtual]: 本方法通常需要用户覆盖才能生效。
[^const]: 本方法无副作用，不会修改该实例的任何成员变量。
[^vararg]: 本方法除了能接受在此处描述的参数外，还能够继续接受任意数量的参数。
[^constructor]: 本方法用于构造某个类型。
[^static]: 调用本方法无需实例，可直接使用类名进行调用。
[^operator]: 本方法描述的是使用本类型作为左操作数的有效运算符。
[^bitfield]: 这个值是由下列位标志构成位掩码的整数。
[^void]: 无返回值。
