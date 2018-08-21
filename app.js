$(document).ready(function(){
  $('#searchItem').keyup(function(){
      var name = $(this).val();
      var pattern = name.toLowerCase(); 
      var targetId = ""; 
      var divs = document.getElementsByClassName("item"); 

      $(document).find('.item').hide();

      $('.item').each(function(i){
          var para = divs[i].getElementsByTagName("p"); 
          var index = para[0].innerText.toLowerCase().indexOf(pattern); 
          if (index != -1) { 
              $(this).show();
          }
      });
  }); 
});