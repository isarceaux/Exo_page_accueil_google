logo_google = document.images.logo_google;
form=document.getElementById("form");
button = document.getElementById("display_button");

//At start nothing is displayed
logo_google.style.display = "none";
form.style.display="none";

//when a click on the main button ellements at the center appear
button.onclick = function ()
{
	logo_google.style.display = "";
	form.style.display="";
	button.style.display="none";
}

//uses the form to do an actual research in Google
searchtext = document.getElementById("searchtext");
searchbutton = document.getElementById("searchbutton");
localStorage.setItem('googlesearch', searchtext);
//...to be continued