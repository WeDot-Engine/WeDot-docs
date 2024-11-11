<!-- ⚠ 请勿编辑本文件 ⚠ -->
<!-- 本文档使用脚本从 WeDot 引擎源码仓库生成。 -->
<!-- 生成脚本：https://github.com/WeDot-Engine/WeDot/tree/master/doc/tools/make_md.py； -->
<!-- 原文件：https://github.com/WeDot-Engine/WeDot/tree/master/doc/classes/RefCounted.xml。 -->

<div id="_class_refcounted"></div>

# RefCounted

**继承：** [`Object`](class_object.md)

**派生：** [`AESContext`](class_aescontext.md), [`AStar2D`](class_astar2d.md), [`AStar3D`](class_astar3d.md), [`AStarGrid2D`](class_astargrid2d.md), [`AudioEffectInstance`](class_audioeffectinstance.md), [`AudioSample`](class_audiosample.md), [`AudioSamplePlayback`](class_audiosampleplayback.md), [`AudioStreamPlayback`](class_audiostreamplayback.md), [`CameraFeed`](class_camerafeed.md), [`CharFXTransform`](class_charfxtransform.md), [`ConfigFile`](class_configfile.md), [`Crypto`](class_crypto.md), [`DirAccess`](class_diraccess.md), [`DTLSServer`](class_dtlsserver.md), [`EditorContextMenuPlugin`](class_editorcontextmenuplugin.md), [`EditorDebuggerPlugin`](class_editordebuggerplugin.md), [`EditorDebuggerSession`](class_editordebuggersession.md), [`EditorExportPlatform`](class_editorexportplatform.md), [`EditorExportPlugin`](class_editorexportplugin.md), [`EditorExportPreset`](class_editorexportpreset.md), [`EditorFeatureProfile`](class_editorfeatureprofile.md), [`EditorFileSystemImportFormatSupportQuery`](class_editorfilesystemimportformatsupportquery.md), [`EditorInspectorPlugin`](class_editorinspectorplugin.md), [`EditorResourceConversionPlugin`](class_editorresourceconversionplugin.md), [`EditorResourcePreviewGenerator`](class_editorresourcepreviewgenerator.md), [`EditorResourceTooltipPlugin`](class_editorresourcetooltipplugin.md), [`EditorSceneFormatImporter`](class_editorsceneformatimporter.md), [`EditorScenePostImport`](class_editorscenepostimport.md), [`EditorScenePostImportPlugin`](class_editorscenepostimportplugin.md), [`EditorScript`](class_editorscript.md), [`EditorTranslationParserPlugin`](class_editortranslationparserplugin.md), [`EncodedObjectAsID`](class_encodedobjectasid.md), [`ENetConnection`](class_enetconnection.md), [`EngineProfiler`](class_engineprofiler.md), [`Expression`](class_expression.md), [`FileAccess`](class_fileaccess.md), [`GLTFObjectModelProperty`](class_gltfobjectmodelproperty.md), [`HashingContext`](class_hashingcontext.md), [`HMACContext`](class_hmaccontext.md), [`HTTPClient`](class_httpclient.md), [`ImageFormatLoader`](class_imageformatloader.md), [`JavaClass`](class_javaclass.md), [`JavaObject`](class_javaobject.md), [`JavaScriptObject`](class_javascriptobject.md), [`KinematicCollision2D`](class_kinematiccollision2d.md), [`KinematicCollision3D`](class_kinematiccollision3d.md), [`Lightmapper`](class_lightmapper.md), [`MeshConvexDecompositionSettings`](class_meshconvexdecompositionsettings.md), [`MeshDataTool`](class_meshdatatool.md), [`MultiplayerAPI`](class_multiplayerapi.md), [`Mutex`](class_mutex.md), [`NavigationPathQueryParameters2D`](class_navigationpathqueryparameters2d.md), [`NavigationPathQueryParameters3D`](class_navigationpathqueryparameters3d.md), [`NavigationPathQueryResult2D`](class_navigationpathqueryresult2d.md), [`NavigationPathQueryResult3D`](class_navigationpathqueryresult3d.md), [`Node3DGizmo`](class_node3dgizmo.md), [`OggPacketSequencePlayback`](class_oggpacketsequenceplayback.md), [`OpenXRAPIExtension`](class_openxrapiextension.md), [`PackedDataContainerRef`](class_packeddatacontainerref.md), [`PacketPeer`](class_packetpeer.md), [`PCKPacker`](class_pckpacker.md), [`PhysicsPointQueryParameters2D`](class_physicspointqueryparameters2d.md), [`PhysicsPointQueryParameters3D`](class_physicspointqueryparameters3d.md), [`PhysicsRayQueryParameters2D`](class_physicsrayqueryparameters2d.md), [`PhysicsRayQueryParameters3D`](class_physicsrayqueryparameters3d.md), [`PhysicsShapeQueryParameters2D`](class_physicsshapequeryparameters2d.md), [`PhysicsShapeQueryParameters3D`](class_physicsshapequeryparameters3d.md), [`PhysicsTestMotionParameters2D`](class_physicstestmotionparameters2d.md), [`PhysicsTestMotionParameters3D`](class_physicstestmotionparameters3d.md), [`PhysicsTestMotionResult2D`](class_physicstestmotionresult2d.md), [`PhysicsTestMotionResult3D`](class_physicstestmotionresult3d.md), [`RandomNumberGenerator`](class_randomnumbergenerator.md), [`RDAttachmentFormat`](class_rdattachmentformat.md), [`RDFramebufferPass`](class_rdframebufferpass.md), [`RDPipelineColorBlendState`](class_rdpipelinecolorblendstate.md), [`RDPipelineColorBlendStateAttachment`](class_rdpipelinecolorblendstateattachment.md), [`RDPipelineDepthStencilState`](class_rdpipelinedepthstencilstate.md), [`RDPipelineMultisampleState`](class_rdpipelinemultisamplestate.md), [`RDPipelineRasterizationState`](class_rdpipelinerasterizationstate.md), [`RDPipelineSpecializationConstant`](class_rdpipelinespecializationconstant.md), [`RDSamplerState`](class_rdsamplerstate.md), [`RDShaderSource`](class_rdshadersource.md), [`RDTextureFormat`](class_rdtextureformat.md), [`RDTextureView`](class_rdtextureview.md), [`RDUniform`](class_rduniform.md), [`RDVertexAttribute`](class_rdvertexattribute.md), [`RegEx`](class_regex.md), [`RegExMatch`](class_regexmatch.md), [`RenderSceneBuffers`](class_renderscenebuffers.md), [`RenderSceneBuffersConfiguration`](class_renderscenebuffersconfiguration.md), [`Resource`](class_resource.md), [`ResourceFormatLoader`](class_resourceformatloader.md), [`ResourceFormatSaver`](class_resourceformatsaver.md), [`ResourceImporter`](class_resourceimporter.md), [`SceneState`](class_scenestate.md), [`SceneTreeTimer`](class_scenetreetimer.md), [`Semaphore`](class_semaphore.md), [`SkinReference`](class_skinreference.md), [`StreamPeer`](class_streampeer.md), [`SurfaceTool`](class_surfacetool.md), [`TCPServer`](class_tcpserver.md), [`TextLine`](class_textline.md), [`TextParagraph`](class_textparagraph.md), [`TextServer`](class_textserver.md), [`Thread`](class_thread.md), [`TLSOptions`](class_tlsoptions.md), [`TranslationDomain`](class_translationdomain.md), [`TriangleMesh`](class_trianglemesh.md), [`Tween`](class_tween.md), [`Tweener`](class_tweener.md), [`UDPServer`](class_udpserver.md), [`UPNP`](class_upnp.md), [`UPNPDevice`](class_upnpdevice.md), [`WeakRef`](class_weakref.md), [`WebRTCPeerConnection`](class_webrtcpeerconnection.md), [`XMLParser`](class_xmlparser.md), [`XRInterface`](class_xrinterface.md), [`XRPose`](class_xrpose.md), [`XRTracker`](class_xrtracker.md), [`ZIPPacker`](class_zippacker.md), [`ZIPReader`](class_zipreader.md)

