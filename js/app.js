$(document).ready(function() {
	$('#user-input').submit(function(event) {
		event.preventDefault();
		var something = $('inputBox').val();
		//if user inputs no text and hits 'enter', alert will pop up and nothing is appended:
		if(something === "") {
              alert('Please enter an item!')
		}
		//otherwise, text is appended as a li to the shopping list:
		else {
			$('.shopping-list-items').append("<li class='current-item'><img class='purchased' src=''/>" + "" + something + "<img src='' class='remove'></li>");
		     }
		     //resets the textbox after item is entered:
		     $('#user-input')[0].reset();
		
	});
});