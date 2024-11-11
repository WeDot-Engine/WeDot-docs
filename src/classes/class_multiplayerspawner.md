<!-- ⚠ 请勿编辑本文件 ⚠ -->
<!-- 本文档使用脚本从 WeDot 引擎源码仓库生成。 -->
<!-- 生成脚本：https://github.com/WeDot-Engine/WeDot/tree/master/doc/tools/make_md.py； -->
<!-- 原文件：https://github.com/WeDot-Engine/WeDot/tree/master/modules/multiplayer/doc_classes/MultiplayerSpawner.xml。 -->

<div id="_class_multiplayerspawner"></div>

# MultiplayerSpawner

**继承：** [`Node`](class_node.md) **<** [`Object`](class_object.md)

Automatically replicates spawnable nodes from the authority to other multiplayer peers.

## 描述

Spawnable scenes can be configured in the editor or through code (see [`add_spawnable_scene`](class_multiplayerspawner.md#class_multiplayerspawner_method_add_spawnable_scene)).

Also supports custom node spawns through [`spawn`](class_multiplayerspawner.md#class_multiplayerspawner_method_spawn), calling [`spawn_function`](class_multiplayerspawner.md#class_multiplayerspawner_property_spawn_function) on all peers.

Internally, **MultiplayerSpawner** uses [`MultiplayerAPI.object_configuration_add`](class_multiplayerapi.md#class_multiplayerapi_method_object_configuration_add) to notify spawns passing the spawned node as the `object` and itself as the `configuration`, and [`MultiplayerAPI.object_configuration_remove`](class_multiplayerapi.md#class_multiplayerapi_method_object_configuration_remove) to notify despawns in a similar way.

## 属性

|||
|:-:|:--|
| [`Callable`](class_callable.md) | [`spawn_function`](class_multiplayerspawner.md#class_multiplayerspawner_property_spawn_function) |                  |
| [`int`](class_int.md)           | [`spawn_limit`](class_multiplayerspawner.md#class_multiplayerspawner_property_spawn_limit)       | ``0``            |
| [`NodePath`](class_nodepath.md) | [`spawn_path`](class_multiplayerspawner.md#class_multiplayerspawner_property_spawn_path)         | ``NodePath("")`` |

## 方法

|||
|:-:|:--|
| `void`                      | [`add_spawnable_scene`](class_multiplayerspawner.md#class_multiplayerspawner_method_add_spawnable_scene) ( path: [`String`](class_string.md) )          |
| `void`                      | [`clear_spawnable_scenes`](class_multiplayerspawner.md#class_multiplayerspawner_method_clear_spawnable_scenes) ( )                                      |
| [`String`](class_string.md) | [`get_spawnable_scene`](class_multiplayerspawner.md#class_multiplayerspawner_method_get_spawnable_scene) ( index: [`int`](class_int.md) ) const[^const] |
| [`int`](class_int.md)       | [`get_spawnable_scene_count`](class_multiplayerspawner.md#class_multiplayerspawner_method_get_spawnable_scene_count) ( ) const[^const]                  |
| [`Node`](class_node.md)     | [`spawn`](class_multiplayerspawner.md#class_multiplayerspawner_method_spawn) ( data: [`Variant`](class_variant.md) = null )                             |

<!-- rst-class:: classref-section-separator -->

---

## 信号

<div id="_class_class_multiplayerspawner_signal_despawned"></div>

**despawned** ( node: [`Node`](class_node.md) ) <div id="class_multiplayerspawner_signal_despawned"></div>

Emitted when a spawnable scene or custom spawn was despawned by the multiplayer authority. Only called on remote peers.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_class_multiplayerspawner_signal_spawned"></div>

**spawned** ( node: [`Node`](class_node.md) ) <div id="class_multiplayerspawner_signal_spawned"></div>

Emitted when a spawnable scene or custom spawn was spawned by the multiplayer authority. Only called on remote peers.

<!-- rst-class:: classref-section-separator -->

---

## 属性说明

<div id="_class_multiplayerspawner_property_spawn_function"></div>

[`Callable`](class_callable.md) **spawn_function** <div id="class_multiplayerspawner_property_spawn_function"></div>

- `void` **set_spawn_function** ( value: [`Callable`](class_callable.md) )
- [`Callable`](class_callable.md) **get_spawn_function** ( )

Method called on all peers when a custom [`spawn`](class_multiplayerspawner.md#class_multiplayerspawner_method_spawn) is requested by the authority. Will receive the `data` parameter, and should return a [`Node`](class_node.md) that is not in the scene tree.

 **Note:** The returned node should **not** be added to the scene with [`Node.add_child`](class_node.md#class_node_method_add_child). This is done automatically.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_multiplayerspawner_property_spawn_limit"></div>

[`int`](class_int.md) **spawn_limit** = ``0`` <div id="class_multiplayerspawner_property_spawn_limit"></div>

- `void` **set_spawn_limit** ( value: [`int`](class_int.md) )
- [`int`](class_int.md) **get_spawn_limit** ( )

Maximum number of nodes allowed to be spawned by this spawner. Includes both spawnable scenes and custom spawns.

When set to `0` (the default), there is no limit.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_multiplayerspawner_property_spawn_path"></div>

[`NodePath`](class_nodepath.md) **spawn_path** = ``NodePath("")`` <div id="class_multiplayerspawner_property_spawn_path"></div>

- `void` **set_spawn_path** ( value: [`NodePath`](class_nodepath.md) )
- [`NodePath`](class_nodepath.md) **get_spawn_path** ( )

Path to the spawn root. Spawnable scenes that are added as direct children are replicated to other peers.

<!-- rst-class:: classref-section-separator -->

---

## 方法说明

<div id="_class_multiplayerspawner_method_add_spawnable_scene"></div>

`void` **add_spawnable_scene** ( path: [`String`](class_string.md) )<div id="class_multiplayerspawner_method_add_spawnable_scene"></div>

Adds a scene path to spawnable scenes, making it automatically replicated from the multiplayer authority to other peers when added as children of the node pointed by [`spawn_path`](class_multiplayerspawner.md#class_multiplayerspawner_property_spawn_path).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_multiplayerspawner_method_clear_spawnable_scenes"></div>

`void` **clear_spawnable_scenes** ( )<div id="class_multiplayerspawner_method_clear_spawnable_scenes"></div>

Clears all spawnable scenes. Does not despawn existing instances on remote peers.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_multiplayerspawner_method_get_spawnable_scene"></div>

[`String`](class_string.md) **get_spawnable_scene** ( index: [`int`](class_int.md) ) const[^const]<div id="class_multiplayerspawner_method_get_spawnable_scene"></div>

Returns the spawnable scene path by index.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_multiplayerspawner_method_get_spawnable_scene_count"></div>

[`int`](class_int.md) **get_spawnable_scene_count** ( ) const[^const]<div id="class_multiplayerspawner_method_get_spawnable_scene_count"></div>

Returns the count of spawnable scene paths.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_multiplayerspawner_method_spawn"></div>

[`Node`](class_node.md) **spawn** ( data: [`Variant`](class_variant.md) = null )<div id="class_multiplayerspawner_method_spawn"></div>

Requests a custom spawn, with `data` passed to [`spawn_function`](class_multiplayerspawner.md#class_multiplayerspawner_property_spawn_function) on all peers. Returns the locally spawned node instance already inside the scene tree, and added as a child of the node pointed by [`spawn_path`](class_multiplayerspawner.md#class_multiplayerspawner_property_spawn_path).

 **Note:** Spawnable scenes are spawned automatically. [`spawn`](class_multiplayerspawner.md#class_multiplayerspawner_method_spawn) is only needed for custom spawns.

[^virtual]: 本方法通常需要用户覆盖才能生效。
[^const]: 本方法无副作用，不会修改该实例的任何成员变量。
[^vararg]: 本方法除了能接受在此处描述的参数外，还能够继续接受任意数量的参数。
[^constructor]: 本方法用于构造某个类型。
[^static]: 调用本方法无需实例，可直接使用类名进行调用。
[^operator]: 本方法描述的是使用本类型作为左操作数的有效运算符。
[^bitfield]: 这个值是由下列位标志构成位掩码的整数。
[^void]: 无返回值。
