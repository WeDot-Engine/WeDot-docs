<!-- ⚠ 请勿编辑本文件 ⚠ -->
<!-- 本文档使用脚本从 WeDot 引擎源码仓库生成。 -->
<!-- 生成脚本：https://github.com/WeDot-Engine/WeDot/tree/4.3/doc/tools/make_md.py； -->
<!-- 原文件：https://github.com/WeDot-Engine/WeDot/tree/4.3/doc/classes/ConfigFile.xml。 -->

<div id="_class_configfile"></div>

# ConfigFile

**继承：** [`RefCounted`](class_refcounted.md) **<** [`Object`](class_object.md)

Helper class to handle INI-style files.

## 描述

This helper class can be used to store [`Variant`](class_variant.md) values on the filesystem using INI-style formatting. The stored values are identified by a section and a key:

```text

    [section]
    some_key=42
    string_example="Hello World3D!"
    a_vector=Vector3(1, 0, 2)
```

The stored data can be saved to or parsed from a file, though ConfigFile objects can also be used directly without accessing the filesystem.

The following example shows how to create a simple **ConfigFile** and save it on disc:



```gdscript

    # Create new ConfigFile object.
    var config = ConfigFile.new()
    
    # Store some values.
    config.set_value("Player1", "player_name", "Steve")
    config.set_value("Player1", "best_score", 10)
    config.set_value("Player2", "player_name", "V3geta")
    config.set_value("Player2", "best_score", 9001)
    
    # Save it to a file (overwrite if already exists).
    config.save("user://scores.cfg")
```

```csharp

    // Create new ConfigFile object.
    var config = new ConfigFile();
    
    // Store some values.
    config.SetValue("Player1", "player_name", "Steve");
    config.SetValue("Player1", "best_score", 10);
    config.SetValue("Player2", "player_name", "V3geta");
    config.SetValue("Player2", "best_score", 9001);
    
    // Save it to a file (overwrite if already exists).
    config.Save("user://scores.cfg");
```



This example shows how the above file could be loaded:



```gdscript

    var score_data = {}
    var config = ConfigFile.new()
    
    # Load data from a file.
    var err = config.load("user://scores.cfg")
    
    # If the file didn't load, ignore it.
    if err != OK:
        return
    
    # Iterate over all sections.
    for player in config.get_sections():
        # Fetch the data for each section.
        var player_name = config.get_value(player, "player_name")
        var player_score = config.get_value(player, "best_score")
        score_data[player_name] = player_score
```

```csharp

    var score_data = new Godot.Collections.Dictionary();
    var config = new ConfigFile();
    
    // Load data from a file.
    Error err = config.Load("user://scores.cfg");
    
    // If the file didn't load, ignore it.
    if (err != Error.Ok)
    {
        return;
    }
    
    // Iterate over all sections.
    foreach (String player in config.GetSections())
    {
        // Fetch the data for each section.
        var player_name = (String)config.GetValue(player, "player_name");
        var player_score = (int)config.GetValue(player, "best_score");
        score_data[player_name] = player_score;
    }
```



