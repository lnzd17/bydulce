

$( "#dialog" ).dialog({
  autoOpen: false,
  modal: true,
  width: 'auto',
  height: 'auto',
  closeText: "X"
 });
$( ".map" ).click(function() {
  $( "#dialog" ).dialog( "open" );
  $("#world").fadeIn('fast');
});

function findCountry(){
  var countries = ["MX","US","GH","AU","CO","PA","BR","GB","FR"];
  $.each(countries, function(index, value){ return value})
}

$(window).click(function(e){
  var country = e.target.className.baseVal;
  var countries = ["MX","US","GH","AU","CO","PA","BR","GB","FR"];
  var abbr = "";
  var fullClass = "amcharts-map-area amcharts-map-area-";
    $.each(countries, function(index, value){
      if (country === fullClass + countries[index]) {
        abbr = countries[index];
      }
    });
    console.log(abbr);
    $(".amcharts-map-area-" + abbr).css('fill','red');
});




// amcharts-map-area-MX
// amcharts-map-area-US
// amcharts-map-area-GH
// amcharts-map-area-AU
// amcharts-map-area-CO
// amcharts-map-area-PA
// amcharts-map-area-BR
// amcharts-map-area-GB
// amcharts-map-area-FR
