// Utworzenie nowego elementu i przechowywanie go w zmiennej.
var a = document.createElement('li');
a.setAttribute('id', 'li-5');
// Utworzenie węzła tekstowego i przechowywanie go w zmiennej.
var newText = document.createTextNode('Punkt 5');

// Dołączenie nowego węzła tekstowego do nowego elementu.
a.appendChild(newText);

// Wyszukanie miejsca, w którym powinien być dodany nowy element.
var position = document.getElementsByTagName('li')[3];

// Wstawienie nowego elementu we wskazanym miejscu.
position.appendChild(a);