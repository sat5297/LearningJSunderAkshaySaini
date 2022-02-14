let multiply = function(x,y){
    console.log(x*y);
}

let multiplyByTwo = multiply.bind(this);

multiplyByTwo(2,3);

let multiplyByThree = multiply.bind(this, 3);

multiplyByThree(5);

//curry done.

//function closure here.

let multiplyClosure = function(x){
    return function(y){
        console.log(x*y);
    }
}


let multiplyByTwoClosure = multiplyClosure(2);
multiplyByTwoClosure(3);