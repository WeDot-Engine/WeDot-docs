<!-- ⚠ 请勿编辑本文件 ⚠ -->
<!-- 本文档使用脚本从 WeDot 引擎源码仓库生成。 -->
<!-- 生成脚本：https://github.com/WeDot-Engine/WeDot/tree/4.3/doc/tools/make_md.py； -->
<!-- 原文件：https://github.com/WeDot-Engine/WeDot/tree/4.3/modules/gdscript/doc_classes/@GDScript.xml。 -->

<div id="_class_@gdscript"></div>

# @GDScript

Built-in GDScript constants, functions, and annotations.

## 描述

A list of GDScript-specific utility functions and annotations accessible from any script.

For the list of the global functions and constants see [`@GlobalScope`](class_@globalscope.md).

## 方法

| [`Color`](class_color.md)           | [`Color8`](#class_@gdscript_method_color8) ( r8: [`int`](class_int.md), g8: [`int`](class_int.md), b8: [`int`](class_int.md), a8: [`int`](class_int.md) = 255 ) |
| `void`                              | [`assert`](#class_@gdscript_method_assert) ( condition: [`bool`](class_bool.md), message: [`String`](class_string.md) = "" )                                    |
| [`String`](class_string.md)         | [`char`](#class_@gdscript_method_char) ( char: [`int`](class_int.md) )                                                                                          |
| [`Variant`](class_variant.md)       | [`convert`](#class_@gdscript_method_convert) ( what: [`Variant`](class_variant.md), type: [`int`](class_int.md) )                                               |
| [`Object`](class_object.md)         | [`dict_to_inst`](#class_@gdscript_method_dict_to_inst) ( dictionary: [`Dictionary`](class_dictionary.md) )                                                      |
| [`Array`](class_array.md)           | [`get_stack`](#class_@gdscript_method_get_stack) ( )                                                                                                            |
| [`Dictionary`](class_dictionary.md) | [`inst_to_dict`](#class_@gdscript_method_inst_to_dict) ( instance: [`Object`](class_object.md) )                                                                |
| [`bool`](class_bool.md)             | [`is_instance_of`](#class_@gdscript_method_is_instance_of) ( value: [`Variant`](class_variant.md), type: [`Variant`](class_variant.md) )                        |
| [`int`](class_int.md)               | [`len`](#class_@gdscript_method_len) ( var: [`Variant`](class_variant.md) )                                                                                     |
| [`Resource`](class_resource.md)     | [`load`](#class_@gdscript_method_load) ( path: [`String`](class_string.md) )                                                                                    |
| [`Resource`](class_resource.md)     | [`preload`](#class_@gdscript_method_preload) ( path: [`String`](class_string.md) )                                                                              |
| `void`                              | [`print_debug`](#class_@gdscript_method_print_debug) ( ... ) vararg[^vararg]                                                                                    |
| `void`                              | [`print_stack`](#class_@gdscript_method_print_stack) ( )                                                                                                        |
| [`Array`](class_array.md)           | [`range`](#class_@gdscript_method_range) ( ... ) vararg[^vararg]                                                                                                |
| [`bool`](class_bool.md)             | [`type_exists`](#class_@gdscript_method_type_exists) ( type: [`StringName`](class_stringname.md) )                                                              |

<!-- rst-class:: classref-section-separator -->

---

## 常量

<div id="_class_@gdscript_constant_pi"></div>

**PI** = ``3.14159265358979`` <div id="class_@gdscript_constant_pi"></div>

Constant that represents how many times the diameter of a circle fits around its perimeter. This is equivalent to `TAU / 2`, or 180 degrees in rotations.

<div id="_class_@gdscript_constant_tau"></div>

**TAU** = ``6.28318530717959`` <div id="class_@gdscript_constant_tau"></div>

The circle constant, the circumference of the unit circle in radians. This is equivalent to `PI * 2`, or 360 degrees in rotations.

<div id="_class_@gdscript_constant_inf"></div>

**INF** = ``inf`` <div id="class_@gdscript_constant_inf"></div>

Positive floating-point infinity. This is the result of floating-point division when the divisor is `0.0`. For negative infinity, use `-INF`. Dividing by `-0.0` will result in negative infinity if the numerator is positive, so dividing by `0.0` is not the same as dividing by `-0.0` (despite `0.0 == -0.0` returning `true`).

 **Warning:** Numeric infinity is only a concept with floating-point numbers, and has no equivalent for integers. Dividing an integer number by `0` will not result in [`INF`](#class_@gdscript_constant_inf) and will result in a run-time error instead.

<div id="_class_@gdscript_constant_nan"></div>

**NAN** = ``nan`` <div id="class_@gdscript_constant_nan"></div>

"Not a Number", an invalid floating-point value. [`NAN`](#class_@gdscript_constant_nan) has special properties, including that `!=` always returns `true`, while other comparison operators always return `false`. This is true even when comparing with itself (`NAN == NAN` returns `false` and `NAN != NAN` returns `true`). It is returned by some invalid operations, such as dividing floating-point `0.0` by `0.0`.

 **Warning:** "Not a Number" is only a concept with floating-point numbers, and has no equivalent for integers. Dividing an integer `0` by `0` will not result in [`NAN`](#class_@gdscript_constant_nan) and will result in a run-time error instead.

<!-- rst-class:: classref-section-separator -->

---

## 注解

<div id="_class_@gdscript_annotation_@export"></div>

**@export** ( )<div id="class_@gdscript_annotation_@export"></div>

Mark the following property as exported (editable in the Inspector dock and saved to disk). To control the type of the exported property, use the type hint notation.

```

    extends Node
    
    enum Direction {LEFT, RIGHT, UP, DOWN}
    
    # Built-in types.
    @export var string = ""
    @export var int_number = 5
    @export var float_number: float = 5
    
    # Enums.
    @export var type: Variant.Type
    @export var format: Image.Format
    @export var direction: Direction
    
    # Resources.
    @export var image: Image
    @export var custom_resource: CustomResource
    
    # Nodes.
    @export var node: Node
    @export var custom_node: CustomNode
    
    # Typed arrays.
    @export var int_array: Array[int]
    @export var direction_array: Array[Direction]
    @export var image_array: Array[Image]
    @export var node_array: Array[Node]
```

 **Note:** Custom resources and nodes should be registered as global classes using `class_name`, since the Inspector currently only supports global classes. Otherwise, a less specific type will be exported instead.

 **Note:** Node export is only supported in [`Node`](class_node.md)-derived classes and has a number of other limitations.



<!-- rst-class:: classref-item-separator -->

---

<div id="_class_@gdscript_annotation_@export_category"></div>

**@export_category** ( name: [`String`](class_string.md) )<div id="class_@gdscript_annotation_@export_category"></div>

Define a new category for the following exported properties. This helps to organize properties in the Inspector dock.

See also [`@GlobalScope.PROPERTY_USAGE_CATEGORY`](#class_@globalscope_constant_property_usage_category).

```

    @export_category("Statistics")
    @export var hp = 30
    @export var speed = 1.25
```

 **Note:** Categories in the Inspector dock's list usually divide properties coming from different classes (Node, Node2D, Sprite, etc.). For better clarity, it's recommended to use [`@export_group`](#class_@gdscript_annotation_@export_group) and [`@export_subgroup`](#class_@gdscript_annotation_@export_subgroup), instead.



<!-- rst-class:: classref-item-separator -->

---

<div id="_class_@gdscript_annotation_@export_color_no_alpha"></div>

**@export_color_no_alpha** ( )<div id="class_@gdscript_annotation_@export_color_no_alpha"></div>

Export a [`Color`](class_color.md), [`Array`](class_array.md) [[`Color`](class_color.md) ], or [`PackedColorArray`](class_packedcolorarray.md) property without allowing its transparency ([`Color.a`](#class_color_property_a)) to be edited.

See also [`@GlobalScope.PROPERTY_HINT_COLOR_NO_ALPHA`](#class_@globalscope_constant_property_hint_color_no_alpha).

```

    @export_color_no_alpha var dye_color: Color
    @export_color_no_alpha var dye_colors: Array[Color]
```



<!-- rst-class:: classref-item-separator -->

---

<div id="_class_@gdscript_annotation_@export_custom"></div>

**@export_custom** ( hint: [PropertyHint](#enum_@globalscope_propertyhint), hint_string: [`String`](class_string.md), usage: [PropertyUsageFlags](#enum_@globalscope_propertyusageflags) = 6 )<div id="class_@gdscript_annotation_@export_custom"></div>

Allows you to set a custom hint, hint string, and usage flags for the exported property. Note that there's no validation done in GDScript, it will just pass the parameters to the editor.

```

    @export_custom(PROPERTY_HINT_NONE, "suffix:m") var suffix: Vector3
```

 **Note:** Regardless of the `usage` value, the [`@GlobalScope.PROPERTY_USAGE_SCRIPT_VARIABLE`](#class_@globalscope_constant_property_usage_script_variable) flag is always added, as with any explicitly declared script variable.



<!-- rst-class:: classref-item-separator -->

---

<div id="_class_@gdscript_annotation_@export_dir"></div>

**@export_dir** ( )<div id="class_@gdscript_annotation_@export_dir"></div>

Export a [`String`](class_string.md), [`Array`](class_array.md) [[`String`](class_string.md) ], or [`PackedStringArray`](class_packedstringarray.md) property as a path to a directory. The path will be limited to the project folder and its subfolders. See [`@export_global_dir`](#class_@gdscript_annotation_@export_global_dir) to allow picking from the entire filesystem.

See also [`@GlobalScope.PROPERTY_HINT_DIR`](#class_@globalscope_constant_property_hint_dir).

```

    @export_dir var sprite_folder_path: String
    @export_dir var sprite_folder_paths: Array[String]
```



<!-- rst-class:: classref-item-separator -->

---

<div id="_class_@gdscript_annotation_@export_enum"></div>

**@export_enum** ( names: [`String`](class_string.md), ... ) vararg[^vararg]<div id="class_@gdscript_annotation_@export_enum"></div>

Export an [`int`](class_int.md), [`String`](class_string.md), [`Array`](class_array.md) [[`int`](class_int.md) ], [`Array`](class_array.md) [[`String`](class_string.md) ], [`PackedByteArray`](class_packedbytearray.md), [`PackedInt32Array`](class_packedint32array.md), [`PackedInt64Array`](class_packedint64array.md), or [`PackedStringArray`](class_packedstringarray.md) property as an enumerated list of options (or an array of options). If the property is an [`int`](class_int.md), then the index of the value is stored, in the same order the values are provided. You can add explicit values using a colon. If the property is a [`String`](class_string.md), then the value is stored.

See also [`@GlobalScope.PROPERTY_HINT_ENUM`](#class_@globalscope_constant_property_hint_enum).

```

    @export_enum("Warrior", "Magician", "Thief") var character_class: int
    @export_enum("Slow:30", "Average:60", "Very Fast:200") var character_speed: int
    @export_enum("Rebecca", "Mary", "Leah") var character_name: String
    
    @export_enum("Sword", "Spear", "Mace") var character_items: Array[int]
    @export_enum("double_jump", "climb", "dash") var character_skills: Array[String]
```

If you want to set an initial value, you must specify it explicitly:

```

    @export_enum("Rebecca", "Mary", "Leah") var character_name: String = "Rebecca"
```

If you want to use named GDScript enums, then use [`@export`](#class_@gdscript_annotation_@export) instead:

```

    enum CharacterName {REBECCA, MARY, LEAH}
    @export var character_name: CharacterName
    
    enum CharacterItem {SWORD, SPEAR, MACE}
    @export var character_items: Array[CharacterItem]
```







<!-- rst-class:: classref-item-separator -->

---

<div id="_class_@gdscript_annotation_@export_exp_easing"></div>

**@export_exp_easing** ( hints: [`String`](class_string.md) = "", ... ) vararg[^vararg]<div id="class_@gdscript_annotation_@export_exp_easing"></div>

Export a floating-point property with an easing editor widget. Additional hints can be provided to adjust the behavior of the widget. `"attenuation"` flips the curve, which makes it more intuitive for editing attenuation properties. `"positive_only"` limits values to only be greater than or equal to zero.

See also [`@GlobalScope.PROPERTY_HINT_EXP_EASING`](#class_@globalscope_constant_property_hint_exp_easing).

```

    @export_exp_easing var transition_speed
    @export_exp_easing("attenuation") var fading_attenuation
    @export_exp_easing("positive_only") var effect_power
    @export_exp_easing var speeds: Array[float]
```



<!-- rst-class:: classref-item-separator -->

---

<div id="_class_@gdscript_annotation_@export_file"></div>

**@export_file** ( filter: [`String`](class_string.md) = "", ... ) vararg[^vararg]<div id="class_@gdscript_annotation_@export_file"></div>

Export a [`String`](class_string.md), [`Array`](class_array.md) [[`String`](class_string.md) ], or [`PackedStringArray`](class_packedstringarray.md) property as a path to a file. The path will be limited to the project folder and its subfolders. See [`@export_global_file`](#class_@gdscript_annotation_@export_global_file) to allow picking from the entire filesystem.

If `filter` is provided, only matching files will be available for picking.

See also [`@GlobalScope.PROPERTY_HINT_FILE`](#class_@globalscope_constant_property_hint_file).

```

    @export_file var sound_effect_path: String
    @export_file("*.txt") var notes_path: String
    @export_file var level_paths: Array[String]
```



<!-- rst-class:: classref-item-separator -->

---

<div id="_class_@gdscript_annotation_@export_flags"></div>

**@export_flags** ( names: [`String`](class_string.md), ... ) vararg[^vararg]<div id="class_@gdscript_annotation_@export_flags"></div>

Export an integer property as a bit flag field. This allows to store several "checked" or `true` values with one property, and comfortably select them from the Inspector dock.

See also [`@GlobalScope.PROPERTY_HINT_FLAGS`](#class_@globalscope_constant_property_hint_flags).

```

    @export_flags("Fire", "Water", "Earth", "Wind") var spell_elements = 0
```

You can add explicit values using a colon:

```

    @export_flags("Self:4", "Allies:8", "Foes:16") var spell_targets = 0
```

You can also combine several flags:

```

    @export_flags("Self:4", "Allies:8", "Self and Allies:12", "Foes:16")
    var spell_targets = 0
```

 **Note:** A flag value must be at least `1` and at most `2 ** 32 - 1`.

 **Note:** Unlike [`@export_enum`](#class_@gdscript_annotation_@export_enum), the previous explicit value is not taken into account. In the following example, A is 16, B is 2, C is 4.

```

    @export_flags("A:16", "B", "C") var x
```

You can also use the annotation on [`Array`](class_array.md) [[`int`](class_int.md) ], [`PackedByteArray`](class_packedbytearray.md), [`PackedInt32Array`](class_packedint32array.md), and [`PackedInt64Array`](class_packedint64array.md) 

```

    @export_flags("Fire", "Water", "Earth", "Wind") var phase_elements: Array[int]
```











<!-- rst-class:: classref-item-separator -->

---

<div id="_class_@gdscript_annotation_@export_flags_2d_navigation"></div>

**@export_flags_2d_navigation** ( )<div id="class_@gdscript_annotation_@export_flags_2d_navigation"></div>

Export an integer property as a bit flag field for 2D navigation layers. The widget in the Inspector dock will use the layer names defined in [`ProjectSettings.layer_names/2d_navigation/layer_1`](#class_projectsettings_property_layer_names/2d_navigation/layer_1).

See also [`@GlobalScope.PROPERTY_HINT_LAYERS_2D_NAVIGATION`](#class_@globalscope_constant_property_hint_layers_2d_navigation).

```

    @export_flags_2d_navigation var navigation_layers: int
    @export_flags_2d_navigation var navigation_layers_array: Array[int]
```



<!-- rst-class:: classref-item-separator -->

---

<div id="_class_@gdscript_annotation_@export_flags_2d_physics"></div>

**@export_flags_2d_physics** ( )<div id="class_@gdscript_annotation_@export_flags_2d_physics"></div>

Export an integer property as a bit flag field for 2D physics layers. The widget in the Inspector dock will use the layer names defined in [`ProjectSettings.layer_names/2d_physics/layer_1`](#class_projectsettings_property_layer_names/2d_physics/layer_1).

See also [`@GlobalScope.PROPERTY_HINT_LAYERS_2D_PHYSICS`](#class_@globalscope_constant_property_hint_layers_2d_physics).

```

    @export_flags_2d_physics var physics_layers: int
    @export_flags_2d_physics var physics_layers_array: Array[int]
```



<!-- rst-class:: classref-item-separator -->

---

<div id="_class_@gdscript_annotation_@export_flags_2d_render"></div>

**@export_flags_2d_render** ( )<div id="class_@gdscript_annotation_@export_flags_2d_render"></div>

Export an integer property as a bit flag field for 2D render layers. The widget in the Inspector dock will use the layer names defined in [`ProjectSettings.layer_names/2d_render/layer_1`](#class_projectsettings_property_layer_names/2d_render/layer_1).

See also [`@GlobalScope.PROPERTY_HINT_LAYERS_2D_RENDER`](#class_@globalscope_constant_property_hint_layers_2d_render).

```

    @export_flags_2d_render var render_layers: int
    @export_flags_2d_render var render_layers_array: Array[int]
```



<!-- rst-class:: classref-item-separator -->

---

<div id="_class_@gdscript_annotation_@export_flags_3d_navigation"></div>

**@export_flags_3d_navigation** ( )<div id="class_@gdscript_annotation_@export_flags_3d_navigation"></div>

Export an integer property as a bit flag field for 3D navigation layers. The widget in the Inspector dock will use the layer names defined in [`ProjectSettings.layer_names/3d_navigation/layer_1`](#class_projectsettings_property_layer_names/3d_navigation/layer_1).

See also [`@GlobalScope.PROPERTY_HINT_LAYERS_3D_NAVIGATION`](#class_@globalscope_constant_property_hint_layers_3d_navigation).

```

    @export_flags_3d_navigation var navigation_layers: int
    @export_flags_3d_navigation var navigation_layers_array: Array[int]
```



<!-- rst-class:: classref-item-separator -->

---

<div id="_class_@gdscript_annotation_@export_flags_3d_physics"></div>

**@export_flags_3d_physics** ( )<div id="class_@gdscript_annotation_@export_flags_3d_physics"></div>

Export an integer property as a bit flag field for 3D physics layers. The widget in the Inspector dock will use the layer names defined in [`ProjectSettings.layer_names/3d_physics/layer_1`](#class_projectsettings_property_layer_names/3d_physics/layer_1).

See also [`@GlobalScope.PROPERTY_HINT_LAYERS_3D_PHYSICS`](#class_@globalscope_constant_property_hint_layers_3d_physics).

```

    @export_flags_3d_physics var physics_layers: int
    @export_flags_3d_physics var physics_layers_array: Array[int]
```



<!-- rst-class:: classref-item-separator -->

---

<div id="_class_@gdscript_annotation_@export_flags_3d_render"></div>

**@export_flags_3d_render** ( )<div id="class_@gdscript_annotation_@export_flags_3d_render"></div>

Export an integer property as a bit flag field for 3D render layers. The widget in the Inspector dock will use the layer names defined in [`ProjectSettings.layer_names/3d_render/layer_1`](#class_projectsettings_property_layer_names/3d_render/layer_1).

See also [`@GlobalScope.PROPERTY_HINT_LAYERS_3D_RENDER`](#class_@globalscope_constant_property_hint_layers_3d_render).

```

    @export_flags_3d_render var render_layers: int
    @export_flags_3d_render var render_layers_array: Array[int]
```



<!-- rst-class:: classref-item-separator -->

---

<div id="_class_@gdscript_annotation_@export_flags_avoidance"></div>

**@export_flags_avoidance** ( )<div id="class_@gdscript_annotation_@export_flags_avoidance"></div>

Export an integer property as a bit flag field for navigation avoidance layers. The widget in the Inspector dock will use the layer names defined in [`ProjectSettings.layer_names/avoidance/layer_1`](#class_projectsettings_property_layer_names/avoidance/layer_1).

See also [`@GlobalScope.PROPERTY_HINT_LAYERS_AVOIDANCE`](#class_@globalscope_constant_property_hint_layers_avoidance).

```

    @export_flags_avoidance var avoidance_layers: int
    @export_flags_avoidance var avoidance_layers_array: Array[int]
```



<!-- rst-class:: classref-item-separator -->

---

<div id="_class_@gdscript_annotation_@export_global_dir"></div>

**@export_global_dir** ( )<div id="class_@gdscript_annotation_@export_global_dir"></div>

Export a [`String`](class_string.md), [`Array`](class_array.md) [[`String`](class_string.md) ], or [`PackedStringArray`](class_packedstringarray.md) property as an absolute path to a directory. The path can be picked from the entire filesystem. See [`@export_dir`](#class_@gdscript_annotation_@export_dir) to limit it to the project folder and its subfolders.

See also [`@GlobalScope.PROPERTY_HINT_GLOBAL_DIR`](#class_@globalscope_constant_property_hint_global_dir).

```

    @export_global_dir var sprite_folder_path: String
    @export_global_dir var sprite_folder_paths: Array[String]
```



<!-- rst-class:: classref-item-separator -->

---

<div id="_class_@gdscript_annotation_@export_global_file"></div>

**@export_global_file** ( filter: [`String`](class_string.md) = "", ... ) vararg[^vararg]<div id="class_@gdscript_annotation_@export_global_file"></div>

Export a [`String`](class_string.md), [`Array`](class_array.md) [[`String`](class_string.md) ], or [`PackedStringArray`](class_packedstringarray.md) property as an absolute path to a file. The path can be picked from the entire filesystem. See [`@export_file`](#class_@gdscript_annotation_@export_file) to limit it to the project folder and its subfolders.

If `filter` is provided, only matching files will be available for picking.

See also [`@GlobalScope.PROPERTY_HINT_GLOBAL_FILE`](#class_@globalscope_constant_property_hint_global_file).

```

    @export_global_file var sound_effect_path: String
    @export_global_file("*.txt") var notes_path: String
    @export_global_file var multiple_paths: Array[String]
```



<!-- rst-class:: classref-item-separator -->

---

<div id="_class_@gdscript_annotation_@export_group"></div>

**@export_group** ( name: [`String`](class_string.md), prefix: [`String`](class_string.md) = "" )<div id="class_@gdscript_annotation_@export_group"></div>

Define a new group for the following exported properties. This helps to organize properties in the Inspector dock. Groups can be added with an optional `prefix`, which would make group to only consider properties that have this prefix. The grouping will break on the first property that doesn't have a prefix. The prefix is also removed from the property's name in the Inspector dock.

If no `prefix` is provided, then every following property will be added to the group. The group ends when then next group or category is defined. You can also force end a group by using this annotation with empty strings for parameters, `@export_group("", "")`.

Groups cannot be nested, use [`@export_subgroup`](#class_@gdscript_annotation_@export_subgroup) to add subgroups within groups.

See also [`@GlobalScope.PROPERTY_USAGE_GROUP`](#class_@globalscope_constant_property_usage_group).

```

    @export_group("Racer Properties")
    @export var nickname = "Nick"
    @export var age = 26
    
    @export_group("Car Properties", "car_")
    @export var car_label = "Speedy"
    @export var car_number = 3
    
    @export_group("", "")
    @export var ungrouped_number = 3
```



<!-- rst-class:: classref-item-separator -->

---

<div id="_class_@gdscript_annotation_@export_multiline"></div>

**@export_multiline** ( )<div id="class_@gdscript_annotation_@export_multiline"></div>

Export a [`String`](class_string.md), [`Array`](class_array.md) [[`String`](class_string.md) ], [`PackedStringArray`](class_packedstringarray.md), [`Dictionary`](class_dictionary.md) or [`Array`](class_array.md) [[`Dictionary`](class_dictionary.md) ] property with a large [`TextEdit`](class_textedit.md) widget instead of a [`LineEdit`](class_lineedit.md). This adds support for multiline content and makes it easier to edit large amount of text stored in the property.

See also [`@GlobalScope.PROPERTY_HINT_MULTILINE_TEXT`](#class_@globalscope_constant_property_hint_multiline_text).

```

    @export_multiline var character_biography
    @export_multiline var npc_dialogs: Array[String]
```



<!-- rst-class:: classref-item-separator -->

---

<div id="_class_@gdscript_annotation_@export_node_path"></div>

**@export_node_path** ( type: [`String`](class_string.md) = "", ... ) vararg[^vararg]<div id="class_@gdscript_annotation_@export_node_path"></div>

Export a [`NodePath`](class_nodepath.md) or [`Array`](class_array.md) [[`NodePath`](class_nodepath.md) ] property with a filter for allowed node types.

See also [`@GlobalScope.PROPERTY_HINT_NODE_PATH_VALID_TYPES`](#class_@globalscope_constant_property_hint_node_path_valid_types).

```

    @export_node_path("Button", "TouchScreenButton") var some_button
    @export_node_path("Button", "TouchScreenButton") var many_buttons: Array[NodePath]
```

 **Note:** The type must be a native class or a globally registered script (using the `class_name` keyword) that inherits [`Node`](class_node.md).



<!-- rst-class:: classref-item-separator -->

---

<div id="_class_@gdscript_annotation_@export_placeholder"></div>

**@export_placeholder** ( placeholder: [`String`](class_string.md) )<div id="class_@gdscript_annotation_@export_placeholder"></div>

Export a [`String`](class_string.md), [`Array`](class_array.md) [[`String`](class_string.md) ], or [`PackedStringArray`](class_packedstringarray.md) property with a placeholder text displayed in the editor widget when no value is present.

See also [`@GlobalScope.PROPERTY_HINT_PLACEHOLDER_TEXT`](#class_@globalscope_constant_property_hint_placeholder_text).

```

    @export_placeholder("Name in lowercase") var character_id: String
    @export_placeholder("Name in lowercase") var friend_ids: Array[String]
```



<!-- rst-class:: classref-item-separator -->

---

<div id="_class_@gdscript_annotation_@export_range"></div>

**@export_range** ( min: [`float`](class_float.md), max: [`float`](class_float.md), step: [`float`](class_float.md) = 1.0, extra_hints: [`String`](class_string.md) = "", ... ) vararg[^vararg]<div id="class_@gdscript_annotation_@export_range"></div>

Export an [`int`](class_int.md), [`float`](class_float.md), [`Array`](class_array.md) [[`int`](class_int.md) ], [`Array`](class_array.md) [[`float`](class_float.md) ], [`PackedByteArray`](class_packedbytearray.md), [`PackedInt32Array`](class_packedint32array.md), [`PackedInt64Array`](class_packedint64array.md), [`PackedFloat32Array`](class_packedfloat32array.md), or [`PackedFloat64Array`](class_packedfloat64array.md) property as a range value. The range must be defined by `min` and `max`, as well as an optional `step` and a variety of extra hints. The `step` defaults to `1` for integer properties. For floating-point numbers this value depends on your [`EditorSettings.interface/inspector/default_float_step`](#class_editorsettings_property_interface/inspector/default_float_step) setting.

If hints `"or_greater"` and `"or_less"` are provided, the editor widget will not cap the value at range boundaries. The `"exp"` hint will make the edited values on range to change exponentially. The `"hide_slider"` hint will hide the slider element of the editor widget.

Hints also allow to indicate the units for the edited value. Using `"radians_as_degrees"` you can specify that the actual value is in radians, but should be displayed in degrees in the Inspector dock (the range values are also in degrees). `"degrees"` allows to add a degree sign as a unit suffix (the value is unchanged). Finally, a custom suffix can be provided using `"suffix:unit"`, where "unit" can be any string.

See also [`@GlobalScope.PROPERTY_HINT_RANGE`](#class_@globalscope_constant_property_hint_range).

```

    @export_range(0, 20) var number
    @export_range(-10, 20) var number
    @export_range(-10, 20, 0.2) var number: float
    @export_range(0, 20) var numbers: Array[float]
    
    @export_range(0, 100, 1, "or_greater") var power_percent
    @export_range(0, 100, 1, "or_greater", "or_less") var health_delta
    
    @export_range(-180, 180, 0.001, "radians_as_degrees") var angle_radians
    @export_range(0, 360, 1, "degrees") var angle_degrees
    @export_range(-8, 8, 2, "suffix:px") var target_offset
```



<!-- rst-class:: classref-item-separator -->

---

<div id="_class_@gdscript_annotation_@export_storage"></div>

**@export_storage** ( )<div id="class_@gdscript_annotation_@export_storage"></div>

Export a property with [`@GlobalScope.PROPERTY_USAGE_STORAGE`](#class_@globalscope_constant_property_usage_storage) flag. The property is not displayed in the editor, but it is serialized and stored in the scene or resource file. This can be useful for [`@tool`](#class_@gdscript_annotation_@tool) scripts. Also the property value is copied when [`Resource.duplicate`](#class_resource_method_duplicate) or [`Node.duplicate`](#class_node_method_duplicate) is called, unlike non-exported variables.

```

    var a # Not stored in the file, not displayed in the editor.
    @export_storage var b # Stored in the file, not displayed in the editor.
    @export var c: int # Stored in the file, displayed in the editor.
```



<!-- rst-class:: classref-item-separator -->

---

<div id="_class_@gdscript_annotation_@export_subgroup"></div>

**@export_subgroup** ( name: [`String`](class_string.md), prefix: [`String`](class_string.md) = "" )<div id="class_@gdscript_annotation_@export_subgroup"></div>

Define a new subgroup for the following exported properties. This helps to organize properties in the Inspector dock. Subgroups work exactly like groups, except they need a parent group to exist. See [`@export_group`](#class_@gdscript_annotation_@export_group).

See also [`@GlobalScope.PROPERTY_USAGE_SUBGROUP`](#class_@globalscope_constant_property_usage_subgroup).

```

    @export_group("Racer Properties")
    @export var nickname = "Nick"
    @export var age = 26
    
    @export_subgroup("Car Properties", "car_")
    @export var car_label = "Speedy"
    @export var car_number = 3
```

 **Note:** Subgroups cannot be nested, they only provide one extra level of depth. Just like the next group ends the previous group, so do the subsequent subgroups.



<!-- rst-class:: classref-item-separator -->

---

<div id="_class_@gdscript_annotation_@icon"></div>

**@icon** ( icon_path: [`String`](class_string.md) )<div id="class_@gdscript_annotation_@icon"></div>

Add a custom icon to the current script. The icon specified at `icon_path` is displayed in the Scene dock for every node of that class, as well as in various editor dialogs.

```

    @icon("res://path/to/class/icon.svg")
```

 **Note:** Only the script can have a custom icon. Inner classes are not supported.

 **Note:** As annotations describe their subject, the [`@icon`](#class_@gdscript_annotation_@icon) annotation must be placed before the class definition and inheritance.

 **Note:** Unlike other annotations, the argument of the [`@icon`](#class_@gdscript_annotation_@icon) annotation must be a string literal (constant expressions are not supported).



<!-- rst-class:: classref-item-separator -->

---

<div id="_class_@gdscript_annotation_@onready"></div>

**@onready** ( )<div id="class_@gdscript_annotation_@onready"></div>

Mark the following property as assigned when the [`Node`](class_node.md) is ready. Values for these properties are not assigned immediately when the node is initialized ([`Object._init`](#class_object_private_method__init)), and instead are computed and stored right before [`Node._ready`](#class_node_private_method__ready).

```

    @onready var character_name: Label = $Label
```



<!-- rst-class:: classref-item-separator -->

---

<div id="_class_@gdscript_annotation_@rpc"></div>

**@rpc** ( mode: [`String`](class_string.md) = "authority", sync: [`String`](class_string.md) = "call_remote", transfer_mode: [`String`](class_string.md) = "unreliable", transfer_channel: [`int`](class_int.md) = 0 )<div id="class_@gdscript_annotation_@rpc"></div>

Mark the following method for remote procedure calls. See [*High-level multiplayer*](../tutorials/networking/high_level_multiplayer).

If `mode` is set as `"any_peer"`, allows any peer to call this RPC function. Otherwise, only the authority peer is allowed to call it and `mode` should be kept as `"authority"`. When configuring functions as RPCs with [`Node.rpc_config`](#class_node_method_rpc_config), each of these modes respectively corresponds to the [`MultiplayerAPI.RPC_MODE_AUTHORITY`](#class_multiplayerapi_constant_rpc_mode_authority) and [`MultiplayerAPI.RPC_MODE_ANY_PEER`](#class_multiplayerapi_constant_rpc_mode_any_peer) RPC modes. See [RPCMode](#enum_multiplayerapi_rpcmode). If a peer that is not the authority tries to call a function that is only allowed for the authority, the function will not be executed. If the error can be detected locally (when the RPC configuration is consistent between the local and the remote peer), an error message will be displayed on the sender peer. Otherwise, the remote peer will detect the error and print an error there.

If `sync` is set as `"call_remote"`, the function will only be executed on the remote peer, but not locally. To run this function locally too, set `sync` to `"call_local"`. When configuring functions as RPCs with [`Node.rpc_config`](#class_node_method_rpc_config), this is equivalent to setting `call_local` to `true`.

The `transfer_mode` accepted values are `"unreliable"`, `"unreliable_ordered"`, or `"reliable"`. It sets the transfer mode of the underlying [`MultiplayerPeer`](class_multiplayerpeer.md). See [`MultiplayerPeer.transfer_mode`](#class_multiplayerpeer_property_transfer_mode).

The `transfer_channel` defines the channel of the underlying [`MultiplayerPeer`](class_multiplayerpeer.md). See [`MultiplayerPeer.transfer_channel`](#class_multiplayerpeer_property_transfer_channel).

The order of `mode`, `sync` and `transfer_mode` does not matter, but values related to the same argument must not be used more than once. `transfer_channel` always has to be the 4th argument (you must specify 3 preceding arguments).

```

    @rpc
    func fn(): pass
    
    @rpc("any_peer", "unreliable_ordered")
    func fn_update_pos(): pass
    
    @rpc("authority", "call_remote", "unreliable", 0) # Equivalent to @rpc
    func fn_default(): pass
```



<!-- rst-class:: classref-item-separator -->

---

<div id="_class_@gdscript_annotation_@static_unload"></div>

**@static_unload** ( )<div id="class_@gdscript_annotation_@static_unload"></div>

Make a script with static variables to not persist after all references are lost. If the script is loaded again the static variables will revert to their default values.

 **Note:** As annotations describe their subject, the [`@static_unload`](#class_@gdscript_annotation_@static_unload) annotation must be placed before the class definition and inheritance.

 **Warning:** Currently, due to a bug, scripts are never freed, even if [`@static_unload`](#class_@gdscript_annotation_@static_unload) annotation is used.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_@gdscript_annotation_@tool"></div>

**@tool** ( )<div id="class_@gdscript_annotation_@tool"></div>

Mark the current script as a tool script, allowing it to be loaded and executed by the editor. See [*Running code in the editor*](../tutorials/plugins/running_code_in_the_editor).

```

    @tool
    extends Node
```

 **Note:** As annotations describe their subject, the [`@tool`](#class_@gdscript_annotation_@tool) annotation must be placed before the class definition and inheritance.



<!-- rst-class:: classref-item-separator -->

---

<div id="_class_@gdscript_annotation_@warning_ignore"></div>

**@warning_ignore** ( warning: [`String`](class_string.md), ... ) vararg[^vararg]<div id="class_@gdscript_annotation_@warning_ignore"></div>

Mark the following statement to ignore the specified `warning`. See [*GDScript warning system*](../tutorials/scripting/gdscript/warning_system).

```

    func test():
        print("hello")
        return
        @warning_ignore("unreachable_code")
        print("unreachable")
```



<!-- rst-class:: classref-section-separator -->

---

## 方法说明

<div id="_class_@gdscript_method_color8"></div>

[`Color`](class_color.md) **Color8** ( r8: [`int`](class_int.md), g8: [`int`](class_int.md), b8: [`int`](class_int.md), a8: [`int`](class_int.md) = 255 )<div id="class_@gdscript_method_color8"></div>

Returns a [`Color`](class_color.md) constructed from red (`r8`), green (`g8`), blue (`b8`), and optionally alpha (`a8`) integer channels, each divided by `255.0` for their final value. Using [`Color8`](#class_@gdscript_method_color8) instead of the standard [`Color`](class_color.md) constructor is useful when you need to match exact color values in an [`Image`](class_image.md).

```

    var red = Color8(255, 0, 0)             # Same as Color(1, 0, 0).
    var dark_blue = Color8(0, 0, 51)        # Same as Color(0, 0, 0.2).
    var my_color = Color8(306, 255, 0, 102) # Same as Color(1.2, 1, 0, 0.4).
```

 **Note:** Due to the lower precision of [`Color8`](#class_@gdscript_method_color8) compared to the standard [`Color`](class_color.md) constructor, a color created with [`Color8`](#class_@gdscript_method_color8) will generally not be equal to the same color created with the standard [`Color`](class_color.md) constructor. Use [`Color.is_equal_approx`](#class_color_method_is_equal_approx) for comparisons to avoid issues with floating-point precision error.



<!-- rst-class:: classref-item-separator -->

---

<div id="_class_@gdscript_method_assert"></div>

`void` **assert** ( condition: [`bool`](class_bool.md), message: [`String`](class_string.md) = "" )<div id="class_@gdscript_method_assert"></div>

Asserts that the `condition` is `true`. If the `condition` is `false`, an error is generated. When running from the editor, the running project will also be paused until you resume it. This can be used as a stronger form of [`@GlobalScope.push_error`](#class_@globalscope_method_push_error) for reporting errors to project developers or add-on users.

An optional `message` can be shown in addition to the generic "Assertion failed" message. You can use this to provide additional details about why the assertion failed.

 **Warning:** For performance reasons, the code inside [`assert`](#class_@gdscript_method_assert) is only executed in debug builds or when running the project from the editor. Don't include code that has side effects in an [`assert`](#class_@gdscript_method_assert) call. Otherwise, the project will behave differently when exported in release mode.

```

    # Imagine we always want speed to be between 0 and 20.
    var speed = -10
    assert(speed < 20) # True, the program will continue.
    assert(speed >= 0) # False, the program will stop.
    assert(speed >= 0 and speed < 20) # You can also combine the two conditional statements in one check.
    assert(speed < 20, "the speed limit is 20") # Show a message.
```

 **Note:** [`assert`](#class_@gdscript_method_assert) is a keyword, not a function. So you cannot access it as a [`Callable`](class_callable.md) or use it inside expressions.



<!-- rst-class:: classref-item-separator -->

---

<div id="_class_@gdscript_method_char"></div>

[`String`](class_string.md) **char** ( char: [`int`](class_int.md) )<div id="class_@gdscript_method_char"></div>

Returns a single character (as a [`String`](class_string.md)) of the given Unicode code point (which is compatible with ASCII code).

```

    a = char(65)      # a is "A"
    a = char(65 + 32) # a is "a"
    a = char(8364)    # a is "€"
```



<!-- rst-class:: classref-item-separator -->

---

<div id="_class_@gdscript_method_convert"></div>

[`Variant`](class_variant.md) **convert** ( what: [`Variant`](class_variant.md), type: [`int`](class_int.md) )<div id="class_@gdscript_method_convert"></div>

**已弃用：** Use [`@GlobalScope.type_convert`](#class_@globalscope_method_type_convert) instead.

Converts `what` to `type` in the best way possible. The `type` uses the [Variant.Type](#enum_@globalscope_variant.type) values.

```

    var a = [4, 2.5, 1.2]
    print(a is Array) # Prints true
    
    var b = convert(a, TYPE_PACKED_BYTE_ARRAY)
    print(b)          # Prints [4, 2, 1]
    print(b is Array) # Prints false
```



<!-- rst-class:: classref-item-separator -->

---

<div id="_class_@gdscript_method_dict_to_inst"></div>

[`Object`](class_object.md) **dict_to_inst** ( dictionary: [`Dictionary`](class_dictionary.md) )<div id="class_@gdscript_method_dict_to_inst"></div>

Converts a `dictionary` (created with [`inst_to_dict`](#class_@gdscript_method_inst_to_dict)) back to an Object instance. Can be useful for deserializing.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_@gdscript_method_get_stack"></div>

[`Array`](class_array.md) **get_stack** ( )<div id="class_@gdscript_method_get_stack"></div>

Returns an array of dictionaries representing the current call stack. See also [`print_stack`](#class_@gdscript_method_print_stack).

```

    func _ready():
        foo()
    
    func foo():
        bar()
    
    func bar():
        print(get_stack())
```

Starting from `_ready()`, `bar()` would print:

```text

    [{function:bar, line:12, source:res://script.gd}, {function:foo, line:9, source:res://script.gd}, {function:_ready, line:6, source:res://script.gd}]
```

 **Note:** This function only works if the running instance is connected to a debugging server (i.e. an editor instance). [`get_stack`](#class_@gdscript_method_get_stack) will not work in projects exported in release mode, or in projects exported in debug mode if not connected to a debugging server.

 **Note:** Calling this function from a [`Thread`](class_thread.md) is not supported. Doing so will return an empty array.





<!-- rst-class:: classref-item-separator -->

---

<div id="_class_@gdscript_method_inst_to_dict"></div>

[`Dictionary`](class_dictionary.md) **inst_to_dict** ( instance: [`Object`](class_object.md) )<div id="class_@gdscript_method_inst_to_dict"></div>

Returns the passed `instance` converted to a Dictionary. Can be useful for serializing.

 **Note:** Cannot be used to serialize objects with built-in scripts attached or objects allocated within built-in scripts.

```

    var foo = "bar"
    func _ready():
        var d = inst_to_dict(self)
        print(d.keys())
        print(d.values())
```

Prints out:

```text

    [@subpath, @path, foo]
    [, res://test.gd, bar]
```





<!-- rst-class:: classref-item-separator -->

---

<div id="_class_@gdscript_method_is_instance_of"></div>

[`bool`](class_bool.md) **is_instance_of** ( value: [`Variant`](class_variant.md), type: [`Variant`](class_variant.md) )<div id="class_@gdscript_method_is_instance_of"></div>

Returns `true` if `value` is an instance of `type`. The `type` value must be one of the following:

- A constant from the [Variant.Type](#enum_@globalscope_variant.type) enumeration, for example [`@GlobalScope.TYPE_INT`](#class_@globalscope_constant_type_int).

- An [`Object`](class_object.md)-derived class which exists in [`ClassDB`](class_classdb.md), for example [`Node`](class_node.md).

- A [`Script`](class_script.md) (you can use any class, including inner one).

Unlike the right operand of the `is` operator, `type` can be a non-constant value. The `is` operator supports more features (such as typed arrays). Use the operator instead of this method if you do not need dynamic type checking.

Examples:

```

    print(is_instance_of(a, TYPE_INT))
    print(is_instance_of(a, Node))
    print(is_instance_of(a, MyClass))
    print(is_instance_of(a, MyClass.InnerClass))
```

 **Note:** If `value` and/or `type` are freed objects (see [`@GlobalScope.is_instance_valid`](#class_@globalscope_method_is_instance_valid)), or `type` is not one of the above options, this method will raise a runtime error.

See also [`@GlobalScope.typeof`](#class_@globalscope_method_typeof), [`type_exists`](#class_@gdscript_method_type_exists), [`Array.is_same_typed`](#class_array_method_is_same_typed) (and other [`Array`](class_array.md) methods).



<!-- rst-class:: classref-item-separator -->

---

<div id="_class_@gdscript_method_len"></div>

[`int`](class_int.md) **len** ( var: [`Variant`](class_variant.md) )<div id="class_@gdscript_method_len"></div>

Returns the length of the given Variant `var`. The length can be the character count of a [`String`](class_string.md) or [`StringName`](class_stringname.md), the element count of any array type, or the size of a [`Dictionary`](class_dictionary.md). For every other Variant type, a run-time error is generated and execution is stopped.

```

    a = [1, 2, 3, 4]
    len(a) # Returns 4
    
    b = "Hello!"
    len(b) # Returns 6
```



<!-- rst-class:: classref-item-separator -->

---

<div id="_class_@gdscript_method_load"></div>

[`Resource`](class_resource.md) **load** ( path: [`String`](class_string.md) )<div id="class_@gdscript_method_load"></div>

Returns a [`Resource`](class_resource.md) from the filesystem located at the absolute `path`. Unless it's already referenced elsewhere (such as in another script or in the scene), the resource is loaded from disk on function call, which might cause a slight delay, especially when loading large scenes. To avoid unnecessary delays when loading something multiple times, either store the resource in a variable or use [`preload`](#class_@gdscript_method_preload). This method is equivalent of using [`ResourceLoader.load`](#class_resourceloader_method_load) with [`ResourceLoader.CACHE_MODE_REUSE`](#class_resourceloader_constant_cache_mode_reuse).

 **Note:** Resource paths can be obtained by right-clicking on a resource in the FileSystem dock and choosing "Copy Path", or by dragging the file from the FileSystem dock into the current script.

```

    # Load a scene called "main" located in the root of the project directory and cache it in a variable.
    var main = load("res://main.tscn") # main will contain a PackedScene resource.
```

 **Important:** Relative paths are *not* relative to the script calling this method, instead it is prefixed with `"res://"`. Loading from relative paths might not work as expected.

This function is a simplified version of [`ResourceLoader.load`](#class_resourceloader_method_load), which can be used for more advanced scenarios.

 **Note:** Files have to be imported into the engine first to load them using this function. If you want to load [`Image`](class_image.md) s at run-time, you may use [`Image.load`](#class_image_method_load). If you want to import audio files, you can use the snippet described in [`AudioStreamMP3.data`](#class_audiostreammp3_property_data).

 **Note:** If [`ProjectSettings.editor/export/convert_text_resources_to_binary`](#class_projectsettings_property_editor/export/convert_text_resources_to_binary) is `true`, [`load`](#class_@gdscript_method_load) will not be able to read converted files in an exported project. If you rely on run-time loading of files present within the PCK, set [`ProjectSettings.editor/export/convert_text_resources_to_binary`](#class_projectsettings_property_editor/export/convert_text_resources_to_binary) to `false`.



<!-- rst-class:: classref-item-separator -->

---

<div id="_class_@gdscript_method_preload"></div>

[`Resource`](class_resource.md) **preload** ( path: [`String`](class_string.md) )<div id="class_@gdscript_method_preload"></div>

Returns a [`Resource`](class_resource.md) from the filesystem located at `path`. During run-time, the resource is loaded when the script is being parsed. This function effectively acts as a reference to that resource. Note that this function requires `path` to be a constant [`String`](class_string.md). If you want to load a resource from a dynamic/variable path, use [`load`](#class_@gdscript_method_load).

 **Note:** Resource paths can be obtained by right-clicking on a resource in the Assets Panel and choosing "Copy Path", or by dragging the file from the FileSystem dock into the current script.

```

    # Create instance of a scene.
    var diamond = preload("res://diamond.tscn").instantiate()
```

 **Note:** [`preload`](#class_@gdscript_method_preload) is a keyword, not a function. So you cannot access it as a [`Callable`](class_callable.md).



<!-- rst-class:: classref-item-separator -->

---

<div id="_class_@gdscript_method_print_debug"></div>

`void` **print_debug** ( ... ) vararg[^vararg]<div id="class_@gdscript_method_print_debug"></div>

Like [`@GlobalScope.print`](#class_@globalscope_method_print), but includes the current stack frame when running with the debugger turned on.

The output in the console may look like the following:

```text

    Test print
    At: res://test.gd:15:_process()
```

 **Note:** Calling this function from a [`Thread`](class_thread.md) is not supported. Doing so will instead print the thread ID.



<!-- rst-class:: classref-item-separator -->

---

<div id="_class_@gdscript_method_print_stack"></div>

`void` **print_stack** ( )<div id="class_@gdscript_method_print_stack"></div>

Prints a stack trace at the current code location. See also [`get_stack`](#class_@gdscript_method_get_stack).

The output in the console may look like the following:

```text

    Frame 0 - res://test.gd:16 in function '_process'
```

 **Note:** This function only works if the running instance is connected to a debugging server (i.e. an editor instance). [`print_stack`](#class_@gdscript_method_print_stack) will not work in projects exported in release mode, or in projects exported in debug mode if not connected to a debugging server.

 **Note:** Calling this function from a [`Thread`](class_thread.md) is not supported. Doing so will instead print the thread ID.



<!-- rst-class:: classref-item-separator -->

---

<div id="_class_@gdscript_method_range"></div>

[`Array`](class_array.md) **range** ( ... ) vararg[^vararg]<div id="class_@gdscript_method_range"></div>

Returns an array with the given range. [`range`](#class_@gdscript_method_range) can be called in three ways:

 `range(n: int)`: Starts from 0, increases by steps of 1, and stops *before* `n`. The argument `n` is **exclusive**.

 `range(b: int, n: int)`: Starts from `b`, increases by steps of 1, and stops *before* `n`. The arguments `b` and `n` are **inclusive** and **exclusive**, respectively.

 `range(b: int, n: int, s: int)`: Starts from `b`, increases/decreases by steps of `s`, and stops *before* `n`. The arguments `b` and `n` are **inclusive** and **exclusive**, respectively. The argument `s` **can** be negative, but not `0`. If `s` is `0`, an error message is printed.

 [`range`](#class_@gdscript_method_range) converts all arguments to [`int`](class_int.md) before processing.

 **Note:** Returns an empty array if no value meets the value constraint (e.g. `range(2, 5, -1)` or `range(5, 5, 1)`).

Examples:

```

    print(range(4))        # Prints [0, 1, 2, 3]
    print(range(2, 5))     # Prints [2, 3, 4]
    print(range(0, 6, 2))  # Prints [0, 2, 4]
    print(range(4, 1, -1)) # Prints [4, 3, 2]
```

To iterate over an [`Array`](class_array.md) backwards, use:

```

    var array = [3, 6, 9]
    for i in range(array.size() - 1, -1, -1):
        print(array[i])
```

Output:

```text

    9
    6
    3
```

To iterate over [`float`](class_float.md), convert them in the loop.

```

    for i in range (3, 0, -1):
        print(i / 10.0)
```

Output:

```text

    0.3
    0.2
    0.1
```











<!-- rst-class:: classref-item-separator -->

---

<div id="_class_@gdscript_method_type_exists"></div>

[`bool`](class_bool.md) **type_exists** ( type: [`StringName`](class_stringname.md) )<div id="class_@gdscript_method_type_exists"></div>

Returns `true` if the given [`Object`](class_object.md)-derived class exists in [`ClassDB`](class_classdb.md). Note that [`Variant`](class_variant.md) data types are not registered in [`ClassDB`](class_classdb.md).

```

    type_exists("Sprite2D") # Returns true
    type_exists("NonExistentClass") # Returns false
```



[^virtual]: 本方法通常需要用户覆盖才能生效。
[^const]: 本方法无副作用，不会修改该实例的任何成员变量。
[^vararg]: 本方法除了能接受在此处描述的参数外，还能够继续接受任意数量的参数。
[^constructor]: 本方法用于构造某个类型。
[^static]: 调用本方法无需实例，可直接使用类名进行调用。
[^operator]: 本方法描述的是使用本类型作为左操作数的有效运算符。
[^bitfield]: 这个值是由下列位标志构成位掩码的整数。
[^void]: 无返回值。
