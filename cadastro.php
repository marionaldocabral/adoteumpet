<?php
    $nome = $_POST["nome"];
    $email = $_POST["email"];
    $senha = $_POST["senha"];

    $conectou = new mysqli("127.0.0.1", 'root', 'p@$$w0rd', 'adoteumpet');
 
    if ($conectou){
        $usuarios = $conectou->query("SELECT * FROM usuario");
        $achei - false;
        foreach ($usuarios as $usuario) {
            if($usuario["email"] === $email)
              $achei = true;
        }        
        if($achei){
            echo "Usuário já existe.";
        }else{
            $sql = "INSERT INTO usuario (nome, email, senha) VALUES ('$nome', '$email', '$senha')";
            if($conectou->query($sql) == true){
                echo 'Cadastro realizado com sucesso!';
            }
            else{
                echo 'Nao foi possivel cadastrar.';
            }
        }
    }
    else{
        echo "Servidor não responde. Tente mais tarde.";
    }
?>
