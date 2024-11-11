<!-- ⚠ 请勿编辑本文件 ⚠ -->
<!-- 本文档使用脚本从 WeDot 引擎源码仓库生成。 -->
<!-- 生成脚本：https://github.com/WeDot-Engine/WeDot/tree/master/doc/tools/make_md.py； -->
<!-- 原文件：https://github.com/WeDot-Engine/WeDot/tree/master/doc/classes/VisualShaderNode.xml。 -->

<div id="_class_visualshadernode"></div>

# VisualShaderNode

**继承：** [`Resource`](class_resource.md) **<** [`RefCounted`](class_refcounted.md) **<** [`Object`](class_object.md)

**派生：** [`VisualShaderNodeBillboard`](class_visualshadernodebillboard.md), [`VisualShaderNodeClamp`](class_visualshadernodeclamp.md), [`VisualShaderNodeColorFunc`](class_visualshadernodecolorfunc.md), [`VisualShaderNodeColorOp`](class_visualshadernodecolorop.md), [`VisualShaderNodeCompare`](class_visualshadernodecompare.md), [`VisualShaderNodeConstant`](class_visualshadernodeconstant.md), [`VisualShaderNodeCubemap`](class_visualshadernodecubemap.md), [`VisualShaderNodeCustom`](class_visualshadernodecustom.md), [`VisualShaderNodeDerivativeFunc`](class_visualshadernodederivativefunc.md), [`VisualShaderNodeDeterminant`](class_visualshadernodedeterminant.md), [`VisualShaderNodeDistanceFade`](class_visualshadernodedistancefade.md), [`VisualShaderNodeDotProduct`](class_visualshadernodedotproduct.md), [`VisualShaderNodeFloatFunc`](class_visualshadernodefloatfunc.md), [`VisualShaderNodeFloatOp`](class_visualshadernodefloatop.md), [`VisualShaderNodeFresnel`](class_visualshadernodefresnel.md), [`VisualShaderNodeIf`](class_visualshadernodeif.md), [`VisualShaderNodeInput`](class_visualshadernodeinput.md), [`VisualShaderNodeIntFunc`](class_visualshadernodeintfunc.md), [`VisualShaderNodeIntOp`](class_visualshadernodeintop.md), [`VisualShaderNodeIs`](class_visualshadernodeis.md), [`VisualShaderNodeLinearSceneDepth`](class_visualshadernodelinearscenedepth.md), [`VisualShaderNodeMix`](class_visualshadernodemix.md), [`VisualShaderNodeMultiplyAdd`](class_visualshadernodemultiplyadd.md), [`VisualShaderNodeOuterProduct`](class_visualshadernodeouterproduct.md), [`VisualShaderNodeOutput`](class_visualshadernodeoutput.md), [`VisualShaderNodeParameter`](class_visualshadernodeparameter.md), [`VisualShaderNodeParameterRef`](class_visualshadernodeparameterref.md), [`VisualShaderNodeParticleAccelerator`](class_visualshadernodeparticleaccelerator.md), [`VisualShaderNodeParticleConeVelocity`](class_visualshadernodeparticleconevelocity.md), [`VisualShaderNodeParticleEmit`](class_visualshadernodeparticleemit.md), [`VisualShaderNodeParticleEmitter`](class_visualshadernodeparticleemitter.md), [`VisualShaderNodeParticleMultiplyByAxisAngle`](class_visualshadernodeparticlemultiplybyaxisangle.md), [`VisualShaderNodeParticleRandomness`](class_visualshadernodeparticlerandomness.md), [`VisualShaderNodeProximityFade`](class_visualshadernodeproximityfade.md), [`VisualShaderNodeRandomRange`](class_visualshadernoderandomrange.md), [`VisualShaderNodeRemap`](class_visualshadernoderemap.md), [`VisualShaderNodeReroute`](class_visualshadernodereroute.md), [`VisualShaderNodeResizableBase`](class_visualshadernoderesizablebase.md), [`VisualShaderNodeRotationByAxis`](class_visualshadernoderotationbyaxis.md), [`VisualShaderNodeSample3D`](class_visualshadernodesample3d.md), [`VisualShaderNodeScreenNormalWorldSpace`](class_visualshadernodescreennormalworldspace.md), [`VisualShaderNodeScreenUVToSDF`](class_visualshadernodescreenuvtosdf.md), [`VisualShaderNodeSDFRaymarch`](class_visualshadernodesdfraymarch.md), [`VisualShaderNodeSDFToScreenUV`](class_visualshadernodesdftoscreenuv.md), [`VisualShaderNodeSmoothStep`](class_visualshadernodesmoothstep.md), [`VisualShaderNodeStep`](class_visualshadernodestep.md), [`VisualShaderNodeSwitch`](class_visualshadernodeswitch.md), [`VisualShaderNodeTexture`](class_visualshadernodetexture.md), [`VisualShaderNodeTextureSDF`](class_visualshadernodetexturesdf.md), [`VisualShaderNodeTextureSDFNormal`](class_visualshadernodetexturesdfnormal.md), [`VisualShaderNodeTransformCompose`](class_visualshadernodetransformcompose.md), [`VisualShaderNodeTransformDecompose`](class_visualshadernodetransformdecompose.md), [`VisualShaderNodeTransformFunc`](class_visualshadernodetransformfunc.md), [`VisualShaderNodeTransformOp`](class_visualshadernodetransformop.md), [`VisualShaderNodeTransformVecMult`](class_visualshadernodetransformvecmult.md), [`VisualShaderNodeUIntFunc`](class_visualshadernodeuintfunc.md), [`VisualShaderNodeUIntOp`](class_visualshadernodeuintop.md), [`VisualShaderNodeUVFunc`](class_visualshadernodeuvfunc.md), [`VisualShaderNodeUVPolarCoord`](class_visualshadernodeuvpolarcoord.md), [`VisualShaderNodeVarying`](class_visualshadernodevarying.md), [`VisualShaderNodeVectorBase`](class_visualshadernodevectorbase.md), [`VisualShaderNodeWorldPositionFromDepth`](class_visualshadernodeworldpositionfromdepth.md)

