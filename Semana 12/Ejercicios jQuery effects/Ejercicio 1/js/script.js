$( "#right" ).click(function() {
  $( ".block" ).animate({ "left": "+=25px" }, "slow" );
});
 
$( "#left" ).click(function(){
  $( ".block" ).animate({ "left": "-=25px" }, "slow" );
});