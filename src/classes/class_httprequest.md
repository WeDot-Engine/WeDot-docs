<!-- ⚠ 请勿编辑本文件 ⚠ -->
<!-- 本文档使用脚本从 WeDot 引擎源码仓库生成。 -->
<!-- 生成脚本：https://github.com/WeDot-Engine/WeDot/tree/4.3/doc/tools/make_md.py； -->
<!-- 原文件：https://github.com/WeDot-Engine/WeDot/tree/4.3/doc/classes/HTTPRequest.xml。 -->

<div id="_class_httprequest"></div>

# HTTPRequest

**继承：** [`Node`](class_node.md) **<** [`Object`](class_object.md)

A node with the ability to send HTTP(S) requests.

## 描述

A node with the ability to send HTTP requests. Uses [`HTTPClient`](class_httpclient.md) internally.

Can be used to make HTTP requests, i.e. download or upload files or web content via HTTP.

 **Warning:** See the notes and warnings on [`HTTPClient`](class_httpclient.md) for limitations, especially regarding TLS security.

 **Note:** When exporting to Android, make sure to enable the `INTERNET` permission in the Android export preset before exporting the project or using one-click deploy. Otherwise, network communication of any kind will be blocked by Android.

 **Example of contacting a REST API and printing one of its returned fields:** 



```gdscript

    func _ready():
        # Create an HTTP request node and connect its completion signal.
        var http_request = HTTPRequest.new()
        add_child(http_request)
        http_request.request_completed.connect(self._http_request_completed)
    
        # Perform a GET request. The URL below returns JSON as of writing.
        var error = http_request.request("https://httpbin.org/get")
        if error != OK:
            push_error("An error occurred in the HTTP request.")
    
        # Perform a POST request. The URL below returns JSON as of writing.
        # Note: Don't make simultaneous requests using a single HTTPRequest node.
        # The snippet below is provided for reference only.
        var body = JSON.new().stringify({"name": "Godette"})
        error = http_request.request("https://httpbin.org/post", [], HTTPClient.METHOD_POST, body)
        if error != OK:
            push_error("An error occurred in the HTTP request.")
    
    # Called when the HTTP request is completed.
    func _http_request_completed(result, response_code, headers, body):
        var json = JSON.new()
        json.parse(body.get_string_from_utf8())
        var response = json.get_data()
    
        # Will print the user agent string used by the HTTPRequest node (as recognized by httpbin.org).
        print(response.headers["User-Agent"])
```

```csharp

    public override void _Ready()
    {
        // Create an HTTP request node and connect its completion signal.
        var httpRequest = new HttpRequest();
        AddChild(httpRequest);
        httpRequest.RequestCompleted += HttpRequestCompleted;
    
        // Perform a GET request. The URL below returns JSON as of writing.
        Error error = httpRequest.Request("https://httpbin.org/get");
        if (error != Error.Ok)
        {
            GD.PushError("An error occurred in the HTTP request.");
        }
    
        // Perform a POST request. The URL below returns JSON as of writing.
        // Note: Don't make simultaneous requests using a single HTTPRequest node.
        // The snippet below is provided for reference only.
        string body = new Json().Stringify(new Godot.Collections.Dictionary
        {
            { "name", "Godette" }
        });
        error = httpRequest.Request("https://httpbin.org/post", null, HttpClient.Method.Post, body);
        if (error != Error.Ok)
        {
            GD.PushError("An error occurred in the HTTP request.");
        }
    }
    
    // Called when the HTTP request is completed.
    private void HttpRequestCompleted(long result, long responseCode, string[] headers, byte[] body)
    {
        var json = new Json();
        json.Parse(body.GetStringFromUtf8());
        var response = json.GetData().AsGodotDictionary();
    
        // Will print the user agent string used by the HTTPRequest node (as recognized by httpbin.org).
        GD.Print((response["headers"].AsGodotDictionary())["User-Agent"]);
    }
```



 **Example of loading and displaying an image using HTTPRequest:** 



