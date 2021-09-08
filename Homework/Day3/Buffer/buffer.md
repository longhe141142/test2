# TABLE OF CONTENTS
- [Why Buffer?](#why-buffer-)
- [What Are Buffers?](#what-are-buffers-)
- [Usage:](#usage-)
  * [Creating Buffers](#creating-buffers)
  * [Writing to Buffers](#writing-to-buffers)
  * [Other Prototype](#other-prototype)
    + [Buffer.compare()](#buffercompare--)
    + [Buffer.concat](#bufferconcat)
    + [buf.entries()](#bufentries--)
    + [Buffer.fill()](#bufferfill--)
    + [Buffer.from()](#bufferfrom--)
    + [buff.includes()](#buffincludes--)
    + [Buffer.isEncoding()](#bufferisencoding--)
    + [buf.slice()](#bufslice--)
    + [Buffer swap](#buffer-swap)
    + [buf.json()](#bufjson--)




# Why Buffer?
- Node.js servers have to also deal with TCP streams and reading and writing to the filesystem, both of which make it necessary to deal with purely binary streams of data.
- One way to handle this problem is to just use strings anyway, which is exactly what Node.js did at first
  * However:
    + this approach is extremely problematic to work with
    + It's slow, makes you work with an API designed for strings
    + That's Not binary data, and has a tendency to break in strange and mysterious ways.
    + _Don't use binary strings. Use buffers instead!_

# What Are Buffers?
- The Buffer class in Node.js is designed to handle raw binary data
- Each buffer corresponds to some raw memory allocated outside V8
- Act somewhat like arrays of integers, but aren't resizable and have a whole bunch of methods specifically for binary data
- The integers in a buffer each represent a byte and so are limited to values from 0 to 255 inclusive.
- When using ```console.log()``` to print the ```Buffer``` instance, you'll get a chain of values in ```hexadecimal``` values.

# Usage:

## Creating Buffers
There are a few ways to create new buffers:
- This buffer is initialized and contains 8 bytes of zero:
```javascript
var buffer = Buffer.alloc(8);
// This will print out 8 bytes of zero:
// <Buffer 00 00 00 00 00 00 00 00>
```
- This initializes the buffer to the contents of this array. Keep in mind that the contents of the array are integers representing bytes.

```javascript
var buffer = Buffer.from([ 8, 6, 7, 5, 3, 0, 9]);
// This will print out 8 bytes of certain values:
// <Buffer 08 06 07 05 03 00 09>
```

- This initializes the buffer to a binary encoding of the first string as specified by the second argument (in this case, 'utf-8'). 'utf-8' is by far the most common encoding used with Node.js, but Buffer also supports others.

```javascript
var buffer = Buffer.from("I'm a string!", "utf-8");
// This will print out a chain of values in utf-8:
// <Buffer 49 27 6d 20 61 20 73 74 72 69 6e 67 21>
```

## Writing to Buffers
- Given that there is already a buffer created and start writing:
```
> var buffer = Buffer.alloc(16)
> buffer.write("Hello", "utf-8")
5
```

## Other Prototype

### Buffer.compare()
The Buffer.compare() method enables you to compare two buffer objects to check whether they are equal with the Buffer.compare() method. This method returns -1, 0, or 1, depending on the result of the comparison.

Here’s how to compare buffer objects with the B``uffer.compare() method:

```javascript
var buf1 = Buffer.from('xyz');
var buf2 = Buffer.from('xyz');
var a = Buffer.compare(buf1, buf2);

//This will return 0
console.log(a);

var buf1 = Buffer.from('x');
var buf2 = Buffer.from('y');
var a = Buffer.compare(buf1, buf2);

//This will return -1
console.log(a);

var buf1 = Buffer.from('y');
var buf2 = Buffer.from('x');
var a = Buffer.compare(buf1, buf2);

//This will return 1
console.log(a);
```

### Buffer.concat
Just like string concatenation, you can join two or more buffer objects into one object. You can also get the length of the new object gotten from concatenation.

```javascript
var buffer1 = Buffer.from('x');
var buffer2 = Buffer.from('y');
var buffer3 = Buffer.from('z');
var arr = [buffer1, buffer2, buffer3];

/*This will print buffer, !concat [ <Buffer 78>, <Buffer 79>, <Buffer 7a> ]*/
console.log(arr);

//concatenate buffer with Buffer.concat method
var buf = Buffer.concat(arr);

//This will print <Buffer 78 79 7a> concat successful
console.log(buf);
```

### buf.entries()
With ```buf.entries()```, you can return a loop of indexes and bytes from the content of a buffer object. This is used to know the position and size of buffer contents.
```javascript
var buf = Buffer.from('xyz');

for (a of buf.entries()) {
/*This will print arrays of indexes and byte of buffer content \[ 0, 120 \][ 1, 121 ][ 2, 122 ]*/
  console.log(a);
} 
```

### Buffer.fill()
- fill **buffer** with a specified value using the ```Buffer.fill()``` method. ```Buffer.fill()``` enables you to create a buffer, allocate a size, and fill with a value. The expression below shows how to use this method.

```javascript
const b = Buffer.alloc(10).fill('a');

console.log(b.toString());
// This will print aaaaaaaaaa

```

### Buffer.from()
- The ```buffer.from()``` allow create a new buffer from any object ```(string, buffer, array or ArrayBuffer())```. Need specify the object to create a buffer from.
- The syntax: ```Buffer.from(object[, offsetOrEncoding[, length]])```. 
  * The object parameter can hold:
    + strings
    + buffer
    + arrays
    + ArrayBuffer(), _which means you can create new buffers from strings, buffer, arrays, and ```ArrayBuffer()``` with the ```buffer.from``` method._
- The offset or encoding parameter is optional; it’s used for specifying string encoding while converting to buffer.
<br>
<br>
_If you not specify the encoding when creating buffers from string, the buffer will be created with a default encoding of utf8. You can also specify the number of bytes to expose with the length parameter, especially when creating buffer from ArrayBuffer._

Ex:
```javascript
// Create a buffer from a string
var mybuff = Buffer.from("Nigeria");
//Print Buffer Created
console.log(mybuff);

// Create a buffer from a buffer
// Create buffer from string
var mybuff = Buffer.from("Nigeria");
// Create buffer from the first buffer created
var buff = Buffer.from(mybuff);
// Print out final buffer created.
console.log(buff);

// create a buffer from an array
const buf = Buffer.from([0x62, 0x75, 0x66, 0x66, 0x65, 0x72]);

// Create a buffer from an arraybuffer
const ab = new ArrayBuffer(10);
// Specify offset and length
const buf = Buffer.from(ab, 0, 2);
console.log(buff);
```

### buff.includes()
- determine whether a buffer object contains any values:

```javascript
const buf = Buffer.from('this is a buffer');
console.log(buf.includes('this'));
// This will print true

console.log(buf.includes(Buffer.from('a buffer example')));
// This will print false
```

### Buffer.isEncoding()
- check whether a particular character encoding type is supported.
Ex:
```javascript
console.log(Buffer.isEncoding('hex'));
// This will print true

console.log(Buffer.isEncoding('utf-8'));
// This will print true

console.log(Buffer.isEncoding('utf/8'));
// This will print false

console.log(Buffer.isEncoding('hey'));
// This will print false
```

### buf.slice()
- create a new array from selected elements in an array. 
Ex:
```javascript
var a = Buffer.from('uvwxyz');
var b = a.slice(2,5);

console.log(b.toString());
//This will print wxy
```

### Buffer swap
Buffer swap is used to swap the byte order of a buffer object. This method can also be used for fast [endianness](https://en.wikipedia.org/wiki/Endianness)	 conversion.

```javascript
const buf1 = Buffer.from([0x1, 0x2, 0x3, 0x4, 0x5, 0x6, 0x7, 0x8]);
console.log(buf1);
// This will print <Buffer 01 02 03 04 05 06 07 08>

//swap byte order to 16 bit
buf1.swap16();
console.log(buf1);
// This will print <Buffer 02 01 04 03 06 05 08 07>

//swap byte order to 32 bit
buf1.swap32();
console.log(buf1);
// This will print <Buffer 03 04 01 02 07 08 05 06>

//swap byte order to 64 bit
buf1.swap64();
console.log(buf1);
```
### buf.json()
- Return a JSON object from a buffer object with this method. The ```buf.json()``` method returns a JSON version of the buffer object.

```javascript
const buf = Buffer.from([0x1, 0x2, 0x3, 0x4, 0x5, 0x6, 0x7, 0x8]);

console.log(buf.toJSON());
// This will print {"type":"Buffer", data:[1,2,3,4,5,6,7,8]}
```
