<!-- ⚠ 请勿编辑本文件 ⚠ -->
<!-- 本文档使用脚本从 WeDot 引擎源码仓库生成。 -->
<!-- 生成脚本：https://github.com/WeDot-Engine/WeDot/tree/master/doc/tools/make_md.py； -->
<!-- 原文件：https://github.com/WeDot-Engine/WeDot/tree/master/doc/classes/Dictionary.xml。 -->

<div id="_class_dictionary"></div>

# Dictionary

A built-in data structure that holds key-value pairs.

## 描述

Dictionaries are associative containers that contain values referenced by unique keys. Dictionaries will preserve the insertion order when adding new entries. In other programming languages, this data structure is often referred to as a hash map or an associative array.

You can define a dictionary by placing a comma-separated list of `key: value` pairs inside curly braces `{}`.

Creating a dictionary:



```gdscript

    var my_dict = {} # Creates an empty dictionary.
    
    var dict_variable_key = "Another key name"
    var dict_variable_value = "value2"
    var another_dict = {
        "Some key name": "value1",
        dict_variable_key: dict_variable_value,
    }
    
    var points_dict = {"White": 50, "Yellow": 75, "Orange": 100}
    
    # Alternative Lua-style syntax.
    # Doesn't require quotes around keys, but only string constants can be used as key names.
    # Additionally, key names must start with a letter or an underscore.
    # Here, `some_key` is a string literal, not a variable!
    another_dict = {
        some_key = 42,
    }
```

```csharp

    var myDict = new Godot.Collections.Dictionary(); // Creates an empty dictionary.
    var pointsDict = new Godot.Collections.Dictionary
    {
        {"White", 50},
        {"Yellow", 75},
        {"Orange", 100}
    };
```



You can access a dictionary's value by referencing its corresponding key. In the above example, `points_dict["White"]` will return `50`. You can also write `points_dict.White`, which is equivalent. However, you'll have to use the bracket syntax if the key you're accessing the dictionary with isn't a fixed string (such as a number or variable).



```gdscript

    @export_enum("White", "Yellow", "Orange") var my_color: String
    var points_dict = {"White": 50, "Yellow": 75, "Orange": 100}
    func _ready():
        # We can't use dot syntax here as `my_color` is a variable.
        var points = points_dict[my_color]
```

```csharp

    [Export(PropertyHint.Enum, "White,Yellow,Orange")]
    public string MyColor { get; set; }
    private Godot.Collections.Dictionary _pointsDict = new Godot.Collections.Dictionary
    {
        {"White", 50},
        {"Yellow", 75},
        {"Orange", 100}
    };
    
    public override void _Ready()
    {
        int points = (int)_pointsDict[MyColor];
    }
```



In the above code, `points` will be assigned the value that is paired with the appropriate color selected in `my_color`.

Dictionaries can contain more complex data:



```gdscript

    var my_dict = {
        "First Array": [1, 2, 3, 4] # Assigns an Array to a String key.
    }
```

```csharp

    var myDict = new Godot.Collections.Dictionary
    {
        {"First Array", new Godot.Collections.Array{1, 2, 3, 4}}
    };
```



To add a key to an existing dictionary, access it like an existing key and assign to it:



```gdscript

    var points_dict = {"White": 50, "Yellow": 75, "Orange": 100}
    points_dict["Blue"] = 150 # Add "Blue" as a key and assign 150 as its value.
```

```csharp

    var pointsDict = new Godot.Collections.Dictionary
    {
        {"White", 50},
        {"Yellow", 75},
        {"Orange", 100}
    };
    pointsDict["Blue"] = 150; // Add "Blue" as a key and assign 150 as its value.
```



Finally, dictionaries can contain different types of keys and values in the same dictionary:



```gdscript

    # This is a valid dictionary.
    # To access the string "Nested value" below, use `my_dict.sub_dict.sub_key` or `my_dict["sub_dict"]["sub_key"]`.
    # Indexing styles can be mixed and matched depending on your needs.
    var my_dict = {
        "String Key": 5,
        4: [1, 2, 3],
        7: "Hello",
        "sub_dict": {"sub_key": "Nested value"},
    }
```

