-- Enunciado desafio 1

-- Ejercicio 1
select last_name from actors
where id = (select max(id) from actors);
-- Rta: "Gunn"

-- Ejercicio 2
select SUBSTRING_INDEX(title, ' ', 1) AS titulo from movies
LIMIT 1
OFFSET 4;
-- Rta: "Parque"

-- Ejercicio 3
select length from movies
where title = "Titanic";
-- Rta: 320

-- Ejercicio 4
select genre_id from series
where title = "Person of Interest";
-- Rta: 4

-- Ejercicio 5 No se que campos machean con cada cosa
select * 
from series, episodes
where series.id = episodes.id ;


-- Enunciado desafio 2

-- Ejercicio 1
select REVERSE(SUBSTRING_INDEX(REVERSE(SUBSTRING_INDEX(title, ' ',2)),' ',1)) AS segunda_palabra from movies
WHERE release_date BETWEEN 19991001 and 20041201
LIMIT 1
OFFSET 2;
-- Rta: 'rey'

-- Ejercicio 2
select SUBSTRING_INDEX(title, ' ',1) from movies
where id = (select max(id) from movies where title LIKE '%a');
-- Rta: "Hotel"

-- Ejercicio 3
select count(*) AS q_jim from actors
where first_name = 'Jim';
-- Rta: 1

-- Ejercicio 4
select sum(awards) AS tot_premios from movies
where title like "La Guerra de las galaxias%";
-- Rta: 13

-- Ejercicio 5
select REVERSE(SUBSTRING_INDEX(REVERSE(SUBSTRING_INDEX(title, ' ',3)),' ',1)) AS tercera_palabra from movies
where id =  (select favorite_movie_id from actors where first_name = "Leonardo" and last_name="Di Caprio");
-- Rta: 'de'

-- Enunciado desafio 3
select title from movies
where id = (select favorite_movie_id from actors where rating = 2.3 ORDER BY id LIMIT 1);
-- Rta: 'buscando a nemo'

