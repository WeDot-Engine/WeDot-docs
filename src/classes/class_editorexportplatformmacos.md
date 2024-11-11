<!-- ⚠ 请勿编辑本文件 ⚠ -->
<!-- 本文档使用脚本从 WeDot 引擎源码仓库生成。 -->
<!-- 生成脚本：https://github.com/WeDot-Engine/WeDot/tree/master/doc/tools/make_md.py； -->
<!-- 原文件：https://github.com/WeDot-Engine/WeDot/tree/master/platform/macos/doc_classes/EditorExportPlatformMacOS.xml。 -->

<div id="_class_editorexportplatformmacos"></div>

# EditorExportPlatformMacOS

**继承：** [`EditorExportPlatform`](class_editorexportplatform.md) **<** [`RefCounted`](class_refcounted.md) **<** [`Object`](class_object.md)

Exporter for macOS.

## 属性

|||
|:-:|:--|
| [`String`](class_string.md)                       | [`application/additional_plist_content`](class_editorexportplatformmacos.md#class_editorexportplatformmacos_property_application/additional_plist_content)                                                             |
| [`String`](class_string.md)                       | [`application/app_category`](class_editorexportplatformmacos.md#class_editorexportplatformmacos_property_application/app_category)                                                                                     |
| [`String`](class_string.md)                       | [`application/bundle_identifier`](class_editorexportplatformmacos.md#class_editorexportplatformmacos_property_application/bundle_identifier)                                                                           |
| [`String`](class_string.md)                       | [`application/copyright`](class_editorexportplatformmacos.md#class_editorexportplatformmacos_property_application/copyright)                                                                                           |
| [`Dictionary`](class_dictionary.md)               | [`application/copyright_localized`](class_editorexportplatformmacos.md#class_editorexportplatformmacos_property_application/copyright_localized)                                                                       |
| [`int`](class_int.md)                             | [`application/export_angle`](class_editorexportplatformmacos.md#class_editorexportplatformmacos_property_application/export_angle)                                                                                     |
| [`String`](class_string.md)                       | [`application/icon`](class_editorexportplatformmacos.md#class_editorexportplatformmacos_property_application/icon)                                                                                                     |
| [`int`](class_int.md)                             | [`application/icon_interpolation`](class_editorexportplatformmacos.md#class_editorexportplatformmacos_property_application/icon_interpolation)                                                                         |
| [`String`](class_string.md)                       | [`application/min_macos_version_arm64`](class_editorexportplatformmacos.md#class_editorexportplatformmacos_property_application/min_macos_version_arm64)                                                               |
| [`String`](class_string.md)                       | [`application/min_macos_version_x86_64`](class_editorexportplatformmacos.md#class_editorexportplatformmacos_property_application/min_macos_version_x86_64)                                                             |
| [`String`](class_string.md)                       | [`application/short_version`](class_editorexportplatformmacos.md#class_editorexportplatformmacos_property_application/short_version)                                                                                   |
| [`String`](class_string.md)                       | [`application/signature`](class_editorexportplatformmacos.md#class_editorexportplatformmacos_property_application/signature)                                                                                           |
| [`String`](class_string.md)                       | [`application/version`](class_editorexportplatformmacos.md#class_editorexportplatformmacos_property_application/version)                                                                                               |
| [`String`](class_string.md)                       | [`binary_format/architecture`](class_editorexportplatformmacos.md#class_editorexportplatformmacos_property_binary_format/architecture)                                                                                 |
| [`String`](class_string.md)                       | [`codesign/apple_team_id`](class_editorexportplatformmacos.md#class_editorexportplatformmacos_property_codesign/apple_team_id)                                                                                         |
| [`String`](class_string.md)                       | [`codesign/certificate_file`](class_editorexportplatformmacos.md#class_editorexportplatformmacos_property_codesign/certificate_file)                                                                                   |
| [`String`](class_string.md)                       | [`codesign/certificate_password`](class_editorexportplatformmacos.md#class_editorexportplatformmacos_property_codesign/certificate_password)                                                                           |
| [`int`](class_int.md)                             | [`codesign/codesign`](class_editorexportplatformmacos.md#class_editorexportplatformmacos_property_codesign/codesign)                                                                                                   |
| [`PackedStringArray`](class_packedstringarray.md) | [`codesign/custom_options`](class_editorexportplatformmacos.md#class_editorexportplatformmacos_property_codesign/custom_options)                                                                                       |
| [`String`](class_string.md)                       | [`codesign/entitlements/additional`](class_editorexportplatformmacos.md#class_editorexportplatformmacos_property_codesign/entitlements/additional)                                                                     |
| [`bool`](class_bool.md)                           | [`codesign/entitlements/address_book`](class_editorexportplatformmacos.md#class_editorexportplatformmacos_property_codesign/entitlements/address_book)                                                                 |
| [`bool`](class_bool.md)                           | [`codesign/entitlements/allow_dyld_environment_variables`](class_editorexportplatformmacos.md#class_editorexportplatformmacos_property_codesign/entitlements/allow_dyld_environment_variables)                         |
| [`bool`](class_bool.md)                           | [`codesign/entitlements/allow_jit_code_execution`](class_editorexportplatformmacos.md#class_editorexportplatformmacos_property_codesign/entitlements/allow_jit_code_execution)                                         |
| [`bool`](class_bool.md)                           | [`codesign/entitlements/allow_unsigned_executable_memory`](class_editorexportplatformmacos.md#class_editorexportplatformmacos_property_codesign/entitlements/allow_unsigned_executable_memory)                         |
| [`bool`](class_bool.md)                           | [`codesign/entitlements/app_sandbox/device_bluetooth`](class_editorexportplatformmacos.md#class_editorexportplatformmacos_property_codesign/entitlements/app_sandbox/device_bluetooth)                                 |
| [`bool`](class_bool.md)                           | [`codesign/entitlements/app_sandbox/device_usb`](class_editorexportplatformmacos.md#class_editorexportplatformmacos_property_codesign/entitlements/app_sandbox/device_usb)                                             |
| [`bool`](class_bool.md)                           | [`codesign/entitlements/app_sandbox/enabled`](class_editorexportplatformmacos.md#class_editorexportplatformmacos_property_codesign/entitlements/app_sandbox/enabled)                                                   |
| [`int`](class_int.md)                             | [`codesign/entitlements/app_sandbox/files_downloads`](class_editorexportplatformmacos.md#class_editorexportplatformmacos_property_codesign/entitlements/app_sandbox/files_downloads)                                   |
| [`int`](class_int.md)                             | [`codesign/entitlements/app_sandbox/files_movies`](class_editorexportplatformmacos.md#class_editorexportplatformmacos_property_codesign/entitlements/app_sandbox/files_movies)                                         |
| [`int`](class_int.md)                             | [`codesign/entitlements/app_sandbox/files_music`](class_editorexportplatformmacos.md#class_editorexportplatformmacos_property_codesign/entitlements/app_sandbox/files_music)                                           |
| [`int`](class_int.md)                             | [`codesign/entitlements/app_sandbox/files_pictures`](class_editorexportplatformmacos.md#class_editorexportplatformmacos_property_codesign/entitlements/app_sandbox/files_pictures)                                     |
| [`int`](class_int.md)                             | [`codesign/entitlements/app_sandbox/files_user_selected`](class_editorexportplatformmacos.md#class_editorexportplatformmacos_property_codesign/entitlements/app_sandbox/files_user_selected)                           |
| [`Array`](class_array.md)                         | [`codesign/entitlements/app_sandbox/helper_executables`](class_editorexportplatformmacos.md#class_editorexportplatformmacos_property_codesign/entitlements/app_sandbox/helper_executables)                             |
| [`bool`](class_bool.md)                           | [`codesign/entitlements/app_sandbox/network_client`](class_editorexportplatformmacos.md#class_editorexportplatformmacos_property_codesign/entitlements/app_sandbox/network_client)                                     |
| [`bool`](class_bool.md)                           | [`codesign/entitlements/app_sandbox/network_server`](class_editorexportplatformmacos.md#class_editorexportplatformmacos_property_codesign/entitlements/app_sandbox/network_server)                                     |
| [`bool`](class_bool.md)                           | [`codesign/entitlements/apple_events`](class_editorexportplatformmacos.md#class_editorexportplatformmacos_property_codesign/entitlements/apple_events)                                                                 |
| [`bool`](class_bool.md)                           | [`codesign/entitlements/audio_input`](class_editorexportplatformmacos.md#class_editorexportplatformmacos_property_codesign/entitlements/audio_input)                                                                   |
| [`bool`](class_bool.md)                           | [`codesign/entitlements/calendars`](class_editorexportplatformmacos.md#class_editorexportplatformmacos_property_codesign/entitlements/calendars)                                                                       |
| [`bool`](class_bool.md)                           | [`codesign/entitlements/camera`](class_editorexportplatformmacos.md#class_editorexportplatformmacos_property_codesign/entitlements/camera)                                                                             |
| [`String`](class_string.md)                       | [`codesign/entitlements/custom_file`](class_editorexportplatformmacos.md#class_editorexportplatformmacos_property_codesign/entitlements/custom_file)                                                                   |
| [`bool`](class_bool.md)                           | [`codesign/entitlements/debugging`](class_editorexportplatformmacos.md#class_editorexportplatformmacos_property_codesign/entitlements/debugging)                                                                       |
| [`bool`](class_bool.md)                           | [`codesign/entitlements/disable_library_validation`](class_editorexportplatformmacos.md#class_editorexportplatformmacos_property_codesign/entitlements/disable_library_validation)                                     |
| [`bool`](class_bool.md)                           | [`codesign/entitlements/location`](class_editorexportplatformmacos.md#class_editorexportplatformmacos_property_codesign/entitlements/location)                                                                         |
| [`bool`](class_bool.md)                           | [`codesign/entitlements/photos_library`](class_editorexportplatformmacos.md#class_editorexportplatformmacos_property_codesign/entitlements/photos_library)                                                             |
| [`String`](class_string.md)                       | [`codesign/identity`](class_editorexportplatformmacos.md#class_editorexportplatformmacos_property_codesign/identity)                                                                                                   |
| [`String`](class_string.md)                       | [`codesign/installer_identity`](class_editorexportplatformmacos.md#class_editorexportplatformmacos_property_codesign/installer_identity)                                                                               |
| [`String`](class_string.md)                       | [`codesign/provisioning_profile`](class_editorexportplatformmacos.md#class_editorexportplatformmacos_property_codesign/provisioning_profile)                                                                           |
| [`String`](class_string.md)                       | [`custom_template/debug`](class_editorexportplatformmacos.md#class_editorexportplatformmacos_property_custom_template/debug)                                                                                           |
| [`String`](class_string.md)                       | [`custom_template/release`](class_editorexportplatformmacos.md#class_editorexportplatformmacos_property_custom_template/release)                                                                                       |
| [`int`](class_int.md)                             | [`debug/export_console_wrapper`](class_editorexportplatformmacos.md#class_editorexportplatformmacos_property_debug/export_console_wrapper)                                                                             |
| [`bool`](class_bool.md)                           | [`display/high_res`](class_editorexportplatformmacos.md#class_editorexportplatformmacos_property_display/high_res)                                                                                                     |
| [`int`](class_int.md)                             | [`export/distribution_type`](class_editorexportplatformmacos.md#class_editorexportplatformmacos_property_export/distribution_type)                                                                                     |
| [`String`](class_string.md)                       | [`notarization/api_key`](class_editorexportplatformmacos.md#class_editorexportplatformmacos_property_notarization/api_key)                                                                                             |
| [`String`](class_string.md)                       | [`notarization/api_key_id`](class_editorexportplatformmacos.md#class_editorexportplatformmacos_property_notarization/api_key_id)                                                                                       |
| [`String`](class_string.md)                       | [`notarization/api_uuid`](class_editorexportplatformmacos.md#class_editorexportplatformmacos_property_notarization/api_uuid)                                                                                           |
| [`String`](class_string.md)                       | [`notarization/apple_id_name`](class_editorexportplatformmacos.md#class_editorexportplatformmacos_property_notarization/apple_id_name)                                                                                 |
| [`String`](class_string.md)                       | [`notarization/apple_id_password`](class_editorexportplatformmacos.md#class_editorexportplatformmacos_property_notarization/apple_id_password)                                                                         |
| [`int`](class_int.md)                             | [`notarization/notarization`](class_editorexportplatformmacos.md#class_editorexportplatformmacos_property_notarization/notarization)                                                                                   |
| [`String`](class_string.md)                       | [`privacy/address_book_usage_description`](class_editorexportplatformmacos.md#class_editorexportplatformmacos_property_privacy/address_book_usage_description)                                                         |
| [`Dictionary`](class_dictionary.md)               | [`privacy/address_book_usage_description_localized`](class_editorexportplatformmacos.md#class_editorexportplatformmacos_property_privacy/address_book_usage_description_localized)                                     |
| [`String`](class_string.md)                       | [`privacy/calendar_usage_description`](class_editorexportplatformmacos.md#class_editorexportplatformmacos_property_privacy/calendar_usage_description)                                                                 |
| [`Dictionary`](class_dictionary.md)               | [`privacy/calendar_usage_description_localized`](class_editorexportplatformmacos.md#class_editorexportplatformmacos_property_privacy/calendar_usage_description_localized)                                             |
| [`String`](class_string.md)                       | [`privacy/camera_usage_description`](class_editorexportplatformmacos.md#class_editorexportplatformmacos_property_privacy/camera_usage_description)                                                                     |
| [`Dictionary`](class_dictionary.md)               | [`privacy/camera_usage_description_localized`](class_editorexportplatformmacos.md#class_editorexportplatformmacos_property_privacy/camera_usage_description_localized)                                                 |
| [`bool`](class_bool.md)                           | [`privacy/collected_data/advertising_data/collected`](class_editorexportplatformmacos.md#class_editorexportplatformmacos_property_privacy/collected_data/advertising_data/collected)                                   |
| [`int`](class_int.md)                             | [`privacy/collected_data/advertising_data/collection_purposes`](class_editorexportplatformmacos.md#class_editorexportplatformmacos_property_privacy/collected_data/advertising_data/collection_purposes)               |
| [`bool`](class_bool.md)                           | [`privacy/collected_data/advertising_data/linked_to_user`](class_editorexportplatformmacos.md#class_editorexportplatformmacos_property_privacy/collected_data/advertising_data/linked_to_user)                         |
| [`bool`](class_bool.md)                           | [`privacy/collected_data/advertising_data/used_for_tracking`](class_editorexportplatformmacos.md#class_editorexportplatformmacos_property_privacy/collected_data/advertising_data/used_for_tracking)                   |
| [`bool`](class_bool.md)                           | [`privacy/collected_data/audio_data/collected`](class_editorexportplatformmacos.md#class_editorexportplatformmacos_property_privacy/collected_data/audio_data/collected)                                               |
| [`int`](class_int.md)                             | [`privacy/collected_data/audio_data/collection_purposes`](class_editorexportplatformmacos.md#class_editorexportplatformmacos_property_privacy/collected_data/audio_data/collection_purposes)                           |
| [`bool`](class_bool.md)                           | [`privacy/collected_data/audio_data/linked_to_user`](class_editorexportplatformmacos.md#class_editorexportplatformmacos_property_privacy/collected_data/audio_data/linked_to_user)                                     |
| [`bool`](class_bool.md)                           | [`privacy/collected_data/audio_data/used_for_tracking`](class_editorexportplatformmacos.md#class_editorexportplatformmacos_property_privacy/collected_data/audio_data/used_for_tracking)                               |
| [`bool`](class_bool.md)                           | [`privacy/collected_data/browsing_history/collected`](class_editorexportplatformmacos.md#class_editorexportplatformmacos_property_privacy/collected_data/browsing_history/collected)                                   |
| [`int`](class_int.md)                             | [`privacy/collected_data/browsing_history/collection_purposes`](class_editorexportplatformmacos.md#class_editorexportplatformmacos_property_privacy/collected_data/browsing_history/collection_purposes)               |
| [`bool`](class_bool.md)                           | [`privacy/collected_data/browsing_history/linked_to_user`](class_editorexportplatformmacos.md#class_editorexportplatformmacos_property_privacy/collected_data/browsing_history/linked_to_user)                         |
| [`bool`](class_bool.md)                           | [`privacy/collected_data/browsing_history/used_for_tracking`](class_editorexportplatformmacos.md#class_editorexportplatformmacos_property_privacy/collected_data/browsing_history/used_for_tracking)                   |
| [`bool`](class_bool.md)                           | [`privacy/collected_data/coarse_location/collected`](class_editorexportplatformmacos.md#class_editorexportplatformmacos_property_privacy/collected_data/coarse_location/collected)                                     |
| [`int`](class_int.md)                             | [`privacy/collected_data/coarse_location/collection_purposes`](class_editorexportplatformmacos.md#class_editorexportplatformmacos_property_privacy/collected_data/coarse_location/collection_purposes)                 |
| [`bool`](class_bool.md)                           | [`privacy/collected_data/coarse_location/linked_to_user`](class_editorexportplatformmacos.md#class_editorexportplatformmacos_property_privacy/collected_data/coarse_location/linked_to_user)                           |
| [`bool`](class_bool.md)                           | [`privacy/collected_data/coarse_location/used_for_tracking`](class_editorexportplatformmacos.md#class_editorexportplatformmacos_property_privacy/collected_data/coarse_location/used_for_tracking)                     |
| [`bool`](class_bool.md)                           | [`privacy/collected_data/contacts/collected`](class_editorexportplatformmacos.md#class_editorexportplatformmacos_property_privacy/collected_data/contacts/collected)                                                   |
| [`int`](class_int.md)                             | [`privacy/collected_data/contacts/collection_purposes`](class_editorexportplatformmacos.md#class_editorexportplatformmacos_property_privacy/collected_data/contacts/collection_purposes)                               |
| [`bool`](class_bool.md)                           | [`privacy/collected_data/contacts/linked_to_user`](class_editorexportplatformmacos.md#class_editorexportplatformmacos_property_privacy/collected_data/contacts/linked_to_user)                                         |
| [`bool`](class_bool.md)                           | [`privacy/collected_data/contacts/used_for_tracking`](class_editorexportplatformmacos.md#class_editorexportplatformmacos_property_privacy/collected_data/contacts/used_for_tracking)                                   |
| [`bool`](class_bool.md)                           | [`privacy/collected_data/crash_data/collected`](class_editorexportplatformmacos.md#class_editorexportplatformmacos_property_privacy/collected_data/crash_data/collected)                                               |
| [`int`](class_int.md)                             | [`privacy/collected_data/crash_data/collection_purposes`](class_editorexportplatformmacos.md#class_editorexportplatformmacos_property_privacy/collected_data/crash_data/collection_purposes)                           |
| [`bool`](class_bool.md)                           | [`privacy/collected_data/crash_data/linked_to_user`](class_editorexportplatformmacos.md#class_editorexportplatformmacos_property_privacy/collected_data/crash_data/linked_to_user)                                     |
| [`bool`](class_bool.md)                           | [`privacy/collected_data/crash_data/used_for_tracking`](class_editorexportplatformmacos.md#class_editorexportplatformmacos_property_privacy/collected_data/crash_data/used_for_tracking)                               |
| [`bool`](class_bool.md)                           | [`privacy/collected_data/credit_info/collected`](class_editorexportplatformmacos.md#class_editorexportplatformmacos_property_privacy/collected_data/credit_info/collected)                                             |
| [`int`](class_int.md)                             | [`privacy/collected_data/credit_info/collection_purposes`](class_editorexportplatformmacos.md#class_editorexportplatformmacos_property_privacy/collected_data/credit_info/collection_purposes)                         |
| [`bool`](class_bool.md)                           | [`privacy/collected_data/credit_info/linked_to_user`](class_editorexportplatformmacos.md#class_editorexportplatformmacos_property_privacy/collected_data/credit_info/linked_to_user)                                   |
| [`bool`](class_bool.md)                           | [`privacy/collected_data/credit_info/used_for_tracking`](class_editorexportplatformmacos.md#class_editorexportplatformmacos_property_privacy/collected_data/credit_info/used_for_tracking)                             |
| [`bool`](class_bool.md)                           | [`privacy/collected_data/customer_support/collected`](class_editorexportplatformmacos.md#class_editorexportplatformmacos_property_privacy/collected_data/customer_support/collected)                                   |
| [`int`](class_int.md)                             | [`privacy/collected_data/customer_support/collection_purposes`](class_editorexportplatformmacos.md#class_editorexportplatformmacos_property_privacy/collected_data/customer_support/collection_purposes)               |
| [`bool`](class_bool.md)                           | [`privacy/collected_data/customer_support/linked_to_user`](class_editorexportplatformmacos.md#class_editorexportplatformmacos_property_privacy/collected_data/customer_support/linked_to_user)                         |
| [`bool`](class_bool.md)                           | [`privacy/collected_data/customer_support/used_for_tracking`](class_editorexportplatformmacos.md#class_editorexportplatformmacos_property_privacy/collected_data/customer_support/used_for_tracking)                   |
| [`bool`](class_bool.md)                           | [`privacy/collected_data/device_id/collected`](class_editorexportplatformmacos.md#class_editorexportplatformmacos_property_privacy/collected_data/device_id/collected)                                                 |
| [`int`](class_int.md)                             | [`privacy/collected_data/device_id/collection_purposes`](class_editorexportplatformmacos.md#class_editorexportplatformmacos_property_privacy/collected_data/device_id/collection_purposes)                             |
| [`bool`](class_bool.md)                           | [`privacy/collected_data/device_id/linked_to_user`](class_editorexportplatformmacos.md#class_editorexportplatformmacos_property_privacy/collected_data/device_id/linked_to_user)                                       |
| [`bool`](class_bool.md)                           | [`privacy/collected_data/device_id/used_for_tracking`](class_editorexportplatformmacos.md#class_editorexportplatformmacos_property_privacy/collected_data/device_id/used_for_tracking)                                 |
| [`bool`](class_bool.md)                           | [`privacy/collected_data/email_address/collected`](class_editorexportplatformmacos.md#class_editorexportplatformmacos_property_privacy/collected_data/email_address/collected)                                         |
| [`int`](class_int.md)                             | [`privacy/collected_data/email_address/collection_purposes`](class_editorexportplatformmacos.md#class_editorexportplatformmacos_property_privacy/collected_data/email_address/collection_purposes)                     |
| [`bool`](class_bool.md)                           | [`privacy/collected_data/email_address/linked_to_user`](class_editorexportplatformmacos.md#class_editorexportplatformmacos_property_privacy/collected_data/email_address/linked_to_user)                               |
| [`bool`](class_bool.md)                           | [`privacy/collected_data/email_address/used_for_tracking`](class_editorexportplatformmacos.md#class_editorexportplatformmacos_property_privacy/collected_data/email_address/used_for_tracking)                         |
| [`bool`](class_bool.md)                           | [`privacy/collected_data/emails_or_text_messages/collected`](class_editorexportplatformmacos.md#class_editorexportplatformmacos_property_privacy/collected_data/emails_or_text_messages/collected)                     |
| [`int`](class_int.md)                             | [`privacy/collected_data/emails_or_text_messages/collection_purposes`](class_editorexportplatformmacos.md#class_editorexportplatformmacos_property_privacy/collected_data/emails_or_text_messages/collection_purposes) |
| [`bool`](class_bool.md)                           | [`privacy/collected_data/emails_or_text_messages/linked_to_user`](class_editorexportplatformmacos.md#class_editorexportplatformmacos_property_privacy/collected_data/emails_or_text_messages/linked_to_user)           |
| [`bool`](class_bool.md)                           | [`privacy/collected_data/emails_or_text_messages/used_for_tracking`](class_editorexportplatformmacos.md#class_editorexportplatformmacos_property_privacy/collected_data/emails_or_text_messages/used_for_tracking)     |
| [`bool`](class_bool.md)                           | [`privacy/collected_data/environment_scanning/collected`](class_editorexportplatformmacos.md#class_editorexportplatformmacos_property_privacy/collected_data/environment_scanning/collected)                           |
| [`int`](class_int.md)                             | [`privacy/collected_data/environment_scanning/collection_purposes`](class_editorexportplatformmacos.md#class_editorexportplatformmacos_property_privacy/collected_data/environment_scanning/collection_purposes)       |
| [`bool`](class_bool.md)                           | [`privacy/collected_data/environment_scanning/linked_to_user`](class_editorexportplatformmacos.md#class_editorexportplatformmacos_property_privacy/collected_data/environment_scanning/linked_to_user)                 |
| [`bool`](class_bool.md)                           | [`privacy/collected_data/environment_scanning/used_for_tracking`](class_editorexportplatformmacos.md#class_editorexportplatformmacos_property_privacy/collected_data/environment_scanning/used_for_tracking)           |
| [`bool`](class_bool.md)                           | [`privacy/collected_data/fitness/collected`](class_editorexportplatformmacos.md#class_editorexportplatformmacos_property_privacy/collected_data/fitness/collected)                                                     |
| [`int`](class_int.md)                             | [`privacy/collected_data/fitness/collection_purposes`](class_editorexportplatformmacos.md#class_editorexportplatformmacos_property_privacy/collected_data/fitness/collection_purposes)                                 |
| [`bool`](class_bool.md)                           | [`privacy/collected_data/fitness/linked_to_user`](class_editorexportplatformmacos.md#class_editorexportplatformmacos_property_privacy/collected_data/fitness/linked_to_user)                                           |
| [`bool`](class_bool.md)                           | [`privacy/collected_data/fitness/used_for_tracking`](class_editorexportplatformmacos.md#class_editorexportplatformmacos_property_privacy/collected_data/fitness/used_for_tracking)                                     |
| [`bool`](class_bool.md)                           | [`privacy/collected_data/gameplay_content/collected`](class_editorexportplatformmacos.md#class_editorexportplatformmacos_property_privacy/collected_data/gameplay_content/collected)                                   |
| [`int`](class_int.md)                             | [`privacy/collected_data/gameplay_content/collection_purposes`](class_editorexportplatformmacos.md#class_editorexportplatformmacos_property_privacy/collected_data/gameplay_content/collection_purposes)               |
| [`bool`](class_bool.md)                           | [`privacy/collected_data/gameplay_content/linked_to_user`](class_editorexportplatformmacos.md#class_editorexportplatformmacos_property_privacy/collected_data/gameplay_content/linked_to_user)                         |
| [`bool`](class_bool.md)                           | [`privacy/collected_data/gameplay_content/used_for_tracking`](class_editorexportplatformmacos.md#class_editorexportplatformmacos_property_privacy/collected_data/gameplay_content/used_for_tracking)                   |
| [`bool`](class_bool.md)                           | [`privacy/collected_data/hands/collected`](class_editorexportplatformmacos.md#class_editorexportplatformmacos_property_privacy/collected_data/hands/collected)                                                         |
| [`int`](class_int.md)                             | [`privacy/collected_data/hands/collection_purposes`](class_editorexportplatformmacos.md#class_editorexportplatformmacos_property_privacy/collected_data/hands/collection_purposes)                                     |
| [`bool`](class_bool.md)                           | [`privacy/collected_data/hands/linked_to_user`](class_editorexportplatformmacos.md#class_editorexportplatformmacos_property_privacy/collected_data/hands/linked_to_user)                                               |
| [`bool`](class_bool.md)                           | [`privacy/collected_data/hands/used_for_tracking`](class_editorexportplatformmacos.md#class_editorexportplatformmacos_property_privacy/collected_data/hands/used_for_tracking)                                         |
| [`bool`](class_bool.md)                           | [`privacy/collected_data/head/collected`](class_editorexportplatformmacos.md#class_editorexportplatformmacos_property_privacy/collected_data/head/collected)                                                           |
| [`int`](class_int.md)                             | [`privacy/collected_data/head/collection_purposes`](class_editorexportplatformmacos.md#class_editorexportplatformmacos_property_privacy/collected_data/head/collection_purposes)                                       |
| [`bool`](class_bool.md)                           | [`privacy/collected_data/head/linked_to_user`](class_editorexportplatformmacos.md#class_editorexportplatformmacos_property_privacy/collected_data/head/linked_to_user)                                                 |
| [`bool`](class_bool.md)                           | [`privacy/collected_data/head/used_for_tracking`](class_editorexportplatformmacos.md#class_editorexportplatformmacos_property_privacy/collected_data/head/used_for_tracking)                                           |
| [`bool`](class_bool.md)                           | [`privacy/collected_data/health/collected`](class_editorexportplatformmacos.md#class_editorexportplatformmacos_property_privacy/collected_data/health/collected)                                                       |
| [`int`](class_int.md)                             | [`privacy/collected_data/health/collection_purposes`](class_editorexportplatformmacos.md#class_editorexportplatformmacos_property_privacy/collected_data/health/collection_purposes)                                   |
| [`bool`](class_bool.md)                           | [`privacy/collected_data/health/linked_to_user`](class_editorexportplatformmacos.md#class_editorexportplatformmacos_property_privacy/collected_data/health/linked_to_user)                                             |
| [`bool`](class_bool.md)                           | [`privacy/collected_data/health/used_for_tracking`](class_editorexportplatformmacos.md#class_editorexportplatformmacos_property_privacy/collected_data/health/used_for_tracking)                                       |
| [`bool`](class_bool.md)                           | [`privacy/collected_data/name/collected`](class_editorexportplatformmacos.md#class_editorexportplatformmacos_property_privacy/collected_data/name/collected)                                                           |
| [`int`](class_int.md)                             | [`privacy/collected_data/name/collection_purposes`](class_editorexportplatformmacos.md#class_editorexportplatformmacos_property_privacy/collected_data/name/collection_purposes)                                       |
| [`bool`](class_bool.md)                           | [`privacy/collected_data/name/linked_to_user`](class_editorexportplatformmacos.md#class_editorexportplatformmacos_property_privacy/collected_data/name/linked_to_user)                                                 |
| [`bool`](class_bool.md)                           | [`privacy/collected_data/name/used_for_tracking`](class_editorexportplatformmacos.md#class_editorexportplatformmacos_property_privacy/collected_data/name/used_for_tracking)                                           |
| [`bool`](class_bool.md)                           | [`privacy/collected_data/other_contact_info/collected`](class_editorexportplatformmacos.md#class_editorexportplatformmacos_property_privacy/collected_data/other_contact_info/collected)                               |
| [`int`](class_int.md)                             | [`privacy/collected_data/other_contact_info/collection_purposes`](class_editorexportplatformmacos.md#class_editorexportplatformmacos_property_privacy/collected_data/other_contact_info/collection_purposes)           |
| [`bool`](class_bool.md)                           | [`privacy/collected_data/other_contact_info/linked_to_user`](class_editorexportplatformmacos.md#class_editorexportplatformmacos_property_privacy/collected_data/other_contact_info/linked_to_user)                     |
| [`bool`](class_bool.md)                           | [`privacy/collected_data/other_contact_info/used_for_tracking`](class_editorexportplatformmacos.md#class_editorexportplatformmacos_property_privacy/collected_data/other_contact_info/used_for_tracking)               |
| [`bool`](class_bool.md)                           | [`privacy/collected_data/other_data_types/collected`](class_editorexportplatformmacos.md#class_editorexportplatformmacos_property_privacy/collected_data/other_data_types/collected)                                   |
| [`int`](class_int.md)                             | [`privacy/collected_data/other_data_types/collection_purposes`](class_editorexportplatformmacos.md#class_editorexportplatformmacos_property_privacy/collected_data/other_data_types/collection_purposes)               |
| [`bool`](class_bool.md)                           | [`privacy/collected_data/other_data_types/linked_to_user`](class_editorexportplatformmacos.md#class_editorexportplatformmacos_property_privacy/collected_data/other_data_types/linked_to_user)                         |
| [`bool`](class_bool.md)                           | [`privacy/collected_data/other_data_types/used_for_tracking`](class_editorexportplatformmacos.md#class_editorexportplatformmacos_property_privacy/collected_data/other_data_types/used_for_tracking)                   |
| [`bool`](class_bool.md)                           | [`privacy/collected_data/other_diagnostic_data/collected`](class_editorexportplatformmacos.md#class_editorexportplatformmacos_property_privacy/collected_data/other_diagnostic_data/collected)                         |
| [`int`](class_int.md)                             | [`privacy/collected_data/other_diagnostic_data/collection_purposes`](class_editorexportplatformmacos.md#class_editorexportplatformmacos_property_privacy/collected_data/other_diagnostic_data/collection_purposes)     |
| [`bool`](class_bool.md)                           | [`privacy/collected_data/other_diagnostic_data/linked_to_user`](class_editorexportplatformmacos.md#class_editorexportplatformmacos_property_privacy/collected_data/other_diagnostic_data/linked_to_user)               |
| [`bool`](class_bool.md)                           | [`privacy/collected_data/other_diagnostic_data/used_for_tracking`](class_editorexportplatformmacos.md#class_editorexportplatformmacos_property_privacy/collected_data/other_diagnostic_data/used_for_tracking)         |
| [`bool`](class_bool.md)                           | [`privacy/collected_data/other_financial_info/collected`](class_editorexportplatformmacos.md#class_editorexportplatformmacos_property_privacy/collected_data/other_financial_info/collected)                           |
| [`int`](class_int.md)                             | [`privacy/collected_data/other_financial_info/collection_purposes`](class_editorexportplatformmacos.md#class_editorexportplatformmacos_property_privacy/collected_data/other_financial_info/collection_purposes)       |
| [`bool`](class_bool.md)                           | [`privacy/collected_data/other_financial_info/linked_to_user`](class_editorexportplatformmacos.md#class_editorexportplatformmacos_property_privacy/collected_data/other_financial_info/linked_to_user)                 |
| [`bool`](class_bool.md)                           | [`privacy/collected_data/other_financial_info/used_for_tracking`](class_editorexportplatformmacos.md#class_editorexportplatformmacos_property_privacy/collected_data/other_financial_info/used_for_tracking)           |
| [`bool`](class_bool.md)                           | [`privacy/collected_data/other_usage_data/collected`](class_editorexportplatformmacos.md#class_editorexportplatformmacos_property_privacy/collected_data/other_usage_data/collected)                                   |
| [`int`](class_int.md)                             | [`privacy/collected_data/other_usage_data/collection_purposes`](class_editorexportplatformmacos.md#class_editorexportplatformmacos_property_privacy/collected_data/other_usage_data/collection_purposes)               |
| [`bool`](class_bool.md)                           | [`privacy/collected_data/other_usage_data/linked_to_user`](class_editorexportplatformmacos.md#class_editorexportplatformmacos_property_privacy/collected_data/other_usage_data/linked_to_user)                         |
| [`bool`](class_bool.md)                           | [`privacy/collected_data/other_usage_data/used_for_tracking`](class_editorexportplatformmacos.md#class_editorexportplatformmacos_property_privacy/collected_data/other_usage_data/used_for_tracking)                   |
| [`bool`](class_bool.md)                           | [`privacy/collected_data/other_user_content/collected`](class_editorexportplatformmacos.md#class_editorexportplatformmacos_property_privacy/collected_data/other_user_content/collected)                               |
| [`int`](class_int.md)                             | [`privacy/collected_data/other_user_content/collection_purposes`](class_editorexportplatformmacos.md#class_editorexportplatformmacos_property_privacy/collected_data/other_user_content/collection_purposes)           |
| [`bool`](class_bool.md)                           | [`privacy/collected_data/other_user_content/linked_to_user`](class_editorexportplatformmacos.md#class_editorexportplatformmacos_property_privacy/collected_data/other_user_content/linked_to_user)                     |
| [`bool`](class_bool.md)                           | [`privacy/collected_data/other_user_content/used_for_tracking`](class_editorexportplatformmacos.md#class_editorexportplatformmacos_property_privacy/collected_data/other_user_content/used_for_tracking)               |
| [`bool`](class_bool.md)                           | [`privacy/collected_data/payment_info/collected`](class_editorexportplatformmacos.md#class_editorexportplatformmacos_property_privacy/collected_data/payment_info/collected)                                           |
| [`int`](class_int.md)                             | [`privacy/collected_data/payment_info/collection_purposes`](class_editorexportplatformmacos.md#class_editorexportplatformmacos_property_privacy/collected_data/payment_info/collection_purposes)                       |
| [`bool`](class_bool.md)                           | [`privacy/collected_data/payment_info/linked_to_user`](class_editorexportplatformmacos.md#class_editorexportplatformmacos_property_privacy/collected_data/payment_info/linked_to_user)                                 |
| [`bool`](class_bool.md)                           | [`privacy/collected_data/payment_info/used_for_tracking`](class_editorexportplatformmacos.md#class_editorexportplatformmacos_property_privacy/collected_data/payment_info/used_for_tracking)                           |
| [`bool`](class_bool.md)                           | [`privacy/collected_data/performance_data/collected`](class_editorexportplatformmacos.md#class_editorexportplatformmacos_property_privacy/collected_data/performance_data/collected)                                   |
| [`int`](class_int.md)                             | [`privacy/collected_data/performance_data/collection_purposes`](class_editorexportplatformmacos.md#class_editorexportplatformmacos_property_privacy/collected_data/performance_data/collection_purposes)               |
| [`bool`](class_bool.md)                           | [`privacy/collected_data/performance_data/linked_to_user`](class_editorexportplatformmacos.md#class_editorexportplatformmacos_property_privacy/collected_data/performance_data/linked_to_user)                         |
| [`bool`](class_bool.md)                           | [`privacy/collected_data/performance_data/used_for_tracking`](class_editorexportplatformmacos.md#class_editorexportplatformmacos_property_privacy/collected_data/performance_data/used_for_tracking)                   |
| [`bool`](class_bool.md)                           | [`privacy/collected_data/phone_number/collected`](class_editorexportplatformmacos.md#class_editorexportplatformmacos_property_privacy/collected_data/phone_number/collected)                                           |
| [`int`](class_int.md)                             | [`privacy/collected_data/phone_number/collection_purposes`](class_editorexportplatformmacos.md#class_editorexportplatformmacos_property_privacy/collected_data/phone_number/collection_purposes)                       |
| [`bool`](class_bool.md)                           | [`privacy/collected_data/phone_number/linked_to_user`](class_editorexportplatformmacos.md#class_editorexportplatformmacos_property_privacy/collected_data/phone_number/linked_to_user)                                 |
| [`bool`](class_bool.md)                           | [`privacy/collected_data/phone_number/used_for_tracking`](class_editorexportplatformmacos.md#class_editorexportplatformmacos_property_privacy/collected_data/phone_number/used_for_tracking)                           |
| [`bool`](class_bool.md)                           | [`privacy/collected_data/photos_or_videos/collected`](class_editorexportplatformmacos.md#class_editorexportplatformmacos_property_privacy/collected_data/photos_or_videos/collected)                                   |
| [`int`](class_int.md)                             | [`privacy/collected_data/photos_or_videos/collection_purposes`](class_editorexportplatformmacos.md#class_editorexportplatformmacos_property_privacy/collected_data/photos_or_videos/collection_purposes)               |
| [`bool`](class_bool.md)                           | [`privacy/collected_data/photos_or_videos/linked_to_user`](class_editorexportplatformmacos.md#class_editorexportplatformmacos_property_privacy/collected_data/photos_or_videos/linked_to_user)                         |
| [`bool`](class_bool.md)                           | [`privacy/collected_data/photos_or_videos/used_for_tracking`](class_editorexportplatformmacos.md#class_editorexportplatformmacos_property_privacy/collected_data/photos_or_videos/used_for_tracking)                   |
| [`bool`](class_bool.md)                           | [`privacy/collected_data/physical_address/collected`](class_editorexportplatformmacos.md#class_editorexportplatformmacos_property_privacy/collected_data/physical_address/collected)                                   |
| [`int`](class_int.md)                             | [`privacy/collected_data/physical_address/collection_purposes`](class_editorexportplatformmacos.md#class_editorexportplatformmacos_property_privacy/collected_data/physical_address/collection_purposes)               |
| [`bool`](class_bool.md)                           | [`privacy/collected_data/physical_address/linked_to_user`](class_editorexportplatformmacos.md#class_editorexportplatformmacos_property_privacy/collected_data/physical_address/linked_to_user)                         |
| [`bool`](class_bool.md)                           | [`privacy/collected_data/physical_address/used_for_tracking`](class_editorexportplatformmacos.md#class_editorexportplatformmacos_property_privacy/collected_data/physical_address/used_for_tracking)                   |
| [`bool`](class_bool.md)                           | [`privacy/collected_data/precise_location/collected`](class_editorexportplatformmacos.md#class_editorexportplatformmacos_property_privacy/collected_data/precise_location/collected)                                   |
| [`int`](class_int.md)                             | [`privacy/collected_data/precise_location/collection_purposes`](class_editorexportplatformmacos.md#class_editorexportplatformmacos_property_privacy/collected_data/precise_location/collection_purposes)               |
| [`bool`](class_bool.md)                           | [`privacy/collected_data/precise_location/linked_to_user`](class_editorexportplatformmacos.md#class_editorexportplatformmacos_property_privacy/collected_data/precise_location/linked_to_user)                         |
| [`bool`](class_bool.md)                           | [`privacy/collected_data/precise_location/used_for_tracking`](class_editorexportplatformmacos.md#class_editorexportplatformmacos_property_privacy/collected_data/precise_location/used_for_tracking)                   |
| [`bool`](class_bool.md)                           | [`privacy/collected_data/product_interaction/collected`](class_editorexportplatformmacos.md#class_editorexportplatformmacos_property_privacy/collected_data/product_interaction/collected)                             |
| [`int`](class_int.md)                             | [`privacy/collected_data/product_interaction/collection_purposes`](class_editorexportplatformmacos.md#class_editorexportplatformmacos_property_privacy/collected_data/product_interaction/collection_purposes)         |
| [`bool`](class_bool.md)                           | [`privacy/collected_data/product_interaction/linked_to_user`](class_editorexportplatformmacos.md#class_editorexportplatformmacos_property_privacy/collected_data/product_interaction/linked_to_user)                   |
| [`bool`](class_bool.md)                           | [`privacy/collected_data/product_interaction/used_for_tracking`](class_editorexportplatformmacos.md#class_editorexportplatformmacos_property_privacy/collected_data/product_interaction/used_for_tracking)             |
| [`bool`](class_bool.md)                           | [`privacy/collected_data/purchase_history/collected`](class_editorexportplatformmacos.md#class_editorexportplatformmacos_property_privacy/collected_data/purchase_history/collected)                                   |
| [`int`](class_int.md)                             | [`privacy/collected_data/purchase_history/collection_purposes`](class_editorexportplatformmacos.md#class_editorexportplatformmacos_property_privacy/collected_data/purchase_history/collection_purposes)               |
| [`bool`](class_bool.md)                           | [`privacy/collected_data/purchase_history/linked_to_user`](class_editorexportplatformmacos.md#class_editorexportplatformmacos_property_privacy/collected_data/purchase_history/linked_to_user)                         |
| [`bool`](class_bool.md)                           | [`privacy/collected_data/purchase_history/used_for_tracking`](class_editorexportplatformmacos.md#class_editorexportplatformmacos_property_privacy/collected_data/purchase_history/used_for_tracking)                   |
| [`bool`](class_bool.md)                           | [`privacy/collected_data/search_hhistory/collected`](class_editorexportplatformmacos.md#class_editorexportplatformmacos_property_privacy/collected_data/search_hhistory/collected)                                     |
| [`int`](class_int.md)                             | [`privacy/collected_data/search_hhistory/collection_purposes`](class_editorexportplatformmacos.md#class_editorexportplatformmacos_property_privacy/collected_data/search_hhistory/collection_purposes)                 |
| [`bool`](class_bool.md)                           | [`privacy/collected_data/search_hhistory/linked_to_user`](class_editorexportplatformmacos.md#class_editorexportplatformmacos_property_privacy/collected_data/search_hhistory/linked_to_user)                           |
| [`bool`](class_bool.md)                           | [`privacy/collected_data/search_hhistory/used_for_tracking`](class_editorexportplatformmacos.md#class_editorexportplatformmacos_property_privacy/collected_data/search_hhistory/used_for_tracking)                     |
| [`bool`](class_bool.md)                           | [`privacy/collected_data/sensitive_info/collected`](class_editorexportplatformmacos.md#class_editorexportplatformmacos_property_privacy/collected_data/sensitive_info/collected)                                       |
| [`int`](class_int.md)                             | [`privacy/collected_data/sensitive_info/collection_purposes`](class_editorexportplatformmacos.md#class_editorexportplatformmacos_property_privacy/collected_data/sensitive_info/collection_purposes)                   |
| [`bool`](class_bool.md)                           | [`privacy/collected_data/sensitive_info/linked_to_user`](class_editorexportplatformmacos.md#class_editorexportplatformmacos_property_privacy/collected_data/sensitive_info/linked_to_user)                             |
| [`bool`](class_bool.md)                           | [`privacy/collected_data/sensitive_info/used_for_tracking`](class_editorexportplatformmacos.md#class_editorexportplatformmacos_property_privacy/collected_data/sensitive_info/used_for_tracking)                       |
| [`bool`](class_bool.md)                           | [`privacy/collected_data/user_id/collected`](class_editorexportplatformmacos.md#class_editorexportplatformmacos_property_privacy/collected_data/user_id/collected)                                                     |
| [`int`](class_int.md)                             | [`privacy/collected_data/user_id/collection_purposes`](class_editorexportplatformmacos.md#class_editorexportplatformmacos_property_privacy/collected_data/user_id/collection_purposes)                                 |
| [`bool`](class_bool.md)                           | [`privacy/collected_data/user_id/linked_to_user`](class_editorexportplatformmacos.md#class_editorexportplatformmacos_property_privacy/collected_data/user_id/linked_to_user)                                           |
| [`bool`](class_bool.md)                           | [`privacy/collected_data/user_id/used_for_tracking`](class_editorexportplatformmacos.md#class_editorexportplatformmacos_property_privacy/collected_data/user_id/used_for_tracking)                                     |
| [`String`](class_string.md)                       | [`privacy/desktop_folder_usage_description`](class_editorexportplatformmacos.md#class_editorexportplatformmacos_property_privacy/desktop_folder_usage_description)                                                     |
| [`Dictionary`](class_dictionary.md)               | [`privacy/desktop_folder_usage_description_localized`](class_editorexportplatformmacos.md#class_editorexportplatformmacos_property_privacy/desktop_folder_usage_description_localized)                                 |
| [`String`](class_string.md)                       | [`privacy/documents_folder_usage_description`](class_editorexportplatformmacos.md#class_editorexportplatformmacos_property_privacy/documents_folder_usage_description)                                                 |
| [`Dictionary`](class_dictionary.md)               | [`privacy/documents_folder_usage_description_localized`](class_editorexportplatformmacos.md#class_editorexportplatformmacos_property_privacy/documents_folder_usage_description_localized)                             |
| [`String`](class_string.md)                       | [`privacy/downloads_folder_usage_description`](class_editorexportplatformmacos.md#class_editorexportplatformmacos_property_privacy/downloads_folder_usage_description)                                                 |
| [`Dictionary`](class_dictionary.md)               | [`privacy/downloads_folder_usage_description_localized`](class_editorexportplatformmacos.md#class_editorexportplatformmacos_property_privacy/downloads_folder_usage_description_localized)                             |
| [`String`](class_string.md)                       | [`privacy/location_usage_description`](class_editorexportplatformmacos.md#class_editorexportplatformmacos_property_privacy/location_usage_description)                                                                 |
| [`Dictionary`](class_dictionary.md)               | [`privacy/location_usage_description_localized`](class_editorexportplatformmacos.md#class_editorexportplatformmacos_property_privacy/location_usage_description_localized)                                             |
| [`String`](class_string.md)                       | [`privacy/microphone_usage_description`](class_editorexportplatformmacos.md#class_editorexportplatformmacos_property_privacy/microphone_usage_description)                                                             |
| [`Dictionary`](class_dictionary.md)               | [`privacy/microphone_usage_description_localized`](class_editorexportplatformmacos.md#class_editorexportplatformmacos_property_privacy/microphone_usage_description_localized)                                         |
| [`String`](class_string.md)                       | [`privacy/network_volumes_usage_description`](class_editorexportplatformmacos.md#class_editorexportplatformmacos_property_privacy/network_volumes_usage_description)                                                   |
| [`Dictionary`](class_dictionary.md)               | [`privacy/network_volumes_usage_description_localized`](class_editorexportplatformmacos.md#class_editorexportplatformmacos_property_privacy/network_volumes_usage_description_localized)                               |
| [`String`](class_string.md)                       | [`privacy/photos_library_usage_description`](class_editorexportplatformmacos.md#class_editorexportplatformmacos_property_privacy/photos_library_usage_description)                                                     |
| [`Dictionary`](class_dictionary.md)               | [`privacy/photos_library_usage_description_localized`](class_editorexportplatformmacos.md#class_editorexportplatformmacos_property_privacy/photos_library_usage_description_localized)                                 |
| [`String`](class_string.md)                       | [`privacy/removable_volumes_usage_description`](class_editorexportplatformmacos.md#class_editorexportplatformmacos_property_privacy/removable_volumes_usage_description)                                               |
| [`Dictionary`](class_dictionary.md)               | [`privacy/removable_volumes_usage_description_localized`](class_editorexportplatformmacos.md#class_editorexportplatformmacos_property_privacy/removable_volumes_usage_description_localized)                           |
| [`PackedStringArray`](class_packedstringarray.md) | [`privacy/tracking_domains`](class_editorexportplatformmacos.md#class_editorexportplatformmacos_property_privacy/tracking_domains)                                                                                     |
| [`bool`](class_bool.md)                           | [`privacy/tracking_enabled`](class_editorexportplatformmacos.md#class_editorexportplatformmacos_property_privacy/tracking_enabled)                                                                                     |
| [`String`](class_string.md)                       | [`ssh_remote_deploy/cleanup_script`](class_editorexportplatformmacos.md#class_editorexportplatformmacos_property_ssh_remote_deploy/cleanup_script)                                                                     |
| [`bool`](class_bool.md)                           | [`ssh_remote_deploy/enabled`](class_editorexportplatformmacos.md#class_editorexportplatformmacos_property_ssh_remote_deploy/enabled)                                                                                   |
| [`String`](class_string.md)                       | [`ssh_remote_deploy/extra_args_scp`](class_editorexportplatformmacos.md#class_editorexportplatformmacos_property_ssh_remote_deploy/extra_args_scp)                                                                     |
| [`String`](class_string.md)                       | [`ssh_remote_deploy/extra_args_ssh`](class_editorexportplatformmacos.md#class_editorexportplatformmacos_property_ssh_remote_deploy/extra_args_ssh)                                                                     |
| [`String`](class_string.md)                       | [`ssh_remote_deploy/host`](class_editorexportplatformmacos.md#class_editorexportplatformmacos_property_ssh_remote_deploy/host)                                                                                         |
| [`String`](class_string.md)                       | [`ssh_remote_deploy/port`](class_editorexportplatformmacos.md#class_editorexportplatformmacos_property_ssh_remote_deploy/port)                                                                                         |
| [`String`](class_string.md)                       | [`ssh_remote_deploy/run_script`](class_editorexportplatformmacos.md#class_editorexportplatformmacos_property_ssh_remote_deploy/run_script)                                                                             |
| [`String`](class_string.md)                       | [`xcode/platform_build`](class_editorexportplatformmacos.md#class_editorexportplatformmacos_property_xcode/platform_build)                                                                                             |
| [`String`](class_string.md)                       | [`xcode/sdk_build`](class_editorexportplatformmacos.md#class_editorexportplatformmacos_property_xcode/sdk_build)                                                                                                       |
| [`String`](class_string.md)                       | [`xcode/sdk_name`](class_editorexportplatformmacos.md#class_editorexportplatformmacos_property_xcode/sdk_name)                                                                                                         |
| [`String`](class_string.md)                       | [`xcode/sdk_version`](class_editorexportplatformmacos.md#class_editorexportplatformmacos_property_xcode/sdk_version)                                                                                                   |
| [`String`](class_string.md)                       | [`xcode/xcode_build`](class_editorexportplatformmacos.md#class_editorexportplatformmacos_property_xcode/xcode_build)                                                                                                   |
| [`String`](class_string.md)                       | [`xcode/xcode_version`](class_editorexportplatformmacos.md#class_editorexportplatformmacos_property_xcode/xcode_version)                                                                                               |

<!-- rst-class:: classref-section-separator -->

---

## 属性说明

<div id="_class_editorexportplatformmacos_property_application/additional_plist_content"></div>

[`String`](class_string.md) **application/additional_plist_content** <div id="class_editorexportplatformmacos_property_application/additional_plist_content"></div>

Additional data added to the root `<dict>` section of the [*Info.plist*](https://developer.apple.com/documentation/bundleresources/information_property_list) file. The value should be an XML section with pairs of key-value elements, e.g.:

```text

    <key>key_name</key>
    <string>value</string>
```



<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatformmacos_property_application/app_category"></div>

[`String`](class_string.md) **application/app_category** <div id="class_editorexportplatformmacos_property_application/app_category"></div>

Application category for the App Store.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatformmacos_property_application/bundle_identifier"></div>

[`String`](class_string.md) **application/bundle_identifier** <div id="class_editorexportplatformmacos_property_application/bundle_identifier"></div>

Unique application identifier in a reverse-DNS format, can only contain alphanumeric characters (`A-Z`, `a-z`, and `0-9`), hyphens (`-`), and periods (`.`).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatformmacos_property_application/copyright"></div>

[`String`](class_string.md) **application/copyright** <div id="class_editorexportplatformmacos_property_application/copyright"></div>

Copyright notice for the bundle visible to the user (in English).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatformmacos_property_application/copyright_localized"></div>

[`Dictionary`](class_dictionary.md) **application/copyright_localized** <div id="class_editorexportplatformmacos_property_application/copyright_localized"></div>

Copyright notice for the bundle visible to the user (localized).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatformmacos_property_application/export_angle"></div>

[`int`](class_int.md) **application/export_angle** <div id="class_editorexportplatformmacos_property_application/export_angle"></div>

If set to `1`, ANGLE libraries are exported with the exported application. If set to `0`, ANGLE libraries are exported only if [`ProjectSettings.rendering/gl_compatibility/driver`](class_projectsettings.md#class_projectsettings_property_rendering/gl_compatibility/driver) is set to `"opengl3_angle"`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatformmacos_property_application/icon"></div>

[`String`](class_string.md) **application/icon** <div id="class_editorexportplatformmacos_property_application/icon"></div>

Application icon file. If left empty, it will fallback to [`ProjectSettings.application/config/macos_native_icon`](class_projectsettings.md#class_projectsettings_property_application/config/macos_native_icon), and then to [`ProjectSettings.application/config/icon`](class_projectsettings.md#class_projectsettings_property_application/config/icon).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatformmacos_property_application/icon_interpolation"></div>

[`int`](class_int.md) **application/icon_interpolation** <div id="class_editorexportplatformmacos_property_application/icon_interpolation"></div>

Interpolation method used to resize application icon.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatformmacos_property_application/min_macos_version_arm64"></div>

[`String`](class_string.md) **application/min_macos_version_arm64** <div id="class_editorexportplatformmacos_property_application/min_macos_version_arm64"></div>

Minimum version of macOS required for this application to run on Apple Silicon Macs, in the `major.minor.patch` or `major.minor` format, can only contain numeric characters (`0-9`) and periods (`.`).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatformmacos_property_application/min_macos_version_x86_64"></div>

[`String`](class_string.md) **application/min_macos_version_x86_64** <div id="class_editorexportplatformmacos_property_application/min_macos_version_x86_64"></div>

Minimum version of macOS required for this application to run on Intel Macs, in the `major.minor.patch` or `major.minor` format, can only contain numeric characters (`0-9`) and periods (`.`).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatformmacos_property_application/short_version"></div>

[`String`](class_string.md) **application/short_version** <div id="class_editorexportplatformmacos_property_application/short_version"></div>

Application version visible to the user, can only contain numeric characters (`0-9`) and periods (`.`). Falls back to [`ProjectSettings.application/config/version`](class_projectsettings.md#class_projectsettings_property_application/config/version) if left empty.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatformmacos_property_application/signature"></div>

[`String`](class_string.md) **application/signature** <div id="class_editorexportplatformmacos_property_application/signature"></div>

A four-character creator code that is specific to the bundle. Optional.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatformmacos_property_application/version"></div>

[`String`](class_string.md) **application/version** <div id="class_editorexportplatformmacos_property_application/version"></div>

Machine-readable application version, in the `major.minor.patch` format, can only contain numeric characters (`0-9`) and periods (`.`). This must be incremented on every new release pushed to the App Store.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatformmacos_property_binary_format/architecture"></div>

[`String`](class_string.md) **binary_format/architecture** <div id="class_editorexportplatformmacos_property_binary_format/architecture"></div>

Application executable architecture.

Supported architectures: `x86_64`, `arm64`, and `universal` (`x86_64 + arm64`).

Official export templates include `universal` binaries only.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatformmacos_property_codesign/apple_team_id"></div>

[`String`](class_string.md) **codesign/apple_team_id** <div id="class_editorexportplatformmacos_property_codesign/apple_team_id"></div>

Apple Team ID, unique 10-character string. To locate your Team ID check "Membership details" section in your Apple developer account dashboard, or "Organizational Unit" of your code signing certificate. See [*Locate your Team ID*](https://developer.apple.com/help/account/manage-your-team/locate-your-team-id).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatformmacos_property_codesign/certificate_file"></div>

[`String`](class_string.md) **codesign/certificate_file** <div id="class_editorexportplatformmacos_property_codesign/certificate_file"></div>

PKCS #12 certificate file used to sign `.app` bundle.

Can be overridden with the environment variable `GODOT_MACOS_CODESIGN_CERTIFICATE_FILE`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatformmacos_property_codesign/certificate_password"></div>

[`String`](class_string.md) **codesign/certificate_password** <div id="class_editorexportplatformmacos_property_codesign/certificate_password"></div>

Password for the certificate file used to sign `.app` bundle.

Can be overridden with the environment variable `GODOT_MACOS_CODESIGN_CERTIFICATE_PASSWORD`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatformmacos_property_codesign/codesign"></div>

[`int`](class_int.md) **codesign/codesign** <div id="class_editorexportplatformmacos_property_codesign/codesign"></div>

Tool to use for code signing.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatformmacos_property_codesign/custom_options"></div>

[`PackedStringArray`](class_packedstringarray.md) **codesign/custom_options** <div id="class_editorexportplatformmacos_property_codesign/custom_options"></div>

Array of the additional command line arguments passed to the code signing tool.

**Note:** The returned array is *copied* and any changes to it will not update the original property value. See [`PackedStringArray`](class_packedstringarray.md) for more details.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatformmacos_property_codesign/entitlements/additional"></div>

[`String`](class_string.md) **codesign/entitlements/additional** <div id="class_editorexportplatformmacos_property_codesign/entitlements/additional"></div>

Additional data added to the root `<dict>` section of the [*.entitlements*](https://developer.apple.com/documentation/bundleresources/entitlements) file. The value should be an XML section with pairs of key-value elements, e.g.:

```text

    <key>key_name</key>
    <string>value</string>
```



<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatformmacos_property_codesign/entitlements/address_book"></div>

[`bool`](class_bool.md) **codesign/entitlements/address_book** <div id="class_editorexportplatformmacos_property_codesign/entitlements/address_book"></div>

Enable to allow access to contacts in the user's address book, if it's enabled you should also provide usage message in the [`privacy/address_book_usage_description`](class_editorexportplatformmacos.md#class_editorexportplatformmacos_property_privacy/address_book_usage_description) option. See [*com.apple.security.personal-information.addressbook*](https://developer.apple.com/documentation/bundleresources/entitlements/com_apple_security_personal-information_addressbook).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatformmacos_property_codesign/entitlements/allow_dyld_environment_variables"></div>

[`bool`](class_bool.md) **codesign/entitlements/allow_dyld_environment_variables** <div id="class_editorexportplatformmacos_property_codesign/entitlements/allow_dyld_environment_variables"></div>

Allows app to use dynamic linker environment variables to inject code. If you are using add-ons with dynamic or self-modifying native code, enable them according to the add-on documentation. See [*com.apple.security.cs.allow-dyld-environment-variables*](https://developer.apple.com/documentation/bundleresources/entitlements/com_apple_security_cs_allow-dyld-environment-variables).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatformmacos_property_codesign/entitlements/allow_jit_code_execution"></div>

[`bool`](class_bool.md) **codesign/entitlements/allow_jit_code_execution** <div id="class_editorexportplatformmacos_property_codesign/entitlements/allow_jit_code_execution"></div>

Allows creating writable and executable memory for JIT code. If you are using add-ons with dynamic or self-modifying native code, enable them according to the add-on documentation. See [*com.apple.security.cs.allow-jit*](https://developer.apple.com/documentation/bundleresources/entitlements/com_apple_security_cs_allow-jit).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatformmacos_property_codesign/entitlements/allow_unsigned_executable_memory"></div>

[`bool`](class_bool.md) **codesign/entitlements/allow_unsigned_executable_memory** <div id="class_editorexportplatformmacos_property_codesign/entitlements/allow_unsigned_executable_memory"></div>

Allows creating writable and executable memory without JIT restrictions. If you are using add-ons with dynamic or self-modifying native code, enable them according to the add-on documentation. See [*com.apple.security.cs.allow-unsigned-executable-memory*](https://developer.apple.com/documentation/bundleresources/entitlements/com_apple_security_cs_allow-unsigned-executable-memory).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatformmacos_property_codesign/entitlements/app_sandbox/device_bluetooth"></div>

[`bool`](class_bool.md) **codesign/entitlements/app_sandbox/device_bluetooth** <div id="class_editorexportplatformmacos_property_codesign/entitlements/app_sandbox/device_bluetooth"></div>

Enable to allow app to interact with Bluetooth devices. This entitlement is required to use wireless controllers. See [*com.apple.security.device.bluetooth*](https://developer.apple.com/documentation/bundleresources/entitlements/com_apple_security_device_bluetooth).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatformmacos_property_codesign/entitlements/app_sandbox/device_usb"></div>

[`bool`](class_bool.md) **codesign/entitlements/app_sandbox/device_usb** <div id="class_editorexportplatformmacos_property_codesign/entitlements/app_sandbox/device_usb"></div>

Enable to allow app to interact with USB devices. This entitlement is required to use wired controllers. See [*com.apple.security.device.usb*](https://developer.apple.com/documentation/bundleresources/entitlements/com_apple_security_device_usb).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatformmacos_property_codesign/entitlements/app_sandbox/enabled"></div>

[`bool`](class_bool.md) **codesign/entitlements/app_sandbox/enabled** <div id="class_editorexportplatformmacos_property_codesign/entitlements/app_sandbox/enabled"></div>

Enables App Sandbox. The App Sandbox restricts access to user data, networking, and devices. Sandboxed apps can't access most of the file system, can't use custom file dialogs and execute binaries outside the .app bundle. See [*App Sandbox*](https://developer.apple.com/documentation/security/app_sandbox).

 **Note:** To distribute an app through the App Store, you must enable the App Sandbox.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatformmacos_property_codesign/entitlements/app_sandbox/files_downloads"></div>

[`int`](class_int.md) **codesign/entitlements/app_sandbox/files_downloads** <div id="class_editorexportplatformmacos_property_codesign/entitlements/app_sandbox/files_downloads"></div>

Allows read or write access to the user's "Downloads" folder. See [*com.apple.security.files.downloads.read-write*](https://developer.apple.com/documentation/bundleresources/entitlements/com_apple_security_files_downloads_read-write).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatformmacos_property_codesign/entitlements/app_sandbox/files_movies"></div>

[`int`](class_int.md) **codesign/entitlements/app_sandbox/files_movies** <div id="class_editorexportplatformmacos_property_codesign/entitlements/app_sandbox/files_movies"></div>

Allows read or write access to the user's "Movies" folder. See [*com.apple.security.files.movies.read-write*](https://developer.apple.com/documentation/bundleresources/entitlements/com_apple_security_assets_movies_read-write).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatformmacos_property_codesign/entitlements/app_sandbox/files_music"></div>

[`int`](class_int.md) **codesign/entitlements/app_sandbox/files_music** <div id="class_editorexportplatformmacos_property_codesign/entitlements/app_sandbox/files_music"></div>

Allows read or write access to the user's "Music" folder. See [*com.apple.security.files.music.read-write*](https://developer.apple.com/documentation/bundleresources/entitlements/com_apple_security_assets_music_read-write).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatformmacos_property_codesign/entitlements/app_sandbox/files_pictures"></div>

[`int`](class_int.md) **codesign/entitlements/app_sandbox/files_pictures** <div id="class_editorexportplatformmacos_property_codesign/entitlements/app_sandbox/files_pictures"></div>

Allows read or write access to the user's "Pictures" folder. See [*com.apple.security.files.pictures.read-write*](https://developer.apple.com/documentation/bundleresources/entitlements/com_apple_security_assets_pictures_read-write).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatformmacos_property_codesign/entitlements/app_sandbox/files_user_selected"></div>

[`int`](class_int.md) **codesign/entitlements/app_sandbox/files_user_selected** <div id="class_editorexportplatformmacos_property_codesign/entitlements/app_sandbox/files_user_selected"></div>

Allows read or write access to the locations the user has selected using a native file dialog. See [*com.apple.security.files.user-selected.read-write*](https://developer.apple.com/documentation/bundleresources/entitlements/com_apple_security_files_user-selected_read-write).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatformmacos_property_codesign/entitlements/app_sandbox/helper_executables"></div>

[`Array`](class_array.md) **codesign/entitlements/app_sandbox/helper_executables** <div id="class_editorexportplatformmacos_property_codesign/entitlements/app_sandbox/helper_executables"></div>

List of helper executables to embedded to the app bundle. Sandboxed app are limited to execute only these executable. See [*Embedding a command-line tool in a sandboxed app*](https://developer.apple.com/documentation/xcode/embedding-a-helper-tool-in-a-sandboxed-app).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatformmacos_property_codesign/entitlements/app_sandbox/network_client"></div>

[`bool`](class_bool.md) **codesign/entitlements/app_sandbox/network_client** <div id="class_editorexportplatformmacos_property_codesign/entitlements/app_sandbox/network_client"></div>

Enable to allow app to establish outgoing network connections. See [*com.apple.security.network.client*](https://developer.apple.com/documentation/bundleresources/entitlements/com_apple_security_network_client).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatformmacos_property_codesign/entitlements/app_sandbox/network_server"></div>

[`bool`](class_bool.md) **codesign/entitlements/app_sandbox/network_server** <div id="class_editorexportplatformmacos_property_codesign/entitlements/app_sandbox/network_server"></div>

Enable to allow app to listen for incoming network connections. See [*com.apple.security.network.server*](https://developer.apple.com/documentation/bundleresources/entitlements/com_apple_security_network_server).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatformmacos_property_codesign/entitlements/apple_events"></div>

[`bool`](class_bool.md) **codesign/entitlements/apple_events** <div id="class_editorexportplatformmacos_property_codesign/entitlements/apple_events"></div>

Enable to allow app to send Apple events to other apps. See [*com.apple.security.automation.apple-events*](https://developer.apple.com/documentation/bundleresources/entitlements/com_apple_security_automation_apple-events).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatformmacos_property_codesign/entitlements/audio_input"></div>

[`bool`](class_bool.md) **codesign/entitlements/audio_input** <div id="class_editorexportplatformmacos_property_codesign/entitlements/audio_input"></div>

Enable if you need to use the microphone or other audio input sources, if it's enabled you should also provide usage message in the [`privacy/microphone_usage_description`](class_editorexportplatformmacos.md#class_editorexportplatformmacos_property_privacy/microphone_usage_description) option. See [*com.apple.security.device.audio-input*](https://developer.apple.com/documentation/bundleresources/entitlements/com_apple_security_device_audio-input).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatformmacos_property_codesign/entitlements/calendars"></div>

[`bool`](class_bool.md) **codesign/entitlements/calendars** <div id="class_editorexportplatformmacos_property_codesign/entitlements/calendars"></div>

Enable to allow access to the user's calendar, if it's enabled you should also provide usage message in the [`privacy/calendar_usage_description`](class_editorexportplatformmacos.md#class_editorexportplatformmacos_property_privacy/calendar_usage_description) option. See [*com.apple.security.personal-information.calendars*](https://developer.apple.com/documentation/bundleresources/entitlements/com_apple_security_personal-information_calendars).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatformmacos_property_codesign/entitlements/camera"></div>

[`bool`](class_bool.md) **codesign/entitlements/camera** <div id="class_editorexportplatformmacos_property_codesign/entitlements/camera"></div>

Enable if you need to use the camera, if it's enabled you should also provide usage message in the [`privacy/camera_usage_description`](class_editorexportplatformmacos.md#class_editorexportplatformmacos_property_privacy/camera_usage_description) option. See [*com.apple.security.device.camera*](https://developer.apple.com/documentation/bundleresources/entitlements/com_apple_security_device_camera).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatformmacos_property_codesign/entitlements/custom_file"></div>

[`String`](class_string.md) **codesign/entitlements/custom_file** <div id="class_editorexportplatformmacos_property_codesign/entitlements/custom_file"></div>

Custom entitlements `.plist` file, if specified the rest of entitlements in the export config are ignored.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatformmacos_property_codesign/entitlements/debugging"></div>

[`bool`](class_bool.md) **codesign/entitlements/debugging** <div id="class_editorexportplatformmacos_property_codesign/entitlements/debugging"></div>

You can temporarily enable this entitlement to use native debugger (GDB, LLDB) with the exported app. This entitlement should be disabled for production export. See [*Embedding a command-line tool in a sandboxed app*](https://developer.apple.com/documentation/xcode/embedding-a-helper-tool-in-a-sandboxed-app).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatformmacos_property_codesign/entitlements/disable_library_validation"></div>

[`bool`](class_bool.md) **codesign/entitlements/disable_library_validation** <div id="class_editorexportplatformmacos_property_codesign/entitlements/disable_library_validation"></div>

Allows app to load arbitrary libraries and frameworks (not signed with the same Team ID as the main executable or by Apple). Enable it if you are using GDExtension add-ons or ad-hoc signing, or want to support user-provided external add-ons. See [*com.apple.security.cs.disable-library-validation*](https://developer.apple.com/documentation/bundleresources/entitlements/com_apple_security_cs_disable-library-validation).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatformmacos_property_codesign/entitlements/location"></div>

[`bool`](class_bool.md) **codesign/entitlements/location** <div id="class_editorexportplatformmacos_property_codesign/entitlements/location"></div>

Enable if you need to use location information from Location Services, if it's enabled you should also provide usage message in the [`privacy/location_usage_description`](class_editorexportplatformmacos.md#class_editorexportplatformmacos_property_privacy/location_usage_description) option. See [*com.apple.security.personal-information.location*](https://developer.apple.com/documentation/bundleresources/entitlements/com_apple_security_personal-information_location).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatformmacos_property_codesign/entitlements/photos_library"></div>

[`bool`](class_bool.md) **codesign/entitlements/photos_library** <div id="class_editorexportplatformmacos_property_codesign/entitlements/photos_library"></div>

Enable to allow access to the user's Photos library, if it's enabled you should also provide usage message in the [`privacy/photos_library_usage_description`](class_editorexportplatformmacos.md#class_editorexportplatformmacos_property_privacy/photos_library_usage_description) option. See [*com.apple.security.personal-information.photos-library*](https://developer.apple.com/documentation/bundleresources/entitlements/com_apple_security_personal-information_photos-library).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatformmacos_property_codesign/identity"></div>

[`String`](class_string.md) **codesign/identity** <div id="class_editorexportplatformmacos_property_codesign/identity"></div>

The "Full Name", "Common Name" or SHA-1 hash of the signing identity used to sign `.app` bundle.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatformmacos_property_codesign/installer_identity"></div>

[`String`](class_string.md) **codesign/installer_identity** <div id="class_editorexportplatformmacos_property_codesign/installer_identity"></div>

The "Full Name", "Common Name" or SHA-1 hash of the signing identity used to sign `.pkg` installer package for App Store distribution, use `3rd Party Mac Developer Installer: Name.` identity.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatformmacos_property_codesign/provisioning_profile"></div>

[`String`](class_string.md) **codesign/provisioning_profile** <div id="class_editorexportplatformmacos_property_codesign/provisioning_profile"></div>

Provisioning profile file downloaded from Apple developer account dashboard. See [*Edit, download, or delete provisioning profiles*](https://developer.apple.com/help/account/manage-profiles/edit-download-or-delete-profiles).

Can be overridden with the environment variable `GODOT_MACOS_CODESIGN_PROVISIONING_PROFILE`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatformmacos_property_custom_template/debug"></div>

[`String`](class_string.md) **custom_template/debug** <div id="class_editorexportplatformmacos_property_custom_template/debug"></div>

Path to the custom export template. If left empty, default template is used.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatformmacos_property_custom_template/release"></div>

[`String`](class_string.md) **custom_template/release** <div id="class_editorexportplatformmacos_property_custom_template/release"></div>

Path to the custom export template. If left empty, default template is used.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatformmacos_property_debug/export_console_wrapper"></div>

[`int`](class_int.md) **debug/export_console_wrapper** <div id="class_editorexportplatformmacos_property_debug/export_console_wrapper"></div>

If enabled, a wrapper that can be used to run the application with console output is created alongside the exported application.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatformmacos_property_display/high_res"></div>

[`bool`](class_bool.md) **display/high_res** <div id="class_editorexportplatformmacos_property_display/high_res"></div>

If `true`, the application is rendered at native display resolution, otherwise it is always rendered at loDPI resolution and upscaled by OS when required.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatformmacos_property_export/distribution_type"></div>

[`int`](class_int.md) **export/distribution_type** <div id="class_editorexportplatformmacos_property_export/distribution_type"></div>

Application distribution target.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatformmacos_property_notarization/api_key"></div>

[`String`](class_string.md) **notarization/api_key** <div id="class_editorexportplatformmacos_property_notarization/api_key"></div>

Apple App Store Connect API issuer key file.

Can be overridden with the environment variable `GODOT_MACOS_NOTARIZATION_API_KEY`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatformmacos_property_notarization/api_key_id"></div>

[`String`](class_string.md) **notarization/api_key_id** <div id="class_editorexportplatformmacos_property_notarization/api_key_id"></div>

Apple App Store Connect API issuer key ID.

Can be overridden with the environment variable `GODOT_MACOS_NOTARIZATION_API_KEY_ID`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatformmacos_property_notarization/api_uuid"></div>

[`String`](class_string.md) **notarization/api_uuid** <div id="class_editorexportplatformmacos_property_notarization/api_uuid"></div>

Apple App Store Connect API issuer UUID.

Can be overridden with the environment variable `GODOT_MACOS_NOTARIZATION_API_UUID`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatformmacos_property_notarization/apple_id_name"></div>

[`String`](class_string.md) **notarization/apple_id_name** <div id="class_editorexportplatformmacos_property_notarization/apple_id_name"></div>

Apple ID account name (email address).

Can be overridden with the environment variable `GODOT_MACOS_NOTARIZATION_APPLE_ID_NAME`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatformmacos_property_notarization/apple_id_password"></div>

[`String`](class_string.md) **notarization/apple_id_password** <div id="class_editorexportplatformmacos_property_notarization/apple_id_password"></div>

Apple ID app-specific password.

Can be overridden with the environment variable `GODOT_MACOS_NOTARIZATION_APPLE_ID_PASSWORD`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatformmacos_property_notarization/notarization"></div>

[`int`](class_int.md) **notarization/notarization** <div id="class_editorexportplatformmacos_property_notarization/notarization"></div>

Tool to use for notarization.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatformmacos_property_privacy/address_book_usage_description"></div>

[`String`](class_string.md) **privacy/address_book_usage_description** <div id="class_editorexportplatformmacos_property_privacy/address_book_usage_description"></div>

A message displayed when requesting access to the user's contacts (in English).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatformmacos_property_privacy/address_book_usage_description_localized"></div>

[`Dictionary`](class_dictionary.md) **privacy/address_book_usage_description_localized** <div id="class_editorexportplatformmacos_property_privacy/address_book_usage_description_localized"></div>

A message displayed when requesting access to the user's contacts (localized).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatformmacos_property_privacy/calendar_usage_description"></div>

[`String`](class_string.md) **privacy/calendar_usage_description** <div id="class_editorexportplatformmacos_property_privacy/calendar_usage_description"></div>

A message displayed when requesting access to the user's calendar data (in English).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatformmacos_property_privacy/calendar_usage_description_localized"></div>

[`Dictionary`](class_dictionary.md) **privacy/calendar_usage_description_localized** <div id="class_editorexportplatformmacos_property_privacy/calendar_usage_description_localized"></div>

A message displayed when requesting access to the user's calendar data (localized).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatformmacos_property_privacy/camera_usage_description"></div>

[`String`](class_string.md) **privacy/camera_usage_description** <div id="class_editorexportplatformmacos_property_privacy/camera_usage_description"></div>

A message displayed when requesting access to the device's camera (in English).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatformmacos_property_privacy/camera_usage_description_localized"></div>

[`Dictionary`](class_dictionary.md) **privacy/camera_usage_description_localized** <div id="class_editorexportplatformmacos_property_privacy/camera_usage_description_localized"></div>

A message displayed when requesting access to the device's camera (localized).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatformmacos_property_privacy/collected_data/advertising_data/collected"></div>

[`bool`](class_bool.md) **privacy/collected_data/advertising_data/collected** <div id="class_editorexportplatformmacos_property_privacy/collected_data/advertising_data/collected"></div>

Indicates whether your app collects advertising data.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatformmacos_property_privacy/collected_data/advertising_data/collection_purposes"></div>

[`int`](class_int.md) **privacy/collected_data/advertising_data/collection_purposes** <div id="class_editorexportplatformmacos_property_privacy/collected_data/advertising_data/collection_purposes"></div>

The reasons your app collects advertising data. See [*Describing data use in privacy manifests*](https://developer.apple.com/documentation/bundleresources/privacy_manifest_files/describing_data_use_in_privacy_manifests).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatformmacos_property_privacy/collected_data/advertising_data/linked_to_user"></div>

[`bool`](class_bool.md) **privacy/collected_data/advertising_data/linked_to_user** <div id="class_editorexportplatformmacos_property_privacy/collected_data/advertising_data/linked_to_user"></div>

Indicates whether your app links advertising data to the user's identity.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatformmacos_property_privacy/collected_data/advertising_data/used_for_tracking"></div>

[`bool`](class_bool.md) **privacy/collected_data/advertising_data/used_for_tracking** <div id="class_editorexportplatformmacos_property_privacy/collected_data/advertising_data/used_for_tracking"></div>

Indicates whether your app uses advertising data for tracking.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatformmacos_property_privacy/collected_data/audio_data/collected"></div>

[`bool`](class_bool.md) **privacy/collected_data/audio_data/collected** <div id="class_editorexportplatformmacos_property_privacy/collected_data/audio_data/collected"></div>

Indicates whether your app collects audio data.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatformmacos_property_privacy/collected_data/audio_data/collection_purposes"></div>

[`int`](class_int.md) **privacy/collected_data/audio_data/collection_purposes** <div id="class_editorexportplatformmacos_property_privacy/collected_data/audio_data/collection_purposes"></div>

The reasons your app collects audio data. See [*Describing data use in privacy manifests*](https://developer.apple.com/documentation/bundleresources/privacy_manifest_files/describing_data_use_in_privacy_manifests).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatformmacos_property_privacy/collected_data/audio_data/linked_to_user"></div>

[`bool`](class_bool.md) **privacy/collected_data/audio_data/linked_to_user** <div id="class_editorexportplatformmacos_property_privacy/collected_data/audio_data/linked_to_user"></div>

Indicates whether your app links audio data to the user's identity.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatformmacos_property_privacy/collected_data/audio_data/used_for_tracking"></div>

[`bool`](class_bool.md) **privacy/collected_data/audio_data/used_for_tracking** <div id="class_editorexportplatformmacos_property_privacy/collected_data/audio_data/used_for_tracking"></div>

Indicates whether your app uses audio data for tracking.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatformmacos_property_privacy/collected_data/browsing_history/collected"></div>

[`bool`](class_bool.md) **privacy/collected_data/browsing_history/collected** <div id="class_editorexportplatformmacos_property_privacy/collected_data/browsing_history/collected"></div>

Indicates whether your app collects browsing history.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatformmacos_property_privacy/collected_data/browsing_history/collection_purposes"></div>

[`int`](class_int.md) **privacy/collected_data/browsing_history/collection_purposes** <div id="class_editorexportplatformmacos_property_privacy/collected_data/browsing_history/collection_purposes"></div>

The reasons your app collects browsing history. See [*Describing data use in privacy manifests*](https://developer.apple.com/documentation/bundleresources/privacy_manifest_files/describing_data_use_in_privacy_manifests).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatformmacos_property_privacy/collected_data/browsing_history/linked_to_user"></div>

[`bool`](class_bool.md) **privacy/collected_data/browsing_history/linked_to_user** <div id="class_editorexportplatformmacos_property_privacy/collected_data/browsing_history/linked_to_user"></div>

Indicates whether your app links browsing history to the user's identity.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatformmacos_property_privacy/collected_data/browsing_history/used_for_tracking"></div>

[`bool`](class_bool.md) **privacy/collected_data/browsing_history/used_for_tracking** <div id="class_editorexportplatformmacos_property_privacy/collected_data/browsing_history/used_for_tracking"></div>

Indicates whether your app uses browsing history for tracking.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatformmacos_property_privacy/collected_data/coarse_location/collected"></div>

[`bool`](class_bool.md) **privacy/collected_data/coarse_location/collected** <div id="class_editorexportplatformmacos_property_privacy/collected_data/coarse_location/collected"></div>

Indicates whether your app collects coarse location data.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatformmacos_property_privacy/collected_data/coarse_location/collection_purposes"></div>

[`int`](class_int.md) **privacy/collected_data/coarse_location/collection_purposes** <div id="class_editorexportplatformmacos_property_privacy/collected_data/coarse_location/collection_purposes"></div>

The reasons your app collects coarse location data. See [*Describing data use in privacy manifests*](https://developer.apple.com/documentation/bundleresources/privacy_manifest_files/describing_data_use_in_privacy_manifests).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatformmacos_property_privacy/collected_data/coarse_location/linked_to_user"></div>

[`bool`](class_bool.md) **privacy/collected_data/coarse_location/linked_to_user** <div id="class_editorexportplatformmacos_property_privacy/collected_data/coarse_location/linked_to_user"></div>

Indicates whether your app links coarse location data to the user's identity.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatformmacos_property_privacy/collected_data/coarse_location/used_for_tracking"></div>

[`bool`](class_bool.md) **privacy/collected_data/coarse_location/used_for_tracking** <div id="class_editorexportplatformmacos_property_privacy/collected_data/coarse_location/used_for_tracking"></div>

Indicates whether your app uses coarse location data for tracking.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatformmacos_property_privacy/collected_data/contacts/collected"></div>

[`bool`](class_bool.md) **privacy/collected_data/contacts/collected** <div id="class_editorexportplatformmacos_property_privacy/collected_data/contacts/collected"></div>

Indicates whether your app collects contacts.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatformmacos_property_privacy/collected_data/contacts/collection_purposes"></div>

[`int`](class_int.md) **privacy/collected_data/contacts/collection_purposes** <div id="class_editorexportplatformmacos_property_privacy/collected_data/contacts/collection_purposes"></div>

The reasons your app collects contacts. See [*Describing data use in privacy manifests*](https://developer.apple.com/documentation/bundleresources/privacy_manifest_files/describing_data_use_in_privacy_manifests).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatformmacos_property_privacy/collected_data/contacts/linked_to_user"></div>

[`bool`](class_bool.md) **privacy/collected_data/contacts/linked_to_user** <div id="class_editorexportplatformmacos_property_privacy/collected_data/contacts/linked_to_user"></div>

Indicates whether your app links contacts to the user's identity.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatformmacos_property_privacy/collected_data/contacts/used_for_tracking"></div>

[`bool`](class_bool.md) **privacy/collected_data/contacts/used_for_tracking** <div id="class_editorexportplatformmacos_property_privacy/collected_data/contacts/used_for_tracking"></div>

Indicates whether your app uses contacts for tracking.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatformmacos_property_privacy/collected_data/crash_data/collected"></div>

[`bool`](class_bool.md) **privacy/collected_data/crash_data/collected** <div id="class_editorexportplatformmacos_property_privacy/collected_data/crash_data/collected"></div>

Indicates whether your app collects crash data.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatformmacos_property_privacy/collected_data/crash_data/collection_purposes"></div>

[`int`](class_int.md) **privacy/collected_data/crash_data/collection_purposes** <div id="class_editorexportplatformmacos_property_privacy/collected_data/crash_data/collection_purposes"></div>

The reasons your app collects crash data. See [*Describing data use in privacy manifests*](https://developer.apple.com/documentation/bundleresources/privacy_manifest_files/describing_data_use_in_privacy_manifests).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatformmacos_property_privacy/collected_data/crash_data/linked_to_user"></div>

[`bool`](class_bool.md) **privacy/collected_data/crash_data/linked_to_user** <div id="class_editorexportplatformmacos_property_privacy/collected_data/crash_data/linked_to_user"></div>

Indicates whether your app links crash data to the user's identity.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatformmacos_property_privacy/collected_data/crash_data/used_for_tracking"></div>

[`bool`](class_bool.md) **privacy/collected_data/crash_data/used_for_tracking** <div id="class_editorexportplatformmacos_property_privacy/collected_data/crash_data/used_for_tracking"></div>

Indicates whether your app uses crash data for tracking.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatformmacos_property_privacy/collected_data/credit_info/collected"></div>

[`bool`](class_bool.md) **privacy/collected_data/credit_info/collected** <div id="class_editorexportplatformmacos_property_privacy/collected_data/credit_info/collected"></div>

Indicates whether your app collects credit information.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatformmacos_property_privacy/collected_data/credit_info/collection_purposes"></div>

[`int`](class_int.md) **privacy/collected_data/credit_info/collection_purposes** <div id="class_editorexportplatformmacos_property_privacy/collected_data/credit_info/collection_purposes"></div>

The reasons your app collects credit information. See [*Describing data use in privacy manifests*](https://developer.apple.com/documentation/bundleresources/privacy_manifest_files/describing_data_use_in_privacy_manifests).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatformmacos_property_privacy/collected_data/credit_info/linked_to_user"></div>

[`bool`](class_bool.md) **privacy/collected_data/credit_info/linked_to_user** <div id="class_editorexportplatformmacos_property_privacy/collected_data/credit_info/linked_to_user"></div>

Indicates whether your app links credit information to the user's identity.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatformmacos_property_privacy/collected_data/credit_info/used_for_tracking"></div>

[`bool`](class_bool.md) **privacy/collected_data/credit_info/used_for_tracking** <div id="class_editorexportplatformmacos_property_privacy/collected_data/credit_info/used_for_tracking"></div>

Indicates whether your app uses credit information for tracking.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatformmacos_property_privacy/collected_data/customer_support/collected"></div>

[`bool`](class_bool.md) **privacy/collected_data/customer_support/collected** <div id="class_editorexportplatformmacos_property_privacy/collected_data/customer_support/collected"></div>

Indicates whether your app collects customer support data.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatformmacos_property_privacy/collected_data/customer_support/collection_purposes"></div>

[`int`](class_int.md) **privacy/collected_data/customer_support/collection_purposes** <div id="class_editorexportplatformmacos_property_privacy/collected_data/customer_support/collection_purposes"></div>

The reasons your app collects customer support data. See [*Describing data use in privacy manifests*](https://developer.apple.com/documentation/bundleresources/privacy_manifest_files/describing_data_use_in_privacy_manifests).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatformmacos_property_privacy/collected_data/customer_support/linked_to_user"></div>

[`bool`](class_bool.md) **privacy/collected_data/customer_support/linked_to_user** <div id="class_editorexportplatformmacos_property_privacy/collected_data/customer_support/linked_to_user"></div>

Indicates whether your app links customer support data to the user's identity.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatformmacos_property_privacy/collected_data/customer_support/used_for_tracking"></div>

[`bool`](class_bool.md) **privacy/collected_data/customer_support/used_for_tracking** <div id="class_editorexportplatformmacos_property_privacy/collected_data/customer_support/used_for_tracking"></div>

Indicates whether your app uses customer support data for tracking.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatformmacos_property_privacy/collected_data/device_id/collected"></div>

[`bool`](class_bool.md) **privacy/collected_data/device_id/collected** <div id="class_editorexportplatformmacos_property_privacy/collected_data/device_id/collected"></div>

Indicates whether your app collects device IDs.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatformmacos_property_privacy/collected_data/device_id/collection_purposes"></div>

[`int`](class_int.md) **privacy/collected_data/device_id/collection_purposes** <div id="class_editorexportplatformmacos_property_privacy/collected_data/device_id/collection_purposes"></div>

The reasons your app collects device IDs. See [*Describing data use in privacy manifests*](https://developer.apple.com/documentation/bundleresources/privacy_manifest_files/describing_data_use_in_privacy_manifests).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatformmacos_property_privacy/collected_data/device_id/linked_to_user"></div>

[`bool`](class_bool.md) **privacy/collected_data/device_id/linked_to_user** <div id="class_editorexportplatformmacos_property_privacy/collected_data/device_id/linked_to_user"></div>

Indicates whether your app links device IDs to the user's identity.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatformmacos_property_privacy/collected_data/device_id/used_for_tracking"></div>

[`bool`](class_bool.md) **privacy/collected_data/device_id/used_for_tracking** <div id="class_editorexportplatformmacos_property_privacy/collected_data/device_id/used_for_tracking"></div>

Indicates whether your app uses device IDs for tracking.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatformmacos_property_privacy/collected_data/email_address/collected"></div>

[`bool`](class_bool.md) **privacy/collected_data/email_address/collected** <div id="class_editorexportplatformmacos_property_privacy/collected_data/email_address/collected"></div>

Indicates whether your app collects email address.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatformmacos_property_privacy/collected_data/email_address/collection_purposes"></div>

[`int`](class_int.md) **privacy/collected_data/email_address/collection_purposes** <div id="class_editorexportplatformmacos_property_privacy/collected_data/email_address/collection_purposes"></div>

The reasons your app collects email address. See [*Describing data use in privacy manifests*](https://developer.apple.com/documentation/bundleresources/privacy_manifest_files/describing_data_use_in_privacy_manifests).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatformmacos_property_privacy/collected_data/email_address/linked_to_user"></div>

[`bool`](class_bool.md) **privacy/collected_data/email_address/linked_to_user** <div id="class_editorexportplatformmacos_property_privacy/collected_data/email_address/linked_to_user"></div>

Indicates whether your app links email address to the user's identity.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatformmacos_property_privacy/collected_data/email_address/used_for_tracking"></div>

[`bool`](class_bool.md) **privacy/collected_data/email_address/used_for_tracking** <div id="class_editorexportplatformmacos_property_privacy/collected_data/email_address/used_for_tracking"></div>

Indicates whether your app uses email address for tracking.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatformmacos_property_privacy/collected_data/emails_or_text_messages/collected"></div>

[`bool`](class_bool.md) **privacy/collected_data/emails_or_text_messages/collected** <div id="class_editorexportplatformmacos_property_privacy/collected_data/emails_or_text_messages/collected"></div>

Indicates whether your app collects emails or text messages.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatformmacos_property_privacy/collected_data/emails_or_text_messages/collection_purposes"></div>

[`int`](class_int.md) **privacy/collected_data/emails_or_text_messages/collection_purposes** <div id="class_editorexportplatformmacos_property_privacy/collected_data/emails_or_text_messages/collection_purposes"></div>

The reasons your app collects emails or text messages. See [*Describing data use in privacy manifests*](https://developer.apple.com/documentation/bundleresources/privacy_manifest_files/describing_data_use_in_privacy_manifests).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatformmacos_property_privacy/collected_data/emails_or_text_messages/linked_to_user"></div>

[`bool`](class_bool.md) **privacy/collected_data/emails_or_text_messages/linked_to_user** <div id="class_editorexportplatformmacos_property_privacy/collected_data/emails_or_text_messages/linked_to_user"></div>

Indicates whether your app links emails or text messages to the user's identity.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatformmacos_property_privacy/collected_data/emails_or_text_messages/used_for_tracking"></div>

[`bool`](class_bool.md) **privacy/collected_data/emails_or_text_messages/used_for_tracking** <div id="class_editorexportplatformmacos_property_privacy/collected_data/emails_or_text_messages/used_for_tracking"></div>

Indicates whether your app uses emails or text messages for tracking.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatformmacos_property_privacy/collected_data/environment_scanning/collected"></div>

[`bool`](class_bool.md) **privacy/collected_data/environment_scanning/collected** <div id="class_editorexportplatformmacos_property_privacy/collected_data/environment_scanning/collected"></div>

Indicates whether your app collects environment scanning data.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatformmacos_property_privacy/collected_data/environment_scanning/collection_purposes"></div>

[`int`](class_int.md) **privacy/collected_data/environment_scanning/collection_purposes** <div id="class_editorexportplatformmacos_property_privacy/collected_data/environment_scanning/collection_purposes"></div>

The reasons your app collects environment scanning data. See [*Describing data use in privacy manifests*](https://developer.apple.com/documentation/bundleresources/privacy_manifest_files/describing_data_use_in_privacy_manifests).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatformmacos_property_privacy/collected_data/environment_scanning/linked_to_user"></div>

[`bool`](class_bool.md) **privacy/collected_data/environment_scanning/linked_to_user** <div id="class_editorexportplatformmacos_property_privacy/collected_data/environment_scanning/linked_to_user"></div>

Indicates whether your app links environment scanning data to the user's identity.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatformmacos_property_privacy/collected_data/environment_scanning/used_for_tracking"></div>

[`bool`](class_bool.md) **privacy/collected_data/environment_scanning/used_for_tracking** <div id="class_editorexportplatformmacos_property_privacy/collected_data/environment_scanning/used_for_tracking"></div>

Indicates whether your app uses environment scanning data for tracking.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatformmacos_property_privacy/collected_data/fitness/collected"></div>

[`bool`](class_bool.md) **privacy/collected_data/fitness/collected** <div id="class_editorexportplatformmacos_property_privacy/collected_data/fitness/collected"></div>

Indicates whether your app collects fitness and exercise data.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatformmacos_property_privacy/collected_data/fitness/collection_purposes"></div>

[`int`](class_int.md) **privacy/collected_data/fitness/collection_purposes** <div id="class_editorexportplatformmacos_property_privacy/collected_data/fitness/collection_purposes"></div>

The reasons your app collects fitness and exercise data. See [*Describing data use in privacy manifests*](https://developer.apple.com/documentation/bundleresources/privacy_manifest_files/describing_data_use_in_privacy_manifests).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatformmacos_property_privacy/collected_data/fitness/linked_to_user"></div>

[`bool`](class_bool.md) **privacy/collected_data/fitness/linked_to_user** <div id="class_editorexportplatformmacos_property_privacy/collected_data/fitness/linked_to_user"></div>

Indicates whether your app links fitness and exercise data to the user's identity.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatformmacos_property_privacy/collected_data/fitness/used_for_tracking"></div>

[`bool`](class_bool.md) **privacy/collected_data/fitness/used_for_tracking** <div id="class_editorexportplatformmacos_property_privacy/collected_data/fitness/used_for_tracking"></div>

Indicates whether your app uses fitness and exercise data for tracking.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatformmacos_property_privacy/collected_data/gameplay_content/collected"></div>

[`bool`](class_bool.md) **privacy/collected_data/gameplay_content/collected** <div id="class_editorexportplatformmacos_property_privacy/collected_data/gameplay_content/collected"></div>

Indicates whether your app collects gameplay content.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatformmacos_property_privacy/collected_data/gameplay_content/collection_purposes"></div>

[`int`](class_int.md) **privacy/collected_data/gameplay_content/collection_purposes** <div id="class_editorexportplatformmacos_property_privacy/collected_data/gameplay_content/collection_purposes"></div>

The reasons your app collects gameplay content. See [*Describing data use in privacy manifests*](https://developer.apple.com/documentation/bundleresources/privacy_manifest_files/describing_data_use_in_privacy_manifests).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatformmacos_property_privacy/collected_data/gameplay_content/linked_to_user"></div>

[`bool`](class_bool.md) **privacy/collected_data/gameplay_content/linked_to_user** <div id="class_editorexportplatformmacos_property_privacy/collected_data/gameplay_content/linked_to_user"></div>

Indicates whether your app links gameplay content to the user's identity.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatformmacos_property_privacy/collected_data/gameplay_content/used_for_tracking"></div>

[`bool`](class_bool.md) **privacy/collected_data/gameplay_content/used_for_tracking** <div id="class_editorexportplatformmacos_property_privacy/collected_data/gameplay_content/used_for_tracking"></div>

Indicates whether your app uses gameplay content for tracking.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatformmacos_property_privacy/collected_data/hands/collected"></div>

[`bool`](class_bool.md) **privacy/collected_data/hands/collected** <div id="class_editorexportplatformmacos_property_privacy/collected_data/hands/collected"></div>

Indicates whether your app collects user's hand structure and hand movements.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatformmacos_property_privacy/collected_data/hands/collection_purposes"></div>

[`int`](class_int.md) **privacy/collected_data/hands/collection_purposes** <div id="class_editorexportplatformmacos_property_privacy/collected_data/hands/collection_purposes"></div>

The reasons your app collects user's hand structure and hand movements. See [*Describing data use in privacy manifests*](https://developer.apple.com/documentation/bundleresources/privacy_manifest_files/describing_data_use_in_privacy_manifests).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatformmacos_property_privacy/collected_data/hands/linked_to_user"></div>

[`bool`](class_bool.md) **privacy/collected_data/hands/linked_to_user** <div id="class_editorexportplatformmacos_property_privacy/collected_data/hands/linked_to_user"></div>

Indicates whether your app links user's hand structure and hand movements to the user's identity.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatformmacos_property_privacy/collected_data/hands/used_for_tracking"></div>

[`bool`](class_bool.md) **privacy/collected_data/hands/used_for_tracking** <div id="class_editorexportplatformmacos_property_privacy/collected_data/hands/used_for_tracking"></div>

Indicates whether your app uses user's hand structure and hand movements for tracking.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatformmacos_property_privacy/collected_data/head/collected"></div>

[`bool`](class_bool.md) **privacy/collected_data/head/collected** <div id="class_editorexportplatformmacos_property_privacy/collected_data/head/collected"></div>

Indicates whether your app collects user's head movement.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatformmacos_property_privacy/collected_data/head/collection_purposes"></div>

[`int`](class_int.md) **privacy/collected_data/head/collection_purposes** <div id="class_editorexportplatformmacos_property_privacy/collected_data/head/collection_purposes"></div>

The reasons your app collects user's head movement. See [*Describing data use in privacy manifests*](https://developer.apple.com/documentation/bundleresources/privacy_manifest_files/describing_data_use_in_privacy_manifests).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatformmacos_property_privacy/collected_data/head/linked_to_user"></div>

[`bool`](class_bool.md) **privacy/collected_data/head/linked_to_user** <div id="class_editorexportplatformmacos_property_privacy/collected_data/head/linked_to_user"></div>

Indicates whether your app links user's head movement to the user's identity.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatformmacos_property_privacy/collected_data/head/used_for_tracking"></div>

[`bool`](class_bool.md) **privacy/collected_data/head/used_for_tracking** <div id="class_editorexportplatformmacos_property_privacy/collected_data/head/used_for_tracking"></div>

Indicates whether your app uses user's head movement for tracking.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatformmacos_property_privacy/collected_data/health/collected"></div>

[`bool`](class_bool.md) **privacy/collected_data/health/collected** <div id="class_editorexportplatformmacos_property_privacy/collected_data/health/collected"></div>

Indicates whether your app collects health and medical data.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatformmacos_property_privacy/collected_data/health/collection_purposes"></div>

[`int`](class_int.md) **privacy/collected_data/health/collection_purposes** <div id="class_editorexportplatformmacos_property_privacy/collected_data/health/collection_purposes"></div>

The reasons your app collects health and medical data. See [*Describing data use in privacy manifests*](https://developer.apple.com/documentation/bundleresources/privacy_manifest_files/describing_data_use_in_privacy_manifests).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatformmacos_property_privacy/collected_data/health/linked_to_user"></div>

[`bool`](class_bool.md) **privacy/collected_data/health/linked_to_user** <div id="class_editorexportplatformmacos_property_privacy/collected_data/health/linked_to_user"></div>

Indicates whether your app links health and medical data to the user's identity.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatformmacos_property_privacy/collected_data/health/used_for_tracking"></div>

[`bool`](class_bool.md) **privacy/collected_data/health/used_for_tracking** <div id="class_editorexportplatformmacos_property_privacy/collected_data/health/used_for_tracking"></div>

Indicates whether your app uses health and medical data for tracking.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatformmacos_property_privacy/collected_data/name/collected"></div>

[`bool`](class_bool.md) **privacy/collected_data/name/collected** <div id="class_editorexportplatformmacos_property_privacy/collected_data/name/collected"></div>

Indicates whether your app collects user's name.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatformmacos_property_privacy/collected_data/name/collection_purposes"></div>

[`int`](class_int.md) **privacy/collected_data/name/collection_purposes** <div id="class_editorexportplatformmacos_property_privacy/collected_data/name/collection_purposes"></div>

The reasons your app collects user's name. See [*Describing data use in privacy manifests*](https://developer.apple.com/documentation/bundleresources/privacy_manifest_files/describing_data_use_in_privacy_manifests).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatformmacos_property_privacy/collected_data/name/linked_to_user"></div>

[`bool`](class_bool.md) **privacy/collected_data/name/linked_to_user** <div id="class_editorexportplatformmacos_property_privacy/collected_data/name/linked_to_user"></div>

Indicates whether your app links user's name to the user's identity.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatformmacos_property_privacy/collected_data/name/used_for_tracking"></div>

[`bool`](class_bool.md) **privacy/collected_data/name/used_for_tracking** <div id="class_editorexportplatformmacos_property_privacy/collected_data/name/used_for_tracking"></div>

Indicates whether your app uses user's name for tracking.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatformmacos_property_privacy/collected_data/other_contact_info/collected"></div>

[`bool`](class_bool.md) **privacy/collected_data/other_contact_info/collected** <div id="class_editorexportplatformmacos_property_privacy/collected_data/other_contact_info/collected"></div>

Indicates whether your app collects any other contact information.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatformmacos_property_privacy/collected_data/other_contact_info/collection_purposes"></div>

[`int`](class_int.md) **privacy/collected_data/other_contact_info/collection_purposes** <div id="class_editorexportplatformmacos_property_privacy/collected_data/other_contact_info/collection_purposes"></div>

The reasons your app collects any other contact information. See [*Describing data use in privacy manifests*](https://developer.apple.com/documentation/bundleresources/privacy_manifest_files/describing_data_use_in_privacy_manifests).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatformmacos_property_privacy/collected_data/other_contact_info/linked_to_user"></div>

[`bool`](class_bool.md) **privacy/collected_data/other_contact_info/linked_to_user** <div id="class_editorexportplatformmacos_property_privacy/collected_data/other_contact_info/linked_to_user"></div>

Indicates whether your app links any other contact information to the user's identity.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatformmacos_property_privacy/collected_data/other_contact_info/used_for_tracking"></div>

[`bool`](class_bool.md) **privacy/collected_data/other_contact_info/used_for_tracking** <div id="class_editorexportplatformmacos_property_privacy/collected_data/other_contact_info/used_for_tracking"></div>

Indicates whether your app uses any other contact information for tracking.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatformmacos_property_privacy/collected_data/other_data_types/collected"></div>

[`bool`](class_bool.md) **privacy/collected_data/other_data_types/collected** <div id="class_editorexportplatformmacos_property_privacy/collected_data/other_data_types/collected"></div>

Indicates whether your app collects any other data.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatformmacos_property_privacy/collected_data/other_data_types/collection_purposes"></div>

[`int`](class_int.md) **privacy/collected_data/other_data_types/collection_purposes** <div id="class_editorexportplatformmacos_property_privacy/collected_data/other_data_types/collection_purposes"></div>

The reasons your app collects any other data. See [*Describing data use in privacy manifests*](https://developer.apple.com/documentation/bundleresources/privacy_manifest_files/describing_data_use_in_privacy_manifests).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatformmacos_property_privacy/collected_data/other_data_types/linked_to_user"></div>

[`bool`](class_bool.md) **privacy/collected_data/other_data_types/linked_to_user** <div id="class_editorexportplatformmacos_property_privacy/collected_data/other_data_types/linked_to_user"></div>

Indicates whether your app links any other data to the user's identity.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatformmacos_property_privacy/collected_data/other_data_types/used_for_tracking"></div>

[`bool`](class_bool.md) **privacy/collected_data/other_data_types/used_for_tracking** <div id="class_editorexportplatformmacos_property_privacy/collected_data/other_data_types/used_for_tracking"></div>

Indicates whether your app uses any other data for tracking.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatformmacos_property_privacy/collected_data/other_diagnostic_data/collected"></div>

[`bool`](class_bool.md) **privacy/collected_data/other_diagnostic_data/collected** <div id="class_editorexportplatformmacos_property_privacy/collected_data/other_diagnostic_data/collected"></div>

Indicates whether your app collects any other diagnostic data.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatformmacos_property_privacy/collected_data/other_diagnostic_data/collection_purposes"></div>

[`int`](class_int.md) **privacy/collected_data/other_diagnostic_data/collection_purposes** <div id="class_editorexportplatformmacos_property_privacy/collected_data/other_diagnostic_data/collection_purposes"></div>

The reasons your app collects any other diagnostic data. See [*Describing data use in privacy manifests*](https://developer.apple.com/documentation/bundleresources/privacy_manifest_files/describing_data_use_in_privacy_manifests).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatformmacos_property_privacy/collected_data/other_diagnostic_data/linked_to_user"></div>

[`bool`](class_bool.md) **privacy/collected_data/other_diagnostic_data/linked_to_user** <div id="class_editorexportplatformmacos_property_privacy/collected_data/other_diagnostic_data/linked_to_user"></div>

Indicates whether your app links any other diagnostic data to the user's identity.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatformmacos_property_privacy/collected_data/other_diagnostic_data/used_for_tracking"></div>

[`bool`](class_bool.md) **privacy/collected_data/other_diagnostic_data/used_for_tracking** <div id="class_editorexportplatformmacos_property_privacy/collected_data/other_diagnostic_data/used_for_tracking"></div>

Indicates whether your app uses any other diagnostic data for tracking.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatformmacos_property_privacy/collected_data/other_financial_info/collected"></div>

[`bool`](class_bool.md) **privacy/collected_data/other_financial_info/collected** <div id="class_editorexportplatformmacos_property_privacy/collected_data/other_financial_info/collected"></div>

Indicates whether your app collects any other financial information.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatformmacos_property_privacy/collected_data/other_financial_info/collection_purposes"></div>

[`int`](class_int.md) **privacy/collected_data/other_financial_info/collection_purposes** <div id="class_editorexportplatformmacos_property_privacy/collected_data/other_financial_info/collection_purposes"></div>

The reasons your app collects any other financial information. See [*Describing data use in privacy manifests*](https://developer.apple.com/documentation/bundleresources/privacy_manifest_files/describing_data_use_in_privacy_manifests).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatformmacos_property_privacy/collected_data/other_financial_info/linked_to_user"></div>

[`bool`](class_bool.md) **privacy/collected_data/other_financial_info/linked_to_user** <div id="class_editorexportplatformmacos_property_privacy/collected_data/other_financial_info/linked_to_user"></div>

Indicates whether your app links any other financial information to the user's identity.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatformmacos_property_privacy/collected_data/other_financial_info/used_for_tracking"></div>

[`bool`](class_bool.md) **privacy/collected_data/other_financial_info/used_for_tracking** <div id="class_editorexportplatformmacos_property_privacy/collected_data/other_financial_info/used_for_tracking"></div>

Indicates whether your app uses any other financial information for tracking.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatformmacos_property_privacy/collected_data/other_usage_data/collected"></div>

[`bool`](class_bool.md) **privacy/collected_data/other_usage_data/collected** <div id="class_editorexportplatformmacos_property_privacy/collected_data/other_usage_data/collected"></div>

Indicates whether your app collects any other usage data.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatformmacos_property_privacy/collected_data/other_usage_data/collection_purposes"></div>

[`int`](class_int.md) **privacy/collected_data/other_usage_data/collection_purposes** <div id="class_editorexportplatformmacos_property_privacy/collected_data/other_usage_data/collection_purposes"></div>

The reasons your app collects any other usage data. See [*Describing data use in privacy manifests*](https://developer.apple.com/documentation/bundleresources/privacy_manifest_files/describing_data_use_in_privacy_manifests).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatformmacos_property_privacy/collected_data/other_usage_data/linked_to_user"></div>

[`bool`](class_bool.md) **privacy/collected_data/other_usage_data/linked_to_user** <div id="class_editorexportplatformmacos_property_privacy/collected_data/other_usage_data/linked_to_user"></div>

Indicates whether your app links any other usage data to the user's identity.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatformmacos_property_privacy/collected_data/other_usage_data/used_for_tracking"></div>

[`bool`](class_bool.md) **privacy/collected_data/other_usage_data/used_for_tracking** <div id="class_editorexportplatformmacos_property_privacy/collected_data/other_usage_data/used_for_tracking"></div>

Indicates whether your app uses any other usage data for tracking.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatformmacos_property_privacy/collected_data/other_user_content/collected"></div>

[`bool`](class_bool.md) **privacy/collected_data/other_user_content/collected** <div id="class_editorexportplatformmacos_property_privacy/collected_data/other_user_content/collected"></div>

Indicates whether your app collects any other user generated content.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatformmacos_property_privacy/collected_data/other_user_content/collection_purposes"></div>

[`int`](class_int.md) **privacy/collected_data/other_user_content/collection_purposes** <div id="class_editorexportplatformmacos_property_privacy/collected_data/other_user_content/collection_purposes"></div>

The reasons your app collects any other user generated content. See [*Describing data use in privacy manifests*](https://developer.apple.com/documentation/bundleresources/privacy_manifest_files/describing_data_use_in_privacy_manifests).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatformmacos_property_privacy/collected_data/other_user_content/linked_to_user"></div>

[`bool`](class_bool.md) **privacy/collected_data/other_user_content/linked_to_user** <div id="class_editorexportplatformmacos_property_privacy/collected_data/other_user_content/linked_to_user"></div>

Indicates whether your app links any other user generated content to the user's identity.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatformmacos_property_privacy/collected_data/other_user_content/used_for_tracking"></div>

[`bool`](class_bool.md) **privacy/collected_data/other_user_content/used_for_tracking** <div id="class_editorexportplatformmacos_property_privacy/collected_data/other_user_content/used_for_tracking"></div>

Indicates whether your app uses any other user generated content for tracking.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatformmacos_property_privacy/collected_data/payment_info/collected"></div>

[`bool`](class_bool.md) **privacy/collected_data/payment_info/collected** <div id="class_editorexportplatformmacos_property_privacy/collected_data/payment_info/collected"></div>

Indicates whether your app collects payment information.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatformmacos_property_privacy/collected_data/payment_info/collection_purposes"></div>

[`int`](class_int.md) **privacy/collected_data/payment_info/collection_purposes** <div id="class_editorexportplatformmacos_property_privacy/collected_data/payment_info/collection_purposes"></div>

The reasons your app collects payment information. See [*Describing data use in privacy manifests*](https://developer.apple.com/documentation/bundleresources/privacy_manifest_files/describing_data_use_in_privacy_manifests).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatformmacos_property_privacy/collected_data/payment_info/linked_to_user"></div>

[`bool`](class_bool.md) **privacy/collected_data/payment_info/linked_to_user** <div id="class_editorexportplatformmacos_property_privacy/collected_data/payment_info/linked_to_user"></div>

Indicates whether your app links payment information to the user's identity.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatformmacos_property_privacy/collected_data/payment_info/used_for_tracking"></div>

[`bool`](class_bool.md) **privacy/collected_data/payment_info/used_for_tracking** <div id="class_editorexportplatformmacos_property_privacy/collected_data/payment_info/used_for_tracking"></div>

Indicates whether your app uses payment information for tracking.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatformmacos_property_privacy/collected_data/performance_data/collected"></div>

[`bool`](class_bool.md) **privacy/collected_data/performance_data/collected** <div id="class_editorexportplatformmacos_property_privacy/collected_data/performance_data/collected"></div>

Indicates whether your app collects performance data.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatformmacos_property_privacy/collected_data/performance_data/collection_purposes"></div>

[`int`](class_int.md) **privacy/collected_data/performance_data/collection_purposes** <div id="class_editorexportplatformmacos_property_privacy/collected_data/performance_data/collection_purposes"></div>

The reasons your app collects performance data. See [*Describing data use in privacy manifests*](https://developer.apple.com/documentation/bundleresources/privacy_manifest_files/describing_data_use_in_privacy_manifests).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatformmacos_property_privacy/collected_data/performance_data/linked_to_user"></div>

[`bool`](class_bool.md) **privacy/collected_data/performance_data/linked_to_user** <div id="class_editorexportplatformmacos_property_privacy/collected_data/performance_data/linked_to_user"></div>

Indicates whether your app links performance data to the user's identity.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatformmacos_property_privacy/collected_data/performance_data/used_for_tracking"></div>

[`bool`](class_bool.md) **privacy/collected_data/performance_data/used_for_tracking** <div id="class_editorexportplatformmacos_property_privacy/collected_data/performance_data/used_for_tracking"></div>

Indicates whether your app uses performance data for tracking.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatformmacos_property_privacy/collected_data/phone_number/collected"></div>

[`bool`](class_bool.md) **privacy/collected_data/phone_number/collected** <div id="class_editorexportplatformmacos_property_privacy/collected_data/phone_number/collected"></div>

Indicates whether your app collects phone number.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatformmacos_property_privacy/collected_data/phone_number/collection_purposes"></div>

[`int`](class_int.md) **privacy/collected_data/phone_number/collection_purposes** <div id="class_editorexportplatformmacos_property_privacy/collected_data/phone_number/collection_purposes"></div>

The reasons your app collects phone number. See [*Describing data use in privacy manifests*](https://developer.apple.com/documentation/bundleresources/privacy_manifest_files/describing_data_use_in_privacy_manifests).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatformmacos_property_privacy/collected_data/phone_number/linked_to_user"></div>

[`bool`](class_bool.md) **privacy/collected_data/phone_number/linked_to_user** <div id="class_editorexportplatformmacos_property_privacy/collected_data/phone_number/linked_to_user"></div>

Indicates whether your app links phone number to the user's identity.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatformmacos_property_privacy/collected_data/phone_number/used_for_tracking"></div>

[`bool`](class_bool.md) **privacy/collected_data/phone_number/used_for_tracking** <div id="class_editorexportplatformmacos_property_privacy/collected_data/phone_number/used_for_tracking"></div>

Indicates whether your app uses phone number for tracking.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatformmacos_property_privacy/collected_data/photos_or_videos/collected"></div>

[`bool`](class_bool.md) **privacy/collected_data/photos_or_videos/collected** <div id="class_editorexportplatformmacos_property_privacy/collected_data/photos_or_videos/collected"></div>

Indicates whether your app collects photos or videos.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatformmacos_property_privacy/collected_data/photos_or_videos/collection_purposes"></div>

[`int`](class_int.md) **privacy/collected_data/photos_or_videos/collection_purposes** <div id="class_editorexportplatformmacos_property_privacy/collected_data/photos_or_videos/collection_purposes"></div>

The reasons your app collects photos or videos. See [*Describing data use in privacy manifests*](https://developer.apple.com/documentation/bundleresources/privacy_manifest_files/describing_data_use_in_privacy_manifests).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatformmacos_property_privacy/collected_data/photos_or_videos/linked_to_user"></div>

[`bool`](class_bool.md) **privacy/collected_data/photos_or_videos/linked_to_user** <div id="class_editorexportplatformmacos_property_privacy/collected_data/photos_or_videos/linked_to_user"></div>

Indicates whether your app links photos or videos to the user's identity.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatformmacos_property_privacy/collected_data/photos_or_videos/used_for_tracking"></div>

[`bool`](class_bool.md) **privacy/collected_data/photos_or_videos/used_for_tracking** <div id="class_editorexportplatformmacos_property_privacy/collected_data/photos_or_videos/used_for_tracking"></div>

Indicates whether your app uses photos or videos for tracking.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatformmacos_property_privacy/collected_data/physical_address/collected"></div>

[`bool`](class_bool.md) **privacy/collected_data/physical_address/collected** <div id="class_editorexportplatformmacos_property_privacy/collected_data/physical_address/collected"></div>

Indicates whether your app collects physical address.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatformmacos_property_privacy/collected_data/physical_address/collection_purposes"></div>

[`int`](class_int.md) **privacy/collected_data/physical_address/collection_purposes** <div id="class_editorexportplatformmacos_property_privacy/collected_data/physical_address/collection_purposes"></div>

The reasons your app collects physical address. See [*Describing data use in privacy manifests*](https://developer.apple.com/documentation/bundleresources/privacy_manifest_files/describing_data_use_in_privacy_manifests).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatformmacos_property_privacy/collected_data/physical_address/linked_to_user"></div>

[`bool`](class_bool.md) **privacy/collected_data/physical_address/linked_to_user** <div id="class_editorexportplatformmacos_property_privacy/collected_data/physical_address/linked_to_user"></div>

Indicates whether your app links physical address to the user's identity.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatformmacos_property_privacy/collected_data/physical_address/used_for_tracking"></div>

[`bool`](class_bool.md) **privacy/collected_data/physical_address/used_for_tracking** <div id="class_editorexportplatformmacos_property_privacy/collected_data/physical_address/used_for_tracking"></div>

Indicates whether your app uses physical address for tracking.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatformmacos_property_privacy/collected_data/precise_location/collected"></div>

[`bool`](class_bool.md) **privacy/collected_data/precise_location/collected** <div id="class_editorexportplatformmacos_property_privacy/collected_data/precise_location/collected"></div>

Indicates whether your app collects precise location data.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatformmacos_property_privacy/collected_data/precise_location/collection_purposes"></div>

[`int`](class_int.md) **privacy/collected_data/precise_location/collection_purposes** <div id="class_editorexportplatformmacos_property_privacy/collected_data/precise_location/collection_purposes"></div>

The reasons your app collects precise location data. See [*Describing data use in privacy manifests*](https://developer.apple.com/documentation/bundleresources/privacy_manifest_files/describing_data_use_in_privacy_manifests).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatformmacos_property_privacy/collected_data/precise_location/linked_to_user"></div>

[`bool`](class_bool.md) **privacy/collected_data/precise_location/linked_to_user** <div id="class_editorexportplatformmacos_property_privacy/collected_data/precise_location/linked_to_user"></div>

Indicates whether your app links precise location data to the user's identity.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatformmacos_property_privacy/collected_data/precise_location/used_for_tracking"></div>

[`bool`](class_bool.md) **privacy/collected_data/precise_location/used_for_tracking** <div id="class_editorexportplatformmacos_property_privacy/collected_data/precise_location/used_for_tracking"></div>

Indicates whether your app uses precise location data for tracking.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatformmacos_property_privacy/collected_data/product_interaction/collected"></div>

[`bool`](class_bool.md) **privacy/collected_data/product_interaction/collected** <div id="class_editorexportplatformmacos_property_privacy/collected_data/product_interaction/collected"></div>

Indicates whether your app collects product interaction data.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatformmacos_property_privacy/collected_data/product_interaction/collection_purposes"></div>

[`int`](class_int.md) **privacy/collected_data/product_interaction/collection_purposes** <div id="class_editorexportplatformmacos_property_privacy/collected_data/product_interaction/collection_purposes"></div>

The reasons your app collects product interaction data. See [*Describing data use in privacy manifests*](https://developer.apple.com/documentation/bundleresources/privacy_manifest_files/describing_data_use_in_privacy_manifests).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatformmacos_property_privacy/collected_data/product_interaction/linked_to_user"></div>

[`bool`](class_bool.md) **privacy/collected_data/product_interaction/linked_to_user** <div id="class_editorexportplatformmacos_property_privacy/collected_data/product_interaction/linked_to_user"></div>

Indicates whether your app links product interaction data to the user's identity.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatformmacos_property_privacy/collected_data/product_interaction/used_for_tracking"></div>

[`bool`](class_bool.md) **privacy/collected_data/product_interaction/used_for_tracking** <div id="class_editorexportplatformmacos_property_privacy/collected_data/product_interaction/used_for_tracking"></div>

Indicates whether your app uses product interaction data for tracking.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatformmacos_property_privacy/collected_data/purchase_history/collected"></div>

[`bool`](class_bool.md) **privacy/collected_data/purchase_history/collected** <div id="class_editorexportplatformmacos_property_privacy/collected_data/purchase_history/collected"></div>

Indicates whether your app collects purchase history.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatformmacos_property_privacy/collected_data/purchase_history/collection_purposes"></div>

[`int`](class_int.md) **privacy/collected_data/purchase_history/collection_purposes** <div id="class_editorexportplatformmacos_property_privacy/collected_data/purchase_history/collection_purposes"></div>

The reasons your app collects purchase history. See [*Describing data use in privacy manifests*](https://developer.apple.com/documentation/bundleresources/privacy_manifest_files/describing_data_use_in_privacy_manifests).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatformmacos_property_privacy/collected_data/purchase_history/linked_to_user"></div>

[`bool`](class_bool.md) **privacy/collected_data/purchase_history/linked_to_user** <div id="class_editorexportplatformmacos_property_privacy/collected_data/purchase_history/linked_to_user"></div>

Indicates whether your app links purchase history to the user's identity.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatformmacos_property_privacy/collected_data/purchase_history/used_for_tracking"></div>

[`bool`](class_bool.md) **privacy/collected_data/purchase_history/used_for_tracking** <div id="class_editorexportplatformmacos_property_privacy/collected_data/purchase_history/used_for_tracking"></div>

Indicates whether your app uses purchase history for tracking.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatformmacos_property_privacy/collected_data/search_hhistory/collected"></div>

[`bool`](class_bool.md) **privacy/collected_data/search_hhistory/collected** <div id="class_editorexportplatformmacos_property_privacy/collected_data/search_hhistory/collected"></div>

Indicates whether your app collects search history.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatformmacos_property_privacy/collected_data/search_hhistory/collection_purposes"></div>

[`int`](class_int.md) **privacy/collected_data/search_hhistory/collection_purposes** <div id="class_editorexportplatformmacos_property_privacy/collected_data/search_hhistory/collection_purposes"></div>

The reasons your app collects search history. See [*Describing data use in privacy manifests*](https://developer.apple.com/documentation/bundleresources/privacy_manifest_files/describing_data_use_in_privacy_manifests).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatformmacos_property_privacy/collected_data/search_hhistory/linked_to_user"></div>

[`bool`](class_bool.md) **privacy/collected_data/search_hhistory/linked_to_user** <div id="class_editorexportplatformmacos_property_privacy/collected_data/search_hhistory/linked_to_user"></div>

Indicates whether your app links search history to the user's identity.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatformmacos_property_privacy/collected_data/search_hhistory/used_for_tracking"></div>

[`bool`](class_bool.md) **privacy/collected_data/search_hhistory/used_for_tracking** <div id="class_editorexportplatformmacos_property_privacy/collected_data/search_hhistory/used_for_tracking"></div>

Indicates whether your app uses search history for tracking.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatformmacos_property_privacy/collected_data/sensitive_info/collected"></div>

[`bool`](class_bool.md) **privacy/collected_data/sensitive_info/collected** <div id="class_editorexportplatformmacos_property_privacy/collected_data/sensitive_info/collected"></div>

Indicates whether your app collects sensitive user information.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatformmacos_property_privacy/collected_data/sensitive_info/collection_purposes"></div>

[`int`](class_int.md) **privacy/collected_data/sensitive_info/collection_purposes** <div id="class_editorexportplatformmacos_property_privacy/collected_data/sensitive_info/collection_purposes"></div>

The reasons your app collects sensitive user information. See [*Describing data use in privacy manifests*](https://developer.apple.com/documentation/bundleresources/privacy_manifest_files/describing_data_use_in_privacy_manifests).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatformmacos_property_privacy/collected_data/sensitive_info/linked_to_user"></div>

[`bool`](class_bool.md) **privacy/collected_data/sensitive_info/linked_to_user** <div id="class_editorexportplatformmacos_property_privacy/collected_data/sensitive_info/linked_to_user"></div>

Indicates whether your app links sensitive user information to the user's identity.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatformmacos_property_privacy/collected_data/sensitive_info/used_for_tracking"></div>

[`bool`](class_bool.md) **privacy/collected_data/sensitive_info/used_for_tracking** <div id="class_editorexportplatformmacos_property_privacy/collected_data/sensitive_info/used_for_tracking"></div>

Indicates whether your app uses sensitive user information for tracking.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatformmacos_property_privacy/collected_data/user_id/collected"></div>

[`bool`](class_bool.md) **privacy/collected_data/user_id/collected** <div id="class_editorexportplatformmacos_property_privacy/collected_data/user_id/collected"></div>

Indicates whether your app collects user IDs.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatformmacos_property_privacy/collected_data/user_id/collection_purposes"></div>

[`int`](class_int.md) **privacy/collected_data/user_id/collection_purposes** <div id="class_editorexportplatformmacos_property_privacy/collected_data/user_id/collection_purposes"></div>

The reasons your app collects user IDs. See [*Describing data use in privacy manifests*](https://developer.apple.com/documentation/bundleresources/privacy_manifest_files/describing_data_use_in_privacy_manifests).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatformmacos_property_privacy/collected_data/user_id/linked_to_user"></div>

[`bool`](class_bool.md) **privacy/collected_data/user_id/linked_to_user** <div id="class_editorexportplatformmacos_property_privacy/collected_data/user_id/linked_to_user"></div>

Indicates whether your app links user IDs to the user's identity.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatformmacos_property_privacy/collected_data/user_id/used_for_tracking"></div>

[`bool`](class_bool.md) **privacy/collected_data/user_id/used_for_tracking** <div id="class_editorexportplatformmacos_property_privacy/collected_data/user_id/used_for_tracking"></div>

Indicates whether your app uses user IDs for tracking.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatformmacos_property_privacy/desktop_folder_usage_description"></div>

[`String`](class_string.md) **privacy/desktop_folder_usage_description** <div id="class_editorexportplatformmacos_property_privacy/desktop_folder_usage_description"></div>

A message displayed when requesting access to the user's "Desktop" folder (in English).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatformmacos_property_privacy/desktop_folder_usage_description_localized"></div>

[`Dictionary`](class_dictionary.md) **privacy/desktop_folder_usage_description_localized** <div id="class_editorexportplatformmacos_property_privacy/desktop_folder_usage_description_localized"></div>

A message displayed when requesting access to the user's "Desktop" folder (localized).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatformmacos_property_privacy/documents_folder_usage_description"></div>

[`String`](class_string.md) **privacy/documents_folder_usage_description** <div id="class_editorexportplatformmacos_property_privacy/documents_folder_usage_description"></div>

A message displayed when requesting access to the user's "Documents" folder (in English).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatformmacos_property_privacy/documents_folder_usage_description_localized"></div>

[`Dictionary`](class_dictionary.md) **privacy/documents_folder_usage_description_localized** <div id="class_editorexportplatformmacos_property_privacy/documents_folder_usage_description_localized"></div>

A message displayed when requesting access to the user's "Documents" folder (localized).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatformmacos_property_privacy/downloads_folder_usage_description"></div>

[`String`](class_string.md) **privacy/downloads_folder_usage_description** <div id="class_editorexportplatformmacos_property_privacy/downloads_folder_usage_description"></div>

A message displayed when requesting access to the user's "Downloads" folder (in English).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatformmacos_property_privacy/downloads_folder_usage_description_localized"></div>

[`Dictionary`](class_dictionary.md) **privacy/downloads_folder_usage_description_localized** <div id="class_editorexportplatformmacos_property_privacy/downloads_folder_usage_description_localized"></div>

A message displayed when requesting access to the user's "Downloads" folder (localized).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatformmacos_property_privacy/location_usage_description"></div>

[`String`](class_string.md) **privacy/location_usage_description** <div id="class_editorexportplatformmacos_property_privacy/location_usage_description"></div>

A message displayed when requesting access to the user's location information (in English).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatformmacos_property_privacy/location_usage_description_localized"></div>

[`Dictionary`](class_dictionary.md) **privacy/location_usage_description_localized** <div id="class_editorexportplatformmacos_property_privacy/location_usage_description_localized"></div>

A message displayed when requesting access to the user's location information (localized).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatformmacos_property_privacy/microphone_usage_description"></div>

[`String`](class_string.md) **privacy/microphone_usage_description** <div id="class_editorexportplatformmacos_property_privacy/microphone_usage_description"></div>

A message displayed when requesting access to the device's microphone (in English).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatformmacos_property_privacy/microphone_usage_description_localized"></div>

[`Dictionary`](class_dictionary.md) **privacy/microphone_usage_description_localized** <div id="class_editorexportplatformmacos_property_privacy/microphone_usage_description_localized"></div>

A message displayed when requesting access to the device's microphone (localized).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatformmacos_property_privacy/network_volumes_usage_description"></div>

[`String`](class_string.md) **privacy/network_volumes_usage_description** <div id="class_editorexportplatformmacos_property_privacy/network_volumes_usage_description"></div>

A message displayed when requesting access to the user's network drives (in English).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatformmacos_property_privacy/network_volumes_usage_description_localized"></div>

[`Dictionary`](class_dictionary.md) **privacy/network_volumes_usage_description_localized** <div id="class_editorexportplatformmacos_property_privacy/network_volumes_usage_description_localized"></div>

A message displayed when requesting access to the user's network drives (localized).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatformmacos_property_privacy/photos_library_usage_description"></div>

[`String`](class_string.md) **privacy/photos_library_usage_description** <div id="class_editorexportplatformmacos_property_privacy/photos_library_usage_description"></div>

A message displayed when requesting access to the user's photo library (in English).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatformmacos_property_privacy/photos_library_usage_description_localized"></div>

[`Dictionary`](class_dictionary.md) **privacy/photos_library_usage_description_localized** <div id="class_editorexportplatformmacos_property_privacy/photos_library_usage_description_localized"></div>

A message displayed when requesting access to the user's photo library (localized).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatformmacos_property_privacy/removable_volumes_usage_description"></div>

[`String`](class_string.md) **privacy/removable_volumes_usage_description** <div id="class_editorexportplatformmacos_property_privacy/removable_volumes_usage_description"></div>

A message displayed when requesting access to the user's removable drives (in English).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatformmacos_property_privacy/removable_volumes_usage_description_localized"></div>

[`Dictionary`](class_dictionary.md) **privacy/removable_volumes_usage_description_localized** <div id="class_editorexportplatformmacos_property_privacy/removable_volumes_usage_description_localized"></div>

A message displayed when requesting access to the user's removable drives (localized).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatformmacos_property_privacy/tracking_domains"></div>

[`PackedStringArray`](class_packedstringarray.md) **privacy/tracking_domains** <div id="class_editorexportplatformmacos_property_privacy/tracking_domains"></div>

The list of internet domains your app connects to that engage in tracking. See [*Privacy manifest files*](https://developer.apple.com/documentation/bundleresources/privacy_manifest_files).

**Note:** The returned array is *copied* and any changes to it will not update the original property value. See [`PackedStringArray`](class_packedstringarray.md) for more details.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatformmacos_property_privacy/tracking_enabled"></div>

[`bool`](class_bool.md) **privacy/tracking_enabled** <div id="class_editorexportplatformmacos_property_privacy/tracking_enabled"></div>

Indicates whether your app uses data for tracking. See [*Privacy manifest files*](https://developer.apple.com/documentation/bundleresources/privacy_manifest_files).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatformmacos_property_ssh_remote_deploy/cleanup_script"></div>

[`String`](class_string.md) **ssh_remote_deploy/cleanup_script** <div id="class_editorexportplatformmacos_property_ssh_remote_deploy/cleanup_script"></div>

Script code to execute on the remote host when app is finished.

The following variables can be used in the script:

- `{temp_dir}` - Path of temporary folder on the remote, used to upload app and scripts to.

- `{archive_name}` - Name of the ZIP containing uploaded application.

- `{exe_name}` - Name of application executable.

- `{cmd_args}` - Array of the command line argument for the application.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatformmacos_property_ssh_remote_deploy/enabled"></div>

[`bool`](class_bool.md) **ssh_remote_deploy/enabled** <div id="class_editorexportplatformmacos_property_ssh_remote_deploy/enabled"></div>

Enables remote deploy using SSH/SCP.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatformmacos_property_ssh_remote_deploy/extra_args_scp"></div>

[`String`](class_string.md) **ssh_remote_deploy/extra_args_scp** <div id="class_editorexportplatformmacos_property_ssh_remote_deploy/extra_args_scp"></div>

Array of the additional command line arguments passed to the SCP.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatformmacos_property_ssh_remote_deploy/extra_args_ssh"></div>

[`String`](class_string.md) **ssh_remote_deploy/extra_args_ssh** <div id="class_editorexportplatformmacos_property_ssh_remote_deploy/extra_args_ssh"></div>

Array of the additional command line arguments passed to the SSH.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatformmacos_property_ssh_remote_deploy/host"></div>

[`String`](class_string.md) **ssh_remote_deploy/host** <div id="class_editorexportplatformmacos_property_ssh_remote_deploy/host"></div>

Remote host SSH user name and address, in `user@address` format.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatformmacos_property_ssh_remote_deploy/port"></div>

[`String`](class_string.md) **ssh_remote_deploy/port** <div id="class_editorexportplatformmacos_property_ssh_remote_deploy/port"></div>

Remote host SSH port number.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatformmacos_property_ssh_remote_deploy/run_script"></div>

[`String`](class_string.md) **ssh_remote_deploy/run_script** <div id="class_editorexportplatformmacos_property_ssh_remote_deploy/run_script"></div>

Script code to execute on the remote host when running the app.

The following variables can be used in the script:

- `{temp_dir}` - Path of temporary folder on the remote, used to upload app and scripts to.

- `{archive_name}` - Name of the ZIP containing uploaded application.

- `{exe_name}` - Name of application executable.

- `{cmd_args}` - Array of the command line argument for the application.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatformmacos_property_xcode/platform_build"></div>

[`String`](class_string.md) **xcode/platform_build** <div id="class_editorexportplatformmacos_property_xcode/platform_build"></div>

macOS build number used to build application executable.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatformmacos_property_xcode/sdk_build"></div>

[`String`](class_string.md) **xcode/sdk_build** <div id="class_editorexportplatformmacos_property_xcode/sdk_build"></div>

macOS SDK build number used to build application executable.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatformmacos_property_xcode/sdk_name"></div>

[`String`](class_string.md) **xcode/sdk_name** <div id="class_editorexportplatformmacos_property_xcode/sdk_name"></div>

macOS SDK name used to build application executable.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatformmacos_property_xcode/sdk_version"></div>

[`String`](class_string.md) **xcode/sdk_version** <div id="class_editorexportplatformmacos_property_xcode/sdk_version"></div>

macOS SDK version used to build application executable in the `major.minor` format.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatformmacos_property_xcode/xcode_build"></div>

[`String`](class_string.md) **xcode/xcode_build** <div id="class_editorexportplatformmacos_property_xcode/xcode_build"></div>

Xcode build number used to build application executable.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatformmacos_property_xcode/xcode_version"></div>

[`String`](class_string.md) **xcode/xcode_version** <div id="class_editorexportplatformmacos_property_xcode/xcode_version"></div>

Xcode version used to build application executable.

[^virtual]: 本方法通常需要用户覆盖才能生效。
[^const]: 本方法无副作用，不会修改该实例的任何成员变量。
[^vararg]: 本方法除了能接受在此处描述的参数外，还能够继续接受任意数量的参数。
[^constructor]: 本方法用于构造某个类型。
[^static]: 调用本方法无需实例，可直接使用类名进行调用。
[^operator]: 本方法描述的是使用本类型作为左操作数的有效运算符。
[^bitfield]: 这个值是由下列位标志构成位掩码的整数。
[^void]: 无返回值。
