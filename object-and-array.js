let dennis = {name:'dennis', height:180, isHandsome: true, girlfriend: {name:'lam ka yan'}}

console.log(dennis.girlfriend.name)

let students = [{name:'tom', age:18}, {name:'christopher',age:18}, {name:'yves',age:18}]

for (const student of students) {
    console.log(student.name);
}

for (let i=0; i< students.length; i++) {
    console.log(`student ${i}: `,  students[i].name);
}

for (let key in dennis) {
    console.log(key);
    console.log(dennis.key);
    console.log(dennis['key']);
    console.log(dennis[key]);
}

function getName(student) {
    console.log('hi!', student.name);

}

students.forEach(student=>{
    console.log('hi!', student.name);
})

students.forEach(getName)