# 类参考入门

本页面解释如何编写类参考。您将学习如何为 WeDot 内置节点类型的类、方法和属性编写新的描述。

## 参考资料

- 要了解如何使用 Git 版本控制系统向 WeDot 项目提交更改，请参阅[更新类参考文档](updating_the_class_reference.md)。

每个类的参考都包含在一个类似于以下的 XML 文件中：

```xml
<class name="Node2D" inherits="CanvasItem" version="4.0">
    <brief_description>
        一个 2D 游戏对象，所有与 2D 相关的节点都继承自它。具有位置、旋转、缩放和 Z 索引。
    </brief_description>
    <description>
        一个 2D 游戏对象，具有变换（位置、旋转和缩放）。所有 2D 节点，包括物理对象和精灵，都继承自 Node2D。使用 Node2D 作为父节点可以在 2D 项目中移动、缩放和旋转子节点。还控制节点的渲染顺序。
    </description>
    <tutorials>
        <link title="自定义 2D 绘制">https://docs.WeDot.top/latest/tutorials/2d/custom_drawing_in_2d.html</link>
        <link title="所有 2D 示例">https://github.com/godotengine/godot-demo-projects/tree/master/2d</link>
    </tutorials>
    <methods>
        <method name="apply_scale">
            <return type="void"></return>
            <argument index="0" name="ratio" type="Vector2"></argument>
            <description>
                将当前缩放乘以 [code]ratio[/code] 向量。
            </description>
        </method>
        <method name="translate">
            <return type="void"></return>
            <argument index="0" name="offset" type="Vector2"></argument>
            <description>
                按给定的 [code]offset[/code] 在局部坐标系中平移节点。
            </description>
        </method>
    </methods>
    <members>
        <member name="global_position" type="Vector2" setter="set_global_position" getter="get_global_position">
            全局位置。
        </member>
        <member name="z_index" type="int" setter="set_z_index" getter="get_z_index" default="0">
            Z 索引。控制节点的渲染顺序。Z 索引较高的节点会显示在其他节点前面。
        </member>
    </members>
    <constants>
    </constants>
</class>
```

### 如何编辑类 XML

在 `doc/classes/` 目录中编辑您选择的类文件以更新类参考。该文件夹包含每个类的 XML 文件。XML 列出了您将在类参考中找到的常量和方法。WeDot 自动生成并更新 XML。

### 使用 BBCode 样式标签改进格式

WeDot 的 XML 类参考支持 BBCode 样式的标签，用于链接以及格式化文本和代码。在下表中，您可以找到可用的标签、使用示例及其转换为 Markdown 后的结果。

#### 链接

