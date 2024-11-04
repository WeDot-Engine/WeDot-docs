<!-- ⚠ 请勿编辑本文件 ⚠ -->
<!-- 本文档使用脚本从 WeDot 引擎源码仓库生成。 -->
<!-- 生成脚本：https://github.com/WeDot-Engine/WeDot/tree/4.3/doc/tools/make_md.py； -->
<!-- 原文件：https://github.com/WeDot-Engine/WeDot/tree/4.3/doc/classes/ScriptCreateDialog.xml。 -->

<div id="_class_scriptcreatedialog"></div>

# ScriptCreateDialog

**继承：** [`ConfirmationDialog`](class_confirmationdialog.md) **<** [`AcceptDialog`](class_acceptdialog.md) **<** [`Window`](class_window.md) **<** [`Viewport`](class_viewport.md) **<** [`Node`](class_node.md) **<** [`Object`](class_object.md)

Godot editor's popup dialog for creating new [`Script`](class_script.md) files.

## 描述

The **ScriptCreateDialog** creates script files according to a given template for a given scripting language. The standard use is to configure its fields prior to calling one of the [`Window.popup`](#class_window_method_popup) methods.



```gdscript

    func _ready():
        var dialog = ScriptCreateDialog.new();
        dialog.config("Node", "res://new_node.gd") # For in-engine types.
        dialog.config("\"res://base_node.gd\"", "res://derived_node.gd") # For script types.
        dialog.popup_centered()
```

```csharp

    public override void _Ready()
    {
        var dialog = new ScriptCreateDialog();
        dialog.Config("Node", "res://NewNode.cs"); // For in-engine types.
        dialog.Config("\"res://BaseNode.cs\"", "res://DerivedNode.cs"); // For script types.
        dialog.PopupCentered();
    }
```







## 属性

| [`bool`](class_bool.md)     | dialog_hide_on_ok | ``false`` (overrides [`AcceptDialog`](#class_acceptdialog_property_dialog_hide_on_ok)) |
| [`String`](class_string.md) | ok_button_text    | ``"Create"`` (overrides [`AcceptDialog`](#class_acceptdialog_property_ok_button_text)) |
| [`String`](class_string.md) | title             | ``"Attach Node Script"`` (overrides [`Window`](#class_window_property_title))          |

## 方法

| `void` | [`config`](#class_scriptcreatedialog_method_config) ( inherits: [`String`](class_string.md), path: [`String`](class_string.md), built_in_enabled: [`bool`](class_bool.md) = true, load_enabled: [`bool`](class_bool.md) = true ) |

<!-- rst-class:: classref-section-separator -->

---

## 信号

<div id="_class_class_scriptcreatedialog_signal_script_created"></div>

**script_created** ( script: [`Script`](class_script.md) ) <div id="class_scriptcreatedialog_signal_script_created"></div>

Emitted when the user clicks the OK button.

<!-- rst-class:: classref-section-separator -->

---

## 方法说明

<div id="_class_scriptcreatedialog_method_config"></div>

`void` **config** ( inherits: [`String`](class_string.md), path: [`String`](class_string.md), built_in_enabled: [`bool`](class_bool.md) = true, load_enabled: [`bool`](class_bool.md) = true )<div id="class_scriptcreatedialog_method_config"></div>

Prefills required fields to configure the ScriptCreateDialog for use.

[^virtual]: 本方法通常需要用户覆盖才能生效。
[^const]: 本方法无副作用，不会修改该实例的任何成员变量。
[^vararg]: 本方法除了能接受在此处描述的参数外，还能够继续接受任意数量的参数。
[^constructor]: 本方法用于构造某个类型。
[^static]: 调用本方法无需实例，可直接使用类名进行调用。
[^operator]: 本方法描述的是使用本类型作为左操作数的有效运算符。
[^bitfield]: 这个值是由下列位标志构成位掩码的整数。
[^void]: 无返回值。