Base class for [`VisualShader`](class_visualshader.md) nodes. Not related to scene nodes.

## 描述

Visual shader graphs consist of various nodes. Each node in the graph is a separate object and they are represented as a rectangular boxes with title and a set of properties. Each node also has connection ports that allow to connect it to another nodes and control the flow of the shader.

## 属性

|||
|:-:|:--|
| [`int`](class_int.md) | [`linked_parent_graph_frame`](class_visualshadernode.md#class_visualshadernode_property_linked_parent_graph_frame) | ``-1`` |
| [`int`](class_int.md) | [`output_port_for_preview`](class_visualshadernode.md#class_visualshadernode_property_output_port_for_preview)     | ``-1`` |

## 方法

|||
|:-:|:--|
| `void`                        | [`clear_default_input_values`](class_visualshadernode.md#class_visualshadernode_method_clear_default_input_values) ( )                                                                                                                         |
| [`int`](class_int.md)         | [`get_default_input_port`](class_visualshadernode.md#class_visualshadernode_method_get_default_input_port) ( type: [PortType](#enum_visualshadernode_porttype) ) const[^const]                                                                 |
| [`Array`](class_array.md)     | [`get_default_input_values`](class_visualshadernode.md#class_visualshadernode_method_get_default_input_values) ( ) const[^const]                                                                                                               |
| [`Variant`](class_variant.md) | [`get_input_port_default_value`](class_visualshadernode.md#class_visualshadernode_method_get_input_port_default_value) ( port: [`int`](class_int.md) ) const[^const]                                                                           |
| `void`                        | [`remove_input_port_default_value`](class_visualshadernode.md#class_visualshadernode_method_remove_input_port_default_value) ( port: [`int`](class_int.md) )                                                                                   |
| `void`                        | [`set_default_input_values`](class_visualshadernode.md#class_visualshadernode_method_set_default_input_values) ( values: [`Array`](class_array.md) )                                                                                           |
| `void`                        | [`set_input_port_default_value`](class_visualshadernode.md#class_visualshadernode_method_set_input_port_default_value) ( port: [`int`](class_int.md), value: [`Variant`](class_variant.md), prev_value: [`Variant`](class_variant.md) = null ) |

<!-- rst-class:: classref-section-separator -->

---

## 枚举

<div id="_class_enum_visualshadernode_porttype"></div>

enum **PortType**: <div id="enum_visualshadernode_porttype"></div>

<div id="_class_visualshadernode_constant_port_type_scalar"></div>

[PortType](#enum_visualshadernode_porttype) **PORT_TYPE_SCALAR** = ``0``

Floating-point scalar. Translated to `float` type in shader code.

<div id="_class_visualshadernode_constant_port_type_scalar_int"></div>

[PortType](#enum_visualshadernode_porttype) **PORT_TYPE_SCALAR_INT** = ``1``

Integer scalar. Translated to `int` type in shader code.

<div id="_class_visualshadernode_constant_port_type_scalar_uint"></div>

[PortType](#enum_visualshadernode_porttype) **PORT_TYPE_SCALAR_UINT** = ``2``

Unsigned integer scalar. Translated to `uint` type in shader code.

<div id="_class_visualshadernode_constant_port_type_vector_2d"></div>

[PortType](#enum_visualshadernode_porttype) **PORT_TYPE_VECTOR_2D** = ``3``

2D vector of floating-point values. Translated to `vec2` type in shader code.

<div id="_class_visualshadernode_constant_port_type_vector_3d"></div>

[PortType](#enum_visualshadernode_porttype) **PORT_TYPE_VECTOR_3D** = ``4``

3D vector of floating-point values. Translated to `vec3` type in shader code.

<div id="_class_visualshadernode_constant_port_type_vector_4d"></div>

[PortType](#enum_visualshadernode_porttype) **PORT_TYPE_VECTOR_4D** = ``5``

4D vector of floating-point values. Translated to `vec4` type in shader code.

<div id="_class_visualshadernode_constant_port_type_boolean"></div>

[PortType](#enum_visualshadernode_porttype) **PORT_TYPE_BOOLEAN** = ``6``

Boolean type. Translated to `bool` type in shader code.

<div id="_class_visualshadernode_constant_port_type_transform"></div>

[PortType](#enum_visualshadernode_porttype) **PORT_TYPE_TRANSFORM** = ``7``

Transform type. Translated to `mat4` type in shader code.

<div id="_class_visualshadernode_constant_port_type_sampler"></div>

[PortType](#enum_visualshadernode_porttype) **PORT_TYPE_SAMPLER** = ``8``

Sampler type. Translated to reference of sampler uniform in shader code. Can only be used for input ports in non-uniform nodes.

<div id="_class_visualshadernode_constant_port_type_max"></div>

[PortType](#enum_visualshadernode_porttype) **PORT_TYPE_MAX** = ``9``

Represents the size of the [PortType](#enum_visualshadernode_porttype) enum.

<!-- rst-class:: classref-section-separator -->

---

## 属性说明

<div id="_class_visualshadernode_property_linked_parent_graph_frame"></div>

[`int`](class_int.md) **linked_parent_graph_frame** = ``-1`` <div id="class_visualshadernode_property_linked_parent_graph_frame"></div>

- `void` **set_frame** ( value: [`int`](class_int.md) )
- [`int`](class_int.md) **get_frame** ( )

Represents the index of the frame this node is linked to. If set to `-1` the node is not linked to any frame.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_visualshadernode_property_output_port_for_preview"></div>

[`int`](class_int.md) **output_port_for_preview** = ``-1`` <div id="class_visualshadernode_property_output_port_for_preview"></div>

- `void` **set_output_port_for_preview** ( value: [`int`](class_int.md) )
- [`int`](class_int.md) **get_output_port_for_preview** ( )

Sets the output port index which will be showed for preview. If set to `-1` no port will be open for preview.

<!-- rst-class:: classref-section-separator -->

---

## 方法说明

<div id="_class_visualshadernode_method_clear_default_input_values"></div>

`void` **clear_default_input_values** ( )<div id="class_visualshadernode_method_clear_default_input_values"></div>

Clears the default input ports value.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_visualshadernode_method_get_default_input_port"></div>

[`int`](class_int.md) **get_default_input_port** ( type: [PortType](#enum_visualshadernode_porttype) ) const[^const]<div id="class_visualshadernode_method_get_default_input_port"></div>

Returns the input port which should be connected by default when this node is created as a result of dragging a connection from an existing node to the empty space on the graph.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_visualshadernode_method_get_default_input_values"></div>

[`Array`](class_array.md) **get_default_input_values** ( ) const[^const]<div id="class_visualshadernode_method_get_default_input_values"></div>

Returns an [`Array`](class_array.md) containing default values for all of the input ports of the node in the form `[index0, value0, index1, value1, ...]`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_visualshadernode_method_get_input_port_default_value"></div>

[`Variant`](class_variant.md) **get_input_port_default_value** ( port: [`int`](class_int.md) ) const[^const]<div id="class_visualshadernode_method_get_input_port_default_value"></div>

Returns the default value of the input `port`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_visualshadernode_method_remove_input_port_default_value"></div>

`void` **remove_input_port_default_value** ( port: [`int`](class_int.md) )<div id="class_visualshadernode_method_remove_input_port_default_value"></div>

Removes the default value of the input `port`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_visualshadernode_method_set_default_input_values"></div>

`void` **set_default_input_values** ( values: [`Array`](class_array.md) )<div id="class_visualshadernode_method_set_default_input_values"></div>

Sets the default input ports values using an [`Array`](class_array.md) of the form `[index0, value0, index1, value1, ...]`. For example: `[0, Vector3(0, 0, 0), 1, Vector3(0, 0, 0)]`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_visualshadernode_method_set_input_port_default_value"></div>

`void` **set_input_port_default_value** ( port: [`int`](class_int.md), value: [`Variant`](class_variant.md), prev_value: [`Variant`](class_variant.md) = null )<div id="class_visualshadernode_method_set_input_port_default_value"></div>

Sets the default `value` for the selected input `port`.

[^virtual]: 本方法通常需要用户覆盖才能生效。
[^const]: 本方法无副作用，不会修改该实例的任何成员变量。
[^vararg]: 本方法除了能接受在此处描述的参数外，还能够继续接受任意数量的参数。
[^constructor]: 本方法用于构造某个类型。
[^static]: 调用本方法无需实例，可直接使用类名进行调用。
[^operator]: 本方法描述的是使用本类型作为左操作数的有效运算符。
[^bitfield]: 这个值是由下列位标志构成位掩码的整数。
[^void]: 无返回值。
