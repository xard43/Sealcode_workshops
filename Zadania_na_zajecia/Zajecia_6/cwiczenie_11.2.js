var tab = [];
for(var i=1; i<5;i++)
{
	tab[i] = document.getElementById('li-'+i.toString());
	console.log(tab[i].innerHTML);
}


console.log(document.getElementsByClassName('example')[0].innerHTML);
console.log(document.getElementsByClassName('example')[1].innerHTML);
