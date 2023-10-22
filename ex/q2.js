function printPattern(char1, char2, length) { 
    let pattern = ""
    for (let i = 0; i < length; i++) {
        pattern += i % 2==0 ? char1 : char2
    }
    let start = 0
let end = pattern.length
let spaces  = ''
while (end > start) {
    console.log(spaces + pattern.slice(start,end));
    start++
    end--
    spaces += " "
}
}




printPattern(']','[',20)