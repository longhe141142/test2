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

- Numbers

```javascript
let x1 = 34.0; // Written with decimals
let x2 = 34; // Written without decimals
```

- Booleans

```javascript
let x = 5;
let y = 5;
let z = 6;
(x == y)(
  // Returns true
  x == z
); // Returns false
```
