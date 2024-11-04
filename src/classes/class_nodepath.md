<!-- ⚠ 请勿编辑本文件 ⚠ -->
<!-- 本文档使用脚本从 WeDot 引擎源码仓库生成。 -->
<!-- 生成脚本：https://github.com/WeDot-Engine/WeDot/tree/4.3/doc/tools/make_md.py； -->
<!-- 原文件：https://github.com/WeDot-Engine/WeDot/tree/4.3/doc/classes/NodePath.xml。 -->

<div id="_class_nodepath"></div>

# NodePath

A pre-parsed scene tree path.

## 描述

The **NodePath** built-in [`Variant`](class_variant.md) type represents a path to a node or property in a hierarchy of nodes. It is designed to be efficiently passed into many built-in methods (such as [`Node.get_node`](#class_node_method_get_node), [`Object.set_indexed`](#class_object_method_set_indexed), [`Tween.tween_property`](#class_tween_method_tween_property), etc.) without a hard dependence on the node or property they point to.

A node path is represented as a [`String`](class_string.md) composed of slash-separated (`/`) node names and colon-separated (`:`) property names (also called "subnames"). Similar to a filesystem path, `".."` and `"."` are special node names. They refer to the parent node and the current node, respectively.

The following examples are paths relative to the current node:

```

    ^"A"     # Points to the direct child A.
    ^"A/B"   # Points to A's child B.
    ^"."     # Points to the current node.
    ^".."    # Points to the parent node.
    ^"../C"  # Points to the sibling node C.
    ^"../.." # Points to the grandparent node.
```

A leading slash means the path is absolute, and begins from the [`SceneTree`](class_scenetree.md):

```

    ^"/root"            # Points to the SceneTree's root Window.
    ^"/root/Title"      # May point to the main scene's root node named "Title".
    ^"/root/Global"     # May point to an autoloaded node or scene named "Global".
```

Despite their name, node paths may also point to a property:

```

    ^":position"           # Points to this object's position.
    ^":position:x"         # Points to this object's position in the x axis.
    ^"Camera3D:rotation:y" # Points to the child Camera3D and its y rotation.
    ^"/root:size:x"        # Points to the root Window and its width.
```

In some situations, it's possible to omit the leading `:` when pointing to an object's property. As an example, this is the case with [`Object.set_indexed`](#class_object_method_set_indexed) and [`Tween.tween_property`](#class_tween_method_tween_property), as those methods call [`get_as_property_path`](#class_nodepath_method_get_as_property_path) under the hood. However, it's generally recommended to keep the `:` prefix.

Node paths cannot check whether they are valid and may point to nodes or properties that do not exist. Their meaning depends entirely on the context in which they're used.

You usually do not have to worry about the **NodePath** type, as strings are automatically converted to the type when necessary. There are still times when defining node paths is useful. For example, exported **NodePath** properties allow you to easily select any node within the currently edited scene. They are also automatically updated when moving, renaming or deleting nodes in the scene tree editor. See also [`@GDScript.@export_node_path`](#class_@gdscript_annotation_@export_node_path).

See also [`StringName`](class_stringname.md), which is a similar type designed for optimized strings.

 **Note:** In a boolean context, a **NodePath** will evaluate to `false` if it is empty (`NodePath("")`). Otherwise, a **NodePath** will always evaluate to `true`.







通过 C# 使用该 API 时会有显著不同，详见 :ref:`doc_c_sharp_differences`\ 。

## 构造函数

| [`NodePath`](class_nodepath.md) | [`NodePath`](#class_nodepath_constructor_nodepath) ( )                                       |
| [`NodePath`](class_nodepath.md) | [`NodePath`](#class_nodepath_constructor_nodepath) ( from: [`NodePath`](class_nodepath.md) ) |
| [`NodePath`](class_nodepath.md) | [`NodePath`](#class_nodepath_constructor_nodepath) ( from: [`String`](class_string.md) )     |

## 方法

| [`NodePath`](class_nodepath.md)     | [`get_as_property_path`](#class_nodepath_method_get_as_property_path) ( ) const[^const]                                         |
| [`StringName`](class_stringname.md) | [`get_concatenated_names`](#class_nodepath_method_get_concatenated_names) ( ) const[^const]                                     |
| [`StringName`](class_stringname.md) | [`get_concatenated_subnames`](#class_nodepath_method_get_concatenated_subnames) ( ) const[^const]                               |
| [`StringName`](class_stringname.md) | [`get_name`](#class_nodepath_method_get_name) ( idx: [`int`](class_int.md) ) const[^const]                                      |
| [`int`](class_int.md)               | [`get_name_count`](#class_nodepath_method_get_name_count) ( ) const[^const]                                                     |
| [`StringName`](class_stringname.md) | [`get_subname`](#class_nodepath_method_get_subname) ( idx: [`int`](class_int.md) ) const[^const]                                |
| [`int`](class_int.md)               | [`get_subname_count`](#class_nodepath_method_get_subname_count) ( ) const[^const]                                               |
| [`int`](class_int.md)               | [`hash`](#class_nodepath_method_hash) ( ) const[^const]                                                                         |
| [`bool`](class_bool.md)             | [`is_absolute`](#class_nodepath_method_is_absolute) ( ) const[^const]                                                           |
| [`bool`](class_bool.md)             | [`is_empty`](#class_nodepath_method_is_empty) ( ) const[^const]                                                                 |
| [`NodePath`](class_nodepath.md)     | [`slice`](#class_nodepath_method_slice) ( begin: [`int`](class_int.md), end: [`int`](class_int.md) = 2147483647 ) const[^const] |

## 运算符

| [`bool`](class_bool.md) | [`operator !=`](class_NodePath.md#operator_neq_NodePath) ( right: [`NodePath`](class_nodepath.md) ) |
| [`bool`](class_bool.md) | [`operator ==`](class_NodePath.md#operator_eq_NodePath) ( right: [`NodePath`](class_nodepath.md) )  |

<!-- rst-class:: classref-section-separator -->

---

## 构造函数说明

<div id="_class_nodepath_constructor_nodepath"></div>

[`NodePath`](class_nodepath.md) **NodePath** ( )<div id="class_nodepath_constructor_nodepath"></div>

Constructs an empty **NodePath**.

<!-- rst-class:: classref-item-separator -->

---

[`NodePath`](class_nodepath.md) **NodePath** ( from: [`NodePath`](class_nodepath.md) )

Constructs a **NodePath** as a copy of the given **NodePath**.

<!-- rst-class:: classref-item-separator -->

---

[`NodePath`](class_nodepath.md) **NodePath** ( from: [`String`](class_string.md) )

Constructs a **NodePath** from a [`String`](class_string.md). The created path is absolute if prefixed with a slash (see [`is_absolute`](#class_nodepath_method_is_absolute)).

The "subnames" optionally included after the path to the target node can point to properties, and can also be nested.

Examples of strings that could be node paths:

```

    # Points to the Sprite2D node.
    "Level/RigidBody2D/Sprite2D"
    
    # Points to the Sprite2D node and its "texture" resource.
    # get_node() would retrieve the Sprite2D, while get_node_and_resource()
    # would retrieve both the Sprite2D node and the "texture" resource.
    "Level/RigidBody2D/Sprite2D:texture"
    
    # Points to the Sprite2D node and its "position" property.
    "Level/RigidBody2D/Sprite2D:position"
    
    # Points to the Sprite2D node and the "x" component of its "position" property.
    "Level/RigidBody2D/Sprite2D:position:x"
    
    # Points to the RigidBody2D node as an absolute path beginning from the SceneTree.
    "/root/Level/RigidBody2D"
```

 **Note:** In GDScript, it's also possible to convert a constant string into a node path by prefixing it with `^`. `^"path/to/node"` is equivalent to `NodePath("path/to/node")`.



<!-- rst-class:: classref-section-separator -->

---

## 方法说明

<div id="_class_nodepath_method_get_as_property_path"></div>

[`NodePath`](class_nodepath.md) **get_as_property_path** ( ) const[^const]<div id="class_nodepath_method_get_as_property_path"></div>

Returns a copy of this node path with a colon character (`:`) prefixed, transforming it to a pure property path with no node names (relative to the current node).



```gdscript

    # node_path points to the "x" property of the child node named "position".
    var node_path = ^"position:x"
    
    # property_path points to the "position" in the "x" axis of this node.
    var property_path = node_path.get_as_property_path()
    print(property_path) # Prints ":position:x"
```

```csharp

    // nodePath points to the "x" property of the child node named "position".
    var nodePath = new NodePath("position:x");
    
    // propertyPath points to the "position" in the "x" axis of this node.
    NodePath propertyPath = nodePath.GetAsPropertyPath();
    GD.Print(propertyPath); // Prints ":position:x".
```







<!-- rst-class:: classref-item-separator -->

---

<div id="_class_nodepath_method_get_concatenated_names"></div>

[`StringName`](class_stringname.md) **get_concatenated_names** ( ) const[^const]<div id="class_nodepath_method_get_concatenated_names"></div>

Returns all node names concatenated with a slash character (`/`) as a single [`StringName`](class_stringname.md).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_nodepath_method_get_concatenated_subnames"></div>

[`StringName`](class_stringname.md) **get_concatenated_subnames** ( ) const[^const]<div id="class_nodepath_method_get_concatenated_subnames"></div>

Returns all property subnames concatenated with a colon character (`:`) as a single [`StringName`](class_stringname.md).



```gdscript

    var node_path = ^"Sprite2D:texture:resource_name"
    print(node_path.get_concatenated_subnames()) # Prints "texture:resource_name".
```

```csharp

    var nodePath = new NodePath("Sprite2D:texture:resource_name");
    GD.Print(nodePath.GetConcatenatedSubnames()); // Prints "texture:resource_name".
```







<!-- rst-class:: classref-item-separator -->

---

<div id="_class_nodepath_method_get_name"></div>

[`StringName`](class_stringname.md) **get_name** ( idx: [`int`](class_int.md) ) const[^const]<div id="class_nodepath_method_get_name"></div>

Returns the node name indicated by `idx`, starting from 0. If `idx` is out of bounds, an error is generated. See also [`get_subname_count`](#class_nodepath_method_get_subname_count) and [`get_name_count`](#class_nodepath_method_get_name_count).



```gdscript

    var sprite_path = NodePath("../RigidBody2D/Sprite2D")
    print(sprite_path.get_name(0)) # Prints "..".
    print(sprite_path.get_name(1)) # Prints "RigidBody2D".
    print(sprite_path.get_name(2)) # Prints "Sprite".
```

```csharp

    var spritePath = new NodePath("../RigidBody2D/Sprite2D");
    GD.Print(spritePath.GetName(0)); // Prints "..".
    GD.Print(spritePath.GetName(1)); // Prints "PathFollow2D".
    GD.Print(spritePath.GetName(2)); // Prints "Sprite".
```







<!-- rst-class:: classref-item-separator -->

---

<div id="_class_nodepath_method_get_name_count"></div>

[`int`](class_int.md) **get_name_count** ( ) const[^const]<div id="class_nodepath_method_get_name_count"></div>

Returns the number of node names in the path. Property subnames are not included.

For example, `"../RigidBody2D/Sprite2D:texture"` contains 3 node names.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_nodepath_method_get_subname"></div>

[`StringName`](class_stringname.md) **get_subname** ( idx: [`int`](class_int.md) ) const[^const]<div id="class_nodepath_method_get_subname"></div>

Returns the property name indicated by `idx`, starting from 0. If `idx` is out of bounds, an error is generated. See also [`get_subname_count`](#class_nodepath_method_get_subname_count).



```gdscript

    var path_to_name = NodePath("Sprite2D:texture:resource_name")
    print(path_to_name.get_subname(0)) # Prints "texture".
    print(path_to_name.get_subname(1)) # Prints "resource_name".
```

```csharp

    var pathToName = new NodePath("Sprite2D:texture:resource_name");
    GD.Print(pathToName.GetSubname(0)); // Prints "texture".
    GD.Print(pathToName.GetSubname(1)); // Prints "resource_name".
```







<!-- rst-class:: classref-item-separator -->

---

<div id="_class_nodepath_method_get_subname_count"></div>

[`int`](class_int.md) **get_subname_count** ( ) const[^const]<div id="class_nodepath_method_get_subname_count"></div>

Returns the number of property names ("subnames") in the path. Each subname in the node path is listed after a colon character (`:`).

For example, `"Level/RigidBody2D/Sprite2D:texture:resource_name"` contains 2 subnames.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_nodepath_method_hash"></div>

[`int`](class_int.md) **hash** ( ) const[^const]<div id="class_nodepath_method_hash"></div>

Returns the 32-bit hash value representing the node path's contents.

 **Note:** Node paths with equal hash values are *not* guaranteed to be the same, as a result of hash collisions. Node paths with different hash values are guaranteed to be different.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_nodepath_method_is_absolute"></div>

[`bool`](class_bool.md) **is_absolute** ( ) const[^const]<div id="class_nodepath_method_is_absolute"></div>

Returns `true` if the node path is absolute. Unlike a relative path, an absolute path is represented by a leading slash character (`/`) and always begins from the [`SceneTree`](class_scenetree.md). It can be used to reliably access nodes from the root node (e.g. `"/root/Global"` if an autoload named "Global" exists).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_nodepath_method_is_empty"></div>

[`bool`](class_bool.md) **is_empty** ( ) const[^const]<div id="class_nodepath_method_is_empty"></div>

Returns `true` if the node path has been constructed from an empty [`String`](class_string.md) (`""`).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_nodepath_method_slice"></div>

[`NodePath`](class_nodepath.md) **slice** ( begin: [`int`](class_int.md), end: [`int`](class_int.md) = 2147483647 ) const[^const]<div id="class_nodepath_method_slice"></div>

Returns the slice of the **NodePath**, from `begin` (inclusive) to `end` (exclusive), as a new **NodePath**.

The absolute value of `begin` and `end` will be clamped to the sum of [`get_name_count`](#class_nodepath_method_get_name_count) and [`get_subname_count`](#class_nodepath_method_get_subname_count), so the default value for `end` makes it slice to the end of the **NodePath** by default (i.e. `path.slice(1)` is a shorthand for `path.slice(1, path.get_name_count() + path.get_subname_count())`).

If either `begin` or `end` are negative, they will be relative to the end of the **NodePath** (i.e. `path.slice(0, -2)` is a shorthand for `path.slice(0, path.get_name_count() + path.get_subname_count() - 2)`).

<!-- rst-class:: classref-section-separator -->

---

## 运算符说明

<div id="_class_nodepath_operator_neq_nodepath"></div>

[`bool`](class_bool.md) **operator !=** ( right: [`NodePath`](class_nodepath.md) ) <div id="class_nodepath_operator_neq_nodepath"></div>

Returns `true` if two node paths are not equal.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_nodepath_operator_eq_nodepath"></div>

[`bool`](class_bool.md) **operator ==** ( right: [`NodePath`](class_nodepath.md) ) <div id="class_nodepath_operator_eq_nodepath"></div>

Returns `true` if two node paths are equal, that is, they are composed of the same node names and subnames in the same order.

[^virtual]: 本方法通常需要用户覆盖才能生效。
[^const]: 本方法无副作用，不会修改该实例的任何成员变量。
[^vararg]: 本方法除了能接受在此处描述的参数外，还能够继续接受任意数量的参数。
[^constructor]: 本方法用于构造某个类型。
[^static]: 调用本方法无需实例，可直接使用类名进行调用。
[^operator]: 本方法描述的是使用本类型作为左操作数的有效运算符。
[^bitfield]: 这个值是由下列位标志构成位掩码的整数。
[^void]: 无返回值。
