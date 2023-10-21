// pass by reference VS pass by value

// e.g. integer, string: pass by value - copies value when assigned to another variable
let a = 3;
let b = a; // a == 3, b == 3
a = 4; // a == 4, b == 3

// array & object: pass by reference, object itself is not copied
let arrayA = [1, 2, 3];
let arrayB = arrayA; // shallow copy, reference to the original array is passed to arrayB
arrayA.pop(); // both arrayA and arrayB become [1, 2]