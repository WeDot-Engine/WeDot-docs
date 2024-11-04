<!-- ⚠ 请勿编辑本文件 ⚠ -->
<!-- 本文档使用脚本从 WeDot 引擎源码仓库生成。 -->
<!-- 生成脚本：https://github.com/WeDot-Engine/WeDot/tree/4.3/doc/tools/make_md.py； -->
<!-- 原文件：https://github.com/WeDot-Engine/WeDot/tree/4.3/doc/classes/Object.xml。 -->

<div id="_class_object"></div>

# Object

**派生：** [`AudioServer`](class_audioserver.md), [`CameraServer`](class_cameraserver.md), [`ClassDB`](class_classdb.md), [`DisplayServer`](class_displayserver.md), [`EditorFileSystemDirectory`](class_editorfilesystemdirectory.md), [`EditorInterface`](class_editorinterface.md), [`EditorPaths`](class_editorpaths.md), [`EditorSelection`](class_editorselection.md), [`EditorUndoRedoManager`](class_editorundoredomanager.md), [`EditorVCSInterface`](class_editorvcsinterface.md), [`Engine`](class_engine.md), [`EngineDebugger`](class_enginedebugger.md), [`FramebufferCacheRD`](class_framebuffercacherd.md), [`GDExtensionManager`](class_gdextensionmanager.md), [`Geometry2D`](class_geometry2d.md), [`Geometry3D`](class_geometry3d.md), [`Input`](class_input.md), [`InputMap`](class_inputmap.md), [`IP`](class_ip.md), [`JavaClassWrapper`](class_javaclasswrapper.md), [`JavaScriptBridge`](class_javascriptbridge.md), [`JNISingleton`](class_jnisingleton.md), [`JSONRPC`](class_jsonrpc.md), [`MainLoop`](class_mainloop.md), [`Marshalls`](class_marshalls.md), [`MovieWriter`](class_moviewriter.md), [`NativeMenu`](class_nativemenu.md), [`NavigationMeshGenerator`](class_navigationmeshgenerator.md), [`NavigationServer2D`](class_navigationserver2d.md), [`NavigationServer3D`](class_navigationserver3d.md), [`Node`](class_node.md), [`OpenXRExtensionWrapperExtension`](class_openxrextensionwrapperextension.md), [`OpenXRInteractionProfileMetadata`](class_openxrinteractionprofilemetadata.md), [`OS`](class_os.md), [`Performance`](class_performance.md), [`PhysicsDirectBodyState2D`](class_physicsdirectbodystate2d.md), [`PhysicsDirectBodyState3D`](class_physicsdirectbodystate3d.md), [`PhysicsDirectSpaceState2D`](class_physicsdirectspacestate2d.md), [`PhysicsDirectSpaceState3D`](class_physicsdirectspacestate3d.md), [`PhysicsServer2D`](class_physicsserver2d.md), [`PhysicsServer2DManager`](class_physicsserver2dmanager.md), [`PhysicsServer3D`](class_physicsserver3d.md), [`PhysicsServer3DManager`](class_physicsserver3dmanager.md), [`PhysicsServer3DRenderingServerHandler`](class_physicsserver3drenderingserverhandler.md), [`ProjectSettings`](class_projectsettings.md), [`RefCounted`](class_refcounted.md), [`RenderData`](class_renderdata.md), [`RenderingDevice`](class_renderingdevice.md), [`RenderingServer`](class_renderingserver.md), [`RenderSceneData`](class_renderscenedata.md), [`ResourceLoader`](class_resourceloader.md), [`ResourceSaver`](class_resourcesaver.md), [`ResourceUID`](class_resourceuid.md), [`ScriptLanguage`](class_scriptlanguage.md), [`TextServerManager`](class_textservermanager.md), [`ThemeDB`](class_themedb.md), [`TileData`](class_tiledata.md), [`Time`](class_time.md), [`TranslationServer`](class_translationserver.md), [`TreeItem`](class_treeitem.md), [`UndoRedo`](class_undoredo.md), [`UniformSetCacheRD`](class_uniformsetcacherd.md), [`WorkerThreadPool`](class_workerthreadpool.md), [`XRServer`](class_xrserver.md), [`XRVRS`](class_xrvrs.md)

Base class for all other classes in the engine.

## 描述

