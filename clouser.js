// Function can be return from another function
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