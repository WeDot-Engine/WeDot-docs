<!-- ⚠ 请勿编辑本文件 ⚠ -->
<!-- 本文档使用脚本从 WeDot 引擎源码仓库生成。 -->
<!-- 生成脚本：https://github.com/WeDot-Engine/WeDot/tree/4.3/doc/tools/make_md.py； -->
<!-- 原文件：https://github.com/WeDot-Engine/WeDot/tree/4.3/platform/android/doc_classes/EditorExportPlatformAndroid.xml。 -->

<div id="_class_editorexportplatformandroid"></div>

# EditorExportPlatformAndroid

**继承：** [`EditorExportPlatform`](class_editorexportplatform.md) **<** [`RefCounted`](class_refcounted.md) **<** [`Object`](class_object.md)

Exporter for Android.

## 属性

| [`String`](class_string.md)                       | [`apk_expansion/SALT`](#class_editorexportplatformandroid_property_apk_expansion/salt)                                                         |
| [`bool`](class_bool.md)                           | [`apk_expansion/enable`](#class_editorexportplatformandroid_property_apk_expansion/enable)                                                     |
| [`String`](class_string.md)                       | [`apk_expansion/public_key`](#class_editorexportplatformandroid_property_apk_expansion/public_key)                                             |
| [`bool`](class_bool.md)                           | [`architectures/arm64-v8a`](#class_editorexportplatformandroid_property_architectures/arm64-v8a)                                               |
| [`bool`](class_bool.md)                           | [`architectures/armeabi-v7a`](#class_editorexportplatformandroid_property_architectures/armeabi-v7a)                                           |
| [`bool`](class_bool.md)                           | [`architectures/x86`](#class_editorexportplatformandroid_property_architectures/x86)                                                           |
| [`bool`](class_bool.md)                           | [`architectures/x86_64`](#class_editorexportplatformandroid_property_architectures/x86_64)                                                     |
| [`String`](class_string.md)                       | [`command_line/extra_args`](#class_editorexportplatformandroid_property_command_line/extra_args)                                               |
| [`String`](class_string.md)                       | [`custom_template/debug`](#class_editorexportplatformandroid_property_custom_template/debug)                                                   |
| [`String`](class_string.md)                       | [`custom_template/release`](#class_editorexportplatformandroid_property_custom_template/release)                                               |
| [`String`](class_string.md)                       | [`gradle_build/android_source_template`](#class_editorexportplatformandroid_property_gradle_build/android_source_template)                     |
| [`bool`](class_bool.md)                           | [`gradle_build/compress_native_libraries`](#class_editorexportplatformandroid_property_gradle_build/compress_native_libraries)                 |
| [`int`](class_int.md)                             | [`gradle_build/export_format`](#class_editorexportplatformandroid_property_gradle_build/export_format)                                         |
| [`String`](class_string.md)                       | [`gradle_build/gradle_build_directory`](#class_editorexportplatformandroid_property_gradle_build/gradle_build_directory)                       |
| [`String`](class_string.md)                       | [`gradle_build/min_sdk`](#class_editorexportplatformandroid_property_gradle_build/min_sdk)                                                     |
| [`String`](class_string.md)                       | [`gradle_build/target_sdk`](#class_editorexportplatformandroid_property_gradle_build/target_sdk)                                               |
| [`bool`](class_bool.md)                           | [`gradle_build/use_gradle_build`](#class_editorexportplatformandroid_property_gradle_build/use_gradle_build)                                   |
| [`bool`](class_bool.md)                           | [`graphics/opengl_debug`](#class_editorexportplatformandroid_property_graphics/opengl_debug)                                                   |
| [`String`](class_string.md)                       | [`keystore/debug`](#class_editorexportplatformandroid_property_keystore/debug)                                                                 |
| [`String`](class_string.md)                       | [`keystore/debug_password`](#class_editorexportplatformandroid_property_keystore/debug_password)                                               |
| [`String`](class_string.md)                       | [`keystore/debug_user`](#class_editorexportplatformandroid_property_keystore/debug_user)                                                       |
| [`String`](class_string.md)                       | [`keystore/release`](#class_editorexportplatformandroid_property_keystore/release)                                                             |
| [`String`](class_string.md)                       | [`keystore/release_password`](#class_editorexportplatformandroid_property_keystore/release_password)                                           |
| [`String`](class_string.md)                       | [`keystore/release_user`](#class_editorexportplatformandroid_property_keystore/release_user)                                                   |
| [`String`](class_string.md)                       | [`launcher_icons/adaptive_background_432x432`](#class_editorexportplatformandroid_property_launcher_icons/adaptive_background_432x432)         |
| [`String`](class_string.md)                       | [`launcher_icons/adaptive_foreground_432x432`](#class_editorexportplatformandroid_property_launcher_icons/adaptive_foreground_432x432)         |
| [`String`](class_string.md)                       | [`launcher_icons/main_192x192`](#class_editorexportplatformandroid_property_launcher_icons/main_192x192)                                       |
| [`int`](class_int.md)                             | [`package/app_category`](#class_editorexportplatformandroid_property_package/app_category)                                                     |
| [`bool`](class_bool.md)                           | [`package/exclude_from_recents`](#class_editorexportplatformandroid_property_package/exclude_from_recents)                                     |
| [`String`](class_string.md)                       | [`package/name`](#class_editorexportplatformandroid_property_package/name)                                                                     |
| [`bool`](class_bool.md)                           | [`package/retain_data_on_uninstall`](#class_editorexportplatformandroid_property_package/retain_data_on_uninstall)                             |
| [`bool`](class_bool.md)                           | [`package/show_as_launcher_app`](#class_editorexportplatformandroid_property_package/show_as_launcher_app)                                     |
| [`bool`](class_bool.md)                           | [`package/show_in_android_tv`](#class_editorexportplatformandroid_property_package/show_in_android_tv)                                         |
| [`bool`](class_bool.md)                           | [`package/show_in_app_library`](#class_editorexportplatformandroid_property_package/show_in_app_library)                                       |
| [`bool`](class_bool.md)                           | [`package/signed`](#class_editorexportplatformandroid_property_package/signed)                                                                 |
| [`String`](class_string.md)                       | [`package/unique_name`](#class_editorexportplatformandroid_property_package/unique_name)                                                       |
| [`bool`](class_bool.md)                           | [`permissions/access_checkin_properties`](#class_editorexportplatformandroid_property_permissions/access_checkin_properties)                   |
| [`bool`](class_bool.md)                           | [`permissions/access_coarse_location`](#class_editorexportplatformandroid_property_permissions/access_coarse_location)                         |
| [`bool`](class_bool.md)                           | [`permissions/access_fine_location`](#class_editorexportplatformandroid_property_permissions/access_fine_location)                             |
| [`bool`](class_bool.md)                           | [`permissions/access_location_extra_commands`](#class_editorexportplatformandroid_property_permissions/access_location_extra_commands)         |
| [`bool`](class_bool.md)                           | [`permissions/access_mock_location`](#class_editorexportplatformandroid_property_permissions/access_mock_location)                             |
| [`bool`](class_bool.md)                           | [`permissions/access_network_state`](#class_editorexportplatformandroid_property_permissions/access_network_state)                             |
| [`bool`](class_bool.md)                           | [`permissions/access_surface_flinger`](#class_editorexportplatformandroid_property_permissions/access_surface_flinger)                         |
| [`bool`](class_bool.md)                           | [`permissions/access_wifi_state`](#class_editorexportplatformandroid_property_permissions/access_wifi_state)                                   |
| [`bool`](class_bool.md)                           | [`permissions/account_manager`](#class_editorexportplatformandroid_property_permissions/account_manager)                                       |
| [`bool`](class_bool.md)                           | [`permissions/add_voicemail`](#class_editorexportplatformandroid_property_permissions/add_voicemail)                                           |
| [`bool`](class_bool.md)                           | [`permissions/authenticate_accounts`](#class_editorexportplatformandroid_property_permissions/authenticate_accounts)                           |
| [`bool`](class_bool.md)                           | [`permissions/battery_stats`](#class_editorexportplatformandroid_property_permissions/battery_stats)                                           |
| [`bool`](class_bool.md)                           | [`permissions/bind_accessibility_service`](#class_editorexportplatformandroid_property_permissions/bind_accessibility_service)                 |
| [`bool`](class_bool.md)                           | [`permissions/bind_appwidget`](#class_editorexportplatformandroid_property_permissions/bind_appwidget)                                         |
| [`bool`](class_bool.md)                           | [`permissions/bind_device_admin`](#class_editorexportplatformandroid_property_permissions/bind_device_admin)                                   |
| [`bool`](class_bool.md)                           | [`permissions/bind_input_method`](#class_editorexportplatformandroid_property_permissions/bind_input_method)                                   |
| [`bool`](class_bool.md)                           | [`permissions/bind_nfc_service`](#class_editorexportplatformandroid_property_permissions/bind_nfc_service)                                     |
| [`bool`](class_bool.md)                           | [`permissions/bind_notification_listener_service`](#class_editorexportplatformandroid_property_permissions/bind_notification_listener_service) |
| [`bool`](class_bool.md)                           | [`permissions/bind_print_service`](#class_editorexportplatformandroid_property_permissions/bind_print_service)                                 |
| [`bool`](class_bool.md)                           | [`permissions/bind_remoteviews`](#class_editorexportplatformandroid_property_permissions/bind_remoteviews)                                     |
| [`bool`](class_bool.md)                           | [`permissions/bind_text_service`](#class_editorexportplatformandroid_property_permissions/bind_text_service)                                   |
| [`bool`](class_bool.md)                           | [`permissions/bind_vpn_service`](#class_editorexportplatformandroid_property_permissions/bind_vpn_service)                                     |
| [`bool`](class_bool.md)                           | [`permissions/bind_wallpaper`](#class_editorexportplatformandroid_property_permissions/bind_wallpaper)                                         |
| [`bool`](class_bool.md)                           | [`permissions/bluetooth`](#class_editorexportplatformandroid_property_permissions/bluetooth)                                                   |
| [`bool`](class_bool.md)                           | [`permissions/bluetooth_admin`](#class_editorexportplatformandroid_property_permissions/bluetooth_admin)                                       |
| [`bool`](class_bool.md)                           | [`permissions/bluetooth_privileged`](#class_editorexportplatformandroid_property_permissions/bluetooth_privileged)                             |
| [`bool`](class_bool.md)                           | [`permissions/brick`](#class_editorexportplatformandroid_property_permissions/brick)                                                           |
| [`bool`](class_bool.md)                           | [`permissions/broadcast_package_removed`](#class_editorexportplatformandroid_property_permissions/broadcast_package_removed)                   |
| [`bool`](class_bool.md)                           | [`permissions/broadcast_sms`](#class_editorexportplatformandroid_property_permissions/broadcast_sms)                                           |
| [`bool`](class_bool.md)                           | [`permissions/broadcast_sticky`](#class_editorexportplatformandroid_property_permissions/broadcast_sticky)                                     |
| [`bool`](class_bool.md)                           | [`permissions/broadcast_wap_push`](#class_editorexportplatformandroid_property_permissions/broadcast_wap_push)                                 |
| [`bool`](class_bool.md)                           | [`permissions/call_phone`](#class_editorexportplatformandroid_property_permissions/call_phone)                                                 |
| [`bool`](class_bool.md)                           | [`permissions/call_privileged`](#class_editorexportplatformandroid_property_permissions/call_privileged)                                       |
| [`bool`](class_bool.md)                           | [`permissions/camera`](#class_editorexportplatformandroid_property_permissions/camera)                                                         |
| [`bool`](class_bool.md)                           | [`permissions/capture_audio_output`](#class_editorexportplatformandroid_property_permissions/capture_audio_output)                             |
| [`bool`](class_bool.md)                           | [`permissions/capture_secure_video_output`](#class_editorexportplatformandroid_property_permissions/capture_secure_video_output)               |
| [`bool`](class_bool.md)                           | [`permissions/capture_video_output`](#class_editorexportplatformandroid_property_permissions/capture_video_output)                             |
| [`bool`](class_bool.md)                           | [`permissions/change_component_enabled_state`](#class_editorexportplatformandroid_property_permissions/change_component_enabled_state)         |
| [`bool`](class_bool.md)                           | [`permissions/change_configuration`](#class_editorexportplatformandroid_property_permissions/change_configuration)                             |
| [`bool`](class_bool.md)                           | [`permissions/change_network_state`](#class_editorexportplatformandroid_property_permissions/change_network_state)                             |
| [`bool`](class_bool.md)                           | [`permissions/change_wifi_multicast_state`](#class_editorexportplatformandroid_property_permissions/change_wifi_multicast_state)               |
| [`bool`](class_bool.md)                           | [`permissions/change_wifi_state`](#class_editorexportplatformandroid_property_permissions/change_wifi_state)                                   |
| [`bool`](class_bool.md)                           | [`permissions/clear_app_cache`](#class_editorexportplatformandroid_property_permissions/clear_app_cache)                                       |
| [`bool`](class_bool.md)                           | [`permissions/clear_app_user_data`](#class_editorexportplatformandroid_property_permissions/clear_app_user_data)                               |
| [`bool`](class_bool.md)                           | [`permissions/control_location_updates`](#class_editorexportplatformandroid_property_permissions/control_location_updates)                     |
| [`PackedStringArray`](class_packedstringarray.md) | [`permissions/custom_permissions`](#class_editorexportplatformandroid_property_permissions/custom_permissions)                                 |
| [`bool`](class_bool.md)                           | [`permissions/delete_cache_files`](#class_editorexportplatformandroid_property_permissions/delete_cache_files)                                 |
| [`bool`](class_bool.md)                           | [`permissions/delete_packages`](#class_editorexportplatformandroid_property_permissions/delete_packages)                                       |
| [`bool`](class_bool.md)                           | [`permissions/device_power`](#class_editorexportplatformandroid_property_permissions/device_power)                                             |
| [`bool`](class_bool.md)                           | [`permissions/diagnostic`](#class_editorexportplatformandroid_property_permissions/diagnostic)                                                 |
| [`bool`](class_bool.md)                           | [`permissions/disable_keyguard`](#class_editorexportplatformandroid_property_permissions/disable_keyguard)                                     |
| [`bool`](class_bool.md)                           | [`permissions/dump`](#class_editorexportplatformandroid_property_permissions/dump)                                                             |
| [`bool`](class_bool.md)                           | [`permissions/expand_status_bar`](#class_editorexportplatformandroid_property_permissions/expand_status_bar)                                   |
| [`bool`](class_bool.md)                           | [`permissions/factory_test`](#class_editorexportplatformandroid_property_permissions/factory_test)                                             |
| [`bool`](class_bool.md)                           | [`permissions/flashlight`](#class_editorexportplatformandroid_property_permissions/flashlight)                                                 |
| [`bool`](class_bool.md)                           | [`permissions/force_back`](#class_editorexportplatformandroid_property_permissions/force_back)                                                 |
| [`bool`](class_bool.md)                           | [`permissions/get_accounts`](#class_editorexportplatformandroid_property_permissions/get_accounts)                                             |
| [`bool`](class_bool.md)                           | [`permissions/get_package_size`](#class_editorexportplatformandroid_property_permissions/get_package_size)                                     |
| [`bool`](class_bool.md)                           | [`permissions/get_tasks`](#class_editorexportplatformandroid_property_permissions/get_tasks)                                                   |
| [`bool`](class_bool.md)                           | [`permissions/get_top_activity_info`](#class_editorexportplatformandroid_property_permissions/get_top_activity_info)                           |
| [`bool`](class_bool.md)                           | [`permissions/global_search`](#class_editorexportplatformandroid_property_permissions/global_search)                                           |
| [`bool`](class_bool.md)                           | [`permissions/hardware_test`](#class_editorexportplatformandroid_property_permissions/hardware_test)                                           |
| [`bool`](class_bool.md)                           | [`permissions/inject_events`](#class_editorexportplatformandroid_property_permissions/inject_events)                                           |
| [`bool`](class_bool.md)                           | [`permissions/install_location_provider`](#class_editorexportplatformandroid_property_permissions/install_location_provider)                   |
| [`bool`](class_bool.md)                           | [`permissions/install_packages`](#class_editorexportplatformandroid_property_permissions/install_packages)                                     |
| [`bool`](class_bool.md)                           | [`permissions/install_shortcut`](#class_editorexportplatformandroid_property_permissions/install_shortcut)                                     |
| [`bool`](class_bool.md)                           | [`permissions/internal_system_window`](#class_editorexportplatformandroid_property_permissions/internal_system_window)                         |
| [`bool`](class_bool.md)                           | [`permissions/internet`](#class_editorexportplatformandroid_property_permissions/internet)                                                     |
| [`bool`](class_bool.md)                           | [`permissions/kill_background_processes`](#class_editorexportplatformandroid_property_permissions/kill_background_processes)                   |
| [`bool`](class_bool.md)                           | [`permissions/location_hardware`](#class_editorexportplatformandroid_property_permissions/location_hardware)                                   |
| [`bool`](class_bool.md)                           | [`permissions/manage_accounts`](#class_editorexportplatformandroid_property_permissions/manage_accounts)                                       |
| [`bool`](class_bool.md)                           | [`permissions/manage_app_tokens`](#class_editorexportplatformandroid_property_permissions/manage_app_tokens)                                   |
| [`bool`](class_bool.md)                           | [`permissions/manage_documents`](#class_editorexportplatformandroid_property_permissions/manage_documents)                                     |
| [`bool`](class_bool.md)                           | [`permissions/manage_external_storage`](#class_editorexportplatformandroid_property_permissions/manage_external_storage)                       |
| [`bool`](class_bool.md)                           | [`permissions/master_clear`](#class_editorexportplatformandroid_property_permissions/master_clear)                                             |
| [`bool`](class_bool.md)                           | [`permissions/media_content_control`](#class_editorexportplatformandroid_property_permissions/media_content_control)                           |
| [`bool`](class_bool.md)                           | [`permissions/modify_audio_settings`](#class_editorexportplatformandroid_property_permissions/modify_audio_settings)                           |
| [`bool`](class_bool.md)                           | [`permissions/modify_phone_state`](#class_editorexportplatformandroid_property_permissions/modify_phone_state)                                 |
| [`bool`](class_bool.md)                           | [`permissions/mount_format_filesystems`](#class_editorexportplatformandroid_property_permissions/mount_format_filesystems)                     |
| [`bool`](class_bool.md)                           | [`permissions/mount_unmount_filesystems`](#class_editorexportplatformandroid_property_permissions/mount_unmount_filesystems)                   |
| [`bool`](class_bool.md)                           | [`permissions/nfc`](#class_editorexportplatformandroid_property_permissions/nfc)                                                               |
| [`bool`](class_bool.md)                           | [`permissions/persistent_activity`](#class_editorexportplatformandroid_property_permissions/persistent_activity)                               |
| [`bool`](class_bool.md)                           | [`permissions/post_notifications`](#class_editorexportplatformandroid_property_permissions/post_notifications)                                 |
| [`bool`](class_bool.md)                           | [`permissions/process_outgoing_calls`](#class_editorexportplatformandroid_property_permissions/process_outgoing_calls)                         |
| [`bool`](class_bool.md)                           | [`permissions/read_calendar`](#class_editorexportplatformandroid_property_permissions/read_calendar)                                           |
| [`bool`](class_bool.md)                           | [`permissions/read_call_log`](#class_editorexportplatformandroid_property_permissions/read_call_log)                                           |
| [`bool`](class_bool.md)                           | [`permissions/read_contacts`](#class_editorexportplatformandroid_property_permissions/read_contacts)                                           |
| [`bool`](class_bool.md)                           | [`permissions/read_external_storage`](#class_editorexportplatformandroid_property_permissions/read_external_storage)                           |
| [`bool`](class_bool.md)                           | [`permissions/read_frame_buffer`](#class_editorexportplatformandroid_property_permissions/read_frame_buffer)                                   |
| [`bool`](class_bool.md)                           | [`permissions/read_history_bookmarks`](#class_editorexportplatformandroid_property_permissions/read_history_bookmarks)                         |
| [`bool`](class_bool.md)                           | [`permissions/read_input_state`](#class_editorexportplatformandroid_property_permissions/read_input_state)                                     |
| [`bool`](class_bool.md)                           | [`permissions/read_logs`](#class_editorexportplatformandroid_property_permissions/read_logs)                                                   |
| [`bool`](class_bool.md)                           | [`permissions/read_phone_state`](#class_editorexportplatformandroid_property_permissions/read_phone_state)                                     |
| [`bool`](class_bool.md)                           | [`permissions/read_profile`](#class_editorexportplatformandroid_property_permissions/read_profile)                                             |
| [`bool`](class_bool.md)                           | [`permissions/read_sms`](#class_editorexportplatformandroid_property_permissions/read_sms)                                                     |
| [`bool`](class_bool.md)                           | [`permissions/read_social_stream`](#class_editorexportplatformandroid_property_permissions/read_social_stream)                                 |
| [`bool`](class_bool.md)                           | [`permissions/read_sync_settings`](#class_editorexportplatformandroid_property_permissions/read_sync_settings)                                 |
| [`bool`](class_bool.md)                           | [`permissions/read_sync_stats`](#class_editorexportplatformandroid_property_permissions/read_sync_stats)                                       |
| [`bool`](class_bool.md)                           | [`permissions/read_user_dictionary`](#class_editorexportplatformandroid_property_permissions/read_user_dictionary)                             |
| [`bool`](class_bool.md)                           | [`permissions/reboot`](#class_editorexportplatformandroid_property_permissions/reboot)                                                         |
| [`bool`](class_bool.md)                           | [`permissions/receive_boot_completed`](#class_editorexportplatformandroid_property_permissions/receive_boot_completed)                         |
| [`bool`](class_bool.md)                           | [`permissions/receive_mms`](#class_editorexportplatformandroid_property_permissions/receive_mms)                                               |
| [`bool`](class_bool.md)                           | [`permissions/receive_sms`](#class_editorexportplatformandroid_property_permissions/receive_sms)                                               |
| [`bool`](class_bool.md)                           | [`permissions/receive_wap_push`](#class_editorexportplatformandroid_property_permissions/receive_wap_push)                                     |
| [`bool`](class_bool.md)                           | [`permissions/record_audio`](#class_editorexportplatformandroid_property_permissions/record_audio)                                             |
| [`bool`](class_bool.md)                           | [`permissions/reorder_tasks`](#class_editorexportplatformandroid_property_permissions/reorder_tasks)                                           |
| [`bool`](class_bool.md)                           | [`permissions/restart_packages`](#class_editorexportplatformandroid_property_permissions/restart_packages)                                     |
| [`bool`](class_bool.md)                           | [`permissions/send_respond_via_message`](#class_editorexportplatformandroid_property_permissions/send_respond_via_message)                     |
| [`bool`](class_bool.md)                           | [`permissions/send_sms`](#class_editorexportplatformandroid_property_permissions/send_sms)                                                     |
| [`bool`](class_bool.md)                           | [`permissions/set_activity_watcher`](#class_editorexportplatformandroid_property_permissions/set_activity_watcher)                             |
| [`bool`](class_bool.md)                           | [`permissions/set_alarm`](#class_editorexportplatformandroid_property_permissions/set_alarm)                                                   |
| [`bool`](class_bool.md)                           | [`permissions/set_always_finish`](#class_editorexportplatformandroid_property_permissions/set_always_finish)                                   |
| [`bool`](class_bool.md)                           | [`permissions/set_animation_scale`](#class_editorexportplatformandroid_property_permissions/set_animation_scale)                               |
| [`bool`](class_bool.md)                           | [`permissions/set_debug_app`](#class_editorexportplatformandroid_property_permissions/set_debug_app)                                           |
| [`bool`](class_bool.md)                           | [`permissions/set_orientation`](#class_editorexportplatformandroid_property_permissions/set_orientation)                                       |
| [`bool`](class_bool.md)                           | [`permissions/set_pointer_speed`](#class_editorexportplatformandroid_property_permissions/set_pointer_speed)                                   |
| [`bool`](class_bool.md)                           | [`permissions/set_preferred_applications`](#class_editorexportplatformandroid_property_permissions/set_preferred_applications)                 |
| [`bool`](class_bool.md)                           | [`permissions/set_process_limit`](#class_editorexportplatformandroid_property_permissions/set_process_limit)                                   |
| [`bool`](class_bool.md)                           | [`permissions/set_time`](#class_editorexportplatformandroid_property_permissions/set_time)                                                     |
| [`bool`](class_bool.md)                           | [`permissions/set_time_zone`](#class_editorexportplatformandroid_property_permissions/set_time_zone)                                           |
| [`bool`](class_bool.md)                           | [`permissions/set_wallpaper`](#class_editorexportplatformandroid_property_permissions/set_wallpaper)                                           |
| [`bool`](class_bool.md)                           | [`permissions/set_wallpaper_hints`](#class_editorexportplatformandroid_property_permissions/set_wallpaper_hints)                               |
| [`bool`](class_bool.md)                           | [`permissions/signal_persistent_processes`](#class_editorexportplatformandroid_property_permissions/signal_persistent_processes)               |
| [`bool`](class_bool.md)                           | [`permissions/status_bar`](#class_editorexportplatformandroid_property_permissions/status_bar)                                                 |
| [`bool`](class_bool.md)                           | [`permissions/subscribed_feeds_read`](#class_editorexportplatformandroid_property_permissions/subscribed_feeds_read)                           |
| [`bool`](class_bool.md)                           | [`permissions/subscribed_feeds_write`](#class_editorexportplatformandroid_property_permissions/subscribed_feeds_write)                         |
| [`bool`](class_bool.md)                           | [`permissions/system_alert_window`](#class_editorexportplatformandroid_property_permissions/system_alert_window)                               |
| [`bool`](class_bool.md)                           | [`permissions/transmit_ir`](#class_editorexportplatformandroid_property_permissions/transmit_ir)                                               |
| [`bool`](class_bool.md)                           | [`permissions/uninstall_shortcut`](#class_editorexportplatformandroid_property_permissions/uninstall_shortcut)                                 |
| [`bool`](class_bool.md)                           | [`permissions/update_device_stats`](#class_editorexportplatformandroid_property_permissions/update_device_stats)                               |
| [`bool`](class_bool.md)                           | [`permissions/use_credentials`](#class_editorexportplatformandroid_property_permissions/use_credentials)                                       |
| [`bool`](class_bool.md)                           | [`permissions/use_sip`](#class_editorexportplatformandroid_property_permissions/use_sip)                                                       |
| [`bool`](class_bool.md)                           | [`permissions/vibrate`](#class_editorexportplatformandroid_property_permissions/vibrate)                                                       |
| [`bool`](class_bool.md)                           | [`permissions/wake_lock`](#class_editorexportplatformandroid_property_permissions/wake_lock)                                                   |
| [`bool`](class_bool.md)                           | [`permissions/write_apn_settings`](#class_editorexportplatformandroid_property_permissions/write_apn_settings)                                 |
| [`bool`](class_bool.md)                           | [`permissions/write_calendar`](#class_editorexportplatformandroid_property_permissions/write_calendar)                                         |
| [`bool`](class_bool.md)                           | [`permissions/write_call_log`](#class_editorexportplatformandroid_property_permissions/write_call_log)                                         |
| [`bool`](class_bool.md)                           | [`permissions/write_contacts`](#class_editorexportplatformandroid_property_permissions/write_contacts)                                         |
| [`bool`](class_bool.md)                           | [`permissions/write_external_storage`](#class_editorexportplatformandroid_property_permissions/write_external_storage)                         |
| [`bool`](class_bool.md)                           | [`permissions/write_gservices`](#class_editorexportplatformandroid_property_permissions/write_gservices)                                       |
| [`bool`](class_bool.md)                           | [`permissions/write_history_bookmarks`](#class_editorexportplatformandroid_property_permissions/write_history_bookmarks)                       |
| [`bool`](class_bool.md)                           | [`permissions/write_profile`](#class_editorexportplatformandroid_property_permissions/write_profile)                                           |
| [`bool`](class_bool.md)                           | [`permissions/write_secure_settings`](#class_editorexportplatformandroid_property_permissions/write_secure_settings)                           |
| [`bool`](class_bool.md)                           | [`permissions/write_settings`](#class_editorexportplatformandroid_property_permissions/write_settings)                                         |
| [`bool`](class_bool.md)                           | [`permissions/write_sms`](#class_editorexportplatformandroid_property_permissions/write_sms)                                                   |
| [`bool`](class_bool.md)                           | [`permissions/write_social_stream`](#class_editorexportplatformandroid_property_permissions/write_social_stream)                               |
| [`bool`](class_bool.md)                           | [`permissions/write_sync_settings`](#class_editorexportplatformandroid_property_permissions/write_sync_settings)                               |
| [`bool`](class_bool.md)                           | [`permissions/write_user_dictionary`](#class_editorexportplatformandroid_property_permissions/write_user_dictionary)                           |
| [`bool`](class_bool.md)                           | [`screen/immersive_mode`](#class_editorexportplatformandroid_property_screen/immersive_mode)                                                   |
| [`bool`](class_bool.md)                           | [`screen/support_large`](#class_editorexportplatformandroid_property_screen/support_large)                                                     |
| [`bool`](class_bool.md)                           | [`screen/support_normal`](#class_editorexportplatformandroid_property_screen/support_normal)                                                   |
| [`bool`](class_bool.md)                           | [`screen/support_small`](#class_editorexportplatformandroid_property_screen/support_small)                                                     |
| [`bool`](class_bool.md)                           | [`screen/support_xlarge`](#class_editorexportplatformandroid_property_screen/support_xlarge)                                                   |
| [`bool`](class_bool.md)                           | [`user_data_backup/allow`](#class_editorexportplatformandroid_property_user_data_backup/allow)                                                 |
| [`int`](class_int.md)                             | [`version/code`](#class_editorexportplatformandroid_property_version/code)                                                                     |
| [`String`](class_string.md)                       | [`version/name`](#class_editorexportplatformandroid_property_version/name)                                                                     |
| [`int`](class_int.md)                             | [`xr_features/xr_mode`](#class_editorexportplatformandroid_property_xr_features/xr_mode)                                                       |

<!-- rst-class:: classref-section-separator -->

---

## 属性说明

<div id="_class_editorexportplatformandroid_property_apk_expansion/salt"></div>

[`String`](class_string.md) **apk_expansion/SALT** <div id="class_editorexportplatformandroid_property_apk_expansion/salt"></div>

Array of random bytes that the licensing Policy uses to create an [*Obfuscator*](https://developer.android.com/google/play/licensing/adding-licensing#impl-Obfuscator).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatformandroid_property_apk_expansion/enable"></div>

[`bool`](class_bool.md) **apk_expansion/enable** <div id="class_editorexportplatformandroid_property_apk_expansion/enable"></div>

If `true`, project resources are stored in the separate APK expansion file, instead of the APK.

 **Note:** APK expansion should be enabled to use PCK encryption. See [*APK Expansion Files*](https://developer.android.com/google/play/expansion-files)

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatformandroid_property_apk_expansion/public_key"></div>

[`String`](class_string.md) **apk_expansion/public_key** <div id="class_editorexportplatformandroid_property_apk_expansion/public_key"></div>

Base64 encoded RSA public key for your publisher account, available from the profile page on the "Google Play Console".

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatformandroid_property_architectures/arm64-v8a"></div>

[`bool`](class_bool.md) **architectures/arm64-v8a** <div id="class_editorexportplatformandroid_property_architectures/arm64-v8a"></div>

If `true`, `arm64` binaries are included into exported project.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatformandroid_property_architectures/armeabi-v7a"></div>

[`bool`](class_bool.md) **architectures/armeabi-v7a** <div id="class_editorexportplatformandroid_property_architectures/armeabi-v7a"></div>

If `true`, `arm32` binaries are included into exported project.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatformandroid_property_architectures/x86"></div>

[`bool`](class_bool.md) **architectures/x86** <div id="class_editorexportplatformandroid_property_architectures/x86"></div>

If `true`, `x86_32` binaries are included into exported project.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatformandroid_property_architectures/x86_64"></div>

[`bool`](class_bool.md) **architectures/x86_64** <div id="class_editorexportplatformandroid_property_architectures/x86_64"></div>

If `true`, `x86_64` binaries are included into exported project.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatformandroid_property_command_line/extra_args"></div>

[`String`](class_string.md) **command_line/extra_args** <div id="class_editorexportplatformandroid_property_command_line/extra_args"></div>

A list of additional command line arguments, separated by space, which the exported project will receive when started.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatformandroid_property_custom_template/debug"></div>

[`String`](class_string.md) **custom_template/debug** <div id="class_editorexportplatformandroid_property_custom_template/debug"></div>

Path to an APK file to use as a custom export template for debug exports. If left empty, default template is used.

 **Note:** This is only used if [`gradle_build/use_gradle_build`](#class_editorexportplatformandroid_property_gradle_build/use_gradle_build) is disabled.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatformandroid_property_custom_template/release"></div>

[`String`](class_string.md) **custom_template/release** <div id="class_editorexportplatformandroid_property_custom_template/release"></div>

Path to an APK file to use as a custom export template for release exports. If left empty, default template is used.

 **Note:** This is only used if [`gradle_build/use_gradle_build`](#class_editorexportplatformandroid_property_gradle_build/use_gradle_build) is disabled.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatformandroid_property_gradle_build/android_source_template"></div>

[`String`](class_string.md) **gradle_build/android_source_template** <div id="class_editorexportplatformandroid_property_gradle_build/android_source_template"></div>

Path to a ZIP file holding the source for the export template used in a Gradle build. If left empty, the default template is used.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatformandroid_property_gradle_build/compress_native_libraries"></div>

[`bool`](class_bool.md) **gradle_build/compress_native_libraries** <div id="class_editorexportplatformandroid_property_gradle_build/compress_native_libraries"></div>

If `true`, native libraries are compressed when performing a Gradle build.

 **Note:** Although your binary may be smaller, your application may load slower because the native libraries are not loaded directly from the binary at runtime.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatformandroid_property_gradle_build/export_format"></div>

[`int`](class_int.md) **gradle_build/export_format** <div id="class_editorexportplatformandroid_property_gradle_build/export_format"></div>

Application export format (\*.apk or \*.aab).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatformandroid_property_gradle_build/gradle_build_directory"></div>

[`String`](class_string.md) **gradle_build/gradle_build_directory** <div id="class_editorexportplatformandroid_property_gradle_build/gradle_build_directory"></div>

Path to the Gradle build directory. If left empty, then `res://android` will be used.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatformandroid_property_gradle_build/min_sdk"></div>

[`String`](class_string.md) **gradle_build/min_sdk** <div id="class_editorexportplatformandroid_property_gradle_build/min_sdk"></div>

Minimum Android API level required for the application to run (used during Gradle build). See [*android:minSdkVersion*](https://developer.android.com/guide/topics/manifest/uses-sdk-element#uses).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatformandroid_property_gradle_build/target_sdk"></div>

[`String`](class_string.md) **gradle_build/target_sdk** <div id="class_editorexportplatformandroid_property_gradle_build/target_sdk"></div>

The Android API level on which the application is designed to run (used during Gradle build). See [*android:targetSdkVersion*](https://developer.android.com/guide/topics/manifest/uses-sdk-element#uses).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatformandroid_property_gradle_build/use_gradle_build"></div>

[`bool`](class_bool.md) **gradle_build/use_gradle_build** <div id="class_editorexportplatformandroid_property_gradle_build/use_gradle_build"></div>

If `true`, Gradle build is used instead of pre-built APK.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatformandroid_property_graphics/opengl_debug"></div>

[`bool`](class_bool.md) **graphics/opengl_debug** <div id="class_editorexportplatformandroid_property_graphics/opengl_debug"></div>

If `true`, OpenGL ES debug context will be created (additional runtime checking, validation, and logging).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatformandroid_property_keystore/debug"></div>

[`String`](class_string.md) **keystore/debug** <div id="class_editorexportplatformandroid_property_keystore/debug"></div>

Path of the debug keystore file.

Can be overridden with the environment variable `GODOT_ANDROID_KEYSTORE_DEBUG_PATH`.

Fallbacks to `EditorSettings.export/android/debug_keystore` if empty.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatformandroid_property_keystore/debug_password"></div>

[`String`](class_string.md) **keystore/debug_password** <div id="class_editorexportplatformandroid_property_keystore/debug_password"></div>

Password for the debug keystore file.

Can be overridden with the environment variable `GODOT_ANDROID_KEYSTORE_DEBUG_PASSWORD`.

Fallbacks to `EditorSettings.export/android/debug_keystore_pass` if both it and [`keystore/debug`](#class_editorexportplatformandroid_property_keystore/debug) are empty.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatformandroid_property_keystore/debug_user"></div>

[`String`](class_string.md) **keystore/debug_user** <div id="class_editorexportplatformandroid_property_keystore/debug_user"></div>

User name for the debug keystore file.

Can be overridden with the environment variable `GODOT_ANDROID_KEYSTORE_DEBUG_USER`.

Fallbacks to `EditorSettings.export/android/debug_keystore_user` if both it and [`keystore/debug`](#class_editorexportplatformandroid_property_keystore/debug) are empty.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatformandroid_property_keystore/release"></div>

[`String`](class_string.md) **keystore/release** <div id="class_editorexportplatformandroid_property_keystore/release"></div>

Path of the release keystore file.

Can be overridden with the environment variable `GODOT_ANDROID_KEYSTORE_RELEASE_PATH`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatformandroid_property_keystore/release_password"></div>

[`String`](class_string.md) **keystore/release_password** <div id="class_editorexportplatformandroid_property_keystore/release_password"></div>

Password for the release keystore file.

Can be overridden with the environment variable `GODOT_ANDROID_KEYSTORE_RELEASE_PASSWORD`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatformandroid_property_keystore/release_user"></div>

[`String`](class_string.md) **keystore/release_user** <div id="class_editorexportplatformandroid_property_keystore/release_user"></div>

User name for the release keystore file.

Can be overridden with the environment variable `GODOT_ANDROID_KEYSTORE_RELEASE_USER`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatformandroid_property_launcher_icons/adaptive_background_432x432"></div>

[`String`](class_string.md) **launcher_icons/adaptive_background_432x432** <div id="class_editorexportplatformandroid_property_launcher_icons/adaptive_background_432x432"></div>

Background layer of the application adaptive icon file. See [*Design adaptive icons*](https://developer.android.com/develop/ui/views/launch/icon_design_adaptive#design-adaptive-icons).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatformandroid_property_launcher_icons/adaptive_foreground_432x432"></div>

[`String`](class_string.md) **launcher_icons/adaptive_foreground_432x432** <div id="class_editorexportplatformandroid_property_launcher_icons/adaptive_foreground_432x432"></div>

Foreground layer of the application adaptive icon file. See [*Design adaptive icons*](https://developer.android.com/develop/ui/views/launch/icon_design_adaptive#design-adaptive-icons).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatformandroid_property_launcher_icons/main_192x192"></div>

[`String`](class_string.md) **launcher_icons/main_192x192** <div id="class_editorexportplatformandroid_property_launcher_icons/main_192x192"></div>

Application icon file. If left empty, it will fallback to [`ProjectSettings.application/config/icon`](#class_projectsettings_property_application/config/icon).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatformandroid_property_package/app_category"></div>

[`int`](class_int.md) **package/app_category** <div id="class_editorexportplatformandroid_property_package/app_category"></div>

Application category for the Google Play Store. Only define this if your application fits one of the categories well. See [*android:appCategory*](https://developer.android.com/guide/topics/manifest/application-element#appCategory).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatformandroid_property_package/exclude_from_recents"></div>

[`bool`](class_bool.md) **package/exclude_from_recents** <div id="class_editorexportplatformandroid_property_package/exclude_from_recents"></div>

If `true`, task initiated by main activity will be excluded from the list of recently used applications. See [*android:excludeFromRecents*](https://developer.android.com/guide/topics/manifest/activity-element#exclude).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatformandroid_property_package/name"></div>

[`String`](class_string.md) **package/name** <div id="class_editorexportplatformandroid_property_package/name"></div>

Name of the application.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatformandroid_property_package/retain_data_on_uninstall"></div>

[`bool`](class_bool.md) **package/retain_data_on_uninstall** <div id="class_editorexportplatformandroid_property_package/retain_data_on_uninstall"></div>

If `true`, when the user uninstalls an app, a prompt to keep the app's data will be shown. See [*android:hasFragileUserData*](https://developer.android.com/guide/topics/manifest/application-element#fragileuserdata).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatformandroid_property_package/show_as_launcher_app"></div>

[`bool`](class_bool.md) **package/show_as_launcher_app** <div id="class_editorexportplatformandroid_property_package/show_as_launcher_app"></div>

If `true`, the user will be able to set this app as the system launcher in Android preferences.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatformandroid_property_package/show_in_android_tv"></div>

[`bool`](class_bool.md) **package/show_in_android_tv** <div id="class_editorexportplatformandroid_property_package/show_in_android_tv"></div>

If `true`, this app will show in Android TV launcher UI.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatformandroid_property_package/show_in_app_library"></div>

[`bool`](class_bool.md) **package/show_in_app_library** <div id="class_editorexportplatformandroid_property_package/show_in_app_library"></div>

If `true`, this app will show in the device's app library.

 **Note:** This is `true` by default.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatformandroid_property_package/signed"></div>

[`bool`](class_bool.md) **package/signed** <div id="class_editorexportplatformandroid_property_package/signed"></div>

If `true`, package signing is enabled.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatformandroid_property_package/unique_name"></div>

[`String`](class_string.md) **package/unique_name** <div id="class_editorexportplatformandroid_property_package/unique_name"></div>

Unique application identifier in a reverse-DNS format. The reverse DNS format should preferably match a domain name you control, but this is not strictly required. For instance, if you own `example.com`, your package unique name should preferably be of the form `com.example.mygame`. This identifier can only contain lowercase alphanumeric characters (`a-z`, and `0-9`), underscores (`_`), and periods (`.`). Each component of the reverse DNS format must start with a letter: for instance, `com.example.8game` is not valid.

If `$genname` is present in the value, it will be replaced by the project name converted to lowercase. If there are invalid characters in the project name, they will be stripped. If all characters in the project name are stripped, `$genname` is replaced by `noname`.

 **Note:** Changing the package name will cause the package to be considered as a new package, with its own installation and data paths. The new package won't be usable to update existing installations.

 **Note:** When publishing to Google Play, the package name must be *globally* unique. This means no other apps published on Google Play must be using the same package name as yours. Otherwise, you'll be prevented from publishing your app on Google Play.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatformandroid_property_permissions/access_checkin_properties"></div>

[`bool`](class_bool.md) **permissions/access_checkin_properties** <div id="class_editorexportplatformandroid_property_permissions/access_checkin_properties"></div>

Allows read/write access to the "properties" table in the checkin database. See [*ACCESS_CHECKIN_PROPERTIES*](https://developer.android.com/reference/android/Manifest.permission#ACCESS_CHECKIN_PROPERTIES).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatformandroid_property_permissions/access_coarse_location"></div>

[`bool`](class_bool.md) **permissions/access_coarse_location** <div id="class_editorexportplatformandroid_property_permissions/access_coarse_location"></div>

Allows access to the approximate location information. See [*ACCESS_COARSE_LOCATION*](https://developer.android.com/reference/android/Manifest.permission#ACCESS_COARSE_LOCATION).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatformandroid_property_permissions/access_fine_location"></div>

[`bool`](class_bool.md) **permissions/access_fine_location** <div id="class_editorexportplatformandroid_property_permissions/access_fine_location"></div>

Allows access to the precise location information. See [*ACCESS_FINE_LOCATION*](https://developer.android.com/reference/android/Manifest.permission#ACCESS_FINE_LOCATION).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatformandroid_property_permissions/access_location_extra_commands"></div>

[`bool`](class_bool.md) **permissions/access_location_extra_commands** <div id="class_editorexportplatformandroid_property_permissions/access_location_extra_commands"></div>

Allows access to the extra location provider commands. See [*ACCESS_LOCATION_EXTRA_COMMANDS*](https://developer.android.com/reference/android/Manifest.permission#ACCESS_LOCATION_EXTRA_COMMANDS).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatformandroid_property_permissions/access_mock_location"></div>

[`bool`](class_bool.md) **permissions/access_mock_location** <div id="class_editorexportplatformandroid_property_permissions/access_mock_location"></div>

Allows an application to create mock location providers for testing.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatformandroid_property_permissions/access_network_state"></div>

[`bool`](class_bool.md) **permissions/access_network_state** <div id="class_editorexportplatformandroid_property_permissions/access_network_state"></div>

Allows access to the information about networks. See [*ACCESS_NETWORK_STATE*](https://developer.android.com/reference/android/Manifest.permission#ACCESS_NETWORK_STATE).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatformandroid_property_permissions/access_surface_flinger"></div>

[`bool`](class_bool.md) **permissions/access_surface_flinger** <div id="class_editorexportplatformandroid_property_permissions/access_surface_flinger"></div>

Allows an application to use SurfaceFlinger's low level features.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatformandroid_property_permissions/access_wifi_state"></div>

[`bool`](class_bool.md) **permissions/access_wifi_state** <div id="class_editorexportplatformandroid_property_permissions/access_wifi_state"></div>

Allows access to the information about Wi-Fi networks. See [*ACCESS_WIFI_STATE*](https://developer.android.com/reference/android/Manifest.permission#ACCESS_WIFI_STATE).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatformandroid_property_permissions/account_manager"></div>

[`bool`](class_bool.md) **permissions/account_manager** <div id="class_editorexportplatformandroid_property_permissions/account_manager"></div>

Allows applications to call into AccountAuthenticators. See [*ACCOUNT_MANAGER*](https://developer.android.com/reference/android/Manifest.permission#ACCOUNT_MANAGER).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatformandroid_property_permissions/add_voicemail"></div>

[`bool`](class_bool.md) **permissions/add_voicemail** <div id="class_editorexportplatformandroid_property_permissions/add_voicemail"></div>

Allows an application to add voicemails into the system. See [*ADD_VOICEMAIL*](https://developer.android.com/reference/android/Manifest.permission#ADD_VOICEMAIL).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatformandroid_property_permissions/authenticate_accounts"></div>

[`bool`](class_bool.md) **permissions/authenticate_accounts** <div id="class_editorexportplatformandroid_property_permissions/authenticate_accounts"></div>

Allows an application to act as an AccountAuthenticator for the AccountManager.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatformandroid_property_permissions/battery_stats"></div>

[`bool`](class_bool.md) **permissions/battery_stats** <div id="class_editorexportplatformandroid_property_permissions/battery_stats"></div>

Allows an application to collect battery statistics. See [*BATTERY_STATS*](https://developer.android.com/reference/android/Manifest.permission#BATTERY_STATS).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatformandroid_property_permissions/bind_accessibility_service"></div>

[`bool`](class_bool.md) **permissions/bind_accessibility_service** <div id="class_editorexportplatformandroid_property_permissions/bind_accessibility_service"></div>

Must be required by an AccessibilityService, to ensure that only the system can bind to it. See [*BIND_ACCESSIBILITY_SERVICE*](https://developer.android.com/reference/android/Manifest.permission#BIND_ACCESSIBILITY_SERVICE).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatformandroid_property_permissions/bind_appwidget"></div>

[`bool`](class_bool.md) **permissions/bind_appwidget** <div id="class_editorexportplatformandroid_property_permissions/bind_appwidget"></div>

Allows an application to tell the AppWidget service which application can access AppWidget's data. See [*BIND_APPWIDGET*](https://developer.android.com/reference/android/Manifest.permission#BIND_APPWIDGET).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatformandroid_property_permissions/bind_device_admin"></div>

[`bool`](class_bool.md) **permissions/bind_device_admin** <div id="class_editorexportplatformandroid_property_permissions/bind_device_admin"></div>

Must be required by device administration receiver, to ensure that only the system can interact with it. See [*BIND_DEVICE_ADMIN*](https://developer.android.com/reference/android/Manifest.permission#BIND_DEVICE_ADMIN).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatformandroid_property_permissions/bind_input_method"></div>

[`bool`](class_bool.md) **permissions/bind_input_method** <div id="class_editorexportplatformandroid_property_permissions/bind_input_method"></div>

Must be required by an InputMethodService, to ensure that only the system can bind to it. See [*BIND_INPUT_METHOD*](https://developer.android.com/reference/android/Manifest.permission#BIND_INPUT_METHOD).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatformandroid_property_permissions/bind_nfc_service"></div>

[`bool`](class_bool.md) **permissions/bind_nfc_service** <div id="class_editorexportplatformandroid_property_permissions/bind_nfc_service"></div>

Must be required by a HostApduService or OffHostApduService to ensure that only the system can bind to it. See [*BIND_NFC_SERVICE*](https://developer.android.com/reference/android/Manifest.permission#BIND_NFC_SERVICE).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatformandroid_property_permissions/bind_notification_listener_service"></div>

[`bool`](class_bool.md) **permissions/bind_notification_listener_service** <div id="class_editorexportplatformandroid_property_permissions/bind_notification_listener_service"></div>

Must be required by a NotificationListenerService, to ensure that only the system can bind to it. See [*BIND_NOTIFICATION_LISTENER_SERVICE*](https://developer.android.com/reference/android/Manifest.permission#BIND_NOTIFICATION_LISTENER_SERVICE).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatformandroid_property_permissions/bind_print_service"></div>

[`bool`](class_bool.md) **permissions/bind_print_service** <div id="class_editorexportplatformandroid_property_permissions/bind_print_service"></div>

Must be required by a PrintService, to ensure that only the system can bind to it. See [*BIND_PRINT_SERVICE*](https://developer.android.com/reference/android/Manifest.permission#BIND_PRINT_SERVICE).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatformandroid_property_permissions/bind_remoteviews"></div>

[`bool`](class_bool.md) **permissions/bind_remoteviews** <div id="class_editorexportplatformandroid_property_permissions/bind_remoteviews"></div>

Must be required by a RemoteViewsService, to ensure that only the system can bind to it. See [*BIND_REMOTEVIEWS*](https://developer.android.com/reference/android/Manifest.permission#BIND_REMOTEVIEWS).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatformandroid_property_permissions/bind_text_service"></div>

[`bool`](class_bool.md) **permissions/bind_text_service** <div id="class_editorexportplatformandroid_property_permissions/bind_text_service"></div>

Must be required by a TextService (e.g. SpellCheckerService) to ensure that only the system can bind to it. See [*BIND_TEXT_SERVICE*](https://developer.android.com/reference/android/Manifest.permission#BIND_TEXT_SERVICE).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatformandroid_property_permissions/bind_vpn_service"></div>

[`bool`](class_bool.md) **permissions/bind_vpn_service** <div id="class_editorexportplatformandroid_property_permissions/bind_vpn_service"></div>

Must be required by a VpnService, to ensure that only the system can bind to it. See [*BIND_VPN_SERVICE*](https://developer.android.com/reference/android/Manifest.permission#BIND_VPN_SERVICE).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatformandroid_property_permissions/bind_wallpaper"></div>

[`bool`](class_bool.md) **permissions/bind_wallpaper** <div id="class_editorexportplatformandroid_property_permissions/bind_wallpaper"></div>

Must be required by a WallpaperService, to ensure that only the system can bind to it. See [*BIND_WALLPAPER*](https://developer.android.com/reference/android/Manifest.permission#BIND_WALLPAPER).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatformandroid_property_permissions/bluetooth"></div>

[`bool`](class_bool.md) **permissions/bluetooth** <div id="class_editorexportplatformandroid_property_permissions/bluetooth"></div>

Allows applications to connect to paired bluetooth devices. See [*BLUETOOTH*](https://developer.android.com/reference/android/Manifest.permission#BLUETOOTH).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatformandroid_property_permissions/bluetooth_admin"></div>

[`bool`](class_bool.md) **permissions/bluetooth_admin** <div id="class_editorexportplatformandroid_property_permissions/bluetooth_admin"></div>

Allows applications to discover and pair bluetooth devices. See [*BLUETOOTH_ADMIN*](https://developer.android.com/reference/android/Manifest.permission#BLUETOOTH_ADMIN).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatformandroid_property_permissions/bluetooth_privileged"></div>

[`bool`](class_bool.md) **permissions/bluetooth_privileged** <div id="class_editorexportplatformandroid_property_permissions/bluetooth_privileged"></div>

Allows applications to pair bluetooth devices without user interaction, and to allow or disallow phonebook access or message access. See [*BLUETOOTH_PRIVILEGED*](https://developer.android.com/reference/android/Manifest.permission#BLUETOOTH_PRIVILEGED).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatformandroid_property_permissions/brick"></div>

[`bool`](class_bool.md) **permissions/brick** <div id="class_editorexportplatformandroid_property_permissions/brick"></div>

Required to be able to disable the device (very dangerous!).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatformandroid_property_permissions/broadcast_package_removed"></div>

[`bool`](class_bool.md) **permissions/broadcast_package_removed** <div id="class_editorexportplatformandroid_property_permissions/broadcast_package_removed"></div>

Allows an application to broadcast a notification that an application package has been removed. See [*BROADCAST_PACKAGE_REMOVED*](https://developer.android.com/reference/android/Manifest.permission#BROADCAST_PACKAGE_REMOVED).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatformandroid_property_permissions/broadcast_sms"></div>

[`bool`](class_bool.md) **permissions/broadcast_sms** <div id="class_editorexportplatformandroid_property_permissions/broadcast_sms"></div>

Allows an application to broadcast an SMS receipt notification. See [*BROADCAST_SMS*](https://developer.android.com/reference/android/Manifest.permission#BROADCAST_SMS).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatformandroid_property_permissions/broadcast_sticky"></div>

[`bool`](class_bool.md) **permissions/broadcast_sticky** <div id="class_editorexportplatformandroid_property_permissions/broadcast_sticky"></div>

Allows an application to broadcast sticky intents. See [*BROADCAST_STICKY*](https://developer.android.com/reference/android/Manifest.permission#BROADCAST_STICKY).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatformandroid_property_permissions/broadcast_wap_push"></div>

[`bool`](class_bool.md) **permissions/broadcast_wap_push** <div id="class_editorexportplatformandroid_property_permissions/broadcast_wap_push"></div>

Allows an application to broadcast a WAP PUSH receipt notification. See [*BROADCAST_WAP_PUSH*](https://developer.android.com/reference/android/Manifest.permission#BROADCAST_WAP_PUSH).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatformandroid_property_permissions/call_phone"></div>

[`bool`](class_bool.md) **permissions/call_phone** <div id="class_editorexportplatformandroid_property_permissions/call_phone"></div>

Allows an application to initiate a phone call without going through the Dialer user interface. See [*CALL_PHONE*](https://developer.android.com/reference/android/Manifest.permission#CALL_PHONE).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatformandroid_property_permissions/call_privileged"></div>

[`bool`](class_bool.md) **permissions/call_privileged** <div id="class_editorexportplatformandroid_property_permissions/call_privileged"></div>

Allows an application to call any phone number, including emergency numbers, without going through the Dialer user interface. See [*CALL_PRIVILEGED*](https://developer.android.com/reference/android/Manifest.permission#CALL_PRIVILEGED).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatformandroid_property_permissions/camera"></div>

[`bool`](class_bool.md) **permissions/camera** <div id="class_editorexportplatformandroid_property_permissions/camera"></div>

Required to be able to access the camera device. See [*CAMERA*](https://developer.android.com/reference/android/Manifest.permission#CAMERA).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatformandroid_property_permissions/capture_audio_output"></div>

[`bool`](class_bool.md) **permissions/capture_audio_output** <div id="class_editorexportplatformandroid_property_permissions/capture_audio_output"></div>

Allows an application to capture audio output. See [*CAPTURE_AUDIO_OUTPUT*](https://developer.android.com/reference/android/Manifest.permission#CAPTURE_AUDIO_OUTPUT).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatformandroid_property_permissions/capture_secure_video_output"></div>

[`bool`](class_bool.md) **permissions/capture_secure_video_output** <div id="class_editorexportplatformandroid_property_permissions/capture_secure_video_output"></div>

Allows an application to capture secure video output.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatformandroid_property_permissions/capture_video_output"></div>

[`bool`](class_bool.md) **permissions/capture_video_output** <div id="class_editorexportplatformandroid_property_permissions/capture_video_output"></div>

Allows an application to capture video output.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatformandroid_property_permissions/change_component_enabled_state"></div>

[`bool`](class_bool.md) **permissions/change_component_enabled_state** <div id="class_editorexportplatformandroid_property_permissions/change_component_enabled_state"></div>

Allows an application to change whether an application component (other than its own) is enabled or not. See [*CHANGE_COMPONENT_ENABLED_STATE*](https://developer.android.com/reference/android/Manifest.permission#CHANGE_COMPONENT_ENABLED_STATE).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatformandroid_property_permissions/change_configuration"></div>

[`bool`](class_bool.md) **permissions/change_configuration** <div id="class_editorexportplatformandroid_property_permissions/change_configuration"></div>

Allows an application to modify the current configuration, such as locale. See [*CHANGE_CONFIGURATION*](https://developer.android.com/reference/android/Manifest.permission#CHANGE_CONFIGURATION).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatformandroid_property_permissions/change_network_state"></div>

[`bool`](class_bool.md) **permissions/change_network_state** <div id="class_editorexportplatformandroid_property_permissions/change_network_state"></div>

Allows applications to change network connectivity state. See [*CHANGE_NETWORK_STATE*](https://developer.android.com/reference/android/Manifest.permission#CHANGE_NETWORK_STATE).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatformandroid_property_permissions/change_wifi_multicast_state"></div>

[`bool`](class_bool.md) **permissions/change_wifi_multicast_state** <div id="class_editorexportplatformandroid_property_permissions/change_wifi_multicast_state"></div>

Allows applications to enter Wi-Fi Multicast mode. See [*CHANGE_WIFI_MULTICAST_STATE*](https://developer.android.com/reference/android/Manifest.permission#CHANGE_WIFI_MULTICAST_STATE).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatformandroid_property_permissions/change_wifi_state"></div>

[`bool`](class_bool.md) **permissions/change_wifi_state** <div id="class_editorexportplatformandroid_property_permissions/change_wifi_state"></div>

Allows applications to change Wi-Fi connectivity state. See [*CHANGE_WIFI_STATE*](https://developer.android.com/reference/android/Manifest.permission#CHANGE_WIFI_STATE).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatformandroid_property_permissions/clear_app_cache"></div>

[`bool`](class_bool.md) **permissions/clear_app_cache** <div id="class_editorexportplatformandroid_property_permissions/clear_app_cache"></div>

Allows an application to clear the caches of all installed applications on the device. See [*CLEAR_APP_CACHE*](https://developer.android.com/reference/android/Manifest.permission#CLEAR_APP_CACHE).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatformandroid_property_permissions/clear_app_user_data"></div>

[`bool`](class_bool.md) **permissions/clear_app_user_data** <div id="class_editorexportplatformandroid_property_permissions/clear_app_user_data"></div>

Allows an application to clear user data.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatformandroid_property_permissions/control_location_updates"></div>

[`bool`](class_bool.md) **permissions/control_location_updates** <div id="class_editorexportplatformandroid_property_permissions/control_location_updates"></div>

Allows enabling/disabling location update notifications from the radio. See [*CONTROL_LOCATION_UPDATES*](https://developer.android.com/reference/android/Manifest.permission#CONTROL_LOCATION_UPDATES).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatformandroid_property_permissions/custom_permissions"></div>

[`PackedStringArray`](class_packedstringarray.md) **permissions/custom_permissions** <div id="class_editorexportplatformandroid_property_permissions/custom_permissions"></div>

Array of custom permission strings.

**Note:** The returned array is *copied* and any changes to it will not update the original property value. See [`PackedStringArray`](class_packedstringarray.md) for more details.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatformandroid_property_permissions/delete_cache_files"></div>

[`bool`](class_bool.md) **permissions/delete_cache_files** <div id="class_editorexportplatformandroid_property_permissions/delete_cache_files"></div>

**已弃用：** 未来版本中可能会修改或移除该属性。

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatformandroid_property_permissions/delete_packages"></div>

[`bool`](class_bool.md) **permissions/delete_packages** <div id="class_editorexportplatformandroid_property_permissions/delete_packages"></div>

Allows an application to delete packages. See [*DELETE_PACKAGES*](https://developer.android.com/reference/android/Manifest.permission#DELETE_PACKAGES).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatformandroid_property_permissions/device_power"></div>

[`bool`](class_bool.md) **permissions/device_power** <div id="class_editorexportplatformandroid_property_permissions/device_power"></div>

Allows low-level access to power management.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatformandroid_property_permissions/diagnostic"></div>

[`bool`](class_bool.md) **permissions/diagnostic** <div id="class_editorexportplatformandroid_property_permissions/diagnostic"></div>

Allows applications to RW to diagnostic resources. See [*DIAGNOSTIC*](https://developer.android.com/reference/android/Manifest.permission#DIAGNOSTIC).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatformandroid_property_permissions/disable_keyguard"></div>

[`bool`](class_bool.md) **permissions/disable_keyguard** <div id="class_editorexportplatformandroid_property_permissions/disable_keyguard"></div>

Allows applications to disable the keyguard if it is not secure. See [*DISABLE_KEYGUARD*](https://developer.android.com/reference/android/Manifest.permission#DISABLE_KEYGUARD).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatformandroid_property_permissions/dump"></div>

[`bool`](class_bool.md) **permissions/dump** <div id="class_editorexportplatformandroid_property_permissions/dump"></div>

Allows an application to retrieve state dump information from system services. See [*DUMP*](https://developer.android.com/reference/android/Manifest.permission#DUMP).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatformandroid_property_permissions/expand_status_bar"></div>

[`bool`](class_bool.md) **permissions/expand_status_bar** <div id="class_editorexportplatformandroid_property_permissions/expand_status_bar"></div>

Allows an application to expand or collapse the status bar. See [*EXPAND_STATUS_BAR*](https://developer.android.com/reference/android/Manifest.permission#EXPAND_STATUS_BAR).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatformandroid_property_permissions/factory_test"></div>

[`bool`](class_bool.md) **permissions/factory_test** <div id="class_editorexportplatformandroid_property_permissions/factory_test"></div>

Run as a manufacturer test application, running as the root user. See [*FACTORY_TEST*](https://developer.android.com/reference/android/Manifest.permission#FACTORY_TEST).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatformandroid_property_permissions/flashlight"></div>

[`bool`](class_bool.md) **permissions/flashlight** <div id="class_editorexportplatformandroid_property_permissions/flashlight"></div>

Allows access to the flashlight.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatformandroid_property_permissions/force_back"></div>

[`bool`](class_bool.md) **permissions/force_back** <div id="class_editorexportplatformandroid_property_permissions/force_back"></div>

Allows an application to force a BACK operation on whatever is the top activity.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatformandroid_property_permissions/get_accounts"></div>

[`bool`](class_bool.md) **permissions/get_accounts** <div id="class_editorexportplatformandroid_property_permissions/get_accounts"></div>

Allows access to the list of accounts in the Accounts Service. See [*GET_ACCOUNTS*](https://developer.android.com/reference/android/Manifest.permission#GET_ACCOUNTS).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatformandroid_property_permissions/get_package_size"></div>

[`bool`](class_bool.md) **permissions/get_package_size** <div id="class_editorexportplatformandroid_property_permissions/get_package_size"></div>

Allows an application to find out the space used by any package. See [*GET_PACKAGE_SIZE*](https://developer.android.com/reference/android/Manifest.permission#GET_PACKAGE_SIZE).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatformandroid_property_permissions/get_tasks"></div>

[`bool`](class_bool.md) **permissions/get_tasks** <div id="class_editorexportplatformandroid_property_permissions/get_tasks"></div>

**已弃用：** Deprecated in API level 21.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatformandroid_property_permissions/get_top_activity_info"></div>

[`bool`](class_bool.md) **permissions/get_top_activity_info** <div id="class_editorexportplatformandroid_property_permissions/get_top_activity_info"></div>

Allows an application to retrieve private information about the current top activity.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatformandroid_property_permissions/global_search"></div>

[`bool`](class_bool.md) **permissions/global_search** <div id="class_editorexportplatformandroid_property_permissions/global_search"></div>

Used on content providers to allow the global search system to access their data. See [*GLOBAL_SEARCH*](https://developer.android.com/reference/android/Manifest.permission#GLOBAL_SEARCH).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatformandroid_property_permissions/hardware_test"></div>

[`bool`](class_bool.md) **permissions/hardware_test** <div id="class_editorexportplatformandroid_property_permissions/hardware_test"></div>

Allows access to hardware peripherals.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatformandroid_property_permissions/inject_events"></div>

[`bool`](class_bool.md) **permissions/inject_events** <div id="class_editorexportplatformandroid_property_permissions/inject_events"></div>

Allows an application to inject user events (keys, touch, trackball) into the event stream and deliver them to ANY window.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatformandroid_property_permissions/install_location_provider"></div>

[`bool`](class_bool.md) **permissions/install_location_provider** <div id="class_editorexportplatformandroid_property_permissions/install_location_provider"></div>

Allows an application to install a location provider into the Location Manager. See [*INSTALL_LOCATION_PROVIDER*](https://developer.android.com/reference/android/Manifest.permission#INSTALL_LOCATION_PROVIDER).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatformandroid_property_permissions/install_packages"></div>

[`bool`](class_bool.md) **permissions/install_packages** <div id="class_editorexportplatformandroid_property_permissions/install_packages"></div>

Allows an application to install packages. See [*INSTALL_PACKAGES*](https://developer.android.com/reference/android/Manifest.permission#INSTALL_PACKAGES).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatformandroid_property_permissions/install_shortcut"></div>

[`bool`](class_bool.md) **permissions/install_shortcut** <div id="class_editorexportplatformandroid_property_permissions/install_shortcut"></div>

Allows an application to install a shortcut in Launcher. See [*INSTALL_SHORTCUT*](https://developer.android.com/reference/android/Manifest.permission#INSTALL_SHORTCUT).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatformandroid_property_permissions/internal_system_window"></div>

[`bool`](class_bool.md) **permissions/internal_system_window** <div id="class_editorexportplatformandroid_property_permissions/internal_system_window"></div>

Allows an application to open windows that are for use by parts of the system user interface.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatformandroid_property_permissions/internet"></div>

[`bool`](class_bool.md) **permissions/internet** <div id="class_editorexportplatformandroid_property_permissions/internet"></div>

Allows applications to open network sockets. See [*INTERNET*](https://developer.android.com/reference/android/Manifest.permission#INTERNET).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatformandroid_property_permissions/kill_background_processes"></div>

[`bool`](class_bool.md) **permissions/kill_background_processes** <div id="class_editorexportplatformandroid_property_permissions/kill_background_processes"></div>

Allows an application to call ActivityManager.killBackgroundProcesses(String). See [*KILL_BACKGROUND_PROCESSES*](https://developer.android.com/reference/android/Manifest.permission#KILL_BACKGROUND_PROCESSES).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatformandroid_property_permissions/location_hardware"></div>

[`bool`](class_bool.md) **permissions/location_hardware** <div id="class_editorexportplatformandroid_property_permissions/location_hardware"></div>

Allows an application to use location features in hardware, such as the geofencing api. See [*LOCATION_HARDWARE*](https://developer.android.com/reference/android/Manifest.permission#LOCATION_HARDWARE).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatformandroid_property_permissions/manage_accounts"></div>

[`bool`](class_bool.md) **permissions/manage_accounts** <div id="class_editorexportplatformandroid_property_permissions/manage_accounts"></div>

Allows an application to manage the list of accounts in the AccountManager.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatformandroid_property_permissions/manage_app_tokens"></div>

[`bool`](class_bool.md) **permissions/manage_app_tokens** <div id="class_editorexportplatformandroid_property_permissions/manage_app_tokens"></div>

Allows an application to manage (create, destroy, Z-order) application tokens in the window manager.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatformandroid_property_permissions/manage_documents"></div>

[`bool`](class_bool.md) **permissions/manage_documents** <div id="class_editorexportplatformandroid_property_permissions/manage_documents"></div>

Allows an application to manage access to documents, usually as part of a document picker. See [*MANAGE_DOCUMENTS*](https://developer.android.com/reference/android/Manifest.permission#MANAGE_DOCUMENTS).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatformandroid_property_permissions/manage_external_storage"></div>

[`bool`](class_bool.md) **permissions/manage_external_storage** <div id="class_editorexportplatformandroid_property_permissions/manage_external_storage"></div>

Allows an application a broad access to external storage in scoped storage. See [*MANAGE_EXTERNAL_STORAGE*](https://developer.android.com/reference/android/Manifest.permission#MANAGE_EXTERNAL_STORAGE).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatformandroid_property_permissions/master_clear"></div>

[`bool`](class_bool.md) **permissions/master_clear** <div id="class_editorexportplatformandroid_property_permissions/master_clear"></div>

See [*MASTER_CLEAR*](https://developer.android.com/reference/android/Manifest.permission#MASTER_CLEAR).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatformandroid_property_permissions/media_content_control"></div>

[`bool`](class_bool.md) **permissions/media_content_control** <div id="class_editorexportplatformandroid_property_permissions/media_content_control"></div>

Allows an application to know what content is playing and control its playback. See [*MEDIA_CONTENT_CONTROL*](https://developer.android.com/reference/android/Manifest.permission#MEDIA_CONTENT_CONTROL).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatformandroid_property_permissions/modify_audio_settings"></div>

[`bool`](class_bool.md) **permissions/modify_audio_settings** <div id="class_editorexportplatformandroid_property_permissions/modify_audio_settings"></div>

Allows an application to modify global audio settings. See [*MODIFY_AUDIO_SETTINGS*](https://developer.android.com/reference/android/Manifest.permission#MODIFY_AUDIO_SETTINGS).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatformandroid_property_permissions/modify_phone_state"></div>

[`bool`](class_bool.md) **permissions/modify_phone_state** <div id="class_editorexportplatformandroid_property_permissions/modify_phone_state"></div>

Allows modification of the telephony state - power on, mmi, etc. Does not include placing calls. See [*MODIFY_PHONE_STATE*](https://developer.android.com/reference/android/Manifest.permission#MODIFY_PHONE_STATE).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatformandroid_property_permissions/mount_format_filesystems"></div>

[`bool`](class_bool.md) **permissions/mount_format_filesystems** <div id="class_editorexportplatformandroid_property_permissions/mount_format_filesystems"></div>

Allows formatting file systems for removable storage. See [*MOUNT_FORMAT_FILESYSTEMS*](https://developer.android.com/reference/android/Manifest.permission#MOUNT_FORMAT_FILESYSTEMS).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatformandroid_property_permissions/mount_unmount_filesystems"></div>

[`bool`](class_bool.md) **permissions/mount_unmount_filesystems** <div id="class_editorexportplatformandroid_property_permissions/mount_unmount_filesystems"></div>

Allows mounting and unmounting file systems for removable storage. See [*MOUNT_UNMOUNT_FILESYSTEMS*](https://developer.android.com/reference/android/Manifest.permission#MOUNT_UNMOUNT_FILESYSTEMS).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatformandroid_property_permissions/nfc"></div>

[`bool`](class_bool.md) **permissions/nfc** <div id="class_editorexportplatformandroid_property_permissions/nfc"></div>

Allows applications to perform I/O operations over NFC. See [*NFC*](https://developer.android.com/reference/android/Manifest.permission#NFC).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatformandroid_property_permissions/persistent_activity"></div>

[`bool`](class_bool.md) **permissions/persistent_activity** <div id="class_editorexportplatformandroid_property_permissions/persistent_activity"></div>

**已弃用：** Deprecated in API level 15.

Allows an application to make its activities persistent.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatformandroid_property_permissions/post_notifications"></div>

[`bool`](class_bool.md) **permissions/post_notifications** <div id="class_editorexportplatformandroid_property_permissions/post_notifications"></div>

Allows an application to post notifications. Added in API level 33. See [*Notification runtime permission*](https://developer.android.com/develop/ui/views/notifications/notification-permission).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatformandroid_property_permissions/process_outgoing_calls"></div>

[`bool`](class_bool.md) **permissions/process_outgoing_calls** <div id="class_editorexportplatformandroid_property_permissions/process_outgoing_calls"></div>

**已弃用：** Deprecated in API level 29.

Allows an application to see the number being dialed during an outgoing call with the option to redirect the call to a different number or abort the call altogether. See [*PROCESS_OUTGOING_CALLS*](https://developer.android.com/reference/android/Manifest.permission#PROCESS_OUTGOING_CALLS).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatformandroid_property_permissions/read_calendar"></div>

[`bool`](class_bool.md) **permissions/read_calendar** <div id="class_editorexportplatformandroid_property_permissions/read_calendar"></div>

Allows an application to read the user's calendar data. See [*READ_CALENDAR*](https://developer.android.com/reference/android/Manifest.permission#READ_CALENDAR).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatformandroid_property_permissions/read_call_log"></div>

[`bool`](class_bool.md) **permissions/read_call_log** <div id="class_editorexportplatformandroid_property_permissions/read_call_log"></div>

Allows an application to read the user's call log. See [*READ_CALL_LOG*](https://developer.android.com/reference/android/Manifest.permission#READ_CALL_LOG).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatformandroid_property_permissions/read_contacts"></div>

[`bool`](class_bool.md) **permissions/read_contacts** <div id="class_editorexportplatformandroid_property_permissions/read_contacts"></div>

Allows an application to read the user's contacts data. See [*READ_CONTACTS*](https://developer.android.com/reference/android/Manifest.permission#READ_CONTACTS).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatformandroid_property_permissions/read_external_storage"></div>

[`bool`](class_bool.md) **permissions/read_external_storage** <div id="class_editorexportplatformandroid_property_permissions/read_external_storage"></div>

**已弃用：** Deprecated in API level 33.

Allows an application to read from external storage. See [*READ_EXTERNAL_STORAGE*](https://developer.android.com/reference/android/Manifest.permission#READ_EXTERNAL_STORAGE).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatformandroid_property_permissions/read_frame_buffer"></div>

[`bool`](class_bool.md) **permissions/read_frame_buffer** <div id="class_editorexportplatformandroid_property_permissions/read_frame_buffer"></div>

Allows an application to take screen shots and more generally get access to the frame buffer data.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatformandroid_property_permissions/read_history_bookmarks"></div>

[`bool`](class_bool.md) **permissions/read_history_bookmarks** <div id="class_editorexportplatformandroid_property_permissions/read_history_bookmarks"></div>

Allows an application to read (but not write) the user's browsing history and bookmarks.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatformandroid_property_permissions/read_input_state"></div>

[`bool`](class_bool.md) **permissions/read_input_state** <div id="class_editorexportplatformandroid_property_permissions/read_input_state"></div>

**已弃用：** Deprecated in API level 16.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatformandroid_property_permissions/read_logs"></div>

[`bool`](class_bool.md) **permissions/read_logs** <div id="class_editorexportplatformandroid_property_permissions/read_logs"></div>

Allows an application to read the low-level system log files. See [*READ_LOGS*](https://developer.android.com/reference/android/Manifest.permission#READ_LOGS).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatformandroid_property_permissions/read_phone_state"></div>

[`bool`](class_bool.md) **permissions/read_phone_state** <div id="class_editorexportplatformandroid_property_permissions/read_phone_state"></div>

Allows read only access to phone state. See [*READ_PHONE_STATE*](https://developer.android.com/reference/android/Manifest.permission#READ_PHONE_STATE).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatformandroid_property_permissions/read_profile"></div>

[`bool`](class_bool.md) **permissions/read_profile** <div id="class_editorexportplatformandroid_property_permissions/read_profile"></div>

Allows an application to read the user's personal profile data.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatformandroid_property_permissions/read_sms"></div>

[`bool`](class_bool.md) **permissions/read_sms** <div id="class_editorexportplatformandroid_property_permissions/read_sms"></div>

Allows an application to read SMS messages. See [*READ_SMS*](https://developer.android.com/reference/android/Manifest.permission#READ_SMS).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatformandroid_property_permissions/read_social_stream"></div>

[`bool`](class_bool.md) **permissions/read_social_stream** <div id="class_editorexportplatformandroid_property_permissions/read_social_stream"></div>

Allows an application to read from the user's social stream.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatformandroid_property_permissions/read_sync_settings"></div>

[`bool`](class_bool.md) **permissions/read_sync_settings** <div id="class_editorexportplatformandroid_property_permissions/read_sync_settings"></div>

Allows applications to read the sync settings. See [*READ_SYNC_SETTINGS*](https://developer.android.com/reference/android/Manifest.permission#READ_SYNC_SETTINGS).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatformandroid_property_permissions/read_sync_stats"></div>

[`bool`](class_bool.md) **permissions/read_sync_stats** <div id="class_editorexportplatformandroid_property_permissions/read_sync_stats"></div>

Allows applications to read the sync stats. See [*READ_SYNC_STATS*](https://developer.android.com/reference/android/Manifest.permission#READ_SYNC_STATS).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatformandroid_property_permissions/read_user_dictionary"></div>

[`bool`](class_bool.md) **permissions/read_user_dictionary** <div id="class_editorexportplatformandroid_property_permissions/read_user_dictionary"></div>

Allows an application to read the user dictionary.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatformandroid_property_permissions/reboot"></div>

[`bool`](class_bool.md) **permissions/reboot** <div id="class_editorexportplatformandroid_property_permissions/reboot"></div>

Required to be able to reboot the device. See [*REBOOT*](https://developer.android.com/reference/android/Manifest.permission#REBOOT).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatformandroid_property_permissions/receive_boot_completed"></div>

[`bool`](class_bool.md) **permissions/receive_boot_completed** <div id="class_editorexportplatformandroid_property_permissions/receive_boot_completed"></div>

Allows an application to receive the Intent.ACTION_BOOT_COMPLETED that is broadcast after the system finishes booting. See [*RECEIVE_BOOT_COMPLETED*](https://developer.android.com/reference/android/Manifest.permission#RECEIVE_BOOT_COMPLETED).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatformandroid_property_permissions/receive_mms"></div>

[`bool`](class_bool.md) **permissions/receive_mms** <div id="class_editorexportplatformandroid_property_permissions/receive_mms"></div>

Allows an application to monitor incoming MMS messages. See [*RECEIVE_MMS*](https://developer.android.com/reference/android/Manifest.permission#RECEIVE_MMS).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatformandroid_property_permissions/receive_sms"></div>

[`bool`](class_bool.md) **permissions/receive_sms** <div id="class_editorexportplatformandroid_property_permissions/receive_sms"></div>

Allows an application to receive SMS messages. See [*RECEIVE_SMS*](https://developer.android.com/reference/android/Manifest.permission#RECEIVE_SMS).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatformandroid_property_permissions/receive_wap_push"></div>

[`bool`](class_bool.md) **permissions/receive_wap_push** <div id="class_editorexportplatformandroid_property_permissions/receive_wap_push"></div>

Allows an application to receive WAP push messages. See [*RECEIVE_WAP_PUSH*](https://developer.android.com/reference/android/Manifest.permission#RECEIVE_WAP_PUSH).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatformandroid_property_permissions/record_audio"></div>

[`bool`](class_bool.md) **permissions/record_audio** <div id="class_editorexportplatformandroid_property_permissions/record_audio"></div>

Allows an application to record audio. See [*RECORD_AUDIO*](https://developer.android.com/reference/android/Manifest.permission#RECORD_AUDIO).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatformandroid_property_permissions/reorder_tasks"></div>

[`bool`](class_bool.md) **permissions/reorder_tasks** <div id="class_editorexportplatformandroid_property_permissions/reorder_tasks"></div>

Allows an application to change the Z-order of tasks. See [*REORDER_TASKS*](https://developer.android.com/reference/android/Manifest.permission#REORDER_TASKS).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatformandroid_property_permissions/restart_packages"></div>

[`bool`](class_bool.md) **permissions/restart_packages** <div id="class_editorexportplatformandroid_property_permissions/restart_packages"></div>

**已弃用：** Deprecated in API level 15.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatformandroid_property_permissions/send_respond_via_message"></div>

[`bool`](class_bool.md) **permissions/send_respond_via_message** <div id="class_editorexportplatformandroid_property_permissions/send_respond_via_message"></div>

Allows an application (Phone) to send a request to other applications to handle the respond-via-message action during incoming calls. See [*SEND_RESPOND_VIA_MESSAGE*](https://developer.android.com/reference/android/Manifest.permission#SEND_RESPOND_VIA_MESSAGE).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatformandroid_property_permissions/send_sms"></div>

[`bool`](class_bool.md) **permissions/send_sms** <div id="class_editorexportplatformandroid_property_permissions/send_sms"></div>

Allows an application to send SMS messages. See [*SEND_SMS*](https://developer.android.com/reference/android/Manifest.permission#SEND_SMS).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatformandroid_property_permissions/set_activity_watcher"></div>

[`bool`](class_bool.md) **permissions/set_activity_watcher** <div id="class_editorexportplatformandroid_property_permissions/set_activity_watcher"></div>

Allows an application to watch and control how activities are started globally in the system.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatformandroid_property_permissions/set_alarm"></div>

[`bool`](class_bool.md) **permissions/set_alarm** <div id="class_editorexportplatformandroid_property_permissions/set_alarm"></div>

Allows an application to broadcast an Intent to set an alarm for the user. See [*SET_ALARM*](https://developer.android.com/reference/android/Manifest.permission#SET_ALARM).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatformandroid_property_permissions/set_always_finish"></div>

[`bool`](class_bool.md) **permissions/set_always_finish** <div id="class_editorexportplatformandroid_property_permissions/set_always_finish"></div>

Allows an application to control whether activities are immediately finished when put in the background. See [*SET_ALWAYS_FINISH*](https://developer.android.com/reference/android/Manifest.permission#SET_ALWAYS_FINISH).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatformandroid_property_permissions/set_animation_scale"></div>

[`bool`](class_bool.md) **permissions/set_animation_scale** <div id="class_editorexportplatformandroid_property_permissions/set_animation_scale"></div>

Allows to modify the global animation scaling factor. See [*SET_ANIMATION_SCALE*](https://developer.android.com/reference/android/Manifest.permission#SET_ANIMATION_SCALE).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatformandroid_property_permissions/set_debug_app"></div>

[`bool`](class_bool.md) **permissions/set_debug_app** <div id="class_editorexportplatformandroid_property_permissions/set_debug_app"></div>

Configure an application for debugging. See [*SET_DEBUG_APP*](https://developer.android.com/reference/android/Manifest.permission#SET_DEBUG_APP).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatformandroid_property_permissions/set_orientation"></div>

[`bool`](class_bool.md) **permissions/set_orientation** <div id="class_editorexportplatformandroid_property_permissions/set_orientation"></div>

Allows low-level access to setting the orientation (actually rotation) of the screen.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatformandroid_property_permissions/set_pointer_speed"></div>

[`bool`](class_bool.md) **permissions/set_pointer_speed** <div id="class_editorexportplatformandroid_property_permissions/set_pointer_speed"></div>

Allows low-level access to setting the pointer speed.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatformandroid_property_permissions/set_preferred_applications"></div>

[`bool`](class_bool.md) **permissions/set_preferred_applications** <div id="class_editorexportplatformandroid_property_permissions/set_preferred_applications"></div>

**已弃用：** Deprecated in API level 15.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatformandroid_property_permissions/set_process_limit"></div>

[`bool`](class_bool.md) **permissions/set_process_limit** <div id="class_editorexportplatformandroid_property_permissions/set_process_limit"></div>

Allows an application to set the maximum number of (not needed) application processes that can be running. See [*SET_PROCESS_LIMIT*](https://developer.android.com/reference/android/Manifest.permission#SET_PROCESS_LIMIT).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatformandroid_property_permissions/set_time"></div>

[`bool`](class_bool.md) **permissions/set_time** <div id="class_editorexportplatformandroid_property_permissions/set_time"></div>

Allows applications to set the system time directly. See [*SET_TIME*](https://developer.android.com/reference/android/Manifest.permission#SET_TIME).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatformandroid_property_permissions/set_time_zone"></div>

[`bool`](class_bool.md) **permissions/set_time_zone** <div id="class_editorexportplatformandroid_property_permissions/set_time_zone"></div>

Allows applications to set the system time zone directly. See [*SET_TIME_ZONE*](https://developer.android.com/reference/android/Manifest.permission#SET_TIME_ZONE).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatformandroid_property_permissions/set_wallpaper"></div>

[`bool`](class_bool.md) **permissions/set_wallpaper** <div id="class_editorexportplatformandroid_property_permissions/set_wallpaper"></div>

Allows applications to set the wallpaper. See [*SET_WALLPAPER*](https://developer.android.com/reference/android/Manifest.permission#SET_WALLPAPER).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatformandroid_property_permissions/set_wallpaper_hints"></div>

[`bool`](class_bool.md) **permissions/set_wallpaper_hints** <div id="class_editorexportplatformandroid_property_permissions/set_wallpaper_hints"></div>

Allows applications to set the wallpaper hints. See [*SET_WALLPAPER_HINTS*](https://developer.android.com/reference/android/Manifest.permission#SET_WALLPAPER_HINTS).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatformandroid_property_permissions/signal_persistent_processes"></div>

[`bool`](class_bool.md) **permissions/signal_persistent_processes** <div id="class_editorexportplatformandroid_property_permissions/signal_persistent_processes"></div>

Allow an application to request that a signal be sent to all persistent processes. See [*SIGNAL_PERSISTENT_PROCESSES*](https://developer.android.com/reference/android/Manifest.permission#SIGNAL_PERSISTENT_PROCESSES).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatformandroid_property_permissions/status_bar"></div>

[`bool`](class_bool.md) **permissions/status_bar** <div id="class_editorexportplatformandroid_property_permissions/status_bar"></div>

Allows an application to open, close, or disable the status bar and its icons. See [*STATUS_BAR*](https://developer.android.com/reference/android/Manifest.permission#STATUS_BAR).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatformandroid_property_permissions/subscribed_feeds_read"></div>

[`bool`](class_bool.md) **permissions/subscribed_feeds_read** <div id="class_editorexportplatformandroid_property_permissions/subscribed_feeds_read"></div>

Allows an application to allow access the subscribed feeds ContentProvider.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatformandroid_property_permissions/subscribed_feeds_write"></div>

[`bool`](class_bool.md) **permissions/subscribed_feeds_write** <div id="class_editorexportplatformandroid_property_permissions/subscribed_feeds_write"></div>

**已弃用：** 未来版本中可能会修改或移除该属性。

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatformandroid_property_permissions/system_alert_window"></div>

[`bool`](class_bool.md) **permissions/system_alert_window** <div id="class_editorexportplatformandroid_property_permissions/system_alert_window"></div>

Allows an app to create windows using the type WindowManager.LayoutParams.TYPE_APPLICATION_OVERLAY, shown on top of all other apps. See [*SYSTEM_ALERT_WINDOW*](https://developer.android.com/reference/android/Manifest.permission#SYSTEM_ALERT_WINDOW).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatformandroid_property_permissions/transmit_ir"></div>

[`bool`](class_bool.md) **permissions/transmit_ir** <div id="class_editorexportplatformandroid_property_permissions/transmit_ir"></div>

Allows using the device's IR transmitter, if available. See [*TRANSMIT_IR*](https://developer.android.com/reference/android/Manifest.permission#TRANSMIT_IR).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatformandroid_property_permissions/uninstall_shortcut"></div>

[`bool`](class_bool.md) **permissions/uninstall_shortcut** <div id="class_editorexportplatformandroid_property_permissions/uninstall_shortcut"></div>

**已弃用：** 未来版本中可能会修改或移除该属性。

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatformandroid_property_permissions/update_device_stats"></div>

[`bool`](class_bool.md) **permissions/update_device_stats** <div id="class_editorexportplatformandroid_property_permissions/update_device_stats"></div>

Allows an application to update device statistics. See [*UPDATE_DEVICE_STATS*](https://developer.android.com/reference/android/Manifest.permission#UPDATE_DEVICE_STATS).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatformandroid_property_permissions/use_credentials"></div>

[`bool`](class_bool.md) **permissions/use_credentials** <div id="class_editorexportplatformandroid_property_permissions/use_credentials"></div>

Allows an application to request authtokens from the AccountManager.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatformandroid_property_permissions/use_sip"></div>

[`bool`](class_bool.md) **permissions/use_sip** <div id="class_editorexportplatformandroid_property_permissions/use_sip"></div>

Allows an application to use SIP service. See [*USE_SIP*](https://developer.android.com/reference/android/Manifest.permission#USE_SIP).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatformandroid_property_permissions/vibrate"></div>

[`bool`](class_bool.md) **permissions/vibrate** <div id="class_editorexportplatformandroid_property_permissions/vibrate"></div>

Allows access to the vibrator. See [*VIBRATE*](https://developer.android.com/reference/android/Manifest.permission#VIBRATE).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatformandroid_property_permissions/wake_lock"></div>

[`bool`](class_bool.md) **permissions/wake_lock** <div id="class_editorexportplatformandroid_property_permissions/wake_lock"></div>

Allows using PowerManager WakeLocks to keep processor from sleeping or screen from dimming. See [*WAKE_LOCK*](https://developer.android.com/reference/android/Manifest.permission#WAKE_LOCK).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatformandroid_property_permissions/write_apn_settings"></div>

[`bool`](class_bool.md) **permissions/write_apn_settings** <div id="class_editorexportplatformandroid_property_permissions/write_apn_settings"></div>

Allows applications to write the apn settings and read sensitive fields of an existing apn settings like user and password. See [*WRITE_APN_SETTINGS*](https://developer.android.com/reference/android/Manifest.permission#WRITE_APN_SETTINGS).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatformandroid_property_permissions/write_calendar"></div>

[`bool`](class_bool.md) **permissions/write_calendar** <div id="class_editorexportplatformandroid_property_permissions/write_calendar"></div>

Allows an application to write the user's calendar data. See [*WRITE_CALENDAR*](https://developer.android.com/reference/android/Manifest.permission#WRITE_CALENDAR).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatformandroid_property_permissions/write_call_log"></div>

[`bool`](class_bool.md) **permissions/write_call_log** <div id="class_editorexportplatformandroid_property_permissions/write_call_log"></div>

Allows an application to write (but not read) the user's call log data. See [*WRITE_CALL_LOG*](https://developer.android.com/reference/android/Manifest.permission#WRITE_CALL_LOG).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatformandroid_property_permissions/write_contacts"></div>

[`bool`](class_bool.md) **permissions/write_contacts** <div id="class_editorexportplatformandroid_property_permissions/write_contacts"></div>

Allows an application to write the user's contacts data. See [*WRITE_CONTACTS*](https://developer.android.com/reference/android/Manifest.permission#WRITE_CONTACTS).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatformandroid_property_permissions/write_external_storage"></div>

[`bool`](class_bool.md) **permissions/write_external_storage** <div id="class_editorexportplatformandroid_property_permissions/write_external_storage"></div>

Allows an application to write to external storage. See [*WRITE_EXTERNAL_STORAGE*](https://developer.android.com/reference/android/Manifest.permission#WRITE_EXTERNAL_STORAGE).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatformandroid_property_permissions/write_gservices"></div>

[`bool`](class_bool.md) **permissions/write_gservices** <div id="class_editorexportplatformandroid_property_permissions/write_gservices"></div>

Allows an application to modify the Google service map. See [*WRITE_GSERVICES*](https://developer.android.com/reference/android/Manifest.permission#WRITE_GSERVICES).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatformandroid_property_permissions/write_history_bookmarks"></div>

[`bool`](class_bool.md) **permissions/write_history_bookmarks** <div id="class_editorexportplatformandroid_property_permissions/write_history_bookmarks"></div>

Allows an application to write (but not read) the user's browsing history and bookmarks.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatformandroid_property_permissions/write_profile"></div>

[`bool`](class_bool.md) **permissions/write_profile** <div id="class_editorexportplatformandroid_property_permissions/write_profile"></div>

Allows an application to write (but not read) the user's personal profile data.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatformandroid_property_permissions/write_secure_settings"></div>

[`bool`](class_bool.md) **permissions/write_secure_settings** <div id="class_editorexportplatformandroid_property_permissions/write_secure_settings"></div>

Allows an application to read or write the secure system settings. See [*WRITE_SECURE_SETTINGS*](https://developer.android.com/reference/android/Manifest.permission#WRITE_SECURE_SETTINGS).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatformandroid_property_permissions/write_settings"></div>

[`bool`](class_bool.md) **permissions/write_settings** <div id="class_editorexportplatformandroid_property_permissions/write_settings"></div>

Allows an application to read or write the system settings. See [*WRITE_SETTINGS*](https://developer.android.com/reference/android/Manifest.permission#WRITE_SETTINGS).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatformandroid_property_permissions/write_sms"></div>

[`bool`](class_bool.md) **permissions/write_sms** <div id="class_editorexportplatformandroid_property_permissions/write_sms"></div>

Allows an application to write SMS messages.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatformandroid_property_permissions/write_social_stream"></div>

[`bool`](class_bool.md) **permissions/write_social_stream** <div id="class_editorexportplatformandroid_property_permissions/write_social_stream"></div>

Allows an application to write (but not read) the user's social stream data.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatformandroid_property_permissions/write_sync_settings"></div>

[`bool`](class_bool.md) **permissions/write_sync_settings** <div id="class_editorexportplatformandroid_property_permissions/write_sync_settings"></div>

Allows applications to write the sync settings. See [*WRITE_SYNC_SETTINGS*](https://developer.android.com/reference/android/Manifest.permission#WRITE_SYNC_SETTINGS).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatformandroid_property_permissions/write_user_dictionary"></div>

[`bool`](class_bool.md) **permissions/write_user_dictionary** <div id="class_editorexportplatformandroid_property_permissions/write_user_dictionary"></div>

Allows an application to write to the user dictionary.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatformandroid_property_screen/immersive_mode"></div>

[`bool`](class_bool.md) **screen/immersive_mode** <div id="class_editorexportplatformandroid_property_screen/immersive_mode"></div>

If `true`, hides navigation and status bar.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatformandroid_property_screen/support_large"></div>

[`bool`](class_bool.md) **screen/support_large** <div id="class_editorexportplatformandroid_property_screen/support_large"></div>

Indicates whether the application supports larger screen form-factors.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatformandroid_property_screen/support_normal"></div>

[`bool`](class_bool.md) **screen/support_normal** <div id="class_editorexportplatformandroid_property_screen/support_normal"></div>

Indicates whether an application supports the "normal" screen form-factors.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatformandroid_property_screen/support_small"></div>

[`bool`](class_bool.md) **screen/support_small** <div id="class_editorexportplatformandroid_property_screen/support_small"></div>

Indicates whether the application supports smaller screen form-factors.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatformandroid_property_screen/support_xlarge"></div>

[`bool`](class_bool.md) **screen/support_xlarge** <div id="class_editorexportplatformandroid_property_screen/support_xlarge"></div>

Indicates whether the application supports extra large screen form-factors.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatformandroid_property_user_data_backup/allow"></div>

[`bool`](class_bool.md) **user_data_backup/allow** <div id="class_editorexportplatformandroid_property_user_data_backup/allow"></div>

If `true`, allows the application to participate in the backup and restore infrastructure.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatformandroid_property_version/code"></div>

[`int`](class_int.md) **version/code** <div id="class_editorexportplatformandroid_property_version/code"></div>

Machine-readable application version. This must be incremented for every new release pushed to the Play Store.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatformandroid_property_version/name"></div>

[`String`](class_string.md) **version/name** <div id="class_editorexportplatformandroid_property_version/name"></div>

Application version visible to the user. Falls back to [`ProjectSettings.application/config/version`](#class_projectsettings_property_application/config/version) if left empty.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatformandroid_property_xr_features/xr_mode"></div>

[`int`](class_int.md) **xr_features/xr_mode** <div id="class_editorexportplatformandroid_property_xr_features/xr_mode"></div>

The extended reality (XR) mode for this application.

[^virtual]: 本方法通常需要用户覆盖才能生效。
[^const]: 本方法无副作用，不会修改该实例的任何成员变量。
[^vararg]: 本方法除了能接受在此处描述的参数外，还能够继续接受任意数量的参数。
[^constructor]: 本方法用于构造某个类型。
[^static]: 调用本方法无需实例，可直接使用类名进行调用。
[^operator]: 本方法描述的是使用本类型作为左操作数的有效运算符。
[^bitfield]: 这个值是由下列位标志构成位掩码的整数。
[^void]: 无返回值。
