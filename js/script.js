$(document).ready(function(){
  var end = window.location.href.toString();   
  
  if(end.indexOf("?nome=") != -1){
    var nome = end.slice(end.indexOf("nome=")+5, end.length);
    nome = nome.replace("_"," ");
    $("#lg").html("<span>Olá, " + nome.toString() + "</span>");
  }
  
  var pagina = 1;
  var items = ""; 
  var larguraGrupo;
  var primeiraImg = 0;
  var ultimaImg = 3;
  function carregar(){
    var url = "carrossel.php";    
    $.getJSON(url, function(data, status){
      if(status === "success"){       
        for(var i = primeiraImg; i <= ultimaImg; i++){
          items += "<div class='four-columns item active'><a href='"+ "detalhes.html?nome=" + i +"'>";
          items += "<img class='imagem' src='images/" + data[i]["foto"] + "' alt='Foto'></a>" + "<div><h3>" + data[i]["nome"] + "</h3></div>";
        }
        $("#imagens").html(items);
        var larguraImagem = (parseInt($(".imagem").css("width")) + parseInt($(".imagem").css("margin-right")));
        larguraGrupo = (larguraImagem * 4);
        var larguraTotal = ((parseInt($(".imagem").css("width")) + parseInt($(".imagem").css("margin-right"))) * $(".wrapper .item").length);
        $("#myCarousel").css("width", (larguraGrupo  - parseInt($(".imagem").css("margin-right"))) + "px");
        $(".wrapper").css("width", larguraTotal + "px");
      }
      else{
        alert("URL inválida!");
      }
    });

  }
  carregar();
	var ml = parseInt($(".wrapper").css("margin-left"));
	var pag = 0;
  seletor();

	$(".right").click(function(){
    if(ultimaImg < 11){
      var ml = parseInt($(".wrapper").css("margin-left"));
      ml-=larguraGrupo;
      primeiraImg += 4;
      ultimaImg += 4;   
      $(".wrapper").animate({'margin-left' : ml + "px"}, '500');
      if(pag === 4){
        pagina++;
        pag = 0;        
      }
      else{
        pag++;
      }
      carregar();
      seletor();
    }		
  });
    
  $(".left").click(function(){
   	var ml = parseInt($(".wrapper").css("margin-left"));
   	if(ml < 0){
   		ml += larguraGrupo;
      primeiraImg -= 4;
      ultimaImg -= 4;
      if(pag===0){
        pag = 4;
      }
      else{
        pag--;
      }
    	$(".wrapper").animate({'margin-left' : ml + "px"}, '500');
    	seletor();
		}
  });

  $(".first").click(function(){
    primeiraImg = 0;
    ultimaImg = 3;
    ml = 0;
   	$(".wrapper").animate({'margin-left' : ml + "px"}, '500');
   	pag = 0;
   	seletor();
  });

  $(".second").click(function(){      
    primeiraImg = 4;
    ultimaImg = 7;
    if($(".wrapper .item").length < 8){
      carregar();
    }
    ml = -larguraGrupo;
   	$(".wrapper").animate({'margin-left' : ml + "px"}, '500');
   	pag = 1;
   	seletor();
  });

  $(".third").click(function(){
    primeiraImg = 8;
    ultimaImg = 11;
    if($(".wrapper .item").length < 8){
      carregar();
      carregar();
    }
    else if($(".wrapper .item").length < 12){
    	carregar();
    }
    ml = -1 * larguraGrupo * 2;
   	$(".wrapper").animate({'margin-left' : ml + "px"}, '500');
   	pag = 2;
   	seletor();
  });

  function seletor(){
    if(pag === 0){
		  $(".first").addClass("active");
		  $(".second").removeClass("active");
		  $(".third").removeClass("active");
		}
    else if(pag === 1){
		  $(".first").removeClass("active");
		  $(".second").addClass("active");
		  $(".third").removeClass("active");
		}
		else if(pag === 2){
		  $(".first").removeClass("active");
		  $(".second").removeClass("active");
		  $(".third").addClass("active");
		}
  }

  var passaValor= function(valor){
	  window.location.href = "detalhes.html?nome="+valor;
	}

  $(".item img").click(function(){
    passaValor($(this).attr("alt"));
  });

});