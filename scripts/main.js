logo_google = document.images.logo_google;
form=document.getElementById("form");
button = document.getElementById("display_button");
searchbutton=document.getElementById("searchbutton");

//At start nothing is displayed
logo_google.style.display = "none";
form.style.display="none";

//when a click on the main button ellements at the center appear
button.onclick = function ()
{
	logo_google.style.display = "";
	form.style.display="";
	button.style.display="none";
	console.log("Click done on main button")
}

//Uses the form to do an actual research in Google

searchbutton.onclick = function ()
{
	searchtext = document.getElementById("searchtext");
	var url = 'http://www.google.com/#q=';
	url = url + searchtext.value.split(' ').join('+');
	console.log(url);	
	window.open(url);
}

//...to be continued