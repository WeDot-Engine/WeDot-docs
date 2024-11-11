<!-- ⚠ 请勿编辑本文件 ⚠ -->
<!-- 本文档使用脚本从 WeDot 引擎源码仓库生成。 -->
<!-- 生成脚本：https://github.com/WeDot-Engine/WeDot/tree/master/doc/tools/make_md.py； -->
<!-- 原文件：https://github.com/WeDot-Engine/WeDot/tree/master/doc/classes/NavigationMeshGenerator.xml。 -->

<div id="_class_navigationmeshgenerator"></div>

# NavigationMeshGenerator

**已弃用：** This class may be changed or removed in future versions.

**继承：** [`Object`](class_object.md)

Helper class for creating and clearing navigation meshes.

## 描述

This class is responsible for creating and clearing 3D navigation meshes used as [`NavigationMesh`](class_navigationmesh.md) resources inside [`NavigationRegion3D`](class_navigationregion3d.md). The **NavigationMeshGenerator** has very limited to no use for 2D as the navigation mesh baking process expects 3D node types and 3D source geometry to parse.

The entire navigation mesh baking is best done in a separate thread as the voxelization, collision tests and mesh optimization steps involved are very slow and performance-intensive operations.

Navigation mesh baking happens in multiple steps and the result depends on 3D source geometry and properties of the [`NavigationMesh`](class_navigationmesh.md) resource. In the first step, starting from a root node and depending on [`NavigationMesh`](class_navigationmesh.md) properties all valid 3D source geometry nodes are collected from the [`SceneTree`](class_scenetree.md). Second, all collected nodes are parsed for their relevant 3D geometry data and a combined 3D mesh is build. Due to the many different types of parsable objects, from normal [`MeshInstance3D`](class_meshinstance3d.md) s to [`CSGShape3D`](class_csgshape3d.md) s or various [`CollisionObject3D`](class_collisionobject3d.md) s, some operations to collect geometry data can trigger [`RenderingServer`](class_renderingserver.md) and [`PhysicsServer3D`](class_physicsserver3d.md) synchronizations. Server synchronization can have a negative effect on baking time or framerate as it often involves [`Mutex`](class_mutex.md) locking for thread security. Many parsable objects and the continuous synchronization with other threaded Servers can increase the baking time significantly. On the other hand only a few but very large and complex objects will take some time to prepare for the Servers which can noticeably stall the next frame render. As a general rule the total number of parsable objects and their individual size and complexity should be balanced to avoid framerate issues or very long baking times. The combined mesh is then passed to the Recast Navigation Object to test the source geometry for walkable terrain suitable to [`NavigationMesh`](class_navigationmesh.md) agent properties by creating a voxel world around the meshes bounding area.

The finalized navigation mesh is then returned and stored inside the [`NavigationMesh`](class_navigationmesh.md) for use as a resource inside [`NavigationRegion3D`](class_navigationregion3d.md) nodes.

 **Note:** Using meshes to not only define walkable surfaces but also obstruct navigation baking does not always work. The navigation baking has no concept of what is a geometry "inside" when dealing with mesh source geometry and this is intentional. Depending on current baking parameters, as soon as the obstructing mesh is large enough to fit a navigation mesh area inside, the baking will generate navigation mesh areas that are inside the obstructing source geometry mesh.

## 方法

