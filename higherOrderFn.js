// Higher order function
// Function can be passed as an argument
function generateRandNumber (max, cb){
    const random1 = Math.floor(Math.random()* max)
    const random2 = Math.floor(Math.random()* max)
    const result = cb (random1, random2)
    return result;
} 
generateRandNumber(100, (rand1, rand2) => {
    console.log(rand1, rand2);
});
console.log (generateRandNumber(1000, (rand1, rand2) => rand1 + rand2));
console.log (generateRandNumber(100, (rand1, rand2) => rand1 - rand2));
console.log (generateRandNumber(10, (rand1, rand2) => rand1*rand1 + rand2*rand2));


















/**
 // Hidden concepts
 * Scope
 * Closure
 * Function Context
 * Hoisting
 */
