const n = 10;
console.log("n outside: ", n);

function test() {
    // console.log("n in function call: ", n); // will throw error
    const n = 20;
    console.log("n in function call: ", n);
}
test();
console.log("n after function call: ", n);