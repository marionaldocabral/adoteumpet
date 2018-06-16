CREATE DATABASE adoteumpet;
use adoteumpet;
CREATE TABLE IF NOT EXISTS `usuario` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nome` varchar(150) NOT NULL,
  `email` varchar(150) NOT NULL,
  `senha` varchar(150) NOT NULL,
  PRIMARY KEY (`id`)
) DEFAULT CHARSET=utf8 AUTO_INCREMENT=1; 

CREATE TABLE IF NOT EXISTS `animal` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nome` varchar(150) NOT NULL,
  `foto` varchar(150) NOT NULL,
  `especie` varchar(150) NOT NULL,
  `raca` varchar(150) NOT NULL,
  `cor` varchar(150) NOT NULL,
  `idade` int(2) NOT NULL,
  `sexo` varchar(10) NOT NULL,
  `castrado` boolean NOT NULL,
  PRIMARY KEY (`id`)
) DEFAULT CHARSET=utf8 AUTO_INCREMENT=1; 

CREATE TABLE IF NOT EXISTS `vacina` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nome` varchar(150) NOT NULL,
  PRIMARY KEY (`id`)
) DEFAULT CHARSET=utf8 AUTO_INCREMENT=1; 

CREATE TABLE IF NOT EXISTS `animal_vacina` (
  `id_animal` int(11) NOT NULL,
  `id_vacina` int(11) NOT NULL,
  PRIMARY KEY (`id_animal`,`id_vacina`) 
) DEFAULT CHARSET=utf8 AUTO_INCREMENT=1; 

CREATE TABLE IF NOT EXISTS `adocao` (
  `id_usuario` int(11) NOT NULL,
  `id_animal` int(11) NOT NULL,
  `data_adocao` date,
  PRIMARY KEY (`id_usuario`, `id_animal`) 
) DEFAULT CHARSET=utf8 AUTO_INCREMENT=1; 

