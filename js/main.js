function askQuestions() {

	var firstName = prompt('what is your first name?');
	var lastName = prompt('what is your last name?');
	var fullName = firstName +' '+ lastName;

	console.log(fullName);

	var age = prompt("how old are you?");
	age = parseInt(age);

	//This piece of code means it logs it in the console.

	if (age>= 18) {
		console.log('User is an adult');
	} else {
		console.log('User is a child');
	}

	if (firstName.tolowerCase == 'General' && lastName.toLowerCase !=='Assembly') { 

		console.log('Greatings, General!');
		alert('Greetings, General!')
   }

}

// alert($);
/* this is a JQuery comment */
/* when the page is loaded ---- ' $('h3') = find all the H3's --- .on('click') = when the user clicks on a H3*/
$(function() {



    $('img').on('click', askQuestions);

//Hide all the stuff
    
	    // $('h3').next().hide();


  //when the user clicks on the H3 something can be done
  $('h3').on('click', function() {

//TOGGLE the section after the clicked h3 - Jave Script is case sensative. () the round brackets tells it to do this action.
      $(this).next().slideToggle();

  });

});

// $('h1').animate({marginTop:100})
