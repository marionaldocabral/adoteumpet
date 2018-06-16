<?php
    $nome=$_POST['nome'];
    $email=$_POST['email'];
    $senha= $_POST['senha'];
    $conectou = mysqli_connect("127.0.0.1", 'root', 'p@$$w0rd', 'adoteumpet');
    if ($conectou){
        $usuarios = mysqli_query($conectou, "SELECT * FROM usuario");
        $achei - false;
        foreach ($usuarios as $usuario) {
            if($usuario["email"] === $email && $usuario["senha"] === $senha)
              $achei = true;
        }
        if($achei){
            $nome = str_replace(" ", "_", $nome);
            $link = "Location: /adoteumpet/index.html?nome=" . $nome;
            header($link);
        }else{
            $erro = "#";
            $link = "Location: /adoteumpet/login.html?erro=" . $erro;
            header($link);
        }
    }
?>
