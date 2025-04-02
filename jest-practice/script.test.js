import {capitalize, reverseString, calculator, caesarCipher, analyzeArray} from "./script.js"


// Capitalize Tests

test('more than one character string', () => {
    expect(capitalize('something')).toBe('Something');
});

test('one character string', () => {
    expect(capitalize('c')).toBe('C');
});

test('empty string', () => {
    expect(capitalize('')).toBe('');
});


// Reverse String Tests

test('more than one character string', () => {
    expect(reverseString('abc')).toBe('cba');
    expect(reverseString('abcd')).toBe('dcba');
});

test('one character string', () => {
    expect(reverseString('a')).toBe('a');
});

test('empty string', () => {
    expect(reverseString('')).toBe('');
});


// Calculator Tests

test('add', () => {
    expect(calculator['add'](25, 30)).toBeCloseTo(55);
    expect(calculator['add'](-1, 1)).toBeCloseTo(0);
});

test('subtract', () => {
    expect(calculator['subtract'](500, 100)).toBeCloseTo(400);
    expect(calculator['subtract'](-2, -1)).toBeCloseTo(-1);
});

test('divide', () => {
    expect(calculator['divide'](123, 11)).toBeCloseTo(11.2);
});

test('multiply', () => {
    expect(calculator['multiply'](2, 15)).toBe(30);
    expect(calculator.multiply(-2, 3)).toBe(-6);
})

// Caesar Cipher Tests

test('normal cipher case', () => {
    expect(caesarCipher('xyz', 3)).toBe('abc');
});

test('case sensitive cipher', () => {
    expect(caesarCipher('HeLLo', 3)).toBe('KhOOr');
});

test('non-alphabetical cases', () => {
    expect(caesarCipher('Hello, World!', 3)).toBe('Khoor, Zruog!');
});

test('large key (wraps multiple times)', () => {
    expect(caesarCipher('abc', 30)).toBe('efg'); // 30 % 26 = 4
  });

// Analyze Array Tests

test('analyze array', () => {
    expect(analyzeArray([1,8,3,4,2,6])).toEqual({
        average: 4,
        min: 1,
        max: 8,
        length: 6
     })
})

test('empty array', () => {
    expect(() => analyzeArray([])).toThrow(Error);
});