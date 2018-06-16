$(document).ready(function(){
  /*var end = window.location.href.toString();   
  
  if(end.indexOf("?erro=#") != -1){
    alert("Dados inválidos, tente novamente!")
  }
  else if(end.indexOf("?erro=%") != -1){
    alert("Usuário já existe!")
  }
  else if(end.indexOf("?erro=$") != -1){
    alert("Não foi possível cadastrar! Tente mais tarde.")
  }
  else if(end.indexOf("?resp=!") != -1){
    alert("Usuário cadastrado com sucesso!")
  }

  $("#btncadastro").click(function(){    
      if($("#nome").val().length == 0){
        alert("Preencha o seu nome");
      }
      else if($("#email").val().length == 0){
        alert("Preencha o seu email");
      }
      else if($("#senha").val().length == 0){
        alert("Digite uma senha");
      }
      else{
        $("#nomec").val($("#nome").val());
        $("#emailc").val($("#email").val());
        $("#senhac").val($("#senha").val());
      }
  });
*/
  $("#btncadastro").click(function(){
    if($("#nome").val().length != 0 && $("#email").val().length != 0 && $("#senha").val().length != 0 && $("#email").val().indexOf("@") != -1){
      $.post("cadastro.php",
      {
          nome: $("#nome").val(),
          email: $("#email").val(),
          senha: $("#senha").val()
      },
      function(data, status){
          alert(data);
      });
    }
  });

});