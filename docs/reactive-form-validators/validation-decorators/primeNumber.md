---
title: primeNumber
description: primeNumber validation  {{validatorType}}  allows user to enter only prime number.
author: rxcontributortwo
category: form-validations
subcategory: Numeric
type:tabs
linktitle: primeNumber
---

<div class="title-bar"><p>primeNumber validation  {{validatorType}}  allows user to enter only prime number.</p></div>

# When to use
Suppose you want to create a numberInfo form, which contains fields like numberType, firstNumber, secondNumber and thirdNumber and you want the user to enter input which is a prime number. Here depending upon the requirement, these scenarios may arise..
<ol class='showHideElement'>
<li>Allow firstNumber which have proper primeNumber format and adding Custom Message on firstNumber.</li>
<li>Apply validation on secondNumber field based on matched condition in the form, like if the numberType is 'Prime', then the secondNumber must be a primeNumber (Used as a function).</li>
<li>Apply validation on thirdNumber field based on matched condition in the form, like if the numberType is 'Prime', then the thirdNumber must be a primeNumber (Used as a string datatype).</li>
 <li>Shows the custom message on `FourthNumber` field by using `messageKey` property.</li>
<data-scope scope="['decorator','validator']">
<li>Apply primeNumber validation dynamically based on server rules.</li>
</data-scope>
</ol>
Let's see how primeNumber  {{validatorType}}  fulfil the need.

# Basic primeNumber Validation

<data-scope scope="['decorator','template-driven-directives','template-driven-decorators']">
First we need to create a numberInfo model and define a property of firstNumber in the model to achieve the functional need of point 1.
<div component="app-code" key="primeNumber-add-model"></div> 
</data-scope>
Through Angular FormBuilder service we create FormGroup in the component.
<data-scope scope="['decorator']">
Here we have covered Add and Edit form operations. 
</data-scope>

<data-scope scope="['validator','template-driven-directives','template-driven-decorators']">
Here we have covered Add form operations. 
</data-scope> 

<data-scope scope="['decorator']">
<div component="app-tabs" key="basic-operations"></div>
[!TabGroup]
# [Add](#tab\basicadd)
<div component="app-code" key="primeNumber-add-component"></div> 
Next, we need to write html code.
<div component="app-code" key="primeNumber-add-html"></div> 
<div component="app-example-runner" ref-component="app-primeNumber-add"></div>
# [/Add]
# [Edit](#tab\basicedit)
<div component="app-code" key="primeNumber-edit-component"></div> 
The below code is `numberInfo-data.json` for getting data from the server
<div component="app-code" key="primeNumber-edit-json"></div> 
Next, we need to write html code.
<div component="app-code" key="primeNumber-edit-html"></div> 
<div component="app-example-runner" ref-component="app-primeNumber-edit"></div>
# [/Edit]
***
</data-scope>

<data-scope scope="['validator','template-driven-directives','template-driven-decorators']">
<div component="app-code" key="primeNumber-add-component"></div> 
Next, we need to write html code.
<div component="app-code" key="primeNumber-add-html"></div> 
<div component="app-example-runner" ref-component="app-primeNumber-add"></div>
</data-scope>

# BaseConfig
<data-scope scope="['decorator']">
Below options are not mandatory to use in the `@primeNumber()` decorator. If needed then use the below options.
</data-scope>

<data-scope scope="['validator']">
Below options are not mandatory to use in the `RxwebValidators.primeNumber()` validator. If needed then use the below options.
</data-scope>

<data-scope scope="['template-driven-directives','template-driven-decorators']">
Below options are not mandatory to use in the `primeNumber` validation. If needed then use the below options.
</data-scope>

<table class="table table-bordered table-striped showHideElement">
<tr><th>Option</th><th>Description</th></tr>
<tr><td><a  (click)='scrollTo("#conditionalExpression")' title="conditionalExpression">conditionalExpression</a></td><td>primeNumber validation should be applied if the condition is matched in the `conditionalExpression` function. Validation framework will pass two parameters at the time of `conditionalExpression` check. Those two parameters are current `FormGroup` value and root `FormGroup` value. You can apply the condition on respective object value.If there is need of dynamic validation means it is not fixed in client code, it will change based on some criterias. In this scenario you can bind the expression based on the expression value is coming from the web server in `string` format. The `conditionalExpression` will work same as client function.</td></tr>
<tr><td><a  (click)='scrollTo("#message")' title="message">message</a></td><td>To override the global configuration message and set the custom error message on respective FormControl</td></tr>
<tr><td><a (click)='scrollTo("#messageKey")' title="messageKey">messageKey</a></td><td>messageKey property of BaseConfig can be used when the user wants to show a different custom validation message on some of their fields. User can define a custom messageKey globally by defining it in ReactiveFormConfig and set it in the message property of the validation.</td></tr>
</table>