Any operation that mutates the ConfigFile such as [`set_value`](#class_configfile_method_set_value), [`clear`](#class_configfile_method_clear), or [`erase_section`](#class_configfile_method_erase_section), only changes what is loaded in memory. If you want to write the change to a file, you have to save the changes with [`save`](#class_configfile_method_save), [`save_encrypted`](#class_configfile_method_save_encrypted), or [`save_encrypted_pass`](#class_configfile_method_save_encrypted_pass).

Keep in mind that section and property names can't contain spaces. Anything after a space will be ignored on save and on load.

ConfigFiles can also contain manually written comment lines starting with a semicolon (`;`). Those lines will be ignored when parsing the file. Note that comments will be lost when saving the ConfigFile. This can still be useful for dedicated server configuration files, which are typically never overwritten without explicit user action.

 **Note:** The file extension given to a ConfigFile does not have any impact on its formatting or behavior. By convention, the `.cfg` extension is used here, but any other extension such as `.ini` is also valid. Since neither `.cfg` nor `.ini` are standardized, Godot's ConfigFile formatting may differ from files written by other programs.











## 方法

| `void`                                            | [`clear`](#class_configfile_method_clear) ( )                                                                                                                                             |
| [`String`](class_string.md)                       | [`encode_to_text`](#class_configfile_method_encode_to_text) ( ) const[^const]                                                                                                             |
| `void`                                            | [`erase_section`](#class_configfile_method_erase_section) ( section: [`String`](class_string.md) )                                                                                        |
| `void`                                            | [`erase_section_key`](#class_configfile_method_erase_section_key) ( section: [`String`](class_string.md), key: [`String`](class_string.md) )                                              |
| [`PackedStringArray`](class_packedstringarray.md) | [`get_section_keys`](#class_configfile_method_get_section_keys) ( section: [`String`](class_string.md) ) const[^const]                                                                    |
| [`PackedStringArray`](class_packedstringarray.md) | [`get_sections`](#class_configfile_method_get_sections) ( ) const[^const]                                                                                                                 |
| [`Variant`](class_variant.md)                     | [`get_value`](#class_configfile_method_get_value) ( section: [`String`](class_string.md), key: [`String`](class_string.md), default: [`Variant`](class_variant.md) = null ) const[^const] |
| [`bool`](class_bool.md)                           | [`has_section`](#class_configfile_method_has_section) ( section: [`String`](class_string.md) ) const[^const]                                                                              |
| [`bool`](class_bool.md)                           | [`has_section_key`](#class_configfile_method_has_section_key) ( section: [`String`](class_string.md), key: [`String`](class_string.md) ) const[^const]                                    |
| [Error](#enum_@globalscope_error)                 | [`load`](#class_configfile_method_load) ( path: [`String`](class_string.md) )                                                                                                             |
| [Error](#enum_@globalscope_error)                 | [`load_encrypted`](#class_configfile_method_load_encrypted) ( path: [`String`](class_string.md), key: [`PackedByteArray`](class_packedbytearray.md) )                                     |
| [Error](#enum_@globalscope_error)                 | [`load_encrypted_pass`](#class_configfile_method_load_encrypted_pass) ( path: [`String`](class_string.md), password: [`String`](class_string.md) )                                        |
| [Error](#enum_@globalscope_error)                 | [`parse`](#class_configfile_method_parse) ( data: [`String`](class_string.md) )                                                                                                           |
| [Error](#enum_@globalscope_error)                 | [`save`](#class_configfile_method_save) ( path: [`String`](class_string.md) )                                                                                                             |
| [Error](#enum_@globalscope_error)                 | [`save_encrypted`](#class_configfile_method_save_encrypted) ( path: [`String`](class_string.md), key: [`PackedByteArray`](class_packedbytearray.md) )                                     |
| [Error](#enum_@globalscope_error)                 | [`save_encrypted_pass`](#class_configfile_method_save_encrypted_pass) ( path: [`String`](class_string.md), password: [`String`](class_string.md) )                                        |
| `void`                                            | [`set_value`](#class_configfile_method_set_value) ( section: [`String`](class_string.md), key: [`String`](class_string.md), value: [`Variant`](class_variant.md) )                        |

<!-- rst-class:: classref-section-separator -->

---

## 方法说明

<div id="_class_configfile_method_clear"></div>

`void` **clear** ( )<div id="class_configfile_method_clear"></div>

Removes the entire contents of the config.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_configfile_method_encode_to_text"></div>

[`String`](class_string.md) **encode_to_text** ( ) const[^const]<div id="class_configfile_method_encode_to_text"></div>

Obtain the text version of this config file (the same text that would be written to a file).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_configfile_method_erase_section"></div>

`void` **erase_section** ( section: [`String`](class_string.md) )<div id="class_configfile_method_erase_section"></div>

Deletes the specified section along with all the key-value pairs inside. Raises an error if the section does not exist.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_configfile_method_erase_section_key"></div>

`void` **erase_section_key** ( section: [`String`](class_string.md), key: [`String`](class_string.md) )<div id="class_configfile_method_erase_section_key"></div>

Deletes the specified key in a section. Raises an error if either the section or the key do not exist.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_configfile_method_get_section_keys"></div>

[`PackedStringArray`](class_packedstringarray.md) **get_section_keys** ( section: [`String`](class_string.md) ) const[^const]<div id="class_configfile_method_get_section_keys"></div>

Returns an array of all defined key identifiers in the specified section. Raises an error and returns an empty array if the section does not exist.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_configfile_method_get_sections"></div>

[`PackedStringArray`](class_packedstringarray.md) **get_sections** ( ) const[^const]<div id="class_configfile_method_get_sections"></div>

Returns an array of all defined section identifiers.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_configfile_method_get_value"></div>

[`Variant`](class_variant.md) **get_value** ( section: [`String`](class_string.md), key: [`String`](class_string.md), default: [`Variant`](class_variant.md) = null ) const[^const]<div id="class_configfile_method_get_value"></div>

Returns the current value for the specified section and key. If either the section or the key do not exist, the method returns the fallback `default` value. If `default` is not specified or set to `null`, an error is also raised.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_configfile_method_has_section"></div>

[`bool`](class_bool.md) **has_section** ( section: [`String`](class_string.md) ) const[^const]<div id="class_configfile_method_has_section"></div>

Returns `true` if the specified section exists.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_configfile_method_has_section_key"></div>

[`bool`](class_bool.md) **has_section_key** ( section: [`String`](class_string.md), key: [`String`](class_string.md) ) const[^const]<div id="class_configfile_method_has_section_key"></div>

Returns `true` if the specified section-key pair exists.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_configfile_method_load"></div>

[Error](#enum_@globalscope_error) **load** ( path: [`String`](class_string.md) )<div id="class_configfile_method_load"></div>

Loads the config file specified as a parameter. The file's contents are parsed and loaded in the **ConfigFile** object which the method was called on.

Returns [`@GlobalScope.OK`](#class_@globalscope_constant_ok) on success, or one of the other [Error](#enum_@globalscope_error) values if the operation failed.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_configfile_method_load_encrypted"></div>

[Error](#enum_@globalscope_error) **load_encrypted** ( path: [`String`](class_string.md), key: [`PackedByteArray`](class_packedbytearray.md) )<div id="class_configfile_method_load_encrypted"></div>

Loads the encrypted config file specified as a parameter, using the provided `key` to decrypt it. The file's contents are parsed and loaded in the **ConfigFile** object which the method was called on.

Returns [`@GlobalScope.OK`](#class_@globalscope_constant_ok) on success, or one of the other [Error](#enum_@globalscope_error) values if the operation failed.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_configfile_method_load_encrypted_pass"></div>

[Error](#enum_@globalscope_error) **load_encrypted_pass** ( path: [`String`](class_string.md), password: [`String`](class_string.md) )<div id="class_configfile_method_load_encrypted_pass"></div>

Loads the encrypted config file specified as a parameter, using the provided `password` to decrypt it. The file's contents are parsed and loaded in the **ConfigFile** object which the method was called on.

Returns [`@GlobalScope.OK`](#class_@globalscope_constant_ok) on success, or one of the other [Error](#enum_@globalscope_error) values if the operation failed.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_configfile_method_parse"></div>

[Error](#enum_@globalscope_error) **parse** ( data: [`String`](class_string.md) )<div id="class_configfile_method_parse"></div>

Parses the passed string as the contents of a config file. The string is parsed and loaded in the ConfigFile object which the method was called on.

Returns [`@GlobalScope.OK`](#class_@globalscope_constant_ok) on success, or one of the other [Error](#enum_@globalscope_error) values if the operation failed.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_configfile_method_save"></div>

[Error](#enum_@globalscope_error) **save** ( path: [`String`](class_string.md) )<div id="class_configfile_method_save"></div>

Saves the contents of the **ConfigFile** object to the file specified as a parameter. The output file uses an INI-style structure.

Returns [`@GlobalScope.OK`](#class_@globalscope_constant_ok) on success, or one of the other [Error](#enum_@globalscope_error) values if the operation failed.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_configfile_method_save_encrypted"></div>

[Error](#enum_@globalscope_error) **save_encrypted** ( path: [`String`](class_string.md), key: [`PackedByteArray`](class_packedbytearray.md) )<div id="class_configfile_method_save_encrypted"></div>

Saves the contents of the **ConfigFile** object to the AES-256 encrypted file specified as a parameter, using the provided `key` to encrypt it. The output file uses an INI-style structure.

Returns [`@GlobalScope.OK`](#class_@globalscope_constant_ok) on success, or one of the other [Error](#enum_@globalscope_error) values if the operation failed.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_configfile_method_save_encrypted_pass"></div>

[Error](#enum_@globalscope_error) **save_encrypted_pass** ( path: [`String`](class_string.md), password: [`String`](class_string.md) )<div id="class_configfile_method_save_encrypted_pass"></div>

Saves the contents of the **ConfigFile** object to the AES-256 encrypted file specified as a parameter, using the provided `password` to encrypt it. The output file uses an INI-style structure.

Returns [`@GlobalScope.OK`](#class_@globalscope_constant_ok) on success, or one of the other [Error](#enum_@globalscope_error) values if the operation failed.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_configfile_method_set_value"></div>

`void` **set_value** ( section: [`String`](class_string.md), key: [`String`](class_string.md), value: [`Variant`](class_variant.md) )<div id="class_configfile_method_set_value"></div>

Assigns a value to the specified key of the specified section. If either the section or the key do not exist, they are created. Passing a `null` value deletes the specified key if it exists, and deletes the section if it ends up empty once the key has been removed.

[^virtual]: 本方法通常需要用户覆盖才能生效。
[^const]: 本方法无副作用，不会修改该实例的任何成员变量。
[^vararg]: 本方法除了能接受在此处描述的参数外，还能够继续接受任意数量的参数。
[^constructor]: 本方法用于构造某个类型。
[^static]: 调用本方法无需实例，可直接使用类名进行调用。
[^operator]: 本方法描述的是使用本类型作为左操作数的有效运算符。
[^bitfield]: 这个值是由下列位标志构成位掩码的整数。
[^void]: 无返回值。
