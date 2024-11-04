<!-- ⚠ 请勿编辑本文件 ⚠ -->
<!-- 本文档使用脚本从 WeDot 引擎源码仓库生成。 -->
<!-- 生成脚本：https://github.com/WeDot-Engine/WeDot/tree/4.3/doc/tools/make_md.py； -->
<!-- 原文件：https://github.com/WeDot-Engine/WeDot/tree/4.3/doc/classes/HTTPClient.xml。 -->

<div id="_class_httpclient"></div>

# HTTPClient

**继承：** [`RefCounted`](class_refcounted.md) **<** [`Object`](class_object.md)

Low-level hyper-text transfer protocol client.

## 描述

Hyper-text transfer protocol client (sometimes called "User Agent"). Used to make HTTP requests to download web content, upload files and other data or to communicate with various services, among other use cases.

See the [`HTTPRequest`](class_httprequest.md) node for a higher-level alternative.

 **Note:** This client only needs to connect to a host once (see [`connect_to_host`](#class_httpclient_method_connect_to_host)) to send multiple requests. Because of this, methods that take URLs usually take just the part after the host instead of the full URL, as the client is already connected to a host. See [`request`](#class_httpclient_method_request) for a full example and to get started.

A **HTTPClient** should be reused between multiple requests or to connect to different hosts instead of creating one client per request. Supports Transport Layer Security (TLS), including server certificate verification. HTTP status codes in the 2xx range indicate success, 3xx redirection (i.e. "try again, but over here"), 4xx something was wrong with the request, and 5xx something went wrong on the server's side.

For more information on HTTP, see [*MDN's documentation on HTTP*](https://developer.mozilla.org/en-US/docs/Web/HTTP) (or read [*RFC 2616*](https://tools.ietf.org/html/rfc2616) to get it straight from the source).

 **Note:** When exporting to Android, make sure to enable the `INTERNET` permission in the Android export preset before exporting the project or using one-click deploy. Otherwise, network communication of any kind will be blocked by Android.

 **Note:** It's recommended to use transport encryption (TLS) and to avoid sending sensitive information (such as login credentials) in HTTP GET URL parameters. Consider using HTTP POST requests or HTTP headers for such information instead.

 **Note:** When performing HTTP requests from a project exported to Web, keep in mind the remote server may not allow requests from foreign origins due to [*CORS*](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS). If you host the server in question, you should modify its backend to allow requests from foreign origins by adding the `Access-Control-Allow-Origin: *` HTTP header.

 **Note:** TLS support is currently limited to TLS 1.0, TLS 1.1, and TLS 1.2. Attempting to connect to a TLS 1.3-only server will return an error.

 **Warning:** TLS certificate revocation and certificate pinning are currently not supported. Revoked certificates are accepted as long as they are otherwise valid. If this is a concern, you may want to use automatically managed certificates with a short validity period.

## 属性

| [`bool`](class_bool.md)             | [`blocking_mode_enabled`](#class_httpclient_property_blocking_mode_enabled) | ``false`` |
| [`StreamPeer`](class_streampeer.md) | [`connection`](#class_httpclient_property_connection)                       |           |
| [`int`](class_int.md)               | [`read_chunk_size`](#class_httpclient_property_read_chunk_size)             | ``65536`` |

## 方法

| `void`                                            | [`close`](#class_httpclient_method_close) ( )                                                                                                                                                                                                          |
| [Error](#enum_@globalscope_error)                 | [`connect_to_host`](#class_httpclient_method_connect_to_host) ( host: [`String`](class_string.md), port: [`int`](class_int.md) = -1, tls_options: [`TLSOptions`](class_tlsoptions.md) = null )                                                         |
| [`int`](class_int.md)                             | [`get_response_body_length`](#class_httpclient_method_get_response_body_length) ( ) const[^const]                                                                                                                                                      |
| [`int`](class_int.md)                             | [`get_response_code`](#class_httpclient_method_get_response_code) ( ) const[^const]                                                                                                                                                                    |
| [`PackedStringArray`](class_packedstringarray.md) | [`get_response_headers`](#class_httpclient_method_get_response_headers) ( )                                                                                                                                                                            |
| [`Dictionary`](class_dictionary.md)               | [`get_response_headers_as_dictionary`](#class_httpclient_method_get_response_headers_as_dictionary) ( )                                                                                                                                                |
| [Status](#enum_httpclient_status)                 | [`get_status`](#class_httpclient_method_get_status) ( ) const[^const]                                                                                                                                                                                  |
| [`bool`](class_bool.md)                           | [`has_response`](#class_httpclient_method_has_response) ( ) const[^const]                                                                                                                                                                              |
| [`bool`](class_bool.md)                           | [`is_response_chunked`](#class_httpclient_method_is_response_chunked) ( ) const[^const]                                                                                                                                                                |
| [Error](#enum_@globalscope_error)                 | [`poll`](#class_httpclient_method_poll) ( )                                                                                                                                                                                                            |
| [`String`](class_string.md)                       | [`query_string_from_dict`](#class_httpclient_method_query_string_from_dict) ( fields: [`Dictionary`](class_dictionary.md) )                                                                                                                            |
| [`PackedByteArray`](class_packedbytearray.md)     | [`read_response_body_chunk`](#class_httpclient_method_read_response_body_chunk) ( )                                                                                                                                                                    |
| [Error](#enum_@globalscope_error)                 | [`request`](#class_httpclient_method_request) ( method: [Method](#enum_httpclient_method), url: [`String`](class_string.md), headers: [`PackedStringArray`](class_packedstringarray.md), body: [`String`](class_string.md) = "" )                      |
| [Error](#enum_@globalscope_error)                 | [`request_raw`](#class_httpclient_method_request_raw) ( method: [Method](#enum_httpclient_method), url: [`String`](class_string.md), headers: [`PackedStringArray`](class_packedstringarray.md), body: [`PackedByteArray`](class_packedbytearray.md) ) |
| `void`                                            | [`set_http_proxy`](#class_httpclient_method_set_http_proxy) ( host: [`String`](class_string.md), port: [`int`](class_int.md) )                                                                                                                         |
| `void`                                            | [`set_https_proxy`](#class_httpclient_method_set_https_proxy) ( host: [`String`](class_string.md), port: [`int`](class_int.md) )                                                                                                                       |

<!-- rst-class:: classref-section-separator -->

---

## 枚举

<div id="_class_enum_httpclient_method"></div>

enum **Method**: <div id="enum_httpclient_method"></div>

<div id="_class_httpclient_constant_method_get"></div>

[Method](#enum_httpclient_method) **METHOD_GET** = ``0``

HTTP GET method. The GET method requests a representation of the specified resource. Requests using GET should only retrieve data.

<div id="_class_httpclient_constant_method_head"></div>

[Method](#enum_httpclient_method) **METHOD_HEAD** = ``1``

HTTP HEAD method. The HEAD method asks for a response identical to that of a GET request, but without the response body. This is useful to request metadata like HTTP headers or to check if a resource exists.

<div id="_class_httpclient_constant_method_post"></div>

[Method](#enum_httpclient_method) **METHOD_POST** = ``2``

HTTP POST method. The POST method is used to submit an entity to the specified resource, often causing a change in state or side effects on the server. This is often used for forms and submitting data or uploading files.

<div id="_class_httpclient_constant_method_put"></div>

[Method](#enum_httpclient_method) **METHOD_PUT** = ``3``

HTTP PUT method. The PUT method asks to replace all current representations of the target resource with the request payload. (You can think of POST as "create or update" and PUT as "update", although many services tend to not make a clear distinction or change their meaning).

<div id="_class_httpclient_constant_method_delete"></div>

[Method](#enum_httpclient_method) **METHOD_DELETE** = ``4``

HTTP DELETE method. The DELETE method requests to delete the specified resource.

<div id="_class_httpclient_constant_method_options"></div>

[Method](#enum_httpclient_method) **METHOD_OPTIONS** = ``5``

HTTP OPTIONS method. The OPTIONS method asks for a description of the communication options for the target resource. Rarely used.

<div id="_class_httpclient_constant_method_trace"></div>

[Method](#enum_httpclient_method) **METHOD_TRACE** = ``6``

HTTP TRACE method. The TRACE method performs a message loop-back test along the path to the target resource. Returns the entire HTTP request received in the response body. Rarely used.

<div id="_class_httpclient_constant_method_connect"></div>

[Method](#enum_httpclient_method) **METHOD_CONNECT** = ``7``

HTTP CONNECT method. The CONNECT method establishes a tunnel to the server identified by the target resource. Rarely used.

<div id="_class_httpclient_constant_method_patch"></div>

[Method](#enum_httpclient_method) **METHOD_PATCH** = ``8``

HTTP PATCH method. The PATCH method is used to apply partial modifications to a resource.

<div id="_class_httpclient_constant_method_max"></div>

[Method](#enum_httpclient_method) **METHOD_MAX** = ``9``

Represents the size of the [Method](#enum_httpclient_method) enum.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_enum_httpclient_status"></div>

enum **Status**: <div id="enum_httpclient_status"></div>

<div id="_class_httpclient_constant_status_disconnected"></div>

[Status](#enum_httpclient_status) **STATUS_DISCONNECTED** = ``0``

Status: Disconnected from the server.

<div id="_class_httpclient_constant_status_resolving"></div>

[Status](#enum_httpclient_status) **STATUS_RESOLVING** = ``1``

Status: Currently resolving the hostname for the given URL into an IP.

<div id="_class_httpclient_constant_status_cant_resolve"></div>

[Status](#enum_httpclient_status) **STATUS_CANT_RESOLVE** = ``2``

Status: DNS failure: Can't resolve the hostname for the given URL.

<div id="_class_httpclient_constant_status_connecting"></div>

[Status](#enum_httpclient_status) **STATUS_CONNECTING** = ``3``

Status: Currently connecting to server.

<div id="_class_httpclient_constant_status_cant_connect"></div>

[Status](#enum_httpclient_status) **STATUS_CANT_CONNECT** = ``4``

Status: Can't connect to the server.

<div id="_class_httpclient_constant_status_connected"></div>

[Status](#enum_httpclient_status) **STATUS_CONNECTED** = ``5``

Status: Connection established.

<div id="_class_httpclient_constant_status_requesting"></div>

[Status](#enum_httpclient_status) **STATUS_REQUESTING** = ``6``

Status: Currently sending request.

<div id="_class_httpclient_constant_status_body"></div>

[Status](#enum_httpclient_status) **STATUS_BODY** = ``7``

Status: HTTP body received.

<div id="_class_httpclient_constant_status_connection_error"></div>

[Status](#enum_httpclient_status) **STATUS_CONNECTION_ERROR** = ``8``

Status: Error in HTTP connection.

<div id="_class_httpclient_constant_status_tls_handshake_error"></div>

[Status](#enum_httpclient_status) **STATUS_TLS_HANDSHAKE_ERROR** = ``9``

Status: Error in TLS handshake.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_enum_httpclient_responsecode"></div>

enum **ResponseCode**: <div id="enum_httpclient_responsecode"></div>

<div id="_class_httpclient_constant_response_continue"></div>

[ResponseCode](#enum_httpclient_responsecode) **RESPONSE_CONTINUE** = ``100``

HTTP status code `100 Continue`. Interim response that indicates everything so far is OK and that the client should continue with the request (or ignore this status if already finished).

<div id="_class_httpclient_constant_response_switching_protocols"></div>

[ResponseCode](#enum_httpclient_responsecode) **RESPONSE_SWITCHING_PROTOCOLS** = ``101``

HTTP status code `101 Switching Protocol`. Sent in response to an `Upgrade` request header by the client. Indicates the protocol the server is switching to.

<div id="_class_httpclient_constant_response_processing"></div>

[ResponseCode](#enum_httpclient_responsecode) **RESPONSE_PROCESSING** = ``102``

HTTP status code `102 Processing` (WebDAV). Indicates that the server has received and is processing the request, but no response is available yet.

<div id="_class_httpclient_constant_response_ok"></div>

[ResponseCode](#enum_httpclient_responsecode) **RESPONSE_OK** = ``200``

HTTP status code `200 OK`. The request has succeeded. Default response for successful requests. Meaning varies depending on the request. GET: The resource has been fetched and is transmitted in the message body. HEAD: The entity headers are in the message body. POST: The resource describing the result of the action is transmitted in the message body. TRACE: The message body contains the request message as received by the server.

<div id="_class_httpclient_constant_response_created"></div>

[ResponseCode](#enum_httpclient_responsecode) **RESPONSE_CREATED** = ``201``

HTTP status code `201 Created`. The request has succeeded and a new resource has been created as a result of it. This is typically the response sent after a PUT request.

<div id="_class_httpclient_constant_response_accepted"></div>

[ResponseCode](#enum_httpclient_responsecode) **RESPONSE_ACCEPTED** = ``202``

HTTP status code `202 Accepted`. The request has been received but not yet acted upon. It is non-committal, meaning that there is no way in HTTP to later send an asynchronous response indicating the outcome of processing the request. It is intended for cases where another process or server handles the request, or for batch processing.

<div id="_class_httpclient_constant_response_non_authoritative_information"></div>

[ResponseCode](#enum_httpclient_responsecode) **RESPONSE_NON_AUTHORITATIVE_INFORMATION** = ``203``

HTTP status code `203 Non-Authoritative Information`. This response code means returned meta-information set is not exact set as available from the origin server, but collected from a local or a third party copy. Except this condition, 200 OK response should be preferred instead of this response.

<div id="_class_httpclient_constant_response_no_content"></div>

[ResponseCode](#enum_httpclient_responsecode) **RESPONSE_NO_CONTENT** = ``204``

HTTP status code `204 No Content`. There is no content to send for this request, but the headers may be useful. The user-agent may update its cached headers for this resource with the new ones.

<div id="_class_httpclient_constant_response_reset_content"></div>

[ResponseCode](#enum_httpclient_responsecode) **RESPONSE_RESET_CONTENT** = ``205``

HTTP status code `205 Reset Content`. The server has fulfilled the request and desires that the client resets the "document view" that caused the request to be sent to its original state as received from the origin server.

<div id="_class_httpclient_constant_response_partial_content"></div>

[ResponseCode](#enum_httpclient_responsecode) **RESPONSE_PARTIAL_CONTENT** = ``206``

HTTP status code `206 Partial Content`. This response code is used because of a range header sent by the client to separate download into multiple streams.

<div id="_class_httpclient_constant_response_multi_status"></div>

[ResponseCode](#enum_httpclient_responsecode) **RESPONSE_MULTI_STATUS** = ``207``

HTTP status code `207 Multi-Status` (WebDAV). A Multi-Status response conveys information about multiple resources in situations where multiple status codes might be appropriate.

<div id="_class_httpclient_constant_response_already_reported"></div>

[ResponseCode](#enum_httpclient_responsecode) **RESPONSE_ALREADY_REPORTED** = ``208``

HTTP status code `208 Already Reported` (WebDAV). Used inside a DAV: propstat response element to avoid enumerating the internal members of multiple bindings to the same collection repeatedly.

<div id="_class_httpclient_constant_response_im_used"></div>

[ResponseCode](#enum_httpclient_responsecode) **RESPONSE_IM_USED** = ``226``

HTTP status code `226 IM Used` (WebDAV). The server has fulfilled a GET request for the resource, and the response is a representation of the result of one or more instance-manipulations applied to the current instance.

<div id="_class_httpclient_constant_response_multiple_choices"></div>

[ResponseCode](#enum_httpclient_responsecode) **RESPONSE_MULTIPLE_CHOICES** = ``300``

HTTP status code `300 Multiple Choice`. The request has more than one possible responses and there is no standardized way to choose one of the responses. User-agent or user should choose one of them.

<div id="_class_httpclient_constant_response_moved_permanently"></div>

[ResponseCode](#enum_httpclient_responsecode) **RESPONSE_MOVED_PERMANENTLY** = ``301``

HTTP status code `301 Moved Permanently`. Redirection. This response code means the URI of requested resource has been changed. The new URI is usually included in the response.

<div id="_class_httpclient_constant_response_found"></div>

[ResponseCode](#enum_httpclient_responsecode) **RESPONSE_FOUND** = ``302``

HTTP status code `302 Found`. Temporary redirection. This response code means the URI of requested resource has been changed temporarily. New changes in the URI might be made in the future. Therefore, this same URI should be used by the client in future requests.

<div id="_class_httpclient_constant_response_see_other"></div>

[ResponseCode](#enum_httpclient_responsecode) **RESPONSE_SEE_OTHER** = ``303``

HTTP status code `303 See Other`. The server is redirecting the user agent to a different resource, as indicated by a URI in the Location header field, which is intended to provide an indirect response to the original request.

<div id="_class_httpclient_constant_response_not_modified"></div>

[ResponseCode](#enum_httpclient_responsecode) **RESPONSE_NOT_MODIFIED** = ``304``

HTTP status code `304 Not Modified`. A conditional GET or HEAD request has been received and would have resulted in a 200 OK response if it were not for the fact that the condition evaluated to `false`.

<div id="_class_httpclient_constant_response_use_proxy"></div>

[ResponseCode](#enum_httpclient_responsecode) **RESPONSE_USE_PROXY** = ``305``

**已弃用：** Many clients ignore this response code for security reasons. It is also deprecated by the HTTP standard.

HTTP status code `305 Use Proxy`.

<div id="_class_httpclient_constant_response_switch_proxy"></div>

[ResponseCode](#enum_httpclient_responsecode) **RESPONSE_SWITCH_PROXY** = ``306``

**已弃用：** Many clients ignore this response code for security reasons. It is also deprecated by the HTTP standard.

HTTP status code `306 Switch Proxy`.

<div id="_class_httpclient_constant_response_temporary_redirect"></div>

[ResponseCode](#enum_httpclient_responsecode) **RESPONSE_TEMPORARY_REDIRECT** = ``307``

HTTP status code `307 Temporary Redirect`. The target resource resides temporarily under a different URI and the user agent MUST NOT change the request method if it performs an automatic redirection to that URI.

<div id="_class_httpclient_constant_response_permanent_redirect"></div>

[ResponseCode](#enum_httpclient_responsecode) **RESPONSE_PERMANENT_REDIRECT** = ``308``

HTTP status code `308 Permanent Redirect`. The target resource has been assigned a new permanent URI and any future references to this resource ought to use one of the enclosed URIs.

<div id="_class_httpclient_constant_response_bad_request"></div>

[ResponseCode](#enum_httpclient_responsecode) **RESPONSE_BAD_REQUEST** = ``400``

HTTP status code `400 Bad Request`. The request was invalid. The server cannot or will not process the request due to something that is perceived to be a client error (e.g., malformed request syntax, invalid request message framing, invalid request contents, or deceptive request routing).

<div id="_class_httpclient_constant_response_unauthorized"></div>

[ResponseCode](#enum_httpclient_responsecode) **RESPONSE_UNAUTHORIZED** = ``401``

HTTP status code `401 Unauthorized`. Credentials required. The request has not been applied because it lacks valid authentication credentials for the target resource.

<div id="_class_httpclient_constant_response_payment_required"></div>

[ResponseCode](#enum_httpclient_responsecode) **RESPONSE_PAYMENT_REQUIRED** = ``402``

HTTP status code `402 Payment Required`. This response code is reserved for future use. Initial aim for creating this code was using it for digital payment systems, however this is not currently used.

<div id="_class_httpclient_constant_response_forbidden"></div>

[ResponseCode](#enum_httpclient_responsecode) **RESPONSE_FORBIDDEN** = ``403``

HTTP status code `403 Forbidden`. The client does not have access rights to the content, i.e. they are unauthorized, so server is rejecting to give proper response. Unlike `401`, the client's identity is known to the server.

<div id="_class_httpclient_constant_response_not_found"></div>

[ResponseCode](#enum_httpclient_responsecode) **RESPONSE_NOT_FOUND** = ``404``

HTTP status code `404 Not Found`. The server can not find requested resource. Either the URL is not recognized or the endpoint is valid but the resource itself does not exist. May also be sent instead of 403 to hide existence of a resource if the client is not authorized.

<div id="_class_httpclient_constant_response_method_not_allowed"></div>

[ResponseCode](#enum_httpclient_responsecode) **RESPONSE_METHOD_NOT_ALLOWED** = ``405``

HTTP status code `405 Method Not Allowed`. The request's HTTP method is known by the server but has been disabled and cannot be used. For example, an API may forbid DELETE-ing a resource. The two mandatory methods, GET and HEAD, must never be disabled and should not return this error code.

<div id="_class_httpclient_constant_response_not_acceptable"></div>

[ResponseCode](#enum_httpclient_responsecode) **RESPONSE_NOT_ACCEPTABLE** = ``406``

HTTP status code `406 Not Acceptable`. The target resource does not have a current representation that would be acceptable to the user agent, according to the proactive negotiation header fields received in the request. Used when negotiation content.

<div id="_class_httpclient_constant_response_proxy_authentication_required"></div>

[ResponseCode](#enum_httpclient_responsecode) **RESPONSE_PROXY_AUTHENTICATION_REQUIRED** = ``407``

HTTP status code `407 Proxy Authentication Required`. Similar to 401 Unauthorized, but it indicates that the client needs to authenticate itself in order to use a proxy.

<div id="_class_httpclient_constant_response_request_timeout"></div>

[ResponseCode](#enum_httpclient_responsecode) **RESPONSE_REQUEST_TIMEOUT** = ``408``

HTTP status code `408 Request Timeout`. The server did not receive a complete request message within the time that it was prepared to wait.

<div id="_class_httpclient_constant_response_conflict"></div>

[ResponseCode](#enum_httpclient_responsecode) **RESPONSE_CONFLICT** = ``409``

HTTP status code `409 Conflict`. The request could not be completed due to a conflict with the current state of the target resource. This code is used in situations where the user might be able to resolve the conflict and resubmit the request.

<div id="_class_httpclient_constant_response_gone"></div>

[ResponseCode](#enum_httpclient_responsecode) **RESPONSE_GONE** = ``410``

HTTP status code `410 Gone`. The target resource is no longer available at the origin server and this condition is likely permanent.

<div id="_class_httpclient_constant_response_length_required"></div>

[ResponseCode](#enum_httpclient_responsecode) **RESPONSE_LENGTH_REQUIRED** = ``411``

HTTP status code `411 Length Required`. The server refuses to accept the request without a defined Content-Length header.

<div id="_class_httpclient_constant_response_precondition_failed"></div>

[ResponseCode](#enum_httpclient_responsecode) **RESPONSE_PRECONDITION_FAILED** = ``412``

HTTP status code `412 Precondition Failed`. One or more conditions given in the request header fields evaluated to `false` when tested on the server.

<div id="_class_httpclient_constant_response_request_entity_too_large"></div>

[ResponseCode](#enum_httpclient_responsecode) **RESPONSE_REQUEST_ENTITY_TOO_LARGE** = ``413``

HTTP status code `413 Entity Too Large`. The server is refusing to process a request because the request payload is larger than the server is willing or able to process.

<div id="_class_httpclient_constant_response_request_uri_too_long"></div>

[ResponseCode](#enum_httpclient_responsecode) **RESPONSE_REQUEST_URI_TOO_LONG** = ``414``

HTTP status code `414 Request-URI Too Long`. The server is refusing to service the request because the request-target is longer than the server is willing to interpret.

<div id="_class_httpclient_constant_response_unsupported_media_type"></div>

[ResponseCode](#enum_httpclient_responsecode) **RESPONSE_UNSUPPORTED_MEDIA_TYPE** = ``415``

HTTP status code `415 Unsupported Media Type`. The origin server is refusing to service the request because the payload is in a format not supported by this method on the target resource.

<div id="_class_httpclient_constant_response_requested_range_not_satisfiable"></div>

[ResponseCode](#enum_httpclient_responsecode) **RESPONSE_REQUESTED_RANGE_NOT_SATISFIABLE** = ``416``

HTTP status code `416 Requested Range Not Satisfiable`. None of the ranges in the request's Range header field overlap the current extent of the selected resource or the set of ranges requested has been rejected due to invalid ranges or an excessive request of small or overlapping ranges.

<div id="_class_httpclient_constant_response_expectation_failed"></div>

[ResponseCode](#enum_httpclient_responsecode) **RESPONSE_EXPECTATION_FAILED** = ``417``

HTTP status code `417 Expectation Failed`. The expectation given in the request's Expect header field could not be met by at least one of the inbound servers.

<div id="_class_httpclient_constant_response_im_a_teapot"></div>

[ResponseCode](#enum_httpclient_responsecode) **RESPONSE_IM_A_TEAPOT** = ``418``

HTTP status code `418 I'm A Teapot`. Any attempt to brew coffee with a teapot should result in the error code "418 I'm a teapot". The resulting entity body MAY be short and stout.

<div id="_class_httpclient_constant_response_misdirected_request"></div>

[ResponseCode](#enum_httpclient_responsecode) **RESPONSE_MISDIRECTED_REQUEST** = ``421``

HTTP status code `421 Misdirected Request`. The request was directed at a server that is not able to produce a response. This can be sent by a server that is not configured to produce responses for the combination of scheme and authority that are included in the request URI.

<div id="_class_httpclient_constant_response_unprocessable_entity"></div>

[ResponseCode](#enum_httpclient_responsecode) **RESPONSE_UNPROCESSABLE_ENTITY** = ``422``

HTTP status code `422 Unprocessable Entity` (WebDAV). The server understands the content type of the request entity (hence a 415 Unsupported Media Type status code is inappropriate), and the syntax of the request entity is correct (thus a 400 Bad Request status code is inappropriate) but was unable to process the contained instructions.

<div id="_class_httpclient_constant_response_locked"></div>

[ResponseCode](#enum_httpclient_responsecode) **RESPONSE_LOCKED** = ``423``

HTTP status code `423 Locked` (WebDAV). The source or destination resource of a method is locked.

<div id="_class_httpclient_constant_response_failed_dependency"></div>

[ResponseCode](#enum_httpclient_responsecode) **RESPONSE_FAILED_DEPENDENCY** = ``424``

HTTP status code `424 Failed Dependency` (WebDAV). The method could not be performed on the resource because the requested action depended on another action and that action failed.

<div id="_class_httpclient_constant_response_upgrade_required"></div>

[ResponseCode](#enum_httpclient_responsecode) **RESPONSE_UPGRADE_REQUIRED** = ``426``

HTTP status code `426 Upgrade Required`. The server refuses to perform the request using the current protocol but might be willing to do so after the client upgrades to a different protocol.

<div id="_class_httpclient_constant_response_precondition_required"></div>

[ResponseCode](#enum_httpclient_responsecode) **RESPONSE_PRECONDITION_REQUIRED** = ``428``

HTTP status code `428 Precondition Required`. The origin server requires the request to be conditional.

<div id="_class_httpclient_constant_response_too_many_requests"></div>

[ResponseCode](#enum_httpclient_responsecode) **RESPONSE_TOO_MANY_REQUESTS** = ``429``

HTTP status code `429 Too Many Requests`. The user has sent too many requests in a given amount of time (see "rate limiting"). Back off and increase time between requests or try again later.

<div id="_class_httpclient_constant_response_request_header_fields_too_large"></div>

[ResponseCode](#enum_httpclient_responsecode) **RESPONSE_REQUEST_HEADER_FIELDS_TOO_LARGE** = ``431``

HTTP status code `431 Request Header Fields Too Large`. The server is unwilling to process the request because its header fields are too large. The request MAY be resubmitted after reducing the size of the request header fields.

<div id="_class_httpclient_constant_response_unavailable_for_legal_reasons"></div>

[ResponseCode](#enum_httpclient_responsecode) **RESPONSE_UNAVAILABLE_FOR_LEGAL_REASONS** = ``451``

HTTP status code `451 Response Unavailable For Legal Reasons`. The server is denying access to the resource as a consequence of a legal demand.

<div id="_class_httpclient_constant_response_internal_server_error"></div>

[ResponseCode](#enum_httpclient_responsecode) **RESPONSE_INTERNAL_SERVER_ERROR** = ``500``

HTTP status code `500 Internal Server Error`. The server encountered an unexpected condition that prevented it from fulfilling the request.

<div id="_class_httpclient_constant_response_not_implemented"></div>

[ResponseCode](#enum_httpclient_responsecode) **RESPONSE_NOT_IMPLEMENTED** = ``501``

HTTP status code `501 Not Implemented`. The server does not support the functionality required to fulfill the request.

<div id="_class_httpclient_constant_response_bad_gateway"></div>

[ResponseCode](#enum_httpclient_responsecode) **RESPONSE_BAD_GATEWAY** = ``502``

HTTP status code `502 Bad Gateway`. The server, while acting as a gateway or proxy, received an invalid response from an inbound server it accessed while attempting to fulfill the request. Usually returned by load balancers or proxies.

<div id="_class_httpclient_constant_response_service_unavailable"></div>

[ResponseCode](#enum_httpclient_responsecode) **RESPONSE_SERVICE_UNAVAILABLE** = ``503``

HTTP status code `503 Service Unavailable`. The server is currently unable to handle the request due to a temporary overload or scheduled maintenance, which will likely be alleviated after some delay. Try again later.

<div id="_class_httpclient_constant_response_gateway_timeout"></div>

[ResponseCode](#enum_httpclient_responsecode) **RESPONSE_GATEWAY_TIMEOUT** = ``504``

HTTP status code `504 Gateway Timeout`. The server, while acting as a gateway or proxy, did not receive a timely response from an upstream server it needed to access in order to complete the request. Usually returned by load balancers or proxies.

<div id="_class_httpclient_constant_response_http_version_not_supported"></div>

[ResponseCode](#enum_httpclient_responsecode) **RESPONSE_HTTP_VERSION_NOT_SUPPORTED** = ``505``

HTTP status code `505 HTTP Version Not Supported`. The server does not support, or refuses to support, the major version of HTTP that was used in the request message.

<div id="_class_httpclient_constant_response_variant_also_negotiates"></div>

[ResponseCode](#enum_httpclient_responsecode) **RESPONSE_VARIANT_ALSO_NEGOTIATES** = ``506``

HTTP status code `506 Variant Also Negotiates`. The server has an internal configuration error: the chosen variant resource is configured to engage in transparent content negotiation itself, and is therefore not a proper end point in the negotiation process.

<div id="_class_httpclient_constant_response_insufficient_storage"></div>

[ResponseCode](#enum_httpclient_responsecode) **RESPONSE_INSUFFICIENT_STORAGE** = ``507``

HTTP status code `507 Insufficient Storage`. The method could not be performed on the resource because the server is unable to store the representation needed to successfully complete the request.

<div id="_class_httpclient_constant_response_loop_detected"></div>

[ResponseCode](#enum_httpclient_responsecode) **RESPONSE_LOOP_DETECTED** = ``508``

HTTP status code `508 Loop Detected`. The server terminated an operation because it encountered an infinite loop while processing a request with "Depth: infinity". This status indicates that the entire operation failed.

<div id="_class_httpclient_constant_response_not_extended"></div>

[ResponseCode](#enum_httpclient_responsecode) **RESPONSE_NOT_EXTENDED** = ``510``

HTTP status code `510 Not Extended`. The policy for accessing the resource has not been met in the request. The server should send back all the information necessary for the client to issue an extended request.

<div id="_class_httpclient_constant_response_network_auth_required"></div>

[ResponseCode](#enum_httpclient_responsecode) **RESPONSE_NETWORK_AUTH_REQUIRED** = ``511``

HTTP status code `511 Network Authentication Required`. The client needs to authenticate to gain network access.

<!-- rst-class:: classref-section-separator -->

---

## 属性说明

<div id="_class_httpclient_property_blocking_mode_enabled"></div>

[`bool`](class_bool.md) **blocking_mode_enabled** = ``false`` <div id="class_httpclient_property_blocking_mode_enabled"></div>

- `void` **set_blocking_mode** ( value: [`bool`](class_bool.md) )
- [`bool`](class_bool.md) **is_blocking_mode_enabled** ( )

If `true`, execution will block until all data is read from the response.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_httpclient_property_connection"></div>

[`StreamPeer`](class_streampeer.md) **connection** <div id="class_httpclient_property_connection"></div>

- `void` **set_connection** ( value: [`StreamPeer`](class_streampeer.md) )
- [`StreamPeer`](class_streampeer.md) **get_connection** ( )

The connection to use for this client.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_httpclient_property_read_chunk_size"></div>

[`int`](class_int.md) **read_chunk_size** = ``65536`` <div id="class_httpclient_property_read_chunk_size"></div>

- `void` **set_read_chunk_size** ( value: [`int`](class_int.md) )
- [`int`](class_int.md) **get_read_chunk_size** ( )

The size of the buffer used and maximum bytes to read per iteration. See [`read_response_body_chunk`](#class_httpclient_method_read_response_body_chunk).

<!-- rst-class:: classref-section-separator -->

---

## 方法说明

<div id="_class_httpclient_method_close"></div>

`void` **close** ( )<div id="class_httpclient_method_close"></div>

Closes the current connection, allowing reuse of this **HTTPClient**.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_httpclient_method_connect_to_host"></div>

[Error](#enum_@globalscope_error) **connect_to_host** ( host: [`String`](class_string.md), port: [`int`](class_int.md) = -1, tls_options: [`TLSOptions`](class_tlsoptions.md) = null )<div id="class_httpclient_method_connect_to_host"></div>

Connects to a host. This needs to be done before any requests are sent.

If no `port` is specified (or `-1` is used), it is automatically set to 80 for HTTP and 443 for HTTPS. You can pass the optional `tls_options` parameter to customize the trusted certification authorities, or the common name verification when using HTTPS. See [`TLSOptions.client`](#class_tlsoptions_method_client) and [`TLSOptions.client_unsafe`](#class_tlsoptions_method_client_unsafe).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_httpclient_method_get_response_body_length"></div>

[`int`](class_int.md) **get_response_body_length** ( ) const[^const]<div id="class_httpclient_method_get_response_body_length"></div>

Returns the response's body length.

 **Note:** Some Web servers may not send a body length. In this case, the value returned will be `-1`. If using chunked transfer encoding, the body length will also be `-1`.

 **Note:** This function always returns `-1` on the Web platform due to browsers limitations.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_httpclient_method_get_response_code"></div>

[`int`](class_int.md) **get_response_code** ( ) const[^const]<div id="class_httpclient_method_get_response_code"></div>

Returns the response's HTTP status code.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_httpclient_method_get_response_headers"></div>

[`PackedStringArray`](class_packedstringarray.md) **get_response_headers** ( )<div id="class_httpclient_method_get_response_headers"></div>

Returns the response headers.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_httpclient_method_get_response_headers_as_dictionary"></div>

[`Dictionary`](class_dictionary.md) **get_response_headers_as_dictionary** ( )<div id="class_httpclient_method_get_response_headers_as_dictionary"></div>

Returns all response headers as a Dictionary of structure `{ "key": "value1; value2" }` where the case-sensitivity of the keys and values is kept like the server delivers it. A value is a simple String, this string can have more than one value where "; " is used as separator.

 **Example:** 

```

    {
        "content-length": 12,
        "Content-Type": "application/json; charset=UTF-8",
    }
```



<!-- rst-class:: classref-item-separator -->

---

<div id="_class_httpclient_method_get_status"></div>

[Status](#enum_httpclient_status) **get_status** ( ) const[^const]<div id="class_httpclient_method_get_status"></div>

Returns a [Status](#enum_httpclient_status) constant. Need to call [`poll`](#class_httpclient_method_poll) in order to get status updates.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_httpclient_method_has_response"></div>

[`bool`](class_bool.md) **has_response** ( ) const[^const]<div id="class_httpclient_method_has_response"></div>

If `true`, this **HTTPClient** has a response available.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_httpclient_method_is_response_chunked"></div>

[`bool`](class_bool.md) **is_response_chunked** ( ) const[^const]<div id="class_httpclient_method_is_response_chunked"></div>

If `true`, this **HTTPClient** has a response that is chunked.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_httpclient_method_poll"></div>

[Error](#enum_@globalscope_error) **poll** ( )<div id="class_httpclient_method_poll"></div>

This needs to be called in order to have any request processed. Check results with [`get_status`](#class_httpclient_method_get_status).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_httpclient_method_query_string_from_dict"></div>

[`String`](class_string.md) **query_string_from_dict** ( fields: [`Dictionary`](class_dictionary.md) )<div id="class_httpclient_method_query_string_from_dict"></div>

Generates a GET/POST application/x-www-form-urlencoded style query string from a provided dictionary, e.g.:



```gdscript

    var fields = {"username": "user", "password": "pass"}
    var query_string = http_client.query_string_from_dict(fields)
    # Returns "username=user&password=pass"
```

```csharp

    var fields = new Godot.Collections.Dictionary { { "username", "user" }, { "password", "pass" } };
    string queryString = httpClient.QueryStringFromDict(fields);
    // Returns "username=user&password=pass"
```



Furthermore, if a key has a `null` value, only the key itself is added, without equal sign and value. If the value is an array, for each value in it a pair with the same key is added.



```gdscript

    var fields = {"single": 123, "not_valued": null, "multiple": [22, 33, 44]}
    var query_string = http_client.query_string_from_dict(fields)
    # Returns "single=123&not_valued&multiple=22&multiple=33&multiple=44"
```

```csharp

    var fields = new Godot.Collections.Dictionary
    {
        { "single", 123 },
        { "notValued", default },
        { "multiple", new Godot.Collections.Array { 22, 33, 44 } },
    };
    string queryString = httpClient.QueryStringFromDict(fields);
    // Returns "single=123&not_valued&multiple=22&multiple=33&multiple=44"
```











<!-- rst-class:: classref-item-separator -->

---

<div id="_class_httpclient_method_read_response_body_chunk"></div>

[`PackedByteArray`](class_packedbytearray.md) **read_response_body_chunk** ( )<div id="class_httpclient_method_read_response_body_chunk"></div>

Reads one chunk from the response.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_httpclient_method_request"></div>

[Error](#enum_@globalscope_error) **request** ( method: [Method](#enum_httpclient_method), url: [`String`](class_string.md), headers: [`PackedStringArray`](class_packedstringarray.md), body: [`String`](class_string.md) = "" )<div id="class_httpclient_method_request"></div>

Sends a request to the connected host.

The URL parameter is usually just the part after the host, so for `https://somehost.com/index.php`, it is `/index.php`. When sending requests to an HTTP proxy server, it should be an absolute URL. For [`METHOD_OPTIONS`](#class_httpclient_constant_method_options) requests, `*` is also allowed. For [`METHOD_CONNECT`](#class_httpclient_constant_method_connect) requests, it should be the authority component (`host:port`).

Headers are HTTP request headers. For available HTTP methods, see [Method](#enum_httpclient_method).

To create a POST request with query strings to push to the server, do:



```gdscript

    var fields = {"username" : "user", "password" : "pass"}
    var query_string = http_client.query_string_from_dict(fields)
    var headers = ["Content-Type: application/x-www-form-urlencoded", "Content-Length: " + str(query_string.length())]
    var result = http_client.request(http_client.METHOD_POST, "/index.php", headers, query_string)
```

```csharp

    var fields = new Godot.Collections.Dictionary { { "username", "user" }, { "password", "pass" } };
    string queryString = new HttpClient().QueryStringFromDict(fields);
    string[] headers = { "Content-Type: application/x-www-form-urlencoded", $"Content-Length: {queryString.Length}" };
    var result = new HttpClient().Request(HttpClient.Method.Post, "index.php", headers, queryString);
```



 **Note:** The `body` parameter is ignored if `method` is [`METHOD_GET`](#class_httpclient_constant_method_get). This is because GET methods can't contain request data. As a workaround, you can pass request data as a query string in the URL. See [`String.uri_encode`](#class_string_method_uri_encode) for an example.





<!-- rst-class:: classref-item-separator -->

---

<div id="_class_httpclient_method_request_raw"></div>

[Error](#enum_@globalscope_error) **request_raw** ( method: [Method](#enum_httpclient_method), url: [`String`](class_string.md), headers: [`PackedStringArray`](class_packedstringarray.md), body: [`PackedByteArray`](class_packedbytearray.md) )<div id="class_httpclient_method_request_raw"></div>

Sends a raw request to the connected host.

The URL parameter is usually just the part after the host, so for `https://somehost.com/index.php`, it is `/index.php`. When sending requests to an HTTP proxy server, it should be an absolute URL. For [`METHOD_OPTIONS`](#class_httpclient_constant_method_options) requests, `*` is also allowed. For [`METHOD_CONNECT`](#class_httpclient_constant_method_connect) requests, it should be the authority component (`host:port`).

Headers are HTTP request headers. For available HTTP methods, see [Method](#enum_httpclient_method).

Sends the body data raw, as a byte array and does not encode it in any way.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_httpclient_method_set_http_proxy"></div>

`void` **set_http_proxy** ( host: [`String`](class_string.md), port: [`int`](class_int.md) )<div id="class_httpclient_method_set_http_proxy"></div>

Sets the proxy server for HTTP requests.

The proxy server is unset if `host` is empty or `port` is -1.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_httpclient_method_set_https_proxy"></div>

`void` **set_https_proxy** ( host: [`String`](class_string.md), port: [`int`](class_int.md) )<div id="class_httpclient_method_set_https_proxy"></div>

Sets the proxy server for HTTPS requests.

The proxy server is unset if `host` is empty or `port` is -1.

[^virtual]: 本方法通常需要用户覆盖才能生效。
[^const]: 本方法无副作用，不会修改该实例的任何成员变量。
[^vararg]: 本方法除了能接受在此处描述的参数外，还能够继续接受任意数量的参数。
[^constructor]: 本方法用于构造某个类型。
[^static]: 调用本方法无需实例，可直接使用类名进行调用。
[^operator]: 本方法描述的是使用本类型作为左操作数的有效运算符。
[^bitfield]: 这个值是由下列位标志构成位掩码的整数。
[^void]: 无返回值。
