<!-- ⚠ 请勿编辑本文件 ⚠ -->
<!-- 本文档使用脚本从 WeDot 引擎源码仓库生成。 -->
<!-- 生成脚本：https://github.com/WeDot-Engine/WeDot/tree/master/doc/tools/make_md.py； -->
<!-- 原文件：https://github.com/WeDot-Engine/WeDot/tree/master/doc/classes/JSONRPC.xml。 -->

<div id="_class_jsonrpc"></div>

# JSONRPC

**继承：** [`Object`](class_object.md)

A helper to handle dictionaries which look like JSONRPC documents.

## 描述

[*JSON-RPC*](https://www.jsonrpc.org/) is a standard which wraps a method call in a [`JSON`](class_json.md) object. The object has a particular structure and identifies which method is called, the parameters to that function, and carries an ID to keep track of responses. This class implements that standard on top of [`Dictionary`](class_dictionary.md); you will have to convert between a [`Dictionary`](class_dictionary.md) and [`JSON`](class_json.md) with other functions.

## 方法

|||
|:-:|:--|
| [`Dictionary`](class_dictionary.md) | [`make_notification`](class_jsonrpc.md#class_jsonrpc_method_make_notification) ( method: [`String`](class_string.md), params: [`Variant`](class_variant.md) )                                                    |
| [`Dictionary`](class_dictionary.md) | [`make_request`](class_jsonrpc.md#class_jsonrpc_method_make_request) ( method: [`String`](class_string.md), params: [`Variant`](class_variant.md), id: [`Variant`](class_variant.md) )                           |
| [`Dictionary`](class_dictionary.md) | [`make_response`](class_jsonrpc.md#class_jsonrpc_method_make_response) ( result: [`Variant`](class_variant.md), id: [`Variant`](class_variant.md) )                                                              |
| [`Dictionary`](class_dictionary.md) | [`make_response_error`](class_jsonrpc.md#class_jsonrpc_method_make_response_error) ( code: [`int`](class_int.md), message: [`String`](class_string.md), id: [`Variant`](class_variant.md) = null ) const[^const] |
| [`Variant`](class_variant.md)       | [`process_action`](class_jsonrpc.md#class_jsonrpc_method_process_action) ( action: [`Variant`](class_variant.md), recurse: [`bool`](class_bool.md) = false )                                                     |
| [`String`](class_string.md)         | [`process_string`](class_jsonrpc.md#class_jsonrpc_method_process_string) ( action: [`String`](class_string.md) )                                                                                                 |
| `void`                              | [`set_scope`](class_jsonrpc.md#class_jsonrpc_method_set_scope) ( scope: [`String`](class_string.md), target: [`Object`](class_object.md) )                                                                       |

<!-- rst-class:: classref-section-separator -->

---

## 枚举

<div id="_class_enum_jsonrpc_errorcode"></div>

enum **ErrorCode**: <div id="enum_jsonrpc_errorcode"></div>

<div id="_class_jsonrpc_constant_parse_error"></div>

[ErrorCode](#enum_jsonrpc_errorcode) **PARSE_ERROR** = ``-32700``

The request could not be parsed as it was not valid by JSON standard ([`JSON.parse`](class_json.md#class_json_method_parse) failed).

<div id="_class_jsonrpc_constant_invalid_request"></div>

[ErrorCode](#enum_jsonrpc_errorcode) **INVALID_REQUEST** = ``-32600``

A method call was requested but the request's format is not valid.

<div id="_class_jsonrpc_constant_method_not_found"></div>

[ErrorCode](#enum_jsonrpc_errorcode) **METHOD_NOT_FOUND** = ``-32601``

A method call was requested but no function of that name existed in the JSONRPC subclass.

<div id="_class_jsonrpc_constant_invalid_params"></div>

[ErrorCode](#enum_jsonrpc_errorcode) **INVALID_PARAMS** = ``-32602``

A method call was requested but the given method parameters are not valid. Not used by the built-in JSONRPC.

<div id="_class_jsonrpc_constant_internal_error"></div>

[ErrorCode](#enum_jsonrpc_errorcode) **INTERNAL_ERROR** = ``-32603``

An internal error occurred while processing the request. Not used by the built-in JSONRPC.

<!-- rst-class:: classref-section-separator -->

---

## 方法说明

<div id="_class_jsonrpc_method_make_notification"></div>

[`Dictionary`](class_dictionary.md) **make_notification** ( method: [`String`](class_string.md), params: [`Variant`](class_variant.md) )<div id="class_jsonrpc_method_make_notification"></div>

Returns a dictionary in the form of a JSON-RPC notification. Notifications are one-shot messages which do not expect a response.

- `method`: Name of the method being called.

- `params`: An array or dictionary of parameters being passed to the method.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_jsonrpc_method_make_request"></div>

[`Dictionary`](class_dictionary.md) **make_request** ( method: [`String`](class_string.md), params: [`Variant`](class_variant.md), id: [`Variant`](class_variant.md) )<div id="class_jsonrpc_method_make_request"></div>

Returns a dictionary in the form of a JSON-RPC request. Requests are sent to a server with the expectation of a response. The ID field is used for the server to specify which exact request it is responding to.

- `method`: Name of the method being called.

- `params`: An array or dictionary of parameters being passed to the method.

- `id`: Uniquely identifies this request. The server is expected to send a response with the same ID.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_jsonrpc_method_make_response"></div>

[`Dictionary`](class_dictionary.md) **make_response** ( result: [`Variant`](class_variant.md), id: [`Variant`](class_variant.md) )<div id="class_jsonrpc_method_make_response"></div>

When a server has received and processed a request, it is expected to send a response. If you did not want a response then you need to have sent a Notification instead.

- `result`: The return value of the function which was called.

- `id`: The ID of the request this response is targeted to.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_jsonrpc_method_make_response_error"></div>

[`Dictionary`](class_dictionary.md) **make_response_error** ( code: [`int`](class_int.md), message: [`String`](class_string.md), id: [`Variant`](class_variant.md) = null ) const[^const]<div id="class_jsonrpc_method_make_response_error"></div>

Creates a response which indicates a previous reply has failed in some way.

- `code`: The error code corresponding to what kind of error this is. See the [ErrorCode](#enum_jsonrpc_errorcode) constants.

- `message`: A custom message about this error.

- `id`: The request this error is a response to.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_jsonrpc_method_process_action"></div>

[`Variant`](class_variant.md) **process_action** ( action: [`Variant`](class_variant.md), recurse: [`bool`](class_bool.md) = false )<div id="class_jsonrpc_method_process_action"></div>

Given a Dictionary which takes the form of a JSON-RPC request: unpack the request and run it. Methods are resolved by looking at the field called "method" and looking for an equivalently named function in the JSONRPC object. If one is found that method is called.

To add new supported methods extend the JSONRPC class and call [`process_action`](class_jsonrpc.md#class_jsonrpc_method_process_action) on your subclass.

 `action`: The action to be run, as a Dictionary in the form of a JSON-RPC request or notification.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_jsonrpc_method_process_string"></div>

[`String`](class_string.md) **process_string** ( action: [`String`](class_string.md) )<div id="class_jsonrpc_method_process_string"></div>

该方法目前没有描述，请帮我们\ :ref:`贡献一个 <doc_updating_the_class_reference>`\ 吧！

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_jsonrpc_method_set_scope"></div>

`void` **set_scope** ( scope: [`String`](class_string.md), target: [`Object`](class_object.md) )<div id="class_jsonrpc_method_set_scope"></div>

该方法目前没有描述，请帮我们\ :ref:`贡献一个 <doc_updating_the_class_reference>`\ 吧！

[^virtual]: 本方法通常需要用户覆盖才能生效。
[^const]: 本方法无副作用，不会修改该实例的任何成员变量。
[^vararg]: 本方法除了能接受在此处描述的参数外，还能够继续接受任意数量的参数。
[^constructor]: 本方法用于构造某个类型。
[^static]: 调用本方法无需实例，可直接使用类名进行调用。
[^operator]: 本方法描述的是使用本类型作为左操作数的有效运算符。
[^bitfield]: 这个值是由下列位标志构成位掩码的整数。
[^void]: 无返回值。
