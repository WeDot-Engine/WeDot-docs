<!-- ⚠ 请勿编辑本文件 ⚠ -->
<!-- 本文档使用脚本从 WeDot 引擎源码仓库生成。 -->
<!-- 生成脚本：https://github.com/WeDot-Engine/WeDot/tree/master/doc/tools/make_md.py； -->
<!-- 原文件：https://github.com/WeDot-Engine/WeDot/tree/master/doc/classes/Area2D.xml。 -->

<div id="_class_area2d"></div>

# Area2D

**继承：** [`CollisionObject2D`](class_collisionobject2d.md) **<** [`Node2D`](class_node2d.md) **<** [`CanvasItem`](class_canvasitem.md) **<** [`Node`](class_node.md) **<** [`Object`](class_object.md)

A region of 2D space that detects other [`CollisionObject2D`](class_collisionobject2d.md) s entering or exiting it.

## 描述

**Area2D** is a region of 2D space defined by one or multiple [`CollisionShape2D`](class_collisionshape2d.md) or [`CollisionPolygon2D`](class_collisionpolygon2d.md) child nodes. It detects when other [`CollisionObject2D`](class_collisionobject2d.md) s enter or exit it, and it also keeps track of which collision objects haven't exited it yet (i.e. which one are overlapping it).

This node can also locally alter or override physics parameters (gravity, damping) and route audio to custom audio buses.

 **Note:** Areas and bodies created with [`PhysicsServer2D`](class_physicsserver2d.md) might not interact as expected with **Area2D** s, and might not emit signals or track objects correctly.

## 属性