Base class for reference-counted objects.

## 描述

Base class for any object that keeps a reference count. [`Resource`](class_resource.md) and many other helper objects inherit this class.

Unlike other [`Object`](class_object.md) types, **RefCounted** s keep an internal reference counter so that they are automatically released when no longer in use, and only then. **RefCounted** s therefore do not need to be freed manually with [`Object.free`](class_object.md#class_object_method_free).

 **RefCounted** instances caught in a cyclic reference will **not** be freed automatically. For example, if a node holds a reference to instance `A`, which directly or indirectly holds a reference back to `A`, `A`'s reference count will be 2. Destruction of the node will leave `A` dangling with a reference count of 1, and there will be a memory leak. To prevent this, one of the references in the cycle can be made weak with [`@GlobalScope.weakref`](class_@globalscope.md#class_@globalscope_method_weakref).

In the vast majority of use cases, instantiating and using **RefCounted**-derived types is all you need to do. The methods provided in this class are only for advanced users, and can cause issues if misused.

 **Note:** In C#, reference-counted objects will not be freed instantly after they are no longer in use. Instead, garbage collection will run periodically and will free reference-counted objects that are no longer in use. This means that unused ones will remain in memory for a while before being removed.

## 方法

|||
|:-:|:--|
| [`int`](class_int.md)   | [`get_reference_count`](class_refcounted.md#class_refcounted_method_get_reference_count) ( ) const[^const] |
| [`bool`](class_bool.md) | [`init_ref`](class_refcounted.md#class_refcounted_method_init_ref) ( )                                     |
| [`bool`](class_bool.md) | [`reference`](class_refcounted.md#class_refcounted_method_reference) ( )                                   |
| [`bool`](class_bool.md) | [`unreference`](class_refcounted.md#class_refcounted_method_unreference) ( )                               |

<!-- rst-class:: classref-section-separator -->

---

## 方法说明

<div id="_class_refcounted_method_get_reference_count"></div>

[`int`](class_int.md) **get_reference_count** ( ) const[^const]<div id="class_refcounted_method_get_reference_count"></div>

Returns the current reference count.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_refcounted_method_init_ref"></div>

[`bool`](class_bool.md) **init_ref** ( )<div id="class_refcounted_method_init_ref"></div>

Initializes the internal reference counter. Use this only if you really know what you are doing.

Returns whether the initialization was successful.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_refcounted_method_reference"></div>

[`bool`](class_bool.md) **reference** ( )<div id="class_refcounted_method_reference"></div>

Increments the internal reference counter. Use this only if you really know what you are doing.

Returns `true` if the increment was successful, `false` otherwise.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_refcounted_method_unreference"></div>

[`bool`](class_bool.md) **unreference** ( )<div id="class_refcounted_method_unreference"></div>

Decrements the internal reference counter. Use this only if you really know what you are doing.

Returns `true` if the object should be freed after the decrement, `false` otherwise.

[^virtual]: 本方法通常需要用户覆盖才能生效。
[^const]: 本方法无副作用，不会修改该实例的任何成员变量。
[^vararg]: 本方法除了能接受在此处描述的参数外，还能够继续接受任意数量的参数。
[^constructor]: 本方法用于构造某个类型。
[^static]: 调用本方法无需实例，可直接使用类名进行调用。
[^operator]: 本方法描述的是使用本类型作为左操作数的有效运算符。
[^bitfield]: 这个值是由下列位标志构成位掩码的整数。
[^void]: 无返回值。
