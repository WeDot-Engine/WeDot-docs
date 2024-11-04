<!-- ⚠ 请勿编辑本文件 ⚠ -->
<!-- 本文档使用脚本从 WeDot 引擎源码仓库生成。 -->
<!-- 生成脚本：https://github.com/WeDot-Engine/WeDot/tree/4.3/doc/tools/make_md.py； -->
<!-- 原文件：https://github.com/WeDot-Engine/WeDot/tree/4.3/doc/classes/SpriteBase3D.xml。 -->

<div id="_class_spritebase3d"></div>

# SpriteBase3D

**继承：** [`GeometryInstance3D`](class_geometryinstance3d.md) **<** [`VisualInstance3D`](class_visualinstance3d.md) **<** [`Node3D`](class_node3d.md) **<** [`Node`](class_node.md) **<** [`Object`](class_object.md)

**派生：** [`AnimatedSprite3D`](class_animatedsprite3d.md), [`Sprite3D`](class_sprite3d.md)

2D sprite node in 3D environment.

## 描述

A node that displays 2D texture information in a 3D environment. See also [`Sprite3D`](class_sprite3d.md) where many other properties are defined.

## 属性

| [`float`](class_float.md)                                   | [`alpha_antialiasing_edge`](#class_spritebase3d_property_alpha_antialiasing_edge) | ``0.0``               |
| [AlphaAntiAliasing](#enum_basematerial3d_alphaantialiasing) | [`alpha_antialiasing_mode`](#class_spritebase3d_property_alpha_antialiasing_mode) | ``0``                 |
| [AlphaCutMode](#enum_spritebase3d_alphacutmode)             | [`alpha_cut`](#class_spritebase3d_property_alpha_cut)                             | ``0``                 |
| [`float`](class_float.md)                                   | [`alpha_hash_scale`](#class_spritebase3d_property_alpha_hash_scale)               | ``1.0``               |
| [`float`](class_float.md)                                   | [`alpha_scissor_threshold`](#class_spritebase3d_property_alpha_scissor_threshold) | ``0.5``               |
| Vector3.Axis                                                | [`axis`](#class_spritebase3d_property_axis)                                       | ``2``                 |
| [BillboardMode](#enum_basematerial3d_billboardmode)         | [`billboard`](#class_spritebase3d_property_billboard)                             | ``0``                 |
| [`bool`](class_bool.md)                                     | [`centered`](#class_spritebase3d_property_centered)                               | ``true``              |
| [`bool`](class_bool.md)                                     | [`double_sided`](#class_spritebase3d_property_double_sided)                       | ``true``              |
| [`bool`](class_bool.md)                                     | [`fixed_size`](#class_spritebase3d_property_fixed_size)                           | ``false``             |
| [`bool`](class_bool.md)                                     | [`flip_h`](#class_spritebase3d_property_flip_h)                                   | ``false``             |
| [`bool`](class_bool.md)                                     | [`flip_v`](#class_spritebase3d_property_flip_v)                                   | ``false``             |
| [`Color`](class_color.md)                                   | [`modulate`](#class_spritebase3d_property_modulate)                               | ``Color(1, 1, 1, 1)`` |
| [`bool`](class_bool.md)                                     | [`no_depth_test`](#class_spritebase3d_property_no_depth_test)                     | ``false``             |
| [`Vector2`](class_vector2.md)                               | [`offset`](#class_spritebase3d_property_offset)                                   | ``Vector2(0, 0)``     |
| [`float`](class_float.md)                                   | [`pixel_size`](#class_spritebase3d_property_pixel_size)                           | ``0.01``              |
| [`int`](class_int.md)                                       | [`render_priority`](#class_spritebase3d_property_render_priority)                 | ``0``                 |
| [`bool`](class_bool.md)                                     | [`shaded`](#class_spritebase3d_property_shaded)                                   | ``false``             |
| [TextureFilter](#enum_basematerial3d_texturefilter)         | [`texture_filter`](#class_spritebase3d_property_texture_filter)                   | ``3``                 |
| [`bool`](class_bool.md)                                     | [`transparent`](#class_spritebase3d_property_transparent)                         | ``true``              |

## 方法

| [`TriangleMesh`](class_trianglemesh.md) | [`generate_triangle_mesh`](#class_spritebase3d_method_generate_triangle_mesh) ( ) const[^const]                                                   |
| [`bool`](class_bool.md)                 | [`get_draw_flag`](#class_spritebase3d_method_get_draw_flag) ( flag: [DrawFlags](#enum_spritebase3d_drawflags) ) const[^const]                     |
| [`Rect2`](class_rect2.md)               | [`get_item_rect`](#class_spritebase3d_method_get_item_rect) ( ) const[^const]                                                                     |
| `void`                                  | [`set_draw_flag`](#class_spritebase3d_method_set_draw_flag) ( flag: [DrawFlags](#enum_spritebase3d_drawflags), enabled: [`bool`](class_bool.md) ) |

<!-- rst-class:: classref-section-separator -->

---

## 枚举

<div id="_class_enum_spritebase3d_drawflags"></div>

enum **DrawFlags**: <div id="enum_spritebase3d_drawflags"></div>

<div id="_class_spritebase3d_constant_flag_transparent"></div>

[DrawFlags](#enum_spritebase3d_drawflags) **FLAG_TRANSPARENT** = ``0``

If set, the texture's transparency and the opacity are used to make those parts of the sprite invisible.

<div id="_class_spritebase3d_constant_flag_shaded"></div>

[DrawFlags](#enum_spritebase3d_drawflags) **FLAG_SHADED** = ``1``

If set, lights in the environment affect the sprite.

<div id="_class_spritebase3d_constant_flag_double_sided"></div>

[DrawFlags](#enum_spritebase3d_drawflags) **FLAG_DOUBLE_SIDED** = ``2``

If set, texture can be seen from the back as well. If not, the texture is invisible when looking at it from behind.

<div id="_class_spritebase3d_constant_flag_disable_depth_test"></div>

[DrawFlags](#enum_spritebase3d_drawflags) **FLAG_DISABLE_DEPTH_TEST** = ``3``

Disables the depth test, so this object is drawn on top of all others. However, objects drawn after it in the draw order may cover it.

<div id="_class_spritebase3d_constant_flag_fixed_size"></div>

[DrawFlags](#enum_spritebase3d_drawflags) **FLAG_FIXED_SIZE** = ``4``

Label is scaled by depth so that it always appears the same size on screen.

<div id="_class_spritebase3d_constant_flag_max"></div>

[DrawFlags](#enum_spritebase3d_drawflags) **FLAG_MAX** = ``5``

Represents the size of the [DrawFlags](#enum_spritebase3d_drawflags) enum.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_enum_spritebase3d_alphacutmode"></div>

enum **AlphaCutMode**: <div id="enum_spritebase3d_alphacutmode"></div>

<div id="_class_spritebase3d_constant_alpha_cut_disabled"></div>

[AlphaCutMode](#enum_spritebase3d_alphacutmode) **ALPHA_CUT_DISABLED** = ``0``

This mode performs standard alpha blending. It can display translucent areas, but transparency sorting issues may be visible when multiple transparent materials are overlapping.

<div id="_class_spritebase3d_constant_alpha_cut_discard"></div>

[AlphaCutMode](#enum_spritebase3d_alphacutmode) **ALPHA_CUT_DISCARD** = ``1``

This mode only allows fully transparent or fully opaque pixels. Harsh edges will be visible unless some form of screen-space antialiasing is enabled (see [`ProjectSettings.rendering/anti_aliasing/quality/screen_space_aa`](#class_projectsettings_property_rendering/anti_aliasing/quality/screen_space_aa)). On the bright side, this mode doesn't suffer from transparency sorting issues when multiple transparent materials are overlapping. This mode is also known as *alpha testing* or *1-bit transparency*.

<div id="_class_spritebase3d_constant_alpha_cut_opaque_prepass"></div>

[AlphaCutMode](#enum_spritebase3d_alphacutmode) **ALPHA_CUT_OPAQUE_PREPASS** = ``2``

This mode draws fully opaque pixels in the depth prepass. This is slower than [`ALPHA_CUT_DISABLED`](#class_spritebase3d_constant_alpha_cut_disabled) or [`ALPHA_CUT_DISCARD`](#class_spritebase3d_constant_alpha_cut_discard), but it allows displaying translucent areas and smooth edges while using proper sorting.

<div id="_class_spritebase3d_constant_alpha_cut_hash"></div>

[AlphaCutMode](#enum_spritebase3d_alphacutmode) **ALPHA_CUT_HASH** = ``3``

This mode draws cuts off all values below a spatially-deterministic threshold, the rest will remain opaque.

<!-- rst-class:: classref-section-separator -->

---

## 属性说明

<div id="_class_spritebase3d_property_alpha_antialiasing_edge"></div>

[`float`](class_float.md) **alpha_antialiasing_edge** = ``0.0`` <div id="class_spritebase3d_property_alpha_antialiasing_edge"></div>

- `void` **set_alpha_antialiasing_edge** ( value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_alpha_antialiasing_edge** ( )

Threshold at which antialiasing will be applied on the alpha channel.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_spritebase3d_property_alpha_antialiasing_mode"></div>

[AlphaAntiAliasing](#enum_basematerial3d_alphaantialiasing) **alpha_antialiasing_mode** = ``0`` <div id="class_spritebase3d_property_alpha_antialiasing_mode"></div>

- `void` **set_alpha_antialiasing** ( value: [AlphaAntiAliasing](#enum_basematerial3d_alphaantialiasing) )
- [AlphaAntiAliasing](#enum_basematerial3d_alphaantialiasing) **get_alpha_antialiasing** ( )

The type of alpha antialiasing to apply. See [AlphaAntiAliasing](#enum_basematerial3d_alphaantialiasing).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_spritebase3d_property_alpha_cut"></div>

[AlphaCutMode](#enum_spritebase3d_alphacutmode) **alpha_cut** = ``0`` <div id="class_spritebase3d_property_alpha_cut"></div>

- `void` **set_alpha_cut_mode** ( value: [AlphaCutMode](#enum_spritebase3d_alphacutmode) )
- [AlphaCutMode](#enum_spritebase3d_alphacutmode) **get_alpha_cut_mode** ( )

The alpha cutting mode to use for the sprite. See [AlphaCutMode](#enum_spritebase3d_alphacutmode) for possible values.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_spritebase3d_property_alpha_hash_scale"></div>

[`float`](class_float.md) **alpha_hash_scale** = ``1.0`` <div id="class_spritebase3d_property_alpha_hash_scale"></div>

- `void` **set_alpha_hash_scale** ( value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_alpha_hash_scale** ( )

The hashing scale for Alpha Hash. Recommended values between `0` and `2`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_spritebase3d_property_alpha_scissor_threshold"></div>

[`float`](class_float.md) **alpha_scissor_threshold** = ``0.5`` <div id="class_spritebase3d_property_alpha_scissor_threshold"></div>

- `void` **set_alpha_scissor_threshold** ( value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_alpha_scissor_threshold** ( )

Threshold at which the alpha scissor will discard values.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_spritebase3d_property_axis"></div>

Vector3.Axis **axis** = ``2`` <div id="class_spritebase3d_property_axis"></div>

- `void` **set_axis** ( value: Vector3.Axis )
- Vector3.Axis **get_axis** ( )

The direction in which the front of the texture faces.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_spritebase3d_property_billboard"></div>

[BillboardMode](#enum_basematerial3d_billboardmode) **billboard** = ``0`` <div id="class_spritebase3d_property_billboard"></div>

- `void` **set_billboard_mode** ( value: [BillboardMode](#enum_basematerial3d_billboardmode) )
- [BillboardMode](#enum_basematerial3d_billboardmode) **get_billboard_mode** ( )

The billboard mode to use for the sprite. See [BillboardMode](#enum_basematerial3d_billboardmode) for possible values.

 **Note:** When billboarding is enabled and the material also casts shadows, billboards will face **the** camera in the scene when rendering shadows. In scenes with multiple cameras, the intended shadow cannot be determined and this will result in undefined behavior. See [*GitHub Pull Request #72638*](https://github.com/godotengine/godot/pull/72638) for details.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_spritebase3d_property_centered"></div>

[`bool`](class_bool.md) **centered** = ``true`` <div id="class_spritebase3d_property_centered"></div>

- `void` **set_centered** ( value: [`bool`](class_bool.md) )
- [`bool`](class_bool.md) **is_centered** ( )

If `true`, texture will be centered.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_spritebase3d_property_double_sided"></div>

[`bool`](class_bool.md) **double_sided** = ``true`` <div id="class_spritebase3d_property_double_sided"></div>

- `void` **set_draw_flag** ( flag: [DrawFlags](#enum_spritebase3d_drawflags), enabled: [`bool`](class_bool.md) )
- [`bool`](class_bool.md) **get_draw_flag** ( flag: [DrawFlags](#enum_spritebase3d_drawflags) ) const[^const]

If `true`, texture can be seen from the back as well, if `false`, it is invisible when looking at it from behind.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_spritebase3d_property_fixed_size"></div>

[`bool`](class_bool.md) **fixed_size** = ``false`` <div id="class_spritebase3d_property_fixed_size"></div>

- `void` **set_draw_flag** ( flag: [DrawFlags](#enum_spritebase3d_drawflags), enabled: [`bool`](class_bool.md) )
- [`bool`](class_bool.md) **get_draw_flag** ( flag: [DrawFlags](#enum_spritebase3d_drawflags) ) const[^const]

If `true`, the label is rendered at the same size regardless of distance.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_spritebase3d_property_flip_h"></div>

[`bool`](class_bool.md) **flip_h** = ``false`` <div id="class_spritebase3d_property_flip_h"></div>

- `void` **set_flip_h** ( value: [`bool`](class_bool.md) )
- [`bool`](class_bool.md) **is_flipped_h** ( )

If `true`, texture is flipped horizontally.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_spritebase3d_property_flip_v"></div>

[`bool`](class_bool.md) **flip_v** = ``false`` <div id="class_spritebase3d_property_flip_v"></div>

- `void` **set_flip_v** ( value: [`bool`](class_bool.md) )
- [`bool`](class_bool.md) **is_flipped_v** ( )

If `true`, texture is flipped vertically.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_spritebase3d_property_modulate"></div>

[`Color`](class_color.md) **modulate** = ``Color(1, 1, 1, 1)`` <div id="class_spritebase3d_property_modulate"></div>

- `void` **set_modulate** ( value: [`Color`](class_color.md) )
- [`Color`](class_color.md) **get_modulate** ( )

A color value used to *multiply* the texture's colors. Can be used for mood-coloring or to simulate the color of ambient light.

 **Note:** Unlike [`CanvasItem.modulate`](#class_canvasitem_property_modulate) for 2D, colors with values above `1.0` (overbright) are not supported.

 **Note:** If a [`GeometryInstance3D.material_override`](#class_geometryinstance3d_property_material_override) is defined on the **SpriteBase3D**, the material override must be configured to take vertex colors into account for albedo. Otherwise, the color defined in [`modulate`](#class_spritebase3d_property_modulate) will be ignored. For a [`BaseMaterial3D`](class_basematerial3d.md), [`BaseMaterial3D.vertex_color_use_as_albedo`](#class_basematerial3d_property_vertex_color_use_as_albedo) must be `true`. For a [`ShaderMaterial`](class_shadermaterial.md), `ALBEDO *= COLOR.rgb;` must be inserted in the shader's `fragment()` function.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_spritebase3d_property_no_depth_test"></div>

[`bool`](class_bool.md) **no_depth_test** = ``false`` <div id="class_spritebase3d_property_no_depth_test"></div>

- `void` **set_draw_flag** ( flag: [DrawFlags](#enum_spritebase3d_drawflags), enabled: [`bool`](class_bool.md) )
- [`bool`](class_bool.md) **get_draw_flag** ( flag: [DrawFlags](#enum_spritebase3d_drawflags) ) const[^const]

If `true`, depth testing is disabled and the object will be drawn in render order.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_spritebase3d_property_offset"></div>

[`Vector2`](class_vector2.md) **offset** = ``Vector2(0, 0)`` <div id="class_spritebase3d_property_offset"></div>

- `void` **set_offset** ( value: [`Vector2`](class_vector2.md) )
- [`Vector2`](class_vector2.md) **get_offset** ( )

The texture's drawing offset.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_spritebase3d_property_pixel_size"></div>

[`float`](class_float.md) **pixel_size** = ``0.01`` <div id="class_spritebase3d_property_pixel_size"></div>

- `void` **set_pixel_size** ( value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_pixel_size** ( )

The size of one pixel's width on the sprite to scale it in 3D.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_spritebase3d_property_render_priority"></div>

[`int`](class_int.md) **render_priority** = ``0`` <div id="class_spritebase3d_property_render_priority"></div>

- `void` **set_render_priority** ( value: [`int`](class_int.md) )
- [`int`](class_int.md) **get_render_priority** ( )

Sets the render priority for the sprite. Higher priority objects will be sorted in front of lower priority objects.

 **Note:** This only applies if [`alpha_cut`](#class_spritebase3d_property_alpha_cut) is set to [`ALPHA_CUT_DISABLED`](#class_spritebase3d_constant_alpha_cut_disabled) (default value).

 **Note:** This only applies to sorting of transparent objects. This will not impact how transparent objects are sorted relative to opaque objects. This is because opaque objects are not sorted, while transparent objects are sorted from back to front (subject to priority).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_spritebase3d_property_shaded"></div>

[`bool`](class_bool.md) **shaded** = ``false`` <div id="class_spritebase3d_property_shaded"></div>

- `void` **set_draw_flag** ( flag: [DrawFlags](#enum_spritebase3d_drawflags), enabled: [`bool`](class_bool.md) )
- [`bool`](class_bool.md) **get_draw_flag** ( flag: [DrawFlags](#enum_spritebase3d_drawflags) ) const[^const]

If `true`, the [`Light3D`](class_light3d.md) in the [`Environment`](class_environment.md) has effects on the sprite.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_spritebase3d_property_texture_filter"></div>

[TextureFilter](#enum_basematerial3d_texturefilter) **texture_filter** = ``3`` <div id="class_spritebase3d_property_texture_filter"></div>

- `void` **set_texture_filter** ( value: [TextureFilter](#enum_basematerial3d_texturefilter) )
- [TextureFilter](#enum_basematerial3d_texturefilter) **get_texture_filter** ( )

Filter flags for the texture. See [TextureFilter](#enum_basematerial3d_texturefilter) for options.

 **Note:** Linear filtering may cause artifacts around the edges, which are especially noticeable on opaque textures. To prevent this, use textures with transparent or identical colors around the edges.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_spritebase3d_property_transparent"></div>

[`bool`](class_bool.md) **transparent** = ``true`` <div id="class_spritebase3d_property_transparent"></div>

- `void` **set_draw_flag** ( flag: [DrawFlags](#enum_spritebase3d_drawflags), enabled: [`bool`](class_bool.md) )
- [`bool`](class_bool.md) **get_draw_flag** ( flag: [DrawFlags](#enum_spritebase3d_drawflags) ) const[^const]

If `true`, the texture's transparency and the opacity are used to make those parts of the sprite invisible.

<!-- rst-class:: classref-section-separator -->

---

## 方法说明

<div id="_class_spritebase3d_method_generate_triangle_mesh"></div>

[`TriangleMesh`](class_trianglemesh.md) **generate_triangle_mesh** ( ) const[^const]<div id="class_spritebase3d_method_generate_triangle_mesh"></div>

Returns a [`TriangleMesh`](class_trianglemesh.md) with the sprite's vertices following its current configuration (such as its [`axis`](#class_spritebase3d_property_axis) and [`pixel_size`](#class_spritebase3d_property_pixel_size)).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_spritebase3d_method_get_draw_flag"></div>

[`bool`](class_bool.md) **get_draw_flag** ( flag: [DrawFlags](#enum_spritebase3d_drawflags) ) const[^const]<div id="class_spritebase3d_method_get_draw_flag"></div>

Returns the value of the specified flag.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_spritebase3d_method_get_item_rect"></div>

[`Rect2`](class_rect2.md) **get_item_rect** ( ) const[^const]<div id="class_spritebase3d_method_get_item_rect"></div>

Returns the rectangle representing this sprite.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_spritebase3d_method_set_draw_flag"></div>

`void` **set_draw_flag** ( flag: [DrawFlags](#enum_spritebase3d_drawflags), enabled: [`bool`](class_bool.md) )<div id="class_spritebase3d_method_set_draw_flag"></div>

If `true`, the specified flag will be enabled. See [DrawFlags](#enum_spritebase3d_drawflags) for a list of flags.

[^virtual]: 本方法通常需要用户覆盖才能生效。
[^const]: 本方法无副作用，不会修改该实例的任何成员变量。
[^vararg]: 本方法除了能接受在此处描述的参数外，还能够继续接受任意数量的参数。
[^constructor]: 本方法用于构造某个类型。
[^static]: 调用本方法无需实例，可直接使用类名进行调用。
[^operator]: 本方法描述的是使用本类型作为左操作数的有效运算符。
[^bitfield]: 这个值是由下列位标志构成位掩码的整数。
[^void]: 无返回值。
