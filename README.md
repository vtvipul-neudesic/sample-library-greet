# Sample Library

This is a simple library created because I wanted to learn how to create, prepare, and push an npm library to Git.

## Installation

To install the library, run the following command:

```bash
npm install sample-library
```

## Usage

Once installed, you can import the library into your project using the following code:

```javascript
const { greet } = require('samplelibrary');
```

Function in library: Greet.
```javascript
console.log(greet({ firstName: 'John', lastName: 'Doe' }));
```
