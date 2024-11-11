<!-- ⚠ 请勿编辑本文件 ⚠ -->
<!-- 本文档使用脚本从 WeDot 引擎源码仓库生成。 -->
<!-- 生成脚本：https://github.com/WeDot-Engine/WeDot/tree/master/doc/tools/make_md.py； -->
<!-- 原文件：https://github.com/WeDot-Engine/WeDot/tree/master/doc/classes/SubViewport.xml。 -->

<div id="_class_subviewport"></div>

# SubViewport

**继承：** [`Viewport`](class_viewport.md) **<** [`Node`](class_node.md) **<** [`Object`](class_object.md)

An interface to a game world that doesn't create a window or draw to the screen directly.

## 描述

**SubViewport** Isolates a rectangular region of a scene to be displayed independently. This can be used, for example, to display UI in 3D space.

 **Note:** **SubViewport** is a [`Viewport`](class_viewport.md) that isn't a [`Window`](class_window.md), i.e. it doesn't draw anything by itself. To display anything, **SubViewport** must have a non-zero size and be either put inside a [`SubViewportContainer`](class_subviewportcontainer.md) or assigned to a [`ViewportTexture`](class_viewporttexture.md).

## 属性

|||
|:-:|:--|
| [ClearMode](#enum_subviewport_clearmode)   | [`render_target_clear_mode`](class_subviewport.md#class_subviewport_property_render_target_clear_mode)   | ``0``                  |
| [UpdateMode](#enum_subviewport_updatemode) | [`render_target_update_mode`](class_subviewport.md#class_subviewport_property_render_target_update_mode) | ``2``                  |
| [`Vector2i`](class_vector2i.md)            | [`size`](class_subviewport.md#class_subviewport_property_size)                                           | ``Vector2i(512, 512)`` |
| [`Vector2i`](class_vector2i.md)            | [`size_2d_override`](class_subviewport.md#class_subviewport_property_size_2d_override)                   | ``Vector2i(0, 0)``     |
| [`bool`](class_bool.md)                    | [`size_2d_override_stretch`](class_subviewport.md#class_subviewport_property_size_2d_override_stretch)   | ``false``              |

<!-- rst-class:: classref-section-separator -->

---

## 枚举

<div id="_class_enum_subviewport_clearmode"></div>

enum **ClearMode**: <div id="enum_subviewport_clearmode"></div>

<div id="_class_subviewport_constant_clear_mode_always"></div>

[ClearMode](#enum_subviewport_clearmode) **CLEAR_MODE_ALWAYS** = ``0``

Always clear the render target before drawing.

<div id="_class_subviewport_constant_clear_mode_never"></div>

[ClearMode](#enum_subviewport_clearmode) **CLEAR_MODE_NEVER** = ``1``

Never clear the render target.

<div id="_class_subviewport_constant_clear_mode_once"></div>

[ClearMode](#enum_subviewport_clearmode) **CLEAR_MODE_ONCE** = ``2``

Clear the render target on the next frame, then switch to [`CLEAR_MODE_NEVER`](class_subviewport.md#class_subviewport_constant_clear_mode_never).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_enum_subviewport_updatemode"></div>

enum **UpdateMode**: <div id="enum_subviewport_updatemode"></div>

<div id="_class_subviewport_constant_update_disabled"></div>

[UpdateMode](#enum_subviewport_updatemode) **UPDATE_DISABLED** = ``0``

Do not update the render target.

<div id="_class_subviewport_constant_update_once"></div>

[UpdateMode](#enum_subviewport_updatemode) **UPDATE_ONCE** = ``1``

Update the render target once, then switch to [`UPDATE_DISABLED`](class_subviewport.md#class_subviewport_constant_update_disabled).

<div id="_class_subviewport_constant_update_when_visible"></div>

[UpdateMode](#enum_subviewport_updatemode) **UPDATE_WHEN_VISIBLE** = ``2``

Update the render target only when it is visible. This is the default value.

<div id="_class_subviewport_constant_update_when_parent_visible"></div>

[UpdateMode](#enum_subviewport_updatemode) **UPDATE_WHEN_PARENT_VISIBLE** = ``3``

Update the render target only when its parent is visible.

<div id="_class_subviewport_constant_update_always"></div>

[UpdateMode](#enum_subviewport_updatemode) **UPDATE_ALWAYS** = ``4``

Always update the render target.

<!-- rst-class:: classref-section-separator -->

---

## 属性说明

<div id="_class_subviewport_property_render_target_clear_mode"></div>

[ClearMode](#enum_subviewport_clearmode) **render_target_clear_mode** = ``0`` <div id="class_subviewport_property_render_target_clear_mode"></div>

- `void` **set_clear_mode** ( value: [ClearMode](#enum_subviewport_clearmode) )
- [ClearMode](#enum_subviewport_clearmode) **get_clear_mode** ( )

The clear mode when the sub-viewport is used as a render target.

 **Note:** This property is intended for 2D usage.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_subviewport_property_render_target_update_mode"></div>

[UpdateMode](#enum_subviewport_updatemode) **render_target_update_mode** = ``2`` <div id="class_subviewport_property_render_target_update_mode"></div>

- `void` **set_update_mode** ( value: [UpdateMode](#enum_subviewport_updatemode) )
- [UpdateMode](#enum_subviewport_updatemode) **get_update_mode** ( )

The update mode when the sub-viewport is used as a render target.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_subviewport_property_size"></div>

[`Vector2i`](class_vector2i.md) **size** = ``Vector2i(512, 512)`` <div id="class_subviewport_property_size"></div>

- `void` **set_size** ( value: [`Vector2i`](class_vector2i.md) )
- [`Vector2i`](class_vector2i.md) **get_size** ( )

The width and height of the sub-viewport. Must be set to a value greater than or equal to 2 pixels on both dimensions. Otherwise, nothing will be displayed.

 **Note:** If the parent node is a [`SubViewportContainer`](class_subviewportcontainer.md) and its [`SubViewportContainer.stretch`](class_subviewportcontainer.md#class_subviewportcontainer_property_stretch) is `true`, the viewport size cannot be changed manually.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_subviewport_property_size_2d_override"></div>

[`Vector2i`](class_vector2i.md) **size_2d_override** = ``Vector2i(0, 0)`` <div id="class_subviewport_property_size_2d_override"></div>

- `void` **set_size_2d_override** ( value: [`Vector2i`](class_vector2i.md) )
- [`Vector2i`](class_vector2i.md) **get_size_2d_override** ( )

The 2D size override of the sub-viewport. If either the width or height is `0`, the override is disabled.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_subviewport_property_size_2d_override_stretch"></div>

[`bool`](class_bool.md) **size_2d_override_stretch** = ``false`` <div id="class_subviewport_property_size_2d_override_stretch"></div>

- `void` **set_size_2d_override_stretch** ( value: [`bool`](class_bool.md) )
- [`bool`](class_bool.md) **is_size_2d_override_stretch_enabled** ( )

If `true`, the 2D size override affects stretch as well.

[^virtual]: 本方法通常需要用户覆盖才能生效。
[^const]: 本方法无副作用，不会修改该实例的任何成员变量。
[^vararg]: 本方法除了能接受在此处描述的参数外，还能够继续接受任意数量的参数。
[^constructor]: 本方法用于构造某个类型。
[^static]: 调用本方法无需实例，可直接使用类名进行调用。
[^operator]: 本方法描述的是使用本类型作为左操作数的有效运算符。
[^bitfield]: 这个值是由下列位标志构成位掩码的整数。
[^void]: 无返回值。
