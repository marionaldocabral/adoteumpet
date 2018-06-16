$(document).ready(function(){
    var url = "carrossel.php";    
    $.getJSON(url, function(data, status){
      if(status === "success"){
        var end = window.location.href.toString();
        var i = end.slice(end.indexOf("nome=")+5, end.length);
        $(".nome").text(data[i]["nome"]);
        $("#foto").attr("src","images/" + data[i]["foto"]);
        $("#especie").text("Espécie: " + data[i]["especie"]);
        $("#raca").text("Raça: " + data[i]["raca"]);
        $("#cor").text("Cor: " + data[i]["cor"]);
        if(data[i]["idade"] >= 2){
          $("#idade").text("Idade: " + data[i]["idade"].toString().replace('.', ',') + " anos");
        }
        else{
          $("#idade").text("Idade: " + data[i]["idade"].toString().replace('.', ',') + " ano");
        }        
        $("#sexo").text("Sexo: " + data[i]["sexo"]);
        if(data[i]["castrado"] == true){
          $("#castrado").text("Castrado: Sim");
        }
        else{
          $("#castrado").text("Castrado: Não");
        }
        var vacinas = data[i]["vacinas"];
        var lista = "<li id='vacinas'>Vacinas:<ul>";
        for(var i = 0; i < vacinas.length; i++){
          lista += "<li> + " + vacinas[i]["nome"] + "</li>";
        }
        lista += "</ul></li>";
        $("#vacinas").html(lista);
      }
      else{
        alert("URL inválida!");
      }
    });
});