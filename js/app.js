$(document).ready(function() {
	$("item").submit(function(event) {
		event.preventDefault();
		var something = $("input").val();
		//if user inputs no text and hits 'enter', alert will pop up and nothing is appended:
		if(something === "") {
              alert('Please enter an item!')
		}
		//otherwise, text is appended as a li to the shopping list:
		else {
			var "" = $("input").val();
			$('.list ul').append("<li class="items"><div class="purchased" src=''/>" + "" + something + "<div class="remove"></li>");
		     }
		     //resets the textbox after item is entered:
		     $('#item')[0].reset();
		
	});
});

//functions to delete and strikethrough code when purchased and remove buttons are clicked 
assignlisteners();
function assignlisteners() {
	$('ul').on('click','.remove',function(event) {
		console.log('.remove clicked');
		$(this).closest('li').remove();
	})
}
    $('ul').on('click','.purchased',function(event) {
    	$(this).closest('li').toggleClass('linethrough');
    })