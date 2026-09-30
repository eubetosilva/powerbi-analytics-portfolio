# Aula Jubran – MySQL: Funções de Agregação

Exercícios feitos no phpMyAdmin, no banco `jubranjr_quan_albertos` (tabelas `aluno`, `curso`, `matricula`, `turma`).

## Resumo

| Função | Significa | Comando | Resultado |
|---|---|---|---|
| `COUNT(*)` | contar | `SELECT COUNT(*) FROM aluno;` | 20 |
| `MIN(...)` | menor | `SELECT MIN(data_nascimento) FROM aluno;` | 2000-05-18 |
| `MAX(...)` | maior | `SELECT MAX(data_nascimento) FROM aluno;` | 2004-11-05 |
| `SUM(...)` | somar | `SELECT SUM(carga_horaria) FROM curso;` | 13400 |
| `AVG(...)` | média | `SELECT AVG(carga_horaria) FROM curso;` | 2680 |

## Regrinha

A função vai **logo depois do `SELECT`**, e o nome da coluna vai **dentro dos parênteses**.

```sql
-- Errado
SELECT *
FROM aluno
COUNT();

-- Certo
SELECT COUNT(*)
FROM aluno;
```

## Observações

- `SUM` e `AVG` só funcionam com colunas de **número** (tipo `int`). Colunas `varchar` são texto.
- `MIN` e `MAX` também funcionam com datas: `MIN` = data mais antiga (aluno mais velho), `MAX` = data mais recente (aluno mais novo).
- Para ver o tipo de cada coluna: clique na tabela → aba **Estrutura**.

## Estrutura das tabelas usadas

**aluno:** `id_aluno` (int), `nome` (varchar), `data_nascimento` (date), `cidade` (varchar), `email` (varchar)

**curso:** `id_curso` (int), `nome` (varchar), `carga_horaria` (int)

Consultas prontas: [`funcoes_agregacao.sql`](funcoes_agregacao.sql)
