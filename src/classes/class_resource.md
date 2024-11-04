<!-- ⚠ 请勿编辑本文件 ⚠ -->
<!-- 本文档使用脚本从 WeDot 引擎源码仓库生成。 -->
<!-- 生成脚本：https://github.com/WeDot-Engine/WeDot/tree/4.3/doc/tools/make_md.py； -->
<!-- 原文件：https://github.com/WeDot-Engine/WeDot/tree/4.3/doc/classes/Resource.xml。 -->

<div id="_class_resource"></div>

# Resource

**继承：** [`RefCounted`](class_refcounted.md) **<** [`Object`](class_object.md)

**派生：** [`Animation`](class_animation.md), [`AnimationLibrary`](class_animationlibrary.md), [`AnimationNode`](class_animationnode.md), [`AnimationNodeStateMachinePlayback`](class_animationnodestatemachineplayback.md), [`AnimationNodeStateMachineTransition`](class_animationnodestatemachinetransition.md), [`AudioBusLayout`](class_audiobuslayout.md), [`AudioEffect`](class_audioeffect.md), [`AudioStream`](class_audiostream.md), [`BitMap`](class_bitmap.md), [`BoneMap`](class_bonemap.md), [`ButtonGroup`](class_buttongroup.md), [`CameraAttributes`](class_cameraattributes.md), [`Compositor`](class_compositor.md), [`CompositorEffect`](class_compositoreffect.md), [`CryptoKey`](class_cryptokey.md), [`Curve`](class_curve.md), [`Curve2D`](class_curve2d.md), [`Curve3D`](class_curve3d.md), [`EditorNode3DGizmoPlugin`](class_editornode3dgizmoplugin.md), [`EditorSettings`](class_editorsettings.md), [`Environment`](class_environment.md), [`Font`](class_font.md), [`GDExtension`](class_gdextension.md), [`GLTFAccessor`](class_gltfaccessor.md), [`GLTFAnimation`](class_gltfanimation.md), [`GLTFBufferView`](class_gltfbufferview.md), [`GLTFCamera`](class_gltfcamera.md), [`GLTFDocument`](class_gltfdocument.md), [`GLTFDocumentExtension`](class_gltfdocumentextension.md), [`GLTFLight`](class_gltflight.md), [`GLTFMesh`](class_gltfmesh.md), [`GLTFNode`](class_gltfnode.md), [`GLTFPhysicsBody`](class_gltfphysicsbody.md), [`GLTFPhysicsShape`](class_gltfphysicsshape.md), [`GLTFSkeleton`](class_gltfskeleton.md), [`GLTFSkin`](class_gltfskin.md), [`GLTFSpecGloss`](class_gltfspecgloss.md), [`GLTFState`](class_gltfstate.md), [`GLTFTexture`](class_gltftexture.md), [`GLTFTextureSampler`](class_gltftexturesampler.md), [`Gradient`](class_gradient.md), [`Image`](class_image.md), [`ImporterMesh`](class_importermesh.md), [`InputEvent`](class_inputevent.md), [`JSON`](class_json.md), [`LabelSettings`](class_labelsettings.md), [`LightmapGIData`](class_lightmapgidata.md), [`Material`](class_material.md), [`Mesh`](class_mesh.md), [`MeshLibrary`](class_meshlibrary.md), [`MissingResource`](class_missingresource.md), [`MultiMesh`](class_multimesh.md), [`NavigationMesh`](class_navigationmesh.md), [`NavigationMeshSourceGeometryData2D`](class_navigationmeshsourcegeometrydata2d.md), [`NavigationMeshSourceGeometryData3D`](class_navigationmeshsourcegeometrydata3d.md), [`NavigationPolygon`](class_navigationpolygon.md), [`Noise`](class_noise.md), [`Occluder3D`](class_occluder3d.md), [`OccluderPolygon2D`](class_occluderpolygon2d.md), [`OggPacketSequence`](class_oggpacketsequence.md), [`OpenXRAction`](class_openxraction.md), [`OpenXRActionMap`](class_openxractionmap.md), [`OpenXRActionSet`](class_openxractionset.md), [`OpenXRInteractionProfile`](class_openxrinteractionprofile.md), [`OpenXRIPBinding`](class_openxripbinding.md), [`PackedDataContainer`](class_packeddatacontainer.md), [`PackedScene`](class_packedscene.md), [`PhysicsMaterial`](class_physicsmaterial.md), [`PolygonPathFinder`](class_polygonpathfinder.md), [`RDShaderFile`](class_rdshaderfile.md), [`RDShaderSPIRV`](class_rdshaderspirv.md), [`RichTextEffect`](class_richtexteffect.md), [`SceneReplicationConfig`](class_scenereplicationconfig.md), [`Script`](class_script.md), [`Shader`](class_shader.md), [`ShaderInclude`](class_shaderinclude.md), [`Shape2D`](class_shape2d.md), [`Shape3D`](class_shape3d.md), [`Shortcut`](class_shortcut.md), [`SkeletonModification2D`](class_skeletonmodification2d.md), [`SkeletonModificationStack2D`](class_skeletonmodificationstack2d.md), [`SkeletonProfile`](class_skeletonprofile.md), [`Skin`](class_skin.md), [`Sky`](class_sky.md), [`SpriteFrames`](class_spriteframes.md), [`StyleBox`](class_stylebox.md), [`SyntaxHighlighter`](class_syntaxhighlighter.md), [`Texture`](class_texture.md), [`Theme`](class_theme.md), [`TileMapPattern`](class_tilemappattern.md), [`TileSet`](class_tileset.md), [`TileSetSource`](class_tilesetsource.md), [`Translation`](class_translation.md), [`VideoStream`](class_videostream.md), [`VideoStreamPlayback`](class_videostreamplayback.md), [`VisualShaderNode`](class_visualshadernode.md), [`VoxelGIData`](class_voxelgidata.md), [`World2D`](class_world2d.md), [`World3D`](class_world3d.md), [`X509Certificate`](class_x509certificate.md)

