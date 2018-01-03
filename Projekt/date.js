var months = ['styczeń', 'luty', 'marzec', 'kwiecień', 'maj', 'czerwiec', 'lipiec', 'sierpień', 'wrzesień', 'październik', 'listopad', 'grudzień'];
var d = new Date();
var month = months[d.getMonth()];
if(d.getDate()<10)
{
	var date = '0'+d.getDate().toString()+' '+month.toString()+' '+d.getFullYear().toString();
}
else
{
	var date = d.getDate().toString()+' '+month.toString()+' '+d.getFullYear().toString();
}
var el = document.getElementById('curDate');
el.innerHTML = 'Dziś mamy:' + '<br />'  + date + ' r.';
