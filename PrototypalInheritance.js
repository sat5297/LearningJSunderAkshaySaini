//js object gets attached to hidden properties and 
//function by JS engine.
//arr.__proto__
//This is prototype chain.
//prototype chain is created .

let object1 = {
    name: "Shakti",
    city: "Kanpur",
    getIntro : function() {
        console.log(this.name + " from " + this.city);
    }
}

let object2 = {
    name: "Yash",
    city: "Hyderabad"
}

object2.__proto__ = object1;


object2.getIntro();

object1.getIntro();