<!-- ⚠ 请勿编辑本文件 ⚠ -->
<!-- 本文档使用脚本从 WeDot 引擎源码仓库生成。 -->
<!-- 生成脚本：https://github.com/WeDot-Engine/WeDot/tree/master/doc/tools/make_md.py； -->
<!-- 原文件：https://github.com/WeDot-Engine/WeDot/tree/master/doc/classes/EditorContextMenuPlugin.xml。 -->

<div id="_class_editorcontextmenuplugin"></div>

# EditorContextMenuPlugin

**继承：** [`RefCounted`](class_refcounted.md) **<** [`Object`](class_object.md)

Plugin for adding custom context menus in the editor.

## 描述

**EditorContextMenuPlugin** allows for the addition of custom options in the editor's context menu.

Currently, context menus are supported for three commonly used areas: the file system, scene tree, and editor script list panel.

## 方法

|||
|:-:|:--|
| `void` | [`_popup_menu`](class_editorcontextmenuplugin.md#class_editorcontextmenuplugin_private_method__popup_menu) ( paths: [`PackedStringArray`](class_packedstringarray.md) ) virtual[^virtual]                                                                                           |
| `void` | [`add_context_menu_item`](class_editorcontextmenuplugin.md#class_editorcontextmenuplugin_method_add_context_menu_item) ( name: [`String`](class_string.md), callback: [`Callable`](class_callable.md), icon: [`Texture2D`](class_texture2d.md) = null )                             |
| `void` | [`add_context_menu_item_from_shortcut`](class_editorcontextmenuplugin.md#class_editorcontextmenuplugin_method_add_context_menu_item_from_shortcut) ( name: [`String`](class_string.md), shortcut: [`Shortcut`](class_shortcut.md), icon: [`Texture2D`](class_texture2d.md) = null ) |
| `void` | [`add_context_submenu_item`](class_editorcontextmenuplugin.md#class_editorcontextmenuplugin_method_add_context_submenu_item) ( name: [`String`](class_string.md), menu: [`PopupMenu`](class_popupmenu.md), icon: [`Texture2D`](class_texture2d.md) = null )                         |
| `void` | [`add_menu_shortcut`](class_editorcontextmenuplugin.md#class_editorcontextmenuplugin_method_add_menu_shortcut) ( shortcut: [`Shortcut`](class_shortcut.md), callback: [`Callable`](class_callable.md) )                                                                             |

<!-- rst-class:: classref-section-separator -->

---

## 枚举

<div id="_class_enum_editorcontextmenuplugin_contextmenuslot"></div>

enum **ContextMenuSlot**: <div id="enum_editorcontextmenuplugin_contextmenuslot"></div>

<div id="_class_editorcontextmenuplugin_constant_context_slot_scene_tree"></div>

[ContextMenuSlot](#enum_editorcontextmenuplugin_contextmenuslot) **CONTEXT_SLOT_SCENE_TREE** = ``0``

Context menu of Scene dock. [`_popup_menu`](class_editorcontextmenuplugin.md#class_editorcontextmenuplugin_private_method__popup_menu) will be called with a list of paths to currently selected nodes, while option callback will receive the list of currently selected nodes.

<div id="_class_editorcontextmenuplugin_constant_context_slot_filesystem"></div>

[ContextMenuSlot](#enum_editorcontextmenuplugin_contextmenuslot) **CONTEXT_SLOT_FILESYSTEM** = ``1``

Context menu of FileSystem dock. [`_popup_menu`](class_editorcontextmenuplugin.md#class_editorcontextmenuplugin_private_method__popup_menu) and option callback will be called with list of paths of the currently selected files.

<div id="_class_editorcontextmenuplugin_constant_context_slot_filesystem_create"></div>

[ContextMenuSlot](#enum_editorcontextmenuplugin_contextmenuslot) **CONTEXT_SLOT_FILESYSTEM_CREATE** = ``3``

The "Create..." submenu of FileSystem dock's context menu. [`_popup_menu`](class_editorcontextmenuplugin.md#class_editorcontextmenuplugin_private_method__popup_menu) and option callback will be called with list of paths of the currently selected files.

<div id="_class_editorcontextmenuplugin_constant_context_slot_script_editor"></div>

[ContextMenuSlot](#enum_editorcontextmenuplugin_contextmenuslot) **CONTEXT_SLOT_SCRIPT_EDITOR** = ``2``

Context menu of Scene dock. [`_popup_menu`](class_editorcontextmenuplugin.md#class_editorcontextmenuplugin_private_method__popup_menu) will be called with the path to the currently edited script, while option callback will receive reference to that script.

<!-- rst-class:: classref-section-separator -->

---

## 方法说明

<div id="_class_editorcontextmenuplugin_private_method__popup_menu"></div>

`void` **_popup_menu** ( paths: [`PackedStringArray`](class_packedstringarray.md) ) virtual[^virtual]<div id="class_editorcontextmenuplugin_private_method__popup_menu"></div>

Called when creating a context menu, custom options can be added by using the [`add_context_menu_item`](class_editorcontextmenuplugin.md#class_editorcontextmenuplugin_method_add_context_menu_item) or [`add_context_menu_item_from_shortcut`](class_editorcontextmenuplugin.md#class_editorcontextmenuplugin_method_add_context_menu_item_from_shortcut) functions. `paths` contains currently selected paths (depending on menu), which can be used to conditionally add options.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorcontextmenuplugin_method_add_context_menu_item"></div>

`void` **add_context_menu_item** ( name: [`String`](class_string.md), callback: [`Callable`](class_callable.md), icon: [`Texture2D`](class_texture2d.md) = null )<div id="class_editorcontextmenuplugin_method_add_context_menu_item"></div>

Add custom option to the context menu of the plugin's specified slot. When the option is activated, `callback` will be called. Callback should take single [`Array`](class_array.md) argument; array contents depend on context menu slot.

```

    func _popup_menu(paths):
        add_context_menu_item("File Custom options", handle, ICON)
```

If you want to assign shortcut to the menu item, use [`add_context_menu_item_from_shortcut`](class_editorcontextmenuplugin.md#class_editorcontextmenuplugin_method_add_context_menu_item_from_shortcut) instead.



<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorcontextmenuplugin_method_add_context_menu_item_from_shortcut"></div>

`void` **add_context_menu_item_from_shortcut** ( name: [`String`](class_string.md), shortcut: [`Shortcut`](class_shortcut.md), icon: [`Texture2D`](class_texture2d.md) = null )<div id="class_editorcontextmenuplugin_method_add_context_menu_item_from_shortcut"></div>

Add custom option to the context menu of the plugin's specified slot. The option will have the `shortcut` assigned and reuse its callback. The shortcut has to be registered beforehand with [`add_menu_shortcut`](class_editorcontextmenuplugin.md#class_editorcontextmenuplugin_method_add_menu_shortcut).

```

    func _init():
        add_menu_shortcut(SHORTCUT, handle)
    
    func _popup_menu(paths):
        add_context_menu_item_from_shortcut("File Custom options", SHORTCUT, ICON)
```



<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorcontextmenuplugin_method_add_context_submenu_item"></div>

`void` **add_context_submenu_item** ( name: [`String`](class_string.md), menu: [`PopupMenu`](class_popupmenu.md), icon: [`Texture2D`](class_texture2d.md) = null )<div id="class_editorcontextmenuplugin_method_add_context_submenu_item"></div>

Add a submenu to the context menu of the plugin's specified slot. The submenu is not automatically handled, you need to connect to its signals yourself. Also the submenu is freed on every popup, so provide a new [`PopupMenu`](class_popupmenu.md) every time.

```

    func _popup_menu(paths):
        var popup_menu = PopupMenu.new()
        popup_menu.add_item("Blue")
        popup_menu.add_item("White")
        popup_menu.id_pressed.connect(_on_color_submenu_option)
    
        add_context_menu_item("Set Node Color", popup_menu)
```



<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorcontextmenuplugin_method_add_menu_shortcut"></div>

`void` **add_menu_shortcut** ( shortcut: [`Shortcut`](class_shortcut.md), callback: [`Callable`](class_callable.md) )<div id="class_editorcontextmenuplugin_method_add_menu_shortcut"></div>

Registers a shortcut associated with the plugin's context menu. This method should be called once (e.g. in plugin's [`Object._init`](class_object.md#class_object_private_method__init)). `callback` will be called when user presses the specified `shortcut` while the menu's context is in effect (e.g. FileSystem dock is focused). Callback should take single [`Array`](class_array.md) argument; array contents depend on context menu slot.

```

    func _init():
        add_menu_shortcut(SHORTCUT, handle)
```



[^virtual]: 本方法通常需要用户覆盖才能生效。
[^const]: 本方法无副作用，不会修改该实例的任何成员变量。
[^vararg]: 本方法除了能接受在此处描述的参数外，还能够继续接受任意数量的参数。
[^constructor]: 本方法用于构造某个类型。
[^static]: 调用本方法无需实例，可直接使用类名进行调用。
[^operator]: 本方法描述的是使用本类型作为左操作数的有效运算符。
[^bitfield]: 这个值是由下列位标志构成位掩码的整数。
[^void]: 无返回值。
