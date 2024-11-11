<!-- ⚠ 请勿编辑本文件 ⚠ -->
<!-- 本文档使用脚本从 WeDot 引擎源码仓库生成。 -->
<!-- 生成脚本：https://github.com/WeDot-Engine/WeDot/tree/master/doc/tools/make_md.py； -->
<!-- 原文件：https://github.com/WeDot-Engine/WeDot/tree/master/doc/classes/EditorImportPlugin.xml。 -->

<div id="_class_editorimportplugin"></div>

# EditorImportPlugin

**继承：** [`ResourceImporter`](class_resourceimporter.md) **<** [`RefCounted`](class_refcounted.md) **<** [`Object`](class_object.md)

Registers a custom resource importer in the editor. Use the class to parse any file and import it as a new resource type.

## 描述

**EditorImportPlugin** s provide a way to extend the editor's resource import functionality. Use them to import resources from custom files or to provide alternatives to the editor's existing importers.

EditorImportPlugins work by associating with specific file extensions and a resource type. See [`_get_recognized_extensions`](class_editorimportplugin.md#class_editorimportplugin_private_method__get_recognized_extensions) and [`_get_resource_type`](class_editorimportplugin.md#class_editorimportplugin_private_method__get_resource_type). They may optionally specify some import presets that affect the import process. EditorImportPlugins are responsible for creating the resources and saving them in the `.godot/imported` directory (see [`ProjectSettings.application/config/use_hidden_project_data_directory`](class_projectsettings.md#class_projectsettings_property_application/config/use_hidden_project_data_directory)).

Below is an example EditorImportPlugin that imports a [`Mesh`](class_mesh.md) from a file with the extension ".special" or ".spec":



```gdscript

    @tool
    extends EditorImportPlugin
    
    func _get_importer_name():
        return "my.special.plugin"
    
    func _get_visible_name():
        return "Special Mesh"
    
    func _get_recognized_extensions():
        return ["special", "spec"]
    
    func _get_save_extension():
        return "mesh"
    
    func _get_resource_type():
        return "Mesh"
    
    func _get_preset_count():
        return 1
    
    func _get_preset_name(preset_index):
        return "Default"
    
    func _get_import_options(path, preset_index):
        return [{"name": "my_option", "default_value": false}]
    
    func _import(source_file, save_path, options, platform_variants, gen_files):
        var file = FileAccess.open(source_file, FileAccess.READ)
        if file == null:
            return FAILED
        var mesh = ArrayMesh.new()
        # Fill the Mesh with data read in "file", left as an exercise to the reader.
    
        var filename = save_path + "." + _get_save_extension()
        return ResourceSaver.save(mesh, filename)
```

```csharp

    using Godot;
    
    public partial class MySpecialPlugin : EditorImportPlugin
    {
        public override string _GetImporterName()
        {
            return "my.special.plugin";
        }
    
        public override string _GetVisibleName()
        {
            return "Special Mesh";
        }
    
        public override string[] _GetRecognizedExtensions()
        {
            return new string[] { "special", "spec" };
        }
    
        public override string _GetSaveExtension()
        {
            return "mesh";
        }
    
        public override string _GetResourceType()
        {
            return "Mesh";
        }
    
        public override int _GetPresetCount()
        {
            return 1;
        }
    
        public override string _GetPresetName(int presetIndex)
        {
            return "Default";
        }
    
        public override Godot.Collections.Array<Godot.Collections.Dictionary> _GetImportOptions(string path, int presetIndex)
        {
            return new Godot.Collections.Array<Godot.Collections.Dictionary>
            {
                new Godot.Collections.Dictionary
                {
                    { "name", "myOption" },
                    { "default_value", false },
                }
            };
        }
    
        public override Error _Import(string sourceFile, string savePath, Godot.Collections.Dictionary options, Godot.Collections.Array<string> platformVariants, Godot.Collections.Array<string> genFiles)
        {
            using var file = FileAccess.Open(sourceFile, FileAccess.ModeFlags.Read);
            if (file.GetError() != Error.Ok)
            {
                return Error.Failed;
            }
    
            var mesh = new ArrayMesh();
            // Fill the Mesh with data read in "file", left as an exercise to the reader.
            string filename = $"{savePath}.{_GetSaveExtension()}";
            return ResourceSaver.Save(mesh, filename);
        }
    }
```



To use **EditorImportPlugin**, register it using the [`EditorPlugin.add_import_plugin`](class_editorplugin.md#class_editorplugin_method_add_import_plugin) method first.





## 方法

|||
|:-:|:--|
| [`bool`](class_bool.md)                                     | [`_can_import_threaded`](class_editorimportplugin.md#class_editorimportplugin_private_method__can_import_threaded) ( ) virtual[^virtual] const[^const]                                                                                                                                                                                                                                              |
| [Array](class_array.md) [`Dictionary`](class_dictionary.md) | [`_get_import_options`](class_editorimportplugin.md#class_editorimportplugin_private_method__get_import_options) ( path: [`String`](class_string.md), preset_index: [`int`](class_int.md) ) virtual[^virtual] const[^const]                                                                                                                                                                         |
| [`int`](class_int.md)                                       | [`_get_import_order`](class_editorimportplugin.md#class_editorimportplugin_private_method__get_import_order) ( ) virtual[^virtual] const[^const]                                                                                                                                                                                                                                                    |
| [`String`](class_string.md)                                 | [`_get_importer_name`](class_editorimportplugin.md#class_editorimportplugin_private_method__get_importer_name) ( ) virtual[^virtual] const[^const]                                                                                                                                                                                                                                                  |
| [`bool`](class_bool.md)                                     | [`_get_option_visibility`](class_editorimportplugin.md#class_editorimportplugin_private_method__get_option_visibility) ( path: [`String`](class_string.md), option_name: [`StringName`](class_stringname.md), options: [`Dictionary`](class_dictionary.md) ) virtual[^virtual] const[^const]                                                                                                        |
| [`int`](class_int.md)                                       | [`_get_preset_count`](class_editorimportplugin.md#class_editorimportplugin_private_method__get_preset_count) ( ) virtual[^virtual] const[^const]                                                                                                                                                                                                                                                    |
| [`String`](class_string.md)                                 | [`_get_preset_name`](class_editorimportplugin.md#class_editorimportplugin_private_method__get_preset_name) ( preset_index: [`int`](class_int.md) ) virtual[^virtual] const[^const]                                                                                                                                                                                                                  |
| [`float`](class_float.md)                                   | [`_get_priority`](class_editorimportplugin.md#class_editorimportplugin_private_method__get_priority) ( ) virtual[^virtual] const[^const]                                                                                                                                                                                                                                                            |
| [`PackedStringArray`](class_packedstringarray.md)           | [`_get_recognized_extensions`](class_editorimportplugin.md#class_editorimportplugin_private_method__get_recognized_extensions) ( ) virtual[^virtual] const[^const]                                                                                                                                                                                                                                  |
| [`String`](class_string.md)                                 | [`_get_resource_type`](class_editorimportplugin.md#class_editorimportplugin_private_method__get_resource_type) ( ) virtual[^virtual] const[^const]                                                                                                                                                                                                                                                  |
| [`String`](class_string.md)                                 | [`_get_save_extension`](class_editorimportplugin.md#class_editorimportplugin_private_method__get_save_extension) ( ) virtual[^virtual] const[^const]                                                                                                                                                                                                                                                |
| [`String`](class_string.md)                                 | [`_get_visible_name`](class_editorimportplugin.md#class_editorimportplugin_private_method__get_visible_name) ( ) virtual[^virtual] const[^const]                                                                                                                                                                                                                                                    |
| [Error](#enum_@globalscope_error)                           | [`_import`](class_editorimportplugin.md#class_editorimportplugin_private_method__import) ( source_file: [`String`](class_string.md), save_path: [`String`](class_string.md), options: [`Dictionary`](class_dictionary.md), platform_variants: [Array](class_array.md) [`String`](class_string.md), gen_files: [Array](class_array.md) [`String`](class_string.md) ) virtual[^virtual] const[^const] |
| [Error](#enum_@globalscope_error)                           | [`append_import_external_resource`](class_editorimportplugin.md#class_editorimportplugin_method_append_import_external_resource) ( path: [`String`](class_string.md), custom_options: [`Dictionary`](class_dictionary.md) = {}, custom_importer: [`String`](class_string.md) = "", generator_parameters: [`Variant`](class_variant.md) = null )                                                     |

<!-- rst-class:: classref-section-separator -->

---

## 方法说明

<div id="_class_editorimportplugin_private_method__can_import_threaded"></div>

[`bool`](class_bool.md) **_can_import_threaded** ( ) virtual[^virtual] const[^const]<div id="class_editorimportplugin_private_method__can_import_threaded"></div>

Tells whether this importer can be run in parallel on threads, or, on the contrary, it's only safe for the editor to call it from the main thread, for one file at a time.

If this method is not overridden, it will return `false` by default.

If this importer's implementation is thread-safe and can be run in parallel, override this with `true` to optimize for concurrency.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorimportplugin_private_method__get_import_options"></div>

[Array](class_array.md) [`Dictionary`](class_dictionary.md) **_get_import_options** ( path: [`String`](class_string.md), preset_index: [`int`](class_int.md) ) virtual[^virtual] const[^const]<div id="class_editorimportplugin_private_method__get_import_options"></div>

Gets the options and default values for the preset at this index. Returns an Array of Dictionaries with the following keys: `name`, `default_value`, `property_hint` (optional), `hint_string` (optional), `usage` (optional).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorimportplugin_private_method__get_import_order"></div>

[`int`](class_int.md) **_get_import_order** ( ) virtual[^virtual] const[^const]<div id="class_editorimportplugin_private_method__get_import_order"></div>

Gets the order of this importer to be run when importing resources. Importers with *lower* import orders will be called first, and higher values will be called later. Use this to ensure the importer runs after the dependencies are already imported. The default import order is `0` unless overridden by a specific importer. See [ImportOrder](#enum_resourceimporter_importorder) for some predefined values.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorimportplugin_private_method__get_importer_name"></div>

[`String`](class_string.md) **_get_importer_name** ( ) virtual[^virtual] const[^const]<div id="class_editorimportplugin_private_method__get_importer_name"></div>

Gets the unique name of the importer.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorimportplugin_private_method__get_option_visibility"></div>

[`bool`](class_bool.md) **_get_option_visibility** ( path: [`String`](class_string.md), option_name: [`StringName`](class_stringname.md), options: [`Dictionary`](class_dictionary.md) ) virtual[^virtual] const[^const]<div id="class_editorimportplugin_private_method__get_option_visibility"></div>

This method can be overridden to hide specific import options if conditions are met. This is mainly useful for hiding options that depend on others if one of them is disabled. For example:



```gdscript

    func _get_option_visibility(option, options):
        # Only show the lossy quality setting if the compression mode is set to "Lossy".
        if option == "compress/lossy_quality" and options.has("compress/mode"):
            return int(options["compress/mode"]) == COMPRESS_LOSSY # This is a constant that you set
    
        return true
```

```csharp

    public void _GetOptionVisibility(string option, Godot.Collections.Dictionary options)
    {
        // Only show the lossy quality setting if the compression mode is set to "Lossy".
        if (option == "compress/lossy_quality" && options.ContainsKey("compress/mode"))
        {
            return (int)options["compress/mode"] == CompressLossy; // This is a constant you set
        }
    
        return true;
    }
```



Returns `true` to make all options always visible.





<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorimportplugin_private_method__get_preset_count"></div>

[`int`](class_int.md) **_get_preset_count** ( ) virtual[^virtual] const[^const]<div id="class_editorimportplugin_private_method__get_preset_count"></div>

Gets the number of initial presets defined by the plugin. Use [`_get_import_options`](class_editorimportplugin.md#class_editorimportplugin_private_method__get_import_options) to get the default options for the preset and [`_get_preset_name`](class_editorimportplugin.md#class_editorimportplugin_private_method__get_preset_name) to get the name of the preset.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorimportplugin_private_method__get_preset_name"></div>

[`String`](class_string.md) **_get_preset_name** ( preset_index: [`int`](class_int.md) ) virtual[^virtual] const[^const]<div id="class_editorimportplugin_private_method__get_preset_name"></div>

Gets the name of the options preset at this index.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorimportplugin_private_method__get_priority"></div>

[`float`](class_float.md) **_get_priority** ( ) virtual[^virtual] const[^const]<div id="class_editorimportplugin_private_method__get_priority"></div>

Gets the priority of this plugin for the recognized extension. Higher priority plugins will be preferred. The default priority is `1.0`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorimportplugin_private_method__get_recognized_extensions"></div>

[`PackedStringArray`](class_packedstringarray.md) **_get_recognized_extensions** ( ) virtual[^virtual] const[^const]<div id="class_editorimportplugin_private_method__get_recognized_extensions"></div>

Gets the list of file extensions to associate with this loader (case-insensitive). e.g. `["obj"]`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorimportplugin_private_method__get_resource_type"></div>

[`String`](class_string.md) **_get_resource_type** ( ) virtual[^virtual] const[^const]<div id="class_editorimportplugin_private_method__get_resource_type"></div>

Gets the Godot resource type associated with this loader. e.g. `"Mesh"` or `"Animation"`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorimportplugin_private_method__get_save_extension"></div>

[`String`](class_string.md) **_get_save_extension** ( ) virtual[^virtual] const[^const]<div id="class_editorimportplugin_private_method__get_save_extension"></div>

Gets the extension used to save this resource in the `.godot/imported` directory (see [`ProjectSettings.application/config/use_hidden_project_data_directory`](class_projectsettings.md#class_projectsettings_property_application/config/use_hidden_project_data_directory)).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorimportplugin_private_method__get_visible_name"></div>

[`String`](class_string.md) **_get_visible_name** ( ) virtual[^virtual] const[^const]<div id="class_editorimportplugin_private_method__get_visible_name"></div>

Gets the name to display in the import window. You should choose this name as a continuation to "Import as", e.g. "Import as Special Mesh".

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorimportplugin_private_method__import"></div>

[Error](#enum_@globalscope_error) **_import** ( source_file: [`String`](class_string.md), save_path: [`String`](class_string.md), options: [`Dictionary`](class_dictionary.md), platform_variants: [Array](class_array.md) [`String`](class_string.md), gen_files: [Array](class_array.md) [`String`](class_string.md) ) virtual[^virtual] const[^const]<div id="class_editorimportplugin_private_method__import"></div>

Imports `source_file` into `save_path` with the import `options` specified. The `platform_variants` and `gen_files` arrays will be modified by this function.

This method must be overridden to do the actual importing work. See this class' description for an example of overriding this method.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorimportplugin_method_append_import_external_resource"></div>

[Error](#enum_@globalscope_error) **append_import_external_resource** ( path: [`String`](class_string.md), custom_options: [`Dictionary`](class_dictionary.md) = {}, custom_importer: [`String`](class_string.md) = "", generator_parameters: [`Variant`](class_variant.md) = null )<div id="class_editorimportplugin_method_append_import_external_resource"></div>

This function can only be called during the [`_import`](class_editorimportplugin.md#class_editorimportplugin_private_method__import) callback and it allows manually importing resources from it. This is useful when the imported file generates external resources that require importing (as example, images). Custom parameters for the ".import" file can be passed via the `custom_options`. Additionally, in cases where multiple importers can handle a file, the `custom_importer` can be specified to force a specific one. This function performs a resource import and returns immediately with a success or error code. `generator_parameters` defines optional extra metadata which will be stored as `generator_parameters` in the `remap` section of the `.import` file, for example to store a md5 hash of the source data.

[^virtual]: 本方法通常需要用户覆盖才能生效。
[^const]: 本方法无副作用，不会修改该实例的任何成员变量。
[^vararg]: 本方法除了能接受在此处描述的参数外，还能够继续接受任意数量的参数。
[^constructor]: 本方法用于构造某个类型。
[^static]: 调用本方法无需实例，可直接使用类名进行调用。
[^operator]: 本方法描述的是使用本类型作为左操作数的有效运算符。
[^bitfield]: 这个值是由下列位标志构成位掩码的整数。
[^void]: 无返回值。
