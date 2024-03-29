- [:green_apple: BASIC JS](#-green-apple--basic-js)
  * [:high_brightness: I.Variable and Scope](#-high-brightness--ivariable-and-scope)
    + [1.let,const,var](#1let-const-var)
  * [:red_circle: II.BASIC TOPIC](#-red-circle--iibasic-topic)
    + [2.1 Data Type](#21-data-type)
    + [2.2 Object](#22-object)
    + [2.3 Function](#23-function)
    + [2.4 String method](#24-string-method)


# :green_apple: BASIC JS

## :high_brightness: I.Variable and Scope

### 1.let,const,var

|             | var                                                                              | let                                     | const                                                                                 |
| :---------- | :------------------------------------------------------------------------------- | :-------------------------------------- | :------------------------------------------------------------------------------------ |
| Scope       | globally scoped or<br> function/locally scoped.                                  | let is block scoped                     | const declarations are block scoped                                                   |
| Declaration | can be re-declared and updated                                                   | let can be updated but not re-declared. | const cannot be updated or re-declared                                                |
| Hoisting    | hoisted to the top of their scope and<br> initialized with a value of undefined. | Just like var                           | Just like let, const declarations are hoisted to the top<br> but are not initialized. |

## :red_circle: II.BASIC TOPIC

### 2.1 Data Type

- The basic types of JS :
- **String:**<br>
  A string (or a text string) is a series of characters like "John Doe".
  Strings are written with quotes. You can use single or double quotes:
  _Like this:_

```javascript
let carName1 = "Volvo XC60  🥴 "; // Using double quotes
let carName2 = "Volvo XC60"; // Using single quotes
```

- Type Conversion:<br>
- The three approaches for converting to string are:

  - value.toString()
  - "" + value
  - String(value)

- **Numbers:**<br>
  JavaScript has only one type of numbers.<br>
  Numbers can be written with, or without decimals:

```javascript
let x1 = 34.0; // Written with decimals
let x2 = 34; // Written without decimals
```

- Type conversion:
- Rule:<br>
  String with number or number with number work with operands "**- \* /**" then result is a number<br>
  **EXCEPT "+"**
  <br>

```javascript
2 * "3"; // 6
6 / "2"; // 3
3 - "1"; // 2

3 + "3"; // "33" :x:
```

In arithmetic expressions, `boolean`, `null` and `undefined` convert to a numbers as following:

```javascript
1 + true; // true becomes 1, result is 2
1 + false; // false becomes 0, result is 1
1 + null; // null becomes 0, result is 1
1 + undefined; // undefined becomes NaN, result is NaN
```

- **Booleans:**<br>
  Booleans can only have two values: `true` or `false`

```javascript
let x = 5;
let y = 5;
let z = 6;
(x == y)(
  // Returns true
  x == z
); // Returns false
```

- Type conversion:

  - Conversion rules:
  - Values that are intuitively “empty”, like 0, an empty string, null, undefined, and NaN, become `false`
  - Other values become `true`<br>
    :heavy_exclamation_mark: **Please note: the string with zero `"0"` is `true`**

- **Objects**<br>
  JavaScript objects are written with curly braces `{}`.<br>
  Object properties are written as name:value pairs, separated by commas.

```javascript
const person = {
  firstName: "John",
  lastName: "Doe",
  age: 50,
  eyeColor: "blue",
};
```

- **Undefined**<br>
  In JavaScript, a variable without a value, has the value `undefined`. The type is also `undefined`.

```javascript
let car; // Value is undefined, type is undefined
```

- **Empty Values**<br>
  An empty value has nothing to do with undefined.<br>
  An empty string has both a legal value and a type.

```javascript
let car = ""; // The value is "", the typeof is "string"
```

### 2.2 Object

- Definition:<br>
  In JavaScript, an object is a standalone entity, with properties and type.<br>
  Ex:

```javascript
const car = { type: "Fiat", model: "500", color: "white" };
```

- Accessing Object Properties:<br>
- _Two way:_

```javascript
objectName.propertyName;
```

or

```javascript
objectName["propertyName"];
```

### 2.3 Function

- Definition: <br>
- A JavaScript function is a block of code designed to perform a particular task.
- A JavaScript function is executed when "something" invokes it (calls it).

### 2.4 String method

- Extracting String Parts :bread:(3 Methods):
- slice(start, end) :wrench:
- substring(start, end) :hammer:
- substr(start, length) :nut_and_bolt:

- **The slice() Method:**
- slice() extracts a part of a string and returns the extracted part in a new string.
- The method takes 2 parameters: the start position, and the end position (end not included).
  Ex:

```javascript
let str = "Apple, Banana, Kiwi";
str.slice(7, 13); // Returns Banana
```

_Remember:If a parameter is negative, the position is counted from the end of the string._
Ex:This example slices out a portion of a string from position -12 to position -6:

```javascript
let str = "Apple, Banana, Kiwi";
str.slice(-12, -6); // Returns Banana
```

_If you omit the second parameter, the method will slice out the rest of the string or, counting from the end:_

```javascript
str.slice(7); // Returns Banana,Kiwi
str.slice(-12); // Returns Banana,Kiwi
```
- **The substring() Method**
- ```substring()``` is similar to ```slice()```.<br>
The difference is that ```substring()``` cannot accept negative indexes.
Ex:
```javascript
let str = "Apple, Banana, Kiwi";
substring(7, 13)    // Returns Banana
```
- **The substr() Method**
- ```substr()``` is similar to ```slice()```.
- The difference is that the second parameter specifies the length of the extracted part.
Ex:
```javascript
let str = "Apple, Banana, Kiwi";
str.substr(7, 6)    // Returns Banana
```

- **Replacing String Content**
- The ```replace()``` method replaces a specified value with another value in a string:
Ex:
```javascript
let text = "Please visit Microsoft and Microsoft!";
let newText = text.replace("Microsoft", "W3Schools");
```
Can use with regular expression:

```javascript
let text = "Please visit Microsoft and Microsoft!";
let newText = text.replace(/MICROSOFT/i, "W3Schools");
```
- **Other Methods:**
  - ```toUpperCase()```
  - ```toLowerCase()```
  - ```concat()```
  - ```String.trim()```
  - ```charAt()```
  - ```charCodeAt()```

