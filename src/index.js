const MORSE_TABLE = {
    '.-': 'a',
    '-...': 'b',
    '-.-.': 'c',
    '-..': 'd',
    '.': 'e',
    '..-.': 'f',
    '--.': 'g',
    '....': 'h',
    '..': 'i',
    '.---': 'j',
    '-.-': 'k',
    '.-..': 'l',
    '--': 'm',
    '-.': 'n',
    '---': 'o',
    '.--.': 'p',
    '--.-': 'q',
    '.-.': 'r',
    '...': 's',
    '-': 't',
    '..-': 'u',
    '...-': 'v',
    '.--': 'w',
    '-..-': 'x',
    '-.--': 'y',
    '--..': 'z',
    '.----': '1',
    '..---': '2',
    '...--': '3',
    '....-': '4',
    '.....': '5',
    '-....': '6',
    '--...': '7',
    '---..': '8',
    '----.': '9',
    '-----': '0',
};

function decode(expr) {
    const result = []
    for (let i = 0; i < expr.length; i += 10) {
        const morse = []
        if (expr[i] === '*')
            result.push(' ')
        else {
            for (let j = i; j < i + 10; j += 2) {
                const pair = expr[j] + expr[j + 1]
                if (pair === '10')
                    morse.push('.')
                if (pair === '11')
                    morse.push('-')
            }
            result.push(MORSE_TABLE[morse.join('')])
        }
    }
    return result.join('')
}

module.exports = {
    decode
}