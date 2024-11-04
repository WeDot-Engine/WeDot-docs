<!-- ⚠ 请勿编辑本文件 ⚠ -->
<!-- 本文档使用脚本从 WeDot 引擎源码仓库生成。 -->
<!-- 生成脚本：https://github.com/WeDot-Engine/WeDot/tree/4.3/doc/tools/make_md.py； -->
<!-- 原文件：https://github.com/WeDot-Engine/WeDot/tree/4.3/doc/classes/Tree.xml。 -->

<div id="_class_tree"></div>

# Tree

**继承：** [`Control`](class_control.md) **<** [`CanvasItem`](class_canvasitem.md) **<** [`Node`](class_node.md) **<** [`Object`](class_object.md)

A control used to show a set of internal [`TreeItem`](class_treeitem.md) s in a hierarchical structure.

## 描述

A control used to show a set of internal [`TreeItem`](class_treeitem.md) s in a hierarchical structure. The tree items can be selected, expanded and collapsed. The tree can have multiple columns with custom controls like [`LineEdit`](class_lineedit.md) s, buttons and popups. It can be useful for structured displays and interactions.

Trees are built via code, using [`TreeItem`](class_treeitem.md) objects to create the structure. They have a single root, but multiple roots can be simulated with [`hide_root`](#class_tree_property_hide_root):



```gdscript

    func _ready():
        var tree = Tree.new()
        var root = tree.create_item()
        tree.hide_root = true
        var child1 = tree.create_item(root)
        var child2 = tree.create_item(root)
        var subchild1 = tree.create_item(child1)
        subchild1.set_text(0, "Subchild1")
```

```csharp

    public override void _Ready()
    {
        var tree = new Tree();
        TreeItem root = tree.CreateItem();
        tree.HideRoot = true;
        TreeItem child1 = tree.CreateItem(root);
        TreeItem child2 = tree.CreateItem(root);
        TreeItem subchild1 = tree.CreateItem(child1);
        subchild1.SetText(0, "Subchild1");
    }
```



To iterate over all the [`TreeItem`](class_treeitem.md) objects in a **Tree** object, use [`TreeItem.get_next`](#class_treeitem_method_get_next) and [`TreeItem.get_first_child`](#class_treeitem_method_get_first_child) after getting the root through [`get_root`](#class_tree_method_get_root). You can use [`Object.free`](#class_object_method_free) on a [`TreeItem`](class_treeitem.md) to remove it from the **Tree**.

 **Incremental search:** Like [`ItemList`](class_itemlist.md) and [`PopupMenu`](class_popupmenu.md), **Tree** supports searching within the list while the control is focused. Press a key that matches the first letter of an item's name to select the first item starting with the given letter. After that point, there are two ways to perform incremental search: 1) Press the same key again before the timeout duration to select the next item starting with the same letter. 2) Press letter keys that match the rest of the word before the timeout duration to match to select the item in question directly. Both of these actions will be reset to the beginning of the list if the timeout duration has passed since the last keystroke was registered. You can adjust the timeout duration by changing [`ProjectSettings.gui/timers/incremental_search_max_interval_msec`](#class_projectsettings_property_gui/timers/incremental_search_max_interval_msec).





## 属性

| [`bool`](class_bool.md)              | [`allow_reselect`](#class_tree_property_allow_reselect)                       | ``false``                                                               |
| [`bool`](class_bool.md)              | [`allow_rmb_select`](#class_tree_property_allow_rmb_select)                   | ``false``                                                               |
| [`bool`](class_bool.md)              | [`allow_search`](#class_tree_property_allow_search)                           | ``true``                                                                |
| [`bool`](class_bool.md)              | clip_contents                                                                 | ``true`` (overrides [`Control`](#class_control_property_clip_contents)) |
| [`bool`](class_bool.md)              | [`column_titles_visible`](#class_tree_property_column_titles_visible)         | ``false``                                                               |
| [`int`](class_int.md)                | [`columns`](#class_tree_property_columns)                                     | ``1``                                                                   |
| [`int`](class_int.md)                | [`drop_mode_flags`](#class_tree_property_drop_mode_flags)                     | ``0``                                                                   |
| [`bool`](class_bool.md)              | [`enable_recursive_folding`](#class_tree_property_enable_recursive_folding)   | ``true``                                                                |
| [FocusMode](#enum_control_focusmode) | focus_mode                                                                    | ``2`` (overrides [`Control`](#class_control_property_focus_mode))       |
| [`bool`](class_bool.md)              | [`hide_folding`](#class_tree_property_hide_folding)                           | ``false``                                                               |
| [`bool`](class_bool.md)              | [`hide_root`](#class_tree_property_hide_root)                                 | ``false``                                                               |
| [`bool`](class_bool.md)              | [`scroll_horizontal_enabled`](#class_tree_property_scroll_horizontal_enabled) | ``true``                                                                |
| [`bool`](class_bool.md)              | [`scroll_vertical_enabled`](#class_tree_property_scroll_vertical_enabled)     | ``true``                                                                |
| [SelectMode](#enum_tree_selectmode)  | [`select_mode`](#class_tree_property_select_mode)                             | ``0``                                                                   |

## 方法

| `void`                                                        | [`clear`](#class_tree_method_clear) ( )                                                                                                                                                             |
| [`TreeItem`](class_treeitem.md)                               | [`create_item`](#class_tree_method_create_item) ( parent: [`TreeItem`](class_treeitem.md) = null, index: [`int`](class_int.md) = -1 )                                                               |
| `void`                                                        | [`deselect_all`](#class_tree_method_deselect_all) ( )                                                                                                                                               |
| [`bool`](class_bool.md)                                       | [`edit_selected`](#class_tree_method_edit_selected) ( force_edit: [`bool`](class_bool.md) = false )                                                                                                 |
| `void`                                                        | [`ensure_cursor_is_visible`](#class_tree_method_ensure_cursor_is_visible) ( )                                                                                                                       |
| [`int`](class_int.md)                                         | [`get_button_id_at_position`](#class_tree_method_get_button_id_at_position) ( position: [`Vector2`](class_vector2.md) ) const[^const]                                                               |
| [`int`](class_int.md)                                         | [`get_column_at_position`](#class_tree_method_get_column_at_position) ( position: [`Vector2`](class_vector2.md) ) const[^const]                                                                     |
| [`int`](class_int.md)                                         | [`get_column_expand_ratio`](#class_tree_method_get_column_expand_ratio) ( column: [`int`](class_int.md) ) const[^const]                                                                             |
| [`String`](class_string.md)                                   | [`get_column_title`](#class_tree_method_get_column_title) ( column: [`int`](class_int.md) ) const[^const]                                                                                           |
| [HorizontalAlignment](#enum_@globalscope_horizontalalignment) | [`get_column_title_alignment`](#class_tree_method_get_column_title_alignment) ( column: [`int`](class_int.md) ) const[^const]                                                                       |
| [TextDirection](#enum_control_textdirection)                  | [`get_column_title_direction`](#class_tree_method_get_column_title_direction) ( column: [`int`](class_int.md) ) const[^const]                                                                       |
| [`String`](class_string.md)                                   | [`get_column_title_language`](#class_tree_method_get_column_title_language) ( column: [`int`](class_int.md) ) const[^const]                                                                         |
| [`int`](class_int.md)                                         | [`get_column_width`](#class_tree_method_get_column_width) ( column: [`int`](class_int.md) ) const[^const]                                                                                           |
| [`Rect2`](class_rect2.md)                                     | [`get_custom_popup_rect`](#class_tree_method_get_custom_popup_rect) ( ) const[^const]                                                                                                               |
| [`int`](class_int.md)                                         | [`get_drop_section_at_position`](#class_tree_method_get_drop_section_at_position) ( position: [`Vector2`](class_vector2.md) ) const[^const]                                                         |
| [`TreeItem`](class_treeitem.md)                               | [`get_edited`](#class_tree_method_get_edited) ( ) const[^const]                                                                                                                                     |
| [`int`](class_int.md)                                         | [`get_edited_column`](#class_tree_method_get_edited_column) ( ) const[^const]                                                                                                                       |
| [`Rect2`](class_rect2.md)                                     | [`get_item_area_rect`](#class_tree_method_get_item_area_rect) ( item: [`TreeItem`](class_treeitem.md), column: [`int`](class_int.md) = -1, button_index: [`int`](class_int.md) = -1 ) const[^const] |
| [`TreeItem`](class_treeitem.md)                               | [`get_item_at_position`](#class_tree_method_get_item_at_position) ( position: [`Vector2`](class_vector2.md) ) const[^const]                                                                         |
| [`TreeItem`](class_treeitem.md)                               | [`get_next_selected`](#class_tree_method_get_next_selected) ( from: [`TreeItem`](class_treeitem.md) )                                                                                               |
| [`int`](class_int.md)                                         | [`get_pressed_button`](#class_tree_method_get_pressed_button) ( ) const[^const]                                                                                                                     |
| [`TreeItem`](class_treeitem.md)                               | [`get_root`](#class_tree_method_get_root) ( ) const[^const]                                                                                                                                         |
| [`Vector2`](class_vector2.md)                                 | [`get_scroll`](#class_tree_method_get_scroll) ( ) const[^const]                                                                                                                                     |
| [`TreeItem`](class_treeitem.md)                               | [`get_selected`](#class_tree_method_get_selected) ( ) const[^const]                                                                                                                                 |
| [`int`](class_int.md)                                         | [`get_selected_column`](#class_tree_method_get_selected_column) ( ) const[^const]                                                                                                                   |
| [`bool`](class_bool.md)                                       | [`is_column_clipping_content`](#class_tree_method_is_column_clipping_content) ( column: [`int`](class_int.md) ) const[^const]                                                                       |
| [`bool`](class_bool.md)                                       | [`is_column_expanding`](#class_tree_method_is_column_expanding) ( column: [`int`](class_int.md) ) const[^const]                                                                                     |
| `void`                                                        | [`scroll_to_item`](#class_tree_method_scroll_to_item) ( item: [`TreeItem`](class_treeitem.md), center_on_item: [`bool`](class_bool.md) = false )                                                    |
| `void`                                                        | [`set_column_clip_content`](#class_tree_method_set_column_clip_content) ( column: [`int`](class_int.md), enable: [`bool`](class_bool.md) )                                                          |
| `void`                                                        | [`set_column_custom_minimum_width`](#class_tree_method_set_column_custom_minimum_width) ( column: [`int`](class_int.md), min_width: [`int`](class_int.md) )                                         |
| `void`                                                        | [`set_column_expand`](#class_tree_method_set_column_expand) ( column: [`int`](class_int.md), expand: [`bool`](class_bool.md) )                                                                      |
| `void`                                                        | [`set_column_expand_ratio`](#class_tree_method_set_column_expand_ratio) ( column: [`int`](class_int.md), ratio: [`int`](class_int.md) )                                                             |
| `void`                                                        | [`set_column_title`](#class_tree_method_set_column_title) ( column: [`int`](class_int.md), title: [`String`](class_string.md) )                                                                     |
| `void`                                                        | [`set_column_title_alignment`](#class_tree_method_set_column_title_alignment) ( column: [`int`](class_int.md), title_alignment: [HorizontalAlignment](#enum_@globalscope_horizontalalignment) )     |
| `void`                                                        | [`set_column_title_direction`](#class_tree_method_set_column_title_direction) ( column: [`int`](class_int.md), direction: [TextDirection](#enum_control_textdirection) )                            |
| `void`                                                        | [`set_column_title_language`](#class_tree_method_set_column_title_language) ( column: [`int`](class_int.md), language: [`String`](class_string.md) )                                                |
| `void`                                                        | [`set_selected`](#class_tree_method_set_selected) ( item: [`TreeItem`](class_treeitem.md), column: [`int`](class_int.md) )                                                                          |

## 主题属性

| [`Color`](class_color.md)         | [`children_hl_line_color`](#class_tree_theme_color_children_hl_line_color)             | ``Color(0.27, 0.27, 0.27, 1)``      |
| [`Color`](class_color.md)         | [`custom_button_font_highlight`](#class_tree_theme_color_custom_button_font_highlight) | ``Color(0.95, 0.95, 0.95, 1)``      |
| [`Color`](class_color.md)         | [`drop_position_color`](#class_tree_theme_color_drop_position_color)                   | ``Color(1, 1, 1, 1)``               |
| [`Color`](class_color.md)         | [`font_color`](#class_tree_theme_color_font_color)                                     | ``Color(0.7, 0.7, 0.7, 1)``         |
| [`Color`](class_color.md)         | [`font_disabled_color`](#class_tree_theme_color_font_disabled_color)                   | ``Color(0.875, 0.875, 0.875, 0.5)`` |
| [`Color`](class_color.md)         | [`font_outline_color`](#class_tree_theme_color_font_outline_color)                     | ``Color(0, 0, 0, 1)``               |
| [`Color`](class_color.md)         | [`font_selected_color`](#class_tree_theme_color_font_selected_color)                   | ``Color(1, 1, 1, 1)``               |
| [`Color`](class_color.md)         | [`guide_color`](#class_tree_theme_color_guide_color)                                   | ``Color(0.7, 0.7, 0.7, 0.25)``      |
| [`Color`](class_color.md)         | [`parent_hl_line_color`](#class_tree_theme_color_parent_hl_line_color)                 | ``Color(0.27, 0.27, 0.27, 1)``      |
| [`Color`](class_color.md)         | [`relationship_line_color`](#class_tree_theme_color_relationship_line_color)           | ``Color(0.27, 0.27, 0.27, 1)``      |
| [`Color`](class_color.md)         | [`title_button_color`](#class_tree_theme_color_title_button_color)                     | ``Color(0.875, 0.875, 0.875, 1)``   |
| [`int`](class_int.md)             | [`button_margin`](#class_tree_theme_constant_button_margin)                            | ``4``                               |
| [`int`](class_int.md)             | [`children_hl_line_width`](#class_tree_theme_constant_children_hl_line_width)          | ``1``                               |
| [`int`](class_int.md)             | [`draw_guides`](#class_tree_theme_constant_draw_guides)                                | ``1``                               |
| [`int`](class_int.md)             | [`draw_relationship_lines`](#class_tree_theme_constant_draw_relationship_lines)        | ``0``                               |
| [`int`](class_int.md)             | [`h_separation`](#class_tree_theme_constant_h_separation)                              | ``4``                               |
| [`int`](class_int.md)             | [`icon_max_width`](#class_tree_theme_constant_icon_max_width)                          | ``0``                               |
| [`int`](class_int.md)             | [`inner_item_margin_bottom`](#class_tree_theme_constant_inner_item_margin_bottom)      | ``0``                               |
| [`int`](class_int.md)             | [`inner_item_margin_left`](#class_tree_theme_constant_inner_item_margin_left)          | ``0``                               |
| [`int`](class_int.md)             | [`inner_item_margin_right`](#class_tree_theme_constant_inner_item_margin_right)        | ``0``                               |
| [`int`](class_int.md)             | [`inner_item_margin_top`](#class_tree_theme_constant_inner_item_margin_top)            | ``0``                               |
| [`int`](class_int.md)             | [`item_margin`](#class_tree_theme_constant_item_margin)                                | ``16``                              |
| [`int`](class_int.md)             | [`outline_size`](#class_tree_theme_constant_outline_size)                              | ``0``                               |
| [`int`](class_int.md)             | [`parent_hl_line_margin`](#class_tree_theme_constant_parent_hl_line_margin)            | ``0``                               |
| [`int`](class_int.md)             | [`parent_hl_line_width`](#class_tree_theme_constant_parent_hl_line_width)              | ``1``                               |
| [`int`](class_int.md)             | [`relationship_line_width`](#class_tree_theme_constant_relationship_line_width)        | ``1``                               |
| [`int`](class_int.md)             | [`scroll_border`](#class_tree_theme_constant_scroll_border)                            | ``4``                               |
| [`int`](class_int.md)             | [`scroll_speed`](#class_tree_theme_constant_scroll_speed)                              | ``12``                              |
| [`int`](class_int.md)             | [`scrollbar_h_separation`](#class_tree_theme_constant_scrollbar_h_separation)          | ``4``                               |
| [`int`](class_int.md)             | [`scrollbar_margin_bottom`](#class_tree_theme_constant_scrollbar_margin_bottom)        | ``-1``                              |
| [`int`](class_int.md)             | [`scrollbar_margin_left`](#class_tree_theme_constant_scrollbar_margin_left)            | ``-1``                              |
| [`int`](class_int.md)             | [`scrollbar_margin_right`](#class_tree_theme_constant_scrollbar_margin_right)          | ``-1``                              |
| [`int`](class_int.md)             | [`scrollbar_margin_top`](#class_tree_theme_constant_scrollbar_margin_top)              | ``-1``                              |
| [`int`](class_int.md)             | [`scrollbar_v_separation`](#class_tree_theme_constant_scrollbar_v_separation)          | ``4``                               |
| [`int`](class_int.md)             | [`v_separation`](#class_tree_theme_constant_v_separation)                              | ``4``                               |
| [`Font`](class_font.md)           | [`font`](#class_tree_theme_font_font)                                                  |                                     |
| [`Font`](class_font.md)           | [`title_button_font`](#class_tree_theme_font_title_button_font)                        |                                     |
| [`int`](class_int.md)             | [`font_size`](#class_tree_theme_font_size_font_size)                                   |                                     |
| [`int`](class_int.md)             | [`title_button_font_size`](#class_tree_theme_font_size_title_button_font_size)         |                                     |
| [`Texture2D`](class_texture2d.md) | [`arrow`](#class_tree_theme_icon_arrow)                                                |                                     |
| [`Texture2D`](class_texture2d.md) | [`arrow_collapsed`](#class_tree_theme_icon_arrow_collapsed)                            |                                     |
| [`Texture2D`](class_texture2d.md) | [`arrow_collapsed_mirrored`](#class_tree_theme_icon_arrow_collapsed_mirrored)          |                                     |
| [`Texture2D`](class_texture2d.md) | [`checked`](#class_tree_theme_icon_checked)                                            |                                     |
| [`Texture2D`](class_texture2d.md) | [`checked_disabled`](#class_tree_theme_icon_checked_disabled)                          |                                     |
| [`Texture2D`](class_texture2d.md) | [`indeterminate`](#class_tree_theme_icon_indeterminate)                                |                                     |
| [`Texture2D`](class_texture2d.md) | [`indeterminate_disabled`](#class_tree_theme_icon_indeterminate_disabled)              |                                     |
| [`Texture2D`](class_texture2d.md) | [`select_arrow`](#class_tree_theme_icon_select_arrow)                                  |                                     |
| [`Texture2D`](class_texture2d.md) | [`unchecked`](#class_tree_theme_icon_unchecked)                                        |                                     |
| [`Texture2D`](class_texture2d.md) | [`unchecked_disabled`](#class_tree_theme_icon_unchecked_disabled)                      |                                     |
| [`Texture2D`](class_texture2d.md) | [`updown`](#class_tree_theme_icon_updown)                                              |                                     |
| [`StyleBox`](class_stylebox.md)   | [`button_pressed`](#class_tree_theme_style_button_pressed)                             |                                     |
| [`StyleBox`](class_stylebox.md)   | [`cursor`](#class_tree_theme_style_cursor)                                             |                                     |
| [`StyleBox`](class_stylebox.md)   | [`cursor_unfocused`](#class_tree_theme_style_cursor_unfocused)                         |                                     |
| [`StyleBox`](class_stylebox.md)   | [`custom_button`](#class_tree_theme_style_custom_button)                               |                                     |
| [`StyleBox`](class_stylebox.md)   | [`custom_button_hover`](#class_tree_theme_style_custom_button_hover)                   |                                     |
| [`StyleBox`](class_stylebox.md)   | [`custom_button_pressed`](#class_tree_theme_style_custom_button_pressed)               |                                     |
| [`StyleBox`](class_stylebox.md)   | [`focus`](#class_tree_theme_style_focus)                                               |                                     |
| [`StyleBox`](class_stylebox.md)   | [`panel`](#class_tree_theme_style_panel)                                               |                                     |
| [`StyleBox`](class_stylebox.md)   | [`selected`](#class_tree_theme_style_selected)                                         |                                     |
| [`StyleBox`](class_stylebox.md)   | [`selected_focus`](#class_tree_theme_style_selected_focus)                             |                                     |
| [`StyleBox`](class_stylebox.md)   | [`title_button_hover`](#class_tree_theme_style_title_button_hover)                     |                                     |
| [`StyleBox`](class_stylebox.md)   | [`title_button_normal`](#class_tree_theme_style_title_button_normal)                   |                                     |
| [`StyleBox`](class_stylebox.md)   | [`title_button_pressed`](#class_tree_theme_style_title_button_pressed)                 |                                     |

<!-- rst-class:: classref-section-separator -->

---

## 信号

<div id="_class_class_tree_signal_button_clicked"></div>

**button_clicked** ( item: [`TreeItem`](class_treeitem.md), column: [`int`](class_int.md), id: [`int`](class_int.md), mouse_button_index: [`int`](class_int.md) ) <div id="class_tree_signal_button_clicked"></div>

Emitted when a button on the tree was pressed (see [`TreeItem.add_button`](#class_treeitem_method_add_button)).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_class_tree_signal_cell_selected"></div>

**cell_selected** ( ) <div id="class_tree_signal_cell_selected"></div>

Emitted when a cell is selected.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_class_tree_signal_check_propagated_to_item"></div>

**check_propagated_to_item** ( item: [`TreeItem`](class_treeitem.md), column: [`int`](class_int.md) ) <div id="class_tree_signal_check_propagated_to_item"></div>

Emitted when [`TreeItem.propagate_check`](#class_treeitem_method_propagate_check) is called. Connect to this signal to process the items that are affected when [`TreeItem.propagate_check`](#class_treeitem_method_propagate_check) is invoked. The order that the items affected will be processed is as follows: the item that invoked the method, children of that item, and finally parents of that item.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_class_tree_signal_column_title_clicked"></div>

**column_title_clicked** ( column: [`int`](class_int.md), mouse_button_index: [`int`](class_int.md) ) <div id="class_tree_signal_column_title_clicked"></div>

Emitted when a column's title is clicked with either [`@GlobalScope.MOUSE_BUTTON_LEFT`](#class_@globalscope_constant_mouse_button_left) or [`@GlobalScope.MOUSE_BUTTON_RIGHT`](#class_@globalscope_constant_mouse_button_right).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_class_tree_signal_custom_item_clicked"></div>

**custom_item_clicked** ( mouse_button_index: [`int`](class_int.md) ) <div id="class_tree_signal_custom_item_clicked"></div>

Emitted when an item with [`TreeItem.CELL_MODE_CUSTOM`](#class_treeitem_constant_cell_mode_custom) is clicked with a mouse button.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_class_tree_signal_custom_popup_edited"></div>

**custom_popup_edited** ( arrow_clicked: [`bool`](class_bool.md) ) <div id="class_tree_signal_custom_popup_edited"></div>

Emitted when a cell with the [`TreeItem.CELL_MODE_CUSTOM`](#class_treeitem_constant_cell_mode_custom) is clicked to be edited.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_class_tree_signal_empty_clicked"></div>

**empty_clicked** ( click_position: [`Vector2`](class_vector2.md), mouse_button_index: [`int`](class_int.md) ) <div id="class_tree_signal_empty_clicked"></div>

Emitted when a mouse button is clicked in the empty space of the tree.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_class_tree_signal_item_activated"></div>

**item_activated** ( ) <div id="class_tree_signal_item_activated"></div>

Emitted when an item is double-clicked, or selected with a `ui_accept` input event (e.g. using <i class="fa fa-gamepad"></i>`Enter` or <i class="fa fa-gamepad"></i>`Space` on the keyboard).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_class_tree_signal_item_collapsed"></div>

**item_collapsed** ( item: [`TreeItem`](class_treeitem.md) ) <div id="class_tree_signal_item_collapsed"></div>

Emitted when an item is collapsed by a click on the folding arrow.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_class_tree_signal_item_edited"></div>

**item_edited** ( ) <div id="class_tree_signal_item_edited"></div>

Emitted when an item is edited.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_class_tree_signal_item_icon_double_clicked"></div>

**item_icon_double_clicked** ( ) <div id="class_tree_signal_item_icon_double_clicked"></div>

Emitted when an item's icon is double-clicked. For a signal that emits when any part of the item is double-clicked, see [`item_activated`](#class_tree_signal_item_activated).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_class_tree_signal_item_mouse_selected"></div>

**item_mouse_selected** ( mouse_position: [`Vector2`](class_vector2.md), mouse_button_index: [`int`](class_int.md) ) <div id="class_tree_signal_item_mouse_selected"></div>

Emitted when an item is selected with a mouse button.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_class_tree_signal_item_selected"></div>

**item_selected** ( ) <div id="class_tree_signal_item_selected"></div>

Emitted when an item is selected.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_class_tree_signal_multi_selected"></div>

**multi_selected** ( item: [`TreeItem`](class_treeitem.md), column: [`int`](class_int.md), selected: [`bool`](class_bool.md) ) <div id="class_tree_signal_multi_selected"></div>

Emitted instead of [`item_selected`](#class_tree_signal_item_selected) if [`select_mode`](#class_tree_property_select_mode) is set to [`SELECT_MULTI`](#class_tree_constant_select_multi).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_class_tree_signal_nothing_selected"></div>

**nothing_selected** ( ) <div id="class_tree_signal_nothing_selected"></div>

Emitted when a left mouse button click does not select any item.

<!-- rst-class:: classref-section-separator -->

---

## 枚举

<div id="_class_enum_tree_selectmode"></div>

enum **SelectMode**: <div id="enum_tree_selectmode"></div>

<div id="_class_tree_constant_select_single"></div>

[SelectMode](#enum_tree_selectmode) **SELECT_SINGLE** = ``0``

Allows selection of a single cell at a time. From the perspective of items, only a single item is allowed to be selected. And there is only one column selected in the selected item.

The focus cursor is always hidden in this mode, but it is positioned at the current selection, making the currently selected item the currently focused item.

<div id="_class_tree_constant_select_row"></div>

[SelectMode](#enum_tree_selectmode) **SELECT_ROW** = ``1``

Allows selection of a single row at a time. From the perspective of items, only a single items is allowed to be selected. And all the columns are selected in the selected item.

The focus cursor is always hidden in this mode, but it is positioned at the first column of the current selection, making the currently selected item the currently focused item.

<div id="_class_tree_constant_select_multi"></div>

[SelectMode](#enum_tree_selectmode) **SELECT_MULTI** = ``2``

Allows selection of multiple cells at the same time. From the perspective of items, multiple items are allowed to be selected. And there can be multiple columns selected in each selected item.

The focus cursor is visible in this mode, the item or column under the cursor is not necessarily selected.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_enum_tree_dropmodeflags"></div>

enum **DropModeFlags**: <div id="enum_tree_dropmodeflags"></div>

<div id="_class_tree_constant_drop_mode_disabled"></div>

[DropModeFlags](#enum_tree_dropmodeflags) **DROP_MODE_DISABLED** = ``0``

Disables all drop sections, but still allows to detect the "on item" drop section by [`get_drop_section_at_position`](#class_tree_method_get_drop_section_at_position).

 **Note:** This is the default flag, it has no effect when combined with other flags.

<div id="_class_tree_constant_drop_mode_on_item"></div>

[DropModeFlags](#enum_tree_dropmodeflags) **DROP_MODE_ON_ITEM** = ``1``

Enables the "on item" drop section. This drop section covers the entire item.

When combined with [`DROP_MODE_INBETWEEN`](#class_tree_constant_drop_mode_inbetween), this drop section halves the height and stays centered vertically.

<div id="_class_tree_constant_drop_mode_inbetween"></div>

[DropModeFlags](#enum_tree_dropmodeflags) **DROP_MODE_INBETWEEN** = ``2``

Enables "above item" and "below item" drop sections. The "above item" drop section covers the top half of the item, and the "below item" drop section covers the bottom half.

When combined with [`DROP_MODE_ON_ITEM`](#class_tree_constant_drop_mode_on_item), these drop sections halves the height and stays on top / bottom accordingly.

<!-- rst-class:: classref-section-separator -->

---

## 属性说明

<div id="_class_tree_property_allow_reselect"></div>

[`bool`](class_bool.md) **allow_reselect** = ``false`` <div id="class_tree_property_allow_reselect"></div>

- `void` **set_allow_reselect** ( value: [`bool`](class_bool.md) )
- [`bool`](class_bool.md) **get_allow_reselect** ( )

If `true`, the currently selected cell may be selected again.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_tree_property_allow_rmb_select"></div>

[`bool`](class_bool.md) **allow_rmb_select** = ``false`` <div id="class_tree_property_allow_rmb_select"></div>

- `void` **set_allow_rmb_select** ( value: [`bool`](class_bool.md) )
- [`bool`](class_bool.md) **get_allow_rmb_select** ( )

If `true`, a right mouse button click can select items.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_tree_property_allow_search"></div>

[`bool`](class_bool.md) **allow_search** = ``true`` <div id="class_tree_property_allow_search"></div>

- `void` **set_allow_search** ( value: [`bool`](class_bool.md) )
- [`bool`](class_bool.md) **get_allow_search** ( )

If `true`, allows navigating the **Tree** with letter keys through incremental search.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_tree_property_column_titles_visible"></div>

[`bool`](class_bool.md) **column_titles_visible** = ``false`` <div id="class_tree_property_column_titles_visible"></div>

- `void` **set_column_titles_visible** ( value: [`bool`](class_bool.md) )
- [`bool`](class_bool.md) **are_column_titles_visible** ( )

If `true`, column titles are visible.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_tree_property_columns"></div>

[`int`](class_int.md) **columns** = ``1`` <div id="class_tree_property_columns"></div>

- `void` **set_columns** ( value: [`int`](class_int.md) )
- [`int`](class_int.md) **get_columns** ( )

The number of columns.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_tree_property_drop_mode_flags"></div>

[`int`](class_int.md) **drop_mode_flags** = ``0`` <div id="class_tree_property_drop_mode_flags"></div>

- `void` **set_drop_mode_flags** ( value: [`int`](class_int.md) )
- [`int`](class_int.md) **get_drop_mode_flags** ( )

The drop mode as an OR combination of flags. See [DropModeFlags](#enum_tree_dropmodeflags) constants. Once dropping is done, reverts to [`DROP_MODE_DISABLED`](#class_tree_constant_drop_mode_disabled). Setting this during [`Control._can_drop_data`](#class_control_private_method__can_drop_data) is recommended.

This controls the drop sections, i.e. the decision and drawing of possible drop locations based on the mouse position.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_tree_property_enable_recursive_folding"></div>

[`bool`](class_bool.md) **enable_recursive_folding** = ``true`` <div id="class_tree_property_enable_recursive_folding"></div>

- `void` **set_enable_recursive_folding** ( value: [`bool`](class_bool.md) )
- [`bool`](class_bool.md) **is_recursive_folding_enabled** ( )

If `true`, recursive folding is enabled for this **Tree**. Holding down <i class="fa fa-gamepad"></i>`Shift` while clicking the fold arrow or using `ui_right`/`ui_left` shortcuts collapses or uncollapses the [`TreeItem`](class_treeitem.md) and all its descendants.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_tree_property_hide_folding"></div>

[`bool`](class_bool.md) **hide_folding** = ``false`` <div id="class_tree_property_hide_folding"></div>

- `void` **set_hide_folding** ( value: [`bool`](class_bool.md) )
- [`bool`](class_bool.md) **is_folding_hidden** ( )

If `true`, the folding arrow is hidden.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_tree_property_hide_root"></div>

[`bool`](class_bool.md) **hide_root** = ``false`` <div id="class_tree_property_hide_root"></div>

- `void` **set_hide_root** ( value: [`bool`](class_bool.md) )
- [`bool`](class_bool.md) **is_root_hidden** ( )

If `true`, the tree's root is hidden.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_tree_property_scroll_horizontal_enabled"></div>

[`bool`](class_bool.md) **scroll_horizontal_enabled** = ``true`` <div id="class_tree_property_scroll_horizontal_enabled"></div>

- `void` **set_h_scroll_enabled** ( value: [`bool`](class_bool.md) )
- [`bool`](class_bool.md) **is_h_scroll_enabled** ( )

If `true`, enables horizontal scrolling.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_tree_property_scroll_vertical_enabled"></div>

[`bool`](class_bool.md) **scroll_vertical_enabled** = ``true`` <div id="class_tree_property_scroll_vertical_enabled"></div>

- `void` **set_v_scroll_enabled** ( value: [`bool`](class_bool.md) )
- [`bool`](class_bool.md) **is_v_scroll_enabled** ( )

If `true`, enables vertical scrolling.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_tree_property_select_mode"></div>

[SelectMode](#enum_tree_selectmode) **select_mode** = ``0`` <div id="class_tree_property_select_mode"></div>

- `void` **set_select_mode** ( value: [SelectMode](#enum_tree_selectmode) )
- [SelectMode](#enum_tree_selectmode) **get_select_mode** ( )

Allows single or multiple selection. See the [SelectMode](#enum_tree_selectmode) constants.

<!-- rst-class:: classref-section-separator -->

---

## 方法说明

<div id="_class_tree_method_clear"></div>

`void` **clear** ( )<div id="class_tree_method_clear"></div>

Clears the tree. This removes all items.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_tree_method_create_item"></div>

[`TreeItem`](class_treeitem.md) **create_item** ( parent: [`TreeItem`](class_treeitem.md) = null, index: [`int`](class_int.md) = -1 )<div id="class_tree_method_create_item"></div>

Creates an item in the tree and adds it as a child of `parent`, which can be either a valid [`TreeItem`](class_treeitem.md) or `null`.

If `parent` is `null`, the root item will be the parent, or the new item will be the root itself if the tree is empty.

The new item will be the `index`-th child of parent, or it will be the last child if there are not enough siblings.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_tree_method_deselect_all"></div>

`void` **deselect_all** ( )<div id="class_tree_method_deselect_all"></div>

Deselects all tree items (rows and columns). In [`SELECT_MULTI`](#class_tree_constant_select_multi) mode also removes selection cursor.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_tree_method_edit_selected"></div>

[`bool`](class_bool.md) **edit_selected** ( force_edit: [`bool`](class_bool.md) = false )<div id="class_tree_method_edit_selected"></div>

Edits the selected tree item as if it was clicked.

Either the item must be set editable with [`TreeItem.set_editable`](#class_treeitem_method_set_editable) or `force_edit` must be `true`.

Returns `true` if the item could be edited. Fails if no item is selected.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_tree_method_ensure_cursor_is_visible"></div>

`void` **ensure_cursor_is_visible** ( )<div id="class_tree_method_ensure_cursor_is_visible"></div>

Makes the currently focused cell visible.

This will scroll the tree if necessary. In [`SELECT_ROW`](#class_tree_constant_select_row) mode, this will not do horizontal scrolling, as all the cells in the selected row is focused logically.

 **Note:** Despite the name of this method, the focus cursor itself is only visible in [`SELECT_MULTI`](#class_tree_constant_select_multi) mode.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_tree_method_get_button_id_at_position"></div>

[`int`](class_int.md) **get_button_id_at_position** ( position: [`Vector2`](class_vector2.md) ) const[^const]<div id="class_tree_method_get_button_id_at_position"></div>

Returns the button ID at `position`, or -1 if no button is there.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_tree_method_get_column_at_position"></div>

[`int`](class_int.md) **get_column_at_position** ( position: [`Vector2`](class_vector2.md) ) const[^const]<div id="class_tree_method_get_column_at_position"></div>

Returns the column index at `position`, or -1 if no item is there.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_tree_method_get_column_expand_ratio"></div>

[`int`](class_int.md) **get_column_expand_ratio** ( column: [`int`](class_int.md) ) const[^const]<div id="class_tree_method_get_column_expand_ratio"></div>

Returns the expand ratio assigned to the column.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_tree_method_get_column_title"></div>

[`String`](class_string.md) **get_column_title** ( column: [`int`](class_int.md) ) const[^const]<div id="class_tree_method_get_column_title"></div>

Returns the column's title.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_tree_method_get_column_title_alignment"></div>

[HorizontalAlignment](#enum_@globalscope_horizontalalignment) **get_column_title_alignment** ( column: [`int`](class_int.md) ) const[^const]<div id="class_tree_method_get_column_title_alignment"></div>

Returns the column title alignment.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_tree_method_get_column_title_direction"></div>

[TextDirection](#enum_control_textdirection) **get_column_title_direction** ( column: [`int`](class_int.md) ) const[^const]<div id="class_tree_method_get_column_title_direction"></div>

Returns column title base writing direction.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_tree_method_get_column_title_language"></div>

[`String`](class_string.md) **get_column_title_language** ( column: [`int`](class_int.md) ) const[^const]<div id="class_tree_method_get_column_title_language"></div>

Returns column title language code.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_tree_method_get_column_width"></div>

[`int`](class_int.md) **get_column_width** ( column: [`int`](class_int.md) ) const[^const]<div id="class_tree_method_get_column_width"></div>

Returns the column's width in pixels.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_tree_method_get_custom_popup_rect"></div>

[`Rect2`](class_rect2.md) **get_custom_popup_rect** ( ) const[^const]<div id="class_tree_method_get_custom_popup_rect"></div>

Returns the rectangle for custom popups. Helper to create custom cell controls that display a popup. See [`TreeItem.set_cell_mode`](#class_treeitem_method_set_cell_mode).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_tree_method_get_drop_section_at_position"></div>

[`int`](class_int.md) **get_drop_section_at_position** ( position: [`Vector2`](class_vector2.md) ) const[^const]<div id="class_tree_method_get_drop_section_at_position"></div>

Returns the drop section at `position`, or -100 if no item is there.

Values -1, 0, or 1 will be returned for the "above item", "on item", and "below item" drop sections, respectively. See [DropModeFlags](#enum_tree_dropmodeflags) for a description of each drop section.

To get the item which the returned drop section is relative to, use [`get_item_at_position`](#class_tree_method_get_item_at_position).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_tree_method_get_edited"></div>

[`TreeItem`](class_treeitem.md) **get_edited** ( ) const[^const]<div id="class_tree_method_get_edited"></div>

Returns the currently edited item. Can be used with [`item_edited`](#class_tree_signal_item_edited) to get the item that was modified.



```gdscript

    func _ready():
        $Tree.item_edited.connect(on_Tree_item_edited)
    
    func on_Tree_item_edited():
        print($Tree.get_edited()) # This item just got edited (e.g. checked).
```

```csharp

    public override void _Ready()
    {
        GetNode<Tree>("Tree").ItemEdited += OnTreeItemEdited;
    }
    
    public void OnTreeItemEdited()
    {
        GD.Print(GetNode<Tree>("Tree").GetEdited()); // This item just got edited (e.g. checked).
    }
```







<!-- rst-class:: classref-item-separator -->

---

<div id="_class_tree_method_get_edited_column"></div>

[`int`](class_int.md) **get_edited_column** ( ) const[^const]<div id="class_tree_method_get_edited_column"></div>

Returns the column for the currently edited item.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_tree_method_get_item_area_rect"></div>

[`Rect2`](class_rect2.md) **get_item_area_rect** ( item: [`TreeItem`](class_treeitem.md), column: [`int`](class_int.md) = -1, button_index: [`int`](class_int.md) = -1 ) const[^const]<div id="class_tree_method_get_item_area_rect"></div>

Returns the rectangle area for the specified [`TreeItem`](class_treeitem.md). If `column` is specified, only get the position and size of that column, otherwise get the rectangle containing all columns. If a button index is specified, the rectangle of that button will be returned.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_tree_method_get_item_at_position"></div>

[`TreeItem`](class_treeitem.md) **get_item_at_position** ( position: [`Vector2`](class_vector2.md) ) const[^const]<div id="class_tree_method_get_item_at_position"></div>

Returns the tree item at the specified position (relative to the tree origin position).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_tree_method_get_next_selected"></div>

[`TreeItem`](class_treeitem.md) **get_next_selected** ( from: [`TreeItem`](class_treeitem.md) )<div id="class_tree_method_get_next_selected"></div>

Returns the next selected [`TreeItem`](class_treeitem.md) after the given one, or `null` if the end is reached.

If `from` is `null`, this returns the first selected item.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_tree_method_get_pressed_button"></div>

[`int`](class_int.md) **get_pressed_button** ( ) const[^const]<div id="class_tree_method_get_pressed_button"></div>

Returns the last pressed button's index.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_tree_method_get_root"></div>

[`TreeItem`](class_treeitem.md) **get_root** ( ) const[^const]<div id="class_tree_method_get_root"></div>

Returns the tree's root item, or `null` if the tree is empty.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_tree_method_get_scroll"></div>

[`Vector2`](class_vector2.md) **get_scroll** ( ) const[^const]<div id="class_tree_method_get_scroll"></div>

Returns the current scrolling position.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_tree_method_get_selected"></div>

[`TreeItem`](class_treeitem.md) **get_selected** ( ) const[^const]<div id="class_tree_method_get_selected"></div>

Returns the currently focused item, or `null` if no item is focused.

In [`SELECT_ROW`](#class_tree_constant_select_row) and [`SELECT_SINGLE`](#class_tree_constant_select_single) modes, the focused item is same as the selected item. In [`SELECT_MULTI`](#class_tree_constant_select_multi) mode, the focused item is the item under the focus cursor, not necessarily selected.

To get the currently selected item(s), use [`get_next_selected`](#class_tree_method_get_next_selected).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_tree_method_get_selected_column"></div>

[`int`](class_int.md) **get_selected_column** ( ) const[^const]<div id="class_tree_method_get_selected_column"></div>

Returns the currently focused column, or -1 if no column is focused.

In [`SELECT_SINGLE`](#class_tree_constant_select_single) mode, the focused column is the selected column. In [`SELECT_ROW`](#class_tree_constant_select_row) mode, the focused column is always 0 if any item is selected. In [`SELECT_MULTI`](#class_tree_constant_select_multi) mode, the focused column is the column under the focus cursor, and there are not necessarily any column selected.

To tell whether a column of an item is selected, use [`TreeItem.is_selected`](#class_treeitem_method_is_selected).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_tree_method_is_column_clipping_content"></div>

[`bool`](class_bool.md) **is_column_clipping_content** ( column: [`int`](class_int.md) ) const[^const]<div id="class_tree_method_is_column_clipping_content"></div>

Returns `true` if the column has enabled clipping (see [`set_column_clip_content`](#class_tree_method_set_column_clip_content)).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_tree_method_is_column_expanding"></div>

[`bool`](class_bool.md) **is_column_expanding** ( column: [`int`](class_int.md) ) const[^const]<div id="class_tree_method_is_column_expanding"></div>

Returns `true` if the column has enabled expanding (see [`set_column_expand`](#class_tree_method_set_column_expand)).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_tree_method_scroll_to_item"></div>

`void` **scroll_to_item** ( item: [`TreeItem`](class_treeitem.md), center_on_item: [`bool`](class_bool.md) = false )<div id="class_tree_method_scroll_to_item"></div>

Causes the **Tree** to jump to the specified [`TreeItem`](class_treeitem.md).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_tree_method_set_column_clip_content"></div>

`void` **set_column_clip_content** ( column: [`int`](class_int.md), enable: [`bool`](class_bool.md) )<div id="class_tree_method_set_column_clip_content"></div>

Allows to enable clipping for column's content, making the content size ignored.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_tree_method_set_column_custom_minimum_width"></div>

`void` **set_column_custom_minimum_width** ( column: [`int`](class_int.md), min_width: [`int`](class_int.md) )<div id="class_tree_method_set_column_custom_minimum_width"></div>

Overrides the calculated minimum width of a column. It can be set to `0` to restore the default behavior. Columns that have the "Expand" flag will use their "min_width" in a similar fashion to [`Control.size_flags_stretch_ratio`](#class_control_property_size_flags_stretch_ratio).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_tree_method_set_column_expand"></div>

`void` **set_column_expand** ( column: [`int`](class_int.md), expand: [`bool`](class_bool.md) )<div id="class_tree_method_set_column_expand"></div>

If `true`, the column will have the "Expand" flag of [`Control`](class_control.md). Columns that have the "Expand" flag will use their expand ratio in a similar fashion to [`Control.size_flags_stretch_ratio`](#class_control_property_size_flags_stretch_ratio) (see [`set_column_expand_ratio`](#class_tree_method_set_column_expand_ratio)).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_tree_method_set_column_expand_ratio"></div>

`void` **set_column_expand_ratio** ( column: [`int`](class_int.md), ratio: [`int`](class_int.md) )<div id="class_tree_method_set_column_expand_ratio"></div>

Sets the relative expand ratio for a column. See [`set_column_expand`](#class_tree_method_set_column_expand).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_tree_method_set_column_title"></div>

`void` **set_column_title** ( column: [`int`](class_int.md), title: [`String`](class_string.md) )<div id="class_tree_method_set_column_title"></div>

Sets the title of a column.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_tree_method_set_column_title_alignment"></div>

`void` **set_column_title_alignment** ( column: [`int`](class_int.md), title_alignment: [HorizontalAlignment](#enum_@globalscope_horizontalalignment) )<div id="class_tree_method_set_column_title_alignment"></div>

Sets the column title alignment. Note that [`@GlobalScope.HORIZONTAL_ALIGNMENT_FILL`](#class_@globalscope_constant_horizontal_alignment_fill) is not supported for column titles.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_tree_method_set_column_title_direction"></div>

`void` **set_column_title_direction** ( column: [`int`](class_int.md), direction: [TextDirection](#enum_control_textdirection) )<div id="class_tree_method_set_column_title_direction"></div>

Sets column title base writing direction.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_tree_method_set_column_title_language"></div>

`void` **set_column_title_language** ( column: [`int`](class_int.md), language: [`String`](class_string.md) )<div id="class_tree_method_set_column_title_language"></div>

Sets language code of column title used for line-breaking and text shaping algorithms, if left empty current locale is used instead.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_tree_method_set_selected"></div>

`void` **set_selected** ( item: [`TreeItem`](class_treeitem.md), column: [`int`](class_int.md) )<div id="class_tree_method_set_selected"></div>

Selects the specified [`TreeItem`](class_treeitem.md) and column.

<!-- rst-class:: classref-section-separator -->

---

## 主题属性说明

<div id="_class_tree_theme_color_children_hl_line_color"></div>

[`Color`](class_color.md) **children_hl_line_color** = ``Color(0.27, 0.27, 0.27, 1)`` <div id="class_tree_theme_color_children_hl_line_color"></div>

The [`Color`](class_color.md) of the relationship lines between the selected [`TreeItem`](class_treeitem.md) and its children.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_tree_theme_color_custom_button_font_highlight"></div>

[`Color`](class_color.md) **custom_button_font_highlight** = ``Color(0.95, 0.95, 0.95, 1)`` <div id="class_tree_theme_color_custom_button_font_highlight"></div>

Text [`Color`](class_color.md) for a [`TreeItem.CELL_MODE_CUSTOM`](#class_treeitem_constant_cell_mode_custom) mode cell when it's hovered.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_tree_theme_color_drop_position_color"></div>

[`Color`](class_color.md) **drop_position_color** = ``Color(1, 1, 1, 1)`` <div id="class_tree_theme_color_drop_position_color"></div>

[`Color`](class_color.md) used to draw possible drop locations. See [DropModeFlags](#enum_tree_dropmodeflags) constants for further description of drop locations.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_tree_theme_color_font_color"></div>

[`Color`](class_color.md) **font_color** = ``Color(0.7, 0.7, 0.7, 1)`` <div id="class_tree_theme_color_font_color"></div>

Default text [`Color`](class_color.md) of the item.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_tree_theme_color_font_disabled_color"></div>

[`Color`](class_color.md) **font_disabled_color** = ``Color(0.875, 0.875, 0.875, 0.5)`` <div id="class_tree_theme_color_font_disabled_color"></div>

Text [`Color`](class_color.md) for a [`TreeItem.CELL_MODE_CHECK`](#class_treeitem_constant_cell_mode_check) mode cell when it's non-editable (see [`TreeItem.set_editable`](#class_treeitem_method_set_editable)).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_tree_theme_color_font_outline_color"></div>

[`Color`](class_color.md) **font_outline_color** = ``Color(0, 0, 0, 1)`` <div id="class_tree_theme_color_font_outline_color"></div>

The tint of text outline of the item.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_tree_theme_color_font_selected_color"></div>

[`Color`](class_color.md) **font_selected_color** = ``Color(1, 1, 1, 1)`` <div id="class_tree_theme_color_font_selected_color"></div>

Text [`Color`](class_color.md) used when the item is selected.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_tree_theme_color_guide_color"></div>

[`Color`](class_color.md) **guide_color** = ``Color(0.7, 0.7, 0.7, 0.25)`` <div id="class_tree_theme_color_guide_color"></div>

[`Color`](class_color.md) of the guideline.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_tree_theme_color_parent_hl_line_color"></div>

[`Color`](class_color.md) **parent_hl_line_color** = ``Color(0.27, 0.27, 0.27, 1)`` <div id="class_tree_theme_color_parent_hl_line_color"></div>

The [`Color`](class_color.md) of the relationship lines between the selected [`TreeItem`](class_treeitem.md) and its parents.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_tree_theme_color_relationship_line_color"></div>

[`Color`](class_color.md) **relationship_line_color** = ``Color(0.27, 0.27, 0.27, 1)`` <div id="class_tree_theme_color_relationship_line_color"></div>

The default [`Color`](class_color.md) of the relationship lines.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_tree_theme_color_title_button_color"></div>

[`Color`](class_color.md) **title_button_color** = ``Color(0.875, 0.875, 0.875, 1)`` <div id="class_tree_theme_color_title_button_color"></div>

Default text [`Color`](class_color.md) of the title button.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_tree_theme_constant_button_margin"></div>

[`int`](class_int.md) **button_margin** = ``4`` <div id="class_tree_theme_constant_button_margin"></div>

The horizontal space between each button in a cell.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_tree_theme_constant_children_hl_line_width"></div>

[`int`](class_int.md) **children_hl_line_width** = ``1`` <div id="class_tree_theme_constant_children_hl_line_width"></div>

The width of the relationship lines between the selected [`TreeItem`](class_treeitem.md) and its children.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_tree_theme_constant_draw_guides"></div>

[`int`](class_int.md) **draw_guides** = ``1`` <div id="class_tree_theme_constant_draw_guides"></div>

Draws the guidelines if not zero, this acts as a boolean. The guideline is a horizontal line drawn at the bottom of each item.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_tree_theme_constant_draw_relationship_lines"></div>

[`int`](class_int.md) **draw_relationship_lines** = ``0`` <div id="class_tree_theme_constant_draw_relationship_lines"></div>

Draws the relationship lines if not zero, this acts as a boolean. Relationship lines are drawn at the start of child items to show hierarchy.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_tree_theme_constant_h_separation"></div>

[`int`](class_int.md) **h_separation** = ``4`` <div id="class_tree_theme_constant_h_separation"></div>

The horizontal space between item cells. This is also used as the margin at the start of an item when folding is disabled.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_tree_theme_constant_icon_max_width"></div>

[`int`](class_int.md) **icon_max_width** = ``0`` <div id="class_tree_theme_constant_icon_max_width"></div>

The maximum allowed width of the icon in item's cells. This limit is applied on top of the default size of the icon, but before the value set with [`TreeItem.set_icon_max_width`](#class_treeitem_method_set_icon_max_width). The height is adjusted according to the icon's ratio.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_tree_theme_constant_inner_item_margin_bottom"></div>

[`int`](class_int.md) **inner_item_margin_bottom** = ``0`` <div id="class_tree_theme_constant_inner_item_margin_bottom"></div>

The inner bottom margin of a cell.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_tree_theme_constant_inner_item_margin_left"></div>

[`int`](class_int.md) **inner_item_margin_left** = ``0`` <div id="class_tree_theme_constant_inner_item_margin_left"></div>

The inner left margin of a cell.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_tree_theme_constant_inner_item_margin_right"></div>

[`int`](class_int.md) **inner_item_margin_right** = ``0`` <div id="class_tree_theme_constant_inner_item_margin_right"></div>

The inner right margin of a cell.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_tree_theme_constant_inner_item_margin_top"></div>

[`int`](class_int.md) **inner_item_margin_top** = ``0`` <div id="class_tree_theme_constant_inner_item_margin_top"></div>

The inner top margin of a cell.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_tree_theme_constant_item_margin"></div>

[`int`](class_int.md) **item_margin** = ``16`` <div id="class_tree_theme_constant_item_margin"></div>

The horizontal margin at the start of an item. This is used when folding is enabled for the item.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_tree_theme_constant_outline_size"></div>

[`int`](class_int.md) **outline_size** = ``0`` <div id="class_tree_theme_constant_outline_size"></div>

The size of the text outline.

 **Note:** If using a font with [`FontFile.multichannel_signed_distance_field`](#class_fontfile_property_multichannel_signed_distance_field) enabled, its [`FontFile.msdf_pixel_range`](#class_fontfile_property_msdf_pixel_range) must be set to at least *twice* the value of [`outline_size`](#class_tree_theme_constant_outline_size) for outline rendering to look correct. Otherwise, the outline may appear to be cut off earlier than intended.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_tree_theme_constant_parent_hl_line_margin"></div>

[`int`](class_int.md) **parent_hl_line_margin** = ``0`` <div id="class_tree_theme_constant_parent_hl_line_margin"></div>

The space between the parent relationship lines for the selected [`TreeItem`](class_treeitem.md) and the relationship lines to its siblings that are not selected.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_tree_theme_constant_parent_hl_line_width"></div>

[`int`](class_int.md) **parent_hl_line_width** = ``1`` <div id="class_tree_theme_constant_parent_hl_line_width"></div>

The width of the relationship lines between the selected [`TreeItem`](class_treeitem.md) and its parents.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_tree_theme_constant_relationship_line_width"></div>

[`int`](class_int.md) **relationship_line_width** = ``1`` <div id="class_tree_theme_constant_relationship_line_width"></div>

The default width of the relationship lines.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_tree_theme_constant_scroll_border"></div>

[`int`](class_int.md) **scroll_border** = ``4`` <div id="class_tree_theme_constant_scroll_border"></div>

The maximum distance between the mouse cursor and the control's border to trigger border scrolling when dragging.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_tree_theme_constant_scroll_speed"></div>

[`int`](class_int.md) **scroll_speed** = ``12`` <div id="class_tree_theme_constant_scroll_speed"></div>

The speed of border scrolling.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_tree_theme_constant_scrollbar_h_separation"></div>

[`int`](class_int.md) **scrollbar_h_separation** = ``4`` <div id="class_tree_theme_constant_scrollbar_h_separation"></div>

The horizontal separation of tree content and scrollbar.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_tree_theme_constant_scrollbar_margin_bottom"></div>

[`int`](class_int.md) **scrollbar_margin_bottom** = ``-1`` <div id="class_tree_theme_constant_scrollbar_margin_bottom"></div>

The bottom margin of the scrollbars. When negative, uses [`panel`](#class_tree_theme_style_panel) bottom margin.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_tree_theme_constant_scrollbar_margin_left"></div>

[`int`](class_int.md) **scrollbar_margin_left** = ``-1`` <div id="class_tree_theme_constant_scrollbar_margin_left"></div>

The left margin of the horizontal scrollbar. When negative, uses [`panel`](#class_tree_theme_style_panel) left margin.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_tree_theme_constant_scrollbar_margin_right"></div>

[`int`](class_int.md) **scrollbar_margin_right** = ``-1`` <div id="class_tree_theme_constant_scrollbar_margin_right"></div>

The right margin of the scrollbars. When negative, uses [`panel`](#class_tree_theme_style_panel) right margin.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_tree_theme_constant_scrollbar_margin_top"></div>

[`int`](class_int.md) **scrollbar_margin_top** = ``-1`` <div id="class_tree_theme_constant_scrollbar_margin_top"></div>

The top margin of the vertical scrollbar. When negative, uses [`panel`](#class_tree_theme_style_panel) top margin.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_tree_theme_constant_scrollbar_v_separation"></div>

[`int`](class_int.md) **scrollbar_v_separation** = ``4`` <div id="class_tree_theme_constant_scrollbar_v_separation"></div>

The vertical separation of tree content and scrollbar.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_tree_theme_constant_v_separation"></div>

[`int`](class_int.md) **v_separation** = ``4`` <div id="class_tree_theme_constant_v_separation"></div>

The vertical padding inside each item, i.e. the distance between the item's content and top/bottom border.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_tree_theme_font_font"></div>

[`Font`](class_font.md) **font** <div id="class_tree_theme_font_font"></div>

[`Font`](class_font.md) of the item's text.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_tree_theme_font_title_button_font"></div>

[`Font`](class_font.md) **title_button_font** <div id="class_tree_theme_font_title_button_font"></div>

[`Font`](class_font.md) of the title button's text.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_tree_theme_font_size_font_size"></div>

[`int`](class_int.md) **font_size** <div id="class_tree_theme_font_size_font_size"></div>

Font size of the item's text.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_tree_theme_font_size_title_button_font_size"></div>

[`int`](class_int.md) **title_button_font_size** <div id="class_tree_theme_font_size_title_button_font_size"></div>

Font size of the title button's text.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_tree_theme_icon_arrow"></div>

[`Texture2D`](class_texture2d.md) **arrow** <div id="class_tree_theme_icon_arrow"></div>

The arrow icon used when a foldable item is not collapsed.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_tree_theme_icon_arrow_collapsed"></div>

[`Texture2D`](class_texture2d.md) **arrow_collapsed** <div id="class_tree_theme_icon_arrow_collapsed"></div>

The arrow icon used when a foldable item is collapsed (for left-to-right layouts).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_tree_theme_icon_arrow_collapsed_mirrored"></div>

[`Texture2D`](class_texture2d.md) **arrow_collapsed_mirrored** <div id="class_tree_theme_icon_arrow_collapsed_mirrored"></div>

The arrow icon used when a foldable item is collapsed (for right-to-left layouts).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_tree_theme_icon_checked"></div>

[`Texture2D`](class_texture2d.md) **checked** <div id="class_tree_theme_icon_checked"></div>

The check icon to display when the [`TreeItem.CELL_MODE_CHECK`](#class_treeitem_constant_cell_mode_check) mode cell is checked and editable (see [`TreeItem.set_editable`](#class_treeitem_method_set_editable)).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_tree_theme_icon_checked_disabled"></div>

[`Texture2D`](class_texture2d.md) **checked_disabled** <div id="class_tree_theme_icon_checked_disabled"></div>

The check icon to display when the [`TreeItem.CELL_MODE_CHECK`](#class_treeitem_constant_cell_mode_check) mode cell is checked and non-editable (see [`TreeItem.set_editable`](#class_treeitem_method_set_editable)).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_tree_theme_icon_indeterminate"></div>

[`Texture2D`](class_texture2d.md) **indeterminate** <div id="class_tree_theme_icon_indeterminate"></div>

The check icon to display when the [`TreeItem.CELL_MODE_CHECK`](#class_treeitem_constant_cell_mode_check) mode cell is indeterminate and editable (see [`TreeItem.set_editable`](#class_treeitem_method_set_editable)).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_tree_theme_icon_indeterminate_disabled"></div>

[`Texture2D`](class_texture2d.md) **indeterminate_disabled** <div id="class_tree_theme_icon_indeterminate_disabled"></div>

The check icon to display when the [`TreeItem.CELL_MODE_CHECK`](#class_treeitem_constant_cell_mode_check) mode cell is indeterminate and non-editable (see [`TreeItem.set_editable`](#class_treeitem_method_set_editable)).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_tree_theme_icon_select_arrow"></div>

[`Texture2D`](class_texture2d.md) **select_arrow** <div id="class_tree_theme_icon_select_arrow"></div>

The arrow icon to display for the [`TreeItem.CELL_MODE_RANGE`](#class_treeitem_constant_cell_mode_range) mode cell.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_tree_theme_icon_unchecked"></div>

[`Texture2D`](class_texture2d.md) **unchecked** <div id="class_tree_theme_icon_unchecked"></div>

The check icon to display when the [`TreeItem.CELL_MODE_CHECK`](#class_treeitem_constant_cell_mode_check) mode cell is unchecked and editable (see [`TreeItem.set_editable`](#class_treeitem_method_set_editable)).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_tree_theme_icon_unchecked_disabled"></div>

[`Texture2D`](class_texture2d.md) **unchecked_disabled** <div id="class_tree_theme_icon_unchecked_disabled"></div>

The check icon to display when the [`TreeItem.CELL_MODE_CHECK`](#class_treeitem_constant_cell_mode_check) mode cell is unchecked and non-editable (see [`TreeItem.set_editable`](#class_treeitem_method_set_editable)).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_tree_theme_icon_updown"></div>

[`Texture2D`](class_texture2d.md) **updown** <div id="class_tree_theme_icon_updown"></div>

The updown arrow icon to display for the [`TreeItem.CELL_MODE_RANGE`](#class_treeitem_constant_cell_mode_range) mode cell.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_tree_theme_style_button_pressed"></div>

[`StyleBox`](class_stylebox.md) **button_pressed** <div id="class_tree_theme_style_button_pressed"></div>

[`StyleBox`](class_stylebox.md) used when a button in the tree is pressed.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_tree_theme_style_cursor"></div>

[`StyleBox`](class_stylebox.md) **cursor** <div id="class_tree_theme_style_cursor"></div>

[`StyleBox`](class_stylebox.md) used for the cursor, when the **Tree** is being focused.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_tree_theme_style_cursor_unfocused"></div>

[`StyleBox`](class_stylebox.md) **cursor_unfocused** <div id="class_tree_theme_style_cursor_unfocused"></div>

[`StyleBox`](class_stylebox.md) used for the cursor, when the **Tree** is not being focused.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_tree_theme_style_custom_button"></div>

[`StyleBox`](class_stylebox.md) **custom_button** <div id="class_tree_theme_style_custom_button"></div>

Default [`StyleBox`](class_stylebox.md) for a [`TreeItem.CELL_MODE_CUSTOM`](#class_treeitem_constant_cell_mode_custom) mode cell when button is enabled with [`TreeItem.set_custom_as_button`](#class_treeitem_method_set_custom_as_button).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_tree_theme_style_custom_button_hover"></div>

[`StyleBox`](class_stylebox.md) **custom_button_hover** <div id="class_tree_theme_style_custom_button_hover"></div>

[`StyleBox`](class_stylebox.md) for a [`TreeItem.CELL_MODE_CUSTOM`](#class_treeitem_constant_cell_mode_custom) mode button cell when it's hovered.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_tree_theme_style_custom_button_pressed"></div>

[`StyleBox`](class_stylebox.md) **custom_button_pressed** <div id="class_tree_theme_style_custom_button_pressed"></div>

[`StyleBox`](class_stylebox.md) for a [`TreeItem.CELL_MODE_CUSTOM`](#class_treeitem_constant_cell_mode_custom) mode button cell when it's pressed.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_tree_theme_style_focus"></div>

[`StyleBox`](class_stylebox.md) **focus** <div id="class_tree_theme_style_focus"></div>

The focused style for the **Tree**, drawn on top of everything.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_tree_theme_style_panel"></div>

[`StyleBox`](class_stylebox.md) **panel** <div id="class_tree_theme_style_panel"></div>

The background style for the **Tree**.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_tree_theme_style_selected"></div>

[`StyleBox`](class_stylebox.md) **selected** <div id="class_tree_theme_style_selected"></div>

[`StyleBox`](class_stylebox.md) for the selected items, used when the **Tree** is not being focused.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_tree_theme_style_selected_focus"></div>

[`StyleBox`](class_stylebox.md) **selected_focus** <div id="class_tree_theme_style_selected_focus"></div>

[`StyleBox`](class_stylebox.md) for the selected items, used when the **Tree** is being focused.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_tree_theme_style_title_button_hover"></div>

[`StyleBox`](class_stylebox.md) **title_button_hover** <div id="class_tree_theme_style_title_button_hover"></div>

[`StyleBox`](class_stylebox.md) used when the title button is being hovered.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_tree_theme_style_title_button_normal"></div>

[`StyleBox`](class_stylebox.md) **title_button_normal** <div id="class_tree_theme_style_title_button_normal"></div>

Default [`StyleBox`](class_stylebox.md) for the title button.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_tree_theme_style_title_button_pressed"></div>

[`StyleBox`](class_stylebox.md) **title_button_pressed** <div id="class_tree_theme_style_title_button_pressed"></div>

[`StyleBox`](class_stylebox.md) used when the title button is being pressed.

[^virtual]: 本方法通常需要用户覆盖才能生效。
[^const]: 本方法无副作用，不会修改该实例的任何成员变量。
[^vararg]: 本方法除了能接受在此处描述的参数外，还能够继续接受任意数量的参数。
[^constructor]: 本方法用于构造某个类型。
[^static]: 调用本方法无需实例，可直接使用类名进行调用。
[^operator]: 本方法描述的是使用本类型作为左操作数的有效运算符。
[^bitfield]: 这个值是由下列位标志构成位掩码的整数。
[^void]: 无返回值。