|||
|:-:|:--|
| [`float`](class_float.md)                   | [`angular_damp`](class_area2d.md#class_area2d_property_angular_damp)                               | ``1.0``           |
| [SpaceOverride](#enum_area2d_spaceoverride) | [`angular_damp_space_override`](class_area2d.md#class_area2d_property_angular_damp_space_override) | ``0``             |
| [`StringName`](class_stringname.md)         | [`audio_bus_name`](class_area2d.md#class_area2d_property_audio_bus_name)                           | ``&"Master"``     |
| [`bool`](class_bool.md)                     | [`audio_bus_override`](class_area2d.md#class_area2d_property_audio_bus_override)                   | ``false``         |
| [`float`](class_float.md)                   | [`gravity`](class_area2d.md#class_area2d_property_gravity)                                         | ``980.0``         |
| [`Vector2`](class_vector2.md)               | [`gravity_direction`](class_area2d.md#class_area2d_property_gravity_direction)                     | ``Vector2(0, 1)`` |
| [`bool`](class_bool.md)                     | [`gravity_point`](class_area2d.md#class_area2d_property_gravity_point)                             | ``false``         |
| [`Vector2`](class_vector2.md)               | [`gravity_point_center`](class_area2d.md#class_area2d_property_gravity_point_center)               | ``Vector2(0, 1)`` |
| [`float`](class_float.md)                   | [`gravity_point_unit_distance`](class_area2d.md#class_area2d_property_gravity_point_unit_distance) | ``0.0``           |
| [SpaceOverride](#enum_area2d_spaceoverride) | [`gravity_space_override`](class_area2d.md#class_area2d_property_gravity_space_override)           | ``0``             |
| [`float`](class_float.md)                   | [`linear_damp`](class_area2d.md#class_area2d_property_linear_damp)                                 | ``0.1``           |
| [SpaceOverride](#enum_area2d_spaceoverride) | [`linear_damp_space_override`](class_area2d.md#class_area2d_property_linear_damp_space_override)   | ``0``             |
| [`bool`](class_bool.md)                     | [`monitorable`](class_area2d.md#class_area2d_property_monitorable)                                 | ``true``          |
| [`bool`](class_bool.md)                     | [`monitoring`](class_area2d.md#class_area2d_property_monitoring)                                   | ``true``          |
| [`int`](class_int.md)                       | [`priority`](class_area2d.md#class_area2d_property_priority)                                       | ``0``             |

## 方法

|||
|:-:|:--|
| [Array](class_array.md) [`Area2D`](class_area2d.md) | [`get_overlapping_areas`](class_area2d.md#class_area2d_method_get_overlapping_areas) ( ) const[^const]               |
| [Array](class_array.md) [`Node2D`](class_node2d.md) | [`get_overlapping_bodies`](class_area2d.md#class_area2d_method_get_overlapping_bodies) ( ) const[^const]             |
| [`bool`](class_bool.md)                             | [`has_overlapping_areas`](class_area2d.md#class_area2d_method_has_overlapping_areas) ( ) const[^const]               |
| [`bool`](class_bool.md)                             | [`has_overlapping_bodies`](class_area2d.md#class_area2d_method_has_overlapping_bodies) ( ) const[^const]             |
| [`bool`](class_bool.md)                             | [`overlaps_area`](class_area2d.md#class_area2d_method_overlaps_area) ( area: [`Node`](class_node.md) ) const[^const] |
| [`bool`](class_bool.md)                             | [`overlaps_body`](class_area2d.md#class_area2d_method_overlaps_body) ( body: [`Node`](class_node.md) ) const[^const] |

<!-- rst-class:: classref-section-separator -->

---

## 信号

<div id="_class_class_area2d_signal_area_entered"></div>

**area_entered** ( area: [`Area2D`](class_area2d.md) ) <div id="class_area2d_signal_area_entered"></div>

Emitted when the received `area` enters this area. Requires [`monitoring`](class_area2d.md#class_area2d_property_monitoring) to be set to `true`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_class_area2d_signal_area_exited"></div>

**area_exited** ( area: [`Area2D`](class_area2d.md) ) <div id="class_area2d_signal_area_exited"></div>

Emitted when the received `area` exits this area. Requires [`monitoring`](class_area2d.md#class_area2d_property_monitoring) to be set to `true`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_class_area2d_signal_area_shape_entered"></div>

**area_shape_entered** ( area_rid: [`RID`](class_rid.md), area: [`Area2D`](class_area2d.md), area_shape_index: [`int`](class_int.md), local_shape_index: [`int`](class_int.md) ) <div id="class_area2d_signal_area_shape_entered"></div>

Emitted when a [`Shape2D`](class_shape2d.md) of the received `area` enters a shape of this area. Requires [`monitoring`](class_area2d.md#class_area2d_property_monitoring) to be set to `true`.

 `local_shape_index` and `area_shape_index` contain indices of the interacting shapes from this area and the other area, respectively. `area_rid` contains the [`RID`](class_rid.md) of the other area. These values can be used with the [`PhysicsServer2D`](class_physicsserver2d.md).

 **Example of getting the** [`CollisionShape2D`](class_collisionshape2d.md) **node from the shape index:** 



```gdscript

    var other_shape_owner = area.shape_find_owner(area_shape_index)
    var other_shape_node = area.shape_owner_get_owner(other_shape_owner)
    
    var local_shape_owner = shape_find_owner(local_shape_index)
    var local_shape_node = shape_owner_get_owner(local_shape_owner)
```





<!-- rst-class:: classref-item-separator -->

---

<div id="_class_class_area2d_signal_area_shape_exited"></div>

**area_shape_exited** ( area_rid: [`RID`](class_rid.md), area: [`Area2D`](class_area2d.md), area_shape_index: [`int`](class_int.md), local_shape_index: [`int`](class_int.md) ) <div id="class_area2d_signal_area_shape_exited"></div>

Emitted when a [`Shape2D`](class_shape2d.md) of the received `area` exits a shape of this area. Requires [`monitoring`](class_area2d.md#class_area2d_property_monitoring) to be set to `true`.

See also [`area_shape_entered`](class_area2d.md#class_area2d_signal_area_shape_entered).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_class_area2d_signal_body_entered"></div>

**body_entered** ( body: [`Node2D`](class_node2d.md) ) <div id="class_area2d_signal_body_entered"></div>

Emitted when the received `body` enters this area. `body` can be a [`PhysicsBody2D`](class_physicsbody2d.md) or a [`TileMap`](class_tilemap.md). [`TileMap`](class_tilemap.md) s are detected if their [`TileSet`](class_tileset.md) has collision shapes configured. Requires [`monitoring`](class_area2d.md#class_area2d_property_monitoring) to be set to `true`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_class_area2d_signal_body_exited"></div>

**body_exited** ( body: [`Node2D`](class_node2d.md) ) <div id="class_area2d_signal_body_exited"></div>

Emitted when the received `body` exits this area. `body` can be a [`PhysicsBody2D`](class_physicsbody2d.md) or a [`TileMap`](class_tilemap.md). [`TileMap`](class_tilemap.md) s are detected if their [`TileSet`](class_tileset.md) has collision shapes configured. Requires [`monitoring`](class_area2d.md#class_area2d_property_monitoring) to be set to `true`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_class_area2d_signal_body_shape_entered"></div>

**body_shape_entered** ( body_rid: [`RID`](class_rid.md), body: [`Node2D`](class_node2d.md), body_shape_index: [`int`](class_int.md), local_shape_index: [`int`](class_int.md) ) <div id="class_area2d_signal_body_shape_entered"></div>

Emitted when a [`Shape2D`](class_shape2d.md) of the received `body` enters a shape of this area. `body` can be a [`PhysicsBody2D`](class_physicsbody2d.md) or a [`TileMap`](class_tilemap.md). [`TileMap`](class_tilemap.md) s are detected if their [`TileSet`](class_tileset.md) has collision shapes configured. Requires [`monitoring`](class_area2d.md#class_area2d_property_monitoring) to be set to `true`.

 `local_shape_index` and `body_shape_index` contain indices of the interacting shapes from this area and the interacting body, respectively. `body_rid` contains the [`RID`](class_rid.md) of the body. These values can be used with the [`PhysicsServer2D`](class_physicsserver2d.md).

 **Example of getting the** [`CollisionShape2D`](class_collisionshape2d.md) **node from the shape index:** 



```gdscript

    var body_shape_owner = body.shape_find_owner(body_shape_index)
    var body_shape_node = body.shape_owner_get_owner(body_shape_owner)
    
    var local_shape_owner = shape_find_owner(local_shape_index)
    var local_shape_node = shape_owner_get_owner(local_shape_owner)
```





<!-- rst-class:: classref-item-separator -->

---

<div id="_class_class_area2d_signal_body_shape_exited"></div>

**body_shape_exited** ( body_rid: [`RID`](class_rid.md), body: [`Node2D`](class_node2d.md), body_shape_index: [`int`](class_int.md), local_shape_index: [`int`](class_int.md) ) <div id="class_area2d_signal_body_shape_exited"></div>

Emitted when a [`Shape2D`](class_shape2d.md) of the received `body` exits a shape of this area. `body` can be a [`PhysicsBody2D`](class_physicsbody2d.md) or a [`TileMap`](class_tilemap.md). [`TileMap`](class_tilemap.md) s are detected if their [`TileSet`](class_tileset.md) has collision shapes configured. Requires [`monitoring`](class_area2d.md#class_area2d_property_monitoring) to be set to `true`.

See also [`body_shape_entered`](class_area2d.md#class_area2d_signal_body_shape_entered).

<!-- rst-class:: classref-section-separator -->

---

## 枚举

<div id="_class_enum_area2d_spaceoverride"></div>

enum **SpaceOverride**: <div id="enum_area2d_spaceoverride"></div>

<div id="_class_area2d_constant_space_override_disabled"></div>

[SpaceOverride](#enum_area2d_spaceoverride) **SPACE_OVERRIDE_DISABLED** = ``0``

This area does not affect gravity/damping.

<div id="_class_area2d_constant_space_override_combine"></div>

[SpaceOverride](#enum_area2d_spaceoverride) **SPACE_OVERRIDE_COMBINE** = ``1``

This area adds its gravity/damping values to whatever has been calculated so far (in [`priority`](class_area2d.md#class_area2d_property_priority) order).

<div id="_class_area2d_constant_space_override_combine_replace"></div>

[SpaceOverride](#enum_area2d_spaceoverride) **SPACE_OVERRIDE_COMBINE_REPLACE** = ``2``

This area adds its gravity/damping values to whatever has been calculated so far (in [`priority`](class_area2d.md#class_area2d_property_priority) order), ignoring any lower priority areas.

<div id="_class_area2d_constant_space_override_replace"></div>

[SpaceOverride](#enum_area2d_spaceoverride) **SPACE_OVERRIDE_REPLACE** = ``3``

This area replaces any gravity/damping, even the defaults, ignoring any lower priority areas.

<div id="_class_area2d_constant_space_override_replace_combine"></div>

[SpaceOverride](#enum_area2d_spaceoverride) **SPACE_OVERRIDE_REPLACE_COMBINE** = ``4``

This area replaces any gravity/damping calculated so far (in [`priority`](class_area2d.md#class_area2d_property_priority) order), but keeps calculating the rest of the areas.

<!-- rst-class:: classref-section-separator -->

---

## 属性说明

<div id="_class_area2d_property_angular_damp"></div>

[`float`](class_float.md) **angular_damp** = ``1.0`` <div id="class_area2d_property_angular_damp"></div>

- `void` **set_angular_damp** ( value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_angular_damp** ( )

The rate at which objects stop spinning in this area. Represents the angular velocity lost per second.

See [`ProjectSettings.physics/2d/default_angular_damp`](class_projectsettings.md#class_projectsettings_property_physics/2d/default_angular_damp) for more details about damping.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_area2d_property_angular_damp_space_override"></div>

[SpaceOverride](#enum_area2d_spaceoverride) **angular_damp_space_override** = ``0`` <div id="class_area2d_property_angular_damp_space_override"></div>

- `void` **set_angular_damp_space_override_mode** ( value: [SpaceOverride](#enum_area2d_spaceoverride) )
- [SpaceOverride](#enum_area2d_spaceoverride) **get_angular_damp_space_override_mode** ( )

Override mode for angular damping calculations within this area. See [SpaceOverride](#enum_area2d_spaceoverride) for possible values.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_area2d_property_audio_bus_name"></div>

[`StringName`](class_stringname.md) **audio_bus_name** = ``&"Master"`` <div id="class_area2d_property_audio_bus_name"></div>

- `void` **set_audio_bus_name** ( value: [`StringName`](class_stringname.md) )
- [`StringName`](class_stringname.md) **get_audio_bus_name** ( )

The name of the area's audio bus.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_area2d_property_audio_bus_override"></div>

[`bool`](class_bool.md) **audio_bus_override** = ``false`` <div id="class_area2d_property_audio_bus_override"></div>

- `void` **set_audio_bus_override** ( value: [`bool`](class_bool.md) )
- [`bool`](class_bool.md) **is_overriding_audio_bus** ( )

If `true`, the area's audio bus overrides the default audio bus.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_area2d_property_gravity"></div>

[`float`](class_float.md) **gravity** = ``980.0`` <div id="class_area2d_property_gravity"></div>

- `void` **set_gravity** ( value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_gravity** ( )

The area's gravity intensity (in pixels per second squared). This value multiplies the gravity direction. This is useful to alter the force of gravity without altering its direction.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_area2d_property_gravity_direction"></div>

[`Vector2`](class_vector2.md) **gravity_direction** = ``Vector2(0, 1)`` <div id="class_area2d_property_gravity_direction"></div>

- `void` **set_gravity_direction** ( value: [`Vector2`](class_vector2.md) )
- [`Vector2`](class_vector2.md) **get_gravity_direction** ( )

The area's gravity vector (not normalized).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_area2d_property_gravity_point"></div>

[`bool`](class_bool.md) **gravity_point** = ``false`` <div id="class_area2d_property_gravity_point"></div>

- `void` **set_gravity_is_point** ( value: [`bool`](class_bool.md) )
- [`bool`](class_bool.md) **is_gravity_a_point** ( )

If `true`, gravity is calculated from a point (set via [`gravity_point_center`](class_area2d.md#class_area2d_property_gravity_point_center)). See also [`gravity_space_override`](class_area2d.md#class_area2d_property_gravity_space_override).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_area2d_property_gravity_point_center"></div>

[`Vector2`](class_vector2.md) **gravity_point_center** = ``Vector2(0, 1)`` <div id="class_area2d_property_gravity_point_center"></div>

- `void` **set_gravity_point_center** ( value: [`Vector2`](class_vector2.md) )
- [`Vector2`](class_vector2.md) **get_gravity_point_center** ( )

If gravity is a point (see [`gravity_point`](class_area2d.md#class_area2d_property_gravity_point)), this will be the point of attraction.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_area2d_property_gravity_point_unit_distance"></div>

[`float`](class_float.md) **gravity_point_unit_distance** = ``0.0`` <div id="class_area2d_property_gravity_point_unit_distance"></div>

- `void` **set_gravity_point_unit_distance** ( value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_gravity_point_unit_distance** ( )

The distance at which the gravity strength is equal to [`gravity`](class_area2d.md#class_area2d_property_gravity). For example, on a planet 100 pixels in radius with a surface gravity of 4.0 px/s², set the [`gravity`](class_area2d.md#class_area2d_property_gravity) to 4.0 and the unit distance to 100.0. The gravity will have falloff according to the inverse square law, so in the example, at 200 pixels from the center the gravity will be 1.0 px/s² (twice the distance, 1/4th the gravity), at 50 pixels it will be 16.0 px/s² (half the distance, 4x the gravity), and so on.

The above is true only when the unit distance is a positive number. When this is set to 0.0, the gravity will be constant regardless of distance.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_area2d_property_gravity_space_override"></div>

[SpaceOverride](#enum_area2d_spaceoverride) **gravity_space_override** = ``0`` <div id="class_area2d_property_gravity_space_override"></div>

- `void` **set_gravity_space_override_mode** ( value: [SpaceOverride](#enum_area2d_spaceoverride) )
- [SpaceOverride](#enum_area2d_spaceoverride) **get_gravity_space_override_mode** ( )

Override mode for gravity calculations within this area. See [SpaceOverride](#enum_area2d_spaceoverride) for possible values.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_area2d_property_linear_damp"></div>

[`float`](class_float.md) **linear_damp** = ``0.1`` <div id="class_area2d_property_linear_damp"></div>

- `void` **set_linear_damp** ( value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_linear_damp** ( )

The rate at which objects stop moving in this area. Represents the linear velocity lost per second.

See [`ProjectSettings.physics/2d/default_linear_damp`](class_projectsettings.md#class_projectsettings_property_physics/2d/default_linear_damp) for more details about damping.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_area2d_property_linear_damp_space_override"></div>

[SpaceOverride](#enum_area2d_spaceoverride) **linear_damp_space_override** = ``0`` <div id="class_area2d_property_linear_damp_space_override"></div>

- `void` **set_linear_damp_space_override_mode** ( value: [SpaceOverride](#enum_area2d_spaceoverride) )
- [SpaceOverride](#enum_area2d_spaceoverride) **get_linear_damp_space_override_mode** ( )

Override mode for linear damping calculations within this area. See [SpaceOverride](#enum_area2d_spaceoverride) for possible values.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_area2d_property_monitorable"></div>

[`bool`](class_bool.md) **monitorable** = ``true`` <div id="class_area2d_property_monitorable"></div>

- `void` **set_monitorable** ( value: [`bool`](class_bool.md) )
- [`bool`](class_bool.md) **is_monitorable** ( )

If `true`, other monitoring areas can detect this area.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_area2d_property_monitoring"></div>

[`bool`](class_bool.md) **monitoring** = ``true`` <div id="class_area2d_property_monitoring"></div>

- `void` **set_monitoring** ( value: [`bool`](class_bool.md) )
- [`bool`](class_bool.md) **is_monitoring** ( )

If `true`, the area detects bodies or areas entering and exiting it.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_area2d_property_priority"></div>

[`int`](class_int.md) **priority** = ``0`` <div id="class_area2d_property_priority"></div>

- `void` **set_priority** ( value: [`int`](class_int.md) )
- [`int`](class_int.md) **get_priority** ( )

The area's priority. Higher priority areas are processed first. The [`World2D`](class_world2d.md)'s physics is always processed last, after all areas.

<!-- rst-class:: classref-section-separator -->

---

## 方法说明

<div id="_class_area2d_method_get_overlapping_areas"></div>

[Array](class_array.md) [`Area2D`](class_area2d.md) **get_overlapping_areas** ( ) const[^const]<div id="class_area2d_method_get_overlapping_areas"></div>

Returns a list of intersecting **Area2D** s. The overlapping area's [`CollisionObject2D.collision_layer`](class_collisionobject2d.md#class_collisionobject2d_property_collision_layer) must be part of this area's [`CollisionObject2D.collision_mask`](class_collisionobject2d.md#class_collisionobject2d_property_collision_mask) in order to be detected.

For performance reasons (collisions are all processed at the same time) this list is modified once during the physics step, not immediately after objects are moved. Consider using signals instead.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_area2d_method_get_overlapping_bodies"></div>

[Array](class_array.md) [`Node2D`](class_node2d.md) **get_overlapping_bodies** ( ) const[^const]<div id="class_area2d_method_get_overlapping_bodies"></div>

Returns a list of intersecting [`PhysicsBody2D`](class_physicsbody2d.md) s and [`TileMap`](class_tilemap.md) s. The overlapping body's [`CollisionObject2D.collision_layer`](class_collisionobject2d.md#class_collisionobject2d_property_collision_layer) must be part of this area's [`CollisionObject2D.collision_mask`](class_collisionobject2d.md#class_collisionobject2d_property_collision_mask) in order to be detected.

For performance reasons (collisions are all processed at the same time) this list is modified once during the physics step, not immediately after objects are moved. Consider using signals instead.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_area2d_method_has_overlapping_areas"></div>

[`bool`](class_bool.md) **has_overlapping_areas** ( ) const[^const]<div id="class_area2d_method_has_overlapping_areas"></div>

Returns `true` if intersecting any **Area2D** s, otherwise returns `false`. The overlapping area's [`CollisionObject2D.collision_layer`](class_collisionobject2d.md#class_collisionobject2d_property_collision_layer) must be part of this area's [`CollisionObject2D.collision_mask`](class_collisionobject2d.md#class_collisionobject2d_property_collision_mask) in order to be detected.

For performance reasons (collisions are all processed at the same time) the list of overlapping areas is modified once during the physics step, not immediately after objects are moved. Consider using signals instead.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_area2d_method_has_overlapping_bodies"></div>

[`bool`](class_bool.md) **has_overlapping_bodies** ( ) const[^const]<div id="class_area2d_method_has_overlapping_bodies"></div>

Returns `true` if intersecting any [`PhysicsBody2D`](class_physicsbody2d.md) s or [`TileMap`](class_tilemap.md) s, otherwise returns `false`. The overlapping body's [`CollisionObject2D.collision_layer`](class_collisionobject2d.md#class_collisionobject2d_property_collision_layer) must be part of this area's [`CollisionObject2D.collision_mask`](class_collisionobject2d.md#class_collisionobject2d_property_collision_mask) in order to be detected.

For performance reasons (collisions are all processed at the same time) the list of overlapping bodies is modified once during the physics step, not immediately after objects are moved. Consider using signals instead.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_area2d_method_overlaps_area"></div>

[`bool`](class_bool.md) **overlaps_area** ( area: [`Node`](class_node.md) ) const[^const]<div id="class_area2d_method_overlaps_area"></div>

Returns `true` if the given **Area2D** intersects or overlaps this **Area2D**, `false` otherwise.

 **Note:** The result of this test is not immediate after moving objects. For performance, the list of overlaps is updated once per frame and before the physics step. Consider using signals instead.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_area2d_method_overlaps_body"></div>

[`bool`](class_bool.md) **overlaps_body** ( body: [`Node`](class_node.md) ) const[^const]<div id="class_area2d_method_overlaps_body"></div>

Returns `true` if the given physics body intersects or overlaps this **Area2D**, `false` otherwise.

 **Note:** The result of this test is not immediate after moving objects. For performance, list of overlaps is updated once per frame and before the physics step. Consider using signals instead.

The `body` argument can either be a [`PhysicsBody2D`](class_physicsbody2d.md) or a [`TileMap`](class_tilemap.md) instance. While TileMaps are not physics bodies themselves, they register their tiles with collision shapes as a virtual physics body.

[^virtual]: 本方法通常需要用户覆盖才能生效。
[^const]: 本方法无副作用，不会修改该实例的任何成员变量。
[^vararg]: 本方法除了能接受在此处描述的参数外，还能够继续接受任意数量的参数。
[^constructor]: 本方法用于构造某个类型。
[^static]: 调用本方法无需实例，可直接使用类名进行调用。
[^operator]: 本方法描述的是使用本类型作为左操作数的有效运算符。
[^bitfield]: 这个值是由下列位标志构成位掩码的整数。
[^void]: 无返回值。
