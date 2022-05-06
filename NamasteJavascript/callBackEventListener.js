
function attachEventListener(){
    let count = 0;
    document.getElementById("clickMe")
    .addEventListener('click', function(){
        console.log("Button Clicked!!!", ++count);
    });
}
attachEventListener();

//Event Listeners are heavy so are 
//removed by devolopers so that garbage collection can be performed.
