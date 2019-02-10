var button = document.getElementById("enter");
var input = document.getElementById("userinput");

function inputLength() {
	return input.value.length;
}//returns lenght of text input in text box

function addlistClick() {
	if ( input.value == "Kamren" ){
	alert ("Hurray!!");
	window.location = "success.html"; // Redirecting to other page.
	return false;
	}
	else if ( inputLength()>3) {
		alert ("Nothing found and all lost");	
	}
}

//“Help me, Obi-Wan Kenobi. You’re my only hope.”
//Run me?? but where ⬇️ ????
//“Do. Or do not. There is no try.”
var inviteCode = () => {
	return(
		fetch('https://jsonplaceholder.typicode.com/users/5')
  		.then(response => response.json())
  		.then(json => console.log(`Your Invite code "username" is :`,json))
	);
}

//“The Force will be with you. Always.”

function addlistKeypress(event) {
	if ( event.keyCode === 13 && input.value == "Kamren"){
	alert ("Hurray");
	window.location = "success.html"; // Redirecting to other page.
	return false;
	}
	else if ( event.keyCode === 13 && inputLength()>3 ) {
		alert ("Nothing found and all lost");	
	}
}

//“Never tell me the odds!”

input.addEventListener("keypress", addlistKeypress);

button.addEventListener("click", addlistClick);

//nothing like the previous one
//website by made by sniperline047
//hosted by GitHub

//404 Flag Not Found