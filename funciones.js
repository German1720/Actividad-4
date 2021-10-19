/*function sumar()
{
  const $total = document.getElementById('total');
  let subtotal = 0;
  [ ...document.getElementsByClassName( "monto" ) ].forEach( function ( element ) {
    if(element.value !== '') {
      subtotal += parseFloat(element.value);
    }
  });
  $total.value =  MediaStreamAudioDestinationNode; 

  
  /*function sumar(){
      const total = document.getElementById("total")
      let total= " "; 
    [ document.getElementsByTagName('monto')].forEach( function (element ) {
        if(element.value !== ''){
            total+=parseFloat(element.value);
        };
        
        
    });
  }
  $total.value=MediaStreamAudioDestinationNode;*/
 
  function sumar() {

  var total = 0;

  $(".monto").each(function() {

    if (isNaN(parseFloat($(this).val()))) {

      total += 0;

    } else {

      total += parseFloat($(this).val());

    }

  });

  document.getElementById('spTotal').innerHTML = total;

}