// Higher order function
// Function can be passed as an argument
// function generateRandNumber (max, cb){
//     const random1 = Math.floor(Math.random()* max)
//     const random2 = Math.floor(Math.random()* max)
//     const result = cb (random1, random2)
//     return result;
// } 

// generateRandNumber(100, (rand1, rand2) => {
//     console.log(rand1, rand2);
// });

// console.log (generateRandNumber(1000, (rand1, rand2) => rand1 + rand2));
// console.log (generateRandNumber(100, (rand1, rand2) => rand1 - rand2));
// console.log (generateRandNumber(10, (rand1, rand2) => rand1*rand1 + rand2*rand2));


// Function can be return from another function
// function sqr (n){
//     return n * n;
// }

// function cube (n){
//     return n * n * n;
// }
function power (p){
    return function(n){
        let results = 1;
        for (let i = 1; i <= p; i++){
            results *= n;
        }
        return results;
    }
} 
const sqr = power(2);
const cube = power(3);
const power8 = power(8);
const power10 = power(10)

console.log(sqr(2));
console.log(cube(4));
console.log(power8(5));
console.log(power10(5));

















/**
 // Hidden concepts
 * Scope
 * Closure
 * Function Context
 * Hoisting
 */
