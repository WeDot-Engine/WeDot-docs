<!-- ⚠ 请勿编辑本文件 ⚠ -->
<!-- 本文档使用脚本从 WeDot 引擎源码仓库生成。 -->
<!-- 生成脚本：https://github.com/WeDot-Engine/WeDot/tree/master/doc/tools/make_md.py； -->
<!-- 原文件：https://github.com/WeDot-Engine/WeDot/tree/master/doc/classes/EditorCommandPalette.xml。 -->

<div id="_class_editorcommandpalette"></div>

# EditorCommandPalette

**继承：** [`ConfirmationDialog`](class_confirmationdialog.md) **<** [`AcceptDialog`](class_acceptdialog.md) **<** [`Window`](class_window.md) **<** [`Viewport`](class_viewport.md) **<** [`Node`](class_node.md) **<** [`Object`](class_object.md)

Godot editor's command palette.

## 描述

Object that holds all the available Commands and their shortcuts text. These Commands can be accessed through **Editor > Command Palette** menu.

Command key names use slash delimiters to distinguish sections, for example: `"example/command1"` then `example` will be the section name.



```gdscript

    var command_palette = EditorInterface.get_command_palette()
    # external_command is a function that will be called with the command is executed.
    var command_callable = Callable(self, "external_command").bind(arguments)
    command_palette.add_command("command", "test/command",command_callable)
```

```csharp

    EditorCommandPalette commandPalette = EditorInterface.Singleton.GetCommandPalette();
    // ExternalCommand is a function that will be called with the command is executed.
    Callable commandCallable = new Callable(this, MethodName.ExternalCommand);
    commandPalette.AddCommand("command", "test/command", commandCallable)
```



 **Note:** This class shouldn't be instantiated directly. Instead, access the singleton using [`EditorInterface.get_command_palette`](class_editorinterface.md#class_editorinterface_method_get_command_palette).





## 属性

|||
|:-:|:--|
| [`bool`](class_bool.md) | dialog_hide_on_ok | ``false`` (overrides [`AcceptDialog`](class_acceptdialog.md#class_acceptdialog_property_dialog_hide_on_ok)) |

## 方法

|||
|:-:|:--|
| `void` | [`add_command`](class_editorcommandpalette.md#class_editorcommandpalette_method_add_command) ( command_name: [`String`](class_string.md), key_name: [`String`](class_string.md), binded_callable: [`Callable`](class_callable.md), shortcut_text: [`String`](class_string.md) = "None" ) |
| `void` | [`remove_command`](class_editorcommandpalette.md#class_editorcommandpalette_method_remove_command) ( key_name: [`String`](class_string.md) )                                                                                                                                             |

<!-- rst-class:: classref-section-separator -->

---

## 方法说明

<div id="_class_editorcommandpalette_method_add_command"></div>

`void` **add_command** ( command_name: [`String`](class_string.md), key_name: [`String`](class_string.md), binded_callable: [`Callable`](class_callable.md), shortcut_text: [`String`](class_string.md) = "None" )<div id="class_editorcommandpalette_method_add_command"></div>

Adds a custom command to EditorCommandPalette.

- `command_name`: [`String`](class_string.md) (Name of the **Command**. This is displayed to the user.)

- `key_name`: [`String`](class_string.md) (Name of the key for a particular **Command**. This is used to uniquely identify the **Command**.)

- `binded_callable`: [`Callable`](class_callable.md) (Callable of the **Command**. This will be executed when the **Command** is selected.)

- `shortcut_text`: [`String`](class_string.md) (Shortcut text of the **Command** if available.)

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorcommandpalette_method_remove_command"></div>

`void` **remove_command** ( key_name: [`String`](class_string.md) )<div id="class_editorcommandpalette_method_remove_command"></div>

Removes the custom command from EditorCommandPalette.

- `key_name`: [`String`](class_string.md) (Name of the key for a particular **Command**.)

[^virtual]: 本方法通常需要用户覆盖才能生效。
[^const]: 本方法无副作用，不会修改该实例的任何成员变量。
[^vararg]: 本方法除了能接受在此处描述的参数外，还能够继续接受任意数量的参数。
[^constructor]: 本方法用于构造某个类型。
[^static]: 调用本方法无需实例，可直接使用类名进行调用。
[^operator]: 本方法描述的是使用本类型作为左操作数的有效运算符。
[^bitfield]: 这个值是由下列位标志构成位掩码的整数。
[^void]: 无返回值。