| 标签和描述 | 示例 | 结果 |
| --- | --- | --- |
| `[Class]` | `Move the [Sprite2D].` | Move the [`class_Sprite2D`](class_sprite2d.md). |
| `[annotation Class.name]` | `See [annotation @GDScript.@rpc].` | See [`@GDScript.@rpc`](class_@gdscript.md#class_@GDScript_annotation_@rpc). |
| `[constant Class.name]` | `See [constant Color.RED].` | See [`Color.RED`](class_color.md#class_Color_constant_RED). |
| `[enum Class.name]` | `See [enum Mesh.ArrayType].` | See [`Mesh.ArrayType`](class_mesh.md#enum_Mesh_ArrayType)`. |
| `[member Class.name]` | `Get [member Node2D.scale].` | Get [`Node2D.scale`](class_node2d.md#class_Node2D_property_scale). |
| `[method Class.name]` | `Call [method Node3D.hide].` | Call [`Node3D.hide`](class_node3d.md#class_Node3D_method_hide). |
| `[constructor Class.name]` | `Use [constructor Color.Color].` | Use [`Color.Color`](class_color.md#class_Color_constructor_Color). |
| `[operator Class.name]` | `Use [operator Color.operator *].` | Use [`Color.operator *`](class_color.md#class_Color_operator_operator_multiply). |
| `[signal Class.name]` | `Emit [signal Node.renamed].` | Emit [`Node.renamed`](class_node.md#class_Node_signal_renamed). |
| `[theme_item Class.name]` | `See [theme_item Label.font].` | See [`Label.font`](class_label.md#class_Label_property_font). |
| `[param name]` | `Takes [param size] for the size.` | Takes `size` for the size. |

#### 格式化文本

| 标签和描述 | 示例 | 结果 |
| --- | --- | --- |
| `[br]` | `Line 1.[br]Line 2.` | Line 1.<br>Line 2. |
| `[b]` `[i]` `[u]` `[s]` | `Do [b]not[/b] call this method.` | Do **not** call this method. |
| `[url]` `[url=URL]` | `[url]https://example.com[/url]` | https://example.com |
| `[center]` | `[center]2 + 2 = 4[/center]` | <center>2 + 2 = 4</center> |
| `[kbd]` | `Press [kbd]Ctrl + C[/kbd].` | Press `Ctrl + C`. |
| `[code]` | `Returns [code]true[/code].` | Returns `true`. |

#### 格式化代码块

1. 使用 `[codeblock]` 如果您想添加特定语言的示例。
2. 使用 `[codeblocks]` `[gdscript]` 和 `[csharp]` 如果您想同时添加 GDScript 和 C# 的示例。

示例：

```bbcode
[codeblock]
func _ready():
    var sprite = get_node("Sprite2D")
    print(sprite.get_pos())
[/codeblock]
```

显示为：

```gdscript
func _ready():
    var sprite = get_node("Sprite2D")
    print(sprite.get_pos())
```

如果需要提供不同语言版本的代码示例，使用 `[codeblocks]`：

```bbcode
[codeblocks]
[gdscript]
func _ready():
    var sprite = get_node("Sprite2D")
    print(sprite.get_pos())
[/gdscript]
[csharp]
public override void _Ready()
{
    var sprite = GetNode("Sprite2D");
    GD.Print(sprite.GetPos());
}
[/csharp]
[/codeblocks]
```

显示为：

```gdscript
func _ready():
    var sprite = get_node("Sprite2D")
    print(sprite.get_pos())
```

```csharp
public override void _Ready()
{
    var sprite = GetNode("Sprite2D");
    GD.Print(sprite.GetPos());
}
```

#### 格式化注意事项和警告

重要信息前加 `[b]Note:[/b]`：

```bbcode
[b]Note:[/b] Only available when using the Vulkan renderer.
```

关键信息前加 `[b]Warning:[/b]`：

```bbcode
[b]Warning:[/b] If this property is set to [code]true[/code], it allows clients to execute arbitrary code on the server.
```

### 标记 API 为废弃或实验性

要在 XML 中标记 API 为废弃或实验性，需要添加相应的 XML 属性。属性值必须是一条消息，解释为何不推荐使用该 API（支持 BBCode 标记）或为空字符串（使用默认消息）。

示例：

```xml
<class name="Parallax2D" inherits="Node2D" experimental="This node is meant to replace [ParallaxBackground] and [ParallaxLayer]. The implementation may change in the future." xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="../class.xsd">
    [...]
</class>

<constant name="RESPONSE_USE_PROXY" value="305" enum="ResponseCode" deprecated="Many clients ignore this response code for security reasons. It is also deprecated by the HTTP standard.">
    HTTP 状态码 [code]305 Use Proxy[/code]。
</constant>

<member name="auto_translate" type="bool" setter="set_auto_translate" getter="is_auto_translating" deprecated="Use [member Node.auto_translate_mode] instead.">
    根据当前区域设置自动更改任何文本。
</member>

<method name="get_method_call_mode" qualifiers="const" deprecated="Use [member AnimationMixer.callback_mode_method] instead.">
    <return type="int" enum="AnimationPlayer.AnimationMethodCallMode" />
    <description>
        返回“调用方法”轨道使用的调用模式。
    </description>
</method>
```
