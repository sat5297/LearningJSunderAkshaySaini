//This functionality works when we have search bar and we need to make API Calls.
//This approach is used to restrict the number of API calls
//It doesn't make call on every key stroke but makes call after specific timeout.

let counter = 0;

const getData = () => {
    console.log("Fetchiing Data ...", counter++);
}

const debounce = function(fn, d){
    let timer;
    return function(){
        let context = this,
            args = arguments;
        
        clearTimeout(timer);
        timer = setTimeout(()=>{
            getData.apply(context, arguments);
        }, d);
    }
}

const debouncedFunction = debounce(getData, 300);

debouncedFunction();

//The time between 2 keypress event is more than some set amount of time like say 300 ms.