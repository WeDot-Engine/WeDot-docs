<!-- ⚠ 请勿编辑本文件 ⚠ -->
<!-- 本文档使用脚本从 WeDot 引擎源码仓库生成。 -->
<!-- 生成脚本：https://github.com/WeDot-Engine/WeDot/tree/4.3/doc/tools/make_md.py； -->
<!-- 原文件：https://github.com/WeDot-Engine/WeDot/tree/4.3/doc/classes/JavaScriptBridge.xml。 -->

<div id="_class_javascriptbridge"></div>

# JavaScriptBridge

**继承：** [`Object`](class_object.md)

Singleton that connects the engine with the browser's JavaScript context in Web export.

## 描述

The JavaScriptBridge singleton is implemented only in the Web export. It's used to access the browser's JavaScript context. This allows interaction with embedding pages or calling third-party JavaScript APIs.

 **Note:** This singleton can be disabled at build-time to improve security. By default, the JavaScriptBridge singleton is enabled. Official export templates also have the JavaScriptBridge singleton enabled. See [*Compiling for the Web*](../contributing/development/compiling/compiling_for_web) in the documentation for more information.

## 方法

| [`JavaScriptObject`](class_javascriptobject.md) | [`create_callback`](#class_javascriptbridge_method_create_callback) ( callable: [`Callable`](class_callable.md) )                                                                                                                |
| [`Variant`](class_variant.md)                   | [`create_object`](#class_javascriptbridge_method_create_object) ( object: [`String`](class_string.md), ... ) vararg[^vararg]                                                                                                     |
| `void`                                          | [`download_buffer`](#class_javascriptbridge_method_download_buffer) ( buffer: [`PackedByteArray`](class_packedbytearray.md), name: [`String`](class_string.md), mime: [`String`](class_string.md) = "application/octet-stream" ) |
| [`Variant`](class_variant.md)                   | [`eval`](#class_javascriptbridge_method_eval) ( code: [`String`](class_string.md), use_global_execution_context: [`bool`](class_bool.md) = false )                                                                               |
| `void`                                          | [`force_fs_sync`](#class_javascriptbridge_method_force_fs_sync) ( )                                                                                                                                                              |
| [`JavaScriptObject`](class_javascriptobject.md) | [`get_interface`](#class_javascriptbridge_method_get_interface) ( interface: [`String`](class_string.md) )                                                                                                                       |
| [`bool`](class_bool.md)                         | [`pwa_needs_update`](#class_javascriptbridge_method_pwa_needs_update) ( ) const[^const]                                                                                                                                          |
| [Error](#enum_@globalscope_error)               | [`pwa_update`](#class_javascriptbridge_method_pwa_update) ( )                                                                                                                                                                    |

<!-- rst-class:: classref-section-separator -->

---

## 信号

<div id="_class_class_javascriptbridge_signal_pwa_update_available"></div>

**pwa_update_available** ( ) <div id="class_javascriptbridge_signal_pwa_update_available"></div>

Emitted when an update for this progressive web app has been detected but is waiting to be activated because a previous version is active. See [`pwa_update`](#class_javascriptbridge_method_pwa_update) to force the update to take place immediately.

<!-- rst-class:: classref-section-separator -->

---

## 方法说明

<div id="_class_javascriptbridge_method_create_callback"></div>

[`JavaScriptObject`](class_javascriptobject.md) **create_callback** ( callable: [`Callable`](class_callable.md) )<div id="class_javascriptbridge_method_create_callback"></div>

Creates a reference to a [`Callable`](class_callable.md) that can be used as a callback by JavaScript. The reference must be kept until the callback happens, or it won't be called at all. See [`JavaScriptObject`](class_javascriptobject.md) for usage.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_javascriptbridge_method_create_object"></div>

[`Variant`](class_variant.md) **create_object** ( object: [`String`](class_string.md), ... ) vararg[^vararg]<div id="class_javascriptbridge_method_create_object"></div>

Creates a new JavaScript object using the `new` constructor. The `object` must a valid property of the JavaScript `window`. See [`JavaScriptObject`](class_javascriptobject.md) for usage.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_javascriptbridge_method_download_buffer"></div>

`void` **download_buffer** ( buffer: [`PackedByteArray`](class_packedbytearray.md), name: [`String`](class_string.md), mime: [`String`](class_string.md) = "application/octet-stream" )<div id="class_javascriptbridge_method_download_buffer"></div>

Prompts the user to download a file containing the specified `buffer`. The file will have the given `name` and `mime` type.

 **Note:** The browser may override the [*MIME type*](https://en.wikipedia.org/wiki/Media_type) provided based on the file `name`'s extension.

 **Note:** Browsers might block the download if [`download_buffer`](#class_javascriptbridge_method_download_buffer) is not being called from a user interaction (e.g. button click).

 **Note:** Browsers might ask the user for permission or block the download if multiple download requests are made in a quick succession.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_javascriptbridge_method_eval"></div>

[`Variant`](class_variant.md) **eval** ( code: [`String`](class_string.md), use_global_execution_context: [`bool`](class_bool.md) = false )<div id="class_javascriptbridge_method_eval"></div>

Execute the string `code` as JavaScript code within the browser window. This is a call to the actual global JavaScript function `eval()`.

If `use_global_execution_context` is `true`, the code will be evaluated in the global execution context. Otherwise, it is evaluated in the execution context of a function within the engine's runtime environment.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_javascriptbridge_method_force_fs_sync"></div>

`void` **force_fs_sync** ( )<div id="class_javascriptbridge_method_force_fs_sync"></div>

Force synchronization of the persistent file system (when enabled).

 **Note:** This is only useful for modules or extensions that can't use [`FileAccess`](class_fileaccess.md) to write files.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_javascriptbridge_method_get_interface"></div>

[`JavaScriptObject`](class_javascriptobject.md) **get_interface** ( interface: [`String`](class_string.md) )<div id="class_javascriptbridge_method_get_interface"></div>

Returns an interface to a JavaScript object that can be used by scripts. The `interface` must be a valid property of the JavaScript `window`. The callback must accept a single [`Array`](class_array.md) argument, which will contain the JavaScript `arguments`. See [`JavaScriptObject`](class_javascriptobject.md) for usage.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_javascriptbridge_method_pwa_needs_update"></div>

[`bool`](class_bool.md) **pwa_needs_update** ( ) const[^const]<div id="class_javascriptbridge_method_pwa_needs_update"></div>

Returns `true` if a new version of the progressive web app is waiting to be activated.

 **Note:** Only relevant when exported as a Progressive Web App.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_javascriptbridge_method_pwa_update"></div>

[Error](#enum_@globalscope_error) **pwa_update** ( )<div id="class_javascriptbridge_method_pwa_update"></div>

Performs the live update of the progressive web app. Forcing the new version to be installed and the page to be reloaded.

 **Note:** Your application will be **reloaded in all browser tabs**.

 **Note:** Only relevant when exported as a Progressive Web App and [`pwa_needs_update`](#class_javascriptbridge_method_pwa_needs_update) returns `true`.

[^virtual]: 本方法通常需要用户覆盖才能生效。
[^const]: 本方法无副作用，不会修改该实例的任何成员变量。
[^vararg]: 本方法除了能接受在此处描述的参数外，还能够继续接受任意数量的参数。
[^constructor]: 本方法用于构造某个类型。
[^static]: 调用本方法无需实例，可直接使用类名进行调用。
[^operator]: 本方法描述的是使用本类型作为左操作数的有效运算符。
[^bitfield]: 这个值是由下列位标志构成位掩码的整数。
[^void]: 无返回值。
