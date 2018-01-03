// usuniecie klasy example elemntu h1 i przypisanie mu id 
var el = document.getElementsByClassName('example')[0];
var s='rotakifytnedi-ywon'
function reverse(s){
    return s.split("").reverse().join("");
}

if (el.hasAttribute('class')) {
	el.removeAttribute('class'); 
	el.setAttribute('id', reverse(s));
}

// dodanie linku oraz jest klasy tak aby otwierały się w nowej karcie

// Utworzenie nowego elementu i przechowywanie go w zmiennej.
var newElement = document.createElement('a');
//ustawienie atrybutów elemntu
newElement.setAttribute('href', 'https://warsztaty.sealcode.org/');
newElement.setAttribute('target', 'blank');
newElement.setAttribute('class', 'new-class');
// Utworzenie węzła tekstowego i przechowywanie go w zmiennej.
var newText = document.createTextNode("https://warsztaty.sealcode.org/" );
// Dołączenie nowego węzła tekstowego do nowego elementu.
newElement.appendChild(newText);
// Wyszukanie miejsca, w którym powinien być dodany nowy element.
var position = document.getElementsByClassName('wrapper')[0];
// Wstawienie nowego elementu we wskazanym miejscu.
position.appendChild(newElement);

//usunięcie zawartości listy

// Pobranie elementów do usunięcia
var array =[];
for(var i=1;i<9;i++)
{
	array[i]=document.getElementById('li-'+i.toString());
}
//pobranie rodzica
var containerElement = array[1].parentNode;
//usuniecie elementów
for(var i=1;i<9;i++)
{
	containerElement.removeChild(array[i]);
}
var arrayId =[];
for(var i=1;i<31;i++)
{
	arrayId[i]='new'+i.toString();
}
var arrayText =[];
for(var i=1;i<31;i++)
{
	arrayText[i]='Nowe Treść '+i.toString();
}
for(var i=1;i<31;i++)
{
// Utworzenie nowego elementu i przechowywanie go w zmiennej.
var newElement = document.createElement('li');
//ustawienie atrybutów elemntu
newElement.setAttribute('id', arrayId[i].toString());
// Utworzenie węzła tekstowego i przechowywanie go w zmiennej.
var newText = document.createTextNode(arrayText[i].toString());
// Dołączenie nowego węzła tekstowego do nowego elementu.
newElement.appendChild(newText);
// Wyszukanie miejsca, w którym powinien być dodany nowy element.
var position = document.getElementsByTagName('ul')[0];
// Wstawienie nowego elementu we wskazanym miejscu.
position.appendChild(newElement);
}

//zmienienie tekstu akapitu 
var abba = document.getElementsByClassName('example')[0];
abba.innerHTML = 'Zmieniona treść akapitu';

