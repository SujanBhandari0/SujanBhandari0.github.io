function validateForm() {
		var fname = document.forms["messageForm"]["fname"].value;
		var lname = document.forms["messageForm"]["lname"].value;
		var email = document.forms["messageForm"]["email"].value;
		var comment = document.forms["messageForm"]["comment"].value;
	
		if (fname =="" ||lname =="" ||email =="" ||comment =="") {
			alert("Please fill the field");
		}else{
			
			alert("Thank you "+fname+" "+lname);
			
		}
	}