<!-- ⚠ 请勿编辑本文件 ⚠ -->
<!-- 本文档使用脚本从 WeDot 引擎源码仓库生成。 -->
<!-- 生成脚本：https://github.com/WeDot-Engine/WeDot/tree/master/doc/tools/make_md.py； -->
<!-- 原文件：https://github.com/WeDot-Engine/WeDot/tree/master/doc/classes/XRFaceTracker.xml。 -->

<div id="_class_xrfacetracker"></div>

# XRFaceTracker

**实验性：** This class may be changed or removed in future versions.

**继承：** [`XRTracker`](class_xrtracker.md) **<** [`RefCounted`](class_refcounted.md) **<** [`Object`](class_object.md)

A tracked face.

## 描述

An instance of this object represents a tracked face and its corresponding blend shapes. The blend shapes come from the [*Unified Expressions*](https://docs.vrcft.io/docs/tutorial-avatars/tutorial-avatars-extras/unified-blendshapes) standard, and contain extended details and visuals for each blend shape. Additionally the [*Tracking Standard Comparison*](https://docs.vrcft.io/docs/tutorial-avatars/tutorial-avatars-extras/compatibility/overview) page documents the relationship between Unified Expressions and other standards.

As face trackers are turned on they are registered with the [`XRServer`](class_xrserver.md).

## 属性

|||
|:-:|:--|
| [`PackedFloat32Array`](class_packedfloat32array.md) | [`blend_shapes`](class_xrfacetracker.md#class_xrfacetracker_property_blend_shapes) | ``PackedFloat32Array()``                                                           |
| [TrackerType](#enum_xrserver_trackertype)           | type                                                                               | ``64`` (overrides [`XRTracker`](class_xrtracker.md#class_xrtracker_property_type)) |

## 方法

|||
|:-:|:--|
| [`float`](class_float.md) | [`get_blend_shape`](class_xrfacetracker.md#class_xrfacetracker_method_get_blend_shape) ( blend_shape: [BlendShapeEntry](#enum_xrfacetracker_blendshapeentry) ) const[^const]                      |
| `void`                    | [`set_blend_shape`](class_xrfacetracker.md#class_xrfacetracker_method_set_blend_shape) ( blend_shape: [BlendShapeEntry](#enum_xrfacetracker_blendshapeentry), weight: [`float`](class_float.md) ) |

<!-- rst-class:: classref-section-separator -->

---

## 枚举

<div id="_class_enum_xrfacetracker_blendshapeentry"></div>

enum **BlendShapeEntry**: <div id="enum_xrfacetracker_blendshapeentry"></div>

<div id="_class_xrfacetracker_constant_ft_eye_look_out_right"></div>

[BlendShapeEntry](#enum_xrfacetracker_blendshapeentry) **FT_EYE_LOOK_OUT_RIGHT** = ``0``

Right eye looks outwards.

<div id="_class_xrfacetracker_constant_ft_eye_look_in_right"></div>

[BlendShapeEntry](#enum_xrfacetracker_blendshapeentry) **FT_EYE_LOOK_IN_RIGHT** = ``1``

Right eye looks inwards.

<div id="_class_xrfacetracker_constant_ft_eye_look_up_right"></div>

[BlendShapeEntry](#enum_xrfacetracker_blendshapeentry) **FT_EYE_LOOK_UP_RIGHT** = ``2``

Right eye looks upwards.

<div id="_class_xrfacetracker_constant_ft_eye_look_down_right"></div>

[BlendShapeEntry](#enum_xrfacetracker_blendshapeentry) **FT_EYE_LOOK_DOWN_RIGHT** = ``3``

Right eye looks downwards.

<div id="_class_xrfacetracker_constant_ft_eye_look_out_left"></div>

[BlendShapeEntry](#enum_xrfacetracker_blendshapeentry) **FT_EYE_LOOK_OUT_LEFT** = ``4``

Left eye looks outwards.

<div id="_class_xrfacetracker_constant_ft_eye_look_in_left"></div>

[BlendShapeEntry](#enum_xrfacetracker_blendshapeentry) **FT_EYE_LOOK_IN_LEFT** = ``5``

Left eye looks inwards.

<div id="_class_xrfacetracker_constant_ft_eye_look_up_left"></div>

[BlendShapeEntry](#enum_xrfacetracker_blendshapeentry) **FT_EYE_LOOK_UP_LEFT** = ``6``

Left eye looks upwards.

<div id="_class_xrfacetracker_constant_ft_eye_look_down_left"></div>

[BlendShapeEntry](#enum_xrfacetracker_blendshapeentry) **FT_EYE_LOOK_DOWN_LEFT** = ``7``

Left eye looks downwards.

<div id="_class_xrfacetracker_constant_ft_eye_closed_right"></div>

[BlendShapeEntry](#enum_xrfacetracker_blendshapeentry) **FT_EYE_CLOSED_RIGHT** = ``8``

Closes the right eyelid.

<div id="_class_xrfacetracker_constant_ft_eye_closed_left"></div>

[BlendShapeEntry](#enum_xrfacetracker_blendshapeentry) **FT_EYE_CLOSED_LEFT** = ``9``

Closes the left eyelid.

<div id="_class_xrfacetracker_constant_ft_eye_squint_right"></div>

[BlendShapeEntry](#enum_xrfacetracker_blendshapeentry) **FT_EYE_SQUINT_RIGHT** = ``10``

Squeezes the right eye socket muscles.

<div id="_class_xrfacetracker_constant_ft_eye_squint_left"></div>

[BlendShapeEntry](#enum_xrfacetracker_blendshapeentry) **FT_EYE_SQUINT_LEFT** = ``11``

Squeezes the left eye socket muscles.

<div id="_class_xrfacetracker_constant_ft_eye_wide_right"></div>

[BlendShapeEntry](#enum_xrfacetracker_blendshapeentry) **FT_EYE_WIDE_RIGHT** = ``12``

Right eyelid widens beyond relaxed.

<div id="_class_xrfacetracker_constant_ft_eye_wide_left"></div>

[BlendShapeEntry](#enum_xrfacetracker_blendshapeentry) **FT_EYE_WIDE_LEFT** = ``13``

Left eyelid widens beyond relaxed.

<div id="_class_xrfacetracker_constant_ft_eye_dilation_right"></div>

[BlendShapeEntry](#enum_xrfacetracker_blendshapeentry) **FT_EYE_DILATION_RIGHT** = ``14``

Dilates the right eye pupil.

<div id="_class_xrfacetracker_constant_ft_eye_dilation_left"></div>

[BlendShapeEntry](#enum_xrfacetracker_blendshapeentry) **FT_EYE_DILATION_LEFT** = ``15``

Dilates the left eye pupil.

<div id="_class_xrfacetracker_constant_ft_eye_constrict_right"></div>

[BlendShapeEntry](#enum_xrfacetracker_blendshapeentry) **FT_EYE_CONSTRICT_RIGHT** = ``16``

Constricts the right eye pupil.

<div id="_class_xrfacetracker_constant_ft_eye_constrict_left"></div>

[BlendShapeEntry](#enum_xrfacetracker_blendshapeentry) **FT_EYE_CONSTRICT_LEFT** = ``17``

Constricts the left eye pupil.

<div id="_class_xrfacetracker_constant_ft_brow_pinch_right"></div>

[BlendShapeEntry](#enum_xrfacetracker_blendshapeentry) **FT_BROW_PINCH_RIGHT** = ``18``

Right eyebrow pinches in.

<div id="_class_xrfacetracker_constant_ft_brow_pinch_left"></div>

[BlendShapeEntry](#enum_xrfacetracker_blendshapeentry) **FT_BROW_PINCH_LEFT** = ``19``

Left eyebrow pinches in.

<div id="_class_xrfacetracker_constant_ft_brow_lowerer_right"></div>

[BlendShapeEntry](#enum_xrfacetracker_blendshapeentry) **FT_BROW_LOWERER_RIGHT** = ``20``

Outer right eyebrow pulls down.

<div id="_class_xrfacetracker_constant_ft_brow_lowerer_left"></div>

[BlendShapeEntry](#enum_xrfacetracker_blendshapeentry) **FT_BROW_LOWERER_LEFT** = ``21``

Outer left eyebrow pulls down.

<div id="_class_xrfacetracker_constant_ft_brow_inner_up_right"></div>

[BlendShapeEntry](#enum_xrfacetracker_blendshapeentry) **FT_BROW_INNER_UP_RIGHT** = ``22``

Inner right eyebrow pulls up.

<div id="_class_xrfacetracker_constant_ft_brow_inner_up_left"></div>

[BlendShapeEntry](#enum_xrfacetracker_blendshapeentry) **FT_BROW_INNER_UP_LEFT** = ``23``

Inner left eyebrow pulls up.

<div id="_class_xrfacetracker_constant_ft_brow_outer_up_right"></div>

[BlendShapeEntry](#enum_xrfacetracker_blendshapeentry) **FT_BROW_OUTER_UP_RIGHT** = ``24``

Outer right eyebrow pulls up.

<div id="_class_xrfacetracker_constant_ft_brow_outer_up_left"></div>

[BlendShapeEntry](#enum_xrfacetracker_blendshapeentry) **FT_BROW_OUTER_UP_LEFT** = ``25``

Outer left eyebrow pulls up.

<div id="_class_xrfacetracker_constant_ft_nose_sneer_right"></div>

[BlendShapeEntry](#enum_xrfacetracker_blendshapeentry) **FT_NOSE_SNEER_RIGHT** = ``26``

Right side face sneers.

<div id="_class_xrfacetracker_constant_ft_nose_sneer_left"></div>

[BlendShapeEntry](#enum_xrfacetracker_blendshapeentry) **FT_NOSE_SNEER_LEFT** = ``27``

Left side face sneers.

<div id="_class_xrfacetracker_constant_ft_nasal_dilation_right"></div>

[BlendShapeEntry](#enum_xrfacetracker_blendshapeentry) **FT_NASAL_DILATION_RIGHT** = ``28``

Right side nose canal dilates.

<div id="_class_xrfacetracker_constant_ft_nasal_dilation_left"></div>

[BlendShapeEntry](#enum_xrfacetracker_blendshapeentry) **FT_NASAL_DILATION_LEFT** = ``29``

Left side nose canal dilates.

<div id="_class_xrfacetracker_constant_ft_nasal_constrict_right"></div>

[BlendShapeEntry](#enum_xrfacetracker_blendshapeentry) **FT_NASAL_CONSTRICT_RIGHT** = ``30``

Right side nose canal constricts.

<div id="_class_xrfacetracker_constant_ft_nasal_constrict_left"></div>

[BlendShapeEntry](#enum_xrfacetracker_blendshapeentry) **FT_NASAL_CONSTRICT_LEFT** = ``31``

Left side nose canal constricts.

<div id="_class_xrfacetracker_constant_ft_cheek_squint_right"></div>

[BlendShapeEntry](#enum_xrfacetracker_blendshapeentry) **FT_CHEEK_SQUINT_RIGHT** = ``32``

Raises the right side cheek.

<div id="_class_xrfacetracker_constant_ft_cheek_squint_left"></div>

[BlendShapeEntry](#enum_xrfacetracker_blendshapeentry) **FT_CHEEK_SQUINT_LEFT** = ``33``

Raises the left side cheek.

<div id="_class_xrfacetracker_constant_ft_cheek_puff_right"></div>

[BlendShapeEntry](#enum_xrfacetracker_blendshapeentry) **FT_CHEEK_PUFF_RIGHT** = ``34``

Puffs the right side cheek.

<div id="_class_xrfacetracker_constant_ft_cheek_puff_left"></div>

[BlendShapeEntry](#enum_xrfacetracker_blendshapeentry) **FT_CHEEK_PUFF_LEFT** = ``35``

Puffs the left side cheek.

<div id="_class_xrfacetracker_constant_ft_cheek_suck_right"></div>

[BlendShapeEntry](#enum_xrfacetracker_blendshapeentry) **FT_CHEEK_SUCK_RIGHT** = ``36``

Sucks in the right side cheek.

<div id="_class_xrfacetracker_constant_ft_cheek_suck_left"></div>

[BlendShapeEntry](#enum_xrfacetracker_blendshapeentry) **FT_CHEEK_SUCK_LEFT** = ``37``

Sucks in the left side cheek.

<div id="_class_xrfacetracker_constant_ft_jaw_open"></div>

[BlendShapeEntry](#enum_xrfacetracker_blendshapeentry) **FT_JAW_OPEN** = ``38``

Opens jawbone.

<div id="_class_xrfacetracker_constant_ft_mouth_closed"></div>

[BlendShapeEntry](#enum_xrfacetracker_blendshapeentry) **FT_MOUTH_CLOSED** = ``39``

Closes the mouth.

<div id="_class_xrfacetracker_constant_ft_jaw_right"></div>

[BlendShapeEntry](#enum_xrfacetracker_blendshapeentry) **FT_JAW_RIGHT** = ``40``

Pushes jawbone right.

<div id="_class_xrfacetracker_constant_ft_jaw_left"></div>

[BlendShapeEntry](#enum_xrfacetracker_blendshapeentry) **FT_JAW_LEFT** = ``41``

Pushes jawbone left.

<div id="_class_xrfacetracker_constant_ft_jaw_forward"></div>

[BlendShapeEntry](#enum_xrfacetracker_blendshapeentry) **FT_JAW_FORWARD** = ``42``

Pushes jawbone forward.

<div id="_class_xrfacetracker_constant_ft_jaw_backward"></div>

[BlendShapeEntry](#enum_xrfacetracker_blendshapeentry) **FT_JAW_BACKWARD** = ``43``

Pushes jawbone backward.

<div id="_class_xrfacetracker_constant_ft_jaw_clench"></div>

[BlendShapeEntry](#enum_xrfacetracker_blendshapeentry) **FT_JAW_CLENCH** = ``44``

Flexes jaw muscles.

<div id="_class_xrfacetracker_constant_ft_jaw_mandible_raise"></div>

[BlendShapeEntry](#enum_xrfacetracker_blendshapeentry) **FT_JAW_MANDIBLE_RAISE** = ``45``

Raises the jawbone.

<div id="_class_xrfacetracker_constant_ft_lip_suck_upper_right"></div>

[BlendShapeEntry](#enum_xrfacetracker_blendshapeentry) **FT_LIP_SUCK_UPPER_RIGHT** = ``46``

Upper right lip part tucks in the mouth.

<div id="_class_xrfacetracker_constant_ft_lip_suck_upper_left"></div>

[BlendShapeEntry](#enum_xrfacetracker_blendshapeentry) **FT_LIP_SUCK_UPPER_LEFT** = ``47``

Upper left lip part tucks in the mouth.

<div id="_class_xrfacetracker_constant_ft_lip_suck_lower_right"></div>

[BlendShapeEntry](#enum_xrfacetracker_blendshapeentry) **FT_LIP_SUCK_LOWER_RIGHT** = ``48``

Lower right lip part tucks in the mouth.

<div id="_class_xrfacetracker_constant_ft_lip_suck_lower_left"></div>

[BlendShapeEntry](#enum_xrfacetracker_blendshapeentry) **FT_LIP_SUCK_LOWER_LEFT** = ``49``

Lower left lip part tucks in the mouth.

<div id="_class_xrfacetracker_constant_ft_lip_suck_corner_right"></div>

[BlendShapeEntry](#enum_xrfacetracker_blendshapeentry) **FT_LIP_SUCK_CORNER_RIGHT** = ``50``

Right lip corner folds into the mouth.

<div id="_class_xrfacetracker_constant_ft_lip_suck_corner_left"></div>

[BlendShapeEntry](#enum_xrfacetracker_blendshapeentry) **FT_LIP_SUCK_CORNER_LEFT** = ``51``

Left lip corner folds into the mouth.

<div id="_class_xrfacetracker_constant_ft_lip_funnel_upper_right"></div>

[BlendShapeEntry](#enum_xrfacetracker_blendshapeentry) **FT_LIP_FUNNEL_UPPER_RIGHT** = ``52``

Upper right lip part pushes into a funnel.

<div id="_class_xrfacetracker_constant_ft_lip_funnel_upper_left"></div>

[BlendShapeEntry](#enum_xrfacetracker_blendshapeentry) **FT_LIP_FUNNEL_UPPER_LEFT** = ``53``

Upper left lip part pushes into a funnel.

<div id="_class_xrfacetracker_constant_ft_lip_funnel_lower_right"></div>

[BlendShapeEntry](#enum_xrfacetracker_blendshapeentry) **FT_LIP_FUNNEL_LOWER_RIGHT** = ``54``

Lower right lip part pushes into a funnel.

<div id="_class_xrfacetracker_constant_ft_lip_funnel_lower_left"></div>

[BlendShapeEntry](#enum_xrfacetracker_blendshapeentry) **FT_LIP_FUNNEL_LOWER_LEFT** = ``55``

Lower left lip part pushes into a funnel.

<div id="_class_xrfacetracker_constant_ft_lip_pucker_upper_right"></div>

[BlendShapeEntry](#enum_xrfacetracker_blendshapeentry) **FT_LIP_PUCKER_UPPER_RIGHT** = ``56``

Upper right lip part pushes outwards.

<div id="_class_xrfacetracker_constant_ft_lip_pucker_upper_left"></div>

[BlendShapeEntry](#enum_xrfacetracker_blendshapeentry) **FT_LIP_PUCKER_UPPER_LEFT** = ``57``

Upper left lip part pushes outwards.

<div id="_class_xrfacetracker_constant_ft_lip_pucker_lower_right"></div>

[BlendShapeEntry](#enum_xrfacetracker_blendshapeentry) **FT_LIP_PUCKER_LOWER_RIGHT** = ``58``

Lower right lip part pushes outwards.

<div id="_class_xrfacetracker_constant_ft_lip_pucker_lower_left"></div>

[BlendShapeEntry](#enum_xrfacetracker_blendshapeentry) **FT_LIP_PUCKER_LOWER_LEFT** = ``59``

Lower left lip part pushes outwards.

<div id="_class_xrfacetracker_constant_ft_mouth_upper_up_right"></div>

[BlendShapeEntry](#enum_xrfacetracker_blendshapeentry) **FT_MOUTH_UPPER_UP_RIGHT** = ``60``

Upper right part of the lip pulls up.

<div id="_class_xrfacetracker_constant_ft_mouth_upper_up_left"></div>

[BlendShapeEntry](#enum_xrfacetracker_blendshapeentry) **FT_MOUTH_UPPER_UP_LEFT** = ``61``

Upper left part of the lip pulls up.

<div id="_class_xrfacetracker_constant_ft_mouth_lower_down_right"></div>

[BlendShapeEntry](#enum_xrfacetracker_blendshapeentry) **FT_MOUTH_LOWER_DOWN_RIGHT** = ``62``

Lower right part of the lip pulls up.

<div id="_class_xrfacetracker_constant_ft_mouth_lower_down_left"></div>

[BlendShapeEntry](#enum_xrfacetracker_blendshapeentry) **FT_MOUTH_LOWER_DOWN_LEFT** = ``63``

Lower left part of the lip pulls up.

<div id="_class_xrfacetracker_constant_ft_mouth_upper_deepen_right"></div>

[BlendShapeEntry](#enum_xrfacetracker_blendshapeentry) **FT_MOUTH_UPPER_DEEPEN_RIGHT** = ``64``

Upper right lip part pushes in the cheek.

<div id="_class_xrfacetracker_constant_ft_mouth_upper_deepen_left"></div>

[BlendShapeEntry](#enum_xrfacetracker_blendshapeentry) **FT_MOUTH_UPPER_DEEPEN_LEFT** = ``65``

Upper left lip part pushes in the cheek.

<div id="_class_xrfacetracker_constant_ft_mouth_upper_right"></div>

[BlendShapeEntry](#enum_xrfacetracker_blendshapeentry) **FT_MOUTH_UPPER_RIGHT** = ``66``

Moves upper lip right.

<div id="_class_xrfacetracker_constant_ft_mouth_upper_left"></div>

[BlendShapeEntry](#enum_xrfacetracker_blendshapeentry) **FT_MOUTH_UPPER_LEFT** = ``67``

Moves upper lip left.

<div id="_class_xrfacetracker_constant_ft_mouth_lower_right"></div>

[BlendShapeEntry](#enum_xrfacetracker_blendshapeentry) **FT_MOUTH_LOWER_RIGHT** = ``68``

Moves lower lip right.

<div id="_class_xrfacetracker_constant_ft_mouth_lower_left"></div>

[BlendShapeEntry](#enum_xrfacetracker_blendshapeentry) **FT_MOUTH_LOWER_LEFT** = ``69``

Moves lower lip left.

<div id="_class_xrfacetracker_constant_ft_mouth_corner_pull_right"></div>

[BlendShapeEntry](#enum_xrfacetracker_blendshapeentry) **FT_MOUTH_CORNER_PULL_RIGHT** = ``70``

Right lip corner pulls diagonally up and out.

<div id="_class_xrfacetracker_constant_ft_mouth_corner_pull_left"></div>

[BlendShapeEntry](#enum_xrfacetracker_blendshapeentry) **FT_MOUTH_CORNER_PULL_LEFT** = ``71``

Left lip corner pulls diagonally up and out.

<div id="_class_xrfacetracker_constant_ft_mouth_corner_slant_right"></div>

[BlendShapeEntry](#enum_xrfacetracker_blendshapeentry) **FT_MOUTH_CORNER_SLANT_RIGHT** = ``72``

Right corner lip slants up.

<div id="_class_xrfacetracker_constant_ft_mouth_corner_slant_left"></div>

[BlendShapeEntry](#enum_xrfacetracker_blendshapeentry) **FT_MOUTH_CORNER_SLANT_LEFT** = ``73``

Left corner lip slants up.

<div id="_class_xrfacetracker_constant_ft_mouth_frown_right"></div>

[BlendShapeEntry](#enum_xrfacetracker_blendshapeentry) **FT_MOUTH_FROWN_RIGHT** = ``74``

Right corner lip pulls down.

<div id="_class_xrfacetracker_constant_ft_mouth_frown_left"></div>

[BlendShapeEntry](#enum_xrfacetracker_blendshapeentry) **FT_MOUTH_FROWN_LEFT** = ``75``

Left corner lip pulls down.

<div id="_class_xrfacetracker_constant_ft_mouth_stretch_right"></div>

[BlendShapeEntry](#enum_xrfacetracker_blendshapeentry) **FT_MOUTH_STRETCH_RIGHT** = ``76``

Mouth corner lip pulls out and down.

<div id="_class_xrfacetracker_constant_ft_mouth_stretch_left"></div>

[BlendShapeEntry](#enum_xrfacetracker_blendshapeentry) **FT_MOUTH_STRETCH_LEFT** = ``77``

Mouth corner lip pulls out and down.

<div id="_class_xrfacetracker_constant_ft_mouth_dimple_right"></div>

[BlendShapeEntry](#enum_xrfacetracker_blendshapeentry) **FT_MOUTH_DIMPLE_RIGHT** = ``78``

Right lip corner is pushed backwards.

<div id="_class_xrfacetracker_constant_ft_mouth_dimple_left"></div>

[BlendShapeEntry](#enum_xrfacetracker_blendshapeentry) **FT_MOUTH_DIMPLE_LEFT** = ``79``

Left lip corner is pushed backwards.

<div id="_class_xrfacetracker_constant_ft_mouth_raiser_upper"></div>

[BlendShapeEntry](#enum_xrfacetracker_blendshapeentry) **FT_MOUTH_RAISER_UPPER** = ``80``

Raises and slightly pushes out the upper mouth.

<div id="_class_xrfacetracker_constant_ft_mouth_raiser_lower"></div>

[BlendShapeEntry](#enum_xrfacetracker_blendshapeentry) **FT_MOUTH_RAISER_LOWER** = ``81``

Raises and slightly pushes out the lower mouth.

<div id="_class_xrfacetracker_constant_ft_mouth_press_right"></div>

[BlendShapeEntry](#enum_xrfacetracker_blendshapeentry) **FT_MOUTH_PRESS_RIGHT** = ``82``

Right side lips press and flatten together vertically.

<div id="_class_xrfacetracker_constant_ft_mouth_press_left"></div>

[BlendShapeEntry](#enum_xrfacetracker_blendshapeentry) **FT_MOUTH_PRESS_LEFT** = ``83``

Left side lips press and flatten together vertically.

<div id="_class_xrfacetracker_constant_ft_mouth_tightener_right"></div>

[BlendShapeEntry](#enum_xrfacetracker_blendshapeentry) **FT_MOUTH_TIGHTENER_RIGHT** = ``84``

Right side lips squeeze together horizontally.

<div id="_class_xrfacetracker_constant_ft_mouth_tightener_left"></div>

[BlendShapeEntry](#enum_xrfacetracker_blendshapeentry) **FT_MOUTH_TIGHTENER_LEFT** = ``85``

Left side lips squeeze together horizontally.

<div id="_class_xrfacetracker_constant_ft_tongue_out"></div>

[BlendShapeEntry](#enum_xrfacetracker_blendshapeentry) **FT_TONGUE_OUT** = ``86``

Tongue visibly sticks out of the mouth.

<div id="_class_xrfacetracker_constant_ft_tongue_up"></div>

[BlendShapeEntry](#enum_xrfacetracker_blendshapeentry) **FT_TONGUE_UP** = ``87``

Tongue points upwards.

<div id="_class_xrfacetracker_constant_ft_tongue_down"></div>

[BlendShapeEntry](#enum_xrfacetracker_blendshapeentry) **FT_TONGUE_DOWN** = ``88``

Tongue points downwards.

<div id="_class_xrfacetracker_constant_ft_tongue_right"></div>

[BlendShapeEntry](#enum_xrfacetracker_blendshapeentry) **FT_TONGUE_RIGHT** = ``89``

Tongue points right.

<div id="_class_xrfacetracker_constant_ft_tongue_left"></div>

[BlendShapeEntry](#enum_xrfacetracker_blendshapeentry) **FT_TONGUE_LEFT** = ``90``

Tongue points left.

<div id="_class_xrfacetracker_constant_ft_tongue_roll"></div>

[BlendShapeEntry](#enum_xrfacetracker_blendshapeentry) **FT_TONGUE_ROLL** = ``91``

Sides of the tongue funnel, creating a roll.

<div id="_class_xrfacetracker_constant_ft_tongue_blend_down"></div>

[BlendShapeEntry](#enum_xrfacetracker_blendshapeentry) **FT_TONGUE_BLEND_DOWN** = ``92``

Tongue arches up then down inside the mouth.

<div id="_class_xrfacetracker_constant_ft_tongue_curl_up"></div>

[BlendShapeEntry](#enum_xrfacetracker_blendshapeentry) **FT_TONGUE_CURL_UP** = ``93``

Tongue arches down then up inside the mouth.

<div id="_class_xrfacetracker_constant_ft_tongue_squish"></div>

[BlendShapeEntry](#enum_xrfacetracker_blendshapeentry) **FT_TONGUE_SQUISH** = ``94``

Tongue squishes together and thickens.

<div id="_class_xrfacetracker_constant_ft_tongue_flat"></div>

[BlendShapeEntry](#enum_xrfacetracker_blendshapeentry) **FT_TONGUE_FLAT** = ``95``

Tongue flattens and thins out.

<div id="_class_xrfacetracker_constant_ft_tongue_twist_right"></div>

[BlendShapeEntry](#enum_xrfacetracker_blendshapeentry) **FT_TONGUE_TWIST_RIGHT** = ``96``

Tongue tip rotates clockwise, with the rest following gradually.

<div id="_class_xrfacetracker_constant_ft_tongue_twist_left"></div>

[BlendShapeEntry](#enum_xrfacetracker_blendshapeentry) **FT_TONGUE_TWIST_LEFT** = ``97``

Tongue tip rotates counter-clockwise, with the rest following gradually.

<div id="_class_xrfacetracker_constant_ft_soft_palate_close"></div>

[BlendShapeEntry](#enum_xrfacetracker_blendshapeentry) **FT_SOFT_PALATE_CLOSE** = ``98``

Inner mouth throat closes.

<div id="_class_xrfacetracker_constant_ft_throat_swallow"></div>

[BlendShapeEntry](#enum_xrfacetracker_blendshapeentry) **FT_THROAT_SWALLOW** = ``99``

The Adam's apple visibly swallows.

<div id="_class_xrfacetracker_constant_ft_neck_flex_right"></div>

[BlendShapeEntry](#enum_xrfacetracker_blendshapeentry) **FT_NECK_FLEX_RIGHT** = ``100``

Right side neck visibly flexes.

<div id="_class_xrfacetracker_constant_ft_neck_flex_left"></div>

[BlendShapeEntry](#enum_xrfacetracker_blendshapeentry) **FT_NECK_FLEX_LEFT** = ``101``

Left side neck visibly flexes.

<div id="_class_xrfacetracker_constant_ft_eye_closed"></div>

[BlendShapeEntry](#enum_xrfacetracker_blendshapeentry) **FT_EYE_CLOSED** = ``102``

Closes both eye lids.

<div id="_class_xrfacetracker_constant_ft_eye_wide"></div>

[BlendShapeEntry](#enum_xrfacetracker_blendshapeentry) **FT_EYE_WIDE** = ``103``

Widens both eye lids.

<div id="_class_xrfacetracker_constant_ft_eye_squint"></div>

[BlendShapeEntry](#enum_xrfacetracker_blendshapeentry) **FT_EYE_SQUINT** = ``104``

Squints both eye lids.

<div id="_class_xrfacetracker_constant_ft_eye_dilation"></div>

[BlendShapeEntry](#enum_xrfacetracker_blendshapeentry) **FT_EYE_DILATION** = ``105``

Dilates both pupils.

<div id="_class_xrfacetracker_constant_ft_eye_constrict"></div>

[BlendShapeEntry](#enum_xrfacetracker_blendshapeentry) **FT_EYE_CONSTRICT** = ``106``

Constricts both pupils.

<div id="_class_xrfacetracker_constant_ft_brow_down_right"></div>

[BlendShapeEntry](#enum_xrfacetracker_blendshapeentry) **FT_BROW_DOWN_RIGHT** = ``107``

Pulls the right eyebrow down and in.

<div id="_class_xrfacetracker_constant_ft_brow_down_left"></div>

[BlendShapeEntry](#enum_xrfacetracker_blendshapeentry) **FT_BROW_DOWN_LEFT** = ``108``

Pulls the left eyebrow down and in.

<div id="_class_xrfacetracker_constant_ft_brow_down"></div>

[BlendShapeEntry](#enum_xrfacetracker_blendshapeentry) **FT_BROW_DOWN** = ``109``

Pulls both eyebrows down and in.

<div id="_class_xrfacetracker_constant_ft_brow_up_right"></div>

[BlendShapeEntry](#enum_xrfacetracker_blendshapeentry) **FT_BROW_UP_RIGHT** = ``110``

Right brow appears worried.

<div id="_class_xrfacetracker_constant_ft_brow_up_left"></div>

[BlendShapeEntry](#enum_xrfacetracker_blendshapeentry) **FT_BROW_UP_LEFT** = ``111``

Left brow appears worried.

<div id="_class_xrfacetracker_constant_ft_brow_up"></div>

[BlendShapeEntry](#enum_xrfacetracker_blendshapeentry) **FT_BROW_UP** = ``112``

Both brows appear worried.

<div id="_class_xrfacetracker_constant_ft_nose_sneer"></div>

[BlendShapeEntry](#enum_xrfacetracker_blendshapeentry) **FT_NOSE_SNEER** = ``113``

Entire face sneers.

<div id="_class_xrfacetracker_constant_ft_nasal_dilation"></div>

[BlendShapeEntry](#enum_xrfacetracker_blendshapeentry) **FT_NASAL_DILATION** = ``114``

Both nose canals dilate.

<div id="_class_xrfacetracker_constant_ft_nasal_constrict"></div>

[BlendShapeEntry](#enum_xrfacetracker_blendshapeentry) **FT_NASAL_CONSTRICT** = ``115``

Both nose canals constrict.

<div id="_class_xrfacetracker_constant_ft_cheek_puff"></div>

[BlendShapeEntry](#enum_xrfacetracker_blendshapeentry) **FT_CHEEK_PUFF** = ``116``

Puffs both cheeks.

<div id="_class_xrfacetracker_constant_ft_cheek_suck"></div>

[BlendShapeEntry](#enum_xrfacetracker_blendshapeentry) **FT_CHEEK_SUCK** = ``117``

Sucks in both cheeks.

<div id="_class_xrfacetracker_constant_ft_cheek_squint"></div>

[BlendShapeEntry](#enum_xrfacetracker_blendshapeentry) **FT_CHEEK_SQUINT** = ``118``

Raises both cheeks.

<div id="_class_xrfacetracker_constant_ft_lip_suck_upper"></div>

[BlendShapeEntry](#enum_xrfacetracker_blendshapeentry) **FT_LIP_SUCK_UPPER** = ``119``

Tucks in the upper lips.

<div id="_class_xrfacetracker_constant_ft_lip_suck_lower"></div>

[BlendShapeEntry](#enum_xrfacetracker_blendshapeentry) **FT_LIP_SUCK_LOWER** = ``120``

Tucks in the lower lips.

<div id="_class_xrfacetracker_constant_ft_lip_suck"></div>

[BlendShapeEntry](#enum_xrfacetracker_blendshapeentry) **FT_LIP_SUCK** = ``121``

Tucks in both lips.

<div id="_class_xrfacetracker_constant_ft_lip_funnel_upper"></div>

[BlendShapeEntry](#enum_xrfacetracker_blendshapeentry) **FT_LIP_FUNNEL_UPPER** = ``122``

Funnels in the upper lips.

<div id="_class_xrfacetracker_constant_ft_lip_funnel_lower"></div>

[BlendShapeEntry](#enum_xrfacetracker_blendshapeentry) **FT_LIP_FUNNEL_LOWER** = ``123``

Funnels in the lower lips.

<div id="_class_xrfacetracker_constant_ft_lip_funnel"></div>

[BlendShapeEntry](#enum_xrfacetracker_blendshapeentry) **FT_LIP_FUNNEL** = ``124``

Funnels in both lips.

<div id="_class_xrfacetracker_constant_ft_lip_pucker_upper"></div>

[BlendShapeEntry](#enum_xrfacetracker_blendshapeentry) **FT_LIP_PUCKER_UPPER** = ``125``

Upper lip part pushes outwards.

<div id="_class_xrfacetracker_constant_ft_lip_pucker_lower"></div>

[BlendShapeEntry](#enum_xrfacetracker_blendshapeentry) **FT_LIP_PUCKER_LOWER** = ``126``

Lower lip part pushes outwards.

<div id="_class_xrfacetracker_constant_ft_lip_pucker"></div>

[BlendShapeEntry](#enum_xrfacetracker_blendshapeentry) **FT_LIP_PUCKER** = ``127``

Lips push outwards.

<div id="_class_xrfacetracker_constant_ft_mouth_upper_up"></div>

[BlendShapeEntry](#enum_xrfacetracker_blendshapeentry) **FT_MOUTH_UPPER_UP** = ``128``

Raises the upper lips.

<div id="_class_xrfacetracker_constant_ft_mouth_lower_down"></div>

[BlendShapeEntry](#enum_xrfacetracker_blendshapeentry) **FT_MOUTH_LOWER_DOWN** = ``129``

Lowers the lower lips.

<div id="_class_xrfacetracker_constant_ft_mouth_open"></div>

[BlendShapeEntry](#enum_xrfacetracker_blendshapeentry) **FT_MOUTH_OPEN** = ``130``

Mouth opens, revealing teeth.

<div id="_class_xrfacetracker_constant_ft_mouth_right"></div>

[BlendShapeEntry](#enum_xrfacetracker_blendshapeentry) **FT_MOUTH_RIGHT** = ``131``

Moves mouth right.

<div id="_class_xrfacetracker_constant_ft_mouth_left"></div>

[BlendShapeEntry](#enum_xrfacetracker_blendshapeentry) **FT_MOUTH_LEFT** = ``132``

Moves mouth left.

<div id="_class_xrfacetracker_constant_ft_mouth_smile_right"></div>

[BlendShapeEntry](#enum_xrfacetracker_blendshapeentry) **FT_MOUTH_SMILE_RIGHT** = ``133``

Right side of the mouth smiles.

<div id="_class_xrfacetracker_constant_ft_mouth_smile_left"></div>

[BlendShapeEntry](#enum_xrfacetracker_blendshapeentry) **FT_MOUTH_SMILE_LEFT** = ``134``

Left side of the mouth smiles.

<div id="_class_xrfacetracker_constant_ft_mouth_smile"></div>

[BlendShapeEntry](#enum_xrfacetracker_blendshapeentry) **FT_MOUTH_SMILE** = ``135``

Mouth expresses a smile.

<div id="_class_xrfacetracker_constant_ft_mouth_sad_right"></div>

[BlendShapeEntry](#enum_xrfacetracker_blendshapeentry) **FT_MOUTH_SAD_RIGHT** = ``136``

Right side of the mouth expresses sadness.

<div id="_class_xrfacetracker_constant_ft_mouth_sad_left"></div>

[BlendShapeEntry](#enum_xrfacetracker_blendshapeentry) **FT_MOUTH_SAD_LEFT** = ``137``

Left side of the mouth expresses sadness.

<div id="_class_xrfacetracker_constant_ft_mouth_sad"></div>

[BlendShapeEntry](#enum_xrfacetracker_blendshapeentry) **FT_MOUTH_SAD** = ``138``

Mouth expresses sadness.

<div id="_class_xrfacetracker_constant_ft_mouth_stretch"></div>

[BlendShapeEntry](#enum_xrfacetracker_blendshapeentry) **FT_MOUTH_STRETCH** = ``139``

Mouth stretches.

<div id="_class_xrfacetracker_constant_ft_mouth_dimple"></div>

[BlendShapeEntry](#enum_xrfacetracker_blendshapeentry) **FT_MOUTH_DIMPLE** = ``140``

Lip corners dimple.

<div id="_class_xrfacetracker_constant_ft_mouth_tightener"></div>

[BlendShapeEntry](#enum_xrfacetracker_blendshapeentry) **FT_MOUTH_TIGHTENER** = ``141``

Mouth tightens.

<div id="_class_xrfacetracker_constant_ft_mouth_press"></div>

[BlendShapeEntry](#enum_xrfacetracker_blendshapeentry) **FT_MOUTH_PRESS** = ``142``

Mouth presses together.

<div id="_class_xrfacetracker_constant_ft_max"></div>

[BlendShapeEntry](#enum_xrfacetracker_blendshapeentry) **FT_MAX** = ``143``

Represents the size of the [BlendShapeEntry](#enum_xrfacetracker_blendshapeentry) enum.

<!-- rst-class:: classref-section-separator -->

---

## 属性说明

<div id="_class_xrfacetracker_property_blend_shapes"></div>

[`PackedFloat32Array`](class_packedfloat32array.md) **blend_shapes** = ``PackedFloat32Array()`` <div id="class_xrfacetracker_property_blend_shapes"></div>

- `void` **set_blend_shapes** ( value: [`PackedFloat32Array`](class_packedfloat32array.md) )
- [`PackedFloat32Array`](class_packedfloat32array.md) **get_blend_shapes** ( )

The array of face blend shape weights with indices corresponding to the [BlendShapeEntry](#enum_xrfacetracker_blendshapeentry) enum.

**Note:** The returned array is *copied* and any changes to it will not update the original property value. See [`PackedFloat32Array`](class_packedfloat32array.md) for more details.

<!-- rst-class:: classref-section-separator -->

---

## 方法说明

<div id="_class_xrfacetracker_method_get_blend_shape"></div>

[`float`](class_float.md) **get_blend_shape** ( blend_shape: [BlendShapeEntry](#enum_xrfacetracker_blendshapeentry) ) const[^const]<div id="class_xrfacetracker_method_get_blend_shape"></div>

Returns the requested face blend shape weight.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_xrfacetracker_method_set_blend_shape"></div>

`void` **set_blend_shape** ( blend_shape: [BlendShapeEntry](#enum_xrfacetracker_blendshapeentry), weight: [`float`](class_float.md) )<div id="class_xrfacetracker_method_set_blend_shape"></div>

Sets a face blend shape weight.

[^virtual]: 本方法通常需要用户覆盖才能生效。
[^const]: 本方法无副作用，不会修改该实例的任何成员变量。
[^vararg]: 本方法除了能接受在此处描述的参数外，还能够继续接受任意数量的参数。
[^constructor]: 本方法用于构造某个类型。
[^static]: 调用本方法无需实例，可直接使用类名进行调用。
[^operator]: 本方法描述的是使用本类型作为左操作数的有效运算符。
[^bitfield]: 这个值是由下列位标志构成位掩码的整数。
[^void]: 无返回值。
