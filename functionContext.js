// Execution Context

function a (a){
    console.log('I am A');
    if (a>=10){
        console.log('a = ', a);
    }
    for (let i = 0; i < a; i++){
        console.log(i);
    }
}
function b(){
    a(5)
}
function c(){
    b()
    b()
}
function d(){
    c()
    a(3)
}
d()