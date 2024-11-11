<!-- ⚠ 请勿编辑本文件 ⚠ -->
<!-- 本文档使用脚本从 WeDot 引擎源码仓库生成。 -->
<!-- 生成脚本：https://github.com/WeDot-Engine/WeDot/tree/master/doc/tools/make_md.py； -->
<!-- 原文件：https://github.com/WeDot-Engine/WeDot/tree/master/doc/classes/ThemeDB.xml。 -->

<div id="_class_themedb"></div>

# ThemeDB

**继承：** [`Object`](class_object.md)

A singleton that provides access to static information about [`Theme`](class_theme.md) resources used by the engine and by your project.

## 描述

This singleton provides access to static information about [`Theme`](class_theme.md) resources used by the engine and by your projects. You can fetch the default engine theme, as well as your project configured theme.

 **ThemeDB** also contains fallback values for theme properties.

## 属性

|||
|:-:|:--|
| [`float`](class_float.md)         | [`fallback_base_scale`](class_themedb.md#class_themedb_property_fallback_base_scale) | ``1.0`` |
| [`Font`](class_font.md)           | [`fallback_font`](class_themedb.md#class_themedb_property_fallback_font)             |         |
| [`int`](class_int.md)             | [`fallback_font_size`](class_themedb.md#class_themedb_property_fallback_font_size)   | ``16``  |
| [`Texture2D`](class_texture2d.md) | [`fallback_icon`](class_themedb.md#class_themedb_property_fallback_icon)             |         |
| [`StyleBox`](class_stylebox.md)   | [`fallback_stylebox`](class_themedb.md#class_themedb_property_fallback_stylebox)     |         |

## 方法

|||
|:-:|:--|
| [`Theme`](class_theme.md) | [`get_default_theme`](class_themedb.md#class_themedb_method_get_default_theme) ( ) |
| [`Theme`](class_theme.md) | [`get_project_theme`](class_themedb.md#class_themedb_method_get_project_theme) ( ) |

<!-- rst-class:: classref-section-separator -->

---

## 信号

<div id="_class_class_themedb_signal_fallback_changed"></div>

**fallback_changed** ( ) <div id="class_themedb_signal_fallback_changed"></div>

Emitted when one of the fallback values had been changed. Use it to refresh the look of controls that may rely on the fallback theme items.

<!-- rst-class:: classref-section-separator -->

---

## 属性说明

<div id="_class_themedb_property_fallback_base_scale"></div>

[`float`](class_float.md) **fallback_base_scale** = ``1.0`` <div id="class_themedb_property_fallback_base_scale"></div>

- `void` **set_fallback_base_scale** ( value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_fallback_base_scale** ( )

The fallback base scale factor of every [`Control`](class_control.md) node and [`Theme`](class_theme.md) resource. Used when no other value is available to the control.

See also [`Theme.default_base_scale`](class_theme.md#class_theme_property_default_base_scale).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_themedb_property_fallback_font"></div>

[`Font`](class_font.md) **fallback_font** <div id="class_themedb_property_fallback_font"></div>

- `void` **set_fallback_font** ( value: [`Font`](class_font.md) )
- [`Font`](class_font.md) **get_fallback_font** ( )

The fallback font of every [`Control`](class_control.md) node and [`Theme`](class_theme.md) resource. Used when no other value is available to the control.

See also [`Theme.default_font`](class_theme.md#class_theme_property_default_font).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_themedb_property_fallback_font_size"></div>

[`int`](class_int.md) **fallback_font_size** = ``16`` <div id="class_themedb_property_fallback_font_size"></div>

- `void` **set_fallback_font_size** ( value: [`int`](class_int.md) )
- [`int`](class_int.md) **get_fallback_font_size** ( )

The fallback font size of every [`Control`](class_control.md) node and [`Theme`](class_theme.md) resource. Used when no other value is available to the control.

See also [`Theme.default_font_size`](class_theme.md#class_theme_property_default_font_size).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_themedb_property_fallback_icon"></div>

[`Texture2D`](class_texture2d.md) **fallback_icon** <div id="class_themedb_property_fallback_icon"></div>

- `void` **set_fallback_icon** ( value: [`Texture2D`](class_texture2d.md) )
- [`Texture2D`](class_texture2d.md) **get_fallback_icon** ( )

The fallback icon of every [`Control`](class_control.md) node and [`Theme`](class_theme.md) resource. Used when no other value is available to the control.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_themedb_property_fallback_stylebox"></div>

[`StyleBox`](class_stylebox.md) **fallback_stylebox** <div id="class_themedb_property_fallback_stylebox"></div>

- `void` **set_fallback_stylebox** ( value: [`StyleBox`](class_stylebox.md) )
- [`StyleBox`](class_stylebox.md) **get_fallback_stylebox** ( )

The fallback stylebox of every [`Control`](class_control.md) node and [`Theme`](class_theme.md) resource. Used when no other value is available to the control.

<!-- rst-class:: classref-section-separator -->

---

## 方法说明

<div id="_class_themedb_method_get_default_theme"></div>

[`Theme`](class_theme.md) **get_default_theme** ( )<div id="class_themedb_method_get_default_theme"></div>

Returns a reference to the default engine [`Theme`](class_theme.md). This theme resource is responsible for the out-of-the-box look of [`Control`](class_control.md) nodes and cannot be overridden.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_themedb_method_get_project_theme"></div>

[`Theme`](class_theme.md) **get_project_theme** ( )<div id="class_themedb_method_get_project_theme"></div>

Returns a reference to the custom project [`Theme`](class_theme.md). This theme resources allows to override the default engine theme for every control node in the project.

To set the project theme, see [`ProjectSettings.gui/theme/custom`](class_projectsettings.md#class_projectsettings_property_gui/theme/custom).

[^virtual]: 本方法通常需要用户覆盖才能生效。
[^const]: 本方法无副作用，不会修改该实例的任何成员变量。
[^vararg]: 本方法除了能接受在此处描述的参数外，还能够继续接受任意数量的参数。
[^constructor]: 本方法用于构造某个类型。
[^static]: 调用本方法无需实例，可直接使用类名进行调用。
[^operator]: 本方法描述的是使用本类型作为左操作数的有效运算符。
[^bitfield]: 这个值是由下列位标志构成位掩码的整数。
[^void]: 无返回值。
