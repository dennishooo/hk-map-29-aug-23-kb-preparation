import promptSync from 'prompt-sync';
const prompt = promptSync();

const r = Math.floor(Math.random() * 11);
console.log("Correct answer: ", r);

let numOfWrongGuess = 0;
while (true) {
    const n = parseInt(prompt('Please make a guess: '));

    // break if answer is correct
    if (n === r) {
        console.log("Correct!");
        break;
    }

    // if answer is wrong
    numOfWrongGuess++;

    // break if player has made >3 wrong guesses
    if (numOfWrongGuess > 3) {
        console.log("Game over!");
        break;
    }

    // hints player whether the number is larger or smaller
    if (n > r) {
        console.log("The correct answer is smaller");
    } else {
        console.log("The correct answer is larger");
    }
}