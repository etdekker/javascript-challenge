	/*
    Signup Form Script
    This script will load the state select list and validate the form before submission
    */
    "use strict";

    document.addEventListener('DOMContentLoaded', function(){
    	var state = document.getElementsByName("state")[0];
    	for (var i = 0; i < usStates.length; i++) {
    		var option = document.createElement("option");
    		option.label = usStates[i].name;
    		option.value = usStates[i].code;
    		state.appendChild(option);
    	}
    	var occupation = document.getElementById("occupation");
    	occupation.addEventListener('change', showOther);
    	function showOther() {
    		var value = occupation.value;
    		console.log(value);
    		if(value == "other") {
    			document.getElementsByName("occupationOther")[0].style.display="inline";
    		} else {
    			document.getElementsByName("occupationOther")[0].style.display="none";
    		}
    	}
    	var cancel = document.getElementById("cancelButton");
    	cancel.addEventListener('click', confirm);
    	function confirm(){
    		var bool = window.confirm("Do you really want to leave?");
    		if(bool){
    			window.location="http://google.com";
    		}
    	}
    	var submit = document.getElementsByTagName("button")[1];
    	submit.addEventListener('click', check);
    	function check(){
    		return false;
    		/*try{

    			var firstName = document.getElementById("firstName").value;
    			var lastName = document.getElementById("lastName").value;
    			var address1 = document.getElementById("address1").value;
    			var city = document.getElementById("city").value;
    			var state = document.getElementById("state").value;
    			var zip = document.getElementById("zip").value;
    			var birthdate = document.getElementById("birthdate").value;

    			var submitOk = true;

    			if (firstName.length>10) {
    				window.alert("The name may have no more than 10 characters");
    				submitOK = "false";
    			} 
    			if (isNaN(age)||age<1||age>100) {
    				window.alert("The age must be a number between 1 and 100");
    				submitOK = "false";
    			}
    			if (at==-1) {
    				window.alert("Not a valid e-mail!");
    				submitOK = "false";
    			}
    			if (submitOK=="false") {
    				return false;
    			}

    			var zipRegExp = new RegExp('^\\d{5}$');
    			zipRegExp.test(zip);


    			console.log(firstName);
    			console.log(lastName);
    			console.log(address1);
    			console.log(city);
    			console.log(state);
    			console.log(zip);
    			console.log(birthdate);

    			firstName.style.border="1px sollid red"
    		}
    		catch(err){
    			alert("error");
    			submit.onclick = false;
    			submit.returnProperty = false;
    		}*/	
    	}
    });