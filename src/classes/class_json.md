<!-- ⚠ 请勿编辑本文件 ⚠ -->
<!-- 本文档使用脚本从 WeDot 引擎源码仓库生成。 -->
<!-- 生成脚本：https://github.com/WeDot-Engine/WeDot/tree/4.3/doc/tools/make_md.py； -->
<!-- 原文件：https://github.com/WeDot-Engine/WeDot/tree/4.3/doc/classes/JSON.xml。 -->

<div id="_class_json"></div>

# JSON

**继承：** [`Resource`](class_resource.md) **<** [`RefCounted`](class_refcounted.md) **<** [`Object`](class_object.md)

Helper class for creating and parsing JSON data.

## 描述

The **JSON** class enables all data types to be converted to and from a JSON string. This is useful for serializing data, e.g. to save to a file or send over the network.

 [`stringify`](#class_json_method_stringify) is used to convert any data type into a JSON string.

 [`parse`](#class_json_method_parse) is used to convert any existing JSON data into a [`Variant`](class_variant.md) that can be used within Godot. If successfully parsed, use [`data`](#class_json_property_data) to retrieve the [`Variant`](class_variant.md), and use `typeof` to check if the Variant's type is what you expect. JSON Objects are converted into a [`Dictionary`](class_dictionary.md), but JSON data can be used to store [`Array`](class_array.md) s, numbers, [`String`](class_string.md) s and even just a boolean.

 **Example** 

```

    var data_to_send = ["a", "b", "c"]
    var json_string = JSON.stringify(data_to_send)
    # Save data
    # ...
    # Retrieve data
    var json = JSON.new()
    var error = json.parse(json_string)
    if error == OK:
        var data_received = json.data
        if typeof(data_received) == TYPE_ARRAY:
            print(data_received) # Prints array
        else:
            print("Unexpected data")
    else:
        print("JSON Parse Error: ", json.get_error_message(), " in ", json_string, " at line ", json.get_error_line())
```

Alternatively, you can parse strings using the static [`parse_string`](#class_json_method_parse_string) method, but it doesn't handle errors.

```

    var data = JSON.parse_string(json_string) # Returns null if parsing failed.
```

 **Note:** Both parse methods do not fully comply with the JSON specification:

- Trailing commas in arrays or objects are ignored, instead of causing a parser error.

- New line and tab characters are accepted in string literals, and are treated like their corresponding escape sequences `\n` and `\t`.

- Numbers are parsed using [`String.to_float`](#class_string_method_to_float) which is generally more lax than the JSON specification.

- Certain errors, such as invalid Unicode sequences, do not cause a parser error. Instead, the string is cleansed and an error is logged to the console.





## 属性

| [`Variant`](class_variant.md) | [`data`](#class_json_property_data) | ``null`` |

## 方法

| [`int`](class_int.md)             | [`get_error_line`](#class_json_method_get_error_line) ( ) const[^const]                                                                                                                                                                   |
| [`String`](class_string.md)       | [`get_error_message`](#class_json_method_get_error_message) ( ) const[^const]                                                                                                                                                             |
| [`String`](class_string.md)       | [`get_parsed_text`](#class_json_method_get_parsed_text) ( ) const[^const]                                                                                                                                                                 |
| [Error](#enum_@globalscope_error) | [`parse`](#class_json_method_parse) ( json_text: [`String`](class_string.md), keep_text: [`bool`](class_bool.md) = false )                                                                                                                |
| [`Variant`](class_variant.md)     | [`parse_string`](#class_json_method_parse_string) ( json_string: [`String`](class_string.md) ) static[^static]                                                                                                                            |
| [`String`](class_string.md)       | [`stringify`](#class_json_method_stringify) ( data: [`Variant`](class_variant.md), indent: [`String`](class_string.md) = "", sort_keys: [`bool`](class_bool.md) = true, full_precision: [`bool`](class_bool.md) = false ) static[^static] |

<!-- rst-class:: classref-section-separator -->

---

## 属性说明

<div id="_class_json_property_data"></div>

[`Variant`](class_variant.md) **data** = ``null`` <div id="class_json_property_data"></div>

- `void` **set_data** ( value: [`Variant`](class_variant.md) )
- [`Variant`](class_variant.md) **get_data** ( )

Contains the parsed JSON data in [`Variant`](class_variant.md) form.

<!-- rst-class:: classref-section-separator -->

---

## 方法说明

<div id="_class_json_method_get_error_line"></div>

[`int`](class_int.md) **get_error_line** ( ) const[^const]<div id="class_json_method_get_error_line"></div>

Returns `0` if the last call to [`parse`](#class_json_method_parse) was successful, or the line number where the parse failed.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_json_method_get_error_message"></div>

[`String`](class_string.md) **get_error_message** ( ) const[^const]<div id="class_json_method_get_error_message"></div>

Returns an empty string if the last call to [`parse`](#class_json_method_parse) was successful, or the error message if it failed.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_json_method_get_parsed_text"></div>

[`String`](class_string.md) **get_parsed_text** ( ) const[^const]<div id="class_json_method_get_parsed_text"></div>

Return the text parsed by [`parse`](#class_json_method_parse) (requires passing `keep_text` to [`parse`](#class_json_method_parse)).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_json_method_parse"></div>

[Error](#enum_@globalscope_error) **parse** ( json_text: [`String`](class_string.md), keep_text: [`bool`](class_bool.md) = false )<div id="class_json_method_parse"></div>

Attempts to parse the `json_text` provided.

Returns an [Error](#enum_@globalscope_error). If the parse was successful, it returns [`@GlobalScope.OK`](#class_@globalscope_constant_ok) and the result can be retrieved using [`data`](#class_json_property_data). If unsuccessful, use [`get_error_line`](#class_json_method_get_error_line) and [`get_error_message`](#class_json_method_get_error_message) to identify the source of the failure.

Non-static variant of [`parse_string`](#class_json_method_parse_string), if you want custom error handling.

The optional `keep_text` argument instructs the parser to keep a copy of the original text. This text can be obtained later by using the [`get_parsed_text`](#class_json_method_get_parsed_text) function and is used when saving the resource (instead of generating new text from [`data`](#class_json_property_data)).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_json_method_parse_string"></div>

[`Variant`](class_variant.md) **parse_string** ( json_string: [`String`](class_string.md) ) static[^static]<div id="class_json_method_parse_string"></div>

Attempts to parse the `json_string` provided and returns the parsed data. Returns `null` if parse failed.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_json_method_stringify"></div>

[`String`](class_string.md) **stringify** ( data: [`Variant`](class_variant.md), indent: [`String`](class_string.md) = "", sort_keys: [`bool`](class_bool.md) = true, full_precision: [`bool`](class_bool.md) = false ) static[^static]<div id="class_json_method_stringify"></div>

Converts a [`Variant`](class_variant.md) var to JSON text and returns the result. Useful for serializing data to store or send over the network.

 **Note:** The JSON specification does not define integer or float types, but only a *number* type. Therefore, converting a Variant to JSON text will convert all numerical values to [`float`](class_float.md) types.

 **Note:** If `full_precision` is `true`, when stringifying floats, the unreliable digits are stringified in addition to the reliable digits to guarantee exact decoding.

The `indent` parameter controls if and how something is indented; its contents will be used where there should be an indent in the output. Even spaces like `"   "` will work. `\t` and `\n` can also be used for a tab indent, or to make a newline for each indent respectively.

 **Example output:** 

```

    ## JSON.stringify(my_dictionary)
    {"name":"my_dictionary","version":"1.0.0","entities":[{"name":"entity_0","value":"value_0"},{"name":"entity_1","value":"value_1"}]}
    
    ## JSON.stringify(my_dictionary, "\t")
    {
        "name": "my_dictionary",
        "version": "1.0.0",
        "entities": [
            {
                "name": "entity_0",
                "value": "value_0"
            },
            {
                "name": "entity_1",
                "value": "value_1"
            }
        ]
    }
    
    ## JSON.stringify(my_dictionary, "...")
    {
    ..."name": "my_dictionary",
    ..."version": "1.0.0",
    ..."entities": [
    ......{
    ........."name": "entity_0",
    ........."value": "value_0"
    ......},
    ......{
    ........."name": "entity_1",
    ........."value": "value_1"
    ......}
    ...]
    }
```



[^virtual]: 本方法通常需要用户覆盖才能生效。
[^const]: 本方法无副作用，不会修改该实例的任何成员变量。
[^vararg]: 本方法除了能接受在此处描述的参数外，还能够继续接受任意数量的参数。
[^constructor]: 本方法用于构造某个类型。
[^static]: 调用本方法无需实例，可直接使用类名进行调用。
[^operator]: 本方法描述的是使用本类型作为左操作数的有效运算符。
[^bitfield]: 这个值是由下列位标志构成位掩码的整数。
[^void]: 无返回值。
