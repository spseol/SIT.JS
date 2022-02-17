// jednořádkový komentář

var text = 'abc'; // komentář

var tlacitkoABC = document.getElementById('abc');
var tlacitkoXYZ = document.getElementById('xyz');


function zmena() {
    tlacitkoABC.innerHTML = 'Koťátko';
    tlacitkoABC.style.border = 'solid 5px green';
}

tlacitkoXYZ.addEventListener('click', zmena);

var jelen = document.getElementById('jelen');
console.log(jelen.innerHTML);
console.log(jelen.innerText);

console.log(jelen.nextSibling.innerHTML);



/*
var action = function(event) {
    let jelen = document.getElementById('jelen');

    jelen.innerHTML = '<strong>Žába pije vodu ze studny....</strong>';
}

function akce(event) {
    document.getElementsByTagName('h1')[0].innerHTML='ahoj';
}




var xyz = document.getElementById('xyz');
xyz.addEventListener('click', action);
xyz.addEventListener('click', akce);

*/