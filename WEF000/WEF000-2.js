import promptSync from 'prompt-sync';
const prompt = promptSync();

// using conditionals:
function isLeapYear1(year) {
    if (year % 4 === 0) {
        if (year % 100 === 0) {
            if (year % 400 === 0) {
                return true;
            } else {
                return false
            }
        } else {
            return true;
        }
    } else {
        return false;
    }
}

// using ternary operator:
function isLeapYear2(year) {
    return (year % 4 !== 0) ? false :
        year % 100 !== 0 ? true :
            year % 400 === 0 ? true : false;
}

while(true) {
    const input = prompt('Enter year: ');
    console.log(isLeapYear2(parseInt(input)));
}