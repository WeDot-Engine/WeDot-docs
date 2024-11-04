<!-- ⚠ 请勿编辑本文件 ⚠ -->
<!-- 本文档使用脚本从 WeDot 引擎源码仓库生成。 -->
<!-- 生成脚本：https://github.com/WeDot-Engine/WeDot/tree/4.3/doc/tools/make_md.py； -->
<!-- 原文件：https://github.com/WeDot-Engine/WeDot/tree/4.3/doc/classes/VehicleBody3D.xml。 -->

<div id="_class_vehiclebody3d"></div>

# VehicleBody3D

**继承：** [`RigidBody3D`](class_rigidbody3d.md) **<** [`PhysicsBody3D`](class_physicsbody3d.md) **<** [`CollisionObject3D`](class_collisionobject3d.md) **<** [`Node3D`](class_node3d.md) **<** [`Node`](class_node.md) **<** [`Object`](class_object.md)

A 3D physics body that simulates the behavior of a car.

## 描述

This physics body implements all the physics logic needed to simulate a car. It is based on the raycast vehicle system commonly found in physics engines. Aside from a [`CollisionShape3D`](class_collisionshape3d.md) for the main body of the vehicle, you must also add a [`VehicleWheel3D`](class_vehiclewheel3d.md) node for each wheel. You should also add a [`MeshInstance3D`](class_meshinstance3d.md) to this node for the 3D model of the vehicle, but this model should generally not include meshes for the wheels. You can control the vehicle by using the [`brake`](#class_vehiclebody3d_property_brake), [`engine_force`](#class_vehiclebody3d_property_engine_force), and [`steering`](#class_vehiclebody3d_property_steering) properties. The position or orientation of this node shouldn't be changed directly.

 **Note:** The origin point of your VehicleBody3D will determine the center of gravity of your vehicle. To make the vehicle more grounded, the origin point is usually kept low, moving the [`CollisionShape3D`](class_collisionshape3d.md) and [`MeshInstance3D`](class_meshinstance3d.md) upwards.

 **Note:** This class has known issues and isn't designed to provide realistic 3D vehicle physics. If you want advanced vehicle physics, you may have to write your own physics integration using [`CharacterBody3D`](class_characterbody3d.md) or [`RigidBody3D`](class_rigidbody3d.md).

## 属性

| [`float`](class_float.md) | [`brake`](#class_vehiclebody3d_property_brake)               | ``0.0``                                                                |
| [`float`](class_float.md) | [`engine_force`](#class_vehiclebody3d_property_engine_force) | ``0.0``                                                                |
| [`float`](class_float.md) | mass                                                         | ``40.0`` (overrides [`RigidBody3D`](#class_rigidbody3d_property_mass)) |
| [`float`](class_float.md) | [`steering`](#class_vehiclebody3d_property_steering)         | ``0.0``                                                                |

<!-- rst-class:: classref-section-separator -->

---

## 属性说明

<div id="_class_vehiclebody3d_property_brake"></div>

[`float`](class_float.md) **brake** = ``0.0`` <div id="class_vehiclebody3d_property_brake"></div>

- `void` **set_brake** ( value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_brake** ( )

Slows down the vehicle by applying a braking force. The vehicle is only slowed down if the wheels are in contact with a surface. The force you need to apply to adequately slow down your vehicle depends on the [`RigidBody3D.mass`](#class_rigidbody3d_property_mass) of the vehicle. For a vehicle with a mass set to 1000, try a value in the 25 - 30 range for hard braking.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_vehiclebody3d_property_engine_force"></div>

[`float`](class_float.md) **engine_force** = ``0.0`` <div id="class_vehiclebody3d_property_engine_force"></div>

- `void` **set_engine_force** ( value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_engine_force** ( )

Accelerates the vehicle by applying an engine force. The vehicle is only sped up if the wheels that have [`VehicleWheel3D.use_as_traction`](#class_vehiclewheel3d_property_use_as_traction) set to `true` and are in contact with a surface. The [`RigidBody3D.mass`](#class_rigidbody3d_property_mass) of the vehicle has an effect on the acceleration of the vehicle. For a vehicle with a mass set to 1000, try a value in the 25 - 50 range for acceleration.

 **Note:** The simulation does not take the effect of gears into account, you will need to add logic for this if you wish to simulate gears.

A negative value will result in the vehicle reversing.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_vehiclebody3d_property_steering"></div>

[`float`](class_float.md) **steering** = ``0.0`` <div id="class_vehiclebody3d_property_steering"></div>

- `void` **set_steering** ( value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_steering** ( )

The steering angle for the vehicle. Setting this to a non-zero value will result in the vehicle turning when it's moving. Wheels that have [`VehicleWheel3D.use_as_steering`](#class_vehiclewheel3d_property_use_as_steering) set to `true` will automatically be rotated.

 **Note:** This property is edited in the inspector in degrees. In code the property is set in radians.

[^virtual]: 本方法通常需要用户覆盖才能生效。
[^const]: 本方法无副作用，不会修改该实例的任何成员变量。
[^vararg]: 本方法除了能接受在此处描述的参数外，还能够继续接受任意数量的参数。
[^constructor]: 本方法用于构造某个类型。
[^static]: 调用本方法无需实例，可直接使用类名进行调用。
[^operator]: 本方法描述的是使用本类型作为左操作数的有效运算符。
[^bitfield]: 这个值是由下列位标志构成位掩码的整数。
[^void]: 无返回值。
