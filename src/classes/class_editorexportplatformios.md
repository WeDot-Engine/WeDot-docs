<!-- ⚠ 请勿编辑本文件 ⚠ -->
<!-- 本文档使用脚本从 WeDot 引擎源码仓库生成。 -->
<!-- 生成脚本：https://github.com/WeDot-Engine/WeDot/tree/master/doc/tools/make_md.py； -->
<!-- 原文件：https://github.com/WeDot-Engine/WeDot/tree/master/platform/ios/doc_classes/EditorExportPlatformIOS.xml。 -->

<div id="_class_editorexportplatformios"></div>

# EditorExportPlatformIOS

**继承：** [`EditorExportPlatform`](class_editorexportplatform.md) **<** [`RefCounted`](class_refcounted.md) **<** [`Object`](class_object.md)

Exporter for iOS.

## 属性

|||
|:-:|:--|
| [`String`](class_string.md)                       | [`application/additional_plist_content`](class_editorexportplatformios.md#class_editorexportplatformios_property_application/additional_plist_content)                                                             |
| [`String`](class_string.md)                       | [`application/app_store_team_id`](class_editorexportplatformios.md#class_editorexportplatformios_property_application/app_store_team_id)                                                                           |
| [`String`](class_string.md)                       | [`application/bundle_identifier`](class_editorexportplatformios.md#class_editorexportplatformios_property_application/bundle_identifier)                                                                           |
| [`String`](class_string.md)                       | [`application/code_sign_identity_debug`](class_editorexportplatformios.md#class_editorexportplatformios_property_application/code_sign_identity_debug)                                                             |
| [`String`](class_string.md)                       | [`application/code_sign_identity_release`](class_editorexportplatformios.md#class_editorexportplatformios_property_application/code_sign_identity_release)                                                         |
| [`bool`](class_bool.md)                           | [`application/delete_old_export_files_unconditionally`](class_editorexportplatformios.md#class_editorexportplatformios_property_application/delete_old_export_files_unconditionally)                               |
| [`int`](class_int.md)                             | [`application/export_method_debug`](class_editorexportplatformios.md#class_editorexportplatformios_property_application/export_method_debug)                                                                       |
| [`int`](class_int.md)                             | [`application/export_method_release`](class_editorexportplatformios.md#class_editorexportplatformios_property_application/export_method_release)                                                                   |
| [`bool`](class_bool.md)                           | [`application/export_project_only`](class_editorexportplatformios.md#class_editorexportplatformios_property_application/export_project_only)                                                                       |
| [`bool`](class_bool.md)                           | [`application/generate_simulator_library_if_missing`](class_editorexportplatformios.md#class_editorexportplatformios_property_application/generate_simulator_library_if_missing)                                   |
| [`int`](class_int.md)                             | [`application/icon_interpolation`](class_editorexportplatformios.md#class_editorexportplatformios_property_application/icon_interpolation)                                                                         |
| [`String`](class_string.md)                       | [`application/min_ios_version`](class_editorexportplatformios.md#class_editorexportplatformios_property_application/min_ios_version)                                                                               |
| [`String`](class_string.md)                       | [`application/provisioning_profile_uuid_debug`](class_editorexportplatformios.md#class_editorexportplatformios_property_application/provisioning_profile_uuid_debug)                                               |
| [`String`](class_string.md)                       | [`application/provisioning_profile_uuid_release`](class_editorexportplatformios.md#class_editorexportplatformios_property_application/provisioning_profile_uuid_release)                                           |
| [`String`](class_string.md)                       | [`application/short_version`](class_editorexportplatformios.md#class_editorexportplatformios_property_application/short_version)                                                                                   |
| [`String`](class_string.md)                       | [`application/signature`](class_editorexportplatformios.md#class_editorexportplatformios_property_application/signature)                                                                                           |
| [`int`](class_int.md)                             | [`application/targeted_device_family`](class_editorexportplatformios.md#class_editorexportplatformios_property_application/targeted_device_family)                                                                 |
| [`String`](class_string.md)                       | [`application/version`](class_editorexportplatformios.md#class_editorexportplatformios_property_application/version)                                                                                               |
| [`bool`](class_bool.md)                           | [`architectures/arm64`](class_editorexportplatformios.md#class_editorexportplatformios_property_architectures/arm64)                                                                                               |
| [`bool`](class_bool.md)                           | [`capabilities/access_wifi`](class_editorexportplatformios.md#class_editorexportplatformios_property_capabilities/access_wifi)                                                                                     |
| [`bool`](class_bool.md)                           | [`capabilities/performance_a12`](class_editorexportplatformios.md#class_editorexportplatformios_property_capabilities/performance_a12)                                                                             |
| [`bool`](class_bool.md)                           | [`capabilities/performance_gaming_tier`](class_editorexportplatformios.md#class_editorexportplatformios_property_capabilities/performance_gaming_tier)                                                             |
| [`bool`](class_bool.md)                           | [`capabilities/push_notifications`](class_editorexportplatformios.md#class_editorexportplatformios_property_capabilities/push_notifications)                                                                       |
| [`String`](class_string.md)                       | [`custom_template/debug`](class_editorexportplatformios.md#class_editorexportplatformios_property_custom_template/debug)                                                                                           |
| [`String`](class_string.md)                       | [`custom_template/release`](class_editorexportplatformios.md#class_editorexportplatformios_property_custom_template/release)                                                                                       |
| [`String`](class_string.md)                       | [`icons/app_store_1024x1024`](class_editorexportplatformios.md#class_editorexportplatformios_property_icons/app_store_1024x1024)                                                                                   |
| [`String`](class_string.md)                       | [`icons/app_store_1024x1024_dark`](class_editorexportplatformios.md#class_editorexportplatformios_property_icons/app_store_1024x1024_dark)                                                                         |
| [`String`](class_string.md)                       | [`icons/app_store_1024x1024_tinted`](class_editorexportplatformios.md#class_editorexportplatformios_property_icons/app_store_1024x1024_tinted)                                                                     |
| [`String`](class_string.md)                       | [`icons/icon_1024x1024`](class_editorexportplatformios.md#class_editorexportplatformios_property_icons/icon_1024x1024)                                                                                             |
| [`String`](class_string.md)                       | [`icons/icon_1024x1024_dark`](class_editorexportplatformios.md#class_editorexportplatformios_property_icons/icon_1024x1024_dark)                                                                                   |
| [`String`](class_string.md)                       | [`icons/icon_1024x1024_tinted`](class_editorexportplatformios.md#class_editorexportplatformios_property_icons/icon_1024x1024_tinted)                                                                               |
| [`String`](class_string.md)                       | [`icons/ios_128x128`](class_editorexportplatformios.md#class_editorexportplatformios_property_icons/ios_128x128)                                                                                                   |
| [`String`](class_string.md)                       | [`icons/ios_128x128_dark`](class_editorexportplatformios.md#class_editorexportplatformios_property_icons/ios_128x128_dark)                                                                                         |
| [`String`](class_string.md)                       | [`icons/ios_128x128_tinted`](class_editorexportplatformios.md#class_editorexportplatformios_property_icons/ios_128x128_tinted)                                                                                     |
| [`String`](class_string.md)                       | [`icons/ios_136x136`](class_editorexportplatformios.md#class_editorexportplatformios_property_icons/ios_136x136)                                                                                                   |
| [`String`](class_string.md)                       | [`icons/ios_136x136_dark`](class_editorexportplatformios.md#class_editorexportplatformios_property_icons/ios_136x136_dark)                                                                                         |
| [`String`](class_string.md)                       | [`icons/ios_136x136_tinted`](class_editorexportplatformios.md#class_editorexportplatformios_property_icons/ios_136x136_tinted)                                                                                     |
| [`String`](class_string.md)                       | [`icons/ios_192x192`](class_editorexportplatformios.md#class_editorexportplatformios_property_icons/ios_192x192)                                                                                                   |
| [`String`](class_string.md)                       | [`icons/ios_192x192_dark`](class_editorexportplatformios.md#class_editorexportplatformios_property_icons/ios_192x192_dark)                                                                                         |
| [`String`](class_string.md)                       | [`icons/ios_192x192_tinted`](class_editorexportplatformios.md#class_editorexportplatformios_property_icons/ios_192x192_tinted)                                                                                     |
| [`String`](class_string.md)                       | [`icons/ipad_152x152`](class_editorexportplatformios.md#class_editorexportplatformios_property_icons/ipad_152x152)                                                                                                 |
| [`String`](class_string.md)                       | [`icons/ipad_152x152_dark`](class_editorexportplatformios.md#class_editorexportplatformios_property_icons/ipad_152x152_dark)                                                                                       |
| [`String`](class_string.md)                       | [`icons/ipad_152x152_tinted`](class_editorexportplatformios.md#class_editorexportplatformios_property_icons/ipad_152x152_tinted)                                                                                   |
| [`String`](class_string.md)                       | [`icons/ipad_167x167`](class_editorexportplatformios.md#class_editorexportplatformios_property_icons/ipad_167x167)                                                                                                 |
| [`String`](class_string.md)                       | [`icons/ipad_167x167_dark`](class_editorexportplatformios.md#class_editorexportplatformios_property_icons/ipad_167x167_dark)                                                                                       |
| [`String`](class_string.md)                       | [`icons/ipad_167x167_tinted`](class_editorexportplatformios.md#class_editorexportplatformios_property_icons/ipad_167x167_tinted)                                                                                   |
| [`String`](class_string.md)                       | [`icons/iphone_120x120`](class_editorexportplatformios.md#class_editorexportplatformios_property_icons/iphone_120x120)                                                                                             |
| [`String`](class_string.md)                       | [`icons/iphone_120x120_dark`](class_editorexportplatformios.md#class_editorexportplatformios_property_icons/iphone_120x120_dark)                                                                                   |
| [`String`](class_string.md)                       | [`icons/iphone_120x120_tinted`](class_editorexportplatformios.md#class_editorexportplatformios_property_icons/iphone_120x120_tinted)                                                                               |
| [`String`](class_string.md)                       | [`icons/iphone_180x180`](class_editorexportplatformios.md#class_editorexportplatformios_property_icons/iphone_180x180)                                                                                             |
| [`String`](class_string.md)                       | [`icons/iphone_180x180_dark`](class_editorexportplatformios.md#class_editorexportplatformios_property_icons/iphone_180x180_dark)                                                                                   |
| [`String`](class_string.md)                       | [`icons/iphone_180x180_tinted`](class_editorexportplatformios.md#class_editorexportplatformios_property_icons/iphone_180x180_tinted)                                                                               |
| [`String`](class_string.md)                       | [`icons/notification_40x40`](class_editorexportplatformios.md#class_editorexportplatformios_property_icons/notification_40x40)                                                                                     |
| [`String`](class_string.md)                       | [`icons/notification_40x40_dark`](class_editorexportplatformios.md#class_editorexportplatformios_property_icons/notification_40x40_dark)                                                                           |
| [`String`](class_string.md)                       | [`icons/notification_40x40_tinted`](class_editorexportplatformios.md#class_editorexportplatformios_property_icons/notification_40x40_tinted)                                                                       |
| [`String`](class_string.md)                       | [`icons/notification_60x60`](class_editorexportplatformios.md#class_editorexportplatformios_property_icons/notification_60x60)                                                                                     |
| [`String`](class_string.md)                       | [`icons/notification_60x60_dark`](class_editorexportplatformios.md#class_editorexportplatformios_property_icons/notification_60x60_dark)                                                                           |
| [`String`](class_string.md)                       | [`icons/notification_60x60_tinted`](class_editorexportplatformios.md#class_editorexportplatformios_property_icons/notification_60x60_tinted)                                                                       |
| [`String`](class_string.md)                       | [`icons/notification_76x76`](class_editorexportplatformios.md#class_editorexportplatformios_property_icons/notification_76x76)                                                                                     |
| [`String`](class_string.md)                       | [`icons/notification_76x76_dark`](class_editorexportplatformios.md#class_editorexportplatformios_property_icons/notification_76x76_dark)                                                                           |
| [`String`](class_string.md)                       | [`icons/notification_76x76_tinted`](class_editorexportplatformios.md#class_editorexportplatformios_property_icons/notification_76x76_tinted)                                                                       |
| [`String`](class_string.md)                       | [`icons/notification_114x114`](class_editorexportplatformios.md#class_editorexportplatformios_property_icons/notification_114x114)                                                                                 |
| [`String`](class_string.md)                       | [`icons/notification_114x114_dark`](class_editorexportplatformios.md#class_editorexportplatformios_property_icons/notification_114x114_dark)                                                                       |
| [`String`](class_string.md)                       | [`icons/notification_114x114_tinted`](class_editorexportplatformios.md#class_editorexportplatformios_property_icons/notification_114x114_tinted)                                                                   |
| [`String`](class_string.md)                       | [`icons/settings_58x58`](class_editorexportplatformios.md#class_editorexportplatformios_property_icons/settings_58x58)                                                                                             |
| [`String`](class_string.md)                       | [`icons/settings_58x58_dark`](class_editorexportplatformios.md#class_editorexportplatformios_property_icons/settings_58x58_dark)                                                                                   |
| [`String`](class_string.md)                       | [`icons/settings_58x58_tinted`](class_editorexportplatformios.md#class_editorexportplatformios_property_icons/settings_58x58_tinted)                                                                               |
| [`String`](class_string.md)                       | [`icons/settings_87x87`](class_editorexportplatformios.md#class_editorexportplatformios_property_icons/settings_87x87)                                                                                             |
| [`String`](class_string.md)                       | [`icons/settings_87x87_dark`](class_editorexportplatformios.md#class_editorexportplatformios_property_icons/settings_87x87_dark)                                                                                   |
| [`String`](class_string.md)                       | [`icons/settings_87x87_tinted`](class_editorexportplatformios.md#class_editorexportplatformios_property_icons/settings_87x87_tinted)                                                                               |
| [`String`](class_string.md)                       | [`icons/spotlight_80x80`](class_editorexportplatformios.md#class_editorexportplatformios_property_icons/spotlight_80x80)                                                                                           |
| [`String`](class_string.md)                       | [`icons/spotlight_80x80_dark`](class_editorexportplatformios.md#class_editorexportplatformios_property_icons/spotlight_80x80_dark)                                                                                 |
| [`String`](class_string.md)                       | [`icons/spotlight_80x80_tinted`](class_editorexportplatformios.md#class_editorexportplatformios_property_icons/spotlight_80x80_tinted)                                                                             |
| [`String`](class_string.md)                       | [`icons/spotlight_120x120`](class_editorexportplatformios.md#class_editorexportplatformios_property_icons/spotlight_120x120)                                                                                       |
| [`String`](class_string.md)                       | [`icons/spotlight_120x120_dark`](class_editorexportplatformios.md#class_editorexportplatformios_property_icons/spotlight_120x120_dark)                                                                             |
| [`String`](class_string.md)                       | [`icons/spotlight_120x120_tinted`](class_editorexportplatformios.md#class_editorexportplatformios_property_icons/spotlight_120x120_tinted)                                                                         |
| [`int`](class_int.md)                             | [`privacy/active_keyboard_access_reasons`](class_editorexportplatformios.md#class_editorexportplatformios_property_privacy/active_keyboard_access_reasons)                                                         |
| [`String`](class_string.md)                       | [`privacy/camera_usage_description`](class_editorexportplatformios.md#class_editorexportplatformios_property_privacy/camera_usage_description)                                                                     |
| [`Dictionary`](class_dictionary.md)               | [`privacy/camera_usage_description_localized`](class_editorexportplatformios.md#class_editorexportplatformios_property_privacy/camera_usage_description_localized)                                                 |
| [`bool`](class_bool.md)                           | [`privacy/collected_data/advertising_data/collected`](class_editorexportplatformios.md#class_editorexportplatformios_property_privacy/collected_data/advertising_data/collected)                                   |
| [`int`](class_int.md)                             | [`privacy/collected_data/advertising_data/collection_purposes`](class_editorexportplatformios.md#class_editorexportplatformios_property_privacy/collected_data/advertising_data/collection_purposes)               |
| [`bool`](class_bool.md)                           | [`privacy/collected_data/advertising_data/linked_to_user`](class_editorexportplatformios.md#class_editorexportplatformios_property_privacy/collected_data/advertising_data/linked_to_user)                         |
| [`bool`](class_bool.md)                           | [`privacy/collected_data/advertising_data/used_for_tracking`](class_editorexportplatformios.md#class_editorexportplatformios_property_privacy/collected_data/advertising_data/used_for_tracking)                   |
| [`bool`](class_bool.md)                           | [`privacy/collected_data/audio_data/collected`](class_editorexportplatformios.md#class_editorexportplatformios_property_privacy/collected_data/audio_data/collected)                                               |
| [`int`](class_int.md)                             | [`privacy/collected_data/audio_data/collection_purposes`](class_editorexportplatformios.md#class_editorexportplatformios_property_privacy/collected_data/audio_data/collection_purposes)                           |
| [`bool`](class_bool.md)                           | [`privacy/collected_data/audio_data/linked_to_user`](class_editorexportplatformios.md#class_editorexportplatformios_property_privacy/collected_data/audio_data/linked_to_user)                                     |
| [`bool`](class_bool.md)                           | [`privacy/collected_data/audio_data/used_for_tracking`](class_editorexportplatformios.md#class_editorexportplatformios_property_privacy/collected_data/audio_data/used_for_tracking)                               |
| [`bool`](class_bool.md)                           | [`privacy/collected_data/browsing_history/collected`](class_editorexportplatformios.md#class_editorexportplatformios_property_privacy/collected_data/browsing_history/collected)                                   |
| [`int`](class_int.md)                             | [`privacy/collected_data/browsing_history/collection_purposes`](class_editorexportplatformios.md#class_editorexportplatformios_property_privacy/collected_data/browsing_history/collection_purposes)               |
| [`bool`](class_bool.md)                           | [`privacy/collected_data/browsing_history/linked_to_user`](class_editorexportplatformios.md#class_editorexportplatformios_property_privacy/collected_data/browsing_history/linked_to_user)                         |
| [`bool`](class_bool.md)                           | [`privacy/collected_data/browsing_history/used_for_tracking`](class_editorexportplatformios.md#class_editorexportplatformios_property_privacy/collected_data/browsing_history/used_for_tracking)                   |
| [`bool`](class_bool.md)                           | [`privacy/collected_data/coarse_location/collected`](class_editorexportplatformios.md#class_editorexportplatformios_property_privacy/collected_data/coarse_location/collected)                                     |
| [`int`](class_int.md)                             | [`privacy/collected_data/coarse_location/collection_purposes`](class_editorexportplatformios.md#class_editorexportplatformios_property_privacy/collected_data/coarse_location/collection_purposes)                 |
| [`bool`](class_bool.md)                           | [`privacy/collected_data/coarse_location/linked_to_user`](class_editorexportplatformios.md#class_editorexportplatformios_property_privacy/collected_data/coarse_location/linked_to_user)                           |
| [`bool`](class_bool.md)                           | [`privacy/collected_data/coarse_location/used_for_tracking`](class_editorexportplatformios.md#class_editorexportplatformios_property_privacy/collected_data/coarse_location/used_for_tracking)                     |
| [`bool`](class_bool.md)                           | [`privacy/collected_data/contacts/collected`](class_editorexportplatformios.md#class_editorexportplatformios_property_privacy/collected_data/contacts/collected)                                                   |
| [`int`](class_int.md)                             | [`privacy/collected_data/contacts/collection_purposes`](class_editorexportplatformios.md#class_editorexportplatformios_property_privacy/collected_data/contacts/collection_purposes)                               |
| [`bool`](class_bool.md)                           | [`privacy/collected_data/contacts/linked_to_user`](class_editorexportplatformios.md#class_editorexportplatformios_property_privacy/collected_data/contacts/linked_to_user)                                         |
| [`bool`](class_bool.md)                           | [`privacy/collected_data/contacts/used_for_tracking`](class_editorexportplatformios.md#class_editorexportplatformios_property_privacy/collected_data/contacts/used_for_tracking)                                   |
| [`bool`](class_bool.md)                           | [`privacy/collected_data/crash_data/collected`](class_editorexportplatformios.md#class_editorexportplatformios_property_privacy/collected_data/crash_data/collected)                                               |
| [`int`](class_int.md)                             | [`privacy/collected_data/crash_data/collection_purposes`](class_editorexportplatformios.md#class_editorexportplatformios_property_privacy/collected_data/crash_data/collection_purposes)                           |
| [`bool`](class_bool.md)                           | [`privacy/collected_data/crash_data/linked_to_user`](class_editorexportplatformios.md#class_editorexportplatformios_property_privacy/collected_data/crash_data/linked_to_user)                                     |
| [`bool`](class_bool.md)                           | [`privacy/collected_data/crash_data/used_for_tracking`](class_editorexportplatformios.md#class_editorexportplatformios_property_privacy/collected_data/crash_data/used_for_tracking)                               |
| [`bool`](class_bool.md)                           | [`privacy/collected_data/credit_info/collected`](class_editorexportplatformios.md#class_editorexportplatformios_property_privacy/collected_data/credit_info/collected)                                             |
| [`int`](class_int.md)                             | [`privacy/collected_data/credit_info/collection_purposes`](class_editorexportplatformios.md#class_editorexportplatformios_property_privacy/collected_data/credit_info/collection_purposes)                         |
| [`bool`](class_bool.md)                           | [`privacy/collected_data/credit_info/linked_to_user`](class_editorexportplatformios.md#class_editorexportplatformios_property_privacy/collected_data/credit_info/linked_to_user)                                   |
| [`bool`](class_bool.md)                           | [`privacy/collected_data/credit_info/used_for_tracking`](class_editorexportplatformios.md#class_editorexportplatformios_property_privacy/collected_data/credit_info/used_for_tracking)                             |
| [`bool`](class_bool.md)                           | [`privacy/collected_data/customer_support/collected`](class_editorexportplatformios.md#class_editorexportplatformios_property_privacy/collected_data/customer_support/collected)                                   |
| [`int`](class_int.md)                             | [`privacy/collected_data/customer_support/collection_purposes`](class_editorexportplatformios.md#class_editorexportplatformios_property_privacy/collected_data/customer_support/collection_purposes)               |
| [`bool`](class_bool.md)                           | [`privacy/collected_data/customer_support/linked_to_user`](class_editorexportplatformios.md#class_editorexportplatformios_property_privacy/collected_data/customer_support/linked_to_user)                         |
| [`bool`](class_bool.md)                           | [`privacy/collected_data/customer_support/used_for_tracking`](class_editorexportplatformios.md#class_editorexportplatformios_property_privacy/collected_data/customer_support/used_for_tracking)                   |
| [`bool`](class_bool.md)                           | [`privacy/collected_data/device_id/collected`](class_editorexportplatformios.md#class_editorexportplatformios_property_privacy/collected_data/device_id/collected)                                                 |
| [`int`](class_int.md)                             | [`privacy/collected_data/device_id/collection_purposes`](class_editorexportplatformios.md#class_editorexportplatformios_property_privacy/collected_data/device_id/collection_purposes)                             |
| [`bool`](class_bool.md)                           | [`privacy/collected_data/device_id/linked_to_user`](class_editorexportplatformios.md#class_editorexportplatformios_property_privacy/collected_data/device_id/linked_to_user)                                       |
| [`bool`](class_bool.md)                           | [`privacy/collected_data/device_id/used_for_tracking`](class_editorexportplatformios.md#class_editorexportplatformios_property_privacy/collected_data/device_id/used_for_tracking)                                 |
| [`bool`](class_bool.md)                           | [`privacy/collected_data/email_address/collected`](class_editorexportplatformios.md#class_editorexportplatformios_property_privacy/collected_data/email_address/collected)                                         |
| [`int`](class_int.md)                             | [`privacy/collected_data/email_address/collection_purposes`](class_editorexportplatformios.md#class_editorexportplatformios_property_privacy/collected_data/email_address/collection_purposes)                     |
| [`bool`](class_bool.md)                           | [`privacy/collected_data/email_address/linked_to_user`](class_editorexportplatformios.md#class_editorexportplatformios_property_privacy/collected_data/email_address/linked_to_user)                               |
| [`bool`](class_bool.md)                           | [`privacy/collected_data/email_address/used_for_tracking`](class_editorexportplatformios.md#class_editorexportplatformios_property_privacy/collected_data/email_address/used_for_tracking)                         |
| [`bool`](class_bool.md)                           | [`privacy/collected_data/emails_or_text_messages/collected`](class_editorexportplatformios.md#class_editorexportplatformios_property_privacy/collected_data/emails_or_text_messages/collected)                     |
| [`int`](class_int.md)                             | [`privacy/collected_data/emails_or_text_messages/collection_purposes`](class_editorexportplatformios.md#class_editorexportplatformios_property_privacy/collected_data/emails_or_text_messages/collection_purposes) |
| [`bool`](class_bool.md)                           | [`privacy/collected_data/emails_or_text_messages/linked_to_user`](class_editorexportplatformios.md#class_editorexportplatformios_property_privacy/collected_data/emails_or_text_messages/linked_to_user)           |
| [`bool`](class_bool.md)                           | [`privacy/collected_data/emails_or_text_messages/used_for_tracking`](class_editorexportplatformios.md#class_editorexportplatformios_property_privacy/collected_data/emails_or_text_messages/used_for_tracking)     |
| [`bool`](class_bool.md)                           | [`privacy/collected_data/environment_scanning/collected`](class_editorexportplatformios.md#class_editorexportplatformios_property_privacy/collected_data/environment_scanning/collected)                           |
| [`int`](class_int.md)                             | [`privacy/collected_data/environment_scanning/collection_purposes`](class_editorexportplatformios.md#class_editorexportplatformios_property_privacy/collected_data/environment_scanning/collection_purposes)       |
| [`bool`](class_bool.md)                           | [`privacy/collected_data/environment_scanning/linked_to_user`](class_editorexportplatformios.md#class_editorexportplatformios_property_privacy/collected_data/environment_scanning/linked_to_user)                 |
| [`bool`](class_bool.md)                           | [`privacy/collected_data/environment_scanning/used_for_tracking`](class_editorexportplatformios.md#class_editorexportplatformios_property_privacy/collected_data/environment_scanning/used_for_tracking)           |
| [`bool`](class_bool.md)                           | [`privacy/collected_data/fitness/collected`](class_editorexportplatformios.md#class_editorexportplatformios_property_privacy/collected_data/fitness/collected)                                                     |
| [`int`](class_int.md)                             | [`privacy/collected_data/fitness/collection_purposes`](class_editorexportplatformios.md#class_editorexportplatformios_property_privacy/collected_data/fitness/collection_purposes)                                 |
| [`bool`](class_bool.md)                           | [`privacy/collected_data/fitness/linked_to_user`](class_editorexportplatformios.md#class_editorexportplatformios_property_privacy/collected_data/fitness/linked_to_user)                                           |
| [`bool`](class_bool.md)                           | [`privacy/collected_data/fitness/used_for_tracking`](class_editorexportplatformios.md#class_editorexportplatformios_property_privacy/collected_data/fitness/used_for_tracking)                                     |
| [`bool`](class_bool.md)                           | [`privacy/collected_data/gameplay_content/collected`](class_editorexportplatformios.md#class_editorexportplatformios_property_privacy/collected_data/gameplay_content/collected)                                   |
| [`int`](class_int.md)                             | [`privacy/collected_data/gameplay_content/collection_purposes`](class_editorexportplatformios.md#class_editorexportplatformios_property_privacy/collected_data/gameplay_content/collection_purposes)               |
| [`bool`](class_bool.md)                           | [`privacy/collected_data/gameplay_content/linked_to_user`](class_editorexportplatformios.md#class_editorexportplatformios_property_privacy/collected_data/gameplay_content/linked_to_user)                         |
| [`bool`](class_bool.md)                           | [`privacy/collected_data/gameplay_content/used_for_tracking`](class_editorexportplatformios.md#class_editorexportplatformios_property_privacy/collected_data/gameplay_content/used_for_tracking)                   |
| [`bool`](class_bool.md)                           | [`privacy/collected_data/hands/collected`](class_editorexportplatformios.md#class_editorexportplatformios_property_privacy/collected_data/hands/collected)                                                         |
| [`int`](class_int.md)                             | [`privacy/collected_data/hands/collection_purposes`](class_editorexportplatformios.md#class_editorexportplatformios_property_privacy/collected_data/hands/collection_purposes)                                     |
| [`bool`](class_bool.md)                           | [`privacy/collected_data/hands/linked_to_user`](class_editorexportplatformios.md#class_editorexportplatformios_property_privacy/collected_data/hands/linked_to_user)                                               |
| [`bool`](class_bool.md)                           | [`privacy/collected_data/hands/used_for_tracking`](class_editorexportplatformios.md#class_editorexportplatformios_property_privacy/collected_data/hands/used_for_tracking)                                         |
| [`bool`](class_bool.md)                           | [`privacy/collected_data/head/collected`](class_editorexportplatformios.md#class_editorexportplatformios_property_privacy/collected_data/head/collected)                                                           |
| [`int`](class_int.md)                             | [`privacy/collected_data/head/collection_purposes`](class_editorexportplatformios.md#class_editorexportplatformios_property_privacy/collected_data/head/collection_purposes)                                       |
| [`bool`](class_bool.md)                           | [`privacy/collected_data/head/linked_to_user`](class_editorexportplatformios.md#class_editorexportplatformios_property_privacy/collected_data/head/linked_to_user)                                                 |
| [`bool`](class_bool.md)                           | [`privacy/collected_data/head/used_for_tracking`](class_editorexportplatformios.md#class_editorexportplatformios_property_privacy/collected_data/head/used_for_tracking)                                           |
| [`bool`](class_bool.md)                           | [`privacy/collected_data/health/collected`](class_editorexportplatformios.md#class_editorexportplatformios_property_privacy/collected_data/health/collected)                                                       |
| [`int`](class_int.md)                             | [`privacy/collected_data/health/collection_purposes`](class_editorexportplatformios.md#class_editorexportplatformios_property_privacy/collected_data/health/collection_purposes)                                   |
| [`bool`](class_bool.md)                           | [`privacy/collected_data/health/linked_to_user`](class_editorexportplatformios.md#class_editorexportplatformios_property_privacy/collected_data/health/linked_to_user)                                             |
| [`bool`](class_bool.md)                           | [`privacy/collected_data/health/used_for_tracking`](class_editorexportplatformios.md#class_editorexportplatformios_property_privacy/collected_data/health/used_for_tracking)                                       |
| [`bool`](class_bool.md)                           | [`privacy/collected_data/name/collected`](class_editorexportplatformios.md#class_editorexportplatformios_property_privacy/collected_data/name/collected)                                                           |
| [`int`](class_int.md)                             | [`privacy/collected_data/name/collection_purposes`](class_editorexportplatformios.md#class_editorexportplatformios_property_privacy/collected_data/name/collection_purposes)                                       |
| [`bool`](class_bool.md)                           | [`privacy/collected_data/name/linked_to_user`](class_editorexportplatformios.md#class_editorexportplatformios_property_privacy/collected_data/name/linked_to_user)                                                 |
| [`bool`](class_bool.md)                           | [`privacy/collected_data/name/used_for_tracking`](class_editorexportplatformios.md#class_editorexportplatformios_property_privacy/collected_data/name/used_for_tracking)                                           |
| [`bool`](class_bool.md)                           | [`privacy/collected_data/other_contact_info/collected`](class_editorexportplatformios.md#class_editorexportplatformios_property_privacy/collected_data/other_contact_info/collected)                               |
| [`int`](class_int.md)                             | [`privacy/collected_data/other_contact_info/collection_purposes`](class_editorexportplatformios.md#class_editorexportplatformios_property_privacy/collected_data/other_contact_info/collection_purposes)           |
| [`bool`](class_bool.md)                           | [`privacy/collected_data/other_contact_info/linked_to_user`](class_editorexportplatformios.md#class_editorexportplatformios_property_privacy/collected_data/other_contact_info/linked_to_user)                     |
| [`bool`](class_bool.md)                           | [`privacy/collected_data/other_contact_info/used_for_tracking`](class_editorexportplatformios.md#class_editorexportplatformios_property_privacy/collected_data/other_contact_info/used_for_tracking)               |
| [`bool`](class_bool.md)                           | [`privacy/collected_data/other_data_types/collected`](class_editorexportplatformios.md#class_editorexportplatformios_property_privacy/collected_data/other_data_types/collected)                                   |
| [`int`](class_int.md)                             | [`privacy/collected_data/other_data_types/collection_purposes`](class_editorexportplatformios.md#class_editorexportplatformios_property_privacy/collected_data/other_data_types/collection_purposes)               |
| [`bool`](class_bool.md)                           | [`privacy/collected_data/other_data_types/linked_to_user`](class_editorexportplatformios.md#class_editorexportplatformios_property_privacy/collected_data/other_data_types/linked_to_user)                         |
| [`bool`](class_bool.md)                           | [`privacy/collected_data/other_data_types/used_for_tracking`](class_editorexportplatformios.md#class_editorexportplatformios_property_privacy/collected_data/other_data_types/used_for_tracking)                   |
| [`bool`](class_bool.md)                           | [`privacy/collected_data/other_diagnostic_data/collected`](class_editorexportplatformios.md#class_editorexportplatformios_property_privacy/collected_data/other_diagnostic_data/collected)                         |
| [`int`](class_int.md)                             | [`privacy/collected_data/other_diagnostic_data/collection_purposes`](class_editorexportplatformios.md#class_editorexportplatformios_property_privacy/collected_data/other_diagnostic_data/collection_purposes)     |
| [`bool`](class_bool.md)                           | [`privacy/collected_data/other_diagnostic_data/linked_to_user`](class_editorexportplatformios.md#class_editorexportplatformios_property_privacy/collected_data/other_diagnostic_data/linked_to_user)               |
| [`bool`](class_bool.md)                           | [`privacy/collected_data/other_diagnostic_data/used_for_tracking`](class_editorexportplatformios.md#class_editorexportplatformios_property_privacy/collected_data/other_diagnostic_data/used_for_tracking)         |
| [`bool`](class_bool.md)                           | [`privacy/collected_data/other_financial_info/collected`](class_editorexportplatformios.md#class_editorexportplatformios_property_privacy/collected_data/other_financial_info/collected)                           |
| [`int`](class_int.md)                             | [`privacy/collected_data/other_financial_info/collection_purposes`](class_editorexportplatformios.md#class_editorexportplatformios_property_privacy/collected_data/other_financial_info/collection_purposes)       |
| [`bool`](class_bool.md)                           | [`privacy/collected_data/other_financial_info/linked_to_user`](class_editorexportplatformios.md#class_editorexportplatformios_property_privacy/collected_data/other_financial_info/linked_to_user)                 |
| [`bool`](class_bool.md)                           | [`privacy/collected_data/other_financial_info/used_for_tracking`](class_editorexportplatformios.md#class_editorexportplatformios_property_privacy/collected_data/other_financial_info/used_for_tracking)           |
| [`bool`](class_bool.md)                           | [`privacy/collected_data/other_usage_data/collected`](class_editorexportplatformios.md#class_editorexportplatformios_property_privacy/collected_data/other_usage_data/collected)                                   |
| [`int`](class_int.md)                             | [`privacy/collected_data/other_usage_data/collection_purposes`](class_editorexportplatformios.md#class_editorexportplatformios_property_privacy/collected_data/other_usage_data/collection_purposes)               |
| [`bool`](class_bool.md)                           | [`privacy/collected_data/other_usage_data/linked_to_user`](class_editorexportplatformios.md#class_editorexportplatformios_property_privacy/collected_data/other_usage_data/linked_to_user)                         |
| [`bool`](class_bool.md)                           | [`privacy/collected_data/other_usage_data/used_for_tracking`](class_editorexportplatformios.md#class_editorexportplatformios_property_privacy/collected_data/other_usage_data/used_for_tracking)                   |
| [`bool`](class_bool.md)                           | [`privacy/collected_data/other_user_content/collected`](class_editorexportplatformios.md#class_editorexportplatformios_property_privacy/collected_data/other_user_content/collected)                               |
| [`int`](class_int.md)                             | [`privacy/collected_data/other_user_content/collection_purposes`](class_editorexportplatformios.md#class_editorexportplatformios_property_privacy/collected_data/other_user_content/collection_purposes)           |
| [`bool`](class_bool.md)                           | [`privacy/collected_data/other_user_content/linked_to_user`](class_editorexportplatformios.md#class_editorexportplatformios_property_privacy/collected_data/other_user_content/linked_to_user)                     |
| [`bool`](class_bool.md)                           | [`privacy/collected_data/other_user_content/used_for_tracking`](class_editorexportplatformios.md#class_editorexportplatformios_property_privacy/collected_data/other_user_content/used_for_tracking)               |
| [`bool`](class_bool.md)                           | [`privacy/collected_data/payment_info/collected`](class_editorexportplatformios.md#class_editorexportplatformios_property_privacy/collected_data/payment_info/collected)                                           |
| [`int`](class_int.md)                             | [`privacy/collected_data/payment_info/collection_purposes`](class_editorexportplatformios.md#class_editorexportplatformios_property_privacy/collected_data/payment_info/collection_purposes)                       |
| [`bool`](class_bool.md)                           | [`privacy/collected_data/payment_info/linked_to_user`](class_editorexportplatformios.md#class_editorexportplatformios_property_privacy/collected_data/payment_info/linked_to_user)                                 |
| [`bool`](class_bool.md)                           | [`privacy/collected_data/payment_info/used_for_tracking`](class_editorexportplatformios.md#class_editorexportplatformios_property_privacy/collected_data/payment_info/used_for_tracking)                           |
| [`bool`](class_bool.md)                           | [`privacy/collected_data/performance_data/collected`](class_editorexportplatformios.md#class_editorexportplatformios_property_privacy/collected_data/performance_data/collected)                                   |
| [`int`](class_int.md)                             | [`privacy/collected_data/performance_data/collection_purposes`](class_editorexportplatformios.md#class_editorexportplatformios_property_privacy/collected_data/performance_data/collection_purposes)               |
| [`bool`](class_bool.md)                           | [`privacy/collected_data/performance_data/linked_to_user`](class_editorexportplatformios.md#class_editorexportplatformios_property_privacy/collected_data/performance_data/linked_to_user)                         |
| [`bool`](class_bool.md)                           | [`privacy/collected_data/performance_data/used_for_tracking`](class_editorexportplatformios.md#class_editorexportplatformios_property_privacy/collected_data/performance_data/used_for_tracking)                   |
| [`bool`](class_bool.md)                           | [`privacy/collected_data/phone_number/collected`](class_editorexportplatformios.md#class_editorexportplatformios_property_privacy/collected_data/phone_number/collected)                                           |
| [`int`](class_int.md)                             | [`privacy/collected_data/phone_number/collection_purposes`](class_editorexportplatformios.md#class_editorexportplatformios_property_privacy/collected_data/phone_number/collection_purposes)                       |
| [`bool`](class_bool.md)                           | [`privacy/collected_data/phone_number/linked_to_user`](class_editorexportplatformios.md#class_editorexportplatformios_property_privacy/collected_data/phone_number/linked_to_user)                                 |
| [`bool`](class_bool.md)                           | [`privacy/collected_data/phone_number/used_for_tracking`](class_editorexportplatformios.md#class_editorexportplatformios_property_privacy/collected_data/phone_number/used_for_tracking)                           |
| [`bool`](class_bool.md)                           | [`privacy/collected_data/photos_or_videos/collected`](class_editorexportplatformios.md#class_editorexportplatformios_property_privacy/collected_data/photos_or_videos/collected)                                   |
| [`int`](class_int.md)                             | [`privacy/collected_data/photos_or_videos/collection_purposes`](class_editorexportplatformios.md#class_editorexportplatformios_property_privacy/collected_data/photos_or_videos/collection_purposes)               |
| [`bool`](class_bool.md)                           | [`privacy/collected_data/photos_or_videos/linked_to_user`](class_editorexportplatformios.md#class_editorexportplatformios_property_privacy/collected_data/photos_or_videos/linked_to_user)                         |
| [`bool`](class_bool.md)                           | [`privacy/collected_data/photos_or_videos/used_for_tracking`](class_editorexportplatformios.md#class_editorexportplatformios_property_privacy/collected_data/photos_or_videos/used_for_tracking)                   |
| [`bool`](class_bool.md)                           | [`privacy/collected_data/physical_address/collected`](class_editorexportplatformios.md#class_editorexportplatformios_property_privacy/collected_data/physical_address/collected)                                   |
| [`int`](class_int.md)                             | [`privacy/collected_data/physical_address/collection_purposes`](class_editorexportplatformios.md#class_editorexportplatformios_property_privacy/collected_data/physical_address/collection_purposes)               |
| [`bool`](class_bool.md)                           | [`privacy/collected_data/physical_address/linked_to_user`](class_editorexportplatformios.md#class_editorexportplatformios_property_privacy/collected_data/physical_address/linked_to_user)                         |
| [`bool`](class_bool.md)                           | [`privacy/collected_data/physical_address/used_for_tracking`](class_editorexportplatformios.md#class_editorexportplatformios_property_privacy/collected_data/physical_address/used_for_tracking)                   |
| [`bool`](class_bool.md)                           | [`privacy/collected_data/precise_location/collected`](class_editorexportplatformios.md#class_editorexportplatformios_property_privacy/collected_data/precise_location/collected)                                   |
| [`int`](class_int.md)                             | [`privacy/collected_data/precise_location/collection_purposes`](class_editorexportplatformios.md#class_editorexportplatformios_property_privacy/collected_data/precise_location/collection_purposes)               |
| [`bool`](class_bool.md)                           | [`privacy/collected_data/precise_location/linked_to_user`](class_editorexportplatformios.md#class_editorexportplatformios_property_privacy/collected_data/precise_location/linked_to_user)                         |
| [`bool`](class_bool.md)                           | [`privacy/collected_data/precise_location/used_for_tracking`](class_editorexportplatformios.md#class_editorexportplatformios_property_privacy/collected_data/precise_location/used_for_tracking)                   |
| [`bool`](class_bool.md)                           | [`privacy/collected_data/product_interaction/collected`](class_editorexportplatformios.md#class_editorexportplatformios_property_privacy/collected_data/product_interaction/collected)                             |
| [`int`](class_int.md)                             | [`privacy/collected_data/product_interaction/collection_purposes`](class_editorexportplatformios.md#class_editorexportplatformios_property_privacy/collected_data/product_interaction/collection_purposes)         |
| [`bool`](class_bool.md)                           | [`privacy/collected_data/product_interaction/linked_to_user`](class_editorexportplatformios.md#class_editorexportplatformios_property_privacy/collected_data/product_interaction/linked_to_user)                   |
| [`bool`](class_bool.md)                           | [`privacy/collected_data/product_interaction/used_for_tracking`](class_editorexportplatformios.md#class_editorexportplatformios_property_privacy/collected_data/product_interaction/used_for_tracking)             |
| [`bool`](class_bool.md)                           | [`privacy/collected_data/purchase_history/collected`](class_editorexportplatformios.md#class_editorexportplatformios_property_privacy/collected_data/purchase_history/collected)                                   |
| [`int`](class_int.md)                             | [`privacy/collected_data/purchase_history/collection_purposes`](class_editorexportplatformios.md#class_editorexportplatformios_property_privacy/collected_data/purchase_history/collection_purposes)               |
| [`bool`](class_bool.md)                           | [`privacy/collected_data/purchase_history/linked_to_user`](class_editorexportplatformios.md#class_editorexportplatformios_property_privacy/collected_data/purchase_history/linked_to_user)                         |
| [`bool`](class_bool.md)                           | [`privacy/collected_data/purchase_history/used_for_tracking`](class_editorexportplatformios.md#class_editorexportplatformios_property_privacy/collected_data/purchase_history/used_for_tracking)                   |
| [`bool`](class_bool.md)                           | [`privacy/collected_data/search_hhistory/collected`](class_editorexportplatformios.md#class_editorexportplatformios_property_privacy/collected_data/search_hhistory/collected)                                     |
| [`int`](class_int.md)                             | [`privacy/collected_data/search_hhistory/collection_purposes`](class_editorexportplatformios.md#class_editorexportplatformios_property_privacy/collected_data/search_hhistory/collection_purposes)                 |
| [`bool`](class_bool.md)                           | [`privacy/collected_data/search_hhistory/linked_to_user`](class_editorexportplatformios.md#class_editorexportplatformios_property_privacy/collected_data/search_hhistory/linked_to_user)                           |
| [`bool`](class_bool.md)                           | [`privacy/collected_data/search_hhistory/used_for_tracking`](class_editorexportplatformios.md#class_editorexportplatformios_property_privacy/collected_data/search_hhistory/used_for_tracking)                     |
| [`bool`](class_bool.md)                           | [`privacy/collected_data/sensitive_info/collected`](class_editorexportplatformios.md#class_editorexportplatformios_property_privacy/collected_data/sensitive_info/collected)                                       |
| [`int`](class_int.md)                             | [`privacy/collected_data/sensitive_info/collection_purposes`](class_editorexportplatformios.md#class_editorexportplatformios_property_privacy/collected_data/sensitive_info/collection_purposes)                   |
| [`bool`](class_bool.md)                           | [`privacy/collected_data/sensitive_info/linked_to_user`](class_editorexportplatformios.md#class_editorexportplatformios_property_privacy/collected_data/sensitive_info/linked_to_user)                             |
| [`bool`](class_bool.md)                           | [`privacy/collected_data/sensitive_info/used_for_tracking`](class_editorexportplatformios.md#class_editorexportplatformios_property_privacy/collected_data/sensitive_info/used_for_tracking)                       |
| [`bool`](class_bool.md)                           | [`privacy/collected_data/user_id/collected`](class_editorexportplatformios.md#class_editorexportplatformios_property_privacy/collected_data/user_id/collected)                                                     |
| [`int`](class_int.md)                             | [`privacy/collected_data/user_id/collection_purposes`](class_editorexportplatformios.md#class_editorexportplatformios_property_privacy/collected_data/user_id/collection_purposes)                                 |
| [`bool`](class_bool.md)                           | [`privacy/collected_data/user_id/linked_to_user`](class_editorexportplatformios.md#class_editorexportplatformios_property_privacy/collected_data/user_id/linked_to_user)                                           |
| [`bool`](class_bool.md)                           | [`privacy/collected_data/user_id/used_for_tracking`](class_editorexportplatformios.md#class_editorexportplatformios_property_privacy/collected_data/user_id/used_for_tracking)                                     |
| [`int`](class_int.md)                             | [`privacy/disk_space_access_reasons`](class_editorexportplatformios.md#class_editorexportplatformios_property_privacy/disk_space_access_reasons)                                                                   |
| [`int`](class_int.md)                             | [`privacy/file_timestamp_access_reasons`](class_editorexportplatformios.md#class_editorexportplatformios_property_privacy/file_timestamp_access_reasons)                                                           |
| [`String`](class_string.md)                       | [`privacy/microphone_usage_description`](class_editorexportplatformios.md#class_editorexportplatformios_property_privacy/microphone_usage_description)                                                             |
| [`Dictionary`](class_dictionary.md)               | [`privacy/microphone_usage_description_localized`](class_editorexportplatformios.md#class_editorexportplatformios_property_privacy/microphone_usage_description_localized)                                         |
| [`String`](class_string.md)                       | [`privacy/photolibrary_usage_description`](class_editorexportplatformios.md#class_editorexportplatformios_property_privacy/photolibrary_usage_description)                                                         |
| [`Dictionary`](class_dictionary.md)               | [`privacy/photolibrary_usage_description_localized`](class_editorexportplatformios.md#class_editorexportplatformios_property_privacy/photolibrary_usage_description_localized)                                     |
| [`int`](class_int.md)                             | [`privacy/system_boot_time_access_reasons`](class_editorexportplatformios.md#class_editorexportplatformios_property_privacy/system_boot_time_access_reasons)                                                       |
| [`PackedStringArray`](class_packedstringarray.md) | [`privacy/tracking_domains`](class_editorexportplatformios.md#class_editorexportplatformios_property_privacy/tracking_domains)                                                                                     |
| [`bool`](class_bool.md)                           | [`privacy/tracking_enabled`](class_editorexportplatformios.md#class_editorexportplatformios_property_privacy/tracking_enabled)                                                                                     |
| [`int`](class_int.md)                             | [`privacy/user_defaults_access_reasons`](class_editorexportplatformios.md#class_editorexportplatformios_property_privacy/user_defaults_access_reasons)                                                             |
| [`Color`](class_color.md)                         | [`storyboard/custom_bg_color`](class_editorexportplatformios.md#class_editorexportplatformios_property_storyboard/custom_bg_color)                                                                                 |
| [`String`](class_string.md)                       | [`storyboard/custom_image@2x`](class_editorexportplatformios.md#class_editorexportplatformios_property_storyboard/custom_image@2x)                                                                                 |
| [`String`](class_string.md)                       | [`storyboard/custom_image@3x`](class_editorexportplatformios.md#class_editorexportplatformios_property_storyboard/custom_image@3x)                                                                                 |
| [`int`](class_int.md)                             | [`storyboard/image_scale_mode`](class_editorexportplatformios.md#class_editorexportplatformios_property_storyboard/image_scale_mode)                                                                               |
| [`bool`](class_bool.md)                           | [`storyboard/use_custom_bg_color`](class_editorexportplatformios.md#class_editorexportplatformios_property_storyboard/use_custom_bg_color)                                                                         |
| [`bool`](class_bool.md)                           | [`user_data/accessible_from_files_app`](class_editorexportplatformios.md#class_editorexportplatformios_property_user_data/accessible_from_files_app)                                                               |
| [`bool`](class_bool.md)                           | [`user_data/accessible_from_itunes_sharing`](class_editorexportplatformios.md#class_editorexportplatformios_property_user_data/accessible_from_itunes_sharing)                                                     |

<!-- rst-class:: classref-section-separator -->

---

## 属性说明

<div id="_class_editorexportplatformios_property_application/additional_plist_content"></div>

[`String`](class_string.md) **application/additional_plist_content** <div id="class_editorexportplatformios_property_application/additional_plist_content"></div>

Additional data added to the root `<dict>` section of the [*Info.plist*](https://developer.apple.com/documentation/bundleresources/information_property_list) file. The value should be an XML section with pairs of key-value elements, e.g.:

```text

    <key>key_name</key>
    <string>value</string>
```



<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatformios_property_application/app_store_team_id"></div>

[`String`](class_string.md) **application/app_store_team_id** <div id="class_editorexportplatformios_property_application/app_store_team_id"></div>

Apple Team ID, unique 10-character string. To locate your Team ID check "Membership details" section in your Apple developer account dashboard, or "Organizational Unit" of your code signing certificate. See [*Locate your Team ID*](https://developer.apple.com/help/account/manage-your-team/locate-your-team-id).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatformios_property_application/bundle_identifier"></div>

[`String`](class_string.md) **application/bundle_identifier** <div id="class_editorexportplatformios_property_application/bundle_identifier"></div>

Unique application identifier in a reverse-DNS format, can only contain alphanumeric characters (`A-Z`, `a-z`, and `0-9`), hyphens (`-`), and periods (`.`).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatformios_property_application/code_sign_identity_debug"></div>

[`String`](class_string.md) **application/code_sign_identity_debug** <div id="class_editorexportplatformios_property_application/code_sign_identity_debug"></div>

The "Full Name", "Common Name" or SHA-1 hash of the signing identity used for debug export.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatformios_property_application/code_sign_identity_release"></div>

[`String`](class_string.md) **application/code_sign_identity_release** <div id="class_editorexportplatformios_property_application/code_sign_identity_release"></div>

The "Full Name", "Common Name" or SHA-1 hash of the signing identity used for release export.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatformios_property_application/delete_old_export_files_unconditionally"></div>

[`bool`](class_bool.md) **application/delete_old_export_files_unconditionally** <div id="class_editorexportplatformios_property_application/delete_old_export_files_unconditionally"></div>

If `true`, existing "project name" and "project name.xcodeproj" in the export destination directory will be unconditionally deleted during export.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatformios_property_application/export_method_debug"></div>

[`int`](class_int.md) **application/export_method_debug** <div id="class_editorexportplatformios_property_application/export_method_debug"></div>

Application distribution target (debug export).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatformios_property_application/export_method_release"></div>

[`int`](class_int.md) **application/export_method_release** <div id="class_editorexportplatformios_property_application/export_method_release"></div>

Application distribution target (release export).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatformios_property_application/export_project_only"></div>

[`bool`](class_bool.md) **application/export_project_only** <div id="class_editorexportplatformios_property_application/export_project_only"></div>

If `true`, exports iOS project files without building an XCArchive or `.ipa` file. If `false`, exports iOS project files and builds an XCArchive and `.ipa` file at the same time. When combining Godot with Fastlane or other build pipelines, you may want to set this to `true`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatformios_property_application/generate_simulator_library_if_missing"></div>

[`bool`](class_bool.md) **application/generate_simulator_library_if_missing** <div id="class_editorexportplatformios_property_application/generate_simulator_library_if_missing"></div>

If `true`, and ARM64 simulator library is missing from the export template, it is automatically generated from ARM64 device library.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatformios_property_application/icon_interpolation"></div>

[`int`](class_int.md) **application/icon_interpolation** <div id="class_editorexportplatformios_property_application/icon_interpolation"></div>

Interpolation method used to resize application icon.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatformios_property_application/min_ios_version"></div>

[`String`](class_string.md) **application/min_ios_version** <div id="class_editorexportplatformios_property_application/min_ios_version"></div>

Minimum version of iOS required for this application to run in the `major.minor.patch` or `major.minor` format, can only contain numeric characters (`0-9`) and periods (`.`).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatformios_property_application/provisioning_profile_uuid_debug"></div>

[`String`](class_string.md) **application/provisioning_profile_uuid_debug** <div id="class_editorexportplatformios_property_application/provisioning_profile_uuid_debug"></div>

UUID of the provisioning profile. If left empty, Xcode will download or create a provisioning profile automatically. See [*Edit, download, or delete provisioning profiles*](https://developer.apple.com/help/account/manage-profiles/edit-download-or-delete-profiles).

Can be overridden with the environment variable `GODOT_IOS_PROVISIONING_PROFILE_UUID_DEBUG`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatformios_property_application/provisioning_profile_uuid_release"></div>

[`String`](class_string.md) **application/provisioning_profile_uuid_release** <div id="class_editorexportplatformios_property_application/provisioning_profile_uuid_release"></div>

UUID of the provisioning profile. If left empty, Xcode will download or create a provisioning profile automatically. See [*Edit, download, or delete provisioning profiles*](https://developer.apple.com/help/account/manage-profiles/edit-download-or-delete-profiles).

Can be overridden with the environment variable `GODOT_IOS_PROVISIONING_PROFILE_UUID_RELEASE`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatformios_property_application/short_version"></div>

[`String`](class_string.md) **application/short_version** <div id="class_editorexportplatformios_property_application/short_version"></div>

Application version visible to the user, can only contain numeric characters (`0-9`) and periods (`.`). Falls back to [`ProjectSettings.application/config/version`](class_projectsettings.md#class_projectsettings_property_application/config/version) if left empty.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatformios_property_application/signature"></div>

[`String`](class_string.md) **application/signature** <div id="class_editorexportplatformios_property_application/signature"></div>

A four-character creator code that is specific to the bundle. Optional.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatformios_property_application/targeted_device_family"></div>

[`int`](class_int.md) **application/targeted_device_family** <div id="class_editorexportplatformios_property_application/targeted_device_family"></div>

Supported device family.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatformios_property_application/version"></div>

[`String`](class_string.md) **application/version** <div id="class_editorexportplatformios_property_application/version"></div>

Machine-readable application version, in the `major.minor.patch` format, can only contain numeric characters (`0-9`) and periods (`.`). This must be incremented on every new release pushed to the App Store.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatformios_property_architectures/arm64"></div>

[`bool`](class_bool.md) **architectures/arm64** <div id="class_editorexportplatformios_property_architectures/arm64"></div>

If `true`, `arm64` binaries are included into exported project.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatformios_property_capabilities/access_wifi"></div>

[`bool`](class_bool.md) **capabilities/access_wifi** <div id="class_editorexportplatformios_property_capabilities/access_wifi"></div>

If `true`, networking features related to Wi-Fi access are enabled. See [*Required Device Capabilities*](https://developer.apple.com/support/required-device-capabilities/).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatformios_property_capabilities/performance_a12"></div>

[`bool`](class_bool.md) **capabilities/performance_a12** <div id="class_editorexportplatformios_property_capabilities/performance_a12"></div>

Requires the graphics performance and features of the A12 Bionic and later chips (devices supporting all Vulkan renderer features).

Enabling this option limits supported devices to: iPhone XS, iPhone XR, iPad Mini (5th gen.), iPad Air (3rd gen.), iPad (8th gen) and newer.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatformios_property_capabilities/performance_gaming_tier"></div>

[`bool`](class_bool.md) **capabilities/performance_gaming_tier** <div id="class_editorexportplatformios_property_capabilities/performance_gaming_tier"></div>

Requires the graphics performance and features of the A17 Pro and later chips.

Enabling this option limits supported devices to: iPhone 15 Pro and newer.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatformios_property_capabilities/push_notifications"></div>

[`bool`](class_bool.md) **capabilities/push_notifications** <div id="class_editorexportplatformios_property_capabilities/push_notifications"></div>

If `true`, push notifications are enabled. See [*Required Device Capabilities*](https://developer.apple.com/support/required-device-capabilities/).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatformios_property_custom_template/debug"></div>

[`String`](class_string.md) **custom_template/debug** <div id="class_editorexportplatformios_property_custom_template/debug"></div>

Path to the custom export template. If left empty, default template is used.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatformios_property_custom_template/release"></div>

[`String`](class_string.md) **custom_template/release** <div id="class_editorexportplatformios_property_custom_template/release"></div>

Path to the custom export template. If left empty, default template is used.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatformios_property_icons/app_store_1024x1024"></div>

[`String`](class_string.md) **icons/app_store_1024x1024** <div id="class_editorexportplatformios_property_icons/app_store_1024x1024"></div>

App Store application icon file. If left empty, it will fallback to [`ProjectSettings.application/config/icon`](class_projectsettings.md#class_projectsettings_property_application/config/icon). See [*App icons*](https://developer.apple.com/design/human-interface-guidelines/foundations/app-icons).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatformios_property_icons/app_store_1024x1024_dark"></div>

[`String`](class_string.md) **icons/app_store_1024x1024_dark** <div id="class_editorexportplatformios_property_icons/app_store_1024x1024_dark"></div>

App Store application icon file, dark version. See [*App icons*](https://developer.apple.com/design/human-interface-guidelines/foundations/app-icons).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatformios_property_icons/app_store_1024x1024_tinted"></div>

[`String`](class_string.md) **icons/app_store_1024x1024_tinted** <div id="class_editorexportplatformios_property_icons/app_store_1024x1024_tinted"></div>

App Store application icon file, tinted version. See [*App icons*](https://developer.apple.com/design/human-interface-guidelines/foundations/app-icons).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatformios_property_icons/icon_1024x1024"></div>

[`String`](class_string.md) **icons/icon_1024x1024** <div id="class_editorexportplatformios_property_icons/icon_1024x1024"></div>

Base application icon used to generate other icons. If left empty, it will fallback to [`ProjectSettings.application/config/icon`](class_projectsettings.md#class_projectsettings_property_application/config/icon). See [*App icons*](https://developer.apple.com/design/human-interface-guidelines/foundations/app-icons).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatformios_property_icons/icon_1024x1024_dark"></div>

[`String`](class_string.md) **icons/icon_1024x1024_dark** <div id="class_editorexportplatformios_property_icons/icon_1024x1024_dark"></div>

Base application icon used to generate other icons, dark version. See [*App icons*](https://developer.apple.com/design/human-interface-guidelines/foundations/app-icons).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatformios_property_icons/icon_1024x1024_tinted"></div>

[`String`](class_string.md) **icons/icon_1024x1024_tinted** <div id="class_editorexportplatformios_property_icons/icon_1024x1024_tinted"></div>

Base application icon used to generate other icons, tinted version. See [*App icons*](https://developer.apple.com/design/human-interface-guidelines/foundations/app-icons).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatformios_property_icons/ios_128x128"></div>

[`String`](class_string.md) **icons/ios_128x128** <div id="class_editorexportplatformios_property_icons/ios_128x128"></div>

iOS application 64x64 icon file (2x DPI). If left empty, it will fallback to [`ProjectSettings.application/config/icon`](class_projectsettings.md#class_projectsettings_property_application/config/icon). See [*App icons*](https://developer.apple.com/design/human-interface-guidelines/foundations/app-icons).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatformios_property_icons/ios_128x128_dark"></div>

[`String`](class_string.md) **icons/ios_128x128_dark** <div id="class_editorexportplatformios_property_icons/ios_128x128_dark"></div>

iOS application 64x64 icon file (2x DPI), dark version. See [*App icons*](https://developer.apple.com/design/human-interface-guidelines/foundations/app-icons).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatformios_property_icons/ios_128x128_tinted"></div>

[`String`](class_string.md) **icons/ios_128x128_tinted** <div id="class_editorexportplatformios_property_icons/ios_128x128_tinted"></div>

iOS application 64x64 icon file (2x DPI), tinted version. See [*App icons*](https://developer.apple.com/design/human-interface-guidelines/foundations/app-icons).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatformios_property_icons/ios_136x136"></div>

[`String`](class_string.md) **icons/ios_136x136** <div id="class_editorexportplatformios_property_icons/ios_136x136"></div>

iOS application 68x68 icon file (2x DPI). If left empty, it will fallback to [`ProjectSettings.application/config/icon`](class_projectsettings.md#class_projectsettings_property_application/config/icon). See [*App icons*](https://developer.apple.com/design/human-interface-guidelines/foundations/app-icons).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatformios_property_icons/ios_136x136_dark"></div>

[`String`](class_string.md) **icons/ios_136x136_dark** <div id="class_editorexportplatformios_property_icons/ios_136x136_dark"></div>

iOS application 68x68 icon file (2x DPI), dark version. See [*App icons*](https://developer.apple.com/design/human-interface-guidelines/foundations/app-icons).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatformios_property_icons/ios_136x136_tinted"></div>

[`String`](class_string.md) **icons/ios_136x136_tinted** <div id="class_editorexportplatformios_property_icons/ios_136x136_tinted"></div>

iOS application 68x68 icon file (2x DPI), tinted version. See [*App icons*](https://developer.apple.com/design/human-interface-guidelines/foundations/app-icons).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatformios_property_icons/ios_192x192"></div>

[`String`](class_string.md) **icons/ios_192x192** <div id="class_editorexportplatformios_property_icons/ios_192x192"></div>

iOS application 64x64 icon file (3x DPI). If left empty, it will fallback to [`ProjectSettings.application/config/icon`](class_projectsettings.md#class_projectsettings_property_application/config/icon). See [*App icons*](https://developer.apple.com/design/human-interface-guidelines/foundations/app-icons).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatformios_property_icons/ios_192x192_dark"></div>

[`String`](class_string.md) **icons/ios_192x192_dark** <div id="class_editorexportplatformios_property_icons/ios_192x192_dark"></div>

iOS application 64x64 icon file (3x DPI), dark version. See [*App icons*](https://developer.apple.com/design/human-interface-guidelines/foundations/app-icons).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatformios_property_icons/ios_192x192_tinted"></div>

[`String`](class_string.md) **icons/ios_192x192_tinted** <div id="class_editorexportplatformios_property_icons/ios_192x192_tinted"></div>

iOS application 64x64 icon file (3x DPI), tinted version. See [*App icons*](https://developer.apple.com/design/human-interface-guidelines/foundations/app-icons).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatformios_property_icons/ipad_152x152"></div>

[`String`](class_string.md) **icons/ipad_152x152** <div id="class_editorexportplatformios_property_icons/ipad_152x152"></div>

Home screen application icon file on iPad (2x DPI). If left empty, it will fallback to [`ProjectSettings.application/config/icon`](class_projectsettings.md#class_projectsettings_property_application/config/icon). See [*App icons*](https://developer.apple.com/design/human-interface-guidelines/foundations/app-icons).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatformios_property_icons/ipad_152x152_dark"></div>

[`String`](class_string.md) **icons/ipad_152x152_dark** <div id="class_editorexportplatformios_property_icons/ipad_152x152_dark"></div>

Home screen application icon file on iPad (2x DPI), dark version. See [*App icons*](https://developer.apple.com/design/human-interface-guidelines/foundations/app-icons).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatformios_property_icons/ipad_152x152_tinted"></div>

[`String`](class_string.md) **icons/ipad_152x152_tinted** <div id="class_editorexportplatformios_property_icons/ipad_152x152_tinted"></div>

Home screen application icon file on iPad (2x DPI), tinted version. See [*App icons*](https://developer.apple.com/design/human-interface-guidelines/foundations/app-icons).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatformios_property_icons/ipad_167x167"></div>

[`String`](class_string.md) **icons/ipad_167x167** <div id="class_editorexportplatformios_property_icons/ipad_167x167"></div>

Home screen application icon file on iPad (3x DPI). If left empty, it will fallback to [`ProjectSettings.application/config/icon`](class_projectsettings.md#class_projectsettings_property_application/config/icon). See [*App icons*](https://developer.apple.com/design/human-interface-guidelines/foundations/app-icons).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatformios_property_icons/ipad_167x167_dark"></div>

[`String`](class_string.md) **icons/ipad_167x167_dark** <div id="class_editorexportplatformios_property_icons/ipad_167x167_dark"></div>

Home screen application icon file on iPad (3x DPI), dark version. See [*App icons*](https://developer.apple.com/design/human-interface-guidelines/foundations/app-icons).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatformios_property_icons/ipad_167x167_tinted"></div>

[`String`](class_string.md) **icons/ipad_167x167_tinted** <div id="class_editorexportplatformios_property_icons/ipad_167x167_tinted"></div>

Home screen application icon file on iPad (3x DPI), tinted version. See [*App icons*](https://developer.apple.com/design/human-interface-guidelines/foundations/app-icons).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatformios_property_icons/iphone_120x120"></div>

[`String`](class_string.md) **icons/iphone_120x120** <div id="class_editorexportplatformios_property_icons/iphone_120x120"></div>

Home screen application icon file on iPhone (2x DPI). If left empty, it will fallback to [`ProjectSettings.application/config/icon`](class_projectsettings.md#class_projectsettings_property_application/config/icon). See [*App icons*](https://developer.apple.com/design/human-interface-guidelines/foundations/app-icons).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatformios_property_icons/iphone_120x120_dark"></div>

[`String`](class_string.md) **icons/iphone_120x120_dark** <div id="class_editorexportplatformios_property_icons/iphone_120x120_dark"></div>

Home screen application icon file on iPhone (2x DPI), dark version. See [*App icons*](https://developer.apple.com/design/human-interface-guidelines/foundations/app-icons).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatformios_property_icons/iphone_120x120_tinted"></div>

[`String`](class_string.md) **icons/iphone_120x120_tinted** <div id="class_editorexportplatformios_property_icons/iphone_120x120_tinted"></div>

Home screen application icon file on iPhone (2x DPI), tinted version. See [*App icons*](https://developer.apple.com/design/human-interface-guidelines/foundations/app-icons).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatformios_property_icons/iphone_180x180"></div>

[`String`](class_string.md) **icons/iphone_180x180** <div id="class_editorexportplatformios_property_icons/iphone_180x180"></div>

Home screen application icon file on iPhone (3x DPI). If left empty, it will fallback to [`ProjectSettings.application/config/icon`](class_projectsettings.md#class_projectsettings_property_application/config/icon). See [*App icons*](https://developer.apple.com/design/human-interface-guidelines/foundations/app-icons).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatformios_property_icons/iphone_180x180_dark"></div>

[`String`](class_string.md) **icons/iphone_180x180_dark** <div id="class_editorexportplatformios_property_icons/iphone_180x180_dark"></div>

Home screen application icon file on iPhone (3x DPI), dark version. See [*App icons*](https://developer.apple.com/design/human-interface-guidelines/foundations/app-icons).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatformios_property_icons/iphone_180x180_tinted"></div>

[`String`](class_string.md) **icons/iphone_180x180_tinted** <div id="class_editorexportplatformios_property_icons/iphone_180x180_tinted"></div>

Home screen application icon file on iPhone (3x DPI), tinted version. See [*App icons*](https://developer.apple.com/design/human-interface-guidelines/foundations/app-icons).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatformios_property_icons/notification_40x40"></div>

[`String`](class_string.md) **icons/notification_40x40** <div id="class_editorexportplatformios_property_icons/notification_40x40"></div>

Notification icon file on iPad and iPhone (2x DPI). If left empty, it will fallback to [`ProjectSettings.application/config/icon`](class_projectsettings.md#class_projectsettings_property_application/config/icon). See [*App icons*](https://developer.apple.com/design/human-interface-guidelines/foundations/app-icons).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatformios_property_icons/notification_40x40_dark"></div>

[`String`](class_string.md) **icons/notification_40x40_dark** <div id="class_editorexportplatformios_property_icons/notification_40x40_dark"></div>

Notification icon file on iPad and iPhone (2x DPI), dark version. See [*App icons*](https://developer.apple.com/design/human-interface-guidelines/foundations/app-icons).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatformios_property_icons/notification_40x40_tinted"></div>

[`String`](class_string.md) **icons/notification_40x40_tinted** <div id="class_editorexportplatformios_property_icons/notification_40x40_tinted"></div>

Notification icon file on iPad and iPhone (2x DPI), tinted version. See [*App icons*](https://developer.apple.com/design/human-interface-guidelines/foundations/app-icons).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatformios_property_icons/notification_60x60"></div>

[`String`](class_string.md) **icons/notification_60x60** <div id="class_editorexportplatformios_property_icons/notification_60x60"></div>

Notification icon file on iPhone (3x DPI). If left empty, it will fallback to [`ProjectSettings.application/config/icon`](class_projectsettings.md#class_projectsettings_property_application/config/icon). See [*App icons*](https://developer.apple.com/design/human-interface-guidelines/foundations/app-icons).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatformios_property_icons/notification_60x60_dark"></div>

[`String`](class_string.md) **icons/notification_60x60_dark** <div id="class_editorexportplatformios_property_icons/notification_60x60_dark"></div>

Notification icon file on iPhone (3x DPI), dark version. See [*App icons*](https://developer.apple.com/design/human-interface-guidelines/foundations/app-icons).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatformios_property_icons/notification_60x60_tinted"></div>

[`String`](class_string.md) **icons/notification_60x60_tinted** <div id="class_editorexportplatformios_property_icons/notification_60x60_tinted"></div>

Notification icon file on iPhone (3x DPI), tinted version. See [*App icons*](https://developer.apple.com/design/human-interface-guidelines/foundations/app-icons).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatformios_property_icons/notification_76x76"></div>

[`String`](class_string.md) **icons/notification_76x76** <div id="class_editorexportplatformios_property_icons/notification_76x76"></div>

Notification icon file on iPad and iPhone (2x DPI). If left empty, it will fallback to [`ProjectSettings.application/config/icon`](class_projectsettings.md#class_projectsettings_property_application/config/icon). See [*App icons*](https://developer.apple.com/design/human-interface-guidelines/foundations/app-icons).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatformios_property_icons/notification_76x76_dark"></div>

[`String`](class_string.md) **icons/notification_76x76_dark** <div id="class_editorexportplatformios_property_icons/notification_76x76_dark"></div>

Notification icon file on iPad and iPhone (2x DPI), dark version. See [*App icons*](https://developer.apple.com/design/human-interface-guidelines/foundations/app-icons).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatformios_property_icons/notification_76x76_tinted"></div>

[`String`](class_string.md) **icons/notification_76x76_tinted** <div id="class_editorexportplatformios_property_icons/notification_76x76_tinted"></div>

Notification icon file on iPad and iPhone (2x DPI), tinted version. See [*App icons*](https://developer.apple.com/design/human-interface-guidelines/foundations/app-icons).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatformios_property_icons/notification_114x114"></div>

[`String`](class_string.md) **icons/notification_114x114** <div id="class_editorexportplatformios_property_icons/notification_114x114"></div>

Notification icon file on iPad and iPhone (3x DPI). If left empty, it will fallback to [`ProjectSettings.application/config/icon`](class_projectsettings.md#class_projectsettings_property_application/config/icon). See [*App icons*](https://developer.apple.com/design/human-interface-guidelines/foundations/app-icons).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatformios_property_icons/notification_114x114_dark"></div>

[`String`](class_string.md) **icons/notification_114x114_dark** <div id="class_editorexportplatformios_property_icons/notification_114x114_dark"></div>

Notification icon file on iPad and iPhone (3x DPI), dark version. See [*App icons*](https://developer.apple.com/design/human-interface-guidelines/foundations/app-icons).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatformios_property_icons/notification_114x114_tinted"></div>

[`String`](class_string.md) **icons/notification_114x114_tinted** <div id="class_editorexportplatformios_property_icons/notification_114x114_tinted"></div>

Notification icon file on iPad and iPhone (3x DPI), tinted version. See [*App icons*](https://developer.apple.com/design/human-interface-guidelines/foundations/app-icons).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatformios_property_icons/settings_58x58"></div>

[`String`](class_string.md) **icons/settings_58x58** <div id="class_editorexportplatformios_property_icons/settings_58x58"></div>

Application settings icon file on iPad and iPhone (2x DPI). If left empty, it will fallback to [`ProjectSettings.application/config/icon`](class_projectsettings.md#class_projectsettings_property_application/config/icon). See [*App icons*](https://developer.apple.com/design/human-interface-guidelines/foundations/app-icons).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatformios_property_icons/settings_58x58_dark"></div>

[`String`](class_string.md) **icons/settings_58x58_dark** <div id="class_editorexportplatformios_property_icons/settings_58x58_dark"></div>

Application settings icon file on iPad and iPhone (2x DPI), dark version. See [*App icons*](https://developer.apple.com/design/human-interface-guidelines/foundations/app-icons).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatformios_property_icons/settings_58x58_tinted"></div>

[`String`](class_string.md) **icons/settings_58x58_tinted** <div id="class_editorexportplatformios_property_icons/settings_58x58_tinted"></div>

Application settings icon file on iPad and iPhone (2x DPI), tinted version. See [*App icons*](https://developer.apple.com/design/human-interface-guidelines/foundations/app-icons).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatformios_property_icons/settings_87x87"></div>

[`String`](class_string.md) **icons/settings_87x87** <div id="class_editorexportplatformios_property_icons/settings_87x87"></div>

Application settings icon file on iPhone (3x DPI). If left empty, it will fallback to [`ProjectSettings.application/config/icon`](class_projectsettings.md#class_projectsettings_property_application/config/icon). See [*App icons*](https://developer.apple.com/design/human-interface-guidelines/foundations/app-icons).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatformios_property_icons/settings_87x87_dark"></div>

[`String`](class_string.md) **icons/settings_87x87_dark** <div id="class_editorexportplatformios_property_icons/settings_87x87_dark"></div>

Application settings icon file on iPhone (3x DPI), dark version. See [*App icons*](https://developer.apple.com/design/human-interface-guidelines/foundations/app-icons).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatformios_property_icons/settings_87x87_tinted"></div>

[`String`](class_string.md) **icons/settings_87x87_tinted** <div id="class_editorexportplatformios_property_icons/settings_87x87_tinted"></div>

Application settings icon file on iPhone (3x DPI), tinted version. See [*App icons*](https://developer.apple.com/design/human-interface-guidelines/foundations/app-icons).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatformios_property_icons/spotlight_80x80"></div>

[`String`](class_string.md) **icons/spotlight_80x80** <div id="class_editorexportplatformios_property_icons/spotlight_80x80"></div>

Spotlight icon file on iPad and iPhone (2x DPI). If left empty, it will fallback to [`ProjectSettings.application/config/icon`](class_projectsettings.md#class_projectsettings_property_application/config/icon). See [*App icons*](https://developer.apple.com/design/human-interface-guidelines/foundations/app-icons).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatformios_property_icons/spotlight_80x80_dark"></div>

[`String`](class_string.md) **icons/spotlight_80x80_dark** <div id="class_editorexportplatformios_property_icons/spotlight_80x80_dark"></div>

Spotlight icon file on iPad and iPhone (2x DPI), dark version. See [*App icons*](https://developer.apple.com/design/human-interface-guidelines/foundations/app-icons).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatformios_property_icons/spotlight_80x80_tinted"></div>

[`String`](class_string.md) **icons/spotlight_80x80_tinted** <div id="class_editorexportplatformios_property_icons/spotlight_80x80_tinted"></div>

Spotlight icon file on iPad and iPhone (2x DPI), tinted version. See [*App icons*](https://developer.apple.com/design/human-interface-guidelines/foundations/app-icons).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatformios_property_icons/spotlight_120x120"></div>

[`String`](class_string.md) **icons/spotlight_120x120** <div id="class_editorexportplatformios_property_icons/spotlight_120x120"></div>

Spotlight icon file on iPad and iPhone (3x DPI). If left empty, it will fallback to [`ProjectSettings.application/config/icon`](class_projectsettings.md#class_projectsettings_property_application/config/icon). See [*App icons*](https://developer.apple.com/design/human-interface-guidelines/foundations/app-icons).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatformios_property_icons/spotlight_120x120_dark"></div>

[`String`](class_string.md) **icons/spotlight_120x120_dark** <div id="class_editorexportplatformios_property_icons/spotlight_120x120_dark"></div>

Spotlight icon file on iPad and iPhone (3x DPI), dark version. See [*App icons*](https://developer.apple.com/design/human-interface-guidelines/foundations/app-icons).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatformios_property_icons/spotlight_120x120_tinted"></div>

[`String`](class_string.md) **icons/spotlight_120x120_tinted** <div id="class_editorexportplatformios_property_icons/spotlight_120x120_tinted"></div>

Spotlight icon file on iPad and iPhone (3x DPI), tinted version. See [*App icons*](https://developer.apple.com/design/human-interface-guidelines/foundations/app-icons).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatformios_property_privacy/active_keyboard_access_reasons"></div>

[`int`](class_int.md) **privacy/active_keyboard_access_reasons** <div id="class_editorexportplatformios_property_privacy/active_keyboard_access_reasons"></div>

The reasons your app use active keyboard API. See [*Describing use of required reason API*](https://developer.apple.com/documentation/bundleresources/privacy_manifest_files/describing_use_of_required_reason_api).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatformios_property_privacy/camera_usage_description"></div>

[`String`](class_string.md) **privacy/camera_usage_description** <div id="class_editorexportplatformios_property_privacy/camera_usage_description"></div>

A message displayed when requesting access to the device's camera (in English).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatformios_property_privacy/camera_usage_description_localized"></div>

[`Dictionary`](class_dictionary.md) **privacy/camera_usage_description_localized** <div id="class_editorexportplatformios_property_privacy/camera_usage_description_localized"></div>

A message displayed when requesting access to the device's camera (localized).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatformios_property_privacy/collected_data/advertising_data/collected"></div>

[`bool`](class_bool.md) **privacy/collected_data/advertising_data/collected** <div id="class_editorexportplatformios_property_privacy/collected_data/advertising_data/collected"></div>

Indicates whether your app collects advertising data.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatformios_property_privacy/collected_data/advertising_data/collection_purposes"></div>

[`int`](class_int.md) **privacy/collected_data/advertising_data/collection_purposes** <div id="class_editorexportplatformios_property_privacy/collected_data/advertising_data/collection_purposes"></div>

The reasons your app collects advertising data. See [*Describing data use in privacy manifests*](https://developer.apple.com/documentation/bundleresources/privacy_manifest_files/describing_data_use_in_privacy_manifests).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatformios_property_privacy/collected_data/advertising_data/linked_to_user"></div>

[`bool`](class_bool.md) **privacy/collected_data/advertising_data/linked_to_user** <div id="class_editorexportplatformios_property_privacy/collected_data/advertising_data/linked_to_user"></div>

Indicates whether your app links advertising data to the user's identity.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatformios_property_privacy/collected_data/advertising_data/used_for_tracking"></div>

[`bool`](class_bool.md) **privacy/collected_data/advertising_data/used_for_tracking** <div id="class_editorexportplatformios_property_privacy/collected_data/advertising_data/used_for_tracking"></div>

Indicates whether your app uses advertising data for tracking.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatformios_property_privacy/collected_data/audio_data/collected"></div>

[`bool`](class_bool.md) **privacy/collected_data/audio_data/collected** <div id="class_editorexportplatformios_property_privacy/collected_data/audio_data/collected"></div>

Indicates whether your app collects audio data.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatformios_property_privacy/collected_data/audio_data/collection_purposes"></div>

[`int`](class_int.md) **privacy/collected_data/audio_data/collection_purposes** <div id="class_editorexportplatformios_property_privacy/collected_data/audio_data/collection_purposes"></div>

The reasons your app collects audio data. See [*Describing data use in privacy manifests*](https://developer.apple.com/documentation/bundleresources/privacy_manifest_files/describing_data_use_in_privacy_manifests).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatformios_property_privacy/collected_data/audio_data/linked_to_user"></div>

[`bool`](class_bool.md) **privacy/collected_data/audio_data/linked_to_user** <div id="class_editorexportplatformios_property_privacy/collected_data/audio_data/linked_to_user"></div>

Indicates whether your app links audio data to the user's identity.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatformios_property_privacy/collected_data/audio_data/used_for_tracking"></div>

[`bool`](class_bool.md) **privacy/collected_data/audio_data/used_for_tracking** <div id="class_editorexportplatformios_property_privacy/collected_data/audio_data/used_for_tracking"></div>

Indicates whether your app uses audio data for tracking.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatformios_property_privacy/collected_data/browsing_history/collected"></div>

[`bool`](class_bool.md) **privacy/collected_data/browsing_history/collected** <div id="class_editorexportplatformios_property_privacy/collected_data/browsing_history/collected"></div>

Indicates whether your app collects browsing history.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatformios_property_privacy/collected_data/browsing_history/collection_purposes"></div>

[`int`](class_int.md) **privacy/collected_data/browsing_history/collection_purposes** <div id="class_editorexportplatformios_property_privacy/collected_data/browsing_history/collection_purposes"></div>

The reasons your app collects browsing history. See [*Describing data use in privacy manifests*](https://developer.apple.com/documentation/bundleresources/privacy_manifest_files/describing_data_use_in_privacy_manifests).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatformios_property_privacy/collected_data/browsing_history/linked_to_user"></div>

[`bool`](class_bool.md) **privacy/collected_data/browsing_history/linked_to_user** <div id="class_editorexportplatformios_property_privacy/collected_data/browsing_history/linked_to_user"></div>

Indicates whether your app links browsing history to the user's identity.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatformios_property_privacy/collected_data/browsing_history/used_for_tracking"></div>

[`bool`](class_bool.md) **privacy/collected_data/browsing_history/used_for_tracking** <div id="class_editorexportplatformios_property_privacy/collected_data/browsing_history/used_for_tracking"></div>

Indicates whether your app uses browsing history for tracking.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatformios_property_privacy/collected_data/coarse_location/collected"></div>

[`bool`](class_bool.md) **privacy/collected_data/coarse_location/collected** <div id="class_editorexportplatformios_property_privacy/collected_data/coarse_location/collected"></div>

Indicates whether your app collects coarse location data.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatformios_property_privacy/collected_data/coarse_location/collection_purposes"></div>

[`int`](class_int.md) **privacy/collected_data/coarse_location/collection_purposes** <div id="class_editorexportplatformios_property_privacy/collected_data/coarse_location/collection_purposes"></div>

The reasons your app collects coarse location data. See [*Describing data use in privacy manifests*](https://developer.apple.com/documentation/bundleresources/privacy_manifest_files/describing_data_use_in_privacy_manifests).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatformios_property_privacy/collected_data/coarse_location/linked_to_user"></div>

[`bool`](class_bool.md) **privacy/collected_data/coarse_location/linked_to_user** <div id="class_editorexportplatformios_property_privacy/collected_data/coarse_location/linked_to_user"></div>

Indicates whether your app links coarse location data to the user's identity.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatformios_property_privacy/collected_data/coarse_location/used_for_tracking"></div>

[`bool`](class_bool.md) **privacy/collected_data/coarse_location/used_for_tracking** <div id="class_editorexportplatformios_property_privacy/collected_data/coarse_location/used_for_tracking"></div>

Indicates whether your app uses coarse location data for tracking.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatformios_property_privacy/collected_data/contacts/collected"></div>

[`bool`](class_bool.md) **privacy/collected_data/contacts/collected** <div id="class_editorexportplatformios_property_privacy/collected_data/contacts/collected"></div>

Indicates whether your app collects contacts.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatformios_property_privacy/collected_data/contacts/collection_purposes"></div>

[`int`](class_int.md) **privacy/collected_data/contacts/collection_purposes** <div id="class_editorexportplatformios_property_privacy/collected_data/contacts/collection_purposes"></div>

The reasons your app collects contacts. See [*Describing data use in privacy manifests*](https://developer.apple.com/documentation/bundleresources/privacy_manifest_files/describing_data_use_in_privacy_manifests).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatformios_property_privacy/collected_data/contacts/linked_to_user"></div>

[`bool`](class_bool.md) **privacy/collected_data/contacts/linked_to_user** <div id="class_editorexportplatformios_property_privacy/collected_data/contacts/linked_to_user"></div>

Indicates whether your app links contacts to the user's identity.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatformios_property_privacy/collected_data/contacts/used_for_tracking"></div>

[`bool`](class_bool.md) **privacy/collected_data/contacts/used_for_tracking** <div id="class_editorexportplatformios_property_privacy/collected_data/contacts/used_for_tracking"></div>

Indicates whether your app uses contacts for tracking.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatformios_property_privacy/collected_data/crash_data/collected"></div>

[`bool`](class_bool.md) **privacy/collected_data/crash_data/collected** <div id="class_editorexportplatformios_property_privacy/collected_data/crash_data/collected"></div>

Indicates whether your app collects crash data.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatformios_property_privacy/collected_data/crash_data/collection_purposes"></div>

[`int`](class_int.md) **privacy/collected_data/crash_data/collection_purposes** <div id="class_editorexportplatformios_property_privacy/collected_data/crash_data/collection_purposes"></div>

The reasons your app collects crash data. See [*Describing data use in privacy manifests*](https://developer.apple.com/documentation/bundleresources/privacy_manifest_files/describing_data_use_in_privacy_manifests).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatformios_property_privacy/collected_data/crash_data/linked_to_user"></div>

[`bool`](class_bool.md) **privacy/collected_data/crash_data/linked_to_user** <div id="class_editorexportplatformios_property_privacy/collected_data/crash_data/linked_to_user"></div>

Indicates whether your app links crash data to the user's identity.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatformios_property_privacy/collected_data/crash_data/used_for_tracking"></div>

[`bool`](class_bool.md) **privacy/collected_data/crash_data/used_for_tracking** <div id="class_editorexportplatformios_property_privacy/collected_data/crash_data/used_for_tracking"></div>

Indicates whether your app uses crash data for tracking.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatformios_property_privacy/collected_data/credit_info/collected"></div>

[`bool`](class_bool.md) **privacy/collected_data/credit_info/collected** <div id="class_editorexportplatformios_property_privacy/collected_data/credit_info/collected"></div>

Indicates whether your app collects credit information.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatformios_property_privacy/collected_data/credit_info/collection_purposes"></div>

[`int`](class_int.md) **privacy/collected_data/credit_info/collection_purposes** <div id="class_editorexportplatformios_property_privacy/collected_data/credit_info/collection_purposes"></div>

The reasons your app collects credit information. See [*Describing data use in privacy manifests*](https://developer.apple.com/documentation/bundleresources/privacy_manifest_files/describing_data_use_in_privacy_manifests).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatformios_property_privacy/collected_data/credit_info/linked_to_user"></div>

[`bool`](class_bool.md) **privacy/collected_data/credit_info/linked_to_user** <div id="class_editorexportplatformios_property_privacy/collected_data/credit_info/linked_to_user"></div>

Indicates whether your app links credit information to the user's identity.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatformios_property_privacy/collected_data/credit_info/used_for_tracking"></div>

[`bool`](class_bool.md) **privacy/collected_data/credit_info/used_for_tracking** <div id="class_editorexportplatformios_property_privacy/collected_data/credit_info/used_for_tracking"></div>

Indicates whether your app uses credit information for tracking.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatformios_property_privacy/collected_data/customer_support/collected"></div>

[`bool`](class_bool.md) **privacy/collected_data/customer_support/collected** <div id="class_editorexportplatformios_property_privacy/collected_data/customer_support/collected"></div>

Indicates whether your app collects customer support data.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatformios_property_privacy/collected_data/customer_support/collection_purposes"></div>

[`int`](class_int.md) **privacy/collected_data/customer_support/collection_purposes** <div id="class_editorexportplatformios_property_privacy/collected_data/customer_support/collection_purposes"></div>

The reasons your app collects customer support data. See [*Describing data use in privacy manifests*](https://developer.apple.com/documentation/bundleresources/privacy_manifest_files/describing_data_use_in_privacy_manifests).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatformios_property_privacy/collected_data/customer_support/linked_to_user"></div>

[`bool`](class_bool.md) **privacy/collected_data/customer_support/linked_to_user** <div id="class_editorexportplatformios_property_privacy/collected_data/customer_support/linked_to_user"></div>

Indicates whether your app links customer support data to the user's identity.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatformios_property_privacy/collected_data/customer_support/used_for_tracking"></div>

[`bool`](class_bool.md) **privacy/collected_data/customer_support/used_for_tracking** <div id="class_editorexportplatformios_property_privacy/collected_data/customer_support/used_for_tracking"></div>

Indicates whether your app uses customer support data for tracking.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatformios_property_privacy/collected_data/device_id/collected"></div>

[`bool`](class_bool.md) **privacy/collected_data/device_id/collected** <div id="class_editorexportplatformios_property_privacy/collected_data/device_id/collected"></div>

Indicates whether your app collects device IDs.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatformios_property_privacy/collected_data/device_id/collection_purposes"></div>

[`int`](class_int.md) **privacy/collected_data/device_id/collection_purposes** <div id="class_editorexportplatformios_property_privacy/collected_data/device_id/collection_purposes"></div>

The reasons your app collects device IDs. See [*Describing data use in privacy manifests*](https://developer.apple.com/documentation/bundleresources/privacy_manifest_files/describing_data_use_in_privacy_manifests).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatformios_property_privacy/collected_data/device_id/linked_to_user"></div>

[`bool`](class_bool.md) **privacy/collected_data/device_id/linked_to_user** <div id="class_editorexportplatformios_property_privacy/collected_data/device_id/linked_to_user"></div>

Indicates whether your app links device IDs to the user's identity.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatformios_property_privacy/collected_data/device_id/used_for_tracking"></div>

[`bool`](class_bool.md) **privacy/collected_data/device_id/used_for_tracking** <div id="class_editorexportplatformios_property_privacy/collected_data/device_id/used_for_tracking"></div>

Indicates whether your app uses device IDs for tracking.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatformios_property_privacy/collected_data/email_address/collected"></div>

[`bool`](class_bool.md) **privacy/collected_data/email_address/collected** <div id="class_editorexportplatformios_property_privacy/collected_data/email_address/collected"></div>

Indicates whether your app collects email address.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatformios_property_privacy/collected_data/email_address/collection_purposes"></div>

[`int`](class_int.md) **privacy/collected_data/email_address/collection_purposes** <div id="class_editorexportplatformios_property_privacy/collected_data/email_address/collection_purposes"></div>

The reasons your app collects email address. See [*Describing data use in privacy manifests*](https://developer.apple.com/documentation/bundleresources/privacy_manifest_files/describing_data_use_in_privacy_manifests).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatformios_property_privacy/collected_data/email_address/linked_to_user"></div>

[`bool`](class_bool.md) **privacy/collected_data/email_address/linked_to_user** <div id="class_editorexportplatformios_property_privacy/collected_data/email_address/linked_to_user"></div>

Indicates whether your app links email address to the user's identity.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatformios_property_privacy/collected_data/email_address/used_for_tracking"></div>

[`bool`](class_bool.md) **privacy/collected_data/email_address/used_for_tracking** <div id="class_editorexportplatformios_property_privacy/collected_data/email_address/used_for_tracking"></div>

Indicates whether your app uses email address for tracking.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatformios_property_privacy/collected_data/emails_or_text_messages/collected"></div>

[`bool`](class_bool.md) **privacy/collected_data/emails_or_text_messages/collected** <div id="class_editorexportplatformios_property_privacy/collected_data/emails_or_text_messages/collected"></div>

Indicates whether your app collects emails or text messages.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatformios_property_privacy/collected_data/emails_or_text_messages/collection_purposes"></div>

[`int`](class_int.md) **privacy/collected_data/emails_or_text_messages/collection_purposes** <div id="class_editorexportplatformios_property_privacy/collected_data/emails_or_text_messages/collection_purposes"></div>

The reasons your app collects emails or text messages. See [*Describing data use in privacy manifests*](https://developer.apple.com/documentation/bundleresources/privacy_manifest_files/describing_data_use_in_privacy_manifests).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatformios_property_privacy/collected_data/emails_or_text_messages/linked_to_user"></div>

[`bool`](class_bool.md) **privacy/collected_data/emails_or_text_messages/linked_to_user** <div id="class_editorexportplatformios_property_privacy/collected_data/emails_or_text_messages/linked_to_user"></div>

Indicates whether your app links emails or text messages to the user's identity.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatformios_property_privacy/collected_data/emails_or_text_messages/used_for_tracking"></div>

[`bool`](class_bool.md) **privacy/collected_data/emails_or_text_messages/used_for_tracking** <div id="class_editorexportplatformios_property_privacy/collected_data/emails_or_text_messages/used_for_tracking"></div>

Indicates whether your app uses emails or text messages for tracking.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatformios_property_privacy/collected_data/environment_scanning/collected"></div>

[`bool`](class_bool.md) **privacy/collected_data/environment_scanning/collected** <div id="class_editorexportplatformios_property_privacy/collected_data/environment_scanning/collected"></div>

Indicates whether your app collects environment scanning data.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatformios_property_privacy/collected_data/environment_scanning/collection_purposes"></div>

[`int`](class_int.md) **privacy/collected_data/environment_scanning/collection_purposes** <div id="class_editorexportplatformios_property_privacy/collected_data/environment_scanning/collection_purposes"></div>

The reasons your app collects environment scanning data. See [*Describing data use in privacy manifests*](https://developer.apple.com/documentation/bundleresources/privacy_manifest_files/describing_data_use_in_privacy_manifests).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatformios_property_privacy/collected_data/environment_scanning/linked_to_user"></div>

[`bool`](class_bool.md) **privacy/collected_data/environment_scanning/linked_to_user** <div id="class_editorexportplatformios_property_privacy/collected_data/environment_scanning/linked_to_user"></div>

Indicates whether your app links environment scanning data to the user's identity.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatformios_property_privacy/collected_data/environment_scanning/used_for_tracking"></div>

[`bool`](class_bool.md) **privacy/collected_data/environment_scanning/used_for_tracking** <div id="class_editorexportplatformios_property_privacy/collected_data/environment_scanning/used_for_tracking"></div>

Indicates whether your app uses environment scanning data for tracking.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatformios_property_privacy/collected_data/fitness/collected"></div>

[`bool`](class_bool.md) **privacy/collected_data/fitness/collected** <div id="class_editorexportplatformios_property_privacy/collected_data/fitness/collected"></div>

Indicates whether your app collects fitness and exercise data.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatformios_property_privacy/collected_data/fitness/collection_purposes"></div>

[`int`](class_int.md) **privacy/collected_data/fitness/collection_purposes** <div id="class_editorexportplatformios_property_privacy/collected_data/fitness/collection_purposes"></div>

The reasons your app collects fitness and exercise data. See [*Describing data use in privacy manifests*](https://developer.apple.com/documentation/bundleresources/privacy_manifest_files/describing_data_use_in_privacy_manifests).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatformios_property_privacy/collected_data/fitness/linked_to_user"></div>

[`bool`](class_bool.md) **privacy/collected_data/fitness/linked_to_user** <div id="class_editorexportplatformios_property_privacy/collected_data/fitness/linked_to_user"></div>

Indicates whether your app links fitness and exercise data to the user's identity.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatformios_property_privacy/collected_data/fitness/used_for_tracking"></div>

[`bool`](class_bool.md) **privacy/collected_data/fitness/used_for_tracking** <div id="class_editorexportplatformios_property_privacy/collected_data/fitness/used_for_tracking"></div>

Indicates whether your app uses fitness and exercise data for tracking.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatformios_property_privacy/collected_data/gameplay_content/collected"></div>

[`bool`](class_bool.md) **privacy/collected_data/gameplay_content/collected** <div id="class_editorexportplatformios_property_privacy/collected_data/gameplay_content/collected"></div>

Indicates whether your app collects gameplay content.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatformios_property_privacy/collected_data/gameplay_content/collection_purposes"></div>

[`int`](class_int.md) **privacy/collected_data/gameplay_content/collection_purposes** <div id="class_editorexportplatformios_property_privacy/collected_data/gameplay_content/collection_purposes"></div>

The reasons your app collects gameplay content. See [*Describing data use in privacy manifests*](https://developer.apple.com/documentation/bundleresources/privacy_manifest_files/describing_data_use_in_privacy_manifests).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatformios_property_privacy/collected_data/gameplay_content/linked_to_user"></div>

[`bool`](class_bool.md) **privacy/collected_data/gameplay_content/linked_to_user** <div id="class_editorexportplatformios_property_privacy/collected_data/gameplay_content/linked_to_user"></div>

Indicates whether your app links gameplay content to the user's identity.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatformios_property_privacy/collected_data/gameplay_content/used_for_tracking"></div>

[`bool`](class_bool.md) **privacy/collected_data/gameplay_content/used_for_tracking** <div id="class_editorexportplatformios_property_privacy/collected_data/gameplay_content/used_for_tracking"></div>

Indicates whether your app uses gameplay content for tracking.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatformios_property_privacy/collected_data/hands/collected"></div>

[`bool`](class_bool.md) **privacy/collected_data/hands/collected** <div id="class_editorexportplatformios_property_privacy/collected_data/hands/collected"></div>

Indicates whether your app collects user's hand structure and hand movements.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatformios_property_privacy/collected_data/hands/collection_purposes"></div>

[`int`](class_int.md) **privacy/collected_data/hands/collection_purposes** <div id="class_editorexportplatformios_property_privacy/collected_data/hands/collection_purposes"></div>

The reasons your app collects user's hand structure and hand movements. See [*Describing data use in privacy manifests*](https://developer.apple.com/documentation/bundleresources/privacy_manifest_files/describing_data_use_in_privacy_manifests).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatformios_property_privacy/collected_data/hands/linked_to_user"></div>

[`bool`](class_bool.md) **privacy/collected_data/hands/linked_to_user** <div id="class_editorexportplatformios_property_privacy/collected_data/hands/linked_to_user"></div>

Indicates whether your app links user's hand structure and hand movements to the user's identity.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatformios_property_privacy/collected_data/hands/used_for_tracking"></div>

[`bool`](class_bool.md) **privacy/collected_data/hands/used_for_tracking** <div id="class_editorexportplatformios_property_privacy/collected_data/hands/used_for_tracking"></div>

Indicates whether your app uses user's hand structure and hand movements for tracking.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatformios_property_privacy/collected_data/head/collected"></div>

[`bool`](class_bool.md) **privacy/collected_data/head/collected** <div id="class_editorexportplatformios_property_privacy/collected_data/head/collected"></div>

Indicates whether your app collects user's head movement.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatformios_property_privacy/collected_data/head/collection_purposes"></div>

[`int`](class_int.md) **privacy/collected_data/head/collection_purposes** <div id="class_editorexportplatformios_property_privacy/collected_data/head/collection_purposes"></div>

The reasons your app collects user's head movement. See [*Describing data use in privacy manifests*](https://developer.apple.com/documentation/bundleresources/privacy_manifest_files/describing_data_use_in_privacy_manifests).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatformios_property_privacy/collected_data/head/linked_to_user"></div>

[`bool`](class_bool.md) **privacy/collected_data/head/linked_to_user** <div id="class_editorexportplatformios_property_privacy/collected_data/head/linked_to_user"></div>

Indicates whether your app links user's head movement to the user's identity.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatformios_property_privacy/collected_data/head/used_for_tracking"></div>

[`bool`](class_bool.md) **privacy/collected_data/head/used_for_tracking** <div id="class_editorexportplatformios_property_privacy/collected_data/head/used_for_tracking"></div>

Indicates whether your app uses user's head movement for tracking.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatformios_property_privacy/collected_data/health/collected"></div>

[`bool`](class_bool.md) **privacy/collected_data/health/collected** <div id="class_editorexportplatformios_property_privacy/collected_data/health/collected"></div>

Indicates whether your app collects health and medical data.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatformios_property_privacy/collected_data/health/collection_purposes"></div>

[`int`](class_int.md) **privacy/collected_data/health/collection_purposes** <div id="class_editorexportplatformios_property_privacy/collected_data/health/collection_purposes"></div>

The reasons your app collects health and medical data. See [*Describing data use in privacy manifests*](https://developer.apple.com/documentation/bundleresources/privacy_manifest_files/describing_data_use_in_privacy_manifests).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatformios_property_privacy/collected_data/health/linked_to_user"></div>

[`bool`](class_bool.md) **privacy/collected_data/health/linked_to_user** <div id="class_editorexportplatformios_property_privacy/collected_data/health/linked_to_user"></div>

Indicates whether your app links health and medical data to the user's identity.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatformios_property_privacy/collected_data/health/used_for_tracking"></div>

[`bool`](class_bool.md) **privacy/collected_data/health/used_for_tracking** <div id="class_editorexportplatformios_property_privacy/collected_data/health/used_for_tracking"></div>

Indicates whether your app uses health and medical data for tracking.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatformios_property_privacy/collected_data/name/collected"></div>

[`bool`](class_bool.md) **privacy/collected_data/name/collected** <div id="class_editorexportplatformios_property_privacy/collected_data/name/collected"></div>

Indicates whether your app collects user's name.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatformios_property_privacy/collected_data/name/collection_purposes"></div>

[`int`](class_int.md) **privacy/collected_data/name/collection_purposes** <div id="class_editorexportplatformios_property_privacy/collected_data/name/collection_purposes"></div>

The reasons your app collects user's name. See [*Describing data use in privacy manifests*](https://developer.apple.com/documentation/bundleresources/privacy_manifest_files/describing_data_use_in_privacy_manifests).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatformios_property_privacy/collected_data/name/linked_to_user"></div>

[`bool`](class_bool.md) **privacy/collected_data/name/linked_to_user** <div id="class_editorexportplatformios_property_privacy/collected_data/name/linked_to_user"></div>

Indicates whether your app links user's name to the user's identity.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatformios_property_privacy/collected_data/name/used_for_tracking"></div>

[`bool`](class_bool.md) **privacy/collected_data/name/used_for_tracking** <div id="class_editorexportplatformios_property_privacy/collected_data/name/used_for_tracking"></div>

Indicates whether your app uses user's name for tracking.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatformios_property_privacy/collected_data/other_contact_info/collected"></div>

[`bool`](class_bool.md) **privacy/collected_data/other_contact_info/collected** <div id="class_editorexportplatformios_property_privacy/collected_data/other_contact_info/collected"></div>

Indicates whether your app collects any other contact information.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatformios_property_privacy/collected_data/other_contact_info/collection_purposes"></div>

[`int`](class_int.md) **privacy/collected_data/other_contact_info/collection_purposes** <div id="class_editorexportplatformios_property_privacy/collected_data/other_contact_info/collection_purposes"></div>

The reasons your app collects any other contact information. See [*Describing data use in privacy manifests*](https://developer.apple.com/documentation/bundleresources/privacy_manifest_files/describing_data_use_in_privacy_manifests).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatformios_property_privacy/collected_data/other_contact_info/linked_to_user"></div>

[`bool`](class_bool.md) **privacy/collected_data/other_contact_info/linked_to_user** <div id="class_editorexportplatformios_property_privacy/collected_data/other_contact_info/linked_to_user"></div>

Indicates whether your app links any other contact information to the user's identity.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatformios_property_privacy/collected_data/other_contact_info/used_for_tracking"></div>

[`bool`](class_bool.md) **privacy/collected_data/other_contact_info/used_for_tracking** <div id="class_editorexportplatformios_property_privacy/collected_data/other_contact_info/used_for_tracking"></div>

Indicates whether your app uses any other contact information for tracking.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatformios_property_privacy/collected_data/other_data_types/collected"></div>

[`bool`](class_bool.md) **privacy/collected_data/other_data_types/collected** <div id="class_editorexportplatformios_property_privacy/collected_data/other_data_types/collected"></div>

Indicates whether your app collects any other data.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatformios_property_privacy/collected_data/other_data_types/collection_purposes"></div>

[`int`](class_int.md) **privacy/collected_data/other_data_types/collection_purposes** <div id="class_editorexportplatformios_property_privacy/collected_data/other_data_types/collection_purposes"></div>

The reasons your app collects any other data. See [*Describing data use in privacy manifests*](https://developer.apple.com/documentation/bundleresources/privacy_manifest_files/describing_data_use_in_privacy_manifests).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatformios_property_privacy/collected_data/other_data_types/linked_to_user"></div>

[`bool`](class_bool.md) **privacy/collected_data/other_data_types/linked_to_user** <div id="class_editorexportplatformios_property_privacy/collected_data/other_data_types/linked_to_user"></div>

Indicates whether your app links any other data to the user's identity.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatformios_property_privacy/collected_data/other_data_types/used_for_tracking"></div>

[`bool`](class_bool.md) **privacy/collected_data/other_data_types/used_for_tracking** <div id="class_editorexportplatformios_property_privacy/collected_data/other_data_types/used_for_tracking"></div>

Indicates whether your app uses any other data for tracking.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatformios_property_privacy/collected_data/other_diagnostic_data/collected"></div>

[`bool`](class_bool.md) **privacy/collected_data/other_diagnostic_data/collected** <div id="class_editorexportplatformios_property_privacy/collected_data/other_diagnostic_data/collected"></div>

Indicates whether your app collects any other diagnostic data.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatformios_property_privacy/collected_data/other_diagnostic_data/collection_purposes"></div>

[`int`](class_int.md) **privacy/collected_data/other_diagnostic_data/collection_purposes** <div id="class_editorexportplatformios_property_privacy/collected_data/other_diagnostic_data/collection_purposes"></div>

The reasons your app collects any other diagnostic data. See [*Describing data use in privacy manifests*](https://developer.apple.com/documentation/bundleresources/privacy_manifest_files/describing_data_use_in_privacy_manifests).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatformios_property_privacy/collected_data/other_diagnostic_data/linked_to_user"></div>

[`bool`](class_bool.md) **privacy/collected_data/other_diagnostic_data/linked_to_user** <div id="class_editorexportplatformios_property_privacy/collected_data/other_diagnostic_data/linked_to_user"></div>

Indicates whether your app links any other diagnostic data to the user's identity.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatformios_property_privacy/collected_data/other_diagnostic_data/used_for_tracking"></div>

[`bool`](class_bool.md) **privacy/collected_data/other_diagnostic_data/used_for_tracking** <div id="class_editorexportplatformios_property_privacy/collected_data/other_diagnostic_data/used_for_tracking"></div>

Indicates whether your app uses any other diagnostic data for tracking.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatformios_property_privacy/collected_data/other_financial_info/collected"></div>

[`bool`](class_bool.md) **privacy/collected_data/other_financial_info/collected** <div id="class_editorexportplatformios_property_privacy/collected_data/other_financial_info/collected"></div>

Indicates whether your app collects any other financial information.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatformios_property_privacy/collected_data/other_financial_info/collection_purposes"></div>

[`int`](class_int.md) **privacy/collected_data/other_financial_info/collection_purposes** <div id="class_editorexportplatformios_property_privacy/collected_data/other_financial_info/collection_purposes"></div>

The reasons your app collects any other financial information. See [*Describing data use in privacy manifests*](https://developer.apple.com/documentation/bundleresources/privacy_manifest_files/describing_data_use_in_privacy_manifests).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatformios_property_privacy/collected_data/other_financial_info/linked_to_user"></div>

[`bool`](class_bool.md) **privacy/collected_data/other_financial_info/linked_to_user** <div id="class_editorexportplatformios_property_privacy/collected_data/other_financial_info/linked_to_user"></div>

Indicates whether your app links any other financial information to the user's identity.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatformios_property_privacy/collected_data/other_financial_info/used_for_tracking"></div>

[`bool`](class_bool.md) **privacy/collected_data/other_financial_info/used_for_tracking** <div id="class_editorexportplatformios_property_privacy/collected_data/other_financial_info/used_for_tracking"></div>

Indicates whether your app uses any other financial information for tracking.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatformios_property_privacy/collected_data/other_usage_data/collected"></div>

[`bool`](class_bool.md) **privacy/collected_data/other_usage_data/collected** <div id="class_editorexportplatformios_property_privacy/collected_data/other_usage_data/collected"></div>

Indicates whether your app collects any other usage data.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatformios_property_privacy/collected_data/other_usage_data/collection_purposes"></div>

[`int`](class_int.md) **privacy/collected_data/other_usage_data/collection_purposes** <div id="class_editorexportplatformios_property_privacy/collected_data/other_usage_data/collection_purposes"></div>

The reasons your app collects any other usage data. See [*Describing data use in privacy manifests*](https://developer.apple.com/documentation/bundleresources/privacy_manifest_files/describing_data_use_in_privacy_manifests).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatformios_property_privacy/collected_data/other_usage_data/linked_to_user"></div>

[`bool`](class_bool.md) **privacy/collected_data/other_usage_data/linked_to_user** <div id="class_editorexportplatformios_property_privacy/collected_data/other_usage_data/linked_to_user"></div>

Indicates whether your app links any other usage data to the user's identity.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatformios_property_privacy/collected_data/other_usage_data/used_for_tracking"></div>

[`bool`](class_bool.md) **privacy/collected_data/other_usage_data/used_for_tracking** <div id="class_editorexportplatformios_property_privacy/collected_data/other_usage_data/used_for_tracking"></div>

Indicates whether your app uses any other usage data for tracking.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatformios_property_privacy/collected_data/other_user_content/collected"></div>

[`bool`](class_bool.md) **privacy/collected_data/other_user_content/collected** <div id="class_editorexportplatformios_property_privacy/collected_data/other_user_content/collected"></div>

Indicates whether your app collects any other user generated content.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatformios_property_privacy/collected_data/other_user_content/collection_purposes"></div>

[`int`](class_int.md) **privacy/collected_data/other_user_content/collection_purposes** <div id="class_editorexportplatformios_property_privacy/collected_data/other_user_content/collection_purposes"></div>

The reasons your app collects any other user generated content. See [*Describing data use in privacy manifests*](https://developer.apple.com/documentation/bundleresources/privacy_manifest_files/describing_data_use_in_privacy_manifests).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatformios_property_privacy/collected_data/other_user_content/linked_to_user"></div>

[`bool`](class_bool.md) **privacy/collected_data/other_user_content/linked_to_user** <div id="class_editorexportplatformios_property_privacy/collected_data/other_user_content/linked_to_user"></div>

Indicates whether your app links any other user generated content to the user's identity.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatformios_property_privacy/collected_data/other_user_content/used_for_tracking"></div>

[`bool`](class_bool.md) **privacy/collected_data/other_user_content/used_for_tracking** <div id="class_editorexportplatformios_property_privacy/collected_data/other_user_content/used_for_tracking"></div>

Indicates whether your app uses any other user generated content for tracking.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatformios_property_privacy/collected_data/payment_info/collected"></div>

[`bool`](class_bool.md) **privacy/collected_data/payment_info/collected** <div id="class_editorexportplatformios_property_privacy/collected_data/payment_info/collected"></div>

Indicates whether your app collects payment information.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatformios_property_privacy/collected_data/payment_info/collection_purposes"></div>

[`int`](class_int.md) **privacy/collected_data/payment_info/collection_purposes** <div id="class_editorexportplatformios_property_privacy/collected_data/payment_info/collection_purposes"></div>

The reasons your app collects payment information. See [*Describing data use in privacy manifests*](https://developer.apple.com/documentation/bundleresources/privacy_manifest_files/describing_data_use_in_privacy_manifests).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatformios_property_privacy/collected_data/payment_info/linked_to_user"></div>

[`bool`](class_bool.md) **privacy/collected_data/payment_info/linked_to_user** <div id="class_editorexportplatformios_property_privacy/collected_data/payment_info/linked_to_user"></div>

Indicates whether your app links payment information to the user's identity.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatformios_property_privacy/collected_data/payment_info/used_for_tracking"></div>

[`bool`](class_bool.md) **privacy/collected_data/payment_info/used_for_tracking** <div id="class_editorexportplatformios_property_privacy/collected_data/payment_info/used_for_tracking"></div>

Indicates whether your app uses payment information for tracking.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatformios_property_privacy/collected_data/performance_data/collected"></div>

[`bool`](class_bool.md) **privacy/collected_data/performance_data/collected** <div id="class_editorexportplatformios_property_privacy/collected_data/performance_data/collected"></div>

Indicates whether your app collects performance data.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatformios_property_privacy/collected_data/performance_data/collection_purposes"></div>

[`int`](class_int.md) **privacy/collected_data/performance_data/collection_purposes** <div id="class_editorexportplatformios_property_privacy/collected_data/performance_data/collection_purposes"></div>

The reasons your app collects performance data. See [*Describing data use in privacy manifests*](https://developer.apple.com/documentation/bundleresources/privacy_manifest_files/describing_data_use_in_privacy_manifests).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatformios_property_privacy/collected_data/performance_data/linked_to_user"></div>

[`bool`](class_bool.md) **privacy/collected_data/performance_data/linked_to_user** <div id="class_editorexportplatformios_property_privacy/collected_data/performance_data/linked_to_user"></div>

Indicates whether your app links performance data to the user's identity.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatformios_property_privacy/collected_data/performance_data/used_for_tracking"></div>

[`bool`](class_bool.md) **privacy/collected_data/performance_data/used_for_tracking** <div id="class_editorexportplatformios_property_privacy/collected_data/performance_data/used_for_tracking"></div>

Indicates whether your app uses performance data for tracking.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatformios_property_privacy/collected_data/phone_number/collected"></div>

[`bool`](class_bool.md) **privacy/collected_data/phone_number/collected** <div id="class_editorexportplatformios_property_privacy/collected_data/phone_number/collected"></div>

Indicates whether your app collects phone number.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatformios_property_privacy/collected_data/phone_number/collection_purposes"></div>

[`int`](class_int.md) **privacy/collected_data/phone_number/collection_purposes** <div id="class_editorexportplatformios_property_privacy/collected_data/phone_number/collection_purposes"></div>

The reasons your app collects phone number. See [*Describing data use in privacy manifests*](https://developer.apple.com/documentation/bundleresources/privacy_manifest_files/describing_data_use_in_privacy_manifests).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatformios_property_privacy/collected_data/phone_number/linked_to_user"></div>

[`bool`](class_bool.md) **privacy/collected_data/phone_number/linked_to_user** <div id="class_editorexportplatformios_property_privacy/collected_data/phone_number/linked_to_user"></div>

Indicates whether your app links phone number to the user's identity.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatformios_property_privacy/collected_data/phone_number/used_for_tracking"></div>

[`bool`](class_bool.md) **privacy/collected_data/phone_number/used_for_tracking** <div id="class_editorexportplatformios_property_privacy/collected_data/phone_number/used_for_tracking"></div>

Indicates whether your app uses phone number for tracking.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatformios_property_privacy/collected_data/photos_or_videos/collected"></div>

[`bool`](class_bool.md) **privacy/collected_data/photos_or_videos/collected** <div id="class_editorexportplatformios_property_privacy/collected_data/photos_or_videos/collected"></div>

Indicates whether your app collects photos or videos.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatformios_property_privacy/collected_data/photos_or_videos/collection_purposes"></div>

[`int`](class_int.md) **privacy/collected_data/photos_or_videos/collection_purposes** <div id="class_editorexportplatformios_property_privacy/collected_data/photos_or_videos/collection_purposes"></div>

The reasons your app collects photos or videos. See [*Describing data use in privacy manifests*](https://developer.apple.com/documentation/bundleresources/privacy_manifest_files/describing_data_use_in_privacy_manifests).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatformios_property_privacy/collected_data/photos_or_videos/linked_to_user"></div>

[`bool`](class_bool.md) **privacy/collected_data/photos_or_videos/linked_to_user** <div id="class_editorexportplatformios_property_privacy/collected_data/photos_or_videos/linked_to_user"></div>

Indicates whether your app links photos or videos to the user's identity.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatformios_property_privacy/collected_data/photos_or_videos/used_for_tracking"></div>

[`bool`](class_bool.md) **privacy/collected_data/photos_or_videos/used_for_tracking** <div id="class_editorexportplatformios_property_privacy/collected_data/photos_or_videos/used_for_tracking"></div>

Indicates whether your app uses photos or videos for tracking.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatformios_property_privacy/collected_data/physical_address/collected"></div>

[`bool`](class_bool.md) **privacy/collected_data/physical_address/collected** <div id="class_editorexportplatformios_property_privacy/collected_data/physical_address/collected"></div>

Indicates whether your app collects physical address.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatformios_property_privacy/collected_data/physical_address/collection_purposes"></div>

[`int`](class_int.md) **privacy/collected_data/physical_address/collection_purposes** <div id="class_editorexportplatformios_property_privacy/collected_data/physical_address/collection_purposes"></div>

The reasons your app collects physical address. See [*Describing data use in privacy manifests*](https://developer.apple.com/documentation/bundleresources/privacy_manifest_files/describing_data_use_in_privacy_manifests).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatformios_property_privacy/collected_data/physical_address/linked_to_user"></div>

[`bool`](class_bool.md) **privacy/collected_data/physical_address/linked_to_user** <div id="class_editorexportplatformios_property_privacy/collected_data/physical_address/linked_to_user"></div>

Indicates whether your app links physical address to the user's identity.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatformios_property_privacy/collected_data/physical_address/used_for_tracking"></div>

[`bool`](class_bool.md) **privacy/collected_data/physical_address/used_for_tracking** <div id="class_editorexportplatformios_property_privacy/collected_data/physical_address/used_for_tracking"></div>

Indicates whether your app uses physical address for tracking.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatformios_property_privacy/collected_data/precise_location/collected"></div>

[`bool`](class_bool.md) **privacy/collected_data/precise_location/collected** <div id="class_editorexportplatformios_property_privacy/collected_data/precise_location/collected"></div>

Indicates whether your app collects precise location data.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatformios_property_privacy/collected_data/precise_location/collection_purposes"></div>

[`int`](class_int.md) **privacy/collected_data/precise_location/collection_purposes** <div id="class_editorexportplatformios_property_privacy/collected_data/precise_location/collection_purposes"></div>

The reasons your app collects precise location data. See [*Describing data use in privacy manifests*](https://developer.apple.com/documentation/bundleresources/privacy_manifest_files/describing_data_use_in_privacy_manifests).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatformios_property_privacy/collected_data/precise_location/linked_to_user"></div>

[`bool`](class_bool.md) **privacy/collected_data/precise_location/linked_to_user** <div id="class_editorexportplatformios_property_privacy/collected_data/precise_location/linked_to_user"></div>

Indicates whether your app links precise location data to the user's identity.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatformios_property_privacy/collected_data/precise_location/used_for_tracking"></div>

[`bool`](class_bool.md) **privacy/collected_data/precise_location/used_for_tracking** <div id="class_editorexportplatformios_property_privacy/collected_data/precise_location/used_for_tracking"></div>

Indicates whether your app uses precise location data for tracking.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatformios_property_privacy/collected_data/product_interaction/collected"></div>

[`bool`](class_bool.md) **privacy/collected_data/product_interaction/collected** <div id="class_editorexportplatformios_property_privacy/collected_data/product_interaction/collected"></div>

Indicates whether your app collects product interaction data.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatformios_property_privacy/collected_data/product_interaction/collection_purposes"></div>

[`int`](class_int.md) **privacy/collected_data/product_interaction/collection_purposes** <div id="class_editorexportplatformios_property_privacy/collected_data/product_interaction/collection_purposes"></div>

The reasons your app collects product interaction data. See [*Describing data use in privacy manifests*](https://developer.apple.com/documentation/bundleresources/privacy_manifest_files/describing_data_use_in_privacy_manifests).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatformios_property_privacy/collected_data/product_interaction/linked_to_user"></div>

[`bool`](class_bool.md) **privacy/collected_data/product_interaction/linked_to_user** <div id="class_editorexportplatformios_property_privacy/collected_data/product_interaction/linked_to_user"></div>

Indicates whether your app links product interaction data to the user's identity.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatformios_property_privacy/collected_data/product_interaction/used_for_tracking"></div>

[`bool`](class_bool.md) **privacy/collected_data/product_interaction/used_for_tracking** <div id="class_editorexportplatformios_property_privacy/collected_data/product_interaction/used_for_tracking"></div>

Indicates whether your app uses product interaction data for tracking.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatformios_property_privacy/collected_data/purchase_history/collected"></div>

[`bool`](class_bool.md) **privacy/collected_data/purchase_history/collected** <div id="class_editorexportplatformios_property_privacy/collected_data/purchase_history/collected"></div>

Indicates whether your app collects purchase history.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatformios_property_privacy/collected_data/purchase_history/collection_purposes"></div>

[`int`](class_int.md) **privacy/collected_data/purchase_history/collection_purposes** <div id="class_editorexportplatformios_property_privacy/collected_data/purchase_history/collection_purposes"></div>

The reasons your app collects purchase history. See [*Describing data use in privacy manifests*](https://developer.apple.com/documentation/bundleresources/privacy_manifest_files/describing_data_use_in_privacy_manifests).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatformios_property_privacy/collected_data/purchase_history/linked_to_user"></div>

[`bool`](class_bool.md) **privacy/collected_data/purchase_history/linked_to_user** <div id="class_editorexportplatformios_property_privacy/collected_data/purchase_history/linked_to_user"></div>

Indicates whether your app links purchase history to the user's identity.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatformios_property_privacy/collected_data/purchase_history/used_for_tracking"></div>

[`bool`](class_bool.md) **privacy/collected_data/purchase_history/used_for_tracking** <div id="class_editorexportplatformios_property_privacy/collected_data/purchase_history/used_for_tracking"></div>

Indicates whether your app uses purchase history for tracking.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatformios_property_privacy/collected_data/search_hhistory/collected"></div>

[`bool`](class_bool.md) **privacy/collected_data/search_hhistory/collected** <div id="class_editorexportplatformios_property_privacy/collected_data/search_hhistory/collected"></div>

Indicates whether your app collects search history.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatformios_property_privacy/collected_data/search_hhistory/collection_purposes"></div>

[`int`](class_int.md) **privacy/collected_data/search_hhistory/collection_purposes** <div id="class_editorexportplatformios_property_privacy/collected_data/search_hhistory/collection_purposes"></div>

The reasons your app collects search history. See [*Describing data use in privacy manifests*](https://developer.apple.com/documentation/bundleresources/privacy_manifest_files/describing_data_use_in_privacy_manifests).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatformios_property_privacy/collected_data/search_hhistory/linked_to_user"></div>

[`bool`](class_bool.md) **privacy/collected_data/search_hhistory/linked_to_user** <div id="class_editorexportplatformios_property_privacy/collected_data/search_hhistory/linked_to_user"></div>

Indicates whether your app links search history to the user's identity.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatformios_property_privacy/collected_data/search_hhistory/used_for_tracking"></div>

[`bool`](class_bool.md) **privacy/collected_data/search_hhistory/used_for_tracking** <div id="class_editorexportplatformios_property_privacy/collected_data/search_hhistory/used_for_tracking"></div>

Indicates whether your app uses search history for tracking.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatformios_property_privacy/collected_data/sensitive_info/collected"></div>

[`bool`](class_bool.md) **privacy/collected_data/sensitive_info/collected** <div id="class_editorexportplatformios_property_privacy/collected_data/sensitive_info/collected"></div>

Indicates whether your app collects sensitive user information.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatformios_property_privacy/collected_data/sensitive_info/collection_purposes"></div>

[`int`](class_int.md) **privacy/collected_data/sensitive_info/collection_purposes** <div id="class_editorexportplatformios_property_privacy/collected_data/sensitive_info/collection_purposes"></div>

The reasons your app collects sensitive user information. See [*Describing data use in privacy manifests*](https://developer.apple.com/documentation/bundleresources/privacy_manifest_files/describing_data_use_in_privacy_manifests).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatformios_property_privacy/collected_data/sensitive_info/linked_to_user"></div>

[`bool`](class_bool.md) **privacy/collected_data/sensitive_info/linked_to_user** <div id="class_editorexportplatformios_property_privacy/collected_data/sensitive_info/linked_to_user"></div>

Indicates whether your app links sensitive user information to the user's identity.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatformios_property_privacy/collected_data/sensitive_info/used_for_tracking"></div>

[`bool`](class_bool.md) **privacy/collected_data/sensitive_info/used_for_tracking** <div id="class_editorexportplatformios_property_privacy/collected_data/sensitive_info/used_for_tracking"></div>

Indicates whether your app uses sensitive user information for tracking.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatformios_property_privacy/collected_data/user_id/collected"></div>

[`bool`](class_bool.md) **privacy/collected_data/user_id/collected** <div id="class_editorexportplatformios_property_privacy/collected_data/user_id/collected"></div>

Indicates whether your app collects user IDs.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatformios_property_privacy/collected_data/user_id/collection_purposes"></div>

[`int`](class_int.md) **privacy/collected_data/user_id/collection_purposes** <div id="class_editorexportplatformios_property_privacy/collected_data/user_id/collection_purposes"></div>

The reasons your app collects user IDs. See [*Describing data use in privacy manifests*](https://developer.apple.com/documentation/bundleresources/privacy_manifest_files/describing_data_use_in_privacy_manifests).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatformios_property_privacy/collected_data/user_id/linked_to_user"></div>

[`bool`](class_bool.md) **privacy/collected_data/user_id/linked_to_user** <div id="class_editorexportplatformios_property_privacy/collected_data/user_id/linked_to_user"></div>

Indicates whether your app links user IDs to the user's identity.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatformios_property_privacy/collected_data/user_id/used_for_tracking"></div>

[`bool`](class_bool.md) **privacy/collected_data/user_id/used_for_tracking** <div id="class_editorexportplatformios_property_privacy/collected_data/user_id/used_for_tracking"></div>

Indicates whether your app uses user IDs for tracking.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatformios_property_privacy/disk_space_access_reasons"></div>

[`int`](class_int.md) **privacy/disk_space_access_reasons** <div id="class_editorexportplatformios_property_privacy/disk_space_access_reasons"></div>

The reasons your app use free disk space API. See [*Describing use of required reason API*](https://developer.apple.com/documentation/bundleresources/privacy_manifest_files/describing_use_of_required_reason_api).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatformios_property_privacy/file_timestamp_access_reasons"></div>

[`int`](class_int.md) **privacy/file_timestamp_access_reasons** <div id="class_editorexportplatformios_property_privacy/file_timestamp_access_reasons"></div>

The reasons your app use file timestamp/metadata API. See [*Describing use of required reason API*](https://developer.apple.com/documentation/bundleresources/privacy_manifest_files/describing_use_of_required_reason_api).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatformios_property_privacy/microphone_usage_description"></div>

[`String`](class_string.md) **privacy/microphone_usage_description** <div id="class_editorexportplatformios_property_privacy/microphone_usage_description"></div>

A message displayed when requesting access to the device's microphone (in English).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatformios_property_privacy/microphone_usage_description_localized"></div>

[`Dictionary`](class_dictionary.md) **privacy/microphone_usage_description_localized** <div id="class_editorexportplatformios_property_privacy/microphone_usage_description_localized"></div>

A message displayed when requesting access to the device's microphone (localized).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatformios_property_privacy/photolibrary_usage_description"></div>

[`String`](class_string.md) **privacy/photolibrary_usage_description** <div id="class_editorexportplatformios_property_privacy/photolibrary_usage_description"></div>

A message displayed when requesting access to the user's photo library (in English).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatformios_property_privacy/photolibrary_usage_description_localized"></div>

[`Dictionary`](class_dictionary.md) **privacy/photolibrary_usage_description_localized** <div id="class_editorexportplatformios_property_privacy/photolibrary_usage_description_localized"></div>

A message displayed when requesting access to the user's photo library (localized).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatformios_property_privacy/system_boot_time_access_reasons"></div>

[`int`](class_int.md) **privacy/system_boot_time_access_reasons** <div id="class_editorexportplatformios_property_privacy/system_boot_time_access_reasons"></div>

The reasons your app use system boot time / absolute time API. See [*Describing use of required reason API*](https://developer.apple.com/documentation/bundleresources/privacy_manifest_files/describing_use_of_required_reason_api).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatformios_property_privacy/tracking_domains"></div>

[`PackedStringArray`](class_packedstringarray.md) **privacy/tracking_domains** <div id="class_editorexportplatformios_property_privacy/tracking_domains"></div>

The list of internet domains your app connects to that engage in tracking. See [*Privacy manifest files*](https://developer.apple.com/documentation/bundleresources/privacy_manifest_files).

**Note:** The returned array is *copied* and any changes to it will not update the original property value. See [`PackedStringArray`](class_packedstringarray.md) for more details.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatformios_property_privacy/tracking_enabled"></div>

[`bool`](class_bool.md) **privacy/tracking_enabled** <div id="class_editorexportplatformios_property_privacy/tracking_enabled"></div>

Indicates whether your app uses data for tracking. See [*Privacy manifest files*](https://developer.apple.com/documentation/bundleresources/privacy_manifest_files).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatformios_property_privacy/user_defaults_access_reasons"></div>

[`int`](class_int.md) **privacy/user_defaults_access_reasons** <div id="class_editorexportplatformios_property_privacy/user_defaults_access_reasons"></div>

The reasons your app use user defaults API. See [*Describing use of required reason API*](https://developer.apple.com/documentation/bundleresources/privacy_manifest_files/describing_use_of_required_reason_api).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatformios_property_storyboard/custom_bg_color"></div>

[`Color`](class_color.md) **storyboard/custom_bg_color** <div id="class_editorexportplatformios_property_storyboard/custom_bg_color"></div>

A custom background color of the storyboard launch screen.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatformios_property_storyboard/custom_image@2x"></div>

[`String`](class_string.md) **storyboard/custom_image@2x** <div id="class_editorexportplatformios_property_storyboard/custom_image@2x"></div>

Application launch screen image file (2x DPI). If left empty, it will fallback to [`ProjectSettings.application/boot_splash/image`](class_projectsettings.md#class_projectsettings_property_application/boot_splash/image).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatformios_property_storyboard/custom_image@3x"></div>

[`String`](class_string.md) **storyboard/custom_image@3x** <div id="class_editorexportplatformios_property_storyboard/custom_image@3x"></div>

Application launch screen image file (3x DPI). If left empty, it will fallback to [`ProjectSettings.application/boot_splash/image`](class_projectsettings.md#class_projectsettings_property_application/boot_splash/image).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatformios_property_storyboard/image_scale_mode"></div>

[`int`](class_int.md) **storyboard/image_scale_mode** <div id="class_editorexportplatformios_property_storyboard/image_scale_mode"></div>

Launch screen image scaling mode.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatformios_property_storyboard/use_custom_bg_color"></div>

[`bool`](class_bool.md) **storyboard/use_custom_bg_color** <div id="class_editorexportplatformios_property_storyboard/use_custom_bg_color"></div>

If `true`, [`storyboard/custom_bg_color`](class_editorexportplatformios.md#class_editorexportplatformios_property_storyboard/custom_bg_color) is used as a launch screen background color, otherwise `application/boot_splash/bg_color` project setting is used.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatformios_property_user_data/accessible_from_files_app"></div>

[`bool`](class_bool.md) **user_data/accessible_from_files_app** <div id="class_editorexportplatformios_property_user_data/accessible_from_files_app"></div>

If `true`, the app "Documents" folder can be accessed via "Files" app. See [*LSSupportsOpeningDocumentsInPlace*](https://developer.apple.com/documentation/bundleresources/information_property_list/lssupportsopeningdocumentsinplace).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatformios_property_user_data/accessible_from_itunes_sharing"></div>

[`bool`](class_bool.md) **user_data/accessible_from_itunes_sharing** <div id="class_editorexportplatformios_property_user_data/accessible_from_itunes_sharing"></div>

If `true`, the app "Documents" folder can be accessed via iTunes file sharing. See [*UIFileSharingEnabled*](https://developer.apple.com/documentation/bundleresources/information_property_list/uifilesharingenabled).

[^virtual]: 本方法通常需要用户覆盖才能生效。
[^const]: 本方法无副作用，不会修改该实例的任何成员变量。
[^vararg]: 本方法除了能接受在此处描述的参数外，还能够继续接受任意数量的参数。
[^constructor]: 本方法用于构造某个类型。
[^static]: 调用本方法无需实例，可直接使用类名进行调用。
[^operator]: 本方法描述的是使用本类型作为左操作数的有效运算符。
[^bitfield]: 这个值是由下列位标志构成位掩码的整数。
[^void]: 无返回值。