## conditionalExpression 
Type :  `Function`  |  `string` 

primeNumber validation should be applied if the condition is matched in the `conditionalExpression` function. Validation framework will pass two parameters at the time of `conditionalExpression` check. Those two parameters are current `FormGroup` value and root `FormGroup` value. You can apply the condition on respective object value.
If there is need of dynamic validation means it is not fixed in client code, it will change based on some criterias. In this scenario you can bind the expression based on the expression value is coming from the web server in `string` format. The `conditionalExpression` will work same as client function.

> This won't work if you return without expression or fixed boolean value true or false; like : `conditionalExpression: (x) => x.toggle`

<data-scope scope="['validator','decorator']">
> Binding `conditionalExpression` with `Function` object.
<div component="app-code" key="primeNumber-conditionalExpressionExampleFunction-model"></div> 
</data-scope>

> Binding `conditionalExpression` with `string` object.
<div component="app-code" key="primeNumber-conditionalExpressionExampleString-model"></div> 

<div component="app-example-runner" ref-component="app-primeNumber-conditionalExpression" title="primeNumber {{validatorType}} with conditionalExpression" key="conditionalExpression"></div>

## message 
Type :  `string` 

To override the global configuration message and set the custom message on respective FormControl.

<div component="app-code" key="primeNumber-messageExample-model"></div> 
<div component="app-example-runner" ref-component="app-primeNumber-message" title="primeNumber {{validatorType}} with message" key="message"></div>

## messageKey
Type : `string`

messageKey property of BaseConfig can be used when the user wants to show a different custom validation message on some of their fields. User can define a custom messageKey globally by defining it in ReactiveFormConfig and set it in the message property of the validation.

<div component="app-code" key="primeNumber-messageKeyExample-model"></div> 
<div component="app-example-runner" ref-component="app-primeNumber-messageKey" title="primeNumber {{validatorType}} with messageKey" key="messageKey"></div>

# Complete primeNumber Example

This Complete primeNumber example which includes all the PatternConfig properties will fulfil the requirement of scenarios 1, 2 and 3.

<div component="app-tabs" key="complete"></div>
[!TabGroup]
# [Example](#tab\completeexample)
<div component="app-example-runner" ref-component="app-primeNumber-complete"></div>
# [/Example]
<data-scope scope="['decorator','template-driven-directives','template-driven-decorators']">
# [Model](#tab\completemodel)
<div component="app-code" key="primeNumber-complete-model"></div> 
# [/Model]
</data-scope>
# [Component](#tab\completecomponent)
<div component="app-code" key="primeNumber-complete-component"></div> 
# [/Component]
# [Html](#tab\completehtml)
<div component="app-code" key="primeNumber-complete-html"></div> 
# [/Html]
***

<data-scope scope="['decorator','validator']">
# Dynamic primeNumber Example

This Dynamic primeNumber example which execute based on json passed. conditional expression with function would be not apply in dynamic primeNumber example. 

<div component="app-tabs" key="dynamic"></div>

[!TabGroup]
# [Example](#tab\dynamicexample)
<div component="app-example-runner" ref-component="app-primeNumber-dynamic"></div>
# [/Example]
<data-scope scope="['decorator']">
# [Model](#tab\dynamicmodel)
<div component="app-code" key="primeNumber-dynamic-model"></div>
# [/Model]
</data-scope>
# [Component](#tab\dynamiccomponent)
<div component="app-code" key="primeNumber-dynamic-component"></div>
# [/Component]
# [Json](#tab\dynamicjson)
<div component="app-code" key="primeNumber-dynamic-json"></div>
# [/Json]
# [Html](#tab\dynamichtml)
<div component="app-code" key="primeNumber-dynamic-html"></div> 
# [/Html]
***
</data-scope>
