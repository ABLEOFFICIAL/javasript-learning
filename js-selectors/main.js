var f = document.getElementById('form');
var input = document.getElementById('fill');
var additem = document.getElementById('btm');



// add event
f.addEventListener('submit', display);

// create function
function display(e){
    e.preventDefault();

    var newdiv = document.createElement('div')

    // add class to div
    newdiv.className = 'item-listing';

    // create text for newdiv
    var newtext = document.createTextNode(input.value);

    newdiv.appendChild(newtext);

    additem.appendChild(newdiv);

    // console.log(newdiv);

    // additem.appendChild()
    console.log(input.value);
}

