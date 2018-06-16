<?php
    $conectou = mysqli_connect("127.0.0.1", 'root', 'soumais10#', 'adoteumpet');
 
    if ($conectou){
        $query = mysqli_query($conectou, 'SELECT * FROM animal');
        $vacinas = mysqli_query($conectou, 'SELECT animal.id, vacina.nome FROM animal, animal_vacina, vacina WHERE animal.id=animal_vacina.id_animal AND animal_vacina.id_vacina=vacina.id');
        $i = 0;
        foreach ($query as $item) {
        	$listaDeVacinas = [];
        	$j = 0;
        	foreach ($vacinas as $v) {
        		if($v["id"] == $item["id"]){
        			$vacina = array("nome" => $v["nome"]);
        			$listaDeVacinas[$j] = $vacina;
        			$j++;
        		}
        	}
        	$animal = array("nome" => $item["nome"], "foto" => $item["foto"], "especie" => $item["especie"], "raca" => $item["raca"], "cor" => $item["cor"], "idade" => $item["idade"], "sexo" => $item["sexo"], "castrado" => $item["castrado"], "vacinas" => $listaDeVacinas);
        	$listaDeAnimais[$i] = $animal;
        	$i++;
        }
        $animais = json_encode($listaDeAnimais);

        echo $animais;
	}
	else{
		echo "Não conectou";
	}
?>
