function checkMarkSix(prizes, guesses) {
for (let guess of guesses) {
    if (!prizes.includes(guess)) return false
}
return true
}

function randomPick(genNumber, max) {
    // set only stores unique value
    let bid = new Set()
    while (bid.size <  genNumber) {
        bid.add(Math.floor(Math.random() * max) + 1)
    }
    return Array.from(bid)
}

function quickPick(prizes, guessTimes) {
    let results = []
    for (let i=0;i< guessTimes;i++) {
        const bid = randomPick(2, 20)
        const win = checkMarkSix(prizes, bid)
       results.push({win, bid})
    }
    return results
}

console.log(checkMarkSix([1, 3, 5, 7, 9, 11], [1, 3]))
console.log(checkMarkSix([1, 3, 5, 7, 9, 11], [2, 3]))
console.log(checkMarkSix([2, 4, 10, 15, 14, 19], [2, 19]))

for (let i=0;i<20;i++) {
    console.log(randomPick(2, 20))
}

const bids = quickPick([1, 3, 5, 7, 9, 11], 100)

for (let i=0; i< bids.length; i++) {
    setTimeout(()=>{
        console.log('Your quick pick:', bids[i].bid);
        console.log(bids[i].win ? 'WIN' : 'LOSE');
    }, 1000 * i)
}