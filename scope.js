const n = 10;
console.log("n outside: ", n);

function test() {
    // console.log("n in function call 1: ", n); // will throw error
    const n = 20;
    console.log("n in function call 2: ", n);
}
test();
console.log("n after function call: ", n);