function reverseString(str) {
    let newStr = "";
    for (let i = str.length - 1; i >= 0; i--) {
        const char = str[i];
        newStr += char;
    }
    return newStr;
}

console.log(reverseString("hello"));
console.log(reverseString("cool"));

// other approaches:
// - split string into array -> reverse -> join
// - unshift characters into array -> join