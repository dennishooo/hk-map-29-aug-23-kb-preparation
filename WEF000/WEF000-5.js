// with for loop:
function rnaTranscription1(DNA) {
    let RNA = "";
    for (let i = 0; i < DNA.length; i++) {
        const char = DNA[i];
        switch (char) {
            case "G":
                RNA += "C";
                break;
            case "C":
                RNA += "G";
                break;
            case "T":
                RNA += "A";
                break;
            case "A":
                RNA += "U";
                break;
            default:
                throw new Error("invalid DNA string!");
        }
    }
    return RNA;
}

// with array operations:
const rnaTranscription2 = DNA => DNA.split("").map(char => {
    switch (char) {
        case "G":
            return "C";
        case "C":
            return "G";
        case "T":
            return "A";
        case "A":
            return "U";
        default:
            throw new Error("invalid DNA string!");
    }
}).join("");

console.log(rnaTranscription1("GCTAGCT"));
console.log(rnaTranscription2("GCTAGCT"));