<!-- ⚠ 请勿编辑本文件 ⚠ -->
<!-- 本文档使用脚本从 WeDot 引擎源码仓库生成。 -->
<!-- 生成脚本：https://github.com/WeDot-Engine/WeDot/tree/master/doc/tools/make_md.py； -->
<!-- 原文件：https://github.com/WeDot-Engine/WeDot/tree/master/doc/classes/EditorScenePostImport.xml。 -->

<div id="_class_editorscenepostimport"></div>

# EditorScenePostImport

**继承：** [`RefCounted`](class_refcounted.md) **<** [`Object`](class_object.md)

Post-processes scenes after import.

## 描述

Imported scenes can be automatically modified right after import by setting their **Custom Script** Import property to a `tool` script that inherits from this class.

The [`_post_import`](class_editorscenepostimport.md#class_editorscenepostimport_private_method__post_import) callback receives the imported scene's root node and returns the modified version of the scene. Usage example:



```gdscript

    @tool # Needed so it runs in editor.
    extends EditorScenePostImport
    
    # This sample changes all node names.
    # Called right after the scene is imported and gets the root node.
    func _post_import(scene):
        # Change all node names to "modified_[oldnodename]"
        iterate(scene)
        return scene # Remember to return the imported scene
    
    func iterate(node):
        if node != null:
            node.name = "modified_" + node.name
            for child in node.get_children():
                iterate(child)
```

```csharp

    using Godot;
    
    // This sample changes all node names.
    // Called right after the scene is imported and gets the root node.
    [Tool]
    public partial class NodeRenamer : EditorScenePostImport
    {
        public override GodotObject _PostImport(Node scene)
        {
            // Change all node names to "modified_[oldnodename]"
            Iterate(scene);
            return scene; // Remember to return the imported scene
        }
    
        public void Iterate(Node node)
        {
            if (node != null)
            {
                node.Name = $"modified_{node.Name}";
                foreach (Node child in node.GetChildren())
                {
                    Iterate(child);
                }
            }
        }
    }
```







## 方法

|||
|:-:|:--|
| [`Object`](class_object.md) | [`_post_import`](class_editorscenepostimport.md#class_editorscenepostimport_private_method__post_import) ( scene: [`Node`](class_node.md) ) virtual[^virtual] |
| [`String`](class_string.md) | [`get_source_file`](class_editorscenepostimport.md#class_editorscenepostimport_method_get_source_file) ( ) const[^const]                                      |

<!-- rst-class:: classref-section-separator -->

---

## 方法说明

<div id="_class_editorscenepostimport_private_method__post_import"></div>

[`Object`](class_object.md) **_post_import** ( scene: [`Node`](class_node.md) ) virtual[^virtual]<div id="class_editorscenepostimport_private_method__post_import"></div>

Called after the scene was imported. This method must return the modified version of the scene.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorscenepostimport_method_get_source_file"></div>

[`String`](class_string.md) **get_source_file** ( ) const[^const]<div id="class_editorscenepostimport_method_get_source_file"></div>

Returns the source file path which got imported (e.g. `res://scene.dae`).

[^virtual]: 本方法通常需要用户覆盖才能生效。
[^const]: 本方法无副作用，不会修改该实例的任何成员变量。
[^vararg]: 本方法除了能接受在此处描述的参数外，还能够继续接受任意数量的参数。
[^constructor]: 本方法用于构造某个类型。
[^static]: 调用本方法无需实例，可直接使用类名进行调用。
[^operator]: 本方法描述的是使用本类型作为左操作数的有效运算符。
[^bitfield]: 这个值是由下列位标志构成位掩码的整数。
[^void]: 无返回值。
