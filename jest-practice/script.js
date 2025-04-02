const capitalize = (string) => string.charAt(0).toUpperCase() + string.slice(1, string.length);

const reverseString = (string) => string.split('').reverse().join('');

const calculator = {
    'add': (a, b) => a + b,
    'subtract': (a, b) => a - b,
    'divide': (a, b) => parseFloat((a / b).toFixed(1)),
    'multiply': (a, b) => a * b,
};

const caesarCipher = (string, key) => {
    key = key % 26;
    return string.split('').map((char) => {
        if(!isAlphabetChar(char)) return char;
        const charCode = char.charCodeAt(0);
        const baseChar = charCode > 96 ? 'a' : 'A';
        const baseCharCode = baseChar.charCodeAt(0);
        const charPos = charCode - baseCharCode;
        const moduledShiftPos = (charPos + key) % 26;
        return String.fromCharCode(baseCharCode + moduledShiftPos);
    }).join('');
}
const isAlphabetChar = (char) => (char >= 'a' && char <= 'z') || (char >= 'A' && char <= 'Z');

const analyzeArray = (arr) => {
    if(arr.length === 0) throw new Error('Array should not be empty!');
    const sum = arr.reduce((total, curr) => total + curr);
    return {
        average: Math.round(sum / arr.length),
        min: Math.min(...arr),
        max: Math.max(...arr),
        length: arr.length,
    }
}

export {
    capitalize,
    reverseString,
    calculator,
    caesarCipher,
    analyzeArray,
};