$(document).ready(function() {
  $('#groceryItem').on('submit', function(event) {
    event.preventDefault();  
   
     var newItem = $('#inputText').val();  
     if (newItem === "") {
        alert("Please enter an item first!")
  }  else {
        $('ul').append('<li>' + '<input type="checkbox">' + newItem + '</li>');   
        $('#inputText').val('');
  }
}); 
  //will not add a blank item when alert is shown and will only add <li>s upon entering text

$(document).on('click', 'li input:checkbox', function() {
     console.log(this);
      var $this = $(this);
      if (this.checked) {
         $this.parent().addClass('purchased');
  }   else {
         $this.parent().removeClass('purchased')
 };
 });
   
 $('#removeAll').on('click',function() {
   console.log('remove all clicked');
   $('.purchased').remove();
 }); 

$('#sortable').on('mouseenter').sortable({ axis: "y" });
  
  


}); //end of jQuery
  

    

    

    