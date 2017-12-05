function search(tab,zmienna){
	var a=0;
for(var i=0; i<tab.length; i++)
{

  if(tab[i]==zmienna)
  {
	  a=i+1;
	  console.log("zmienna znajduje się na miejscu: " +a +" a jej wartość to: "+tab[i]);
	  break;
  }
  
	  else if(i==tab.length-1)
	  {
		  console.log("Taka liczba nie wystepuje w tablicy :( ");
		  break;
	  }
  
}
}
var a = 8;
var tablica = [11, 6, 12, 1, 3, 14, 10, 0, 13, 4, 15, 5, 9, 17, 7, 16, 2, 8];
search(tablica,a);
