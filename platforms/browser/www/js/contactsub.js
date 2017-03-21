$(document).ready(function () {
	$('#popup-container').hide();
	$("#btnEmail").click(function () { 
		$('#popup-container').remove(); 
		var fullname = document.getElementById("fullname").value;
		/*var email = document.getElementById("email").value;*/
		var message = document.getElementById("message").value;
		var subject = document.getElementById("subject").value;

		if(fullname.trim() == ""){
					/*$('#popup-container').remove();*/ 
					$('#popup-container').hide();
					alert("Enter your name");
					return false;

			}else if (subject.trim() == ""){
					$('#popup-container').hide();
					alert("Enter Subject");
					return false;
				}else if (message.trim() == ""){
					$('#popup-container').hide(); 
				
					alert("Enter message");
					return false;
			

				}
				else{
					/*$('#busytax').hide();*/
					$('#popup-container').show();
					$("#popup-container").html('message sent!');
		
/*
}else if (email.trim() == ""){*/
	/*$('#form1').validate();*/
		/*	alert("Enter your email Address");
			$("input#email").focus();   //focus on email field
			return false;
		}*/

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

   /* else if (message.trim() == ""){
    	$('#popup-container').hide();
    	alert("Enter your message");
			 $("input#message").focus();   //focus on message field
			 return false;
*/

		/*	}else{
				$('#popup-container').show();
				$("#popup-container").html('Your message has been sent successfully!');


*/

			}

		});

/*function isValidEmailAddress(emailAddress) {
    var pattern = new RegExp(/^(("[\w-+\s]+")|([\w-+]+(?:\.[\w-+]+)*)|("[\w-+\s]+")([\w-+]+(?:\.[\w-+]+)*))(@((?:[\w-+]+\.)*\w[\w-+]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][\d]\.|1[\d]{2}\.|[\d]{1,2}\.))((25[0-5]|2[0-4][\d]|1[\d]{2}|[\d]{1,2})\.){2}(25[0-5]|2[0-4][\d]|1[\d]{2}|[\d]{1,2})\]?$)/i);
    return pattern.test(emailAddress);
};*/

});

