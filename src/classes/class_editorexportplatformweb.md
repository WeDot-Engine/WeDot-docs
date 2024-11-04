<!-- ⚠ 请勿编辑本文件 ⚠ -->
<!-- 本文档使用脚本从 WeDot 引擎源码仓库生成。 -->
<!-- 生成脚本：https://github.com/WeDot-Engine/WeDot/tree/4.3/doc/tools/make_md.py； -->
<!-- 原文件：https://github.com/WeDot-Engine/WeDot/tree/4.3/platform/web/doc_classes/EditorExportPlatformWeb.xml。 -->

<div id="_class_editorexportplatformweb"></div>

# EditorExportPlatformWeb

**继承：** [`EditorExportPlatform`](class_editorexportplatform.md) **<** [`RefCounted`](class_refcounted.md) **<** [`Object`](class_object.md)

Exporter for the Web.

## 描述

The Web exporter customizes how a web build is handled. In the editor's "Export" window, it is created when adding a new "Web" preset.

 **Note:** Godot on Web is rendered inside a `<canvas>` tag. Normally, the canvas cannot be positioned or resized manually, but otherwise acts as the main [`Window`](class_window.md) of the application.

## 属性

| [`String`](class_string.md) | [`custom_template/debug`](#class_editorexportplatformweb_property_custom_template/debug)                                                                         |
| [`String`](class_string.md) | [`custom_template/release`](#class_editorexportplatformweb_property_custom_template/release)                                                                     |
| [`int`](class_int.md)       | [`html/canvas_resize_policy`](#class_editorexportplatformweb_property_html/canvas_resize_policy)                                                                 |
| [`String`](class_string.md) | [`html/custom_html_shell`](#class_editorexportplatformweb_property_html/custom_html_shell)                                                                       |
| [`bool`](class_bool.md)     | [`html/experimental_virtual_keyboard`](#class_editorexportplatformweb_property_html/experimental_virtual_keyboard)                                               |
| [`bool`](class_bool.md)     | [`html/export_icon`](#class_editorexportplatformweb_property_html/export_icon)                                                                                   |
| [`bool`](class_bool.md)     | [`html/focus_canvas_on_start`](#class_editorexportplatformweb_property_html/focus_canvas_on_start)                                                               |
| [`String`](class_string.md) | [`html/head_include`](#class_editorexportplatformweb_property_html/head_include)                                                                                 |
| [`Color`](class_color.md)   | [`progressive_web_app/background_color`](#class_editorexportplatformweb_property_progressive_web_app/background_color)                                           |
| [`int`](class_int.md)       | [`progressive_web_app/display`](#class_editorexportplatformweb_property_progressive_web_app/display)                                                             |
| [`bool`](class_bool.md)     | [`progressive_web_app/enabled`](#class_editorexportplatformweb_property_progressive_web_app/enabled)                                                             |
| [`bool`](class_bool.md)     | [`progressive_web_app/ensure_cross_origin_isolation_headers`](#class_editorexportplatformweb_property_progressive_web_app/ensure_cross_origin_isolation_headers) |
| [`String`](class_string.md) | [`progressive_web_app/icon_144x144`](#class_editorexportplatformweb_property_progressive_web_app/icon_144x144)                                                   |
| [`String`](class_string.md) | [`progressive_web_app/icon_180x180`](#class_editorexportplatformweb_property_progressive_web_app/icon_180x180)                                                   |
| [`String`](class_string.md) | [`progressive_web_app/icon_512x512`](#class_editorexportplatformweb_property_progressive_web_app/icon_512x512)                                                   |
| [`String`](class_string.md) | [`progressive_web_app/offline_page`](#class_editorexportplatformweb_property_progressive_web_app/offline_page)                                                   |
| [`int`](class_int.md)       | [`progressive_web_app/orientation`](#class_editorexportplatformweb_property_progressive_web_app/orientation)                                                     |
| [`bool`](class_bool.md)     | [`variant/extensions_support`](#class_editorexportplatformweb_property_variant/extensions_support)                                                               |
| [`bool`](class_bool.md)     | [`variant/thread_support`](#class_editorexportplatformweb_property_variant/thread_support)                                                                       |
| [`bool`](class_bool.md)     | [`vram_texture_compression/for_desktop`](#class_editorexportplatformweb_property_vram_texture_compression/for_desktop)                                           |
| [`bool`](class_bool.md)     | [`vram_texture_compression/for_mobile`](#class_editorexportplatformweb_property_vram_texture_compression/for_mobile)                                             |

<!-- rst-class:: classref-section-separator -->

---

## 属性说明

<div id="_class_editorexportplatformweb_property_custom_template/debug"></div>

[`String`](class_string.md) **custom_template/debug** <div id="class_editorexportplatformweb_property_custom_template/debug"></div>

File path to the custom export template used for debug builds. If left empty, the default template is used.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatformweb_property_custom_template/release"></div>

[`String`](class_string.md) **custom_template/release** <div id="class_editorexportplatformweb_property_custom_template/release"></div>

File path to the custom export template used for release builds. If left empty, the default template is used.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatformweb_property_html/canvas_resize_policy"></div>

[`int`](class_int.md) **html/canvas_resize_policy** <div id="class_editorexportplatformweb_property_html/canvas_resize_policy"></div>

Determines how the canvas should be resized by Godot.

- **None:** The canvas is not automatically resized.

- **Project:** The size of the canvas is dependent on the [`ProjectSettings`](class_projectsettings.md).

- **Adaptive:** The canvas is automatically resized to fit as much of the web page as possible.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatformweb_property_html/custom_html_shell"></div>

[`String`](class_string.md) **html/custom_html_shell** <div id="class_editorexportplatformweb_property_html/custom_html_shell"></div>

The custom HTML page that wraps the exported web build. If left empty, the default HTML shell is used.

For more information, see the [*Customizing HTML5 Shell*](../tutorials/platform/web/customizing_html5_shell) tutorial.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatformweb_property_html/experimental_virtual_keyboard"></div>

[`bool`](class_bool.md) **html/experimental_virtual_keyboard** <div id="class_editorexportplatformweb_property_html/experimental_virtual_keyboard"></div>

**实验性：** 未来版本中可能会修改或移除该属性。

If `true`, embeds support for a virtual keyboard into the web page, which is shown when necessary on touchscreen devices.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatformweb_property_html/export_icon"></div>

[`bool`](class_bool.md) **html/export_icon** <div id="class_editorexportplatformweb_property_html/export_icon"></div>

If `true`, the project icon will be used as the favicon for this application's web page.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatformweb_property_html/focus_canvas_on_start"></div>

[`bool`](class_bool.md) **html/focus_canvas_on_start** <div id="class_editorexportplatformweb_property_html/focus_canvas_on_start"></div>

If `true`, the canvas will be focused as soon as the application is loaded, if the browser window is already in focus.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatformweb_property_html/head_include"></div>

[`String`](class_string.md) **html/head_include** <div id="class_editorexportplatformweb_property_html/head_include"></div>

Additional HTML tags to include inside the `<head>`, such as `<meta>` tags.

 **Note:** You do not need to add a `<title>` tag, as it is automatically included based on the project's name.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatformweb_property_progressive_web_app/background_color"></div>

[`Color`](class_color.md) **progressive_web_app/background_color** <div id="class_editorexportplatformweb_property_progressive_web_app/background_color"></div>

The background color used behind the web application.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatformweb_property_progressive_web_app/display"></div>

[`int`](class_int.md) **progressive_web_app/display** <div id="class_editorexportplatformweb_property_progressive_web_app/display"></div>

The [*display mode*](https://developer.mozilla.org/en-US/docs/Web/Manifest/display/) to use for this progressive web application. Different browsers and platforms may not behave the same.

- **Fullscreen:** Displays the app in fullscreen and hides all of the browser's UI elements.

- **Standalone:** Displays the app in a separate window and hides all of the browser's UI elements.

- **Minimal UI:** Displays the app in a separate window and only shows the browser's UI elements for navigation.

- **Browser:** Displays the app as a normal web page.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatformweb_property_progressive_web_app/enabled"></div>

[`bool`](class_bool.md) **progressive_web_app/enabled** <div id="class_editorexportplatformweb_property_progressive_web_app/enabled"></div>

If `true`, turns this web build into a [*progressive web application*](https://en.wikipedia.org/wiki/Progressive_web_app) (PWA).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatformweb_property_progressive_web_app/ensure_cross_origin_isolation_headers"></div>

[`bool`](class_bool.md) **progressive_web_app/ensure_cross_origin_isolation_headers** <div id="class_editorexportplatformweb_property_progressive_web_app/ensure_cross_origin_isolation_headers"></div>

When enabled, the progressive web app will make sure that each request has cross-origin isolation headers (COEP/COOP).

This can simplify the setup to serve the exported game.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatformweb_property_progressive_web_app/icon_144x144"></div>

[`String`](class_string.md) **progressive_web_app/icon_144x144** <div id="class_editorexportplatformweb_property_progressive_web_app/icon_144x144"></div>

File path to the smallest icon for this web application. If not defined, defaults to the project icon.

 **Note:** If the icon is not 144x144, it will be automatically resized for the final build.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatformweb_property_progressive_web_app/icon_180x180"></div>

[`String`](class_string.md) **progressive_web_app/icon_180x180** <div id="class_editorexportplatformweb_property_progressive_web_app/icon_180x180"></div>

File path to the small icon for this web application. If not defined, defaults to the project icon.

 **Note:** If the icon is not 180x180, it will be automatically resized for the final build.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatformweb_property_progressive_web_app/icon_512x512"></div>

[`String`](class_string.md) **progressive_web_app/icon_512x512** <div id="class_editorexportplatformweb_property_progressive_web_app/icon_512x512"></div>

File path to the smallest icon for this web application. If not defined, defaults to the project icon.

 **Note:** If the icon is not 512x512, it will be automatically resized for the final build.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatformweb_property_progressive_web_app/offline_page"></div>

[`String`](class_string.md) **progressive_web_app/offline_page** <div id="class_editorexportplatformweb_property_progressive_web_app/offline_page"></div>

The page to display, should the server hosting the page not be available. This page is saved in the client's machine.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatformweb_property_progressive_web_app/orientation"></div>

[`int`](class_int.md) **progressive_web_app/orientation** <div id="class_editorexportplatformweb_property_progressive_web_app/orientation"></div>

The orientation to use when the web application is run through a mobile device.

- **Any:** No orientation is forced.

- **Landscape:** Forces a horizontal layout (wider than it is taller).

- **Portrait:** Forces a vertical layout (taller than it is wider).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatformweb_property_variant/extensions_support"></div>

[`bool`](class_bool.md) **variant/extensions_support** <div id="class_editorexportplatformweb_property_variant/extensions_support"></div>

If `true` enables [`GDExtension`](class_gdextension.md) support for this web build.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatformweb_property_variant/thread_support"></div>

[`bool`](class_bool.md) **variant/thread_support** <div id="class_editorexportplatformweb_property_variant/thread_support"></div>

If `true`, the exported game will support threads. It requires [*a "cross-origin isolated" website*](https://web.dev/articles/coop-coep), which may be difficult to set up and is limited for security reasons (such as not being able to communicate with third-party websites).

If `false`, the exported game will not support threads. As a result, it is more prone to performance and audio issues, but will only require to be run on an HTTPS website.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatformweb_property_vram_texture_compression/for_desktop"></div>

[`bool`](class_bool.md) **vram_texture_compression/for_desktop** <div id="class_editorexportplatformweb_property_vram_texture_compression/for_desktop"></div>

If `true`, allows textures to be optimized for desktop through the S3TC algorithm.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatformweb_property_vram_texture_compression/for_mobile"></div>

[`bool`](class_bool.md) **vram_texture_compression/for_mobile** <div id="class_editorexportplatformweb_property_vram_texture_compression/for_mobile"></div>

If `true` allows textures to be optimized for mobile through the ETC2 algorithm.

[^virtual]: 本方法通常需要用户覆盖才能生效。
[^const]: 本方法无副作用，不会修改该实例的任何成员变量。
[^vararg]: 本方法除了能接受在此处描述的参数外，还能够继续接受任意数量的参数。
[^constructor]: 本方法用于构造某个类型。
[^static]: 调用本方法无需实例，可直接使用类名进行调用。
[^operator]: 本方法描述的是使用本类型作为左操作数的有效运算符。
[^bitfield]: 这个值是由下列位标志构成位掩码的整数。
[^void]: 无返回值。
