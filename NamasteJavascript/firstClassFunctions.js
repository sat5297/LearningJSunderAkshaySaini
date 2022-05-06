//Function Statement
function a(){
    console.log("This is function statement.");
}

//Function Expression
var func = function(){
    console.log("This is function expression.");
}

//Function Declaration/Statement


//Anonymous Function
//these functions are used as values.

//Named function expression
var func1 = function xyz(){
    console.log("This is named function expression.")
}

//Parameters and Arguments.
var b = function(param1, param2){
    console.log("param1 and param2 are parameters");
}

b(1,2)//these values passed are arguments.

//firstClassFunctions
//This is passing a function inside another function and returning from function.

var b = function(param1){
    return function(){

    }
}

//functions are firstClassCitizens is same thing.
//the ability to be used as values.

//Arrow Functions is part of ES6

const newFunction = () => {
    console.log("This is arrow function.");
};

newFunction();