<!-- ⚠ 请勿编辑本文件 ⚠ -->
<!-- 本文档使用脚本从 WeDot 引擎源码仓库生成。 -->
<!-- 生成脚本：https://github.com/WeDot-Engine/WeDot/tree/master/doc/tools/make_md.py； -->
<!-- 原文件：https://github.com/WeDot-Engine/WeDot/tree/master/doc/classes/ScrollContainer.xml。 -->

<div id="_class_scrollcontainer"></div>

# ScrollContainer

**继承：** [`Container`](class_container.md) **<** [`Control`](class_control.md) **<** [`CanvasItem`](class_canvasitem.md) **<** [`Node`](class_node.md) **<** [`Object`](class_object.md)

**派生：** [`EditorInspector`](class_editorinspector.md)

A container used to provide scrollbars to a child control when needed.

## 描述

A container used to provide a child control with scrollbars when needed. Scrollbars will automatically be drawn at the right (for vertical) or bottom (for horizontal) and will enable dragging to move the viewable Control (and its children) within the ScrollContainer. Scrollbars will also automatically resize the grabber based on the [`Control.custom_minimum_size`](class_control.md#class_control_property_custom_minimum_size) of the Control relative to the ScrollContainer.

## 属性

|||
|:-:|:--|
| [`bool`](class_bool.md)                        | clip_contents                                                                                                            | ``true`` (overrides [`Control`](class_control.md#class_control_property_clip_contents)) |
| [`bool`](class_bool.md)                        | [`follow_focus`](class_scrollcontainer.md#class_scrollcontainer_property_follow_focus)                                   | ``false``                                                                               |
| [ScrollMode](#enum_scrollcontainer_scrollmode) | [`horizontal_scroll_mode`](class_scrollcontainer.md#class_scrollcontainer_property_horizontal_scroll_mode)               | ``1``                                                                                   |
| [`int`](class_int.md)                          | [`scroll_deadzone`](class_scrollcontainer.md#class_scrollcontainer_property_scroll_deadzone)                             | ``0``                                                                                   |
| [`int`](class_int.md)                          | [`scroll_horizontal`](class_scrollcontainer.md#class_scrollcontainer_property_scroll_horizontal)                         | ``0``                                                                                   |
| [`float`](class_float.md)                      | [`scroll_horizontal_custom_step`](class_scrollcontainer.md#class_scrollcontainer_property_scroll_horizontal_custom_step) | ``-1.0``                                                                                |
| [`int`](class_int.md)                          | [`scroll_vertical`](class_scrollcontainer.md#class_scrollcontainer_property_scroll_vertical)                             | ``0``                                                                                   |
| [`float`](class_float.md)                      | [`scroll_vertical_custom_step`](class_scrollcontainer.md#class_scrollcontainer_property_scroll_vertical_custom_step)     | ``-1.0``                                                                                |
| [ScrollMode](#enum_scrollcontainer_scrollmode) | [`vertical_scroll_mode`](class_scrollcontainer.md#class_scrollcontainer_property_vertical_scroll_mode)                   | ``1``                                                                                   |

## 方法

|||
|:-:|:--|
| `void`                              | [`ensure_control_visible`](class_scrollcontainer.md#class_scrollcontainer_method_ensure_control_visible) ( control: [`Control`](class_control.md) ) |
| [`HScrollBar`](class_hscrollbar.md) | [`get_h_scroll_bar`](class_scrollcontainer.md#class_scrollcontainer_method_get_h_scroll_bar) ( )                                                    |
| [`VScrollBar`](class_vscrollbar.md) | [`get_v_scroll_bar`](class_scrollcontainer.md#class_scrollcontainer_method_get_v_scroll_bar) ( )                                                    |

## 主题属性

|||
|:-:|:--|
| [`StyleBox`](class_stylebox.md) | [`panel`](class_scrollcontainer.md#class_scrollcontainer_theme_style_panel) |

<!-- rst-class:: classref-section-separator -->

---

## 信号

<div id="_class_class_scrollcontainer_signal_scroll_ended"></div>

**scroll_ended** ( ) <div id="class_scrollcontainer_signal_scroll_ended"></div>

Emitted when scrolling stops when dragging the scrollable area *with a touch event*. This signal is *not* emitted when scrolling by dragging the scrollbar, scrolling with the mouse wheel or scrolling with keyboard/gamepad events.

 **Note:** This signal is only emitted on Android or iOS, or on desktop/web platforms when [`ProjectSettings.input_devices/pointing/emulate_touch_from_mouse`](class_projectsettings.md#class_projectsettings_property_input_devices/pointing/emulate_touch_from_mouse) is enabled.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_class_scrollcontainer_signal_scroll_started"></div>

**scroll_started** ( ) <div id="class_scrollcontainer_signal_scroll_started"></div>

Emitted when scrolling starts when dragging the scrollable area w *ith a touch event*. This signal is *not* emitted when scrolling by dragging the scrollbar, scrolling with the mouse wheel or scrolling with keyboard/gamepad events.

 **Note:** This signal is only emitted on Android or iOS, or on desktop/web platforms when [`ProjectSettings.input_devices/pointing/emulate_touch_from_mouse`](class_projectsettings.md#class_projectsettings_property_input_devices/pointing/emulate_touch_from_mouse) is enabled.

<!-- rst-class:: classref-section-separator -->

---

## 枚举

<div id="_class_enum_scrollcontainer_scrollmode"></div>

enum **ScrollMode**: <div id="enum_scrollcontainer_scrollmode"></div>

<div id="_class_scrollcontainer_constant_scroll_mode_disabled"></div>

[ScrollMode](#enum_scrollcontainer_scrollmode) **SCROLL_MODE_DISABLED** = ``0``

Scrolling disabled, scrollbar will be invisible.

<div id="_class_scrollcontainer_constant_scroll_mode_auto"></div>

[ScrollMode](#enum_scrollcontainer_scrollmode) **SCROLL_MODE_AUTO** = ``1``

Scrolling enabled, scrollbar will be visible only if necessary, i.e. container's content is bigger than the container.

<div id="_class_scrollcontainer_constant_scroll_mode_show_always"></div>

[ScrollMode](#enum_scrollcontainer_scrollmode) **SCROLL_MODE_SHOW_ALWAYS** = ``2``

Scrolling enabled, scrollbar will be always visible.

<div id="_class_scrollcontainer_constant_scroll_mode_show_never"></div>

[ScrollMode](#enum_scrollcontainer_scrollmode) **SCROLL_MODE_SHOW_NEVER** = ``3``

Scrolling enabled, scrollbar will be hidden.

<div id="_class_scrollcontainer_constant_scroll_mode_reserve"></div>

[ScrollMode](#enum_scrollcontainer_scrollmode) **SCROLL_MODE_RESERVE** = ``4``

Combines [`SCROLL_MODE_AUTO`](class_scrollcontainer.md#class_scrollcontainer_constant_scroll_mode_auto) and [`SCROLL_MODE_SHOW_ALWAYS`](class_scrollcontainer.md#class_scrollcontainer_constant_scroll_mode_show_always). The scrollbar is only visible if necessary, but the content size is adjusted as if it was always visible. It's useful for ensuring that content size stays the same regardless if the scrollbar is visible.

<!-- rst-class:: classref-section-separator -->

---

## 属性说明

<div id="_class_scrollcontainer_property_follow_focus"></div>

[`bool`](class_bool.md) **follow_focus** = ``false`` <div id="class_scrollcontainer_property_follow_focus"></div>

- `void` **set_follow_focus** ( value: [`bool`](class_bool.md) )
- [`bool`](class_bool.md) **is_following_focus** ( )

If `true`, the ScrollContainer will automatically scroll to focused children (including indirect children) to make sure they are fully visible.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_scrollcontainer_property_horizontal_scroll_mode"></div>

[ScrollMode](#enum_scrollcontainer_scrollmode) **horizontal_scroll_mode** = ``1`` <div id="class_scrollcontainer_property_horizontal_scroll_mode"></div>

- `void` **set_horizontal_scroll_mode** ( value: [ScrollMode](#enum_scrollcontainer_scrollmode) )
- [ScrollMode](#enum_scrollcontainer_scrollmode) **get_horizontal_scroll_mode** ( )

Controls whether horizontal scrollbar can be used and when it should be visible. See [ScrollMode](#enum_scrollcontainer_scrollmode) for options.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_scrollcontainer_property_scroll_deadzone"></div>

[`int`](class_int.md) **scroll_deadzone** = ``0`` <div id="class_scrollcontainer_property_scroll_deadzone"></div>

- `void` **set_deadzone** ( value: [`int`](class_int.md) )
- [`int`](class_int.md) **get_deadzone** ( )

Deadzone for touch scrolling. Lower deadzone makes the scrolling more sensitive.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_scrollcontainer_property_scroll_horizontal"></div>

[`int`](class_int.md) **scroll_horizontal** = ``0`` <div id="class_scrollcontainer_property_scroll_horizontal"></div>

- `void` **set_h_scroll** ( value: [`int`](class_int.md) )
- [`int`](class_int.md) **get_h_scroll** ( )

The current horizontal scroll value.

 **Note:** If you are setting this value in the [`Node._ready`](class_node.md#class_node_private_method__ready) function or earlier, it needs to be wrapped with [`Object.set_deferred`](class_object.md#class_object_method_set_deferred), since scroll bar's [`Range.max_value`](class_range.md#class_range_property_max_value) is not initialized yet.

```

    func _ready():
        set_deferred("scroll_horizontal", 600)
```



<!-- rst-class:: classref-item-separator -->

---

<div id="_class_scrollcontainer_property_scroll_horizontal_custom_step"></div>

[`float`](class_float.md) **scroll_horizontal_custom_step** = ``-1.0`` <div id="class_scrollcontainer_property_scroll_horizontal_custom_step"></div>

- `void` **set_horizontal_custom_step** ( value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_horizontal_custom_step** ( )

Overrides the [`ScrollBar.custom_step`](class_scrollbar.md#class_scrollbar_property_custom_step) used when clicking the internal scroll bar's horizontal increment and decrement buttons or when using arrow keys when the [`ScrollBar`](class_scrollbar.md) is focused.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_scrollcontainer_property_scroll_vertical"></div>

[`int`](class_int.md) **scroll_vertical** = ``0`` <div id="class_scrollcontainer_property_scroll_vertical"></div>

- `void` **set_v_scroll** ( value: [`int`](class_int.md) )
- [`int`](class_int.md) **get_v_scroll** ( )

The current vertical scroll value.

 **Note:** Setting it early needs to be deferred, just like in [`scroll_horizontal`](class_scrollcontainer.md#class_scrollcontainer_property_scroll_horizontal).

```

    func _ready():
        set_deferred("scroll_vertical", 600)
```



<!-- rst-class:: classref-item-separator -->

---

<div id="_class_scrollcontainer_property_scroll_vertical_custom_step"></div>

[`float`](class_float.md) **scroll_vertical_custom_step** = ``-1.0`` <div id="class_scrollcontainer_property_scroll_vertical_custom_step"></div>

- `void` **set_vertical_custom_step** ( value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_vertical_custom_step** ( )

Overrides the [`ScrollBar.custom_step`](class_scrollbar.md#class_scrollbar_property_custom_step) used when clicking the internal scroll bar's vertical increment and decrement buttons or when using arrow keys when the [`ScrollBar`](class_scrollbar.md) is focused.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_scrollcontainer_property_vertical_scroll_mode"></div>

[ScrollMode](#enum_scrollcontainer_scrollmode) **vertical_scroll_mode** = ``1`` <div id="class_scrollcontainer_property_vertical_scroll_mode"></div>

- `void` **set_vertical_scroll_mode** ( value: [ScrollMode](#enum_scrollcontainer_scrollmode) )
- [ScrollMode](#enum_scrollcontainer_scrollmode) **get_vertical_scroll_mode** ( )

Controls whether vertical scrollbar can be used and when it should be visible. See [ScrollMode](#enum_scrollcontainer_scrollmode) for options.

<!-- rst-class:: classref-section-separator -->

---

## 方法说明

<div id="_class_scrollcontainer_method_ensure_control_visible"></div>

`void` **ensure_control_visible** ( control: [`Control`](class_control.md) )<div id="class_scrollcontainer_method_ensure_control_visible"></div>

Ensures the given `control` is visible (must be a direct or indirect child of the ScrollContainer). Used by [`follow_focus`](class_scrollcontainer.md#class_scrollcontainer_property_follow_focus).

 **Note:** This will not work on a node that was just added during the same frame. If you want to scroll to a newly added child, you must wait until the next frame using [`SceneTree.process_frame`](class_scenetree.md#class_scenetree_signal_process_frame):

```

    add_child(child_node)
    await get_tree().process_frame
    ensure_control_visible(child_node)
```



<!-- rst-class:: classref-item-separator -->

---

<div id="_class_scrollcontainer_method_get_h_scroll_bar"></div>

[`HScrollBar`](class_hscrollbar.md) **get_h_scroll_bar** ( )<div id="class_scrollcontainer_method_get_h_scroll_bar"></div>

Returns the horizontal scrollbar [`HScrollBar`](class_hscrollbar.md) of this **ScrollContainer**.

 **Warning:** This is a required internal node, removing and freeing it may cause a crash. If you wish to disable or hide a scrollbar, you can use [`horizontal_scroll_mode`](class_scrollcontainer.md#class_scrollcontainer_property_horizontal_scroll_mode).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_scrollcontainer_method_get_v_scroll_bar"></div>

[`VScrollBar`](class_vscrollbar.md) **get_v_scroll_bar** ( )<div id="class_scrollcontainer_method_get_v_scroll_bar"></div>

Returns the vertical scrollbar [`VScrollBar`](class_vscrollbar.md) of this **ScrollContainer**.

 **Warning:** This is a required internal node, removing and freeing it may cause a crash. If you wish to disable or hide a scrollbar, you can use [`vertical_scroll_mode`](class_scrollcontainer.md#class_scrollcontainer_property_vertical_scroll_mode).

<!-- rst-class:: classref-section-separator -->

---

## 主题属性说明

<div id="_class_scrollcontainer_theme_style_panel"></div>

[`StyleBox`](class_stylebox.md) **panel** <div id="class_scrollcontainer_theme_style_panel"></div>

The background [`StyleBox`](class_stylebox.md) of the **ScrollContainer**.

[^virtual]: 本方法通常需要用户覆盖才能生效。
[^const]: 本方法无副作用，不会修改该实例的任何成员变量。
[^vararg]: 本方法除了能接受在此处描述的参数外，还能够继续接受任意数量的参数。
[^constructor]: 本方法用于构造某个类型。
[^static]: 调用本方法无需实例，可直接使用类名进行调用。
[^operator]: 本方法描述的是使用本类型作为左操作数的有效运算符。
[^bitfield]: 这个值是由下列位标志构成位掩码的整数。
[^void]: 无返回值。
