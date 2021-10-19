function limpiar(){
  document.getElementById('formulario').reset();
}

function Sumar(){
  var a=parseInt(document.getElementById('Criterio1').value);
  var b=parseInt(document.getElementById('Criterio2').value);
  //alert(a+b); 
  document.getElementById('Resultado').innerHTML = a+b; 
}
/*function Restar(){
  var a=parseInt(document.getElementById('Criterio1').value);
  var b=parseInt(document.getElementById('Criterio2').value);
  //alert(a+b); 
  document.getElementById('Resultado').innerHTML = a-b; 
}
function Multiplicar(){
  var a=parseInt(document.getElementById('Criterio1').value);
  var b=parseInt(document.getElementById('Criterio2').value);
  //alert(a+b); 
  document.getElementById('Resultado').innerHTML = a*b; 
}
function Dividir(){
  var a=parseInt(document.getElementById('Criterio1').value);
  var b=parseInt(document.getElementById('Criterio2').value);
  //alert(a+b); 
  document.getElementById('Resultado').innerHTML = a/b; 
}*/