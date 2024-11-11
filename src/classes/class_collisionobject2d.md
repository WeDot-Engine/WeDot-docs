<!-- ⚠ 请勿编辑本文件 ⚠ -->
<!-- 本文档使用脚本从 WeDot 引擎源码仓库生成。 -->
<!-- 生成脚本：https://github.com/WeDot-Engine/WeDot/tree/master/doc/tools/make_md.py； -->
<!-- 原文件：https://github.com/WeDot-Engine/WeDot/tree/master/doc/classes/CollisionObject2D.xml。 -->

<div id="_class_collisionobject2d"></div>

# CollisionObject2D

**继承：** [`Node2D`](class_node2d.md) **<** [`CanvasItem`](class_canvasitem.md) **<** [`Node`](class_node.md) **<** [`Object`](class_object.md)

**派生：** [`Area2D`](class_area2d.md), [`PhysicsBody2D`](class_physicsbody2d.md)

Abstract base class for 2D physics objects.

## 描述

Abstract base class for 2D physics objects. **CollisionObject2D** can hold any number of [`Shape2D`](class_shape2d.md) s for collision. Each shape must be assigned to a *shape owner*. Shape owners are not nodes and do not appear in the editor, but are accessible through code using the `shape_owner_*` methods.

 **Note:** Only collisions between objects within the same canvas ([`Viewport`](class_viewport.md) canvas or [`CanvasLayer`](class_canvaslayer.md)) are supported. The behavior of collisions between objects in different canvases is undefined.

## 属性

