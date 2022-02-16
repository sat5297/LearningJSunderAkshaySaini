let finalObj = {};

let user = {
    name: "Shakti",
    address:{
        home:{
            city:"Kanpur",
            state:"Uttar Pradesh"
        },
        office:{
            city:"Bengaluru",
            state:"Karnataka",
            area:{
                landmark:"Sarjapura"
            }
        }
    }
}


let recursiveFunction = (obj, parent) => {

    for(let key in obj){

        if(typeof obj[key] === 'object'){
            recursiveFunction(obj[key], parent+"_"+key);
        }
        else{
            finalObj[parent+"_"+key] = obj[key];
        }
    }
}
recursiveFunction(user,"user");

console.log(finalObj);