```csharp

    // This is a valid dictionary.
    // To access the string "Nested value" below, use `((Godot.Collections.Dictionary)myDict["sub_dict"])["sub_key"]`.
    var myDict = new Godot.Collections.Dictionary {
        {"String Key", 5},
        {4, new Godot.Collections.Array{1,2,3}},
        {7, "Hello"},
        {"sub_dict", new Godot.Collections.Dictionary{{"sub_key", "Nested value"}}}
    };
```



The keys of a dictionary can be iterated with the `for` keyword:



```gdscript

    var groceries = {"Orange": 20, "Apple": 2, "Banana": 4}
    for fruit in groceries:
        var amount = groceries[fruit]
```

```csharp

    var groceries = new Godot.Collections.Dictionary{{"Orange", 20}, {"Apple", 2}, {"Banana", 4}};
    foreach (var (fruit, amount) in groceries)
    {
        // `fruit` is the key, `amount` is the value.
    }
```



 **Note:** Dictionaries are always passed by reference. To get a copy of a dictionary which can be modified independently of the original dictionary, use [`duplicate`](class_dictionary.md#class_dictionary_method_duplicate).

 **Note:** Erasing elements while iterating over dictionaries is **not** supported and will result in unpredictable behavior.

























通过 C# 使用该 API 时会有显著不同，详见 :ref:`doc_c_sharp_differences`\ 。

## 构造函数

|||
|:-:|:--|
| [`Dictionary`](class_dictionary.md) | [`Dictionary`](class_dictionary.md#class_dictionary_constructor_dictionary) ( )                                                                                                                                                                                                                                                                                                                   |
| [`Dictionary`](class_dictionary.md) | [`Dictionary`](class_dictionary.md#class_dictionary_constructor_dictionary) ( base: [`Dictionary`](class_dictionary.md), key_type: [`int`](class_int.md), key_class_name: [`StringName`](class_stringname.md), key_script: [`Variant`](class_variant.md), value_type: [`int`](class_int.md), value_class_name: [`StringName`](class_stringname.md), value_script: [`Variant`](class_variant.md) ) |
| [`Dictionary`](class_dictionary.md) | [`Dictionary`](class_dictionary.md#class_dictionary_constructor_dictionary) ( from: [`Dictionary`](class_dictionary.md) )                                                                                                                                                                                                                                                                         |

## 方法

|||
|:-:|:--|
| `void`                              | [`assign`](class_dictionary.md#class_dictionary_method_assign) ( dictionary: [`Dictionary`](class_dictionary.md) )                                                                         |
| `void`                              | [`clear`](class_dictionary.md#class_dictionary_method_clear) ( )                                                                                                                           |
| [`Dictionary`](class_dictionary.md) | [`duplicate`](class_dictionary.md#class_dictionary_method_duplicate) ( deep: [`bool`](class_bool.md) = false ) const[^const]                                                               |
| [`bool`](class_bool.md)             | [`erase`](class_dictionary.md#class_dictionary_method_erase) ( key: [`Variant`](class_variant.md) )                                                                                        |
| [`Variant`](class_variant.md)       | [`find_key`](class_dictionary.md#class_dictionary_method_find_key) ( value: [`Variant`](class_variant.md) ) const[^const]                                                                  |
| [`Variant`](class_variant.md)       | [`get`](class_dictionary.md#class_dictionary_method_get) ( key: [`Variant`](class_variant.md), default: [`Variant`](class_variant.md) = null ) const[^const]                               |
| [`Variant`](class_variant.md)       | [`get_or_add`](class_dictionary.md#class_dictionary_method_get_or_add) ( key: [`Variant`](class_variant.md), default: [`Variant`](class_variant.md) = null )                               |
| [`int`](class_int.md)               | [`get_typed_key_builtin`](class_dictionary.md#class_dictionary_method_get_typed_key_builtin) ( ) const[^const]                                                                             |
| [`StringName`](class_stringname.md) | [`get_typed_key_class_name`](class_dictionary.md#class_dictionary_method_get_typed_key_class_name) ( ) const[^const]                                                                       |
| [`Variant`](class_variant.md)       | [`get_typed_key_script`](class_dictionary.md#class_dictionary_method_get_typed_key_script) ( ) const[^const]                                                                               |
| [`int`](class_int.md)               | [`get_typed_value_builtin`](class_dictionary.md#class_dictionary_method_get_typed_value_builtin) ( ) const[^const]                                                                         |
| [`StringName`](class_stringname.md) | [`get_typed_value_class_name`](class_dictionary.md#class_dictionary_method_get_typed_value_class_name) ( ) const[^const]                                                                   |
| [`Variant`](class_variant.md)       | [`get_typed_value_script`](class_dictionary.md#class_dictionary_method_get_typed_value_script) ( ) const[^const]                                                                           |
| [`bool`](class_bool.md)             | [`has`](class_dictionary.md#class_dictionary_method_has) ( key: [`Variant`](class_variant.md) ) const[^const]                                                                              |
| [`bool`](class_bool.md)             | [`has_all`](class_dictionary.md#class_dictionary_method_has_all) ( keys: [`Array`](class_array.md) ) const[^const]                                                                         |
| [`int`](class_int.md)               | [`hash`](class_dictionary.md#class_dictionary_method_hash) ( ) const[^const]                                                                                                               |
| [`bool`](class_bool.md)             | [`is_empty`](class_dictionary.md#class_dictionary_method_is_empty) ( ) const[^const]                                                                                                       |
| [`bool`](class_bool.md)             | [`is_read_only`](class_dictionary.md#class_dictionary_method_is_read_only) ( ) const[^const]                                                                                               |
| [`bool`](class_bool.md)             | [`is_same_typed`](class_dictionary.md#class_dictionary_method_is_same_typed) ( dictionary: [`Dictionary`](class_dictionary.md) ) const[^const]                                             |
| [`bool`](class_bool.md)             | [`is_same_typed_key`](class_dictionary.md#class_dictionary_method_is_same_typed_key) ( dictionary: [`Dictionary`](class_dictionary.md) ) const[^const]                                     |
| [`bool`](class_bool.md)             | [`is_same_typed_value`](class_dictionary.md#class_dictionary_method_is_same_typed_value) ( dictionary: [`Dictionary`](class_dictionary.md) ) const[^const]                                 |
| [`bool`](class_bool.md)             | [`is_typed`](class_dictionary.md#class_dictionary_method_is_typed) ( ) const[^const]                                                                                                       |
| [`bool`](class_bool.md)             | [`is_typed_key`](class_dictionary.md#class_dictionary_method_is_typed_key) ( ) const[^const]                                                                                               |
| [`bool`](class_bool.md)             | [`is_typed_value`](class_dictionary.md#class_dictionary_method_is_typed_value) ( ) const[^const]                                                                                           |
| [`Array`](class_array.md)           | [`keys`](class_dictionary.md#class_dictionary_method_keys) ( ) const[^const]                                                                                                               |
| `void`                              | [`make_read_only`](class_dictionary.md#class_dictionary_method_make_read_only) ( )                                                                                                         |
| `void`                              | [`merge`](class_dictionary.md#class_dictionary_method_merge) ( dictionary: [`Dictionary`](class_dictionary.md), overwrite: [`bool`](class_bool.md) = false )                               |
| [`Dictionary`](class_dictionary.md) | [`merged`](class_dictionary.md#class_dictionary_method_merged) ( dictionary: [`Dictionary`](class_dictionary.md), overwrite: [`bool`](class_bool.md) = false ) const[^const]               |
| [`bool`](class_bool.md)             | [`recursive_equal`](class_dictionary.md#class_dictionary_method_recursive_equal) ( dictionary: [`Dictionary`](class_dictionary.md), recursion_count: [`int`](class_int.md) ) const[^const] |
| [`bool`](class_bool.md)             | [`set`](class_dictionary.md#class_dictionary_method_set) ( key: [`Variant`](class_variant.md), value: [`Variant`](class_variant.md) )                                                      |
| [`int`](class_int.md)               | [`size`](class_dictionary.md#class_dictionary_method_size) ( ) const[^const]                                                                                                               |
| `void`                              | [`sort`](class_dictionary.md#class_dictionary_method_sort) ( )                                                                                                                             |
| [`Array`](class_array.md)           | [`values`](class_dictionary.md#class_dictionary_method_values) ( ) const[^const]                                                                                                           |

## 运算符

|||
|:-:|:--|
| [`bool`](class_bool.md)       | [`operator !=`](class_Dictionary.md#operator_neq_Dictionary) ( right: [`Dictionary`](class_dictionary.md) ) |
| [`bool`](class_bool.md)       | [`operator ==`](class_Dictionary.md#operator_eq_Dictionary) ( right: [`Dictionary`](class_dictionary.md) )  |
| [`Variant`](class_variant.md) | [`operator []`](class_Dictionary.md#operator_idx_Variant) ( key: [`Variant`](class_variant.md) )            |

<!-- rst-class:: classref-section-separator -->

---

## 构造函数说明

<div id="_class_dictionary_constructor_dictionary"></div>

[`Dictionary`](class_dictionary.md) **Dictionary** ( )<div id="class_dictionary_constructor_dictionary"></div>

Constructs an empty **Dictionary**.

<!-- rst-class:: classref-item-separator -->

---

[`Dictionary`](class_dictionary.md) **Dictionary** ( base: [`Dictionary`](class_dictionary.md), key_type: [`int`](class_int.md), key_class_name: [`StringName`](class_stringname.md), key_script: [`Variant`](class_variant.md), value_type: [`int`](class_int.md), value_class_name: [`StringName`](class_stringname.md), value_script: [`Variant`](class_variant.md) )

Creates a typed dictionary from the `base` dictionary. A typed dictionary can only contain keys and values of the given types, or that inherit from the given classes, as described by this constructor's parameters.

<!-- rst-class:: classref-item-separator -->

---

[`Dictionary`](class_dictionary.md) **Dictionary** ( from: [`Dictionary`](class_dictionary.md) )

Returns the same dictionary as `from`. If you need a copy of the dictionary, use [`duplicate`](class_dictionary.md#class_dictionary_method_duplicate).

<!-- rst-class:: classref-section-separator -->

---

## 方法说明

<div id="_class_dictionary_method_assign"></div>

`void` **assign** ( dictionary: [`Dictionary`](class_dictionary.md) )<div id="class_dictionary_method_assign"></div>

Assigns elements of another `dictionary` into the dictionary. Resizes the dictionary to match `dictionary`. Performs type conversions if the dictionary is typed.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_dictionary_method_clear"></div>

`void` **clear** ( )<div id="class_dictionary_method_clear"></div>

Clears the dictionary, removing all entries from it.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_dictionary_method_duplicate"></div>

[`Dictionary`](class_dictionary.md) **duplicate** ( deep: [`bool`](class_bool.md) = false ) const[^const]<div id="class_dictionary_method_duplicate"></div>

Creates and returns a new copy of the dictionary. If `deep` is `true`, inner **Dictionary** and [`Array`](class_array.md) keys and values are also copied, recursively.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_dictionary_method_erase"></div>

[`bool`](class_bool.md) **erase** ( key: [`Variant`](class_variant.md) )<div id="class_dictionary_method_erase"></div>

Removes the dictionary entry by key, if it exists. Returns `true` if the given `key` existed in the dictionary, otherwise `false`.

 **Note:** Do not erase entries while iterating over the dictionary. You can iterate over the [`keys`](class_dictionary.md#class_dictionary_method_keys) array instead.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_dictionary_method_find_key"></div>

[`Variant`](class_variant.md) **find_key** ( value: [`Variant`](class_variant.md) ) const[^const]<div id="class_dictionary_method_find_key"></div>

Finds and returns the first key whose associated value is equal to `value`, or `null` if it is not found.

 **Note:** `null` is also a valid key. If inside the dictionary, [`find_key`](class_dictionary.md#class_dictionary_method_find_key) may give misleading results.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_dictionary_method_get"></div>

[`Variant`](class_variant.md) **get** ( key: [`Variant`](class_variant.md), default: [`Variant`](class_variant.md) = null ) const[^const]<div id="class_dictionary_method_get"></div>

Returns the corresponding value for the given `key` in the dictionary. If the `key` does not exist, returns `default`, or `null` if the parameter is omitted.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_dictionary_method_get_or_add"></div>

[`Variant`](class_variant.md) **get_or_add** ( key: [`Variant`](class_variant.md), default: [`Variant`](class_variant.md) = null )<div id="class_dictionary_method_get_or_add"></div>

Gets a value and ensures the key is set. If the `key` exists in the dictionary, this behaves like [`get`](class_dictionary.md#class_dictionary_method_get). Otherwise, the `default` value is inserted into the dictionary and returned.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_dictionary_method_get_typed_key_builtin"></div>

[`int`](class_int.md) **get_typed_key_builtin** ( ) const[^const]<div id="class_dictionary_method_get_typed_key_builtin"></div>

Returns the built-in [`Variant`](class_variant.md) type of the typed dictionary's keys as a [Variant.Type](#enum_@globalscope_variant.type) constant. If the keys are not typed, returns [`@GlobalScope.TYPE_NIL`](class_@globalscope.md#class_@globalscope_constant_type_nil). See also [`is_typed_key`](class_dictionary.md#class_dictionary_method_is_typed_key).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_dictionary_method_get_typed_key_class_name"></div>

[`StringName`](class_stringname.md) **get_typed_key_class_name** ( ) const[^const]<div id="class_dictionary_method_get_typed_key_class_name"></div>

Returns the **built-in** class name of the typed dictionary's keys, if the built-in [`Variant`](class_variant.md) type is [`@GlobalScope.TYPE_OBJECT`](class_@globalscope.md#class_@globalscope_constant_type_object). Otherwise, returns an empty [`StringName`](class_stringname.md). See also [`is_typed_key`](class_dictionary.md#class_dictionary_method_is_typed_key) and [`Object.get_class`](class_object.md#class_object_method_get_class).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_dictionary_method_get_typed_key_script"></div>

[`Variant`](class_variant.md) **get_typed_key_script** ( ) const[^const]<div id="class_dictionary_method_get_typed_key_script"></div>

Returns the [`Script`](class_script.md) instance associated with this typed dictionary's keys, or `null` if it does not exist. See also [`is_typed_key`](class_dictionary.md#class_dictionary_method_is_typed_key).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_dictionary_method_get_typed_value_builtin"></div>

[`int`](class_int.md) **get_typed_value_builtin** ( ) const[^const]<div id="class_dictionary_method_get_typed_value_builtin"></div>

Returns the built-in [`Variant`](class_variant.md) type of the typed dictionary's values as a [Variant.Type](#enum_@globalscope_variant.type) constant. If the values are not typed, returns [`@GlobalScope.TYPE_NIL`](class_@globalscope.md#class_@globalscope_constant_type_nil). See also [`is_typed_value`](class_dictionary.md#class_dictionary_method_is_typed_value).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_dictionary_method_get_typed_value_class_name"></div>

[`StringName`](class_stringname.md) **get_typed_value_class_name** ( ) const[^const]<div id="class_dictionary_method_get_typed_value_class_name"></div>

Returns the **built-in** class name of the typed dictionary's values, if the built-in [`Variant`](class_variant.md) type is [`@GlobalScope.TYPE_OBJECT`](class_@globalscope.md#class_@globalscope_constant_type_object). Otherwise, returns an empty [`StringName`](class_stringname.md). See also [`is_typed_value`](class_dictionary.md#class_dictionary_method_is_typed_value) and [`Object.get_class`](class_object.md#class_object_method_get_class).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_dictionary_method_get_typed_value_script"></div>

[`Variant`](class_variant.md) **get_typed_value_script** ( ) const[^const]<div id="class_dictionary_method_get_typed_value_script"></div>

Returns the [`Script`](class_script.md) instance associated with this typed dictionary's values, or `null` if it does not exist. See also [`is_typed_value`](class_dictionary.md#class_dictionary_method_is_typed_value).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_dictionary_method_has"></div>

[`bool`](class_bool.md) **has** ( key: [`Variant`](class_variant.md) ) const[^const]<div id="class_dictionary_method_has"></div>

Returns `true` if the dictionary contains an entry with the given `key`.



```gdscript

    var my_dict = {
        "Godot" : 4,
        210 : null,
    }
    
    print(my_dict.has("Godot")) # Prints true
    print(my_dict.has(210))     # Prints true
    print(my_dict.has(4))       # Prints false
```

```csharp

    var myDict = new Godot.Collections.Dictionary
    {
        { "Godot", 4 },
        { 210, default },
    };
    
    GD.Print(myDict.ContainsKey("Godot")); // Prints true
    GD.Print(myDict.ContainsKey(210));     // Prints true
    GD.Print(myDict.ContainsKey(4));       // Prints false
```



In GDScript, this is equivalent to the `in` operator:

```

    if "Godot" in {"Godot": 4}:
        print("The key is here!") # Will be printed.
```

 **Note:** This method returns `true` as long as the `key` exists, even if its corresponding value is `null`.







<!-- rst-class:: classref-item-separator -->

---

<div id="_class_dictionary_method_has_all"></div>

[`bool`](class_bool.md) **has_all** ( keys: [`Array`](class_array.md) ) const[^const]<div id="class_dictionary_method_has_all"></div>

Returns `true` if the dictionary contains all keys in the given `keys` array.

```

    var data = {"width" : 10, "height" : 20}
    data.has_all(["height", "width"]) # Returns true
```



<!-- rst-class:: classref-item-separator -->

---

<div id="_class_dictionary_method_hash"></div>

[`int`](class_int.md) **hash** ( ) const[^const]<div id="class_dictionary_method_hash"></div>

Returns a hashed 32-bit integer value representing the dictionary contents.



```gdscript

    var dict1 = {"A": 10, "B": 2}
    var dict2 = {"A": 10, "B": 2}
    
    print(dict1.hash() == dict2.hash()) # Prints true
```

```csharp

    var dict1 = new Godot.Collections.Dictionary{{"A", 10}, {"B", 2}};
    var dict2 = new Godot.Collections.Dictionary{{"A", 10}, {"B", 2}};
    
    // Godot.Collections.Dictionary has no Hash() method. Use GD.Hash() instead.
    GD.Print(GD.Hash(dict1) == GD.Hash(dict2)); // Prints true
```



 **Note:** Dictionaries with the same entries but in a different order will not have the same hash.

 **Note:** Dictionaries with equal hash values are *not* guaranteed to be the same, because of hash collisions. On the contrary, dictionaries with different hash values are guaranteed to be different.





<!-- rst-class:: classref-item-separator -->

---

<div id="_class_dictionary_method_is_empty"></div>

[`bool`](class_bool.md) **is_empty** ( ) const[^const]<div id="class_dictionary_method_is_empty"></div>

Returns `true` if the dictionary is empty (its size is `0`). See also [`size`](class_dictionary.md#class_dictionary_method_size).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_dictionary_method_is_read_only"></div>

[`bool`](class_bool.md) **is_read_only** ( ) const[^const]<div id="class_dictionary_method_is_read_only"></div>

Returns `true` if the dictionary is read-only. See [`make_read_only`](class_dictionary.md#class_dictionary_method_make_read_only). Dictionaries are automatically read-only if declared with `const` keyword.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_dictionary_method_is_same_typed"></div>

[`bool`](class_bool.md) **is_same_typed** ( dictionary: [`Dictionary`](class_dictionary.md) ) const[^const]<div id="class_dictionary_method_is_same_typed"></div>

Returns `true` if the dictionary is typed the same as `dictionary`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_dictionary_method_is_same_typed_key"></div>

[`bool`](class_bool.md) **is_same_typed_key** ( dictionary: [`Dictionary`](class_dictionary.md) ) const[^const]<div id="class_dictionary_method_is_same_typed_key"></div>

Returns `true` if the dictionary's keys are typed the same as `dictionary`'s keys.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_dictionary_method_is_same_typed_value"></div>

[`bool`](class_bool.md) **is_same_typed_value** ( dictionary: [`Dictionary`](class_dictionary.md) ) const[^const]<div id="class_dictionary_method_is_same_typed_value"></div>

Returns `true` if the dictionary's values are typed the same as `dictionary`'s values.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_dictionary_method_is_typed"></div>

[`bool`](class_bool.md) **is_typed** ( ) const[^const]<div id="class_dictionary_method_is_typed"></div>

Returns `true` if the dictionary is typed. Typed dictionaries can only store keys/values of their associated type and provide type safety for the `[]` operator. Methods of typed dictionary still return [`Variant`](class_variant.md).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_dictionary_method_is_typed_key"></div>

[`bool`](class_bool.md) **is_typed_key** ( ) const[^const]<div id="class_dictionary_method_is_typed_key"></div>

Returns `true` if the dictionary's keys are typed.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_dictionary_method_is_typed_value"></div>

[`bool`](class_bool.md) **is_typed_value** ( ) const[^const]<div id="class_dictionary_method_is_typed_value"></div>

Returns `true` if the dictionary's values are typed.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_dictionary_method_keys"></div>

[`Array`](class_array.md) **keys** ( ) const[^const]<div id="class_dictionary_method_keys"></div>

Returns the list of keys in the dictionary.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_dictionary_method_make_read_only"></div>

`void` **make_read_only** ( )<div id="class_dictionary_method_make_read_only"></div>

Makes the dictionary read-only, i.e. disables modification of the dictionary's contents. Does not apply to nested content, e.g. content of nested dictionaries.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_dictionary_method_merge"></div>

`void` **merge** ( dictionary: [`Dictionary`](class_dictionary.md), overwrite: [`bool`](class_bool.md) = false )<div id="class_dictionary_method_merge"></div>

Adds entries from `dictionary` to this dictionary. By default, duplicate keys are not copied over, unless `overwrite` is `true`.



```gdscript

    var dict = { "item": "sword", "quantity": 2 }
    var other_dict = { "quantity": 15, "color": "silver" }
    
    # Overwriting of existing keys is disabled by default.
    dict.merge(other_dict)
    print(dict)  # { "item": "sword", "quantity": 2, "color": "silver" }
    
    # With overwriting of existing keys enabled.
    dict.merge(other_dict, true)
    print(dict)  # { "item": "sword", "quantity": 15, "color": "silver" }
```

```csharp

    var dict = new Godot.Collections.Dictionary
    {
        ["item"] = "sword",
        ["quantity"] = 2,
    };
    
    var otherDict = new Godot.Collections.Dictionary
    {
        ["quantity"] = 15,
        ["color"] = "silver",
    };
    
    // Overwriting of existing keys is disabled by default.
    dict.Merge(otherDict);
    GD.Print(dict); // { "item": "sword", "quantity": 2, "color": "silver" }
    
    // With overwriting of existing keys enabled.
    dict.Merge(otherDict, true);
    GD.Print(dict); // { "item": "sword", "quantity": 15, "color": "silver" }
```



 **Note:** [`merge`](class_dictionary.md#class_dictionary_method_merge) is *not* recursive. Nested dictionaries are considered as keys that can be overwritten or not depending on the value of `overwrite`, but they will never be merged together.





<!-- rst-class:: classref-item-separator -->

---

<div id="_class_dictionary_method_merged"></div>

[`Dictionary`](class_dictionary.md) **merged** ( dictionary: [`Dictionary`](class_dictionary.md), overwrite: [`bool`](class_bool.md) = false ) const[^const]<div id="class_dictionary_method_merged"></div>

Returns a copy of this dictionary merged with the other `dictionary`. By default, duplicate keys are not copied over, unless `overwrite` is `true`. See also [`merge`](class_dictionary.md#class_dictionary_method_merge).

This method is useful for quickly making dictionaries with default values:

```

    var base = { "fruit": "apple", "vegetable": "potato" }
    var extra = { "fruit": "orange", "dressing": "vinegar" }
    # Prints { "fruit": "orange", "vegetable": "potato", "dressing": "vinegar" }
    print(extra.merged(base))
    # Prints { "fruit": "apple", "vegetable": "potato", "dressing": "vinegar" }
    print(extra.merged(base, true))
```



<!-- rst-class:: classref-item-separator -->

---

<div id="_class_dictionary_method_recursive_equal"></div>

[`bool`](class_bool.md) **recursive_equal** ( dictionary: [`Dictionary`](class_dictionary.md), recursion_count: [`int`](class_int.md) ) const[^const]<div id="class_dictionary_method_recursive_equal"></div>

Returns `true` if the two dictionaries contain the same keys and values, inner **Dictionary** and [`Array`](class_array.md) keys and values are compared recursively.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_dictionary_method_set"></div>

[`bool`](class_bool.md) **set** ( key: [`Variant`](class_variant.md), value: [`Variant`](class_variant.md) )<div id="class_dictionary_method_set"></div>

Sets the value of the element at the given `key` to the given `value`. This is the same as using the `[]` operator (`array[index] = value`).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_dictionary_method_size"></div>

[`int`](class_int.md) **size** ( ) const[^const]<div id="class_dictionary_method_size"></div>

Returns the number of entries in the dictionary. Empty dictionaries (`{ }`) always return `0`. See also [`is_empty`](class_dictionary.md#class_dictionary_method_is_empty).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_dictionary_method_sort"></div>

`void` **sort** ( )<div id="class_dictionary_method_sort"></div>

Sorts the dictionary in-place by key. This can be used to ensure dictionaries with the same contents produce equivalent results when getting the [`keys`](class_dictionary.md#class_dictionary_method_keys), getting the [`values`](class_dictionary.md#class_dictionary_method_values), and converting to a string. This is also useful when wanting a JSON representation consistent with what is in memory, and useful for storing on a database that requires dictionaries to be sorted.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_dictionary_method_values"></div>

[`Array`](class_array.md) **values** ( ) const[^const]<div id="class_dictionary_method_values"></div>

Returns the list of values in this dictionary.

<!-- rst-class:: classref-section-separator -->

---

## 运算符说明

<div id="_class_dictionary_operator_neq_dictionary"></div>

[`bool`](class_bool.md) **operator !=** ( right: [`Dictionary`](class_dictionary.md) ) <div id="class_dictionary_operator_neq_dictionary"></div>

Returns `true` if the two dictionaries do not contain the same keys and values.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_dictionary_operator_eq_dictionary"></div>

[`bool`](class_bool.md) **operator ==** ( right: [`Dictionary`](class_dictionary.md) ) <div id="class_dictionary_operator_eq_dictionary"></div>

Returns `true` if the two dictionaries contain the same keys and values. The order of the entries does not matter.

 **Note:** In C#, by convention, this operator compares by **reference**. If you need to compare by value, iterate over both dictionaries.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_dictionary_operator_idx_variant"></div>

[`Variant`](class_variant.md) **operator []** ( key: [`Variant`](class_variant.md) ) <div id="class_dictionary_operator_idx_variant"></div>

Returns the corresponding value for the given `key` in the dictionary. If the entry does not exist, fails and returns `null`. For safe access, use [`get`](class_dictionary.md#class_dictionary_method_get) or [`has`](class_dictionary.md#class_dictionary_method_has).

[^virtual]: 本方法通常需要用户覆盖才能生效。
[^const]: 本方法无副作用，不会修改该实例的任何成员变量。
[^vararg]: 本方法除了能接受在此处描述的参数外，还能够继续接受任意数量的参数。
[^constructor]: 本方法用于构造某个类型。
[^static]: 调用本方法无需实例，可直接使用类名进行调用。
[^operator]: 本方法描述的是使用本类型作为左操作数的有效运算符。
[^bitfield]: 这个值是由下列位标志构成位掩码的整数。
[^void]: 无返回值。
