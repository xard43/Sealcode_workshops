var a = document.getElementById('heading'); 
a.innerHTML = 'Marek Sanok' ;
//************************

var daysOfWeek = ['niedziela', 'poniedziałek', 'wtorek', 'środa', 'czwartek', 'piątek', 'sobota'];
var months = ['stycznia', 'lutego', 'marca', 'kwietnia', 'maja', 'czerwca', 'lipca', 'sierpnia', 'września', 'października', 'listopada', 'grudnia'];

var dat = new Date();

var c = document.getElementById('paragraph-one');
c.innerHTML = 'Dziś jest: ' + daysOfWeek[dat.getDay()] + ' ' + dat.getDate()+' '+ months[dat.getMonth()]+' ' + dat.getFullYear()+ 'r.'
+ '<br> Godzina: ' + dat.getHours()+ ':' + dat.getMinutes() +':'+ dat.getSeconds()+':'+ dat.getMilliseconds();

//**************************

var zdanie = "Podstawą szczęścia jest wolność, a podstawą wolności odwaga.";
var tab = zdanie.split(',');
var b = document.getElementById('paragraph-two');
var ab = tab[1].split(' ').reverse().join(" ");
b.innerHTML = 
'Trzynastym znakiem w tym zdaniu jest: ' + zdanie.charAt(13) 
+ '<br> Znaki pomiędzy 7. a 12. pozycją to: '+ zdanie.substring(6,11)
+ '<br>Pierwszy raz znak "ą" pojawia się na miejscu: ' + zdanie.indexOf('ą')
+ '<br>Ten ciąg ma ' + zdanie.length +' znaków.'
+ '<br>Po zamianie "podstawą" na "fundamentem" mamy: ' + zdanie.replace('Podstawą', 'fundamentem')
+ '<br>Część zdania przed przecinkiem to: ' + tab[0]
+ '<br>Druga część zdania po odwróceniu to: '+ ab; 
//**************************

var a1=1;
var b1=5;
var c1=6;
var delta = b1*b1-4*a1*c1;
var x1 = ((-1)*b1- Math.sqrt(delta))/(2*a1);
var x2 = ((-1)*b1+ Math.sqrt(delta))/(2*a1);
var d = document.getElementById('paragraph-three');
d.innerHTML = 'Zadanie 1. Mam funkcję kwadratową: ' 
+ '<br><br>f(x) = x^2 + 5x + 6' 
+ '<br><br>Wyróżnik tego trójmianu to: ' + delta 
+ '<br>Pierwiastek kwadratowy tego wyróżnika to: '+ Math.sqrt(delta)
+ '<br>Miejscami zerowymi tej funkcji są: '+ x1 +' i ' +x2; 

//*********************************
var x = Math.PI/6;
var wynik = Math.sqrt(Math.abs(Math.sin(Math.log(Math.pow(2,x)))+Math.max(0,x) 
			+ Math.abs((-1)*Math.pow(Math.E,2*x)+ Math.min(-1,x))));


var e = document.getElementById('paragraph-four');
e.innerHTML = 'Zadanie 2. Obliczam wartość funkcji: ' 
+ '<br><br>f(x) = sqrt(|sin(ln(2^(x))) + max(0, x) + |-e^(2x) + min(-1, x)||)'
+ '<br>dla x = pi/6'
+ '<br><br> Mój wynik to: ' + wynik 
+ '<br>Wynik w notacji wykładniczej to: ' + wynik.toExponential() 
+ '<br>Po zaokrąleniu wyniku w górę mam: ' + wynik.toFixed(2) ;











