$(document).ready(function () {
	$("#btnLogin").click(function () { 
		var username = document.getElementById("username").value;
		var password = document.getElementById("password").value;


		if(username.trim() == ""){

			alert("Enter Username");
			return false;

		}else if (password.trim() == ""){

			alert("Enter Password");
			return false;


		}else if (username.trim() == "admin" && password.trim() == "admin"){

			window.location="companysearch.html";

		}else{

			alert("Username or Password is incorrect");
			return false;
		}

	});

});
