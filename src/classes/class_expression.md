<!-- ⚠ 请勿编辑本文件 ⚠ -->
<!-- 本文档使用脚本从 WeDot 引擎源码仓库生成。 -->
<!-- 生成脚本：https://github.com/WeDot-Engine/WeDot/tree/master/doc/tools/make_md.py； -->
<!-- 原文件：https://github.com/WeDot-Engine/WeDot/tree/master/doc/classes/Expression.xml。 -->

<div id="_class_expression"></div>

# Expression

**继承：** [`RefCounted`](class_refcounted.md) **<** [`Object`](class_object.md)

A class that stores an expression you can execute.

## 描述

An expression can be made of any arithmetic operation, built-in math function call, method call of a passed instance, or built-in type construction call.

An example expression text using the built-in math functions could be `sqrt(pow(3, 2) + pow(4, 2))`.

In the following example we use a [`LineEdit`](class_lineedit.md) node to write our expression and show the result.



```gdscript

    var expression = Expression.new()
    
    func _ready():
        $LineEdit.text_submitted.connect(self._on_text_submitted)
    
    func _on_text_submitted(command):
        var error = expression.parse(command)
        if error != OK:
            print(expression.get_error_text())
            return
        var result = expression.execute()
        if not expression.has_execute_failed():
            $LineEdit.text = str(result)
```

```csharp

    private Expression _expression = new Expression();
    
    public override void _Ready()
    {
        GetNode<LineEdit>("LineEdit").TextSubmitted += OnTextEntered;
    }
    
    private void OnTextEntered(string command)
    {
        Error error = _expression.Parse(command);
        if (error != Error.Ok)
        {
            GD.Print(_expression.GetErrorText());
            return;
        }
        Variant result = _expression.Execute();
        if (!_expression.HasExecuteFailed())
        {
            GetNode<LineEdit>("LineEdit").Text = result.ToString();
        }
    }
```







## 方法

|||
|:-:|:--|
| [`Variant`](class_variant.md)     | [`execute`](class_expression.md#class_expression_method_execute) ( inputs: [`Array`](class_array.md) = [], base_instance: [`Object`](class_object.md) = null, show_error: [`bool`](class_bool.md) = true, const_calls_only: [`bool`](class_bool.md) = false ) |
| [`String`](class_string.md)       | [`get_error_text`](class_expression.md#class_expression_method_get_error_text) ( ) const[^const]                                                                                                                                                              |
| [`bool`](class_bool.md)           | [`has_execute_failed`](class_expression.md#class_expression_method_has_execute_failed) ( ) const[^const]                                                                                                                                                      |
| [Error](#enum_@globalscope_error) | [`parse`](class_expression.md#class_expression_method_parse) ( expression: [`String`](class_string.md), input_names: [`PackedStringArray`](class_packedstringarray.md) = PackedStringArray() )                                                                |

<!-- rst-class:: classref-section-separator -->

---

## 方法说明

<div id="_class_expression_method_execute"></div>

[`Variant`](class_variant.md) **execute** ( inputs: [`Array`](class_array.md) = [], base_instance: [`Object`](class_object.md) = null, show_error: [`bool`](class_bool.md) = true, const_calls_only: [`bool`](class_bool.md) = false )<div id="class_expression_method_execute"></div>

Executes the expression that was previously parsed by [`parse`](class_expression.md#class_expression_method_parse) and returns the result. Before you use the returned object, you should check if the method failed by calling [`has_execute_failed`](class_expression.md#class_expression_method_has_execute_failed).

If you defined input variables in [`parse`](class_expression.md#class_expression_method_parse), you can specify their values in the inputs array, in the same order.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_expression_method_get_error_text"></div>

[`String`](class_string.md) **get_error_text** ( ) const[^const]<div id="class_expression_method_get_error_text"></div>

Returns the error text if [`parse`](class_expression.md#class_expression_method_parse) or [`execute`](class_expression.md#class_expression_method_execute) has failed.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_expression_method_has_execute_failed"></div>

[`bool`](class_bool.md) **has_execute_failed** ( ) const[^const]<div id="class_expression_method_has_execute_failed"></div>

Returns `true` if [`execute`](class_expression.md#class_expression_method_execute) has failed.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_expression_method_parse"></div>

[Error](#enum_@globalscope_error) **parse** ( expression: [`String`](class_string.md), input_names: [`PackedStringArray`](class_packedstringarray.md) = PackedStringArray() )<div id="class_expression_method_parse"></div>

Parses the expression and returns an [Error](#enum_@globalscope_error) code.

You can optionally specify names of variables that may appear in the expression with `input_names`, so that you can bind them when it gets executed.

[^virtual]: 本方法通常需要用户覆盖才能生效。
[^const]: 本方法无副作用，不会修改该实例的任何成员变量。
[^vararg]: 本方法除了能接受在此处描述的参数外，还能够继续接受任意数量的参数。
[^constructor]: 本方法用于构造某个类型。
[^static]: 调用本方法无需实例，可直接使用类名进行调用。
[^operator]: 本方法描述的是使用本类型作为左操作数的有效运算符。
[^bitfield]: 这个值是由下列位标志构成位掩码的整数。
[^void]: 无返回值。
