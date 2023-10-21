// does not work:
let arrE = [1, 2, 3];
let tmp = arrE;
let arrF = tmp; // all 3 variables are still pointing to the same referenced array

// for loop:
let a = [1, 2, 3];
let b = [];
for (let i = 0; i < a.length; i++) {
    const element = a[i];
    b.push(element);
}
a.pop();
console.log("a: ", a);
console.log("b: ", b);

// spread operator
let c = [1, 2, 3];
let d = [...c];
c.pop();
console.log("c: ", c);
console.log("d: ", d);

// spread operator on objects:
let obj1 = { foo: 1, bar: 2 };
let obj2 = { ...obj1 };

// multi-level objects:
let e = [{ foo: 1 }, { bar: 2 }, 3];
let f = [...e];
// objects inside the array are still linked by reference!

// other utilities: e.g. lodash