```gdscript

    func _ready():
        # Create an HTTP request node and connect its completion signal.
        var http_request = HTTPRequest.new()
        add_child(http_request)
        http_request.request_completed.connect(self._http_request_completed)
    
        # Perform the HTTP request. The URL below returns a PNG image as of writing.
        var error = http_request.request("https://via.placeholder.com/512")
        if error != OK:
            push_error("An error occurred in the HTTP request.")
    
    # Called when the HTTP request is completed.
    func _http_request_completed(result, response_code, headers, body):
        if result != HTTPRequest.RESULT_SUCCESS:
            push_error("Image couldn't be downloaded. Try a different image.")
    
        var image = Image.new()
        var error = image.load_png_from_buffer(body)
        if error != OK:
            push_error("Couldn't load the image.")
    
        var texture = ImageTexture.create_from_image(image)
    
        # Display the image in a TextureRect node.
        var texture_rect = TextureRect.new()
        add_child(texture_rect)
        texture_rect.texture = texture
```

```csharp

    public override void _Ready()
    {
        // Create an HTTP request node and connect its completion signal.
        var httpRequest = new HttpRequest();
        AddChild(httpRequest);
        httpRequest.RequestCompleted += HttpRequestCompleted;
    
        // Perform the HTTP request. The URL below returns a PNG image as of writing.
        Error error = httpRequest.Request("https://via.placeholder.com/512");
        if (error != Error.Ok)
        {
            GD.PushError("An error occurred in the HTTP request.");
        }
    }
    
    // Called when the HTTP request is completed.
    private void HttpRequestCompleted(long result, long responseCode, string[] headers, byte[] body)
    {
        if (result != (long)HttpRequest.Result.Success)
        {
            GD.PushError("Image couldn't be downloaded. Try a different image.");
        }
        var image = new Image();
        Error error = image.LoadPngFromBuffer(body);
        if (error != Error.Ok)
        {
            GD.PushError("Couldn't load the image.");
        }
    
        var texture = ImageTexture.CreateFromImage(image);
    
        // Display the image in a TextureRect node.
        var textureRect = new TextureRect();
        AddChild(textureRect);
        textureRect.Texture = texture;
    }
```



 **Gzipped response bodies**: HTTPRequest will automatically handle decompression of response bodies. A `Accept-Encoding` header will be automatically added to each of your requests, unless one is already specified. Any response with a `Content-Encoding: gzip` header will automatically be decompressed and delivered to you as uncompressed bytes.









## 属性

