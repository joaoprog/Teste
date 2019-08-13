$(document).on("click","#btnfemea", function(){
  var txAtividade = $("#taxaAtividade")
  var peso = $("#peso").val();
  var altura = $("#altura").val();
  var idade = $("#idade").val();
  var resultf = parseFloat(taxaAtividade) * ((655 + ((9,6 * peso)) + (1,8 * altura) - (4,7 * idade))) ;
  $("#resultado").val(resultf);
}); 