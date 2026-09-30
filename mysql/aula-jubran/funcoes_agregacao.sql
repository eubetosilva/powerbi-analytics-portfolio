-- Aula Jubran - MySQL: Funções de Agregação
-- Banco: jubranjr_quan_albertos

-- COUNT: conta as linhas (resultado: 20)
SELECT COUNT(*)
FROM aluno;

-- MIN: menor valor -> aluno mais velho (resultado: 2000-05-18)
SELECT MIN(data_nascimento)
FROM aluno;

-- MAX: maior valor -> aluno mais novo (resultado: 2004-11-05)
SELECT MAX(data_nascimento)
FROM aluno;

-- SUM: soma da carga horária de todos os cursos (resultado: 13400)
SELECT SUM(carga_horaria)
FROM curso;

-- AVG: média da carga horária dos cursos (resultado: 2680)
SELECT AVG(carga_horaria)
FROM curso;