| [`bool`](class_bool.md)     | [`accept_gzip`](#class_httprequest_property_accept_gzip)                 | ``true``  |
| [`int`](class_int.md)       | [`body_size_limit`](#class_httprequest_property_body_size_limit)         | ``-1``    |
| [`int`](class_int.md)       | [`download_chunk_size`](#class_httprequest_property_download_chunk_size) | ``65536`` |
| [`String`](class_string.md) | [`download_file`](#class_httprequest_property_download_file)             | ``""``    |
| [`int`](class_int.md)       | [`max_redirects`](#class_httprequest_property_max_redirects)             | ``8``     |
| [`float`](class_float.md)   | [`timeout`](#class_httprequest_property_timeout)                         | ``0.0``   |
| [`bool`](class_bool.md)     | [`use_threads`](#class_httprequest_property_use_threads)                 | ``false`` |

## 方法

| `void`                            | [`cancel_request`](#class_httprequest_method_cancel_request) ( )                                                                                                                                                                                                                                                         |
| [`int`](class_int.md)             | [`get_body_size`](#class_httprequest_method_get_body_size) ( ) const[^const]                                                                                                                                                                                                                                             |
| [`int`](class_int.md)             | [`get_downloaded_bytes`](#class_httprequest_method_get_downloaded_bytes) ( ) const[^const]                                                                                                                                                                                                                               |
| [Status](#enum_httpclient_status) | [`get_http_client_status`](#class_httprequest_method_get_http_client_status) ( ) const[^const]                                                                                                                                                                                                                           |
| [Error](#enum_@globalscope_error) | [`request`](#class_httprequest_method_request) ( url: [`String`](class_string.md), custom_headers: [`PackedStringArray`](class_packedstringarray.md) = PackedStringArray(), method: [Method](#enum_httpclient_method) = 0, request_data: [`String`](class_string.md) = "" )                                              |
| [Error](#enum_@globalscope_error) | [`request_raw`](#class_httprequest_method_request_raw) ( url: [`String`](class_string.md), custom_headers: [`PackedStringArray`](class_packedstringarray.md) = PackedStringArray(), method: [Method](#enum_httpclient_method) = 0, request_data_raw: [`PackedByteArray`](class_packedbytearray.md) = PackedByteArray() ) |
| `void`                            | [`set_http_proxy`](#class_httprequest_method_set_http_proxy) ( host: [`String`](class_string.md), port: [`int`](class_int.md) )                                                                                                                                                                                          |
| `void`                            | [`set_https_proxy`](#class_httprequest_method_set_https_proxy) ( host: [`String`](class_string.md), port: [`int`](class_int.md) )                                                                                                                                                                                        |
| `void`                            | [`set_tls_options`](#class_httprequest_method_set_tls_options) ( client_options: [`TLSOptions`](class_tlsoptions.md) )                                                                                                                                                                                                   |

<!-- rst-class:: classref-section-separator -->

---

## 信号

<div id="_class_class_httprequest_signal_request_completed"></div>

**request_completed** ( result: [`int`](class_int.md), response_code: [`int`](class_int.md), headers: [`PackedStringArray`](class_packedstringarray.md), body: [`PackedByteArray`](class_packedbytearray.md) ) <div id="class_httprequest_signal_request_completed"></div>

Emitted when a request is completed.

<!-- rst-class:: classref-section-separator -->

---

## 枚举

<div id="_class_enum_httprequest_result"></div>

enum **Result**: <div id="enum_httprequest_result"></div>

<div id="_class_httprequest_constant_result_success"></div>

[Result](#enum_httprequest_result) **RESULT_SUCCESS** = ``0``

Request successful.

<div id="_class_httprequest_constant_result_chunked_body_size_mismatch"></div>

[Result](#enum_httprequest_result) **RESULT_CHUNKED_BODY_SIZE_MISMATCH** = ``1``

该枚举目前没有描述，请帮我们\ :ref:`贡献一个 <doc_updating_the_class_reference>`\ 吧！



<div id="_class_httprequest_constant_result_cant_connect"></div>

[Result](#enum_httprequest_result) **RESULT_CANT_CONNECT** = ``2``

Request failed while connecting.

<div id="_class_httprequest_constant_result_cant_resolve"></div>

[Result](#enum_httprequest_result) **RESULT_CANT_RESOLVE** = ``3``

Request failed while resolving.

<div id="_class_httprequest_constant_result_connection_error"></div>

[Result](#enum_httprequest_result) **RESULT_CONNECTION_ERROR** = ``4``

Request failed due to connection (read/write) error.

<div id="_class_httprequest_constant_result_tls_handshake_error"></div>

[Result](#enum_httprequest_result) **RESULT_TLS_HANDSHAKE_ERROR** = ``5``

Request failed on TLS handshake.

<div id="_class_httprequest_constant_result_no_response"></div>

[Result](#enum_httprequest_result) **RESULT_NO_RESPONSE** = ``6``

Request does not have a response (yet).

<div id="_class_httprequest_constant_result_body_size_limit_exceeded"></div>

[Result](#enum_httprequest_result) **RESULT_BODY_SIZE_LIMIT_EXCEEDED** = ``7``

Request exceeded its maximum size limit, see [`body_size_limit`](#class_httprequest_property_body_size_limit).

<div id="_class_httprequest_constant_result_body_decompress_failed"></div>

[Result](#enum_httprequest_result) **RESULT_BODY_DECOMPRESS_FAILED** = ``8``

该枚举目前没有描述，请帮我们\ :ref:`贡献一个 <doc_updating_the_class_reference>`\ 吧！



<div id="_class_httprequest_constant_result_request_failed"></div>

[Result](#enum_httprequest_result) **RESULT_REQUEST_FAILED** = ``9``

Request failed (currently unused).

<div id="_class_httprequest_constant_result_download_file_cant_open"></div>

[Result](#enum_httprequest_result) **RESULT_DOWNLOAD_FILE_CANT_OPEN** = ``10``

HTTPRequest couldn't open the download file.

<div id="_class_httprequest_constant_result_download_file_write_error"></div>

[Result](#enum_httprequest_result) **RESULT_DOWNLOAD_FILE_WRITE_ERROR** = ``11``

HTTPRequest couldn't write to the download file.

<div id="_class_httprequest_constant_result_redirect_limit_reached"></div>

[Result](#enum_httprequest_result) **RESULT_REDIRECT_LIMIT_REACHED** = ``12``

Request reached its maximum redirect limit, see [`max_redirects`](#class_httprequest_property_max_redirects).

<div id="_class_httprequest_constant_result_timeout"></div>

[Result](#enum_httprequest_result) **RESULT_TIMEOUT** = ``13``

Request failed due to a timeout. If you expect requests to take a long time, try increasing the value of [`timeout`](#class_httprequest_property_timeout) or setting it to `0.0` to remove the timeout completely.

<!-- rst-class:: classref-section-separator -->

---

## 属性说明

<div id="_class_httprequest_property_accept_gzip"></div>

[`bool`](class_bool.md) **accept_gzip** = ``true`` <div id="class_httprequest_property_accept_gzip"></div>

- `void` **set_accept_gzip** ( value: [`bool`](class_bool.md) )
- [`bool`](class_bool.md) **is_accepting_gzip** ( )

If `true`, this header will be added to each request: `Accept-Encoding: gzip, deflate` telling servers that it's okay to compress response bodies.

Any Response body declaring a `Content-Encoding` of either `gzip` or `deflate` will then be automatically decompressed, and the uncompressed bytes will be delivered via [`request_completed`](#class_httprequest_signal_request_completed).

If the user has specified their own `Accept-Encoding` header, then no header will be added regardless of [`accept_gzip`](#class_httprequest_property_accept_gzip).

If `false` no header will be added, and no decompression will be performed on response bodies. The raw bytes of the response body will be returned via [`request_completed`](#class_httprequest_signal_request_completed).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_httprequest_property_body_size_limit"></div>

[`int`](class_int.md) **body_size_limit** = ``-1`` <div id="class_httprequest_property_body_size_limit"></div>

- `void` **set_body_size_limit** ( value: [`int`](class_int.md) )
- [`int`](class_int.md) **get_body_size_limit** ( )

Maximum allowed size for response bodies. If the response body is compressed, this will be used as the maximum allowed size for the decompressed body.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_httprequest_property_download_chunk_size"></div>

[`int`](class_int.md) **download_chunk_size** = ``65536`` <div id="class_httprequest_property_download_chunk_size"></div>

- `void` **set_download_chunk_size** ( value: [`int`](class_int.md) )
- [`int`](class_int.md) **get_download_chunk_size** ( )

The size of the buffer used and maximum bytes to read per iteration. See [`HTTPClient.read_chunk_size`](#class_httpclient_property_read_chunk_size).

Set this to a lower value (e.g. 4096 for 4 KiB) when downloading small files to decrease memory usage at the cost of download speeds.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_httprequest_property_download_file"></div>

[`String`](class_string.md) **download_file** = ``""`` <div id="class_httprequest_property_download_file"></div>

- `void` **set_download_file** ( value: [`String`](class_string.md) )
- [`String`](class_string.md) **get_download_file** ( )

The file to download into. Will output any received file into it.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_httprequest_property_max_redirects"></div>

[`int`](class_int.md) **max_redirects** = ``8`` <div id="class_httprequest_property_max_redirects"></div>

- `void` **set_max_redirects** ( value: [`int`](class_int.md) )
- [`int`](class_int.md) **get_max_redirects** ( )

Maximum number of allowed redirects.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_httprequest_property_timeout"></div>

[`float`](class_float.md) **timeout** = ``0.0`` <div id="class_httprequest_property_timeout"></div>

- `void` **set_timeout** ( value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_timeout** ( )

The duration to wait in seconds before a request times out. If [`timeout`](#class_httprequest_property_timeout) is set to `0.0` then the request will never time out. For simple requests, such as communication with a REST API, it is recommended that [`timeout`](#class_httprequest_property_timeout) is set to a value suitable for the server response time (e.g. between `1.0` and `10.0`). This will help prevent unwanted timeouts caused by variation in server response times while still allowing the application to detect when a request has timed out. For larger requests such as file downloads it is suggested the [`timeout`](#class_httprequest_property_timeout) be set to `0.0`, disabling the timeout functionality. This will help to prevent large transfers from failing due to exceeding the timeout value.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_httprequest_property_use_threads"></div>

[`bool`](class_bool.md) **use_threads** = ``false`` <div id="class_httprequest_property_use_threads"></div>

- `void` **set_use_threads** ( value: [`bool`](class_bool.md) )
- [`bool`](class_bool.md) **is_using_threads** ( )

If `true`, multithreading is used to improve performance.

<!-- rst-class:: classref-section-separator -->

---

## 方法说明

<div id="_class_httprequest_method_cancel_request"></div>

`void` **cancel_request** ( )<div id="class_httprequest_method_cancel_request"></div>

Cancels the current request.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_httprequest_method_get_body_size"></div>

[`int`](class_int.md) **get_body_size** ( ) const[^const]<div id="class_httprequest_method_get_body_size"></div>

Returns the response body length.

 **Note:** Some Web servers may not send a body length. In this case, the value returned will be `-1`. If using chunked transfer encoding, the body length will also be `-1`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_httprequest_method_get_downloaded_bytes"></div>

[`int`](class_int.md) **get_downloaded_bytes** ( ) const[^const]<div id="class_httprequest_method_get_downloaded_bytes"></div>

Returns the number of bytes this HTTPRequest downloaded.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_httprequest_method_get_http_client_status"></div>

[Status](#enum_httpclient_status) **get_http_client_status** ( ) const[^const]<div id="class_httprequest_method_get_http_client_status"></div>

Returns the current status of the underlying [`HTTPClient`](class_httpclient.md). See [Status](#enum_httpclient_status).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_httprequest_method_request"></div>

[Error](#enum_@globalscope_error) **request** ( url: [`String`](class_string.md), custom_headers: [`PackedStringArray`](class_packedstringarray.md) = PackedStringArray(), method: [Method](#enum_httpclient_method) = 0, request_data: [`String`](class_string.md) = "" )<div id="class_httprequest_method_request"></div>

Creates request on the underlying [`HTTPClient`](class_httpclient.md). If there is no configuration errors, it tries to connect using [`HTTPClient.connect_to_host`](#class_httpclient_method_connect_to_host) and passes parameters onto [`HTTPClient.request`](#class_httpclient_method_request).

Returns [`@GlobalScope.OK`](#class_@globalscope_constant_ok) if request is successfully created. (Does not imply that the server has responded), [`@GlobalScope.ERR_UNCONFIGURED`](#class_@globalscope_constant_err_unconfigured) if not in the tree, [`@GlobalScope.ERR_BUSY`](#class_@globalscope_constant_err_busy) if still processing previous request, [`@GlobalScope.ERR_INVALID_PARAMETER`](#class_@globalscope_constant_err_invalid_parameter) if given string is not a valid URL format, or [`@GlobalScope.ERR_CANT_CONNECT`](#class_@globalscope_constant_err_cant_connect) if not using thread and the [`HTTPClient`](class_httpclient.md) cannot connect to host.

 **Note:** When `method` is [`HTTPClient.METHOD_GET`](#class_httpclient_constant_method_get), the payload sent via `request_data` might be ignored by the server or even cause the server to reject the request (check [*RFC 7231 section 4.3.1*](https://datatracker.ietf.org/doc/html/rfc7231#section-4.3.1) for more details). As a workaround, you can send data as a query string in the URL (see [`String.uri_encode`](#class_string_method_uri_encode) for an example).

 **Note:** It's recommended to use transport encryption (TLS) and to avoid sending sensitive information (such as login credentials) in HTTP GET URL parameters. Consider using HTTP POST requests or HTTP headers for such information instead.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_httprequest_method_request_raw"></div>

[Error](#enum_@globalscope_error) **request_raw** ( url: [`String`](class_string.md), custom_headers: [`PackedStringArray`](class_packedstringarray.md) = PackedStringArray(), method: [Method](#enum_httpclient_method) = 0, request_data_raw: [`PackedByteArray`](class_packedbytearray.md) = PackedByteArray() )<div id="class_httprequest_method_request_raw"></div>

Creates request on the underlying [`HTTPClient`](class_httpclient.md) using a raw array of bytes for the request body. If there is no configuration errors, it tries to connect using [`HTTPClient.connect_to_host`](#class_httpclient_method_connect_to_host) and passes parameters onto [`HTTPClient.request`](#class_httpclient_method_request).

Returns [`@GlobalScope.OK`](#class_@globalscope_constant_ok) if request is successfully created. (Does not imply that the server has responded), [`@GlobalScope.ERR_UNCONFIGURED`](#class_@globalscope_constant_err_unconfigured) if not in the tree, [`@GlobalScope.ERR_BUSY`](#class_@globalscope_constant_err_busy) if still processing previous request, [`@GlobalScope.ERR_INVALID_PARAMETER`](#class_@globalscope_constant_err_invalid_parameter) if given string is not a valid URL format, or [`@GlobalScope.ERR_CANT_CONNECT`](#class_@globalscope_constant_err_cant_connect) if not using thread and the [`HTTPClient`](class_httpclient.md) cannot connect to host.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_httprequest_method_set_http_proxy"></div>

`void` **set_http_proxy** ( host: [`String`](class_string.md), port: [`int`](class_int.md) )<div id="class_httprequest_method_set_http_proxy"></div>

Sets the proxy server for HTTP requests.

The proxy server is unset if `host` is empty or `port` is -1.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_httprequest_method_set_https_proxy"></div>

`void` **set_https_proxy** ( host: [`String`](class_string.md), port: [`int`](class_int.md) )<div id="class_httprequest_method_set_https_proxy"></div>

Sets the proxy server for HTTPS requests.

The proxy server is unset if `host` is empty or `port` is -1.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_httprequest_method_set_tls_options"></div>

`void` **set_tls_options** ( client_options: [`TLSOptions`](class_tlsoptions.md) )<div id="class_httprequest_method_set_tls_options"></div>

Sets the [`TLSOptions`](class_tlsoptions.md) to be used when connecting to an HTTPS server. See [`TLSOptions.client`](#class_tlsoptions_method_client).

[^virtual]: 本方法通常需要用户覆盖才能生效。
[^const]: 本方法无副作用，不会修改该实例的任何成员变量。
[^vararg]: 本方法除了能接受在此处描述的参数外，还能够继续接受任意数量的参数。
[^constructor]: 本方法用于构造某个类型。
[^static]: 调用本方法无需实例，可直接使用类名进行调用。
[^operator]: 本方法描述的是使用本类型作为左操作数的有效运算符。
[^bitfield]: 这个值是由下列位标志构成位掩码的整数。
[^void]: 无返回值。
