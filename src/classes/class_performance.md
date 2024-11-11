<!-- ⚠ 请勿编辑本文件 ⚠ -->
<!-- 本文档使用脚本从 WeDot 引擎源码仓库生成。 -->
<!-- 生成脚本：https://github.com/WeDot-Engine/WeDot/tree/master/doc/tools/make_md.py； -->
<!-- 原文件：https://github.com/WeDot-Engine/WeDot/tree/master/doc/classes/Performance.xml。 -->

<div id="_class_performance"></div>

# Performance

**继承：** [`Object`](class_object.md)

Exposes performance-related data.

## 描述

This class provides access to a number of different monitors related to performance, such as memory usage, draw calls, and FPS. These are the same as the values displayed in the **Monitor** tab in the editor's **Debugger** panel. By using the [`get_monitor`](class_performance.md#class_performance_method_get_monitor) method of this class, you can access this data from your code.

You can add custom monitors using the [`add_custom_monitor`](class_performance.md#class_performance_method_add_custom_monitor) method. Custom monitors are available in **Monitor** tab in the editor's **Debugger** panel together with built-in monitors.

 **Note:** Some of the built-in monitors are only available in debug mode and will always return `0` when used in a project exported in release mode.

 **Note:** Some of the built-in monitors are not updated in real-time for performance reasons, so there may be a delay of up to 1 second between changes.

 **Note:** Custom monitors do not support negative values. Negative values are clamped to 0.

## 方法

|||
|:-:|:--|
| `void`                                                      | [`add_custom_monitor`](class_performance.md#class_performance_method_add_custom_monitor) ( id: [`StringName`](class_stringname.md), callable: [`Callable`](class_callable.md), arguments: [`Array`](class_array.md) = [] ) |
| [`Variant`](class_variant.md)                               | [`get_custom_monitor`](class_performance.md#class_performance_method_get_custom_monitor) ( id: [`StringName`](class_stringname.md) )                                                                                       |
| [Array](class_array.md) [`StringName`](class_stringname.md) | [`get_custom_monitor_names`](class_performance.md#class_performance_method_get_custom_monitor_names) ( )                                                                                                                   |
| [`float`](class_float.md)                                   | [`get_monitor`](class_performance.md#class_performance_method_get_monitor) ( monitor: [Monitor](#enum_performance_monitor) ) const[^const]                                                                                 |
| [`int`](class_int.md)                                       | [`get_monitor_modification_time`](class_performance.md#class_performance_method_get_monitor_modification_time) ( )                                                                                                         |
| [`bool`](class_bool.md)                                     | [`has_custom_monitor`](class_performance.md#class_performance_method_has_custom_monitor) ( id: [`StringName`](class_stringname.md) )                                                                                       |
| `void`                                                      | [`remove_custom_monitor`](class_performance.md#class_performance_method_remove_custom_monitor) ( id: [`StringName`](class_stringname.md) )                                                                                 |

<!-- rst-class:: classref-section-separator -->

---

## 枚举

<div id="_class_enum_performance_monitor"></div>

enum **Monitor**: <div id="enum_performance_monitor"></div>

<div id="_class_performance_constant_time_fps"></div>

[Monitor](#enum_performance_monitor) **TIME_FPS** = ``0``

The number of frames rendered in the last second. This metric is only updated once per second, even if queried more often. *Higher is better.*

<div id="_class_performance_constant_time_process"></div>

[Monitor](#enum_performance_monitor) **TIME_PROCESS** = ``1``

Time it took to complete one frame, in seconds. *Lower is better.*

<div id="_class_performance_constant_time_physics_process"></div>

[Monitor](#enum_performance_monitor) **TIME_PHYSICS_PROCESS** = ``2``

Time it took to complete one physics frame, in seconds. *Lower is better.*

<div id="_class_performance_constant_time_navigation_process"></div>

[Monitor](#enum_performance_monitor) **TIME_NAVIGATION_PROCESS** = ``3``

Time it took to complete one navigation step, in seconds. This includes navigation map updates as well as agent avoidance calculations. *Lower is better.*

<div id="_class_performance_constant_memory_static"></div>

[Monitor](#enum_performance_monitor) **MEMORY_STATIC** = ``4``

Static memory currently used, in bytes. Not available in release builds. *Lower is better.*

<div id="_class_performance_constant_memory_static_max"></div>

[Monitor](#enum_performance_monitor) **MEMORY_STATIC_MAX** = ``5``

Available static memory. Not available in release builds. *Lower is better.*

<div id="_class_performance_constant_memory_message_buffer_max"></div>

[Monitor](#enum_performance_monitor) **MEMORY_MESSAGE_BUFFER_MAX** = ``6``

Largest amount of memory the message queue buffer has used, in bytes. The message queue is used for deferred functions calls and notifications. *Lower is better.*

<div id="_class_performance_constant_object_count"></div>

[Monitor](#enum_performance_monitor) **OBJECT_COUNT** = ``7``

Number of objects currently instantiated (including nodes). *Lower is better.*

<div id="_class_performance_constant_object_resource_count"></div>

[Monitor](#enum_performance_monitor) **OBJECT_RESOURCE_COUNT** = ``8``

Number of resources currently used. *Lower is better.*

<div id="_class_performance_constant_object_node_count"></div>

[Monitor](#enum_performance_monitor) **OBJECT_NODE_COUNT** = ``9``

Number of nodes currently instantiated in the scene tree. This also includes the root node. *Lower is better.*

<div id="_class_performance_constant_object_orphan_node_count"></div>

[Monitor](#enum_performance_monitor) **OBJECT_ORPHAN_NODE_COUNT** = ``10``

Number of orphan nodes, i.e. nodes which are not parented to a node of the scene tree. *Lower is better.*

<div id="_class_performance_constant_render_total_objects_in_frame"></div>

[Monitor](#enum_performance_monitor) **RENDER_TOTAL_OBJECTS_IN_FRAME** = ``11``

The total number of objects in the last rendered frame. This metric doesn't include culled objects (either via hiding nodes, frustum culling or occlusion culling). *Lower is better.*

<div id="_class_performance_constant_render_total_primitives_in_frame"></div>

[Monitor](#enum_performance_monitor) **RENDER_TOTAL_PRIMITIVES_IN_FRAME** = ``12``

The total number of vertices or indices rendered in the last rendered frame. This metric doesn't include primitives from culled objects (either via hiding nodes, frustum culling or occlusion culling). Due to the depth prepass and shadow passes, the number of primitives is always higher than the actual number of vertices in the scene (typically double or triple the original vertex count). *Lower is better.*

<div id="_class_performance_constant_render_total_draw_calls_in_frame"></div>

[Monitor](#enum_performance_monitor) **RENDER_TOTAL_DRAW_CALLS_IN_FRAME** = ``13``

The total number of draw calls performed in the last rendered frame. This metric doesn't include culled objects (either via hiding nodes, frustum culling or occlusion culling), since they do not result in draw calls. *Lower is better.*

<div id="_class_performance_constant_render_video_mem_used"></div>

[Monitor](#enum_performance_monitor) **RENDER_VIDEO_MEM_USED** = ``14``

The amount of video memory used (texture and vertex memory combined, in bytes). Since this metric also includes miscellaneous allocations, this value is always greater than the sum of [`RENDER_TEXTURE_MEM_USED`](class_performance.md#class_performance_constant_render_texture_mem_used) and [`RENDER_BUFFER_MEM_USED`](class_performance.md#class_performance_constant_render_buffer_mem_used). *Lower is better.*

<div id="_class_performance_constant_render_texture_mem_used"></div>

[Monitor](#enum_performance_monitor) **RENDER_TEXTURE_MEM_USED** = ``15``

The amount of texture memory used (in bytes). *Lower is better.*

<div id="_class_performance_constant_render_buffer_mem_used"></div>

[Monitor](#enum_performance_monitor) **RENDER_BUFFER_MEM_USED** = ``16``

The amount of render buffer memory used (in bytes). *Lower is better.*

<div id="_class_performance_constant_physics_2d_active_objects"></div>

[Monitor](#enum_performance_monitor) **PHYSICS_2D_ACTIVE_OBJECTS** = ``17``

Number of active [`RigidBody2D`](class_rigidbody2d.md) nodes in the game. *Lower is better.*

<div id="_class_performance_constant_physics_2d_collision_pairs"></div>

[Monitor](#enum_performance_monitor) **PHYSICS_2D_COLLISION_PAIRS** = ``18``

Number of collision pairs in the 2D physics engine. *Lower is better.*

<div id="_class_performance_constant_physics_2d_island_count"></div>

[Monitor](#enum_performance_monitor) **PHYSICS_2D_ISLAND_COUNT** = ``19``

Number of islands in the 2D physics engine. *Lower is better.*

<div id="_class_performance_constant_physics_3d_active_objects"></div>

[Monitor](#enum_performance_monitor) **PHYSICS_3D_ACTIVE_OBJECTS** = ``20``

Number of active [`RigidBody3D`](class_rigidbody3d.md) and [`VehicleBody3D`](class_vehiclebody3d.md) nodes in the game. *Lower is better.*

<div id="_class_performance_constant_physics_3d_collision_pairs"></div>

[Monitor](#enum_performance_monitor) **PHYSICS_3D_COLLISION_PAIRS** = ``21``

Number of collision pairs in the 3D physics engine. *Lower is better.*

<div id="_class_performance_constant_physics_3d_island_count"></div>

[Monitor](#enum_performance_monitor) **PHYSICS_3D_ISLAND_COUNT** = ``22``

Number of islands in the 3D physics engine. *Lower is better.*

<div id="_class_performance_constant_audio_output_latency"></div>

[Monitor](#enum_performance_monitor) **AUDIO_OUTPUT_LATENCY** = ``23``

Output latency of the [`AudioServer`](class_audioserver.md). Equivalent to calling [`AudioServer.get_output_latency`](class_audioserver.md#class_audioserver_method_get_output_latency), it is not recommended to call this every frame.

<div id="_class_performance_constant_navigation_active_maps"></div>

[Monitor](#enum_performance_monitor) **NAVIGATION_ACTIVE_MAPS** = ``24``

Number of active navigation maps in the [`NavigationServer3D`](class_navigationserver3d.md). This also includes the two empty default navigation maps created by World2D and World3D.

<div id="_class_performance_constant_navigation_region_count"></div>

[Monitor](#enum_performance_monitor) **NAVIGATION_REGION_COUNT** = ``25``

Number of active navigation regions in the [`NavigationServer3D`](class_navigationserver3d.md).

<div id="_class_performance_constant_navigation_agent_count"></div>

[Monitor](#enum_performance_monitor) **NAVIGATION_AGENT_COUNT** = ``26``

Number of active navigation agents processing avoidance in the [`NavigationServer3D`](class_navigationserver3d.md).

<div id="_class_performance_constant_navigation_link_count"></div>

[Monitor](#enum_performance_monitor) **NAVIGATION_LINK_COUNT** = ``27``

Number of active navigation links in the [`NavigationServer3D`](class_navigationserver3d.md).

<div id="_class_performance_constant_navigation_polygon_count"></div>

[Monitor](#enum_performance_monitor) **NAVIGATION_POLYGON_COUNT** = ``28``

Number of navigation mesh polygons in the [`NavigationServer3D`](class_navigationserver3d.md).

<div id="_class_performance_constant_navigation_edge_count"></div>

[Monitor](#enum_performance_monitor) **NAVIGATION_EDGE_COUNT** = ``29``

Number of navigation mesh polygon edges in the [`NavigationServer3D`](class_navigationserver3d.md).

<div id="_class_performance_constant_navigation_edge_merge_count"></div>

[Monitor](#enum_performance_monitor) **NAVIGATION_EDGE_MERGE_COUNT** = ``30``

Number of navigation mesh polygon edges that were merged due to edge key overlap in the [`NavigationServer3D`](class_navigationserver3d.md).

<div id="_class_performance_constant_navigation_edge_connection_count"></div>

[Monitor](#enum_performance_monitor) **NAVIGATION_EDGE_CONNECTION_COUNT** = ``31``

Number of polygon edges that are considered connected by edge proximity [`NavigationServer3D`](class_navigationserver3d.md).

<div id="_class_performance_constant_navigation_edge_free_count"></div>

[Monitor](#enum_performance_monitor) **NAVIGATION_EDGE_FREE_COUNT** = ``32``

Number of navigation mesh polygon edges that could not be merged in the [`NavigationServer3D`](class_navigationserver3d.md). The edges still may be connected by edge proximity or with links.

<div id="_class_performance_constant_navigation_obstacle_count"></div>

[Monitor](#enum_performance_monitor) **NAVIGATION_OBSTACLE_COUNT** = ``33``

Number of active navigation obstacles in the [`NavigationServer3D`](class_navigationserver3d.md).

<div id="_class_performance_constant_pipeline_compilations_canvas"></div>

[Monitor](#enum_performance_monitor) **PIPELINE_COMPILATIONS_CANVAS** = ``34``

Number of pipeline compilations that were triggered by the 2D canvas renderer.

<div id="_class_performance_constant_pipeline_compilations_mesh"></div>

[Monitor](#enum_performance_monitor) **PIPELINE_COMPILATIONS_MESH** = ``35``

Number of pipeline compilations that were triggered by loading meshes. These compilations will show up as longer loading times the first time a user runs the game and the pipeline is required.

<div id="_class_performance_constant_pipeline_compilations_surface"></div>

[Monitor](#enum_performance_monitor) **PIPELINE_COMPILATIONS_SURFACE** = ``36``

Number of pipeline compilations that were triggered by building the surface cache before rendering the scene. These compilations will show up as a stutter when loading an scene the first time a user runs the game and the pipeline is required.

<div id="_class_performance_constant_pipeline_compilations_draw"></div>

[Monitor](#enum_performance_monitor) **PIPELINE_COMPILATIONS_DRAW** = ``37``

Number of pipeline compilations that were triggered while drawing the scene. These compilations will show up as stutters during gameplay the first time a user runs the game and the pipeline is required.

<div id="_class_performance_constant_pipeline_compilations_specialization"></div>

[Monitor](#enum_performance_monitor) **PIPELINE_COMPILATIONS_SPECIALIZATION** = ``38``

Number of pipeline compilations that were triggered to optimize the current scene. These compilations are done in the background and should not cause any stutters whatsoever.

<div id="_class_performance_constant_monitor_max"></div>

[Monitor](#enum_performance_monitor) **MONITOR_MAX** = ``39``

Represents the size of the [Monitor](#enum_performance_monitor) enum.

<!-- rst-class:: classref-section-separator -->

---

## 方法说明

<div id="_class_performance_method_add_custom_monitor"></div>

`void` **add_custom_monitor** ( id: [`StringName`](class_stringname.md), callable: [`Callable`](class_callable.md), arguments: [`Array`](class_array.md) = [] )<div id="class_performance_method_add_custom_monitor"></div>

Adds a custom monitor with the name `id`. You can specify the category of the monitor using slash delimiters in `id` (for example: `"Game/NumberOfNPCs"`). If there is more than one slash delimiter, then the default category is used. The default category is `"Custom"`. Prints an error if given `id` is already present.



```gdscript

    func _ready():
        var monitor_value = Callable(self, "get_monitor_value")
    
        # Adds monitor with name "MyName" to category "MyCategory".
        Performance.add_custom_monitor("MyCategory/MyMonitor", monitor_value)
    
        # Adds monitor with name "MyName" to category "Custom".
        # Note: "MyCategory/MyMonitor" and "MyMonitor" have same name but different IDs, so the code is valid.
        Performance.add_custom_monitor("MyMonitor", monitor_value)
    
        # Adds monitor with name "MyName" to category "Custom".
        # Note: "MyMonitor" and "Custom/MyMonitor" have same name and same category but different IDs, so the code is valid.
        Performance.add_custom_monitor("Custom/MyMonitor", monitor_value)
    
        # Adds monitor with name "MyCategoryOne/MyCategoryTwo/MyMonitor" to category "Custom".
        Performance.add_custom_monitor("MyCategoryOne/MyCategoryTwo/MyMonitor", monitor_value)
    
    func get_monitor_value():
        return randi() % 25
```

```csharp

    public override void _Ready()
    {
        var monitorValue = new Callable(this, MethodName.GetMonitorValue);
    
        // Adds monitor with name "MyName" to category "MyCategory".
        Performance.AddCustomMonitor("MyCategory/MyMonitor", monitorValue);
        // Adds monitor with name "MyName" to category "Custom".
        // Note: "MyCategory/MyMonitor" and "MyMonitor" have same name but different ids so the code is valid.
        Performance.AddCustomMonitor("MyMonitor", monitorValue);
    
        // Adds monitor with name "MyName" to category "Custom".
        // Note: "MyMonitor" and "Custom/MyMonitor" have same name and same category but different ids so the code is valid.
        Performance.AddCustomMonitor("Custom/MyMonitor", monitorValue);
    
        // Adds monitor with name "MyCategoryOne/MyCategoryTwo/MyMonitor" to category "Custom".
        Performance.AddCustomMonitor("MyCategoryOne/MyCategoryTwo/MyMonitor", monitorValue);
    }
    
    public int GetMonitorValue()
    {
        return GD.Randi() % 25;
    }
```



The debugger calls the callable to get the value of custom monitor. The callable must return a zero or positive integer or floating-point number.

Callables are called with arguments supplied in argument array.





<!-- rst-class:: classref-item-separator -->

---

<div id="_class_performance_method_get_custom_monitor"></div>

[`Variant`](class_variant.md) **get_custom_monitor** ( id: [`StringName`](class_stringname.md) )<div id="class_performance_method_get_custom_monitor"></div>

Returns the value of custom monitor with given `id`. The callable is called to get the value of custom monitor. See also [`has_custom_monitor`](class_performance.md#class_performance_method_has_custom_monitor). Prints an error if the given `id` is absent.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_performance_method_get_custom_monitor_names"></div>

[Array](class_array.md) [`StringName`](class_stringname.md) **get_custom_monitor_names** ( )<div id="class_performance_method_get_custom_monitor_names"></div>

Returns the names of active custom monitors in an [`Array`](class_array.md).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_performance_method_get_monitor"></div>

[`float`](class_float.md) **get_monitor** ( monitor: [Monitor](#enum_performance_monitor) ) const[^const]<div id="class_performance_method_get_monitor"></div>

Returns the value of one of the available built-in monitors. You should provide one of the [Monitor](#enum_performance_monitor) constants as the argument, like this:



```gdscript

    print(Performance.get_monitor(Performance.TIME_FPS)) # Prints the FPS to the console.
```

```csharp

    GD.Print(Performance.GetMonitor(Performance.Monitor.TimeFps)); // Prints the FPS to the console.
```



See [`get_custom_monitor`](class_performance.md#class_performance_method_get_custom_monitor) to query custom performance monitors' values.





<!-- rst-class:: classref-item-separator -->

---

<div id="_class_performance_method_get_monitor_modification_time"></div>

[`int`](class_int.md) **get_monitor_modification_time** ( )<div id="class_performance_method_get_monitor_modification_time"></div>

Returns the last tick in which custom monitor was added/removed (in microseconds since the engine started). This is set to [`Time.get_ticks_usec`](class_time.md#class_time_method_get_ticks_usec) when the monitor is updated.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_performance_method_has_custom_monitor"></div>

[`bool`](class_bool.md) **has_custom_monitor** ( id: [`StringName`](class_stringname.md) )<div id="class_performance_method_has_custom_monitor"></div>

Returns `true` if custom monitor with the given `id` is present, `false` otherwise.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_performance_method_remove_custom_monitor"></div>

`void` **remove_custom_monitor** ( id: [`StringName`](class_stringname.md) )<div id="class_performance_method_remove_custom_monitor"></div>

Removes the custom monitor with given `id`. Prints an error if the given `id` is already absent.

[^virtual]: 本方法通常需要用户覆盖才能生效。
[^const]: 本方法无副作用，不会修改该实例的任何成员变量。
[^vararg]: 本方法除了能接受在此处描述的参数外，还能够继续接受任意数量的参数。
[^constructor]: 本方法用于构造某个类型。
[^static]: 调用本方法无需实例，可直接使用类名进行调用。
[^operator]: 本方法描述的是使用本类型作为左操作数的有效运算符。
[^bitfield]: 这个值是由下列位标志构成位掩码的整数。
[^void]: 无返回值。
