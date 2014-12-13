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



    	



        var signup = document.getElementById("signup");
        var fields = [signup.elements.firstName, signup.elements.lastName, signup.elements.address1, signup.elements.city,
                    signup.elements.state, signup.elements.zip, signup.elements.birthdate];

        signup.addEventListener('submit', function(evt){
            try {
                evt.returnValue = blank(evt.target);

                if (signup.elements.firstName.length>10) {
                    return false;
                } 
                var zipRegExp = new RegExp('^\\d{5}$');
                var ziptest = zipRegExp.test(zip);
                if(zipTest = false) {
                    return false;
                }
                if(signup.elements.occupation == "other") {
                    
                }

            } catch(e) {
                console.log("Exception " + e);
                evt.returnValue = false;
            }
            if(evt.returnValue == false && evt.preventDefault == false) {
                evt.preventDefault();
            }
            console.log(evt.returnValue);
            return evt.returnValue;
        });

        function blank(form) {
            console.log("blank is running");
            for (var i = 0; i < fields.length; i++) {
                var fieldValue = fields[i].value.trim();
                if(!fieldValue.length > 0){
                    console.log("inside if" + fields[i].value.length);
                    console.log("value is " + fields[i].value + "!");
                    //submitOK = false;
                    fields[i].className = "invalid-field form-control";
                } else {
                    fields[i].className = "form-control"
                }
            }
        }




            /*
            try{
    			

    			


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
    	
    });