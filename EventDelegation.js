//can be achieved through event bubbling.

//the event bubbles up to the parent component where we can get the event and 
//move forward from there.
document.querySelector("#category").addEventListener('click', () => {
    console.log(e.target);
    if(e.target.tagName == 'LI'){
        window.location.href = "/" + e.target.id;
    }
});

document.querySelector("#form").addEventListener('keyup',()=>{
    console.log(e);
    if(e.target.dataset.uppercase != undefined){
        e.target.value = e.target.value.toUpperCase();
    }
});

//It improves memory and reduces performance bottle-neck.
//Limitations:
//All the events are not bubbled up.
