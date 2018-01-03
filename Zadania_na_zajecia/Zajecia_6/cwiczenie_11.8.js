var tab =[];
for(var i=1;i<5;i++)
{
	tab[i]= document.getElementById('li-'+i.toString());
	tab[i].removeChild(tab[i].childNodes[0]);
}

var a = tab[1].parentNode;

for(var i=1;i<5;i++)
{
a.removeChild(tab[i]);
}