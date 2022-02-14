let name1 = {
    firstName: "Shakti",
    lastName: "Ratan"
};

let printName = function(homeTown, state){
    console.log(this.firstName + " " + this.lastName + ", "+homeTown+", "+state);
}

let printMYName = printName.bind(name1,"Kanpur");
printMYName("Uttar Pradesh.");

Function.prototype.mybind = function(...args1){
    let obj = this,
        params = args1.slice(1);
    return function(...args2){
        obj.apply(args1[0], [...params, ...args2] );
    }
}

let printMYName2 = printName.mybind(name1,"Kanpur");
printMYName2("Uttar Pradesh");

//this creates the mybind() that is similar to the bind().