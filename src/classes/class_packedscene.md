<!-- ⚠ 请勿编辑本文件 ⚠ -->
<!-- 本文档使用脚本从 WeDot 引擎源码仓库生成。 -->
<!-- 生成脚本：https://github.com/WeDot-Engine/WeDot/tree/master/doc/tools/make_md.py； -->
<!-- 原文件：https://github.com/WeDot-Engine/WeDot/tree/master/doc/classes/PackedScene.xml。 -->

<div id="_class_packedscene"></div>

# PackedScene

**继承：** [`Resource`](class_resource.md) **<** [`RefCounted`](class_refcounted.md) **<** [`Object`](class_object.md)

An abstraction of a serialized scene.

## 描述

A simplified interface to a scene file. Provides access to operations and checks that can be performed on the scene resource itself.

Can be used to save a node to a file. When saving, the node as well as all the nodes it owns get saved (see [`Node.owner`](class_node.md#class_node_property_owner) property).

 **Note:** The node doesn't need to own itself.

 **Example of loading a saved scene:** 



```gdscript

    # Use load() instead of preload() if the path isn't known at compile-time.
    var scene = preload("res://scene.tscn").instantiate()
    # Add the node as a child of the node the script is attached to.
    add_child(scene)
```

```csharp

    // C# has no preload, so you have to always use ResourceLoader.Load<PackedScene>().
    var scene = ResourceLoader.Load<PackedScene>("res://scene.tscn").Instantiate();
    // Add the node as a child of the node the script is attached to.
    AddChild(scene);
```



 **Example of saving a node with different owners:** The following example creates 3 objects: [`Node2D`](class_node2d.md) (`node`), [`RigidBody2D`](class_rigidbody2d.md) (`body`) and [`CollisionObject2D`](class_collisionobject2d.md) (`collision`). `collision` is a child of `body` which is a child of `node`. Only `body` is owned by `node` and [`pack`](class_packedscene.md#class_packedscene_method_pack) will therefore only save those two nodes, but not `collision`.



```gdscript

    # Create the objects.
    var node = Node2D.new()
    var body = RigidBody2D.new()
    var collision = CollisionShape2D.new()
    
    # Create the object hierarchy.
    body.add_child(collision)
    node.add_child(body)
    
    # Change owner of `body`, but not of `collision`.
    body.owner = node
    var scene = PackedScene.new()
    
    # Only `node` and `body` are now packed.
    var result = scene.pack(node)
    if result == OK:
        var error = ResourceSaver.save(scene, "res://path/name.tscn")  # Or "user://..."
        if error != OK:
            push_error("An error occurred while saving the scene to disk.")
```

```csharp

    // Create the objects.
    var node = new Node2D();
    var body = new RigidBody2D();
    var collision = new CollisionShape2D();
    
    // Create the object hierarchy.
    body.AddChild(collision);
    node.AddChild(body);
    
    // Change owner of `body`, but not of `collision`.
    body.Owner = node;
    var scene = new PackedScene();
    
    // Only `node` and `body` are now packed.
    Error result = scene.Pack(node);
    if (result == Error.Ok)
    {
        Error error = ResourceSaver.Save(scene, "res://path/name.tscn"); // Or "user://..."
        if (error != Error.Ok)
        {
            GD.PushError("An error occurred while saving the scene to disk.");
        }
    }
```











## 方法

|||
|:-:|:--|
| [`bool`](class_bool.md)             | [`can_instantiate`](class_packedscene.md#class_packedscene_method_can_instantiate) ( ) const[^const]                                                        |
| [`SceneState`](class_scenestate.md) | [`get_state`](class_packedscene.md#class_packedscene_method_get_state) ( ) const[^const]                                                                    |
| [`Node`](class_node.md)             | [`instantiate`](class_packedscene.md#class_packedscene_method_instantiate) ( edit_state: [GenEditState](#enum_packedscene_geneditstate) = 0 ) const[^const] |
| [Error](#enum_@globalscope_error)   | [`pack`](class_packedscene.md#class_packedscene_method_pack) ( path: [`Node`](class_node.md) )                                                              |

<!-- rst-class:: classref-section-separator -->

---

## 枚举

<div id="_class_enum_packedscene_geneditstate"></div>

enum **GenEditState**: <div id="enum_packedscene_geneditstate"></div>

<div id="_class_packedscene_constant_gen_edit_state_disabled"></div>

[GenEditState](#enum_packedscene_geneditstate) **GEN_EDIT_STATE_DISABLED** = ``0``

If passed to [`instantiate`](class_packedscene.md#class_packedscene_method_instantiate), blocks edits to the scene state.

<div id="_class_packedscene_constant_gen_edit_state_instance"></div>

[GenEditState](#enum_packedscene_geneditstate) **GEN_EDIT_STATE_INSTANCE** = ``1``

If passed to [`instantiate`](class_packedscene.md#class_packedscene_method_instantiate), provides local scene resources to the local scene.

 **Note:** Only available in editor builds.

<div id="_class_packedscene_constant_gen_edit_state_main"></div>

[GenEditState](#enum_packedscene_geneditstate) **GEN_EDIT_STATE_MAIN** = ``2``

If passed to [`instantiate`](class_packedscene.md#class_packedscene_method_instantiate), provides local scene resources to the local scene. Only the main scene should receive the main edit state.

 **Note:** Only available in editor builds.

<div id="_class_packedscene_constant_gen_edit_state_main_inherited"></div>

[GenEditState](#enum_packedscene_geneditstate) **GEN_EDIT_STATE_MAIN_INHERITED** = ``3``

It's similar to [`GEN_EDIT_STATE_MAIN`](class_packedscene.md#class_packedscene_constant_gen_edit_state_main), but for the case where the scene is being instantiated to be the base of another one.

 **Note:** Only available in editor builds.

<!-- rst-class:: classref-section-separator -->

---

## 方法说明

<div id="_class_packedscene_method_can_instantiate"></div>

[`bool`](class_bool.md) **can_instantiate** ( ) const[^const]<div id="class_packedscene_method_can_instantiate"></div>

Returns `true` if the scene file has nodes.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_packedscene_method_get_state"></div>

[`SceneState`](class_scenestate.md) **get_state** ( ) const[^const]<div id="class_packedscene_method_get_state"></div>

Returns the [`SceneState`](class_scenestate.md) representing the scene file contents.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_packedscene_method_instantiate"></div>

[`Node`](class_node.md) **instantiate** ( edit_state: [GenEditState](#enum_packedscene_geneditstate) = 0 ) const[^const]<div id="class_packedscene_method_instantiate"></div>

Instantiates the scene's node hierarchy. Triggers child scene instantiation(s). Triggers a [`Node.NOTIFICATION_SCENE_INSTANTIATED`](class_node.md#class_node_constant_notification_scene_instantiated) notification on the root node.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_packedscene_method_pack"></div>

[Error](#enum_@globalscope_error) **pack** ( path: [`Node`](class_node.md) )<div id="class_packedscene_method_pack"></div>

Packs the `path` node, and all owned sub-nodes, into this **PackedScene**. Any existing data will be cleared. See [`Node.owner`](class_node.md#class_node_property_owner).

[^virtual]: 本方法通常需要用户覆盖才能生效。
[^const]: 本方法无副作用，不会修改该实例的任何成员变量。
[^vararg]: 本方法除了能接受在此处描述的参数外，还能够继续接受任意数量的参数。
[^constructor]: 本方法用于构造某个类型。
[^static]: 调用本方法无需实例，可直接使用类名进行调用。
[^operator]: 本方法描述的是使用本类型作为左操作数的有效运算符。
[^bitfield]: 这个值是由下列位标志构成位掩码的整数。
[^void]: 无返回值。
