const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
    '     ':  ' ',
};

const MORSE_SYMBOLS = {
    '00': '',
    '10': '.',
    '11': '-',
    '**': ' ',
}

function decode(expr) {
    let res = [];
    for (let i = 0; i < expr.length; i += 10) {
        res.push(expr.slice(i, i + 10));
    }
    res = res.map(elem => {
                 let val = [];
                 for (let i = 0; i < elem.length; i += 2) {
                     val.push(elem.slice(i, i + 2));
                 }
                 return val;
             })
             .map(el => el.map(val => MORSE_SYMBOLS[val]))
             .map(el => el.join(''))
             .map(el => MORSE_TABLE[el])
             .join('');
    return res;
}

module.exports = {
    decode
}
