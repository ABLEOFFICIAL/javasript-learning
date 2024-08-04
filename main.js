// datatypes

const name = 'Josh, computer, desktop';
const age = 20;
const rating = 5;
const iscool = true;
const x = null;
const y = undefined;
let z;

console.log(name)
console.log(age)
console.log(rating)
console.log(iscool)
console.log(x)
console.log(y)
console.log(z)

console.log(typeof name)
console.log(typeof age)
console.log(typeof rating)
console.log(typeof iscool)
console.log(typeof x)
console.log(typeof y)
console.log(typeof z)

console.log(name.length)
console.log(name.toUpperCase())
console.log(name.toLowerCase())
console.log(name.substring(0, 5).toUpperCase())

// arrays
console.log(name.split(', '))

// concatenation
const hello = `my name is ${name} and i am ${age}`;

console.log(hello)

// for loop
for(let i = 0; i<=9; i++) {
    console.log(i)
}

for(let y = 5; y < 11; y++) {
    console.log (`for number loop ${y}`)
}

// whhile loop
let t = 0
while (t < 6) {
    console.log (`while loop number ${t}`);
    t++;
} 