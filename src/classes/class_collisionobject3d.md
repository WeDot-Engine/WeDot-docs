<!-- ⚠ 请勿编辑本文件 ⚠ -->
<!-- 本文档使用脚本从 WeDot 引擎源码仓库生成。 -->
<!-- 生成脚本：https://github.com/WeDot-Engine/WeDot/tree/master/doc/tools/make_md.py； -->
<!-- 原文件：https://github.com/WeDot-Engine/WeDot/tree/master/doc/classes/CollisionObject3D.xml。 -->

<div id="_class_collisionobject3d"></div>

# CollisionObject3D

**继承：** [`Node3D`](class_node3d.md) **<** [`Node`](class_node.md) **<** [`Object`](class_object.md)

**派生：** [`Area3D`](class_area3d.md), [`PhysicsBody3D`](class_physicsbody3d.md)

Abstract base class for 3D physics objects.

## 描述

Abstract base class for 3D physics objects. **CollisionObject3D** can hold any number of [`Shape3D`](class_shape3d.md) s for collision. Each shape must be assigned to a *shape owner*. Shape owners are not nodes and do not appear in the editor, but are accessible through code using the `shape_owner_*` methods.

 **Warning:** With a non-uniform scale, this node will likely not behave as expected. It is advised to keep its scale the same on all axes and adjust its collision shape(s) instead.

## 属性