|||
|:-:|:--|
| [`int`](class_int.md)                              | [`collision_layer`](class_collisionobject2d.md#class_collisionobject2d_property_collision_layer)       | ``1``    |
| [`int`](class_int.md)                              | [`collision_mask`](class_collisionobject2d.md#class_collisionobject2d_property_collision_mask)         | ``1``    |
| [`float`](class_float.md)                          | [`collision_priority`](class_collisionobject2d.md#class_collisionobject2d_property_collision_priority) | ``1.0``  |
| [DisableMode](#enum_collisionobject2d_disablemode) | [`disable_mode`](class_collisionobject2d.md#class_collisionobject2d_property_disable_mode)             | ``0``    |
| [`bool`](class_bool.md)                            | [`input_pickable`](class_collisionobject2d.md#class_collisionobject2d_property_input_pickable)         | ``true`` |

## 方法

|||
|:-:|:--|
| `void`                                          | [`_input_event`](class_collisionobject2d.md#class_collisionobject2d_private_method__input_event) ( viewport: [`Viewport`](class_viewport.md), event: [`InputEvent`](class_inputevent.md), shape_idx: [`int`](class_int.md) ) virtual[^virtual] |
| `void`                                          | [`_mouse_enter`](class_collisionobject2d.md#class_collisionobject2d_private_method__mouse_enter) ( ) virtual[^virtual]                                                                                                                         |
| `void`                                          | [`_mouse_exit`](class_collisionobject2d.md#class_collisionobject2d_private_method__mouse_exit) ( ) virtual[^virtual]                                                                                                                           |
| `void`                                          | [`_mouse_shape_enter`](class_collisionobject2d.md#class_collisionobject2d_private_method__mouse_shape_enter) ( shape_idx: [`int`](class_int.md) ) virtual[^virtual]                                                                            |
| `void`                                          | [`_mouse_shape_exit`](class_collisionobject2d.md#class_collisionobject2d_private_method__mouse_shape_exit) ( shape_idx: [`int`](class_int.md) ) virtual[^virtual]                                                                              |
| [`int`](class_int.md)                           | [`create_shape_owner`](class_collisionobject2d.md#class_collisionobject2d_method_create_shape_owner) ( owner: [`Object`](class_object.md) )                                                                                                    |
| [`bool`](class_bool.md)                         | [`get_collision_layer_value`](class_collisionobject2d.md#class_collisionobject2d_method_get_collision_layer_value) ( layer_number: [`int`](class_int.md) ) const[^const]                                                                       |
| [`bool`](class_bool.md)                         | [`get_collision_mask_value`](class_collisionobject2d.md#class_collisionobject2d_method_get_collision_mask_value) ( layer_number: [`int`](class_int.md) ) const[^const]                                                                         |
| [`RID`](class_rid.md)                           | [`get_rid`](class_collisionobject2d.md#class_collisionobject2d_method_get_rid) ( ) const[^const]                                                                                                                                               |
| [`float`](class_float.md)                       | [`get_shape_owner_one_way_collision_margin`](class_collisionobject2d.md#class_collisionobject2d_method_get_shape_owner_one_way_collision_margin) ( owner_id: [`int`](class_int.md) ) const[^const]                                             |
| [`PackedInt32Array`](class_packedint32array.md) | [`get_shape_owners`](class_collisionobject2d.md#class_collisionobject2d_method_get_shape_owners) ( )                                                                                                                                           |
| [`bool`](class_bool.md)                         | [`is_shape_owner_disabled`](class_collisionobject2d.md#class_collisionobject2d_method_is_shape_owner_disabled) ( owner_id: [`int`](class_int.md) ) const[^const]                                                                               |
| [`bool`](class_bool.md)                         | [`is_shape_owner_one_way_collision_enabled`](class_collisionobject2d.md#class_collisionobject2d_method_is_shape_owner_one_way_collision_enabled) ( owner_id: [`int`](class_int.md) ) const[^const]                                             |
| `void`                                          | [`remove_shape_owner`](class_collisionobject2d.md#class_collisionobject2d_method_remove_shape_owner) ( owner_id: [`int`](class_int.md) )                                                                                                       |
| `void`                                          | [`set_collision_layer_value`](class_collisionobject2d.md#class_collisionobject2d_method_set_collision_layer_value) ( layer_number: [`int`](class_int.md), value: [`bool`](class_bool.md) )                                                     |
| `void`                                          | [`set_collision_mask_value`](class_collisionobject2d.md#class_collisionobject2d_method_set_collision_mask_value) ( layer_number: [`int`](class_int.md), value: [`bool`](class_bool.md) )                                                       |
| [`int`](class_int.md)                           | [`shape_find_owner`](class_collisionobject2d.md#class_collisionobject2d_method_shape_find_owner) ( shape_index: [`int`](class_int.md) ) const[^const]                                                                                          |
| `void`                                          | [`shape_owner_add_shape`](class_collisionobject2d.md#class_collisionobject2d_method_shape_owner_add_shape) ( owner_id: [`int`](class_int.md), shape: [`Shape2D`](class_shape2d.md) )                                                           |
| `void`                                          | [`shape_owner_clear_shapes`](class_collisionobject2d.md#class_collisionobject2d_method_shape_owner_clear_shapes) ( owner_id: [`int`](class_int.md) )                                                                                           |
| [`Object`](class_object.md)                     | [`shape_owner_get_owner`](class_collisionobject2d.md#class_collisionobject2d_method_shape_owner_get_owner) ( owner_id: [`int`](class_int.md) ) const[^const]                                                                                   |
| [`Shape2D`](class_shape2d.md)                   | [`shape_owner_get_shape`](class_collisionobject2d.md#class_collisionobject2d_method_shape_owner_get_shape) ( owner_id: [`int`](class_int.md), shape_id: [`int`](class_int.md) ) const[^const]                                                  |
| [`int`](class_int.md)                           | [`shape_owner_get_shape_count`](class_collisionobject2d.md#class_collisionobject2d_method_shape_owner_get_shape_count) ( owner_id: [`int`](class_int.md) ) const[^const]                                                                       |
| [`int`](class_int.md)                           | [`shape_owner_get_shape_index`](class_collisionobject2d.md#class_collisionobject2d_method_shape_owner_get_shape_index) ( owner_id: [`int`](class_int.md), shape_id: [`int`](class_int.md) ) const[^const]                                      |
| [`Transform2D`](class_transform2d.md)           | [`shape_owner_get_transform`](class_collisionobject2d.md#class_collisionobject2d_method_shape_owner_get_transform) ( owner_id: [`int`](class_int.md) ) const[^const]                                                                           |
| `void`                                          | [`shape_owner_remove_shape`](class_collisionobject2d.md#class_collisionobject2d_method_shape_owner_remove_shape) ( owner_id: [`int`](class_int.md), shape_id: [`int`](class_int.md) )                                                          |
| `void`                                          | [`shape_owner_set_disabled`](class_collisionobject2d.md#class_collisionobject2d_method_shape_owner_set_disabled) ( owner_id: [`int`](class_int.md), disabled: [`bool`](class_bool.md) )                                                        |
| `void`                                          | [`shape_owner_set_one_way_collision`](class_collisionobject2d.md#class_collisionobject2d_method_shape_owner_set_one_way_collision) ( owner_id: [`int`](class_int.md), enable: [`bool`](class_bool.md) )                                        |
| `void`                                          | [`shape_owner_set_one_way_collision_margin`](class_collisionobject2d.md#class_collisionobject2d_method_shape_owner_set_one_way_collision_margin) ( owner_id: [`int`](class_int.md), margin: [`float`](class_float.md) )                        |
| `void`                                          | [`shape_owner_set_transform`](class_collisionobject2d.md#class_collisionobject2d_method_shape_owner_set_transform) ( owner_id: [`int`](class_int.md), transform: [`Transform2D`](class_transform2d.md) )                                       |

<!-- rst-class:: classref-section-separator -->

---

## 信号

<div id="_class_class_collisionobject2d_signal_input_event"></div>

**input_event** ( viewport: [`Node`](class_node.md), event: [`InputEvent`](class_inputevent.md), shape_idx: [`int`](class_int.md) ) <div id="class_collisionobject2d_signal_input_event"></div>

Emitted when an input event occurs. Requires [`input_pickable`](class_collisionobject2d.md#class_collisionobject2d_property_input_pickable) to be `true` and at least one [`collision_layer`](class_collisionobject2d.md#class_collisionobject2d_property_collision_layer) bit to be set. See [`_input_event`](class_collisionobject2d.md#class_collisionobject2d_private_method__input_event) for details.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_class_collisionobject2d_signal_mouse_entered"></div>

**mouse_entered** ( ) <div id="class_collisionobject2d_signal_mouse_entered"></div>

Emitted when the mouse pointer enters any of this object's shapes. Requires [`input_pickable`](class_collisionobject2d.md#class_collisionobject2d_property_input_pickable) to be `true` and at least one [`collision_layer`](class_collisionobject2d.md#class_collisionobject2d_property_collision_layer) bit to be set. Note that moving between different shapes within a single **CollisionObject2D** won't cause this signal to be emitted.

 **Note:** Due to the lack of continuous collision detection, this signal may not be emitted in the expected order if the mouse moves fast enough and the **CollisionObject2D**'s area is small. This signal may also not be emitted if another **CollisionObject2D** is overlapping the **CollisionObject2D** in question.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_class_collisionobject2d_signal_mouse_exited"></div>

**mouse_exited** ( ) <div id="class_collisionobject2d_signal_mouse_exited"></div>

Emitted when the mouse pointer exits all this object's shapes. Requires [`input_pickable`](class_collisionobject2d.md#class_collisionobject2d_property_input_pickable) to be `true` and at least one [`collision_layer`](class_collisionobject2d.md#class_collisionobject2d_property_collision_layer) bit to be set. Note that moving between different shapes within a single **CollisionObject2D** won't cause this signal to be emitted.

 **Note:** Due to the lack of continuous collision detection, this signal may not be emitted in the expected order if the mouse moves fast enough and the **CollisionObject2D**'s area is small. This signal may also not be emitted if another **CollisionObject2D** is overlapping the **CollisionObject2D** in question.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_class_collisionobject2d_signal_mouse_shape_entered"></div>

**mouse_shape_entered** ( shape_idx: [`int`](class_int.md) ) <div id="class_collisionobject2d_signal_mouse_shape_entered"></div>

Emitted when the mouse pointer enters any of this object's shapes or moves from one shape to another. `shape_idx` is the child index of the newly entered [`Shape2D`](class_shape2d.md). Requires [`input_pickable`](class_collisionobject2d.md#class_collisionobject2d_property_input_pickable) to be `true` and at least one [`collision_layer`](class_collisionobject2d.md#class_collisionobject2d_property_collision_layer) bit to be set.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_class_collisionobject2d_signal_mouse_shape_exited"></div>

**mouse_shape_exited** ( shape_idx: [`int`](class_int.md) ) <div id="class_collisionobject2d_signal_mouse_shape_exited"></div>

Emitted when the mouse pointer exits any of this object's shapes. `shape_idx` is the child index of the exited [`Shape2D`](class_shape2d.md). Requires [`input_pickable`](class_collisionobject2d.md#class_collisionobject2d_property_input_pickable) to be `true` and at least one [`collision_layer`](class_collisionobject2d.md#class_collisionobject2d_property_collision_layer) bit to be set.

<!-- rst-class:: classref-section-separator -->

---

## 枚举

<div id="_class_enum_collisionobject2d_disablemode"></div>

enum **DisableMode**: <div id="enum_collisionobject2d_disablemode"></div>

<div id="_class_collisionobject2d_constant_disable_mode_remove"></div>

[DisableMode](#enum_collisionobject2d_disablemode) **DISABLE_MODE_REMOVE** = ``0``

When [`Node.process_mode`](class_node.md#class_node_property_process_mode) is set to [`Node.PROCESS_MODE_DISABLED`](class_node.md#class_node_constant_process_mode_disabled), remove from the physics simulation to stop all physics interactions with this **CollisionObject2D**.

Automatically re-added to the physics simulation when the [`Node`](class_node.md) is processed again.

<div id="_class_collisionobject2d_constant_disable_mode_make_static"></div>

[DisableMode](#enum_collisionobject2d_disablemode) **DISABLE_MODE_MAKE_STATIC** = ``1``

When [`Node.process_mode`](class_node.md#class_node_property_process_mode) is set to [`Node.PROCESS_MODE_DISABLED`](class_node.md#class_node_constant_process_mode_disabled), make the body static. Doesn't affect [`Area2D`](class_area2d.md). [`PhysicsBody2D`](class_physicsbody2d.md) can't be affected by forces or other bodies while static.

Automatically set [`PhysicsBody2D`](class_physicsbody2d.md) back to its original mode when the [`Node`](class_node.md) is processed again.

<div id="_class_collisionobject2d_constant_disable_mode_keep_active"></div>

[DisableMode](#enum_collisionobject2d_disablemode) **DISABLE_MODE_KEEP_ACTIVE** = ``2``

When [`Node.process_mode`](class_node.md#class_node_property_process_mode) is set to [`Node.PROCESS_MODE_DISABLED`](class_node.md#class_node_constant_process_mode_disabled), do not affect the physics simulation.

<!-- rst-class:: classref-section-separator -->

---

## 属性说明

<div id="_class_collisionobject2d_property_collision_layer"></div>

[`int`](class_int.md) **collision_layer** = ``1`` <div id="class_collisionobject2d_property_collision_layer"></div>

- `void` **set_collision_layer** ( value: [`int`](class_int.md) )
- [`int`](class_int.md) **get_collision_layer** ( )

The physics layers this CollisionObject2D is in. Collision objects can exist in one or more of 32 different layers. See also [`collision_mask`](class_collisionobject2d.md#class_collisionobject2d_property_collision_mask).

 **Note:** Object A can detect a contact with object B only if object B is in any of the layers that object A scans. See [*Collision layers and masks*](../tutorials/physics/physics_introduction.md#collision-layers-and-masks) in the documentation for more information.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_collisionobject2d_property_collision_mask"></div>

[`int`](class_int.md) **collision_mask** = ``1`` <div id="class_collisionobject2d_property_collision_mask"></div>

- `void` **set_collision_mask** ( value: [`int`](class_int.md) )
- [`int`](class_int.md) **get_collision_mask** ( )

The physics layers this CollisionObject2D scans. Collision objects can scan one or more of 32 different layers. See also [`collision_layer`](class_collisionobject2d.md#class_collisionobject2d_property_collision_layer).

 **Note:** Object A can detect a contact with object B only if object B is in any of the layers that object A scans. See [*Collision layers and masks*](../tutorials/physics/physics_introduction.md#collision-layers-and-masks) in the documentation for more information.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_collisionobject2d_property_collision_priority"></div>

[`float`](class_float.md) **collision_priority** = ``1.0`` <div id="class_collisionobject2d_property_collision_priority"></div>

- `void` **set_collision_priority** ( value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_collision_priority** ( )

The priority used to solve colliding when occurring penetration. The higher the priority is, the lower the penetration into the object will be. This can for example be used to prevent the player from breaking through the boundaries of a level.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_collisionobject2d_property_disable_mode"></div>

[DisableMode](#enum_collisionobject2d_disablemode) **disable_mode** = ``0`` <div id="class_collisionobject2d_property_disable_mode"></div>

- `void` **set_disable_mode** ( value: [DisableMode](#enum_collisionobject2d_disablemode) )
- [DisableMode](#enum_collisionobject2d_disablemode) **get_disable_mode** ( )

Defines the behavior in physics when [`Node.process_mode`](class_node.md#class_node_property_process_mode) is set to [`Node.PROCESS_MODE_DISABLED`](class_node.md#class_node_constant_process_mode_disabled). See [DisableMode](#enum_collisionobject2d_disablemode) for more details about the different modes.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_collisionobject2d_property_input_pickable"></div>

[`bool`](class_bool.md) **input_pickable** = ``true`` <div id="class_collisionobject2d_property_input_pickable"></div>

- `void` **set_pickable** ( value: [`bool`](class_bool.md) )
- [`bool`](class_bool.md) **is_pickable** ( )

If `true`, this object is pickable. A pickable object can detect the mouse pointer entering/leaving, and if the mouse is inside it, report input events. Requires at least one [`collision_layer`](class_collisionobject2d.md#class_collisionobject2d_property_collision_layer) bit to be set.

<!-- rst-class:: classref-section-separator -->

---

## 方法说明

<div id="_class_collisionobject2d_private_method__input_event"></div>

`void` **_input_event** ( viewport: [`Viewport`](class_viewport.md), event: [`InputEvent`](class_inputevent.md), shape_idx: [`int`](class_int.md) ) virtual[^virtual]<div id="class_collisionobject2d_private_method__input_event"></div>

Accepts unhandled [`InputEvent`](class_inputevent.md) s. `shape_idx` is the child index of the clicked [`Shape2D`](class_shape2d.md). Connect to [`input_event`](class_collisionobject2d.md#class_collisionobject2d_signal_input_event) to easily pick up these events.

 **Note:** [`_input_event`](class_collisionobject2d.md#class_collisionobject2d_private_method__input_event) requires [`input_pickable`](class_collisionobject2d.md#class_collisionobject2d_property_input_pickable) to be `true` and at least one [`collision_layer`](class_collisionobject2d.md#class_collisionobject2d_property_collision_layer) bit to be set.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_collisionobject2d_private_method__mouse_enter"></div>

`void` **_mouse_enter** ( ) virtual[^virtual]<div id="class_collisionobject2d_private_method__mouse_enter"></div>

Called when the mouse pointer enters any of this object's shapes. Requires [`input_pickable`](class_collisionobject2d.md#class_collisionobject2d_property_input_pickable) to be `true` and at least one [`collision_layer`](class_collisionobject2d.md#class_collisionobject2d_property_collision_layer) bit to be set. Note that moving between different shapes within a single **CollisionObject2D** won't cause this function to be called.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_collisionobject2d_private_method__mouse_exit"></div>

`void` **_mouse_exit** ( ) virtual[^virtual]<div id="class_collisionobject2d_private_method__mouse_exit"></div>

Called when the mouse pointer exits all this object's shapes. Requires [`input_pickable`](class_collisionobject2d.md#class_collisionobject2d_property_input_pickable) to be `true` and at least one [`collision_layer`](class_collisionobject2d.md#class_collisionobject2d_property_collision_layer) bit to be set. Note that moving between different shapes within a single **CollisionObject2D** won't cause this function to be called.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_collisionobject2d_private_method__mouse_shape_enter"></div>

`void` **_mouse_shape_enter** ( shape_idx: [`int`](class_int.md) ) virtual[^virtual]<div id="class_collisionobject2d_private_method__mouse_shape_enter"></div>

Called when the mouse pointer enters any of this object's shapes or moves from one shape to another. `shape_idx` is the child index of the newly entered [`Shape2D`](class_shape2d.md). Requires [`input_pickable`](class_collisionobject2d.md#class_collisionobject2d_property_input_pickable) to be `true` and at least one [`collision_layer`](class_collisionobject2d.md#class_collisionobject2d_property_collision_layer) bit to be called.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_collisionobject2d_private_method__mouse_shape_exit"></div>

`void` **_mouse_shape_exit** ( shape_idx: [`int`](class_int.md) ) virtual[^virtual]<div id="class_collisionobject2d_private_method__mouse_shape_exit"></div>

Called when the mouse pointer exits any of this object's shapes. `shape_idx` is the child index of the exited [`Shape2D`](class_shape2d.md). Requires [`input_pickable`](class_collisionobject2d.md#class_collisionobject2d_property_input_pickable) to be `true` and at least one [`collision_layer`](class_collisionobject2d.md#class_collisionobject2d_property_collision_layer) bit to be called.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_collisionobject2d_method_create_shape_owner"></div>

[`int`](class_int.md) **create_shape_owner** ( owner: [`Object`](class_object.md) )<div id="class_collisionobject2d_method_create_shape_owner"></div>

Creates a new shape owner for the given object. Returns `owner_id` of the new owner for future reference.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_collisionobject2d_method_get_collision_layer_value"></div>

[`bool`](class_bool.md) **get_collision_layer_value** ( layer_number: [`int`](class_int.md) ) const[^const]<div id="class_collisionobject2d_method_get_collision_layer_value"></div>

Returns whether or not the specified layer of the [`collision_layer`](class_collisionobject2d.md#class_collisionobject2d_property_collision_layer) is enabled, given a `layer_number` between 1 and 32.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_collisionobject2d_method_get_collision_mask_value"></div>

[`bool`](class_bool.md) **get_collision_mask_value** ( layer_number: [`int`](class_int.md) ) const[^const]<div id="class_collisionobject2d_method_get_collision_mask_value"></div>

Returns whether or not the specified layer of the [`collision_mask`](class_collisionobject2d.md#class_collisionobject2d_property_collision_mask) is enabled, given a `layer_number` between 1 and 32.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_collisionobject2d_method_get_rid"></div>

[`RID`](class_rid.md) **get_rid** ( ) const[^const]<div id="class_collisionobject2d_method_get_rid"></div>

Returns the object's [`RID`](class_rid.md).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_collisionobject2d_method_get_shape_owner_one_way_collision_margin"></div>

[`float`](class_float.md) **get_shape_owner_one_way_collision_margin** ( owner_id: [`int`](class_int.md) ) const[^const]<div id="class_collisionobject2d_method_get_shape_owner_one_way_collision_margin"></div>

Returns the `one_way_collision_margin` of the shape owner identified by given `owner_id`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_collisionobject2d_method_get_shape_owners"></div>

[`PackedInt32Array`](class_packedint32array.md) **get_shape_owners** ( )<div id="class_collisionobject2d_method_get_shape_owners"></div>

Returns an [`Array`](class_array.md) of `owner_id` identifiers. You can use these ids in other methods that take `owner_id` as an argument.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_collisionobject2d_method_is_shape_owner_disabled"></div>

[`bool`](class_bool.md) **is_shape_owner_disabled** ( owner_id: [`int`](class_int.md) ) const[^const]<div id="class_collisionobject2d_method_is_shape_owner_disabled"></div>

If `true`, the shape owner and its shapes are disabled.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_collisionobject2d_method_is_shape_owner_one_way_collision_enabled"></div>

[`bool`](class_bool.md) **is_shape_owner_one_way_collision_enabled** ( owner_id: [`int`](class_int.md) ) const[^const]<div id="class_collisionobject2d_method_is_shape_owner_one_way_collision_enabled"></div>

Returns `true` if collisions for the shape owner originating from this **CollisionObject2D** will not be reported to collided with **CollisionObject2D** s.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_collisionobject2d_method_remove_shape_owner"></div>

`void` **remove_shape_owner** ( owner_id: [`int`](class_int.md) )<div id="class_collisionobject2d_method_remove_shape_owner"></div>

Removes the given shape owner.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_collisionobject2d_method_set_collision_layer_value"></div>

`void` **set_collision_layer_value** ( layer_number: [`int`](class_int.md), value: [`bool`](class_bool.md) )<div id="class_collisionobject2d_method_set_collision_layer_value"></div>

Based on `value`, enables or disables the specified layer in the [`collision_layer`](class_collisionobject2d.md#class_collisionobject2d_property_collision_layer), given a `layer_number` between 1 and 32.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_collisionobject2d_method_set_collision_mask_value"></div>

`void` **set_collision_mask_value** ( layer_number: [`int`](class_int.md), value: [`bool`](class_bool.md) )<div id="class_collisionobject2d_method_set_collision_mask_value"></div>

Based on `value`, enables or disables the specified layer in the [`collision_mask`](class_collisionobject2d.md#class_collisionobject2d_property_collision_mask), given a `layer_number` between 1 and 32.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_collisionobject2d_method_shape_find_owner"></div>

[`int`](class_int.md) **shape_find_owner** ( shape_index: [`int`](class_int.md) ) const[^const]<div id="class_collisionobject2d_method_shape_find_owner"></div>

Returns the `owner_id` of the given shape.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_collisionobject2d_method_shape_owner_add_shape"></div>

`void` **shape_owner_add_shape** ( owner_id: [`int`](class_int.md), shape: [`Shape2D`](class_shape2d.md) )<div id="class_collisionobject2d_method_shape_owner_add_shape"></div>

Adds a [`Shape2D`](class_shape2d.md) to the shape owner.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_collisionobject2d_method_shape_owner_clear_shapes"></div>

`void` **shape_owner_clear_shapes** ( owner_id: [`int`](class_int.md) )<div id="class_collisionobject2d_method_shape_owner_clear_shapes"></div>

Removes all shapes from the shape owner.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_collisionobject2d_method_shape_owner_get_owner"></div>

[`Object`](class_object.md) **shape_owner_get_owner** ( owner_id: [`int`](class_int.md) ) const[^const]<div id="class_collisionobject2d_method_shape_owner_get_owner"></div>

Returns the parent object of the given shape owner.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_collisionobject2d_method_shape_owner_get_shape"></div>

[`Shape2D`](class_shape2d.md) **shape_owner_get_shape** ( owner_id: [`int`](class_int.md), shape_id: [`int`](class_int.md) ) const[^const]<div id="class_collisionobject2d_method_shape_owner_get_shape"></div>

Returns the [`Shape2D`](class_shape2d.md) with the given ID from the given shape owner.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_collisionobject2d_method_shape_owner_get_shape_count"></div>

[`int`](class_int.md) **shape_owner_get_shape_count** ( owner_id: [`int`](class_int.md) ) const[^const]<div id="class_collisionobject2d_method_shape_owner_get_shape_count"></div>

Returns the number of shapes the given shape owner contains.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_collisionobject2d_method_shape_owner_get_shape_index"></div>

[`int`](class_int.md) **shape_owner_get_shape_index** ( owner_id: [`int`](class_int.md), shape_id: [`int`](class_int.md) ) const[^const]<div id="class_collisionobject2d_method_shape_owner_get_shape_index"></div>

Returns the child index of the [`Shape2D`](class_shape2d.md) with the given ID from the given shape owner.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_collisionobject2d_method_shape_owner_get_transform"></div>

[`Transform2D`](class_transform2d.md) **shape_owner_get_transform** ( owner_id: [`int`](class_int.md) ) const[^const]<div id="class_collisionobject2d_method_shape_owner_get_transform"></div>

Returns the shape owner's [`Transform2D`](class_transform2d.md).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_collisionobject2d_method_shape_owner_remove_shape"></div>

`void` **shape_owner_remove_shape** ( owner_id: [`int`](class_int.md), shape_id: [`int`](class_int.md) )<div id="class_collisionobject2d_method_shape_owner_remove_shape"></div>

Removes a shape from the given shape owner.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_collisionobject2d_method_shape_owner_set_disabled"></div>

`void` **shape_owner_set_disabled** ( owner_id: [`int`](class_int.md), disabled: [`bool`](class_bool.md) )<div id="class_collisionobject2d_method_shape_owner_set_disabled"></div>

If `true`, disables the given shape owner.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_collisionobject2d_method_shape_owner_set_one_way_collision"></div>

`void` **shape_owner_set_one_way_collision** ( owner_id: [`int`](class_int.md), enable: [`bool`](class_bool.md) )<div id="class_collisionobject2d_method_shape_owner_set_one_way_collision"></div>

If `enable` is `true`, collisions for the shape owner originating from this **CollisionObject2D** will not be reported to collided with **CollisionObject2D** s.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_collisionobject2d_method_shape_owner_set_one_way_collision_margin"></div>

`void` **shape_owner_set_one_way_collision_margin** ( owner_id: [`int`](class_int.md), margin: [`float`](class_float.md) )<div id="class_collisionobject2d_method_shape_owner_set_one_way_collision_margin"></div>

Sets the `one_way_collision_margin` of the shape owner identified by given `owner_id` to `margin` pixels.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_collisionobject2d_method_shape_owner_set_transform"></div>

`void` **shape_owner_set_transform** ( owner_id: [`int`](class_int.md), transform: [`Transform2D`](class_transform2d.md) )<div id="class_collisionobject2d_method_shape_owner_set_transform"></div>

Sets the [`Transform2D`](class_transform2d.md) of the given shape owner.

[^virtual]: 本方法通常需要用户覆盖才能生效。
[^const]: 本方法无副作用，不会修改该实例的任何成员变量。
[^vararg]: 本方法除了能接受在此处描述的参数外，还能够继续接受任意数量的参数。
[^constructor]: 本方法用于构造某个类型。
[^static]: 调用本方法无需实例，可直接使用类名进行调用。
[^operator]: 本方法描述的是使用本类型作为左操作数的有效运算符。
[^bitfield]: 这个值是由下列位标志构成位掩码的整数。
[^void]: 无返回值。
