window.onload = function() {
					var current=sessionStorage.currentUser;
					console.log(current);
					document.getElementById('profilemail').innerHTML=current;
					document.getElementById('profilepass').innerHTML=sessionStorage.getItem(current);
					console.log(sessionStorage.getItem(current));
					document.getElementById('profilecomment').innerHTML=sessionStorage.getItem(current+"Com");
				}
function logOutUser(){
	window.location='home.html';
	console.log("User logged Out!");
}				