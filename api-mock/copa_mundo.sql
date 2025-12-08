-- cria o banco de dados
create database copa_mundo;

use copa_mundo;

-- cria a tabela 'seleções' com 3 colunas
create table selecoes (
id int auto_increment primary key, -- ID UNICO QUE AUMENTA AUTOMATICAMENTE
seleção varchar (100) not null, -- NOME DA SELEÇÃO, TEXTO ATÉ 100 CARACTERES
	grupo char (1) not null -- GRUPO DA SELEÇÃO, APENAS 1 LETRA (A,B E C)

);

select * from selecoes;

-- insere várias seleções de uma vez na tabela
insert into selecoes (selecoes,grupo) values

('brasil', 'A'),
('franca', 'B'),
('ilhas salomão', 'C'),
('nígeria', 'D'),
('Nova Zelandia', 'E'),
('japão', 'C');

select * from selecoes;


