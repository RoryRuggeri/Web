$( "a" ).click(function() {
  $( "div" ).fadeIn( 2000, function() {
    $( "span" ).fadeIn( 1000 );
  });
  return false;
});