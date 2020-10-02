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
};

function decode(expr) {
    arr = [];
    for(i = 0; i < expr.length / 10; i++) {
        arr.push(expr.substr(i * 10, 10));
    }
    str = '';
    arr.forEach(element => {
        if (element === '**********') {
            str += ' ';
        } else {
            char = '';
            for(j = 0; j < 5; j++) {
                switch(element.substr(j * 2, 2)) {
                    case '10':    
                        char += '.';
                    break;
                    case '11':    
                        char += '-';
                    break;
                /*    case '':    
                        continue;
                    break;*/
                }
            }
            str +=  MORSE_TABLE[char];
        }
    });
    return str;
}


module.exports = {
    decode
}