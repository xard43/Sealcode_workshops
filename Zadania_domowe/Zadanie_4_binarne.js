function bin (liczba)
{
	var b = "";
	
	while(liczba != 0)
	{
		b=b+(liczba%2).toString();
		liczba=Math.floor(liczba/2);
	}
	console.log(b);

}

var zmienna = 2;
bin(zmienna);