An advanced [`Variant`](class_variant.md) type. All classes in the engine inherit from Object. Each class may define new properties, methods or signals, which are available to all inheriting classes. For example, a [`Sprite2D`](class_sprite2d.md) instance is able to call [`Node.add_child`](#class_node_method_add_child) because it inherits from [`Node`](class_node.md).

You can create new instances, using `Object.new()` in GDScript, or `new GodotObject` in C#.

To delete an Object instance, call [`free`](#class_object_method_free). This is necessary for most classes inheriting Object, because they do not manage memory on their own, and will otherwise cause memory leaks when no longer in use. There are a few classes that perform memory management. For example, [`RefCounted`](class_refcounted.md) (and by extension [`Resource`](class_resource.md)) deletes itself when no longer referenced, and [`Node`](class_node.md) deletes its children when freed.

Objects can have a [`Script`](class_script.md) attached to them. Once the [`Script`](class_script.md) is instantiated, it effectively acts as an extension to the base class, allowing it to define and inherit new properties, methods and signals.

Inside a [`Script`](class_script.md), [`_get_property_list`](#class_object_private_method__get_property_list) may be overridden to customize properties in several ways. This allows them to be available to the editor, display as lists of options, sub-divide into groups, save on disk, etc. Scripting languages offer easier ways to customize properties, such as with the [`@GDScript.@export`](#class_@gdscript_annotation_@export) annotation.

Godot is very dynamic. An object's script, and therefore its properties, methods and signals, can be changed at run-time. Because of this, there can be occasions where, for example, a property required by a method may not exist. To prevent run-time errors, see methods such as [`set`](#class_object_method_set), [`get`](#class_object_method_get), [`call`](#class_object_method_call), [`has_method`](#class_object_method_has_method), [`has_signal`](#class_object_method_has_signal), etc. Note that these methods are **much** slower than direct references.

In GDScript, you can also check if a given property, method, or signal name exists in an object with the `in` operator:

```

    var node = Node.new()
    print("name" in node)         # Prints true
    print("get_parent" in node)   # Prints true
    print("tree_entered" in node) # Prints true
    print("unknown" in node)      # Prints false
```

Notifications are [`int`](class_int.md) constants commonly sent and received by objects. For example, on every rendered frame, the [`SceneTree`](class_scenetree.md) notifies nodes inside the tree with a [`Node.NOTIFICATION_PROCESS`](#class_node_constant_notification_process). The nodes receive it and may call [`Node._process`](#class_node_private_method__process) to update. To make use of notifications, see [`notification`](#class_object_method_notification) and [`_notification`](#class_object_private_method__notification).

Lastly, every object can also contain metadata (data about data). [`set_meta`](#class_object_method_set_meta) can be useful to store information that the object itself does not depend on. To keep your code clean, making excessive use of metadata is discouraged.

 **Note:** Unlike references to a [`RefCounted`](class_refcounted.md), references to an object stored in a variable can become invalid without being set to `null`. To check if an object has been deleted, do *not* compare it against `null`. Instead, use [`@GlobalScope.is_instance_valid`](#class_@globalscope_method_is_instance_valid). It's also recommended to inherit from [`RefCounted`](class_refcounted.md) for classes storing data instead of **Object**.

 **Note:** The `script` is not exposed like most properties. To set or get an object's [`Script`](class_script.md) in code, use [`set_script`](#class_object_method_set_script) and [`get_script`](#class_object_method_get_script), respectively.



## 方法

| [`Variant`](class_variant.md)                               | [`_get`](#class_object_private_method__get) ( property: [`StringName`](class_stringname.md) ) virtual[^virtual]                                                                                                                       |
| [Array](class_array.md) [`Dictionary`](class_dictionary.md) | [`_get_property_list`](#class_object_private_method__get_property_list) ( ) virtual[^virtual]                                                                                                                                         |
| `void`                                                      | [`_init`](#class_object_private_method__init) ( ) virtual[^virtual]                                                                                                                                                                   |
| `void`                                                      | [`_notification`](#class_object_private_method__notification) ( what: [`int`](class_int.md) ) virtual[^virtual]                                                                                                                       |
| [`bool`](class_bool.md)                                     | [`_property_can_revert`](#class_object_private_method__property_can_revert) ( property: [`StringName`](class_stringname.md) ) virtual[^virtual]                                                                                       |
| [`Variant`](class_variant.md)                               | [`_property_get_revert`](#class_object_private_method__property_get_revert) ( property: [`StringName`](class_stringname.md) ) virtual[^virtual]                                                                                       |
| [`bool`](class_bool.md)                                     | [`_set`](#class_object_private_method__set) ( property: [`StringName`](class_stringname.md), value: [`Variant`](class_variant.md) ) virtual[^virtual]                                                                                 |
| [`String`](class_string.md)                                 | [`_to_string`](#class_object_private_method__to_string) ( ) virtual[^virtual]                                                                                                                                                         |
| `void`                                                      | [`_validate_property`](#class_object_private_method__validate_property) ( property: [`Dictionary`](class_dictionary.md) ) virtual[^virtual]                                                                                           |
| `void`                                                      | [`add_user_signal`](#class_object_method_add_user_signal) ( signal: [`String`](class_string.md), arguments: [`Array`](class_array.md) = [] )                                                                                          |
| [`Variant`](class_variant.md)                               | [`call`](#class_object_method_call) ( method: [`StringName`](class_stringname.md), ... ) vararg[^vararg]                                                                                                                              |
| [`Variant`](class_variant.md)                               | [`call_deferred`](#class_object_method_call_deferred) ( method: [`StringName`](class_stringname.md), ... ) vararg[^vararg]                                                                                                            |
| [`Variant`](class_variant.md)                               | [`callv`](#class_object_method_callv) ( method: [`StringName`](class_stringname.md), arg_array: [`Array`](class_array.md) )                                                                                                           |
| [`bool`](class_bool.md)                                     | [`can_translate_messages`](#class_object_method_can_translate_messages) ( ) const[^const]                                                                                                                                             |
| `void`                                                      | [`cancel_free`](#class_object_method_cancel_free) ( )                                                                                                                                                                                 |
| [Error](#enum_@globalscope_error)                           | [`connect`](#class_object_method_connect) ( signal: [`StringName`](class_stringname.md), callable: [`Callable`](class_callable.md), flags: [`int`](class_int.md) = 0 )                                                                |
| `void`                                                      | [`disconnect`](#class_object_method_disconnect) ( signal: [`StringName`](class_stringname.md), callable: [`Callable`](class_callable.md) )                                                                                            |
| [Error](#enum_@globalscope_error)                           | [`emit_signal`](#class_object_method_emit_signal) ( signal: [`StringName`](class_stringname.md), ... ) vararg[^vararg]                                                                                                                |
| `void`                                                      | [`free`](#class_object_method_free) ( )                                                                                                                                                                                               |
| [`Variant`](class_variant.md)                               | [`get`](#class_object_method_get) ( property: [`StringName`](class_stringname.md) ) const[^const]                                                                                                                                     |
| [`String`](class_string.md)                                 | [`get_class`](#class_object_method_get_class) ( ) const[^const]                                                                                                                                                                       |
| [Array](class_array.md) [`Dictionary`](class_dictionary.md) | [`get_incoming_connections`](#class_object_method_get_incoming_connections) ( ) const[^const]                                                                                                                                         |
| [`Variant`](class_variant.md)                               | [`get_indexed`](#class_object_method_get_indexed) ( property_path: [`NodePath`](class_nodepath.md) ) const[^const]                                                                                                                    |
| [`int`](class_int.md)                                       | [`get_instance_id`](#class_object_method_get_instance_id) ( ) const[^const]                                                                                                                                                           |
| [`Variant`](class_variant.md)                               | [`get_meta`](#class_object_method_get_meta) ( name: [`StringName`](class_stringname.md), default: [`Variant`](class_variant.md) = null ) const[^const]                                                                                |
| [Array](class_array.md) [`StringName`](class_stringname.md) | [`get_meta_list`](#class_object_method_get_meta_list) ( ) const[^const]                                                                                                                                                               |
| [`int`](class_int.md)                                       | [`get_method_argument_count`](#class_object_method_get_method_argument_count) ( method: [`StringName`](class_stringname.md) ) const[^const]                                                                                           |
| [Array](class_array.md) [`Dictionary`](class_dictionary.md) | [`get_method_list`](#class_object_method_get_method_list) ( ) const[^const]                                                                                                                                                           |
| [Array](class_array.md) [`Dictionary`](class_dictionary.md) | [`get_property_list`](#class_object_method_get_property_list) ( ) const[^const]                                                                                                                                                       |
| [`Variant`](class_variant.md)                               | [`get_script`](#class_object_method_get_script) ( ) const[^const]                                                                                                                                                                     |
| [Array](class_array.md) [`Dictionary`](class_dictionary.md) | [`get_signal_connection_list`](#class_object_method_get_signal_connection_list) ( signal: [`StringName`](class_stringname.md) ) const[^const]                                                                                         |
| [Array](class_array.md) [`Dictionary`](class_dictionary.md) | [`get_signal_list`](#class_object_method_get_signal_list) ( ) const[^const]                                                                                                                                                           |
| [`bool`](class_bool.md)                                     | [`has_meta`](#class_object_method_has_meta) ( name: [`StringName`](class_stringname.md) ) const[^const]                                                                                                                               |
| [`bool`](class_bool.md)                                     | [`has_method`](#class_object_method_has_method) ( method: [`StringName`](class_stringname.md) ) const[^const]                                                                                                                         |
| [`bool`](class_bool.md)                                     | [`has_signal`](#class_object_method_has_signal) ( signal: [`StringName`](class_stringname.md) ) const[^const]                                                                                                                         |
| [`bool`](class_bool.md)                                     | [`has_user_signal`](#class_object_method_has_user_signal) ( signal: [`StringName`](class_stringname.md) ) const[^const]                                                                                                               |
| [`bool`](class_bool.md)                                     | [`is_blocking_signals`](#class_object_method_is_blocking_signals) ( ) const[^const]                                                                                                                                                   |
| [`bool`](class_bool.md)                                     | [`is_class`](#class_object_method_is_class) ( class: [`String`](class_string.md) ) const[^const]                                                                                                                                      |
| [`bool`](class_bool.md)                                     | [`is_connected`](#class_object_method_is_connected) ( signal: [`StringName`](class_stringname.md), callable: [`Callable`](class_callable.md) ) const[^const]                                                                          |
| [`bool`](class_bool.md)                                     | [`is_queued_for_deletion`](#class_object_method_is_queued_for_deletion) ( ) const[^const]                                                                                                                                             |
| `void`                                                      | [`notification`](#class_object_method_notification) ( what: [`int`](class_int.md), reversed: [`bool`](class_bool.md) = false )                                                                                                        |
| `void`                                                      | [`notify_property_list_changed`](#class_object_method_notify_property_list_changed) ( )                                                                                                                                               |
| [`bool`](class_bool.md)                                     | [`property_can_revert`](#class_object_method_property_can_revert) ( property: [`StringName`](class_stringname.md) ) const[^const]                                                                                                     |
| [`Variant`](class_variant.md)                               | [`property_get_revert`](#class_object_method_property_get_revert) ( property: [`StringName`](class_stringname.md) ) const[^const]                                                                                                     |
| `void`                                                      | [`remove_meta`](#class_object_method_remove_meta) ( name: [`StringName`](class_stringname.md) )                                                                                                                                       |
| `void`                                                      | [`remove_user_signal`](#class_object_method_remove_user_signal) ( signal: [`StringName`](class_stringname.md) )                                                                                                                       |
| `void`                                                      | [`set`](#class_object_method_set) ( property: [`StringName`](class_stringname.md), value: [`Variant`](class_variant.md) )                                                                                                             |
| `void`                                                      | [`set_block_signals`](#class_object_method_set_block_signals) ( enable: [`bool`](class_bool.md) )                                                                                                                                     |
| `void`                                                      | [`set_deferred`](#class_object_method_set_deferred) ( property: [`StringName`](class_stringname.md), value: [`Variant`](class_variant.md) )                                                                                           |
| `void`                                                      | [`set_indexed`](#class_object_method_set_indexed) ( property_path: [`NodePath`](class_nodepath.md), value: [`Variant`](class_variant.md) )                                                                                            |
| `void`                                                      | [`set_message_translation`](#class_object_method_set_message_translation) ( enable: [`bool`](class_bool.md) )                                                                                                                         |
| `void`                                                      | [`set_meta`](#class_object_method_set_meta) ( name: [`StringName`](class_stringname.md), value: [`Variant`](class_variant.md) )                                                                                                       |
| `void`                                                      | [`set_script`](#class_object_method_set_script) ( script: [`Variant`](class_variant.md) )                                                                                                                                             |
| [`String`](class_string.md)                                 | [`to_string`](#class_object_method_to_string) ( )                                                                                                                                                                                     |
| [`String`](class_string.md)                                 | [`tr`](#class_object_method_tr) ( message: [`StringName`](class_stringname.md), context: [`StringName`](class_stringname.md) = &"" ) const[^const]                                                                                    |
| [`String`](class_string.md)                                 | [`tr_n`](#class_object_method_tr_n) ( message: [`StringName`](class_stringname.md), plural_message: [`StringName`](class_stringname.md), n: [`int`](class_int.md), context: [`StringName`](class_stringname.md) = &"" ) const[^const] |

<!-- rst-class:: classref-section-separator -->

---

## 信号

<div id="_class_class_object_signal_property_list_changed"></div>

**property_list_changed** ( ) <div id="class_object_signal_property_list_changed"></div>

Emitted when [`notify_property_list_changed`](#class_object_method_notify_property_list_changed) is called.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_class_object_signal_script_changed"></div>

**script_changed** ( ) <div id="class_object_signal_script_changed"></div>

Emitted when the object's script is changed.

 **Note:** When this signal is emitted, the new script is not initialized yet. If you need to access the new script, defer connections to this signal with [`CONNECT_DEFERRED`](#class_object_constant_connect_deferred).

<!-- rst-class:: classref-section-separator -->

---

## 枚举

<div id="_class_enum_object_connectflags"></div>

enum **ConnectFlags**: <div id="enum_object_connectflags"></div>

<div id="_class_object_constant_connect_deferred"></div>

[ConnectFlags](#enum_object_connectflags) **CONNECT_DEFERRED** = ``1``

Deferred connections trigger their [`Callable`](class_callable.md) s on idle time (at the end of the frame), rather than instantly.

<div id="_class_object_constant_connect_persist"></div>

[ConnectFlags](#enum_object_connectflags) **CONNECT_PERSIST** = ``2``

Persisting connections are stored when the object is serialized (such as when using [`PackedScene.pack`](#class_packedscene_method_pack)). In the editor, connections created through the Node dock are always persisting.

<div id="_class_object_constant_connect_one_shot"></div>

[ConnectFlags](#enum_object_connectflags) **CONNECT_ONE_SHOT** = ``4``

One-shot connections disconnect themselves after emission.

<div id="_class_object_constant_connect_reference_counted"></div>

[ConnectFlags](#enum_object_connectflags) **CONNECT_REFERENCE_COUNTED** = ``8``

Reference-counted connections can be assigned to the same [`Callable`](class_callable.md) multiple times. Each disconnection decreases the internal counter. The signal fully disconnects only when the counter reaches 0.

<!-- rst-class:: classref-section-separator -->

---

## 常量

<div id="_class_object_constant_notification_postinitialize"></div>

**NOTIFICATION_POSTINITIALIZE** = ``0`` <div id="class_object_constant_notification_postinitialize"></div>

Notification received when the object is initialized, before its script is attached. Used internally.

<div id="_class_object_constant_notification_predelete"></div>

**NOTIFICATION_PREDELETE** = ``1`` <div id="class_object_constant_notification_predelete"></div>

Notification received when the object is about to be deleted. Can act as the deconstructor of some programming languages.

<div id="_class_object_constant_notification_extension_reloaded"></div>

**NOTIFICATION_EXTENSION_RELOADED** = ``2`` <div id="class_object_constant_notification_extension_reloaded"></div>

Notification received when the object finishes hot reloading. This notification is only sent for extensions classes and derived.

<!-- rst-class:: classref-section-separator -->

---

## 方法说明

<div id="_class_object_private_method__get"></div>

[`Variant`](class_variant.md) **_get** ( property: [`StringName`](class_stringname.md) ) virtual[^virtual]<div id="class_object_private_method__get"></div>

Override this method to customize the behavior of [`get`](#class_object_method_get). Should return the given `property`'s value, or `null` if the `property` should be handled normally.

Combined with [`_set`](#class_object_private_method__set) and [`_get_property_list`](#class_object_private_method__get_property_list), this method allows defining custom properties, which is particularly useful for editor plugins. Note that a property must be present in [`get_property_list`](#class_object_method_get_property_list), otherwise this method will not be called.



```gdscript

    func _get(property):
        if property == "fake_property":
            print("Getting my property!")
            return 4
    
    func _get_property_list():
        return [
            { "name": "fake_property", "type": TYPE_INT }
        ]
```

```csharp

    public override Variant _Get(StringName property)
    {
        if (property == "FakeProperty")
        {
            GD.Print("Getting my property!");
            return 4;
        }
        return default;
    }
    
    public override Godot.Collections.Array<Godot.Collections.Dictionary> _GetPropertyList()
    {
        return new Godot.Collections.Array<Godot.Collections.Dictionary>()
        {
            new Godot.Collections.Dictionary()
            {
                { "name", "FakeProperty" },
                { "type", (int)Variant.Type.Int }
            }
        };
    }
```







<!-- rst-class:: classref-item-separator -->

---

<div id="_class_object_private_method__get_property_list"></div>

[Array](class_array.md) [`Dictionary`](class_dictionary.md) **_get_property_list** ( ) virtual[^virtual]<div id="class_object_private_method__get_property_list"></div>

Override this method to provide a custom list of additional properties to handle by the engine.

Should return a property list, as an [`Array`](class_array.md) of dictionaries. The result is added to the array of [`get_property_list`](#class_object_method_get_property_list), and should be formatted in the same way. Each [`Dictionary`](class_dictionary.md) must at least contain the `name` and `type` entries.

You can use [`_property_can_revert`](#class_object_private_method__property_can_revert) and [`_property_get_revert`](#class_object_private_method__property_get_revert) to customize the default values of the properties added by this method.

The example below displays a list of numbers shown as words going from `ZERO` to `FIVE`, with `number_count` controlling the size of the list:



```gdscript

    @tool
    extends Node
    
    @export var number_count = 3:
        set(nc):
            number_count = nc
            numbers.resize(number_count)
            notify_property_list_changed()
    
    var numbers = PackedInt32Array([0, 0, 0])
    
    func _get_property_list():
        var properties = []
    
        for i in range(number_count):
            properties.append({
                "name": "number_%d" % i,
                "type": TYPE_INT,
                "hint": PROPERTY_HINT_ENUM,
                "hint_string": "ZERO,ONE,TWO,THREE,FOUR,FIVE",
            })
    
        return properties
    
    func _get(property):
        if property.begins_with("number_"):
            var index = property.get_slice("_", 1).to_int()
            return numbers[index]
    
    func _set(property, value):
        if property.begins_with("number_"):
            var index = property.get_slice("_", 1).to_int()
            numbers[index] = value
            return true
        return false
```

```csharp

    [Tool]
    public partial class MyNode : Node
    {
        private int _numberCount;
    
        [Export]
        public int NumberCount
        {
            get => _numberCount;
            set
            {
                _numberCount = value;
                _numbers.Resize(_numberCount);
                NotifyPropertyListChanged();
            }
        }
    
        private Godot.Collections.Array<int> _numbers = new();
    
        public override Godot.Collections.Array<Godot.Collections.Dictionary> _GetPropertyList()
        {
            var properties = new Godot.Collections.Array<Godot.Collections.Dictionary>();
    
            for (int i = 0; i < _numberCount; i++)
            {
                properties.Add(new Godot.Collections.Dictionary()
                {
                    { "name", $"number_{i}" },
                    { "type", (int)Variant.Type.Int },
                    { "hint", (int)PropertyHint.Enum },
                    { "hint_string", "Zero,One,Two,Three,Four,Five" },
                });
            }
    
            return properties;
        }
    
        public override Variant _Get(StringName property)
        {
            string propertyName = property.ToString();
            if (propertyName.StartsWith("number_"))
            {
                int index = int.Parse(propertyName.Substring("number_".Length));
                return _numbers[index];
            }
            return default;
        }
    
        public override bool _Set(StringName property, Variant value)
        {
            string propertyName = property.ToString();
            if (propertyName.StartsWith("number_"))
            {
                int index = int.Parse(propertyName.Substring("number_".Length));
                _numbers[index] = value.As<int>();
                return true;
            }
            return false;
        }
    }
```



 **Note:** This method is intended for advanced purposes. For most common use cases, the scripting languages offer easier ways to handle properties. See [`@GDScript.@export`](#class_@gdscript_annotation_@export), [`@GDScript.@export_enum`](#class_@gdscript_annotation_@export_enum), [`@GDScript.@export_group`](#class_@gdscript_annotation_@export_group), etc. If you want to customize exported properties, use [`_validate_property`](#class_object_private_method__validate_property).

 **Note:** If the object's script is not [`@GDScript.@tool`](#class_@gdscript_annotation_@tool), this method will not be called in the editor.





<!-- rst-class:: classref-item-separator -->

---

<div id="_class_object_private_method__init"></div>

`void` **_init** ( ) virtual[^virtual]<div id="class_object_private_method__init"></div>

Called when the object's script is instantiated, oftentimes after the object is initialized in memory (through `Object.new()` in GDScript, or `new GodotObject` in C#). It can be also defined to take in parameters. This method is similar to a constructor in most programming languages.

 **Note:** If [`_init`](#class_object_private_method__init) is defined with *required* parameters, the Object with script may only be created directly. If any other means (such as [`PackedScene.instantiate`](#class_packedscene_method_instantiate) or [`Node.duplicate`](#class_node_method_duplicate)) are used, the script's initialization will fail.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_object_private_method__notification"></div>

`void` **_notification** ( what: [`int`](class_int.md) ) virtual[^virtual]<div id="class_object_private_method__notification"></div>

Called when the object receives a notification, which can be identified in `what` by comparing it with a constant. See also [`notification`](#class_object_method_notification).



```gdscript

    func _notification(what):
        if what == NOTIFICATION_PREDELETE:
            print("Goodbye!")
```

```csharp

    public override void _Notification(int what)
    {
        if (what == NotificationPredelete)
        {
            GD.Print("Goodbye!");
        }
    }
```



 **Note:** The base **Object** defines a few notifications ([`NOTIFICATION_POSTINITIALIZE`](#class_object_constant_notification_postinitialize) and [`NOTIFICATION_PREDELETE`](#class_object_constant_notification_predelete)). Inheriting classes such as [`Node`](class_node.md) define a lot more notifications, which are also received by this method.





<!-- rst-class:: classref-item-separator -->

---

<div id="_class_object_private_method__property_can_revert"></div>

[`bool`](class_bool.md) **_property_can_revert** ( property: [`StringName`](class_stringname.md) ) virtual[^virtual]<div id="class_object_private_method__property_can_revert"></div>

Override this method to customize the given `property`'s revert behavior. Should return `true` if the `property` has a custom default value and is revertible in the Inspector dock. Use [`_property_get_revert`](#class_object_private_method__property_get_revert) to specify the `property`'s default value.

 **Note:** This method must return consistently, regardless of the current value of the `property`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_object_private_method__property_get_revert"></div>

[`Variant`](class_variant.md) **_property_get_revert** ( property: [`StringName`](class_stringname.md) ) virtual[^virtual]<div id="class_object_private_method__property_get_revert"></div>

Override this method to customize the given `property`'s revert behavior. Should return the default value for the `property`. If the default value differs from the `property`'s current value, a revert icon is displayed in the Inspector dock.

 **Note:** [`_property_can_revert`](#class_object_private_method__property_can_revert) must also be overridden for this method to be called.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_object_private_method__set"></div>

[`bool`](class_bool.md) **_set** ( property: [`StringName`](class_stringname.md), value: [`Variant`](class_variant.md) ) virtual[^virtual]<div id="class_object_private_method__set"></div>

Override this method to customize the behavior of [`set`](#class_object_method_set). Should set the `property` to `value` and return `true`, or `false` if the `property` should be handled normally. The *exact* way to set the `property` is up to this method's implementation.

Combined with [`_get`](#class_object_private_method__get) and [`_get_property_list`](#class_object_private_method__get_property_list), this method allows defining custom properties, which is particularly useful for editor plugins. Note that a property *must* be present in [`get_property_list`](#class_object_method_get_property_list), otherwise this method will not be called.



```gdscript

    var internal_data = {}
    
    func _set(property, value):
        if property == "fake_property":
            # Storing the value in the fake property.
            internal_data["fake_property"] = value
            return true
        return false
    
    func _get_property_list():
        return [
            { "name": "fake_property", "type": TYPE_INT }
        ]
```

```csharp

    private Godot.Collections.Dictionary _internalData = new Godot.Collections.Dictionary();
    
    public override bool _Set(StringName property, Variant value)
    {
        if (property == "FakeProperty")
        {
            // Storing the value in the fake property.
            _internalData["FakeProperty"] = value;
            return true;
        }
    
        return false;
    }
    
    public override Godot.Collections.Array<Godot.Collections.Dictionary> _GetPropertyList()
    {
        return new Godot.Collections.Array<Godot.Collections.Dictionary>()
        {
            new Godot.Collections.Dictionary()
            {
                { "name", "FakeProperty" },
                { "type", (int)Variant.Type.Int }
            }
        };
    }
```







<!-- rst-class:: classref-item-separator -->

---

<div id="_class_object_private_method__to_string"></div>

[`String`](class_string.md) **_to_string** ( ) virtual[^virtual]<div id="class_object_private_method__to_string"></div>

Override this method to customize the return value of [`to_string`](#class_object_method_to_string), and therefore the object's representation as a [`String`](class_string.md).

```

    func _to_string():
        return "Welcome to Godot 4!"
    
    func _init():
        print(self)       # Prints Welcome to Godot 4!"
        var a = str(self) # a is "Welcome to Godot 4!"
```



<!-- rst-class:: classref-item-separator -->

---

<div id="_class_object_private_method__validate_property"></div>

`void` **_validate_property** ( property: [`Dictionary`](class_dictionary.md) ) virtual[^virtual]<div id="class_object_private_method__validate_property"></div>

Override this method to customize existing properties. Every property info goes through this method, except properties added with [`_get_property_list`](#class_object_private_method__get_property_list). The dictionary contents is the same as in [`_get_property_list`](#class_object_private_method__get_property_list).



```gdscript

    @tool
    extends Node
    
    @export var is_number_editable: bool:
        set(value):
            is_number_editable = value
            notify_property_list_changed()
    @export var number: int
    
    func _validate_property(property: Dictionary):
        if property.name == "number" and not is_number_editable:
            property.usage |= PROPERTY_USAGE_READ_ONLY
```

```csharp

    [Tool]
    public partial class MyNode : Node
    {
        private bool _isNumberEditable;
    
        [Export]
        public bool IsNumberEditable
        {
            get => _isNumberEditable;
            set
            {
                _isNumberEditable = value;
                NotifyPropertyListChanged();
            }
        }
    
        [Export]
        public int Number { get; set; }
    
        public override void _ValidateProperty(Godot.Collections.Dictionary property)
        {
            if (property["name"].AsStringName() == PropertyName.Number && !IsNumberEditable)
            {
                var usage = property["usage"].As<PropertyUsageFlags>() | PropertyUsageFlags.ReadOnly;
                property["usage"] = (int)usage;
            }
        }
    }
```







<!-- rst-class:: classref-item-separator -->

---

<div id="_class_object_method_add_user_signal"></div>

`void` **add_user_signal** ( signal: [`String`](class_string.md), arguments: [`Array`](class_array.md) = [] )<div id="class_object_method_add_user_signal"></div>

Adds a user-defined `signal`. Optional arguments for the signal can be added as an [`Array`](class_array.md) of dictionaries, each defining a `name` [`String`](class_string.md) and a `type` [`int`](class_int.md) (see [Variant.Type](#enum_@globalscope_variant.type)). See also [`has_user_signal`](#class_object_method_has_user_signal) and [`remove_user_signal`](#class_object_method_remove_user_signal).



```gdscript

    add_user_signal("hurt", [
        { "name": "damage", "type": TYPE_INT },
        { "name": "source", "type": TYPE_OBJECT }
    ])
```

```csharp

    AddUserSignal("Hurt", new Godot.Collections.Array()
    {
        new Godot.Collections.Dictionary()
        {
            { "name", "damage" },
            { "type", (int)Variant.Type.Int }
        },
        new Godot.Collections.Dictionary()
        {
            { "name", "source" },
            { "type", (int)Variant.Type.Object }
        }
    });
```







<!-- rst-class:: classref-item-separator -->

---

<div id="_class_object_method_call"></div>

[`Variant`](class_variant.md) **call** ( method: [`StringName`](class_stringname.md), ... ) vararg[^vararg]<div id="class_object_method_call"></div>

Calls the `method` on the object and returns the result. This method supports a variable number of arguments, so parameters can be passed as a comma separated list.



```gdscript

    var node = Node3D.new()
    node.call("rotate", Vector3(1.0, 0.0, 0.0), 1.571)
```

```csharp

    var node = new Node3D();
    node.Call(Node3D.MethodName.Rotate, new Vector3(1f, 0f, 0f), 1.571f);
```



 **Note:** In C#, `method` must be in snake_case when referring to built-in Godot methods. Prefer using the names exposed in the `MethodName` class to avoid allocating a new [`StringName`](class_stringname.md) on each call.





<!-- rst-class:: classref-item-separator -->

---

<div id="_class_object_method_call_deferred"></div>

[`Variant`](class_variant.md) **call_deferred** ( method: [`StringName`](class_stringname.md), ... ) vararg[^vararg]<div id="class_object_method_call_deferred"></div>

Calls the `method` on the object during idle time. Always returns null, **not** the method's result.

Idle time happens mainly at the end of process and physics frames. In it, deferred calls will be run until there are none left, which means you can defer calls from other deferred calls and they'll still be run in the current idle time cycle. This means you should not call a method deferred from itself (or from a method called by it), as this causes infinite recursion the same way as if you had called the method directly.

This method supports a variable number of arguments, so parameters can be passed as a comma separated list.



```gdscript

    var node = Node3D.new()
    node.call_deferred("rotate", Vector3(1.0, 0.0, 0.0), 1.571)
```

```csharp

    var node = new Node3D();
    node.CallDeferred(Node3D.MethodName.Rotate, new Vector3(1f, 0f, 0f), 1.571f);
```



See also [`Callable.call_deferred`](#class_callable_method_call_deferred).

 **Note:** In C#, `method` must be in snake_case when referring to built-in Godot methods. Prefer using the names exposed in the `MethodName` class to avoid allocating a new [`StringName`](class_stringname.md) on each call.

 **Note:** If you're looking to delay the function call by a frame, refer to the [`SceneTree.process_frame`](#class_scenetree_signal_process_frame) and [`SceneTree.physics_frame`](#class_scenetree_signal_physics_frame) signals.

```

    var node = Node3D.new()
    # Make a Callable and bind the arguments to the node's rotate() call.
    var callable = node.rotate.bind(Vector3(1.0, 0.0, 0.0), 1.571)
    # Connect the callable to the process_frame signal, so it gets called in the next process frame.
    # CONNECT_ONE_SHOT makes sure it only gets called once instead of every frame.
    get_tree().process_frame.connect(callable, CONNECT_ONE_SHOT)
```







<!-- rst-class:: classref-item-separator -->

---

<div id="_class_object_method_callv"></div>

[`Variant`](class_variant.md) **callv** ( method: [`StringName`](class_stringname.md), arg_array: [`Array`](class_array.md) )<div id="class_object_method_callv"></div>

Calls the `method` on the object and returns the result. Unlike [`call`](#class_object_method_call), this method expects all parameters to be contained inside `arg_array`.



```gdscript

    var node = Node3D.new()
    node.callv("rotate", [Vector3(1.0, 0.0, 0.0), 1.571])
```

```csharp

    var node = new Node3D();
    node.Callv(Node3D.MethodName.Rotate, new Godot.Collections.Array { new Vector3(1f, 0f, 0f), 1.571f });
```



 **Note:** In C#, `method` must be in snake_case when referring to built-in Godot methods. Prefer using the names exposed in the `MethodName` class to avoid allocating a new [`StringName`](class_stringname.md) on each call.





<!-- rst-class:: classref-item-separator -->

---

<div id="_class_object_method_can_translate_messages"></div>

[`bool`](class_bool.md) **can_translate_messages** ( ) const[^const]<div id="class_object_method_can_translate_messages"></div>

Returns `true` if the object is allowed to translate messages with [`tr`](#class_object_method_tr) and [`tr_n`](#class_object_method_tr_n). See also [`set_message_translation`](#class_object_method_set_message_translation).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_object_method_cancel_free"></div>

`void` **cancel_free** ( )<div id="class_object_method_cancel_free"></div>

If this method is called during [`NOTIFICATION_PREDELETE`](#class_object_constant_notification_predelete), this object will reject being freed and will remain allocated. This is mostly an internal function used for error handling to avoid the user from freeing objects when they are not intended to.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_object_method_connect"></div>

[Error](#enum_@globalscope_error) **connect** ( signal: [`StringName`](class_stringname.md), callable: [`Callable`](class_callable.md), flags: [`int`](class_int.md) = 0 )<div id="class_object_method_connect"></div>

Connects a `signal` by name to a `callable`. Optional `flags` can be also added to configure the connection's behavior (see [ConnectFlags](#enum_object_connectflags) constants).

A signal can only be connected once to the same [`Callable`](class_callable.md). If the signal is already connected, this method returns [`@GlobalScope.ERR_INVALID_PARAMETER`](#class_@globalscope_constant_err_invalid_parameter) and pushes an error message, unless the signal is connected with [`CONNECT_REFERENCE_COUNTED`](#class_object_constant_connect_reference_counted). To prevent this, use [`is_connected`](#class_object_method_is_connected) first to check for existing connections.

If the `callable`'s object is freed, the connection will be lost.

 **Examples with recommended syntax:** 

Connecting signals is one of the most common operations in Godot and the API gives many options to do so, which are described further down. The code block below shows the recommended approach.



```gdscript

    func _ready():
        var button = Button.new()
        # `button_down` here is a Signal variant type, and we thus call the Signal.connect() method, not Object.connect().
        # See discussion below for a more in-depth overview of the API.
        button.button_down.connect(_on_button_down)
    
        # This assumes that a `Player` class exists, which defines a `hit` signal.
        var player = Player.new()
        # We use Signal.connect() again, and we also use the Callable.bind() method,
        # which returns a new Callable with the parameter binds.
        player.hit.connect(_on_player_hit.bind("sword", 100))
    
    func _on_button_down():
        print("Button down!")
    
    func _on_player_hit(weapon_type, damage):
        print("Hit with weapon %s for %d damage." % [weapon_type, damage])
```

```csharp

    public override void _Ready()
    {
        var button = new Button();
        // C# supports passing signals as events, so we can use this idiomatic construct:
        button.ButtonDown += OnButtonDown;
    
        // This assumes that a `Player` class exists, which defines a `Hit` signal.
        var player = new Player();
        // We can use lambdas when we need to bind additional parameters.
        player.Hit += () => OnPlayerHit("sword", 100);
    }
    
    private void OnButtonDown()
    {
        GD.Print("Button down!");
    }
    
    private void OnPlayerHit(string weaponType, int damage)
    {
        GD.Print($"Hit with weapon {weaponType} for {damage} damage.");
    }
```



 ** `Object.connect()` or `Signal.connect()`?** 

As seen above, the recommended method to connect signals is not [`connect`](#class_object_method_connect). The code block below shows the four options for connecting signals, using either this legacy method or the recommended [`Signal.connect`](#class_signal_method_connect), and using either an implicit [`Callable`](class_callable.md) or a manually defined one.



```gdscript

    func _ready():
        var button = Button.new()
        # Option 1: Object.connect() with an implicit Callable for the defined function.
        button.connect("button_down", _on_button_down)
        # Option 2: Object.connect() with a constructed Callable using a target object and method name.
        button.connect("button_down", Callable(self, "_on_button_down"))
        # Option 3: Signal.connect() with an implicit Callable for the defined function.
        button.button_down.connect(_on_button_down)
        # Option 4: Signal.connect() with a constructed Callable using a target object and method name.
        button.button_down.connect(Callable(self, "_on_button_down"))
    
    func _on_button_down():
        print("Button down!")
```

```csharp

    public override void _Ready()
    {
        var button = new Button();
        // Option 1: In C#, we can use signals as events and connect with this idiomatic syntax:
        button.ButtonDown += OnButtonDown;
        // Option 2: GodotObject.Connect() with a constructed Callable from a method group.
        button.Connect(Button.SignalName.ButtonDown, Callable.From(OnButtonDown));
        // Option 3: GodotObject.Connect() with a constructed Callable using a target object and method name.
        button.Connect(Button.SignalName.ButtonDown, new Callable(this, MethodName.OnButtonDown));
    }
    
    private void OnButtonDown()
    {
        GD.Print("Button down!");
    }
```



While all options have the same outcome (`button`'s [`BaseButton.button_down`](#class_basebutton_signal_button_down) signal will be connected to `_on_button_down`), **option 3** offers the best validation: it will print a compile-time error if either the `button_down` [`Signal`](class_signal.md) or the `_on_button_down` [`Callable`](class_callable.md) are not defined. On the other hand, **option 2** only relies on string names and will only be able to validate either names at runtime: it will print a runtime error if `"button_down"` doesn't correspond to a signal, or if `"_on_button_down"` is not a registered method in the object `self`. The main reason for using options 1, 2, or 4 would be if you actually need to use strings (e.g. to connect signals programmatically based on strings read from a configuration file). Otherwise, option 3 is the recommended (and fastest) method.

 **Binding and passing parameters:** 

The syntax to bind parameters is through [`Callable.bind`](#class_callable_method_bind), which returns a copy of the [`Callable`](class_callable.md) with its parameters bound.

When calling [`emit_signal`](#class_object_method_emit_signal) or [`Signal.emit`](#class_signal_method_emit), the signal parameters can be also passed. The examples below show the relationship between these signal parameters and bound parameters.



```gdscript

    func _ready():
        # This assumes that a `Player` class exists, which defines a `hit` signal.
        var player = Player.new()
        # Using Callable.bind().
        player.hit.connect(_on_player_hit.bind("sword", 100))
    
        # Parameters added when emitting the signal are passed first.
        player.hit.emit("Dark lord", 5)
    
    # We pass two arguments when emitting (`hit_by`, `level`),
    # and bind two more arguments when connecting (`weapon_type`, `damage`).
    func _on_player_hit(hit_by, level, weapon_type, damage):
        print("Hit by %s (level %d) with weapon %s for %d damage." % [hit_by, level, weapon_type, damage])
```

```csharp

    public override void _Ready()
    {
        // This assumes that a `Player` class exists, which defines a `Hit` signal.
        var player = new Player();
        // Using lambda expressions that create a closure that captures the additional parameters.
        // The lambda only receives the parameters defined by the signal's delegate.
        player.Hit += (hitBy, level) => OnPlayerHit(hitBy, level, "sword", 100);
    
        // Parameters added when emitting the signal are passed first.
        player.EmitSignal(SignalName.Hit, "Dark lord", 5);
    }
    
    // We pass two arguments when emitting (`hit_by`, `level`),
    // and bind two more arguments when connecting (`weapon_type`, `damage`).
    private void OnPlayerHit(string hitBy, int level, string weaponType, int damage)
    {
        GD.Print($"Hit by {hitBy} (level {level}) with weapon {weaponType} for {damage} damage.");
    }
```















<!-- rst-class:: classref-item-separator -->

---

<div id="_class_object_method_disconnect"></div>

`void` **disconnect** ( signal: [`StringName`](class_stringname.md), callable: [`Callable`](class_callable.md) )<div id="class_object_method_disconnect"></div>

Disconnects a `signal` by name from a given `callable`. If the connection does not exist, generates an error. Use [`is_connected`](#class_object_method_is_connected) to make sure that the connection exists.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_object_method_emit_signal"></div>

[Error](#enum_@globalscope_error) **emit_signal** ( signal: [`StringName`](class_stringname.md), ... ) vararg[^vararg]<div id="class_object_method_emit_signal"></div>

Emits the given `signal` by name. The signal must exist, so it should be a built-in signal of this class or one of its inherited classes, or a user-defined signal (see [`add_user_signal`](#class_object_method_add_user_signal)). This method supports a variable number of arguments, so parameters can be passed as a comma separated list.

Returns [`@GlobalScope.ERR_UNAVAILABLE`](#class_@globalscope_constant_err_unavailable) if `signal` does not exist or the parameters are invalid.



```gdscript

    emit_signal("hit", "sword", 100)
    emit_signal("game_over")
```

```csharp

    EmitSignal(SignalName.Hit, "sword", 100);
    EmitSignal(SignalName.GameOver);
```



 **Note:** In C#, `signal` must be in snake_case when referring to built-in Godot signals. Prefer using the names exposed in the `SignalName` class to avoid allocating a new [`StringName`](class_stringname.md) on each call.





<!-- rst-class:: classref-item-separator -->

---

<div id="_class_object_method_free"></div>

`void` **free** ( )<div id="class_object_method_free"></div>

Deletes the object from memory. Pre-existing references to the object become invalid, and any attempt to access them will result in a run-time error. Checking the references with [`@GlobalScope.is_instance_valid`](#class_@globalscope_method_is_instance_valid) will return `false`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_object_method_get"></div>

[`Variant`](class_variant.md) **get** ( property: [`StringName`](class_stringname.md) ) const[^const]<div id="class_object_method_get"></div>

Returns the [`Variant`](class_variant.md) value of the given `property`. If the `property` does not exist, this method returns `null`.



```gdscript

    var node = Node2D.new()
    node.rotation = 1.5
    var a = node.get("rotation") # a is 1.5
```

```csharp

    var node = new Node2D();
    node.Rotation = 1.5f;
    var a = node.Get(Node2D.PropertyName.Rotation); // a is 1.5
```



 **Note:** In C#, `property` must be in snake_case when referring to built-in Godot properties. Prefer using the names exposed in the `PropertyName` class to avoid allocating a new [`StringName`](class_stringname.md) on each call.





<!-- rst-class:: classref-item-separator -->

---

<div id="_class_object_method_get_class"></div>

[`String`](class_string.md) **get_class** ( ) const[^const]<div id="class_object_method_get_class"></div>

Returns the object's built-in class name, as a [`String`](class_string.md). See also [`is_class`](#class_object_method_is_class).

 **Note:** This method ignores `class_name` declarations. If this object's script has defined a `class_name`, the base, built-in class name is returned instead.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_object_method_get_incoming_connections"></div>

[Array](class_array.md) [`Dictionary`](class_dictionary.md) **get_incoming_connections** ( ) const[^const]<div id="class_object_method_get_incoming_connections"></div>

Returns an [`Array`](class_array.md) of signal connections received by this object. Each connection is represented as a [`Dictionary`](class_dictionary.md) that contains three entries:

- `signal` is a reference to the [`Signal`](class_signal.md);

- `callable` is a reference to the [`Callable`](class_callable.md);

- `flags` is a combination of [ConnectFlags](#enum_object_connectflags).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_object_method_get_indexed"></div>

[`Variant`](class_variant.md) **get_indexed** ( property_path: [`NodePath`](class_nodepath.md) ) const[^const]<div id="class_object_method_get_indexed"></div>

Gets the object's property indexed by the given `property_path`. The path should be a [`NodePath`](class_nodepath.md) relative to the current object and can use the colon character (`:`) to access nested properties.

 **Examples:** `"position:x"` or `"material:next_pass:blend_mode"`.



```gdscript

    var node = Node2D.new()
    node.position = Vector2(5, -10)
    var a = node.get_indexed("position")   # a is Vector2(5, -10)
    var b = node.get_indexed("position:y") # b is -10
```

```csharp

    var node = new Node2D();
    node.Position = new Vector2(5, -10);
    var a = node.GetIndexed("position");   // a is Vector2(5, -10)
    var b = node.GetIndexed("position:y"); // b is -10
```



 **Note:** In C#, `property_path` must be in snake_case when referring to built-in Godot properties. Prefer using the names exposed in the `PropertyName` class to avoid allocating a new [`StringName`](class_stringname.md) on each call.

 **Note:** This method does not support actual paths to nodes in the [`SceneTree`](class_scenetree.md), only sub-property paths. In the context of nodes, use [`Node.get_node_and_resource`](#class_node_method_get_node_and_resource) instead.





<!-- rst-class:: classref-item-separator -->

---

<div id="_class_object_method_get_instance_id"></div>

[`int`](class_int.md) **get_instance_id** ( ) const[^const]<div id="class_object_method_get_instance_id"></div>

Returns the object's unique instance ID. This ID can be saved in [`EncodedObjectAsID`](class_encodedobjectasid.md), and can be used to retrieve this object instance with [`@GlobalScope.instance_from_id`](#class_@globalscope_method_instance_from_id).

 **Note:** This ID is only useful during the current session. It won't correspond to a similar object if the ID is sent over a network, or loaded from a file at a later time.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_object_method_get_meta"></div>

[`Variant`](class_variant.md) **get_meta** ( name: [`StringName`](class_stringname.md), default: [`Variant`](class_variant.md) = null ) const[^const]<div id="class_object_method_get_meta"></div>

Returns the object's metadata value for the given entry `name`. If the entry does not exist, returns `default`. If `default` is `null`, an error is also generated.

 **Note:** A metadata's name must be a valid identifier as per [`StringName.is_valid_identifier`](#class_stringname_method_is_valid_identifier) method.

 **Note:** Metadata that has a name starting with an underscore (`_`) is considered editor-only. Editor-only metadata is not displayed in the Inspector and should not be edited, although it can still be found by this method.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_object_method_get_meta_list"></div>

[Array](class_array.md) [`StringName`](class_stringname.md) **get_meta_list** ( ) const[^const]<div id="class_object_method_get_meta_list"></div>

Returns the object's metadata entry names as a [`PackedStringArray`](class_packedstringarray.md).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_object_method_get_method_argument_count"></div>

[`int`](class_int.md) **get_method_argument_count** ( method: [`StringName`](class_stringname.md) ) const[^const]<div id="class_object_method_get_method_argument_count"></div>

Returns the number of arguments of the given `method` by name.

 **Note:** In C#, `method` must be in snake_case when referring to built-in Godot methods. Prefer using the names exposed in the `MethodName` class to avoid allocating a new [`StringName`](class_stringname.md) on each call.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_object_method_get_method_list"></div>

[Array](class_array.md) [`Dictionary`](class_dictionary.md) **get_method_list** ( ) const[^const]<div id="class_object_method_get_method_list"></div>

Returns this object's methods and their signatures as an [`Array`](class_array.md) of dictionaries. Each [`Dictionary`](class_dictionary.md) contains the following entries:

- `name` is the name of the method, as a [`String`](class_string.md);

- `args` is an [`Array`](class_array.md) of dictionaries representing the arguments;

- `default_args` is the default arguments as an [`Array`](class_array.md) of variants;

- `flags` is a combination of [MethodFlags](#enum_@globalscope_methodflags);

- `id` is the method's internal identifier [`int`](class_int.md);

- `return` is the returned value, as a [`Dictionary`](class_dictionary.md);

 **Note:** The dictionaries of `args` and `return` are formatted identically to the results of [`get_property_list`](#class_object_method_get_property_list), although not all entries are used.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_object_method_get_property_list"></div>

[Array](class_array.md) [`Dictionary`](class_dictionary.md) **get_property_list** ( ) const[^const]<div id="class_object_method_get_property_list"></div>

Returns the object's property list as an [`Array`](class_array.md) of dictionaries. Each [`Dictionary`](class_dictionary.md) contains the following entries:

- `name` is the property's name, as a [`String`](class_string.md);

- `class_name` is an empty [`StringName`](class_stringname.md), unless the property is [`@GlobalScope.TYPE_OBJECT`](#class_@globalscope_constant_type_object) and it inherits from a class;

- `type` is the property's type, as an [`int`](class_int.md) (see [Variant.Type](#enum_@globalscope_variant.type));

- `hint` is *how* the property is meant to be edited (see [PropertyHint](#enum_@globalscope_propertyhint));

- `hint_string` depends on the hint (see [PropertyHint](#enum_@globalscope_propertyhint));

- `usage` is a combination of [PropertyUsageFlags](#enum_@globalscope_propertyusageflags).

 **Note:** In GDScript, all class members are treated as properties. In C# and GDExtension, it may be necessary to explicitly mark class members as Godot properties using decorators or attributes.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_object_method_get_script"></div>

[`Variant`](class_variant.md) **get_script** ( ) const[^const]<div id="class_object_method_get_script"></div>

Returns the object's [`Script`](class_script.md) instance, or `null` if no script is attached.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_object_method_get_signal_connection_list"></div>

[Array](class_array.md) [`Dictionary`](class_dictionary.md) **get_signal_connection_list** ( signal: [`StringName`](class_stringname.md) ) const[^const]<div id="class_object_method_get_signal_connection_list"></div>

Returns an [`Array`](class_array.md) of connections for the given `signal` name. Each connection is represented as a [`Dictionary`](class_dictionary.md) that contains three entries:

- `signal` is a reference to the [`Signal`](class_signal.md);

- `callable` is a reference to the connected [`Callable`](class_callable.md);

- `flags` is a combination of [ConnectFlags](#enum_object_connectflags).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_object_method_get_signal_list"></div>

[Array](class_array.md) [`Dictionary`](class_dictionary.md) **get_signal_list** ( ) const[^const]<div id="class_object_method_get_signal_list"></div>

Returns the list of existing signals as an [`Array`](class_array.md) of dictionaries.

 **Note:** Due of the implementation, each [`Dictionary`](class_dictionary.md) is formatted very similarly to the returned values of [`get_method_list`](#class_object_method_get_method_list).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_object_method_has_meta"></div>

[`bool`](class_bool.md) **has_meta** ( name: [`StringName`](class_stringname.md) ) const[^const]<div id="class_object_method_has_meta"></div>

Returns `true` if a metadata entry is found with the given `name`. See also [`get_meta`](#class_object_method_get_meta), [`set_meta`](#class_object_method_set_meta) and [`remove_meta`](#class_object_method_remove_meta).

 **Note:** A metadata's name must be a valid identifier as per [`StringName.is_valid_identifier`](#class_stringname_method_is_valid_identifier) method.

 **Note:** Metadata that has a name starting with an underscore (`_`) is considered editor-only. Editor-only metadata is not displayed in the Inspector and should not be edited, although it can still be found by this method.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_object_method_has_method"></div>

[`bool`](class_bool.md) **has_method** ( method: [`StringName`](class_stringname.md) ) const[^const]<div id="class_object_method_has_method"></div>

Returns `true` if the given `method` name exists in the object.

 **Note:** In C#, `method` must be in snake_case when referring to built-in Godot methods. Prefer using the names exposed in the `MethodName` class to avoid allocating a new [`StringName`](class_stringname.md) on each call.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_object_method_has_signal"></div>

[`bool`](class_bool.md) **has_signal** ( signal: [`StringName`](class_stringname.md) ) const[^const]<div id="class_object_method_has_signal"></div>

Returns `true` if the given `signal` name exists in the object.

 **Note:** In C#, `signal` must be in snake_case when referring to built-in Godot methods. Prefer using the names exposed in the `SignalName` class to avoid allocating a new [`StringName`](class_stringname.md) on each call.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_object_method_has_user_signal"></div>

[`bool`](class_bool.md) **has_user_signal** ( signal: [`StringName`](class_stringname.md) ) const[^const]<div id="class_object_method_has_user_signal"></div>

Returns `true` if the given user-defined `signal` name exists. Only signals added with [`add_user_signal`](#class_object_method_add_user_signal) are included. See also [`remove_user_signal`](#class_object_method_remove_user_signal).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_object_method_is_blocking_signals"></div>

[`bool`](class_bool.md) **is_blocking_signals** ( ) const[^const]<div id="class_object_method_is_blocking_signals"></div>

Returns `true` if the object is blocking its signals from being emitted. See [`set_block_signals`](#class_object_method_set_block_signals).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_object_method_is_class"></div>

[`bool`](class_bool.md) **is_class** ( class: [`String`](class_string.md) ) const[^const]<div id="class_object_method_is_class"></div>

Returns `true` if the object inherits from the given `class`. See also [`get_class`](#class_object_method_get_class).



```gdscript

    var sprite2d = Sprite2D.new()
    sprite2d.is_class("Sprite2D") # Returns true
    sprite2d.is_class("Node")     # Returns true
    sprite2d.is_class("Node3D")   # Returns false
```

```csharp

    var sprite2D = new Sprite2D();
    sprite2D.IsClass("Sprite2D"); // Returns true
    sprite2D.IsClass("Node");     // Returns true
    sprite2D.IsClass("Node3D");   // Returns false
```



 **Note:** This method ignores `class_name` declarations in the object's script.





<!-- rst-class:: classref-item-separator -->

---

<div id="_class_object_method_is_connected"></div>

[`bool`](class_bool.md) **is_connected** ( signal: [`StringName`](class_stringname.md), callable: [`Callable`](class_callable.md) ) const[^const]<div id="class_object_method_is_connected"></div>

Returns `true` if a connection exists between the given `signal` name and `callable`.

 **Note:** In C#, `signal` must be in snake_case when referring to built-in Godot methods. Prefer using the names exposed in the `SignalName` class to avoid allocating a new [`StringName`](class_stringname.md) on each call.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_object_method_is_queued_for_deletion"></div>

[`bool`](class_bool.md) **is_queued_for_deletion** ( ) const[^const]<div id="class_object_method_is_queued_for_deletion"></div>

Returns `true` if the [`Node.queue_free`](#class_node_method_queue_free) method was called for the object.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_object_method_notification"></div>

`void` **notification** ( what: [`int`](class_int.md), reversed: [`bool`](class_bool.md) = false )<div id="class_object_method_notification"></div>

Sends the given `what` notification to all classes inherited by the object, triggering calls to [`_notification`](#class_object_private_method__notification), starting from the highest ancestor (the **Object** class) and going down to the object's script.

If `reversed` is `true`, the call order is reversed.



```gdscript

    var player = Node2D.new()
    player.set_script(load("res://player.gd"))
    
    player.notification(NOTIFICATION_ENTER_TREE)
    # The call order is Object -> Node -> Node2D -> player.gd.
    
    player.notification(NOTIFICATION_ENTER_TREE, true)
    # The call order is player.gd -> Node2D -> Node -> Object.
```

```csharp

    var player = new Node2D();
    player.SetScript(GD.Load("res://player.gd"));
    
    player.Notification(NotificationEnterTree);
    // The call order is GodotObject -> Node -> Node2D -> player.gd.
    
    player.Notification(NotificationEnterTree, true);
    // The call order is player.gd -> Node2D -> Node -> GodotObject.
```







<!-- rst-class:: classref-item-separator -->

---

<div id="_class_object_method_notify_property_list_changed"></div>

`void` **notify_property_list_changed** ( )<div id="class_object_method_notify_property_list_changed"></div>

Emits the [`property_list_changed`](#class_object_signal_property_list_changed) signal. This is mainly used to refresh the editor, so that the Inspector and editor plugins are properly updated.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_object_method_property_can_revert"></div>

[`bool`](class_bool.md) **property_can_revert** ( property: [`StringName`](class_stringname.md) ) const[^const]<div id="class_object_method_property_can_revert"></div>

Returns `true` if the given `property` has a custom default value. Use [`property_get_revert`](#class_object_method_property_get_revert) to get the `property`'s default value.

 **Note:** This method is used by the Inspector dock to display a revert icon. The object must implement [`_property_can_revert`](#class_object_private_method__property_can_revert) to customize the default value. If [`_property_can_revert`](#class_object_private_method__property_can_revert) is not implemented, this method returns `false`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_object_method_property_get_revert"></div>

[`Variant`](class_variant.md) **property_get_revert** ( property: [`StringName`](class_stringname.md) ) const[^const]<div id="class_object_method_property_get_revert"></div>

Returns the custom default value of the given `property`. Use [`property_can_revert`](#class_object_method_property_can_revert) to check if the `property` has a custom default value.

 **Note:** This method is used by the Inspector dock to display a revert icon. The object must implement [`_property_get_revert`](#class_object_private_method__property_get_revert) to customize the default value. If [`_property_get_revert`](#class_object_private_method__property_get_revert) is not implemented, this method returns `null`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_object_method_remove_meta"></div>

`void` **remove_meta** ( name: [`StringName`](class_stringname.md) )<div id="class_object_method_remove_meta"></div>

Removes the given entry `name` from the object's metadata. See also [`has_meta`](#class_object_method_has_meta), [`get_meta`](#class_object_method_get_meta) and [`set_meta`](#class_object_method_set_meta).

 **Note:** A metadata's name must be a valid identifier as per [`StringName.is_valid_identifier`](#class_stringname_method_is_valid_identifier) method.

 **Note:** Metadata that has a name starting with an underscore (`_`) is considered editor-only. Editor-only metadata is not displayed in the Inspector and should not be edited, although it can still be found by this method.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_object_method_remove_user_signal"></div>

`void` **remove_user_signal** ( signal: [`StringName`](class_stringname.md) )<div id="class_object_method_remove_user_signal"></div>

Removes the given user signal `signal` from the object. See also [`add_user_signal`](#class_object_method_add_user_signal) and [`has_user_signal`](#class_object_method_has_user_signal).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_object_method_set"></div>

`void` **set** ( property: [`StringName`](class_stringname.md), value: [`Variant`](class_variant.md) )<div id="class_object_method_set"></div>

Assigns `value` to the given `property`. If the property does not exist or the given `value`'s type doesn't match, nothing happens.



```gdscript

    var node = Node2D.new()
    node.set("global_scale", Vector2(8, 2.5))
    print(node.global_scale) # Prints (8, 2.5)
```

```csharp

    var node = new Node2D();
    node.Set(Node2D.PropertyName.GlobalScale, new Vector2(8, 2.5));
    GD.Print(node.GlobalScale); // Prints Vector2(8, 2.5)
```



 **Note:** In C#, `property` must be in snake_case when referring to built-in Godot properties. Prefer using the names exposed in the `PropertyName` class to avoid allocating a new [`StringName`](class_stringname.md) on each call.





<!-- rst-class:: classref-item-separator -->

---

<div id="_class_object_method_set_block_signals"></div>

`void` **set_block_signals** ( enable: [`bool`](class_bool.md) )<div id="class_object_method_set_block_signals"></div>

If set to `true`, the object becomes unable to emit signals. As such, [`emit_signal`](#class_object_method_emit_signal) and signal connections will not work, until it is set to `false`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_object_method_set_deferred"></div>

`void` **set_deferred** ( property: [`StringName`](class_stringname.md), value: [`Variant`](class_variant.md) )<div id="class_object_method_set_deferred"></div>

Assigns `value` to the given `property`, at the end of the current frame. This is equivalent to calling [`set`](#class_object_method_set) through [`call_deferred`](#class_object_method_call_deferred).



```gdscript

    var node = Node2D.new()
    add_child(node)
    
    node.rotation = 1.5
    node.set_deferred("rotation", 3.0)
    print(node.rotation) # Prints 1.5
    
    await get_tree().process_frame
    print(node.rotation) # Prints 3.0
```

```csharp

    var node = new Node2D();
    node.Rotation = 1.5f;
    node.SetDeferred(Node2D.PropertyName.Rotation, 3f);
    GD.Print(node.Rotation); // Prints 1.5
    
    await ToSignal(GetTree(), SceneTree.SignalName.ProcessFrame);
    GD.Print(node.Rotation); // Prints 3.0
```



 **Note:** In C#, `property` must be in snake_case when referring to built-in Godot properties. Prefer using the names exposed in the `PropertyName` class to avoid allocating a new [`StringName`](class_stringname.md) on each call.





<!-- rst-class:: classref-item-separator -->

---

<div id="_class_object_method_set_indexed"></div>

`void` **set_indexed** ( property_path: [`NodePath`](class_nodepath.md), value: [`Variant`](class_variant.md) )<div id="class_object_method_set_indexed"></div>

Assigns a new `value` to the property identified by the `property_path`. The path should be a [`NodePath`](class_nodepath.md) relative to this object, and can use the colon character (`:`) to access nested properties.



```gdscript

    var node = Node2D.new()
    node.set_indexed("position", Vector2(42, 0))
    node.set_indexed("position:y", -10)
    print(node.position) # Prints (42, -10)
```

```csharp

    var node = new Node2D();
    node.SetIndexed("position", new Vector2(42, 0));
    node.SetIndexed("position:y", -10);
    GD.Print(node.Position); // Prints (42, -10)
```



 **Note:** In C#, `property_path` must be in snake_case when referring to built-in Godot properties. Prefer using the names exposed in the `PropertyName` class to avoid allocating a new [`StringName`](class_stringname.md) on each call.





<!-- rst-class:: classref-item-separator -->

---

<div id="_class_object_method_set_message_translation"></div>

`void` **set_message_translation** ( enable: [`bool`](class_bool.md) )<div id="class_object_method_set_message_translation"></div>

If set to `true`, allows the object to translate messages with [`tr`](#class_object_method_tr) and [`tr_n`](#class_object_method_tr_n). Enabled by default. See also [`can_translate_messages`](#class_object_method_can_translate_messages).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_object_method_set_meta"></div>

`void` **set_meta** ( name: [`StringName`](class_stringname.md), value: [`Variant`](class_variant.md) )<div id="class_object_method_set_meta"></div>

Adds or changes the entry `name` inside the object's metadata. The metadata `value` can be any [`Variant`](class_variant.md), although some types cannot be serialized correctly.

If `value` is `null`, the entry is removed. This is the equivalent of using [`remove_meta`](#class_object_method_remove_meta). See also [`has_meta`](#class_object_method_has_meta) and [`get_meta`](#class_object_method_get_meta).

 **Note:** A metadata's name must be a valid identifier as per [`StringName.is_valid_identifier`](#class_stringname_method_is_valid_identifier) method.

 **Note:** Metadata that has a name starting with an underscore (`_`) is considered editor-only. Editor-only metadata is not displayed in the Inspector and should not be edited, although it can still be found by this method.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_object_method_set_script"></div>

`void` **set_script** ( script: [`Variant`](class_variant.md) )<div id="class_object_method_set_script"></div>

Attaches `script` to the object, and instantiates it. As a result, the script's [`_init`](#class_object_private_method__init) is called. A [`Script`](class_script.md) is used to extend the object's functionality.

If a script already exists, its instance is detached, and its property values and state are lost. Built-in property values are still kept.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_object_method_to_string"></div>

[`String`](class_string.md) **to_string** ( )<div id="class_object_method_to_string"></div>

Returns a [`String`](class_string.md) representing the object. Defaults to `"<ClassName#RID>"`. Override [`_to_string`](#class_object_private_method__to_string) to customize the string representation of the object.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_object_method_tr"></div>

[`String`](class_string.md) **tr** ( message: [`StringName`](class_stringname.md), context: [`StringName`](class_stringname.md) = &"" ) const[^const]<div id="class_object_method_tr"></div>

Translates a `message`, using the translation catalogs configured in the Project Settings. Further `context` can be specified to help with the translation. Note that most [`Control`](class_control.md) nodes automatically translate their strings, so this method is mostly useful for formatted strings or custom drawn text.

If [`can_translate_messages`](#class_object_method_can_translate_messages) is `false`, or no translation is available, this method returns the `message` without changes. See [`set_message_translation`](#class_object_method_set_message_translation).

For detailed examples, see [*Internationalizing games*](../tutorials/i18n/internationalizing_games).

 **Note:** This method can't be used without an **Object** instance, as it requires the [`can_translate_messages`](#class_object_method_can_translate_messages) method. To translate strings in a static context, use [`TranslationServer.translate`](#class_translationserver_method_translate).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_object_method_tr_n"></div>

[`String`](class_string.md) **tr_n** ( message: [`StringName`](class_stringname.md), plural_message: [`StringName`](class_stringname.md), n: [`int`](class_int.md), context: [`StringName`](class_stringname.md) = &"" ) const[^const]<div id="class_object_method_tr_n"></div>

Translates a `message` or `plural_message`, using the translation catalogs configured in the Project Settings. Further `context` can be specified to help with the translation.

If [`can_translate_messages`](#class_object_method_can_translate_messages) is `false`, or no translation is available, this method returns `message` or `plural_message`, without changes. See [`set_message_translation`](#class_object_method_set_message_translation).

The `n` is the number, or amount, of the message's subject. It is used by the translation system to fetch the correct plural form for the current language.

For detailed examples, see [*Localization using gettext*](../tutorials/i18n/localization_using_gettext).

 **Note:** Negative and [`float`](class_float.md) numbers may not properly apply to some countable subjects. It's recommended to handle these cases with [`tr`](#class_object_method_tr).

 **Note:** This method can't be used without an **Object** instance, as it requires the [`can_translate_messages`](#class_object_method_can_translate_messages) method. To translate strings in a static context, use [`TranslationServer.translate_plural`](#class_translationserver_method_translate_plural).

[^virtual]: 本方法通常需要用户覆盖才能生效。
[^const]: 本方法无副作用，不会修改该实例的任何成员变量。
[^vararg]: 本方法除了能接受在此处描述的参数外，还能够继续接受任意数量的参数。
[^constructor]: 本方法用于构造某个类型。
[^static]: 调用本方法无需实例，可直接使用类名进行调用。
[^operator]: 本方法描述的是使用本类型作为左操作数的有效运算符。
[^bitfield]: 这个值是由下列位标志构成位掩码的整数。
[^void]: 无返回值。
