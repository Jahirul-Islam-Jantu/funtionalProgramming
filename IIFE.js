// An immediately invoked function expression, or IIFE (pronounced iffy), is a function that is called immediately after it is defined. While it may seem peculiar, creating functions that behave in such a way can actually benefit the code that we write.

// Structure of IIFE
(function /** function name */ (/**you can pass an argument here */){
    // this is the code body
})( /**argument call / function call */);

// Example of IIFE

(function callMyName (name){
    console.log(name)
})('Jahir')