let name1 = {
    firstName: "Shakti",
    lastName: "Ratan"
};


let printFullName = function(homeTown, state) {
    console.log(this.firstName + " " + this.lastName + " from " + homeTown +" , "+ state);
};


//call 
printFullName.call(name1, "Kanpur", "Uttar Pradesh");

let name2 = {
    firstName: "Yash",
    lastName: "Jindal"
};


//apply, params passed as array list
printFullName.apply(name2, ["Jodhpur", "Rajasthan"] );


//bind generates a function to run.
let printMYName = printFullName.bind(name1,"Kanpur","Uttar Pradesh");

printMYName();