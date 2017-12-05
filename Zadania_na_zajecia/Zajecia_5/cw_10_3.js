var el = document.getElementById('heading-one');
el.innerHTML = 'Zmieniona zawartość';

function zadania(ilosc_zadan,nazwa_przedmiotu,ile_zrobionych) {
  this.ilosc_zadan = ilosc_zadan;
  this.nazwa_przedmiotu = nazwa_przedmiotu;
  this.ile_zrobionych = ile_zrobionych;
  this.ile_zostalo = function()
  {
	  return this.ilosc_zadan - this.ile_zrobionych;
  };
  
}

var zadanie = new zadania(5,'matematyka',3);


var a = document.getElementById('span-one');
a.innerHTML = ' Nazwa przedmiotu to: ' + zadanie.nazwa_przedmiotu;

var b = document.getElementById('span-two');
b.innerHTML = ' Musisz zrobić: ' + zadanie.ilosc_zadan + ' zadań ' + '<br> Masz zrobionych: ' 
				+ zadanie.ile_zrobionych + '<br> Zatem zostało Ci do zrobienia: ' + zadanie.ile_zostalo();
				

