//CallBack function in javascript
//These callbacks facilitates async operations.

setTimeout(function(){
    console.log("timers");
}, 5000);

function x(y){
    console.log("x");
    y();
};

//y is callback function.
x(function y(){
    console.log("y");
});