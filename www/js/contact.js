$(document).ready(function () {
	$('#popup-container').hide();
	$("#btnEmail").click(function () { 
		var fullname = document.getElementById("fullname").value;
		var email = document.getElementById("email").value;
		var message = document.getElementById("message").value;
	/*	var subject = document.getElementById("subject").value;*/

		if(fullname.trim() == ""){

			alert("Enter fullname");
			  $("input#fullname").focus();   //focus on name field
			return false;

		}else if (email.trim() == ""){
			/*	$('#form1').validate();*/
			alert("Enter your email Address");
			$("input#email").focus();   //focus on email field
			return false;

	/*	}if(subject.trim() == ""){

			alert("Enter Subject");
			  $("input#subject").focus();   //focus on name field
			return false;*/
		/*	..................email...........*/

	/*	}else if (email.trim() == ""){
				$('#form1').validate();
			alert("Enter your email Address");
			$("input#email").focus();   //focus on email field
			return false;*/
		
		/*else if (email.trim() !== "" ){*/

			/*alert("Enter your email Address");*/
			/*$("input#email").focus();   //focus on email field
			$('#form1').validate();
			return false;*/

/*		}else if (emailAdd.trim() !== "") {  // If something was entered
    if (!isValidEmailAddress(emailAdd)) {
        $("label#email_error").show(); //error message
        $("input#emailAdd").focus();   //focus on email field
        return false; 
    }
*/
/*..................email.........................*/
    }else if (message.trim() == ""){

			alert("Enter your message");
			 $("textarea#message").focus();   //focus on message field
			return false;


		}else{
			$('#popup-container').show();
			$("#popup-container").html('Your message has been sent successfully!');
		

			
		
		}

	});

/*function isValidEmailAddress(emailAddress) {
    var pattern = new RegExp(/^(("[\w-+\s]+")|([\w-+]+(?:\.[\w-+]+)*)|("[\w-+\s]+")([\w-+]+(?:\.[\w-+]+)*))(@((?:[\w-+]+\.)*\w[\w-+]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][\d]\.|1[\d]{2}\.|[\d]{1,2}\.))((25[0-5]|2[0-4][\d]|1[\d]{2}|[\d]{1,2})\.){2}(25[0-5]|2[0-4][\d]|1[\d]{2}|[\d]{1,2})\]?$)/i);
    return pattern.test(emailAddress);
};*/

});

