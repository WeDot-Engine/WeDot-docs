<!-- ⚠ 请勿编辑本文件 ⚠ -->
<!-- 本文档使用脚本从 WeDot 引擎源码仓库生成。 -->
<!-- 生成脚本：https://github.com/WeDot-Engine/WeDot/tree/master/doc/tools/make_md.py； -->
<!-- 原文件：https://github.com/WeDot-Engine/WeDot/tree/master/doc/classes/SplitContainer.xml。 -->

<div id="_class_splitcontainer"></div>

# SplitContainer

**继承：** [`Container`](class_container.md) **<** [`Control`](class_control.md) **<** [`CanvasItem`](class_canvasitem.md) **<** [`Node`](class_node.md) **<** [`Object`](class_object.md)

**派生：** [`HSplitContainer`](class_hsplitcontainer.md), [`VSplitContainer`](class_vsplitcontainer.md)

A container that splits two child controls horizontally or vertically and provides a grabber for adjusting the split ratio.

## 描述

A container that accepts only two child controls, then arranges them horizontally or vertically and creates a divisor between them. The divisor can be dragged around to change the size relation between the child controls.

## 属性

|||
|:-:|:--|
| [`bool`](class_bool.md)                                     | [`collapsed`](class_splitcontainer.md#class_splitcontainer_property_collapsed)                                         | ``false`` |
| [`bool`](class_bool.md)                                     | [`drag_area_highlight_in_editor`](class_splitcontainer.md#class_splitcontainer_property_drag_area_highlight_in_editor) | ``false`` |
| [`int`](class_int.md)                                       | [`drag_area_margin_begin`](class_splitcontainer.md#class_splitcontainer_property_drag_area_margin_begin)               | ``0``     |
| [`int`](class_int.md)                                       | [`drag_area_margin_end`](class_splitcontainer.md#class_splitcontainer_property_drag_area_margin_end)                   | ``0``     |
| [`int`](class_int.md)                                       | [`drag_area_offset`](class_splitcontainer.md#class_splitcontainer_property_drag_area_offset)                           | ``0``     |
| [DraggerVisibility](#enum_splitcontainer_draggervisibility) | [`dragger_visibility`](class_splitcontainer.md#class_splitcontainer_property_dragger_visibility)                       | ``0``     |
| [`bool`](class_bool.md)                                     | [`dragging_enabled`](class_splitcontainer.md#class_splitcontainer_property_dragging_enabled)                           | ``true``  |
| [`int`](class_int.md)                                       | [`split_offset`](class_splitcontainer.md#class_splitcontainer_property_split_offset)                                   | ``0``     |
| [`bool`](class_bool.md)                                     | [`vertical`](class_splitcontainer.md#class_splitcontainer_property_vertical)                                           | ``false`` |

## 方法

|||
|:-:|:--|
| `void`                        | [`clamp_split_offset`](class_splitcontainer.md#class_splitcontainer_method_clamp_split_offset) ( )       |
| [`Control`](class_control.md) | [`get_drag_area_control`](class_splitcontainer.md#class_splitcontainer_method_get_drag_area_control) ( ) |

## 主题属性

|||
|:-:|:--|
| [`int`](class_int.md)             | [`autohide`](class_splitcontainer.md#class_splitcontainer_theme_constant_autohide)                             | ``1``  |
| [`int`](class_int.md)             | [`minimum_grab_thickness`](class_splitcontainer.md#class_splitcontainer_theme_constant_minimum_grab_thickness) | ``6``  |
| [`int`](class_int.md)             | [`separation`](class_splitcontainer.md#class_splitcontainer_theme_constant_separation)                         | ``12`` |
| [`Texture2D`](class_texture2d.md) | [`grabber`](class_splitcontainer.md#class_splitcontainer_theme_icon_grabber)                                   |        |
| [`Texture2D`](class_texture2d.md) | [`h_grabber`](class_splitcontainer.md#class_splitcontainer_theme_icon_h_grabber)                               |        |
| [`Texture2D`](class_texture2d.md) | [`v_grabber`](class_splitcontainer.md#class_splitcontainer_theme_icon_v_grabber)                               |        |
| [`StyleBox`](class_stylebox.md)   | [`split_bar_background`](class_splitcontainer.md#class_splitcontainer_theme_style_split_bar_background)        |        |

<!-- rst-class:: classref-section-separator -->

---

## 信号

<div id="_class_class_splitcontainer_signal_drag_ended"></div>

**drag_ended** ( ) <div id="class_splitcontainer_signal_drag_ended"></div>

Emitted when the user ends dragging.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_class_splitcontainer_signal_drag_started"></div>

**drag_started** ( ) <div id="class_splitcontainer_signal_drag_started"></div>

Emitted when the user starts dragging.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_class_splitcontainer_signal_dragged"></div>

**dragged** ( offset: [`int`](class_int.md) ) <div id="class_splitcontainer_signal_dragged"></div>

Emitted when the dragger is dragged by user.

<!-- rst-class:: classref-section-separator -->

---

## 枚举

<div id="_class_enum_splitcontainer_draggervisibility"></div>

enum **DraggerVisibility**: <div id="enum_splitcontainer_draggervisibility"></div>

<div id="_class_splitcontainer_constant_dragger_visible"></div>

[DraggerVisibility](#enum_splitcontainer_draggervisibility) **DRAGGER_VISIBLE** = ``0``

The split dragger icon is always visible when [`autohide`](class_splitcontainer.md#class_splitcontainer_theme_constant_autohide) is `false`, otherwise visible only when the cursor hovers it.

The size of the grabber icon determines the minimum [`separation`](class_splitcontainer.md#class_splitcontainer_theme_constant_separation).

The dragger icon is automatically hidden if the length of the grabber icon is longer than the split bar.

<div id="_class_splitcontainer_constant_dragger_hidden"></div>

[DraggerVisibility](#enum_splitcontainer_draggervisibility) **DRAGGER_HIDDEN** = ``1``

The split dragger icon is never visible regardless of the value of [`autohide`](class_splitcontainer.md#class_splitcontainer_theme_constant_autohide).

The size of the grabber icon determines the minimum [`separation`](class_splitcontainer.md#class_splitcontainer_theme_constant_separation).

<div id="_class_splitcontainer_constant_dragger_hidden_collapsed"></div>

[DraggerVisibility](#enum_splitcontainer_draggervisibility) **DRAGGER_HIDDEN_COLLAPSED** = ``2``

The split dragger icon is not visible, and the split bar is collapsed to zero thickness.

<!-- rst-class:: classref-section-separator -->

---

## 属性说明

<div id="_class_splitcontainer_property_collapsed"></div>

[`bool`](class_bool.md) **collapsed** = ``false`` <div id="class_splitcontainer_property_collapsed"></div>

- `void` **set_collapsed** ( value: [`bool`](class_bool.md) )
- [`bool`](class_bool.md) **is_collapsed** ( )

If `true`, the area of the first [`Control`](class_control.md) will be collapsed and the dragger will be disabled.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_splitcontainer_property_drag_area_highlight_in_editor"></div>

[`bool`](class_bool.md) **drag_area_highlight_in_editor** = ``false`` <div id="class_splitcontainer_property_drag_area_highlight_in_editor"></div>

- `void` **set_drag_area_highlight_in_editor** ( value: [`bool`](class_bool.md) )
- [`bool`](class_bool.md) **is_drag_area_highlight_in_editor_enabled** ( )

Highlights the drag area [`Rect2`](class_rect2.md) so you can see where it is during development. The drag area is gold if [`dragging_enabled`](class_splitcontainer.md#class_splitcontainer_property_dragging_enabled) is `true`, and red if `false`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_splitcontainer_property_drag_area_margin_begin"></div>

[`int`](class_int.md) **drag_area_margin_begin** = ``0`` <div id="class_splitcontainer_property_drag_area_margin_begin"></div>

- `void` **set_drag_area_margin_begin** ( value: [`int`](class_int.md) )
- [`int`](class_int.md) **get_drag_area_margin_begin** ( )

Reduces the size of the drag area and split bar [`split_bar_background`](class_splitcontainer.md#class_splitcontainer_theme_style_split_bar_background) at the beginning of the container.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_splitcontainer_property_drag_area_margin_end"></div>

[`int`](class_int.md) **drag_area_margin_end** = ``0`` <div id="class_splitcontainer_property_drag_area_margin_end"></div>

- `void` **set_drag_area_margin_end** ( value: [`int`](class_int.md) )
- [`int`](class_int.md) **get_drag_area_margin_end** ( )

Reduces the size of the drag area and split bar [`split_bar_background`](class_splitcontainer.md#class_splitcontainer_theme_style_split_bar_background) at the end of the container.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_splitcontainer_property_drag_area_offset"></div>

[`int`](class_int.md) **drag_area_offset** = ``0`` <div id="class_splitcontainer_property_drag_area_offset"></div>

- `void` **set_drag_area_offset** ( value: [`int`](class_int.md) )
- [`int`](class_int.md) **get_drag_area_offset** ( )

Shifts the drag area in the axis of the container to prevent the drag area from overlapping the [`ScrollBar`](class_scrollbar.md) or other selectable [`Control`](class_control.md) of a child node.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_splitcontainer_property_dragger_visibility"></div>

[DraggerVisibility](#enum_splitcontainer_draggervisibility) **dragger_visibility** = ``0`` <div id="class_splitcontainer_property_dragger_visibility"></div>

- `void` **set_dragger_visibility** ( value: [DraggerVisibility](#enum_splitcontainer_draggervisibility) )
- [DraggerVisibility](#enum_splitcontainer_draggervisibility) **get_dragger_visibility** ( )

Determines the dragger's visibility. See [DraggerVisibility](#enum_splitcontainer_draggervisibility) for details. This property does not determine whether dragging is enabled or not. Use [`dragging_enabled`](class_splitcontainer.md#class_splitcontainer_property_dragging_enabled) for that.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_splitcontainer_property_dragging_enabled"></div>

[`bool`](class_bool.md) **dragging_enabled** = ``true`` <div id="class_splitcontainer_property_dragging_enabled"></div>

- `void` **set_dragging_enabled** ( value: [`bool`](class_bool.md) )
- [`bool`](class_bool.md) **is_dragging_enabled** ( )

Enables or disables split dragging.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_splitcontainer_property_split_offset"></div>

[`int`](class_int.md) **split_offset** = ``0`` <div id="class_splitcontainer_property_split_offset"></div>

- `void` **set_split_offset** ( value: [`int`](class_int.md) )
- [`int`](class_int.md) **get_split_offset** ( )

The initial offset of the splitting between the two [`Control`](class_control.md) s, with `0` being at the end of the first [`Control`](class_control.md).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_splitcontainer_property_vertical"></div>

[`bool`](class_bool.md) **vertical** = ``false`` <div id="class_splitcontainer_property_vertical"></div>

- `void` **set_vertical** ( value: [`bool`](class_bool.md) )
- [`bool`](class_bool.md) **is_vertical** ( )

If `true`, the **SplitContainer** will arrange its children vertically, rather than horizontally.

Can't be changed when using [`HSplitContainer`](class_hsplitcontainer.md) and [`VSplitContainer`](class_vsplitcontainer.md).

<!-- rst-class:: classref-section-separator -->

---

## 方法说明

<div id="_class_splitcontainer_method_clamp_split_offset"></div>

`void` **clamp_split_offset** ( )<div id="class_splitcontainer_method_clamp_split_offset"></div>

Clamps the [`split_offset`](class_splitcontainer.md#class_splitcontainer_property_split_offset) value to not go outside the currently possible minimal and maximum values.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_splitcontainer_method_get_drag_area_control"></div>

[`Control`](class_control.md) **get_drag_area_control** ( )<div id="class_splitcontainer_method_get_drag_area_control"></div>

Returns the drag area [`Control`](class_control.md). For example, you can move a pre-configured button into the drag area [`Control`](class_control.md) so that it rides along with the split bar. Try setting the [`Button`](class_button.md) anchors to `center` prior to the `reparent()` call.

```

    $BarnacleButton.reparent($SplitContainer.get_drag_area_control())
```

 **Note:** The drag area [`Control`](class_control.md) is drawn over the **SplitContainer**'s children, so [`CanvasItem`](class_canvasitem.md) draw objects called from the [`Control`](class_control.md) and children added to the [`Control`](class_control.md) will also appear over the **SplitContainer**'s children. Try setting [`Control.mouse_filter`](class_control.md#class_control_property_mouse_filter) of custom children to [`Control.MOUSE_FILTER_IGNORE`](class_control.md#class_control_constant_mouse_filter_ignore) to prevent blocking the mouse from dragging if desired.

 **Warning:** This is a required internal node, removing and freeing it may cause a crash.



<!-- rst-class:: classref-section-separator -->

---

## 主题属性说明

<div id="_class_splitcontainer_theme_constant_autohide"></div>

[`int`](class_int.md) **autohide** = ``1`` <div id="class_splitcontainer_theme_constant_autohide"></div>

Boolean value. If `1` (`true`), the grabber will hide automatically when it isn't under the cursor. If `0` (`false`), it's always visible. The [`dragger_visibility`](class_splitcontainer.md#class_splitcontainer_property_dragger_visibility) must be [`DRAGGER_VISIBLE`](class_splitcontainer.md#class_splitcontainer_constant_dragger_visible).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_splitcontainer_theme_constant_minimum_grab_thickness"></div>

[`int`](class_int.md) **minimum_grab_thickness** = ``6`` <div id="class_splitcontainer_theme_constant_minimum_grab_thickness"></div>

The minimum thickness of the area users can click on to grab the split bar. This ensures that the split bar can still be dragged if [`separation`](class_splitcontainer.md#class_splitcontainer_theme_constant_separation) or [`h_grabber`](class_splitcontainer.md#class_splitcontainer_theme_icon_h_grabber) / [`v_grabber`](class_splitcontainer.md#class_splitcontainer_theme_icon_v_grabber)'s size is too narrow to easily select.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_splitcontainer_theme_constant_separation"></div>

[`int`](class_int.md) **separation** = ``12`` <div id="class_splitcontainer_theme_constant_separation"></div>

The split bar thickness, i.e., the gap between the two children of the container. This is overridden by the size of the grabber icon if [`dragger_visibility`](class_splitcontainer.md#class_splitcontainer_property_dragger_visibility) is set to [`DRAGGER_VISIBLE`](class_splitcontainer.md#class_splitcontainer_constant_dragger_visible), or [`DRAGGER_HIDDEN`](class_splitcontainer.md#class_splitcontainer_constant_dragger_hidden), and [`separation`](class_splitcontainer.md#class_splitcontainer_theme_constant_separation) is smaller than the size of the grabber icon in the same axis.

 **Note:** To obtain [`separation`](class_splitcontainer.md#class_splitcontainer_theme_constant_separation) values less than the size of the grabber icon, for example a `1 px` hairline, set [`h_grabber`](class_splitcontainer.md#class_splitcontainer_theme_icon_h_grabber) or [`v_grabber`](class_splitcontainer.md#class_splitcontainer_theme_icon_v_grabber) to a new [`ImageTexture`](class_imagetexture.md), which effectively sets the grabber icon size to `0 px`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_splitcontainer_theme_icon_grabber"></div>

[`Texture2D`](class_texture2d.md) **grabber** <div id="class_splitcontainer_theme_icon_grabber"></div>

The icon used for the grabber drawn in the middle area.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_splitcontainer_theme_icon_h_grabber"></div>

[`Texture2D`](class_texture2d.md) **h_grabber** <div id="class_splitcontainer_theme_icon_h_grabber"></div>

The icon used for the grabber drawn in the middle area when [`vertical`](class_splitcontainer.md#class_splitcontainer_property_vertical) is `false`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_splitcontainer_theme_icon_v_grabber"></div>

[`Texture2D`](class_texture2d.md) **v_grabber** <div id="class_splitcontainer_theme_icon_v_grabber"></div>

The icon used for the grabber drawn in the middle area when [`vertical`](class_splitcontainer.md#class_splitcontainer_property_vertical) is `true`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_splitcontainer_theme_style_split_bar_background"></div>

[`StyleBox`](class_stylebox.md) **split_bar_background** <div id="class_splitcontainer_theme_style_split_bar_background"></div>

Determines the background of the split bar if its thickness is greater than zero.

[^virtual]: 本方法通常需要用户覆盖才能生效。
[^const]: 本方法无副作用，不会修改该实例的任何成员变量。
[^vararg]: 本方法除了能接受在此处描述的参数外，还能够继续接受任意数量的参数。
[^constructor]: 本方法用于构造某个类型。
[^static]: 调用本方法无需实例，可直接使用类名进行调用。
[^operator]: 本方法描述的是使用本类型作为左操作数的有效运算符。
[^bitfield]: 这个值是由下列位标志构成位掩码的整数。
[^void]: 无返回值。