|||
|:-:|:--|
| `void` | [`bake`](class_navigationmeshgenerator.md#class_navigationmeshgenerator_method_bake) ( navigation_mesh: [`NavigationMesh`](class_navigationmesh.md), root_node: [`Node`](class_node.md) )                                                                                                                                                                                                                |
| `void` | [`bake_from_source_geometry_data`](class_navigationmeshgenerator.md#class_navigationmeshgenerator_method_bake_from_source_geometry_data) ( navigation_mesh: [`NavigationMesh`](class_navigationmesh.md), source_geometry_data: [`NavigationMeshSourceGeometryData3D`](class_navigationmeshsourcegeometrydata3d.md), callback: [`Callable`](class_callable.md) = Callable() )                             |
| `void` | [`clear`](class_navigationmeshgenerator.md#class_navigationmeshgenerator_method_clear) ( navigation_mesh: [`NavigationMesh`](class_navigationmesh.md) )                                                                                                                                                                                                                                                  |
| `void` | [`parse_source_geometry_data`](class_navigationmeshgenerator.md#class_navigationmeshgenerator_method_parse_source_geometry_data) ( navigation_mesh: [`NavigationMesh`](class_navigationmesh.md), source_geometry_data: [`NavigationMeshSourceGeometryData3D`](class_navigationmeshsourcegeometrydata3d.md), root_node: [`Node`](class_node.md), callback: [`Callable`](class_callable.md) = Callable() ) |

<!-- rst-class:: classref-section-separator -->

---

## 方法说明

<div id="_class_navigationmeshgenerator_method_bake"></div>

`void` **bake** ( navigation_mesh: [`NavigationMesh`](class_navigationmesh.md), root_node: [`Node`](class_node.md) )<div id="class_navigationmeshgenerator_method_bake"></div>

**已弃用：** This method is deprecated due to core threading changes. To upgrade existing code, first create a [`NavigationMeshSourceGeometryData3D`](class_navigationmeshsourcegeometrydata3d.md) resource. Use this resource with [`parse_source_geometry_data`](class_navigationmeshgenerator.md#class_navigationmeshgenerator_method_parse_source_geometry_data) to parse the [`SceneTree`](class_scenetree.md) for nodes that should contribute to the navigation mesh baking. The [`SceneTree`](class_scenetree.md) parsing needs to happen on the main thread. After the parsing is finished use the resource with [`bake_from_source_geometry_data`](class_navigationmeshgenerator.md#class_navigationmeshgenerator_method_bake_from_source_geometry_data) to bake a navigation mesh.

Bakes the `navigation_mesh` with source geometry collected starting from the `root_node`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_navigationmeshgenerator_method_bake_from_source_geometry_data"></div>

`void` **bake_from_source_geometry_data** ( navigation_mesh: [`NavigationMesh`](class_navigationmesh.md), source_geometry_data: [`NavigationMeshSourceGeometryData3D`](class_navigationmeshsourcegeometrydata3d.md), callback: [`Callable`](class_callable.md) = Callable() )<div id="class_navigationmeshgenerator_method_bake_from_source_geometry_data"></div>

Bakes the provided `navigation_mesh` with the data from the provided `source_geometry_data`. After the process is finished the optional `callback` will be called.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_navigationmeshgenerator_method_clear"></div>

`void` **clear** ( navigation_mesh: [`NavigationMesh`](class_navigationmesh.md) )<div id="class_navigationmeshgenerator_method_clear"></div>

Removes all polygons and vertices from the provided `navigation_mesh` resource.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_navigationmeshgenerator_method_parse_source_geometry_data"></div>

`void` **parse_source_geometry_data** ( navigation_mesh: [`NavigationMesh`](class_navigationmesh.md), source_geometry_data: [`NavigationMeshSourceGeometryData3D`](class_navigationmeshsourcegeometrydata3d.md), root_node: [`Node`](class_node.md), callback: [`Callable`](class_callable.md) = Callable() )<div id="class_navigationmeshgenerator_method_parse_source_geometry_data"></div>

Parses the [`SceneTree`](class_scenetree.md) for source geometry according to the properties of `navigation_mesh`. Updates the provided `source_geometry_data` resource with the resulting data. The resource can then be used to bake a navigation mesh with [`bake_from_source_geometry_data`](class_navigationmeshgenerator.md#class_navigationmeshgenerator_method_bake_from_source_geometry_data). After the process is finished the optional `callback` will be called.

 **Note:** This function needs to run on the main thread or with a deferred call as the SceneTree is not thread-safe.

 **Performance:** While convenient, reading data arrays from [`Mesh`](class_mesh.md) resources can affect the frame rate negatively. The data needs to be received from the GPU, stalling the [`RenderingServer`](class_renderingserver.md) in the process. For performance prefer the use of e.g. collision shapes or creating the data arrays entirely in code.

[^virtual]: 本方法通常需要用户覆盖才能生效。
[^const]: 本方法无副作用，不会修改该实例的任何成员变量。
[^vararg]: 本方法除了能接受在此处描述的参数外，还能够继续接受任意数量的参数。
[^constructor]: 本方法用于构造某个类型。
[^static]: 调用本方法无需实例，可直接使用类名进行调用。
[^operator]: 本方法描述的是使用本类型作为左操作数的有效运算符。
[^bitfield]: 这个值是由下列位标志构成位掩码的整数。
[^void]: 无返回值。
