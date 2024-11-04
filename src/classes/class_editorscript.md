<!-- ⚠ 请勿编辑本文件 ⚠ -->
<!-- 本文档使用脚本从 WeDot 引擎源码仓库生成。 -->
<!-- 生成脚本：https://github.com/WeDot-Engine/WeDot/tree/4.3/doc/tools/make_md.py； -->
<!-- 原文件：https://github.com/WeDot-Engine/WeDot/tree/4.3/doc/classes/EditorScript.xml。 -->

<div id="_class_editorscript"></div>

# EditorScript

**继承：** [`RefCounted`](class_refcounted.md) **<** [`Object`](class_object.md)

Base script that can be used to add extension functions to the editor.

## 描述

Scripts extending this class and implementing its [`_run`](#class_editorscript_private_method__run) method can be executed from the Script Editor's **File > Run** menu option (or by pressing <i class="fa fa-gamepad"></i>`Ctrl + Shift + X`) while the editor is running. This is useful for adding custom in-editor functionality to Godot. For more complex additions, consider using [`EditorPlugin`](class_editorplugin.md) s instead.

 **Note:** Extending scripts need to have `tool` mode enabled.

 **Example script:** 



```gdscript

    @tool
    extends EditorScript
    
    func _run():
        print("Hello from the Godot Editor!")
```

```csharp

    using Godot;
    
    [Tool]
    public partial class HelloEditor : EditorScript
    {
        public override void _Run()
        {
            GD.Print("Hello from the Godot Editor!");
        }
    }
```



 **Note:** The script is run in the Editor context, which means the output is visible in the console window started with the Editor (stdout) instead of the usual Godot **Output** dock.

 **Note:** EditorScript is [`RefCounted`](class_refcounted.md), meaning it is destroyed when nothing references it. This can cause errors during asynchronous operations if there are no references to the script.





## 方法

| `void`                                        | [`_run`](#class_editorscript_private_method__run) ( ) virtual[^virtual]                       |
| `void`                                        | [`add_root_node`](#class_editorscript_method_add_root_node) ( node: [`Node`](class_node.md) ) |
| [`EditorInterface`](class_editorinterface.md) | [`get_editor_interface`](#class_editorscript_method_get_editor_interface) ( ) const[^const]   |
| [`Node`](class_node.md)                       | [`get_scene`](#class_editorscript_method_get_scene) ( ) const[^const]                         |

<!-- rst-class:: classref-section-separator -->

---

## 方法说明

<div id="_class_editorscript_private_method__run"></div>

`void` **_run** ( ) virtual[^virtual]<div id="class_editorscript_private_method__run"></div>

This method is executed by the Editor when **File > Run** is used.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorscript_method_add_root_node"></div>

`void` **add_root_node** ( node: [`Node`](class_node.md) )<div id="class_editorscript_method_add_root_node"></div>

Makes `node` root of the currently opened scene. Only works if the scene is empty. If the `node` is a scene instance, an inheriting scene will be created.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorscript_method_get_editor_interface"></div>

[`EditorInterface`](class_editorinterface.md) **get_editor_interface** ( ) const[^const]<div id="class_editorscript_method_get_editor_interface"></div>

**已弃用：** [`EditorInterface`](class_editorinterface.md) is a global singleton and can be accessed directly by its name.

Returns the [`EditorInterface`](class_editorinterface.md) singleton instance.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorscript_method_get_scene"></div>

[`Node`](class_node.md) **get_scene** ( ) const[^const]<div id="class_editorscript_method_get_scene"></div>

Returns the edited (current) scene's root [`Node`](class_node.md). Equivalent of [`EditorInterface.get_edited_scene_root`](#class_editorinterface_method_get_edited_scene_root).

[^virtual]: 本方法通常需要用户覆盖才能生效。
[^const]: 本方法无副作用，不会修改该实例的任何成员变量。
[^vararg]: 本方法除了能接受在此处描述的参数外，还能够继续接受任意数量的参数。
[^constructor]: 本方法用于构造某个类型。
[^static]: 调用本方法无需实例，可直接使用类名进行调用。
[^operator]: 本方法描述的是使用本类型作为左操作数的有效运算符。
[^bitfield]: 这个值是由下列位标志构成位掩码的整数。
[^void]: 无返回值。
