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
			var "" = $('inputBox').val();
			$('.shopping-list-items ul').append("<li class='current-item'><img class='btn-purchased' src=''/>" + "" + eggs + "<img src='' class='remove'/></li>");
		     }
		     //resets the textbox after item is entered:
		     $('#user-input')[0].reset();
		
	});
});

//functions to delete and strikethrough code when purchased and remove buttons are clicked 
assignlisteners();
function assignlisteners() {
	$('ul').on('click','.btn-remove',function(event) {
		console.log('.btn-remove clicked');
		$(this).closest('li').remove();
	})
}
    $('ul').on('click','.btn-purchased',function(event) {
    	$(this).closest('li').toggleClass('linethrough');
    	console.log('btn-purchased clicked');
    })