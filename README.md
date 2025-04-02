# Utility Functions Library

This repository contains a JavaScript utility functions library along with corresponding unit tests. The functions include string manipulation, basic arithmetic operations, array analysis, and a Caesar cipher implementation.

## Features

- **String Manipulation**
  - `capitalize(string)`: Capitalizes the first letter of a string.
  - `reverseString(string)`: Reverses the given string.

- **Calculator**
  - `add(a, b)`: Returns the sum of two numbers.
  - `subtract(a, b)`: Returns the difference between two numbers.
  - `divide(a, b)`: Returns the quotient of two numbers (rounded to one decimal place).
  - `multiply(a, b)`: Returns the product of two numbers.

- **Caesar Cipher**
  - `caesarCipher(string, key)`: Encrypts a string using a shift cipher, preserving case and ignoring non-alphabetic characters.

- **Array Analysis**
  - `analyzeArray(arr)`: Returns an object with the average, min, max, and length of an array.

## Installation

Clone the repository and install dependencies:
```sh
git clone <repository-url>
cd <repository-folder>
npm install
```

## Running Tests

The library includes unit tests using Jest. To run the tests, execute:
```sh
npm test
```