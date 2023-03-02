const letters = 'QWERTYUIOADFGHJKLZVBNM';
const symbols = '+-_$~';

const randomInt = max => Math.floor(Math.random() * max);

function generate(length) {
    length = parseInt(length);
    if (!(length > 0)) return '';

    let result = '';
    for (let i = 0; i < length; i++) {
        const random = randomInt(3);
        switch (random) {
            case 0:
                result += letters[randomInt(letters.length)];
                break;
            case 1:
                result += symbols[randomInt(symbols.length)];
                break;
            case 2:
                result += String(randomInt(9));
        }
    }

    return result;
}

function replace(str, origin, symbol) {
    symbol = symbol[0] || '';

    result = '';
    for (let i in str) {
        if (origin.includes(str[i]))
            result += symbol;
        else
            result += str[i];
    }
    return result;
}

function countSymbols(str, symbol) {
    symbol = symbol[0];
    if (!symbol) return 0;

    let count = 0;
    for (let i of str) {
        if (i === symbol) count++;
    }

    return count;
}

let str = generate(prompt('Define length'));
alert(str);

const firstSymbol = prompt('Submit a symbol');
str = replace(str, letters, firstSymbol);
alert(str);

const secondSymbol = prompt('Submit a symbol');
str = replace(str, '1234567890', secondSymbol);
alert(str);

const firstCount = countSymbols(str, firstSymbol);
const secondCount = countSymbols(str, secondSymbol);
const othersCount = str.length - firstCount - secondCount;
alert(`'${firstSymbol}': ${firstCount}, '${secondSymbol}': ${secondCount}, other symbols: ${othersCount}.`)