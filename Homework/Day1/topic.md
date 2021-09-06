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
- String:<br>
  A string (or a text string) is a series of characters like "John Doe".
  Strings are written with quotes. You can use single or double quotes:
  _Like this:_

```javascript
let carName1 = "Volvo XC60"; // Using double quotes
let carName2 = "Volvo XC60"; // Using single quotes
```

- Numbers:<br>
  JavaScript has only one type of numbers.<br>
  Numbers can be written with, or without decimals:

```javascript
let x1 = 34.0; // Written with decimals
let x2 = 34; // Written without decimals
```

- Type conversion:
- Rule:<br>
  String with number or number with number work with operands **- \* /** then result is a number<br>
  **EXCEPT "+"**

```javascript
2 * "3" // 6
6 / "2" // 3
3 - "1" // 2

3 + "3" // "33" :x:
```

- Booleans:<br>
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
  - Other values become `true`
    :heavy_exclamation_mark: **Please note: the string with zero `"0"` is `true`**
