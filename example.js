
// function myFunction(){
// 	alert("Hello!"); 
// }

// function pageLoad(){
// 	var clickButton = document.getElementById("clickme");
// 	clickButton.onclick = myFunction;
// }

// window.onload = pageLoad;

// function facebookLink(){
// 	var link = document.getElementById("fb-link");
// 	link.innerHTML = "MySpace is back.";
// }

window.onload = pageLoad;
function pageLoad(){
	var form = document.getElementById("myForm");
	form.onsubmit = myFormfunction;
	
}

function myFormfunction(){
	alert("OK");
	var x = document.forms["myForm"]["firstname"];
	alert(x.value);
}