|||
|:-:|:--|
| [`int`](class_int.md)                              | [`collision_layer`](class_collisionobject3d.md#class_collisionobject3d_property_collision_layer)             | ``1``     |
| [`int`](class_int.md)                              | [`collision_mask`](class_collisionobject3d.md#class_collisionobject3d_property_collision_mask)               | ``1``     |
| [`float`](class_float.md)                          | [`collision_priority`](class_collisionobject3d.md#class_collisionobject3d_property_collision_priority)       | ``1.0``   |
| [DisableMode](#enum_collisionobject3d_disablemode) | [`disable_mode`](class_collisionobject3d.md#class_collisionobject3d_property_disable_mode)                   | ``0``     |
| [`bool`](class_bool.md)                            | [`input_capture_on_drag`](class_collisionobject3d.md#class_collisionobject3d_property_input_capture_on_drag) | ``false`` |
| [`bool`](class_bool.md)                            | [`input_ray_pickable`](class_collisionobject3d.md#class_collisionobject3d_property_input_ray_pickable)       | ``true``  |

## 方法

|||
|:-:|:--|
| `void`                                          | [`_input_event`](class_collisionobject3d.md#class_collisionobject3d_private_method__input_event) ( camera: [`Camera3D`](class_camera3d.md), event: [`InputEvent`](class_inputevent.md), event_position: [`Vector3`](class_vector3.md), normal: [`Vector3`](class_vector3.md), shape_idx: [`int`](class_int.md) ) virtual[^virtual] |
| `void`                                          | [`_mouse_enter`](class_collisionobject3d.md#class_collisionobject3d_private_method__mouse_enter) ( ) virtual[^virtual]                                                                                                                                                                                                             |
| `void`                                          | [`_mouse_exit`](class_collisionobject3d.md#class_collisionobject3d_private_method__mouse_exit) ( ) virtual[^virtual]                                                                                                                                                                                                               |
| [`int`](class_int.md)                           | [`create_shape_owner`](class_collisionobject3d.md#class_collisionobject3d_method_create_shape_owner) ( owner: [`Object`](class_object.md) )                                                                                                                                                                                        |
| [`bool`](class_bool.md)                         | [`get_collision_layer_value`](class_collisionobject3d.md#class_collisionobject3d_method_get_collision_layer_value) ( layer_number: [`int`](class_int.md) ) const[^const]                                                                                                                                                           |
| [`bool`](class_bool.md)                         | [`get_collision_mask_value`](class_collisionobject3d.md#class_collisionobject3d_method_get_collision_mask_value) ( layer_number: [`int`](class_int.md) ) const[^const]                                                                                                                                                             |
| [`RID`](class_rid.md)                           | [`get_rid`](class_collisionobject3d.md#class_collisionobject3d_method_get_rid) ( ) const[^const]                                                                                                                                                                                                                                   |
| [`PackedInt32Array`](class_packedint32array.md) | [`get_shape_owners`](class_collisionobject3d.md#class_collisionobject3d_method_get_shape_owners) ( )                                                                                                                                                                                                                               |
| [`bool`](class_bool.md)                         | [`is_shape_owner_disabled`](class_collisionobject3d.md#class_collisionobject3d_method_is_shape_owner_disabled) ( owner_id: [`int`](class_int.md) ) const[^const]                                                                                                                                                                   |
| `void`                                          | [`remove_shape_owner`](class_collisionobject3d.md#class_collisionobject3d_method_remove_shape_owner) ( owner_id: [`int`](class_int.md) )                                                                                                                                                                                           |
| `void`                                          | [`set_collision_layer_value`](class_collisionobject3d.md#class_collisionobject3d_method_set_collision_layer_value) ( layer_number: [`int`](class_int.md), value: [`bool`](class_bool.md) )                                                                                                                                         |
| `void`                                          | [`set_collision_mask_value`](class_collisionobject3d.md#class_collisionobject3d_method_set_collision_mask_value) ( layer_number: [`int`](class_int.md), value: [`bool`](class_bool.md) )                                                                                                                                           |
| [`int`](class_int.md)                           | [`shape_find_owner`](class_collisionobject3d.md#class_collisionobject3d_method_shape_find_owner) ( shape_index: [`int`](class_int.md) ) const[^const]                                                                                                                                                                              |
| `void`                                          | [`shape_owner_add_shape`](class_collisionobject3d.md#class_collisionobject3d_method_shape_owner_add_shape) ( owner_id: [`int`](class_int.md), shape: [`Shape3D`](class_shape3d.md) )                                                                                                                                               |
| `void`                                          | [`shape_owner_clear_shapes`](class_collisionobject3d.md#class_collisionobject3d_method_shape_owner_clear_shapes) ( owner_id: [`int`](class_int.md) )                                                                                                                                                                               |
| [`Object`](class_object.md)                     | [`shape_owner_get_owner`](class_collisionobject3d.md#class_collisionobject3d_method_shape_owner_get_owner) ( owner_id: [`int`](class_int.md) ) const[^const]                                                                                                                                                                       |
| [`Shape3D`](class_shape3d.md)                   | [`shape_owner_get_shape`](class_collisionobject3d.md#class_collisionobject3d_method_shape_owner_get_shape) ( owner_id: [`int`](class_int.md), shape_id: [`int`](class_int.md) ) const[^const]                                                                                                                                      |
| [`int`](class_int.md)                           | [`shape_owner_get_shape_count`](class_collisionobject3d.md#class_collisionobject3d_method_shape_owner_get_shape_count) ( owner_id: [`int`](class_int.md) ) const[^const]                                                                                                                                                           |
| [`int`](class_int.md)                           | [`shape_owner_get_shape_index`](class_collisionobject3d.md#class_collisionobject3d_method_shape_owner_get_shape_index) ( owner_id: [`int`](class_int.md), shape_id: [`int`](class_int.md) ) const[^const]                                                                                                                          |
| [`Transform3D`](class_transform3d.md)           | [`shape_owner_get_transform`](class_collisionobject3d.md#class_collisionobject3d_method_shape_owner_get_transform) ( owner_id: [`int`](class_int.md) ) const[^const]                                                                                                                                                               |
| `void`                                          | [`shape_owner_remove_shape`](class_collisionobject3d.md#class_collisionobject3d_method_shape_owner_remove_shape) ( owner_id: [`int`](class_int.md), shape_id: [`int`](class_int.md) )                                                                                                                                              |
| `void`                                          | [`shape_owner_set_disabled`](class_collisionobject3d.md#class_collisionobject3d_method_shape_owner_set_disabled) ( owner_id: [`int`](class_int.md), disabled: [`bool`](class_bool.md) )                                                                                                                                            |
| `void`                                          | [`shape_owner_set_transform`](class_collisionobject3d.md#class_collisionobject3d_method_shape_owner_set_transform) ( owner_id: [`int`](class_int.md), transform: [`Transform3D`](class_transform3d.md) )                                                                                                                           |

<!-- rst-class:: classref-section-separator -->

---

## 信号

<div id="_class_class_collisionobject3d_signal_input_event"></div>

**input_event** ( camera: [`Node`](class_node.md), event: [`InputEvent`](class_inputevent.md), event_position: [`Vector3`](class_vector3.md), normal: [`Vector3`](class_vector3.md), shape_idx: [`int`](class_int.md) ) <div id="class_collisionobject3d_signal_input_event"></div>

Emitted when the object receives an unhandled [`InputEvent`](class_inputevent.md). `event_position` is the location in world space of the mouse pointer on the surface of the shape with index `shape_idx` and `normal` is the normal vector of the surface at that point.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_class_collisionobject3d_signal_mouse_entered"></div>

**mouse_entered** ( ) <div id="class_collisionobject3d_signal_mouse_entered"></div>

Emitted when the mouse pointer enters any of this object's shapes. Requires [`input_ray_pickable`](class_collisionobject3d.md#class_collisionobject3d_property_input_ray_pickable) to be `true` and at least one [`collision_layer`](class_collisionobject3d.md#class_collisionobject3d_property_collision_layer) bit to be set.

 **Note:** Due to the lack of continuous collision detection, this signal may not be emitted in the expected order if the mouse moves fast enough and the **CollisionObject3D**'s area is small. This signal may also not be emitted if another **CollisionObject3D** is overlapping the **CollisionObject3D** in question.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_class_collisionobject3d_signal_mouse_exited"></div>

**mouse_exited** ( ) <div id="class_collisionobject3d_signal_mouse_exited"></div>

Emitted when the mouse pointer exits all this object's shapes. Requires [`input_ray_pickable`](class_collisionobject3d.md#class_collisionobject3d_property_input_ray_pickable) to be `true` and at least one [`collision_layer`](class_collisionobject3d.md#class_collisionobject3d_property_collision_layer) bit to be set.

 **Note:** Due to the lack of continuous collision detection, this signal may not be emitted in the expected order if the mouse moves fast enough and the **CollisionObject3D**'s area is small. This signal may also not be emitted if another **CollisionObject3D** is overlapping the **CollisionObject3D** in question.

<!-- rst-class:: classref-section-separator -->

---

## 枚举

<div id="_class_enum_collisionobject3d_disablemode"></div>

enum **DisableMode**: <div id="enum_collisionobject3d_disablemode"></div>

<div id="_class_collisionobject3d_constant_disable_mode_remove"></div>

[DisableMode](#enum_collisionobject3d_disablemode) **DISABLE_MODE_REMOVE** = ``0``

When [`Node.process_mode`](class_node.md#class_node_property_process_mode) is set to [`Node.PROCESS_MODE_DISABLED`](class_node.md#class_node_constant_process_mode_disabled), remove from the physics simulation to stop all physics interactions with this **CollisionObject3D**.

Automatically re-added to the physics simulation when the [`Node`](class_node.md) is processed again.

<div id="_class_collisionobject3d_constant_disable_mode_make_static"></div>

[DisableMode](#enum_collisionobject3d_disablemode) **DISABLE_MODE_MAKE_STATIC** = ``1``

When [`Node.process_mode`](class_node.md#class_node_property_process_mode) is set to [`Node.PROCESS_MODE_DISABLED`](class_node.md#class_node_constant_process_mode_disabled), make the body static. Doesn't affect [`Area3D`](class_area3d.md). [`PhysicsBody3D`](class_physicsbody3d.md) can't be affected by forces or other bodies while static.

Automatically set [`PhysicsBody3D`](class_physicsbody3d.md) back to its original mode when the [`Node`](class_node.md) is processed again.

<div id="_class_collisionobject3d_constant_disable_mode_keep_active"></div>

[DisableMode](#enum_collisionobject3d_disablemode) **DISABLE_MODE_KEEP_ACTIVE** = ``2``

When [`Node.process_mode`](class_node.md#class_node_property_process_mode) is set to [`Node.PROCESS_MODE_DISABLED`](class_node.md#class_node_constant_process_mode_disabled), do not affect the physics simulation.

<!-- rst-class:: classref-section-separator -->

---

## 属性说明

<div id="_class_collisionobject3d_property_collision_layer"></div>

[`int`](class_int.md) **collision_layer** = ``1`` <div id="class_collisionobject3d_property_collision_layer"></div>

- `void` **set_collision_layer** ( value: [`int`](class_int.md) )
- [`int`](class_int.md) **get_collision_layer** ( )

The physics layers this CollisionObject3D **is in**. Collision objects can exist in one or more of 32 different layers. See also [`collision_mask`](class_collisionobject3d.md#class_collisionobject3d_property_collision_mask).

 **Note:** Object A can detect a contact with object B only if object B is in any of the layers that object A scans. See [*Collision layers and masks*](../tutorials/physics/physics_introduction.md#collision-layers-and-masks) in the documentation for more information.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_collisionobject3d_property_collision_mask"></div>

[`int`](class_int.md) **collision_mask** = ``1`` <div id="class_collisionobject3d_property_collision_mask"></div>

- `void` **set_collision_mask** ( value: [`int`](class_int.md) )
- [`int`](class_int.md) **get_collision_mask** ( )

The physics layers this CollisionObject3D **scans**. Collision objects can scan one or more of 32 different layers. See also [`collision_layer`](class_collisionobject3d.md#class_collisionobject3d_property_collision_layer).

 **Note:** Object A can detect a contact with object B only if object B is in any of the layers that object A scans. See [*Collision layers and masks*](../tutorials/physics/physics_introduction.md#collision-layers-and-masks) in the documentation for more information.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_collisionobject3d_property_collision_priority"></div>

[`float`](class_float.md) **collision_priority** = ``1.0`` <div id="class_collisionobject3d_property_collision_priority"></div>

- `void` **set_collision_priority** ( value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_collision_priority** ( )

The priority used to solve colliding when occurring penetration. The higher the priority is, the lower the penetration into the object will be. This can for example be used to prevent the player from breaking through the boundaries of a level.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_collisionobject3d_property_disable_mode"></div>

[DisableMode](#enum_collisionobject3d_disablemode) **disable_mode** = ``0`` <div id="class_collisionobject3d_property_disable_mode"></div>

- `void` **set_disable_mode** ( value: [DisableMode](#enum_collisionobject3d_disablemode) )
- [DisableMode](#enum_collisionobject3d_disablemode) **get_disable_mode** ( )

Defines the behavior in physics when [`Node.process_mode`](class_node.md#class_node_property_process_mode) is set to [`Node.PROCESS_MODE_DISABLED`](class_node.md#class_node_constant_process_mode_disabled). See [DisableMode](#enum_collisionobject3d_disablemode) for more details about the different modes.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_collisionobject3d_property_input_capture_on_drag"></div>

[`bool`](class_bool.md) **input_capture_on_drag** = ``false`` <div id="class_collisionobject3d_property_input_capture_on_drag"></div>

- `void` **set_capture_input_on_drag** ( value: [`bool`](class_bool.md) )
- [`bool`](class_bool.md) **get_capture_input_on_drag** ( )

If `true`, the **CollisionObject3D** will continue to receive input events as the mouse is dragged across its shapes.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_collisionobject3d_property_input_ray_pickable"></div>

[`bool`](class_bool.md) **input_ray_pickable** = ``true`` <div id="class_collisionobject3d_property_input_ray_pickable"></div>

- `void` **set_ray_pickable** ( value: [`bool`](class_bool.md) )
- [`bool`](class_bool.md) **is_ray_pickable** ( )

If `true`, this object is pickable. A pickable object can detect the mouse pointer entering/leaving, and if the mouse is inside it, report input events. Requires at least one [`collision_layer`](class_collisionobject3d.md#class_collisionobject3d_property_collision_layer) bit to be set.

<!-- rst-class:: classref-section-separator -->

---

## 方法说明

<div id="_class_collisionobject3d_private_method__input_event"></div>

`void` **_input_event** ( camera: [`Camera3D`](class_camera3d.md), event: [`InputEvent`](class_inputevent.md), event_position: [`Vector3`](class_vector3.md), normal: [`Vector3`](class_vector3.md), shape_idx: [`int`](class_int.md) ) virtual[^virtual]<div id="class_collisionobject3d_private_method__input_event"></div>

Receives unhandled [`InputEvent`](class_inputevent.md) s. `event_position` is the location in world space of the mouse pointer on the surface of the shape with index `shape_idx` and `normal` is the normal vector of the surface at that point. Connect to the [`input_event`](class_collisionobject3d.md#class_collisionobject3d_signal_input_event) signal to easily pick up these events.

 **Note:** [`_input_event`](class_collisionobject3d.md#class_collisionobject3d_private_method__input_event) requires [`input_ray_pickable`](class_collisionobject3d.md#class_collisionobject3d_property_input_ray_pickable) to be `true` and at least one [`collision_layer`](class_collisionobject3d.md#class_collisionobject3d_property_collision_layer) bit to be set.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_collisionobject3d_private_method__mouse_enter"></div>

`void` **_mouse_enter** ( ) virtual[^virtual]<div id="class_collisionobject3d_private_method__mouse_enter"></div>

Called when the mouse pointer enters any of this object's shapes. Requires [`input_ray_pickable`](class_collisionobject3d.md#class_collisionobject3d_property_input_ray_pickable) to be `true` and at least one [`collision_layer`](class_collisionobject3d.md#class_collisionobject3d_property_collision_layer) bit to be set. Note that moving between different shapes within a single **CollisionObject3D** won't cause this function to be called.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_collisionobject3d_private_method__mouse_exit"></div>

`void` **_mouse_exit** ( ) virtual[^virtual]<div id="class_collisionobject3d_private_method__mouse_exit"></div>

Called when the mouse pointer exits all this object's shapes. Requires [`input_ray_pickable`](class_collisionobject3d.md#class_collisionobject3d_property_input_ray_pickable) to be `true` and at least one [`collision_layer`](class_collisionobject3d.md#class_collisionobject3d_property_collision_layer) bit to be set. Note that moving between different shapes within a single **CollisionObject3D** won't cause this function to be called.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_collisionobject3d_method_create_shape_owner"></div>

[`int`](class_int.md) **create_shape_owner** ( owner: [`Object`](class_object.md) )<div id="class_collisionobject3d_method_create_shape_owner"></div>

Creates a new shape owner for the given object. Returns `owner_id` of the new owner for future reference.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_collisionobject3d_method_get_collision_layer_value"></div>

[`bool`](class_bool.md) **get_collision_layer_value** ( layer_number: [`int`](class_int.md) ) const[^const]<div id="class_collisionobject3d_method_get_collision_layer_value"></div>

Returns whether or not the specified layer of the [`collision_layer`](class_collisionobject3d.md#class_collisionobject3d_property_collision_layer) is enabled, given a `layer_number` between 1 and 32.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_collisionobject3d_method_get_collision_mask_value"></div>

[`bool`](class_bool.md) **get_collision_mask_value** ( layer_number: [`int`](class_int.md) ) const[^const]<div id="class_collisionobject3d_method_get_collision_mask_value"></div>

Returns whether or not the specified layer of the [`collision_mask`](class_collisionobject3d.md#class_collisionobject3d_property_collision_mask) is enabled, given a `layer_number` between 1 and 32.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_collisionobject3d_method_get_rid"></div>

[`RID`](class_rid.md) **get_rid** ( ) const[^const]<div id="class_collisionobject3d_method_get_rid"></div>

Returns the object's [`RID`](class_rid.md).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_collisionobject3d_method_get_shape_owners"></div>

[`PackedInt32Array`](class_packedint32array.md) **get_shape_owners** ( )<div id="class_collisionobject3d_method_get_shape_owners"></div>

Returns an [`Array`](class_array.md) of `owner_id` identifiers. You can use these ids in other methods that take `owner_id` as an argument.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_collisionobject3d_method_is_shape_owner_disabled"></div>

[`bool`](class_bool.md) **is_shape_owner_disabled** ( owner_id: [`int`](class_int.md) ) const[^const]<div id="class_collisionobject3d_method_is_shape_owner_disabled"></div>

If `true`, the shape owner and its shapes are disabled.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_collisionobject3d_method_remove_shape_owner"></div>

`void` **remove_shape_owner** ( owner_id: [`int`](class_int.md) )<div id="class_collisionobject3d_method_remove_shape_owner"></div>

Removes the given shape owner.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_collisionobject3d_method_set_collision_layer_value"></div>

`void` **set_collision_layer_value** ( layer_number: [`int`](class_int.md), value: [`bool`](class_bool.md) )<div id="class_collisionobject3d_method_set_collision_layer_value"></div>

Based on `value`, enables or disables the specified layer in the [`collision_layer`](class_collisionobject3d.md#class_collisionobject3d_property_collision_layer), given a `layer_number` between 1 and 32.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_collisionobject3d_method_set_collision_mask_value"></div>

`void` **set_collision_mask_value** ( layer_number: [`int`](class_int.md), value: [`bool`](class_bool.md) )<div id="class_collisionobject3d_method_set_collision_mask_value"></div>

Based on `value`, enables or disables the specified layer in the [`collision_mask`](class_collisionobject3d.md#class_collisionobject3d_property_collision_mask), given a `layer_number` between 1 and 32.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_collisionobject3d_method_shape_find_owner"></div>

[`int`](class_int.md) **shape_find_owner** ( shape_index: [`int`](class_int.md) ) const[^const]<div id="class_collisionobject3d_method_shape_find_owner"></div>

Returns the `owner_id` of the given shape.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_collisionobject3d_method_shape_owner_add_shape"></div>

`void` **shape_owner_add_shape** ( owner_id: [`int`](class_int.md), shape: [`Shape3D`](class_shape3d.md) )<div id="class_collisionobject3d_method_shape_owner_add_shape"></div>

Adds a [`Shape3D`](class_shape3d.md) to the shape owner.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_collisionobject3d_method_shape_owner_clear_shapes"></div>

`void` **shape_owner_clear_shapes** ( owner_id: [`int`](class_int.md) )<div id="class_collisionobject3d_method_shape_owner_clear_shapes"></div>

Removes all shapes from the shape owner.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_collisionobject3d_method_shape_owner_get_owner"></div>

[`Object`](class_object.md) **shape_owner_get_owner** ( owner_id: [`int`](class_int.md) ) const[^const]<div id="class_collisionobject3d_method_shape_owner_get_owner"></div>

Returns the parent object of the given shape owner.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_collisionobject3d_method_shape_owner_get_shape"></div>

[`Shape3D`](class_shape3d.md) **shape_owner_get_shape** ( owner_id: [`int`](class_int.md), shape_id: [`int`](class_int.md) ) const[^const]<div id="class_collisionobject3d_method_shape_owner_get_shape"></div>

Returns the [`Shape3D`](class_shape3d.md) with the given ID from the given shape owner.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_collisionobject3d_method_shape_owner_get_shape_count"></div>

[`int`](class_int.md) **shape_owner_get_shape_count** ( owner_id: [`int`](class_int.md) ) const[^const]<div id="class_collisionobject3d_method_shape_owner_get_shape_count"></div>

Returns the number of shapes the given shape owner contains.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_collisionobject3d_method_shape_owner_get_shape_index"></div>

[`int`](class_int.md) **shape_owner_get_shape_index** ( owner_id: [`int`](class_int.md), shape_id: [`int`](class_int.md) ) const[^const]<div id="class_collisionobject3d_method_shape_owner_get_shape_index"></div>

Returns the child index of the [`Shape3D`](class_shape3d.md) with the given ID from the given shape owner.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_collisionobject3d_method_shape_owner_get_transform"></div>

[`Transform3D`](class_transform3d.md) **shape_owner_get_transform** ( owner_id: [`int`](class_int.md) ) const[^const]<div id="class_collisionobject3d_method_shape_owner_get_transform"></div>

Returns the shape owner's [`Transform3D`](class_transform3d.md).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_collisionobject3d_method_shape_owner_remove_shape"></div>

`void` **shape_owner_remove_shape** ( owner_id: [`int`](class_int.md), shape_id: [`int`](class_int.md) )<div id="class_collisionobject3d_method_shape_owner_remove_shape"></div>

Removes a shape from the given shape owner.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_collisionobject3d_method_shape_owner_set_disabled"></div>

`void` **shape_owner_set_disabled** ( owner_id: [`int`](class_int.md), disabled: [`bool`](class_bool.md) )<div id="class_collisionobject3d_method_shape_owner_set_disabled"></div>

If `true`, disables the given shape owner.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_collisionobject3d_method_shape_owner_set_transform"></div>

`void` **shape_owner_set_transform** ( owner_id: [`int`](class_int.md), transform: [`Transform3D`](class_transform3d.md) )<div id="class_collisionobject3d_method_shape_owner_set_transform"></div>

Sets the [`Transform3D`](class_transform3d.md) of the given shape owner.

[^virtual]: 本方法通常需要用户覆盖才能生效。
[^const]: 本方法无副作用，不会修改该实例的任何成员变量。
[^vararg]: 本方法除了能接受在此处描述的参数外，还能够继续接受任意数量的参数。
[^constructor]: 本方法用于构造某个类型。
[^static]: 调用本方法无需实例，可直接使用类名进行调用。
[^operator]: 本方法描述的是使用本类型作为左操作数的有效运算符。
[^bitfield]: 这个值是由下列位标志构成位掩码的整数。
[^void]: 无返回值。