Base class for serializable objects.

## 描述

Resource is the base class for all Godot-specific resource types, serving primarily as data containers. Since they inherit from [`RefCounted`](class_refcounted.md), resources are reference-counted and freed when no longer in use. They can also be nested within other resources, and saved on disk. [`PackedScene`](class_packedscene.md), one of the most common [`Object`](class_object.md) s in a Godot project, is also a resource, uniquely capable of storing and instantiating the [`Node`](class_node.md) s it contains as many times as desired.

In GDScript, resources can loaded from disk by their [`resource_path`](#class_resource_property_resource_path) using [`@GDScript.load`](#class_@gdscript_method_load) or [`@GDScript.preload`](#class_@gdscript_method_preload).

The engine keeps a global cache of all loaded resources, referenced by paths (see [`ResourceLoader.has_cached`](#class_resourceloader_method_has_cached)). A resource will be cached when loaded for the first time and removed from cache once all references are released. When a resource is cached, subsequent loads using its path will return the cached reference.

 **Note:** In C#, resources will not be freed instantly after they are no longer in use. Instead, garbage collection will run periodically and will free resources that are no longer in use. This means that unused resources will remain in memory for a while before being removed.

## 属性

| [`bool`](class_bool.md)     | [`resource_local_to_scene`](#class_resource_property_resource_local_to_scene)   | ``false`` |
| [`String`](class_string.md) | [`resource_name`](#class_resource_property_resource_name)                       | ``""``    |
| [`String`](class_string.md) | [`resource_path`](#class_resource_property_resource_path)                       | ``""``    |
| [`String`](class_string.md) | [`resource_scene_unique_id`](#class_resource_property_resource_scene_unique_id) |           |

## 方法

| [`RID`](class_rid.md)           | [`_get_rid`](#class_resource_private_method__get_rid) ( ) virtual[^virtual]                                     |
| `void`                          | [`_setup_local_to_scene`](#class_resource_private_method__setup_local_to_scene) ( ) virtual[^virtual]           |
| [`Resource`](class_resource.md) | [`duplicate`](#class_resource_method_duplicate) ( subresources: [`bool`](class_bool.md) = false ) const[^const] |
| `void`                          | [`emit_changed`](#class_resource_method_emit_changed) ( )                                                       |
| [`String`](class_string.md)     | [`generate_scene_unique_id`](#class_resource_method_generate_scene_unique_id) ( ) static[^static]               |
| [`Node`](class_node.md)         | [`get_local_scene`](#class_resource_method_get_local_scene) ( ) const[^const]                                   |
| [`RID`](class_rid.md)           | [`get_rid`](#class_resource_method_get_rid) ( ) const[^const]                                                   |
| `void`                          | [`setup_local_to_scene`](#class_resource_method_setup_local_to_scene) ( )                                       |
| `void`                          | [`take_over_path`](#class_resource_method_take_over_path) ( path: [`String`](class_string.md) )                 |

<!-- rst-class:: classref-section-separator -->

---

## 信号

<div id="_class_class_resource_signal_changed"></div>

**changed** ( ) <div id="class_resource_signal_changed"></div>

Emitted when the resource changes, usually when one of its properties is modified. See also [`emit_changed`](#class_resource_method_emit_changed).

 **Note:** This signal is not emitted automatically for properties of custom resources. If necessary, a setter needs to be created to emit the signal.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_class_resource_signal_setup_local_to_scene_requested"></div>

**setup_local_to_scene_requested** ( ) <div id="class_resource_signal_setup_local_to_scene_requested"></div>

**已弃用：** This signal is only emitted when the resource is created. Override [`_setup_local_to_scene`](#class_resource_private_method__setup_local_to_scene) instead.

Emitted by a newly duplicated resource with [`resource_local_to_scene`](#class_resource_property_resource_local_to_scene) set to `true`.

<!-- rst-class:: classref-section-separator -->

---

## 属性说明

<div id="_class_resource_property_resource_local_to_scene"></div>

[`bool`](class_bool.md) **resource_local_to_scene** = ``false`` <div id="class_resource_property_resource_local_to_scene"></div>

- `void` **set_local_to_scene** ( value: [`bool`](class_bool.md) )
- [`bool`](class_bool.md) **is_local_to_scene** ( )

If `true`, the resource is duplicated for each instance of all scenes using it. At run-time, the resource can be modified in one scene without affecting other instances (see [`PackedScene.instantiate`](#class_packedscene_method_instantiate)).

 **Note:** Changing this property at run-time has no effect on already created duplicate resources.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_resource_property_resource_name"></div>

[`String`](class_string.md) **resource_name** = ``""`` <div id="class_resource_property_resource_name"></div>

- `void` **set_name** ( value: [`String`](class_string.md) )
- [`String`](class_string.md) **get_name** ( )

An optional name for this resource. When defined, its value is displayed to represent the resource in the Inspector dock. For built-in scripts, the name is displayed as part of the tab name in the script editor.

 **Note:** Some resource formats do not support resource names. You can still set the name in the editor or via code, but it will be lost when the resource is reloaded. For example, only built-in scripts can have a resource name, while scripts stored in separate files cannot.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_resource_property_resource_path"></div>

[`String`](class_string.md) **resource_path** = ``""`` <div id="class_resource_property_resource_path"></div>

- `void` **set_path** ( value: [`String`](class_string.md) )
- [`String`](class_string.md) **get_path** ( )

The unique path to this resource. If it has been saved to disk, the value will be its filepath. If the resource is exclusively contained within a scene, the value will be the [`PackedScene`](class_packedscene.md)'s filepath, followed by a unique identifier.

 **Note:** Setting this property manually may fail if a resource with the same path has already been previously loaded. If necessary, use [`take_over_path`](#class_resource_method_take_over_path).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_resource_property_resource_scene_unique_id"></div>

[`String`](class_string.md) **resource_scene_unique_id** <div id="class_resource_property_resource_scene_unique_id"></div>

- `void` **set_scene_unique_id** ( value: [`String`](class_string.md) )
- [`String`](class_string.md) **get_scene_unique_id** ( )

An unique identifier relative to the this resource's scene. If left empty, the ID is automatically generated when this resource is saved inside a [`PackedScene`](class_packedscene.md). If the resource is not inside a scene, this property is empty by default.

 **Note:** When the [`PackedScene`](class_packedscene.md) is saved, if multiple resources in the same scene use the same ID, only the earliest resource in the scene hierarchy keeps the original ID. The other resources are assigned new IDs from [`generate_scene_unique_id`](#class_resource_method_generate_scene_unique_id).

 **Note:** Setting this property does not emit the [`changed`](#class_resource_signal_changed) signal.

 **Warning:** When setting, the ID must only consist of letters, numbers, and underscores. Otherwise, it will fail and default to a randomly generated ID.

<!-- rst-class:: classref-section-separator -->

---

## 方法说明

<div id="_class_resource_private_method__get_rid"></div>

[`RID`](class_rid.md) **_get_rid** ( ) virtual[^virtual]<div id="class_resource_private_method__get_rid"></div>

Override this method to return a custom [`RID`](class_rid.md) when [`get_rid`](#class_resource_method_get_rid) is called.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_resource_private_method__setup_local_to_scene"></div>

`void` **_setup_local_to_scene** ( ) virtual[^virtual]<div id="class_resource_private_method__setup_local_to_scene"></div>

Override this method to customize the newly duplicated resource created from [`PackedScene.instantiate`](#class_packedscene_method_instantiate), if the original's [`resource_local_to_scene`](#class_resource_property_resource_local_to_scene) is set to `true`.

 **Example:** Set a random `damage` value to every local resource from an instantiated scene.

```

    extends Resource
    
    var damage = 0
    
    func _setup_local_to_scene():
        damage = randi_range(10, 40)
```



<!-- rst-class:: classref-item-separator -->

---

<div id="_class_resource_method_duplicate"></div>

[`Resource`](class_resource.md) **duplicate** ( subresources: [`bool`](class_bool.md) = false ) const[^const]<div id="class_resource_method_duplicate"></div>

Duplicates this resource, returning a new resource with its `export` ed or [`@GlobalScope.PROPERTY_USAGE_STORAGE`](#class_@globalscope_constant_property_usage_storage) properties copied from the original.

If `subresources` is `false`, a shallow copy is returned; nested resources within subresources are not duplicated and are shared with the original resource (with one exception; see below). If `subresources` is `true`, a deep copy is returned; nested subresources will be duplicated and are not shared (with two exceptions; see below).

 `subresources` is usually respected, with the following exceptions:

- Subresource properties with the [`@GlobalScope.PROPERTY_USAGE_ALWAYS_DUPLICATE`](#class_@globalscope_constant_property_usage_always_duplicate) flag are always duplicated.

- Subresource properties with the [`@GlobalScope.PROPERTY_USAGE_NEVER_DUPLICATE`](#class_@globalscope_constant_property_usage_never_duplicate) flag are never duplicated.

- Subresources inside [`Array`](class_array.md) and [`Dictionary`](class_dictionary.md) properties are never duplicated.

 **Note:** For custom resources, this method will fail if [`Object._init`](#class_object_private_method__init) has been defined with required parameters.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_resource_method_emit_changed"></div>

`void` **emit_changed** ( )<div id="class_resource_method_emit_changed"></div>

Emits the [`changed`](#class_resource_signal_changed) signal. This method is called automatically for some built-in resources.

 **Note:** For custom resources, it's recommended to call this method whenever a meaningful change occurs, such as a modified property. This ensures that custom [`Object`](class_object.md) s depending on the resource are properly updated.

```

    var damage:
        set(new_value):
            if damage != new_value:
                damage = new_value
                emit_changed()
```



<!-- rst-class:: classref-item-separator -->

---

<div id="_class_resource_method_generate_scene_unique_id"></div>

[`String`](class_string.md) **generate_scene_unique_id** ( ) static[^static]<div id="class_resource_method_generate_scene_unique_id"></div>

Generates a unique identifier for a resource to be contained inside a [`PackedScene`](class_packedscene.md), based on the current date, time, and a random value. The returned string is only composed of letters (`a` to `y`) and numbers (`0` to `8`). See also [`resource_scene_unique_id`](#class_resource_property_resource_scene_unique_id).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_resource_method_get_local_scene"></div>

[`Node`](class_node.md) **get_local_scene** ( ) const[^const]<div id="class_resource_method_get_local_scene"></div>

If [`resource_local_to_scene`](#class_resource_property_resource_local_to_scene) is set to `true` and the resource has been loaded from a [`PackedScene`](class_packedscene.md) instantiation, returns the root [`Node`](class_node.md) of the scene where this resource is used. Otherwise, returns `null`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_resource_method_get_rid"></div>

[`RID`](class_rid.md) **get_rid** ( ) const[^const]<div id="class_resource_method_get_rid"></div>

Returns the [`RID`](class_rid.md) of this resource (or an empty RID). Many resources (such as [`Texture2D`](class_texture2d.md), [`Mesh`](class_mesh.md), and so on) are high-level abstractions of resources stored in a specialized server ([`DisplayServer`](class_displayserver.md), [`RenderingServer`](class_renderingserver.md), etc.), so this function will return the original [`RID`](class_rid.md).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_resource_method_setup_local_to_scene"></div>

`void` **setup_local_to_scene** ( )<div id="class_resource_method_setup_local_to_scene"></div>

**已弃用：** This method should only be called internally.

Calls [`_setup_local_to_scene`](#class_resource_private_method__setup_local_to_scene). If [`resource_local_to_scene`](#class_resource_property_resource_local_to_scene) is set to `true`, this method is automatically called from [`PackedScene.instantiate`](#class_packedscene_method_instantiate) by the newly duplicated resource within the scene instance.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_resource_method_take_over_path"></div>

`void` **take_over_path** ( path: [`String`](class_string.md) )<div id="class_resource_method_take_over_path"></div>

Sets the [`resource_path`](#class_resource_property_resource_path) to `path`, potentially overriding an existing cache entry for this path. Further attempts to load an overridden resource by path will instead return this resource.

[^virtual]: 本方法通常需要用户覆盖才能生效。
[^const]: 本方法无副作用，不会修改该实例的任何成员变量。
[^vararg]: 本方法除了能接受在此处描述的参数外，还能够继续接受任意数量的参数。
[^constructor]: 本方法用于构造某个类型。
[^static]: 调用本方法无需实例，可直接使用类名进行调用。
[^operator]: 本方法描述的是使用本类型作为左操作数的有效运算符。
[^bitfield]: 这个值是由下列位标志构成位掩码的整数。
[^void]: 无返回值。
