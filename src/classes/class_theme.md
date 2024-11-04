<!-- ⚠ 请勿编辑本文件 ⚠ -->
<!-- 本文档使用脚本从 WeDot 引擎源码仓库生成。 -->
<!-- 生成脚本：https://github.com/WeDot-Engine/WeDot/tree/4.3/doc/tools/make_md.py； -->
<!-- 原文件：https://github.com/WeDot-Engine/WeDot/tree/4.3/doc/classes/Theme.xml。 -->

<div id="_class_theme"></div>

# Theme

**继承：** [`Resource`](class_resource.md) **<** [`RefCounted`](class_refcounted.md) **<** [`Object`](class_object.md)

A resource used for styling/skinning [`Control`](class_control.md) s and [`Window`](class_window.md) s.

## 描述

A resource used for styling/skinning [`Control`](class_control.md) and [`Window`](class_window.md) nodes. While individual controls can be styled using their local theme overrides (see [`Control.add_theme_color_override`](#class_control_method_add_theme_color_override)), theme resources allow you to store and apply the same settings across all controls sharing the same type (e.g. style all [`Button`](class_button.md) s the same). One theme resource can be used for the entire project, but you can also set a separate theme resource to a branch of control nodes. A theme resource assigned to a control applies to the control itself, as well as all of its direct and indirect children (as long as a chain of controls is uninterrupted).

Use [`ProjectSettings.gui/theme/custom`](#class_projectsettings_property_gui/theme/custom) to set up a project-scope theme that will be available to every control in your project.

Use [`Control.theme`](#class_control_property_theme) of any control node to set up a theme that will be available to that control and all of its direct and indirect children.

## 属性

| [`float`](class_float.md) | [`default_base_scale`](#class_theme_property_default_base_scale) | ``0.0`` |
| [`Font`](class_font.md)   | [`default_font`](#class_theme_property_default_font)             |         |
| [`int`](class_int.md)     | [`default_font_size`](#class_theme_property_default_font_size)   | ``-1``  |

## 方法

| `void`                                            | [`add_type`](#class_theme_method_add_type) ( theme_type: [`StringName`](class_stringname.md) )                                                                                                                                                          |
| `void`                                            | [`clear`](#class_theme_method_clear) ( )                                                                                                                                                                                                                |
| `void`                                            | [`clear_color`](#class_theme_method_clear_color) ( name: [`StringName`](class_stringname.md), theme_type: [`StringName`](class_stringname.md) )                                                                                                         |
| `void`                                            | [`clear_constant`](#class_theme_method_clear_constant) ( name: [`StringName`](class_stringname.md), theme_type: [`StringName`](class_stringname.md) )                                                                                                   |
| `void`                                            | [`clear_font`](#class_theme_method_clear_font) ( name: [`StringName`](class_stringname.md), theme_type: [`StringName`](class_stringname.md) )                                                                                                           |
| `void`                                            | [`clear_font_size`](#class_theme_method_clear_font_size) ( name: [`StringName`](class_stringname.md), theme_type: [`StringName`](class_stringname.md) )                                                                                                 |
| `void`                                            | [`clear_icon`](#class_theme_method_clear_icon) ( name: [`StringName`](class_stringname.md), theme_type: [`StringName`](class_stringname.md) )                                                                                                           |
| `void`                                            | [`clear_stylebox`](#class_theme_method_clear_stylebox) ( name: [`StringName`](class_stringname.md), theme_type: [`StringName`](class_stringname.md) )                                                                                                   |
| `void`                                            | [`clear_theme_item`](#class_theme_method_clear_theme_item) ( data_type: [DataType](#enum_theme_datatype), name: [`StringName`](class_stringname.md), theme_type: [`StringName`](class_stringname.md) )                                                  |
| `void`                                            | [`clear_type_variation`](#class_theme_method_clear_type_variation) ( theme_type: [`StringName`](class_stringname.md) )                                                                                                                                  |
| [`Color`](class_color.md)                         | [`get_color`](#class_theme_method_get_color) ( name: [`StringName`](class_stringname.md), theme_type: [`StringName`](class_stringname.md) ) const[^const]                                                                                               |
| [`PackedStringArray`](class_packedstringarray.md) | [`get_color_list`](#class_theme_method_get_color_list) ( theme_type: [`String`](class_string.md) ) const[^const]                                                                                                                                        |
| [`PackedStringArray`](class_packedstringarray.md) | [`get_color_type_list`](#class_theme_method_get_color_type_list) ( ) const[^const]                                                                                                                                                                      |
| [`int`](class_int.md)                             | [`get_constant`](#class_theme_method_get_constant) ( name: [`StringName`](class_stringname.md), theme_type: [`StringName`](class_stringname.md) ) const[^const]                                                                                         |
| [`PackedStringArray`](class_packedstringarray.md) | [`get_constant_list`](#class_theme_method_get_constant_list) ( theme_type: [`String`](class_string.md) ) const[^const]                                                                                                                                  |
| [`PackedStringArray`](class_packedstringarray.md) | [`get_constant_type_list`](#class_theme_method_get_constant_type_list) ( ) const[^const]                                                                                                                                                                |
| [`Font`](class_font.md)                           | [`get_font`](#class_theme_method_get_font) ( name: [`StringName`](class_stringname.md), theme_type: [`StringName`](class_stringname.md) ) const[^const]                                                                                                 |
| [`PackedStringArray`](class_packedstringarray.md) | [`get_font_list`](#class_theme_method_get_font_list) ( theme_type: [`String`](class_string.md) ) const[^const]                                                                                                                                          |
| [`int`](class_int.md)                             | [`get_font_size`](#class_theme_method_get_font_size) ( name: [`StringName`](class_stringname.md), theme_type: [`StringName`](class_stringname.md) ) const[^const]                                                                                       |
| [`PackedStringArray`](class_packedstringarray.md) | [`get_font_size_list`](#class_theme_method_get_font_size_list) ( theme_type: [`String`](class_string.md) ) const[^const]                                                                                                                                |
| [`PackedStringArray`](class_packedstringarray.md) | [`get_font_size_type_list`](#class_theme_method_get_font_size_type_list) ( ) const[^const]                                                                                                                                                              |
| [`PackedStringArray`](class_packedstringarray.md) | [`get_font_type_list`](#class_theme_method_get_font_type_list) ( ) const[^const]                                                                                                                                                                        |
| [`Texture2D`](class_texture2d.md)                 | [`get_icon`](#class_theme_method_get_icon) ( name: [`StringName`](class_stringname.md), theme_type: [`StringName`](class_stringname.md) ) const[^const]                                                                                                 |
| [`PackedStringArray`](class_packedstringarray.md) | [`get_icon_list`](#class_theme_method_get_icon_list) ( theme_type: [`String`](class_string.md) ) const[^const]                                                                                                                                          |
| [`PackedStringArray`](class_packedstringarray.md) | [`get_icon_type_list`](#class_theme_method_get_icon_type_list) ( ) const[^const]                                                                                                                                                                        |
| [`StyleBox`](class_stylebox.md)                   | [`get_stylebox`](#class_theme_method_get_stylebox) ( name: [`StringName`](class_stringname.md), theme_type: [`StringName`](class_stringname.md) ) const[^const]                                                                                         |
| [`PackedStringArray`](class_packedstringarray.md) | [`get_stylebox_list`](#class_theme_method_get_stylebox_list) ( theme_type: [`String`](class_string.md) ) const[^const]                                                                                                                                  |
| [`PackedStringArray`](class_packedstringarray.md) | [`get_stylebox_type_list`](#class_theme_method_get_stylebox_type_list) ( ) const[^const]                                                                                                                                                                |
| [`Variant`](class_variant.md)                     | [`get_theme_item`](#class_theme_method_get_theme_item) ( data_type: [DataType](#enum_theme_datatype), name: [`StringName`](class_stringname.md), theme_type: [`StringName`](class_stringname.md) ) const[^const]                                        |
| [`PackedStringArray`](class_packedstringarray.md) | [`get_theme_item_list`](#class_theme_method_get_theme_item_list) ( data_type: [DataType](#enum_theme_datatype), theme_type: [`String`](class_string.md) ) const[^const]                                                                                 |
| [`PackedStringArray`](class_packedstringarray.md) | [`get_theme_item_type_list`](#class_theme_method_get_theme_item_type_list) ( data_type: [DataType](#enum_theme_datatype) ) const[^const]                                                                                                                |
| [`PackedStringArray`](class_packedstringarray.md) | [`get_type_list`](#class_theme_method_get_type_list) ( ) const[^const]                                                                                                                                                                                  |
| [`StringName`](class_stringname.md)               | [`get_type_variation_base`](#class_theme_method_get_type_variation_base) ( theme_type: [`StringName`](class_stringname.md) ) const[^const]                                                                                                              |
| [`PackedStringArray`](class_packedstringarray.md) | [`get_type_variation_list`](#class_theme_method_get_type_variation_list) ( base_type: [`StringName`](class_stringname.md) ) const[^const]                                                                                                               |
| [`bool`](class_bool.md)                           | [`has_color`](#class_theme_method_has_color) ( name: [`StringName`](class_stringname.md), theme_type: [`StringName`](class_stringname.md) ) const[^const]                                                                                               |
| [`bool`](class_bool.md)                           | [`has_constant`](#class_theme_method_has_constant) ( name: [`StringName`](class_stringname.md), theme_type: [`StringName`](class_stringname.md) ) const[^const]                                                                                         |
| [`bool`](class_bool.md)                           | [`has_default_base_scale`](#class_theme_method_has_default_base_scale) ( ) const[^const]                                                                                                                                                                |
| [`bool`](class_bool.md)                           | [`has_default_font`](#class_theme_method_has_default_font) ( ) const[^const]                                                                                                                                                                            |
| [`bool`](class_bool.md)                           | [`has_default_font_size`](#class_theme_method_has_default_font_size) ( ) const[^const]                                                                                                                                                                  |
| [`bool`](class_bool.md)                           | [`has_font`](#class_theme_method_has_font) ( name: [`StringName`](class_stringname.md), theme_type: [`StringName`](class_stringname.md) ) const[^const]                                                                                                 |
| [`bool`](class_bool.md)                           | [`has_font_size`](#class_theme_method_has_font_size) ( name: [`StringName`](class_stringname.md), theme_type: [`StringName`](class_stringname.md) ) const[^const]                                                                                       |
| [`bool`](class_bool.md)                           | [`has_icon`](#class_theme_method_has_icon) ( name: [`StringName`](class_stringname.md), theme_type: [`StringName`](class_stringname.md) ) const[^const]                                                                                                 |
| [`bool`](class_bool.md)                           | [`has_stylebox`](#class_theme_method_has_stylebox) ( name: [`StringName`](class_stringname.md), theme_type: [`StringName`](class_stringname.md) ) const[^const]                                                                                         |
| [`bool`](class_bool.md)                           | [`has_theme_item`](#class_theme_method_has_theme_item) ( data_type: [DataType](#enum_theme_datatype), name: [`StringName`](class_stringname.md), theme_type: [`StringName`](class_stringname.md) ) const[^const]                                        |
| [`bool`](class_bool.md)                           | [`is_type_variation`](#class_theme_method_is_type_variation) ( theme_type: [`StringName`](class_stringname.md), base_type: [`StringName`](class_stringname.md) ) const[^const]                                                                          |
| `void`                                            | [`merge_with`](#class_theme_method_merge_with) ( other: [`Theme`](class_theme.md) )                                                                                                                                                                     |
| `void`                                            | [`remove_type`](#class_theme_method_remove_type) ( theme_type: [`StringName`](class_stringname.md) )                                                                                                                                                    |
| `void`                                            | [`rename_color`](#class_theme_method_rename_color) ( old_name: [`StringName`](class_stringname.md), name: [`StringName`](class_stringname.md), theme_type: [`StringName`](class_stringname.md) )                                                        |
| `void`                                            | [`rename_constant`](#class_theme_method_rename_constant) ( old_name: [`StringName`](class_stringname.md), name: [`StringName`](class_stringname.md), theme_type: [`StringName`](class_stringname.md) )                                                  |
| `void`                                            | [`rename_font`](#class_theme_method_rename_font) ( old_name: [`StringName`](class_stringname.md), name: [`StringName`](class_stringname.md), theme_type: [`StringName`](class_stringname.md) )                                                          |
| `void`                                            | [`rename_font_size`](#class_theme_method_rename_font_size) ( old_name: [`StringName`](class_stringname.md), name: [`StringName`](class_stringname.md), theme_type: [`StringName`](class_stringname.md) )                                                |
| `void`                                            | [`rename_icon`](#class_theme_method_rename_icon) ( old_name: [`StringName`](class_stringname.md), name: [`StringName`](class_stringname.md), theme_type: [`StringName`](class_stringname.md) )                                                          |
| `void`                                            | [`rename_stylebox`](#class_theme_method_rename_stylebox) ( old_name: [`StringName`](class_stringname.md), name: [`StringName`](class_stringname.md), theme_type: [`StringName`](class_stringname.md) )                                                  |
| `void`                                            | [`rename_theme_item`](#class_theme_method_rename_theme_item) ( data_type: [DataType](#enum_theme_datatype), old_name: [`StringName`](class_stringname.md), name: [`StringName`](class_stringname.md), theme_type: [`StringName`](class_stringname.md) ) |
| `void`                                            | [`set_color`](#class_theme_method_set_color) ( name: [`StringName`](class_stringname.md), theme_type: [`StringName`](class_stringname.md), color: [`Color`](class_color.md) )                                                                           |
| `void`                                            | [`set_constant`](#class_theme_method_set_constant) ( name: [`StringName`](class_stringname.md), theme_type: [`StringName`](class_stringname.md), constant: [`int`](class_int.md) )                                                                      |
| `void`                                            | [`set_font`](#class_theme_method_set_font) ( name: [`StringName`](class_stringname.md), theme_type: [`StringName`](class_stringname.md), font: [`Font`](class_font.md) )                                                                                |
| `void`                                            | [`set_font_size`](#class_theme_method_set_font_size) ( name: [`StringName`](class_stringname.md), theme_type: [`StringName`](class_stringname.md), font_size: [`int`](class_int.md) )                                                                   |
| `void`                                            | [`set_icon`](#class_theme_method_set_icon) ( name: [`StringName`](class_stringname.md), theme_type: [`StringName`](class_stringname.md), texture: [`Texture2D`](class_texture2d.md) )                                                                   |
| `void`                                            | [`set_stylebox`](#class_theme_method_set_stylebox) ( name: [`StringName`](class_stringname.md), theme_type: [`StringName`](class_stringname.md), texture: [`StyleBox`](class_stylebox.md) )                                                             |
| `void`                                            | [`set_theme_item`](#class_theme_method_set_theme_item) ( data_type: [DataType](#enum_theme_datatype), name: [`StringName`](class_stringname.md), theme_type: [`StringName`](class_stringname.md), value: [`Variant`](class_variant.md) )                |
| `void`                                            | [`set_type_variation`](#class_theme_method_set_type_variation) ( theme_type: [`StringName`](class_stringname.md), base_type: [`StringName`](class_stringname.md) )                                                                                      |

<!-- rst-class:: classref-section-separator -->

---

## 枚举

<div id="_class_enum_theme_datatype"></div>

enum **DataType**: <div id="enum_theme_datatype"></div>

<div id="_class_theme_constant_data_type_color"></div>

[DataType](#enum_theme_datatype) **DATA_TYPE_COLOR** = ``0``

Theme's [`Color`](class_color.md) item type.

<div id="_class_theme_constant_data_type_constant"></div>

[DataType](#enum_theme_datatype) **DATA_TYPE_CONSTANT** = ``1``

Theme's constant item type.

<div id="_class_theme_constant_data_type_font"></div>

[DataType](#enum_theme_datatype) **DATA_TYPE_FONT** = ``2``

Theme's [`Font`](class_font.md) item type.

<div id="_class_theme_constant_data_type_font_size"></div>

[DataType](#enum_theme_datatype) **DATA_TYPE_FONT_SIZE** = ``3``

Theme's font size item type.

<div id="_class_theme_constant_data_type_icon"></div>

[DataType](#enum_theme_datatype) **DATA_TYPE_ICON** = ``4``

Theme's icon [`Texture2D`](class_texture2d.md) item type.

<div id="_class_theme_constant_data_type_stylebox"></div>

[DataType](#enum_theme_datatype) **DATA_TYPE_STYLEBOX** = ``5``

Theme's [`StyleBox`](class_stylebox.md) item type.

<div id="_class_theme_constant_data_type_max"></div>

[DataType](#enum_theme_datatype) **DATA_TYPE_MAX** = ``6``

Maximum value for the DataType enum.

<!-- rst-class:: classref-section-separator -->

---

## 属性说明

<div id="_class_theme_property_default_base_scale"></div>

[`float`](class_float.md) **default_base_scale** = ``0.0`` <div id="class_theme_property_default_base_scale"></div>

- `void` **set_default_base_scale** ( value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_default_base_scale** ( )

The default base scale factor of this theme resource. Used by some controls to scale their visual properties based on the global scale factor. If this value is set to `0.0`, the global scale factor is used (see [`ThemeDB.fallback_base_scale`](#class_themedb_property_fallback_base_scale)).

Use [`has_default_base_scale`](#class_theme_method_has_default_base_scale) to check if this value is valid.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_theme_property_default_font"></div>

[`Font`](class_font.md) **default_font** <div id="class_theme_property_default_font"></div>

- `void` **set_default_font** ( value: [`Font`](class_font.md) )
- [`Font`](class_font.md) **get_default_font** ( )

The default font of this theme resource. Used as the default value when trying to fetch a font resource that doesn't exist in this theme or is in invalid state. If the default font is also missing or invalid, the engine fallback value is used (see [`ThemeDB.fallback_font`](#class_themedb_property_fallback_font)).

Use [`has_default_font`](#class_theme_method_has_default_font) to check if this value is valid.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_theme_property_default_font_size"></div>

[`int`](class_int.md) **default_font_size** = ``-1`` <div id="class_theme_property_default_font_size"></div>

- `void` **set_default_font_size** ( value: [`int`](class_int.md) )
- [`int`](class_int.md) **get_default_font_size** ( )

The default font size of this theme resource. Used as the default value when trying to fetch a font size value that doesn't exist in this theme or is in invalid state. If the default font size is also missing or invalid, the engine fallback value is used (see [`ThemeDB.fallback_font_size`](#class_themedb_property_fallback_font_size)).

Values below `1` are invalid and can be used to unset the property. Use [`has_default_font_size`](#class_theme_method_has_default_font_size) to check if this value is valid.

<!-- rst-class:: classref-section-separator -->

---

## 方法说明

<div id="_class_theme_method_add_type"></div>

`void` **add_type** ( theme_type: [`StringName`](class_stringname.md) )<div id="class_theme_method_add_type"></div>

Adds an empty theme type for every valid data type.

 **Note:** Empty types are not saved with the theme. This method only exists to perform in-memory changes to the resource. Use available `set_*` methods to add theme items.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_theme_method_clear"></div>

`void` **clear** ( )<div id="class_theme_method_clear"></div>

Removes all the theme properties defined on the theme resource.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_theme_method_clear_color"></div>

`void` **clear_color** ( name: [`StringName`](class_stringname.md), theme_type: [`StringName`](class_stringname.md) )<div id="class_theme_method_clear_color"></div>

Removes the [`Color`](class_color.md) property defined by `name` and `theme_type`, if it exists.

Fails if it doesn't exist. Use [`has_color`](#class_theme_method_has_color) to check for existence.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_theme_method_clear_constant"></div>

`void` **clear_constant** ( name: [`StringName`](class_stringname.md), theme_type: [`StringName`](class_stringname.md) )<div id="class_theme_method_clear_constant"></div>

Removes the constant property defined by `name` and `theme_type`, if it exists.

Fails if it doesn't exist. Use [`has_constant`](#class_theme_method_has_constant) to check for existence.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_theme_method_clear_font"></div>

`void` **clear_font** ( name: [`StringName`](class_stringname.md), theme_type: [`StringName`](class_stringname.md) )<div id="class_theme_method_clear_font"></div>

Removes the [`Font`](class_font.md) property defined by `name` and `theme_type`, if it exists.

Fails if it doesn't exist. Use [`has_font`](#class_theme_method_has_font) to check for existence.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_theme_method_clear_font_size"></div>

`void` **clear_font_size** ( name: [`StringName`](class_stringname.md), theme_type: [`StringName`](class_stringname.md) )<div id="class_theme_method_clear_font_size"></div>

Removes the font size property defined by `name` and `theme_type`, if it exists.

Fails if it doesn't exist. Use [`has_font_size`](#class_theme_method_has_font_size) to check for existence.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_theme_method_clear_icon"></div>

`void` **clear_icon** ( name: [`StringName`](class_stringname.md), theme_type: [`StringName`](class_stringname.md) )<div id="class_theme_method_clear_icon"></div>

Removes the icon property defined by `name` and `theme_type`, if it exists.

Fails if it doesn't exist. Use [`has_icon`](#class_theme_method_has_icon) to check for existence.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_theme_method_clear_stylebox"></div>

`void` **clear_stylebox** ( name: [`StringName`](class_stringname.md), theme_type: [`StringName`](class_stringname.md) )<div id="class_theme_method_clear_stylebox"></div>

Removes the [`StyleBox`](class_stylebox.md) property defined by `name` and `theme_type`, if it exists.

Fails if it doesn't exist. Use [`has_stylebox`](#class_theme_method_has_stylebox) to check for existence.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_theme_method_clear_theme_item"></div>

`void` **clear_theme_item** ( data_type: [DataType](#enum_theme_datatype), name: [`StringName`](class_stringname.md), theme_type: [`StringName`](class_stringname.md) )<div id="class_theme_method_clear_theme_item"></div>

Removes the theme property of `data_type` defined by `name` and `theme_type`, if it exists.

Fails if it doesn't exist. Use [`has_theme_item`](#class_theme_method_has_theme_item) to check for existence.

 **Note:** This method is analogous to calling the corresponding data type specific method, but can be used for more generalized logic.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_theme_method_clear_type_variation"></div>

`void` **clear_type_variation** ( theme_type: [`StringName`](class_stringname.md) )<div id="class_theme_method_clear_type_variation"></div>

Unmarks `theme_type` as being a variation of another theme type. See [`set_type_variation`](#class_theme_method_set_type_variation).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_theme_method_get_color"></div>

[`Color`](class_color.md) **get_color** ( name: [`StringName`](class_stringname.md), theme_type: [`StringName`](class_stringname.md) ) const[^const]<div id="class_theme_method_get_color"></div>

Returns the [`Color`](class_color.md) property defined by `name` and `theme_type`, if it exists.

Returns the default color value if the property doesn't exist. Use [`has_color`](#class_theme_method_has_color) to check for existence.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_theme_method_get_color_list"></div>

[`PackedStringArray`](class_packedstringarray.md) **get_color_list** ( theme_type: [`String`](class_string.md) ) const[^const]<div id="class_theme_method_get_color_list"></div>

Returns a list of names for [`Color`](class_color.md) properties defined with `theme_type`. Use [`get_color_type_list`](#class_theme_method_get_color_type_list) to get a list of possible theme type names.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_theme_method_get_color_type_list"></div>

[`PackedStringArray`](class_packedstringarray.md) **get_color_type_list** ( ) const[^const]<div id="class_theme_method_get_color_type_list"></div>

Returns a list of all unique theme type names for [`Color`](class_color.md) properties. Use [`get_type_list`](#class_theme_method_get_type_list) to get a list of all unique theme types.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_theme_method_get_constant"></div>

[`int`](class_int.md) **get_constant** ( name: [`StringName`](class_stringname.md), theme_type: [`StringName`](class_stringname.md) ) const[^const]<div id="class_theme_method_get_constant"></div>

Returns the constant property defined by `name` and `theme_type`, if it exists.

Returns `0` if the property doesn't exist. Use [`has_constant`](#class_theme_method_has_constant) to check for existence.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_theme_method_get_constant_list"></div>

[`PackedStringArray`](class_packedstringarray.md) **get_constant_list** ( theme_type: [`String`](class_string.md) ) const[^const]<div id="class_theme_method_get_constant_list"></div>

Returns a list of names for constant properties defined with `theme_type`. Use [`get_constant_type_list`](#class_theme_method_get_constant_type_list) to get a list of possible theme type names.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_theme_method_get_constant_type_list"></div>

[`PackedStringArray`](class_packedstringarray.md) **get_constant_type_list** ( ) const[^const]<div id="class_theme_method_get_constant_type_list"></div>

Returns a list of all unique theme type names for constant properties. Use [`get_type_list`](#class_theme_method_get_type_list) to get a list of all unique theme types.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_theme_method_get_font"></div>

[`Font`](class_font.md) **get_font** ( name: [`StringName`](class_stringname.md), theme_type: [`StringName`](class_stringname.md) ) const[^const]<div id="class_theme_method_get_font"></div>

Returns the [`Font`](class_font.md) property defined by `name` and `theme_type`, if it exists.

Returns the default theme font if the property doesn't exist and the default theme font is set up (see [`default_font`](#class_theme_property_default_font)). Use [`has_font`](#class_theme_method_has_font) to check for existence of the property and [`has_default_font`](#class_theme_method_has_default_font) to check for existence of the default theme font.

Returns the engine fallback font value, if neither exist (see [`ThemeDB.fallback_font`](#class_themedb_property_fallback_font)).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_theme_method_get_font_list"></div>

[`PackedStringArray`](class_packedstringarray.md) **get_font_list** ( theme_type: [`String`](class_string.md) ) const[^const]<div id="class_theme_method_get_font_list"></div>

Returns a list of names for [`Font`](class_font.md) properties defined with `theme_type`. Use [`get_font_type_list`](#class_theme_method_get_font_type_list) to get a list of possible theme type names.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_theme_method_get_font_size"></div>

[`int`](class_int.md) **get_font_size** ( name: [`StringName`](class_stringname.md), theme_type: [`StringName`](class_stringname.md) ) const[^const]<div id="class_theme_method_get_font_size"></div>

Returns the font size property defined by `name` and `theme_type`, if it exists.

Returns the default theme font size if the property doesn't exist and the default theme font size is set up (see [`default_font_size`](#class_theme_property_default_font_size)). Use [`has_font_size`](#class_theme_method_has_font_size) to check for existence of the property and [`has_default_font_size`](#class_theme_method_has_default_font_size) to check for existence of the default theme font.

Returns the engine fallback font size value, if neither exist (see [`ThemeDB.fallback_font_size`](#class_themedb_property_fallback_font_size)).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_theme_method_get_font_size_list"></div>

[`PackedStringArray`](class_packedstringarray.md) **get_font_size_list** ( theme_type: [`String`](class_string.md) ) const[^const]<div id="class_theme_method_get_font_size_list"></div>

Returns a list of names for font size properties defined with `theme_type`. Use [`get_font_size_type_list`](#class_theme_method_get_font_size_type_list) to get a list of possible theme type names.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_theme_method_get_font_size_type_list"></div>

[`PackedStringArray`](class_packedstringarray.md) **get_font_size_type_list** ( ) const[^const]<div id="class_theme_method_get_font_size_type_list"></div>

Returns a list of all unique theme type names for font size properties. Use [`get_type_list`](#class_theme_method_get_type_list) to get a list of all unique theme types.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_theme_method_get_font_type_list"></div>

[`PackedStringArray`](class_packedstringarray.md) **get_font_type_list** ( ) const[^const]<div id="class_theme_method_get_font_type_list"></div>

Returns a list of all unique theme type names for [`Font`](class_font.md) properties. Use [`get_type_list`](#class_theme_method_get_type_list) to get a list of all unique theme types.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_theme_method_get_icon"></div>

[`Texture2D`](class_texture2d.md) **get_icon** ( name: [`StringName`](class_stringname.md), theme_type: [`StringName`](class_stringname.md) ) const[^const]<div id="class_theme_method_get_icon"></div>

Returns the icon property defined by `name` and `theme_type`, if it exists.

Returns the engine fallback icon value if the property doesn't exist (see [`ThemeDB.fallback_icon`](#class_themedb_property_fallback_icon)). Use [`has_icon`](#class_theme_method_has_icon) to check for existence.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_theme_method_get_icon_list"></div>

[`PackedStringArray`](class_packedstringarray.md) **get_icon_list** ( theme_type: [`String`](class_string.md) ) const[^const]<div id="class_theme_method_get_icon_list"></div>

Returns a list of names for icon properties defined with `theme_type`. Use [`get_icon_type_list`](#class_theme_method_get_icon_type_list) to get a list of possible theme type names.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_theme_method_get_icon_type_list"></div>

[`PackedStringArray`](class_packedstringarray.md) **get_icon_type_list** ( ) const[^const]<div id="class_theme_method_get_icon_type_list"></div>

Returns a list of all unique theme type names for icon properties. Use [`get_type_list`](#class_theme_method_get_type_list) to get a list of all unique theme types.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_theme_method_get_stylebox"></div>

[`StyleBox`](class_stylebox.md) **get_stylebox** ( name: [`StringName`](class_stringname.md), theme_type: [`StringName`](class_stringname.md) ) const[^const]<div id="class_theme_method_get_stylebox"></div>

Returns the [`StyleBox`](class_stylebox.md) property defined by `name` and `theme_type`, if it exists.

Returns the engine fallback stylebox value if the property doesn't exist (see [`ThemeDB.fallback_stylebox`](#class_themedb_property_fallback_stylebox)). Use [`has_stylebox`](#class_theme_method_has_stylebox) to check for existence.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_theme_method_get_stylebox_list"></div>

[`PackedStringArray`](class_packedstringarray.md) **get_stylebox_list** ( theme_type: [`String`](class_string.md) ) const[^const]<div id="class_theme_method_get_stylebox_list"></div>

Returns a list of names for [`StyleBox`](class_stylebox.md) properties defined with `theme_type`. Use [`get_stylebox_type_list`](#class_theme_method_get_stylebox_type_list) to get a list of possible theme type names.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_theme_method_get_stylebox_type_list"></div>

[`PackedStringArray`](class_packedstringarray.md) **get_stylebox_type_list** ( ) const[^const]<div id="class_theme_method_get_stylebox_type_list"></div>

Returns a list of all unique theme type names for [`StyleBox`](class_stylebox.md) properties. Use [`get_type_list`](#class_theme_method_get_type_list) to get a list of all unique theme types.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_theme_method_get_theme_item"></div>

[`Variant`](class_variant.md) **get_theme_item** ( data_type: [DataType](#enum_theme_datatype), name: [`StringName`](class_stringname.md), theme_type: [`StringName`](class_stringname.md) ) const[^const]<div id="class_theme_method_get_theme_item"></div>

Returns the theme property of `data_type` defined by `name` and `theme_type`, if it exists.

Returns the engine fallback value if the property doesn't exist (see [`ThemeDB`](class_themedb.md)). Use [`has_theme_item`](#class_theme_method_has_theme_item) to check for existence.

 **Note:** This method is analogous to calling the corresponding data type specific method, but can be used for more generalized logic.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_theme_method_get_theme_item_list"></div>

[`PackedStringArray`](class_packedstringarray.md) **get_theme_item_list** ( data_type: [DataType](#enum_theme_datatype), theme_type: [`String`](class_string.md) ) const[^const]<div id="class_theme_method_get_theme_item_list"></div>

Returns a list of names for properties of `data_type` defined with `theme_type`. Use [`get_theme_item_type_list`](#class_theme_method_get_theme_item_type_list) to get a list of possible theme type names.

 **Note:** This method is analogous to calling the corresponding data type specific method, but can be used for more generalized logic.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_theme_method_get_theme_item_type_list"></div>

[`PackedStringArray`](class_packedstringarray.md) **get_theme_item_type_list** ( data_type: [DataType](#enum_theme_datatype) ) const[^const]<div id="class_theme_method_get_theme_item_type_list"></div>

Returns a list of all unique theme type names for `data_type` properties. Use [`get_type_list`](#class_theme_method_get_type_list) to get a list of all unique theme types.

 **Note:** This method is analogous to calling the corresponding data type specific method, but can be used for more generalized logic.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_theme_method_get_type_list"></div>

[`PackedStringArray`](class_packedstringarray.md) **get_type_list** ( ) const[^const]<div id="class_theme_method_get_type_list"></div>

Returns a list of all unique theme type names. Use the appropriate `get_*_type_list` method to get a list of unique theme types for a single data type.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_theme_method_get_type_variation_base"></div>

[`StringName`](class_stringname.md) **get_type_variation_base** ( theme_type: [`StringName`](class_stringname.md) ) const[^const]<div id="class_theme_method_get_type_variation_base"></div>

Returns the name of the base theme type if `theme_type` is a valid variation type. Returns an empty string otherwise.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_theme_method_get_type_variation_list"></div>

[`PackedStringArray`](class_packedstringarray.md) **get_type_variation_list** ( base_type: [`StringName`](class_stringname.md) ) const[^const]<div id="class_theme_method_get_type_variation_list"></div>

Returns a list of all type variations for the given `base_type`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_theme_method_has_color"></div>

[`bool`](class_bool.md) **has_color** ( name: [`StringName`](class_stringname.md), theme_type: [`StringName`](class_stringname.md) ) const[^const]<div id="class_theme_method_has_color"></div>

Returns `true` if the [`Color`](class_color.md) property defined by `name` and `theme_type` exists.

Returns `false` if it doesn't exist. Use [`set_color`](#class_theme_method_set_color) to define it.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_theme_method_has_constant"></div>

[`bool`](class_bool.md) **has_constant** ( name: [`StringName`](class_stringname.md), theme_type: [`StringName`](class_stringname.md) ) const[^const]<div id="class_theme_method_has_constant"></div>

Returns `true` if the constant property defined by `name` and `theme_type` exists.

Returns `false` if it doesn't exist. Use [`set_constant`](#class_theme_method_set_constant) to define it.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_theme_method_has_default_base_scale"></div>

[`bool`](class_bool.md) **has_default_base_scale** ( ) const[^const]<div id="class_theme_method_has_default_base_scale"></div>

Returns `true` if [`default_base_scale`](#class_theme_property_default_base_scale) has a valid value.

Returns `false` if it doesn't. The value must be greater than `0.0` to be considered valid.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_theme_method_has_default_font"></div>

[`bool`](class_bool.md) **has_default_font** ( ) const[^const]<div id="class_theme_method_has_default_font"></div>

Returns `true` if [`default_font`](#class_theme_property_default_font) has a valid value.

Returns `false` if it doesn't.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_theme_method_has_default_font_size"></div>

[`bool`](class_bool.md) **has_default_font_size** ( ) const[^const]<div id="class_theme_method_has_default_font_size"></div>

Returns `true` if [`default_font_size`](#class_theme_property_default_font_size) has a valid value.

Returns `false` if it doesn't. The value must be greater than `0` to be considered valid.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_theme_method_has_font"></div>

[`bool`](class_bool.md) **has_font** ( name: [`StringName`](class_stringname.md), theme_type: [`StringName`](class_stringname.md) ) const[^const]<div id="class_theme_method_has_font"></div>

Returns `true` if the [`Font`](class_font.md) property defined by `name` and `theme_type` exists, or if the default theme font is set up (see [`has_default_font`](#class_theme_method_has_default_font)).

Returns `false` if neither exist. Use [`set_font`](#class_theme_method_set_font) to define the property.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_theme_method_has_font_size"></div>

[`bool`](class_bool.md) **has_font_size** ( name: [`StringName`](class_stringname.md), theme_type: [`StringName`](class_stringname.md) ) const[^const]<div id="class_theme_method_has_font_size"></div>

Returns `true` if the font size property defined by `name` and `theme_type` exists, or if the default theme font size is set up (see [`has_default_font_size`](#class_theme_method_has_default_font_size)).

Returns `false` if neither exist. Use [`set_font_size`](#class_theme_method_set_font_size) to define the property.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_theme_method_has_icon"></div>

[`bool`](class_bool.md) **has_icon** ( name: [`StringName`](class_stringname.md), theme_type: [`StringName`](class_stringname.md) ) const[^const]<div id="class_theme_method_has_icon"></div>

Returns `true` if the icon property defined by `name` and `theme_type` exists.

Returns `false` if it doesn't exist. Use [`set_icon`](#class_theme_method_set_icon) to define it.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_theme_method_has_stylebox"></div>

[`bool`](class_bool.md) **has_stylebox** ( name: [`StringName`](class_stringname.md), theme_type: [`StringName`](class_stringname.md) ) const[^const]<div id="class_theme_method_has_stylebox"></div>

Returns `true` if the [`StyleBox`](class_stylebox.md) property defined by `name` and `theme_type` exists.

Returns `false` if it doesn't exist. Use [`set_stylebox`](#class_theme_method_set_stylebox) to define it.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_theme_method_has_theme_item"></div>

[`bool`](class_bool.md) **has_theme_item** ( data_type: [DataType](#enum_theme_datatype), name: [`StringName`](class_stringname.md), theme_type: [`StringName`](class_stringname.md) ) const[^const]<div id="class_theme_method_has_theme_item"></div>

Returns `true` if the theme property of `data_type` defined by `name` and `theme_type` exists.

Returns `false` if it doesn't exist. Use [`set_theme_item`](#class_theme_method_set_theme_item) to define it.

 **Note:** This method is analogous to calling the corresponding data type specific method, but can be used for more generalized logic.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_theme_method_is_type_variation"></div>

[`bool`](class_bool.md) **is_type_variation** ( theme_type: [`StringName`](class_stringname.md), base_type: [`StringName`](class_stringname.md) ) const[^const]<div id="class_theme_method_is_type_variation"></div>

Returns `true` if `theme_type` is marked as a variation of `base_type`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_theme_method_merge_with"></div>

`void` **merge_with** ( other: [`Theme`](class_theme.md) )<div id="class_theme_method_merge_with"></div>

Adds missing and overrides existing definitions with values from the `other` theme resource.

 **Note:** This modifies the current theme. If you want to merge two themes together without modifying either one, create a new empty theme and merge the other two into it one after another.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_theme_method_remove_type"></div>

`void` **remove_type** ( theme_type: [`StringName`](class_stringname.md) )<div id="class_theme_method_remove_type"></div>

Removes the theme type, gracefully discarding defined theme items. If the type is a variation, this information is also erased. If the type is a base for type variations, those variations lose their base.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_theme_method_rename_color"></div>

`void` **rename_color** ( old_name: [`StringName`](class_stringname.md), name: [`StringName`](class_stringname.md), theme_type: [`StringName`](class_stringname.md) )<div id="class_theme_method_rename_color"></div>

Renames the [`Color`](class_color.md) property defined by `old_name` and `theme_type` to `name`, if it exists.

Fails if it doesn't exist, or if a similar property with the new name already exists. Use [`has_color`](#class_theme_method_has_color) to check for existence, and [`clear_color`](#class_theme_method_clear_color) to remove the existing property.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_theme_method_rename_constant"></div>

`void` **rename_constant** ( old_name: [`StringName`](class_stringname.md), name: [`StringName`](class_stringname.md), theme_type: [`StringName`](class_stringname.md) )<div id="class_theme_method_rename_constant"></div>

Renames the constant property defined by `old_name` and `theme_type` to `name`, if it exists.

Fails if it doesn't exist, or if a similar property with the new name already exists. Use [`has_constant`](#class_theme_method_has_constant) to check for existence, and [`clear_constant`](#class_theme_method_clear_constant) to remove the existing property.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_theme_method_rename_font"></div>

`void` **rename_font** ( old_name: [`StringName`](class_stringname.md), name: [`StringName`](class_stringname.md), theme_type: [`StringName`](class_stringname.md) )<div id="class_theme_method_rename_font"></div>

Renames the [`Font`](class_font.md) property defined by `old_name` and `theme_type` to `name`, if it exists.

Fails if it doesn't exist, or if a similar property with the new name already exists. Use [`has_font`](#class_theme_method_has_font) to check for existence, and [`clear_font`](#class_theme_method_clear_font) to remove the existing property.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_theme_method_rename_font_size"></div>

`void` **rename_font_size** ( old_name: [`StringName`](class_stringname.md), name: [`StringName`](class_stringname.md), theme_type: [`StringName`](class_stringname.md) )<div id="class_theme_method_rename_font_size"></div>

Renames the font size property defined by `old_name` and `theme_type` to `name`, if it exists.

Fails if it doesn't exist, or if a similar property with the new name already exists. Use [`has_font_size`](#class_theme_method_has_font_size) to check for existence, and [`clear_font_size`](#class_theme_method_clear_font_size) to remove the existing property.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_theme_method_rename_icon"></div>

`void` **rename_icon** ( old_name: [`StringName`](class_stringname.md), name: [`StringName`](class_stringname.md), theme_type: [`StringName`](class_stringname.md) )<div id="class_theme_method_rename_icon"></div>

Renames the icon property defined by `old_name` and `theme_type` to `name`, if it exists.

Fails if it doesn't exist, or if a similar property with the new name already exists. Use [`has_icon`](#class_theme_method_has_icon) to check for existence, and [`clear_icon`](#class_theme_method_clear_icon) to remove the existing property.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_theme_method_rename_stylebox"></div>

`void` **rename_stylebox** ( old_name: [`StringName`](class_stringname.md), name: [`StringName`](class_stringname.md), theme_type: [`StringName`](class_stringname.md) )<div id="class_theme_method_rename_stylebox"></div>

Renames the [`StyleBox`](class_stylebox.md) property defined by `old_name` and `theme_type` to `name`, if it exists.

Fails if it doesn't exist, or if a similar property with the new name already exists. Use [`has_stylebox`](#class_theme_method_has_stylebox) to check for existence, and [`clear_stylebox`](#class_theme_method_clear_stylebox) to remove the existing property.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_theme_method_rename_theme_item"></div>

`void` **rename_theme_item** ( data_type: [DataType](#enum_theme_datatype), old_name: [`StringName`](class_stringname.md), name: [`StringName`](class_stringname.md), theme_type: [`StringName`](class_stringname.md) )<div id="class_theme_method_rename_theme_item"></div>

Renames the theme property of `data_type` defined by `old_name` and `theme_type` to `name`, if it exists.

Fails if it doesn't exist, or if a similar property with the new name already exists. Use [`has_theme_item`](#class_theme_method_has_theme_item) to check for existence, and [`clear_theme_item`](#class_theme_method_clear_theme_item) to remove the existing property.

 **Note:** This method is analogous to calling the corresponding data type specific method, but can be used for more generalized logic.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_theme_method_set_color"></div>

`void` **set_color** ( name: [`StringName`](class_stringname.md), theme_type: [`StringName`](class_stringname.md), color: [`Color`](class_color.md) )<div id="class_theme_method_set_color"></div>

Creates or changes the value of the [`Color`](class_color.md) property defined by `name` and `theme_type`. Use [`clear_color`](#class_theme_method_clear_color) to remove the property.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_theme_method_set_constant"></div>

`void` **set_constant** ( name: [`StringName`](class_stringname.md), theme_type: [`StringName`](class_stringname.md), constant: [`int`](class_int.md) )<div id="class_theme_method_set_constant"></div>

Creates or changes the value of the constant property defined by `name` and `theme_type`. Use [`clear_constant`](#class_theme_method_clear_constant) to remove the property.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_theme_method_set_font"></div>

`void` **set_font** ( name: [`StringName`](class_stringname.md), theme_type: [`StringName`](class_stringname.md), font: [`Font`](class_font.md) )<div id="class_theme_method_set_font"></div>

Creates or changes the value of the [`Font`](class_font.md) property defined by `name` and `theme_type`. Use [`clear_font`](#class_theme_method_clear_font) to remove the property.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_theme_method_set_font_size"></div>

`void` **set_font_size** ( name: [`StringName`](class_stringname.md), theme_type: [`StringName`](class_stringname.md), font_size: [`int`](class_int.md) )<div id="class_theme_method_set_font_size"></div>

Creates or changes the value of the font size property defined by `name` and `theme_type`. Use [`clear_font_size`](#class_theme_method_clear_font_size) to remove the property.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_theme_method_set_icon"></div>

`void` **set_icon** ( name: [`StringName`](class_stringname.md), theme_type: [`StringName`](class_stringname.md), texture: [`Texture2D`](class_texture2d.md) )<div id="class_theme_method_set_icon"></div>

Creates or changes the value of the icon property defined by `name` and `theme_type`. Use [`clear_icon`](#class_theme_method_clear_icon) to remove the property.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_theme_method_set_stylebox"></div>

`void` **set_stylebox** ( name: [`StringName`](class_stringname.md), theme_type: [`StringName`](class_stringname.md), texture: [`StyleBox`](class_stylebox.md) )<div id="class_theme_method_set_stylebox"></div>

Creates or changes the value of the [`StyleBox`](class_stylebox.md) property defined by `name` and `theme_type`. Use [`clear_stylebox`](#class_theme_method_clear_stylebox) to remove the property.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_theme_method_set_theme_item"></div>

`void` **set_theme_item** ( data_type: [DataType](#enum_theme_datatype), name: [`StringName`](class_stringname.md), theme_type: [`StringName`](class_stringname.md), value: [`Variant`](class_variant.md) )<div id="class_theme_method_set_theme_item"></div>

Creates or changes the value of the theme property of `data_type` defined by `name` and `theme_type`. Use [`clear_theme_item`](#class_theme_method_clear_theme_item) to remove the property.

Fails if the `value` type is not accepted by `data_type`.

 **Note:** This method is analogous to calling the corresponding data type specific method, but can be used for more generalized logic.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_theme_method_set_type_variation"></div>

`void` **set_type_variation** ( theme_type: [`StringName`](class_stringname.md), base_type: [`StringName`](class_stringname.md) )<div id="class_theme_method_set_type_variation"></div>

Marks `theme_type` as a variation of `base_type`.

This adds `theme_type` as a suggested option for [`Control.theme_type_variation`](#class_control_property_theme_type_variation) on a [`Control`](class_control.md) that is of the `base_type` class.

Variations can also be nested, i.e. `base_type` can be another variation. If a chain of variations ends with a `base_type` matching the class of the [`Control`](class_control.md), the whole chain is going to be suggested as options.

 **Note:** Suggestions only show up if this theme resource is set as the project default theme. See [`ProjectSettings.gui/theme/custom`](#class_projectsettings_property_gui/theme/custom).

[^virtual]: 本方法通常需要用户覆盖才能生效。
[^const]: 本方法无副作用，不会修改该实例的任何成员变量。
[^vararg]: 本方法除了能接受在此处描述的参数外，还能够继续接受任意数量的参数。
[^constructor]: 本方法用于构造某个类型。
[^static]: 调用本方法无需实例，可直接使用类名进行调用。
[^operator]: 本方法描述的是使用本类型作为左操作数的有效运算符。
[^bitfield]: 这个值是由下列位标志构成位掩码的整数。
[^void]: 无返回值。
