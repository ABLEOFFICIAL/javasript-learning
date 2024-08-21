var f = document.getElementById('form');
var input = document.getElementById('fill');
var additem = document.getElementById('btm');



// add event
f.addEventListener('submit', display);

// create function
function display(e){
    e.preventDefault();

    // craete new div
    var newdiv = document.createElement('div')

    // add class to div
    newdiv.className = 'item-listing';

    // create text for newdiv
    var newtext = document.createTextNode(input.value);

    // add newtext to newdid
    newdiv.appendChild(newtext);

    // add newdiv to listitem
    additem.appendChild(newdiv);


    // create a button
    var delbtn = document.createElement('button');

    // add class to delbtn
    delbtn.className = 'select'

    // create x btn
    var xbtn = document.createTextNode('x')

    // append x to delbtn
    delbtn.appendChild(xbtn);

    // append delbtn to newdiv
    newdiv.appendChild(delbtn);

    console.log(delbtn)

    // console.log(newdiv);

    // additem.appendChild()
    // console.log(input.value);
}

