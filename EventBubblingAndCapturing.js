//This is the method to check the sequence of event handlers in dom tree.

//Bubbling is inside out.
//child to parent to grandparent

//Capturing is outside to inside.
//grandparent to parent to child.
//capturing also known as trickling.

//trickling down and bubbling up.


//Events Bubbling Out

document.querySelector("#grandparent")
    .addEventListener('click', () => {
        console.log("Grand parent clicked!!");
    },true);

    //true by default which means bubbling is going on
    //false need to give means trickling is going on.

document.querySelector("#parent")
    .addEventListener('click', () => {
        console.log("Parent clicked!!");
    });


document.querySelector("#child")
    .addEventListener('click', () => {
        console.log("Child clicked!!");
    })