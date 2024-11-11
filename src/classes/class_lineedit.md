<!-- ⚠ 请勿编辑本文件 ⚠ -->
<!-- 本文档使用脚本从 WeDot 引擎源码仓库生成。 -->
<!-- 生成脚本：https://github.com/WeDot-Engine/WeDot/tree/master/doc/tools/make_md.py； -->
<!-- 原文件：https://github.com/WeDot-Engine/WeDot/tree/master/doc/classes/LineEdit.xml。 -->

<div id="_class_lineedit"></div>

# LineEdit

**继承：** [`Control`](class_control.md) **<** [`CanvasItem`](class_canvasitem.md) **<** [`Node`](class_node.md) **<** [`Object`](class_object.md)

An input field for single-line text.

## 描述

**LineEdit** provides an input field for editing a single line of text.

- When the **LineEdit** control is focused using the keyboard arrow keys, it will only gain focus and not enter edit mode.

- To enter edit mode, click on the control with the mouse or press the `ui_text_submit` action (by default <i class="fa fa-gamepad"></i>`Enter` or <i class="fa fa-gamepad"></i>`Kp Enter`).

- To exit edit mode, press `ui_text_submit` or `ui_cancel` (by default <i class="fa fa-gamepad"></i>`Escape`) actions.

- Check [`edit`](class_lineedit.md#class_lineedit_method_edit), [`unedit`](class_lineedit.md#class_lineedit_method_unedit), [`is_editing`](class_lineedit.md#class_lineedit_method_is_editing), and [`editing_toggled`](class_lineedit.md#class_lineedit_signal_editing_toggled) for more information.

 **Important:** 

- Focusing the **LineEdit** with `ui_focus_next` (by default <i class="fa fa-gamepad"></i>`Tab`) or `ui_focus_prev` (by default <i class="fa fa-gamepad"></i>`Shift + Tab`) or [`Control.grab_focus`](class_control.md#class_control_method_grab_focus) still enters edit mode (for compatibility).

 **LineEdit** features many built-in shortcuts that are always available (<i class="fa fa-gamepad"></i>`Ctrl` here maps to <i class="fa fa-gamepad"></i>`Cmd` on macOS):

- <i class="fa fa-gamepad"></i>`Ctrl + C`: Copy

- <i class="fa fa-gamepad"></i>`Ctrl + X`: Cut

- <i class="fa fa-gamepad"></i>`Ctrl + V` or <i class="fa fa-gamepad"></i>`Ctrl + Y`: Paste/"yank"

- <i class="fa fa-gamepad"></i>`Ctrl + Z`: Undo

- <i class="fa fa-gamepad"></i>`Ctrl + ~`: Swap input direction.

- <i class="fa fa-gamepad"></i>`Ctrl + Shift + Z`: Redo

- <i class="fa fa-gamepad"></i>`Ctrl + U`: Delete text from the caret position to the beginning of the line

- <i class="fa fa-gamepad"></i>`Ctrl + K`: Delete text from the caret position to the end of the line

- <i class="fa fa-gamepad"></i>`Ctrl + A`: Select all text

- <i class="fa fa-gamepad"></i>`Up Arrow`/<i class="fa fa-gamepad"></i>`Down Arrow`: Move the caret to the beginning/end of the line

On macOS, some extra keyboard shortcuts are available:

- <i class="fa fa-gamepad"></i>`Cmd + F`: Same as <i class="fa fa-gamepad"></i>`Right Arrow`, move the caret one character right

- <i class="fa fa-gamepad"></i>`Cmd + B`: Same as <i class="fa fa-gamepad"></i>`Left Arrow`, move the caret one character left

- <i class="fa fa-gamepad"></i>`Cmd + P`: Same as <i class="fa fa-gamepad"></i>`Up Arrow`, move the caret to the previous line

- <i class="fa fa-gamepad"></i>`Cmd + N`: Same as <i class="fa fa-gamepad"></i>`Down Arrow`, move the caret to the next line

- <i class="fa fa-gamepad"></i>`Cmd + D`: Same as <i class="fa fa-gamepad"></i>`Delete`, delete the character on the right side of caret

- <i class="fa fa-gamepad"></i>`Cmd + H`: Same as <i class="fa fa-gamepad"></i>`Backspace`, delete the character on the left side of the caret

- <i class="fa fa-gamepad"></i>`Cmd + A`: Same as <i class="fa fa-gamepad"></i>`Home`, move the caret to the beginning of the line

- <i class="fa fa-gamepad"></i>`Cmd + E`: Same as <i class="fa fa-gamepad"></i>`End`, move the caret to the end of the line

- <i class="fa fa-gamepad"></i>`Cmd + Left Arrow`: Same as <i class="fa fa-gamepad"></i>`Home`, move the caret to the beginning of the line

- <i class="fa fa-gamepad"></i>`Cmd + Right Arrow`: Same as <i class="fa fa-gamepad"></i>`End`, move the caret to the end of the line

 **Note:** Caret movement shortcuts listed above are not affected by [`shortcut_keys_enabled`](class_lineedit.md#class_lineedit_property_shortcut_keys_enabled).

## 属性

|||
|:-:|:--|
| [HorizontalAlignment](#enum_@globalscope_horizontalalignment) | [`alignment`](class_lineedit.md#class_lineedit_property_alignment)                                                         | ``0``                                                                                             |
| [`bool`](class_bool.md)                                       | [`caret_blink`](class_lineedit.md#class_lineedit_property_caret_blink)                                                     | ``false``                                                                                         |
| [`float`](class_float.md)                                     | [`caret_blink_interval`](class_lineedit.md#class_lineedit_property_caret_blink_interval)                                   | ``0.65``                                                                                          |
| [`int`](class_int.md)                                         | [`caret_column`](class_lineedit.md#class_lineedit_property_caret_column)                                                   | ``0``                                                                                             |
| [`bool`](class_bool.md)                                       | [`caret_force_displayed`](class_lineedit.md#class_lineedit_property_caret_force_displayed)                                 | ``false``                                                                                         |
| [`bool`](class_bool.md)                                       | [`caret_mid_grapheme`](class_lineedit.md#class_lineedit_property_caret_mid_grapheme)                                       | ``false``                                                                                         |
| [`bool`](class_bool.md)                                       | [`clear_button_enabled`](class_lineedit.md#class_lineedit_property_clear_button_enabled)                                   | ``false``                                                                                         |
| [`bool`](class_bool.md)                                       | [`context_menu_enabled`](class_lineedit.md#class_lineedit_property_context_menu_enabled)                                   | ``true``                                                                                          |
| [`bool`](class_bool.md)                                       | [`deselect_on_focus_loss_enabled`](class_lineedit.md#class_lineedit_property_deselect_on_focus_loss_enabled)               | ``true``                                                                                          |
| [`bool`](class_bool.md)                                       | [`drag_and_drop_selection_enabled`](class_lineedit.md#class_lineedit_property_drag_and_drop_selection_enabled)             | ``true``                                                                                          |
| [`bool`](class_bool.md)                                       | [`draw_control_chars`](class_lineedit.md#class_lineedit_property_draw_control_chars)                                       | ``false``                                                                                         |
| [`bool`](class_bool.md)                                       | [`editable`](class_lineedit.md#class_lineedit_property_editable)                                                           | ``true``                                                                                          |
| [`bool`](class_bool.md)                                       | [`expand_to_text_length`](class_lineedit.md#class_lineedit_property_expand_to_text_length)                                 | ``false``                                                                                         |
| [`bool`](class_bool.md)                                       | [`flat`](class_lineedit.md#class_lineedit_property_flat)                                                                   | ``false``                                                                                         |
| [FocusMode](#enum_control_focusmode)                          | focus_mode                                                                                                                 | ``2`` (overrides [`Control`](class_control.md#class_control_property_focus_mode))                 |
| [`String`](class_string.md)                                   | [`language`](class_lineedit.md#class_lineedit_property_language)                                                           | ``""``                                                                                            |
| [`int`](class_int.md)                                         | [`max_length`](class_lineedit.md#class_lineedit_property_max_length)                                                       | ``0``                                                                                             |
| [`bool`](class_bool.md)                                       | [`middle_mouse_paste_enabled`](class_lineedit.md#class_lineedit_property_middle_mouse_paste_enabled)                       | ``true``                                                                                          |
| [CursorShape](#enum_control_cursorshape)                      | mouse_default_cursor_shape                                                                                                 | ``1`` (overrides [`Control`](class_control.md#class_control_property_mouse_default_cursor_shape)) |
| [`String`](class_string.md)                                   | [`placeholder_text`](class_lineedit.md#class_lineedit_property_placeholder_text)                                           | ``""``                                                                                            |
| [`Texture2D`](class_texture2d.md)                             | [`right_icon`](class_lineedit.md#class_lineedit_property_right_icon)                                                       |                                                                                                   |
| [`bool`](class_bool.md)                                       | [`secret`](class_lineedit.md#class_lineedit_property_secret)                                                               | ``false``                                                                                         |
| [`String`](class_string.md)                                   | [`secret_character`](class_lineedit.md#class_lineedit_property_secret_character)                                           | ``"•"``                                                                                           |
| [`bool`](class_bool.md)                                       | [`select_all_on_focus`](class_lineedit.md#class_lineedit_property_select_all_on_focus)                                     | ``false``                                                                                         |
| [`bool`](class_bool.md)                                       | [`selecting_enabled`](class_lineedit.md#class_lineedit_property_selecting_enabled)                                         | ``true``                                                                                          |
| [`bool`](class_bool.md)                                       | [`shortcut_keys_enabled`](class_lineedit.md#class_lineedit_property_shortcut_keys_enabled)                                 | ``true``                                                                                          |
| [StructuredTextParser](#enum_textserver_structuredtextparser) | [`structured_text_bidi_override`](class_lineedit.md#class_lineedit_property_structured_text_bidi_override)                 | ``0``                                                                                             |
| [`Array`](class_array.md)                                     | [`structured_text_bidi_override_options`](class_lineedit.md#class_lineedit_property_structured_text_bidi_override_options) | ``[]``                                                                                            |
| [`String`](class_string.md)                                   | [`text`](class_lineedit.md#class_lineedit_property_text)                                                                   | ``""``                                                                                            |
| [TextDirection](#enum_control_textdirection)                  | [`text_direction`](class_lineedit.md#class_lineedit_property_text_direction)                                               | ``0``                                                                                             |
| [`bool`](class_bool.md)                                       | [`virtual_keyboard_enabled`](class_lineedit.md#class_lineedit_property_virtual_keyboard_enabled)                           | ``true``                                                                                          |
| [VirtualKeyboardType](#enum_lineedit_virtualkeyboardtype)     | [`virtual_keyboard_type`](class_lineedit.md#class_lineedit_property_virtual_keyboard_type)                                 | ``0``                                                                                             |

## 方法

|||
|:-:|:--|
| `void`                            | [`apply_ime`](class_lineedit.md#class_lineedit_method_apply_ime) ( )                                                                          |
| `void`                            | [`cancel_ime`](class_lineedit.md#class_lineedit_method_cancel_ime) ( )                                                                        |
| `void`                            | [`clear`](class_lineedit.md#class_lineedit_method_clear) ( )                                                                                  |
| `void`                            | [`delete_char_at_caret`](class_lineedit.md#class_lineedit_method_delete_char_at_caret) ( )                                                    |
| `void`                            | [`delete_text`](class_lineedit.md#class_lineedit_method_delete_text) ( from_column: [`int`](class_int.md), to_column: [`int`](class_int.md) ) |
| `void`                            | [`deselect`](class_lineedit.md#class_lineedit_method_deselect) ( )                                                                            |
| `void`                            | [`edit`](class_lineedit.md#class_lineedit_method_edit) ( )                                                                                    |
| [`PopupMenu`](class_popupmenu.md) | [`get_menu`](class_lineedit.md#class_lineedit_method_get_menu) ( ) const[^const]                                                              |
| [`float`](class_float.md)         | [`get_scroll_offset`](class_lineedit.md#class_lineedit_method_get_scroll_offset) ( ) const[^const]                                            |
| [`String`](class_string.md)       | [`get_selected_text`](class_lineedit.md#class_lineedit_method_get_selected_text) ( )                                                          |
| [`int`](class_int.md)             | [`get_selection_from_column`](class_lineedit.md#class_lineedit_method_get_selection_from_column) ( ) const[^const]                            |
| [`int`](class_int.md)             | [`get_selection_to_column`](class_lineedit.md#class_lineedit_method_get_selection_to_column) ( ) const[^const]                                |
| [`bool`](class_bool.md)           | [`has_ime_text`](class_lineedit.md#class_lineedit_method_has_ime_text) ( ) const[^const]                                                      |
| [`bool`](class_bool.md)           | [`has_redo`](class_lineedit.md#class_lineedit_method_has_redo) ( ) const[^const]                                                              |
| [`bool`](class_bool.md)           | [`has_selection`](class_lineedit.md#class_lineedit_method_has_selection) ( ) const[^const]                                                    |
| [`bool`](class_bool.md)           | [`has_undo`](class_lineedit.md#class_lineedit_method_has_undo) ( ) const[^const]                                                              |
| `void`                            | [`insert_text_at_caret`](class_lineedit.md#class_lineedit_method_insert_text_at_caret) ( text: [`String`](class_string.md) )                  |
| [`bool`](class_bool.md)           | [`is_editing`](class_lineedit.md#class_lineedit_method_is_editing) ( ) const[^const]                                                          |
| [`bool`](class_bool.md)           | [`is_menu_visible`](class_lineedit.md#class_lineedit_method_is_menu_visible) ( ) const[^const]                                                |
| `void`                            | [`menu_option`](class_lineedit.md#class_lineedit_method_menu_option) ( option: [`int`](class_int.md) )                                        |
| `void`                            | [`select`](class_lineedit.md#class_lineedit_method_select) ( from: [`int`](class_int.md) = 0, to: [`int`](class_int.md) = -1 )                |
| `void`                            | [`select_all`](class_lineedit.md#class_lineedit_method_select_all) ( )                                                                        |
| `void`                            | [`unedit`](class_lineedit.md#class_lineedit_method_unedit) ( )                                                                                |

## 主题属性

|||
|:-:|:--|
| [`Color`](class_color.md)         | [`caret_color`](class_lineedit.md#class_lineedit_theme_color_caret_color)                               | ``Color(0.95, 0.95, 0.95, 1)``      |
| [`Color`](class_color.md)         | [`clear_button_color`](class_lineedit.md#class_lineedit_theme_color_clear_button_color)                 | ``Color(0.875, 0.875, 0.875, 1)``   |
| [`Color`](class_color.md)         | [`clear_button_color_pressed`](class_lineedit.md#class_lineedit_theme_color_clear_button_color_pressed) | ``Color(1, 1, 1, 1)``               |
| [`Color`](class_color.md)         | [`font_color`](class_lineedit.md#class_lineedit_theme_color_font_color)                                 | ``Color(0.875, 0.875, 0.875, 1)``   |
| [`Color`](class_color.md)         | [`font_outline_color`](class_lineedit.md#class_lineedit_theme_color_font_outline_color)                 | ``Color(0, 0, 0, 1)``               |
| [`Color`](class_color.md)         | [`font_placeholder_color`](class_lineedit.md#class_lineedit_theme_color_font_placeholder_color)         | ``Color(0.875, 0.875, 0.875, 0.6)`` |
| [`Color`](class_color.md)         | [`font_selected_color`](class_lineedit.md#class_lineedit_theme_color_font_selected_color)               | ``Color(1, 1, 1, 1)``               |
| [`Color`](class_color.md)         | [`font_uneditable_color`](class_lineedit.md#class_lineedit_theme_color_font_uneditable_color)           | ``Color(0.875, 0.875, 0.875, 0.5)`` |
| [`Color`](class_color.md)         | [`selection_color`](class_lineedit.md#class_lineedit_theme_color_selection_color)                       | ``Color(0.5, 0.5, 0.5, 1)``         |
| [`int`](class_int.md)             | [`caret_width`](class_lineedit.md#class_lineedit_theme_constant_caret_width)                            | ``1``                               |
| [`int`](class_int.md)             | [`minimum_character_width`](class_lineedit.md#class_lineedit_theme_constant_minimum_character_width)    | ``4``                               |
| [`int`](class_int.md)             | [`outline_size`](class_lineedit.md#class_lineedit_theme_constant_outline_size)                          | ``0``                               |
| [`Font`](class_font.md)           | [`font`](class_lineedit.md#class_lineedit_theme_font_font)                                              |                                     |
| [`int`](class_int.md)             | [`font_size`](class_lineedit.md#class_lineedit_theme_font_size_font_size)                               |                                     |
| [`Texture2D`](class_texture2d.md) | [`clear`](class_lineedit.md#class_lineedit_theme_icon_clear)                                            |                                     |
| [`StyleBox`](class_stylebox.md)   | [`focus`](class_lineedit.md#class_lineedit_theme_style_focus)                                           |                                     |
| [`StyleBox`](class_stylebox.md)   | [`normal`](class_lineedit.md#class_lineedit_theme_style_normal)                                         |                                     |
| [`StyleBox`](class_stylebox.md)   | [`read_only`](class_lineedit.md#class_lineedit_theme_style_read_only)                                   |                                     |

<!-- rst-class:: classref-section-separator -->

---

## 信号

<div id="_class_class_lineedit_signal_editing_toggled"></div>

**editing_toggled** ( toggled_on: [`bool`](class_bool.md) ) <div id="class_lineedit_signal_editing_toggled"></div>

Emitted when the **LineEdit** switches in or out of edit mode.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_class_lineedit_signal_text_change_rejected"></div>

**text_change_rejected** ( rejected_substring: [`String`](class_string.md) ) <div id="class_lineedit_signal_text_change_rejected"></div>

Emitted when appending text that overflows the [`max_length`](class_lineedit.md#class_lineedit_property_max_length). The appended text is truncated to fit [`max_length`](class_lineedit.md#class_lineedit_property_max_length), and the part that couldn't fit is passed as the `rejected_substring` argument.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_class_lineedit_signal_text_changed"></div>

**text_changed** ( new_text: [`String`](class_string.md) ) <div id="class_lineedit_signal_text_changed"></div>

Emitted when the text changes.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_class_lineedit_signal_text_submitted"></div>

**text_submitted** ( new_text: [`String`](class_string.md) ) <div id="class_lineedit_signal_text_submitted"></div>

Emitted when the user presses the `ui_text_submit` action (by default: <i class="fa fa-gamepad"></i>`Enter` or <i class="fa fa-gamepad"></i>`Kp Enter`) while the **LineEdit** has focus.

<!-- rst-class:: classref-section-separator -->

---

## 枚举

<div id="_class_enum_lineedit_menuitems"></div>

enum **MenuItems**: <div id="enum_lineedit_menuitems"></div>

<div id="_class_lineedit_constant_menu_cut"></div>

[MenuItems](#enum_lineedit_menuitems) **MENU_CUT** = ``0``

Cuts (copies and clears) the selected text.

<div id="_class_lineedit_constant_menu_copy"></div>

[MenuItems](#enum_lineedit_menuitems) **MENU_COPY** = ``1``

Copies the selected text.

<div id="_class_lineedit_constant_menu_paste"></div>

[MenuItems](#enum_lineedit_menuitems) **MENU_PASTE** = ``2``

Pastes the clipboard text over the selected text (or at the caret's position).

Non-printable escape characters are automatically stripped from the OS clipboard via [`String.strip_escapes`](class_string.md#class_string_method_strip_escapes).

<div id="_class_lineedit_constant_menu_clear"></div>

[MenuItems](#enum_lineedit_menuitems) **MENU_CLEAR** = ``3``

Erases the whole **LineEdit** text.

<div id="_class_lineedit_constant_menu_select_all"></div>

[MenuItems](#enum_lineedit_menuitems) **MENU_SELECT_ALL** = ``4``

Selects the whole **LineEdit** text.

<div id="_class_lineedit_constant_menu_undo"></div>

[MenuItems](#enum_lineedit_menuitems) **MENU_UNDO** = ``5``

Undoes the previous action.

<div id="_class_lineedit_constant_menu_redo"></div>

[MenuItems](#enum_lineedit_menuitems) **MENU_REDO** = ``6``

Reverse the last undo action.

<div id="_class_lineedit_constant_menu_submenu_text_dir"></div>

[MenuItems](#enum_lineedit_menuitems) **MENU_SUBMENU_TEXT_DIR** = ``7``

ID of "Text Writing Direction" submenu.

<div id="_class_lineedit_constant_menu_dir_inherited"></div>

[MenuItems](#enum_lineedit_menuitems) **MENU_DIR_INHERITED** = ``8``

Sets text direction to inherited.

<div id="_class_lineedit_constant_menu_dir_auto"></div>

[MenuItems](#enum_lineedit_menuitems) **MENU_DIR_AUTO** = ``9``

Sets text direction to automatic.

<div id="_class_lineedit_constant_menu_dir_ltr"></div>

[MenuItems](#enum_lineedit_menuitems) **MENU_DIR_LTR** = ``10``

Sets text direction to left-to-right.

<div id="_class_lineedit_constant_menu_dir_rtl"></div>

[MenuItems](#enum_lineedit_menuitems) **MENU_DIR_RTL** = ``11``

Sets text direction to right-to-left.

<div id="_class_lineedit_constant_menu_display_ucc"></div>

[MenuItems](#enum_lineedit_menuitems) **MENU_DISPLAY_UCC** = ``12``

Toggles control character display.

<div id="_class_lineedit_constant_menu_submenu_insert_ucc"></div>

[MenuItems](#enum_lineedit_menuitems) **MENU_SUBMENU_INSERT_UCC** = ``13``

ID of "Insert Control Character" submenu.

<div id="_class_lineedit_constant_menu_insert_lrm"></div>

[MenuItems](#enum_lineedit_menuitems) **MENU_INSERT_LRM** = ``14``

Inserts left-to-right mark (LRM) character.

<div id="_class_lineedit_constant_menu_insert_rlm"></div>

[MenuItems](#enum_lineedit_menuitems) **MENU_INSERT_RLM** = ``15``

Inserts right-to-left mark (RLM) character.

<div id="_class_lineedit_constant_menu_insert_lre"></div>

[MenuItems](#enum_lineedit_menuitems) **MENU_INSERT_LRE** = ``16``

Inserts start of left-to-right embedding (LRE) character.

<div id="_class_lineedit_constant_menu_insert_rle"></div>

[MenuItems](#enum_lineedit_menuitems) **MENU_INSERT_RLE** = ``17``

Inserts start of right-to-left embedding (RLE) character.

<div id="_class_lineedit_constant_menu_insert_lro"></div>

[MenuItems](#enum_lineedit_menuitems) **MENU_INSERT_LRO** = ``18``

Inserts start of left-to-right override (LRO) character.

<div id="_class_lineedit_constant_menu_insert_rlo"></div>

[MenuItems](#enum_lineedit_menuitems) **MENU_INSERT_RLO** = ``19``

Inserts start of right-to-left override (RLO) character.

<div id="_class_lineedit_constant_menu_insert_pdf"></div>

[MenuItems](#enum_lineedit_menuitems) **MENU_INSERT_PDF** = ``20``

Inserts pop direction formatting (PDF) character.

<div id="_class_lineedit_constant_menu_insert_alm"></div>

[MenuItems](#enum_lineedit_menuitems) **MENU_INSERT_ALM** = ``21``

Inserts Arabic letter mark (ALM) character.

<div id="_class_lineedit_constant_menu_insert_lri"></div>

[MenuItems](#enum_lineedit_menuitems) **MENU_INSERT_LRI** = ``22``

Inserts left-to-right isolate (LRI) character.

<div id="_class_lineedit_constant_menu_insert_rli"></div>

[MenuItems](#enum_lineedit_menuitems) **MENU_INSERT_RLI** = ``23``

Inserts right-to-left isolate (RLI) character.

<div id="_class_lineedit_constant_menu_insert_fsi"></div>

[MenuItems](#enum_lineedit_menuitems) **MENU_INSERT_FSI** = ``24``

Inserts first strong isolate (FSI) character.

<div id="_class_lineedit_constant_menu_insert_pdi"></div>

[MenuItems](#enum_lineedit_menuitems) **MENU_INSERT_PDI** = ``25``

Inserts pop direction isolate (PDI) character.

<div id="_class_lineedit_constant_menu_insert_zwj"></div>

[MenuItems](#enum_lineedit_menuitems) **MENU_INSERT_ZWJ** = ``26``

Inserts zero width joiner (ZWJ) character.

<div id="_class_lineedit_constant_menu_insert_zwnj"></div>

[MenuItems](#enum_lineedit_menuitems) **MENU_INSERT_ZWNJ** = ``27``

Inserts zero width non-joiner (ZWNJ) character.

<div id="_class_lineedit_constant_menu_insert_wj"></div>

[MenuItems](#enum_lineedit_menuitems) **MENU_INSERT_WJ** = ``28``

Inserts word joiner (WJ) character.

<div id="_class_lineedit_constant_menu_insert_shy"></div>

[MenuItems](#enum_lineedit_menuitems) **MENU_INSERT_SHY** = ``29``

Inserts soft hyphen (SHY) character.

<div id="_class_lineedit_constant_menu_max"></div>

[MenuItems](#enum_lineedit_menuitems) **MENU_MAX** = ``30``

Represents the size of the [MenuItems](#enum_lineedit_menuitems) enum.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_enum_lineedit_virtualkeyboardtype"></div>

enum **VirtualKeyboardType**: <div id="enum_lineedit_virtualkeyboardtype"></div>

<div id="_class_lineedit_constant_keyboard_type_default"></div>

[VirtualKeyboardType](#enum_lineedit_virtualkeyboardtype) **KEYBOARD_TYPE_DEFAULT** = ``0``

Default text virtual keyboard.

<div id="_class_lineedit_constant_keyboard_type_multiline"></div>

[VirtualKeyboardType](#enum_lineedit_virtualkeyboardtype) **KEYBOARD_TYPE_MULTILINE** = ``1``

Multiline virtual keyboard.

<div id="_class_lineedit_constant_keyboard_type_number"></div>

[VirtualKeyboardType](#enum_lineedit_virtualkeyboardtype) **KEYBOARD_TYPE_NUMBER** = ``2``

Virtual number keypad, useful for PIN entry.

<div id="_class_lineedit_constant_keyboard_type_number_decimal"></div>

[VirtualKeyboardType](#enum_lineedit_virtualkeyboardtype) **KEYBOARD_TYPE_NUMBER_DECIMAL** = ``3``

Virtual number keypad, useful for entering fractional numbers.

<div id="_class_lineedit_constant_keyboard_type_phone"></div>

[VirtualKeyboardType](#enum_lineedit_virtualkeyboardtype) **KEYBOARD_TYPE_PHONE** = ``4``

Virtual phone number keypad.

<div id="_class_lineedit_constant_keyboard_type_email_address"></div>

[VirtualKeyboardType](#enum_lineedit_virtualkeyboardtype) **KEYBOARD_TYPE_EMAIL_ADDRESS** = ``5``

Virtual keyboard with additional keys to assist with typing email addresses.

<div id="_class_lineedit_constant_keyboard_type_password"></div>

[VirtualKeyboardType](#enum_lineedit_virtualkeyboardtype) **KEYBOARD_TYPE_PASSWORD** = ``6``

Virtual keyboard for entering a password. On most platforms, this should disable autocomplete and autocapitalization.

 **Note:** This is not supported on Web. Instead, this behaves identically to [`KEYBOARD_TYPE_DEFAULT`](class_lineedit.md#class_lineedit_constant_keyboard_type_default).

<div id="_class_lineedit_constant_keyboard_type_url"></div>

[VirtualKeyboardType](#enum_lineedit_virtualkeyboardtype) **KEYBOARD_TYPE_URL** = ``7``

Virtual keyboard with additional keys to assist with typing URLs.

<!-- rst-class:: classref-section-separator -->

---

## 属性说明

<div id="_class_lineedit_property_alignment"></div>

[HorizontalAlignment](#enum_@globalscope_horizontalalignment) **alignment** = ``0`` <div id="class_lineedit_property_alignment"></div>

- `void` **set_horizontal_alignment** ( value: [HorizontalAlignment](#enum_@globalscope_horizontalalignment) )
- [HorizontalAlignment](#enum_@globalscope_horizontalalignment) **get_horizontal_alignment** ( )

Text alignment as defined in the [HorizontalAlignment](#enum_@globalscope_horizontalalignment) enum.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_lineedit_property_caret_blink"></div>

[`bool`](class_bool.md) **caret_blink** = ``false`` <div id="class_lineedit_property_caret_blink"></div>

- `void` **set_caret_blink_enabled** ( value: [`bool`](class_bool.md) )
- [`bool`](class_bool.md) **is_caret_blink_enabled** ( )

If `true`, makes the caret blink.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_lineedit_property_caret_blink_interval"></div>

[`float`](class_float.md) **caret_blink_interval** = ``0.65`` <div id="class_lineedit_property_caret_blink_interval"></div>

- `void` **set_caret_blink_interval** ( value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_caret_blink_interval** ( )

The interval at which the caret blinks (in seconds).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_lineedit_property_caret_column"></div>

[`int`](class_int.md) **caret_column** = ``0`` <div id="class_lineedit_property_caret_column"></div>

- `void` **set_caret_column** ( value: [`int`](class_int.md) )
- [`int`](class_int.md) **get_caret_column** ( )

The caret's column position inside the **LineEdit**. When set, the text may scroll to accommodate it.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_lineedit_property_caret_force_displayed"></div>

[`bool`](class_bool.md) **caret_force_displayed** = ``false`` <div id="class_lineedit_property_caret_force_displayed"></div>

- `void` **set_caret_force_displayed** ( value: [`bool`](class_bool.md) )
- [`bool`](class_bool.md) **is_caret_force_displayed** ( )

If `true`, the **LineEdit** will always show the caret, even if focus is lost.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_lineedit_property_caret_mid_grapheme"></div>

[`bool`](class_bool.md) **caret_mid_grapheme** = ``false`` <div id="class_lineedit_property_caret_mid_grapheme"></div>

- `void` **set_caret_mid_grapheme_enabled** ( value: [`bool`](class_bool.md) )
- [`bool`](class_bool.md) **is_caret_mid_grapheme_enabled** ( )

Allow moving caret, selecting and removing the individual composite character components.

 **Note:** <i class="fa fa-gamepad"></i>`Backspace` is always removing individual composite character components.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_lineedit_property_clear_button_enabled"></div>

[`bool`](class_bool.md) **clear_button_enabled** = ``false`` <div id="class_lineedit_property_clear_button_enabled"></div>

- `void` **set_clear_button_enabled** ( value: [`bool`](class_bool.md) )
- [`bool`](class_bool.md) **is_clear_button_enabled** ( )

If `true`, the **LineEdit** will show a clear button if [`text`](class_lineedit.md#class_lineedit_property_text) is not empty, which can be used to clear the text quickly.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_lineedit_property_context_menu_enabled"></div>

[`bool`](class_bool.md) **context_menu_enabled** = ``true`` <div id="class_lineedit_property_context_menu_enabled"></div>

- `void` **set_context_menu_enabled** ( value: [`bool`](class_bool.md) )
- [`bool`](class_bool.md) **is_context_menu_enabled** ( )

If `true`, the context menu will appear when right-clicked.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_lineedit_property_deselect_on_focus_loss_enabled"></div>

[`bool`](class_bool.md) **deselect_on_focus_loss_enabled** = ``true`` <div id="class_lineedit_property_deselect_on_focus_loss_enabled"></div>

- `void` **set_deselect_on_focus_loss_enabled** ( value: [`bool`](class_bool.md) )
- [`bool`](class_bool.md) **is_deselect_on_focus_loss_enabled** ( )

If `true`, the selected text will be deselected when focus is lost.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_lineedit_property_drag_and_drop_selection_enabled"></div>

[`bool`](class_bool.md) **drag_and_drop_selection_enabled** = ``true`` <div id="class_lineedit_property_drag_and_drop_selection_enabled"></div>

- `void` **set_drag_and_drop_selection_enabled** ( value: [`bool`](class_bool.md) )
- [`bool`](class_bool.md) **is_drag_and_drop_selection_enabled** ( )

If `true`, allow drag and drop of selected text.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_lineedit_property_draw_control_chars"></div>

[`bool`](class_bool.md) **draw_control_chars** = ``false`` <div id="class_lineedit_property_draw_control_chars"></div>

- `void` **set_draw_control_chars** ( value: [`bool`](class_bool.md) )
- [`bool`](class_bool.md) **get_draw_control_chars** ( )

If `true`, control characters are displayed.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_lineedit_property_editable"></div>

[`bool`](class_bool.md) **editable** = ``true`` <div id="class_lineedit_property_editable"></div>

- `void` **set_editable** ( value: [`bool`](class_bool.md) )
- [`bool`](class_bool.md) **is_editable** ( )

If `false`, existing text cannot be modified and new text cannot be added.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_lineedit_property_expand_to_text_length"></div>

[`bool`](class_bool.md) **expand_to_text_length** = ``false`` <div id="class_lineedit_property_expand_to_text_length"></div>

- `void` **set_expand_to_text_length_enabled** ( value: [`bool`](class_bool.md) )
- [`bool`](class_bool.md) **is_expand_to_text_length_enabled** ( )

If `true`, the **LineEdit** width will increase to stay longer than the [`text`](class_lineedit.md#class_lineedit_property_text). It will **not** compress if the [`text`](class_lineedit.md#class_lineedit_property_text) is shortened.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_lineedit_property_flat"></div>

[`bool`](class_bool.md) **flat** = ``false`` <div id="class_lineedit_property_flat"></div>

- `void` **set_flat** ( value: [`bool`](class_bool.md) )
- [`bool`](class_bool.md) **is_flat** ( )

If `true`, the **LineEdit** doesn't display decoration.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_lineedit_property_language"></div>

[`String`](class_string.md) **language** = ``""`` <div id="class_lineedit_property_language"></div>

- `void` **set_language** ( value: [`String`](class_string.md) )
- [`String`](class_string.md) **get_language** ( )

Language code used for line-breaking and text shaping algorithms. If left empty, current locale is used instead.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_lineedit_property_max_length"></div>

[`int`](class_int.md) **max_length** = ``0`` <div id="class_lineedit_property_max_length"></div>

- `void` **set_max_length** ( value: [`int`](class_int.md) )
- [`int`](class_int.md) **get_max_length** ( )

Maximum number of characters that can be entered inside the **LineEdit**. If `0`, there is no limit.

When a limit is defined, characters that would exceed [`max_length`](class_lineedit.md#class_lineedit_property_max_length) are truncated. This happens both for existing [`text`](class_lineedit.md#class_lineedit_property_text) contents when setting the max length, or for new text inserted in the **LineEdit**, including pasting.

If any input text is truncated, the [`text_change_rejected`](class_lineedit.md#class_lineedit_signal_text_change_rejected) signal is emitted with the truncated substring as parameter:



```gdscript

    text = "Hello world"
    max_length = 5
    # `text` becomes "Hello".
    max_length = 10
    text += " goodbye"
    # `text` becomes "Hello good".
    # `text_change_rejected` is emitted with "bye" as parameter.
```

```csharp

    Text = "Hello world";
    MaxLength = 5;
    // `Text` becomes "Hello".
    MaxLength = 10;
    Text += " goodbye";
    // `Text` becomes "Hello good".
    // `text_change_rejected` is emitted with "bye" as parameter.
```







<!-- rst-class:: classref-item-separator -->

---

<div id="_class_lineedit_property_middle_mouse_paste_enabled"></div>

[`bool`](class_bool.md) **middle_mouse_paste_enabled** = ``true`` <div id="class_lineedit_property_middle_mouse_paste_enabled"></div>

- `void` **set_middle_mouse_paste_enabled** ( value: [`bool`](class_bool.md) )
- [`bool`](class_bool.md) **is_middle_mouse_paste_enabled** ( )

If `false`, using middle mouse button to paste clipboard will be disabled.

 **Note:** This method is only implemented on Linux.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_lineedit_property_placeholder_text"></div>

[`String`](class_string.md) **placeholder_text** = ``""`` <div id="class_lineedit_property_placeholder_text"></div>

- `void` **set_placeholder** ( value: [`String`](class_string.md) )
- [`String`](class_string.md) **get_placeholder** ( )

Text shown when the **LineEdit** is empty. It is **not** the **LineEdit**'s default value (see [`text`](class_lineedit.md#class_lineedit_property_text)).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_lineedit_property_right_icon"></div>

[`Texture2D`](class_texture2d.md) **right_icon** <div id="class_lineedit_property_right_icon"></div>

- `void` **set_right_icon** ( value: [`Texture2D`](class_texture2d.md) )
- [`Texture2D`](class_texture2d.md) **get_right_icon** ( )

Sets the icon that will appear in the right end of the **LineEdit** if there's no [`text`](class_lineedit.md#class_lineedit_property_text), or always, if [`clear_button_enabled`](class_lineedit.md#class_lineedit_property_clear_button_enabled) is set to `false`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_lineedit_property_secret"></div>

[`bool`](class_bool.md) **secret** = ``false`` <div id="class_lineedit_property_secret"></div>

- `void` **set_secret** ( value: [`bool`](class_bool.md) )
- [`bool`](class_bool.md) **is_secret** ( )

If `true`, every character is replaced with the secret character (see [`secret_character`](class_lineedit.md#class_lineedit_property_secret_character)).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_lineedit_property_secret_character"></div>

[`String`](class_string.md) **secret_character** = ``"•"`` <div id="class_lineedit_property_secret_character"></div>

- `void` **set_secret_character** ( value: [`String`](class_string.md) )
- [`String`](class_string.md) **get_secret_character** ( )

The character to use to mask secret input. Only a single character can be used as the secret character. If it is longer than one character, only the first one will be used. If it is empty, a space will be used instead.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_lineedit_property_select_all_on_focus"></div>

[`bool`](class_bool.md) **select_all_on_focus** = ``false`` <div id="class_lineedit_property_select_all_on_focus"></div>

- `void` **set_select_all_on_focus** ( value: [`bool`](class_bool.md) )
- [`bool`](class_bool.md) **is_select_all_on_focus** ( )

If `true`, the **LineEdit** will select the whole text when it gains focus.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_lineedit_property_selecting_enabled"></div>

[`bool`](class_bool.md) **selecting_enabled** = ``true`` <div id="class_lineedit_property_selecting_enabled"></div>

- `void` **set_selecting_enabled** ( value: [`bool`](class_bool.md) )
- [`bool`](class_bool.md) **is_selecting_enabled** ( )

If `false`, it's impossible to select the text using mouse nor keyboard.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_lineedit_property_shortcut_keys_enabled"></div>

[`bool`](class_bool.md) **shortcut_keys_enabled** = ``true`` <div id="class_lineedit_property_shortcut_keys_enabled"></div>

- `void` **set_shortcut_keys_enabled** ( value: [`bool`](class_bool.md) )
- [`bool`](class_bool.md) **is_shortcut_keys_enabled** ( )

If `true`, shortcut keys for context menu items are enabled, even if the context menu is disabled.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_lineedit_property_structured_text_bidi_override"></div>

[StructuredTextParser](#enum_textserver_structuredtextparser) **structured_text_bidi_override** = ``0`` <div id="class_lineedit_property_structured_text_bidi_override"></div>

- `void` **set_structured_text_bidi_override** ( value: [StructuredTextParser](#enum_textserver_structuredtextparser) )
- [StructuredTextParser](#enum_textserver_structuredtextparser) **get_structured_text_bidi_override** ( )

Set BiDi algorithm override for the structured text.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_lineedit_property_structured_text_bidi_override_options"></div>

[`Array`](class_array.md) **structured_text_bidi_override_options** = ``[]`` <div id="class_lineedit_property_structured_text_bidi_override_options"></div>

- `void` **set_structured_text_bidi_override_options** ( value: [`Array`](class_array.md) )
- [`Array`](class_array.md) **get_structured_text_bidi_override_options** ( )

Set additional options for BiDi override.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_lineedit_property_text"></div>

[`String`](class_string.md) **text** = ``""`` <div id="class_lineedit_property_text"></div>

- `void` **set_text** ( value: [`String`](class_string.md) )
- [`String`](class_string.md) **get_text** ( )

String value of the **LineEdit**.

 **Note:** Changing text using this property won't emit the [`text_changed`](class_lineedit.md#class_lineedit_signal_text_changed) signal.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_lineedit_property_text_direction"></div>

[TextDirection](#enum_control_textdirection) **text_direction** = ``0`` <div id="class_lineedit_property_text_direction"></div>

- `void` **set_text_direction** ( value: [TextDirection](#enum_control_textdirection) )
- [TextDirection](#enum_control_textdirection) **get_text_direction** ( )

Base text writing direction.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_lineedit_property_virtual_keyboard_enabled"></div>

[`bool`](class_bool.md) **virtual_keyboard_enabled** = ``true`` <div id="class_lineedit_property_virtual_keyboard_enabled"></div>

- `void` **set_virtual_keyboard_enabled** ( value: [`bool`](class_bool.md) )
- [`bool`](class_bool.md) **is_virtual_keyboard_enabled** ( )

If `true`, the native virtual keyboard is shown when focused on platforms that support it.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_lineedit_property_virtual_keyboard_type"></div>

[VirtualKeyboardType](#enum_lineedit_virtualkeyboardtype) **virtual_keyboard_type** = ``0`` <div id="class_lineedit_property_virtual_keyboard_type"></div>

- `void` **set_virtual_keyboard_type** ( value: [VirtualKeyboardType](#enum_lineedit_virtualkeyboardtype) )
- [VirtualKeyboardType](#enum_lineedit_virtualkeyboardtype) **get_virtual_keyboard_type** ( )

Specifies the type of virtual keyboard to show.

<!-- rst-class:: classref-section-separator -->

---

## 方法说明

<div id="_class_lineedit_method_apply_ime"></div>

`void` **apply_ime** ( )<div id="class_lineedit_method_apply_ime"></div>

Applies text from the [*Input Method Editor*](https://en.wikipedia.org/wiki/Input_method) (IME) and closes the IME if it is open.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_lineedit_method_cancel_ime"></div>

`void` **cancel_ime** ( )<div id="class_lineedit_method_cancel_ime"></div>

Closes the [*Input Method Editor*](https://en.wikipedia.org/wiki/Input_method) (IME) if it is open. Any text in the IME will be lost.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_lineedit_method_clear"></div>

`void` **clear** ( )<div id="class_lineedit_method_clear"></div>

Erases the **LineEdit**'s [`text`](class_lineedit.md#class_lineedit_property_text).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_lineedit_method_delete_char_at_caret"></div>

`void` **delete_char_at_caret** ( )<div id="class_lineedit_method_delete_char_at_caret"></div>

Deletes one character at the caret's current position (equivalent to pressing <i class="fa fa-gamepad"></i>`Delete`).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_lineedit_method_delete_text"></div>

`void` **delete_text** ( from_column: [`int`](class_int.md), to_column: [`int`](class_int.md) )<div id="class_lineedit_method_delete_text"></div>

Deletes a section of the [`text`](class_lineedit.md#class_lineedit_property_text) going from position `from_column` to `to_column`. Both parameters should be within the text's length.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_lineedit_method_deselect"></div>

`void` **deselect** ( )<div id="class_lineedit_method_deselect"></div>

Clears the current selection.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_lineedit_method_edit"></div>

`void` **edit** ( )<div id="class_lineedit_method_edit"></div>

Allows entering edit mode whether the **LineEdit** is focused or not.

Use [`Callable.call_deferred`](class_callable.md#class_callable_method_call_deferred) if you want to enter edit mode on [`text_submitted`](class_lineedit.md#class_lineedit_signal_text_submitted).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_lineedit_method_get_menu"></div>

[`PopupMenu`](class_popupmenu.md) **get_menu** ( ) const[^const]<div id="class_lineedit_method_get_menu"></div>

Returns the [`PopupMenu`](class_popupmenu.md) of this **LineEdit**. By default, this menu is displayed when right-clicking on the **LineEdit**.

You can add custom menu items or remove standard ones. Make sure your IDs don't conflict with the standard ones (see [MenuItems](#enum_lineedit_menuitems)). For example:



```gdscript

    func _ready():
        var menu = get_menu()
        # Remove all items after "Redo".
        menu.item_count = menu.get_item_index(MENU_REDO) + 1
        # Add custom items.
        menu.add_separator()
        menu.add_item("Insert Date", MENU_MAX + 1)
        # Connect callback.
        menu.id_pressed.connect(_on_item_pressed)
    
    func _on_item_pressed(id):
        if id == MENU_MAX + 1:
            insert_text_at_caret(Time.get_date_string_from_system())
```

```csharp

    public override void _Ready()
    {
        var menu = GetMenu();
        // Remove all items after "Redo".
        menu.ItemCount = menu.GetItemIndex(LineEdit.MenuItems.Redo) + 1;
        // Add custom items.
        menu.AddSeparator();
        menu.AddItem("Insert Date", LineEdit.MenuItems.Max + 1);
        // Add event handler.
        menu.IdPressed += OnItemPressed;
    }
    
    public void OnItemPressed(int id)
    {
        if (id == LineEdit.MenuItems.Max + 1)
        {
            InsertTextAtCaret(Time.GetDateStringFromSystem());
        }
    }
```



 **Warning:** This is a required internal node, removing and freeing it may cause a crash. If you wish to hide it or any of its children, use their [`Window.visible`](class_window.md#class_window_property_visible) property.





<!-- rst-class:: classref-item-separator -->

---

<div id="_class_lineedit_method_get_scroll_offset"></div>

[`float`](class_float.md) **get_scroll_offset** ( ) const[^const]<div id="class_lineedit_method_get_scroll_offset"></div>

Returns the scroll offset due to [`caret_column`](class_lineedit.md#class_lineedit_property_caret_column), as a number of characters.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_lineedit_method_get_selected_text"></div>

[`String`](class_string.md) **get_selected_text** ( )<div id="class_lineedit_method_get_selected_text"></div>

Returns the text inside the selection.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_lineedit_method_get_selection_from_column"></div>

[`int`](class_int.md) **get_selection_from_column** ( ) const[^const]<div id="class_lineedit_method_get_selection_from_column"></div>

Returns the selection begin column.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_lineedit_method_get_selection_to_column"></div>

[`int`](class_int.md) **get_selection_to_column** ( ) const[^const]<div id="class_lineedit_method_get_selection_to_column"></div>

Returns the selection end column.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_lineedit_method_has_ime_text"></div>

[`bool`](class_bool.md) **has_ime_text** ( ) const[^const]<div id="class_lineedit_method_has_ime_text"></div>

Returns `true` if the user has text in the [*Input Method Editor*](https://en.wikipedia.org/wiki/Input_method) (IME).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_lineedit_method_has_redo"></div>

[`bool`](class_bool.md) **has_redo** ( ) const[^const]<div id="class_lineedit_method_has_redo"></div>

Returns `true` if a "redo" action is available.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_lineedit_method_has_selection"></div>

[`bool`](class_bool.md) **has_selection** ( ) const[^const]<div id="class_lineedit_method_has_selection"></div>

Returns `true` if the user has selected text.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_lineedit_method_has_undo"></div>

[`bool`](class_bool.md) **has_undo** ( ) const[^const]<div id="class_lineedit_method_has_undo"></div>

Returns `true` if an "undo" action is available.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_lineedit_method_insert_text_at_caret"></div>

`void` **insert_text_at_caret** ( text: [`String`](class_string.md) )<div id="class_lineedit_method_insert_text_at_caret"></div>

Inserts `text` at the caret. If the resulting value is longer than [`max_length`](class_lineedit.md#class_lineedit_property_max_length), nothing happens.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_lineedit_method_is_editing"></div>

[`bool`](class_bool.md) **is_editing** ( ) const[^const]<div id="class_lineedit_method_is_editing"></div>

Returns whether the **LineEdit** is being edited.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_lineedit_method_is_menu_visible"></div>

[`bool`](class_bool.md) **is_menu_visible** ( ) const[^const]<div id="class_lineedit_method_is_menu_visible"></div>

Returns whether the menu is visible. Use this instead of `get_menu().visible` to improve performance (so the creation of the menu is avoided).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_lineedit_method_menu_option"></div>

`void` **menu_option** ( option: [`int`](class_int.md) )<div id="class_lineedit_method_menu_option"></div>

Executes a given action as defined in the [MenuItems](#enum_lineedit_menuitems) enum.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_lineedit_method_select"></div>

`void` **select** ( from: [`int`](class_int.md) = 0, to: [`int`](class_int.md) = -1 )<div id="class_lineedit_method_select"></div>

Selects characters inside **LineEdit** between `from` and `to`. By default, `from` is at the beginning and `to` at the end.



```gdscript

    text = "Welcome"
    select() # Will select "Welcome".
    select(4) # Will select "ome".
    select(2, 5) # Will select "lco".
```

```csharp

    Text = "Welcome";
    Select(); // Will select "Welcome".
    Select(4); // Will select "ome".
    Select(2, 5); // Will select "lco".
```







<!-- rst-class:: classref-item-separator -->

---

<div id="_class_lineedit_method_select_all"></div>

`void` **select_all** ( )<div id="class_lineedit_method_select_all"></div>

Selects the whole [`String`](class_string.md).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_lineedit_method_unedit"></div>

`void` **unedit** ( )<div id="class_lineedit_method_unedit"></div>

Allows exiting edit mode while preserving focus.

<!-- rst-class:: classref-section-separator -->

---

## 主题属性说明

<div id="_class_lineedit_theme_color_caret_color"></div>

[`Color`](class_color.md) **caret_color** = ``Color(0.95, 0.95, 0.95, 1)`` <div id="class_lineedit_theme_color_caret_color"></div>

Color of the **LineEdit**'s caret (text cursor). This can be set to a fully transparent color to hide the caret entirely.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_lineedit_theme_color_clear_button_color"></div>

[`Color`](class_color.md) **clear_button_color** = ``Color(0.875, 0.875, 0.875, 1)`` <div id="class_lineedit_theme_color_clear_button_color"></div>

Color used as default tint for the clear button.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_lineedit_theme_color_clear_button_color_pressed"></div>

[`Color`](class_color.md) **clear_button_color_pressed** = ``Color(1, 1, 1, 1)`` <div id="class_lineedit_theme_color_clear_button_color_pressed"></div>

Color used for the clear button when it's pressed.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_lineedit_theme_color_font_color"></div>

[`Color`](class_color.md) **font_color** = ``Color(0.875, 0.875, 0.875, 1)`` <div id="class_lineedit_theme_color_font_color"></div>

Default font color.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_lineedit_theme_color_font_outline_color"></div>

[`Color`](class_color.md) **font_outline_color** = ``Color(0, 0, 0, 1)`` <div id="class_lineedit_theme_color_font_outline_color"></div>

The tint of text outline of the **LineEdit**.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_lineedit_theme_color_font_placeholder_color"></div>

[`Color`](class_color.md) **font_placeholder_color** = ``Color(0.875, 0.875, 0.875, 0.6)`` <div id="class_lineedit_theme_color_font_placeholder_color"></div>

Font color for [`placeholder_text`](class_lineedit.md#class_lineedit_property_placeholder_text).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_lineedit_theme_color_font_selected_color"></div>

[`Color`](class_color.md) **font_selected_color** = ``Color(1, 1, 1, 1)`` <div id="class_lineedit_theme_color_font_selected_color"></div>

Font color for selected text (inside the selection rectangle).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_lineedit_theme_color_font_uneditable_color"></div>

[`Color`](class_color.md) **font_uneditable_color** = ``Color(0.875, 0.875, 0.875, 0.5)`` <div id="class_lineedit_theme_color_font_uneditable_color"></div>

Font color when editing is disabled.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_lineedit_theme_color_selection_color"></div>

[`Color`](class_color.md) **selection_color** = ``Color(0.5, 0.5, 0.5, 1)`` <div id="class_lineedit_theme_color_selection_color"></div>

Color of the selection rectangle.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_lineedit_theme_constant_caret_width"></div>

[`int`](class_int.md) **caret_width** = ``1`` <div id="class_lineedit_theme_constant_caret_width"></div>

The caret's width in pixels. Greater values can be used to improve accessibility by ensuring the caret is easily visible, or to ensure consistency with a large font size.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_lineedit_theme_constant_minimum_character_width"></div>

[`int`](class_int.md) **minimum_character_width** = ``4`` <div id="class_lineedit_theme_constant_minimum_character_width"></div>

Minimum horizontal space for the text (not counting the clear button and content margins). This value is measured in count of 'M' characters (i.e. this number of 'M' characters can be displayed without scrolling).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_lineedit_theme_constant_outline_size"></div>

[`int`](class_int.md) **outline_size** = ``0`` <div id="class_lineedit_theme_constant_outline_size"></div>

The size of the text outline.

 **Note:** If using a font with [`FontFile.multichannel_signed_distance_field`](class_fontfile.md#class_fontfile_property_multichannel_signed_distance_field) enabled, its [`FontFile.msdf_pixel_range`](class_fontfile.md#class_fontfile_property_msdf_pixel_range) must be set to at least *twice* the value of [`outline_size`](class_lineedit.md#class_lineedit_theme_constant_outline_size) for outline rendering to look correct. Otherwise, the outline may appear to be cut off earlier than intended.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_lineedit_theme_font_font"></div>

[`Font`](class_font.md) **font** <div id="class_lineedit_theme_font_font"></div>

Font used for the text.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_lineedit_theme_font_size_font_size"></div>

[`int`](class_int.md) **font_size** <div id="class_lineedit_theme_font_size_font_size"></div>

Font size of the **LineEdit**'s text.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_lineedit_theme_icon_clear"></div>

[`Texture2D`](class_texture2d.md) **clear** <div id="class_lineedit_theme_icon_clear"></div>

Texture for the clear button. See [`clear_button_enabled`](class_lineedit.md#class_lineedit_property_clear_button_enabled).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_lineedit_theme_style_focus"></div>

[`StyleBox`](class_stylebox.md) **focus** <div id="class_lineedit_theme_style_focus"></div>

Background used when **LineEdit** has GUI focus. The [`focus`](class_lineedit.md#class_lineedit_theme_style_focus) [`StyleBox`](class_stylebox.md) is displayed *over* the base [`StyleBox`](class_stylebox.md), so a partially transparent [`StyleBox`](class_stylebox.md) should be used to ensure the base [`StyleBox`](class_stylebox.md) remains visible. A [`StyleBox`](class_stylebox.md) that represents an outline or an underline works well for this purpose. To disable the focus visual effect, assign a [`StyleBoxEmpty`](class_styleboxempty.md) resource. Note that disabling the focus visual effect will harm keyboard/controller navigation usability, so this is not recommended for accessibility reasons.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_lineedit_theme_style_normal"></div>

[`StyleBox`](class_stylebox.md) **normal** <div id="class_lineedit_theme_style_normal"></div>

Default background for the **LineEdit**.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_lineedit_theme_style_read_only"></div>

[`StyleBox`](class_stylebox.md) **read_only** <div id="class_lineedit_theme_style_read_only"></div>

Background used when **LineEdit** is in read-only mode ([`editable`](class_lineedit.md#class_lineedit_property_editable) is set to `false`).

[^virtual]: 本方法通常需要用户覆盖才能生效。
[^const]: 本方法无副作用，不会修改该实例的任何成员变量。
[^vararg]: 本方法除了能接受在此处描述的参数外，还能够继续接受任意数量的参数。
[^constructor]: 本方法用于构造某个类型。
[^static]: 调用本方法无需实例，可直接使用类名进行调用。
[^operator]: 本方法描述的是使用本类型作为左操作数的有效运算符。
[^bitfield]: 这个值是由下列位标志构成位掩码的整数。
[^void]: 无返回值。
