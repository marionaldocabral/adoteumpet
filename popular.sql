# Script para popular tabela animal
INSERT INTO animal(nome,foto,especie,raca,cor,idade,sexo,castrado) VALUES ('Totó','1.jpeg','cachorro','buldogue','marrom',5,'macho',true);
INSERT INTO animal(nome,foto,especie,raca,cor,idade,sexo,castrado) VALUES ('Suzy','2.jpg','cachorro','buldogue','bege',1,'fêmea',true);
INSERT INTO animal(nome,foto,especie,raca,cor,idade,sexo,castrado) VALUES ('Billy','3.jpg','cachorro','labrador','amarelo',1.5,'macho',false);
INSERT INTO animal(nome,foto,especie,raca,cor,idade,sexo,castrado) VALUES ('Fifi','4.jpg','gato','não definida','rajada',0.5,'fêmea',false);
INSERT INTO animal(nome,foto,especie,raca,cor,idade,sexo,castrado) VALUES ('Rex','5.jpeg','cachorro','não definida','bege e preto',2,'macho',false);
INSERT INTO animal(nome,foto,especie,raca,cor,idade,sexo,castrado) VALUES ('Peludo','6.jpg','cachorro','não definida','bege e preto',1.5,'macho',true);
INSERT INTO animal(nome,foto,especie,raca,cor,idade,sexo,castrado) VALUES ('Bichano','7.jpg','gato','não definida','cinza',0.2,'macho',false);
INSERT INTO animal(nome,foto,especie,raca,cor,idade,sexo,castrado) VALUES ('Panda','8.jpg','cachorro','não definida','branco e preto',1,'fêmea',false);
INSERT INTO animal(nome,foto,especie,raca,cor,idade,sexo,castrado) VALUES ('Mimosa','9.jpg','gato','não definida','rajado',4,'fêmea',true);
INSERT INTO animal(nome,foto,especie,raca,cor,idade,sexo,castrado) VALUES ('Amigo','10.jpeg','cachorro','não definida','preto e marrom',4,'macho',true);
INSERT INTO animal(nome,foto,especie,raca,cor,idade,sexo,castrado) VALUES ('Bolado','11.jpg','gato','não definida','branco e marrom',4,'macho',true);
INSERT INTO animal(nome,foto,especie,raca,cor,idade,sexo,castrado) VALUES ('Feliz','12.jpg','cachorro','não definida','amarelo e branco',1,'macho',false);

# Popular tabela vacina
INSERT INTO vacina (nome) VALUES ("antirrábica");
INSERT INTO vacina (nome) VALUES ("parvovirose");
INSERT INTO vacina (nome) VALUES ("tosse dos canis");
INSERT INTO vacina (nome) VALUES ("leucemia");

# Popular tabela animal_vacina
INSERT INTO animal_vacina (id_animal, id_vacina) VALUES (1, 1);
INSERT INTO animal_vacina (id_animal, id_vacina) VALUES (1, 2);
INSERT INTO animal_vacina (id_animal, id_vacina) VALUES (2, 1);
INSERT INTO animal_vacina (id_animal, id_vacina) VALUES (3, 1);
INSERT INTO animal_vacina (id_animal, id_vacina) VALUES (3, 3);
INSERT INTO animal_vacina (id_animal, id_vacina) VALUES (4, 1);
INSERT INTO animal_vacina (id_animal, id_vacina) VALUES (4, 4);
INSERT INTO animal_vacina (id_animal, id_vacina) VALUES (5, 1);
INSERT INTO animal_vacina (id_animal, id_vacina) VALUES (6, 1);
INSERT INTO animal_vacina (id_animal, id_vacina) VALUES (7, 4);
INSERT INTO animal_vacina (id_animal, id_vacina) VALUES (10, 3);
INSERT INTO animal_vacina (id_animal, id_vacina) VALUES (11, 1);
INSERT INTO animal_vacina (id_animal, id_vacina) VALUES (12, 3);
INSERT INTO animal_vacina (id_animal, id_vacina) VALUES (12, 1);
INSERT INTO animal_vacina (id_animal, id_vacina) VALUES (12, 2);